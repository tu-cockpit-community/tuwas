import "server-only";
import fs from "node:fs";
import { z } from "zod";
import { lvaSchluessel } from "./lva";

export interface TuwasDaten {
  /** LVA-Nummern der Lehrveranstaltungen, die der Nutzer hat. */
  lvas: Set<string>;
  /** Die Pruefungen der Studienberechtigungspruefung als eigenes Modul zeigen. */
  sbp: boolean;
}

const Datei = z.object({ lvas: z.array(z.string()), sbp: z.boolean() });

/**
 * Was die Hostapp TUWAS mitgibt: die Lehrveranstaltungen des Nutzers und die Einstellung zur SBP. TUWAS schreibt sie
 * als JSON in die Datei, auf die TUWAS_ANGEMELDET zeigt, und aktualisiert sie bei jeder Aenderung.
 * `null`: keine Hostapp oder Datei nicht lesbar, dann wird nicht gefiltert und die SBP gezeigt.
 * TUWAS schreibt die Datei atomar (Umbenennen); aeltere Versionen nicht, dann sieht ein Lesen genau dazwischen eine
 * leere oder halbe Datei. Dafuer gilt der zuletzt gelesene Stand derselben Datei, statt kurz alles zu zeigen.
 */
let zuletzt: { datei: string; daten: TuwasDaten } | null = null;

export function tuwasDaten(): TuwasDaten | null {
  const datei = process.env.TUWAS_ANGEMELDET?.trim();
  if (!datei) return null;
  try {
    const inhalt = Datei.parse(JSON.parse(fs.readFileSync(datei, "utf8").replace(/^﻿/, "")));
    const daten = { lvas: new Set(inhalt.lvas.map(lvaSchluessel)), sbp: inhalt.sbp };
    zuletzt = { datei, daten };
    return daten;
  } catch {
    return zuletzt?.datei === datei ? zuletzt.daten : null;
  }
}
