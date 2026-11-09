import { test } from "node:test";
import assert from "node:assert/strict";
import { RAHMEN_MARKE, setzeInRahmen } from "./java/quelle";

const rahmen = `class K {\n    void f() {\n        ${RAHMEN_MARKE}\n    }\n}\n`;

test("setzeInRahmen: Antwort übernimmt den Einzug der Marke, versatz zählt die Zeilen davor", () => {
  const r = setzeInRahmen(rahmen, "a = 1;\nif (a > 0) {\n    a++;\n}\n\n");
  assert.equal(r.quelle, "class K {\n    void f() {\n        a = 1;\n        if (a > 0) {\n            a++;\n        }\n    }\n}\n");
  assert.equal(r.versatz, 2);
  assert.equal(r.zeilen, 4);
});

test("setzeInRahmen: ohne Rahmen bleibt die Antwort unverändert, ohne Marke gibt es einen Fehler", () => {
  assert.equal(setzeInRahmen(undefined, "x").quelle, "x");
  assert.throws(() => setzeInRahmen("class K {}", "x"), /Marke/);
});

test("setzeInRahmen: leere Antwort lässt den Rahmen kompilierbar (eine leere Zeile)", () => {
  const r = setzeInRahmen(rahmen, "");
  assert.equal(r.zeilen, 1);
  assert.equal(r.quelle.split("\n").length, rahmen.split("\n").length);
});
