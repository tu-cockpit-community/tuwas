import "server-only";
import type { Aufgabe, Block, Kapitel } from "./typen";
import { ladeKapitelListe } from "./kurs";
import { karteId } from "./karteId";

/**
 * Kompakter Index eines Kurses fuer Client-Funktionen (Mastery, Wiederholung, Suche, Vorwissen-Check).
 * Enthaelt keine Aufgabentexte -- die laedt der Client gezielt ueber /api/lernen/<fach>?ids=...
 */

export interface IndexAufgabe {
  id: string;
  titel: string;
  niveau: 1 | 2 | 3;
  art: "uebung" | "check";
}
export interface IndexAbschnitt {
  id: string;
  titel: string;
  nummer: string;
  aufgaben: IndexAufgabe[];
  /** Klartext fuer die Suche (ohne Formeln/Markup), gekuerzt */
  text: string;
}
export interface IndexKapitel {
  slug: string;
  nummer: number;
  titel: string;
  kurz: string;
  teil: string;
  stunden: number;
  pruefungsgewicht: number;
  voraussetzungen: string[];
  abschnitte: IndexAbschnitt[];
}
export interface IndexKarte {
  id: string;
  kapitel: string;
  frage: string;
  antwort: string;
  kernpunkte?: string[];
}
export interface KursIndex {
  kapitel: IndexKapitel[];
  karten: IndexKarte[];
}

function klartext(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " … ")
    .replace(/\$[^$]*\$/g, " … ")
    .replace(/:::\w+(\[[^\]]*\])?/g, " ")
    .replace(/^\s*:::\s*$/gm, " ")
    .replace(/[#*_>`|[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function karten(bloecke: Block[], slug: string): IndexKarte[] {
  return bloecke.flatMap((b) =>
    b.art === "karten" ? b.karten.map((k) => ({ id: karteId(slug, k), kapitel: slug, frage: k.frage, antwort: k.antwort, kernpunkte: k.kernpunkte })) : [],
  );
}

function aufgabenAus(bloecke: Block[]): IndexAufgabe[] {
  return bloecke.flatMap((b) => (b.art === "aufgabe" ? [{ id: b.aufgabe.id, titel: b.aufgabe.titel, niveau: b.aufgabe.niveau, art: b.aufgabe.art }] : []));
}

export function kursIndex(fach: string): KursIndex {
  const liste = ladeKapitelListe(fach);
  return {
    kapitel: liste.map((k) => ({
      slug: k.slug,
      nummer: k.meta.nummer,
      titel: k.meta.titel,
      kurz: k.meta.kurz,
      teil: k.meta.teil,
      stunden: k.meta.stunden ?? 0,
      pruefungsgewicht: k.meta.pruefungsgewicht,
      voraussetzungen: k.meta.voraussetzungen,
      abschnitte: k.abschnitte.map((a, i) => ({
        id: a.id,
        titel: a.titel,
        nummer: `${k.meta.nummer}.${i + 1}`,
        aufgaben: aufgabenAus(a.bloecke),
        text: klartext(a.bloecke.map((b) => (b.art === "md" ? b.md : "")).join(" ")).slice(0, 4000),
      })),
    })),
    karten: liste.flatMap((k) => [
      ...karten(k.einleitung, k.slug),
      ...k.abschnitte.flatMap((a) => karten(a.bloecke, k.slug)),
    ]),
  };
}

export interface AufgabeMitOrt {
  aufgabe: Aufgabe;
  kapitel: string;
  kapitelTitel: string;
  abschnitt: string;
  abschnittTitel: string;
}

export function findeAufgaben(fach: string, ids: string[]): AufgabeMitOrt[] {
  const gesucht = new Set(ids);
  const treffer = new Map<string, AufgabeMitOrt>();
  const sammle = (k: Kapitel, abschnitt: string, titel: string, bloecke: Block[]) => {
    for (const b of bloecke)
      if (b.art === "aufgabe" && gesucht.has(b.aufgabe.id))
        treffer.set(b.aufgabe.id, { aufgabe: b.aufgabe, kapitel: k.slug, kapitelTitel: k.meta.titel, abschnitt, abschnittTitel: titel });
  };
  for (const k of ladeKapitelListe(fach)) {
    sammle(k, "", "Einleitung", k.einleitung);
    k.abschnitte.forEach((a) => sammle(k, a.id, a.titel, a.bloecke));
  }
  // Reihenfolge wie angefragt
  return ids.flatMap((id) => (treffer.has(id) ? [treffer.get(id)!] : []));
}
