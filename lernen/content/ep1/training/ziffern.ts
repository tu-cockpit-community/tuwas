import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 7 (Zahlen zerlegen). Die Referenzrechnungen bilden Java-Semantik nach:
 * Ganzzahldivision rundet zur Null hin (Math.trunc), der Rest hat das Vorzeichen des Dividenden (wie % in JS).
 * Alle Werte bleiben klein genug, dass kein int-Überlauf entsteht. Der Validator führt die ersten Seeds jedes
 * `ausgabe`-Teils mit echtem Java aus.
 */

const K = "ziffern";

/** Java-Ganzzahldivision (rundet zur Null hin) */
const idiv = (a: number, b: number) => Math.trunc(a / b);

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

/** Ziffern von rechts nach links (für n >= 0; 0 hat keine Ziffern in der while-Schleife) */
function ziffernVonRechts(n: number): number[] {
  const z: number[] = [];
  while (n > 0) {
    z.push(n % 10);
    n = idiv(n, 10);
  }
  return z;
}

const quersumme = (n: number) => ziffernVonRechts(n).reduce((s, z) => s + z, 0);
const quadratsumme = (n: number) => ziffernVonRechts(n).reduce((s, z) => s + z * z, 0);
const umkehrzahl = (n: number) => ziffernVonRechts(n).reduce((r, z) => r * 10 + z, 0);

/** zufällige Zahl mit genau `stellen` Ziffern */
function zahlMitStellen(r: Rng, stellen: number): number {
  return r.int(10 ** (stellen - 1), 10 ** stellen - 1);
}

/** Zahl, die mit Wahrscheinlichkeit p mindestens eine 0 enthält */
function zahlMitNull(r: Rng, stellen: number): number {
  const z = Array.from({ length: stellen }, (_, i) => (i === 0 ? r.int(1, 9) : r.int(0, 9)));
  if (r.zufall() < 0.6) z[r.int(1, stellen - 1)] = 0;
  return Number(z.join(""));
}

