import { drill, tz, bruchTex, polyTex, type Drill } from "@/lib/lernen/training";

const K = "grenzwerte-folgen";

/** " + x" bzw. " - |x|" (leer bei 0) */
const plus = (x: number) => (x === 0 ? "" : ` ${x < 0 ? "-" : "+"} ${tz(Math.abs(x))}`);
/** Koeffizient vor n: 1 -> "", -1 -> "-" */
const kn = (k: number) => (k === 1 ? "" : k === -1 ? "-" : tz(k));
/** Zahl in Klammern, wenn negativ */
const kl = (x: number) => (x < 0 ? `(${x})` : String(x));
/** Bruch als kleines LaTeX */
const tf = (z: number, n: number) => bruchTex(z, n).replace("\\frac", "\\tfrac");

/** kleinste natuerliche Zahl s mit s*s > m (m >= 0 ganz) */
function kleinsteMitQuadratGroesser(m: number): number {
  let s = Math.floor(Math.sqrt(m));
  while (s * s > m) s--;
  while (s * s <= m) s++;
  return s;
}

/**
 * Fehlerbilder nur behalten, wenn ihr Wert deutlich von der richtigen Loesung abweicht
 * (sonst wuerde eine richtige Eingabe als Fehler gemeldet). Bei ganzzahligen Antworten mit
 * absoluter Toleranz 0,1 reicht ein Abstand ueber `absolut` (sonst fielen N - 1 und aehnliche
 * Randfehler bei grossen N weg).
 */
function fehlerbilder(richtig: number, kandidaten: [number, string, string][], absolut?: number) {
  const gesehen = new Set<string>();
  return kandidaten
    .filter(([w, wert]) => {
      if (!Number.isFinite(w) || gesehen.has(wert)) return false;
      gesehen.add(wert);
      return Math.abs(w - richtig) > (absolut ?? 0.01 * Math.max(1, Math.abs(richtig)));
    })
    .map(([, wert, meldung]) => ({ wert, meldung }));
}

/** Toleranz fuer ganzzahlige Indizes: absolut 0,1 (sonst wuerde N - 1 bei grossen N als richtig gelten) */
const ganz = (n: number) => ({ loesung: String(n), toleranz: 0.1 });

