import { drill, tz, ggt, type Drill, type Rng } from "@/lib/lernen/training";

type V = number[];

const vt = (v: V) => `\\begin{pmatrix} ${v.map((x) => tz(x)).join(" \\\\ ")} \\end{pmatrix}`;
const pt = (name: string, v: V) => `${name}(${v.map((x) => tz(x)).join(" \\mid ")})`;
const ausdr = (v: V) => v.map((x) => String(x));
const plus = (a: V, b: V) => a.map((x, i) => x + b[i]);
const minus = (a: V, b: V) => a.map((x, i) => x - b[i]);
const mal = (k: number, a: V) => a.map((x) => k * x);
const dot = (a: V, b: V) => a.reduce((s, x, i) => s + x * b[i], 0);
const kreuz = (a: V, b: V): V => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const istNull = (v: V) => v.every((x) => x === 0);
const kl = (x: number) => (x < 0 ? `(${tz(x)})` : tz(x));
/** a + b t als LaTeX mit sauberem Vorzeichen */
const lin = (a: number, b: number, v = "t") => `${tz(a)} ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : tz(Math.abs(b))}${v}`;

function vek(r: Rng, n: number, max = 6): V {
  return Array.from({ length: n }, () => r.int(-max, max));
}
function vekNichtNull(r: Rng, n: number, max = 6): V {
  let v = vek(r, n, max);
  while (istNull(v)) v = vek(r, n, max);
  return v;
}
/** kuerzt einen ganzzahligen Vektor durch den ggT seiner Komponenten */
function kuerze(v: V): V {
  const g = v.reduce((s, x) => ggt(s, x), 0) || 1;
  return v.map((x) => x / g);
}
/** lineare Gleichung a1 x + a2 y (+ a3 z) = d als LaTeX */
function gleichung(n: V, d: number): string {
  const namen = ["x", "y", "z"];
  let s = "";
  n.forEach((k, i) => {
    if (k === 0) return;
    const b = Math.abs(k);
    const vz = s === "" ? (k < 0 ? "-" : "") : k < 0 ? " - " : " + ";
    s += vz + (b === 1 ? "" : tz(b)) + namen[i];
  });
  return `${s} = ${tz(d)}`;
}
/** (x - m)^2 als LaTeX */
const quadrat = (v: string, m: number) => (m === 0 ? `${v}^2` : `(${v} ${m > 0 ? "-" : "+"} ${Math.abs(m)})^2`);
/** Summand mit Vorzeichen: (+4, "x") -> " + 4x" */
const summand = (k: number, t: string) => (k === 0 ? "" : ` ${k < 0 ? "-" : "+"} ${Math.abs(k) === 1 && t ? "" : Math.abs(k)}${t}`);
const gerundet = (z: number, n: number) => (Number.isInteger(z / n) ? ` = ${z / n}` : ` \\approx ${tz(z / n, 3)}`);

/** Normalvektoren mit ganzzahliger Laenge */
const N2: [number, number, number][] = [
  [3, 4, 5],
  [4, 3, 5],
  [5, 12, 13],
  [12, 5, 13],
  [6, 8, 10],
  [8, 15, 17],
];
const N3: [number, number, number, number][] = [
  [1, 2, 2, 3],
  [2, 1, 2, 3],
  [2, 2, 1, 3],
  [2, 3, 6, 7],
  [6, 2, 3, 7],
  [4, 4, 7, 9],
];
function normal2(r: Rng): { n: V; l: number } {
  const [a, b, l] = r.wahl(N2);
  return { n: [a * r.vorzeichen(), b * r.vorzeichen()], l };
}
function normal3(r: Rng): { n: V; l: number } {
  const [a, b, c, l] = r.wahl(N3);
  return { n: [a * r.vorzeichen(), b * r.vorzeichen(), c * r.vorzeichen()], l };
}

const LAGEN = ["identisch", "echt parallel", "schneidend", "windschief"];

