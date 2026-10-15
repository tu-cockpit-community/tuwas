import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 10 (Rekursion I: Zahlen und Strings). Jede Referenzrechnung bildet die
 * Java-Semantik nach (Ganzzahldivision zur Null hin, Rest mit dem Vorzeichen des Dividenden, Aufrufreihenfolge
 * auf dem Stapel). Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "rekursion";

/** Java-Ganzzahldivision (rundet zur Null hin) */
const idiv = (a: number, b: number) => Math.trunc(a / b);

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg. */
function nurFalsche(loesung: string, fehler: { wert: string; meldung: string }[]) {
  const norm = (t: string) => t.replace(/\n+$/, "");
  const rest = fehler.filter((f) => norm(f.wert) !== norm(loesung));
  return rest.length ? rest : undefined;
}

/** Eine ganze Klasse mit Methoden und main als Java-Quelltext */
function klasse(name: string, methoden: string, main: string): string {
  return `public class ${name} {\n${methoden}\n\n    public static void main(String[] args) {\n${main}\n    }\n}\n`;
}

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

const WOERTER = ["Banane", "Kakao", "Rennrad", "Laterne", "Ananas", "Programm", "Regenbogen", "Tannenbaum", "Mississippi", "Erdbeere", "Sonnenschein", "Kanone"] as const;

/** Folge der Argumente n, n - k, … bis einschließlich des ersten Werts, der den Basisfall erfüllt */
function folge(start: number, schritt: (n: number) => number, basis: (n: number) => boolean): number[] {
  const out = [start];
  while (!basis(out[out.length - 1])) out.push(schritt(out[out.length - 1]));
  return out;
}

function zufallsZahl(r: Rng, stellen: number): number {
  let z = r.int(1, 9);
  for (let i = 1; i < stellen; i++) z = z * 10 + r.int(0, 9);
  return z;
}

