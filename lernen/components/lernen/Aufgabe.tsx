"use client";

import { useRef, useState } from "react";
import type { Teil } from "@/lib/lernen/typen";
import { NIVEAUS } from "@/lib/lernen/typen";
import { pruefeTeil, type Urteil } from "@/lib/lernen/rechnen";
import { pruefeTeilAsync } from "@/lib/lernen/codePruefen";
import { setzeAufgabe, useStand, useStandGeladen, type AufgabenStatus } from "@/lib/lernen/fortschritt";
import { Eingabe, leereAntwort, type Antwort } from "./Eingabe";
import { CodeErgebnisAnsicht } from "./CodeErgebnis";
import { GefuehrtLoesen, type SchrittRender } from "./GefuehrtLoesen";
import { Md } from "./Md";

/**
 * Interaktive Aufgabe auf "Rechenblatt"-Optik. Alle Markdown-Teile kommen bereits gerendert vom
 * Server (KaTeX serverseitig); hier lebt nur Interaktion: Eingabe, Pruefen, Hinweise, Loesungsweg.
 */

/** Sichtbares (label, optionen) kommt gerendert; Verborgenes (muster, fehler) als Markdown und wird erst
 * beim Aufdecken im Browser gerendert. Das haelt Lektionsseiten klein und schnell. */
export interface TeilRender {
  label?: React.ReactNode;
  optionen?: React.ReactNode[];
  /** Musterantwort als Markdown */
  muster: string;
  /** Meldungen der Fehlerbilder als Markdown, gleiche Reihenfolge wie teil.fehler */
  fehler?: string[];
  /** true: muster als Block (text-Teile), sonst inline */
  musterBlock?: boolean;
}

export interface AufgabeProps {
  kurs: string;
  id: string;
  nummer?: string;
  titel: string;
  niveau: 1 | 2 | 3;
  quelle?: string;
  punkte?: number;
  angabe: React.ReactNode;
  plot?: React.ReactNode;
  teile: Teil[];
  teilRender: TeilRender[];
  /** Hinweise und Loesungsschritte als Markdown (erst beim Aufdecken gerendert) */
  hinweise: string[];
  schritte: string[];
  /** Trainingsmodus: kein Fortschritts-Eintrag, Rueckmeldung an Aufrufer */
  beiErgebnis?: (richtig: boolean) => void;
  art?: "uebung" | "check";
  gefuehrt?: SchrittRender[];
}

const STATUS_TEXT = { richtig: "Gelöst", versucht: "Versucht", angesehen: "Lösung angesehen" } as const;

