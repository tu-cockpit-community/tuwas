import { drill, type Drill } from "@/lib/lernen/training";

const K = "schleifen";

type Grenze = { offenLinks: boolean; offenRechts: boolean };

/** Intervall als Text, z. B. "]12, 40]" */
function intervallText(a: number, b: number, g: Grenze): string {
  return `${g.offenLinks ? "]" : "["}${a}, ${b}${g.offenRechts ? "[" : "]"}`;
}

/** alle ganzen Zahlen im Intervall */
function zahlenIm(a: number, b: number, g: Grenze): number[] {
  const out: number[] = [];
  for (let i = g.offenLinks ? a + 1 : a; g.offenRechts ? i < b : i <= b; i++) out.push(i);
  return out;
}

/** Java-Code einer Zeile als Markdown-Codeblock */
const javaBlock = (code: string) => "```java\n" + code + "\n```";

const WOERTER = ["Banane", "Kanonen", "Sonnenschein", "Programm", "Ananas", "Laterne", "Erdbeere", "Rennrad", "Tannenbaum", "Bernstein", "Kakaobohne", "Regenbogen"];
const SAETZE = ["Java macht Spass", "Heute regnet es sehr", "Ein Esel lernt eben gerne", "Wir lernen Schleifen", "Kurze Wege sparen Zeit", "Alle Wege fuehren nach Rom"];

