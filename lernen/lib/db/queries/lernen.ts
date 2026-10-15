import "server-only";
import { asc, eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { lern_themen } from "../schema";
import type { LernModule } from "@/lib/types";

export const hatLernModul = cache((kursId: string): boolean => {
  const row = db.select({ nr: lern_themen.nr }).from(lern_themen).where(eq(lern_themen.kurs_id, kursId)).limit(1).get();
  return row !== undefined;
});

export const ladeLernModul = cache((kursId: string): LernModule | null => {
  const zeilen = db.select().from(lern_themen).where(eq(lern_themen.kurs_id, kursId)).orderBy(asc(lern_themen.nr)).all();
  if (zeilen.length === 0) return null;
  return {
    kurs_id: kursId,
    themen: zeilen.map((t) => ({
      nr: t.nr,
      id: t.thema_id,
      titel: t.titel,
      erklaerung: t.erklaerung,
      kernpunkte: t.kernpunkte,
      beispiel: t.beispiel ?? undefined,
      fragen: t.fragen,
      typische_fehler: t.typische_fehler ?? undefined,
    })),
  };
});
