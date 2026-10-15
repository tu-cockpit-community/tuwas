import { drill, tz, polyTex, polyAusdruck, bruchTex, type Drill } from "@/lib/lernen/training";

const K = "differentialrechnung";

/** Wert eines Polynoms [a_n, ..., a_0] an der Stelle x */
function pw(koeffs: number[], x: number): number {
  return koeffs.reduce((s, k) => s * x + k, 0);
}

/** Ableitung eines Polynoms [a_n, ..., a_0] */
function pAbl(koeffs: number[]): number[] {
  const n = koeffs.length - 1;
  return koeffs.slice(0, -1).map((k, i) => k * (n - i));
}

/** e^{kx} als LaTeX */
function expTex(k: number, v = "x"): string {
  return `e^{${k === 1 ? "" : k === -1 ? "-" : k}${v}}`;
}

/** lineare Funktion ax + b als LaTeX */
function linTex(a: number, b: number): string {
  return polyTex([a, b]);
}

/** Gerade y = kx + d als LaTeX */
function geradeTex(k: number, d: number): string {
  return polyTex([k, d]);
}

export const DRILLS: Drill[] = [
  drill({
    id: "dr-d-polynom",
    kapitel: K,
    titel: "Polynome ableiten",
    niveau: 1,
    erzeuge: (r) => {
      const c = [r.intOhne0(-5, 5), r.int(-6, 6), r.int(-9, 9), r.int(-9, 9)];
      if (r.zufall() < 0.4) c.unshift(r.intOhne0(-3, 3));
      const d = pAbl(c);
      const n = c.length - 1;
      const nullen = (m: number) => Array<number>(m).fill(0);
      const schritte: string[] = [];
      c.slice(0, -1).forEach((k, i) => {
        const e = n - i;
        if (k !== 0) schritte.push(`$(${polyTex([k, ...nullen(e)])})' = ${polyTex([k * e, ...nullen(e - 1)])}$`);
      });
      return {
        angabe: `Leite ab: $f(x) = ${polyTex(c)}$.`,
        teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: polyAusdruck(d) }],
        hinweis: "Potenzregel $(x^n)' = n\\,x^{n-1}$ auf jeden Summanden anwenden; Konstanten fallen weg.",
        loesung: `Summen- und Faktorregel: jeden Summanden einzeln ableiten.\n---\n${schritte.join(", ")}; die Konstante $${tz(c[n])}$ hat Ableitung $0$.\n---\n$f'(x) = ${polyTex(d)}$`,
      };
    },
  }),
  drill({
    id: "dr-d-mittlere-rate",
    kapitel: K,
    titel: "Mittlere Änderungsrate",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3);
      const b = r.int(-6, 6);
      const c = r.int(-9, 9);
      const p = r.int(-3, 2);
      const q = p + r.int(1, 4);
      const f = [a, b, c];
      const fp = pw(f, p);
      const fq = pw(f, q);
      return {
        angabe: `Berechne die mittlere Änderungsrate von $f(x) = ${polyTex(f)}$ im Intervall $[${p}, ${q}]$.`,
        teile: [{ typ: "zahl", loesung: `(${fq} - (${fp})) / (${q} - (${p}))` }],
        loesung: `Die mittlere Änderungsrate ist der Differenzenquotient. Dafür brauchen wir die Funktionswerte an beiden Intervallgrenzen: $f(${q}) = ${fq}$, $f(${p}) = ${fp}$.\n---\nDifferenzenquotient, also Unterschied der Funktionswerte durch Länge des Intervalls: $\\dfrac{f(${q}) - f(${p})}{${q} - (${p})} = \\dfrac{${fq - fp}}{${q - p}} = ${tz((fq - fp) / (q - p))}$. Das ist die Steigung der Sekante.`,
      };
    },
  }),
  drill({
    id: "dr-d-h-methode",
    kapitel: K,
    titel: "h-Methode bei Parabeln",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-4, 4);
      const b = r.int(-6, 6);
      const c = r.int(-5, 5);
      const x0 = r.int(-3, 3);
      const f = [a, b, c];
      const m = 2 * a * x0 + b;
      return {
        angabe: `Gegeben ist $f(x) = ${polyTex(f)}$. Vereinfache den Differenzenquotienten $\\dfrac{f(${x0} + h) - f(${x0})}{h}$ für $h \\neq 0$ und bestimme $f'(${x0})$.`,
        teile: [
          { typ: "term", variable: "h", label: "Differenzenquotient (Term in $h$)", loesung: `${m} + (${a})*h` },
          { typ: "zahl", label: `$f'(${x0})$`, loesung: String(m) },
        ],
        hinweis: "Berechne $f(x_0 + h)$, multipliziere aus und ziehe $f(x_0)$ ab. Dann $h$ kürzen.",
        loesung: `Ausmultiplizieren: $f(${x0} + h) = ${polyTex([a, m, pw(f, x0)], "h")}$ und $f(${x0}) = ${pw(f, x0)}$, also $f(${x0} + h) - f(${x0}) = ${polyTex([a, m, 0], "h")}$.\n---\nDurch $h$ kürzen: $\\dfrac{${polyTex([a, m, 0], "h")}}{h} = ${polyTex([a, m], "h")}$\n---\nFür $h \\to 0$: $f'(${x0}) = ${m}$. Kontrolle: $f'(x) = ${polyTex([2 * a, b])}$ liefert denselben Wert.`,
      };
    },
  }),
  drill({
    id: "dr-d-produkt",
    kapitel: K,
    titel: "Produktregel mit e-Funktion",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-4, 4);
      const b = r.int(-5, 5);
      const k = r.wahl([-3, -2, -1, 1, 2, 3]);
      const p = k * a;
      const q = a + k * b;
      return {
        angabe: `Leite ab und hebe die e-Funktion heraus: $f(x) = (${linTex(a, b)})\\,${expTex(k)}$.`,
        teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `(${p}*x + (${q}))*e^(${k}*x)` }],
        hinweis: `Produktregel $(uv)' = u'v + uv'$ mit $v = ${expTex(k)}$, $v' = ${k === 1 ? "" : k === -1 ? "-" : k}${expTex(k)}$ (Kettenregel).`,
        loesung: `$u = ${linTex(a, b)}$, $u' = ${a}$; $v = ${expTex(k)}$, $v' = ${k === 1 ? "" : k === -1 ? "-" : `${k}\\,`}${expTex(k)}$.\n---\n$f'(x) = ${a}\\,${expTex(k)} + (${linTex(a, b)})\\cdot ${k < 0 ? `(${k})` : k}\\,${expTex(k)}$\n---\nHerausheben: $f'(x) = (${linTex(p, q)})\\,${expTex(k)}$`,
      };
    },
  }),
  drill({
    id: "dr-d-kette",
    kapitel: K,
    titel: "Kettenregel",
    niveau: 2,
    erzeuge: (r) => {
      const art = r.int(0, 4);
      if (art === 0) {
        const a = r.intOhne0(-4, 4);
        const b = r.intOhne0(-6, 6);
        const n = r.int(3, 6);
        return {
          angabe: `Leite ab: $f(x) = (${linTex(a, b)})^{${n}}$.`,
          teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${n * a}*(${a}*x + (${b}))^${n - 1}` }],
          loesung: `Außen $u^{${n}}$, innen $u = ${linTex(a, b)}$ mit $u' = ${a}$.\n---\n$f'(x) = ${n}(${linTex(a, b)})^{${n - 1}}\\cdot ${a < 0 ? `(${a})` : a} = ${tz(n * a)}(${linTex(a, b)})^{${n - 1}}$`,
        };
      }
      if (art === 1) {
        const a = r.intOhne0(-3, 3);
        const b = r.int(-4, 4);
        const inner = polyTex([a, b, 0]);
        return {
          angabe: `Leite ab: $f(x) = e^{${inner}}$.`,
          teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `(${2 * a}*x + (${b}))*e^(${a}*x^2 + (${b})*x)`, bereich: [-1.5, 1.5] }],
          loesung: `Außen $e^u$ (Ableitung $e^u$), innen $u = ${inner}$ mit $u' = ${polyTex([2 * a, b])}$.\n---\n$f'(x) = (${polyTex([2 * a, b])})\\,e^{${inner}}$`,
        };
      }
      if (art === 2) {
        const a = r.intOhne0(-5, 5);
        const b = r.int(-3, 3);
        const fn = r.wahl(["sin", "cos"] as const);
        const inner = linTex(a, b);
        const loes = fn === "sin" ? `${a}*cos(${a}*x + (${b}))` : `${-a}*sin(${a}*x + (${b}))`;
        const fak = (z: number) => (z === 1 ? "" : z === -1 ? "-" : tz(z));
        const tex = fn === "sin" ? `${fak(a)}\\cos(${inner})` : `${fak(-a)}\\sin(${inner})`;
        return {
          angabe: `Leite ab: $f(x) = \\${fn}(${inner})$.`,
          teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: loes }],
          loesung: `Außen $\\${fn} u$ mit Ableitung $${fn === "sin" ? "\\cos u" : "-\\sin u"}$, innen $u = ${inner}$ mit $u' = ${a}$.\n---\n$f'(x) = ${tex}$`,
        };
      }
      if (art === 3) {
        const a = r.int(1, 4);
        const c = r.int(1, 9);
        const inner = polyTex([a, 0, c]);
        return {
          angabe: `Leite ab: $f(x) = \\ln(${inner})$.`,
          teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${2 * a}*x/(${a}*x^2 + ${c})` }],
          loesung: `Außen $\\ln u$ mit Ableitung $\\frac1u$, innen $u = ${inner}$ mit $u' = ${tz(2 * a)}x$.\n---\n$f'(x) = \\dfrac{${tz(2 * a)}x}{${inner}}$`,
        };
      }
      const a = r.int(1, 6);
      const b = r.int(1, 9);
      const inner = linTex(a, b);
      return {
        angabe: `Leite ab: $f(x) = \\sqrt{${inner}}$.`,
        teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${a}/(2*sqrt(${a}*x + ${b}))`, bereich: [0.5, 4] }],
        loesung: `Außen $\\sqrt u$ mit Ableitung $\\frac{1}{2\\sqrt u}$, innen $u = ${inner}$ mit $u' = ${a}$.\n---\n$f'(x) = \\dfrac{${a}}{2\\sqrt{${inner}}}$`,
      };
    },
  }),
  drill({
    id: "dr-d-quotient",
    kapitel: K,
    titel: "Quotientenregel",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-5, 5);
      const b = r.int(-6, 6);
      const c = r.int(1, 3);
      let d = r.int(1, 6);
      if (a * d - b * c === 0) d += 1;
      const z = a * d - b * c;
      return {
        angabe: `Leite ab und vereinfache den Zähler: $f(x) = \\dfrac{${linTex(a, b)}}{${linTex(c, d)}}$.`,
        teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${z}/(${c}*x + ${d})^2`, bereich: [0.5, 4] }],
        hinweis: "„NAZ minus ZAN durch N-Quadrat“.",
        loesung: `$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ mit $u = ${linTex(a, b)}$, $u' = ${a}$, $v = ${linTex(c, d)}$, $v' = ${c}$.\n---\nZähler: $${a < 0 ? `(${a})` : a}(${linTex(c, d)}) - (${linTex(a, b)})\\cdot ${c} = (${polyTex([a * c, a * d])}) - (${polyTex([a * c, b * c])}) = ${z}$\n---\n$f'(x) = \\dfrac{${z}}{(${linTex(c, d)})^2}$`,
      };
    },
  }),
  drill({
    id: "dr-d-basis-a",
    kapitel: K,
    titel: "Exponential- und Logarithmusfunktion mit Basis a",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 5, 10]);
      const c = r.intOhne0(-5, 5);
      const vorfaktor = c === 1 ? "" : c === -1 ? "-" : `${c}\\cdot `;
      if (r.zufall() < 0.6) {
        return {
          angabe: `Leite ab: $f(x) = ${vorfaktor}${a}^x$.`,
          teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${c}*ln(${a})*${a}^x` }],
          hinweis: `$${a}^x = e^{x\\ln ${a}}$.`,
          loesung: `$${a}^x = e^{x\\ln ${a}}$, Kettenregel: $(${a}^x)' = \\ln ${a}\\cdot ${a}^x$.\n---\n$f'(x) = ${tz(c)}\\ln ${a}\\cdot ${a}^x \\approx ${tz(c * Math.log(a), 3)}\\cdot ${a}^x$`,
        };
      }
      return {
        angabe: `Leite ab: $f(x) = ${vorfaktor}\\log_{${a}} x$.`,
        teile: [{ typ: "term", variable: "x", label: "$f'(x)$", loesung: `${c}/(x*ln(${a}))`, bereich: [0.5, 4] }],
        hinweis: `Basiswechsel: $\\log_{${a}} x = \\frac{\\ln x}{\\ln ${a}}$.`,
        loesung: `$\\log_{${a}} x = \\dfrac{\\ln x}{\\ln ${a}}$, und $\\frac{1}{\\ln ${a}}$ ist ein konstanter Faktor.\n---\n$f'(x) = \\dfrac{${c}}{x\\ln ${a}}$`,
      };
    },
  }),
  drill({
    id: "dr-d-tangente",
    kapitel: K,
    titel: "Tangentengleichung",
    niveau: 1,
    erzeuge: (r) => {
      const f = r.zufall() < 0.5 ? [r.intOhne0(-3, 3), r.int(-5, 5), r.int(-5, 5)] : [r.intOhne0(-2, 2), r.int(-3, 3), r.int(-4, 4), r.int(-4, 4)];
      const x0 = r.int(-2, 2);
      const y0 = pw(f, x0);
      const fs = pAbl(f);
      const k = pw(fs, x0);
      const d = y0 - k * x0;
      return {
        angabe: `Bestimme die Gleichung der Tangente an den Graphen von $f(x) = ${polyTex(f)}$ an der Stelle $x_0 = ${x0}$.`,
        teile: [{ typ: "term", variable: "x", label: "Tangente: $y = $", loesung: `${k}*x + (${d})` }],
        loesung: `Berührpunkt: $f(${x0}) = ${y0}$.\n---\nSteigung: $f'(x) = ${polyTex(fs)}$, also $f'(${x0}) = ${k}$.\n---\n$y = ${y0} ${k < 0 ? "-" : "+"} ${Math.abs(k)}\\,(x ${x0 < 0 ? "+" : "-"} ${Math.abs(x0)}) = ${geradeTex(k, d)}$`,
      };
    },
  }),
  drill({
    id: "dr-d-extrema",
    kapitel: K,
    titel: "Extrempunkte eines Polynoms 3. Grades",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(-2, 2);
      const q = p + r.int(1, 3);
      const k = r.vorzeichen();
      const d = r.int(-5, 5);
      // f'(x) = 6k(x-p)(x-q)
      const f = [2 * k, -3 * k * (p + q), 6 * k * p * q, d];
      const fp = pw(f, p);
      const fq = pw(f, q);
      const [hx, hy, tx, ty] = k === 1 ? [p, fp, q, fq] : [q, fq, p, fp];
      return {
        angabe: `Bestimme Hoch- und Tiefpunkt von $f(x) = ${polyTex(f)}$.`,
        teile: [
          { typ: "vektor", label: "Hochpunkt", namen: ["x", "y"], loesung: [String(hx), String(hy)] },
          { typ: "vektor", label: "Tiefpunkt", namen: ["x", "y"], loesung: [String(tx), String(ty)] },
        ],
        hinweis: "$f'(x) = 0$ lösen (zuerst den gemeinsamen Faktor herausheben), dann mit $f''$ die Art bestimmen.",
        loesung: `$f'(x) = ${polyTex(pAbl(f))} = ${tz(6 * k)}\\,(${polyTex([1, -(p + q), p * q])})$, Nullstellen $x = ${p}$ und $x = ${q}$.\n---\n$f''(x) = ${polyTex(pAbl(pAbl(f)))}$: $f''(${p}) = ${pw(pAbl(pAbl(f)), p)}$, $f''(${q}) = ${pw(pAbl(pAbl(f)), q)}$.\n---\nNegativ heißt Hochpunkt, positiv Tiefpunkt: $H(${hx} \\mid ${hy})$, $T(${tx} \\mid ${ty})$ (y-Werte mit $f$ berechnet).`,
      };
    },
  }),
  drill({
    id: "dr-d-wendepunkt",
    kapitel: K,
    titel: "Wendepunkt eines Polynoms 3. Grades",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([-2, -1, 1, 2]);
      const xw = r.int(-2, 2);
      const b = -3 * a * xw;
      const c = r.int(-6, 6);
      const d = r.int(-5, 5);
      const f = [a, b, c, d];
      const yw = pw(f, xw);
      return {
        angabe: `Bestimme den Wendepunkt von $f(x) = ${polyTex(f)}$.`,
        teile: [{ typ: "vektor", label: "Wendepunkt", namen: ["x", "y"], loesung: [String(xw), String(yw)] }],
        loesung: `$f'(x) = ${polyTex(pAbl(f))}$, $f''(x) = ${polyTex(pAbl(pAbl(f)))}$.\n---\nWendestellen sind Nullstellen von $f''$: Aus $f''(x) = 0$ folgt $x = ${xw}$. Weil $f'''(x) = ${6 * a} \\neq 0$ ist, wechselt die Krümmung dort wirklich.\n---\nDie Höhe berechnen wir mit $f$, nicht mit einer Ableitung: $f(${xw}) = ${yw}$. Wendepunkt $W(${xw} \\mid ${yw})$.`,
      };
    },
  }),
  drill({
    id: "dr-d-extremwert",
    kapitel: K,
    titel: "Extremwertaufgabe Rechteck",
    niveau: 2,
    erzeuge: (r) => {
      const L = r.wahl([40, 48, 60, 80, 100, 120, 160, 200]);
      if (r.zufall() < 0.5) {
        return {
          angabe: `Ein rechteckiges Beet soll mit $${L}$ m Zaun vollständig umgeben werden. Welche Fläche kann es höchstens haben?`,
          teile: [{ typ: "zahl", label: "maximale Fläche", einheit: "m²", loesung: `(${L}/4)^2` }],
          hinweis: "Nebenbedingung $2x + 2y = U$, Zielfunktion $A(x) = x(U/2 - x)$.",
          loesung: `$y = ${L / 2} - x$, $A(x) = x(${L / 2} - x) = ${L / 2}x - x^2$, $0 < x < ${L / 2}$.\n---\nAbleitung null setzen: $A'(x) = ${L / 2} - 2x = 0$ ergibt $x = ${tz(L / 4)}$. Wegen $A'' = -2 < 0$ ist das ein Maximum.\n---\nQuadrat mit Seite $${tz(L / 4)}$ m: $A = ${tz((L * L) / 16)}\\ \\text{m}^2$.`,
        };
      }
      return {
        angabe: `Eine rechteckige Weide grenzt an einen Fluss. Die drei übrigen Seiten werden mit $${L}$ m Zaun eingezäunt. Wie groß ist die Weide höchstens?`,
        teile: [{ typ: "zahl", label: "maximale Fläche", einheit: "m²", loesung: `${L}^2/8` }],
        hinweis: "Mit $x$ = Seite senkrecht zum Fluss gilt $2x + y = L$.",
        loesung: `$y = ${L} - 2x$, $A(x) = x(${L} - 2x) = ${L}x - 2x^2$, $0 < x < ${L / 2}$.\n---\nAbleitung null setzen: $A'(x) = ${L} - 4x = 0$ ergibt $x = ${tz(L / 4)}$. Wegen $A'' = -4 < 0$ ist das ein Maximum.\n---\n$y = ${tz(L / 2)}$ m, $A = ${tz(L / 4)}\\cdot ${tz(L / 2)} = ${tz((L * L) / 8)}\\ \\text{m}^2$.`,
      };
    },
  }),
  drill({
    id: "dr-d-newton",
    kapitel: K,
    titel: "Newton-Verfahren für Quadratwurzeln",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17, 18, 20]);
      const x0 = Math.round(Math.sqrt(a));
      const x1 = (x0 + a / x0) / 2;
      const x2 = (x1 + a / x1) / 2;
      return {
        angabe: `Bestimme mit dem Newton-Verfahren für $f(x) = x^2 - ${a}$ und dem Startwert $x_0 = ${x0}$ die Näherungen $x_1$ und $x_2$ (auf vier Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "$x_1$", loesung: `${x0} - (${x0}^2 - ${a})/(2*${x0})`, anzeige: bruchTex(x0 * x0 + a, 2 * x0), toleranz: 0.0001 },
          { typ: "zahl", label: "$x_2$", loesung: `${x1} - (${x1}^2 - ${a})/(2*${x1})`, toleranz: 0.0001 },
        ],
        hinweis: "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ mit $f'(x) = 2x$.",
        loesung: `$x_1 = ${x0} - \\dfrac{${x0 * x0} - ${a}}{${2 * x0}} = ${bruchTex(x0 * x0 + a, 2 * x0)} \\approx ${tz(x1, 4)}$\n---\n$x_2 = x_1 - \\dfrac{x_1^2 - ${a}}{2x_1} \\approx ${tz(x2, 4)}$\n---\nVergleich: $\\sqrt{${a}} \\approx ${tz(Math.sqrt(a), 6)}$.`,
      };
    },
  }),
  drill({
    id: "dr-d-bremsen",
    kapitel: K,
    titel: "Bremsvorgang",
    niveau: 2,
    erzeuge: (r) => {
      const [kmh, k, T] = r.wahl([
        // Verzögerung am Ende höchstens 10 m/s² (realistische Vollbremsung eines Autos)
        [72, 1.25, 4],
        [54, 0.6, 5],
        [72, 0.8, 5],
        [36, 0.4, 5],
        [36, 2.5, 2],
        [108, 0.3, 10],
        [36, 0.625, 4],
        [72, 0.2, 10],
        [54, 0.15, 10],
      ] as const);
      const c = kmh / 3.6;
      return {
        angabe: `Ein Auto fährt mit $${kmh}$ km/h und bremst. Seine Geschwindigkeit $t$ Sekunden nach Bremsbeginn ist $v(t) = c - ${tz(k)}\\,t^2$ (in m/s). Bestimme $c$, die Bremsdauer und die Beschleunigung im Moment des Stillstands.`,
        teile: [
          { typ: "zahl", label: "$c$", einheit: "m/s", loesung: `${kmh}/3.6` },
          { typ: "zahl", label: "Bremsdauer", einheit: "s", loesung: `sqrt(${c}/${k})` },
          { typ: "zahl", label: "Beschleunigung bei Stillstand", einheit: "m/s²", loesung: `-2*${k}*${T}` },
        ],
        hinweis: "km/h durch 3,6 ergibt m/s. Stillstand: $v(t) = 0$. Beschleunigung $a(t) = v'(t)$.",
        loesung: `$${kmh}\\ \\text{km/h} = ${kmh} : 3{,}6\\ \\text{m/s} = ${tz(c)}\\ \\text{m/s}$, und $v(0) = c$, also $c = ${tz(c)}$.\n---\n$v(t) = 0$: $t^2 = \\dfrac{${tz(c)}}{${tz(k)}} = ${tz(T * T)}$, also $t = ${T}$ s.\n---\n$a(t) = v'(t) = ${tz(-2 * k)}\\,t$, $a(${T}) = ${tz(-2 * k * T)}\\ \\text{m/s}^2$.`,
      };
    },
  }),
  drill({
    id: "dr-d-aenderungsmasse",
    kapitel: K,
    titel: "Absolute und relative Änderung, Änderungsfaktor",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([40, 80, 120, 200, 400]);
      const proz = r.wahl([-30, -25, -20, -15, -10, 5, 10, 15, 20, 25, 40, 50]);
      const b = (a * (100 + proz)) / 100;
      const jahre = r.int(2, 5);
      return {
        angabe: `Ein Bestand ändert sich in $${jahre}$ Jahren von $${tz(a)}$ auf $${tz(b)}$ Stück. Berechne die relative Änderung in Prozent, den Änderungsfaktor und die mittlere Änderungsrate in Stück pro Jahr.`,
        teile: [
          { typ: "zahl", label: "relative Änderung", einheit: "%", loesung: `(${b} - ${a})/${a}*100`, fehler: [{ wert: `(${b} - ${a})/${b}*100`, meldung: "Prozentuelle Änderungen beziehen sich auf den **Anfangswert**, nicht auf den Endwert." }] },
          { typ: "zahl", label: "Änderungsfaktor", loesung: `${b}/${a}`, fehler: [{ wert: `(${b} - ${a})/${a}`, meldung: "Das ist die relative Änderung. Der Faktor ist Endwert durch Anfangswert, also um $1$ größer." }] },
          { typ: "zahl", label: "mittlere Änderungsrate", einheit: "Stück/Jahr", loesung: `(${b} - ${a})/${jahre}`, fehler: [{ wert: `${b} - ${a}`, meldung: "Das ist die absolute Änderung. Die Rate gibt die Änderung **pro Jahr** an." }] },
        ],
        hinweis: "Relative Änderung: Änderung durch Anfangswert. Faktor: Endwert durch Anfangswert. Rate: Änderung durch Zeitspanne.",
        loesung: `Absolute Änderung: Ende minus Anfang, $${tz(b)} - ${tz(a)} = ${tz(b - a)}$ Stück.\n---\nRelative Änderung: $\\dfrac{${tz(b - a)}}{${tz(a)}} = ${tz(proz / 100)}$, also $${proz}\\,\\%$. Faktor: $\\dfrac{${tz(b)}}{${tz(a)}} = ${tz(b / a)}$, das ist $1$ plus relative Änderung.\n---\nMittlere Änderungsrate: $\\dfrac{${tz(b - a)}}{${jahre}} = ${tz((b - a) / jahre, 2)}$ Stück pro Jahr.`,
      };
    },
  }),
  drill({
    id: "dr-d-linearisierung",
    kapitel: K,
    titel: "Fehlerfortpflanzung mit der Ableitung",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.wahl([4, 5, 6, 8, 10, 12, 15, 20]);
      const da = r.wahl([0.1, 0.2, 0.5]);
      const form = r.wahl(["Würfel", "Quadrat"] as const);
      const n = form === "Würfel" ? 3 : 2;
      const abl = n * a ** (n - 1);
      const groesse = form === "Würfel" ? "das Volumen $V = a^3$ (in cm³)" : "die Fläche $A = a^2$ (in cm²)";
      return {
        angabe: `Die Kante eines ${form}s wird mit $a = ${a}$ cm gemessen, auf $\\pm ${tz(da)}$ cm genau. Schätze mit der linearen Näherung, wie unsicher ${groesse} ist, und gib die relative Unsicherheit in Prozent an.`,
        teile: [
          { typ: "zahl", label: "absolute Unsicherheit", loesung: `${n}*${a}^${n - 1}*${da}`, fehler: [{ wert: `${da}^${n}`, meldung: "Du hast die Messunsicherheit selbst in die Formel eingesetzt. Die Unsicherheit ist die Ableitung mal $\\Delta a$." }] },
          { typ: "zahl", label: "relative Unsicherheit", einheit: "%", loesung: `${n}*${da}/${a}*100`, fehler: [{ wert: `${da}/${a}*100`, meldung: `Das ist die relative Unsicherheit der Kante. Die Hochzahl $${n}$ vervielfacht sie.` }] },
        ],
        hinweis: "Fehlerfortpflanzung: Unsicherheit des Ergebnisses ist ungefähr Ableitung mal Messunsicherheit.",
        loesung: `Ansatz: lineare Näherung $\\Delta f \\approx f'(a)\\cdot\\Delta a$. Die Ableitung von $a^${n}$ ist $${n}a^{${n - 1}}$, an der Stelle $${a}$ also $${abl}$.\n---\nAbsolute Unsicherheit: $${abl}\\cdot ${tz(da)} = ${tz(abl * da, 3)}$.\n---\nRelativ: $\\dfrac{${tz(abl * da, 3)}}{${a ** n}} = ${tz((n * da * 100) / a, 3)}\\,\\%$. Das ist $${n}$-mal die relative Unsicherheit der Kante, $\\frac{${tz(da)}}{${a}}$.`,
      };
    },
  }),
  drill({
    id: "dr-d-gewinn",
    kapitel: K,
    titel: "Gewinnmaximum bei festem Preis",
    niveau: 2,
    erzeuge: (r) => {
      const xopt = r.int(8, 30);
      const c = r.wahl([1, 2]);
      const b = r.int(2, 10);
      const p = b + 2 * c * xopt;
      const F = r.wahl([50, 80, 100, 120, 150]);
      const gmax = c * xopt * xopt - F;
      return {
        angabe: `Ein Produkt wird um $${p}$ Euro pro Stück verkauft. Die Kosten für $x$ Stück sind $K(x) = ${c === 1 ? "" : c}x^2 + ${b}x + ${F}$ Euro. Bei welcher Stückzahl ist der Gewinn am größten, und wie groß ist er?`,
        teile: [
          { typ: "zahl", label: "gewinnoptimale Stückzahl", loesung: String(xopt), fehler: [{ wert: `${p}/(2*${c})`, meldung: "Im Gewinn steht $" + p + "x - " + b + "x$. Die Ableitung von $G$ enthält deshalb $" + (p - b) + "$, nicht $" + p + "$." }] },
          { typ: "zahl", label: "größter Gewinn", einheit: "Euro", loesung: `${p}*${xopt} - (${c}*${xopt}^2 + ${b}*${xopt} + ${F})`, fehler: [{ wert: `${p}*${xopt}`, meldung: "Das ist der Erlös. Vom Erlös musst du die Kosten abziehen." }] },
        ],
        hinweis: "Gewinn ist Erlös minus Kosten. Im Maximum ist die Ableitung des Gewinns null.",
        loesung: `Ansatz: $G(x) = ${p}x - K(x) = ${polyTex([-c, p - b, -F])}$.\n---\n$G'(x) = ${polyTex([-2 * c, p - b])} = 0$ ergibt $x = ${xopt}$. Wegen $G''(x) = ${-2 * c} < 0$ ist das ein Maximum.\n---\nGrößter Gewinn: $G(${xopt}) = ${gmax}$ Euro. Kontrolle: Grenzerlös $${p}$ gleich Grenzkosten $K'(${xopt}) = ${2 * c * xopt + b}$.`,
      };
    },
  }),
];
