import { test } from "node:test";
import assert from "node:assert/strict";
import { effektiverStreak, MASTERY_SCHWELLE, LEITNER_INTERVALLE_TAGE, inTagen } from "./begriffe-leitner";

type FortschrittRow = Parameters<typeof effektiverStreak>[0];

function zeile(teil: Partial<NonNullable<FortschrittRow>>): NonNullable<FortschrittRow> {
  return {
    begriff_id: 1,
    richtig_in_folge: 0,
    gemeistert_session_am: null,
    versuche_gesamt: 0,
    box: 0,
    naechste_wiederholung_am: null,
    zuletzt_versucht_am: null,
    ...teil,
  };
}

test("kein Fortschritt-Datensatz -> Streak 0 (neuer Begriff)", () => {
  assert.equal(effektiverStreak(undefined, "2026-09-09"), 0);
});

test("gestern gemeistert und heute laut Box faellig -> Streak wird auf 0 zurueckgesetzt", () => {
  const row = zeile({ richtig_in_folge: MASTERY_SCHWELLE, gemeistert_session_am: "2026-09-08", naechste_wiederholung_am: "2026-09-09" });
  assert.equal(effektiverStreak(row, "2026-09-09"), 0);
});

test("heute bereits gemeistert -> Streak bleibt bestehen (nicht nochmal faellig heute)", () => {
  const row = zeile({ richtig_in_folge: MASTERY_SCHWELLE, gemeistert_session_am: "2026-09-09", naechste_wiederholung_am: "2026-09-09" });
  assert.equal(effektiverStreak(row, "2026-09-09"), MASTERY_SCHWELLE);
});

test("noch nicht faellig (Box-Termin in der Zukunft) -> Streak bleibt bestehen", () => {
  const row = zeile({ richtig_in_folge: MASTERY_SCHWELLE, gemeistert_session_am: "2026-09-05", naechste_wiederholung_am: "2026-09-20" });
  assert.equal(effektiverStreak(row, "2026-09-09"), MASTERY_SCHWELLE);
});

test("Streak unterhalb der Mastery-Schwelle bleibt trotz Faelligkeit unveraendert (noch keine Session-Meisterung, die zurueckzusetzen waere)", () => {
  const row = zeile({ richtig_in_folge: 1, gemeistert_session_am: null, naechste_wiederholung_am: "2026-09-01" });
  assert.equal(effektiverStreak(row, "2026-09-09"), 1);
});

test("inTagen addiert Kalendertage ueber Monatsgrenzen hinweg", () => {
  assert.equal(LEITNER_INTERVALLE_TAGE[2], 7);
  assert.equal(inTagen("2026-09-28", LEITNER_INTERVALLE_TAGE[2]), "2026-10-05");
});
