import { roemisch } from "./format";

/**
 * Exakte Bruchrechnung (BigInt) und Gauss-Elimination Schritt fuer Schritt.
 * BigInt() statt Literalen, weil das Projekt auf ES2017 kompiliert.
 */

const B0 = BigInt(0);
const B1 = BigInt(1);
const B10 = BigInt(10);

function abs(a: bigint): bigint {
  return a < B0 ? -a : a;
}
function ggT(a: bigint, b: bigint): bigint {
  a = abs(a);
  b = abs(b);
  while (b !== B0) [a, b] = [b, a % b];
  return a;
}

export class Bruch {
  readonly z: bigint;
  readonly n: bigint;

  constructor(z: bigint | number, n: bigint | number = B1) {
    let zz = typeof z === "bigint" ? z : BigInt(z);
    let nn = typeof n === "bigint" ? n : BigInt(n);
    if (nn === B0) throw new Error("Nenner 0");
    if (nn < B0) {
      zz = -zz;
      nn = -nn;
    }
    const g = ggT(zz, nn);
    this.z = g === B0 ? B0 : zz / g;
    this.n = g === B0 ? B1 : nn / g;
  }

  static readonly NULL = new Bruch(0);
  static readonly EINS = new Bruch(1);

  /** "3", "-1,5", "−3/4", "0.25", "2/0,5" oder eine endliche JS-Zahl; sonst null. */
  static von(v: unknown): Bruch | null {
    if (typeof v === "number") return Number.isFinite(v) ? Bruch.dezimal(String(v)) : null;
    if (typeof v !== "string") return null;
    const s = v.trim().replace(/[−–]/g, "-").replace(/,/g, ".").replace(/\s+/g, "");
    if (!s) return null;
    const teile = s.split("/");
    if (teile.length > 2) return null;
    const z = Bruch.dezimal(teile[0]);
    if (!z) return null;
    if (teile.length === 1) return z;
    const n = Bruch.dezimal(teile[1]);
    if (!n || n.istNull()) return null;
    return z.durch(n);
  }

  /** Dezimalzahl exakt (auch 1e-7) -> Bruch */
  private static dezimal(s: string): Bruch | null {
    const m = /^([+-]?)(\d*)(?:\.(\d*))?(?:e([+-]?\d+))?$/i.exec(s);
    if (!m || (!m[2] && !m[3])) return null;
    const ganz = m[2] || "0";
    const nach = m[3] ?? "";
    let z = BigInt(ganz + nach);
    let n = B10 ** BigInt(nach.length);
    const e = m[4] ? Number(m[4]) : 0;
    if (e > 0) z *= B10 ** BigInt(e);
    if (e < 0) n *= B10 ** BigInt(-e);
    if (m[1] === "-") z = -z;
    return new Bruch(z, n);
  }

  plus(b: Bruch): Bruch {
    return new Bruch(this.z * b.n + b.z * this.n, this.n * b.n);
  }
  minus(b: Bruch): Bruch {
    return new Bruch(this.z * b.n - b.z * this.n, this.n * b.n);
  }
  mal(b: Bruch): Bruch {
    return new Bruch(this.z * b.z, this.n * b.n);
  }
  durch(b: Bruch): Bruch {
    if (b.istNull()) throw new Error("Division durch 0");
    return new Bruch(this.z * b.n, this.n * b.z);
  }
  neg(): Bruch {
    return new Bruch(-this.z, this.n);
  }
  istNull(): boolean {
    return this.z === B0;
  }
  istEins(): boolean {
    return this.z === B1 && this.n === B1;
  }
  istGanz(): boolean {
    return this.n === B1;
  }
  negativ(): boolean {
    return this.z < B0;
  }
  gleich(b: Bruch): boolean {
    return this.z === b.z && this.n === b.n;
  }
  zahl(): number {
    return Number(this.z) / Number(this.n);
  }
  /** Text mit echtem Minuszeichen: "−3/4", "5" */
  text(): string {
    const s = this.n === B1 ? `${abs(this.z)}` : `${abs(this.z)}/${this.n}`;
    return this.negativ() ? `−${s}` : s;
  }
  tex(): string {
    const s = this.n === B1 ? `${abs(this.z)}` : `\\frac{${abs(this.z)}}{${this.n}}`;
    return this.negativ() ? `-${s}` : s;
  }
}

