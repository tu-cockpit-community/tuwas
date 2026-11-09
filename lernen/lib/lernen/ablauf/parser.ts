/**
 * Parser fuer die Java-Teilmenge der Ablauf-Engine: ganze Klassen (statische Methoden und Felder) oder nur
 * Anweisungen (wie bei `javaProgramm` in lib/lernen/java/quelle.ts landen sie in `main`). Jeder Knoten traegt seinen
 * Zeichenbereich [von, bis) und den Index der Quelle (`q`: 0 = gezeigte Quelle, sonst `vorher`/`aufruf`).
 *
 * Gueltiges Java ausserhalb der Teilmenge (Generics, Lambdas, try, Vererbung, ...) meldet er als `NichtUnterstuetzt`,
 * kaputten Code als `SyntaxFehler`.
 */
import { lexe, NichtUnterstuetzt, SyntaxFehler, type Token } from "./lexer";

export interface Bereich {
  von: number;
  bis: number;
}

interface KnotenBasis extends Bereich {
  /** Quelle: 0 = die gezeigte Quelle, 1 = `vorher`, 2 = `aufruf` */
  q: number;
  /** Bereich samt umschliessender Klammern (fuer die Umformungskette: `(a + b) * c` wird zu `5 * c`) */
  aussen?: Bereich;
}

export interface TypName extends Bereich {
  /** einfacher Name ohne Paket, z. B. `int`, `String`, `Scanner` */
  name: string;
  dims: number;
  /** Paketpfad, wenn der Typ qualifiziert geschrieben ist (`java.awt.Color` -> `java.awt`), sonst fehlt er */
  paket?: string;
}

export type LiteralTyp = "int" | "long" | "float" | "double" | "char" | "boolean" | "String" | "null";

export type Ausdruck =
  | (KnotenBasis & { k: "lit"; typ: LiteralTyp; wert: number | bigint | boolean | string | null })
  | (KnotenBasis & { k: "name"; name: string })
  | (KnotenBasis & { k: "feld"; ziel: Ausdruck; name: string })
  | (KnotenBasis & { k: "aufruf"; ziel: Ausdruck | null; name: string; args: Ausdruck[]; nameVon: number })
  | (KnotenBasis & { k: "neu"; typ: TypName; args: Ausdruck[] })
  | (KnotenBasis & { k: "neuArray"; elem: TypName; dimAusdr: Ausdruck[]; dims: number; init: ArrayInit | null })
  | ArrayInit
  | (KnotenBasis & { k: "index"; ziel: Ausdruck; index: Ausdruck })
  | (KnotenBasis & { k: "unaer"; op: "-" | "+" | "!" | "~"; arg: Ausdruck })
  | (KnotenBasis & { k: "incdec"; op: "++" | "--"; praefix: boolean; ziel: Ausdruck })
  | (KnotenBasis & { k: "binaer"; op: string; links: Ausdruck; rechts: Ausdruck })
  | (KnotenBasis & { k: "zuweisung"; op: string; ziel: Ausdruck; wert: Ausdruck })
  | (KnotenBasis & { k: "bedingt"; bed: Ausdruck; dann: Ausdruck; sonst: Ausdruck })
  | (KnotenBasis & { k: "cast"; typ: TypName; arg: Ausdruck })
  | (KnotenBasis & { k: "klammer"; inner: Ausdruck })
  | (KnotenBasis & { k: "switchAusdr"; ausdr: Ausdruck; faelle: Fall[]; pfeil: boolean; kopfBis: number });

export type ArrayInit = KnotenBasis & { k: "arrayInit"; elemente: Ausdruck[] };

export type AusdruckVon<K extends Ausdruck["k"]> = Extract<Ausdruck, { k: K }>;

export interface Deklarator extends Bereich {
  name: string;
  nameVon: number;
  dims: number;
  init: Ausdruck | null;
}

export interface Fall extends Bereich {
  /** null = default */
  labels: Ausdruck[] | null;
  anw: Anweisung[];
  kopfBis: number;
  /** Pfeil-Form mit einem Ausdruck als Ergebnis (switch-Ausdruck) */
  wert?: Ausdruck;
}

export type Anweisung =
  | (KnotenBasis & { k: "block"; anw: Anweisung[] })
  | (KnotenBasis & { k: "dekl"; typ: TypName | null; final: boolean; dekl: Deklarator[] })
  | (KnotenBasis & { k: "ausdr"; ausdr: Ausdruck })
  | (KnotenBasis & { k: "if"; bed: Ausdruck; dann: Anweisung; sonst: Anweisung | null; kopfBis: number })
  | (KnotenBasis & { k: "while"; bed: Ausdruck; rumpf: Anweisung; kopfBis: number })
  | (KnotenBasis & { k: "do"; rumpf: Anweisung; bed: Ausdruck })
  | (KnotenBasis & { k: "for"; init: Anweisung[]; bed: Ausdruck | null; update: Ausdruck[]; rumpf: Anweisung; kopfBis: number })
  | (KnotenBasis & {
      k: "foreach";
      typ: TypName | null;
      name: string;
      nameVon: number;
      iter: Ausdruck;
      rumpf: Anweisung;
      kopfBis: number;
      final: boolean;
    })
  | (KnotenBasis & { k: "switch"; ausdr: Ausdruck; faelle: Fall[]; pfeil: boolean; kopfBis: number })
  | (KnotenBasis & { k: "break"; label: string | null })
  | (KnotenBasis & { k: "continue"; label: string | null })
  | (KnotenBasis & { k: "return"; ausdr: Ausdruck | null })
  | (KnotenBasis & { k: "leer" })
  | (KnotenBasis & { k: "label"; label: string; anw: Anweisung })
  | (KnotenBasis & { k: "assert"; bed: Ausdruck; meldung: Ausdruck | null })
  | (KnotenBasis & { k: "throw"; ausdr: Ausdruck })
  | (KnotenBasis & { k: "yield"; ausdr: Ausdruck });

