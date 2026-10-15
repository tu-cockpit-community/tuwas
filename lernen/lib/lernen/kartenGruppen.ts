import type { Block, Kapitel } from "./typen";

type KartenBlock = Extract<Block, { art: "karten" }>;

export interface KartenGruppe {
  /** Nummer wie im Kapitel, z. B. "3.2" (Einleitung: "3.0") */
  praefix: string;
  /** Position des Blocks im Abschnitt, haelt den React-Schluessel stabil */
  index: number;
  block: KartenBlock;
}

/** Alle Karteikarten-Bloecke eines Kapitels in Lesereihenfolge: erst die Einleitung, dann die Abschnitte. */
export function kartenGruppen(k: Kapitel): KartenGruppe[] {
  const aus = (bloecke: Block[], praefix: string): KartenGruppe[] =>
    bloecke.flatMap((block, index) => (block.art === "karten" ? [{ praefix, index, block }] : []));
  return [...aus(k.einleitung, `${k.meta.nummer}.0`), ...k.abschnitte.flatMap((a, i) => aus(a.bloecke, `${k.meta.nummer}.${i + 1}`))];
}
