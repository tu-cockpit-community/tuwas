import type { Ablauf, Frame, Schritt, SchrittArt, Variable, Wert } from "@/lib/lernen/ablauf/typen";

/**
 * Handgemachte Beispiel-Ablaeufe nach dem Vertrag in lib/lernen/ablauf/typen.ts, fuer Tests und die Vorschau der
 * Ansicht ohne Engine. Die Schritte entstehen mit einem kleinen Bauer, der Zeichenbereiche ueber Textstellen in der
 * Quelle findet (damit `von`/`bis` stimmen, auch wenn jemand die Quelle aendert). Die Werte sind von Hand
 * nachgerechnet; die Erklaersaetze folgen dem Stil, den die Engine liefern soll.
 */

const int = (n: number): Wert => ({ art: "int", text: String(n) });
const str = (s: string): Wert => ({ art: "String", text: s });
const chr = (c: string): Wert => ({ art: "char", text: c });
const arr = (id: number, elementTyp: string, elemente: Wert[]): Wert => ({ art: "array", id, elementTyp, elemente });

interface SchrittEingabe {
  /** Textstelle in der Quelle, die hervorgehoben wird; `ab` sucht ab dieser Stelle (fuer mehrfach vorkommenden Text) */
  stelle: string;
  ab?: string;
  art: SchrittArt;
  fein?: boolean;
  erklaerung: string;
  auswertung?: string[];
  bedingung?: boolean;
  rueckgabe?: string;
  frames: Frame[];
  /** Was dieser Schritt ausgibt */
  aus?: string;
}

function bauer(quelle: string) {
  const schritte: Schritt[] = [];
  let ausgabe = "";
  function bereich(stelle: string, ab?: string): [number, number] {
    const start = ab ? quelle.indexOf(ab) : 0;
    const von = quelle.indexOf(stelle, Math.max(0, start));
    if (start < 0 || von < 0) throw new Error(`Textstelle nicht in der Quelle: ${stelle}`);
    return [von, von + stelle.length];
  }
  return {
    schritt(e: SchrittEingabe) {
      const [von, bis] = bereich(e.stelle, e.ab);
      const neu = e.aus ?? "";
      ausgabe += neu;
      schritte.push({
        zeile: quelle.slice(0, von).split("\n").length,
        von,
        bis,
        art: e.art,
        fein: e.fein ?? false,
        erklaerung: e.erklaerung,
        ...(e.auswertung ? { auswertung: e.auswertung } : {}),
        ...(e.bedingung !== undefined ? { bedingung: e.bedingung } : {}),
        ...(e.rueckgabe !== undefined ? { rueckgabe: e.rueckgabe } : {}),
        frames: e.frames,
        ausgabe,
        neueAusgabe: neu,
      });
    },
    get schritte() {
      return schritte;
    },
    get ausgabe() {
      return ausgabe;
    },
  };
}

const v = (name: string, typ: string, wert: Wert, markierung: Partial<Variable> = {}): Variable => ({ name, typ, wert, ...markierung });
const wahr = (b: boolean) => (b ? "wahr" : "falsch");

// ------------------------------------------------------------------------------------------------------------------
// 1. Dreieck: verschachtelte Schleifen, print vs. println

export const QUELLE_DREIECK = `int n = 3;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
`;

