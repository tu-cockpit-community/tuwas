import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 16 (Abschlussprojekt: Sokoban und Mastermind auf Arrays).
 * Die Referenzrechnungen bilden die Methoden des Kapitels nach (feld[y][x], Positionen als {x, y},
 * Richtungscodes 1 oben, 2 unten, 3 links, 4 rechts, Zug nach den Sokoban-Regeln, Mastermind-Pins).
 * Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "projekt";

type Fehler = { wert: string; meldung: string };

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: Fehler[]): Fehler[] | undefined {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const rest = fehler.filter((f) => norm(f.wert) !== norm(loesung));
  return rest.length ? rest : undefined;
}

/** Zahl-Fehlerbilder ohne den richtigen Wert und ohne Dubletten */
function zahlFehler(richtig: number, fehler: { wert: number; meldung: string }[]): Fehler[] | undefined {
  const gesehen = new Set<number>();
  const rest = fehler.filter((f) => {
    if (f.wert === richtig || gesehen.has(f.wert)) return false;
    gesehen.add(f.wert);
    return true;
  });
  return rest.length ? rest.map((f) => ({ wert: String(f.wert), meldung: f.meldung })) : undefined;
}

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

/** Spielfeld als Java-Initialisierer mit toCharArray, eine Zeile pro Feldzeile */
function feldJava(zeilen: string[], tiefe: number): string {
  const innen = zeilen.map((z) => `${" ".repeat(tiefe + 4)}"${z}".toCharArray()`).join(",\n");
  return `char[][] feld = {\n${innen}\n${" ".repeat(tiefe)}};`;
}

/** Spielfeld als Codeblock für die Angabe */
const feldBlock = (zeilen: string[]) => "```\n" + zeilen.join("\n") + "\n```";

/** Rechteckiges Level mit Wandrand, `b` mal `h` Innenfeldern, genau einer Figur und `kisten` Kisten */
function zufallsLevel(r: Rng, b: number, h: number, kisten: number, innenwaende = 0): string[] {
  const innen: string[][] = Array.from({ length: h }, () => Array.from({ length: b }, () => " "));
  const frei = () => {
    for (;;) {
      const x = r.int(0, b - 1);
      const y = r.int(0, h - 1);
      if (innen[y][x] === " ") return [x, y];
    }
  };
  const [fx, fy] = frei();
  innen[fy][fx] = "@";
  for (let i = 0; i < kisten; i++) {
    const [x, y] = frei();
    innen[y][x] = "$";
  }
  for (let i = 0; i < innenwaende; i++) {
    const [x, y] = frei();
    innen[y][x] = "#";
  }
  const rand = "#".repeat(b + 2);
  return [rand, ...innen.map((z) => "#" + z.join("") + "#"), rand];
}

function findeFigur(f: string[]): [number, number] {
  for (let y = 0; y < f.length; y++) {
    const x = f[y].indexOf("@");
    if (x >= 0) return [x, y];
  }
  throw new Error("keine Figur");
}

const DX = [0, 0, 0, -1, 1];
const DY = [0, -1, 1, 0, 0];
const RICHTUNG = ["keine", "oben", "unten", "links", "rechts"];

/** Zug nach den Regeln aus 16.4 auf einer Kopie; liefert neues Feld und Rückgabewert */
function bewege(f: string[], richtung: number): { feld: string[]; ok: boolean } {
  const g = f.map((z) => z.split(""));
  const [x, y] = findeFigur(f);
  const vx = x + DX[richtung];
  const vy = y + DY[richtung];
  const c = g[vy][vx];
  if (c === "#") return { feld: f, ok: false };
  if (c === "$") {
    const hx = vx + DX[richtung];
    const hy = vy + DY[richtung];
    if (g[hy][hx] !== " ") return { feld: f, ok: false };
    g[hy][hx] = "$";
  }
  g[vy][vx] = "@";
  g[y][x] = " ";
  return { feld: g.map((z) => z.join("")), ok: true };
}

