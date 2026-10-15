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
 * unveraendert; sonst werden die Anweisungen in main() einer Klasse "Main" gesetzt (mit java.util.*).
 */
export function javaProgramm(code: string): { klasse: string; quelle: string; versatz: number } {
  const k = klassenName(code);
  if (k) return { klasse: k, quelle: code, versatz: 0 };
  const kopf = "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n";
  return { klasse: "Main", quelle: kopf + code + "\n  }\n}\n", versatz: 3 };
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
