"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, type Abbildung } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { begrenze, bogenPfad, ebenenAusschnitt, Formel, Hinweis, Kennwerte, paar, Pfeil, rahmen, Regler, Umschalter, useZiehen, Ziehpunkt, zahlTerm } from "./gemeinsam";
import { texKlammer, texZahl, zahlFest } from "./format";
import { argGrad, betrag, durch, k as kz, mal, minus, plus, potenz, wurzeln, type K } from "./rechnen-komplex";

/**
 * Gausssche Zahlenebene. Props: z1 [re, im], z2 [re, im], operation (summe | differenz | produkt |
 * quotient | potenz | wurzeln), n (Exponent bzw. Wurzelgrad), bereich (halbe Achsenlaenge) oder x/y;
 * ohne diese wird der Ausschnitt aus den Startwerten gewaehlt (mind. ±4), raster (Fangraster beim Ziehen, Standard 0,5; 0 = frei).
 */

type Op = "summe" | "differenz" | "produkt" | "quotient" | "potenz" | "wurzeln";
const OPS: { wert: Op; label: string }[] = [
  { wert: "summe", label: "z₁ + z₂" },
  { wert: "differenz", label: "z₁ − z₂" },
  { wert: "produkt", label: "z₁ · z₂" },
  { wert: "quotient", label: "z₁ : z₂" },
  { wert: "potenz", label: "z₁ⁿ" },
  { wert: "wurzeln", label: "ⁿ√z₁" },
];

/** kartesisch als Text: "2 + 1,5i" */
function kart(z: K): string {
  const re = zahlFest(z.re, 3);
  const im = zahlFest(Math.abs(z.im), 3);
  if (Math.abs(z.im) < 5e-4) return re;
  const imTeil = `${im === "1" ? "" : im}i`;
  if (Math.abs(z.re) < 5e-4) return `${z.im < 0 ? "−" : ""}${imTeil}`;
  return `${re} ${z.im < 0 ? "−" : "+"} ${imTeil}`;
}
function polar(z: K): string {
  const g = argGrad(z);
  return g === null ? "r = 0, φ nicht definiert" : `r = ${zahlFest(betrag(z), 3)}, φ = ${zahlFest(g, 2)}°`;
}
function texPolar(z: K): string {
  const g = argGrad(z);
  if (g === null) return "0";
  return `${texZahl(betrag(z), 4)}\\cdot\\left(\\cos ${texZahl(g, 4)}^\\circ + i\\sin ${texZahl(g, 4)}^\\circ\\right)`;
}
/** Winkel auf (−180°, 180°] */
function normWinkel(g: number): number {
  let w = ((g % 360) + 360) % 360;
  if (w > 180) w -= 360;
  return w;
}

function rechne(op: Op, z1: K, z2: K, n: number): K | null {
  if (op === "summe") return plus(z1, z2);
  if (op === "differenz") return minus(z1, z2);
  if (op === "produkt") return mal(z1, z2);
  if (op === "quotient") return durch(z1, z2);
  if (op === "potenz") return potenz(z1, n);
  return null;
}