/** Java-Quelltext der Hilfsmethoden findeFigur, nachbar und bewege (wie im Kapitel) */
const JAVA_BEWEGE = `public static int[] findeFigur(char[][] feld) {
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '@') {
                return new int[]{x, y};
            }
        }
    }
    return null;
}

public static int[] nachbar(int x, int y, int richtung) {
    switch (richtung) {
        case 1: return new int[]{x, y - 1};
        case 2: return new int[]{x, y + 1};
        case 3: return new int[]{x - 1, y};
        case 4: return new int[]{x + 1, y};
        default: return new int[]{x, y};
    }
}

public static boolean bewege(char[][] feld, int richtung) {
    int[] pos = findeFigur(feld);
    int[] vor = nachbar(pos[0], pos[1], richtung);
    char c = feld[vor[1]][vor[0]];
    if (c == '#') {
        return false;
    }
    if (c == '$') {
        int[] hinter = nachbar(vor[0], vor[1], richtung);
        if (feld[hinter[1]][hinter[0]] != ' ') {
            return false;
        }
        feld[hinter[1]][hinter[0]] = '$';
    }
    feld[vor[1]][vor[0]] = '@';
    feld[pos[1]][pos[0]] = ' ';
    return true;
}`;

/** n verschiedene Zahlen aus 1..m in zufälliger Reihenfolge */
function verschiedene(r: Rng, n: number, m: number): number[] {
  return r.mische(Array.from({ length: m }, (_, i) => i + 1)).slice(0, n);
}

function pinsVerschieden(g: number[], v: number[]): [number, number] {
  let rot = 0;
  let weiss = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i] === g[i]) rot++;
    else if (g.includes(v[i])) weiss++;
  }
  return [rot, weiss];
}

function pinsMitWiederholung(g: number[], v: number[], farben: number): [number, number] {
  let rot = 0;
  for (let i = 0; i < g.length; i++) if (g[i] === v[i]) rot++;
  let gemeinsam = 0;
  for (let f = 1; f <= farben; f++) {
    gemeinsam += Math.min(g.filter((x) => x === f).length, v.filter((x) => x === f).length);
  }
  return [rot, gemeinsam - rot];
}

const zeichenName = (c: string) => (c === " " ? "ein Leerzeichen" : `\`'${c}'\``);

