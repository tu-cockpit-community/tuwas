import "server-only";
import { asc, eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { kursZustand } from "./kurs-journal";
import {
  lektionen,
  programmiertests,
  quiz_fragen,
  quiz_optionen,
  quiz_zeilen,
  test_aufrufe,
  test_einschraenkungen,
  test_erlaubte_api,
  test_methoden,
  test_rubrik,
} from "../schema";
import type { KursFortschritt, Programmiertest, ProgrammiertestBank, QuizBank, QuizFrage } from "@/lib/types";

export const hatLernpfad = cache((kursId: string): boolean => {
  const row = db.select({ id: lektionen.id }).from(lektionen).where(eq(lektionen.kurs_id, kursId)).limit(1).get();
  return row !== undefined;
});

export const ladeQuizBank = cache((kursId: string): QuizBank | null => {
  const fragenZeilen = db.select().from(quiz_fragen).where(eq(quiz_fragen.kurs_id, kursId)).all();
  if (fragenZeilen.length === 0) return null;

  const fragen: QuizFrage[] = fragenZeilen.map((f) => {
    const basis = {
      id: f.id,
      lektion_id: f.lektion_id,
      einleitung: f.einleitung ?? undefined,
      frage: f.frage,
      erklaerung: f.erklaerung,
      punkte: f.punkte,
      quelle: f.quelle,
    };
    if (f.typ === "einfachauswahl") {
      const optionen = db
        .select()
        .from(quiz_optionen)
        .where(eq(quiz_optionen.frage_id, f.id))
        .orderBy(asc(quiz_optionen.position))
        .all();
      return {
        ...basis,
        typ: "einfachauswahl" as const,
        code: f.code ?? undefined,
        sprache: f.sprache ?? undefined,
        optionen: optionen.map((o) => ({ text: o.text ?? undefined, code: o.code ?? undefined, sprache: o.sprache ?? undefined })),
        richtig: f.richtig ?? 0,
      };
    }
    const zeilen = db.select().from(quiz_zeilen).where(eq(quiz_zeilen.frage_id, f.id)).orderBy(asc(quiz_zeilen.position)).all();
    return {
      ...basis,
      typ: "wahr_falsch" as const,
      hinweis: f.hinweis ?? undefined,
      zeilen: zeilen.map((z) => ({ text: z.text ?? undefined, code: z.code ?? undefined, sprache: z.sprache ?? undefined, richtig: z.richtig })),
    };
  });

  return { kurs: kursId, beschreibung: "", fragen };
});

export const ladeTestBank = cache((kursId: string): ProgrammiertestBank | null => {
  const testZeilen = db.select().from(programmiertests).where(eq(programmiertests.kurs_id, kursId)).all();
  if (testZeilen.length === 0) return null;

  const tests = testZeilen.map((t) => ({
    id: t.id,
    titel: t.titel,
    jahrgang: t.jahrgang,
    datum: t.datum,
    lektion_id: t.lektion_id,
    dauer_minuten: t.dauer_minuten,
    dauer_quelle: t.dauer_quelle,
    max_punkte: t.max_punkte,
    bestehensgrenze_punkte: t.bestehensgrenze_punkte,
    einschraenkungen: db.select().from(test_einschraenkungen).where(eq(test_einschraenkungen.test_id, t.id)).orderBy(asc(test_einschraenkungen.position)).all().map((r) => r.text),
    erlaubte_api: db.select().from(test_erlaubte_api).where(eq(test_erlaubte_api.test_id, t.id)).orderBy(asc(test_erlaubte_api.position)).all().map((r) => r.text),
    deklarationen: t.deklarationen,
    methoden: db.select().from(test_methoden).where(eq(test_methoden.test_id, t.id)).orderBy(asc(test_methoden.position)).all().map((m) => ({
      signatur: m.signatur, beschreibung: m.beschreibung, vorbedingungen: m.vorbedingungen, rekursiv: m.rekursiv ?? undefined, beispiel_ausgabe: m.beispiel_ausgabe ?? undefined,
    })),
    testaufrufe: db.select().from(test_aufrufe).where(eq(test_aufrufe.test_id, t.id)).orderBy(asc(test_aufrufe.position)).all().map((a) => ({ aufruf: a.aufruf, ausgabe: a.ausgabe })),
    rubrik: db.select().from(test_rubrik).where(eq(test_rubrik.test_id, t.id)).orderBy(asc(test_rubrik.position)).all().map((r) => ({
      id: r.zeile_id, methode: r.methode, kriterium: r.kriterium, punkte: r.punkte,
    })),
    referenzloesung: t.referenzloesung,
    referenzloesung_quelle: t.referenzloesung_quelle,
    quelle: t.quelle,
  }));

  return { kurs: kursId, beschreibung: "", hinweis_selbstbewertung: "", tests };
});

/** Der persoenliche Stand eines Kurses, gefaltet aus dem Protokoll (siehe kurs-journal.ts). */
export const ladeFortschritt = cache((kursId: string): KursFortschritt => structuredClone(kursZustand(kursId).fortschritt));

export function findeProgrammiertest(kursId: string, testId: string): Programmiertest | null {
  const bank = ladeTestBank(kursId);
  return bank?.tests.find((t) => t.id === testId) ?? null;
}

export { fragenFuerLektion, testsFuerLektion, gesamtFortschritt } from "@/lib/kurs-inhalt";
