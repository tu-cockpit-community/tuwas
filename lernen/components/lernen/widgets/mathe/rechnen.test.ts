import { test } from "node:test";
import assert from "node:assert/strict";
import { Bruch, gauss } from "./bruch";
import { kennzahlen, regression, leseDaten, quantil } from "./rechnen-statistik";
import { binomPmf, binomBereich, normCdf, normBereich, binomNormalApprox } from "./rechnen-stochastik";
import { argGrad, betrag, mal, durch, wurzeln, potenz, k } from "./rechnen-komplex";
import { ableitung, differenzierbar, simpson, riemann, kleinstesN, einseitigerGrenzwert, findeDelta } from "./rechnen-analysis";
import { zahlSig, piBruch, roemisch } from "./format";
import { kompiliere } from "@/lib/lernen/rechnen";

/* Erwartungswerte: Handrechnung bzw. python3 (statistics, math.comb, math.erf, cmath), siehe Kommentare. */

const nahe = (a: number, b: number, tol = 1e-9) => assert.ok(Math.abs(a - b) <= tol, `${a} ≉ ${b}`);
const B = (s: string) => Bruch.von(s)!;

test("Bruch: Lesen und Rechnen exakt", () => {
  assert.equal(B("1,5").text(), "3/2");
  assert.equal(B("−3/4").text(), "−3/4");
  assert.equal(B("2/0,5").text(), "4");
  assert.equal(Bruch.von(0.1)!.text(), "1/10");
  assert.equal(Bruch.von(1e-7)!.text(), "1/10000000");
  assert.equal(Bruch.von("abc"), null);
  assert.equal(Bruch.von("1/0"), null);
  // 1/3 + 1/6 = 1/2 ; (2/3)·(9/4) = 3/2
  assert.equal(B("1/3").plus(B("1/6")).text(), "1/2");
  assert.equal(B("2/3").mal(B("9/4")).text(), "3/2");
  assert.equal(B("-6/4").tex(), "-\\frac{3}{2}");
});

test("Gauss: eindeutige Lösung (2|3|−1) mit erklärten Schritten", () => {
  // 2x+y−z=8, −3x−y+2z=−11, −2x+y+2z=−3  -> x=2, y=3, z=−1 (Einsetzen bestaetigt)
  const m = [[2, 1, -1, 8], [-3, -1, 2, -11], [-2, 1, 2, -3]].map((z) => z.map((v) => Bruch.von(v)!));
  const { schritte, ergebnis } = gauss(m);
  assert.equal(schritte[0].operation, "II + 3/2·I"); // Faktor −3/2
  assert.equal(schritte[1].operation, "III + I"); // Faktor −1
  assert.equal(ergebnis.art, "eindeutig");
  if (ergebnis.art === "eindeutig") assert.deepEqual(ergebnis.werte.map((w) => w.text()), ["2", "3", "−1"]);
  // letzte Matrix ist reduzierte Stufenform
  const letzte = schritte.at(-1)!.matrix;
  assert.deepEqual(letzte.map((z) => z.map((v) => v.text())), [["1", "0", "0", "2"], ["0", "1", "0", "3"], ["0", "0", "1", "−1"]]);
});

