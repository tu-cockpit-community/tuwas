import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { z } from "zod";

/**
 * Der Lernstand als Ereignisprotokoll: eine Datei `lernstand.jsonl` ausserhalb des Projekts, eine Zeile je Ereignis.
 * Alles, was man gelernt hat, ergibt sich aus diesen Zeilen (siehe standEreignisse.ts und db/queries/kurs-journal.ts).
 *
 * Vertrag: Die App haengt nur an. Sie kuerzt, ueberschreibt, verschiebt oder loescht die Datei nie. Damit bleibt der
 * Lernstand bei einem neuen Checkout oder einem Inhalts-Update erhalten, und die Datei laesst sich einfach kopieren.
 * Zwei Protokolle (zwei Rechner) lassen sich zusammenlegen (`cat a b > lernstand.jsonl`): doppelte ids zaehlen einmal.
 * Wer die Datei auch vor sich selbst schuetzen will, setzt unter Linux `sudo chattr +a lernstand.jsonl` (nur noch
 * Anhaengen moeglich; `chattr -a` hebt es auf).
 *
 * Ort: LERNEN_JOURNAL, sonst der Datenordner des Nutzers (Linux $XDG_DATA_HOME bzw. ~/.local/share, Windows %APPDATA%,
 * macOS ~/Library/Application Support), jeweils tuwas/lernen/lernstand.jsonl.
 */

export const EreignisSchema = z.object({
  v: z.literal(1),
  id: z.string().min(1).max(200),
  t: z.number(),
  kurs: z.string().min(1).max(100),
  art: z.string().min(1).max(40),
  ref: z.string().max(500),
  wert: z.unknown(),
});
export type Ereignis = z.infer<typeof EreignisSchema>;

const KOPIEN = 30;

export function journalPfad(): string {
  const env = process.env.LERNEN_JOURNAL?.trim();
  if (env) return env;
  const home = os.homedir();
  const basis =
    process.platform === "win32"
      ? process.env.APPDATA || path.join(home, "AppData", "Roaming")
      : process.platform === "darwin"
        ? path.join(home, "Library", "Application Support")
        : process.env.XDG_DATA_HOME || path.join(home, ".local", "share");
  return path.join(basis, "tuwas", "lernen", "lernstand.jsonl");
}

export function neueId(): string {
  return crypto.randomUUID();
}

/**
 * id einer einmaligen Uebernahme alter Daten: gleicher Inhalt ergibt dieselbe id (wiederholtes Uebernehmen schreibt
 * nichts), verschiedene Staende verschiedener Rechner ergeben verschiedene ids und bleiben beim Zusammenlegen beide.
 */
export function uebernahmeId(quelle: string, schluessel: string, wert: unknown): string {
  const hash = crypto.createHash("sha256").update(JSON.stringify(wert)).digest("hex").slice(0, 16);
  return `uebernahme:${quelle}:${schluessel}:${hash}`;
}

// Zwischenspeicher je Datei, erneuert wenn Groesse oder Aenderungszeit abweichen (auch bei Anhaengen anderer Prozesse).
// SHORTCUT: nach jeder Aenderung wird die ganze Datei neu gelesen; gemessen ~0,1 s je Aenderung bei 50.000 Ereignissen
// (7 MB, Jahre intensiven Lernens). Waechst sie deutlich ueber ~20 MB, lohnt es, nur die angehaengten Bytes zu lesen.
let cache: { pfad: string; groesse: number; mtime: number; liste: Ereignis[]; ids: Set<string> } | null = null;

function parse(roh: string): Ereignis[] {
  const aus: Ereignis[] = [];
  const ids = new Set<string>();
  for (const zeile of roh.split("\n")) {
    if (!zeile.trim()) continue;
    let e: Ereignis;
    try {
      const r = EreignisSchema.safeParse(JSON.parse(zeile));
      if (!r.success) continue;
      e = r.data;
    } catch {
      continue; // abgebrochene oder fremde Zeile
    }
    if (ids.has(e.id)) continue;
    ids.add(e.id);
    aus.push(e);
  }
  return aus.sort((a, b) => a.t - b.t || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

function alle(): { liste: Ereignis[]; ids: Set<string> } {
  const pfad = journalPfad();
  let st: fs.Stats;
  try {
    st = fs.statSync(pfad);
  } catch {
    return { liste: [], ids: new Set() };
  }
  if (cache && cache.pfad === pfad && cache.groesse === st.size && cache.mtime === st.mtimeMs) return cache;
  const liste = parse(fs.readFileSync(pfad, "utf8"));
  cache = { pfad, groesse: st.size, mtime: st.mtimeMs, liste, ids: new Set(liste.map((e) => e.id)) };
  return cache;
}

/** Alle Ereignisse (oder die eines Kurses), nach Zeit und id sortiert, jede id einmal. Nicht veraendern. */
export function liesEreignisse(kurs?: string): readonly Ereignis[] {
  const { liste } = alle();
  return kurs === undefined ? liste : liste.filter((e) => e.kurs === kurs);
}

/** Gibt es diese id schon? */
export function bekannt(id: string): boolean {
  return alle().ids.has(id);
}

function tageskopie(pfad: string, jetzt: Date): void {
  if (!fs.existsSync(pfad)) return;
  const dir = path.join(path.dirname(pfad), "sicherungen");
  fs.mkdirSync(dir, { recursive: true });
  const ziel = path.join(dir, `lernstand-${jetzt.toISOString().slice(0, 10)}.jsonl`);
  if (fs.existsSync(ziel)) return;
  fs.copyFileSync(pfad, ziel);
  const kopien = fs
    .readdirSync(dir)
    .filter((n) => /^lernstand-\d{4}-\d{2}-\d{2}\.jsonl$/.test(n))
    .sort();
  for (const alt of kopien.slice(0, -KOPIEN)) fs.rmSync(path.join(dir, alt), { force: true });
}

/** Haengt die Ereignisse an, deren id noch fehlt. Gibt die Zahl der geschriebenen zurueck. */
export function haenge(ereignisse: readonly Ereignis[], jetzt = new Date()): number {
  const { ids } = alle();
  const neu: Ereignis[] = [];
  const dabei = new Set<string>();
  for (const e of ereignisse) {
    if (ids.has(e.id) || dabei.has(e.id)) continue;
    dabei.add(e.id);
    neu.push(EreignisSchema.parse(e));
  }
  if (neu.length === 0) return 0;
  const pfad = journalPfad();
  fs.mkdirSync(path.dirname(pfad), { recursive: true });
  tageskopie(pfad, jetzt);
  let text = neu.map((e) => JSON.stringify(e)).join("\n") + "\n";
  // endet die Datei nicht auf einen Zeilenumbruch (Absturz mitten im Schreiben), beginnt das Neue auf eigener Zeile
  const fd = fs.openSync(pfad, "a+", 0o600);
  try {
    const groesse = fs.fstatSync(fd).size;
    if (groesse > 0) {
      const letztes = Buffer.alloc(1);
      fs.readSync(fd, letztes, 0, 1, groesse - 1);
      if (letztes[0] !== 0x0a) text = "\n" + text;
    }
    fs.writeSync(fd, text);
    fs.fsyncSync(fd);
  } finally {
    fs.closeSync(fd);
  }
  return neu.length;
}
