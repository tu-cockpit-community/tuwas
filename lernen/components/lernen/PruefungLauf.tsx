"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Teil } from "@/lib/lernen/typen";
import { pruefeTeil, type Urteil } from "@/lib/lernen/rechnen";
import { pruefeTeilAsync } from "@/lib/lernen/codePruefen";
import { CodeErgebnisAnsicht } from "./CodeErgebnis";
import { speicherePruefung, useStand } from "@/lib/lernen/fortschritt";
import { Eingabe, leereAntwort, type Antwort } from "./Eingabe";
import type { TeilRender } from "./Aufgabe";
import { Md } from "./Md";

/**
 * Pruefungssimulation: alle Aufgaben auf einmal, Zeitlimit, keine Hinweise. Nach der Abgabe werden
 * automatisch pruefbare Teile bewertet; Begruendungen bewertet man selbst (0, halb, voll).
 * Punkte einer Aufgabe verteilen sich gleichmaessig auf ihre Teile.
 */

export interface PruefAufgabe {
  id: string;
  titel: string;
  punkte: number;
  angabe: React.ReactNode;
  plot?: React.ReactNode;
  teile: Teil[];
  teilRender: TeilRender[];
  /** Loesungsschritte als Markdown (erst nach der Abgabe gerendert) */
  schritte: string[];
}

type Phase = "start" | "laeuft" | "fertig";

/** Laufende Pruefung ueberlebt Reload und Tab-Wechsel: Startzeit und Eingaben im localStorage. */
interface Gesichert {
  start: number;
  antworten: Antwort[][];
}
const laufSchluessel = (kurs: string, id: string) => `pruefung-lauf:${kurs}:${id}`;
const nichts = () => () => {};

/** Gesicherte Antworten nur uebernehmen, wenn ihre Form noch zur Pruefung passt (sonst z. B. undefined in einem Vektorfeld). */
function passtZu(antworten: unknown, aufgaben: PruefAufgabe[]): antworten is Antwort[][] {
  return (
    Array.isArray(antworten) &&
    antworten.length === aufgaben.length &&
    antworten.every((r, i) => Array.isArray(r) && r.length === aufgaben[i].teile.length)
  );
}

/** Punkte mit hoechstens einer Nachkommastelle und Dezimalkomma */
const pz = (v: number) => (Math.round(v * 10) / 10).toLocaleString("de-AT");

