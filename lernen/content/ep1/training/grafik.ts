import { drill, type Drill } from "@/lib/lernen/training";

const K = "grafik";

/** Java-Code als Markdown-Codeblock */
const javaBlock = (code: string) => "```java\n" + code + "\n```";
/** Text mit Leerzeichen sichtbar machen (für Lösungswege) */
const sichtbar = (s: string) => s.replace(/ /g, "·");
const wiederhole = (s: string, n: number) => (n > 0 ? s.repeat(n) : "");

const ZEICHEN = ["*", "#", "+", "o", "x", "@"];

export const DRILLS: Drill[] = [
  drill({
    id: "gr-d-dreieck",
    kapitel: K,
    titel: "Dreiecke aus verschachtelten Schleifen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(3, 6);
      const c = r.wahl(ZEICHEN);
      const art = r.int(0, 3);
      const zeilen: string[] = [];
      let leer: string;
      let zeichen: string;
      if (art === 0) {
        leer = "0";
        zeichen = "i + 1";
        for (let i = 0; i < n; i++) zeilen.push(wiederhole(c, i + 1));
      } else if (art === 1) {
        leer = "0";
        zeichen = "n - i";
        for (let i = 0; i < n; i++) zeilen.push(wiederhole(c, n - i));
      } else if (art === 2) {
        leer = "n - 1 - i";
        zeichen = "i + 1";
        for (let i = 0; i < n; i++) zeilen.push(wiederhole(" ", n - 1 - i) + wiederhole(c, i + 1));
      } else {
        leer = "i";
        zeichen = "n - i";
        for (let i = 0; i < n; i++) zeilen.push(wiederhole(" ", i) + wiederhole(c, n - i));
      }
      const leerSchleife = leer === "0" ? "" : `    for (int j = 0; j < ${leer}; j++) {\n        System.out.print(" ");\n    }\n`;
      const code = `int n = ${n};\nfor (int i = 0; i < n; i++) {\n${leerSchleife}    for (int j = 0; j < ${zeichen}; j++) {\n        System.out.print("${c}");\n    }\n    System.out.println();\n}`;
      const ohneLeer = zeilen.map((z) => z.trimStart()).join("\n");
      const ausgabe = zeilen.join("\n");
      return {
        angabe: "Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.",
        teile: [{ typ: "ausgabe", code, loesung: ausgabe + "\n", fehler: ohneLeer !== ausgabe ? [{ wert: ohneLeer, meldung: "Die Zeichenzahlen stimmen, aber die Leerzeichen am Zeilenanfang fehlen. Die erste innere Schleife gibt sie aus." }] : undefined }],
        hinweis: `Lege eine Zeilentabelle für i = 0 bis ${n - 1} an: Leerzeichen \`${leer}\`, Zeichen \`${zeichen}\`.`,
        loesung: `**Ansatz:** Zeilentabelle mit Leerzeichen \`${leer}\` und Zeichen \`${zeichen}\` für \`n = ${n}\`.\n---\nZeilen (· steht für ein Leerzeichen): ${zeilen.map((z) => `\`${sichtbar(z)}\``).join(", ")}.\n---\nProbe mit der letzten Zeile \`i = ${n - 1}\`: \`${sichtbar(zeilen[n - 1])}\`.`,
      };
    },
  }),
  drill({
    id: "gr-d-pyramide-zeile",
    kapitel: K,
    titel: "Leerzeichen und Sterne einer Pyramidenzeile",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(4, 9);
      const i = r.int(0, n - 1);
      return {
        angabe: `Eine Pyramide mit \`n = ${n}\` Zeilen hat in Zeile \`i\` (ab 0 gezählt) \`n - 1 - i\` Leerzeichen und \`2 * i + 1\` Sterne. Wie viele Leerzeichen und wie viele Sterne hat Zeile \`i = ${i}\`?`,
        teile: [
          { typ: "zahl", label: "Leerzeichen", loesung: `${n} - 1 - ${i}`, fehler: [{ wert: String(n - i), meldung: "Die Formel lautet `n - 1 - i`. Die unterste Zeile hat 0 Leerzeichen, nicht 1." }] },
          { typ: "zahl", label: "Sterne", loesung: `2 * ${i} + 1`, fehler: i > 0 ? [{ wert: String(i + 1), meldung: "Die Pyramide wächst um **zwei** Sterne je Zeile: `2 * i + 1`." }] : undefined },
        ],
        hinweis: "Setze i in beide Formeln ein. Punkt vor Strich.",
        loesung: `**Ansatz:** Formeln aus der Zeilentabelle einsetzen.\n---\nLeerzeichen: ${n} − 1 − ${i} = ${n - 1 - i}. Sterne: 2 · ${i} + 1 = ${2 * i + 1}.\n---\nProbe: Zusammen ${n - 1 - i + 2 * i + 1} Zeichen. Das ist höchstens ${2 * n - 1}, die Breite der untersten Zeile.`,
      };
    },
  }),
  drill({
    id: "gr-d-trapez",
    kapitel: K,
    titel: "Ein Trapez nach Aufgabenblatt 1",
    niveau: 2,
    erzeuge: (r) => {
      const breite = r.int(2, 15);
      const c = r.wahl(["+", "*", "o"]);
      const h = Math.floor(breite / 2);
      const zeilen: string[] = [];
      for (let i = 0; i < h; i++) zeilen.push(wiederhole(" ", h - 1 - i) + wiederhole(c, breite - 2 * (h - 1 - i)));
      const code = `int breite = ${breite};\nint h = breite / 2;\nfor (int i = 0; i < h; i++) {\n    for (int j = 0; j < h - 1 - i; j++) {\n        System.out.print(" ");\n    }\n    for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {\n        System.out.print("${c}");\n    }\n    System.out.println();\n}`;
      return {
        angabe: "Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.",
        teile: [{ typ: "ausgabe", code, loesung: zeilen.join("\n") + "\n" }],
        hinweis: "Bestimme zuerst `h` mit Ganzzahldivision. Dann für jede Zeile Leerzeichen `h - 1 - i` und Zeichen `breite - 2 * (h - 1 - i)`.",
        loesung: `**Ansatz:** \`h = ${breite} / 2 = ${h}\` Zeilen.\n---\nZeichen je Zeile: ${zeilen.map((z) => z.trim().length).join(", ")}. Leerzeichen: ${zeilen.map((z) => z.length - z.trimStart().length).join(", ")}.\n---\nDie unterste Zeile hat genau \`breite = ${breite}\` Zeichen. Ausgabe (· = Leerzeichen): ${zeilen.map((z) => `\`${sichtbar(z)}\``).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "gr-d-raute",
    kapitel: K,
    titel: "Raute oder Sanduhr mit dem Abstand zur Mitte",
    niveau: 2,
    erzeuge: (r) => {
      const h = r.wahl([3, 5, 7, 9]);
      const m = Math.floor(h / 2);
      const sanduhr = r.zufall() < 0.5;
      const c = r.wahl(["*", "o", "#"]);
      const zeilen: string[] = [];
      for (let i = 0; i < h; i++) {
        const d = Math.abs(i - m);
        zeilen.push(sanduhr ? wiederhole(" ", m - d) + wiederhole(c, 2 * d + 1) : wiederhole(" ", d) + wiederhole(c, 2 * (m - d) + 1));
      }
      const leer = sanduhr ? "m - d" : "d";
      const anz = sanduhr ? "2 * d + 1" : "2 * (m - d) + 1";
      const code = `int h = ${h};\nint m = h / 2;\nfor (int i = 0; i < h; i++) {\n    int d = Math.abs(i - m);\n    for (int j = 0; j < ${leer}; j++) {\n        System.out.print(" ");\n    }\n    for (int j = 0; j < ${anz}; j++) {\n        System.out.print("${c}");\n    }\n    System.out.println();\n}`;
      return {
        angabe: "Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.",
        teile: [{ typ: "ausgabe", code, loesung: zeilen.join("\n") + "\n" }],
        hinweis: `\`m = ${h} / 2 = ${m}\`. Bestimme für jede Zeile \`d = Math.abs(i - m)\` und setze in die beiden Formeln ein.`,
        loesung: `**Ansatz:** Abstand zur Mittelzeile: \`d\` = ${Array.from({ length: h }, (_, i) => Math.abs(i - m)).join(", ")}.\n---\nLeerzeichen \`${leer}\`, Zeichen \`${anz}\`. Es entsteht ${sanduhr ? "eine Sanduhr: außen breit, in der Mitte ein Zeichen" : "eine Raute: in der Mitte am breitesten"}.\n---\nAusgabe (· = Leerzeichen): ${zeilen.map((z) => `\`${sichtbar(z)}\``).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "gr-d-parallelogramm",
    kapitel: K,
    titel: "Hohles Parallelogramm, nach links geneigt",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.int(2, 6);
      const zeilen: string[] = [];
      for (let i = 0; i < w; i++) {
        let z = wiederhole(" ", w - 1 - i);
        for (let j = 0; j < w; j++) z += i === 0 || i === w - 1 || j === 0 || j === w - 1 ? "#" : " ";
        zeilen.push(z);
      }
      const code = `int w = ${w};\nfor (int i = 0; i < w; i++) {\n    for (int j = 0; j < w - 1 - i; j++) {\n        System.out.print(" ");\n    }\n    for (int j = 0; j < w; j++) {\n        if (i == 0 || i == w - 1 || j == 0 || j == w - 1) {\n            System.out.print("#");\n        } else {\n            System.out.print(" ");\n        }\n    }\n    System.out.println();\n}`;
      const voll = Array.from({ length: w }, (_, i) => wiederhole(" ", w - 1 - i) + wiederhole("#", w)).join("\n");
      return {
        angabe: "Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.",
        teile: [{ typ: "ausgabe", code, loesung: zeilen.join("\n") + "\n", fehler: w > 2 ? [{ wert: voll, meldung: "Innen steht ein Leerzeichen. Nur am Rand (erste und letzte Zeile, erste und letzte Spalte) steht `#`." }] : undefined }],
        hinweis: "Jede Zeile beginnt mit `w - 1 - i` Leerzeichen. Danach entscheidet die Randbedingung für jede der `w` Spalten.",
        loesung: `**Ansatz:** Einrückung um \`w - 1 - i\`, dann ein hohles Quadrat der Breite ${w}.\n---\nErste und letzte Zeile voll, dazwischen \`#\`, ${Math.max(w - 2, 0)} Leerzeichen, \`#\`.\n---\nAusgabe (· = Leerzeichen): ${zeilen.map((z) => `\`${sichtbar(z)}\``).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "gr-d-bedingung",
    kapitel: K,
    titel: "Muster mit Positionsbedingung",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 6);
      const varianten: { bed: string; f: (i: number, j: number) => boolean; text: string }[] = [
        { bed: "i == j || i + j == n - 1", f: (i, j) => i === j || i + j === n - 1, text: "beide Diagonalen" },
        { bed: "(i + j) % 2 == 0", f: (i, j) => (i + j) % 2 === 0, text: "Schachbrett" },
        { bed: "i == 0 || j == 0", f: (i, j) => i === 0 || j === 0, text: "obere Zeile und linke Spalte" },
        { bed: "j >= i", f: (i, j) => j >= i, text: "Dreieck rechts oberhalb der Diagonale" },
        { bed: "(i + j) % 3 == 0", f: (i, j) => (i + j) % 3 === 0, text: "schräge Linien im Abstand 3" },
        { bed: "i % 2 == 0 && j % 2 == 0", f: (i, j) => i % 2 === 0 && j % 2 === 0, text: "Punktraster" },
      ];
      const v = r.wahl(varianten);
      const zeilen: string[] = [];
      for (let i = 0; i < n; i++) {
        let z = "";
        for (let j = 0; j < n; j++) z += v.f(i, j) ? "X" : ".";
        zeilen.push(z);
      }
      const code = `int n = ${n};\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        if (${v.bed}) {\n            System.out.print("X");\n        } else {\n            System.out.print(".");\n        }\n    }\n    System.out.println();\n}`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: zeilen.join("\n") + "\n" }],
        hinweis: "Zeichne ein Gitter mit `n` mal `n` Kästchen und prüfe die Bedingung für jede Stelle (i, j).",
        loesung: `**Ansatz:** Positionsbedingung \`${v.bed}\` für jede Stelle prüfen.\n---\nDie Bedingung beschreibt: ${v.text}.\n---\nAusgabe: ${zeilen.map((z) => `\`${z}\``).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "gr-d-rand-zaehlen",
    kapitel: K,
    titel: "Randzeichen eines hohlen Rechtecks zählen",
    niveau: 1,
    erzeuge: (r) => {
      const h = r.int(3, 9);
      const b = r.int(3, 12);
      return {
        angabe: `Ein hohles Rechteck aus \`#\` hat ${h} Zeilen und ${b} Spalten. Innen stehen Leerzeichen. Wie viele \`#\` werden ausgegeben?`,
        teile: [{ typ: "zahl", loesung: `2 * ${b} + 2 * (${h} - 2)`, fehler: [{ wert: String(2 * b + 2 * h), meldung: "Die vier Ecken hast du doppelt gezählt. Sie gehören schon zur ersten und letzten Zeile." }, { wert: String(h * b), meldung: "Das sind alle Stellen. Innen stehen aber Leerzeichen." }] }],
        hinweis: "Zwei volle Zeilen, dazwischen je Zeile nur links und rechts ein Zeichen.",
        loesung: `**Ansatz:** Volle Zeilen oben und unten, dazwischen ${h - 2} Zeilen mit je 2 Zeichen.\n---\n2 · ${b} + 2 · ${h - 2} = ${2 * b + 2 * (h - 2)}.\n---\nProbe: Alle ${h * b} Stellen minus ${(h - 2) * (b - 2)} innere Stellen ergibt ebenfalls ${h * b - (h - 2) * (b - 2)}.`,
      };
    },
  }),
  drill({
    id: "gr-d-koordinate",
    kapitel: K,
    titel: "Koordinatenformel für eine Reihe",
    niveau: 1,
    erzeuge: (r) => {
      const rand = r.int(1, 8) * 5;
      const s = r.int(4, 12) * 5;
      const abstand = r.int(1, 6) * 5;
      const k = r.int(2, 7);
      const x = rand + (k - 1) * (s + abstand);
      return {
        angabe: `Quadrate mit Seite ${s} stehen in einer Reihe. Der Rand links ist ${rand}, der Abstand zwischen zwei Quadraten ${abstand}. Bei welchem x-Wert liegt die linke Kante des ${k}. Quadrats?`,
        teile: [{ typ: "zahl", loesung: `${rand} + ${k - 1} * (${s} + ${abstand})`, fehler: [{ wert: String(rand + k * (s + abstand)), meldung: `Das ${k}. Quadrat hat die Nummer \`i = ${k - 1}\`, weil die Zählung bei 0 beginnt.` }, { wert: String(rand + (k - 1) * s), meldung: "Der Schritt von einem Quadrat zum nächsten ist Seite **plus** Abstand." }] }],
        hinweis: "Koordinatenformel `rand + i * (s + abstand)`, das erste Quadrat hat `i = 0`.",
        loesung: `**Ansatz:** Koordinatenformel mit \`i = ${k - 1}\`.\n---\n${rand} + ${k - 1} · (${s} + ${abstand}) = ${rand} + ${(k - 1) * (s + abstand)} = ${x}.\n---\nProbe: Die Quadrate beginnen bei ${Array.from({ length: k }, (_, i) => rand + i * (s + abstand)).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "gr-d-abstand",
    kapitel: K,
    titel: "Gleich große Lücken berechnen",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.wahl([300, 400, 500, 600]);
      const n = r.int(3, 9);
      const s = r.int(2, Math.floor(w / n / 10) - 1) * 10;
      const frei = w - n * s;
      const ganz = Math.floor(frei / (n + 1));
      const genau = frei / (n + 1);
      return {
        angabe: `In ein ${w} Pixel breites Fenster sollen ${n} Quadrate mit Seite ${s}. Der Rand links, der Rand rechts und alle Abstände zwischen den Quadraten sind gleich groß. Wie groß ist dieser Abstand genau? (Auf zwei Nachkommastellen.)`,
        teile: [{ typ: "zahl", loesung: `(${w} - ${n} * ${s}) / (${n} + 1)`, toleranz: 0.01, fehler: [{ wert: String(Math.round((frei / n) * 100) / 100), meldung: `Bei ${n} Quadraten gibt es ${n + 1} Lücken: eine vor dem ersten, ${n - 1} dazwischen und eine nach dem letzten.` }, ...(ganz !== genau ? [{ wert: String(ganz), meldung: "Das ist das Ergebnis der Ganzzahldivision. Gefragt ist der genaue Wert mit Nachkommastellen." }] : [])] }],
        hinweis: "Was nach den Quadraten übrig bleibt, wird auf n + 1 Lücken verteilt.",
        loesung: `**Ansatz:** \`${n} · ${s} + ${n + 1} · abstand = ${w}\`.\n---\nFreier Platz: ${w} − ${n * s} = ${frei}, verteilt auf ${n + 1} Lücken.\n---\nAbstand ≈ ${genau.toFixed(2).replace(".", ",")}. In Java: \`(${w} - ${n} * ${s}) / (${n} + 1.0)\`.`,
      };
    },
  }),
  drill({
    id: "gr-d-kreismitte",
    kapitel: K,
    titel: "Mittelpunkt einer Zelle im Kreismuster",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.wahl([5, 7, 9, 11, 13, 15, 17, 19]);
      const k = r.int(0, n - 1);
      const d = 300 / n;
      return {
        angabe: `Ein 300 Pixel breites Fenster wird in \`n = ${n}\` gleich breite Zellen geteilt, Zelle \`k\` ab 0 gezählt. Welchen Radius hat ein Kreis, der eine Zelle genau ausfüllt, und bei welchem x-Wert liegt der Mittelpunkt der Zelle \`k = ${k}\`? (Auf zwei Nachkommastellen.)`,
        teile: [
          { typ: "zahl", label: "Radius", loesung: `300 / (2 * ${n})`, toleranz: 0.01, fehler: 300 % (2 * n) !== 0 ? [{ wert: String(Math.floor(300 / (2 * n))), meldung: "Das ist die Ganzzahldivision. Der genaue Radius hat Nachkommastellen, in Java `300.0 / (2 * n)`." }] : undefined },
          { typ: "zahl", label: "Mittelpunkt x", loesung: `(${k} + 0.5) * 300 / ${n}`, toleranz: 0.01, fehler: [{ wert: (Math.round(k * d * 100) / 100).toString(), meldung: "Das ist die linke Kante der Zelle. Der Mittelpunkt liegt eine halbe Zellbreite weiter." }] },
        ],
        hinweis: "Zellbreite `d = 300 / n`, Radius `d / 2`, Mittelpunkt `(k + 0.5) * d`.",
        loesung: `**Ansatz:** Zellbreite \`d = 300 / ${n} ≈ ${d.toFixed(2).replace(".", ",")}\`.\n---\nRadius \`d / 2 ≈ ${(d / 2).toFixed(2).replace(".", ",")}\`. Mittelpunkt \`(${k} + 0,5) · d ≈ ${((k + 0.5) * d).toFixed(2).replace(".", ",")}\`.\n---\n${k === Math.floor(n / 2) ? "Das ist der Mittelindex `m = n / 2`, also genau die Fenstermitte 150." : `Der Mittelindex ist \`m = ${Math.floor(n / 2)}\`, seine Zelle liegt bei 150.`}`,
      };
    },
  }),
  drill({
    id: "gr-d-konzentrisch",
    kapitel: K,
    titel: "Radien und Grauwerte konzentrischer Kreise",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 6);
      const r0 = r.wahl([120, 150, 180, 200]);
      const g0 = r.wahl([200, 220, 240]);
      const dg = r.wahl([30, 40]);
      const zeilen: string[] = [];
      for (let i = 0; i < n; i++) zeilen.push(`${r0 - Math.floor((i * r0) / n)} ${g0 - i * dg}`);
      const code = `int n = ${n};\nfor (int i = 0; i < n; i++) {\n    int r = ${r0} - i * ${r0} / n;\n    int g = ${g0} - i * ${dg};\n    System.out.println(r + " " + g);\n}`;
      return {
        angabe: "Das Programm gibt Radius und Grauwert konzentrischer Kreise aus. Was steht auf der Konsole?",
        teile: [{ typ: "ausgabe", code, loesung: zeilen.join("\n") + "\n" }],
        hinweis: `\`i * ${r0} / n\` wird von links nach rechts gerechnet: erst multiplizieren, dann ganzzahlig durch ${n} teilen.`,
        loesung: `**Ansatz:** Für \`i\` = 0 bis ${n - 1} Radius und Grauwert berechnen.\n---\nRadien: ${zeilen.map((z) => z.split(" ")[0]).join(", ")}. Grauwerte: ${zeilen.map((z) => z.split(" ")[1]).join(", ")}.\n---\nDer größte Kreis kommt zuerst, damit die kleineren darüber sichtbar bleiben.`,
      };
    },
  }),
  drill({
    id: "gr-d-sterne",
    kapitel: K,
    titel: "Sterne einer Doppelschleife zählen",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(4, 8);
      const s = r.int(1, 3);
      const start = r.wahl(["0", "i"]);
      let summe = 0;
      const je: number[] = [];
      for (let i = 0; i < n; i++) {
        let z = 0;
        for (let j = start === "0" ? 0 : i; j < n; j += s) z++;
        je.push(z);
        summe += z;
      }
      const code = `int n = ${n};\nfor (int i = 0; i < n; i++) {\n    for (int j = ${start}; j < n; j ${s === 1 ? "++" : `+= ${s}`}) {\n        System.out.print("*");\n    }\n    System.out.println();\n}`;
      const falsch = start === "i" ? n * Math.ceil(n / s) : (n * (n + 1)) / 2;
      return {
        angabe: `${javaBlock(code)}\nWie viele Sterne werden insgesamt ausgegeben?`,
        teile: [{ typ: "zahl", loesung: je.join(" + "), fehler: falsch !== summe ? [{ wert: String(falsch), meldung: start === "i" ? "Die innere Schleife beginnt bei `j = i`, nicht bei 0. Mit jeder Zeile fallen Durchläufe weg." : "Die innere Schleife beginnt immer bei 0, die Grenze hängt nicht von `i` ab. Jede Zeile ist gleich lang." }] : undefined }],
        hinweis: "Bestimme für jedes `i` die Werte von `j` und zähle sie. Achte auf Start und Schrittweite.",
        loesung: `**Ansatz:** ${start === "i" ? "Die innere Grenze hängt von `i` ab, also zeilenweise zählen." : "Jede Zeile hat gleich viele Sterne, also multiplizieren."}\n---\nSterne je Zeile: ${je.join(", ")}.\n---\nSumme: ${je.join(" + ")} = ${summe}.`,
      };
    },
  }),
  drill({
    id: "gr-d-masskette",
    kapitel: K,
    titel: "Koordinaten aus einer Maßkette",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(1, 6) * 10;
      const b = r.int(4, 12) * 10;
      const luecke = r.int(1, 4) * 5;
      const breite = r.int(2, 6) * 10;
      const hoehe = r.int(4, 10) * 10;
      const unten = r.int(1, 5) * 10;
      const mx = a + b + luecke + breite / 2;
      const my = 400 - unten - hoehe / 2;
      return {
        angabe: `Ein Fenster ist 400 mal 400 Pixel groß. Von links gemessen: ${a} Pixel Rand, ein Quadrat mit ${b} Pixeln, ${luecke} Pixel Lücke, dann eine Ellipse mit ${breite} Pixeln Breite. Die Ellipse ist ${hoehe} Pixel hoch, ihre Unterkante liegt ${unten} Pixel über dem unteren Fensterrand. Gib den Mittelpunkt (x, y) und die Radien für \`fillEllipse(x, y, rx, ry)\` an.`,
        teile: [
          { typ: "zahl", label: "x", loesung: `${a} + ${b} + ${luecke} + ${breite} / 2`, fehler: [{ wert: String(a + b + luecke), meldung: "Das ist die linke Kante der Ellipse. CodeDraw braucht den Mittelpunkt, also noch die halbe Breite dazu." }] },
          { typ: "zahl", label: "y", loesung: `400 - ${unten} - ${hoehe} / 2`, fehler: [{ wert: String(unten + hoehe / 2), meldung: "Das Maß gilt vom **unteren** Rand. Ziehe es von 400 ab." }] },
          { typ: "zahl", label: "rx", loesung: `${breite} / 2`, fehler: [{ wert: String(breite), meldung: "Die letzten beiden Werte sind Radien, also die halbe Breite." }] },
          { typ: "zahl", label: "ry", loesung: `${hoehe} / 2`, fehler: [{ wert: String(hoehe), meldung: "Auch der senkrechte Wert ist ein Radius, also die halbe Höhe." }] },
        ],
        hinweis: "Waagrecht die Maßkette von links aufsummieren, senkrecht vom unteren Rand abziehen. Bei Ellipsen Mittelpunkt und halbe Maße.",
        loesung: `**Ansatz:** Maßkette waagrecht, Maß vom unteren Rand senkrecht, dann in Mittelpunkt und Radien umrechnen.\n---\nLinke Kante ${a} + ${b} + ${luecke} = ${a + b + luecke}, Mittelpunkt x = ${mx}. Unterkante 400 − ${unten} = ${400 - unten}, Mittelpunkt y = ${my}.\n---\nRadien ${breite / 2} und ${hoehe / 2}. Aufruf \`fillEllipse(${mx}, ${my}, ${breite / 2}, ${hoehe / 2})\`.`,
      };
    },
  }),
];