export type Matrix = Bruch[][];

export interface GaussSchritt {
  /** Matrix NACH diesem Schritt */
  matrix: Matrix;
  /** Kurzform der Zeilenoperation, z.B. "II − 2·I" */
  operation: string;
  /** Erklaerung in ganzen Saetzen */
  erklaerung: string;
  /** veraenderte Zeilen (0-basiert) */
  zeilen: number[];
  phase: "vorwaerts" | "rueckwaerts";
}

export type GaussErgebnis =
  | { art: "eindeutig"; werte: Bruch[] }
  | { art: "keine"; zeile: number }
  | {
      art: "unendlich";
      /** Indizes der freien Variablen (werden zu Parametern) */
      frei: number[];
      /** je Variable: Konstante + Koeffizienten der Parameter (gleiche Reihenfolge wie `frei`) */
      darstellung: { konstante: Bruch; koeff: Bruch[] }[];
    };

export function variablenNamen(anzahl: number): string[] {
  if (anzahl <= 3) return ["x", "y", "z"].slice(0, anzahl);
  return Array.from({ length: anzahl }, (_, i) => `x${i + 1}`);
}
export const PARAMETER_NAMEN = ["t", "s", "r", "u", "v", "w"];

function kopie(m: Matrix): Matrix {
  return m.map((z) => [...z]);
}

/** Text "II − 3/2·I" bzw. "II + I" fuer Zeile_i := Zeile_i − f·Zeile_r */
function opText(i: number, f: Bruch, r: number): string {
  const betrag = f.negativ() ? f.neg() : f;
  const faktor = betrag.istEins() ? "" : `${betrag.text()}·`;
  return `${roemisch(i)} ${f.negativ() ? "+" : "−"} ${faktor}${roemisch(r)}`;
}

/**
 * Vollstaendiger Gauss-Jordan-Ablauf auf der erweiterten Koeffizientenmatrix:
 * vorwaerts zur Stufenform (Tauschen, Eliminieren), dann rueckwaerts (Pivot auf 1, Nullen oberhalb).
 * Bei einem Widerspruch 0 = c (c ≠ 0) wird nach der Stufenform abgebrochen.
 */
