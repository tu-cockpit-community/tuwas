import { drill, koef, tz, type Drill, type Rng } from "@/lib/lernen/training";

type V = number[];

/** Spaltenvektor als LaTeX */
const vt = (v: V) => `\\begin{pmatrix} ${v.map((x) => tz(x)).join(" \\\\ ")} \\end{pmatrix}`;
/** Punkt mit Koordinaten (1 | 2 | 3) */
const pt = (name: string, v: V) => `${name}(${v.map((x) => tz(x)).join(" \\mid ")})`;
/** Komponenten als mathjs-Ausdruecke */
const ausdr = (v: V) => v.map((x) => String(x));

const plus = (a: V, b: V) => a.map((x, i) => x + b[i]);
const minus = (a: V, b: V) => a.map((x, i) => x - b[i]);
const mal = (k: number, a: V) => a.map((x) => k * x);
const dot = (a: V, b: V) => a.reduce((s, x, i) => s + x * b[i], 0);
const kreuz = (a: V, b: V): V => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const istNull = (v: V) => v.every((x) => x === 0);
const gleich = (a: V, b: V) => a.every((x, i) => x === b[i]);

function vek(r: Rng, n: number, max = 6, ohne0 = false): V {
  return Array.from({ length: n }, () => (ohne0 ? r.intOhne0(-max, max) : r.int(-max, max)));
}
function vekNichtNull(r: Rng, n: number, max = 6): V {
  let v = vek(r, n, max);
  while (istNull(v)) v = vek(r, n, max);
  return v;
}
/** Vektor mit ganzzahliger Laenge: Quadrupel (a, b, c | Laenge), gemischt und mit Vorzeichen */
const QUADRUPEL: [number, number, number, number][] = [
  [1, 2, 2, 3],
  [2, 3, 6, 7],
  [1, 4, 8, 9],
  [4, 4, 7, 9],
  [2, 6, 9, 11],
  [6, 6, 7, 11],
  [2, 10, 11, 15],
];
function ganzeLaenge(r: Rng): { v: V; l: number } {
  const [a, b, c, l] = r.wahl(QUADRUPEL);
  const v = r.mische([a, b, c]).map((x) => x * r.vorzeichen());
  return { v, l };
}
/** Klammert negative Zahlen in Produkten: 3 -> "3", -2 -> "(-2)" */
const kl = (x: number) => (x < 0 ? `(${tz(x)})` : tz(x));