test("Gauss: Brüche, Tausch, keine und unendlich viele Lösungen", () => {
  // 3x+2y=1, x−y=1 -> y=−2/5, x=3/5
  const a = gauss([[3, 2, 1], [1, -1, 1]].map((z) => z.map((v) => Bruch.von(v)!)));
  assert.equal(a.ergebnis.art, "eindeutig");
  if (a.ergebnis.art === "eindeutig") assert.deepEqual(a.ergebnis.werte.map((w) => w.text()), ["3/5", "−2/5"]);
  // 0x+y=2, x+y=3 -> Tausch zuerst, x=1, y=2
  const t = gauss([[0, 1, 2], [1, 1, 3]].map((z) => z.map((v) => Bruch.von(v)!)));
  assert.equal(t.schritte[0].operation, "I ↔ II");
  if (t.ergebnis.art === "eindeutig") assert.deepEqual(t.ergebnis.werte.map((w) => w.text()), ["1", "2"]);
  // x+y=2, 2x+2y=5 -> 0=1 in Zeile II
  const k0 = gauss([[1, 1, 2], [2, 2, 5]].map((z) => z.map((v) => Bruch.von(v)!)));
  assert.deepEqual(k0.ergebnis, { art: "keine", zeile: 1 });
  // x+2y+3z=4 (doppelt) -> y, z frei; x = 4 − 2y − 3z
  const u = gauss([[1, 2, 3, 4], [2, 4, 6, 8]].map((z) => z.map((v) => Bruch.von(v)!)));
  assert.equal(u.ergebnis.art, "unendlich");
  if (u.ergebnis.art === "unendlich") {
    assert.deepEqual(u.ergebnis.frei, [1, 2]);
    assert.equal(u.ergebnis.darstellung[0].konstante.text(), "4");
    assert.deepEqual(u.ergebnis.darstellung[0].koeff.map((c) => c.text()), ["−2", "−3"]);
  }
});

test("Statistik-Kennzahlen (python statistics)", () => {
  const s = kennzahlen([3, 5, 7, 7, 8, 10, 12])!;
  assert.equal(s.n, 7);
  nahe(s.mittel, 7.428571428571429);
  assert.equal(s.median, 7);
  assert.deepEqual(s.modus, [7]);
  assert.equal(s.spannweite, 9);
  // n·p = 1,75 -> x_(2) = 5 ; n·p = 5,25 -> x_(6) = 10
  assert.equal(s.q1, 5);
  assert.equal(s.q3, 10);
  nahe(s.varianzN, 7.673469387755102);
  nahe(s.varianzN1, 8.952380952380953);
  nahe(s.sN, 2.770102775666474);
  nahe(s.sN1, 2.9920529661723827);
  const g = [1, 2, 3, 4, 5, 6, 7, 8];
  assert.equal(quantil(g, 0.25), 2.5);
  assert.equal(quantil(g, 0.5), 4.5);
  assert.equal(quantil(g, 0.75), 6.5);
  assert.deepEqual(kennzahlen([1, 2, 3])!.modus, []);
  assert.equal(kennzahlen([]), null);
  const r = regression([[1, 2], [2, 4], [3, 5]])!;
  nahe(r.k, 1.5);
  nahe(r.d, 2 / 3);
  nahe(r.r, 0.9819805060619656);
  assert.deepEqual(leseDaten("3; 5 7\n1,5, 2"), { werte: [3, 5, 7, 1.5, 2], fehler: [] });
  assert.deepEqual(leseDaten("3; x").fehler, ["x"]);
});

test("Binomial- und Normalverteilung", () => {
  nahe(binomPmf(10, 0.5, 5), 252 / 1024, 1e-12);
  nahe(binomBereich(10, 0.5, 3, 7), 912 / 1024, 1e-12);
  nahe(binomPmf(50, 0.2, 10), 0.13981900517431584, 1e-12);
  assert.equal(binomPmf(5, 0, 0), 1);
  assert.equal(binomPmf(5, 1, 4), 0);
  nahe(normCdf(1.96), 0.9750021048517796, 1e-12);
  nahe(normBereich(-1, 1, 0, 1), 0.6826894921370859, 1e-12);
  nahe(normBereich(8, 12, 10, 2), 0.6826894921370859, 1e-12);
  nahe(binomNormalApprox(10, 0.5, 3, 7), 0.8861537019933419, 1e-12);
});

test("ε-N: kleinstes N", () => {
  // |a_n − 2/3| = 13/(6+9n) < 0,1  <=>  n > 13,78  -> N = 14
  const a = kompiliere("(2n-3)/(2+3n)", "n");
  const werte = Array.from({ length: 40 }, (_, i) => a(i + 1));
  assert.equal(kleinstesN(werte, 2 / 3, 0.1), 14);
  const alt = Array.from({ length: 30 }, (_, i) => (-1) ** (i + 1));
  assert.equal(kleinstesN(alt, 0, 0.5), null);
});

