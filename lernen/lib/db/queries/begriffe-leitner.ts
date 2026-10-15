import type { begriff_fortschritt } from "../schema";

/** Anzahl richtiger Antworten IN FOLGE (innerhalb einer Drill-Session), ab der ein Begriff als
 * "diese Session gemeistert" gilt. */
export const MASTERY_SCHWELLE = 2;

/** Leitner-Faecher 0-4: Tage bis zur naechsten Wiederholung, indiziert nach `box` (dieselbe Tabelle wie bei Aufgaben
 * und Karten, siehe lib/lernen/leitner.ts). Box 0 wird auch nach einer falschen Antwort verwendet (kurzer Retry am
 * naechsten Tag statt sofort). */
export { LEITNER_TAGE as LEITNER_INTERVALLE_TAGE } from "@/lib/lernen/leitner";

export function heuteIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function inTagen(heute: string, tage: number): string {
  const d = new Date(`${heute}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + tage);
  return d.toISOString().slice(0, 10);
}

export type FortschrittRow = typeof begriff_fortschritt.$inferSelect;

/**
 * Effektiver Ist-Streak fuer die AKTUELLE Session: ein an einem frueheren Tag gemeisterter,
 * aber laut Leitner-Box wieder faelliger Begriff muss diese Session neu bewiesen werden -- sonst
 * wuerde er dank hohem gespeichertem richtig_in_folge nie wieder im Drill auftauchen. Reine
 * Ableitung, keine DB-Schreibung (siehe Aufrufer fuer die Persistenz).
 */
export function effektiverStreak(row: FortschrittRow | undefined, heute: string): number {
  if (!row) return 0;
  const bereitsHeuteGemeistert = row.gemeistert_session_am === heute;
  const istFaellig = row.naechste_wiederholung_am === null || row.naechste_wiederholung_am <= heute;
  if (istFaellig && !bereitsHeuteGemeistert && row.richtig_in_folge >= MASTERY_SCHWELLE) return 0;
  return row.richtig_in_folge;
}
