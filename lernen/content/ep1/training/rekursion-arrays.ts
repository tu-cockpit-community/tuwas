import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 13 (Rekursion auf Arrays). Jede Referenzrechnung bildet die Java-Semantik
 * nach (Index-Rekursion, Hin- und Rückweg, Halbierung mit Ganzzahldivision). Der Validator führt die ersten
 * Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "rekursion-arrays";

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const gesehen = new Set<string>([norm(loesung)]);
  const rest = fehler.filter((f) => {
    const w = norm(f.wert);
    if (gesehen.has(w)) return false;
    gesehen.add(w);
    return true;
  });
  return rest.length ? rest : undefined;
}

/** Eine ganze Klasse mit Methoden und main als Java-Quelltext (mit java.util.* für Arrays.toString) */
function klasse(name: string, methoden: string, main: string): string {
  return `import java.util.*;\n\npublic class ${name} {\n${methoden}\n\n    public static void main(String[] args) {\n${main}\n    }\n}\n`;
}

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

function zufallsArray(r: Rng, laenge: number, von: number, bis: number): number[] {
  return Array.from({ length: laenge }, () => r.int(von, bis));
}

const javaArray = (a: number[]) => `{${a.join(", ")}}`;
const zeige = (a: number[]) => `[${a.join(", ")}]`;
const summeVon = (a: number[], ab: number) => a.slice(ab).reduce((s, x) => s + x, 0);

