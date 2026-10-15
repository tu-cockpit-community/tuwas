import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 6 (Methoden). Jede Referenzrechnung hier bildet Java-Semantik nach
 * (Ganzzahldivision zur Null hin, Rest mit dem Vorzeichen des Dividenden, char als Zahl, Überladungs-
 * auflösung mit Erweiterung). Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "methoden";

/** Java-Ganzzahldivision (rundet zur Null hin) */
const idiv = (a: number, b: number) => Math.trunc(a / b);

/** Java-Darstellung eines double-Werts: ganze Zahlen mit ".0" */
const jdouble = (x: number) => (Number.isInteger(x) ? `${x}.0` : String(x));

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const rest = fehler.filter((f) => norm(f.wert) !== norm(loesung));
  return rest.length ? rest : undefined;
}

const WOERTER = ["Uni", "Java", "Mond", "Hi", "TU", "Quiz", "Code", "Wien"] as const;

function zweiVerschiedene(r: Rng): [string, string] {
  const [p, q] = r.mische(WOERTER);
  return [p, q];
}

// ---------------------------------------------------------------- Seiteneffekt + Rückgabe

interface Variante {
  rumpf: string;
  /** Ausgabe innerhalb der Methode */
  aus: (a: string, b: string) => string;
  /** Rückgabewert */
  rueck: (a: string, b: string) => string;
  text: string;
}

const VARIANTEN: Variante[] = [
  { rumpf: "System.out.println(a);\n        return b;", aus: (a) => a, rueck: (_a, b) => b, text: "gibt `a` aus und liefert `b`" },
  { rumpf: "System.out.println(b);\n        return a;", aus: (_a, b) => b, rueck: (a) => a, text: "gibt `b` aus und liefert `a`" },
  { rumpf: "System.out.println(a);\n        return b + a;", aus: (a) => a, rueck: (a, b) => b + a, text: "gibt `a` aus und liefert `b + a`" },
  { rumpf: "System.out.println(b + a);\n        return a;", aus: (a, b) => b + a, rueck: (a) => a, text: "gibt `b + a` aus und liefert `a`" },
];

const PAARE: [0 | 1, 0 | 1][] = [
  [0, 1],
  [1, 0],
  [0, 0],
  [1, 1],
];

// ---------------------------------------------------------------- Überladungsauflösung

type JTyp = "char" | "int" | "long" | "float" | "double" | "String";
const RANG: Record<JTyp, number> = { char: 0, int: 1, long: 2, float: 3, double: 4, String: 9 };

interface Arg {
  lit: string;
  typ: JTyp;
  /** Zahlenwert (bei char der Zeichencode) */
  wert: number;
  /** Zeichen oder Text, falls char/String */
  text?: string;
}

const ARGUMENTE: Arg[] = [
  { lit: "'a'", typ: "char", wert: 97, text: "a" },
  { lit: "7", typ: "int", wert: 7 },
  { lit: "7L", typ: "long", wert: 7 },
  { lit: "2.5", typ: "double", wert: 2.5 },
  { lit: "3f", typ: "float", wert: 3 },
  { lit: '"x"', typ: "String", wert: 0, text: "x" },
  { lit: "'a' + 1", typ: "int", wert: 98 },
  { lit: "7 / 2", typ: "int", wert: 3 },
  { lit: "(char) ('a' + 2)", typ: "char", wert: 99, text: "c" },
];

/** Darf ein Argument vom Typ a an einen Parameter vom Typ t übergeben werden (gleich oder erweitert)? */
function passt(a: JTyp, t: JTyp): boolean {
  if (a === "String" || t === "String") return a === t;
  if (t === "char") return a === "char";
  return RANG[t] >= RANG[a];
}

/** Java wählt unter den passenden Methoden die mit dem kleinsten Typ auf der Leiter. */
function waehle(a: JTyp, methoden: JTyp[]): JTyp | null {
  const k = methoden.filter((t) => passt(a, t)).sort((x, y) => RANG[x] - RANG[y]);
  return k[0] ?? null;
}

function zeigeWert(arg: Arg, t: JTyp): string {
  if (t === "String" || t === "char") return arg.text!;
  if (t === "float" || t === "double") return jdouble(arg.wert);
  return String(arg.wert);
}

// ---------------------------------------------------------------- addChar-Muster

