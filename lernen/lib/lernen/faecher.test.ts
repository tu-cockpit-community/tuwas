import { test } from "node:test";
import assert from "node:assert/strict";
import { baueFaecher } from "./faecher";
import type { Kurs } from "@/lib/types";

const kurs = (id: string, lva: string, kategorie: string, extra: Partial<Kurs> = {}): Kurs => ({ id, lva_nummer: lva, name: id, typ: "VU", ects: 5, kategorie, ...extra }) as Kurs;
const kurse = [
  kurs("185A91", "185.A91", "steop"),
  kurs("180766", "180.766", "steop", { sbp_wahlfach: true }),
  kurs("aud", "TBD", "pflicht"),
  kurs("194020", "194.020", "enge_wahl"),
];
const pruefungen = [{ id: "sbp-wahlfach" }, { id: "sbp-mathe3" }];
const inhalte = [
  { id: "ep1", lva: "185.A91" },
  { id: "mathe3", sbp: "sbp-mathe3" },
];
const basis = { kurse, pruefungen, inhalte, hatLernpfad: (id: string) => id === "180766" };

test("Faecher mit TUWAS: nur angemeldete LVAs, nach Modul, Inhaltskurs ueber die LVA-Nummer", () => {
  const a = baueFaecher({ ...basis, tuwas: { lvas: new Set(["185A91", "194020"]), sbp: false } });
  assert.deepEqual(a.gruppen.map((m) => [m.titel, m.zeilen.map((z) => z.kurs.id)]), [["StEOP", ["185A91"]], ["Enge Wahl", ["194020"]]]);
  assert.equal(a.gruppen[0].zeilen[0].inhaltId, "ep1");
  assert.equal(a.sbp, null);
  assert.equal(a.anzahlKurse, 2);
});

test("Faecher: die SBP verbindet Pruefung und Inhaltskurs ueber die sbp-Id, das Wahlfach ueber die Datenbank", () => {
  const a = baueFaecher({ ...basis, tuwas: { lvas: new Set(), sbp: true } });
  assert.equal(a.sbp?.[1].inhaltId, "mathe3");
  assert.equal(a.sbp?.[0].wahlfach?.id, "180766");
  assert.equal(a.sbp?.[1].wahlfach, undefined);
});

test("Faecher ohne TUWAS: alles mit Lernpfad oder Inhalt, und die SBP", () => {
  const a = baueFaecher({ ...basis, tuwas: null });
  assert.deepEqual(a.gruppen.flatMap((m) => m.zeilen.map((z) => z.kurs.id)), ["185A91", "180766"]);
  assert.ok(a.sbp);
});
