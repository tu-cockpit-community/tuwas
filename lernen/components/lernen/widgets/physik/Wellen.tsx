"use client";

import { useEffect, useRef, useState } from "react";
import { Koordinaten, FARBEN, graphPfad, zahlDe } from "../../Koordinaten";
import { zahl, text, type WidgetProps } from "../vertrag";
import { Auswahl, Kennwerte, Regler, ReglerGitter } from "./bausteine";

/**
 * Ueberlagerung zweier harmonischer Wellen.
 * modus "raum": y(x) zum Zeitpunkt t, Wellen gleich- oder gegenlaeufig (-> stehende Welle), animierbar.
 * modus "schwebung": y(t) an einem festen Ort fuer zwei nahe Frequenzen.
 * Props: modus, A1, A2, lambda1, lambda2, f1, f2, phi (rad), gegenlaeufig (bool), xmax, tmax.
 */
export function Wellen({ props }: WidgetProps) {
  const [modus, setModus] = useState(text(props, "modus", "raum"));
  const [A1, setA1] = useState(zahl(props, "A1", 1));
  const [A2, setA2] = useState(zahl(props, "A2", 1));
  const [l1, setL1] = useState(zahl(props, "lambda1", 2));
  const [l2, setL2] = useState(zahl(props, "lambda2", 2));
  const [f1, setF1] = useState(zahl(props, "f1", modus === "schwebung" ? 10 : 0.5));
  const [f2, setF2] = useState(zahl(props, "f2", modus === "schwebung" ? 11 : 0.5));
  const [phi, setPhi] = useState(zahl(props, "phi", 0));
  const [gegen, setGegen] = useState(props.gegenlaeufig === true);
  const xmax = zahl(props, "xmax", 8);
  const tmax = zahl(props, "tmax", 2);
  const [t, setT] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const rahmen = useRef<number | null>(null);

  useEffect(() => {
    if (!laeuft || modus !== "raum") return;
    let letzt = performance.now();
    const tick = (jetzt: number) => {
      setT((alt) => alt + (jetzt - letzt) / 1000);
      letzt = jetzt;
      rahmen.current = requestAnimationFrame(tick);
    };
    rahmen.current = requestAnimationFrame(tick);
    return () => {
      if (rahmen.current !== null) cancelAnimationFrame(rahmen.current);
    };
  }, [laeuft, modus]);

  const ymax = (A1 + A2) * 1.15 || 1;
  const wechsle = (m: string) => {
    setModus(m);
    setF1(m === "schwebung" ? 10 : 0.5);
    setF2(m === "schwebung" ? 11 : 0.5);
  };

  if (modus === "schwebung") {
    const y1 = (s: number) => A1 * Math.sin(2 * Math.PI * f1 * s);
    const y2 = (s: number) => A2 * Math.sin(2 * Math.PI * f2 * s + phi);
    return (
      <div>
        <Auswahl name="Modus" wert={modus} onChange={wechsle} optionen={[{ wert: "raum", label: "Welle im Raum" }, { wert: "schwebung", label: "Schwebung" }]} />
        <Koordinaten x={[0, tmax]} y={[-ymax, ymax]} achsenX="t in s" achsenY="y" hoehe={300} beschreibung="Schwebung: Summe zweier Schwingungen mit nahen Frequenzen">
          {(k) => (
            <>
              <path d={graphPfad(y1, k, 0, tmax, 1600)} fill="none" stroke={FARBEN[1]} strokeWidth={1} strokeOpacity={0.5} />
              <path d={graphPfad(y2, k, 0, tmax, 1600)} fill="none" stroke={FARBEN[2]} strokeWidth={1} strokeOpacity={0.5} />
              <path d={graphPfad((s) => y1(s) + y2(s), k, 0, tmax, 1600)} fill="none" stroke={FARBEN[0]} strokeWidth={2} />
            </>
          )}
        </Koordinaten>
        <ReglerGitter>
          <Regler name="Frequenz f₁" wert={f1} min={1} max={20} schritt={0.1} einheit="Hz" stellen={1} onChange={setF1} />
          <Regler name="Frequenz f₂" wert={f2} min={1} max={20} schritt={0.1} einheit="Hz" stellen={1} onChange={setF2} />
          <Regler name="Amplitude A₁" wert={A1} min={0} max={2} schritt={0.05} onChange={setA1} />
          <Regler name="Amplitude A₂" wert={A2} min={0} max={2} schritt={0.05} onChange={setA2} />
        </ReglerGitter>
        <Kennwerte
          werte={[
            { name: "Schwebungsfrequenz |f₁ − f₂| =", wert: `${zahlDe(Math.abs(f1 - f2), 2)} Hz` },
            { name: "Schwebungsdauer =", wert: Math.abs(f1 - f2) > 1e-9 ? `${zahlDe(1 / Math.abs(f1 - f2), 3)} s` : "∞" },
            { name: "mittlere Frequenz =", wert: `${zahlDe((f1 + f2) / 2, 2)} Hz` },
          ]}
        />
      </div>
    );
  }

  const k1 = (2 * Math.PI) / l1;
  const k2 = (2 * Math.PI) / l2;
  const y1 = (x: number) => A1 * Math.sin(k1 * x - 2 * Math.PI * f1 * t);
  const y2 = (x: number) => A2 * Math.sin((gegen ? -1 : 1) * (k2 * x) - 2 * Math.PI * f2 * t + phi);
  return (
    <div>
      <Auswahl name="Modus" wert={modus} onChange={wechsle} optionen={[{ wert: "raum", label: "Welle im Raum" }, { wert: "schwebung", label: "Schwebung" }]} />
      <Koordinaten x={[0, xmax]} y={[-ymax, ymax]} achsenX="x in m" achsenY="y" hoehe={300} beschreibung="Zwei Wellen und ihre Summe als Funktion des Ortes">
        {(k) => (
          <>
            <path d={graphPfad(y1, k)} fill="none" stroke={FARBEN[1]} strokeWidth={1.5} strokeDasharray="6 4" />
            <path d={graphPfad(y2, k)} fill="none" stroke={FARBEN[2]} strokeWidth={1.5} strokeDasharray="6 4" />
            <path d={graphPfad((x) => y1(x) + y2(x), k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} />
          </>
        )}
      </Koordinaten>
      <p className="text-sm text-ink-muted">Gestrichelt: Einzelwellen · durchgezogen: Summe (Superposition)</p>
      <ReglerGitter>
        <Regler name="Amplitude A₁" wert={A1} min={0} max={2} schritt={0.05} einheit="m" onChange={setA1} />
        <Regler name="Amplitude A₂" wert={A2} min={0} max={2} schritt={0.05} einheit="m" onChange={setA2} />
        <Regler name="Wellenlänge λ₁" wert={l1} min={0.5} max={6} schritt={0.05} einheit="m" onChange={setL1} />
        <Regler name="Wellenlänge λ₂" wert={l2} min={0.5} max={6} schritt={0.05} einheit="m" onChange={setL2} />
        <Regler name="Frequenz f₁" wert={f1} min={0} max={2} schritt={0.05} einheit="Hz" onChange={setF1} />
        <Regler name="Frequenz f₂" wert={f2} min={0} max={2} schritt={0.05} einheit="Hz" onChange={setF2} />
        <Regler name="Phasendifferenz Δφ" wert={phi} min={0} max={6.28} schritt={0.01} einheit="rad" onChange={setPhi} />
        <label className="flex items-center gap-2 self-end text-sm text-ink-soft">
          <input type="checkbox" checked={gegen} onChange={(e) => setGegen(e.target.checked)} className="accent-[var(--color-accent)]" />
          Welle 2 läuft in −x-Richtung (stehende Welle)
        </label>
      </ReglerGitter>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Kennwerte
          werte={[
            { name: "c₁ = λ₁f₁ =", wert: `${zahlDe(l1 * f1, 3)} m/s` },
            { name: "c₂ = λ₂f₂ =", wert: `${zahlDe(l2 * f2, 3)} m/s` },
            { name: "t =", wert: `${zahlDe(t, 2)} s` },
          ]}
        />
        <div className="flex gap-2">
          <button type="button" onClick={() => setLaeuft((l) => !l)} className="rounded-md border border-line-strong px-3 py-1 text-sm hover:border-accent">
            {laeuft ? "Anhalten" : "Abspielen"}
          </button>
          <button type="button" onClick={() => setT(0)} className="rounded-md border border-line-strong px-3 py-1 text-sm hover:border-accent">
            t = 0
          </button>
        </div>
      </div>
    </div>
  );
}
