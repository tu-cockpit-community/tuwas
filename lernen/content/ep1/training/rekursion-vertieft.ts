import { drill, type Drill } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 11 (Rekursion II: Arten, Aufrufbäume und Fraktale). Jede Referenzrechnung bildet
 * die Java-Semantik nach (Ganzzahldivision zur Null hin, Auswertung von links nach rechts, Tiefe zuerst). Der
 * Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "rekursion-vertieft";

/** Java-Ganzzahldivision (rundet zur Null hin) */
const idiv = (a: number, b: number) => Math.trunc(a / b);

/** Fehlerbilder, die zufällig mit der richtigen Antwort übereinstimmen, fallen weg. */
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

/** Eine ganze Klasse mit Methoden und main als Java-Quelltext */
function klasse(name: string, methoden: string, main: string): string {
  return `public class ${name} {\n${methoden}\n\n    public static void main(String[] args) {\n${main}\n    }\n}\n`;
}

const einruecken = (code: string, tiefe: number) =>
  code
    .split("\n")
    .map((z) => (z ? " ".repeat(tiefe) + z : z))
    .join("\n");

const javaBlock = (code: string) => "```java\n" + code + "\n```";

export const DRILLS: Drill[] = [
  drill({
    id: "rv-d-art",
    kapitel: K,
    titel: "Eine rekursive Methode einordnen",
    niveau: 1,
    erzeuge: (r) => {
      const v = r.int(0, 4);
      const k = r.int(2, 4);
      const d = r.int(5, 12);
      const g = r.wahl([50, 80, 100]);
      let rumpf: string;
      let art: 0 | 1 | 2;
      let grund: string;
      if (v === 0) {
        rumpf = `if (n < ${k}) {\n    return 0;\n}\nreturn 1 + f(n / ${k});`;
        art = 0;
        grund = "Es gibt nur einen Selbstaufruf. Jeder Aufruf löst höchstens einen weiteren aus.";
      } else if (v === 1) {
        rumpf = `if (n == 0) {\n    return 0;\n}\nif (n % 2 == 0) {\n    return f(n / 2) + 1;\n}\nreturn f(n - 1) + ${k};`;
        art = 0;
        grund = "Die beiden Selbstaufrufe stehen in verschiedenen Zweigen mit `return`. Ein Durchlauf führt nur einen davon aus.";
      } else if (v === 2) {
        rumpf = `if (n <= 1) {\n    return 1;\n}\nreturn f(n - 1) + f(n - ${k});`;
        art = 1;
        grund = "Im rekursiven Fall stehen zwei Selbstaufrufe im selben Ausdruck. Ein Durchlauf führt beide aus.";
      } else if (v === 3) {
        rumpf = `if (n <= 1) {\n    return n;\n}\nreturn ${k} * f(n - 1) + f(n / 2);`;
        art = 1;
        grund = "`f(n - 1)` und `f(n / 2)` werden im selben Durchlauf nacheinander ausgeführt. Die Multiplikation mit " + k + " ist nur eine Rechnung.";
      } else {
        rumpf = `if (n > ${g}) {\n    return n - ${d};\n}\nreturn f(f(n + ${d + 1}));`;
        art = 2;
        grund = "Im Argument des äußeren Selbstaufrufs steht ein weiterer Selbstaufruf. Das ist das Kennzeichen der verschachtelten Rekursion.";
      }
      const code = `public static int f(int n) {\n${einruecken(rumpf, 4)}\n}`;
      const namen = ["linear", "verzweigt", "verschachtelt"];
      const meldungen = [
        "Bei linearer Rekursion führt jeder Durchlauf höchstens einen Selbstaufruf aus. Prüfe, ob hier zwei im selben Durchlauf passieren oder einer im Argument eines anderen steht.",
        "Verzweigt heißt: Ein Durchlauf führt zwei oder mehr Selbstaufrufe **nebeneinander** aus. Zwei Aufrufe in getrennten Zweigen mit `return` zählen nicht.",
        "Verschachtelt heißt: Ein Selbstaufruf steht **im Argument** eines anderen, etwa `f(f(...))`. Ein Rechenausdruck im Argument genügt nicht.",
      ];
      return {
        angabe: `Ordne die Methode ein.\n\n${javaBlock(code)}`,
        teile: [
          {
            typ: "auswahl",
            optionen: namen,
            richtig: [art],
            fehler: [0, 1, 2].filter((i) => i !== art).map((i) => ({ wert: i, meldung: meldungen[i] })),
          },
        ],
        hinweis: "Zähle, wie viele Selbstaufrufe ein einzelner Durchlauf ausführt, und prüfe, ob einer im Argument eines anderen steht.",
        loesung: `**Ansatz:** Für jeden Zweig zählen, wie viele Selbstaufrufe ein Durchlauf ausführt und wie sie zusammenhängen.\n---\n${grund}\n---\nDie Methode ist also **${namen[art]}** rekursiv.`,
      };
    },
  }),

  drill({
    id: "rv-d-sammel-trace",
    kapitel: K,
    titel: "Den Sammelparameter verfolgen",
    niveau: 1,
    erzeuge: (r) => {
      const v = r.int(0, 1);
      let n: number;
      let rumpf: string;
      let schritt: (n: number, b: number) => [number, number];
      let text: string;
      if (v === 0) {
        n = r.int(4, 6);
        rumpf = "if (n == 0) {\n    return bisher;\n}\nreturn s(n - 1, bisher + n);";
        schritt = (m, b) => [m - 1, b + m];
        text = "Jeder Aufruf addiert sein `n` zum Sammelparameter, bevor der Selbstaufruf startet.";
      } else {
        let z = r.int(1, 9);
        for (let i = 1; i < r.int(3, 4); i++) z = z * 10 + r.int(0, 9);
        n = z;
        rumpf = "if (n == 0) {\n    return bisher;\n}\nreturn s(n / 10, bisher + n % 10);";
        schritt = (m, b) => [idiv(m, 10), b + (m % 10)];
        text = "Jeder Aufruf nimmt die **letzte** Ziffer `n % 10` in den Sammelparameter und streicht sie mit `n / 10`.";
      }
      const zeilen: [number, number][] = [[n, 0]];
      while (zeilen[zeilen.length - 1][0] !== 0) {
        const [m, b] = zeilen[zeilen.length - 1];
        zeilen.push(schritt(m, b));
      }
      const code = `public static int s(int n, int bisher) {\n${einruecken(rumpf, 4)}\n}`;
      // Fehlerbild: Ziffern von vorne statt von hinten (nur bei der Ziffernvariante sinnvoll)
      let fehler: { wert: string[]; meldung: string }[] | undefined;
      if (v === 1) {
        const ziffern = String(n).split("").map(Number);
        const falsch: [number, number][] = [[n, 0]];
        let rest = n;
        let b = 0;
        for (const zf of ziffern) {
          rest = idiv(rest, 10);
          b += zf;
          falsch.push([rest, b]);
        }
        const fw = falsch.flat().map(String);
        if (fw.join("|") !== zeilen.flat().map(String).join("|")) fehler = [{ wert: fw, meldung: "`n % 10` ist die **letzte** Ziffer, nicht die erste. Der Sammelparameter bekommt die Ziffern von hinten nach vorne." }];
      } else {
        const fw = zeilen.map(([m], i) => [m, i === 0 ? 0 : zeilen[i - 1][0]]).flat().map(String);
        if (fw.join("|") !== zeilen.flat().map(String).join("|")) fehler = [{ wert: fw, meldung: "Der Sammelparameter enthält die **ganze** bisherige Summe, nicht nur das letzte `n`. Addiere jeweils zum alten Wert von `bisher`." }];
      }
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\n\`main\` ruft \`s(${n}, 0)\` auf. Trage für jeden Aufruf \`n\` und \`bisher\` ein. Die erste Zeile ist vorgegeben.`,
        teile: [
          {
            typ: "trace",
            spalten: ["n", "bisher"],
            zeilen: zeilen.map((_, i) => `${i + 1}. Aufruf`),
            vorgabe: 1,
            loesung: zeilen,
            fehler,
          },
        ],
        hinweis: text,
        loesung: `**Ansatz:** Endrekursion. Auf dem Hinweg wächst der Sammelparameter, der Basisfall liefert ihn zurück.\n---\nPaare: ${zeilen.map(([m, b]) => `(${m}, ${b})`).join(", ")}.\n---\nDer Basisfall bei \`n = 0\` liefert ${zeilen[zeilen.length - 1][1]}. Auf dem Rückweg wird dieser Wert unverändert weitergereicht.`,
      };
    },
  }),

  drill({
    id: "rv-d-euklid",
    kapitel: K,
    titel: "Der ggT mit Rest als Protokoll",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(20, 99);
      let b = r.int(10, 99);
      while (a === b) b = r.int(10, 99);
      const paare: [number, number][] = [[a, b]];
      while (paare[paare.length - 1][0] % paare[paare.length - 1][1] !== 0) {
        const [n, m] = paare[paare.length - 1];
        paare.push([m, n % m]);
      }
      const ggt = paare[paare.length - 1][1];
      const zeilen = paare.map(([n, m]) => `${n} ${m}`);
      const loesung = [...zeilen, String(ggt)].join("\n") + "\n";
      const methoden = einruecken(
        "public static int ggt(int n, int m) {\n    System.out.println(n + \" \" + m);\n    if (n % m == 0) {\n        return m;\n    }\n    return ggt(m, n % m);\n}",
        4,
      );
      const code = klasse("Euklid", methoden, `        System.out.println(ggt(${a}, ${b}));`);
      const letztesN = paare[paare.length - 1][0];
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: [...zeilen, String(letztesN)].join("\n"), meldung: "Der Basisfall liefert `m`, nicht `n`. Ist `n % m == 0`, dann ist `m` der größte gemeinsame Teiler." },
              { wert: [...zeilen.slice(0, -1), String(ggt)].join("\n"), meldung: "Auch der letzte Aufruf, der im Basisfall endet, gibt zuerst sein Paar aus. Die Ausgabe steht vor der Prüfung." },
            ]),
          },
        ],
        hinweis: "`n % m` ist der Rest. Ist `n` kleiner als `m`, ist der Rest `n` selbst, und die beiden Zahlen tauschen beim nächsten Aufruf die Plätze.",
        loesung: `**Ansatz:** Endrekursion. Jeder Aufruf gibt sein Paar aus, dann prüft er \`n % m == 0\`.\n---\nPaare: ${paare.map(([n, m]) => `(${n}, ${m})`).join(", ")}.\n---\nBeim letzten Paar ist der Rest 0. Der ggT ist ${ggt}, und \`main\` gibt ihn zum Schluss aus.`,
      };
    },
  }),

  drill({
    id: "rv-d-baum-wert",
    kapitel: K,
    titel: "Den Wert einer verzweigten Rekursion berechnen",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(1, 2);
      const k = r.int(2, 3);
      const n = r.int(4, 6);
      const f = (m: number, faktor: number): number => (m <= 1 ? c : f(m - 1, faktor) + faktor * f(m - 2, faktor));
      const wert = f(n, k);
      const ohneFaktor = f(n, 1);
      const nurLinks = f(n - 1, k);
      const werte = Array.from({ length: n + 1 }, (_, i) => f(i, k));
      const code = `public static int f(int n) {\n    if (n <= 1) {\n        return ${c};\n    }\n    return f(n - 1) + ${k} * f(n - 2);\n}`;
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\nWelchen Wert liefert \`f(${n})\`?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(wert),
            fehler: nurFalsche(String(wert), [
              { wert: String(ohneFaktor), meldung: `Der Wert des rechten Kinds wird mit ${k} multipliziert, bevor er addiert wird. Das gilt auf jeder Ebene.` },
              { wert: String(nurLinks), meldung: `Das ist nur \`f(${n - 1})\`, also das linke Kind. Dazu kommt noch ${k} mal \`f(${n - 2})\`.` },
            ]),
          },
        ],
        hinweis: `Rechne von unten: \`f(0)\` und \`f(1)\` liefern ${c}. Jeder weitere Wert braucht die beiden darunter.`,
        loesung: `**Ansatz:** Werte von den Basisfällen aufwärts berechnen, statt den ganzen Baum zu zeichnen.\n---\n${werte
          .slice(2)
          .map((w, i) => `\`f(${i + 2}) = ${werte[i + 1]} + ${k} · ${werte[i]} = ${w}\``)
          .join(", ")}.\n---\nErgebnis: \`f(${n}) = ${wert}\`.`,
      };
    },
  }),

  drill({
    id: "rv-d-aufrufe-tabelle",
    kapitel: K,
    titel: "Aufrufe mit einer Zähltabelle bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.int(2, 3);
      const basis = r.int(1, d);
      const n = r.int(6, 8);
      const A = (m: number): number => (m < basis + 1 ? 1 : 1 + A(m - 1) + A(m - d));
      const L = (m: number): number => (m < basis + 1 ? 1 : L(m - 1) + L(m - d));
      const anzahl = A(n);
      const tabelle = Array.from({ length: n + 1 }, (_, i) => A(i));
      const code = `public static int k(int n) {\n    if (n <= ${basis}) {\n        return 1;\n    }\n    return k(n - 1) + k(n - ${d});\n}`;
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\nWie oft wird \`k\` beim Aufruf \`k(${n})\` insgesamt aufgerufen? Der Aufruf aus \`main\` zählt mit.`,
        teile: [
          {
            typ: "zahl",
            loesung: String(anzahl),
            fehler: nurFalsche(String(anzahl), [
              { wert: String(L(n)), meldung: "Das ist die Zahl der Blätter, also der Aufrufe im Basisfall. Dazu kommen alle inneren Aufrufe." },
              { wert: String(A(n - 1) + A(n - d)), meldung: "Der Aufruf `k(" + n + ")` selbst zählt auch mit. In jeder Zeile der Tabelle steht `1 +` für den Aufruf selbst." },
            ]),
          },
        ],
        hinweis: `Für \`n <= ${basis}\` gibt es genau einen Aufruf. Sonst gilt \`A(n) = 1 + A(n - 1) + A(n - ${d})\`.`,
        loesung: `**Ansatz:** Zähltabelle von unten. Ein Aufruf ist er selbst plus die Aufrufe seiner beiden Teilbäume.\n---\nTabelle für n = 0 bis ${n}: ${tabelle.join(", ")}.\n---\nAlso ruft \`k(${n})\` die Methode insgesamt ${anzahl}-mal auf.`,
      };
    },
  }),

  drill({
    id: "rv-d-aufrufe-gleich",
    kapitel: K,
    titel: "Aufrufe bei gleich großen Teilbäumen",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(2, 3);
      const n = m === 2 ? r.int(3, 6) : r.int(2, 4);
      const ebenen = Array.from({ length: n + 1 }, (_, i) => m ** i);
      const anzahl = ebenen.reduce((a, b) => a + b, 0);
      const aufrufe = Array(m).fill("    f(n - 1);").join("\n");
      const code = `public static void f(int n) {\n    if (n == 0) {\n        return;\n    }\n${aufrufe}\n}`;
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\nWie oft wird \`f\` beim Aufruf \`f(${n})\` insgesamt aufgerufen?`,
        teile: [
          {
            typ: "zahl",
            loesung: ebenen.join(" + "),
            fehler: nurFalsche(String(anzahl), [
              { wert: String(m ** n), meldung: `${m ** n} sind nur die Blätter mit dem Argument 0. Dazu kommen die Aufrufe auf allen Ebenen darüber.` },
              { wert: String(n + 1), meldung: `Das wäre richtig bei **einem** Selbstaufruf. Hier ruft sich jeder Aufruf ${m}-mal auf, die Zahl wächst von Ebene zu Ebene.` },
            ]),
          },
        ],
        hinweis: `Auf jeder Ebene gibt es ${m}-mal so viele Aufrufe wie auf der Ebene darüber.`,
        loesung: `**Ansatz:** Ebene für Ebene zählen. Alle Teilbäume sind gleich groß, also ist der Faktor pro Ebene fest.\n---\nAufrufe je Ebene (Argument ${n} bis 0): ${ebenen.join(", ")}.\n---\nZusammen ${ebenen.join(" + ")} = ${anzahl}.`,
      };
    },
  }),

  drill({
    id: "rv-d-vor-zwischen-nach",
    kapitel: K,
    titel: "Ausgaben vor, zwischen oder nach zwei Selbstaufrufen",
    niveau: 2,
    erzeuge: (r) => {
      const stelle = r.int(0, 2); // 0 vor, 1 zwischen, 2 nach
      const d2 = r.int(1, 2);
      const n = d2 === 1 ? r.int(2, 3) : r.int(3, 4);
      const lauf = (pos: number) => {
        const out: string[] = [];
        const p = (m: number) => {
          if (m <= 0) return;
          if (pos === 0) out.push(String(m));
          p(m - 1);
          if (pos === 1) out.push(String(m));
          p(m - d2);
          if (pos === 2) out.push(String(m));
        };
        p(n);
        return out.join("");
      };
      const ergebnis = lauf(stelle);
      const aus = "    System.out.print(n);";
      const zeilen = ["public static void p(int n) {", "    if (n <= 0) {", "        return;", "    }"];
      if (stelle === 0) zeilen.push(aus);
      zeilen.push("    p(n - 1);");
      if (stelle === 1) zeilen.push(aus);
      zeilen.push(`    p(n - ${d2});`);
      if (stelle === 2) zeilen.push(aus);
      zeilen.push("}");
      const code = klasse("Stelle", einruecken(zeilen.join("\n"), 4), `        p(${n});\n        System.out.println();`);
      const loesung = ergebnis + "\n";
      const namen = ["vor dem ersten Selbstaufruf", "zwischen den Selbstaufrufen", "nach dem zweiten Selbstaufruf"];
      const regel = [
        "Ein Knoten gibt seine Zahl aus, sobald er betreten wird. Die Wurzel kommt zuerst.",
        "Ein Knoten gibt seine Zahl aus, wenn sein linker Teilbaum fertig ist.",
        "Ein Knoten gibt seine Zahl erst aus, wenn beide Teilbäume fertig sind. Die Wurzel kommt zuletzt.",
      ];
      return {
        angabe: "Was gibt das Programm aus? Alle Zahlen stehen ohne Leerzeichen in einer Zeile.",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(
              loesung,
              [0, 1, 2]
                .filter((i) => i !== stelle)
                .map((i) => ({ wert: lauf(i), meldung: `So sähe die Ausgabe aus, wenn sie ${namen[i]} stünde. Hier steht sie ${namen[stelle]}. ${regel[stelle]}` })),
            ),
          },
        ],
        hinweis: `Zeichne den Aufrufbaum von \`p(${n})\`. Aufrufe mit \`n <= 0\` geben nichts aus. Die Ausgabe steht ${namen[stelle]}.`,
        loesung: `**Ansatz:** Aufrufbaum Tiefe zuerst durchlaufen, links \`p(n - 1)\`, rechts \`p(n - ${d2})\`.\n---\n${regel[stelle]}\n---\nAusgabe: \`${ergebnis}\`.`,
      };
    },
  }),

  drill({
    id: "rv-d-startreihenfolge",
    kapitel: K,
    titel: "In welcher Reihenfolge starten die Aufrufe?",
    niveau: 1,
    erzeuge: (r) => {
      const variante = r.wahl([
        { d: 2, basis: 1, n: 3 },
        { d: 3, basis: 2, n: 4 },
        { d: 3, basis: 2, n: 5 },
      ] as const);
      const knoten: { n: number; eltern: number | null }[] = [];
      const lauf = (m: number, eltern: number | null) => {
        knoten.push({ n: m, eltern });
        if (m <= variante.basis) return;
        lauf(m - 1, m);
        lauf(m - variante.d, m);
      };
      lauf(variante.n, null);
      const anzahlGleich = (m: number) => knoten.filter((x) => x.n === m).length;
      const elemente = knoten.map((x) => (anzahlGleich(x.n) > 1 && x.eltern !== null ? `\`k(${x.n})\` aus \`k(${x.eltern})\`` : `\`k(${x.n})\``));
      // Ebene für Ebene (Breitensuche) als typischer Fehler
      const ebenen: number[] = [];
      // Breitensuche über eine neu aufgebaute Baumstruktur
      type Kn = { idx: number; kids: Kn[] };
      let zaehler = 0;
      const baue = (m: number): Kn => {
        const idx = zaehler++;
        if (m <= variante.basis) return { idx, kids: [] };
        const a = baue(m - 1);
        const b = baue(m - variante.d);
        return { idx, kids: [a, b] };
      };
      const wurzel = baue(variante.n);
      const schlange: Kn[] = [wurzel];
      while (schlange.length) {
        const x = schlange.shift()!;
        ebenen.push(x.idx);
        schlange.push(...x.kids);
      }
      const fehler = ebenen.some((v, i) => v !== i)
        ? [{ wert: ebenen, meldung: "Das ist Ebene für Ebene gelesen. Java arbeitet Tiefe zuerst: Ein linker Teilbaum ist ganz fertig, bevor der rechte beginnt." }]
        : undefined;
      const code = `public static int k(int n) {\n    if (n <= ${variante.basis}) {\n        return n;\n    }\n    return k(n - 1) + k(n - ${variante.d});\n}`;
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\nBringe die Aufrufe von \`k(${variante.n})\` in die Reihenfolge, in der sie **starten**. Steht ein Argument mehrfach da, sagt „aus“, welcher Aufruf ihn ausführt.`,
        teile: [{ typ: "reihenfolge", elemente, fehler }],
        hinweis: "Zeichne den Aufrufbaum und gehe ihn Tiefe zuerst durch: immer zuerst ganz nach links unten.",
        loesung: `**Ansatz:** Aufrufbaum zeichnen, links \`k(n - 1)\`, rechts \`k(n - ${variante.d})\`, Basisfall \`n <= ${variante.basis}\`.\n---\nTiefe zuerst: ${knoten.map((x) => `\`k(${x.n})\``).join(", ")}.\n---\nJeder linke Teilbaum ist vollständig abgearbeitet, bevor der rechte Teilbaum desselben Knotens startet.`,
      };
    },
  }),

  drill({
    id: "rv-d-terminierung",
    kapitel: K,
    titel: "Für welche Startwerte endet die Rekursion?",
    niveau: 2,
    erzeuge: (r) => {
      // Schrittweite ab 3: Mit 2 entstünden genau die Terminierungsbeispiele der Vorlesungsfolien.
      const k = r.int(3, 5);
      const g = r.wahl([20, 50, 100]);
      const vorlagen = [
        { basis: "x <= 0", schritt: `x - ${k}`, endet: true, erkl: `\`x <= 0\` kann man mit Schritten von ${k} nicht überspringen.` },
        { basis: "x == 0", schritt: `x - ${k}`, endet: false, erkl: `Von \`x = 1\` aus geht es zu \`${1 - k}\` und weiter nach unten. Die 0 wird übersprungen.` },
        { basis: "x < 0", schritt: `x / ${k}`, endet: false, erkl: `Für \`x >= 0\` ist auch \`x / ${k}\` nie negativ. Bei 0 bleibt die Folge stehen, denn \`0 / ${k}\` ist 0.` },
        { basis: "x <= 0", schritt: `x / ${k}`, endet: true, erkl: `Für positive \`x\` ist \`x / ${k}\` echt kleiner. Die Folge erreicht 0.` },
        { basis: "x == 0", schritt: `x / ${k}`, endet: true, erkl: `Für positive \`x\` wird \`x / ${k}\` echt kleiner und trifft genau 0, weil die Ganzzahldivision bei kleinen Zahlen 0 liefert.` },
        { basis: `x > ${g}`, schritt: "x * 2", endet: false, erkl: "Für `x = 0` ist `0 * 2` wieder 0. Die Folge wächst nie über die Grenze." },
      ];
      const auswahl = r.mische(vorlagen).slice(0, 4);
      const namen = ["a", "b", "c", "d"];
      const code = auswahl
        .map((v, i) => `public static int ${namen[i]}(int x) {\n    if (${v.basis}) {\n        return 0;\n    }\n    return ${namen[i]}(${v.schritt}) + 1;\n}`)
        .join("\n\n");
      const loesungRF = auswahl.map((v) => (v.endet ? "r" : "f"));
      const alleRichtig = auswahl.map(() => "r");
      const fehler = loesungRF.join("") !== alleRichtig.join("") ? [{ wert: alleRichtig, meldung: "Ein Basisfall allein genügt nicht. Prüfe für jede Methode, ob die Folge der Argumente ihn von **jedem** Startwert `x >= 0` aus erreicht. Probiere 0, 1 und eine größere Zahl." }] : undefined;
      return {
        angabe: `Beurteile für jede Methode: Endet sie für **jeden** Startwert \`x >= 0\`? Nimm an, dass der Zahlenbereich von \`int\` nicht überschritten wird.\n\n${javaBlock(code)}`,
        teile: [
          {
            typ: "richtigfalsch",
            aussagen: auswahl.map((v, i) => ({ text: `\`${namen[i]}\` endet für jedes \`x >= 0\`.`, richtig: v.endet, erklaerung: v.erkl })),
            fehler,
          },
        ],
        hinweis: "Schreib für jede Methode die Argumentfolge ab 0, ab 1 und ab einer größeren Zahl auf.",
        loesung: `**Ansatz:** Fundiertheit und Fortschritt prüfen. Erreicht die Folge den Basisfall von jedem Startwert aus, oder kann sie ihn überspringen oder stehen bleiben?\n---\n${auswahl.map((v, i) => `\`${namen[i]}\`: ${v.erkl}`).join(" ")}\n---\nAntworten der Reihe nach: ${auswahl.map((v) => (v.endet ? "richtig" : "falsch")).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "rv-d-fraktal-zaehlen",
    kapitel: K,
    titel: "Formen und Aufrufe eines Fraktals zählen",
    niveau: 2,
    erzeuge: (r) => {
      const kinder = r.int(2, 4);
      const start = r.wahl([64, 96, 128, 160, 200, 256]);
      const grenze = r.wahl([8, 10, 12, 16, 20]);
      const seiten: number[] = [];
      for (let s = start; s >= grenze; s = idiv(s, 2)) seiten.push(s);
      const formenJe = seiten.map((_, i) => kinder ** i);
      const formen = formenJe.reduce((a, b) => a + b, 0);
      const leer = kinder ** seiten.length;
      const aufrufe = formen + leer;
      const letzte = formenJe[formenJe.length - 1];
      const unten = idiv(seiten[seiten.length - 1], 2);
      return {
        angabe: `Eine rekursive Zeichenmethode zeichnet ein Quadrat mit Seite \`s\`, wenn \`s >= ${grenze}\` ist, und ruft sich danach **${kinder}-mal** mit \`s / 2\` auf (Ganzzahldivision). Bei \`s < ${grenze}\` zeichnet sie nichts und endet. \`main\` ruft sie einmal mit \`s = ${start}\` auf.\n\na) Wie viele Quadrate werden gezeichnet?\n\nb) Wie oft wird die Methode insgesamt aufgerufen?`,
        teile: [
          {
            typ: "zahl",
            label: "a) Quadrate",
            loesung: String(formen),
            fehler: nurFalsche(String(formen), [
              { wert: String(letzte), meldung: "Das sind nur die Quadrate auf der letzten Ebene. Die größeren Quadrate darüber kommen dazu." },
              { wert: String(aufrufe), meldung: `Das ist die Zahl der Aufrufe. Die ${leer} Aufrufe mit \`s = ${unten}\` zeichnen nichts.` },
            ]),
          },
          {
            typ: "zahl",
            label: "b) Aufrufe",
            loesung: String(aufrufe),
            fehler: nurFalsche(String(aufrufe), [{ wert: String(formen), meldung: `Auch die Aufrufe mit \`s = ${unten}\` zählen, obwohl sie sofort enden. Davon gibt es ${leer}.` }]),
          },
        ],
        hinweis: `Liste die Seiten Ebene für Ebene auf: ${start}, ${idiv(start, 2)}, … Auf jeder Ebene gibt es ${kinder}-mal so viele Aufrufe wie darüber.`,
        loesung: `**Ansatz:** Ebenen auflisten und pro Ebene mit ${kinder} multiplizieren.\n---\nGezeichnet wird bei ${seiten.join(", ")}: ${formenJe.join(" + ")} = ${formen} Quadrate, davon ${letzte} auf der letzten Ebene.\n---\nDazu kommen ${leer} Aufrufe mit \`s = ${unten}\`. Insgesamt ${aufrufe} Aufrufe.`,
      };
    },
  }),

  drill({
    id: "rv-d-endrekursiv",
    kapitel: K,
    titel: "Welche Zeile ist endrekursiv?",
    niveau: 1,
    erzeuge: (r) => {
      const ja = r.wahl(["return f(n - 1, bisher + n);", "return f(s.substring(1), bisher + 1);", "return g(a - b, b);", "return f(n / 10, bisher * 10 + n % 10);"]);
      const nein = r.mische([
        { z: "return n + f(n - 1);", m: "Nach der Rückkehr muss noch `n +` gerechnet werden." },
        { z: "return f(n - 1) * 2;", m: "Nach der Rückkehr wird das Ergebnis noch mit 2 multipliziert." },
        { z: "return f(n / 10) + n % 10;", m: "Nach der Rückkehr wird noch die letzte Ziffer addiert." },
        { z: "return 1 + f(s.substring(1));", m: "Nach der Rückkehr wird noch 1 addiert." },
        { z: "return f(n - 1) + f(n - 2);", m: "Nach dem ersten Selbstaufruf folgt noch ein zweiter, und danach eine Addition." },
      ]).slice(0, 2);
      const optionen = r.mische([{ z: ja, m: "" }, ...nein]);
      const richtig = optionen.findIndex((o) => o.z === ja);
      return {
        angabe: "Jede Zeile ist die letzte Zeile des rekursiven Falls einer Methode. Welche Methode ist **endrekursiv**?",
        teile: [
          {
            typ: "auswahl",
            optionen: optionen.map((o) => `\`${o.z}\``),
            richtig: [richtig],
            fehler: optionen.map((o, i) => ({ i, o })).filter((x) => x.i !== richtig).map((x) => ({ wert: x.i, meldung: `${x.o.m} Der Selbstaufruf ist also nicht die letzte Aktion.` })),
          },
        ],
        hinweis: "Frag bei jeder Zeile: Passiert nach der Rückkehr aus dem Selbstaufruf noch irgendetwas?",
        loesung: `**Ansatz:** Endrekursiv heißt, das Ergebnis des Selbstaufrufs wird unverändert zurückgegeben, in der Form \`return f(...);\`.\n---\nNur \`${ja}\` hat diese Form. Die eigene Rechnung steckt dort im Argument, also auf dem Hinweg.`,
      };
    },
  }),

  drill({
    id: "rv-d-hanoi",
    kapitel: K,
    titel: "Die Züge der Türme von Hanoi",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(2, 3);
      const [a, b, c] = r.wahl([
        ["A", "B", "C"],
        ["L", "M", "R"],
        ["X", "Y", "Z"],
        ["1", "2", "3"],
      ] as const);
      const zuege = (m: number, von: string, hilf: string, nach: string, out: string[], vertauscht: boolean) => {
        if (m === 0) return;
        if (vertauscht) zuege(m - 1, von, hilf, nach, out, vertauscht);
        else zuege(m - 1, von, nach, hilf, out, vertauscht);
        out.push(`${von} -> ${nach}`);
        zuege(m - 1, hilf, von, nach, out, vertauscht);
      };
      const richtig: string[] = [];
      zuege(n, a, b, c, richtig, false);
      const falsch: string[] = [];
      zuege(n, a, b, c, falsch, true);
      const loesung = richtig.join("\n") + "\n";
      const methoden = einruecken(
        'public static void hanoi(int n, String von, String hilf, String nach) {\n    if (n == 0) {\n        return;\n    }\n    hanoi(n - 1, von, nach, hilf);\n    System.out.println(von + " -> " + nach);\n    hanoi(n - 1, hilf, von, nach);\n}',
        4,
      );
      const code = klasse("Hanoi", methoden, `        hanoi(${n}, "${a}", "${b}", "${c}");`);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: falsch.join("\n"), meldung: "Im ersten Selbstaufruf tauschen `hilf` und `nach` die Plätze: Der Teilturm wandert auf den Hilfsstab. Lies die Reihenfolge der Argumente genau." },
              { wert: [...richtig].reverse().join("\n"), meldung: "Die Reihenfolge ist umgekehrt. Zuerst läuft der erste Selbstaufruf vollständig, mit allen seinen Zügen." },
            ]),
          },
        ],
        hinweis: `Bei \`n = 1\` gibt es genau einen Zug. Ersetze in jedem Aufruf die Parameternamen durch die übergebenen Stäbe. Insgesamt sind es ${2 ** n - 1} Züge.`,
        loesung: `**Ansatz:** Teilturm auf den Hilfsstab, größte Scheibe ziehen, Teilturm auf den Zielstab.\n---\n\`hanoi(${n}, "${a}", "${b}", "${c}")\` ruft zuerst \`hanoi(${n - 1}, "${a}", "${c}", "${b}")\` auf. Diese Züge bringen ${n - 1} Scheibe${n - 1 === 1 ? "" : "n"} von ${a} nach ${b}.\n---\nDann folgt der Zug \`${a} -> ${c}\`, und \`hanoi(${n - 1}, "${b}", "${a}", "${c}")\` bringt den Teilturm von ${b} nach ${c}.\n---\nAlle Züge: ${richtig.map((z) => `\`${z}\``).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "rv-d-ausgaben-zaehlen",
    kapitel: K,
    titel: "Ausgaben einer verzweigten Rekursion zählen",
    niveau: 3,
    erzeuge: (r) => {
      const d2 = r.int(1, 2);
      const n = d2 === 1 ? r.int(4, 6) : r.int(5, 8);
      const ort = r.int(0, 2); // 0: nur Basisfall, 1: nur rekursiver Fall, 2: beide
      const istBasis = (m: number) => m <= 0;
      const zaehle = (m: number): { aufrufe: number; blaetter: number; innen: number } => {
        if (istBasis(m)) return { aufrufe: 1, blaetter: 1, innen: 0 };
        const a = zaehle(m - 1);
        const b = zaehle(m - d2);
        return { aufrufe: 1 + a.aufrufe + b.aufrufe, blaetter: a.blaetter + b.blaetter, innen: 1 + a.innen + b.innen };
      };
      const z = zaehle(n);
      const sterne = ort === 0 ? z.blaetter : ort === 1 ? z.innen : z.aufrufe;
      const basisAus = ort !== 1 ? '        System.out.print("*");\n' : "";
      const innenAus = ort !== 0 ? '    System.out.print("*");\n' : "";
      const code = `public static void s(int n) {\n    if (n <= 0) {\n${basisAus}        return;\n    }\n${innenAus}    s(n - 1);\n    s(n - ${d2});\n}`;
      const wo = ["nur im Basisfall", "nur im rekursiven Fall", "im Basisfall und im rekursiven Fall"][ort];
      const was = ["die Blätter", "die inneren Knoten", "alle Aufrufe"][ort];
      return {
        angabe: `Gegeben ist\n\n${javaBlock(code)}\n\nWie viele Sterne gibt \`s(${n})\` aus?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(sterne),
            fehler: nurFalsche(String(sterne), [
              { wert: String(z.aufrufe), meldung: "Das ist die Zahl aller Aufrufe. Prüfe, in welchem Fall der Stern ausgegeben wird." },
              { wert: String(z.blaetter), meldung: "Das ist die Zahl der Blätter, also der Aufrufe im Basisfall. Prüfe, wo der Stern steht." },
              { wert: String(z.innen), meldung: "Das ist die Zahl der inneren Aufrufe mit `n > 0`. Prüfe, wo der Stern steht." },
            ]),
          },
        ],
        hinweis: `Der Stern steht ${wo}. Zähle also ${was}, am besten mit einer Tabelle von unten.`,
        loesung: `**Ansatz:** Zuerst klären, in welchem Fall ausgegeben wird. Dann mit einer Tabelle die passenden Knoten zählen.\n---\nFür \`s(${n})\` gibt es ${z.aufrufe} Aufrufe: ${z.blaetter} Blätter mit \`n <= 0\` und ${z.innen} innere Aufrufe.\n---\nDer Stern steht ${wo}, also zählen ${was}: ${sterne} Sterne.`,
      };
    },
  }),
];
