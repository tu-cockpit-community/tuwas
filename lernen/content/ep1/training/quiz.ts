import { drill, type Drill, type Rng } from "@/lib/lernen/training";

const K = "quiz";

/** Java-Code als Markdown-Codeblock */
const javaBlock = (code: string) => "```java\n" + code + "\n```";

/** Optionen mischen; liefert die gemischte Liste und den neuen Index jeder Ausgangsoption */
function mischeOptionen<T>(r: Rng, optionen: T[]): { liste: T[]; index: number[] } {
  const reihenfolge = r.mische(optionen.map((_, i) => i));
  return { liste: reihenfolge.map((i) => optionen[i]), index: optionen.map((_, i) => reihenfolge.indexOf(i)) };
}

/** Java-Ausgabe von Arrays.toString fuer int-Arrays */
const arrStr = (a: number[]) => "[" + a.join(", ") + "]";

/** Verzweigtes Programm aus der Lektion zu Quiz 1, Slot 3 */
function startwerteAusgabe(a: number, b: number, c: number): string {
  let o = "";
  if (a < b && b < c) o += "A";
  else if (a < c) o += "B";
  else o += "C";
  // Java-% hat das Vorzeichen des linken Operanden; fuer a >= 0 identisch mit JS
  if (a % 2 === 0 || c < 0) o += "D";
  return o;
}

