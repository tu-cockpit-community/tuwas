import { drill, tz, polyTex, bruchTex, type Drill } from "@/lib/lernen/training";

const K = "differenzierbarkeit";

/** a*x^2 + b*x + c an der Stelle x */
const quad = (a: number, b: number, c: number, x: number) => a * x * x + b * x + c;

/** Gerade m*x + q als LaTeX */
const gerade = (m: number, q: number) => polyTex([m, q]);

/** negative Zahlen in Klammern */
const kl = (x: number) => (x < 0 ? `(${x})` : `${x}`);

/** x - s als LaTeX, ohne "x - 0" */
const xMinus = (s: number) => (s === 0 ? "x" : `x ${s < 0 ? "+" : "-"} ${Math.abs(s)}`);

export const DRILLS: Drill[] = [
  drill({
    id: "db-d-diffquot",
    kapitel: K,
    titel: "Differenzenquotient vereinfachen (h-Methode)",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-4, 4), b = r.int(-6, 6), c = r.int(-5, 5), x0 = r.int(-3, 3);
      const k = 2 * a * x0 + b;
      const y0 = quad(a, b, c, x0);
      return {
        angabe: `Gegeben ist $f(x) = ${polyTex([a, b, c])}$. Vereinfache $\\dfrac{f(${x0} + h) - f(${x0})}{h}$ für $h \\neq 0$ und bestimme damit $f'(${x0})$.`,
        teile: [
          { typ: "term", label: "Differenzenquotient (Term in $h$)", variable: "h", loesung: `(${k}) + (${a})*h` },
          {
            typ: "zahl",
            label: `$f'(${x0})$`,
            loesung: `${k}`,
            fehler:
              y0 !== k
                ? [{ wert: `${y0}`, meldung: `$${y0}$ ist der Funktionswert $f(${x0})$. Gesucht ist der Grenzwert des Differenzenquotienten für $h \\to 0$.` }]
                : undefined,
          },
        ],
        hinweis: "$f(x_0 + h)$ ausmultiplizieren, $f(x_0)$ abziehen, $h$ herausheben und kürzen. Erst danach $h \\to 0$.",
        loesung: `Ansatz: h-Methode, weil die Ableitung aus der Definition verlangt ist. Es ist $f(${x0} + h) = ${polyTex([a, k, y0], "h")}$ und $f(${x0}) = ${y0}$.\n---\nDifferenz: $f(${x0} + h) - f(${x0}) = ${polyTex([a, k, 0], "h")} = h\\,(${polyTex([a, k], "h")})$. Durch $h$ teilen ist erlaubt, weil $h \\ne 0$: Es bleibt $${polyTex([a, k], "h")}$.\n---\nGrenzübergang $h \\to 0$: $f'(${x0}) = ${k}$. Probe mit der Ableitungsregel: $f'(x) = ${polyTex([2 * a, b])}$, also $f'(${x0}) = ${k}$.`,
      };
    },
  }),
  drill({
    id: "db-d-tangente",
    kapitel: K,
    titel: "Tangente aus der Ableitung",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3), b = r.int(-5, 5), c = r.int(-6, 6), x0 = r.intOhne0(-3, 3);
      const k = 2 * a * x0 + b;
      const y0 = quad(a, b, c, x0);
      const d = y0 - k * x0;
      return {
        angabe: `Bestimme die Gleichung der Tangente an $f(x) = ${polyTex([a, b, c])}$ an der Stelle $x_0 = ${x0}$.`,
        teile: [
          {
            typ: "term",
            label: "$t(x)$",
            loesung: `(${k})*x + (${d})`,
            fehler: d !== 0 ? [{ wert: `(${k})*x`, meldung: `Die Steigung stimmt, aber die Tangente muss durch den Punkt $(${x0} \\mid ${y0})$ gehen. Setze in $t(x) = f(x_0) + f'(x_0)(x - x_0)$ ein.` }] : undefined,
          },
        ],
        hinweis: "$t(x) = f(x_0) + f'(x_0)\\,(x - x_0)$. Berechne zuerst $f(x_0)$ und $f'(x_0)$.",
        loesung: `Ansatz: Die Tangente geht durch $(x_0 \\mid f(x_0))$ und hat die Steigung $f'(x_0)$. Es ist $f(${x0}) = ${y0}$ und $f'(x) = ${polyTex([2 * a, b])}$, also $f'(${x0}) = ${k}$.\n---\nEinsetzen: $t(x) = ${y0} ${k < 0 ? "-" : "+"} ${Math.abs(k)}\\,(x ${x0 < 0 ? "+" : "-"} ${Math.abs(x0)})$.\n---\nAusmultipliziert: $t(x) = ${gerade(k, d)}$. Probe: $t(${x0}) = ${k * x0 + d} = f(${x0})$.`,
      };
    },
  }),
  drill({
    id: "db-d-einseitig",
    kapitel: K,
    titel: "Einseitige Ableitungen an einer Knickstelle",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3), x0 = r.int(-2, 2);
      const glatt = 2 * a * x0;
      let m = r.int(-6, 6);
      if (m === glatt) m += r.wahl([-2, -1, 1, 2]);
      const q = a * x0 * x0 - m * x0;
      return {
        angabe: `$$f(x) = \\begin{cases} ${polyTex([a, 0, 0])}, & x \\le ${x0} \\\\ ${gerade(m, q)}, & x > ${x0} \\end{cases}$$ Zeige, dass $f$ bei $x_0 = ${x0}$ stetig ist, und bestimme die einseitigen Ableitungen. Ist $f$ dort differenzierbar?`,
        teile: [
          { typ: "zahl", label: `$f'_-(${x0})$`, loesung: `${glatt}` },
          { typ: "zahl", label: `$f'_+(${x0})$`, loesung: `${m}` },
          {
            typ: "auswahl",
            label: "differenzierbar?",
            optionen: ["ja", "nein"],
            richtig: [1],
            fehler: [{ wert: 0, meldung: "Differenzierbar heißt: Beide einseitigen Ableitungen sind gleich. Vergleiche deine beiden Werte." }],
          },
        ],
        hinweis: "Zuerst die Stetigkeit prüfen. Dann die Ableitungen der Stücke an der Nahtstelle vergleichen.",
        loesung: `Ansatz: Rezept für Nahtstellen, also zuerst die Stetigkeit. $f(${x0}) = ${a * x0 * x0}$ und $\\lim_{x \\to ${x0}^+}(${gerade(m, q)}) = ${m * x0 + q}$. Beide Werte stimmen überein, also ist $f$ stetig.\n---\nWeil $f$ stetig ist, sind die Ableitungen der Stücke die einseitigen Ableitungen. Links: $(${polyTex([a, 0, 0])})' = ${polyTex([2 * a, 0])}$, an der Stelle $${x0}$ also $${glatt}$. Rechts: Steigung $${m}$.\n---\nEs ist $${glatt} \\neq ${m}$. Die Stücke treffen sich mit verschiedenen Steigungen: Knick. $f$ ist bei $${x0}$ stetig, aber nicht differenzierbar.`,
      };
    },
  }),
  drill({
    id: "db-d-parameter",
    kapitel: K,
    titel: "Parameter für differenzierbaren Übergang",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.intOhne0(-3, 3), x0 = r.intOhne0(-3, 3);
      const a = 2 * p * x0;
      const b = -p * x0 * x0;
      return {
        angabe: `Bestimme $a, b \\in \\R$ so, dass $$f(x) = \\begin{cases} ${polyTex([p, 0, 0])}, & x \\le ${x0} \\\\ a x + b, & x > ${x0} \\end{cases}$$ auf ganz $\\R$ differenzierbar ist.`,
        teile: [
          {
            typ: "zahl",
            label: "$a$",
            loesung: `${a}`,
            fehler: p * x0 * x0 !== a ? [{ wert: `${p * x0 * x0}`, meldung: `$${p * x0 * x0}$ ist die Höhe der Parabel an der Nahtstelle. Für $a$ braucht man ihre **Steigung**.` }] : undefined,
          },
          {
            typ: "zahl",
            label: "$b$",
            loesung: `${b}`,
            fehler: b !== 0 ? [{ wert: "0", meldung: `Mit $b = 0$ springt die Funktion. Die Stetigkeit verlangt $${p * x0 * x0} = a\\cdot(${x0}) + b$.` }] : undefined,
          },
        ],
        hinweis: "Zwei Bedingungen: gleiche Steigung an der Nahtstelle liefert $a$, gleiche Höhe (Stetigkeit) liefert dann $b$.",
        loesung: `Ansatz: Differenzierbar setzt stetig voraus. Zwei Bedingungen bestimmen die zwei Parameter.\n---\nSteigung: $(${polyTex([p, 0, 0])})' = ${polyTex([2 * p, 0])}$, an der Stelle $${x0}$ also $${a}$. Damit $a = ${a}$.\n---\nStetigkeit: $${p * x0 * x0} = a\\cdot(${x0}) + b = ${a * x0} + b$, also $b = ${b}$.\n---\nDie Gerade $y = ${gerade(a, b)}$ ist die Tangente an die Parabel bei $x = ${x0}$. Abseits der Nahtstelle sind beide Stücke Polynome und damit differenzierbar.`,
      };
    },
  }),
  drill({
    id: "db-d-nahtstelle",
    kapitel: K,
    titel: "Nahtstelle klassifizieren",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-2, 2), x0 = r.int(-2, 2);
      const fall = r.int(0, 2); // 0 glatt, 1 Knick, 2 Sprung
      const glatt = 2 * a * x0;
      let m = glatt;
      if (fall >= 1) m = glatt + r.wahl([-2, -1, 1, 2]);
      let q = a * x0 * x0 - m * x0;
      if (fall === 2) q += r.wahl([-3, -1, 1, 2]);
      const rechts = m * x0 + q;
      const text = [
        `Die Höhen stimmen überein ($${a * x0 * x0} = ${rechts}$) und die Steigungen auch ($${glatt}$ und $${m}$). Also ist $f$ differenzierbar.`,
        `Die Höhen stimmen überein ($${a * x0 * x0} = ${rechts}$), die Steigungen nicht ($${glatt} \\neq ${m}$). Also hat $f$ einen Knick: stetig, aber nicht differenzierbar.`,
        `Der Funktionswert ist $${a * x0 * x0}$, der rechte Grenzwert $${rechts}$. Die Funktion springt, ist also unstetig und damit auch nicht differenzierbar.`,
      ][fall];
      const optionen = ["stetig und differenzierbar", "stetig, aber nicht differenzierbar", "nicht stetig, also nicht differenzierbar"];
      const meldungen = [
        "Prüfe beide Bedingungen: gleiche Höhe **und** gleiche Steigung an der Nahtstelle.",
        "Vergleiche zuerst die Höhen. Stimmen sie überein? Erst dann lohnt der Vergleich der Steigungen.",
        "Vergleiche den Funktionswert mit dem rechten Grenzwert. Springt die Funktion wirklich?",
      ];
      return {
        angabe: `$$f(x) = \\begin{cases} ${polyTex([a, 0, 0])}, & x \\le ${x0} \\\\ ${gerade(m, q)}, & x > ${x0} \\end{cases}$$ Was gilt an der Stelle $x_0 = ${x0}$?`,
        teile: [
          {
            typ: "auswahl",
            optionen,
            richtig: [fall],
            fehler: [0, 1, 2].filter((i) => i !== fall).map((i) => ({ wert: i, meldung: meldungen[i] })),
          },
        ],
        hinweis: "Erst die Stetigkeit (Höhen), dann die Steigungen der beiden Stücke vergleichen.",
        loesung: `Ansatz: Rezept für Nahtstellen. Stetigkeit: $f(${x0}) = ${a * x0 * x0}$ und $\\lim_{x\\to ${x0}^+} f(x) = ${rechts}$.\n---\nSteigungen: links $${glatt}$, rechts $${m}$.\n---\n${text}`,
      };
    },
  }),
  drill({
    id: "db-d-mws-quad",
    kapitel: K,
    titel: "Zwischenstelle im Mittelwertsatz (Parabel)",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3), b = r.int(-5, 5), c = r.int(-5, 5);
      const u = r.int(-4, 2), v = u + r.int(1, 5);
      const s = (quad(a, b, c, v) - quad(a, b, c, u)) / (v - u);
      return {
        angabe: `Bestimme für $f(x) = ${polyTex([a, b, c])}$ auf $[${u}, ${v}]$ die Stelle $\\xi$ aus dem Mittelwertsatz.`,
        teile: [
          {
            typ: "zahl",
            label: "$\\xi$",
            loesung: `(${u} + ${v})/2`,
            fehler: s !== (u + v) / 2 ? [{ wert: `${s}`, meldung: "Das ist die Sekantensteigung. Gesucht ist die **Stelle** $\\xi$, an der $f'(\\xi)$ diesen Wert hat." }] : undefined,
          },
        ],
        hinweis: "Sekantensteigung berechnen und mit $f'(\\xi)$ gleichsetzen.",
        loesung: `Ansatz: Der Mittelwertsatz verlangt $f'(\\xi)$ gleich der Sekantensteigung. Sekantensteigung: $\\dfrac{f(${v}) - f(${u})}{${v} - ${kl(u)}} = \\dfrac{${quad(a, b, c, v)} - ${kl(quad(a, b, c, u))}}{${v - u}} = ${tz(s)}$.\n---\n$f'(\\xi) = ${polyTex([2 * a, b], "\\xi")} = ${tz(s)}$ ergibt $\\xi = ${bruchTex(u + v, 2)}$. Bei Parabeln liegt $\\xi$ immer genau in der Intervallmitte.`,
      };
    },
  }),
  drill({
    id: "db-d-mws-kubik",
    kapitel: K,
    titel: "Zwischenstelle im Mittelwertsatz (x³)",
    niveau: 2,
    erzeuge: (r) => {
      const v = r.int(1, 6);
      return {
        angabe: `Bestimme für $f(x) = x^3$ auf $[0, ${v}]$ die Stelle $\\xi \\in (0, ${v})$ aus dem Mittelwertsatz, exakt oder auf drei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            label: "$\\xi$",
            loesung: `${v}/sqrt(3)`,
            fehler: [{ wert: `${v}/2`, meldung: "Die Intervallmitte ist nur bei Parabeln die Zwischenstelle. Löse $3\\xi^2 = $ Sekantensteigung." }],
          },
        ],
        hinweis: "Sekantensteigung $\\frac{f(b) - f(a)}{b - a}$ berechnen und $3\\xi^2$ damit gleichsetzen.",
        loesung: `Ansatz: Mittelwertsatz, also $f'(\\xi)$ gleich der Sekantensteigung. Sekantensteigung: $\\dfrac{${v ** 3} - 0}{${v}} = ${v * v}$.\n---\nAus $3\\xi^2 = ${v * v}$ folgt $\\xi^2 = ${bruchTex(v * v, 3)}$, also $\\xi = \\dfrac{${v}}{\\sqrt3} \\approx ${tz(v / Math.sqrt(3), 3)}$.\n---\nDie negative Lösung $-\\frac{${v}}{\\sqrt3}$ liegt nicht im Intervall und zählt nicht.`,
      };
    },
  }),
  drill({
    id: "db-d-rolle",
    kapitel: K,
    titel: "Satz von Rolle anwenden",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 4);
      const p = 3 * m * m;
      return {
        angabe: `Zeige, dass $f(x) = x^3 - ${p}x$ auf $[-\\sqrt{${p}}, \\sqrt{${p}}]$ die Voraussetzungen des Satzes von Rolle erfüllt, und bestimme die positive Stelle $\\xi$ mit $f'(\\xi) = 0$.`,
        teile: [
          {
            typ: "zahl",
            label: "$\\xi$",
            loesung: `${m}`,
            fehler: [{ wert: `sqrt(${p})`, meldung: `$\\sqrt{${p}}$ ist der Rand des Intervalls und eine Nullstelle von $f$. Gesucht ist die Stelle mit $f'(\\xi) = 0$.` }],
          },
        ],
        hinweis: `$f(x) = x(x^2 - ${p})$ verschwindet an beiden Rändern. Danach $f'(\\xi) = 3\\xi^2 - ${p} = 0$ lösen.`,
        loesung: `Ansatz: drei Voraussetzungen prüfen, dann $f'(\\xi) = 0$ lösen. $f$ ist ein Polynom, also stetig und differenzierbar. $f(\\pm\\sqrt{${p}}) = \\pm\\sqrt{${p}}\\,(${p} - ${p}) = 0$, die Randwerte sind also gleich.\n---\nAus $f'(\\xi) = 3\\xi^2 - ${p} = 0$ folgt $\\xi^2 = ${m * m}$, also $\\xi = ${m}$ oder $\\xi = -${m}$.\n---\nDie positive Stelle ist $\\xi = ${m}$. Sie liegt im Inneren, weil $${m} < \\sqrt{${p}} \\approx ${tz(Math.sqrt(p), 2)}$.`,
      };
    },
  }),
  drill({
    id: "db-d-lh-poly",
    kapitel: K,
    titel: "Grenzwert 0/0 bei Polynomen",
    niveau: 1,
    erzeuge: (r) => {
      const s = r.int(-5, 5);
      let t = r.int(-5, 5);
      if (t === s) t += 1;
      const b = -(s + t), c = s * t;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to ${s}} \\frac{${polyTex([1, b, c])}}{${xMinus(s)}}$ mit der Regel von de l'Hospital.`,
        teile: [
          {
            typ: "zahl",
            label: "Grenzwert",
            loesung: `${s - t}`,
            fehler: s - t !== 0 ? [{ wert: "0", meldung: "Einsetzen ergibt $\\frac00$, und das ist nicht $0$. Leite Zähler und Nenner getrennt ab." }] : undefined,
          },
        ],
        hinweis: "Prüfe zuerst, dass $\\frac00$ vorliegt. Dann Zähler und Nenner getrennt ableiten.",
        loesung: `Ansatz: Einsetzen von $x = ${s}$ ergibt im Zähler und im Nenner $0$. Typ $\\frac00$, die Regel ist anwendbar.\n---\nGetrennt ableiten: $\\lim_{x\\to ${s}}\\dfrac{${polyTex([2, b])}}{1} = ${2 * s + b}$.\n---\nKontrolle durch Faktorisieren: $${polyTex([1, b, c])} = (${xMinus(s)})(${xMinus(t)})$. Gekürzt bleibt $${xMinus(t)} \\to ${s - t}$.`,
      };
    },
  }),
  drill({
    id: "db-d-lh-trans",
    kapitel: K,
    titel: "de l'Hospital mit e-Funktion und Winkelfunktionen",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(2, 6), m = r.int(1, 5);
      const typ = r.int(0, 2);
      const mx = m === 1 ? "" : `${m}`;
      const ergebnis = k % m === 0 ? ` = ${k / m}` : "";
      if (typ === 0)
        return {
          angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{e^{${k}x} - 1}{${mx}x}$.`,
          teile: [
            {
              typ: "zahl",
              label: "Grenzwert",
              loesung: `${k}/${m}`,
              fehler: m !== 1 ? [{ wert: `1/${m}`, meldung: `Die Kettenregel liefert den Faktor $${k}$: $(e^{${k}x})' = ${k}e^{${k}x}$.` }] : [{ wert: "1", meldung: `Die Kettenregel liefert den Faktor $${k}$: $(e^{${k}x})' = ${k}e^{${k}x}$.` }],
            },
          ],
          hinweis: "Typ $\\frac00$. Kettenregel beim Ableiten des Zählers nicht vergessen.",
          loesung: `Ansatz: Einsetzen ergibt $\\frac{e^0 - 1}{0} = \\frac00$, die Regel ist anwendbar.\n---\nGetrennt ableiten: $\\dfrac{${k}e^{${k}x}}{${m}} \\to \\dfrac{${k}}{${m}}${ergebnis}$.\n---\nKontrolle: Für kleine $x$ ist $e^{${k}x} \\approx 1 + ${k}x$ (Tangente der e-Funktion). Der Bruch ist dann ungefähr $\\dfrac{${k}x}{${mx}x} = \\dfrac{${k}}{${m}}${ergebnis}$.`,
        };
      if (typ === 1)
        return {
          angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin(${k}x)}{${mx}x}$.`,
          teile: [
            {
              typ: "zahl",
              label: "Grenzwert",
              loesung: `${k}/${m}`,
              fehler: m !== 1 ? [{ wert: `1/${m}`, meldung: `Die Kettenregel liefert den Faktor $${k}$: $(\\sin(${k}x))' = ${k}\\cos(${k}x)$.` }] : [{ wert: "1", meldung: `Die Kettenregel liefert den Faktor $${k}$: $(\\sin(${k}x))' = ${k}\\cos(${k}x)$.` }],
            },
          ],
          hinweis: "Typ $\\frac00$. Kettenregel beim Ableiten des Zählers nicht vergessen.",
          loesung: `Ansatz: Einsetzen ergibt $\\frac{\\sin 0}{0} = \\frac00$, die Regel ist anwendbar.\n---\nGetrennt ableiten: $\\dfrac{${k}\\cos(${k}x)}{${m}} \\to \\dfrac{${k}}{${m}}${ergebnis}$.\n---\nKontrolle: Für kleine $x$ (im Bogenmaß) ist $\\sin(${k}x) \\approx ${k}x$. Der Bruch ist dann ungefähr $\\dfrac{${k}x}{${mx}x} = \\dfrac{${k}}{${m}}${ergebnis}$.`,
        };
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos(${k}x)}{${mx}x^2}$.`,
        teile: [
          {
            typ: "zahl",
            label: "Grenzwert",
            loesung: `${k * k}/(2*${m})`,
            anzeige: bruchTex(k * k, 2 * m),
            fehler: [{ wert: `${k}/(2*${m})`, meldung: `Beim zweiten Ableiten kommt der Faktor $${k}$ ein zweites Mal dazu. Am Ende steht $\\frac{${k * k}\\cos(${k}x)}{${2 * m}}$.` }],
          },
        ],
        hinweis: "Die Regel zweimal anwenden. Nach dem ersten Schritt liegt wieder $\\frac00$ vor.",
        loesung: `Ansatz: Typ $\\frac00$, denn $1 - \\cos 0 = 0$. Ableiten ergibt $\\dfrac{${k}\\sin(${k}x)}{${2 * m}x}$, wieder $\\frac00$.\n---\nNoch einmal ableiten: $\\dfrac{${k * k}\\cos(${k}x)}{${2 * m}} \\to ${bruchTex(k * k, 2 * m)}$.\n---\nKontrolle mit dem Taylorpolynom: Für kleine $x$ ist $\\cos(${k}x) \\approx 1 - \\frac{(${k}x)^2}{2}$. Der Bruch ist dann ungefähr $\\dfrac{${k * k}x^2}{${2 * m}x^2} = ${bruchTex(k * k, 2 * m)}$.`,
      };
    },
  }),
  drill({
    id: "db-d-linear",
    kapitel: K,
    titel: "Wurzel linear nähern",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(4, 12), d = r.wahl([-2, -1, 1, 2, 3]);
      const x = n * n + d;
      return {
        angabe: `Berechne mit der Tangente von $f(x) = \\sqrt x$ an der Stelle $x_0 = ${n * n}$ einen Näherungswert für $\\sqrt{${x}}$ auf vier Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            label: `$\\sqrt{${x}} \\approx$`,
            loesung: `${n} + (${d})/(2*${n})`,
            anzeige: tz(n + d / (2 * n), 4),
            // Vier Nachkommastellen verlangt; die Standardtoleranz würde bei kleinem d auch d/n akzeptieren.
            toleranz: 0.0005,
            fehler: [{ wert: `${n} + (${d})/${n}`, meldung: `Die Ableitung der Wurzel ist $\\frac{1}{2\\sqrt x}$. An der Stelle $${n * n}$ ist das $\\frac{1}{${2 * n}}$.` }],
          },
        ],
        hinweis: "$\\sqrt x \\approx \\sqrt{x_0} + \\frac{1}{2\\sqrt{x_0}}\\,(x - x_0)$.",
        loesung: `Ansatz: Linearisierung an der nächstgelegenen Quadratzahl $${n * n}$. Es ist $f(${n * n}) = ${n}$, $f'(x) = \\dfrac{1}{2\\sqrt x}$ und $f'(${n * n}) = \\dfrac{1}{${2 * n}}$.\n---\n$\\sqrt{${x}} \\approx ${n} + \\dfrac{1}{${2 * n}}\\cdot(${d}) \\approx ${tz(n + d / (2 * n), 4)}$.\n---\nZum Vergleich: $\\sqrt{${x}} \\approx ${tz(Math.sqrt(x), 5)}$. Die Näherung ist gut, weil $${x}$ nahe bei $${n * n}$ liegt.`,
      };
    },
  }),
  drill({
    id: "db-d-kette",
    kapitel: K,
    titel: "Kettenregel an einer Stelle",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, -2, 4]), n = r.wahl([2, 3]);
      let b = r.int(-3, 3);
      const x0 = r.int(-2, 2);
      if (a * x0 + b === 0) b += 1;
      const u = a * x0 + b;
      const wert = n * a * u ** (n - 1);
      const ohneInnen = n * u ** (n - 1);
      return {
        angabe: `Berechne für $f(x) = (${polyTex([a, b])})^{${n}}$ die Ableitung $f'(${x0})$ mit der Kettenregel.`,
        teile: [
          {
            typ: "zahl",
            label: `$f'(${x0})$`,
            loesung: `${n}*(${a})*(${u})^${n - 1}`,
            anzeige: `${wert}`,
            fehler: ohneInnen !== wert ? [{ wert: `${ohneInnen}`, meldung: `Die äußere Ableitung stimmt, aber die innere Ableitung $${a}$ fehlt als Faktor.` }] : undefined,
          },
        ],
        hinweis: "Äußere Funktion $u^n$, innere Funktion $u = ax + b$ mit $u' = a$. Äußere Ableitung an der inneren Stelle mal innere Ableitung.",
        loesung: `Ansatz: Kettenregel, weil $${polyTex([a, b])}$ in die Potenz eingesetzt wird. Innen $u = ${polyTex([a, b])}$ mit $u' = ${a}$, außen $u^{${n}}$ mit Ableitung $${n}u^{${n - 1}}$.\n---\n$f'(x) = ${n}\\,(${polyTex([a, b])})^{${n - 1}}\\cdot ${kl(a)}$.\n---\nAn der Stelle $${x0}$ ist $u = ${u}$, also $f'(${x0}) = ${n}\\cdot ${kl(u)}^{${n - 1}}\\cdot ${kl(a)} = ${wert}$.`,
      };
    },
  }),
  drill({
    id: "db-d-umkehr",
    kapitel: K,
    titel: "Ableitung einer Umkehrfunktion ohne Formel",
    niveau: 3,
    erzeuge: (r) => {
      const p = r.int(1, 5), m = r.wahl([-2, -1, 1, 2]);
      const y0 = m ** 3 + p * m;
      const steig = 3 * m * m + p;
      return {
        angabe: `Die Funktion $f(x) = x^3 + ${p}x$ ist streng monoton wachsend und daher umkehrbar. Bestimme $(f^{-1})'(${y0})$, ohne eine Formel für $f^{-1}$ zu suchen.`,
        teile: [
          {
            typ: "zahl",
            label: `$(f^{-1})'(${y0})$`,
            loesung: `1/(3*(${m})^2 + ${p})`,
            anzeige: bruchTex(1, steig),
            fehler: [
              { wert: `${steig}`, meldung: `$${steig}$ ist die Steigung von $f$ an der Stelle $${m}$. Die Umkehrfunktion hat den **Kehrwert** als Steigung.` },
              { wert: `1/(3*(${y0})^2 + ${p})`, meldung: `Die Formel verlangt $f'$ an der Stelle $f^{-1}(${y0}) = ${m}$, nicht an der Stelle $${y0}$.` },
            ],
          },
        ],
        hinweis: "Finde zuerst $x_0$ mit $f(x_0) = y_0$ durch Probieren kleiner ganzer Zahlen. Dann $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$.",
        loesung: `Ansatz: Umkehrregel $(f^{-1})'(y_0) = \\dfrac{1}{f'(x_0)}$ mit $f(x_0) = y_0$. Eine Formel für $f^{-1}$ braucht man nicht.\n---\nStelle suchen: $f(${m}) = ${kl(m)}^3 + ${p}\\cdot ${kl(m)} = ${y0}$, also $x_0 = ${m}$.\n---\n$f'(x) = 3x^2 + ${p}$, also $f'(${m}) = ${steig} \\ne 0$. Damit $(f^{-1})'(${y0}) = \\dfrac{1}{${steig}}$.`,
      };
    },
  }),
  drill({
    id: "db-d-extrem-intervall",
    kapitel: K,
    titel: "Globale Extrema auf einem Intervall",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.wahl([1, 2]);
      const bRand = m === 1 ? r.wahl([2, 3]) : r.wahl([3, 4, 5]);
      const p = 3 * m * m;
      const f = (x: number) => x ** 3 - p * x;
      const fm = f(m), fb = f(bRand);
      const max = Math.max(0, fb);
      const maxStelle = fb > 0 ? bRand : 0;
      return {
        angabe: `Bestimme das globale Maximum und das globale Minimum von $f(x) = x^3 - ${p}x$ auf dem Intervall $[0, ${bRand}]$.`,
        teile: [
          {
            typ: "zahl",
            label: "globales Maximum (Wert)",
            loesung: `${max}`,
            fehler: max !== 0 ? [{ wert: "0", meldung: `Vergiss den rechten Randpunkt nicht: $f(${bRand}) = ${fb}$.` }] : [{ wert: `${fb}`, meldung: `$f(${bRand}) = ${fb}$ ist kleiner als $f(0) = 0$. Vergleiche alle Kandidaten.` }],
          },
          {
            typ: "zahl",
            label: "globales Minimum (Wert)",
            loesung: `${fm}`,
            fehler: [{ wert: `${m}`, meldung: `$${m}$ ist die **Stelle** des Minimums. Gesucht ist der Funktionswert $f(${m})$.` }],
          },
        ],
        hinweis: "Kandidaten: Nullstellen von $f'$ im Inneren und die beiden Randpunkte. Alle Funktionswerte vergleichen.",
        loesung: `Ansatz: Rezept für globale Extrema auf einem abgeschlossenen Intervall. $f'(x) = 3x^2 - ${p} = 0$ ergibt $x = \\pm ${m}$. Im Inneren von $[0, ${bRand}]$ liegt nur $x = ${m}$.\n---\nKandidaten: $f(0) = 0$, $f(${m}) = ${fm}$, $f(${bRand}) = ${fb}$.\n---\nGlobales Maximum $${max}$ bei $x = ${maxStelle}$, globales Minimum $${fm}$ bei $x = ${m}$.${max > 0 ? " Das Maximum liegt am Rand, obwohl die Ableitung dort nicht null ist." : ""}`,
      };
    },
  }),
  drill({
    id: "db-d-taylor",
    kapitel: K,
    titel: "Taylorpolynom zweiten Grades",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.wahl([1, 2, 3, -1, -2]);
      const x = 0.1;
      const naeherung = 1 + k * x + (k * k * x * x) / 2;
      // Vorfaktor ohne „1“ bzw. „-1“: 1 -> "", -1 -> "-"
      const vf = (z: number) => (z === 1 ? "" : z === -1 ? "-" : `${z}`);
      const ex = `${vf(k)}x`;
      return {
        angabe: `Bestimme das Taylorpolynom $T_2$ von $f(x) = e^{${ex}}$ an der Stelle $0$ und berechne damit einen Näherungswert für $f(0{,}1)$ auf vier Nachkommastellen.`,
        teile: [
          {
            typ: "term",
            label: "$T_2(x)$",
            loesung: `1 + (${k})*x + (${k * k})*x^2/2`,
            fehler: [{ wert: `1 + (${k})*x + (${k * k})*x^2`, meldung: `Der Koeffizient vor $x^2$ ist $\\frac{f''(0)}{2!}$. Die Fakultät $2! = 2$ fehlt.` }],
          },
          { typ: "zahl", label: "$f(0{,}1) \\approx$", loesung: `1 + (${k})*0.1 + (${k * k})*0.01/2`, anzeige: tz(naeherung, 4) },
        ],
        hinweis: `Mit der Kettenregel: $f'(x) = ${vf(k)}e^{${ex}}$ und $f''(x) = ${vf(k * k)}e^{${ex}}$. An der Stelle $0$ also $1$, $${k}$, $${k * k}$.`,
        loesung: `Ansatz: Definition $T_2(x) = f(0) + f'(0)\\,x + \\frac{f''(0)}{2!}\\,x^2$. Es ist $f(0) = 1$, $f'(0) = ${k}$, $f''(0) = ${k * k}$.\n---\n$T_2(x) = 1 ${k < 0 ? "-" : "+"} ${Math.abs(k) === 1 ? "" : Math.abs(k)}x + ${bruchTex(k * k, 2)}x^2$.\n---\n$T_2(0{,}1) \\approx ${tz(naeherung, 4)}$. Zum Vergleich: $f(0{,}1) = e^{${tz(k * x, 1)}} \\approx ${tz(Math.exp(k * x), 4)}$.`,
      };
    },
  }),
];