export function gauss(start: Matrix): { schritte: GaussSchritt[]; ergebnis: GaussErgebnis } {
  const A = kopie(start);
  const R = A.length;
  const C = R ? A[0].length : 0;
  const V = C - 1;
  const schritte: GaussSchritt[] = [];
  const pivots: [number, number][] = [];
  const merke = (operation: string, erklaerung: string, zeilen: number[], phase: GaussSchritt["phase"]) =>
    schritte.push({ matrix: kopie(A), operation, erklaerung, zeilen, phase });

  let r = 0;
  for (let c = 0; c < V && r < R; c++) {
    let p = -1;
    for (let i = r; i < R; i++)
      if (!A[i][c].istNull()) {
        p = i;
        break;
      }
    if (p < 0) continue;
    if (p !== r) {
      [A[p], A[r]] = [A[r], A[p]];
      merke(
        `${roemisch(r)} ↔ ${roemisch(p)}`,
        `In Zeile ${roemisch(r)} steht in Spalte ${c + 1} eine 0. Tausch mit Zeile ${roemisch(p)}, damit dort ein Pivotelement ≠ 0 steht.`,
        [r, p],
        "vorwaerts",
      );
    }
    for (let i = r + 1; i < R; i++) {
      if (A[i][c].istNull()) continue;
      const f = A[i][c].durch(A[r][c]);
      A[i] = A[i].map((v, j) => v.minus(f.mal(A[r][j])));
      merke(
        opText(i, f, r),
        `Faktor ${f.text()} (Eintrag durch Pivot): Zeile ${roemisch(i)} minus ${f.text()}-mal Zeile ${roemisch(r)} erzeugt eine 0 unter dem Pivot in Spalte ${c + 1}.`,
        [i],
        "vorwaerts",
      );
    }
    pivots.push([r, c]);
    r++;
  }

  // Widerspruchszeile 0 … 0 | c mit c ≠ 0?
  for (let i = 0; i < R; i++) {
    if (A[i].slice(0, V).every((v) => v.istNull()) && !A[i][V].istNull()) {
      return { schritte, ergebnis: { art: "keine", zeile: i } };
    }
  }

  for (let k = pivots.length - 1; k >= 0; k--) {
    const [pr, pc] = pivots[k];
    const piv = A[pr][pc];
    if (!piv.istEins()) {
      A[pr] = A[pr].map((v) => v.durch(piv));
      const op = piv.istGanz() ? `${roemisch(pr)} : ${piv.negativ() ? `(${piv.text()})` : piv.text()}` : `${roemisch(pr)} · ${klammer(Bruch.EINS.durch(piv))}`;
      merke(op, `Zeile ${roemisch(pr)} durch ${piv.text()} teilen, damit das Pivotelement 1 wird.`, [pr], "rueckwaerts");
    }
    for (let i = 0; i < pr; i++) {
      if (A[i][pc].istNull()) continue;
      const f = A[i][pc];
      A[i] = A[i].map((v, j) => v.minus(f.mal(A[pr][j])));
      merke(opText(i, f, pr), `Rückwärts: Nullen über dem Pivot in Spalte ${pc + 1} erzeugen (Zeile ${roemisch(i)} minus ${f.text()}-mal Zeile ${roemisch(pr)}).`, [i], "rueckwaerts");
    }
  }

  if (pivots.length === V) {
    const werte: Bruch[] = Array.from({ length: V }, () => Bruch.NULL);
    for (const [pr, pc] of pivots) werte[pc] = A[pr][V];
    return { schritte, ergebnis: { art: "eindeutig", werte } };
  }

  const pivotSpalten = new Set(pivots.map(([, c]) => c));
  const frei = Array.from({ length: V }, (_, j) => j).filter((j) => !pivotSpalten.has(j));
  const darstellung = Array.from({ length: V }, (_, j) => {
    const fi = frei.indexOf(j);
    if (fi >= 0) return { konstante: Bruch.NULL, koeff: frei.map((_, q) => (q === fi ? Bruch.EINS : Bruch.NULL)) };
    const [pr] = pivots.find(([, c]) => c === j)!;
    return { konstante: A[pr][V], koeff: frei.map((f) => A[pr][f].neg()) };
  });
  return { schritte, ergebnis: { art: "unendlich", frei, darstellung } };
}

function klammer(b: Bruch): string {
  return b.negativ() ? `(${b.text()})` : b.text();
}

/** Ausdruck konstante + Σ koeff·parameter als TeX, z.B. "2 - \frac{1}{2}t" */
export function linearTex(konstante: Bruch, koeff: Bruch[], parameter: string[]): string {
  let s = "";
  koeff.forEach((k, i) => {
    if (k.istNull()) return;
    const betrag = k.negativ() ? k.neg() : k;
    const f = betrag.istEins() ? "" : betrag.tex();
    if (!s) s = `${k.negativ() ? "-" : ""}${f}${parameter[i]}`;
    else s += ` ${k.negativ() ? "-" : "+"} ${f}${parameter[i]}`;
  });
  if (!s) return konstante.tex();
  if (konstante.istNull()) return s;
  return `${konstante.tex()} ${s.startsWith("-") ? `- ${s.slice(1)}` : `+ ${s}`}`;
}
