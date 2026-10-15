import { test, before, beforeEach } from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import fs from "node:fs";

/** Gegen eine frische Datenbank (LERNEN_DB) und ein Temp-Protokoll (LERNEN_JOURNAL), nie gegen die echten. */
type Modul = typeof import("./kurs-journal");
let m: Modul;
let db: typeof import("../client").db;
let schema: typeof import("../schema");
let journal: typeof import("../../lernen/journal");
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kurs-journal-"));
let nr = 0;

before(async () => {
  process.env.LERNEN_DB = path.join(dir, "test.db");
  ({ db } = await import("../client"));
  schema = await import("../schema");
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  migrate(db, { migrationsFolder: "./db/migrations" });
  db.insert(schema.kurse).values({ id: "k1", lva_nummer: "1.1", name: "K", typ: "VU", ects: 1, kategorie: "pflicht" }).run();
  db.insert(schema.lektionen)
    .values({ kurs_id: "k1", lektion_id: "l1", art: "kapitel", nr: 1, position: 0, titel: "T", kurztitel: "T", anker: "t", zeilen: 1, codebloecke: 0, wortanzahl: 1, lesedauer_minuten: 1, markdown: "x", einleitung: "x" })
    .run();
  db.insert(schema.sbp_pruefungen)
    .values({ id: "sbp-mathe", position: 0, bezeichnung: "Mathe", beschreibung: "B", vorbereitungsaufwand: "-", termin_plan: "-", status: "anrechnung_beantragt", note: 2, antritte: [{ datum: "2026-01-01" }], max_antritte: 3 })
    .run();
  m = await import("./kurs-journal");
  journal = await import("../../lernen/journal");
});

/** Jeder Test bekommt ein eigenes, leeres Protokoll und leere Nutzertabellen. */
beforeEach(() => {
  process.env.LERNEN_JOURNAL = path.join(dir, `j${nr++}`, "lernstand.jsonl");
  for (const t of [schema.lektion_fortschritt, schema.abschnitt_fortschritt, schema.quiz_ergebnisse, schema.test_versuche, schema.begriff_fortschritt, schema.kurs_stand]) db.delete(t).run();
});

const versuch = (punkte: number) => ({ test_id: "t1", datum: "2026-10-01", benoetigte_minuten: 30, selbstbewertung: { r1: punkte }, punkte, max_punkte: 10, bestanden: punkte >= 5 });

test("Lektion umschalten: zwei Ereignisse mit Zielzustand, danach nicht abgeschlossen", () => {
  m.setzeLektion("k1", "l1", !m.kursZustand("k1").fortschritt.lektionen.l1?.abgeschlossen);
  assert.equal(m.kursZustand("k1").fortschritt.lektionen.l1.abgeschlossen, true);
  m.setzeLektion("k1", "l1", !m.kursZustand("k1").fortschritt.lektionen.l1?.abgeschlossen);
  assert.equal(m.kursZustand("k1").fortschritt.lektionen.l1.abgeschlossen, false);
  const ev = journal.liesEreignisse("k1").filter((e) => e.art === "lektion");
  assert.deepEqual(
    ev.map((e) => (e.wert as { abgeschlossen: boolean }).abgeschlossen),
    [true, false],
  );
});

test("Quiz: Versuche zaehlen, das beste Ergebnis bleibt", () => {
  m.meldeQuiz("k1", "l1", 3, 4);
  m.meldeQuiz("k1", "l1", 1, 4);
  assert.deepEqual(
    { ...m.kursZustand("k1").fortschritt.quiz.l1, zuletzt_am: "" },
    { versuche: 2, bestes_ergebnis: 3, max_punkte: 4, beste_quote: 0.75, zuletzt_am: "" },
  );
});

test("Programmiertest: Versuche in Reihenfolge, Loeschen nach Index", () => {
  m.meldeTestVersuch("k1", versuch(4));
  m.meldeTestVersuch("k1", versuch(7));
  m.meldeTestVersuch("k1", versuch(9));
  m.loescheTestVersuchNachIndex("k1", 1);
  assert.deepEqual(
    m.kursZustand("k1").fortschritt.tests.map((t) => t.punkte),
    [4, 9],
  );
  m.loescheTestVersuchNachIndex("k1", 7); // gibt es nicht: nichts passiert
  assert.equal(m.kursZustand("k1").fortschritt.tests.length, 2);
});

