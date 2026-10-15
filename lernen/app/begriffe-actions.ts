"use server";

import { z } from "zod";
import { meldeBegriffVersuch } from "@/lib/db/queries/kurs-journal";

export interface BegriffVersuchErgebnis {
  streak: number;
  gemeistert: boolean;
}

/** Zeichnet einen Drill-Versuch fuer einen Begriff auf (als Ereignis im Protokoll, ueber den natuerlichen Schluessel
 * des Begriffs, damit er Inhalts-Updates uebersteht). `richtig` wird clientseitig ermittelt (Tippvergleich, siehe
 * components/BegriffDrill.tsx) -- Einzelnutzer-App ohne Integritaetsgrenze, daher kein serverseitiger Neuvergleich. */
export async function speichereBegriffVersuch(begriffDbId: number, richtig: boolean): Promise<BegriffVersuchErgebnis> {
  return meldeBegriffVersuch(z.number().int().positive().parse(begriffDbId), z.boolean().parse(richtig));
}
