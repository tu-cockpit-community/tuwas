"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { bogenPfad, bool, Formel, Kennwerte, Legende, rahmen, Regler, useZiehen, Ziehpunkt, zahlTerm } from "./gemeinsam";
import { exakteWerte, piBruch, zahlFest } from "./format";

/**
 * Einheitskreis: Winkel per Ziehen/Regler/Pfeiltasten; sin, cos, tan als Strecken; daneben Sinus-
 * und Kosinuskurve mit mitlaufendem Punkt. Props: winkel (Grad, Start), kurve (bool).
 */

export function Einheitskreis({ props }: WidgetProps) {
  const zeigeKurve = bool(props, "kurve", true);
  const [grad, setGrad] = useState(() => ((zahlTerm(props, "winkel", 30) % 360) + 360) % 360);
  const rad = (grad * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  const tanDef = Math.abs(c) > 1e-9;
  const t = tanDef ? s / c : NaN;
  const ex = exakteWerte(grad);
  const pi = piBruch(grad);

  const bereich: [number, number] = [-1.45, 1.45];
  const abb = rahmen(bereich, bereich, 420, 360, true);
  const ziehen = useZiehen<"P">(abb, (_id, wx, wy) => {
    if (Math.hypot(wx, wy) < 1e-6) return;
    // atan2 liefert den Winkel im richtigen Quadranten
    const w = (Math.atan2(wy, wx) * 180) / Math.PI;
    setGrad(Math.round(((w % 360) + 360) % 360));
  });

  const beschreibung = `Einheitskreis mit Winkel α = ${zahlFest(grad, 1)}°. Punkt P = (cos α | sin α) = (${zahlFest(c, 3)} | ${zahlFest(s, 3)}). tan α = ${tanDef ? zahlFest(t, 3) : "nicht definiert"}.`;

  return (
    <div>
      <div className={zeigeKurve ? "mw-zwei" : undefined}>
        <Koordinaten x={bereich} y={bereich} breite={420} gleich beschreibung={beschreibung} svgRef={ziehen.svgRef} {...ziehen.svg}>
          {(k) => {
            const r = k.px(1) - k.px(0);
            return (
              <>
                <circle cx={k.px(0)} cy={k.py(0)} r={r} fill="none" stroke="var(--color-ink-faint)" strokeWidth={1.4} />
                <line x1={k.px(1)} x2={k.px(1)} y1={k.py(bereich[0])} y2={k.py(bereich[1])} stroke="var(--color-line-strong)" strokeDasharray="3 4" />
                <path d={bogenPfad(k, 0.22, 0, grad)} fill="none" stroke={FARBEN[3]} strokeWidth={1.8} />
                <text x={k.px(0.32 * Math.cos(rad / 2))} y={k.py(0.32 * Math.sin(rad / 2)) + 4} className="plot-label" textAnchor="middle">
                  α
                </text>
                {tanDef ? (
                  <>
                    <line x1={k.px(c)} y1={k.py(s)} x2={k.px(1)} y2={k.py(t)} stroke={FARBEN[2]} strokeWidth={1.2} strokeDasharray="5 4" />
                    <line x1={k.px(1)} y1={k.py(0)} x2={k.px(1)} y2={k.py(t)} stroke={FARBEN[2]} strokeWidth={3.5} />
                    {Math.abs(t) < 1.35 && Math.abs(t) > 0.12 ? (
                      <text x={k.px(1) + 6} y={k.py(t / 2) + 4} className="plot-label">
                        tan α
                      </text>
                    ) : null}
                  </>
                ) : null}
                <line x1={k.px(0)} y1={k.py(0)} x2={k.px(c)} y2={k.py(s)} stroke="var(--color-ink-muted)" strokeWidth={1.6} />
                <line x1={k.px(0)} y1={k.py(0)} x2={k.px(c)} y2={k.py(0)} stroke={FARBEN[0]} strokeWidth={3.5} />
                <line x1={k.px(c)} y1={k.py(0)} x2={k.px(c)} y2={k.py(s)} stroke={FARBEN[1]} strokeWidth={3.5} />
                {Math.abs(c) > 0.25 ? (
                  <text x={k.px(c / 2)} y={k.py(0) + (s >= 0 ? 18 : -8)} textAnchor="middle" className="plot-label">
                    cos α
                  </text>
                ) : null}
                {Math.abs(s) > 0.2 ? (
                  <text x={k.px(c) + (c >= 0 ? 6 : -6)} y={k.py(s / 2) + 4} textAnchor={c >= 0 ? "start" : "end"} className="plot-label">
                    sin α
                  </text>
                ) : null}
                <Ziehpunkt
                  cx={k.px(c)}
                  cy={k.py(s)}
                  farbe={FARBEN[3]}
                  label={`Punkt P auf dem Einheitskreis, α = ${zahlFest(grad, 1)} Grad`}
                  onPointerDown={ziehen.starte("P")}
                  taste={(dx, dy, gross) => {
                    const schritt = (gross ? 15 : 1) * (dx !== 0 ? dx : dy);
                    setGrad((alt) => (((Math.round(alt) + schritt) % 360) + 360) % 360);
                  }}
                />
              </>
            );
          }}
        </Koordinaten>
        {zeigeKurve ? (
          <Koordinaten x={[0, 2 * Math.PI]} y={[-1.45, 1.45]} breite={520} hoehe={360} piAchse achsenX="α" beschreibung={`Sinus- und Kosinuskurve, markiert bei α = ${zahlFest(rad, 3)}`}>
            {(k) => (
              <>
                <line x1={k.px(rad)} x2={k.px(rad)} y1={k.py(-1.45)} y2={k.py(1.45)} stroke="var(--color-line-strong)" strokeDasharray="3 4" />
                <path d={graphPfad(Math.cos, k)} fill="none" stroke={FARBEN[0]} strokeWidth={2.2} />
                <path d={graphPfad(Math.sin, k)} fill="none" stroke={FARBEN[1]} strokeWidth={2.2} />
                <line x1={k.px(rad)} x2={k.px(rad)} y1={k.py(0)} y2={k.py(s)} stroke={FARBEN[1]} strokeWidth={3} />
                <circle cx={k.px(rad)} cy={k.py(c)} r={5.5} fill={FARBEN[0]} />
                <circle cx={k.px(rad)} cy={k.py(s)} r={5.5} fill={FARBEN[1]} />
              </>
            )}
          </Koordinaten>
        ) : null}
      </div>
      <Legende
        eintraege={[
          { farbe: FARBEN[0], label: "cos α" },
          { farbe: FARBEN[1], label: "sin α" },
          { farbe: FARBEN[2], label: "tan α (Tangentenabschnitt bei x = 1)" },
        ]}
      />
      <div className="regler-gruppe">
        <Regler label="α" min={0} max={359} step={1} wert={Math.round(grad)} anzeige={`${zahlFest(grad, 1)}°`} beschreibung={`${zahlFest(grad, 1)} Grad`} setze={setGrad} />
      </div>
      <Kennwerte
        werte={[
          { name: "Gradmaß", wert: `${zahlFest(grad, 1)}°` },
          { name: "Bogenmaß", wert: `${pi ? `${pi} ≈ ` : ""}${zahlFest(rad, 4)}` },
          { name: "sin α =", wert: zahlFest(s, 4), farbe: FARBEN[1] },
          { name: "cos α =", wert: zahlFest(c, 4), farbe: FARBEN[0] },
          { name: "tan α =", wert: tanDef ? zahlFest(t, 4) : "nicht definiert", farbe: FARBEN[2] },
        ]}
      />
      {ex ? (
        <div className="widget-info">
          <Formel
            block
            tex={`\\sin ${Math.round(grad)}^\\circ = ${ex.sin},\\quad \\cos ${Math.round(grad)}^\\circ = ${ex.cos},\\quad \\tan ${Math.round(grad)}^\\circ = ${ex.tan ?? "\\text{nicht definiert}"}`}
          />
        </div>
      ) : null}
    </div>
  );
}
