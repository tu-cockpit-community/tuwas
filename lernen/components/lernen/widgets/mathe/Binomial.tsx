"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { begrenze, bool, Formel, Hinweis, Kennwerte, Legende, paar, Regler, zahlTerm } from "./gemeinsam";
import { prozent, texZahl, zahlFest } from "./format";
import { binomBereich, binomNormalApprox, binomVerteilung, normPdf } from "./rechnen-stochastik";

/**
 * Binomialverteilung als Balkendiagramm. Props: n (1…100), p, bereich [a, b] (hervorgehoben),
 * normal (Normalapproximation ueberlagern).
 */

export function Binomial({ props }: WidgetProps) {
  const [n, setN] = useState(() => Math.round(begrenze(zahlTerm(props, "n", 10), 1, 100)));
  const [p, setP] = useState(() => begrenze(zahlTerm(props, "p", 0.5), 0, 1));
  const [ab, setAb] = useState<[number, number]>(() => {
    const nn = Math.round(begrenze(zahlTerm(props, "n", 10), 1, 100));
    const m = Math.round(nn * begrenze(zahlTerm(props, "p", 0.5), 0, 1));
    const [a, b] = paar(props, "bereich", [Math.max(0, m - 2), Math.min(nn, m + 2)]);
    return [Math.round(Math.min(a, b)), Math.round(Math.max(a, b))];
  });
  const [normal, setNormal] = useState(() => bool(props, "normal", false));

  const a = begrenze(Math.min(ab[0], ab[1]), 0, n);
  const b = begrenze(Math.max(ab[0], ab[1]), 0, n);
  const vert = binomVerteilung(n, p);
  const mu = n * p;
  const varianz = n * p * (1 - p);
  const sigma = Math.sqrt(varianz);
  const P = binomBereich(n, p, a, b);
  const approx = binomNormalApprox(n, p, a, b);
  // y-Achse in 0,05er-Stufen, damit sie beim Ziehen nicht staendig springt
  const ymax = Math.max(0.1, Math.ceil((Math.max(...vert) * 1.12) / 0.05) * 0.05);
  const xmax = Math.max(n + 0.5, 7.5);

  return (
    <div>
      <Koordinaten
        x={[-0.5, xmax]}
        y={[0, ymax]}
        achsenX="k"
        achsenY="P(X = k)"
        beschreibung={`Binomialverteilung mit n = ${n}, p = ${zahlFest(p, 2)}. Hervorgehoben k von ${a} bis ${b}: P = ${zahlFest(P, 4)}.`}
      >
        {(k) => {
          const w = Math.max(1, (k.px(1) - k.px(0)) * 0.78);
          return (
            <>
              {vert.map((v, i) => {
                const drin = i >= a && i <= b;
                return (
                  <rect
                    key={i}
                    x={k.px(i) - w / 2}
                    width={w}
                    y={k.py(v)}
                    height={Math.max(0, k.py(0) - k.py(v))}
                    fill={FARBEN[0]}
                    fillOpacity={drin ? 0.85 : 0.22}
                    stroke={drin ? FARBEN[0] : "none"}
                  />
                );
              })}
              {normal && sigma > 0 ? <path d={graphPfad((t) => normPdf(t, mu, sigma), k)} fill="none" stroke={FARBEN[1]} strokeWidth={2.2} /> : null}
              <line x1={k.px(mu)} x2={k.px(mu)} y1={k.py(0)} y2={k.py(ymax)} stroke={FARBEN[3]} strokeWidth={1.5} strokeDasharray="5 4" />
              <text x={k.px(mu) + 5} y={k.py(ymax) + 14} className="plot-label">
                μ
              </text>
            </>
          );
        }}
      </Koordinaten>
      <Legende
        eintraege={[
          { farbe: FARBEN[0], label: `P(X = k), kräftig: ${a} ≤ k ≤ ${b}` },
          { farbe: FARBEN[3], label: "Erwartungswert μ = np", gestrichelt: true },
          ...(normal ? [{ farbe: FARBEN[1], label: "Dichte der Normalverteilung N(μ, σ²)" }] : []),
        ]}
      />
      <div className="regler-gruppe">
        <Regler label="n" min={1} max={100} step={1} wert={n} setze={(v) => setN(Math.round(v))} />
        <Regler label="p" min={0} max={1} step={0.01} wert={p} anzeige={zahlFest(p, 2)} setze={setP} />
        <Regler label="a" min={0} max={n} step={1} wert={a} setze={(v) => setAb([Math.round(v), Math.max(Math.round(v), b)])} />
        <Regler label="b" min={0} max={n} step={1} wert={b} setze={(v) => setAb([Math.min(a, Math.round(v)), Math.round(v)])} />
      </div>
      <label className="mw-hinweis" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="checkbox" checked={normal} onChange={(e) => setNormal(e.target.checked)} />
        Normalapproximation einblenden
      </label>
      <div className="widget-info">
        <Formel block tex={`P(${a} \\le X \\le ${b}) = \\sum_{k=${a}}^{${b}} \\binom{${n}}{k}\\, ${texZahl(p, 3)}^{k}\\, ${texZahl(1 - p, 3)}^{${n}-k} = ${texZahl(P, 5)}`} />
      </div>
      <Kennwerte
        werte={[
          { name: "E(X) = np =", wert: zahlFest(mu, 3) },
          { name: "V(X) = np(1−p) =", wert: zahlFest(varianz, 3) },
          { name: "σ =", wert: zahlFest(sigma, 3) },
          { name: `P(${a} ≤ X ≤ ${b}) =`, wert: `${zahlFest(P, 5)} ≈ ${prozent(P)}` },
          ...(normal ? [{ name: "Normalapprox. (±0,5) ≈", wert: zahlFest(approx, 5) }] : []),
        ]}
      />
      {normal ? (
        <Hinweis art={varianz > 9 ? undefined : "warnung"}>
          Faustregel: Die Normalapproximation ist brauchbar, wenn σ² = np(1−p) &gt; 9 ist (hier {zahlFest(varianz, 2)}
          {varianz > 9 ? " – erfüllt" : " – nicht erfüllt"}). Gerechnet mit Stetigkeitskorrektur: Φ((b + 0,5 − μ)/σ) − Φ((a − 0,5 − μ)/σ).
        </Hinweis>
      ) : null}
    </div>
  );
}
