import { drill, type Drill, type Rng } from "@/lib/lernen/training";
import type { Teil } from "@/lib/lernen/typen";

const K = "komplexitaet";

/** Java-Code als Markdown-Codeblock */
const javaBlock = (code: string) => "```java\n" + code + "\n```";

/** Die O-Klassen in der Reihenfolge ihres Wachstums (Anzeige mit KaTeX). */
const KLASSEN = ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n \\log n)$", "$O(n^2)$", "$O(n^3)$"] as const;
/** Dieselben Klassen als Text für Kommentare im Code. */
const KLASSEN_CODE = ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n^2)", "O(n^3)"] as const;
type Klasse = 0 | 1 | 2 | 3 | 4 | 5;

/** Ein Code-Stück mit seiner kleinsten oberen Schranke und der häufigsten Fehleinschätzung. */
interface Fragment {
  code: string;
  klasse: Klasse;
  falsch: Klasse;
  falschMeldung: string;
  erklaerung: string;
}

/** Erzeugt ein zufälliges Quiz-Fragment (Muster aus TUWEL-Test 2, Frage 6) mit neuen Konstanten. */
function fragment(r: Rng): Fragment {
  const art = r.int(0, 9);
  switch (art) {
    case 0: {
      const a = r.int(8, 40);
      const b = r.int(8, 40);
      return {
        code: `for (int i = 0; i < ${a}; i++) {\n    for (int j = 0; j < ${b}; j++) {\n        sum += i + j;\n    }\n}`,
        klasse: 0,
        falsch: 4,
        falschMeldung: "In keiner Grenze kommt n vor. Die Zahl der Durchläufe ist fest, egal wie groß n ist.",
        erklaerung: `Beide Grenzen sind fest. Es sind immer ${a} · ${b} = ${a * b} Ausführungen, also O(1).`,
      };
    }
    case 1: {
      const c = r.int(3, 12);
      return {
        code: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j < ${c}; j++) {\n        sum += i + j;\n    }\n}`,
        klasse: 2,
        falsch: 4,
        falschMeldung: `Die innere Schleife läuft immer genau ${c}-mal, egal wie groß n ist. Verschachtelt heißt nicht automatisch n².`,
        erklaerung: `Außen n, innen ${c} Durchläufe: ${c}n, also O(n).`,
      };
    }
    case 2: {
      const k = r.int(2, 6);
      return {
        code: `// Vorbedingung: n >= ${k}\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j += n / ${k}) {\n        sum += i + j;\n    }\n}`,
        klasse: 2,
        falsch: 4,
        falschMeldung: `Die Schrittweite n / ${k} wächst mit n. Die innere Schleife läuft deshalb bei großem n immer nur ${k}- oder ${k + 1}-mal.`,
        erklaerung: `Die innere Schleife springt in Schritten von n / ${k}, also läuft sie nur konstant oft (bei großem n ${k}- oder ${k + 1}-mal). Mit n äußeren Durchläufen: O(n).`,
      };
    }
    case 3: {
      const k = r.int(2, 5);
      const s = r.int(2, 6);
      return {
        code: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n / ${k}; j += ${s}) {\n        sum += i + j;\n    }\n}`,
        klasse: 4,
        falsch: 3,
        falschMeldung: `Eine Grenze n / ${k} und eine feste Schrittweite ${s} ändern nur den Faktor. Logarithmisch wird es erst durch Multiplizieren oder Teilen der Laufvariable.`,
        erklaerung: `Innen etwa n / ${k * s} Durchläufe, das wächst linear mit n. Zusammen n · n / ${k * s}, also O(n²).`,
      };
    }
    case 4: {
      const k = r.int(2, 4);
      return {
        code: `for (int i = 0; i < n; i++) {\n    int j = 1;\n    while (j < n) {\n        sum += i + j;\n        j *= ${k};\n    }\n}`,
        klasse: 3,
        falsch: 4,
        falschMeldung: `\`j\` wird mit ${k} multipliziert und erreicht n nach etwa log n Schritten, nicht nach n.`,
        erklaerung: `Innen log${k === 2 ? "₂" : k === 3 ? "₃" : "₄"} n Durchläufe, außen n. Zusammen O(n log n).`,
      };
    }
    case 5: {
      const k = r.int(2, 4);
      return {
        code: `for (int i = n; i > 1; i /= ${k}) {\n    sum += i;\n}`,
        klasse: 1,
        falsch: 2,
        falschMeldung: `Die Schleife zählt nicht um 1 herunter, sondern teilt durch ${k}. Bei n = 1000 sind es nur wenige Durchläufe.`,
        erklaerung: `\`i\` wird in jedem Schritt durch ${k} geteilt. Das sind etwa log n Durchläufe, also O(log n).`,
      };
    }
    case 6: {
      const c = r.int(2, 9);
      return {
        code: `for (int i = 0; i < n * n; i++) {\n    for (int j = 0; j < ${c}; j++) {\n        sum += i + j;\n    }\n}`,
        klasse: 4,
        falsch: 2,
        falschMeldung: "Die äußere Grenze ist n · n. Schon die äußere Schleife allein läuft n²-mal.",
        erklaerung: `Außen n², innen ${c}: ${c}n², also O(n²).`,
      };
    }
    case 7: {
      return {
        code: "for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        for (int k = 0; k < n; k++) {\n            sum += i + j + k;\n        }\n    }\n}",
        klasse: 5,
        falsch: 4,
        falschMeldung: "Alle drei Schleifen laufen bis n. Verschachtelt wird multipliziert: n · n · n.",
        erklaerung: "Drei verschachtelte Schleifen bis n: n³, also O(n³).",
      };
    }
    case 8: {
      return {
        code: "for (int i = 1; i < n; i *= 2) {\n    for (int j = 0; j < i; j++) {\n        sum += i + j;\n    }\n}",
        klasse: 2,
        falsch: 3,
        falschMeldung: "Die innere Schleife läuft nur beim letzten Mal fast n-mal, davor viel weniger. 1 + 2 + 4 + … bleibt unter 2n.",
        erklaerung: "Die inneren Durchläufe sind 1 + 2 + 4 + … und bleiben unter 2n. Das ist O(n), obwohl außen log n Durchläufe stehen.",
      };
    }
    default: {
      return {
        code: "int j = 0;\nfor (int i = 0; i < n; i++) {\n    while (j < 2 * n) {\n        j++;\n        sum += i + j;\n    }\n}",
        klasse: 2,
        falsch: 4,
        falschMeldung: "`j` wird nie zurückgesetzt. Nach dem ersten äußeren Durchlauf ist `j = 2n`, und die innere Schleife läuft nie wieder.",
        erklaerung: "Ohne Zurücksetzen läuft die innere Schleife insgesamt nur 2n-mal, alle im ersten äußeren Durchlauf. Mit den n äußeren Durchläufen: 3n, also O(n).",
      };
    }
  }
}

