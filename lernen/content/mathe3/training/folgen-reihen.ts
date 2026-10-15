import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "folgen-reihen";

/** Zahl in Klammern, falls negativ (fuer Produkte in LaTeX) */
const kl = (x: number) => (x < 0 ? `(${tz(x)})` : tz(x));
/** Euro-Betrag mit zwei Nachkommastellen fuer den Fliesstext */
const euro = (x: number) => x.toFixed(2).replace(".", "{,}");
/** " + x" bzw. " - |x|" (leer bei 0) */
const plus = (x: number) => (x === 0 ? "" : ` ${x < 0 ? "-" : "+"} ${tz(Math.abs(x))}`);

export const DRILLS: Drill[] = [
  drill({
    id: "fr-d-arith-glied",
    kapitel: K,
    titel: "Glied einer arithmetischen Folge",
    niveau: 1,
    erzeuge: (r) => {
      const a1 = r.int(-20, 20);
      const d = r.intOhne0(-9, 9);
      const n = r.int(8, 60);
      const wert = a1 + (n - 1) * d;
      return {
        angabe: `Eine arithmetische Folge hat $a_1 = ${a1}$ und $d = ${d}$. Berechne $a_{${n}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a1} + (${n} - 1)*(${d})`,
            fehler: [{ wert: `${a1} + ${n}*(${d})`, meldung: `Bis $a_{${n}}$ sind es nur $${n - 1}$ Schritte, nicht $${n}$. Prüfe deine Formel mit $n = 1$.` }],
          },
        ],
        hinweis: "Formel $a_n = a_1 + (n - 1)\\,d$. Bis zum $n$-ten Glied macht man $n - 1$ Schritte.",
        loesung: `Ansatz: Formel $a_n = a_1 + (n - 1)\\,d$, weil $a_1$ und $d$ bekannt sind.\n---\n$a_{${n}} = ${a1} + ${n - 1}\\cdot ${kl(d)} = ${wert}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-arith-zwei",
    kapitel: K,
    titel: "Arithmetische Folge aus zwei Gliedern",
    niveau: 2,
    erzeuge: (r) => {
      const a1 = r.int(-15, 15);
      const d = r.intOhne0(-8, 8);
      const m = r.int(2, 6);
      const k = m + r.int(2, 9);
      const am = a1 + (m - 1) * d;
      const ak = a1 + (k - 1) * d;
      return {
        angabe: `Von einer arithmetischen Folge kennt man $a_{${m}} = ${am}$ und $a_{${k}} = ${ak}$. Bestimme $d$ und $a_1$.`,
        teile: [
          {
            typ: "zahl",
            label: "$d$",
            loesung: `(${ak} - (${am}))/(${k} - ${m})`,
            fehler: [{ wert: `(${ak} - (${am}))/(${k - m + 1})`, meldung: "Du hast die Glieder gezählt. Geteilt wird durch die Anzahl der **Schritte** zwischen den beiden Gliedern." }],
          },
          { typ: "zahl", label: "$a_1$", loesung: `${am} - (${m} - 1)*(${d})` },
        ],
        hinweis: `Von $a_{${m}}$ nach $a_{${k}}$ sind es $${k - m}$ Schritte.`,
        loesung: `Ansatz: Zwischen zwei bekannten Gliedern zählen wir die Schritte. Von Nummer $${m}$ bis $${k}$ sind es $${k - m}$.\n---\n$${k - m}\\,d = a_{${k}} - a_{${m}} = ${ak - am}$, also $d = ${d}$.\n---\nVon $a_1$ bis $a_{${m}}$ sind es $${m - 1}$ Schritte: $a_1 = ${am} - ${kl((m - 1) * d)} = ${a1}$.\n---\nProbe: $a_{${k}} = ${a1} + ${k - 1}\\cdot ${kl(d)} = ${ak}$ ✓`,
      };
    },
  }),
  drill({
    id: "fr-d-geo-glied",
    kapitel: K,
    titel: "Glied einer geometrischen Folge",
    niveau: 1,
    erzeuge: (r) => {
      const a1 = r.intOhne0(-5, 5);
      const q = r.wahl([2, 3, -2, -3, 0.5, -0.5] as const);
      const n = r.int(4, 9);
      const wert = a1 * q ** (n - 1);
      return {
        angabe: `Eine geometrische Folge hat $a_1 = ${a1}$ und $q = ${tz(q)}$. Berechne $a_{${n}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a1}*(${q})^(${n} - 1)`,
            fehler: [{ wert: `${a1}*(${q})^${n}`, meldung: `Bis $a_{${n}}$ multipliziert man nur $${n - 1}$ Mal mit $q$.` }],
          },
        ],
        hinweis: "Formel $a_n = a_1\\,q^{n-1}$.",
        loesung: `Ansatz: Formel $a_n = a_1\\,q^{n-1}$, weil $a_1$ und $q$ bekannt sind.\n---\n$a_{${n}} = ${a1}\\cdot ${kl(q)}^{${n - 1}} = ${a1}\\cdot ${kl(Number((q ** (n - 1)).toFixed(10)))} = ${tz(wert, 10)}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-geo-zwei",
    kapitel: K,
    titel: "Geometrische Folge aus zwei Gliedern",
    niveau: 2,
    erzeuge: (r) => {
      const a1 = r.intOhne0(-4, 4);
      const q = r.wahl([2, 3, -2, -3] as const);
      const a2 = a1 * q;
      const a5 = a1 * q ** 4;
      return {
        angabe: `Von einer geometrischen Folge kennt man $a_2 = ${a2}$ und $a_5 = ${a5}$. Bestimme $q$ und $a_1$.`,
        teile: [
          {
            typ: "zahl",
            label: "$q$",
            loesung: `nthRoot(${a5}/(${a2}), 3)`,
            fehler: [{ wert: String(-q), meldung: "Das Vorzeichen stimmt nicht. Bei einer ungeraden Hochzahl hat die Wurzel dasselbe Vorzeichen wie die Zahl darunter." }],
          },
          { typ: "zahl", label: "$a_1$", loesung: `${a2}/(${q})` },
        ],
        hinweis: "Von $a_2$ nach $a_5$ sind es drei Schritte: $a_5 = a_2\\,q^3$.",
        loesung: `Ansatz: Drei Schritte von $a_2$ nach $a_5$, also $q^3 = \\frac{a_5}{a_2}$.\n---\n$q^3 = \\frac{${a5}}{${a2}} = ${q ** 3}$, also $q = \\sqrt[3]{${q ** 3}} = ${q}$. Bei ungerader Hochzahl ist das eindeutig.\n---\nEin Schritt zurück heißt durch $q$ teilen: $a_1 = \\frac{a_2}{q} = \\frac{${a2}}{${q}} = ${a1}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-geo-index",
    kapitel: K,
    titel: "Index mit dem Logarithmus finden",
    niveau: 2,
    erzeuge: (r) => {
      const a1 = r.wahl([2, 3, 4, 5] as const);
      const q = r.wahl([1.2, 1.3, 1.5, 1.8] as const);
      const grenze = r.wahl([500, 1000, 2000, 5000] as const);
      const t = Math.log(grenze / a1) / Math.log(q);
      const nMinus1 = Math.floor(t) + 1;
      const n = nMinus1 + 1;
      return {
        angabe: `Gegeben ist die geometrische Folge $a_n = ${a1}\\cdot ${tz(q)}^{\\,n-1}$. Ab welchem Index $n$ ist $a_n > ${grenze}$?`,
        teile: [
          {
            typ: "zahl",
            label: "$n$",
            loesung: String(n),
            fehler: [{ wert: String(nMinus1), meldung: "Das ist der kleinste Wert für $n - 1$. Gesucht ist $n$, also noch $1$ addieren." }],
          },
        ],
        hinweis: `Teile durch $${a1}$ und logarithmiere: $(n - 1)\\ln ${tz(q)} > \\ln ${tz(grenze / a1, 4)}$.`,
        loesung: `Ansatz: Die Unbekannte steht in der Hochzahl, also logarithmieren. Zuerst durch $${a1}$ teilen: $${tz(q)}^{n-1} > ${tz(grenze / a1, 4)}$.\n---\n$n - 1 > \\frac{\\ln ${tz(grenze / a1, 4)}}{\\ln ${tz(q)}} \\approx ${tz(t, 2)}$. Das Zeichen bleibt, weil $\\ln ${tz(q)} > 0$ ist.\n---\nAlso $n - 1 \\ge ${nMinus1}$ und $n = ${n}$. Kontrolle: $a_{${n - 1}} \\approx ${tz(a1 * q ** (n - 2), 1)}$ und $a_{${n}} \\approx ${tz(a1 * q ** (n - 1), 1)}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-arith-summe",
    kapitel: K,
    titel: "Summe einer arithmetischen Folge",
    niveau: 1,
    erzeuge: (r) => {
      const a1 = r.int(-10, 20);
      const d = r.intOhne0(-5, 6);
      const n = r.int(10, 40);
      const an = a1 + (n - 1) * d;
      const s = (n * (a1 + an)) / 2;
      return {
        angabe: `Berechne die Summe der ersten $${n}$ Glieder der arithmetischen Folge mit $a_1 = ${a1}$ und $d = ${d}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n}/2*(2*(${a1}) + (${n} - 1)*(${d}))`,
            // Bei a1 + an = 0 ist die Summe 0 und das Fehlerbild fiele mit der Lösung zusammen.
            fehler: a1 + an === 0 ? [] : [{ wert: `${n}*(${a1} + (${an}))`, meldung: "In der Formel steht der **Mittelwert** aus erstem und letztem Glied. Teile die Klammer noch durch $2$." }],
          },
        ],
        hinweis: "Zuerst das letzte Glied $a_n$ berechnen, dann $s_n = \\frac{n}{2}(a_1 + a_n)$.",
        loesung: `Ansatz: Summenformel $s_n = \\frac{n}{2}(a_1 + a_n)$. Dafür brauchen wir das letzte Glied: $a_{${n}} = ${a1} + ${n - 1}\\cdot ${kl(d)} = ${an}$.\n---\n$s_{${n}} = \\frac{${n}}{2}\\,(${a1} + ${kl(an)}) = \\frac{${n}}{2}\\cdot ${kl(a1 + an)} = ${tz(s)}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-geo-summe",
    kapitel: K,
    titel: "Summe einer geometrischen Folge",
    niveau: 2,
    erzeuge: (r) => {
      const a1 = r.int(1, 5);
      const q = r.wahl([2, 3, -2] as const);
      const n = r.int(5, 10);
      const s = (a1 * (q ** n - 1)) / (q - 1);
      return {
        angabe: `Berechne $\\displaystyle\\sum_{k=1}^{${n}} ${a1 === 1 ? "" : `${a1}\\cdot `}${kl(q)}^{k-1}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a1}*((${q})^${n} - 1)/((${q}) - 1)`,
            fehler: [{ wert: `${a1}*((${q})^${n - 1} - 1)/((${q}) - 1)`, meldung: `In der Formel steht $q^n$ mit der **Anzahl** der Summanden, hier $${n}$, nicht mit der Hochzahl des letzten Summanden.` }],
          },
        ],
        hinweis: "Geometrische Summenformel $s_n = a_1\\frac{q^n - 1}{q - 1}$. Zähle zuerst die Summanden.",
        loesung: `Ansatz: Geometrische Reihe mit erstem Glied $a_1 = ${a1}$, Quotient $q = ${q}$ und $n = ${n}$ Summanden.\n---\n$s_{${n}} = ${a1}\\cdot\\frac{${kl(q)}^{${n}} - 1}{${q} - 1} = ${a1}\\cdot\\frac{${q ** n - 1}}{${q - 1}} = ${s}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-summenzeichen",
    kapitel: K,
    titel: "Summenzeichen mit Rechenregeln",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-6, 6);
      const b = r.intOhne0(-9, 9);
      const n = r.int(8, 30);
      const gauss = (n * (n + 1)) / 2;
      const s = a * gauss + b * n;
      return {
        angabe: `Berechne $\\displaystyle\\sum_{k=1}^{${n}} (${a === 1 ? "" : a === -1 ? "-" : a}k ${b < 0 ? "-" : "+"} ${Math.abs(b)})$. Verwende $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a}*${n}*(${n}+1)/2 + (${b})*${n}`,
            fehler: [{ wert: `${a}*${n}*(${n}+1)/2 + (${b})`, meldung: `Die Konstante $${b}$ steht in jedem der $${n}$ Summanden. Sie kommt also $${n}$ Mal vor.` }],
          },
        ],
        hinweis: "Summe aufteilen, Konstante herausheben, und $\\sum_{k=1}^{n} c = n\\cdot c$.",
        loesung: `Ansatz: Summe aufteilen in $${a}\\sum_{k=1}^{${n}} k + \\sum_{k=1}^{${n}} ${kl(b)}$.\n---\n$\\sum_{k=1}^{${n}} k = \\frac{${n}\\cdot ${n + 1}}{2} = ${gauss}$ und $\\sum_{k=1}^{${n}} ${kl(b)} = ${n}\\cdot ${kl(b)} = ${n * b}$, denn die Konstante kommt $${n}$ Mal vor.\n---\nErgebnis: $${a}\\cdot ${gauss} ${n * b < 0 ? "-" : "+"} ${Math.abs(n * b)} = ${s}$.`,
      };
    },
  }),
  drill({
    id: "fr-d-zinseszins",
    kapitel: K,
    titel: "Zinseszins",
    niveau: 1,
    erzeuge: (r) => {
      const k0 = 500 * r.int(2, 40);
      const p = r.wahl([1.5, 2, 2.5, 3, 3.5, 4] as const);
      const n = r.int(3, 20);
      const kn = k0 * (1 + p / 100) ** n;
      return {
        angabe: `${k0} Euro werden ${n} Jahre lang zu $${tz(p)}\\,\\%$ p. a. mit jährlicher Verzinsung angelegt. Die Zinsen bleiben auf dem Konto. Berechne das Endkapital auf ganze Euro.`,
        teile: [
          {
            typ: "zahl",
            einheit: "Euro",
            toleranz: 0.5,
            loesung: `${k0}*(1 + ${p}/100)^${n}`,
            fehler: [{ wert: `${k0}*(1 + ${n}*${p}/100)`, meldung: "Das ist einfache Verzinsung. Weil die Zinsen auf dem Konto bleiben, werden sie mitverzinst: jedes Jahr mal $q$." }],
          },
        ],
        hinweis: "Zinseszinsformel $K_n = K_0\\,q^n$ mit $q = 1 + \\frac{p}{100}$.",
        loesung: `Ansatz: Zinseszins, also $K_n = K_0\\,q^n$ mit $q = ${tz(1 + p / 100)}$.\n---\n$K_{${n}} = ${k0}\\cdot ${tz(1 + p / 100)}^{${n}} \\approx ${euro(kn)}$ Euro, gerundet $${Math.round(kn)}$ Euro.`,
      };
    },
  }),
  drill({
    id: "fr-d-barwert",
    kapitel: K,
    titel: "Barwert einer späteren Zahlung",
    niveau: 1,
    erzeuge: (r) => {
      const kn = 1000 * r.int(5, 40);
      const p = r.wahl([1.5, 2, 2.5, 3, 4] as const);
      const n = r.int(3, 15);
      const q = 1 + p / 100;
      const k0 = kn / q ** n;
      return {
        angabe: `In ${n} Jahren sollen ${kn} Euro auf einem Konto sein. Die Bank zahlt $${tz(p)}\\,\\%$ p. a. Wie viel muss man heute einmalig einzahlen? Gib den Betrag auf ganze Euro an.`,
        teile: [
          {
            typ: "zahl",
            einheit: "Euro",
            toleranz: 0.5,
            loesung: `${kn}/${q}^${n}`,
            fehler: [{ wert: `${kn}*${q}^${n}`, meldung: "Du hast aufgezinst. Der heutige Betrag liegt früher, also wird durch $q^n$ geteilt." }],
          },
        ],
        hinweis: "Barwert: $K_0 = \\frac{K_n}{q^n}$.",
        loesung: `Ansatz: Gesucht ist der Barwert. Aus $K_0\\cdot ${tz(q)}^{${n}} = ${kn}$ folgt $K_0 = \\frac{${kn}}{${tz(q)}^{${n}}}$.\n---\n$K_0 \\approx ${euro(k0)}$ Euro. Plausibel: Der Barwert ist kleiner als der spätere Betrag.`,
      };
    },
  }),
  drill({
    id: "fr-d-laufzeit",
    kapitel: K,
    titel: "Laufzeit mit dem Logarithmus",
    niveau: 2,
    erzeuge: (r) => {
      const [faktor, wort] = r.wahl([[2, "verdoppelt"], [3, "verdreifacht"], [1.5, "um 50 % vermehrt"]] as const);
      const p = r.wahl([1.5, 2, 2.5, 3, 4, 5, 6] as const);
      const q = 1 + p / 100;
      const t = Math.log(faktor) / Math.log(q);
      const jahre = Math.ceil(t - 1e-9);
      return {
        angabe: `Ein Kapital wird zu $${tz(p)}\\,\\%$ p. a. verzinst. Nach wie vielen Jahren hat es sich ${wort}? Gib die theoretische Zeit auf zwei Nachkommastellen an und die Anzahl der vollen Jahre, nach denen das Ziel erstmals erreicht ist.`,
        teile: [
          { typ: "zahl", label: "Zeit in Jahren", toleranz: 0.01, loesung: `ln(${faktor})/ln(${q})` },
          {
            typ: "zahl",
            label: "volle Jahre",
            loesung: String(jahre),
            fehler: [{ wert: String(jahre - 1), meldung: "Du hast abgerundet. Nach dieser Zahl von Jahren ist das Ziel noch nicht erreicht." }],
          },
        ],
        hinweis: `Ansatz $${tz(q)}^n = ${tz(faktor)}$, dann logarithmieren.`,
        loesung: `Ansatz: Das Startkapital kürzt sich weg. Gesucht ist $n$ mit $${tz(q)}^n = ${tz(faktor)}$.\n---\nLogarithmieren: $n = \\frac{\\ln ${tz(faktor)}}{\\ln ${tz(q)}} \\approx ${tz(t, 2)}$.\n---\nDie Zinsen kommen einmal im Jahr. Deshalb ist das Ziel nach $${jahre}$ vollen Jahren erstmals erreicht.`,
      };
    },
  }),
  drill({
    id: "fr-d-rente-endwert",
    kapitel: K,
    titel: "Endwert eines Sparplans",
    niveau: 2,
    erzeuge: (r) => {
      const rate = 100 * r.int(5, 30);
      const p = r.wahl([1, 1.5, 2, 2.5, 3, 3.5, 4] as const);
      const n = r.int(5, 25);
      const q = 1 + p / 100;
      const e = (rate * (q ** n - 1)) / (q - 1);
      return {
        angabe: `Jemand zahlt ${n} Jahre lang am **Ende** jedes Jahres ${rate} Euro auf ein Konto mit $${tz(p)}\\,\\%$ p. a. ein. Wie hoch ist das Guthaben nach der letzten Einzahlung? Gib den Betrag auf ganze Euro an.`,
        teile: [
          {
            typ: "zahl",
            einheit: "Euro",
            toleranz: 0.5,
            loesung: `${rate}*(${q}^${n} - 1)/(${q} - 1)`,
            fehler: [{ wert: `${n * rate}`, meldung: "Das ist nur die Summe der Einzahlungen. Die frühen Einzahlungen haben aber Zinsen gebracht." }],
          },
        ],
        hinweis: "Nachschüssige Rente: $E = R\\cdot\\frac{q^n - 1}{q - 1}$.",
        loesung: `Ansatz: Die Einzahlungen werden unterschiedlich lange verzinst. Ihr Endwert ist eine geometrische Reihe mit $R = ${rate}$, $q = ${tz(q)}$ und $n = ${n}$.\n---\n$E = ${rate}\\cdot\\frac{${tz(q)}^{${n}} - 1}{${tz(q - 1)}} \\approx ${euro(e)}$ Euro.\n---\nEingezahlt wurden $${n * rate}$ Euro, der Rest von etwa $${euro(e - n * rate)}$ Euro sind Zinsen.`,
      };
    },
  }),
  drill({
    id: "fr-d-kredit",
    kapitel: K,
    titel: "Annuität eines Kredits",
    niveau: 3,
    erzeuge: (r) => {
      const k0 = 1000 * r.int(5, 50);
      const p = r.wahl([2, 2.5, 3, 3.5, 4, 4.5, 5, 6] as const);
      const n = r.int(3, 15);
      const q = 1 + p / 100;
      const a = (k0 * q ** n * (q - 1)) / (q ** n - 1);
      return {
        angabe: `Ein Kredit über ${k0} Euro wird mit $${tz(p)}\\,\\%$ p. a. verzinst und in ${n} gleich hohen Jahresraten jeweils am Jahresende getilgt. Berechne die Rate und die gesamten Zinsen, jeweils auf ganze Euro.`,
        teile: [
          {
            typ: "zahl",
            label: "Rate $A$",
            einheit: "Euro",
            toleranz: 0.5,
            loesung: `${k0}*${q}^${n}*(${q} - 1)/(${q}^${n} - 1)`,
            fehler: [{ wert: `${k0}/${n}*${q}`, meldung: "So würden nur auf einen Teil der Schuld Zinsen gezahlt. Ansatz: Barwert aller Raten gleich Kreditsumme." }],
          },
          { typ: "zahl", label: "Zinsen gesamt", einheit: "Euro", toleranz: 8, loesung: `${n}*${k0}*${q}^${n}*(${q} - 1)/(${q}^${n} - 1) - ${k0}` },
        ],
        hinweis: "Endwert der Schuld gleich Endwert der Raten: $K_0 q^n = A\\frac{q^n - 1}{q - 1}$.",
        loesung: `Ansatz: Die Raten müssen die Schuld samt Zinsen genau abbezahlen: $${k0}\\cdot ${tz(q)}^{${n}} = A\\cdot\\frac{${tz(q)}^{${n}} - 1}{${tz(q - 1)}}$.\n---\n$A = \\frac{${k0}\\cdot ${tz(q)}^{${n}}\\cdot ${tz(q - 1)}}{${tz(q)}^{${n}} - 1} \\approx ${euro(a)}$ Euro.\n---\nGezahlt werden $${n}\\cdot A \\approx ${euro(n * a)}$ Euro. Die Zinsen sind also etwa $${euro(n * a - k0)}$ Euro.`,
      };
    },
  }),
  drill({
    id: "fr-d-rekursiv",
    kapitel: K,
    titel: "Rekursive Folge auswerten",
    niveau: 1,
    erzeuge: (r) => {
      let p: number, c: number, a1: number;
      do {
        p = r.wahl([2, 3, -1, -2] as const);
        c = r.int(-5, 5);
        a1 = r.int(-3, 5);
      } while (p * a1 + c === a1); // konstante Folgen vermeiden
      const glieder = [a1];
      for (let i = 1; i < 5; i++) glieder.push(p * glieder[i - 1] + c);
      const term = `${p === -1 ? "-" : p}a_n${c === 0 ? "" : ` ${c < 0 ? "-" : "+"} ${Math.abs(c)}`}`;
      return {
        angabe: `Gegeben ist $a_1 = ${a1}$ und $a_{n+1} = ${term}$. Berechne $a_5$.`,
        teile: [
          {
            typ: "zahl",
            loesung: String(glieder[4]),
            fehler: glieder[3] === glieder[4] ? [] : [{ wert: String(glieder[3]), meldung: "Das ist $a_4$. Von $a_1$ bis $a_5$ wendet man die Vorschrift viermal an." }],
          },
        ],
        hinweis: "Berechne die Glieder der Reihe nach. Jedes Glied entsteht aus dem vorigen.",
        loesung:
          `Ansatz: Eine Rekursion wertet man Schritt für Schritt aus, weil jedes Glied das vorige braucht.\n---\n` +
          glieder
            .slice(1)
            .map((g, i) => `$a_{${i + 2}} = ${p}\\cdot ${kl(glieder[i])}${plus(c)} = ${g}$`)
            .join("\n---\n"),
      };
    },
  }),
  drill({
    id: "fr-d-monotonie",
    kapitel: K,
    titel: "Monotonie mit der Differenz",
    niveau: 2,
    erzeuge: (r) => {
      let a = 0, b = 0, c = 1, d = 1;
      do {
        a = r.intOhne0(-6, 6);
        b = r.int(-9, 9);
        c = r.int(1, 4);
        d = r.int(1, 6);
      } while (a * d - b * c === 0);
      const z = a * d - b * c;
      const zaehler = `${a === 1 ? "" : a === -1 ? "-" : a}n${b === 0 ? "" : ` ${b < 0 ? "-" : "+"} ${Math.abs(b)}`}`;
      const nenner = `${c === 1 ? "" : c}n + ${d}`;
      return {
        angabe: `Gegeben ist $a_n = \\dfrac{${zaehler}}{${nenner}}$. Die Differenz lässt sich schreiben als $a_{n+1} - a_n = \\dfrac{Z}{(${c === 1 ? "" : c}n + ${c + d})(${nenner})}$ mit einer Konstanten $Z$. Bestimme $Z$ und entscheide über die Monotonie.`,
        teile: [
          { typ: "zahl", label: "$Z$", loesung: String(z), fehler: [{ wert: String(-z), meldung: "Das Vorzeichen stimmt nicht. Rechne $a_{n+1} - a_n$, nicht $a_n - a_{n+1}$." }] },
          { typ: "auswahl", label: "Monotonie", optionen: ["streng monoton wachsend", "streng monoton fallend"], richtig: [z > 0 ? 0 : 1] },
        ],
        hinweis: "Auf den gemeinsamen Nenner bringen. Im Zähler fallen alle Terme mit $n$ weg.",
        loesung: `Ansatz: Die Differenz $a_{n+1} - a_n$ zeigt die Monotonie. Zuerst $a_{n+1} = \\frac{${a}(n + 1)${plus(b)}}{${c}(n + 1) + ${d}}$ bilden.\n---\nZähler der Differenz: $(${a}n${plus(a + b)})(${c}n + ${d}) - (${a}n${plus(b)})(${c}n + ${c + d})$. Die Terme mit $n^2$ und $n$ heben sich auf, es bleibt $Z = ${a}\\cdot ${d} - ${kl(b)}\\cdot ${c} = ${z}$.\n---\nDer Nenner ist für $n \\ge 1$ positiv. Also hat die Differenz das Vorzeichen von $Z$, und die Folge ist ${z > 0 ? "streng monoton wachsend" : "streng monoton fallend"}.`,
      };
    },
  }),
  drill({
    id: "fr-d-gleichgewicht",
    kapitel: K,
    titel: "Gleichgewicht eines rekursiven Modells",
    niveau: 2,
    erzeuge: (r) => {
      const abbau = r.wahl([10, 20, 25, 40] as const);
      const dosis = 10 * r.int(2, 12);
      const q = 1 - abbau / 100;
      const gg = dosis / (abbau / 100);
      return {
        angabe: `Ein Medikament wird täglich zu $${abbau}\\,\\%$ abgebaut. Jeden Tag kommen $${dosis}$ mg dazu. Das Modell ist $x_{n+1} = ${tz(q)}\\,x_n + ${dosis}$. Bei welcher Menge in mg stellt sich langfristig ein Gleichgewicht ein?`,
        teile: [
          {
            typ: "zahl",
            einheit: "mg",
            loesung: `${dosis}/(1 - ${q})`,
            fehler: [{ wert: `${dosis}/${q}`, meldung: "Im Gleichgewicht ist $x^* = q\\,x^* + c$. Geteilt wird durch $1 - q$, nicht durch $q$." }],
          },
        ],
        hinweis: "Im Gleichgewicht gilt $x_{n+1} = x_n = x^*$.",
        loesung: `Ansatz: Das Gleichgewicht ändert sich nicht mehr. Wir setzen $x^* = ${tz(q)}\\,x^* + ${dosis}$.\n---\n$${tz(1 - q)}\\,x^* = ${dosis}$, also $x^* = ${tz(gg, 2)}$ mg.\n---\nKontrolle: $${abbau}\\,\\%$ von $${tz(gg, 2)}$ mg sind $${dosis}$ mg. Genau so viel kommt täglich dazu.`,
      };
    },
  }),
];
