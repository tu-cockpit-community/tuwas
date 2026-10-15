import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { mitDateiCache } from "./dateiCache";

const ordner = () => fs.mkdtempSync(path.join(os.tmpdir(), "cache-"));

test("Cache: gleicher Schluessel berechnet nur einmal, ein neuer Schluessel rechnet neu", () => {
  const dir = ordner();
  const datei = path.join(dir, "x.json");
  let aufrufe = 0;
  const baue = () => ({ n: ++aufrufe });
  assert.deepEqual(mitDateiCache(datei, "a", baue), { n: 1 });
  assert.deepEqual(mitDateiCache(datei, "a", baue), { n: 1 });
  assert.deepEqual(mitDateiCache(datei, "b", baue), { n: 2 });
  assert.deepEqual(mitDateiCache(datei, "b", baue), { n: 2 });
  fs.rmSync(dir, { recursive: true, force: true });
});

test("Cache: eine beschaedigte Datei wird neu aufgebaut und ersetzt", () => {
  const dir = ordner();
  const datei = path.join(dir, "x.json");
  fs.writeFileSync(datei, "{ kaputt");
  assert.deepEqual(mitDateiCache(datei, "a", () => [1, 2]), [1, 2]);
  assert.deepEqual(mitDateiCache(datei, "a", () => [9]), [1, 2]);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("Cache: ohne Schreibmoeglichkeit wird trotzdem berechnet", () => {
  const dir = ordner();
  const blockiert = path.join(dir, "datei-statt-ordner");
  fs.writeFileSync(blockiert, "x");
  assert.deepEqual(mitDateiCache(path.join(blockiert, "x.json"), "a", () => "ok"), "ok");
  fs.rmSync(dir, { recursive: true, force: true });
});