export type AnweisungVon<K extends Anweisung["k"]> = Extract<Anweisung, { k: K }>;

export interface Parameter extends Bereich {
  typ: TypName;
  name: string;
  varargs: boolean;
}

export interface Methode {
  name: string;
  klasse: string;
  statisch: boolean;
  /** Rueckgabetyp, `void` als name "void" */
  rueck: TypName;
  params: Parameter[];
  rumpf: AnweisungVon<"block"> | null;
  /** Methodenkopf (Modifizierer bis schliessende Klammer) in der Quelle; -1 bei der ergaenzten main eines Ausschnitts */
  kopfVon: number;
  kopfBis: number;
}

export interface FeldDekl extends Bereich {
  statisch: boolean;
  final: boolean;
  typ: TypName;
  dekl: Deklarator[];
}

export interface Klasse extends Bereich {
  name: string;
  methoden: Methode[];
  felder: FeldDekl[];
  statischeBloecke: AnweisungVon<"block">[];
  konstruktoren: number;
}

export interface Programm {
  klassen: Klasse[];
  /** Klasse, deren main laeuft und auf die sich ein `aufruf` ohne Klassennamen bezieht */
  haupt: string;
  /** Quelle war ein Ausschnitt ohne Klasse (Anweisungen landen in main) */
  ausschnitt: boolean;
  /** Ausschnitt besteht nur aus Methoden (ohne Anweisungen, die laufen koennten) */
  nurMethoden?: boolean;
  /** Importe wie `java.awt.Color` oder `codedraw.*` (ohne `import` und `;`, `static` mitgenommen) */
  importe: string[];
}

const PRIMITIV = new Set(["int", "long", "double", "float", "boolean", "char", "byte", "short"]);
const MODIFIZIERER = new Set(["public", "private", "protected", "static", "final", "abstract", "native", "synchronized", "transient", "volatile", "strictfp", "default"]);
const ZUWEISUNG = new Set(["=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", ">>>="]);
const VORRANG: Record<string, number> = {
  "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, instanceof: 7,
  "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10,
};

export function typText(t: { name: string; dims: number }): string {
  return t.name + "[]".repeat(t.dims);
}

class Parser {
  i = 0;
  /** Tiefe verschachtelter switch-Ausdruecke (dort ist `yield` ein Schluesselwort) */
  switchAusdrTiefe = 0;

  constructor(
    private t: Token[],
    private q: number,
  ) {}

  sieh(k = 0): Token {
    return this.t[Math.min(this.i + k, this.t.length - 1)];
  }
  ist(text: string, k = 0): boolean {
    const x = this.sieh(k);
    return (x.art === "op" || x.art === "wort") && x.text === text;
  }
  istName(k = 0): boolean {
    return this.sieh(k).art === "name";
  }
  letztes(): Token {
    return this.t[this.i - 1];
  }
  fehler(meldung: string, pos?: number): never {
    throw new SyntaxFehler(meldung, pos ?? this.sieh().von);
  }
  nimm(text?: string): Token {
    const x = this.sieh();
    if (text !== undefined && !this.ist(text)) {
      if (text === ";" || text === ")" || text === "]") {
        const vor = this.i > 0 ? this.letztes().bis : x.von;
        this.fehler(`Hier fehlt \`${text}\``, vor);
      }
      this.fehler(x.art === "ende" ? `Der Code hört zu früh auf: \`${text}\` fehlt` : `\`${text}\` erwartet, aber \`${x.text}\` gefunden`);
    }
    if (x.art === "ende") this.fehler("Der Code hört mitten in einer Anweisung auf");
    this.i++;
    return x;
  }
  nimmName(): Token {
    const x = this.sieh();
    if (x.art !== "name") this.fehler(x.art === "ende" ? "Der Code hört zu früh auf: ein Name fehlt" : `Name erwartet, aber \`${x.text}\` gefunden`);
    this.i++;
    return x;
  }
  bereich(von: number): Bereich & { q: number } {
    return { von, bis: this.letztes().bis, q: this.q };
  }

  // ---------------------------------------------------------------- Programm und Klassen

  ueberspringeAnnotation() {
    // @Name, @Name(...)
    this.nimm("@");
    if (this.ist("interface")) throw new NichtUnterstuetzt("Eigene Annotationen", this.sieh().von);
    this.nimmName();
    while (this.ist(".") && this.istName(1)) {
      this.i += 2;
    }
    if (this.ist("(")) {
      let tiefe = 0;
      do {
        if (this.ist("(")) tiefe++;
        if (this.ist(")")) tiefe--;
        this.nimm();
      } while (tiefe > 0);
    }
  }

  modifizierer(): { statisch: boolean; final: boolean; von: number } {
    const von = this.sieh().von;
    let statisch = false;
    let final = false;
    for (;;) {
      if (this.ist("@")) {
        this.ueberspringeAnnotation();
        continue;
      }
      const x = this.sieh();
      if (x.art === "wort" && MODIFIZIERER.has(x.text)) {
        if (x.text === "static") statisch = true;
        if (x.text === "final") final = true;
        this.i++;
        continue;
      }
      if (x.art === "name" && x.text === "sealed" && (this.istName(1) || this.ist("class", 1))) {
        throw new NichtUnterstuetzt("Versiegelte Klassen", x.von);
      }
      break;
    }
    return { statisch, final, von };
  }

