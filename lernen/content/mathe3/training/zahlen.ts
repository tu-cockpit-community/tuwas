import { drill, tz, ggt, bruchTex, polyTex, polyAusdruck, type Drill } from "@/lib/lernen/training";

const K = "zahlen";

/** "+ 3" / "- 3" fuer Summanden nach dem ersten Glied */
function vz(k: number): string {
  return k < 0 ? `- ${Math.abs(k)}` : `+ ${k}`;
}

/** Zahl in Klammern, wenn negativ: -3 -> "(-3)" */
function kl(k: number): string {
  return k < 0 ? `(${k})` : String(k);
}

/** kgV zweier positiver Zahlen */
function kgv(a: number, b: number): number {
  return (a * b) / ggt(a, b);
}

/** Primfaktorzerlegung als LaTeX, z. B. 360 -> "2^{3}\cdot 3^{2}\cdot 5" */
function primTex(n: number): string {
  const teile: string[] = [];
  let rest = n;
  for (let p = 2; p * p <= rest; p++) {
    let e = 0;
    while (rest % p === 0) {
      rest /= p;
      e++;
    }
    if (e) teile.push(e === 1 ? String(p) : `${p}^{${e}}`);
  }
  if (rest > 1) teile.push(String(rest));
  return teile.join("\\cdot ");
}

