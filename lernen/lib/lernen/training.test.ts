import { test } from "node:test";
import assert from "node:assert/strict";
import { polyTex, bruchTex, tz, Rng, polyAusdruck } from "./training";
import { werteReell } from "./rechnen";

test("Polynom-LaTeX", () => {
  assert.equal(polyTex([1, -3, 0, 2]), "x^{3} - 3x^{2} + 2");
  assert.equal(polyTex([-1, 1]), "-x + 1");
  assert.equal(polyTex([0, 0]), "0");
  assert.equal(polyTex([2.5, 0]), "2{,}5x");
});

test("Polynom-Ausdruck rechnet wie das Polynom", () => {
  assert.equal(werteReell(polyAusdruck([1, -3, 0, 2]).replaceAll("x", "(2)")), 8 - 12 + 2);
});

test("Brueche und Zahlen", () => {
  assert.equal(bruchTex(6, -8), "-\\frac{3}{4}");
  assert.equal(bruchTex(4, 2), "2");
  assert.equal(tz(-0.125), "-0{,}125");
});

test("Rng ist deterministisch und bleibt im Bereich", () => {
  const a = new Rng(42);
  const b = new Rng(42);
  for (let i = 0; i < 200; i++) {
    const v = a.int(-3, 5);
    assert.equal(v, b.int(-3, 5));
    assert.ok(v >= -3 && v <= 5);
    assert.notEqual(a.intOhne0(-2, 2), 0);
    b.intOhne0(-2, 2);
  }
});
