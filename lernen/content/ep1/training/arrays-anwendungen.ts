import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 15 (2D-Anwendungen: Sudoku, Bilder, Flood-Fill). Jede Referenzrechnung bildet die
 * Java-Methoden aus dem Kapitel nach (Randprüfung, Ganzzahldivision, Flood-Fill in der Vierer-Nachbarschaft mit
 * Markierung vor den Selbstaufrufen). Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "arrays-anwendungen";

type Fehler = { wert: string; meldung: string };

/** Fehlerbilder, die zufällig mit der richtigen Antwort übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: Fehler[]): Fehler[] | undefined {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const rest = fehler.filter((f) => norm(f.wert) !== norm(loesung));
  const eindeutig = rest.filter((f, i) => rest.findIndex((g) => norm(g.wert) === norm(f.wert)) === i);
  return eindeutig.length ? eindeutig : undefined;
}

/** Für Zahl-Teile: Fehlerbilder mit anderem Zahlenwert als die Lösung */
function nurAndereZahl(loesung: number, fehler: { wert: number; meldung: string }[]): Fehler[] | undefined {
  // Standardtoleranz der Zahl-Teile ist 0,5 % relativ: knappe Fehlerbilder würden als richtig gelten
  const rest = fehler.filter((f) => Math.abs(f.wert - loesung) > 0.006 * Math.abs(loesung) + 1e-9);
  const eindeutig = rest.filter((f, i) => rest.findIndex((g) => Math.abs(g.wert - f.wert) < 1e-9) === i);
  return eindeutig.length ? eindeutig.map((f) => ({ wert: String(f.wert), meldung: f.meldung })) : undefined;
}

function klasse(name: string, methoden: string, main: string): string {
  return `public class ${name} {\n${methoden}\n\n    public static void main(String[] args) {\n${main}\n    }\n}\n`;
}

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

const V4: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const V8: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const imFeld = <T>(g: T[][], z: number, s: number) => z >= 0 && z < g.length && s >= 0 && s < g[z].length;

function zeichenRaster(r: Rng, zeilen: number, spalten: number, anteil: number, voll: string, leer: string): string[][] {
  return Array.from({ length: zeilen }, () => Array.from({ length: spalten }, () => (r.zufall() < anteil ? voll : leer)));
}

/** Java-Literal für ein char[][] */
function charLiteral(g: string[][], tiefe: number): string {
  const ein = " ".repeat(tiefe);
  return `{\n${g.map((z) => `${ein}    {${z.map((c) => `'${c}'`).join(", ")}}`).join(",\n")}\n${ein}}`;
}

function intLiteral(g: number[][]): string {
  return `{${g.map((z) => `{${z.join(", ")}}`).join(", ")}}`;
}

const zeilenText = (g: string[][]) => g.map((z) => z.join("")).join("\n");
const rasterBlock = (g: string[][]) => "```\n" + zeilenText(g) + "\n```";

/** Flood-Fill auf einem Kopien-Raster; liefert Anzahl und Ergebnis */
function fuelle(g0: string[][], z: number, s: number, alt: string, neu: string, nachbarn = V4): { anzahl: number; g: string[][] } {
  const g = g0.map((x) => [...x]);
  let anzahl = 0;
  const f = (a: number, b: number) => {
    if (!imFeld(g, a, b) || g[a][b] !== alt) return;
    g[a][b] = neu;
    anzahl++;
    for (const [dz, ds] of nachbarn) f(a + dz, b + ds);
  };
  f(z, s);
  return { anzahl, g };
}

function inseln(g0: string[][], nachbarn = V4): number {
  let g = g0.map((x) => [...x]);
  let n = 0;
  for (let z = 0; z < g.length; z++)
    for (let s = 0; s < g[z].length; s++)
      if (g[z][s] === "#") {
        n++;
        g = fuelle(g, z, s, "#", ".", nachbarn).g;
      }
  return n;
}

const DRUCKE = `        for (int z = 0; z < f.length; z++) {\n            for (int s = 0; s < f[z].length; s++) {\n                System.out.print(f[z][s]);\n            }\n            System.out.println();\n        }`;

