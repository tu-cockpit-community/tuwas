import fs from "node:fs";
import path from "node:path";
import { haenge, uebernahmeId } from "./journal";
import { lesbarerStand, type Stand } from "./stand";

/**
 * Der Lernstand der Faecher lag frueher als JSON-Datei je Kurs im Ordner LERNEN_DATEN (TUWAS: <userData>/lernen-fortschritt,
 * sonst db/fortschritt). Heute gilt das Protokoll (journal.ts); dieses Modul liest die alten Dateien nur noch, um ihren
 * Stand einmal als Uebernahme ins Protokoll zu holen. Die alten Dateien werden weder veraendert noch geloescht.
 */

export function ordner(): string {
  return process.env.LERNEN_DATEN || path.join(process.cwd(), "db", "fortschritt");
}

export function gueltigerKurs(kurs: string): boolean {
  return /^[a-z0-9-]+$/.test(kurs);
}

function liesDatei(datei: string): Stand | null {
  try {
    const roh = JSON.parse(fs.readFileSync(datei, "utf8")) as { stand?: unknown };
    return lesbarerStand(roh.stand);
  } catch {
    return null;
  }
}

/** Der alte Stand eines Kurses: die Datei, bei beschaedigter Datei die neueste lesbare Sicherung, sonst null. */
export function alterStand(kurs: string): Stand | null {
  if (!gueltigerKurs(kurs)) return null;
  const direkt = liesDatei(path.join(ordner(), `${kurs}.json`));
  if (direkt) return direkt;
  // genau <kurs>-JJJJ-MM-TT.json: "ep1-" allein traefe auch die Sicherungen von "ep1-x"
  const name = new RegExp(`^${kurs}-\\d{4}-\\d{2}-\\d{2}\\.json$`);
  let namen: string[] = [];
  try {
    namen = fs.readdirSync(path.join(ordner(), "sicherungen")).filter((n) => name.test(n));
  } catch {
    /* keine Sicherungen */
  }
  for (const n of namen.sort().reverse()) {
    const s = liesDatei(path.join(ordner(), "sicherungen", n));
    if (s) return s;
  }
  return null;
}

const erledigt = new Set<string>();

/** Holt den alten Stand eines Kurses einmal ins Protokoll (je Prozess einmal geprueft, im Protokoll hoechstens einmal). */
export function uebernimmAltenStand(kurs: string): void {
  const schluessel = `${process.env.LERNEN_JOURNAL ?? ""}|${ordner()}|${kurs}`;
  if (erledigt.has(schluessel)) return;
  const stand = alterStand(kurs);
  if (stand) haenge([{ v: 1, id: uebernahmeId("fach", kurs, stand), t: 0, kurs, art: "uebernahme", ref: "", wert: stand }]);
  erledigt.add(schluessel);
}