export const DRILLS: Drill[] = [
  drill({
    id: "qz-d-cast-summe",
    kapitel: K,
    titel: "Cast auf die Summe oder auf die Summanden",
    niveau: 1,
    erzeuge: (r) => {
      const ai = r.int(1, 9);
      const bi = r.int(1, 9);
      const af = r.int(6, 9);
      const bf = r.int(Math.max(5, 11 - af), 9); // af + bf >= 11: Nachkommaanteil der Summe mindestens 0,1
      const a = `${ai}.${af}`;
      const b = `${bi}.${bf}`;
      const ganzSumme = ai + bi + 1;
      const einzeln = ai + bi;
      const gerundet = Math.round(ai + af / 10 + bi + bf / 10);
      const code = `System.out.println((int) (${a} + ${b}));\nSystem.out.println((int) ${a} + (int) ${b});`;
      const fehler = [{ wert: `${ganzSumme}\n${ganzSumme}`, meldung: "In der zweiten Zeile wirkt jeder Cast nur auf seine eigene Zahl. Erst werden beide Zahlen abgeschnitten, dann addiert." }];
      if (gerundet !== ganzSumme) fehler.push({ wert: `${gerundet}\n${einzeln}`, meldung: "Ein Cast nach `int` schneidet die Nachkommastellen ab. Er rundet nicht." });
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${ganzSumme}\n${einzeln}\n`, fehler }],
        hinweis: "Prüfe für jeden Cast, ob direkt dahinter eine Klammer oder nur eine Zahl steht.",
        loesung: `**Ansatz:** Zuerst klären, worauf sich jeder Cast bezieht.\n---\nZeile 1: Die Klammer wird zuerst berechnet. Die Nachkommaanteile ergeben zusammen mehr als 1, die Summe liegt also zwischen ${ganzSumme} und ${ganzSumme + 1}. Abgeschnitten: \`${ganzSumme}\`.\n---\nZeile 2: \`(int) ${a}\` ist ${ai}, \`(int) ${b}\` ist ${bi}. Summe \`${einzeln}\`.`,
      };
    },
  }),
  drill({
    id: "qz-d-verkettung",
    kapitel: K,
    titel: "Plus mit Zahlen und Strings",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const b = r.int(2, 9);
      const sep = r.wahl(["|", "-", ":", "#"]);
      const code = `int a = ${a}, b = ${b};\nSystem.out.println(a + b + "${sep}" + a + b);\nSystem.out.println("" + a + b);`;
      const z1 = `${a + b}${sep}${a}${b}`;
      const z2 = `${a}${b}`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${z1}\n${z2}\n`,
            fehler: [
              { wert: `${a + b}${sep}${a + b}\n${z2}`, meldung: `Rechts vom \`"${sep}"\` steht links schon ein String. Ab da wird angehängt, nicht addiert.` },
              { wert: `${z1}\n${a + b}`, meldung: '`"" + a` ist schon ein String. Danach wird `b` angehängt, nicht addiert.' },
            ],
          },
        ],
        hinweis: "Werte jedes `+` von links nach rechts aus und frag jedes Mal, ob links schon ein String steht.",
        loesung: `**Ansatz:** Solange links und rechts Zahlen stehen, wird gerechnet. Sobald eine Seite ein String ist, wird verkettet.\n---\nZeile 1: \`${a} + ${b} = ${a + b}\`, dann \`"${a + b}${sep}"\`, dann werden ${a} und ${b} angehängt: \`${z1}\`.\n---\nZeile 2: \`"" + ${a}\` ist \`"${a}"\`, dann \`"${z2}"\`.`,
      };
    },
  }),
  drill({
    id: "qz-d-char",
    kapitel: K,
    titel: "Zeichen plus Zahl",
    niveau: 1,
    erzeuge: (r) => {
      const code0 = r.int(97, 112); // 'a' bis 'p'
      const zeichen = String.fromCharCode(code0);
      const k = r.int(1, 5);
      const code = `char c = '${zeichen}';\nSystem.out.println(c + ${k});\nSystem.out.println((char) (c + ${k}));`;
      const neu = String.fromCharCode(code0 + k);
      return {
        angabe: `Der Buchstabe \`'a'\` hat den Zeichencode 97, die folgenden Buchstaben haben die Codes 98, 99 und so weiter. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${code0 + k}\n${neu}\n`,
            fehler: [{ wert: `${neu}\n${neu}`, meldung: "`c + " + k + "` ist `char` plus `int`, also eine Zahl. Erst der Cast `(char)` macht wieder ein Zeichen daraus." }],
          },
        ],
        hinweis: `Bestimme zuerst den Zeichencode von \`'${zeichen}'\`.`,
        loesung: `**Ansatz:** \`'${zeichen}'\` hat den Code ${code0}.\n---\n\`c + ${k}\` ist die Zahl ${code0 + k}. Der Cast \`(char)\` macht daraus das Zeichen \`${neu}\`.`,
      };
    },
  }),
  drill({
    id: "qz-d-intervallsumme",
    kapitel: K,
    titel: "Welches Fragment berechnet die Summe?",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(3, 7);
      const a = k * r.int(1, 3);
      const b = a + k * r.int(3, 6);
      const summe = (von: number, bis: number, inkl: boolean) => {
        let s = 0;
        for (let i = von; inkl ? i <= bis : i < bis; i++) if (i % k === 0) s += i;
        return s;
      };
      const richtig = summe(a, b, true);
      const ohneEnde = summe(a, b, false);
      const ohneStart = summe(a + 1, b, true);
      const opt = [
        { text: `\`for (int i = ${a}; i <= ${b}; i++) if (i % ${k} == 0) s += i;\``, wert: richtig },
        { text: `\`for (int i = ${a}; i < ${b}; i++) if (i % ${k} == 0) s += i;\``, wert: ohneEnde },
        { text: `\`for (int i = ${a + 1}; i <= ${b}; i++) if (i % ${k} == 0) s += i;\``, wert: ohneStart },
      ];
      const { liste, index } = mischeOptionen(r, opt);
      return {
        angabe: `Welches Fragment berechnet in \`s\` die Summe ${richtig} aller durch ${k} teilbaren Zahlen im Intervall \`[${a}, ${b}]\`? Vor jedem Fragment steht \`int s = 0;\`.`,
        teile: [
          {
            typ: "auswahl",
            optionen: liste.map((o) => o.text),
            richtig: [index[0]],
            fehler: [
              { wert: index[1], meldung: `Die Klammer \`${b}]\` schließt ${b} ein, aber \`i < ${b}\` lässt ${b} aus. Dieses Fragment liefert ${ohneEnde}.` },
              { wert: index[2], meldung: `Die Klammer \`[${a}\` schließt ${a} ein, aber dieses Fragment beginnt bei ${a + 1}. Es liefert ${ohneStart}.` },
            ],
          },
        ],
        hinweis: "Markiere die Unterschiede: Startwert und Bedingung. Beide Grenzen sind Vielfache der Teilerzahl.",
        loesung: `**Ansatz:** \`[${a}, ${b}]\` ist geschlossen. Also Start bei ${a} und Bedingung \`i <= ${b}\`.\n---\nDas Fragment mit \`i < ${b}\` verliert die ${b} (Summe ${ohneEnde}), das mit Start ${a + 1} verliert die ${a} (Summe ${ohneStart}).\n---\nRichtig ist das Fragment mit Start ${a} und \`<=\`: Summe ${richtig}.`,
      };
    },
  }),
  drill({
    id: "qz-d-startwerte",
    kapitel: K,
    titel: "Startwerte für eine Ausgabe",
    niveau: 2,
    erzeuge: (r) => {
      const code = `if (a < b && b < c) {\n    System.out.print("A");\n} else if (a < c) {\n    System.out.print("B");\n} else {\n    System.out.print("C");\n}\nif (a % 2 == 0 || c < 0) {\n    System.out.print("D");\n}`;
      const tripel = () => [r.int(0, 9), r.int(-5, 9), r.int(-5, 9)] as const;
      let t1 = tripel();
      let ziel = startwerteAusgabe(...t1);
      const andere: (readonly [number, number, number])[] = [];
      let versuche = 0;
      while (andere.length < 2 && versuche < 500) {
        versuche++;
        const t = tripel();
        const o = startwerteAusgabe(...t);
        if (o !== ziel && !andere.some((x) => startwerteAusgabe(...x) === o)) andere.push(t);
      }
      if (andere.length < 2) {
        // fester Rueckfall (kommt praktisch nicht vor)
        t1 = [4, 1, 7];
        ziel = "BD";
        andere.length = 0;
        andere.push([4, 5, 7], [3, 1, 7]);
      }
      const fmt = (t: readonly number[]) => `\`int a = ${t[0]}, b = ${t[1]}, c = ${t[2]};\``;
      const opt = [t1, andere[0], andere[1]];
      const { liste, index } = mischeOptionen(r, opt);
      return {
        angabe: `${javaBlock(code)}\nWelche Startwerte erzeugen genau die Ausgabe \`${ziel}\`?`,
        teile: [
          {
            typ: "auswahl",
            optionen: liste.map(fmt),
            richtig: [index[0]],
            fehler: [1, 2].map((i) => ({ wert: index[i], meldung: `Diese Startwerte erzeugen \`${startwerteAusgabe(...opt[i])}\`. Spiel beide \`if\`-Anweisungen bis zum Ende durch.` })),
          },
        ],
        hinweis: "Leg eine Tabelle an: eine Spalte je Bedingung, eine Zeile je Option.",
        loesung: `**Ansatz:** Jedes Tripel bis zur letzten Zeile durchspielen.\n---\n${opt.map((t) => `${fmt(t)} ergibt \`${startwerteAusgabe(...t)}\`.`).join(" ")}\n---\nNur ${fmt(t1)} erzeugt genau \`${ziel}\`.`,
      };
    },
  }),
  drill({
    id: "qz-d-sterne",
    kapitel: K,
    titel: "Sterne einer Doppelschleife zählen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(3, 9);
      const dreieck = r.zufall() < 0.5;
      const m = r.int(2, 6);
      const innen = dreieck ? "j <= i" : `j < ${m}`;
      const anzahl = dreieck ? (n * (n + 1)) / 2 : n * m;
      const fehler = dreieck
        ? [{ wert: String(n * n), meldung: "Die innere Schleife läuft nicht immer gleich oft. Für `i = 0` läuft sie einmal, für `i = 1` zweimal und so weiter." }]
        : [{ wert: String(n + m), meldung: "Die innere Schleife läuft in **jedem** äußeren Durchlauf vollständig. Die Zahlen werden multipliziert." }];
      return {
        angabe: `Wie viele Sterne gibt das Fragment aus?\n${javaBlock(`for (int i = 0; i < ${n}; i++) {\n    for (int j = 0; ${innen}; j++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}`)}`,
        teile: [{ typ: "zahl", loesung: String(anzahl), fehler }],
        hinweis: dreieck ? "Zähle für `i = 0, 1, 2, …` die Durchläufe der inneren Schleife und addiere." : "Zeilen mal Sterne je Zeile.",
        loesung: dreieck
          ? `**Ansatz:** Für jedes \`i\` läuft die innere Schleife \`i + 1\`-mal.\n---\n${Array.from({ length: n }, (_, i) => i + 1).join(" + ")} = ${anzahl}.`
          : `**Ansatz:** ${n} Zeilen, in jeder läuft die innere Schleife ${m}-mal.\n---\n${n} · ${m} = ${anzahl}.`,
      };
    },
  }),
  drill({
    id: "qz-d-vorbedingung",
    kapitel: K,
    titel: "Eine ausreichende Vorbedingung",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(3, 5); // k = 2 waere die Aufgabe qz-me-vorbedingung aus dem Kapitel
      const opt = [`\`a > ${k} * b\``, "`a > 0 && b > 0`", "`b != 0`"];
      const { liste, index } = mischeOptionen(r, opt);
      return {
        angabe: `${javaBlock(`static int teile(int a, int b) {\n    return a / (a - ${k} * b);\n}`)}\nBei welcher Vorbedingung kann kein Aufruf von \`teile\` mit einer Exception abbrechen?`,
        teile: [
          {
            typ: "auswahl",
            optionen: liste,
            richtig: [index[0]],
            fehler: [
              { wert: index[1], meldung: `Probier \`a = ${k}, b = 1\`. Beide sind positiv, aber \`a - ${k} * b\` ist 0.` },
              { wert: index[2], meldung: `Probier \`a = ${2 * k}, b = 2\`. Dann ist \`b != 0\`, aber \`a - ${k} * b\` ist 0.` },
            ],
          },
        ],
        hinweis: `Für welche Werte ist der Nenner \`a - ${k} * b\` gleich 0? Prüfe jede Option mit so einem Wertepaar.`,
        loesung: `**Ansatz:** Gefahr ist eine Division durch 0, also \`a == ${k} * b\`.\n---\nDie Optionen \`a > 0 && b > 0\` und \`b != 0\` lassen solche Paare zu, etwa \`(${k}, 1)\` und \`(${2 * k}, 2)\`.\n---\nAus \`a > ${k} * b\` folgt \`a - ${k} * b > 0\`. Der Nenner ist nie 0.`,
      };
    },
  }),
  drill({
    id: "qz-d-kapazitaet",
    kapitel: K,
    titel: "Kapazität eines mehrdimensionalen Arrays",
    niveau: 1,
    erzeuge: (r) => {
      const typ = r.wahl(["int", "long", "double", "char", "boolean"]);
      const dims = Array.from({ length: r.int(2, 3) }, () => r.int(2, 6));
      const kap = dims.reduce((p, x) => p * x, 1);
      const summe = dims.reduce((p, x) => p + x, 0);
      return {
        angabe: `Wie viele Werte kann \`new ${typ}${dims.map((d) => `[${d}]`).join("")}\` speichern?`,
        // bei [2][2] ist Summe = Produkt; dann kein Fehlerbild
        teile: [{ typ: "zahl", loesung: dims.join(" * "), fehler: summe !== kap ? [{ wert: String(summe), meldung: "Du hast die Längen addiert. Jede Ebene enthält die nächste vollständig, also werden die Längen multipliziert." }] : undefined }],
        hinweis: "Bei rechteckigen mehrdimensionalen Arrays multiplizierst du die Längen.",
        loesung: `**Ansatz:** Jede Ebene enthält die nächste vollständig.\n---\n${dims.join(" · ")} = ${kap} Werte.`,
      };
    },
  }),
  drill({
    id: "qz-d-rekursion-ausgaben",
    kapitel: K,
    titel: "Ausgaben einer verzweigten Rekursion",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.int(1, 2);
      const n = d === 1 ? r.int(2, 5) : r.int(3, 8);
      const A = (x: number): number => (x <= 0 ? 0 : 1 + 2 * A(x - d));
      const ebenen = (x: number): number => (x <= 0 ? 0 : 1 + ebenen(x - d));
      const werte: number[] = [];
      for (let x = n; x > 0; x -= d) werte.unshift(x);
      return {
        angabe: `${javaBlock(`static void q(int n) {\n    if (n <= 0) return;\n    System.out.print(n);\n    q(n - ${d});\n    q(n - ${d});\n}`)}\nWie viele Zahlen gibt der Aufruf \`q(${n})\` aus?`,
        teile: [{ typ: "zahl", loesung: String(A(n)), fehler: [{ wert: String(ebenen(n)), meldung: "Das wäre die Zahl bei **einem** Selbstaufruf. Hier ruft sich `q` zweimal auf, und jeder Aufruf gibt selbst wieder aus." }] }],
        hinweis: `Stelle die Formel \`A(n) = 1 + 2 · A(n − ${d})\` mit \`A(n) = 0\` für \`n <= 0\` auf und rechne von klein nach groß.`,
        loesung: `**Ansatz:** Jeder Aufruf mit \`n > 0\` gibt eine Zahl aus und enthält zwei Aufrufe mit \`n − ${d}\`.\n---\n${werte.map((x) => `A(${x}) = ${A(x)}`).join(", ")}.\n---\nErgebnis: ${A(n)} Zahlen.`,
      };
    },
  }),
  drill({
    id: "qz-d-o-schranke",
    kapitel: K,
    titel: "Kleinste obere Schranke einer Schleife",
    niveau: 2,
    erzeuge: (r) => {
      const optionen = ["`O(log n)`", "`O(n)`", "`O(n log n)`", "`O(n²)`"];
      const varianten = [
        { aussen: "for (int i = 0; i < n; i++)", innen: "for (int j = 0; j < n; j++)", loes: 3, erkl: "Beide Schleifen laufen `n`-mal: `n · n`." },
        { aussen: "for (int i = 0; i < n; i++)", innen: "for (int j = 1; j < n; j *= 2)", loes: 2, erkl: "Die innere Schleife verdoppelt `j` und läuft etwa `log n`-mal: `n · log n`." },
        { aussen: "for (int i = 0; i < n; i++)", innen: `for (int j = 0; j < ${r.int(3, 20)}; j++)`, loes: 1, erkl: "Die innere Schleife läuft eine feste Zahl von Malen, unabhängig von `n`. Konstante Faktoren fallen weg: `O(n)`." },
        { aussen: "for (int i = 0; i < n; i++)", innen: "for (int j = 0; j < i; j++)", loes: 3, erkl: "Die innere Schleife läuft 0, 1, … , n − 1 Mal, zusammen etwa `n²/2`." },
        { aussen: "for (int i = 0; i < n; i++)", innen: "for (int j = 0; j < n; j += n / 3)", loes: 1, erkl: "Die innere Schleife springt in Schritten von `n / 3` und läuft für `n >= 3` höchstens fünfmal: `O(n)`." },
        { aussen: "for (int i = 1; i < n; i *= 2)", innen: `for (int j = 0; j < ${r.int(3, 9)}; j++)`, loes: 0, erkl: "Die äußere Schleife verdoppelt `i` und läuft etwa `log n`-mal, die innere eine feste Zahl von Malen." },
      ];
      const v = r.wahl(varianten);
      const fehler = [0, 1, 2, 3]
        .filter((i) => i !== v.loes)
        .map((i) => ({
          wert: i,
          meldung:
            i === 3
              ? "Zwei verschachtelte Schleifen ergeben nicht automatisch `n²`. Schau auf den Schritt und die Grenze **jeder** Schleife."
              : i === 2
                ? "`log n` entsteht nur, wenn sich eine Laufvariable verdoppelt oder halbiert. Prüfe, welche Schleife das tut und wie oft die andere läuft."
                : i === 1
                  ? "Prüfe, wie oft **jede** der beiden Schleifen läuft, und multipliziere."
                  : "`O(log n)` gilt nur, wenn alle Schleifen zusammen nur etwa `log n`-mal laufen.",
        }));
      return {
        angabe: `Welche kleinste obere Schranke hat die Laufzeit in Abhängigkeit von \`n\` (für \`n >= 3\`)?\n${javaBlock(`${v.aussen} {\n    ${v.innen} {\n        z++;\n    }\n}`)}`,
        teile: [{ typ: "auswahl", optionen, richtig: [v.loes], fehler }],
        hinweis: "Bestimme für jede Schleife die Zahl der Durchläufe: Schritt `++` bis `n` heißt etwa `n`, Verdoppeln heißt etwa `log n`, eine feste Grenze heißt konstant.",
        loesung: `**Ansatz:** Durchläufe jeder Schleife bestimmen und multiplizieren.\n---\n${v.erkl}\n---\nKleinste obere Schranke: ${optionen[v.loes]}.`,
      };
    },
  }),
  drill({
    id: "qz-d-array-schleife",
    kapitel: K,
    titel: "Array-Inhalt nach einer Schleife",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const art = r.int(0, 2);
      const a = new Array<number>(n).fill(0);
      let code: string;
      let erkl: string;
      let fehlerWert: number[];
      let fehlerMeldung: string;
      if (art === 0) {
        const k = r.int(2, 4);
        const m = r.int(3, 5);
        for (let i = 0; i < n; i++) a[i] = (i * k) % m;
        code = `int[] a = new int[${n}];\nfor (int i = 0; i < a.length; i++) {\n    a[i] = (i * ${k}) % ${m};\n}\nSystem.out.println(Arrays.toString(a));`;
        erkl = `Für jedes \`i\` von 0 bis ${n - 1} wird \`i * ${k}\` gerechnet und der Rest bei Division durch ${m} gespeichert.`;
        fehlerWert = Array.from({ length: n }, (_, i) => i * k);
        fehlerMeldung = `Gespeichert wird der **Rest** bei Division durch ${m}, nicht das Produkt selbst.`;
      } else if (art === 1) {
        const k = r.int(2, 5);
        for (let i = 1; i < n; i++) a[i] = a[i - 1] + k;
        code = `int[] a = new int[${n}];\nfor (int i = 1; i < a.length; i++) {\n    a[i] = a[i - 1] + ${k};\n}\nSystem.out.println(Arrays.toString(a));`;
        erkl = `\`a[0]\` bleibt 0. Jedes weitere Element ist das vorige plus ${k}.`;
        fehlerWert = Array.from({ length: n }, (_, i) => (i + 1) * k);
        fehlerMeldung = "Die Schleife beginnt bei `i = 1`. `a[0]` wird nie beschrieben und behält den Standardwert 0.";
      } else {
        for (let i = 0; i < n; i++) a[i] = n - 1 - i;
        for (let i = 0; i < n / 2; i++) {
          const t = a[i];
          a[i] = a[n - 1 - i];
          a[n - 1 - i] = t;
        }
        code = `int[] a = new int[${n}];\nfor (int i = 0; i < a.length; i++) {\n    a[i] = a.length - 1 - i;\n}\nfor (int i = 0; i < a.length / 2; i++) {\n    int t = a[i];\n    a[i] = a[a.length - 1 - i];\n    a[a.length - 1 - i] = t;\n}\nSystem.out.println(Arrays.toString(a));`;
        erkl = `Die erste Schleife füllt das Array absteigend von ${n - 1} bis 0. Die zweite tauscht jeweils das \`i\`-te Element von vorn und von hinten, dreht das Array also um.`;
        fehlerWert = Array.from({ length: n }, (_, i) => n - 1 - i);
        fehlerMeldung = "Die zweite Schleife tauscht vordere und hintere Elemente. Sie dreht das Array um.";
      }
      const fehler = arrStr(fehlerWert) !== arrStr(a) ? [{ wert: arrStr(fehlerWert), meldung: fehlerMeldung }] : undefined;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: arrStr(a) + "\n", fehler }],
        hinweis: "Rechne die Elemente der Reihe nach aus. `Arrays.toString` schreibt sie in eckigen Klammern, getrennt durch Komma und Leerzeichen.",
        loesung: `**Ansatz:** ${erkl}\n---\nErgebnis: \`${arrStr(a)}\`.`,
      };
    },
  }),
  drill({
    id: "qz-d-bubble",
    kapitel: K,
    titel: "Ein Durchlauf Bubble Sort",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 6);
      const pool = r.mische(Array.from({ length: 20 }, (_, i) => i + 1));
      const start = pool.slice(0, n);
      const a = [...start];
      for (let j = 0; j < n - 1; j++) {
        if (a[j] > a[j + 1]) {
          const t = a[j];
          a[j] = a[j + 1];
          a[j + 1] = t;
        }
      }
      const sortiert = [...start].sort((x, y) => x - y);
      const fehler = arrStr(sortiert) !== arrStr(a) ? [{ wert: arrStr(sortiert), meldung: "Das wäre das fertig sortierte Array. Ein Durchlauf bringt nur das größte Element ans Ende." }] : undefined;
      const code = `int[] a = {${start.join(", ")}};\nfor (int j = 0; j < a.length - 1; j++) {\n    if (a[j] > a[j + 1]) {\n        int t = a[j];\n        a[j] = a[j + 1];\n        a[j + 1] = t;\n    }\n}\nSystem.out.println(Arrays.toString(a));`;
      return {
        angabe: "Das Programm führt genau einen Durchlauf der äußeren Schleife von Bubble Sort aus. Was gibt es aus?",
        teile: [{ typ: "ausgabe", code, loesung: arrStr(a) + "\n", fehler }],
        hinweis: "Vergleiche die Nachbarpaare von links nach rechts und tausche, wenn das linke Element größer ist. Arbeite mit dem jeweils aktuellen Array weiter.",
        loesung: `**Ansatz:** Benachbarte Paare von links nach rechts vergleichen.\n---\nDas größte Element ${Math.max(...start)} wandert dabei ganz nach rechts.\n---\nErgebnis: \`${arrStr(a)}\`.`,
      };
    },
  }),
];
