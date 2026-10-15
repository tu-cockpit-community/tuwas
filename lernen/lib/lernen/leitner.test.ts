import { test } from "node:test";
import assert from "node:assert/strict";
import { LEITNER_TAGE, MAX_STUFE, naechsteStufe, tageBis } from "./leitner";

test("Leitner: richtig steigt bis zur hoechsten Stufe, falsch faellt auf 0", () => {
  assert.equal(naechsteStufe(0, true), 1);
  assert.equal(naechsteStufe(MAX_STUFE, true), MAX_STUFE);
  assert.equal(naechsteStufe(3, false), 0);
});

test("Leitner: Abstaende wachsen, Stufe 0 ist sofort faellig", () => {
  assert.equal(tageBis(0), 0);
  assert.deepEqual([1, 2, 3, 4, 5].map(tageBis), [...LEITNER_TAGE]);
  assert.ok(LEITNER_TAGE.every((t, i) => i === 0 || t > LEITNER_TAGE[i - 1]));
});
