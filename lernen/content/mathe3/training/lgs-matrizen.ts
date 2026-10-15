import { drill, summand, bruchTex, tz, type Drill, type Rng } from "@/lib/lernen/training";

const KAP = "lgs-matrizen";
const VAR3 = ["x", "y", "z"];

/** Lineare linke Seite als LaTeX, z. B. [2, -1, 0] -> "2x - y" */
function lin(k: number[], v: string[] = VAR3): string {
  let s = "";
  k.forEach((c, i) => (s += summand(c, v[i], s === "")));
  return s || "0";
}

/** Gleichungssystem als aligned-Block */
function system(A: number[][], b: number[], v: string[] = VAR3): string {
  return `$$\\begin{aligned} ${A.map((r, i) => `${lin(r, v)} &= ${b[i]}`).join("\\\\ ")} \\end{aligned}$$`;
}

/** Matrix als pmatrix */
function pm(A: number[][]): string {
  return `\\begin{pmatrix} ${A.map((r) => r.join(" & ")).join(" \\\\ ")} \\end{pmatrix}`;
}

/** Matrix als vmatrix (Determinante) */
function vm(A: number[][]): string {
  return pm(A).replace(/pmatrix/g, "vmatrix");
}

/** Erweiterte Koeffizientenmatrix */
function aug(A: number[][], b: number[]): string {
  const n = A[0].length;
  return `\\left(\\begin{array}{${"r".repeat(n)}|r} ${A.map((r, i) => [...r, b[i]].join(" & ")).join(" \\\\ ")} \\end{array}\\right)`;
}

/** mathjs-Literal einer Matrix */
const mj = (A: number[][]) => `[${A.map((r) => `[${r.join(",")}]`).join(",")}]`;

/** Zeilenoperation "Z - l·Q" als Text, l = 0 -> "" */
function op(ziel: string, l: number, quelle: string): string {
  if (l === 0) return "";
  const b = Math.abs(l);
  return `${ziel} ${l > 0 ? "-" : "+"} ${b === 1 ? "" : `${b}\\cdot `}${quelle}`;
}

const klammer = (v: number) => (v < 0 ? `(${v})` : `${v}`);

function det2(A: number[][]): number {
  return A[0][0] * A[1][1] - A[0][1] * A[1][0];
}
function det3(A: number[][]): number {
  const [[a, b, c], [d, e, f], [g, h, i]] = A;
  return a * e * i + b * f * g + c * d * h - c * e * g - a * f * h - b * d * i;
}
function mal(A: number[][], B: number[][]): number[][] {
  return A.map((r) => B[0].map((_, j) => r.reduce((s, a, k) => s + a * B[k][j], 0)));
}
/** Matrix mit Spalte j durch b ersetzt */
function ersetze(A: number[][], j: number, b: number[]): number[][] {
  return A.map((r, i) => r.map((a, k) => (k === j ? b[i] : a)));
}
function zufallsMatrix(r: Rng, m: number, n: number, lo: number, hi: number): number[][] {
  return Array.from({ length: m }, () => Array.from({ length: n }, () => r.int(lo, hi)));
}
const gleich = (u: number[], v: number[]) => u.length === v.length && u.every((x, i) => x === v[i]);

