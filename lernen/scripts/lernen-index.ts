/** Erzeugt content/<fach>/training/index.ts aus allen Generator-Dateien des Ordners (npm run lernen:index). */
import fs from "node:fs";
import path from "node:path";

const WURZEL = path.join(process.cwd(), "content");
for (const fach of fs.readdirSync(WURZEL)) {
  const dir = path.join(WURZEL, fach, "training");
  if (!fs.existsSync(dir)) continue;
  // wie der Validator: Tests und Typdeklarationen sind keine Generatoren (sonst landet node:test im Client-Bundle)
  const dateien = fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "index.ts" && !f.endsWith(".test.ts") && !f.endsWith(".d.ts")).sort();
  const namen = dateien.map((f, i) => `d${i}`);
  const inhalt =
    `// GENERIERT von scripts/lernen-index.ts -- nicht von Hand bearbeiten.\n` +
    `import type { Drill } from "@/lib/lernen/training";\n` +
    dateien.map((f, i) => `import { DRILLS as ${namen[i]} } from "./${f.replace(/\.ts$/, "")}";\n`).join("") +
    `\nexport const DRILLS: Drill[] = [${namen.map((n) => `...${n}`).join(", ")}];\n`;
  const ziel = path.join(dir, "index.ts");
  if (!fs.existsSync(ziel) || fs.readFileSync(ziel, "utf8") !== inhalt) fs.writeFileSync(ziel, inhalt);
  console.log(`${fach}: ${dateien.length} Trainingsdateien`);
}
