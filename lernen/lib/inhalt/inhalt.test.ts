import assert from "node:assert/strict";
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, describe, test } from "node:test";
import Database from "better-sqlite3";
import { spieleEin, type Herkunft } from "./einspielen";
import { INHALT_TABELLEN, PAKET_FORMAT } from "./konfig";
import { erzeugePaket, PaketFehler, pruefePaket } from "./paket";

const ordner = mkdtempSync(join(tmpdir(), "lernen-inhalt-"));
after(() => rmSync(ordner, { recursive: true, force: true }));

const herkunft: Herkunft = { quelle: "test/inhalt", tag: "inhalt-2", sha256: "a".repeat(64), veroeffentlichtAm: "2026-10-13T00:00:00Z" };

/** Datenbank mit dem echten Schema: alle Migrationen in Reihenfolge. */
function neueDb(name: string): Database.Database {
  const db = new Database(join(ordner, name));
  const dateien = readdirSync(join(process.cwd(), "db", "migrations")).filter((f) => f.endsWith(".sql")).sort();
  for (const datei of dateien) db.exec(readFileSync(join(process.cwd(), "db", "migrations", datei), "utf8"));
  return db;
}

/** Fuegt eine Zeile ein; Pflichtspalten ohne Vorgabe bekommen einen neutralen Wert. Gibt die rowid zurueck. */
function einfuegen(db: Database.Database, tabelle: string, werte: Record<string, unknown>): number {
  const spalten = db.prepare("SELECT name, type, \"notnull\" AS pflicht, dflt_value AS vorgabe, pk FROM pragma_table_info(?)").all(tabelle) as {
    name: string;
    type: string;
    pflicht: number;
    vorgabe: string | null;
    pk: number;
  }[];
  const alle: Record<string, unknown> = { ...werte };
  for (const s of spalten) {
    if (s.name in alle || s.vorgabe !== null || (s.pk > 0 && s.type.toLowerCase() === "integer")) continue;
    if (s.pflicht) alle[s.name] = /int|real/i.test(s.type) ? 0 : "";
  }
  const namen = Object.keys(alle);
  const info = db
    .prepare(`INSERT INTO "${tabelle}" (${namen.map((n) => `"${n}"`).join(", ")}) VALUES (${namen.map(() => "?").join(", ")})`)
    .run(...Object.values(alle));
  return Number(info.lastInsertRowid);
}

interface Stand {
  kursName: string;
  lektionTitel: string;
  /** Begriffe in Reihenfolge der Einfuegung (bestimmt die IDs). */
  begriffe: string[];
  extraKurs?: string;
}

/** Ein kleiner, aber vollstaendiger Inhalt: Kurs, Lernpfad, Quiz, Test, Lernthema, SBP-Pruefung, Begriffe. */
function befuelle(db: Database.Database, stand: Stand): void {
  einfuegen(db, "kurse", { id: "A", name: stand.kursName });
  einfuegen(db, "kurse", { id: "B", name: "Kurs B" });
  if (stand.extraKurs) einfuegen(db, "kurse", { id: stand.extraKurs, name: "Neuer Kurs" });
  const lektion = einfuegen(db, "lektionen", { kurs_id: "A", lektion_id: "L1", art: "kapitel", titel: stand.lektionTitel, kurztitel: stand.lektionTitel });
  einfuegen(db, "skript_abschnitte", { kurs_id: "A", lektion_row_id: lektion, abschnitt_id: "a1", titel: "Abschnitt 1", markdown: stand.lektionTitel });
  einfuegen(db, "quiz_fragen", { id: "q1", kurs_id: "A", lektion_id: "L1" });
  einfuegen(db, "quiz_optionen", { frage_id: "q1" });
  einfuegen(db, "programmiertests", { kurs_id: "A", id: `t-${stand.lektionTitel}` });
  einfuegen(db, "lern_themen", { kurs_id: "A", thema_id: "th1", nr: 1, titel: "Thema" });
  einfuegen(db, "sbp_pruefungen", { id: "sbp-x", bezeichnung: "SBP X" });
  stand.begriffe.forEach((name, position) => {
    const sbp = name.startsWith("sbp:");
    einfuegen(db, "begriffe", {
      kurs_id: sbp ? null : "A",
      sbp_pruefung_id: sbp ? "sbp-x" : null,
      lektion_id: sbp ? null : "L1",
      abschnitt_id: sbp ? null : "a1",
      begriff_id: name,
      begriff: name,
      definition: `Definition ${name}`,
      quelle_typ: "manuell",
      position,
    });
  });
}

