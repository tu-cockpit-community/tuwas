import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

// LERNEN_DB zeigt auf eine andere Datenbankdatei (Tests, eine zweite Kopie).
const DB_PFAD = process.env.LERNEN_DB ?? `${process.cwd()}/db/lernen.db`;

type Verbindung = { sqlite: Database.Database; db: ReturnType<typeof drizzle<typeof schema>> };

/** Next-Dev-Hot-Reload wuerde ohne globalThis-Guard bei jedem Modul-Neuladen eine
 * weitere SQLite-Verbindung oeffnen -- Standardmuster fuer Drizzle+Next.js. */
const global = globalThis as unknown as { __lernenDb?: Verbindung };

const verbindung: Verbindung =
  global.__lernenDb ??
  (() => {
    const sqlite = new Database(DB_PFAD);
    return { sqlite, db: drizzle(sqlite, { schema }) };
  })();

if (process.env.NODE_ENV !== "production") {
  global.__lernenDb = verbindung;
}

export const db = verbindung.db;
/** Die rohe Verbindung, fuer Sicherungen und das Einspielen von Inhaltspaketen. */
export const sqlite = verbindung.sqlite;
