import { drill, tz, polyTex, polyAusdruck, bruchTex, type Drill } from "@/lib/lernen/training";

const K = "integralrechnung";

/** Faktor vor einem Term als LaTeX: 1 -> "", -1 -> "-", 3 -> "3" */
function fak(k: number): string {
  return k === 1 ? "" : k === -1 ? "-" : tz(k);
}

/** Bruch a/b als LaTeX-Faktor vor einem Term (1 -> "", -1 -> "-") */
function bruchFak(z: number, n: number): string {
  const t = bruchTex(z, n);
  return t === "1" ? "" : t === "-1" ? "-" : t;
}

/** Vorzeichen-Summand mit Klammerinhalt: (+3) -> "+ 3", (-2) -> "- 2" */
function plus(k: number): string {
  return k < 0 ? `- ${tz(-k)}` : `+ ${tz(k)}`;
}

/** Linearfaktor (x - p) als LaTeX; p = 0 -> "x" */
function linf(p: number): string {
  return p === 0 ? "x" : `(x ${plus(-p)})`;
}

/** Zahl in Klammern, wenn sie negativ ist (fuer Einsetzungen wie F(-2)) */
function kl(v: number): string {
  return v < 0 ? `(${tz(v)})` : tz(v);
}

export const DRILLS: Drill[] = [
  drill({
    id: "ir-d-polynom",
    kapitel: K,
    titel: "Polynom integrieren",
    niveau: 1,
    erzeuge: (r) => {
      // Stammfunktion mit ganzzahligen Koeffizienten wählen, f daraus ableiten
      const b4 = r.int(0, 2) * r.vorzeichen();
      const b3 = r.intOhne0(-3, 3);
      const b2 = r.int(-4, 4);
      const b1 = r.intOhne0(-6, 6);
      const F = [b4, b3, b2, b1, 0];
      const f = [4 * b4, 3 * b3, 2 * b2, b1];
      const fStart = b4 === 0 ? f.slice(1) : f;
      const FStart = b4 === 0 ? F.slice(1) : F;
      const abl = [12 * b4, 6 * b3, 2 * b2];
      const ablStart = b4 === 0 ? abl.slice(1) : abl;
      return {
        angabe: `Bestimme eine Stammfunktion von $f(x) = ${polyTex(fStart)}$. Die Konstante $C$ darfst du bei der Eingabe weglassen.`,
        teile: [
          {
            typ: "term",
            label: "$F(x)$",
            loesung: polyAusdruck(FStart),
            plusC: true,
            fehler: [{ wert: polyAusdruck(ablStart), meldung: "Das ist die Ableitung von $f$. Beim Integrieren wird die Hochzahl um $1$ größer, nicht kleiner." }],
          },
        ],
        hinweis: "Integriere Summand für Summand: Hochzahl um 1 erhöhen, dann durch die neue Hochzahl teilen.",
        loesung: `**Ansatz:** Nach der Summen- und Faktorregel darfst du jeden Summanden einzeln integrieren. Für jede Potenz gilt die Potenzregel $\\int x^n\\,\\dd x = \\frac{x^{n+1}}{n+1}$, weil die Ableitung von $\\frac{x^{n+1}}{n+1}$ wieder $x^n$ ist.\n---\nGliedweise integriert: $F(x) = ${polyTex(FStart)} + C$.\n---\n**Probe** durch Ableiten: $F'(x) = ${polyTex(fStart)}$. Das ist genau $f(x)$, die Stammfunktion stimmt.`,
      };
    },
  }),
  drill({
    id: "ir-d-hauptsatz",
    kapitel: K,
    titel: "Bestimmtes Integral mit dem Hauptsatz",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.intOhne0(-2, 2);
      const q = r.int(-3, 3);
      const s = r.int(-5, 5);
      const a = r.int(-2, 1);
      const b = a + r.int(1, 3);
      const Fk = [p, q, s, 0];
      const F = (x: number) => p * x ** 3 + q * x ** 2 + s * x;
      const f = [3 * p, 2 * q, s];
      const fehler = F(b) + F(a) !== F(b) - F(a) ? [{ wert: `(${F(b)}) + (${F(a)})`, meldung: "Du hast $F(b)$ und $F(a)$ addiert. Der Hauptsatz verlangt die Differenz „obere Grenze minus untere Grenze“." }] : undefined;
      return {
        angabe: `Berechne $\\displaystyle\\int_{${a}}^{${b}} \\left(${polyTex(f)}\\right)\\dd x$.`,
        teile: [{ typ: "zahl", loesung: `(${F(b)}) - (${F(a)})`, ...(fehler ? { fehler } : {}) }],
        hinweis: "Bestimme eine Stammfunktion F. Setze dann die obere Grenze ein und ziehe den Wert an der unteren Grenze in Klammern ab.",
        loesung: `**Ansatz:** Nach dem Hauptsatz ist $\\int_a^b f(x)\\,\\dd x = F(b) - F(a)$ für jede Stammfunktion $F$. Gliedweise integriert: $F(x) = ${polyTex(Fk)}$.\n---\nObere Grenze: $F(${b}) = ${F(b)}$. Untere Grenze: $F(${a}) = ${F(a)}$.\n---\nDifferenz mit Klammer um den abgezogenen Wert: $F(${b}) - F(${a}) = ${F(b)} - ${kl(F(a))} = ${F(b) - F(a)}$.`,
      };
    },
  }),
  drill({
    id: "ir-d-linear",
    kapitel: K,
    titel: "Lineare Substitution: e, sin, cos",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 4, 5]);
      const m = r.intOhne0(-3, 3);
      const k = a * m; // Faktor, damit die Stammfunktion ganzzahlig wird
      const art = r.wahl(["exp", "sin", "cos"] as const);
      const ax = `${a}x`;
      if (art === "exp") {
        return {
          angabe: `Bestimme eine Stammfunktion von $f(x) = ${fak(k)}e^{${ax}}$.`,
          teile: [
            {
              typ: "term",
              label: "$F(x)$",
              loesung: `${m}*e^(${a}*x)`,
              plusC: true,
              bereich: [-1, 1],
              fehler: [{ wert: `${k * a}*e^(${a}*x)`, meldung: "Du hast mit der inneren Ableitung multipliziert. Das macht man beim Ableiten. Beim Integrieren teilt man durch sie." }],
            },
          ],
          hinweis: `Die innere Funktion ist $${ax}$ mit Ableitung $${a}$. Beim Integrieren teilst du durch diese Zahl.`,
          loesung: `**Ansatz:** Im Exponenten steht der lineare Ausdruck $${ax}$. Nach der linearen Substitution gilt $\\int e^{ax}\\,\\dd x = \\frac1a e^{ax}$, weil beim Ableiten von $e^{ax}$ der Faktor $a$ entsteht.\n---\nHier ist $a = ${a}$: $F(x) = \\frac{${k}}{${a}}\\,e^{${ax}} = ${fak(m)}e^{${ax}} + C$.\n---\n**Probe:** $\\left(${fak(m)}e^{${ax}}\\right)' = ${tz(m * a)}e^{${ax}}$. Das ist $f(x)$.`,
        };
      }
      if (art === "sin") {
        return {
          angabe: `Bestimme eine Stammfunktion von $f(x) = ${fak(k)}\\sin(${ax})$.`,
          teile: [
            {
              typ: "term",
              label: "$F(x)$",
              loesung: `${-m}*cos(${a}*x)`,
              plusC: true,
              fehler: [{ wert: `${m}*cos(${a}*x)`, meldung: "Das Vorzeichen stimmt nicht. Die Stammfunktion des Sinus ist $-\\cos$, denn $(-\\cos u)' = \\sin u$." }],
            },
          ],
          hinweis: "Die Stammfunktion des Sinus ist minus Kosinus. Danach teilst du durch die innere Ableitung.",
          loesung: `**Ansatz:** Lineare Substitution. Es gilt $\\int \\sin(ax)\\,\\dd x = -\\frac1a\\cos(ax)$, weil $\\left(-\\cos(ax)\\right)' = a\\sin(ax)$ ist.\n---\nHier ist $a = ${a}$: $F(x) = -\\frac{${k}}{${a}}\\cos(${ax}) = ${fak(-m)}\\cos(${ax}) + C$.\n---\n**Probe:** $\\left(${fak(-m)}\\cos(${ax})\\right)' = ${tz(m * a)}\\sin(${ax})$. Das ist $f(x)$.`,
        };
      }
      return {
        angabe: `Bestimme eine Stammfunktion von $f(x) = ${fak(k)}\\cos(${ax})$.`,
        teile: [
          {
            typ: "term",
            label: "$F(x)$",
            loesung: `${m}*sin(${a}*x)`,
            plusC: true,
            fehler: [{ wert: `${k}*sin(${a}*x)`, meldung: `Es fehlt das Teilen durch die innere Ableitung $${a}$.` }],
          },
        ],
        hinweis: `Die innere Funktion ist $${ax}$. Beim Integrieren teilst du durch ihre Ableitung $${a}$.`,
        loesung: `**Ansatz:** Lineare Substitution. Es gilt $\\int \\cos(ax)\\,\\dd x = \\frac1a\\sin(ax)$, weil $\\left(\\sin(ax)\\right)' = a\\cos(ax)$ ist.\n---\nHier ist $a = ${a}$: $F(x) = \\frac{${k}}{${a}}\\sin(${ax}) = ${fak(m)}\\sin(${ax}) + C$.\n---\n**Probe:** $\\left(${fak(m)}\\sin(${ax})\\right)' = ${tz(m * a)}\\cos(${ax})$. Das ist $f(x)$.`,
      };
    },
  }),
  drill({
    id: "ir-d-anfangswert",
    kapitel: K,
    titel: "Stammfunktion durch einen Punkt",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.intOhne0(-2, 2);
      const q = r.int(-3, 3);
      const s = r.int(-4, 4);
      const x0 = r.intOhne0(-2, 2);
      const y0 = r.int(-6, 8);
      const F0 = p * x0 ** 3 + q * x0 ** 2 + s * x0;
      const C = y0 - F0;
      const f = [3 * p, 2 * q, s];
      const fehler = F0 !== 0 ? [{ wert: polyAusdruck([p, q, s, y0]), meldung: `Die Konstante ist nicht einfach der $y$-Wert des Punktes. Setze $x = ${x0}$ in $F(x) = \\ldots + C$ ein und löse nach $C$.` }] : undefined;
      return {
        angabe: `Bestimme die Stammfunktion $F$ von $f(x) = ${polyTex(f)}$, deren Graph durch $P(${x0} \\mid ${y0})$ geht.`,
        teile: [{ typ: "term", label: "$F(x)$", loesung: polyAusdruck([p, q, s, C]), ...(fehler ? { fehler } : {}) }],
        hinweis: `Bestimme zuerst alle Stammfunktionen in der Form $F(x) = \\ldots + C$. Die Bedingung lautet dann $F(${x0}) = ${y0}$.`,
        loesung: `**Ansatz:** Alle Stammfunktionen haben die Form $F(x) = ${polyTex([p, q, s, 0])} + C$. Die Bedingung „Graph geht durch $P$“ legt die Konstante $C$ fest.\n---\nEinsetzen von $x = ${x0}$: $F(${x0}) = ${F0} + C$. Das soll $${y0}$ sein, also $C = ${y0} - ${kl(F0)} = ${C}$.\n---\nErgebnis: $F(x) = ${polyTex([p, q, s, C])}$. **Probe:** $F(${x0}) = ${F0} + ${kl(C)} = ${y0}$. Es stimmt.`,
      };
    },
  }),
  drill({
    id: "ir-d-riemann",
    kapitel: K,
    titel: "Untersumme und Obersumme",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(0, 3);
      const h = r.wahl([0.5, 1]);
      const n = r.wahl([3, 4]);
      const b = n * h;
      const f = (x: number) => x * x + c;
      const links = Array.from({ length: n }, (_, i) => i * h);
      const rechts = Array.from({ length: n }, (_, i) => (i + 1) * h);
      const U = h * links.reduce((s, x) => s + f(x), 0);
      const O = h * rechts.reduce((s, x) => s + f(x), 0);
      const fTex = c === 0 ? "x^2" : `x^2 + ${c}`;
      const werte = [0, ...rechts].map((x) => tz(f(x))).join(";\\ ");
      return {
        angabe: `Berechne für $f(x) = ${fTex}$ auf $[0, ${tz(b)}]$ mit $n = ${n}$ gleich breiten Streifen die Untersumme $U_${n}$ und die Obersumme $O_${n}$.`,
        teile: [
          { typ: "zahl", label: `$U_${n}$`, loesung: `${h}*(${links.map((x) => `(${x}^2 + ${c})`).join(" + ")})`, fehler: [{ wert: String(O), meldung: "Das ist die Obersumme. Für die Untersumme brauchst du in jedem Streifen den kleinsten Wert, hier am linken Rand." }] },
          { typ: "zahl", label: `$O_${n}$`, loesung: `${h}*(${rechts.map((x) => `(${x}^2 + ${c})`).join(" + ")})`, ...(h !== 1 ? { fehler: [{ wert: String(O / h), meldung: "Du hast nur die Höhen addiert. Jede Höhe wird noch mit der Streifenbreite multipliziert." }] } : {}) },
        ],
        hinweis: `Die Streifenbreite ist $\\Delta x = ${tz(h)}$. Weil $f$ auf $[0, ${tz(b)}]$ wächst, liegt der kleinste Wert jedes Streifens am linken und der größte am rechten Rand.`,
        loesung: `**Ansatz:** Rechtecksummen mit $\\Delta x = \\frac{${tz(b)}}{${n}} = ${tz(h)}$. Weil $f$ hier wächst, nimmt die Untersumme die linken und die Obersumme die rechten Ränder der Streifen.\n---\nFunktionswerte an den Teilungspunkten $0;\\ ${rechts.map(tz).join(";\\ ")}$: $${werte}$.\n---\n$U_${n} = ${tz(h)}\\cdot(${links.map((x) => tz(f(x))).join(" + ")}) = ${tz(U)}$ und $O_${n} = ${tz(h)}\\cdot(${rechts.map((x) => tz(f(x))).join(" + ")}) = ${tz(O)}$.\n---\n**Kontrolle:** Das exakte Integral $\\frac{(${tz(b)})^3}{3} + ${c}\\cdot ${tz(b)} \\approx ${tz(b ** 3 / 3 + c * b, 3)}$ liegt zwischen $U_${n}$ und $O_${n}$.`,
      };
    },
  }),
  drill({
    id: "ir-d-flaeche-achse",
    kapitel: K,
    titel: "Fläche unter einem Parabelbogen",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.wahl([1, 2, 3]);
      const p = r.int(-3, 2);
      const q = p + r.int(2, 4);
      const koeff = [-k, k * (p + q), -k * p * q];
      const A = (k * (q - p) ** 3) / 6;
      const F = (x: number) => (-k * x ** 3) / 3 + (k * (p + q) * x ** 2) / 2 - k * p * q * x;
      return {
        angabe: `Berechne die Fläche, die der Graph von $f(x) = ${polyTex(koeff)}$ mit der $x$-Achse einschließt.`,
        teile: [{ typ: "zahl", label: "Fläche $A$", loesung: `${k}*(${q} - (${p}))^3/6` }],
        hinweis: "Bestimme zuerst die Nullstellen. Sie sind die Grenzen. Dazwischen liegt der Bogen über der Achse.",
        loesung: `**Ansatz:** Die Fläche liegt zwischen den beiden Nullstellen. Dort hat $f$ ein festes Vorzeichen, ein Integral genügt. Faktorisiert: $f(x) = ${fak(-k)}${linf(p)}${linf(q)}$, Nullstellen $${p}$ und $${q}$. Die Parabel ist nach unten offen, also ist $f \\ge 0$ dazwischen.\n---\nStammfunktion: $F(x) = ${bruchFak(-k, 3)}x^3 ${k * (p + q) === 0 ? "" : `${k * (p + q) < 0 ? "-" : "+"} ${bruchFak(Math.abs(k * (p + q)), 2)}x^2`} ${p * q === 0 ? "" : `${-k * p * q < 0 ? "-" : "+"} ${fak(Math.abs(k * p * q))}x`}$.\n---\n$A = F(${q}) - F(${p}) = ${tz(F(q), 3)} - ${kl(Number(F(p).toFixed(3)))} = ${bruchTex(k * (q - p) ** 3, 6)}${Number.isInteger(A) ? "" : ` \\approx ${tz(A, 3)}`}$. Das Ergebnis ist positiv, wie es für eine Fläche sein muss.`,
      };
    },
  }),
  drill({
    id: "ir-d-zwei-kurven",
    kapitel: K,
    titel: "Fläche zwischen Parabel und Gerade",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(-3, 1);
      const q = p + r.int(1, 4);
      const m = p + q;
      const c = -p * q;
      const A = (q - p) ** 3 / 6;
      return {
        angabe: `Berechne die Fläche zwischen den Graphen von $f(x) = x^2$ und $g(x) = ${polyTex([m, c])}$.`,
        teile: [{ typ: "zahl", label: "Fläche $A$", loesung: `(${q} - (${p}))^3/6`, fehler: [{ wert: `-(${q} - (${p}))^3/6`, meldung: "Eine Fläche ist nie negativ. Du hast „untere minus obere Kurve“ gerechnet. Zwischen den Schnittstellen liegt die Gerade oben." }] }],
        hinweis: "Bestimme die Schnittstellen aus $x^2 = g(x)$. Prüfe mit einem Testwert dazwischen, welche Kurve oben liegt.",
        loesung: `**Ansatz:** Die Fläche liegt zwischen den Schnittstellen. Dort integrieren wir „obere minus untere Kurve“.\n---\nSchnittstellen: $x^2 ${m === 0 ? "" : `${m < 0 ? "+" : "-"} ${fak(Math.abs(m))}x`} ${c === 0 ? "" : plus(-c)} = 0$, also $x = ${p}$ und $x = ${q}$. Zwischen ihnen liegt die Gerade oben, denn eine nach oben offene Parabel liegt zwischen ihren Schnittstellen mit einer Geraden unter dieser.\n---\n$A = \\int_{${p}}^{${q}} \\left(${polyTex([-1, m, c])}\\right)\\dd x = \\left[-\\frac{x^3}{3} ${m === 0 ? "" : `${m < 0 ? "-" : "+"} ${bruchFak(Math.abs(m), 2)}x^2`} ${c === 0 ? "" : `${c < 0 ? "-" : "+"} ${fak(Math.abs(c))}x`}\\right]_{${p}}^{${q}}$.\n---\n$A = ${bruchTex((q - p) ** 3, 6)}${Number.isInteger(A) ? "" : ` \\approx ${tz(A, 3)}`}$. **Kontrolle** mit der Formel $\\frac{(x_2 - x_1)^3}{6}$ für Parabel und Gerade: $\\frac{${q - p}^3}{6}$ ergibt denselben Wert.`,
      };
    },
  }),
  drill({
    id: "ir-d-vorzeichenwechsel",
    kapitel: K,
    titel: "Fläche mit Vorzeichenwechsel",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 3);
      const b = m + r.int(1, 2);
      const teil1 = (2 * m ** 3) / 3;
      const teil2 = b ** 3 / 3 - m * m * b + (2 * m ** 3) / 3;
      const bilanz = b ** 3 / 3 - m * m * b;
      return {
        angabe: `Berechne die Fläche zwischen dem Graphen von $f(x) = x^2 - ${m * m}$ und der $x$-Achse über dem Intervall $[0, ${b}]$.`,
        teile: [
          {
            typ: "zahl",
            label: "Fläche $A$",
            loesung: `2*${m}^3/3 + (${b}^3/3 - ${m * m}*${b} + 2*${m}^3/3)`,
            fehler: [{ wert: `abs(${b}^3/3 - ${m * m}*${b})`, meldung: "Du hast über die Nullstelle hinweg integriert und erst am Ende den Betrag genommen. Teile an der Nullstelle auf und nimm von jedem Teilintegral den Betrag." }],
          },
        ],
        hinweis: `Die Nullstelle $x = ${m}$ liegt im Intervall. Berechne die Teilintegrale auf $[0, ${m}]$ und $[${m}, ${b}]$ getrennt.`,
        loesung: `**Ansatz:** Im Intervall wechselt $f$ bei $x = ${m}$ das Vorzeichen. Auf $[0, ${m}]$ ist $f \\le 0$, auf $[${m}, ${b}]$ ist $f \\ge 0$. Deshalb teilen wir auf. Stammfunktion: $F(x) = \\frac{x^3}{3} - ${m * m}x$.\n---\n$\\int_0^{${m}} f\\,\\dd x = ${bruchTex(m ** 3 - 3 * m ** 3, 3)}$. Das Stück liegt unter der Achse, sein Betrag ist $${bruchTex(2 * m ** 3, 3)}$.\n---\n$\\int_{${m}}^{${b}} f\\,\\dd x = ${bruchTex(b ** 3 - 3 * m * m * b + 2 * m ** 3, 3)}$.\n---\n$A = ${bruchTex(2 * m ** 3, 3)} + ${bruchTex(b ** 3 - 3 * m * m * b + 2 * m ** 3, 3)} = ${bruchTex(b ** 3 - 3 * m * m * b + 4 * m ** 3, 3)} \\approx ${tz(teil1 + teil2, 3)}$. Zum Vergleich: Die Bilanz über das ganze Intervall wäre nur $${tz(bilanz, 3)}$.`,
      };
    },
  }),
  drill({
    id: "ir-d-substitution",
    kapitel: K,
    titel: "Substitution: innere Ableitung als Faktor",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(1, 4);
      const k = r.int(1, 5);
      const s = r.int(1, 3);
      const c = 2 * (n + 1) * s;
      return {
        angabe: `Bestimme $\\displaystyle\\int ${c}x\\,\\left(x^2 + ${k}\\right)^{${n}}\\,\\dd x$.`,
        teile: [
          {
            typ: "term",
            label: "$F(x)$",
            loesung: `${s}*(x^2 + ${k})^${n + 1}`,
            plusC: true,
            bereich: [-2, 2],
            fehler: [{ wert: `${c / 2}*(x^2 + ${k})^${n + 1}`, meldung: `Nach dem Ersetzen steht $${c / 2}\\,u^{${n}}$ im Integral. Bei der Potenzregel fehlt das Teilen durch die neue Hochzahl $${n + 1}$.` }],
          },
        ],
        hinweis: `Substituiere $u = x^2 + ${k}$. Dann ist $\\dd u = 2x\\,\\dd x$, und $${c}x\\,\\dd x = ${c / 2}\\,\\dd u$.`,
        loesung: `**Ansatz:** In der Klammer steht der innere Ausdruck $x^2 + ${k}$. Seine Ableitung $2x$ steht bis auf einen Zahlenfaktor davor. Also passt die Substitution $u = x^2 + ${k}$ mit $\\dd u = 2x\\,\\dd x$.\n---\nErsetzen: $${c}x\\,\\dd x = ${c / 2}\\,\\dd u$, also $\\int ${c / 2}\\,u^{${n}}\\,\\dd u = ${c / 2}\\cdot\\frac{u^{${n + 1}}}{${n + 1}} = ${fak(s)}u^{${n + 1}}$.\n---\nZurückersetzen: $F(x) = ${fak(s)}\\left(x^2 + ${k}\\right)^{${n + 1}} + C$. **Probe** mit der Kettenregel: Die Ableitung ist $${s * (n + 1)}\\left(x^2 + ${k}\\right)^{${n}}\\cdot 2x = ${c}x\\left(x^2 + ${k}\\right)^{${n}}$.`,
      };
    },
  }),
  drill({
    id: "ir-d-subst-bestimmt",
    kapitel: K,
    titel: "Bestimmtes Integral mit Substitution",
    niveau: 3,
    erzeuge: (r) => {
      const k = r.int(1, 3);
      const b = r.int(1, 2);
      const n = r.int(1, 3);
      const oben = b * b + k;
      const wert = (oben ** (n + 1) - k ** (n + 1)) / (2 * (n + 1));
      return {
        angabe: `Berechne $\\displaystyle\\int_0^{${b}} x\\left(x^2 + ${k}\\right)^{${n}}\\dd x$ exakt.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${oben}^${n + 1} - ${k}^${n + 1})/(2*${n + 1})`,
            fehler: [{ wert: `(${b}^${n + 1} - 0)/(2*${n + 1})`, meldung: `Du hast in die Stammfunktion in $u$ die alten $x$-Grenzen eingesetzt. Für $u = x^2 + ${k}$ werden die Grenzen zu $${k}$ und $${oben}$.` }],
          },
        ],
        hinweis: `Mit $u = x^2 + ${k}$ ist $x\\,\\dd x = \\frac12\\,\\dd u$. Die neuen Grenzen sind $u(0) = ${k}$ und $u(${b}) = ${oben}$.`,
        loesung: `**Ansatz:** Der innere Ausdruck $x^2 + ${k}$ hat die Ableitung $2x$, und $x$ steht als Faktor davor. Wir substituieren und ersetzen die Grenzen gleich mit.\n---\n$u = x^2 + ${k}$, also $x\\,\\dd x = \\frac12\\,\\dd u$. Grenzen: $x = 0$ ergibt $u = ${k}$, $x = ${b}$ ergibt $u = ${oben}$.\n---\n$\\int_{${k}}^{${oben}} \\frac12 u^{${n}}\\,\\dd u = \\frac12\\left[\\frac{u^{${n + 1}}}{${n + 1}}\\right]_{${k}}^{${oben}} = \\frac{${oben}^{${n + 1}} - ${k}^{${n + 1}}}{${2 * (n + 1)}} = ${bruchTex(oben ** (n + 1) - k ** (n + 1), 2 * (n + 1))}${Number.isInteger(wert) ? "" : ` \\approx ${tz(wert, 3)}`}$.\n---\n**Plausibilität:** Der Integrand ist auf $[0, ${b}]$ nicht negativ. Das Ergebnis ist positiv.`,
      };
    },
  }),
  drill({
    id: "ir-d-partiell",
    kapitel: K,
    titel: "Partielle Integration: Polynom mal e, sin, cos",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3);
      const b = r.int(-4, 4);
      const lin = polyTex([a, b]);
      const linA = `(${a}*x + ${b})`;
      const art = r.wahl(["exp", "cos", "sin"] as const);
      const wahl = `**Ansatz:** Polynom mal ${art === "exp" ? "e-Funktion" : art === "cos" ? "Kosinus" : "Sinus"}, also partielle Integration $\\int u\\,v'\\,\\dd x = uv - \\int u'\\,v\\,\\dd x$. Das Polynom $${lin}$ wird $u$, weil es beim Ableiten zur Zahl $${a}$ wird.`;
      if (art === "exp") {
        return {
          angabe: `Bestimme $\\displaystyle\\int \\left(${lin}\\right)e^x\\,\\dd x$.`,
          teile: [
            {
              typ: "term",
              label: "$F(x)$",
              loesung: `(${a}*x + ${b - a})*e^x`,
              plusC: true,
              bereich: [-2, 2],
              fehler: [{ wert: `(${a}*x + ${b + a})*e^x`, meldung: "Das Vorzeichen beim zweiten Summanden stimmt nicht. Vor dem neuen Integral steht in der Formel ein Minus." }],
            },
          ],
          hinweis: `Wähle $u = ${lin}$ (wird abgeleitet) und $v' = e^x$ (wird integriert).`,
          loesung: `${wahl}\n---\n$u' = ${a}$ und $v = e^x$. Formel: $\\int (${lin})e^x\\,\\dd x = (${lin})e^x - \\int ${fak(a)}e^x\\,\\dd x = (${lin})e^x ${a < 0 ? "+" : "-"} ${fak(Math.abs(a))}e^x$.\n---\nZusammengefasst: $F(x) = \\left(${polyTex([a, b - a])}\\right)e^x + C$. **Probe** mit der Produktregel: $${a}e^x + \\left(${polyTex([a, b - a])}\\right)e^x = \\left(${lin}\\right)e^x$.`,
        };
      }
      if (art === "cos") {
        return {
          angabe: `Bestimme $\\displaystyle\\int \\left(${lin}\\right)\\cos x\\,\\dd x$.`,
          teile: [
            {
              typ: "term",
              label: "$F(x)$",
              loesung: `${linA}*sin(x) + ${a}*cos(x)`,
              plusC: true,
              fehler: [{ wert: `${linA}*sin(x) - ${a}*cos(x)`, meldung: "Prüfe das Vorzeichen: $-\\int u'\\sin x\\,\\dd x = -u'\\cdot(-\\cos x)$. Zwei Minus ergeben Plus." }],
            },
          ],
          hinweis: `Wähle $u = ${lin}$ und $v' = \\cos x$, also $v = \\sin x$.`,
          loesung: `${wahl}\n---\n$u' = ${a}$ und $v = \\sin x$. Formel: $\\int (${lin})\\cos x\\,\\dd x = (${lin})\\sin x - \\int ${fak(a)}\\sin x\\,\\dd x$.\n---\nWeil $\\int \\sin x\\,\\dd x = -\\cos x$ ist, wird aus dem Minus ein Plus: $F(x) = (${lin})\\sin x ${a < 0 ? "-" : "+"} ${fak(Math.abs(a))}\\cos x + C$.`,
        };
      }
      return {
        angabe: `Bestimme $\\displaystyle\\int \\left(${lin}\\right)\\sin x\\,\\dd x$.`,
        teile: [
          {
            typ: "term",
            label: "$F(x)$",
            loesung: `-${linA}*cos(x) + ${a}*sin(x)`,
            plusC: true,
            fehler: [{ wert: `${linA}*cos(x) - ${a}*sin(x)`, meldung: "Du hast mit $v = \\cos x$ gerechnet. Die Stammfunktion von $\\sin x$ ist aber $-\\cos x$, denn $(-\\cos x)' = \\sin x$. Mit $v = -\\cos x$ ändern sich beide Vorzeichen." }],
          },
        ],
        hinweis: `Wähle $u = ${lin}$ und $v' = \\sin x$, also $v = -\\cos x$.`,
        loesung: `${wahl}\n---\n$u' = ${a}$ und $v = -\\cos x$. Formel: $\\int (${lin})\\sin x\\,\\dd x = -(${lin})\\cos x - \\int ${fak(a)}\\cdot(-\\cos x)\\,\\dd x = -(${lin})\\cos x + \\int ${fak(a)}\\cos x\\,\\dd x$.\n---\n$F(x) = -(${lin})\\cos x ${a < 0 ? "-" : "+"} ${fak(Math.abs(a))}\\sin x + C$. **Probe** durch Ableiten mit der Produktregel ergibt wieder $(${lin})\\sin x$.`,
      };
    },
  }),
  drill({
    id: "ir-d-grenze",
    kapitel: K,
    titel: "Obere Grenze gesucht",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 3);
      const n = r.int(0, 6);
      const b = r.int(1, 6);
      const W = m * b * b + n * b;
      const neg = (-n - Math.sqrt(n * n + 4 * m * W)) / (2 * m);
      return {
        angabe: `Bestimme $b > 0$ so, dass $\\displaystyle\\int_0^b \\left(${polyTex([2 * m, n])}\\right)\\dd x = ${W}$ gilt.`,
        teile: [{ typ: "zahl", label: "$b$", loesung: String(b), fehler: [{ wert: String(neg), meldung: "Diese Lösung der quadratischen Gleichung ist negativ. Laut Angabe ist $b > 0$, also musst du sie verwerfen." }] }],
        hinweis: "Rechne das Integral als Term in $b$ aus. Setze ihn gleich dem gegebenen Wert und löse die quadratische Gleichung.",
        loesung: `**Ansatz:** Integral als Term in der Unbekannten $b$ ausrechnen, dann gleich $${W}$ setzen. $\\int_0^b \\left(${polyTex([2 * m, n])}\\right)\\dd x = \\big[${polyTex([m, n, 0])}\\big]_0^b = ${polyTex([m, n, 0], "b")}$.\n---\nGleichung: $${polyTex([m, n, -W], "b")} = 0$. Die Lösungsformel liefert $b = ${b}$ und $b = ${tz(neg, 3)}$.\n---\nNur $b = ${b}$ ist positiv. **Probe:** $${m * b * b}${n ? ` + ${n * b}` : ""} = ${W}$. Es stimmt.`,
      };
    },
  }),
  drill({
    id: "ir-d-halbieren",
    kapitel: K,
    titel: "Fläche durch eine senkrechte Gerade halbieren",
    niveau: 3,
    erzeuge: (r) => {
      // (n, b) = (2, 3) ist die Musterprüfung Schranz-Kirlinger und bleibt ausgeschlossen
      const [n, b] = r.wahl([
        [1, 2], [1, 4], [1, 6], [2, 2], [2, 4], [3, 2], [3, 3], [3, 4],
      ] as const);
      const c = b / 2 ** (1 / (n + 1));
      const fTex = n === 1 ? "x" : `x^{${n}}`;
      return {
        angabe: `Die Fläche unter dem Graphen von $f(x) = ${fTex}$ über $[0, ${b}]$ soll durch eine senkrechte Gerade $x = c$ in zwei gleich große Teile geteilt werden. Bestimme $c$ auf drei Dezimalstellen.`,
        teile: [{ typ: "zahl", label: "$c$", loesung: `${b}/2^(1/${n + 1})`, fehler: [{ wert: String(b / 2), meldung: "Die Intervallmitte halbiert die Fläche hier nicht. $f$ wächst, also liegt rechts der Mitte mehr Fläche als links, und $c$ liegt rechts der Mitte." }] }],
        hinweis: `Die Gesamtfläche ist $\\int_0^{${b}} ${fTex}\\,\\dd x = \\frac{${b}^{${n + 1}}}{${n + 1}}$. Die linke Teilfläche $\\frac{c^{${n + 1}}}{${n + 1}}$ muss die Hälfte davon sein.`,
        loesung: `**Ansatz:** Die linke Teilfläche $\\int_0^c ${fTex}\\,\\dd x = \\frac{c^{${n + 1}}}{${n + 1}}$ muss genau die halbe Gesamtfläche sein.\n---\nGesamtfläche: $\\frac{${b}^{${n + 1}}}{${n + 1}} = ${bruchTex(b ** (n + 1), n + 1)}$. Gleichung: $\\frac{c^{${n + 1}}}{${n + 1}} = \\frac12\\cdot\\frac{${b}^{${n + 1}}}{${n + 1}}$, also $c^{${n + 1}} = \\frac{${b ** (n + 1)}}{2}$.\n---\nWurzel ziehen: $c = \\frac{${b}}{\\sqrt[${n + 1}]{2}} \\approx ${tz(c, 3)}$.\n---\n**Plausibilität:** $c$ liegt rechts der Mitte $${tz(b / 2)}$, weil der Graph rechts höher ist und dort mehr Fläche liegt.`,
      };
    },
  }),
  drill({
    id: "ir-d-bremsweg",
    kapitel: K,
    titel: "Bremsweg aus v(t) = c − k·t²",
    niveau: 3,
    erzeuge: (r) => {
      // c = k*T^2 muss als km/h-Wert schön sein: v0 in km/h = 3,6*c.
      // Ausgeschlossen: k = 1, T = 5 (90 km/h, Musterprüfung Karigl), k = 0,8 und 1,2 mit T = 5 (Kapitelaufgaben).
      // Realistisch: Die größte Verzögerung |v'(T)| = 2kT bleibt höchstens 10 m/s² (etwa 1 g, Haftgrenze von Reifen).
      const [k, T] = r.wahl([
        [1, 3], [1, 4], [1.5, 3], [0.5, 5], [0.5, 6], [0.5, 7], [0.5, 8],
      ] as const);
      const c = k * T * T;
      const kmh = 3.6 * c;
      const s = (2 / 3) * c * T;
      return {
        angabe: `Ein Fahrzeug fährt mit $${tz(kmh)}$ km/h und bremst voll. Seine Geschwindigkeit in m/s ist $v(t) = c - ${tz(k)}\\,t^2$, $t$ in s nach Bremsbeginn. Bestimme $c$, die Bremsdauer und den Bremsweg (auf zwei Dezimalstellen).`,
        teile: [
          { typ: "zahl", label: "$c$", einheit: "m/s", loesung: `${kmh}/3.6`, fehler: [{ wert: String(kmh), meldung: "Das ist die Geschwindigkeit in km/h. Die Formel rechnet in m/s. Teile durch $3{,}6$." }] },
          { typ: "zahl", label: "Bremsdauer", einheit: "s", loesung: `sqrt(${c}/${k})` },
          { typ: "zahl", label: "Bremsweg", einheit: "m", loesung: `${c}*${T} - ${k}*${T}^3/3`, fehler: [{ wert: String(c * T), meldung: "Das wäre der Weg bei konstanter Geschwindigkeit. Die Geschwindigkeit sinkt aber auf null. Integriere $v(t)$." }] },
        ],
        hinweis: "Teile zuerst die km/h durch 3,6. Der Bremsvorgang endet bei $v(t) = 0$. Der Bremsweg ist das Integral der Geschwindigkeit vom Bremsbeginn bis zum Stillstand.",
        loesung: `**Ansatz:** Zuerst die Einheiten angleichen, weil die Zeit in Sekunden gemessen wird. $${tz(kmh)}$ km/h $= ${tz(kmh)} : 3{,}6 = ${tz(c)}$ m/s. Zu Beginn ist $v(0) = c$, also $c = ${tz(c)}$.\n---\nStillstand bei $v(t) = 0$: $${tz(c)} - ${tz(k)}t^2 = 0$, also $t^2 = ${tz(c / k)}$ und $t = ${T}$ s. Die negative Lösung liegt vor dem Bremsbeginn.\n---\nBremsweg: $s = \\int_0^{${T}} \\left(${tz(c)} - ${tz(k)}t^2\\right)\\dd t = \\left[${tz(c)}t - ${bruchFak(k * 2, 6)}t^3\\right]_0^{${T}} = ${tz(c * T)} - ${tz((k * T ** 3) / 3, 3)} ${Number.isInteger(s) ? "=" : "\\approx"} ${tz(s, 2)}$ m.\n---\n**Plausibilität:** Mit konstant $${tz(c)}$ m/s wären es $${tz(c * T)}$ m, bei gleichmäßiger Abbremsung $${tz((c * T) / 2)}$ m. Der Bremsweg liegt dazwischen.`,
      };
    },
  }),
  drill({
    id: "ir-d-bestand",
    kapitel: K,
    titel: "Inhalt eines Tanks aus der Zuflussrate",
    niveau: 2,
    erzeuge: (r) => {
      const bb = r.wahl([2, 4]);
      const m = r.int(3, 8);
      const T = m + r.int(1, Math.min(4, m));
      const a = bb * m;
      const B0 = 10 * r.int(1, 10);
      const B = (t: number) => B0 + a * t - (bb * t * t) / 2;
      return {
        angabe: `Ein Tank enthält am Anfang $${B0}$ Liter. Die Änderungsrate des Inhalts ist $r(t) = ${a} - ${bb}t$ in Liter pro Minute, für $0 \\le t \\le ${T}$. Wann ist am meisten Wasser im Tank, und wie viel ist es dann? Wie viel ist nach $${T}$ Minuten im Tank?`,
        teile: [
          { typ: "zahl", label: "Zeitpunkt des größten Inhalts", einheit: "min", loesung: String(m), fehler: [{ wert: String(T), meldung: `Nach $t = ${m}$ ist die Rate negativ. Ab dann fließt Wasser ab, der Inhalt wird kleiner.` }] },
          { typ: "zahl", label: "größter Inhalt", einheit: "L", loesung: `${B0} + ${a}*${m} - ${bb}*${m}^2/2`, fehler: [{ wert: String(B(m) - B0), meldung: `Das ist nur der Zuwachs. Die $${B0}$ Liter vom Anfang kommen noch dazu.` }] },
          { typ: "zahl", label: `Inhalt nach ${T} min`, einheit: "L", loesung: `${B0} + ${a}*${T} - ${bb}*${T}^2/2` },
        ],
        hinweis: "Der Inhalt ist Anfangsbestand plus Integral der Rate. Er wächst, solange die Rate positiv ist.",
        loesung: `**Ansatz:** Endbestand gleich Anfangsbestand plus Integral der Änderungsrate: $V(t) = ${B0} + \\int_0^t (${a} - ${bb}s)\\,\\dd s = ${B0} + ${a}t - ${tz(bb / 2)}t^2$.\n---\nDer Inhalt wächst, solange $r(t) > 0$ ist. $${a} - ${bb}t = 0$ ergibt $t = ${m}$ min. Danach ist die Rate negativ. Am meisten Wasser ist also bei $t = ${m}$ min im Tank: $V(${m}) = ${tz(B(m))}$ L.\n---\nNach $${T}$ Minuten: $V(${T}) = ${B0} + ${a * T} - ${tz((bb * T * T) / 2)} = ${tz(B(T))}$ L. Einheit: L/min mal min ergibt L.`,
      };
    },
  }),
  drill({
    id: "ir-d-mittelwert",
    kapitel: K,
    titel: "Mittelwert einer Funktion",
    niveau: 2,
    erzeuge: (r) => {
      const B = r.wahl([2, 3, 6]);
      const a = r.intOhne0(-2, 3);
      const b = r.int(-4, 4);
      const d = r.int(-5, 5);
      const integral = (a * B ** 3) / 3 + (b * B ** 2) / 2 + d * B;
      const fB = a * B * B + b * B + d;
      const rand = (d + fB) / 2;
      const fehler = Math.abs(rand - integral / B) > 0.02 * Math.abs(integral / B) + 0.01 ? [{ wert: String(rand), meldung: "Das ist der Mittelwert aus den beiden Randwerten. Bei einer Parabel stimmt das nicht. Verwende das Integral." }] : undefined;
      return {
        angabe: `Berechne den Mittelwert von $f(x) = ${polyTex([a, b, d])}$ auf dem Intervall $[0, ${B}]$ (auf vier Dezimalstellen).`,
        teile: [{ typ: "zahl", label: "$\\bar f$", loesung: `(${a}*${B}^3/3 + ${b}*${B}^2/2 + ${d}*${B})/${B}`, ...(fehler ? { fehler } : {}) }],
        hinweis: `Der Mittelwert ist $\\bar f = \\frac{1}{${B}}\\int_0^{${B}} f(x)\\,\\dd x$.`,
        loesung: `**Ansatz:** Der Mittelwert einer Funktion ist das Integral geteilt durch die Länge des Intervalls, hier $${B}$.\n---\n$\\int_0^{${B}} f(x)\\,\\dd x = ${tz(integral, 4)}$, gliedweise mit der Potenzregel.\n---\n$\\bar f = \\frac{${tz(integral, 4)}}{${B}} = ${tz(integral / B, 4)}$. **Deutung:** Ein Rechteck mit Breite $${B}$ und dieser Höhe hat dieselbe Fläche wie die Bilanz unter dem Graphen.`,
      };
    },
  }),
  drill({
    id: "ir-d-rotation",
    kapitel: K,
    titel: "Volumen eines Rotationskörpers",
    niveau: 2,
    erzeuge: (r) => {
      const art = r.wahl(["wurzel", "gerade"] as const);
      if (art === "wurzel") {
        const k = r.int(1, 4);
        const b = r.int(1, 5);
        const kTex = k === 1 ? "" : String(k);
        return {
          angabe: `Der Graph von $f(x) = \\sqrt{${kTex}x}$ über $[0, ${b}]$ rotiert um die $x$-Achse. Berechne das Volumen auf drei Dezimalstellen.`,
          teile: [{ typ: "zahl", label: "$V$", loesung: `pi*${k}*${b}^2/2`, fehler: [{ wert: `pi*2/3*sqrt(${k})*${b}^(3/2)`, meldung: "Im Volumenintegral steht $f(x)^2$, nicht $f(x)$. Quadriere zuerst, dann verschwindet die Wurzel." }] }],
          hinweis: `$V = \\pi\\int_0^{${b}} f(x)^2\\,\\dd x$, und $f(x)^2 = ${kTex}x$.`,
          loesung: `**Ansatz:** Volumen eines Rotationskörpers, $V = \\pi\\int_0^{${b}} f(x)^2\\,\\dd x$. Beim Quadrieren verschwindet die Wurzel: $f(x)^2 = ${kTex}x$.\n---\n$V = \\pi\\int_0^{${b}} ${kTex}x\\,\\dd x = \\pi\\left[${bruchFak(k, 2)}x^2\\right]_0^{${b}}$.\n---\n$V = ${bruchFak(k * b * b, 2)}\\pi \\approx ${tz((Math.PI * k * b * b) / 2, 3)}$.`,
        };
      }
      const m = r.int(1, 3);
      const b = r.int(1, 4);
      const mTex = m === 1 ? "" : String(m);
      return {
        angabe: `Der Graph von $f(x) = ${mTex}x$ über $[0, ${b}]$ rotiert um die $x$-Achse. Es entsteht ein Kegel. Berechne das Volumen auf drei Dezimalstellen.`,
        teile: [{ typ: "zahl", label: "$V$", loesung: `pi*${m}^2*${b}^3/3`, fehler: [{ wert: `pi*${m}*${b}^2/2`, meldung: "Im Volumenintegral steht $f(x)^2$, nicht $f(x)$." }] }],
        hinweis: `$V = \\pi\\int_0^{${b}} ${m * m === 1 ? "" : m * m}x^2\\,\\dd x$.`,
        loesung: `**Ansatz:** Volumen eines Rotationskörpers, $V = \\pi\\int_0^{${b}} f(x)^2\\,\\dd x$ mit $f(x)^2 = ${m * m === 1 ? "" : m * m}x^2$.\n---\n$V = \\pi\\left[${bruchFak(m * m, 3)}x^3\\right]_0^{${b}} = \\pi\\cdot${bruchTex(m * m * b ** 3, 3)}$.\n---\n$V = ${bruchFak(m * m * b ** 3, 3)}\\pi \\approx ${tz((Math.PI * m * m * b ** 3) / 3, 3)}$. **Kontrolle** mit der Kegelformel $\\frac13\\pi r^2 h$: Radius $r = f(${b}) = ${m * b}$, Höhe $h = ${b}$, gleiches Ergebnis.`,
      };
    },
  }),
  drill({
    id: "ir-d-dichte",
    kapitel: K,
    titel: "Dichtefunktion normieren (Vertiefung)",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(1, 3);
      const b = r.int(1, 3);
      const fTex = n === 1 ? "c\\,x" : `c\\,x^{${n}}`;
      const xn = n === 1 ? "x" : `x^{${n}}`;
      const cZ = n + 1;
      const cN = b ** (n + 1);
      return {
        angabe: `Eine Zufallsvariable $X$ hat auf $[0, ${b}]$ die Dichte $f(x) = ${fTex}$. Bestimme $c$, die Wahrscheinlichkeit $P\\left(X \\le ${tz(b / 2)}\\right)$ und den Erwartungswert $E(X)$.`,
        teile: [
          { typ: "zahl", label: "$c$", loesung: `${cZ}/${cN}`, fehler: [{ wert: `${cN}/${cZ}`, meldung: "Das ist die Fläche ohne $c$. Damit die Gesamtfläche $1$ wird, ist $c$ ihr Kehrwert." }] },
          { typ: "zahl", label: `$P(X \\le ${tz(b / 2)})$`, loesung: `(1/2)^${n + 1}`, fehler: [{ wert: "0.5", meldung: "Die Mitte halbiert die Wahrscheinlichkeit hier nicht. Die Dichte ist links kleiner, also liegt links der Mitte weniger als die Hälfte der Wahrscheinlichkeit." }] },
          { typ: "zahl", label: "$E(X)$", loesung: `${n + 1}/${n + 2}*${b}` },
        ],
        hinweis: `Normierung: $\\int_0^{${b}} c\\,${xn}\\,\\dd x = 1$. Danach ist $P(X \\le a) = \\int_0^a f(x)\\,\\dd x$ und $E(X) = \\int_0^{${b}} x\\,f(x)\\,\\dd x$.`,
        loesung: `**Ansatz:** Eine Dichte hat die Gesamtfläche $1$. Daraus folgt $c$. Wahrscheinlichkeiten und Erwartungswert sind dann Integrale.\n---\n$\\int_0^{${b}} c\\,${xn}\\,\\dd x = c\\cdot\\frac{${b}^{${n + 1}}}{${n + 1}} = 1$, also $c = ${bruchTex(cZ, cN)}$.\n---\n$P\\left(X \\le ${tz(b / 2)}\\right) = c\\cdot\\frac{${tz(b / 2)}^{${n + 1}}}{${n + 1}} = \\left(\\frac12\\right)^{${n + 1}} = ${tz(0.5 ** (n + 1), 4)}$.\n---\n$E(X) = \\int_0^{${b}} c\\,x^{${n + 1}}\\,\\dd x = c\\cdot\\frac{${b}^{${n + 2}}}{${n + 2}} = \\frac{${n + 1}}{${n + 2}}\\cdot ${b} \\approx ${tz(((n + 1) / (n + 2)) * b, 4)}$. Er liegt rechts der Mitte, weil große Werte wahrscheinlicher sind.`,
      };
    },
  }),
  drill({
    id: "ir-d-dgl",
    kapitel: K,
    titel: "Wachstum und Abkühlung mit Differentialgleichungen (Vertiefung)",
    niveau: 2,
    erzeuge: (r) => {
      const art = r.wahl(["wachstum", "abkuehlung"] as const);
      if (art === "wachstum") {
        const k = r.wahl([0.02, 0.05, 0.1, 0.2]);
        const y0 = 100 * r.int(1, 9);
        const t = r.wahl([5, 10, 20]);
        return {
          angabe: `Eine Größe wächst nach $y' = ${tz(k)}\\,y$ ($t$ in Jahren). Am Anfang ist $y(0) = ${y0}$. Berechne $y(${t})$ und die Verdopplungszeit, jeweils auf zwei Dezimalstellen.`,
          teile: [
            { typ: "zahl", label: `$y(${t})$`, loesung: `${y0}*exp(${k}*${t})`, ...(k * t >= 0.5 ? { fehler: [{ wert: String(y0 * (1 + k * t)), meldung: "Das ist lineares Wachstum. Bei $y' = k\\,y$ wächst der Zuwachs mit der Größe selbst, die Lösung ist $y_0\\,e^{kt}$." }] } : {}) },
            { typ: "zahl", label: "Verdopplungszeit", einheit: "Jahre", loesung: `ln(2)/${k}` },
          ],
          hinweis: "Die Lösung von $y' = k\\,y$ ist $y(t) = y_0\\,e^{kt}$. Für die Verdopplungszeit löst du $e^{kt} = 2$.",
          loesung: `**Ansatz:** Die Gleichung hat den Typ $y' = k\\,y$ mit $k = ${tz(k)}$. Ihre Lösungen sind $y(t) = y_0\\,e^{kt}$, hier $y(t) = ${y0}\\,e^{${tz(k)}t}$.\n---\n$y(${t}) = ${y0}\\,e^{${tz(k * t)}} \\approx ${tz(y0 * Math.exp(k * t), 2)}$.\n---\nVerdopplung: $e^{${tz(k)}t} = 2$, also $t = \\frac{\\ln 2}{${tz(k)}} \\approx ${tz(Math.log(2) / k, 2)}$ Jahre. **Probe** der Lösung: $y' = ${tz(k)}\\cdot ${y0}\\,e^{${tz(k)}t} = ${tz(k)}\\,y$.`,
        };
      }
      const S = r.wahl([18, 20, 22]);
      const T0 = r.wahl([80, 90, 95]);
      const k = r.wahl([0.05, 0.1, 0.2]);
      const Tz = r.wahl([40, 50, 60]);
      const t1 = r.wahl([5, 10]);
      return {
        angabe: `Ein Getränk mit $${T0}$ °C kühlt in einem Raum mit $${S}$ °C ab. Es gilt $T' = ${tz(k)}\\,(${S} - T)$, $t$ in Minuten. Berechne $T(${t1})$ und den Zeitpunkt, zu dem das Getränk $${Tz}$ °C hat, jeweils auf zwei Dezimalstellen.`,
        teile: [
          { typ: "zahl", label: `$T(${t1})$`, einheit: "°C", loesung: `${S} + ${T0 - S}*exp(-${k}*${t1})`, fehler: [{ wert: `${T0}*exp(-${k}*${t1})`, meldung: "Das Getränk kühlt nicht auf $0$ °C ab, sondern auf die Raumtemperatur. Exponentiell klingt nur der Abstand zur Raumtemperatur ab." }] },
          { typ: "zahl", label: `Zeit bis ${Tz} °C`, einheit: "min", loesung: `ln(${T0 - S}/${Tz - S})/${k}` },
        ],
        hinweis: "Die Lösung von $y' = k\\,(S - y)$ ist $y(t) = S - (S - y_0)\\,e^{-kt}$.",
        loesung: `**Ansatz:** Typ $y' = k\\,(S - y)$ mit $S = ${S}$ und $k = ${tz(k)}$. Lösung: $T(t) = ${S} + ${T0 - S}\\,e^{-${tz(k)}t}$, denn am Anfang ist der Abstand zur Raumtemperatur $${T0} - ${S} = ${T0 - S}$ Grad.\n---\n$T(${t1}) = ${S} + ${T0 - S}\\,e^{-${tz(k * t1)}} \\approx ${tz(S + (T0 - S) * Math.exp(-k * t1), 2)}$ °C.\n---\n$${S} + ${T0 - S}\\,e^{-${tz(k)}t} = ${Tz}$ ergibt $e^{-${tz(k)}t} = \\frac{${Tz - S}}{${T0 - S}}$. Logarithmieren: $t = \\frac{\\ln(${T0 - S}/${Tz - S})}{${tz(k)}} \\approx ${tz(Math.log((T0 - S) / (Tz - S)) / k, 2)}$ min.`,
      };
    },
  }),
];
