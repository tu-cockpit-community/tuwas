"use client";

import { useTransition } from "react";
import { markiereAbschnittVerstanden } from "@/app/kurs-actions";

interface Props {
  kursId: string;
  abschnittId: string;
  verstanden: boolean;
}

/** Kompakter "Verstanden"-Haken pro Konzeptkarte -- selbe Klick/useTransition-Mechanik wie
 * LektionAbschluss.tsx, nur klein genug fuer eine Aufklappbar-Kopfzeile. */
export function AbschnittHaken({ kursId, abschnittId, verstanden }: Props): React.JSX.Element {
  const [pending, start] = useTransition();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        start(() => markiereAbschnittVerstanden(kursId, abschnittId));
      }}
      onKeyDown={(e) => {
        if (e.key !== "Enter") return;
        e.stopPropagation();
        start(() => markiereAbschnittVerstanden(kursId, abschnittId));
      }}
      title={verstanden ? "Als verstanden markiert" : "Als verstanden markieren"}
      className={[
        "w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-all cursor-pointer",
        verstanden ? "bg-success border-success" : "border-line-strong hover:border-accent",
        pending ? "opacity-50 pointer-events-none" : "",
      ].join(" ")}
    >
      {verstanden && (
        <svg viewBox="0 0 12 12" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="2,6 5,9 10,3" />
        </svg>
      )}
    </div>
  );
}
