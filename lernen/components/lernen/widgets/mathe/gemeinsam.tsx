"use client";

import { useId, useRef, type KeyboardEvent, type PointerEvent as RPointerEvent, type ReactNode } from "react";
import katex from "katex";
import { FARBEN, type Abbildung } from "../../Koordinaten";
import { kompiliere, werteReell } from "@/lib/lernen/rechnen";
import "./widgets.css";

/** Gemeinsame Bedienelemente der Mathe-Widgets: Regler, Umschalter, Formel, Kennwerte, Ziehpunkte. */

/* ---------- defensives Lesen der YAML-Props (ergaenzt vertrag.ts) ---------- */

export function bool(p: Record<string, unknown>, k: string, standard: boolean): boolean {
  const v = p[k];
  return typeof v === "boolean" ? v : standard;
}

/** Zahl oder Term ("2pi", "-1,5", "sqrt(2)") -> Zahl; sonst null */
export function alsZahl(v: unknown): number | null {
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v !== "string" || !v.trim()) return null;
  try {
    const r = werteReell(v);
    return Number.isFinite(r) ? r : null;
  } catch {
    return null;
  }
}

/** wie vertrag.zahl, akzeptiert aber auch Terme wie "pi/2" */
export function zahlTerm(p: Record<string, unknown>, k: string, standard: number): number {
  return alsZahl(p[k]) ?? standard;
}

/** [a, b] aus Zahlen oder Termen */
export function paar(p: Record<string, unknown>, k: string, standard: [number, number]): [number, number] {
  const v = p[k];
  if (!Array.isArray(v) || v.length !== 2) return standard;
  const a = alsZahl(v[0]);
  const b = alsZahl(v[1]);
  return a !== null && b !== null ? [a, b] : standard;
}

/** Achsenbereich [min, max] mit min < max, sonst Standard */
export function achse(p: Record<string, unknown>, k: string, standard: [number, number]): [number, number] {
  const [a, b] = paar(p, k, standard);
  return a < b ? [a, b] : standard;
}

