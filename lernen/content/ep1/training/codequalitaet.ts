import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 9 (Code lesen, Codequalität, Debugging). Die Referenzrechnungen bilden
 * Java-Semantik nach (Ganzzahldivision, Zeichenpositionen ab 0, Exceptions bei ungültigem Index oder
 * Teiler 0). Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "codequalitaet";

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const gesehen = new Set<string>();
  const rest = fehler.filter((f) => {
    const n = norm(f.wert);
    if (n === norm(loesung) || gesehen.has(n)) return false;
    gesehen.add(n);
    return true;
  });
  return rest.length ? rest : undefined;
}

/** Optionen mischen; liefert Texte, Index der richtigen Option und Fehlermeldungen für die falschen. */
function auswahl(r: Rng, richtig: string, falsch: { opt: string; meldung: string }[]) {
  const alle = [{ opt: richtig, meldung: "" }, ...falsch];
  const reihenfolge = r.mische(alle.map((_, i) => i));
  return {
    optionen: reihenfolge.map((i) => alle[i].opt),
    richtig: [reihenfolge.indexOf(0)],
    fehler: reihenfolge.map((i, idx) => ({ i, idx })).filter(({ i }) => i !== 0).map(({ i, idx }) => ({ wert: idx, meldung: alle[i].meldung })),
  };
}

const WOERTER = ["Banane", "Kaffee", "Programm", "Ananas", "Tabelle", "Methode", "Rentner", "Seerose", "Klasse", "Schleife"] as const;

/** Position des ersten bzw. letzten Vorkommens, Anzahl */
const erstes = (s: string, c: string) => s.indexOf(c);
const letztes = (s: string, c: string) => s.lastIndexOf(c);
const anzahl = (s: string, c: string) => [...s].filter((x) => x === c).length;

/** Zeichen, die im Wort vorkommen, plus eines, das nicht vorkommt */
function zeichenFuer(r: Rng, w: string): string {
  const vorhanden = [...new Set([...w.toLowerCase()].filter((c) => /[a-z]/.test(c)))];
  return r.wahl(vorhanden);
}

// ---------------------------------------------------------------- unleserliche Methoden (Zweck)

interface Raetsel {
  name: string;
  rumpf: string;
  zweck: string;
  typ: "int" | "boolean";
  rechne: (s: string, c: string) => number | boolean;
}

const RAETSEL: Raetsel[] = [
  {
    name: "zaehlen",
    typ: "int",
    rumpf: "int a = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) == c) {\n            a++;\n        }\n    }\n    return a;",
    zweck: "`f` liefert, wie oft `c` in `s` vorkommt.",
    rechne: anzahl,
  },
  {
    name: "letztes",
    typ: "int",
    rumpf: "int a = -1;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) == c) {\n            a = i;\n        }\n    }\n    return a;",
    zweck: "`f` liefert die Position des **letzten** Vorkommens von `c` in `s`, oder -1.",
    rechne: letztes,
  },
  {
    name: "erstes",
    typ: "int",
    rumpf: "int i = 0;\n    while (i < s.length() && s.charAt(i) != c) {\n        i++;\n    }\n    if (i == s.length()) {\n        return -1;\n    }\n    return i;",
    zweck: "`f` liefert die Position des **ersten** Vorkommens von `c` in `s`, oder -1.",
    rechne: erstes,
  },
  {
    name: "andere",
    typ: "int",
    rumpf: "int a = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) != c) {\n            a++;\n        }\n    }\n    return a;",
    zweck: "`f` liefert, wie viele Zeichen von `s` **nicht** gleich `c` sind.",
    rechne: (s, c) => s.length - anzahl(s, c),
  },
];

// ---------------------------------------------------------------- Exceptions

interface Fall {
  code: string;
  art: string;
  erklaerung: string;
}