  programm(): Programm {
    // package ueberspringen, import merken
    const importe: string[] = [];
    for (;;) {
      if (this.ist("package") || this.ist("import")) {
        const istImport = this.ist("import");
        const von = this.i + 1;
        while (!this.ist(";")) this.nimm();
        if (istImport)
          importe.push(
            this.t
              .slice(von, this.i)
              .map((x) => x.text)
              .join(""),
          );
        this.nimm(";");
        continue;
      }
      if (this.ist(";")) {
        this.i++;
        continue;
      }
      break;
    }
    const klassen: Klasse[] = [];
    const lose: Anweisung[] = [];
    const loseMethoden: Methode[] = [];
    let oeffentlich: string | null = null;
    while (this.sieh().art !== "ende") {
      const start = this.i;
      const m = this.modifizierer();
      const oeff = this.t.slice(start, this.i).some((x) => x.text === "public");
      if (this.ist("class")) {
        const k = this.klasse(m.von);
        if (oeff && !oeffentlich) oeffentlich = k.name;
        klassen.push(k);
        continue;
      }
      if (this.ist("interface") || this.ist("enum") || (this.sieh().text === "record" && this.istName(1) && this.ist("(", 2))) {
        throw new NichtUnterstuetzt(`\`${this.sieh().text}\` (Interfaces, Aufzählungen und Records) zeigt die Ablaufansicht nicht`, this.sieh().von);
      }
      if (this.istMethodenKopf()) {
        loseMethoden.push(this.methode("Main", true, m.von));
        continue;
      }
      this.i = start;
      lose.push(this.anweisung());
    }
    if (klassen.length > 0 && lose.length === 0 && loseMethoden.length === 0) {
      return { klassen, haupt: oeffentlich ?? klassen[0].name, ausschnitt: false, importe };
    }
    if (klassen.some((k) => k.name === "Main")) throw new NichtUnterstuetzt("Eine eigene Klasse `Main` neben losen Anweisungen");
    // Ausschnitt: Anweisungen (und lose Methoden) kommen in eine ergaenzte Klasse Main
    const rumpf: AnweisungVon<"block"> = {
      k: "block",
      anw: lose,
      von: lose.length ? lose[0].von : 0,
      bis: lose.length ? lose[lose.length - 1].bis : 0,
      q: this.q,
    };
    const main: Methode = {
      name: "main",
      klasse: "Main",
      statisch: true,
      rueck: { name: "void", dims: 0, von: -1, bis: -1 },
      params: [{ typ: { name: "String", dims: 1, von: -1, bis: -1 }, name: "args", varargs: false, von: -1, bis: -1 }],
      rumpf,
      kopfVon: -1,
      kopfBis: -1,
    };
    const haupt: Klasse = {
      name: "Main",
      methoden: lose.length > 0 ? [main, ...loseMethoden] : loseMethoden,
      felder: [],
      statischeBloecke: [],
      konstruktoren: 0,
      von: 0,
      bis: 0,
    };
    return { klassen: [haupt, ...klassen], haupt: "Main", ausschnitt: true, nurMethoden: lose.length === 0 && !loseMethoden.some((x) => x.name === "main"), importe };
  }

  /** Steht hier (nach Modifizierern) ein Methodenkopf `Typ name(`? */
  istMethodenKopf(): boolean {
    const merk = this.i;
    try {
      if (this.ist("<")) return true;
      if (!this.ist("void") && !this.istTypStart()) return false;
      this.typ(true);
      return this.istName() && this.ist("(", 1);
    } catch (e) {
      if (e instanceof NichtUnterstuetzt) return false;
      return false;
    } finally {
      this.i = merk;
    }
  }

  istTypStart(): boolean {
    const x = this.sieh();
    return (x.art === "wort" && PRIMITIV.has(x.text)) || x.art === "name";
  }

  klasse(von: number): Klasse {
    this.nimm("class");
    const name = this.nimmName().text;
    if (this.ist("<")) throw new NichtUnterstuetzt("Generische Klassen (`class X<T>`)", this.sieh().von);
    if (this.ist("extends") || this.ist("implements"))
      throw new NichtUnterstuetzt("Vererbung (`extends`) und Interfaces (`implements`) zeigt die Ablaufansicht nicht", this.sieh().von);
    this.nimm("{");
    const k: Klasse = { name, methoden: [], felder: [], statischeBloecke: [], konstruktoren: 0, von, bis: von };
    const innere: Klasse[] = [];
    while (!this.ist("}")) {
      if (this.sieh().art === "ende") this.fehler(`Die Klasse \`${name}\` wird nicht mit \`}\` geschlossen`);
      if (this.ist(";")) {
        this.i++;
        continue;
      }
      const m = this.modifizierer();
      if (this.ist("class")) {
        innere.push(this.klasse(m.von));
        continue;
      }
      if (this.ist("interface") || this.ist("enum") || (this.sieh().text === "record" && this.istName(1))) {
        throw new NichtUnterstuetzt(`\`${this.sieh().text}\` (Interfaces, Aufzählungen und Records) zeigt die Ablaufansicht nicht`, this.sieh().von);
      }
      if (this.ist("{")) {
        const b = this.block();
        if (m.statisch) k.statischeBloecke.push(b);
        continue;
      }
      if (this.istName() && this.sieh().text === name && this.ist("(", 1)) {
        // Konstruktor: nur merken (Objekte zeigt die Ansicht nicht)
        this.methode(name, false, m.von, true);
        k.konstruktoren++;
        continue;
      }
      if (this.istMethodenKopf()) {
        k.methoden.push(this.methode(name, m.statisch, m.von));
        continue;
      }
      const typ = this.typ(false);
      const dekl = this.deklaratoren();
      this.nimm(";");
      k.felder.push({ statisch: m.statisch, final: m.final, typ, dekl, von: m.von, bis: this.letztes().bis });
    }
    this.nimm("}");
    k.bis = this.letztes().bis;
    // innere (statische) Klassen werden wie eigene Klassen behandelt
    return Object.assign(k, { innere });
  }