export function textListe(p: Record<string, unknown>, k: string): string[] {
  const v = p[k];
  if (typeof v === "string") return [v];
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

export function begrenze(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

type Fn = (x: number, extra?: Record<string, number>) => number;
const FN_CACHE = new Map<string, Fn | null>();

/**
 * Term -> Funktion (zwischengespeichert, damit Rendern beim Ziehen nicht neu kompiliert).
 * null bei Syntaxfehler; zur Laufzeit liefert die Funktion NaN statt zu werfen.
 */
export function funktion(term: string, variable = "x"): Fn | null {
  const schluessel = `${variable}\u0000${term}`;
  if (FN_CACHE.has(schluessel)) return FN_CACHE.get(schluessel)!;
  let fn: Fn | null = null;
  try {
    fn = kompiliere(term, variable);
  } catch {
    fn = null;
  }
  if (FN_CACHE.size > 300) FN_CACHE.clear();
  FN_CACHE.set(schluessel, fn);
  return fn;
}

/* ---------- Bedienelemente ---------- */

export function Regler({
  label,
  min,
  max,
  step,
  wert,
  setze,
  anzeige,
  beschreibung,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  wert: number;
  setze: (v: number) => void;
  /** Text im <output>; Standard: Zahl mit Komma */
  anzeige?: string;
  /** Text fuer Screenreader statt der reinen Zahl (aria-valuetext) */
  beschreibung?: string;
}) {
  const id = useId();
  const txt = anzeige ?? String(Number(wert.toFixed(6))).replace(".", ",").replace("-", "−");
  return (
    <div className="regler">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={wert}
        aria-valuetext={beschreibung ?? txt}
        onChange={(e) => setze(Number(e.target.value))}
      />
      <output htmlFor={id}>{txt}</output>
    </div>
  );
}

export function Umschalter<T extends string>({
  legende,
  optionen,
  wert,
  setze,
}: {
  legende: string;
  optionen: { wert: T; label: string }[];
  wert: T;
  setze: (v: T) => void;
}) {
  return (
    <fieldset className="mw-umschalter">
      <legend>{legende}</legend>
      {optionen.map((o) => (
        <button
          key={o.wert}
          type="button"
          className={`knopf knopf-klein${o.wert === wert ? " knopf-gewaehlt" : ""}`}
          aria-pressed={o.wert === wert}
          onClick={() => setze(o.wert)}
        >
          {o.label}
        </button>
      ))}
    </fieldset>
  );
}

/** KaTeX-Formel (inline oder abgesetzt); Fehler im TeX werden rot angezeigt statt zu werfen. */
export function Formel({ tex, block = false }: { tex: string; block?: boolean }) {
  const html = katex.renderToString(tex, { throwOnError: false, displayMode: block, strict: false });
  return block ? <div className="mw-formel" dangerouslySetInnerHTML={{ __html: html }} /> : <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Kennwerte({ werte }: { werte: { name: ReactNode; wert: ReactNode; farbe?: string }[] }) {
  return (
    <dl className="mw-kennwerte" aria-live="polite">
      {werte.map((w, i) => (
        <div key={i} className="mw-kennwert">
          <dt>
            {w.farbe ? <span className="mw-marke" style={{ background: w.farbe }} aria-hidden="true" /> : null}
            {w.name}
          </dt>
          <dd>{w.wert}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Legende({ eintraege }: { eintraege: { farbe: string; label: ReactNode; gestrichelt?: boolean }[] }) {
  return (
    <ul className="mw-legende">
      {eintraege.map((e, i) => (
        <li key={i}>
          <span className={`mw-strich${e.gestrichelt ? " mw-strich-gestrichelt" : ""}`} style={{ borderColor: e.farbe }} aria-hidden="true" />
          {e.label}
        </li>
      ))}
    </ul>
  );
}

export function Hinweis({ children, art }: { children: ReactNode; art?: "warnung" | "ok" | "nein" }) {
  return <p className={`mw-hinweis${art ? ` mw-${art}` : ""}`}>{children}</p>;
}

/* ---------- Koordinaten-Abbildung fuer Pointer-Ereignisse ---------- */

/**
 * Dieselbe Abbildung wie in <Koordinaten> (Rand 28 px), damit Pointer-Ereignisse ausserhalb der
 * Render-Prop in Weltkoordinaten umgerechnet werden koennen. Muss zu Koordinaten.tsx passen.
 */
export function rahmen(x: [number, number], y: [number, number], breite = 640, hoehe = 360, gleich = false) {
  const rand = 28;
  const h = gleich ? Math.round(((breite - 2 * rand) * (y[1] - y[0])) / (x[1] - x[0])) + 2 * rand : hoehe;
  const sx = (breite - 2 * rand) / (x[1] - x[0]);
  const sy = (h - 2 * rand) / (y[1] - y[0]);
  return {
    hoehe: h,
    wx: (p: number) => x[0] + (p - rand) / sx,
    wy: (p: number) => y[0] + (h - rand - p) / sy,
  };
}

/**
 * Ziehen von Punkten in einem <Koordinaten>-SVG. `starte(id)` an den Punkt haengen, `svg` an <Koordinaten>
 * weiterreichen. Bildschirm -> viewBox ueber getScreenCTM, danach `wx/wy` -> Weltkoordinaten.
 */
export function useZiehen<T extends string>(abb: { wx: (p: number) => number; wy: (p: number) => number }, bewege: (id: T, x: number, y: number) => void) {
  const svgRef = useRef<SVGSVGElement>(null);
  const aktiv = useRef<T | null>(null);

  const welt = (e: RPointerEvent): [number, number] | null => {
    const svg = svgRef.current;
    const m = svg?.getScreenCTM();
    if (!svg || !m) return null;
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
    return [abb.wx(p.x), abb.wy(p.y)];
  };

  return {
    svgRef,
    starte: (id: T) => (e: RPointerEvent) => {
      aktiv.current = id;
      svgRef.current?.setPointerCapture(e.pointerId);
      e.preventDefault();
      const w = welt(e);
      if (w) bewege(id, w[0], w[1]);
    },
    svg: {
      onPointerMove: (e: RPointerEvent<SVGSVGElement>) => {
        if (aktiv.current === null) return;
        const w = welt(e);
        if (w) bewege(aktiv.current, w[0], w[1]);
      },
      onPointerUp: (e: RPointerEvent<SVGSVGElement>) => {
        if (aktiv.current !== null && svgRef.current?.hasPointerCapture(e.pointerId)) svgRef.current.releasePointerCapture(e.pointerId);
        aktiv.current = null;
      },
    },
  };
}

/**
 * Ziehbarer Punkt: grosse unsichtbare Trefferflaeche (Touch), fokussierbar, Pfeiltasten verschieben
 * (Umschalt = grosse Schritte). `taste(dx, dy, gross)` bekommt Richtungen −1/0/1.
 */
export function Ziehpunkt({
  cx,
  cy,
  farbe,
  label,
  onPointerDown,
  taste,
  r = 7,
}: {
  cx: number;
  cy: number;
  farbe: string;
  label: string;
  onPointerDown: (e: RPointerEvent) => void;
  taste: (dx: number, dy: number, gross: boolean) => void;
  r?: number;
}) {
  const onKeyDown = (e: KeyboardEvent) => {
    const richtung: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
    const d = richtung[e.key];
    if (!d) return;
    e.preventDefault();
    taste(d[0], d[1], e.shiftKey);
  };
  if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;
  return (
    <g
      className="mw-ziehpunkt"
      tabIndex={0}
      role="button"
      aria-roledescription="ziehbarer Punkt"
      aria-label={`${label}. Mit Pfeiltasten verschieben, Umschalt für große Schritte.`}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
    >
      <circle cx={cx} cy={cy} r={20} fill="transparent" />
      <circle className="mw-fokusring" cx={cx} cy={cy} r={r + 5} />
      <circle cx={cx} cy={cy} r={r} fill={farbe} stroke="var(--color-surface-raised)" strokeWidth={2} />
    </g>
  );
}

/** Kreisbogen in Weltkoordinaten (Winkel in Grad, mathematisch positiv), als Polylinie */
export function bogenPfad(k: Abbildung, r: number, vonGrad: number, bisGrad: number, cx = 0, cy = 0): string {
  const n = Math.max(2, Math.ceil(Math.abs(bisGrad - vonGrad) / 4));
  const pkt: string[] = [];
  for (let i = 0; i <= n; i++) {
    const w = ((vonGrad + ((bisGrad - vonGrad) * i) / n) * Math.PI) / 180;
    pkt.push(`${i ? "L" : "M"}${k.px(cx + r * Math.cos(w)).toFixed(2)},${k.py(cy + r * Math.sin(w)).toFixed(2)}`);
  }
  return pkt.join("");
}

/** Pfeil (Vektor) in Weltkoordinaten; `farbe` ist ein Index in FARBEN (Pfeilspitzen aus <Koordinaten>). */
export function Pfeil({
  k,
  von = [0, 0],
  bis,
  farbe,
  gestrichelt,
  breite = 2.6,
}: {
  k: Abbildung;
  von?: [number, number];
  bis: [number, number];
  farbe: number;
  gestrichelt?: boolean;
  breite?: number;
}) {
  const laenge = Math.hypot(k.px(bis[0]) - k.px(von[0]), k.py(bis[1]) - k.py(von[1]));
  if (!Number.isFinite(laenge) || laenge < 1) return null;
  return (
    <line
      x1={k.px(von[0])}
      y1={k.py(von[1])}
      x2={k.px(bis[0])}
      y2={k.py(bis[1])}
      stroke={FARBEN[farbe]}
      strokeWidth={breite}
      strokeDasharray={gestrichelt ? "6 5" : undefined}
      markerEnd={laenge > 12 ? `url(#pfeil-${farbe})` : undefined}
    />
  );
}

/** Kleinster "schoener" Wert (1; 1,2; 1,5; 2; 2,5; 3; 4; 5; 6; 8 · 10^k) ≥ v */
export function schoenAufrunden(v: number): number {
  if (!(v > 0) || !Number.isFinite(v)) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  const m = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find((s) => s * p >= v - 1e-12) ?? 10;
  return m * p;
}

/**
 * Ausschnitt fuer Ebenen-Widgets (gleiche Skalierung, symmetrisch um 0): `bereich` (halbe Achsenlaenge)
 * oder `x`/`y` aus den Props ueberschreiben; sonst so gross, dass alle `punkte` mit Rand sichtbar sind.
 * Wird von den Widgets einmal beim Start bestimmt, damit der Ausschnitt beim Ziehen nicht springt.
 */
export function ebenenAusschnitt(p: Record<string, unknown>, punkte: [number, number][], minimum = 4): { x: [number, number]; y: [number, number] } {
  const fest = alsZahl(p.bereich);
  if (fest !== null && fest > 0) return { x: [-fest, fest], y: [-fest, fest] };
  const px = achse(p, "x", [0, 0]);
  const py = achse(p, "y", [0, 0]);
  const maxAbs = Math.max(0, ...punkte.flat().filter(Number.isFinite).map(Math.abs));
  const R = Math.min(1000, Math.max(minimum, schoenAufrunden(maxAbs * 1.2)));
  return { x: px[0] < px[1] ? px : [-R, R], y: py[0] < py[1] ? py : [-R, R] };
}

/**
 * y-Bereich: Props-Wert `y`, sonst aus Stichproben der Funktionen ueber x (2.–98. Perzentil, damit Polstellen
 * den Ausschnitt nicht sprengen) plus Zusatzpunkten, mit Rand; die x-Achse (y = 0) wird einbezogen, wenn sie nahe liegt.
 */
export function autoY(
  p: Record<string, unknown>,
  fns: ((x: number) => number)[],
  x: [number, number],
  extra: number[] = [],
  standard: [number, number] = [-1, 5],
): [number, number] {
  const fest = achse(p, "y", [0, 0]);
  if (fest[0] < fest[1]) return fest;
  const w: number[] = [];
  for (const f of fns) for (let i = 0; i <= 200; i++) w.push(f(x[0] + ((x[1] - x[0]) * i) / 200));
  const v = [...w.filter(Number.isFinite)].sort((a, b) => a - b);
  if (v.length < 5) return standard;
  let lo = v[Math.floor(v.length * 0.02)];
  let hi = v[Math.ceil(v.length * 0.98) - 1];
  for (const e of extra) if (Number.isFinite(e)) [lo, hi] = [Math.min(lo, e), Math.max(hi, e)];
  const d = hi - lo || Math.max(1, Math.abs(hi));
  if (lo > 0 && lo < 0.6 * d) lo = 0;
  if (hi < 0 && -hi < 0.6 * d) hi = 0;
  const rand = 0.12 * (hi - lo || d);
  return [lo - rand, hi + rand];
}

/** Achsenteilung (1-2-5-Raster) fuer eigene SVG-Achsen */
export function teilung(lo: number, hi: number, ziel = 8): number[] {
  const roh = (hi - lo) / ziel;
  if (!(roh > 0) || !Number.isFinite(roh)) return [lo];
  const p = 10 ** Math.floor(Math.log10(roh));
  const m = roh / p;
  const d = (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  const out: number[] = [];
  for (let v = Math.ceil(lo / d) * d; v <= hi + 1e-9 * d; v += d) out.push(Math.abs(v) < 1e-12 ? 0 : v);
  return out;
}

/** Nutzer hat reduzierte Bewegung eingestellt? (nur in Event-Handlern/Effekten aufrufen) */
export function bewegungReduziert(): boolean {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
}
