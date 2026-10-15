import { drill, type Drill, type Rng } from "@/lib/lernen/training";

/**
 * Trainingsgeneratoren zu Kapitel 18 (Suchen). Die Referenzrechnungen bilden die Java-Methoden aus dem Kapitel
 * genau nach (lineare Suche und Varianten, binäre Suche mit mid = low + (high - low) / 2). Der Validator führt die
 * ersten Seeds jedes `ausgabe`-Teils mit echtem Java aus.
 */

const K = "suchen";

/** Initialisierungsliste im Java-Quelltext */
const liste = (a: number[]) => `{${a.join(", ")}}`;

/** Fehlerbilder, die zufällig mit der richtigen Ausgabe übereinstimmen, fallen weg (auch doppelte). */
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

/** Fehlerbilder für Trace-Tabellen (flache Liste), nur wenn sie sich von der Lösung unterscheiden */
function traceFehler(loesung: number[][], fehler: { wert: number[][]; meldung: string }[]) {
  const flach = (t: number[][]) => t.flat().map(String).join("|");
  const gesehen = new Set<string>([flach(loesung)]);
  const rest = fehler
    .filter((f) => {
      const k = flach(f.wert);
      if (gesehen.has(k) || f.wert.length !== loesung.length) return false;
      gesehen.add(k);
      return true;
    })
    .map((f) => ({ wert: f.wert.flat().map(String), meldung: f.meldung }));
  return rest.length ? rest : undefined;
}

function zufallsArray(r: Rng, n: number, von: number, bis: number): number[] {
  return Array.from({ length: n }, () => r.int(von, bis));
}

/** aufsteigend sortiertes Array ohne Doppelte */
function sortiertesArray(r: Rng, n: number): number[] {
  const a: number[] = [];
  let x = r.int(1, 6);
  for (let i = 0; i < n; i++) {
    a.push(x);
    x += r.int(2, 7);
  }
  return a;
}

/** eine Klasse mit Methoden und main (Einrückung 4 bzw. 8 Leerzeichen) */
function klasse(name: string, methoden: string, mainZeilen: string[]): string {
  const m = methoden
    .split("\n")
    .map((z) => (z ? "    " + z : z))
    .join("\n");
  return `public class ${name} {\n${m}\n\n    public static void main(String[] args) {\n${mainZeilen.map((z) => "        " + z).join("\n")}\n    }\n}\n`;
}

const SUCHE = `public static int suche(int[] daten, int schluessel) {\n    for (int i = 0; i < daten.length; i++) {\n        if (daten[i] == schluessel) {\n            return i;\n        }\n    }\n    return -1;\n}`;

const SUCHE_LETZTE = `public static int sucheLetzte(int[] daten, int schluessel) {\n    for (int i = daten.length - 1; i >= 0; i--) {\n        if (daten[i] == schluessel) {\n            return i;\n        }\n    }\n    return -1;\n}`;

const BINAER = `public static int binaereSuche(int[] daten, int schluessel) {\n    int low = 0;\n    int high = daten.length - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (daten[mid] < schluessel) {\n            low = mid + 1;\n        } else if (daten[mid] > schluessel) {\n            high = mid - 1;\n        } else {\n            return mid;\n        }\n    }\n    return -1;\n}`;

/** binäre Suche wie im Kapitel, mit Protokoll der Durchläufe */
function binaer(a: number[], x: number) {
  let low = 0;
  let high = a.length - 1;
  const schritte: { low: number; high: number; mid: number }[] = [];
  while (low <= high) {
    const mid = low + Math.trunc((high - low) / 2);
    schritte.push({ low, high, mid });
    if (a[mid] < x) low = mid + 1;
    else if (a[mid] > x) high = mid - 1;
    else return { ergebnis: mid, schritte, low, high };
  }
  return { ergebnis: -1, schritte, low, high };
}

