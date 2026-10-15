"use client";
import { useTransition } from "react";
import { toggleLektion } from "@/app/kurs-actions";

interface Props {
  kursId: string;
  lektionId: string;
  abgeschlossen: boolean;
  abgeschlossenAm: string | null;
}

export function LektionAbschluss({ kursId, lektionId, abgeschlossen, abgeschlossenAm }: Props): React.JSX.Element {
  const [pending, start] = useTransition();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => start(() => toggleLektion(kursId, lektionId))}
      onKeyDown={(e) => e.key === "Enter" && start(() => toggleLektion(kursId, lektionId))}
      className={[
        "flex items-center gap-2.5 px-3.5 py-2 rounded-lg border cursor-pointer select-none transition-colors",
        abgeschlossen
          ? "bg-success-soft border-success-line hover:bg-success-soft/60"
          : "bg-surface-raised border-line hover:bg-surface-sunken",
        pending ? "opacity-50 pointer-events-none" : "",
      ].join(" ")}
    >
      <div
        className={[
          "w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-all",
          abgeschlossen ? "bg-success border-success" : "border-line-strong",
        ].join(" ")}
      >
        {abgeschlossen && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="2,6 5,9 10,3" />
          </svg>
        )}
      </div>
      <span className={`text-sm font-medium ${abgeschlossen ? "text-success" : "text-ink-soft"}`}>
        {abgeschlossen ? "Als gelesen markiert" : "Als gelesen markieren"}
      </span>
      {abgeschlossenAm && <span className="text-xs font-mono text-success ml-1">{abgeschlossenAm}</span>}
    </div>
  );
}
