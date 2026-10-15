import { z } from "zod";
import { gueltigerKurs, uebernimmAltenStand } from "@/lib/lernen/fortschrittSpeicher";
import { EreignisSchema, haenge, liesEreignisse } from "@/lib/lernen/journal";
import { istLokaleAnfrage } from "@/lib/lernen/java/zugang";
import { ladeKurs } from "@/lib/lernen/kurs";
import { falte, STAND_ARTEN } from "@/lib/lernen/standEreignisse";
import type { Stand } from "@/lib/lernen/stand";

/**
 * GET  /api/lernen/fortschritt/<kurs>                    -> { stand }
 * POST /api/lernen/fortschritt/<kurs>  { ereignisse }    -> { stand }
 * Der Lernstand ist das Protokoll lernstand.jsonl (lib/lernen/journal.ts); hier wird nur angehaengt und gefaltet.
 * Nur von diesem Rechner und nur JSON (erzwingt einen CORS-Preflight, den fremde Seiten nicht bestehen).
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Anfrage = z.object({
  ereignisse: z.array(EreignisSchema.extend({ art: z.enum(STAND_ARTEN) })).max(5000),
});

type Ctx = { params: Promise<{ kurs: string }> };

// gefalteter Stand je Kurs, solange sich das Protokoll nicht aendert (liesEreignisse() behaelt dann dieselbe Liste)
const gefaltet = new WeakMap<readonly unknown[], Map<string, Stand>>();

function stand(kurs: string): Stand {
  uebernimmAltenStand(kurs);
  const alle = liesEreignisse();
  let m = gefaltet.get(alle);
  if (!m) gefaltet.set(alle, (m = new Map()));
  let s = m.get(kurs);
  if (!s) m.set(kurs, (s = falte(alle.filter((e) => e.kurs === kurs))));
  return s;
}

function pruefe(req: Request, kurs: string): Response | null {
  if (!istLokaleAnfrage(req.headers)) return Response.json({ fehler: "Nur von diesem Rechner." }, { status: 403 });
  if (!gueltigerKurs(kurs) || !ladeKurs(kurs)) return Response.json({ fehler: "Kurs nicht gefunden." }, { status: 404 });
  return null;
}

export async function GET(req: Request, { params }: Ctx) {
  const { kurs } = await params;
  const fehler = pruefe(req, kurs);
  if (fehler) return fehler;
  return Response.json({ stand: stand(kurs) }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request, { params }: Ctx) {
  const { kurs } = await params;
  const fehler = pruefe(req, kurs);
  if (fehler) return fehler;
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) return Response.json({ fehler: "Erwartet wird JSON." }, { status: 415 });
  if (Number(req.headers.get("content-length") ?? 0) > 6 * 1024 * 1024) return Response.json({ fehler: "Zu groß." }, { status: 413 });
  const roh = await req.text();
  if (roh.length > 6 * 1024 * 1024) return Response.json({ fehler: "Zu groß." }, { status: 413 });
  let daten: z.infer<typeof Anfrage>;
  try {
    daten = Anfrage.parse(JSON.parse(roh));
  } catch {
    return Response.json({ fehler: "Ungültige Anfrage." }, { status: 400 });
  }
  // der Kurs kommt aus der Adresse, nicht aus dem Ereignis
  haenge(daten.ereignisse.map((e) => ({ ...e, kurs })));
  return Response.json({ stand: stand(kurs) }, { headers: { "Cache-Control": "no-store" } });
}