export const DRILLS: Drill[] = [
  drill({
    id: "za-d-rechenreihenfolge",
    kapitel: K,
    titel: "Rechenreihenfolge mit Vorzeichen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const b = r.int(1, 6);
      const c = r.int(b + 1, b + 6);
      const d = r.wahl([2, 3, 4]);
      const e = r.int(1, 5) * d;
      const k = b - c; // negativ
      const wert = a - k * k + e / -d;
      return {
        angabe: `Berechne ohne Taschenrechner: $${a} - (${b} - ${c})^2 + ${e} : (-${d})$`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a} - (${b} - ${c})^2 + ${e}/(-${d})`,
            fehler: [
              { wert: String(a + k * k + e / -d), meldung: `Das Quadrat einer negativen Zahl ist positiv: $(${k})^2 = ${k * k}$, nicht $-${k * k}$.` },
              { wert: String(a - k * k + e / d), meldung: `Bei $${e} : (-${d})$ sind die Vorzeichen verschieden. Das Ergebnis ist negativ.` },
            ],
          },
        ],
        hinweis: "Reihenfolge: Klammer, Potenz, Punktrechnung, Strichrechnung.",
        loesung:
          `Ansatz: Wir arbeiten die Rechenreihenfolge ab, also Klammer, Potenz, Punkt- vor Strichrechnung.\n---\n` +
          `Klammer: $${b} - ${c} = ${k}$. Potenz: $(${k})^2 = ${k * k}$, denn minus mal minus ergibt plus.\n---\n` +
          `Punktrechnung: $${e} : (-${d}) = ${e / -d}$, denn verschiedene Vorzeichen ergeben minus.\n---\n` +
          `Strichrechnung von links nach rechts: $${a} - ${k * k} ${vz(e / -d)} = ${wert}$.`,
      };
    },
  }),
  drill({
    id: "za-d-mengen",
    kapitel: K,
    titel: "Mengen verknüpfen",
    niveau: 1,
    erzeuge: (r) => {
      const s = r.wahl([2, 3]);
      const t = s === 2 ? r.wahl([3, 5]) : r.wahl([2, 4]);
      const n = r.int(12, 20);
      const A: number[] = [];
      const B: number[] = [];
      for (let x = 1; x <= n; x++) {
        if (x % s === 0) A.push(x);
        if (x % t === 0) B.push(x);
      }
      const schnitt = A.filter((x) => B.includes(x));
      const ohne = A.filter((x) => !B.includes(x));
      return {
        angabe:
          `Es sei $A = \\{${A.join(", ")}\\}$ (die Vielfachen von $${s}$ bis $${n}$) und $B = \\{${B.join(", ")}\\}$ (die Vielfachen von $${t}$).\n\n` +
          `Gib $A \\cap B$ und $A \\setminus B$ an. Trenne die Elemente mit Strichpunkt.`,
        teile: [
          { typ: "menge", label: "$A \\cap B$", loesung: schnitt.map(String) },
          {
            typ: "menge",
            label: "$A \\setminus B$",
            loesung: ohne.map(String),
            fehler: [{ wert: B.filter((x) => !A.includes(x)).map(String), meldung: "Das ist $B \\setminus A$. Starte mit $A$ und streiche, was auch in $B$ liegt." }],
          },
        ],
        hinweis: "Durchschnitt: in beiden Mengen. Differenz $A \\setminus B$: in $A$, aber nicht in $B$.",
        loesung:
          `Ansatz: Wir suchen zuerst die Zahlen, die in beiden Mengen vorkommen.\n---\n` +
          `In beiden liegen die gemeinsamen Vielfachen von $${s}$ und $${t}$: $A \\cap B = \\{${schnitt.join(", ")}\\}$.\n---\n` +
          `Aus $A$ streichen wir genau diese Zahlen: $A \\setminus B = \\{${ohne.join(", ")}\\}$.`,
      };
    },
  }),
  drill({
    id: "za-d-ggt-kgv",
    kapitel: K,
    titel: "ggT und kgV",
    niveau: 2,
    erzeuge: (r) => {
      const g = r.wahl([2, 3, 4, 6, 12]);
      let u = r.int(2, 9);
      let v = r.int(2, 9);
      while (ggt(u, v) !== 1 || u === v) {
        u = r.int(2, 9);
        v = r.int(2, 9);
      }
      const a = g * u;
      const b = g * v;
      return {
        angabe: `Bestimme $\\operatorname{ggT}(${a}, ${b})$ und $\\operatorname{kgV}(${a}, ${b})$.`,
        teile: [
          { typ: "zahl", label: "ggT", loesung: String(g), fehler: [{ wert: String(a * b / g), meldung: "Das ist das kgV. Der ggT ist ein Teiler und damit höchstens so groß wie die kleinere Zahl." }] },
          { typ: "zahl", label: "kgV", loesung: `${a}*${b}/${g}`, fehler: [{ wert: String(a * b), meldung: "Das Produkt ist ein gemeinsames Vielfaches, aber nicht immer das kleinste." }] },
        ],
        hinweis: "Zerlege beide Zahlen in Primfaktoren. ggT: kleinere Hochzahlen der gemeinsamen Primzahlen. kgV: größere Hochzahlen aller Primzahlen.",
        loesung:
          `Ansatz: Primfaktorzerlegung und Vergleich der Hochzahlen.\n---\n` +
          `$${a} = ${primTex(a)}$ und $${b} = ${primTex(b)}$.\n---\n` +
          `$\\operatorname{ggT} = ${g}$ und $\\operatorname{kgV} = ${(a * b) / g}$. Kontrolle: $${g}\\cdot ${(a * b) / g} = ${a * b} = ${a}\\cdot ${b}$.`,
      };
    },
  }),
  drill({
    id: "za-d-binaer",
    kapitel: K,
    titel: "Dezimal und binär umrechnen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(9, 120);
      const bin = n.toString(2);
      const umgedreht = bin.split("").reverse().join("");
      const reste: string[] = [];
      let q = n;
      while (q > 0) {
        reste.push(`$${q} : 2 = ${Math.floor(q / 2)}$ Rest $${q % 2}$`);
        q = Math.floor(q / 2);
      }
      return {
        angabe: `Schreibe $${n}$ im Binärsystem. Gib die Ziffernfolge ein, zum Beispiel \`1011\`.`,
        teile: [
          {
            typ: "zahl",
            loesung: bin,
            fehler: umgedreht !== bin ? [{ wert: umgedreht, meldung: "Die Reste müssen von unten nach oben gelesen werden. Der erste Rest ist die letzte Ziffer." }] : undefined,
          },
        ],
        hinweis: "Teile immer wieder durch $2$ und lies die Reste von unten nach oben.",
        loesung:
          `Ansatz: Wiederholt durch $2$ teilen, weil jeder Rest eine Binärziffer liefert.\n---\n` +
          `${reste.join(", ")}.\n---\n` +
          `Die Reste von unten nach oben ergeben $${bin}_2$. Probe: Die Stellenwerte der Einsen ergeben zusammen $${n}$.`,
      };
    },
  }),
  drill({
    id: "za-d-bruch-add",
    kapitel: K,
    titel: "Brüche addieren und subtrahieren",
    niveau: 1,
    erzeuge: (r) => {
      const b = r.int(2, 12);
      let d = r.int(2, 12);
      while (d === b) d = r.int(2, 12);
      const a = r.int(1, b - 1);
      const c = r.int(1, d - 1);
      const plus = r.zufall() < 0.6;
      const h = kgv(b, d);
      const z = a * (h / b) + (plus ? 1 : -1) * c * (h / d);
      const falsch = plus ? `${a + c}/${b + d}` : undefined;
      return {
        angabe: `Berechne und kürze vollständig: $\\dfrac{${a}}{${b}} ${plus ? "+" : "-"} \\dfrac{${c}}{${d}}$`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a}/${b} ${plus ? "+" : "-"} ${c}/${d}`,
            anzeige: bruchTex(z, h),
            fehler: falsch ? [{ wert: falsch, meldung: "Zähler plus Zähler und Nenner plus Nenner ist keine Bruchaddition. Bring die Brüche zuerst auf einen gemeinsamen Nenner." }] : undefined,
          },
        ],
        hinweis: `Hauptnenner $\\operatorname{kgV}(${b}, ${d}) = ${h}$.`,
        loesung:
          `Ansatz: Wir bringen beide Brüche auf den Hauptnenner $\\operatorname{kgV}(${b}, ${d}) = ${h}$, weil man nur gleichnamige Brüche addieren kann.\n---\n` +
          `Erweitern: $\\dfrac{${a}}{${b}} = \\dfrac{${a * (h / b)}}{${h}}$ und $\\dfrac{${c}}{${d}} = \\dfrac{${c * (h / d)}}{${h}}$.\n---\n` +
          `Zähler zusammenfassen: $\\dfrac{${a * (h / b)} ${plus ? "+" : "-"} ${c * (h / d)}}{${h}} = \\dfrac{${z}}{${h}}$. Vollständig gekürzt: $${bruchTex(z, h)}$.`,
      };
    },
  }),
  drill({
    id: "za-d-bruch-div",
    kapitel: K,
    titel: "Brüche dividieren",
    niveau: 1,
    erzeuge: (r) => {
      const [b, d] = [r.int(2, 9), r.int(2, 9)];
      const [a, c] = [r.int(1, b - 1), r.int(1, d - 1)];
      const ohneKehrwert = (a * c) / (b * d);
      const mitKehrwert = (a * d) / (b * c);
      return {
        angabe: `Berechne und kürze vollständig: $\\dfrac{${a}}{${b}} : \\dfrac{${c}}{${d}}$`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${a}/${b}) / (${c}/${d})`,
            anzeige: bruchTex(a * d, b * c),
            fehler: Math.abs(ohneKehrwert - mitKehrwert) > 1e-9 ? [{ wert: `${a * c}/${b * d}`, meldung: "Du hast multipliziert, ohne den zweiten Bruch umzudrehen. Dividieren heißt mit dem Kehrwert multiplizieren." }] : undefined,
          },
        ],
        hinweis: "Dividieren heißt mit dem Kehrwert des zweiten Bruchs multiplizieren.",
        loesung:
          `Ansatz: Dividieren heißt mit dem Kehrwert multiplizieren. Der Kehrwert von $\\tfrac{${c}}{${d}}$ ist $\\tfrac{${d}}{${c}}$.\n---\n` +
          `$\\dfrac{${a}}{${b}}\\cdot\\dfrac{${d}}{${c}} = \\dfrac{${a * d}}{${b * c}}$, Zähler mal Zähler und Nenner mal Nenner.\n---\n` +
          `Vollständig gekürzt: $${bruchTex(a * d, b * c)}$.`,
      };
    },
  }),
  drill({
    id: "za-d-potenz-exponent",
    kapitel: K,
    titel: "Potenzgesetze: Hochzahl bestimmen",
    niveau: 1,
    erzeuge: (r) => {
      const [m, n, k, s] = [r.intOhne0(-6, 6), r.intOhne0(-6, 6), r.intOhne0(-6, 6), r.int(2, 3)];
      const e = m * s + n - k;
      return {
        angabe: `Schreibe für $x \\neq 0$ als eine Potenz $x^e$ und gib $e$ an: $$\\frac{\\left(x^{${m}}\\right)^{${s}}\\cdot x^{${n}}}{x^{${k}}}$$`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*${s} + (${n}) - (${k})`,
            fehler: m + s !== m * s ? [{ wert: String(m + s + n - k), meldung: "Bei einer Potenz einer Potenz werden die Hochzahlen multipliziert, nicht addiert." }] : undefined,
          },
        ],
        hinweis: "Potenz einer Potenz: Hochzahlen multiplizieren. Mal: addieren. Geteilt: subtrahieren.",
        loesung:
          `Ansatz: Wir verwenden die Potenzgesetze für gleiche Basen.\n---\n` +
          `Klammer zuerst: $\\left(x^{${m}}\\right)^{${s}} = x^{${m}\\cdot ${s}} = x^{${m * s}}$.\n---\n` +
          `Beim Multiplizieren addieren, beim Dividieren subtrahieren: $e = ${m * s} ${vz(n)} ${vz(-k)} = ${e}$.`,
      };
    },
  }),
  drill({
    id: "za-d-rationaler-exponent",
    kapitel: K,
    titel: "Bruch-Hochzahlen",
    niveau: 1,
    erzeuge: (r) => {
      const [c, q] = r.wahl([[2, 2], [2, 3], [2, 4], [2, 5], [3, 2], [3, 3], [3, 4], [4, 2], [4, 3], [5, 2], [5, 3], [6, 2], [7, 2], [10, 3]] as const);
      let p = r.intOhne0(-3, 3);
      while (p % q === 0) p = r.intOhne0(-3, 3);
      const basis = c ** q;
      const wurzel = q === 2 ? `\\sqrt{${basis}}` : `\\sqrt[${q}]{${basis}}`;
      const ergebnis = p > 0 ? String(c ** p) : bruchTex(1, c ** -p);
      return {
        angabe: `Berechne ohne Taschenrechner: $${basis}^{${p < 0 ? "-" : ""}\\frac{${Math.abs(p)}}{${q}}}$`,
        teile: [
          {
            typ: "zahl",
            loesung: `${basis}^(${p}/${q})`,
            anzeige: ergebnis,
            fehler:
              Math.abs((basis * p) / q - c ** p) > 1e-9
                ? [{ wert: `${basis}*${p}/${q}`, meldung: "Die Hochzahl wird nicht mit der Basis multipliziert. Der Nenner der Hochzahl bedeutet eine Wurzel, der Zähler eine Potenz." }]
                : undefined,
          },
        ],
        hinweis: `$${basis} = ${c}^{${q}}$. Zuerst die Wurzel ziehen, dann potenzieren.`,
        loesung:
          `Ansatz: Der Nenner $${q}$ der Hochzahl bedeutet die ${q === 2 ? "Quadratwurzel" : `${q}. Wurzel`}, der Zähler eine Potenz${p < 0 ? ", das Minus den Kehrwert" : ""}.\n---\n` +
          `$${wurzel} = ${c}$, weil $${c}^{${q}} = ${basis}$.\n---\n` +
          `$${basis}^{${p}/${q}} = \\left(${wurzel}\\right)^{${p}} = ${c}^{${p}} = ${ergebnis}$.`,
      };
    },
  }),
  drill({
    id: "za-d-wurzel-teilweise",
    kapitel: K,
    titel: "Teilweise Wurzel ziehen",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.wahl([2, 3, 5, 6, 7, 10, 11]);
      const k = r.int(2, 9);
      const n = k * k * m;
      return {
        angabe: `Schreibe $\\sqrt{${n}}$ in der Form $a\\sqrt b$ mit natürlichen Zahlen $a, b$ und möglichst kleinem $b$.`,
        teile: [
          { typ: "zahl", label: "$a$", loesung: String(k) },
          { typ: "zahl", label: "$b$", loesung: String(m), fehler: [{ wert: String(n), meldung: "Unter der Wurzel soll eine möglichst kleine Zahl stehen. Zieh die größte Quadratzahl heraus." }] },
        ],
        hinweis: "Suche die größte Quadratzahl, die den Radikanden teilt.",
        loesung:
          `Ansatz: Wir zerlegen den Radikanden in „Quadratzahl mal Rest“, weil man aus der Quadratzahl die Wurzel ziehen kann.\n---\n` +
          `Größte Quadratzahl in $${n}$: $${n} = ${k * k}\\cdot ${m}$.\n---\n` +
          `Wurzelgesetz für Produkte: $\\sqrt{${n}} = \\sqrt{${k * k}}\\cdot\\sqrt{${m}} = ${k}\\sqrt{${m}}$.`,
      };
    },
  }),
  drill({
    id: "za-d-log-definition",
    kapitel: K,
    titel: "Logarithmus über die Definition",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 5, 10]);
      let k = r.int(-3, 4);
      if (a === 10 && k === 4) k = 3;
      const arg = k >= 0 ? String(a ** k) : `\\tfrac{1}{${a ** -k}}`;
      const argMath = k >= 0 ? String(a ** k) : `1/${a ** -k}`;
      const log = a === 10 ? `\\lg ${arg}` : `\\log_{${a}} ${arg}`;
      return {
        angabe: `Berechne ohne Taschenrechner: $${log}$`,
        teile: [
          {
            typ: "zahl",
            loesung: `log(${argMath}, ${a})`,
            fehler: k < 0 ? [{ wert: String(-k), meldung: "Für einen Kehrwert braucht die Hochzahl ein Minus." }] : undefined,
          },
        ],
        hinweis: "Mit welcher Hochzahl muss man die Basis potenzieren, um die Zahl dahinter zu erhalten?",
        loesung:
          `Ansatz: Nach der Definition ist der Logarithmus die Hochzahl $x$ mit $${a}^x = ${arg}$.\n---\n` +
          `Es ist $${a}^{${k}} = ${arg}$${k < 0 ? ", denn eine negative Hochzahl bedeutet den Kehrwert" : k === 0 ? ", denn jede Zahl hoch $0$ ist $1$" : ""}.\n---\n` +
          `Also ist $${log} = ${k}$.`,
      };
    },
  }),
  drill({
    id: "za-d-log-gesetz",
    kapitel: K,
    titel: "Logarithmengesetze anwenden",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 5]);
      const s = r.wahl([3, 6, 7, 11, 13].filter((x) => x % a !== 0));
      const k = r.int(1, 4);
      const m = s * a ** k;
      return {
        angabe: `Berechne ohne Taschenrechner: $\\log_{${a}} ${m} - \\log_{${a}} ${s}$`,
        teile: [{ typ: "zahl", loesung: `log(${m}, ${a}) - log(${s}, ${a})` }],
        hinweis: "Eine Differenz von Logarithmen ist der Logarithmus des Quotienten.",
        loesung:
          `Ansatz: Zweites Logarithmengesetz, Differenz von Logarithmen wird Logarithmus des Quotienten.\n---\n` +
          `$\\log_{${a}} ${m} - \\log_{${a}} ${s} = \\log_{${a}}\\dfrac{${m}}{${s}} = \\log_{${a}} ${a ** k}$.\n---\n` +
          `Weil $${a}^{${k}} = ${a ** k}$ ist, ist das Ergebnis $${k}$.`,
      };
    },
  }),
  drill({
    id: "za-d-basiswechsel",
    kapitel: K,
    titel: "Basiswechsel mit dem Taschenrechner",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([3, 4, 6, 7, 1.02, 1.05, 1.08, 0.5]);
      const b = r.wahl([2, 5, 10, 20, 50, 100, 0.3]);
      const w = Math.log(b) / Math.log(a);
      return {
        angabe: `Berechne $\\log_{${tz(a)}} ${tz(b)}$ auf drei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `ln(${b})/ln(${a})`,
            toleranz: 0.001,
            fehler: Math.abs(Math.log(a) / Math.log(b) - w) > 0.002 ? [{ wert: `ln(${a})/ln(${b})`, meldung: "Zähler und Nenner sind vertauscht. Oben steht der Logarithmus der Zahl, unten der der Basis." }] : undefined,
          },
        ],
        hinweis: "$\\log_a b = \\tfrac{\\ln b}{\\ln a}$: oben die Zahl, unten die Basis.",
        loesung:
          `Ansatz: Der Taschenrechner kennt nur $\\ln$ und $\\lg$. Darum wechseln wir die Basis.\n---\n` +
          `$\\log_{${tz(a)}} ${tz(b)} = \\dfrac{\\ln ${tz(b)}}{\\ln ${tz(a)}}$.\n---\n` +
          `$\\approx \\dfrac{${tz(Math.log(b), 4)}}{${tz(Math.log(a), 4)}} \\approx ${tz(w, 3)}$. Zähler und Nenner einzeln ausrechnen, dann teilen.`,
      };
    },
  }),
  drill({
    id: "za-d-periode",
    kapitel: K,
    titel: "Periodische Dezimalzahl als Bruch",
    niveau: 2,
    erzeuge: (r) => {
      let z = r.int(1, 98);
      while (z % 11 === 0) z = r.int(1, 98);
      const ziffern = String(z).padStart(2, "0");
      return {
        angabe: `Schreibe $0{,}\\overline{${ziffern}}$ als vollständig gekürzten Bruch.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${z}/99`,
            anzeige: bruchTex(z, 99),
            fehler: [{ wert: `${z}/100`, meldung: "Das wäre die abbrechende Zahl $0{,}${ziffern}$. Bei einer zweistelligen Periode steht im Nenner $99$." }],
          },
        ],
        hinweis: "Die Periode hat zwei Stellen: mit $100$ multiplizieren und die Zahl selbst abziehen.",
        loesung:
          `Ansatz: Wir multiplizieren mit $100$, damit sich die Periode um zwei Stellen verschiebt. Beim Abziehen fällt sie dann weg.\n---\n` +
          `$x = 0{,}\\overline{${ziffern}}$ und $100x = ${z}{,}\\overline{${ziffern}}$. Also $100x - x = 99x = ${z}$.\n---\n` +
          `$x = \\dfrac{${z}}{99}$, vollständig gekürzt $${bruchTex(z, 99)}$.`,
      };
    },
  }),
  drill({
    id: "za-d-prozent-folge",
    kapitel: K,
    titel: "Mehrere Prozentänderungen",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.wahl([5, 10, 15, 20, 25, 30, 40, 50]);
      const q = r.wahl([5, 10, 15, 20, 25, 30, 40]);
      const G = r.int(2, 30) * 20;
      const f = (1 + p / 100) * (1 - q / 100);
      return {
        angabe: `Ein Wert von $${G}$ steigt zuerst um $${p}\\,\\%$ und sinkt danach um $${q}\\,\\%$. Wie groß ist der Endwert, und um wie viel Prozent hat er sich insgesamt verändert (Abnahme negativ)?`,
        teile: [
          { typ: "zahl", label: "Endwert", loesung: `${G}*${1 + p / 100}*${1 - q / 100}` },
          {
            typ: "zahl",
            label: "Änderung",
            einheit: "%",
            loesung: `(${1 + p / 100}*${1 - q / 100} - 1)*100`,
            toleranz: 0.01,
            fehler: Math.abs((f - 1) * 100 - (p - q)) > 0.02 ? [{ wert: String(p - q), meldung: "Prozentsätze darf man nicht einfach addieren. Die zweite Änderung bezieht sich auf den schon veränderten Wert. Multipliziere die Faktoren." }] : undefined,
          },
        ],
        hinweis: "Faktoren multiplizieren, nicht Prozentsätze addieren.",
        loesung:
          `Ansatz: Jede Änderung ist ein Faktor. Zunahme um $${p}\\,\\%$ heißt mal $${tz(1 + p / 100)}$, Abnahme um $${q}\\,\\%$ heißt mal $${tz(1 - q / 100)}$.\n---\n` +
          `Gesamtfaktor: $${tz(1 + p / 100)}\\cdot ${tz(1 - q / 100)} = ${tz(f)}$. Endwert: $${G}\\cdot ${tz(f)} = ${tz(G * f, 2)}$.\n---\n` +
          `Gesamtänderung: $(${tz(f)} - 1)\\cdot 100\\,\\% = ${tz((f - 1) * 100, 2)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "za-d-prozent-rueck",
    kapitel: K,
    titel: "Grundwert zurückrechnen",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.wahl([5, 10, 20, 25]);
      const G = r.int(3, 60) * 20;
      const W = (G * (100 + p)) / 100;
      return {
        angabe: `Nach einer Erhöhung um $${p}\\,\\%$ kostet ein Artikel $${tz(W)}$ Euro. Wie viel kostete er vorher?`,
        teile: [
          {
            typ: "zahl",
            einheit: "Euro",
            loesung: `${W}/${1 + p / 100}`,
            // W*(1 - p/100) = G*(1 - p²/10000) liegt bei p = 5 nur 0,25 % unter G: Toleranz auf Cent.
            toleranz: 0.01,
            fehler: [{ wert: `${W}*(1 - ${p}/100)`, meldung: `Die $${p}\\,\\%$ beziehen sich auf den alten Preis, nicht auf den neuen. Zurück kommst du durch Division durch den Faktor.` }],
          },
        ],
        hinweis: "Neuer Preis ist alter Preis mal Faktor. Zurück durch Division.",
        loesung:
          `Ansatz: Der neue Preis ist der alte Preis mal $${tz(1 + p / 100)}$. Den alten Preis $G$ erhalten wir durch Division.\n---\n` +
          `$G\\cdot ${tz(1 + p / 100)} = ${tz(W)}$, also $G = \\dfrac{${tz(W)}}{${tz(1 + p / 100)}} = ${G}$ Euro.\n---\n` +
          `Probe: $${G}\\cdot ${tz(1 + p / 100)} = ${tz(W)}$. Falsch wäre $${tz(W)}\\cdot ${tz(1 - p / 100)}$, denn die $${p}\\,\\%$ beziehen sich auf den alten Preis.`,
      };
    },
  }),
  drill({
    id: "za-d-binomisch",
    kapitel: K,
    titel: "Binomische Formel ausmultiplizieren",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(1, 5);
      const b = r.intOhne0(-9, 9);
      const k = [a * a, 2 * a * b, b * b];
      const ax = a === 1 ? "x" : `${a}x`;
      return {
        angabe: `Multipliziere aus: $(${ax} ${vz(b)})^2$`,
        teile: [
          {
            typ: "term",
            loesung: polyAusdruck(k),
            fehler: [{ wert: polyAusdruck([a * a, 0, b * b]), meldung: "Das gemischte Glied $2\\cdot u\\cdot v$ fehlt. Eine Klammer hoch zwei ist nicht die Summe der Quadrate." }],
          },
        ],
        hinweis: `${b < 0 ? "Zweite" : "Erste"} binomische Formel: $(u ${b < 0 ? "-" : "+"} v)^2 = u^2 ${b < 0 ? "-" : "+"} 2uv + v^2$.`,
        loesung:
          `Ansatz: ${b < 0 ? "Zweite" : "Erste"} binomische Formel $(u ${b < 0 ? "-" : "+"} v)^2 = u^2 ${b < 0 ? "-" : "+"} 2uv + v^2$ mit $u = ${ax}$ und $v = ${Math.abs(b)}$.\n---\n` +
          `$u^2 = ${a * a === 1 ? "" : a * a}x^2$, $2uv = 2\\cdot ${ax}\\cdot ${Math.abs(b)} = ${Math.abs(2 * a * b)}x$, $v^2 = ${b * b}$.\n---\n` +
          `Ergebnis: $${polyTex(k)}$.`,
      };
    },
  }),
  drill({
    id: "za-d-quadratische-ergaenzung",
    kapitel: K,
    titel: "Quadratische Ergänzung",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.intOhne0(-6, 6);
      const c = r.int(-10, 10);
      const e = c - d * d;
      return {
        angabe: `Schreibe $${polyTex([1, 2 * d, c])}$ in der Form $(x + d)^2 + e$. Gib $d$ und $e$ an.`,
        teile: [
          { typ: "zahl", label: "$d$", loesung: String(d), fehler: [{ wert: String(2 * d), meldung: "Der Vorfaktor von $x$ wird halbiert." }] },
          { typ: "zahl", label: "$e$", loesung: `${c} - (${d})^2`, fehler: [{ wert: String(c + d * d), meldung: "Die ergänzte Quadratzahl muss wieder abgezogen werden, nicht addiert." }] },
        ],
        hinweis: "Halber Vorfaktor von $x$, quadriert, addieren und wieder abziehen.",
        loesung:
          `Ansatz: Wir ergänzen zu einem vollständigen Quadrat und ziehen die ergänzte Zahl gleich wieder ab. So ändert sich der Wert nicht.\n---\n` +
          `Halber Vorfaktor von $x$: $${d}$, quadriert: $${d * d}$.\n---\n` +
          `$${polyTex([1, 2 * d, c])} = (${polyTex([1, 2 * d, d * d])}) - ${d * d} ${vz(c)} = (x ${vz(d)})^2 ${vz(e)}$. Also $d = ${d}$ und $e = ${e}$.`,
      };
    },
  }),
  drill({
    id: "za-d-ungleichung",
    kapitel: K,
    titel: "Lineare Ungleichung umformen",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 6);
      const x0 = r.intOhne0(-6, 6);
      const b = r.int(-9, 9);
      const c = b - a * x0; // -a x + b > c  <=>  x < x0
      return {
        angabe: `Löse die Ungleichung $${b} - ${a}x > ${c}$. Gib die Randzahl an und wähle die Richtung.`,
        teile: [
          { typ: "zahl", label: "Randzahl", loesung: `(${c} - (${b}))/(-${a})`, fehler: [{ wert: String(-x0), meldung: "Achte auf die Vorzeichen beim Teilen durch eine negative Zahl." }] },
          {
            typ: "auswahl",
            label: "Lösung",
            optionen: [`$x < ${x0}$`, `$x > ${x0}$`],
            richtig: [0],
            fehler: [{ wert: 1, meldung: "Beim Teilen durch eine negative Zahl dreht sich das Ungleichheitszeichen um." }],
          },
        ],
        hinweis: `Ziehe zuerst $${b}$ ab und teile dann durch $-${a}$. Was passiert dabei mit dem Zeichen?`,
        loesung:
          `Ansatz: Umformen wie bei einer Gleichung. Beim Teilen durch eine negative Zahl dreht sich das Zeichen um.\n---\n` +
          `$${b}$ auf beiden Seiten abziehen: $-${a}x > ${c - b}$.\n---\n` +
          `Durch $-${a}$ teilen und das Zeichen umdrehen: $x < ${x0}$. Probe mit $x = ${x0 - 1}$: $${b} - ${a}\\cdot ${kl(x0 - 1)} = ${b - a * (x0 - 1)} > ${c}$.`,
      };
    },
  }),
  drill({
    id: "za-d-umgebung",
    kapitel: K,
    titel: "Betragsungleichung als Intervall",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(-6, 6);
      const rad = r.int(1, 6);
      const xm = m === 0 ? "x" : `x ${vz(-m)}`;
      return {
        angabe: `Schreibe $\\{x \\in \\R \\mid |${xm}| < ${rad}\\}$ als offenes Intervall. Gib den linken und den rechten Randpunkt an.`,
        teile: [
          {
            typ: "vektor",
            namen: ["links", "rechts"],
            loesung: [String(m - rad), String(m + rad)],
            fehler: m !== 0 ? [{ wert: [String(-m - rad), String(-m + rad)], meldung: `Die Mitte ist $${m}$, nicht $${-m}$. In $|x - a|$ steht die Mitte $a$ mit umgekehrtem Vorzeichen.` }] : undefined,
          },
        ],
        hinweis: "$|x - a| < r$ heißt: Der Abstand von $x$ zu $a$ ist kleiner als $r$.",
        loesung:
          `Ansatz: $|${xm}|$ ist der Abstand von $x$ zur Zahl $${m}$. Er soll kleiner als $${rad}$ sein.\n---\n` +
          `Also $${m} - ${rad} < x < ${m} + ${rad}$, das heißt $${m - rad} < x < ${m + rad}$.\n---\n` +
          `Als Intervall: $]${m - rad};\\ ${m + rad}[$, offen wegen $<$.`,
      };
    },
  }),
];
