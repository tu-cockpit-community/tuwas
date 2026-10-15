import "server-only";
import fs from "node:fs";
import path from "node:path";
import { parse as yamlParse } from "yaml";
import { KursSchema, PruefungSchema, type Kapitel, type Kurs, type Pruefung } from "./typen";
import { parseKapitel } from "./parser";
import { mitDateiCache } from "./dateiCache";
import { baueUebersicht, type KapitelUebersicht } from "./uebersicht";

/** Liest Kurse aus content/<fach>/. Dateien werden pro Request gelesen, damit Inhaltsaenderungen
 * im Dev-Server ohne Neustart sichtbar sind; die Datenmenge ist klein. */

const WURZEL = path.join(process.cwd(), "content");

export function kursIds(): string[] {
  if (!fs.existsSync(WURZEL)) return [];
  return fs
    .readdirSync(WURZEL, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(WURZEL, d.name, "kurs.yaml")))
    .map((d) => d.name)
    .sort();
}

/** `fach` kommt aus der URL: nur Namen wie "mathe3", damit kein "../" aus content/ hinausfuehrt. */
function gueltigesFach(fach: string): boolean {
  return /^[a-z0-9-]+$/.test(fach);
}

export function ladeKurs(fach: string): Kurs | null {
  if (!gueltigesFach(fach)) return null;
  const datei = path.join(WURZEL, fach, "kurs.yaml");
  if (!fs.existsSync(datei)) return null;
  return KursSchema.parse(yamlParse(fs.readFileSync(datei, "utf8")));
}

function kapitelDateien(fach: string): string[] {
  if (!gueltigesFach(fach)) return [];
  const dir = path.join(WURZEL, fach, "kapitel");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
}

export function slugAusDatei(datei: string): string {
  return datei.replace(/\.md$/, "").replace(/^\d+-/, "");
}

export function ladeKapitelListe(fach: string): Kapitel[] {
  return kapitelDateien(fach)
    .map((f) => ladeKapitelDatei(fach, f))
    .filter((k): k is Kapitel => k !== null)
    .sort((a, b) => a.meta.nummer - b.meta.nummer);
}

/** Version des Aufbaus der Uebersicht; bei einer Aenderung von baueUebersicht, parseKapitel oder der Schemas in typen.ts
 * erhoehen, die das Ergebnis aendert: der Schluessel kennt nur die Kapiteldateien, alte Cache-Dateien verfallen sonst nicht. */
const UEBERSICHT_VERSION = 1;

function cacheOrdner(): string {
  return process.env.LERNEN_CACHE ?? path.join(process.cwd(), "db", "cache");
}

/** Die Kapitel eines Kurses in Kurzform. Kommt aus einer Cache-Datei, solange sich kein Kapitel geaendert hat. */
export function ladeUebersicht(fach: string): KapitelUebersicht[] {
  if (!gueltigesFach(fach)) return [];
  const schluessel = [
    UEBERSICHT_VERSION,
    ...kapitelDateien(fach).map((f) => {
      const st = fs.statSync(path.join(WURZEL, fach, "kapitel", f));
      return `${f}:${st.size}:${st.mtimeMs}`;
    }),
  ].join("|");
  return mitDateiCache(path.join(cacheOrdner(), `${fach}-uebersicht.json`), schluessel, () => ladeKapitelListe(fach).map(baueUebersicht));
}

/** Geparste Kapitel, invalidiert ueber die Aenderungszeit der Datei (Inhalte bleiben live editierbar). */
const kapitelCache = new Map<string, { stand: string; kapitel: Kapitel | null }>();

function ladeKapitelDatei(fach: string, datei: string): Kapitel | null {
  const pfad = path.join(WURZEL, fach, "kapitel", datei);
  // wie der Schluessel der Uebersicht: Groesse und Aenderungszeit (zwei Speicherungen in derselben ms bleiben sonst unbemerkt)
  const st = fs.statSync(pfad);
  const stand = `${st.size}:${st.mtimeMs}`;
  const c = kapitelCache.get(pfad);
  if (c && c.stand === stand) return c.kapitel;
  const kapitel = parseOhneCache(fach, datei, pfad);
  kapitelCache.set(pfad, { stand, kapitel });
  return kapitel;
}

function parseOhneCache(fach: string, datei: string, pfad: string): Kapitel | null {
  const quelle = fs.readFileSync(pfad, "utf8");
  const { kapitel, fehler } = parseKapitel(slugAusDatei(datei), quelle);
  if (fehler.length && process.env.NODE_ENV !== "production") {
    console.warn(`[lernen] ${fach}/${datei}:\n` + fehler.map((f) => `  Z.${f.zeile}: ${f.meldung}`).join("\n"));
  }
  return kapitel;
}

export function ladeKapitel(fach: string, slug: string): Kapitel | null {
  const datei = kapitelDateien(fach).find((f) => slugAusDatei(f) === slug);
  return datei ? ladeKapitelDatei(fach, datei) : null;
}

export function ladePruefungen(fach: string): Pruefung[] {
  if (!gueltigesFach(fach)) return [];
  const dir = path.join(WURZEL, fach, "pruefungen");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .sort()
    .flatMap((f) => {
      const r = PruefungSchema.safeParse(yamlParse(fs.readFileSync(path.join(dir, f), "utf8")));
      if (!r.success) {
        console.warn(`[lernen] ${fach}/pruefungen/${f}: ${r.error.message}`);
        return [];
      }
      return [r.data];
    });
}

export function ladeTextDatei(fach: string, name: string): string | null {
  if (!gueltigesFach(fach) || path.basename(name) !== name) return null;
  const datei = path.join(WURZEL, fach, name);
  return fs.existsSync(datei) ? fs.readFileSync(datei, "utf8") : null;
}

/** Welche Bereiche ein Kurs hat. Die Navigation zeigt nur, was es gibt, statt Seiten mit "wird erstellt". */
export interface Bereiche {
  training: boolean;
  pruefung: boolean;
  formeln: boolean;
  muendlich: boolean;
}

export function ladeBereiche(fach: string): Bereiche {
  return {
    training: gueltigesFach(fach) && fs.existsSync(path.join(WURZEL, fach, "training", "index.ts")),
    pruefung: ladePruefungen(fach).length > 0,
    formeln: ladeTextDatei(fach, "formelsammlung.md") !== null,
    muendlich: ladeUebersicht(fach).some((k) => k.karteIds.length > 0),
  };
}