export const DRILLS: Drill[] = [
  drill({
    id: "ra-d-summe-ab",
    kapitel: K,
    titel: "Summe ab einem Startindex",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const a = zufallsArray(r, n, -5, 20);
      const k = r.int(1, n - 2);
      const s0 = summeVon(a, 0);
      const sk = summeVon(a, k);
      const methoden = einruecken(`public static int summe(int[] a, int index) {\n    if (index == a.length) {\n        return 0;\n    }\n    return a[index] + summe(a, index + 1);\n}`, 4);
      const code = klasse("SummeAb", methoden, `        int[] a = ${javaArray(a)};\n        System.out.println(summe(a, 0));\n        System.out.println(summe(a, ${k}));`);
      const loesung = `${s0}\n${sk}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${s0}\n${summeVon(a, k + 1)}`, meldung: `Der Rest ab Index ${k} beginnt beim Wert **mit** Index ${k}, also bei ${a[k]}. Dieser Wert zählt mit.` },
              { wert: `${s0}\n${s0}`, meldung: `Der zweite Aufruf beginnt erst bei Index ${k}. Die Werte davor gehören nicht zum Rest.` },
            ]),
          },
        ],
        hinweis: "Schreib die Indizes unter die Werte. Jeder Aufruf addiert alle Werte ab seinem Startindex bis zum Ende.",
        loesung: `**Ansatz:** \`summe(a, k)\` addiert die Werte mit den Indizes \`k\` bis \`a.length - 1\`. Der Basisfall \`index == a.length\` liefert 0.\n---\nAb Index 0: ${a.join(" + ")} = ${s0}.\n---\nAb Index ${k}: ${a.slice(k).join(" + ")} = ${sk}.`,
      };
    },
  }),

  drill({
    id: "ra-d-zaehle",
    kapitel: K,
    titel: "Werte mit einer Bedingung zählen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 8);
      const a = zufallsArray(r, n, -9, 30);
      const v = r.int(0, 2);
      const g = r.int(5, 15);
      const bed = [`a[index] > ${g}`, "a[index] % 2 == 0", "a[index] < 0"][v];
      const text = [`größer als ${g}`, "gerade", "negativ"][v];
      const pruefe = (x: number) => [x > g, x % 2 === 0, x < 0][v];
      const k = r.int(1, n - 3);
      const ab = a.slice(k);
      const treffer = ab.filter(pruefe);
      const alle = a.filter(pruefe).length;
      const methoden = einruecken(`public static int zaehle(int[] a, int index) {\n    if (index == a.length) {\n        return 0;\n    }\n    int rest = zaehle(a, index + 1);\n    if (${bed}) {\n        return rest + 1;\n    }\n    return rest;\n}`, 4);
      const code = klasse("Zaehlen", methoden, `        int[] a = ${javaArray(a)};\n        System.out.println(zaehle(a, ${k}));`);
      const loesung = `${treffer.length}\n`;
      return {
        angabe: `Die Methode zählt die Werte, die ${text} sind. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(alle), meldung: `Gezählt wird nur der Rest ab Index ${k}. Werte mit kleinerem Index zählen nicht mit.` },
              { wert: String(ab.length), meldung: "Gezählt werden nicht alle Werte des Rests, sondern nur die, die die Bedingung erfüllen." },
            ]),
          },
        ],
        hinweis: `Schreib die Indizes unter die Werte und prüfe ab Index ${k} jeden Wert einzeln.`,
        loesung: `**Ansatz:** Zähl-Muster mit Index. Jeder Aufruf prüft \`a[index]\`, der leere Rest liefert 0.\n---\nDer Rest ab Index ${k} ist ${ab.join(", ")}. ${text[0].toUpperCase() + text.slice(1)} sind: ${treffer.length ? treffer.join(", ") : "keine"}.\n---\nErgebnis: ${treffer.length}.`,
      };
    },
  }),

  drill({
    id: "ra-d-vor-nach",
    kapitel: K,
    titel: "Ausgaben vor und nach dem Selbstaufruf",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 6);
      const a = zufallsArray(r, n, 1, 9);
      const k = r.int(0, n - 3);
      const v = r.int(0, 2); // 0: nur vor, 1: nur nach, 2: beides
      const vor = v !== 1;
      const nach = v !== 0;
      const rest = a.slice(k);
      const zeilen: string[] = [];
      if (vor) rest.forEach((x) => zeilen.push(`v${x}`));
      zeilen.push("E");
      if (nach) [...rest].reverse().forEach((x) => zeilen.push(`n${x}`));
      const falsch: string[] = [];
      if (vor) rest.forEach((x) => falsch.push(`v${x}`));
      falsch.push("E");
      if (nach) rest.forEach((x) => falsch.push(`n${x}`));
      const rumpf = `public static void p(int[] a, int index) {\n    if (index == a.length) {\n        System.out.println("E");\n        return;\n    }\n${vor ? '    System.out.println("v" + a[index]);\n' : ""}    p(a, index + 1);\n${nach ? '    System.out.println("n" + a[index]);\n' : ""}}`;
      const code = klasse("VorNach", einruecken(rumpf, 4), `        int[] a = ${javaArray(a)};\n        p(a, ${k});`);
      const loesung = zeilen.join("\n") + "\n";
      const fehler = nach
        ? nurFalsche(loesung, [{ wert: falsch.join("\n"), meldung: "Ausgaben hinter dem Selbstaufruf laufen auf dem Rückweg. Zuerst wird der Aufruf mit dem höchsten Index fertig." }])
        : nurFalsche(loesung, [{ wert: ["E", ...zeilen.filter((z) => z !== "E")].join("\n"), meldung: "Ausgaben vor dem Selbstaufruf kommen auf dem Hinweg, also vor dem Basisfall." }]);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung, fehler }],
        hinweis: `Der Startaufruf hat Index ${k}. Vor dem Selbstaufruf: Hinweg in Indexreihenfolge. Nach dem Selbstaufruf: Rückweg in umgekehrter Reihenfolge.`,
        loesung: `**Ansatz:** Die Aufrufe haben die Indizes ${k} bis ${n}. Der Aufruf mit Index ${n} ist der Basisfall und gibt \`E\` aus.\n---\n${vor ? `Hinweg: ${rest.map((x) => `v${x}`).join(", ")}.` : "Vor dem Selbstaufruf steht keine Ausgabe."}\n---\n${nach ? `Rückweg: ${[...rest].reverse().map((x) => `n${x}`).join(", ")}. Der zuletzt begonnene Aufruf wird zuerst fertig.` : "Nach dem Selbstaufruf steht keine Ausgabe."}`,
      };
    },
  }),

  drill({
    id: "ra-d-maximum",
    kapitel: K,
    titel: "Das Maximum ab einem Index",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const negativ = r.zufall() < 0.35;
      const a = negativ ? zufallsArray(r, n, -40, -1) : zufallsArray(r, n, -10, 50);
      const k = r.int(1, n - 2);
      const mk = Math.max(...a.slice(k));
      const mGanz = Math.max(...a);
      const methoden = einruecken(`public static int maximum(int[] a, int index) {\n    if (index == a.length - 1) {\n        return a[index];\n    }\n    int restMax = maximum(a, index + 1);\n    if (a[index] > restMax) {\n        return a[index];\n    }\n    return restMax;\n}`, 4);
      const code = klasse("Maximum", methoden, `        int[] a = ${javaArray(a)};\n        System.out.println(maximum(a, ${k}));`);
      const loesung = `${mk}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(mGanz), meldung: `Gesucht ist das Maximum des Rests ab Index ${k}. Der größte Wert des ganzen Arrays steht davor.` },
              // Nur bei lauter negativen Werten entsteht 0 aus dem Denkfehler „Basisfall liefert 0“, und nur dann fehlt 0 im Array.
              ...(negativ ? [{ wert: "0", meldung: "0 steht gar nicht im Array. Der Basisfall liefert den letzten echten Wert, nicht 0." }] : []),
            ]),
          },
        ],
        hinweis: "Der Basisfall ist der letzte Index. Auf dem Rückweg vergleicht jeder Aufruf seinen Wert mit dem Maximum des Rests.",
        loesung: `**Ansatz:** Maximum-Muster. Der Aufruf mit dem letzten Index liefert \`a[${n - 1}] = ${a[n - 1]}\`.\n---\nDer Rest ab Index ${k} ist ${a.slice(k).join(", ")}.\n---\nSein größter Wert ist ${mk}.`,
      };
    },
  }),

  drill({
    id: "ra-d-index-suche",
    kapitel: K,
    titel: "Ersten oder letzten Treffer finden",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(6, 8);
      const a = zufallsArray(r, n, 1, 6);
      const w = r.wahl(a);
      const k = r.int(0, n - 3);
      const letzter = r.zufall() < 0.5;
      let ergebnis = -1;
      for (let i = k; i < n; i++) if (a[i] === w && (letzter || ergebnis === -1)) ergebnis = i;
      let anderes = -1;
      for (let i = k; i < n; i++) if (a[i] === w && (!letzter || anderes === -1)) anderes = i;
      const ohneStart = letzter ? a.lastIndexOf(w) : a.indexOf(w);
      const rumpf = letzter
        ? `public static int suche(int[] a, int w, int index) {\n    if (index == a.length) {\n        return -1;\n    }\n    int hinten = suche(a, w, index + 1);\n    if (hinten != -1) {\n        return hinten;\n    }\n    if (a[index] == w) {\n        return index;\n    }\n    return -1;\n}`
        : `public static int suche(int[] a, int w, int index) {\n    if (index == a.length) {\n        return -1;\n    }\n    if (a[index] == w) {\n        return index;\n    }\n    return suche(a, w, index + 1);\n}`;
      const code = klasse("Suche", einruecken(rumpf, 4), `        int[] a = ${javaArray(a)};\n        System.out.println(suche(a, ${w}, ${k}));`);
      const loesung = `${ergebnis}\n`;
      const treffer: number[] = [];
      for (let i = k; i < n; i++) if (a[i] === w) treffer.push(i);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(anderes), meldung: letzter ? "Die Methode prüft ihren eigenen Wert erst nach dem Selbstaufruf. Ein Treffer weiter hinten hat Vorrang, gesucht ist also der **letzte** Treffer." : "Die Methode hört beim ersten Treffer auf und sucht nicht weiter. Gesucht ist der **erste** Treffer ab dem Startindex." },
              { wert: String(ohneStart), meldung: `Die Suche beginnt erst bei Index ${k}. Treffer davor zählen nicht.` },
            ]),
          },
        ],
        hinweis: `Schreib die Indizes unter die Werte und markiere alle Vorkommen von ${w} ab Index ${k}.`,
        loesung: `**Ansatz:** ${letzter ? "Suche auf dem Rückweg: Der hinterste Treffer wird bis zum Start durchgereicht." : "Suche auf dem Hinweg: Der erste Treffer beendet die Rekursion."}\n---\n${treffer.length ? `Ab Index ${k} steht ${w} an ${treffer.length === 1 ? "Index" : "den Indizes"} ${treffer.join(", ")}.` : `Ab Index ${k} kommt ${w} nicht mehr vor.`}\n---\nErgebnis: ${ergebnis}.`,
      };
    },
  }),

  drill({
    id: "ra-d-anstiege",
    kapitel: K,
    titel: "Anstiege zwischen Nachbarn zählen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(6, 8);
      const a = zufallsArray(r, n, 1, 6);
      // mindestens ein gleiches Nachbarpaar, damit < und <= sich unterscheiden können
      const p = r.int(0, n - 2);
      a[p + 1] = a[p];
      const k = r.int(0, Math.min(2, n - 3));
      let streng = 0;
      let schwach = 0;
      const paare: string[] = [];
      for (let i = k; i < n - 1; i++) {
        if (a[i] < a[i + 1]) {
          streng++;
          paare.push(`(${a[i]}, ${a[i + 1]})`);
        }
        if (a[i] <= a[i + 1]) schwach++;
      }
      const methoden = einruecken(`public static int anstiege(int[] a, int index) {\n    if (index >= a.length - 1) {\n        return 0;\n    }\n    int rest = anstiege(a, index + 1);\n    if (a[index] < a[index + 1]) {\n        return rest + 1;\n    }\n    return rest;\n}`, 4);
      const code = klasse("Anstiege", methoden, `        int[] a = ${javaArray(a)};\n        System.out.println(anstiege(a, ${k}));`);
      const loesung = `${streng}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(schwach), meldung: "Gezählt wird nur, wenn der rechte Wert **echt größer** ist. Gleiche Nachbarn sind kein Anstieg." },
              { wert: String(n - 1 - k), meldung: "Nicht jedes Paar ist ein Anstieg. Prüfe bei jedem Paar, ob der rechte Wert größer ist." },
            ]),
          },
        ],
        hinweis: `Schreib die Paare ab Index ${k} auf: ${a[k]} mit ${a[k + 1]}, ${a[k + 1]} mit ${a[k + 2]} und so weiter bis zum letzten Wert.`,
        loesung: `**Ansatz:** Paar-Muster. Der Basisfall greift bei \`index >= a.length - 1\`, weil das letzte Paar beim vorletzten Index beginnt.\n---\nAnstiege ab Index ${k}: ${paare.length ? paare.join(", ") : "keine"}.\n---\nErgebnis: ${streng}.`,
      };
    },
  }),

  drill({
    id: "ra-d-umdrehen",
    kapitel: K,
    titel: "Einen Bereich in-place umdrehen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(6, 8);
      const a = Array.from({ length: n }, (_, i) => (i + 1) * r.int(1, 3) + i);
      const l = r.int(0, 2);
      const re = r.int(l + 2, n - 1);
      const neu = [...a];
      for (let i = l, j = re; i < j; i++, j--) [neu[i], neu[j]] = [neu[j], neu[i]];
      const ganz = [...a].reverse();
      const rumpf = `public static void drehe(int[] a, int links, int rechts) {\n    if (links >= rechts) {\n        return;\n    }\n    int merk = a[links];\n    a[links] = a[rechts];\n    a[rechts] = merk;\n    drehe(a, links + 1, rechts - 1);\n}`;
      const code = klasse("Drehen", einruecken(rumpf, 4), `        int[] a = ${javaArray(a)};\n        drehe(a, ${l}, ${re});\n        System.out.println(Arrays.toString(a));`);
      const loesung = `${zeige(neu)}\n`;
      const tausche: string[] = [];
      for (let i = l, j = re; i < j; i++, j--) tausche.push(`(${i}, ${j})`);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: zeige(ganz), meldung: `Umgedreht wird nur der Bereich \`[${l}, ${re}]\`. Die Werte außerhalb bleiben an ihrem Platz.` },
              { wert: zeige(a), meldung: "Die Methode verändert das Array in-place. `main` gibt dasselbe, veränderte Array aus." },
            ]),
          },
        ],
        hinweis: "Schreib die Indexpaare auf, die getauscht werden, bis `links >= rechts` gilt.",
        loesung: `**Ansatz:** Zwei Indizes laufen von ${l} und ${re} aufeinander zu. Jeder Aufruf tauscht das äußere Paar.\n---\nGetauscht werden die Indexpaare ${tausche.join(", ")}.\n---\nErgebnis: ${zeige(neu)}.`,
      };
    },
  }),

  drill({
    id: "ra-d-halbieren-aufrufe",
    kapitel: K,
    titel: "Aufrufe beim Halbieren zählen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 12);
      const start = r.int(0, 3);
      const end = start + n - 1;
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\npublic static int summe(int[] a, int start, int end) {\n    if (start == end) {\n        return a[start];\n    }\n    int mitte = (start + end) / 2;\n    return summe(a, start, mitte) + summe(a, mitte + 1, end);\n}\n\`\`\`\n\nWie oft wird \`summe\` beim Aufruf \`summe(a, ${start}, ${end})\` insgesamt aufgerufen? Der Aufruf aus \`main\` zählt mit. Das Array ist lang genug.`,
        teile: [
          {
            typ: "zahl",
            loesung: `2 * ${n} - 1`,
            fehler: [
              { wert: String(n), meldung: "Das sind nur die Basisfälle, einer pro Wert. Dazu kommen die Aufrufe, die zwei Hälften kombinieren." },
              { wert: String(n + 1), meldung: "So viele Aufrufe braucht die lineare Rekursion mit `index + 1`. Beim Halbieren kommen die teilenden Aufrufe dazu." },
              { wert: String(2 * n), meldung: "Um n Teilergebnisse zu einem zusammenzufügen, braucht man nur n - 1 kombinierende Aufrufe." },
            ],
          },
        ],
        hinweis: `Der Bereich [${start}, ${end}] enthält ${n} Werte. Zähle die Basisfälle und die kombinierenden Aufrufe getrennt.`,
        loesung: `**Ansatz:** Bei n Werten gibt es n Basisfälle und n - 1 Aufrufe, die zwei Teilergebnisse kombinieren.\n---\nDer Bereich enthält \`${end} - ${start} + 1 = ${n}\` Werte.\n---\nAufrufe: \`${n} + ${n - 1} = ${2 * n - 1}\`.`,
      };
    },
  }),

  drill({
    id: "ra-d-trace",
    kapitel: K,
    titel: "Rückgabewerte einer Array-Rekursion",
    niveau: 2,
    erzeuge: (r) => {
      const n = 3;
      const a = zufallsArray(r, n, 1, 6);
      const c = r.int(2, 3);
      const f = (i: number): number => (i === n ? 0 : a[i] + c * f(i + 1));
      const zeilen = Array.from({ length: n + 1 }, (_, i) => [i, f(i)]);
      const ohneFaktor = Array.from({ length: n + 1 }, (_, i) => [String(i), String(summeVon(a, i))]).flat();
      const richtig = zeilen.flat().map(String);
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\npublic static int f(int[] a, int index) {\n    if (index == a.length) {\n        return 0;\n    }\n    return a[index] + ${c} * f(a, index + 1);\n}\n\`\`\`\n\n\`main\` ruft \`f(new int[]${javaArray(a)}, 0)\` auf. Trage für jeden Aufruf den Index und den Rückgabewert ein. Die erste Zeile ist der Aufruf aus \`main\`.`,
        teile: [
          {
            typ: "trace",
            spalten: ["index", "Rückgabewert"],
            zeilen: zeilen.map((_, i) => `${i + 1}. Aufruf`),
            loesung: zeilen,
            fehler: ohneFaktor.join("|") !== richtig.join("|") ? [{ wert: ohneFaktor, meldung: `Das Ergebnis des Selbstaufrufs wird mit ${c} multipliziert, bevor \`a[index]\` dazukommt. Es ist keine einfache Summe.` }] : undefined,
          },
        ],
        hinweis: "Fülle die Indizes von oben nach unten. Die Rückgabewerte rechnest du von unten nach oben, beginnend beim Basisfall mit 0.",
        loesung: `**Ansatz:** Hinweg mit den Indizes 0 bis ${n}. Der Aufruf mit Index ${n} ist der Basisfall und liefert 0.\n---\n${[2, 1, 0].map((i) => `Index ${i}: \`${a[i]} + ${c} · ${f(i + 1)} = ${f(i)}\``).join(", ")}.\n---\nDer Startaufruf liefert ${f(0)}.`,
      };
    },
  }),

  drill({
    id: "ra-d-neues-array",
    kapitel: K,
    titel: "Ein neues Array auf dem Rückweg füllen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 5);
      const a = zufallsArray(r, n, -4, 9);
      const v = r.int(0, 2);
      const ausdruck = ["2 * a[index]", "a[index] + index", "a[index] * a[index]"][v];
      const text = ["das Doppelte", "den Wert plus seinen Index", "das Quadrat"][v];
      const fn = (x: number, i: number) => [2 * x, x + i, x * x][v];
      const neu = a.map(fn);
      const rumpf = `public static int[] neu(int[] a, int index) {\n    if (index == a.length) {\n        return new int[a.length];\n    }\n    int[] r = neu(a, index + 1);\n    r[index] = ${ausdruck};\n    return r;\n}`;
      const code = klasse("NeuesArray", einruecken(rumpf, 4), `        int[] a = ${javaArray(a)};\n        int[] b = neu(a, 0);\n        System.out.println(Arrays.toString(b));\n        System.out.println(Arrays.toString(a));`);
      const loesung = `${zeige(neu)}\n${zeige(a)}\n`;
      return {
        angabe: `Die Methode schreibt für jeden Wert ${text} in ein neues Array. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${zeige(neu)}\n${zeige(neu)}`, meldung: "Die Methode schreibt nur in das neue Array `r`. Das Array `a` wird nur gelesen und bleibt unverändert." },
              { wert: `${zeige(neu.map((x, i) => (i === 0 ? x : 0)))}\n${zeige(a)}`, meldung: "Das neue Array entsteht nur einmal, im Basisfall. Alle Aufrufe schreiben in dasselbe Array, darum ist jeder Platz befüllt." },
            ]),
          },
        ],
        hinweis: "Das neue Array entsteht im Basisfall. Auf dem Rückweg schreibt jeder Aufruf seinen Platz `index` hinein.",
        loesung: `**Ansatz:** Neues Array im Basisfall, Befüllen auf dem Rückweg. \`a\` wird nur gelesen.\n---\n${a.map((x, i) => `Index ${i}: ${fn(x, i)}`).join(", ")}.\n---\nAusgabe: ${zeige(neu)}, danach das unveränderte ${zeige(a)}.`,
      };
    },
  }),

  drill({
    id: "ra-d-gegenueber",
    kapitel: K,
    titel: "Kleinste Summe gegenüberliegender Werte",
    niveau: 3,
    erzeuge: (r) => {
      const paare = r.int(2, 4);
      const n = 2 * paare + r.int(0, 2);
      const a = zufallsArray(r, n, 0, 12);
      const start = r.int(0, n - 2 * paare);
      const end = start + 2 * paare - 1;
      const summen: number[] = [];
      for (let i = start, j = end; i < j; i++, j--) summen.push(a[i] + a[j]);
      const min = Math.min(...summen);
      const rumpf = `public static int gegenueber(int[] a, int start, int end) {\n    int eigene = a[start] + a[end];\n    if (start + 1 == end) {\n        return eigene;\n    }\n    return Math.min(eigene, gegenueber(a, start + 1, end - 1));\n}`;
      const code = klasse("Gegenueber", einruecken(rumpf, 4), `        int[] a = ${javaArray(a)};\n        System.out.println(gegenueber(a, ${start}, ${end}));`);
      const loesung = `${min}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(summen[0]), meldung: "Das ist nur die Summe des äußeren Paares. Die Methode vergleicht mit `Math.min` alle Paare bis zur Mitte." },
              { wert: String(summen[summen.length - 1]), meldung: "Das ist nur die Summe des innersten Paares, also der Wert des Basisfalls. Auf dem Rückweg wird er noch mit den äußeren Paaren verglichen." },
              { wert: String(Math.max(...summen)), meldung: "`Math.min` liefert den kleineren der beiden Werte, nicht den größeren. Gesucht ist die kleinste Paarsumme." },
            ]),
          },
        ],
        hinweis: `Bilde die Paare von außen nach innen: Index ${start} mit ${end}, ${start + 1} mit ${end - 1} und so weiter.`,
        loesung: `**Ansatz:** Zwei Indizes laufen von ${start} und ${end} zur Mitte. Jeder Aufruf bildet seine Paarsumme und behält mit \`Math.min\` die kleinere von ihr und dem Ergebnis des inneren Bereichs.\n---\nPaarsummen: ${summen.join(", ")}.\n---\nDie kleinste ist ${min}.`,
      };
    },
  }),

  drill({
    id: "ra-d-halbieren-reihenfolge",
    kapitel: K,
    titel: "Reihenfolge der Aufrufe beim Halbieren",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(3, 6);
      const start = r.int(0, 2);
      const end = start + n - 1;
      const nachher = r.zufall() < 0.4;
      const pre: string[] = [];
      const post: string[] = [];
      const lauf = (s: number, e: number) => {
        pre.push(`${s}-${e}`);
        if (s !== e) {
          const m = Math.trunc((s + e) / 2);
          lauf(s, m);
          lauf(m + 1, e);
        }
        post.push(`${s}-${e}`);
      };
      lauf(start, end);
      const zeilen = nachher ? post : pre;
      const anders = nachher ? pre : post;
      const ausgabe = '    System.out.println(start + "-" + end);';
      const rumpf = `public static void zeige(int start, int end) {\n${nachher ? "" : ausgabe + "\n"}    if (start != end) {\n        int mitte = (start + end) / 2;\n        zeige(start, mitte);\n        zeige(mitte + 1, end);\n    }\n${nachher ? ausgabe + "\n" : ""}}`;
      const code = klasse("Halbieren", einruecken(rumpf, 4), `        zeige(${start}, ${end});`);
      const loesung = zeilen.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: anders.join("\n"), meldung: nachher ? "Die Ausgabe steht **hinter** den beiden Selbstaufrufen. Ein Aufruf gibt sich also erst aus, wenn beide Hälften fertig sind." : "Die Ausgabe steht **vor** den Selbstaufrufen. Jeder Aufruf gibt sich aus, bevor seine Hälften laufen." },
            ]),
          },
        ],
        hinweis: "Zeichne den Aufrufbaum. Die Mitte ist `(start + end) / 2`, die linke Hälfte reicht bis einschließlich `mitte`.",
        loesung: `**Ansatz:** Aufrufbaum zeichnen. Die linke Hälfte läuft ganz, bevor die rechte beginnt.\n---\nDie Ausgabe steht ${nachher ? "hinter den Selbstaufrufen, also gibt jeder Aufruf sich erst nach seinen beiden Hälften aus" : "vor den Selbstaufrufen, also gibt jeder Aufruf sich vor seinen Hälften aus"}.\n---\nReihenfolge: ${zeilen.join(", ")}. Das sind \`2 · ${n} - 1 = ${2 * n - 1}\` Zeilen.`,
      };
    },
  }),
];
