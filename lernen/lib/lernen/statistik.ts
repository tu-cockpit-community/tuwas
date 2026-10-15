import type { Block, Kapitel } from "./typen";

/** Kennzahlen eines Kapitels aus seinen Bloecken (fuer Uebersicht und Inhaltsverzeichnis). */
function alleBloecke(k: Kapitel): Block[] {
  return [...k.einleitung, ...k.abschnitte.flatMap((a) => a.bloecke)];
}

export function aufgabenIds(bloecke: Block[]): string[] {
  return bloecke.flatMap((b) => (b.art === "aufgabe" ? [b.aufgabe.id] : []));
}

export function kapitelIds(k: Kapitel): string[] {
  return aufgabenIds(alleBloecke(k));
}

export function kapitelKarten(k: Kapitel): number {
  return alleBloecke(k).reduce((s, b) => s + (b.art === "karten" ? b.karten.length : 0), 0);
}

/** Abschnitte eines Kapitels im schlanken Format fuer Mastery/Lektionsnavigation (client-tauglich). */
export function mAbschnitte(k: Kapitel): { id: string; titel: string; nummer: string; aufgaben: { id: string; art: "uebung" | "check" }[] }[] {
  return k.abschnitte.map((a, i) => ({
    id: a.id,
    titel: a.titel,
    nummer: `${k.meta.nummer}.${i + 1}`,
    aufgaben: a.bloecke.flatMap((b) => (b.art === "aufgabe" ? [{ id: b.aufgabe.id, art: b.aufgabe.art }] : [])),
  }));
}
