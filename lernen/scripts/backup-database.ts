/** Aufruf: npx tsx scripts/backup-database.ts [Grund-Suffix] */
import { sichereDatenbank } from "./lib/db-backup";

sichereDatenbank(process.argv[2]).then((zielPfad) => {
  console.log(`Backup erstellt: ${zielPfad}`);
});
