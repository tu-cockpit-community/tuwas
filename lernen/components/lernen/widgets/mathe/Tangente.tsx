"use client";

import { useEffect, useRef, useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { text, type WidgetProps } from "../vertrag";
import { achse, autoY, begrenze, bewegungReduziert, Formel, funktion, Hinweis, Kennwerte, Legende, rahmen, Regler, useZiehen, Ziehpunkt, zahlTerm } from "./gemeinsam";
import { texKlammer, texZahl, zahlSig } from "./format";
import { ableitung, differenzierbar, einseitigeAbleitungen } from "./rechnen-analysis";

/**
 * Differenzenquotient -> Ableitung. Props: f, x0, h, x, y, ableitung (Term oder true = numerisch),
 * y_ableitung ([a,b] fuer den Graphen von f').
 * Der h-Regler ist kubisch skaliert: nahe 0 sehr fein, damit h → 0 sichtbar wird.
 */

const U_MAX = 100;
const uZuH = (u: number, hMax: number) => Math.sign(u) * hMax * (Math.abs(u) / U_MAX) ** 3;
const hZuU = (h: number, hMax: number) => begrenze(Math.sign(h) * U_MAX * Math.cbrt(Math.min(1, Math.abs(h) / hMax)), -U_MAX, U_MAX);

export function Tangente({ props }: WidgetProps) {
  const fText = text(props, "f", "x^2/2");
  const x0Start = zahlTerm(props, "x0", 1);
  const x = achse(props, "x", [x0Start - 2.5, x0Start + 2.5]);
  const hMax = (x[1] - x[0]) / 2;
  const f = funktion(fText) ?? (() => NaN);
  const y = autoY(props, [f], x);
  const ablText = typeof props.ableitung === "string" ? props.ableitung : null;
  const zeigeAbleitung = ablText !== null || props.ableitung === true;
  const fStrich = ablText ? (funktion(ablText) ?? ((t: number) => ableitung(f, t))) : (t: number) => ableitung(f, t);

  const [x0, setX0] = useState(() => begrenze(zahlTerm(props, "x0", 1), x[0], x[1]));
  const [u, setU] = useState(() => hZuU(zahlTerm(props, "h", 1.5), hMax));
  const animation = useRef<number | null>(null);
  useEffect(() => () => {
    if (animation.current !== null) cancelAnimationFrame(animation.current);
  }, []);

  const h = uZuH(u, hMax);
  const fx0 = f(x0);
  const fxh = f(x0 + h);
  const dq = h !== 0 ? (fxh - fx0) / h : NaN;
  const diffbar = differenzierbar(f, x0);
  const d = diffbar ? ableitung(f, x0) : NaN;
  const [links, rechts] = einseitigeAbleitungen(f, x0);

  const abb = rahmen(x, y);
  const ziehen = useZiehen<"P" | "Q">(abb, (id, wx) => {
    if (id === "P") setX0(begrenze(wx, x[0], x[1]));
    else setU(hZuU(wx - x0, hMax));
  });

  const stoppe = () => {
    if (animation.current !== null) cancelAnimationFrame(animation.current);
    animation.current = null;
  };
  const spieleAb = () => {
    stoppe();
    const vz = u < 0 ? -1 : 1;
    const ziel = 2 * vz;
    const start = Math.abs(u) < 5 ? 80 * vz : u;
    if (bewegungReduziert()) {
      setU(ziel);
      return;
    }
    const t0 = performance.now();
    const dauer = 2600;
    const tick = (jetzt: number) => {
      const s = Math.min(1, (jetzt - t0) / dauer);
      setU(start + (ziel - start) * (1 - (1 - s) ** 2));
      animation.current = s < 1 ? requestAnimationFrame(tick) : null;
    };
    animation.current = requestAnimationFrame(tick);
  };

  const gerade = (m: number, k: { x: [number, number] }) => ({
    x1: k.x[0],
    y1: fx0 + m * (k.x[0] - x0),
    x2: k.x[1],
    y2: fx0 + m * (k.x[1] - x0),
  });

  const beschreibung = `Graph von f(x) = ${fText}. Punkt P bei x₀ = ${zahlSig(x0)}, Q bei x₀ + h mit h = ${zahlSig(h)}. Sekantensteigung ${zahlSig(dq)}, Tangentensteigung ${diffbar ? zahlSig(d) : "nicht definiert"}.`;

  // y-Bereich fuer den Graphen von f'
  let yAbl = achse(props, "y_ableitung", [0, 0]);
  if (zeigeAbleitung && yAbl[0] === yAbl[1]) {
    const proben = Array.from({ length: 121 }, (_, i) => fStrich(x[0] + ((x[1] - x[0]) * i) / 120)).filter((v) => Number.isFinite(v) && Math.abs(v) < 1e6);
    const lo = proben.length ? Math.min(...proben) : -1;
    const hi = proben.length ? Math.max(...proben) : 1;
    const rand = Math.max(0.5, (hi - lo) * 0.12);
    yAbl = [Math.min(lo - rand, -0.5), Math.max(hi + rand, 0.5)];
  }

  return (
    <div>
      <Koordinaten x={x} y={y} beschreibung={beschreibung} svgRef={ziehen.svgRef} {...ziehen.svg}>
        {(k) => {
          const px0 = k.px(x0);
          const pxh = k.px(x0 + h);
          const sek = gerade(dq, k);
          const tan = gerade(d, k);
          const zeigeDreieck = h !== 0 && Number.isFinite(fxh) && Math.abs(pxh - px0) > 3;
          return (
            <>
              <path d={graphPfad(f, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} />
              {diffbar && Number.isFinite(d) ? (
                <line x1={k.px(tan.x1)} y1={k.py(tan.y1)} x2={k.px(tan.x2)} y2={k.py(tan.y2)} stroke={FARBEN[1]} strokeWidth={2} />
              ) : null}
              {h !== 0 && Number.isFinite(dq) ? (
                <line x1={k.px(sek.x1)} y1={k.py(sek.y1)} x2={k.px(sek.x2)} y2={k.py(sek.y2)} stroke={FARBEN[2]} strokeWidth={1.8} strokeDasharray="7 5" />
              ) : null}
              {zeigeDreieck ? (
                <g>
                  <path
                    d={`M${px0},${k.py(fx0)}L${pxh},${k.py(fx0)}L${pxh},${k.py(fxh)}`}
                    fill="none"
                    stroke={FARBEN[2]}
                    strokeWidth={1.6}
                  />
                  {Math.abs(pxh - px0) > 26 ? (
                    <text x={(px0 + pxh) / 2} y={k.py(fx0) + (fxh >= fx0 ? 16 : -8)} textAnchor="middle" className="plot-label">
                      h
                    </text>
                  ) : null}
                  {Math.abs(k.py(fxh) - k.py(fx0)) > 22 ? (
                    <text x={pxh + (h > 0 ? 8 : -8)} y={(k.py(fx0) + k.py(fxh)) / 2 + 4} textAnchor={h > 0 ? "start" : "end"} className="plot-label">
                      Δy
                    </text>
                  ) : null}
                </g>
              ) : null}
              {Number.isFinite(fxh) && h !== 0 ? (
                <Ziehpunkt
                  cx={pxh}
                  cy={k.py(fxh)}
                  r={5.5}
                  farbe={FARBEN[2]}
                  label={`Q bei x₀ + h = ${zahlSig(x0 + h)}`}
                  onPointerDown={ziehen.starte("Q")}
                  taste={(dx, _dy, gross) => setU((alt) => begrenze(alt + dx * (gross ? 10 : 1), -U_MAX, U_MAX))}
                />
              ) : null}
              <Ziehpunkt
                cx={px0}
                cy={k.py(fx0)}
                farbe={FARBEN[1]}
                label={`P bei x₀ = ${zahlSig(x0)}`}
                onPointerDown={ziehen.starte("P")}
                taste={(dx, _dy, gross) => setX0((alt) => begrenze(alt + (dx * (x[1] - x[0])) / (gross ? 20 : 200), x[0], x[1]))}
              />
            </>
          );
        }}
      </Koordinaten>
      <Legende
        eintraege={[
          { farbe: FARBEN[0], label: `f(x) = ${fText}` },
          { farbe: FARBEN[2], label: "Sekante durch P und Q", gestrichelt: true },
          { farbe: FARBEN[1], label: "Tangente in P" },
        ]}
      />
      <div className="regler-gruppe">
        <Regler label="x₀" min={x[0]} max={x[1]} step={(x[1] - x[0]) / 500} wert={x0} anzeige={zahlSig(x0)} setze={setX0} />
        <Regler
          label="h"
          min={-U_MAX}
          max={U_MAX}
          step={0.5}
          wert={u}
          anzeige={zahlSig(h, 3)}
          beschreibung={`h = ${zahlSig(h, 3)}`}
          setze={(v) => {
            stoppe();
            setU(v);
          }}
        />
      </div>
      <div className="mw-aktionen">
        <button type="button" className="knopf knopf-klein" onClick={spieleAb}>
          h → 0 abspielen
        </button>
      </div>
      <div className="widget-info">
        <Formel
          block
          tex={
            h === 0
              ? `\\frac{f(x_0+h)-f(x_0)}{h}\\ \\text{ist für } h = 0 \\text{ nicht definiert – nur der Grenzwert } h \\to 0`
              : `\\frac{f(x_0+h)-f(x_0)}{h} = \\frac{${texZahl(fxh)} - ${texKlammer(fx0)}}{${texZahl(h, 3)}} = ${texZahl(dq, 6)}`
          }
        />
      </div>
      <Kennwerte
        werte={[
          { name: "f(x₀) =", wert: zahlSig(fx0, 5) },
          { name: "Sekantensteigung =", wert: zahlSig(dq, 6), farbe: FARBEN[2] },
          { name: "f′(x₀) ≈", wert: diffbar ? zahlSig(d, 6) : "existiert nicht", farbe: FARBEN[1] },
          ...(diffbar && h !== 0 ? [{ name: "Abweichung", wert: zahlSig(Math.abs(dq - d), 3) }] : []),
        ]}
      />
      {!diffbar && Number.isFinite(fx0) ? (
        <Hinweis art="warnung">
          f ist an x₀ = {zahlSig(x0)} nicht differenzierbar: linksseitige Steigung ≈ {zahlSig(links, 4)}, rechtsseitige ≈ {zahlSig(rechts, 4)}. Die
          Sekantensteigungen für h &lt; 0 und h &gt; 0 streben zu verschiedenen Werten.
        </Hinweis>
      ) : null}
      {zeigeAbleitung ? (
        <>
          <Koordinaten
            x={x}
            y={yAbl}
            hoehe={240}
            achsenY="f′"
            beschreibung={`Graph der Ableitung f′${ablText ? `(x) = ${ablText}` : " (numerisch)"} mit Punkt (x₀ | f′(x₀))`}
          >
            {(k) => (
              <>
                <path d={graphPfad(fStrich, k)} fill="none" stroke={FARBEN[3]} strokeWidth={2.4} />
                <line x1={k.px(x0)} x2={k.px(x0)} y1={k.py(yAbl[0])} y2={k.py(yAbl[1])} stroke="var(--color-line-strong)" strokeDasharray="3 4" />
                {h !== 0 && Number.isFinite(dq) ? <circle cx={k.px(x0)} cy={k.py(dq)} r={5} fill="var(--color-surface-raised)" stroke={FARBEN[2]} strokeWidth={2} /> : null}
                {Number.isFinite(fStrich(x0)) ? <circle cx={k.px(x0)} cy={k.py(fStrich(x0))} r={5.5} fill={FARBEN[3]} /> : null}
              </>
            )}
          </Koordinaten>
          <Legende
            eintraege={[
              { farbe: FARBEN[3], label: ablText ? `f′(x) = ${ablText}` : "f′(x) (numerisch)" },
              { farbe: FARBEN[2], label: "Sekantensteigung bei x₀ (offener Punkt)" },
            ]}
          />
        </>
      ) : null}
    </div>
  );
}