export const DRILLS: Drill[] = [
  // ------------------------------------------------------------ 1 Quersumme
  drill({
    id: "zi-d-quersumme",
    kapitel: K,
    titel: "Quersumme mit der Ziffernschleife",
    niveau: 1,
    erzeuge: (r) => {
      const n = zahlMitNull(r, r.int(3, 6));
      const z = ziffernVonRechts(n);
      const qs = quersumme(n);
      // typischer Fehler: erst geteilt, dann gelesen
      let m = n,
        falsch = 0;
      while (m > 0) {
        m = idiv(m, 10);
        falsch += m % 10;
      }
      const code = `int n = ${n};
int summe = 0;
while (n > 0) {
    summe = summe + n % 10;
    n = n / 10;
}
System.out.println(summe);
`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${qs}\n`,
            fehler: nurFalsche(String(qs), [
              { wert: String(falsch), meldung: "Hast du zuerst geteilt und dann gelesen? Im Code steht erst `n % 10`, dann `n / 10`. Die letzte Ziffer zählt mit." },
              { wert: String(z.length), meldung: "Das ist die Anzahl der Ziffern. Gefragt ist ihre Summe." },
            ]),
          },
        ],
        hinweis: "Die Schleife addiert jede Ziffer einmal, von rechts nach links.",
        loesung: `**Ansatz:** Ziffernschleife: letzte Ziffer addieren, dann abschneiden.\n---\nZiffern von rechts: ${z.join(", ")}.\n---\nSumme ${z.join(" + ")} = ${qs}. Ausgabe \`${qs}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------ 2 Ziffern zählen
  drill({
    id: "zi-d-ziffern-zaehlen",
    kapitel: K,
    titel: "Ziffern zählen mit while oder do-while",
    niveau: 1,
    erzeuge: (r) => {
      const doWhile = r.zufall() < 0.5;
      const n = r.zufall() < 0.3 ? 0 : zahlMitStellen(r, r.int(1, 7));
      const stellen = n === 0 ? 1 : String(n).length;
      const ergebnis = n === 0 && !doWhile ? 0 : stellen;
      const schleife = doWhile
        ? `do {
    c++;
    n = n / 10;
} while (n > 0);`
        : `while (n > 0) {
    c++;
    n = n / 10;
}`;
      const code = `int n = ${n};
int c = 0;
${schleife}
System.out.println(c);
`;
      const schritte =
        n === 0
          ? doWhile
            ? "Der Rumpf der do-while-Schleife läuft einmal, bevor `0 > 0` geprüft wird. Also ist `c = 1`."
            : "Schon der erste Test `0 > 0` ist falsch. Die while-Schleife läuft gar nicht, `c` bleibt 0."
          : `Jeder Durchlauf schneidet eine Ziffer ab. ${n} hat ${stellen} Ziffern, also gibt es ${stellen} Durchläufe.`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${ergebnis}\n`,
            fehler: nurFalsche(String(ergebnis), [
              {
                wert: String(n === 0 ? 1 - ergebnis : stellen - 1),
                meldung:
                  n === 0
                    ? "Achte auf die Schleifenart: Eine while-Schleife prüft vor dem ersten Durchlauf, eine do-while-Schleife erst danach."
                    : "Auch die vorderste Ziffer bekommt einen Durchlauf. Die Schleife endet erst, wenn `n` 0 ist.",
              },
            ]),
          },
        ],
        hinweis: doWhile ? "Eine do-while-Schleife führt den Rumpf mindestens einmal aus." : "Eine while-Schleife prüft die Bedingung vor jedem Durchlauf, auch vor dem ersten.",
        loesung: `**Ansatz:** Durchläufe zählen. Jeder Durchlauf entfernt eine Ziffer.\n---\n${schritte}\n---\nAusgabe \`${ergebnis}\`.${n === 0 && !doWhile ? " Die Zahl 0 hat eigentlich eine Ziffer. Dafür braucht man do-while." : ""}`,
      };
    },
  }),

  // ------------------------------------------------------------ 3 Ziffer an einer Stelle
  drill({
    id: "zi-d-kte-ziffer",
    kapitel: K,
    titel: "Eine bestimmte Ziffer und die letzten Ziffern",
    niveau: 1,
    erzeuge: (r) => {
      const n = zahlMitStellen(r, r.int(5, 7));
      const k = r.int(1, 3);
      const d = 10 ** k;
      const a = idiv(n, d) % 10;
      const b = n % d;
      const c = idiv(n, d);
      const namen = ["", "Zehner", "Hunderter", "Tausender"];
      const code = `int n = ${n};
System.out.println(n / ${d} % 10);
System.out.println(n % ${d});
System.out.println(n / ${d});
`;
      const loes = `${a}\n${b}\n${c}`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${a}\n${c}\n${b}`, meldung: `\`% ${d}\` behält die letzten ${k} Ziffern, \`/ ${d}\` schneidet sie ab. Du hast die beiden vertauscht.` },
              { wert: `${n % 10}\n${b}\n${c}`, meldung: `Das ist die Einerziffer. \`n / ${d}\` schneidet zuerst ${k} Ziffer${k > 1 ? "n" : ""} rechts ab. Erst danach liefert \`% 10\` die letzte Ziffer der verkürzten Zahl.` },
            ]),
          },
        ],
        hinweis: `Durch ${d} teilen schneidet ${k} Ziffer${k > 1 ? "n" : ""} rechts ab. Der Rest bei ${d} sind die letzten ${k} Ziffer${k > 1 ? "n" : ""}.`,
        loesung: `**Ansatz:** \`/ ${d}\` entfernt die letzten ${k} Ziffern, \`% ${d}\` behält genau diese.\n---\n\`${n} / ${d} = ${c}\`, davon die letzte Ziffer \`${c} % 10 = ${a}\`. Das ist die ${namen[k]}ziffer.\n---\n\`${n} % ${d} = ${b}\` und \`${n} / ${d} = ${c}\`. Probe: ${c} · ${d} + ${b} = ${n}.`,
      };
    },
  }),

  // ------------------------------------------------------------ 4 Trace Quersumme
  drill({
    id: "zi-d-trace-quersumme",
    kapitel: K,
    titel: "Ziffernschleife in der Tabelle verfolgen",
    niveau: 2,
    erzeuge: (r) => {
      const n = zahlMitNull(r, r.int(3, 5));
      const zeilen: [number, number][] = [[n, 0]];
      let m = n,
        s = 0;
      while (m > 0) {
        s += m % 10;
        m = idiv(m, 10);
        zeilen.push([m, s]);
      }
      // Fehlerbild: erst geteilt, dann gelesen
      const falsch: [number, number][] = [[n, 0]];
      m = n;
      s = 0;
      while (m > 0) {
        m = idiv(m, 10);
        s += m % 10;
        falsch.push([m, s]);
      }
      const flach = (t: [number, number][]) => t.flat().map(String);
      return {
        angabe: `Verfolge den Code für \`n = ${n}\`. Trage nach jedem Durchlauf \`n\` und \`summe\` ein.\n\n\`\`\`java\nint summe = 0;\nwhile (n > 0) {\n    summe = summe + n % 10;\n    n = n / 10;\n}\n\`\`\``,
        teile: [
          {
            typ: "trace",
            spalten: ["n", "summe"],
            zeilen: ["vor der Schleife", ...zeilen.slice(1).map((_, i) => `nach Durchlauf ${i + 1}`)],
            vorgabe: 1,
            loesung: zeilen,
            fehler: [{ wert: flach(falsch), meldung: "Im Rumpf wird zuerst die letzte Ziffer addiert und erst danach durch 10 geteilt." }],
          },
        ],
        hinweis: "Pro Durchlauf: zuerst `n % 10` zur Summe, dann `n / 10`.",
        loesung: `**Ansatz:** In jedem Durchlauf die letzte Ziffer addieren und abschneiden.\n---\n${zeilen
          .slice(1)
          .map(([nn, ss], i) => `Durchlauf ${i + 1}: Ziffer ${zeilen[i][0] % 10}, \`summe = ${ss}\`, \`n = ${nn}\`.`)
          .join(" ")}\n---\nNach ${zeilen.length - 1} Durchläufen ist \`n = 0\`, die Quersumme ist ${quersumme(n)}.`,
      };
    },
  }),

  // ------------------------------------------------------------ 5 Umkehrzahl
  drill({
    id: "zi-d-umkehrzahl",
    kapitel: K,
    titel: "Die Umkehrzahl bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      let n = zahlMitStellen(r, r.int(3, 6));
      if (r.zufall() < 0.4) n = n * (r.zufall() < 0.5 ? 10 : 100);
      const rev = umkehrzahl(n);
      const alsText = String(n).split("").reverse().join("");
      const code = `int n = ${n};
int r = 0;
while (n > 0) {
    r = r * 10 + n % 10;
    n = n / 10;
}
System.out.println(r);
`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: `${rev}\n`,
            fehler: nurFalsche(String(rev), [
              { wert: alsText, meldung: "Eine `int`-Zahl hat keine führenden Nullen. Die Nullen vom Ende der Zahl verschwinden beim Umdrehen." },
              { wert: String(n), meldung: "`r * 10 + n % 10` hängt die zuerst gelesene, also letzte Ziffer vorne an. Die Zahl wird umgedreht." },
            ]),
          },
        ],
        hinweis: "`r * 10 + ziffer` hängt die Ziffer rechts an. Die Ziffernschleife liest von rechts nach links.",
        loesung: `**Ansatz:** Ziffern von rechts lesen und rechts an \`r\` anhängen.\n---\nZiffern: ${ziffernVonRechts(n).join(", ")}. \`r\` wird nacheinander ${ziffernVonRechts(n)
          .reduce((acc: number[], z) => [...acc, (acc.length ? acc[acc.length - 1] : 0) * 10 + z], [])
          .join(", ")}.\n---\nAusgabe \`${rev}\`.${alsText !== String(rev) ? ` Als Text wäre es ${alsText}, aber führende Nullen fallen weg.` : ""}`,
      };
    },
  }),

  // ------------------------------------------------------------ 6 Harshad prüfen
  drill({
    id: "zi-d-harshad",
    kapitel: K,
    titel: "Ist die Zahl eine Harshad-Zahl?",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(10, 2000);
      const qs = quersumme(n);
      const rest = n % qs;
      const ist = rest === 0;
      const code = `int n = ${n};
int s = 0;
int m = n;
while (m > 0) {
    s = s + m % 10;
    m = m / 10;
}
System.out.println(s);
System.out.println(n % s);
System.out.println(n % s == 0);
`;
      const loes = `${qs}\n${rest}\n${ist}`;
      return {
        angabe: "Was gibt dieser Code aus? Ist die Zahl eine Harshad-Zahl?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${qs}\n${rest}\n${!ist}`, meldung: "Teilbar heißt: Der Rest ist 0. Vergleiche den Rest in Zeile 2 mit 0." },
              { wert: `${qs}\n${qs % n}\n${qs % n === 0}`, meldung: "Geteilt wird die Zahl durch die Quersumme, nicht umgekehrt: `n % s`." },
            ]),
          },
        ],
        hinweis: "Zuerst die Quersumme bilden, dann den Rest der Zahl bei Division durch die Quersumme.",
        loesung: `**Ansatz:** Quersumme berechnen, dann prüfen, ob \`n % s == 0\`.\n---\nQuersumme von ${n}: ${ziffernVonRechts(n).reverse().join(" + ")} = ${qs}.\n---\n${n} = ${idiv(n, qs)} · ${qs} + ${rest}. Der Rest ist ${rest}, also ist ${n} ${ist ? "eine" : "keine"} Harshad-Zahl. Ausgabe \`${qs}\`, \`${rest}\`, \`${ist}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------ 7 Harshad im Intervall
  drill({
    id: "zi-d-harshad-intervall",
    kapitel: K,
    titel: "Harshad-Zahlen in einem Intervall",
    niveau: 3,
    erzeuge: (r) => {
      let start = 0,
        end = 0;
      let treffer: number[] = [];
      // mindestens eine Harshad-Zahl im Intervall, damit die Ausgabe nicht nur aus der Anzahl besteht
      while (treffer.length === 0) {
        start = r.int(10, 400);
        end = start + r.int(6, 12);
        treffer = [];
        for (let i = start; i <= end; i++) if (i % quersumme(i) === 0) treffer.push(i);
      }
      const ohneEnde = treffer.filter((x) => x !== end);
      const code = `public class Intervall {
    public static boolean isHarshad(int number) {
        int s = 0;
        int m = number;
        while (m > 0) {
            s = s + m % 10;
            m = m / 10;
        }
        return number % s == 0;
    }

    public static void main(String[] args) {
        int count = 0;
        for (int i = ${start}; i <= ${end}; i++) {
            if (isHarshad(i)) {
                System.out.print(i + " ");
                count++;
            }
        }
        System.out.println();
        System.out.println(count);
    }
}
`;
      const zeile = treffer.map((x) => `${x} `).join("");
      const loes = `${zeile}\n${treffer.length}`;
      const fehler = [
        { wert: `${ohneEnde.map((x) => `${x} `).join("")}\n${ohneEnde.length}`, meldung: `Die Bedingung ist \`i <= ${end}\`. Auch ${end} wird geprüft.` },
      ];
      return {
        angabe: "Was gibt das Programm aus? Achte auf die Leerzeichen.",
        teile: [{ typ: "ausgabe", code, loesung: loes + "\n", fehler: nurFalsche(loes, fehler) }],
        hinweis: `Prüfe jede Zahl von ${start} bis ${end}: Quersumme bilden und Rest bestimmen.`,
        loesung: `**Ansatz:** Für jede Zahl im Intervall die Quersumme und den Rest berechnen.\n---\n${Array.from({ length: end - start + 1 }, (_, i) => start + i)
          .map((x) => `${x}: Quersumme ${quersumme(x)}, Rest ${x % quersumme(x)}.`)
          .join(" ")}\n---\nHarshad-Zahlen: ${treffer.length ? treffer.join(", ") : "keine"}. Ausgabe der Zahlen mit je einem Leerzeichen dahinter, dann die Anzahl ${treffer.length}.`,
      };
    },
  }),

  // ------------------------------------------------------------ 8 Fröhliche Zahl: Folge
  drill({
    id: "zi-d-happy-folge",
    kapitel: K,
    titel: "Die Folge der Quadratsummen",
    niveau: 2,
    erzeuge: (r) => {
      let start = r.int(2, 99);
      // 4 ist schon das Ziel: Die Folge hätte nur ein Glied, das Fehlerbild „letzte Zahl fehlt“ wäre leer.
      while (start === 4) start = r.int(2, 99);
      const folge = [start];
      let n = start;
      while (n !== 1 && n !== 4) {
        n = quadratsumme(n);
        folge.push(n);
      }
      const froh = n === 1;
      const code = `int n = ${start};
System.out.print(n);
while (n != 1 && n != 4) {
    int s = 0;
    int m = n;
    while (m > 0) {
        s = s + (m % 10) * (m % 10);
        m = m / 10;
    }
    n = s;
    System.out.print(" " + n);
}
System.out.println();
System.out.println(n == 1);
`;
      const loes = `${folge.join(" ")}\n${froh}`;
      return {
        angabe: "Was gibt dieser Code aus? Ist die Startzahl fröhlich?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${folge.join(" ")}\n${!froh}`, meldung: "Fröhlich heißt: Die Folge endet bei 1. Endet sie bei 4, ist die Zahl traurig." },
              { wert: `${folge.slice(0, -1).join(" ")}\n${froh}`, meldung: "Die neue Zahl wird im Rumpf ausgegeben, also auch die letzte, bei der die Schleife danach endet." },
            ]),
          },
        ],
        hinweis: "Quadriere jede Ziffer und addiere die Quadrate. Wiederhole das, bis 1 oder 4 erscheint.",
        loesung: `**Ansatz:** Quadratsummen bilden, bis 1 oder 4 erreicht ist.\n---\n${folge
          .slice(0, -1)
          .map((x, i) => `${x} → ${ziffernVonRechts(x).reverse().map((z) => `${z}²`).join(" + ")} = ${folge[i + 1]}.`)
          .join(" ") || `${start} ist schon das Ziel.`}\n---\nDie Folge endet bei ${n}. ${start} ist ${froh ? "fröhlich" : "traurig"}, Ausgabe \`${froh}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------ 9 Narzisstisch
  drill({
    id: "zi-d-narzisstisch",
    kapitel: K,
    titel: "Ist die Zahl narzisstisch?",
    niveau: 2,
    erzeuge: (r) => {
      const besondere = [370, 371, 407, 1634, 8208, 9474];
      const n = r.zufall() < 0.4 ? r.wahl(besondere) : r.int(100, 9999);
      const k = String(n).length;
      const z = ziffernVonRechts(n);
      const summe = z.reduce((s, d) => s + d ** k, 0);
      const quadr = z.reduce((s, d) => s + d * d, 0);
      const code = `int n = ${n};
