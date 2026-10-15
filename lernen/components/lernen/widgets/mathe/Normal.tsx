"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, flaechePfad, graphPfad } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { achse, begrenze, Formel, Kennwerte, Legende, Regler, zahlTerm } from "./gemeinsam";
import { prozent, texZahl, zahlFest } from "./format";
import { normBereich, normPdf } from "./rechnen-stochastik";

/**
 * Normalverteilung: Dichte, Regler μ, σ, Grenzen a, b, schattierte Flaeche P(a ≤ X ≤ b).
 * Props: mu, sigma, a, b, x (Achsenbereich, Standard μ ± 5σ). Die Achsen bleiben fest, damit
 * man sieht, wie die Kurve bei groesserem σ flacher und breiter wird.
 */

export function Normal({ props }: WidgetProps) {
  const mu0 = zahlTerm(props, "mu", 0);
  const s0 = Math.max(1e-6, Math.abs(zahlTerm(props, "sigma", 1)));
  const x = achse(props, "x", [mu0 - 5 * s0, mu0 + 5 * s0]);
  const spanne = x[1] - x[0];
  const [mu, setMu] = useState(mu0);
  const [sigma, setSigma] = useState(s0);
  const [a, setA] = useState(() => begrenze(zahlTerm(props, "a", mu0 - s0), x[0], x[1]));
  const [b, setB] = useState(() => begrenze(zahlTerm(props, "b", mu0 + s0), x[0], x[1]));

  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  const P = normBereich(lo, hi, mu, sigma);
  const peak = normPdf(mu, mu, sigma);
  const peak0 = normPdf(mu0, mu0, s0);
  const ymax = Math.max(peak0 * 1.25, peak * 1.1);
  const f = (t: number) => normPdf(t, mu, sigma);
  const schritt = Number((spanne / 200).toPrecision(2));

  const marken = [
    { v: mu - 2 * sigma, t: "μ−2σ" },
    { v: mu - sigma, t: "μ−σ" },
    { v: mu + sigma, t: "μ+σ" },
    { v: mu + 2 * sigma, t: "μ+2σ" },
  ];

  return (
    <div>
      <Koordinaten
        x={x}
        y={[0, ymax]}
        achsenY="φ(x)"
        beschreibung={`Dichte der Normalverteilung mit μ = ${zahlFest(mu, 3)}, σ = ${zahlFest(sigma, 3)}. Fläche zwischen ${zahlFest(lo, 3)} und ${zahlFest(hi, 3)}: ${zahlFest(P, 4)}.`}
      >
        {(k) => (
          <>
            <path d={flaechePfad(f, () => 0, k, Math.max(lo, x[0]), Math.min(hi, x[1]))} fill={FARBEN[0]} fillOpacity={0.25} />
            {marken.map((m) => (
              <g key={m.t}>
                <line x1={k.px(m.v)} x2={k.px(m.v)} y1={k.py(0)} y2={k.py(f(m.v))} stroke={FARBEN[3]} strokeWidth={1.3} strokeDasharray="4 4" />
                <text x={k.px(m.v)} y={k.py(f(m.v)) - 6} textAnchor="middle" className="tick">
                  {m.t}
                </text>
              </g>
            ))}
            <line x1={k.px(mu)} x2={k.px(mu)} y1={k.py(0)} y2={k.py(peak)} stroke={FARBEN[3]} strokeWidth={1.6} />
            <path d={graphPfad(f, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} />
            {[lo, hi].map((g, i) => (
              <line key={i} x1={k.px(g)} x2={k.px(g)} y1={k.py(0)} y2={k.py(ymax)} stroke={FARBEN[1]} strokeWidth={1.8} />
            ))}
            <text x={k.px(lo) - 4} y={k.py(ymax) + 14} textAnchor="end" className="plot-label">
              a
            </text>
            <text x={k.px(hi) + 4} y={k.py(ymax) + 14} className="plot-label">
              b
            </text>
          </>
        )}
      </Koordinaten>
      <Legende
        eintraege={[
          { farbe: FARBEN[0], label: "Dichte φ, Fläche = P(a ≤ X ≤ b)" },
          { farbe: FARBEN[3], label: "μ, μ ± σ, μ ± 2σ", gestrichelt: true },
          { farbe: FARBEN[1], label: "Grenzen a, b" },
        ]}
      />
      <div className="regler-gruppe">
        <Regler label="μ" min={x[0]} max={x[1]} step={schritt} wert={mu} anzeige={zahlFest(mu, 3)} setze={setMu} />
        <Regler label="σ" min={s0 / 4} max={s0 * 2.5} step={s0 / 100} wert={sigma} anzeige={zahlFest(sigma, 3)} setze={setSigma} />
        <Regler label="a" min={x[0]} max={x[1]} step={schritt} wert={a} anzeige={zahlFest(a, 3)} setze={setA} />
        <Regler label="b" min={x[0]} max={x[1]} step={schritt} wert={b} anzeige={zahlFest(b, 3)} setze={setB} />
      </div>
      <div className="widget-info">
        <Formel
          block
          tex={`P(${texZahl(lo)} \\le X \\le ${texZahl(hi)}) = \\Phi\\!\\left(\\tfrac{${texZahl(hi)} - ${texZahl(mu)}}{${texZahl(sigma)}}\\right) - \\Phi\\!\\left(\\tfrac{${texZahl(lo)} - ${texZahl(mu)}}{${texZahl(sigma)}}\\right) = ${texZahl(P, 5)}`.replace(/- -/g, "+ ")}
        />
      </div>
      <Kennwerte
        werte={[
          { name: "P(a ≤ X ≤ b) =", wert: `${zahlFest(P, 5)} ≈ ${prozent(P)}` },
          { name: "z(a) =", wert: zahlFest((lo - mu) / sigma, 3) },
          { name: "z(b) =", wert: zahlFest((hi - mu) / sigma, 3) },
          { name: "P(μ−σ ≤ X ≤ μ+σ) ≈", wert: "68,27 %" },
          { name: "P(μ−2σ ≤ X ≤ μ+2σ) ≈", wert: "95,45 %" },
        ]}
      />
    </div>
  );
}