/** Nutzerdaten, die ein Update nie anfassen darf. */
function nutzerdaten(db: Database.Database, begriffe: Record<string, number>): void {
  einfuegen(db, "kurs_stand", { kurs_id: "A", status: "bestanden", notiz: "privat", note: 1.5 });
  einfuegen(db, "lektion_fortschritt", { kurs_id: "A", lektion_id: "L1", abgeschlossen: 1 });
  for (const [begriff, box] of Object.entries(begriffe)) {
    const zeile = db.prepare("SELECT id FROM begriffe WHERE begriff_id = ?").get(begriff) as { id: number };
    einfuegen(db, "begriff_fortschritt", { begriff_id: zeile.id, box, versuche_gesamt: 4 });
  }
}

function paketAus(name: string, stand: Stand): string {
  const quelle = neueDb(`quelle-${name}.db`);
  befuelle(quelle, stand);
  // Der Nutzerstand der Quelle darf nicht im Paket landen.
  einfuegen(quelle, "kurs_stand", { kurs_id: "A", status: "nicht_begonnen", notiz: "Notiz des Autors" });
  quelle.close();
  const pfad = join(ordner, `paket-${name}.db`);
  erzeugePaket(join(ordner, `quelle-${name}.db`), pfad);
  return pfad;
}

const v1: Stand = { kursName: "Kurs A", lektionTitel: "Alt", begriffe: ["x", "y", "sbp:z"] };
const v2: Stand = { kursName: "Kurs A neu", lektionTitel: "Neu", begriffe: ["neu", "x", "sbp:z"], extraKurs: "C" }; // "y" faellt weg, IDs verschieben sich

const zeilen = (db: Database.Database, sql: string, ...args: unknown[]): Record<string, unknown>[] => db.prepare(sql).all(...args) as Record<string, unknown>[];

describe("Inhaltspaket erzeugen", () => {
  test("enthaelt genau die Inhalts-Tabellen, kein Nutzerstand, Formatversion gesetzt", () => {
    const pfad = paketAus("erzeugen", v2);
    const paket = new Database(pfad, { readonly: true });
    const tabellen = (zeilen(paket, "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'").map((z) => z.name) as string[]).sort();
    assert.deepEqual(tabellen, [...INHALT_TABELLEN].sort());
    assert.equal(paket.pragma("user_version", { simple: true }), PAKET_FORMAT);
    assert.equal(zeilen(paket, "SELECT count(*) AS n FROM begriffe")[0]?.n, 3);
    paket.close();
  });
});

describe("Inhaltspaket einspielen", () => {
  test("ersetzt Inhalt, laesst Nutzerstand und Fortschritt unberuehrt und uebertraegt Begriffs-Fortschritt auf neue IDs", () => {
    const app = neueDb("app.db");
    befuelle(app, v1);
    nutzerdaten(app, { x: 3, y: 2, "sbp:z": 1 });
    const alteId = (app.prepare("SELECT id FROM begriffe WHERE begriff_id = 'x'").get() as { id: number }).id;

    const ergebnis = spieleEin(app, paketAus("einspielen", v2), herkunft);

    // Inhalt ist der neue
    assert.equal(zeilen(app, "SELECT name FROM kurse WHERE id = 'A'")[0]?.name, "Kurs A neu");
    assert.deepEqual(zeilen(app, "SELECT id FROM kurse ORDER BY id").map((z) => z.id), ["A", "B", "C"], "Kurse werden nie geloescht");
    assert.equal(zeilen(app, "SELECT titel FROM lektionen WHERE lektion_id = 'L1'")[0]?.titel, "Neu");
    assert.equal(zeilen(app, "SELECT count(*) AS n FROM skript_abschnitte")[0]?.n, 1);
    assert.deepEqual(zeilen(app, "SELECT begriff_id FROM begriffe ORDER BY position").map((z) => z.begriff_id), ["neu", "x", "sbp:z"]);

    // Nutzerstand unveraendert
    const stand = zeilen(app, "SELECT status, notiz, note FROM kurs_stand WHERE kurs_id = 'A'")[0];
    assert.deepEqual(stand, { status: "bestanden", notiz: "privat", note: 1.5 });
    assert.equal(zeilen(app, "SELECT abgeschlossen FROM lektion_fortschritt WHERE lektion_id = 'L1'")[0]?.abgeschlossen, 1);

    // Begriffs-Fortschritt wanderte mit auf die neuen IDs; "y" gibt es nicht mehr
    const neueId = (app.prepare("SELECT id FROM begriffe WHERE begriff_id = 'x'").get() as { id: number }).id;
    assert.notEqual(neueId, alteId, "die ID von x hat sich verschoben");
    const box = (begriff: string): unknown =>
      zeilen(app, "SELECT f.box FROM begriff_fortschritt f JOIN begriffe b ON b.id = f.begriff_id WHERE b.begriff_id = ?", begriff)[0]?.box;
    assert.equal(box("x"), 3);
    assert.equal(box("sbp:z"), 1);
    assert.equal(box("neu"), undefined);
    assert.equal(zeilen(app, "SELECT count(*) AS n FROM begriff_fortschritt")[0]?.n, 2);
    assert.deepEqual({ behalten: ergebnis.fortschrittBehalten, verloren: ergebnis.fortschrittVerloren }, { behalten: 2, verloren: 1 });

    // Stand der Inhalte vermerkt, Datenbank in sich stimmig, Paket wieder abgehaengt
    assert.equal(zeilen(app, "SELECT tag FROM inhalt_stand WHERE id = 1")[0]?.tag, "inhalt-2");
    assert.deepEqual(app.pragma("foreign_key_check"), []);
    assert.equal(app.pragma("integrity_check", { simple: true }), "ok");
    assert.ok(!zeilen(app, "PRAGMA database_list").some((d) => d.name === "paket"), "Paket ist wieder abgehaengt");
    app.close();
  });

  test("ein Fehler mitten im Einspielen rollt alles zurueck", () => {
    const app = neueDb("rollback.db");
    befuelle(app, v1);
    nutzerdaten(app, { x: 3 });
    app.exec("CREATE TRIGGER sabotage BEFORE INSERT ON begriffe BEGIN SELECT RAISE(ABORT, 'Test-Fehler'); END");
    const vorher = JSON.stringify(zeilen(app, "SELECT * FROM begriffe ORDER BY id"));

    assert.throws(() => spieleEin(app, paketAus("rollback", v2), herkunft), /Test-Fehler/);

    assert.equal(JSON.stringify(zeilen(app, "SELECT * FROM begriffe ORDER BY id")), vorher, "Begriffe unveraendert");
    assert.equal(zeilen(app, "SELECT name FROM kurse WHERE id = 'A'")[0]?.name, "Kurs A", "Kurs unveraendert");
    assert.equal(zeilen(app, "SELECT count(*) AS n FROM begriff_fortschritt")[0]?.n, 1, "Fortschritt unveraendert");
    assert.equal(zeilen(app, "SELECT count(*) AS n FROM inhalt_stand")[0]?.n, 0);
    assert.ok(!zeilen(app, "PRAGMA database_list").some((d) => d.name === "paket"), "Paket ist wieder abgehaengt");
    app.close();
  });
});

