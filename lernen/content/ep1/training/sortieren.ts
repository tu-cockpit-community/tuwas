import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 19 (Sortieren). Die Referenzrechnungen bilden die Fassungen der
 * EP1-Vorlesung exakt nach (bubbleSort, bubbleSort2, selectionSort, insertionSort mit exchange).
 * Der Validator führt die ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "sortieren";

/** Arrays.toString für int-Arrays */
const ats = (a: number[]) => `[${a.join(", ")}]`;
/** Initialisierungsliste im Java-Quelltext und im Text */
const liste = (a: number[]) => `{${a.join(", ")}}`;
const gleich = (a: number[], b: number[]) => a.length === b.length && a.every((x, i) => x === b[i]);

/** n verschiedene ganze Zahlen aus [von, bis] in zufälliger Reihenfolge */
function verschiedene(r: Rng, n: number, von: number, bis: number): number[] {
  const pool: number[] = [];
  for (let v = von; v <= bis; v++) pool.push(v);
  return r.mische(pool).slice(0, n);
}

function tausche<T>(a: T[], i: number, j: number) {
  const s = a[i];
  a[i] = a[j];
  a[j] = s;
}

/** Zustände nach jedem Durchlauf der inneren Schleife (Fassung der Vorlesung) */
function bubble(start: number[]) {
  const d = [...start];
  const zustaende: number[][] = [];
  let vergleiche = 0;
  let tausche_ = 0;
  for (let i = 0; i < d.length - 1; i++) {
    for (let j = 0; j < d.length - i - 1; j++) {
      vergleiche++;
      if (d[j] > d[j + 1]) {
        tausche(d, j, j + 1);
        tausche_++;
      }
    }
    zustaende.push([...d]);
  }
  return { zustaende, vergleiche, tausche: tausche_ };
}

function selection(start: number[]) {
  const d = [...start];
  const zustaende: number[][] = [];
  const mins: number[] = [];
  for (let i = 0; i < d.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < d.length; j++) if (d[j] < d[min]) min = j;
    mins.push(min);
    tausche(d, i, min);
    zustaende.push([...d]);
  }
  return { zustaende, mins };
}

function insertion(start: number[]) {
  const d = [...start];
  const zustaende: number[][] = [];
  const proKarte: number[] = [];
  let tausche_ = 0;
  for (let i = 1; i < d.length; i++) {
    let t = 0;
    for (let j = i; j > 0 && d[j] < d[j - 1]; j--) {
      tausche(d, j, j - 1);
      t++;
    }
    proKarte.push(t);
    tausche_ += t;
    zustaende.push([...d]);
  }
  return { zustaende, tausche: tausche_, proKarte };
}

/** Durchläufe der while-Schleife von bubbleSort2 */
function bubble2Durchlaeufe(start: number[]) {
  const d = [...start];
  let n = 0;
  let notSorted = true;
  const nachDurchlauf: number[][] = [];
  while (notSorted) {
    notSorted = false;
    n++;
    for (let i = 0; i < d.length - 1; i++)
      if (d[i] > d[i + 1]) {
        tausche(d, i, i + 1);
        notSorted = true;
      }
    nachDurchlauf.push([...d]);
  }
  return { n, nachDurchlauf };
}

function fehlstaende(a: number[]) {
  let z = 0;
  for (let i = 0; i < a.length; i++) for (let j = i + 1; j < a.length; j++) if (a[i] > a[j]) z++;
  return z;
}

/** Fehlerbilder, die mit der richtigen Ausgabe übereinstimmen, fallen weg (auch doppelte). */
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

/** Fehlerbilder für Zahlenfelder: nur Werte, die sich von der Lösung unterscheiden */
function zahlFehler(loesung: number, fehler: { wert: number; meldung: string }[]) {
  const gesehen = new Set<number>([loesung]);
  const rest = fehler
    .filter((f) => {
      if (gesehen.has(f.wert)) return false;
      gesehen.add(f.wert);
      return true;
    })
    .map((f) => ({ wert: String(f.wert), meldung: f.meldung }));
  return rest.length ? rest : undefined;
}