function exceptionFall(r: Rng): Fall {
  const w = r.wahl(WOERTER);
  const L = w.length;
  const art = r.int(0, 5);
  if (art === 0) {
    const k = r.wahl([L, L - 1, L + 1, 0]);
    const ok = k < L;
    return {
      code: `String s = "${w}";\nSystem.out.println(s.charAt(${k}));`,
      art: ok ? "keine Exception" : "`StringIndexOutOfBoundsException`",
      erklaerung: ok
        ? `\`"${w}"\` hat die Länge ${L}, gültig sind die Positionen 0 bis ${L - 1}. Position ${k} ist gültig, ausgegeben wird \`${w[k]}\`.`
        : `\`"${w}"\` hat die Länge ${L}, gültig sind die Positionen 0 bis ${L - 1}. Position ${k} gibt es nicht.`,
    };
  }
  if (art === 1) {
    const a = r.int(0, 3);
    const b = r.wahl([L, L + 1, L - 1]);
    const ok = b <= L;
    return {
      code: `String s = "${w}";\nSystem.out.println(s.substring(${a}, ${b}));`,
      art: ok ? "keine Exception" : "`StringIndexOutOfBoundsException`",
      erklaerung: ok
        ? `Bei \`substring(${a}, ${b})\` muss \`0 <= ${a} <= ${b} <= ${L}\` gelten. Das ist erfüllt, ausgegeben wird \`${w.substring(a, b)}\`.`
        : `Das Ende ${b} ist größer als die Länge ${L}. Bei \`substring\` darf das Ende höchstens die Länge sein.`,
    };
  }
  if (art === 2) {
    const x = r.int(2, 6);
    const y = r.wahl([x, x - 1, x + 1]);
    const ok = x !== y;
    return {
      code: `int x = ${x}, y = ${y};\nSystem.out.println(12 / (x - y));`,
      art: ok ? "keine Exception" : "`ArithmeticException`",
      erklaerung: ok
        ? `\`x - y\` ist ${x - y}. Durch ${x - y} darf man teilen, ausgegeben wird \`${Math.trunc(12 / (x - y))}\`.`
        : `\`x - y\` ist 0. Eine Ganzzahldivision durch 0 wirft \`ArithmeticException: / by zero\`.`,
    };
  }
  if (art === 3) {
    const t = r.wahl(["42", "-7", "12a", "3.5", "007"]);
    const ok = /^-?\d+$/.test(t);
    return {
      code: `String t = "${t}";\nSystem.out.println(Integer.parseInt(t) + 1);`,
      art: ok ? "keine Exception" : "`NumberFormatException`",
      erklaerung: ok
        ? `\`"${t}"\` stellt eine ganze Zahl dar. \`Integer.parseInt\` liefert ${parseInt(t, 10)}, ausgegeben wird \`${parseInt(t, 10) + 1}\`.`
        : `\`"${t}"\` ist keine ganze Zahl. \`Integer.parseInt\` wirft \`NumberFormatException: For input string: "${t}"\`.`,
    };
  }
  if (art === 4) {
    const z = r.wahl([0, 0, 2]);
    const ok = z !== 0;
    return {
      code: `double d = 5.0;\nint z = ${z};\nSystem.out.println(d / z);`,
      art: "keine Exception",
      erklaerung: ok
        ? `\`5.0 / ${z}\` ist eine Division mit \`double\` und liefert \`${5 / z}\`.`
        : "`5.0 / 0` ist eine Division mit `double`. Sie wirft keine Exception, sondern liefert `Infinity`.",
    };
  }
  const leer = r.zufall() < 0.5;
  return {
    code: leer ? `String s = "";\nSystem.out.println(s.length());` : `String s = null;\nSystem.out.println(s.length());`,
    art: leer ? "keine Exception" : "`NullPointerException`",
    erklaerung: leer
      ? "Der leere String ist ein echter String mit Länge 0. Ausgegeben wird `0`."
      : "`s` ist `null`, also gar kein String. Ein Methodenaufruf darauf wirft eine `NullPointerException`.",
  };
}

const ARTEN = ["keine Exception", "`StringIndexOutOfBoundsException`", "`ArithmeticException`", "`NumberFormatException`", "`NullPointerException`"];

// ---------------------------------------------------------------- Drills