/** Zählt die Werte 1, k, k², … kleiner als n. */
function potenzenUnter(n: number, k: number): number[] {
  const w: number[] = [];
  for (let j = 1; j < n; j *= k) w.push(j);
  return w;
}

export const DRILLS: Drill[] = [
  drill({
    id: "ko-d-for-durchlaeufe",
    kapitel: K,
    titel: "Durchläufe einer for-Schleife",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(0, 15);
      const b = a + r.int(6, 40);
      const s = r.wahl([1, 1, 2, 3, 4, 5]);
      const inkl = r.zufall() < 0.5;
      const werte: number[] = [];
      for (let i = a; inkl ? i <= b : i < b; i += s) werte.push(i);
      const n = werte.length;
      const fehler =
        s === 1
          ? [{ wert: String(inkl ? b - a : b - a + 1), meldung: inkl ? "Mit `<=` gehört der Endwert dazu. Es sind Ende − Start + 1 Durchläufe." : "Mit `<` gehört der Endwert nicht dazu. Es sind Ende − Start Durchläufe." }]
          : [{ wert: String(inkl ? b - a + 1 : b - a), meldung: `Die Schrittweite ist ${s}, nicht 1. Es laufen nur die Werte ${a}, ${a + s}, ${a + 2 * s}, … durch.` }];
      return {
        angabe: `Wie oft läuft der Rumpf?\n\n${javaBlock(`for (int i = ${a}; i ${inkl ? "<=" : "<"} ${b}; i ${s === 1 ? "++" : `+= ${s}`}) {\n    sum += i;\n}`)}`,
        teile: [{ typ: "zahl", loesung: String(n), toleranz: 0.1, fehler }],
        hinweis: s === 1 ? "Bei Schrittweite 1: mit `<` sind es Ende − Start, mit `<=` Ende − Start + 1 Durchläufe." : "Schreib die Werte von `i` auf, bis die Bedingung falsch wird.",
        loesung: `**Ansatz:** Werte von \`i\` ab ${a} in Schritten von ${s}, solange \`i ${inkl ? "<=" : "<"} ${b}\` gilt.\n---\nDer erste Wert ist ${a}, der letzte ${werte[n - 1]}. Der nächste Wert ${werte[n - 1] + s} erfüllt die Bedingung nicht mehr.\n---\nDas sind ${n} Durchläufe.`,
      };
    },
  }),
  drill({
    id: "ko-d-doppel-fest",
    kapitel: K,
    titel: "Zwei Schleifen mit festen Grenzen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(3, 12);
      const b = r.int(3, 12);
      const inkl = r.zufall() < 0.5;
      const innen = inkl ? b + 1 : b;
      const fehler = [
        { wert: String(a + innen), meldung: "Die Anzahlen werden nicht addiert. Die innere Schleife läuft bei **jedem** äußeren Durchlauf vollständig." },
        ...(inkl ? [{ wert: String(a * b), meldung: `\`j <= ${b}\` schließt ${b} ein. \`j\` läuft von 0 bis ${b}, das sind ${b + 1} Werte.` }] : []),
      ];
      return {
        angabe: `Wie oft wird \`x++\` ausgeführt?\n\n${javaBlock(`for (int i = 0; i < ${a}; i++) {\n    for (int j = 0; j ${inkl ? "<=" : "<"} ${b}; j++) {\n        x++;\n    }\n}`)}`,
        teile: [{ typ: "zahl", loesung: `${a} * ${innen}`, toleranz: 0.1, fehler }],
        hinweis: "Die innere Grenze hängt nicht von `i` ab. Bestimme beide Anzahlen und multipliziere.",
        loesung: `**Ansatz:** Feste Grenzen, also äußere Anzahl mal innere Anzahl.\n---\nAußen ${a} Durchläufe, innen ${innen} (\`j\` von 0 bis ${inkl ? b : b - 1}).\n---\n${a} · ${innen} = ${a * innen}.`,
      };
    },
  }),
  drill({
    id: "ko-d-dreieck",
    kapitel: K,
    titel: "Abhängige innere Grenze: Dreieckszahlen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 30);
      const v = r.int(0, 3);
      const kopf = ["int j = i + 1; j < n; j++", "int j = 0; j < i; j++", "int j = 0; j <= i; j++", "int j = i; j < n; j++"][v];
      const plusEins = v >= 2;
      const ergebnis = plusEins ? (n * (n + 1)) / 2 : (n * (n - 1)) / 2;
      const folge = plusEins ? (v === 2 ? `1, 2, …, ${n}` : `${n}, ${n - 1}, …, 1`) : v === 0 ? `${n - 1}, ${n - 2}, …, 0` : `0, 1, …, ${n - 1}`;
      return {
        angabe: `Wie oft wird \`x++\` für \`n = ${n}\` ausgeführt?\n\n${javaBlock(`for (int i = 0; i < n; i++) {\n    for (${kopf}) {\n        x++;\n    }\n}`)}`,
        teile: [
          {
            typ: "zahl",
            loesung: plusEins ? `${n} * ${n + 1} / 2` : `${n} * ${n - 1} / 2`,
            toleranz: 0.1,
            fehler: [
              { wert: String(n * n), meldung: "Die innere Grenze hängt von `i` ab. Multiplizieren darf man nur bei festen Grenzen. Zähle für jedes `i` einzeln und addiere." },
              { wert: String(plusEins ? (n * (n - 1)) / 2 : (n * (n + 1)) / 2), meldung: "Prüfe den ersten und den letzten äußeren Durchlauf genau. Wie oft läuft die innere Schleife bei `i = 0`?" },
            ],
          },
        ],
        hinweis: "Bestimme die inneren Durchläufe für `i = 0` und für `i = n − 1`. Dazwischen ändert sich die Zahl jeweils um 1.",
        loesung: `**Ansatz:** Die innere Grenze hängt von \`i\` ab, also je \`i\` zählen und addieren.\n---\nFür \`i = 0, 1, …, ${n - 1}\` läuft die innere Schleife ${folge} Mal.\n---\nNach der Formel von Gauß ergibt das ${plusEins ? `${n} · ${n + 1} / 2` : `${n} · ${n - 1} / 2`} = ${ergebnis}.`,
      };
    },
  }),
  drill({
    id: "ko-d-multiplikativ",
    kapitel: K,
    titel: "Multiplizieren bis n",
    niveau: 1,
    erzeuge: (r) => {
      const k = r.wahl([2, 2, 3, 10]);
      const n = k === 10 ? r.int(150, 999999) : k === 3 ? r.int(30, 2000) : r.int(20, 5000);
      const werte = potenzenUnter(n, k);
      const z = werte.length;
      const naechster = werte[z - 1] * k;
      return {
        angabe: `Welchen Wert hat \`z\` nach der Schleife, wenn \`n = ${n}\` ist?\n\n${javaBlock(`int z = 0;\nint j = 1;\nwhile (j < n) {\n    j *= ${k};\n    z++;\n}`)}`,
        teile: [
          {
            typ: "zahl",
            loesung: String(z),
            toleranz: 0.1,
            fehler: [{ wert: String(Math.floor(n / k)), meldung: `\`j\` wird mit ${k} **multipliziert**, nicht um ${k} erhöht. Die Werte wachsen sehr schnell, die Schleife läuft nur wenige Male.` }],
          },
        ],
        hinweis: `Schreib die Werte von \`j\` beim Prüfen auf: 1, ${k}, ${k * k}, … bis die Bedingung \`j < ${n}\` falsch ist.`,
        loesung: `**Ansatz:** \`j\` beginnt bei 1 und wird in jedem Durchlauf mit ${k} multipliziert.\n---\nDie Werte unter ${n} sind ${werte.join(", ")}. Danach ist \`j = ${naechster}\`, und \`${naechster} < ${n}\` ist falsch.\n---\n\`z = ${z}\`. Das ist der Logarithmus zur Basis ${k} von ${n}, aufgerundet. Die Schleife liegt in O(log n).`,
      };
    },
  }),
  drill({
    id: "ko-d-polynom",
    kapitel: K,
    titel: "O-Klasse eines Polynoms",
    niveau: 1,
    erzeuge: (r) => {
      const d = r.int(1, 3);
      const koeff = [r.int(1, 50), r.int(1, 90), r.int(1, 9), r.int(1, 5)].slice(0, d + 1);
      // höchster Koeffizient klein, ein kleinerer Grad mit großem Koeffizienten als Falle
      const teile = koeff.map((c, i) => ({ c, i })).reverse();
      const term = teile.map(({ c, i }) => (i === 0 ? `${c}` : i === 1 ? `${c}n` : `${c}n^${i}`)).join(" + ");
      const optionen = ["$O(1)$", "$O(n)$", "$O(n^2)$", "$O(n^3)$"];
      const fehler = optionen
        .map((_, i) => i)
        .filter((i) => i !== d)
        .map((i) => ({
          wert: i,
          meldung: i < d ? `Der Summand mit der **höchsten** Potenz bestimmt das Wachstum, auch wenn sein Faktor klein ist. Hier kommt n^${d} vor.` : `${optionen[i].replace(/\$/g, "")} ist zwar eine obere Schranke, aber nicht die kleinste. Die höchste Potenz ist n^${d}.`,
        }));
      return {
        angabe: `Eine Methode führt $${term}$ Operationen aus. Welche kleinste obere Schranke hat ihre Laufzeit?`,
        teile: [{ typ: "auswahl", optionen, richtig: [d], fehler }],
        hinweis: "Behalte nur den Summanden mit der höchsten Potenz von n und lass seinen Faktor weg.",
        loesung: `**Ansatz:** Den am schnellsten wachsenden Summanden suchen.\n---\nDie höchste Potenz ist $n^${d}$ mit Faktor ${koeff[d]}. Die übrigen Summanden wachsen langsamer, auch wenn ihre Faktoren größer sind.\n---\nOhne Faktor bleibt ${optionen[d]}.`,
      };
    },
  }),
  drill({
    id: "ko-d-n0",
    kapitel: K,
    titel: "Das kleinste n0 finden",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const d = r.int(1, 3);
      const c = a + d;
      const b = r.int(3, 40);
      const n0 = Math.ceil(b / d);
      const fehler = n0 > 1 ? [{ wert: String(n0 - 1), meldung: `Setze n = ${n0 - 1} ein: ${a} · ${n0 - 1} + ${b} = ${a * (n0 - 1) + b}, aber ${c} · ${n0 - 1} = ${c * (n0 - 1)}. Dort gilt die Ungleichung noch nicht.` }] : [];
      return {
        angabe: `Für f(n) = ${a}n + ${b} wählen wir c = ${c}. Was ist die kleinste ganze Zahl n₀ ≥ 1, sodass ${a}n + ${b} ≤ ${c}n für alle n ≥ n₀ gilt?`,
        teile: [{ typ: "zahl", loesung: String(n0), toleranz: 0.1, fehler: fehler.length ? fehler : undefined }],
        hinweis: `Ziehe auf beiden Seiten ${a}n ab und löse nach n auf.`,
        loesung: `**Ansatz:** Die Ungleichung nach n auflösen.\n---\n${a}n + ${b} ≤ ${c}n wird zu ${b} ≤ ${d}n, also n ≥ ${b}/${d}${d === 1 ? "" : ` = ${(b / d).toFixed(2).replace(".", ",")}`}.\n---\nDie kleinste ganze Zahl ist n₀ = ${n0}. Probe: ${a} · ${n0} + ${b} = ${a * n0 + b} ≤ ${c * n0} = ${c} · ${n0}.`,
      };
    },
  }),
  drill({
    id: "ko-d-verdopplung",
    kapitel: K,
    titel: "Laufzeit hochrechnen",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.int(1, 3);
      const m = r.wahl([2, 3, 4, 10]);
      const t = r.int(1, 9);
      const n = r.wahl([500, 1000, 2000, 5000]);
      const name = ["", "O(n)", "O(n²)", "O(n³)"][k];
      const fehler = k > 1 ? [{ wert: String(t * m), meldung: `Das gilt nur für ein lineares Verfahren. Bei ${name} wird der Faktor ${m} hoch ${k} genommen.` }] : [{ wert: String(t * m * m), meldung: `Bei O(n) wächst die Zeit im selben Verhältnis wie n, also mal ${m}, nicht mal ${m}².` }];
      return {
        angabe: `Ein Verfahren mit Laufzeit in ${name} braucht für n = ${n} genau ${t} Sekunden. Wie viele Sekunden braucht es ungefähr für n = ${n * m}?`,
        teile: [{ typ: "zahl", loesung: `${t} * ${m}^${k}`, einheit: "s", fehler }],
        hinweis: `n wächst um den Faktor ${m}. Bei ${name} wächst die Laufzeit um ${m} hoch ${k}.`,
        loesung: `**Ansatz:** Faktor der Eingabe bestimmen und in die Klasse einsetzen.\n---\n${n * m} / ${n} = ${m}. Bei ${name} wächst die Zeit um ${m}${k > 1 ? `^${k} = ${m ** k}` : ""}.\n---\n${t} s · ${m ** k} = ${t * m ** k} s.`,
      };
    },
  }),
  drill({
    id: "ko-d-fragment-klasse",
    kapitel: K,
    titel: "Kleinste obere Schranke eines Code-Stücks",
    niveau: 2,
    erzeuge: (r) => {
      const f = fragment(r);
      return {
        angabe: `Welche kleinste obere Schranke hat die Laufzeit in Abhängigkeit von n?\n\n${javaBlock(f.code)}`,
        teile: [{ typ: "auswahl", optionen: [...KLASSEN], richtig: [f.klasse], fehler: [{ wert: f.falsch, meldung: f.falschMeldung }] }],
        hinweis: "Bestimme für jede Schleife, wie oft sie in Abhängigkeit von n läuft. Verschachtelt multiplizieren, hintereinander addieren.",
        loesung: `**Ansatz:** Durchläufe jeder Schleife in Abhängigkeit von n bestimmen.\n---\n${f.erklaerung}\n---\nAntwort: ${KLASSEN[f.klasse]}.`,
      };
    },
  }),
  drill({
    id: "ko-d-kommentar-rf",
    kapitel: K,
    titel: "Quiz: vier Kommentare beurteilen",
    niveau: 3,
    erzeuge: (r) => {
      const buchstaben = ["A", "B", "C", "D"];
      const stuecke = buchstaben.map(() => {
        const f = fragment(r);
        const stimmt = r.zufall() < 0.5;
        const behauptet: Klasse = stimmt ? f.klasse : f.falsch;
        return { f, stimmt, behauptet };
      });
      const angabe =
        "Jeder Kommentar nennt eine O-Klasse für die Laufzeit des Stücks darunter. Richtig ist er nur, wenn es die kleinste obere Schranke in Abhängigkeit von n ist. `n^2` steht für $n^2$, `n^3` für $n^3$. Entscheide für jeden Kommentar.\n\n" +
        stuecke.map((s, i) => `**${buchstaben[i]}**\n\n${javaBlock(`// Die Laufzeit liegt in ${KLASSEN_CODE[s.behauptet]}\n${s.f.code}`)}`).join("\n\n");
      const loesungsliste = stuecke.map((s) => (s.stimmt ? "r" : "f"));
      const alleR = ["r", "r", "r", "r"];
      const fehler = loesungsliste.some((x) => x === "f") ? [{ wert: alleR, meldung: "Nicht jeder Kommentar stimmt. Zähle für jedes Stück die Durchläufe für n = 8 und n = 16 und vergleiche, wie die Zahl wächst." }] : undefined;
      const teil: Teil = {
        typ: "richtigfalsch",
        aussagen: stuecke.map((s, i) => ({
          text: `Der Kommentar zu ${buchstaben[i]} ist richtig.`,
          richtig: s.stimmt,
          erklaerung: s.stimmt ? s.f.erklaerung : `${s.f.erklaerung} Der Kommentar ${KLASSEN_CODE[s.behauptet]} ist deshalb falsch.`,
        })),
        fehler,
      };
      return {
        angabe,
        teile: [teil],
        hinweis: "Achte auf feste Grenzen, Schrittweiten, die von n abhängen, Multiplizieren der Laufvariable und fehlendes Zurücksetzen bei while.",
        loesung: `**Ansatz:** Für jedes Stück die kleinste obere Schranke bestimmen und mit dem Kommentar vergleichen.\n---\n${stuecke.map((s, i) => `${buchstaben[i]}: ${s.f.erklaerung}`).join(" ")}\n---\nUrteile: ${stuecke.map((s, i) => `${buchstaben[i]} ${s.stimmt ? "richtig" : "falsch"}`).join(", ")}.`,
      };
    },
  }),
  drill({
    id: "ko-d-suche-vergleiche",
    kapitel: K,
    titel: "Vergleiche der linearen Suche",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 9);
      const pool = r.mische(Array.from({ length: 40 }, (_, i) => i + 1));
      const a = pool.slice(0, n);
      const vorhanden = r.zufall() < 0.7;
      const pos = vorhanden ? r.int(1, n - 2) : -1;
      const x = vorhanden ? a[pos] : pool[n];
      const vergleiche = vorhanden ? pos + 1 : n;
      const fehler = vorhanden
        ? [
            { wert: String(pos), meldung: `${pos} ist der **Index** des Treffers. Verglichen wurden die Elemente an den Indizes 0 bis ${pos}, und auch der Treffer selbst zählt.` },
            { wert: String(n), meldung: "Beim ersten Treffer beendet `return i` die Suche sofort. Sie läuft nicht bis zum Ende." },
          ]
        : [{ wert: "0", meldung: `Auch eine erfolglose Suche vergleicht. Sie muss jedes der ${n} Elemente ansehen, bevor sie -1 liefert.` }];
      return {
        angabe: `Wie viele Vergleiche \`a[i] == x\` macht die lineare Suche (Abbruch beim ersten Treffer) für \`x = ${x}\` im Array \`{${a.join(", ")}}\`?`,
        teile: [{ typ: "zahl", loesung: String(vergleiche), toleranz: 0.1, fehler }],
        hinweis: "Vergleiche von vorne. Jeder Vergleich zählt, auch der, der den Treffer findet.",
        loesung: `**Ansatz:** Von Index 0 an vergleichen, bis zum ersten Treffer oder bis zum Ende.\n---\n${vorhanden ? `${x} steht an Index ${pos}. Verglichen werden die Elemente an den Indizes 0 bis ${pos}.` : `${x} kommt nicht vor. Alle ${n} Elemente werden verglichen, dann liefert die Suche -1.`}\n---\nDas sind ${vergleiche} Vergleiche.`,
      };
    },
  }),
  drill({
    id: "ko-d-zaehler-ausgabe",
    kapitel: K,
    titel: "Zähler in verschachtelten Schleifen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 9);
      const s = r.int(2, 3);
      const k = r.wahl([2, 3]);
      let doppel = 0;
      const jeI: number[] = [];
      for (let i = 0; i < n; i++) {
        let c = 0;
        for (let j = i; j < n; j += s) c++;
        jeI.push(c);
        doppel += c;
      }
      const ks: number[] = [];
      for (let q = n; q > 0; q = Math.floor(q / k)) ks.push(q);
      const z = doppel + ks.length;
      const ohneSchritt = (n * (n + 1)) / 2 + ks.length;
      const code = `int n = ${n};\nint z = 0;\nfor (int i = 0; i < n; i++) {\n    for (int j = i; j < n; j += ${s}) {\n        z++;\n    }\n}\nfor (int q = n; q > 0; q /= ${k}) {\n    z++;\n}\nSystem.out.println(z);`;
      const fehler = [
        { wert: String(doppel), meldung: "Die Doppelschleife ist nur der erste Teil. Die Schleife mit `q` erhöht `z` danach noch weiter." },
        ...(ohneSchritt !== z ? [{ wert: String(ohneSchritt), meldung: `Die innere Schleife springt mit \`j += ${s}\`. Sie läuft nicht für jedes \`j\` von \`i\` bis ${n - 1}.` }] : []),
      ];
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [{ typ: "ausgabe", code, loesung: `${z}\n`, fehler }],
        hinweis: `Lege für die Doppelschleife eine Tabelle mit \`i\` und der Zahl der inneren Durchläufe an. \`q /= ${k}\` ist Ganzzahldivision.`,
        loesung: `**Ansatz:** Doppelschleife und dritte Schleife getrennt zählen, dann addieren.\n---\nInnere Durchläufe für \`i = 0\` bis ${n - 1}: ${jeI.join(" + ")} = ${doppel}.\n---\n\`q\` nimmt ${ks.join(", ")} an, das sind ${ks.length} Durchläufe.\n---\nAusgabe \`${z}\`, denn ${doppel} + ${ks.length} = ${z}.`,
      };
    },
  }),
  drill({
    id: "ko-d-mittlerer-fall",
    kapitel: K,
    titel: "Durchschnittlicher Fall der linearen Suche",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 60);
      return {
        angabe: `Ein Array hat ${n} verschiedene Elemente. Der gesuchte Wert kommt sicher vor, und jede Position ist gleich wahrscheinlich. Wie viele Vergleiche braucht die lineare Suche im Durchschnitt?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${n} + 1) / 2`,
            toleranz: 0.01,
            fehler: [
              { wert: String(n / 2), meldung: `n / 2 ist nur ungefähr richtig. Die Fälle reichen von 1 bis ${n} Vergleichen. Ihr Mittelwert ist (1 + ${n}) / 2.` },
              { wert: String(n), meldung: "Das ist der schlechteste Fall. Im Durchschnitt steht der Wert mal vorne, mal hinten." },
            ],
          },
        ],
        hinweis: "Steht der Wert an Position k (ab 1 gezählt), braucht die Suche k Vergleiche. Bilde den Mittelwert über alle Positionen.",
        loesung: `**Ansatz:** Mittelwert der Vergleiche über alle ${n} gleich wahrscheinlichen Positionen.\n---\nSumme 1 + 2 + … + ${n} = ${n} · ${n + 1} / 2 = ${(n * (n + 1)) / 2}.\n---\nGeteilt durch ${n}: (${n} + 1) / 2 = ${String((n + 1) / 2).replace(".", ",")} Vergleiche.`,
      };
    },
  }),
  drill({
    id: "ko-d-rekursion-aufrufe",
    kapitel: K,
    titel: "Aufrufe linearer und verzweigter Rekursion",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 8);
      const verzweigt = r.zufall() < 0.6;
      const code = verzweigt
        ? "static void f(int n) {\n    if (n > 0) {\n        f(n - 1);\n        f(n - 1);\n    }\n}"
        : "static void f(int n) {\n    if (n > 0) {\n        f(n - 1);\n    }\n}";
      const aufrufe = verzweigt ? 2 ** (n + 1) - 1 : n + 1;
      const fehler = verzweigt
        ? [
            { wert: String(2 ** n), meldung: `${2 ** n} sind nur die Aufrufe auf der untersten Ebene \`f(0)\`. Die Aufrufe darüber zählen auch.` },
            { wert: String(n + 1), meldung: "Jeder Aufruf mit n > 0 ruft sich **zweimal** auf. Die Zahl verdoppelt sich mit jeder Ebene." },
          ]
        : [{ wert: String(n), meldung: "Auch der Basisfall `f(0)` ist ein Aufruf." }];
      return {
        angabe: `Wie viele Aufrufe von \`f\` gibt es insgesamt für den Startaufruf \`f(${n})\`, ihn eingeschlossen? In welcher Klasse liegt diese Zahl?\n\n${javaBlock(code)}`,
        teile: [
          { typ: "zahl", label: "Anzahl der Aufrufe", loesung: String(aufrufe), toleranz: 0.1, fehler },
          {
            typ: "auswahl",
            label: "Klasse in Abhängigkeit von n",
            optionen: ["$O(n)$", "$O(n^2)$", "$O(2^n)$"],
            richtig: [verzweigt ? 2 : 0],
            fehler: [{ wert: 1, meldung: verzweigt ? "Zähle für n = 10: 2047 Aufrufe, viel mehr als 10² = 100. Das ist exponentiell." : "Jede Ebene hat genau einen Aufruf. Bei n Ebenen sind das n + 1 Aufrufe, linear." }],
          },
        ],
        hinweis: verzweigt ? "Zähle die Aufrufe je Ebene: 1, 2, 4, … und addiere." : "Jeder Aufruf erzeugt höchstens einen weiteren. Zähle von n bis 0.",
        loesung: verzweigt
          ? `**Ansatz:** Jede Ebene hat doppelt so viele Aufrufe wie die darüber.\n---\nEbenen \`f(${n})\` bis \`f(0)\`: 1 + 2 + … + ${2 ** n} = ${aufrufe} = 2^${n + 1} − 1.\n---\nDie Zahl wächst wie 2ⁿ, also $O(2^n)$.`
          : `**Ansatz:** Jeder Aufruf erzeugt genau einen weiteren, bis \`f(0)\`.\n---\nAufrufe \`f(${n})\`, \`f(${n - 1})\`, …, \`f(0)\`: ${aufrufe} Stück.\n---\nn + 1 Aufrufe, also $O(n)$.`,
      };
    },
  }),
];
