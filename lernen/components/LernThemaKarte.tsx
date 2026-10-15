import type { LernThema } from "@/lib/types";

function CodeBlock({ code, sprache }: { code: string; sprache?: string }): React.JSX.Element {
  return (
    <div className="relative rounded-lg overflow-hidden border border-line mt-3">
      {sprache && (
        <div className="bg-code-header-bg px-3 py-1 text-[10px] font-mono text-ink-faint border-b border-code-line">
          {sprache}
        </div>
      )}
      <pre className="bg-code-bg text-code-ink p-4 text-sm font-mono overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** Ein Thema aus der leichten `lern_themen`-Kurzuebersicht -- Fallback-Darstellung fuer Kurse
 * ohne vollstaendig geparstes Skript (siehe app/kurse/[id]/lernpfad/page.tsx). */
export function LernThemaKarte({ thema }: { thema: LernThema }): React.JSX.Element {
  return (
    <section id={thema.id} className="scroll-mt-6">
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-line bg-surface-sunken">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink-faint bg-surface-raised border border-line px-2 py-0.5 rounded shrink-0">
              {String(thema.nr).padStart(2, "0")}
            </span>
            <h2 className="text-lg font-semibold text-ink">{thema.titel}</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">Erklärung</p>
            <p className="text-sm text-ink-soft leading-relaxed">{thema.erklaerung}</p>
          </div>

          {thema.kernpunkte.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2.5">Das Wichtigste</p>
              <ul className="space-y-2">
                {thema.kernpunkte.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="text-accent shrink-0 mt-0.5 font-bold">-</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {thema.beispiel && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2.5">Beispiel</p>
              {thema.beispiel.code && <CodeBlock code={thema.beispiel.code} sprache={thema.beispiel.sprache} />}
              <p className="text-sm text-ink-muted leading-relaxed mt-3">{thema.beispiel.erklaerung}</p>
            </div>
          )}

          {thema.typische_fehler && thema.typische_fehler.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-danger mb-2.5">Typische Fehler</p>
              <ul className="space-y-1.5">
                {thema.typische_fehler.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-danger">
                    <span className="text-danger shrink-0 mt-0.5">!</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {thema.fragen.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2.5">Selbsttest</p>
              <div className="space-y-2">
                {thema.fragen.map((q, i) => (
                  <details key={i} className="group border border-line rounded-lg overflow-hidden">
                    <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-ink-soft hover:bg-surface-sunken list-none flex items-center justify-between">
                      {q.frage}
                      <span className="text-ink-faint text-xs ml-3 shrink-0 group-open:hidden">Antwort zeigen</span>
                      <span className="text-ink-faint text-xs ml-3 shrink-0 hidden group-open:inline">Zuklappen</span>
                    </summary>
                    <div className="px-4 py-3 bg-success-soft border-t border-success-line">
                      <p className="text-sm text-success leading-relaxed">{q.antwort}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
