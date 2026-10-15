import "server-only";
import fs from "node:fs";
import { leseVorgabe, type TuwasDaten } from "./tuwasVorgabe";

export type { TuwasDaten } from "./tuwasVorgabe";

/**
 * Was die Hostapp TUWAS mitgibt: die Lehrveranstaltungen des Nutzers (mit Titel, Typ, ECTS) und die Einstellung zur
 * SBP. TUWAS schreibt sie als JSON in die Datei, auf die TUWAS_ANGEMELDET zeigt, und aktualisiert sie bei jeder Aenderung.
 * `null`: keine Hostapp oder Datei nicht lesbar, dann wird nicht gefiltert und die SBP gezeigt.
 * TUWAS schreibt die Datei atomar (Umbenennen); aeltere Versionen nicht, dann sieht ein Lesen genau dazwischen eine
 * leere oder halbe Datei. Dafuer gilt der zuletzt gelesene Stand derselben Datei, statt kurz alles zu zeigen.
 */
let zuletzt: { datei: string; daten: TuwasDaten } | null = null;

export function tuwasDaten(): TuwasDaten | null {
  const datei = process.env.TUWAS_ANGEMELDET?.trim();
  if (!datei) return null;
  try {
    const daten = leseVorgabe(JSON.parse(fs.readFileSync(datei, "utf8").replace(/^\uFEFF/, "")));
    if (!daten) throw new Error("unbrauchbar");
    zuletzt = { datei, daten };
    return daten;
  } catch {
    return zuletzt?.datei === datei ? zuletzt.daten : null;
  }
}
