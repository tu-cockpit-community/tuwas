import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const db = drizzle(new Database(`${process.cwd()}/db/lernen.db`));
migrate(db, { migrationsFolder: "./db/migrations" });
console.log("Migrationen angewendet.");
