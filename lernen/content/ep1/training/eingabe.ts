import { drill, type Drill } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 8 (Eingabe mit Scanner). Jede Referenzrechnung bildet das Verhalten von
 * java.util.Scanner nach: Token werden an Leerraum getrennt, nextLine() liefert den Rest der aktuellen Zeile,
 * hasNextInt() schaut nur. Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "eingabe";

/** Java-Darstellung eines double-Werts im Bereich, den die Generatoren erzeugen (keine Exponentenschreibweise) */
const jdouble = (x: number) => (Number.isInteger(x) ? `${x}.0` : String(x));

/** Java-Ganzzahldivision und -Rest (Richtung 0) */
const idiv = (a: number, b: number) => Math.trunc(a / b);
const irest = (a: number, b: number) => a % b;

/** Ist das Token für Scanner.hasNextInt() eine ganze Zahl? (nur die Formen, die die Generatoren erzeugen) */
const istInt = (t: string) => /^[+-]?\d{1,9}$/.test(t);
const intWert = (t: string) => parseInt(t, 10);

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

/** Eingabe für die Angabe sichtbar machen: jede Zeile in Backticks, leere Zeilen benannt */
function zeigeZeilen(zeilen: string[]): string {
  return zeilen.map((z) => (z === "" ? "(leere Zeile)" : `\`${z}\``)).join(", ");
}

const WOERTER = ["Graz", "Linz", "Wien", "Ada", "Max", "Mia", "Tee", "Code", "Java", "Ball"] as const;
const NICHT_INT = ["drei", "x", "4.5", "7a", "zwei", "1.0", "elf", "-", "ok?", "3,5"] as const;

