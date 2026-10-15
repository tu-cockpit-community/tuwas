"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { speichereTestVersuch } from "@/app/kurs-actions";
import type { Programmiertest } from "@/lib/types";
import { TestTimer } from "./TestTimer";
import { RubrikBewertung } from "./RubrikBewertung";

function CodeBlock({ code }: { code: string }): React.JSX.Element {
  return (
    <pre className="bg-code-bg text-code-ink p-4 text-xs font-mono overflow-x-auto leading-relaxed rounded-lg border border-code-line whitespace-pre-wrap">
      <code>{code}</code>
    </pre>
  );
}

type Phase = "angabe" | "selbstbewertung" | "ergebnis";

interface Props {
  kursId: string;
  test: Programmiertest;
  startedAt: number;
}

export function TestRunner({ kursId, test, startedAt }: Props): React.JSX.Element {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("angabe");
  const [bewertung, setBewertung] = useState<Record<string, number>>({});
  const [notiz, setNotiz] = useState("");
  const [pending, start] = useTransition();
  const [ergebnis, setErgebnis] = useState<{ punkte: number; bestanden: boolean } | null>(null);

  function speichern(): void {
    const summe = test.rubrik.reduce((s, z) => s + (bewertung[z.id] ?? 0), 0);
    const vergangeneMinuten = Math.round((Date.now() - startedAt) / 60000);
    start(async () => {
      await speichereTestVersuch(kursId, test.id, {
        benoetigte_minuten: vergangeneMinuten,
        selbstbewertung: bewertung,
        notiz: notiz || undefined,
      });
      setErgebnis({ punkte: summe, bestanden: summe >= test.bestehensgrenze_punkte });
      setPhase("ergebnis");
      router.refresh();
    });
  }

  if (phase === "ergebnis" && ergebnis) {
    return (
      <div
        className={[
          "border rounded-xl shadow-sm p-6 text-center",
          ergebnis.bestanden ? "bg-success-soft border-success-line" : "bg-danger-soft border-danger-line",
        ].join(" ")}
      >
        <p className={`text-2xl font-mono font-bold ${ergebnis.bestanden ? "text-success" : "text-danger"}`}>
          {ergebnis.punkte} / {test.max_punkte}
        </p>
        <p className={`text-sm font-medium mt-1 ${ergebnis.bestanden ? "text-success" : "text-danger"}`}>
          {ergebnis.bestanden ? "Bestanden" : "Nicht bestanden"}
        </p>
        <p className="text-xs text-ink-muted mt-3">Testversuch gespeichert.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <TestTimer startedAt={startedAt} dauerMinuten={test.dauer_minuten} />
        {test.dauer_quelle === "annahme" && (
          <span className="text-[10px] text-ink-faint">Dauer ist eine Annahme, nicht in der Angabe genannt.</span>
        )}
      </div>

      <div className="bg-warning-soft border border-warning-line rounded-xl p-4">
        <p className="text-sm text-warning leading-relaxed">
          Schreibe deine Lösung in deiner eigenen IDE - es gibt hier keine Code-Ausführung. Wenn du fertig bist
          (oder aufgeben moechtest), klicke unten auf &quot;Lösung anzeigen &amp; selbst bewerten&quot;.
        </p>
      </div>

      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5 space-y-4">
        <h2 className="text-lg font-semibold text-ink">{test.titel}</h2>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5">Einschränkungen</p>
          <ul className="space-y-1">
            {test.einschraenkungen.map((e, i) => (
              <li key={i} className="text-sm text-ink-soft flex items-start gap-2">
                <span className="text-ink-muted shrink-0">-</span>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5">Erlaubte API</p>
          <div className="flex flex-wrap gap-1.5">
            {test.erlaubte_api.map((a, i) => (
              <span key={i} className="text-xs font-mono bg-surface-sunken text-ink-muted px-1.5 py-0.5 rounded">
                {a}
              </span>
            ))}
          </div>
        </div>

        {test.deklarationen && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5">
              Deklarationen (in main)
            </p>
            <CodeBlock code={test.deklarationen} />
          </div>
        )}

        {test.methoden.map((m, i) => (
          <div key={i} className="border-t border-line pt-4">
            <p className="font-mono text-sm text-ink font-medium">
              {m.signatur} {m.rekursiv && <span className="text-[10px] text-accent font-sans">(rekursiv)</span>}
            </p>
            <p className="text-sm text-ink-muted mt-1.5 leading-relaxed">{m.beschreibung}</p>
            {m.vorbedingungen.length > 0 && (
              <p className="text-xs text-ink-faint mt-1.5">
                Vorbedingungen: <span className="font-mono">{m.vorbedingungen.join(", ")}</span>
              </p>
            )}
            {m.beispiel_ausgabe && <CodeBlock code={m.beispiel_ausgabe} />}
          </div>
        ))}

        {test.testaufrufe.length > 0 && (
          <div className="border-t border-line pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2">
              Testaufrufe und erwartete Ausgabe
            </p>
            <div className="space-y-1">
              {test.testaufrufe.map((a, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr] gap-3 text-xs font-mono">
                  <span className="text-ink-soft">{a.aufruf}</span>
                  <span className="text-ink-muted">{a.ausgabe || "(keine Ausgabe)"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {phase === "angabe" && (
        <button
          type="button"
          onClick={() => setPhase("selbstbewertung")}
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          Lösung anzeigen &amp; selbst bewerten
        </button>
      )}

      {phase === "selbstbewertung" && (
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5">
              Referenzlösung
            </p>
            <CodeBlock code={test.referenzloesung} />
          </div>

          <RubrikBewertung
            rubrik={test.rubrik}
            maxPunkte={test.max_punkte}
            bestehensgrenzePunkte={test.bestehensgrenze_punkte}
            bewertung={bewertung}
            onBewertung={setBewertung}
          />

          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-1.5 block">
              Notiz (optional)
            </span>
            <textarea
              value={notiz}
              onChange={(e) => setNotiz(e.target.value)}
              rows={2}
              className="w-full text-sm border border-line rounded-lg px-3 py-2"
            />
          </label>

          <button
            type="button"
            onClick={speichern}
            disabled={pending}
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover disabled:opacity-50 transition-colors"
          >
            Testversuch speichern
          </button>
        </div>
      )}
    </div>
  );
}
