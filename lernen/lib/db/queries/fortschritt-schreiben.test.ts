import { test, before } from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import fs from "node:fs";

/** Gegen eine frische Datenbank aus den Migrationen (LERNEN_DB) und ein Temp-Protokoll (LERNEN_JOURNAL), nie die echten. */
type Modul = typeof import("./fortschritt-schreiben");
let m: Modul;
let k: typeof import("./kurs-journal");
let db: typeof import("../client").db;
let schema: typeof import("../schema");

before(async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lernen-db-"));
  process.env.LERNEN_DB = path.join(dir, "test.db");
  process.env.LERNEN_JOURNAL = path.join(dir, "lernstand.jsonl");
  ({ db } = await import("../client"));
  schema = await import("../schema");
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  migrate(db, { migrationsFolder: "./db/migrations" });
  db.insert(schema.kurse).values({ id: "k1", lva_nummer: "1.1", name: "K", typ: "VU", ects: 1, kategorie: "pflicht" }).run();
  db.insert(schema.lektionen)
    .values({ kurs_id: "k1", lektion_id: "l1", art: "kapitel", nr: 1, position: 0, titel: "T", kurztitel: "T", anker: "t", zeilen: 1, codebloecke: 0, wortanzahl: 1, lesedauer_minuten: 1, markdown: "x", einleitung: "x" })
    .run();
  const lektion = db.select().from(schema.lektionen).get()!;
  db.insert(schema.skript_abschnitte).values({ lektion_row_id: lektion.id, kurs_id: "k1", abschnitt_id: "a1", position: 0, titel: "A", anker: "a", markdown: "x" }).run();
  m = await import("./fortschritt-schreiben");
  k = await import("./kurs-journal");
});

const f = () => k.kursZustand("k1").fortschritt;

test("Lektion abschliessen schaltet um, die Tabelle bleibt leer (der Stand liegt im Protokoll)", () => {
  m.toggleLektionAbgeschlossen("k1", "l1");
  assert.equal(f().lektionen.l1.abgeschlossen, true);
  m.toggleLektionAbgeschlossen("k1", "l1");
  assert.equal(f().lektionen.l1.abgeschlossen, false);
  assert.equal(db.select().from(schema.lektion_fortschritt).all().length, 0);
});

test("Unbekannte Lektion oder Abschnitt: Fehler, nichts wird geschrieben", () => {
  const vorher = fs.readFileSync(process.env.LERNEN_JOURNAL!, "utf8");
  assert.throws(() => m.toggleLektionAbgeschlossen("k1", "gibt-es-nicht"), m.UnbekanntFehler);
  assert.throws(() => m.toggleAbschnittVerstanden("k1", "gibt-es-nicht"), m.UnbekanntFehler);
  assert.equal(fs.readFileSync(process.env.LERNEN_JOURNAL!, "utf8"), vorher);
});

test("Abschnitt verstanden schaltet um", () => {
  m.toggleAbschnittVerstanden("k1", "a1");
  assert.equal(f().abschnitte.a1.verstanden, true);
});

test("Quiz: beste Quote bleibt, Versuche zaehlen, ungueltige Punkte werden abgelehnt", () => {
  m.speichereQuiz("k1", "l1", 3, 4);
  m.speichereQuiz("k1", "l1", 1, 4);
  const q = f().quiz.l1;
  assert.equal(q.versuche, 2);
  assert.equal(q.bestes_ergebnis, 3);
  assert.equal(q.beste_quote, 0.75);
  assert.throws(() => m.speichereQuiz("k1", "l1", 5, 4), m.UnbekanntFehler);
  assert.throws(() => m.speichereQuiz("k1", "l1", Number.NaN, 4), m.UnbekanntFehler);
  assert.equal(f().quiz.l1.versuche, 2);
});
