"use client";

import { useState } from "react";
import { Koordinaten, FARBEN } from "../../Koordinaten";
import { text, type WidgetProps } from "../vertrag";
import { alsZahl, begrenze, Formel, funktion, Hinweis, Kennwerte, Legende, Regler, zahlTerm } from "./gemeinsam";
import { texZahl, zahlSig } from "./format";
import { kleinstesN } from "./rechnen-analysis";
import { termTex } from "./term";

/**
 * Konvergenz einer Folge mit ε-Schlauch. Props: a (Term in n), grenzwert (optional), n_max, epsilon.
 * Ohne Grenzwert laesst sich ein Kandidat c verschieben: bei divergenten Folgen findet sich fuer
 * kleine ε kein N.
 */

export function Folge({ props }: WidgetProps) {
  const aText = text(props, "a", "(2n-3)/(2+3n)");
  const fn = funktion(aText, "n") ?? (() => NaN);
  const nMax = Math.round(begrenze(zahlTerm(props, "n_max", 30), 5, 500));
  const grenzwert = alsZahl(props.grenzwert);
  const werte = Array.from({ length: nMax }, (_, i) => fn(i + 1));
  const endlich = werte.filter(Number.isFinite);
  const lo = endlich.length ? Math.min(...endlich, grenzwert ?? Infinity) : -1;
  const hi = endlich.length ? Math.max(...endlich, grenzwert ?? -Infinity) : 1;
  const spanne = hi - lo || Math.max(1, Math.abs(hi));
  const y: [number, number] = [lo - 0.15 * spanne, hi + 0.15 * spanne];
  const epsMax = spanne;
  const epsMin = spanne / 2000;

  const [logEps, setLogEps] = useState(() => Math.log10(begrenze(zahlTerm(props, "epsilon", spanne / 10), epsMin, epsMax)));
  // Start-Kandidat: Mittel des letzten Viertels (bei Konvergenz nahe am Grenzwert, bei (−1)ⁿ in der Mitte)
  const [kandidat, setKandidat] = useState(() => {
    const rest = endlich.slice(Math.floor((endlich.length * 3) / 4));
    return rest.length ? Number((rest.reduce((s, v) => s + v, 0) / rest.length).toPrecision(3)) : 0;
  });
  const eps = 10 ** logEps;
  const mitte = grenzwert ?? kandidat;
  const N = kleinstesN(werte, mitte, eps);
  const imBand = (v: number) => Number.isFinite(v) && Math.abs(v - mitte) < eps;
  const r = nMax > 120 ? 2.5 : nMax > 60 ? 3.2 : 4;
  const formel = termTex(aText);

  const beschreibung = `Punkte (n | aₙ) für n = 1 bis ${nMax}, aₙ = ${aText}. ε-Schlauch um ${zahlSig(mitte)} mit ε = ${zahlSig(eps, 3)}. ${
    N !== null ? `Ab N = ${N} liegen alle berechneten Glieder im Schlauch.` : "Kein N gefunden."
  }`;

  return (
    <div>
      {formel ? (
        <div className="widget-info">
          <Formel block tex={`a_n = ${formel}${grenzwert !== null ? `, \\qquad \\lim_{n\\to\\infty} a_n = ${texZahl(grenzwert, 6)}` : ""}`} />
        </div>
      ) : null}
      <Koordinaten x={[0, nMax + 1]} y={y} achsenX="n" achsenY="aₙ" beschreibung={beschreibung}>
        {(k) => (
          <>
            <rect
              x={k.px(0)}
              width={k.px(nMax + 1) - k.px(0)}
              y={k.py(mitte + eps)}
              height={Math.max(0, k.py(mitte - eps) - k.py(mitte + eps))}
              fill={FARBEN[2]}
              fillOpacity={0.12}
            />
            <line x1={k.px(0)} x2={k.px(nMax + 1)} y1={k.py(mitte)} y2={k.py(mitte)} stroke={FARBEN[2]} strokeWidth={1.5} strokeDasharray="6 4" />
            {[mitte - eps, mitte + eps].map((g, i) => (
              <line key={i} x1={k.px(0)} x2={k.px(nMax + 1)} y1={k.py(g)} y2={k.py(g)} stroke={FARBEN[2]} strokeWidth={1} />
            ))}
            {N !== null ? (
              <g>
                <line x1={k.px(N - 0.5)} x2={k.px(N - 0.5)} y1={k.py(y[0])} y2={k.py(y[1])} stroke={FARBEN[3]} strokeWidth={1.6} strokeDasharray="4 4" />
                <text x={k.px(N - 0.5) + 6} y={k.py(y[1]) + 16} className="plot-label">
                  N = {N}
                </text>
              </g>
            ) : null}
            {werte.map((v, i) =>
              Number.isFinite(v) ? (
                <circle
                  key={i}
                  cx={k.px(i + 1)}
                  cy={k.py(v)}
                  r={r}
                  fill={N !== null && i + 1 >= N ? FARBEN[2] : imBand(v) ? FARBEN[0] : "var(--color-surface-raised)"}
                  stroke={N !== null && i + 1 >= N ? FARBEN[2] : imBand(v) ? FARBEN[0] : FARBEN[1]}
                  strokeWidth={1.8}
                />
              ) : null,
            )}
          </>
        )}
      </Koordinaten>
      <Legende
        eintraege={[
          { farbe: FARBEN[2], label: "ab N: alle im Schlauch (gefüllt)" },
          { farbe: FARBEN[0], label: "im Schlauch, aber vor N" },
          { farbe: FARBEN[1], label: "außerhalb (offen)" },
        ]}
      />
      <div className="regler-gruppe">
        <Regler
          label="ε"
          min={Math.log10(epsMin)}
          max={Math.log10(epsMax)}
          step={0.01}
          wert={logEps}
          anzeige={zahlSig(eps, 3)}
          beschreibung={`ε = ${zahlSig(eps, 3)}`}
          setze={setLogEps}
        />
        {grenzwert === null ? (
          <Regler label="Kandidat c" min={y[0]} max={y[1]} step={spanne / 400} wert={kandidat} anzeige={zahlSig(kandidat, 4)} setze={setKandidat} />
        ) : null}
      </div>
      <Kennwerte
        werte={[
          { name: grenzwert !== null ? "Grenzwert a =" : "Kandidat c =", wert: zahlSig(mitte, 6) },
          { name: "ε =", wert: zahlSig(eps, 3) },
          { name: "kleinstes N =", wert: N !== null ? String(N) : `keines bis n = ${nMax}` },
          ...(N !== null && N > 1 ? [{ name: `|a${tief(N - 1)} − ${grenzwert !== null ? "a" : "c"}| =`, wert: zahlSig(Math.abs(werte[N - 2] - mitte), 4) }] : []),
        ]}
      />
      <Hinweis>
        {N !== null
          ? `Für alle n ≥ ${N} (geprüft bis n = ${nMax}) gilt |aₙ − ${grenzwert !== null ? "a" : "c"}| < ε. Kleineres ε → größeres N.${
              N > 0.8 * nMax ? " Achtung: N liegt am Ende des berechneten Bereichs – hier sind nur wenige Glieder geprüft, die Aussage ist unsicher." : ""
            }`
          : `Das Glied a${tief(nMax)} liegt nicht im Schlauch – für dieses ε gibt es (bis n = ${nMax}) kein N.${grenzwert === null ? " Gibt es für jeden Kandidaten ein ε ohne N, divergiert die Folge." : ""}`}
      </Hinweis>
    </div>
  );
}

function tief(n: number): string {
  return String(n).replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]);
}
