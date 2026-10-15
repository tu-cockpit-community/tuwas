"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, zahlDe } from "../../Koordinaten";
import { zahl, type WidgetProps } from "../vertrag";
import { Kennwerte, Regler, ReglerGitter } from "./bausteine";

/**
 * Schiefer Wurf ohne Luftwiderstand aus der Abwurfhoehe h0.
 * Props: v0 (m/s), winkel (Grad), h0 (m), g (m/s²).
 * Ein Zeitregler zeigt Ort und Geschwindigkeitsvektor (mit Komponenten) zum Zeitpunkt t.
 */
export function Wurf({ props }: WidgetProps) {
  const g = zahl(props, "g", 9.81);
  const [v0, setV0] = useState(zahl(props, "v0", 15));
  const [winkel, setWinkel] = useState(zahl(props, "winkel", 45));
  const [h0, setH0] = useState(zahl(props, "h0", 0));
  const [anteil, setAnteil] = useState(0.4);

  const a = (winkel * Math.PI) / 180;
  const vx = v0 * Math.cos(a);
  const vy0 = v0 * Math.sin(a);
  // Flugzeit: h0 + vy0 t − g t²/2 = 0
  const tF = (vy0 + Math.sqrt(vy0 * vy0 + 2 * g * h0)) / g;
  const weite = vx * tF;
  const hmax = h0 + Math.max(0, (vy0 * vy0) / (2 * g));
  const t = anteil * tF;
  const x = vx * t;
  const y = h0 + vy0 * t - (g * t * t) / 2;
  const vy = vy0 - g * t;
  const xmax = Math.max(weite * 1.1, 5);
  const ymax = Math.max(hmax * 1.25, 3);
  const pfeil = 0.25 * Math.min(xmax, ymax * 2) / Math.max(v0, 1);

  return (
    <div>
      <Koordinaten x={[0, xmax]} y={[0, ymax]} achsenX="x in m" achsenY="y in m" hoehe={320} beschreibung={`Wurfbahn: Weite ${zahlDe(weite, 1)} m, Gipfelhöhe ${zahlDe(hmax, 1)} m`}>
        {(k) => {
          const pts: string[] = [];
          for (let i = 0; i <= 200; i++) {
            const s = (tF * i) / 200;
            pts.push(`${k.px(vx * s)},${k.py(h0 + vy0 * s - (g * s * s) / 2)}`);
          }
          return (
            <>
              <polyline points={pts.join(" ")} fill="none" stroke={FARBEN[0]} strokeWidth={2.4} />
              <line x1={k.px(x)} y1={k.py(y)} x2={k.px(x + vx * pfeil)} y2={k.py(y)} stroke={FARBEN[1]} strokeWidth={2} markerEnd="url(#pfeil-1)" />
              <line x1={k.px(x)} y1={k.py(y)} x2={k.px(x)} y2={k.py(y + vy * pfeil)} stroke={FARBEN[2]} strokeWidth={2} markerEnd="url(#pfeil-2)" />
              <line x1={k.px(x)} y1={k.py(y)} x2={k.px(x + vx * pfeil)} y2={k.py(y + vy * pfeil)} stroke={FARBEN[3]} strokeWidth={2.4} markerEnd="url(#pfeil-3)" />
              <circle cx={k.px(x)} cy={k.py(y)} r={6} fill={FARBEN[0]} />
            </>
          );
        }}
      </Koordinaten>
      <p className="text-sm text-ink-muted">Pfeile: vₓ (konstant), v_y (ändert sich linear), resultierende Geschwindigkeit v.</p>
      <ReglerGitter>
        <Regler name="Abwurfgeschwindigkeit v₀" wert={v0} min={1} max={40} schritt={0.5} einheit="m/s" stellen={1} onChange={setV0} />
        <Regler name="Abwurfwinkel α" wert={winkel} min={-60} max={90} schritt={1} einheit="°" stellen={0} onChange={setWinkel} />
        <Regler name="Abwurfhöhe h₀" wert={h0} min={0} max={50} schritt={0.5} einheit="m" stellen={1} onChange={setH0} />
        <Regler name="Zeitpunkt t" wert={t} min={0} max={tF} schritt={tF / 200} einheit="s" onChange={(v) => setAnteil(tF > 0 ? v / tF : 0)} />
      </ReglerGitter>
      <Kennwerte
        werte={[
          { name: "Flugzeit =", wert: `${zahlDe(tF, 2)} s` },
          { name: "Wurfweite =", wert: `${zahlDe(weite, 2)} m` },
          { name: "max. Höhe =", wert: `${zahlDe(hmax, 2)} m` },
          { name: "vₓ =", wert: `${zahlDe(vx, 2)} m/s` },
          { name: "v_y(t) =", wert: `${zahlDe(vy, 2)} m/s` },
          { name: "|v(t)| =", wert: `${zahlDe(Math.hypot(vx, vy), 2)} m/s` },
        ]}
      />
    </div>
  );
}