function uhr(sek: number): string {
  const s = Math.max(0, Math.floor(sek));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export function PruefungLauf({
  kurs,
  id,
  titel,
  dauerMinuten,
  aufgaben,
  hinweis,
}: {
  kurs: string;
  id: string;
  titel: string;
  dauerMinuten: number;
  aufgaben: PruefAufgabe[];
  hinweis?: React.ReactNode;
}) {
  const stand = useStand(kurs);
  const bisher = stand.pruefungen[id] ?? [];
  const [phase, setPhase] = useState<Phase>("start");
  const [start, setStart] = useState(0);
  const [jetzt, setJetzt] = useState(0);
  const [antworten, setAntworten] = useState<Antwort[][]>(() => aufgaben.map((a) => a.teile.map(leereAntwort)));
  const [urteile, setUrteile] = useState<(Urteil | null)[][]>([]);
  const [selbst, setSelbst] = useState<Record<string, number>>({});
  const [gespeichert, setGespeichert] = useState(false);
  // code-Teile, deren Testergebnis noch aussteht: bis dahin zaehlen sie 0 Punkte und das Ergebnis darf nicht gespeichert werden
  const [testsOffen, setTestsOffen] = useState(0);
  const abgegeben = useRef(false);

  const gesichertRoh = useSyncExternalStore(
    nichts,
    () => {
      try {
        return localStorage.getItem(laufSchluessel(kurs, id));
      } catch {
        return null;
      }
    },
    () => null,
  );
  const gesichert: Gesichert | null = (() => {
    try {
      return gesichertRoh ? (JSON.parse(gesichertRoh) as Gesichert) : null;
    } catch {
      return null;
    }
  })();
  const gesichertPasst = gesichert !== null && passtZu(gesichert.antworten, aufgaben);

  function sichere(st: number, a: Antwort[][]) {
    try {
      localStorage.setItem(laufSchluessel(kurs, id), JSON.stringify({ start: st, antworten: a } satisfies Gesichert));
    } catch {
      /* ohne Speicher laeuft die Pruefung trotzdem, nur nicht reload-fest */
    }
  }
  function vergiss() {
    try {
      localStorage.removeItem(laufSchluessel(kurs, id));
    } catch {
      /* nichts zu tun */
    }
  }

  // Warnen, bevor eine laufende Pruefung durch Schliessen/Neuladen verloren scheint
  useEffect(() => {
    if (phase !== "laeuft") return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [phase]);

  const gesamt = aufgaben.reduce((s, a) => s + a.punkte, 0);
  const rest = dauerMinuten * 60 - (jetzt - start) / 1000;

  useEffect(() => {
    if (phase !== "laeuft") return;
    const t = setInterval(() => setJetzt(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  function abgeben() {
    if (abgegeben.current) return;
    abgegeben.current = true;
    const sofort = aufgaben.map((a, i) =>
      a.teile.map((t, j) => (t.typ === "text" ? null : t.typ === "code" ? { ok: false, meldung: "Tests laufen …" } : pruefeTeil(t, antworten[i][j] as string | string[]))),
    );
    setUrteile(sofort);
    // code-Teile nachreichen, sobald der Java-Runner geantwortet hat
    aufgaben.forEach((a, i) =>
      a.teile.forEach((t, j) => {
        if (t.typ !== "code") return;
        setTestsOffen((n) => n + 1);
        pruefeTeilAsync(t, antworten[i][j] as string, { kurs, aufgabe: a.id, teil: j })
          .then((u) => setUrteile((alt) => alt.map((r, x) => (x === i ? r.map((v, y) => (y === j ? u : v)) : r))))
          .finally(() => setTestsOffen((n) => n - 1));
      }),
    );
    setPhase("fertig");
    setJetzt(Date.now());
    vergiss();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Zeit abgelaufen: automatisch abgeben (ausserhalb des Render-Zyklus)
  useEffect(() => {
    if (phase === "laeuft" && start && jetzt && rest <= 0) {
      const t = setTimeout(abgeben, 0);
      return () => clearTimeout(t);
    }
  });

  const teilPunkte = (i: number) => aufgaben[i].punkte / Math.max(1, aufgaben[i].teile.length);
  function punkteAufgabe(i: number): number {
    return aufgaben[i].teile.reduce((s, t, j) => {
      if (t.typ === "text") return s + teilPunkte(i) * (selbst[`${i}-${j}`] ?? 0);
      const u = urteile[i]?.[j];
      // Teilwertung (z. B. R/F-Aussagen, Lueckentext, Tests) ueber `anteil`; sonst alles oder nichts
      return s + (u?.ok ? teilPunkte(i) : teilPunkte(i) * (u?.anteil ?? 0));
    }, 0);
  }
  const erreicht = phase === "fertig" ? aufgaben.reduce((s, _, i) => s + punkteAufgabe(i), 0) : 0;
  const offeneSelbst = aufgaben.reduce(
    (n, a, i) => n + a.teile.filter((t, j) => t.typ === "text" && selbst[`${i}-${j}`] === undefined).length,
    0,
  );

  function speichern() {
    speicherePruefung(kurs, id, { punkte: Math.round(erreicht * 10) / 10, max: gesamt, dauer: Math.round((jetzt - start) / 1000) });
    setGespeichert(true);
  }

  if (phase === "start") {
    return (
      <div className="pruefung-start">
        <p className="pruefung-eckdaten">
          {aufgaben.length} Aufgaben · {gesamt} Punkte · {dauerMinuten} Minuten
        </p>
        {hinweis}
        <ul className="pruefung-regeln">
          <li>Arbeite wie in der echten Prüfung: Papier, Stift, Taschenrechner ohne Grafik, Formelsammlung.</li>
          <li>Trag nur die Endergebnisse ein. Hinweise und Lösungen siehst du nach der Abgabe.</li>
          <li>Nach Ablauf der Zeit wird automatisch abgegeben.</li>
        </ul>
        {bisher.length > 0 ? (
          <p className="pruefung-bisher">
            Bisherige Versuche:{" "}
            {bisher.map((v, i) => (
              <span key={i}>
                {i > 0 ? ", " : ""}
                {Math.round((v.punkte / v.max) * 100)} % ({new Date(v.t).toLocaleDateString("de-AT")})
              </span>
            ))}
          </p>
        ) : null}
        {gesichert ? (
          <button
            type="button"
            className="knopf knopf-primaer knopf-gross"
            onClick={() => {
              const t = Date.now();
              setStart(gesichert.start);
              setJetzt(t);
              if (gesichertPasst) setAntworten(gesichert.antworten);
              setPhase("laeuft");
              // war die Zeit inzwischen abgelaufen, gibt der Timer-Effekt sofort ab
            }}
          >
            Begonnene Prüfung fortsetzen (gestartet um{" "}
            {new Date(gesichert.start).toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" })})
          </button>
        ) : null}
        <button
          type="button"
          className={`knopf knopf-gross ${gesichert ? "" : "knopf-primaer"}`}
          onClick={() => {
            const t = Date.now();
            setStart(t);
            setJetzt(t);
            setPhase("laeuft");
            const leer = aufgaben.map((a) => a.teile.map(leereAntwort));
            setAntworten(leer);
            sichere(t, leer);
          }}
        >
          {gesichert ? "Neu starten" : "Prüfung starten"}
        </button>
      </div>
    );
  }

  return (
    <div className="pruefung-lauf">
      <div className={`pruefung-leiste ${phase === "laeuft" && rest < 600 ? "knapp" : ""}`} role="status" aria-live="off">
        <span className="pruefung-leiste-titel">{titel}</span>
        {phase === "laeuft" ? (
          <>
            <span className="pruefung-uhr" aria-label={`Verbleibende Zeit ${uhr(rest)}`}>
              {uhr(rest)}
            </span>
            <button
              type="button"
              className="knopf knopf-primaer"
              onClick={() => {
                if (window.confirm("Prüfung jetzt abgeben? Danach kannst du nichts mehr ändern.")) abgeben();
              }}
            >
              Abgeben
            </button>
          </>
        ) : (
          <span className="pruefung-ergebnis-kurz">
            {pz(erreicht)} von {gesamt} Punkten ({Math.round((erreicht / gesamt) * 100)} %)
          </span>
        )}
      </div>

      {phase === "fertig" ? (
        <section className="pruefung-auswertung" aria-label="Auswertung">
          <h2>Auswertung</h2>
          <p>
            Bearbeitungszeit {uhr((jetzt - start) / 1000)}. Automatisch geprüfte Teile sind bewertet.
            {offeneSelbst > 0 ? ` Bewerte noch ${offeneSelbst} Begründungsteil${offeneSelbst === 1 ? "" : "e"} selbst mit der Musterlösung.` : ""}
          </p>
          <table className="pruefung-tabelle">
            <thead>
              <tr>
                <th scope="col">Aufgabe</th>
                <th scope="col">Punkte</th>
              </tr>
            </thead>
            <tbody>
              {aufgaben.map((a, i) => (
                <tr key={a.id}>
                  <td>
                    <a href={`#${a.id}`}>
                      {i + 1}. {a.titel}
                    </a>
                  </td>
                  <td>
                    {pz(punkteAufgabe(i))} / {a.punkte}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="knopf" disabled={gespeichert || testsOffen > 0} aria-busy={testsOffen > 0} onClick={speichern}>
            {gespeichert ? "Ergebnis gespeichert" : testsOffen > 0 ? "Tests laufen …" : "Ergebnis im Fortschritt speichern"}
          </button>
        </section>
      ) : null}

      {aufgaben.map((a, i) => (
        <article key={a.id} id={a.id} className="aufgabe pruefung-aufgabe" aria-labelledby={`${a.id}-t`}>
          <header className="aufgabe-kopf">
            <div className="aufgabe-kennung">
              <span className="aufgabe-nummer">Aufgabe {i + 1}</span>
              <h3 id={`${a.id}-t`} className="aufgabe-titel">
                {a.titel}
              </h3>
            </div>
            <span className="aufgabe-punkte">
              {phase === "fertig" ? `${pz(punkteAufgabe(i))} / ` : ""}
              {a.punkte} P.
            </span>
          </header>
          <div className="rechenblatt">
            <div className="aufgabe-angabe">{a.angabe}</div>
            {a.plot}
            <div className="aufgabe-teile">
              {a.teile.map((t, j) => {
                const u = urteile[i]?.[j];
                return (
                  <div key={j} className="aufgabe-teil">
                    <Eingabe
                      teil={t}
                      wert={antworten[i][j]}
                      gesperrt={phase === "fertig"}
                      setze={(w) =>
                        setAntworten((alt) => {
                          const neu = alt.map((r, x) => (x === i ? r.map((v, y) => (y === j ? w : v)) : r));
                          sichere(start, neu);
                          return neu;
                        })
                      }
                      label={a.teilRender[j]?.label}
                      optionen={a.teilRender[j]?.optionen}
                      status={u ? (u.ok ? "ok" : "falsch") : null}
                    />
                    {phase === "fertig" ? (
                      t.typ === "text" ? (
                        <div className="muster">
                          <Md>{a.teilRender[j]?.muster ?? ""}</Md>
                          <div className="selbst-frage" role="group" aria-label="Selbstbewertung">
                            <span>Deine Punkte:</span>
                            {[0, 0.5, 1].map((w) => (
                              <button
                                key={w}
                                type="button"
                                aria-pressed={selbst[`${i}-${j}`] === w}
                                className={`knopf knopf-klein ${selbst[`${i}-${j}`] === w ? "knopf-gewaehlt" : ""}`}
                                onClick={() => setSelbst((s) => ({ ...s, [`${i}-${j}`]: w }))}
                              >
                                {w === 0 ? "keine" : w === 0.5 ? "halbe" : "volle"}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className={`urteil ${u?.ok ? "urteil-ok" : "urteil-falsch"}`}>
                            <span aria-hidden="true">{u?.ok ? "✓" : "✗"}</span> {u?.ok ? "Richtig." : u?.meldung && t.typ === "code" ? u.meldung : "Richtig wäre:"}{" "}
                            {u?.ok || t.typ === "code" ? null : <Md inline={!a.teilRender[j]?.musterBlock}>{a.teilRender[j]?.muster ?? ""}</Md>}
                          </div>
                          {u?.java ? <CodeErgebnisAnsicht e={u.java} /> : null}
                        </>
                      )
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          {phase === "fertig" ? (
            <details className="pruefung-loesung">
              <summary>Lösungsweg anzeigen</summary>
              <ol className="loesung-schritte">
                {a.schritte.map((s, k) => (
                  <li key={k} className="loesung-schritt">
                    <Md>{s}</Md>
                  </li>
                ))}
              </ol>
            </details>
          ) : null}
        </article>
      ))}

      {phase === "laeuft" ? (
        <div className="pruefung-ende">
          <button
            type="button"
            className="knopf knopf-primaer knopf-gross"
            onClick={() => {
              if (window.confirm("Prüfung jetzt abgeben? Danach kannst du nichts mehr ändern.")) abgeben();
            }}
          >
            Prüfung abgeben
          </button>
        </div>
      ) : null}
    </div>
  );
}
