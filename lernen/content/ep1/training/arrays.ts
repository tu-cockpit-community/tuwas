import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 12 (Arrays und Referenzen). Jede Referenzrechnung bildet die Java-Semantik
 * nach (Ganzzahldivision zur Null hin, Rest mit dem Vorzeichen des Dividenden, Format von Arrays.toString,
 * Referenzsemantik). Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "arrays";

/** Java-Ganzzahldivision (rundet zur Null hin) */
const idiv = (a: number, b: number) => Math.trunc(a / b);
/** Java-Rest (Vorzeichen des Dividenden) */
const jmod = (a: number, b: number) => a - idiv(a, b) * b;

/** Arrays.toString für int-Arrays */
const ats = (a: number[]) => `[${a.join(", ")}]`;
/** Initialisierungsliste im Java-Quelltext */
const liste = (a: number[]) => `{${a.join(", ")}}`;

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg (auch doppelte). */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const gesehen = new Set<string>([norm(loesung)]);
  const rest = fehler.filter((f) => {
    const n = norm(f.wert);
    if (gesehen.has(n)) return false;
    gesehen.add(n);
    return true;
  });
  return rest.length ? rest : undefined;
}

/** Fehlerbilder für Zahlenfelder: nur Werte, die sich von der Lösung unterscheiden */
function zahlFehler(loesung: number, fehler: { wert: number; meldung: string }[]) {
  const gesehen = new Set<number>([loesung]);
  const rest = fehler
    .filter((f) => {
      if (gesehen.has(f.wert)) return false;
      gesehen.add(f.wert);
      return true;
    })
    .map((f) => ({ wert: String(f.wert), meldung: f.meldung }));
  return rest.length ? rest : undefined;
}

function zufallsArray(r: Rng, n: number, von: number, bis: number): number[] {
  return Array.from({ length: n }, () => r.int(von, bis));
}