function baueDreieck(): Ablauf {
  const n = 3;
  const b = bauer(QUELLE_DREIECK);
  const main = (zeile: number, variablen: Variable[]): Frame[] => [{ methode: "main", zeile, variablen }];
  const nV = v("n", "int", int(n));
  b.schritt({ stelle: "int n = 3;", art: "anweisung", erklaerung: "`n` wird angelegt und bekommt den Wert 3.", frames: main(1, [{ ...nV, neu: true }]) });
  b.schritt({
    stelle: "int i = 1",
    art: "anweisung",
    erklaerung: "Die äußere Schleife beginnt: `i` wird angelegt und ist 1.",
    frames: main(2, [nV, v("i", "int", int(1), { neu: true })]),
  });
  for (let i = 1; ; i++) {
    const iV = v("i", "int", int(i));
    const ok = i <= n;
    b.schritt({
      stelle: "i <= n",
      art: "ausdruck",
      fein: true,
      auswertung: ["i <= n", `${i} <= ${n}`, String(ok)],
      erklaerung: `\`i\` ist ${i} und \`n\` ist ${n}: \`${i} <= ${n}\` ist ${wahr(ok)}.`,
      frames: main(2, [nV, iV]),
    });
    b.schritt({
      stelle: "i <= n",
      art: "bedingung",
      bedingung: ok,
      erklaerung: ok ? `\`i <= n\` ist wahr (${i} <= ${n}), also läuft der Rumpf der äußeren Schleife.` : `\`i <= n\` ist falsch (${i} <= ${n}).`,
      frames: main(2, [nV, iV]),
    });
    if (!ok) {
      b.schritt({
        stelle: "for (int i = 1; i <= n; i++)",
        art: "schleife",
        erklaerung: `Die äußere Schleife ist zu Ende, weil \`i <= n\` falsch ist. \`i\` gibt es danach nicht mehr.`,
        frames: main(2, [nV]),
      });
      break;
    }
    b.schritt({
      stelle: "for (int i = 1; i <= n; i++)",
      art: "schleife",
      erklaerung: `Durchlauf ${i} der äußeren Schleife beginnt (\`i\` ist ${i}).`,
      frames: main(2, [nV, iV]),
    });
    b.schritt({
      stelle: "int j = 1",
      art: "anweisung",
      erklaerung: "Die innere Schleife beginnt: `j` wird angelegt und ist 1.",
      frames: main(3, [nV, iV, v("j", "int", int(1), { neu: true })]),
    });
    for (let j = 1; ; j++) {
      const jV = v("j", "int", int(j));
      const innenOk = j <= i;
      b.schritt({
        stelle: "j <= i",
        art: "ausdruck",
        fein: true,
        auswertung: ["j <= i", `${j} <= ${i}`, String(innenOk)],
        erklaerung: `\`j\` ist ${j} und \`i\` ist ${i}: \`${j} <= ${i}\` ist ${wahr(innenOk)}.`,
        frames: main(3, [nV, iV, jV]),
      });
      b.schritt({
        stelle: "j <= i",
        art: "bedingung",
        bedingung: innenOk,
        erklaerung: innenOk ? `\`j <= i\` ist wahr (${j} <= ${i}): ein Stern kommt dazu.` : `\`j <= i\` ist falsch (${j} <= ${i}).`,
        frames: main(3, [nV, iV, jV]),
      });
      if (!innenOk) {
        b.schritt({
          stelle: "for (int j = 1; j <= i; j++)",
          art: "schleife",
          erklaerung: `Die innere Schleife ist zu Ende, weil \`j <= i\` falsch ist. In dieser Zeile stehen jetzt ${i} Sterne.`,
          frames: main(3, [nV, iV]),
        });
        break;
      }
      b.schritt({
        stelle: 'System.out.print("*");',
        art: "anweisung",
        erklaerung: '`System.out.print("*")` gibt einen Stern aus, ohne Zeilenumbruch.',
        frames: main(4, [nV, iV, jV]),
        aus: "*",
      });
      b.schritt({
        stelle: "j++",
        art: "anweisung",
        erklaerung: `\`j++\`: \`j\` war ${j}, jetzt ist es ${j + 1}.`,
        frames: main(3, [nV, iV, v("j", "int", int(j + 1), { geaendert: true })]),
      });
    }
    b.schritt({
      stelle: "System.out.println();",
      art: "anweisung",
      erklaerung: "`System.out.println()` beendet die Zeile: die nächste Ausgabe beginnt in einer neuen Zeile.",
      frames: main(6, [nV, iV]),
      aus: "\n",
    });
    b.schritt({
      stelle: "i++",
      art: "anweisung",
      erklaerung: `\`i++\`: \`i\` war ${i}, jetzt ist es ${i + 1}.`,
      frames: main(2, [nV, v("i", "int", int(i + 1), { geaendert: true })]),
    });
  }
  b.schritt({ stelle: "}", ab: "System.out.println();", art: "ende", erklaerung: "Das Programm ist zu Ende.", frames: main(7, [nV]) });
  return { quelle: QUELLE_DREIECK, schritte: b.schritte, ausgabe: b.ausgabe };
}

