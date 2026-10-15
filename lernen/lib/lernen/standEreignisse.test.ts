import { test } from "node:test";
import assert from "node:assert/strict";
import { falte } from "./standEreignisse";
import { LEER, type Stand } from "./stand";
import type { Ereignis } from "./journal";

const TAG = 864e5;
let n = 0;
const ev = (t: number, art: string, ref: string, wert: unknown, id = `e${n++}`): Ereignis => ({ v: 1, id, t, kurs: "ep1", art, ref, wert });

test("Ereignisse: geloest bleibt geloest, jeder Versuch zaehlt", () => {
  const s = falte([ev(1, "aufgabe", "x", { status: "richtig" }), ev(2, "aufgabe", "x", { status: "versucht" }), ev(3, "aufgabe", "x", { status: "angesehen" })]);
  assert.deepEqual(s.aufgaben.x, { s: "richtig", v: 2, t: 3 });
});

test("Ereignisse: Wiederholung folgt der letzten Antwort, Faelligkeit aus der Ereigniszeit", () => {
  const s = falte([ev(1000, "aufgabe", "x", { status: "richtig" })]);
  assert.deepEqual(s.wiederholen.x, { stufe: 1, faellig: 1000 + 1 * TAG });
  const s2 = falte([ev(1000, "aufgabe", "x", { status: "richtig" }), ev(2000, "aufgabe", "x", { status: "versucht" })]);
  assert.deepEqual(s2.wiederholen.x, { stufe: 0, faellig: 2000 + 1 * TAG });
});

test("Ereignisse: Karten nach Leitner, unabhaengig von der Uhr beim Falten", () => {
  const s = falte([ev(5000, "karte", "k", { gewusst: true }), ev(6000, "karte", "k", { gewusst: true })]);
  assert.deepEqual(s.karten.k, { stufe: 2, faellig: 6000 + 3 * TAG });
  const s2 = falte([ev(5000, "karte", "k", { gewusst: true }), ev(7000, "karte", "k", { gewusst: false })]);
  assert.deepEqual(s2.karten.k, { stufe: 0, faellig: 7000 });
});

test("Ereignisse: Training von zwei Geraeten zaehlt beides", () => {
  const s = falte([ev(1, "training", "d", { richtig: true }, "geraet-a"), ev(1, "training", "d", { richtig: true }, "geraet-b"), ev(2, "training", "d", { richtig: false })]);
  assert.deepEqual(s.training.d, { r: 2, f: 1 });
});

test("Ereignisse: gelesen an und wieder aus, Pruefungen werden angehaengt", () => {
  const s = falte([ev(1, "gelesen", "k#a", { an: true }), ev(2, "gelesen", "k#b", { an: true }), ev(3, "gelesen", "k#a", { an: false })]);
  assert.deepEqual(s.gelesen, { "k#b": 2 });
  const p = falte([ev(10, "pruefung", "p1", { punkte: 5, max: 10, dauer: 60 }), ev(20, "pruefung", "p1", { punkte: 8, max: 10, dauer: 50 })]);
  assert.deepEqual(p.pruefungen.p1, [
    { t: 10, punkte: 5, max: 10, dauer: 60 },
    { t: 20, punkte: 8, max: 10, dauer: 50 },
  ]);
});

test("Ereignisse: ersetzen setzt den Stand, spaetere Ereignisse gelten darauf", () => {
  const sicherung: Stand = { ...LEER, gelesen: { alt: 1 } };
  const s = falte([ev(1, "aufgabe", "x", { status: "richtig" }), ev(2, "ersetzen", "", sicherung), ev(3, "gelesen", "neu", { an: true })]);
  assert.deepEqual(s.aufgaben, {});
  assert.deepEqual(s.gelesen, { alt: 1, neu: 3 });
});

test("Ereignisse: Uebernahmen fuehren verlustfrei zusammen, in jeder Reihenfolge gleich", () => {
  const a: Stand = { ...LEER, aufgaben: { x: { s: "richtig", v: 2, t: 5 } }, pruefungen: { p: [{ t: 1, punkte: 1, max: 2, dauer: 3 }] } };
  const b: Stand = { ...LEER, aufgaben: { y: { s: "versucht", v: 1, t: 6 } }, pruefungen: { p: [{ t: 2, punkte: 2, max: 2, dauer: 3 }] } };
  const eins = falte([ev(1, "uebernahme", "", a, "u-a"), ev(2, "uebernahme", "", b, "u-b")]);
  const zwei = falte([ev(1, "uebernahme", "", b, "u-b"), ev(2, "uebernahme", "", a, "u-a")]);
  assert.deepEqual(Object.keys(eins.aufgaben).sort(), ["x", "y"]);
  assert.equal(eins.pruefungen.p.length, 2);
  assert.deepEqual(eins, zwei);
});

test("Ereignisse: auch ein Protokoll aus Jahren faltet in linearer Zeit", () => {
  // 30000 Ereignisse ueber 700 Aufgaben: ein Falten, das je Ereignis den ganzen Stand kopiert, braucht hier Sekunden
  const viele = Array.from({ length: 30000 }, (_, i) => ev(i, i % 3 ? "aufgabe" : "gelesen", `a${i % 700}`, i % 3 ? { status: "richtig" } : { an: true }, `p${i}`));
  const t0 = performance.now();
  const s = falte(viele);
  const ms = performance.now() - t0;
  assert.equal(Object.keys(s.aufgaben).length, 700);
  assert.ok(ms < 1500, `Falten dauerte ${ms.toFixed(0)} ms`);
});

test("Ereignisse: Falten veraendert den uebergebenen Grundstand nicht", () => {
  const basis: Stand = { ...LEER, gelesen: { alt: 1 } };
  const kopie = JSON.stringify(basis);
  falte([ev(1, "gelesen", "neu", { an: true }), ev(2, "aufgabe", "x", { status: "richtig" })], basis);
  assert.equal(JSON.stringify(basis), kopie);
});

test("Ereignisse: doppelte ids und kaputte Werte werden uebergangen", () => {
  const s = falte([ev(1, "training", "d", { richtig: true }, "gleich"), ev(1, "training", "d", { richtig: true }, "gleich"), ev(2, "aufgabe", "x", { status: "kaputt" }), ev(3, "unbekannt", "x", {})]);
  assert.deepEqual(s.training.d, { r: 1, f: 0 });
  assert.deepEqual(s.aufgaben, {});
});
