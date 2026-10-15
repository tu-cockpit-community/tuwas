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

const host = (lva: string, titel: string) => ({ lva, titel, typ: "VU", ects: 6, semester: "2026W" });

test("Faecher mit TUWAS: jede angemeldete LVA bekommt eine Zeile, auch ohne Eintrag in der Kursliste (Skelett)", () => {
  const a = baueFaecher({
    ...basis,
    tuwas: { lvas: new Set(["185A91", "192033", "999X99"]), sbp: false, kurse: new Map([["192033", host("192.033", "Logic and Reasoning")]]) },
  });
  assert.deepEqual(
    a.weitere.map((z) => [z.lva, z.titel, z.inhaltId ?? null]),
    [
      ["192.033", "Logic and Reasoning", null],
      ["999.X99", "999.X99", null],
    ],
  );
  assert.equal(a.weitere[0].ects, 6);
  assert.equal(a.anzahlKurse, 3);
});

test("Faecher: ein neuer Lernkurs mit LVA-Nummer, aber ohne Datenbankzeile, erscheint mit seinem Inhalt", () => {
  const a = baueFaecher({ ...basis, inhalte: [...inhalte, { id: "neu", lva: "194.999" }], tuwas: { lvas: new Set(["194999"]), sbp: false, kurse: new Map() } });
  assert.equal(a.weitere[0].inhaltId, "neu");
});

test("Faecher: leere Kursliste (keine Datenbank) - trotzdem jede angemeldete LVA, nichts wirft", () => {
  const a = baueFaecher({ kurse: [], pruefungen: [], inhalte: [], hatLernpfad: () => false, tuwas: { lvas: new Set(["185A91"]), sbp: true, kurse: new Map() } });
  assert.deepEqual(a.gruppen, []);
  assert.deepEqual(
    a.weitere.map((z) => z.lva),
    ["185.A91"],
  );
  assert.deepEqual(a.sbp, []);
});

test("Faecher ohne TUWAS: keine Skelettzeilen", () => {
  assert.deepEqual(baueFaecher({ ...basis, tuwas: null }).weitere, []);
});
