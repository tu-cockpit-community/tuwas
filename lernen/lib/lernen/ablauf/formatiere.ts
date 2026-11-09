/**
 * Zahlen und Texte so formatieren, wie Java es tut: `Double.toString` (JDK 19+, kuerzeste eindeutige Darstellung),
 * `Float.toString`, `String.format`/`printf` (Gebiet US: Dezimalpunkt), Java-Literale fuer die Umformungsketten und ein
 * kompakter Text-Dump eines Ablaufs (fuer Tests und Menschen).
 */
import type { Form } from "../java/codedraw";
import type { Ablauf, Schritt, Variable, Wert } from "./typen";
import { sichtbareFormen } from "./zeichnung";

// ---------------------------------------------------------------- Gleitkomma

/** Kuerzeste Ziffernfolge (ohne fuehrende Nullen) und Zehnerexponent: |x| = 0.d1d2... nicht, sondern d1.d2... * 10^exp */
function ziffernUndExponent(betrag: number, stellen?: number): { ziffern: string; exp: number } {
  const e = stellen === undefined ? betrag.toExponential() : betrag.toExponential(stellen - 1);
  const [mant, ex] = e.split("e");
  return { ziffern: mant.replace(".", "").replace(/0+$/, "") || "0", exp: parseInt(ex, 10) };
}

/**
 * Ziffern wie Double.toString: kuerzeste Darstellung, die beim Einlesen wieder genau x ergibt. Hat sie nur eine
 * Ziffer, waehlt Java unter den Darstellungen mit ein oder zwei Ziffern die naechstgelegene (z. B. 4.9E-324).
 */
function javaZiffern(betrag: number, istFloat: boolean): { ziffern: string; exp: number } {
  let r: { ziffern: string; exp: number };
  if (istFloat) {
    r = ziffernUndExponent(betrag, 9);
    for (let p = 1; p <= 9; p++) {
      let s = betrag.toPrecision(p);
      if (Math.fround(Number(s)) === betrag) {
        // Gleichstand (genau ...5000 dahinter): toPrecision rundet auf, Java nimmt die gerade letzte Ziffer
        const exakt = betrag.toExponential(Math.min(99, p + 40)).split("e")[0].replace(".", "");
        if (/^50*$/.test(exakt.slice(p))) {
          const [mant, ex] = Number(s).toExponential(p - 1).split("e");
          const letzte = Number(mant[mant.length - 1]);
          if (letzte % 2 === 1) s = mant.slice(0, -1) + String(letzte - 1) + "e" + ex;
        }
        r = ziffernUndExponent(Number(s));
        break;
      }
    }
  } else r = ziffernUndExponent(betrag);
  if (r.ziffern.length === 1) {
    const zwei = betrag.toPrecision(2);
    const zurueck = istFloat ? Math.fround(Number(zwei)) : Number(zwei);
    if (zurueck === betrag) {
      const [mant, ex] = Number(zwei) === 0 ? ["0", "0"] : betrag.toExponential(1).split("e");
      const ziffern = mant.replace(".", "").replace(/0+$/, "");
      if (ziffern.length === 2) r = { ziffern, exp: parseInt(ex, 10) };
    }
  }
  return r;
}

function gleitText(x: number, istFloat: boolean): string {
  if (Number.isNaN(x)) return "NaN";
  if (x === Infinity) return "Infinity";
  if (x === -Infinity) return "-Infinity";
  if (x === 0) return Object.is(x, -0) ? "-0.0" : "0.0";
  const vz = x < 0 ? "-" : "";
  const betrag = Math.abs(x);
  const { ziffern, exp } = javaZiffern(betrag, istFloat);
  if (betrag >= 1e-3 && betrag < 1e7) {
    if (exp >= 0) {
      const ganz = ziffern.length > exp + 1 ? ziffern.slice(0, exp + 1) : ziffern.padEnd(exp + 1, "0");
      const bruch = ziffern.length > exp + 1 ? ziffern.slice(exp + 1) : "0";
      return `${vz}${ganz}.${bruch}`;
    }
    return `${vz}0.${"0".repeat(-exp - 1)}${ziffern}`;
  }
  return `${vz}${ziffern[0]}.${ziffern.slice(1) || "0"}E${exp}`;
}

