"use client";

import { useState } from "react";
import { Koordinaten, FARBEN } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { begrenze, bogenPfad, ebenenAusschnitt, Formel, Hinweis, Kennwerte, paar, Pfeil, rahmen, textListe, useZiehen, Ziehpunkt, zahlTerm } from "./gemeinsam";
import { texKlammer, texZahl, zahlFest } from "./format";

/**
 * 2D-Vektoren a, b mit ziehbaren Spitzen. Props: a [x, y], b [x, y],
 * zeige: Liste aus "summe", "differenz", "skalarprodukt", "winkel", "projektion", "flaeche"
 * (im Widget umschaltbar), bereich (halbe Achsenlaenge) oder x/y; ohne diese wird der Ausschnitt aus
 * a, b, a ± b gewaehlt (mind. ±5), raster (Standard 0,5; 0 = frei).
 */

type Zeige = "summe" | "differenz" | "skalarprodukt" | "winkel" | "projektion" | "flaeche";
const OPTIONEN: { wert: Zeige; label: string }[] = [
  { wert: "summe", label: "a + b" },
  { wert: "differenz", label: "a − b" },
  { wert: "skalarprodukt", label: "Skalarprodukt" },
  { wert: "winkel", label: "Winkel" },
  { wert: "projektion", label: "Projektion von b auf a" },
  { wert: "flaeche", label: "Parallelogrammfläche" },
];

type V = [number, number];
const vek = (v: V) => `(${zahlFest(v[0], 2)} | ${zahlFest(v[1], 2)})`;
const texVek = (v: V) => `\\begin{pmatrix} ${texZahl(v[0], 4)} \\\\ ${texZahl(v[1], 4)} \\end{pmatrix}`;

