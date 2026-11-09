/**
 * Prueft die Java-Bloecke in Kapiteltexten (Lektionen, Loesungswege): jeder Block, der in der App "Ablauf ansehen"
 * bekommt (siehtAusfuehrbarAus), muss
 *   1. kompilieren und laufen (echtes Java) und
 *   2. in der Ablauf-Engine laufen und dieselbe Ausgabe liefern.
 * So zeigt der Darsteller nie etwas anderes als Java.
 *
 *   npm run lernen:lektion-ablauf -- <kurs> [NN ...] [--liste]
 *
 * Ohne Kapitelnummern werden alle Kapitel des Kurses geprueft. `--liste` zeigt auch die bestandenen Bloecke.
 * Exit-Code 1 bei Abweichung. Braucht ein JDK (wie `lernen:pruefen`).
 */
import fs from "node:fs";
import path from "node:path";
import { erzeugeAblauf } from "../lib/lernen/ablauf";
import { fuehreProgrammeAus } from "../lib/lernen/java/runner";
import { siehtAusfuehrbarAus } from "../components/lernen/Md";

const argumente = process.argv.slice(2);
const liste = argumente.includes("--liste");
const rest = argumente.filter((a) => !a.startsWith("--"));
const kurs = rest[0];
const nummern = rest.slice(1);
if (!kurs) {
  console.error("Aufruf: npm run lernen:lektion-ablauf -- <kurs> [NN ...] [--liste]");
  process.exit(2);
}

const ordner = path.join(process.cwd(), "content", kurs, "kapitel");
const dateien = fs
  .readdirSync(ordner)
  .filter((f) => f.endsWith(".md"))
  .filter((f) => !nummern.length || nummern.some((n) => f.startsWith(n.padStart(2, "0") + "-")))
  .sort();

interface Block {
  datei: string;
  zeile: number;
  code: string;
}

const bloecke: Block[] = [];
for (const datei of dateien) {
  const zeilen = fs.readFileSync(path.join(ordner, datei), "utf8").split("\n");
  // ```aufgabe-Bloecke enthalten YAML (auch Java als Text): nur Java-Zaeune ausserhalb davon, aber inklusive `loesung: |`
  let i = 0;
  while (i < zeilen.length) {
    const m = /^(\s*)```java\s*$/.exec(zeilen[i]);
    if (!m) {
      i++;
      continue;
    }
    const einzug = m[1].length;
    const start = i + 1;
    let j = start;
    while (j < zeilen.length && !new RegExp(`^\\s{0,${einzug}}\`\`\`\\s*$`).test(zeilen[j])) j++;
    const code = zeilen
      .slice(start, j)
      .map((z) => z.slice(Math.min(einzug, /^ */.exec(z)![0].length)))
      .join("\n");
    bloecke.push({ datei, zeile: start + 1, code: code.replace(/\n+$/, "\n") });
    i = j + 1;
  }
}

const lauffaehig = bloecke.filter((b) => siehtAusfuehrbarAus(b.code));

async function main() {
  const echt = await fuehreProgrammeAus(lauffaehig.map((b) => ({ code: b.code })));
  let fehler = 0;
  lauffaehig.forEach((b, i) => {
    const ort = `${b.datei}:${b.zeile}`;
    const e = echt[i];
    if (e.status !== "ok") {
      fehler++;
      console.log(`✗ ${ort}: echtes Java: ${e.status}${e.diagnosen?.[0] ? ` (Zeile ${e.diagnosen[0].zeile - e.versatz}: ${e.diagnosen[0].meldung.split("\n")[0]})` : ""}`);
      return;
    }
    const r = erzeugeAblauf(b.code);
    if (!r.ok) {
      fehler++;
      console.log(`✗ ${ort}: Ablauf-Engine: ${r.grund}${r.zeile ? ` (Zeile ${r.zeile})` : ""}: ${r.meldung}`);
      return;
    }
    if (r.ablauf.ausgabe !== e.ausgabe) {
      fehler++;
      console.log(`✗ ${ort}: Ausgabe verschieden\n    Java:   ${JSON.stringify(e.ausgabe)}\n    Engine: ${JSON.stringify(r.ablauf.ausgabe)}`);
      return;
    }
    if (liste) console.log(`✓ ${ort} (${r.ablauf.schritte.length} Schritte)`);
  });
  console.log(`${dateien.length} Kapitel, ${bloecke.length} Java-Blöcke, davon ${lauffaehig.length} mit Ablaufansicht, ${fehler} Fehler`);
  process.exit(fehler ? 1 : 0);
}

void main();
