"use client";

import { useStand } from "@/lib/lernen/fortschritt";

/** Anteil geloester Aufgaben einer id-Liste, als schmaler Balken mit Zahl. */
export function AufgabenFortschritt({ kurs, ids, kompakt = false }: { kurs: string; ids: string[]; kompakt?: boolean }) {
  const stand = useStand(kurs);
  const geloest = ids.filter((id) => stand.aufgaben[id]?.s === "richtig").length;
  const versucht = ids.filter((id) => stand.aufgaben[id] && stand.aufgaben[id].s !== "richtig").length;
  const anteil = ids.length ? geloest / ids.length : 0;
  const anteilV = ids.length ? versucht / ids.length : 0;
  return (
    <div className={`fortschritt ${kompakt ? "kompakt" : ""}`}>
      <div
        className="fortschritt-balken"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={ids.length}
        aria-valuenow={geloest}
        aria-label={`${geloest} von ${ids.length} Aufgaben gelöst`}
      >
        <span className="fortschritt-geloest" style={{ width: `${anteil * 100}%` }} />
        <span className="fortschritt-versucht" style={{ width: `${anteilV * 100}%` }} />
      </div>
      <span className="fortschritt-zahl">
        {geloest}/{ids.length}
      </span>
    </div>
  );
}

/** Gesamtzahlen eines Kurses fuer die Kopfzeile der Uebersicht. */
export function KursZahlen({ kurs, ids, karten, mitPruefung }: { kurs: string; ids: string[]; karten: number; mitPruefung: boolean }) {
  const stand = useStand(kurs);
  const geloest = ids.filter((id) => stand.aufgaben[id]?.s === "richtig").length;
  const gewusst = Object.values(stand.karten).filter((k) => k.stufe > 0).length;
  const versuche = Object.values(stand.pruefungen).flat();
  const beste = versuche.length ? Math.max(...versuche.map((v) => v.punkte / v.max)) : null;
  return (
    <dl className="kurs-zahlen">
      <div>
        <dt>Aufgaben gelöst</dt>
        <dd>
          {geloest}
          <span> / {ids.length}</span>
        </dd>
      </div>
      <div>
        <dt>Karten gewusst</dt>
        <dd>
          {Math.min(gewusst, karten)}
          <span> / {karten}</span>
        </dd>
      </div>
      {mitPruefung ? (
        <div>
          <dt>Beste Prüfungssimulation</dt>
          <dd>{beste === null ? "–" : `${Math.round(beste * 100)} %`}</dd>
        </div>
      ) : null}
    </dl>
  );
}
