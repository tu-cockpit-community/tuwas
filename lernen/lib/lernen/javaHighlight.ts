/**
 * Schlanker, synchroner Java-Tokenizer fuer die Syntaxhervorhebung in Lerninhalten. Md.tsx rendert auf
 * dem Server und im Browser; Shiki (WASM, Grammatiken) waere im Client-Bundle zu schwer und asynchron.
 * Genauigkeit reicht fuer EP1-Code (Schluesselwoerter, Literale, Kommentare, Typnamen, Annotationen).
 */

export type JavaTokenArt = "kw" | "lit" | "str" | "num" | "kom" | "ann" | "typ";
export interface JavaToken {
  text: string;
  art?: JavaTokenArt;
}

const SCHLUESSELWOERTER = new Set(
  (
    "abstract assert boolean break byte case catch char class const continue default do double else enum extends final " +
    "finally float for goto if implements import instanceof int interface long native new package private protected public " +
    "return short static strictfp super switch synchronized this throw throws transient try void volatile while var record " +
    "yield sealed permits non-sealed"
  ).split(" "),
);
const LITERALE = new Set(["true", "false", "null"]);

const MUSTER =
  /(\/\/[^\n]*|\/\*[\s\S]*?(?:\*\/|$))|("""[\s\S]*?(?:"""|$)|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?)|(@[A-Za-z_]\w*)|(0[xX][\da-fA-F_]+[lL]?|0[bB][01_]+[lL]?|(?:\d[\d_]*\.?[\d_]*|\.\d[\d_]*)(?:[eE][+-]?\d+)?[lLfFdD]?)|([A-Za-z_$][\w$]*)/g;

export function javaTokens(code: string): JavaToken[] {
  const out: JavaToken[] = [];
  let pos = 0;
  const plain = (bis: number) => {
    if (bis > pos) out.push({ text: code.slice(pos, bis) });
  };
  for (const m of code.matchAll(MUSTER)) {
    const i = m.index ?? 0;
    plain(i);
    const [text, kom, str, ann, num, wort] = m;
    let art: JavaTokenArt | undefined;
    if (kom) art = "kom";
    else if (str) art = "str";
    else if (ann) art = "ann";
    else if (num) art = "num";
    else if (wort) art = SCHLUESSELWOERTER.has(wort) ? "kw" : LITERALE.has(wort) ? "lit" : /^[A-Z]/.test(wort) ? "typ" : undefined;
    // Bezeichner ohne Hervorhebung an den vorigen Klartext haengen (weniger Spans)
    const letzter = out[out.length - 1];
    if (!art && letzter && !letzter.art) letzter.text += text;
    else out.push({ text, art });
    pos = i + text.length;
  }
  plain(code.length);
  return out;
}
