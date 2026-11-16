import { test } from "node:test";
import assert from "node:assert/strict";
import { abschnittStand, naechsterSchritt, type MKapitel } from "./mastery";
import type { Stand } from "./fortschritt";

const leer = (): Stand => ({ aufgaben: {}, gelesen: {}, manuell: {}, pruefungen: {}, training: {}, karten: {}, wiederholen: {} });
const loese = (s: Stand, ...ids: string[]) => ids.forEach((id) => (s.aufgaben[id] = { s: "richtig", v: 1, t: 0 }));

const kurs: MKapitel[] = [
  {
    slug: "a",
    nummer: 1,
    titel: "A",
    stunden: 10,
    pruefungsgewicht: 1,
    abschnitte: [
      { id: "x", titel: "X", nummer: "1.1", aufgaben: [...["1", "2", "3", "4", "5"].map((id) => ({ id, art: "uebung" as const })), { id: "c", art: "check" as const }] },
      { id: "y", titel: "Y", nummer: "1.2", aufgaben: [{ id: "6", art: "uebung" }] },
    ],
  },
];

test("Mastery ab 80 % selbst geloester Uebungen; Kurzchecks zaehlen nicht", () => {
  const s = leer();
  loese(s, "1", "2", "3");
  assert.equal(abschnittStand(kurs[0].abschnitte[0], s).gemeistert, false);
  loese(s, "4");
  const st = abschnittStand(kurs[0].abschnitte[0], s);
  assert.equal(st.gesamt, 5);
  assert.equal(st.gemeistert, true);
  s.aufgaben["6"] = { s: "angesehen", v: 0, t: 0 };
  assert.equal(abschnittStand(kurs[0].abschnitte[1], s).gemeistert, false);
});

test("Als durchgearbeitet markiert gilt vor den Uebungen: Abschnitt ist gemeistert, die Uebungen bleiben offen", () => {
  const s = leer();
  const a = kurs[0].abschnitte[0];
  assert.equal(abschnittStand(a, s, "a#x").gemeistert, false);
  s.gelesen["a#x"] = 1;
  const st = abschnittStand(a, s, "a#x");
  assert.equal(st.gemeistert, true);
  assert.equal(st.gelesen, true);
  assert.equal(st.geloest, 0);
  assert.equal(st.gesamt, 5);
  assert.equal(s.aufgaben["1"], undefined);
  // die Markierung eines anderen Abschnitts wirkt nicht
  assert.equal(abschnittStand(kurs[0].abschnitte[1], s, "a#y").gemeistert, false);
  // ohne Schluessel (kein Abschnitt-Bezug) gibt es keinen Override
  assert.equal(abschnittStand(a, s).gemeistert, false);
});

test("Von Hand als geloest markierte Aufgaben zaehlen wie geloeste", () => {
  const s = leer();
  const a = kurs[0].abschnitte[0];
  s.manuell["1"] = 1;
  s.manuell["2"] = 1;
  s.manuell["3"] = 1;
  assert.equal(abschnittStand(a, s).geloest, 3);
  assert.equal(abschnittStand(a, s).gemeistert, false);
  s.manuell["4"] = 1;
  assert.equal(abschnittStand(a, s).gemeistert, true);
  // eine versuchte Aufgabe, die zusaetzlich manuell markiert ist, zaehlt einmal als geloest und nicht als versucht
  s.aufgaben["5"] = { s: "versucht", v: 1, t: 0 };
  s.manuell["5"] = 1;
  const st = abschnittStand(a, s);
  assert.equal(st.geloest, 5);
  assert.equal(st.versucht, 0);
});

test("Naechster Schritt ueberspringt einen als durchgearbeitet markierten Abschnitt", () => {
  const s = leer();
  s.gelesen["a#x"] = 1;
  assert.equal(naechsterSchritt(kurs, s)?.abschnitt.id, "y");
});

test("Naechster Schritt bevorzugt den ersten nicht gemeisterten Abschnitt", () => {
  const s = leer();
  assert.equal(naechsterSchritt(kurs, s)?.abschnitt.id, "x");
  loese(s, "1", "2", "3", "4", "5");
  assert.equal(naechsterSchritt(kurs, s)?.abschnitt.id, "y");
  loese(s, "6");
  assert.equal(naechsterSchritt(kurs, s), null);
});

