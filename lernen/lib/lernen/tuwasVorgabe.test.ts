import { test } from "node:test";
import assert from "node:assert/strict";
import { leseVorgabe } from "./tuwasVorgabe";

test("Vorgabe: neues Format mit Titel, Typ, ECTS; LVA-Schreibweisen zaehlen gleich", () => {
  const v = leseVorgabe({
    version: 2,
    lvas: ["185.A91", "192.033"],
    kurse: [
      { lva: "185.A91", titel: "Einführung in die Programmierung 1", typ: "VU", ects: 5.5, semester: "2026W" },
      { lva: "192.033", titel: "Logic and Reasoning", typ: null, ects: null, semester: null },
    ],
    sbp: true,
  })!;
  assert.deepEqual([...v.lvas].sort(), ["185A91", "192033"]);
  assert.equal(v.kurse.get("185A91")?.titel, "Einführung in die Programmierung 1");
  assert.equal(v.kurse.get("192033")?.ects, null);
  assert.equal(v.sbp, true);
});

test("Vorgabe: altes Format ({ lvas, sbp }) gilt weiter, ohne Titel", () => {
  const v = leseVorgabe({ lvas: ["185.A91", "180.766"], sbp: false })!;
  assert.deepEqual([...v.lvas].sort(), ["180766", "185A91"]);
  assert.equal(v.kurse.size, 0);
  assert.equal(v.sbp, false);
});

test("Vorgabe: kaputte Eintraege fallen einzeln weg, der Rest bleibt", () => {
  const v = leseVorgabe({
    lvas: ["", 5, "kein-lva", "104.265"],
    kurse: [null, "x", { lva: 7 }, { titel: "ohne Nummer" }, { lva: "12.3" }, { lva: "194.020", titel: "  ", ects: "6", typ: 3 }, { lva: "194020", titel: "Doppelt" }],
    sbp: "ja",
  })!;
  assert.deepEqual([...v.lvas].sort(), ["104265", "194020"]);
  assert.deepEqual(v.kurse.get("194020"), { lva: "194.020", titel: "194.020", typ: null, ects: null, semester: null });
  assert.equal(v.sbp, false, "nur echtes true schaltet die SBP ein");
});

test("Vorgabe: ohne verwertbaren Inhalt null", () => {
  for (const roh of [null, undefined, "", 0, [], {}, { sbp: true }, { lvas: "185.A91" }]) assert.equal(leseVorgabe(roh), null, JSON.stringify(roh));
});