export const DRILLS: Drill[] = [
  drill({
    id: "aw-d-blockstart",
    kapitel: K,
    titel: "Startzelle eines Sudoku-Blocks",
    niveau: 1,
    erzeuge: (r) => {
      const z = r.int(0, 8);
      const s = r.int(0, 8);
      const z0 = Math.floor(z / 3) * 3;
      const s0 = Math.floor(s / 3) * 3;
      return {
        angabe: `In welchem 3×3-Block liegt die Sudoku-Zelle \`(${z}, ${s})\`? Gib die Startzeile \`z0\` und die Startspalte \`s0\` des Blocks an.`,
        teile: [
          {
            typ: "zahl",
            label: "Startzeile z0",
            loesung: `floor(${z}/3)*3`,
            fehler: nurAndereZahl(z0, [
              { wert: z % 3, meldung: `Das ist \`${z} % 3\`, die Position innerhalb des Blocks. Die Startzeile ist \`${z} / 3 * 3\`.` },
              { wert: Math.floor(z / 3), meldung: `\`${z} / 3\` ist die Blocknummer. Mal 3 wird daraus die erste Zeile des Blocks.` },
            ]),
          },
          {
            typ: "zahl",
            label: "Startspalte s0",
            loesung: `floor(${s}/3)*3`,
            fehler: nurAndereZahl(s0, [
              { wert: s % 3, meldung: `Das ist \`${s} % 3\`. Die Startspalte ist \`${s} / 3 * 3\`.` },
              { wert: s, meldung: "Die Startspalte ist die linke Spalte des Blocks, nicht die Spalte der Zelle selbst." },
            ]),
          },
        ],
        hinweis: "Rechne `z / 3 * 3` mit Ganzzahldivision: erst teilen und den Rest weglassen, dann mal 3.",
        loesung: `**Ansatz:** \`z0 = z / 3 * 3\` und \`s0 = s / 3 * 3\`.\n---\n\`${z} / 3 = ${Math.floor(z / 3)}\`, mal 3 ergibt ${z0}. \`${s} / 3 = ${Math.floor(s / 3)}\`, mal 3 ergibt ${s0}.\n---\nDer Block umfasst die Zeilen ${z0} bis ${z0 + 2} und die Spalten ${s0} bis ${s0 + 2}.`,
      };
    },
  }),

  drill({
    id: "aw-d-nachbarn-anzahl",
    kapitel: K,
    titel: "Wie viele Nachbarn liegen im Feld?",
    niveau: 1,
    erzeuge: (r) => {
      const zeilen = r.int(3, 7);
      const spalten = r.int(3, 8);
      const art = r.wahl([4, 8] as const);
      const lage = r.int(0, 2);
      let z: number;
      let s: number;
      if (lage === 0) {
        z = r.wahl([0, zeilen - 1]);
        s = r.wahl([0, spalten - 1]);
      } else if (lage === 1) {
        z = r.wahl([0, zeilen - 1]);
        s = r.int(1, spalten - 2);
      } else {
        z = r.int(1, zeilen - 2);
        s = r.int(1, spalten - 2);
      }
      const nachbarn = (art === 4 ? V4 : V8).map(([dz, ds]) => [z + dz, s + ds]).filter(([a, b]) => a >= 0 && a < zeilen && b >= 0 && b < spalten);
      const n = nachbarn.length;
      return {
        angabe: `Ein Raster hat ${zeilen} Zeilen und ${spalten} Spalten. Wie viele Nachbarn der Zelle \`(${z}, ${s})\` liegen in der **${art === 4 ? "Vierer" : "Achter"}-Nachbarschaft** im Feld?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(n),
            fehler: nurAndereZahl(n, [
              { wert: art, meldung: `Nicht jede Zelle hat ${art} Nachbarn im Feld. Streiche alle mit Zeile -1 oder ${zeilen} und alle mit Spalte -1 oder ${spalten}.` },
              {
                wert: (art === 4 ? V8 : V4).map(([dz, ds]) => [z + dz, s + ds]).filter(([a, b]) => a >= 0 && a < zeilen && b >= 0 && b < spalten).length,
                meldung: art === 4 ? "Gefragt ist die Vierer-Nachbarschaft: nur oben, unten, links und rechts, keine schrägen Zellen." : "In der Achter-Nachbarschaft zählen auch die vier schrägen Zellen mit.",
              },
            ]),
          },
        ],
        hinweis: `Gültig sind die Zeilen 0 bis ${zeilen - 1} und die Spalten 0 bis ${spalten - 1}. Schreib alle Nachbarn auf und streiche die ungültigen.`,
        loesung: `**Ansatz:** Alle ${art} möglichen Nachbarn aufschreiben und nur die mit gültiger Zeile und Spalte zählen.\n---\nIm Feld liegen ${nachbarn.map(([a, b]) => `\`(${a}, ${b})\``).join(", ")}.\n---\nDas sind ${n} Nachbarn.`,
      };
    },
  }),

  drill({
    id: "aw-d-minen",
    kapitel: K,
    titel: "Minen in der Umgebung zählen",
    niveau: 2,
    erzeuge: (r) => {
      let g = zeichenRaster(r, 4, 5, 0.3, "*", ".");
      const z = r.int(0, 3);
      const s = r.int(0, 4);
      g[z][s] = ".";
      const zaehle = (nb: [number, number][]) => nb.filter(([dz, ds]) => imFeld(g, z + dz, s + ds) && g[z + dz][s + ds] === "*").length;
      // sicherstellen, dass mindestens eine Mine in der Umgebung liegt
      if (zaehle(V8) === 0) {
        const kand = V8.map(([dz, ds]) => [z + dz, s + ds]).filter(([a, b]) => imFeld(g, a, b));
        const [a, b] = r.wahl(kand);
        g = g.map((x) => [...x]);
        g[a][b] = "*";
      }
      const n8 = zaehle(V8);
      const n4 = zaehle(V4);
      const methoden = einruecken(
        `public static int zaehleMinen(char[][] f, int z, int s) {\n    int anzahl = 0;\n    for (int nz = z - 1; nz <= z + 1; nz++) {\n        for (int ns = s - 1; ns <= s + 1; ns++) {\n            if (nz >= 0 && nz < f.length && ns >= 0 && ns < f[nz].length && f[nz][ns] == '*') {\n                anzahl++;\n            }\n        }\n    }\n    return anzahl;\n}`,
        4,
      );
      const code = klasse("Minen", methoden, `        char[][] f = ${charLiteral(g, 8)};\n        System.out.println(zaehleMinen(f, ${z}, ${s}));`);
      const loesung = `${n8}\n`;
      const minen = V8.map(([dz, ds]) => [z + dz, s + ds]).filter(([a, b]) => imFeld(g, a, b) && g[a][b] === "*");
      return {
        angabe: `Die Methode \`zaehleMinen\` zählt die Minen \`'*'\` im 3×3-Quadrat um \`(z, s)\`. Die Zelle selbst ist frei. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: String(n4), meldung: "Die Schleifen laufen über das ganze 3×3-Quadrat. Auch die schrägen Nachbarn zählen mit." }]),
          },
        ],
        hinweis: "Bestimme die bis zu acht Nachbarn, die im Feld liegen, und zähle die Sterne darunter.",
        loesung: `**Ansatz:** Das 3×3-Quadrat um \`(${z}, ${s})\` durchgehen, die Randprüfung beachten und Sterne zählen.\n---\nMinen liegen bei ${minen.map(([a, b]) => `\`(${a}, ${b})\``).join(", ")}.\n---\nAusgabe: ${n8}.`,
      };
    },
  }),

  drill({
    id: "aw-d-mittel",
    kapitel: K,
    titel: "Mittelwertfilter an einem Pixel",
    niveau: 1,
    erzeuge: (r) => {
      const b = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => r.int(0, 99)));
      const z = r.int(0, 2);
      const s = r.int(0, 3);
      const werte: number[] = [];
      for (let a = z - 1; a <= z + 1; a++) for (let c = s - 1; c <= s + 1; c++) if (imFeld(b, a, c)) werte.push(b[a][c]);
      const summe = werte.reduce((x, y) => x + y, 0);
      const n = werte.length;
      const erg = Math.floor(summe / n);
      const mittelFehler: Fehler[] = [
        ...(nurAndereZahl(erg, [
          { wert: Math.floor(summe / 9), meldung: `Am Rand liegen nur ${n} Pixel im Bild. Geteilt wird durch deren Anzahl, nicht durch 9.` },
        ]) ?? []),
        ...(summe % n !== 0
          ? [{ wert: String(Math.round((summe / n) * 100) / 100), meldung: "`summe / anzahl` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg." }]
          : []),
      ];
      return {
        angabe: `Ein Mittelwertfilter ersetzt jeden Pixel durch den ganzzahligen Durchschnitt aus ihm und seinen vorhandenen Nachbarn in der Achter-Nachbarschaft (Java: \`summe / anzahl\`). Welchen neuen Wert bekommt der Pixel \`(${z}, ${s})\` im Bild?\n\n\`\`\`\n${b.map((x) => x.map((v) => String(v).padStart(3)).join(" ")).join("\n")}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: `floor((${werte.join(" + ")}) / ${n})`,
            // Ganzzahliges Ergebnis: enge absolute Toleranz, sonst gälte der ungekürzte Durchschnitt (z. B. 98,4 statt 98) als richtig
            toleranz: 0.01,
            fehler: mittelFehler.length ? mittelFehler : undefined,
          },
        ],
        hinweis: "Nimm das 3×3-Quadrat um den Pixel, streiche, was außerhalb liegt, und teile die Summe ganzzahlig durch die Anzahl.",
        loesung: `**Ansatz:** Pixel des 3×3-Quadrats im Bild sammeln, addieren, ganzzahlig durch ihre Anzahl teilen.\n---\nIm Bild liegen ${n} Pixel: ${werte.join(", ")}. Ihre Summe ist ${summe}.\n---\n\`${summe} / ${n}\` ergibt ganzzahlig ${erg}.`,
      };
    },
  }),

  drill({
    id: "aw-d-faltung",
    kapitel: K,
    titel: "Faltung an einem Pixel",
    niveau: 2,
    erzeuge: (r) => {
      const masken: { name: string; m: number[][] }[] = [
        { name: "Kantenmaske", m: [[1, 0, -1], [2, 0, -2], [1, 0, -1]] },
        { name: "Kreuzmaske", m: [[0, 1, 0], [1, 2, 1], [0, 1, 0]] },
        { name: "Laplace-Maske", m: [[0, -1, 0], [-1, 4, -1], [0, -1, 0]] },
        { name: "Diagonalmaske", m: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] },
      ];
      const { name, m } = r.wahl(masken);
      const b = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => r.int(0, 9)));
      const z = r.int(0, 2);
      const s = r.int(0, 3);
      const produkte: string[] = [];
      let summe = 0;
      let verrutscht = 0;
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
          const bz = z + i - 1;
          const bs = s + j - 1;
          if (imFeld(b, bz, bs) && m[i][j] !== 0) {
            produkte.push(`${m[i][j]} · ${b[bz][bs]}`);
            summe += m[i][j] * b[bz][bs];
          }
          if (imFeld(b, z + i, s + j)) verrutscht += m[i][j] * b[z + i][s + j];
        }
      return {
        angabe: `Berechne die Faltung des Bilds mit der ${name} \`${intLiteral(m)}\` am Pixel \`(${z}, ${s})\`. Die Mitte der Maske liegt auf dem Pixel, Pixel außerhalb des Bilds werden weggelassen.\n\n\`\`\`\n${b.map((x) => x.join(" ")).join("\n")}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: produkte.length ? produkte.map((p) => `(${p.replace(" · ", ")*(")})`).join(" + ") : "0",
            fehler: nurAndereZahl(summe, [{ wert: verrutscht, meldung: "Die Maske ist verrutscht. Ihre **Mitte** `maske[1][1]` muss über dem Pixel liegen, nicht ihre linke obere Ecke." }]),
          },
        ],
        hinweis: "Das Gewicht `maske[i][j]` liegt über `bild[z + i - 1][s + j - 1]`. Multipliziere, lass Pixel außerhalb weg und addiere.",
        loesung: `**Ansatz:** Maske mit der Mitte auf \`(${z}, ${s})\` legen, Gewicht mal Pixel für jedes Gewicht ungleich 0 im Bild.\n---\nProdukte: ${produkte.length ? produkte.join(", ") : "keine"}.\n---\nSumme: ${summe}.`,
      };
    },
  }),

  drill({
    id: "aw-d-schwelle",
    kapitel: K,
    titel: "Ein Bild binarisieren",
    niveau: 1,
    erzeuge: (r) => {
      const schwelle = r.int(60, 200);
      const b = Array.from({ length: 2 }, () => Array.from({ length: 3 }, () => r.int(0, 255)));
      b[r.int(0, 1)][r.int(0, 2)] = schwelle; // ein Wert genau auf der Schwelle
      const erg = b.map((x) => x.map((v) => (v >= schwelle ? 255 : 0)));
      const groesser = b.map((x) => x.map((v) => (v > schwelle ? 255 : 0)));
      const zeile = (x: number[]) => `[${x.join(", ")}]`;
      const code = `int[][] bild = ${intLiteral(b)};\nfor (int z = 0; z < bild.length; z++) {\n    for (int s = 0; s < bild[z].length; s++) {\n        if (bild[z][s] >= ${schwelle}) {\n            bild[z][s] = 255;\n        } else {\n            bild[z][s] = 0;\n        }\n    }\n}\nSystem.out.println(Arrays.toString(bild[0]));\nSystem.out.println(Arrays.toString(bild[1]));\n`;
      const loesung = `${zeile(erg[0])}\n${zeile(erg[1])}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${zeile(groesser[0])}\n${zeile(groesser[1])}`, meldung: `Die Bedingung ist \`>=\`. Der Wert ${schwelle} liegt genau auf der Schwelle und wird 255.` }]),
          },
        ],
        hinweis: `Vergleiche jeden Wert mit ${schwelle}. Mindestens ${schwelle} ergibt 255, sonst 0.`,
        loesung: `**Ansatz:** Punktoperation, jeder Pixel einzeln.\n---\nWerte: ${b.flat().join(", ")}. Mindestens ${schwelle} sind ${b.flat().filter((v) => v >= schwelle).join(", ")}.\n---\nAusgabe \`${zeile(erg[0])}\` und \`${zeile(erg[1])}\`.`,
      };
    },
  }),

  drill({
    id: "aw-d-flaeche",
    kapitel: K,
    titel: "Wie groß ist die Fläche?",
    niveau: 2,
    erzeuge: (r) => {
      let g = zeichenRaster(r, 4, 5, 0.35, "#", ".");
      const z = r.int(0, 3);
      const s = r.int(0, 4);
      g = g.map((x) => [...x]);
      g[z][s] = ".";
      const { anzahl } = fuelle(g, z, s, ".", "o");
      const acht = fuelle(g, z, s, ".", "o", V8).anzahl;
      const alle = g.flat().filter((c) => c === ".").length;
      return {
        angabe: `Wie viele Zellen färbt Flood-Fill (Vierer-Nachbarschaft) ab \`(${z}, ${s})\`, wenn alle zusammenhängenden \`.\` gefärbt werden? Zeilen 0 bis 3 von oben, Spalten 0 bis 4 von links.\n\n${rasterBlock(g)}`,
        teile: [
          {
            typ: "zahl",
            loesung: String(anzahl),
            fehler: nurAndereZahl(anzahl, [
              { wert: acht, meldung: "Du bist schräg gegangen. Flood-Fill geht nur nach oben, unten, links und rechts." },
              { wert: alle, meldung: "Du hast alle Punkte gezählt. Gefüllt werden nur die, die mit der Startzelle zusammenhängen." },
            ]),
          },
        ],
        hinweis: "Färbe von der Startzelle aus jeden Punkt, der direkt neben einem schon gefärbten Punkt liegt (nicht schräg).",
        loesung: `**Ansatz:** Die zusammenhängende Fläche aus Punkten ab \`(${z}, ${s})\` bestimmen.\n---\nNach dem Füllen sieht das Raster so aus:\n\n${rasterBlock(fuelle(g, z, s, ".", "o").g)}\n---\nGefärbt sind ${anzahl} Zellen.`,
      };
    },
  }),

  drill({
    id: "aw-d-flood-ausgabe",
    kapitel: K,
    titel: "Ergebnis von Flood-Fill ausgeben",
    niveau: 2,
    erzeuge: (r) => {
      let g = zeichenRaster(r, 4, 5, 0.35, "#", ".");
      const z = r.int(0, 3);
      const s = r.int(0, 4);
      g = g.map((x) => [...x]);
      g[z][s] = ".";
      const erg = fuelle(g, z, s, ".", "+").g;
      const acht = fuelle(g, z, s, ".", "+", V8).g;
      const methoden = einruecken(
        `public static void fuelle(char[][] f, int z, int s, char alt, char neu) {\n    if (z < 0 || z >= f.length || s < 0 || s >= f[z].length) {\n        return;\n    }\n    if (f[z][s] != alt) {\n        return;\n    }\n    f[z][s] = neu;\n    fuelle(f, z - 1, s, alt, neu);\n    fuelle(f, z + 1, s, alt, neu);\n    fuelle(f, z, s - 1, alt, neu);\n    fuelle(f, z, s + 1, alt, neu);\n}`,
        4,
      );
      const code = klasse("Flut", methoden, `        char[][] f = ${charLiteral(g, 8)};\n        fuelle(f, ${z}, ${s}, '.', '+');\n${DRUCKE}`);
      const loesung = zeilenText(erg) + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: zeilenText(acht), meldung: "`fuelle` geht nur nach oben, unten, links und rechts. Punkte, die die Fläche nur schräg berühren, bleiben `.`." }]),
          },
        ],
        hinweis: "Beginne bei der Startzelle und färbe jeden Punkt, der über Schritte nach oben, unten, links oder rechts erreichbar ist.",
        loesung: `**Ansatz:** Flood-Fill füllt die zusammenhängende Fläche aus Punkten ab \`(${z}, ${s})\`.\n---\nGefüllt werden ${fuelle(g, z, s, ".", "+").anzahl} Zellen.\n---\nAusgabe:\n\n${rasterBlock(erg)}`,
      };
    },
  }),

  drill({
    id: "aw-d-grau-flut",
    kapitel: K,
    titel: "Flood-Fill mit Schwellwert",
    niveau: 2,
    erzeuge: (r) => {
      const tol = r.int(4, 8);
      const g0 = r.int(40, 60);
      const b = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => g0 + r.int(-3 * tol, 3 * tol)));
      b[0][0] = g0;
      const passt = (v: number) => Math.abs(v - g0) <= tol;
      const m = b.map((x) => [...x]);
      let anzahl = 0;
      const f = (z: number, s: number) => {
        if (!imFeld(m, z, s) || m[z][s] === -1 || !passt(m[z][s])) return;
        m[z][s] = -1;
        anzahl++;
        for (const [dz, ds] of V4) f(z + dz, s + ds);
      };
      f(0, 0);
      const alle = b.flat().filter(passt).length;
      return {
        angabe: `Flood-Fill mit Schwellwert startet bei \`(0, 0)\` mit \`gVal = ${g0}\` und \`tol = ${tol}\`. Ein Pixel gehört dazu, wenn \`Math.abs(w - gVal) <= tol\` gilt und er über passende Pixel mit dem Start zusammenhängt (Vierer-Nachbarschaft). Wie viele Pixel werden auf -1 gesetzt?\n\n\`\`\`\n${b.map((x) => x.map((v) => String(v).padStart(3)).join(" ")).join("\n")}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: String(anzahl),
            fehler: nurAndereZahl(anzahl, [{ wert: alle, meldung: "Du hast alle passenden Werte gezählt. Gefüllt werden nur die, die über passende Pixel mit dem Start verbunden sind." }]),
          },
        ],
        hinweis: `Erlaubt sind die Werte ${g0 - tol} bis ${g0 + tol}. Geh vom Start aus nur über Nachbarn in diesem Bereich.`,
        loesung: `**Ansatz:** Erlaubter Bereich ${g0 - tol} bis ${g0 + tol}, beide Grenzen eingeschlossen. Dann Flood-Fill ab \`(0, 0)\`.\n---\nMarkiert (als \`-1\`):\n\n\`\`\`\n${m.map((x) => x.map((v) => String(v).padStart(3)).join(" ")).join("\n")}\n\`\`\`\n---\nDas sind ${anzahl} Pixel.`,
      };
    },
  }),

  drill({
    id: "aw-d-inseln",
    kapitel: K,
    titel: "Inseln zählen",
    niveau: 2,
    erzeuge: (r) => {
      let g = zeichenRaster(r, 4, 5, 0.4, "#", ".");
      if (!g.flat().includes("#")) {
        g = g.map((x) => [...x]);
        g[r.int(0, 3)][r.int(0, 4)] = "#";
      }
      const n = inseln(g);
      const n8 = inseln(g, V8);
      const land = g.flat().filter((c) => c === "#").length;
      return {
        angabe: `Wie viele Inseln (zusammenhängende Flächen aus \`#\` in der Vierer-Nachbarschaft) hat die Karte?\n\n${rasterBlock(g)}`,
        teile: [
          {
            typ: "zahl",
            loesung: String(n),
            fehler: nurAndereZahl(n, [
              { wert: n8, meldung: "Zellen, die sich nur schräg berühren, gehören in der Vierer-Nachbarschaft zu verschiedenen Inseln." },
              { wert: land, meldung: "Du hast Landzellen gezählt, nicht Inseln. Benachbarte Landzellen bilden zusammen eine Insel." },
            ]),
          },
        ],
        hinweis: "Kreise jede zusammenhängende Landfläche ein (nicht schräg) und zähle die Kreise.",
        loesung: `**Ansatz:** Jede zusammenhängende Landfläche zählt einmal, egal wie groß sie ist.\n---\nDie Karte hat ${land} Landzellen. Sie bilden ${n} Inseln, wenn nur oben, unten, links und rechts verbindet.\n---\nErgebnis: ${n}.`,
      };
    },
  }),

  drill({
    id: "aw-d-feuer",
    kapitel: K,
    titel: "Wie viel brennt?",
    niveau: 1,
    erzeuge: (r) => {
      const g = Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => r.wahl(["W", "W", "W", "W", "#", "~"])));
      const z = r.int(0, 3);
      const s = r.int(0, 4);
      g[z][s] = "W";
      const { anzahl, g: nach } = fuelle(g, z, s, "W", "F");
      const wiese = g.flat().filter((c) => c === "W").length;
      return {
        angabe: `Ein Feuer beginnt bei \`(${z}, ${s})\` und breitet sich auf Wiese \`W\` nach Norden, Osten, Süden und Westen aus. Fels \`#\` und Wasser \`~\` halten es auf. Wie viele Felder brennen am Ende?\n\n${rasterBlock(g)}`,
        teile: [
          {
            typ: "zahl",
            loesung: String(anzahl),
            fehler: nurAndereZahl(anzahl, [{ wert: wiese, meldung: "Nicht jede Wiese brennt. Das Feuer erreicht nur Wiesen, die mit dem Startfeld zusammenhängen." }]),
          },
        ],
        hinweis: "Das sichere Feuer ist Flood-Fill auf Wiese. Färbe vom Start aus jede erreichbare Wiese.",
        loesung: `**Ansatz:** Flood-Fill von \`W\` nach \`F\` ab \`(${z}, ${s})\`.\n---\nNach dem Brand:\n\n${rasterBlock(nach)}\n---\nEs brennen ${anzahl} Felder.`,
      };
    },
  }),

  drill({
    id: "aw-d-fluss",
    kapitel: K,
    titel: "Den Fluss vorhersagen",
    niveau: 3,
    erzeuge: (r) => {
      const zeilen = 5;
      const spalten = 5;
      const g = Array.from({ length: zeilen }, () => Array.from({ length: spalten }, () => "W"));
      const fels = r.int(2, 4);
      for (let k = 0; k < fels; k++) g[r.int(1, zeilen - 1)][r.int(0, spalten - 1)] = "#";
      const s0 = r.int(1, spalten - 2);
      g[0][s0] = "W";
      const m = g.map((x) => [...x]);
      const f = (z: number, s: number) => {
        if (!imFeld(m, z, s) || m[z][s] === "X") return;
        if (m[z][s] === "#") {
          m[z][s] = "X";
          f(z, s - 1);
          f(z, s + 1);
          return;
        }
        m[z][s] = "~";
        f(z + 1, s);
      };
      f(0, s0);
      const methoden = einruecken(
        `public static void fliesse(char[][] f, int z, int s) {\n    if (z < 0 || z >= f.length || s < 0 || s >= f[z].length) {\n        return;\n    }\n    if (f[z][s] == 'X') {\n        return;\n    }\n    if (f[z][s] == '#') {\n        f[z][s] = 'X';\n        fliesse(f, z, s - 1);\n        fliesse(f, z, s + 1);\n        return;\n    }\n    f[z][s] = '~';\n    fliesse(f, z + 1, s);\n}`,
        4,
      );
      const code = klasse("Fluss", methoden, `        char[][] f = ${charLiteral(g, 8)};\n        fliesse(f, 0, ${s0});\n${DRUCKE}`);
      const loesung = zeilenText(m) + "\n";
      const ohneX = zeilenText(m.map((x) => x.map((c) => (c === "X" ? "#" : c))));
      return {
        angabe: "Das Wasser fließt nach unten. An einem Fels `#` teilt es sich nach links und rechts, und der Fels wird `X`. Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: ohneX, meldung: "Ein Fels, den das Wasser trifft, wird zu `X`. Nur Felsen abseits des Wassers bleiben `#`." }]),
          },
        ],
        hinweis: "Verfolge bei jeder Teilung zuerst den linken Lauf bis zum Ende, dann den rechten. Ein Lauf endet am unteren Rand, am Seitenrand oder an einem `X`.",
        loesung: `**Ansatz:** Den Aufrufen folgen. Wiese wird \`~\` und es geht nach unten, ein Fels wird \`X\` und teilt.\n---\nStart bei \`(0, ${s0})\`.\n---\nErgebnis:\n\n${rasterBlock(m)}`,
      };
    },
  }),

  drill({
    id: "aw-d-sudoku-darf",
    kapitel: K,
    titel: "Darf die Zahl hier stehen?",
    niveau: 2,
    erzeuge: (r) => {
      const feld = [
        [0, 0, 7, 0, 5, 0, 0, 9, 0],
        [0, 0, 0, 0, 9, 0, 0, 2, 3],
        [1, 0, 4, 0, 2, 0, 0, 0, 0],
        [6, 0, 5, 4, 0, 9, 0, 0, 0],
        [4, 0, 0, 7, 0, 0, 5, 1, 0],
        [7, 8, 2, 6, 0, 5, 0, 0, 4],
        [0, 0, 0, 2, 6, 8, 1, 0, 5],
        [5, 4, 0, 9, 7, 0, 8, 0, 2],
        [2, 6, 8, 0, 0, 1, 0, 0, 0],
      ];
      const leer: [number, number][] = [];
      feld.forEach((x, z) => x.forEach((v, s) => v === 0 && leer.push([z, s])));
      const [z, s] = r.wahl(leer);
      const zahl = r.int(1, 9);
      const z0 = Math.floor(z / 3) * 3;
      const s0 = Math.floor(s / 3) * 3;
      const inZ = feld[z].includes(zahl);
      const inS = feld.some((x) => x[s] === zahl);
      let inB = false;
      for (let a = z0; a < z0 + 3; a++) for (let c = s0; c < s0 + 3; c++) if (feld[a][c] === zahl) inB = true;
      const erlaubt = !inZ && !inS && !inB;
      const gruende = [inZ ? `Zeile ${z}` : "", inS ? `Spalte ${s}` : "", inB ? `Block mit Startzelle \`(${z0}, ${s0})\`` : ""].filter(Boolean);
      return {
        angabe: `Darf man im Sudoku die Zahl ${zahl} in die leere Zelle \`(${z}, ${s})\` schreiben, ohne gegen eine Regel zu verstoßen? (0 = leer)\n\n\`\`\`\n${feld.map((x) => x.join(" ")).join("\n")}\n\`\`\``,
        teile: [
          {
            typ: "auswahl",
            optionen: ["erlaubt", "verboten"],
            richtig: [erlaubt ? 0 : 1],
            fehler: [
              erlaubt
                ? { wert: 1, meldung: `Die ${zahl} steht weder in Zeile ${z} noch in Spalte ${s} noch im Block mit Startzelle \`(${z0}, ${s0})\`.` }
                : { wert: 0, meldung: `Die ${zahl} steht schon in: ${gruende.join(", ")}. Eine einzige Regel genügt, um sie zu verbieten.` },
            ],
          },
        ],
        hinweis: `Prüfe Zeile ${z}, Spalte ${s} und den Block mit Startzelle \`(${z} / 3 * 3, ${s} / 3 * 3)\`.`,
        loesung: `**Ansatz:** Erlaubt ist die Zahl nur, wenn sie in Zeile, Spalte und Block fehlt.\n---\nZeile ${z}: ${feld[z].join(" ")}. Spalte ${s}: ${feld.map((x) => x[s]).join(" ")}. Block ab \`(${z0}, ${s0})\`.\n---\n${erlaubt ? `Die ${zahl} kommt nirgends vor, sie ist erlaubt.` : `Die ${zahl} kommt vor in: ${gruende.join(", ")}. Sie ist verboten.`}`,
      };
    },
  }),
];
