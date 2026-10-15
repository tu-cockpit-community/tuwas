"use client";
import { useMemo, useState, useTransition } from "react";
import { speichereQuizErgebnis } from "@/app/kurs-actions";
import type { QuizFrage } from "@/lib/types";
import { QuizFrageKarte, istBeantwortet, leereAntwort, punkteFuer, type QuizAntwort } from "./QuizFrageKarte";

interface Props {
  kursId: string;
  lektionId: string;
  fragen: QuizFrage[];
}

export function QuizSet({ kursId, lektionId, fragen }: Props): React.JSX.Element {
  const [antworten, setAntworten] = useState<Record<string, QuizAntwort>>(() =>
    Object.fromEntries(fragen.map((f) => [f.id, leereAntwort(f)]))
  );
  const [ausgewertet, setAusgewertet] = useState(false);
  const [pending, start] = useTransition();

  const maxPunkte = useMemo(() => fragen.reduce((s, f) => s + f.punkte, 0), [fragen]);
  const erreichtePunkte = useMemo(
    () => (ausgewertet ? fragen.reduce((s, f) => s + punkteFuer(f, antworten[f.id]), 0) : 0),
    [ausgewertet, fragen, antworten]
  );
  const alleBeantwortet = fragen.every((f) => istBeantwortet(antworten[f.id]));

  function auswerten(): void {
    setAusgewertet(true);
    const punkte = fragen.reduce((s, f) => s + punkteFuer(f, antworten[f.id]), 0);
    start(() => speichereQuizErgebnis(kursId, lektionId, punkte, maxPunkte));
  }

  function nochmal(): void {
    setAntworten(Object.fromEntries(fragen.map((f) => [f.id, leereAntwort(f)])));
    setAusgewertet(false);
  }

  if (fragen.length === 0) return <></>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Quiz ({fragen.length} {fragen.length === 1 ? "Frage" : "Fragen"})
        </h2>
        {ausgewertet && (
          <span className="text-sm font-mono text-ink-soft">
            {erreichtePunkte} / {maxPunkte} Punkte
          </span>
        )}
      </div>

      {fragen.map((f, i) => (
        <QuizFrageKarte
          key={f.id}
          frage={f}
          nummer={i + 1}
          antwort={antworten[f.id]}
          ausgewertet={ausgewertet}
          onAntwort={(a) => setAntworten((prev) => ({ ...prev, [f.id]: a }))}
        />
      ))}

      <div className="flex items-center gap-3">
        {!ausgewertet ? (
          <button
            type="button"
            onClick={auswerten}
            disabled={!alleBeantwortet}
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Quiz auswerten
          </button>
        ) : (
          <button
            type="button"
            onClick={nochmal}
            disabled={pending}
            className="px-4 py-2 rounded-lg bg-surface-raised border border-line text-ink-soft text-sm font-semibold hover:bg-surface-sunken transition-colors"
          >
            Nochmal versuchen
          </button>
        )}
        {!alleBeantwortet && !ausgewertet && (
          <span className="text-xs text-ink-faint">Bitte alle Fragen beantworten.</span>
        )}
      </div>
    </div>
  );
}