/** Fehlerbilder für Richtig/Falsch: nur Muster, die von der Lösung abweichen */
function rfFehler(loesung: boolean[], fehler: { wert: boolean[]; meldung: string }[]) {
  const s = (w: boolean[]) => w.map((x) => (x ? "r" : "f")).join("");
  const gesehen = new Set<string>([s(loesung)]);
  const rest = fehler
    .filter((f) => {
      const k = s(f.wert);
      if (gesehen.has(k)) return false;
      gesehen.add(k);
      return true;
    })
    .map((f) => ({ wert: f.wert.map((x) => (x ? "r" : "f")), meldung: f.meldung }));
  return rest.length ? rest : undefined;
}

type Verfahren = "Bubblesort" | "Selectionsort" | "Insertionsort";
const VERFAHREN: Verfahren[] = ["Bubblesort", "Selectionsort", "Insertionsort"];
function zustaende(v: Verfahren, a: number[]): number[][] {
  return v === "Bubblesort" ? bubble(a).zustaende : v === "Selectionsort" ? selection(a).zustaende : insertion(a).zustaende;
}
const FINGERABDRUCK: Record<Verfahren, string> = {
  Bubblesort: "Nach `k` Durchläufen stehen die `k` größten Werte sortiert ganz rechts.",
  Selectionsort: "Nach `k` Durchläufen stehen die `k` kleinsten Werte sortiert ganz links.",
  Insertionsort: "Nach `k` Durchläufen stehen links die ersten `k + 1` Werte der Ausgangsbelegung sortiert, rechts ist alles unverändert.",
};

