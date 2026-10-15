"use client";

import { useEffect, useSyncExternalStore } from "react";
import { erzeugeStandSpeicher, type StandSpeicher } from "./fortschrittSync";
import { neuesEreignis, type StandArt } from "./standEreignisse";
import { LEER, lesbarerStand, type AufgabenStatus, type Stand } from "./stand";

export type { AufgabenStatus, Stand } from "./stand";

/**
 * Lernfortschritt pro Kurs fuer die Oberflaeche: Hooks und die Aenderungen, die Aufgaben, Karten und Pruefungen
 * ausloesen. Jede Aenderung ist ein Ereignis im Protokoll; Speichern und Abgleich stehen in fortschrittSync.ts.
 */

let speicher: StandSpeicher | null = null;

/** Der Speicher dieses Browsers, beim ersten Gebrauch angelegt (nur im Browser) samt den Ereignissen, die Offenes nachsenden. */
function standSpeicher(): StandSpeicher {
  if (speicher) return speicher;
  const s = (speicher = erzeugeStandSpeicher({ speicher: localStorage, holen: (url, init) => fetch(url, init) }));
  window.addEventListener("online", () => s.alleSenden());
  window.addEventListener("pagehide", () => s.alleSenden(true));
  window.addEventListener("storage", (e) => (e.key?.startsWith("lernen:") || e.key?.startsWith("lernen-offen:")) && s.speicherGeaendert());
  document.addEventListener("visibilitychange", () => document.visibilityState === "hidden" && s.alleSenden(true));
  // Wer lange offen war, bevor der Server erreichbar wurde, gleicht regelmaessig nach.
  setInterval(() => s.alleSenden(), 30_000);
  return s;
}

/** Jede Aenderung ist ein Ereignis (Regeln in standEreignisse.ts); der Speicher zeigt es sofort und sendet es. */
function melde(kurs: string, art: StandArt, ref: string, wert: unknown): void {
  standSpeicher().melde(kurs, neuesEreignis(kurs, art, ref, wert));
}

const abonniere = (h: () => void) => standSpeicher().abonniere(h);

export function useStand(kurs: string): Stand {
  useEffect(() => {
    const s = standSpeicher();
    if (!s.istGeladen(kurs)) void s.laden(kurs);
  }, [kurs]);
  return useSyncExternalStore(
    abonniere,
    () => standSpeicher().lies(kurs),
    () => LEER,
  );
}

/** `true`, sobald der Lernstand mit dem Server abgeglichen ist (oder der Server nicht antwortet): ab dann zeigt er den besten bekannten Stand. */
export function useStandGeladen(kurs: string): boolean {
  useStand(kurs);
  return useSyncExternalStore(
    abonniere,
    () => standSpeicher().istGeladen(kurs),
    () => false,
  );
}

export function setzeAufgabe(kurs: string, id: string, status: AufgabenStatus): void {
  melde(kurs, "aufgabe", id, { status });
}

export function setzeGelesen(kurs: string, schl: string, an: boolean): void {
  melde(kurs, "gelesen", schl, { an });
}

export function zaehleTraining(kurs: string, drill: string, richtig: boolean): void {
  melde(kurs, "training", drill, { richtig });
}

export function speicherePruefung(kurs: string, id: string, erg: { punkte: number; max: number; dauer: number }): void {
  melde(kurs, "pruefung", id, erg);
}

/** Leitner-artige Wiederholung fuer Karteikarten: Stufe 0..5, Intervalle in Tagen (siehe standEreignisse.ts). */
export function bewerteKarte(kurs: string, id: string, gewusst: boolean): void {
  melde(kurs, "karte", id, { gewusst });
}

/** Ganzen Fortschritt eines Kurses als JSON (Sicherung) bzw. zurueckspielen. */
export function exportiere(kurs: string): string {
  return JSON.stringify({ kurs, version: 1, stand: standSpeicher().lies(kurs) }, null, 1);
}
export function importiere(kurs: string, json: string): void {
  const d = JSON.parse(json) as { kurs?: string; stand?: unknown };
  if (d.kurs !== kurs || !d.stand || !lesbarerStand(d.stand)) throw new Error(`Die Datei gehört nicht zum Kurs „${kurs}“.`);
  // ersetzt den Stand; was danach gelernt wird, gilt darauf
  melde(kurs, "ersetzen", "", lesbarerStand(d.stand) ?? LEER);
}

/** Alles faellige (Karten-ids und Aufgaben-ids) zum Zeitpunkt jetzt. */
export function faellig(s: Stand, jetzt = Date.now()): { aufgaben: string[]; karten: string[] } {
  return {
    aufgaben: Object.entries(s.wiederholen).filter(([, w]) => w.faellig <= jetzt).sort((a, b) => a[1].faellig - b[1].faellig).map(([id]) => id),
    karten: Object.entries(s.karten).filter(([, k]) => k.faellig <= jetzt).map(([id]) => id),
  };
}
