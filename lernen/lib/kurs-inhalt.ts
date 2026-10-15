import type { KursFortschritt, Programmiertest, ProgrammiertestBank, QuizBank, QuizFrage, SkriptGliederung } from "./types";

export function leererFortschritt(kursId: string): KursFortschritt {
  return {
    kurs: kursId,
    zuletzt_aktualisiert: new Date().toISOString().slice(0, 10),
    lektionen: {},
    abschnitte: {},
    quiz: {},
    tests: [],
  };
}

export function fragenFuerLektion(bank: QuizBank | null, lektionId: string): QuizFrage[] {
  if (!bank) return [];
  return bank.fragen.filter((f) => f.lektion_id === lektionId);
}

export function testsFuerLektion(bank: ProgrammiertestBank | null, lektionId: string): Programmiertest[] {
  if (!bank) return [];
  return bank.tests.filter((t) => t.lektion_id === lektionId);
}

export function gesamtFortschritt(
  g: SkriptGliederung,
  f: KursFortschritt
): { abgeschlossen: number; gesamt: number; quote: number; quizSchnitt: number | null } {
  const gesamt = g.lektionen.length;
  const abgeschlossen = g.lektionen.filter((l) => f.lektionen[l.id]?.abgeschlossen).length;
  const quizWerte = Object.values(f.quiz).map((q) => q.beste_quote);
  const quizSchnitt =
    quizWerte.length === 0 ? null : quizWerte.reduce((a, b) => a + b, 0) / quizWerte.length;
  return { abgeschlossen, gesamt, quote: gesamt > 0 ? abgeschlossen / gesamt : 0, quizSchnitt };
}