  methode(klasse: string, statisch: boolean, von: number, konstruktor = false): Methode {
    if (this.ist("<")) throw new NichtUnterstuetzt("Generische Methoden (`<T>`)", this.sieh().von);
    const rueck: TypName = konstruktor ? { name: "void", dims: 0, von: this.sieh().von, bis: this.sieh().von } : this.typ(true);
    const name = this.nimmName().text;
    this.nimm("(");
    const params: Parameter[] = [];
    if (!this.ist(")")) {
      for (;;) {
        const pv = this.sieh().von;
        this.modifizierer();
        const typ = this.typ(false);
        let varargs = false;
        if (this.ist("...")) {
          this.i++;
          varargs = true;
          typ.dims++;
        }
        const pn = this.nimmName();
        while (this.ist("[") && this.ist("]", 1)) {
          this.i += 2;
          typ.dims++;
        }
        params.push({ typ, name: pn.text, varargs, von: pv, bis: this.letztes().bis });
        if (this.ist(",")) {
          this.i++;
          continue;
        }
        break;
      }
    }
    this.nimm(")");
    while (this.ist("[") && this.ist("]", 1)) {
      this.i += 2;
      rueck.dims++;
    }
    let kopfBis = this.letztes().bis;
    if (this.ist("throws")) {
      this.i++;
      this.typ(false);
      while (this.ist(",")) {
        this.i++;
        this.typ(false);
      }
      kopfBis = this.letztes().bis;
    }
    let rumpf: AnweisungVon<"block"> | null = null;
    if (this.ist(";")) this.i++;
    else rumpf = this.block();
    return { name, klasse, statisch, rueck, params, rumpf, kopfVon: von, kopfBis };
  }

  /** Typ: primitiv, void (nur mit `mitVoid`) oder (qualifizierter) Klassenname, dazu `[]`. */
  typ(mitVoid: boolean): TypName {
    const x = this.sieh();
    const von = x.von;
    let name: string;
    let paket: string | undefined;
    if (x.art === "wort" && (PRIMITIV.has(x.text) || (mitVoid && x.text === "void"))) {
      name = x.text;
      this.i++;
    } else if (x.art === "name") {
      name = x.text;
      this.i++;
      while (this.ist(".") && this.istName(1)) {
        paket = paket === undefined ? name : `${paket}.${name}`;
        name = this.sieh(1).text;
        this.i += 2;
      }
      if (this.ist("<")) throw new NichtUnterstuetzt(`Generics wie \`${name}<…>\` (etwa \`ArrayList<Integer>\`) zeigt die Ablaufansicht (noch) nicht`, this.sieh().von);
    } else {
      this.fehler(x.art === "ende" ? "Der Code hört zu früh auf: ein Typ fehlt" : `Typ erwartet, aber \`${x.text}\` gefunden`);
    }
    let dims = 0;
    while (this.ist("[") && this.ist("]", 1)) {
      this.i += 2;
      dims++;
    }
    return paket === undefined ? { name, dims, von, bis: this.letztes().bis } : { name, dims, paket, von, bis: this.letztes().bis };
  }

  deklaratoren(): Deklarator[] {
    const d: Deklarator[] = [];
    for (;;) {
      const n = this.nimmName();
      let dims = 0;
      while (this.ist("[") && this.ist("]", 1)) {
        this.i += 2;
        dims++;
      }
      let init: Ausdruck | null = null;
      if (this.ist("=")) {
        this.i++;
        init = this.ist("{") ? this.arrayInit() : this.ausdruck();
      }
      d.push({ name: n.text, nameVon: n.von, dims, init, von: n.von, bis: this.letztes().bis });
      if (this.ist(",")) {
        this.i++;
        continue;
      }
      return d;
    }
  }

  // ---------------------------------------------------------------- Anweisungen

  block(): AnweisungVon<"block"> {
    const von = this.nimm("{").von;
    const anw: Anweisung[] = [];
    while (!this.ist("}")) {
      if (this.sieh().art === "ende") this.fehler("Ein Block wird nicht mit `}` geschlossen", von);
      anw.push(this.anweisung());
    }
    this.nimm("}");
    return { k: "block", anw, ...this.bereich(von) };
  }

  /** Beginnt hier eine Deklaration `Typ name ...`? (ohne Tokens zu verbrauchen) */
  istDeklaration(): boolean {
    if (this.ist("final")) return true;
    if (this.sieh().text === "var" && this.istName() && this.istName(1)) return true;
    if (!this.istTypStart()) return false;
    const merk = this.i;
    try {
      if (this.istName() && this.ist("<", 1)) {
        // am Anfang einer Anweisung kann `Name <` nur ein generischer Typ sein
        throw new NichtUnterstuetzt(`Generics wie \`${this.sieh().text}<…>\` (etwa \`ArrayList<Integer>\`) zeigt die Ablaufansicht (noch) nicht`, this.sieh().von);
      }
      this.typ(false);
      return this.istName() && (this.ist("=", 1) || this.ist(";", 1) || this.ist(",", 1) || this.ist("[", 1) || this.ist(":", 1));
    } catch (e) {
      if (e instanceof NichtUnterstuetzt) throw e;
      return false;
    } finally {
      this.i = merk;
    }
  }

  deklaration(): AnweisungVon<"dekl"> {
    const von = this.sieh().von;
    const m = this.modifizierer();
    let typ: TypName | null;
    if (this.sieh().text === "var" && this.istName() && this.istName(1)) {
      this.i++;
      typ = null;
    } else typ = this.typ(false);
    const dekl = this.deklaratoren();
    return { k: "dekl", typ, final: m.final, dekl, ...this.bereich(von) };
  }

