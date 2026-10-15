import type { ReactNode, PointerEventHandler, Ref } from "react";
import { kompiliere } from "@/lib/lernen/rechnen";

/**
 * Gemeinsamer SVG-Kern fuer statische Plots (Server) und interaktive Widgets (Client).
 * Weltkoordinaten -> SVG ueber eine Abbildung `k`; Kinder bekommen `k` als Render-Prop.
 */

export interface Abbildung {
  px: (x: number) => number;
  py: (y: number) => number;
  /** SVG-Pixel -> Weltkoordinaten (fuer Ziehen) */
  wx: (px: number) => number;
  wy: (py: number) => number;
  x: [number, number];
  y: [number, number];
  breite: number;
  hoehe: number;
}

export const FARBEN = ["var(--plot-0)", "var(--plot-1)", "var(--plot-2)", "var(--plot-3)", "var(--plot-4)"];

export function zahlDe(v: number, stellen = 3): string {
  if (Math.abs(v) < 1e-10) return "0";
  const r = Number(v.toFixed(stellen));
  return String(r).replace(".", ",").replace("-", "−");
}

function schritt(spanne: number, ziel = 8): number {
  const roh = spanne / ziel;
  const p = 10 ** Math.floor(Math.log10(roh));
  const m = roh / p;
  return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
}

function piLabel(v: number): string {
  const n = Math.round((v / Math.PI) * 2);
  if (n === 0) return "0";
  const vz = n < 0 ? "−" : "";
  const a = Math.abs(n);
  if (a % 2 === 0) return `${vz}${a / 2 === 1 ? "" : a / 2}π`;
  return `${vz}${a === 1 ? "" : a}π/2`;
}

interface Props {
  x: [number, number];
  y: [number, number];
  breite?: number;
  hoehe?: number;
  /** gleiche Skalierung auf beiden Achsen (Kreise bleiben rund) */
  gleich?: boolean;
  piAchse?: boolean;
  achsenX?: string;
  achsenY?: string;
  beschreibung: string;
  children?: (k: Abbildung) => ReactNode;
  onPointerDown?: PointerEventHandler<SVGSVGElement>;
  onPointerMove?: PointerEventHandler<SVGSVGElement>;
  onPointerUp?: PointerEventHandler<SVGSVGElement>;
  svgRef?: Ref<SVGSVGElement>;
}

