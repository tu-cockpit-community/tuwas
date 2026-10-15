/** Numerik fuer Analysis-Widgets: Ableitung, Integral, Riemann-Summen, Grenzwerte, ε-N und ε-δ. */

type F = (x: number) => number;

/**
 * Zentraler Differenzenquotient mit Richardson-Extrapolation (Fehler O(h⁴)).
 * h relativ zur Stelle, damit Rundungsfehler und Verfahrensfehler beide ~1e-11 bleiben.
 */
export function ableitung(f: F, x: number): number {
  const h = 1e-3 * Math.max(1, Math.abs(x));
  const D = (s: number) => (f(x + s) - f(x - s)) / (2 * s);
  const r = (4 * D(h / 2) - D(h)) / 3;
  return Number.isFinite(r) ? r : NaN;
}

/** Einseitige Ableitungen (Ordnung 2), um Knicke wie bei |x| zu erkennen. */
export function einseitigeAbleitungen(f: F, x: number): [number, number] {
  const h = 1e-4 * Math.max(1, Math.abs(x));
  const f0 = f(x);
  const rechts = (-3 * f0 + 4 * f(x + h) - f(x + 2 * h)) / (2 * h);
  const links = (3 * f0 - 4 * f(x - h) + f(x - 2 * h)) / (2 * h);
  return [links, rechts];
}

/** true, wenn f an x (numerisch) differenzierbar ist */
export function differenzierbar(f: F, x: number): boolean {
  const [l, r] = einseitigeAbleitungen(f, x);
  if (!Number.isFinite(l) || !Number.isFinite(r) || !Number.isFinite(f(x))) return false;
  return Math.abs(l - r) <= 1e-3 * (1 + Math.abs(l) + Math.abs(r));
}

/** Simpsonregel mit n (gerade) Teilintervallen; NaN, wenn f im Intervall nicht definiert ist. */
export function simpson(f: F, a: number, b: number, n = 2000): number {
  if (a === b) return 0;
  const m = n % 2 ? n + 1 : n;
  const h = (b - a) / m;
  let s = 0;
  for (let i = 0; i <= m; i++) {
    const y = f(a + i * h);
    if (!Number.isFinite(y)) return NaN;
    s += (i === 0 || i === m ? 1 : i % 2 ? 4 : 2) * y;
  }
  return (s * h) / 3;
}

export type RiemannArt = "unter" | "ober" | "links" | "rechts" | "mitte";

export interface Rechteck {
  x0: number;
  x1: number;
  hoehe: number;
}

/**
 * Riemann-Summe mit n gleich breiten Streifen.
 * SHORTCUT: Infimum/Supremum fuer Unter-/Obersumme werden an ~2000 Stuetzstellen (mind. 9 je Streifen)
 * gesucht; schmale Spitzen zwischen Stuetzstellen koennen fehlen. Fuer Schulfunktionen (stetig, wenige
 * Extrema) genuegt das; bei Bedarf Extremstellen per Ableitung ergaenzen.
 */
export function riemann(f: F, a: number, b: number, n: number, art: RiemannArt): { rechtecke: Rechteck[]; summe: number } {
  const dx = (b - a) / n;
  const rechtecke: Rechteck[] = [];
  let summe = 0;
  const proStreifen = Math.max(8, Math.ceil(2000 / n));
  for (let i = 0; i < n; i++) {
    const x0 = a + i * dx;
    const x1 = x0 + dx;
    let hoehe: number;
    if (art === "links") hoehe = f(x0);
    else if (art === "rechts") hoehe = f(x1);
    else if (art === "mitte") hoehe = f(x0 + dx / 2);
    else {
      let lo = Infinity;
      let hi = -Infinity;
      for (let j = 0; j <= proStreifen; j++) {
        const y = f(x0 + (dx * j) / proStreifen);
        if (!Number.isFinite(y)) {
          lo = NaN;
          hi = NaN;
          break;
        }
        lo = Math.min(lo, y);
        hi = Math.max(hi, y);
      }
      hoehe = art === "unter" ? lo : hi;
    }
    rechtecke.push({ x0, x1, hoehe });
    summe += hoehe * dx;
  }
  return { rechtecke, summe };
}

