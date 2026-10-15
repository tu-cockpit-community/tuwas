"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { bewerteKarte, faellig, useStand, useStandGeladen } from "@/lib/lernen/fortschritt";
import type { Aufgabe } from "@/lib/lernen/typen";
import { AufgabeClient } from "./AufgabeClient";
import { Md } from "./Md";

/**
 * Taegliche Wiederholung (verteiltes, gemischtes Abrufen): faellige Aufgaben und Karten aus allen
 * Kapiteln, abwechselnd und eine nach der anderen. Was richtig ist, kommt in wachsenden Abstaenden
 * wieder; was falsch ist, morgen.
 */

interface IndexKarte {
  id: string;
  kapitel: string;
  frage: string;
  antwort: string;
  kernpunkte?: string[];
}
interface AufgabeMitOrt {
  aufgabe: Aufgabe;
  kapitel: string;
  kapitelTitel: string;
  abschnitt: string;
  abschnittTitel: string;
}
type Element = { art: "aufgabe"; daten: AufgabeMitOrt } | { art: "karte"; daten: IndexKarte };

const MAX_AUFGABEN = 12;
const MAX_KARTEN = 15;

/** Wartet, bis der Lernstand mit dem Server abgeglichen ist: sonst waere in einem frisch geleerten Browser "nichts faellig". */
export function Wiederholen({ kurs }: { kurs: string }) {
  const geladen = useStandGeladen(kurs);
  if (!geladen) return <p className="leer">Wiederholung wird zusammengestellt …</p>;
  return <Sitzung kurs={kurs} />;
}

