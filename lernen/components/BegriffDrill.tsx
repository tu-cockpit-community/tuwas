"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { speichereBegriffVersuch } from "@/app/begriffe-actions";
import { MASTERY_SCHWELLE } from "@/lib/db/queries/begriffe-leitner";
import type { BegriffMitFortschritt } from "@/lib/db/queries/begriffe";

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const d: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      d[i][j] = a[i - 1] === b[j - 1] ? d[i - 1][j - 1] : 1 + Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]);
    }
  }
  return d[m][n];
}

/** Tippfehler-tolerant ab 4 Zeichen (1 Edit erlaubt) -- kurze/symbolische Begriffe (";", "int")
 * brauchen exakten Treffer, sonst waeren fast beliebige 3-Zeichen-Eingaben "fast richtig". */
function istRichtig(eingabe: string, erwartet: string): boolean {
  const a = eingabe.trim().toLowerCase();
  const b = erwartet.trim().toLowerCase();
  if (a === b) return true;
  if (a === "" || b.length <= 3) return false;
  return levenshtein(a, b) <= 1;
}

interface Eintrag {
  begriff: BegriffMitFortschritt;
  streak: number;
}

interface Props {
  begriffe: BegriffMitFortschritt[];
}

/**
 * Mikro-Drill pro Konzeptkarte: EIN Begriff auf einmal, Definition -> Begriff eintippen,
 * sofortiges Feedback. Bei richtig wandert der Begriff (noch nicht gemeistert) ans Ende der
 * Warteschlange statt sofort erneut dranzukommen -- Interleaving statt Blockuebung. 2x richtig
 * in Folge = fuer diese Session gemeistert. Kein Quiz am Seitenende: die Karte signalisiert
 * per Zaehler selbst, wann sie fertig ist.
 */
export function BegriffDrill({ begriffe }: Props): React.JSX.Element | null {
  const gesamt = begriffe.length;
  const [warteschlange, setWarteschlange] = useState<Eintrag[]>(() =>
    begriffe.filter((b) => !b.gemeistert).map((b) => ({ begriff: b, streak: b.streak }))
  );
  const [gemeistertAnzahl, setGemeistertAnzahl] = useState(() => begriffe.filter((b) => b.gemeistert).length);
  const [eingabe, setEingabe] = useState("");
  const [feedback, setFeedback] = useState<"richtig" | "falsch" | null>(null);
  const [loesung, setLoesung] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, startTransition] = useTransition();

  const aktuell = warteschlange[0] ?? null;

  useEffect(() => {
    if (feedback === null) inputRef.current?.focus();
  }, [aktuell?.begriff.id, feedback]);

  if (gesamt === 0) return null;

  function auswerten(): void {
    if (!aktuell || feedback !== null) return;
    const richtig = istRichtig(eingabe, aktuell.begriff.begriff);
    const neuerStreak = richtig ? aktuell.streak + 1 : 0;
    const gemeistertJetzt = richtig && neuerStreak >= MASTERY_SCHWELLE;

    setFeedback(richtig ? "richtig" : "falsch");
    setLoesung(richtig ? null : aktuell.begriff.begriff);
    startTransition(() => {
      speichereBegriffVersuch(aktuell.begriff.id, richtig);
    });

    window.setTimeout(() => {
      setWarteschlange((bisherig) => {
        const [, ...rest] = bisherig;
        return gemeistertJetzt ? rest : [...rest, { begriff: aktuell.begriff, streak: neuerStreak }];
      });
      if (gemeistertJetzt) setGemeistertAnzahl((n) => n + 1);
      setEingabe("");
      setFeedback(null);
      setLoesung(null);
    }, richtig ? 500 : 1400);
  }

  if (!aktuell) {
    return (
      <div className="mt-4 bg-success-soft border border-success-line rounded-lg px-4 py-3 text-sm text-success">
        Alle {gesamt} Begriffe dieser Karte gemeistert.
      </div>
    );
  }

  return (
    <div className="mt-4 bg-surface-sunken border border-line rounded-lg p-4">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">Begriffe üben</p>
        <p className="text-xs font-mono text-ink-faint">{gemeistertAnzahl} / {gesamt} gemeistert</p>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mb-3">{aktuell.begriff.definition}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          auswerten();
        }}
        className="flex items-center gap-2"
      >
        <label htmlFor="begriff-drill-eingabe" className="sr-only">Begriff eintippen</label>
        <input
          id="begriff-drill-eingabe"
          ref={inputRef}
          type="text"
          value={eingabe}
          onChange={(e) => setEingabe(e.target.value)}
          disabled={feedback !== null}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="Begriff eintippen..."
          className={[
            "flex-1 min-w-0 px-3 py-2 rounded-lg border text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent",
            feedback === "richtig"
              ? "bg-success-soft border-success-line text-success"
              : feedback === "falsch"
              ? "bg-danger-soft border-danger-line text-danger"
              : "bg-surface-raised border-line text-ink",
          ].join(" ")}
        />
        <button
          type="submit"
          disabled={feedback !== null || eingabe.trim() === ""}
          className="px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium disabled:opacity-40 shrink-0"
        >
          Prüfen
        </button>
      </form>
      {loesung && (
        <p className="mt-2 text-xs text-danger">
          Richtig wäre: <span className="font-mono font-semibold">{loesung}</span>
        </p>
      )}
      <div className="h-1 bg-surface-raised rounded-full overflow-hidden mt-3">
        <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${(gemeistertAnzahl / gesamt) * 100}%` }} />
      </div>
    </div>
  );
}