export const DRILLS: Drill[] = [
  drill({
    id: "rk-d-summe-schritt",
    kapitel: K,
    titel: "Rückgabewert einer Summen-Rekursion",
    niveau: 1,
    erzeuge: (r) => {
      const k = r.int(2, 3);
      const a = r.int(5, 14);
      const b = r.int(0, 4);
      const f = (n: number): number => (n <= 0 ? 0 : n + f(n - k));
      const fa = f(a);
      const fb = f(b);
      const loesung = `${fa}\n${fb}\n`;
      const methoden = einruecken(`public static int f(int n) {\n    if (n <= 0) {\n        return 0;\n    }\n    return n + f(n - ${k});\n}`, 4);
      const code = klasse("Schritt", methoden, `        System.out.println(f(${a}));\n        System.out.println(f(${b}));`);
      const fa1 = (a * (a + 1)) / 2;
      const fb1 = (b * (b + 1)) / 2;
      const werteA = folge(a, (n) => n - k, (n) => n <= 0).filter((n) => n > 0);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${fa1}\n${fb1}`, meldung: `Der Selbstaufruf ist \`f(n - ${k})\`. Es wird nur jede ${k === 2 ? "zweite" : "dritte"} Zahl addiert, nicht jede.` }]),
          },
        ],
        hinweis: "Setze die Aufrufe ein, bis du beim Basisfall `n <= 0` ankommst. Er liefert 0.",
        loesung: `**Ansatz:** \`f(n)\` addiert \`n\`, \`n - ${k}\`, \`n - ${2 * k}\`, … solange die Zahlen positiv sind.\n---\n\`f(${a})\` addiert ${werteA.join(" + ")} = ${fa}.\n---\n${b > 0 ? `\`f(${b})\` addiert ${folge(b, (n) => n - k, (n) => n <= 0).filter((n) => n > 0).join(" + ")} = ${fb}.` : `\`f(0)\` ist sofort der Basisfall und liefert 0.`}`,
      };
    },
  }),

  drill({
    id: "rk-d-ziffern-bedingung",
    kapitel: K,
    titel: "Ziffern mit einer Bedingung zählen",
    niveau: 2,
    erzeuge: (r) => {
      const stellen = r.int(5, 7);
      const zahl = zufallsZahl(r, stellen);
      const v = r.int(0, 2);
      const g = r.int(3, 6);
      const d = r.int(0, 9);
      const bed = [`n % 10 > ${g}`, "n % 10 % 2 == 0", `n % 10 == ${d}`][v];
      const text = [`größer als ${g}`, "gerade", `gleich ${d}`][v];
      const pruefe = (z: number) => [z > g, z % 2 === 0, z === d][v];
      const ziffern = String(zahl).split("").map(Number);
      const treffer = ziffern.filter(pruefe);
      const anzahl = treffer.length;
      const methoden = einruecken(
        `public static int z(int n) {\n    int beitrag = 0;\n    if (${bed}) {\n        beitrag = 1;\n    }\n    if (n < 10) {\n        return beitrag;\n    }\n    return beitrag + z(n / 10);\n}`,
        4,
      );
      const code = klasse("Ziffern", methoden, `        System.out.println(z(${zahl}));`);
      const loesung = `${anzahl}\n`;
      const ohneErste = pruefe(ziffern[0]) ? anzahl - 1 : anzahl;
      return {
        angabe: `Die Methode \`z\` zählt die Ziffern, die ${text} sind. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(stellen), meldung: "Gezählt werden nicht alle Ziffern, sondern nur die, die die Bedingung erfüllen." },
              { wert: String(ohneErste), meldung: "Auch der Basisfall prüft seine Ziffer. Die erste Ziffer der Zahl zählt mit, wenn sie die Bedingung erfüllt." },
            ]),
          },
        ],
        hinweis: "Zerlege die Zahl von hinten mit `% 10` und `/ 10` und prüfe jede Ziffer einzeln.",
        loesung: `**Ansatz:** Ziffern-Rekursion. Jeder Aufruf prüft seine letzte Ziffer, der Selbstaufruf bekommt \`n / 10\`.\n---\nZiffern von hinten: ${[...ziffern].reverse().join(", ")}. ${text[0].toUpperCase() + text.slice(1)} sind: ${treffer.length ? treffer.join(", ") : "keine"}.\n---\nErgebnis: ${anzahl}.`,
      };
    },
  }),

  drill({
    id: "rk-d-trace-linear",
    kapitel: K,
    titel: "Rückgabewerte in einer Tabelle herleiten",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 3);
      const c = r.int(1, 3);
      let b = r.int(-3, 3);
      // kein Fixpunkt: sonst wären alle Rückgabewerte gleich
      while (a * c + b === c) b = r.int(-3, 3);
      const n = r.int(3, 4);
      const f = (m: number): number => (m === 0 ? c : a * f(m - 1) + b);
      const argumente = Array.from({ length: n + 1 }, (_, i) => n - i);
      const zeilen = argumente.map((m) => [m, f(m)]);
      const falsch = argumente.flatMap((m) => [String(m), String(m === 0 ? c : a * m + b)]);
      const bText = b === 0 ? "" : b > 0 ? ` + ${b}` : ` - ${-b}`;
      const rueck = [...argumente].reverse();
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\npublic static int f(int n) {\n    if (n == 0) {\n        return ${c};\n    }\n    return ${a} * f(n - 1)${bText};\n}\n\`\`\`\n\n\`main\` ruft \`f(${n})\` auf. Trage für jeden Aufruf das Argument und den Rückgabewert ein. Die erste Zeile ist der Aufruf aus \`main\`.`,
        teile: [
          {
            typ: "trace",
            spalten: ["n", "Rückgabewert"],
            zeilen: argumente.map((_, i) => `${i + 1}. Aufruf`),
            loesung: zeilen,
            fehler:
              falsch.join("|") !== zeilen.flat().map(String).join("|")
                ? [{ wert: falsch, meldung: `Der Rückgabewert ist \`${a} * f(n - 1)${bText}\`, also mit dem **Ergebnis des Selbstaufrufs** gerechnet, nicht mit \`n\`.` }]
                : undefined,
          },
        ],
        hinweis: "Fülle die Spalte n von oben nach unten, die Rückgabewerte von unten nach oben, beginnend beim Basisfall.",
        loesung: `**Ansatz:** Hinweg: Argumente ${argumente.join(", ")}. Rückweg: jeden Wert aus dem Wert darunter berechnen.\n---\n\`f(0) = ${c}\` ist der Basisfall.\n---\n${rueck
          .slice(1)
          .map((m) => `\`f(${m}) = ${a} · ${f(m - 1) < 0 ? `(${f(m - 1)})` : f(m - 1)}${bText} = ${f(m)}\``)
          .join(", ")}.`,
      };
    },
  }),

  drill({
    id: "rk-d-anzahl-aufrufe",
    kapitel: K,
    titel: "Anzahl der Aufrufe bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const v = r.int(0, 2);
      let start: number;
      let kopfBasis: string;
      let selbst: string;
      let werte: number[];
      if (v === 0) {
        const k = r.int(2, 4);
        const g = r.int(0, 3);
        start = r.int(12, 30);
        kopfBasis = `n <= ${g}`;
        selbst = `n - ${k}`;
        werte = folge(start, (n) => n - k, (n) => n <= g);
      } else if (v === 1) {
        start = r.int(20, 200);
        kopfBasis = "n == 0";
        selbst = "n / 2";
        werte = folge(start, (n) => idiv(n, 2), (n) => n === 0);
      } else {
        const k = r.int(2, 5);
        const g = r.int(25, 40);
        start = r.int(0, 9);
        kopfBasis = `n >= ${g}`;
        selbst = `n + ${k}`;
        werte = folge(start, (n) => n + k, (n) => n >= g);
      }
      const anzahl = werte.length;
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\npublic static int g(int n) {\n    if (${kopfBasis}) {\n        return 0;\n    }\n    return 1 + g(${selbst});\n}\n\`\`\`\n\nWie oft wird \`g\` beim Aufruf \`g(${start})\` insgesamt aufgerufen? Der Aufruf aus \`main\` zählt mit.`,
        teile: [
          {
            typ: "zahl",
            loesung: String(anzahl),
            fehler: [{ wert: String(anzahl - 1), meldung: "Der letzte Aufruf landet im Basisfall. Er ist trotzdem ein Aufruf und zählt mit." }],
          },
        ],
        hinweis: "Schreib die Argumente untereinander, bis eines den Basisfall erfüllt, und zähle die Zeilen.",
        loesung: `**Ansatz:** Argumentfolge aufschreiben, bis \`${kopfBasis}\` gilt.\n---\nArgumente: ${werte.join(", ")}. Erst ${werte[werte.length - 1]} erfüllt den Basisfall.\n---\nDas sind ${anzahl} Aufrufe. Der Rückgabewert von \`g(${start})\` wäre ${anzahl - 1}, weil der Basisfall nichts addiert.`,
      };
    },
  }),

  drill({
    id: "rk-d-vor-nach",
    kapitel: K,
    titel: "Ausgaben vor und nach dem Selbstaufruf",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(2, 4);
      const v = r.int(0, 2); // 0: nur vor, 1: nur nach, 2: beides
      const vor = v !== 1;
      const nach = v !== 0;
      const basis = r.wahl(["B", "Mitte", "*", "0"]);
      const zeilen: string[] = [];
      if (vor) for (let i = n; i >= 1; i--) zeilen.push(`v${i}`);
      zeilen.push(basis);
      if (nach) for (let i = 1; i <= n; i++) zeilen.push(`n${i}`);
      const falschNach: string[] = [];
      if (vor) for (let i = n; i >= 1; i--) falschNach.push(`v${i}`);
      falschNach.push(basis);
      if (nach) for (let i = n; i >= 1; i--) falschNach.push(`n${i}`);
      const rumpf = `public static void p(int n) {\n    if (n == 0) {\n        System.out.println("${basis}");\n        return;\n    }\n${vor ? '    System.out.println("v" + n);\n' : ""}    p(n - 1);\n${nach ? '    System.out.println("n" + n);\n' : ""}}`;
      const code = klasse("VorNach", einruecken(rumpf, 4), `        p(${n});`);
      const loesung = zeilen.join("\n") + "\n";
      const fehler = nach
        ? nurFalsche(loesung, [{ wert: falschNach.join("\n"), meldung: "Ausgaben hinter dem Selbstaufruf laufen auf dem Rückweg. Zuerst wird der innerste Aufruf `p(1)` fertig." }])
        : nurFalsche(loesung, [{ wert: [basis, ...zeilen.filter((z) => z !== basis)].join("\n"), meldung: "Ausgaben vor dem Selbstaufruf kommen auf dem Hinweg, also vor dem Basisfall." }]);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung, fehler }],
        hinweis: "Vor dem Selbstaufruf: Hinweg in Aufrufreihenfolge. Nach dem Selbstaufruf: Rückweg in umgekehrter Reihenfolge.",
        loesung: `**Ansatz:** Hinweg, Basisfall und Rückweg trennen.\n---\n${vor ? `Hinweg: ${zeilen.filter((z) => z.startsWith("v")).join(", ")}.` : "Vor dem Selbstaufruf steht keine Ausgabe."} Basisfall \`p(0)\`: ${basis}.\n---\n${nach ? `Rückweg: ${zeilen.filter((z) => z.startsWith("n")).join(", ")}. Der innerste Aufruf wird zuerst fertig.` : "Nach dem Selbstaufruf steht keine Ausgabe."}`,
      };
    },
  }),

  drill({
    id: "rk-d-reihenfolge",
    kapitel: K,
    titel: "Ausgaben in die richtige Reihenfolge bringen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(2, 3);
      const [hin, rueck] = r.wahl([
        ["auf", "zu"],
        ["hin", "her"],
        ["start", "ende"],
      ] as const);
      const elemente: string[] = [];
      for (let i = n; i >= 1; i--) elemente.push(`\`${hin} ${i}\``);
      elemente.push("`Basis`");
      for (let i = 1; i <= n; i++) elemente.push(`\`${rueck} ${i}\``);
      return {
        angabe: `Gegeben ist\n\n\`\`\`java\npublic static void k(int n) {\n    if (n == 0) {\n        System.out.println("Basis");\n        return;\n    }\n    System.out.println("${hin} " + n);\n    k(n - 1);\n    System.out.println("${rueck} " + n);\n}\n\`\`\`\n\nBringe die Ausgaben von \`k(${n})\` in die richtige Reihenfolge.`,
        teile: [{ typ: "reihenfolge", elemente }],
        hinweis: "Was vor dem Selbstaufruf steht, kommt auf dem Hinweg. Was danach steht, kommt auf dem Rückweg in umgekehrter Reihenfolge.",
        loesung: `**Ansatz:** Hinweg, Basisfall, Rückweg.\n---\nHinweg: ${elemente.slice(0, n).join(", ")}. Dann \`Basis\`.\n---\nRückweg: ${elemente.slice(n + 1).join(", ")}. Der zuletzt begonnene Aufruf \`k(1)\` wird zuerst fertig.`,
      };
    },
  }),

  drill({
    id: "rk-d-string-umbau",
    kapitel: K,
    titel: "Einen String rekursiv umbauen",
    niveau: 2,
    erzeuge: (r) => {
      const wort = r.wahl(WOERTER);
      const x = r.wahl(wort.split(""));
      const v = r.int(0, 2);
      const chars = wort.split("");
      let ergebnis: string;
      let zweig: string;
      let falsch: string;
      let meldung: string;
      let erkl: string;
      if (v === 0) {
        ergebnis = chars.filter((c) => c !== x).join("");
        zweig = `if (c == '${x}') {\n        return rest;\n    }\n    return c + rest;`;
        falsch = [...chars].reverse().filter((c) => c !== x).join("");
        meldung = "Das Zeichen `c` steht **vor** dem Ergebnis des Rests. Die Reihenfolge bleibt also erhalten.";
        erkl = `Jedes \`${x}\` fällt weg, die übrigen Zeichen bleiben in ihrer Reihenfolge.`;
      } else if (v === 1) {
        ergebnis = [...chars].reverse().filter((c) => c !== x).join("");
        zweig = `if (c == '${x}') {\n        return rest;\n    }\n    return rest + c;`;
        falsch = chars.filter((c) => c !== x).join("");
        meldung = "Das Zeichen `c` steht **hinter** dem Ergebnis des Rests. Dadurch dreht sich die Reihenfolge um.";
        erkl = `Jedes \`${x}\` fällt weg, und weil \`c\` hinten angehängt wird, kehrt sich die Reihenfolge um.`;
      } else {
        ergebnis = chars.map((c) => (c === x ? c + c : c)).join("");
        zweig = `if (c == '${x}') {\n        return "" + c + c + rest;\n    }\n    return c + rest;`;
        falsch = chars.map((c) => c + c).join("");
        meldung = `Verdoppelt wird nur \`${x}\`, nicht jedes Zeichen.`;
        erkl = `Jedes \`${x}\` wird verdoppelt, alle anderen Zeichen bleiben einfach.`;
      }
      const rumpf = `public static String u(String s) {\n    if (s.isEmpty()) {\n        return "";\n    }\n    char c = s.charAt(0);\n    String rest = u(s.substring(1));\n    ${zweig}\n}`;
      const code = klasse("Umbau", einruecken(rumpf, 4), `        System.out.println(u("${wort}") + "|");`);
      const loesung = `${ergebnis}|\n`;
      return {
        angabe: "Was gibt das Programm aus? Der senkrechte Strich am Ende zeigt dir, wo das Ergebnis aufhört.",
        teile: [{ typ: "ausgabe", code, loesung, fehler: nurFalsche(loesung, [{ wert: `${falsch}|`, meldung }]) }],
        hinweis: "Baue das Ergebnis vom leeren String aus auf, Zeichen für Zeichen von hinten nach vorne.",
        loesung: `**Ansatz:** String-Muster: erstes Zeichen \`c\`, Rest \`s.substring(1)\`, Basisfall leerer String.\n---\n${erkl}\n---\nAus \`${wort}\` wird \`${ergebnis}\`. Ausgabe \`${ergebnis}|\`.`,
      };
    },
  }),

  drill({
    id: "rk-d-string-zaehlen",
    kapitel: K,
    titel: "Ein Zeichen rekursiv zählen",
    niveau: 1,
    erzeuge: (r) => {
      const wort = r.wahl(WOERTER);
      const klein = wort.toLowerCase();
      const x = r.wahl(klein.split(""));
      const anzahl = wort.split("").filter((c) => c === x).length;
      const ohneFall = klein.split("").filter((c) => c === x).length;
      const rumpf = `public static int zaehle(String s, char c) {\n    if (s.isEmpty()) {\n        return 0;\n    }\n    int rest = zaehle(s.substring(1), c);\n    if (s.charAt(0) == c) {\n        return 1 + rest;\n    }\n    return rest;\n}`;
      const code = klasse("Zaehlen", einruecken(rumpf, 4), `        System.out.println(zaehle("${wort}", '${x}'));`);
      const loesung = `${anzahl}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: String(ohneFall), meldung: "Groß- und Kleinbuchstaben sind verschiedene Zeichen. Der große Anfangsbuchstabe zählt nicht mit." }]),
          },
        ],
        hinweis: "Jeder Aufruf prüft nur sein erstes Zeichen und addiert das Ergebnis des Rests.",
        loesung: `**Ansatz:** Zähl-Muster mit Basisfall leerer String und Beitrag 1 oder 0.\n---\nIn \`${wort}\` kommt \`${x}\` genau ${anzahl}-mal vor.${ohneFall !== anzahl ? ` Der große Anfangsbuchstabe \`${wort[0]}\` ist ein anderes Zeichen und zählt nicht.` : ""}\n---\nAusgabe: ${anzahl}.`,
      };
    },
  }),

  drill({
    id: "rk-d-intervall",
    kapitel: K,
    titel: "Vielfache in einem Intervall rekursiv ausgeben",
    niveau: 1,
    erzeuge: (r) => {
      const t = r.int(2, 5);
      const a = r.int(1, 10);
      const b = a + r.int(8, 18);
      const nachher = r.zufall() < 0.5;
      const treffer: number[] = [];
      for (let i = a; i <= b; i++) if (i % t === 0) treffer.push(i);
      const ausgabe = nachher ? [...treffer].reverse() : treffer;
      const andersrum = nachher ? treffer : [...treffer].reverse();
      const aus = `    if (start % ${t} == 0) {\n        System.out.println(start);\n    }`;
      const rumpf = `public static void v(int start, int end) {\n    if (start > end) {\n        return;\n    }\n${nachher ? "" : aus + "\n"}    v(start + 1, end);\n${nachher ? aus + "\n" : ""}}`;
      const code = klasse("Intervall", einruecken(rumpf, 4), `        v(${a}, ${b});`);
      const loesung = ausgabe.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: andersrum.join("\n"), meldung: nachher ? "Die Ausgabe steht hinter dem Selbstaufruf. Sie läuft auf dem Rückweg, die Zahlen erscheinen absteigend." : "Die Ausgabe steht vor dem Selbstaufruf. Sie läuft auf dem Hinweg, die Zahlen erscheinen aufsteigend." },
            ]),
          },
        ],
        hinweis: "`start` läuft von links nach rechts durch das Intervall. Entscheidend ist, ob die Ausgabe vor oder nach dem Selbstaufruf steht.",
        loesung: `**Ansatz:** Intervall \`[${a}, ${b}]\`, ausgegeben werden die Vielfachen von ${t}: ${treffer.join(", ")}.\n---\nDie Ausgabe steht ${nachher ? "hinter" : "vor"} dem Selbstaufruf, also auf dem ${nachher ? "Rückweg" : "Hinweg"}.\n---\nReihenfolge: ${ausgabe.join(", ")}.`,
      };
    },
  }),

  drill({
    id: "rk-d-potenz",
    kapitel: K,
    titel: "Potenz rekursiv",
    niveau: 1,
    erzeuge: (r) => {
      const b1 = r.int(-3, 6);
      const e1 = r.int(0, 6);
      const b2 = r.int(2, 5);
      const e2 = r.int(0, 4);
      const pot = (b: number, e: number) => b ** e;
      const rumpf = `public static long potenz(int basis, int exponent) {\n    if (exponent == 0) {\n        return 1;\n    }\n    return basis * potenz(basis, exponent - 1);\n}`;
      const code = klasse("Potenz", einruecken(rumpf, 4), `        System.out.println(potenz(${b1}, ${e1}));\n        System.out.println(potenz(${b2}, ${e2}));`);
      const loesung = `${pot(b1, e1)}\n${pot(b2, e2)}\n`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${b1 * e1}\n${b2 * e2}`, meldung: "Die Methode multipliziert die Basis `exponent`-mal mit sich selbst. Das ist eine Potenz, kein Produkt aus Basis und Exponent." }]),
          },
        ],
        hinweis: "Jeder Aufruf multipliziert einmal mit `basis`. Der Basisfall mit Exponent 0 liefert 1.",
        loesung: `**Ansatz:** \`potenz(b, e) = b · potenz(b, e - 1)\` und \`potenz(b, 0) = 1\`.\n---\n\`potenz(${b1}, ${e1})\` ist ${e1 === 0 ? "der Basisfall, also 1" : `${Array(e1).fill(`(${b1})`).join(" · ")} = ${pot(b1, e1)}`}.\n---\n\`potenz(${b2}, ${e2})\` ist ${e2 === 0 ? "der Basisfall, also 1" : `${Array(e2).fill(b2).join(" · ")} = ${pot(b2, e2)}`}.`,
      };
    },
  }),

  drill({
    id: "rk-d-palindrom",
    kapitel: K,
    titel: "Palindrome von beiden Enden prüfen",
    niveau: 2,
    erzeuge: (r) => {
      const pool = ["uhu", "rotor", "anna", "Anna", "radar", "lager", "abba", "abca", "x", "", "kajak", "Kajak", "neben", "reliefpfeiler"];
      const woerter = r.mische(pool).slice(0, 3);
      const ist = (w: string) => w === w.split("").reverse().join("");
      const rumpf = `public static boolean pal(String s) {\n    if (s.length() <= 1) {\n        return true;\n    }\n    if (s.charAt(0) != s.charAt(s.length() - 1)) {\n        return false;\n    }\n    return pal(s.substring(1, s.length() - 1));\n}`;
      const code = klasse("Pal", einruecken(rumpf, 4), woerter.map((w) => `        System.out.println(pal("${w}"));`).join("\n"));
      const loesung = woerter.map((w) => String(ist(w))).join("\n") + "\n";
      const ohneFall = woerter.map((w) => String(ist(w.toLowerCase()))).join("\n");
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: ohneFall, meldung: `Groß- und Kleinbuchstaben sind verschiedene Zeichen. Ein großer Anfangsbuchstabe ist nicht gleich demselben Buchstaben klein am Ende. Für diese Methode ist darum kein Palindrom: ${woerter.filter((w) => w !== w.toLowerCase() && ist(w.toLowerCase())).map((w) => `\`${w}\``).join(", ")}.` }]),
          },
        ],
        hinweis: "Vergleiche immer das erste mit dem letzten Zeichen und mach mit dem Inneren weiter. Länge 0 oder 1 liefert `true`.",
        loesung: `**Ansatz:** Von beiden Enden zur Mitte. Jedes äußere Paar muss gleich sein.\n---\n${woerter.map((w) => `\`"${w}"\`: ${ist(w) ? "alle Paare gleich" : "ein Paar ist verschieden"}, also \`${ist(w)}\`.`).join(" ")}\n---\nAusgabe: ${woerter.map((w) => String(ist(w))).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "rk-d-index-paare",
    kapitel: K,
    titel: "Gleiche Nachbarn ab einem Index zählen",
    niveau: 3,
    erzeuge: (r) => {
      const laenge = r.int(7, 10);
      let s = "";
      for (let i = 0; i < laenge; i++) s += r.wahl(["a", "a", "b", "c"]);
      const start = r.int(2, laenge - 3);
      const paare = (ab: number) => {
        let z = 0;
        for (let i = ab; i < s.length - 1; i++) if (s[i] === s[i + 1]) z++;
        return z;
      };
      const p0 = paare(0);
      const pk = paare(start);
      const rumpf = `public static int gleichePaare(String s, int index) {\n    if (index >= s.length() - 1) {\n        return 0;\n    }\n    int rest = gleichePaare(s, index + 1);\n    if (s.charAt(index) == s.charAt(index + 1)) {\n        return 1 + rest;\n    }\n    return rest;\n}`;
      const code = klasse("Paare", einruecken(rumpf, 4), `        String s = "${s}";\n        System.out.println(gleichePaare(s, 0));\n        System.out.println(gleichePaare(s, ${start}));`);
      const loesung = `${p0}\n${pk}\n`;
      const liste = (ab: number) => {
        const out: string[] = [];
        for (let i = ab; i < s.length - 1; i++) if (s[i] === s[i + 1]) out.push(`${i}`);
        return out;
      };
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [{ wert: `${p0}\n${p0}`, meldung: `Der zweite Aufruf beginnt erst beim Index ${start}. Paare, die vorher beginnen, zählen nicht mit.` }]),
          },
        ],
        hinweis: "Schreib die Indizes unter die Zeichen. Ein Paar beginnt bei `index` und reicht bis `index + 1`.",
        loesung: `**Ansatz:** Index-Muster. Gezählt werden Positionen \`i\` ab dem Startindex mit \`s.charAt(i) == s.charAt(i + 1)\`.\n---\nGleiche Nachbarn beginnen bei den Indizes ${liste(0).join(", ") || "keinem Index"}. Ab Index 0 sind das ${p0}.\n---\nAb Index ${start} bleiben ${liste(start).join(", ") || "keine"}, also ${pk}.`,
      };
    },
  }),

  drill({
    id: "rk-d-mit-rueckgabe",
    kapitel: K,
    titel: "Ausgaben und Rückgabewert gemischt",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(2, 4);
      const mal = r.zufall() < 0.4;
      const s = mal ? r.int(1, 2) : r.int(0, 2);
      const op = mal ? "*" : "+";
      const werte: number[] = [s];
      for (let i = 1; i <= n; i++) werte.push(mal ? werte[i - 1] * i : werte[i - 1] + i);
      const zeilen: string[] = [];
      for (let i = n; i >= 1; i--) zeilen.push(`a${i}`);
      zeilen.push("B");
      for (let i = 1; i <= n; i++) zeilen.push(`z${werte[i]}`);
      zeilen.push(String(werte[n]));
      const falsch = [...zeilen.slice(0, n + 1), ...zeilen.slice(n + 1, 2 * n + 1).reverse(), String(werte[n])];
      const rumpf = `public static int f(int n) {\n    if (n == 0) {\n        System.out.println("B");\n        return ${s};\n    }\n    System.out.println("a" + n);\n    int r = f(n - 1) ${op} n;\n    System.out.println("z" + r);\n    return r;\n}`;
      const code = klasse("Gemischt", einruecken(rumpf, 4), `        System.out.println(f(${n}));`);
      const loesung = zeilen.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus? Achte auf jede einzelne Zeile.",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: falsch.join("\n"), meldung: "Die `z`-Zeilen stehen hinter dem Selbstaufruf. Zuerst wird der innerste Aufruf `f(1)` fertig." },
              { wert: [String(werte[n]), ...zeilen.slice(0, -1)].join("\n"), meldung: "`println(f(...))` muss `f` zuerst ganz ausführen. Alle Ausgaben in `f` kommen vor dem Rückgabewert." },
            ]),
          },
        ],
        hinweis: `Die \`a\`-Zeilen kommen auf dem Hinweg, die \`z\`-Zeilen auf dem Rückweg. Rechne \`r\` ab \`f(0) = ${s}\` aufwärts.`,
        loesung: `**Ansatz:** Hinweg, Basisfall und Rückweg trennen und auf dem Rückweg \`r\` ausrechnen.\n---\nHinweg: ${zeilen.slice(0, n).join(", ")}. Basisfall: B, Rückgabe ${s}.\n---\nRückweg: ${werte
          .slice(1)
          .map((w, i) => `\`f(${i + 1})\`: r = ${werte[i]} ${op === "*" ? "·" : "+"} ${i + 1} = ${w}`)
          .join(", ")}.\n---\nZum Schluss druckt \`main\` den Rückgabewert ${werte[n]}.`,
      };
    },
  }),
];
