/**
 * Hilfen fuer die Zeichenflaeche der Ablaufansicht (CodeDraw). Reine Funktionen auf dem Protokoll `Ablauf.formen` und
 * dem Stand `Schritt.zeichnung` (./typen.ts); laufen im Browser und in Node.
 *
 * Das Protokoll hat die Semantik des Fake-CodeDraw (lib/lernen/java/codedraw/CodeDraw.java): jeder Zeichenaufruf haengt
 * eine Form an, jedes Fenster einen Eintrag `fenster`, `clear()` einen Eintrag `hintergrund`. Nach `clear()` ist alles
 * Fruehere nicht mehr sichtbar, die Fenster-Eintraege bleiben aber in der Liste des Fakes.
 */
import type { Form } from "../java/codedraw";
import type { Ablauf, Schritt } from "./typen";

/** Standardgroesse von `new CodeDraw()` */
export const STANDARD_FENSTER = 600;

/** Groesse der Zeichenflaeche: das erste Fenster des Programms (wie die Vorschau der Plattform), sonst 600 x 600. */
export function leinwand(formen: Form[] | undefined): { b: number; h: number } {
  const f = formen?.find((x) => x.art === "fenster");
  return f && "b" in f ? { b: f.b, h: f.h } : { b: STANDARD_FENSTER, h: STANDARD_FENSTER };
}

/** Hat das Programm ein CodeDraw-Fenster angelegt (zeigt die Ansicht dann eine Zeichenflaeche)? */
export function hatZeichnung(ablauf: Ablauf): boolean {
  return !!ablauf.formen?.some((f) => f.art === "fenster");
}

/**
 * Die Liste, die das Fake-CodeDraw nach `anzahl` Eintraegen melden wuerde (Vergleich mit dem Java-Lauf):
 * Fenster-Eintraege vor dem letzten `clear()` bleiben, alles andere davor entfaellt.
 */
export function protokollFormen(formen: Form[], anzahl = formen.length, ab = ersterSichtbarer(formen, anzahl)): Form[] {
  return [...formen.slice(0, ab).filter((f) => f.art === "fenster"), ...formen.slice(ab, anzahl)];
}

/** Index des letzten `hintergrund` unter den ersten `anzahl` Eintraegen (das letzte `clear()`), sonst 0 */
export function ersterSichtbarer(formen: Form[], anzahl = formen.length): number {
  for (let i = Math.min(anzahl, formen.length) - 1; i >= 0; i--) if (formen[i].art === "hintergrund") return i;
  return 0;
}

/** Was in diesem Schritt auf der Zeichenflaeche zu sehen ist (ohne die Fenster-Eintraege), in Zeichenreihenfolge */
export function sichtbareFormen(ablauf: Ablauf, schritt: Schritt): Form[] {
  const z = schritt.zeichnung;
  if (!z || !ablauf.formen) return [];
  return ablauf.formen.slice(z.ab, z.anzahl).filter((f) => f.art !== "fenster");
}

/** Die Formen, die zwischen zwei Staenden dazugekommen sind (Protokollbereich [von, bis)), ohne Fenster-Eintraege */
export function neueFormen(ablauf: Ablauf, von: number, bis: number): Form[] {
  return (ablauf.formen ?? []).slice(von, bis).filter((f) => f.art !== "fenster");
}
