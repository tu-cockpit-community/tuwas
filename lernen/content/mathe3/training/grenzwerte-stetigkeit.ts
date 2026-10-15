import { drill, tz, polyTex, bruchTex, type Drill, type Rng } from "@/lib/lernen/training";

const K = "grenzwerte-stetigkeit";

/** (x - r) als LaTeX mit sauberem Vorzeichen */
function linf(r: number, v = "x"): string {
  if (r === 0) return v;
  return `${v} ${r > 0 ? "-" : "+"} ${Math.abs(r)}`;
}

/** ganze Zahl in [a, b], die nicht in der Ausschlussliste vorkommt */
function verschieden(r: Rng, a: number, b: number, aus: number[]): number {
  let v = r.int(a, b);
  while (aus.includes(v)) v = r.int(a, b);
  return v;
}

/** Zahl mit Vorzeichen als Summand: 3 -> "+ 3", -3 -> "- 3" */
function plus(z: number): string {
  return z < 0 ? `- ${Math.abs(z)}` : `+ ${z}`;
}

export const DRILLS: Drill[] = [
  drill({
    id: "gs-d-einsetzen",
    kapitel: K,
    titel: "Grenzwert durch Einsetzen",
    niveau: 1,
    erzeuge: (r) => {
      const b = r.int(-5, 5);
      const c = r.int(-6, 6);
      const x0 = r.int(-3, 3);
      const d = verschieden(r, -4, 4, [-x0]);
      const z = x0 * x0 + b * x0 + c;
      const n = x0 + d;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to ${x0}} \\frac{${polyTex([1, b, c])}}{${polyTex([1, d])}}$.`,
        teile: [{ typ: "zahl", loesung: `(${z})/(${n})` }],
        hinweis: `Prüfe zuerst, ob der Nenner an der Stelle $${x0}$ ungleich $0$ ist.`,
        loesung: `Ansatz: Ist der Nenner an der Stelle $${x0}$ ungleich $0$, darf man nach den Grenzwertsätzen einfach einsetzen.\n---\nNenner: $${x0} ${plus(d)} = ${n} \\neq 0$. Zähler: $(${x0})^2 ${plus(b)} \\cdot (${x0}) ${plus(c)} = ${z}$.\n---\nGrenzwert: $\\frac{${z}}{${n}} = ${bruchTex(z, n)}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-kuerzen",
    kapitel: K,
    titel: "Kürzen bei 0 durch 0",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-5, 5);
      const s = verschieden(r, -6, 6, [a]);
      // Zaehler (x - a)(x - s) = x^2 - (a+s)x + a s
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to ${a}} \\frac{${polyTex([1, -(a + s), a * s])}}{${linf(a)}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a} - (${s})`,
            fehler: [{ wert: "0", meldung: "Einsetzen ergibt $\\frac00$. Das ist kein Ergebnis, sondern ein Signal zum Umformen: Faktorisiere den Zähler und kürze." }],
          },
        ],
        hinweis: `Einsetzen liefert $\\tfrac00$. Der Zähler hat also die Nullstelle $${a}$ und enthält den Faktor $(${linf(a)})$.`,
        loesung: `Ansatz: Einsetzen ergibt $\\tfrac{0}{0}$. Also enthält der Zähler den Faktor $(${linf(a)})$, und wir kürzen ihn.\n---\nFaktorisieren: $${polyTex([1, -(a + s), a * s])} = (${linf(a)})(${linf(s)})$.\n---\nKürzen ist erlaubt, weil der Grenzwert nur $x \\neq ${a}$ betrachtet: Es bleibt $${linf(s)}$.\n---\nJetzt einsetzen: $${a} ${s > 0 ? "-" : "+"} ${Math.abs(s)} = ${a - s}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-luecke",
    kapitel: K,
    titel: "Hebbare Lücke und Polstelle",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(-4, 4);
      const s = verschieden(r, -5, 5, [a]);
      const t = verschieden(r, -5, 5, [a, s]);
      const zTex = polyTex([1, -(a + s), a * s]);
      const nTex = polyTex([1, -(a + t), a * t]);
      return {
        angabe: `Die Funktion $f(x) = \\dfrac{${zTex}}{${nTex}}$ hat zwei Definitionslücken. Bestimme den Wert der stetigen Fortsetzung an der hebbaren Lücke und die Polstelle.`,
        teile: [
          { typ: "zahl", label: "Wert der stetigen Fortsetzung", loesung: `(${a} - (${s}))/(${a} - (${t}))` },
          {
            typ: "zahl",
            label: "Polstelle",
            loesung: `${t}`,
            fehler: [{ wert: `${a}`, meldung: `Bei $x = ${a}$ kürzt sich der Faktor weg. Dort ist die Lücke hebbar, nicht ein Pol.` }],
          },
        ],
        hinweis: "Faktorisiere Zähler und Nenner und kürze gemeinsame Faktoren. Eine Nullstelle des Nenners, die sich wegkürzt, ist hebbar.",
        loesung: `Ansatz: Zähler und Nenner faktorisieren, kürzen und dann jede Nullstelle des Nenners einordnen.\n---\n$f(x) = \\dfrac{(${linf(a)})(${linf(s)})}{(${linf(a)})(${linf(t)})} = \\dfrac{${linf(s)}}{${linf(t)}}$ für $x \\neq ${a}$ und $x \\neq ${t}$.\n---\nBei $x = ${a}$ kürzt sich der Faktor weg: hebbare Lücke. Wert der Fortsetzung: $\\dfrac{${a - s}}{${a - t}} = ${bruchTex(a - s, a - t)}$.\n---\nBei $x = ${t}$ bleibt der Nenner $0$, der Zähler ist $${t - s} \\neq 0$. Das ist die Polstelle.`,
      };
    },
  }),
  drill({
    id: "gs-d-wurzel",
    kapitel: K,
    titel: "Erweitern mit der Gegenwurzel",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(1, 6);
      const k = r.intOhne0(-4, 4);
      const kx = k === 1 ? "x" : k === -1 ? "-x" : `${k}x`;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{${kx} + ${a * a}} - ${a}}{x}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${k})/(2*${a})`,
            fehler: [{ wert: `(${k})/(${a})`, meldung: `Nach dem Erweitern steht im Nenner $\\sqrt{${kx} + ${a * a}} + ${a}$. Bei $x = 0$ ist das $${a} + ${a} = ${2 * a}$, nicht $${a}$.` }],
          },
        ],
        hinweis: `Mit $\\sqrt{${kx} + ${a * a}} + ${a}$ erweitern. Dann entsteht im Zähler die dritte binomische Formel.`,
        loesung: `Ansatz: Einsetzen liefert $\\tfrac{${a} - ${a}}{0} = \\tfrac00$. Bei einer Wurzeldifferenz erweitern wir mit der Gegenwurzel, damit die Wurzel aus dem Zähler verschwindet.\n---\nErweitern: $\\dfrac{(${kx} + ${a * a}) - ${a * a}}{x\\,(\\sqrt{${kx} + ${a * a}} + ${a})} = \\dfrac{${k}}{\\sqrt{${kx} + ${a * a}} + ${a}}$, weil sich $x$ kürzt.\n---\nJetzt einsetzen: $\\dfrac{${k}}{${a} + ${a}} = ${bruchTex(k, 2 * a)}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-unendlich",
    kapitel: K,
    titel: "Rationale Funktion im Unendlichen",
    niveau: 1,
    erzeuge: (r) => {
      const gleich = r.zufall() < 0.65;
      const a = r.intOhne0(-6, 6);
      const b = r.int(-5, 5);
      const c = r.int(-5, 5);
      const d = r.intOhne0(-6, 6);
      const e = r.int(-5, 5);
      const f = r.intOhne0(-5, 5);
      const richtung = r.wahl(["\\infty", "-\\infty"]);
      const zaehler = gleich ? polyTex([a, b, c]) : polyTex([a, b]);
      const nenner = polyTex([d, e, f]);
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to ${richtung}} \\frac{${zaehler}}{${nenner}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: gleich ? `(${a})/(${d})` : "0",
            // Fehlerbild "1" nur, wenn 1 nicht selbst die richtige Antwort ist (a = d)
            fehler: gleich
              ? a === d
                ? []
                : [{ wert: "1", meldung: "„Unendlich durch unendlich“ ist nicht $1$. Teile durch $x^2$, dann bleibt der Quotient der Leitkoeffizienten." }]
              : [{ wert: `(${a})/(${d})`, meldung: "Der Zähler hat einen kleineren Grad als der Nenner. Nach dem Teilen durch $x^2$ geht der Zähler gegen $0$." }],
          },
        ],
        hinweis: "Durch die höchste Potenz des Nenners dividieren.",
        loesung: gleich
          ? `Ansatz: Wir teilen Zähler und Nenner durch die höchste Potenz des Nenners, hier $x^2$.\n---\n$\\dfrac{${a} + \\frac{${b}}{x} + \\frac{${c}}{x^2}}{${d} + \\frac{${e}}{x} + \\frac{${f}}{x^2}}$. Die Brüche mit $x$ im Nenner gehen gegen $0$.\n---\nGrenzwert: $${bruchTex(a, d)}$, der Quotient der Leitkoeffizienten.`
          : `Ansatz: Zählergrad $1$ ist kleiner als Nennergrad $2$. Wir teilen durch $x^2$.\n---\nDer Zähler wird $\\frac{${a}}{x} + \\frac{${b}}{x^2} \\to 0$, der Nenner strebt gegen $${d}$.\n---\nGrenzwert: $\\frac{0}{${d}} = 0$. Die $x$-Achse ist waagrechte Asymptote.`,
      };
    },
  }),
  drill({
    id: "gs-d-sinus",
    kapitel: K,
    titel: "Standardgrenzwert sin x / x",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-7, 7);
      const b = r.int(1, 7);
      const ax = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
      const bx = b === 1 ? "x" : `${b}x`;
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{\\sin(${ax})}{${bx}}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${a})/(${b})`,
            fehler: a === b ? [] : [{ wert: "1", meldung: "$\\frac{\\sin u}{u} \\to 1$ gilt nur, wenn im Nenner genau dasselbe steht wie im Sinus. Erweitere passend." }],
          },
        ],
        hinweis: `Erweitere so, dass im Nenner $${ax}$ steht wie im Sinus.`,
        loesung: `Ansatz: Wir erzeugen den Standardgrenzwert $\\frac{\\sin u}{u} \\to 1$ mit $u = ${ax}$.\n---\n$\\dfrac{\\sin(${ax})}{${bx}} = \\dfrac{${a}}{${b}}\\cdot\\dfrac{\\sin(${ax})}{${ax}}$. Das stimmt, weil $\\frac{${a}}{${b}} \\cdot \\frac{1}{${ax}} = \\frac{1}{${bx}}$ ist.\n---\nMit $x \\to 0$ geht auch $u = ${ax} \\to 0$, also strebt der zweite Faktor gegen $1$. Grenzwert: $${bruchTex(a, b)}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-kosinus",
    kapitel: K,
    titel: "Standardgrenzwert mit Kosinus",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(2, 6);
      return {
        angabe: `Berechne $\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos(${a}x)}{x^2}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a}^2/2`,
            fehler: [{ wert: "1/2", meldung: `$\\frac12$ ist der Grenzwert von $\\frac{1 - \\cos u}{u^2}$. Im Nenner steht aber $x^2$, nicht $(${a}x)^2$. Es fehlt der Faktor $${a * a}$.` }],
          },
        ],
        hinweis: `Substituiere $u = ${a}x$ und verwende $\\frac{1 - \\cos u}{u^2} \\to \\frac12$.`,
        loesung: `Ansatz: Wir führen den Ausdruck auf den Standardgrenzwert $\\frac{1 - \\cos u}{u^2} \\to \\frac12$ zurück.\n---\nMit $u = ${a}x$ ist $x^2 = \\tfrac{u^2}{${a * a}}$, also $\\dfrac{1 - \\cos(${a}x)}{x^2} = ${a * a}\\cdot\\dfrac{1 - \\cos u}{u^2}$.\n---\nFür $x \\to 0$ geht $u \\to 0$. Grenzwert: $${a * a}\\cdot\\tfrac12 = ${bruchTex(a * a, 2)}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-einseitig",
    kapitel: K,
    titel: "Einseitige Grenzwerte einer stückweisen Funktion",
    niveau: 1,
    erzeuge: (r) => {
      const x0 = r.int(-3, 3);
      const m1 = r.intOhne0(-4, 4);
      const b1 = r.int(-5, 5);
      const m2 = r.intOhne0(-4, 4);
      let b2 = r.int(-5, 5);
      if (m1 * x0 + b1 === m2 * x0 + b2) b2 += r.wahl([1, 2, -1]);
      const L = m1 * x0 + b1;
      const R = m2 * x0 + b2;
      return {
        angabe: `Gegeben ist $f(x) = \\begin{cases} ${polyTex([m1, b1])} & x < ${x0} \\\\ ${polyTex([m2, b2])} & x \\ge ${x0} \\end{cases}$. Bestimme die einseitigen Grenzwerte an der Stelle $${x0}$ und die Sprunghöhe (rechts minus links).`,
        teile: [
          { typ: "zahl", label: `$\\lim_{x \\to ${x0}^-} f(x)$`, loesung: `${L}`, fehler: [{ wert: `${R}`, meldung: "Für den linksseitigen Grenzwert gilt der obere Term, denn er gehört zu $x$ links der Stelle." }] },
          { typ: "zahl", label: `$\\lim_{x \\to ${x0}^+} f(x)$`, loesung: `${R}`, fehler: [{ wert: `${L}`, meldung: "Rechts der Stelle gilt der untere Term." }] },
          { typ: "zahl", label: "Sprunghöhe", loesung: `${R} - (${L})` },
        ],
        loesung: `Ansatz: Für jede Seite nehmen wir den Term, der dort gilt. Beide sind Polynome, also darf man einsetzen.\n---\nLinks gilt $${polyTex([m1, b1])}$: $\\lim_{x \\to ${x0}^-} f(x) = ${L}$.\n---\nRechts gilt $${polyTex([m2, b2])}$: $\\lim_{x \\to ${x0}^+} f(x) = ${R}$, und das ist auch $f(${x0})$.\n---\nDie Grenzwerte sind verschieden: Sprungstelle mit Sprunghöhe $${R} - (${L}) = ${R - L}$. $f$ ist bei $${x0}$ nicht stetig.`,
      };
    },
  }),
  drill({
    id: "gs-d-parameter",
    kapitel: K,
    titel: "Parameter für Stetigkeit bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const x0 = r.intOhne0(-3, 3);
      const a = r.intOhne0(-5, 5);
      const p = r.intOhne0(-6, 6);
      const q = a * x0 + p - x0 * x0;
      const w = x0 * x0 + q;
      return {
        angabe: `Bestimme $a$ so, dass $f(x) = \\begin{cases} ax ${plus(p)} & x < ${x0} \\\\ ${polyTex([1, 0, q])} & x \\ge ${x0} \\end{cases}$ auf ganz $\\R$ stetig ist.`,
        teile: [{ typ: "zahl", label: "$a$", loesung: `(${w} - (${p}))/(${x0})` }],
        hinweis: `An der Nahtstelle $${x0}$ linken Grenzwert und rechten Grenzwert (zugleich Funktionswert) gleichsetzen.`,
        loesung: `Ansatz: Im Inneren sind beide Terme Polynome, also stetig. Es bleibt die Nahtstelle $${x0}$, an der links, rechts und der Funktionswert gleich sein müssen.\n---\nLinks: $\\lim_{x \\to ${x0}^-}(ax ${plus(p)}) = ${x0}a ${plus(p)}$. Rechts und $f(${x0})$: $(${x0})^2 ${plus(q)} = ${w}$.\n---\nGleichsetzen: $${x0}a ${plus(p)} = ${w}$, also $${x0}a = ${w - p}$ und $a = ${a}$.\n---\nProbe: Links ergibt $${x0} \\cdot (${a}) ${plus(p)} = ${a * x0 + p}$, rechts $${w}$ ✓.`,
      };
    },
  }),
  drill({
    id: "gs-d-asymptoten",
    kapitel: K,
    titel: "Polstelle und waagrechte Asymptote",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-5, 5);
      const c = r.int(-5, 5);
      let b = r.int(-6, 6);
      if (a * c + b === 0) b += 1;
      return {
        angabe: `Gegeben ist $f(x) = \\dfrac{${polyTex([a, b])}}{${linf(c)}}$. Bestimme die Polstelle und die waagrechte Asymptote.`,
        teile: [
          { typ: "zahl", label: "Polstelle $x_0$", loesung: `${c}`, fehler: c === 0 ? [] : [{ wert: `${-c}`, meldung: `Der Nenner $${linf(c)}$ wird bei $x = ${c}$ null. Achte auf das Vorzeichen.` }] },
          { typ: "zahl", label: "waagrechte Asymptote $y =$", loesung: `${a}` },
        ],
        loesung: `Ansatz: Polstelle dort, wo der Nenner $0$ und der Zähler nicht $0$ ist. Für die Asymptote teilen wir durch $x$.\n---\nDer Nenner wird bei $x = ${c}$ null, der Zähler ist dort $${a * c + b} \\neq 0$: Polstelle $x_0 = ${c}$.\n---\nZähler und Nenner haben Grad 1. Für $x \\to \\pm\\infty$: $\\dfrac{${a} + \\frac{${b}}{x}}{1 ${-c < 0 ? "-" : "+"} \\frac{${Math.abs(c)}}{x}} \\to ${a}$.\n---\nWaagrechte Asymptote: $y = ${a}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-schraeg",
    kapitel: K,
    titel: "Schräge Asymptote mit Polynomdivision",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.intOhne0(-4, 4);
      const b = r.int(-5, 5);
      let c = r.int(-6, 6);
      // x^2 + bx + c = (x - d)(x + (b + d)) + (c + d(b + d))
      if (c + d * (b + d) === 0) c += 1;
      const k = b + d;
      const rest = c + d * k;
      return {
        angabe: `Gegeben ist $f(x) = \\dfrac{${polyTex([1, b, c])}}{${linf(d)}}$. Bestimme die Polstelle und die Gleichung der schrägen Asymptote.`,
        teile: [
          { typ: "zahl", label: "Polstelle", loesung: `${d}` },
          {
            typ: "term",
            label: "schräge Asymptote $y =$",
            loesung: `x + (${k})`,
            fehler: b === k ? [] : [{ wert: `x + (${b})`, meldung: "Du hast nur den Koeffizienten von $x$ im Zähler übernommen. Führe die Polynomdivision vollständig durch." }],
          },
        ],
        hinweis: `Polynomdivision $(${polyTex([1, b, c])}) : (${linf(d)})$. Der ganzzahlige Teil ist die Asymptote.`,
        loesung: `Ansatz: Der Zählergrad ist um $1$ größer als der Nennergrad. Die Polynomdivision liefert die schräge Asymptote.\n---\nPolynomdivision: $${polyTex([1, b, c])} = (${linf(d)})(${polyTex([1, k])}) ${plus(rest)}$, also $f(x) = ${polyTex([1, k])} + \\dfrac{${rest}}{${linf(d)}}$.\n---\nDer Rest $\\frac{${rest}}{${linf(d)}}$ geht für $x \\to \\pm\\infty$ gegen $0$. Schräge Asymptote: $y = ${polyTex([1, k])}$.\n---\nDer Zähler ist bei $x = ${d}$ gleich $${rest} \\neq 0$, also ist $x = ${d}$ eine Polstelle.`,
      };
    },
  }),
  drill({
    id: "gs-d-bisektion",
    kapitel: K,
    titel: "Bisektionsverfahren: drei Schritte",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.wahl([2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20]);
      const k = Math.floor(Math.sqrt(c));
      let a = k;
      let b = k + 1;
      const schritte: string[] = [];
      for (let i = 1; i <= 3; i++) {
        const m = (a + b) / 2;
        const fm = m * m - c;
        const neu = fm < 0 ? [m, b] : [a, m];
        schritte.push(
          `Schritt ${i}: $m = ${tz(m, 5)}$, $f(m) = ${tz(fm, 6)} ${fm < 0 ? "< 0" : "> 0"}$. ${fm < 0 ? "Der linke Rand wird ersetzt" : "Der rechte Rand wird ersetzt"}, weiter mit $[${tz(neu[0], 5)};\\ ${tz(neu[1], 5)}]$.`,
        );
        [a, b] = neu;
      }
      return {
        angabe: `Bestimme $\\sqrt{${c}}$ als Nullstelle von $f(x) = x^2 - ${c}$ mit dem Bisektionsverfahren. Startintervall $[${k}, ${k + 1}]$. Gib das Intervall nach drei Halbierungsschritten an.`,
        teile: [{ typ: "vektor", namen: ["a₃", "b₃"], loesung: [String(a), String(b)] }],
        hinweis: `$f(${k}) = ${k * k - c} < 0$ und $f(${k + 1}) = ${(k + 1) * (k + 1) - c} > 0$. Behalte immer die Hälfte mit Vorzeichenwechsel.`,
        loesung: `Ansatz: $f$ ist stetig mit $f(${k}) < 0 < f(${k + 1})$. In jedem Schritt halbieren wir und behalten die Hälfte, an deren Rändern $f$ verschiedene Vorzeichen hat.\n---\n${schritte.join("\n---\n")}\n---\nErgebnis: $[${tz(a, 5)};\\ ${tz(b, 5)}]$. Kontrolle: $\\sqrt{${c}} \\approx ${tz(Math.sqrt(c), 4)}$ liegt darin.`,
      };
    },
  }),
  drill({
    id: "gs-d-schritte",
    kapitel: K,
    titel: "Anzahl der Bisektionsschritte",
    niveau: 1,
    erzeuge: (r) => {
      const L = r.wahl([1, 2, 3, 4, 5, 10]);
      const k = r.int(2, 5);
      const eps = Math.pow(10, -k);
      const n = Math.ceil(Math.log2(L / eps));
      return {
        angabe: `Eine Nullstelle ist in einem Intervall der Länge $${L}$ eingeschlossen. Wie viele Bisektionsschritte braucht man mindestens, damit das Intervall höchstens $10^{-${k}}$ lang ist?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n}`,
            fehler: [{ wert: `${n - 1}`, meldung: `Nach $${n - 1}$ Schritten ist die Länge $\\frac{${L}}{2^{${n - 1}}}$, und das ist noch größer als $10^{-${k}}$. Runde $\\log_2$ immer **auf**.` }],
          },
        ],
        hinweis: "Nach $n$ Schritten ist die Länge des Intervalls durch $2^n$ geteilt.",
        loesung: `Ansatz: Jeder Schritt halbiert das Intervall. Nach $n$ Schritten ist die Länge $\\dfrac{${L}}{2^n}$.\n---\nBedingung: $\\dfrac{${L}}{2^n} \\le 10^{-${k}}$, also $2^n \\ge ${L}\\cdot 10^{${k}}$.\n---\n$\\log_2(${L}\\cdot 10^{${k}}) \\approx ${tz(Math.log2(L / eps), 3)}$. Kontrolle: $2^{${n - 1}} = ${Math.pow(2, n - 1)} < ${L * Math.pow(10, k)} \\le 2^{${n}} = ${Math.pow(2, n)}$.\n---\nMindestens $n = ${n}$ Schritte.`,
      };
    },
  }),
  drill({
    id: "gs-d-nullstelle",
    kapitel: K,
    titel: "Nullstelle mit dem Nullstellensatz einschließen",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(1, 5);
      let q = r.intOhne0(-25, 25);
      const f = (x: number) => x * x * x + p * x + q;
      // f ist streng monoton wachsend (p > 0): genau eine Nullstelle; ganzzahlige Nullstellen vermeiden
      let k = 0;
      for (;;) {
        k = -10;
        while (f(k + 1) < 0) k++;
        if (f(k + 1) !== 0 && f(k) !== 0) break;
        q += 1;
      }
      const qTex = q < 0 ? `- ${-q}` : `+ ${q}`;
      return {
        angabe: `Gegeben ist $f(x) = x^3 ${p === 1 ? "+ x" : `+ ${p}x`} ${qTex}$. Bestimme die ganze Zahl $k$, für die die (einzige) Nullstelle von $f$ im Intervall $[k, k + 1]$ liegt.`,
        teile: [{ typ: "zahl", label: "$k$", loesung: `${k}` }],
        hinweis: "Setze ganze Zahlen ein und suche zwei benachbarte mit verschiedenen Vorzeichen.",
        loesung: `Ansatz: $f$ ist als Polynom stetig. Wo $f$ zwischen zwei benachbarten ganzen Zahlen das Vorzeichen wechselt, liefert der Nullstellensatz eine Nullstelle.\n---\nWeil $f'(x) = 3x^2 + ${p} > 0$ ist, wächst $f$ streng monoton und hat höchstens eine Nullstelle.\n---\n$f(${k}) = ${f(k)} < 0$ und $f(${k + 1}) = ${f(k + 1)} > 0$.\n---\nNach dem Nullstellensatz liegt die Nullstelle in $(${k}, ${k + 1})$, also $k = ${k}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-epsdelta",
    kapitel: K,
    titel: "Das größte δ bei linearen Funktionen",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.intOhne0(-8, 8);
      const b = r.int(-6, 6);
      const x0 = r.int(-3, 3);
      const eps = r.wahl([0.1, 0.01, 0.05, 0.2, 0.3, 0.02]);
      const L = m * x0 + b;
      const am = Math.abs(m);
      return {
        angabe: `Es gilt $\\lim_{x \\to ${x0}} (${polyTex([m, b])}) = ${L}$. Bestimme zu $\\varepsilon = ${tz(eps)}$ das größte $\\delta$, sodass aus $0 < |x - (${x0})| < \\delta$ folgt: $|(${polyTex([m, b])}) - (${L})| < \\varepsilon$.`,
        teile: [
          {
            typ: "zahl",
            label: "$\\delta$",
            loesung: `${eps}/${am}`,
            fehler: am === 1 ? [] : [{ wert: `${eps}*${am}`, meldung: `Du hast mit $${am}$ multipliziert statt dividiert. Die Gerade verstärkt Abstände um den Faktor $${am}$, also muss $x$ genauer stimmen.` }],
          },
        ],
        hinweis: `Forme $|f(x) - L|$ so um, dass der Faktor $|x - (${x0})|$ sichtbar wird.`,
        loesung: `Ansatz: Wir formen den Abstand $|f(x) - L|$ so um, dass der Abstand $|x - (${x0})|$ als Faktor erscheint.\n---\n$|(${polyTex([m, b])}) - (${L})| = |${m}x - (${m * x0})| = ${am}\\,|x - (${x0})|$.\n---\nDas ist $< ${tz(eps)}$ genau dann, wenn $|x - (${x0})| < \\dfrac{${tz(eps)}}{${am}}$.\n---\nAlso $\\delta = ${tz(eps / am, 6)}$. Allgemein passt bei dieser Geraden $\\delta = \\frac{\\varepsilon}{${am}}$.`,
      };
    },
  }),
  drill({
    id: "gs-d-maxmin",
    kapitel: K,
    titel: "Maximum und Minimum auf einem Intervall",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.int(-3, 3);
      const u = r.int(1, 4);
      let w = r.int(1, 4);
      if (w === u) w = u === 4 ? 3 : u + 1;
      const q = r.int(-6, 6);
      const a = p - u;
      const b = p + w;
      const f = (x: number) => x * x - 2 * p * x + q;
      const fa = f(a);
      const fb = f(b);
      const fp = f(p);
      const max = Math.max(fa, fb);
      const naeher = Math.min(fa, fb);
      return {
        angabe: `Bestimme das Maximum und das Minimum von $f(x) = ${polyTex([1, -2 * p, q])}$ auf dem Intervall $[${a}, ${b}]$.`,
        teile: [
          { typ: "zahl", label: "Maximum", loesung: `${max}`, fehler: [{ wert: `${fp}`, meldung: "An der Stelle mit $f'(x) = 0$ liegt hier das Minimum. Das Maximum liegt an einem Randpunkt." }] },
          { typ: "zahl", label: "Minimum", loesung: `${fp}`, fehler: [{ wert: `${naeher}`, meldung: "Du hast nur die Randwerte verglichen. Im Inneren liegt bei $f'(x) = 0$ ein noch kleinerer Wert." }] },
        ],
        hinweis: "Kandidaten sind die Stelle mit $f'(x) = 0$ und die beiden Randpunkte.",
        loesung: `Ansatz: $f$ ist stetig auf dem abgeschlossenen Intervall $[${a}, ${b}]$, also gibt es Maximum und Minimum. Kandidaten sind innere Stellen mit $f'(x) = 0$ und die Randpunkte.\n---\n$f'(x) = ${polyTex([2, -2 * p])} = 0$ für $x = ${p}$. Diese Stelle liegt im Intervall.\n---\nWerte: $f(${a}) = ${fa}$, $f(${p}) = ${fp}$, $f(${b}) = ${fb}$.\n---\nMaximum $${max}$ am Rand, Minimum $${fp}$ an der Stelle $${p}$.`,
      };
    },
  }),
];
