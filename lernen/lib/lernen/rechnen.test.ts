import { test } from "node:test";
import assert from "node:assert/strict";
import type { Teil } from "./typen";
import { pruefeTeil, werteReell, termeGleich, liste } from "./rechnen";

test("Schulnotation wird gerechnet", () => {
  assert.equal(werteReell("1,5"), 1.5);
  assert.equal(werteReell("2·3"), 6);
  assert.ok(Math.abs(werteReell("√2") - Math.SQRT2) < 1e-12);
  assert.ok(Math.abs(werteReell("π") - Math.PI) < 1e-12);
  assert.equal(werteReell("3²"), 9);
  assert.ok(Math.abs(werteReell("ln(e)") - 1) < 1e-12);
  assert.ok(Math.abs(werteReell("sin(30°)") - 0.5) < 1e-12);
  assert.equal(werteReell("30°"), 30);
  assert.equal(werteReell("binom(50, 7)"), 99884400);
  assert.ok(Math.abs(werteReell("inGrad(atan2(2, -2*sqrt(3)))") - 150) < 1e-9);
  assert.ok(Math.abs(werteReell("sin(inRad(30))") - 0.5) < 1e-12);
  assert.ok(Math.abs(werteReell("integral(\"x^2\", 0, 3)") - 9) < 1e-9);
  assert.ok(Math.abs(werteReell("normcdf(1.96)") - 0.975) < 1e-3);
  assert.ok(Math.abs(werteReell("invnorm(0.975)") - 1.959964) < 1e-5);
});

test("Zahlen-Antworten mit Toleranz und Hinweisen", () => {
  const t = { typ: "zahl", loesung: "ln(2)/0.055" } as const;
  assert.ok(pruefeTeil(t, "12,6").ok);
  assert.ok(pruefeTeil(t, "ln(2)/0,055").ok);
  assert.ok(!pruefeTeil(t, "13").ok);
  assert.equal(pruefeTeil({ typ: "zahl", loesung: "-3" }, "3").meldung, "Vorzeichen prüfen.");
  assert.equal(pruefeTeil({ typ: "zahl", loesung: "5" }, "").meldung, "Bitte eine Antwort eingeben.");
});

test("Binomialverteilung (Musterprüfung Karigl Aufgabe 5)", () => {
  // P(X=0) bei n=12, p=1/4: 0.75^12
  assert.ok(Math.abs(werteReell("binompdf(12, 0.25, 0)") - 0.75 ** 12) < 1e-12);
  assert.ok(pruefeTeil({ typ: "zahl", loesung: "1-binomcdf(12,0.25,2)" }, "0,6093").ok);
});

test("Term-Vergleich erkennt äquivalente Terme und +C", () => {
  assert.ok(termeGleich("2x*e^(x^2)", "2*x*exp(x^2)"));
  assert.ok(!termeGleich("x^2", "2x"));
  assert.ok(termeGleich("x^3/3 + 7", "x^3/3", "x", undefined, true));
  assert.ok(termeGleich("ln(x)", "log(x)", "x", [0.5, 4]));
});

test("Komplexe Zahlen (Musterprüfung Karigl Aufgabe 6)", () => {
  const t = { typ: "komplex", loesung: "(5+2i)/(6-8i)" } as const;
  assert.ok(pruefeTeil(t, "0.14 + 0.52i").ok);
  assert.ok(pruefeTeil(t, "7/50 + 13/25 i").ok);
  assert.ok(pruefeTeil({ typ: "komplex", loesung: "(5+2i)*(6-8i)" }, "46-28i").ok);
});

test("Vektoren, Vielfache und Mengen", () => {
  assert.ok(pruefeTeil({ typ: "vektor", loesung: ["1", "-8", "14"] }, ["1", "-8", "14"]).ok);
  assert.ok(pruefeTeil({ typ: "vektor", loesung: ["3", "-4"], vielfaches: true }, ["-6", "8"]).ok);
  assert.ok(!pruefeTeil({ typ: "vektor", loesung: ["3", "-4"], vielfaches: true }, ["4", "3"]).ok);
  assert.ok(pruefeTeil({ typ: "menge", loesung: ["-sqrt(3)", "sqrt(3)"] }, "1,732; -1,732").ok);
  assert.ok(pruefeTeil({ typ: "menge", loesung: [] }, "{}").ok);
  assert.deepEqual(liste("1, -2, sqrt(3)"), ["1", "-2", "sqrt(3)"]);
});

test("Auswahl", () => {
  const t: Teil = { typ: "auswahl", optionen: ["a", "b", "c"], richtig: [0, 2] };
  assert.ok(pruefeTeil(t, [2, 0]).ok);
  assert.ok(!pruefeTeil(t, [0]).ok);
});