export const DRILLS: Drill[] = [
  drill({
    id: "so-d-istsortiert",
    kapitel: K,
    titel: "Sortiert oder nicht?",
    niveau: 1,
    erzeuge: (r) => {
      const arrays: number[][] = [];
      const wahr: boolean[] = [];
      while (arrays.length < 4) {
        const n = r.int(3, 5);
        let a = Array.from({ length: n }, () => r.int(-9, 9));
        if (r.zufall() < 0.5) a = [...a].sort((x, y) => x - y);
        // gelegentlich ein Paar gleicher Nachbarn erzwingen
        if (r.zufall() < 0.4) a[1] = a[0];
        // dasselbe Array nicht zweimal beurteilen lassen
        if (arrays.some((b) => gleich(a, b))) continue;
        arrays.push(a);
        wahr.push(a.every((x, i) => i === 0 || a[i - 1] <= x));
      }
      return {
        angabe: "Beurteile für jedes Array: Ist es **aufsteigend sortiert**, gilt also `a[i] <= a[i + 1]` für jedes Nachbarpaar?",
        teile: [
          {
            typ: "richtigfalsch",
            aussagen: arrays.map((a, k) => ({
              text: `\`${liste(a)}\` ist aufsteigend sortiert.`,
              richtig: wahr[k],
              erklaerung: wahr[k]
                ? "Jedes Nachbarpaar erfüllt `<=`."
                : `Das Paar ${(() => {
                    const i = a.findIndex((x, p) => p > 0 && a[p - 1] > x);
                    return `\`${a[i - 1]}, ${a[i]}\``;
                  })()} steht falsch herum.`,
            })),
            fehler: rfFehler(wahr, [
              {
                wert: arrays.map((a) => a.every((x, i) => i === 0 || a[i - 1] < x)),
                meldung: "Gleiche Nachbarn sind erlaubt. Die Bedingung lautet `<=`, nicht `<`.",
              },
            ]),
          },
        ],
        hinweis: "Prüfe jedes Nachbarpaar einzeln. Achte bei negativen Zahlen darauf, welche kleiner ist.",
        loesung: `**Ansatz:** Für jedes Array alle Nachbarpaare mit \`<=\` prüfen.\n---\n${arrays
          .map((a, k) => `\`${liste(a)}\`: ${wahr[k] ? "sortiert" : "nicht sortiert"}.`)
          .join(" ")}\n---\nEin einziges falsch herum stehendes Paar genügt für „nicht sortiert“.`,
      };
    },
  }),

  drill({
    id: "so-d-bubble-durchlauf",
    kapitel: K,
    titel: "Ein Durchlauf von Bubblesort",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const a = verschiedene(r, n, 1, 20);
      const nach = bubble(a).zustaende[0];
      const sortiert = [...a].sort((x, y) => x - y);
      // typischer Fehler: der größte Wert wird nur einmal getauscht und nicht weitergetragen
      const nurPaare = [...a];
      for (let j = 0; j + 1 < n; j += 2) if (nurPaare[j] > nurPaare[j + 1]) tausche(nurPaare, j, j + 1);
      const code = `int[] data = ${liste(a)};\nfor (int j = 0; j < data.length - 1; j++) {\n    if (data[j] > data[j + 1]) {\n        int swap = data[j];\n        data[j] = data[j + 1];\n        data[j + 1] = swap;\n    }\n}\nSystem.out.println(Arrays.toString(data));\n`;
      const loesung = `${ats(nach)}\n`;
      return {
        angabe: "Der Code führt den ersten Durchlauf von Bubblesort aus. Was gibt er aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: ats(sortiert), meldung: "Ein einziger Durchlauf sortiert nicht fertig. Er bringt nur den größten Wert nach rechts." },
              {
                wert: ats(nurPaare),
                meldung: "Die Paare überlappen sich: Nach einem Tausch wird der gerade getauschte Wert mit seinem **neuen** rechten Nachbarn verglichen.",
              },
            ]),
          },
        ],
        hinweis: "Vergleiche die Paare von links nach rechts. Nach einem Tausch geht es mit dem neuen Nachbarn weiter.",
        loesung: `**Ansatz:** Paar für Paar von links nach rechts, tauschen, wenn der linke Wert größer ist.\n---\nDer größte Wert ${Math.max(...a)} wandert ab seiner Position bis ganz nach rechts.\n---\nErgebnis: \`${ats(nach)}\`.`,
      };
    },
  }),

  drill({
    id: "so-d-selection-min",
    kapitel: K,
    titel: "Der Index des Minimums",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 7);
      const a = verschiedene(r, n, 1, 30);
      const i = r.int(0, 2);
      // die ersten i Durchläufe schon ausgeführt
      const vorher = i === 0 ? [...a] : selection(a).zustaende[i - 1];
      let min = i;
      for (let j = i + 1; j < n; j++) if (vorher[j] < vorher[min]) min = j;
      const nachher = [...vorher];
      tausche(nachher, i, min);
      return {
        angabe: `Selectionsort ist bei \`data = ${liste(vorher)}\` angekommen${i === 0 ? "" : `, die Durchläufe vor \`i = ${i}\` sind also schon ausgeführt`}. Welchen Wert hat \`min\` am Ende des Durchlaufs \`i = ${i}\`, also direkt vor dem Aufruf von \`exchange\`?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(min),
            fehler: zahlFehler(min, [
              { wert: vorher[min], meldung: "`min` ist ein **Index**, nicht der Wert selbst." },
              { wert: min - i, meldung: `Die Indizes zählen ab dem Anfang des Arrays, nicht ab \`i = ${i}\`.` },
            ]),
          },
        ],
        hinweis: `Suche den kleinsten Wert unter \`data[${i}]\` bis \`data[${n - 1}]\` und gib seinen Index an.`,
        loesung: `**Ansatz:** Der Suchbereich beginnt bei Index ${i}.\n---\nDort ist der kleinste Wert ${vorher[min]}, er steht an Index ${min}.\n---\nAlso \`min = ${min}\`. Der Tausch ergibt \`${liste(nachher)}\`.`,
      };
    },
  }),

  drill({
    id: "so-d-selection-durchlauf",
    kapitel: K,
    titel: "Selectionsort nach zwei Durchläufen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 6);
      const a = verschiedene(r, n, 1, 25);
      const z = selection(a).zustaende;
      const loesung = `${ats(z[0])}\n${ats(z[1])}\n`;
      const b = bubble(a).zustaende;
      // Fehlvorstellung: die übrigen Werte rücken nach
      const nachr = (d: number[], i: number) => {
        const rest = d.slice(i);
        const m = Math.min(...rest);
        rest.splice(rest.indexOf(m), 1);
        return [...d.slice(0, i), m, ...rest];
      };
      const n1 = nachr(a, 0);
      const n2 = nachr(n1, 1);
      const code = `int[] data = ${liste(a)};\nfor (int i = 0; i < 2; i++) {\n    int min = i;\n    for (int j = i + 1; j < data.length; j++) {\n        if (data[j] < data[min]) {\n            min = j;\n        }\n    }\n    int swap = data[i];\n    data[i] = data[min];\n    data[min] = swap;\n    System.out.println(Arrays.toString(data));\n}\n`;
      return {
        angabe: "Der Code führt die ersten beiden Durchläufe von Selectionsort aus. Was gibt er aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${ats(b[0])}\n${ats(b[1])}`, meldung: "Das sind Durchläufe von **Bubblesort**. Selectionsort sucht das Minimum und tauscht es nach vorne." },
              { wert: `${ats(n1)}\n${ats(n2)}`, meldung: "Beim Tausch wechseln nur zwei Werte die Plätze. Die übrigen Werte rücken nicht nach." },
            ]),
          },
        ],
        hinweis: "Suche in jedem Durchlauf den kleinsten Wert ab Index `i` und tausche ihn mit `data[i]`.",
        loesung: `**Ansatz:** Minimum ab \`i\` suchen, mit \`data[i]\` tauschen, ausgeben.\n---\n\`i = 0\`: Das Minimum ${Math.min(...a)} kommt nach vorne: \`${ats(z[0])}\`.\n---\n\`i = 1\`: Das Minimum ab Index 1 ist ${z[1][1]}: \`${ats(z[1])}\`.`,
      };
    },
  }),

  drill({
    id: "so-d-insertion-durchlauf",
    kapitel: K,
    titel: "Eine Karte einfügen",
    niveau: 1,
    erzeuge: (r) => {
      const k = r.int(3, 5);
      const werte = verschiedene(r, k + 2, 1, 30);
      const vorne = werte.slice(0, k).sort((x, y) => x - y);
      const karte = werte[k];
      const rest = werte[k + 1];
      const a = [...vorne, karte, rest];
      const nach = [...a];
      let t = 0;
      for (let j = k; j > 0 && nach[j] < nach[j - 1]; j--) {
        tausche(nach, j, j - 1);
        t++;
      }
      const einmal = [...a];
      if (einmal[k] < einmal[k - 1]) tausche(einmal, k, k - 1);
      const code = `int[] data = ${liste(a)};\nint i = ${k};\nfor (int j = i; j > 0 && data[j] < data[j - 1]; j--) {\n    int swap = data[j];\n    data[j] = data[j - 1];\n    data[j - 1] = swap;\n}\nSystem.out.println(Arrays.toString(data));\n`;
      const loesung = `${ats(nach)}\n`;
      return {
        angabe: `Die Indizes 0 bis ${k - 1} sind schon sortiert. Der Code führt nur den Durchlauf \`i = ${k}\` von Insertionsort aus. Was gibt er aus?`,
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: ats(einmal), meldung: "Die Karte wird nicht nur einmal getauscht. Sie wandert weiter, solange ihr linker Nachbar größer ist." },
              { wert: ats([...a].sort((x, y) => x - y)), meldung: `Es läuft nur ein Durchlauf. Der letzte Wert ${rest} wird noch nicht eingefügt.` },
            ]),
          },
        ],
        hinweis: `Die neue Karte ist \`data[${k}] = ${karte}\`. Schiebe sie nach links, solange ihr linker Nachbar echt größer ist.`,
        loesung: `**Ansatz:** Die Karte ${karte} wandert nach links, bis ihr linker Nachbar nicht mehr größer ist.\n---\nSie wandert an ${t} ${t === 1 ? "Wert" : "Werten"} vorbei.\n---\nErgebnis: \`${ats(nach)}\`. Der Wert ${rest} rechts bleibt unverändert.`,
      };
    },
  }),

  drill({
    id: "so-d-vergleiche",
    kapitel: K,
    titel: "Vergleiche zählen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 14);
      const v = r.wahl(["bubbleSort", "selectionSort"] as const);
      const soll = (n * (n - 1)) / 2;
      const bed = v === "bubbleSort" ? "data[j] > data[j + 1]" : "data[j] < data[min]";
      return {
        angabe: `\`${v}\` aus der Vorlesung sortiert ein Array der Länge ${n}. Wie oft wird die Bedingung \`${bed}\` ausgewertet?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n} * ${n - 1} / 2`,
            fehler: zahlFehler(soll, [
              { wert: n * n, meldung: "Die innere Schleife wird mit jedem Durchlauf kürzer. Sie läuft nicht jedes Mal `n`-mal." },
              { wert: n * (n - 1), meldung: "Du hast `n · (n - 1)` gerechnet. Die Summe `(n - 1) + … + 1` ist nur die Hälfte davon." },
              { wert: n - 1, meldung: "Das ist die Zahl der Durchläufe. Jeder Durchlauf vergleicht mehrmals." },
            ]),
          },
        ],
        hinweis: `Der erste Durchlauf vergleicht ${n - 1}-mal, jeder weitere einmal weniger.`,
        loesung: `**Ansatz:** Vergleiche pro Durchlauf: ${n - 1}, ${n - 2}, …, 1.\n---\nSumme: \`${n} · ${n - 1} / 2 = ${soll}\`.\n---\nDas gilt für jedes Array der Länge ${n}, weil die Schleifengrenzen nur von der Länge abhängen.`,
      };
    },
  }),

  drill({
    id: "so-d-fehlstaende",
    kapitel: K,
    titel: "Fehlstände und Tausche",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 6);
      const a = verschiedene(r, n, 1, 20);
      const f = fehlstaende(a);
      const nachbarn = a.filter((x, i) => i > 0 && a[i - 1] > x).length;
      const proWert = a.map((x, i) => a.slice(i + 1).filter((y) => y < x).length);
      return {
        angabe: `Wie oft ruft Insertionsort für \`${liste(a)}\` die Methode \`exchange\` auf? (Das ist auch die Zahl der Tausche von Bubblesort.)`,
        teile: [
          {
            typ: "zahl",
            loesung: String(f),
            fehler: zahlFehler(f, [
              { wert: nachbarn, meldung: "Du hast nur benachbarte Paare gezählt. Ein Fehlstand ist jedes Paar, bei dem der größere Wert irgendwo links steht." },
              { wert: (n * (n - 1)) / 2, meldung: "So viele Tausche gibt es nur bei absteigend sortierten Daten." },
            ]),
          },
        ],
        hinweis: "Jeder Tausch beseitigt genau einen Fehlstand. Zähle für jeden Wert, wie viele kleinere Werte rechts von ihm stehen.",
        loesung: `**Ansatz:** Tausche = Fehlstände, also Paare \`i < j\` mit \`a[i] > a[j]\`.\n---\nKleinere Werte rechts: ${a.map((x, i) => `${x} → ${proWert[i]}`).join(", ")}.\n---\nSumme: ${proWert.join(" + ")} = ${f}.`,
      };
    },
  }),

  drill({
    id: "so-d-bubble2",
    kapitel: K,
    titel: "Bubblesort mit Abbruch: Durchläufe zählen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 6);
      let a = verschiedene(r, n, 1, 20);
      // fast sortiert: sortieren und ein, zwei Werte versetzen
      a = [...a].sort((x, y) => x - y);
      const von = r.int(1, n - 1);
      const wert = a.splice(von, 1)[0];
      a.splice(r.int(0, von - 1), 0, wert);
      if (r.zufall() < 0.5) {
        const p = r.int(0, n - 2);
        tausche(a, p, p + 1);
        // Der zweite Tausch darf das Versetzen nicht rückgängig machen, sonst wäre das Array schon sortiert.
        if (a.every((x, i) => i === 0 || a[i - 1] <= x)) tausche(a, p, p + 1);
      }
      const { n: d, nachDurchlauf } = bubble2Durchlaeufe(a);
      const code = `int[] data = ${liste(a)};\nint durchlaeufe = 0;\nboolean notSorted = true;\nwhile (notSorted) {\n    notSorted = false;\n    durchlaeufe++;\n    for (int i = 0; i < data.length - 1; i++) {\n        if (data[i] > data[i + 1]) {\n            int swap = data[i];\n            data[i] = data[i + 1];\n            data[i + 1] = swap;\n            notSorted = true;\n        }\n    }\n}\nSystem.out.println(durchlaeufe);\n`;
      const loesung = `${d}\n`;
      return {
        angabe: "Das Programm zählt die Durchläufe von `bubbleSort2`. Was gibt es aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: String(d - 1), meldung: "Nach dem letzten Durchlauf mit Tausch läuft noch einer ohne Tausch. Erst er beendet die Schleife." },
              { wert: String(n - 1), meldung: "Das wäre die Zahl der Durchläufe ohne Abbruch. `bubbleSort2` hört nach dem ersten Durchlauf ohne Tausch auf." },
            ]),
          },
        ],
        hinweis: "Schreib das Array nach jedem Durchlauf auf und notiere, ob getauscht wurde. Die Schleife endet nach dem ersten Durchlauf ohne Tausch.",
        loesung: `**Ansatz:** Durchlauf für Durchlauf ausführen.\n---\n${nachDurchlauf.map((z, k) => `Durchlauf ${k + 1}: \`${liste(z)}\``).join(", ")}.\n---\nDer Durchlauf ${d} tauscht nichts mehr, also wird \`${d}\` ausgegeben.`,
      };
    },
  }),

  drill({
    id: "so-d-stabil",
    kapitel: K,
    titel: "Stabil oder nicht? Namen mitsortieren",
    niveau: 2,
    erzeuge: (r) => {
      const namen = r.mische(["Ada", "Ben", "Cem", "Dora", "Eli", "Fynn", "Gil", "Hana"]).slice(0, 5);
      let gruppe = Array.from({ length: 5 }, () => r.int(1, 3));
      while (new Set(gruppe).size === 5) gruppe = Array.from({ length: 5 }, () => r.int(1, 3));
      const v = r.wahl(VERFAHREN);
      const sortiere = (alg: Verfahren) => {
        const g = [...gruppe];
        const nm = [...namen];
        if (alg === "Bubblesort") {
          for (let i = 0; i < g.length - 1; i++)
            for (let j = 0; j < g.length - i - 1; j++)
              if (g[j] > g[j + 1]) {
                tausche(g, j, j + 1);
                tausche(nm, j, j + 1);
              }
        } else if (alg === "Selectionsort") {
          for (let i = 0; i < g.length - 1; i++) {
            let m = i;
            for (let j = i + 1; j < g.length; j++) if (g[j] < g[m]) m = j;
            tausche(g, i, m);
            tausche(nm, i, m);
          }
        } else {
          for (let i = 1; i < g.length; i++)
            for (let j = i; j > 0 && g[j] < g[j - 1]; j--) {
              tausche(g, j, j - 1);
              tausche(nm, j, j - 1);
            }
        }
        return nm.join(" ");
      };
      const ergebnis = sortiere(v);
      const stabil = sortiere("Insertionsort");
      const sel = sortiere("Selectionsort");
      const tauschCode = "    int g = gruppe[A];\n    gruppe[A] = gruppe[B];\n    gruppe[B] = g;\n    String n = name[A];\n    name[A] = name[B];\n    name[B] = n;\n";
      const tc = (a: string, b: string, einr: string) =>
        tauschCode
          .replace(/A/g, a)
          .replace(/B/g, b)
          .split("\n")
          .map((z) => (z ? einr + z : z))
          .join("\n");
      let schleife: string;
      if (v === "Bubblesort")
        schleife = `for (int i = 0; i < gruppe.length - 1; i++) {\n    for (int j = 0; j < gruppe.length - i - 1; j++) {\n        if (gruppe[j] > gruppe[j + 1]) {\n${tc("j", "j + 1", "        ")}        }\n    }\n}\n`;
      else if (v === "Selectionsort")
        schleife = `for (int i = 0; i < gruppe.length - 1; i++) {\n    int min = i;\n    for (int j = i + 1; j < gruppe.length; j++) {\n        if (gruppe[j] < gruppe[min]) {\n            min = j;\n        }\n    }\n${tc("i", "min", "")}}\n`;
      else
        schleife = `for (int i = 1; i < gruppe.length; i++) {\n    for (int j = i; j > 0 && gruppe[j] < gruppe[j - 1]; j--) {\n${tc("j", "j - 1", "    ")}    }\n}\n`;
      const code = `int[] gruppe = ${liste(gruppe)};\nString[] name = {${namen.map((x) => `"${x}"`).join(", ")}};\n${schleife}System.out.println(String.join(" ", name));\n`;
      const loesung = `${ergebnis}\n`;
      const fehler =
        v === "Selectionsort"
          ? [{ wert: stabil, meldung: "So sähe ein stabiles Ergebnis aus. Selectionsort tauscht aber über weite Entfernungen und kann dabei gleiche Gruppen vertauschen." }]
          : [{ wert: sel, meldung: `${v} tauscht nur Nachbarn und nie bei gleicher Gruppe. Personen derselben Gruppe behalten ihre Reihenfolge.` }];
      return {
        angabe: `${v} sortiert nach \`gruppe\`, jeder Tausch passiert in beiden Arrays. Was gibt das Programm aus?`,
        teile: [{ typ: "ausgabe", code, loesung, fehler: nurFalsche(loesung, fehler) }],
        hinweis: `Führe ${v} auf \`gruppe\` aus und tausche die Namen jedes Mal mit. \`String.join(" ", name)\` setzt die Namen mit Leerzeichen zusammen.`,
        loesung: `**Ansatz:** ${v} auf den Gruppen ${liste(gruppe)} ausführen, die Namen wandern mit.\n---\n${
          v === "Selectionsort" ? "Selectionsort ist nicht stabil: Ein weiter Tausch kann gleiche Gruppen vertauschen." : `${v} ist stabil: Gleiche Gruppen behalten ihre Reihenfolge.`
        }\n---\nAusgabe: \`${ergebnis}\`.${v === "Selectionsort" && ergebnis !== stabil ? ` Ein stabiles Verfahren hätte \`${stabil}\` geliefert.` : ""}`,
      };
    },
  }),

  drill({
    id: "so-d-welches",
    kapitel: K,
    titel: "Welches Verfahren war das?",
    niveau: 2,
    erzeuge: (r) => {
      let a: number[] = [];
      let v: Verfahren = "Bubblesort";
      for (let versuch = 0; versuch < 100; versuch++) {
        a = verschiedene(r, 6, 1, 20);
        v = r.wahl(VERFAHREN);
        const z = zustaende(v, a);
        const eindeutig = VERFAHREN.filter((w) => w !== v).every((w) => {
          const zw = zustaende(w, a);
          return !(gleich(zw[0], z[0]) && gleich(zw[1], z[1]));
        });
        if (eindeutig) break;
      }
      const z = zustaende(v, a);
      const richtig = VERFAHREN.indexOf(v);
      // Die Meldung nennt die tatsächlichen Zustände des falsch gewählten Verfahrens. Eine allgemeine Regel wie
      // „der größte Wert stünde rechts“ wäre falsch, wenn er dort schon in der Ausgangsbelegung steht.
      const meld = (w: Verfahren) => {
        const zw = zustaende(w, a);
        return `${w} ergäbe nach dem ersten Durchlauf \`${liste(zw[0])}\` und nach dem zweiten \`${liste(zw[1])}\`. Das passt nicht zu den angegebenen Zuständen.`;
      };
      return {
        angabe: `Ein Verfahren der Vorlesung sortiert \`${liste(a)}\`. Nach dem ersten Durchlauf der inneren Schleife steht \`${liste(z[0])}\` im Array, nach dem zweiten \`${liste(z[1])}\`. Welches Verfahren war das?`,
        teile: [
          {
            typ: "auswahl",
            optionen: [...VERFAHREN],
            richtig: [richtig],
            fehler: VERFAHREN.map((w, i) => ({ wert: i, meldung: meld(w) })).filter((f) => f.wert !== richtig),
          },
        ],
        hinweis: "Vergleiche mit den Fingerabdrücken: größte Werte rechts, kleinste links oder sortierter Anfang?",
        loesung: `**Ansatz:** Fingerabdrücke prüfen und die zwei Durchläufe nachrechnen.\n---\n${FINGERABDRUCK[v]}\n---\nDie beiden Zustände passen genau zu ${v}.`,
      };
    },
  }),

  drill({
    id: "so-d-zwischenzustand",
    kapitel: K,
    titel: "Kann diese Belegung auftreten?",
    niveau: 3,
    erzeuge: (r) => {
      const v = r.wahl(VERFAHREN);
      const a = verschiedene(r, 6, 1, 20);
      const z = zustaende(v, a);
      const schluessel = (x: number[]) => x.join(",");
      const moeglich = new Set(z.map(schluessel));
      const kandidaten: { b: number[]; ok: boolean }[] = [];
      const gesehen = new Set<string>();
      const anzahlWahr = r.int(1, 3);
      // mögliche Belegungen aus der Liste der Zwischenzustände
      for (const s of r.mische(z)) {
        if (kandidaten.length >= anzahlWahr) break;
        if (gesehen.has(schluessel(s))) continue;
        gesehen.add(schluessel(s));
        kandidaten.push({ b: s, ok: true });
      }
      // unmögliche Belegungen: ein möglicher Zustand mit zwei vertauschten Nachbarn
      for (let versuch = 0; kandidaten.length < 4 && versuch < 500; versuch++) {
        const basis = [...r.wahl(z)];
        const p = r.int(0, basis.length - 2);
        tausche(basis, p, p + 1);
        const k = schluessel(basis);
        if (moeglich.has(k) || gesehen.has(k)) continue;
        gesehen.add(k);
        kandidaten.push({ b: basis, ok: false });
      }
      const k4 = r.mische(kandidaten);
      const wahr = k4.map((x) => x.ok);
      return {
        angabe: `Gegeben ist \`${v === "Bubblesort" ? "bubbleSort" : v === "Selectionsort" ? "selectionSort" : "insertionSort"}\` aus der Vorlesung mit der Ausgangsbelegung \`${liste(a)}\`. Kann die jeweilige Belegung nach irgendeinem Durchlauf der inneren Schleife auftreten?`,
        teile: [
          {
            typ: "richtigfalsch",
            aussagen: k4.map((x) => {
              const nr = z.findIndex((s) => gleich(s, x.b));
              return {
                text: `\`${liste(x.b)}\``,
                richtig: x.ok,
                erklaerung: x.ok ? `Das ist der Zustand nach Durchlauf ${nr + 1}.` : "Diese Belegung steht in keinem Durchlauf im Array.",
              };
            }),
            fehler: rfFehler(wahr, [
              { wert: k4.map(() => true), meldung: "Nicht jede Belegung, die fast passt, ist möglich. Rechne die Durchläufe aus und vergleiche Wert für Wert." },
              { wert: k4.map(() => false), meldung: "Einige dieser Belegungen kommen wirklich vor. Schreib alle Zwischenzustände auf." },
            ]),
          },
        ],
        hinweis: `${FINGERABDRUCK[v]} Ein Fingerabdruck schließt aus, aber erst das Ausrechnen beweist.`,
        loesung: `**Ansatz:** Alle Zwischenzustände von ${v} ausrechnen.\n---\n${z.map((s, k) => `Durchlauf ${k + 1}: \`${liste(s)}\``).join(", ")}.\n---\nMöglich sind genau die Belegungen aus dieser Liste. Antwort: ${wahr.map((x) => (x ? "richtig" : "falsch")).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "so-d-trace",
    kapitel: K,
    titel: "Bubblesort Durchlauf für Durchlauf",
    niveau: 2,
    erzeuge: (r) => {
      const a = verschiedene(r, 5, 1, 15);
      const z = bubble(a).zustaende;
      const zeilenLoesung = [a, ...z];
      // Fehlvorstellung: nach dem ersten Durchlauf ist alles sortiert
      const sortiert = [...a].sort((x, y) => x - y);
      const falsch = [a, sortiert, sortiert, sortiert, sortiert];
      const flach = (t: number[][]) => t.flat().map(String);
      const fehler =
        flach(falsch).join(",") === flach(zeilenLoesung).join(",")
          ? undefined
          : [{ wert: flach(falsch), meldung: "Ein Durchlauf bringt nur den größten noch unsortierten Wert nach rechts. Er sortiert nicht alles auf einmal." }];
      return {
        angabe: `\`bubbleSort\` aus der Vorlesung sortiert \`${liste(a)}\`. Trag das Array nach jedem Durchlauf der inneren Schleife ein.`,
        teile: [
          {
            typ: "trace",
            spalten: ["data[0]", "data[1]", "data[2]", "data[3]", "data[4]"],
            zeilen: ["vor dem Sortieren", "nach i = 0", "nach i = 1", "nach i = 2", "nach i = 3"],
            vorgabe: 1,
            loesung: zeilenLoesung,
            fehler,
          },
        ],
        hinweis: "Im Durchlauf `i` läuft `j` von 0 bis `5 - i - 2`. Nach jedem Tausch wird mit dem neuen Nachbarn weiterverglichen.",
        loesung: `**Ansatz:** Jeden Durchlauf Paar für Paar ausführen.\n---\n${z.map((s, k) => `Nach \`i = ${k}\`: \`${liste(s)}\``).join(", ")}.\n---\nProbe: Nach dem Durchlauf \`i\` stehen die \`i + 1\` größten Werte sortiert rechts.`,
      };
    },
  }),
];
