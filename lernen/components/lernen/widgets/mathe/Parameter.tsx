"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { text, type WidgetProps } from "../vertrag";
import { achse, alsZahl, autoY, bool, Formel, funktion, Hinweis, Legende, Regler, textListe } from "./gemeinsam";
import { zahlSig } from "./format";
import { eingesetztTex, parameterSymbole, termTex } from "./term";

/**
 * Funktion mit Parametern erkunden.
 * Props: f, parameter: [{name, min, max, step, wert}], x, y, zusatz (Liste von Termen), piAchse.
 * Fehlt `parameter`, werden die freien Symbole in f erkannt (je −5 … 5, Start 1).
 */

interface Param {
  name: string;
  min: number;
  max: number;
  step: number;
  wert: number;
}

function leseParameter(roh: unknown, f: string): Param[] {
  const liste: Param[] = [];
  if (Array.isArray(roh)) {
    for (const e of roh) {
      if (!e || typeof e !== "object") continue;
      const o = e as Record<string, unknown>;
      if (typeof o.name !== "string" || !/^[A-Za-z_]\w*$/.test(o.name)) continue;
      let min = alsZahl(o.min) ?? -5;
      let max = alsZahl(o.max) ?? 5;
      if (min >= max) [min, max] = [-5, 5];
      const step = alsZahl(o.step);
      const wert = alsZahl(o.wert) ?? Math.min(max, Math.max(min, 1));
      liste.push({ name: o.name, min, max, step: step && step > 0 ? step : (max - min) / 100, wert: Math.min(max, Math.max(min, wert)) });
    }
  }
  if (liste.length) return liste;
  return parameterSymbole(f).map((name) => ({ name, min: -5, max: 5, step: 0.1, wert: 1 }));
}

export function Parameter({ props }: WidgetProps) {
  const f = text(props, "f", "a*sin(b*x+c)+d");
  const piAchse = bool(props, "piAchse", false);
  const x = achse(props, "x", piAchse ? [-2 * Math.PI, 2 * Math.PI] : [-5, 5]);
  const zusatz = textListe(props, "zusatz");
  const params = leseParameter(props.parameter, f);
  const [werte, setWerte] = useState<Record<string, number>>(() => Object.fromEntries(params.map((p) => [p.name, p.wert])));
  const fn = funktion(f);
  const zusatzFn = zusatz.map((z) => funktion(z));
  // y-Bereich einmal aus den Startwerten; bleibt beim Verschieben der Regler fest, damit man die Aenderung sieht
  const [y] = useState(() => {
    const start = Object.fromEntries(params.map((p) => [p.name, p.wert]));
    const fns = [
      ...(fn ? [(t: number) => fn(t, start)] : []),
      ...zusatzFn.filter((z): z is NonNullable<typeof z> => z !== null).map((z) => (t: number) => z(t, start)),
    ];
    return autoY(props, fns, x, [], [-5, 5]);
  });

  const aktuell: Record<string, number> = Object.fromEntries(params.map((p) => [p.name, werte[p.name] ?? p.wert]));
  const g = fn ? (t: number) => fn(t, aktuell) : null;
  const allgemein = termTex(f);
  const eingesetzt = eingesetztTex(f, aktuell);
  const belegung = params.map((p) => `${p.name} = ${zahlSig(aktuell[p.name])}`).join(", ");

  return (
    <div>
      {allgemein ? (
        <div className="widget-info" aria-live="polite">
          <Formel tex={`f(x) = ${allgemein}${eingesetzt && params.length ? ` \\quad\\Rightarrow\\quad f(x) = ${eingesetzt}` : ""}`} block />
        </div>
      ) : (
        <Hinweis art="warnung">Der Term „{f}“ ist nicht lesbar.</Hinweis>
      )}
      <Koordinaten x={x} y={y} piAchse={piAchse} beschreibung={`Graph von f(x) = ${f} mit ${belegung || "festen Werten"}${zusatz.length ? `; zum Vergleich: ${zusatz.join(", ")}` : ""}`}>
        {(k) => (
          <>
            {zusatzFn.map((z, i) =>
              z ? (
                <path key={i} d={graphPfad((t: number) => z(t, aktuell), k)} fill="none" stroke={FARBEN[(i + 1) % FARBEN.length]} strokeWidth={1.8} strokeDasharray="6 5" />
              ) : null,
            )}
            {g ? <path d={graphPfad(g, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} strokeLinecap="round" /> : null}
          </>
        )}
      </Koordinaten>
      {zusatz.length ? (
        <Legende
          eintraege={[
            { farbe: FARBEN[0], label: "f(x)" },
            ...zusatz.map((z, i) => ({ farbe: FARBEN[(i + 1) % FARBEN.length], label: z, gestrichelt: true })),
          ]}
        />
      ) : null}
      {params.length ? (
        <div className="regler-gruppe">
          {params.map((p) => (
            <Regler
              key={p.name}
              label={p.name}
              min={p.min}
              max={p.max}
              step={p.step}
              wert={aktuell[p.name]}
              anzeige={zahlSig(aktuell[p.name])}
              beschreibung={`Parameter ${p.name} = ${zahlSig(aktuell[p.name])}`}
              setze={(v) => setWerte((alt) => ({ ...alt, [p.name]: v }))}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
