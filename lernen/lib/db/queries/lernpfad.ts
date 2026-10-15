import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { kurse, lektionen, skript_abschnitte } from "../schema";
import type { SkriptGliederung, SkriptLektion, SkriptLektionMeta, SkriptUnterabschnitt } from "@/lib/types";

function zuUnterabschnitt(row: typeof skript_abschnitte.$inferSelect): SkriptUnterabschnitt {
  return { id: row.abschnitt_id, position: row.position, titel: row.titel, anker: row.anker, markdown: row.markdown };
}

function zuLektionMeta(row: typeof lektionen.$inferSelect, abschnitte: SkriptUnterabschnitt[]): SkriptLektionMeta {
  return {
    id: row.lektion_id,
    art: row.art as SkriptLektionMeta["art"],
    nr: row.nr,
    position: row.position,
    titel: row.titel,
    kurztitel: row.kurztitel,
    anker: row.anker,
    unterabschnitte: abschnitte.map(({ id, position, titel, anker }) => ({ id, position, titel, anker })),
    zeilen: row.zeilen,
    codebloecke: row.codebloecke,
    wortanzahl: row.wortanzahl,
    lesedauer_minuten: row.lesedauer_minuten,
  };
}

/** Metadaten aller Lektionen eines Kurses (keine Markdown-Bodies) -- fuer Layout + Sidebar. */
export const ladeGliederung = cache((kursId: string): SkriptGliederung | null => {
  const zeilen = db
    .select()
    .from(lektionen)
    .where(eq(lektionen.kurs_id, kursId))
    .orderBy(asc(lektionen.position))
    .all();
  if (zeilen.length === 0) return null;

  const alleAbschnitte = db
    .select()
    .from(skript_abschnitte)
    .where(eq(skript_abschnitte.kurs_id, kursId))
    .orderBy(asc(skript_abschnitte.position))
    .all();

  const lektionenMeta = zeilen.map((l) =>
    zuLektionMeta(l, alleAbschnitte.filter((a) => a.lektion_row_id === l.id).map(zuUnterabschnitt))
  );

  const kursRow = db.select({ skript_titel: kurse.skript_titel, skript_untertitel: kurse.skript_untertitel }).from(kurse).where(eq(kurse.id, kursId)).get();

  return {
    kurs_id: kursId,
    titel: kursRow?.skript_titel ?? kursId,
    untertitel: kursRow?.skript_untertitel ?? null,
    lektionen: lektionenMeta,
  };
});

/** Eine Lektion inklusive ihres gerenderten Markdown-Bodys. */
export const ladeLektion = cache((kursId: string, lektionId: string): SkriptLektion | null => {
  const row = db
    .select()
    .from(lektionen)
    .where(and(eq(lektionen.kurs_id, kursId), eq(lektionen.lektion_id, lektionId)))
    .get();
  if (!row) return null;

  const abschnitte = db
    .select()
    .from(skript_abschnitte)
    .where(eq(skript_abschnitte.lektion_row_id, row.id))
    .orderBy(asc(skript_abschnitte.position))
    .all()
    .map(zuUnterabschnitt);

  return { ...zuLektionMeta(row, abschnitte), markdown: row.markdown, abschnitte, einleitung: row.einleitung };
});