export function Komplex({ props }: WidgetProps) {
  const rasterProp = zahlTerm(props, "raster", 0.5);
  const raster = rasterProp > 0 ? rasterProp : 0;
  const opStart = OPS.some((o) => o.wert === props.operation) ? (props.operation as Op) : "summe";
  const [op, setOp] = useState<Op>(opStart);
  const [z1, setZ1] = useState<K>(() => {
    const [a, b] = paar(props, "z1", [2, 1]);
    return kz(a, b);
  });
  const [z2, setZ2] = useState<K>(() => {
    const [a, b] = paar(props, "z2", [1, 2]);
    return kz(a, b);
  });
  const [n, setN] = useState(() => Math.round(begrenze(zahlTerm(props, "n", 3), 1, 12)));
  // Ausschnitt einmal aus den Startwerten (z1, z2, Ergebnis) bestimmen; bleibt beim Ziehen stabil
  const [aus] = useState(() => {
    const e = rechne(opStart, z1, z2, n);
    return ebenenAusschnitt(props, [[z1.re, z1.im], [z2.re, z2.im], ...(e ? ([[e.re, e.im]] as [number, number][]) : [])]);
  });
  const R = Math.max(-aus.x[0], aus.x[1], -aus.y[0], aus.y[1]);

  const abb = rahmen(aus.x, aus.y, 520, 360, true);
  const fang = (v: number, achse: [number, number]) => begrenze(raster ? Math.round(v / raster) * raster : v, achse[0], achse[1]);
  const fangZ = (re: number, im: number) => kz(fang(re, aus.x), fang(im, aus.y));
  const ziehen = useZiehen<"z1" | "z2">(abb, (id, wx, wy) => (id === "z1" ? setZ1 : setZ2)(fangZ(wx, wy)));
  const schritt = raster || 0.1;
  const taste = (setze: (f: (z: K) => K) => void) => (dx: number, dy: number, gross: boolean) =>
    setze((z) => fangZ(z.re + dx * schritt * (gross ? 4 : 1), z.im + dy * schritt * (gross ? 4 : 1)));

  const nWurzel = Math.max(2, n);
  const ergebnis = rechne(op, z1, z2, n);
  const ws = op === "wurzeln" ? wurzeln(z1, nWurzel) : [];
  const zeigeZ2 = op !== "potenz" && op !== "wurzeln";
  const ausserhalb = ergebnis !== null && (ergebnis.re < aus.x[0] || ergebnis.re > aus.x[1] || ergebnis.im < aus.y[0] || ergebnis.im > aus.y[1]);
  const g1 = argGrad(z1);
  const g2 = argGrad(z2);

  const beschreibung = `Gaußsche Zahlenebene. z₁ = ${kart(z1)}${zeigeZ2 ? `, z₂ = ${kart(z2)}` : ""}. ${
    op === "wurzeln" ? `${nWurzel}-te Wurzeln von z₁: ${ws.map(kart).join("; ")}` : ergebnis ? `Ergebnis ${kart(ergebnis)} (${polar(ergebnis)})` : "Ergebnis nicht definiert"
  }`;

  const winkelBoegen = (k: Abbildung) => {
    if (g1 === null) return null;
    const rb = R * 0.16;
    if (op === "produkt" && g2 !== null) {
      // Winkel addieren: erst φ₁, daran anschliessend φ₂
      return (
        <>
          <path d={bogenPfad(k, rb, 0, g1)} fill="none" stroke={FARBEN[0]} strokeWidth={2} />
          <path d={bogenPfad(k, rb * 1.35, g1, g1 + g2)} fill="none" stroke={FARBEN[1]} strokeWidth={2} />
        </>
      );
    }
    if (op === "quotient" && g2 !== null) {
      return (
        <>
          <path d={bogenPfad(k, rb, 0, g1)} fill="none" stroke={FARBEN[0]} strokeWidth={2} />
          <path d={bogenPfad(k, rb * 1.35, g1, g1 - g2)} fill="none" stroke={FARBEN[1]} strokeWidth={2} strokeDasharray="4 3" />
        </>
      );
    }
    if (op === "potenz") return <path d={bogenPfad(k, rb, 0, n * g1)} fill="none" stroke={FARBEN[2]} strokeWidth={1.6} />;
    return null;
  };

  let rechnung = "";
  if (ergebnis && g1 !== null) {
    const r1 = betrag(z1);
    const r2 = betrag(z2);
    if (op === "produkt" && g2 !== null)
      rechnung = `|z_1 z_2| = ${texZahl(r1)}\\cdot ${texZahl(r2)} = ${texZahl(r1 * r2)}, \\qquad \\varphi = ${texZahl(g1)}^\\circ + ${texKlammer(g2)}^\\circ = ${texZahl(g1 + g2)}^\\circ${
        Math.abs(normWinkel(g1 + g2) - (g1 + g2)) > 1e-9 ? ` \\;\\hat=\\; ${texZahl(normWinkel(g1 + g2))}^\\circ` : ""
      }`;
    if (op === "quotient" && g2 !== null)
      rechnung = `\\left|\\tfrac{z_1}{z_2}\\right| = \\tfrac{${texZahl(r1)}}{${texZahl(r2)}} = ${texZahl(r1 / r2)}, \\qquad \\varphi = ${texZahl(g1)}^\\circ - ${texKlammer(g2)}^\\circ = ${texZahl(g1 - g2)}^\\circ`;
    if (op === "potenz") rechnung = `|z_1^{${n}}| = ${texZahl(r1)}^{${n}} = ${texZahl(r1 ** n)}, \\qquad \\varphi = ${n}\\cdot ${texZahl(g1)}^\\circ = ${texZahl(n * g1)}^\\circ`;
    if (op === "summe") rechnung = `(${kart(z1)}) + (${kart(z2)}) = ${kart(ergebnis)}`.replace(/,/g, "{,}").replace(/−/g, "-");
    if (op === "differenz") rechnung = `(${kart(z1)}) - (${kart(z2)}) = ${kart(ergebnis)}`.replace(/,/g, "{,}").replace(/−/g, "-");
  }
  if (op === "wurzeln" && g1 !== null)
    rechnung = `w_k = \\sqrt[${nWurzel}]{${texZahl(betrag(z1))}}\\cdot\\left(\\cos\\tfrac{${texZahl(g1)}^\\circ + k\\cdot 360^\\circ}{${nWurzel}} + i \\sin\\tfrac{${texZahl(g1)}^\\circ + k\\cdot 360^\\circ}{${nWurzel}}\\right),\\ k = 0,\\dots,${nWurzel - 1}`;

  return (
    <div>
      <Umschalter legende="Operation:" optionen={OPS} wert={op} setze={setOp} />
      <Koordinaten x={aus.x} y={aus.y} breite={520} gleich achsenX="Re" achsenY="Im" beschreibung={beschreibung} svgRef={ziehen.svgRef} {...ziehen.svg}>
        {(k) => (
          <>
            {winkelBoegen(k)}
            {op === "summe" && ergebnis ? (
              <>
                <Pfeil k={k} von={[z1.re, z1.im]} bis={[ergebnis.re, ergebnis.im]} farbe={1} gestrichelt breite={1.6} />
                <Pfeil k={k} von={[z2.re, z2.im]} bis={[ergebnis.re, ergebnis.im]} farbe={0} gestrichelt breite={1.6} />
              </>
            ) : null}
            {op === "differenz" && ergebnis ? <Pfeil k={k} von={[z2.re, z2.im]} bis={[z1.re, z1.im]} farbe={2} gestrichelt breite={1.6} /> : null}
            {op === "potenz"
              ? Array.from({ length: n - 1 }, (_, i) => potenz(z1, i + 2)).map((p, i) => (
                  <circle key={i} cx={k.px(p.re)} cy={k.py(p.im)} r={3.5} fill={FARBEN[2]} fillOpacity={0.45} />
                ))
              : null}
            {op === "wurzeln" && ws.length > 1 ? (
              <>
                <circle cx={k.px(0)} cy={k.py(0)} r={k.px(betrag(ws[0])) - k.px(0)} fill="none" stroke="var(--color-ink-faint)" strokeDasharray="4 4" />
                <polygon points={ws.map((w) => `${k.px(w.re)},${k.py(w.im)}`).join(" ")} fill={FARBEN[2]} fillOpacity={0.1} stroke={FARBEN[2]} strokeWidth={1.6} />
                {ws.map((w, i) => (
                  <g key={i}>
                    <circle cx={k.px(w.re)} cy={k.py(w.im)} r={5} fill={FARBEN[2]} />
                    <text x={k.px(w.re) + 8} y={k.py(w.im) - 8} className="plot-label">
                      w{String(i).replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)])}
                    </text>
                  </g>
                ))}
              </>
            ) : null}
            {ergebnis ? <Pfeil k={k} bis={[ergebnis.re, ergebnis.im]} farbe={2} breite={3} /> : null}
            <Pfeil k={k} bis={[z1.re, z1.im]} farbe={0} />
            {zeigeZ2 ? <Pfeil k={k} bis={[z2.re, z2.im]} farbe={1} /> : null}
            <text x={k.px(z1.re) + 9} y={k.py(z1.im) - 9} className="plot-label">
              z₁
            </text>
            {zeigeZ2 ? (
              <text x={k.px(z2.re) + 9} y={k.py(z2.im) - 9} className="plot-label">
                z₂
              </text>
            ) : null}
            {ergebnis && !ausserhalb ? (
              <text x={k.px(ergebnis.re) + 9} y={k.py(ergebnis.im) + 18} className="plot-label">
                {OPS.find((o) => o.wert === op)!.label}
              </text>
            ) : null}
            <Ziehpunkt cx={k.px(z1.re)} cy={k.py(z1.im)} farbe={FARBEN[0]} label={`z₁ = ${kart(z1)}`} onPointerDown={ziehen.starte("z1")} taste={taste(setZ1)} />
            {zeigeZ2 ? (
              <Ziehpunkt cx={k.px(z2.re)} cy={k.py(z2.im)} farbe={FARBEN[1]} label={`z₂ = ${kart(z2)}`} onPointerDown={ziehen.starte("z2")} taste={taste(setZ2)} />
            ) : null}
          </>
        )}
      </Koordinaten>
      {op === "potenz" || op === "wurzeln" ? (
        <div className="regler-gruppe">
          <Regler label="n" min={op === "wurzeln" ? 2 : 1} max={12} step={1} wert={op === "wurzeln" ? nWurzel : n} setze={(v) => setN(Math.round(v))} />
        </div>
      ) : null}
      <Kennwerte
        werte={[
          { name: "z₁ =", wert: `${kart(z1)}  (${polar(z1)})`, farbe: FARBEN[0] },
          ...(zeigeZ2 ? [{ name: "z₂ =", wert: `${kart(z2)}  (${polar(z2)})`, farbe: FARBEN[1] }] : []),
          ...(ergebnis ? [{ name: `${OPS.find((o) => o.wert === op)!.label} =`, wert: `${kart(ergebnis)}  (${polar(ergebnis)})`, farbe: FARBEN[2] }] : []),
        ]}
      />
      {rechnung ? (
        <div className="widget-info">
          <Formel block tex={rechnung} />
          {ergebnis && op !== "summe" && op !== "differenz" ? <Formel block tex={`= ${texPolar(ergebnis)}`} /> : null}
        </div>
      ) : null}
      {op === "quotient" && !ergebnis ? <Hinweis art="warnung">Division durch z₂ = 0 ist nicht definiert.</Hinweis> : null}
      {ausserhalb ? <Hinweis art="warnung">Das Ergebnis liegt außerhalb des Ausschnitts (Pfeil abgeschnitten).</Hinweis> : null}
      {op === "produkt" ? <Hinweis>Beim Multiplizieren werden die Beträge multipliziert und die Winkel addiert (Bögen: φ₁, daran anschließend φ₂).</Hinweis> : null}
      {op === "wurzeln" ? <Hinweis>Die {nWurzel} Wurzeln liegen auf einem Kreis mit Radius ⁿ√r und bilden ein regelmäßiges {nWurzel}-Eck (Winkelabstand {zahlFest(360 / nWurzel, 2)}°).</Hinweis> : null}
    </div>
  );
}
