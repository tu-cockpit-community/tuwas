import { karteId } from "./karteId";
import { kartenGruppen } from "./kartenGruppen";
import { kapitelIds, mAbschnitte } from "./statistik";
import type { Kapitel } from "./typen";

/**
 * Das Wichtigste eines Kapitels fuer Listen und Zaehler, ohne das Kapitel selbst (Markdown, Aufgaben): Titel, Ids der
 * Aufgaben und Karten, Abschnitte. Die Uebersichtsseiten brauchen nur das, und es laesst sich als kleine Datei merken
 * (lib/lernen/dateiCache.ts), statt bei jedem Start 17 MB Markdown zu lesen.
 */
export interface KapitelUebersicht {
  slug: string;
  meta: Kapitel["meta"];
  aufgabenIds: string[];
  karteIds: string[];
  abschnitte: ReturnType<typeof mAbschnitte>;
}

export function baueUebersicht(k: Kapitel): KapitelUebersicht {
  return {
    slug: k.slug,
    meta: k.meta,
    aufgabenIds: kapitelIds(k),
    karteIds: kartenGruppen(k).flatMap((g) => g.block.karten.map((karte) => karteId(k.slug, karte))),
    abschnitte: mAbschnitte(k),
  };
}
