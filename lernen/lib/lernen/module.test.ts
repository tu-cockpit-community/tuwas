import { test } from "node:test";
import assert from "node:assert/strict";
import { MODULE, kategorieName, modulVon } from "./module";

test("Module: jede Kategorie gehoert zu einem Modul, die Reihenfolge bleibt", () => {
  assert.deepEqual(MODULE, ["StEOP", "Pflicht", "Enge Wahl", "Vertiefung AI & ML", "Freie Wahl", "Bachelorarbeit", "Vorkurs"]);
  assert.equal(modulVon("enge_wahl_und_vertiefung"), "Enge Wahl");
  assert.equal(modulVon("gibt-es-nicht"), undefined);
});

test("Kategorienamen: lesbar, unbekannte werden zumindest lesbar gemacht", () => {
  assert.equal(kategorieName("vertiefung_aiml"), "Vertiefung AI & ML");
  assert.equal(kategorieName("neue_kategorie"), "neue kategorie");
  assert.equal(kategorieName(undefined), "-");
});
