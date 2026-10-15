"use client";
import { useEffect, useState } from "react";

interface Props {
  startedAt: number;
  dauerMinuten: number;
}

function formatMMSS(sekunden: number): string {
  const s = Math.max(0, Math.floor(sekunden));
  const m = Math.floor(s / 60);
  const rest = s % 60;
  return `${m}:${String(rest).padStart(2, "0")}`;
}

/**
 * Owns its own 1x/second tick in isolation, so the (potentially large) task text and rubric
 * around it never re-render once a second along with the clock.
 */
export function TestTimer({ startedAt, dauerMinuten }: Props): React.JSX.Element {
  const [jetzt, setJetzt] = useState(() => Date.now());

  useEffect(() => {
    const intervall = setInterval(() => setJetzt(Date.now()), 1000);
    return () => clearInterval(intervall);
  }, []);

  const vergangeneSekunden = (jetzt - startedAt) / 1000;
  const verbleibendeSekunden = dauerMinuten * 60 - vergangeneSekunden;
  const abgelaufen = verbleibendeSekunden <= 0;
  const knapp = !abgelaufen && verbleibendeSekunden <= 5 * 60;
  const warnung = !abgelaufen && verbleibendeSekunden <= 15 * 60;

  return (
    <div
      className={[
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-mono",
        abgelaufen
          ? "bg-danger-soft border-danger-line text-danger"
          : knapp
          ? "bg-danger-soft border-danger-line text-danger"
          : warnung
          ? "bg-warning-soft border-warning-line text-warning"
          : "bg-surface-sunken border-line text-ink-soft",
      ].join(" ")}
    >
      {abgelaufen ? (
        <span>Zeit abgelaufen ({formatMMSS(-verbleibendeSekunden)} ueberzogen)</span>
      ) : (
        <>
          <span>{formatMMSS(vergangeneSekunden)} verstrichen</span>
          <span className="text-ink-subtle" aria-hidden="true">·</span>
          <span>{formatMMSS(verbleibendeSekunden)} verbleibend</span>
        </>
      )}
    </div>
  );
}
