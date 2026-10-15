import { math } from "@/lib/lernen/rechnen";

/** Binomial- und Normalverteilung (rein, testbar). */

const lnFak: number[] = [0];
function lnFakultaet(n: number): number {
  for (let i = lnFak.length; i <= n; i++) lnFak[i] = lnFak[i - 1] + Math.log(i);
  return lnFak[n];
}

/** P(X = k) fuer X ~ B(n, p); ueber Logarithmen, damit auch n = 1000 nicht ueberlaeuft. */
export function binomPmf(n: number, p: number, k: number): number {
  if (!Number.isInteger(k) || k < 0 || k > n) return 0;
  if (p <= 0) return k === 0 ? 1 : 0;
  if (p >= 1) return k === n ? 1 : 0;
  const ln = lnFakultaet(n) - lnFakultaet(k) - lnFakultaet(n - k) + k * Math.log(p) + (n - k) * Math.log(1 - p);
  return Math.exp(ln);
}

export function binomVerteilung(n: number, p: number): number[] {
  return Array.from({ length: n + 1 }, (_, k) => binomPmf(n, p, k));
}

/** P(a ≤ X ≤ b) */
export function binomBereich(n: number, p: number, a: number, b: number): number {
  let s = 0;
  for (let k = Math.max(0, Math.ceil(a)); k <= Math.min(n, Math.floor(b)); k++) s += binomPmf(n, p, k);
  return Math.min(1, s);
}

export function normPdf(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

export function normCdf(x: number, mu = 0, sigma = 1): number {
  if (x === Infinity) return 1;
  if (x === -Infinity) return 0;
  return 0.5 * (1 + Number(math.erf((x - mu) / (sigma * Math.SQRT2))));
}

/** P(a ≤ X ≤ b) fuer X ~ N(μ, σ²) */
export function normBereich(a: number, b: number, mu: number, sigma: number): number {
  const [lo, hi] = a <= b ? [a, b] : [b, a];
  return normCdf(hi, mu, sigma) - normCdf(lo, mu, sigma);
}

/** Normalapproximation von P(a ≤ X ≤ b) fuer X ~ B(n,p) mit Stetigkeitskorrektur ±0,5 */
export function binomNormalApprox(n: number, p: number, a: number, b: number): number {
  const mu = n * p;
  const sigma = Math.sqrt(n * p * (1 - p));
  if (sigma === 0) return binomBereich(n, p, a, b);
  return normCdf(b + 0.5, mu, sigma) - normCdf(a - 0.5, mu, sigma);
}