/** Double.toString(x) */
export function doubleText(x: number): string {
  return gleitText(x, false);
}

/** Float.toString(x); x muss ein float-Wert sein (Math.fround) */
export function floatText(x: number): string {
  return gleitText(x, true);
}

// ---------------------------------------------------------------- Dezimalrundung (Formatter: HALF_UP)

/**
 * Rundet die kuerzeste Dezimaldarstellung von |x| kaufmaennisch (HALF_UP) auf `nachkomma` Stellen und gibt
 * Ganzzahl- und Nachkommateil zurueck. So rechnet java.util.Formatter bei `%.2f` (0.125 -> 0.13, 1.005 -> 1.01).
 */
export function rundeHalfUp(betrag: number, nachkomma: number): { ganz: string; bruch: string } {
  if (betrag === 0) return { ganz: "0", bruch: "0".repeat(nachkomma) };
  const { ziffern, exp } = ziffernUndExponent(betrag);
  return rundeZiffern(ziffern, exp, nachkomma);
}

/** Wie rundeHalfUp, aber direkt auf einer Ziffernfolge d1.d2d3... * 10^exp */
function rundeZiffern(ziffern: string, exp: number, nachkomma: number): { ganz: string; bruch: string } {
  // Ziffernfolge mit Komma nach Position exp+1
  let ganz: string;
  let bruch: string;
  if (exp >= 0) {
    ganz = ziffern.length > exp + 1 ? ziffern.slice(0, exp + 1) : ziffern.padEnd(exp + 1, "0");
    bruch = ziffern.length > exp + 1 ? ziffern.slice(exp + 1) : "";
  } else {
    ganz = "0";
    bruch = "0".repeat(-exp - 1) + ziffern;
  }
  if (bruch.length <= nachkomma) return { ganz, bruch: bruch.padEnd(nachkomma, "0") };
  const aufrunden = bruch.charCodeAt(nachkomma) >= 53; // '5'
  let alle = (ganz + bruch.slice(0, nachkomma)).split("").map(Number);
  if (aufrunden) {
    let k = alle.length - 1;
    while (k >= 0) {
      if (alle[k] < 9) {
        alle[k]++;
        break;
      }
      alle[k] = 0;
      k--;
    }
    if (k < 0) alle = [1, ...alle];
  }
  const s = alle.join("");
  const g = s.slice(0, s.length - nachkomma) || "0";
  return { ganz: g.replace(/^0+(?=\d)/, ""), bruch: s.slice(s.length - nachkomma) };
}

// ---------------------------------------------------------------- Java-Literale (Umformungsketten)

function escapeZeichen(c: string, inString: boolean): string {
  switch (c) {
    case "\n":
      return "\\n";
    case "\t":
      return "\\t";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\\":
      return "\\\\";
    case '"':
      return inString ? '\\"' : '"';
    case "'":
      return inString ? "'" : "\\'";
  }
  const n = c.charCodeAt(0);
  if (n < 0x20 || n === 0x7f) return "\\u" + n.toString(16).padStart(4, "0");
  return c;
}

/** "abc" als Java-String-Literal; sehr lange Texte werden in der Mitte gekuerzt */
export function stringLiteral(s: string, max = 60): string {
  let t = s;
  if (t.length > max) t = t.slice(0, max - 12) + "…" + t.slice(t.length - 8);
  let out = '"';
  for (const c of t) out += c === "…" && t !== s ? c : escapeZeichen(c, true);
  return out + '"';
}

/** 'a' als Java-char-Literal */
export function charLiteral(code: number): string {
  return "'" + escapeZeichen(String.fromCharCode(code), false) + "'";
}

// ---------------------------------------------------------------- Formatter (printf/format)

export interface FormatArg {
  art: "int" | "long" | "double" | "float" | "char" | "boolean" | "String" | "null" | "andere";
  /** int/char: number, long: bigint, double/float: number, boolean, String: string */
  wert: number | bigint | boolean | string | null;
  /** Java-Klassenname fuer Fehlermeldungen, z. B. java.lang.Integer */
  klasse: string;
}

