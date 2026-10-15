import { test } from "node:test";
import assert from "node:assert/strict";
import { asciiSlug } from "./slug";

test("Abschnitts-ids sind ASCII und lesbar", () => {
  assert.equal(asciiSlug("Die ε-N-Definition des Grenzwerts"), "die-epsilon-n-definition-des-grenzwerts");
  assert.equal(asciiSlug("Quadratische Gleichungen in ℂ"), "quadratische-gleichungen-in");
  assert.equal(asciiSlug("Größen & Einheiten: Übersicht"), "groessen-einheiten-uebersicht");
  assert.match(asciiSlug("Δx und √2"), /^[a-z0-9-]+$/);
  // zerlegt geschriebene Umlaute (NFD, z. B. aus macOS) ergeben dieselbe id
  assert.equal(asciiSlug("Größen".normalize("NFD")), "groessen");
});
