import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 14 (Zwei- und mehrdimensionale Arrays). Jede Referenzrechnung bildet die
 * Java-Semantik nach (Arrays.deepToString-Format, Verweise auf Zeilen, Ganzzahldivision). Der Validator führt die
 * ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "arrays-2d";

type Tabelle = number[][];

/** Fehlerbilder, die zufällig mit der richtigen Antwort übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const gesehen = new Set<string>();
  const rest = fehler.filter((f) => {
    const w = norm(f.wert);
    if (w === norm(loesung) || gesehen.has(w)) return false;
    gesehen.add(w);
    return true;
  });
  return rest.length ? rest : undefined;
}

/** Ausgabe von Arrays.toString für ein int[] */
const toStr = (z: number[]) => `[${z.join(", ")}]`;
/** Ausgabe von Arrays.deepToString für ein int[][] */
const deep = (a: Tabelle) => `[${a.map(toStr).join(", ")}]`;
/** Java-Initialisierer für ein int[][] in einer Zeile */
const init = (a: Tabelle) => `{${a.map((z) => `{${z.join(", ")}}`).join(", ")}}`;
/** Java-Initialisierer für ein int[][], eine Zeile pro Tabellenzeile */
const initBlock = (a: Tabelle, tiefe = 0) => {
  const e = " ".repeat(tiefe);
  return `{\n${a.map((z) => `${e}    {${z.join(", ")}}`).join(",\n")}\n${e}}`;
};
const kopie = (a: Tabelle) => a.map((z) => [...z]);

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

/** Eine ganze Klasse mit Methoden und main als Java-Quelltext (mit import java.util.Arrays) */
function klasse(name: string, methoden: string, main: string): string {
  return `import java.util.Arrays;\n\npublic class ${name} {\n${einruecken(methoden, 4)}\n\n    public static void main(String[] args) {\n${einruecken(main, 8)}\n    }\n}\n`;
}

function zufallsZeile(r: Rng, laenge: number, min = 0, max = 9): number[] {
  return Array.from({ length: laenge }, () => r.int(min, max));
}

function zufallsTabelle(r: Rng, zeilen: number, spalten: number, min = 0, max = 9): Tabelle {
  return Array.from({ length: zeilen }, () => zufallsZeile(r, spalten, min, max));
}

function jagged(r: Rng, zeilen: number, minLaenge: number, maxLaenge: number, min = 0, max = 9): Tabelle {
  return Array.from({ length: zeilen }, () => zufallsZeile(r, r.int(minLaenge, maxLaenge), min, max));
}

const summe = (z: number[]) => z.reduce((s, x) => s + x, 0);

