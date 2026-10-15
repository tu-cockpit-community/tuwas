/** Kennzahlen der beschreibenden Statistik und lineare Regression (rein, testbar). */

export interface Kennzahlen {
  n: number;
  summe: number;
  mittel: number;
  median: number;
  /** alle Werte mit maximaler Haeufigkeit; leer, wenn jeder Wert gleich oft vorkommt (und es mehrere gibt) */
  modus: number[];
  min: number;
  max: number;
  spannweite: number;
  q1: number;
  q3: number;
  iqr: number;
  /** empirische Varianz mit Nenner n */
  varianzN: number;
  /** Stichprobenvarianz mit Nenner n − 1 (NaN fuer n = 1) */
  varianzN1: number;
  sN: number;
  sN1: number;
  sortiert: number[];
}

/**
 * Empirisches p-Quantil: ist n·p ganzzahlig, Mittel aus x_(np) und x_(np+1), sonst x_(⌈np⌉).
 * Fuer p = 0,5 ist das der uebliche Median.
 */
export function quantil(sortiert: number[], p: number): number {
  const n = sortiert.length;
  if (!n) return NaN;
  const np = n * p;
  const g = Math.round(np);
  if (Math.abs(np - g) < 1e-9) {
    if (g <= 0) return sortiert[0];
    if (g >= n) return sortiert[n - 1];
    return (sortiert[g - 1] + sortiert[g]) / 2;
  }
  return sortiert[Math.ceil(np) - 1];
}

export function kennzahlen(daten: number[]): Kennzahlen | null {
  const x = daten.filter((v) => Number.isFinite(v));
  const n = x.length;
  if (!n) return null;
  const sortiert = [...x].sort((a, b) => a - b);
  const summe = x.reduce((s, v) => s + v, 0);
  const mittel = summe / n;
  // zweiter Durchlauf: numerisch stabiler als Σx² − n·x̄²
  const qs = x.reduce((s, v) => s + (v - mittel) ** 2, 0);
  const haeufig = new Map<number, number>();
  for (const v of x) haeufig.set(v, (haeufig.get(v) ?? 0) + 1);
  const maxH = Math.max(...haeufig.values());
  const modus = haeufig.size > 1 && [...haeufig.values()].every((h) => h === maxH) ? [] : [...haeufig].filter(([, h]) => h === maxH).map(([v]) => v).sort((a, b) => a - b);
  // Kurskonvention (Kapitel 17): q1/q3 = Median der unteren/oberen Haelfte, bei ungeradem n ohne den Median
  const haelfte = Math.floor(n / 2);
  const q1 = n > 1 ? quantil(sortiert.slice(0, haelfte), 0.5) : sortiert[0];
  const q3 = n > 1 ? quantil(sortiert.slice(n - haelfte), 0.5) : sortiert[0];
  const varianzN = qs / n;
  const varianzN1 = n > 1 ? qs / (n - 1) : NaN;
  return {
    n,
    summe,
    mittel,
    median: quantil(sortiert, 0.5),
    modus,
    min: sortiert[0],
    max: sortiert[n - 1],
    spannweite: sortiert[n - 1] - sortiert[0],
    q1,
    q3,
    iqr: q3 - q1,
    varianzN,
    varianzN1,
    sN: Math.sqrt(varianzN),
    sN1: Math.sqrt(varianzN1),
    sortiert,
  };
}

export interface Regression {
  /** y = k·x + d */
  k: number;
  d: number;
  /** Korrelationskoeffizient nach Pearson */
  r: number;
  mx: number;
  my: number;
}

export function regression(paare: [number, number][]): Regression | null {
  const p = paare.filter(([a, b]) => Number.isFinite(a) && Number.isFinite(b));
  const n = p.length;
  if (n < 2) return null;
  const mx = p.reduce((s, [a]) => s + a, 0) / n;
  const my = p.reduce((s, [, b]) => s + b, 0) / n;
  let sxx = 0;
  let syy = 0;
  let sxy = 0;
  for (const [a, b] of p) {
    sxx += (a - mx) ** 2;
    syy += (b - my) ** 2;
    sxy += (a - mx) * (b - my);
  }
  if (sxx === 0) return null;
  const k = sxy / sxx;
  return { k, d: my - k * mx, r: syy === 0 ? NaN : sxy / Math.sqrt(sxx * syy), mx, my };
}

/**
 * Liest "3; 5; 7", "3 5 7", Zeilen oder "1,5, 2" (Komma + Leerzeichen trennt, Komma zwischen Ziffern ist
 * Dezimalkomma). Liefert Zahlen und die nicht lesbaren Teile.
 */
export function leseDaten(eingabe: string): { werte: number[]; fehler: string[] } {
  const teile = eingabe
    .replace(/[−–]/g, "-")
    .split(/(?:,\s+|[;\s])+/)
    .map((t) => t.trim())
    .filter(Boolean);
  const werte: number[] = [];
  const fehler: string[] = [];
  for (const t of teile) {
    const s = t.replace(/,$/, "").replace(",", ".");
    const v = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(s) ? Number(s) : NaN;
    if (Number.isFinite(v)) werte.push(v);
    else fehler.push(t);
  }
  return { werte, fehler };
}
