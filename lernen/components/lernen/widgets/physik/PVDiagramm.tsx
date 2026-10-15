"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, zahlDe } from "../../Koordinaten";
import { zahl, text, type WidgetProps } from "../vertrag";
import { Auswahl, Kennwerte, Regler, ReglerGitter } from "./bausteine";

/**
 * p-V-Diagramm fuer ein ideales Gas (Stoffmenge n): Zustandsaenderungen und Carnot-Kreisprozess.
 * Vorzeichen: W = vom Gas verrichtete Arbeit (∫p dV), Q = zugefuehrte Waerme, ΔU = Q − W.
 * Props: prozess ("isotherm" | "isobar" | "isochor" | "adiabatisch" | "carnot"), n (mol), f (Freiheitsgrade 3/5),
 *        V1 (L), T1 (K), V2 (L), T2 (K, fuer isochor/carnot: kalte Temperatur).
 */
const R = 8.314;

export function PVDiagramm({ props }: WidgetProps) {
  const [prozess, setProzess] = useState(text(props, "prozess", "isotherm"));
  const n = zahl(props, "n", 1);
  const fg = zahl(props, "f", 3);
  const [V1, setV1] = useState(zahl(props, "V1", 10));
  const [T1, setT1] = useState(zahl(props, "T1", 400));
  const [V2, setV2] = useState(zahl(props, "V2", 25));
  const [T2, setT2] = useState(zahl(props, "T2", 300));

  const kappa = (fg + 2) / fg;
  const Cv = (fg / 2) * R;
  // p in kPa bei V in L: p = nRT/V  ->  (J/L = kPa)
  const p = (V: number, T: number) => (n * R * T) / V;
  const p1 = p(V1, T1);

  const kurven: { pts: [number, number][]; farbe: number }[] = [];
  const probe = (von: number, bis: number, fn: (V: number) => number, farbe: number) => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 120; i++) {
      const V = von + ((bis - von) * i) / 120;
      pts.push([V, fn(V)]);
    }
    kurven.push({ pts, farbe });
  };

  let W = 0;
  let Q = 0;
  let dU = 0;
  let extra: { name: string; wert: string }[] = [];
  let flaeche: [number, number][] = [];

  if (prozess === "isotherm") {
    probe(V1, V2, (V) => p(V, T1), 0);
    W = n * R * T1 * Math.log(V2 / V1);
    Q = W;
    extra = [{ name: "p₂ =", wert: `${zahlDe(p(V2, T1), 1)} kPa` }];
  } else if (prozess === "isobar") {
    kurven.push({ pts: [[V1, p1], [V2, p1]], farbe: 0 });
    const T2b = (T1 * V2) / V1;
    W = p1 * (V2 - V1);
    dU = n * Cv * (T2b - T1);
    Q = dU + W;
    extra = [{ name: "T₂ =", wert: `${zahlDe(T2b, 1)} K` }];
  } else if (prozess === "isochor") {
    const p2 = p(V1, T2);
    kurven.push({ pts: [[V1, p1], [V1, p2]], farbe: 0 });
    dU = n * Cv * (T2 - T1);
    Q = dU;
    extra = [{ name: "p₂ =", wert: `${zahlDe(p2, 1)} kPa` }];
  } else if (prozess === "adiabatisch") {
    const c = p1 * V1 ** kappa;
    probe(V1, V2, (V) => c / V ** kappa, 0);
    probe(Math.min(V1, V2), Math.max(V1, V2) * 1.4, (V) => p(V, T1), 4); // Vergleichs-Isotherme
    const T2a = T1 * (V1 / V2) ** (kappa - 1);
    dU = n * Cv * (T2a - T1);
    W = -dU;
    extra = [
      { name: "T₂ =", wert: `${zahlDe(T2a, 1)} K` },
      { name: "κ =", wert: zahlDe(kappa, 3) },
    ];
  } else {
    // Carnot: T1 = heiss, T2 = kalt, V1 -> V2 isotherm bei T1
    const Th = Math.max(T1, T2 + 1);
    const Tc = Math.min(T2, T1 - 1);
    const r = (Th / Tc) ** (1 / (kappa - 1));
    const V3 = V2 * r;
    const V4 = V1 * r;
    const a: [number, number][] = [];
    const add = (von: number, bis: number, fn: (V: number) => number) => {
      for (let i = 0; i <= 80; i++) {
        const V = von + ((bis - von) * i) / 80;
        a.push([V, fn(V)]);
      }
    };
    const c2 = p(V2, Th) * V2 ** kappa;
    const c1 = p(V1, Th) * V1 ** kappa;
    probe(V1, V2, (V) => p(V, Th), 1);
    probe(V2, V3, (V) => c2 / V ** kappa, 0);
    probe(V3, V4, (V) => p(V, Tc), 2);
    probe(V4, V1, (V) => c1 / V ** kappa, 0);
    add(V1, V2, (V) => p(V, Th));
    add(V2, V3, (V) => c2 / V ** kappa);
    add(V3, V4, (V) => p(V, Tc));
    add(V4, V1, (V) => c1 / V ** kappa);
    flaeche = a;
    const Qzu = n * R * Th * Math.log(V2 / V1);
    W = n * R * (Th - Tc) * Math.log(V2 / V1);
    Q = Qzu;
    extra = [
      { name: "Q_zu =", wert: `${zahlDe(Qzu, 0)} J` },
      { name: "|Q_ab| =", wert: `${zahlDe(n * R * Tc * Math.log(V2 / V1), 0)} J` },
      { name: "η = 1 − T_k/T_h =", wert: `${zahlDe((1 - Tc / Th) * 100, 1)} %` },
      { name: "V₃ =", wert: `${zahlDe(V3, 1)} L` },
    ];
  }

  const alle = kurven.flatMap((k) => k.pts);
  const vmax = Math.max(...alle.map((q) => q[0])) * 1.15;
  const pmax = Math.max(...alle.map((q) => q[1])) * 1.15;
  const einzel = prozess !== "carnot" && prozess !== "isochor";
  const hauptkurve = kurven[0]?.pts ?? [];

  return (
    <div>
      <Auswahl
        name="Prozess"
        wert={prozess}
        onChange={setProzess}
        optionen={[
          { wert: "isotherm", label: "isotherm" },
          { wert: "isobar", label: "isobar" },
          { wert: "isochor", label: "isochor" },
          { wert: "adiabatisch", label: "adiabatisch" },
          { wert: "carnot", label: "Carnot-Kreisprozess" },
        ]}
      />
      <Koordinaten x={[0, vmax]} y={[0, pmax]} achsenX="V in L" achsenY="p in kPa" hoehe={320} beschreibung={`p-V-Diagramm, Prozess ${prozess}`}>
        {(k) => (
          <>
            {einzel && hauptkurve.length > 1 ? (
              <path
                d={`M${k.px(hauptkurve[0][0])},${k.py(0)}` + hauptkurve.map(([V, pp]) => `L${k.px(V)},${k.py(pp)}`).join("") + `L${k.px(hauptkurve[hauptkurve.length - 1][0])},${k.py(0)}Z`}
                fill={FARBEN[0]}
                fillOpacity={0.15}
              />
            ) : null}
            {flaeche.length ? <path d={"M" + flaeche.map(([V, pp]) => `${k.px(V)},${k.py(pp)}`).join("L") + "Z"} fill={FARBEN[3]} fillOpacity={0.2} /> : null}
            {kurven.map((c, i) => (
              <polyline
                key={i}
                points={c.pts.map(([V, pp]) => `${k.px(V)},${k.py(pp)}`).join(" ")}
                fill="none"
                stroke={FARBEN[c.farbe]}
                strokeWidth={c.farbe === 4 ? 1.4 : 2.4}
                strokeDasharray={c.farbe === 4 ? "5 4" : undefined}
              />
            ))}
            {hauptkurve.length ? <circle cx={k.px(hauptkurve[0][0])} cy={k.py(hauptkurve[0][1])} r={4.5} fill={FARBEN[0]} /> : null}
          </>
        )}
      </Koordinaten>
      <ReglerGitter>
        <Regler name="V₁" wert={V1} min={2} max={40} schritt={0.5} einheit="L" stellen={1} onChange={setV1} />
        <Regler name={prozess === "carnot" ? "T_h (heiß)" : "T₁"} wert={T1} min={200} max={900} schritt={5} einheit="K" stellen={0} onChange={setT1} />
        {prozess !== "isochor" ? <Regler name="V₂" wert={V2} min={2} max={60} schritt={0.5} einheit="L" stellen={1} onChange={setV2} /> : null}
        {prozess === "isochor" || prozess === "carnot" ? (
          <Regler name={prozess === "carnot" ? "T_k (kalt)" : "T₂"} wert={T2} min={150} max={900} schritt={5} einheit="K" stellen={0} onChange={setT2} />
        ) : null}
      </ReglerGitter>
      <Kennwerte
        werte={[
          { name: "p₁ =", wert: `${zahlDe(p1, 1)} kPa` },
          ...extra,
          { name: prozess === "carnot" ? "Nutzarbeit W =" : "W (vom Gas) =", wert: `${zahlDe(W, 0)} J` },
          ...(prozess === "carnot" ? [] : [{ name: "Q (zugeführt) =", wert: `${zahlDe(Q, 0)} J` }, { name: "ΔU =", wert: `${zahlDe(dU, 0)} J` }]),
        ]}
      />
      <p className="mt-1 text-sm text-ink-muted">
        {n} mol ideales Gas, {fg} Freiheitsgrade. Die eingefärbte Fläche ist die Arbeit.
      </p>
    </div>
  );
}