/** Suche mit Flag aus 18.3 (gleiches Ergebnis wie die Java-Fassung mit `ergebnis = i - 1`) */
function flagSuche(a: number[], x: number) {
  let i = 0;
  let gefunden = false;
  while (!gefunden && i < a.length) {
    if (a[i] === x) gefunden = true;
    i++;
  }
  return { ergebnis: gefunden ? i - 1 : -1, iEnde: i, gefunden };
}

/** Suche von beiden Seiten aus 18.3 */
function beideSeiten(a: number[], x: number) {
  let links = 0;
  let rechts = a.length - 1;
  while (links <= rechts) {
    if (a[links] === x) return links;
    if (a[rechts] === x) return rechts;
    links++;
    rechts--;
  }
  return -1;
}

/** Teilfolgensuche aus 18.2 */
function findeFolge(d: number[], m: number[]) {
  for (let i = 0; i <= d.length - m.length; i++) {
    let passt = true;
    for (let j = 0; j < m.length; j++) if (d[i + j] !== m[j]) passt = false;
    if (passt) return i;
  }
  return -1;
}

export const DRILLS: Drill[] = [
  drill({
    id: "su-d-linear",
    kapitel: K,
    titel: "Lineare Suche: erster Treffer",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 8);
      const a = zufallsArray(r, n, 1, 9);
      // ein Wert kommt sicher doppelt vor
      const p = r.int(0, n - 3);
      a[r.int(p + 1, n - 1)] = a[p];
      const k1 = a[p];
      const k2 = a[r.int(0, n - 1)];
      let k3 = 10 + r.int(0, 5);
      while (a.includes(k3)) k3++;
      const keys = [k1, k2, k3];
      const erg = keys.map((k) => a.indexOf(k));
      const code = klasse("Linear", SUCHE, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(suche(d, ${k}));`)]);
      const loesung = erg.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: keys.map((k) => (a.includes(k) ? a.indexOf(k) + 1 : -1)).join("\n"), meldung: "Indizes beginnen bei 0. Das erste Element hat den Index 0, nicht 1." },
              { wert: keys.map((k) => a.lastIndexOf(k)).join("\n"), meldung: "`return i` beendet die Methode beim **ersten** Treffer. Spätere Vorkommen werden nie erreicht." },
            ]),
          },
        ],
        hinweis: "Schreib die Indizes ab 0 über die Werte. Die Suche liefert den kleinsten passenden Index.",
        loesung: `**Ansatz:** Für jeden Suchwert den ersten passenden Index von vorne bestimmen.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}.\n---\nErgebnisse: ${keys.map((k, i) => `${k} liefert ${erg[i]}`).join(", ")}. Ein fehlender Wert liefert -1.`,
      };
    },
  }),

  drill({
    id: "su-d-letzte",
    kapitel: K,
    titel: "Suche von hinten: letzter Treffer",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 8);
      const a = zufallsArray(r, n, 1, 9);
      const p = r.int(1, n - 2);
      a[r.int(0, p - 1)] = a[p];
      const k1 = a[p];
      const k2 = a[0];
      const keys = [k1, k2];
      const erg = keys.map((k) => a.lastIndexOf(k));
      const code = klasse("Hinten", SUCHE_LETZTE, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(sucheLetzte(d, ${k}));`)]);
      const loesung = erg.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: keys.map((k) => a.indexOf(k)).join("\n"), meldung: "Die Schleife beginnt beim letzten Index und läuft nach vorne. Der erste Treffer von hinten ist der **größte** Index." },
              { wert: erg.map((e) => n - 1 - e).join("\n"), meldung: "Rückwärts laufen ändert die Indizes nicht. Der letzte Platz hat weiterhin den Index `daten.length - 1`." },
            ]),
          },
        ],
        hinweis: `Die Schleife beginnt bei Index ${n - 1} und geht mit \`i--\` bis 0.`,
        loesung: `**Ansatz:** Von hinten suchen, beim ersten Treffer aufhören.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}.\n---\nErgebnisse: ${keys.map((k, i) => `${k} liefert ${erg[i]}`).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "su-d-vergleiche",
    kapitel: K,
    titel: "Vergleiche der linearen Suche zählen",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 12);
      const a = zufallsArray(r, n, 1, 20);
      const fehlt = r.zufall() < 0.3;
      let x: number;
      if (fehlt) {
        x = 21 + r.int(0, 9);
      } else {
        x = a[r.int(0, n - 1)];
      }
      const idx = a.indexOf(x);
      const vergleiche = idx === -1 ? n : idx + 1;
      return {
        angabe: `Die lineare Suche aus [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) sucht ${x} in \`${liste(a)}\`. Wie oft wird \`daten[i] == schluessel\` ausgewertet?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(vergleiche),
            fehler: zahlFehler(vergleiche, [
              { wert: idx === -1 ? n - 1 : idx, meldung: idx === -1 ? "Ohne Treffer werden alle Elemente verglichen, von Index 0 bis zum letzten Index." : "Das ist der Index des Treffers. Für Index i werden die Indizes 0 bis i verglichen, also i + 1 Stück." },
              { wert: n, meldung: "Die Suche hört beim ersten Treffer auf. Spätere Elemente werden nicht mehr verglichen." },
            ]),
          },
        ],
        hinweis: "Jeder Durchlauf enthält einen Vergleich. Zähle die Durchläufe bis zum ersten Treffer oder bis zum Ende.",
        loesung: `**Ansatz:** Ein Vergleich pro Durchlauf.\n---\n${idx === -1 ? `${x} kommt nicht vor. Alle ${n} Elemente werden verglichen.` : `Der erste Treffer steht auf Index ${idx}. Verglichen werden die Indizes 0 bis ${idx}.`}\n---\nErgebnis: ${vergleiche} Vergleiche.`,
      };
    },
  }),

  drill({
    id: "su-d-bedingung",
    kapitel: K,
    titel: "Suche nach einer Bedingung",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 8);
      const a = zufallsArray(r, n, 1, 30);
      const g = a[r.int(0, n - 2)];
      // g kommt sicher vor, damit > und >= sich unterscheiden können
      const idx = a.findIndex((v) => v > g);
      const idxGe = a.findIndex((v) => v >= g);
      return {
        angabe: `Die Methode \`ersteUeber(daten, grenze)\` liefert den Index des ersten Elements, das **größer** als \`grenze\` ist, sonst -1. Was liefert \`ersteUeber(new int[]${liste(a)}, ${g})\`?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(idx),
            fehler: zahlFehler(idx, [
              { wert: idxGe, meldung: `\`>\` heißt echt größer. Ein Element gleich ${g} zählt nicht.` },
              ...(idx >= 0 ? [{ wert: a[idx], meldung: "Gefragt ist der Index, nicht der Wert." }] : []),
            ]),
          },
        ],
        hinweis: `Prüfe die Elemente der Reihe nach: Ist es echt größer als ${g}?`,
        loesung: `**Ansatz:** Lineare Suche mit der Bedingung \`daten[i] > ${g}\`.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}.\n---\n${idx === -1 ? `Kein Element ist größer als ${g}. Ergebnis -1.` : `Das erste Element über ${g} ist ${a[idx]} auf Index ${idx}.`}`,
      };
    },
  }),

  drill({
    id: "su-d-binaer-ergebnis",
    kapitel: K,
    titel: "Binäre Suche ausführen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(7, 11);
      const a = sortiertesArray(r, n);
      const k1 = a[r.int(0, n - 1)];
      let k2 = a[r.int(0, n - 2)] + 1;
      while (a.includes(k2)) k2++;
      const keys = [k1, k2];
      const erg = keys.map((k) => binaer(a, k));
      const code = klasse("Binaer", BINAER, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(binaereSuche(d, ${k}));`)]);
      const loesung = erg.map((e) => e.ergebnis).join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${erg[0].ergebnis}\n${erg[1].low}`, meldung: "Ohne Treffer liefert die binäre Suche -1. Der Wert von `low` am Ende ist nur die Stelle, an der der Wert eingefügt werden müsste." },
              { wert: `${erg[0].ergebnis + 1}\n-1`, meldung: "Indizes beginnen bei 0." },
            ]),
          },
        ],
        hinweis: `Bei ${n} Elementen ist die erste Mitte \`0 + ${n - 1} / 2 = ${Math.trunc((n - 1) / 2)}\`.`,
        loesung: `**Ansatz:** Für jeden Suchwert \`low\`, \`high\` und \`mid\` verfolgen.\n---\n${keys.map((k, i) => `Suchwert ${k}: Mitten ${erg[i].schritte.map((s) => `${s.mid} (${a[s.mid]})`).join(", ")}, Ergebnis ${erg[i].ergebnis}.`).join(" ")}\n---\nBeim fehlenden Wert endet die Schleife mit \`low = ${erg[1].low} > high = ${erg[1].high}\`.`,
      };
    },
  }),

  drill({
    id: "su-d-binaer-durchlaeufe",
    kapitel: K,
    titel: "Durchläufe einer binären Suche",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(8, 16);
      const a = sortiertesArray(r, n);
      const fehlt = r.zufall() < 0.4;
      let x = fehlt ? a[r.int(0, n - 1)] + 1 : a[r.int(0, n - 1)];
      while (fehlt && a.includes(x)) x++;
      const e = binaer(a, x);
      const d = e.schritte.length;
      return {
        angabe: `Wie oft läuft die Schleife der binären Suche aus [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden), wenn sie ${x} in \`${liste(a)}\` sucht?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(d),
            fehler: zahlFehler(d, [
              { wert: d + 1, meldung: "Nach dem letzten Durchlauf wird nur noch die Bedingung `low <= high` geprüft. Das ist kein weiterer Durchlauf." },
              { wert: d - 1, meldung: "Zähle auch den Durchlauf, in dem der Suchbereich nur noch ein Element hat oder der Treffer kommt." },
              ...(e.ergebnis >= 0 ? [{ wert: e.ergebnis + 1, meldung: "So viele Vergleiche bräuchte die lineare Suche. Die binäre Suche beginnt in der Mitte." }] : []),
            ]),
          },
        ],
        hinweis: "Notiere in jedem Durchlauf `low`, `high` und `mid`, bis ein Treffer kommt oder `low > high` ist.",
        loesung: `**Ansatz:** Durchläufe zählen.\n---\n${e.schritte.map((s, i) => `Durchlauf ${i + 1}: low ${s.low}, high ${s.high}, mid ${s.mid} (${a[s.mid]})`).join(". ")}.\n---\n${e.ergebnis >= 0 ? `Treffer im Durchlauf ${d}.` : `Danach ist \`low = ${e.low} > high = ${e.high}\`, die Schleife endet.`} Ergebnis: ${d} Durchläufe.`,
      };
    },
  }),

  drill({
    id: "su-d-binaer-trace",
    kapitel: K,
    titel: "low, high und mid in einer Tabelle",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(9, 15);
      const a = sortiertesArray(r, n);
      let x = a[r.int(0, n - 1)];
      let e = binaer(a, x);
      // mindestens zwei Durchläufe, damit nach der Vorgabe etwas zu tun bleibt
      while (e.schritte.length < 2) {
        x = a[r.int(0, n - 1)];
        e = binaer(a, x);
      }
      const loesungT = e.schritte.map((s) => [s.low, s.high, s.mid]);
      // Fehlerbild: aufgerundete Mitte
      const auf: number[][] = [];
      {
        // erste Zeile ist vorgegeben (abgerundet), ab Durchlauf 2 wird aufgerundet
        const s0 = e.schritte[0];
        auf.push([s0.low, s0.high, s0.mid]);
        let low = a[s0.mid] < x ? s0.mid + 1 : s0.low;
        let high = a[s0.mid] > x ? s0.mid - 1 : s0.high;
        while (low <= high && auf.length < loesungT.length) {
          const mid = low + Math.ceil((high - low) / 2);
          auf.push([low, high, mid]);
          if (a[mid] < x) low = mid + 1;
          else if (a[mid] > x) high = mid - 1;
          else break;
        }
      }
      return {
        angabe: `Die binäre Suche aus [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden) sucht ${x} in \`${liste(a)}\`. Trage für jeden Durchlauf \`low\`, \`high\` und \`mid\` ein. Die erste Zeile ist vorgegeben.`,
        teile: [
          {
            typ: "trace",
            spalten: ["low", "high", "mid"],
            zeilen: loesungT.map((_, i) => `Durchlauf ${i + 1}`),
            vorgabe: 1,
            loesung: loesungT,
            fehler: traceFehler(loesungT, [{ wert: auf, meldung: "`(high - low) / 2` ist eine Ganzzahldivision. Sie schneidet ab und rundet nie auf." }]),
          },
        ],
        hinweis: "Ist `a[mid]` zu klein, wird `low = mid + 1`. Ist es zu groß, wird `high = mid - 1`.",
        loesung: `**Ansatz:** In jedem Durchlauf \`mid = low + (high - low) / 2\` berechnen und eine Grenze verschieben.\n---\n${e.schritte.map((s, i) => `Durchlauf ${i + 1}: mid ${s.mid}, a[mid] = ${a[s.mid]}`).join(". ")}.\n---\nIm letzten Durchlauf ist \`a[mid] = ${x}\`. Die Suche liefert ${e.ergebnis}.`,
      };
    },
  }),

  drill({
    id: "su-d-flag",
    kapitel: K,
    titel: "Suche mit Flag-Variable",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(4, 7);
      const a = zufallsArray(r, n, 1, 9);
      const k1 = a[r.int(0, n - 1)];
      const k2 = a[n - 1];
      let k3 = 10 + r.int(0, 4);
      while (a.includes(k3)) k3++;
      const keys = [k1, k2, k3];
      const erg = keys.map((k) => flagSuche(a, k));
      const methode = `public static int sucheMitFlag(int[] daten, int schluessel) {\n    boolean gefunden = false;\n    int i = 0;\n    while (i < daten.length && !gefunden) {\n        if (daten[i] == schluessel) {\n            gefunden = true;\n        }\n        i++;\n    }\n    int ergebnis = -1;\n    if (gefunden) {\n        ergebnis = i - 1;\n    }\n    return ergebnis;\n}`;
      const code = klasse("Flag", methode, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(sucheMitFlag(d, ${k}));`)]);
      const loesung = erg.map((e) => e.ergebnis).join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: erg.map((e) => (e.gefunden ? e.iEnde : -1)).join("\n"), meldung: "Nach dem Treffer wird `i` noch einmal erhöht. Darum setzt die Methode `ergebnis = i - 1`." },
              { wert: keys.map((k) => a.lastIndexOf(k)).join("\n"), meldung: "Die Schleife endet, sobald `gefunden` wahr ist. Spätere Vorkommen werden nie erreicht." },
            ]),
          },
        ],
        hinweis: "Verfolge `i` und `gefunden`. Nach dem Treffer läuft der Rumpf noch bis zu `i++` weiter.",
        loesung: `**Ansatz:** Die Flag-Suche liefert den ersten Treffer, \`i\` steht danach eins dahinter.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}.\n---\n${keys.map((k, i) => (erg[i].gefunden ? `${k}: \`i\` endet bei ${erg[i].iEnde}, Ergebnis ${erg[i].ergebnis}` : `${k}: kein Treffer, Ergebnis -1`)).join(". ")}.`,
      };
    },
  }),

  drill({
    id: "su-d-beide-seiten",
    kapitel: K,
    titel: "Suche von beiden Seiten",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 8);
      const a = zufallsArray(r, n, 1, 6);
      // ein Wert kommt sicher zweimal vor
      const p = r.int(0, Math.floor(n / 2) - 1);
      const q = r.int(Math.ceil(n / 2), n - 1);
      a[q] = a[p];
      const keys = [a[p], a[r.int(0, n - 1)]];
      const erg = keys.map((k) => beideSeiten(a, k));
      const methode = `public static int sucheVonBeidenSeiten(int[] daten, int schluessel) {\n    int links = 0;\n    int rechts = daten.length - 1;\n    while (links <= rechts) {\n        if (daten[links] == schluessel) {\n            return links;\n        }\n        if (daten[rechts] == schluessel) {\n            return rechts;\n        }\n        links++;\n        rechts--;\n    }\n    return -1;\n}`;
      const code = klasse("Beide", methode, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(sucheVonBeidenSeiten(d, ${k}));`)]);
      const loesung = erg.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: keys.map((k) => a.indexOf(k)).join("\n"), meldung: "Diese Suche prüft in jedem Durchlauf zuerst links, dann rechts. Ein Treffer nahe am rechten Rand kann vor einem kleineren Index gefunden werden." },
              { wert: keys.map((k) => a.lastIndexOf(k)).join("\n"), meldung: "In jedem Durchlauf wird zuerst `daten[links]` geprüft. Liegt ein Treffer links näher am Rand, gewinnt er." },
            ]),
          },
        ],
        hinweis: "Notiere die Paare `(links, rechts)`: (0, n - 1), (1, n - 2) und so weiter. Geprüft wird jeweils zuerst links.",
        loesung: `**Ansatz:** Paare von außen nach innen prüfen, links vor rechts.\n---\nPaare: ${Array.from({ length: Math.ceil(n / 2) }, (_, i) => `(${i}, ${n - 1 - i})`).join(", ")}.\n---\nErgebnisse: ${keys.map((k, i) => `${k} liefert ${erg[i]}`).join(", ")}.`,
      };
    },
  }),

  drill({
    id: "su-d-durchlaeufe-formel",
    kapitel: K,
    titel: "Durchläufe im schlechtesten Fall",
    niveau: 2,
    erzeuge: (r) => {
      const exp = r.int(4, 20);
      // n zwischen 2^exp und 2^(exp+1) - 1, gelegentlich genau eine Zweierpotenz
      const n = r.zufall() < 0.25 ? 2 ** exp : 2 ** exp + r.int(1, 2 ** exp - 1);
      const d = exp + 1;
      return {
        angabe: `Ein sortiertes Array hat ${n} Elemente. Wie oft läuft die Schleife der binären Suche im schlechtesten Fall?`,
        teile: [
          {
            typ: "zahl",
            // als feste Zahl: log(2^k, 2) ist in Gleitkomma nicht immer exakt k
            loesung: String(d),
            fehler: zahlFehler(d, [
              { wert: exp, meldung: `2 hoch ${exp} ist die größte Zweierpotenz bis ${n}. Das zählt die Halbierungen. Der letzte Vergleich mit einem einzigen Element kommt noch dazu.` },
              { wert: exp + 2, meldung: `2 hoch ${exp + 1} = ${2 ** (exp + 1)} ist schon größer als ${n}. Nimm die größte Zweierpotenz **bis** ${n}.` },
            ]),
          },
        ],
        hinweis: `Suche die größte Zweierpotenz, die höchstens ${n} ist. Ihr Exponent plus 1 ist das Ergebnis.`,
        loesung: `**Ansatz:** Regel aus [18.6 Wie viel Arbeit macht eine Suche? Vergleiche zählen](/lernen/ep1/suchen/wie-viel-arbeit-macht-eine-suche-vergleiche-zaehlen): abgerundeter Logarithmus zur Basis 2 plus 1.\n---\n$2^{${exp}} = ${2 ** exp} \\le ${n} < ${2 ** (exp + 1)} = 2^{${exp + 1}}$.\n---\nErgebnis: ${exp} + 1 = ${d} Durchläufe. Die lineare Suche bräuchte im schlechtesten Fall ${n} Vergleiche.`,
      };
    },
  }),

  drill({
    id: "su-d-teilfolge",
    kapitel: K,
    titel: "Eine Folge von Werten suchen",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(7, 9);
      const a = zufallsArray(r, n, 1, 4);
      const len = r.int(2, 3);
      const start = r.int(1, n - len);
      const m1 = a.slice(start, start + len);
      // ein zweites Muster, das sicher nicht vorkommt
      const m2 = [...m1];
      m2[len - 1] = 5;
      const e1 = findeFolge(a, m1);
      const e2 = findeFolge(a, m2);
      const methode = `public static int findeFolge(int[] daten, int[] muster) {\n    for (int i = 0; i <= daten.length - muster.length; i++) {\n        boolean passt = true;\n        for (int j = 0; j < muster.length; j++) {\n            if (daten[i + j] != muster[j]) {\n                passt = false;\n            }\n        }\n        if (passt) {\n            return i;\n        }\n    }\n    return -1;\n}`;
      const code = klasse("Folge", methode, [`int[] d = ${liste(a)};`, `System.out.println(findeFolge(d, new int[]${liste(m1)}));`, `System.out.println(findeFolge(d, new int[]${liste(m2)}));`]);
      const loesung = `${e1}\n${e2}\n`;
      const nurErstes = a.indexOf(m1[0]);
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${nurErstes}\n${e2}`, meldung: "Eine Startstelle zählt erst, wenn **alle** Werte des Musters hintereinander passen, nicht nur der erste." },
              { wert: `${e1}\n${a.indexOf(m2[0])}`, meldung: `Im zweiten Muster steht am Ende eine 5. Die kommt in \`d\` gar nicht vor, also kann das Muster nirgends passen.` },
            ]),
          },
        ],
        hinweis: `Probiere jede Startstelle von 0 bis ${n} - Musterlänge und vergleiche alle Werte des Musters.`,
        loesung: `**Ansatz:** Teilfolgensuche aus [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche): Für jede Startstelle prüft die innere Schleife das ganze Muster.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}.\n---\nMuster ${liste(m1)}: erster vollständiger Treffer ab Index ${e1}. Muster ${liste(m2)}: Die 5 kommt nicht vor, Ergebnis -1.`,
      };
    },
  }),

  drill({
    id: "su-d-waechter",
    kapitel: K,
    titel: "Suche mit Wächter",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(4, 6);
      const a = zufallsArray(r, n, 1, 9);
      // der letzte Wert kommt sonst nicht vor, damit der Sonderfall „Treffer auf dem letzten Platz“ entsteht
      a[n - 1] = 10 + r.int(0, 5);
      const k1 = a[r.int(0, n - 2)];
      const k2 = a[n - 1];
      let k3 = 20 + r.int(0, 5);
      while (a.includes(k3)) k3++;
      const keys = [k1, k2, k3];
      const erg = keys.map((k) => a.indexOf(k));
      const methode = `public static int sucheMitWaechter(int[] daten, int schluessel) {\n    int letzter = daten[daten.length - 1];\n    daten[daten.length - 1] = schluessel;\n    int i = 0;\n    while (daten[i] != schluessel) {\n        i++;\n    }\n    daten[daten.length - 1] = letzter;\n    if (i < daten.length - 1 || letzter == schluessel) {\n        return i;\n    }\n    return -1;\n}`;
      const code = klasse("Waechter", methode, [`int[] d = ${liste(a)};`, ...keys.map((k) => `System.out.println(sucheMitWaechter(d, ${k}));`)]);
      const loesung = erg.join("\n") + "\n";
      return {
        angabe: "Was gibt das Programm aus?",
        teile: [
          {
            typ: "ausgabe",
            code,
            loesung,
            fehler: nurFalsche(loesung, [
              { wert: `${erg[0]}\n-1\n-1`, meldung: `Beim Suchwert ${k2} hält die Schleife auf dem letzten Platz. Dort stand aber schon vorher ${k2}, also ist \`letzter == schluessel\` wahr. Der Treffer ist echt.` },
              { wert: `${erg[0]}\n${n - 1}\n${n - 1}`, meldung: `Beim Suchwert ${k3} hält die Schleife nur auf dem Wächter. Weder ist \`i < ${n - 1}\` noch \`letzter == ${k3}\`. Ergebnis -1.` },
            ]),
          },
        ],
        hinweis: "Schreib für jeden Suchwert auf, wo die Schleife hält. Danach entscheidet `i < daten.length - 1 || letzter == schluessel`.",
        loesung: `**Ansatz:** Wächter eintragen, Haltestelle bestimmen, dann die Prüfung nach der Schleife auswerten.\n---\nIndizes: ${a.map((x, i) => `${i} → ${x}`).join(", ")}. \`letzter\` ist immer ${a[n - 1]}.\n---\n${k1}: echter Treffer auf Index ${erg[0]}. ${k2}: Halt auf dem letzten Platz, \`letzter == ${k2}\`, Ergebnis ${erg[1]}. ${k3}: Halt auf dem Wächter, Ergebnis -1.`,
      };
    },
  }),

  drill({
    id: "su-d-sortieren-lohnt",
    kapitel: K,
    titel: "Ab wann lohnt sich das Sortieren?",
    niveau: 3,
    erzeuge: (r) => {
      const m = r.int(6, 12);
      const n = 2 ** m;
      const sort = n * m;
      const bin = m + 1;
      // kleinstes k mit k * n > sort + k * bin
      const grenze = sort / (n - bin);
      let k = Math.floor(grenze) + 1;
      while (k * n <= sort + k * bin) k++;
      return {
        angabe: `Ein unsortiertes Array hat ${n} Elemente und soll \`k\`-mal durchsucht werden. Im schlechtesten Fall kostet eine lineare Suche ${n} Vergleiche. Sortieren kostet einmalig $${n} \\cdot \\log_2 ${n} = ${sort}$ Vergleiche, danach kostet jede binäre Suche ${bin} Vergleiche. Ab welchem kleinsten \`k\` ist „sortieren und \`k\`-mal binär suchen“ echt billiger als \`k\`-mal linear suchen?`,
        teile: [
          {
            typ: "zahl",
            loesung: String(k),
            fehler: zahlFehler(k, [
              { wert: k - 1, meldung: `Bei \`k = ${k - 1}\` ist die lineare Suche noch nicht teurer: ${(k - 1) * n} gegen ${sort} + ${(k - 1) * bin} = ${sort + (k - 1) * bin}.` },
              { wert: m, meldung: `Gesucht ist die Zahl der Suchen, ab der sich das Sortieren lohnt. Stelle die Ungleichung \`k · ${n} > ${sort} + k · ${bin}\` auf.` },
            ]),
          },
        ],
        hinweis: `Stelle \`k · ${n} > ${sort} + k · ${bin}\` auf und löse nach \`k\`.`,
        loesung: `**Ansatz:** Kosten beider Strategien vergleichen.\n---\n\`k · ${n} > ${sort} + k · ${bin}\` wird zu \`k · ${n - bin} > ${sort}\`, also \`k > ${(grenze).toFixed(3).replace(".", ",")}\`.\n---\nDas kleinste ganze \`k\` ist ${k}. Probe: ${k * n} gegen ${sort} + ${k * bin} = ${sort + k * bin}.`,
      };
    },
  }),
];
