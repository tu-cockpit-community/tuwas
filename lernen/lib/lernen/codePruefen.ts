import type { CodeTeil, Teil } from "./typen";
import { pruefeTeil, type Urteil } from "./rechnen";
import { anteilBestanden, RUNNER_AKTIVIEREN, type CodeErgebnis } from "./java/ergebnis";

/**
 * Browser-Seite der code-Aufgaben: schickt den Quelltext an POST /api/java/pruefen und macht aus dem
 * Ergebnis ein Urteil (inkl. Teilwertung und Fehlerbild). Alle anderen Typen prueft pruefeTeil sofort.
 */

export interface CodeOrt {
  kurs: string;
  aufgabe: string;
  teil: number;
}

export function urteilAusErgebnis(teil: CodeTeil, e: CodeErgebnis): Urteil {
  // Details (z. B. wie man den Runner einschaltet) zeigt der Ergebniskasten; zaehlt nicht als Versuch
  if (e.status === "deaktiviert" || e.status === "fehler")
    return {
      ok: false,
      leer: true,
      meldung: e.status === "deaktiviert" ? "Der Java-Runner ist ausgeschaltet." : "Die Prüfung war nicht möglich.",
      java: { ...e, meldung: e.meldung ?? RUNNER_AKTIVIEREN },
    };
  if (e.status === "compilerfehler") {
    return { ok: false, anteil: 0, meldung: `Der Code lässt sich nicht übersetzen (${e.compiler.length} Fehler).`, java: e };
  }
  const n = e.tests.length;
  const b = e.tests.filter((t) => t.bestanden).length;
  if (e.status === "ok") return { ok: true, anteil: 1, meldung: `Alle ${n} Tests bestanden.`, java: e };
  const r = e.regeln.length;
  const meldung = `${b} von ${n} Tests bestanden${r ? `, ${r} Regelverstoß${r === 1 ? "" : "e"} (kostet im Programmiertest die Punkte)` : ""}.`;
  // Fehlerbild: erster Eintrag, dessen Test (1-basiert) scheitert oder dessen Regel verletzt ist
  const fehlerbild = teil.fehler?.findIndex((f) => {
    const w = Array.isArray(f.wert) ? f.wert : [f.wert];
    return w.some((x) =>
      typeof x === "number" || /^\d+$/.test(String(x)) ? e.tests[Number(x) - 1] && !e.tests[Number(x) - 1].bestanden : e.regeln.some((v) => v.regel === x),
    );
  });
  return { ok: false, anteil: anteilBestanden(e), meldung, java: e, fehlerbild: fehlerbild !== undefined && fehlerbild >= 0 ? fehlerbild : undefined };
}

export async function pruefeCodeTeil(ort: CodeOrt, teil: CodeTeil, quelltext: string): Promise<Urteil> {
  const vorab = pruefeTeil(teil, quelltext);
  if (vorab.leer && quelltext.trim() === teil.vorlage.trim()) return vorab;
  if (!quelltext.trim()) return vorab;
  let e: CodeErgebnis;
  try {
    const r = await fetch("/api/java/pruefen", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kurs: ort.kurs, aufgabe: ort.aufgabe, teil: ort.teil, quelltext }),
    });
    e = (await r.json()) as CodeErgebnis;
    if (!e || typeof e.status !== "string") throw new Error("unerwartete Antwort");
  } catch {
    e = { status: "fehler", meldung: "Der Java-Runner ist nicht erreichbar. Läuft der Dev-Server? " + RUNNER_AKTIVIEREN, compiler: [], regeln: [], tests: [], ms: 0 };
  }
  return urteilAusErgebnis(teil, e);
}

/** Ein Teil pruefen: code ueber den Runner (asynchron), alles andere sofort. */
export function pruefeTeilAsync(teil: Teil, eingabe: string | (string | number)[], ort: CodeOrt): Promise<Urteil> {
  if (teil.typ === "code") return pruefeCodeTeil(ort, teil, Array.isArray(eingabe) ? eingabe.join("\n") : eingabe);
  return Promise.resolve(pruefeTeil(teil, eingabe));
}
