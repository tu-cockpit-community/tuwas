"use client";

import { useState } from "react";
import { bewerteKarte, useStand } from "@/lib/lernen/fortschritt";

/** Mündliche Prüfungsfragen als Karteikarten: Frage lesen, laut antworten, aufdecken, bewerten. */

export interface KarteDaten {
  id: string;
  frage: React.ReactNode;
  antwort: React.ReactNode;
  /** Kernpunkte einer guten Antwort zum Abhaken (Selbstabgleich) */
  kernpunkte?: React.ReactNode[];
}

export function Karten({ kurs, karten, titel = "Mündliche Prüfung: Fragen zum Üben" }: { kurs: string; karten: KarteDaten[]; titel?: string }) {
  const stand = useStand(kurs);
  const [offen, setOffen] = useState<Record<string, boolean>>({});
  // einmal bewertet je Aufdecken: jeder weitere Klick auf "Gewusst" schoebe die Karte sonst eine Stufe weiter
  const [bewertet, setBewertet] = useState<Record<string, boolean>>({});
  const bewerte = (id: string, gewusst: boolean) => {
    if (bewertet[id]) return;
    setBewertet((b) => ({ ...b, [id]: true }));
    bewerteKarte(kurs, id, gewusst);
  };
  const gekonnt = karten.filter((k) => (stand.karten[k.id]?.stufe ?? 0) > 0).length;
  return (
    <section className="karten" aria-label={titel}>
      <header className="karten-kopf">
        <h4>{titel}</h4>
        <span className="karten-stand">
          {gekonnt} von {karten.length} gewusst
        </span>
      </header>
      <p className="karten-anleitung">Antworte laut in ganzen Sätzen, wie in der mündlichen Prüfung. Dann aufdecken und ehrlich bewerten.</p>
      <ol className="karten-liste">
        {karten.map((k) => {
          const st = stand.karten[k.id];
          return (
            <li key={k.id} className={`karte ${offen[k.id] ? "offen" : ""}`}>
              <div className="karte-frage">{k.frage}</div>
              {offen[k.id] ? (
                <>
                  <div className="karte-antwort">{k.antwort}</div>
                  {k.kernpunkte?.length ? (
                    <fieldset className="karte-kernpunkte">
                      <p>Welche Kernpunkte hast du selbst genannt?</p>
                      {k.kernpunkte.map((kp, i) => (
                        <label key={i}>
                          <input type="checkbox" />
                          <span>{kp}</span>
                        </label>
                      ))}
                    </fieldset>
                  ) : null}
                  <div className="karte-aktionen">
                    <button type="button" className="knopf knopf-klein" disabled={bewertet[k.id]} onClick={() => bewerte(k.id, true)}>
                      Gewusst
                    </button>
                    <button type="button" className="knopf knopf-klein" disabled={bewertet[k.id]} onClick={() => bewerte(k.id, false)}>
                      Nicht gewusst
                    </button>
                    {st ? <span className="karte-stufe">Stufe {st.stufe} von 5</span> : null}
                  </div>
                </>
              ) : (
                <button type="button" className="knopf knopf-klein knopf-leise" onClick={() => setOffen((o) => ({ ...o, [k.id]: true }))}>
                  Antwort aufdecken
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
