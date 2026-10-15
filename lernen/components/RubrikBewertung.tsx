"use client";
import { useMemo } from "react";
import type { TestRubrikZeile } from "@/lib/types";

interface Props {
  rubrik: TestRubrikZeile[];
  maxPunkte: number;
  bestehensgrenzePunkte: number;
  bewertung: Record<string, number>;
  onBewertung: (bewertung: Record<string, number>) => void;
}

export function RubrikBewertung({
  rubrik,
  maxPunkte,
  bestehensgrenzePunkte,
  bewertung,
  onBewertung,
}: Props): React.JSX.Element {
  const gruppen = useMemo(() => {
    const map = new Map<string, TestRubrikZeile[]>();
    for (const zeile of rubrik) {
      const liste = map.get(zeile.methode) ?? [];
      liste.push(zeile);
      map.set(zeile.methode, liste);
    }
    return [...map.entries()];
  }, [rubrik]);

  const summe = rubrik.reduce((s, z) => s + (bewertung[z.id] ?? 0), 0);
  const bestanden = summe >= bestehensgrenzePunkte;

  return (
    <div className="bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-line grid grid-cols-[1fr_1fr_60px] gap-3 text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
        <span>Methode</span>
        <span>Bewertungsgrundlage</span>
        <span className="text-right">Punkte</span>
      </div>
      <div className="divide-y divide-line">
        {gruppen.map(([methode, zeilen]) =>
          zeilen.map((zeile, i) => (
            <div key={zeile.id} className="px-4 py-2.5 grid grid-cols-[1fr_1fr_60px] gap-3 items-center text-sm">
              <span className="font-mono text-xs text-ink-muted">{i === 0 ? methode : ""}</span>
              <span className="text-ink-soft">{zeile.kriterium}</span>
              <select
                value={bewertung[zeile.id] ?? 0}
                onChange={(e) => onBewertung({ ...bewertung, [zeile.id]: Number(e.target.value) })}
                className="justify-self-end w-14 text-right font-mono text-sm border border-line rounded px-1.5 py-1"
                aria-label={`Punkte für ${zeile.kriterium} (max. ${zeile.punkte})`}
              >
                {Array.from({ length: zeile.punkte + 1 }, (_, p) => (
                  <option key={p} value={p}>
                    {p} / {zeile.punkte}
                  </option>
                ))}
              </select>
            </div>
          ))
        )}
      </div>
      <div
        className={[
          "px-4 py-3 flex items-center justify-between border-t",
          bestanden ? "bg-success-soft border-success-line" : "bg-danger-soft border-danger-line",
        ].join(" ")}
      >
        <span className={`text-xs font-medium ${bestanden ? "text-success" : "text-danger"}`}>
          {bestanden ? "Bestanden" : "Nicht bestanden"} (Grenze: {bestehensgrenzePunkte} / {maxPunkte})
        </span>
        <span className={`font-mono text-sm font-semibold ${bestanden ? "text-success" : "text-danger"}`}>
          {summe} / {maxPunkte}
        </span>
      </div>
    </div>
  );
}