// ------------------------------------------------------------------------------------------------------------------
// 2. Rekursion: fakultaet(3) mit Aufrufstapel

export const QUELLE_FAKULTAET = `public class Rechnen {
    static int fakultaet(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * fakultaet(n - 1);
    }
}
`;

function baueFakultaet(): Ablauf {
  const b = bauer(QUELLE_FAKULTAET);
  const KOPF = "static int fakultaet(int n)";
  // Stapel als Liste der n-Werte, unterster zuerst; `zeilen` sind die Zeilen, in denen die Frames gerade stehen
  const stapel = (ns: number[], zeilen: number[], neuOben = false): Frame[] =>
    ns.map((n, k) => ({
      methode: "fakultaet(int n)",
      zeile: zeilen[k],
      variablen: [v("n", "int", int(n), neuOben && k === ns.length - 1 ? { neu: true } : {})],
    }));
  const ns: number[] = [];
  const ab = (n: number) => ns.slice(0, ns.indexOf(n) + 1);
  // hinunter: 3, 2, 1
  for (const n of [3, 2, 1]) {
    ns.push(n);
    const zeilenOben = ns.map((_, k) => (k === ns.length - 1 ? 2 : 6));
    b.schritt({
      stelle: KOPF,
      art: "aufruf",
      erklaerung:
        ns.length === 1
          ? "`fakultaet(3)` wird aufgerufen, `n` ist 3."
          : `\`fakultaet(${n})\` wird aufgerufen, \`n\` ist ${n}. Der Aufruf mit \`n\` = ${n + 1} wartet, bis dieser fertig ist.`,
      frames: stapel(ns, zeilenOben, true),
    });
    const zeilen3 = ns.map((_, k) => (k === ns.length - 1 ? 3 : 6));
    const ok = n <= 1;
    b.schritt({
      stelle: "n <= 1",
      art: "ausdruck",
      fein: true,
      auswertung: ["n <= 1", `${n} <= 1`, String(ok)],
      erklaerung: `\`n\` ist ${n}: \`${n} <= 1\` ist ${wahr(ok)}.`,
      frames: stapel(ns, zeilen3),
    });
    b.schritt({
      stelle: "n <= 1",
      art: "bedingung",
      bedingung: ok,
      erklaerung: ok ? "`n <= 1` ist wahr: das ist der Basisfall, die Rekursion hört hier auf." : `\`n <= 1\` ist falsch (${n} <= 1), der \`if\`-Block wird übersprungen.`,
      frames: stapel(ns, zeilen3),
    });
    if (ok) break;
    const zeilen6 = ns.map(() => 6);
    b.schritt({
      stelle: "n - 1",
      art: "ausdruck",
      fein: true,
      auswertung: ["n - 1", `${n} - 1`, String(n - 1)],
      erklaerung: `\`n - 1\` mit \`n\` = ${n}: das Argument für den nächsten Aufruf ist ${n - 1}.`,
      frames: stapel(ns, zeilen6),
    });
  }
  // Basisfall kehrt zurueck
  b.schritt({
    stelle: "return 1;",
    art: "rueckkehr",
    rueckgabe: "1",
    erklaerung: "`fakultaet(1)` gibt 1 zurück. Jetzt kann der wartende Aufruf darüber weiterrechnen.",
    frames: stapel([3, 2, 1], [6, 6, 4]),
  });
  // hinauf: 2, dann 3
  let teil = 1;
  for (const n of [2, 3]) {
    const oben = ab(n);
    const zeilen = oben.map(() => 6);
    b.schritt({
      stelle: "fakultaet(n - 1)",
      art: "ausdruck",
      fein: true,
      auswertung: ["fakultaet(n - 1)", `fakultaet(${n - 1})`, String(teil)],
      erklaerung: `Der Aufruf \`fakultaet(${n - 1})\` hat ${teil} geliefert.`,
      frames: stapel(oben, zeilen),
    });
    const ergebnis = n * teil;
    b.schritt({
      stelle: "n * fakultaet(n - 1)",
      art: "ausdruck",
      fein: true,
      auswertung: ["n * fakultaet(n - 1)", `${n} * ${teil}`, String(ergebnis)],
      erklaerung: `\`n * fakultaet(n - 1)\` mit \`n\` = ${n}: ${n} mal ${teil} ist ${ergebnis}.`,
      frames: stapel(oben, zeilen),
    });
    b.schritt({
      stelle: "return n * fakultaet(n - 1);",
      art: "rueckkehr",
      rueckgabe: String(ergebnis),
      erklaerung: `\`fakultaet(${n})\` gibt ${ergebnis} zurück.`,
      frames: stapel(oben, zeilen),
    });
    teil = ergebnis;
  }
  b.schritt({ stelle: KOPF, art: "ende", erklaerung: "Der Aufruf `fakultaet(3)` ist fertig, das Ergebnis ist 6.", frames: [] });
  return { quelle: QUELLE_FAKULTAET, schritte: b.schritte, ausgabe: b.ausgabe, aufruf: "fakultaet(3)", ergebnis: "6" };
}

