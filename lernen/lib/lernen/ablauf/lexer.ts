/**
 * Lexer fuer die Java-Teilmenge der Ablauf-Engine. Jedes Token kennt seinen Zeichenbereich [von, bis) in der Quelle,
 * damit Schritte genau auf Anweisungen und Teilausdruecke zeigen koennen. Kommentare und Leerraum fallen weg.
 */

export type TokenArt = "name" | "wort" | "int" | "long" | "float" | "double" | "char" | "string" | "op" | "ende";

export interface Token {
  art: TokenArt;
  /** Quelltext des Tokens (bei Literalen der rohe Text) */
  text: string;
  von: number;
  bis: number;
  /** Wert von Literalen: int/char/float/double als number, long als bigint, string als string */
  wert?: number | bigint | string;
}

/** Fehler im Quelltext (die Engine meldet ihn als `syntax`) */
export class SyntaxFehler extends Error {
  constructor(
    meldung: string,
    public pos: number,
  ) {
    super(meldung);
  }
}

/** Gueltiges Java, aber ausserhalb der Teilmenge (die Engine meldet es als `nichtUnterstuetzt`) */
export class NichtUnterstuetzt extends Error {
  constructor(
    meldung: string,
    public pos?: number,
  ) {
    super(meldung);
  }
}

export const SCHLUESSELWOERTER = new Set([
  "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do",
  "double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof",
  "int", "interface", "long", "native", "new", "package", "private", "protected", "public", "return", "short", "static",
  "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while",
  "true", "false", "null",
]);

const OPERATOREN = [
  ">>>=", "<<=", ">>=", ">>>", "...", "->", "::", "++", "--", "&&", "||", "==", "!=", "<=", ">=", "+=", "-=", "*=", "/=", "%=",
  "&=", "|=", "^=", "<<", ">>",
];
const EINZELN = "(){}[];,.@=<>!~?:+-*/&|^%";

function istNameStart(c: string): boolean {
  return /[A-Za-z_$À-￿]/.test(c);
}
function istNameTeil(c: string): boolean {
  return /[A-Za-z0-9_$À-￿]/.test(c);
}

/** Liest eine Escape-Sequenz ab `i` (zeigt auf den Backslash). */
function escape(q: string, i: number): { zeichen: string; laenge: number } {
  const c = q[i + 1];
  const einfach: Record<string, string> = { b: "\b", t: "\t", n: "\n", f: "\f", r: "\r", s: " ", '"': '"', "'": "'", "\\": "\\" };
  if (c !== undefined && c in einfach) return { zeichen: einfach[c], laenge: 2 };
  if (c === "u") {
    let j = i + 1;
    while (q[j] === "u") j++;
    const hex = q.slice(j, j + 4);
    if (!/^[0-9a-fA-F]{4}$/.test(hex)) throw new SyntaxFehler("Ungültige Unicode-Escape-Sequenz", i);
    return { zeichen: String.fromCharCode(parseInt(hex, 16)), laenge: j + 4 - i };
  }
  if (c !== undefined && /[0-7]/.test(c)) {
    const m = /^[0-3]?[0-7]{1,2}|^[0-7]/.exec(q.slice(i + 1, i + 4))!;
    let oktal = m[0];
    if (parseInt(oktal, 8) > 0o377) oktal = oktal.slice(0, 2);
    return { zeichen: String.fromCharCode(parseInt(oktal, 8)), laenge: 1 + oktal.length };
  }
  throw new SyntaxFehler("Ungültige Escape-Sequenz `\\" + (c ?? "") + "`", i);
}

