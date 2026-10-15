"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, zahlDe } from "../../Koordinaten";
import { zahl, type WidgetProps } from "../vertrag";
import { Kennwerte, Regler, ReglerGitter } from "./bausteine";

/**
 * Strahlengang an einer duennen Linse mit den drei Hauptstrahlen.
 * Linse bei x = 0, Gegenstand bei x = −g. f > 0: Sammellinse, f < 0: Zerstreuungslinse.
 * Props: f, g, G (alle in cm), breite (halbe x-Spanne in cm), fFrei (bool: f-Regler auch negativ).
 */
export function Linse({ props }: WidgetProps) {
  const [f, setF] = useState(zahl(props, "f", 10));
  const [g, setG] = useState(zahl(props, "g", 25));
  const [G, setGr] = useState(zahl(props, "G", 4));
  const breite = zahl(props, "breite", 60);
  const fNegativ = props.fFrei === true || zahl(props, "f", 10) < 0;

  const unendlich = Math.abs(g - f) < 1e-6;
  const b = unendlich ? Infinity : (f * g) / (g - f);
  const B = unendlich ? Infinity : (-G * b) / g;
  const V = unendlich ? Infinity : -b / g;
  const ymax = Math.max(G * 2.2, 8);
  const xmin = -breite;
  const xmax = breite;

  // Strahlen: Liste von Strecken [x1,y1,x2,y2], virtuelle Verlaengerungen gestrichelt
  const echt: [number, number, number, number][] = [];
  const virtuell: [number, number, number, number][] = [];
  const nachLinse = (y0: number, steigung: number) => {
    echt.push([0, y0, xmax, y0 + steigung * xmax]);
    if (Number.isFinite(b) && b < 0) virtuell.push([0, y0, b, y0 + steigung * b]);
  };
  // 1) Parallelstrahl -> durch Brennpunkt (f, 0)
  echt.push([-g, G, 0, G]);
  nachLinse(G, -G / f);
  // 2) Mittelpunktstrahl
  echt.push([-g, G, 0, 0]);
  nachLinse(0, -G / g);
  // 3) Brennpunktstrahl -> danach parallel
  const yL = (-f * G) / (g - f);
  if (Number.isFinite(yL) && Math.abs(yL) < ymax * 3) {
    echt.push([-g, G, 0, yL]);
    nachLinse(yL, 0);
  }

  let bildart = "kein Bild (g = f)";
  if (Number.isFinite(b)) {
    const teile = [b > 0 ? "reell" : "virtuell", B * G > 0 ? "aufrecht" : "umgekehrt", Math.abs(V) > 1 ? "vergrößert" : Math.abs(V) < 1 ? "verkleinert" : "gleich groß"];
    bildart = teile.join(", ");
  }

  return (
    <div>
      <Koordinaten x={[xmin, xmax]} y={[-ymax, ymax]} achsenX="x in cm" achsenY="y in cm" hoehe={320} beschreibung={`Linse f = ${zahlDe(f)} cm, Gegenstand g = ${zahlDe(g)} cm: Bild ${bildart}`}>
        {(k) => (
          <>
            {/* Linse */}
            <line x1={k.px(0)} x2={k.px(0)} y1={k.py(-ymax * 0.9)} y2={k.py(ymax * 0.9)} stroke="var(--color-ink-muted)" strokeWidth={3} />
            <text x={k.px(0) + 6} y={k.py(ymax * 0.85)} className="plot-label">
              {f > 0 ? "Sammellinse" : "Zerstreuungslinse"}
            </text>
            {/* Brennpunkte */}
            {[f, -f].map((p, i) => (
              <g key={i}>
                <circle cx={k.px(p)} cy={k.py(0)} r={3.5} fill="var(--color-ink)" />
                <text x={k.px(p) - 4} y={k.py(0) + 16} className="plot-label">
                  {i === 0 ? "F′" : "F"}
                </text>
              </g>
            ))}
            {/* Strahlen */}
            {echt.map(([x1, y1, x2, y2], i) => (
              <line key={`e${i}`} x1={k.px(x1)} y1={k.py(y1)} x2={k.px(x2)} y2={k.py(y2)} stroke={FARBEN[[0, 0, 1, 1, 2, 2][i] ?? 0]} strokeWidth={1.8} />
            ))}
            {virtuell.map(([x1, y1, x2, y2], i) => (
              <line key={`v${i}`} x1={k.px(x1)} y1={k.py(y1)} x2={k.px(x2)} y2={k.py(y2)} stroke={FARBEN[i % 3]} strokeWidth={1.2} strokeDasharray="5 4" />
            ))}
            {/* Gegenstand */}
            <line x1={k.px(-g)} x2={k.px(-g)} y1={k.py(0)} y2={k.py(G)} stroke={FARBEN[3]} strokeWidth={3} markerEnd="url(#pfeil-3)" />
            {/* Bild */}
            {Number.isFinite(b) && Math.abs(b) < breite * 3 ? (
              <line
                x1={k.px(b)}
                x2={k.px(b)}
                y1={k.py(0)}
                y2={k.py(B)}
                stroke={FARBEN[4]}
                strokeWidth={3}
                strokeDasharray={b < 0 ? "4 3" : undefined}
                markerEnd="url(#pfeil-4)"
              />
            ) : null}
          </>
        )}
      </Koordinaten>
      <ReglerGitter>
        <Regler name="Brennweite f" wert={f} min={fNegativ ? -30 : 2} max={30} schritt={0.5} einheit="cm" stellen={1} onChange={(v) => setF(Math.abs(v) < 0.5 ? 0.5 : v)} />
        <Regler name="Gegenstandsweite g" wert={g} min={1} max={breite} schritt={0.5} einheit="cm" stellen={1} onChange={setG} />
        <Regler name="Gegenstandsgröße G" wert={G} min={1} max={10} schritt={0.5} einheit="cm" stellen={1} onChange={setGr} />
      </ReglerGitter>
      <Kennwerte
        werte={[
          { name: "Bildweite b =", wert: Number.isFinite(b) ? `${zahlDe(b, 2)} cm` : "∞" },
          { name: "Bildgröße B =", wert: Number.isFinite(B) ? `${zahlDe(B, 2)} cm` : "∞" },
          { name: "Abbildungsmaßstab V = −b/g =", wert: Number.isFinite(V) ? zahlDe(V, 3) : "∞" },
          { name: "Bild:", wert: bildart },
        ]}
      />
    </div>
  );
}
