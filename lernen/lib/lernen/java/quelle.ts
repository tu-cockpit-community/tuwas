/** Reine Text-Helfer fuer Java-Quelltexte (Browser und Node). */

/** Luecke in `lueckentext`: drei oder mehr Unterstriche. */
export const LUECKE = /_{3,}/g;

export function anzahlLuecken(text: string): number {
  return (text.match(LUECKE) ?? []).length;
}

export function fuelleLuecken(text: string, werte: string[]): string {
  let i = 0;
  return text.replace(LUECKE, () => werte[i++] ?? "");
}

/** Name der Klasse, nach der die Datei heissen muss: die public-Klasse, sonst die erste Klasse. */
export function klassenName(code: string): string | null {
  const ohneKommentare = code.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  const oeffentlich = /\bpublic\s+(?:final\s+|abstract\s+)*(?:class|record|enum|interface)\s+([A-Za-z_$][\w$]*)/.exec(ohneKommentare);
  if (oeffentlich) return oeffentlich[1];
  const erste = /\b(?:class|record|enum|interface)\s+([A-Za-z_$][\w$]*)/.exec(ohneKommentare);
  return erste ? erste[1] : null;
}

/**
 * Macht aus einem Code-Ausschnitt ein uebersetzbares Programm. Enthaelt der Code eine Klasse, bleibt er
 * unveraendert; sonst werden die Anweisungen in main() einer Klasse "Main" gesetzt (mit java.util.* und codedraw.*).
 * Hat der Ausschnitt selbst eine Methode `main` (ohne Klasse drumherum), wird er als Inhalt der Klasse "Main" uebernommen.
 * Fuehrende import-Zeilen des Ausschnitts (z. B. `import java.awt.Color;`) wandern dabei vor die Klasse; ihre Zeilen
 * bleiben leer stehen, damit die Zeilennummern des Ausschnitts (`versatz`) stimmen.
 */
export function javaProgramm(code: string): { klasse: string; quelle: string; versatz: number } {
  const k = klassenName(code);
  if (k) return { klasse: k, quelle: code, versatz: 0 };
  const { importe, rest } = hebeImporteAus(code);
  const kopf = `import java.util.*; import codedraw.*;${importe.map((x) => " " + x).join("")}\npublic class Main {\n`;
  const ohneKommentare = rest.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  if (/^\s*(?:public\s+)?static\s+void\s+main\s*\(/m.test(ohneKommentare)) return { klasse: "Main", quelle: kopf + rest + "\n}\n", versatz: 2 };
  return { klasse: "Main", quelle: kopf + "  public static void main(String[] args) {\n" + rest + "\n  }\n}\n", versatz: 3 };
}

/** Fuehrende `import ...;`-Zeilen (nach Leerzeilen und Kommentaren, auch mit Kommentar dahinter) aus einem Ausschnitt herausnehmen; die Zeilen bleiben leer */
function hebeImporteAus(code: string): { importe: string[]; rest: string } {
  const importe: string[] = [];
  let blockKommentar = false;
  let vorbei = false;
  const zeilen = code.split("\n").map((z) => {
    if (vorbei) return z;
    const t = z.trim();
    if (blockKommentar) {
      if (t.includes("*/")) blockKommentar = false;
      return z;
    }
    if (t === "" || t.startsWith("//")) return z;
    if (t.startsWith("/*")) {
      if (!t.includes("*/")) blockKommentar = true;
      return z;
    }
    const m = /^(import\s+(?:static\s+)?[\w.]+(?:\.\*)?\s*;)\s*(?:\/\/.*)?$/.exec(t);
    if (m) {
      importe.push(m[1]);
      return "";
    }
    vorbei = true;
    return z;
  });
  return { importe, rest: zeilen.join("\n") };
}

/** Marke im `rahmen` einer code-Aufgabe: steht allein auf einer Zeile, dort wird die Antwort eingesetzt. */
export const RAHMEN_MARKE = "/*ANTWORT*/";

export interface MitRahmen {
  quelle: string;
  /** Zeilen vor der Antwort im zusammengesetzten Quelltext: Zeile z der Antwort ist Zeile z + versatz */
  versatz: number;
  /** Zeilen der Antwort (mindestens 1) */
  zeilen: number;
}

/**
 * Setzt die Antwort in den Rahmen ein (Quiz-Format: Lernende schreiben nur Anweisungen, das Programm drumherum ist
 * vorgegeben). Die Marke muss allein auf ihrer Zeile stehen; die Antwort uebernimmt deren Einrueckung.
 * Ohne Rahmen bleibt die Antwort unveraendert.
 */
export function setzeInRahmen(rahmen: string | undefined, antwort: string): MitRahmen {
  const n = Math.max(1, antwort.replace(/\n+$/, "").split("\n").length);
  if (rahmen === undefined) return { quelle: antwort, versatz: 0, zeilen: n };
  const zeilen = rahmen.split("\n");
  const i = zeilen.findIndex((z) => z.trim() === RAHMEN_MARKE);
  if (i < 0) throw new Error(`rahmen enthält die Marke ${RAHMEN_MARKE} nicht auf einer eigenen Zeile`);
  const einzug = /^\s*/.exec(zeilen[i])![0];
  const eingesetzt = antwort
    .replace(/\n+$/, "")
    .split("\n")
    .map((z) => (z.trim() ? einzug + z : z));
  return { quelle: [...zeilen.slice(0, i), ...eingesetzt, ...zeilen.slice(i + 1)].join("\n"), versatz: i, zeilen: eingesetzt.length };
}

/** Java-String-Literal (fuer generierte Quelltexte). */
export function javaString(s: string): string {
  let out = '"';
  for (const c of s) {
    const n = c.codePointAt(0)!;
    if (c === '"') out += '\\"';
    else if (c === "\\") out += "\\\\";
    else if (c === "\n") out += "\\n";
    else if (c === "\r") out += "\\r";
    else if (c === "\t") out += "\\t";
    else if (n < 0x20) out += "\\u" + n.toString(16).padStart(4, "0");
    else out += c;
  }
  return out + '"';
}
