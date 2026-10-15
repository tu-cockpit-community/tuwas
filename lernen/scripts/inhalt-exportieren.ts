/**
 * Erzeugt aus db/lernen.db ein Inhaltspaket (nur Inhalt, kein Nutzerstand) fuer ein GitHub-Release.
 * Aufruf: npm run inhalt:exportieren [-- <zieldatei>]   (Standard: dist/lernen-inhalt.db)
 */
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import Database from "better-sqlite3";
import { PAKET_DATEI } from "../lib/inhalt/konfig";
import { erzeugePaket, pruefePaket } from "../lib/inhalt/paket";

const quelle = join(process.cwd(), "db", "lernen.db");
const ziel = resolve(process.argv[2] ?? join("dist", PAKET_DATEI));
mkdirSync(dirname(ziel), { recursive: true });

const zeilen = erzeugePaket(quelle, ziel);

// Gegenprobe: das Paket muss zu dieser App passen, sonst waere es unbrauchbar.
const app = new Database(quelle, { readonly: true });
try {
  pruefePaket(ziel, app);
} finally {
  app.close();
}

console.log(`Inhaltspaket: ${ziel} (${(statSync(ziel).size / 1024).toFixed(0)} KB)`);
for (const [tabelle, anzahl] of Object.entries(zeilen)) console.log(`  ${tabelle.padEnd(24)} ${anzahl}`);
console.log(`SHA-256: ${createHash("sha256").update(readFileSync(ziel)).digest("hex")}`);
console.log(`\nVeroeffentlichen, z. B.: gh release create inhalt-$(date +%F) "${ziel}" --repo <name>/<repo> --title "Inhalte $(date +%F)"`);
console.log("Vorher pruefen: kurse.weitere_felder, kurse.methoden und die Texte der Begriffe duerfen nichts Persoenliches enthalten.");
