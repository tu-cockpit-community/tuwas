import { and, eq } from "drizzle-orm";
import { db } from "../client";
import { lektionen, skript_abschnitte } from "../schema";
import { kursZustand, meldeQuiz, setzeAbschnitt, setzeLektion } from "./kurs-journal";

/**
 * Schreibt den Lernstand der Lernpfad-Seiten (Lektion abgeschlossen, Abschnitt verstanden, Quiz-Ergebnis) als
 * Ereignis ins Protokoll (kurs-journal.ts). Jede Funktion prueft vorher, dass es Kurs und Lektion bzw. Abschnitt gibt.
 */

export class UnbekanntFehler extends Error {}

function pruefeLektion(kursId: string, lektionId: string): void {
  const da = db.select({ id: lektionen.id }).from(lektionen).where(and(eq(lektionen.kurs_id, kursId), eq(lektionen.lektion_id, lektionId))).get();
  if (!da) throw new UnbekanntFehler(`Unbekannte Lektion ${lektionId} in ${kursId}`);
}

export function toggleLektionAbgeschlossen(kursId: string, lektionId: string): void {
  pruefeLektion(kursId, lektionId);
  setzeLektion(kursId, lektionId, !kursZustand(kursId).fortschritt.lektionen[lektionId]?.abgeschlossen);
}

export function toggleAbschnittVerstanden(kursId: string, abschnittId: string): void {
  const da = db
    .select({ id: skript_abschnitte.id })
    .from(skript_abschnitte)
    .where(and(eq(skript_abschnitte.kurs_id, kursId), eq(skript_abschnitte.abschnitt_id, abschnittId)))
    .get();
  if (!da) throw new UnbekanntFehler(`Unbekannter Abschnitt ${abschnittId} in ${kursId}`);
  setzeAbschnitt(kursId, abschnittId, !kursZustand(kursId).fortschritt.abschnitte[abschnittId]?.verstanden);
}

/** `punkte` und `maxPunkte` sind Zahlen mit 0 <= punkte <= maxPunkte, sonst gilt die Eingabe als ungueltig. */
export function speichereQuiz(kursId: string, lektionId: string, punkte: number, maxPunkte: number): void {
  pruefeLektion(kursId, lektionId);
  if (!Number.isFinite(punkte) || !Number.isFinite(maxPunkte) || punkte < 0 || maxPunkte < 0 || punkte > maxPunkte) {
    throw new UnbekanntFehler(`Ungueltige Punkte ${punkte}/${maxPunkte}`);
  }
  meldeQuiz(kursId, lektionId, punkte, maxPunkte);
}