/** Text-Block """...""": gemeinsame Einrueckung entfernen, Leerzeichen am Zeilenende weg, Escapes auswerten. */
function textBlock(q: string, start: number): { text: string; ende: number } {
  let i = start + 3;
  while (q[i] === " " || q[i] === "\t" || q[i] === "\f") i++;
  if (q[i] === "\r") i++;
  if (q[i] !== "\n") throw new SyntaxFehler("Nach `\"\"\"` muss eine neue Zeile beginnen", start);
  i++;
  const inhaltStart = i;
  let ende = -1;
  for (let j = i; j < q.length; j++) {
    if (q[j] === "\\") {
      j++;
      continue;
    }
    if (q.startsWith('"""', j)) {
      ende = j;
      break;
    }
  }
  if (ende < 0) throw new SyntaxFehler("Text-Block ohne schließendes `\"\"\"`", start);
  const roh = q.slice(inhaltStart, ende).replace(/\r\n?/g, "\n");
  const zeilen = roh.split("\n");
  // die letzte Zeile (vor dem schliessenden """) zaehlt fuer die Einrueckung mit, auch wenn sie leer ist
  const einrueckung = Math.min(
    ...zeilen.map((z, k) => (z.trim() === "" && k !== zeilen.length - 1 ? Infinity : z.length - z.trimStart().length)),
  );
  const text = zeilen.map((z) => z.slice(Number.isFinite(einrueckung) ? einrueckung : 0).replace(/[ \t\f]+$/, "")).join("\n");
  let out = "";
  for (let k = 0; k < text.length; k++) {
    if (text[k] === "\\") {
      if (text[k + 1] === "\n") {
        k++;
        continue;
      }
      const e = escape(text, k);
      out += e.zeichen;
      k += e.laenge - 1;
    } else out += text[k];
  }
  return { text: out, ende: ende + 3 };
}

/** Wandelt ein Ganzzahl-Literal (ohne Suffix, ohne Unterstriche) in einen BigInt. */
function ganzzahl(text: string): bigint {
  if (/^0[xX]/.test(text)) return BigInt("0x" + text.slice(2));
  if (/^0[bB]/.test(text)) return BigInt("0b" + text.slice(2));
  if (/^0[0-7]+$/.test(text)) return BigInt("0o" + text.slice(1));
  return BigInt(text);
}

