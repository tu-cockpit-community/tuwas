import type { SkriptGliederung, SkriptLektionMeta } from "./types";

/** Vorherige und naechste Lektion der Gliederung (null am jeweiligen Ende). */
export function nachbarn(
  g: SkriptGliederung,
  lektionId: string
): { vorher: SkriptLektionMeta | null; nachher: SkriptLektionMeta | null } {
  const idx = g.lektionen.findIndex((l) => l.id === lektionId);
  if (idx === -1) return { vorher: null, nachher: null };
  return {
    vorher: idx > 0 ? g.lektionen[idx - 1] : null,
    nachher: idx < g.lektionen.length - 1 ? g.lektionen[idx + 1] : null,
  };
}
