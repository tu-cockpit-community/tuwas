/** Zahl- und Textformate der Mathe-Widgets (rein, ohne React; auch in Tests nutzbar). */

const HOCH = "⁰¹²³⁴⁵⁶⁷⁸⁹";

/**
 * Zahl mit `sig` signifikanten Stellen, Dezimalkomma und echtem Minuszeichen.
 * Sehr kleine/grosse Betraege in der Form 1,25·10⁻⁶ (wichtig fuer h → 0).
 */
export function zahlSig(v: number, sig = 4): string {
  if (Number.isNaN(v)) return "–";
  if (!Number.isFinite(v)) return v > 0 ? "∞" : "−∞";
  if (Math.abs(v) < 1e-12) return "0";
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -3 && e < 7) {
    const r = Number(v.toPrecision(sig));
    // toPrecision kann bei grossen Zahlen Exponentialschreibweise liefern -> ueber Number() aufloesen
    return deutsch(String(r));
  }
  const m = Number((v / 10 ** e).toPrecision(sig));
  const hoch = String(e)
    .replace("-", "⁻")
    .replace(/\d/g, (d) => HOCH[Number(d)]);
  return `${deutsch(String(m))}·10${hoch}`;
}

/** Feste Nachkommastellen (gerundet, nachfolgende Nullen entfernt). */
export function zahlFest(v: number, stellen = 3): string {
  if (Number.isNaN(v)) return "–";
  if (!Number.isFinite(v)) return v > 0 ? "∞" : "−∞";
  const r = Number(v.toFixed(stellen));
  if (Object.is(r, -0) || Math.abs(r) === 0) return "0";
  return deutsch(String(r));
}

function deutsch(s: string): string {
  return s.replace(".", ",").replace("-", "−");
}

/** Zahl fuer KaTeX: Dezimalkomma ohne Zusatzabstand, Minus als TeX-Minus. */
export function texZahl(v: number, sig = 4): string {
  return zahlSig(v, sig).replace(",", "{,}").replace("−", "-").replace(/·10(.*)$/, (_, h: string) => `\\cdot 10^{${hochZuText(h)}}`);
}

/** wie texZahl, negative Zahlen in Klammern (fuer "a − (−2)") */
export function texKlammer(v: number, sig = 4): string {
  const t = texZahl(v, sig);
  return t.startsWith("-") ? `(${t})` : t;
}

function hochZuText(h: string): string {
  return [...h].map((c) => (c === "⁻" ? "-" : String(HOCH.indexOf(c)))).join("");
}

/** Prozentangabe mit Dezimalkomma, z.B. 34,13 % */
export function prozent(p: number, stellen = 2): string {
  return `${zahlFest(p * 100, stellen)} %`;
}

/** Bogenmass als Vielfaches von π, falls der Winkel ein Vielfaches von 15° ist (z.B. "5π/6"). */
export function piBruch(grad: number): string | null {
  const zwoelftel = grad / 15;
  if (Math.abs(zwoelftel - Math.round(zwoelftel)) > 1e-9) return null;
  let z = Math.round(zwoelftel);
  if (z === 0) return "0";
  let n = 12;
  const g = ggT(Math.abs(z), n);
  z /= g;
  n /= g;
  const vz = z < 0 ? "−" : "";
  const za = Math.abs(z);
  return `${vz}${za === 1 ? "" : za}π${n === 1 ? "" : `/${n}`}`;
}

export function ggT(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}

/** Roemische Zeilennummern fuer Gleichungssysteme (I, II, III, ...). */
export function roemisch(i: number): string {
  const tab: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let n = i + 1;
  let s = "";
  for (const [w, z] of tab) {
    while (n >= w) {
      s += z;
      n -= w;
    }
  }
  return s;
}

/* ---------- Trigonometrie ---------- */

const BASIS: Record<number, [string, string, string | null]> = {
  // [sin, cos, tan] fuer Referenzwinkel im ersten Quadranten
  0: ["0", "1", "0"],
  30: ["\\tfrac{1}{2}", "\\tfrac{\\sqrt{3}}{2}", "\\tfrac{\\sqrt{3}}{3}"],
  45: ["\\tfrac{\\sqrt{2}}{2}", "\\tfrac{\\sqrt{2}}{2}", "1"],
  60: ["\\tfrac{\\sqrt{3}}{2}", "\\tfrac{1}{2}", "\\sqrt{3}"],
  90: ["1", "0", null],
};

/** exakte Werte fuer Vielfache von 30° und 45° (sonst null) */
export function exakteWerte(grad: number): { sin: string; cos: string; tan: string | null } | null {
  const g = ((Math.round(grad) % 360) + 360) % 360;
  if (Math.abs(grad - Math.round(grad)) > 1e-9 || (g % 30 !== 0 && g % 45 !== 0)) return null;
  let ref: number;
  let vs = 1;
  let vc = 1;
  if (g <= 90) ref = g;
  else if (g <= 180) [ref, vc] = [180 - g, -1];
  else if (g <= 270) [ref, vs, vc] = [g - 180, -1, -1];
  else [ref, vs] = [360 - g, -1];
  const [s, c, t] = BASIS[ref];
  const vz = (v: number, w: string) => (w === "0" || v > 0 ? w : `-${w}`);
  return { sin: vz(vs, s), cos: vz(vc, c), tan: t === null ? null : vz(vs * vc, t) };
}