export const DRILLS: Drill[] = [
  drill({
    id: "sl-d-intervallsumme",
    kapitel: K,
    titel: "Summe der Vielfachen in einem Intervall",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(3, 13);
      const a = k * r.int(1, 4);
      const b = a + k * r.int(3, 7);
      const g: Grenze = { offenLinks: r.zufall() < 0.5, offenRechts: r.zufall() < 0.5 };
      const treffer = zahlenIm(a, b, g).filter((x) => x % k === 0);
      const alleGeschlossen = zahlenIm(a, b, { offenLinks: false, offenRechts: false }).filter((x) => x % k === 0);
      const summe = treffer.reduce((s, x) => s + x, 0);
      const summeGeschlossen = alleGeschlossen.reduce((s, x) => s + x, 0);
      const fehler = summeGeschlossen !== summe ? [{ wert: String(summeGeschlossen), meldung: "Das ist die Summe für das **geschlossene** Intervall. Prüfe, ob die Grenzen selbst dazugehören: Eine Klammer, die von der Zahl weg zeigt, schließt sie aus." }] : undefined;
      const start = g.offenLinks ? a + 1 : a;
      const bed = g.offenRechts ? `i < ${b}` : `i <= ${b}`;
      return {
        angabe: `Eine Schleife addiert alle durch $${k}$ teilbaren Zahlen im Intervall \`${intervallText(a, b, g)}\`. Welche Summe gibt sie aus?`,
        teile: [{ typ: "zahl", loesung: treffer.length ? treffer.join(" + ") : "0", fehler }],
        hinweis: "Übersetze zuerst die Klammern: Zeigt die Klammer von der Zahl weg, gehört die Zahl nicht dazu.",
        loesung: `**Ansatz:** Das Intervall wird zu \`for (int i = ${start}; ${bed}; i++)\` mit dem Filter \`i % ${k} == 0\`.\n---\nDurch $${k}$ teilbar sind ${treffer.join(", ")}.\n---\nSumme: ${treffer.join(" + ")} = ${summe}.`,
      };
    },
  }),
  drill({
    id: "sl-d-for-ausgabe",
    kapitel: K,
    titel: "Ausgabe einer for-Schleife mit Schrittweite",
    niveau: 1,
    erzeuge: (r) => {
      const abwaerts = r.zufall() < 0.4;
      const s = r.int(2, 6);
      const a = abwaerts ? r.int(20, 40) : r.int(0, 10);
      const anzahl = r.int(3, 6);
      const ziel = abwaerts ? a - s * (anzahl - 1) - r.int(0, s - 1) : a + s * (anzahl - 1) + r.int(0, s - 1);
      const inkl = r.zufall() < 0.5;
      const op = abwaerts ? (inkl ? ">=" : ">") : inkl ? "<=" : "<";
      const werte: number[] = [];
      for (let i = a; abwaerts ? (inkl ? i >= ziel : i > ziel) : inkl ? i <= ziel : i < ziel; i += abwaerts ? -s : s) werte.push(i);
      const code = `for (int i = ${a}; i ${op} ${ziel}; i ${abwaerts ? "-=" : "+="} ${s}) {\n    System.out.print(i + ";");\n}\nSystem.out.println();`;
      const ausgabe = werte.map((x) => x + ";").join("");
      const naechster = werte[werte.length - 1] + (abwaerts ? -s : s);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: ausgabe + "\n" }],
        hinweis: "Schreib die Werte von `i` beim Prüfen der Bedingung auf, bis die Bedingung falsch ist.",
        loesung: `**Ansatz:** Start bei ${a}, Schrittweite ${abwaerts ? "−" : "+"}${s}, Bedingung \`i ${op} ${ziel}\`.\n---\n\`i\` nimmt nacheinander ${werte.join(", ")} an. Bei ${naechster} ist die Bedingung falsch.\n---\nAusgabe: \`${ausgabe}\``,
      };
    },
  }),
  drill({
    id: "sl-d-durchlaeufe",
    kapitel: K,
    titel: "Durchläufe einer for-Schleife zählen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(0, 20);
      const b = a + r.int(5, 40);
      const s = r.wahl([1, 1, 2, 3, 5]);
      const inkl = r.zufall() < 0.5;
      let n = 0;
      for (let i = a; inkl ? i <= b : i < b; i += s) n++;
      const fehler = s === 1 ? [{ wert: String(inkl ? b - a : b - a + 1), meldung: inkl ? "Bei `<=` gehört der Endwert dazu. Es sind b − a + 1 Durchläufe." : "Bei `<` gehört der Endwert nicht dazu. Es sind b − a Durchläufe." }] : undefined;
      return {
        angabe: `Wie oft wird der Rumpf von \`for (int i = ${a}; i ${inkl ? "<=" : "<"} ${b}; i += ${s}) { ... }\` ausgeführt?`,
        teile: [{ typ: "zahl", loesung: String(n), fehler }],
        hinweis: s === 1 ? "Mit Schrittweite 1: `<` ergibt b − a, `<=` ergibt b − a + 1 Durchläufe." : "Zähle die Werte a, a + s, a + 2s, … bis zum ersten, der die Bedingung verletzt.",
        loesung: `**Ansatz:** Werte von \`i\` von ${a} in Schritten von ${s}, solange \`i ${inkl ? "<=" : "<"} ${b}\`.\n---\nDer letzte Wert ist ${a + (n - 1) * s}, der nächste wäre ${a + n * s}.\n---\nAnzahl: ${n} Durchläufe.`,
      };
    },
  }),
  drill({
    id: "sl-d-trennzeichen",
    kapitel: K,
    titel: "Trennzeichen zwischen den Zahlen",
    niveau: 2,
    erzeuge: (r) => {
      const variante = r.int(0, 2);
      const sep = r.wahl(["-", "*", "+", "#", ","]);
      const k = r.int(3, 9);
      const a = r.int(1, 10);
      const b = a + r.int(15, 40);
      const treffer = zahlenIm(a, b, { offenLinks: false, offenRechts: false }).filter((x) => x % k === 0);
      let code: string;
      let ausgabe: string;
      let erklaerung: string;
      if (variante === 0) {
        code = `System.out.print("${sep}");\nfor (int i = ${a}; i <= ${b}; i++) {\n    if (i % ${k} == 0) {\n        System.out.print(i + "${sep}");\n    }\n}\nSystem.out.println();`;
        ausgabe = sep + treffer.map((x) => x + sep).join("");
        erklaerung = "Ein Zeichen kommt vor die Schleife, danach folgt auf jede Zahl ein Zeichen. Es gibt also eins mehr als Zahlen.";
      } else if (variante === 1) {
        code = `for (int i = ${a}; i <= ${b}; i++) {\n    if (i % ${k} == 0) {\n        System.out.print(i);\n        if (i < ${b}) {\n            System.out.print("${sep}");\n        }\n    }\n}\nSystem.out.println();`;
        ausgabe = treffer.map((x) => (x < b ? x + sep : String(x))).join("");
        erklaerung = `Das Zeichen folgt jeder Zahl, die kleiner als ${b} ist. ${treffer[treffer.length - 1] === b ? `Die letzte Zahl ist genau ${b}, deshalb fehlt dort das Zeichen.` : `Die letzte ausgegebene Zahl ist kleiner als ${b}, deshalb steht auch am Ende ein Zeichen.`}`;
      } else {
        code = `boolean erste = true;\nfor (int i = ${a}; i <= ${b}; i++) {\n    if (i % ${k} == 0) {\n        if (!erste) {\n            System.out.print("${sep}");\n        }\n        System.out.print(i);\n        erste = false;\n    }\n}\nSystem.out.println();`;
        ausgabe = treffer.join(sep);
        erklaerung = "Das Flag `erste` sorgt dafür, dass das Zeichen vor jeder Zahl außer der ersten steht. So gibt es genau ein Zeichen zwischen zwei Zahlen.";
      }
      const ohne = treffer.join(sep);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: ausgabe + "\n", fehler: ohne !== ausgabe ? [{ wert: ohne, meldung: "Zähle die Trennzeichen genau. Steht eines am Anfang oder am Ende?" }] : undefined }],
        hinweis: `Bestimme zuerst die Vielfachen von ${k} zwischen ${a} und ${b}. Prüfe dann, wo die Trennzeichen stehen.`,
        loesung: `**Ansatz:** Ausgegeben werden die Vielfachen von ${k} in [${a}, ${b}]: ${treffer.join(", ")}.\n---\n${erklaerung}\n---\nAusgabe: \`${ausgabe}\``,
      };
    },
  }),
  drill({
    id: "sl-d-ascii",
    kapitel: K,
    titel: "Zeichen absteigend mit Beistrichen",
    niveau: 2,
    erzeuge: (r) => {
      const gross = r.zufall() < 0.5;
      const basis = gross ? 65 : 97;
      const lo = basis + r.int(0, 15);
      const hi = lo + r.int(4, 8);
      const zeichen: string[] = [];
      for (let i = hi - 1; i > lo; i--) zeichen.push(String.fromCharCode(i));
      const code = `for (int i = ${hi - 1}; i > ${lo}; i--) {\n    System.out.print((char) i);\n    if (i > ${lo + 1}) {\n        System.out.print(",");\n    }\n}\nSystem.out.println();`;
      const ausgabe = zeichen.join(",");
      return {
        angabe: `Der Buchstabe \`${String.fromCharCode(basis)}\` hat den Zeichencode ${basis}, die folgenden Buchstaben haben die nächsten Codes. Was gibt das Programm aus?`,
        teile: [{ typ: "ausgabe", code, loesung: ausgabe + "\n", fehler: [{ wert: ausgabe + ",", meldung: `Beim letzten Durchlauf ist \`i = ${lo + 1}\`. Dann ist \`i > ${lo + 1}\` falsch, und es folgt kein Beistrich.` }] }],
        hinweis: `Rechne die Codes ${hi - 1} bis ${lo + 1} in Buchstaben um. Der Cast \`(char) i\` gibt das Zeichen aus, nicht die Zahl.`,
        loesung: `**Ansatz:** \`i\` läuft abwärts von ${hi - 1} bis ${lo + 1}. Das ist das Intervall ]${lo}, ${hi}[ rückwärts.\n---\nDie Zeichen sind ${zeichen.join(", ")}. Nach jedem außer dem letzten folgt ein Beistrich.\n---\nAusgabe: \`${ausgabe}\``,
      };
    },
  }),
  drill({
    id: "sl-d-bedingung-aendern",
    kapitel: K,
    titel: "Schleifenbedingung ändern: Anzahl der Ausgaben",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.wahl([3, 5, 6]);
      const faktor = r.int(1, 2);
      const aussen = faktor * n;
      const variante = r.int(0, 2);
      const original = aussen * (n + 1);
      let neu = 0;
      let neueBedingung: string;
      if (variante === 0) {
        neueBedingung = "j <= i % n";
        for (let i = 0; i < aussen; i++) neu += (i % n) + 1;
      } else if (variante === 1) {
        neueBedingung = "j < i";
        for (let i = 0; i < aussen; i++) neu += i;
      } else {
        neueBedingung = "j < n / 2";
        for (let i = 0; i < aussen; i++) neu += Math.floor(n / 2);
      }
      const fehlerB =
        variante === 0
          ? [{ wert: String(neu - aussen), meldung: "Für `i % n = 0` läuft die innere Schleife noch einmal, denn `j = 0` erfüllt `0 <= 0`." }]
          : variante === 1
            ? [{ wert: String(neu + aussen), meldung: "`j < i` schließt `i` selbst aus. Bei `i = 0` läuft die innere Schleife keinmal, bei `i = 1` einmal." }]
            : n % 2 === 1
              ? [{ wert: String((aussen * n) / 2), meldung: "`n / 2` ist Ganzzahldivision, der Rest fällt weg." }]
              : undefined;
      const kopf = faktor === 1 ? "i < n" : "i < 2 * n";
      const code = `int n = ${n};\nfor (int i = 0; ${kopf}; i++) {\n    for (int j = 0; j <= n; j++) {     // Zeile C\n        System.out.print("*");\n    }\n    System.out.println();\n}`;
      return {
        angabe: `${javaBlock(code)}\na) Wie viele Sterne werden ausgegeben?\nb) Die Bedingung in Zeile C wird durch \`${neueBedingung}\` ersetzt. Wie viele Sterne sind es dann?`,
        teile: [
          { typ: "zahl", label: "a) ursprünglich", loesung: `${aussen} * ${n + 1}`, fehler: [{ wert: String(aussen * n), meldung: `\`j <= n\` schließt n ein: \`j\` läuft von 0 bis ${n}, das sind ${n + 1} Werte.` }] },
          { typ: "zahl", label: "b) nach der Änderung", loesung: String(neu), fehler: fehlerB },
        ],
        hinweis: "Bei festen Grenzen multiplizierst du. Hängt die innere Grenze von `i` ab, zählst du für jedes `i` einzeln und addierst.",
        loesung: `**Ansatz:** Die äußere Schleife läuft ${aussen} Mal (i = 0 bis ${aussen - 1}).\n---\na) Innen ${n + 1} Durchläufe, also ${aussen} · ${n + 1} = ${original} Sterne.\n---\nb) Mit \`${neueBedingung}\` ergibt sich je Zeile: ${Array.from({ length: aussen }, (_, i) => (variante === 0 ? (i % n) + 1 : variante === 1 ? i : Math.floor(n / 2))).join(" + ")} = ${neu}. (Beachte: \`n / 2\` ist Ganzzahldivision.)`,
      };
    },
  }),
  drill({
    id: "sl-d-rueckwaerts-filter",
    kapitel: K,
    titel: "String rückwärts mit Filter",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.wahl(WOERTER);
      const kandidaten = [...new Set(w.toLowerCase().split(""))];
      const x = r.wahl(kandidaten);
      let erg = "";
      for (let i = w.length - 1; i >= 0; i--) if (w[i] !== x) erg += w[i];
      const ohneFilter = w.split("").reverse().join("");
      const code = `String w = "${w}";\nString r = "";\nfor (int i = w.length() - 1; i >= 0; i--) {\n    if (w.charAt(i) != '${x}') {\n        r = r + w.charAt(i);\n    }\n}\nSystem.out.println(r);`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: erg + "\n", fehler: ohneFilter !== erg ? [{ wert: ohneFilter, meldung: `Das \`if\` lässt jedes \`${x}\` weg. Groß- und Kleinbuchstaben sind dabei verschiedene Zeichen.` }] : undefined }],
        hinweis: `Lies das Wort von hinten und streiche jedes kleine \`${x}\`.`,
        loesung: `**Ansatz:** Rückwärts durchlaufen, Filter \`!= '${x}'\`.\n---\nRückwärts gelesen lautet „${w}“ \`${ohneFilter}\`.\n---\nOhne die Zeichen \`${x}\` bleibt \`${erg}\`.`,
      };
    },
  }),
  drill({
    id: "sl-d-jedes-kte",
    kapitel: K,
    titel: "Jedes k-te Zeichen ohne ein bestimmtes Zeichen",
    niveau: 2,
    erzeuge: (r) => {
      const t = r.wahl(SAETZE);
      const start = r.int(0, 1);
      const schritt = r.int(2, 3);
      const x = r.wahl(["e", "n", "a", "r"]);
      let erg = "";
      const genommen: string[] = [];
      for (let i = start; i < t.length; i += schritt) {
        genommen.push(t[i] === " " ? "␣" : t[i]);
        if (t[i] !== x) erg += t[i];
      }
      const code = `String t = "${t}";\nint i = ${start};\nwhile (i < t.length()) {\n    if (t.charAt(i) != '${x}') {\n        System.out.print(t.charAt(i));\n    }\n    i += ${schritt};\n}\nSystem.out.println();`;
      return {
        angabe: "Was gibt das Programm aus? (Leerzeichen zählen als Zeichen. Ein Leerzeichen ganz am Zeilenende darfst du weglassen.)",
        teile: [{ typ: "ausgabe", code, loesung: erg + "\n", trim: true }],
        hinweis: `Schreib die Indizes ${start}, ${start + schritt}, ${start + 2 * schritt}, … und die Zeichen dort auf. Der Index beginnt bei 0.`,
        loesung: `**Ansatz:** Index ${start}, dann immer ${schritt} weiter, solange der Index kleiner als ${t.length} ist.\n---\nGelesen werden (␣ steht für ein Leerzeichen): ${genommen.join(" ")}.\n---\nOhne \`${x}\` bleibt \`${erg}\`.`,
      };
    },
  }),
  drill({
    id: "sl-d-zaehlen",
    kapitel: K,
    titel: "Buchstaben aus einem Bereich zählen",
    niveau: 1,
    erzeuge: (r) => {
      const t = r.wahl(SAETZE);
      const von = r.int(0, 12);
      const bis = von + r.int(3, 10);
      const kv = String.fromCharCode(97 + von), kb = String.fromCharCode(97 + bis);
      const gv = kv.toUpperCase(), gb = kb.toUpperCase();
      const zaehlt = (c: string) => (c >= kv && c <= kb) || (c >= gv && c <= gb);
      const treffer = t.split("").filter(zaehlt);
      const nurKlein = t.split("").filter((c) => c >= kv && c <= kb).length;
      const code = `String t = "${t}";\nint n = 0;\nfor (int i = 0; i < t.length(); i++) {\n    char c = t.charAt(i);\n    if ((c >= '${kv}' && c <= '${kb}') || (c >= '${gv}' && c <= '${gb}')) {\n        n++;\n    }\n}\nSystem.out.println(n);`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${treffer.length}\n`, fehler: nurKlein !== treffer.length ? [{ wert: String(nurKlein), meldung: "Die Bedingung zählt auch Großbuchstaben aus dem Bereich." }] : undefined }],
        hinweis: `Gezählt werden die Buchstaben von ${kv} bis ${kb}, klein und groß.`,
        loesung: `**Ansatz:** Jedes Zeichen von „${t}“ prüfen: liegt es zwischen ${kv} und ${kb} oder zwischen ${gv} und ${gb}?\n---\nGezählt werden: ${treffer.length ? treffer.join(", ") : "keine"}.\n---\nAusgabe: \`${treffer.length}\``,
      };
    },
  }),
  drill({
    id: "sl-d-indexof",
    kapitel: K,
    titel: "Suchschleife: erstes Vorkommen",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.wahl(WOERTER);
      const x = r.wahl(["a", "e", "n", "o", "r", "z", "b"]);
      const idx = w.indexOf(x);
      const code = `String s = "${w}";\nint i = 0;\nwhile (i < s.length() && s.charAt(i) != '${x}') {\n    i++;\n}\nif (i < s.length()) {\n    System.out.println(i);\n} else {\n    System.out.println(-1);\n}`;
      const letztes = w.lastIndexOf(x);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${idx}\n`, fehler: letztes !== idx ? [{ wert: String(letztes), meldung: "Die Schleife hört beim **ersten** Treffer auf, nicht beim letzten." }] : idx === -1 ? [{ wert: String(w.length), meldung: "Nach einer erfolglosen Suche wird nicht `i`, sondern -1 ausgegeben." }] : undefined }],
        hinweis: "Zähle die Indizes ab 0. Groß- und Kleinbuchstaben sind verschiedene Zeichen.",
        loesung: `**Ansatz:** Die Schleife rückt \`i\` weiter, bis \`'${x}'\` gefunden ist oder \`i\` die Länge ${w.length} erreicht.\n---\n${idx >= 0 ? `Das erste \`${x}\` in „${w}“ steht an Index ${idx}.` : `„${w}“ enthält kein kleines \`${x}\`. \`i\` endet bei ${w.length}.`}\n---\nAusgabe: \`${idx}\``,
      };
    },
  }),
  drill({
    id: "sl-d-while-trace",
    kapitel: K,
    titel: "Wie oft wird geteilt?",
    niveau: 1,
    erzeuge: (r) => {
      const d = r.int(2, 4);
      let n = r.int(30, 500);
      const start = n;
      const grenze = r.int(0, 1);
      let z = 0;
      const folge = [n];
      while (n > grenze) {
        n = Math.floor(n / d);
        z++;
        folge.push(n);
      }
      const code = `int n = ${start};\nint z = 0;\nwhile (n > ${grenze}) {\n    n = n / ${d};\n    z++;\n}\nSystem.out.println(z + " " + n);`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${z} ${n}\n`, fehler: [{ wert: `${z + 1} ${Math.floor(n / d)}`, meldung: `Bei \`n = ${n}\` ist \`n > ${grenze}\` schon falsch. Dann wird nicht mehr geteilt.` }] }],
        hinweis: `\`n / ${d}\` ist Ganzzahldivision. Schreib die Folge der Werte von \`n\` auf.`,
        loesung: `**Ansatz:** Trace-Tabelle mit \`n\` und \`z\`. Geteilt wird, solange \`n > ${grenze}\`.\n---\n\`n\` durchläuft ${folge.join(" → ")}.\n---\nDas sind ${z} Divisionen. Ausgabe: \`${z} ${n}\``,
      };
    },
  }),
  drill({
    id: "sl-d-do-while",
    kapitel: K,
    titel: "while und do-while vergleichen",
    niveau: 2,
    erzeuge: (r) => {
      const s = r.int(2, 5);
      const x0 = r.int(0, 20);
      const g = x0 + r.int(-6, 10);
      let wAnz = 0;
      for (let x = x0; x < g; x += s) wAnz++;
      let dAnz = 0;
      let y = x0;
      do {
        dAnz++;
        y += s;
      } while (y < g);
      const code = `int x = ${x0};\nwhile (x < ${g}) {\n    System.out.print("W");\n    x += ${s};\n}\nint y = ${x0};\ndo {\n    System.out.print("D");\n    y += ${s};\n} while (y < ${g});\nSystem.out.println();`;
      const ausgabe = "W".repeat(wAnz) + "D".repeat(dAnz);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: ausgabe + "\n", fehler: wAnz !== dAnz ? [{ wert: "W".repeat(wAnz) + "D".repeat(wAnz), meldung: "Die do-while-Schleife prüft erst nach dem Rumpf. Sie läuft mindestens einmal." }] : undefined }],
        hinweis: "Beide Schleifen haben dieselbe Bedingung. Entscheidend ist, ob vor oder nach dem Rumpf geprüft wird.",
        loesung: `**Ansatz:** \`while\` prüft vor jedem Durchlauf, \`do-while\` danach.\n---\nwhile: ${wAnz} Durchläufe${wAnz === 0 ? `, weil \`${x0} < ${g}\` schon am Anfang falsch ist` : ""}. do-while: ${dAnz} Durchläufe.\n---\nAusgabe: \`${ausgabe}\``,
      };
    },
  }),
  drill({
    id: "sl-d-akku-string",
    kapitel: K,
    titel: "Ergebnis-String vorne oder hinten aufbauen",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.wahl(["Java", "Code", "Loop", "Rad", "Uhr", "Ziel", "Mond"]);
      const sep = r.wahl(["#", "-", "*"]);
      const vorne = r.zufall() < 0.6;
      let erg = "";
      for (const c of w) erg = vorne ? c + sep + erg : erg + c + sep;
      const anders = w.split("").reduce((acc, c) => (vorne ? acc + c + sep : c + sep + acc), "");
      const zeile = vorne ? `neu = wort.charAt(i) + "${sep}" + neu;` : `neu = neu + wort.charAt(i) + "${sep}";`;
      const code = `String wort = "${w}";\nString neu = "";\nfor (int i = 0; i < wort.length(); i++) {\n    ${zeile}\n}\nSystem.out.println(neu);`;
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: erg + "\n", fehler: [{ wert: anders, meldung: vorne ? "Das neue Stück steht **vor** `neu`. Dadurch dreht sich die Reihenfolge um." : "Das neue Stück wird **hinten** angehängt. Die Reihenfolge bleibt erhalten." }] }],
        hinweis: "Verfolge `neu` nach jedem Durchlauf. Steht das neue Zeichen links oder rechts von `neu`?",
        loesung: `**Ansatz:** Akkumulator-String. ${vorne ? "Jedes Zeichen kommt vorne dazu, also entsteht die Umkehrung." : "Jedes Zeichen kommt hinten dazu, die Reihenfolge bleibt."}\n---\nNach dem ersten Durchlauf ist \`neu\` gleich \`${w[0]}${sep}\`.\n---\nAm Ende: \`${erg}\``,
      };
    },
  }),
];
