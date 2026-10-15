/** Sichert db/lernen.db per SQLite-eigener Backup-API (sicher auch bei parallelem
 * Zugriff, z.B. laufendem `npm run dev`) -- eine reine fs.copyFileSync waere bei einem
 * gleichzeitigen Schreibzugriff nicht konsistenzsicher. */
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import Database from "better-sqlite3";

const DB_PFAD = join(process.cwd(), "db", "lernen.db");
const BACKUP_ORDNER = join(process.cwd(), "db", "backups");

/** Erstellt eine Zeitstempel-Kopie unter db/backups/ und gibt deren Pfad zurueck.
 * Database.backup() ist asynchron (laeuft in setImmediate-Schritten) -- close() muss
 * auf den Abschluss warten, sonst wird die Verbindung waehrend des Kopierens geschlossen. */
export async function sichereDatenbank(suffix?: string): Promise<string> {
  if (!existsSync(DB_PFAD)) throw new Error(`Keine Datenbank gefunden: ${DB_PFAD}`);
  if (!existsSync(BACKUP_ORDNER)) mkdirSync(BACKUP_ORDNER, { recursive: true });

  const zeitstempel = new Date().toISOString().replace(/[:.]/g, "-");
  const dateiname = `lernen-${zeitstempel}${suffix ? `-${suffix}` : ""}.db`;
  const zielPfad = join(BACKUP_ORDNER, dateiname);

  const quelle = new Database(DB_PFAD, { readonly: true });
  await quelle.backup(zielPfad);
  quelle.close();

  return zielPfad;
}