  anweisung(): Anweisung {
    const x = this.sieh();
    const von = x.von;
    if (this.ist("{")) return this.block();
    if (this.ist(";")) {
      this.i++;
      return { k: "leer", ...this.bereich(von) };
    }
    if (x.art === "wort") {
      switch (x.text) {
        case "if": {
          this.i++;
          this.nimm("(");
          const bed = this.ausdruck();
          this.nimm(")");
          const kopfBis = this.letztes().bis;
          const dann = this.anweisung();
          let sonst: Anweisung | null = null;
          if (this.ist("else")) {
            this.i++;
            sonst = this.anweisung();
          }
          return { k: "if", bed, dann, sonst, kopfBis, ...this.bereich(von) };
        }
        case "while": {
          this.i++;
          this.nimm("(");
          const bed = this.ausdruck();
          this.nimm(")");
          const kopfBis = this.letztes().bis;
          const rumpf = this.anweisung();
          return { k: "while", bed, rumpf, kopfBis, ...this.bereich(von) };
        }
        case "do": {
          this.i++;
          const rumpf = this.anweisung();
          this.nimm("while");
          this.nimm("(");
          const bed = this.ausdruck();
          this.nimm(")");
          this.nimm(";");
          return { k: "do", rumpf, bed, ...this.bereich(von) };
        }
        case "for":
          return this.forAnweisung();
        case "switch": {
          const s = this.switchTeil(false);
          return { k: "switch", ...s, ...this.bereich(von) };
        }
        case "break":
        case "continue": {
          this.i++;
          const label = this.istName() ? this.nimmName().text : null;
          this.nimm(";");
          return { k: x.text, label, ...this.bereich(von) };
        }
        case "return": {
          this.i++;
          const ausdr = this.ist(";") ? null : this.ausdruck();
          this.nimm(";");
          return { k: "return", ausdr, ...this.bereich(von) };
        }
        case "throw": {
          this.i++;
          const ausdr = this.ausdruck();
          this.nimm(";");
          return { k: "throw", ausdr, ...this.bereich(von) };
        }
        case "assert": {
          this.i++;
          const bed = this.ausdruck();
          let meldung: Ausdruck | null = null;
          if (this.ist(":")) {
            this.i++;
            meldung = this.ausdruck();
          }
          this.nimm(";");
          return { k: "assert", bed, meldung, ...this.bereich(von) };
        }
        case "try":
          throw new NichtUnterstuetzt("`try`/`catch` (Ausnahmen abfangen) zeigt die Ablaufansicht (noch) nicht", x.von);
        case "synchronized":
          throw new NichtUnterstuetzt("`synchronized` (Threads) zeigt die Ablaufansicht nicht", x.von);
        case "class":
        case "interface":
        case "enum":
        case "abstract":
          throw new NichtUnterstuetzt("Klassen innerhalb einer Methode zeigt die Ablaufansicht nicht", x.von);
        case "else":
          this.fehler("`else` ohne passendes `if` (steht vielleicht ein `;` nach der Bedingung?)");
          break;
        case "case":
        case "default":
          this.fehler(`\`${x.text}\` steht außerhalb eines \`switch\``);
      }
    }
    if (x.art === "name" && this.ist(":", 1)) {
      this.i += 2;
      const anw = this.anweisung();
      return { k: "label", label: x.text, anw, ...this.bereich(von) };
    }
    if (x.art === "name" && x.text === "yield" && this.switchAusdrTiefe > 0 && !this.ist("=", 1) && !this.ist("(", 1) && !this.ist(".", 1)) {
      this.i++;
      const ausdr = this.ausdruck();
      this.nimm(";");
      return { k: "yield", ausdr, ...this.bereich(von) };
    }
    if (this.istDeklaration()) {
      const d = this.deklaration();
      this.nimm(";");
      d.bis = this.letztes().bis;
      return d;
    }
    return this.ausdruckAnweisung();
  }

  ausdruckAnweisung(): AnweisungVon<"ausdr"> {
    const von = this.sieh().von;
    const ausdr = this.ausdruck();
    if (!["zuweisung", "incdec", "aufruf", "neu", "switchAusdr"].includes(ausdr.k)) {
      this.fehler("Das ist keine vollständige Anweisung: Ein Ausdruck allein bewirkt nichts (fehlt eine Zuweisung oder ein Aufruf?)", ausdr.von);
    }
    this.nimm(";");
    return { k: "ausdr", ausdr, ...this.bereich(von) };
  }

  forAnweisung(): Anweisung {
    const von = this.nimm("for").von;
    this.nimm("(");
    let init: Anweisung[] = [];
    if (this.istDeklaration()) {
      const dv = this.sieh().von;
      const m = this.modifizierer();
      let typ: TypName | null;
      if (this.sieh().text === "var" && this.istName() && this.istName(1)) {
        this.i++;
        typ = null;
      } else typ = this.typ(false);
      if (this.istName() && this.ist(":", 1)) {
        const n = this.nimmName();
        this.nimm(":");
        const iter = this.ausdruck();
        this.nimm(")");
        const kopfBis = this.letztes().bis;
        const rumpf = this.anweisung();
        return { k: "foreach", typ, name: n.text, nameVon: n.von, iter, rumpf, kopfBis, final: m.final, ...this.bereich(von) };
      }
      const dekl = this.deklaratoren();
      init = [{ k: "dekl", typ, final: m.final, dekl, ...this.bereich(dv) }];
    } else if (!this.ist(";")) {
      for (;;) {
        const av = this.sieh().von;
        const a = this.ausdruck();
        init.push({ k: "ausdr", ausdr: a, ...this.bereich(av) });
        if (this.ist(",")) {
          this.i++;
          continue;
        }
        break;
      }
    }
    this.nimm(";");
    const bed = this.ist(";") ? null : this.ausdruck();
    this.nimm(";");
    const update: Ausdruck[] = [];
    if (!this.ist(")")) {
      for (;;) {
        update.push(this.ausdruck());
        if (this.ist(",")) {
          this.i++;
          continue;
        }
        break;
      }
    }
    this.nimm(")");
    const kopfBis = this.letztes().bis;
    const rumpf = this.anweisung();
    return { k: "for", init, bed, update, rumpf, kopfBis, ...this.bereich(von) };
  }

