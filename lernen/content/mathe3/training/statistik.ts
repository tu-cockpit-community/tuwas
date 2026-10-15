import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "statistik";

const summe = (a: number[]) => a.reduce((s, x) => s + x, 0);
const mittel = (a: number[]) => summe(a) / a.length;
function median(a: number[]): number {
  const b = [...a].sort((x, y) => x - y);
  const n = b.length;
  return n % 2 ? b[(n - 1) / 2] : (b[n / 2 - 1] + b[n / 2]) / 2;
}
/** Quartile nach der Kurs-Konvention: Median der unteren/oberen Hälfte, Median bei ungeradem n ausgeschlossen */
function quartile(a: number[]): [number, number, number] {
  const b = [...a].sort((x, y) => x - y);
  const h = Math.floor(b.length / 2);
  const unten = b.slice(0, h);
  const oben = b.length % 2 ? b.slice(h + 1) : b.slice(h);
  return [median(unten), median(b), median(oben)];
}
function binomKoeff(n: number, k: number): number {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
}
/** P(X <= k) für X ~ B(n; p) */
function binomVert(n: number, p: number, k: number): number {
  let s = 0;
  for (let i = 0; i <= k; i++) s += binomKoeff(n, i) * p ** i * (1 - p) ** (n - i);
  return s;
}
const liste = (a: number[]) => a.map((x) => tz(x)).join(",\\ ");
const arr = (a: number[]) => `[${a.join(", ")}]`;