export const DRILLS: Drill[] = [
  drill({
    id: "ar-d-zugriff",
    kapitel: K,
    titel: "Elemente lesen und schreiben",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const a = zufallsArray(r, n, 1, 20);
      const k = r.int(1, n - 2);
      const m = r.int(1, 3);
      const i = r.int(0, n - 1);
      const j = r.int(0, n - 1);
      const neu = a[j] + a[k];
      const nachher = [...a];
      nachher[i] = neu;
      const code = `int[] a = ${liste(a)};\nSystem.out.println(a[${k}]);\nSystem.out.println(a[a.length - ${m}]);\na[${i}] = a[${j}] + a[${k}];\nSystem.out.println(a[${i}]);\nSystem.out.println(a.length);\n`;
      const loesung = `${a[k]}\n${a[n - m]}\n${neu}\n${n}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${a[k - 1]}\n${a[n - m - 1]}\n${neu}\n${n}`, meldung: "Indizes beginnen bei 0. `a[1]` ist das **zweite** Element, nicht das erste." },
              { wert: `${a[k]}\n${a[n - m]}\n${neu}\n${n - 1}`, meldung: "`a.length` ist die Anzahl der Elemente, nicht der größte Index." },
            ]),
          },
        ],
        hinweis: "Schreib die Indizes ab 0 über die Elemente der Initialisierungsliste.",
        loesung: `**Ansatz:** Indizes notieren: ${a.map((x, p) => `Index ${p}: ${x}`).join(", ")}.\n---\n\`a[${k}]\` ist ${a[k]}. \`a.length - ${m}\` ist ${n - m}, dort steht ${a[n - m]}.\n---\n\`a[${i}]\` wird zu \`${a[j]} + ${a[k]} = ${neu}\`. Die Länge bleibt ${n}.`,
      };
    },
  }),

  drill({
    id: "ar-d-fuellen",
    kapitel: K,
    titel: "Ein Array mit einer Schleife füllen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 9);
      const p = r.int(2, 6);
      const q = r.int(1, 9);
      const m = r.wahl([3, 4, 5]);
      const werte = Array.from({ length: n }, (_, i) => p * i + q);
      const erg = werte.map((v) => (v % m === 0 ? 0 : v));
      const falsch = Array.from({ length: n }, (_, i) => p * (i + 1) + q).map((v) => (v % m === 0 ? 0 : v));
      const ohneNull = werte;
      const code = `int[] a = new int[${n}];\nfor (int i = 0; i < a.length; i++) {\n    a[i] = ${p} * i + ${q};\n    if (a[i] % ${m} == 0) {\n        a[i] = 0;\n    }\n}\nSystem.out.println(Arrays.toString(a));\n`;
      const loesung = `${ats(erg)}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: ats(falsch), meldung: `Der erste Index ist 0. \`a[0]\` ist \`${p} * 0 + ${q} = ${q}\`.` },
              { wert: ats(ohneNull), meldung: `Werte, die durch ${m} teilbar sind, werden auf 0 gesetzt.` },
            ]),
          },
        ],
        hinweis: `Berechne für \`i = 0\` bis ${n - 1} den Wert \`${p} * i + ${q}\` und prüfe dann, ob er durch ${m} teilbar ist.`,
        loesung: `**Ansatz:** Jeden Platz einzeln ausrechnen und danach die Teilbarkeit prüfen.\n---\nWerte: ${werte.join(", ")}. Durch ${m} teilbar: ${werte.filter((v) => v % m === 0).join(", ") || "keiner"}.\n---\nErgebnis: \`${ats(erg)}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-rueckwaerts",
    kapitel: K,
    titel: "Rückwärts in Schritten ausgeben",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 10);
      const a = zufallsArray(r, n, 1, 30);
      const s = r.int(1, 3);
      const t = r.wahl([":", "-", ","]);
      const idx: number[] = [];
      for (let i = n - 1; i >= 0; i -= s) idx.push(i);
      const loesung = idx.map((i) => a[i]).join(t) + "\n";
      const idxFalsch: number[] = [];
      for (let i = n - 1; i > 0; i -= s) idxFalsch.push(i);
      const code = `int[] a = ${liste(a)};\nString s = "";\nfor (int i = a.length - 1; i >= 0; i -= ${s}) {\n    if (i < a.length - 1) {\n        s = s + "${t}";\n    }\n    s = s + a[i];\n}\nSystem.out.println(s);\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: idx.map((i) => a[i]).join(t) + t, meldung: "Das Trennzeichen kommt **vor** jedes Element außer dem ersten ausgegebenen. Am Ende steht keines." },
              { wert: idxFalsch.map((i) => a[i]).join(t), meldung: "Die Bedingung ist `i >= 0`. Auch der Index 0 gehört dazu, wenn die Schritte ihn treffen." },
            ]),
          },
        ],
        hinweis: `Der Start ist der letzte Index ${n - 1}. Ziehe jeweils ${s} ab, solange der Index mindestens 0 ist.`,
        loesung: `**Ansatz:** Indizes bestimmen, Elemente ablesen, Trennzeichen dazwischen setzen.\n---\nIndizes: ${idx.join(", ")}. Elemente: ${idx.map((i) => a[i]).join(", ")}.\n---\nAusgabe: \`${loesung.trim()}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-summe-mittel",
    kapitel: K,
    titel: "Summe, ganzzahliger Mittelwert und Rest",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 6);
      let a = zufallsArray(r, n, -15, 15);
      // die Summe soll nicht durch n teilbar sein, sonst zeigt die Aufgabe das Abschneiden nicht
      while (jmod(a.reduce((x, y) => x + y, 0), n) === 0) a = zufallsArray(r, n, -15, 15);
      const s = a.reduce((x, y) => x + y, 0);
      const m = idiv(s, n);
      const rest = jmod(s, n);
      const code = `int[] a = ${liste(a)};\nint s = 0;\nfor (int i = 0; i < a.length; i++) {\n    s += a[i];\n}\nSystem.out.println(s);\nSystem.out.println(s / a.length);\nSystem.out.println(s % a.length);\n`;
      const loesung = `${s}\n${m}\n${rest}\n`;
      const floorM = Math.floor(s / n);
      const floorR = s - floorM * n;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${s}\n${floorM}\n${floorR}`, meldung: "Java schneidet bei der Ganzzahldivision **zur Null hin** ab. Der Rest hat das Vorzeichen der geteilten Zahl." },
            ]),
          },
        ],
        hinweis: `Bilde zuerst die Summe. Teile sie dann ganzzahlig durch die Länge ${n}, der Nachkommaanteil fällt weg.`,
        loesung: `**Ansatz:** Summe bilden, dann \`/\` und \`%\` nach den Java-Regeln.\n---\nSumme: ${a.join(" + ").replace(/\+ -/g, "- ")} = ${s}.\n---\n\`${s} / ${n}\` ist etwa ${(s / n).toFixed(2).replace(".", ",")}, abgeschnitten zur Null hin ${m}. Rest: \`${m} · ${n} + (${rest}) = ${s}\`, also ${rest}.`,
      };
    },
  }),

  drill({
    id: "ar-d-maximum",
    kapitel: K,
    titel: "Maximum und seine erste Stelle",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 8);
      const a = zufallsArray(r, n, -9, 12);
      // das Maximum soll mindestens zweimal vorkommen, damit der Unterschied > und >= sichtbar wird
      const max0 = Math.max(...a);
      const p1 = a.indexOf(max0);
      let p2 = r.int(0, n - 1);
      while (p2 === p1) p2 = r.int(0, n - 1);
      a[p2] = max0;
      const max = Math.max(...a);
      const erste = a.indexOf(max);
      const letzte = a.lastIndexOf(max);
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\nint[] a = ${liste(a)};\nint max = a[0];\nint pos = 0;\nfor (int i = 1; i < a.length; i++) {\n    if (a[i] > max) {\n        max = a[i];\n        pos = i;\n    }\n}\n\`\`\`\n\nWelche Werte haben \`max\` und \`pos\` nach der Schleife?`,
        teile: [
          { typ: "zahl", label: "`max`", loesung: String(max) },
          {
            typ: "zahl",
            label: "`pos`",
            loesung: String(erste),
            fehler: zahlFehler(erste, [
              { wert: letzte, meldung: "Der Vergleich `>` ist streng. Ein späteres gleich großes Element ändert `pos` nicht. Gemerkt wird die **erste** Stelle." },
              { wert: erste + 1, meldung: "Indizes beginnen bei 0. Zähle die Stelle noch einmal ab." },
            ]),
          },
        ],
        hinweis: "Geh die Elemente ab Index 1 durch. Nur ein echt größeres Element ändert `max` und `pos`.",
        loesung: `**Ansatz:** Maximum-Algorithmus mit strengem Vergleich \`>\`.\n---\nDer größte Wert ist ${max}. Er steht auf ${erste === letzte ? `Index ${erste}` : `den Indizes ${a.map((x, p) => (x === max ? p : -1)).filter((p) => p >= 0).join(" und ")}`}.\n---\nWegen \`>\` bleibt \`pos\` bei der ersten Stelle: ${erste}.`,
      };
    },
  }),

  drill({
    id: "ar-d-praefix",
    kapitel: K,
    titel: "Ein Array, das sich selbst verändert",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 5);
      const a = zufallsArray(r, n, 1, 9);
      const op = r.wahl(["+", "-"] as const);
      const b = [...a];
      const zeilen: number[][] = [];
      const falsch: string[] = [];
      for (let i = 1; i < n; i++) {
        b[i] = op === "+" ? b[i] + b[i - 1] : b[i - 1] - b[i];
        zeilen.push([i, b[i]]);
        falsch.push(String(i), String(op === "+" ? a[i] + a[i - 1] : a[i - 1] - a[i]));
      }
      const zuweisung = op === "+" ? "a[i] = a[i] + a[i - 1];" : "a[i] = a[i - 1] - a[i];";
      const richtigFlach = zeilen.flat().map(String);
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\nint[] a = ${liste(a)};\nfor (int i = 1; i < a.length; i++) {\n    ${zuweisung}\n}\n\`\`\`\n\nTrage für jeden Durchlauf \`i\` und den neuen Wert von \`a[i]\` ein. Die erste Zeile ist vorgegeben.`,
        teile: [
          {
            typ: "trace",
            spalten: ["i", "a[i] neu"],
            zeilen: zeilen.map((_, p) => `Durchlauf ${p + 1}`),
            vorgabe: 1,
            loesung: zeilen,
            fehler: falsch.join("|") !== richtigFlach.join("|") ? [{ wert: falsch, meldung: "`a[i - 1]` wurde im Durchlauf davor schon verändert. Rechne immer mit dem **aktuellen** Inhalt des Arrays." }] : undefined,
          },
        ],
        hinweis: "Schreib das Array nach jedem Durchlauf neu auf. Der Durchlauf liest den schon veränderten Vorgänger.",
        loesung: `**Ansatz:** Das Array nach jedem Durchlauf aktualisieren.\n---\n${zeilen.map(([i, v]) => `\`i = ${i}\`: \`a[${i}]\` wird ${v}`).join(". ")}.\n---\nAm Ende ist das Array \`${ats(b)}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-filtern",
    kapitel: K,
    titel: "Filtern: Länge und Inhalt",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(6, 9);
      const a = zufallsArray(r, n, -8, 15);
      const v = r.int(0, 2);
      const g = r.int(2, 7);
      const bed = ["a[i] % 2 == 0", `a[i] > ${g}`, "a[i] != 0 && a[i] % 3 != 0"][v];
      const text = ["gerade", `größer als ${g}`, "nicht durch 3 teilbar"][v];
      const pruefe = (x: number) => [x % 2 === 0, x > g, x !== 0 && x % 3 !== 0][v];
      const treffer = a.filter(pruefe);
      const code = `int[] a = ${liste(a)};\nint anzahl = 0;\nfor (int i = 0; i < a.length; i++) {\n    if (${bed}) {\n        anzahl++;\n    }\n}\nint[] neu = new int[anzahl];\nint j = 0;\nfor (int i = 0; i < a.length; i++) {\n    if (${bed}) {\n        neu[j] = a[i];\n        j++;\n    }\n}\nSystem.out.println(neu.length);\nSystem.out.println(Arrays.toString(neu));\n`;
      const loesung = `${treffer.length}\n${ats(treffer)}\n`;
      const zuLang = [...treffer, ...Array(n - treffer.length).fill(0)];
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${n}\n${ats(zuLang)}`, meldung: "Die erste Schleife zählt die Treffer. Das neue Array hat genau so viele Plätze, nicht so viele wie das alte." }]),
          },
        ],
        hinweis: `Suche alle Elemente, die die Bedingung erfüllen (${text}). Ihre Anzahl ist die neue Länge.`,
        loesung: `**Ansatz:** Erst zählen, dann mit Schreibindex \`j\` füllen.\n---\nDie Bedingung bedeutet: ${text}. Treffer der Reihe nach: ${treffer.join(", ") || "keine"}.\n---\nLänge ${treffer.length}, Inhalt \`${ats(treffer)}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-alias",
    kapitel: K,
    titel: "Zwei Namen für ein Array",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 5);
      const a = zufallsArray(r, n, 1, 9);
      const i = r.int(0, n - 1);
      const j = r.int(0, n - 1);
      const w1 = r.int(10, 50);
      const w2 = r.int(60, 99);
      // A = Array von a (und b), C = eigenes Array mit gleichem Startinhalt
      const A = [...a];
      const C = [...a];
      A[i] = w1;
      C[j] = w2;
      const code = `int[] a = ${liste(a)};\nint[] b = a;\nint[] c = ${liste(a)};\nb[${i}] = ${w1};\nc[${j}] = ${w2};\nSystem.out.println(Arrays.toString(a));\nSystem.out.println((a == b) + " " + (a == c));\n`;
      const loesung = `${ats(A)}\ntrue false\n`;
      const kopieDenken = `${ats(a)}\nfalse false`;
      const alleGleich = [...A];
      alleGleich[j] = w2;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: kopieDenken, meldung: "`int[] b = a;` erzeugt keine Kopie. `a` und `b` zeigen auf dasselbe Array, darum ist die Änderung über `b` auch über `a` zu sehen." },
              { wert: `${ats(alleGleich)}\ntrue true`, meldung: "`c` hat eine eigene Initialisierungsliste und ist darum ein eigenes Array. Seine Änderung betrifft `a` nicht, und `a == c` ist `false`." },
            ]),
          },
        ],
        hinweis: "Es gibt genau zwei Arrays: eines für `a` und `b`, eines für `c`.",
        loesung: `**Ansatz:** Arrays zählen und für jede Variable notieren, worauf sie zeigt.\n---\n\`b = a\` macht \`b\` zum zweiten Namen. \`b[${i}] = ${w1}\` ändert das gemeinsame Array zu \`${ats(A)}\`.\n---\n\`c\` ist ein eigenes Array, seine Änderung betrifft \`a\` nicht. \`a == b\` ist \`true\`, \`a == c\` ist \`false\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-parameter",
    kapitel: K,
    titel: "Was sieht der Aufrufer?",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 4);
      const a = zufallsArray(r, n, 1, 9);
      const i = r.int(0, n - 1);
      const d = r.int(2, 9);
      const x0 = r.int(1, 9);
      const neuWert = r.int(20, 40);
      const nachher = [...a];
      nachher[i] += d;
      const methode = `    public static void m(int[] feld, int x) {\n        feld[${i}] = feld[${i}] + ${d};\n        x = x + ${d};\n        feld = new int[]{${neuWert}, ${neuWert}};\n        feld[0] = 0;\n    }`;
      const code = `import java.util.Arrays;\n\npublic class Aufrufer {\n${methode}\n\n    public static void main(String[] args) {\n        int[] a = ${liste(a)};\n        int x = ${x0};\n        m(a, x);\n        System.out.println(Arrays.toString(a));\n        System.out.println(x);\n    }\n}\n`;
      const loesung = `${ats(nachher)}\n${x0}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${ats(a)}\n${x0}`, meldung: `Bis zur Zuweisung \`feld = new int[]…\` zeigt \`feld\` auf das Array von \`a\`. Die Änderung an \`feld[${i}]\` sieht \`main\`.` },
              { wert: `[0, ${neuWert}]\n${x0 + d}`, meldung: "Die Zuweisung an den Parameter `feld` biegt nur dessen Pfeil um. `a` in `main` zeigt weiter auf das alte Array. Und `x` ist eine Kopie der Zahl." },
              { wert: `${ats(nachher)}\n${x0 + d}`, meldung: "`x` ist eine Kopie der Zahl. Die Zuweisung in `m` ändert das `x` in `main` nicht." },
            ]),
          },
        ],
        hinweis: "Bei `int[]` wird die Referenz kopiert, bei `int` die Zahl. Achte darauf, wann `feld` umgebogen wird.",
        loesung: `**Ansatz:** Für jede Zeile der Methode fragen, ob sie das Array von \`main\` ändert.\n---\n\`feld[${i}] += ${d}\` ändert das Array von \`a\`: \`${ats(nachher)}\`. \`x = x + ${d}\` ändert nur die Kopie.\n---\nDanach zeigt \`feld\` auf ein neues Array. \`feld[0] = 0\` betrifft \`a\` nicht. \`main\` gibt \`${ats(nachher)}\` und ${x0} aus.`,
      };
    },
  }),

  drill({
    id: "ar-d-exception",
    kapitel: K,
    titel: "Welche Schleife wirft eine Exception?",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 8);
      const falsch = r.wahl([
        { kopf: "for (int i = 0; i <= d.length; i++) { d[i] = i; }", warum: `Bei \`i = ${n}\` gilt \`${n} <= ${n}\`, und \`d[${n}]\` liegt hinter dem letzten Platz.` },
        { kopf: "for (int i = d.length; i > 0; i--) { d[i] = i; }", warum: `Schon der erste Zugriff ist \`d[${n}]\`. Der letzte gültige Index ist ${n - 1}.` },
        { kopf: "for (int i = 0; i < d.length; i++) { d[i] = d[i + 1]; }", warum: `Beim letzten Durchlauf ist \`i = ${n - 1}\`, dann ist \`i + 1 = ${n}\` kein gültiger Index.` },
        { kopf: "for (int i = 0; i < d.length; i++) { d[i - 1] = i; }", warum: "Schon beim ersten Durchlauf ist `i - 1 = -1`. Negative Indizes gibt es nicht." },
      ]);
      const sicher = r.mische([
        { kopf: "for (int i = d.length - 1; i >= 0; i--) { d[i] = i; }", warum: `Die Indizes laufen von ${n - 1} bis 0. Alle sind gültig.` },
        { kopf: "for (int i = 1; i < d.length; i++) { d[i] = d[i - 1]; }", warum: `\`i\` läuft von 1 bis ${n - 1}, \`i - 1\` von 0 bis ${n - 2}. Alle sind gültig.` },
        { kopf: "for (int i = 0; i < d.length - 1; i++) { d[i] = d[i + 1]; }", warum: `\`i + 1\` erreicht höchstens ${n - 1}, den letzten gültigen Index.` },
        { kopf: "for (int i = 0; i < d.length; i += 2) { d[i] = 1; }", warum: `\`i\` bleibt unter ${n}. Alle Zugriffe sind gültig.` },
      ]).slice(0, 2);
      const alle = r.mische([{ ...falsch, wirft: true }, ...sicher.map((s) => ({ ...s, wirft: false }))]);
      const richtig = alle.findIndex((x) => x.wirft);
      return {
        angabe: `Gegeben ist \`int[] d = new int[${n}];\`. Welche der drei Schleifen bricht mit einer \`ArrayIndexOutOfBoundsException\` ab?`,
        teile: [
          {
            typ: "auswahl",
            optionen: alle.map((x) => `\`${x.kopf}\``),
            richtig: [richtig],
            fehler: alle
              .map((x, p) => ({ x, p }))
              .filter(({ x }) => !x.wirft)
              .map(({ x, p }) => ({ wert: p, meldung: `Diese Schleife ist sicher. ${x.warum}` })),
          },
        ],
        hinweis: `Gültig sind die Indizes 0 bis ${n - 1}. Setze die Randwerte von \`i\` in jeden Index im Rumpf ein.`,
        loesung: `**Ansatz:** Für jede Schleife den kleinsten und größten Index im Rumpf bestimmen und mit 0 bis ${n - 1} vergleichen.\n---\n${alle.map((x) => `\`${x.kopf}\`: ${x.warum}`).join("\n\n")}\n---\nDie Exception wirft Schleife ${richtig + 1}.`,
      };
    },
  }),

  drill({
    id: "ar-d-haeufigkeit",
    kapitel: K,
    titel: "Häufigkeiten mit einem Zählerarray",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(8, 12);
      const z = zufallsArray(r, n, 0, 6);
      const h = Array(10).fill(0);
      for (const x of z) h[x]++;
      const frage = r.mische([0, 1, 2, 3, 4, 5, 6, 7]).slice(0, 3);
      const code = `int[] z = ${liste(z)};\nint[] h = new int[10];\nfor (int i = 0; i < z.length; i++) {\n    h[z[i]]++;\n}\nSystem.out.println(h[${frage[0]}] + " " + h[${frage[1]}] + " " + h[${frage[2]}]);\n`;
      const loesung = `${frage.map((f) => h[f]).join(" ")}\n`;
      const verwechselt = frage.map((f) => (f < z.length ? z[f] : 0)).join(" ");
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: verwechselt, meldung: "`h[k]` ist nicht das Element auf Platz `k` von `z`. Es ist der **Zähler** für den Wert `k`: wie oft `k` in `z` vorkommt." }]),
          },
        ],
        hinweis: "Nach der Schleife steht in `h[k]`, wie oft der Wert `k` in `z` vorkommt.",
        loesung: `**Ansatz:** Ein Zählerarray. Jeder Wert aus \`z\` ist ein Index in \`h\`.\n---\n${frage.map((f) => `Der Wert ${f} kommt ${h[f]}-mal vor`).join(". ")}.\n---\nAusgabe: \`${loesung.trim()}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-umdrehen",
    kapitel: K,
    titel: "In ein neues Array umdrehen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 7);
      const a = zufallsArray(r, n, 1, 40);
      const k = r.int(0, n - 1);
      const b = [...a].reverse();
      const code = `int[] a = ${liste(a)};\nint[] b = new int[a.length];\nfor (int i = 0; i < a.length; i++) {\n    b[a.length - 1 - i] = a[i];\n}\nSystem.out.println(Arrays.toString(b));\nSystem.out.println(b[${k}]);\n`;
      const loesung = `${ats(b)}\n${b[k]}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${ats(b)}\n${a[k]}`, meldung: `\`b[${k}]\` ist ein Platz im **umgedrehten** Array. Dort steht \`a[${n - 1 - k}]\`.` },
              { wert: `${ats(a)}\n${a[k]}`, meldung: "Jedes Element kommt auf den gespiegelten Platz `a.length - 1 - i`. Das erste landet am Ende." },
            ]),
          },
        ],
        hinweis: "Das Element auf Index `i` kommt auf den Platz `a.length - 1 - i`.",
        loesung: `**Ansatz:** Gespiegelte Plätze: Index \`i\` wird zu \`${n - 1} - i\`.\n---\nDas umgedrehte Array ist \`${ats(b)}\`.\n---\n\`b[${k}]\` ist ${b[k]}, das frühere \`a[${n - 1 - k}]\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-einfuegen",
    kapitel: K,
    titel: "Nach bestimmten Elementen etwas einfügen",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const a = zufallsArray(r, n, 0, 12);
      const v = r.int(0, 1);
      const g = r.int(4, 8);
      const bed = v === 0 ? "a[i] % 2 == 0" : `a[i] > ${g}`;
      const text = v === 0 ? "gerade" : `größer als ${g}`;
      const pruefe = (x: number) => (v === 0 ? x % 2 === 0 : x > g);
      const marke = r.wahl([-1, 0, 99]);
      const vorn = r.int(0, 1) === 1;
      const neu: number[] = [];
      const falschOrt: number[] = [];
      for (const x of a) {
        if (pruefe(x) && vorn) neu.push(marke);
        neu.push(x);
        if (pruefe(x) && !vorn) neu.push(marke);
        if (pruefe(x) && !vorn) falschOrt.push(marke);
        falschOrt.push(x);
        if (pruefe(x) && vorn) falschOrt.push(marke);
      }
      const anzahl = a.filter(pruefe).length;
      const schreiben = vorn
        ? `    if (${bed}) {\n        neu[j] = ${marke};\n        j++;\n    }\n    neu[j] = a[i];\n    j++;`
        : `    neu[j] = a[i];\n    j++;\n    if (${bed}) {\n        neu[j] = ${marke};\n        j++;\n    }`;
      const code = `int[] a = ${liste(a)};\nint anzahl = 0;\nfor (int i = 0; i < a.length; i++) {\n    if (${bed}) {\n        anzahl++;\n    }\n}\nint[] neu = new int[a.length + anzahl];\nint j = 0;\nfor (int i = 0; i < a.length; i++) {\n${schreiben}\n}\nSystem.out.println(neu.length);\nSystem.out.println(Arrays.toString(neu));\n`;
      const loesung = `${n + anzahl}\n${ats(neu)}\n`;
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${n + anzahl}\n${ats(falschOrt)}`, meldung: `Achte auf die Reihenfolge im Rumpf. Die ${marke} kommt ${vorn ? "**vor**" : "**hinter**"} das Element, das die Bedingung erfüllt.` },
              { wert: `${n}\n${ats(neu.slice(0, n))}`, meldung: "Das neue Array ist um die Anzahl der Treffer länger als das alte." },
            ]),
          },
        ],
        hinweis: `Zähle zuerst die Elemente, die ${text} sind. Das neue Array ist um diese Anzahl länger.`,
        loesung: `**Ansatz:** Einfügen nach Plan: Länge berechnen, dann mit Schreibindex \`j\` füllen.\n---\n${text[0].toUpperCase() + text.slice(1)} sind: ${a.filter(pruefe).join(", ") || "keine"}. Neue Länge: \`${n} + ${anzahl} = ${n + anzahl}\`.\n---\nJedes dieser Elemente bekommt ${vorn ? "davor" : "dahinter"} eine ${marke}. Ergebnis: \`${ats(neu)}\`.`,
      };
    },
  }),

  drill({
    id: "ar-d-inhalt-n",
    kapitel: K,
    titel: "Der Inhalt von data für ein bestimmtes n",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(4, 7);
      const k = r.int(2, 3);
      const v = r.int(0, 3);
      const data = Array(n).fill(0);
      let schleife = "";
      let falsch: number[] = [];
      let fehlerText = "";
      if (v === 0) {
        schleife = `for (int i = n - 1; i > 0; i -= ${k}) {\n    data[i] = n - i;\n}`;
        for (let i = n - 1; i > 0; i -= k) data[i] = n - i;
        falsch = Array(n).fill(0);
        for (let i = n - 1; i >= 0; i -= k) falsch[i] = n - i;
        fehlerText = "Die Bedingung lautet `i > 0`. Der Index 0 wird nie beschrieben und behält den Standardwert 0.";
      } else if (v === 1) {
        schleife = `for (int i = 0; i < n - 1; i++) {\n    data[i + 1] = data[i] + ${k};\n}`;
        for (let i = 0; i < n - 1; i++) data[i + 1] = data[i] + k;
        falsch = Array.from({ length: n }, (_, i) => (i + 1) * k);
        fehlerText = "`data[0]` wird nie beschrieben und bleibt 0. Erst `data[1]` bekommt `0 + " + k + "`.";
      } else if (v === 2) {
        schleife = `for (int i = 1; i <= n; i++) {\n    data[i - 1] = n / i;\n}`;
        for (let i = 1; i <= n; i++) data[i - 1] = idiv(n, i);
        falsch = Array.from({ length: n }, (_, i) => Math.round(n / (i + 1)));
        fehlerText = "`n / i` ist eine Ganzzahldivision. Java rundet nicht, der Nachkommaanteil fällt einfach weg.";
      } else {
        schleife = `for (int i = 0; i < n; i += ${k}) {\n    data[i] = i % ${k + 1};\n}`;
        for (let i = 0; i < n; i += k) data[i] = jmod(i, k + 1);
        falsch = Array.from({ length: n }, (_, i) => jmod(i, k + 1));
        fehlerText = `Die Schleife springt in ${k}er-Schritten. Die übersprungenen Plätze behalten den Standardwert 0.`;
      }
      const code = `int n = ${n};\nint[] data = new int[n];\n${schleife}\nSystem.out.println(Arrays.toString(data));\n`;
      const loesung = `${ats(data)}\n`;
      return {
        angabe: "Was gibt der Code aus? Solche Codestücke kommen im Quiz mit allgemeinem `n` vor. Hier ist `n` fest.",
        teile: [{ typ: "ausgabe", code, loesung, fehler: nurFalsche(loesung, [{ wert: ats(falsch), meldung: fehlerText }]) }],
        hinweis: "Bestimme die Werte von `i`, für die die Schleife läuft. Alle anderen Plätze behalten 0.",
        loesung: `**Ansatz:** Das ganze Array aufschreiben, auch die Plätze, die die Schleife nie beschreibt.\n---\nNeues Array der Länge ${n}: zuerst überall 0. Die Schleife beschreibt nur einen Teil der Plätze oder rechnet mit schon geschriebenen Werten.\n---\nErgebnis: \`${ats(data)}\`.`,
      };
    },
  }),
];
