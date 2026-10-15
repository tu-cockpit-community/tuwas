"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad, zahlDe } from "../../Koordinaten";
import { zahl, text, type WidgetProps } from "../vertrag";
import { Kennwerte, Regler, ReglerGitter, wiss } from "./bausteine";

/**
 * Radioaktiver Zerfall N(t) = N0 · (1/2)^(t/T½) mit markierten Halbwertszeiten.
 * Props: N0, halbwertszeit, einheit (Zeiteinheit-Text, z.B. "d"), tmax (in Halbwertszeiten).
 */
export function Zerfall({ props }: WidgetProps) {
  const einheit = text(props, "einheit", "s");
  const [N0, setN0] = useState(zahl(props, "N0", 1000));
  const [T, setT] = useState(zahl(props, "halbwertszeit", 10));
  const vielfache = zahl(props, "tmax", 5);
  const [t, setZeit] = useState(T);
  const tmax = vielfache * T;
  const N = (s: number) => N0 * 0.5 ** (s / T);
  const lambda = Math.LN2 / T;

  return (
    <div>
      <Koordinaten x={[0, tmax]} y={[0, N0 * 1.1]} achsenX={`t in ${einheit}`} achsenY="N" hoehe={300} beschreibung={`Zerfallskurve mit Halbwertszeit ${zahlDe(T)} ${einheit}`}>
        {(k) => (
          <>
            {Array.from({ length: Math.floor(vielfache) }, (_, i) => i + 1).map((m) => (
              <g key={m}>
                <line x1={k.px(m * T)} x2={k.px(m * T)} y1={k.py(0)} y2={k.py(N(m * T))} stroke={FARBEN[1]} strokeDasharray="4 4" />
                <line x1={k.px(0)} x2={k.px(m * T)} y1={k.py(N(m * T))} y2={k.py(N(m * T))} stroke={FARBEN[1]} strokeDasharray="4 4" />
              </g>
            ))}
            <path d={graphPfad(N, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.4} />
            <circle cx={k.px(t)} cy={k.py(N(t))} r={5} fill={FARBEN[2]} />
          </>
        )}
      </Koordinaten>
      <ReglerGitter>
        <Regler name="Anfangszahl N₀" wert={N0} min={100} max={10000} schritt={100} stellen={0} onChange={setN0} />
        <Regler name="Halbwertszeit T½" wert={T} min={1} max={100} schritt={0.5} einheit={einheit} stellen={1} onChange={(v) => { setT(v); setZeit(Math.min(t, vielfache * v)); }} />
        <Regler name="Zeitpunkt t" wert={t} min={0} max={tmax} schritt={tmax / 200} einheit={einheit} onChange={setZeit} />
      </ReglerGitter>
      <Kennwerte
        werte={[
          { name: "N(t) =", wert: zahlDe(N(t), 1) },
          { name: "Anteil =", wert: `${zahlDe(100 * N(t) / N0, 2)} %` },
          { name: "λ = ln 2 / T½ =", wert: `${wiss(lambda)} 1/${einheit}` },
          { name: "t / T½ =", wert: zahlDe(t / T, 2) },
        ]}
      />
    </div>
  );
}