// ------------------------------------------------------------------------------------------------------------------
// 3. Arrays, String-Verkettung, char und ein Laufzeitfehler

export const QUELLE_FELDER = `int[] a = {5, 1, 2};
int[][] m = new int[2][3];
String s = "ab";
char c = 'x';
a[0] = a[1] + a[2];
m[1][2] = a[0];
s = s + c;
System.out.println(s + " " + a[0]);
a[3] = 7;
`;

function baueFelder(): Ablauf {
  const b = bauer(QUELLE_FELDER);
  const main = (zeile: number, variablen: Variable[]): Frame[] => [{ methode: "main", zeile, variablen }];
  const zeilen = (werte: number[][], id0: number) => werte.map((z, k) => arr(id0 + k, "int", z.map(int)));
  let aW = arr(1, "int", [5, 1, 2].map(int));
  const m0 = arr(2, "int[]", zeilen([[0, 0, 0], [0, 0, 0]], 3));
  const aV = () => v("a", "int[]", aW);
  const mV = v("m", "int[][]", m0);
  const sV = v("s", "String", str("ab"));
  const cV = v("c", "char", chr("x"));
  b.schritt({ stelle: "int[] a = {5, 1, 2};", art: "anweisung", erklaerung: "Ein Array mit drei Zahlen wird angelegt, `a` zeigt darauf.", frames: main(1, [{ ...aV(), neu: true }]) });
  b.schritt({
    stelle: "int[][] m = new int[2][3];",
    art: "anweisung",
    erklaerung: "`new int[2][3]` legt 2 Zeilen mit je 3 Zellen an. Neue `int`-Zellen sind 0.",
    frames: main(2, [aV(), { ...mV, neu: true }]),
  });
  b.schritt({ stelle: 'String s = "ab";', art: "anweisung", erklaerung: '`s` wird angelegt und ist `"ab"`.', frames: main(3, [aV(), mV, { ...sV, neu: true }]) });
  b.schritt({ stelle: "char c = 'x';", art: "anweisung", erklaerung: "`c` wird angelegt und ist das Zeichen `'x'`.", frames: main(4, [aV(), mV, sV, { ...cV, neu: true }]) });
  b.schritt({
    stelle: "a[1] + a[2]",
    art: "ausdruck",
    fein: true,
    auswertung: ["a[1] + a[2]", "1 + a[2]", "1 + 2", "3"],
    erklaerung: "`a[1]` ist 1 und `a[2]` ist 2. Beide sind `int`, also wird gerechnet: 3.",
    frames: main(5, [aV(), mV, sV, cV]),
  });
  aW = arr(1, "int", [3, 1, 2].map(int));
  b.schritt({
    stelle: "a[0] = a[1] + a[2];",
    art: "anweisung",
    erklaerung: "In die Zelle `a[0]` kommt 3. Die 5, die dort stand, ist überschrieben.",
    frames: main(5, [{ ...aV(), geaendert: true, geaenderteElemente: ["0"] }, mV, sV, cV]),
  });
  const m1 = arr(2, "int[]", zeilen([[0, 0, 0], [0, 0, 3]], 3));
  const mV1 = v("m", "int[][]", m1);
  b.schritt({
    stelle: "m[1][2] = a[0];",
    art: "anweisung",
    erklaerung: "`m[1][2]` ist Zeile 1, Spalte 2. Dort steht jetzt 3, der Wert von `a[0]`.",
    frames: main(6, [aV(), { ...mV1, geaendert: true, geaenderteElemente: ["1,2"] }, sV, cV]),
  });
  b.schritt({
    stelle: "s + c",
    art: "ausdruck",
    fein: true,
    auswertung: ["s + c", "\"ab\" + 'x'", '"abx"'],
    erklaerung: "`+` mit einem String davor: das Zeichen wird angehängt, nicht gerechnet.",
    frames: main(7, [aV(), mV1, sV, cV]),
  });
  const sV1 = v("s", "String", str("abx"));
  b.schritt({ stelle: "s = s + c;", art: "anweisung", erklaerung: '`s` ist jetzt `"abx"`.', frames: main(7, [aV(), mV1, { ...sV1, geaendert: true }, cV]) });
  b.schritt({
    stelle: 's + " " + a[0]',
    art: "ausdruck",
    fein: true,
    auswertung: ['s + " " + a[0]', '"abx" + " " + a[0]', '"abx " + a[0]', '"abx " + 3', '"abx 3"'],
    erklaerung: "Java rechnet von links nach rechts. Links steht schon ein String, deshalb wird die Zahl 3 als Text angehängt.",
    frames: main(8, [aV(), mV1, sV1, cV]),
  });
  b.schritt({
    stelle: 'System.out.println(s + " " + a[0]);',
    art: "anweisung",
    erklaerung: '`System.out.println` gibt `"abx 3"` aus und beendet die Zeile.',
    frames: main(8, [aV(), mV1, sV1, cV]),
    aus: "abx 3\n",
  });
  b.schritt({
    stelle: "a[3] = 7;",
    art: "ende",
    erklaerung: "`a` hat nur die Indizes 0 bis 2. Index 3 gibt es nicht, deshalb bricht das Programm hier ab.",
    frames: main(9, [aV(), mV1, sV1, cV]),
  });
  return {
    quelle: QUELLE_FELDER,
    schritte: b.schritte,
    ausgabe: b.ausgabe,
    fehler: { name: "ArrayIndexOutOfBoundsException", meldung: "Index 3 out of bounds for length 3", zeile: 9 },
  };
}

export const BEISPIEL_DREIECK: Ablauf = baueDreieck();
export const BEISPIEL_FAKULTAET: Ablauf = baueFakultaet();
export const BEISPIEL_FELDER: Ablauf = baueFelder();

export const ABLAUF_BEISPIELE = { dreieck: BEISPIEL_DREIECK, fakultaet: BEISPIEL_FAKULTAET, felder: BEISPIEL_FELDER } as const;
