"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { loescheTestVersuchNachIndex, meldeTestVersuch } from "@/lib/db/queries/kurs-journal";
import { speichereQuiz, toggleAbschnittVerstanden, toggleLektionAbgeschlossen } from "@/lib/db/queries/fortschritt-schreiben";
import { findeProgrammiertest } from "@/lib/db/queries/kurs-inhalt";

function heute(): string {
  return new Date().toISOString().slice(0, 10);
}

function revalidiereLernpfad(kursId: string): void {
  revalidatePath("/kurse/[id]/lernpfad", "layout");
  revalidatePath(`/kurse/${kursId}`);
}

const Id = z.string().regex(/^[A-Za-z0-9._-]{1,120}$/);

export async function toggleLektion(kursId: string, lektionId: string): Promise<void> {
  toggleLektionAbgeschlossen(Id.parse(kursId), Id.parse(lektionId));
  revalidiereLernpfad(kursId);
}

export async function markiereAbschnittVerstanden(kursId: string, abschnittId: string): Promise<void> {
  toggleAbschnittVerstanden(Id.parse(kursId), Id.parse(abschnittId));
  revalidiereLernpfad(kursId);
}

export async function speichereQuizErgebnis(kursId: string, lektionId: string, punkte: number, maxPunkte: number): Promise<void> {
  speichereQuiz(Id.parse(kursId), Id.parse(lektionId), z.number().parse(punkte), z.number().parse(maxPunkte));
  revalidiereLernpfad(kursId);
}

export interface TestVersuchEingabe {
  benoetigte_minuten: number;
  selbstbewertung: Record<string, number>;
  notiz?: string;
}

/**
 * Recomputes points/pass server-side from the authored rubric - never trusts the client for the
 * maximum or the pass line, only for which points it awards per rubric row (each clamped).
 */
export async function speichereTestVersuch(
  kursId: string,
  testId: string,
  eingabeRoh: TestVersuchEingabe
): Promise<void> {
  kursId = Id.parse(kursId);
  testId = Id.parse(testId);
  const eingabe = z
    .object({ benoetigte_minuten: z.number().finite(), selbstbewertung: z.record(z.string(), z.number().finite()), notiz: z.string().max(2000).optional() })
    .parse(eingabeRoh);
  const test = findeProgrammiertest(kursId, testId);
  if (!test) throw new Error(`Unbekannter Test: ${testId}`);

  let punkte = 0;
  const selbstbewertung: Record<string, number> = {};
  for (const zeile of test.rubrik) {
    const roh = eingabe.selbstbewertung[zeile.id] ?? 0;
    const geklemmt = Math.max(0, Math.min(zeile.punkte, Math.round(roh)));
    selbstbewertung[zeile.id] = geklemmt;
    punkte += geklemmt;
  }

  meldeTestVersuch(kursId, {
    test_id: testId,
    datum: heute(),
    benoetigte_minuten: Math.max(0, Math.round(eingabe.benoetigte_minuten)),
    selbstbewertung,
    punkte,
    max_punkte: test.max_punkte,
    bestanden: punkte >= test.bestehensgrenze_punkte,
    notiz: eingabe.notiz ?? null,
  });
  revalidiereLernpfad(kursId);
}

export async function loescheTestVersuch(kursId: string, index: number): Promise<void> {
  kursId = Id.parse(kursId);
  index = z.number().int().nonnegative().parse(index);
  loescheTestVersuchNachIndex(kursId, index);
  revalidiereLernpfad(kursId);
}
