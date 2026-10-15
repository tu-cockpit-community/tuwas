"use client";

import { useState } from "react";
import { type WidgetProps } from "../vertrag";
import { Formel, Hinweis } from "./gemeinsam";
import { Bruch, gauss, linearTex, PARAMETER_NAMEN, variablenNamen, type Matrix } from "./bruch";
import { roemisch } from "./format";

/**
 * Gauss-Elimination Schritt fuer Schritt mit exakten Bruechen.
 * Props: matrix (erweiterte Koeffizientenmatrix als Liste von Zeilen; Zahlen oder Strings wie "1/2").
 * Die Matrix ist im Widget editierbar (1–6 Gleichungen, 1–6 Variablen).
 */

const STANDARD = [
  ["2", "1", "-1", "8"],
  ["-3", "-1", "2", "-11"],
  ["-2", "1", "2", "-3"],
];

function leseMatrix(roh: unknown): string[][] {
  if (!Array.isArray(roh) || !roh.length) return STANDARD;
  const zeilen = roh.filter(Array.isArray).map((z) => (z as unknown[]).map((v) => (typeof v === "number" || typeof v === "string" ? String(v) : "0")));
  const breite = Math.max(0, ...zeilen.map((z) => z.length));
  if (zeilen.length < 1 || zeilen.length > 6 || breite < 2 || breite > 7) return STANDARD;
  return zeilen.map((z) => Array.from({ length: breite }, (_, j) => z[j] ?? "0"));
}

