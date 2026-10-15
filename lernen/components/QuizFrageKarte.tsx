"use client";
import { memo } from "react";
import type { QuizFrage } from "@/lib/types";

export type QuizAntwort =
  | { typ: "einfachauswahl"; ausgewaehlt: number | null }
  | { typ: "wahr_falsch"; werte: Array<boolean | null> };

export function leereAntwort(frage: QuizFrage): QuizAntwort {
  return frage.typ === "einfachauswahl"
    ? { typ: "einfachauswahl", ausgewaehlt: null }
    : { typ: "wahr_falsch", werte: frage.zeilen.map(() => null) };
}

/** True once every part of the answer has been filled in - the point at which "Auswerten" may run. */
export function istBeantwortet(antwort: QuizAntwort): boolean {
  return antwort.typ === "einfachauswahl" ? antwort.ausgewaehlt !== null : antwort.werte.every((w) => w !== null);
}

/** Points earned for one question given its current answer. Partial credit for wahr_falsch rows. */
export function punkteFuer(frage: QuizFrage, antwort: QuizAntwort): number {
  if (frage.typ === "einfachauswahl" && antwort.typ === "einfachauswahl") {
    return antwort.ausgewaehlt === frage.richtig ? frage.punkte : 0;
  }
  if (frage.typ === "wahr_falsch" && antwort.typ === "wahr_falsch") {
    const korrekt = frage.zeilen.filter((z, i) => antwort.werte[i] === z.richtig).length;
    return Math.round(((frage.punkte * korrekt) / frage.zeilen.length) * 100) / 100;
  }
  return 0;
}

function CodeBlock({ code, sprache }: { code: string; sprache?: string }): React.JSX.Element {
  return (
    <div className="relative rounded-lg overflow-hidden border border-line mt-2">
      {sprache && (
        <div className="bg-code-header-bg px-3 py-1 text-[10px] font-mono text-ink-faint border-b border-code-line">
          {sprache}
        </div>
      )}
      <pre className="bg-code-bg text-code-ink p-3 text-xs font-mono overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

interface Props {
  frage: QuizFrage;
  nummer: number;
  antwort: QuizAntwort;
  ausgewertet: boolean;
  onAntwort: (antwort: QuizAntwort) => void;
}

function QuizFrageKarteImpl({ frage, nummer, antwort, ausgewertet, onAntwort }: Props): React.JSX.Element {
  const punkte = ausgewertet ? punkteFuer(frage, antwort) : null;
  const richtigBeantwortet = punkte !== null && punkte >= frage.punkte;
  const teilweiseRichtig = punkte !== null && punkte > 0 && punkte < frage.punkte;

  return (
    <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
      <div className="flex items-start gap-2.5 mb-2">
        <span className="font-mono text-xs text-ink-faint shrink-0 mt-0.5">{String(nummer).padStart(2, "0")}</span>
        <div className="flex-1 min-w-0">
          {frage.einleitung && <p className="text-sm text-ink-muted mb-2 leading-relaxed">{frage.einleitung}</p>}
          {frage.typ === "einfachauswahl" && frage.code && <CodeBlock code={frage.code} sprache={frage.sprache} />}
          <p className="text-sm font-medium text-ink mt-2">{frage.frage}</p>
          {frage.typ === "wahr_falsch" && frage.hinweis && (
            <p className="text-xs text-ink-muted mt-1 italic">{frage.hinweis}</p>
          )}
        </div>
        {ausgewertet && (
          <span
            className={[
              "text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0",
              richtigBeantwortet
                ? "bg-success-soft text-success border border-success-line"
                : teilweiseRichtig
                ? "bg-warning-soft text-warning border border-warning-line"
                : "bg-danger-soft text-danger border border-danger-line",
            ].join(" ")}
          >
            {punkte} / {frage.punkte} P.
          </span>
        )}
      </div>

      {frage.typ === "einfachauswahl" && antwort.typ === "einfachauswahl" && (
        <fieldset className="mt-3 space-y-2" disabled={ausgewertet}>
          <legend className="sr-only">{frage.frage}</legend>
          {frage.optionen.map((opt, i) => {
            const gewaehlt = antwort.ausgewaehlt === i;
            const zeigeRichtig = ausgewertet && i === frage.richtig;
            const zeigeFalsch = ausgewertet && gewaehlt && i !== frage.richtig;
            return (
              <label
                key={i}
                className={[
                  "flex items-start gap-2.5 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors",
                  zeigeRichtig
                    ? "bg-success-soft border-success-line"
                    : zeigeFalsch
                    ? "bg-danger-soft border-danger-line"
                    : gewaehlt
                    ? "bg-accent-soft border-accent-line"
                    : "bg-surface-raised border-line hover:bg-surface-sunken",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name={frage.id}
                  checked={gewaehlt}
                  onChange={() => onAntwort({ typ: "einfachauswahl", ausgewaehlt: i })}
                  className="mt-0.5 shrink-0"
                />
                <span className="flex-1 min-w-0">
                  {opt.text && <span className="text-ink-soft">{opt.text}</span>}
                  {opt.code && <CodeBlock code={opt.code} sprache={opt.sprache} />}
                </span>
              </label>
            );
          })}
        </fieldset>
      )}

      {frage.typ === "wahr_falsch" && antwort.typ === "wahr_falsch" && (
        <div className="mt-3 space-y-2">
          {frage.zeilen.map((zeile, i) => (
            <fieldset
              key={i}
              disabled={ausgewertet}
              className={[
                "border rounded-lg px-3 py-2.5",
                ausgewertet && antwort.werte[i] === zeile.richtig
                  ? "bg-success-soft border-success-line"
                  : ausgewertet
                  ? "bg-danger-soft border-danger-line"
                  : "border-line",
              ].join(" ")}
            >
              <legend className="sr-only">Zeile {i + 1}</legend>
              {zeile.text && <p className="text-sm text-ink-soft mb-1.5">{zeile.text}</p>}
              {zeile.code && <CodeBlock code={zeile.code} sprache={zeile.sprache} />}
              <div className="flex items-center gap-4 mt-2 text-xs">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name={`${frage.id}-${i}`}
                    checked={antwort.werte[i] === true}
                    onChange={() => {
                      const werte = [...antwort.werte];
                      werte[i] = true;
                      onAntwort({ typ: "wahr_falsch", werte });
                    }}
                  />
                  Richtig
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name={`${frage.id}-${i}`}
                    checked={antwort.werte[i] === false}
                    onChange={() => {
                      const werte = [...antwort.werte];
                      werte[i] = false;
                      onAntwort({ typ: "wahr_falsch", werte });
                    }}
                  />
                  Falsch
                </label>
                {ausgewertet && (
                  <span className="text-ink-faint font-mono ml-auto">
                    Loesung: {zeile.richtig ? "Richtig" : "Falsch"}
                  </span>
                )}
              </div>
            </fieldset>
          ))}
        </div>
      )}

      {ausgewertet && (
        <div className="mt-3 bg-success-soft border border-success-line rounded-lg px-4 py-3">
          <p className="text-sm text-success leading-relaxed">{frage.erklaerung}</p>
          <p className="text-[10px] text-ink-faint font-mono mt-2">
            {frage.quelle.datei}
            {frage.quelle.jahrgang ? `, ${frage.quelle.jahrgang}` : ""}
            {frage.quelle.frage_nr ? `, Frage ${frage.quelle.frage_nr}` : ""}
          </p>
        </div>
      )}
    </div>
  );
}

/** Memoized: a lesson can carry many code-heavy questions, answering one must not re-render the rest. */
export const QuizFrageKarte = memo(QuizFrageKarteImpl);
