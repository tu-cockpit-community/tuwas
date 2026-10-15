import { drill, type Drill, type Rng } from "@/lib/lernen/training";

const K = "ausdruecke";

// ---------------------------------------------------------------- Java-Semantik in TypeScript
// Alle Rechnungen hier bilden Java nach. Der Validator vergleicht die ersten Seeds mit echtem Java.

/** int-Division: Java schneidet zur 0 hin ab */
const jdiv = (a: number, b: number) => Math.trunc(a / b) | 0;
/** int-Rest: Vorzeichen wie der Dividend (wie JS-%), -0 vermeiden */
const jmod = (a: number, b: number) => (a % b) + 0;
/** int-Überlauf (32 Bit) */
const jint = (x: number) => x | 0;

/** double so formatieren, wie println es tut (nur für Beträge zwischen 0,001 und 10^7 oder 0) */
function jd(v: number): string {
  if (v === 0) return Object.is(v, -0) ? "-0.0" : "0.0";
  const a = Math.abs(v);
  if (a < 1e-3 || a >= 1e7) throw new Error(`double ${v} außerhalb des Formatbereichs`);
  return Number.isInteger(v) ? v.toFixed(1) : String(v);
}

const zeilen = (xs: (string | number)[]) => xs.map(String).join("\n") + "\n";
const ohneUmbruch = (s: string) => s.replace(/\n$/, "");
const textBlock = (s: string) => "```text\n" + ohneUmbruch(s) + "\n```";

const WOERTER = ["Programm", "Variable", "Compiler", "Schleife", "Methode", "Ausdruck", "Literal", "Datentyp", "Konsole", "Klasse", "Rekursion", "Zeichen"];

/** Ausdruck mit + - * / % und positiven int-Operanden nach Java-Regeln auswerten (Punkt vor Strich, links nach rechts) */
function werteIntAus(zahlen: number[], ops: string[]): { wert: number; schritte: string[] } {
  const z = [...zahlen];
  const o = [...ops];
  const schritte: string[] = [];
  for (let i = 0; i < o.length; ) {
    if (o[i] === "*" || o[i] === "/" || o[i] === "%") {
      const a = z[i];
      const b = z[i + 1];
      const e = o[i] === "*" ? jint(Math.imul(a, b)) : o[i] === "/" ? jdiv(a, b) : jmod(a, b);
      schritte.push(`\`${a} ${o[i]} ${b}\` ergibt \`${e}\`.`);
      z.splice(i, 2, e);
      o.splice(i, 1);
    } else i++;
  }
  while (o.length) {
    const a = z[0];
    const b = z[1];
    const e = o[0] === "+" ? jint(a + b) : jint(a - b);
    schritte.push(`\`${a} ${o[0]} ${b}\` ergibt \`${e}\`.`);
    z.splice(0, 2, e);
    o.splice(0, 1);
  }
  return { wert: z[0], schritte };
}

// ---------------------------------------------------------------- Typumwandlungen zählen

type Typ = "int" | "long" | "float" | "double" | "char";
const RANG: Record<Typ, number> = { char: 0, int: 1, long: 2, float: 3, double: 4 };
/** implizit erlaubt (Erweiterung)? char -> int/long/float/double, sonst nur nach rechts in der Kette */
function erweitert(von: Typ, nach: Typ): boolean {
  if (von === nach) return true;
  if (nach === "char") return false;
  return RANG[von] < RANG[nach];
}
const LITERAL: Record<Typ, (r: Rng) => string> = {
  int: (r) => String(r.int(2, 90)),
  long: (r) => `${r.int(2, 90)}L`,
  float: (r) => `${r.int(1, 9)}.${r.int(1, 9)}f`,
  double: (r) => `${r.int(1, 9)}.${r.int(1, 9)}`,
  char: (r) => `'${r.wahl(["a", "k", "x", "Q", "7"])}'`,
};