test("Polarform und komplexe Operationen", () => {
  assert.equal(argGrad(k(-1, 0)), 180);
  assert.equal(argGrad(k(-1, -0)), 180);
  nahe(argGrad(k(1, -1))!, -45);
  nahe(argGrad(k(-3, 4))!, 126.86989764584402);
  assert.equal(argGrad(k(0, 0)), null);
  assert.equal(betrag(k(-3, 4)), 5);
  assert.deepEqual(mal(k(1, 2), k(3, -1)), k(5, 5));
  assert.deepEqual(durch(k(5, 5), k(3, -1)), k(1, 2));
  assert.equal(durch(k(1, 1), k(0, 0)), null);
  assert.deepEqual(potenz(k(1, 1), 4), k(-4, 0));
  const w = wurzeln(k(-8, 0), 3);
  nahe(w[0].re, 1);
  nahe(w[0].im, Math.sqrt(3));
  nahe(w[1].re, -2);
  nahe(w[2].im, -Math.sqrt(3));
});

test("Numerik: Ableitung, Integral, Riemann, Grenzwerte, δ", () => {
  nahe(ableitung((x) => x ** 3, 2), 12, 1e-8);
  nahe(ableitung(Math.sin, 0), 1, 1e-10);
  assert.equal(differenzierbar(Math.abs, 0), false);
  assert.equal(differenzierbar((x) => x * x, 0), true);
  nahe(simpson((x) => x * x, 0, 2), 8 / 3, 1e-12);
  // x² auf [0,1], n=4: links (0+1+4+9)/64, rechts (1+4+9+16)/64
  nahe(riemann((x) => x * x, 0, 1, 4, "links").summe, 14 / 64, 1e-12);
  nahe(riemann((x) => x * x, 0, 1, 4, "rechts").summe, 30 / 64, 1e-12);
  nahe(riemann((x) => x * x, 0, 1, 4, "unter").summe, 14 / 64, 1e-12);
  nahe(riemann((x) => x * x, 0, 1, 4, "ober").summe, 30 / 64, 1e-12);
  const sinc = kompiliere("sin(x)/x");
  nahe(einseitigerGrenzwert(sinc, 0, -1), 1, 1e-8);
  assert.equal(einseitigerGrenzwert((x) => 1 / x, 0, 1), Infinity);
  assert.equal(einseitigerGrenzwert((x) => 1 / x, 0, -1), -Infinity);
  assert.ok(Number.isNaN(einseitigerGrenzwert((x) => Math.sin(1 / x), 0, 1)));
  nahe(einseitigerGrenzwert((x) => x + 1, 1, -1), 2, 1e-12);
  // f(x) = 2x bei s = 1: |2x − 2| < 0,1 <=> |x − 1| < 0,05
  nahe(findeDelta((x) => 2 * x, 1, 2, 0.1, 1)!, 0.05, 1e-6);
  // Sprung der Hoehe 1: fuer ε = 0,3 gibt es kein δ
  assert.equal(findeDelta((x) => (x <= 0 ? 0 : 1), 0, 0, 0.3, 1), null);
});

test("Formate", () => {
  assert.equal(zahlSig(0.000001234, 3), "1,23·10⁻⁶");
  assert.equal(zahlSig(-2.5), "−2,5");
  assert.equal(piBruch(150), "5π/6");
  assert.equal(piBruch(-90), "−π/2");
  assert.equal(piBruch(10), null);
  assert.equal(roemisch(3), "IV");
});

test("Eingesetzte Gleichung laesst Koeffizient 1 weg, aber nur als ganze Zahl", async () => {
  const { eingesetztTex, schoenerTex } = await import("./term");
  assert.equal(eingesetztTex("(c - a*x)/2", { a: -1, c: 2 }), "\\frac{2+x}{2}");
  assert.equal(schoenerTex("21x+0{,}1x"), "21x+0{,}1x");
});