function MatrixAnzeige({ m, markiert, variablen, operation }: { m: Matrix; markiert: number[]; variablen: string[]; operation?: string }) {
  return (
    <div className="tabelle-huelle mw-matrix-huelle">
      <table className="mw-matrix">
        <caption className="mw-sr">Erweiterte Koeffizientenmatrix</caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="mw-sr">Zeile</span>
            </th>
            {variablen.map((v) => (
              <th key={v} scope="col">
                {v}
              </th>
            ))}
            <th scope="col" className="mw-rs">
              rechte Seite
            </th>
            <th scope="col">
              <span className="mw-sr">Operation</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {m.map((z, i) => (
            <tr key={i} className={markiert.includes(i) ? "mw-markiert" : undefined}>
              <th scope="row">{roemisch(i)}</th>
              {z.map((v, j) => (
                <td key={j} className={j === z.length - 1 ? "mw-rs" : undefined}>
                  <Formel tex={v.tex()} />
                </td>
              ))}
              <td className="mw-op">{markiert.includes(i) && operation ? `← ${operation}` : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Gauss({ props }: WidgetProps) {
  const [eingabe, setEingabe] = useState<string[][]>(() => leseMatrix(props.matrix));
  const [schritt, setSchritt] = useState(0);

  const zeilen = eingabe.length;
  const spalten = eingabe[0].length;
  const variablen = variablenNamen(spalten - 1);
  const geparst = eingabe.map((z) => z.map((v) => Bruch.von(v)));
  const gueltig = geparst.every((z) => z.every((v) => v !== null));
  const start = gueltig ? (geparst as Matrix) : null;
  const ablauf = start ? gauss(start) : null;
  const anzahl = ablauf?.schritte.length ?? 0;
  const s = Math.min(schritt, anzahl);
  const aktuell = ablauf && s > 0 ? ablauf.schritte[s - 1] : null;
  const fertig = ablauf !== null && s === anzahl;

  const aendere = (neu: string[][]) => {
    setEingabe(neu);
    setSchritt(0);
  };
  const setzeFeld = (i: number, j: number, v: string) => aendere(eingabe.map((z, a) => (a === i ? z.map((w, b) => (b === j ? v : w)) : z)));

  let ergebnisTex = "";
  let ergebnisText = "";
  if (ablauf && fertig) {
    const e = ablauf.ergebnis;
    if (e.art === "eindeutig") {
      ergebnisText = "Eindeutige Lösung:";
      ergebnisTex = `${variablen.map((v, i) => `${v} = ${e.werte[i].tex()}`).join(",\\quad ")} \\qquad L = \\left\\{\\left(${e.werte.map((w) => w.tex()).join(" \\mid ")}\\right)\\right\\}`;
    } else if (e.art === "keine") {
      ergebnisText = `Keine Lösung: Zeile ${roemisch(e.zeile)} lautet 0 = ${(aktuell?.matrix ?? start!)[e.zeile][spalten - 1].text()} – ein Widerspruch.`;
      ergebnisTex = "L = \\{\\,\\}";
    } else {
      const par = e.frei.map((_, i) => PARAMETER_NAMEN[i] ?? `t_{${i + 1}}`);
      ergebnisText = `Unendlich viele Lösungen (${e.frei.length} freie Variable${e.frei.length > 1 ? "n" : ""}, Parameter ${par.join(", ")} ∈ ℝ):`;
      ergebnisTex = variablen.map((v, i) => `${v} = ${linearTex(e.darstellung[i].konstante, e.darstellung[i].koeff, par)}`).join(",\\quad ");
    }
  }

  return (
    <div>
      <div className="mw-matrix-eingabe" role="group" aria-label="Erweiterte Koeffizientenmatrix bearbeiten">
        {eingabe.map((z, i) => (
          <div key={i} className="mw-matrix-zeile">
            <span className="mw-zeilen-nr" aria-hidden="true">
              {roemisch(i)}
            </span>
            {z.map((v, j) => (
              <span key={j} className="mw-matrix-zelle">
                {j === spalten - 1 ? <span className="mw-trenner" aria-hidden="true" /> : null}
                <input
                  className="feld"
                  inputMode="decimal"
                  value={v}
                  aria-label={`Zeile ${roemisch(i)}, ${j === spalten - 1 ? "rechte Seite" : `Koeffizient von ${variablen[j]}`}`}
                  aria-invalid={geparst[i][j] === null}
                  onChange={(e) => setzeFeld(i, j, e.target.value)}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="mw-aktionen">
        <button type="button" className="knopf knopf-klein" disabled={zeilen >= 6} onClick={() => aendere([...eingabe, Array(spalten).fill("0")])}>
          + Gleichung
        </button>
        <button type="button" className="knopf knopf-klein" disabled={zeilen <= 1} onClick={() => aendere(eingabe.slice(0, -1))}>
          − Gleichung
        </button>
        <button type="button" className="knopf knopf-klein" disabled={spalten >= 7} onClick={() => aendere(eingabe.map((z) => [...z.slice(0, -1), "0", z[z.length - 1]]))}>
          + Variable
        </button>
        <button type="button" className="knopf knopf-klein" disabled={spalten <= 2} onClick={() => aendere(eingabe.map((z) => [...z.slice(0, -2), z[z.length - 1]]))}>
          − Variable
        </button>
      </div>
      {!gueltig ? (
        <Hinweis art="warnung">Bitte nur Zahlen eingeben, z. B. 3, −1,5 oder 2/3 (rot markierte Felder).</Hinweis>
      ) : (
        <>
          <MatrixAnzeige m={aktuell?.matrix ?? start!} markiert={aktuell?.zeilen ?? []} variablen={variablen} operation={aktuell?.operation} />
          <div aria-live="polite">
            {aktuell ? (
              <p className="mw-schritt">
                Schritt {s} von {anzahl} ({aktuell.phase === "vorwaerts" ? "Vorwärts zur Stufenform" : "Rückwärts zur Diagonalform"}): <strong>{aktuell.operation}</strong>. {aktuell.erklaerung}
              </p>
            ) : (
              <p className="mw-schritt">
                Ausgangssystem. {anzahl ? `${anzahl} Zeilenumformungen bis zum Ergebnis.` : "Keine Umformung nötig."}
              </p>
            )}
            {fertig ? (
              <div className={`mw-ergebnis${ablauf?.ergebnis.art === "keine" ? " mw-ergebnis-nein" : ""}`}>
                <p>{ergebnisText}</p>
                <Formel block tex={ergebnisTex} />
              </div>
            ) : null}
          </div>
          <div className="mw-aktionen">
            <button type="button" className="knopf knopf-klein" disabled={s <= 0} onClick={() => setSchritt(s - 1)}>
              Zurück
            </button>
            <button type="button" className="knopf knopf-klein knopf-primaer" disabled={fertig} onClick={() => setSchritt(s + 1)}>
              Nächster Schritt
            </button>
            <button type="button" className="knopf knopf-klein" disabled={s === 0} onClick={() => setSchritt(0)}>
              Neu
            </button>
          </div>
        </>
      )}
    </div>
  );
}
