import { drill, type Drill } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 22 (Feedbackgespräch: Zusatzfragen, Variationen, Code erklären).
 * Jeder Generator übt eine Zusatzfrage der Aufgabenblätter mit eigenen Zahlen: i++ gegen i + 1, Intervallgrenzen,
 * Fallthrough, Kopie des Werts, Verweise, Aufrufe eines Fraktals, Indextyp, Umdrehen einer Schleife,
 * Scanner-Puffer und Typumwandlung. Die Referenzrechnungen bilden den Java-Code nach; der Validator
 * führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "feedbackgespraech";

type Fehler = { wert: string; meldung: string };

/** Fehlerbilder, die zufällig gleich der richtigen Ausgabe sind, fallen weg (auch Dubletten). */
function nurFalsche(loesung: string, fehler: Fehler[]): Fehler[] | undefined {
  const norm = (t: string) => t.replace(/\s+$/g, "").replace(/[ \t]+\n/g, "\n");
  const gesehen = new Set<string>([norm(loesung)]);
  const rest = fehler.filter((f) => {
    const n = norm(f.wert);
    if (gesehen.has(n)) return false;
    gesehen.add(n);
    return true;
  });
  return rest.length ? rest : undefined;
}

/** Zahl-Fehlerbilder ohne den richtigen Wert und ohne Dubletten */
function zahlFehler(richtig: number, fehler: { wert: number; meldung: string }[]): Fehler[] | undefined {
  const gesehen = new Set<number>([richtig]);
  const rest = fehler.filter((f) => {
    if (gesehen.has(f.wert)) return false;
    gesehen.add(f.wert);
    return true;
  });
  return rest.length ? rest.map((f) => ({ wert: String(f.wert), meldung: f.meldung })) : undefined;
}

/** Durchläufe einer Schleife `for (int i = a; i OP b; i += s)` durch Simulation */
function durchlaeufe(a: number, b: number, s: number, kleinerGleich: boolean): number[] {
  const werte: number[] = [];
  for (let i = a; kleinerGleich ? i <= b : i < b; i += s) werte.push(i);
  return werte;
}

const WOERTER = ["null", "eins", "zwei", "drei", "vier"];

