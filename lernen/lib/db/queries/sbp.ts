import "server-only";
import { asc } from "drizzle-orm";
import { cache } from "react";
import { db } from "../client";
import { sbp_pruefungen } from "../schema";
import { sbpStand } from "./kurs-journal";

export interface SbpPruefung {
  id: string;
  bezeichnung: string;
  beschreibung: string;
  status: string;
  note: number | null;
  antritte: unknown[];
}

/** Die Pruefungen der Studienberechtigungspruefung in ihrer Reihenfolge; Status, Note und Antritte aus dem Protokoll. */
export const sbpPruefungen = cache((): SbpPruefung[] => {
  const stand = sbpStand();
  return db
    .select({ id: sbp_pruefungen.id, bezeichnung: sbp_pruefungen.bezeichnung, beschreibung: sbp_pruefungen.beschreibung })
    .from(sbp_pruefungen)
    .orderBy(asc(sbp_pruefungen.position))
    .all()
    .map((p) => ({ ...p, ...(stand.get(p.id) ?? { status: "nicht_begonnen", note: null, antritte: [] }) }));
});
