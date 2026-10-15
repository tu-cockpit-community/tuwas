"use client";

import { setzeGelesen, useStand } from "@/lib/lernen/fortschritt";

export function GelesenKnopf({ kurs, schluessel, titel }: { kurs: string; schluessel: string; titel: string }) {
  const stand = useStand(kurs);
  const an = Boolean(stand.gelesen[schluessel]);
  return (
    <button
      type="button"
      className={`knopf knopf-klein gelesen-knopf ${an ? "knopf-gewaehlt" : ""}`}
      aria-pressed={an}
      onClick={() => setzeGelesen(kurs, schluessel, !an)}
    >
      {an ? `„${titel}“ durchgearbeitet ✓` : "Abschnitt als durchgearbeitet markieren"}
    </button>
  );
}