function Sitzung({ kurs }: { kurs: string }) {
  const stand = useStand(kurs);
  // Faelligkeit und Auswahl einmal beim Start der Sitzung festhalten, damit sie waehrend des Uebens nicht springen
  const [start] = useState(() => Date.now());
  const [auswahl] = useState(() => {
    const due = faellig(stand, start);
    return { aufgaben: due.aufgaben.slice(0, MAX_AUFGABEN), karten: due.karten.slice(0, MAX_KARTEN) };
  });
  const [elemente, setElemente] = useState<Element[] | null>(null);
  const [pos, setPos] = useState(0);
  const [erledigt, setErledigt] = useState(false);
  const [offen, setOffen] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);

  useEffect(() => {
    let aktiv = true;
    const { aufgaben: aIds, karten: kIds } = auswahl;
    // Fehlerantworten (404/500) nicht als Daten lesen: sonst hiesse es "Heute ist nichts fällig"
    const json = <T,>(r: Response) => (r.ok ? (r.json() as Promise<T>) : Promise.reject(new Error(`HTTP ${r.status}`)));
    Promise.all([
      aIds.length ? fetch(`/api/lernen/${kurs}?ids=${aIds.join(",")}`).then((r) => json<AufgabeMitOrt[]>(r)) : Promise.resolve([]),
      kIds.length ? fetch(`/api/lernen/${kurs}`).then((r) => json<{ karten: IndexKarte[] }>(r)) : Promise.resolve({ karten: [] }),
    ])
      .then(([aufgaben, index]) => {
        if (!aktiv) return;
        const karten = index.karten.filter((k) => kIds.includes(k.id));
        // abwechselnd mischen: Aufgabe, Karte, Aufgabe, ...
        const liste: Element[] = [];
        for (let i = 0; i < Math.max(aufgaben.length, karten.length); i++) {
          if (aufgaben[i]) liste.push({ art: "aufgabe", daten: aufgaben[i] });
          if (karten[i]) liste.push({ art: "karte", daten: karten[i] });
        }
        setElemente(liste);
      })
      .catch(() => aktiv && setFehler("Die Wiederholung konnte nicht geladen werden. Läuft der Server?"));
    return () => {
      aktiv = false;
    };
  }, [kurs, auswahl]);

  if (fehler) return <p className="leer">{fehler}</p>;
  if (elemente === null) return <p className="leer">Wiederholung wird zusammengestellt …</p>;

  if (elemente.length === 0 || pos >= elemente.length) {
    const naechste = Object.values({ ...stand.wiederholen, ...stand.karten })
      .map((x) => x.faellig)
      .filter((t) => t > start)
      .sort((a, b) => a - b)[0];
    return (
      <div className="sitzung-ende" role="status">
        <h2>{elemente.length === 0 ? "Heute ist nichts fällig" : "Wiederholung geschafft"}</h2>
        <p>
          {elemente.length === 0
            ? "Wiederholt wird, was du schon geübt hast. Lerne neue Lektionen oder trainiere gemischt."
            : `Du hast ${elemente.length} Elemente wiederholt.`}
          {naechste ? ` Das Nächste wird am ${new Date(naechste).toLocaleDateString("de-AT")} fällig.` : ""}
        </p>
        <div className="knopf-reihe">
          <Link href={`/lernen/${kurs}`} className="knopf knopf-primaer">
            Zur Übersicht
          </Link>
          <Link href={`/lernen/${kurs}/training`} className="knopf">
            Gemischt trainieren
          </Link>
        </div>
      </div>
    );
  }

  const el = elemente[pos];
  const weiter = () => {
    setPos((p) => p + 1);
    setErledigt(false);
    setOffen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="sitzung-kopf">
        <div className="fortschritt">
          <div
            className="fortschritt-balken"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={elemente.length}
            aria-valuenow={pos}
            aria-label={`${pos} von ${elemente.length} wiederholt`}
          >
            <span className="fortschritt-geloest" style={{ width: `${(pos / elemente.length) * 100}%` }} />
          </div>
          <span className="fortschritt-zahl">
            {pos + 1} / {elemente.length}
          </span>
        </div>
      </div>

      {el.art === "aufgabe" ? (
        <>
          <AufgabeClient key={el.daten.aufgabe.id} kurs={kurs} aufgabe={el.daten.aufgabe} />
          <p className="sitzung-ort">
            Aus{" "}
            <Link href={`/lernen/${kurs}/${el.daten.kapitel}/${el.daten.abschnitt}`}>
              {el.daten.kapitelTitel}: {el.daten.abschnittTitel}
            </Link>
          </p>
        </>
      ) : (
        <div className="karten">
          <div className="karte">
            <div className="karte-frage">
              <Md>{el.daten.frage}</Md>
            </div>
            <p className="karten-anleitung">Antworte laut in ganzen Sätzen. Dann aufdecken und ehrlich bewerten.</p>
            {offen ? (
              <>
                <div className="karte-antwort">
                  <Md>{el.daten.antwort}</Md>
                </div>
                {el.daten.kernpunkte?.length ? (
                  <fieldset className="karte-kernpunkte">
                    <p>Welche Kernpunkte hast du selbst genannt?</p>
                    {el.daten.kernpunkte.map((kp, i) => (
                      <label key={i}>
                        <input type="checkbox" />
                        <span>
                          <Md inline>{kp}</Md>
                        </span>
                      </label>
                    ))}
                  </fieldset>
                ) : null}
                {!erledigt ? (
                  <div className="karte-aktionen">
                    <button
                      type="button"
                      className="knopf knopf-primaer"
                      onClick={() => {
                        bewerteKarte(kurs, el.daten.id, true);
                        setErledigt(true);
                      }}
                    >
                      Gewusst
                    </button>
                    <button
                      type="button"
                      className="knopf"
                      onClick={() => {
                        bewerteKarte(kurs, el.daten.id, false);
                        setErledigt(true);
                      }}
                    >
                      Nicht gewusst
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <button type="button" className="knopf" onClick={() => setOffen(true)}>
                Antwort aufdecken
              </button>
            )}
          </div>
        </div>
      )}

      <div className="knopf-reihe" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="knopf knopf-primaer"
          onClick={weiter}
          disabled={el.art === "karte" && !erledigt}
        >
          {pos === elemente.length - 1 ? "Fertig" : "Weiter"}
        </button>
        {el.art === "aufgabe" ? <span className="aktions-hinweis">Erst lösen, dann weiter. Dein Ergebnis plant die nächste Wiederholung.</span> : null}
      </div>
    </div>
  );
}
