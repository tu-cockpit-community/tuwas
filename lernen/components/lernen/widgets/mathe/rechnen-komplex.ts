/** Komplexe Zahlen fuer das Zahlenebene-Widget (rein, testbar). */

export interface K {
  re: number;
  im: number;
}

export const k = (re: number, im: number): K => ({ re, im });

export function betrag(z: K): number {
  return Math.hypot(z.re, z.im);
}

/** Argument in Grad im Intervall (−180°, 180°]; null fuer z = 0 (Winkel nicht definiert). */
export function argGrad(z: K): number | null {
  if (betrag(z) < 1e-12) return null;
  let g = (Math.atan2(z.im, z.re) * 180) / Math.PI;
  if (g <= -180 + 1e-12) g = 180;
  return g;
}

export function plus(a: K, b: K): K {
  return k(a.re + b.re, a.im + b.im);
}
export function minus(a: K, b: K): K {
  return k(a.re - b.re, a.im - b.im);
}
export function mal(a: K, b: K): K {
  return k(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
}
/** null bei Division durch 0 */
export function durch(a: K, b: K): K | null {
  const n = b.re * b.re + b.im * b.im;
  if (n < 1e-24) return null;
  return k((a.re * b.re + a.im * b.im) / n, (a.im * b.re - a.re * b.im) / n);
}
/** z^n fuer ganzzahliges n ≥ 0 durch wiederholtes Multiplizieren (exakt fuer ganzzahlige Komponenten) */
export function potenz(z: K, n: number): K {
  let r = k(1, 0);
  for (let i = 0; i < n; i++) r = mal(r, z);
  return r;
}
/** alle n-ten Wurzeln w_j = r^(1/n)·(cos((φ + j·360°)/n) + i·sin(...)), j = 0 … n−1 */
export function wurzeln(z: K, n: number): K[] {
  const r = betrag(z);
  if (r < 1e-12) return [k(0, 0)];
  const phi = Math.atan2(z.im, z.re);
  const rn = r ** (1 / n);
  return Array.from({ length: n }, (_, j) => {
    const w = (phi + 2 * Math.PI * j) / n;
    return k(rn * Math.cos(w), rn * Math.sin(w));
  });
}