  switchTeil(alsAusdruck: boolean): { ausdr: Ausdruck; faelle: Fall[]; pfeil: boolean; kopfBis: number } {
    this.nimm("switch");
    this.nimm("(");
    const ausdr = this.ausdruck();
    this.nimm(")");
    const kopfBis = this.letztes().bis;
    this.nimm("{");
    const faelle: Fall[] = [];
    let pfeil: boolean | null = null;
    if (alsAusdruck) this.switchAusdrTiefe++;
    try {
      while (!this.ist("}")) {
        const fv = this.sieh().von;
        let labels: Ausdruck[] | null;
        if (this.ist("default")) {
          this.i++;
          labels = null;
        } else {
          this.nimm("case");
          labels = [];
          for (;;) {
            if (this.ist("default")) {
              this.i++;
              labels = null;
              break;
            }
            if (this.istName() && (this.ist("(", 1) || this.istName(1)) && !this.ist("->", 1))
              throw new NichtUnterstuetzt("Muster in `case` (Pattern Matching)", this.sieh().von);
            labels.push(this.bedingt());
            if (this.ist(",")) {
              this.i++;
              continue;
            }
            break;
          }
        }
        if (this.ist("->")) {
          if (pfeil === false) this.fehler("`case … ->` und `case … :` dürfen nicht gemischt werden");
          pfeil = true;
          this.i++;
          const kopfBis2 = this.letztes().bis;
          if (this.ist("{")) {
            const b = this.block();
            faelle.push({ labels, anw: [b], kopfBis: kopfBis2, von: fv, bis: b.bis });
          } else if (this.ist("throw")) {
            const a = this.anweisung();
            faelle.push({ labels, anw: [a], kopfBis: kopfBis2, von: fv, bis: a.bis });
          } else if (alsAusdruck) {
            const w = this.ausdruck();
            this.nimm(";");
            faelle.push({ labels, anw: [], wert: w, kopfBis: kopfBis2, von: fv, bis: this.letztes().bis });
          } else {
            const a = this.ausdruckAnweisung();
            faelle.push({ labels, anw: [a], kopfBis: kopfBis2, von: fv, bis: a.bis });
          }
          continue;
        }
        if (pfeil === true) this.fehler("`case … ->` und `case … :` dürfen nicht gemischt werden");
        pfeil = false;
        this.nimm(":");
        const kopfBis2 = this.letztes().bis;
        const anw: Anweisung[] = [];
        while (!this.ist("case") && !this.ist("default") && !this.ist("}")) {
          if (this.sieh().art === "ende") this.fehler("`switch` wird nicht mit `}` geschlossen");
          anw.push(this.anweisung());
        }
        faelle.push({ labels, anw, kopfBis: kopfBis2, von: fv, bis: this.letztes().bis });
      }
    } finally {
      if (alsAusdruck) this.switchAusdrTiefe--;
    }
    this.nimm("}");
    return { ausdr, faelle, pfeil: pfeil === true, kopfBis };
  }

  // ---------------------------------------------------------------- Ausdruecke

  ausdruck(): Ausdruck {
    return this.zuweisung();
  }

  zuweisung(): Ausdruck {
    if (this.istName() && this.ist("->", 1)) throw new NichtUnterstuetzt("Lambdas (`x -> …`) zeigt die Ablaufansicht nicht", this.sieh().von);
    const links = this.bedingt();
    const op = this.sieh();
    if (op.art === "op" && ZUWEISUNG.has(op.text)) {
      if (links.k !== "name" && links.k !== "feld" && links.k !== "index")
        this.fehler("Links von `" + op.text + "` muss eine Variable stehen", links.von);
      this.i++;
      const wert = this.ist("{") ? this.fehler("Ein Array-Initialisierer `{…}` geht nur bei der Deklaration (sonst `new int[]{…}`)") : this.zuweisung();
      return { k: "zuweisung", op: op.text, ziel: links, wert, von: links.von, bis: wert.bis, q: this.q };
    }
    return links;
  }

  bedingt(): Ausdruck {
    const bed = this.binaer(1);
    if (!this.ist("?")) return bed;
    this.i++;
    const dann = this.ausdruck();
    this.nimm(":");
    const sonst = this.bedingt();
    return { k: "bedingt", bed, dann, sonst, von: bed.von, bis: sonst.bis, q: this.q };
  }

  binaer(min: number): Ausdruck {
    let links = this.unaer();
    for (;;) {
      const x = this.sieh();
      const p = (x.art === "op" || x.text === "instanceof") && x.art !== "ende" ? VORRANG[x.text] : undefined;
      if (p === undefined || p < min) return links;
      if (x.text === "instanceof") throw new NichtUnterstuetzt("`instanceof` zeigt die Ablaufansicht (noch) nicht", x.von);
      this.i++;
      const rechts = this.binaer(p + 1);
      links = { k: "binaer", op: x.text, links, rechts, von: links.von, bis: rechts.bis, q: this.q };
    }
  }

  unaer(): Ausdruck {
    const x = this.sieh();
    const von = x.von;
    if (this.ist("++") || this.ist("--")) {
      this.i++;
      const ziel = this.unaer();
      if (ziel.k !== "name" && ziel.k !== "feld" && ziel.k !== "index") this.fehler(`\`${x.text}\` geht nur mit einer Variable`, ziel.von);
      return { k: "incdec", op: x.text as "++" | "--", praefix: true, ziel, ...this.bereich(von) };
    }
    if (this.ist("+") || this.ist("-") || this.ist("!") || this.ist("~")) {
      this.i++;
      const arg = this.unaer();
      return { k: "unaer", op: x.text as "-" | "+" | "!" | "~", arg, ...this.bereich(von) };
    }
    if (this.ist("(")) {
      const cast = this.istCast();
      if (cast === "lambda") throw new NichtUnterstuetzt("Lambdas (`(…) -> …`) zeigt die Ablaufansicht nicht", von);
      if (cast) {
        this.i++;
        const typ = this.typ(false);
        this.nimm(")");
        const arg = this.unaer();
        return { k: "cast", typ, arg, ...this.bereich(von) };
      }
    }
    return this.postfix(this.primaer());
  }

