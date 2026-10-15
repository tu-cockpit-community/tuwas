"use client";

import { useEffect, useRef, useState } from "react";
import { Koordinaten, FARBEN, graphPfad, zahlDe } from "../../Koordinaten";
import { zahl, type WidgetProps } from "../vertrag";
import { Auswahl, Kennwerte, Regler, ReglerGitter } from "./bausteine";

/**
 * Harmonische (optional gedaempfte) Schwingung x(t) = A·e^(−δt)·sin(ωt + φ).
 * Props: A, f, phi (rad), delta (1/s), tmax (s), groesse ("x" | "v" | "a").
 * Umschaltbar zwischen Auslenkung, Geschwindigkeit und Beschleunigung; Abspielen zeigt den
 * schwingenden Koerper neben dem Diagramm.
 */
export function Schwingung({ props }: WidgetProps) {
  const [A, setA] = useState(zahl(props, "A", 1));
  const [f, setF] = useState(zahl(props, "f", 0.5));
  const [phi, setPhi] = useState(zahl(props, "phi", 0));
  const [delta, setDelta] = useState(zahl(props, "delta", 0));
  const tmax = zahl(props, "tmax", 6);
  const [groesse, setGroesse] = useState<string>(typeof props.groesse === "string" ? props.groesse : "x");
  const [t, setT] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const rahmen = useRef<number | null>(null);

  useEffect(() => {
    if (!laeuft) return;
    let letzt = performance.now();
    const tick = (jetzt: number) => {
      setT((alt) => {
        const neu = alt + (jetzt - letzt) / 1000;
        return neu > tmax ? 0 : neu;
      });
      letzt = jetzt;
      rahmen.current = requestAnimationFrame(tick);
    };
    rahmen.current = requestAnimationFrame(tick);
    return () => {
      if (rahmen.current !== null) cancelAnimationFrame(rahmen.current);
    };
  }, [laeuft, tmax]);

  const w = 2 * Math.PI * f;
  const x = (s: number) => A * Math.exp(-delta * s) * Math.sin(w * s + phi);
  // Ableitungen der gedaempften Schwingung (analytisch)
  const v = (s: number) => A * Math.exp(-delta * s) * (w * Math.cos(w * s + phi) - delta * Math.sin(w * s + phi));
  const a = (s: number) =>
    A * Math.exp(-delta * s) * ((delta * delta - w * w) * Math.sin(w * s + phi) - 2 * delta * w * Math.cos(w * s + phi));
  const fn = groesse === "v" ? v : groesse === "a" ? a : x;
  const amp = groesse === "v" ? A * Math.max(w, 0.1) : groesse === "a" ? A * Math.max(w * w, 0.1) : A;
  const ymax = Math.max(amp * 1.15, 0.1);
  const name = groesse === "v" ? "v in m/s" : groesse === "a" ? "a in m/s²" : "x in m";

  return (
    <div>
      <Auswahl
        name="Dargestellte Größe"
        wert={groesse}
        onChange={setGroesse}
        optionen={[
          { wert: "x", label: "Auslenkung x(t)" },
          { wert: "v", label: "Geschwindigkeit v(t)" },
          { wert: "a", label: "Beschleunigung a(t)" },
        ]}
      />
      <div className="mt-2 flex items-stretch gap-3">
        <div className="min-w-0 flex-1">
          <Koordinaten x={[0, tmax]} y={[-ymax, ymax]} achsenX="t in s" achsenY={name} hoehe={300} beschreibung={`Graph von ${name} über der Zeit`}>
            {(k) => (
              <>
                {delta > 0 && groesse === "x" ? (
                  <>
                    <path d={graphPfad((s) => A * Math.exp(-delta * s), k)} fill="none" stroke={FARBEN[1]} strokeWidth={1.4} strokeDasharray="5 4" />
                    <path d={graphPfad((s) => -A * Math.exp(-delta * s), k)} fill="none" stroke={FARBEN[1]} strokeWidth={1.4} strokeDasharray="5 4" />
                  </>
                ) : null}
                <path d={graphPfad(fn, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.4} />
                <circle cx={k.px(t)} cy={k.py(fn(t))} r={5} fill={FARBEN[0]} />
              </>
            )}
          </Koordinaten>
        </div>
        {/* schwingender Koerper an der Feder */}
        <svg viewBox="0 0 60 300" className="w-12 shrink-0" role="img" aria-label={`Körper bei x = ${zahlDe(x(t), 2)} m`}>
          <line x1="10" x2="50" y1="6" y2="6" stroke="currentColor" strokeWidth="3" />
          {(() => {
            // Auslenkung relativ zur Amplitude: +A ganz oben, -A ganz unten
            const mitte = 150 - (x(t) / Math.max(A, 0.01)) * 100;
            const windungen = 10;
            const pts: string[] = ["30,6"];
            for (let i = 1; i < windungen * 2; i++) pts.push(`${i % 2 ? 18 : 42},${6 + ((mitte - 18 - 6) * i) / (windungen * 2)}`);
            pts.push(`30,${mitte - 18}`);
            return (
              <>
                <polyline points={pts.join(" ")} fill="none" stroke="var(--color-ink-muted)" strokeWidth="1.5" />
                <rect x="14" y={mitte - 18} width="32" height="36" rx="4" fill={FARBEN[0]} />
                <line x1="2" x2="58" y1="150" y2="150" stroke="var(--color-ink-faint)" strokeDasharray="3 3" />
              </>
            );
          })()}
        </svg>
      </div>
      <ReglerGitter>
        <Regler name="Amplitude A" wert={A} min={0.1} max={2} schritt={0.05} einheit="m" onChange={setA} />
        <Regler name="Frequenz f" wert={f} min={0.1} max={3} schritt={0.05} einheit="Hz" onChange={setF} />
        <Regler name="Nullphase φ" wert={phi} min={-3.14} max={3.14} schritt={0.01} einheit="rad" onChange={setPhi} />
        <Regler name="Abklingkonstante δ" wert={delta} min={0} max={1.5} schritt={0.01} einheit="1/s" onChange={setDelta} />
      </ReglerGitter>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Kennwerte
          werte={[
            { name: "T =", wert: `${zahlDe(1 / f, 3)} s` },
            { name: "ω =", wert: `${zahlDe(w, 3)} 1/s` },
            { name: "v̂ = Aω =", wert: `${zahlDe(A * w, 3)} m/s` },
            { name: "â = Aω² =", wert: `${zahlDe(A * w * w, 3)} m/s²` },
          ]}
        />
        <button type="button" onClick={() => setLaeuft((l) => !l)} className="rounded-md border border-line-strong px-3 py-1 text-sm hover:border-accent">
          {laeuft ? "Anhalten" : "Abspielen"}
        </button>
      </div>
    </div>
  );
}