export function lexe(q: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = q.length;
  while (i < n) {
    const c = q[i];
    if (c === " " || c === "\t" || c === "\n" || c === "\r" || c === "\f") {
      i++;
      continue;
    }
    if (c === "/" && q[i + 1] === "/") {
      while (i < n && q[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && q[i + 1] === "*") {
      const e = q.indexOf("*/", i + 2);
      if (e < 0) throw new SyntaxFehler("Kommentar `/*` wird nicht geschlossen", i);
      i = e + 2;
      continue;
    }
    const von = i;
    if (istNameStart(c)) {
      while (i < n && istNameTeil(q[i])) i++;
      const text = q.slice(von, i);
      tokens.push({ art: SCHLUESSELWOERTER.has(text) ? "wort" : "name", text, von, bis: i });
      continue;
    }
    if (/[0-9]/.test(c) || (c === "." && /[0-9]/.test(q[i + 1] ?? ""))) {
      tokens.push(zahl(q, i));
      i = tokens[tokens.length - 1].bis;
      continue;
    }
    if (c === '"') {
      if (q.startsWith('"""', i)) {
        const tb = textBlock(q, i);
        tokens.push({ art: "string", text: q.slice(von, tb.ende), von, bis: tb.ende, wert: tb.text });
        i = tb.ende;
        continue;
      }
      let s = "";
      i++;
      for (;;) {
        if (i >= n || q[i] === "\n") throw new SyntaxFehler("String wird nicht geschlossen (fehlt ein `\"`?)", von);
        if (q[i] === '"') break;
        if (q[i] === "\\") {
          const e = escape(q, i);
          s += e.zeichen;
          i += e.laenge;
        } else s += q[i++];
      }
      i++;
      tokens.push({ art: "string", text: q.slice(von, i), von, bis: i, wert: s });
      continue;
    }
    if (c === "'") {
      i++;
      let z: string;
      if (q[i] === "\\") {
        const e = escape(q, i);
        z = e.zeichen;
        i += e.laenge;
      } else if (q[i] === "'" || q[i] === "\n" || i >= n) {
        throw new SyntaxFehler("Leeres oder ungültiges Zeichenliteral", von);
      } else {
        // ein UTF-16-Zeichen (char)
        z = q[i++];
      }
      if (q[i] !== "'") throw new SyntaxFehler("Zeichenliteral wird nicht geschlossen (ein `char` enthält genau ein Zeichen)", von);
      i++;
      tokens.push({ art: "char", text: q.slice(von, i), von, bis: i, wert: z.charCodeAt(0) });
      continue;
    }
    const op = OPERATOREN.find((o) => q.startsWith(o, i));
    if (op) {
      tokens.push({ art: "op", text: op, von, bis: i + op.length });
      i += op.length;
      continue;
    }
    if (EINZELN.includes(c)) {
      tokens.push({ art: "op", text: c, von, bis: i + 1 });
      i++;
      continue;
    }
    if (c === "#" || c === "`") throw new SyntaxFehler(`Das Zeichen \`${c}\` gibt es in Java-Code nicht`, i);
    throw new SyntaxFehler(`Unerwartetes Zeichen \`${c}\``, i);
  }
  tokens.push({ art: "ende", text: "", von: n, bis: n });
  return tokens;
}

function zahl(q: string, start: number): Token {
  let i = start;
  const rest = q.slice(start);
  let m: RegExpExecArray | null;
  if ((m = /^0[xX][0-9a-fA-F_]+[lL]?/.exec(rest)) || (m = /^0[bB][01_]+[lL]?/.exec(rest))) {
    i += m[0].length;
    return ganzzahlToken(q, start, i, m[0]);
  }
  m = /^(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9][0-9_]*)(?:[eE][+-]?[0-9_]+)?[fFdDlL]?/.exec(rest)!;
  const roh = m[0];
  i += roh.length;
  if (istNameTeil(q[i] ?? "")) throw new SyntaxFehler(`Ungültige Zahl \`${q.slice(start, i + 1)}\``, start);
  const istGleitkomma = /[.eEfFdD]/.test(roh) && !/^0[xX]/.test(roh);
  if (!istGleitkomma) return ganzzahlToken(q, start, i, roh);
  const ohne = roh.replace(/_/g, "");
  const suffix = /[fFdD]$/.test(ohne) ? ohne[ohne.length - 1].toLowerCase() : "d";
  const zahlText = /[fFdD]$/.test(ohne) ? ohne.slice(0, -1) : ohne;
  const wert = Number(zahlText);
  if (suffix === "f") return { art: "float", text: roh, von: start, bis: i, wert: Math.fround(wert) };
  return { art: "double", text: roh, von: start, bis: i, wert };
}

function ganzzahlToken(q: string, von: number, bis: number, roh: string): Token {
  const lang = /[lL]$/.test(roh);
  const ohne = roh.replace(/_/g, "").replace(/[lL]$/, "");
  if (/_$/.test(roh.replace(/[lL]$/, ""))) throw new SyntaxFehler("Eine Zahl darf nicht mit `_` enden", von);
  const b = ganzzahl(ohne);
  const dezimal = !/^0[xXbB]/.test(ohne) && !/^0[0-7]+$/.test(ohne);
  if (lang) {
    if (dezimal ? b > BigInt("9223372036854775808") : b > BigInt("0xFFFFFFFFFFFFFFFF"))
      throw new SyntaxFehler(`Die Zahl ${roh} ist zu groß für \`long\``, von);
    return { art: "long", text: roh, von, bis, wert: BigInt.asIntN(64, b) };
  }
  if (dezimal ? b > BigInt(2147483648) : b > BigInt(4294967295))
    throw new SyntaxFehler(`Die Zahl ${roh} ist zu groß für \`int\` (höchstens 2147483647, für größere Zahlen \`long\` mit \`L\` am Ende)`, von);
  return { art: "int", text: roh, von, bis, wert: Number(BigInt.asIntN(32, b)) };
}

/** Zeilenanfaenge einer Quelle (fuer Offset -> Zeile). */
export function zeilenAnfaenge(q: string): number[] {
  const a = [0];
  for (let i = 0; i < q.length; i++) if (q[i] === "\n") a.push(i + 1);
  return a;
}

/** 1-basierte Zeile zu einem Zeichenoffset. */
export function zeileZu(anfaenge: number[], pos: number): number {
  let lo = 0;
  let hi = anfaenge.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (anfaenge[mid] <= pos) lo = mid;
    else hi = mid - 1;
  }
  return lo + 1;
}
