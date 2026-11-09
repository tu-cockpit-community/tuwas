/**
 * Interpreter der Ablauf-Engine: fuehrt ein geparstes Programm (parser.ts) mit Java-Semantik aus und zeichnet dabei
 * Schritte auf (typen.ts). Werte tragen ihren Java-Typ (int als 32-Bit-Zahl, long als BigInt, char als Code, Strings
 * als Objekte mit Identitaet, Arrays als Referenzen), damit Ueberlauf, Ganzzahldivision, Promotion und `==` bei Strings
 * genau wie in Java herauskommen.
 *
 * Aufzeichnung: Jede Anweisung endet mit einem Schritt (fein = false). Jede Reduktion eines Teilausdrucks (Operator,
 * Aufruf, Cast, Arrayzugriff) erzeugt einen feinen Schritt mit der Umformungskette des ganzen Wurzelausdrucks bis hierher.
 */
import type { Ablauf, AblaufOptionen, Frame, SchrittArt, Variable, Wert, ZeichnungsStand } from "./typen";
import type { Form } from "../java/codedraw";
import { NichtUnterstuetzt, SyntaxFehler, zeilenAnfaenge, zeileZu } from "./lexer";
import {
  parseZusatz,
  typText,
  type Anweisung,
  type AnweisungVon,
  type ArrayInit,
  type Ausdruck,
  type AusdruckVon,
  type Bereich,
  type Fall,
  type Klasse,
  type Methode,
  type Programm,
} from "./parser";
import { charLiteral, doubleText, floatText, FormatFehler, javaFormat, stringLiteral, type FormatArg } from "./formatiere";
import { AWT_FARBEN, awtKonstante, FENSTER_STANDARD, formText, hexJ, MAX_FORMEN, PALETTE, zahlJ, zahlText } from "./codedraw";

export interface InterneOptionen extends AblaufOptionen {
  /** false: keine Schritte aufzeichnen (nur Ausgabe/Ergebnis; fuer lange Laeufe im Korpus-Abgleich) */
  aufzeichnen?: boolean;
  /** Obergrenze fuer Rechenschritte ohne Aufzeichnung */
  maxOps?: number;
  /** maximale Aufruftiefe (StackOverflowError) */
  maxTiefe?: number;
}

// ====================================================================== Laufzeitwerte

interface StrObj {
  k: "str";
  id: number;
  s: string;
  wert?: Wert;
}
interface ArrObj {
  k: "arr";
  id: number;
  /** Elementtyp, z. B. "int" oder bei 2D "int[]" */
  elem: string;
  w: JW[];
  ticks: number[];
  tick: number;
  version: number;
  cache?: { version: number; wert: Wert; kinder: Wert[]; flach: boolean };
}
interface SbObj {
  k: "sb";
  id: number;
  s: string;
  tick: number;
}
interface EingabeQuelle {
  text: string;
  pos: number;
}
interface ScannerObj {
  k: "scanner";
  id: number;
  quelle: EingabeQuelle;
  tick: number;
}
interface RandomObj {
  k: "random";
  id: number;
  seed: bigint;
  tick: number;
}
interface OutObj {
  k: "out";
  id: number;
  err: boolean;
}
interface InObj {
  k: "in";
  id: number;
}
interface ExcObj {
  k: "exc";
  id: number;
  name: string;
  meldung: string | null;
}
/** java.awt.Color (auch `Palette.RED`): unveraenderlich; `name` nur bei benannten Konstanten (deutscher Anzeigename) */
interface ColorObj {
  k: "color";
  id: number;
  r: number;
  g: number;
  b: number;
  a: number;
  name?: string;
  wert?: Wert;
}
/** Ein Zeichenfenster `CodeDraw`; die Formen stehen im gemeinsamen Protokoll des Laufs (wie beim Fake-CodeDraw) */
interface CdObj {
  k: "cd";
  id: number;
  breite: number;
  hoehe: number;
  farbe: ColorObj;
  linie: number;
  zu: boolean;
  tick: number;
  wert?: Wert;
}
type Obj = StrObj | ArrObj | SbObj | ScannerObj | RandomObj | OutObj | InObj | ExcObj | ColorObj | CdObj;

type JW =
  | { t: "int" | "short" | "byte" | "char"; v: number }
  | { t: "long"; v: bigint }
  | { t: "float" | "double"; v: number }
  | { t: "boolean"; v: boolean }
  /** `st`: statischer Typ, wichtig bei null (z. B. "String", damit `s + 1` verkettet) */
  | { t: "ref"; o: Obj | null; st: string }
  /** nur intern: ein Klassenname vor `.` (Math, Integer, eigene Klasse) */
  | { t: "klasse"; name: string };

type ZahlJW = Extract<JW, { t: "int" | "short" | "byte" | "char" | "long" | "float" | "double" }>;

const I = (v: number): JW => ({ t: "int", v: v | 0 });
const L = (v: bigint): JW => ({ t: "long", v: BigInt.asIntN(64, v) });
const D = (v: number): JW => ({ t: "double", v });
const F = (v: number): JW => ({ t: "float", v: Math.fround(v) });
const C = (v: number): JW => ({ t: "char", v: v & 0xffff });
const B = (v: boolean): JW => ({ t: "boolean", v });
const NULL = (st = "null"): JW => ({ t: "ref", o: null, st });
const N0 = BigInt(0);
const N1 = BigInt(1);

const PRIMITIV = new Set(["int", "long", "short", "byte", "char", "float", "double", "boolean"]);
const RANG: Record<string, number> = { byte: 1, short: 2, char: 2, int: 3, long: 4, float: 5, double: 6 };
const WEITER: Record<string, string[]> = {
  byte: ["short", "int", "long", "float", "double"],
  short: ["int", "long", "float", "double"],
  char: ["int", "long", "float", "double"],
  int: ["long", "float", "double"],
  long: ["float", "double"],
  float: ["double"],
  double: [],
};
const BIB_KLASSEN = new Set([
  "Math", "String", "Integer", "Long", "Double", "Float", "Character", "Boolean", "Short", "Byte", "Arrays", "System",
  "StringBuilder", "Scanner", "Random", "Objects", "Collections", "List", "ArrayList", "Map", "HashMap", "Thread", "CodeDraw",
  "Palette", "Color", "Files", "Paths", "LocalDate", "StrictMath", "IntStream", "Stream", "Collectors",
]);

function istZahl(w: JW): w is ZahlJW {
  return w.t in RANG;
}
function istGanz(t: string): boolean {
  return t === "int" || t === "long" || t === "short" || t === "byte" || t === "char";
}
function promo(a: string, b: string): "int" | "long" | "float" | "double" {
  if (a === "double" || b === "double") return "double";
  if (a === "float" || b === "float") return "float";
  if (a === "long" || b === "long") return "long";
  return "int";
}
function alsZahl(w: ZahlJW): number {
  return typeof w.v === "bigint" ? Number(w.v) : w.v;
}
function alsBig(w: ZahlJW): bigint {
  return typeof w.v === "bigint" ? w.v : BigInt(Math.trunc(w.v));
}

/** numerische Umwandlung (Cast-Semantik) */
function wandle(w: ZahlJW, ziel: string): JW {
  if (w.t === ziel) return w;
  switch (ziel) {
    case "double":
      return D(alsZahl(w));
    case "float":
      return F(alsZahl(w));
    case "long": {
      if (w.t === "long") return w;
      if (w.t === "double" || w.t === "float") {
        const x = w.v;
        if (Number.isNaN(x)) return L(N0);
        if (x >= 9223372036854775807) return L(BigInt("9223372036854775807"));
        if (x <= -9223372036854775808) return L(BigInt("-9223372036854775808"));
        return L(BigInt(Math.trunc(x)));
      }
      return L(BigInt(w.v));
    }
    case "int":
    case "short":
    case "byte":
    case "char": {
      let n: number;
      if (w.t === "long") n = Number(BigInt.asIntN(32, w.v));
      else if (w.t === "double" || w.t === "float") {
        const x = w.v;
        n = Number.isNaN(x) ? 0 : x >= 2147483647 ? 2147483647 : x <= -2147483648 ? -2147483648 : Math.trunc(x) | 0;
      } else n = w.v;
      if (ziel === "int") return I(n);
      if (ziel === "char") return C(n);
      if (ziel === "short") return { t: "short", v: (n << 16) >> 16 };
      return { t: "byte", v: (n << 24) >> 24 };
    }
  }
  throw new Error("unbekannter Zieltyp " + ziel);
}

function typVon(w: JW): string {
  if (w.t !== "ref") return w.t === "klasse" ? w.name : w.t;
  const o = w.o;
  if (!o) return w.st;
  switch (o.k) {
    case "str":
      return "String";
    case "arr":
      return o.elem + "[]";
    case "sb":
      return "StringBuilder";
    case "scanner":
      return "Scanner";
    case "random":
      return "Random";
    case "out":
      return "PrintStream";
    case "in":
      return "InputStream";
    case "exc":
      return o.name;
    case "color":
      return "Color";
    case "cd":
      return "CodeDraw";
  }
}

function istStringW(w: JW): boolean {
  return w.t === "ref" && (w.o ? w.o.k === "str" : w.st === "String");
}

// ====================================================================== Signale

class JavaFehler {
  constructor(
    public name: string,
    public meldung: string | null,
    public stelle: (Bereich & { q: number }) | null,
  ) {}
}
class Abbruch {
  constructor(public grund: "schritte" | "zeit" | "ausgabe" | "stapel") {}
}
class ProgrammEnde {
  constructor(
    public code: number,
    public stelle: Bereich & { q: number },
  ) {}
}
export class CompilerFehler {
  constructor(
    public meldung: string,
    public stelle: (Bereich & { q: number }) | null,
  ) {}
}

type Signal = { k: "break" | "continue"; label: string | null; stelle: Bereich & { q: number } } | { k: "return"; w: JW | null } | { k: "yield"; w: JW } | undefined;

// ====================================================================== Frames, Variablen, Ketten

interface Slot {
  name: string;
  typ: string;
  w: JW | undefined;
  final: boolean;
  konstant: boolean;
  angelegt: number;
  geschrieben: number;
  versteckt?: boolean;
  frame: RFrame | null;
}

interface RFrame {
  anzeige: string;
  methode: Methode | null;
  klasse: string;
  scopes: Slot[][];
  zeile: number;
  sichtbar: boolean;
  beruehrt: number;
  aufrufText: string;
  schleifenTiefe: number;
  /** innerste Ziele von `break`: "schleife" oder "switch" */
  ziele: string[];
  snap?: { tick: number; zeile: number; frame: Frame; werte: (Wert | null)[]; slots: Slot[]; markiert: boolean };
}

/** Umformungskette eines Wurzelausdrucks: Teilbereiche werden nach und nach durch ihre Werte ersetzt. */
class Kontext {
  formen: string[];
  ersetzt: { von: number; bis: number; text: string }[] = [];
  gelesen: { name: string; text: string }[] = [];
  reduktionen = 0;
  constructor(
    private q: string,
    public von: number,
    public bis: number,
  ) {
    this.formen = [this.render()];
  }
  ersetze(b: Bereich, text: string) {
    if (b.von < this.von || b.bis > this.bis) return;
    const neu = this.ersetzt.filter((x) => x.bis <= b.von || x.von >= b.bis);
    let i = 0;
    while (i < neu.length && neu[i].von < b.von) i++;
    neu.splice(i, 0, { von: b.von, bis: b.bis, text });
    this.ersetzt = neu;
  }
  render(): string {
    let out = "";
    let p = this.von;
    for (const x of this.ersetzt) {
      out += this.q.slice(p, x.von) + x.text;
      p = x.bis;
    }
    out += this.q.slice(p, this.bis);
    return out.replace(/\s*\n\s*/g, " ");
  }
  notiere() {
    const r = this.render();
    if (r !== this.formen[this.formen.length - 1]) this.formen.push(r);
  }
  lies(name: string, text: string) {
    if (!this.gelesen.some((g) => g.name === name)) this.gelesen.push({ name, text });
  }
}

type Stelle = Bereich & { q: number };

// ====================================================================== Hilfen fuer Texte

