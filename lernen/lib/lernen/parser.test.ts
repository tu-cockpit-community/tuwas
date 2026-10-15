import { test } from "node:test";
import assert from "node:assert/strict";
import { parseKapitel } from "./parser";

const KOPF = "---\nnummer: 1\ntitel: T\nkurz: K\nteil: A\n---\n";

test("eingerueckter Codezaun in loesung schliesst den Aufgabenblock nicht", () => {
  const md = `${KOPF}## A\n\`\`\`aufgabe\nid: x-1\ntitel: T\nniveau: 1\nangabe: a\nloesung: |\n  Schritt\n  \`\`\`plot\n  x: [0, 1]\n  \`\`\`\n  Ende\n\`\`\`\nNachtext\n`;
  const { kapitel, fehler } = parseKapitel("t", md);
  assert.deepEqual(fehler, []);
  const bloecke = kapitel!.abschnitte[0].bloecke;
  assert.equal(bloecke[0].art, "aufgabe");
  assert.ok(bloecke[0].art === "aufgabe" && bloecke[0].aufgabe.loesung.includes("```plot"));
  assert.ok(bloecke[1].art === "md" && bloecke[1].md === "Nachtext");
});

test("Abschnitts-ids bleiben eindeutig, auch wenn ein Titel wie eine Nummerierung aussieht", () => {
  const { kapitel } = parseKapitel("t", `${KOPF}## A\n## A\n## A 1\n## A\n`);
  const ids = kapitel!.abschnitte.map((a) => a.id);
  assert.deepEqual(ids, ["a", "a-1", "a-1-1", "a-2"]);
});

test("Frontmatter-Ende mit Leerraum und CRLF wird erkannt", () => {
  const { kapitel, fehler } = parseKapitel("t", "---\r\nnummer: 1\r\ntitel: T\r\nkurz: K\r\nteil: A\r\n--- \r\n## B\r\n");
  assert.deepEqual(fehler, []);
  assert.equal(kapitel!.abschnitte[0].id, "b");
});

test("nicht geschlossener Block und doppelte id werden gemeldet", () => {
  const a = (id: string) => `\`\`\`aufgabe\nid: ${id}\ntitel: T\nniveau: 1\nangabe: a\nloesung: b\n\`\`\`\n`;
  assert.match(parseKapitel("t", `${KOPF}${a("d")}${a("d")}`).fehler.map((f) => f.meldung).join(), /doppelte/);
  assert.match(parseKapitel("t", `${KOPF}\`\`\`aufgabe\nid: q\n`).fehler.map((f) => f.meldung).join(), /nicht geschlossen/);
});