  /** Nach `(`: Cast, Lambda oder Klammerausdruck? */
  istCast(): boolean | "lambda" {
    // passende schliessende Klammer suchen
    let tiefe = 0;
    let j = this.i;
    for (; j < this.t.length; j++) {
      const x = this.t[j];
      if (x.art === "op" && x.text === "(") tiefe++;
      else if (x.art === "op" && x.text === ")") {
        tiefe--;
        if (tiefe === 0) break;
      } else if (x.art === "ende") return false;
    }
    const danach = this.t[j + 1];
    if (danach && danach.art === "op" && danach.text === "->") return "lambda";
    const erst = this.sieh(1);
    // (int) x, (double[]) y
    if (erst.art === "wort" && PRIMITIV.has(erst.text)) {
      let k = 2;
      while (this.ist("[", k) && this.ist("]", k + 1)) k += 2;
      return this.ist(")", k);
    }
    if (erst.art !== "name") return false;
    // (Name.Name[]) gefolgt von etwas, das kein binaerer Operator ist
    let k = 2;
    while (this.ist(".", k) && this.istName(k + 1)) k += 2;
    while (this.ist("[", k) && this.ist("]", k + 1)) k += 2;
    if (!this.ist(")", k)) return false;
    const f = this.sieh(k + 1);
    if (f.art === "name" || f.art === "int" || f.art === "long" || f.art === "double" || f.art === "float" || f.art === "char" || f.art === "string") return true;
    if (f.art === "wort" && ["this", "new", "super", "true", "false", "null", "switch"].includes(f.text)) return true;
    return f.art === "op" && (f.text === "(" || f.text === "!" || f.text === "~");
  }

  postfix(e: Ausdruck): Ausdruck {
    for (;;) {
      if (this.ist(".")) {
        this.i++;
        if (this.ist("new")) throw new NichtUnterstuetzt("Innere Objekte (`x.new …`)", this.sieh().von);
        if (this.ist("class")) throw new NichtUnterstuetzt("`.class` (Reflexion)", this.sieh().von);
        if (this.ist("<")) throw new NichtUnterstuetzt("Generische Methodenaufrufe (`x.<T>f()`)", this.sieh().von);
        if (this.ist("this") || this.ist("super")) throw new NichtUnterstuetzt("`this`/`super` (Objekte)", this.sieh().von);
        const n = this.nimmName();
        if (this.ist("(")) {
          const args = this.argumente();
          e = { k: "aufruf", ziel: e, name: n.text, args, nameVon: n.von, von: e.von, bis: this.letztes().bis, q: this.q };
        } else e = { k: "feld", ziel: e, name: n.text, von: e.von, bis: n.bis, q: this.q };
        continue;
      }
      if (this.ist("[")) {
        this.i++;
        const index = this.ausdruck();
        this.nimm("]");
        e = { k: "index", ziel: e, index, von: e.von, bis: this.letztes().bis, q: this.q };
        continue;
      }
      if (this.ist("++") || this.ist("--")) {
        const op = this.nimm().text as "++" | "--";
        if (e.k !== "name" && e.k !== "feld" && e.k !== "index") this.fehler(`\`${op}\` geht nur mit einer Variable`, e.von);
        e = { k: "incdec", op, praefix: false, ziel: e, von: e.von, bis: this.letztes().bis, q: this.q };
        continue;
      }
      if (this.ist("::")) throw new NichtUnterstuetzt("Methodenreferenzen (`::`) zeigt die Ablaufansicht nicht", this.sieh().von);
      return e;
    }
  }

  argumente(): Ausdruck[] {
    this.nimm("(");
    const args: Ausdruck[] = [];
    if (!this.ist(")")) {
      for (;;) {
        args.push(this.ausdruck());
        if (this.ist(",")) {
          this.i++;
          continue;
        }
        break;
      }
    }
    this.nimm(")");
    return args;
  }

  arrayInit(): ArrayInit {
    const von = this.nimm("{").von;
    const elemente: Ausdruck[] = [];
    while (!this.ist("}")) {
      elemente.push(this.ist("{") ? this.arrayInit() : this.ausdruck());
      if (this.ist(",")) {
        this.i++;
        continue;
      }
      break;
    }
    this.nimm("}");
    return { k: "arrayInit", elemente, ...this.bereich(von) };
  }

