import { ladeKurs } from "@/lib/lernen/kurs";
import { findeAufgaben, kursIndex } from "@/lib/lernen/kursindex";
import { aufgabeFuerClient } from "@/lib/lernen/typen";

/**
 * GET /api/lernen/<fach>            -> Kursindex (Kapitel, Abschnitte, Aufgaben-ids, Karten)
 * GET /api/lernen/<fach>?ids=a,b,c  -> Rohdaten dieser Aufgaben (Markdown, wird im Browser gerendert)
 */
export async function GET(request: Request, { params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!ladeKurs(fach)) return Response.json({ fehler: "Kurs nicht gefunden" }, { status: 404 });
  const ids = new URL(request.url).searchParams.get("ids");
  if (ids !== null) {
    const liste = ids.split(",").map((x) => x.trim()).filter((x) => /^[a-z0-9-]+$/.test(x)).slice(0, 200);
    // Musterloesungen und verborgene Tests von code-Aufgaben bleiben auf dem Server
    return Response.json(findeAufgaben(fach, liste).map((x) => ({ ...x, aufgabe: aufgabeFuerClient(x.aufgabe) })));
  }
  return Response.json(kursIndex(fach));
}