export const DRILLS: Drill[] = [
  drill({
    id: "cq-d-trace-while",
    kapitel: K,
    titel: "Trace-Tabelle einer while-Schleife",
    niveau: 1,
    erzeuge: (r) => {
      const a0 = r.int(1, 5);
      const b0 = r.int(0, 3);
      const schritt = r.int(2, 5);
      const durchlaeufe = r.int(2, 4);
      // Grenze so, dass genau `durchlaeufe` Durchläufe stattfinden
      const grenze = a0 + (durchlaeufe - 1) * schritt + r.int(1, schritt);
      const zeilen: (number)[][] = [[a0, b0]];
      let a = a0;
      let b = b0;
      while (a < grenze) {
        b = b + a;
        a = a + schritt;
        zeilen.push([a, b]);
      }
      const beschriftung = ["vor der Schleife", ...zeilen.slice(1).map((_, i) => `nach Durchlauf ${i + 1}`)];
      // Fehlvorstellung: zuerst a erhöhen, dann b mit dem neuen a erhöhen (gleiche Anzahl Durchläufe)
      const falsch: number[] = [a0, b0];
      for (let fa = a0, fb = b0; fa < grenze; ) {
        fa = fa + schritt;
        fb = fb + fa;
        falsch.push(fa, fb);
      }
      return {
        angabe: `Fülle die Trace-Tabelle aus. Jede Zeile zeigt die Werte **nach** einem Durchlauf.

\`\`\`java
int a = ${a0}, b = ${b0};
while (a < ${grenze}) {
    b = b + a;
    a = a + ${schritt};
}
\`\`\``,
        teile: [
          {
            typ: "trace",
            spalten: ["a", "b"],
            zeilen: beschriftung,
            vorgabe: 1,
            loesung: zeilen,
            fehler: [{ wert: falsch, meldung: "In jedem Durchlauf wird `b` zuerst mit dem **alten** Wert von `a` erhöht. Erst danach wächst `a`." }],
          },
        ],
        hinweis: `Prüfe vor jedem Durchlauf \`a < ${grenze}\`. Rechne dann zuerst \`b\`, danach \`a\`.`,
        loesung: `**Ansatz:** Vor jedem Durchlauf die Bedingung prüfen, dann die beiden Anweisungen in ihrer Reihenfolge ausführen.\n---\n${zeilen
          .slice(1)
          .map((z, i) => `Durchlauf ${i + 1}: \`b = ${zeilen[i][1]} + ${zeilen[i][0]} = ${z[1]}\`, dann \`a = ${z[0]}\`.`)
          .join(" ")}\n---\nJetzt ist \`${a} < ${grenze}\` falsch. Die Schleife ist ${durchlaeufe}-mal gelaufen.`,
      };
    },
  }),

  drill({
    id: "cq-d-raetsel-ausgabe",
    kapitel: K,
    titel: "Unleserliche Methode: Ausgabe bestimmen",
    niveau: 1,
    erzeuge: (r) => {
      const ra = r.wahl(RAETSEL);
      const w1 = r.wahl(WOERTER);
      const w2 = r.wahl(WOERTER.filter((x) => x !== w1));
      const c1 = zeichenFuer(r, w1);
      const c2 = r.zufall() < 0.5 ? zeichenFuer(r, w2) : r.wahl(["x", "q", "z"].filter((c) => !w2.toLowerCase().includes(c)));
      const e1 = ra.rechne(w1, c1);
      const e2 = ra.rechne(w2, c2);
      const loes = `${e1}\n${e2}\n`;
      const code = `public class Raetsel {
    public static ${ra.typ} f(String s, char c) {
        ${ra.rumpf.replace(/\n {4}/g, "\n        ")}
    }

    public static void main(String[] args) {
        System.out.println(f("${w1}", '${c1}'));
        System.out.println(f("${w2}", '${c2}'));
    }
}
`;
      const fehler = nurFalsche(loes, [
        { wert: `${erstes(w1, c1)}\n${erstes(w2, c2)}`, meldung: "Spiele die Schleife bis zum Ende durch. Wird ein späterer Fund noch berücksichtigt?" },
        { wert: `${letztes(w1, c1)}\n${letztes(w2, c2)}`, meldung: "Prüfe, ob die Methode beim ersten Fund aufhört oder weiterläuft." },
        { wert: `${anzahl(w1, c1)}\n${anzahl(w2, c2)}`, meldung: "Welche Rolle hat die Variable, die zurückgegeben wird? Zähler oder Position?" },
      ]);
      return {
        angabe: "Die Namen verraten nichts. Was gibt das Programm aus? Beschreibe danach für dich in einem Satz, was `f` tut.",
        teile: [{ typ: "ausgabe", code, loesung: loes, fehler }],
        hinweis: "Bestimme zuerst die Rolle der Variablen: Zähler, Position oder Laufvariable? Positionen beginnen bei 0.",
        loesung: `**Ansatz:** Rolle der Variablen bestimmen und beide Aufrufe durchspielen.\n---\n\`f("${w1}", '${c1}')\` liefert ${e1}, \`f("${w2}", '${c2}')\` liefert ${e2}.\n---\nZweck: ${ra.zweck}`,
      };
    },
  }),

  drill({
    id: "cq-d-raetsel-zweck",
    kapitel: K,
    titel: "Unleserliche Methode: Zweck wählen",
    niveau: 2,
    erzeuge: (r) => {
      const [ra, ...andere] = r.mische(RAETSEL);
      const falsch = andere.slice(0, 2);
      const a = auswahl(
        r,
        ra.zweck,
        falsch.map((x) => ({ opt: x.zweck, meldung: `Spiele \`f("Seerose", 'e')\` durch. Diese Beschreibung würde ${x.rechne("Seerose", "e")} liefern, der Code liefert ${ra.rechne("Seerose", "e")}.` })),
      );
      return {
        angabe: `Welcher Satz beschreibt den Zweck dieser Methode?

\`\`\`java
public static ${ra.typ} f(String s, char c) {
    ${ra.rumpf}
}
\`\`\``,
        teile: [{ typ: "auswahl", ...a }],
        hinweis: "Spiele ein Beispiel durch, in dem `c` mehrmals vorkommt, etwa `f(\"Seerose\", 'e')`.",
        loesung: `**Ansatz:** Mit einem Beispiel, in dem \`c\` mehrmals vorkommt, die Beschreibungen unterscheiden.\n---\n\`f("Seerose", 'e')\` liefert ${ra.rechne("Seerose", "e")}. Die Beschreibungen würden 3 (Anzahl), 1 (erste Position), 6 (letzte Position) und 4 (andere Zeichen) liefern.\n---\n${ra.zweck}`,
      };
    },
  }),

  drill({
    id: "cq-d-kontrollausgabe",
    kapitel: K,
    titel: "Ausgabe mit Kontrollausgaben",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const b = r.int(2, 4);
      const zeilen = [`DEBUG start a=${a} b=${b}`];
      let p = 0;
      for (let i = 0; i < b; i++) {
        p += a;
        zeilen.push(`DEBUG i=${i} p=${p}`);
      }
      zeilen.push(String(p));
      const loes = zeilen.join("\n") + "\n";
      const ohneDebug = String(p);
      const vorher = [zeilen[0], ...zeilen.slice(1, -1).map((_, i) => `DEBUG i=${i} p=${i * a}`), String(p)].join("\n");
      return {
        angabe: "In diese Methode wurden Kontrollausgaben eingebaut. Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `public class Kontrolle {
    public static int produkt(int a, int b) {
        System.out.println("DEBUG start a=" + a + " b=" + b);
        int p = 0;
        for (int i = 0; i < b; i++) {
            p = p + a;
            System.out.println("DEBUG i=" + i + " p=" + p);
        }
        return p;
    }

    public static void main(String[] args) {
        System.out.println(produkt(${a}, ${b}));
    }
}
`,
            loesung: loes,
            fehler: nurFalsche(loes, [
              { wert: ohneDebug, meldung: "Kontrollausgaben sind ganz normale Ausgaben. Sie erscheinen, solange sie im Code stehen." },
              { wert: vorher, meldung: "Die Kontrollausgabe steht **nach** `p = p + a`. Sie zeigt schon den erhöhten Wert." },
            ]),
          },
        ],
        hinweis: "In jedem Durchlauf wird zuerst addiert und dann ausgegeben. Der Rückgabewert erscheint ganz am Ende.",
        loesung: `**Ansatz:** Alle Ausgaben in der Reihenfolge ihrer Ausführung aufschreiben.\n---\nZuerst \`DEBUG start a=${a} b=${b}\`, dann ${b} Durchläufe mit \`p\` = ${zeilen
          .slice(1, -1)
          .map((z) => z.split("p=")[1])
          .join(", ")}.\n---\nZum Schluss gibt \`main\` den Rückgabewert ${p} aus.`,
      };
    },
  }),

  drill({
    id: "cq-d-offbyone",
    kapitel: K,
    titel: "Fehlerhafte Schleife: Was kommt wirklich heraus?",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 7);
      const fall = r.int(0, 2);
      let code: string;
      let ist: number;
      let soll: number;
      let ziel: string;
      let ursache: string;
      if (fall === 0) {
        ziel = `die Summe 1 + 2 + … + ${n}`;
        code = `int summe = 0;\nfor (int i = 1; i < ${n}; i++) {\n    summe = summe + i;\n}\nSystem.out.println(summe);`;
        ist = ((n - 1) * n) / 2;
        soll = (n * (n + 1)) / 2;
        ursache = `Die Bedingung \`i < ${n}\` lässt den letzten Summanden ${n} weg. Richtig wäre \`i <= ${n}\`.`;
      } else if (fall === 1) {
        ziel = `das Produkt 1 · 2 · … · ${n}`;
        code = `int p = 1;\nfor (int i = 2; i < ${n}; i++) {\n    p = p * i;\n}\nSystem.out.println(p);`;
        ist = 1;
        for (let i = 2; i < n; i++) ist *= i;
        soll = ist * n;
        ursache = `Die Bedingung \`i < ${n}\` lässt den Faktor ${n} weg. Richtig wäre \`i <= ${n}\`.`;
      } else {
        ziel = `die Summe der Zahlen von 0 bis ${n}`;
        code = `int summe = 0;\nint i = 0;\nwhile (i < ${n}) {\n    i++;\n    summe = summe + i;\n}\nSystem.out.println(summe);`;
        ist = (n * (n + 1)) / 2;
        soll = ist;
        ursache = `Hier stimmt das Ergebnis: \`i\` wird **vor** dem Addieren erhöht. Dadurch kommen 1 bis ${n} dazu, und die 0 ändert nichts.`;
      }
      const loes = `${ist}\n`;
      return {
        angabe: `Der Code soll ${ziel} ausgeben. Was gibt er tatsächlich aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes,
            fehler: nurFalsche(loes, [{ wert: String(soll), meldung: "Das wäre das gewünschte Ergebnis. Gefragt ist, was der Code wirklich ausgibt. Prüfe die Schleifenbedingung genau." }]),
          },
        ],
        hinweis: "Schreib die Werte der Schleifenvariable auf, für die die Bedingung wahr ist. Prüfe die Grenze genau.",
        loesung: `**Ansatz:** Die Schleife mit einer Trace-Tabelle verfolgen, statt der Absicht zu glauben.\n---\nTatsächliche Ausgabe: ${ist}. Gewünscht: ${soll}.\n---\n${ursache}`,
      };
    },
  }),

  drill({
    id: "cq-d-exception-art",
    kapitel: K,
    titel: "Welche Exception tritt auf?",
    niveau: 1,
    erzeuge: (r) => {
      const f = exceptionFall(r);
      const rest = r.mische(ARTEN.filter((x) => x !== f.art)).slice(0, 2);
      const a = auswahl(
        r,
        f.art,
        rest.map((x) => ({ opt: x, meldung: x === "keine Exception" ? "Prüfe jeden Index, jede Grenze und jeden Teiler genau. Einer davon ist ungültig." : `Eine ${x} passt nicht zu dieser Anweisung. Welcher Wert ist hier wirklich das Problem?` })),
      );
      return {
        angabe: `Was passiert, wenn diese Anweisungen ausgeführt werden?

\`\`\`java
${f.code}
\`\`\``,
        teile: [{ typ: "auswahl", ...a }],
        hinweis: "Bestimme die Länge des Strings, den Teiler oder den Inhalt des Strings, bevor du entscheidest.",
        loesung: `**Ansatz:** Für jeden Zugriff und jede Division prüfen, ob der Wert gültig ist.\n---\n${f.erklaerung}\n---\nErgebnis: ${f.art}.`,
      };
    },
  }),

  drill({
    id: "cq-d-index-meldung",
    kapitel: K,
    titel: "Den Index in der Meldung vorhersagen",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.wahl(WOERTER);
      const L = w.length;
      const fall = r.int(0, 2);
      let code: string;
      let index: number;
      let erkl: string;
      if (fall === 0) {
        code = `String s = "${w}";\nfor (int i = 0; i <= s.length(); i++) {\n    System.out.print(s.charAt(i));\n}`;
        index = L;
        erkl = `Die Bedingung \`i <= s.length()\` lässt \`i = ${L}\` zu. Gültig sind nur 0 bis ${L - 1}.`;
      } else if (fall === 1) {
        code = `String s = "${w}";\nfor (int i = 0; i < s.length(); i++) {\n    if (s.charAt(i) == s.charAt(i + 1)) {\n        System.out.print(i);\n    }\n}`;
        index = L;
        erkl = `Beim letzten Durchlauf ist \`i = ${L - 1}\`. Dann greift \`charAt(i + 1)\` auf Position ${L} zu.`;
      } else {
        code = `String s = "${w}";\nfor (int i = s.length(); i >= 0; i--) {\n    System.out.print(s.charAt(i));\n}`;
        index = L;
        erkl = `Die Schleife beginnt bei \`i = s.length() = ${L}\`. Das letzte Zeichen steht aber an Position ${L - 1}.`;
      }
      return {
        angabe: `Dieser Code bricht mit \`StringIndexOutOfBoundsException: Index ? out of bounds for length ${L}\` ab. Welche Zahl steht statt \`?\` in der Meldung?

\`\`\`java
${code}
\`\`\``,
        teile: [
          {
            typ: "zahl",
            label: "Index in der Meldung",
            loesung: String(index),
            fehler: [
              { wert: String(L - 1), meldung: `Position ${L - 1} ist die letzte **gültige** Position. Die Meldung nennt den ersten ungültigen Index.` },
              { wert: String(L + 1), meldung: "Das Programm bricht beim **ersten** ungültigen Zugriff ab, nicht später." },
            ],
          },
        ],
        hinweis: `\`"${w}"\` hat die Länge ${L}. Welche Positionen sind gültig, und welchen Wert erreicht der Index zuerst außerhalb davon?`,
        loesung: `**Ansatz:** Die gültigen Positionen bestimmen: 0 bis ${L - 1}.\n---\n${erkl}\n---\nDie Meldung lautet \`Index ${index} out of bounds for length ${L}\`.`,
      };
    },
  }),

  drill({
    id: "cq-d-stacktrace-zeile",
    kapitel: K,
    titel: "Aus welcher Zeile kommt der abbrechende Aufruf?",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(2, 6);
      const extra = r.int(0, 2);
      const v1 = r.wahl([k + 1, k + 2, k + 3]);
      const crashZuerst = r.zufall() < 0.4;
      const werte = crashZuerst ? [k, v1] : [v1, k];
      const zeilen: string[] = [];
      zeilen.push("public class Kette {");
      zeilen.push("    public static int teile(int a, int b) {");
      for (let i = 0; i < extra; i++) zeilen.push(`        System.out.println("teile " + a + " " + b);`);
      zeilen.push("        return a / b;");
      const zDivision = zeilen.length;
      zeilen.push("    }");
      zeilen.push("");
      zeilen.push("    public static int rechne(int x) {");
      zeilen.push(`        int r = teile(x * 10, x - ${k});`);
      const zRechne = zeilen.length;
      zeilen.push("        return r + 1;");
      zeilen.push("    }");
      zeilen.push("");
      zeilen.push("    public static void main(String[] args) {");
      zeilen.push(`        System.out.println(rechne(${werte[0]}));`);
      const zMain1 = zeilen.length;
      zeilen.push(`        System.out.println(rechne(${werte[1]}));`);
      const zMain2 = zeilen.length;
      zeilen.push("    }");
      zeilen.push("}");
      const zMain = crashZuerst ? zMain1 : zMain2;
      const andereMain = crashZuerst ? zMain2 : zMain1;
      return {
        angabe: `Das Programm bricht mit \`ArithmeticException: / by zero\` ab. Der Stacktrace hat drei \`at\`-Zeilen: für \`teile\`, \`rechne\` und \`main\`.`,
        teile: [
          {
            typ: "zeilen",
            label: "Markiere die Zeile, die in der `at`-Zeile von `main` steht.",
            code: zeilen.join("\n"),
            loesung: [zMain],
            fehler: [
              { wert: [andereMain], meldung: `Welcher Aufruf übergibt \`x = ${k}\`? Nur dann ist \`x - ${k}\` gleich 0.` },
              { wert: [zDivision], meldung: "Das ist die Zeile in `teile`, ganz oben im Stacktrace. Gefragt ist die Zeile in `main`." },
              { wert: [zRechne], meldung: "Das ist die Zeile in `rechne`. Gefragt ist die Zeile in `main`, ganz unten im Stacktrace." },
            ],
          },
        ],
        hinweis: `Durch 0 wird geteilt, wenn \`x - ${k}\` gleich 0 ist. Welcher Aufruf in \`main\` übergibt diesen Wert?`,
        loesung: `**Ansatz:** Der Stacktrace nennt von oben nach unten \`teile\` (Zeile ${zDivision}), \`rechne\` (Zeile ${zRechne}) und \`main\`.\n---\nDurch 0 geteilt wird bei \`x = ${k}\`. Das ist der Aufruf \`rechne(${k})\` in Zeile ${zMain}.\n---\n${crashZuerst ? `Weil dieser Aufruf zuerst kommt, erscheint vorher keine Ausgabe von \`main\`.` : `Der erste Aufruf \`rechne(${v1})\` läuft noch normal durch und gibt ${Math.trunc((v1 * 10) / (v1 - k)) + 1} aus.`}`,
      };
    },
  }),

  drill({
    id: "cq-d-demorgan",
    kapitel: K,
    titel: "Eine Verneinung nach De Morgan auflösen",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(1, 9);
      const b = r.int(1, 9);
      const ops: [string, string][] = [
        [">", "<="],
        [">=", "<"],
        ["<", ">="],
        ["<=", ">"],
      ];
      const [o1, n1] = r.wahl(ops);
      const [o2, n2] = r.wahl(ops);
      const undOder = r.zufall() < 0.6;
      const op = undOder ? "&&" : "||";
      const neu = undOder ? "||" : "&&";
      const richtig = `\`x ${n1} ${a} ${neu} y ${n2} ${b}\``;
      const a1 = auswahl(r, richtig, [
        { opt: `\`x ${n1} ${a} ${op} y ${n2} ${b}\``, meldung: `Beim Verneinen wird aus \`${op}\` ein \`${neu}\`. Nur die Vergleiche umzudrehen reicht nicht.` },
        { opt: `\`x ${o1} ${a} ${neu} y ${o2} ${b}\``, meldung: "Die einzelnen Vergleiche müssen ebenfalls verneint werden." },
      ]);
      return {
        angabe: `Welche Bedingung verhält sich für alle \`int\`-Werte genau wie \`!(x ${o1} ${a} ${op} y ${o2} ${b})\`?`,
        teile: [{ typ: "auswahl", ...a1 }],
        hinweis: `Nach De Morgan wird jeder Teil verneint und \`${op}\` durch \`${neu}\` ersetzt. Die Verneinung von \`${o1}\` ist \`${n1}\`.`,
        loesung: `**Ansatz:** De Morgan: \`!(A ${op} B)\` ist dasselbe wie \`!A ${neu} !B\`.\n---\n\`!(x ${o1} ${a})\` ist \`x ${n1} ${a}\`, \`!(y ${o2} ${b})\` ist \`y ${n2} ${b}\`.\n---\nErgebnis: ${richtig}.`,
      };
    },
  }),

  drill({
    id: "cq-d-muster-breite",
    kapitel: K,
    titel: "Parametrisiertes Muster ausgeben",
    niveau: 1,
    erzeuge: (r) => {
      const breite = r.wahl([2, 4, 6, 8, 10]);
      const [p1, p2] = r.wahl([
        ["#-", "-#"],
        ["o.", ".o"],
        ["<>", "><"],
        ["+=", "=+"],
      ]);
      const voll = r.wahl(["#", "*", "="]);
      const reihe = (p: string) => p.repeat(breite / 2);
      const zeilen = [voll.repeat(breite), reihe(p1), voll.repeat(breite), reihe(p2), voll.repeat(breite)];
      const loes = zeilen.join("\n") + "\n";
      const falsch = [voll.repeat(breite), p1.repeat(breite), voll.repeat(breite), p2.repeat(breite), voll.repeat(breite)].join("\n");
      return {
        angabe: `Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `public class Muster {
    public static void druckeVolleZeile(int breite) {
        for (int i = 0; i < breite; i++) {
            System.out.print("${voll}");
        }
        System.out.println();
    }

    public static void druckeReihe(int breite, String paar) {
        for (int i = 0; i < breite / 2; i++) {
            System.out.print(paar);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int b = ${breite};
        druckeVolleZeile(b);
        druckeReihe(b, "${p1}");
        druckeVolleZeile(b);
        druckeReihe(b, "${p2}");
        druckeVolleZeile(b);
    }
}
`,
            loesung: loes,
            fehler: nurFalsche(loes, [{ wert: falsch, meldung: "`druckeReihe` läuft nur `breite / 2` Mal, denn jedes Paar besteht aus zwei Zeichen." }]),
          },
        ],
        hinweis: "Jede Zeile ist genau `breite` Zeichen lang. Eine Reihe besteht aus `breite / 2` Paaren.",
        loesung: `**Ansatz:** Jeden Aufruf in \`main\` einzeln auswerten.\n---\nVolle Zeilen: ${breite}-mal \`${voll}\`. Reihen: ${breite / 2}-mal \`${p1}\` und \`${p2}\`.\n---\nAusgabe: ${zeilen.map((z) => `\`${z}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "cq-d-refactor-vergleich",
    kapitel: K,
    titel: "Vorher und nachher vergleichen",
    niveau: 3,
    erzeuge: (r) => {
      const unten = r.int(3, 8);
      const oben = unten + r.int(4, 8);
      const werte = r.mische([r.int(0, unten), r.int(unten + 1, oben), r.int(oben + 1, oben + 10)]);
      const alt = (x: number) => (x > oben ? "gross" : x > unten ? "mittel" : "klein");
      const neu = (x: number) => (x > unten ? "mittel" : x > oben ? "gross" : "klein");
      const zeilen = werte.map((x) => `${alt(x)} ${neu(x)}`);
      const loes = zeilen.join("\n") + "\n";
      const falsch = werte.map((x) => `${alt(x)} ${alt(x)}`).join("\n");
      return {
        angabe: "Jemand hat `alt` zu `neu` umgebaut und dabei die Bedingungen vertauscht. Was gibt das Testprogramm aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `public class Vergleich {
    public static String alt(int a) {
        if (a > ${oben}) {
            return "gross";
        } else if (a > ${unten}) {
            return "mittel";
        }
        return "klein";
    }

    public static String neu(int a) {
        if (a > ${unten}) {
            return "mittel";
        } else if (a > ${oben}) {
            return "gross";
        }
        return "klein";
    }

    public static void main(String[] args) {
${werte.map((x) => `        System.out.println(alt(${x}) + " " + neu(${x}));`).join("\n")}
    }
}
`,
            loesung: loes,
            fehler: nurFalsche(loes, [{ wert: falsch, meldung: `In \`neu\` wird zuerst \`a > ${unten}\` geprüft. Für große Werte ist das schon wahr, also kommt \`mittel\`, und der Zweig mit \`gross\` wird nie erreicht.` }]),
          },
        ],
        hinweis: "Bei `if – else if` gewinnt die erste wahre Bedingung. Werte beide Methoden für jeden Testwert getrennt aus.",
        loesung: `**Ansatz:** Für jeden Testwert beide Methoden Bedingung für Bedingung auswerten.\n---\n${werte
          .map((x) => `${x}: \`alt\` liefert \`${alt(x)}\`, \`neu\` liefert \`${neu(x)}\`.`)
          .join(" ")}\n---\nNur Werte über ${oben} zeigen den Unterschied. Das Vertauschen hat das Verhalten geändert, es war kein Refactoring.`,
      };
    },
  }),

  drill({
    id: "cq-d-ki-gegenbeispiel",
    kapitel: K,
    titel: "Ein Gegenbeispiel für KI-Code finden",
    niveau: 3,
    erzeuge: (r) => {
      const a = r.int(2, 20);
      const b = a + r.int(5, 15);
      const fehlerUnten = r.zufall() < 0.5;
      const bedingung = fehlerUnten ? `n > ${a} && n <= ${b}` : `n >= ${a} && n < ${b}`;
      const gegen = fehlerUnten ? a : b;
      const mitte = r.int(a + 1, b - 1);
      const draussen = fehlerUnten ? b + r.int(1, 5) : a - r.int(1, 2);
      const opt = auswahl(r, `\`n = ${gegen}\``, [
        { opt: `\`n = ${mitte}\``, meldung: `${mitte} liegt mitten im Bereich. Spezifikation und KI-Code liefern beide \`true\`.` },
        { opt: `\`n = ${draussen}\``, meldung: `${draussen} liegt außerhalb. Spezifikation und KI-Code liefern beide \`false\`.` },
      ]);
      return {
        angabe: `Spezifikation: \`imBereich(n)\` liefert \`true\`, wenn ${a} ≤ n ≤ ${b} gilt, beide Grenzen eingeschlossen. Ein KI-Werkzeug liefert:

\`\`\`java
public static boolean imBereich(int n) {
    return ${bedingung};
}
\`\`\`

Welche Eingabe ist ein Gegenbeispiel?`,
        teile: [{ typ: "auswahl", ...opt }],
        hinweis: "Fehler stecken an den Grenzen. Teste beide Grenzen der Spezifikation.",
        loesung: `**Ansatz:** Die Grenzen ${a} und ${b} prüfen, denn dort unterscheiden sich \`<\` und \`<=\`.\n---\nFür \`n = ${gegen}\` verlangt die Spezifikation \`true\`. Der KI-Code liefert \`false\`, weil ${fehlerUnten ? `\`${a} > ${a}\`` : `\`${b} < ${b}\``} falsch ist.\n---\nGegenbeispiel: \`n = ${gegen}\`. Korrektur: \`n >= ${a} && n <= ${b}\`.`,
      };
    },
  }),
];