type Muster = { name: string; beschreibung: string; anzahl: (i: number) => number; code: string };
const MUSTER: Muster[] = [
  {
    name: "zweimal, einmal",
    beschreibung: "abwechselnd zweimal und einmal, beginnend mit zweimal",
    anzahl: (i) => (i % 2 === 0 ? 2 : 1),
    code: "if (i % 2 == 0) {\n                    ergebnis = ergebnis + c;\n                }\n                ergebnis = ergebnis + c;",
  },
  {
    name: "einmal, zweimal",
    beschreibung: "abwechselnd einmal und zweimal, beginnend mit einmal",
    anzahl: (i) => (i % 2 === 1 ? 2 : 1),
    code: "ergebnis = ergebnis + c;\n                if (i % 2 == 1) {\n                    ergebnis = ergebnis + c;\n                }",
  },
  {
    name: "dreimal",
    beschreibung: "jedes Mal dreimal",
    anzahl: () => 3,
    code: "ergebnis = ergebnis + c + c + c;",
  },
];

function wendeMusterAn(text: string, c: string, m: Muster): string {
  let s = "";
  for (let i = 0; i < text.length; i++) {
    s += text[i];
    if (i < text.length - 1) s += c.repeat(m.anzahl(i));
  }
  return s;
}

const TEXTE = ["Kino", "Java", "Tabelle", "Sonne", "Methode", "Code", "AB", "X", "Wien"] as const;
const ZEICHEN = ["#", "*", "+", "-", "=", ":", "~"] as const;

