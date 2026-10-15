import fs from "node:fs";
import path from "node:path";

/**
 * Merkt sich das Ergebnis einer teuren Berechnung in einer JSON-Datei. Der Schluessel beschreibt, woraus das Ergebnis
 * entstand (Dateien, Aenderungszeiten); stimmt er nicht mehr, wird neu berechnet und die Datei ersetzt. Ein Lese- oder
 * Schreibfehler (kein Ordner, kein Recht) heisst nur: es wird jedes Mal berechnet, nie: es geht etwas schief.
 */
export function mitDateiCache<T>(datei: string, schluessel: string, baue: () => T): T {
  try {
    const roh = JSON.parse(fs.readFileSync(datei, "utf8")) as { schluessel?: string; daten?: T };
    if (roh.schluessel === schluessel && roh.daten !== undefined) return roh.daten;
  } catch {
    /* noch kein Cache oder beschaedigt */
  }
  const daten = baue();
  try {
    fs.mkdirSync(path.dirname(datei), { recursive: true });
    const temp = `${datei}.${process.pid}.tmp`;
    fs.writeFileSync(temp, JSON.stringify({ schluessel, daten }));
    fs.renameSync(temp, datei);
  } catch {
    /* ohne Cache weiter */
  }
  return daten;
}
