"use client";

import { useState, useTransition } from "react";
import { installiereInhaltUpdate, pruefeInhaltUpdate } from "@/app/inhalt-actions";
import type { InhaltStatus } from "@/lib/inhalt/typen";

const datum = new Intl.DateTimeFormat("de-AT", { day: "numeric", month: "short", year: "numeric" });
const tag = (iso: string): string => datum.format(new Date(iso));

const KNOPF = "inline-flex items-center px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

/** Zeigt den Stand der Inhalte und holt auf Knopfdruck das neueste Inhaltspaket aus dem GitHub-Release. */
export function InhaltAktualisieren({ anfang }: { anfang: InhaltStatus }): React.JSX.Element {
  const [status, setStatus] = useState(anfang);
  const [arbeitet, starte] = useTransition();
  const [tut, setTut] = useState<"pruefen" | "installieren" | null>(null);

  const ausfuehren = (art: "pruefen" | "installieren"): void => {
    setTut(art);
    starte(async () => {
      setStatus(await (art === "pruefen" ? pruefeInhaltUpdate() : installiereInhaltUpdate()));
      setTut(null);
    });
  };

  // Ohne eingerichtete Update-Quelle gibt es nichts anzubieten.
  if (!status.konfiguriert) return <></>;

  const stand = status.installiert ? `Stand: ${tag(status.installiert.veroeffentlichtAm)}` : "Noch kein Update eingespielt";
  const aktuell = status.verfuegbar === null && !status.fehler && !status.meldung;

  return (
    <section aria-labelledby="inhalt-titel" className="mt-12 border-t border-line pt-5">
      <h2 id="inhalt-titel" className="text-[10px] font-mono font-medium uppercase tracking-widest text-ink-faint">
        Inhalte
      </h2>
      <p className="mt-1.5 text-xs text-ink-muted">{stand}</p>

      <div className="mt-3 flex flex-col items-start gap-2">
        {status.verfuegbar ? (
          <>
            <p className="text-xs text-ink">
              Neu: <span className="font-mono">{status.verfuegbar.tag}</span> vom {tag(status.verfuegbar.veroeffentlichtAm)}
            </p>
            <button type="button" onClick={() => ausfuehren("installieren")} disabled={arbeitet} className={`${KNOPF} bg-accent text-white hover:bg-accent-hover`}>
              {tut === "installieren" ? "Aktualisiere …" : "Jetzt aktualisieren"}
            </button>
          </>
        ) : (
          <button type="button" onClick={() => ausfuehren("pruefen")} disabled={arbeitet} className={`${KNOPF} border border-line text-ink-soft hover:bg-surface-sunken`}>
            {tut === "pruefen" ? "Suche …" : "Nach Updates suchen"}
          </button>
        )}
      </div>

      <p role="status" aria-live="polite" className={`mt-2 text-xs ${status.fehler ? "text-danger" : "text-ink-muted"}`}>
        {status.fehler ?? status.meldung ?? (aktuell ? "Die Inhalte sind aktuell." : "")}
      </p>
    </section>
  );
}
