"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { text, type WidgetProps } from "../vertrag";
import { achse, autoY, begrenze, Formel, funktion, Hinweis, Kennwerte, Regler, Umschalter, zahlTerm } from "./gemeinsam";
import { texZahl, zahlSig } from "./format";
import { riemann, simpson, type RiemannArt } from "./rechnen-analysis";

/**
 * Unter-/Ober-/Links-/Rechts-/Mittelsummen. Props: f, a, b, n (Start, 1…200), art, x, y.
 * Zeigt Rechtecke, Summenwert, das (numerische) Integral und die Differenz.
 */

const ARTEN: { wert: RiemannArt; label: string }[] = [
  { wert: "unter", label: "Untersumme" },
  { wert: "ober", label: "Obersumme" },
  { wert: "links", label: "linke Ränder" },
  { wert: "rechts", label: "rechte Ränder" },
  { wert: "mitte", label: "Mittelpunkte" },
];

export function Riemann({ props }: WidgetProps) {
  const fText = text(props, "f", "x^2");
  const f = funktion(fText) ?? (() => NaN);
  let a = zahlTerm(props, "a", 0);
  let b = zahlTerm(props, "b", 2);
  if (a > b) [a, b] = [b, a];
  if (a === b) b = a + 1;
  const x = achse(props, "x", [a - 0.25 * (b - a), b + 0.25 * (b - a)]);
  const y = autoY(props, [f], x, [0]);
  const artStart = ARTEN.some((o) => o.wert === props.art) ? (props.art as RiemannArt) : "unter";
  const [art, setArt] = useState<RiemannArt>(artStart);
  const [n, setN] = useState(() => Math.round(begrenze(zahlTerm(props, "n", 4), 1, 200)));

  const { rechtecke, summe } = riemann(f, a, b, n, art);
  const unter = riemann(f, a, b, n, "unter").summe;
  const ober = riemann(f, a, b, n, "ober").summe;
  const integral = simpson(f, a, b);
  const dx = (b - a) / n;
  const name = ARTEN.find((o) => o.wert === art)!.label;

  return (
    <div>
      <Umschalter legende="Stützstellen:" optionen={ARTEN} wert={art} setze={setArt} />
      <Koordinaten
        x={x}
        y={y}
        beschreibung={`Graph von f(x) = ${fText} zwischen ${zahlSig(a)} und ${zahlSig(b)} mit ${n} Rechtecken (${name}). Summe ${zahlSig(summe, 6)}, Integral ${zahlSig(integral, 6)}.`}
      >
        {(k) => (
          <>
            {rechtecke.map((r, i) =>
              Number.isFinite(r.hoehe) ? (
                <rect
                  key={i}
                  x={k.px(r.x0)}
                  width={Math.max(0.5, k.px(r.x1) - k.px(r.x0))}
                  y={Math.min(k.py(r.hoehe), k.py(0))}
                  height={Math.abs(k.py(r.hoehe) - k.py(0))}
                  fill={r.hoehe >= 0 ? FARBEN[0] : FARBEN[1]}
                  fillOpacity={0.2}
                  stroke={n <= 60 ? (r.hoehe >= 0 ? FARBEN[0] : FARBEN[1]) : "none"}
                  strokeWidth={1}
                />
              ) : null,
            )}
            {[a, b].map((g, i) => (
              <line key={i} x1={k.px(g)} x2={k.px(g)} y1={k.py(y[0])} y2={k.py(y[1])} stroke="var(--color-ink-faint)" strokeDasharray="4 4" />
            ))}
            <path d={graphPfad(f, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} />
          </>
        )}
      </Koordinaten>
      <div className="regler-gruppe">
        <Regler label="n" min={1} max={200} step={1} wert={n} setze={(v) => setN(Math.round(v))} beschreibung={`${n} Rechtecke`} />
      </div>
      <div className="widget-info">
        <Formel
          block
          tex={`\\Delta x = \\frac{b-a}{n} = ${texZahl(dx, 4)}, \\qquad S_{${n}} = \\sum_{i=1}^{${n}} f(\\xi_i)\\,\\Delta x = ${texZahl(summe, 6)}, \\qquad \\int_{${texZahl(a)}}^{${texZahl(b)}} f(x)\\,\\mathrm dx \\approx ${texZahl(integral, 6)}`}
        />
      </div>
      <Kennwerte
        werte={[
          { name: `${name}:`, wert: zahlSig(summe, 6) },
          { name: "Integral ≈", wert: zahlSig(integral, 6) },
          { name: "Differenz:", wert: zahlSig(summe - integral, 3) },
          { name: "Obersumme − Untersumme:", wert: zahlSig(ober - unter, 3) },
        ]}
      />
      {Number.isNaN(integral) ? <Hinweis art="warnung">f ist auf [a; b] nicht überall definiert, das Integral ist so nicht berechenbar.</Hinweis> : null}
      <Hinweis>
        Rechtecke unter der x-Achse zählen negativ. Je größer n, desto enger liegen Unter- und Obersumme beisammen; ihr gemeinsamer Grenzwert ist das bestimmte Integral.
      </Hinweis>
    </div>
  );
}
