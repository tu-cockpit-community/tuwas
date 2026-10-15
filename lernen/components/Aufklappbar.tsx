"use client";

import { useState } from "react";
import { useGruppenSignal } from "./AufklappbarGruppe";

interface Props {
  titel: React.ReactNode;
  kennzeichen?: React.ReactNode;
  standardOffen?: boolean;
  children: React.ReactNode;
}

function AufklappbarInnen({ titel, kennzeichen, standardOffen, children }: Required<Props>): React.JSX.Element {
  const [offen, setOffen] = useState(standardOffen);
  // `kennzeichen` kann selbst interaktiv sein (z.B. AbschnittHaken) -- deshalb ausserhalb des
  // <button>, als Geschwisterelement: verschachtelte interaktive Elemente in einem <button> sind
  // ungueltiges HTML und lassen sich per Tastatur/Screenreader nicht sauber bedienen.
  return (
    <div className="bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4">
        {kennzeichen}
        <button
          type="button"
          onClick={() => setOffen((o) => !o)}
          aria-expanded={offen}
          className="flex-1 min-w-0 flex items-center justify-between gap-3 text-left"
        >
          <span className="text-sm font-semibold text-ink truncate">{titel}</span>
          <svg
            className={`shrink-0 text-ink-faint transition-transform ${offen ? "rotate-180" : ""}`}
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      {offen && <div className="px-5 pb-5 border-t border-line pt-4">{children}</div>}
    </div>
  );
}

/**
 * Generische einklappbare Karte -- Basis der Konzeptkarten in der Lektionsansicht.
 * Reagiert auf "Alle ein-/ausklappen" aus einer umgebenden AufklappbarGruppe, indem die
 * innere, zustandstragende Komponente bei jedem Gruppenbefehl per `key` neu gemountet wird --
 * das setzt ihren useState()-Anfangswert sauber neu, ganz ohne Effekt/setState-Kaskade.
 */
export function Aufklappbar({ titel, kennzeichen, standardOffen = true, children }: Props): React.JSX.Element {
  const { befehl, generation } = useGruppenSignal();
  const initial = befehl === "auf" ? true : befehl === "zu" ? false : standardOffen;
  return (
    <AufklappbarInnen key={generation} titel={titel} kennzeichen={kennzeichen ?? null} standardOffen={initial}>
      {children}
    </AufklappbarInnen>
  );
}
