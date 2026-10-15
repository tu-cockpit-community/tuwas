/**
 * Die eine Leitner-Tabelle der App: Tage bis zur naechsten Wiederholung. Aufgaben und Karten (Stufen 0 bis 5,
 * lib/lernen/fortschritt.ts) und Begriffe (Faecher 0 bis 4, lib/db/queries/begriffe-leitner.ts) richten sich danach.
 */
export const LEITNER_TAGE = [1, 3, 7, 16, 35] as const;

/** Hoechste Stufe bei Aufgaben und Karten; Stufe 0 heisst "falsch beantwortet, sofort wieder faellig". */
export const MAX_STUFE = LEITNER_TAGE.length;

/** Die Stufe nach einer Antwort: richtig steigt um eins (bis MAX_STUFE), falsch faellt auf 0. */
export function naechsteStufe(stufe: number, richtig: boolean): number {
  return richtig ? Math.min(stufe + 1, MAX_STUFE) : 0;
}

/** Tage bis zur Wiederholung auf einer Stufe (Stufe 0: sofort). */
export function tageBis(stufe: number): number {
  return stufe <= 0 ? 0 : LEITNER_TAGE[Math.min(stufe, MAX_STUFE) - 1];
}