export const DRILLS: Drill[] = [
  drill({
    id: "me-d-sequenz-ausgabe",
    kapitel: K,
    titel: "Seiteneffekt und Rückgabe: Ausgabe bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const v = r.wahl(VARIANTEN);
      const [p, q] = zweiVerschiedene(r);
      const werte = [p, q];
      const namen = ["p", "q"];
      const aufrufe = Array.from({ length: 3 }, () => ({ paar: r.wahl(PAARE), drucken: r.zufall() < 0.75 }));
      if (!aufrufe.some((x) => x.drucken)) aufrufe[0].drucken = true;
      const zeilen: string[] = [];
      const schritte: string[] = [];
      const code = aufrufe.map(({ paar: [i, j], drucken }) => {
        const a = werte[i], b = werte[j];
        const aufruf = `f(${namen[i]}, ${namen[j]})`;
        zeilen.push(v.aus(a, b));
        if (drucken) zeilen.push(v.rueck(a, b));
        schritte.push(
          drucken
            ? `\`System.out.println(${aufruf})\`: zuerst gibt \`f\` die Zeile \`${v.aus(a, b)}\` aus, dann druckt \`println\` den Rückgabewert \`${v.rueck(a, b)}\`.`
            : `\`${aufruf};\` steht allein: Es erscheint nur \`${v.aus(a, b)}\`, der Rückgabewert \`${v.rueck(a, b)}\` geht verloren.`,
        );
        return drucken ? `System.out.println(${aufruf});` : `${aufruf};`;
      });
      const quelltext = `public class Sequenz {
    public static String f(String a, String b) {
        ${v.rumpf}
    }

    public static void main(String[] args) {
        String p = "${p}";
        String q = "${q}";
        ${code.join("\n        ")}
    }
}
`;
      const falsch = aufrufe.flatMap(({ paar: [i, j], drucken }) => (drucken ? [v.rueck(werte[i], werte[j]), v.aus(werte[i], werte[j])] : [v.aus(werte[i], werte[j])]));
      const loesungText = zeilen.join("\n");
      return {
        angabe: `Die Methode \`f\` ${v.text}. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: quelltext,
            loesung: loesungText + "\n",
            fehler:
              falsch.join("\n") !== loesungText
                ? [{ wert: falsch.join("\n"), meldung: "Bei `println(f(...))` läuft zuerst `f` mit seiner eigenen Ausgabe. Erst danach druckt `println` den Rückgabewert." }]
                : undefined,
          },
        ],
        hinweis: "Notiere bei jedem Aufruf getrennt: Was gibt `f` selbst aus, und was liefert `f` zurück?",
        loesung: `**Ansatz:** Jeden Aufruf in Ausgabe (Seiteneffekt) und Rückgabewert zerlegen.\n---\n${schritte.join("\n\n")}\n---\nGesamte Ausgabe: ${zeilen.map((z) => `\`${z}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "me-d-sequenz-waehlen",
    kapitel: K,
    titel: "Aufrufsequenz zur Ausgabe wählen",
    niveau: 2,
    erzeuge: (r) => {
      const v = r.wahl(VARIANTEN.slice(0, 2));
      const [p, q] = zweiVerschiedene(r);
      const werte = [p, q];
      const namen = ["p", "q"];
      const folge = () => Array.from({ length: 3 }, () => r.wahl(PAARE));
      const schluessel = (f: [number, number][]) => f.map((x) => x.join("")).join("|");
      const richtig = folge();
      const optionen = [richtig];
      while (optionen.length < 3) {
        const k = folge();
        if (!optionen.some((o) => schluessel(o) === schluessel(k))) optionen.push(k);
      }
      const ausgabe = (f: [number, number][]) => f.flatMap(([i, j]) => [v.aus(werte[i], werte[j]), v.rueck(werte[i], werte[j])]);
      const text = (f: [number, number][]) => f.map(([i, j]) => `\`System.out.println(f(${namen[i]}, ${namen[j]}));\``).join(" ");
      const gemischt = r.mische([0, 1, 2]);
      const richtigIndex = gemischt.indexOf(0);
      const bloecke = richtig.map(([i, j]) => `\`${v.aus(werte[i], werte[j])}\`, \`${v.rueck(werte[i], werte[j])}\` gehört zu \`f(${namen[i]}, ${namen[j]})\``);
      return {
        angabe: `Gegeben sind \`String p = "${p}";\`, \`String q = "${q}";\` und

\`\`\`java
public static String f(String a, String b) {
    ${v.rumpf.replace(/\n {8}/g, "\n    ")}
}
\`\`\`

Welche Folge von Aufrufen erzeugt diese Ausgabe?

\`\`\`
${ausgabe(richtig).join("\n")}
\`\`\``,
        teile: [
          {
            typ: "auswahl",
            optionen: gemischt.map((k) => text(optionen[k])),
            richtig: [richtigIndex],
            fehler: gemischt
              .map((k, idx) => ({ k, idx }))
              .filter(({ k }) => k !== 0)
              .map(({ k, idx }) => ({
                wert: idx,
                meldung: `Diese Folge erzeugt ${ausgabe(optionen[k]).map((z) => `\`${z}\``).join(", ")}. Vergleiche Block für Block mit der gesuchten Ausgabe.`,
              })),
          },
        ],
        hinweis: "Jeder Aufruf erzeugt zwei Zeilen. Teile die Ausgabe in Zweierblöcke.",
        loesung: `**Ansatz:** \`println(f(x, y))\` erzeugt zuerst die Ausgabe in \`f\`, dann den Rückgabewert. Die Methode ${v.text}.\n---\n${bloecke.join(". ")}.\n---\nRichtig ist also ${text(richtig)}.`,
      };
    },
  }),

  drill({
    id: "me-d-vorbedingung",
    kapitel: K,
    titel: "Vorbedingung gegen Division durch 0",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(2, 9);
      const z = r.int(2, 6);
      const kz = r.wahl([10, 12, 20, 24, 100]);
      const familien = [
        {
          nenner: "a + b",
          richtig: "a != -b",
          falsch: [
            { opt: "a != b", bsp: `a = ${z}, b = ${-z}` },
            { opt: "a > 0", bsp: `a = ${z}, b = ${-z}` },
          ],
        },
        {
          nenner: "a - b",
          richtig: "a != b",
          falsch: [
            { opt: "a > 0 && b > 0", bsp: `a = ${z}, b = ${z}` },
            { opt: "a != -b", bsp: `a = ${z}, b = ${z}` },
          ],
        },
        {
          nenner: "a * b",
          richtig: "a != 0 && b != 0",
          falsch: [
            { opt: "a != b", bsp: `a = 0, b = ${z}` },
            { opt: "a != 0 || b != 0", bsp: `a = 0, b = ${z}` },
          ],
        },
        {
          nenner: `b - ${c}`,
          richtig: `b != ${c}`,
          falsch: [
            { opt: "b > 0", bsp: `a = 1, b = ${c}` },
            { opt: "a != b", bsp: `a = 0, b = ${c}` },
          ],
        },
      ];
      const f = r.wahl(familien);
      const mitSchleife = r.zufall() < 0.5;
      const rumpf = mitSchleife
        ? `int summe = 0;\n    for (int i = a; i < b; i++) {\n        summe += i;\n    }\n    return summe / (${f.nenner});`
        : `return ${kz} / (${f.nenner});`;
      const opts = r.mische([{ opt: f.richtig, bsp: "" }, ...f.falsch]);
      return {
        angabe: `Welche Vorbedingung schränkt die Argumente so ein, dass der Aufruf von \`f\` ohne Exception ausgeführt werden kann?

\`\`\`java
public static int f(int a, int b) {
    ${rumpf}
}
\`\`\``,
        teile: [
          {
            typ: "auswahl",
            optionen: opts.map((o) => `\`${o.opt}\``),
            richtig: [opts.findIndex((o) => o.opt === f.richtig)],
            fehler: opts
              .map((o, i) => ({ o, i }))
              .filter(({ o }) => o.opt !== f.richtig)
              .map(({ o, i }) => ({ wert: i, meldung: `Gegenbeispiel: \`${o.bsp}\`. Die Bedingung ist erfüllt, aber \`${f.nenner}\` ist 0, und die Ganzzahldivision wirft eine \`ArithmeticException\`.` })),
          },
        ],
        hinweis: "Bestimme, wann der Nenner 0 ist. Suche dann für jede Option Werte, die sie erfüllen und trotzdem den Nenner 0 machen.",
        loesung: `**Ansatz:** Eine \`ArithmeticException\` entsteht nur bei der Division durch \`${f.nenner}\`${mitSchleife ? " (die Schleife ist harmlos)" : ""}.\n---\n${f.falsch.map((x) => `\`${x.opt}\` reicht nicht: Gegenbeispiel \`${x.bsp}\`.`).join(" ")}\n---\n\`${f.richtig}\` schließt genau den Fall aus, in dem der Nenner 0 wird. Das ist die gesuchte Vorbedingung.`,
      };
    },
  }),

  drill({
    id: "me-d-nachbedingung",
    kapitel: K,
    titel: "Korrekte Nachbedingung wählen",
    niveau: 2,
    erzeuge: (r) => {
      const buchstabe = r.wahl(["e", "a", "x", "s"]);
      const bedingungen = [
        { code: `s.charAt(i) == '${buchstabe}'`, was: `Zeichen \`'${buchstabe}'\``, ohne: "bcd", alle: buchstabe.repeat(3) },
        { code: "s.charAt(i) >= '0' && s.charAt(i) <= '9'", was: "Ziffern", ohne: "abc", alle: "123" },
        { code: "s.charAt(i) >= 'A' && s.charAt(i) <= 'Z'", was: "Großbuchstaben", ohne: "abc", alle: "ABC" },
      ];
      const b = r.wahl(bedingungen);
      const optionen = r.mische([
        { opt: "n >= 0 && n <= s.length()", ok: true, bsp: "" },
        { opt: "n > 0 && n <= s.length()", ok: false, bsp: `s = "${b.ohne}" liefert n = 0` },
        { opt: "n >= 0 && n < s.length()", ok: false, bsp: `s = "${b.alle}" liefert n = 3` },
      ]);
      return {
        angabe: `Die Methode zählt die ${b.was} in \`s\` und liefert die Anzahl \`n\`. Welche Bedingung ist eine korrekte Nachbedingung?

\`\`\`java
// Vorbedingung: s != null
public static int zaehle(String s) {
    int n = 0;
    for (int i = 0; i < s.length(); i++) {
        if (${b.code}) {
            n++;
        }
    }
    return n;
}
\`\`\``,
        teile: [
          {
            typ: "auswahl",
            optionen: optionen.map((o) => `\`${o.opt}\``),
            richtig: [optionen.findIndex((o) => o.ok)],
            fehler: optionen
              .map((o, i) => ({ o, i }))
              .filter(({ o }) => !o.ok)
              .map(({ o, i }) => ({ wert: i, meldung: `Gegenbeispiel: \`${o.bsp}\`. Eine Nachbedingung muss für jeden erlaubten Aufruf stimmen.` })),
          },
        ],
        hinweis: "Probiere einen String ohne passende Zeichen und einen, der nur aus passenden Zeichen besteht.",
        loesung: `**Ansatz:** Die möglichen Werte von \`n\` bestimmen und jede Option an Randfällen prüfen.\n---\n\`n\` liegt immer zwischen 0 (kein Treffer, etwa \`"${b.ohne}"\`) und \`s.length()\` (alle Zeichen passen, etwa \`"${b.alle}"\`).\n---\nNur \`n >= 0 && n <= s.length()\` gilt in beiden Randfällen.`,
      };
    },
  }),

  drill({
    id: "me-d-ueberladung",
    kapitel: K,
    titel: "Welche überladene Methode wird aufgerufen?",
    niveau: 2,
    erzeuge: (r) => {
      const satz: JTyp[][] = [
        ["int", "double"],
        ["int", "long", "double"],
        ["char", "int", "String"],
        ["long", "double", "String"],
        ["char", "double"],
        ["int", "float", "String"],
      ];
      const methoden = r.wahl(satz);
      const moeglich = ARGUMENTE.filter((a) => waehle(a.typ, methoden) !== null);
      const args = r.mische(moeglich).slice(0, 4);
      const zeilen = args.map((a) => {
        const t = waehle(a.typ, methoden)!;
        return { a, t, zeile: `${t} ${zeigeWert(a, t)}` };
      });
      const reihenfolge = ["char", "int", "long", "float", "double", "String"] as JTyp[];
      const defs = reihenfolge
        .filter((t) => methoden.includes(t))
        .map((t) => `    public static void z(${t} x) {\n        System.out.println("${t} " + x);\n    }`)
        .join("\n\n");
      const code = `public class Auswahl {
${defs}

    public static void main(String[] args) {
        ${args.map((a) => `z(${a.lit});`).join("\n        ")}
    }
}
`;
      return {
        angabe: `Die Klasse enthält die Methoden ${methoden.map((t) => `\`z(${t})\``).join(", ")}. Was gibt das Programm aus?`,
        teile: [{ typ: "ausgabe", code, loesung: zeilen.map((z) => z.zeile).join("\n") + "\n" }],
        hinweis: "Bestimme den Typ jedes Arguments. Passt keine Methode genau, nimm die nächstgelegene auf der Leiter char → int → long → float → double.",
        loesung: `**Ansatz:** Argumenttyp bestimmen, genau passende oder nächstgelegene Methode wählen, Wert im Typ des Parameters ausgeben.\n---\n${zeilen
          .map(({ a, t }) => `\`z(${a.lit})\`: Argumenttyp \`${a.typ}\`, gewählt wird \`z(${t})\`.`)
          .join(" ")}\n---\nAusgabe: ${zeilen.map((z) => `\`${z.zeile}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "me-d-call-by-value",
    kapitel: K,
    titel: "Call-by-value: Was sieht main?",
    niveau: 1,
    erzeuge: (r) => {
      const s = r.int(1, 9);
      const k = r.int(2, 5);
      const d = r.int(-5, 9);
      const neu = (x: number) => x * k + d;
      const dTxt = d < 0 ? ` - ${-d}` : ` + ${d}`;
      const code = `public class Kopie {
    public static void aendere(int x) {
        x = x * ${k}${dTxt};
        System.out.println("in aendere: " + x);
    }

    public static void main(String[] args) {
        int x = ${s};
        aendere(x);
        aendere(x + 1);
        System.out.println("in main: " + x);
    }
}
`;
      const loesung = `in aendere: ${neu(s)}\nin aendere: ${neu(s + 1)}\nin main: ${s}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `in aendere: ${neu(s)}\nin aendere: ${neu(neu(s) + 1)}\nin main: ${neu(neu(s) + 1)}`, meldung: "Der Parameter `x` ist eine Kopie. Die Variable `x` in `main` bleibt die ganze Zeit gleich." },
              { wert: `in aendere: ${neu(s)}\nin aendere: ${neu(s + 1)}\nin main: ${neu(s + 1)}`, meldung: "Die letzte Zeile gibt das `x` aus `main` aus. Es wurde nie verändert." },
            ]),
          },
        ],
        hinweis: "Das `x` in `main` und der Parameter `x` sind zwei verschiedene Variablen.",
        loesung: `**Ansatz:** Call-by-value. Jeder Aufruf kopiert den Wert des Arguments in den Parameter.\n---\n\`aendere(${s})\` rechnet ${s} · ${k}${dTxt} = ${neu(s)}. \`aendere(${s + 1})\` rechnet ${s + 1} · ${k}${dTxt} = ${neu(s + 1)}.\n---\nIn \`main\` ist \`x\` unverändert ${s}.`,
      };
    },
  }),

  drill({
    id: "me-d-verschachtelt",
    kapitel: K,
    titel: "Verschachtelte Aufrufe mit Rückgabewert",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 4);
      const b = r.int(-3, 5);
      const c = r.int(1, 6);
      const n = r.int(1, 7);
      const f = (x: number) => a * x + b;
      const g = (x: number) => x - c;
      const bTxt = b < 0 ? ` - ${-b}` : ` + ${b}`;
      const code = `public class Verschachtelt {
    public static int f(int x) {
        return ${a} * x${bTxt};
    }

    public static int g(int x) {
        return x - ${c};
    }

    public static void main(String[] args) {
        int n = ${n};
        System.out.println(f(g(n)));
        System.out.println(g(f(n)));
        System.out.println(f(n) + g(n));
    }
}
`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${f(g(n))}\n${g(f(n))}\n${f(n) + g(n)}\n`,
            fehler: f(g(n)) !== g(f(n)) ? [{ wert: `${g(f(n))}\n${f(g(n))}\n${f(n) + g(n)}`, meldung: "Bei `f(g(n))` läuft zuerst das innere `g`, und `f` bekommt dessen Ergebnis." }] : undefined,
          },
        ],
        hinweis: "Verschachtelte Aufrufe von innen nach außen auswerten.",
        loesung: `**Ansatz:** Jeden Aufruf durch seinen Rückgabewert ersetzen, innen zuerst.\n---\n\`g(${n})\` = ${g(n)}, \`f(${g(n)})\` = ${f(g(n))}. \`f(${n})\` = ${f(n)}, \`g(${f(n)})\` = ${g(f(n))}.\n---\n\`f(${n}) + g(${n})\` = ${f(n)} + ${g(n)} = ${f(n) + g(n)}.`,
      };
    },
  }),

  drill({
    id: "me-d-verdecken",
    kapitel: K,
    titel: "Klassenvariable, Parameter und lokale Variable",
    niveau: 2,
    erzeuge: (r) => {
      const A = r.int(10, 50);
      const D = r.int(1, 9);
      const E = r.int(2, 20);
      const L = r.int(1, 9);
      const code = `public class Verdeckt {
    static int x = ${A};

    public static int m(int x) {
        x = x + ${D};
        return x;
    }

    public static void n() {
        x = x + ${E};
    }

    public static void main(String[] args) {
        System.out.println(m(x) + " " + x);
        n();
        System.out.println(x);
        int x = ${L};
        n();
        System.out.println(m(x) + " " + x);
    }
}
`;
      const loesung = `${A + D} ${A}\n${A + E}\n${L + D} ${L}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${A + D} ${A + D}\n${A + D + E}\n${L + D} ${L}`, meldung: "In `m` ist `x` der Parameter. `x = x + ...` ändert nur ihn, nicht die Klassenvariable." },
              { wert: `${A + D} ${A}\n${A + E}\n${L + D} ${A + 2 * E}`, meldung: "Ab `int x = ...` bezeichnet `x` in `main` die lokale Variable. `n()` ändert nur die Klassenvariable." },
            ]),
          },
        ],
        hinweis: "Ordne jedes `x` zu: Parameter von `m`, Klassenvariable (in `n` und anfangs in `main`) oder lokale Variable von `main`.",
        loesung: `**Ansatz:** Für jedes \`x\` die geltende Deklaration suchen.\n---\n\`m(${A})\` rechnet mit dem Parameter und liefert ${A + D}, die Klassenvariable bleibt ${A}. \`n()\` erhöht die Klassenvariable auf ${A + E}.\n---\nNach \`int x = ${L};\` meint \`x\` in \`main\` die lokale Variable. \`n()\` ändert nur die Klassenvariable. Ausgabe \`${L + D} ${L}\`.`,
      };
    },
  }),

  drill({
    id: "me-d-addchar",
    kapitel: K,
    titel: "Zeichen zwischen die Zeichen einfügen",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.wahl(MUSTER);
      const [t1, t2] = r.mische(TEXTE);
      const c = r.wahl(ZEICHEN);
      const code = `public class Einfuegen {
    public static void addChar(String text, char c) {
        String ergebnis = "";
        for (int i = 0; i < text.length(); i++) {
            ergebnis = ergebnis + text.charAt(i);
            if (i < text.length() - 1) {
                ${m.code}
            }
        }
        System.out.println(ergebnis);
    }

    public static void main(String[] args) {
        addChar("${t1}", '${c}');
        addChar("${t2}", '${c}');
    }
}
`;
      const z1 = wendeMusterAn(t1, c, m);
      const z2 = wendeMusterAn(t2, c, m);
      const anders = MUSTER.find((x) => x !== m && x.name !== "dreimal") ?? MUSTER[0];
      const f1 = wendeMusterAn(t1, c, anders);
      const f2 = wendeMusterAn(t2, c, anders);
      return {
        angabe: `Die Methode fügt zwischen je zwei Zeichen das Zeichen \`c\` ein, und zwar ${m.beschreibung}. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${z1}\n${z2}\n`,
            fehler: `${f1}\n${f2}` !== `${z1}\n${z2}` ? [{ wert: `${f1}\n${f2}`, meldung: "Prüfe, mit welcher Anzahl das Muster bei `i = 0` beginnt." }] : undefined,
          },
        ],
        hinweis: "Nach Position `i` (außer nach dem letzten Zeichen) wird eingefügt. Bestimme für jedes `i`, wie oft.",
        loesung: `**Ansatz:** Für jede Lücke nach Position \`i\` die Anzahl der eingefügten Zeichen bestimmen. Nach dem letzten Zeichen wird nichts eingefügt.\n---\n\`"${t1}"\` hat ${t1.length - 1} Lücken. Ergebnis \`${z1}\`.\n---\n\`"${t2}"\` hat ${t2.length - 1} Lücken. Ergebnis \`${z2}\`.`,
      };
    },
  }),

  drill({
    id: "me-d-signatur",
    kapitel: K,
    titel: "Zulässige Überladung?",
    niveau: 1,
    erzeuge: (r) => {
      const typen = ["int", "double", "String", "char", "boolean"] as const;
      const [t1, t2, t3] = r.mische(typen);
      const rueck = r.wahl(["void", "int", "String"] as const);
      const andererRueck = rueck === "void" ? "int" : "void";
      const fall = r.int(0, 4);
      const kopf1 = `${rueck} f(${t1} a, ${t2} b)`;
      const faelle = [
        { kopf: `${andererRueck} f(${t1} a, ${t2} b)`, ok: false, warum: "Nur der Rückgabetyp ist anders. Er gehört nicht zur Signatur, beide Methoden haben die Signatur " },
        { kopf: `${rueck} f(${t1} x, ${t2} y)`, ok: false, warum: "Nur die Parameternamen sind anders. Sie gehören nicht zur Signatur, beide Methoden haben die Signatur " },
        { kopf: `${rueck} f(${t2} b, ${t1} a)`, ok: true, warum: "Die Reihenfolge der Parametertypen ist vertauscht. Damit sind die Signaturen verschieden: " },
        { kopf: `${rueck} f(${t1} a)`, ok: true, warum: "Die Anzahl der Parameter ist verschieden. Damit sind die Signaturen verschieden: " },
        { kopf: `${rueck} f(${t1} a, ${t3} b)`, ok: true, warum: "Ein Parametertyp ist anders. Damit sind die Signaturen verschieden: " },
      ];
      const f = faelle[fall];
      const sig = (k: string) => {
        const m = /f\((.*)\)/.exec(k)![1];
        return `f(${m.split(",").map((p) => p.trim().split(" ")[0]).join(", ")})`;
      };
      return {
        angabe: `Dürfen die Methoden \`static ${kopf1}\` und \`static ${f.kopf}\` gemeinsam in einer Klasse stehen?`,
        teile: [
          {
            typ: "auswahl",
            optionen: ["Ja, das ist eine zulässige Überladung.", "Nein, beide haben dieselbe Signatur."],
            richtig: [f.ok ? 0 : 1],
            fehler: [
              f.ok
                ? { wert: 1, meldung: "Vergleiche die Parametertypen in ihrer Reihenfolge. Unterscheiden sie sich, sind die Signaturen verschieden." }
                : { wert: 0, meldung: "Rückgabetyp und Parameternamen gehören nicht zur Signatur. Vergleiche nur Name und Parametertypen." },
            ],
          },
        ],
        hinweis: "Schreib für beide Methoden nur die Signatur auf: Name und Parametertypen in ihrer Reihenfolge.",
        loesung: `**Ansatz:** Signaturen vergleichen, Rückgabetyp und Parameternamen weglassen.\n---\n${f.warum}\`${sig(kopf1)}\`${f.ok ? ` und \`${sig(f.kopf)}\`` : ""}.\n---\n${f.ok ? "Die beiden Methoden dürfen nebeneinander stehen." : "Der Compiler meldet `already defined`."}`,
      };
    },
  }),

  drill({
    id: "me-d-anzahl-zeilen",
    kapitel: K,
    titel: "Wie viele Zeilen gibt das Programm aus?",
    niveau: 2,
    erzeuge: (r) => {
      const k1 = r.int(2, 4);
      const k2 = r.int(2, 3);
      const k3 = r.int(1, 3);
      const k4 = r.int(0, 2);
      const proB = k1;
      const proA = k2 * proB + 1;
      const gesamt = k3 * proA + k4;
      const wiederhole = (aufruf: string, n: number, einr: string) => Array.from({ length: n }, () => `${einr}${aufruf}`).join("\n");
      const code = `public static void c() {
    System.out.println("*");
}

public static void b() {
${wiederhole("c();", k1, "    ")}
}

public static void a() {
    System.out.println("-");
${wiederhole("b();", k2, "    ")}
}

public static void main(String[] args) {
${wiederhole("a();", k3, "    ")}${k4 ? "\n" + wiederhole("c();", k4, "    ") : ""}
}`;
      return {
        angabe: `Wie viele Zeilen gibt dieses Programm insgesamt aus?\n\n\`\`\`java\n${code}\n\`\`\``,
        teile: [
          {
            typ: "zahl",
            loesung: `${k3}*(${k2}*${k1} + 1) + ${k4}`,
            fehler: [{ wert: String(k3 + k4), meldung: "Du hast nur die Aufrufe in `main` gezählt. Jeder Aufruf von `a` erzeugt viele Zeilen." }],
          },
        ],
        hinweis: "Zähle von innen nach außen: Zeilen pro Aufruf von `c`, dann von `b`, dann von `a`.",
        loesung: `**Ansatz:** Von der innersten Methode nach außen zählen und mit der Anzahl der Aufrufe multiplizieren.\n---\n\`c\` gibt 1 Zeile aus, \`b\` also ${proB} Zeilen. \`a\` gibt 1 Zeile aus und ruft \`b\` ${k2}-mal auf: ${k2} · ${proB} + 1 = ${proA} Zeilen.\n---\n\`main\`: ${k3} · ${proA}${k4 ? ` + ${k4}` : ""} = ${gesamt} Zeilen.`,
      };
    },
  }),

  drill({
    id: "me-d-durchschnitt",
    kapitel: K,
    titel: "Rückgabetyp int oder double",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(-9, 9);
      let b = r.int(-9, 9);
      if ((a + b) % 2 === 0) b += 1;
      if (b > 9) b -= 2;
      const code = `public class Mittel {
    public static int durchschnitt(int a, int b) {
        return (a + b) / 2;
    }

    public static double mittel(int a, int b) {
        return (a + b) / 2.0;
    }

    public static void main(String[] args) {
        System.out.println(durchschnitt(${a}, ${b}));
        System.out.println(mittel(${a}, ${b}));
    }
}
`;
      const ganz = idiv(a + b, 2);
      const komma = (a + b) / 2;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${ganz}\n${jdouble(komma)}\n`,
            fehler: [
              { wert: `${jdouble(komma)}\n${jdouble(komma)}`, meldung: "`durchschnitt` rechnet `(a + b) / 2` mit zwei `int`-Werten. Der Nachkommaanteil fällt weg." },
              ...(Math.floor(komma) !== ganz ? [{ wert: `${Math.floor(komma)}\n${jdouble(komma)}`, meldung: "Java rundet bei der Ganzzahldivision zur Null hin, nicht nach unten." }] : []),
            ],
          },
        ],
        hinweis: "Bei `int / int` fällt der Nachkommaanteil weg, Richtung 0. Bei `/ 2.0` rechnet Java mit Kommazahlen.",
        loesung: `**Ansatz:** Den Ausdruck im \`return\` mit den Regeln für \`int\` und \`double\` auswerten.\n---\n\`(${a} + ${b}) / 2\` = \`${a + b} / 2\` = ${ganz} (zur Null hin abgeschnitten).\n---\n\`${a + b} / 2.0\` = ${jdouble(komma)}.`,
      };
    },
  }),
];