export const DRILLS: Drill[] = [
  drill({
    id: "au-d-div-rest",
    kapitel: K,
    titel: "Ganzzahldivision und Rest mit Vorzeichen",
    niveau: 1,
    erzeuge: (r) => {
      let a = r.int(11, 70);
      let b = r.int(2, 9);
      while (a % b === 0) a++;
      a *= r.vorzeichen();
      b *= r.vorzeichen();
      const q = jdiv(a, b);
      const m = jmod(a, b);
      const fq = Math.floor(a / b);
      const fm = a - fq * b;
      const loesung = zeilen([q, m]);
      const fehler = fq !== q ? [{ wert: zeilen([fq, fm]), meldung: "Java rundet bei der Ganzzahldivision **zur 0 hin**, nicht nach unten. Der Rest hat dann das Vorzeichen der Zahl, die geteilt wird." }] : [{ wert: zeilen([a / b, m]), meldung: "Beide Operanden sind `int`. Dann ist auch das Ergebnis von `/` ein `int`, der Nachkommaanteil fällt weg." }];
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [{ typ: "ausgabe", code: `int a = ${a}, b = ${b};\nSystem.out.println(a / b);\nSystem.out.println(a % b);`, loesung, fehler }],
        hinweis: "Formel: `a == (a / b) * b + a % b`. Erst `a / b` durch Abschneiden zur 0 hin bestimmen, dann den Rest.",
        loesung: `**Ansatz:** Ganzzahldivision schneidet zur 0 hin ab. Der Rest folgt aus \`a == (a / b) * b + a % b\`.\n---\n${a} geteilt durch ${b} ist etwa ${(a / b).toFixed(2).replace(".", ",")}. Abgeschnitten: \`${q}\`.\n---\nRest: ${a} − (${q}) · (${b}) = \`${m}\`. Das Vorzeichen des Rests ist das von ${a}${m === 0 ? " (hier ist er 0)" : ""}.`,
      };
    },
  }),

  drill({
    id: "au-d-vorrang",
    kapitel: K,
    titel: "Punkt vor Strich mit int",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 5);
      const zahlen = Array.from({ length: n }, () => r.int(2, 20));
      const ops = Array.from({ length: n - 1 }, () => r.wahl(["+", "-", "*", "/", "%"]));
      if (!ops.some((o) => o === "/" || o === "%")) ops[r.int(0, n - 2)] = r.wahl(["/", "%"]);
      if (!ops.some((o) => o === "+" || o === "-")) ops[0] = r.wahl(["+", "-"]);
      const ausdruck = zahlen.map((z, i) => (i === 0 ? `${z}` : `${ops[i - 1]} ${z}`)).join(" ");
      const { wert, schritte } = werteIntAus(zahlen, ops);
      // typischer Fehler: strikt von links nach rechts ohne Vorrang
      let links = zahlen[0];
      ops.forEach((o, i) => {
        const b = zahlen[i + 1];
        links = o === "+" ? links + b : o === "-" ? links - b : o === "*" ? links * b : o === "/" ? jdiv(links, b) : jmod(links, b);
      });
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [{ typ: "ausgabe", code: `System.out.println(${ausdruck});`, loesung: `${wert}\n`, fehler: links !== wert ? [{ wert: `${links}`, meldung: "Du hast strikt von links nach rechts gerechnet. `*`, `/` und `%` werden **vor** `+` und `-` ausgewertet." }] : undefined }],
        hinweis: "Zuerst alle `*`, `/` und `%` von links nach rechts, dann `+` und `-`. Bei `/` den Rest weglassen.",
        loesung: `**Ansatz:** Punktrechnung (\`*\`, \`/\`, \`%\`) vor Strichrechnung, auf jeder Stufe von links nach rechts, alles in \`int\`.\n---\n${schritte.join("\n")}\n---\nAusgabe: \`${wert}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-gemischt",
    kapitel: K,
    titel: "int und double gemischt",
    niveau: 2,
    erzeuge: (r) => {
      let a = r.int(5, 40);
      const b = r.int(2, 8);
      while (a % b === 0) a++;
      const c = r.int(2, 5);
      const z1 = jdiv(a, b) * c;
      const z2 = (a / b) * c;
      const z3 = a / b;
      const z4 = jdiv(a, b);
      const loesung = zeilen([jd(z1), jd(z2), jd(z3), jd(z4)]);
      return {
        angabe: "Was gibt der Ausschnitt aus? Bestimme bei jeder einzelnen Rechnung den Typ.",
        teile: [
          {
            typ: "ausgabe",
            code: `int a = ${a}, b = ${b};\nSystem.out.println(a / b * ${c}.0);\nSystem.out.println(a / (double) b * ${c});\nSystem.out.println((double) a / b);\nSystem.out.println((double) (a / b));`,
            loesung,
            fehler: [{ wert: zeilen([jd(z2), jd(z2), jd(z3), jd(z3)]), meldung: "In Zeile 1 ist `a / b` schon eine Ganzzahldivision, bevor der `double` dazukommt. In Zeile 4 wird erst nach der Ganzzahldivision gecastet." }],
          },
        ],
        hinweis: "`a / b` mit zwei `int` ist ganzzahlig. Ein Cast wirkt nur auf den Wert direkt dahinter.",
        loesung: `**Ansatz:** Jede Operation einzeln: zwei \`int\` ergeben \`int\`, sobald ein Operand \`double\` ist, wird in \`double\` gerechnet.\n---\nZeile 1: \`${a} / ${b} = ${z4}\` (int), dann \`${z4} * ${c}.0 = ${jd(z1)}\`. Zeile 2: \`(double) ${b}\` macht die Division zur Kommadivision: \`${jd(z2)}\`.\n---\nZeile 3: \`(double) a\` ist \`${a}.0\`, also \`${jd(z3)}\`. Zeile 4: Die Klammer rechnet zuerst ganzzahlig \`${z4}\`, der Cast macht daraus \`${jd(z4)}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-casts-zaehlen",
    kapitel: K,
    titel: "Implizite Typumwandlungen zählen",
    niveau: 2,
    erzeuge: (r) => {
      const typen: Typ[] = r.mische(["int", "long", "float", "double", "char"] as Typ[]).slice(0, 4);
      const namen = ["a", "b", "c", "d"];
      const zeilenCode = typen.map((t, i) => `${t} ${namen[i]} = ${LITERAL[t](r)};`);
      const erklaerung: string[] = [];
      let anzahl = 0;
      const n = r.int(3, 4);
      for (let k = 0; k < n; k++) {
        const ziel = r.int(0, 3);
        let quelle = r.int(0, 3);
        if (quelle === ziel) quelle = (quelle + 1) % 4;
        const tz = typen[ziel];
        const tq = typen[quelle];
        if (erweitert(tq, tz)) {
          zeilenCode.push(`${namen[ziel]} = ${namen[quelle]};`);
          anzahl++;
          erklaerung.push(`\`${namen[ziel]} = ${namen[quelle]};\` wandelt \`${tq}\` implizit in \`${tz}\` um (zählt).`);
        } else {
          zeilenCode.push(`${namen[ziel]} = (${tz}) ${namen[quelle]};`);
          erklaerung.push(`\`${namen[ziel]} = (${tz}) ${namen[quelle]};\` ist ein expliziter Cast von \`${tq}\` nach \`${tz}\` (zählt nicht).`);
        }
      }
      return {
        angabe: `Wie viele **implizite** Typumwandlungen finden statt?\n\n\`\`\`java\n${zeilenCode.join("\n")}\n\`\`\``,
        teile: [{ typ: "zahl", loesung: String(anzahl), fehler: [{ wert: String(n), meldung: "Explizite Casts wie `(int) x` zählen nicht als implizit. Zähle nur Zuweisungen ohne Cast, bei denen sich der Typ ändert." }].filter((f) => f.wert !== String(anzahl)) }],
        hinweis: "Kette: `byte → short → int → long → float → double`, dazu `char → int`. Nur Zuweisungen ohne Cast zählen, die Literale am Anfang passen schon.",
        loesung: `**Ansatz:** Die Deklarationen mit passendem Literal enthalten keine Umwandlung. Danach jede Zuweisung prüfen.\n---\n${erklaerung.join("\n")}\n---\nAntwort: **${anzahl}** implizite Typumwandlung${anzahl === 1 ? "" : "en"}.`,
      };
    },
  }),

  drill({
    id: "au-d-cast-ergebnis",
    kapitel: K,
    titel: "Cast nach int: abschneiden",
    niveau: 1,
    erzeuge: (r) => {
      const g1 = r.int(1, 9);
      const g2 = r.int(1, 9);
      let f1 = r.int(1, 9);
      let f2 = r.int(1, 9);
      if (f1 + f2 === 10) f2 = f2 === 9 ? 8 : f2 + 1;
      if (f1 + f2 === 10) f1 = 1;
      const x = Number(`${g1}.${f1}`);
      const y = Number(`${g2}.${f2}`);
      const v1 = Math.trunc(x) + Math.trunc(y);
      const v2 = Math.trunc(x + y);
      const v3 = Math.trunc(-x);
      const loesung = zeilen([v1, v2, v3]);
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `double x = ${x}, y = ${y};\nSystem.out.println((int) x + (int) y);\nSystem.out.println((int) (x + y));\nSystem.out.println((int) -x);`,
            loesung,
            fehler: [
              { wert: zeilen([Math.round(x) + Math.round(y), Math.round(x + y), -Math.round(x)]), meldung: "Ein Cast nach `int` rundet nicht, er schneidet die Nachkommastellen ab." },
              ...(v1 !== v2 ? [{ wert: zeilen([v2, v2, v3]), meldung: "Ohne Klammern wirkt der Cast nur auf den Wert direkt dahinter. In Zeile 1 wird jeder Wert einzeln abgeschnitten." }] : []),
            ].filter((f) => f.wert !== loesung),
          },
        ],
        hinweis: "`(int)` schneidet ab (Richtung 0). Der Cast bindet stärker als `+`.",
        loesung: `**Ansatz:** Bei jedem Cast prüfen, worauf er wirkt, und dann abschneiden.\n---\nZeile 1: \`(int) ${x} = ${Math.trunc(x)}\` und \`(int) ${y} = ${Math.trunc(y)}\`, Summe \`${v1}\`.\n---\nZeile 2: Zuerst \`${x} + ${y}\` (etwa ${(x + y).toFixed(1).replace(".", ",")}), dann abgeschnitten \`${v2}\`. Zeile 3: \`(int) -${x}\` schneidet zur 0 hin ab: \`${v3}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-byte-char",
    kapitel: K,
    titel: "Cast nach byte und char",
    niveau: 3,
    erzeuge: (r) => {
      const v = r.vorzeichen() === 1 ? r.int(128, 400) : -r.int(129, 300);
      const b = (((v + 128) % 256) + 256) % 256 - 128;
      const n = r.int(65, 90);
      const zeichen = String.fromCharCode(n);
      const s = r.int(1, 6);
      return {
        angabe: "Was gibt der Ausschnitt aus? (`'A'` hat die Nummer 65.)",
        teile: [
          {
            typ: "ausgabe",
            code: `int v = ${v};\nSystem.out.println((byte) v);\nSystem.out.println((char) ${n});\nSystem.out.println((char) ${n} + ${s});`,
            loesung: zeilen([b, zeichen, n + s]),
            fehler: [
              { wert: zeilen([v, zeichen, n + s]), meldung: "Ein `byte` reicht nur von −128 bis 127. Der Wert wird um Vielfache von 256 verschoben, bis er hineinpasst." },
              { wert: zeilen([b, zeichen, zeichen + s]), meldung: "Nach `(char) …` folgt `+` mit einer Zahl, ohne String. Das Zeichen wird wieder zur Nummer, und es wird gerechnet." },
            ],
          },
        ],
        hinweis: "Bei `(byte)` so lange 256 addieren oder abziehen, bis der Wert zwischen −128 und 127 liegt. Ein `char` plus `int` ergibt eine Zahl.",
        loesung: `**Ansatz:** Bei \`byte\` bleiben nur die unteren 8 Bit, also wird um Vielfache von 256 verschoben.\n---\n\`(byte) ${v}\`: ${v} ${b > v ? "+" : "−"} ${Math.abs(b - v)} = \`${b}\`, das liegt zwischen −128 und 127.\n---\n\`(char) ${n}\` ist \`${zeichen}\`. Danach \`${zeichen}\` + ${s}: ohne String wird gerechnet, ${n} + ${s} = \`${n + s}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-verkettung",
    kapitel: K,
    titel: "Rechnen oder verketten?",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const b = r.int(2, 9);
      const vorlagen = [
        { code: `"" + a + b`, wert: `${a}${b}`, erkl: `Der leere String steht links, also wird angehängt: \`${a}${b}\`.` },
        { code: `a + b + ""`, wert: `${a + b}`, erkl: `Zuerst \`${a} + ${b} = ${a + b}\` (zwei int), dann wird daraus Text: \`${a + b}\`.` },
        { code: `"" + (a + b)`, wert: `${a + b}`, erkl: `Die Klammer wird zuerst gerechnet: \`${a + b}\`.` },
        { code: `a + "" + b`, wert: `${a}${b}`, erkl: `\`${a} + ""\` ist schon Text, dann wird \`${b}\` angehängt: \`${a}${b}\`.` },
        { code: `a + b + "=" + a + b`, wert: `${a + b}=${a}${b}`, erkl: `Vor dem String wird gerechnet (\`${a + b}\`), danach nur angehängt: \`${a + b}=${a}${b}\`.` },
        { code: `"x" + a * b`, wert: `x${a * b}`, erkl: `\`*\` hat Vorrang: \`${a} * ${b} = ${a * b}\`, dann \`x${a * b}\`.` },
        { code: `a * b + "x" + a`, wert: `${a * b}x${a}`, erkl: `\`${a} * ${b} = ${a * b}\`, dann \`"${a * b}x"\`, dann \`${a}\` angehängt.` },
      ];
      const wahl = r.mische(vorlagen).slice(0, 3);
      const code = `int a = ${a}, b = ${b};\n` + wahl.map((v) => `System.out.println(${v.code});`).join("\n");
      const loesung = zeilen(wahl.map((v) => v.wert));
      const falsch = zeilen(
        wahl.map((v) => (v.wert === `${a}${b}` ? `${a + b}` : v.wert === `${a + b}` && v.code.startsWith("a + b") ? `${a}${b}` : v.wert)),
      );
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [{ typ: "ausgabe", code, loesung, fehler: falsch !== loesung ? [{ wert: falsch, meldung: "Entscheidend ist, wo der erste String steht. Links davon wird gerechnet, ab dort wird nur noch angehängt." }] : undefined }],
        hinweis: "Geh die `+` von links nach rechts durch und notiere nach jedem, ob das Zwischenergebnis Zahl oder Text ist.",
        loesung: `**Ansatz:** \`+\` wird von links nach rechts ausgewertet. Mit einem String als Operand verkettet es, sonst rechnet es.\n---\n${wahl.map((v, i) => `Zeile ${i + 1}: ${v.erkl}`).join("\n")}\n---\nAusgabe:\n\n${textBlock(loesung)}`,
      };
    },
  }),

  drill({
    id: "au-d-char-rechnen",
    kapitel: K,
    titel: "Mit Zeichen rechnen",
    niveau: 2,
    erzeuge: (r) => {
      const klein = r.vorzeichen() === 1;
      const basis = klein ? 97 : 65;
      const pos = r.int(0, 19);
      const c = String.fromCharCode(basis + pos);
      const k = r.int(1, 6);
      const ziffer = r.int(1, 9);
      const anfang = klein ? "a" : "A";
      const loesung = zeilen([basis + pos + k, String.fromCharCode(basis + pos + k), pos, ziffer]);
      return {
        angabe: `Was gibt der Ausschnitt aus? (\`'A'\` hat die Nummer 65, \`'a'\` die Nummer 97, \`'0'\` die Nummer 48.)`,
        teile: [
          {
            typ: "ausgabe",
            code: `char c = '${c}';\nchar z = '${ziffer}';\nSystem.out.println(c + ${k});\nSystem.out.println((char) (c + ${k}));\nSystem.out.println(c - '${anfang}');\nSystem.out.println(z - '0');`,
            loesung,
            fehler: [{ wert: zeilen([String.fromCharCode(basis + pos + k), String.fromCharCode(basis + pos + k), pos, ziffer]), meldung: "`c + " + k + "` ist eine Rechnung ohne String. Das Ergebnis ist eine Zahl, kein Zeichen. Erst `(char)` macht wieder ein Zeichen daraus." }],
          },
        ],
        hinweis: "In einer Rechnung wird ein `char` zu seiner Nummer. Zeichen erscheint nur mit `(char)` oder allein.",
        loesung: `**Ansatz:** Zeichen durch ihre Nummern ersetzen. \`'${c}'\` ist ${basis} + ${pos} = ${basis + pos}.\n---\n\`c + ${k}\` = ${basis + pos + k} (Zahl). \`(char) (c + ${k})\` = \`${String.fromCharCode(basis + pos + k)}\`.\n---\n\`c - '${anfang}'\` = ${basis + pos} − ${basis} = ${pos} (Position im Alphabet ab 0). \`z - '0'\` = ${48 + ziffer} − 48 = ${ziffer}.`,
      };
    },
  }),

  drill({
    id: "au-d-string-methoden",
    kapitel: K,
    titel: "length, charAt, indexOf, substring",
    niveau: 1,
    erzeuge: (r) => {
      const w = r.wahl(WOERTER);
      const i = r.int(1, w.length - 2);
      const a = r.int(0, w.length - 3);
      const b = r.int(a + 1, w.length);
      const ch = w[r.int(1, w.length - 1)];
      const idx = w.indexOf(ch);
      const loesung = zeilen([w.length, w[i], idx, w.substring(a, b)]);
      return {
        angabe: "Was gibt der Ausschnitt aus? Indizes beginnen bei 0.",
        teile: [
          {
            typ: "ausgabe",
            code: `String s = "${w}";\nSystem.out.println(s.length());\nSystem.out.println(s.charAt(${i}));\nSystem.out.println(s.indexOf('${ch}'));\nSystem.out.println(s.substring(${a}, ${b}));`,
            loesung,
            fehler: [
              { wert: zeilen([w.length, w[i - 1], idx + 1, w.substring(a - 1 < 0 ? 0 : a - 1, b)]), meldung: "Du hast ab 1 gezählt. Das erste Zeichen hat den Index 0." },
              { wert: zeilen([w.length, w[i], idx, w.substring(a, Math.min(b + 1, w.length))]), meldung: "`substring(a, b)` endet **vor** Index `b`. Das Zeichen an Index `b` gehört nicht dazu." },
            ].filter((f) => f.wert !== loesung),
          },
        ],
        hinweis: "Schreib die Indizes unter das Wort: erstes Zeichen 0, letztes `length() - 1`.",
        loesung: `**Ansatz:** Indizes notieren: ${[...w].map((x, k) => `${x} ${k}`).join(", ")}.\n---\nLänge \`${w.length}\`, \`charAt(${i})\` ist \`${w[i]}\`, das erste \`${ch}\` steht an Index \`${idx}\`.\n---\n\`substring(${a}, ${b})\` nimmt die Indizes ${a} bis ${b - 1}, also ${b - a} Zeichen: \`${w.substring(a, b)}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-ueberlauf",
    kapitel: K,
    titel: "Überlauf bei int",
    niveau: 3,
    erzeuge: (r) => {
      const k = r.int(1, 9);
      const max = 2147483647;
      const v1 = jint(max + k);
      const a = r.int(47, 99) * 1000;
      const b = r.int(47, 99) * 1000;
      const v2 = jint(Math.imul(a, b));
      const echt = a * b;
      const loesung = zeilen([v1, v2, echt, v2]);
      return {
        angabe: "Was gibt der Ausschnitt aus? Beachte, in welchem Typ jede Rechnung stattfindet.",
        teile: [
          {
            typ: "ausgabe",
            code: `int x = Integer.MAX_VALUE + ${k};\nSystem.out.println(x);\nint p = ${a} * ${b};\nSystem.out.println(p);\nlong q = ${a}L * ${b};\nSystem.out.println(q);\nlong w = ${a} * ${b};\nSystem.out.println(w);`,
            loesung,
            fehler: [{ wert: zeilen([v1, v2, echt, echt]), meldung: "Bei `long w = " + a + " * " + b + ";` sind beide Operanden `int`. Der Überlauf passiert rechts in `int`, bevor der Wert in den `long` kommt." }],
          },
        ],
        hinweis: "`Integer.MAX_VALUE` ist 2 147 483 647. Was darüber hinausgeht, beginnt bei −2 147 483 648. Ein zu großes `int`-Produkt verliert Vielfache von 2 hoch 32 = 4 294 967 296.",
        loesung: `**Ansatz:** Für jede Rechnung den Typ der Operanden bestimmen. Nur mit einem \`long\`-Operanden wird in \`long\` gerechnet.\n---\n\`MAX_VALUE + ${k}\` läuft über: \`${v1}\`.\n---\n${a} · ${b} = ${echt} ist größer als der größte \`int\`. In \`int\` bleibt \`${v2}\` (= ${echt} − ${echt - v2}).\n---\nMit \`${a}L\` wird in \`long\` gerechnet: \`${echt}\`. Bei \`w\` rechnet Java dagegen in \`int\` und erhält wieder \`${v2}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-inkrement",
    kapitel: K,
    titel: "Präfix und Postfix",
    niveau: 3,
    erzeuge: (r) => {
      const x = r.int(2, 9);
      const k = r.int(1, 5);
      let a = x;
      const b = a + k; // b = a++ + k
      a++;
      a++; // ++a
      const c = a * 2;
      const aEnde = a - b;
      const loesung = zeilen([`${aEnde} ${b} ${c}`]);
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `int a = ${x};\nint b = a++ + ${k};\nint c = ++a * 2;\na -= b;\nSystem.out.println(a + " " + b + " " + c);`,
            loesung,
            fehler: [{ wert: `${x + 2 - (x + 1 + k)} ${x + 1 + k} ${c}`, meldung: "`a++` liefert den **alten** Wert. In Zeile 2 geht also " + x + " in die Rechnung ein, erst danach wird `a` erhöht." }],
          },
        ],
        hinweis: "`a++` liefert den alten Wert und erhöht danach, `++a` erhöht zuerst und liefert den neuen Wert.",
        loesung: `**Ansatz:** Für jede Zeile festhalten, welcher Wert in die Rechnung eingeht und wann \`a\` sich ändert.\n---\nZeile 2: \`b = ${x} + ${k} = ${b}\`, danach \`a = ${x + 1}\`.\n---\nZeile 3: \`++a\` macht \`a = ${x + 2}\`, also \`c = ${x + 2} * 2 = ${c}\`. Zeile 4: \`a = ${x + 2} - ${b} = ${aEnde}\`.\n---\nAusgabe: \`${aEnde} ${b} ${c}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-kurzformen",
    kapitel: K,
    titel: "Kurzformen mit versteckten Casts",
    niveau: 2,
    erzeuge: (r) => {
      let k = r.int(5, 30);
      const start = k;
      const schritte: string[] = [];
      const code: string[] = [`int k = ${k};`];
      const ops = r.mische(["+=", "-=", "*=", "/=", "%="]).slice(0, 3);
      ops.splice(r.int(0, 3), 0, "+=d");
      for (const op of ops) {
        if (op === "+=d") {
          const d = Number(`${r.int(1, 4)}.5`);
          const neu = Math.trunc(k + d);
          code.push(`k += ${d};`);
          schritte.push(`\`k += ${d}\`: ${k} + ${d} = ${String(k + d).replace(".", ",")}, der versteckte Cast schneidet ab: ${neu}.`);
          k = neu;
        } else {
          const z = r.int(2, 6);
          const alt = k;
          k = op === "+=" ? k + z : op === "-=" ? k - z : op === "*=" ? k * z : op === "/=" ? jdiv(k, z) : jmod(k, z);
          code.push(`k ${op} ${z};`);
          schritte.push(`\`k ${op} ${z}\` bedeutet \`k = k ${op[0]} ${z}\`: ${alt} ${op[0]} ${z} = ${k}.`);
        }
      }
      code.push("System.out.println(k);");
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [{ typ: "ausgabe", code: code.join("\n"), loesung: `${k}\n` }],
        hinweis: "Schreib jede Kurzform lang aus. `k += 2.5` mit `int k` bedeutet `k = (int) (k + 2.5)`.",
        loesung: `**Ansatz:** Jede Kurzform in die ausführliche Zuweisung übersetzen. Start: \`k = ${start}\`.\n---\n${schritte.join("\n")}\n---\nAusgabe: \`${k}\`.`,
      };
    },
  }),

  drill({
    id: "au-d-math",
    kapitel: K,
    titel: "Ergebnisse von Math-Methoden",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 30);
      const b = r.int(2, 12);
      const w = r.int(2, 15);
      const h = r.int(1, 9) * r.vorzeichen();
      const halb = h + 0.5;
      const rund = Math.floor(halb + 0.5);
      const loesung = zeilen([a, Math.max(a, b), jd(b * b), jd(w), rund]);
      return {
        angabe: "Was gibt der Ausschnitt aus?",
        teile: [
          {
            typ: "ausgabe",
            code: `System.out.println(Math.abs(-${a}));\nSystem.out.println(Math.max(${a}, ${b}));\nSystem.out.println(Math.pow(${b}, 2));\nSystem.out.println(Math.sqrt(${w * w}));\nSystem.out.println(Math.round(${halb}));`,
            loesung,
            fehler: [
              { wert: zeilen([a, Math.max(a, b), b * b, w, rund]), meldung: "`Math.pow` und `Math.sqrt` liefern immer `double`. Sie werden mit `.0` ausgegeben." },
              ...(h < 0 ? [{ wert: zeilen([a, Math.max(a, b), jd(b * b), jd(w), rund - 1]), meldung: "`Math.round` rundet `.5` immer in Richtung der größeren Zahl, auch bei negativen Werten." }] : []),
            ],
          },
        ],
        hinweis: "Achte auf den Rückgabetyp: `pow` und `sqrt` liefern `double`, `round` liefert eine ganze Zahl (`long`).",
        loesung: `**Ansatz:** Wert und Rückgabetyp jeder Methode bestimmen.\n---\n\`abs(-${a}) = ${a}\`, \`max(${a}, ${b}) = ${Math.max(a, b)}\`, \`pow(${b}, 2) = ${jd(b * b)}\`, \`sqrt(${w * w}) = ${jd(w)}\`.\n---\n\`Math.round(${halb})\` rundet \`.5\` in Richtung der größeren Zahl: \`${rund}\`.`,
      };
    },
  }),
];