export const DRILLS: Drill[] = [
  drill({
    id: "fg-d-inkrement-argument",
    kapitel: K,
    titel: "mal(i++), mal(i + d) und mal(++i)",
    niveau: 2,
    erzeuge: (r) => {
      const i0 = r.int(2, 9);
      const k = r.int(2, 4);
      const d = r.int(1, 3);
      const a = k * i0;
      const b = k * (i0 + 1 + d);
      const c = k * (i0 + 2);
      const loesung = `${a} ${b} ${c} ${i0 + 2}`;
      const code = [
        "public class Argumente {",
        "    public static int mal(int x) {",
        `        return ${k} * x;`,
        "    }",
        "",
        "    public static void main(String[] args) {",
        `        int i = ${i0};`,
        "        int a = mal(i++);",
        `        int b = mal(i + ${d});`,
        "        int c = mal(++i);",
        '        System.out.println(a + " " + b + " " + c + " " + i);',
        "    }",
        "}",
      ].join("\n");
      return {
        angabe: "Was gibt das Programm aus? Diese Frage steht sinngemäß als Zusatzfrage auf Blatt 2.",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              {
                wert: `${k * (i0 + 1)} ${b} ${c} ${i0 + 2}`,
                meldung: "`i++` übergibt den **alten** Wert von `i` und erhöht erst danach.",
              },
              {
                wert: `${a} ${b} ${k * (i0 + 2 + d)} ${i0 + 2 + d}`,
                meldung: `\`i + ${d}\` berechnet nur einen Wert. Die Variable \`i\` ändert sich dabei nicht.`,
              },
              {
                wert: `${a} ${b} ${k * (i0 + 1)} ${i0 + 2}`,
                meldung: "`++i` erhöht `i` **vor** der Übergabe. Übergeben wird der neue Wert, nicht der alte.",
              },
            ]),
          },
        ],
        hinweis: "Notiere nach jeder Zeile den Wert von `i`. `i++` liefert den alten Wert, `++i` den neuen, `i + d` ändert `i` nicht.",
        loesung:
          `**Ansatz:** Zeile für Zeile ausführen und \`i\` mitschreiben.\n---\n` +
          `\`mal(i++)\` bekommt ${i0}, also \`a = ${a}\`, danach ist \`i = ${i0 + 1}\`. \`mal(i + ${d})\` bekommt ${i0 + 1 + d}, also \`b = ${b}\`, \`i\` bleibt ${i0 + 1}.\n---\n` +
          `\`mal(++i)\`: \`i\` wird ${i0 + 2}, also \`c = ${c}\`. Ausgabe \`${loesung}\`.`,
      };
    },
  }),

  drill({
    id: "fg-d-schleife-anzahl",
    kapitel: K,
    titel: "Wie oft läuft die Schleife?",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(0, 10);
      const s = r.int(2, 5);
      const m = r.int(3, 7);
      const b = a + s * m + r.wahl([0, 0, 1, s - 1]);
      const kg = r.zufall() < 0.5;
      const werte = durchlaeufe(a, b, s, kg);
      const anderes = durchlaeufe(a, b, s, !kg).length;
      const n = werte.length;
      return {
        angabe:
          `Wie oft wird der Rumpf dieser Schleife ausgeführt?\n\n\`\`\`java\nfor (int i = ${a}; i ${kg ? "<=" : "<"} ${b}; i += ${s}) {\n    System.out.print(i + " ");\n}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: String(n),
            fehler: zahlFehler(n, [
              {
                wert: anderes,
                meldung: kg
                  ? `Die Bedingung lautet \`i <= ${b}\`. Prüfe, ob die Grenze ${b} selbst erreicht wird.`
                  : `Die Bedingung lautet \`i < ${b}\`. Die Grenze ${b} selbst gehört nicht dazu.`,
              },
              { wert: b - a, meldung: `Die Schleife zählt in Schritten von ${s}, nicht von 1.` },
            ]),
          },
        ],
        hinweis: "Schreib die Werte von `i` auf, für die die Bedingung gilt.",
        loesung: `\`i\` nimmt die Werte ${werte.join(", ")} an.\n---\nDanach ist \`i = ${a + s * n}\`, und die Bedingung ist falsch. Der Rumpf läuft ${n}-mal.`,
      };
    },
  }),

  drill({
    id: "fg-d-switch",
    kapitel: K,
    titel: "Fallthrough in einer switch-Anweisung",
    niveau: 1,
    erzeuge: (r) => {
      const wert = r.int(1, 4);
      const brk = [1, 2, 3, 4].map(() => r.zufall() < 0.5);
      brk[wert - 1] = false; // beim gewählten Fall fehlt das break immer, damit es durchfällt
      const zeilen: string[] = [`int wert = ${wert};`, "switch (wert) {"];
      for (let c = 1; c <= 4; c++) {
        zeilen.push(`    case ${c}:`, `        System.out.println("${WOERTER[c]}");`);
        if (brk[c - 1]) zeilen.push("        break;");
      }
      zeilen.push("    default:", '        System.out.println("sonst");', "}");
      const aus: string[] = [];
      let c = wert;
      for (;;) {
        if (c <= 4) {
          aus.push(WOERTER[c]);
          if (brk[c - 1]) break;
          c++;
        } else {
          aus.push("sonst");
          break;
        }
      }
      const loesung = aus.join("\n");
      return {
        angabe: "Was gibt der Code aus? (Zusatzfrage zu Blatt 1, sinngemäß: „Was passiert, wenn in einem `case` das `break` fehlt?“)",
        teile: [
          {
            typ: "ausgabe",
            code: zeilen.join("\n"),
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              {
                wert: WOERTER[wert],
                meldung: `Nach \`case ${wert}\` steht kein \`break\`. Java läuft in den nächsten Fall weiter, bis ein \`break\` oder das Ende kommt.`,
              },
            ]),
          },
        ],
        hinweis: "Springe zum passenden `case` und laufe weiter, bis ein `break` kommt.",
        loesung: `Java springt zu \`case ${wert}\`.\n---\nOhne \`break\` geht es weiter. Ausgegeben wird: ${aus.map((x) => `\`${x}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "fg-d-kopie-und-verweis",
    kapitel: K,
    titel: "Kopie des Werts, Kopie des Verweises",
    niveau: 1,
    erzeuge: (r) => {
      const z0 = r.int(1, 20);
      const w = r.int(1, 20);
      const p = r.int(2, 9);
      const q = r.int(2, 9);
      const loesung = `${z0} ${w + q}`;
      const code = [
        "public class Uebergabe {",
        "    public static void aendere(int x, int[] a) {",
        `        x = x + ${p};`,
        `        a[0] = a[0] + ${q};`,
        "    }",
        "",
        "    public static void main(String[] args) {",
        `        int z = ${z0};`,
        `        int[] feld = {${w}};`,
        "        aendere(z, feld);",
        '        System.out.println(z + " " + feld[0]);',
        "    }",
        "}",
      ].join("\n");
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              {
                wert: `${z0 + p} ${w + q}`,
                meldung: "`x` ist eine Kopie der Zahl `z`. Die Änderung trifft nur die Kopie.",
              },
              {
                wert: `${z0} ${w}`,
                meldung: "Auch beim Array wird eine Kopie übergeben, aber eine Kopie des **Verweises**. Sie zeigt auf dasselbe Array.",
              },
            ]),
          },
        ],
        hinweis: "Übergeben wird immer eine Kopie des Werts. Bei einem Array ist dieser Wert ein Verweis.",
        loesung: `\`x\` ist eine Kopie von \`z\`. \`z\` bleibt ${z0}.\n---\n\`a\` zeigt auf dasselbe Array wie \`feld\`. \`feld[0]\` wird ${w} + ${q} = ${w + q}.`,
      };
    },
  }),

  drill({
    id: "fg-d-alias",
    kapitel: K,
    titel: "Zwei Namen für ein Array",
    niveau: 1,
    erzeuge: (r) => {
      const werte = [r.int(1, 9), r.int(1, 9), r.int(1, 9)];
      const k = r.int(0, 2);
      let v = r.int(10, 99);
      while (v === werte[k]) v = r.int(10, 99);
      const loesung = `${v}\ntrue\nfalse`;
      const code = [
        `int[] a = {${werte.join(", ")}};`,
        "int[] b = a;",
        `b[${k}] = ${v};`,
        `int[] c = {${werte.map((x, i) => (i === k ? v : x)).join(", ")}};`,
        `System.out.println(a[${k}]);`,
        "System.out.println(a == b);",
        "System.out.println(a == c);",
      ].join("\n");
      return {
        angabe: "Was gibt der Code aus? (Zusatzfrage zu Blatt 4, sinngemäß: „Taugt `==`, um zwei Arrays zu vergleichen?“)",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              { wert: `${werte[k]}\ntrue\nfalse`, meldung: "`b = a` kopiert nur den Verweis. Eine Änderung über `b` sieht man auch über `a`." },
              { wert: `${v}\ntrue\ntrue`, meldung: "`c` ist ein eigenes Array mit gleichem Inhalt. `==` vergleicht Verweise, nicht Inhalte." },
            ]),
          },
        ],
        hinweis: "Zeichne Pfeile: `a` und `b` zeigen auf einen Kasten, `c` auf einen anderen.",
        loesung: `\`a\` und \`b\` zeigen auf dasselbe Array. Nach \`b[${k}] = ${v}\` ist auch \`a[${k}]\` gleich ${v}.\n---\n\`a == b\` ist \`true\` (derselbe Verweis), \`a == c\` ist \`false\` (anderes Array mit gleichem Inhalt).`,
      };
    },
  }),

  drill({
    id: "fg-d-parameter-neu",
    kapitel: K,
    titel: "Einen Array-Parameter neu zuweisen",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(1, 9);
      const q = r.int(1, 9);
      const x = r.int(10, 30);
      const y = r.int(40, 60);
      const z = r.int(70, 90);
      const loesung = `${x} ${q}`;
      const code = [
        "public class NeuZuweisen {",
        "    public static void neu(int[] f) {",
        `        f[0] = ${x};`,
        `        f = new int[]{${y}, ${y}};`,
        `        f[1] = ${z};`,
        "    }",
        "",
        "    public static void main(String[] args) {",
        `        int[] a = {${p}, ${q}};`,
        "        neu(a);",
        '        System.out.println(a[0] + " " + a[1]);',
        "    }",
        "}",
      ].join("\n");
      return {
        angabe: "Was gibt das Programm aus? (Nach Aufgabe 1 d, Blatt 4: „Warum ist der alte Inhalt noch da?“)",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              { wert: `${y} ${z}`, meldung: "`f = new int[]{…}` biegt nur den Parameter `f` um. `a` in `main` zeigt weiter auf das alte Array." },
              { wert: `${p} ${q}`, meldung: "Die erste Zeile `f[0] = …` steht **vor** der Neuzuweisung. Sie schreibt noch in das Array von `main`." },
              { wert: `${x} ${z}`, meldung: "Nach der Neuzuweisung zeigt `f` auf ein neues Array. `f[1] = …` trifft nur dieses neue Array." },
            ]),
          },
        ],
        hinweis: "Bis zur Neuzuweisung zeigt `f` auf das Array von `main`, danach auf ein neues Array.",
        loesung:
          `**Ansatz:** Für jede Zeile fragen, auf welches Array \`f\` gerade zeigt.\n---\n` +
          `\`f[0] = ${x}\` schreibt in das Array von \`main\`. Danach zeigt \`f\` auf ein neues Array, \`f[1] = ${z}\` trifft nur dieses.\n---\n` +
          `\`a\` ist also \`{${x}, ${q}}\`. Ausgabe \`${loesung}\`.`,
      };
    },
  }),

  drill({
    id: "fg-d-fraktal",
    kapitel: K,
    titel: "Aufrufe und Formen eines Fraktals",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.int(2, 4); // Selbstaufrufe je Ebene
      const d = r.wahl([2, 3]); // Teiler der Seitenlänge
      const L = r.int(3, 5); // gezeichnete Ebenen
      const g = r.wahl([4, 5, 6, 8, 10]); // kleinste gezeichnete Seitenlänge
      const s0 = g * d ** (L - 1);
      const vorher = r.zufall() < 0.5; // Prüfung vor dem Selbstaufruf statt am Anfang
      let formen = 0;
      for (let k = 0; k < L; k++) formen += b ** k;
      const aufrufe = vorher ? formen : formen + b ** L;
      const dx = ["x - s", "x + s", "x"];
      const dy = ["y", "y", "y + s"];
      const aufrufZeilen = Array.from({ length: b }, (_, i) => {
        const ax = i < 3 ? dx[i] : "x";
        const ay = i < 3 ? dy[i] : "y - s";
        return `muster(cd, ${ax}, ${ay}, s / ${d});`;
      });
      const code = vorher
        ? [
            "public static void muster(CodeDraw cd, int x, int y, int s) {",
            "    cd.fillSquare(x - s / 2, y - s / 2, s);",
            `    if (s / ${d} >= ${g}) {`,
            ...aufrufZeilen.map((z) => "        " + z),
            "    }",
            "}",
          ]
        : [
            "public static void muster(CodeDraw cd, int x, int y, int s) {",
            `    if (s < ${g}) {`,
            "        return;",
            "    }",
            ...aufrufZeilen.map((z) => "    " + z),
            "    cd.fillSquare(x - s / 2, y - s / 2, s);",
            "}",
          ];
      const groessen = Array.from({ length: L }, (_, k) => s0 / d ** k);
      return {
        angabe:
          `Die Methode wird mit \`muster(cd, 400, 400, ${s0})\` gestartet.\n\n\`\`\`java\n${code.join("\n")}\n\`\`\`\n\n` +
          "**a)** Wie viele Quadrate werden gezeichnet?\n\n**b)** Wie oft wird `muster` aufgerufen, den ersten Aufruf mitgezählt?",
        teile: [
          {
            typ: "zahl",
            label: "a)",
            loesung: String(formen),
            fehler: zahlFehler(formen, [
              { wert: formen + b ** L, meldung: "Aufrufe, die nur den Basisfall prüfen, zeichnen nichts. Zähle nur Ebenen, auf denen gezeichnet wird." },
              { wert: b ** (L - 1), meldung: "Das sind nur die Quadrate der letzten Ebene. Gefragt ist die Summe über alle Ebenen." },
            ]),
          },
          {
            typ: "zahl",
            label: "b)",
            loesung: String(aufrufe),
            fehler: zahlFehler(aufrufe, [
              vorher
                ? { wert: formen + b ** L, meldung: "Hier wird die Größe **vor** dem Selbstaufruf geprüft. Es gibt keine Aufrufe, die nur einen Basisfall prüfen." }
                : { wert: formen, meldung: "Der Basisfall steht am Anfang der Methode. Auch die Aufrufe mit zu kleiner Seitenlänge finden statt und zählen mit." },
            ]),
          },
        ],
        hinweis: `Leg eine Tabelle an: Ebene, Seitenlänge, Aufrufe. Jede Ebene hat ${b}-mal so viele Aufrufe wie die vorige.`,
        loesung:
          `**Ansatz:** Ebenen zählen. Gezeichnet wird bei den Seitenlängen ${groessen.join(", ")}.\n---\n` +
          `Quadrate: ${Array.from({ length: L }, (_, k) => b ** k).join(" + ")} = ${formen}.\n---\n` +
          (vorher
            ? `Die Größe wird vor dem Selbstaufruf geprüft, jeder Aufruf zeichnet. Aufrufe = ${aufrufe}.`
            : `Dazu kommen ${b ** L} Aufrufe mit Seitenlänge ${s0 / d ** L < 1 ? 0 : Math.floor(s0 / d ** L)}, die nur den Basisfall prüfen. Aufrufe = ${formen} + ${b ** L} = ${aufrufe}.`),
      };
    },
  }),

  drill({
    id: "fg-d-linear-aufrufe",
    kapitel: K,
    titel: "Aufrufe einer linearen Rekursion",
    niveau: 1,
    erzeuge: (r) => {
      const schritt = r.int(2, 4);
      const start = r.int(1, 9);
      const n = r.int(4, 9);
      const ende = start + schritt * (n - 1) + r.int(0, schritt - 1);
      const ausgaben = durchlaeufe(start, ende, schritt, true).length;
      const aufrufe = ausgaben + 1;
      return {
        angabe:
          `Wie oft wird \`zeige\` insgesamt aufgerufen, wenn \`main\` den Aufruf \`zeige(${start}, ${ende})\` macht? Der erste Aufruf zählt mit.\n\n` +
          `\`\`\`java\npublic static void zeige(int von, int bis) {\n    if (von > bis) {\n        return;\n    }\n    System.out.print(von + " ");\n    zeige(von + ${schritt}, bis);\n}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: String(aufrufe),
            fehler: zahlFehler(aufrufe, [
              { wert: ausgaben, meldung: "Das ist die Zahl der Ausgaben. Der letzte Aufruf landet im Basisfall und zählt trotzdem mit." },
              { wert: ende - start + 1, meldung: `Der Fortschritt ist \`von + ${schritt}\`, nicht \`von + 1\`.` },
            ]),
          },
        ],
        hinweis: "Schreib die Werte von `von` aller Aufrufe auf, bis einmal `von > bis` gilt.",
        loesung: `Ausgegeben werden ${durchlaeufe(start, ende, schritt, true).join(", ")}, also ${ausgaben} Aufrufe mit Ausgabe.\n---\nDazu kommt der Aufruf mit \`von = ${start + schritt * ausgaben}\`, der nur den Basisfall prüft. Zusammen ${aufrufe}.`,
      };
    },
  }),

  drill({
    id: "fg-d-indextyp",
    kapitel: K,
    titel: "Welcher Index kompiliert?",
    niveau: 1,
    erzeuge: (r) => {
      const pool: { text: string; ok: boolean; warum: string }[] = [
        { text: "`a[3]`", ok: true, warum: "ein `int`-Literal" },
        { text: "`a['d' - 'a']`", ok: true, warum: "`char` minus `char` ergibt ein `int`" },
        { text: "`a[(int) 2.9]`", ok: true, warum: "der Cast macht aus dem `double` ein `int`" },
        { text: "`a[k]` mit `short k = 1;`", ok: true, warum: "`short` wird automatisch zu `int`" },
        { text: "`a[c]` mit `char c = 2;`", ok: true, warum: "`char` wird automatisch zu `int`" },
        { text: "`a[2L]`", ok: false, warum: "ein `long` braucht einen Cast" },
        { text: "`a[1.0]`", ok: false, warum: "ein `double` braucht einen Cast" },
        { text: "`a[m]` mit `long m = 1;`", ok: false, warum: "`long` wird nicht automatisch zu `int`" },
        { text: "`a[h]` mit `double h = 2;`", ok: false, warum: "`double` wird nicht automatisch zu `int`" },
      ];
      const gut = r.mische(pool.filter((p) => p.ok)).slice(0, 2);
      const schlecht = r.mische(pool.filter((p) => !p.ok)).slice(0, 2);
      const optionen = r.mische([...gut, ...schlecht]);
      const richtig = optionen.map((o, i) => (o.ok ? i : -1)).filter((i) => i >= 0);
      const charIdx = optionen.findIndex((o) => o.ok && o.text.includes("char"));
      const fehler: { wert: number[]; meldung: string }[] = [];
      if (charIdx >= 0)
        fehler.push({
          wert: richtig.filter((i) => i !== charIdx),
          meldung: "Ein `char` ist intern eine Zahl. Java wandelt ihn beim Index automatisch in `int` um.",
        });
      fehler.push({
        wert: [...richtig, optionen.findIndex((o) => !o.ok)].sort((x, y) => x - y),
        meldung: "`long` und `double` werden nicht automatisch in `int` umgewandelt, weil dabei Information verloren gehen könnte.",
      });
      return {
        angabe: "`a` ist ein `int[]` der Länge 10. Welche Zugriffe kompilieren? Wähle alle aus. (Zusatzfrage zu Blatt 4, sinngemäß: „Von welchem Typ muss ein Index sein?“)",
        teile: [
          {
            typ: "auswahl",
            mehrfach: true,
            optionen: optionen.map((o) => o.text),
            richtig,
            fehler: fehler.filter((f) => f.wert.length > 0),
          },
        ],
        hinweis: "Der Index muss ein `int` sein. `byte`, `short` und `char` werden automatisch umgewandelt, `long` und `double` nicht.",
        loesung:
          `**Ansatz:** Für jeden Index den Typ bestimmen.\n---\n` +
          optionen.map((o) => `${o.text}: ${o.ok ? "kompiliert" : "Fehler"}, weil ${o.warum}.`).join("\n\n"),
      };
    },
  }),

  drill({
    id: "fg-d-absteigend",
    kapitel: K,
    titel: "Eine Schleife absteigend umbauen",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(1, 9);
      const s = r.int(2, 6);
      const m = r.int(3, 7);
      const kg = r.zufall() < 0.5;
      const b = kg ? a + s * m + r.int(1, s - 1) : a + s * m + r.int(0, s - 1);
      const werte = durchlaeufe(a, b, s, kg);
      const letzter = werte[werte.length - 1];
      const code = `for (int i = ___; ___; ___) {\n    System.out.print(i + " ");\n}`;
      return {
        angabe:
          `Die Schleife gibt \`${werte.join(" ")}\` aus:\n\n\`\`\`java\nfor (int i = ${a}; i ${kg ? "<=" : "<"} ${b}; i += ${s}) {\n    System.out.print(i + " ");\n}\n\`\`\`\n\n` +
          `Variationsauftrag: „Jetzt absteigend.“ Fülle die Lücken so, dass \`${[...werte].reverse().join(" ")}\` erscheint.`,
        teile: [
          {
            typ: "lueckentext",
            code,
            luecken: [[String(letzter)], [`i >= ${a}`, `${a} <= i`, `i > ${a - 1}`], [`i -= ${s}`, `i = i - ${s}`]],
            fehler: [
              { wert: [String(b), `i >= ${a}`, `i -= ${s}`], meldung: `Der Startwert ist die größte **ausgegebene** Zahl, ${kg ? "nicht unbedingt die Grenze" : "und die Grenze gehört nicht dazu"}.` },
              { wert: [String(letzter), `i <= ${a}`, `i -= ${s}`], meldung: "Die Bedingung sagt, **solange** die Schleife läuft. Beim Start ist sie mit `<=` sofort falsch." },
            ],
          },
        ],
        hinweis: "Startwert ist die größte Zahl der Ausgabe, die Bedingung prüft die untere Grenze, der Schritt zählt herunter.",
        loesung:
          `**Ansatz:** Startwert, Bedingung und Schritt umdrehen.\n---\n` +
          `Die größte ausgegebene Zahl ist ${letzter}. Neuer Kopf: \`for (int i = ${letzter}; i >= ${a}; i -= ${s})\`.\n---\n` +
          `Grenzfall: Nach ${a} wird \`i\` zu ${a - s}, und \`${a - s} >= ${a}\` ist falsch. Die Schleife endet richtig.`,
      };
    },
  }),

  drill({
    id: "fg-d-scanner",
    kapitel: K,
    titel: "Ungültige Eingaben überspringen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(2, 3);
      const woerter = ["vier", "x", "abc", "zwei", "?"];
      const tokens: string[] = [];
      const gelesen: number[] = [];
      const ignoriert: string[] = [];
      while (gelesen.length < n) {
        // höchstens vier ungültige Token, damit die Aufgabe übersichtlich bleibt
        const art = ignoriert.length >= 4 ? 2 : r.wahl([0, 1, 2, 2]);
        if (art === 0) {
          const w = r.wahl(woerter);
          tokens.push(w);
          ignoriert.push(w);
        } else if (art === 1) {
          const d = `${r.int(1, 9)}.${r.int(1, 9)}`;
          tokens.push(d);
          ignoriert.push(d);
        } else {
          const z = r.int(-9, 20);
          tokens.push(String(z));
          gelesen.push(z);
        }
      }
      const extra = r.int(1, 9);
      tokens.push(String(extra));
      const summe = gelesen.reduce((x, y) => x + y, 0);
      // Alle ignorierten Token stehen vor der n-ten ganzen Zahl, die Ausgaben folgen ihrer Reihenfolge.
      const zeilen = [...ignoriert.map((t) => `ignoriert: ${t}`), String(summe)];
      const loesung = zeilen.join("\n");
      const code = [
        "Scanner sc = new Scanner(System.in);",
        "int summe = 0;",
        "int gelesen = 0;",
        `while (gelesen < ${n}) {`,
        "    if (sc.hasNextInt()) {",
        "        summe += sc.nextInt();",
        "        gelesen++;",
        "    } else {",
        '        System.out.println("ignoriert: " + sc.next());',
        "    }",
        "}",
        "System.out.println(summe);",
      ].join("\n");
      return {
        angabe: `Die Eingabe lautet \`${tokens.join(" ")}\`. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            stdin: tokens.join(" ") + "\n",
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              {
                wert: [...zeilen.slice(0, -1), String(summe + extra)].join("\n"),
                meldung: `Die Schleife endet, sobald ${n} ganze Zahlen gelesen sind. Die letzte Zahl bleibt im Puffer.`,
              },
            ]),
          },
        ],
        hinweis: "Geh die Token einzeln durch. `hasNextInt()` ist nur bei ganzen Zahlen wahr, Kommazahlen und Wörter werden mit `next()` übersprungen.",
        loesung:
          `**Ansatz:** Token für Token prüfen und \`gelesen\` mitzählen.\n---\n` +
          `Gelesen werden ${gelesen.join(", ")}. Übersprungen werden ${ignoriert.length ? ignoriert.map((t) => `\`${t}\``).join(", ") : "keine Token"}.\n---\n` +
          `Die Summe ist ${summe}. Danach endet die Schleife, \`${extra}\` bleibt ungelesen.`,
      };
    },
  }),

  drill({
    id: "fg-d-cast",
    kapitel: K,
    titel: "Cast, Ganzzahldivision und char",
    niveau: 1,
    erzeuge: (r) => {
      const ganz = r.int(2, 9);
      const nach = r.int(5, 9);
      const z = r.int(11, 40);
      const n = r.int(3, 7);
      const k = r.int(1, 10);
      const loesung = `${ganz}\n${Math.trunc(z / n)}\n${String.fromCharCode(97 + k)}`;
      const code = [
        `System.out.println((int) ${ganz}.${nach});`,
        `System.out.println(${z} / ${n});`,
        `System.out.println((char) ('a' + ${k}));`,
      ].join("\n");
      return {
        angabe: "Was gibt der Code aus? (Zusatzfrage zu den ersten Blättern, sinngemäß: „Wann braucht man einen Cast?“)",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              { wert: `${ganz + 1}\n${Math.trunc(z / n)}\n${String.fromCharCode(97 + k)}`, meldung: "Der Cast `(int)` rundet nicht, er schneidet den Nachkommaanteil ab." },
              { wert: `${ganz}\n${Math.round(z / n)}\n${String.fromCharCode(97 + k)}`, meldung: "Bei `int` geteilt durch `int` fällt der Rest weg. Es wird nicht gerundet." },
              { wert: `${ganz}\n${Math.trunc(z / n)}\n${97 + k}`, meldung: "Ohne Cast wäre `'a' + k` eine Zahl. Der Cast `(char)` macht daraus wieder ein Zeichen." },
            ]),
          },
        ],
        hinweis: "`(int)` schneidet ab, `int / int` lässt den Rest weg, `'a' + k` ist ein Zeichencode.",
        loesung: `\`(int) ${ganz}.${nach}\` ist ${ganz}. \`${z} / ${n}\` ist ${Math.trunc(z / n)} mit Rest ${z % n}, der wegfällt.\n---\n\`'a'\` hat den Code 97. \`97 + ${k}\` ist ${97 + k}, als Zeichen \`${String.fromCharCode(97 + k)}\`.`,
      };
    },
  }),

  drill({
    id: "fg-d-strings-gleich",
    kapitel: K,
    titel: "Strings mit == und equals",
    niveau: 1,
    erzeuge: (r) => {
      const wort = r.wahl(["Tutor", "Blatt", "Java", "Array", "Puffer"]);
      const gleich = r.zufall() < 0.5;
      const zweite = gleich ? "s1" : `new String("${wort}")`;
      const loesung = gleich ? "true\ntrue" : "false\ntrue";
      return {
        angabe: "Was gibt der Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `String s1 = new String("${wort}");\nString s2 = ${zweite};\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));`,
            loesung: loesung + "\n",
            fehler: nurFalsche(loesung, [
              gleich
                ? { wert: "false\ntrue", meldung: "`s2 = s1` kopiert den Verweis. Beide zeigen auf dasselbe Objekt, also ist `==` wahr." }
                : { wert: "true\ntrue", meldung: "`new String(…)` erzeugt jedes Mal ein neues Objekt. `==` vergleicht Verweise und liefert `false`." },
            ]),
          },
        ],
        hinweis: "`==` prüft, ob es dasselbe Objekt ist. `equals` prüft den Inhalt.",
        loesung: gleich
          ? "`s2 = s1` kopiert den Verweis, also zeigen beide auf dasselbe Objekt: `true`.\n---\nDer Inhalt ist ohnehin gleich, `equals` liefert `true`."
          : "Zweimal `new String` ergibt zwei verschiedene Objekte: `==` liefert `false`.\n---\nDer Inhalt ist gleich, `equals` liefert `true`.",
      };
    },
  }),
];