export function Vektoren({ props }: WidgetProps) {
  const rasterProp = zahlTerm(props, "raster", 0.5);
  const raster = rasterProp > 0 ? rasterProp : 0;
  const [a, setA] = useState<V>(() => paar(props, "a", [3, 1]));
  const [b, setB] = useState<V>(() => paar(props, "b", [1, 2]));
  const [zeige, setZeige] = useState<Set<Zeige>>(() => {
    const roh = textListe(props, "zeige").filter((z): z is Zeige => OPTIONEN.some((o) => o.wert === z));
    return new Set(roh.length ? roh : ["summe", "skalarprodukt", "winkel"]);
  });
  // Ausschnitt einmal aus a, b, a + b, a − b bestimmen; bleibt beim Ziehen stabil
  const [aus] = useState(() =>
    ebenenAusschnitt(props, [a, b, [a[0] + b[0], a[1] + b[1]], [a[0] - b[0], a[1] - b[1]]], 5),
  );
  const R = Math.max(-aus.x[0], aus.x[1], -aus.y[0], aus.y[1]);
  const umschalten = (z: Zeige) =>
    setZeige((alt) => {
      const neu = new Set(alt);
      if (neu.has(z)) neu.delete(z);
      else neu.add(z);
      return neu;
    });

  const abb = rahmen(aus.x, aus.y, 520, 360, true);
  const fang = (v: number, achse: [number, number]) => begrenze(raster ? Math.round(v / raster) * raster : v, achse[0], achse[1]);
  const fangV = (x: number, y: number): V => [fang(x, aus.x), fang(y, aus.y)];
  const ziehen = useZiehen<"a" | "b">(abb, (id, wx, wy) => (id === "a" ? setA : setB)(fangV(wx, wy)));
  const schritt = raster || 0.1;
  const taste = (setze: (f: (v: V) => V) => void) => (dx: number, dy: number, gross: boolean) =>
    setze((v) => fangV(v[0] + dx * schritt * (gross ? 4 : 1), v[1] + dy * schritt * (gross ? 4 : 1)));

  const summe: V = [a[0] + b[0], a[1] + b[1]];
  const diff: V = [a[0] - b[0], a[1] - b[1]];
  const skalar = a[0] * b[0] + a[1] * b[1];
  const la = Math.hypot(...a);
  const lb = Math.hypot(...b);
  const det = a[0] * b[1] - a[1] * b[0];
  const winkelDef = la > 1e-12 && lb > 1e-12;
  // atan2(|det|, Skalarprodukt) ist auch fuer fast parallele Vektoren genau (arccos ist dort schlecht konditioniert)
  const winkel = winkelDef ? (Math.atan2(Math.abs(det), skalar) * 180) / Math.PI : NaN;
  const proj: V | null = la > 1e-12 ? [(skalar / (la * la)) * a[0], (skalar / (la * la)) * a[1]] : null;
  const zeigt = (z: Zeige) => zeige.has(z);

  const beschreibung = `Vektoren a = ${vek(a)} und b = ${vek(b)}.${zeigt("summe") ? ` a + b = ${vek(summe)}.` : ""}${zeigt("differenz") ? ` a − b = ${vek(diff)}.` : ""}${
    zeigt("skalarprodukt") ? ` a · b = ${zahlFest(skalar, 3)}.` : ""
  }${zeigt("winkel") && winkelDef ? ` Winkel ${zahlFest(winkel, 2)} Grad.` : ""}`;

  const formeln: string[] = [];
  if (zeigt("summe")) formeln.push(`\\vec a + \\vec b = ${texVek(summe)}`);
  if (zeigt("differenz")) formeln.push(`\\vec a - \\vec b = ${texVek(diff)}`);
  if (zeigt("skalarprodukt")) formeln.push(`\\vec a \\cdot \\vec b = ${texZahl(a[0])}\\cdot ${texKlammer(b[0])} + ${texKlammer(a[1])}\\cdot ${texKlammer(b[1])} = ${texZahl(skalar)}`);
  if (zeigt("winkel") && winkelDef)
    formeln.push(`\\cos\\varphi = \\frac{\\vec a\\cdot\\vec b}{|\\vec a|\\,|\\vec b|} = \\frac{${texZahl(skalar)}}{${texZahl(la)}\\cdot ${texZahl(lb)}} \\;\\Rightarrow\\; \\varphi \\approx ${texZahl(winkel, 4)}^\\circ`);
  if (zeigt("projektion") && proj) formeln.push(`\\vec b_a = \\frac{\\vec a\\cdot\\vec b}{|\\vec a|^2}\\,\\vec a = ${texVek(proj)}`);
  if (zeigt("flaeche")) formeln.push(`A = \\left|\\det(\\vec a, \\vec b)\\right| = |${texZahl(a[0])}\\cdot ${texKlammer(b[1])} - ${texKlammer(a[1])}\\cdot ${texKlammer(b[0])}| = ${texZahl(Math.abs(det))}`);

  const ga = (Math.atan2(a[1], a[0]) * 180) / Math.PI;
  const gb = (Math.atan2(b[1], b[0]) * 180) / Math.PI;
  let dg = gb - ga;
  if (dg > 180) dg -= 360;
  if (dg < -180) dg += 360;

  return (
    <div>
      <fieldset className="mw-umschalter">
        <legend>Anzeigen:</legend>
        {OPTIONEN.map((o) => (
          <button key={o.wert} type="button" className={`knopf knopf-klein${zeigt(o.wert) ? " knopf-gewaehlt" : ""}`} aria-pressed={zeigt(o.wert)} onClick={() => umschalten(o.wert)}>
            {o.label}
          </button>
        ))}
      </fieldset>
      <Koordinaten x={aus.x} y={aus.y} breite={520} gleich beschreibung={beschreibung} svgRef={ziehen.svgRef} {...ziehen.svg}>
        {(k) => (
          <>
            {zeigt("flaeche") ? (
              <polygon
                points={[[0, 0], a, summe, b].map((p) => `${k.px(p[0])},${k.py(p[1])}`).join(" ")}
                fill={FARBEN[3]}
                fillOpacity={0.14}
                stroke="none"
              />
            ) : null}
            {zeigt("winkel") && winkelDef ? <path d={bogenPfad(k, Math.min(la, lb, R / 4) * 0.45, ga, ga + dg)} fill="none" stroke={FARBEN[4]} strokeWidth={2} /> : null}
            {zeigt("summe") || zeigt("flaeche") ? (
              <>
                <Pfeil k={k} von={a} bis={summe} farbe={1} gestrichelt breite={1.4} />
                <Pfeil k={k} von={b} bis={summe} farbe={0} gestrichelt breite={1.4} />
              </>
            ) : null}
            {zeigt("summe") ? <Pfeil k={k} bis={summe} farbe={2} breite={3} /> : null}
            {zeigt("differenz") ? (
              <>
                <Pfeil k={k} von={b} bis={a} farbe={3} gestrichelt breite={1.6} />
                <Pfeil k={k} bis={diff} farbe={3} breite={3} />
              </>
            ) : null}
            {zeigt("projektion") && proj ? (
              <>
                <line x1={k.px(b[0])} y1={k.py(b[1])} x2={k.px(proj[0])} y2={k.py(proj[1])} stroke="var(--color-ink-faint)" strokeDasharray="4 4" />
                <Pfeil k={k} bis={proj} farbe={4} breite={4} />
              </>
            ) : null}
            <Pfeil k={k} bis={a} farbe={0} />
            <Pfeil k={k} bis={b} farbe={1} />
            <text x={k.px(a[0]) + 9} y={k.py(a[1]) - 9} className="plot-label">
              a
            </text>
            <text x={k.px(b[0]) + 9} y={k.py(b[1]) - 9} className="plot-label">
              b
            </text>
            {zeigt("summe") ? (
              <text x={k.px(summe[0]) + 9} y={k.py(summe[1]) - 9} className="plot-label">
                a + b
              </text>
            ) : null}
            {zeigt("differenz") ? (
              <text x={k.px(diff[0]) + 9} y={k.py(diff[1]) + 16} className="plot-label">
                a − b
              </text>
            ) : null}
            <Ziehpunkt cx={k.px(a[0])} cy={k.py(a[1])} farbe={FARBEN[0]} label={`Spitze von a = ${vek(a)}`} onPointerDown={ziehen.starte("a")} taste={taste(setA)} />
            <Ziehpunkt cx={k.px(b[0])} cy={k.py(b[1])} farbe={FARBEN[1]} label={`Spitze von b = ${vek(b)}`} onPointerDown={ziehen.starte("b")} taste={taste(setB)} />
          </>
        )}
      </Koordinaten>
      <Kennwerte
        werte={[
          { name: "a =", wert: `${vek(a)}, |a| = ${zahlFest(la, 3)}`, farbe: FARBEN[0] },
          { name: "b =", wert: `${vek(b)}, |b| = ${zahlFest(lb, 3)}`, farbe: FARBEN[1] },
          ...(zeigt("skalarprodukt") ? [{ name: "a · b =", wert: zahlFest(skalar, 3) }] : []),
          ...(zeigt("winkel") ? [{ name: "φ =", wert: winkelDef ? `${zahlFest(winkel, 2)}°` : "nicht definiert (Nullvektor)", farbe: FARBEN[4] }] : []),
          ...(zeigt("flaeche") ? [{ name: "Fläche =", wert: zahlFest(Math.abs(det), 3), farbe: FARBEN[3] }] : []),
        ]}
      />
      {formeln.length ? (
        <div className="widget-info">
          {formeln.map((f, i) => (
            <Formel key={i} block tex={f} />
          ))}
        </div>
      ) : null}
      {winkelDef && Math.abs(skalar) < 1e-9 && (zeigt("skalarprodukt") || zeigt("winkel")) ? <Hinweis art="ok">a · b = 0: Die Vektoren stehen normal (senkrecht) aufeinander.</Hinweis> : null}
      {winkelDef && Math.abs(det) < 1e-9 ? <Hinweis>a und b sind parallel (kollinear): Die Parallelogrammfläche ist 0.</Hinweis> : null}
    </div>
  );
}