test("Leere Eingaben werden als leer erkannt, nicht als falsch", () => {
  for (const t of [
    { typ: "zahl", loesung: "1" },
    { typ: "komplex", loesung: "1+i" },
    { typ: "term", loesung: "x^2" },
    { typ: "menge", loesung: ["1"] },
  ] as Teil[]) {
    const u = pruefeTeil(t, "  ");
    assert.equal(u.leer, true, t.typ);
    assert.equal(u.meldung, "Bitte eine Antwort eingeben.");
  }
  assert.equal(pruefeTeil({ typ: "vektor", loesung: ["1", "2"] }, ["", ""]).leer, true);
  assert.equal(pruefeTeil({ typ: "auswahl", optionen: ["a", "b"], richtig: [0] }, []).leer, true);
  // teilweise ausgefuellter Vektor ist eine echte (falsche) Antwort
  assert.notEqual(pruefeTeil({ typ: "vektor", loesung: ["1", "2"] }, ["1", ""]).leer, true);
});

test("Zahlen mit der Einheit der Aufgabe werden akzeptiert", () => {
  const t: Teil = { typ: "zahl", loesung: "30", einheit: "m/s" };
  assert.ok(pruefeTeil(t, "30 m/s").ok);
  assert.ok(pruefeTeil(t, "30m/s").ok);
  assert.ok(pruefeTeil(t, "30").ok);
  // fremde, kompatible Einheit wird umgerechnet: 108 km/h = 30 m/s, 30 km/h nicht
  assert.ok(pruefeTeil(t, "108 km/h").ok);
  assert.ok(!pruefeTeil(t, "30 km/h").ok);
  assert.equal(pruefeTeil(t, "30 kg").meldung, "Bitte als Zahl in m/s angeben.");
  assert.ok(pruefeTeil({ typ: "zahl", loesung: "150", einheit: "°" }, "150°").ok);
  assert.ok(pruefeTeil({ typ: "zahl", loesung: "4.5", einheit: "Ω" }, "4,5 Ω").ok);
  // Vorsatz vor der Einheit der Aufgabe: nicht nur das Ende abschneiden, sondern umrechnen
  const m: Teil = { typ: "zahl", loesung: "5", einheit: "m" };
  assert.ok(pruefeTeil(m, "5000 mm").ok);
  assert.ok(pruefeTeil(m, "500 cm").ok);
  assert.ok(pruefeTeil(m, "0,005 km").ok);
  assert.ok(!pruefeTeil(m, "5 mm").ok);
  assert.ok(pruefeTeil({ typ: "zahl", loesung: "2", einheit: "s" }, "2000 ms").ok);
  // ein Ausdruck, der auf einen Namen endet, behaelt die Einheit der Aufgabe als Anhang
  assert.ok(pruefeTeil({ typ: "zahl", loesung: "120 + 144/pi", einheit: "°C" }, "120 + 144/pi °C").ok);
});

test("Fehlerbilder liefern gezielte Rueckmeldung statt nur 'falsch'", () => {
  const t: Teil = {
    typ: "zahl",
    loesung: "(5+2*6)/2",
    fehler: [
      { wert: "5+2*6/2", meldung: "Klammer vergessen" },
      { wert: "-8.5", meldung: "Vorzeichen" },
    ],
  };
  assert.deepEqual(pruefeTeil(t, "11"), { ok: false, fehlerbild: 0 });
  assert.equal(pruefeTeil(t, "8,5").ok, true);
  assert.equal(pruefeTeil(t, "3").fehlerbild, undefined);
  const a: Teil = { typ: "auswahl", optionen: ["a", "b", "c"], richtig: [1], fehler: [{ wert: 2, meldung: "c verwechselt" }] };
  assert.equal(pruefeTeil(a, [2]).fehlerbild, 0);
  const v: Teil = { typ: "vektor", loesung: ["1", "2"], fehler: [{ wert: ["2", "1"], meldung: "vertauscht" }] };
  assert.equal(pruefeTeil(v, ["2", "1"]).fehlerbild, 0);
});

test("Doppelpunkt teilt, ausser im Bedingungsausdruck", () => {
  assert.equal(werteReell("6:3"), 2);
  assert.equal(werteReell("x <= 1 ? 10 : 20", { x: 0 }), 10);
  assert.equal(werteReell("x <= 1 ? 10 : 20", { x: 2 }), 20);
});

test("Variable direkt vor einer Klammer ist ein Produkt, kein Funktionsaufruf", () => {
  assert.ok(termeGleich("2x(x-1)", "2x^2-2x"));
  assert.ok(termeGleich("3a(a+2)", "3a^2+6a", "a"));
  assert.ok(termeGleich("x(x+1)(x-1)", "x^3-x"));
  // echte Funktionen bleiben Funktionen
  assert.ok(termeGleich("sin(x)", "sin(x)"));
  assert.equal(werteReell("binom(5,2)"), 10);
  assert.ok(Math.abs(werteReell("2pi(3)") - 6 * Math.PI) < 1e-12);
});