export function Koordinaten({
  x,
  y,
  breite = 640,
  hoehe: hoeheProp,
  gleich,
  piAchse,
  achsenX = "x",
  achsenY = "y",
  beschreibung,
  children,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  svgRef,
}: Props) {
  const rand = 28;
  let hoehe = hoeheProp ?? 360;
  if (gleich) hoehe = Math.round(((breite - 2 * rand) * (y[1] - y[0])) / (x[1] - x[0])) + 2 * rand;
  const sx = (breite - 2 * rand) / (x[1] - x[0]);
  const sy = (hoehe - 2 * rand) / (y[1] - y[0]);
  // auf 1/100 px gerundet: Server und Browser rechnen sonst minimal verschieden (Hydration-Mismatch)
  const r2 = (v: number) => Math.round(v * 100) / 100;
  const k: Abbildung = {
    px: (v) => r2(rand + (v - x[0]) * sx),
    py: (v) => r2(hoehe - rand - (v - y[0]) * sy),
    wx: (p) => x[0] + (p - rand) / sx,
    wy: (p) => y[0] + (hoehe - rand - p) / sy,
    x,
    y,
    breite,
    hoehe,
  };

  const dxs = piAchse ? Math.PI / 2 : schritt(x[1] - x[0]);
  const dys = schritt(y[1] - y[0], 6);
  const xt: number[] = [];
  for (let v = Math.ceil(x[0] / dxs) * dxs; v <= x[1] + 1e-9; v += dxs) xt.push(v);
  const yt: number[] = [];
  for (let v = Math.ceil(y[0] / dys) * dys; v <= y[1] + 1e-9; v += dys) yt.push(v);
  const ax = Math.min(Math.max(0, y[0]), y[1]); // y-Wert, auf dem die x-Achse liegt
  const ay = Math.min(Math.max(0, x[0]), x[1]);
  // y-Ticks stehen rechtsbuendig links der y-Achse; liegt sie am Rand, reicht `rand` fuer "1000" nicht.
  // viewBox nach links erweitern (Breite fuer die Handy-Schrift 19px geschaetzt, ~0.6em je Zeichen).
  const langesLabel = Math.max(0, ...yt.map((v) => (Math.abs(v - ax) < 1e-9 ? 0 : zahlDe(v).length)));
  const links = Math.ceil(Math.max(0, langesLabel * 11.5 + 6 + 2 - k.px(ay)));

  return (
    <svg
      ref={svgRef}
      viewBox={`${-links} 0 ${breite + links} ${hoehe}`}
      className="koordinaten"
      role="img"
      aria-label={beschreibung}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <g className="raster">
        {xt.map((v) => (
          <line key={`gx${v}`} x1={k.px(v)} x2={k.px(v)} y1={k.py(y[0])} y2={k.py(y[1])} />
        ))}
        {yt.map((v) => (
          <line key={`gy${v}`} y1={k.py(v)} y2={k.py(v)} x1={k.px(x[0])} x2={k.px(x[1])} />
        ))}
      </g>
      <g className="achsen">
        <line x1={k.px(x[0])} x2={k.px(x[1]) + 8} y1={k.py(ax)} y2={k.py(ax)} markerEnd="url(#pfeil-achse)" />
        <line y1={k.py(y[0])} y2={k.py(y[1]) - 8} x1={k.px(ay)} x2={k.px(ay)} markerEnd="url(#pfeil-achse)" />
        <text x={k.px(x[1]) + 4} y={k.py(ax) - 8} textAnchor="end" className="achsen-name">
          {achsenX}
        </text>
        <text x={k.px(ay) + 8} y={k.py(y[1]) - 2} className="achsen-name">
          {achsenY}
        </text>
        {xt.map((v) =>
          Math.abs(v - ay) < 1e-9 ? null : (
            <text key={`tx${v}`} x={k.px(v)} y={k.py(ax) + 16} textAnchor="middle" className="tick">
              {piAchse ? piLabel(v) : zahlDe(v)}
            </text>
          ),
        )}
        {yt.map((v) =>
          Math.abs(v - ax) < 1e-9 ? null : (
            <text key={`ty${v}`} x={k.px(ay) - 6} y={k.py(v) + 4} textAnchor="end" className="tick">
              {zahlDe(v)}
            </text>
          ),
        )}
      </g>
      <defs>
        <marker id="pfeil-achse" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,1 L9,5 L0,9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </marker>
        {FARBEN.map((f, i) => (
          <marker key={i} id={`pfeil-${i}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill={f} />
          </marker>
        ))}
      </defs>
      {/* verschachteltes <svg> clippt auf die Zeichenflaeche, ohne die Koordinaten zu verschieben */}
      <svg
        x={rand - 6}
        y={rand - 6}
        width={breite - 2 * rand + 12}
        height={hoehe - 2 * rand + 12}
        viewBox={`${rand - 6} ${rand - 6} ${breite - 2 * rand + 12} ${hoehe - 2 * rand + 12}`}
        overflow="hidden"
      >
        {children?.(k)}
      </svg>
    </svg>
  );
}

/** SVG-Pfad eines Funktionsgraphen; bricht an Polstellen/Definitionsluecken ab. */
export function graphPfad(f: (x: number) => number, k: Abbildung, von = k.x[0], bis = k.x[1], n = 480): string {
  const teile: string[] = [];
  let offen = false;
  let vorher: number | null = null;
  let schrittVorher: number | null = null;
  const yspanne = k.y[1] - k.y[0];
  for (let i = 0; i <= n; i++) {
    const x = von + ((bis - von) * i) / n;
    const y = f(x);
    const sichtbar = Number.isFinite(y) && y > k.y[0] - 3 * yspanne && y < k.y[1] + 3 * yspanne;
    const schritt = vorher !== null && sichtbar ? Math.abs(y - vorher) : null;
    // Polstelle (riesiger Schritt) oder Sprungstelle (ein einzelner grosser Schritt nach kleinem): Pfad auftrennen,
    // sonst zeichnet der Graph eine senkrechte Verbindungslinie, wo die Funktion springt
    const sprung =
      schritt !== null &&
      (schritt > 1.5 * yspanne || (schrittVorher !== null && schritt > 0.04 * yspanne && schritt > 8 * Math.max(schrittVorher, 1e-9)));
    if (!sichtbar || sprung) {
      offen = false;
      vorher = sichtbar ? y : null;
      schrittVorher = null;
      if (!sichtbar) continue;
    }
    teile.push(`${offen ? "L" : "M"}${k.px(x).toFixed(2)},${k.py(y).toFixed(2)}`);
    if (offen) schrittVorher = schritt;
    offen = true;
    vorher = y;
  }
  return teile.join("");
}

export function flaechePfad(f: (x: number) => number, g: (x: number) => number, k: Abbildung, von: number, bis: number, n = 200): string {
  const oben: string[] = [];
  const unten: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = von + ((bis - von) * i) / n;
    const a = f(x);
    const b = g(x);
    if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
    oben.push(`${k.px(x).toFixed(2)},${k.py(a).toFixed(2)}`);
    unten.unshift(`${k.px(x).toFixed(2)},${k.py(b).toFixed(2)}`);
  }
  return oben.length ? `M${oben.join("L")}L${unten.join("L")}Z` : "";
}

export { kompiliere };
