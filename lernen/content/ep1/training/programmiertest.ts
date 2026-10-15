import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 20 (Programmiertest-Werkstatt). Jeder Generator baut eine Methode nach den Mustern
 * M1, M2 oder M3 der Programmiertests 2021 bis 2023 mit Zufallsdaten. Die Referenzrechnung in TypeScript bildet die
 * Java-Semantik nach (Arrays.deepToString-Format, Ganzzahlarithmetik). Der Validator führt die ersten Seeds jedes
 * `ausgabe`-Teils mit echtem Java aus.
 */

const K = "programmiertest";

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

const toStr = (z: (number | boolean)[]) => `[${z.join(", ")}]`;
const deep = (a: (number | boolean)[][]) => `[${a.map(toStr).join(", ")}]`;
const init = (a: Tabelle) => `{${a.map((z) => `{${z.join(", ")}}`).join(", ")}}`;
const init1 = (z: number[]) => `{${z.join(", ")}}`;
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

function zeile(r: Rng, laenge: number, min = 0, max = 9): number[] {
  return Array.from({ length: laenge }, () => r.int(min, max));
}

function jagged(r: Rng, zeilen: number, minL: number, maxL: number, min = 0, max = 9): Tabelle {
  return Array.from({ length: zeilen }, () => zeile(r, r.int(minL, maxL), min, max));
}

// ---------- Referenzimplementierungen ----------

function wiederhole(a: Tabelle, mal: number[], laengeOhneOriginal = false, immerVorwaerts = false): Tabelle {
  return a.map((z, i) => {
    const n = z.length;
    const len = laengeOhneOriginal ? n * Math.abs(mal[i]) : n * (Math.abs(mal[i]) + 1);
    return Array.from({ length: len }, (_, j) => (mal[i] >= 0 || immerVorwaerts ? z[j % n] : z[n - 1 - (j % n)]));
  });
}

function dreheZeilen(a: Tabelle, l: number, r: number) {
  while (l < r) {
    const h = a[l];
    a[l] = a[r];
    a[r] = h;
    l++;
    r--;
  }
}

function innerhalb(s: string): string {
  if (s.length < 2) return "";
  if (s[0] !== "(") return innerhalb(s.slice(1));
  if (s[s.length - 1] !== ")") return innerhalb(s.slice(0, -1));
  return s.slice(1, -1);
}

const zaehle = (s: string, c: string) => [...s].filter((x) => x === c).length;

const METHODE_WIEDERHOLE = `public static int[][] wiederhole(int[][] input, int[] mal) {
    int[][] r = new int[input.length][];
    for (int i = 0; i < input.length; i++) {
        int n = input[i].length;
        r[i] = new int[n * (Math.abs(mal[i]) + 1)];
        for (int j = 0; j < r[i].length; j++) {
            if (mal[i] >= 0) {
                r[i][j] = input[i][j % n];
            } else {
                r[i][j] = input[i][n - 1 - j % n];
            }
        }
    }
    return r;
}`;

const METHODE_DREHE = `public static void dreheZeilen(int[][] a, int i1, int i2) {
    int l = Math.min(i1, i2);
    int r = Math.max(i1, i2);
    while (l < r) {
        int[] h = a[l];
        a[l] = a[r];
        a[r] = h;
        l++;
        r--;
    }
}`;