export const DRILLS: Drill[] = [
  drill({
    id: "ag-d-gerade-zwei-punkte",
    kapitel: "analytische-geometrie",
    titel: "Gerade durch zwei Punkte (allgemeine Form)",
    niveau: 1,
    erzeuge: (r) => {
      const A = vek(r, 2);
      let B = vek(r, 2);
      while (istNull(minus(B, A))) B = vek(r, 2);
      const rv = kuerze(minus(B, A));
      const n = [-rv[1], rv[0]];
      const c = dot(n, A);
      return {
        angabe: `Bestimme die Gerade durch $${pt("A", A)}$ und $${pt("B", B)}$ in der Form $ax + by = c$. Gib $(a, b, c)$ an (jedes Vielfache ist richtig).`,
        teile: [
          {
            typ: "vektor",
            namen: ["a", "b", "c"],
            vielfaches: true,
            loesung: ausdr([...n, c]),
            fehler: [{ wert: ausdr([...rv, dot(rv, A)]), meldung: "Du hast den Richtungsvektor als Normalvektor verwendet. Er muss erst gekippt werden." }],
          },
        ],
        hinweis: "Richtungsvektor $\\overrightarrow{AB}$ berechnen, kippen, dann die rechte Seite mit $A$ bestimmen.",
        loesung: `**Ansatz:** Die Richtung der Geraden ist der Schritt von $A$ nach $B$: $\\overrightarrow{AB} = ${vt(minus(B, A))}$, gekürzt $${vt(rv)}$.\n---\nDie Zahlen vor $x$ und $y$ bilden einen Normalvektor. Wir kippen den Richtungsvektor: $\\vec n = ${vt(n)}$. Die rechte Seite ist $\\vec n\\cdot A = ${c}$.\n---\nAlso $g: ${gleichung(n, c)}$. Probe mit $B$: Die linke Seite ergibt $${dot(n, B)}$, also stimmt die Gleichung.`,
      };
    },
  }),
  drill({
    id: "ag-d-schnittpunkt",
    kapitel: "analytische-geometrie",
    titel: "Schnittpunkt zweier Geraden",
    niveau: 1,
    erzeuge: (r) => {
      const S = vek(r, 2, 5);
      let n1 = vekNichtNull(r, 2, 4);
      let n2 = vekNichtNull(r, 2, 4);
      while (n1[0] * n2[1] - n1[1] * n2[0] === 0) {
        n1 = vekNichtNull(r, 2, 4);
        n2 = vekNichtNull(r, 2, 4);
      }
      const c1 = dot(n1, S);
      const c2 = dot(n2, S);
      return {
        angabe: `Berechne den Schnittpunkt von $g: ${gleichung(n1, c1)}$ und $h: ${gleichung(n2, c2)}$.`,
        teile: [{ typ: "vektor", namen: ["x", "y"], loesung: ausdr(S) }],
        hinweis: "Löse das Gleichungssystem mit Einsetzen oder Addieren.",
        loesung: `**Ansatz:** Der Schnittpunkt erfüllt beide Gleichungen. Die Normalvektoren $${vt(n1)}$ und $${vt(n2)}$ sind keine Vielfachen, es gibt also genau einen Schnittpunkt.\n---\nWir lösen das Gleichungssystem, zum Beispiel indem wir eine Gleichung nach einer Variablen auflösen und in die andere einsetzen. Es ergibt sich $${pt("S", S)}$.\n---\nProbe: In $g$ ergibt die linke Seite $${dot(n1, S)} = ${c1}$, in $h$ ergibt sie $${dot(n2, S)} = ${c2}$. Beide Gleichungen stimmen.`,
      };
    },
  }),
  drill({
    id: "ag-d-parallel-normal",
    kapitel: "analytische-geometrie",
    titel: "Richtungsvektor für parallel und normal",
    niveau: 1,
    erzeuge: (r) => {
      const { n, l } = normal2(r);
      const c = r.int(-12, 12);
      const rich = [-n[1], n[0]];
      return {
        angabe: `Gegeben ist $h: ${gleichung(n, c)}$. Gib einen Richtungsvektor einer Geraden an, die a) parallel zu $h$ ist, b) normal auf $h$ steht (jedes Vielfache ist richtig). Wie lang ist der Normalvektor von $h$?`,
        teile: [
          { typ: "vektor", label: "a) parallel", vielfaches: true, loesung: ausdr(rich), fehler: [{ wert: ausdr(n), meldung: "Das ist der Normalvektor von $h$. Mit ihm als Richtung stünde die Gerade normal auf $h$." }] },
          { typ: "vektor", label: "b) normal", vielfaches: true, loesung: ausdr(n), fehler: [{ wert: ausdr(rich), meldung: "Das ist ein Richtungsvektor von $h$. Damit wäre die Gerade parallel." }] },
          { typ: "zahl", label: "$|\\vec n|$", loesung: String(l), fehler: [{ wert: String(Math.abs(n[0]) + Math.abs(n[1])), meldung: "Die Länge ist die Wurzel aus der Summe der Quadrate, nicht die Summe der Beträge." }] },
        ],
        hinweis: "Die Zahlen vor $x$ und $y$ bilden den Normalvektor. Kippen liefert die Richtung.",
        loesung: `**Ansatz:** Schlüsselprinzip. Der Normalvektor von $h$ ist $\\vec n = ${vt(n)}$, gekippt ergibt er den Richtungsvektor $${vt(rich)}$.\n---\na) Parallel heißt gleiche Richtung wie $h$: $${vt(rich)}$. b) Normal heißt Richtung des Normalvektors: $${vt(n)}$.\n---\n$|\\vec n| = \\sqrt{${n[0] * n[0]} + ${n[1] * n[1]}} = ${l}$. Normiert wäre der Normalvektor $\\frac{1}{${l}}${vt(n)}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-abstand-punkt-gerade",
    kapitel: "analytische-geometrie",
    titel: "Abstand Punkt–Gerade (HNF)",
    niveau: 2,
    erzeuge: (r) => {
      const { n, l } = normal2(r);
      const c = r.int(-20, 20);
      const Q = vek(r, 2, 8);
      const w = dot(n, Q) - c;
      return {
        angabe: `Berechne den Abstand von $${pt("Q", Q)}$ zur Geraden $g: ${gleichung(n, c)}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `abs(${dot(n, Q)} - (${c}))/${l}`,
            fehler: w !== 0 ? [{ wert: String(Math.abs(w)), meldung: "Das ist erst der Betrag im Zähler. Teile noch durch die Länge des Normalvektors." }] : undefined,
          },
        ],
        hinweis: "$d = \\dfrac{|ax_0 + by_0 - c|}{\\sqrt{a^2 + b^2}}$",
        loesung: `**Ansatz:** Hessesche Normalform. Wir brauchen die Länge des Normalvektors: $|\\vec n| = \\sqrt{${n[0] * n[0]} + ${n[1] * n[1]}} = ${l}$.\n---\nPunkt in die linke Seite einsetzen und die rechte Seite abziehen: $${kl(n[0])}\\cdot ${kl(Q[0])} + ${kl(n[1])}\\cdot ${kl(Q[1])} - ${kl(c)} = ${w}$.\n---\nBetrag nehmen und durch $|\\vec n|$ teilen: $d = \\dfrac{${Math.abs(w)}}{${l}}${gerundet(Math.abs(w), l)}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-schnittwinkel",
    kapitel: "analytische-geometrie",
    titel: "Schnittwinkel zweier Geraden",
    niveau: 2,
    erzeuge: (r) => {
      let n1 = vekNichtNull(r, 2, 5);
      let n2 = vekNichtNull(r, 2, 5);
      while (n1[0] * n2[1] - n1[1] * n2[0] === 0) {
        n1 = vekNichtNull(r, 2, 5);
        n2 = vekNichtNull(r, 2, 5);
      }
      const c1 = r.int(-9, 9);
      const c2 = r.int(-9, 9);
      const s = dot(n1, n2);
      const q1 = dot(n1, n1);
      const q2 = dot(n2, n2);
      const phi = (Math.acos(Math.min(1, Math.abs(s) / Math.sqrt(q1 * q2))) * 180) / Math.PI;
      return {
        angabe: `Unter welchem Winkel schneiden einander $g: ${gleichung(n1, c1)}$ und $h: ${gleichung(n2, c2)}$? (Schnittwinkel zwischen $0°$ und $90°$, in Grad, zwei Dezimalstellen)`,
        teile: [
          {
            typ: "zahl",
            einheit: "°",
            loesung: `inGrad(acos(abs(${s})/sqrt(${q1}*${q2})))`,
            fehler: s < 0 ? [{ wert: `inGrad(acos(${s}/sqrt(${q1}*${q2})))`, meldung: "Das ist der stumpfe Nebenwinkel. Setze Betragsstriche um das Skalarprodukt." }] : undefined,
          },
        ],
        hinweis: "Winkel zwischen den Normalvektoren, mit Betrag im Zähler.",
        loesung: `**Ansatz:** Der Winkel zwischen den Geraden ist derselbe wie zwischen ihren Normalvektoren $\\vec n_g = ${vt(n1)}$ und $\\vec n_h = ${vt(n2)}$.\n---\nSkalarprodukt $\\vec n_g\\cdot\\vec n_h = ${s}$. Mit Betrag im Zähler, damit der spitze Winkel herauskommt: $\\cos\\varphi = \\dfrac{|${s}|}{\\sqrt{${q1}}\\cdot\\sqrt{${q2}}} \\approx ${tz(Math.abs(s) / Math.sqrt(q1 * q2), 4)}$.\n---\nAlso $\\varphi \\approx ${tz(phi, 2)}°$. Ein Schnittwinkel liegt immer zwischen $0°$ und $90°$.`,
      };
    },
  }),
  drill({
    id: "ag-d-lotfuss-gerade",
    kapitel: "analytische-geometrie",
    titel: "Lotfußpunkt auf einer Geraden",
    niveau: 2,
    erzeuge: (r) => {
      const n = vekNichtNull(r, 2, 3);
      const F = vek(r, 2, 5);
      const k = r.intOhne0(-2, 2);
      const Q = plus(F, mal(k, n));
      const c = dot(n, F);
      return {
        angabe: `Bestimme den Lotfußpunkt $F$ von $${pt("Q", Q)}$ auf $g: ${gleichung(n, c)}$.`,
        teile: [{ typ: "vektor", namen: ["x", "y"], loesung: ausdr(F), fehler: [{ wert: ausdr(Q), meldung: "Das ist $Q$ selbst. Der Lotfußpunkt liegt auf der Geraden." }] }],
        hinweis: "Lotgerade $X = Q + t\\,\\vec n$ mit $g$ schneiden.",
        loesung: `**Ansatz:** Das Lot steht normal auf $g$, zeigt also in Richtung des Normalvektors. Lotgerade: $X = ${vt(Q)} + t${vt(n)}$.\n---\nIn $g$ einsetzen: $${lin(dot(n, Q), dot(n, n))} = ${c}$, also $t = ${-k}$.\n---\n$F = Q + (${-k})\\cdot\\vec n$, das ist $${pt("F", F)}$. Der Abstand ist $|t|\\cdot|\\vec n| = ${Math.abs(k)}\\sqrt{${dot(n, n)}}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-lage-geraden-raum",
    kapitel: "analytische-geometrie",
    titel: "Lage zweier Geraden im Raum",
    niveau: 2,
    erzeuge: (r) => {
      const fall = r.int(0, 3);
      const P = vek(r, 3, 4);
      let rv = vekNichtNull(r, 3, 3);
      let u = vekNichtNull(r, 3, 3);
      while (istNull(kreuz(rv, u))) {
        rv = vekNichtNull(r, 3, 3);
        u = vekNichtNull(r, 3, 3);
      }
      let Q: V;
      let s: V;
      let begr: string;
      if (fall === 0) {
        s = mal(r.wahl([-2, -1, 2, 3]), rv);
        const k = r.intOhne0(-2, 2);
        Q = plus(P, mal(k, rv));
        begr = `Die Richtungen sind Vielfache. Die Punktprobe mit dem Aufpunkt von $h$ in $g$ liefert in jeder Gleichung, in der $t$ vorkommt, denselben Wert $t = ${k}$. Gleichungen ohne $t$ sind von selbst erfüllt. Also sind die Geraden identisch.`;
      } else if (fall === 1) {
        s = mal(r.wahl([-2, -1, 2, 3]), rv);
        Q = plus(plus(P, mal(r.int(-2, 2), rv)), u);
        begr = `Die Richtungen sind Vielfache. Die Punktprobe mit dem Aufpunkt von $h$ in $g$ liefert keinen Wert für $t$, der alle drei Gleichungen zugleich erfüllt. Der Aufpunkt liegt nicht auf $g$, die Geraden sind echt parallel.`;
      } else if (fall === 2) {
        s = u;
        const a = r.intOhne0(-2, 2);
        const b = r.intOhne0(-2, 2);
        Q = plus(P, minus(mal(a, rv), mal(b, u)));
        begr = `Die Richtungen sind keine Vielfachen. Gleichsetzen $P + t\\vec r = Q + s\\vec u$ ergibt aus zwei Gleichungen $t = ${a}$ und $s = ${b}$, und auch die dritte Gleichung ist erfüllt. Die Geraden schneiden sich im Punkt $${pt("S", plus(P, mal(a, rv)))}$.`;
      } else {
        s = u;
        const nn = kuerze(kreuz(rv, u));
        Q = plus(plus(P, mal(r.int(-1, 1), rv)), nn);
        begr = `Die Richtungen sind keine Vielfachen. Gleichsetzen: Aus zwei der drei Gleichungen erhält man Werte für $t$ und $s$, die dritte Gleichung ist damit aber verletzt. Es gibt keinen gemeinsamen Punkt, und parallel sind die Geraden auch nicht: windschief.`;
      }
      return {
        angabe: `Bestimme die Lage von $g: X = ${vt(P)} + t${vt(rv)}$ und $h: X = ${vt(Q)} + s${vt(s)}$.`,
        teile: [
          {
            typ: "auswahl",
            optionen: LAGEN,
            richtig: [fall],
            fehler:
              fall === 3
                ? [{ wert: 1, meldung: "Kein gemeinsamer Punkt heißt im Raum nicht automatisch parallel. Vergleiche die Richtungsvektoren." }]
                : fall === 2
                  ? [{ wert: 3, meldung: "Prüfe noch einmal alle drei Gleichungen mit den gefundenen Werten von $t$ und $s$." }]
                  : undefined,
          },
        ],
        hinweis: "Zuerst die Richtungsvektoren vergleichen, dann Punktprobe oder Gleichsetzen mit Prüfung der dritten Gleichung.",
        loesung: `**Ansatz:** Rezept in zwei Stufen. Erst die Richtungen $${vt(rv)}$ und $${vt(s)}$ vergleichen: Sie sind ${fall <= 1 ? "Vielfache voneinander" : "keine Vielfachen"}.\n---\n${begr}`,
      };
    },
  }),
  drill({
    id: "ag-d-ebene-drei-punkte",
    kapitel: "analytische-geometrie",
    titel: "Ebene durch drei Punkte",
    niveau: 2,
    erzeuge: (r) => {
      const A = vek(r, 3, 4);
      let u = vekNichtNull(r, 3, 3);
      let v = vekNichtNull(r, 3, 3);
      while (istNull(kreuz(u, v))) {
        u = vekNichtNull(r, 3, 3);
        v = vekNichtNull(r, 3, 3);
      }
      const B = plus(A, u);
      const C = plus(A, v);
      const nRoh = kreuz(u, v);
      const n = kuerze(nRoh);
      const d = dot(n, A);
      return {
        angabe: `Bestimme die Ebene durch $${pt("A", A)}$, $${pt("B", B)}$, $${pt("C", C)}$ in der Form $ax + by + cz = d$. Gib $(a, b, c, d)$ an (jedes Vielfache ist richtig).`,
        teile: [{ typ: "vektor", namen: ["a", "b", "c", "d"], vielfaches: true, loesung: ausdr([...n, d]) }],
        hinweis: "$\\vec n = \\overrightarrow{AB}\\times\\overrightarrow{AC}$",
        loesung: `**Ansatz:** Zwei Richtungsvektoren liegen in der Ebene: $\\overrightarrow{AB} = ${vt(u)}$ und $\\overrightarrow{AC} = ${vt(v)}$.\n---\nIhr Kreuzprodukt steht normal auf beiden, also auf der Ebene: $${vt(nRoh)}$${n.some((x, i) => x !== nRoh[i]) ? `, gekürzt $${vt(n)}$` : ""}.\n---\nDie rechte Seite ist $\\vec n\\cdot A = ${d}$, also $E: ${gleichung(n, d)}$.\n---\nProbe: $B$ ergibt $${dot(n, B)}$ und $C$ ergibt $${dot(n, C)}$. Beide Punkte liegen in der Ebene.`,
      };
    },
  }),
  drill({
    id: "ag-d-durchstoss",
    kapitel: "analytische-geometrie",
    titel: "Schnittpunkt Gerade–Ebene",
    niveau: 2,
    erzeuge: (r) => {
      const S = vek(r, 3, 5);
      let n = vekNichtNull(r, 3, 3);
      let rv = vekNichtNull(r, 3, 3);
      while (dot(n, rv) === 0) {
        n = vekNichtNull(r, 3, 3);
        rv = vekNichtNull(r, 3, 3);
      }
      const t0 = r.intOhne0(-3, 3);
      const P = minus(S, mal(t0, rv));
      const d = dot(n, S);
      return {
        angabe: `Bestimme den Schnittpunkt von $g: X = ${vt(P)} + t${vt(rv)}$ mit $E: ${gleichung(n, d)}$.`,
        teile: [{ typ: "vektor", namen: ["x", "y", "z"], loesung: ausdr(S), fehler: istNull(P) ? undefined : [{ wert: ausdr(mal(t0, rv)), meldung: "Das ist nur $t\\cdot\\vec r$. Addiere noch den Aufpunkt." }] }],
        hinweis: "Setze die Koordinaten von $g$ in die Ebenengleichung ein und löse nach $t$.",
        loesung: `**Ansatz:** Der Schnittpunkt liegt auf $g$ und erfüllt die Ebenengleichung. Wir setzen die Koordinaten von $g$ in $E$ ein: $${lin(dot(n, P), dot(n, rv))} = ${d}$.\n---\nNach $t$ auflösen: $t = ${t0}$.\n---\nDiesen Wert in $g$ einsetzen: $${pt("S", S)}$. Probe in $E$: Die linke Seite ergibt $${dot(n, S)} = ${d}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-winkel-gerade-ebene",
    kapitel: "analytische-geometrie",
    titel: "Winkel zwischen Gerade und Ebene",
    niveau: 2,
    erzeuge: (r) => {
      const { n, l } = normal3(r);
      let rv = vekNichtNull(r, 3, 3);
      while (dot(n, rv) === 0) rv = vekNichtNull(r, 3, 3);
      const d = r.int(-9, 9);
      const s = dot(n, rv);
      const q = dot(rv, rv);
      const phi = (Math.asin(Math.min(1, Math.abs(s) / (l * Math.sqrt(q)))) * 180) / Math.PI;
      return {
        angabe: `Unter welchem Winkel schneidet eine Gerade mit dem Richtungsvektor $${vt(rv)}$ die Ebene $E: ${gleichung(n, d)}$? (Grad, zwei Dezimalstellen)`,
        teile: [
          {
            typ: "zahl",
            einheit: "°",
            loesung: `inGrad(asin(abs(${s})/(${l}*sqrt(${q}))))`,
            fehler: Math.abs(phi - 45) > 0.5 ? [{ wert: `inGrad(acos(abs(${s})/(${l}*sqrt(${q}))))`, meldung: "Mit dem Kosinus erhältst du den Winkel zum Normalvektor. Der Winkel zur Ebene braucht den Sinus." }] : undefined,
          },
        ],
        hinweis: "$\\sin\\varphi = \\dfrac{|\\vec n\\cdot\\vec r|}{|\\vec n|\\,|\\vec r|}$",
        loesung: `**Ansatz:** Wir verwenden den Normalvektor $\\vec n = ${vt(n)}$ der Ebene. Der Winkel zwischen $\\vec r$ und $\\vec n$ ist der Ergänzungswinkel, darum steht der Sinus.\n---\n$\\vec n\\cdot\\vec r = ${s}$, $|\\vec n| = ${l}$, $|\\vec r| = \\sqrt{${q}}$. Also $\\sin\\varphi = \\dfrac{|${s}|}{${l}\\sqrt{${q}}} \\approx ${tz(Math.abs(s) / (l * Math.sqrt(q)), 4)}$.\n---\n$\\varphi \\approx ${tz(phi, 2)}°$.`,
      };
    },
  }),
  drill({
    id: "ag-d-abstand-punkt-ebene",
    kapitel: "analytische-geometrie",
    titel: "Abstand Punkt–Ebene (HNF)",
    niveau: 1,
    erzeuge: (r) => {
      const { n, l } = normal3(r);
      const d = r.int(-15, 15);
      const Q = vek(r, 3, 6);
      const w = dot(n, Q) - d;
      return {
        angabe: `Berechne den Abstand von $${pt("Q", Q)}$ zur Ebene $E: ${gleichung(n, d)}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `abs(${dot(n, Q)} - (${d}))/${l}`,
            fehler: w !== 0 ? [{ wert: String(Math.abs(w)), meldung: "Das ist erst der Betrag im Zähler. Teile noch durch die Länge des Normalvektors." }] : undefined,
          },
        ],
        hinweis: "$d(Q, E) = \\dfrac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$",
        loesung: `**Ansatz:** Hessesche Normalform im Raum. Länge des Normalvektors: $|\\vec n| = \\sqrt{${n.map((x) => x * x).join(" + ")}} = ${l}$.\n---\nPunkt einsetzen, rechte Seite abziehen, Betrag nehmen und teilen: $d(Q, E) = \\dfrac{|${dot(n, Q)} - ${kl(d)}|}{${l}} = \\dfrac{${Math.abs(w)}}{${l}}${gerundet(Math.abs(w), l)}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-lotfuss-ebene",
    kapitel: "analytische-geometrie",
    titel: "Lotfußpunkt auf einer Ebene",
    niveau: 2,
    erzeuge: (r) => {
      const { n, l } = normal3(r);
      const F = vek(r, 3, 4);
      const k = r.intOhne0(-2, 2);
      const Q = plus(F, mal(k, n));
      const d = dot(n, F);
      return {
        angabe: `Bestimme den Lotfußpunkt $F$ von $${pt("Q", Q)}$ auf $E: ${gleichung(n, d)}$ und den Abstand $d(Q, E)$.`,
        teile: [
          { typ: "vektor", label: "$F$", namen: ["x", "y", "z"], loesung: ausdr(F) },
          { typ: "zahl", label: "$d(Q, E)$", loesung: `${Math.abs(k)}*${l}`, fehler: l !== 1 ? [{ wert: String(Math.abs(k)), meldung: "$|t|$ ist nicht der Abstand. Multipliziere mit der Länge des Normalvektors." }] : undefined },
        ],
        hinweis: "Lot $X = Q + t\\,\\vec n$ in $E$ einsetzen.",
        loesung: `**Ansatz:** Das Lot von $Q$ auf $E$ zeigt in Richtung des Normalvektors: $X = ${vt(Q)} + t${vt(n)}$.\n---\nIn $E$ einsetzen: $${lin(dot(n, Q), dot(n, n))} = ${d}$, also $t = ${-k}$.\n---\nLotfußpunkt $${pt("F", F)}$. Abstand $|t|\\cdot|\\vec n| = ${Math.abs(k)}\\cdot ${l} = ${Math.abs(k) * l}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-schnittgerade",
    kapitel: "analytische-geometrie",
    titel: "Richtung der Schnittgeraden zweier Ebenen",
    niveau: 2,
    erzeuge: (r) => {
      let n1 = vekNichtNull(r, 3, 3);
      let n2 = vekNichtNull(r, 3, 3);
      while (istNull(kreuz(n1, n2))) {
        n1 = vekNichtNull(r, 3, 3);
        n2 = vekNichtNull(r, 3, 3);
      }
      const c = kreuz(n1, n2);
      const d1 = r.int(-6, 6);
      const d2 = r.int(-6, 6);
      return {
        angabe: `Gib einen Richtungsvektor der Schnittgeraden von $E_1: ${gleichung(n1, d1)}$ und $E_2: ${gleichung(n2, d2)}$ an.`,
        teile: [{ typ: "vektor", vielfaches: true, loesung: ausdr(c) }],
        hinweis: "Die Richtung steht normal auf beiden Normalvektoren.",
        loesung: `**Ansatz:** Die Schnittgerade liegt in beiden Ebenen. Ihre Richtung steht also normal auf beiden Normalvektoren, und das leistet das Kreuzprodukt: $\\vec r = ${vt(n1)}\\times${vt(n2)}$.\n---\n$\\vec r = ${vt(c)}$${istNull(minus(kuerze(c), c)) ? "" : `, gekürzt $${vt(kuerze(c))}$`}.\n---\nProbe: $\\vec n_1\\cdot\\vec r = ${dot(n1, c)}$ und $\\vec n_2\\cdot\\vec r = ${dot(n2, c)}$. Beide Skalarprodukte sind null.`,
      };
    },
  }),
  drill({
    id: "ag-d-kreis-mr",
    kapitel: "analytische-geometrie",
    titel: "Mittelpunkt und Radius eines Kreises",
    niveau: 1,
    erzeuge: (r) => {
      const M = vek(r, 2, 6);
      const rad = r.int(1, 8);
      const a = -2 * M[0];
      const b = -2 * M[1];
      const c = M[0] * M[0] + M[1] * M[1] - rad * rad;
      return {
        angabe: `Bestimme Mittelpunkt und Radius des Kreises $x^2 + y^2${summand(a, "x")}${summand(b, "y")}${summand(c, "")} = 0$.`,
        teile: [
          { typ: "vektor", label: "$M$", namen: ["x", "y"], loesung: ausdr(M), fehler: istNull(M) ? undefined : [{ wert: ausdr(mal(-1, M)), meldung: "Die Vorzeichen sind umgekehrt. Aus $(x - m)^2$ folgt die Koordinate $+m$." }] },
          { typ: "zahl", label: "$r$", loesung: `sqrt(${M[0] * M[0]} + ${M[1] * M[1]} - (${c}))`, fehler: rad > 1 ? [{ wert: String(rad * rad), meldung: "Das ist $r^2$. Der Radius ist die Wurzel." }] : undefined },
        ],
        hinweis: "Quadratisch ergänzen, getrennt für $x$ und $y$.",
        loesung: `**Ansatz:** Quadratische Ergänzung getrennt für $x$ und $y$, die zusätzlichen Quadrate wieder ausgleichen.\n---\n$${quadrat("x", M[0])} + ${quadrat("y", M[1])} = ${M[0] * M[0]} + ${M[1] * M[1]} ${c < 0 ? "+" : "-"} ${Math.abs(c)} = ${rad * rad}$.\n---\nAblesen: $${pt("M", M)}$ und $r = \\sqrt{${rad * rad}} = ${rad}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-kreis-gerade-lage",
    kapitel: "analytische-geometrie",
    titel: "Passante, Tangente oder Sekante?",
    niveau: 2,
    erzeuge: (r) => {
      const M = vek(r, 2, 4);
      const { n, l } = normal2(r);
      const rad = r.wahl([5, 10, 13, 15]);
      const fall = r.int(0, 2); // 0 Passante, 1 Tangente, 2 Sekante
      const dist = fall === 0 ? rad + r.int(1, 4) : fall === 1 ? rad : r.int(0, rad - 1);
      const cc = dot(n, M) - r.vorzeichen() * dist * l;
      return {
        angabe: `Wie liegt die Gerade $g: ${gleichung(n, cc)}$ zum Kreis $${quadrat("x", M[0])} + ${quadrat("y", M[1])} = ${rad * rad}$?`,
        teile: [{ typ: "auswahl", optionen: ["Passante", "Tangente", "Sekante"], richtig: [fall], fehler: [{ wert: (fall + 1) % 3, meldung: "Vergleiche den Abstand $d(M, g)$ aus der HNF genau mit dem Radius." }] }],
        hinweis: "Berechne $d(M, g)$ mit der HNF und vergleiche mit $r$.",
        loesung: `**Ansatz:** Die Lage hängt nur vom Abstand des Mittelpunkts $${pt("M", M)}$ von der Geraden ab, verglichen mit $r = ${rad}$.\n---\nHNF: $d(M, g) = \\dfrac{|${dot(n, M)} - ${kl(cc)}|}{${l}} = ${dist}$.\n---\n${fall === 0 ? `$${dist} > ${rad}$: Passante, kein gemeinsamer Punkt.` : fall === 1 ? `$${dist} = ${rad}$: Tangente, genau ein Berührpunkt.` : `$${dist} < ${rad}$: Sekante, zwei Schnittpunkte.`}`,
      };
    },
  }),
  drill({
    id: "ag-d-kugel-mr",
    kapitel: "analytische-geometrie",
    titel: "Mittelpunkt und Radius einer Kugel",
    niveau: 1,
    erzeuge: (r) => {
      const M = vek(r, 3, 5);
      const rad = r.int(1, 7);
      const k = M.map((m) => -2 * m);
      const c = dot(M, M) - rad * rad;
      return {
        angabe: `Bestimme Mittelpunkt und Radius der Kugel $x^2 + y^2 + z^2${summand(k[0], "x")}${summand(k[1], "y")}${summand(k[2], "z")}${summand(c, "")} = 0$.`,
        teile: [
          { typ: "vektor", label: "$M$", namen: ["x", "y", "z"], loesung: ausdr(M), fehler: istNull(M) ? undefined : [{ wert: ausdr(mal(-1, M)), meldung: "Die Vorzeichen sind umgekehrt. Aus $(x - m)^2$ folgt die Koordinate $+m$." }] },
          { typ: "zahl", label: "$r$", loesung: `sqrt(${dot(M, M)} - (${c}))`, fehler: rad > 1 ? [{ wert: String(rad * rad), meldung: "Das ist $r^2$. Der Radius ist die Wurzel." }] : undefined },
        ],
        hinweis: "Quadratisch ergänzen in $x$, $y$ und $z$.",
        loesung: `**Ansatz:** Quadratische Ergänzung in allen drei Variablen, die zusätzlichen Quadrate ausgleichen.\n---\n$${quadrat("x", M[0])} + ${quadrat("y", M[1])} + ${quadrat("z", M[2])} = ${dot(M, M)} ${c < 0 ? "+" : "-"} ${Math.abs(c)} = ${rad * rad}$.\n---\nAblesen: $${pt("M", M)}$ und $r = ${rad}$.`,
      };
    },
  }),
  drill({
    id: "ag-d-tangente-kreis",
    kapitel: "analytische-geometrie",
    titel: "Tangente an einen Kreis",
    niveau: 2,
    erzeuge: (r) => {
      const M = vek(r, 2, 5);
      const [p, q, rad] = r.wahl([[3, 4, 5], [4, 3, 5], [0, 5, 5], [5, 0, 5], [6, 8, 10], [5, 12, 13], [1, 0, 1], [0, 2, 2]] as const);
      const w = [p * r.vorzeichen(), q * r.vorzeichen()];
      const T = plus(M, w);
      const c = dot(w, T);
      return {
        angabe: `Der Punkt $${pt("T", T)}$ liegt auf dem Kreis $${quadrat("x", M[0])} + ${quadrat("y", M[1])} = ${rad * rad}$. Bestimme die Tangente in $T$ als $(a, b, c)$ für $ax + by = c$ (jedes Vielfache ist richtig).`,
        teile: [{ typ: "vektor", namen: ["a", "b", "c"], vielfaches: true, loesung: ausdr([...w, c]) }],
        hinweis: "Die Tangente steht normal auf $\\overrightarrow{MT}$.",
        loesung: `**Ansatz:** Die Tangente steht normal auf dem Berührradius. Darum ist $\\overrightarrow{MT} = ${vt(w)}$ ihr Normalvektor.\n---\nDie rechte Seite gehört zum Berührpunkt: $c = \\overrightarrow{MT}\\cdot T = ${c}$, also $t: ${gleichung(w, c)}$.\n---\nKontrolle mit der HNF: $d(M, t) = \\dfrac{|${dot(w, M)} - ${kl(c)}|}{${rad}} = ${rad} = r$.`,
      };
    },
  }),
  drill({
    id: "ag-d-schnittkreis",
    kapitel: "analytische-geometrie",
    titel: "Schnittkreis von Kugel und Ebene",
    niveau: 3,
    erzeuge: (r) => {
      const M = vek(r, 3, 4);
      const { n, l } = normal3(r);
      const t = r.int(1, 2);
      const rho = r.int(2, 9);
      const s = r.vorzeichen();
      const Mp = plus(M, mal(s * t, n));
      const d = dot(n, Mp);
      const dist = t * l;
      const rq = rho * rho + dist * dist;
      const radius = Math.sqrt(rq);
      return {
        angabe: `Die Kugel $K$ hat den Mittelpunkt $${pt("M", M)}$ und den Radius $${Number.isInteger(radius) ? radius : `\\sqrt{${rq}}`}$. Sie wird von $E: ${gleichung(n, d)}$ geschnitten. Bestimme Mittelpunkt und Radius des Schnittkreises.`,
        teile: [
          { typ: "vektor", label: "Mittelpunkt", namen: ["x", "y", "z"], loesung: ausdr(Mp), fehler: [{ wert: ausdr(M), meldung: "Das ist der Kugelmittelpunkt. Der Mittelpunkt des Schnittkreises ist der Lotfußpunkt in der Ebene." }] },
          { typ: "zahl", label: "Radius", loesung: `sqrt(${rq} - ${dist * dist})`, fehler: Math.abs(radius - dist - rho) > 0.01 ? [{ wert: `sqrt(${rq}) - ${dist}`, meldung: "Der Radius ist nicht $r - d$, sondern $\\sqrt{r^2 - d^2}$ (Pythagoras)." }] : undefined },
        ],
        hinweis: "Abstand $d(M, E)$ mit der HNF, dann $\\rho = \\sqrt{r^2 - d^2}$. Mittelpunkt: Lotfußpunkt.",
        loesung: `**Ansatz:** Ist der Abstand kleiner als der Radius, entsteht ein Schnittkreis. Sein Radius folgt aus Pythagoras, sein Mittelpunkt ist der Lotfußpunkt von $M$.\n---\n$d(M, E) = \\dfrac{|${dot(n, M)} - ${kl(d)}|}{${l}} = ${dist}$.\n---\n$\\rho = \\sqrt{${rq} - ${dist * dist}} = ${rho}$.\n---\nLot $X = M + t\\,\\vec n$ in $E$: $${lin(dot(n, M), l * l)} = ${d}$, also $t = ${s * t}$. Mittelpunkt $${pt("M'", Mp)}$.`,
      };
    },
  }),
];