export const DRILLS: Drill[] = [
  drill({
    id: "gf-d-rational",
    kapitel: K,
    titel: "Grenzwert rationaler Folgen (gleicher Grad)",
    niveau: 1,
    erzeuge: (r) => {
      const grad = r.int(1, 3);
      const zaehler = Array.from({ length: grad + 1 }, (_, i) => (i === 0 ? r.intOhne0(-9, 9) : r.int(-9, 9)));
      const nenner = Array.from({ length: grad + 1 }, (_, i) => (i === 0 ? r.int(1, 9) : r.int(0, 9)));
      const [p, q] = [zaehler[0], nenner[0]];
      const [p0, q0] = [zaehler[grad], nenner[grad]];
      const potenz = grad === 1 ? "n" : `n^{${grad}}`;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{n\\to\\infty}\\frac{${polyTex(zaehler, "n")}}{${polyTex(nenner, "n")}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${p})/(${q})`,
            anzeige: tf(p, q),
            fehler: fehlerbilder(p / q, [
              [q / p, `(${q})/(${p})`, "Du hast den Bruch umgedreht. Oben steht der führende Koeffizient des **Zählers**, unten der des Nenners."],
              [q0 === 0 ? NaN : p0 / q0, `(${p0})/(${q0})`, "Du hast die Konstanten (die Glieder ohne $n$) geteilt. Für große $n$ bestimmen aber die **höchsten** Potenzen das Verhalten."],
            ]),
          },
        ],
        hinweis: `Dividiere Zähler und Nenner durch $${potenz}$, die höchste Potenz im Nenner.`,
        loesung: `Ansatz: Direktes Einsetzen gibt „unendlich durch unendlich“. Deshalb dividieren wir Zähler und Nenner durch $${potenz}$, die höchste Potenz im Nenner.\n---\nDanach steht oben $${p}$ plus Brüche mit $n$ im Nenner und unten $${q}$ plus solche Brüche. Diese Brüche sind Nullfolgen.\n---\nNach den Grenzwertsätzen bleibt der Quotient der führenden Koeffizienten: $\\frac{${p}}{${q}} = ${bruchTex(p, q)}$. Kontrolle: Zählergrad und Nennergrad sind gleich, also passt ein endlicher Grenzwert ungleich $0$.`,
      };
    },
  }),
  drill({
    id: "gf-d-rational-null",
    kapitel: K,
    titel: "Rationale Folge mit kleinerem Zählergrad",
    niveau: 1,
    erzeuge: (r) => {
      const z = [r.intOhne0(-9, 9), r.int(-9, 9)];
      const nn = [r.int(1, 6), r.int(0, 5), r.int(1, 9)];
      return {
        angabe: `Berechne $\\displaystyle\\lim_{n\\to\\infty}\\frac{${polyTex(z, "n")}}{${polyTex(nn, "n")}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: "0",
            fehler: fehlerbilder(0, [
              [z[0] / nn[0], `(${z[0]})/(${nn[0]})`, "Du hast die Koeffizienten von $n$ im Zähler und von $n^2$ im Nenner geteilt. Das sind verschiedene Potenzen. Der Nenner wächst schneller."],
            ]),
          },
        ],
        hinweis: "Dividiere Zähler und Nenner durch $n^2$, die höchste Potenz im Nenner.",
        loesung: `Ansatz: Wir dividieren Zähler und Nenner durch $n^2$, die höchste Potenz im Nenner. Dann entstehen Nullfolgen.\n---\nEs entsteht $\\frac{\\frac{${z[0]}}{n}${z[1] === 0 ? "" : ` ${z[1] < 0 ? "-" : "+"} \\frac{${Math.abs(z[1])}}{n^2}`}}{${nn[0]}${nn[1] === 0 ? "" : ` + \\frac{${nn[1]}}{n}`} + \\frac{${nn[2]}}{n^2}}$. Der Zähler geht gegen $0$, der Nenner gegen $${nn[0]}$.\n---\nNach der Quotientenregel ist der Grenzwert $\\frac{0}{${nn[0]}} = 0$. Das passt zur Regel: Ist der Zählergrad kleiner als der Nennergrad, ist der Grenzwert $0$.`,
      };
    },
  }),
  drill({
    id: "gf-d-eps-bruch",
    kapitel: K,
    titel: "Kleinstes N zu gegebenem ε",
    niveau: 2,
    erzeuge: (r) => {
      let a = 0, b = 0, d = 1;
      do {
        a = r.intOhne0(-5, 6);
        b = r.int(-9, 9);
        d = r.int(1, 6);
      } while (b - a * d === 0);
      const D = Math.abs(b - a * d);
      const k = r.int(1, 3);
      const zehn = 10 ** k;
      const N = D * zehn - d + 1;
      const eps = tz(1 / zehn, 6);
      return {
        angabe: `Für $a_n = \\dfrac{${kn(a)}n${plus(b)}}{n + ${d}}$ gilt $\\lim\\limits_{n\\to\\infty} a_n = ${a}$. Bestimme das kleinste $N$, sodass $|a_n - ${kl(a)}| < ${eps}$ für alle $n \\ge N$ gilt.`,
        teile: [
          {
            typ: "zahl",
            label: "$N$",
            ...ganz(N),
            fehler: fehlerbilder(N, [
              [N - 1, String(N - 1), `Für $n = ${N - 1}$ ist der Abstand genau $${eps}$. Die Bedingung verlangt **echt kleiner**, der Rand zählt nicht.`],
              [D * zehn, String(D * zehn), `$${D * zehn}$ ist die Grenze für $n + ${d}$, nicht für $n$. Ziehe noch $${d}$ ab.`],
            ], 0.5),
          },
        ],
        hinweis: `Bring $a_n - ${kl(a)}$ auf den gemeinsamen Nenner $n + ${d}$ und nimm den Betrag.`,
        loesung: `Ansatz: Zuerst den Abstand vereinfachen. $a_n - ${kl(a)} = \\frac{${kn(a)}n${plus(b)} - ${kl(a)}(n + ${d})}{n + ${d}} = \\frac{${b - a * d}}{n + ${d}}$, also $|a_n - ${kl(a)}| = \\frac{${D}}{n + ${d}}$.\n---\nUngleichung lösen: Mit $n + ${d}$ multiplizieren und durch $${eps}$ dividieren. $\\frac{${D}}{n + ${d}} < ${eps}$ ist gleichwertig mit $n + ${d} > ${D * zehn}$, also mit $n > ${D * zehn - d}$.\n---\nDas kleinste $N$ ist die kleinste ganze Zahl über $${D * zehn - d}$, also $N = ${N}$. Kontrolle: Für $n = ${N - 1}$ ist der Abstand genau $${eps}$ und damit nicht kleiner.`,
      };
    },
  }),
  drill({
    id: "gf-d-eps-quadrat",
    kapitel: K,
    titel: "N für c/n²",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(1, 9);
      const k = r.int(2, 5);
      const m = c * 10 ** k;
      const N = kleinsteMitQuadratGroesser(m);
      return {
        angabe: `Für $a_n = \\dfrac{${c}}{n^2}$ und $\\varepsilon = 10^{-${k}}$: Bestimme das kleinste $N$ mit $|a_n| < \\varepsilon$ für alle $n \\ge N$.`,
        teile: [
          {
            typ: "zahl",
            label: "$N$",
            ...ganz(N),
            fehler: fehlerbilder(N, [
              [N - 1, String(N - 1), (N - 1) ** 2 === m
                ? `Für $n = ${N - 1}$ ist $n^2 = ${m}$, also genau der Rand. Verlangt ist $n^2 > ${m}$, also echt größer.`
                : `$\\sqrt{${m}} \\approx ${tz(Math.sqrt(m), 2)}$. Du hast abgerundet. Prüfe: $${N - 1}^2 = ${(N - 1) ** 2}$ ist nicht größer als $${m}$.`],
              [m + 1, String(m + 1), `$n^2 > ${m}$ ist richtig. Jetzt fehlt noch das Wurzelziehen.`],
            ], 0.5),
          },
        ],
        hinweis: `$\\frac{${c}}{n^2} < 10^{-${k}}$ ist gleichwertig mit $n^2 > ${m}$. Danach die Wurzel ziehen.`,
        loesung: `Ansatz: Der Abstand ist $\\frac{${c}}{n^2}$, weil der Bruch positiv ist. Wir lösen $\\frac{${c}}{n^2} < 10^{-${k}}$ nach $n$ auf.\n---\nMit $n^2$ multiplizieren und durch $10^{-${k}}$ dividieren: $n^2 > ${m}$. Weil $n$ positiv ist, darf man die Wurzel ziehen: $n > \\sqrt{${m}} \\approx ${tz(Math.sqrt(m), 3)}$.\n---\nKleinstes $N = ${N}$. Kontrolle: $${N - 1}^2 = ${(N - 1) ** 2}$ ist nicht größer als $${m}$, aber $${N}^2 = ${N * N}$ ist größer ✓.`,
      };
    },
  }),
  drill({
    id: "gf-d-qn",
    kapitel: K,
    titel: "Ab wann ist qⁿ < ε?",
    niveau: 2,
    erzeuge: (r) => {
      const q = r.wahl([0.5, 0.6, 0.75, 0.8, 0.9, 0.95] as const);
      const k = r.int(2, 4);
      const eps = 10 ** -k;
      let N = 1;
      while (q ** N >= eps) N++;
      const grenze = Math.log(eps) / Math.log(q);
      return {
        angabe: `Bestimme das kleinste $N$, sodass $${tz(q)}^n < ${tz(eps, 6)}$ für alle $n \\ge N$ gilt.`,
        teile: [
          {
            typ: "zahl",
            label: "$N$",
            ...ganz(N),
            fehler: fehlerbilder(N, [
              [N - 1, String(N - 1), `Die Rechnung liefert $n > ${tz(grenze, 2)}$. Du hast abgerundet. Für $n = ${N - 1}$ ist die Potenz noch zu groß.`],
            ], 0.5),
          },
        ],
        hinweis: `Logarithmieren. Achtung: $\\ln ${tz(q)}$ ist negativ, beim Dividieren dreht sich das Zeichen.`,
        loesung: `Ansatz: $n$ steht im Exponenten, deshalb logarithmieren wir. Der Logarithmus ist streng wachsend, das Zeichen bleibt: $n\\ln ${tz(q)} < \\ln ${tz(eps, 6)}$.\n---\nWir dividieren durch $\\ln ${tz(q)}$. Diese Zahl ist negativ, deshalb dreht sich das Zeichen: $n > \\frac{\\ln ${tz(eps, 6)}}{\\ln ${tz(q)}} \\approx ${tz(grenze, 3)}$.\n---\nKleinstes $N = ${N}$. Weil $${tz(q)}^n$ streng fällt, gilt die Ungleichung dann für alle $n \\ge ${N}$.`,
      };
    },
  }),
  drill({
    id: "gf-d-eps-abschaetzung",
    kapitel: K,
    titel: "ε-Beweis mit Abschätzung: welches N liefert die Regel?",
    niveau: 3,
    erzeuge: (r) => {
      const b = r.int(2, 9);
      const k = r.int(2, 3);
      const eps = 10 ** -k;
      const regelN = Math.max(b, 2 * 10 ** k + 1);
      let exakt = 1;
      for (let n = 1; n < 100000; n++) if (!((n + b) / (n * n) < eps)) exakt = n + 1;
      return {
        angabe: `Beim Beweis von $\\lim\\limits_{n\\to\\infty}\\dfrac{n + ${b}}{n^2} = 0$ schätzt man für $n \\ge ${b}$ den Zähler ab: $n + ${b} \\le 2n$. Daraus folgt $\\dfrac{n + ${b}}{n^2} \\le \\dfrac{2}{n}$.\n\nDie Regel im Beweis lautet: „Wähle $N \\ge ${b}$ und $N > \\frac{2}{\\varepsilon}$.“ Welches kleinste $N$ liefert diese Regel für $\\varepsilon = ${tz(eps, 6)}$?`,
        teile: [
          {
            typ: "zahl",
            label: "$N$",
            ...ganz(regelN),
            fehler: fehlerbilder(regelN, [
              [2 * 10 ** k, String(2 * 10 ** k), `Verlangt ist $N > \\frac{2}{\\varepsilon} = ${2 * 10 ** k}$, also echt größer.`],
              [exakt, String(exakt), `$${exakt}$ ist das kleinste $N$ für die **exakte** Ungleichung. Gefragt ist das $N$, das die Regel aus der Abschätzung liefert.`],
            ], 0.5),
          },
        ],
        hinweis: "Beide Bedingungen müssen gelten. Rechne $\\frac{2}{\\varepsilon}$ aus und nimm die nächste ganze Zahl darüber.",
        loesung: `Ansatz: Die Abschätzung ersetzt den Abstand durch den größeren, einfacheren Ausdruck $\\frac{2}{n}$. Ist $\\frac{2}{n} < \\varepsilon$, dann erst recht der Abstand.\n---\n$\\frac{2}{n} < ${tz(eps, 6)}$ gilt für $n > ${2 * 10 ** k}$. Zusammen mit $N \\ge ${b}$ ergibt sich $N = ${regelN}$.\n---\nVergleich: Die exakte Ungleichung $\\frac{n + ${b}}{n^2} < ${tz(eps, 6)}$ gilt schon ab $n = ${exakt}$. Die Abschätzung verschenkt etwas. Für den Beweis ist das egal, denn er braucht nur irgendein passendes $N$.`,
      };
    },
  }),
  drill({
    id: "gf-d-divergenz",
    kapitel: K,
    titel: "Bestimmte Divergenz: ab wann über der Schranke K?",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.int(2, 9);
      const schranke = r.wahl([1000, 2000, 5000, 10000, 50000] as const);
      let N = 1;
      while (!(c * N * N > schranke)) N++;
      const w = Math.sqrt(schranke / c);
      return {
        angabe: `Die Folge $a_n = ${c}n^2$ divergiert bestimmt gegen $\\infty$. Bestimme das kleinste $N$, sodass $a_n > ${schranke}$ für alle $n \\ge N$ gilt.`,
        teile: [
          {
            typ: "zahl",
            label: "$N$",
            ...ganz(N),
            fehler: fehlerbilder(N, [
              [Math.floor(w), String(Math.floor(w)), c * Math.floor(w) ** 2 === schranke
                ? `Für $n = ${Math.floor(w)}$ ist $${c}n^2 = ${schranke}$, also genau die Schranke. Verlangt ist **größer** als $${schranke}$.`
                : `$\\sqrt{${tz(schranke / c, 3)}} \\approx ${tz(w, 2)}$. Du hast abgerundet. Gesucht ist die kleinste ganze Zahl, für die $${c}n^2$ **größer** als $${schranke}$ ist.`],
              [Math.floor(schranke / c) + 1, String(Math.floor(schranke / c) + 1), `Aus $n^2 > ${tz(schranke / c, 3)}$ folgt $n > \\sqrt{${tz(schranke / c, 3)}}$. Du hast das Wurzelziehen vergessen.`],
            ], 0.5),
          },
        ],
        hinweis: `Löse $${c}n^2 > ${schranke}$: erst durch $${c}$ dividieren, dann die Wurzel ziehen.`,
        loesung: `Ansatz: Bestimmte Divergenz heißt: Zu jeder Schranke $K$ liegen ab einer Stelle alle Glieder darüber. Hier ist $K = ${schranke}$, und wir lösen $${c}n^2 > ${schranke}$.\n---\nDurch $${c}$ dividieren: $n^2 > ${tz(schranke / c, 3)}$. Weil $n$ positiv ist, darf man die Wurzel ziehen: $n > ${tz(w, 3)}$.\n---\nKleinstes $N = ${N}$. Kontrolle: $a_{${N - 1}} = ${c * (N - 1) ** 2}$ ist nicht größer als $${schranke}$, $a_{${N}} = ${c * N * N}$ schon. Weil die Folge wächst, bleiben alle späteren Glieder darüber.`,
      };
    },
  }),
  drill({
    id: "gf-d-monotonie",
    kapitel: K,
    titel: "Monotonie mit der Differenzmethode",
    niveau: 3,
    erzeuge: (r) => {
      let p = 0, q = 0, rr = 1, s = 1;
      do {
        p = r.intOhne0(-6, 6);
        q = r.int(-9, 9);
        rr = r.int(1, 4);
        s = r.int(1, 6);
        // Musterpruefungsfolge (2n - 3)/(3n + 2) ist fuer die Simulationen reserviert
      } while (p * s - q * rr === 0 || (p === 2 && q === -3 && rr === 3 && s === 2));
      const z = p * s - q * rr;
      const wachsend = z > 0;
      const nenner = (x: string) => `${kn(rr)}${x} + ${s}`;
      return {
        angabe: `Gegeben ist $a_n = \\dfrac{${kn(p)}n${plus(q)}}{${nenner("n")}}$, $n \\ge 1$. Die Differenz lässt sich als $a_{n+1} - a_n = \\dfrac{Z}{(${nenner("n")})(${kn(rr)}n + ${rr + s})}$ mit einer ganzen Zahl $Z$ schreiben.\n\na) Bestimme $Z$.\n\nb) Ist die Folge streng monoton wachsend oder streng monoton fallend?`,
        teile: [
          {
            typ: "zahl",
            label: "a) $Z$",
            loesung: String(z),
            toleranz: 0.1,
            fehler: fehlerbilder(z, [[-z, String(-z), "Du hast $a_n - a_{n+1}$ statt $a_{n+1} - a_n$ berechnet. Achte auf die Reihenfolge beim Abziehen."]], 0.5),
          },
          {
            typ: "auswahl",
            label: "b)",
            optionen: ["streng monoton wachsend", "streng monoton fallend"],
            richtig: [wachsend ? 0 : 1],
            fehler: [{ wert: wachsend ? 1 : 0, meldung: "Der Nenner ist für alle $n \\ge 1$ positiv. Das Vorzeichen der Differenz ist also das Vorzeichen von $Z$." }],
          },
        ],
        hinweis: `Schreibe $a_{n+1} = \\frac{${kn(p)}n${plus(p + q)}}{${kn(rr)}n + ${rr + s}}$ und bringe die Differenz auf den gemeinsamen Nenner. Im Zähler fallen alle $n$-Terme weg.`,
        loesung: `Ansatz: Differenzmethode. Wir berechnen $a_{n+1} - a_n$ und bestimmen das Vorzeichen für alle $n$. Zuerst $a_{n+1} = \\frac{${kn(p)}(n + 1)${plus(q)}}{${kn(rr)}(n + 1) + ${s}} = \\frac{${kn(p)}n${plus(p + q)}}{${kn(rr)}n + ${rr + s}}$.\n---\nGemeinsamer Nenner: Der Zähler ist $(${kn(p)}n${plus(p + q)})(${nenner("n")}) - (${kn(p)}n${plus(q)})(${kn(rr)}n + ${rr + s})$. Beim Ausmultiplizieren heben sich die Terme mit $n^2$ und mit $n$ weg. Es bleibt $Z = ${p}\\cdot ${s} - ${kl(q)}\\cdot ${rr} = ${z}$.\n---\nDer Nenner ist für alle $n \\ge 1$ positiv. Also hat die Differenz das Vorzeichen von $Z = ${z}$. Die Folge ist streng monoton ${wachsend ? "wachsend" : "fallend"}. Probe: $a_1 = ${bruchTex(p + q, rr + s)}$ und $a_2 = ${bruchTex(2 * p + q, 2 * rr + s)}$ passen dazu.`,
      };
    },
  }),
  drill({
    id: "gf-d-schranken",
    kapitel: K,
    titel: "Monotonie, Schranken und Grenzwert",
    niveau: 2,
    erzeuge: (r) => {
      let p = 0, q = 0, d = 1;
      do {
        p = r.intOhne0(-5, 5);
        q = r.int(-9, 9);
        d = r.int(1, 5);
      } while (p * d - q === 0);
      const c = q - p * d; // a_n = p + c/(n + d)
      const a1z = p + q;
      const a1n = 1 + d;
      const wachsend = c < 0;
      return {
        angabe: `Gegeben ist $a_n = \\dfrac{${kn(p)}n${plus(q)}}{n + ${d}}$, $n \\ge 1$. Bestimme die Monotonie, das Infimum und das Supremum.`,
        teile: [
          {
            typ: "auswahl",
            label: "Monotonie",
            optionen: ["streng monoton wachsend", "streng monoton fallend"],
            richtig: [wachsend ? 0 : 1],
            fehler: [{ wert: wachsend ? 1 : 0, meldung: "Zerlege $a_n$ in Grenzwert plus Rest. Wird eine fallende positive Nullfolge **abgezogen**, wächst die Folge." }],
          },
          { typ: "zahl", label: "Infimum", loesung: wachsend ? `(${a1z})/(${a1n})` : String(p) },
          { typ: "zahl", label: "Supremum", loesung: wachsend ? String(p) : `(${a1z})/(${a1n})` },
        ],
        hinweis: `Zerlege $a_n = ${p} + \\frac{c}{n + ${d}}$ mit einer Konstanten $c$.`,
        loesung: `Ansatz: Zerlegung in Grenzwert plus Rest. $a_n = \\frac{${p}(n + ${d})${plus(c)}}{n + ${d}} = ${p} ${c < 0 ? "-" : "+"} \\frac{${Math.abs(c)}}{n + ${d}}$.\n---\nDer Bruch $\\frac{${Math.abs(c)}}{n + ${d}}$ ist positiv, fällt streng und geht gegen $0$. ${wachsend ? "Er wird abgezogen, also wächst $a_n$ streng" : "Er wird addiert, also fällt $a_n$ streng"}. Der Grenzwert ist $${p}$.\n---\n${wachsend ? `Das erste Glied ist das kleinste: Infimum und Minimum $a_1 = ${bruchTex(a1z, a1n)}$. Supremum ist der Grenzwert $${p}$, er wird nie erreicht.` : `Das erste Glied ist das größte: Supremum und Maximum $a_1 = ${bruchTex(a1z, a1n)}$. Infimum ist der Grenzwert $${p}$, er wird nie erreicht.`}`,
      };
    },
  }),
  drill({
    id: "gf-d-wurzel",
    kapitel: K,
    titel: "Wurzeldifferenz",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-8, 8);
      const b = r.int(0, 5);
      const rad = `n^2 ${a < 0 ? "-" : "+"} ${kn(Math.abs(a))}n${plus(b)}`;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{${rad}} - n\\right)$.${a < 0 ? " (Die Folge wird für die $n$ betrachtet, für die der Radikand nicht negativ ist.)" : ""}`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${a})/2`,
            anzeige: tf(a, 2),
            fehler: fehlerbilder(a / 2, [
              [0, "0", "„Unendlich minus unendlich“ ist kein fester Wert. Du musst die Differenz erst umformen: mit der Summe erweitern."],
              [a, String(a), "Nach dem Erweitern steht im Nenner $\\sqrt{\\dots} + n$. Durch $n$ geteilt geht er gegen $1 + 1 = 2$, nicht gegen $1$."],
            ]),
          },
        ],
        hinweis: "Mit $\\sqrt{\\dots} + n$ erweitern (dritte binomische Formel), dann durch $n$ dividieren.",
        loesung: `Ansatz: Die Differenz hat die Form „unendlich minus unendlich“. Wir erweitern mit der Summe, damit die dritte binomische Formel die Wurzel beseitigt: $\\frac{(${rad}) - n^2}{\\sqrt{${rad}} + n} = \\frac{${kn(a)}n${plus(b)}}{\\sqrt{${rad}} + n}$.\n---\nZähler und Nenner durch $n$ dividieren. Unter der Wurzel heißt das: durch $n^2$ dividieren. Im Zähler bleibt $${a}$ plus eine Nullfolge, im Nenner $\\sqrt{1 + \\text{Nullfolge}} + 1$.\n---\nGrenzwert: $\\frac{${a}}{1 + 1} = ${bruchTex(a, 2)}$.`,
      };
    },
  }),
  drill({
    id: "gf-d-e",
    kapitel: K,
    titel: "Grenzwerte mit e",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.wahl([1, 2, 3, -1, -2, -3] as const);
      const b = r.int(1, 3);
      const exp = a * b;
      const basis = `1 ${a < 0 ? "-" : "+"} \\frac{${Math.abs(a)}}{n}`;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{n\\to\\infty}\\left(${basis}\\right)^{${b === 1 ? "" : b}n}$ (exakt oder auf 4 Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            loesung: `e^(${exp})`,
            anzeige: `e^{${exp}} \\approx ${tz(Math.exp(exp), 6)}`,
            fehler: fehlerbilder(Math.exp(exp), [
              [1, "1", "„$1$ hoch unendlich“ ist kein fester Wert. Die Basis geht gegen $1$, aber der Exponent wächst gleichzeitig. Verwende den Standardgrenzwert mit $e$."],
              [Math.exp(a), `e^(${a})`, `Du hast den Faktor $${b}$ im Exponenten vergessen. $\\left(${basis}\\right)^{${b}n}$ ist die ${b}. Potenz von $\\left(${basis}\\right)^{n}$.`],
            ]),
          },
        ],
        hinweis: "Standardgrenzwert $\\left(1 + \\frac{x}{n}\\right)^n \\to e^x$.",
        loesung: `Ansatz: Die Form „$1$ hoch unendlich“ ist unbestimmt. Wir führen sie auf den Standardgrenzwert $\\left(1 + \\frac{x}{n}\\right)^n \\to e^x$ zurück.${b === 1 ? "" : `\n---\nPotenzgesetz: $\\left(${basis}\\right)^{${b}n} = \\left[\\left(${basis}\\right)^n\\right]^{${b}}$.`}\n---\nMit $x = ${a}$ geht die innere Potenz gegen $e^{${a}}$. ${b === 1 ? `Der Grenzwert ist $e^{${a}} \\approx ${tz(Math.exp(exp), 6)}$.` : `Nach der Potenzregel ist der Grenzwert $\\left(e^{${a}}\\right)^{${b}} = e^{${exp}} \\approx ${tz(Math.exp(exp), 6)}$.`}`,
      };
    },
  }),
  drill({
    id: "gf-d-exp-quotient",
    kapitel: K,
    titel: "Quotient von Exponentialausdrücken",
    niveau: 2,
    erzeuge: (r) => {
      const [g, k] = r.wahl([[3, 2], [5, 2], [5, 3], [4, 3], [4, 2]] as const);
      const a = r.intOhne0(-6, 6);
      const c = r.int(1, 5);
      const dd = r.int(1, 9);
      return {
        angabe: `Berechne $\\displaystyle\\lim_{n\\to\\infty}\\frac{${kn(a)}${a === 1 || a === -1 ? "" : "\\cdot "}${g}^n + ${k}^n}{${c === 1 ? "" : `${c}\\cdot `}${g}^n + ${dd}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${a})/(${c})`,
            anzeige: tf(a, c),
            fehler: fehlerbilder(a / c, [
              [(a + 1) / c, `(${a + 1})/(${c})`, `Du hast $\\left(\\frac{${k}}{${g}}\\right)^n$ wie $1$ behandelt. Wegen $\\frac{${k}}{${g}} < 1$ ist das eine Nullfolge.`],
            ]),
          },
        ],
        hinweis: `Zähler und Nenner durch $${g}^n$ dividieren, die am schnellsten wachsende Größe.`,
        loesung: `Ansatz: Wir dividieren Zähler und Nenner durch $${g}^n$, weil das die am schnellsten wachsende Größe ist: $\\frac{${a} + \\left(\\frac{${k}}{${g}}\\right)^n}{${c} + \\frac{${dd}}{${g}^n}}$.\n---\nWegen $0 < \\frac{${k}}{${g}} < 1$ ist $\\left(\\frac{${k}}{${g}}\\right)^n$ eine Nullfolge. Auch $\\frac{${dd}}{${g}^n}$ geht gegen $0$.\n---\nNach den Grenzwertsätzen ist der Grenzwert $\\frac{${a}}{${c}} = ${bruchTex(a, c)}$.`,
      };
    },
  }),
  drill({
    id: "gf-d-rekursiv",
    kapitel: K,
    titel: "Grenzwert einer linearen Rekursion",
    niveau: 2,
    erzeuge: (r) => {
      const q = r.wahl([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8] as const);
      const c = r.int(1, 9);
      const a1 = r.int(0, 5);
      const a2 = q * a1 + c;
      const a3 = q * a2 + c;
      const g = c / (1 - q);
      return {
        angabe: `Gegeben ist $a_1 = ${a1}$ und $a_{n+1} = ${tz(q)}\\,a_n + ${c}$. Die Folge ist monoton und beschränkt (das darfst du verwenden).\n\na) Berechne $a_3$.\n\nb) Bestimme den Grenzwert.`,
        teile: [
          { typ: "zahl", label: "a) $a_3$", loesung: `${q}*(${q}*${a1} + ${c}) + ${c}`, anzeige: tz(a3) },
          {
            typ: "zahl",
            label: "b) Grenzwert",
            loesung: `${c}/(1 - ${q})`,
            anzeige: tz(g),
            fehler: fehlerbilder(g, [
              [c / q, `${c}/${q}`, "Aus $a = q\\,a + c$ folgt $a - q\\,a = c$. Klammere $a$ aus: $a\\,(1 - q) = c$. Teile durch $1 - q$, nicht durch $q$."],
              [c / (1 + q), `${c}/(1 + ${q})`, "Vorzeichenfehler beim Umstellen: Wenn du $q\\,a$ auf die linke Seite bringst, wird es abgezogen."],
            ]),
          },
        ],
        hinweis: "b) Nach dem Monotoniekriterium existiert $a = \\lim a_n$. Auch $a_{n+1}$ geht gegen $a$. Setze $a$ in die Rekursion ein.",
        loesung: `Ansatz: a) Rekursion zweimal anwenden. $a_2 = ${tz(q)}\\cdot ${a1} + ${c} = ${tz(a2)}$, $a_3 = ${tz(q)}\\cdot ${tz(a2)} + ${c} = ${tz(a3)}$.\n---\nb) Die Folge ist monoton und beschränkt. Nach dem Monotoniekriterium existiert der Grenzwert $a$. Weil auch $a_{n+1} \\to a$ gilt, darf man in der Rekursion zum Grenzwert übergehen: $a = ${tz(q)}\\,a + ${c}$.\n---\nAuflösen: $a - ${tz(q)}\\,a = ${c}$, also $${tz(1 - q)}\\,a = ${c}$ und $a = \\frac{${c}}{${tz(1 - q)}} = ${tz(g)}$. Kontrolle: $${tz(q)}\\cdot ${tz(g)} + ${c} = ${tz(q * g + c)}$ ✓.`,
      };
    },
  }),
  drill({
    id: "gf-d-geo-reihe",
    kapitel: K,
    titel: "Geometrische Reihe summieren",
    niveau: 1,
    erzeuge: (r) => {
      const [z, nn] = r.wahl([[1, 2], [1, 3], [2, 3], [-1, 2], [-1, 3], [1, 4], [3, 4], [-2, 3], [2, 5], [-3, 4]] as const);
      const a = r.intOhne0(-6, 6);
      const qTex = bruchTex(z, nn);
      const q = z / nn;
      return {
        angabe: `Berechne $\\displaystyle\\sum_{k=0}^{\\infty} ${a === 1 ? "" : a === -1 ? "-" : `${a}\\cdot`}\\left(${qTex}\\right)^k$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${a})/(1 - (${z})/(${nn}))`,
            anzeige: tf(a * nn, nn - z),
            fehler: fehlerbilder(a / (1 - q), [
              [a / (1 + q), `(${a})/(1 + (${z})/(${nn}))`, "Vorzeichenfehler: Im Nenner steht $1 - q$. Bei negativem $q$ wird daraus eine Summe, bei positivem eine Differenz."],
              [1 / (1 - q), `1/(1 - (${z})/(${nn}))`, `Das erste Glied ist $${a}$, nicht $1$. Der Wert ist „erstes Glied durch $(1 - q)$“.`],
            ]),
          },
        ],
        hinweis: "Erstes Glied durch $(1 - q)$, gültig für $|q| < 1$.",
        loesung: `Ansatz: Es ist eine geometrische Reihe mit erstem Glied $${a}$ (für $k = 0$) und Quotient $q = ${qTex}$. Wegen $|q| < 1$ konvergiert sie.\n---\nWert: $s = \\frac{${a}}{1 - \\left(${qTex}\\right)} = \\frac{${a}}{${bruchTex(nn - z, nn)}} = ${bruchTex(a * nn, nn - z)}$.`,
      };
    },
  }),
  drill({
    id: "gf-d-geo-reihe-start",
    kapitel: K,
    titel: "Geometrische Reihe mit späterem Start",
    niveau: 2,
    erzeuge: (r) => {
      const [z, nn] = r.wahl([[1, 2], [1, 3], [2, 3], [-1, 2], [1, 4], [3, 4]] as const);
      const m = r.int(1, 3);
      const erstesZ = z ** m;
      const erstesN = nn ** m;
      const qTex = bruchTex(z, nn);
      const q = z / nn;
      const wert = q ** m / (1 - q);
      return {
        angabe: `Berechne $\\displaystyle\\sum_{k=${m}}^{\\infty}\\left(${qTex}\\right)^k$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `((${z})/(${nn}))^${m}/(1 - (${z})/(${nn}))`,
            anzeige: tf(erstesZ * nn, erstesN * (nn - z)),
            fehler: fehlerbilder(wert, [
              [1 / (1 - q), `1/(1 - (${z})/(${nn}))`, `Die Reihe beginnt bei $k = ${m}$. Das erste Glied ist also $\\left(${qTex}\\right)^{${m}}$, nicht $1$.`],
            ]),
          },
        ],
        hinweis: `Das erste Glied ist $\\left(${qTex}\\right)^{${m}}$, nicht $1$.`,
        loesung: `Ansatz: Geometrische Reihe, aber sie beginnt bei $k = ${m}$. Das erste Glied ist $\\left(${qTex}\\right)^{${m}} = ${bruchTex(erstesZ, erstesN)}$, der Quotient $q = ${qTex}$.\n---\nFormel „erstes Glied durch $(1 - q)$“: $s = \\frac{${bruchTex(erstesZ, erstesN)}}{1 - \\left(${qTex}\\right)} = \\frac{${bruchTex(erstesZ, erstesN)}}{${bruchTex(nn - z, nn)}} = ${bruchTex(erstesZ * nn, erstesN * (nn - z))}$.\n---\nKontrolle: Die volle Reihe ab $k = 0$ hat den Wert $${bruchTex(nn, nn - z)}$. Unsere Reihe ist kleiner, weil die ersten ${m} Summanden fehlen.`,
      };
    },
  }),
  drill({
    id: "gf-d-periodisch",
    kapitel: K,
    titel: "Periodische Dezimalzahl als Bruch",
    niveau: 1,
    erzeuge: (r) => {
      let p = 0;
      do p = r.int(1, 98);
      while (p % 11 === 0);
      const ziffern = String(p).padStart(2, "0");
      return {
        angabe: `Schreibe $0{,}\\overline{${ziffern}}$ mithilfe der geometrischen Reihe als (gekürzten) Bruch.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${p}/99`,
            anzeige: tf(p, 99),
            fehler: fehlerbilder(p / 99, [[p / 100, `${p}/100`, "Das ist nur der erste Summand $0{,}${ziffern}$. Die Periode wiederholt sich unendlich oft, du musst die ganze Reihe summieren."]]),
          },
        ],
        hinweis: `$0{,}\\overline{${ziffern}} = \\frac{${p}}{100} + \\frac{${p}}{100^2} + \\dots$`,
        loesung: `Ansatz: Die Periode wiederholt sich alle zwei Stellen. Das ist eine geometrische Reihe mit erstem Glied $\\frac{${p}}{100}$ und Quotient $q = \\frac{1}{100}$.\n---\nWert: $\\frac{${p}/100}{1 - 1/100} = \\frac{${p}/100}{99/100} = \\frac{${p}}{99}${bruchTex(p, 99) === `\\frac{${p}}{99}` ? "" : ` = ${bruchTex(p, 99)}`}$. Kontrolle mit dem Taschenrechner: $${p} : 99 \\approx ${tz(p / 99, 4)}$ ✓.`,
      };
    },
  }),
  drill({
    id: "gf-d-teleskop",
    kapitel: K,
    titel: "Teleskopreihe",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 9);
      const c = r.int(1, 6);
      return {
        angabe: `Berechne $\\displaystyle\\sum_{k=${m}}^{\\infty}\\frac{${c}}{k(k + 1)}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c}/${m}`,
            anzeige: tf(c, m),
            fehler: fehlerbilder(c / m, [[c, String(c), `Die Summe beginnt bei $k = ${m}$. Nach dem Wegheben bleibt der erste Summand $\\frac{1}{${m}}$ stehen, nicht $\\frac11$.`]]),
          },
        ],
        hinweis: "$\\frac{1}{k(k+1)} = \\frac1k - \\frac{1}{k + 1}$.",
        loesung: `Ansatz: Partialbruchzerlegung, damit sich die Summanden gegenseitig wegheben. $\\frac{${c}}{k(k+1)} = ${c === 1 ? "" : c}\\left(\\frac1k - \\frac{1}{k+1}\\right)$.\n---\nPartialsumme bis $n$: Alle Zwischenglieder heben sich weg, es bleibt $${c === 1 ? "" : c}\\left(\\frac{1}{${m}} - \\frac{1}{n + 1}\\right)$.\n---\nFür $n \\to \\infty$ geht $\\frac{1}{n + 1}$ gegen $0$. Der Wert ist $\\frac{${c}}{${m}} = ${bruchTex(c, m)}$.`,
      };
    },
  }),
];
