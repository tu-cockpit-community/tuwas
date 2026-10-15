import type { Teil } from "./typen";

/**
 * Zufallsaufgaben ("Drills"): Ein Generator erzeugt aus einem Seed eine vollstaendige Aufgabe
 * inklusive Loesung. Loesungswerte sind mathjs-Ausdruecke (wie bei statischen Aufgaben), damit
 * der Validator jeden Generator ueber viele Seeds selbst nachrechnen kann.
 */

export interface DrillAufgabe {
  angabe: string;
  teile: Teil[];
  /** Loesungsweg (Markdown, Schritte durch "---"-Zeilen getrennt) */
  loesung: string;
  hinweis?: string;
}

export interface Drill {
  id: string;
  /** Slug des Kapitels (Dateiname ohne Nummer), z.B. "differentialrechnung" */
  kapitel: string;
  titel: string;
  niveau: 1 | 2 | 3;
  erzeuge: (r: Rng) => DrillAufgabe;
}

export function drill(d: Drill): Drill {
  return d;
}

export class Rng {
  private s: number;
  constructor(seed: number) {
    this.s = seed >>> 0 || 1;
  }
  /** mulberry32 */
  zufall(): number {
    let t = (this.s += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  /** ganze Zahl in [a, b] */
  int(a: number, b: number): number {
    return a + Math.floor(this.zufall() * (b - a + 1));
  }
  /** ganze Zahl in [a, b] ohne 0 */
  intOhne0(a: number, b: number): number {
    let v = 0;
    while (v === 0) v = this.int(a, b);
    return v;
  }
  wahl<T>(liste: readonly T[]): T {
    return liste[Math.floor(this.zufall() * liste.length)];
  }
  vorzeichen(): 1 | -1 {
    return this.zufall() < 0.5 ? 1 : -1;
  }
  mische<T>(liste: readonly T[]): T[] {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this.zufall() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}

/** Zahl fuer LaTeX mit Dezimalkomma: 1.5 -> "1{,}5", -3 -> "-3" */
export function tz(v: number, stellen = 4): string {
  const r = Number(v.toFixed(stellen));
  return String(r).replace(".", "{,}");
}

/** Koeffizient vor einem Term: 1 -> "", -1 -> "-", 3 -> "3" */
export function koef(k: number): string {
  return k === 1 ? "" : k === -1 ? "-" : tz(k);
}

/** Summand mit Vorzeichen fuer Polynome: (+3, "x") -> "+ 3x", (-1, "x") -> "- x", (0, ..) -> "" */
export function summand(k: number, term: string, erster = false): string {
  if (k === 0) return "";
  const vz = erster ? (k < 0 ? "-" : "") : k < 0 ? " - " : " + ";
  const b = Math.abs(k);
  return vz + (term && b === 1 ? "" : tz(b)) + term;
}

/** Polynom aus Koeffizienten [a_n, ..., a_0] als LaTeX */
export function polyTex(koeffs: number[], v = "x"): string {
  const n = koeffs.length - 1;
  let s = "";
  koeffs.forEach((k, i) => {
    const e = n - i;
    const term = e === 0 ? "" : e === 1 ? v : `${v}^{${e}}`;
    s += summand(k, term, s === "");
  });
  return s || "0";
}

/** Polynom aus Koeffizienten [a_n, ..., a_0] als mathjs-Ausdruck */
export function polyAusdruck(koeffs: number[], v = "x"): string {
  const n = koeffs.length - 1;
  return koeffs.map((k, i) => `(${k})*${v}^${n - i}`).join(" + ") || "0";
}

export function ggt(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

/** gekuerzter Bruch als LaTeX */
export function bruchTex(z: number, n: number): string {
  if (n < 0) {
    z = -z;
    n = -n;
  }
  const g = ggt(z, n);
  z /= g;
  n /= g;
  if (n === 1) return String(z);
  return `${z < 0 ? "-" : ""}\\frac{${Math.abs(z)}}{${n}}`;
}
