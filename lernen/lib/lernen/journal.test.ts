import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { haenge, journalPfad, liesEreignisse, type Ereignis } from "./journal";

function mitJournal<T>(f: (datei: string, dir: string) => T): T {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "journal-"));
  const datei = path.join(dir, "lernstand.jsonl");
  process.env.LERNEN_JOURNAL = datei;
  try {
    return f(datei, dir);
  } finally {
    delete process.env.LERNEN_JOURNAL;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const ev = (id: string, t: number, kurs = "ep1"): Ereignis => ({ v: 1, id, t, kurs, art: "gelesen", ref: "k#a", wert: { an: true } });

test("Journal: zurueckgelesen nach (t, id) sortiert, doppelte ids nur einmal gespeichert", () =>
  mitJournal((datei) => {
    assert.equal(haenge([ev("b", 2), ev("a", 2), ev("c", 1)]), 3);
    assert.equal(haenge([ev("a", 2), ev("d", 3)]), 1);
    assert.deepEqual(
      liesEreignisse().map((e) => e.id),
      ["c", "a", "b", "d"],
    );
    assert.equal(fs.readFileSync(datei, "utf8").trim().split("\n").length, 4);
  }));

test("Journal: nach Kurs gefiltert", () =>
  mitJournal(() => {
    haenge([ev("a", 1, "ep1"), ev("b", 2, "mathe3")]);
    assert.deepEqual(
      liesEreignisse("mathe3").map((e) => e.id),
      ["b"],
    );
  }));

test("Journal: eine abgebrochene letzte Zeile wird uebersprungen, das naechste Anhaengen beginnt eine neue Zeile", () =>
  mitJournal((datei) => {
    haenge([ev("a", 1)]);
    fs.appendFileSync(datei, '{"v":1,"id":');
    assert.deepEqual(
      liesEreignisse().map((e) => e.id),
      ["a"],
    );
    haenge([ev("b", 2)]);
    assert.deepEqual(
      liesEreignisse().map((e) => e.id),
      ["a", "b"],
    );
  }));

test("Journal: wird nie kuerzer, Zeilen fremder Form werden ignoriert", () =>
  mitJournal((datei) => {
    haenge([ev("a", 1)]);
    fs.appendFileSync(datei, '{"etwas":"anderes"}\n');
    const vorher = fs.statSync(datei).size;
    haenge([ev("a", 1)]);
    haenge([ev("b", 2)]);
    assert.ok(fs.statSync(datei).size > vorher);
    assert.deepEqual(
      liesEreignisse().map((e) => e.id),
      ["a", "b"],
    );
  }));

test("Journal: Anhaengen aus einem anderen Prozess wird erkannt", () =>
  mitJournal((datei) => {
    haenge([ev("a", 1)]);
    assert.equal(liesEreignisse().length, 1);
    fs.appendFileSync(datei, JSON.stringify(ev("x", 5)) + "\n");
    assert.deepEqual(
      liesEreignisse().map((e) => e.id),
      ["a", "x"],
    );
    assert.equal(haenge([ev("x", 5)]), 0, "die fremde id ist bekannt");
  }));

test("Journal: hoechstens eine Tageskopie, die letzten 30 bleiben", () =>
  mitJournal((datei, dir) => {
    haenge([ev("start", 0)], new Date(Date.UTC(2026, 0, 1, 8)));
    for (let tag = 2; tag <= 35; tag++) {
      const d = new Date(Date.UTC(2026, 0, tag, 8));
      haenge([ev(`a${tag}`, tag)], d);
      haenge([ev(`b${tag}`, tag)], new Date(d.getTime() + 3600_000));
    }
    const kopien = fs.readdirSync(path.join(dir, "sicherungen"));
    assert.equal(kopien.length, 30);
    assert.ok(kopien.every((n) => /^lernstand-\d{4}-\d{2}-\d{2}\.jsonl$/.test(n)));
    assert.equal(liesEreignisse().length, 1 + 34 * 2);
    assert.ok(fs.existsSync(datei));
  }));

test("Journal: Pfad aus LERNEN_JOURNAL, sonst der XDG-Datenordner", () => {
  process.env.LERNEN_JOURNAL = "/x/y/lernstand.jsonl";
  assert.equal(journalPfad(), "/x/y/lernstand.jsonl");
  delete process.env.LERNEN_JOURNAL;
  if (process.platform !== "linux") return;
  const alt = process.env.XDG_DATA_HOME;
  try {
    process.env.XDG_DATA_HOME = "/daten";
    assert.equal(journalPfad(), "/daten/tuwas/lernen/lernstand.jsonl");
    delete process.env.XDG_DATA_HOME;
    assert.equal(journalPfad(), path.join(os.homedir(), ".local", "share", "tuwas", "lernen", "lernstand.jsonl"));
  } finally {
    if (alt === undefined) delete process.env.XDG_DATA_HOME;
    else process.env.XDG_DATA_HOME = alt;
  }
});
