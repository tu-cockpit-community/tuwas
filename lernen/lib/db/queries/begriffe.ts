import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { begriffe } from "../schema";
import { begriffZeile } from "./kurs-journal";
import { MASTERY_SCHWELLE, effektiverStreak, heuteIso } from "./begriffe-leitner";

export { MASTERY_SCHWELLE, LEITNER_INTERVALLE_TAGE, heuteIso, inTagen, effektiverStreak } from "./begriffe-leitner";

export interface BegriffMitFortschritt {
  id: number;
  begriff_id: string;
  begriff: string;
  definition: string;
  streak: number;
  gemeistert: boolean;
}

function mitFortschritt(zeilen: (typeof begriffe.$inferSelect)[]): BegriffMitFortschritt[] {
  if (zeilen.length === 0) return [];
  const heute = heuteIso();
  return zeilen.map((b) => {
    const f = begriffZeile(b.id);
    const streak = effektiverStreak(f ? { ...f, begriff_id: b.id } : undefined, heute);
    return { id: b.id, begriff_id: b.begriff_id, begriff: b.begriff, definition: b.definition, streak, gemeistert: streak >= MASTERY_SCHWELLE };
  });
}

/** Begriffe eines einzelnen Skript-Abschnitts, samt Fortschritt -- die Grundlage fuer den
 * interleaved Mikro-Drill direkt in der Konzeptkarte (nicht am Seitenende). */
export const ladeBegriffeFuerAbschnitt = cache((kursId: string, abschnittId: string): BegriffMitFortschritt[] => {
  const zeilen = db
    .select()
    .from(begriffe)
    .where(and(eq(begriffe.kurs_id, kursId), eq(begriffe.abschnitt_id, abschnittId)))
    .orderBy(asc(begriffe.position))
    .all();
  return mitFortschritt(zeilen);
});

