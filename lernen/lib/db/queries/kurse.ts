import "server-only";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { kurse } from "../schema";
import { kursZustand, type StandZeile } from "./kurs-journal";
import type { Kurs, Literatur } from "@/lib/types";

/** Inhalt des Kurses (aus dem Inhaltspaket) plus der persoenliche Stand aus dem Protokoll; ohne Stand gilt "nicht begonnen". */
function zuKurs(row: typeof kurse.$inferSelect, stand: StandZeile | null = kursZustand(row.id).stand): Kurs {
  return {
    id: row.id,
    lva_nummer: row.lva_nummer,
    name: row.name,
    typ: row.typ,
    ects: row.ects,
    kategorie: row.kategorie,
    semester_plan: stand?.semester_plan ?? "",
    semester_label: stand?.semester_label ?? undefined,
    steop: row.steop ?? undefined,
    pflicht: row.pflicht ?? undefined,
    enge_wahl: row.enge_wahl ?? undefined,
    vertiefung_pflicht: row.vertiefung_pflicht ?? undefined,
    streichkandidat: stand?.streichkandidat ?? undefined,
    sbp_wahlfach: row.sbp_wahlfach ?? undefined,
    status: (stand?.status ?? "nicht_begonnen") as Kurs["status"],
    note: stand?.note ?? null,
    antritte: stand?.antritte ?? undefined,
    schwierigkeitsgrad: row.schwierigkeitsgrad ?? undefined,
    notiz: stand?.notiz ?? undefined,
    links: row.links_tiss || row.links_vowi ? { tiss: row.links_tiss ?? undefined, vowi: row.links_vowi ?? undefined } : undefined,
    pfad: row.pfad ?? undefined,
    inhalt: row.inhalt ?? undefined,
    literatur: (row.literatur as Literatur[] | null) ?? undefined,
    tipps: stand?.tipps ?? undefined,
    pruefungsstrategie: row.pruefungsstrategie ?? undefined,
    tuwel_url: row.tuwel_url ?? undefined,
    sws: row.sws ?? undefined,
    format: row.format ?? undefined,
    pruefungsmodus: row.pruefungsmodus ?? undefined,
    sprache: row.sprache ?? undefined,
    vortragende: row.vortragende ?? undefined,
    institut: row.institut ?? undefined,
    lernergebnisse: row.lernergebnisse ?? undefined,
    tiss_inhalt: row.tiss_inhalt ?? undefined,
    methoden: row.methoden ?? undefined,
    leistungsnachweis: row.leistungsnachweis ?? undefined,
    vorkenntnisse_tiss: row.vorkenntnisse_tiss ?? undefined,
    weitere_informationen: row.weitere_informationen ?? undefined,
    ects_breakdown: row.ects_breakdown ?? undefined,
  };
}

export const alleKurse = cache((): Kurs[] => db.select().from(kurse).all().map((zeile) => zuKurs(zeile)));

export const ladeKurs = cache((id: string): Kurs | null => {
  const zeile = db.select().from(kurse).where(eq(kurse.id, id)).get();
  return zeile ? zuKurs(zeile) : null;
});