export class FormatFehler extends Error {
  constructor(
    public name: string,
    meldung: string,
  ) {
    super(meldung);
  }
}

function gruppiere(ganz: string): string {
  return ganz.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ganzzahlText(a: FormatArg): bigint {
  return typeof a.wert === "bigint" ? a.wert : BigInt(a.wert as number);
}

function auffuellen(s: string, breite: number | undefined, links: boolean, null_: boolean, vorzeichenLaenge: number): string {
  if (breite === undefined || s.length >= breite) return s;
  if (links) return s.padEnd(breite, " ");
  if (null_) return s.slice(0, vorzeichenLaenge) + "0".repeat(breite - s.length) + s.slice(vorzeichenLaenge);
  return s.padStart(breite, " ");
}

/**
 * java.util.Formatter fuer die ueblichen Umwandlungen: %d %s %S %c %b %f %e %x %X %o %n %%, Flags - 0 + Leerzeichen , (
 * sowie Breite, Genauigkeit und Argumentindex (%1$d). `text` liefert String.valueOf fuer %s.
 */
export function javaFormat(format: string, args: FormatArg[], text: (a: FormatArg) => string): string {
  const re = /%(\d+\$|<)?([-#+ 0,(]*)(\d+)?(\.\d+)?([a-zA-Z%])/g;
  let out = "";
  let pos = 0;
  let naechstes = 0;
  let letztes = -1;
  let m: RegExpExecArray | null;
  while ((m = re.exec(format))) {
    out += format.slice(pos, m.index);
    pos = re.lastIndex;
    const [ganz, index, flags, breiteS, praezS, umw] = m;
    const breite = breiteS ? parseInt(breiteS, 10) : undefined;
    const praez = praezS ? parseInt(praezS.slice(1), 10) : undefined;
    const links = flags.includes("-");
    const nullen = flags.includes("0");
    if (umw === "n") {
      out += "\n";
      continue;
    }
    if (umw === "%") {
      out += auffuellen("%", breite, links, false, 0);
      continue;
    }
    if (links && breite === undefined) throw new FormatFehler("MissingFormatWidthException", ganz);
    let k: number;
    if (index === "<") k = letztes;
    else if (index) k = parseInt(index, 10) - 1;
    else k = naechstes++;
    letztes = k;
    if (k < 0 || k >= args.length) throw new FormatFehler("MissingFormatArgumentException", `Format specifier '${ganz}'`);
    const a = args[k];
    const klein = umw.toLowerCase();
    const gross = umw !== klein;
    let s: string;
    switch (klein) {
      case "s":
        s = text(a);
        if (praez !== undefined) s = s.slice(0, praez);
        s = auffuellen(s, breite, links, false, 0);
        break;
      case "b":
        s = a.art === "null" ? "false" : a.art === "boolean" ? String(a.wert) : "true";
        if (praez !== undefined) s = s.slice(0, praez);
        s = auffuellen(s, breite, links, false, 0);
        break;
      case "c": {
        if (a.art === "null") s = "null";
        else if (a.art === "char") s = String.fromCharCode(a.wert as number);
        else if (a.art === "int") s = String.fromCodePoint(a.wert as number);
        else throw new FormatFehler("IllegalFormatConversionException", `c != ${a.klasse}`);
        s = auffuellen(s, breite, links, false, 0);
        break;
      }
      case "d": {
        if (a.art === "null") {
          s = auffuellen("null", breite, links, false, 0);
          break;
        }
        if (a.art !== "int" && a.art !== "long") throw new FormatFehler("IllegalFormatConversionException", `d != ${a.klasse}`);
        const v = ganzzahlText(a);
        const neg = v < BigInt(0);
        let ziffern = (neg ? -v : v).toString();
        if (flags.includes(",")) ziffern = gruppiere(ziffern);
        let vz = "";
        if (neg) vz = flags.includes("(") ? "(" : "-";
        else if (flags.includes("+")) vz = "+";
        else if (flags.includes(" ")) vz = " ";
        s = vz + ziffern + (neg && flags.includes("(") ? ")" : "");
        s = auffuellen(s, breite, links, nullen, vz.length);
        break;
      }
      case "x":
      case "o": {
        if (a.art === "null") {
          s = auffuellen("null", breite, links, false, 0);
          break;
        }
        if (a.art !== "int" && a.art !== "long") throw new FormatFehler("IllegalFormatConversionException", `${umw} != ${a.klasse}`);
        const bits = a.art === "long" ? 64 : 32;
        const v = BigInt.asUintN(bits, ganzzahlText(a));
        s = v.toString(klein === "x" ? 16 : 8);
        if (flags.includes("#")) s = (klein === "x" ? "0x" : "0") + s;
        if (gross) s = s.toUpperCase();
        s = auffuellen(s, breite, links, nullen, 0);
        break;
      }
      case "f":
      case "e": {
        if (a.art === "null") {
          s = auffuellen("null", breite, links, false, 0);
          break;
        }
        if (a.art !== "double" && a.art !== "float") throw new FormatFehler("IllegalFormatConversionException", `${umw} != ${a.klasse}`);
        const x = a.wert as number;
        const p = praez ?? 6;
        if (Number.isNaN(x) || !Number.isFinite(x)) {
          s = Number.isNaN(x) ? "NaN" : x > 0 ? (flags.includes("+") ? "+Infinity" : "Infinity") : flags.includes("(") ? "(Infinity)" : "-Infinity";
          s = auffuellen(s, breite, links, false, 0);
          break;
        }
        const neg = x < 0 || Object.is(x, -0);
        const betrag = Math.abs(x);
        let zahl: string;
        if (klein === "f") {
          const r = rundeHalfUp(betrag, p);
          zahl = (flags.includes(",") ? gruppiere(r.ganz) : r.ganz) + (p > 0 ? "." + r.bruch : flags.includes("#") ? "." : "");
        } else {
          // %e: eine Ziffer vor dem Komma, p danach, Exponent mindestens zweistellig
          const zf = betrag === 0 ? { ziffern: "0", exp: 0 } : ziffernUndExponent(betrag);
          let exp = zf.exp;
          let r = rundeZiffern(zf.ziffern, 0, p);
          if (r.ganz.length > 1) {
            // 9.99... aufgerundet auf 10.0: eine Stelle weiter
            exp++;
            r = { ganz: r.ganz[0], bruch: (r.ganz.slice(1) + r.bruch).slice(0, p) };
          }
          const e = Math.abs(exp).toString().padStart(2, "0");
          zahl = r.ganz + (p > 0 ? "." + r.bruch : "") + (exp < 0 ? "e-" : "e+") + e;
        }
        let vz = "";
        if (neg) vz = flags.includes("(") ? "(" : "-";
        else if (flags.includes("+")) vz = "+";
        else if (flags.includes(" ")) vz = " ";
        s = vz + zahl + (neg && flags.includes("(") ? ")" : "");
        if (gross) s = s.toUpperCase();
        s = auffuellen(s, breite, links, nullen, vz.length);
        break;
      }
      default:
        throw new FormatFehler("UnknownFormatConversionException", `Conversion = '${umw}'`);
    }
    if (gross && klein !== "e" && klein !== "x") s = s.toUpperCase();
    out += s;
  }
  const rest = format.slice(pos);
  const kaputt = /%/.exec(rest);
  if (kaputt) {
    const f = rest.slice(kaputt.index);
    throw new FormatFehler("UnknownFormatConversionException", `Conversion = '${f.length > 1 ? f[1] : "%"}'`);
  }
  return out + rest;
}

// ---------------------------------------------------------------- Text-Dump eines Ablaufs

function wertKurz(w: Wert): string {
  switch (w.art) {
    case "String":
      return stringLiteral(w.text, 40);
    case "char":
      return charLiteral(w.text.charCodeAt(0));
    case "null":
      return "null";
    case "array":
      return "{" + w.elemente.slice(0, 12).map(wertKurz).join(", ") + (w.elemente.length > 12 ? ", …" : "") + "}";
    case "objekt":
      return w.text.startsWith(w.typ) ? w.text : `${w.typ}(${w.text})`;
    default:
      return w.text;
  }
}

function variableKurz(v: Variable): string {
  const marke = v.neu ? "+" : v.geaendert ? "*" : "";
  const zellen = v.geaenderteElemente?.length ? `[${v.geaenderteElemente.join(" ")}]` : "";
  return `${marke}${v.name}=${wertKurz(v.wert)}${zellen}`;
}

/** Eine Form des CodeDraw-Protokolls als eine kurze Zeile, z. B. `rechteck #ff0000 gefuellt (20 40 60 30)` */
function formKurz(f: Form): string {
  const { art, farbe, gefuellt, linie, ...rest } = f as Form & Record<string, unknown>;
  const zahlen = Object.values(rest).map((v) => (typeof v === "string" ? JSON.stringify(v) : String(v)));
  return `${art} ${farbe} ${gefuellt ? "gefuellt" : `Linie ${linie}`} (${zahlen.join(" ")})`;
}

/**
 * Lesbarer Text-Dump: eine Zeile je Schritt, z. B.
 * `  7 Z3 anweisung  «summe += i»  summe += i mit summe = 3 und i = 4: summe wird 7. | main{*summe=7 i=4} | +"7\n"`.
 * `fein`-Schritte sind eingerueckt und mit `·` markiert.
 */
export function dumpAblauf(a: Ablauf, opt: { nurZeilen?: boolean; max?: number } = {}): string {
  const zeilen: string[] = [];
  if (a.aufruf) zeilen.push(`Aufruf: ${a.vorher ? a.vorher + " " : ""}${a.aufruf}`);
  const schritte = opt.nurZeilen ? a.schritte.filter((s) => !s.fein) : a.schritte;
  schritte.slice(0, opt.max ?? Infinity).forEach((s: Schritt, i) => {
    const stelle = a.quelle.slice(s.von, s.bis).replace(/\s+/g, " ");
    const kurzStelle = stelle.length > 40 ? stelle.slice(0, 37) + "..." : stelle;
    const teile = [`${String(i + 1).padStart(3)} ${s.fein ? "·" : " "}Z${s.zeile} ${s.art}${s.bedingung === undefined ? "" : s.bedingung ? "=wahr" : "=falsch"}`, `«${kurzStelle}»`, s.erklaerung];
    if (s.auswertung) teile.push("⟨" + s.auswertung.join(" → ") + "⟩");
    if (s.rueckgabe !== undefined) teile.push(`return ${s.rueckgabe}`);
    const oben = s.frames[s.frames.length - 1];
    if (oben) teile.push(`${s.frames.length > 1 ? s.frames.length + "×" : ""}${oben.methode}{${oben.variablen.map(variableKurz).join(" ")}}`);
    if (s.felder?.length) teile.push(`static{${s.felder.map(variableKurz).join(" ")}}`);
    if (s.zeichnung) teile.push(`Flaeche{${sichtbareFormen(a, s).length}${s.zeichnung.anzahl > s.zeichnung.gezeigt ? " ungezeigt" : ""}}`);
    if (s.neueAusgabe) teile.push("+" + JSON.stringify(s.neueAusgabe));
    zeilen.push(teile.join(" | "));
  });
  if (opt.max !== undefined && schritte.length > opt.max) zeilen.push(`… ${schritte.length - opt.max} weitere Schritte`);
  if (a.fehler) zeilen.push(`Fehler: ${a.fehler.name}: ${a.fehler.meldung} (Zeile ${a.fehler.zeile})`);
  if (a.abgeschnitten) zeilen.push(`abgeschnitten: ${a.abgeschnitten}`);
  if (a.ergebnis !== undefined) zeilen.push(`Ergebnis: ${a.ergebnis}`);
  zeilen.push(`Ausgabe: ${JSON.stringify(a.ausgabe)}`);
  if (a.formen) {
    zeilen.push(`Formen (${a.formen.length}):`);
    for (const f of a.formen.slice(0, opt.max ?? Infinity)) zeilen.push(`  ${formKurz(f)}`);
  }
  return zeilen.join("\n");
}
