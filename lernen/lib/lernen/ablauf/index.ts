/**
 * Einstieg der Ablauf-Engine: Java-Code (Teilmenge fuer EP1) Schritt fuer Schritt ausfuehren und aufzeichnen.
 * Reine Funktion ohne Netz und ohne Abhaengigkeiten; laeuft im Browser und in Node.
 *
 *   erzeugeAblauf(quelle, { aufruf?, vorher?, stdin?, maxSchritte?, maxAusgabe?, maxMs? }) -> AblaufErgebnis
 *
 * Vertrag: ./typen.ts. Text-Dump fuer Tests und Menschen: `dumpAblauf` (./formatiere.ts). Zeichnungen (CodeDraw):
 * Formen in `Ablauf.formen`, Stand je Schritt in `Schritt.zeichnung`, Hilfen in ./zeichnung.ts.
 */
import type { AblaufErgebnis, AblaufOptionen } from "./typen";
import { NichtUnterstuetzt, SyntaxFehler, zeilenAnfaenge, zeileZu } from "./lexer";
import { parseProgramm } from "./parser";
import { CompilerFehler, fuehreAus, type InterneOptionen } from "./interpreter";

export type * from "./typen";
export { dumpAblauf } from "./formatiere";
export { hatZeichnung, leinwand, neueFormen, protokollFormen, sichtbareFormen } from "./zeichnung";

/** Ausfuehrung mit internen Optionen (z. B. ohne Aufzeichnung fuer lange Laeufe im Korpus-Abgleich). */
export function erzeugeAblaufIntern(quelle: string, optionen: InterneOptionen = {}): AblaufErgebnis {
  const anfaenge = zeilenAnfaenge(quelle);
  const zeile = (pos: number | undefined) => (pos === undefined || pos < 0 ? undefined : zeileZu(anfaenge, Math.min(pos, quelle.length)));
  try {
    const prog = parseProgramm(quelle);
    return { ok: true, ablauf: fuehreAus(prog, quelle, optionen) };
  } catch (e) {
    if (e instanceof NichtUnterstuetzt) return { ok: false, grund: "nichtUnterstuetzt", meldung: e.message };
    if (e instanceof SyntaxFehler) {
      // Fehler im Zusatzcode (aufruf/vorher) haben keine Zeile in der Quelle
      return { ok: false, grund: "syntax", meldung: e.message, zeile: zeile(e.pos) };
    }
    if (e instanceof CompilerFehler) {
      const z = e.stelle && e.stelle.q === 0 ? zeile(e.stelle.von) : undefined;
      return { ok: false, grund: "syntax", meldung: `Compilerfehler: ${e.meldung}`, ...(z ? { zeile: z } : {}) };
    }
    throw e;
  }
}

export function erzeugeAblauf(quelle: string, optionen?: AblaufOptionen): AblaufErgebnis {
  return erzeugeAblaufIntern(quelle, optionen ?? {});
}