export const DRILLS: Drill[] = [
  drill({
    id: "lm-d-2x2",
    kapitel: KAP,
    titel: "System mit zwei Unbekannten: Additionsverfahren",
    niveau: 1,
    erzeuge: (r) => {
      let a = 0, b = 0, c = 0, d = 0;
      do {
        [a, b, c, d] = [r.intOhne0(-5, 5), r.intOhne0(-5, 5), r.intOhne0(-5, 5), r.intOhne0(-5, 5)];
      } while (a * d - b * c === 0);
      const x = r.int(-5, 5), y = r.int(-5, 5);
      const e = a * x + b * y, f = c * x + d * y;
      const D = a * d - b * c;
      const v = ["x", "y"];
      return {
        angabe: `Löse das Gleichungssystem mit dem Additionsverfahren:\n${system([[a, b], [c, d]], [e, f], v)}`,
        teile: [
          {
            typ: "vektor",
            label: "Lösung $(x, y)$",
            namen: ["x", "y"],
            loesung: [`det(${mj([[e, b], [f, d]])})/(${D})`, `det(${mj([[a, e], [c, f]])})/(${D})`],
            fehler: x !== y ? [{ wert: [String(y), String(x)], meldung: "Die Zahlen stimmen, aber die Reihenfolge nicht. Im Paar $(x, y)$ steht zuerst $x$." }] : undefined,
          },
        ],
        hinweis: `Multipliziere die erste Gleichung mit $${d}$ und die zweite mit $${b}$. Dann steht vor $y$ in beiden dieselbe Zahl, und beim Subtrahieren fällt $y$ weg.`,
        loesung:
          `**Ansatz:** Wir beseitigen $y$. Dazu soll vor $y$ in beiden Gleichungen dieselbe Zahl stehen. Wir rechnen $${klammer(d)}\\cdot\\text{I} - ${klammer(b)}\\cdot\\text{II}$, denn vor $y$ steht dann $${klammer(b)}\\cdot ${klammer(d)} - ${klammer(d)}\\cdot ${klammer(b)} = 0$.` +
          `\n---\nVor $x$ bleibt $${klammer(a)}\\cdot ${klammer(d)} - ${klammer(b)}\\cdot ${klammer(c)} = ${D}$, rechts $${klammer(d)}\\cdot ${klammer(e)} - ${klammer(b)}\\cdot ${klammer(f)} = ${d * e - b * f}$. Also $${D}x = ${d * e - b * f}$ und $x = ${x}$.` +
          `\n---\nEinsetzen in die erste Gleichung: $${a}\\cdot ${klammer(x)} + ${klammer(b)}\\,y = ${e}$, also $${b}y = ${e - a * x}$ und $y = ${y}$.` +
          `\n---\n**Probe** in der zweiten Gleichung: $${c}\\cdot ${klammer(x)} + ${klammer(d)}\\cdot ${klammer(y)} = ${f}$. Das stimmt, also $L = \\{(${x}, ${y})\\}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-gauss3",
    kapitel: KAP,
    titel: "System mit drei Unbekannten: Gauß-Verfahren",
    niveau: 2,
    erzeuge: (r) => {
      // A = L·U mit ganzzahligen Faktoren: Elimination bleibt ganzzahlig
      const l21 = r.int(-3, 3), l31 = r.int(-3, 3), l32 = r.intOhne0(-2, 2);
      const U = [
        [1, r.int(-3, 3), r.int(-3, 3)],
        [0, r.wahl([1, -1, 2, -2]), r.int(-3, 3)],
        [0, 0, r.wahl([1, -1, 2, -2, 3])],
      ];
      const L = [[1, 0, 0], [l21, 1, 0], [l31, l32, 1]];
      const A = mal(L, U);
      const loes = [r.int(-4, 4), r.int(-4, 4), r.int(-4, 4)];
      const b = A.map((z) => z[0] * loes[0] + z[1] * loes[1] + z[2] * loes[2]);
      const c = U.map((z) => z[0] * loes[0] + z[1] * loes[1] + z[2] * loes[2]);
      // nach Schritt 1: Zeile III = l32 * (neue Zeile II) + Zeile III von U
      const zw3 = [0, l32 * U[1][1], l32 * U[1][2] + U[2][2]];
      const zw = [U[0], U[1], zw3];
      const zwb = [c[0], c[1], l32 * c[1] + c[2]];
      const ops1 = [op("\\text{II}", l21, "\\text{I}"), op("\\text{III}", l31, "\\text{I}")].filter(Boolean).join(",\\ ");
      const [x, y, z] = loes;
      return {
        angabe: `Löse mit dem Gauß-Verfahren:\n${system(A, b)}`,
        teile: [
          {
            typ: "vektor",
            label: "Lösung $(x, y, z)$",
            namen: ["x", "y", "z"],
            loesung: [0, 1, 2].map((j) => `det(${mj(ersetze(A, j, b))})/det(${mj(A)})`),
          },
        ],
        hinweis: "Die erste Zeile hat das Pivotelement $1$. Beseitige damit $x$ in den Zeilen II und III. Danach beseitigst du $y$ in Zeile III.",
        loesung:
          `**Ansatz:** Gauß-Verfahren. Wir schreiben die erweiterte Matrix auf und erzeugen unter der Diagonale Nullen, Spalte für Spalte: $${aug(A, b)}$` +
          `\n---\nErste Spalte${ops1 ? `: $${ops1}$` : ": Unter der $1$ stehen schon Nullen"}. Die erste Zeile bleibt unverändert: $${aug(zw, zwb)}$` +
          `\n---\nZweite Spalte: $${op("\\text{III}", l32, "\\text{II}")}$ beseitigt $y$ in Zeile III. Das ergibt die Zeilenstufenform $${aug(U, c)}$` +
          `\n---\nRückwärts einsetzen: Zeile III bedeutet $${lin([U[2][2]], ["z"])} = ${c[2]}$, also $z = ${z}$. Zeile II bedeutet $${lin(U[1].slice(1), ["y", "z"])} = ${c[1]}$, mit $z = ${z}$ folgt $y = ${y}$. Zeile I ergibt dann $x = ${x}$.` +
          `\n---\n**Probe** in der ersten Gleichung: $${A[0][0]}\\cdot ${klammer(x)} + ${klammer(A[0][1])}\\cdot ${klammer(y)} + ${klammer(A[0][2])}\\cdot ${klammer(z)} = ${b[0]}$. Die anderen beiden prüfst du genauso. Also $L = \\{(${x}, ${y}, ${z})\\}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-det2",
    kapitel: KAP,
    titel: "Determinante einer 2×2-Matrix",
    niveau: 1,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 2, 2, -9, 9);
      const [[a, b], [c, d]] = A;
      return {
        angabe: `Berechne $\\det${pm(A)}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `det(${mj(A)})`,
            fehler: b * c !== 0 ? [{ wert: String(a * d + b * c), meldung: "Die beiden Produkte werden **subtrahiert**: Hauptdiagonale minus Nebendiagonale." }] : undefined,
          },
        ],
        hinweis: "Produkt der Hauptdiagonale (links oben mal rechts unten) minus Produkt der Nebendiagonale.",
        loesung:
          `**Ansatz:** Für eine $2\\times 2$-Matrix gilt $\\det = ad - bc$, also Hauptdiagonale minus Nebendiagonale.` +
          `\n---\nHauptdiagonale: $${klammer(a)}\\cdot ${klammer(d)} = ${a * d}$. Nebendiagonale: $${klammer(b)}\\cdot ${klammer(c)} = ${b * c}$.` +
          `\n---\n$\\det = ${a * d} - ${klammer(b * c)} = ${det2(A)}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-det3",
    kapitel: KAP,
    titel: "Determinante einer 3×3-Matrix mit Sarrus",
    niveau: 2,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 3, 3, -4, 5);
      const [[a, b, c], [d, e, f], [g, h, i]] = A;
      const plus = [a * e * i, b * f * g, c * d * h];
      const minus = [c * e * g, a * f * h, b * d * i];
      const sp = plus.reduce((s, v) => s + v, 0), sm = minus.reduce((s, v) => s + v, 0);
      return {
        angabe: `Berechne mit der Regel von Sarrus: $\\det${pm(A)}$`,
        teile: [
          {
            typ: "zahl",
            loesung: `det(${mj(A)})`,
            fehler: sm !== 0 ? [{ wert: String(sp + sm), meldung: "Die Produkte der Minus-Diagonalen werden **abgezogen**, nicht addiert." }] : undefined,
          },
        ],
        hinweis: "Schreib die ersten beiden Spalten rechts daneben. Drei Produkte von links oben nach rechts unten zählen mit Plus, drei von rechts oben nach links unten mit Minus.",
        loesung:
          `**Ansatz:** Regel von Sarrus. Wir hängen die ersten beiden Spalten rechts an und bilden die sechs Diagonalprodukte.` +
          `\n---\nPlus-Diagonalen: $${klammer(a)}\\cdot${klammer(e)}\\cdot${klammer(i)} + ${klammer(b)}\\cdot${klammer(f)}\\cdot${klammer(g)} + ${klammer(c)}\\cdot${klammer(d)}\\cdot${klammer(h)} = ${plus.map(klammer).join(" + ")} = ${sp}$` +
          `\n---\nMinus-Diagonalen: $${klammer(c)}\\cdot${klammer(e)}\\cdot${klammer(g)} + ${klammer(a)}\\cdot${klammer(f)}\\cdot${klammer(h)} + ${klammer(b)}\\cdot${klammer(d)}\\cdot${klammer(i)} = ${minus.map(klammer).join(" + ")} = ${sm}$` +
          `\n---\nDie Summe der Minus-Diagonalen wird abgezogen: $\\det = ${sp} - ${klammer(sm)} = ${sp - sm}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-inv2",
    kapitel: KAP,
    titel: "Inverse einer 2×2-Matrix",
    niveau: 2,
    erzeuge: (r) => {
      let A: number[][] = [];
      do A = zufallsMatrix(r, 2, 2, -6, 6);
      while (![1, -1, 2, -2, 4, -4].includes(det2(A)));
      const [[a, b], [c, d]] = A;
      const D = det2(A);
      const adj = [[d, -b], [-c, a]];
      const fehler: { wert: string[]; meldung: string }[] = [];
      if (Math.abs(D) !== 1) fehler.push({ wert: [d, -b, -c, a].map(String), meldung: `Es fehlt noch das Teilen durch $ad - bc = ${D}$.` });
      if (a !== d) fehler.push({ wert: [`${a}/(${D})`, `${-b}/(${D})`, `${-c}/(${D})`, `${d}/(${D})`], meldung: "Die beiden Einträge der Hauptdiagonale werden **vertauscht**." });
      return {
        angabe: `Berechne die Inverse von $A = ${pm(A)}$ und gib ihre Einträge zeilenweise an, exakt oder als Dezimalzahl.`,
        teile: [
          {
            typ: "vektor",
            label: "$A^{-1}$ zeilenweise",
            namen: ["a11", "a12", "a21", "a22"],
            loesung: [`${d}/(${D})`, `${-b}/(${D})`, `${-c}/(${D})`, `${a}/(${D})`],
            fehler: fehler.length ? fehler : undefined,
          },
        ],
        hinweis: "Diagonale tauschen, Nebendiagonale mit Minus versehen, durch $ad - bc$ teilen.",
        loesung:
          `**Ansatz:** Formel für $2\\times 2$-Matrizen. Sie funktioniert nur, wenn $ad - bc \\neq 0$ ist. Darum prüfen wir das zuerst.` +
          `\n---\n$ad - bc = ${klammer(a)}\\cdot${klammer(d)} - ${klammer(b)}\\cdot${klammer(c)} = ${D} \\neq 0$, also ist $A$ invertierbar.` +
          `\n---\nDiagonale tauschen, Nebendiagonale mit Minus versehen, durch $${D}$ teilen: $A^{-1} = \\dfrac{1}{${D}}${pm(adj)} = \\begin{pmatrix} ${bruchTex(d, D)} & ${bruchTex(-b, D)} \\\\ ${bruchTex(-c, D)} & ${bruchTex(a, D)} \\end{pmatrix}$` +
          `\n---\n**Probe:** $A\\cdot A^{-1}$ muss $E$ ergeben. Zum Beispiel erste Zeile mal erste Spalte: $\\frac{${klammer(a)}\\cdot${klammer(d)} + ${klammer(b)}\\cdot${klammer(-c)}}{${D}} = \\frac{${D}}{${D}} = 1$.`,
      };
    },
  }),
  drill({
    id: "lm-d-matmul2",
    kapitel: KAP,
    titel: "Produkt zweier 2×2-Matrizen",
    niveau: 1,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 2, 2, -4, 5);
      const B = zufallsMatrix(r, 2, 2, -4, 5);
      const C = mal(A, B);
      const hadamard = [A[0][0] * B[0][0], A[0][1] * B[0][1], A[1][0] * B[1][0], A[1][1] * B[1][1]];
      const ausdruck = (i: number, j: number) => `${A[i][0]}*(${B[0][j]}) + ${A[i][1]}*(${B[1][j]})`;
      const schritt = (i: number, j: number) =>
        `$c_{${i + 1}${j + 1}} = ${klammer(A[i][0])}\\cdot${klammer(B[0][j])} + ${klammer(A[i][1])}\\cdot${klammer(B[1][j])} = ${C[i][j]}$`;
      return {
        angabe: `Berechne $AB$ für $A = ${pm(A)}$ und $B = ${pm(B)}$. Gib die Einträge zeilenweise an.`,
        teile: [
          {
            typ: "vektor",
            label: "$AB$ zeilenweise",
            namen: ["c11", "c12", "c21", "c22"],
            loesung: [ausdruck(0, 0), ausdruck(0, 1), ausdruck(1, 0), ausdruck(1, 1)],
            fehler: gleich(hadamard, C.flat()) ? undefined : [{ wert: hadamard.map(String), meldung: "Du hast Eintrag für Eintrag multipliziert. Beim Matrixprodukt rechnet man **Zeile mal Spalte** und addiert die Produkte." }],
          },
        ],
        hinweis: "Eintrag $c_{ij}$: Zeile $i$ von $A$ mal Spalte $j$ von $B$, also zwei Produkte addieren.",
        loesung: `**Ansatz:** Jeder Eintrag des Produkts ist „Zeile von $A$ mal Spalte von $B$“: entsprechende Einträge multiplizieren und addieren.\n---\nZeile 1: ${schritt(0, 0)}, ${schritt(0, 1)}\n---\nZeile 2: ${schritt(1, 0)}, ${schritt(1, 1)}\n---\nErgebnis: $AB = ${pm(C)}$`,
      };
    },
  }),
  drill({
    id: "lm-d-matmul23",
    kapitel: KAP,
    titel: "Produkt einer 2×3- mit einer 3×2-Matrix",
    niveau: 2,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 2, 3, -3, 4);
      const B = zufallsMatrix(r, 3, 2, -3, 4);
      const C = mal(A, B);
      const ausdruck = (i: number, j: number) => A[i].map((a, k) => `${a}*(${B[k][j]})`).join(" + ");
      const schritt = (i: number, j: number) =>
        `$c_{${i + 1}${j + 1}} = ${A[i].map((a, k) => `${klammer(a)}\\cdot${klammer(B[k][j])}`).join(" + ")} = ${C[i][j]}$`;
      return {
        angabe: `Berechne $AB$ für $A = ${pm(A)}$ und $B = ${pm(B)}$. Welches Format hat das Ergebnis? Gib die Einträge zeilenweise an.`,
        teile: [{ typ: "vektor", label: "$AB$ zeilenweise", namen: ["c11", "c12", "c21", "c22"], loesung: [ausdruck(0, 0), ausdruck(0, 1), ausdruck(1, 0), ausdruck(1, 1)] }],
        hinweis: "$(2\\times 3)(3\\times 2) = 2\\times 2$. Jeder Eintrag ist eine Summe aus drei Produkten.",
        loesung: `**Ansatz:** Formatregel prüfen: $(2\\times \\boxed{3})\\cdot(\\boxed{3}\\times 2)$. Die inneren Zahlen stimmen überein, das Produkt ist eine $2\\times 2$-Matrix.\n---\n${schritt(0, 0)}\n\n${schritt(0, 1)}\n---\n${schritt(1, 0)}\n\n${schritt(1, 1)}\n---\nErgebnis: $AB = ${pm(C)}$`,
      };
    },
  }),
  drill({
    id: "lm-d-transp",
    kapitel: KAP,
    titel: "Transponieren und addieren",
    niveau: 1,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 2, 3, -5, 6);
      const B = zufallsMatrix(r, 3, 2, -5, 6);
      const k = r.wahl([2, 3, -1, -2]);
      const AT = [0, 1, 2].map((i) => [A[0][i], A[1][i]]);
      const kB = B.map((z) => z.map((v) => k * v));
      const C = AT.map((z, i) => z.map((v, j) => v + kB[i][j]));
      return {
        angabe: `Für $A = ${pm(A)}$ und $B = ${pm(B)}$ berechne $A^T ${k < 0 ? "-" : "+"} ${Math.abs(k) === 1 ? "" : Math.abs(k)}B$. Gib die Einträge zeilenweise an.`,
        teile: [
          {
            typ: "vektor",
            label: "Ergebnis zeilenweise ($3\\times 2$)",
            namen: ["c11", "c12", "c21", "c22", "c31", "c32"],
            loesung: [0, 1, 2].flatMap((i) => [0, 1].map((j) => `${A[j][i]} + (${k})*(${B[i][j]})`)),
          },
        ],
        hinweis: "Beim Transponieren wird die erste Zeile von $A$ zur ersten Spalte von $A^T$. Dann Eintrag für Eintrag addieren.",
        loesung:
          `**Ansatz:** Zuerst transponieren, damit beide Matrizen das Format $3\\times 2$ haben. Erst dann darf man addieren.` +
          `\n---\nDie Zeilen von $A$ werden die Spalten von $A^T$: $A^T = ${pm(AT)}$. Außerdem ist $${k === -1 ? "-" : k}B = ${pm(kB)}$.` +
          `\n---\nEintrag für Eintrag addieren: $${pm(C)}$`,
      };
    },
  }),
  drill({
    id: "lm-d-cramer2",
    kapitel: KAP,
    titel: "Cramersche Regel für zwei Unbekannte",
    niveau: 2,
    erzeuge: (r) => {
      let A: number[][] = [];
      do A = zufallsMatrix(r, 2, 2, -6, 6);
      while (det2(A) === 0 || A.flat().includes(0));
      const x = r.int(-5, 5), y = r.int(-5, 5);
      const b = A.map((z) => z[0] * x + z[1] * y);
      const D = det2(A), Dx = det2(ersetze(A, 0, b)), Dy = det2(ersetze(A, 1, b));
      const plusD = A[0][0] * A[1][1] + A[0][1] * A[1][0];
      return {
        angabe: `Löse mit der Cramerschen Regel:\n${system(A, b, ["x", "y"])}`,
        teile: [
          { typ: "zahl", label: "$D$", loesung: `det(${mj(A)})`, fehler: plusD !== D ? [{ wert: String(plusD), meldung: "Die Determinante ist Hauptdiagonale **minus** Nebendiagonale." }] : undefined },
          { typ: "zahl", label: "$D_x$", loesung: `det(${mj(ersetze(A, 0, b))})` },
          { typ: "vektor", label: "Lösung $(x, y)$", namen: ["x", "y"], loesung: [`det(${mj(ersetze(A, 0, b))})/det(${mj(A)})`, `det(${mj(ersetze(A, 1, b))})/det(${mj(A)})`] },
        ],
        hinweis: "Für $D_x$ wird die $x$-Spalte durch die rechte Seite ersetzt, für $D_y$ die $y$-Spalte.",
        loesung:
          `**Ansatz:** Cramersche Regel $x = \\frac{D_x}{D}$, $y = \\frac{D_y}{D}$. Sie gilt nur bei $D \\neq 0$, das prüfen wir zuerst.` +
          `\n---\n$D = ${vm(A)} = ${D}$. Das ist nicht $0$, also gibt es genau eine Lösung.` +
          `\n---\n$D_x = ${vm(ersetze(A, 0, b))} = ${Dx}$ (erste Spalte durch die rechte Seite ersetzt), $\\;D_y = ${vm(ersetze(A, 1, b))} = ${Dy}$ (zweite Spalte ersetzt).` +
          `\n---\n$x = \\frac{${Dx}}{${D}} = ${x}$ und $y = \\frac{${Dy}}{${D}} = ${y}$. **Probe** in der ersten Gleichung: $${A[0][0]}\\cdot ${klammer(x)} + ${klammer(A[0][1])}\\cdot ${klammer(y)} = ${b[0]}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-loesbarkeit",
    kapitel: KAP,
    titel: "Eine, keine oder unendlich viele Lösungen?",
    niveau: 2,
    erzeuge: (r) => {
      const fall = r.int(0, 2); // 0 eindeutig, 1 keine, 2 unendlich
      let r1: number[] = [], r2: number[] = [];
      const unabhaengig = (u: number[], v: number[]) =>
        u[1] * v[2] - u[2] * v[1] !== 0 || u[2] * v[0] - u[0] * v[2] !== 0 || u[0] * v[1] - u[1] * v[0] !== 0;
      do {
        r1 = [1, r.int(-3, 3), r.int(-3, 3)];
        r2 = [r.int(-3, 3), r.intOhne0(-3, 3), r.int(-3, 3)];
      } while (!unabhaengig(r1, r2));
      const b1 = r.int(-6, 6), b2 = r.int(-6, 6);
      const al = r.intOhne0(-2, 2), be = r.intOhne0(-2, 2);
      let r3: number[], b3: number, delta = 0;
      if (fall === 0) {
        do r3 = [r.int(-3, 3), r.int(-3, 3), r.int(-3, 3)];
        while (det3([r1, r2, r3]) === 0);
        b3 = r.int(-6, 6);
      } else {
        r3 = r1.map((v, i) => al * v + be * r2[i]);
        delta = fall === 1 ? r.intOhne0(-3, 3) : 0;
        b3 = al * b1 + be * b2 + delta;
      }
      const A = [r1, r2, r3];
      const b = [b1, b2, b3];
      const D = det3(A);
      const kombi = `${al === 1 ? "" : al === -1 ? "-" : `${al}\\cdot `}\\text{I} ${be < 0 ? "-" : "+"} ${Math.abs(be) === 1 ? "" : `${Math.abs(be)}\\cdot `}\\text{II}`;
      const weg =
        fall === 0
          ? `$\\det A = ${D} \\neq 0$. Nach dem Hauptsatz ist dann $\\operatorname{rg}(A) = 3$, und das System hat **genau eine** Lösung.` +
            `\n---\nGeometrisch schneiden sich die drei Ebenen in genau einem Punkt.`
          : `$\\det A = 0$, also gibt es nicht genau eine Lösung. Genauer: Die linke Seite von Zeile III ist $${kombi}$.` +
            `\n---\nPassend wäre deshalb die rechte Seite $${al}\\cdot${klammer(b1)} + ${klammer(be)}\\cdot${klammer(b2)} = ${al * b1 + be * b2}$. Gegeben ist $${b3}$.` +
            `\n---\n` +
            (fall === 1
              ? `$${al * b1 + be * b2} \\neq ${b3}$: Rechnet man $\\text{III} - (${kombi})$, bleibt die Zeile $0 = ${delta}$, ein Widerspruch. $\\operatorname{rg}(A) = 2 < 3 = \\operatorname{rg}(A \\mid b)$: **keine** Lösung.`
              : `Die rechten Seiten passen, Zeile III wird zur Nullzeile. $\\operatorname{rg}(A) = \\operatorname{rg}(A \\mid b) = 2 < 3$: **unendlich viele** Lösungen mit einem Parameter.`);
      return {
        angabe: `Wie viele Lösungen hat das System?\n${system(A, b)}`,
        teile: [
          {
            typ: "auswahl",
            optionen: ["genau eine", "keine", "unendlich viele"],
            richtig: [fall],
            fehler: [0, 1, 2]
              .filter((i) => i !== fall)
              .map((i) => ({
                wert: i,
                meldung:
                  i === 0
                    ? "Berechne $\\det A$. Ist sie $0$, gibt es nie genau eine Lösung."
                    : fall === 0
                      ? "Die Determinante ist nicht $0$. Dann gibt es für jede rechte Seite genau eine Lösung."
                      : "Vergleiche die rechte Seite von Zeile III mit der passenden Kombination der ersten beiden rechten Seiten.",
              })),
          },
        ],
        hinweis: "Berechne die Determinante. Ist sie $0$, prüfe, ob Zeile III eine Kombination der ersten beiden ist und ob die rechten Seiten dazu passen.",
        loesung: `**Ansatz:** Zuerst die Determinante. Ist sie nicht $0$, gibt es genau eine Lösung. Ist sie $0$, entscheiden die rechten Seiten.\n---\n${weg}`,
      };
    },
  }),
  drill({
    id: "lm-d-param2x2",
    kapitel: KAP,
    titel: "Parameter für den Sonderfall bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.intOhne0(-4, 4), e = r.intOhne0(-4, 4);
      const k = r.wahl([2, 3, -1, -2, -3]);
      const f = r.int(-6, 6);
      const unendlich = r.zufall() < 0.4;
      const c = unendlich ? k * f : k * f + r.intOhne0(-4, 4);
      const b = k * e;
      const a = k * d;
      return {
        angabe: `Gegeben ist das System\n$$\\begin{aligned} a\\,x ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}y &= ${c}\\\\ ${lin([d, e], ["x", "y"])} &= ${f} \\end{aligned}$$\nFür welchen Wert von $a$ hat es nicht genau eine Lösung, und wie viele Lösungen hat es dann?`,
        teile: [
          { typ: "zahl", label: "$a$", loesung: `(${b})*(${d})/(${e})` },
          {
            typ: "auswahl",
            label: "Für diesen Wert hat das System",
            optionen: ["keine Lösung", "unendlich viele Lösungen"],
            richtig: [unendlich ? 1 : 0],
            fehler: [{ wert: unendlich ? 0 : 1, meldung: "Vergleiche auch die rechten Seiten: Ist die erste rechte Seite dasselbe Vielfache der zweiten wie die linken Seiten?" }],
          },
        ],
        hinweis: "$D = a_1 b_2 - a_2 b_1$ als Term in $a$ aufstellen und $D = 0$ setzen.",
        loesung:
          `**Ansatz:** Genau eine Lösung gibt es bei $D \\neq 0$. Wir suchen den Wert, für den $D = 0$ ist, und vergleichen dann die Gleichungen.` +
          `\n---\n$D = a\\cdot ${klammer(e)} - ${klammer(b)}\\cdot ${klammer(d)} = ${lin([e], ["a"])} ${b * d > 0 ? "-" : "+"} ${Math.abs(b * d)}$. $D = 0$ für $a = ${a}$.` +
          `\n---\nDann ist die linke Seite der ersten Gleichung das $${k}$-Fache der zweiten: $${lin([a, b], ["x", "y"])} = ${c}$, und $${k}\\cdot(${lin([d, e], ["x", "y"])}) = ${k * f}$.` +
          `\n---\n` +
          (unendlich
            ? `Auch die rechten Seiten passen ($${c} = ${k}\\cdot ${klammer(f)}$): Beide Gleichungen beschreiben dieselbe Gerade, **unendlich viele** Lösungen.`
            : `Die rechten Seiten passen nicht ($${c} \\neq ${k * f}$): parallele, verschiedene Geraden, **keine** Lösung.`),
      };
    },
  }),
  drill({
    id: "lm-d-paramloesung",
    kapitel: KAP,
    titel: "Eine Lösung eines Systems mit unendlich vielen Lösungen",
    niveau: 2,
    erzeuge: (r) => {
      // Zeile I: x + p y + q z = s;  Zeile II = m·I + (0, 1, w | v)
      const p = r.int(-3, 3), q = r.int(-3, 3), s = r.int(-6, 6);
      const m = r.intOhne0(-3, 3), w = r.intOhne0(-3, 3), v = r.int(-5, 5);
      const r2 = [m, m * p + 1, m * q + w];
      const s2 = m * s + v;
      const t = r.int(-3, 3);
      const y = v - w * t;
      const x = s - p * y - q * t;
      return {
        angabe: `Das System\n${system([[1, p, q], r2], [s, s2])}\nhat unendlich viele Lösungen. Bestimme die Lösung mit $z = ${t}$.`,
        teile: [{ typ: "vektor", label: `Lösung mit $z = ${t}$`, namen: ["x", "y", "z"], loesung: [`${s} - (${p})*(${v} - (${w})*(${t})) - (${q})*(${t})`, `${v} - (${w})*(${t})`, `${t}`] }],
        hinweis: `Beseitige $x$ mit $\\text{II} - ${klammer(m)}\\cdot\\text{I}$. Setze dann $z = ${t}$ ein.`,
        loesung:
          `**Ansatz:** Zwei Gleichungen, drei Unbekannte: $z$ ist frei wählbar. Wir beseitigen $x$, setzen $z = ${t}$ ein und rechnen rückwärts.` +
          `\n---\n$${op("\\text{II}", m, "\\text{I}")}$: $${lin([1, w], ["y", "z"])} = ${v}$, also $y = ${v === 0 ? "" : v}${summand(-w, "z", v === 0)}$.` +
          `\n---\nMit $z = ${t}$: $y = ${y}$. Aus Zeile I: $x = ${s} - ${klammer(p)}\\cdot${klammer(y)} - ${klammer(q)}\\cdot${klammer(t)} = ${x}$.` +
          `\n---\nLösung: $(${x}, ${y}, ${t})$. **Probe** in Zeile II: $${r2[0]}\\cdot${klammer(x)} + ${klammer(r2[1])}\\cdot${klammer(y)} + ${klammer(r2[2])}\\cdot${klammer(t)} = ${s2}$.`,
      };
    },
  }),
  drill({
    id: "lm-d-abbildung",
    kapitel: KAP,
    titel: "Einen Punkt drehen oder spiegeln",
    niveau: 1,
    erzeuge: (r) => {
      const abb = r.wahl([
        { name: "die Spiegelung an der $x$-Achse", M: [[1, 0], [0, -1]], falsch: [[-1, 0], [0, 1]], text: "Spiegelung an der $y$-Achse" },
        { name: "die Spiegelung an der $y$-Achse", M: [[-1, 0], [0, 1]], falsch: [[1, 0], [0, -1]], text: "Spiegelung an der $x$-Achse" },
        { name: "die Spiegelung an der Geraden $y = x$", M: [[0, 1], [1, 0]], falsch: [[0, -1], [-1, 0]], text: "Spiegelung an der Geraden $y = -x$" },
        { name: "die Drehung um $90°$ gegen den Uhrzeigersinn", M: [[0, -1], [1, 0]], falsch: [[0, 1], [-1, 0]], text: "Drehung im Uhrzeigersinn" },
        { name: "die Drehung um $180°$", M: [[-1, 0], [0, -1]], falsch: [[1, 0], [0, -1]], text: "Spiegelung an der $x$-Achse" },
      ]);
      let p = 0, q = 0;
      do [p, q] = [r.intOhne0(-6, 6), r.intOhne0(-6, 6)];
      while (Math.abs(p) === Math.abs(q));
      const bild = mal(abb.M, [[p], [q]]).map((z) => z[0]);
      const falsch = mal(abb.falsch, [[p], [q]]).map((z) => z[0]);
      return {
        angabe: `Die Matrix $M = ${pm(abb.M)}$ beschreibt ${abb.name}. Berechne das Bild des Punktes $P(${p} \\mid ${q})$.`,
        teile: [
          {
            typ: "vektor",
            label: "Bildpunkt",
            namen: ["x", "y"],
            loesung: [`${abb.M[0][0]}*(${p}) + ${abb.M[0][1]}*(${q})`, `${abb.M[1][0]}*(${p}) + ${abb.M[1][1]}*(${q})`],
            fehler: gleich(falsch, bild) ? undefined : [{ wert: falsch.map(String), meldung: `Das wäre das Bild bei der ${abb.text}. Rechne Zeile mal Vektor mit der gegebenen Matrix.` }],
          },
        ],
        hinweis: "Schreib den Punkt als Spaltenvektor und rechne Matrix mal Vektor: jede Zeile mit dem Vektor verrechnen.",
        loesung:
          `**Ansatz:** Eine Matrix bildet den Punkt $(x \\mid y)$ auf $M\\cdot\\begin{pmatrix} x\\\\ y \\end{pmatrix}$ ab.` +
          `\n---\n$${pm(abb.M)}\\begin{pmatrix} ${p}\\\\ ${q} \\end{pmatrix} = \\begin{pmatrix} ${klammer(abb.M[0][0])}\\cdot ${klammer(p)} + ${klammer(abb.M[0][1])}\\cdot ${klammer(q)}\\\\ ${klammer(abb.M[1][0])}\\cdot ${klammer(p)} + ${klammer(abb.M[1][1])}\\cdot ${klammer(q)} \\end{pmatrix} = \\begin{pmatrix} ${bild[0]}\\\\ ${bild[1]} \\end{pmatrix}$` +
          `\n---\nDer Bildpunkt ist $P'(${bild[0]} \\mid ${bild[1]})$. Kontrolle mit einer Skizze: Der Punkt muss dort liegen, wo ${abb.name} ihn hinbringt.`,
      };
    },
  }),
  drill({
    id: "lm-d-ebenen",
    kapitel: KAP,
    titel: "Wie liegen zwei Ebenen?",
    niveau: 2,
    erzeuge: (r) => {
      const n1 = [r.intOhne0(-4, 4), r.intOhne0(-4, 4), r.intOhne0(-4, 4)];
      const d1 = r.int(-6, 6);
      const fall = r.int(0, 2); // 0 schneiden, 1 parallel verschieden, 2 identisch
      const k = r.wahl([2, 3, -1, -2]);
      let n2: number[];
      let d2: number;
      if (fall === 0) {
        do n2 = [r.int(-4, 4), r.int(-4, 4), r.intOhne0(-4, 4)];
        while (n1[1] * n2[2] - n1[2] * n2[1] === 0 && n1[2] * n2[0] - n1[0] * n2[2] === 0 && n1[0] * n2[1] - n1[1] * n2[0] === 0);
        d2 = r.int(-6, 6);
      } else {
        n2 = n1.map((v) => k * v);
        d2 = fall === 2 ? k * d1 : k * d1 + r.intOhne0(-3, 3);
      }
      const optionen = ["Sie schneiden sich in einer Geraden.", "Sie sind parallel und verschieden.", "Sie sind identisch."];
      const meldungen = [
        "Die Normalvektoren sind Vielfache voneinander. Dann schneiden sich die Ebenen nicht in einer Geraden.",
        fall === 0 ? "Die Normalvektoren sind keine Vielfachen voneinander. Parallele Ebenen hätten parallele Normalvektoren." : "Vergleiche auch die rechten Seiten. Sie stehen im selben Verhältnis wie die Normalvektoren.",
        fall === 0 ? "Identische Ebenen hätten parallele Normalvektoren. Hier sind sie keine Vielfachen voneinander." : "Die linken Seiten passen zusammen, die rechten Seiten aber nicht. Die Ebenen sind nicht identisch.",
      ];
      return {
        angabe: `Wie liegen die Ebenen $${lin(n1)} = ${d1}$ und $${lin(n2)} = ${d2}$ zueinander?`,
        teile: [
          {
            typ: "auswahl",
            optionen,
            richtig: [fall],
            fehler: [0, 1, 2].filter((i) => i !== fall).map((i) => ({ wert: i, meldung: meldungen[i] })),
          },
        ],
        hinweis: "Lies die Normalvektoren an den Koeffizienten ab. Sind sie Vielfache voneinander? Wenn ja, vergleiche auch die rechten Seiten.",
        loesung:
          `**Ansatz:** Die Normalvektoren entscheiden, ob die Ebenen parallel sind. Die rechten Seiten entscheiden dann zwischen „parallel“ und „identisch“.` +
          `\n---\nNormalvektoren: $(${n1.join(", ")})$ und $(${n2.join(", ")})$. ` +
          (fall === 0
            ? "Der zweite ist kein Vielfaches des ersten."
            : `Der zweite ist das $${k}$-Fache des ersten. Das $${k}$-Fache der ersten rechten Seite ist $${k * d1}$, gegeben ist $${d2}$.`) +
          `\n---\n` +
          [
            "Die Ebenen **schneiden sich in einer Geraden**. Das System hat unendlich viele Lösungen mit einem Parameter.",
            "Die Ebenen sind **parallel und verschieden**. Das System hat keine Lösung.",
            "Die Ebenen sind **identisch**. Das System hat unendlich viele Lösungen mit zwei Parametern.",
          ][fall],
      };
    },
  }),
  drill({
    id: "lm-d-mischung",
    kapitel: KAP,
    titel: "Zwei Lösungen mischen",
    niveau: 2,
    erzeuge: (r) => {
      let p1 = 0, p2 = 0, x = 0, y = 0, p = 0;
      do {
        p1 = r.wahl([10, 15, 20, 25, 30, 40]);
        p2 = r.wahl([50, 60, 70, 75, 80, 90]);
        x = r.int(2, 12);
        y = r.int(2, 12);
        p = (p1 * x + p2 * y) / (x + y);
      } while (!Number.isInteger(p) || x === y);
      const V = x + y;
      return {
        angabe: `Man hat eine $${p1}\\,\\%$-ige und eine $${p2}\\,\\%$-ige Säurelösung. Daraus sollen $${V}$ Liter einer $${p}\\,\\%$-igen Lösung gemischt werden. Wie viele Liter jeder Lösung braucht man?`,
        teile: [
          { typ: "zahl", label: `$${p1}\\,\\%$-ige Lösung`, einheit: "l", loesung: `${V}*(${p2} - ${p})/(${p2} - ${p1})`, fehler: [{ wert: String(y), meldung: "Das ist die Menge der anderen Lösung. Prüfe, welche Unbekannte zu welcher Lösung gehört." }] },
          { typ: "zahl", label: `$${p2}\\,\\%$-ige Lösung`, einheit: "l", loesung: `${V}*(${p} - ${p1})/(${p2} - ${p1})` },
        ],
        hinweis: `Eine Gleichung für das Volumen, eine für die reine Säure: $x + y = ${V}$ und $${tz(p1 / 100)}x + ${tz(p2 / 100)}y = ${tz((p / 100) * V)}$.`,
        loesung:
          `**Ansatz:** $x$ sei die Menge der $${p1}\\,\\%$-igen, $y$ die der $${p2}\\,\\%$-igen Lösung in Litern. Volumen: $x + y = ${V}$. Reine Säure: $${tz(p1 / 100)}x + ${tz(p2 / 100)}y = ${tz(p / 100)}\\cdot ${V} = ${tz((p / 100) * V)}$.` +
          `\n---\nAus der ersten Gleichung $x = ${V} - y$. Eingesetzt: $${tz((p1 / 100) * V)} + ${tz((p2 - p1) / 100)}\\,y = ${tz((p / 100) * V)}$, also $y = ${y}$.` +
          `\n---\nDann $x = ${V} - ${y} = ${x}$. **Probe:** $${tz(p1 / 100)}\\cdot ${x} + ${tz(p2 / 100)}\\cdot ${y} = ${tz((p / 100) * V)}$ Liter Säure in $${V}$ Litern, das sind $${p}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "lm-d-bedarf",
    kapitel: KAP,
    titel: "Zweistufige Bedarfsrechnung",
    niveau: 2,
    erzeuge: (r) => {
      const A = zufallsMatrix(r, 2, 2, 1, 4);
      const B = zufallsMatrix(r, 2, 2, 1, 4);
      const C = mal(A, B);
      const auftrag = [r.int(1, 6) * 5, r.int(1, 6) * 5];
      const bedarf = mal(C, [[auftrag[0]], [auftrag[1]]]).map((z) => z[0]);
      const falschC = mal(B, A);
      const falsch = mal(falschC, [[auftrag[0]], [auftrag[1]]]).map((z) => z[0]);
      return {
        angabe: `Aus den Rohstoffen $R_1, R_2$ werden die Zwischenprodukte $Z_1, Z_2$ und daraus die Endprodukte $E_1, E_2$ hergestellt. Die Bedarfsmatrizen geben die Einheiten pro Stück an. Ihre Zeilen gehören zu dem, was verbraucht wird, ihre Spalten zu dem, was entsteht: $A_{RZ} = ${pm(A)}$ und $B_{ZE} = ${pm(B)}$. Wie viele Einheiten der Rohstoffe braucht ein Auftrag über $${auftrag[0]}$ Stück $E_1$ und $${auftrag[1]}$ Stück $E_2$?`,
        teile: [
          {
            typ: "vektor",
            label: "Bedarf $(R_1, R_2)$",
            namen: ["R1", "R2"],
            loesung: bedarf.map(String),
            fehler: gleich(falsch, bedarf) ? undefined : [{ wert: falsch.map(String), meldung: "Du hast $B_{ZE}\\cdot A_{RZ}$ verwendet. Die inneren Indizes müssen passen: $A_{RZ}\\cdot B_{ZE}$ mit $Z$ in der Mitte." }],
          },
        ],
        hinweis: "Berechne zuerst $C_{RE} = A_{RZ}\\cdot B_{ZE}$ und dann $C_{RE}$ mal den Auftragsvektor.",
        loesung:
          `**Ansatz:** Die Bedarfsmatrix $C_{RE} = A_{RZ}\\cdot B_{ZE}$ gibt die Rohstoffe pro Endprodukt an. Der Bedarf ist $C_{RE}$ mal Auftrag.` +
          `\n---\n$C_{RE} = ${pm(A)}${pm(B)} = ${pm(C)}$` +
          `\n---\n$C_{RE}\\begin{pmatrix} ${auftrag[0]}\\\\ ${auftrag[1]} \\end{pmatrix} = \\begin{pmatrix} ${C[0][0]}\\cdot ${auftrag[0]} + ${C[0][1]}\\cdot ${auftrag[1]}\\\\ ${C[1][0]}\\cdot ${auftrag[0]} + ${C[1][1]}\\cdot ${auftrag[1]} \\end{pmatrix} = \\begin{pmatrix} ${bedarf[0]}\\\\ ${bedarf[1]} \\end{pmatrix}$` +
          `\n---\nAntwort: $${bedarf[0]}$ Einheiten $R_1$ und $${bedarf[1]}$ Einheiten $R_2$.`,
      };
    },
  }),
  drill({
    id: "lm-d-parabel",
    kapitel: KAP,
    titel: "Parabel durch drei Punkte",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-3, 3), b = r.int(-4, 4), c = r.int(-5, 5);
      const xs = r.mische([-2, -1, 0, 1, 2, 3]).slice(0, 3).sort((u, v) => u - v);
      const f = (x: number) => a * x * x + b * x + c;
      const [x1, x2, x3] = xs;
      const [y1, y2, y3] = xs.map(f);
      // nach Abziehen von Gleichung 1 und Teilen durch (xi - x1): (xi + x1) a + b = (yi - y1)/(xi - x1)
      const q2 = (y2 - y1) / (x2 - x1), q3 = (y3 - y1) / (x3 - x1);
      // Term "k·a + b" als LaTeX, k = 0 -> "b"
      const ab = (k: number) => (k === 0 ? "b" : `${k === 1 ? "" : k === -1 ? "-" : k}a + b`);
      const gl = (x: number, y: number) => `${x * x === 1 ? "" : x * x}a ${x < 0 ? "-" : "+"} ${Math.abs(x) === 1 ? "" : Math.abs(x)}b + c = ${y}`.replace("0a + 0b + c", "c").replace("0a - 0b + c", "c");
      return {
        angabe: `Bestimme $a$, $b$ und $c$ so, dass der Graph von $f(x) = ax^2 + bx + c$ durch die Punkte $(${x1} \\mid ${y1})$, $(${x2} \\mid ${y2})$ und $(${x3} \\mid ${y3})$ geht.`,
        teile: [{ typ: "vektor", label: "$(a, b, c)$", namen: ["a", "b", "c"], loesung: [String(a), String(b), String(c)] }],
        hinweis: "Jeder Punkt liefert eine Gleichung $f(x_P) = y_P$. Ziehe die erste Gleichung von den anderen beiden ab, dann fällt $c$ weg.",
        loesung:
          `**Ansatz:** Liegt ein Punkt auf dem Graphen, gilt $f(x_P) = y_P$. Das ergibt drei lineare Gleichungen für $a$, $b$, $c$:\n$$\\begin{aligned} ${gl(x1, y1)}\\\\ ${gl(x2, y2)}\\\\ ${gl(x3, y3)} \\end{aligned}$$` +
          `\n---\nZweite minus erste Gleichung, geteilt durch $${x2 - x1}$: $${ab(x2 + x1)} = ${q2}$. Dritte minus erste, geteilt durch $${x3 - x1}$: $${ab(x3 + x1)} = ${q3}$.` +
          `\n---\nDie beiden neuen Gleichungen voneinander abziehen: $${x3 - x2}a = ${q3 - q2}$, also $a = ${a}$. Dann $b = ${b}$ und aus der ersten Gleichung $c = ${c}$.` +
          `\n---\nErgebnis: $f(x) = ${a === 1 ? "" : a === -1 ? "-" : a}x^2${summand(b, "x")}${summand(c, "")}$. **Probe** mit dem dritten Punkt: $f(${x3}) = ${y3}$.`,
      };
    },
  }),
];
