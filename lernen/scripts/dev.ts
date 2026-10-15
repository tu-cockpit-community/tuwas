/** npm run dev: loescht den Turbopack-Dev-Cache (ein veralteter Cache hat dynamische Routen wie /kurse/[id] auf 404 gesetzt)
 * und ruft nach dem Start die Hauptseiten einmal auf, damit sie beim ersten Klick schon kompiliert sind. */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

fs.rmSync(path.join(process.cwd(), ".next"), { recursive: true, force: true });

const SEITEN = ["/lernen", "/kurse/185A91", "/lernen/ep1", "/lernen/mathe3", "/lernen/physik1"];

async function aufwaermen(basis: string) {
  for (const seite of SEITEN) {
    try {
      await fetch(basis + seite);
    } catch {
      /* Aufwaermen ist optional; Fehler sind hier egal */
    }
  }
  console.log("Aufgewaermt: Hauptseiten sind kompiliert.");
}

const kind = spawn("npx", ["next", "dev", ...process.argv.slice(2)], { stdio: ["inherit", "pipe", "inherit"] });
let gestartet = false;
kind.stdout.on("data", (chunk: Buffer) => {
  const text = chunk.toString();
  process.stdout.write(text);
  const url = text.match(/Local:\s+(http:\/\/\S+)/)?.[1];
  if (url && !gestartet) {
    gestartet = true;
    void aufwaermen(url.replace(/\/$/, ""));
  }
});
kind.on("exit", (code) => process.exit(code ?? 0));
for (const sig of ["SIGINT", "SIGTERM"] as const) process.on(sig, () => kind.kill(sig));
