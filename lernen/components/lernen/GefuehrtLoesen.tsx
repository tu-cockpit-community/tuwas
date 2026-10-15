"use client";

import { useState } from "react";
import type { Teil } from "@/lib/lernen/typen";
import { pruefeTeil, type Urteil } from "@/lib/lernen/rechnen";
import { Eingabe, leereAntwort, type Antwort } from "./Eingabe";
import type { TeilRender } from "./Aufgabe";
import { Md } from "./Md";

/**
 * Gefuehrtes Loesen (ausgeblendetes Musterbeispiel): ein Schritt nach dem anderen. Jeder Schritt
 * stellt eine Teilfrage, optional mit Antwortfeld; erst nach eigener Antwort (oder "Zeigen") kommt
 * die Erklaerung und der naechste Schritt. So wird aus dem Lesen einer Loesung aktives Mitdenken.
 */

export interface SchrittRender {
  text: React.ReactNode;
  teil?: Teil;
  teilRender?: TeilRender;
  /** Markdown, erst nach dem Schritt gerendert */
  erklaerung: string;
}

export function GefuehrtLoesen({ schritte, beiFertig }: { schritte: SchrittRender[]; beiFertig: (selbst: number) => void }) {
  const [aktuell, setAktuell] = useState(0);
  const [offen, setOffen] = useState<boolean[]>(() => schritte.map(() => false));
  const [antworten, setAntworten] = useState<Antwort[]>(() => schritte.map((s) => (s.teil ? leereAntwort(s.teil) : "")));
  const [urteile, setUrteile] = useState<(Urteil | null)[]>(() => schritte.map(() => null));
  const [selbstRichtig, setSelbstRichtig] = useState(0);

  function aufdecken(i: number, richtig: boolean) {
    setOffen((o) => o.map((x, j) => (j === i ? true : x)));
    if (richtig) setSelbstRichtig((n) => n + 1);
    if (i === schritte.length - 1) beiFertig(selbstRichtig + (richtig ? 1 : 0));
  }

  function pruefen(i: number) {
    const s = schritte[i];
    if (!s.teil) return;
    const u = pruefeTeil(s.teil, antworten[i] as string | string[]);
    setUrteile((alt) => alt.map((x, j) => (j === i ? u : x)));
    if (u.ok) aufdecken(i, true);
  }

  return (
    <ol className="gefuehrt" aria-label="Geführtes Lösen">
      {schritte.slice(0, aktuell + 1).map((s, i) => {
        const u = urteile[i];
        return (
          <li key={i} className={`gefuehrt-schritt ${offen[i] ? "erledigt" : ""}`}>
            <div className="gefuehrt-text">{s.text}</div>
            {s.teil ? (
              <div className="gefuehrt-eingabe">
                <Eingabe
                  teil={s.teil}
                  wert={antworten[i]}
                  gesperrt={offen[i]}
                  setze={(a) => {
                    setAntworten((alt) => alt.map((x, j) => (j === i ? a : x)));
                    setUrteile((alt) => alt.map((x, j) => (j === i ? null : x)));
                  }}
                  label={s.teilRender?.label}
                  optionen={s.teilRender?.optionen}
                  status={u && !u.leer ? (u.ok ? "ok" : "falsch") : null}
                  onEnter={() => pruefen(i)}
                />
                {u && !u.ok ? (
                  <div className={`urteil ${u.leer ? "urteil-leer" : "urteil-falsch"}`} role="status">
                    {u.fehlerbild !== undefined && s.teilRender?.fehler?.[u.fehlerbild] ? (
                      <div className="fehlerbild">
                        <Md>{s.teilRender.fehler[u.fehlerbild]}</Md>
                      </div>
                    ) : (
                      <span>{u.meldung ?? "Noch nicht. Schau dir den Schritt noch einmal an."}</span>
                    )}
                  </div>
                ) : null}
                {!offen[i] ? (
                  <div className="gefuehrt-knoepfe">
                    <button type="button" className="knopf knopf-primaer knopf-klein" onClick={() => pruefen(i)}>
                      Prüfen
                    </button>
                    <button type="button" className="knopf knopf-leise knopf-klein" onClick={() => aufdecken(i, false)}>
                      Zeigen
                    </button>
                  </div>
                ) : null}
              </div>
            ) : !offen[i] ? (
              <div className="gefuehrt-knoepfe">
                <button type="button" className="knopf knopf-klein" onClick={() => aufdecken(i, true)}>
                  Überlegt, weiter
                </button>
              </div>
            ) : null}
            {offen[i] ? (
              <div className="gefuehrt-erklaerung">
                <Md>{s.erklaerung}</Md>
              </div>
            ) : null}
            {offen[i] && i === aktuell && i < schritte.length - 1 ? (
              <button type="button" className="knopf knopf-klein gefuehrt-weiter" onClick={() => setAktuell(i + 1)}>
                Nächster Schritt
              </button>
            ) : null}
          </li>
        );
      })}
      {offen[schritte.length - 1] ? (
        <li className="gefuehrt-ende" role="status">
          Geschafft. Löse die Aufgabe beim Wiederholen ohne Führung, dann sitzt sie.
        </li>
      ) : null}
    </ol>
  );
}