export const DRILLS: Drill[] = [
  drill({
    id: "pj-d-feld-lesen",
    kapitel: K,
    titel: "Ein Feld mit feld[y][x] lesen",
    niveau: 1,
    erzeuge: (r) => {
      const f = zufallsLevel(r, r.int(3, 5), r.int(2, 3), r.int(1, 2), r.int(0, 1));
      const y = r.int(1, f.length - 2);
      const x = r.int(1, f[0].length - 2);
      const zeichen = ["#", "$", "@", " "];
      const c = f[y][x];
      const vertauscht = x < f.length && y < f[x].length ? f[x][y] : undefined;
      const fehler =
        vertauscht !== undefined && vertauscht !== c
          ? [{ wert: zeichen.indexOf(vertauscht), meldung: `Das ist \`feld[${x}][${y}]\`. Der erste Index ist die **Zeile**. \`feld[${y}][${x}]\` ist Zeile ${y}, Stelle ${x}.` }]
          : undefined;
      return {
        angabe: `Gegeben ist das Spielfeld\n\n${feldBlock(f)}\n\nWelches Zeichen ist \`feld[${y}][${x}]\`? Zeilen und Stellen werden ab 0 gezählt.`,
        teile: [
          {
            typ: "auswahl",
            optionen: ["`'#'` (Wand)", "`'$'` (Kiste)", "`'@'` (Figur)", "`' '` (Leerzeichen)"],
            richtig: [zeichen.indexOf(c)],
            fehler: fehler,
          },
        ],
        hinweis: "Zuerst die Zeile mit dem ersten Index suchen, dann darin die Stelle mit dem zweiten Index.",
        loesung: `**Ansatz:** \`feld[${y}]\` ist die Zeile \`${f[y]}\`.\n---\nDarin hat die Stelle ${x} den Wert ${zeichenName(c)}.`,
      };
    },
  }),

  drill({
    id: "pj-d-text-masse",
    kapitel: K,
    titel: "Zeilen und Länge eines Level-Texts",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(3, 5);
      const zeilen = Array.from({ length: n }, () => {
        const len = r.int(3, 7);
        return Array.from({ length: len }, (_, i) => (i === 0 || i === len - 1 ? "#" : r.wahl(["#", " ", "$", "."]))).join("");
      });
      const text = zeilen.join("\\n");
      const max = Math.max(...zeilen.map((z) => z.length));
      const summe = zeilen.reduce((s, z) => s + z.length, 0);
      const laenge = summe + (n - 1);
      return {
        angabe: `Ein Level kommt als String \`"${text}"\` an und wird in ein \`char[][] feld\` umgewandelt, eine Zeile pro Textzeile.\n\n**a)** Welchen Wert hat \`feld.length\`?\n\n**b)** Wie lang ist die längste Zeile?\n\n**c)** Welchen Wert hat \`text.length()\`?`,
        teile: [
          { typ: "zahl", label: "a)", loesung: String(n), fehler: zahlFehler(n, [{ wert: n - 1, meldung: `${n - 1} Zeilenumbrüche trennen **${n}** Zeilen.` }]) },
          { typ: "zahl", label: "b)", loesung: String(max), fehler: zahlFehler(max, [{ wert: zeilen[0].length, meldung: "Das ist die Länge der ersten Zeile. Gefragt ist die längste." }]) },
          {
            typ: "zahl",
            label: "c)",
            loesung: `${summe} + ${n - 1}`,
            fehler: zahlFehler(laenge, [
              { wert: summe, meldung: "Auch jeder Zeilenumbruch ist ein Zeichen des Strings." },
              { wert: summe + 2 * (n - 1), meldung: "`\\n` ist ein einziges Zeichen, nicht zwei." },
            ]),
          },
        ],
        hinweis: "Zerlege den Text an den Zeilenumbrüchen. Es gibt eine Zeile mehr als Umbrüche.",
        loesung: `**Ansatz:** Die Zeilen sind die Stücke zwischen den Umbrüchen: ${zeilen.map((z) => `\`${z}\` (${z.length})`).join(", ")}.\n---\na) ${n} Zeilen. b) Die längste Zeile hat ${max} Zeichen.\n---\nc) ${summe} Zeichen in den Zeilen und ${n - 1} Umbrüche, zusammen ${laenge}.`,
      };
    },
  }),

  drill({
    id: "pj-d-figur",
    kapitel: K,
    titel: "Die Position der Figur ablesen",
    niveau: 1,
    erzeuge: (r) => {
      const f = zufallsLevel(r, r.int(4, 6), r.int(2, 4), r.int(1, 3));
      const [x, y] = findeFigur(f);
      return {
        angabe: `\`findeFigur\` liefert die Position der Figur als \`{x, y}\`. Welche Werte liefert sie für dieses Spielfeld?\n\n${feldBlock(f)}`,
        teile: [
          { typ: "zahl", label: "`x` (Spalte)", loesung: String(x), fehler: zahlFehler(x, [{ wert: y, meldung: "Das ist die Zeile. `x` ist die Stelle in der Zeile, von links ab 0 gezählt." }]) },
          { typ: "zahl", label: "`y` (Zeile)", loesung: String(y), fehler: zahlFehler(y, [{ wert: x, meldung: "Das ist die Spalte. `y` ist die Nummer der Zeile, von oben ab 0 gezählt." }]) },
        ],
        hinweis: "Die oberste Wandzeile ist Zeile 0, die linke Wand ist Stelle 0.",
        loesung: `**Ansatz:** Zeile und Stelle des \`@\` ab 0 abzählen.\n---\nDas \`@\` steht in Zeile ${y} (\`${f[y]}\`) an der Stelle ${x}. Ergebnis \`{${x}, ${y}}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-nachbar",
    kapitel: K,
    titel: "Das Nachbarfeld in einer Richtung",
    niveau: 1,
    erzeuge: (r) => {
      const x = r.int(1, 8);
      const y = r.int(1, 8);
      const ri = r.int(1, 4);
      const nx = x + DX[ri];
      const ny = y + DY[ri];
      const senkrecht = ri <= 2;
      return {
        angabe: `Die Figur steht bei \`x = ${x}\`, \`y = ${y}\`. Welche Koordinaten hat das Nachbarfeld in Richtung ${ri} (${RICHTUNG[ri]})?`,
        teile: [
          { typ: "zahl", label: "`x`", loesung: String(nx), fehler: senkrecht ? undefined : zahlFehler(nx, [{ wert: x - DX[ri], meldung: "Links heißt eine kleinere Spaltennummer, rechts eine größere." }]) },
          { typ: "zahl", label: "`y`", loesung: String(ny), fehler: senkrecht ? zahlFehler(ny, [{ wert: y - DY[ri], meldung: "Die Zeilen werden von oben nach unten gezählt. Oben heißt `y - 1`, unten `y + 1`." }]) : undefined },
        ],
        hinweis: "Bei oben und unten ändert sich nur `y`, bei links und rechts nur `x`, jeweils um 1.",
        loesung: `**Ansatz:** Bei Richtung ${ri} (${RICHTUNG[ri]}) wird ${senkrecht ? "`y`" : "`x`"} um 1 ${(senkrecht ? DY[ri] : DX[ri]) < 0 ? "kleiner" : "größer"}, die andere Koordinate bleibt gleich.\n---\nDas Nachbarfeld ist \`{${nx}, ${ny}}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-pixel",
    kapitel: K,
    titel: "Pixelkoordinaten eines Felds",
    niveau: 1,
    erzeuge: (r) => {
      const G = r.wahl([20, 24, 30, 32, 40, 48]);
      const x = r.int(0, 9);
      let y = r.int(0, 7);
      while (y === x) y = r.int(0, 7);
      return {
        angabe: `Das Spielfeld wird mit der Feldgröße \`G = ${G}\` gezeichnet. Bei welchen Pixelkoordinaten liegt die linke obere Ecke des Felds in Spalte ${x} und Zeile ${y}?`,
        teile: [
          { typ: "zahl", label: "x in Pixel", loesung: `${x} * ${G}`, fehler: zahlFehler(x * G, [{ wert: y * G, meldung: "Für die waagrechte Pixelkoordinate zählt die Spalte, nicht die Zeile." }]) },
          { typ: "zahl", label: "y in Pixel", loesung: `${y} * ${G}`, fehler: zahlFehler(y * G, [{ wert: x * G, meldung: "Für die senkrechte Pixelkoordinate zählt die Zeile, nicht die Spalte." }]) },
        ],
        hinweis: "Links vom Feld liegen so viele ganze Felder, wie die Spaltennummer angibt.",
        loesung: `**Ansatz:** Die linke obere Ecke liegt bei \`(x · G, y · G)\`.\n---\n\`${x} · ${G} = ${x * G}\` und \`${y} · ${G} = ${y * G}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-fenster",
    kapitel: K,
    titel: "Die Fenstergröße für ein Level",
    niveau: 2,
    erzeuge: (r) => {
      const G = r.wahl([24, 30, 32, 40]);
      const n = r.int(3, 5);
      let laengen = Array.from({ length: n }, () => r.int(4, 9));
      while (laengen[0] === Math.max(...laengen)) laengen = Array.from({ length: n }, () => r.int(4, 9));
      const zeilen = laengen.map((l) => "#".repeat(l));
      const max = Math.max(...laengen);
      return {
        angabe: `Ein ausgefranstes Level hat ${n} Zeilen mit den Längen ${laengen.join(", ")}:\n\n${feldBlock(zeilen)}\n\nWie breit und wie hoch muss das Fenster in Pixel sein, wenn jedes Feld \`G = ${G}\` Pixel groß ist?`,
        teile: [
          { typ: "zahl", label: "Breite", loesung: `${max} * ${G}`, fehler: zahlFehler(max * G, [{ wert: laengen[0] * G, meldung: "Das ist die Breite der ersten Zeile. Das Fenster muss die **längste** Zeile aufnehmen." }]) },
          { typ: "zahl", label: "Höhe", loesung: `${n} * ${G}`, fehler: zahlFehler(n * G, [{ wert: (n - 1) * G, meldung: `Es sind ${n} Zeilen, nicht ${n - 1}.` }]) },
        ],
        hinweis: "Die Breite richtet sich nach der längsten Zeile, die Höhe nach der Zahl der Zeilen.",
        loesung: `**Ansatz:** Längste Zeile und Zeilenzahl bestimmen und mit \`G\` multiplizieren.\n---\nDie längste Zeile hat ${max} Felder: Breite \`${max} · ${G} = ${max * G}\`.\n---\n${n} Zeilen: Höhe \`${n} · ${G} = ${n * G}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-weg",
    kapitel: K,
    titel: "Einen Weg mit Richtungstabellen gehen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const wege = Array.from({ length: n }, () => r.int(1, 4));
      if (!wege.some((w) => w <= 2)) wege[0] = r.int(1, 2);
      const sx = r.int(2, 5);
      const sy = r.int(2, 5);
      let x = sx;
      let y = sy;
      let fy = sy;
      const schritte: string[] = [];
      for (const w of wege) {
        x += DX[w];
        y += DY[w];
        fy -= DY[w];
        schritte.push(`${RICHTUNG[w]} \`(${x}, ${y})\``);
      }
      const loesung = `${x} ${y}\n`;
      const code = `int[] dx = {0, 0, 0, -1, 1};\nint[] dy = {0, -1, 1, 0, 0};\nint[] wege = {${wege.join(", ")}};\nint x = ${sx};\nint y = ${sy};\nfor (int i = 0; i < wege.length; i++) {\n    x = x + dx[wege[i]];\n    y = y + dy[wege[i]];\n}\nSystem.out.println(x + " " + y);\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${x} ${fy}`, meldung: "`dy[1]` ist -1: Richtung 1 (oben) verkleinert `y`. Du hast oben und unten vertauscht." }]),
          },
        ],
        hinweis: "Verfolge `x` und `y` nach jedem Schritt. `wege[i]` ist der Index in `dx` und `dy`.",
        loesung: `**Ansatz:** Für jeden Richtungscode \`dx\` und \`dy\` nachschlagen und addieren.\n---\nStart \`(${sx}, ${sy})\`, dann ${schritte.join(", ")}.\n---\nAusgabe \`${x} ${y}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-kisten-trace",
    kapitel: K,
    titel: "Kisten in Lesereihenfolge sammeln",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(2, 4);
      const f = zufallsLevel(r, r.int(4, 6), r.int(3, 4), k);
      const pos: [number, number][] = [];
      f.forEach((z, y) => z.split("").forEach((c, x) => c === "$" && pos.push([x, y])));
      const loesung = pos.map(([x, y]) => [x, y]);
      const vertauscht = pos.flatMap(([x, y]) => [String(y), String(x)]);
      const istGleich = vertauscht.join("|") === pos.flat().map(String).join("|");
      return {
        angabe: `\`kistenPositionen\` sammelt die Positionen aller Kisten in Lesereihenfolge. Trage die gespeicherten Positionen ein.\n\n${feldBlock(f)}`,
        teile: [
          {
            typ: "trace",
            spalten: ["x", "y"],
            zeilen: pos.map((_, i) => `${i + 1}. Kiste`),
            loesung,
            fehler: istGleich ? undefined : [{ wert: vertauscht, meldung: "Gespeichert wird `{x, y}`: zuerst die Stelle in der Zeile, dann die Zeile." }],
          },
        ],
        hinweis: "Lies das Feld wie einen Text: Zeile für Zeile, in jeder Zeile von links nach rechts.",
        loesung: `**Ansatz:** Kisten in Lesereihenfolge suchen und jeweils \`{x, y}\` notieren.\n---\nGefunden werden ${pos.map(([x, y]) => `\`{${x}, ${y}}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "pj-d-sieg",
    kapitel: K,
    titel: "Ist das Level gelöst?",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(2, 3);
      const f = zufallsLevel(r, r.int(4, 6), r.int(3, 4), k);
      const kisten: [number, number][] = [];
      const frei: [number, number][] = [];
      f.forEach((z, y) => z.split("").forEach((c, x) => (c === "$" ? kisten.push([x, y]) : c === " " && frei.push([x, y]))));
      const belegt = r.int(Math.max(0, k - 2), k);
      const ziele = [...r.mische(kisten).slice(0, belegt), ...r.mische(frei).slice(0, k - belegt)];
      const geloest = belegt === k;
      return {
        angabe: `Das Spielfeld ist\n\n${feldBlock(f)}\n\nund die Zielliste lautet \`{${ziele.map(([x, y]) => `{${x}, ${y}}`).join(", ")}}\`, jede Zeile als \`{x, y}\`.\n\n**a)** Auf wie vielen Zielen liegt eine Kiste?\n\n**b)** Ist das Level gelöst?`,
        teile: [
          {
            typ: "zahl",
            label: "a)",
            loesung: String(belegt),
            fehler: zahlFehler(belegt, [{ wert: k, meldung: "Nicht jede Kiste liegt auf einem Ziel. Schau für jedes Ziel `{x, y}` bei `feld[y][x]` nach." }]),
          },
          {
            typ: "auswahl",
            label: "b)",
            optionen: ["ja, gelöst", "nein, noch nicht gelöst"],
            richtig: [geloest ? 0 : 1],
            fehler: [
              geloest
                ? { wert: 1, meldung: "Auf jedem Ziel liegt eine Kiste. Bei gleich vielen Kisten wie Zielen ist das Level dann gelöst." }
                : { wert: 0, meldung: "Gelöst ist erst, wenn auf **jedem** Ziel eine Kiste liegt. Ein freies Ziel genügt für „nein“." },
            ],
          },
        ],
        hinweis: "Lies jedes Ziel als `{x, y}` und schau bei `feld[y][x]` nach, ob dort `$` steht.",
        loesung: `**Ansatz:** Jedes Ziel im Feld nachschlagen.\n---\n${ziele.map(([x, y]) => `\`{${x}, ${y}}\`: ${f[y][x] === "$" ? "Kiste" : "frei"}`).join(", ")}.\n---\n${belegt} von ${k} Zielen tragen eine Kiste, also ${geloest ? "gelöst" : "nicht gelöst"}.`,
      };
    },
  }),

  drill({
    id: "pj-d-zug",
    kapitel: K,
    titel: "Einen Zug ausführen",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.int(5, 7);
      const innen = Array.from({ length: b }, () => r.wahl([" ", " ", "$", "$", "#"]));
      const fx = r.int(1, b - 2);
      innen[fx] = "@";
      const ri = r.wahl([3, 4]);
      const nachbar = fx + DX[ri];
      if (r.zufall() < 0.7) innen[nachbar] = "$";
      const zeile = "#" + innen.join("") + "#";
      const f = ["#".repeat(b + 2), zeile, "#".repeat(b + 2)];
      const { feld: neu, ok } = bewege(f, ri);
      const loesung = `${neu[1]}\n${ok}\n`;
      // Fehlerbild 1: hinter der Kiste nur auf Wand geprüft
      const g = zeile.split("");
      const x = fx + 1;
      const v = x + DX[ri];
      const h = v + DX[ri];
      let naiv: string | undefined;
      if (g[v] === "$" && g[h] === "$") {
        const n = [...g];
        n[h] = "$";
        n[v] = "@";
        n[x] = " ";
        naiv = `${n.join("")}\ntrue`;
      }
      const methoden = einruecken(JAVA_BEWEGE, 4);
      const code = `public class Zug {\n${methoden}\n\n    public static void main(String[] args) {\n        ${feldJava(f, 8)}\n        boolean ok = bewege(feld, ${ri});\n        System.out.println(new String(feld[1]));\n        System.out.println(ok);\n    }\n}\n`;
      const fehler: Fehler[] = [];
      if (naiv) fehler.push({ wert: naiv, meldung: "Hinter der Kiste liegt eine zweite Kiste. Geschoben wird nur, wenn das Feld dahinter **frei** ist." });
      if (!ok) fehler.push({ wert: `${zeile}\ntrue`, meldung: "Bewegt sich nichts, liefert der Zug `false`." });
      else fehler.push({ wert: `${zeile}\nfalse`, meldung: "Prüfe die Felder `vor` und `hinter` noch einmal. Der Zug ist hier erlaubt." });
      return {
        angabe: `Das Programm führt den Zug \`bewege\` aus [16.4 Ein Spielzug: gehen und Kisten schieben](/lernen/ep1/projekt/ein-spielzug-gehen-und-kisten-schieben) in Richtung ${ri} (${RICHTUNG[ri]}) aus. Was gibt es aus?`,
        teile: [{ typ: "ausgabe", code, loesung, fehler: nurFalsche(loesung, fehler) }],
        hinweis: "Bestimme `vor` und, falls dort eine Kiste liegt, `hinter`. Dann entscheidet die Entscheidungstabelle.",
        loesung: `**Ansatz:** Die Figur steht in \`${zeile}\` an der Stelle ${x}. \`vor\` ist Stelle ${v} mit ${zeichenName(g[v])}.\n---\n${
          g[v] === "#" ? "Eine Wand: Nichts passiert." : g[v] === " " ? "Frei: Die Figur geht." : g[h] === " " ? `Eine Kiste, dahinter (Stelle ${h}) frei: Die Kiste wird geschoben.` : `Eine Kiste, dahinter (Stelle ${h}) ${zeichenName(g[h])}: Nichts passiert.`
        }\n---\nAusgabe: \`${neu[1]}\` und \`${ok}\`.`,
      };
    },
  }),

  drill({
    id: "pj-d-pfad",
    kapitel: K,
    titel: "Mehrere Züge hintereinander",
    niveau: 3,
    erzeuge: (r) => {
      let f = zufallsLevel(r, r.int(4, 5), r.int(2, 3), r.int(1, 2), r.int(0, 1));
      const start = f;
      const tasten = Array.from({ length: r.int(4, 6) }, () => r.int(1, 4));
      let ok = 0;
      const verlauf: string[] = [];
      for (const t of tasten) {
        const e = bewege(f, t);
        f = e.feld;
        if (e.ok) ok++;
        verlauf.push(`${RICHTUNG[t]}: ${e.ok ? "ja" : "nein"}`);
      }
      const loesung = `${f.join("\n")}\n${ok}\n`;
      const methoden = einruecken(JAVA_BEWEGE, 4);
      const code = `public class Pfad {\n${methoden}\n\n    public static void main(String[] args) {\n        ${feldJava(start, 8)}\n        int[] tasten = {${tasten.join(", ")}};\n        int schritte = 0;\n        for (int i = 0; i < tasten.length; i++) {\n            if (bewege(feld, tasten[i])) {\n                schritte++;\n            }\n        }\n        for (int y = 0; y < feld.length; y++) {\n            System.out.println(new String(feld[y]));\n        }\n        System.out.println(schritte);\n    }\n}\n`;
      return {
        angabe: "Das Programm führt mehrere Züge nach den Sokoban-Regeln aus und zählt die erfolgreichen. Was gibt es aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${f.join("\n")}\n${tasten.length}`, meldung: "Gezählt werden nur Züge, bei denen `bewege` den Wert `true` liefert." }]),
          },
        ],
        hinweis: "Verfolge das Spielfeld nach jedem Zug. Bei einer Wand oder einer blockierten Kiste bleibt alles gleich.",
        loesung: `**Ansatz:** Jeden Zug einzeln mit der Entscheidungstabelle auswerten und das Feld weiterführen.\n---\nZüge und Erfolg: ${verlauf.join(", ")}.\n---\n${ok} erfolgreiche Züge. Das Spielfeld danach:\n\n\`\`\`\n${f.join("\n")}\n\`\`\``,
      };
    },
  }),

  drill({
    id: "pj-d-mastermind",
    kapitel: K,
    titel: "Mastermind-Pins ohne Wiederholung",
    niveau: 2,
    erzeuge: (r) => {
      const farben = r.wahl([6, 8]);
      const g = verschiedene(r, 4, farben);
      const v = verschiedene(r, 4, farben);
      const [rot, weiss] = pinsVerschieden(g, v);
      return {
        angabe: `Der geheime Code ist \`{${g.join(", ")}}\`, der Versuch ist \`{${v.join(", ")}}\`. Alle Farben sind verschieden. Wie viele rote und weiße Pins gibt es?`,
        teile: [
          { typ: "zahl", label: "rot", loesung: String(rot), fehler: zahlFehler(rot, [{ wert: rot + weiss, meldung: "Rot gibt es nur an der **richtigen Stelle**. Farben an anderer Stelle sind weiß." }]) },
          { typ: "zahl", label: "weiß", loesung: String(weiss), fehler: zahlFehler(weiss, [{ wert: rot + weiss, meldung: "Rote Treffer zählen nicht zusätzlich als weiß. Jede Farbe bekommt höchstens einen Pin." }]) },
        ],
        hinweis: "Erst Stelle für Stelle vergleichen, dann die übrigen Farben im ganzen Code suchen.",
        loesung: `**Ansatz:** Rot an gleicher Stelle, weiß für die übrigen Farben, die im Code vorkommen.\n---\nRot: ${rot}. Weiß: ${weiss}.`,
      };
    },
  }),

  drill({
    id: "pj-d-mastermind-wdh",
    kapitel: K,
    titel: "Mastermind-Pins mit wiederholten Farben",
    niveau: 3,
    erzeuge: (r) => {
      const farben = 6;
      let g: number[] = [];
      let v: number[] = [];
      let naivWeiss = 0;
      let erg: [number, number] = [0, 0];
      for (let versuch = 0; versuch < 50; versuch++) {
        g = Array.from({ length: 4 }, () => r.int(1, 4));
        v = Array.from({ length: 4 }, () => r.int(1, 4));
        erg = pinsMitWiederholung(g, v, farben);
        naivWeiss = v.reduce((s, x, i) => (x === g[i] ? s : s + g.filter((y) => y === x).length), 0);
        if (naivWeiss !== erg[1]) break;
      }
      const [rot, weiss] = erg;
      const zaehle = (a: number[]) =>
        [1, 2, 3, 4]
          .map((f) => [f, a.filter((x) => x === f).length])
          .filter(([, n]) => n > 0)
          .map(([f, n]) => `${f}: ${n}`)
          .join(", ");
      return {
        angabe: `Farben dürfen sich wiederholen. Der geheime Code ist \`{${g.join(", ")}}\`, der Versuch ist \`{${v.join(", ")}}\`. Wie viele rote und weiße Pins gibt es? Jede Farbe des Codes kann nur einen Pin auslösen.`,
        teile: [
          { typ: "zahl", label: "rot", loesung: String(rot) },
          {
            typ: "zahl",
            label: "weiß",
            loesung: String(weiss),
            fehler: zahlFehler(weiss, [{ wert: naivWeiss, meldung: "Eine Farbe des Codes wurde mehrfach verwendet. Zähle je Farbe und nimm das Minimum der Anzahlen im Code und im Versuch." }]),
          },
        ],
        hinweis: "Rot wie gewohnt zählen. Dann je Farbe die Anzahlen in Code und Versuch vergleichen, das Minimum aufsummieren und rot abziehen.",
        loesung: `**Ansatz:** Rot an gleicher Stelle. Gemeinsame Farben je Farbe als Minimum der Anzahlen, weiß ist gemeinsam minus rot.\n---\nRot: ${rot}. Anzahlen im Code: ${zaehle(g)}. Im Versuch: ${zaehle(v)}.\n---\nGemeinsame Farben: ${rot + weiss}, also weiß \`${rot + weiss} - ${rot} = ${weiss}\`.`,
      };
    },
  }),
];
