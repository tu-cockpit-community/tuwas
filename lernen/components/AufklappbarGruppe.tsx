"use client";

import { createContext, useContext, useState } from "react";

interface GruppenSignal {
  befehl: "auf" | "zu" | null;
  generation: number;
}

const GruppenKontext = createContext<GruppenSignal>({ befehl: null, generation: 0 });

/** Vom einzelnen Aufklappbar konsumiert: `generation` wird als `key` fuer einen sauberen Remount
 * genutzt (siehe Aufklappbar.tsx) -- so wirkt jeder Klick auf "Alle ein-/ausklappen" genau einmal,
 * ganz ohne Effekt. */
export function useGruppenSignal(): GruppenSignal {
  return useContext(GruppenKontext);
}

function PfeilIcon({ richtung }: { richtung: "hoch" | "runter" }): React.JSX.Element {
  return (
    <svg
      className="shrink-0"
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
    >
      <path d={richtung === "runter" ? "M6 9l6 6 6-6" : "M18 15l-6-6-6 6"} />
    </svg>
  );
}

const KNOPF_KLASSEN =
  "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-line bg-surface-raised " +
  "text-xs font-medium text-ink-muted hover:text-accent hover:border-accent-line hover:bg-accent-soft transition-colors";

/**
 * Steuerung + Provider fuer eine Gruppe von Aufklappbar-Karten (z.B. alle Konzeptkarten einer
 * Lektion) -- "Alle einklappen"/"Alle ausklappen" wirken auf jede Karte in `children`, ohne dass
 * die einzelne Karte ihren eigenen Offen/Zu-Zustand an die Seite abgeben muss.
 */
export function AufklappbarGruppe({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [signal, setSignal] = useState<GruppenSignal>({ befehl: null, generation: 0 });

  function sende(befehl: "auf" | "zu"): void {
    setSignal((s) => ({ befehl, generation: s.generation + 1 }));
  }

  return (
    <GruppenKontext.Provider value={signal}>
      <div className="flex items-center justify-end gap-2 mb-4">
        <button type="button" onClick={() => sende("auf")} className={KNOPF_KLASSEN}>
          <PfeilIcon richtung="runter" />
          Alle ausklappen
        </button>
        <button type="button" onClick={() => sende("zu")} className={KNOPF_KLASSEN}>
          <PfeilIcon richtung="hoch" />
          Alle einklappen
        </button>
      </div>
      {children}
    </GruppenKontext.Provider>
  );
}