export const DRILLS: Drill[] = [
  drill({
    id: "st-d-mittel-median",
    kapitel: K,
    titel: "Mittelwert und Median",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 9);
      const daten = Array.from({ length: n }, () => r.int(1, 30));
      const sortiert = [...daten].sort((x, y) => x - y);
      const m = median(daten);
      const unsortiert = n % 2 ? daten[(n - 1) / 2] : (daten[n / 2 - 1] + daten[n / 2]) / 2;
      const mitte =
        n % 2
          ? `$n = ${n}$ ist ungerade. Der Median ist der ${(n + 1) / 2}. Wert der geordneten Liste: $\\tilde x = ${tz(m)}$.`
          : `$n = ${n}$ ist gerade. Der Median ist das Mittel aus dem ${n / 2}. und ${n / 2 + 1}. Wert: $\\tilde x = \\tfrac{${sortiert[n / 2 - 1]} + ${sortiert[n / 2]}}{2} = ${tz(m)}$.`;
      return {
        angabe: `Berechne das arithmetische Mittel (3 Nachkommastellen) und den Median der Daten $${liste(daten)}$.`,
        teile: [
          { typ: "zahl", label: "$\\bar x$", loesung: `mean(${arr(daten)})`, toleranz: 0.005, fehler: [{ wert: `${summe(daten)}/${n - 1}`, meldung: `Geteilt wird durch die Anzahl der Werte, also durch $${n}$.` }] },
          {
            typ: "zahl",
            label: "$\\tilde x$",
            loesung: `median(${arr(daten)})`,
            fehler: unsortiert !== m ? [{ wert: String(unsortiert), meldung: "Das ist der mittlere Wert der **ungeordneten** Liste. Ordne die Daten zuerst der Größe nach." }] : undefined,
          },
        ],
        hinweis: "Für den Median zuerst ordnen. Für das Mittel die Summe durch die Anzahl der Werte teilen.",
        loesung: `Ansatz: Mittel aus der Summe, Median aus der geordneten Liste.\n---\nSumme $= ${summe(daten)}$, also $\\bar x = \\tfrac{${summe(daten)}}{${n}} \\approx ${tz(mittel(daten), 3)}$.\n---\nGeordnet: $${liste(sortiert)}$. ${mitte}`,
      };
    },
  }),
  drill({
    id: "st-d-quartile",
    kapitel: K,
    titel: "Quartile und Interquartilsabstand",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(7, 12);
      const daten = Array.from({ length: n }, () => r.int(10, 60));
      const sortiert = [...daten].sort((x, y) => x - y);
      const [q1, m, q3] = quartile(daten);
      const h = Math.floor(n / 2);
      const unten = sortiert.slice(0, h);
      const oben = n % 2 ? sortiert.slice(h + 1) : sortiert.slice(h);
      return {
        angabe: `Bestimme $q_1$, $q_3$ und den Interquartilsabstand der Daten $${liste(daten)}$. Verwende die Kursregel: Quartile sind die Mediane der unteren und oberen Hälfte, bei ungeradem $n$ ohne den Median.`,
        teile: [
          { typ: "zahl", label: "$q_1$", loesung: String(q1) },
          { typ: "zahl", label: "$q_3$", loesung: String(q3) },
          {
            typ: "zahl",
            label: "IQR",
            loesung: String(q3 - q1),
            fehler: sortiert[n - 1] - sortiert[0] !== q3 - q1 ? [{ wert: String(sortiert[n - 1] - sortiert[0]), meldung: "Das ist die Spannweite. Der IQR ist $q_3 - q_1$." }] : undefined,
          },
        ],
        hinweis: "Ordne die Daten, bestimme den Median und bilde die beiden Hälften.",
        loesung: `Ansatz: ordnen und halbieren. Geordnet: $${liste(sortiert)}$, Median $${tz(m)}$${n % 2 ? ", er gehört zu keiner Hälfte" : ""}.\n---\nUntere Hälfte $${liste(unten)}$: $q_1 = ${tz(q1)}$. Obere Hälfte $${liste(oben)}$: $q_3 = ${tz(q3)}$.\n---\n$\\text{IQR} = ${tz(q3)} - ${tz(q1)} = ${tz(q3 - q1)}$. Zwischen diesen Werten liegt etwa die mittlere Hälfte der Daten.`,
      };
    },
  }),
  drill({
    id: "st-d-varianz",
    kapitel: K,
    titel: "Empirische Varianz und Standardabweichung",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(5, 40);
      const abw = r.wahl([
        [-3, -1, 0, 1, 3],
        [-4, -2, 0, 2, 4],
        [-2, -2, 0, 1, 3],
        [-5, -1, 1, 2, 3],
        [-6, 0, 1, 2, 3],
        [-3, -3, 1, 2, 3],
      ]);
      const daten = r.mische(abw.map((a) => m + a));
      const qs = summe(abw.map((a) => a * a));
      return {
        angabe: `Berechne für die Daten $${liste(daten)}$ die empirische Varianz $s^2$ (Division durch $n$) und die Standardabweichung $s$ (2 Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "$s^2$", loesung: `variance(${arr(daten)}, "uncorrected")`, fehler: [{ wert: String(qs), meldung: "Das ist die Quadratsumme. Teile sie noch durch $n = 5$." }] },
          { typ: "zahl", label: "$s$", loesung: `std(${arr(daten)}, "uncorrected")`, toleranz: 0.005, fehler: [{ wert: String(qs / 5), meldung: "Das ist die Varianz. Die Standardabweichung ist ihre Wurzel." }] },
        ],
        hinweis: "Mittelwert, Abweichungen, Quadrate, Summe, durch $n$ teilen, Wurzel ziehen.",
        loesung: `Ansatz: $s^2 = \\tfrac1n \\sum (x_i - \\bar x)^2$. Mittelwert: $\\bar x = \\tfrac{${summe(daten)}}{5} = ${m}$.\n---\nAbweichungen $x_i - \\bar x$: $${liste(daten.map((x) => x - m))}$, Kontrolle: Summe $0$. Quadrate: $${liste(daten.map((x) => (x - m) ** 2))}$, Summe $${qs}$.\n---\n$s^2 = \\tfrac{${qs}}{5} = ${tz(qs / 5)}$ und $s = \\sqrt{${tz(qs / 5)}} \\approx ${tz(Math.sqrt(qs / 5), 2)}$.`,
      };
    },
  }),
  drill({
    id: "st-d-stichprobenvarianz",
    kapitel: K,
    titel: "Stichprobenvarianz (Division durch n − 1)",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 6);
      const daten = Array.from({ length: n }, () => r.int(2, 20));
      if (new Set(daten).size === 1) daten[0] += 2;
      const xq = mittel(daten);
      const qs = summe(daten.map((x) => (x - xq) ** 2));
      return {
        angabe: `Die Werte $${liste(daten)}$ sind eine Stichprobe. Berechne die Stichprobenvarianz $s_{n-1}^2$ (Division durch $n - 1$, 3 Nachkommastellen).`,
        teile: [{ typ: "zahl", loesung: `variance(${arr(daten)})`, toleranz: 0.001, fehler: [{ wert: `variance(${arr(daten)}, "uncorrected")`, meldung: `Du hast durch $n = ${n}$ geteilt. Für die Stichprobenvarianz teilst du durch $n - 1 = ${n - 1}$.` }] }],
        hinweis: "Zuerst den Mittelwert, dann die Quadratsumme der Abweichungen, dann durch $n - 1$ teilen.",
        loesung: `Ansatz: $s_{n-1}^2 = \\tfrac{1}{n-1}\\sum (x_i - \\bar x)^2$. Mittelwert: $\\bar x = \\tfrac{${summe(daten)}}{${n}} \\approx ${tz(xq, 3)}$.\n---\nQuadratsumme der Abweichungen: $\\sum (x_i - \\bar x)^2 \\approx ${tz(qs, 3)}$.\n---\n$s_{n-1}^2 = \\tfrac{${tz(qs, 3)}}{${n - 1}} \\approx ${tz(qs / (n - 1), 3)}$. Sie ist etwas größer als die empirische Varianz, weil sie die Unterschätzung ausgleicht.`,
      };
    },
  }),
  drill({
    id: "st-d-haeufigkeitstabelle",
    kapitel: K,
    titel: "Mittelwert aus einer Häufigkeitstabelle",
    niveau: 1,
    erzeuge: (r) => {
      const werte = [0, 1, 2, 3, 4];
      const anz = werte.map(() => r.int(1, 9));
      const n = summe(anz);
      const s = summe(werte.map((w, i) => w * anz[i]));
      return {
        angabe: `Anzahl der Fehlversuche beim Login:\n\n|Fehlversuche|0|1|2|3|4|\n|---|---|---|---|---|---|\n|Anzahl|${anz.join("|")}|\n\nBerechne den Mittelwert (3 Nachkommastellen).`,
        teile: [{ typ: "zahl", loesung: `(${werte.map((w, i) => `${w}*${anz[i]}`).join(" + ")})/${n}`, toleranz: 0.001, fehler: s / n !== 2 ? [{ wert: "2", meldung: "Das ist das Mittel der fünf Werte $0$ bis $4$ ohne ihre Anzahlen. Jeder Wert zählt so oft, wie er vorkommt." }] : undefined }],
        hinweis: "Jeden Wert mit seiner Anzahl multiplizieren, addieren und durch die Gesamtzahl teilen.",
        loesung: `Ansatz: gewichtetes Mittel mit den Anzahlen als Gewichten. $n = ${anz.join(" + ")} = ${n}$.\n---\n$\\sum a_j H_j = ${werte.map((w, i) => `${w} \\cdot ${anz[i]}`).join(" + ")} = ${s}$.\n---\n$\\bar x = \\tfrac{${s}}{${n}} \\approx ${tz(s / n, 3)}$ Fehlversuche pro Anmeldung.`,
      };
    },
  }),
  drill({
    id: "st-d-mindestens",
    kapitel: K,
    titel: "„Höchstens“ und „mindestens“ aus einer Tabelle",
    niveau: 1,
    erzeuge: (r) => {
      const anz = [0, 1, 2, 3, 4].map(() => r.int(2, 12));
      const n = summe(anz);
      const a = r.int(1, 3);
      const hoechstens = summe(anz.slice(0, a + 1));
      const mindestens = summe(anz.slice(a));
      return {
        angabe: `Bei ${n} Bestellungen wurde notiert, wie viele Artikel zurückgeschickt wurden:\n\n|zurückgeschickte Artikel|0|1|2|3|4|\n|---|---|---|---|---|---|\n|Bestellungen|${anz.join("|")}|\n\nBerechne den Anteil der Bestellungen mit **höchstens** ${a} und mit **mindestens** ${a} zurückgeschickten Artikeln (3 Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: `höchstens ${a}`, loesung: `${hoechstens}/${n}`, toleranz: 0.0005, fehler: [{ wert: `${anz[a]}/${n}`, meldung: `Das ist nur „genau ${a}“. „Höchstens ${a}“ umfasst alle Werte von $0$ bis $${a}$.` }] },
          { typ: "zahl", label: `mindestens ${a}`, loesung: `${mindestens}/${n}`, toleranz: 0.0005, fehler: [{ wert: `1 - ${hoechstens}/${n}`, meldung: `Das ist „mehr als ${a}“. „Mindestens ${a}“ schließt die ${a} ein, das Gegenteil ist „höchstens ${a - 1}“.` }] },
        ],
        hinweis: "Übersetze die Formulierung zuerst in eine Menge von Werten.",
        loesung: `Ansatz: Formulierung in Werte übersetzen und deren Anzahlen addieren.\n---\nHöchstens ${a}: Werte $0$ bis $${a}$, also $\\tfrac{${hoechstens}}{${n}} \\approx ${tz(hoechstens / n, 3)}$.\n---\nMindestens ${a}: Werte $${a}$ bis $4$, also $\\tfrac{${mindestens}}{${n}} \\approx ${tz(mindestens / n, 3)}$. Beide überlappen beim Wert ${a}, deshalb ergeben sie zusammen mehr als $1$.`,
      };
    },
  }),
  drill({
    id: "st-d-histogramm",
    kapitel: K,
    titel: "Höhe im Histogramm",
    niveau: 1,
    erzeuge: (r) => {
      const unten = r.wahl([0, 5, 10, 20]);
      const breite = r.wahl([2, 4, 5, 10, 20]);
      const anzahl = breite * r.int(1, 9);
      return {
        angabe: `Die Klasse $[${unten};\\,${unten + breite})$ enthält $${anzahl}$ Werte. Wie hoch ist ihr Rechteck in einem Histogramm (Werte pro Einheit)?`,
        teile: [{ typ: "zahl", loesung: `${anzahl}/${breite}`, fehler: [{ wert: String(anzahl), meldung: "Das ist die Anzahl. Im Histogramm ist die Höhe Anzahl durch Klassenbreite." }] }],
        hinweis: "Höhe gleich Anzahl durch Klassenbreite. Die Breite ist obere minus untere Grenze.",
        loesung: `Ansatz: Im Histogramm ist die Fläche die Anzahl, also Höhe gleich Anzahl durch Breite.\n---\nBreite $${unten + breite} - ${unten} = ${breite}$, Höhe $\\tfrac{${anzahl}}{${breite}} = ${tz(anzahl / breite)}$.\n---\nProbe: Fläche $${breite} \\cdot ${tz(anzahl / breite)} = ${anzahl}$.`,
      };
    },
  }),
  drill({
    id: "st-d-gewichtet",
    kapitel: K,
    titel: "Gewichtetes Mittel (Notenschnitt nach ECTS)",
    niveau: 2,
    erzeuge: (r) => {
      const ects = [r.wahl([3, 4, 5, 6]), r.wahl([3, 6, 8, 9]), r.wahl([2, 3, 4, 5, 6])];
      const noten = ects.map(() => r.int(1, 4));
      const zs = summe(ects.map((e, i) => e * noten[i]));
      const ns = summe(ects);
      const ungewichtet = summe(noten) / 3;
      return {
        angabe: `Drei Lehrveranstaltungen mit ${ects.join(", ")} ECTS wurden mit den Noten ${noten.join(", ")} abgeschlossen. Berechne den nach ECTS gewichteten Notendurchschnitt (2 Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${ects.map((e, i) => `${e}*${noten[i]}`).join(" + ")})/${ns}`,
            toleranz: 0.005,
            fehler: Math.abs(ungewichtet - zs / ns) > 0.01 ? [{ wert: `(${noten.join(" + ")})/3`, meldung: "Das ist der ungewichtete Schnitt. Jede Note muss mit ihren ECTS multipliziert werden." }] : undefined,
          },
        ],
        hinweis: "Die Gewichte sind die ECTS-Punkte. Im Nenner steht ihre Summe.",
        loesung: `Ansatz: gewichtetes Mittel $\\bar x_w = \\tfrac{\\sum w_i x_i}{\\sum w_i}$.\n---\n$$\\bar x_w = \\frac{${ects.map((e, i) => `${e} \\cdot ${noten[i]}`).join(" + ")}}{${ects.join(" + ")}} = \\frac{${zs}}{${ns}} \\approx ${tz(zs / ns, 2)}$$\n---\nKontrolle: Das Ergebnis liegt zwischen der besten und der schlechtesten Note.`,
      };
    },
  }),
  drill({
    id: "st-d-geometrisch",
    kapitel: K,
    titel: "Durchschnittliche Wachstumsrate",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 4);
      const raten = Array.from({ length: n }, () => r.wahl([-8, -5, -3, 2, 4, 5, 6, 8, 10, 12, 15]));
      const faktoren = raten.map((p) => 1 + p / 100);
      const produkt = faktoren.reduce((a, b) => a * b, 1);
      const q = produkt ** (1 / n);
      const fs = faktoren.map((f) => tz(f));
      const arith = summe(raten) / n;
      return {
        angabe: `Ein Aktienkurs ändert sich in ${n} aufeinanderfolgenden Jahren um ${raten.map((p) => `$${p > 0 ? "+" : ""}${p}\\,\\%$`).join(", ")}. Wie groß ist die durchschnittliche jährliche Wachstumsrate in Prozent? (2 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: `(nthRoot(${faktoren.join("*")}, ${n}) - 1)*100`,
            toleranz: 0.01,
            fehler: Math.abs(arith - (q - 1) * 100) > 0.02 ? [{ wert: `(${raten.join(" + ")})/${n}`, meldung: "Das ist das arithmetische Mittel der Prozentsätze. Wachstum ist multiplikativ, nimm das geometrische Mittel der Faktoren." }] : undefined,
          },
        ],
        hinweis: "Prozentsätze in Faktoren umrechnen, multiplizieren, $n$-te Wurzel ziehen.",
        loesung: `Ansatz: geometrisches Mittel der Wachstumsfaktoren. Faktoren: $${fs.join(",\\ ")}$, Produkt $\\approx ${tz(produkt, 5)}$.\n---\n$q = \\sqrt[${n}]{${tz(produkt, 5)}} \\approx ${tz(q, 5)}$.\n---\nDurchschnittliche Rate $\\approx ${tz((q - 1) * 100, 2)}\\,\\%$ pro Jahr. Das arithmetische Mittel der Prozentsätze, $${tz(arith, 2)}\\,\\%$, ist nie kleiner als dieser Wert und bei schwankenden Raten zu groß.`,
      };
    },
  }),
  drill({
    id: "st-d-regression",
    kapitel: K,
    titel: "Regressionsgerade berechnen",
    niveau: 2,
    erzeuge: (r) => {
      const x = [1, 2, 3, 4, 5];
      const k0 = r.intOhne0(-4, 5);
      const d0 = r.int(10, 30);
      const stoerung = r.wahl([
        [0, 1, -1, 0, 0],
        [1, -1, 0, 1, -1],
        [-1, 0, 2, -1, 0],
        [0, -2, 1, 1, 0],
        [2, -1, -1, 0, 0],
      ]);
      const y = x.map((xi, i) => k0 * xi + d0 + stoerung[i]);
      const xq = 3;
      const yq = mittel(y);
      const sp = summe(x.map((xi, i) => (xi - xq) * (y[i] - yq)));
      const k = sp / 10;
      const d = yq - k * xq;
      const spAus = `(${x.map((xi, i) => `(${xi} - 3)*(${y[i]} - ${yq})`).join(" + ")})`;
      return {
        angabe: `Bestimme die Regressionsgerade $y = kx + d$ für die Punkte ${x.map((xi, i) => `$(${xi} \\mid ${y[i]})$`).join(", ")}.`,
        teile: [
          { typ: "zahl", label: "$k$", loesung: `${spAus}/10`, fehler: Math.abs(sp) > 0.01 ? [{ wert: `${spAus}/5`, meldung: "Im Nenner steht $\\sum (x_i - \\bar x)^2 = 10$, nicht $n = 5$." }] : undefined },
          { typ: "zahl", label: "$d$", loesung: `${yq} - 3*${spAus}/10`, fehler: Math.abs(k) > 0.01 ? [{ wert: `${yq} + 3*${spAus}/10`, meldung: "Vorzeichenfehler: $d = \\bar y - k\\bar x$." }] : undefined },
        ],
        hinweis: "$\\bar x = 3$ und $\\sum (x_i - \\bar x)^2 = 10$.",
        loesung: `Ansatz: $k = \\tfrac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sum (x_i - \\bar x)^2}$ und $d = \\bar y - k\\bar x$. Es ist $\\bar x = 3$ und $\\bar y = \\tfrac{${summe(y)}}{5} = ${tz(yq)}$.\n---\n$\\sum (x_i - \\bar x)(y_i - \\bar y) = ${tz(sp)}$ und $\\sum (x_i - \\bar x)^2 = 10$.\n---\n$k = \\tfrac{${tz(sp)}}{10} = ${tz(k)}$ und $d = ${tz(yq)} - ${tz(k)} \\cdot 3 = ${tz(d)}$. Probe: Der Schwerpunkt $(3 \\mid ${tz(yq)})$ liegt auf der Geraden.`,
      };
    },
  }),
  drill({
    id: "st-d-korrelation",
    kapitel: K,
    titel: "Korrelationskoeffizient",
    niveau: 2,
    erzeuge: (r) => {
      const x = [1, 2, 3, 4, 5];
      const k0 = r.intOhne0(-3, 3);
      const stoerung = r.wahl([
        [0, 2, -1, 0, -1],
        [1, -1, 1, -2, 1],
        [-2, 1, 0, 2, -1],
        [0, -1, 2, -1, 0],
      ]);
      const y = x.map((xi, i) => 10 + k0 * xi + stoerung[i]);
      const yq = mittel(y);
      const sp = summe(x.map((xi, i) => (xi - 3) * (y[i] - yq)));
      const sy = summe(y.map((yi) => (yi - yq) ** 2));
      const rr = sp / Math.sqrt(10 * sy);
      return {
        angabe: `Berechne den Korrelationskoeffizienten $r$ der Punkte ${x.map((xi, i) => `$(${xi} \\mid ${y[i]})$`).join(", ")} (3 Nachkommastellen).`,
        teile: [{ typ: "zahl", loesung: `(${sp})/sqrt(10*${sy})`, toleranz: 0.001, fehler: Math.abs(Math.abs(rr) - Math.abs(sp / 10)) > 0.002 ? [{ wert: `(${sp})/10`, meldung: "Das ist die Steigung $k$. Für $r$ steht im Nenner die Wurzel aus dem Produkt beider Quadratsummen." }] : undefined }],
        hinweis: "$r = \\dfrac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sqrt{\\sum (x_i - \\bar x)^2 \\sum (y_i - \\bar y)^2}}$",
        loesung: `Ansatz: Formel für $r$ mit drei Summen. $\\bar x = 3$ und $\\bar y = ${tz(yq)}$.\n---\n$\\sum (x_i - \\bar x)(y_i - \\bar y) = ${tz(sp)}$, $\\sum (x_i - \\bar x)^2 = 10$ und $\\sum (y_i - \\bar y)^2 = ${tz(sy)}$.\n---\n$r = \\dfrac{${tz(sp)}}{\\sqrt{10 \\cdot ${tz(sy)}}} \\approx ${tz(rr, 3)}$. Kontrolle: $-1 \\le r \\le 1$, und das Vorzeichen passt zur Steigung.`,
      };
    },
  }),
  drill({
    id: "st-d-ausreisser",
    kapitel: K,
    titel: "Ausreißer mit der 1,5-IQR-Regel",
    niveau: 2,
    erzeuge: (r) => {
      const basis = Array.from({ length: 9 }, () => r.int(20, 35));
      const extrem = r.int(40, 70);
      const daten = r.mische([...basis, extrem]);
      const [q1, , q3] = quartile(daten);
      const grenze = q3 + 1.5 * (q3 - q1);
      return {
        angabe: `Bestimme für die Daten $${liste(daten)}$ die obere Ausreißergrenze $q_3 + 1{,}5\\,\\text{IQR}$. Ist $${extrem}$ ein Ausreißer?`,
        teile: [
          { typ: "zahl", label: "obere Grenze", loesung: `${q3} + 1.5*(${q3} - ${q1})`, fehler: q3 !== q1 ? [{ wert: `${q3} + (${q3} - ${q1})`, meldung: "Der Faktor $1{,}5$ fehlt." }] : undefined },
          { typ: "auswahl", label: `Ist ${extrem} ein Ausreißer?`, optionen: ["ja", "nein"], richtig: [extrem > grenze ? 0 : 1] },
        ],
        hinweis: "Bei $n = 10$ besteht jede Hälfte aus fünf Werten. $q_3$ ist der Median der oberen Hälfte.",
        loesung: `Ansatz: Quartile aus den Hälften, dann Tukey-Regel. Geordnet: $${liste([...daten].sort((a, b) => a - b))}$.\n---\n$q_1 = ${tz(q1)}$, $q_3 = ${tz(q3)}$, $\\text{IQR} = ${tz(q3 - q1)}$.\n---\nObere Grenze: $${tz(q3)} + 1{,}5 \\cdot ${tz(q3 - q1)} = ${tz(grenze)}$. Weil $${extrem} ${extrem > grenze ? ">" : "\\le"} ${tz(grenze)}$ ist, ist $${extrem}$ ${extrem > grenze ? "ein" : "kein"} Ausreißer.`,
      };
    },
  }),
  drill({
    id: "st-d-zwert",
    kapitel: K,
    titel: "z-Wert und Variationskoeffizient",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.wahl([40, 50, 60, 80, 100, 120]);
      const s = r.wahl([4, 5, 8, 10, 12, 20]);
      const z = r.wahl([-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5]);
      const x = m + z * s;
      return {
        angabe: `Eine Messreihe hat $\\bar x = ${m}$ und $s = ${s}$. Berechne den $z$-Wert des Messwerts $${tz(x)}$ und den Variationskoeffizienten $v$ (4 Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "$z$", loesung: `(${x} - ${m})/${s}`, fehler: [{ wert: `(${m} - ${x})/${s}`, meldung: "Rechne Messwert minus Mittelwert. Liegt der Wert über dem Mittel, ist $z$ positiv." }] },
          { typ: "zahl", label: "$v$", loesung: `${s}/${m}`, toleranz: 0.0005, fehler: [{ wert: `${m}/${s}`, meldung: "Der Variationskoeffizient ist $s$ **durch** $\\bar x$." }] },
        ],
        hinweis: "$z = \\tfrac{x - \\bar x}{s}$ und $v = \\tfrac{s}{\\bar x}$.",
        loesung: `Ansatz: Abstand zum Mittel in Standardabweichungen, Streuung relativ zum Mittel.\n---\n$z = \\dfrac{${tz(x)} - ${m}}{${s}} = ${tz(z)}$: Der Wert liegt $${tz(Math.abs(z))}$ Standardabweichungen ${z > 0 ? "über" : "unter"} dem Mittel.\n---\n$v = \\dfrac{s}{\\bar x} = \\dfrac{${s}}{${m}} \\approx ${tz(s / m, 4)}$, also etwa $${tz((s / m) * 100, 1)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "st-d-konfidenz",
    kapitel: K,
    titel: "Konfidenzintervall für einen Anteil",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.wahl([400, 500, 800, 1000, 1200, 1500, 2000]);
      const h = r.wahl([0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.55, 0.6]);
      const anz = Math.round(n * h);
      const se = Math.sqrt((h * (1 - h)) / n);
      const e = 1.96 * se;
      return {
        angabe: `In einer Zufallsstichprobe von $${n}$ Personen stimmen $${anz}$ einer Aussage zu. Bestimme ein $95\\,\\%$-Konfidenzintervall für den Anteil $p$ in der Grundgesamtheit (Grenzen auf 4 Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "untere Grenze", loesung: `${anz}/${n} - 1.96*sqrt(${anz}/${n}*(1 - ${anz}/${n})/${n})`, toleranz: 0.0005, fehler: [{ wert: `${anz}/${n} - 1.96*${anz}/${n}*(1 - ${anz}/${n})/${n}`, meldung: "Die Wurzel fehlt. Ohne sie wird das Intervall viel zu schmal." }] },
          { typ: "zahl", label: "obere Grenze", loesung: `${anz}/${n} + 1.96*sqrt(${anz}/${n}*(1 - ${anz}/${n})/${n})`, toleranz: 0.0005, fehler: [{ wert: `${anz}/${n} + sqrt(${anz}/${n}*(1 - ${anz}/${n})/${n})`, meldung: "Der Faktor $1{,}96$ fehlt. Ohne ihn hat das Intervall nur etwa $68\\,\\%$ Sicherheit." }] },
        ],
        hinweis: "$h \\pm 1{,}96\\sqrt{h(1-h)/n}$",
        loesung: `Ansatz: Konfidenzintervall für einen Anteil. $h = \\tfrac{${anz}}{${n}} = ${tz(h)}$, Faustregel $nh(1-h) = ${tz(n * h * (1 - h), 1)} > 9$.\n---\n$\\sqrt{\\tfrac{${tz(h)} \\cdot ${tz(1 - h)}}{${n}}} \\approx ${tz(se, 5)}$, halbe Breite $1{,}96 \\cdot ${tz(se, 5)} \\approx ${tz(e, 4)}$.\n---\nIntervall $\\approx [${tz(h - e, 4)};\\ ${tz(h + e, 4)}]$. Das Verfahren erfasst in etwa $95\\,\\%$ aller Stichproben den wahren Anteil.`,
      };
    },
  }),
  drill({
    id: "st-d-stichprobenumfang",
    kapitel: K,
    titel: "Mindestumfang einer Umfrage",
    niveau: 2,
    erzeuge: (r) => {
      const eps = r.wahl([0.01, 0.02, 0.025, 0.03, 0.04, 0.05]);
      const h = r.wahl([0.1, 0.2, 0.3, 0.5]);
      const roh = (1.96 ** 2 * h * (1 - h)) / eps ** 2;
      return {
        angabe: `Ein Anteil, der vermutlich bei etwa $${tz(h * 100)}\\,\\%$ liegt, soll mit $95\\,\\%$ Sicherheit auf $\\pm ${tz(eps * 100)}$ Prozentpunkte genau geschätzt werden. Wie viele Personen muss man mindestens befragen?`,
        // mathjs rundet bei floor/ceil fast ganze Zahlen (z. B. 2400,9999...) auf die ganze Zahl: dann kein Abrund-Fehlerbild
        teile: [{ typ: "zahl", loesung: `ceil(1.96^2*${h}*${1 - h}/${eps}^2)`, toleranz: 0.1, fehler: Math.abs(roh - Math.round(roh)) < 1e-6 ? undefined : [{ wert: `floor(1.96^2*${h}*${1 - h}/${eps}^2)`, meldung: "Ein Mindestumfang wird immer aufgerundet." }] }],
        hinweis: "$n \\ge \\dfrac{1{,}96^2 \\cdot h(1-h)}{\\varepsilon^2}$, dann aufrunden.",
        loesung: `Ansatz: halbe Breite $1{,}96\\sqrt{h(1-h)/n} \\le \\varepsilon$ nach $n$ auflösen.\n---\n$n \\ge \\dfrac{1{,}96^2 \\cdot ${tz(h)} \\cdot ${tz(1 - h)}}{${tz(eps)}^2} \\approx ${tz(roh, 2)}$.\n---\nAufrunden: mindestens $${Math.ceil(roh - 1e-9)}$ Personen.`,
      };
    },
  }),
  drill({
    id: "st-d-hypothesentest",
    kapitel: K,
    titel: "Ablehnungsbereich eines rechtsseitigen Tests",
    niveau: 3,
    erzeuge: (r) => {
      const [n, p] = r.wahl([
        [20, 0.25],
        [20, 0.2],
        [30, 0.1],
        [40, 0.25],
        [50, 0.05],
        [50, 0.1],
        [60, 1 / 6],
      ] as const);
      let k = 0;
      while (1 - binomVert(n, p, k - 1) > 0.05) k++;
      const pK = 1 - binomVert(n, p, k - 1);
      const pVor = 1 - binomVert(n, p, k - 2);
      const pTex = p === 1 / 6 ? "\\tfrac16" : tz(p);
      const pAus = p === 1 / 6 ? "1/6" : String(p);
      return {
        angabe: `Getestet wird $H_0\\colon p = ${pTex}$ gegen $H_1\\colon p > ${pTex}$ mit $n = ${n}$ Versuchen und $\\alpha = 5\\,\\%$. Ab welcher Trefferzahl $k$ wird $H_0$ verworfen?`,
        teile: [{ typ: "zahl", loesung: String(k), fehler: [{ wert: String(k - 1), meldung: `$P(X \\ge ${k - 1}) \\approx ${tz(pVor, 3)}$ ist größer als $0{,}05$. Dieser Wert gehört noch nicht zum Ablehnungsbereich.` }] }],
        hinweis: `Suche das kleinste $k$ mit $P(X \\ge k) = 1 - P(X \\le k - 1) \\le 0{,}05$ für $X \\sim B(${n};\\, ${pTex})$.`,
        loesung: `Ansatz: Rechtsseitiger Test, unter $H_0$ gilt $X \\sim B(${n};\\, ${pTex})$ mit Erwartungswert $${tz(n * p, 2)}$.\n---\n$P(X \\ge ${k - 1}) = 1 - \\text{binomcdf}(${n}, ${pAus}, ${k - 2}) \\approx ${tz(pVor, 3)} > 0{,}05$.\n---\n$P(X \\ge ${k}) \\approx ${tz(pK, 3)} \\le 0{,}05$. Der Ablehnungsbereich ist $${k}$ bis $${n}$.`,
      };
    },
  }),
];