export const DRILLS: Drill[] = [
  drill({
    id: "pt-d-wiederhole",
    kapitel: K,
    titel: "M1: Zeilen wiederholen, auch rückwärts",
    niveau: 2,
    erzeuge: (r) => {
      const z = r.int(2, 3);
      const a = jagged(r, z, 1, 3);
      const mal = Array.from({ length: z }, () => r.int(-2, 2));
      if (!mal.some((m) => m < 0)) mal[r.int(0, z - 1)] = -r.int(1, 2);
      const erg = wiederhole(a, mal);
      const loesung = `${deep(erg)}\n`;
      const code = klasse("Wiederholen", METHODE_WIEDERHOLE, `int[][] t = ${init(a)};\nSystem.out.println(Arrays.deepToString(wiederhole(t, new int[]${init1(mal)})));`);
      return {
        angabe: `\`wiederhole(input, mal)\` liefert ein neues Array. Zeile \`i\` enthält die Eingabezeile und \`|mal[i]|\` Wiederholungen davon, bei negativem \`mal[i]\` rückwärts. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: deep(wiederhole(a, mal, true)), meldung: "Das Original zählt mit. Die Zeile steht `|mal[i]| + 1`-mal da, bei `mal[i] = 0` also einmal." },
              { wert: deep(wiederhole(a, mal, false, true)), meldung: "Bei negativem `mal[i]` läuft die Zeile rückwärts, auch in allen Wiederholungen. Der Index ist dann `n - 1 - j % n`." },
            ]),
          },
        ],
        hinweis: "Die Länge der Zeile `i` ist `n · (|mal[i]| + 1)`. Bei negativem `mal[i]` beginnt jede Wiederholung beim letzten Element.",
        loesung: `**Ansatz:** Für jede Zeile Länge und Richtung bestimmen.\n---\n${a
          .map((zz, i) => `Zeile ${i}: \`${init1(zz)}\` mit \`mal = ${mal[i]}\` ergibt ${Math.abs(mal[i]) + 1} Durchgänge${mal[i] < 0 ? " rückwärts" : ""}, also \`${toStr(erg[i])}\``)
          .join(". ")}.\n---\nZusammen: \`${deep(erg)}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-drehe",
    kapitel: K,
    titel: "M2: Zeilen in einem Bereich umdrehen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 5);
      const a = jagged(r, n, 0, 3);
      let i1 = r.int(0, n - 1);
      let i2 = r.int(0, n - 1);
      while (Math.abs(i1 - i2) < 2) {
        i1 = r.int(0, n - 1);
        i2 = r.int(0, n - 1);
      }
      const l = Math.min(i1, i2);
      const rr = Math.max(i1, i2);
      const erg = kopie(a);
      dreheZeilen(erg, l, rr);
      const exklusiv = kopie(a);
      dreheZeilen(exklusiv, l, rr - 1);
      const loesung = `${deep(erg)}\n`;
      const fehler = [{ wert: deep(exklusiv), meldung: `Beide Grenzen sind inklusive. Der Bereich reicht von Zeile ${l} bis einschließlich Zeile ${rr}.` }];
      if (i1 > i2) fehler.push({ wert: deep(a), meldung: "Auch bei `i1 > i2` dreht sich der Bereich um. `Math.min` und `Math.max` machen daraus den Bereich von der kleineren zur größeren Zeile." });
      const code = klasse("Drehen", METHODE_DREHE, `int[][] t = ${init(a)};\ndreheZeilen(t, ${i1}, ${i2});\nSystem.out.println(Arrays.deepToString(t));`);
      return {
        angabe: `\`dreheZeilen(a, i1, i2)\` dreht die Reihenfolge der Zeilen von Index \`i1\` bis \`i2\` um, beide inklusive, auch wenn \`i1 > i2\`. Was gibt das Programm aus?`,
        teile: [{ typ: "ausgabe", code, loesung, fehler: nurFalsche(loesung, fehler) }],
        hinweis: "Tausche die Zeilen von außen nach innen, bis sich die zwei Grenzen treffen.",
        loesung: `**Ansatz:** Bereich ${l} bis ${rr}. Getauscht werden Zeilenverweise, von außen nach innen.\n---\nTauschpaare: ${Array.from({ length: Math.floor((rr - l + 1) / 2) }, (_, k) => `(${l + k}, ${rr - k})`).join(", ")}. Zeilen außerhalb des Bereichs bleiben stehen.\n---\nErgebnis \`${deep(erg)}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-entferne",
    kapitel: K,
    titel: "M2: Ein Element von hinten gezählt entfernen",
    niveau: 2,
    erzeuge: (r) => {
      const a = jagged(r, r.int(3, 4), 0, 4);
      const k = r.int(0, 2);
      const erg = a.map((z) => (k < z.length ? z.filter((_, j) => j !== z.length - 1 - k) : [...z]));
      const vorne = a.map((z) => (k < z.length ? z.filter((_, j) => j !== k) : [...z]));
      const loesung = `${deep(erg)}\n`;
      const methode = `public static void entferneVonHinten(int[][] a, int k) {
    for (int i = 0; i < a.length; i++) {
        int n = a[i].length;
        if (k < n) {
            int weg = n - 1 - k;
            int[] neu = new int[n - 1];
            int z = 0;
            for (int j = 0; j < n; j++) {
                if (j != weg) {
                    neu[z] = a[i][j];
                    z++;
                }
            }
            a[i] = neu;
        }
    }
}`;
      const code = klasse("Hinten", methode, `int[][] t = ${init(a)};\nentferneVonHinten(t, ${k});\nSystem.out.println(Arrays.deepToString(t));`);
      return {
        angabe: `\`entferneVonHinten(a, k)\` entfernt aus jeder Zeile das Element, das an Position \`k\` vom Zeilenende gezählt steht (\`k = 0\` ist das letzte). Zu kurze Zeilen bleiben unverändert. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(vorne), meldung: `Gezählt wird vom **Ende** her. In einer Zeile der Länge \`n\` steht Position \`k\` am Index \`n - 1 - k\`, nicht am Index ${k}.` }]),
          },
        ],
        hinweis: "Rechne für jede Zeile den Index `n - 1 - k` aus. Gibt es ihn nicht, bleibt die Zeile, wie sie ist.",
        loesung: `**Ansatz:** Für jede Zeile den Index \`n - 1 - ${k}\` bestimmen.\n---\n${a
          .map((z, i) => (k < z.length ? `Zeile ${i}: Index ${z.length - 1 - k} fällt weg, es bleibt \`${toStr(erg[i])}\`` : `Zeile ${i} ist zu kurz und bleibt \`${toStr(z)}\``))
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "pt-d-schiebe",
    kapitel: K,
    titel: "M2: Nach rechts schieben mit Verlängerung",
    niveau: 2,
    erzeuge: (r) => {
      const a = jagged(r, 3, 1, 3, 0, 3);
      a[0][a[0].length - 1] = 0;
      if (a[1][a[1].length - 1] === 0) a[1][a[1].length - 1] = r.int(1, 3);
      const erg = a.map((z) => (z[z.length - 1] === 0 ? [0, ...z.slice(0, -1)] : [0, ...z]));
      const immer = a.map((z) => [0, ...z]);
      const loesung = `${deep(erg)}\n`;
      const methode = `public static void schiebeRechts(int[][] a) {
    for (int i = 0; i < a.length; i++) {
        int n = a[i].length;
        if (a[i][n - 1] == 0) {
            for (int j = n - 1; j > 0; j--) {
                a[i][j] = a[i][j - 1];
            }
            a[i][0] = 0;
        } else {
            int[] neu = new int[n + 1];
            for (int j = 0; j < n; j++) {
                neu[j + 1] = a[i][j];
            }
            a[i] = neu;
        }
    }
}`;
      const code = klasse("Schieben", methode, `int[][] t = ${init(a)};\nschiebeRechts(t);\nSystem.out.println(Arrays.deepToString(t));`);
      return {
        angabe: "`schiebeRechts(a)` schiebt in jeder Zeile alle Einträge um eine Position nach rechts, vorne kommt eine 0 dazu. Eine 0 am Zeilenende fällt weg. Steht am Ende etwas anderes, wird die Zeile um 1 länger. Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(immer), meldung: "Eine 0 am Zeilenende fällt weg, die Zeile behält dann ihre Länge. Nur wenn am Ende keine 0 steht, wird sie länger." }]),
          },
        ],
        hinweis: "Schau für jede Zeile zuerst auf das letzte Element.",
        loesung: `**Ansatz:** Je Zeile entscheidet das letzte Element, ob verschoben oder verlängert wird.\n---\n${a
          .map((z, i) => `Zeile ${i} \`${toStr(z)}\` endet mit ${z[z.length - 1]}, also ${z[z.length - 1] === 0 ? "gleiche Länge" : "eine längere Zeile"}: \`${toStr(erg[i])}\``)
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "pt-d-markiere",
    kapitel: K,
    titel: "M1: Wahrheitswerte an Positionen",
    niveau: 1,
    erzeuge: (r) => {
      const min = r.int(3, 5);
      const pos = [r.int(-1, min - 1), r.int(min, min + 2), -1];
      const p = r.mische(pos);
      const erg = p.map((x) => Array.from({ length: Math.max(min, x + 1) }, (_, j) => j === x));
      const ohneMin = p.map((x) => Array.from({ length: Math.max(0, x + 1) }, (_, j) => j === x));
      const loesung = `${deep(erg)}\n`;
      const methode = `public static boolean[][] markiere(int[] pos, int min) {
    boolean[][] r = new boolean[pos.length][];
    for (int i = 0; i < pos.length; i++) {
        r[i] = new boolean[Math.max(min, pos[i] + 1)];
        if (pos[i] >= 0) {
            r[i][pos[i]] = true;
        }
    }
    return r;
}`;
      const code = klasse("Markieren", methode, `System.out.println(Arrays.deepToString(markiere(new int[]${init1(p)}, ${min})));`);
      return {
        angabe: `\`markiere(pos, min)\` liefert ein \`boolean[][]\`. Zeile \`i\` ist mindestens \`min\` lang und hat genau an Index \`pos[i]\` den Wert \`true\`. Ist \`pos[i]\` zu groß, wird die Zeile so lang, dass dieser Index existiert. Ein negativer Wert bedeutet kein \`true\`. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(ohneMin), meldung: `Jede Zeile ist mindestens ${min} lang. Die Länge ist \`Math.max(min, pos[i] + 1)\`.` }]),
          },
        ],
        hinweis: "Länge jeder Zeile: das Maximum aus `min` und `pos[i] + 1`. Alle anderen Plätze sind `false`.",
        loesung: `**Ansatz:** Für jede Zeile die Länge \`Math.max(${min}, pos[i] + 1)\` bestimmen, dann das eine \`true\` setzen.\n---\n${p
          .map((x, i) => `Zeile ${i}: \`pos = ${x}\`, Länge ${Math.max(min, x + 1)}${x >= 0 ? `, \`true\` an Index ${x}` : ", kein `true`"}`)
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "pt-d-paare",
    kapitel: K,
    titel: "M3: Genau n geordnete Paare ab einem Index",
    niveau: 2,
    erzeuge: (r) => {
      const seq = zeile(r, r.int(6, 7), 0, 9);
      const index = r.int(0, 3);
      const paare = (strikt: boolean, ab: number) => {
        let c = 0;
        for (let i = ab; i < seq.length - 1; i++) if (strikt ? seq[i] < seq[i + 1] : seq[i] <= seq[i + 1]) c++;
        return c;
      };
      const c = paare(false, index);
      const n1 = Math.max(0, c + r.wahl([-1, 0, 0, 1]));
      const n2 = r.int(0, 4);
      const antw = (n: number, cc: number) => String(n === cc);
      const loesung = `${antw(n1, c)}\n${antw(n2, c)}\n`;
      const methode = `public static boolean hatNPaare(int[] seq, int n, int index) {
    if (index >= seq.length - 1) {
        return n == 0;
    }
    if (seq[index] <= seq[index + 1]) {
        return hatNPaare(seq, n - 1, index + 1);
    }
    return hatNPaare(seq, n, index + 1);
}`;
      const code = klasse("Paare", methode, `int[] seq = ${init1(seq)};\nSystem.out.println(hatNPaare(seq, ${n1}, ${index}));\nSystem.out.println(hatNPaare(seq, ${n2}, ${index}));`);
      const strikt = paare(true, index);
      const abNull = paare(false, 0);
      return {
        angabe: `\`hatNPaare(seq, n, index)\` prüft rekursiv, ob es ab \`index\` genau \`n\` Paare direkt aufeinanderfolgender Einträge mit \`seq[i] <= seq[i + 1]\` gibt. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${antw(n1, strikt)}\n${antw(n2, strikt)}`, meldung: "Ein Paar ist auch geordnet, wenn beide Einträge gleich sind. Die Bedingung ist `<=`, nicht `<`." },
              { wert: `${antw(n1, abNull)}\n${antw(n2, abNull)}`, meldung: `Die Zählung beginnt erst bei Index ${index}. Paare davor zählen nicht mit.` },
            ]),
          },
        ],
        hinweis: "Zähle zuerst alle geordneten Paare ab `index`. Dann ist die Antwort `true` genau für `n` gleich dieser Anzahl.",
        loesung: `**Ansatz:** Die Rekursion zählt \`n\` bei jedem geordneten Paar herunter. Am Ende muss \`n == 0\` sein, also ist nur die genaue Anzahl richtig.\n---\nAb Index ${index} gibt es ${c} geordnete Paare in \`${toStr(seq)}\`.\n---\nAufruf mit \`n = ${n1}\` liefert \`${antw(n1, c)}\`, mit \`n = ${n2}\` liefert \`${antw(n2, c)}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-klammer",
    kapitel: K,
    titel: "M3: Der Inhalt der äußersten Klammer",
    niveau: 2,
    erzeuge: (r) => {
      const zeichen = ["a", "b", "x", "(", ")", "("];
      const baue = () => {
        let s = "";
        const len = r.int(5, 8);
        for (let i = 0; i < len; i++) s += r.wahl(zeichen);
        if (!s.includes(")")) s = s.slice(0, -1) + ")";
        return s;
      };
      const w = [baue(), baue()];
      const erg = w.map(innerhalb);
      const ersteNaechste = (s: string) => {
        const a = s.indexOf("(");
        if (a < 0) return "";
        const b = s.indexOf(")", a + 1);
        return b < 0 ? "" : s.slice(a + 1, b);
      };
      const loesung = erg.map((x) => `[${x}]`).join("\n") + "\n";
      const methode = `public static String innerhalb(String s) {
    if (s.length() < 2) {
        return "";
    }
    if (s.charAt(0) != '(') {
        return innerhalb(s.substring(1));
    }
    if (s.charAt(s.length() - 1) != ')') {
        return innerhalb(s.substring(0, s.length() - 1));
    }
    return s.substring(1, s.length() - 1);
}`;
      const code = klasse("Klammer", methode, `System.out.println("[" + innerhalb("${w[0]}") + "]");\nSystem.out.println("[" + innerhalb("${w[1]}") + "]");`);
      return {
        angabe: "`innerhalb(s)` liefert den Text zwischen der **ersten** `(` und der **letzten** `)` von `s`, ohne diese Klammern. Steht keine `(` vor einer `)`, ist das Ergebnis leer. Was gibt das Programm aus? Die eckigen Klammern zeigen nur, wo das Ergebnis beginnt und endet.",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: w.map((s) => `[${ersteNaechste(s)}]`).join("\n"), meldung: "Gemeint ist die **äußerste** Klammer, also bis zur **letzten** `)`. Dazwischen dürfen weitere Klammern stehen." }]),
          },
        ],
        hinweis: "Schneide vorne ab, bis eine `(` vorne steht, und hinten, bis eine `)` hinten steht.",
        loesung: `**Ansatz:** Erste \`(\` und letzte \`)\` suchen. Liegt die \`(\` vor der \`)\`, ist das Ergebnis der Text dazwischen.\n---\n${w
          .map((s, i) => `\`"${s}"\` ergibt \`"${erg[i]}"\``)
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "pt-d-paritaet",
    kapitel: K,
    titel: "M3: Kommt ein Zeichen ungerade oft vor?",
    niveau: 1,
    erzeuge: (r) => {
      const wort = r.wahl(["Banane", "Kakao", "Mississippi", "Rhabarber", "Anaconda", "Ananas", "Tomate", "Otto", "Kokosnuss"]);
      const zeichen = [...new Set([...wort])];
      const c1 = r.wahl(zeichen);
      const gross = zeichen.find((x) => x !== x.toLowerCase());
      const c2 = gross && r.zufall() < 0.6 ? gross.toLowerCase() : r.wahl(zeichen);
      const ung = (c: string) => String(zaehle(wort, c) % 2 === 1);
      const egal = (c: string) => String([...wort].filter((x) => x.toLowerCase() === c.toLowerCase()).length % 2 === 1);
      const loesung = `${ung(c1)}\n${ung(c2)}\n`;
      const methode = `public static boolean ungeradeOft(String s, char c) {
    if (s.isEmpty()) {
        return false;
    }
    boolean rest = ungeradeOft(s.substring(1), c);
    if (s.charAt(0) == c) {
        return !rest;
    }
    return rest;
}`;
      const code = klasse("Paritaet", methode, `System.out.println(ungeradeOft("${wort}", '${c1}'));\nSystem.out.println(ungeradeOft("${wort}", '${c2}'));`);
      return {
        angabe: `\`ungeradeOft(s, c)\` liefert \`true\`, wenn \`c\` in \`s\` ungerade oft vorkommt. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${egal(c1)}\n${egal(c2)}`, meldung: "Groß- und Kleinbuchstaben sind verschiedene Zeichen. Zähle nur genau das angegebene Zeichen." },
              { wert: `${String(ung(c1) !== "true")}\n${String(ung(c2) !== "true")}`, meldung: "Gefragt ist **ungerade**. 0 und 2 sind gerade, 1 und 3 ungerade." },
            ]),
          },
        ],
        hinweis: "Zähle jedes Zeichen genau, mit Groß- und Kleinschreibung.",
        loesung: `**Ansatz:** Treffer zählen und auf ungerade prüfen.\n---\nIn \`"${wort}"\` kommt \`'${c1}'\` ${zaehle(wort, c1)}-mal vor, \`'${c2}'\` ${zaehle(wort, c2)}-mal.\n---\nAusgabe \`${ung(c1)}\` und \`${ung(c2)}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-rechteck",
    kapitel: K,
    titel: "M1: Kürzere Zeilen im Kreis auffüllen",
    niveau: 2,
    erzeuge: (r) => {
      const a = jagged(r, r.int(3, 4), 1, 4, 1, 9);
      a[r.int(0, a.length - 1)] = [];
      const max = Math.max(...a.map((z) => z.length));
      if (max === 0) a[0] = [r.int(1, 9), r.int(1, 9)];
      const m = Math.max(...a.map((z) => z.length));
      const erg = a.map((z) => Array.from({ length: m }, (_, j) => (z.length ? z[j % z.length] : 0)));
      const nullen = a.map((z) => Array.from({ length: m }, (_, j) => (j < z.length ? z[j] : 0)));
      const loesung = `${deep(erg)}\n`;
      const methode = `public static int[][] aufLaenge(int[][] input) {
    int max = 0;
    for (int i = 0; i < input.length; i++) {
        max = Math.max(max, input[i].length);
    }
    int[][] r = new int[input.length][max];
    for (int i = 0; i < input.length; i++) {
        int n = input[i].length;
        if (n > 0) {
            for (int j = 0; j < max; j++) {
                r[i][j] = input[i][j % n];
            }
        }
    }
    return r;
}`;
      const code = klasse("Rechteck", methode, `System.out.println(Arrays.deepToString(aufLaenge(new int[][]${init(a)})));`);
      return {
        angabe: "`aufLaenge(input)` macht jede Zeile so lang wie die längste. Kürzere Zeilen werden wiederholt, leere Zeilen mit Nullen gefüllt. Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: deep(nullen), meldung: "Kürzere Zeilen werden nicht mit Nullen aufgefüllt, sondern wiederholt. Nur leere Zeilen bestehen aus Nullen." }]),
          },
        ],
        hinweis: "Bestimme zuerst die längste Länge. Dann ist der Wert an Stelle `j` gleich `input[i][j % n]`.",
        loesung: `**Ansatz:** Längste Zeile hat die Länge ${m}. Jede Zeile wird im Kreis gelesen.\n---\n${a
          .map((z, i) => `\`${toStr(z)}\` wird zu \`${toStr(erg[i])}\``)
          .join(". ")}.`,
      };
    },
  }),

  drill({
    id: "pt-d-zeilenzahl",
    kapitel: K,
    titel: "M1: Die Zeilenzahl des Ergebnisses",
    niveau: 1,
    erzeuge: (r) => {
      const a = jagged(r, r.int(2, 4), 1, 5);
      const art = r.int(0, 2);
      const n = a.length;
      if (art === 0) {
        return {
          angabe: `\`stufenOben(input)\` stellt über die Kopien aller Zeilen von \`input\` eine Treppe aus so vielen Zeilen, wie die **erste** Zeile lang ist. Wie viele Zeilen hat \`stufenOben(new int[][]${init(a)})\`?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${a[0].length} + ${n}`,
              fehler: a[0].length + n !== a[a.length - 1].length + n ? [{ wert: String(a[a.length - 1].length + n), meldung: "Die Treppe richtet sich nach der **ersten** Zeile, nicht nach der letzten." }] : undefined,
            },
          ],
          hinweis: "Treppe plus Kopien.",
          loesung: `**Ansatz:** Zeilenzahl = Länge der ersten Zeile + Zeilenzahl von \`input\`.\n---\n${a[0].length} + ${n} = ${a[0].length + n}.`,
        };
      }
      if (art === 1) {
        return {
          angabe: `\`spiegeln(input)\` liefert erst Kopien aller Zeilen, dann die Zeilen rückwärts, wobei die letzte Zeile nur einmal vorkommt. Wie viele Zeilen hat \`spiegeln(new int[][]${init(a)})\`?`,
          teile: [{ typ: "zahl", loesung: `2 * ${n} - 1`, fehler: [{ wert: String(2 * n), meldung: "Die letzte Zeile steht nur einmal in der Mitte. Es sind `2n − 1` Zeilen." }] }],
          hinweis: "Hinweg n Zeilen, Rückweg eine weniger.",
          loesung: `**Ansatz:** \`n\` Zeilen hin, \`n − 1\` zurück.\n---\n2 · ${n} − 1 = ${2 * n - 1}.`,
        };
      }
      const anzahl = a.reduce((s, z) => s + z.length, 0);
      const zeilen = Math.ceil(anzahl / 3);
      return {
        angabe: `\`schlange(input)\` verteilt alle Werte von \`input\` auf Zeilen mit genau 3 Spalten und braucht dafür so wenige Zeilen wie möglich. Wie viele Zeilen hat \`schlange(new int[][]${init(a)})\`?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${anzahl} + 2 - mod(${anzahl} + 2, 3)) / 3`,
            fehler: anzahl % 3 !== 0 ? [{ wert: String(Math.floor(anzahl / 3)), meldung: "Es wird **auf**gerundet. Auch wenige übrige Werte brauchen eine eigene Zeile." }] : undefined,
          },
        ],
        hinweis: "Zähle alle Werte und teile durch 3, aufgerundet.",
        loesung: `**Ansatz:** Werte zählen, durch 3 teilen, aufrunden.\n---\n${anzahl} Werte ergeben ${zeilen} Zeilen. In ganzen Zahlen ist das \`(${anzahl} + 2) / 3 = ${zeilen}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-gegenueber",
    kapitel: K,
    titel: "M3: Die kleinste Summe gegenüberliegender Einträge",
    niveau: 2,
    erzeuge: (r) => {
      const len = r.wahl([6, 7, 8]);
      const seq = zeile(r, len, 0, 9);
      const start = r.int(0, 1);
      let end = len - 1;
      if ((end - start + 1) % 2 === 1) end--;
      const summen: number[] = [];
      for (let s = start, e = end; s < e; s++, e--) summen.push(seq[s] + seq[e]);
      const min = Math.min(...summen);
      const max = Math.max(...summen);
      const loesung = `${min}\n`;
      const methode = `public static int kleinsteGegenueber(int[] seq, int start, int end) {
    int summe = seq[start] + seq[end];
    if (end - start == 1) {
        return summe;
    }
    return Math.min(summe, kleinsteGegenueber(seq, start + 1, end - 1));
}`;
      const code = klasse("Gegenueber", methode, `System.out.println(kleinsteGegenueber(new int[]${init1(seq)}, ${start}, ${end}));`);
      return {
        angabe: `\`kleinsteGegenueber(seq, start, end)\` liefert rekursiv die kleinste der Summen \`seq[start] + seq[end]\`, \`seq[start + 1] + seq[end - 1]\` und so weiter. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(max), meldung: "Gesucht ist die **kleinste** Summe. `Math.min` vergleicht die eigene Summe mit dem Ergebnis des inneren Bereichs." },
              { wert: String(summen[0]), meldung: "Das ist nur die äußerste Summe. Die Rekursion vergleicht sie mit allen inneren Summen." },
            ]),
          },
        ],
        hinweis: "Schreib alle Summen von außen nach innen auf und nimm die kleinste.",
        loesung: `**Ansatz:** Summen von außen nach innen bilden, auf dem Rückweg das Minimum.\n---\nSummen: ${summen.join(", ")}.\n---\nDie kleinste ist ${min}.`,
      };
    },
  }),

  drill({
    id: "pt-d-wechsel",
    kapitel: K,
    titel: "M3: Wechselt das Vorzeichen in einem Bereich?",
    niveau: 2,
    erzeuge: (r) => {
      const seq = Array.from({ length: 6 }, () => r.intOhne0(-9, 9));
      const i1 = r.int(0, 2);
      const i2 = r.int(i1 + 2, 5);
      const alterniert = (a: number, b: number) => {
        for (let i = a; i < b; i++) if (seq[i] > 0 === seq[i + 1] > 0) return false;
        return true;
      };
      const ohneLetztes = (a: number, b: number) => alterniert(a, b - 1);
      const j1 = r.int(0, 3);
      const j2 = j1 + 1;
      const loesung = `${alterniert(i1, i2)}\n${alterniert(j1, j2)}\n`;
      const methode = `public static boolean wechselZwischen(int[] seq, int i1, int i2) {
    if (i1 >= i2) {
        return true;
    }
    if ((seq[i1] > 0) == (seq[i1 + 1] > 0)) {
        return false;
    }
    return wechselZwischen(seq, i1 + 1, i2);
}`;
      const code = klasse("Wechsel", methode, `int[] seq = ${init1(seq)};\nSystem.out.println(wechselZwischen(seq, ${i1}, ${i2}));\nSystem.out.println(wechselZwischen(seq, ${j1}, ${j2}));`);
      return {
        angabe: "`wechselZwischen(seq, i1, i2)` prüft rekursiv, ob im Bereich von `i1` bis `i2` (beide inklusive) je zwei Nachbarn verschiedene Vorzeichen haben. Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${ohneLetztes(i1, i2)}\n${ohneLetztes(j1, j2)}`, meldung: "Das letzte Paar im Bereich besteht aus `seq[i2 - 1]` und `seq[i2]`. Es gehört dazu, weil `i2` inklusive ist." }]),
          },
        ],
        hinweis: "Prüfe jedes Nachbarpaar im Bereich. Ein einziges Paar mit gleichem Vorzeichen macht das Ergebnis `false`.",
        loesung: `**Ansatz:** Alle Nachbarpaare von \`i1\` bis \`i2\` prüfen.\n---\nIn \`${toStr(seq)}\` liefert der Bereich ${i1} bis ${i2} \`${alterniert(i1, i2)}\` und der Bereich ${j1} bis ${j2} \`${alterniert(j1, j2)}\`.`,
      };
    },
  }),

  drill({
    id: "pt-d-zeitbudget",
    kapitel: K,
    titel: "Zeitplan: Minuten für eine Methode",
    niveau: 1,
    erzeuge: (r) => {
      const T = r.wahl([60, 75, 90]);
      // Punkte wie in den Tests 2021 bis 2023: M3 8 oder 9, M1 8 bis 11, M2 8 bis 10, zusammen 27
      const m3 = r.int(8, 9);
      const m1 = r.int(Math.max(8, 17 - m3), Math.min(11, 19 - m3));
      const m2 = 27 - m1 - m3;
      const welche = r.int(1, 3);
      const p = [m1, m2, m3][welche - 1];
      const frei = T - 15;
      return {
        angabe: `Der Test dauert ${T} Minuten. Du planst 5 Minuten Lesen und 10 Minuten Kontrolle ein. Die übrige Zeit verteilst du nach Punkten: \`main\` 3, M1 ${m1}, M2 ${m2}, M3 ${m3}. Wie viele Minuten bekommt M${welche}?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${T} - 15) * ${p} / 30`,
            einheit: "min",
            fehler: [{ wert: String((T * p) / 30), meldung: "Lesen und Kontrolle sind schon verplant. Verteilt wird nur der Rest." }],
          },
        ],
        hinweis: "Erst die freie Zeit bestimmen, dann den Anteil der Punkte.",
        loesung: `**Ansatz:** Freie Zeit mal Punkteanteil.\n---\nFrei sind ${T} − 15 = ${frei} Minuten, das sind ${frei} / 30 Minuten pro Punkt.\n---\nM${welche} bekommt ${frei} · ${p} / 30 = ${String((frei * p) / 30).replace(".", ",")} Minuten.`,
      };
    },
  }),
];