export function Aufgabe(p: AufgabeProps) {
  const stand = useStand(p.kurs);
  const status = p.beiErgebnis ? undefined : stand.aufgaben[p.id]?.s;
  // Bereits geloeste Aufgaben starten zugeklappt. Entscheidend ist der Stand beim Laden: wer eine Aufgabe in dieser
  // Sitzung loest, behaelt Rueckmeldung und Loesung im Blick. Ein Klick auf den Titel gilt danach immer.
  const geladen = useStandGeladen(p.kurs);
  const [anfangZu, setAnfangZu] = useState<boolean | null>(null);
  if (geladen && anfangZu === null) setAnfangZu(status === "richtig");
  const [klick, setKlick] = useState<boolean | null>(null);
  const zu = klick ?? anfangZu ?? false;
  const [antworten, setAntworten] = useState<Antwort[]>(() => p.teile.map(leereAntwort));
  const [urteile, setUrteile] = useState<(Urteil | null)[]>(() => p.teile.map(() => null));
  const [hinweise, setHinweise] = useState(0);
  const [schritte, setSchritte] = useState(0);
  const [selbst, setSelbst] = useState<"ja" | "teils" | "nein" | null>(null);
  const [fuehrung, setFuehrung] = useState(false);
  // Erst ein echter Versuch (oder alle Hinweise) schaltet den Loesungsweg frei: Abrufen vor Nachlesen
  const [versucht, setVersucht] = useState(false);
  const [mitHilfe, setMitHilfe] = useState<string | null>(null);
  const [laeuft, setLaeuft] = useState(false);
  // Jede Wertung schiebt die Leitner-Stufe: nochmal "Pruefen" ohne Aenderung oder ein zweites "Ja" darf sie nicht
  // weiter hochzaehlen. `geprueft` gilt bis zur naechsten Eingabe, `richtigErfasst` fuer die ganze Sitzung.
  const geprueft = useRef(false);
  const richtigErfasst = useRef(false);

  function erfasse(status: AufgabenStatus) {
    if (richtigErfasst.current) return;
    if (status === "richtig") richtigErfasst.current = true;
    setzeAufgabe(p.kurs, p.id, status);
  }

  const auto = p.teile.map((t) => t.typ !== "text");
  const hatAuto = auto.some(Boolean);
  const alleRichtig = urteile.length > 0 && urteile.every((u, i) => !auto[i] || u?.ok);
  const loesungOffen = schritte > 0;

  async function pruefen() {
    if (laeuft) return;
    let neu = p.teile.map((t, i) => (auto[i] ? pruefeTeil(t, antworten[i] as string | string[]) : null));
    // code-Teile prueft der Java-Runner auf dem Server (asynchron)
    if (p.teile.some((t) => t.typ === "code")) {
      setLaeuft(true);
      setUrteile(neu.map((u, i) => (p.teile[i].typ === "code" ? { ok: false, leer: true, meldung: "Tests laufen …" } : u)));
      try {
        neu = await Promise.all(
          p.teile.map((t, i) => (auto[i] ? pruefeTeilAsync(t, antworten[i] as string | string[], { kurs: p.kurs, aufgabe: p.id, teil: i }) : Promise.resolve(null))),
        );
      } finally {
        setLaeuft(false);
      }
    }
    setUrteile(neu);
    // nur leere Felder: Hinweis zeigen, aber nichts werten
    if (neu.every((u, i) => !auto[i] || u?.leer)) return;
    setVersucht(true);
    const ok = neu.every((u, i) => !auto[i] || u?.ok);
    // ehrliche Wertung: mit Hinweisen oder nach geoeffneter Loesung zaehlt es nicht als selbst geloest
    const hilfe = loesungOffen || fuehrung || hinweise > 0;
    setMitHilfe(ok && hilfe ? (loesungOffen ? "Richtig, aber nach Blick in die Lösung." : "Richtig, mit Hilfe.") : null);
    // dieselbe Antwort nochmal geprueft: nichts Neues zu werten
    if (geprueft.current) return;
    geprueft.current = true;
    if (p.beiErgebnis) p.beiErgebnis(ok && !hilfe);
    else if (!loesungOffen) erfasse(ok && !hilfe ? "richtig" : "versucht");
  }

  const loesungFrei = versucht || !hatAuto || hinweise >= p.hinweise.length || loesungOffen;

  function zeigeLoesung(alle = false) {
    if (!loesungOffen && !alleRichtig && !p.beiErgebnis) erfasse("angesehen");
    setSchritte(alle ? p.schritte.length : Math.min(schritte + 1, p.schritte.length));
  }

  function bewerteSelbst(w: "ja" | "teils" | "nein") {
    if (w === selbst) return;
    setSelbst(w);
    if (p.beiErgebnis) p.beiErgebnis(w === "ja");
    else erfasse(w === "ja" ? "richtig" : "versucht");
  }

  return (
    <article
      className={`aufgabe niveau-${p.niveau} ${p.art === "check" ? "aufgabe-check" : ""} ${zu ? "aufgabe-zu" : ""}`}
      id={p.id}
      aria-labelledby={`${p.id}-titel`}
    >
      <header className="aufgabe-kopf">
        <div className="aufgabe-kennung">
          {p.art === "check" ? <span className="aufgabe-nummer">Kurz gecheckt</span> : p.nummer ? <span className="aufgabe-nummer">{p.nummer}</span> : null}
          <h4 id={`${p.id}-titel`} className="aufgabe-titel">
            <button type="button" className="aufgabe-umschalter" aria-expanded={!zu} aria-controls={`${p.id}-inhalt`} onClick={() => setKlick(!zu)}>
              <svg className="aufgabe-pfeil" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {p.titel}
            </button>
          </h4>
        </div>
        <div className="aufgabe-meta">
          <span className={`niveau niveau-${p.niveau}`} title={NIVEAUS[p.niveau]}>
            <span className="niveau-punkte" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <i key={n} className={n <= p.niveau ? "an" : ""} />
              ))}
            </span>
            {NIVEAUS[p.niveau]}
          </span>
          {p.punkte ? <span className="aufgabe-punkte">{p.punkte} P.</span> : null}
          {status ? <span className={`status status-${status}`}>{STATUS_TEXT[status]}</span> : null}
        </div>
      </header>
      <div id={`${p.id}-inhalt`} hidden={zu}>
      {p.quelle ? <p className="aufgabe-quelle">Quelle: {p.quelle}</p> : null}

      <div className="rechenblatt">
        <div className="aufgabe-angabe">{p.angabe}</div>
        {p.plot}

        {p.teile.length > 0 ? (
          <div className="aufgabe-teile">
            {p.teile.map((t, i) => {
              const u = urteile[i];
              return (
                <div key={i} className="aufgabe-teil">
                  <Eingabe
                    teil={t}
                    wert={antworten[i]}
                    setze={(a) => {
                      geprueft.current = false;
                      setAntworten((alt) => alt.map((x, j) => (j === i ? a : x)));
                      setUrteile((alt) => alt.map((x, j) => (j === i ? null : x)));
                    }}
                    label={p.teilRender[i]?.label}
                    optionen={p.teilRender[i]?.optionen}
                    status={u && !u.leer ? (u.ok ? "ok" : "falsch") : null}
                    onEnter={pruefen}
                  />
                  {u ? (
                    <p className={`urteil ${u.ok ? "urteil-ok" : u.leer ? "urteil-leer" : "urteil-falsch"}`} role="status">
                      <span aria-hidden="true">{u.ok ? "✓" : u.leer ? "·" : "✗"}</span>{" "}
                      {u.ok ? (u.meldung ?? "Richtig.") : u.fehlerbild !== undefined ? "Typischer Fehler:" : (u.meldung ?? "Noch nicht richtig.")}
                    </p>
                  ) : null}
                  {u && u.fehlerbild !== undefined && p.teilRender[i]?.fehler?.[u.fehlerbild] ? (
                    <div className="fehlerbild">
                      <Md>{p.teilRender[i].fehler![u.fehlerbild]}</Md>
                    </div>
                  ) : null}
                  {u?.java ? <CodeErgebnisAnsicht e={u.java} /> : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="aufgabe-aktionen">
        {hatAuto ? (
          <button type="button" className="knopf knopf-primaer" onClick={pruefen} disabled={laeuft} aria-busy={laeuft}>
            {laeuft ? "Tests laufen …" : "Prüfen"}
          </button>
        ) : null}
        {p.hinweise.length > 0 ? (
          <button
            type="button"
            className="knopf"
            disabled={hinweise >= p.hinweise.length}
            onClick={() => setHinweise((h) => h + 1)}
          >
            {hinweise === 0 ? "Hinweis" : hinweise < p.hinweise.length ? "Weiterer Hinweis" : "Keine weiteren Hinweise"}
            <span className="knopf-zahl">
              {hinweise}/{p.hinweise.length}
            </span>
          </button>
        ) : null}
        {p.gefuehrt?.length && !fuehrung && schritte === 0 ? (
          <button type="button" className="knopf" onClick={() => setFuehrung(true)}>
            Geführt lösen
          </button>
        ) : null}
        {schritte < p.schritte.length ? (
          <button type="button" className="knopf knopf-leise" disabled={!loesungFrei} onClick={() => zeigeLoesung(false)}>
            {schritte === 0 ? "Lösungsweg Schritt für Schritt" : `Nächster Schritt (${schritte + 1}/${p.schritte.length})`}
          </button>
        ) : null}
        {schritte < p.schritte.length ? (
          <button type="button" className="knopf knopf-leise" disabled={!loesungFrei} onClick={() => zeigeLoesung(true)}>
            Ganze Lösung
          </button>
        ) : null}
        {!loesungFrei ? <span className="aktions-hinweis">Lösung erst nach einem eigenen Versuch</span> : null}
        {mitHilfe ? (
          <span className="aktions-hinweis" role="status">
            {mitHilfe} Die Aufgabe kommt morgen zum Wiederholen ohne Hilfe.
          </span>
        ) : null}
      </div>

      {fuehrung && p.gefuehrt ? (
        <section className="gefuehrt-rahmen" aria-label="Geführtes Lösen">
          <GefuehrtLoesen
            schritte={p.gefuehrt}
            beiFertig={() => {
              // mit Fuehrung geloest zaehlt als Versuch: beim Wiederholen ohne Hilfe nochmal
              if (p.beiErgebnis) p.beiErgebnis(false);
              else if (!alleRichtig) erfasse("versucht");
            }}
          />
        </section>
      ) : null}

      {hinweise > 0 ? (
        <ol className="hinweise" aria-label="Hinweise">
          {p.hinweise.slice(0, hinweise).map((h, i) => (
            <li key={i} className="hinweis">
              <Md>{h}</Md>
            </li>
          ))}
        </ol>
      ) : null}

      {schritte > 0 ? (
        <section className="loesung" aria-label="Lösungsweg">
          <ol className="loesung-schritte">
            {p.schritte.slice(0, schritte).map((s, i) => (
              <li key={i} className="loesung-schritt">
                <Md>{s}</Md>
              </li>
            ))}
          </ol>
          {schritte >= p.schritte.length ? (
            <div className="loesung-ergebnis">
              {p.teile.some((t) => t.typ !== "text") ? (
                <dl className="ergebnisse">
                  {p.teile.map((t, i) =>
                    t.typ === "text" ? null : (
                      <div key={i} className="ergebnis">
                        <dt>{p.teilRender[i]?.label ?? "Ergebnis"}</dt>
                        <dd>
                          <Md inline={!p.teilRender[i]?.musterBlock}>{p.teilRender[i]?.muster ?? ""}</Md>
                        </dd>
                      </div>
                    ),
                  )}
                </dl>
              ) : null}
              {p.teile.some((t) => t.typ === "text") ? (
                <div className="selbst">
                  {p.teile.map((t, i) =>
                    t.typ === "text" ? (
                      <div key={i} className="muster">
                        {p.teilRender[i]?.label ? <p className="muster-label">{p.teilRender[i]?.label}</p> : null}
                        <Md>{p.teilRender[i]?.muster ?? ""}</Md>
                      </div>
                    ) : null,
                  )}
                  <div className="selbst-frage" role="group" aria-label="Selbsteinschätzung">
                    <span>Hattest du das?</span>
                    {(["ja", "teils", "nein"] as const).map((w) => (
                      <button
                        key={w}
                        type="button"
                        aria-pressed={selbst === w}
                        className={`knopf knopf-klein ${selbst === w ? "knopf-gewaehlt" : ""}`}
                        onClick={() => bewerteSelbst(w)}
                      >
                        {w === "ja" ? "Ja" : w === "teils" ? "Teilweise" : "Nein"}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
      ) : null}
      </div>
    </article>
  );
}