/**
 * Kleinstes N, sodass |a_n − g| < ε fuer alle berechneten n ≥ N (n = 1 … werte.length).
 * werte[0] ist a_1. null, wenn schon das letzte Glied ausserhalb liegt.
 */
export function kleinstesN(werte: number[], g: number, eps: number): number | null {
  let N: number | null = null;
  for (let i = werte.length - 1; i >= 0; i--) {
    const v = werte[i];
    if (Number.isFinite(v) && Math.abs(v - g) < eps) N = i + 1;
    else break;
  }
  return N;
}

/**
 * Einseitiger Grenzwert von g an s (seite −1: von links, +1: von rechts).
 * Ist g an s selbst definiert und dort (einseitig) stetig, wird g(s) genommen; sonst Folge
 * g(s ± 10⁻ᵏ) mit Extrapolation. ±Infinity bei bestimmter Divergenz, NaN wenn kein Grenzwert erkennbar.
 */
export function einseitigerGrenzwert(g: F, s: number, seite: -1 | 1): number {
  const skala = Math.max(1, Math.abs(s));
  const g0 = g(s);
  if (Number.isFinite(g0)) {
    const nah = g(s + seite * 1e-7 * skala);
    const naeher = g(s + seite * 1e-9 * skala);
    if (Math.abs(nah - g0) <= 1e-5 * (1 + Math.abs(g0)) && Math.abs(naeher - g0) <= 1e-6 * (1 + Math.abs(g0))) return g0;
  }
  const v: number[] = [];
  for (let k = 2; k <= 8; k++) v.push(g(s + seite * 10 ** -k * skala));
  if (v.some((w) => Number.isNaN(w))) return NaN;
  const [a, b, c] = v.slice(-3);
  if (Math.abs(c) > 1e6 && Math.abs(c) > Math.abs(b) && Math.abs(b) > Math.abs(a) && Math.sign(c) === Math.sign(b)) return c > 0 ? Infinity : -Infinity;
  const d1 = Math.abs(c - b);
  const d0 = Math.abs(b - a);
  if (d1 <= 1e-5 * (1 + Math.abs(c)) && d1 <= d0 + 1e-12) {
    // g(s+h) ≈ L + c·h  =>  L ≈ (10·g(h/10) − g(h)) / 9
    const L = (10 * c - b) / 9;
    return Math.abs(L - c) < 1e-4 * (1 + Math.abs(c)) ? L : c;
  }
  return NaN;
}

/**
 * Groesstes δ ≤ deltaMax (numerisch, Bisektion), sodass |f(x) − y0| < ε fuer alle Stichproben x mit
 * |x − s| < δ. null, wenn selbst sehr kleine δ nicht reichen (dann gibt es kein δ: unstetig).
 */
export function findeDelta(f: F, s: number, y0: number, eps: number, deltaMax: number): number | null {
  const passt = (d: number) => {
    const n = 240;
    for (let i = 1; i <= n; i++) {
      // bis knapp an den Rand: |x − s| < δ ist offen, aber δ darf nicht ueberschaetzt werden
      const t = (d * i * (1 - 1e-9)) / n;
      for (const x of [s - t, s + t]) {
        const y = f(x);
        if (!Number.isFinite(y) || Math.abs(y - y0) >= eps) return false;
      }
    }
    // Punkte sehr nahe an s (Sprungstellen sitzen genau dort)
    for (let k = 1; k <= 6; k++) {
      const t = d * 10 ** -k;
      for (const x of [s - t, s + t]) {
        const y = f(x);
        if (!Number.isFinite(y) || Math.abs(y - y0) >= eps) return false;
      }
    }
    return true;
  };
  const dMin = 1e-9 * Math.max(1, Math.abs(s));
  if (!passt(dMin)) return null;
  if (passt(deltaMax)) return deltaMax;
  let lo = dMin;
  let hi = deltaMax;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (passt(mid)) lo = mid;
    else hi = mid;
  }
  return lo;
}