function bt(code: string): string {
  return "`" + code.replace(/`/g, "'") + "`";
}
function wahrText(b: boolean): string {
  return b ? "wahr" : "falsch";
}
function codeKurz(text: string, max = 50): string {
  const t = text.replace(/\s+/g, " ").trim().replace(/;$/, "");
  return t.length > max ? t.slice(0, max - 1) + "…" : t;
}
function aufzaehlen(teile: string[]): string {
  if (teile.length <= 1) return teile.join("");
  return teile.slice(0, -1).join(", ") + " und " + teile[teile.length - 1];
}

// ====================================================================== Der Lauf

export interface LaufErgebnis {
  ablauf: Ablauf;
}

export class Lauf {
  private anfaenge: number[];
  private klassen = new Map<string, Klasse>();
  private aussenKlasse = new Map<string, string>();
  private opt: Required<Pick<InterneOptionen, "maxSchritte" | "maxAusgabe" | "maxMs" | "maxOps" | "maxTiefe">> & { aufzeichnen: boolean };
  private schritte: Ablauf["schritte"] = [];
  private ausgabe = "";
  private gezeigtAlle = 0;
  private gezeigtZeile = 0;
  private frames: RFrame[] = [];
  private statisch = new Map<string, Map<string, Slot>>();
  private statischListe: { klasse: string; slot: Slot }[] = [];
  private tick = 0;
  private refAlle = 0;
  private refZeile = 0;
  private ctx: Kontext | null = null;
  private ohneSchritt: Ausdruck | null = null;
  private still = 0;
  private ops = 0;
  private deadline: number;
  private naechsteId = 1;
  private pool = new Map<string, StrObj>();
  private stdin: EingabeQuelle;
  private anwInfo: (() => string) | null = null;
  private abgeschnitten: Ablauf["abgeschnitten"];
  private enthaeltSchleifeCache = new Map<Anweisung, boolean>();
  private methodenAnzeige = new Map<Methode, string>();
  /** unveraenderliche Wert-Objekte fuer einfache Werte teilen (spart Speicher bei vielen Schnappschuessen) */
  private wertCache = new Map<string, Wert>();
  private sysOut: OutObj;
  private sysErr: OutObj;
  private sysIn: InObj;
  // CodeDraw: gemeinsames Protokoll aller Formen, wie die statische Liste des Fake-CodeDraw (jeder Zeichenaufruf haengt
  // eine Form an; ein Schritt merkt sich nur Laenge und Loeschstand des Protokolls)
  private formen: Form[] = [];
  /** Groesse der Liste des Fakes: nach `clear()` nur noch die Fenster-Eintraege plus der Hintergrund */
  private formenAktuell = 0;
  private fensterZahl = 0;
  private zeichenAb = 0;
  private zeichenGezeigt = 0;
  private letzterStand: ZeichnungsStand | null = null;
  private farbKonstanten = new Map<string, ColorObj>();

  constructor(
    private prog: Programm,
    private quelle: string,
    private optionen: InterneOptionen,
  ) {
    this.anfaenge = zeilenAnfaenge(quelle);
    const aufzeichnen = optionen.aufzeichnen !== false;
    this.opt = {
      maxSchritte: optionen.maxSchritte ?? 3000,
      maxAusgabe: optionen.maxAusgabe ?? 20000,
      maxMs: optionen.maxMs ?? 1500,
      maxOps: optionen.maxOps ?? (aufzeichnen ? 5_000_000 : 50_000_000),
      // SHORTCUT: 500 statt ~900 Aufrufebenen, weil der JavaScript-Stapel im Browser je Java-Aufruf rund ein Dutzend
      // Rahmen braucht und sonst vorher ueberlaeuft (gemessen: 600-850 Ebenen mit Aufzeichnung). Tiefere, korrekte
      // Rekursionen enden als `abgeschnitten: "stapel"`; erst ein iterativer Interpreter wuerde das aufheben.
      maxTiefe: optionen.maxTiefe ?? 500,
      aufzeichnen,
    };
    this.deadline = Date.now() + this.opt.maxMs;
    for (const k of prog.klassen) this.klassen.set(k.name, k);
    for (const k of prog.klassen) {
      for (const andere of prog.klassen) {
        if (andere !== k && andere.von < k.von && andere.bis > k.bis && !this.aussenKlasse.has(k.name)) this.aussenKlasse.set(k.name, andere.name);
      }
    }
    this.stdin = { text: (optionen.stdin ?? "").replace(/\r\n/g, "\n"), pos: 0 };
    this.sysOut = { k: "out", id: this.naechsteId++, err: false };
    this.sysErr = { k: "out", id: this.naechsteId++, err: true };
    this.sysIn = { k: "in", id: this.naechsteId++ };
  }

  // ------------------------------------------------------------------ Start

  starte(): Ablauf {
    const haupt = this.klassen.get(this.prog.haupt)!;
    let ergebnis: string | undefined;
    let fehler: Ablauf["fehler"];
    const aufruf = this.optionen.aufruf?.trim() ? this.optionen.aufruf.trim() : undefined;
    const vorher = this.optionen.vorher?.trim() ? this.optionen.vorher.trim() : undefined;
    let hauptMethode: Methode | null = null;
    try {
      try {
        // statische Felder und Bloecke (ohne Schritte)
        const init: RFrame = this.neuerFrame("<clinit>", null, haupt.name, false);
        this.frames.push(init);
        this.still++;
        for (const k of this.prog.klassen) this.initialisiereKlasse(k);
        this.still--;
        this.frames.pop();
        if (aufruf !== undefined) {
          const zusatzVorher = vorher ? zusatz(vorher, 1, "vorher") : null;
          const zusatzAufruf = zusatz(aufruf, 2, "Aufruf");
          const f = this.neuerFrame("Aufruf", null, haupt.name, false);
          this.frames.push(f);
          if (zusatzVorher) {
            this.still++;
            const anw = "anweisungen" in zusatzVorher ? zusatzVorher.anweisungen : [{ k: "ausdr" as const, ausdr: zusatzVorher.ausdruck, von: 0, bis: 0, q: 1 }];
            for (const a of anw) this.fuehre(a);
            this.still--;
            f.sichtbar = f.scopes.some((s) => s.some((x) => !x.versteckt));
          }
          if ("ausdruck" in zusatzAufruf) {
            const a = zusatzAufruf.ausdruck;
            hauptMethode = this.direkterAufruf(a);
            const w = this.wertOderVoid(a);
            if (w !== null) ergebnis = this.ergebnisText(w);
          } else {
            for (const a of zusatzAufruf.anweisungen) {
              const sig = this.fuehre(a);
              if (sig) break;
            }
          }
          const kopf = hauptMethode && hauptMethode.kopfVon >= 0 ? { von: hauptMethode.kopfVon, bis: hauptMethode.kopfBis, q: 0 } : { von: 0, bis: 0, q: 0 };
          this.schritt(
            "ende",
            kopf,
            () => ergebnis !== undefined
              ? `Der Aufruf ${bt(aufruf)} ist fertig. Rückgabewert: ${ergebnis}.`
              : `Der Aufruf ${bt(aufruf)} ist fertig.`,
          );
        } else {
          const main = haupt.methoden.find((m) => m.name === "main" && m.statisch && m.params.length === 1 && typText(m.params[0].typ) === "String[]");
          if (!main || !main.rumpf) {
            if (this.prog.nurMethoden)
              throw new NichtUnterstuetzt("Hier stehen nur Methoden ohne Aufruf. Eine Methode läuft erst, wenn sie jemand aufruft (zum Beispiel aus `main`).");
            throw new NichtUnterstuetzt(`Die Klasse \`${haupt.name}\` hat keine \`main\`-Methode, die laufen könnte.`);
          }
          hauptMethode = main;
          const f = this.neuerFrame("main", main, haupt.name, true);
          this.frames.push(f);
          const args = this.neuesArray("String", []);
          this.legeAn(f, "args", "String[]", args, false).versteckt = true;
          if (main.kopfVon >= 0)
            this.schritt("aufruf", { von: main.kopfVon, bis: main.kopfBis, q: 0 }, () => "Das Programm startet: Java führt die Methode `main` aus, Anweisung für Anweisung von oben nach unten.");
          const sig = this.fuehreListe(main.rumpf.anw);
          void sig;
          this.schritt("ende", this.endStelle(main), () => "Das Programm ist zu Ende.");
        }
      } catch (e) {
        // JavaScript-Stapel voll: Grenze der Ansicht, kein Fehler des Java-Programms
        if (e instanceof RangeError && /call stack/i.test(e.message)) throw new Abbruch("stapel");
        throw e;
      }
    } catch (e) {
      if (e instanceof JavaFehler) {
        if (e.name === "StackOverflowError") this.abgeschnitten = "stapel";
        const stelle = e.stelle && e.stelle.q === 0 ? e.stelle : this.letzteStelle();
        fehler = { name: e.name, meldung: e.meldung ?? "", zeile: zeileZu(this.anfaenge, stelle.von) };
        this.still = 0;
        this.ctx = null;
        try {
          this.schritt("ende", stelle, () => this.fehlerErklaerung(e), {}, true);
        } catch {
          /* Schrittgrenze: dann ohne letzten Schritt */
        }
      } else if (e instanceof Abbruch) {
        this.abgeschnitten = e.grund;
      } else if (e instanceof ProgrammEnde) {
        this.still = 0;
        try {
          this.schritt("ende", e.stelle.q === 0 ? e.stelle : this.letzteStelle(), () => `${bt(`System.exit(${e.code})`)} beendet das Programm sofort.`, {}, true);
        } catch {
          /* Schrittgrenze */
        }
      } else throw e;
    }
    const ablauf: Ablauf = { quelle: this.quelle, schritte: this.schritte, ausgabe: this.ausgabe };
    if (this.abgeschnitten) ablauf.abgeschnitten = this.abgeschnitten;
    if (fehler) ablauf.fehler = fehler;
    if (aufruf !== undefined) ablauf.aufruf = aufruf;
    if (vorher !== undefined) ablauf.vorher = vorher;
    if (this.formen.length) ablauf.formen = this.formen;
    if (ergebnis !== undefined && !fehler && !this.abgeschnitten) ablauf.ergebnis = ergebnis;
    return ablauf;
  }

  private direkterAufruf(a: Ausdruck): Methode | null {
    if (a.k !== "aufruf" || (a.ziel !== null && this.alsKlasse(a.ziel) === null)) return null;
    const k = a.ziel ? this.alsKlasse(a.ziel)! : this.prog.haupt;
    const m = this.methodenVon(k, a.name);
    return m.length === 1 ? m[0] : m.find((x) => x.params.length === a.args.length) ?? null;
  }

  private endStelle(m: Methode): Stelle {
    const r = m.rumpf!;
    if (m.kopfVon >= 0) return { von: r.bis - 1, bis: r.bis, q: 0 };
    return { von: r.bis, bis: r.bis, q: 0 };
  }

  private letzteStelle(): Stelle {
    const s = this.schritte[this.schritte.length - 1];
    return s ? { von: s.von, bis: s.bis, q: 0 } : { von: 0, bis: 0, q: 0 };
  }

  private initialisiereKlasse(k: Klasse) {
    const felder = new Map<string, Slot>();
    this.statisch.set(k.name, felder);
    for (const fd of k.felder) {
      if (!fd.statisch) continue;
      for (const d of fd.dekl) {
        const typ = typText(fd.typ) + "[]".repeat(d.dims);
        const slot: Slot = { name: d.name, typ, w: undefined, final: fd.final, konstant: false, angelegt: 0, geschrieben: 0, frame: null };
        felder.set(d.name, slot);
        this.statischListe.push({ klasse: k.name, slot });
        if (d.init) {
          this.pruefeTyp(typ, fd.typ);
          slot.w = this.initWert(d.init, typ);
          slot.konstant = fd.final && (PRIMITIV.has(typ) || typ === "String") && this.istKonstant(d.init);
        } else slot.w = this.standardWert(typ);
        slot.angelegt = slot.geschrieben = ++this.tick;
      }
    }
    for (const b of k.statischeBloecke) this.fuehreListe(b.anw);
  }

  // ------------------------------------------------------------------ Frames und Variablen

  private neuerFrame(anzeige: string, m: Methode | null, klasse: string, sichtbar: boolean): RFrame {
    return { anzeige, methode: m, klasse, scopes: [[]], zeile: m && m.kopfVon >= 0 ? zeileZu(this.anfaenge, m.kopfVon) : 1, sichtbar, beruehrt: ++this.tick, aufrufText: anzeige, schleifenTiefe: 0, ziele: [] };
  }

  /** Werden gerade Schritte (und damit Erklaersaetze) aufgezeichnet? */
  private get texte(): boolean {
    return this.opt.aufzeichnen && this.still === 0;
  }

  private get oben(): RFrame {
    return this.frames[this.frames.length - 1];
  }

  private legeAn(f: RFrame, name: string, typ: string, w: JW | undefined, final: boolean): Slot {
    const s: Slot = { name, typ, w, final, konstant: false, angelegt: 0, geschrieben: 0, frame: f };
    if (w !== undefined) s.angelegt = s.geschrieben = ++this.tick;
    f.scopes[f.scopes.length - 1].push(s);
    f.beruehrt = ++this.tick;
    return s;
  }

  private schreibe(s: Slot, w: JW) {
    const erst = s.w === undefined;
    s.w = w;
    s.geschrieben = ++this.tick;
    if (erst) s.angelegt = this.tick;
    if (s.frame) s.frame.beruehrt = this.tick;
  }

  private findeLokal(name: string): Slot | null {
    const f = this.oben;
    if (!f) return null;
    for (let i = f.scopes.length - 1; i >= 0; i--) {
      const sc = f.scopes[i];
      for (let j = sc.length - 1; j >= 0; j--) if (sc[j].name === name) return sc[j];
    }
    return null;
  }

  private findeStatisch(klasse: string, name: string): Slot | null {
    let k: string | undefined = klasse;
    while (k) {
      const s = this.statisch.get(k)?.get(name);
      if (s) return s;
      k = this.aussenKlasse.get(k);
    }
    return null;
  }

  private findeVariable(name: string): Slot | null {
    return this.findeLokal(name) ?? (this.oben ? this.findeStatisch(this.oben.klasse, name) : null);
  }

  private methodenVon(klasse: string, name: string): Methode[] {
    let k: string | undefined = klasse;
    while (k) {
      const kl = this.klassen.get(k);
      const m = kl?.methoden.filter((x) => x.name === name) ?? [];
      if (m.length) return m;
      k = this.aussenKlasse.get(k);
    }
    return [];
  }

  // ------------------------------------------------------------------ Schritte

  private zaehle() {
    this.ops++;
    if ((this.ops & 1023) === 0) {
      if (this.ops > this.opt.maxOps) throw new Abbruch(this.opt.aufzeichnen ? "zeit" : "schritte");
      if (Date.now() > this.deadline) throw new Abbruch("zeit");
    }
  }

  private schritt(
    art: SchrittArt,
    b: Stelle,
    erkl: () => string,
    extra: { fein?: boolean; auswertung?: string[]; bedingung?: boolean; rueckgabe?: string } = {},
    erzwingen = false,
  ) {
    if ((this.still > 0 && !erzwingen) || !this.opt.aufzeichnen || b.q !== 0) return;
    if (this.schritte.length >= this.opt.maxSchritte) throw new Abbruch("schritte");
    if (Date.now() > this.deadline) throw new Abbruch("zeit");
    const fein = extra.fein ?? false;
    const zeile = zeileZu(this.anfaenge, Math.min(b.von, this.quelle.length));
    const oben = this.frames[this.frames.length - 1];
    if (oben && art !== "ende") oben.zeile = zeile;
    const ref = fein ? this.refAlle : this.refZeile;
    const gezeigt = fein ? this.gezeigtAlle : this.gezeigtZeile;
    const s: Ablauf["schritte"][number] = {
      zeile,
      von: b.von,
      bis: b.bis,
      art,
      fein,
      erklaerung: erkl(),
      frames: this.frames.filter((f) => f.sichtbar).map((f) => this.frameSchnappschuss(f, ref)),
      ausgabe: this.ausgabe,
      neueAusgabe: this.ausgabe.slice(gezeigt),
    };
    const zeichnung = this.zeichnungStand();
    if (zeichnung) s.zeichnung = zeichnung;
    if (extra.auswertung && extra.auswertung.length >= 2) s.auswertung = extra.auswertung;
    if (extra.bedingung !== undefined) s.bedingung = extra.bedingung;
    if (extra.rueckgabe !== undefined) s.rueckgabe = extra.rueckgabe;
    if (this.statischListe.length) {
      const mehrere = new Set(this.statischListe.map((x) => x.klasse)).size > 1;
      s.felder = this.statischListe
        .filter((x) => x.slot.w !== undefined)
        .map((x) => this.variable(x.slot, ref, mehrere && x.klasse !== this.prog.haupt ? `${x.klasse}.${x.slot.name}` : x.slot.name).v);
    }
    this.gezeigtAlle = this.ausgabe.length;
    if (!fein) this.gezeigtZeile = this.ausgabe.length;
    this.refAlle = this.tick;
    if (!fein) this.refZeile = this.tick;
    this.schritte.push(s);
  }

  /** Stand der Zeichenflaeche (gleiches Objekt, solange sich nichts aendert); undefined vor dem ersten Fenster */
  private zeichnungStand(): ZeichnungsStand | undefined {
    if (!this.formen.length) return undefined;
    const l = this.letzterStand;
    if (l && l.anzahl === this.formen.length && l.ab === this.zeichenAb && l.gezeigt === this.zeichenGezeigt) return l;
    return (this.letzterStand = { anzahl: this.formen.length, ab: this.zeichenAb, gezeigt: this.zeichenGezeigt });
  }

  private variable(s: Slot, ref: number, name = s.name): { v: Variable; markiert: boolean; wert: Wert } {
    const wert = this.zuWert(s.w!);
    const v: Variable = { name, typ: s.typ, wert };
    let markiert = false;
    if (s.angelegt > ref) {
      v.neu = true;
      markiert = true;
    } else {
      const zellen = this.geaenderteZellen(s.w!, ref);
      if (s.geschrieben > ref || zellen !== null) {
        v.geaendert = true;
        markiert = true;
        if (zellen && zellen.length && s.geschrieben <= ref) v.geaenderteElemente = zellen;
      }
    }
    return { v, markiert, wert };
  }

  /** null: Objekt unveraendert; sonst Liste geaenderter Zellen (leer bei StringBuilder/Scanner) */
  private geaenderteZellen(w: JW, ref: number): string[] | null {
    if (w.t !== "ref" || !w.o) return null;
    const o = w.o;
    if (o.k === "sb" || o.k === "scanner" || o.k === "random" || o.k === "cd") return o.tick > ref ? [] : null;
    if (o.k !== "arr") return null;
    const zellen: string[] = [];
    let geaendert = o.tick > ref;
    for (let i = 0; i < o.w.length; i++) {
      const el = o.w[i];
      if (o.ticks[i] > ref) {
        if (el.t === "ref" && el.o && el.o.k === "arr") el.o.w.forEach((_, j) => zellen.push(`${i},${j}`));
        else zellen.push(String(i));
      } else if (el.t === "ref" && el.o && el.o.k === "arr") {
        const inner = el.o;
        if (inner.tick > ref) {
          geaendert = true;
          for (let j = 0; j < inner.w.length; j++) if (inner.ticks[j] > ref) zellen.push(`${i},${j}`);
        }
      }
    }
    return geaendert ? zellen : null;
  }

  private frameSchnappschuss(f: RFrame, ref: number): Frame {
    const c = f.snap;
    if (c && !c.markiert && c.zeile === f.zeile && f.beruehrt <= c.tick && c.tick <= ref) {
      let gleich = true;
      for (let k = 0; k < c.slots.length; k++) {
        const s = c.slots[k];
        if (s.w && s.w.t === "ref" && s.w.o && this.zuWert(s.w) !== c.werte[k]) {
          gleich = false;
          break;
        }
        if (s.w && this.geaenderteZellen(s.w, ref) !== null) {
          gleich = false;
          break;
        }
      }
      if (gleich) return c.frame;
    }
    const variablen: Variable[] = [];
    const slots: Slot[] = [];
    const werte: (Wert | null)[] = [];
    let markiert = false;
    for (const sc of f.scopes)
      for (const s of sc) {
        if (s.w === undefined || s.versteckt) continue;
        const r = this.variable(s, ref);
        variablen.push(r.v);
        slots.push(s);
        werte.push(r.wert);
        if (r.markiert) markiert = true;
      }
    const frame: Frame = { methode: f.anzeige, zeile: f.zeile, variablen };
    f.snap = { tick: this.tick, zeile: f.zeile, frame, werte, slots, markiert };
    return frame;
  }

  private einfach(art: "int" | "long" | "double" | "char" | "boolean", schluessel: string, text: () => string): Wert {
    const k = art + schluessel;
    let w = this.wertCache.get(k);
    if (!w) {
      if (this.wertCache.size > 50000) this.wertCache.clear();
      w = { art, text: text() };
      this.wertCache.set(k, w);
    }
    return w;
  }

  private zuWert(w: JW): Wert {
    switch (w.t) {
      case "int":
      case "short":
      case "byte":
        return this.einfach("int", String(w.v), () => String(w.v));
      case "long":
        return this.einfach("long", w.v.toString(), () => w.v.toString());
      case "double":
        return this.einfach("double", Object.is(w.v, -0) ? "-0" : String(w.v), () => doubleText(w.v));
      case "float":
        return this.einfach("double", "f" + (Object.is(w.v, -0) ? "-0" : String(w.v)), () => floatText(w.v));
      case "char":
        return this.einfach("char", String(w.v), () => String.fromCharCode(w.v));
      case "boolean":
        return this.einfach("boolean", String(w.v), () => String(w.v));
      case "klasse":
        return { art: "objekt", typ: "Klasse", text: w.name };
    }
    const o = w.o;
    if (!o) return { art: "null" };
    switch (o.k) {
      case "str":
        if (!o.wert) o.wert = { art: "String", text: o.s };
        return o.wert;
      case "arr": {
        const c = o.cache;
        if (c && c.flach && c.version === o.version) return c.wert;
        const kinder = o.w.map((x) => this.zuWert(x));
        if (c && c.version === o.version && c.kinder.length === kinder.length && c.kinder.every((k, i) => k === kinder[i])) return c.wert;
        const wert: Wert = { art: "array", id: o.id, elementTyp: o.elem, elemente: kinder };
        o.cache = { version: o.version, wert, kinder, flach: !o.w.some((x) => x.t === "ref" && !!x.o && x.o.k === "arr") };
        return wert;
      }
      case "sb":
        return { art: "objekt", typ: "StringBuilder", text: o.s };
      case "scanner": {
        const rest = o.quelle.text.slice(o.quelle.pos);
        return { art: "objekt", typ: "Scanner", text: rest ? `noch nicht gelesen: ${stringLiteral(rest, 40)}` : "alles gelesen" };
      }
      case "random":
        return { art: "objekt", typ: "Random", text: "Zufallsgenerator mit festem Startwert" };
      case "out":
        return { art: "objekt", typ: "PrintStream", text: o.err ? "System.err" : "System.out" };
      case "in":
        return { art: "objekt", typ: "InputStream", text: "System.in" };
      case "exc":
        return { art: "objekt", typ: o.name, text: o.meldung ?? "" };
      case "color":
        if (!o.wert) o.wert = { art: "objekt", typ: "Color", text: farbWort(o), farbe: hexJ(o.r, o.g, o.b) };
        return o.wert;
      case "cd":
        if (!o.wert)
          o.wert = {
            art: "objekt",
            typ: "CodeDraw",
            text: `CodeDraw ${o.breite}×${o.hoehe}, Farbe ${farbWort(o.farbe)}, Linienbreite ${zahlText(o.linie)}${o.zu ? ", geschlossen" : ""}`,
            farbe: hexJ(o.farbe.r, o.farbe.g, o.farbe.b),
          };
        return o.wert;
    }
  }

  // ------------------------------------------------------------------ Ketten und feine Schritte

  /** Text eines Werts in Java-Schreibweise fuer die Umformungskette (null: nicht darstellbar) */
  private kettenText(w: JW, ziel = false): string | null {
    switch (w.t) {
      case "int":
      case "short":
      case "byte":
        return String(w.v);
      case "long":
        return w.v.toString();
      case "double":
        return doubleText(w.v);
      case "float":
        return floatText(w.v);
      case "char":
        return charLiteral(w.v);
      case "boolean":
        return String(w.v);
      case "klasse":
        return null;
    }
    const o = w.o;
    if (!o) return "null";
    if (o.k === "str") return stringLiteral(o.s);
    if (o.k === "arr" && !ziel && o.w.length <= 10 && o.w.every((x) => x.t !== "ref" || !x.o || x.o.k === "str")) return "{" + o.w.map((x) => this.kettenText(x)).join(", ") + "}";
    return null;
  }

  /** Anzeigetext fuer Erklaersaetze */
  private zeige(w: JW): string {
    if (w.t === "ref" && w.o) {
      const o = w.o;
      if (o.k === "arr") return "{" + o.w.slice(0, 8).map((x) => this.zeige(x)).join(", ") + (o.w.length > 8 ? ", …" : "") + "}";
      if (o.k === "sb") return `StringBuilder ${stringLiteral(o.s, 40)}`;
      if (o.k === "scanner") return "ein Scanner";
      if (o.k === "random") return "ein Zufallsgenerator";
      if (o.k === "exc") return o.name;
      if (o.k === "out") return o.err ? "System.err" : "System.out";
      if (o.k === "in") return "System.in";
      if (o.k === "str") return stringLiteral(o.s, 40);
      if (o.k === "color") return farbWort(o);
      if (o.k === "cd") return `CodeDraw ${o.breite}×${o.hoehe}`;
    }
    return this.kettenText(w) ?? "?";
  }

  /** Rueckgabewert wie der Java-Runner ihn zeigt: Strings in Anfuehrungszeichen, Arrays als [1, 2, 3] */
  ergebnisText(w: JW): string {
    if (w.t === "ref") {
      const o = w.o;
      if (!o) return "null";
      if (o.k === "str") return '"' + o.s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"';
      if (o.k === "arr") return "[" + o.w.map((x) => this.ergebnisText(x)).join(", ") + "]";
      if (o.k === "sb") return o.s;
      return this.zeige(w);
    }
    if (w.t === "char") return "'" + String.fromCharCode(w.v) + "'";
    return this.textVon(w);
  }

  private neuerKontext(root: Ausdruck | null) {
    this.ctx = root && this.opt.aufzeichnen && root.q === 0 && this.still === 0 ? new Kontext(this.quelle, root.von, root.bis) : null;
  }

  private kette(): string[] | undefined {
    const c = this.ctx;
    return c && c.reduktionen > 0 ? c.formen.slice() : undefined;
  }

  private mitWerten(ohne?: string): string {
    const c = this.ctx;
    if (!c) return "";
    const g = c.gelesen.filter((x) => x.name !== ohne).slice(0, 4);
    if (!g.length) return "";
    return " mit " + aufzaehlen(g.map((x) => `${x.name} = ${x.text}`));
  }

  /** Teilausdruck reduziert: Kette fortschreiben und feinen Schritt aufzeichnen */
  private red(e: Ausdruck, w: JW, erkl: () => string, ziel = false): JW {
    const c = this.ctx;
    if (c && e.q === 0 && this.still === 0) {
      c.reduktionen++;
      c.notiere();
      const t = this.kettenText(w, ziel);
      if (t !== null) c.ersetze(e.aussen ?? e, t);
      c.notiere();
      if (e !== this.ohneSchritt) this.schritt("ausdruck", e, erkl, { fein: true, auswertung: c.formen.slice() });
    }
    return w;
  }

  private notiereLesen(e: Ausdruck, w: JW, name: string) {
    const c = this.ctx;
    if (!c || e.q !== 0 || this.still > 0) return;
    if (w.t === "ref" && w.o && w.o.k !== "str") return;
    const t = this.kettenText(w);
    if (t === null) return;
    c.ersetze(e.aussen ?? e, t);
    c.lies(name, t);
  }

  private code(e: Bereich & { q: number }): string {
    if (e.q !== 0) return "…";
    return this.quelle.slice(e.von, e.bis).replace(/\s+/g, " ");
  }

  // ------------------------------------------------------------------ Typpruefung und Umwandlung

  private pruefeTyp(typ: string, stelle?: Bereich & { paket?: string }) {
    const basis = typ.replace(/\[\]/g, "");
    if (PRIMITIV.has(basis) || ["String", "StringBuilder", "Scanner", "Random"].includes(basis)) return;
    if (basis === "CodeDraw" || basis === "Color") {
      if (stelle && stelle.paket === undefined) this.pruefeImport(basis, stelle);
      return;
    }
    if (this.klassen.has(basis)) throw new NichtUnterstuetzt(`Klassen mit Objekten (Typ \`${basis}\`) zeigt die Ablaufansicht (noch) nicht.`, stelle?.von);
    if (["Integer", "Double", "Long", "Character", "Boolean", "Short", "Byte", "Float"].includes(basis))
      throw new NichtUnterstuetzt(`Wrapper-Typen wie \`${basis}\` zeigt die Ablaufansicht (noch) nicht.`, stelle?.von);
    throw new NichtUnterstuetzt(`Der Typ \`${basis}\` wird in der Ablaufansicht (noch) nicht unterstützt.`, stelle?.von);
  }

  private standardWert(typ: string): JW {
    switch (typ) {
      case "int":
        return I(0);
      case "long":
        return L(N0);
      case "short":
        return { t: "short", v: 0 };
      case "byte":
        return { t: "byte", v: 0 };
      case "char":
        return C(0);
      case "float":
        return F(0);
      case "double":
        return D(0);
      case "boolean":
        return B(false);
    }
    return NULL(typ);
  }

  /** Zuweisungsumwandlung (Deklaration, Zuweisung, return). `ausdr` fuer die Konstantenregel bei byte/short/char. */
  private zuweisungsKonversion(w: JW, ziel: string, ausdr: Ausdruck | null, stelle: Stelle): JW {
    if (PRIMITIV.has(ziel)) {
      if (ziel === "boolean") {
        if (w.t === "boolean") return w;
        throw this.compiler(`Typen passen nicht: \`${typVon(w)}\` kann nicht in \`boolean\` gespeichert werden.`, stelle);
      }
      if (!istZahl(w)) throw this.compiler(`Typen passen nicht: \`${typVon(w)}\` kann nicht in \`${ziel}\` gespeichert werden.`, stelle);
      if (w.t === ziel) return w;
      if (WEITER[w.t].includes(ziel)) return wandle(w, ziel);
      if ((ziel === "byte" || ziel === "short" || ziel === "char") && (w.t === "int" || w.t === "char" || w.t === "short" || w.t === "byte") && ausdr && this.istKonstant(ausdr)) {
        const n = w.v as number;
        const passt = ziel === "byte" ? n >= -128 && n <= 127 : ziel === "short" ? n >= -32768 && n <= 32767 : n >= 0 && n <= 65535;
        if (passt) return wandle(w, ziel);
      }
      throw this.compiler(
        `Typen passen nicht: Ein \`${w.t}\` kann nicht ohne Cast in \`${ziel}\` gespeichert werden (dabei könnte etwas verloren gehen, zum Beispiel Nachkommastellen).`,
        stelle,
      );
    }
    if (w.t !== "ref") throw this.compiler(`Typen passen nicht: \`${typVon(w)}\` kann nicht in \`${ziel}\` gespeichert werden.`, stelle);
    if (!w.o) return NULL(ziel);
    const ist = typVon(w);
    if (ist === ziel || ziel === "Object" || (ziel === "CharSequence" && (ist === "String" || ist === "StringBuilder"))) return w;
    if (ziel === "Object[]" && ist.endsWith("[]") && !PRIMITIV.has(ist.slice(0, -2))) return w;
    throw this.compiler(`Typen passen nicht: \`${ist}\` kann nicht in \`${ziel}\` gespeichert werden.`, stelle);
  }

  private compiler(meldung: string, stelle: Stelle | null): CompilerFehler {
    return new CompilerFehler(meldung, stelle);
  }

  /** Ist der Ausdruck eine Konstante im Sinn des Compilers (Literale, final-Konstanten, Operatoren darauf)? */
  private istKonstant(e: Ausdruck): boolean {
    switch (e.k) {
      case "lit":
        return e.typ !== "null";
      case "klammer":
        return this.istKonstant(e.inner);
      case "unaer":
        return this.istKonstant(e.arg);
      case "binaer":
        return this.istKonstant(e.links) && this.istKonstant(e.rechts);
      case "bedingt":
        return this.istKonstant(e.bed) && this.istKonstant(e.dann) && this.istKonstant(e.sonst);
      case "cast":
        return (PRIMITIV.has(typText(e.typ)) || typText(e.typ) === "String") && this.istKonstant(e.arg);
      case "name": {
        const s = this.findeVariable(e.name);
        return !!s && s.konstant;
      }
      case "feld": {
        const k = this.alsKlasse(e.ziel);
        if (k === null) return false;
        if (this.klassen.has(k)) return !!this.findeStatisch(k, e.name)?.konstant;
        return ["Integer", "Long", "Math", "Character", "Short", "Byte"].includes(k) || (k === "Double" && e.name !== "NaN");
      }
    }
    return false;
  }

  /** statischer Typ eines Ausdrucks, soweit ohne Auswertung bekannt (fuer ?: ) */
  private statischerTyp(e: Ausdruck): string | null {
    switch (e.k) {
      case "lit":
        return e.typ;
      case "name":
        return this.findeVariable(e.name)?.typ ?? null;
      case "klammer":
        return this.statischerTyp(e.inner);
      case "cast":
        return typText(e.typ);
      case "aufruf": {
        if (e.ziel === null) {
          const m = this.oben ? this.methodenVon(this.oben.klasse, e.name) : [];
          return m.length === 1 ? typText(m[0].rueck) : null;
        }
        return null;
      }
      case "binaer": {
        if (["==", "!=", "<", ">", "<=", ">=", "&&", "||"].includes(e.op)) return "boolean";
        const l = this.statischerTyp(e.links);
        const r = this.statischerTyp(e.rechts);
        if (!l || !r) return null;
        if (e.op === "+" && (l === "String" || r === "String")) return "String";
        if (l in RANG && r in RANG) return promo(l, r);
        return null;
      }
      case "index": {
        const t = this.statischerTyp(e.ziel);
        return t && t.endsWith("[]") ? t.slice(0, -2) : null;
      }
    }
    return null;
  }

  // ------------------------------------------------------------------ Anweisungen

  private fuehreListe(anw: Anweisung[]): Signal {
    for (const a of anw) {
      const sig = this.fuehre(a);
      if (sig) return sig;
    }
    return undefined;
  }

  private block(anw: Anweisung[]): Signal {
    const f = this.oben;
    f.scopes.push([]);
    const sig = this.fuehreListe(anw);
    f.scopes.pop();
    f.beruehrt = ++this.tick;
    return sig;
  }

  private anwSchritt(a: Stelle, erkl: () => string, art: SchrittArt = "anweisung", extra: { bedingung?: boolean; rueckgabe?: string } = {}) {
    this.schritt(art, a, erkl, { ...extra, auswertung: this.kette() });
  }

  private fuehre(a: Anweisung): Signal {
    this.zaehle();
    const f = this.oben;
    if (a.q === 0 && this.opt.aufzeichnen) f.zeile = zeileZu(this.anfaenge, a.von);
    switch (a.k) {
      case "block":
        return this.block(a.anw);
      case "leer":
        this.ctx = null;
        this.anwSchritt(a, () => "`;` allein ist eine leere Anweisung: Sie tut nichts. (Steht sie direkt nach `for (…)`, `while (…)` oder `if (…)`, ist sie dort der ganze Rumpf.)");
        return undefined;
      case "dekl":
        this.deklaration(a);
        return undefined;
      case "ausdr":
        this.ausdruckAnweisung(a);
        return undefined;
      case "if": {
        this.neuerKontext(a.bed);
        const b = this.bool(this.wert(a.bed), a.bed);
        const bedText = bt(codeKurz(this.code(a.bed)));
        const folge = b ? "also läuft der `if`-Teil." : a.sonst ? "also läuft der `else`-Teil." : "also wird der `if`-Teil übersprungen.";
        this.anwSchritt(a.bed, () => `${bedText}${this.mitWerten()}: ${wahrText(b)}, ${folge}`, "bedingung", { bedingung: b });
        if (b) return this.verzweigung(a.dann);
        if (a.sonst) return this.verzweigung(a.sonst);
        return undefined;
      }
      case "while":
      case "do":
        return this.mitZiel("schleife", () => this.whileSchleife(a, null));
      case "for":
        return this.mitZiel("schleife", () => this.forSchleife(a, null));
      case "foreach":
        return this.mitZiel("schleife", () => this.foreachSchleife(a, null));
      case "label": {
        const inner = a.anw;
        let sig: Signal;
        if (inner.k === "while" || inner.k === "do") sig = this.mitZiel("schleife", () => this.whileSchleife(inner, a.label));
        else if (inner.k === "for") sig = this.mitZiel("schleife", () => this.forSchleife(inner, a.label));
        else if (inner.k === "foreach") sig = this.mitZiel("schleife", () => this.foreachSchleife(inner, a.label));
        else sig = this.fuehre(inner);
        if (sig && sig.k === "break" && sig.label === a.label) return undefined;
        return sig;
      }
      case "switch":
        return this.mitZiel("switch", () => this.switchAnweisung(a));
      case "break": {
        this.ctx = null;
        const ziel = f.ziele[f.ziele.length - 1];
        this.anwSchritt(a, () =>
          a.label
            ? `${bt("break " + a.label)} verlässt die Schleife mit der Marke ${bt(a.label)} sofort.`
            : ziel === "switch"
              ? "`break` beendet den `switch`: Es geht nach seiner schließenden Klammer weiter."
              : "`break` verlässt die Schleife sofort, der Rest des Rumpfs und alle weiteren Durchläufe entfallen.",
        );
        return { k: "break", label: a.label, stelle: a };
      }
      case "continue": {
        this.ctx = null;
        this.anwSchritt(
          a,
          () => a.label
            ? `${bt("continue " + a.label)} springt zum nächsten Durchlauf der Schleife mit der Marke ${bt(a.label)}.`
            : "`continue` überspringt den Rest des Schleifenrumpfs; es geht mit dem nächsten Durchlauf weiter.",
        );
        return { k: "continue", label: a.label, stelle: a };
      }
      case "return":
        return this.returnAnweisung(a);
      case "assert":
        this.ctx = null;
        this.anwSchritt(a, () => "`assert` wird übersprungen: Java prüft `assert` nur, wenn man das Programm mit der Option `-ea` startet.");
        return undefined;
      case "throw": {
        this.neuerKontext(a.ausdr);
        const w = this.wert(a.ausdr);
        if (w.t !== "ref" || !w.o || w.o.k !== "exc") throw this.compiler("Nach `throw` muss eine Ausnahme stehen, etwa `new IllegalArgumentException(\"…\")`.", a);
        throw new JavaFehler(w.o.name, w.o.meldung, a);
      }
      case "yield": {
        this.neuerKontext(a.ausdr);
        const w = this.wert(a.ausdr);
        this.anwSchritt(a, () => `${bt("yield")} liefert ${this.zeige(w)} als Wert des \`switch\`.`);
        return { k: "yield", w };
      }
    }
  }

  private mitZiel(art: string, f: () => Signal): Signal {
    const fr = this.oben;
    fr.ziele.push(art);
    const sig = f();
    fr.ziele.pop();
    return sig;
  }

  /** if/else-Zweig: ein einzelner Rumpf ohne Block bekommt trotzdem einen eigenen Gueltigkeitsbereich */
  private verzweigung(a: Anweisung): Signal {
    if (a.k === "block") return this.block(a.anw);
    return this.block([a]);
  }

  private deklaration(a: AnweisungVon<"dekl">) {
    const f = this.oben;
    const teile: (() => string)[] = [];
    let einzelKette: string[] | undefined;
    let mit = "";
    for (const d of a.dekl) {
      let typ: string;
      if (d.init === null) {
        if (!a.typ) throw this.compiler("`var` braucht einen Anfangswert.", { ...d, q: a.q });
        typ = typText(a.typ) + "[]".repeat(d.dims);
        this.pruefeTyp(typ, a.typ);
        this.legeAn(f, d.name, typ, undefined, a.final);
        teile.push(() => `Die Variable ${bt(d.name)} wird angelegt, hat aber noch keinen Wert.`);
        continue;
      }
      this.neuerKontext(d.init.k === "arrayInit" ? null : d.init);
      let w: JW;
      if (a.typ) {
        typ = typText(a.typ) + "[]".repeat(d.dims);
        this.pruefeTyp(typ, a.typ);
        w = this.initWert(d.init, typ);
      } else {
        if (d.init.k === "arrayInit") throw this.compiler("`var` geht nicht mit einem Array-Initialisierer `{…}`.", { ...d, q: a.q });
        w = this.wert(d.init);
        if (w.t === "ref" && !w.o) throw this.compiler("`var x = null` geht nicht: Der Typ ist dann unbekannt.", { ...d, q: a.q });
        typ = typVon(w);
        if (w.t === "short" || w.t === "byte") typ = w.t;
      }
      if (this.findeLokal(d.name) && this.findeLokal(d.name)!.frame === f)
        throw this.compiler(`Die Variable ${bt(d.name)} gibt es hier schon; jede Variable darf nur einmal deklariert werden.`, { ...d, q: a.q });
      const s = this.legeAn(f, d.name, typ, w, a.final);
      if (a.final && (PRIMITIV.has(typ) || typ === "String") && d.init.k !== "arrayInit" && this.istKonstant(d.init)) s.konstant = true;
      einzelKette = this.kette();
      mit = this.mitWerten();
      const angelegt = w;
      teile.push(() => this.anlegeText(d.name, angelegt));
    }
    this.ctx = null;
    const erkl = () => {
      const t = teile.map((x) => x()).join(" ");
      return a.dekl.length === 1 && mit ? `${bt(codeKurz(this.code(a)))}${mit}: ${t}` : t;
    };
    this.schritt("anweisung", a, erkl, { auswertung: a.dekl.length === 1 ? einzelKette : undefined });
  }

  private anlegeText(name: string, w: JW): string {
    if (w.t === "ref" && w.o) {
      const o = w.o;
      if (o.k === "arr") {
        const n = o.w.length;
        const zeile0 = o.w[0];
        if (zeile0 && zeile0.t === "ref" && zeile0.o && zeile0.o.k === "arr") {
          const gleich = o.w.every((z) => z.t === "ref" && z.o && z.o.k === "arr" && z.o.w.length === (zeile0.o as ArrObj).w.length);
          return gleich
            ? `${bt(name)} wird angelegt und zeigt auf ein 2D-Array mit ${n} Zeilen zu je ${(zeile0.o as ArrObj).w.length} Plätzen: ${this.zeige(w)}.`
            : `${bt(name)} wird angelegt und zeigt auf ein 2D-Array mit ${n} Zeilen unterschiedlicher Länge: ${this.zeige(w)}.`;
        }
        return `${bt(name)} wird angelegt und zeigt auf ein Array mit ${n} ${n === 1 ? "Element" : "Elementen"}: ${this.zeige(w)}.`;
      }
      if (o.k === "scanner") return `${bt(name)} wird angelegt: ein Scanner, der die Eingabe (Tastatur) Stück für Stück liest.`;
      if (o.k === "sb") return `${bt(name)} wird angelegt und zeigt auf einen StringBuilder mit dem Inhalt ${stringLiteral(o.s, 40)}.`;
      if (o.k === "cd")
        return `${bt(name)} wird angelegt: ein neues Zeichenfenster mit einer Zeichenfläche von ${o.breite} × ${o.hoehe} Pixeln. Der Punkt (0, 0) liegt links oben, y wächst nach unten. Die Zeichenfarbe ist zuerst ${farbWort(o.farbe)}.`;
      if (o.k === "color") return `${bt(name)} wird angelegt und bekommt die Farbe ${farbWort(o)}.`;
    }
    return `${bt(name)} wird angelegt und bekommt den Wert ${this.zeige(w)}.`;
  }

  /** Anfangswert einer Deklaration (auch `{1, 2}`) */
  private initWert(init: Ausdruck, typ: string): JW {
    if (init.k === "arrayInit") {
      if (!typ.endsWith("[]")) throw this.compiler(`Ein Initialisierer \`{…}\` passt nur zu einem Array, nicht zu \`${typ}\`.`, init);
      return this.arrayAusInit(init, typ.slice(0, -2));
    }
    const w = this.wert(init);
    return this.zuweisungsKonversion(w, typ, init, init);
  }

  private arrayAusInit(init: ArrayInit, elem: string): JW {
    const werte = init.elemente.map((x) => {
      if (x.k === "arrayInit") {
        if (!elem.endsWith("[]")) throw this.compiler("Zu viele `{` im Array-Initialisierer.", x);
        return this.arrayAusInit(x, elem.slice(0, -2));
      }
      return this.zuweisungsKonversion(this.wert(x), elem, x, x);
    });
    return this.neuesArray(elem, werte);
  }

  private ausdruckAnweisung(a: AnweisungVon<"ausdr">) {
    const e = a.ausdr;
    // bei println(x) ist das Argument die Wurzel der Kette (sonst stuende die ganze Aufrufzeile in jeder Form)
    const druck = e.k === "aufruf" && e.args.length === 1 && e.ziel?.k === "feld" && e.ziel.ziel.k === "name" && e.ziel.ziel.name === "System";
    this.neuerKontext(druck && e.k === "aufruf" ? e.args[0] : e);
    this.ohneSchritt = e;
    this.anwInfo = null;
    this.wertOderVoid(e);
    this.ohneSchritt = null;
    if (this.ctx && e.k === "zuweisung" && e.op === "=" && this.ctx.reduktionen > 0) this.ctx.notiere();
    const info = this.anwInfo as (() => string) | null;
    this.anwSchritt(a, () => (info ? info() : `${bt(codeKurz(this.code(a)))} wurde ausgeführt.`));
    this.ctx = null;
  }

  private returnAnweisung(a: AnweisungVon<"return">): Signal {
    const f = this.oben;
    const m = f.methode;
    this.neuerKontext(a.ausdr);
    if (!a.ausdr) {
      this.ctx = null;
      if (m && m.name === "main" && this.frames.length === 1)
        this.anwSchritt(a, () => "`return` beendet `main` und damit das Programm.");
      else this.anwSchritt(a, () => `${bt(f.aufrufText)} ist fertig (\`return\`). Es geht zurück zum Aufrufer.`, "rueckkehr");
      return { k: "return", w: null };
    }
    let w = this.wert(a.ausdr);
    if (m) w = this.zuweisungsKonversion(w, typText(m.rueck), a.ausdr, a.ausdr);
    const anzeige = this.zeige(w);
    const reduziert = !!this.kette();
    this.anwSchritt(a, () => `${bt(f.aufrufText)} gibt ${anzeige} zurück${this.mitWerten() && reduziert ? ` (${bt(codeKurz(this.code(a.ausdr!)))}${this.mitWerten()})` : ""}.`, "rueckkehr", {
      rueckgabe: this.ergebnisText(w),
    });
    this.ctx = null;
    return { k: "return", w };
  }

  private enthaeltSchleife(a: Anweisung): boolean {
    const c = this.enthaeltSchleifeCache.get(a);
    if (c !== undefined) return c;
    let r = false;
    const sieh = (x: Anweisung | null): boolean => {
      if (!x) return false;
      switch (x.k) {
        case "while":
        case "do":
        case "for":
        case "foreach":
          return true;
        case "block":
          return x.anw.some(sieh);
        case "if":
          return sieh(x.dann) || sieh(x.sonst);
        case "label":
          return sieh(x.anw);
        case "switch":
          return x.faelle.some((fa) => fa.anw.some(sieh));
      }
      return false;
    };
    if (a.k === "while" || a.k === "do" || a.k === "for" || a.k === "foreach") r = sieh(a.rumpf);
    this.enthaeltSchleifeCache.set(a, r);
    return r;
  }

  private schleifenName(a: Anweisung): string {
    if (this.oben.schleifenTiefe > 0) return "innere";
    if (this.enthaeltSchleife(a)) return "äußere";
    return "";
  }

  /** Signal aus dem Rumpf auswerten: true = Schleife verlassen (mit Signal), "weiter" = naechster Durchlauf */
  private schleifenSignal(sig: Signal, label: string | null): { raus: boolean; sig: Signal } {
    if (!sig) return { raus: false, sig: undefined };
    if (sig.k === "break" && (sig.label === null || sig.label === label)) return { raus: true, sig: undefined };
    if (sig.k === "continue" && (sig.label === null || sig.label === label)) return { raus: false, sig: undefined };
    return { raus: true, sig };
  }

  private rumpf(a: Anweisung): Signal {
    const f = this.oben;
    f.schleifenTiefe++;
    try {
      return a.k === "block" ? this.block(a.anw) : this.block([a]);
    } finally {
      f.schleifenTiefe--;
    }
  }

  private whileSchleife(a: AnweisungVon<"while"> | AnweisungVon<"do">, label: string | null): Signal {
    const name = this.texte ? this.schleifenName(a) : "";
    const kopf: Stelle = a.k === "while" ? { von: a.von, bis: a.kopfBis, q: a.q } : { von: a.von, bis: a.von + 2, q: a.q };
    const bedText = this.texte ? bt(codeKurz(this.code(a.bed))) : "";
    let n = 0;
    if (a.k === "do") {
      n = 1;
      this.ctx = null;
      this.schritt("schleife", kopf, () => `Durchlauf 1${name ? ` der ${name}n Schleife` : ""} beginnt: Bei \`do … while\` läuft der Rumpf einmal, bevor die Bedingung ${bedText} geprüft wird.`);
      const r = this.schleifenSignal(this.rumpf(a.rumpf), label);
      if (r.raus) return r.sig;
    }
    for (;;) {
      this.zaehle();
      this.neuerKontext(a.bed);
      const b = this.bool(this.wert(a.bed), a.bed);
      const mit = this.mitWerten();
      this.anwSchritt(a.bed, () => `${bedText}${mit}: ${wahrText(b)}${b ? ", also läuft der Rumpf noch einmal." : "."}`, "bedingung", { bedingung: b });
      this.ctx = null;
      if (!b) {
        this.schritt("schleife", kopf, () => `Die ${name ? name + " " : ""}Schleife ist zu Ende, weil ${bedText} falsch ist.`);
        return undefined;
      }
      n++;
      this.schritt("schleife", kopf, () => `Durchlauf ${n}${name ? ` der ${name}n Schleife` : ""} beginnt.`);
      const r = this.schleifenSignal(this.rumpf(a.rumpf), label);
      if (r.raus) return r.sig;
    }
  }

  private forSchleife(a: AnweisungVon<"for">, label: string | null): Signal {
    const f = this.oben;
    const name = this.texte ? this.schleifenName(a) : "";
    const kopf: Stelle = { von: a.von, bis: a.kopfBis, q: a.q };
    f.scopes.push([]);
    try {
      for (const i of a.init) {
        if (i.k === "dekl") this.deklaration(i);
        else if (i.k === "ausdr") this.ausdruckAnweisung(i);
      }
      const laufVar = a.init[0]?.k === "dekl" ? a.init[0].dekl[0]?.name : a.init[0]?.k === "ausdr" && a.init[0].ausdr.k === "zuweisung" && a.init[0].ausdr.ziel.k === "name" ? a.init[0].ausdr.ziel.name : null;
      const bedText = a.bed && this.texte ? bt(codeKurz(this.code(a.bed))) : "";
      let n = 0;
      for (;;) {
        this.zaehle();
        if (a.bed) {
          this.neuerKontext(a.bed);
          const b = this.bool(this.wert(a.bed), a.bed);
          const mit = this.mitWerten();
          this.anwSchritt(a.bed, () => `${bedText}${mit}: ${wahrText(b)}${b ? ", also läuft der Rumpf." : "."}`, "bedingung", { bedingung: b });
          this.ctx = null;
          if (!b) break;
        }
        n++;
        const lv = laufVar && this.texte ? this.findeLokal(laufVar) : null;
        const lvText = () => (lv && lv.w !== undefined ? ` (${bt(laufVar!)} ist ${this.zeige(lv.w)})` : "");
        this.schritt("schleife", kopf, () => `Durchlauf ${n}${name ? ` der ${name}n Schleife` : ""} beginnt${lvText()}.`);
        const r = this.schleifenSignal(this.rumpf(a.rumpf), label);
        if (r.raus) {
          f.scopes.pop();
          f.beruehrt = ++this.tick;
          return r.sig;
        }
        for (const u of a.update) {
          this.neuerKontext(u);
          this.ohneSchritt = u;
          this.anwInfo = null;
          this.wertOderVoid(u);
          this.ohneSchritt = null;
          const info = this.anwInfo as (() => string) | null;
          this.anwSchritt(u, () => (info ? info() : `${bt(codeKurz(this.code(u)))} wurde ausgeführt.`));
          this.ctx = null;
        }
      }
      f.scopes.pop();
      f.beruehrt = ++this.tick;
      const weg = a.init[0]?.k === "dekl" ? a.init[0].dekl.map((d) => bt(d.name)) : [];
      this.schritt(
        "schleife",
        kopf,
        () => `Die ${name ? name + " " : ""}Schleife ist zu Ende, weil ${bedText} falsch ist.${weg.length ? ` ${aufzaehlen(weg)} gibt es danach nicht mehr: ${weg.length === 1 ? "Die Variable gehört" : "Die Variablen gehören"} nur zur Schleife.` : ""}`,
      );
      return undefined;
    } catch (e) {
      throw e;
    }
  }

  private foreachSchleife(a: AnweisungVon<"foreach">, label: string | null): Signal {
    const f = this.oben;
    const name = this.texte ? this.schleifenName(a) : "";
    const kopf: Stelle = { von: a.von, bis: a.kopfBis, q: a.q };
    this.neuerKontext(a.iter);
    const w = this.wert(a.iter);
    this.ctx = null;
    if (w.t !== "ref" || (w.o && w.o.k !== "arr")) {
      if (istStringW(w)) throw this.compiler("Über einen String kann `for (… : …)` nicht laufen; nimm `s.toCharArray()` oder eine Zählschleife mit `charAt`.", a.iter);
      throw this.compiler("`for (… : …)` braucht ein Array.", a.iter);
    }
    if (!w.o) throw new JavaFehler("NullPointerException", "Cannot read the array length because the array is null", a.iter);
    const arr = w.o;
    const typ = a.typ ? typText(a.typ) : arr.elem;
    const iterText = this.texte ? bt(codeKurz(this.code(a.iter))) : "";
    for (let i = 0; i < arr.w.length; i++) {
      this.zaehle();
      f.scopes.push([]);
      const el = this.zuweisungsKonversion(arr.w[i], typ, null, a);
      this.legeAn(f, a.name, typ, el, a.final);
      this.schritt("schleife", kopf, () => `Durchlauf ${i + 1}${name ? ` der ${name}n Schleife` : ""}: ${bt(a.name)} ist das Element an Index ${i} von ${iterText}, also ${this.zeige(el)}.`);
      const sig = a.rumpf.k === "block" ? (f.schleifenTiefe++, this.fuehreListeMitTiefe(a.rumpf.anw)) : (f.schleifenTiefe++, this.fuehreListeMitTiefe([a.rumpf]));
      f.scopes.pop();
      f.beruehrt = ++this.tick;
      const r = this.schleifenSignal(sig, label);
      if (r.raus) return r.sig;
    }
    this.schritt("schleife", kopf, () => `Die Schleife ist zu Ende: Alle ${arr.w.length} Elemente von ${iterText} sind durchlaufen.`);
    return undefined;
  }

  private fuehreListeMitTiefe(anw: Anweisung[]): Signal {
    const f = this.oben;
    try {
      return this.block(anw);
    } finally {
      f.schleifenTiefe--;
    }
  }

  private gleichFall(w: JW, label: JW): boolean {
    if (istStringW(w)) {
      if (!istStringW(label)) return false;
      return (w as { o: StrObj }).o.s === (label as { o: StrObj }).o.s;
    }
    if (istZahl(w) && istZahl(label)) return alsZahl(w) === alsZahl(label);
    return false;
  }

  private waehleFall(faelle: Fall[], w: JW, stelle: Stelle): number {
    if (w.t === "ref" && !w.o) throw new JavaFehler("NullPointerException", null, stelle);
    this.still++;
    try {
      for (let i = 0; i < faelle.length; i++) {
        const labels = faelle[i].labels;
        if (!labels) continue;
        for (const l of labels) if (this.gleichFall(w, this.wert(l))) return i;
      }
    } finally {
      this.still--;
    }
    return faelle.findIndex((fa) => fa.labels === null);
  }

  private switchAnweisung(a: AnweisungVon<"switch">): Signal {
    const f = this.oben;
    this.neuerKontext(a.ausdr);
    const w = this.wert(a.ausdr);
    const i = this.waehleFall(a.faelle, w, a.ausdr);
    const kopf: Stelle = { von: a.von, bis: a.kopfBis, q: a.q };
    const was = `${bt(`switch (${codeKurz(this.code(a.ausdr))})`)}${this.mitWerten()}`;
    if (i < 0) {
      this.anwSchritt(kopf, () => `${was}: Kein \`case\` passt zu ${this.zeige(w)}, und es gibt kein \`default\`. Der \`switch\` wird übersprungen.`, "bedingung", { bedingung: false });
      this.ctx = null;
      return undefined;
    }
    const fall = a.faelle[i];
    const fallText = this.code({ von: fall.von, bis: fall.kopfBis, q: a.q });
    this.anwSchritt(
      kopf,
      () => fall.labels ? `${was}: Der Wert ist ${this.zeige(w)}, es geht bei ${bt(codeKurz(fallText))} weiter.` : `${was}: Kein \`case\` passt zu ${this.zeige(w)}, also geht es bei \`default\` weiter.`,
      "bedingung",
      { bedingung: fall.labels !== null },
    );
    this.ctx = null;
    f.scopes.push([]);
    try {
      for (let k = i; k < a.faelle.length; k++) {
        const fa = a.faelle[k];
        if (k > i) {
          if (a.pfeil) break;
          this.schritt("anweisung", { von: fa.von, bis: fa.kopfBis, q: a.q }, () => `Hier fehlte ein \`break\`: Java läuft einfach in den nächsten Fall ${bt(codeKurz(this.code({ von: fa.von, bis: fa.kopfBis, q: a.q })))} weiter (Fallthrough).`);
        }
        const sig = this.fuehreListe(fa.anw);
        if (sig) {
          if (sig.k === "break" && sig.label === null) return undefined;
          return sig;
        }
      }
      return undefined;
    } finally {
      f.scopes.pop();
      f.beruehrt = ++this.tick;
    }
  }

  // ------------------------------------------------------------------ Ausdruecke

  private bool(w: JW, stelle: Stelle): boolean {
    if (w.t !== "boolean") throw this.compiler(`Hier wird ein \`boolean\` (wahr/falsch) gebraucht, aber ${bt(typVon(w))} gefunden.`, stelle);
    return w.v;
  }

  private wertOderVoid(e: Ausdruck): JW | null {
    if (e.k === "aufruf") return this.aufruf(e, false);
    return this.wert(e);
  }

  private wert(e: Ausdruck, ziel = false): JW {
    this.zaehle();
    switch (e.k) {
      case "lit":
        return this.literal(e);
      case "name":
        return this.liesName(e);
      case "feld":
        return this.feld(e, ziel);
      case "index":
        return this.index(e, ziel);
      case "aufruf": {
        const w = this.aufruf(e, ziel);
        if (w === null) throw this.compiler(`${bt(codeKurz(this.code(e)))} liefert keinen Wert (\`void\`), kann also hier nicht stehen.`, e);
        return w;
      }
      case "neu":
        return this.neu(e);
      case "neuArray":
        return this.neuArray(e, ziel);
      case "arrayInit":
        throw this.compiler("Ein Array-Initialisierer `{…}` geht nur bei der Deklaration (sonst `new int[]{…}`).", e);
      case "unaer":
        return this.unaer(e);
      case "incdec":
        return this.incdec(e);
      case "binaer":
        return this.binaer(e);
      case "zuweisung":
        return this.zuweisung(e);
      case "bedingt":
        return this.bedingt(e);
      case "cast":
        return this.cast(e);
      case "klammer":
        return this.wert(e.inner, ziel);
      case "switchAusdr":
        return this.switchAusdruck(e);
    }
  }

  private literal(e: AusdruckVon<"lit">): JW {
    switch (e.typ) {
      case "int":
        return I(e.wert as number);
      case "long":
        return L(e.wert as bigint);
      case "double":
        return D(e.wert as number);
      case "float":
        return F(e.wert as number);
      case "char":
        return C(e.wert as number);
      case "boolean":
        return B(e.wert as boolean);
      case "String":
        return this.internString(e.wert as string);
      case "null":
        return NULL();
    }
  }

  private internString(s: string): JW {
    let o = this.pool.get(s);
    if (!o) {
      o = { k: "str", id: this.naechsteId++, s };
      this.pool.set(s, o);
    }
    return { t: "ref", o, st: "String" };
  }

  private neuerString(s: string): JW {
    return { t: "ref", o: { k: "str", id: this.naechsteId++, s }, st: "String" };
  }

  private neuesArray(elem: string, werte: JW[]): JW {
    const o: ArrObj = { k: "arr", id: this.naechsteId++, elem, w: werte, ticks: new Array(werte.length).fill(0), tick: 0, version: 0 };
    return { t: "ref", o, st: elem + "[]" };
  }

  private liesName(e: AusdruckVon<"name">): JW {
    const s = this.findeVariable(e.name);
    if (s) {
      if (s.w === undefined) throw this.compiler(`Die Variable ${bt(e.name)} hat an dieser Stelle noch keinen Wert.`, e);
      this.notiereLesen(e, s.w, e.name);
      return s.w;
    }
    if (this.klassen.has(e.name) || BIB_KLASSEN.has(e.name)) return { t: "klasse", name: e.name };
    throw this.compiler(`${bt(e.name)} ist unbekannt: Es gibt keine Variable mit diesem Namen (Tippfehler oder nicht deklariert?).`, e);
  }

  /** Steht `e` fuer eine Klasse (Math, Integer, eigene Klasse, java.util.Arrays)? */
  private alsKlasse(e: Ausdruck): string | null {
    if (e.k === "name") {
      if (this.findeVariable(e.name)) return null;
      if (this.klassen.has(e.name) || BIB_KLASSEN.has(e.name)) return e.name;
      return null;
    }
    if (e.k === "feld") {
      // Paketpfad java.util.Arrays
      let x: Ausdruck = e.ziel;
      while (x.k === "feld") x = x.ziel;
      if (x.k === "name" && /^[a-z]/.test(x.name) && !this.findeVariable(x.name) && (this.klassen.has(e.name) || BIB_KLASSEN.has(e.name))) return e.name;
    }
    return null;
  }

  private feld(e: AusdruckVon<"feld">, ziel: boolean): JW {
    const k = this.alsKlasse(e.ziel);
    if (k !== null) return this.statischesFeld(k, e);
    if (e.ziel.k === "feld" && this.alsKlasse(e) !== null) return { t: "klasse", name: e.name };
    const z = this.wert(e.ziel, true);
    if (z.t === "ref") {
      if (!z.o) {
        if (e.name === "length" && z.st.endsWith("[]")) throw new JavaFehler("NullPointerException", `Cannot read the array length because ${this.npeName(e.ziel)} is null`, e);
        throw new JavaFehler("NullPointerException", null, e);
      }
      if (z.o.k === "arr" && e.name === "length") {
        const n = z.o.w.length;
        return this.red(e, I(n), () => `${bt(this.code(e))} ist die Länge des Arrays: ${n} ${n === 1 ? "Element" : "Elemente"}.`, ziel);
      }
      if (z.o.k === "str" && e.name === "length") throw this.compiler("Bei Strings ist `length` eine Methode: `s.length()` mit Klammern.", e);
    }
    throw this.compiler(`${bt(this.code(e))}: Das Feld ${bt(e.name)} gibt es hier nicht.`, e);
  }

  private npeName(e: Ausdruck): string {
    return e.q === 0 && (e.k === "name" || e.k === "index" || e.k === "feld") ? `"${this.code(e)}"` : "the value";
  }

  private statischesFeld(k: string, e: AusdruckVon<"feld">): JW {
    if (this.klassen.has(k)) {
      const s = this.findeStatisch(k, e.name);
      if (!s) throw this.compiler(`Die Klasse ${bt(k)} hat kein statisches Feld ${bt(e.name)}.`, e);
      if (s.w === undefined) throw this.compiler(`${bt(k + "." + e.name)} hat noch keinen Wert.`, e);
      this.notiereLesen(e, s.w, `${k}.${e.name}`);
      return s.w;
    }
    const n = e.name;
    let w: JW | null = null;
    switch (k) {
      case "System":
        if (n === "out") return { t: "ref", o: this.sysOut, st: "PrintStream" };
        if (n === "err") return { t: "ref", o: this.sysErr, st: "PrintStream" };
        if (n === "in") return { t: "ref", o: this.sysIn, st: "InputStream" };
        break;
      case "Math":
      case "StrictMath":
        if (n === "PI") w = D(Math.PI);
        if (n === "E") w = D(Math.E);
        break;
      case "Integer":
        if (n === "MAX_VALUE") w = I(2147483647);
        if (n === "MIN_VALUE") w = I(-2147483648);
        if (n === "SIZE") w = I(32);
        break;
      case "Long":
        if (n === "MAX_VALUE") w = L(BigInt("9223372036854775807"));
        if (n === "MIN_VALUE") w = L(BigInt("-9223372036854775808"));
        break;
      case "Short":
        if (n === "MAX_VALUE") w = { t: "short", v: 32767 };
        if (n === "MIN_VALUE") w = { t: "short", v: -32768 };
        break;
      case "Byte":
        if (n === "MAX_VALUE") w = { t: "byte", v: 127 };
        if (n === "MIN_VALUE") w = { t: "byte", v: -128 };
        break;
      case "Character":
        if (n === "MAX_VALUE") w = C(0xffff);
        if (n === "MIN_VALUE") w = C(0);
        break;
      case "Double":
        if (n === "MAX_VALUE") w = D(Number.MAX_VALUE);
        if (n === "MIN_VALUE") w = D(Number.MIN_VALUE);
        if (n === "POSITIVE_INFINITY") w = D(Infinity);
        if (n === "NEGATIVE_INFINITY") w = D(-Infinity);
        if (n === "NaN") w = D(NaN);
        break;
      case "Float":
        if (n === "MAX_VALUE") w = F(3.4028234663852886e38);
        if (n === "MIN_VALUE") w = F(1.401298464324817e-45);
        break;
      case "Palette":
      case "Color":
        return this.farbKonstante(k, e);
    }
    if (w) {
      this.notiereLesen(e, w, `${k}.${n}`);
      return w;
    }
    throw new NichtUnterstuetzt(`${bt(k + "." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private ganzIndex(w: JW, stelle: Stelle): number {
    if (w.t === "int" || w.t === "char" || w.t === "short" || w.t === "byte") return w.v;
    throw this.compiler(`Ein Index muss eine ganze Zahl (\`int\`) sein, nicht ${bt(typVon(w))}.`, stelle);
  }

  private arrayVon(w: JW, e: Ausdruck, laden: boolean): ArrObj {
    if (w.t !== "ref" || (w.o && w.o.k !== "arr")) {
      if (istStringW(w)) throw this.compiler("Auf Zeichen eines Strings greift man mit `s.charAt(i)` zu, nicht mit `s[i]`.", e);
      throw this.compiler(`${bt(this.code(e))} ist kein Array.`, e);
    }
    if (!w.o) {
      const typ = w.st.endsWith("[]") ? w.st.slice(0, -2) : "object";
      throw new JavaFehler("NullPointerException", `Cannot ${laden ? "load from" : "store to"} ${typ} array because ${this.npeName(e)} is null`, e);
    }
    return w.o;
  }

  private index(e: AusdruckVon<"index">, ziel: boolean): JW {
    const aw = this.wert(e.ziel, true);
    const i = this.ganzIndex(this.wert(e.index), e.index);
    const arr = this.arrayVon(aw, e.ziel, true);
    if (i < 0 || i >= arr.w.length) throw new JavaFehler("ArrayIndexOutOfBoundsException", `Index ${i} out of bounds for length ${arr.w.length}`, e);
    const w = arr.w[i];
    if (ziel && w.t === "ref" && w.o && w.o.k === "arr") return w;
    return this.red(e, w, () => `${bt(this.code(e))} ist das Element an Index ${i} (gezählt wird ab 0): ${this.zeige(w)}.`, ziel);
  }

  // ---------------- Zuweisung

  private ort(e: Ausdruck): { art: "slot"; slot: Slot; typ: string } | { art: "elem"; arr: ArrObj | null; aw: JW; i: number; typ: string; stelle: Ausdruck } {
    if (e.k === "name") {
      const s = this.findeVariable(e.name);
      if (!s) throw this.compiler(`${bt(e.name)} ist unbekannt: Es gibt keine Variable mit diesem Namen.`, e);
      return { art: "slot", slot: s, typ: s.typ };
    }
    if (e.k === "feld") {
      const k = this.alsKlasse(e.ziel);
      if (k !== null && this.klassen.has(k)) {
        const s = this.findeStatisch(k, e.name);
        if (!s) throw this.compiler(`Die Klasse ${bt(k)} hat kein statisches Feld ${bt(e.name)}.`, e);
        return { art: "slot", slot: s, typ: s.typ };
      }
      if (e.name === "length") throw this.compiler("Die Länge eines Arrays kann man nicht ändern.", e);
      throw new NichtUnterstuetzt(`Zuweisung an ${bt(this.code(e))} wird nicht unterstützt.`, e.von);
    }
    if (e.k === "index") {
      const aw = this.wert(e.ziel, true);
      const i = this.ganzIndex(this.wert(e.index), e.index);
      if (aw.t !== "ref" || (aw.o && aw.o.k !== "arr")) this.arrayVon(aw, e.ziel, false);
      const arr = aw.t === "ref" && aw.o && aw.o.k === "arr" ? aw.o : null;
      const typ = arr ? arr.elem : aw.t === "ref" && aw.st.endsWith("[]") ? aw.st.slice(0, -2) : "Object";
      return { art: "elem", arr, aw, i, typ, stelle: e };
    }
    throw this.compiler("Links muss eine Variable stehen.", e);
  }

  private pruefeOrt(o: ReturnType<Lauf["ort"]>, laden: boolean): void {
    if (o.art !== "elem") return;
    const arr = this.arrayVon(o.aw, (o.stelle as AusdruckVon<"index">).ziel, laden);
    if (o.i < 0 || o.i >= arr.w.length) throw new JavaFehler("ArrayIndexOutOfBoundsException", `Index ${o.i} out of bounds for length ${arr.w.length}`, o.stelle);
  }

  private lade(o: ReturnType<Lauf["ort"]>, e: Ausdruck): JW {
    if (o.art === "slot") {
      if (o.slot.w === undefined) throw this.compiler(`Die Variable ${bt(o.slot.name)} hat an dieser Stelle noch keinen Wert.`, e);
      return o.slot.w;
    }
    this.pruefeOrt(o, true);
    return o.arr!.w[o.i];
  }

  private speichere(o: ReturnType<Lauf["ort"]>, w: JW, e: Ausdruck) {
    if (o.art === "slot") {
      if (o.slot.final && o.slot.w !== undefined) throw this.compiler(`${bt(o.slot.name)} ist \`final\` und kann nicht mehr geändert werden.`, e);
      this.schreibe(o.slot, w);
      return;
    }
    this.pruefeOrt(o, false);
    const arr = o.arr!;
    arr.w[o.i] = w;
    arr.ticks[o.i] = ++this.tick;
    arr.tick = this.tick;
    arr.version++;
  }

  /** "Index 2" oder bei 2D "Zeile 1, Spalte 2" (fuer Erklaersaetze) */
  private zellenText(ziel: Ausdruck, i: number): () => string {
    if (ziel.k === "index" && ziel.ziel.k === "index") {
      const innen = ziel.ziel;
      const c = this.ctx;
      return () => {
        const z = c?.ersetzt.find((x) => x.von === innen.index.von && x.bis === innen.index.bis)?.text ?? this.code(innen.index);
        return `Zeile ${z}, Spalte ${i}`;
      };
    }
    return () => `Index ${i}`;
  }

  private zielName(e: Ausdruck): string {
    return this.code(e);
  }

  private zuweisung(e: AusdruckVon<"zuweisung">): JW {
    const o = this.ort(e.ziel);
    const zielText = this.texte ? this.zielName(e.ziel) : "";
    if (e.op === "=") {
      const alt = o.art === "slot" ? o.slot.w : undefined;
      const w0 = this.wert(e.wert);
      const w = this.zuweisungsKonversion(w0, o.typ, e.wert, e.wert);
      this.speichere(o, w, e.ziel);
      const mit = this.mitWerten();
      const vorher = () => (alt !== undefined && o.art === "slot" && this.kettenText(alt) !== null && this.kettenText(alt) !== this.kettenText(w) ? ` (vorher ${this.zeige(alt)})` : "");
      if (o.art === "elem") {
        const zelle = this.zellenText(e.ziel, o.i);
        this.anwInfo = () => `${bt(codeKurz(this.code(e)))}${mit}: In ${bt(zielText)} (${zelle()}) steht jetzt ${this.zeige(w)}.`;
      }
      else if (w.t === "ref" && w.o && w.o.k === "arr" && e.wert.k === "name") {
        const quelleName = e.wert.name;
        this.anwInfo = () => `${bt(zielText)} zeigt jetzt auf dasselbe Array wie ${bt(quelleName)} (es wird nichts kopiert).`;
      }
      else this.anwInfo = () => `${bt(codeKurz(this.code(e)))}${mit}: ${bt(zielText)} bekommt den Wert ${this.zeige(w)}${vorher()}.`;
      if (e !== this.ohneSchritt) return this.red(e, w, () => `Die Zuweisung speichert ${this.zeige(w)} in ${bt(zielText)}; der Wert der Zuweisung selbst ist ebenfalls ${this.zeige(w)}.`);
      return w;
    }
    const alt = this.lade(o, e.ziel);
    const r = this.wert(e.wert);
    const op = e.op.slice(0, -1);
    const roh = this.binaerOp(op, alt, r, e, () => false);
    let erg: JW;
    if (op === "+" && istStringW(roh)) {
      if (o.typ !== "String") throw this.compiler(`${bt(e.op)} mit einem String geht nur bei einer String-Variable.`, e);
      erg = roh;
    } else if (PRIMITIV.has(o.typ) && istZahl(roh)) erg = wandle(roh, o.typ);
    else if (o.typ === "boolean" && roh.t === "boolean") erg = roh;
    else throw this.compiler(`${bt(e.op)} passt nicht zu ${bt(o.typ)}.`, e);
    this.speichere(o, erg, e.ziel);
    const c = this.ctx;
    if (c && e.q === 0 && this.still === 0) {
      c.reduktionen++;
      c.notiere();
      const at = this.kettenText(alt) ?? zielText;
      const rt = this.kettenText(r) ?? "…";
      const et = this.kettenText(erg) ?? "…";
      const roht = this.kettenText(roh) ?? et;
      c.formen.push(`${zielText} = ${at} ${op} ${rt}`);
      if (roht !== et) c.formen.push(`${zielText} = (${o.typ}) ${roht}`);
      if (e === this.ohneSchritt) c.formen.push(`${zielText} = ${et}`);
      else c.ersetze(e.aussen ?? e, et);
    }
    const versteckt = roh.t !== erg.t && !istStringW(roh) ? ` Das Ergebnis ${this.zeige(roh)} wird automatisch wieder zu \`${o.typ}\` (versteckter Cast bei \`${e.op}\`): ${this.zeige(erg)}.` : roh.t !== erg.t ? ` (versteckter Cast zu \`${o.typ}\`)` : "";
    this.anwInfo = () => `${bt(codeKurz(this.code(e)))} bedeutet ${bt(`${zielText} = ${zielText} ${op} ${codeKurz(this.code(e.wert), 30)}`)}${this.mitWerten(o.art === "slot" ? undefined : "")}: ${bt(zielText)} war ${this.zeige(alt)} und wird ${this.zeige(erg)}.${versteckt}`;
    if (e !== this.ohneSchritt && c && e.q === 0 && this.still === 0) this.schritt("ausdruck", e, this.anwInfo!, { fein: true, auswertung: c.formen.slice() });
    return erg;
  }

  private incdec(e: AusdruckVon<"incdec">): JW {
    const o = this.ort(e.ziel);
    const alt = this.lade(o, e.ziel);
    if (!istZahl(alt)) throw this.compiler(`${bt(e.op)} geht nur mit Zahlen.`, e);
    const plus = e.op === "++";
    let neu: JW;
    if (alt.t === "long") neu = L(plus ? alt.v + N1 : alt.v - N1);
    else if (alt.t === "double") neu = D(plus ? alt.v + 1 : alt.v - 1);
    else if (alt.t === "float") neu = F(plus ? alt.v + 1 : alt.v - 1);
    else neu = wandle(I((alt.v as number) + (plus ? 1 : -1)) as ZahlJW, alt.t);
    this.speichere(o, neu, e.ziel);
    const zielText = this.texte ? this.zielName(e.ziel) : "";
    const verb = plus ? "erhöht" : "verringert";
    this.anwInfo = () => `${bt(this.code(e))}: ${bt(zielText)} wird um 1 ${verb}, von ${this.zeige(alt)} auf ${this.zeige(neu)}.`;
    const w = e.praefix ? neu : alt;
    if (e !== this.ohneSchritt)
      return this.red(e, w, () =>
        e.praefix
          ? `${bt(this.code(e))} ${verb} ${bt(zielText)} zuerst auf ${this.zeige(neu)}; das ist auch der Wert des Ausdrucks.`
          : `${bt(this.code(e))} liefert zuerst den alten Wert ${this.zeige(alt)}; danach ist ${bt(zielText)} ${this.zeige(neu)}.`,
      );
    return w;
  }

  // ---------------- Operatoren

  private unaer(e: AusdruckVon<"unaer">): JW {
    const a = this.wert(e.arg);
    let w: JW;
    let erkl: () => string;
    if (e.op === "!") {
      const b = this.bool(a, e.arg);
      w = B(!b);
      erkl = () => `\`!\` kehrt den Wahrheitswert um: Aus ${wahrText(b)} wird ${wahrText(!b)}.`;
    } else {
      if (!istZahl(a)) throw this.compiler(`${bt(e.op)} geht nur mit Zahlen.`, e);
      const t = promo(a.t, "int");
      const p = wandle(a, t) as ZahlJW;
      if (e.op === "+") {
        w = p;
        erkl = () => (a.t === "char" ? `Das \`+\` vor einem Zeichen liefert seinen Code: ${charLiteral(a.v as number)} hat den Code ${p.v}.` : "Das `+` vor einer Zahl ändert nichts.");
      } else if (e.op === "-") {
        if (p.t === "long") w = L(-p.v);
        else if (p.t === "int") w = I(-(p.v as number));
        else w = p.t === "float" ? F(-(p.v as number)) : D(-(p.v as number));
        const ueber = p.t === "int" && p.v === -2147483648;
        erkl = () => `Das Minus dreht das Vorzeichen um: ${this.zeige(w)}.${ueber ? " (Achtung: -2147483648 hat kein positives Gegenstück in `int`, es bleibt -2147483648.)" : ""}`;
      } else {
        if (!istGanz(p.t)) throw this.compiler("`~` geht nur mit ganzen Zahlen.", e);
        w = p.t === "long" ? L(~p.v) : I(~(p.v as number));
        erkl = () => `\`~\` kippt jedes Bit: ~${this.zeige(p)} ist ${this.zeige(w)} (das ist immer -x - 1).`;
      }
    }
    // -7 ist fuer Lernende ein Literal: kein eigener Schritt
    if (e.op === "-" && e.arg.k === "lit") return w;
    return this.red(e, w, erkl);
  }

  private binaer(e: AusdruckVon<"binaer">): JW {
    if (e.op === "&&" || e.op === "||") {
      const l = this.bool(this.wert(e.links), e.links);
      const und = e.op === "&&";
      if (und ? !l : l) {
        return this.red(e, B(l), () =>
          und
            ? "`&&`: Die linke Seite ist falsch, also ist das Ganze falsch. Die rechte Seite wird gar nicht mehr ausgewertet (Kurzschluss)."
            : "`||`: Die linke Seite ist wahr, also ist das Ganze wahr. Die rechte Seite wird gar nicht mehr ausgewertet (Kurzschluss).",
        );
      }
      const r = this.bool(this.wert(e.rechts), e.rechts);
      return this.red(e, B(r), () =>
        und ? `\`&&\`: Links steht wahr, also entscheidet die rechte Seite: ${wahrText(r)}.` : `\`||\`: Links steht falsch, also entscheidet die rechte Seite: ${wahrText(r)}.`,
      );
    }
    const l = this.wert(e.links);
    const r = this.wert(e.rechts);
    const w = this.binaerOp(e.op, l, r, e, () => this.istKonstant(e));
    return this.red(e, w, () => this.erklaereBinaer(e.op, l, r, w));
  }

  private textVon(w: JW): string {
    switch (w.t) {
      case "int":
      case "short":
      case "byte":
        return String(w.v);
      case "long":
        return w.v.toString();
      case "double":
        return doubleText(w.v);
      case "float":
        return floatText(w.v);
      case "char":
        return String.fromCharCode(w.v);
      case "boolean":
        return String(w.v);
      case "klasse":
        return w.name;
    }
    const o = w.o;
    if (!o) return "null";
    switch (o.k) {
      case "str":
        return o.s;
      case "sb":
        return o.s;
      case "exc":
        return `java.lang.${o.name}${o.meldung !== null ? ": " + o.meldung : ""}`;
      case "color":
        return `java.awt.Color[r=${o.r},g=${o.g},b=${o.b}]`;
    }
    throw new NichtUnterstuetzt(
      o.k === "arr"
        ? "Ein Array direkt als Text (etwa mit `println(a)` oder `\"\" + a`) zeigt eine Speicheradresse wie `[I@1b6d3586`, die bei jedem Lauf anders ist. Die Ablaufansicht kann sie nicht vorhersagen; nimm `Arrays.toString(a)`."
        : `Ein ${typVon(w)}-Objekt als Text zeigt eine Speicheradresse, die bei jedem Lauf anders ist.`,
    );
  }

  private binaerOp(op: string, l: JW, r: JW, e: Stelle, konstant: () => boolean): JW {
    if (op === "+" && (istStringW(l) || istStringW(r))) {
      const s = this.textVon(l) + this.textVon(r);
      return konstant() ? this.internString(s) : this.neuerString(s);
    }
    if (op === "==" || op === "!=") {
      let gleich: boolean;
      if (istZahl(l) && istZahl(r)) {
        const t = promo(l.t, r.t);
        gleich = t === "long" ? alsBig(l) === alsBig(r) : alsZahl(wandle(l, t) as ZahlJW) === alsZahl(wandle(r, t) as ZahlJW);
      } else if (l.t === "boolean" && r.t === "boolean") gleich = l.v === r.v;
      else if (l.t === "ref" && r.t === "ref") gleich = l.o === r.o;
      else throw this.compiler(`${bt(typVon(l))} und ${bt(typVon(r))} kann man nicht mit \`${op}\` vergleichen.`, e);
      return B(op === "==" ? gleich : !gleich);
    }
    if ((op === "&" || op === "|" || op === "^") && l.t === "boolean" && r.t === "boolean") {
      return B(op === "&" ? l.v && r.v : op === "|" ? l.v || r.v : l.v !== r.v);
    }
    if (!istZahl(l) || !istZahl(r)) {
      if (op === "+") throw this.compiler(`${bt(typVon(l))} + ${bt(typVon(r))} geht nicht.`, e);
      throw this.compiler(`Der Operator \`${op}\` geht nicht mit ${bt(typVon(l))} und ${bt(typVon(r))}.`, e);
    }
    if (op === "<<" || op === ">>" || op === ">>>") {
      const t = promo(l.t, "int");
      if (!istGanz(t) || !istGanz(r.t)) throw this.compiler(`\`${op}\` geht nur mit ganzen Zahlen.`, e);
      const n = Number(alsBig(r) & BigInt(t === "long" ? 63 : 31));
      if (t === "long") {
        const a = alsBig(l);
        if (op === "<<") return L(a << BigInt(n));
        if (op === ">>") return L(a >> BigInt(n));
        return L(BigInt.asUintN(64, a) >> BigInt(n));
      }
      const a = (wandle(l, "int") as ZahlJW).v as number;
      if (op === "<<") return I(a << n);
      if (op === ">>") return I(a >> n);
      return I(a >>> n);
    }
    const t = promo(l.t, r.t);
    if (op === "<" || op === ">" || op === "<=" || op === ">=") {
      let c: number;
      if (t === "long") {
        const a = alsBig(l);
        const b = alsBig(r);
        c = a < b ? -1 : a > b ? 1 : 0;
        return B(op === "<" ? c < 0 : op === ">" ? c > 0 : op === "<=" ? c <= 0 : c >= 0);
      }
      const a = alsZahl(wandle(l, t) as ZahlJW);
      const b = alsZahl(wandle(r, t) as ZahlJW);
      return B(op === "<" ? a < b : op === ">" ? a > b : op === "<=" ? a <= b : a >= b);
    }
    if (op === "&" || op === "|" || op === "^") {
      if (t === "float" || t === "double") throw this.compiler(`\`${op}\` geht nicht mit Kommazahlen.`, e);
      if (t === "long") {
        const a = alsBig(l);
        const b = alsBig(r);
        return L(op === "&" ? a & b : op === "|" ? a | b : a ^ b);
      }
      const a = (wandle(l, "int") as ZahlJW).v as number;
      const b = (wandle(r, "int") as ZahlJW).v as number;
      return I(op === "&" ? a & b : op === "|" ? a | b : a ^ b);
    }
    if (t === "long") {
      const a = alsBig(l);
      const b = alsBig(r);
      switch (op) {
        case "+":
          return L(a + b);
        case "-":
          return L(a - b);
        case "*":
          return L(a * b);
        case "/":
          if (b === N0) throw new JavaFehler("ArithmeticException", "/ by zero", e);
          return L(a / b);
        case "%":
          if (b === N0) throw new JavaFehler("ArithmeticException", "/ by zero", e);
          return L(a % b);
      }
    }
    if (t === "int") {
      const a = (wandle(l, "int") as ZahlJW).v as number;
      const b = (wandle(r, "int") as ZahlJW).v as number;
      switch (op) {
        case "+":
          return I(a + b);
        case "-":
          return I(a - b);
        case "*":
          return I(Math.imul(a, b));
        case "/":
          if (b === 0) throw new JavaFehler("ArithmeticException", "/ by zero", e);
          return I(Math.trunc(a / b));
        case "%":
          if (b === 0) throw new JavaFehler("ArithmeticException", "/ by zero", e);
          return I(a % b);
      }
    }
    const a = alsZahl(wandle(l, t) as ZahlJW);
    const b = alsZahl(wandle(r, t) as ZahlJW);
    const mk = t === "float" ? F : D;
    switch (op) {
      case "+":
        return mk(a + b);
      case "-":
        return mk(a - b);
      case "*":
        return mk(a * b);
      case "/":
        return mk(a / b);
      case "%":
        return mk(a % b);
    }
    throw this.compiler(`Unbekannter Operator \`${op}\`.`, e);
  }

  private erklaereBinaer(op: string, l: JW, r: JW, w: JW): string {
    const lz = this.zeige(l);
    const rz = this.zeige(r);
    const wz = this.zeige(w);
    if (op === "+" && istStringW(w)) {
      const andere = istStringW(l) ? r : l;
      if (istStringW(l) && istStringW(r)) return `\`+\` mit Strings hängt die Texte aneinander: ${wz}.`;
      if (andere.t === "char") return `\`+\` mit einem String: Das Zeichen ${this.zeige(andere)} wird angehängt, nicht gerechnet. Ergebnis: ${wz}.`;
      return `\`+\` mit einem String: Der Wert ${this.zeige(andere)} wird als Text angehängt, nicht gerechnet. Ergebnis: ${wz}.`;
    }
    if (op === "==" || op === "!=") {
      if (l.t === "ref" && r.t === "ref") {
        const gleich = l.o === r.o;
        if ((istStringW(l) && l.o) || (istStringW(r) && r.o)) {
          if (!l.o || !r.o) return `${bt(op)} mit \`null\` prüft, ob die Variable auf gar kein Objekt zeigt: ${wahrText((w as { v: boolean }).v)}.`;
          const inhaltGleich = (l.o as StrObj).s === (r.o as StrObj).s;
          return gleich
            ? `\`${op}\` vergleicht bei Strings nicht den Text, sondern ob beide auf dasselbe Objekt zeigen. Hier ist es dasselbe Objekt: ${wahrText((w as { v: boolean }).v)}. (Den Inhalt vergleicht man mit \`equals\`.)`
            : `\`${op}\` vergleicht bei Strings nicht den Text, sondern ob beide auf dasselbe Objekt zeigen. Hier sind es zwei verschiedene Objekte${inhaltGleich ? ", obwohl der Text gleich ist" : ""}: ${wahrText((w as { v: boolean }).v)}. Den Inhalt vergleicht man mit \`equals\`.`;
        }
        return `\`${op}\` vergleicht bei Objekten und Arrays, ob beide auf dasselbe Objekt zeigen: ${wahrText((w as { v: boolean }).v)}.`;
      }
    }
    if (w.t === "boolean") {
      const zeichen = l.t === "char" || r.t === "char" ? ` Zeichen werden über ihren Code verglichen${l.t === "char" ? ` (${lz} hat den Code ${l.v})` : ""}${r.t === "char" ? ` (${rz} hat den Code ${r.v})` : ""}.` : "";
      return `${lz} ${op} ${rz} ist ${wahrText(w.v)}.${zeichen}`;
    }
    if (!istZahl(l) || !istZahl(r)) return `Ergebnis: ${wz}.`;
    const t = promo(l.t, r.t);
    const ganz = t === "int" || t === "long";
    let s: string;
    if (op === "/") {
      if (ganz) {
        const exakt = alsZahl(l) / alsZahl(r);
        s = Number.isInteger(exakt)
          ? `Beide Zahlen sind ganzzahlig (\`${t}\`), deshalb ist das eine Ganzzahldivision: ${lz} / ${rz} ergibt ${wz}.`
          : `Beide Zahlen sind ganzzahlig (\`${t}\`), deshalb ist das eine Ganzzahldivision: ${lz} / ${rz} ergibt ${wz}, die Nachkommastellen fallen weg (es wird nicht gerundet).`;
      } else {
        s = `Mindestens eine Zahl ist eine Kommazahl (\`${t}\`), deshalb wird mit Nachkommastellen geteilt: ${lz} / ${rz} ergibt ${wz}.`;
        if (alsZahl(r) === 0) s += " Teilen durch 0 ergibt bei Kommazahlen keinen Fehler, sondern Infinity (unendlich) oder NaN (keine Zahl).";
      }
    } else if (op === "%") {
      s = ganz
        ? `\`%\` liefert den Rest der Ganzzahldivision: ${lz} / ${rz} ist ${this.textVon(this.binaerOp("/", l, r, { von: 0, bis: 0, q: 1 }, () => false))}, Rest ${wz}.`
        : `\`%\` liefert den Rest der Division: ${wz}.`;
      if (alsZahl(l) < 0) s += " Der Rest hat immer das Vorzeichen der linken Zahl.";
    } else {
      const wort = op === "+" ? "plus" : op === "-" ? "minus" : op === "*" ? "mal" : op;
      s = `${lz} ${wort} ${rz} ergibt ${wz}.`;
      if (["&", "|", "^"].includes(op)) s = `Bitweises ${op === "&" ? "UND" : op === "|" ? "ODER" : "exklusives ODER"}: ${lz} ${op} ${rz} ergibt ${wz}.`;
      if (op === "<<" || op === ">>" || op === ">>>") s = `\`${op}\` schiebt die Bits von ${lz} um ${rz} Stellen ${op === "<<" ? "nach links" : "nach rechts"}: ${wz}.`;
    }
    if ((l.t === "char" || r.t === "char") && w.t === "int" && op !== "%") {
      const c = l.t === "char" ? l : r;
      s += ` Ein \`char\` rechnet mit seinem Zeichencode (${this.zeige(c)} hat den Code ${(c as { v: number }).v}), das Ergebnis ist ein \`int\`.`;
    } else if (ganz && ["+", "-", "*"].includes(op)) {
      const exakt = op === "+" ? alsBig(l) + alsBig(r) : op === "-" ? alsBig(l) - alsBig(r) : alsBig(l) * alsBig(r);
      if (exakt !== alsBig(w as ZahlJW))
        s += ` Achtung Überlauf: Das genaue Ergebnis ${exakt.toString()} passt nicht in einen \`${t}\` (höchstens ${t === "int" ? "2147483647" : "9223372036854775807"}); Java rechnet stillschweigend im Kreis weiter.`;
    } else if (!ganz && (istGanz(l.t) || istGanz(r.t)) && op !== "/") {
      s += ` Eine Seite ist eine Kommazahl, deshalb rechnet Java mit \`${t}\`.`;
    }
    return s;
  }

  private bedingt(e: AusdruckVon<"bedingt">): JW {
    const b = this.bool(this.wert(e.bed), e.bed);
    const c = this.ctx;
    if (c && e.q === 0 && this.still === 0) {
      c.notiere();
      this.schritt("bedingung", e.bed, () => `Die Bedingung vor \`?\` ist ${wahrText(b)}, also gilt der Teil ${b ? "zwischen `?` und `:`" : "nach `:`"}.`, { fein: true, bedingung: b, auswertung: c.formen.slice() });
    }
    let w = this.wert(b ? e.dann : e.sonst);
    // Typ des ?:-Ausdrucks (numerische Regeln)
    const andere = this.statischerTyp(b ? e.sonst : e.dann);
    if (istZahl(w) && andere && andere in RANG && andere !== w.t) {
      const andererKnoten = b ? e.sonst : e.dann;
      const dieserKnoten = b ? e.dann : e.sonst;
      const eng = (t: string) => t === "char" || t === "short" || t === "byte";
      if (eng(w.t) && andere === "int" && this.istKonstant(andererKnoten)) {
        /* bleibt beim engeren Typ */
      } else if (eng(andere) && w.t === "int" && this.istKonstant(dieserKnoten)) {
        w = wandle(w, andere);
      } else w = wandle(w, promo(w.t, andere));
    }
    return this.red(e, w, () => `Der ganze \`?:\`-Ausdruck hat den Wert ${this.zeige(w)}.`);
  }

  private cast(e: AusdruckVon<"cast">): JW {
    const ziel = typText(e.typ);
    const a = this.wert(e.arg);
    let w: JW;
    let erkl: () => string;
    if (PRIMITIV.has(ziel)) {
      if (ziel === "boolean") {
        if (a.t !== "boolean") throw this.compiler(`${bt(typVon(a))} lässt sich nicht in \`boolean\` umwandeln.`, e);
        w = a;
        erkl = () => "Der Cast ändert nichts.";
      } else {
        if (!istZahl(a)) throw this.compiler(`${bt(typVon(a))} lässt sich nicht in ${bt(ziel)} umwandeln.`, e);
        w = wandle(a, ziel);
        erkl = () => this.erklaereCast(a, w, ziel);
      }
    } else {
      if (a.t !== "ref") throw this.compiler(`${bt(typVon(a))} lässt sich nicht in ${bt(ziel)} umwandeln.`, e);
      if (a.o && typVon(a) !== ziel && ziel !== "Object") throw new JavaFehler("ClassCastException", `class ${typVon(a)} cannot be cast to class ${ziel}`, e);
      w = a;
      erkl = () => "Der Cast ändert nichts am Objekt.";
    }
    return this.red(e, w, erkl);
  }

  private erklaereCast(a: ZahlJW, w: JW, ziel: string): string {
    const az = this.zeige(a);
    const wz = this.zeige(w);
    if ((a.t === "double" || a.t === "float") && istGanz(ziel)) {
      if (ziel === "char") return `\`(char)\` schneidet zuerst die Nachkommastellen ab und nimmt dann die Zahl als Zeichencode: ${wz}.`;
      return `\`(${ziel})\` schneidet die Nachkommastellen einfach ab (es wird nicht gerundet): ${az} wird ${wz}.`;
    }
    if (ziel === "char") return `\`(char)\` nimmt die Zahl ${az} als Zeichencode: Das Zeichen mit dem Code ${(w as { v: number }).v} ist ${wz}.`;
    if (a.t === "char") return `\`(${ziel})\` liefert den Zeichencode: ${az} hat den Code ${wz}.`;
    if (ziel === "double" || ziel === "float") return `\`(${ziel})\` macht aus ${az} die Kommazahl ${wz}.`;
    if (alsZahl(a) !== alsZahl(w as ZahlJW))
      return `${az} passt nicht in \`${ziel}\`: Es bleiben nur die unteren Bits übrig, das ergibt ${wz}.`;
    return `\`(${ziel})\` wandelt ${az} in den Typ \`${ziel}\` um: ${wz}.`;
  }

  private switchAusdruck(e: AusdruckVon<"switchAusdr">): JW {
    const w = this.wert(e.ausdr);
    const i = this.waehleFall(e.faelle, w, e.ausdr);
    if (i < 0) throw new JavaFehler("MatchException", null, e);
    const f = this.oben;
    for (let k = i; k < e.faelle.length; k++) {
      const fa = e.faelle[k];
      if (fa.wert) {
        const r = this.wert(fa.wert);
        return this.red(e, r, () => `Der \`switch\` liefert ${this.zeige(r)}.`);
      }
      f.scopes.push([]);
      const gespeichert = this.ctx;
      const sig = this.fuehreListe(fa.anw);
      this.ctx = gespeichert;
      f.scopes.pop();
      f.beruehrt = ++this.tick;
      if (sig && sig.k === "yield") return this.red(e, sig.w, () => `Der \`switch\` liefert ${this.zeige(sig.w)}.`);
      if (sig) throw this.compiler("Im `switch`-Ausdruck fehlt `yield`.", e);
      if (e.pfeil) break;
    }
    throw this.compiler("Im `switch`-Ausdruck fehlt `yield`.", e);
  }

  // ---------------- new

  private neu(e: AusdruckVon<"neu">): JW {
    const typ = e.typ.name;
    const args = () => e.args.map((a) => this.wert(a));
    switch (typ) {
      case "String": {
        const a = args();
        let s = "";
        if (a.length === 1) {
          const x = a[0];
          if (istStringW(x)) {
            if (x.t === "ref" && !x.o) throw new JavaFehler("NullPointerException", null, e);
            s = this.textVon(x);
          } else if (x.t === "ref" && x.o?.k === "arr" && x.o.elem === "char") s = x.o.w.map((c) => String.fromCharCode((c as { v: number }).v)).join("");
          else if (x.t === "ref" && x.o?.k === "sb") s = x.o.s;
          else throw this.compiler("`new String(…)` erwartet einen String oder ein `char[]`.", e);
        } else if (a.length === 3 && a[0].t === "ref" && a[0].o?.k === "arr") {
          const off = (a[1] as { v: number }).v;
          const n = (a[2] as { v: number }).v;
          s = a[0].o.w.slice(off, off + n).map((c) => String.fromCharCode((c as { v: number }).v)).join("");
        } else if (a.length !== 0) throw this.compiler("Diese Form von `new String(…)` wird nicht unterstützt.", e);
        const w = this.neuerString(s);
        return this.red(e, w, () => `${bt(codeKurz(this.code(e)))} erzeugt ein neues String-Objekt mit dem Text ${stringLiteral(s, 40)}. Es ist ein anderes Objekt als das Literal, auch wenn der Text gleich ist.`);
      }
      case "StringBuilder": {
        const a = args();
        let s = "";
        if (a.length === 1 && a[0].t !== "int") s = this.textVon(a[0]);
        const o: SbObj = { k: "sb", id: this.naechsteId++, s, tick: 0 };
        return { t: "ref", o, st: "StringBuilder" };
      }
      case "Scanner": {
        const a = args();
        if (a.length === 1 && a[0].t === "ref" && a[0].o?.k === "in") return { t: "ref", o: { k: "scanner", id: this.naechsteId++, quelle: this.stdin, tick: 0 }, st: "Scanner" };
        if (a.length === 1 && istStringW(a[0]) && a[0].t === "ref" && a[0].o)
          return { t: "ref", o: { k: "scanner", id: this.naechsteId++, quelle: { text: (a[0].o as StrObj).s, pos: 0 }, tick: 0 }, st: "Scanner" };
        throw new NichtUnterstuetzt("Ein Scanner, der nicht von `System.in` liest (etwa aus einer Datei), wird nicht unterstützt.", e.von);
      }
      case "Random": {
        const a = args();
        if (a.length === 0) throw new NichtUnterstuetzt("`new Random()` ohne festen Startwert liefert bei jedem Lauf andere Zahlen; die Ablaufansicht kann sie nicht vorhersagen.", e.von);
        const s = istZahl(a[0]) ? alsBig(a[0]) : N0;
        return { t: "ref", o: { k: "random", id: this.naechsteId++, seed: (s ^ BigInt("0x5DEECE66D")) & ((N1 << BigInt(48)) - N1), tick: 0 }, st: "Random" };
      }
      case "CodeDraw": {
        if (e.typ.paket === undefined) this.pruefeImport("CodeDraw", e.typ);
        const a = args();
        if (a.length === 0) return this.neuesFenster(FENSTER_STANDARD, FENSTER_STANDARD, e);
        if (a.length === 2) return this.neuesFenster(this.intArg(a[0], e), this.intArg(a[1], e), e);
        throw this.compiler("Ein `CodeDraw` entsteht mit `new CodeDraw()` (600 × 600) oder `new CodeDraw(breite, hoehe)`.", e);
      }
      case "Color": {
        if (e.typ.paket === undefined) this.pruefeImport("Color", e.typ);
        const a = args();
        if (a.length === 1) return this.farbeAusRgb(this.intArg(a[0], e));
        if (a.length === 3 || a.length === 4) return this.farbeAusTeilen(a.map((x) => this.intArg(x, e)), e);
        throw this.compiler("Eine `Color` entsteht mit `new Color(rot, gruen, blau)` (je 0 bis 255), optional mit Alpha als viertem Wert.", e);
      }
    }
    if (/(Exception|Error)$/.test(typ)) {
      const a = args();
      const m = a.length && istStringW(a[0]) ? (a[0].t === "ref" && a[0].o ? (a[0].o as StrObj).s : null) : null;
      return { t: "ref", o: { k: "exc", id: this.naechsteId++, name: typ, meldung: m }, st: typ };
    }
    if (this.klassen.has(typ)) throw new NichtUnterstuetzt(`Klassen mit Objekten (\`new ${typ}(…)\`) zeigt die Ablaufansicht (noch) nicht.`, e.von);
    throw new NichtUnterstuetzt(`\`new ${typ}(…)\` wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private neuArray(e: AusdruckVon<"neuArray">, ziel: boolean): JW {
    const basis = e.elem.name;
    this.pruefeTyp(basis, e.elem);
    if (e.init) {
      const w = this.arrayAusInit(e.init, basis + "[]".repeat(e.dims - 1));
      return this.red(e, w, () => `${bt(codeKurz(this.code(e)))} legt ein neues Array mit ${(w as { o: ArrObj }).o.w.length} Elementen an.`, ziel);
    }
    const groessen = e.dimAusdr.map((d) => {
      const n = this.ganzIndex(this.wert(d), d);
      if (n < 0) throw new JavaFehler("NegativeArraySizeException", String(n), d);
      return n;
    });
    const erzeuge = (k: number): JW => {
      const elemTyp = basis + "[]".repeat(e.dims - k - 1);
      const n = groessen[k];
      const werte: JW[] = [];
      for (let i = 0; i < n; i++) werte.push(k + 1 < groessen.length ? erzeuge(k + 1) : this.standardWert(elemTyp));
      this.zaehle();
      return this.neuesArray(elemTyp, werte);
    };
    const w = erzeuge(0);
    const o = (w as { o: ArrObj }).o;
    const std = this.zeige(this.standardWert(basis + "[]".repeat(e.dims - groessen.length)));
    return this.red(
      e,
      w,
      () =>
        groessen.length > 1
          ? `${bt(codeKurz(this.code(e)))} legt ${groessen[0]} Zeilen mit je ${groessen[1]} Plätzen an; jeder Platz ist zuerst ${std}.`
          : `${bt(codeKurz(this.code(e)))} legt ein neues Array mit ${o.w.length} Plätzen an; jeder Platz ist zuerst ${std}.`,
      ziel,
    );
  }

  // ---------------- Methodenaufrufe

  private aufruf(e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    if (e.ziel === null) return this.eigenerAufruf(this.oben.klasse, e, ziel);
    const k = this.alsKlasse(e.ziel);
    if (k !== null) {
      if (this.klassen.has(k)) return this.eigenerAufruf(k, e, ziel);
      return this.bibStatisch(k, e, ziel);
    }
    const z = this.wert(e.ziel, true);
    if (z.t === "klasse") return this.bibStatisch(z.name, e, ziel);
    if (z.t !== "ref") throw this.compiler(`${bt(typVon(z))} ist ein einfacher Typ und hat keine Methoden.`, e);
    if (!z.o) {
      const typ = z.st === "null" ? "Object" : z.st;
      throw new JavaFehler("NullPointerException", `Cannot invoke "${typ}.${e.name}()" because ${this.npeName(e.ziel)} is null`, e);
    }
    return this.objektMethode(z.o, e, ziel);
  }

  private passt(von: string, zu: string): boolean {
    if (von === zu) return true;
    if (von in WEITER) return WEITER[von].includes(zu);
    if (PRIMITIV.has(zu)) return false;
    if (von === "null") return !PRIMITIV.has(zu);
    if (zu === "Object") return true;
    if (zu === "CharSequence") return von === "String" || von === "StringBuilder";
    if (zu === "Object[]") return von.endsWith("[]") && !PRIMITIV.has(von.slice(0, -2));
    return false;
  }

  private waehleMethode(kandidaten: Methode[], args: JW[]): Methode | null {
    const typen = args.map(typVon);
    const anwendbar = kandidaten.filter((m) => m.params.length === args.length && m.params.every((p, i) => this.passt(typen[i], typText(p.typ))));
    let liste = anwendbar;
    if (!liste.length)
      liste = kandidaten.filter((m) => {
        const p = m.params;
        if (!p.length || !p[p.length - 1].varargs || args.length < p.length - 1) return false;
        const elem = typText(p[p.length - 1].typ).slice(0, -2);
        return p.slice(0, -1).every((q, i) => this.passt(typen[i], typText(q.typ))) && typen.slice(p.length - 1).every((t) => this.passt(t, elem));
      });
    if (liste.length <= 1) return liste[0] ?? null;
    const spezifischer = (a: Methode, b: Methode) => a.params.every((p, i) => this.passt(typText(p.typ), typText(b.params[i]?.typ ?? p.typ)));
    return liste.find((m) => liste.every((x) => x === m || spezifischer(m, x))) ?? liste[0];
  }

  private eigenerAufruf(klasse: string, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const kandidaten = this.methodenVon(klasse, e.name);
    if (!kandidaten.length) {
      if (e.ziel === null && BIB_KLASSEN.has(e.name)) throw this.compiler(`${bt(e.name)} ist eine Klasse, keine Methode.`, e);
      throw this.compiler(`Die Methode ${bt(e.name)} gibt es nicht${klasse !== "Main" ? ` in der Klasse ${bt(klasse)}` : ""}.`, e);
    }
    const args = e.args.map((a) => this.wert(a));
    const m = this.waehleMethode(kandidaten, args);
    if (!m) throw this.compiler(`Keine Methode ${bt(e.name)} passt zu den Argumenten (${args.map(typVon).join(", ")}).`, e);
    if (!m.statisch) throw new NichtUnterstuetzt(`Methoden ohne \`static\` (Objektmethoden wie ${bt(e.name)}) zeigt die Ablaufansicht (noch) nicht.`, e.von);
    const aufrufText = this.texte ? `${m.name}(${args.map((a) => this.zeige(a)).join(", ")})` : m.name;
    const w = this.rufe(m, args, e, aufrufText);
    if (w === null) {
      this.anwInfo = () => `Zurück in ${bt(this.oben.anzeige)}: Der Aufruf ${bt(aufrufText)} ist erledigt.`;
      return null;
    }
    this.anwInfo = () => `${bt(aufrufText)} ist fertig; der Rückgabewert ${this.zeige(w)} wird nicht verwendet.`;
    if (e === this.ohneSchritt) return w;
    return this.red(e, w, () => `Der Aufruf ${bt(aufrufText)} hat ${this.zeige(w)} zurückgegeben.`, ziel);
  }

  private rufe(m: Methode, args: JW[], e: Ausdruck, aufrufText: string): JW | null {
    if (this.frames.length >= this.opt.maxTiefe) throw new JavaFehler("StackOverflowError", null, e);
    if (!m.rumpf) throw new NichtUnterstuetzt(`Die Methode ${bt(m.name)} hat keinen Rumpf.`);
    let anzeige = this.methodenAnzeige.get(m);
    if (anzeige === undefined) {
      anzeige = `${m.name}(${m.params.map((p) => `${typText(p.typ)} ${p.name}`).join(", ")})`;
      this.methodenAnzeige.set(m, anzeige);
    }
    const f = this.neuerFrame(anzeige, m, m.klasse, true);
    f.aufrufText = aufrufText;
    // Parameter binden (Varargs packen)
    const p = m.params;
    const werte = args.slice();
    if (p.length && p[p.length - 1].varargs && !(werte.length === p.length && this.passt(typVon(werte[werte.length - 1]), typText(p[p.length - 1].typ)))) {
      const elem = typText(p[p.length - 1].typ).slice(0, -2);
      const rest = werte.splice(p.length - 1).map((w) => this.zuweisungsKonversion(w, elem, null, e));
      werte.push(this.neuesArray(elem, rest));
    }
    const aufrufer = this.oben;
    this.frames.push(f);
    p.forEach((q, i) => {
      const typ = typText(q.typ);
      this.pruefeTyp(typ, q.typ);
      this.legeAn(f, q.name, typ, this.zuweisungsKonversion(werte[i], typ, null, e), false);
    });
    const gespeichert = { ctx: this.ctx, ohne: this.ohneSchritt, info: this.anwInfo };
    this.ctx = null;
    this.ohneSchritt = null;
    if (m.kopfVon >= 0)
      this.schritt("aufruf", { von: m.kopfVon, bis: m.kopfBis, q: 0 }, () => {
        const paramText = p.length ? `: ${aufzaehlen(p.map((q, i) => `${bt(q.name)} ist ${this.zeige(f.scopes[0][i].w!)}`))}` : "";
        const warte =
          aufrufer.methode === m
            ? ` Der Aufruf ${bt(aufrufer.aufrufText)} wartet, bis dieser fertig ist.`
            : ` ${bt(aufrufer.anzeige === "Aufruf" ? "Aufruf" : aufrufer.anzeige.replace(/\(.*$/, ""))} wartet so lange.`;
        return `${bt(aufrufText)} wird aufgerufen${paramText}.${aufrufer.sichtbar && aufrufer.methode ? warte : ""}`;
      });
    const sig = this.fuehreListe(m.rumpf.anw);
    let w: JW | null = null;
    if (sig && sig.k === "return") w = sig.w;
    else if (sig && (sig.k === "break" || sig.k === "continue")) throw this.compiler(`\`${sig.k}\` steht außerhalb einer Schleife.`, sig.stelle);
    else {
      if (typText(m.rueck) !== "void") throw this.compiler(`Die Methode ${bt(m.name)} endet ohne \`return\`, obwohl sie einen Wert liefern muss.`, { von: m.rumpf.bis - 1, bis: m.rumpf.bis, q: 0 });
      this.ctx = null;
      this.schritt(
        "rueckkehr",
        { von: m.rumpf.bis - 1, bis: m.rumpf.bis, q: 0 },
        () => `${bt(aufrufText)} ist fertig: Das Ende der Methode ist erreicht. ${aufrufer.methode ? `Es geht zurück zu ${bt(aufrufer.anzeige.replace(/\(.*$/, ""))}.` : "Es geht zurück zum Aufrufer."}`,
      );
    }
    this.frames.pop();
    aufrufer.beruehrt = ++this.tick;
    this.ctx = gespeichert.ctx;
    this.ohneSchritt = gespeichert.ohne;
    this.anwInfo = gespeichert.info;
    return w;
  }

  // ====================================================================== Bibliothek

  private zahlArg(w: JW, stelle: Stelle): ZahlJW {
    if (!istZahl(w)) throw this.compiler(`Hier wird eine Zahl erwartet, nicht ${bt(typVon(w))}.`, stelle);
    return w;
  }
  private intArg(w: JW, stelle: Stelle): number {
    if (w.t === "int" || w.t === "char" || w.t === "short" || w.t === "byte") return w.v;
    throw this.compiler(`Hier wird ein \`int\` erwartet, nicht ${bt(typVon(w))}.`, stelle);
  }
  private strArg(w: JW, stelle: Stelle, npeText = "the argument"): string {
    if (!istStringW(w)) {
      if (w.t === "ref" && w.o && w.o.k === "sb") return w.o.s;
      throw this.compiler(`Hier wird ein String erwartet, nicht ${bt(typVon(w))}.`, stelle);
    }
    const o = (w as { o: StrObj | null }).o;
    if (!o) throw new JavaFehler("NullPointerException", `Cannot invoke "String.length()" because ${npeText} is null`, stelle);
    return o.s;
  }
  private arrArg(w: JW, stelle: Stelle): ArrObj {
    if (w.t !== "ref" || (w.o && w.o.k !== "arr")) throw this.compiler(`Hier wird ein Array erwartet, nicht ${bt(typVon(w))}.`, stelle);
    if (!w.o) throw new JavaFehler("NullPointerException", null, stelle);
    return w.o;
  }

  /** Ergebnis eines Bibliotheksaufrufs: Kette fortschreiben, Satz fuer die Anweisung merken */
  private bibErgebnis(e: AusdruckVon<"aufruf">, w: JW | null, erkl: () => string, ziel: boolean): JW | null {
    this.anwInfo = erkl;
    if (w === null || e === this.ohneSchritt) return w;
    return this.red(e, w, erkl, ziel);
  }

  private bibStatisch(k: string, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const n = e.name;
    const args = e.args.map((a) => this.wert(a));
    const a0 = args[0];
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    const nicht = () => new NichtUnterstuetzt(`${bt(k + "." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
    switch (k) {
      case "Math":
      case "StrictMath":
        return this.mathe(n, args, e, ziel, c);
      case "String":
        if (n === "valueOf" || n === "copyValueOf") {
          if (args.length === 1) {
            const x = a0;
            let s: string;
            if (x.t === "ref" && x.o && x.o.k === "arr" && x.o.elem === "char") s = x.o.w.map((z) => String.fromCharCode((z as { v: number }).v)).join("");
            else if (x.t === "ref" && x.o && x.o.k === "str") return this.bibErgebnis(e, x, () => `${c} liefert denselben String ${this.zeige(x)}.`, ziel);
            else s = this.textVon(x);
            return this.bibErgebnis(e, this.neuerString(s), () => `${c} macht aus ${this.zeige(x)} den Text ${stringLiteral(s, 40)}.`, ziel);
          }
        }
        if (n === "format") {
          const s = this.formatiere(args, e);
          return this.bibErgebnis(e, this.neuerString(s), () => `${c} setzt die Werte in die Vorlage ein: ${stringLiteral(s, 40)}.`, ziel);
        }
        if (n === "join") {
          const trenn = this.strArg(a0, e);
          let teile: string[];
          if (args.length === 2 && args[1].t === "ref" && args[1].o?.k === "arr") teile = args[1].o.w.map((x) => this.textVon(x));
          else teile = args.slice(1).map((x) => this.textVon(x));
          const s = teile.join(trenn);
          return this.bibErgebnis(e, this.neuerString(s), () => `${c} verbindet die Teile mit ${stringLiteral(trenn)}: ${stringLiteral(s, 40)}.`, ziel);
        }
        throw nicht();
      case "Integer":
      case "Long":
      case "Short":
      case "Byte":
        return this.ganzzahlKlasse(k, n, args, e, ziel, c);
      case "Double":
      case "Float":
        return this.doubleKlasse(k, n, args, e, ziel, c);
      case "Boolean":
        if (n === "parseBoolean") {
          const s = istStringW(a0) && a0.t === "ref" && a0.o ? (a0.o as StrObj).s : "";
          const w = B(s.toLowerCase() === "true");
          return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
        }
        if (n === "toString" || n === "valueOf") {
          if (n === "toString") return this.bibErgebnis(e, this.neuerString(this.textVon(a0)), () => `${c} liefert den Text ${stringLiteral(this.textVon(a0))}.`, ziel);
          return this.bibErgebnis(e, a0.t === "boolean" ? a0 : B(this.strArg(a0, e).toLowerCase() === "true"), () => `${c} liefert den Wahrheitswert.`, ziel);
        }
        throw nicht();
      case "Character":
        return this.zeichenKlasse(n, args, e, ziel, c);
      case "Arrays":
        return this.arraysKlasse(n, args, e, ziel, c);
      case "System":
        if (n === "exit") throw new ProgrammEnde(this.intArg(a0, e), e);
        if (n === "arraycopy") {
          const src = this.arrArg(args[0], e);
          const sp = this.intArg(args[1], e);
          const dst = this.arrArg(args[2], e);
          const dp = this.intArg(args[3], e);
          const len = this.intArg(args[4], e);
          if (src.elem !== dst.elem) throw new JavaFehler("ArrayStoreException", `arraycopy: type mismatch: can not copy ${src.elem}[] into ${dst.elem}[]`, e);
          if (sp < 0) throw new JavaFehler("ArrayIndexOutOfBoundsException", `arraycopy: source index ${sp} out of bounds for ${src.elem}[${src.w.length}]`, e);
          if (dp < 0) throw new JavaFehler("ArrayIndexOutOfBoundsException", `arraycopy: destination index ${dp} out of bounds for ${dst.elem}[${dst.w.length}]`, e);
          if (len < 0) throw new JavaFehler("ArrayIndexOutOfBoundsException", `arraycopy: length ${len} is negative`, e);
          if (sp + len > src.w.length) throw new JavaFehler("ArrayIndexOutOfBoundsException", `arraycopy: last source index ${sp + len} out of bounds for ${src.elem}[${src.w.length}]`, e);
          if (dp + len > dst.w.length) throw new JavaFehler("ArrayIndexOutOfBoundsException", `arraycopy: last destination index ${dp + len} out of bounds for ${dst.elem}[${dst.w.length}]`, e);
          const teil = src.w.slice(sp, sp + len);
          teil.forEach((x, i) => {
            dst.w[dp + i] = x;
            dst.ticks[dp + i] = ++this.tick;
          });
          dst.tick = this.tick;
          dst.version++;
          return this.bibErgebnis(e, null, () => `${c} kopiert ${len} Elemente.`, ziel);
        }
        if (n === "lineSeparator") return this.bibErgebnis(e, this.internString("\n"), () => `${c} liefert den Zeilenumbruch.`, ziel);
        if (n === "currentTimeMillis" || n === "nanoTime") throw new NichtUnterstuetzt("Die Uhrzeit (`System.currentTimeMillis()`) ist bei jedem Lauf anders; die Ablaufansicht kann sie nicht vorhersagen.", e.von);
        throw nicht();
      case "Objects":
        if (n === "equals") {
          const [x, y] = args;
          const gleich = x.t === "ref" && y.t === "ref" ? (x.o === y.o ? true : x.o && y.o && x.o.k === "str" && y.o.k === "str" ? x.o.s === y.o.s : false) : false;
          return this.bibErgebnis(e, B(gleich), () => `${c} liefert ${wahrText(gleich)}.`, ziel);
        }
        throw nicht();
      case "Thread":
        throw new NichtUnterstuetzt("Threads (`Thread`) zeigt die Ablaufansicht nicht.", e.von);
      case "Palette": {
        if (e.ziel?.k === "name") this.pruefeImport("Palette", e.ziel);
        let w: JW;
        if (n === "fromRGB" && args.length === 3) w = this.farbeAusTeilen(args.map((x) => this.intArg(x, e)), e);
        else if (n === "fromRGB" && args.length === 1) w = this.farbeAusRgb(this.intArg(a0, e));
        else if (n === "fromRGBA" && args.length === 4) w = this.farbeAusTeilen(args.map((x) => this.intArg(x, e)), e);
        else if (n === "fromGrayscale" && args.length === 1) {
          const g = this.intArg(a0, e);
          w = this.farbeAusTeilen([g, g, g], e);
        } else throw nicht();
        const f = (w as { o: ColorObj }).o;
        return this.bibErgebnis(e, w, () => `${c} erzeugt die Farbe ${farbWort(f)} (Rot ${f.r}, Grün ${f.g}, Blau ${f.b}${f.a === 255 ? "" : `, Alpha ${f.a}`}).`, ziel);
      }
    }
    throw nicht();
  }

  private mathe(n: string, args: JW[], e: AusdruckVon<"aufruf">, ziel: boolean, c: string): JW | null {
    const z = (i: number) => this.zahlArg(args[i], e);
    const d = (i: number) => alsZahl(wandle(z(i), "double") as ZahlJW);
    let w: JW;
    let erkl: () => string;
    switch (n) {
      case "abs": {
        const a = wandle(z(0), promo(z(0).t, "int")) as ZahlJW;
        if (a.t === "int") w = I(Math.abs(a.v as number));
        else if (a.t === "long") w = L(a.v < N0 ? -a.v : a.v);
        else w = a.t === "float" ? F(Math.abs(a.v as number)) : D(Math.abs(a.v as number));
        erkl = () => `${c} liefert den Betrag (die Zahl ohne Minus): ${this.zeige(w)}.`;
        break;
      }
      case "max":
      case "min": {
        const t = promo(z(0).t, z(1).t);
        const a = wandle(z(0), t) as ZahlJW;
        const b = wandle(z(1), t) as ZahlJW;
        if (t === "long") w = L(n === "max" ? (alsBig(a) > alsBig(b) ? alsBig(a) : alsBig(b)) : alsBig(a) < alsBig(b) ? alsBig(a) : alsBig(b));
        else {
          const x = n === "max" ? Math.max(alsZahl(a), alsZahl(b)) : Math.min(alsZahl(a), alsZahl(b));
          w = t === "int" ? I(x) : t === "float" ? F(x) : D(x);
        }
        erkl = () => `${c} liefert die ${n === "max" ? "größere" : "kleinere"} der beiden Zahlen: ${this.zeige(w)}.`;
        break;
      }
      case "pow":
        w = D(Math.pow(d(0), d(1)));
        erkl = () => `${c} rechnet ${this.zeige(args[0])} hoch ${this.zeige(args[1])}; das Ergebnis ist immer ein \`double\`: ${this.zeige(w)}.`;
        break;
      case "sqrt":
        w = D(Math.sqrt(d(0)));
        erkl = () => `${c} liefert die Quadratwurzel als \`double\`: ${this.zeige(w)}.`;
        break;
      case "cbrt":
        w = D(Math.cbrt(d(0)));
        erkl = () => `${c} liefert die Kubikwurzel: ${this.zeige(w)}.`;
        break;
      case "floor":
      case "ceil":
      case "rint":
        w = D(n === "floor" ? Math.floor(d(0)) : n === "ceil" ? Math.ceil(d(0)) : rint(d(0)));
        erkl = () =>
n === "floor"
            ? `${c} rundet ab (zur nächstkleineren ganzen Zahl), das Ergebnis bleibt ein \`double\`: ${this.zeige(w)}.`
            : n === "ceil"
              ? `${c} rundet auf (zur nächstgrößeren ganzen Zahl), das Ergebnis bleibt ein \`double\`: ${this.zeige(w)}.`
              : `${c} rundet zur nächsten ganzen Zahl: ${this.zeige(w)}.`;
        break;
      case "round": {
        const a = z(0);
        if (a.t === "float") {
          const x = a.v;
          w = I(Number.isNaN(x) ? 0 : Math.max(-2147483648, Math.min(2147483647, Math.floor(x + 0.5))));
        } else {
          const x = alsZahl(wandle(a, "double") as ZahlJW);
          const r = Math.round(x);
          w = Number.isNaN(x) ? L(N0) : r >= 9223372036854775807 ? L(BigInt("9223372036854775807")) : r <= -9223372036854775808 ? L(BigInt("-9223372036854775808")) : L(BigInt(r));
        }
        erkl = () => `${c} rundet kaufmännisch (ab .5 aufwärts) und liefert ${a.t === "float" ? "einen `int`" : "einen `long`"}: ${this.zeige(w)}.`;
        break;
      }
      case "signum":
        w = z(0).t === "float" ? F(Math.sign(d(0))) : D(Math.sign(d(0)));
        erkl = () => `${c} liefert das Vorzeichen als Zahl (-1.0, 0.0 oder 1.0): ${this.zeige(w)}.`;
        break;
      case "hypot":
        w = D(Math.hypot(d(0), d(1)));
        erkl = () => `${c} liefert die Länge der Hypotenuse: ${this.zeige(w)}.`;
        break;
      case "floorDiv":
      case "floorMod": {
        const t = promo(z(0).t, z(1).t);
        const a = alsBig(z(0));
        const b = alsBig(z(1));
        if (b === N0) throw new JavaFehler("ArithmeticException", "/ by zero", e);
        let q = a / b;
        if ((a % b !== N0) && ((a < N0) !== (b < N0))) q -= N1;
        const r = n === "floorDiv" ? q : a - q * b;
        w = t === "long" ? L(r) : I(Number(r));
        erkl = () => `${c} liefert ${this.zeige(w)}.`;
        break;
      }
      case "exp":
      case "log":
      case "log10":
      case "sin":
      case "cos":
      case "tan":
      case "asin":
      case "acos":
      case "atan":
      case "toRadians":
      case "toDegrees": {
        const x = d(0);
        const f: Record<string, (x: number) => number> = {
          exp: Math.exp, log: Math.log, log10: Math.log10, sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan,
          toRadians: (v) => (v / 180) * Math.PI, toDegrees: (v) => (v * 180) / Math.PI,
        };
        w = D(f[n](x));
        erkl = () => `${c} liefert ${this.zeige(w)}.`;
        break;
      }
      case "atan2":
        w = D(Math.atan2(d(0), d(1)));
        erkl = () => `${c} liefert ${this.zeige(w)}.`;
        break;
      case "random":
        throw new NichtUnterstuetzt("`Math.random()` liefert bei jedem Lauf andere Zahlen; die Ablaufansicht kann sie nicht vorhersagen.", e.von);
      default:
        throw new NichtUnterstuetzt(`${bt("Math." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
    }
    return this.bibErgebnis(e, w, erkl, ziel);
  }

  private parseGanz(s: string, radix: number, bits: 32 | 64, e: Stelle): bigint | null {
    if (!/^[+-]?[0-9a-zA-Z]+$/.test(s)) return null;
    const neg = s.startsWith("-");
    const ziffern = s.replace(/^[+-]/, "").toLowerCase();
    let v = N0;
    const R = BigInt(radix);
    for (const ch of ziffern) {
      const d = parseInt(ch, 36);
      if (Number.isNaN(d) || d >= radix) return null;
      v = v * R + BigInt(d);
    }
    if (neg) v = -v;
    const max = bits === 32 ? BigInt(2147483647) : BigInt("9223372036854775807");
    if (v > max || v < -max - N1) return null;
    void e;
    return v;
  }

  private ganzzahlKlasse(k: string, n: string, args: JW[], e: AusdruckVon<"aufruf">, ziel: boolean, c: string): JW | null {
    const lang = k === "Long";
    const a0 = args[0];
    const mk = (v: bigint): JW => (lang ? L(v) : k === "Short" ? wandle(I(Number(v)) as ZahlJW, "short") : k === "Byte" ? wandle(I(Number(v)) as ZahlJW, "byte") : I(Number(v)));
    switch (n) {
      case "parseInt":
      case "parseLong":
      case "parseShort":
      case "parseByte":
      case "valueOf": {
        if (n === "valueOf" && istZahl(a0)) return this.bibErgebnis(e, lang ? wandle(a0, "long") : a0, () => `${c} liefert ${this.zeige(a0)}.`, ziel);
        if (a0.t === "ref" && !a0.o) throw new JavaFehler("NumberFormatException", "Cannot parse null string", e);
        const s = this.strArg(a0, e);
        const radix = args.length > 1 ? this.intArg(args[1], e) : 10;
        const v = this.parseGanz(s, radix, lang ? 64 : 32, e);
        const grenze = k === "Short" ? 32767 : k === "Byte" ? 127 : null;
        if (v === null || (grenze !== null && (v > BigInt(grenze) || v < BigInt(-grenze - 1))))
          throw new JavaFehler("NumberFormatException", `For input string: "${s}"${radix !== 10 ? ` under radix ${radix}` : ""}`, e);
        const w = mk(v);
        return this.bibErgebnis(e, w, () => `${c} wandelt den Text ${stringLiteral(s, 30)} in die Zahl ${this.zeige(w)} um.`, ziel);
      }
      case "toString":
      case "toBinaryString":
      case "toHexString":
      case "toOctalString": {
        const z = this.zahlArg(a0, e);
        const v = alsBig(z);
        let s: string;
        if (n === "toString") s = args.length > 1 ? v.toString(this.intArg(args[1], e)) : v.toString();
        else {
          const u = BigInt.asUintN(lang ? 64 : 32, v);
          s = u.toString(n === "toBinaryString" ? 2 : n === "toHexString" ? 16 : 8);
        }
        return this.bibErgebnis(e, this.neuerString(s), () => `${c} liefert den Text ${stringLiteral(s, 40)}.`, ziel);
      }
      case "compare": {
        const a = alsBig(this.zahlArg(a0, e));
        const b = alsBig(this.zahlArg(args[1], e));
        const w = I(a < b ? -1 : a > b ? 1 : 0);
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)} (negativ: kleiner, 0: gleich, positiv: größer).`, ziel);
      }
      case "max":
      case "min":
      case "sum":
      case "signum":
      case "bitCount": {
        const a = alsBig(this.zahlArg(a0, e));
        const b = args.length > 1 ? alsBig(this.zahlArg(args[1], e)) : N0;
        let v: bigint;
        if (n === "max") v = a > b ? a : b;
        else if (n === "min") v = a < b ? a : b;
        else if (n === "sum") v = a + b;
        else if (n === "signum") v = a > N0 ? N1 : a < N0 ? -N1 : N0;
        else v = BigInt(BigInt.asUintN(lang ? 64 : 32, a).toString(2).replace(/0/g, "").length);
        const w = n === "signum" || n === "bitCount" ? I(Number(v)) : mk(v);
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
    }
    throw new NichtUnterstuetzt(`${bt(k + "." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private doubleKlasse(k: string, n: string, args: JW[], e: AusdruckVon<"aufruf">, ziel: boolean, c: string): JW | null {
    const a0 = args[0];
    const fl = k === "Float";
    switch (n) {
      case "parseDouble":
      case "parseFloat":
      case "valueOf": {
        if (n === "valueOf" && istZahl(a0)) {
          const w = wandle(a0, fl ? "float" : "double");
          return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
        }
        if (a0.t === "ref" && !a0.o) throw new JavaFehler("NullPointerException", null, e);
        const s = this.strArg(a0, e);
        const t = s.trim();
        if (!t) throw new JavaFehler("NumberFormatException", "empty String", e);
        const m = /^[+-]?(NaN|Infinity|((\d+\.?\d*|\.\d+)([eE][+-]?\d+)?)[fFdD]?)$/.exec(t);
        if (!m) throw new JavaFehler("NumberFormatException", `For input string: "${s}"`, e);
        const x = Number(t.replace(/[fFdD]$/, ""));
        const w = fl ? F(x) : D(x);
        return this.bibErgebnis(e, w, () => `${c} wandelt den Text ${stringLiteral(s, 30)} in die Kommazahl ${this.zeige(w)} um.`, ziel);
      }
      case "toString": {
        const s = this.textVon(fl ? wandle(this.zahlArg(a0, e), "float") : wandle(this.zahlArg(a0, e), "double"));
        return this.bibErgebnis(e, this.neuerString(s), () => `${c} liefert den Text ${stringLiteral(s)}.`, ziel);
      }
      case "isNaN": {
        const w = B(Number.isNaN(alsZahl(this.zahlArg(a0, e))));
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
      case "isInfinite": {
        const x = alsZahl(this.zahlArg(a0, e));
        const w = B(x === Infinity || x === -Infinity);
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
      case "compare": {
        const a = alsZahl(this.zahlArg(a0, e));
        const b = alsZahl(this.zahlArg(args[1], e));
        const w = I(doubleVergleich(a, b));
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
      case "max":
      case "min":
      case "sum": {
        const a = alsZahl(this.zahlArg(a0, e));
        const b = alsZahl(this.zahlArg(args[1], e));
        const w = D(n === "max" ? Math.max(a, b) : n === "min" ? Math.min(a, b) : a + b);
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
    }
    throw new NichtUnterstuetzt(`${bt(k + "." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private zeichenKlasse(n: string, args: JW[], e: AusdruckVon<"aufruf">, ziel: boolean, c: string): JW | null {
    const a0 = args[0];
    if (!a0 || (a0.t !== "char" && a0.t !== "int")) {
      if (n === "toString" || n === "valueOf") {
        /* unten */
      } else throw new NichtUnterstuetzt(`${bt("Character." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
    }
    const code = a0 && (a0.t === "char" || a0.t === "int") ? a0.v : 0;
    const ch = String.fromCharCode(code);
    const z = this.zeige(a0);
    const ja = (b: boolean, was: () => string) => this.bibErgebnis(e, B(b), () => `${c}: ${z} ist ${b ? "" : "k"}${was()}, also ${wahrText(b)}.`, ziel);
    switch (n) {
      case "isDigit":
        return ja(/\p{Nd}/u.test(ch), () => "eine Ziffer");
      case "isLetter":
        return ja(/\p{L}/u.test(ch), () => "ein Buchstabe");
      case "isLetterOrDigit":
        return ja(/[\p{L}\p{Nd}]/u.test(ch), () => "ein Buchstabe oder eine Ziffer");
      case "isAlphabetic":
        return ja(/\p{Alphabetic}/u.test(ch), () => "ein Buchstabe");
      case "isUpperCase":
        return ja(/\p{Lu}/u.test(ch), () => "ein Großbuchstabe");
      case "isLowerCase":
        return ja(/\p{Ll}/u.test(ch), () => "ein Kleinbuchstabe");
      case "isWhitespace":
        return ja(istJavaLeerraum(code), () => "Leerraum (Leerzeichen, Tabulator, Zeilenumbruch)");
      case "isSpaceChar":
        return ja(/\p{Z}/u.test(ch), () => "ein Leerzeichen");
      case "toUpperCase":
      case "toLowerCase": {
        const u = n === "toUpperCase" ? ch.toUpperCase() : ch.toLowerCase();
        const neu = u.length === 1 ? u.charCodeAt(0) : code;
        const w = a0.t === "char" ? C(neu) : I(neu);
        return this.bibErgebnis(e, w, () => `${c} liefert ${n === "toUpperCase" ? "den Großbuchstaben" : "den Kleinbuchstaben"}: ${this.zeige(w)}.`, ziel);
      }
      case "getNumericValue": {
        let v = -1;
        if (/\p{Nd}/u.test(ch)) v = parseInt(ch, 10);
        if (Number.isNaN(v)) v = -1;
        if (/[a-zA-Z]/.test(ch)) v = ch.toLowerCase().charCodeAt(0) - 87;
        if (code >= 0xff21 && code <= 0xff3a) v = code - 0xff21 + 10;
        if (code >= 0xff41 && code <= 0xff5a) v = code - 0xff41 + 10;
        const w = I(v);
        return this.bibErgebnis(e, w, () => `${c} liefert den Zahlenwert des Zeichens: ${v}.`, ziel);
      }
      case "digit": {
        const radix = this.intArg(args[1], e);
        let v = parseInt(ch, 36);
        if (Number.isNaN(v) || v >= radix) v = -1;
        return this.bibErgebnis(e, I(v), () => `${c} liefert ${v}.`, ziel);
      }
      case "forDigit": {
        const d = this.intArg(a0, e);
        const radix = this.intArg(args[1], e);
        const w = C(d >= 0 && d < radix ? d.toString(radix).charCodeAt(0) : 0);
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
      case "toString":
      case "valueOf": {
        if (n === "valueOf") return this.bibErgebnis(e, a0, () => `${c} liefert ${this.zeige(a0)}.`, ziel);
        const s = String.fromCharCode((a0 as { v: number }).v);
        return this.bibErgebnis(e, this.neuerString(s), () => `${c} macht aus dem Zeichen den Text ${stringLiteral(s)}.`, ziel);
      }
      case "compare": {
        const w = I(code - this.intArg(args[1], e));
        return this.bibErgebnis(e, w, () => `${c} liefert ${this.zeige(w)}.`, ziel);
      }
    }
    throw new NichtUnterstuetzt(`${bt("Character." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private arraysText(w: JW, tief: boolean): string {
    if (w.t !== "ref" || !w.o) return "null";
    if (w.o.k !== "arr") return this.textVon(w);
    return (
      "[" +
      w.o.w
        .map((x) => {
          if (x.t === "ref" && x.o && x.o.k === "arr") {
            if (!tief) throw new NichtUnterstuetzt("`Arrays.toString` bei einem 2D-Array zeigt Speicheradressen wie `[I@1b6d3586`; nimm `Arrays.deepToString`.");
            return this.arraysText(x, true);
          }
          return this.textVon(x);
        })
        .join(", ") +
      "]"
    );
  }

  private arraysKlasse(n: string, args: JW[], e: AusdruckVon<"aufruf">, ziel: boolean, c: string): JW | null {
    const a0 = args[0];
    switch (n) {
      case "toString":
      case "deepToString": {
        if (a0.t !== "ref") throw this.compiler("`Arrays.toString` braucht ein Array.", e);
        const s = this.arraysText(a0, n === "deepToString");
        return this.bibErgebnis(e, this.neuerString(s), () => `${c} macht aus dem Array den Text ${stringLiteral(s, 50)}.`, ziel);
      }
      case "fill": {
        const arr = this.arrArg(a0, e);
        let von = 0;
        let bis = arr.w.length;
        let v = args[1];
        if (args.length === 4) {
          von = this.intArg(args[1], e);
          bis = this.intArg(args[2], e);
          v = args[3];
          this.bereichPruefen(von, bis, arr.w.length, e);
        }
        const w = this.zuweisungsKonversion(v, arr.elem, e.args[args.length - 1], e);
        for (let i = von; i < bis; i++) {
          arr.w[i] = w;
          arr.ticks[i] = ++this.tick;
        }
        arr.tick = this.tick;
        arr.version++;
        return this.bibErgebnis(e, null, () => `${c} schreibt ${this.zeige(w)} in ${von === 0 && bis === arr.w.length ? "alle Plätze" : `die Plätze ${von} bis ${bis - 1}`} des Arrays.`, ziel);
      }
      case "sort": {
        const arr = this.arrArg(a0, e);
        let von = 0;
        let bis = arr.w.length;
        if (args.length === 3) {
          von = this.intArg(args[1], e);
          bis = this.intArg(args[2], e);
          this.bereichPruefen(von, bis, arr.w.length, e);
        }
        if (args.length === 2 || args.length === 4) throw new NichtUnterstuetzt("`Arrays.sort` mit eigenem Vergleich (Comparator) wird nicht unterstützt.", e.von);
        const teil = arr.w.slice(von, bis);
        if (arr.elem === "String") teil.sort((x, y) => javaVergleich((x as { o: StrObj }).o.s, (y as { o: StrObj }).o.s));
        else if (PRIMITIV.has(arr.elem) && arr.elem !== "boolean")
          teil.sort((x, y) => (x.t === "long" && y.t === "long" ? (x.v < y.v ? -1 : x.v > y.v ? 1 : 0) : doubleVergleich(alsZahl(x as ZahlJW), alsZahl(y as ZahlJW))));
        else throw new NichtUnterstuetzt(`\`Arrays.sort\` für \`${arr.elem}[]\` wird nicht unterstützt.`, e.von);
        teil.forEach((x, i) => {
          if (arr.w[von + i] !== x) arr.ticks[von + i] = ++this.tick;
          arr.w[von + i] = x;
        });
        arr.tick = ++this.tick;
        arr.version++;
        return this.bibErgebnis(e, null, () => `${c} sortiert das Array aufsteigend (es wird verändert, nicht kopiert).`, ziel);
      }
      case "equals": {
        const [x, y] = args;
        let gleich: boolean;
        if (x.t !== "ref" || y.t !== "ref") throw this.compiler("`Arrays.equals` braucht zwei Arrays.", e);
        if (x.o === y.o) gleich = true;
        else if (!x.o || !y.o || x.o.k !== "arr" || y.o.k !== "arr") gleich = false;
        else {
          const ya = y.o;
          gleich = x.o.w.length === ya.w.length && x.o.w.every((v, i) => elementGleich(v, ya.w[i]));
        }
        return this.bibErgebnis(e, B(gleich), () => `${c} vergleicht die Arrays Element für Element: ${wahrText(gleich)}.`, ziel);
      }
      case "copyOf":
      case "copyOfRange": {
        const arr = this.arrArg(a0, e);
        let von = 0;
        let bis: number;
        if (n === "copyOf") {
          bis = this.intArg(args[1], e);
          if (bis < 0) throw new JavaFehler("NegativeArraySizeException", String(bis), e);
        } else {
          von = this.intArg(args[1], e);
          bis = this.intArg(args[2], e);
          if (von > bis) throw new JavaFehler("IllegalArgumentException", `${von} > ${bis}`, e);
          if (von < 0 || von > arr.w.length) throw new JavaFehler("ArrayIndexOutOfBoundsException", `Array index out of range: ${von}`, e);
        }
        const werte: JW[] = [];
        for (let i = von; i < bis; i++) werte.push(i < arr.w.length ? arr.w[i] : this.standardWert(arr.elem));
        const w = this.neuesArray(arr.elem, werte);
        return this.bibErgebnis(e, w, () => `${c} legt ein neues Array mit ${werte.length} Elementen an (eine Kopie): ${this.zeige(w)}.`, ziel);
      }
      case "binarySearch": {
        const arr = this.arrArg(a0, e);
        const key = args[1];
        let lo = 0;
        let hi = arr.w.length - 1;
        let erg = -1;
        const vgl = (x: JW) => (arr.elem === "String" ? javaVergleich((x as { o: StrObj }).o.s, this.strArg(key, e)) : doubleVergleich(alsZahl(x as ZahlJW), alsZahl(key as ZahlJW)));
        for (;;) {
          if (lo > hi) {
            erg = -(lo + 1);
            break;
          }
          const mid = (lo + hi) >>> 1;
          const r = vgl(arr.w[mid]);
          if (r < 0) lo = mid + 1;
          else if (r > 0) hi = mid - 1;
          else {
            erg = mid;
            break;
          }
        }
        return this.bibErgebnis(e, I(erg), () => `${c} sucht im sortierten Array: ${erg}.`, ziel);
      }
    }
    throw new NichtUnterstuetzt(`${bt("Arrays." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private bereichPruefen(von: number, bis: number, n: number, e: Stelle) {
    if (von > bis) throw new JavaFehler("IllegalArgumentException", `fromIndex(${von}) > toIndex(${bis})`, e);
    if (von < 0) throw new JavaFehler("ArrayIndexOutOfBoundsException", `Array index out of range: ${von}`, e);
    if (bis > n) throw new JavaFehler("ArrayIndexOutOfBoundsException", `Array index out of range: ${bis}`, e);
  }

  private formatArg(w: JW): FormatArg {
    switch (w.t) {
      case "int":
        return { art: "int", wert: w.v, klasse: "java.lang.Integer" };
      case "short":
        return { art: "int", wert: w.v, klasse: "java.lang.Short" };
      case "byte":
        return { art: "int", wert: w.v, klasse: "java.lang.Byte" };
      case "long":
        return { art: "long", wert: w.v, klasse: "java.lang.Long" };
      case "double":
        return { art: "double", wert: w.v, klasse: "java.lang.Double" };
      case "float":
        return { art: "float", wert: w.v, klasse: "java.lang.Float" };
      case "char":
        return { art: "char", wert: w.v, klasse: "java.lang.Character" };
      case "boolean":
        return { art: "boolean", wert: w.v, klasse: "java.lang.Boolean" };
      case "klasse":
        return { art: "andere", wert: w.name, klasse: "java.lang.Class" };
    }
    if (!w.o) return { art: "null", wert: null, klasse: "null" };
    if (w.o.k === "str") return { art: "String", wert: w.o.s, klasse: "java.lang.String" };
    return { art: "andere", wert: this.textVon(w), klasse: "java.lang.Object" };
  }

  private formatiere(args: JW[], e: Stelle): string {
    if (!args.length) throw this.compiler("`format` braucht eine Vorlage.", e);
    const vorlage = this.strArg(args[0], e);
    const fa = args.slice(1).map((x) => this.formatArg(x));
    try {
      return javaFormat(vorlage, fa, (a) => (a.art === "double" ? doubleText(a.wert as number) : a.art === "float" ? floatText(a.wert as number) : a.art === "char" ? String.fromCharCode(a.wert as number) : a.art === "null" ? "null" : String(a.wert)));
    } catch (x) {
      if (x instanceof FormatFehler) throw new JavaFehler(x.name, x.message, e);
      throw x;
    }
  }

  private objektMethode(o: Obj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    switch (o.k) {
      case "str":
        return this.stringMethode(o, e, ziel);
      case "sb":
        return this.sbMethode(o, e, ziel);
      case "out":
        return this.druck(o, e);
      case "scanner":
        return this.scannerMethode(o, e, ziel);
      case "random":
        return this.randomMethode(o, e, ziel);
      case "cd":
        return this.cdMethode(o, e, ziel);
      case "color":
        return this.farbMethode(o, e, ziel);
      case "arr": {
        if (e.name === "clone" && e.args.length === 0) {
          const w = this.neuesArray(o.elem, o.w.slice());
          return this.bibErgebnis(e, w, () => `${bt(codeKurz(this.code(e)))} legt eine Kopie des Arrays an.`, ziel);
        }
        if (e.name === "length") throw this.compiler("Bei Arrays ist `length` ein Feld ohne Klammern: `a.length`.", e);
        if (e.name === "equals") {
          const x = this.wert(e.args[0]);
          const w = B(x.t === "ref" && x.o === o);
          return this.bibErgebnis(e, w, () => `${bt(codeKurz(this.code(e)))} vergleicht bei Arrays nur, ob es dasselbe Array ist: ${wahrText(x.t === "ref" && x.o === o)}.`, ziel);
        }
        break;
      }
      case "exc":
        if (e.name === "getMessage") return this.bibErgebnis(e, o.meldung === null ? NULL("String") : this.neuerString(o.meldung), () => "Die Meldung der Ausnahme.", ziel);
        break;
    }
    throw new NichtUnterstuetzt(`${bt(typVon({ t: "ref", o, st: "" }) + "." + e.name + "(…)")} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private stringMethode(o: StrObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const args = e.args.map((a) => this.wert(a));
    const s = o.s;
    const n = e.name;
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    const self: JW = { t: "ref", o, st: "String" };
    const neu = (t: string): JW => (t === s ? self : this.neuerString(t));
    const nimm = (w: JW, erkl: () => string) => this.bibErgebnis(e, w, erkl, ziel);
    const ch = (w: JW): string => (w.t === "char" || w.t === "int" ? String.fromCharCode(w.v) : this.strArg(w, e));
    switch (`${n}/${args.length}`) {
      case "length/0":
        return nimm(I(s.length), () => `${c} ist die Anzahl der Zeichen: ${s.length}.`);
      case "isEmpty/0":
        return nimm(B(s.length === 0), () => `${c}: Der Text ist ${s.length === 0 ? "" : "nicht "}leer, also ${wahrText(s.length === 0)}.`);
      case "isBlank/0": {
        const b = [...s].every((x) => istJavaLeerraum(x.charCodeAt(0)));
        return nimm(B(b), () => `${c} liefert ${wahrText(b)}.`);
      }
      case "charAt/1": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i >= s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `Index ${i} out of bounds for length ${s.length}`, e);
        const w = C(s.charCodeAt(i));
        return nimm(w, () => `${c} liefert das Zeichen an Position ${i} (gezählt wird ab 0): ${this.zeige(w)}.`);
      }
      case "substring/1":
      case "substring/2": {
        const b = this.intArg(args[0], e);
        const en = args.length > 1 ? this.intArg(args[1], e) : s.length;
        if (b < 0 || en > s.length || b > en) throw new JavaFehler("StringIndexOutOfBoundsException", `Range [${b}, ${en}) out of bounds for length ${s.length}`, e);
        const t = s.slice(b, en);
        const w = b === 0 && en === s.length ? self : t.length === 0 ? this.internString("") : this.neuerString(t);
        return nimm(
          w,
          () => args.length > 1
            ? `${c} liefert die Zeichen von Position ${b} bis vor Position ${en}: ${stringLiteral(t, 40)}.`
            : `${c} liefert alles ab Position ${b}: ${stringLiteral(t, 40)}.`,
        );
      }
      case "indexOf/1":
      case "indexOf/2":
      case "lastIndexOf/1":
      case "lastIndexOf/2": {
        const t = ch(args[0]);
        let r: number;
        if (n === "indexOf") r = args.length > 1 ? s.indexOf(t, Math.max(0, this.intArg(args[1], e))) : s.indexOf(t);
        else {
          const ab = args.length > 1 ? this.intArg(args[1], e) : s.length;
          r = ab < 0 ? -1 : s.lastIndexOf(t, ab);
        }
        return nimm(I(r), () => r < 0 ? `${c}: ${stringLiteral(t)} kommt ${args.length > 1 ? "dort " : ""}nicht vor, also -1.` : `${c}: ${stringLiteral(t)} steht ${n === "indexOf" ? "zuerst" : "zuletzt"} an Position ${r}.`);
      }
      case "equals/1": {
        const x = args[0];
        const g = x.t === "ref" && !!x.o && x.o.k === "str" && x.o.s === s;
        return nimm(B(g), () => `${c} vergleicht den Inhalt Zeichen für Zeichen: ${wahrText(g)}.`);
      }
      case "equalsIgnoreCase/1": {
        const x = args[0];
        const g = x.t === "ref" && !!x.o && x.o.k === "str" && x.o.s.length === s.length && [...s].every((z, i) => gleichOhneCase(z, (x.o as StrObj).s[i]));
        return nimm(B(g), () => `${c} vergleicht den Inhalt ohne Rücksicht auf Groß- und Kleinschreibung: ${wahrText(g)}.`);
      }
      case "compareTo/1":
      case "compareToIgnoreCase/1": {
        const t = this.strArg(args[0], e);
        const r = n === "compareTo" ? javaVergleich(s, t) : javaVergleich(s.split("").map(faltung).join(""), t.split("").map(faltung).join(""));
        return nimm(I(r), () => `${c} liefert ${r}: ${r < 0 ? "negativ, der Text kommt im Alphabet (nach Zeichencodes) vorher" : r > 0 ? "positiv, der Text kommt im Alphabet (nach Zeichencodes) nachher" : "0, die Texte sind gleich"}.`);
      }
      case "contains/1": {
        const t = this.strArg(args[0], e);
        return nimm(B(s.includes(t)), () => `${c}: ${stringLiteral(t)} kommt ${s.includes(t) ? "" : "nicht "}vor, also ${wahrText(s.includes(t))}.`);
      }
      case "startsWith/1":
      case "startsWith/2":
      case "endsWith/1": {
        const t = this.strArg(args[0], e);
        const b = n === "endsWith" ? s.endsWith(t) : args.length > 1 ? s.startsWith(t, this.intArg(args[1], e)) && this.intArg(args[1], e) >= 0 : s.startsWith(t);
        return nimm(B(b), () => `${c} liefert ${wahrText(b)}.`);
      }
      case "toUpperCase/0":
      case "toLowerCase/0": {
        const t = n === "toUpperCase/0".split("/")[0] ? s.toUpperCase() : s.toLowerCase();
        return nimm(neu(t), () => `${c} liefert den Text in ${n === "toUpperCase" ? "Großbuchstaben" : "Kleinbuchstaben"}: ${stringLiteral(t, 40)}.`);
      }
      case "trim/0":
      case "strip/0": {
        const t = n === "trim" ? s.replace(/^[\u0000- ]+|[\u0000- ]+$/g, "") : stripJava(s);
        return nimm(neu(t), () => `${c} entfernt Leerraum am Anfang und am Ende: ${stringLiteral(t, 40)}.`);
      }
      case "concat/1": {
        const t = this.strArg(args[0], e);
        return nimm(t.length === 0 ? self : this.neuerString(s + t), () => `${c} hängt ${stringLiteral(t)} an: ${stringLiteral(s + t, 40)}.`);
      }
      case "repeat/1": {
        const k = this.intArg(args[0], e);
        if (k < 0) throw new JavaFehler("IllegalArgumentException", `count is negative: ${k}`, e);
        const t = s.repeat(k);
        return nimm(k === 1 ? self : t.length === 0 ? this.internString("") : this.neuerString(t), () => `${c} wiederholt den Text ${k}-mal: ${stringLiteral(t, 40)}.`);
      }
      case "replace/2": {
        const a = ch(args[0]);
        const b = ch(args[1]);
        const t = s.split(a).join(b);
        const r = a === "" ? s.replace(/(?:)/g, () => b) : t;
        const istZeichen = args[0].t === "char";
        return nimm(istZeichen && !s.includes(a) ? self : this.neuerString(r), () => `${c} ersetzt jedes ${stringLiteral(a)} durch ${stringLiteral(b)}: ${stringLiteral(r, 40)}.`);
      }
      case "replaceAll/2":
      case "replaceFirst/2": {
        const re = this.regex(this.strArg(args[0], e), n === "replaceAll" ? "g" : "", e);
        const r = s.replace(re, this.strArg(args[1], e).replace(/\\\$/g, "$$$$"));
        return nimm(this.neuerString(r), () => `${c} liefert ${stringLiteral(r, 40)}.`);
      }
      case "matches/1": {
        const re = this.regex("^(?:" + this.strArg(args[0], e) + ")$", "", e);
        const b = re.test(s);
        return nimm(B(b), () => `${c} liefert ${wahrText(b)}.`);
      }
      case "split/1":
      case "split/2": {
        const teile = this.split(s, this.strArg(args[0], e), args.length > 1 ? this.intArg(args[1], e) : 0, e);
        const w = this.neuesArray("String", teile.map((t) => this.neuerString(t)));
        return nimm(w, () => `${c} zerlegt den Text in ${teile.length} Teile: ${this.zeige(w)}.`);
      }
      case "toCharArray/0": {
        const w = this.neuesArray("char", s.split("").map((z) => C(z.charCodeAt(0))));
        return nimm(w, () => `${c} legt ein neues \`char\`-Array mit den ${s.length} Zeichen an.`);
      }
      case "toString/0":
      case "intern/0": {
        const w = n === "intern" ? this.internString(s) : self;
        return nimm(w, () => `${c} liefert ${n === "intern" ? "die gemeinsame (internierte) Fassung des Strings" : "denselben String"}.`);
      }
      case "hashCode/0": {
        let h = 0;
        for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
        return nimm(I(h), () => `${c} liefert ${h}.`);
      }
      case "chars/0":
        throw new NichtUnterstuetzt("Streams (`chars()`) zeigt die Ablaufansicht nicht.", e.von);
      case "formatted/1":
      case "formatted/2":
      case "formatted/3":
      case "formatted/4": {
        const r = this.formatiere([self, ...args], e);
        return nimm(this.neuerString(r), () => `${c} liefert ${stringLiteral(r, 40)}.`);
      }
      case "codePointAt/1": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i >= s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `Index ${i} out of bounds for length ${s.length}`, e);
        return nimm(I(s.codePointAt(i)!), () => `${c} liefert den Zeichencode ${s.codePointAt(i)}.`);
      }
    }
    throw new NichtUnterstuetzt(`${bt("String." + n + "(…)")} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private regex(muster: string, flags: string, e: Stelle): RegExp {
    try {
      return new RegExp(muster, flags);
    } catch {
      throw new NichtUnterstuetzt(`Der reguläre Ausdruck ${stringLiteral(muster)} wird nicht unterstützt.`, e.von);
    }
  }

  /** String.split mit Java-Semantik (leere Teile am Ende fallen bei limit 0 weg) */
  private split(s: string, muster: string, limit: number, e: Stelle): string[] {
    const re = this.regex(muster, "g", e);
    const teile: string[] = [];
    let index = 0;
    let pos = 0;
    let gefunden = false;
    while (pos <= s.length) {
      re.lastIndex = pos;
      const m = re.exec(s);
      if (!m) break;
      const start = m.index;
      const ende = start + m[0].length;
      if (limit <= 0 || teile.length < limit - 1) {
        if (!(index === 0 && start === 0 && start === ende)) {
          teile.push(s.slice(index, start));
          index = ende;
          gefunden = true;
        }
      } else if (teile.length === limit - 1) break;
      pos = ende === start ? ende + 1 : ende;
    }
    if (!gefunden) return [s];
    teile.push(s.slice(index));
    if (limit === 0) while (teile.length && teile[teile.length - 1] === "") teile.pop();
    return teile;
  }

  private sbMethode(o: SbObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const args = e.args.map((a) => this.wert(a));
    const n = e.name;
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    const self: JW = { t: "ref", o, st: "StringBuilder" };
    const aendern = (s: string) => {
      o.s = s;
      o.tick = ++this.tick;
    };
    const pruef = (i: number, max: number) => {
      if (i < 0 || i >= max) throw new JavaFehler("StringIndexOutOfBoundsException", `index ${i},length ${o.s.length}`, e);
    };
    const text = (w: JW) => (w.t === "ref" && w.o && w.o.k === "arr" && w.o.elem === "char" ? w.o.w.map((z) => String.fromCharCode((z as { v: number }).v)).join("") : this.textVon(w));
    switch (`${n}/${args.length}`) {
      case "append/1": {
        const t = text(args[0]);
        aendern(o.s + t);
        return this.bibErgebnis(e, self, () => `${c} hängt ${stringLiteral(t, 30)} an; der Inhalt ist jetzt ${stringLiteral(o.s, 40)}.`, ziel);
      }
      case "insert/2": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i > o.s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `offset ${i}, length ${o.s.length}`, e);
        const t = text(args[1]);
        aendern(o.s.slice(0, i) + t + o.s.slice(i));
        return this.bibErgebnis(e, self, () => `${c} fügt ${stringLiteral(t, 30)} an Position ${i} ein: ${stringLiteral(o.s, 40)}.`, ziel);
      }
      case "reverse/0":
        aendern(o.s.split("").reverse().join(""));
        return this.bibErgebnis(e, self, () => `${c} dreht den Inhalt um: ${stringLiteral(o.s, 40)}.`, ziel);
      case "toString/0":
        return this.bibErgebnis(e, this.neuerString(o.s), () => `${c} liefert den Inhalt als neuen String: ${stringLiteral(o.s, 40)}.`, ziel);
      case "length/0":
        return this.bibErgebnis(e, I(o.s.length), () => `${c} ist die Anzahl der Zeichen: ${o.s.length}.`, ziel);
      case "isEmpty/0":
        return this.bibErgebnis(e, B(o.s.length === 0), () => `${c} liefert ${wahrText(o.s.length === 0)}.`, ziel);
      case "charAt/1": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i >= o.s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `Index ${i} out of bounds for length ${o.s.length}`, e);
        const w = C(o.s.charCodeAt(i));
        return this.bibErgebnis(e, w, () => `${c} liefert das Zeichen an Position ${i}: ${this.zeige(w)}.`, ziel);
      }
      case "deleteCharAt/1": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i >= o.s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `Index ${i} out of bounds for length ${o.s.length}`, e);
        aendern(o.s.slice(0, i) + o.s.slice(i + 1));
        return this.bibErgebnis(e, self, () => `${c} löscht das Zeichen an Position ${i}: ${stringLiteral(o.s, 40)}.`, ziel);
      }
      case "setCharAt/2": {
        const i = this.intArg(args[0], e);
        if (i < 0 || i >= o.s.length) throw new JavaFehler("StringIndexOutOfBoundsException", `Index ${i} out of bounds for length ${o.s.length}`, e);
        aendern(o.s.slice(0, i) + String.fromCharCode(this.intArg(args[1], e)) + o.s.slice(i + 1));
        return this.bibErgebnis(e, null, () => `${c} setzt an Position ${i} ein neues Zeichen: ${stringLiteral(o.s, 40)}.`, ziel);
      }
      case "delete/2":
      case "replace/3": {
        const a = this.intArg(args[0], e);
        let b = this.intArg(args[1], e);
        if (b > o.s.length) b = o.s.length;
        if (a < 0 || a > b) pruef(-1, 0);
        aendern(o.s.slice(0, a) + (n === "replace" ? this.strArg(args[2], e) : "") + o.s.slice(b));
        return this.bibErgebnis(e, self, () => `${c}: Der Inhalt ist jetzt ${stringLiteral(o.s, 40)}.`, ziel);
      }
      case "indexOf/1": {
        const r = o.s.indexOf(this.strArg(args[0], e));
        return this.bibErgebnis(e, I(r), () => `${c} liefert ${r}.`, ziel);
      }
      case "setLength/1": {
        const k = this.intArg(args[0], e);
        aendern(k <= o.s.length ? o.s.slice(0, k) : o.s + "\u0000".repeat(k - o.s.length));
        return this.bibErgebnis(e, null, () => `${c}: Der Inhalt ist jetzt ${stringLiteral(o.s, 40)}.`, ziel);
      }
    }
    throw new NichtUnterstuetzt(`${bt("StringBuilder." + n + "(…)")} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private schreibeAusgabe(t: string) {
    this.ausgabe += t;
    if (this.ausgabe.length > this.opt.maxAusgabe) {
      this.ausgabe = this.ausgabe.slice(0, this.opt.maxAusgabe);
      throw new Abbruch("ausgabe");
    }
  }

  private ausgabeBeschreibung(t: string): string {
    if (t === "") return "nichts";
    if (t.trim() === "") return t.length === 1 ? (t === " " ? "ein Leerzeichen" : "einen Zeilenumbruch") : `${t.length} Leerzeichen`;
    const k = t.length > 60 ? t.slice(0, 57) + "…" : t;
    return k.includes("`") || k.includes("\n") ? stringLiteral(t, 60) : bt(k);
  }

  private druck(o: OutObj, e: AusdruckVon<"aufruf">): JW | null {
    const n = e.name;
    const args = e.args.map((a) => this.wert(a));
    const wer = o.err ? "System.err" : "System.out";
    const text = (w: JW) => (w.t === "ref" && w.o && w.o.k === "arr" && w.o.elem === "char" ? w.o.w.map((z) => String.fromCharCode((z as { v: number }).v)).join("") : this.textVon(w));
    let t: string;
    let erkl: () => string;
    if ((n === "println" || n === "print") && args.length <= 1) {
      if (n === "print" && args.length === 0) throw this.compiler("`print()` braucht einen Wert; für einen Zeilenumbruch `println()`.", e);
      const inhalt = args.length ? text(args[0]) : "";
      t = n === "println" ? inhalt + "\n" : inhalt;
      if (n === "println")
        erkl = () => args.length
          ? `${bt(wer + ".println")} gibt ${this.ausgabeBeschreibung(inhalt)} aus und beendet danach die Zeile (die nächste Ausgabe beginnt in einer neuen Zeile).`
          : `${bt(wer + ".println()")} beendet die Zeile: Die nächste Ausgabe beginnt in einer neuen Zeile.`;
      else erkl = () => `${bt(wer + ".print")} gibt ${this.ausgabeBeschreibung(inhalt)} aus, ohne neue Zeile.`;
    } else if (n === "printf" || n === "format") {
      t = this.formatiere(args, e);
      erkl = () => `${bt(wer + "." + n)} setzt die Werte in die Vorlage ein und gibt ${this.ausgabeBeschreibung(t.replace(/\n$/, ""))} aus${t.endsWith("\n") ? " (mit `%n` am Ende: neue Zeile)" : ""}.`;
    } else if (n === "flush" || n === "close") {
      this.anwInfo = () => `${bt(wer + "." + n + "()")} hat hier keine sichtbare Wirkung.`;
      return null;
    } else if (n === "write") {
      t = String.fromCharCode(this.intArg(args[0], e) & 0xff);
      erkl = () => `${bt(wer + ".write")} gibt ein Byte aus.`;
    } else throw new NichtUnterstuetzt(`${bt(wer + "." + n)} wird nicht unterstützt.`, e.von);
    if (o.err) {
      const vorher = erkl;
      erkl = () => `${vorher()} (\`System.err\` ist der Fehlerkanal; er erscheint nicht in der normalen Ausgabe.)`;
    }
    else this.schreibeAusgabe(t);
    this.anwInfo = erkl;
    if (n === "printf" || n === "format") return { t: "ref", o, st: "PrintStream" };
    return null;
  }

  // ---------------- Scanner

  private scannerMethode(o: ScannerObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const q = o.quelle;
    const n = e.name;
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    const token = (): { start: number; ende: number } | null => {
      let i = q.pos;
      while (i < q.text.length && istJavaLeerraum(q.text.charCodeAt(i))) i++;
      if (i >= q.text.length) return null;
      let j = i;
      while (j < q.text.length && !istJavaLeerraum(q.text.charCodeAt(j))) j++;
      return { start: i, ende: j };
    };
    const gelesen = () => {
      o.tick = ++this.tick;
    };
    const ganz = /^[+-]?(\d{1,3}(,\d{3})+|\d+)$/;
    const komma = /^[+-]?(((\d{1,3}(,\d{3})+|\d+)(\.\d*)?|\.\d+)([eE][+-]?\d+)?|NaN|Infinity)$/;
    switch (n) {
      case "next":
      case "nextInt":
      case "nextLong":
      case "nextDouble":
      case "nextBoolean":
      case "nextShort":
      case "nextByte":
      case "nextFloat": {
        if (e.args.length) throw new NichtUnterstuetzt(`${bt("Scanner." + n)} mit Argument wird nicht unterstützt.`, e.von);
        const t = token();
        if (!t) throw new JavaFehler("NoSuchElementException", null, e);
        const tok = q.text.slice(t.start, t.ende);
        let w: JW;
        if (n === "next") w = this.neuerString(tok);
        else if (n === "nextBoolean") {
          if (!/^(true|false)$/i.test(tok)) {
            q.pos = t.start;
            throw new JavaFehler("InputMismatchException", null, e);
          }
          w = B(tok.toLowerCase() === "true");
        } else if (n === "nextDouble" || n === "nextFloat") {
          if (!komma.test(tok)) {
            q.pos = t.start;
            throw new JavaFehler("InputMismatchException", null, e);
          }
          const x = Number(tok.replace(/,/g, ""));
          w = n === "nextFloat" ? F(x) : D(x);
        } else {
          if (!ganz.test(tok)) {
            q.pos = t.start;
            throw new JavaFehler("InputMismatchException", null, e);
          }
          const roh = tok.replace(/,/g, "");
          const v = BigInt(roh.replace(/^\+/, ""));
          const grenze = n === "nextLong" ? BigInt("9223372036854775807") : n === "nextShort" ? BigInt(32767) : n === "nextByte" ? BigInt(127) : BigInt(2147483647);
          if (v > grenze || v < -grenze - N1) {
            q.pos = t.start;
            throw new JavaFehler("InputMismatchException", `For input string: "${roh}"`, e);
          }
          w = n === "nextLong" ? L(v) : n === "nextShort" ? { t: "short", v: Number(v) } : n === "nextByte" ? { t: "byte", v: Number(v) } : I(Number(v));
        }
        q.pos = t.ende;
        gelesen();
        const was = n === "next" ? "das nächste Wort" : n === "nextInt" || n === "nextLong" ? "die nächste ganze Zahl" : n === "nextBoolean" ? "den nächsten Wahrheitswert" : "die nächste Kommazahl";
        return this.bibErgebnis(e, w, () => `${c} liest ${was} aus der Eingabe: ${this.zeige(w)}. Leerzeichen und Zeilenumbrüche davor werden übersprungen.`, ziel);
      }
      case "nextLine": {
        if (q.pos >= q.text.length) throw new JavaFehler("NoSuchElementException", "No line found", e);
        const rest = q.text.slice(q.pos);
        const m = /\r\n|[\n\r\u2028\u2029\u0085]/.exec(rest);
        const zeile = m ? rest.slice(0, m.index) : rest;
        q.pos += m ? m.index + m[0].length : rest.length;
        gelesen();
        const w = this.neuerString(zeile);
        return this.bibErgebnis(
          e,
          w,
          () => zeile === ""
            ? `${c} liest den Rest der aktuellen Zeile. Der ist hier leer: ${stringLiteral("")}. (Typisch nach \`nextInt()\`: Der Zeilenumbruch steht noch in der Eingabe.)`
            : `${c} liest den Rest der Zeile: ${stringLiteral(zeile, 40)}.`,
          ziel,
        );
      }
      case "hasNext":
      case "hasNextInt":
      case "hasNextLong":
      case "hasNextDouble":
      case "hasNextLine":
      case "hasNextBoolean": {
        let b: boolean;
        if (n === "hasNextLine") b = q.pos < q.text.length;
        else {
          const t = token();
          const tok = t ? q.text.slice(t.start, t.ende) : null;
          if (tok === null) b = false;
          else if (n === "hasNext") b = true;
          else if (n === "hasNextDouble") b = komma.test(tok);
          else if (n === "hasNextBoolean") b = /^(true|false)$/i.test(tok);
          else {
            b = ganz.test(tok);
            if (b) {
              const v = BigInt(tok.replace(/,/g, "").replace(/^\+/, ""));
              const g = n === "hasNextLong" ? BigInt("9223372036854775807") : BigInt(2147483647);
              b = v <= g && v >= -g - N1;
            }
          }
        }
        return this.bibErgebnis(e, B(b), () => `${c} schaut nach, ob noch passende Eingabe kommt (ohne sie zu lesen): ${wahrText(b)}.`, ziel);
      }
      case "close":
        return this.bibErgebnis(e, null, () => `${c} schließt den Scanner.`, ziel);
    }
    throw new NichtUnterstuetzt(`${bt("Scanner." + n)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  // ---------------- Random (java.util.Random, exakt nachgebaut)

  private randomNaechstes(o: RandomObj, bits: number): number {
    o.seed = (o.seed * BigInt("0x5DEECE66D") + BigInt(11)) & ((N1 << BigInt(48)) - N1);
    o.tick = ++this.tick;
    return Number(BigInt.asIntN(32, o.seed >> BigInt(48 - bits)));
  }

  private randomMethode(o: RandomObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const args = e.args.map((a) => this.wert(a));
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    let w: JW;
    switch (`${e.name}/${args.length}`) {
      case "nextInt/0":
        w = I(this.randomNaechstes(o, 32));
        break;
      case "nextInt/1": {
        const bound = this.intArg(args[0], e);
        if (bound <= 0) throw new JavaFehler("IllegalArgumentException", "bound must be positive", e);
        let r = this.randomNaechstes(o, 31);
        const m = bound - 1;
        if ((bound & m) === 0) r = Number((BigInt(bound) * BigInt(r)) >> BigInt(31));
        else {
          for (let u = r; ((u - (r = u % bound) + m) | 0) < 0; u = this.randomNaechstes(o, 31));
        }
        w = I(r);
        break;
      }
      case "nextInt/2": {
        const origin = this.intArg(args[0], e);
        const bound = this.intArg(args[1], e);
        if (origin >= bound) throw new JavaFehler("IllegalArgumentException", "bound must be greater than origin", e);
        let r = this.randomNaechstes(o, 32);
        const n = (bound - origin) | 0;
        const m = (n - 1) | 0;
        if ((n & m) === 0) r = ((r & m) + origin) | 0;
        else if (n > 0) {
          for (let u = r >>> 1; ((u + m - (r = u % n)) | 0) < 0; u = this.randomNaechstes(o, 32) >>> 1);
          r = (r + origin) | 0;
        } else {
          while (r < origin || r >= bound) r = this.randomNaechstes(o, 32);
        }
        w = I(r);
        break;
      }
      case "nextDouble/0": {
        const a = this.randomNaechstes(o, 26);
        const b = this.randomNaechstes(o, 27);
        w = D((a * 134217728 + b) / 9007199254740992);
        break;
      }
      case "nextBoolean/0":
        w = B(this.randomNaechstes(o, 1) !== 0);
        break;
      case "nextLong/0": {
        const a = BigInt(this.randomNaechstes(o, 32));
        const b = BigInt(this.randomNaechstes(o, 32));
        w = L((a << BigInt(32)) + b);
        break;
      }
      default:
        throw new NichtUnterstuetzt(`${bt("Random." + e.name)} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
    }
    return this.bibErgebnis(e, w, () => `${c} liefert die nächste Zufallszahl: ${this.zeige(w)}. (Mit festem Startwert ist die Folge immer gleich.)`, ziel);
  }

  // ---------------- Farben und CodeDraw (das Fake-CodeDraw der Plattform ist das Orakel)

  /** `import codedraw.*;` bzw. `import java.awt.Color;` muss da sein (Ausschnitte und Aufruf-Text bekommen `codedraw.*` dazu) */
  private pruefeImport(name: "CodeDraw" | "Palette" | "Color", stelle: Bereich) {
    const paket = name === "Color" ? "java.awt" : "codedraw";
    const imp = this.prog.importe;
    if (imp.includes(`${paket}.*`) || imp.includes(`${paket}.${name}`)) return;
    if (paket === "codedraw" && (this.prog.ausschnitt || this.oben?.anzeige === "Aufruf")) return;
    throw this.compiler(
      `${bt(name)} ist unbekannt: Dafür fehlt oben ${bt(name === "Color" ? "import java.awt.Color;" : "import codedraw.*;")}.`,
      { von: stelle.von, bis: stelle.bis, q: 0 },
    );
  }

  private neueFarbe(r: number, g: number, b: number, a: number, name?: string): ColorObj {
    return { k: "color", id: this.naechsteId++, r, g, b, a, ...(name ? { name } : {}) };
  }

  private farbeAusRgb(rgb: number): JW {
    const o = this.neueFarbe((rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255, 255);
    return { t: "ref", o, st: "Color" };
  }

  /** `new Color(r, g, b[, a])`: Werte ausserhalb 0 bis 255 melden Java-gleich eine IllegalArgumentException */
  private farbeAusTeilen(t: number[], e: Stelle): JW {
    const [r, g, b] = t;
    const a = t.length === 4 ? t[3] : 255;
    const schlecht = [
      ...(a < 0 || a > 255 ? [" Alpha"] : []),
      ...(r < 0 || r > 255 ? [" Red"] : []),
      ...(g < 0 || g > 255 ? [" Green"] : []),
      ...(b < 0 || b > 255 ? [" Blue"] : []),
    ].join("");
    if (schlecht) throw new JavaFehler("IllegalArgumentException", `Color parameter outside of expected range:${schlecht}`, e);
    return { t: "ref", o: this.neueFarbe(r, g, b, a), st: "Color" };
  }

  /** `Palette.RED` oder `Color.RED`: je Konstante genau ein Objekt (`==` wie in Java) */
  private farbKonstante(k: "Palette" | "Color", e: AusdruckVon<"feld">): JW {
    if (e.ziel.k === "name") this.pruefeImport(k, e.ziel);
    const n = e.name;
    const tabelle = k === "Palette" ? PALETTE : AWT_FARBEN;
    const kanon = k === "Palette" ? (Object.hasOwn(PALETTE, n) ? n : null) : awtKonstante(n);
    if (kanon === null) {
      const hinweis = Object.hasOwn(tabelle, n.toUpperCase()) ? ` Java unterscheidet Groß- und Kleinschreibung: Die Farben stehen in Großbuchstaben, hier also ${bt(`${k}.${n.toUpperCase()}`)}.` : "";
      throw this.compiler(`${bt(`${k}.${n}`)} gibt es nicht: Die Klasse ${bt(k)} hat keine Farbe mit diesem Namen.${hinweis}`, e);
    }
    return { t: "ref", o: this.holeKonstante(k, kanon), st: "Color" };
  }

  private holeKonstante(k: "Palette" | "Color", kanon: string): ColorObj {
    const schluessel = `${k}.${kanon}`;
    let o = this.farbKonstanten.get(schluessel);
    if (!o) {
      const [r, g, b, a, name] = (k === "Palette" ? PALETTE : AWT_FARBEN)[kanon];
      o = this.neueFarbe(r, g, b, a, name);
      this.farbKonstanten.set(schluessel, o);
    }
    return o;
  }

  private awtFarbe(kanon: "BLACK" | "WHITE"): ColorObj {
    return this.holeKonstante("Color", kanon);
  }

  private neuesFenster(breite: number, hoehe: number, e: Stelle): JW {
    if (breite < 1 || hoehe < 1) throw new JavaFehler("IllegalArgumentException", "Die Fenstergröße muss positiv sein.", e);
    const o: CdObj = { k: "cd", id: this.naechsteId++, breite, hoehe, farbe: this.awtFarbe("BLACK"), linie: 1, zu: false, tick: 0 };
    this.protokolliere(o, "fenster", false, { b: breite, h: hoehe }, e);
    this.fensterZahl++;
    return { t: "ref", o, st: "CodeDraw" };
  }

  /** Haengt eine Form an das Protokoll (Reihenfolge der Schluessel wie im Fake, damit der Vergleich mit Java exakt ist) */
  private protokolliere(o: CdObj, art: Form["art"], gefuellt: boolean, felder: Record<string, number | string>, e: Stelle) {
    if (this.formenAktuell >= MAX_FORMEN) throw new JavaFehler("IllegalStateException", `Mehr als ${MAX_FORMEN} Formen gezeichnet (Endlosschleife?)`, e);
    this.formen.push({ art, farbe: hexJ(o.farbe.r, o.farbe.g, o.farbe.b), gefuellt, linie: zahlJ(o.linie), ...felder } as Form);
    this.formenAktuell++;
  }

  private cdGeaendert(o: CdObj) {
    o.wert = undefined;
    o.tick = ++this.tick;
  }

  private farbArg(w: JW, e: Stelle): ColorObj | null {
    if (w.t !== "ref" || (w.o && w.o.k !== "color")) throw this.compiler(`Hier wird eine Farbe (${bt("Color")}, zum Beispiel ${bt("Palette.RED")}) erwartet, nicht ${bt(typVon(w))}.`, e);
    return w.o;
  }

  private cdMethode(o: CdObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const n = e.name;
    const args = e.args.map((a) => this.wert(a));
    const wie = this.texte ? bt(codeKurz(this.code(e))) : "";
    const fw = this.texte ? farbWort(o.farbe) : "";
    const lw = this.texte ? zahlText(o.linie) : "";
    const anzahl = (k: number) => {
      if (args.length !== k) throw this.compiler(`${bt("CodeDraw." + n)} braucht ${k === 0 ? "keine Werte" : `genau ${k} Wert${k === 1 ? "" : "e"}`}, hier stehen ${args.length}.`, e);
    };
    const d = (i: number) => alsZahl(this.zahlArg(args[i], e));
    const zt = zahlText;
    const form = (art: Form["art"], gefuellt: boolean, felder: Record<string, number | string>, satz: () => string): JW | null => {
      this.protokolliere(o, art, gefuellt, felder, e);
      return this.bibErgebnis(e, null, satz, ziel);
    };
    switch (n) {
      case "getWidth":
        anzahl(0);
        return this.bibErgebnis(e, I(o.breite), () => `${wie} liefert die Breite der Zeichenfläche: ${o.breite} Pixel.`, ziel);
      case "getHeight":
        anzahl(0);
        return this.bibErgebnis(e, I(o.hoehe), () => `${wie} liefert die Höhe der Zeichenfläche: ${o.hoehe} Pixel.`, ziel);
      case "getColor":
        anzahl(0);
        return this.bibErgebnis(e, { t: "ref", o: o.farbe, st: "Color" }, () => `${wie} liefert die aktuelle Zeichenfarbe: ${fw}.`, ziel);
      case "getLineWidth":
        anzahl(0);
        return this.bibErgebnis(e, D(o.linie), () => `${wie} liefert die aktuelle Linienbreite: ${lw}.`, ziel);
      case "getTitle":
        anzahl(0);
        return this.bibErgebnis(e, this.internString("CodeDraw"), () => `${wie} liefert den Titel des Fensters.`, ziel);
      case "isClosed":
        anzahl(0);
        return this.bibErgebnis(e, B(o.zu), () => `${wie} liefert ${wahrText(o.zu)}: Das Fenster ist ${o.zu ? "geschlossen" : "noch offen"}.`, ziel);
      case "setColor": {
        anzahl(1);
        const f = this.farbArg(args[0], e);
        if (!f) throw new JavaFehler("NullPointerException", "color darf nicht null sein", e);
        o.farbe = f;
        this.cdGeaendert(o);
        const neu = farbWort(f);
        return this.bibErgebnis(e, null, () => `Stellt die Zeichenfarbe auf ${neu} ein. Alles, was danach gezeichnet wird, bekommt diese Farbe, bis \`setColor\` sie wieder ändert.`, ziel);
      }
      case "setLineWidth": {
        anzahl(1);
        const b = d(0);
        if (b <= 0) throw new JavaFehler("IllegalArgumentException", "Die Linienbreite muss positiv sein.", e);
        o.linie = b;
        this.cdGeaendert(o);
        return this.bibErgebnis(e, null, () => `Stellt die Linienbreite auf ${zt(b)} ein. Sie gilt für Linien und Umrisse, nicht für gefüllte Formen.`, ziel);
      }
      case "setTitle":
        anzahl(1);
        if (!istStringW(args[0])) throw this.compiler(`Hier wird ein String erwartet, nicht ${bt(typVon(args[0]))}.`, e);
        return this.bibErgebnis(e, null, () => `${wie} setzt den Titel des Fensters. In der Ablaufansicht hat das keine sichtbare Wirkung.`, ziel);
      case "setAlwaysOnTop":
        anzahl(1);
        if (args[0].t !== "boolean") throw this.compiler(`Hier wird ein ${bt("boolean")} erwartet, nicht ${bt(typVon(args[0]))}.`, e);
        return this.bibErgebnis(e, null, () => `${wie} legt fest, ob das Fenster immer oben liegt. In der Ablaufansicht hat das keine sichtbare Wirkung.`, ziel);
      case "setCanvasPositionX":
      case "setCanvasPositionY":
        anzahl(1);
        this.intArg(args[0], e);
        return this.bibErgebnis(e, null, () => `${wie} verschiebt das Fenster auf dem Bildschirm. In der Ablaufansicht hat das keine sichtbare Wirkung.`, ziel);
      case "close":
        anzahl(0);
        o.zu = true;
        this.cdGeaendert(o);
        return this.bibErgebnis(e, null, () => "Schließt das Fenster. Was schon gezeichnet wurde, bleibt auf der Zeichenfläche daneben stehen.", ziel);
      case "show": {
        if (args.length > 1) anzahl(1);
        let warte = 0;
        if (args.length === 1) {
          const w = args[0];
          if (w.t !== "int" && w.t !== "short" && w.t !== "byte" && w.t !== "char" && w.t !== "long") throw this.compiler(`Hier wird eine ganze Zahl (Millisekunden) erwartet, nicht ${bt(typVon(w))}.`, e);
          warte = Number(w.v);
          if (warte < 0) throw new JavaFehler("IllegalArgumentException", "Wartezeit muss >= 0 sein.", e);
        }
        const neu = this.formen.length - this.zeichenGezeigt;
        this.zeichenGezeigt = this.formen.length;
        return this.bibErgebnis(
          e,
          null,
          () =>
            `Zeigt die Zeichnung im Fenster an${neu > 0 ? `: Jetzt wird alles sichtbar, was seit dem letzten \`show\` gezeichnet wurde.` : ". Seit dem letzten `show` ist nichts Neues dazugekommen."}${
              args.length === 1 ? ` Danach wartet das Programm ${warte} Millisekunden (die Ablaufansicht wartet nicht wirklich).` : ""
            }`,
          ziel,
        );
      }
      case "clear": {
        if (args.length > 1) anzahl(1);
        const f = args.length === 1 ? this.farbArg(args[0], e) : this.awtFarbe("WHITE");
        // wie im Fake: Alles ausser den Fenstern geht verloren, dann kommt der Hintergrund dazu
        this.formenAktuell = this.fensterZahl;
        this.zeichenAb = this.formen.length;
        if (!f) throw new JavaFehler("NullPointerException", 'Cannot invoke "java.awt.Color.getRed()" because "c" is null', e);
        const alt = o.farbe;
        o.farbe = f;
        this.protokolliere(o, "hintergrund", true, { b: o.breite, h: o.hoehe }, e);
        o.farbe = alt;
        const neu = farbWort(f);
        return this.bibErgebnis(e, null, () => `Löscht die Zeichenfläche: Alles bisher Gezeichnete verschwindet, der Hintergrund wird ${neu}. Zeichenfarbe und Linienbreite bleiben, wie sie sind.`, ziel);
      }
      case "drawPoint":
      case "drawPixel": {
        anzahl(2);
        const x = d(0);
        const y = d(1);
        return form("punkt", true, { x: zahlJ(x), y: zahlJ(y) }, () => `Zeichnet einen Punkt bei (${zt(x)}, ${zt(y)}), Farbe ${fw}.`);
      }
      case "drawLine": {
        anzahl(4);
        const [x1, y1, x2, y2] = [d(0), d(1), d(2), d(3)];
        return form("linie", false, { x1: zahlJ(x1), y1: zahlJ(y1), x2: zahlJ(x2), y2: zahlJ(y2) }, () => `Zeichnet eine Linie von (${zt(x1)}, ${zt(y1)}) nach (${zt(x2)}, ${zt(y2)}), Farbe ${fw}, Linienbreite ${lw}.`);
      }
      case "drawCircle":
      case "fillCircle": {
        anzahl(3);
        const [x, y, r] = [d(0), d(1), d(2)];
        const f = n === "fillCircle";
        return form("kreis", f, { x: zahlJ(x), y: zahlJ(y), r: zahlJ(r) }, () =>
          `Zeichnet ${f ? "einen gefüllten Kreis" : "den Umriss eines Kreises"}: Mittelpunkt (${zt(x)}, ${zt(y)}), Radius ${zt(r)}, Farbe ${fw}${f ? "" : `, Linienbreite ${lw}`}.`,
        );
      }
      case "drawEllipse":
      case "fillEllipse": {
        anzahl(4);
        const [x, y, rx, ry] = [d(0), d(1), d(2), d(3)];
        const f = n === "fillEllipse";
        return form("ellipse", f, { x: zahlJ(x), y: zahlJ(y), rx: zahlJ(rx), ry: zahlJ(ry) }, () =>
          `Zeichnet ${f ? "eine gefüllte Ellipse" : "den Umriss einer Ellipse"}: Mittelpunkt (${zt(x)}, ${zt(y)}), waagrechter Radius ${zt(rx)}, senkrechter Radius ${zt(ry)}, Farbe ${fw}${f ? "" : `, Linienbreite ${lw}`}.`,
        );
      }
      case "drawRectangle":
      case "fillRectangle": {
        anzahl(4);
        const [x, y, b, h] = [d(0), d(1), d(2), d(3)];
        const f = n === "fillRectangle";
        return form("rechteck", f, { x: zahlJ(x), y: zahlJ(y), b: zahlJ(b), h: zahlJ(h) }, () =>
          `Zeichnet ${f ? "ein gefülltes Rechteck" : "den Umriss eines Rechtecks"}: Ecke links oben bei (${zt(x)}, ${zt(y)}), ${zt(b)} breit, ${zt(h)} hoch, Farbe ${fw}${f ? "" : `, Linienbreite ${lw}`}.`,
        );
      }
      case "drawSquare":
      case "fillSquare": {
        anzahl(3);
        const [x, y, s] = [d(0), d(1), d(2)];
        const f = n === "fillSquare";
        return form("rechteck", f, { x: zahlJ(x), y: zahlJ(y), b: zahlJ(s), h: zahlJ(s) }, () =>
          `Zeichnet ${f ? "ein gefülltes Quadrat" : "den Umriss eines Quadrats"}: Ecke links oben bei (${zt(x)}, ${zt(y)}), Seitenlänge ${zt(s)}, Farbe ${fw}${f ? "" : `, Linienbreite ${lw}`}.`,
        );
      }
      case "drawTriangle":
      case "fillTriangle": {
        anzahl(6);
        const [x1, y1, x2, y2, x3, y3] = [d(0), d(1), d(2), d(3), d(4), d(5)];
        const f = n === "fillTriangle";
        return form("dreieck", f, { x1: zahlJ(x1), y1: zahlJ(y1), x2: zahlJ(x2), y2: zahlJ(y2), x3: zahlJ(x3), y3: zahlJ(y3) }, () =>
          `Zeichnet ${f ? "ein gefülltes Dreieck" : "den Umriss eines Dreiecks"} mit den Ecken (${zt(x1)}, ${zt(y1)}), (${zt(x2)}, ${zt(y2)}) und (${zt(x3)}, ${zt(y3)}), Farbe ${fw}${f ? "" : `, Linienbreite ${lw}`}.`,
        );
      }
      case "drawArc": {
        anzahl(5);
        const [x, y, r, start, winkel] = [d(0), d(1), d(2), d(3), d(4)];
        return form("bogen", false, { x: zahlJ(x), y: zahlJ(y), r: zahlJ(r), start: zahlJ(start), winkel: zahlJ(winkel) }, () =>
          `Zeichnet einen Kreisbogen: Mittelpunkt (${zt(x)}, ${zt(y)}), Radius ${zt(r)}, Start bei ${zt(start)} (Bogenmaß), Winkel ${zt(winkel)} (Bogenmaß), Farbe ${fw}, Linienbreite ${lw}.`,
        );
      }
      case "drawText": {
        anzahl(3);
        const [x, y] = [d(0), d(1)];
        const t = args[2];
        if (!istStringW(t)) throw this.compiler(`Hier wird ein String erwartet, nicht ${bt(typVon(t))}.`, e);
        const text = t.t === "ref" && t.o ? (t.o as StrObj).s : "null";
        return form("text", true, { x: zahlJ(x), y: zahlJ(y), text: formText(text) }, () => `Schreibt den Text ${stringLiteral(text, 40)} mit der linken oberen Ecke bei (${zt(x)}, ${zt(y)}), Farbe ${fw}.`);
      }
    }
    throw new NichtUnterstuetzt(`${bt("CodeDraw." + n + "(…)")} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  private farbMethode(o: ColorObj, e: AusdruckVon<"aufruf">, ziel: boolean): JW | null {
    const n = e.name;
    const args = e.args.map((a) => this.wert(a));
    const c = this.texte ? bt(codeKurz(this.code(e))) : "";
    const komponente = (wert: number, wort: string) =>
      this.bibErgebnis(e, I(wert), () => `${c} liefert den ${wort}anteil der Farbe ${farbWort(o)}: ${wert} (von 0 bis 255).`, ziel);
    if (args.length === 0) {
      switch (n) {
        case "getRed":
          return komponente(o.r, "Rot");
        case "getGreen":
          return komponente(o.g, "Grün");
        case "getBlue":
          return komponente(o.b, "Blau");
        case "getAlpha":
          return komponente(o.a, "Alpha");
        case "getRGB":
          return this.bibErgebnis(e, I((o.a << 24) | (o.r << 16) | (o.g << 8) | o.b), () => `${c} liefert die Farbe als eine ganze Zahl (Alpha, Rot, Grün, Blau hintereinander).`, ziel);
        case "toString": {
          const t = this.neuerString(`java.awt.Color[r=${o.r},g=${o.g},b=${o.b}]`);
          return this.bibErgebnis(e, t, () => `${c} liefert die Farbe als Text.`, ziel);
        }
      }
    }
    if (n === "equals" && args.length === 1) {
      const a = args[0];
      const gleich = a.t === "ref" && !!a.o && a.o.k === "color" && a.o.r === o.r && a.o.g === o.g && a.o.b === o.b && a.o.a === o.a;
      return this.bibErgebnis(e, B(gleich), () => `${c} vergleicht die Farbwerte (Rot, Grün, Blau, Alpha): ${wahrText(gleich)}.`, ziel);
    }
    throw new NichtUnterstuetzt(`${bt("Color." + n + "(…)")} wird in der Ablaufansicht (noch) nicht unterstützt.`, e.von);
  }

  // ====================================================================== Fehlertexte

  private fehlerErklaerung(e: JavaFehler): string {
    const m = e.meldung ?? "";
    let warum: string;
    switch (e.name) {
      case "ArrayIndexOutOfBoundsException": {
        const x = /Index (-?\d+) out of bounds for length (\d+)/.exec(m);
        warum = x ? `Index ${x[1]} gibt es nicht: Das Array hat die Länge ${x[2]}, also nur die Indizes 0 bis ${Number(x[2]) - 1}.` : "Der Index liegt außerhalb des Arrays.";
        break;
      }
      case "StringIndexOutOfBoundsException":
        warum = "Diese Position gibt es im String nicht (die Positionen gehen von 0 bis Länge - 1).";
        break;
      case "ArithmeticException":
        warum = "Ganze Zahlen kann man nicht durch 0 teilen.";
        break;
      case "NullPointerException":
        warum = "Die Variable zeigt auf kein Objekt (`null`), deshalb gibt es hier nichts zu lesen oder aufzurufen.";
        break;
      case "NumberFormatException":
        warum = "Der Text ist keine gültige Zahl.";
        break;
      case "InputMismatchException":
        warum = "Die nächste Eingabe passt nicht zum verlangten Typ (zum Beispiel ein Wort statt einer ganzen Zahl).";
        break;
      case "NoSuchElementException":
        warum = "Es gibt keine Eingabe mehr, die gelesen werden könnte.";
        break;
      case "NegativeArraySizeException":
        warum = "Ein Array kann keine negative Länge haben.";
        break;
      case "StackOverflowError":
        warum = `Zu viele Aufrufe sind gleichzeitig offen (mehr als ${this.opt.maxTiefe}): Die Rekursion hört vermutlich nie auf. Fehlt der Basisfall, oder kommt jeder Aufruf ihm näher?`;
        break;
      default:
        warum = m ? `Meldung: ${m}` : "";
    }
    return `Hier bricht das Programm ab mit ${bt(e.name)}${m && e.name !== "StackOverflowError" ? ": " + m : ""}. ${warum}`.trim();
  }
}

// ====================================================================== freie Hilfsfunktionen

/** Zusatzcode parsen; seine Fehler haben keine Zeile in der gezeigten Quelle */
function zusatz(text: string, q: number, was: string): ReturnType<typeof parseZusatz> {
  try {
    return parseZusatz(text, q);
  } catch (e) {
    if (e instanceof SyntaxFehler) throw new SyntaxFehler(`Im ${was} \`${codeKurz(text, 40)}\`: ${e.message}`, -1);
    throw e;
  }
}

function rint(x: number): number {
  const r = Math.round(x);
  return Math.abs(x % 1) === 0.5 && r % 2 !== 0 ? r - 1 : r;
}

function doubleVergleich(a: number, b: number): number {
  if (a < b) return -1;
  if (a > b) return 1;
  if (Number.isNaN(a)) return Number.isNaN(b) ? 0 : 1;
  if (Number.isNaN(b)) return -1;
  if (a === 0 && b === 0) {
    const na = Object.is(a, -0);
    const nb = Object.is(b, -0);
    return na === nb ? 0 : na ? -1 : 1;
  }
  return 0;
}

function javaVergleich(a: string, b: string): number {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const d = a.charCodeAt(i) - b.charCodeAt(i);
    if (d !== 0) return d;
  }
  return a.length - b.length;
}

function faltung(z: string): string {
  const u = z.toUpperCase();
  const g = u.length === 1 ? u : z;
  const l = g.toLowerCase();
  return l.length === 1 ? l : g;
}

function gleichOhneCase(a: string, b: string): boolean {
  if (a === b) return true;
  const ua = a.toUpperCase();
  const ub = b.toUpperCase();
  if (ua.length === 1 && ua === ub) return true;
  return a.toLowerCase() === b.toLowerCase();
}

function istJavaLeerraum(c: number): boolean {
  if (c === 0x00a0 || c === 0x2007 || c === 0x202f) return false;
  if ((c >= 9 && c <= 13) || (c >= 0x1c && c <= 0x1f)) return true;
  return /[\p{Zs}\p{Zl}\p{Zp}]/u.test(String.fromCharCode(c));
}

function stripJava(s: string): string {
  let a = 0;
  let b = s.length;
  while (a < b && istJavaLeerraum(s.charCodeAt(a))) a++;
  while (b > a && istJavaLeerraum(s.charCodeAt(b - 1))) b--;
  return s.slice(a, b);
}

function elementGleich(x: JW, y: JW): boolean {
  if (x.t === "ref" && y.t === "ref") {
    if (x.o === y.o) return true;
    if (x.o && y.o && x.o.k === "str" && y.o.k === "str") return x.o.s === y.o.s;
    return false;
  }
  if ((x.t === "double" || x.t === "float") && (y.t === "double" || y.t === "float")) return doubleVergleich(x.v, y.v) === 0;
  if (istZahl(x) && istZahl(y)) return alsBig(x) === alsBig(y) && alsZahl(x) === alsZahl(y);
  if (x.t === "boolean" && y.t === "boolean") return x.v === y.v;
  return false;
}

/** Anzeigename einer Farbe: deutscher Name der Konstante, sonst `RGB(r, g, b)` */
function farbWort(c: ColorObj): string {
  return c.name ?? (c.a === 255 ? `RGB(${c.r}, ${c.g}, ${c.b})` : `RGBA(${c.r}, ${c.g}, ${c.b}, ${c.a})`);
}

export function fuehreAus(prog: Programm, quelle: string, opt: InterneOptionen): Ablauf {
  return new Lauf(prog, quelle, opt).starte();
}
