"use client";

import { useStand } from "@/lib/lernen/fortschritt";

export function PruefungsVersuche({ kurs, id }: { kurs: string; id: string }) {
  const v = useStand(kurs).pruefungen[id] ?? [];
  if (!v.length) return <span className="pruefungs-versuche">Noch nicht geschrieben</span>;
  const best = Math.max(...v.map((x) => x.punkte / x.max));
  return (
    <span className="pruefungs-versuche">
      {v.length} {v.length === 1 ? "Versuch" : "Versuche"}, bestes Ergebnis {Math.round(best * 100)} %
    </span>
  );
}