describe("Inhaltspaket pruefen", () => {
  const app = neueDb("pruefen.db");
  after(() => app.close());

  /** Abwandlung eines gueltigen Pakets. */
  function abgewandelt(name: string, aendern: (db: Database.Database) => void): string {
    const pfad = join(ordner, `abgewandelt-${name}.db`);
    erzeugePaket(join(ordner, "quelle-erzeugen.db"), pfad);
    const db = new Database(pfad);
    aendern(db);
    db.close();
    return pfad;
  }

  test("ein gueltiges Paket wird akzeptiert", () => {
    assert.doesNotThrow(() => pruefePaket(paketAus("gueltig", v2), app));
  });

  const faelle: [string, (db: Database.Database) => void, RegExp][] = [
    ["fremde Tabelle", (db) => db.exec("CREATE TABLE zusatz (x)"), /erwarteten Tabellen/],
    ["fehlende Tabelle", (db) => db.exec("DROP TABLE lern_themen"), /erwarteten Tabellen/],
    ["Trigger", (db) => db.exec("CREATE TRIGGER t AFTER INSERT ON kurse BEGIN SELECT 1; END"), /unerwartete Objekte/],
    ["View", (db) => db.exec("CREATE VIEW v AS SELECT 1"), /unerwartete Objekte/],
    ["andere Formatversion", (db) => db.pragma("user_version = 99"), /Format 99/],
    ["umbenannte Spalte", (db) => db.exec("ALTER TABLE begriffe RENAME COLUMN definition TO erklaerung"), /passt nicht zu dieser App-Version/],
  ];
  for (const [name, aendern, meldung] of faelle) {
    test(`lehnt ab: ${name}`, () => {
      assert.throws(() => pruefePaket(abgewandelt(name, aendern), app), (e) => e instanceof PaketFehler && meldung.test(e.message));
    });
  }

  test("lehnt ab: Datei ist keine Datenbank", () => {
    const pfad = join(ordner, "kaputt.db");
    writeFileSync(pfad, "das ist keine sqlite-datei, nur text ".repeat(50));
    assert.throws(() => pruefePaket(pfad, app), (e) => e instanceof PaketFehler);
  });

  test("lehnt ab: Datei fehlt", () => {
    assert.throws(() => pruefePaket(join(ordner, "gibt-es-nicht.db"), app), /keine lesbare Datenbank/);
  });
});
