import { drill, tz, polyTex, bruchTex, type Drill } from "@/lib/lernen/training";

const K = "integrierbarkeit";

/** f(x) = p x^2 + q als LaTeX und als Funktion */
function quad(p: number, q: number) {
  return { tex: polyTex([p, 0, q]), f: (x: number) => p * x * x + q };
}
/** Liste von Zahlen als LaTeX-Summe mit Dezimalkomma */
const summeTex = (w: number[]) => w.map((v) => tz(v)).join(" + ");
/** Liste von Zahlen als mathjs-Summe */
const summeAus = (w: number[]) => w.map((v) => `(${v})`).join(" + ");
/** Fehlerbild nur setzen, wenn der falsche Wert sich wirklich vom richtigen unterscheidet */
/** Linearfaktor (x - a) als LaTeX, bei a = 0 nur x */
const faktor = (a: number) => (a === 0 ? "x" : `(x ${a < 0 ? "+" : "-"} ${Math.abs(a)})`);
const nurWennAnders = (falsch: number, richtig: number, wert: string, meldung: string) =>
  Math.abs(falsch - richtig) > 1e-9 * Math.max(1, Math.abs(richtig)) ? [{ wert, meldung }] : [];

export const DRILLS: Drill[] = [
  drill({
    id: "ib-d-links-rechts",
    kapitel: K,
    titel: "Links- und Rechtssumme",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.int(1, 3);
      const q = r.int(0, 4);
      const b = r.int(1, 3);
      const n = r.wahl([2, 4] as const);
      const h = b / n;
      const { tex, f } = quad(p, q);
      const xs = Array.from({ length: n + 1 }, (_, k) => k * h);
      const ys = xs.map(f);
      const links = ys.slice(0, n);
      const rechts = ys.slice(1);
      const L = h * links.reduce((s, v) => s + v, 0);
      const R = h * rechts.reduce((s, v) => s + v, 0);
      return {
        angabe: `Berechne für $f(x) = ${tex}$ auf $[0, ${b}]$ mit $n = ${n}$ gleich langen Teilintervallen die Linkssumme $L_{${n}}$ und die Rechtssumme $R_{${n}}$.`,
        teile: [
          {
            typ: "zahl",
            label: `$L_{${n}}$`,
            loesung: `${h} * (${summeAus(links)})`,
            fehler: nurWennAnders(links.reduce((s, v) => s + v, 0), L, summeAus(links), "Du hast nur die Höhen addiert. Jede Höhe wird noch mit der Breite $h$ multipliziert."),
          },
          {
            typ: "zahl",
            label: `$R_{${n}}$`,
            loesung: `${h} * (${summeAus(rechts)})`,
            fehler: nurWennAnders(L, R, `${h} * (${summeAus(links)})`, "Das ist die Linkssumme. Die Rechtssumme nimmt die rechten Ränder $x_1$ bis $x_n$."),
          },
        ],
        hinweis: `Die Breite ist $h = \\frac{${b} - 0}{${n}} = ${tz(h)}$. Die Linkssumme verwendet die Werte an $x_0$ bis $x_{${n - 1}}$, die Rechtssumme an $x_1$ bis $x_{${n}}$.`,
        loesung: `**Ansatz:** Äquidistante Zerlegung mit $h = \\frac{${b}}{${n}} = ${tz(h)}$. Die Teilungspunkte sind $${xs.map((x) => tz(x)).join(";\\ ")}$.\n---\nFunktionswerte an den Teilungspunkten: $${ys.map((y) => tz(y)).join(";\\ ")}$.\n---\nDie Linkssumme nimmt die ${n} linken Ränder: $L_{${n}} = ${tz(h)}\\cdot(${summeTex(links)}) = ${tz(L)}$.\n---\nDie Rechtssumme nimmt die ${n} rechten Ränder: $R_{${n}} = ${tz(h)}\\cdot(${summeTex(rechts)}) = ${tz(R)}$. Weil $f$ wächst, ist die Linkssumme kleiner.`,
      };
    },
  }),
  drill({
    id: "ib-d-mittelsumme",
    kapitel: K,
    titel: "Mittelsumme",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(1, 3);
      const q = r.int(0, 3);
      const b = r.wahl([2, 4] as const);
      const n = r.wahl([2, 4] as const);
      const h = b / n;
      const { tex, f } = quad(p, q);
      const mitten = Array.from({ length: n }, (_, k) => (k + 0.5) * h);
      const ys = mitten.map(f);
      const M = h * ys.reduce((s, v) => s + v, 0);
      const linksWerte = Array.from({ length: n }, (_, k) => f(k * h));
      const L = h * linksWerte.reduce((s, v) => s + v, 0);
      const exakt = (p * b ** 3) / 3 + q * b;
      return {
        angabe: `Berechne die Mittelsumme $M_{${n}}$ für $f(x) = ${tex}$ auf $[0, ${b}]$ (äquidistant, $n = ${n}$).`,
        teile: [
          {
            typ: "zahl",
            label: `$M_{${n}}$`,
            loesung: `${h} * (${summeAus(ys)})`,
            fehler: nurWennAnders(L, M, `${h} * (${summeAus(linksWerte)})`, "Das ist die Linkssumme. Bei der Mittelsumme nimmst du die **Mitten** der Teilintervalle."),
          },
        ],
        hinweis: `Die Mitten der Teilintervalle sind $${mitten.map((x) => tz(x)).join(";\\ ")}$.`,
        loesung: `**Ansatz:** Mittelsumme mit $h = ${tz(h)}$. Die Zwischenstellen sind die Mitten $${mitten.map((x) => tz(x)).join(";\\ ")}$.\n---\nFunktionswerte an den Mitten: $${ys.map((y) => tz(y)).join(";\\ ")}$.\n---\n$M_{${n}} = ${tz(h)}\\cdot(${summeTex(ys)}) = ${tz(M)}$.\n---\n**Vergleich:** Der exakte Wert ist $\\int_0^{${b}} f(x)\\dd x = ${tz(exakt, 3)}$. Die Mittelsumme liegt schon mit wenigen Rechtecken nahe daran.`,
      };
    },
  }),
  drill({
    id: "ib-d-ober-unter",
    kapitel: K,
    titel: "Abstand von Ober- und Untersumme (monotone Funktion)",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(1, 4);
      const e = r.wahl([2, 3] as const);
      const a = r.int(0, 2);
      const b = a + r.int(1, 3);
      const n = r.wahl([4, 5, 8, 10] as const);
      const fa = k * a ** e;
      const fb = k * b ** e;
      const d = ((b - a) * (fb - fa)) / n;
      const ftex = `${k === 1 ? "" : k}x^{${e}}`;
      return {
        angabe: `$f(x) = ${ftex}$ wird auf $[${a}, ${b}]$ mit $n = ${n}$ gleich langen Teilintervallen zerlegt. Berechne $O_{${n}} - U_{${n}}$.`,
        teile: [
          {
            typ: "zahl",
            label: `$O_{${n}} - U_{${n}}$`,
            loesung: `(${b} - ${a}) * (${fb} - ${fa}) / ${n}`,
            fehler: nurWennAnders(fb - fa, d, `${fb} - ${fa}`, "Du hast nur $f(b) - f(a)$ berechnet. Die Teleskopformel enthält noch den Faktor $\\frac{b - a}{n}$."),
          },
        ],
        hinweis: "$f$ ist auf dem Intervall monoton wachsend. Dann ist $O_n - U_n = \\frac{b - a}{n}\\,\\big(f(b) - f(a)\\big)$, weil sich alle mittleren Funktionswerte wegheben.",
        loesung: `**Ansatz:** $f$ wächst auf $[${a}, ${b}]$. Die Untersumme nimmt also die linken, die Obersumme die rechten Ränder. In der Differenz heben sich alle mittleren Werte weg (Teleskopsumme).\n---\n$O_n - U_n = \\frac{b - a}{n}\\,\\big(f(b) - f(a)\\big) = \\frac{${b - a}}{${n}}\\,(${fb} - ${fa})$.\n---\n$O_{${n}} - U_{${n}} = ${tz(d)}$. Mit mehr Teilintervallen würde der Abstand weiter schrumpfen.`,
      };
    },
  }),
  drill({
    id: "ib-d-genauigkeit",
    kapitel: K,
    titel: "Wie viele Teilintervalle braucht man?",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(1, 3);
      const e = r.wahl([2, 3] as const);
      const b = r.int(1, 3);
      const E = r.wahl([10, 20, 100] as const);
      const D = b * k * b ** e; // (b - 0) * (f(b) - f(0))
      const nMin = D * E + 1;
      const ftex = `${k === 1 ? "" : k}x^{${e}}`;
      return {
        angabe: `Für $f(x) = ${ftex}$ auf $[0, ${b}]$ werden äquidistante Ober- und Untersummen gebildet. Bestimme das kleinste $n$ mit $O_n - U_n < ${tz(1 / E)}$.`,
        teile: [
          {
            typ: "zahl",
            label: "kleinstes $n$",
            loesung: String(nMin),
            toleranz: 0.1,
            fehler: [{ wert: String(D * E), meldung: `Für $n = ${D * E}$ ist der Abstand genau $${tz(1 / E)}$, also nicht **kleiner**. Es muss $n > ${D * E}$ sein.` }],
          },
        ],
        hinweis: "Für monoton wachsendes $f$ ist $O_n - U_n = \\frac{b - a}{n}\\,\\big(f(b) - f(a)\\big)$. Löse danach die Ungleichung nach $n$ auf.",
        loesung: `**Ansatz:** $f$ wächst, also gilt die Teleskopformel: $O_n - U_n = \\frac{${b}}{n}\\cdot ${k * b ** e} = \\frac{${D}}{n}$.\n---\n$\\frac{${D}}{n} < ${tz(1 / E)}$ ist gleichwertig mit $n > ${D}\\cdot ${E} = ${D * E}$.\n---\nDas kleinste ganze $n$ ist $${nMin}$, denn $n = ${D * E}$ ergibt den Abstand genau $${tz(1 / E)}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-summenformel",
    kapitel: K,
    titel: "Summenformeln",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 40);
      const art = r.wahl(["k", "k2", "k3"] as const);
      if (art === "k")
        return {
          angabe: `Berechne $\\sum_{k=1}^{${n}} k$ mit der Summenformel.`,
          teile: [{ typ: "zahl", loesung: `${n}*(${n}+1)/2`, fehler: [{ wert: `${n}*(${n}+1)`, meldung: "Die Formel hat noch den Nenner $2$: $\\frac{n(n+1)}{2}$." }] }],
          hinweis: "$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.",
          loesung: `**Ansatz:** Statt ${n} Zahlen einzeln zu addieren, verwenden wir $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.\n---\n$\\frac{${n}\\cdot ${n + 1}}{2} = ${(n * (n + 1)) / 2}$.`,
        };
      if (art === "k2")
        return {
          angabe: `Berechne $\\sum_{k=1}^{${n}} k^2$ mit der Summenformel.`,
          teile: [{ typ: "zahl", loesung: `${n}*(${n}+1)*(2*${n}+1)/6`, fehler: [{ wert: `${n}*(${n}+1)/2`, meldung: "Das ist die Summe der Zahlen selbst. Für die Quadrate brauchst du die Formel mit dem Faktor $(2n + 1)$." }] }],
          hinweis: "$\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$.",
          loesung: `**Ansatz:** Summenformel $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$ mit $n = ${n}$.\n---\n$\\frac{${n}\\cdot ${n + 1}\\cdot ${2 * n + 1}}{6} = ${(n * (n + 1) * (2 * n + 1)) / 6}$.`,
        };
      return {
        angabe: `Berechne $\\sum_{k=1}^{${n}} k^3$ mit der Summenformel.`,
        teile: [{ typ: "zahl", loesung: `(${n}*(${n}+1)/2)^2`, fehler: [{ wert: `${n}*(${n}+1)/2`, meldung: "Die Summe der Kubikzahlen ist das **Quadrat** von $\\frac{n(n+1)}{2}$." }] }],
        hinweis: "$\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$.",
        loesung: `**Ansatz:** Summenformel $\\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$ mit $n = ${n}$.\n---\n$\\left(\\frac{${n}\\cdot ${n + 1}}{2}\\right)^2 = ${(n * (n + 1)) / 2}^2 = ${((n * (n + 1)) / 2) ** 2}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-obersumme-x2",
    kapitel: K,
    titel: "Obersumme von x² mit Summenformel",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.int(1, 4);
      const n = r.wahl([5, 10, 20, 50, 100] as const);
      const O = ((b ** 3 / 6) * (n + 1) * (2 * n + 1)) / (n * n);
      return {
        angabe: `Für $f(x) = x^2$ auf $[0, ${b}]$ gilt $O_n = \\frac{${b ** 3}}{n^3}\\sum_{k=1}^n k^2$. Berechne $O_{${n}}$ mit der Summenformel und gib den Grenzwert für $n \\to \\infty$ an.`,
        teile: [
          { typ: "zahl", label: `$O_{${n}}$`, loesung: `${b}^3/6 * (${n}+1)*(2*${n}+1)/${n}^2` },
          {
            typ: "zahl",
            label: "$\\lim O_n$",
            loesung: `${b}^3/3`,
            fehler: [{ wert: `${b}^3/6`, meldung: "Der Bruch $\\frac{(n+1)(2n+1)}{n^2}$ geht gegen $2$, nicht gegen $1$. Multipliziere den Zähler aus." }],
          },
        ],
        hinweis: "$\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$. Nach dem Einsetzen kürzt sich ein $n$.",
        loesung: `**Ansatz:** Summenformel einsetzen und ein $n$ kürzen: $O_n = \\frac{${b ** 3}}{n^3}\\cdot\\frac{n(n+1)(2n+1)}{6} = \\frac{${b ** 3}}{6}\\cdot\\frac{(n+1)(2n+1)}{n^2}$.\n---\n$O_{${n}} = \\frac{${b ** 3}}{6}\\cdot\\frac{${n + 1}\\cdot ${2 * n + 1}}{${n * n}} \\approx ${tz(O, 4)}$.\n---\nAusmultipliziert ist $\\frac{(n+1)(2n+1)}{n^2} = 2 + \\frac3n + \\frac{1}{n^2} \\to 2$. Also $\\lim O_n = \\frac{${b ** 3}}{3}${b === 3 ? " = 9" : ` \\approx ${tz(b ** 3 / 3, 3)}`}$. **Probe:** Das ist $\\int_0^{${b}} x^2\\dd x$.`,
      };
    },
  }),
  drill({
    id: "ib-d-obersumme-linear",
    kapitel: K,
    titel: "Integral einer linearen Funktion als Grenzwert",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(1, 5);
      const b = r.int(1, 4);
      const ftex = `${c === 1 ? "" : c}x`;
      return {
        angabe: `Für $f(x) = ${ftex}$ auf $[0, ${b}]$ gilt bei äquidistanter Zerlegung $O_n = \\frac{${c * b * b}}{n^2}\\sum_{k=1}^n k$. Gib $O_n$ als Term in $n$ und den Grenzwert für $n \\to \\infty$ an.`,
        teile: [
          { typ: "term", label: "$O_n$", variable: "n", bereich: [1, 30], loesung: `${c * b * b}*(n+1)/(2*n)` },
          {
            typ: "zahl",
            label: "$\\lim O_n$",
            loesung: `${c * b * b}/2`,
            fehler: [{ wert: String(c * b * b), meldung: "Die Summenformel $\\frac{n(n+1)}{2}$ enthält den Nenner $2$. Er bleibt im Grenzwert stehen." }],
          },
        ],
        hinweis: "$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$. Danach ein $n$ kürzen.",
        loesung: `**Ansatz:** Summenformel einsetzen: $O_n = \\frac{${c * b * b}}{n^2}\\cdot\\frac{n(n+1)}{2} = \\frac{${c * b * b}(n+1)}{2n}$.\n---\n$\\frac{n + 1}{n} = 1 + \\frac1n \\to 1$, also $\\lim O_n = \\frac{${c * b * b}}{2}${(c * b * b) % 2 === 0 ? ` = ${(c * b * b) / 2}` : ""}$.\n---\n**Probe:** Die Fläche unter $${ftex}$ auf $[0, ${b}]$ ist ein Dreieck mit Grundlinie $${b}$ und Höhe $${c * b}$, also $\\frac12\\cdot ${b}\\cdot ${c * b} = ${tz((c * b * b) / 2)}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-grenzwert-summe",
    kapitel: K,
    titel: "Einen Summengrenzwert als Integral erkennen",
    niveau: 3,
    erzeuge: (r) => {
      const a = r.int(0, 2);
      const innen = a === 0 ? "\\frac kn" : `${a} + \\frac kn`;
      return {
        angabe: `Bestimme $\\displaystyle\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^{n}\\Big(${innen}\\Big)^2$, indem du die Summe als Riemann-Summe eines Integrals deutest.`,
        teile: [
          {
            typ: "zahl",
            loesung: `((${a} + 1)^3 - ${a}^3)/3`,
            fehler: [{ wert: "0", meldung: "Jeder Summand enthält den Faktor $\\frac1n$ und geht gegen $0$. Es werden aber immer mehr Summanden. Deute die Summe als Rechtecksumme." }],
          },
        ],
        hinweis: `Der Faktor $\\frac1n$ ist die Breite, die Stellen $${a === 0 ? "\\frac kn" : `${a} + \\frac kn`}$ sind die rechten Ränder einer Zerlegung von $[${a}, ${a + 1}]$.`,
        loesung: `**Ansatz:** $\\frac1n$ ist die Breite $h$ einer äquidistanten Zerlegung mit $n$ Teilen, und $x_k = ${a === 0 ? "\\frac kn" : `${a} + \\frac kn`}$ sind ihre rechten Ränder im Intervall $[${a}, ${a + 1}]$.\n---\nDie Summe ist also die Rechtssumme von $f(x) = x^2$ auf $[${a}, ${a + 1}]$. Weil $x^2$ stetig ist, strebt sie gegen das Integral.\n---\n$\\int_{${a}}^{${a + 1}} x^2\\dd x = \\Big[\\frac{x^3}{3}\\Big]_{${a}}^{${a + 1}} = \\frac{${(a + 1) ** 3} - ${a ** 3}}{3} = ${bruchTex((a + 1) ** 3 - a ** 3, 3)}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-treppe",
    kapitel: K,
    titel: "Integral einer Treppenfunktion",
    niveau: 1,
    erzeuge: (r) => {
      const w = [r.int(1, 3), r.int(1, 3), r.int(1, 3)];
      const v = [r.intOhne0(-3, 5), r.intOhne0(-4, 4), r.intOhne0(-3, 5)];
      const x1 = w[0];
      const x2 = w[0] + w[1];
      const x3 = x2 + w[2];
      const wert = v[0] * w[0] + v[1] * w[1] + v[2] * w[2];
      const nurHoehen = v[0] + v[1] + v[2];
      return {
        angabe: `Es sei $f(x) = ${v[0]}$ für $0 \\le x < ${x1}$, $f(x) = ${v[1]}$ für $${x1} \\le x < ${x2}$ und $f(x) = ${v[2]}$ für $${x2} \\le x \\le ${x3}$. Berechne $\\int_0^{${x3}} f(x)\\dd x$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${v[0]})*${w[0]} + (${v[1]})*${w[1]} + (${v[2]})*${w[2]}`,
            fehler: nurWennAnders(nurHoehen, wert, String(nurHoehen), "Du hast nur die Höhen addiert. Jede Höhe gilt auf einem Stück mit eigener Breite."),
          },
        ],
        hinweis: "Auf jedem Stück ist $f$ konstant. Das Integral ist die Summe der Rechteckflächen „Höhe mal Breite“ mit Vorzeichen.",
        loesung: `**Ansatz:** $f$ ist eine Treppenfunktion, also integrierbar. Die Werte an den Sprungstellen spielen keine Rolle.\n---\nRechtecke: $${v[0]}\\cdot ${w[0]} = ${v[0] * w[0]}$, $${v[1]}\\cdot ${w[1]} = ${v[1] * w[1]}$ und $${v[2]}\\cdot ${w[2]} = ${v[2] * w[2]}$.\n---\nSumme: $\\int_0^{${x3}} f(x)\\dd x = ${wert}$. Rechtecke unter der $x$-Achse zählen negativ.`,
      };
    },
  }),
  drill({
    id: "ib-d-linearitaet",
    kapitel: K,
    titel: "Linearität des Integrals",
    niveau: 1,
    erzeuge: (r) => {
      const If = r.intOhne0(-6, 8);
      const Ig = r.intOhne0(-6, 8);
      const al = r.intOhne0(-4, 4);
      const be = r.intOhne0(-4, 4);
      const b = r.int(1, 5);
      const ausdruck = `${al === 1 ? "" : al === -1 ? "-" : al}f(x) ${be < 0 ? "-" : "+"} ${Math.abs(be) === 1 ? "" : Math.abs(be)}g(x)`;
      const richtig = al * If + be * Ig;
      return {
        angabe: `Es gilt $\\int_0^{${b}} f(x)\\dd x = ${If}$ und $\\int_0^{${b}} g(x)\\dd x = ${Ig}$. Berechne $\\int_0^{${b}} \\big(${ausdruck}\\big)\\dd x$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${al})*(${If}) + (${be})*(${Ig})`,
            fehler: nurWennAnders(If + Ig, richtig, `${If} + (${Ig})`, "Die Faktoren vor $f$ und $g$ fehlen. Nach der Linearität werden sie vor die Integrale gezogen."),
          },
        ],
        hinweis: "Linearität: $\\int (\\alpha f + \\beta g) = \\alpha\\int f + \\beta\\int g$.",
        loesung: `**Ansatz:** Wir kennen nur die Integrale als Zahlen. Mit der Linearität setzen wir sie zusammen.\n---\n$${al}\\cdot(${If}) + (${be})\\cdot(${Ig}) = ${richtig}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-additiv",
    kapitel: K,
    titel: "Intervalladditivität und vertauschte Grenzen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(-2, 1);
      const c = a + r.int(1, 3);
      const b = c + r.int(1, 3);
      const Iab = r.intOhne0(-9, 12);
      const Iac = r.intOhne0(-9, 12);
      return {
        angabe: `Es gilt $\\int_{${a}}^{${b}} f(x)\\dd x = ${Iab}$ und $\\int_{${a}}^{${c}} f(x)\\dd x = ${Iac}$. Berechne $\\int_{${c}}^{${b}} f(x)\\dd x$ und $\\int_{${b}}^{${c}} f(x)\\dd x$.`,
        teile: [
          {
            typ: "zahl",
            label: `$\\int_{${c}}^{${b}} f(x)\\dd x$`,
            loesung: `${Iab} - (${Iac})`,
            fehler: nurWennAnders(Iab + Iac, Iab - Iac, `${Iab} + (${Iac})`, `Das große Intervall enthält das Stück $[${a}, ${c}]$ schon. Es wird abgezogen, nicht addiert.`),
          },
          { typ: "zahl", label: `$\\int_{${b}}^{${c}} f(x)\\dd x$`, loesung: `-(${Iab} - (${Iac}))` },
        ],
        hinweis: `Intervalladditivität: $\\int_{${a}}^{${c}} f + \\int_{${c}}^{${b}} f = \\int_{${a}}^{${b}} f$. Vertauschte Grenzen ändern das Vorzeichen.`,
        loesung: `**Ansatz:** Intervalladditivität $\\int_{${a}}^{${b}} f = \\int_{${a}}^{${c}} f + \\int_{${c}}^{${b}} f$, nach dem gesuchten Teil aufgelöst.\n---\n$\\int_{${c}}^{${b}} f = ${Iab} - (${Iac}) = ${Iab - Iac}$.\n---\nVertauschte Grenzen ändern das Vorzeichen: $\\int_{${b}}^{${c}} f = ${Iac - Iab}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-mittelwert",
    kapitel: K,
    titel: "Integralmittelwert und Mittelwertstelle",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(1, 4);
      const q = r.int(0, 5);
      const d = r.int(1, 4) * 3;
      const integral = (k * d ** 3) / 3 + q * d;
      const mittel = integral / d;
      const xi = d / Math.sqrt(3);
      const { tex } = quad(k, q);
      const randMittel = (q + (k * d * d + q)) / 2;
      return {
        angabe: `Berechne den Mittelwert $\\bar f$ von $f(x) = ${tex}$ auf $[0, ${d}]$ und die Stelle $\\xi$ in $[0, ${d}]$ mit $f(\\xi) = \\bar f$ (auf drei Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            label: "$\\bar f$",
            loesung: `(${k}*${d}^3/3 + ${q}*${d})/${d}`,
            fehler: [
              ...nurWennAnders(randMittel, mittel, String(randMittel), "Das ist der Mittelwert der Randwerte. Der Mittelwert einer Funktion ist das Integral geteilt durch die Intervalllänge."),
              ...nurWennAnders(integral, mittel, String(integral), "Das ist das Integral. Teile noch durch die Intervalllänge."),
            ],
          },
          {
            typ: "zahl",
            label: "$\\xi$",
            loesung: `${d}/sqrt(3)`,
            toleranz: 0.001,
            fehler: [{ wert: String(d / 2), meldung: "Die Intervallmitte ist nur bei linearen Funktionen sicher die Mittelwertstelle. Bei dieser gekrümmten Funktion liegt sie woanders. Löse $f(\\xi) = \\bar f$." }],
          },
        ],
        hinweis: "$\\bar f = \\frac{1}{b-a}\\int_a^b f(x)\\dd x$. Danach die Gleichung $f(\\xi) = \\bar f$ nach $\\xi$ lösen.",
        loesung: `**Ansatz:** $f$ ist stetig, also gibt es nach dem Mittelwertsatz eine Mittelwertstelle. Erst das Integral, dann den Mittelwert, dann die Stelle bestimmen.\n---\n$\\int_0^{${d}} f(x)\\dd x = \\Big[\\frac{${k}x^3}{3} + ${q}x\\Big]_0^{${d}} = ${integral}$.\n---\n$\\bar f = \\frac{${integral}}{${d}} = ${tz(mittel)}$.\n---\nAus $${k === 1 ? "" : k}\\xi^2${q ? ` + ${q}` : ""} = ${tz(mittel)}$ folgt $\\xi^2 = ${(d * d) / 3}$, also $\\xi = \\sqrt{${(d * d) / 3}} \\approx ${tz(xi, 3)}$. Die negative Lösung liegt nicht im Intervall.`,
      };
    },
  }),
  drill({
    id: "ib-d-integralfunktion",
    kapitel: K,
    titel: "Integralfunktion auswerten",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.intOhne0(-3, 4) * 2;
      const q = r.int(-4, 4);
      const a = r.int(-1, 1);
      const b = a + r.int(1, 4);
      const wert = (m / 2) * (b * b - a * a) + q * (b - a);
      const ftex = polyTex([m, q], "t");
      const Ftex = polyTex([m / 2, q, 0], "t");
      const ableitung = m * b + q;
      return {
        angabe: `Es sei $F(x) = \\int_{${a}}^{x} (${ftex})\\dd t$. Berechne $F(${b})$ und $F'(${b})$.`,
        teile: [
          { typ: "zahl", label: `$F(${b})$`, loesung: `${m / 2}*(${b}^2 - (${a})^2) + ${q}*(${b} - (${a}))` },
          {
            typ: "zahl",
            label: `$F'(${b})$`,
            loesung: `${m}*${b} + ${q}`,
            fehler: nurWennAnders(m, ableitung, String(m), "Du hast den Integranden noch einmal abgeleitet. Nach dem Hauptsatz ist $F'(x)$ der Integrand selbst an der Stelle $x$."),
          },
        ],
        hinweis: "Hauptsatz: $F'(x)$ ist der Integrand an der Stelle $x$. Für $F(b)$ eine Stammfunktion bilden und die Grenzen einsetzen.",
        loesung: `**Ansatz:** Für den Funktionswert rechnen wir das Integral mit einer Stammfunktion aus. Für die Ableitung genügt der Hauptsatz.\n---\nStammfunktion des Integranden: $${Ftex}$. Damit $F(${b}) = \\Big[${Ftex}\\Big]_{${a}}^{${b}} = ${wert}$.\n---\nHauptsatz: $F'(x) = ${polyTex([m, q])}$, also $F'(${b}) = ${ableitung}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-integralfunktion-extrem",
    kapitel: K,
    titel: "Extremstellen einer Integralfunktion",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(-3, 2);
      const b = a + r.int(1, 4);
      const p = -(a + b);
      const q = a * b;
      const integrand = polyTex([1, p, q], "t");
      return {
        angabe: `Es sei $F(x) = \\int_0^{x} (${integrand})\\dd t$. Bestimme mit dem Hauptsatz die Stelle des lokalen Hochpunkts und die Stelle des lokalen Tiefpunkts von $F$.`,
        teile: [
          {
            typ: "zahl",
            label: "Stelle des Hochpunkts",
            loesung: String(a),
            fehler: [{ wert: String(b), meldung: `Bei $x = ${b}$ wechselt der Integrand von minus nach plus. Dort wächst $F$ danach wieder, also liegt dort ein Tiefpunkt.` }],
          },
          { typ: "zahl", label: "Stelle des Tiefpunkts", loesung: String(b) },
        ],
        hinweis: `Nach dem Hauptsatz ist $F'(x) = ${polyTex([1, p, q])}$. Faktorisiere und untersuche die Vorzeichenwechsel.`,
        loesung: `**Ansatz:** Der Integrand ist stetig. Nach dem Hauptsatz ist $F'(x) = ${polyTex([1, p, q])} = ${faktor(a)}\\cdot ${faktor(b)}$.\n---\n$F'$ ist positiv für $x < ${a}$, negativ zwischen $${a}$ und $${b}$ und positiv für $x > ${b}$.\n---\nBei $x = ${a}$ wechselt $F'$ von plus nach minus: Hochpunkt. Bei $x = ${b}$ von minus nach plus: Tiefpunkt.`,
      };
    },
  }),
  drill({
    id: "ib-d-hauptsatz-kette",
    kapitel: K,
    titel: "Integral mit variabler Grenze ableiten",
    niveau: 2,
    erzeuge: (r) => {
      const e = r.wahl([2, 3] as const);
      const c = r.int(1, 5);
      const x0 = r.wahl([-2, -1, 1, 2] as const);
      const u = x0 ** e;
      const du = e * x0 ** (e - 1);
      const ohneKette = u + c;
      const richtig = (u + c) * du;
      return {
        angabe: `Es sei $G(x) = \\int_0^{x^{${e}}} (t + ${c})\\dd t$. Berechne $G'(${x0})$ mit dem Hauptsatz und der Kettenregel.`,
        teile: [
          {
            typ: "zahl",
            label: `$G'(${x0})$`,
            loesung: `(${u} + ${c}) * ${du}`,
            fehler: nurWennAnders(ohneKette, richtig, String(ohneKette), "Die innere Ableitung der oberen Grenze fehlt. Nach der Kettenregel kommt der Faktor $u'(x)$ dazu."),
          },
        ],
        hinweis: `$\\frac{\\dd}{\\dd x}\\int_0^{u(x)} f(t)\\dd t = f\\big(u(x)\\big)\\cdot u'(x)$ mit $u(x) = x^{${e}}$.`,
        loesung: `**Ansatz:** Die obere Grenze ist die innere Funktion $u(x) = x^{${e}}$. Hauptsatz und Kettenregel ergeben $G'(x) = \\big(x^{${e}} + ${c}\\big)\\cdot ${e}x^{${e - 1}}$.\n---\nAn der Stelle $${x0}$: $u(${x0}) = ${u}$ und $u'(${x0}) = ${du}$.\n---\n$G'(${x0}) = (${u} + ${c})\\cdot(${du}) = ${richtig}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-uneig-potenz",
    kapitel: K,
    titel: "Uneigentliches Integral einer Potenz",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.int(2, 5);
      const c = r.int(1, 6) * (p - 1);
      return {
        angabe: `Berechne $\\int_1^\\infty \\frac{${c}}{x^{${p}}}\\dd x$.`,
        teile: [{ typ: "zahl", loesung: `${c}/(${p} - 1)`, fehler: [{ wert: `-${c}/(${p} - 1)`, meldung: "Achte auf „obere minus untere Grenze“. Der Integrand ist positiv, also muss das Ergebnis positiv sein." }] }],
        hinweis: "Erst bis zu einer Grenze $b$ integrieren, dann $b$ gegen unendlich gehen lassen.",
        loesung: `**Ansatz:** Uneigentliches Integral vom Typ 1. Wir integrieren bis $b$ und bilden dann den Grenzwert.\n---\n$\\int_1^b ${c}x^{-${p}}\\dd x = \\Big[-${bruchTex(c, p - 1)}\\,x^{${1 - p}}\\Big]_1^b = ${bruchTex(c, p - 1)}\\Big(1 - \\frac{1}{b^{${p - 1}}}\\Big)$.\n---\nFür $b \\to \\infty$ geht $\\frac{1}{b^{${p - 1}}} \\to 0$. Der Wert ist $${bruchTex(c, p - 1)}$. Das passt zur Regel: Bei $p = ${p} > 1$ konvergiert das Integral.`,
      };
    },
  }),
  drill({
    id: "ib-d-uneig-exp",
    kapitel: K,
    titel: "Uneigentliches Integral der Exponentialfunktion",
    niveau: 1,
    erzeuge: (r) => {
      const l = r.wahl([2, 3, 4, 5] as const);
      const c = r.int(1, 6) * l;
      return {
        angabe: `Berechne $\\int_0^\\infty ${c}\\,e^{-${l}x}\\dd x$.`,
        teile: [{ typ: "zahl", loesung: `${c}/${l}`, fehler: [{ wert: `${c}*${l}`, meldung: "Beim Integrieren von $e^{-\\lambda x}$ teilt man durch $\\lambda$, man multipliziert nicht." }] }],
        hinweis: `Eine Stammfunktion von $e^{-${l}x}$ ist $-\\frac{1}{${l}}e^{-${l}x}$.`,
        loesung: `**Ansatz:** Uneigentliches Integral vom Typ 1. Wir integrieren bis $b$ und lassen dann $b$ gegen unendlich gehen.\n---\n$\\int_0^b ${c}e^{-${l}x}\\dd x = \\Big[-${bruchTex(c, l)}e^{-${l}x}\\Big]_0^b = ${bruchTex(c, l)}\\big(1 - e^{-${l}b}\\big)$.\n---\nFür $b \\to \\infty$ geht $e^{-${l}b} \\to 0$. Der Wert ist $${c / l}$.`,
      };
    },
  }),
  drill({
    id: "ib-d-trapez",
    kapitel: K,
    titel: "Trapezregel",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(1, 2);
      const q = r.int(0, 3);
      const b = r.wahl([2, 4] as const);
      const n = r.wahl([2, 4] as const);
      const h = b / n;
      const { tex, f } = quad(p, q);
      const ys = Array.from({ length: n + 1 }, (_, k) => f(k * h));
      const gew = ys.map((_, k) => (k === 0 || k === n ? 1 : 2));
      const T = (h / 2) * ys.reduce((s, y, k) => s + gew[k] * y, 0);
      const ohneDoppelt = (h / 2) * ys.reduce((s, y) => s + y, 0);
      const exakt = (p * b ** 3) / 3 + q * b;
      return {
        angabe: `Berechne $\\int_0^{${b}} (${tex})\\dd x$ näherungsweise mit der Trapezregel für $n = ${n}$.`,
        teile: [
          {
            typ: "zahl",
            label: `$T_{${n}}$`,
            loesung: `${h}/2 * (${ys.map((y, k) => `${gew[k]}*(${y})`).join(" + ")})`,
            fehler: nurWennAnders(ohneDoppelt, T, `${h}/2 * (${summeAus(ys)})`, "Die inneren Werte gehören zu je zwei Trapezen und zählen doppelt."),
          },
        ],
        hinweis: "Gewichte $1, 2, \\dots, 2, 1$ und Vorfaktor $\\frac h2$.",
        loesung: `**Ansatz:** Trapezregel mit $h = ${tz(h)}$. Werte $y_k$: $${ys.map((y) => tz(y)).join(";\\ ")}$.\n---\n$T_{${n}} = \\frac{${tz(h)}}{2}\\,(${ys.map((y, k) => (gew[k] === 1 ? tz(y) : `2\\cdot ${tz(y)}`)).join(" + ")}) = ${tz(T)}$.\n---\n**Vergleich:** Exakt ist $${tz(exakt, 3)}$. Die Trapezregel überschätzt, weil $f$ nach oben gekrümmt ist und die Sehnen über dem Graphen liegen.`,
      };
    },
  }),
  drill({
    id: "ib-d-simpson",
    kapitel: K,
    titel: "Simpsonregel",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.wahl([1, 2] as const);
      const n = r.wahl([2, 4] as const);
      const h = b / n;
      const c = r.int(0, 3);
      const f = (x: number) => x ** 4 + c;
      const ys = Array.from({ length: n + 1 }, (_, k) => f(k * h));
      const gew = ys.map((_, k) => (k === 0 || k === n ? 1 : k % 2 === 1 ? 4 : 2));
      const S = (h / 3) * ys.reduce((s, y, k) => s + gew[k] * y, 0);
      const exakt = b ** 5 / 5 + c * b;
      return {
        angabe: `Berechne $\\int_0^{${b}} (x^4${c ? ` + ${c}` : ""})\\dd x$ näherungsweise mit der Simpsonregel für $n = ${n}$ (auf vier Nachkommastellen).`,
        teile: [{ typ: "zahl", label: `$S_{${n}}$`, loesung: `${h}/3 * (${ys.map((y, k) => `${gew[k]}*(${y})`).join(" + ")})`, toleranz: 0.0005 }],
        hinweis: "Gewichte $1, 4, 2, 4, \\dots, 4, 1$ und Vorfaktor $\\frac h3$. Der erste innere Punkt bekommt die $4$.",
        loesung: `**Ansatz:** Simpsonregel mit $h = ${tz(h)}$ und geradem $n = ${n}$. Werte $y_k$: $${ys.map((y) => tz(y)).join(";\\ ")}$, Gewichte $${gew.join(", ")}$.\n---\n$S_{${n}} = \\frac{${tz(h)}}{3}\\,(${ys.map((y, k) => (gew[k] === 1 ? tz(y) : `${gew[k]}\\cdot ${tz(y)}`)).join(" + ")}) \\approx ${tz(S)}$.\n---\n**Vergleich:** Exakt ist $\\frac{${b ** 5}}{5}${c ? ` + ${c * b}` : ""} = ${tz(exakt)}$. Für Polynome vom Grad $4$ ist Simpson nicht mehr exakt, aber sehr genau.`,
      };
    },
  }),
];