export const DRILLS: Drill[] = [
  drill({
    id: "zd-d-kapazitaet",
    kapitel: K,
    titel: "Kapazität einer mehrdimensionalen Deklaration",
    niveau: 1,
    erzeuge: (r) => {
      const typ = r.wahl(["int", "long", "double", "boolean", "char"] as const);
      const dim = r.int(2, 3);
      const groessen = Array.from({ length: dim }, () => r.int(1, 5));
      const leer = r.int(0, 3) === 0;
      const klammern = groessen.map((g, i) => (leer && i === dim - 1 ? "[]" : `[${g}]`)).join("");
      const deklaration = `${typ}${"[]".repeat(dim)} x = new ${typ}${klammern};`;
      const produkt = groessen.reduce((p, g) => p * g, 1);
      const vorne = groessen.slice(0, -1).reduce((p, g) => p * g, 1);
      const loesung = leer ? 0 : produkt;
      const fehler = leer
        ? [{ wert: String(vorne), meldung: `Die letzte Klammer ist leer. Es entstehen ${vorne} Plätze für Arrays, aber alle sind \`null\`. Ein Wert passt erst hinein, wenn die innersten Arrays angelegt sind.` }]
        : [{ wert: String(summe(groessen)), meldung: "Die Größen werden multipliziert, nicht addiert. Jedes Element der äußeren Ebene enthält die volle Größe der nächsten Ebene." }];
      return {
        angabe: `Wie viele Werte vom Typ \`${typ}\` kann \`${deklaration}\` direkt nach der Deklaration aufnehmen?`,
        teile: [{ typ: "zahl", loesung: String(loesung), fehler: fehler.some((f) => Number(f.wert) !== loesung) ? fehler.filter((f) => Number(f.wert) !== loesung) : undefined }],
        hinweis: leer ? "Ist jede Klammer mit einer Größe gefüllt? Was steht nach `new` in Plätzen für Arrays?" : "Alle Größen sind angegeben. Die Kapazität ist das Produkt der Größen.",
        loesung: leer
          ? `**Ansatz:** Die letzte Klammer ist leer. Angelegt werden nur die äußeren Ebenen.\n---\nEs entstehen ${vorne} Plätze für die innersten Arrays, alle mit dem Wert \`null\`.\n---\nDirekt danach passt also kein einziger Wert hinein. Die Kapazität ist 0.`
          : `**Ansatz:** Alle Größen sind angegeben, also gilt die Produktregel.\n---\n${groessen.join(" · ")} = ${produkt}.`,
      };
    },
  }),

  drill({
    id: "zd-d-zugriff",
    kapitel: K,
    titel: "Elemente und Längen ablesen",
    niveau: 1,
    erzeuge: (r) => {
      const a = zufallsTabelle(r, 3, 4);
      const i = r.int(0, 2);
      let j = r.int(0, 2);
      while (j === i) j = r.int(0, 2);
      const k = r.int(0, 3);
      const code = `int[][] a = ${initBlock(a)};\nSystem.out.println(a[${i}][${j}]);\nSystem.out.println(a.length + " " + a[0].length);\nSystem.out.println(a[a.length - 1][${k}]);`;
      const loesung = `${a[i][j]}\n3 4\n${a[2][k]}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${a[j][i]}\n3 4\n${a[2][k]}`, meldung: `Der erste Index wählt die **Zeile**. \`a[${i}][${j}]\` ist Zeile ${i}, Spalte ${j}.` },
              { wert: `${a[i][j]}\n4 3\n${a[2][k]}`, meldung: "`a.length` ist die Zahl der Zeilen (3), `a[0].length` die Länge der Zeile 0 (4)." },
            ]),
          },
        ],
        hinweis: "Zuerst die Zeile wählen, dann darin das Element.",
        loesung: `**Ansatz:** Zeile zuerst, dann Spalte. Die Tabelle hat 3 Zeilen mit je 4 Elementen.\n---\nZeile ${i} ist \`{${a[i].join(", ")}}\`, darin hat Index ${j} den Wert ${a[i][j]}.\n---\n\`a[a.length - 1]\` ist die letzte Zeile \`{${a[2].join(", ")}}\`, ihr Element mit Index ${k} ist ${a[2][k]}.`,
      };
    },
  }),

  drill({
    id: "zd-d-zeilensummen",
    kapitel: K,
    titel: "Zeilensummen ausgeben",
    niveau: 1,
    erzeuge: (r) => {
      const a = jagged(r, r.int(3, 4), 0, 4);
      const summen = a.map(summe);
      const laufend: number[] = [];
      summen.reduce((s, x) => (laufend.push(s + x), s + x), 0);
      const code = `int[][] a = ${init(a)};\nfor (int i = 0; i < a.length; i++) {\n    int summe = 0;\n    for (int j = 0; j < a[i].length; j++) {\n        summe += a[i][j];\n    }\n    System.out.println(summe);\n}`;
      const loesung = summen.join("\n") + "\n";
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: laufend.join("\n"), meldung: "`summe` wird **in** der äußeren Schleife angelegt und beginnt für jede Zeile wieder bei 0. Ausgegeben wird die Summe jeder einzelnen Zeile." }]),
          },
        ],
        hinweis: "Jede Zeile hat ihre eigene Summe. Eine leere Zeile hat die Summe 0.",
        loesung: `**Ansatz:** Für jede Zeile die Elemente addieren und das Ergebnis in einer eigenen Zeile ausgeben.\n---\n${a
          .map((z, i) => `Zeile ${i}: ${z.length ? `${z.join(" + ")} = ${summen[i]}` : "leer, also 0"}`)
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "zd-d-spaltensummen",
    kapitel: K,
    titel: "Spaltensummen berechnen",
    niveau: 2,
    erzeuge: (r) => {
      const z = r.int(2, 4);
      let s = r.int(2, 4);
      while (s === z) s = r.int(2, 4);
      const a = zufallsTabelle(r, z, s);
      const spalten = Array.from({ length: s }, (_, j) => summe(a.map((zeile) => zeile[j])));
      const zeilen = a.map(summe);
      const code = `int[][] a = ${initBlock(a)};\nint[] s = new int[a[0].length];\nfor (int j = 0; j < a[0].length; j++) {\n    for (int i = 0; i < a.length; i++) {\n        s[j] += a[i][j];\n    }\n}\nSystem.out.println(Arrays.toString(s));`;
      const loesung = `${toStr(spalten)}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: toStr(zeilen), meldung: `\`s\` hat so viele Plätze wie eine Zeile Elemente hat (${s}). An Platz \`j\` wird die **Spalte** \`j\` summiert, nicht eine Zeile.` }]),
          },
        ],
        hinweis: "Die äußere Schleife läuft über die Spalten. Für jede Spalte wird von oben nach unten addiert.",
        loesung: `**Ansatz:** Spaltenweiser Durchlauf. \`s[j]\` sammelt alle Elemente der Spalte \`j\`.\n---\n${spalten
          .map((x, j) => `Spalte ${j}: ${a.map((zeile) => zeile[j]).join(" + ")} = ${x}`)
          .join(". ")}.\n---\nProbe: Die Summe aller Spaltensummen ist ${summe(spalten)}, genau wie die Summe aller Zeilensummen.`,
      };
    },
  }),

  drill({
    id: "zd-d-diagonalen",
    kapitel: K,
    titel: "Haupt- und Nebendiagonale",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 4);
      const q = zufallsTabelle(r, n, n);
      const haupt = Array.from({ length: n }, (_, i) => q[i][i]);
      const neben = Array.from({ length: n }, (_, i) => q[i][n - 1 - i]);
      const h = summe(haupt);
      const nb = summe(neben);
      const code = `int[][] q = ${initBlock(q)};\nint haupt = 0;\nint neben = 0;\nfor (int i = 0; i < q.length; i++) {\n    haupt += q[i][i];\n    neben += q[i][q.length - 1 - i];\n}\nSystem.out.println(haupt + " " + neben);`;
      const loesung = `${h} ${nb}\n`;
      // Fehlvorstellung: Spaltenindex q.length - 1 ohne "- i", also die ganze letzte Spalte
      const falschNeben = summe(Array.from({ length: n }, (_, i) => q[i][n - 1]));
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${nb} ${h}`, meldung: "Die erste Zahl ist die Hauptdiagonale `q[i][i]` von links oben nach rechts unten." },
              { wert: `${h} ${falschNeben}`, meldung: `Das ist die Summe der letzten Spalte. Auf der Nebendiagonalen wandert der Spaltenindex \`q.length - 1 - i\` mit: Für \`i = 0\` ist er ${n - 1} (rechts oben), für jede weitere Zeile 1 kleiner.` },
            ]),
          },
        ],
        hinweis: "Auf der Hauptdiagonalen sind beide Indizes gleich. Auf der Nebendiagonalen ergeben sie zusammen `n - 1`.",
        loesung: `**Ansatz:** Eine Schleife über die Zeilen, pro Zeile ein Element jeder Diagonalen.\n---\nHauptdiagonale: ${haupt.join(" + ")} = ${h}.\n---\nNebendiagonale: ${neben.join(" + ")} = ${nb}.`,
      };
    },
  }),

  drill({
    id: "zd-d-muster",
    kapitel: K,
    titel: "Eine Tabelle nach Formel erzeugen",
    niveau: 2,
    erzeuge: (r) => {
      const formeln = [
        { java: "i * n + j", f: (i: number, j: number, n: number) => i * n + j },
        { java: "i + 2 * j", f: (i: number, j: number) => i + 2 * j },
        { java: "Math.abs(i - j)", f: (i: number, j: number) => Math.abs(i - j) },
        { java: "(i + 1) * (j + 1)", f: (i: number, j: number) => (i + 1) * (j + 1) },
        { java: "Math.min(i, j) + 1", f: (i: number, j: number) => Math.min(i, j) + 1 },
        { java: "(i + j) % 3", f: (i: number, j: number) => (i + j) % 3 },
        { java: "i * j - j", f: (i: number, j: number) => i * j - j },
      ] as const;
      const fo = r.wahl(formeln);
      const n = r.int(2, 4);
      const t = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => fo.f(i, j, n)));
      const transponiert = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => fo.f(j, i, n)));
      const methoden = `public static int[][] erzeuge(int n) {\n    int[][] r = new int[n][n];\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            r[i][j] = ${fo.java};\n        }\n    }\n    return r;\n}`;
      const code = klasse("Muster", methoden, `System.out.println(Arrays.deepToString(erzeuge(${n})));`);
      const loesung = `${deep(t)}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(transponiert), meldung: "Zeilen und Spalten sind vertauscht. `i` ist der Zeilenindex: In der ersten inneren Klammer stehen die Werte für `i = 0`." }]),
          },
        ],
        hinweis: `Setze für jede Stelle \`i\` und \`j\` in \`${fo.java}\` ein, Zeile für Zeile.`,
        loesung: `**Ansatz:** Die Formel \`${fo.java}\` für jede Stelle auswerten. \`i\` ist die Zeile, \`j\` die Spalte, \`n = ${n}\`.\n---\n${t
          .map((z, i) => `Zeile ${i}: ${z.join(", ")}`)
          .join(". ")}.\n---\n\`deepToString\` schreibt jede Zeile in eigene eckige Klammern: \`${deep(t)}\`.`,
      };
    },
  }),

  drill({
    id: "zd-d-jagged",
    kapitel: K,
    titel: "Ein jagged Array aufbauen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(3, 5);
      const laengen = [
        { java: "i + 1", f: (i: number) => i + 1 },
        { java: "d.length - i", f: (i: number) => n - i },
        { java: "i % 2 + 1", f: (i: number) => (i % 2) + 1 },
        { java: "2 * i", f: (i: number) => 2 * i },
      ] as const;
      const werte = [
        { java: "j + 1", f: (i: number, j: number) => j + 1 },
        { java: "i", f: (i: number) => i },
        { java: "i * 10 + j", f: (i: number, j: number) => i * 10 + j },
      ] as const;
      const l = r.wahl(laengen);
      const w = r.wahl(werte);
      const d = Array.from({ length: n }, (_, i) => Array.from({ length: l.f(i) }, (_, j) => w.f(i, j)));
      const rechteckig = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => w.f(i, j)));
      const code = `int[][] d = new int[${n}][];\nfor (int i = 0; i < d.length; i++) {\n    d[i] = new int[${l.java}];\n    for (int j = 0; j < d[i].length; j++) {\n        d[i][j] = ${w.java};\n    }\n}\nSystem.out.println(Arrays.deepToString(d));`;
      const loesung = `${deep(d)}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(rechteckig), meldung: `Jede Zeile bekommt ihre eigene Länge \`${l.java}\`. Die Zeilen sind also verschieden lang, nicht alle ${n} Elemente lang.` }]),
          },
        ],
        hinweis: `Bestimme für jede Zeile zuerst die Länge \`${l.java}\`, dann die Werte \`${w.java}\`.`,
        loesung: `**Ansatz:** \`new int[${n}][]\` legt nur das äußere Array an. Jede Zeile wird in der Schleife mit eigener Länge angelegt.\n---\nLängen: ${d.map((z) => z.length).join(", ")}.${d.some((z) => z.length === 0) ? " Eine Länge 0 ergibt eine leere Zeile `[]`." : ""}\n---\nInhalt mit \`${w.java}\`: \`${deep(d)}\`.`,
      };
    },
  }),

  drill({
    id: "zd-d-alias",
    kapitel: K,
    titel: "Gemeinsame Zeilen verfolgen",
    niveau: 2,
    erzeuge: (r) => {
      const z = zufallsZeile(r, 3, 1, 9);
      const mitte = zufallsZeile(r, 2, 1, 9);
      const k1 = r.int(0, 2);
      const v1 = r.int(10, 20);
      const k2 = r.int(0, 2);
      let v2 = r.int(10, 20);
      while (v2 === v1) v2 = r.int(10, 20);
      const umhaengen = r.int(0, 1) === 1;
      // richtig: m[0] und m[2] (und ggf. m[1]) zeigen auf z
      const zNeu = [...z];
      zNeu[k1] = v1;
      zNeu[k2] = v2;
      const richtig: Tabelle = [zNeu, umhaengen ? zNeu : mitte, zNeu];
      // Fehlvorstellung: der Initialisierer kopiert z
      const m0 = [...z];
      m0[k1] = v1;
      const falsch: Tabelle = [m0, umhaengen ? [...z] : mitte, [...z]];
      const code = `int[] z = {${z.join(", ")}};\nint[][] m = {z, {${mitte.join(", ")}}, z};\nm[0][${k1}] = ${v1};\n${umhaengen ? "m[1] = z;\n" : ""}z[${k2}] = ${v2};\nSystem.out.println(Arrays.deepToString(m));`;
      const loesung = `${deep(richtig)}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(falsch), meldung: "Der Initialisierer `{z, …, z}` speichert den **Verweis** `z`, keine Kopie. Alle Plätze, die auf `z` zeigen, sehen jede Änderung an diesem Array." }]),
          },
        ],
        hinweis: "Zeichne das äußere Array mit Pfeilen. Welche Plätze zeigen auf das Array `z`?",
        loesung: `**Ansatz:** Zuerst klären, welche Plätze auf dasselbe Array zeigen. Dann alle Änderungen in dieses eine Array eintragen.\n---\n\`m[0]\` und \`m[2]\`${umhaengen ? " und nach `m[1] = z` auch `m[1]`" : ""} zeigen auf \`z\`.${umhaengen ? "" : " `m[1]` ist ein eigenes Array."}\n---\n\`m[0][${k1}] = ${v1}\` und \`z[${k2}] = ${v2}\` ändern beide das Array \`z\`. Es wird \`{${zNeu.join(", ")}}\`. Ergebnis: \`${deep(richtig)}\`.`,
      };
    },
  }),

  drill({
    id: "zd-d-kehre-um",
    kapitel: K,
    titel: "Zeilen zwischen zwei Indizes umdrehen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 6);
      const laengen = r.mische(Array.from({ length: n }, (_, i) => i + 1));
      const a: Tabelle = laengen.map((l, i) => Array.from({ length: l }, () => i + 1));
      let von = r.int(0, n - 1);
      let bis = r.int(0, n - 1);
      while (Math.abs(von - bis) < 1) bis = r.int(0, n - 1);
      if (r.int(0, 1) === 1) [von, bis] = [bis, von];
      const lo = Math.min(von, bis);
      const hi = Math.max(von, bis);
      const ergebnis = kopie(a);
      for (let l = lo, h = hi; l < h; l++, h--) [ergebnis[l], ergebnis[h]] = [ergebnis[h], ergebnis[l]];
      const ganz = [...kopie(a)].reverse();
      const methoden = `public static void kehreUm(int[][] a, int von, int bis) {\n    int links = Math.min(von, bis);\n    int rechts = Math.max(von, bis);\n    while (links < rechts) {\n        int[] tmp = a[links];\n        a[links] = a[rechts];\n        a[rechts] = tmp;\n        links++;\n        rechts--;\n    }\n}`;
      const code = klasse("Umdrehen", methoden, `int[][] t = ${init(a)};\nkehreUm(t, ${von}, ${bis});\nSystem.out.println(Arrays.deepToString(t));`);
      const loesung = `${deep(ergebnis)}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: deep(ganz), meldung: `Umgedreht wird nur der Bereich von Index ${lo} bis ${hi}. Die Zeilen außerhalb bleiben an ihrem Platz.` },
              { wert: deep(a), meldung: "`Math.min` und `Math.max` ordnen die Grenzen. Auch bei `von > bis` wird der Bereich umgedreht." },
            ]),
          },
        ],
        hinweis: `Bestimme zuerst \`links = ${lo}\` und \`rechts = ${hi}\`. Dann werden Paare von außen nach innen getauscht.`,
        loesung: `**Ansatz:** Die Grenzen ordnen und den Bereich wie beim Spiegeln von außen nach innen tauschen.\n---\nBereich: Index ${lo} bis ${hi}. Getauscht werden ${Array.from({ length: Math.floor((hi - lo + 1) / 2) }, (_, k) => `(${lo + k}, ${hi - k})`).join(", ")}.\n---\nErgebnis: \`${deep(ergebnis)}\`.`,
      };
    },
  }),

  drill({
    id: "zd-d-spalte-streichen",
    kapitel: K,
    titel: "Eine Spalte aus jeder Zeile streichen",
    niveau: 3,
    erzeuge: (r) => {
      const a = jagged(r, r.int(3, 4), 0, 4);
      const spalte = r.int(0, 2);
      const streiche = (t: Tabelle, s: number) => t.map((z) => (s < z.length ? z.filter((_, j) => j !== s) : [...z]));
      const ergebnis = streiche(a, spalte);
      const daneben = streiche(a, spalte + 1);
      const methoden = `public static void streicheSpalte(int[][] a, int spalte) {\n    for (int i = 0; i < a.length; i++) {\n        if (spalte < a[i].length) {\n            int[] neu = new int[a[i].length - 1];\n            int k = 0;\n            for (int j = 0; j < a[i].length; j++) {\n                if (j != spalte) {\n                    neu[k] = a[i][j];\n                    k++;\n                }\n            }\n            a[i] = neu;\n        }\n    }\n}`;
      const code = klasse("Streichen", methoden, `int[][] t = ${init(a)};\nstreicheSpalte(t, ${spalte});\nSystem.out.println(Arrays.deepToString(t));`);
      const loesung = `${deep(ergebnis)}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(daneben), meldung: `Gestrichen wird das Element mit **Index** ${spalte}. Die Zählung beginnt bei 0, gemeint ist also das ${spalte + 1}. Element jeder Zeile.` }]),
          },
        ],
        hinweis: `Zeilen mit höchstens ${spalte} Elementen haben keinen Index ${spalte} und bleiben unverändert.`,
        loesung: `**Ansatz:** Für jede Zeile prüfen, ob sie den Index ${spalte} hat. Nur dann wird sie durch eine um 1 kürzere Zeile ersetzt.\n---\n${a
          .map((z, i) => `Zeile ${i} \`{${z.join(", ")}}\`: ${spalte < z.length ? `ohne Index ${spalte} wird sie \`{${ergebnis[i].join(", ")}}\`` : "zu kurz, bleibt"}`)
          .join(". ")}.\n---\nErgebnis: \`${deep(ergebnis)}\`.`,
      };
    },
  }),

  drill({
    id: "zd-d-ohne-kleine",
    kapitel: K,
    titel: "Werte unter einer Grenze entfernen",
    niveau: 3,
    erzeuge: (r) => {
      const a = jagged(r, r.int(3, 4), 0, 5, 0, 6);
      const grenze = r.int(2, 4);
      const ergebnis = a.map((z) => z.filter((x) => x >= grenze));
      const strenger = a.map((z) => z.filter((x) => x > grenze));
      const methoden = `public static void ohneKleine(int[][] a, int grenze) {\n    for (int i = 0; i < a.length; i++) {\n        int anzahl = 0;\n        for (int j = 0; j < a[i].length; j++) {\n            if (a[i][j] >= grenze) {\n                anzahl++;\n            }\n        }\n        int[] neu = new int[anzahl];\n        int k = 0;\n        for (int j = 0; j < a[i].length; j++) {\n            if (a[i][j] >= grenze) {\n                neu[k] = a[i][j];\n                k++;\n            }\n        }\n        a[i] = neu;\n    }\n}`;
      const code = klasse("Filter", methoden, `int[][] t = ${init(a)};\nohneKleine(t, ${grenze});\nSystem.out.println(Arrays.deepToString(t));`);
      const loesung = `${deep(ergebnis)}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(strenger), meldung: `Die Bedingung ist \`>= ${grenze}\`. Werte, die genau ${grenze} sind, bleiben erhalten.` }]),
          },
        ],
        hinweis: `Jede Zeile wird durch eine Zeile ersetzt, die nur die Werte \`>= ${grenze}\` in ihrer Reihenfolge enthält.`,
        loesung: `**Ansatz:** Für jede Zeile zählen, wie viele Werte bleiben, dann diese Werte in eine neue Zeile kopieren und sie mit \`a[i] = neu\` einsetzen.\n---\n${a
          .map((z, i) => `Zeile ${i}: \`{${z.join(", ")}}\` wird \`{${ergebnis[i].join(", ")}}\``)
          .join(". ")}.\n---\nErgebnis: \`${deep(ergebnis)}\`. Eine Zeile ohne passende Werte wird leer.`,
      };
    },
  }),

  drill({
    id: "zd-d-flache-kopie",
    kapitel: K,
    titel: "Eine flache Kopie verfolgen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(2, 3);
      const a = jagged(r, n, 1, 3, 1, 9);
      const i = r.int(0, n - 1);
      const j = r.int(0, a[i].length - 1);
      const v = r.int(20, 40);
      let k = r.int(0, n - 1);
      while (k === i) k = r.int(0, n - 1);
      const w = r.int(50, 60);
      const aNeu = kopie(a);
      aNeu[i][j] = v;
      const bNeu = kopie(aNeu);
      bNeu[k] = [w];
      const code = `int[][] a = ${init(a)};\nint[][] b = new int[a.length][];\nfor (int i = 0; i < a.length; i++) {\n    b[i] = a[i];\n}\nb[${i}][${j}] = ${v};\nb[${k}] = new int[]{${w}};\nSystem.out.println(Arrays.deepToString(a));\nSystem.out.println(Arrays.deepToString(b));`;
      const loesung = `${deep(aNeu)}\n${deep(bNeu)}\n`;
      const aGanzNeu = kopie(bNeu);
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${deep(a)}\n${deep(bNeu)}`, meldung: "`b[i] = a[i]` kopiert nur den Verweis auf die Zeile. Die Änderung eines Elements über `b` ist auch in `a` zu sehen." },
              { wert: `${deep(aGanzNeu)}\n${deep(bNeu)}`, meldung: "`b[k] = new int[]{…}` ändert einen Platz im äußeren Array von `b`. Das äußere Array von `a` ist ein anderes und bleibt unberührt." },
            ]),
          },
        ],
        hinweis: "Unterscheide eine Änderung eines Elements (`b[i][j] = …`) von einer Änderung eines Platzes im äußeren Array (`b[k] = …`).",
        loesung: `**Ansatz:** \`a\` und \`b\` haben zwei verschiedene äußere Arrays, die zunächst auf dieselben Zeilen zeigen.\n---\n\`b[${i}][${j}] = ${v}\` ändert die gemeinsame Zeile ${i}. Das sehen \`a\` und \`b\`.\n---\n\`b[${k}] = new int[]{${w}}\` lenkt nur den Platz ${k} von \`b\` auf eine neue Zeile um. \`a[${k}]\` bleibt die alte Zeile.`,
      };
    },
  }),
];