export const DRILLS: Drill[] = [
  drill({
    id: "ve-d-verbindung",
    kapitel: "vektoren",
    titel: "Verbindungsvektor",
    niveau: 1,
    erzeuge: (r) => {
      const A = vek(r, 3);
      let B = vek(r, 3);
      while (istNull(minus(B, A))) B = vek(r, 3);
      const ab = minus(B, A);
      return {
        angabe: `Berechne $\\overrightarrow{AB}$ für $${pt("A", A)}$ und $${pt("B", B)}$.`,
        teile: [
          {
            typ: "vektor",
            loesung: ausdr(ab),
            fehler: [{ wert: ausdr(mal(-1, ab)), meldung: "Du hast Schaft minus Spitze gerechnet, also $A - B$. Für den Pfeil von $A$ nach $B$ gilt Spitze minus Schaft: $B - A$." }],
          },
        ],
        hinweis: "Spitze minus Schaft: Koordinaten von $B$ minus Koordinaten von $A$.",
        loesung: `**Ansatz:** Ein Verbindungsvektor ist „Spitze minus Schaft“. Die Spitze ist $B$, der Schaft ist $A$.\n---\n$\\overrightarrow{AB} = B - A = \\begin{pmatrix} ${B.map((b, i) => `${tz(b)} - ${kl(A[i])}`).join(" \\\\ ")} \\end{pmatrix} = ${vt(ab)}$\n---\n**Probe:** $A + \\overrightarrow{AB}$ ergibt wieder $B$.`,
      };
    },
  }),
  drill({
    id: "ve-d-linearkombination",
    kapitel: "vektoren",
    titel: "Linearkombination berechnen",
    niveau: 1,
    erzeuge: (r) => {
      const a = vek(r, 3, 5);
      const b = vekNichtNull(r, 3, 5);
      const l = r.intOhne0(-3, 4);
      const m = r.intOhne0(-3, 3);
      const la = mal(l, a);
      const mb = mal(m, b);
      const erg = plus(la, mb);
      const falsch = minus(la, mb);
      const term = `${l === 1 ? "" : l === -1 ? "-" : l}\\vec a ${m < 0 ? "-" : "+"} ${Math.abs(m) === 1 ? "" : Math.abs(m)}\\vec b`;
      return {
        angabe: `Gegeben sind $\\vec a = ${vt(a)}$ und $\\vec b = ${vt(b)}$. Berechne $${term}$.`,
        teile: [
          {
            typ: "vektor",
            loesung: ausdr(erg),
            fehler: gleich(falsch, erg) ? undefined : [{ wert: ausdr(falsch), meldung: "Beim zweiten Summanden stimmt das Vorzeichen nicht. Achte darauf, ob vor dem Vielfachen von $\\vec b$ ein Plus oder ein Minus steht." }],
          },
        ],
        hinweis: "Bilde zuerst beide Vielfachen und addiere dann komponentenweise.",
        loesung: `**Ansatz:** Zuerst die Vielfachen bilden, weil jede Zahl auf alle Komponenten ihres Vektors wirkt.\n---\n$${l}\\vec a = ${vt(la)}$ und $${m}\\vec b = ${vt(mb)}$.\n---\nKomponentenweise addieren: $${term} = ${vt(erg)}$`,
      };
    },
  }),
  drill({
    id: "ve-d-betrag",
    kapitel: "vektoren",
    titel: "Betrag eines Vektors",
    niveau: 1,
    erzeuge: (r) => {
      const { v, l } = ganzeLaenge(r);
      return {
        angabe: `Berechne die Länge von $\\vec a = ${vt(v)}$.`,
        teile: [{ typ: "zahl", loesung: `sqrt(${v.map((x) => `(${x})^2`).join(" + ")})`, fehler: [{ wert: String(l * l), meldung: "Das ist $|\\vec a|^2$. Zieh noch die Wurzel." }] }],
        hinweis: "Jede Komponente quadrieren, addieren, Wurzel ziehen.",
        loesung: `**Ansatz:** Die Länge folgt aus dem Satz von Pythagoras im Raum: $|\\vec a| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$.\n---\n$|\\vec a| = \\sqrt{${v.map((x) => kl(x) + "^2").join(" + ")}} = \\sqrt{${v.map((x) => x * x).join(" + ")}} = \\sqrt{${l * l}} = ${l}$. Beim Quadrieren verschwinden die Vorzeichen.`,
      };
    },
  }),
  drill({
    id: "ve-d-einheitsvektor",
    kapitel: "vektoren",
    titel: "Vektor normieren",
    niveau: 1,
    erzeuge: (r) => {
      const { v, l } = ganzeLaenge(r);
      return {
        angabe: `Bestimme den Einheitsvektor in Richtung $\\vec a = ${vt(v)}$.`,
        teile: [
          {
            typ: "vektor",
            loesung: v.map((x) => `${x}/${l}`),
            fehler: [{ wert: v.map((x) => `${x}/${l * l}`), meldung: "Du hast durch $|\\vec a|^2$ geteilt. Normieren heißt: durch die Länge teilen." }],
          },
        ],
        hinweis: "Berechne zuerst die Länge und teile dann jede Komponente durch sie.",
        loesung: `**Ansatz:** Ein Einheitsvektor hat die Länge $1$. Man erhält ihn, indem man durch die Länge teilt.\n---\n$|\\vec a| = \\sqrt{${v.map((x) => x * x).join(" + ")}} = ${l}$\n---\n$\\vec a_0 = \\dfrac{1}{${l}}${vt(v)}$\n---\n**Probe:** $\\dfrac{${v.map((x) => x * x).join(" + ")}}{${l * l}} = 1$. Die Länge ist $1$.`,
      };
    },
  }),
  drill({
    id: "ve-d-mittelpunkt",
    kapitel: "vektoren",
    titel: "Mittelpunkt einer Strecke",
    niveau: 1,
    erzeuge: (r) => {
      const A = vek(r, 3);
      const B = plus(A, vekNichtNull(r, 3, 4).map((x) => 2 * x - r.int(0, 1)));
      const M = plus(A, B).map((x) => x / 2);
      const halb = minus(B, A).map((x) => x / 2);
      return {
        angabe: `Bestimme den Mittelpunkt $M$ der Strecke $AB$ mit $${pt("A", A)}$ und $${pt("B", B)}$.`,
        teile: [
          {
            typ: "vektor",
            namen: ["x", "y", "z"],
            loesung: A.map((a, i) => `(${a} + ${B[i]})/2`),
            fehler: gleich(halb, M) ? undefined : [{ wert: halb.map(String), meldung: "Das ist der halbe Verbindungsvektor $\\tfrac12(B - A)$. Den Mittelpunkt erhältst du mit $\\tfrac12(A + B)$." }],
          },
        ],
        hinweis: "Jede Koordinate von $M$ ist der Mittelwert der entsprechenden Koordinaten von $A$ und $B$.",
        loesung: `**Ansatz:** $M = A + \\tfrac12\\overrightarrow{AB} = \\tfrac12(A + B)$, also koordinatenweise der Mittelwert.\n---\n$${pt("M", M)}$`,
      };
    },
  }),
  drill({
    id: "ve-d-teilungspunkt",
    kapitel: "vektoren",
    titel: "Strecke in einem Verhältnis teilen",
    niveau: 2,
    erzeuge: (r) => {
      const [m, n] = r.wahl([
        [1, 2],
        [2, 1],
        [1, 3],
        [3, 1],
        [2, 3],
        [3, 2],
      ]);
      const teile = m + n;
      const A = vek(r, 3, 5);
      const ab = vekNichtNull(r, 3, 3).map((x) => x * teile);
      const B = plus(A, ab);
      const T = plus(A, ab.map((x) => (x * m) / teile));
      const falsch = plus(A, ab.map((x) => (x * n) / teile));
      return {
        angabe: `Der Punkt $T$ teilt die Strecke von $${pt("A", A)}$ nach $${pt("B", B)}$ im Verhältnis $${m} : ${n}$, von $A$ aus gezählt. Bestimme $T$.`,
        teile: [
          {
            typ: "vektor",
            namen: ["x", "y", "z"],
            loesung: ausdr(T),
            fehler: [{ wert: ausdr(falsch), meldung: `Du hast von $B$ aus gezählt. Bis $T$ sind es $${m}$ von $${teile}$ Teilen, also $\\lambda = \\tfrac{${m}}{${teile}}$.` }],
          },
        ],
        hinweis: `Die Strecke besteht aus $${m} + ${n}$ gleichen Teilen. Bis $T$ sind es $${m}$ davon.`,
        loesung: `**Ansatz:** $T = A + \\lambda\\,\\overrightarrow{AB}$ mit dem Anteil $\\lambda = \\tfrac{${m}}{${m} + ${n}} = \\tfrac{${m}}{${teile}}$.\n---\n$\\overrightarrow{AB} = ${vt(ab)}$, also $\\tfrac{${m}}{${teile}}\\overrightarrow{AB} = ${vt(ab.map((x) => (x * m) / teile))}$.\n---\n$${pt("T", T)}$. **Kontrolle:** $\\overrightarrow{TB} = ${vt(minus(B, T))}$ verhält sich zu $\\overrightarrow{AT}$ wie $${n} : ${m}$.`,
      };
    },
  }),
  drill({
    id: "ve-d-parallelogramm",
    kapitel: "vektoren",
    titel: "Vierte Ecke eines Parallelogramms",
    niveau: 2,
    erzeuge: (r) => {
      const A = vek(r, 2, 8);
      let u = vekNichtNull(r, 2, 7);
      let w = vekNichtNull(r, 2, 7);
      while (u[0] * w[1] - u[1] * w[0] === 0) {
        u = vekNichtNull(r, 2, 7);
        w = vekNichtNull(r, 2, 7);
      }
      const B = plus(A, u);
      const C = plus(B, w);
      const D = plus(A, w);
      const M = plus(A, C).map((x) => x / 2);
      const falsch = minus(plus(A, B), C);
      return {
        angabe: `$${pt("A", A)}$, $${pt("B", B)}$ und $${pt("C", C)}$ sind drei aufeinanderfolgende Ecken des Parallelogramms $ABCD$. Bestimme $D$ und den Diagonalenschnittpunkt $M$.`,
        teile: [
          {
            typ: "vektor",
            label: "$D$",
            namen: ["x", "y"],
            loesung: ausdr(D),
            fehler: [{ wert: ausdr(falsch), meldung: "Du hast $A + B - C$ gerechnet. $D$ liegt aber gegenüber von $B$: Nachbar plus Nachbar minus Gegenecke, also $D = A + C - B$." }],
          },
          { typ: "vektor", label: "$M$", namen: ["x", "y"], loesung: A.map((a, i) => `(${a} + ${C[i]})/2`) },
        ],
        hinweis: "$D = A + \\overrightarrow{BC}$, und $M$ ist der Mittelpunkt der Diagonale $AC$.",
        loesung: `**Ansatz:** Im Parallelogramm gilt $\\overrightarrow{AD} = \\overrightarrow{BC}$, also $D = A + \\overrightarrow{BC}$.\n---\n$\\overrightarrow{BC} = ${vt(w)}$, also $${pt("D", D)}$.\n---\nDie Diagonalen halbieren einander: $M = \\tfrac12(A + C)$, das ist $${pt("M", M)}$. **Kontrolle:** $\\tfrac12(B + D)$ ergibt denselben Punkt.`,
      };
    },
  }),
  drill({
    id: "ve-d-schwerpunkt",
    kapitel: "vektoren",
    titel: "Schwerpunkt eines Dreiecks",
    niveau: 1,
    erzeuge: (r) => {
      const S = vek(r, 3, 4);
      const A = vek(r, 3, 7);
      const B = vek(r, 3, 7);
      const C = minus(minus(mal(3, S), A), B);
      const summe = plus(plus(A, B), C);
      return {
        angabe: `Bestimme den Schwerpunkt des Dreiecks $${pt("A", A)}$, $${pt("B", B)}$, $${pt("C", C)}$.`,
        teile: [
          {
            typ: "vektor",
            namen: ["x", "y", "z"],
            loesung: A.map((a, i) => `(${a} + ${B[i]} + ${C[i]})/3`),
            fehler: istNull(summe) ? undefined : [{ wert: summe.map((x) => String(x / 2)), meldung: "Du hast durch $2$ geteilt. Beim Schwerpunkt mittelst du drei Punkte, also teilst du durch $3$." }],
          },
        ],
        hinweis: "Addiere die drei Punkte koordinatenweise und teile durch $3$.",
        loesung: `**Ansatz:** Der Schwerpunkt ist der Mittelwert der drei Ecken: $S = \\tfrac13(A + B + C)$.\n---\n$A + B + C = (${summe.map(tz).join(" \\mid ")})$, geteilt durch $3$ ergibt $${pt("S", S)}$.`,
      };
    },
  }),
  drill({
    id: "ve-d-skalarprodukt",
    kapitel: "vektoren",
    titel: "Skalarprodukt und Art des Winkels",
    niveau: 1,
    erzeuge: (r) => {
      const a = vekNichtNull(r, 3);
      const b = vekNichtNull(r, 3);
      const s = dot(a, b);
      return {
        angabe: `Berechne $${vt(a)} \\cdot ${vt(b)}$. Ist der eingeschlossene Winkel spitz, recht oder stumpf?`,
        teile: [
          { typ: "zahl", label: "Skalarprodukt", loesung: a.map((x, i) => `(${x})*(${b[i]})`).join(" + ") },
          {
            typ: "auswahl",
            label: "Winkel",
            optionen: ["spitz", "rechter Winkel", "stumpf"],
            richtig: [s > 0 ? 0 : s === 0 ? 1 : 2],
          },
        ],
        hinweis: "Paarweise multiplizieren und addieren. Das Vorzeichen des Ergebnisses verrät die Art des Winkels.",
        loesung: `**Ansatz:** Skalarprodukt nach der Koordinatenformel. Es hat dasselbe Vorzeichen wie $\\cos\\varphi$, weil die Längen positiv sind.\n---\n$${a.map((x, i) => `${kl(x)} \\cdot ${kl(b[i])}`).join(" + ")} = ${s}$\n---\n${s > 0 ? "Positiv, also ist $\\cos\\varphi > 0$ und der Winkel spitz." : s < 0 ? "Negativ, also ist $\\cos\\varphi < 0$ und der Winkel stumpf." : "Null, also stehen die Vektoren normal aufeinander."}`,
      };
    },
  }),
  drill({
    id: "ve-d-winkel",
    kapitel: "vektoren",
    titel: "Winkel zwischen zwei Vektoren",
    niveau: 2,
    erzeuge: (r) => {
      let a = vekNichtNull(r, 3, 5);
      let b = vekNichtNull(r, 3, 5);
      while (istNull(kreuz(a, b)) || dot(a, b) === 0) {
        a = vekNichtNull(r, 3, 5);
        b = vekNichtNull(r, 3, 5);
      }
      const s = dot(a, b);
      const qa = dot(a, a);
      const qb = dot(b, b);
      const phi = (Math.acos(s / Math.sqrt(qa * qb)) * 180) / Math.PI;
      return {
        angabe: `Berechne den Winkel zwischen $\\vec a = ${vt(a)}$ und $\\vec b = ${vt(b)}$ in Grad, auf zwei Dezimalstellen gerundet.`,
        teile: [
          {
            typ: "zahl",
            einheit: "°",
            loesung: `inGrad(acos(${s}/sqrt(${qa}*${qb})))`,
            fehler: [{ wert: `180 - inGrad(acos(${s}/sqrt(${qa}*${qb})))`, meldung: "Das ist der Nebenwinkel. Setze das Skalarprodukt mit seinem Vorzeichen ein, der Arkuskosinus liefert dann direkt den richtigen Winkel." }],
          },
        ],
        hinweis: "$\\cos\\varphi = \\dfrac{\\vec a\\cdot\\vec b}{|\\vec a|\\,|\\vec b|}$, Taschenrechner auf DEG.",
        loesung: `**Ansatz:** Winkelformel $\\cos\\varphi = \\dfrac{\\vec a\\cdot\\vec b}{|\\vec a|\\,|\\vec b|}$. Der Arkuskosinus liefert Winkel zwischen $0°$ und $180°$, ein Quadrantenproblem gibt es nicht.\n---\n$\\vec a\\cdot\\vec b = ${s}$, $|\\vec a| = \\sqrt{${qa}}$ und $|\\vec b| = \\sqrt{${qb}}$.\n---\n$\\cos\\varphi = \\dfrac{${s}}{\\sqrt{${qa}}\\cdot\\sqrt{${qb}}} \\approx ${tz(s / Math.sqrt(qa * qb), 4)}$\n---\n$\\varphi \\approx ${tz(phi, 2)}°$. ${s > 0 ? "Spitz, passend zum positiven Skalarprodukt." : "Stumpf, passend zum negativen Skalarprodukt."}`,
      };
    },
  }),
  drill({
    id: "ve-d-orthogonal",
    kapitel: "vektoren",
    titel: "Parameter für Orthogonalität",
    niveau: 2,
    erzeuge: (r) => {
      const b = [r.intOhne0(-6, 6), r.wahl([-1, 1, 2, -2]), r.intOhne0(-6, 6)];
      let a1 = r.intOhne0(-5, 5);
      let a3 = r.intOhne0(-5, 5);
      while ((a1 * b[0] + a3 * b[2]) % b[1] !== 0 || a1 * b[0] + a3 * b[2] === 0) {
        a1 = r.intOhne0(-5, 5);
        a3 = r.intOhne0(-5, 5);
      }
      const rest = a1 * b[0] + a3 * b[2];
      const t = -rest / b[1];
      return {
        angabe: `Bestimme $t$ so, dass $\\begin{pmatrix} ${a1} \\\\ t \\\\ ${a3} \\end{pmatrix}$ und $${vt(b)}$ aufeinander normal stehen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `-(${a1}*${b[0]} + ${a3}*${b[2]})/${b[1]}`,
            fehler: [{ wert: String(-t), meldung: "Probe: Mit diesem Wert ist das Skalarprodukt nicht null. Beim Auflösen nach $t$ ist ein Vorzeichen verloren gegangen." }],
          },
        ],
        hinweis: "Normal heißt: Skalarprodukt gleich null. Das ergibt eine lineare Gleichung für $t$.",
        loesung: `**Ansatz:** Zwei Vektoren stehen genau dann normal aufeinander, wenn ihr Skalarprodukt null ist.\n---\n$${kl(a1)}\\cdot ${kl(b[0])} + t\\cdot ${kl(b[1])} + ${kl(a3)}\\cdot ${kl(b[2])} = 0$, also $${rest} ${b[1] < 0 ? "-" : "+"} ${Math.abs(b[1]) === 1 ? "" : Math.abs(b[1])}t = 0$.\n---\nNach $t$ auflösen: $t = ${tz(t)}$. **Probe:** Das Skalarprodukt ist dann $${rest} + ${kl(b[1])}\\cdot ${kl(t)} = 0$.`,
      };
    },
  }),
  drill({
    id: "ve-d-normal-ebene",
    kapitel: "vektoren",
    titel: "Normalvektor in der Ebene",
    niveau: 1,
    erzeuge: (r) => {
      let a = vek(r, 2, 9, true);
      while (Math.abs(a[0]) === Math.abs(a[1])) a = vek(r, 2, 9, true);
      return {
        angabe: `Gib einen Normalvektor zu $${vt(a)}$ an.`,
        teile: [
          {
            typ: "vektor",
            vielfaches: true,
            loesung: [String(-a[1]), String(a[0])],
            fehler: [{ wert: [String(a[1]), String(a[0])], meldung: "Du hast nur vertauscht. Ändere zusätzlich bei einer Koordinate das Vorzeichen und mach die Probe mit dem Skalarprodukt." }],
          },
        ],
        hinweis: "Koordinaten vertauschen und bei genau einer das Vorzeichen ändern.",
        loesung: `**Ansatz:** In der Ebene erhält man einen Normalvektor, indem man die Koordinaten vertauscht und bei einer das Vorzeichen ändert. Das dreht den Pfeil um $90°$.\n---\n$\\vec n = ${vt([-a[1], a[0]])}$. Jedes Vielfache ist ebenfalls richtig.\n---\n**Probe:** $${kl(a[0])}\\cdot ${kl(-a[1])} + ${kl(a[1])}\\cdot ${kl(a[0])} = 0$.`,
      };
    },
  }),
  drill({
    id: "ve-d-kreuzprodukt",
    kapitel: "vektoren",
    titel: "Kreuzprodukt",
    niveau: 2,
    erzeuge: (r) => {
      let a = vek(r, 3, 5);
      let b = vek(r, 3, 5);
      while (istNull(kreuz(a, b))) {
        a = vek(r, 3, 5);
        b = vek(r, 3, 5);
      }
      const c = kreuz(a, b);
      return {
        angabe: `Berechne $${vt(a)} \\times ${vt(b)}$.`,
        teile: [
          {
            typ: "vektor",
            loesung: ausdr(c),
            fehler: [{ wert: ausdr(mal(-1, c)), meldung: "Das ist $\\vec b\\times\\vec a$. Beim Kreuzprodukt zählt die Reihenfolge: Vertauschen dreht das Vorzeichen um." }],
          },
        ],
        hinweis: "Schreib beide Vektoren nebeneinander und wiederhole darunter ihre ersten beiden Zeilen. Erste Komponente aus den Zeilen 2 und 3, zweite aus den Zeilen 3 und 4 (Zeile 4 ist die wiederholte Zeile 1), dritte aus den Zeilen 4 und 5.",
        loesung: `**Ansatz:** Kreuzprodukt nach dem Schema, danach beide Skalarprodukt-Proben.\n---\n$\\begin{pmatrix} ${kl(a[1])}\\cdot ${kl(b[2])} - ${kl(a[2])}\\cdot ${kl(b[1])} \\\\ ${kl(a[2])}\\cdot ${kl(b[0])} - ${kl(a[0])}\\cdot ${kl(b[2])} \\\\ ${kl(a[0])}\\cdot ${kl(b[1])} - ${kl(a[1])}\\cdot ${kl(b[0])} \\end{pmatrix} = ${vt(c)}$\n---\n**Probe:** $\\vec a\\cdot(\\vec a\\times\\vec b) = ${dot(a, c)}$ und $\\vec b\\cdot(\\vec a\\times\\vec b) = ${dot(b, c)}$. Das Ergebnis steht auf beiden Vektoren normal.`,
      };
    },
  }),
  drill({
    id: "ve-d-dreiecksflaeche",
    kapitel: "vektoren",
    titel: "Dreiecksfläche im Raum",
    niveau: 2,
    erzeuge: (r) => {
      const A = vek(r, 3, 4);
      let u = vekNichtNull(r, 3, 4);
      let w = vekNichtNull(r, 3, 4);
      while (istNull(kreuz(u, w))) {
        u = vekNichtNull(r, 3, 4);
        w = vekNichtNull(r, 3, 4);
      }
      const B = plus(A, u);
      const C = plus(A, w);
      const c = kreuz(u, w);
      const q = dot(c, c);
      const wurzel = Math.sqrt(q);
      return {
        angabe: `Berechne den Flächeninhalt des Dreiecks $${pt("A", A)}$, $${pt("B", B)}$, $${pt("C", C)}$.`,
        teile: [{ typ: "zahl", loesung: `sqrt(${q})/2`, fehler: [{ wert: `sqrt(${q})`, meldung: "Das ist die Fläche des Parallelogramms aus beiden Seitenvektoren. Das Dreieck ist die Hälfte davon." }] }],
        hinweis: "$A = \\tfrac12\\,|\\overrightarrow{AB}\\times\\overrightarrow{AC}|$",
        loesung: `**Ansatz:** Die Länge des Kreuzprodukts zweier Seitenvektoren ist die Fläche des Parallelogramms. Das Dreieck ist die Hälfte.\n---\n$\\overrightarrow{AB} = ${vt(u)}$, $\\overrightarrow{AC} = ${vt(w)}$\n---\n$\\overrightarrow{AB}\\times\\overrightarrow{AC} = ${vt(c)}$, Länge $\\sqrt{${q}}${Number.isInteger(wurzel) ? ` = ${wurzel}` : ` \\approx ${tz(wurzel, 3)}`}$\n---\nFläche: $\\tfrac12\\sqrt{${q}} \\approx ${tz(wurzel / 2, 3)}$ Flächeneinheiten.`,
      };
    },
  }),
  drill({
    id: "ve-d-spat",
    kapitel: "vektoren",
    titel: "Spatvolumen",
    niveau: 2,
    erzeuge: (r) => {
      let a = vek(r, 3, 4);
      let b = vek(r, 3, 4);
      let c = vek(r, 3, 4);
      while (dot(kreuz(a, b), c) === 0) {
        a = vek(r, 3, 4);
        b = vek(r, 3, 4);
        c = vek(r, 3, 4);
      }
      const n = kreuz(a, b);
      const s = dot(n, c);
      return {
        angabe: `Berechne das Volumen des Spats, der von $${vt(a)}$, $${vt(b)}$ und $${vt(c)}$ aufgespannt wird.`,
        teile: [{ typ: "zahl", loesung: `abs(${s})` }],
        hinweis: "$V = |(\\vec a\\times\\vec b)\\cdot\\vec c|$",
        loesung: `**Ansatz:** Das Volumen ist Grundfläche mal Höhe. Beides steckt im Spatprodukt $(\\vec a\\times\\vec b)\\cdot\\vec c$.\n---\n$\\vec a\\times\\vec b = ${vt(n)}$\n---\n$(\\vec a\\times\\vec b)\\cdot\\vec c = ${s}$\n---\n$V = |${s}| = ${Math.abs(s)}$ Volumeneinheiten. Der Betrag ist nötig, weil ein Volumen nicht negativ sein kann.`,
      };
    },
  }),
  drill({
    id: "ve-d-projektion",
    kapitel: "vektoren",
    titel: "Länge der Projektion",
    niveau: 2,
    erzeuge: (r) => {
      const { v: b, l } = ganzeLaenge(r);
      let a = vekNichtNull(r, 3, 8);
      while (dot(a, b) === 0) a = vekNichtNull(r, 3, 8);
      const s = dot(a, b);
      return {
        angabe: `Wie lang ist die (vorzeichenbehaftete) Projektion von $\\vec a = ${vt(a)}$ auf die Richtung $\\vec b = ${vt(b)}$, also $\\vec a\\cdot\\vec b_0$?`,
        teile: [{ typ: "zahl", loesung: `${s}/${l}`, fehler: [{ wert: `${s}/${l * l}`, meldung: "Du hast durch $|\\vec b|^2$ geteilt. Für die **Länge** der Projektion teilst du durch $|\\vec b|$." }] }],
        hinweis: "$\\vec a\\cdot\\vec b_0 = \\dfrac{\\vec a\\cdot\\vec b}{|\\vec b|}$",
        loesung: `**Ansatz:** Die Länge des Anteils von $\\vec a$ in Richtung $\\vec b$ ist das Skalarprodukt mit dem Einheitsvektor $\\vec b_0$.\n---\n$\\vec a\\cdot\\vec b = ${s}$ und $|\\vec b| = ${l}$.\n---\n$\\vec a\\cdot\\vec b_0 = \\dfrac{${s}}{${l}} \\approx ${tz(s / l, 3)}$${s < 0 ? ". Negativ: Der Winkel ist stumpf, die Projektion zeigt gegen $\\vec b$." : "."}`,
      };
    },
  }),
  drill({
    id: "ve-d-komplanar",
    kapitel: "vektoren",
    titel: "Parameter für Komplanarität",
    niveau: 2,
    erzeuge: (r) => {
      let a = vekNichtNull(r, 3, 3);
      let b = vekNichtNull(r, 3, 3);
      while (istNull(kreuz(a, b)) || kreuz(a, b)[1] === 0) {
        a = vekNichtNull(r, 3, 3);
        b = vekNichtNull(r, 3, 3);
      }
      const n = kreuz(a, b);
      const p = r.intOhne0(-2, 2);
      const q = r.intOhne0(-2, 2);
      const c = plus(mal(p, a), mal(q, b));
      const t = c[1];
      return {
        angabe: `Für welches $t$ liegen $\\vec a = ${vt(a)}$, $\\vec b = ${vt(b)}$ und $\\vec c = \\begin{pmatrix} ${c[0]} \\\\ t \\\\ ${c[2]} \\end{pmatrix}$ in einer Ebene?`,
        teile: [{ typ: "zahl", loesung: `-(${n[0]}*${c[0]} + ${n[2]}*${c[2]})/(${n[1]})` }],
        hinweis: "Drei Vektoren liegen genau dann in einer Ebene, wenn ihr Spatprodukt $(\\vec a\\times\\vec b)\\cdot\\vec c$ null ist.",
        loesung: `**Ansatz:** Komplanar heißt linear abhängig, und das heißt Spatprodukt null.\n---\n$\\vec a\\times\\vec b = ${vt(n)}$\n---\n$(\\vec a\\times\\vec b)\\cdot\\vec c = ${n[0]}\\cdot ${kl(c[0])} + ${kl(n[1])}\\,t + ${kl(n[2])}\\cdot ${kl(c[2])} = 0$, also $t = ${tz(t)}$.\n---\n**Probe:** Mit $t = ${tz(t)}$ ist $\\vec c = ${koef(p)}\\vec a ${q < 0 ? "-" : "+"} ${koef(Math.abs(q))}\\vec b$, also eine Linearkombination von $\\vec a$ und $\\vec b$.`,
      };
    },
  }),
  drill({
    id: "ve-d-dreieck-komplett",
    kapitel: "vektoren",
    titel: "Dreieck in der Ebene: Winkel und Fläche",
    niveau: 3,
    erzeuge: (r) => {
      const A = vek(r, 2, 4);
      let u = vekNichtNull(r, 2, 6);
      let w = vekNichtNull(r, 2, 6);
      while (u[0] * w[1] - u[1] * w[0] === 0) {
        u = vekNichtNull(r, 2, 6);
        w = vekNichtNull(r, 2, 6);
      }
      const B = plus(A, u);
      const C = plus(A, w);
      const s = dot(u, w);
      const qu = dot(u, u);
      const qw = dot(w, w);
      const det = u[0] * w[1] - u[1] * w[0];
      const alpha = (Math.acos(s / Math.sqrt(qu * qw)) * 180) / Math.PI;
      return {
        angabe: `Gegeben ist das Dreieck $${pt("A", A)}$, $${pt("B", B)}$, $${pt("C", C)}$. Berechne den Innenwinkel $\\alpha$ bei $A$ in Grad (auf zwei Dezimalstellen gerundet) und den Flächeninhalt.`,
        teile: [
          { typ: "zahl", label: "$\\alpha$", einheit: "°", loesung: `inGrad(acos(${s}/sqrt(${qu}*${qw})))` },
          { typ: "zahl", label: "Fläche", loesung: `abs(${det})/2`, fehler: [{ wert: String(Math.abs(det)), meldung: "Das ist die Fläche des Parallelogramms. Das Dreieck ist die Hälfte." }] },
        ],
        hinweis: "Winkel bei $A$ mit $\\overrightarrow{AB}$ und $\\overrightarrow{AC}$, beide zeigen von $A$ weg. Fläche: $\\tfrac12|a_1b_2 - a_2b_1|$.",
        loesung: `**Ansatz:** Beide Größen berechnen wir aus den Seitenvektoren ab $A$: den Winkel mit dem Skalarprodukt, die Fläche mit der Determinante.\n---\n$\\overrightarrow{AB} = ${vt(u)}$ und $\\overrightarrow{AC} = ${vt(w)}$.\n---\n$\\cos\\alpha = \\dfrac{${s}}{\\sqrt{${qu}}\\cdot\\sqrt{${qw}}} \\approx ${tz(s / Math.sqrt(qu * qw), 4)}$, also $\\alpha \\approx ${tz(alpha, 2)}°$.\n---\nFläche: $\\tfrac12\\,|${kl(u[0])}\\cdot ${kl(w[1])} - ${kl(u[1])}\\cdot ${kl(w[0])}| = \\tfrac12\\cdot ${Math.abs(det)} = ${tz(Math.abs(det) / 2)}$ Flächeneinheiten.`,
      };
    },
  }),
  drill({
    id: "ve-d-gleichgewicht",
    kapitel: "vektoren",
    titel: "Seilkräfte im Gleichgewicht",
    niveau: 3,
    erzeuge: (r) => {
      // Seilrichtungen (-p | h) und (q | h), Gewicht (0 | -G); Loesung lambda = q*mu/p, mu = G/(h*(q/p + 1))
      const p = r.wahl([1, 2, 3]);
      const q = r.wahl([1, 2, 3, 4].filter((x) => x !== p));
      const h = r.wahl([2, 3, 4]);
      const mu = r.int(2, 6) * p;
      const lambda = (q * mu) / p;
      const G = h * (lambda + mu);
      return {
        angabe: `Eine Last mit der Gewichtskraft $\\vec G = \\begin{pmatrix} 0 \\\\ -${G} \\end{pmatrix}$ N hängt an zwei Seilen. Das linke Seil zieht in Richtung $\\begin{pmatrix} -${p} \\\\ ${h} \\end{pmatrix}$, das rechte in Richtung $\\begin{pmatrix} ${q} \\\\ ${h} \\end{pmatrix}$. Berechne die Beträge beider Seilkräfte in N.`,
        teile: [
          { typ: "zahl", label: "linkes Seil", einheit: "N", loesung: `${lambda}*sqrt(${p * p + h * h})` },
          { typ: "zahl", label: "rechtes Seil", einheit: "N", loesung: `${mu}*sqrt(${q * q + h * h})` },
        ],
        hinweis: `Ansatz $\\vec F_1 = \\lambda\\begin{pmatrix} -${p} \\\\ ${h} \\end{pmatrix}$, $\\vec F_2 = \\mu\\begin{pmatrix} ${q} \\\\ ${h} \\end{pmatrix}$ und $\\vec F_1 + \\vec F_2 + \\vec G = \\vec 0$, komponentenweise.`,
        loesung: `**Ansatz:** Die Seilkräfte sind Vielfache ihrer Richtungen. Im Gleichgewicht ist die Summe aller Kräfte der Nullvektor. Das liefert eine Gleichung je Komponente.\n---\n$x$-Richtung: $-${koef(p)}\\lambda + ${koef(q)}\\mu = 0$. $y$-Richtung: $${h}\\lambda + ${h}\\mu - ${G} = 0$.\n---\nLösung des Systems: $\\lambda = ${tz(lambda)}$ und $\\mu = ${tz(mu)}$.\n---\n$|\\vec F_1| = ${tz(lambda)}\\cdot\\sqrt{${p * p + h * h}} \\approx ${tz(lambda * Math.sqrt(p * p + h * h), 2)}$ N und $|\\vec F_2| = ${tz(mu)}\\cdot\\sqrt{${q * q + h * h}} \\approx ${tz(mu * Math.sqrt(q * q + h * h), 2)}$ N. **Plausibel:** Das steilere Seil trägt mehr.`,
      };
    },
  }),
];
