import type { JavaTest } from "../typen";
import { javaString } from "./quelle";

/**
 * Erzeugt Ep1Pruefer.java: ruft die Methoden der Lernenden mit den Testdaten auf (Laufzeit:
 * Ep1Lauf.java). Der Pruefer erbt von der Klasse der Lernenden, damit Aufrufe wie "quersumme(123)"
 * ohne Klassennamen funktionieren.
 */

export interface GenerierterPruefer {
  quelle: string;
  /** Zeilennummer (1-basiert) im Pruefer -> Testindex, fuer verstaendliche Compilerfehler */
  testZeile: Map<number, number>;
}

/** Semikolon ergaenzen; nach einem Block "}" ist ein zusaetzliches ";" eine leere Anweisung und erlaubt
 * (wichtig fuer Array-Initialisierer wie "int[] a = {3, 1}"). */
function anweisung(s: string): string {
  const t = s.trim();
  return t.endsWith(";") ? t : t + ";";
}

/** import-Zeilen eines Quelltexts (fuer den Pruefer, damit Testausdruecke dieselben Typen sehen). */
export function importe(quelle: string): string[] {
  return [...quelle.matchAll(/^\s*import\s+(?:static\s+)?[\w.]+(?:\.\*)?\s*;/gm)].map((m) => m[0].trim());
}

/**
 * @param importeVorlage import-Zeilen der Vorlage; java.util.* und codedraw.* sind immer dabei, damit
 *   Tests wie "zeichne(new CodeDraw(400, 400))" oder "new ArrayList<>()" ohne Weiteres gehen.
 */
export function erzeugePruefer(klasse: string, tests: JavaTest[], zeitlimitMs = 2000, importeVorlage: string[] = []): GenerierterPruefer {
  const kopf = [
    "// generiert von lib/lernen/java/pruefer.ts",
    [...new Set(["import java.util.*;", "import codedraw.*;", ...importeVorlage])].join(" "),
    `public class Ep1Pruefer extends ${klasse} {`,
    "  public static void main(String[] ep1Argumente) {",
    `    Ep1Lauf.start(${javaString(klasse + ".java")}, ${tests.length});`,
  ];
  const testZeile = new Map<number, number>();
  let naechsteZeile = kopf.length + 1;
  const zeilen = tests.map((t, i) => {
    const vorher = t.vorher?.trim() ? anweisung(t.vorher) + " " : "";
    let rumpf: string;
    if (!t.aufruf?.trim()) rumpf = `${vorher}${klasse}.main(new String[0]); return Ep1Lauf.NICHTS;`;
    else if (t.erwartet !== undefined)
      rumpf = t.ergebnis?.trim()
        ? `${vorher}${anweisung(t.aufruf)} return Ep1Lauf.wert(${t.ergebnis});`
        : `${vorher}return Ep1Lauf.wert(${t.aufruf});`;
    else rumpf = `${vorher}${anweisung(t.aufruf)} return Ep1Lauf.NICHTS;`;
    const erwartet = t.erwartet !== undefined ? `() -> Ep1Lauf.wert(${t.erwartet})` : "null";
    const stdin = t.stdin !== undefined ? javaString(t.stdin) : "null";
    const zeile = `    Ep1Lauf.test(${i}, ${zeitlimitMs}L, ${stdin}, () -> { ${rumpf} }, ${erwartet}, ${t.toleranz ?? 1e-9});`;
    // vorher/aufruf/erwartet duerfen mehrzeilig sein: jede physische Zeile gehoert zu Test i
    const anzahl = zeile.split("\n").length;
    for (let k = 0; k < anzahl; k++) testZeile.set(naechsteZeile + k, i);
    naechsteZeile += anzahl;
    return zeile;
  });
  const quelle = [...kopf, ...zeilen, "    Ep1Lauf.ende();", "  }", "}", ""].join("\n");
  return { quelle, testZeile };
}
