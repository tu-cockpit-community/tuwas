import { z } from "zod";
import { ladeKurs, ladePruefungen } from "@/lib/lernen/kurs";
import { findeAufgaben } from "@/lib/lernen/kursindex";
import type { CodeTeil } from "@/lib/lernen/typen";
import { RUNNER_AKTIVIEREN as AKTIVIEREN, type CodeErgebnis } from "@/lib/lernen/java/ergebnis";
import { ergebnisFuerClient, jdkVerfuegbar, pruefeCode, sandboxVerfuegbar } from "@/lib/lernen/java/runner";
import { istLokaleAnfrage } from "@/lib/lernen/java/zugang";

/**
 * POST /api/java/pruefen  { kurs, aufgabe, teil, quelltext } -> CodeErgebnis
 * Fuehrt Code der Lernenden lokal aus (siehe lib/lernen/java/runner.ts).
 * Testfaelle und Musterloesung laedt die Route selbst aus dem Kurs; der Browser kennt sie nicht.
 * Absicherung: nur mit EP1_JAVA_RUNNER=1, nur von localhost, nur JSON (erzwingt CORS-Preflight),
 * Quelltext <= 50 KB, hoechstens 2 gleichzeitige Laeufe.
 */
export const runtime = "nodejs";

const MAX_QUELLTEXT = 50 * 1024;
const MAX_PARALLEL = 2;
let laufend = 0;

const Anfrage = z.object({
  kurs: z.string().regex(/^[a-z0-9-]+$/),
  aufgabe: z.string().regex(/^[a-z0-9-]+$/),
  teil: z.number().int().nonnegative(),
  quelltext: z.string(),
});

function antwort(e: Partial<CodeErgebnis> & Pick<CodeErgebnis, "status">, status = 200) {
  return Response.json({ compiler: [], regeln: [], tests: [], ms: 0, ...e } satisfies CodeErgebnis, { status });
}

function findeCodeTeil(kurs: string, aufgabeId: string, index: number): CodeTeil | null {
  const aufgabe = findeAufgaben(kurs, [aufgabeId])[0]?.aufgabe ?? ladePruefungen(kurs).flatMap((p) => p.aufgaben).find((a) => a.id === aufgabeId);
  const teil = aufgabe?.teile[index];
  return teil?.typ === "code" ? teil : null;
}

export async function POST(req: Request) {
  if (process.env.EP1_JAVA_RUNNER !== "1") return antwort({ status: "deaktiviert", meldung: AKTIVIEREN }, 503);
  if (!istLokaleAnfrage(req.headers)) return antwort({ status: "fehler", meldung: "Der Java-Runner nimmt nur Anfragen von diesem Rechner (localhost) an." }, 403);
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) return antwort({ status: "fehler", meldung: "Erwartet wird JSON." }, 415);
  // vor dem Einlesen: sonst landet ein beliebig grosser Body erst ganz im Speicher
  if (Number(req.headers.get("content-length") ?? 0) > MAX_QUELLTEXT * 2) return antwort({ status: "fehler", meldung: "Der Quelltext ist zu groß (höchstens 50 KB)." }, 413);
  const roh = await req.text();
  if (roh.length > MAX_QUELLTEXT * 2) return antwort({ status: "fehler", meldung: "Der Quelltext ist zu groß (höchstens 50 KB)." }, 413);
  let daten: z.infer<typeof Anfrage>;
  try {
    daten = Anfrage.parse(JSON.parse(roh));
  } catch {
    return antwort({ status: "fehler", meldung: "Ungültige Anfrage." }, 400);
  }
  if (Buffer.byteLength(daten.quelltext, "utf8") > MAX_QUELLTEXT) return antwort({ status: "fehler", meldung: "Der Quelltext ist zu groß (höchstens 50 KB)." }, 413);
  if (!ladeKurs(daten.kurs)) return antwort({ status: "fehler", meldung: "Kurs nicht gefunden." }, 404);
  const teil = findeCodeTeil(daten.kurs, daten.aufgabe, daten.teil);
  if (!teil) return antwort({ status: "fehler", meldung: "Diese Aufgabe hat an dieser Stelle keinen Code-Teil (Trainingsaufgaben werden nicht serverseitig geprüft)." }, 404);
  const jdk = jdkVerfuegbar();
  if (!jdk.ok) return antwort({ status: "fehler", meldung: jdk.meldung }, 503);
  if (!sandboxVerfuegbar()) return antwort({ status: "fehler", meldung: "Die Sandbox (`unshare -rn`) funktioniert auf diesem System nicht; ohne sie führt der Runner keinen Code aus." }, 503);
  if (laufend >= MAX_PARALLEL) return antwort({ status: "fehler", meldung: "Gerade laufen schon zwei Prüfungen. Bitte kurz warten und noch einmal prüfen." }, 429);
  laufend++;
  try {
    return Response.json(ergebnisFuerClient(await pruefeCode(teil, daten.quelltext)));
  } catch (e) {
    return antwort({ status: "fehler", meldung: `Der Java-Runner ist gescheitert: ${e instanceof Error ? e.message.split("\n")[0] : String(e)}` }, 500);
  } finally {
    laufend--;
  }
}