  primaer(): Ausdruck {
    const x = this.sieh();
    const von = x.von;
    switch (x.art) {
      case "int":
        this.i++;
        if (x.wert === -2147483648 && !/^0[xXbB0-7]/.test(x.text.replace(/_/g, "")) && !(this.i >= 2 && this.t[this.i - 2].text === "-"))
          this.fehler(`Die Zahl ${x.text} ist zu groß für \`int\` (höchstens 2147483647)`, von);
        return { k: "lit", typ: "int", wert: x.wert as number, ...this.bereich(von) };
      case "long":
        this.i++;
        return { k: "lit", typ: "long", wert: x.wert as bigint, ...this.bereich(von) };
      case "float":
      case "double":
        this.i++;
        return { k: "lit", typ: x.art, wert: x.wert as number, ...this.bereich(von) };
      case "char":
        this.i++;
        return { k: "lit", typ: "char", wert: x.wert as number, ...this.bereich(von) };
      case "string":
        this.i++;
        return { k: "lit", typ: "String", wert: x.wert as string, ...this.bereich(von) };
      case "name": {
        if (this.ist("->", 1)) throw new NichtUnterstuetzt("Lambdas (`x -> …`) zeigt die Ablaufansicht nicht", von);
        this.i++;
        if (this.ist("(")) {
          const args = this.argumente();
          return { k: "aufruf", ziel: null, name: x.text, args, nameVon: von, ...this.bereich(von) };
        }
        return { k: "name", name: x.text, ...this.bereich(von) };
      }
      case "wort":
        switch (x.text) {
          case "true":
          case "false":
            this.i++;
            return { k: "lit", typ: "boolean", wert: x.text === "true", ...this.bereich(von) };
          case "null":
            this.i++;
            return { k: "lit", typ: "null", wert: null, ...this.bereich(von) };
          case "new":
            return this.neu();
          case "this":
          case "super":
            throw new NichtUnterstuetzt("`this` und `super` gehören zu Objekten; Klassen mit Objekten zeigt die Ablaufansicht (noch) nicht", von);
          case "switch": {
            const s = this.switchTeil(true);
            return { k: "switchAusdr", ...s, ...this.bereich(von) };
          }
        }
        if (PRIMITIV.has(x.text) && this.ist(".", 1)) throw new NichtUnterstuetzt("`.class` (Reflexion)", von);
        break;
      case "op":
        if (x.text === "(") {
          this.i++;
          const inner = this.ausdruck();
          this.nimm(")");
          const b = this.bereich(von);
          inner.aussen = { von: b.von, bis: b.bis };
          return { k: "klammer", inner, ...b };
        }
        if (x.text === "{") this.fehler("Ein Array-Initialisierer `{…}` geht nur bei der Deklaration (sonst `new int[]{…}`)");
        break;
      case "ende":
        this.fehler("Der Code hört zu früh auf: hier fehlt noch ein Ausdruck");
    }
    this.fehler(`Hier wird ein Wert erwartet, aber \`${x.text}\` gefunden`);
  }

  neu(): Ausdruck {
    const von = this.nimm("new").von;
    const x = this.sieh();
    let elem: TypName;
    if (x.art === "wort" && PRIMITIV.has(x.text)) {
      this.i++;
      elem = { name: x.text, dims: 0, von: x.von, bis: x.bis };
    } else if (x.art === "name") {
      let name = x.text;
      let paket: string | undefined;
      this.i++;
      while (this.ist(".") && this.istName(1)) {
        paket = paket === undefined ? name : `${paket}.${name}`;
        name = this.sieh(1).text;
        this.i += 2;
      }
      if (this.ist("<"))
        throw new NichtUnterstuetzt(`\`new ${name}<…>\`: Generics und Collections wie ArrayList zeigt die Ablaufansicht (noch) nicht`, x.von);
      elem = paket === undefined ? { name, dims: 0, von: x.von, bis: this.letztes().bis } : { name, dims: 0, paket, von: x.von, bis: this.letztes().bis };
    } else this.fehler("Nach `new` fehlt ein Typ");
    if (this.ist("[")) {
      const dimAusdr: Ausdruck[] = [];
      let dims = 0;
      while (this.ist("[")) {
        this.i++;
        if (this.ist("]")) {
          this.i++;
          dims++;
          continue;
        }
        if (dims > dimAusdr.length) this.fehler("Nach einer leeren Dimension `[]` darf keine Größe mehr folgen");
        dimAusdr.push(this.ausdruck());
        this.nimm("]");
        dims++;
      }
      let init: ArrayInit | null = null;
      if (this.ist("{")) {
        if (dimAusdr.length) this.fehler("Bei `new int[n]` gibt es keinen Initialisierer `{…}`; entweder die Größe oder die Werte angeben");
        init = this.arrayInit();
      } else if (dimAusdr.length === 0) this.fehler("Bei `new` für ein Array fehlt die Größe, etwa `new int[3]`");
      return { k: "neuArray", elem, dimAusdr, dims, init, ...this.bereich(von) };
    }
    const args = this.argumente();
    if (this.ist("{")) throw new NichtUnterstuetzt("Anonyme Klassen (`new X() { … }`) zeigt die Ablaufansicht nicht", this.sieh().von);
    return { k: "neu", typ: elem, args, ...this.bereich(von) };
  }
}

/** Flacht verschachtelte (statische) Klassen ab. */
function alleKlassen(k: Klasse & { innere?: Klasse[] }): Klasse[] {
  const innere = k.innere ?? [];
  delete k.innere;
  return [k, ...innere.flatMap(alleKlassen)];
}

export function parseProgramm(quelle: string): Programm {
  const p = new Parser(lexe(quelle), 0);
  const prog = p.programm();
  prog.klassen = prog.klassen.flatMap((k) => alleKlassen(k as Klasse & { innere?: Klasse[] }));
  return prog;
}

/**
 * Zusatzcode (`vorher`, `aufruf`) mit eigenem Quellindex. Ist der ganze Text ein Ausdruck (ohne oder mit `;`), kommt
 * er als Ausdruck zurueck (dann gibt es einen Rueckgabewert), sonst als Anweisungsliste.
 */
export function parseZusatz(text: string, q: number): { ausdruck: Ausdruck } | { anweisungen: Anweisung[] } {
  const tokens = lexe(text);
  try {
    const p = new Parser(tokens, q);
    const a = p.ausdruck();
    if (p.ist(";")) p.i++;
    if (p.sieh().art === "ende") return { ausdruck: a };
  } catch (e) {
    if (!(e instanceof SyntaxFehler)) throw e;
  }
  const p = new Parser(tokens, q);
  const anw: Anweisung[] = [];
  while (p.sieh().art !== "ende") anw.push(p.anweisung());
  return { anweisungen: anw };
}