export const DRILLS: Drill[] = [
  // ------------------------------------------------------------------ Token
  drill({
    id: "ei-d-token-lesen",
    kapitel: K,
    titel: "Wort und Zahlen einlesen",
    niveau: 1,
    erzeuge: (r) => {
      const w = r.wahl(WOERTER);
      const a = r.int(1, 9), b = r.int(1, 9);
      const trenn1 = r.wahl([" ", "  ", "\n", "\n\n"]);
      const trenn2 = r.wahl([" ", "\n", "   "]);
      const stdin = `${w}${trenn1}${a}${trenn2}${b}\n`;
      const loesung = `${w}: ${a + b}\n${w}${a}${b}\n`;
      return {
        angabe: `Die Eingabe besteht aus den Zeichen \`${JSON.stringify(stdin).slice(1, -1)}\` (\`\\n\` ist ein Zeilenumbruch). Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nString w = sc.next();\nint a = sc.nextInt();\nint b = sc.nextInt();\nSystem.out.println(w + ": " + (a + b));\nSystem.out.println(w + a + b);\n`,
            stdin,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${w}: ${a + b}\n${w}${a + b}\n`, meldung: "In der zweiten Zeile steht links ein String. Dann wird jedes `+` zum Anhängen, `a` und `b` werden einzeln angehängt." },
              { wert: `${w}: ${a}${b}\n${w}${a}${b}\n`, meldung: "In der ersten Zeile sorgt die Klammer dafür, dass zuerst gerechnet wird." },
            ]),
          },
        ],
        loesung: `Die Token sind \`${w}\`, \`${a}\` und \`${b}\`. Leerzeichen und Zeilenumbrüche dazwischen werden übersprungen.\n---\nZeile 1: Die Klammer rechnet ${a} + ${b} = ${a + b}, Ausgabe \`${w}: ${a + b}\`.\n---\nZeile 2: Links steht ein String, also wird angehängt: \`${w}${a}${b}\`.`,
      };
    },
  }),

  drill({
    id: "ei-d-leerraum",
    kapitel: K,
    titel: "Zahlen über mehrere Zeilen verteilt",
    niveau: 1,
    erzeuge: (r) => {
      const z = [r.int(1, 9), r.int(0, 9), r.int(0, 9), r.int(1, 9)];
      const trenner = () => r.wahl([" ", "\n", "\n\n", "  ", " \n "]);
      const stdin = `${r.wahl(["", " ", "\n"])}${z[0]}${trenner()}${z[1]}${trenner()}${z[2]}${trenner()}${z[3]}\n`;
      const wert = z[0] * 100 + z[1] * 10 + z[2];
      const zeilen = stdin.replace(/\n$/, "").split("\n");
      return {
        angabe: `Die Eingabe besteht aus den Zeilen ${zeigeZeilen(zeilen)}. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nint b = sc.nextInt();\nint c = sc.nextInt();\nSystem.out.println(a * 100 + b * 10 + c);\n`,
            stdin,
            loesung: `${wert}\n`,
            fehler: nurFalsche(`${wert}\n`, [
              { wert: `${z[1] * 100 + z[2] * 10 + z[3]}\n`, meldung: "Leerraum am Anfang und leere Zeilen werden übersprungen. Das erste Token ist die erste Ziffer der Eingabe." },
              { wert: `${z[0] * 100 + z[1] * 10 + z[3]}\n`, meldung: "Jedes Token wird der Reihe nach gelesen. Zeilenumbrüche trennen nur, sie überspringen kein Token." },
            ]),
          },
        ],
        loesung: `Die Token sind ${z.map((x) => `\`${x}\``).join(", ")}. Zeilen und mehrfache Leerzeichen spielen für \`nextInt()\` keine Rolle.\n---\nGelesen werden die ersten drei: ${z[0]}, ${z[1]}, ${z[2]}. Das Token \`${z[3]}\` bleibt ungelesen.\n---\n${z[0]} · 100 + ${z[1]} · 10 + ${z[2]} = ${wert}.`,
      };
    },
  }),

  // ------------------------------------------------------------------ nextLine
  drill({
    id: "ei-d-nextline-falle",
    kapitel: K,
    titel: "nextLine nach nextInt",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(2, 99);
      const text = r.wahl(["Sankt Poelten", "Der Hobbit", "rote Rosen", "Karlsplatz 13", "Hallo Welt"]);
      const leeren = r.zufall() < 0.5;
      const stdin = `${n}\n${text}\n`;
      const s = leeren ? text : "";
      const loesung = `${n} [${s}]\n`;
      return {
        angabe: `Eingabe (zwei Zeilen): \`${n}\`, dann \`${text}\`. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint n = sc.nextInt();\n${leeren ? "sc.nextLine();\n" : ""}String s = sc.nextLine();\nSystem.out.println(n + " [" + s + "]");\n`,
            stdin,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${n} [${text}]\n`, meldung: "Nach `nextInt()` liegt der Zeilenumbruch noch im Puffer. Ohne Leeren liefert `nextLine()` nur den leeren Rest der ersten Zeile." },
              { wert: `${n} []\n`, meldung: "Hier steht vorher ein allein stehendes `sc.nextLine();`. Es entfernt den Rest der ersten Zeile, danach liest `nextLine()` die zweite Zeile." },
            ]),
          },
        ],
        loesung: `\`nextInt()\` liest ${n} und bleibt vor dem Zeilenumbruch stehen.\n---\n${leeren ? "Das allein stehende `sc.nextLine();` entfernt diesen Zeilenumbruch. Danach steht der Lesezeiger am Anfang der zweiten Zeile." : "Es folgt sofort `nextLine()`. Es liest bis zum Zeilenumbruch, der direkt ansteht, und liefert den leeren String."}\n---\nAlso ist \`s\` gleich \`\"${s}\"\`, und die Ausgabe lautet \`${n} [${s}]\`.`,
      };
    },
  }),

  drill({
    id: "ei-d-rest-der-zeile",
    kapitel: K,
    titel: "Der Rest der Zeile",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(1, 50);
      const [w1, w2, w3, w4] = r.mische(WOERTER);
      const stdin = `${n} ${w1} ${w2}\n${w3} ${w4}\n`;
      const loesung = `[ ${w1} ${w2}]${w3}|[ ${w4}]\n`;
      return {
        angabe: `Eingabe (zwei Zeilen): \`${n} ${w1} ${w2}\` und \`${w3} ${w4}\`. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nString a = sc.nextLine();\nString b = sc.next();\nString c = sc.nextLine();\nSystem.out.println("[" + a + "]" + b + "|[" + c + "]");\n`,
            stdin,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `[${w1} ${w2}]${w3}|[${w4}]\n`, meldung: "`nextLine()` überspringt keinen Leerraum. Das Leerzeichen vor dem ersten Wort gehört zum gelieferten String." },
              { wert: `[]${w1}|[ ${w2}]\n`, meldung: "Nach der Zahl steht in derselben Zeile noch Text. `nextLine()` liefert diesen Rest, nicht den leeren String." },
            ]),
          },
        ],
        loesung: `\`nextInt()\` liest ${n}. \`nextLine()\` liefert den Rest der ersten Zeile: \`" ${w1} ${w2}"\` mit führendem Leerzeichen.\n---\n\`next()\` liest in der zweiten Zeile \`${w3}\`. Das folgende \`nextLine()\` liefert den Rest \`" ${w4}"\`.\n---\nAusgabe: \`[ ${w1} ${w2}]${w3}|[ ${w4}]\`.`,
      };
    },
  }),

  // ------------------------------------------------------------------ hasNextInt
  drill({
    id: "ei-d-summe-gueltig",
    kapitel: K,
    titel: "Nur die ganzen Zahlen zählen",
    niveau: 2,
    erzeuge: (r) => {
      const anzahl = r.int(5, 7);
      const token: string[] = [];
      for (let i = 0; i < anzahl; i++) {
        token.push(r.zufall() < 0.55 ? String(r.int(-9, 30)) : r.wahl(NICHT_INT));
      }
      if (!token.some(istInt)) token[0] = String(r.int(1, 20));
      if (token.every(istInt)) token[token.length - 1] = r.wahl(NICHT_INT);
      const summe = token.filter(istInt).reduce((s, t) => s + intWert(t), 0);
      const ign = token.filter((t) => !istInt(t)).length;
      const stdin = token.join(" ") + "\n";
      const loesung = `Summe: ${summe}, ignoriert: ${ign}\n`;
      const ohneNeg = token.filter((t) => istInt(t) && intWert(t) >= 0).reduce((s, t) => s + intWert(t), 0);
      return {
        angabe: `Eingabe: \`${token.join(" ")}\`. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint summe = 0;\nint ignoriert = 0;\nwhile (sc.hasNext()) {\n    if (sc.hasNextInt()) {\n        summe += sc.nextInt();\n    } else {\n        ignoriert++;\n        sc.next();\n    }\n}\nSystem.out.println("Summe: " + summe + ", ignoriert: " + ignoriert);\n`,
            stdin,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `Summe: ${ohneNeg}, ignoriert: ${ign + token.filter((t) => istInt(t) && intWert(t) < 0).length}\n`, meldung: "Ein Minuszeichen vor den Ziffern ist erlaubt. Negative Zahlen sind gültige ganze Zahlen." },
            ]),
          },
        ],
        loesung: `**Ansatz:** Jedes Token einzeln prüfen: nur Ziffern mit optionalem Vorzeichen ist eine ganze Zahl.\n---\nGanze Zahlen: ${token.filter(istInt).map((t) => `\`${t}\``).join(", ")}. Ignoriert: ${token.filter((t) => !istInt(t)).map((t) => `\`${t}\``).join(", ")}.\n---\nSumme ${summe}, ignoriert ${ign}. Ausgabe: \`Summe: ${summe}, ignoriert: ${ign}\`.`,
      };
    },
  }),

  drill({
    id: "ei-d-validierung-bereich",
    kapitel: K,
    titel: "So lange lesen, bis die Zahl passt",
    niveau: 2,
    erzeuge: (r) => {
      const lo = r.int(1, 20);
      const hi = lo + r.int(5, 30);
      const token: string[] = [];
      const n = r.int(2, 4);
      for (let i = 0; i < n; i++) {
        const art = r.int(0, 2);
        if (art === 0) token.push(r.wahl(NICHT_INT));
        else if (art === 1) token.push(String(r.int(hi + 1, hi + 40)));
        else token.push(String(r.int(lo - 30, lo - 1)));
      }
      const gut = r.int(lo, hi);
      token.push(String(gut));
      token.push(String(r.int(lo, hi)));
      const zeilen: string[] = [];
      for (let i = 0; i < token.length - 1; i++) {
        const t = token[i];
        if (!istInt(t)) zeilen.push(`Typ: ${t}`);
        else if (intWert(t) < lo || intWert(t) > hi) zeilen.push(`Bereich: ${intWert(t)}`);
      }
      zeilen.push(`Gelesen: ${gut}`);
      const loesung = zeilen.join("\n") + "\n";
      const letzte = token[token.length - 1];
      return {
        angabe: `Eingabe: \`${token.join(" ")}\`. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint x = 0;\nboolean ok = false;\nwhile (!ok) {\n    if (sc.hasNextInt()) {\n        x = sc.nextInt();\n        if (x >= ${lo} && x <= ${hi}) {\n            ok = true;\n        } else {\n            System.out.println("Bereich: " + x);\n        }\n    } else {\n        System.out.println("Typ: " + sc.next());\n    }\n}\nSystem.out.println("Gelesen: " + x);\n`,
            stdin: token.join(" ") + "\n",
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: zeilen.slice(0, -1).join("\n") + (zeilen.length > 1 ? "\n" : "") + `Gelesen: ${letzte}\n`, meldung: "Die Schleife endet bei der **ersten** gültigen Zahl. Was danach kommt, wird nicht mehr gelesen." },
            ]),
          },
        ],
        loesung: `**Ansatz:** Token für Token: kein \`int\` ergibt eine \`Typ\`-Meldung, ein \`int\` außerhalb von [${lo}, ${hi}] eine \`Bereich\`-Meldung.\n---\n${zeilen.slice(0, -1).length ? zeilen.slice(0, -1).map((z) => `\`${z}\``).join(", ") : "Keine Meldung"}.\n---\n\`${gut}\` liegt in [${lo}, ${hi}], die Schleife endet. Ausgabe \`Gelesen: ${gut}\`. Das letzte Token bleibt ungelesen.`,
      };
    },
  }),

  // ------------------------------------------------------------------ Zeichen
  drill({
    id: "ei-d-operator",
    kapitel: K,
    titel: "Genau ein Operator",
    niveau: 2,
    erzeuge: (r) => {
      const schlecht = r.mische(["plus", "+-", "", "x", "**", " +", "%%", "/ "]).slice(0, r.int(1, 3));
      const op = r.wahl(["+", "-", "*", "/", "%"]);
      const zeilen = [...schlecht, op];
      const ausgabe = schlecht.map((z) => `Ungueltig: [${z}]`).concat(`Operator: ${op}`);
      const loesung = ausgabe.join("\n") + "\n";
      const ersterGueltigOhneLaenge = zeilen.find((z) => z.length >= 1 && "+-*/%".includes(z[0]))!;
      return {
        angabe: `Eingabe (${zeilen.length} Zeilen): ${zeigeZeilen(zeilen)}. Leerzeichen gehören zur Zeile. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nString zeile = sc.nextLine();\nwhile (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {\n    System.out.println("Ungueltig: [" + zeile + "]");\n    zeile = sc.nextLine();\n}\nSystem.out.println("Operator: " + zeile.charAt(0));\n`,
            stdin: zeilen.join("\n") + "\n",
            loesung,
            fehler: nurFalsche(loesung, [
              {
                wert: zeilen.slice(0, zeilen.indexOf(ersterGueltigOhneLaenge)).map((z) => `Ungueltig: [${z}]`).concat(`Operator: ${ersterGueltigOhneLaenge[0]}`).join("\n") + "\n",
                meldung: "Gültig ist nur eine Zeile mit **genau einem** Zeichen. Eine Zeile wie `+-` oder ` +` wird trotz Operator abgelehnt.",
              },
            ]),
          },
        ],
        loesung: `**Ansatz:** Jede Zeile auf Länge 1 und erlaubtes Zeichen prüfen.\n---\n${schlecht.map((z) => `\`[${z}]\` hat Länge ${z.length}${z.length === 1 ? " und ist kein Operator" : ""}`).join(". ")}. Diese Zeilen werden gemeldet.\n---\n\`${op}\` hat Länge 1 und ist erlaubt. Ausgabe \`Operator: ${op}\`.`,
      };
    },
  }),

  drill({
    id: "ei-d-weiter",
    kapitel: K,
    titel: "Weiter oder beenden?",
    niveau: 1,
    erzeuge: (r) => {
      const schlecht = r.mische(["ja", "cc", "quit", "", "x", "Q ", "nein"]).slice(0, r.int(1, 3));
      const gut = r.wahl(["c", "C", "q", "Q"]);
      const zeilen = [...schlecht, gut];
      const weiter = gut === "c" || gut === "C";
      const loesung = schlecht.map(() => "Bitte q/Q oder c/C.").concat(`weiter: ${weiter}`).join("\n") + "\n";
      return {
        angabe: `Eingabe (${zeilen.length} Zeilen): ${zeigeZeilen(zeilen)}. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nString z = sc.nextLine();\nwhile (!(z.equals("q") || z.equals("Q") || z.equals("c") || z.equals("C"))) {\n    System.out.println("Bitte q/Q oder c/C.");\n    z = sc.nextLine();\n}\nSystem.out.println("weiter: " + (z.equals("c") || z.equals("C")));\n`,
            stdin: zeilen.join("\n") + "\n",
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: schlecht.map(() => "Bitte q/Q oder c/C.").concat(`weiter: ${!weiter}`).join("\n") + "\n", meldung: "`weiter` ist nur bei `c` oder `C` wahr. `q` und `Q` beenden." },
            ]),
          },
        ],
        loesung: `Ungültig sind ${schlecht.map((z) => (z === "" ? "die leere Zeile" : `\`${z}\``)).join(", ")}: je eine Meldung.\n---\n\`${gut}\` ist gültig. ${weiter ? "Bei `c` oder `C` ist das Ergebnis `true`." : "Bei `q` oder `Q` ist das Ergebnis `false`."}`,
      };
    },
  }),

  drill({
    id: "ei-d-rechner",
    kapitel: K,
    titel: "Eine Taschenrechner-Zeile",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(1, 60);
      const b = r.int(1, 12);
      const op = r.wahl(["+", "-", "*", "/", "%"]);
      const erg =
        op === "+" ? String(a + b) : op === "-" ? String(a - b) : op === "*" ? String(a * b) : op === "/" ? jdouble(a / b) : String(irest(a, b));
      const loesung = `${a} ${op} ${b} = ${erg}\n`;
      // Fehlerbild nur dort, wo es eine echte Fehlvorstellung gibt: Ganzzahldivision, % als Division, + als Anhängen.
      // Bei * und - gibt es kein passendes Fehlerbild (ohne Klammer würde a - b gar nicht kompilieren).
      const falsch = op === "/" ? String(idiv(a, b)) : op === "%" ? jdouble(a / b) : op === "+" ? `${a}${b}` : null;
      return {
        angabe: `Eingabe: \`${a} ${b} ${op}\` in einer Zeile. Was gibt der Code aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `Scanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nint b = sc.nextInt();\nchar op = sc.next().charAt(0);\nif (op == '/') {\n    System.out.println(a + " / " + b + " = " + (double) a / b);\n} else if (op == '%') {\n    System.out.println(a + " % " + b + " = " + a % b);\n} else if (op == '*') {\n    System.out.println(a + " * " + b + " = " + a * b);\n} else if (op == '-') {\n    System.out.println(a + " - " + b + " = " + (a - b));\n} else {\n    System.out.println(a + " + " + b + " = " + (a + b));\n}\n`,
            stdin: `${a} ${b} ${op}\n`,
            loesung,
            fehler: falsch === null ? undefined : nurFalsche(loesung, [
              {
                wert: `${a} ${op} ${b} = ${falsch}\n`,
                meldung:
                  op === "/"
                    ? "`(double) a / b` rechnet mit Kommastellen. Die Ganzzahldivision würde den Rest abschneiden."
                    : op === "%"
                      ? "`%` ist der Rest der Division, nicht die Division selbst."
                      : "Die Klammer um die Rechnung sorgt dafür, dass zuerst gerechnet und dann angehängt wird.",
              },
            ]),
          },
        ],
        loesung: `Die Token sind \`${a}\`, \`${b}\` und \`${op}\`. \`next().charAt(0)\` liefert das Zeichen \`'${op}'\`.\n---\n${op === "/" ? `\`(double) ${a} / ${b}\` ergibt den \`double\`-Wert ${erg}.` : op === "%" ? `${a} geteilt durch ${b} ergibt den Rest ${erg}.` : `Gerechnet wird ${a} ${op} ${b} = ${erg}.`}\n---\nAusgabe: \`${a} ${op} ${b} = ${erg}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------------ Random
  drill({
    id: "ei-d-zufall-grenzen",
    kapitel: K,
    titel: "Wertebereich einer Zufallszahl",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(2, 20);
      const a = r.int(-10, 30);
      const ausdruck = a === 0 ? `rnd.nextInt(${n})` : a > 0 ? `rnd.nextInt(${n}) + ${a}` : `rnd.nextInt(${n}) - ${-a}`;
      return {
        angabe: `\`rnd\` ist ein \`Random\`-Objekt. Welche Werte kann \`${ausdruck}\` liefern? Gib den kleinsten und den größten möglichen Wert an.`,
        teile: [
          { typ: "zahl", label: "kleinster Wert", loesung: String(a), fehler: [{ wert: String(a + 1), meldung: "`nextInt(n)` kann auch 0 liefern." }] },
          { typ: "zahl", label: "größter Wert", loesung: String(n - 1 + a), fehler: [{ wert: String(n + a), meldung: `\`nextInt(${n})\` liefert höchstens ${n - 1}. Die Schranke ist ausgeschlossen.` }] },
        ],
        loesung: `\`rnd.nextInt(${n})\` liefert 0 bis ${n - 1}.\n---\nVerschoben um ${a}: kleinster Wert ${a}, größter Wert ${n - 1 + a}.`,
      };
    },
  }),

  drill({
    id: "ei-d-zufall-ausdruck",
    kapitel: K,
    titel: "Der richtige Zufallsausdruck",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 40);
      const b = a + r.int(3, 60);
      const richtig = `\`rnd.nextInt(${b - a + 1}) + ${a}\``;
      const f1 = `\`rnd.nextInt(${b - a}) + ${a}\``;
      const f2 = `\`rnd.nextInt(${b}) + ${a}\``;
      const optionen = r.mische([richtig, f1, f2]);
      return {
        angabe: `Welcher Ausdruck liefert eine Zufallszahl aus dem geschlossenen Intervall [${a}, ${b}]? \`rnd\` ist ein \`Random\`-Objekt.`,
        teile: [
          {
            typ: "auswahl",
            optionen,
            richtig: [optionen.indexOf(richtig)],
            fehler: [
              { wert: optionen.indexOf(f1), meldung: `\`nextInt(${b - a})\` liefert höchstens ${b - a - 1}. Plus ${a} ergibt höchstens ${b - 1}, die obere Grenze fehlt.` },
              { wert: optionen.indexOf(f2), meldung: `\`nextInt(${b}) + ${a}\` kann bis ${b - 1 + a} gehen, also über ${b} hinaus.` },
            ],
          },
        ],
        loesung: `Das Intervall hat ${b} − ${a} + 1 = ${b - a + 1} Zahlen.\n---\n\`rnd.nextInt(${b - a + 1})\` liefert 0 bis ${b - a}. Plus ${a} ergibt ${a} bis ${b}.`,
      };
    },
  }),

  drill({
    id: "ei-d-ratespiel",
    kapitel: K,
    titel: "Eine Runde Ratespiel",
    niveau: 2,
    erzeuge: (r) => {
      const geheim = r.int(10, 110);
      const max = r.int(3, 5);
      const token: string[] = [];
      const ausgabe: string[] = [];
      let versuche = 0;
      let erraten = false;
      let lo = 0, hi = 120;
      const gewinnen = r.zufall() < 0.5;
      while (!erraten && versuche < max) {
        if (r.zufall() < 0.3) {
          const t = r.wahl(["abc", "4.5", "-3", "150", "elf", "121"]);
          token.push(t);
          ausgabe.push(`Ungueltig: ${t}`);
          continue;
        }
        let tipp: number;
        if (gewinnen && versuche === max - 1) tipp = geheim;
        else {
          // Bereich nur verengen, solange er neben der geheimen Zahl noch andere Kandidaten hat
          const [u, o] = hi > lo ? [lo, hi] : [0, 120];
          do {
            tipp = r.int(u, o);
          } while (tipp === geheim);
        }
        token.push(String(tipp));
        versuche++;
        if (tipp < geheim) {
          ausgabe.push("Groesser!");
          lo = Math.max(lo, tipp + 1);
        } else if (tipp > geheim) {
          ausgabe.push("Kleiner!");
          hi = Math.min(hi, tipp - 1);
        } else erraten = true;
      }
      token.push(String(r.int(0, 120)));
      ausgabe.push(erraten ? `Gewonnen nach ${versuche} Versuchen!` : `Verloren! Gesucht war ${geheim}.`);
      const loesung = ausgabe.join("\n") + "\n";
      const ungueltigAlsVersuch = token.filter((t) => !istInt(t) || intWert(t) < 0 || intWert(t) > 120).length;
      return {
        angabe: `Die geheime Zahl ist ${geheim}, es gibt ${max} Versuche. Eingabe: \`${token.join(" ")}\`. Was gibt das Programm aus?`,
        teile: [
          {
            typ: "ausgabe",
            code: `import java.util.Scanner;\n\npublic class Runde {\n    public static int readGuess(Scanner sc) {\n        while (true) {\n            if (!sc.hasNextInt()) {\n                System.out.println("Ungueltig: " + sc.next());\n            } else {\n                int tipp = sc.nextInt();\n                if (tipp >= 0 && tipp <= 120) {\n                    return tipp;\n                }\n                System.out.println("Ungueltig: " + tipp);\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int geheim = ${geheim};\n        int versuche = 0;\n        boolean erraten = false;\n        while (!erraten && versuche < ${max}) {\n            int tipp = readGuess(sc);\n            versuche++;\n            if (tipp < geheim) {\n                System.out.println("Groesser!");\n            } else if (tipp > geheim) {\n                System.out.println("Kleiner!");\n            } else {\n                erraten = true;\n            }\n        }\n        if (erraten) {\n            System.out.println("Gewonnen nach " + versuche + " Versuchen!");\n        } else {\n            System.out.println("Verloren! Gesucht war " + geheim + ".");\n        }\n    }\n}\n`,
            stdin: token.join(" ") + "\n",
            loesung,
          },
        ],
        hinweis: "Ungültige Eingaben werden in readGuess gemeldet und kosten keinen Versuch.",
        loesung: `**Ansatz:** Token durchgehen. Ungültige werden gemeldet, gültige mit ${geheim} verglichen und gezählt.\n---\n${ausgabe.slice(0, -1).map((z) => `\`${z}\``).join(", ")}.${ungueltigAlsVersuch ? ` Die ${ungueltigAlsVersuch} ungültigen Eingaben kosten keinen Versuch.` : ""}\n---\n${erraten ? `Im Versuch ${versuche} wird ${geheim} getroffen: \`${ausgabe[ausgabe.length - 1]}\`.` : `Nach ${max} gültigen Tipps ist Schluss: \`${ausgabe[ausgabe.length - 1]}\`.`} Das letzte Token bleibt ungelesen.`,
      };
    },
  }),
];