test("Uebernahme aus der Datenbank: gleiche Werte wie vorher, zweites Mal ohne neue Zeilen", () => {
  db.insert(schema.lektion_fortschritt).values({ kurs_id: "k1", lektion_id: "l1", abgeschlossen: true, abgeschlossen_am: "2026-09-01" }).run();
  db.insert(schema.abschnitt_fortschritt).values({ kurs_id: "k1", abschnitt_id: "a1", verstanden: true, verstanden_am: "2026-09-02" }).run();
  db.insert(schema.quiz_ergebnisse).values({ kurs_id: "k1", lektion_id: "l1", versuche: 3, bestes_ergebnis: 4, max_punkte: 5, beste_quote: 0.8, zuletzt_am: "2026-09-03" }).run();
  db.insert(schema.test_versuche).values([{ kurs_id: "k1", position: 0, ...versuch(4) }, { kurs_id: "k1", position: 1, ...versuch(8), notiz: "gut" }]).run();
  db.insert(schema.kurs_stand).values({ kurs_id: "k1", status: "laufend", note: 1, semester_plan: "2026W", notiz: "meine Notiz", tipps: "Tipp" }).run();
  m.uebernimmDb();
  const zeilen = fs.readFileSync(process.env.LERNEN_JOURNAL!, "utf8").split("\n").length;
  m.uebernimmDb();
  assert.equal(fs.readFileSync(process.env.LERNEN_JOURNAL!, "utf8").split("\n").length, zeilen);

  const z = m.kursZustand("k1");
  assert.deepEqual(z.fortschritt.lektionen.l1, { abgeschlossen: true, abgeschlossen_am: "2026-09-01" });
  assert.deepEqual(z.fortschritt.abschnitte.a1, { verstanden: true, verstanden_am: "2026-09-02" });
  assert.deepEqual(z.fortschritt.quiz.l1, { versuche: 3, bestes_ergebnis: 4, max_punkte: 5, beste_quote: 0.8, zuletzt_am: "2026-09-03" });
  assert.deepEqual(
    z.fortschritt.tests.map((t) => [t.punkte, t.notiz]),
    [
      [4, undefined],
      [8, "gut"],
    ],
  );
  assert.equal(z.stand?.status, "laufend");
  assert.equal(z.stand?.note, 1);
  assert.equal(z.stand?.notiz, "meine Notiz");
});

test("SBP: Status, Note und Antritte bleiben, auch wenn ein Inhalts-Update die Spalten ueberschreibt", () => {
  m.uebernimmDb();
  db.update(schema.sbp_pruefungen).set({ status: "nicht_begonnen", note: null, antritte: [] }).run();
  m.uebernimmDb(); // schon uebernommen: die Paketwerte zaehlen nicht
  const s = m.sbpStand().get("sbp-mathe");
  assert.deepEqual(s, { status: "anrechnung_beantragt", note: 2, antritte: [{ datum: "2026-01-01" }] });
  db.update(schema.sbp_pruefungen).set({ status: "anrechnung_beantragt", note: 2, antritte: [{ datum: "2026-01-01" }] }).run();
});

test("Begriffe: die Leitner-Box bleibt, wenn sich die Zeilen-id beim Inhalts-Update aendert", () => {
  const neu = () => db.insert(schema.begriffe).values({ kurs_id: "k1", lektion_id: "l1", abschnitt_id: "a1", begriff_id: "rekursion", begriff: "Rekursion", definition: "D", quelle_typ: "manuell", position: 0 }).returning().get().id;
  const alteId = neu();
  m.meldeBegriffVersuch(alteId, true);
  const r = m.meldeBegriffVersuch(alteId, true);
  assert.deepEqual(r, { streak: 2, gemeistert: true });
  db.delete(schema.begriffe).run();
  const neueId = neu();
  assert.notEqual(neueId, alteId);
  const zeile = m.begriffZeile(neueId);
  assert.equal(zeile?.box, 1);
  assert.equal(zeile?.versuche_gesamt, 2);
  db.delete(schema.begriffe).run();
});

test("Zwei Rechner mit verschiedenem Stand: Protokolle zusammengelegt, beides bleibt", () => {
  // Rechner A
  db.insert(schema.lektion_fortschritt).values({ kurs_id: "k1", lektion_id: "l1", abgeschlossen: true, abgeschlossen_am: "2026-09-01" }).run();
  db.insert(schema.test_versuche).values({ kurs_id: "k1", position: 0, ...versuch(4) }).run();
  db.insert(schema.kurs_stand).values({ kurs_id: "k1", status: "laufend", notiz: "Notiz A" }).run();
  m.uebernimmDb();
  const a = fs.readFileSync(process.env.LERNEN_JOURNAL!, "utf8");
  // Rechner B: anderer Datenbankstand, eigenes Protokoll
  for (const t of [schema.lektion_fortschritt, schema.test_versuche, schema.kurs_stand]) db.delete(t).run();
  db.insert(schema.abschnitt_fortschritt).values({ kurs_id: "k1", abschnitt_id: "a1", verstanden: true, verstanden_am: "2026-09-05" }).run();
  db.insert(schema.test_versuche).values({ kurs_id: "k1", position: 0, ...versuch(9) }).run();
  db.insert(schema.kurs_stand).values({ kurs_id: "k1", status: "laufend", notiz: "Notiz B" }).run();
  process.env.LERNEN_JOURNAL = path.join(dir, `j${nr++}`, "lernstand.jsonl");
  m.uebernimmDb();
  fs.appendFileSync(process.env.LERNEN_JOURNAL, a); // cat a >> lernstand.jsonl

  const z = m.kursZustand("k1");
  assert.equal(z.fortschritt.lektionen.l1?.abgeschlossen, true);
  assert.equal(z.fortschritt.abschnitte.a1?.verstanden, true);
  assert.deepEqual(z.fortschritt.tests.map((t) => t.punkte).sort(), [4, 9]);
  assert.ok(z.stand?.notiz?.includes("Notiz A") && z.stand.notiz.includes("Notiz B"));
});
