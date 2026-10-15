import { test } from "node:test";
import assert from "node:assert/strict";
import { abschnittStand, naechsterSchritt, type MKapitel } from "./mastery";
import type { Stand } from "./fortschritt";

const leer = (): Stand => ({ aufgaben: {}, gelesen: {}, pruefungen: {}, training: {}, karten: {}, wiederholen: {} });
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

test("Naechster Schritt bevorzugt den ersten nicht gemeisterten Abschnitt", () => {
  const s = leer();
  assert.equal(naechsterSchritt(kurs, s)?.abschnitt.id, "x");
  loese(s, "1", "2", "3", "4", "5");
  assert.equal(naechsterSchritt(kurs, s)?.abschnitt.id, "y");
  loese(s, "6");
  assert.equal(naechsterSchritt(kurs, s), null);
});