int k = 0;
int m = n;
do {
    k++;
    m = m / 10;
} while (m > 0);
int sum = 0;
m = n;
while (m > 0) {
    int p = 1;
    for (int i = 0; i < k; i++) {
        p = p * (m % 10);
    }
    sum = sum + p;
    m = m / 10;
}
System.out.println(k + " " + sum);
System.out.println(sum == n);
`;
      const loes = `${k} ${summe}\n${summe === n}`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${k} ${quadr}\n${quadr === n}`, meldung: `Der Exponent ist die Ziffernanzahl \`k = ${k}\`, nicht immer 2.` },
              { wert: `${k} 0\nfalse`, meldung: "Vor der zweiten Schleife wird `m = n;` neu gesetzt. Sonst wäre `m` schon 0." },
            ]),
          },
        ],
        hinweis: "Erst die Ziffern zählen, dann jede Ziffer so oft mit sich selbst multiplizieren.",
        loesung: `**Ansatz:** Ziffernanzahl bestimmen, dann jede Ziffer hoch diese Anzahl nehmen und addieren.\n---\n${n} hat ${k} Ziffern. ${z
          .slice()
          .reverse()
          .map((d) => `${d}^${k} = ${d ** k}`)
          .join(", ")}.\n---\nSumme ${summe}. ${summe === n ? `Das ist die Zahl selbst, ${n} ist narzisstisch.` : `${summe} ist nicht ${n}, also nicht narzisstisch.`} Ausgabe \`${k} ${summe}\` und \`${summe === n}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------ 10 Ziffern mit Eigenschaft
  drill({
    id: "zi-d-ziffern-eigenschaft",
    kapitel: K,
    titel: "Ziffern mit einer Eigenschaft zählen",
    niveau: 2,
    erzeuge: (r) => {
      const n = zahlMitNull(r, r.int(4, 8));
      const g = r.int(2, 7);
      const arten = [
        { bed: "z % 2 == 0", text: "gerade", test: (z: number) => z % 2 === 0, falsch: (z: number) => z % 2 === 0 && z !== 0, fm: "Die Ziffer 0 ist gerade, denn `0 % 2 == 0`." },
        { bed: "z % 2 == 1", text: "ungerade", test: (z: number) => z % 2 === 1, falsch: (z: number) => z % 2 === 0, fm: "Du hast die geraden Ziffern gezählt. `z % 2 == 1` heißt ungerade." },
        { bed: `z > ${g}`, text: `größer als ${g}`, test: (z: number) => z > g, falsch: (z: number) => z >= g, fm: `Die Bedingung ist \`> ${g}\`, nicht \`>= ${g}\`. Die Ziffer ${g} selbst zählt nicht.` },
      ];
      const a = r.wahl(arten);
      const z = ziffernVonRechts(n);
      const anzahl = z.filter(a.test).length;
      const falsch = z.filter(a.falsch).length;
      const code = `int n = ${n};
int count = 0;
while (n > 0) {
    int z = n % 10;
    if (${a.bed}) {
        count++;
    }
    n = n / 10;
}
System.out.println(count);
`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${anzahl}\n`, fehler: nurFalsche(String(anzahl), [{ wert: String(falsch), meldung: a.fm }]) }],
        hinweis: `Prüfe jede Ziffer einzeln auf die Bedingung \`${a.bed}\`.`,
        loesung: `**Ansatz:** Jede Ziffer einmal prüfen und mitzählen.\n---\nZiffern von rechts: ${z.join(", ")}. ${a.text[0].toUpperCase() + a.text.slice(1)} sind: ${z.filter(a.test).join(", ") || "keine"}.\n---\nAusgabe \`${anzahl}\`.`,
      };
    },
  }),

  // ------------------------------------------------------------ 11 ggT
  drill({
    id: "zi-d-ggt",
    kapitel: K,
    titel: "Euklidischer Algorithmus mit Rest",
    niveau: 2,
    erzeuge: (r) => {
      const g = r.int(2, 15);
      const x = r.int(2, 20);
      let y = r.int(2, 20);
      while (y === x) y = r.int(2, 20);
      const a0 = g * x,
        b0 = g * y;
      const paare: [number, number][] = [];
      let a = a0,
        b = b0;
      while (b !== 0) {
        const rr = a % b;
        a = b;
        b = rr;
        paare.push([a, b]);
      }
      const code = `int a = ${a0};
int b = ${b0};
while (b != 0) {
    int r = a % b;
    a = b;
    b = r;
    System.out.println(a + " " + b);
}
System.out.println("ggT " + a);
`;
      const loes = [...paare.map(([p, q]) => `${p} ${q}`), `ggT ${a}`].join("\n");
      const falsch = [...paare.map(([p, q]) => `${p} ${q}`), `ggT ${b}`].join("\n");
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [{ wert: falsch, meldung: "Nach der Schleife ist `b` gleich 0. Der ggT steht in `a`." }]),
          },
        ],
        hinweis: "Ein Durchlauf macht aus dem Paar `(a, b)` das Paar `(b, a % b)`.",
        loesung: `**Ansatz:** Paare mit \`(a, b) → (b, a % b)\` bilden, bis \`b = 0\` ist.\n---\n(${a0}, ${b0}) → ${paare.map(([p, q]) => `(${p}, ${q})`).join(" → ")}.\n---\nDer ggT ist ${a}. Probe: ${a0} = ${a} · ${a0 / a} und ${b0} = ${a} · ${b0 / a}.`,
      };
    },
  }),

  // ------------------------------------------------------------ 12 ganzzahlige Wurzel
  drill({
    id: "zi-d-wurzel",
    kapitel: K,
    titel: "Ganzzahlige Wurzel mit einer Schleife",
    niveau: 1,
    erzeuge: (r) => {
      const w = r.int(2, 30);
      const k = r.zufall() < 0.5 ? w * w : w * w + r.int(1, 2 * w);
      let i = 0;
      while (i * i < k) i++;
      const ergebnis = i * i === k ? i : -1;
      const code = `int k = ${k};
int i = 0;
while (i * i < k) {
    i++;
}
System.out.println(i);
System.out.println(i * i == k ? i : -1);
`;
      const loes = `${i}\n${ergebnis}`;
      return {
        angabe: "Was gibt dieser Code aus? Der Ausdruck `bed ? x : y` liefert `x`, wenn `bed` wahr ist, sonst `y`.",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${i - 1}\n${ergebnis}`, meldung: `Die Schleife läuft, solange \`i * i < ${k}\`. Sie endet erst bei der ersten Zahl, deren Quadrat mindestens ${k} ist.` },
              { wert: `${i}\n${i}`, meldung: `${i} · ${i} = ${i * i} ist nicht ${k}. Dann liefert der Ausdruck −1.` },
            ]),
          },
        ],
        hinweis: "Erhöhe `i`, solange das Quadrat kleiner als `k` ist. Danach vergleiche `i * i` mit `k`.",
        loesung: `**Ansatz:** Das kleinste \`i\` mit \`i * i >= ${k}\` suchen.\n---\n${i - 1} · ${i - 1} = ${(i - 1) * (i - 1)} < ${k}, aber ${i} · ${i} = ${i * i} ≥ ${k}. Also endet die Schleife bei \`i = ${i}\`.\n---\n${i * i === k ? `${i * i} = ${k}, also ist ${i} die Wurzel.` : `${i * i} ist nicht ${k}, also ist ${k} keine Quadratzahl und es erscheint −1.`}`,
      };
    },
  }),

  // ------------------------------------------------------------ 13 negative Zahlen
  drill({
    id: "zi-d-negativ",
    kapitel: K,
    titel: "Rest und Division bei negativen Zahlen",
    niveau: 2,
    erzeuge: (r) => {
      const betrag = zahlMitStellen(r, r.int(3, 4));
      const n = -betrag;
      const a = n % 10;
      const b = idiv(n, 10) % 10;
      const c = idiv(n, 100);
      const code = `int n = ${n};
System.out.println(n % 10);
System.out.println(n / 10 % 10);
System.out.println(n / 100);
`;
      const loes = `${a}\n${b}\n${c}`;
      return {
        angabe: "Was gibt dieser Code aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung: loes + "\n",
            fehler: nurFalsche(loes, [
              { wert: `${-a}\n${-b}\n${c}`, meldung: "Der Rest hat in Java das Vorzeichen der linken Zahl. Bei einer negativen Zahl ist er negativ oder 0." },
              { wert: `${a}\n${b}\n${Math.floor(n / 100)}`, meldung: "Die Ganzzahldivision rundet zur Null hin, nicht nach unten." },
            ]),
          },
        ],
        hinweis: "Rechne zuerst mit dem Betrag und setze dann das Minus. Der Rest hat das Vorzeichen der linken Zahl.",
        loesung: `**Ansatz:** Wie bei positiven Zahlen rechnen, aber alle Ergebnisse bekommen das Vorzeichen der Zahl (oder sind 0).\n---\n\`${n} % 10 = ${a}\`. \`${n} / 10 = ${idiv(n, 10)}\`, davon \`% 10\` ergibt ${b}.\n---\n\`${n} / 100 = ${c}\`, zur Null hin abgeschnitten. Wer echte Ziffern braucht, macht die Zahl vorher positiv.`,
      };
    },
  }),
];
