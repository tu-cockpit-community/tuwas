import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { alterStand, uebernimmAltenStand } from "./fortschrittSpeicher";
import { liesEreignisse } from "./journal";
import { falte } from "./standEreignisse";
import { LEER, lesbarerStand, vereine, type Stand } from "./stand";

/** Alter Datenordner (LERNEN_DATEN) und Protokoll in einem Temp-Ordner. */
function mitOrdnern<T>(f: (alt: string, journal: string) => T): T {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lernstand-"));
  const alt = path.join(dir, "alt");
  fs.mkdirSync(path.join(alt, "sicherungen"), { recursive: true });
  process.env.LERNEN_DATEN = alt;
  process.env.LERNEN_JOURNAL = path.join(dir, "j", "lernstand.jsonl");
  try {
    return f(alt, process.env.LERNEN_JOURNAL);
  } finally {
    delete process.env.LERNEN_DATEN;
    delete process.env.LERNEN_JOURNAL;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const mit = (n: number, von = 0): Stand => ({ ...LEER, aufgaben: Object.fromEntries(Array.from({ length: n }, (_, i) => [`a${i + von}`, { s: "richtig" as const, v: 1, t: i }])) });
const schreibAlt = (alt: string, kurs: string, stand: Stand, datei = `${kurs}.json`) => fs.writeFileSync(path.join(alt, datei), JSON.stringify({ rev: 3, stand }));

test("Alter Stand: Datei, sonst die neueste passende Sicherung, sonst nichts", () =>
  mitOrdnern((alt) => {
    assert.equal(alterStand("ep1"), null);
    fs.writeFileSync(path.join(alt, "sicherungen", "ep1-2026-10-01.json"), JSON.stringify({ rev: 1, stand: mit(2) }));
    fs.writeFileSync(path.join(alt, "sicherungen", "ep1-x-2026-10-09.json"), JSON.stringify({ rev: 1, stand: mit(9) }));
    assert.equal(Object.keys(alterStand("ep1")!.aufgaben).length, 2, "nicht die Sicherung von ep1-x");
    schreibAlt(alt, "ep1", mit(5));
    assert.equal(Object.keys(alterStand("ep1")!.aufgaben).length, 5);
  }));

test("Uebernahme: ein Ereignis, auch beim zweiten Mal; die alte Datei bleibt unveraendert", () =>
  mitOrdnern((alt) => {
    schreibAlt(alt, "ep1", mit(4));
    const vorher = fs.readFileSync(path.join(alt, "ep1.json"), "utf8");
    uebernimmAltenStand("ep1");
    uebernimmAltenStand("ep1");
    const ev = liesEreignisse("ep1");
    assert.equal(ev.length, 1);
    assert.match(ev[0].id, /^uebernahme:fach:ep1:[0-9a-f]{16}$/);
    assert.equal(Object.keys(falte(ev).aufgaben).length, 4);
    assert.equal(fs.readFileSync(path.join(alt, "ep1.json"), "utf8"), vorher);
  }));

test("Uebernahme: zwei Rechner mit verschiedenem Stand, Protokolle zusammengelegt, beide bleiben", () =>
  mitOrdnern((alt, journal) => {
    schreibAlt(alt, "ep1", { ...mit(3), pruefungen: { p: [{ t: 1, punkte: 4, max: 10, dauer: 9 }] } });
    uebernimmAltenStand("ep1");
    const rechnerA = fs.readFileSync(journal, "utf8");
    fs.rmSync(journal);
    // Rechner B: eigener alter Datenordner mit anderem Stand
    const altB = path.join(path.dirname(alt), "altB");
    fs.mkdirSync(altB);
    process.env.LERNEN_DATEN = altB;
    schreibAlt(altB, "ep1", { ...mit(3, 100), pruefungen: { p: [{ t: 2, punkte: 7, max: 10, dauer: 9 }] } });
    uebernimmAltenStand("ep1");
    fs.appendFileSync(journal, rechnerA); // cat rechnerA >> lernstand.jsonl
    const s = falte(liesEreignisse("ep1"));
    assert.deepEqual(Object.keys(s.aufgaben).sort(), ["a0", "a1", "a100", "a101", "a102", "a2"]);
    assert.equal(s.pruefungen.p.length, 2);
  }));

test("Uebernahme: ohne alten Stand passiert nichts", () =>
  mitOrdnern(() => {
    uebernimmAltenStand("ep1");
    assert.equal(liesEreignisse().length, 0);
  }));

test("Zusammenfuehren: nichts geht verloren, geloest bleibt geloest, Zaehler wachsen", () => {
  const a: Stand = { ...LEER, aufgaben: { x: { s: "richtig", v: 2, t: 5 } }, gelesen: { k: 1 }, training: { d: { r: 3, f: 1 } }, karten: { c: { stufe: 2, faellig: 10 } } };
  const b: Stand = { ...LEER, aufgaben: { x: { s: "versucht", v: 5, t: 9 }, y: { s: "angesehen", v: 0, t: 1 } }, gelesen: { j: 2 }, training: { d: { r: 2, f: 4 } }, karten: { c: { stufe: 0, faellig: 99 } } };
  const m = vereine(a, b);
  assert.deepEqual(m.aufgaben.x, { s: "richtig", v: 5, t: 9 });
  assert.ok(m.aufgaben.y);
  assert.deepEqual(Object.keys(m.gelesen).sort(), ["j", "k"]);
  assert.deepEqual(m.training.d, { r: 3, f: 4 });
  assert.equal(m.karten.c.stufe, 2);
});

test("Lesen: aeltere Staende ohne alle Bereiche werden ergaenzt, falsche Formen abgelehnt", () => {
  assert.deepEqual(lesbarerStand({ aufgaben: {} }), LEER);
  assert.equal(lesbarerStand({ aufgaben: { x: 1 } }), null);
});
