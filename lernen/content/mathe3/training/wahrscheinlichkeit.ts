import { drill, tz, type Drill } from "@/lib/lernen/training";
import { werteReell } from "@/lib/lernen/rechnen";

const K = "wahrscheinlichkeit";

/** Wert eines mathjs-Ausdrucks (gleicher Rechenkern wie die Antwortpruefung) */
const w = (ausdruck: string) => werteReell(ausdruck);

/** Wahrscheinlichkeit als LaTeX mit Dezimalkomma, 4 Nachkommastellen */
const p4 = (ausdruck: string) => tz(w(ausdruck), 4);

/** p als mathjs-Literal und als LaTeX */
const P_WERTE = [
  { js: "0.1", tex: "0{,}1" },
  { js: "0.2", tex: "0{,}2" },
  { js: "0.25", tex: "0{,}25" },
  { js: "0.3", tex: "0{,}3" },
  { js: "0.4", tex: "0{,}4" },
  { js: "0.5", tex: "0{,}5" },
  { js: "0.6", tex: "0{,}6" },
  { js: "1/6", tex: "\\tfrac16" },
] as const;

export const DRILLS: Drill[] = [
  drill({
    id: "wk-d-augensumme",
    kapitel: K,
    titel: "Augensumme zweier Würfel",
    niveau: 1,
    erzeuge: (r) => {
      const s = r.int(2, 12);
      const anzahl = 6 - Math.abs(s - 7);
      const paare: string[] = [];
      for (let a = 1; a <= 6; a++) {
        const b = s - a;
        if (b >= 1 && b <= 6) paare.push(`(${a},${b})`);
      }
      return {
        angabe: `Zwei faire Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit für die Augensumme $${s}$? (4 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: `${anzahl}/36`,
            toleranz: 0.0005,
            fehler: s !== 2 && s !== 12 ? [{ wert: "1/11", meldung: "Die elf Augensummen sind nicht gleich wahrscheinlich. Zähle die 36 geordneten Paare." }] : undefined,
          },
        ],
        hinweis: "Denke dir die Würfel verschieden gefärbt. Es gibt 36 gleich wahrscheinliche geordnete Paare.",
        loesung: `**Ansatz:** Laplace mit den $36$ gleich wahrscheinlichen geordneten Paaren $(a, b)$.\n---\nGünstig sind $${paare.join(", ")}$, also $${anzahl}$ Paare.\n---\n$P = \\tfrac{${anzahl}}{36} \\approx ${tz(anzahl / 36, 4)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-kombination",
    kapitel: K,
    titel: "Auswahl ohne Reihenfolge",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(8, 30);
      const k = r.int(2, 5);
      const zaehler = Array.from({ length: k }, (_, i) => n - i);
      const ergebnis = w(`binom(${n}, ${k})`);
      return {
        angabe: `Aus einer Gruppe von $${n}$ Personen wird ein gleichberechtigtes Team aus $${k}$ Personen ausgewählt. Wie viele verschiedene Teams sind möglich?`,
        teile: [
          {
            typ: "zahl",
            loesung: `binom(${n}, ${k})`,
            fehler: [{ wert: zaehler.join("*"), meldung: `Das zählt geordnet. Jedes Team kommt darin $${k}!$-mal vor, einmal in jeder Reihenfolge.` }],
          },
        ],
        hinweis: "Tauschtest: Ist das Team ein anderes, wenn man zwei Mitglieder vertauscht?",
        loesung: `**Ansatz:** Tauschtest negativ (gleichberechtigt), Nochmal-Test negativ (niemand doppelt). Also Kombination ohne Wiederholung.\n---\nKürzen, sodass im Zähler nur die $${k}$ größten Faktoren stehen: $$\\binom{${n}}{${k}} = \\frac{${zaehler.join(" \\cdot ")}}{${k}!}$$\n---\nErgebnis: $${ergebnis}$ Teams.`,
      };
    },
  }),
  drill({
    id: "wk-d-variation",
    kapitel: K,
    titel: "Auswahl mit Reihenfolge",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(6, 25);
      const k = r.int(2, 4);
      const aemter = ["Obfrau", "Stellvertreter", "Kassierin", "Schriftführer"].slice(0, k);
      const faktoren = Array.from({ length: k }, (_, i) => n - i);
      const ergebnis = faktoren.reduce((a, b) => a * b, 1);
      return {
        angabe: `In einem Verein mit $${n}$ Mitgliedern werden die Ämter ${aemter.join(", ")} vergeben. Eine Person bekommt höchstens ein Amt. Wie viele Möglichkeiten gibt es?`,
        teile: [
          {
            typ: "zahl",
            loesung: faktoren.join("*"),
            fehler: [{ wert: `binom(${n}, ${k})`, meldung: "Tauschtest: Tauschen zwei Personen ihre Ämter, ist das ein anderer Vorstand. Die Reihenfolge zählt." }],
          },
        ],
        hinweis: "Wie viele Personen stehen für das erste, zweite, … Amt noch zur Verfügung?",
        loesung: `**Ansatz:** Die Ämter sind verschieden, also zählt die Reihenfolge. Niemand bekommt zwei Ämter, also ohne Wiederholung.\n---\nProduktregel: Für jedes weitere Amt ist eine Person weniger übrig.\n---\n$${faktoren.join(" \\cdot ")} = ${ergebnis}$ Möglichkeiten.`,
      };
    },
  }),
  drill({
    id: "wk-d-mindestens-einmal",
    kapitel: K,
    titel: "Mindestens ein Treffer",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.wahl([0.05, 0.1, 0.15, 0.2, 0.25, 0.3]);
      const n = r.int(3, 10);
      const ausdruck = `1 - (1 - ${p})^${n}`;
      return {
        angabe: `Ein Versuch gelingt jeweils mit Wahrscheinlichkeit $${tz(p)}$, unabhängig von den anderen. Er wird $${n}$-mal durchgeführt. Wie groß ist die Wahrscheinlichkeit für mindestens einen Erfolg? (4 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.0005,
            fehler: [{ wert: `(1 - ${p})^${n}`, meldung: "Das ist die Wahrscheinlichkeit für **keinen** Erfolg. Gesucht ist das Gegenereignis davon." }],
          },
        ],
        hinweis: "Gegenereignis: kein einziger Erfolg.",
        loesung: `**Ansatz:** Gegenereignis „kein Erfolg“. Das ist ein einziger Pfad im Baum.\n---\nKein Erfolg in $${n}$ Versuchen: $${tz(1 - p)}^{${n}} \\approx ${p4(`(1 - ${p})^${n}`)}$.\n---\n$P(\\text{mindestens ein Erfolg}) = 1 - ${p4(`(1 - ${p})^${n}`)} = ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-vierfelder",
    kapitel: K,
    titel: "Bedingte Wahrscheinlichkeit aus einer Vierfeldertafel",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(10, 40);
      const b = r.int(10, 60);
      const c = r.int(10, 40);
      const d = r.int(20, 80);
      const n = a + b + c + d;
      return {
        angabe: `In einer Umfrage unter $${n}$ Personen gilt: $${a}$ Personen haben Merkmal $A$ und Merkmal $B$, $${b}$ haben $A$ ohne $B$, $${c}$ haben $B$ ohne $A$ und $${d}$ keines von beiden. Berechne $P(B \\mid A)$ und $P(A \\mid B)$ auf 4 Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            label: "$P(B \\mid A)$",
            loesung: `${a}/(${a}+${b})`,
            toleranz: 0.0005,
            fehler: [{ wert: `${a}/${n}`, meldung: "Das ist $P(A \\cap B)$. Die Bedingung $A$ verlangt, nur durch die Personen mit $A$ zu teilen." }],
          },
          {
            typ: "zahl",
            label: "$P(A \\mid B)$",
            loesung: `${a}/(${a}+${c})`,
            toleranz: 0.0005,
            // Bei b = c sind P(B | A) und P(A | B) gleich; dann wäre das Fehlerbild die richtige Antwort.
            fehler: b !== c ? [{ wert: `${a}/(${a}+${b})`, meldung: "Das ist $P(B \\mid A)$. Hier ist $B$ die Bedingung, also teilst du durch die Personen mit $B$." }] : undefined,
          },
        ],
        hinweis: "Die Bedingung steht hinter dem Strich und bestimmt den Nenner.",
        loesung: `**Ansatz:** Bedingte Wahrscheinlichkeit: Anzahl in beiden Merkmalen durch die Anzahl der Bedingung.\n---\nMit $A$ gibt es $${a} + ${b} = ${a + b}$ Personen, also $P(B \\mid A) = \\tfrac{${a}}{${a + b}} \\approx ${p4(`${a}/${a + b}`)}$.\n---\nMit $B$ gibt es $${a} + ${c} = ${a + c}$ Personen, also $P(A \\mid B) = \\tfrac{${a}}{${a + c}} \\approx ${p4(`${a}/${a + c}`)}$. Gleicher Zähler, verschiedener Nenner.`,
      };
    },
  }),
  drill({
    id: "wk-d-binom-genau",
    kapitel: K,
    titel: "Binomialverteilung: genau k Treffer",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(4, 12);
      const p = r.wahl(P_WERTE);
      const k = r.int(1, Math.min(n - 1, 5));
      const ausdruck = `binompdf(${n}, ${p.js}, ${k})`;
      return {
        angabe: `$X \\sim B(${n};\\ ${p.tex})$. Berechne $P(X = ${k})$ auf 4 Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.0005,
            // Bei winzigen Wahrscheinlichkeiten sind Pfad und Ergebnis auf 4 Stellen gleich; dann kein Fehlerbild.
            fehler:
              Math.abs(w(ausdruck) - w(`(${p.js})^${k}*(1 - ${p.js})^${n - k}`)) > 0.001
                ? [{ wert: `(${p.js})^${k}*(1 - ${p.js})^${n - k}`, meldung: `Das ist nur ein einzelner Pfad. Es fehlt der Faktor $\\binom{${n}}{${k}}$ für die Lage der Treffer.` }]
                : undefined,
          },
        ],
        hinweis: "Binomialformel: Anzahl der Pfade mal Wahrscheinlichkeit eines Pfades.",
        loesung: `**Ansatz:** Binomialformel $$P(X = ${k}) = \\binom{${n}}{${k}} \\cdot \\left(${p.tex}\\right)^{${k}} \\cdot \\left(1 - ${p.tex}\\right)^{${n - k}}$$\n---\nDie Hochzahlen ergeben zusammen $${n}$. Es gibt $\\binom{${n}}{${k}} = ${w(`binom(${n}, ${k})`)}$ Pfade mit genau $${k}$ Treffern.\n---\nErgebnis: $P(X = ${k}) \\approx ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-binom-mindestens",
    kapitel: K,
    titel: "Binomialverteilung: mindestens k Treffer",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(6, 15);
      const p = r.wahl(P_WERTE);
      const k = r.int(1, 3);
      const summanden = Array.from({ length: k }, (_, i) => `P(X = ${i})`);
      const werte = Array.from({ length: k }, (_, i) => p4(`binompdf(${n}, ${p.js}, ${i})`));
      const ausdruck = `1 - binomcdf(${n}, ${p.js}, ${k - 1})`;
      return {
        angabe: `Ein Versuch gelingt mit Wahrscheinlichkeit $${p.tex}$ und wird $${n}$-mal unabhängig wiederholt. Wie groß ist die Wahrscheinlichkeit für mindestens $${k}$ Erfolge? (4 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.0005,
            // Ist P(X = k) winzig, unterscheiden sich richtige und falsche Grenze auf 4 Stellen nicht; dann kein Fehlerbild.
            fehler:
              w(`binompdf(${n}, ${p.js}, ${k})`) > 0.001
                ? [{ wert: `1 - binomcdf(${n}, ${p.js}, ${k})`, meldung: `Die $${k}$ gehört zu „mindestens $${k}$“. Das Gegenereignis ist $X \\le ${k - 1}$.` }]
                : undefined,
          },
        ],
        hinweis: `Gegenereignis von „mindestens ${k}“ ist „höchstens ${k - 1}“.`,
        loesung: `**Ansatz:** $X \\sim B(${n};\\ ${p.tex})$. Das Gegenereignis $X \\le ${k - 1}$ hat weniger Werte.\n---\n$${summanden.join(" + ")} \\approx ${werte.join(" + ")}$.\n---\n$P(X \\ge ${k}) = 1 - P(X \\le ${k - 1}) \\approx ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-binom-kennzahlen",
    kapitel: K,
    titel: "Erwartungswert und Standardabweichung (binomial)",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.wahl([20, 25, 40, 50, 60, 80, 100, 120, 200]);
      const p = r.wahl(P_WERTE.filter((x) => x.js !== "1/6"));
      const mu = w(`${n}*${p.js}`);
      const v = w(`${n}*${p.js}*(1-${p.js})`);
      return {
        angabe: `$X \\sim B(${n};\\ ${p.tex})$. Berechne $E(X)$ und $\\sigma$ (2 Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "$E(X)$", loesung: `${n}*${p.js}` },
          {
            typ: "zahl",
            label: "$\\sigma$",
            loesung: `sqrt(${n}*${p.js}*(1-${p.js}))`,
            toleranz: 0.005,
            fehler: [{ wert: `${n}*${p.js}*(1-${p.js})`, meldung: "Das ist die Varianz. Die Standardabweichung ist ihre Wurzel." }],
          },
        ],
        hinweis: "$E(X) = np$ und $\\sigma = \\sqrt{np(1-p)}$.",
        loesung: `**Ansatz:** Kennzahlen der Binomialverteilung.\n---\n$E(X) = np = ${n} \\cdot ${p.tex} = ${tz(mu)}$.\n---\n$V(X) = np(1-p) = ${tz(v)}$, also $\\sigma = \\sqrt{${tz(v)}} \\approx ${tz(Math.sqrt(v), 2)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-wie-oft",
    kapitel: K,
    titel: "Wie oft mindestens versuchen?",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.wahl([0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4]);
      const c = r.wahl([0.9, 0.95, 0.99]);
      const grenze = Math.log(1 - c) / Math.log(1 - p);
      const n = Math.ceil(grenze - 1e-12);
      return {
        angabe: `Ein Versuch gelingt jeweils mit Wahrscheinlichkeit $${tz(p)}$, unabhängig von den anderen. Wie oft muss man ihn mindestens durchführen, damit mit mindestens $${tz(c * 100)}\\,\\%$ Wahrscheinlichkeit mindestens ein Erfolg eintritt?`,
        teile: [
          {
            typ: "zahl",
            loesung: `ceil(ln(1 - ${c})/ln(1 - ${p}))`,
            fehler: n > 1 ? [{ wert: String(n - 1), meldung: "Du hast abgerundet. Mit einem Versuch weniger wird die verlangte Sicherheit nicht erreicht." }] : undefined,
          },
        ],
        hinweis: "Ansatz $1 - (1-p)^n \\ge c$, dann logarithmieren. Beim Teilen durch einen negativen Logarithmus dreht sich das Zeichen.",
        loesung: `**Ansatz:** „Mindestens ein Erfolg“ über das Gegenereignis: $1 - ${tz(1 - p)}^n \\ge ${tz(c)}$, also $${tz(1 - p)}^n \\le ${tz(1 - c)}$.\n---\nLogarithmieren und durch die negative Zahl $\\ln ${tz(1 - p)}$ teilen, dabei dreht sich das Zeichen: $n \\ge \\dfrac{\\ln ${tz(1 - c)}}{\\ln ${tz(1 - p)}} \\approx ${tz(grenze, 2)}$.\n---\nAufrunden, weil $n$ ganz sein muss: $n = ${n}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-bayes",
    kapitel: K,
    titel: "Totale Wahrscheinlichkeit und Bayes",
    niveau: 2,
    erzeuge: (r) => {
      const pa = r.wahl([0.01, 0.02, 0.05, 0.1, 0.2, 0.3]);
      const sens = r.wahl([0.8, 0.9, 0.95, 0.98, 0.99]);
      const fp = r.wahl([0.01, 0.02, 0.03, 0.05, 0.1]);
      const pb = `${pa}*${sens} + ${1 - pa}*${fp}`;
      // Bei P(A) = 0,2, Sensitivität 0,8 und Fehlalarm 0,05 ist P(A | T) = 0,8 = P(T | A); dann kein Fehlerbild.
      const umkehrGleich = Math.abs(w(`${pa}*${sens}/(${pb})`) - sens) < 0.001;
      return {
        angabe: `Ein Merkmal $A$ tritt mit $P(A) = ${tz(pa)}$ auf. Ein Test ist bei $A$ mit Wahrscheinlichkeit $${tz(sens)}$ positiv, ohne $A$ mit Wahrscheinlichkeit $${tz(fp)}$. Berechne $P(T)$ (Test positiv) und $P(A \\mid T)$ auf 4 Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            label: "$P(T)$",
            loesung: pb,
            toleranz: 0.0005,
            fehler: [{ wert: `${pa}*${sens}`, meldung: "Das ist nur der Pfad „$A$ und positiv“. Auch ohne $A$ ist der Test manchmal positiv." }],
          },
          {
            typ: "zahl",
            label: "$P(A \\mid T)$",
            loesung: `${pa}*${sens}/(${pb})`,
            toleranz: 0.0005,
            fehler: umkehrGleich ? undefined : [{ wert: String(sens), meldung: "Das ist $P(T \\mid A)$. Gefragt ist die umgekehrte Richtung. Teile den Pfad „$A$ und positiv“ durch $P(T)$." }],
          },
        ],
        hinweis: "Baum: erste Stufe A oder nicht A, zweite Stufe Testergebnis.",
        loesung: `**Ansatz:** Baum mit der Ursache in der ersten und dem Test in der zweiten Stufe.\n---\nTotale Wahrscheinlichkeit: $P(T) = ${tz(pa)} \\cdot ${tz(sens)} + ${tz(1 - pa)} \\cdot ${tz(fp)} = ${tz(pa * sens, 6)} + ${tz((1 - pa) * fp, 6)} \\approx ${p4(pb)}$.\n---\nBayes: $P(A \\mid T) = \\dfrac{${tz(pa * sens, 6)}}{${tz(w(pb), 6)}} \\approx ${p4(`${pa}*${sens}/(${pb})`)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-erwartungswert",
    kapitel: K,
    titel: "Erwartungswert und Varianz einer Verteilung",
    niveau: 2,
    erzeuge: (r) => {
      const xs = r.mische([-2, -1, 0, 1, 2, 3, 4, 5]).slice(0, 3).sort((a, b) => a - b);
      const a = r.int(1, 5);
      const b = r.int(1, 8 - a);
      const ps = [a, b, 10 - a - b].map((x) => x / 10);
      const e = xs.reduce((s, x, i) => s + x * ps[i], 0);
      const e2 = xs.reduce((s, x, i) => s + x * x * ps[i], 0);
      const ausE = xs.map((x, i) => `(${x})*${ps[i]}`).join(" + ");
      const ausE2 = xs.map((x, i) => `(${x})^2*${ps[i]}`).join(" + ");
      return {
        angabe: `$X$ nimmt die Werte $${xs.join(",\\ ")}$ mit den Wahrscheinlichkeiten $${ps.map((p) => tz(p)).join(",\\ ")}$ an. Berechne $E(X)$ und $V(X)$.`,
        teile: [
          { typ: "zahl", label: "$E(X)$", loesung: ausE },
          {
            typ: "zahl",
            label: "$V(X)$",
            loesung: `${ausE2} - (${ausE})^2`,
            // Bei E(X) = 0 ist E(X^2) schon die Varianz; dann kein Fehlerbild.
            // V hat höchstens 2 Nachkommastellen, mu^2 ist mindestens 0,01: enge Toleranz trennt E(X^2) sicher von V.
            toleranz: 0.001,
            fehler: Math.abs(e) > 1e-9 ? [{ wert: ausE2, meldung: "Das ist $E(X^2)$. Beim Verschiebungssatz musst du noch $\\mu^2$ abziehen." }] : undefined,
          },
        ],
        hinweis: "Verschiebungssatz: $V(X) = E(X^2) - \\mu^2$.",
        loesung: `**Ansatz:** Erwartungswert als gewichteter Mittelwert, Varianz mit dem Verschiebungssatz.\n---\n$E(X) = ${xs.map((x, i) => `${x < 0 ? `(${x})` : x} \\cdot ${tz(ps[i])}`).join(" + ")} = ${tz(e)}$.\n---\n$E(X^2) = ${xs.map((x, i) => `${x * x} \\cdot ${tz(ps[i])}`).join(" + ")} = ${tz(e2)}$.\n---\n$V(X) = ${tz(e2)} - ${e < 0 ? `(${tz(e)})` : tz(e)}^2 = ${tz(e2 - e * e)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-hypergeometrisch",
    kapitel: K,
    titel: "Ziehen ohne Zurücklegen",
    niveau: 2,
    erzeuge: (r) => {
      const N = r.int(10, 25);
      const M = r.int(2, Math.min(6, N - 4));
      const n = r.int(2, 4);
      const k = r.int(0, Math.min(M, n));
      const ausdruck = `binom(${M}, ${k})*binom(${N - M}, ${n - k})/binom(${N}, ${n})`;
      const z = w(`binom(${M}, ${k})*binom(${N - M}, ${n - k})`);
      const m = w(`binom(${N}, ${n})`);
      return {
        angabe: `Unter $${N}$ Bauteilen sind $${M}$ defekt. Es werden $${n}$ Bauteile ohne Zurücklegen entnommen. Wie groß ist die Wahrscheinlichkeit, dass genau $${k}$ davon defekt sind? (4 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.0005,
            // Liegt der Binomialwert zufällig innerhalb der Toleranz, wäre das Fehlerbild die richtige Antwort.
            fehler: Math.abs(w(`binompdf(${n}, ${M}/${N}, ${k})`) - w(ausdruck)) > 0.001 ? [{ wert: `binompdf(${n}, ${M}/${N}, ${k})`, meldung: "Das ist die Binomialverteilung, also Ziehen mit Zurücklegen. Hier wird nicht zurückgelegt." }] : undefined,
          },
        ],
        hinweis: "Hypergeometrisch: günstige ungeordnete Auswahlen durch alle ungeordneten Auswahlen.",
        loesung: `**Ansatz:** Ohne Zurücklegen, alle Auswahlen gleich wahrscheinlich, also hypergeometrisch: $$P(X = ${k}) = \\frac{\\binom{${M}}{${k}}\\binom{${N - M}}{${n - k}}}{\\binom{${N}}{${n}}}$$\n---\nGünstig: $${z}$ Auswahlen. Möglich: $${m}$ Auswahlen.\n---\n$P(X = ${k}) = \\dfrac{${z}}{${m}} \\approx ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-geometrisch",
    kapitel: K,
    titel: "Warten auf den ersten Treffer",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.wahl([0.1, 0.2, 0.25, 0.3, 0.4, 0.5]);
      const k = r.int(2, 6);
      const ausdruck = `(1 - ${p})^${k - 1}*${p}`;
      return {
        angabe: `Ein Versuch gelingt jeweils mit Wahrscheinlichkeit $${tz(p)}$, unabhängig von früheren Versuchen. Man wiederholt ihn bis zum ersten Erfolg. Mit welcher Wahrscheinlichkeit kommt der erste Erfolg genau beim $${k}$. Versuch? (4 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.0005,
            fehler: [{ wert: `(1 - ${p})^${k}*${p}`, meldung: `Vor dem $${k}$. Versuch liegen nur $${k - 1}$ Fehlversuche. Die Hochzahl ist $k - 1$.` }],
          },
        ],
        hinweis: "Erst alle Fehlversuche, dann der Treffer: ein einziger Pfad.",
        loesung: `**Ansatz:** Geometrische Verteilung. Vor dem ersten Erfolg kommen $${k - 1}$ Fehlversuche.\n---\n$P(X = ${k}) = ${tz(1 - p)}^{${k - 1}} \\cdot ${tz(p)} \\approx ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-dichte",
    kapitel: K,
    titel: "Dichte normieren und Wahrscheinlichkeit berechnen",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 3);
      const b = r.int(1, 3);
      const a = r.int(1, 2 * b - 1) / 2;
      // f(x) = c x^m auf [0; b]; Flaeche c b^(m+1)/(m+1) = 1
      const c = `(${m + 1})/(${b}^${m + 1})`;
      return {
        angabe: `Die Funktion $f(x) = c \\cdot x^{${m}}$ für $0 \\le x \\le ${b}$ und $f(x) = 0$ sonst soll eine Dichte sein. Bestimme $c$ und berechne $P(X \\le ${tz(a)})$ (4 Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            label: "$c$",
            loesung: c,
            toleranz: 0.0005,
            fehler: [{ wert: `1/(${b}^${m + 1})`, meldung: `Eine Stammfunktion von $x^{${m}}$ ist $\\tfrac{x^{${m + 1}}}{${m + 1}}$. Der Faktor $\\tfrac{1}{${m + 1}}$ fehlt in deiner Fläche.` }],
          },
          {
            typ: "zahl",
            label: `$P(X \\le ${tz(a)})$`,
            loesung: `(${a}/${b})^${m + 1}`,
            toleranz: 0.0005,
          },
        ],
        hinweis: "Normieren: Die Gesamtfläche unter der Dichte ist 1.",
        loesung: `**Ansatz:** Erst normieren, dann die Wahrscheinlichkeit als Fläche berechnen.\n---\n$\\int_0^{${b}} c\\,x^{${m}}\\,\\dd x = c \\cdot \\tfrac{${b}^{${m + 1}}}{${m + 1}} = 1$, also $c = \\tfrac{${m + 1}}{${w(`${b}^${m + 1}`)}} \\approx ${p4(c)}$.\n---\n$P(X \\le ${tz(a)}) = c \\cdot \\tfrac{${tz(a)}^{${m + 1}}}{${m + 1}} = \\left(\\tfrac{${tz(a)}}{${b}}\\right)^{${m + 1}} \\approx ${p4(`(${a}/${b})^${m + 1}`)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-normal-intervall",
    kapitel: K,
    titel: "Normalverteilung: Intervallwahrscheinlichkeit",
    niveau: 2,
    erzeuge: (r) => {
      const mu = r.wahl([50, 100, 170, 250, 500, 1000]);
      const sigma = r.wahl([2, 4, 5, 8, 10, 20]);
      const za = r.wahl([-2.5, -2, -1.5, -1.25, -1, -0.5]);
      const zb = r.wahl([0.5, 0.75, 1, 1.5, 2, 2.5]);
      const a = mu + za * sigma;
      const b = mu + zb * sigma;
      const ausdruck = `normcdf(${b}, ${mu}, ${sigma}) - normcdf(${a}, ${mu}, ${sigma})`;
      return {
        angabe: `$X$ ist normalverteilt mit $\\mu = ${mu}$ und $\\sigma = ${sigma}$. Berechne $P(${tz(a)} \\le X \\le ${tz(b)})$ auf 4 Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.001,
            fehler: [{ wert: `normcdf(${zb}) - normcdf(${-za})`, meldung: `Bei der unteren Grenze ist $z$ negativ. Es gilt $\\Phi(${tz(za)}) = 1 - \\Phi(${tz(-za)})$, nicht $\\Phi(${tz(-za)})$.` }],
          },
        ],
        hinweis: "Beide Grenzen standardisieren, dann die Flächen links voneinander abziehen.",
        loesung: `**Ansatz:** Standardisieren mit $z = \\frac{x - \\mu}{\\sigma}$.\n---\n$z_1 = \\frac{${tz(a)} - ${mu}}{${sigma}} = ${tz(za)}$ und $z_2 = \\frac{${tz(b)} - ${mu}}{${sigma}} = ${tz(zb)}$.\n---\n$P = \\Phi(${tz(zb)}) - \\Phi(${tz(za)}) \\approx ${p4(`normcdf(${zb})`)} - ${p4(`normcdf(${za})`)} = ${p4(ausdruck)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-normal-quantil",
    kapitel: K,
    titel: "Normalverteilung: Grenze bestimmen",
    niveau: 2,
    erzeuge: (r) => {
      const mu = r.wahl([60, 100, 250, 500, 750]);
      const sigma = r.wahl([3, 4, 5, 10, 12]);
      const fall = r.wahl([
        { p: 0.05, z: "-1{,}645", text: "nur von $5\\,\\%$ der Werte unterschritten" },
        { p: 0.1, z: "-1{,}282", text: "nur von $10\\,\\%$ der Werte unterschritten" },
        { p: 0.9, z: "1{,}282", text: "von $90\\,\\%$ der Werte nicht überschritten" },
        { p: 0.95, z: "1{,}645", text: "von $95\\,\\%$ der Werte nicht überschritten" },
        { p: 0.99, z: "2{,}326", text: "von $99\\,\\%$ der Werte nicht überschritten" },
      ]);
      const ausdruck = `invnorm(${fall.p}, ${mu}, ${sigma})`;
      return {
        angabe: `$X$ ist normalverteilt mit $\\mu = ${mu}$ und $\\sigma = ${sigma}$. Welcher Wert $x$ wird ${fall.text}? (2 Nachkommastellen)`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.05,
            fehler: [{ wert: `invnorm(${1 - fall.p}, ${mu}, ${sigma})`, meldung: "Du hast die falsche Seite der Verteilung erwischt. Prüfe das Vorzeichen von $z$ mit einer Skizze." }],
          },
        ],
        hinweis: `Gesucht ist $z$ mit $\\Phi(z) = ${tz(fall.p)}$.`,
        loesung: `**Ansatz:** Quantil. $P(X \\le x) = ${tz(fall.p)}$, also $\\Phi\\big(\\frac{x - ${mu}}{${sigma}}\\big) = ${tz(fall.p)}$.\n---\nAus der Tabelle: $z \\approx ${fall.z}$.\n---\nZurückrechnen: $x = ${mu} + (${fall.z}) \\cdot ${sigma} \\approx ${tz(w(ausdruck), 2)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-normal-approx",
    kapitel: K,
    titel: "Normalapproximation mit Stetigkeitskorrektur",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.wahl([100, 200, 300, 400, 500, 600, 800]);
      const p = r.wahl([0.2, 0.3, 0.4, 0.5]);
      const mu = Math.round(n * p);
      const sigma = Math.sqrt(n * p * (1 - p));
      const d = r.int(1, 2) * Math.round(sigma);
      const a = mu - d;
      const b = mu + d;
      const ausdruck = `normcdf(${b} + 0.5, ${mu}, sqrt(${n}*${p}*${1 - p})) - normcdf(${a} - 0.5, ${mu}, sqrt(${n}*${p}*${1 - p}))`;
      const z = (d + 0.5) / sigma;
      return {
        angabe: `$X \\sim B(${n};\\ ${tz(p)})$. Berechne $P(${a} \\le X \\le ${b})$ näherungsweise mit der Normalverteilung, mit Stetigkeitskorrektur (3 Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            loesung: ausdruck,
            toleranz: 0.003,
            fehler: [{ wert: `normcdf(${b}, ${mu}, sqrt(${n}*${p}*${1 - p})) - normcdf(${a}, ${mu}, sqrt(${n}*${p}*${1 - p}))`, meldung: "Die Stetigkeitskorrektur fehlt. Die Randbalken gehören ganz dazu, also Grenzen um $0{,}5$ nach außen schieben." }],
          },
        ],
        hinweis: "$\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$, Grenzen um $0{,}5$ nach außen schieben.",
        loesung: `**Ansatz:** Faustregel prüfen: $\\sigma^2 = ${tz(n * p * (1 - p))} > 9$. Also Normalapproximation mit $\\mu = ${tz(mu)}$ und $\\sigma \\approx ${tz(sigma, 3)}$.\n---\nMit Stetigkeitskorrektur: $P \\approx \\Phi\\!\\left(\\frac{${b}{,}5 - ${tz(mu)}}{${tz(sigma, 3)}}\\right) - \\Phi\\!\\left(\\frac{${a - 1}{,}5 - ${tz(mu)}}{${tz(sigma, 3)}}\\right) = 2\\Phi(${tz(z, 3)}) - 1$.\n---\nErgebnis: $P \\approx ${tz(w(ausdruck), 3)}$.`,
      };
    },
  }),
  drill({
    id: "wk-d-streubereich",
    kapitel: K,
    titel: "95-%-Streubereich einer Binomialverteilung",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.wahl([100, 200, 400, 500, 600, 900, 1000]);
      const p = r.wahl([0.2, 0.25, 0.3, 0.4, 0.5]);
      const mu = n * p;
      const sigma = Math.sqrt(n * p * (1 - p));
      return {
        angabe: `$X \\sim B(${n};\\ ${tz(p)})$. Gib den $95\\,\\%$-Streubereich $[\\mu - 1{,}96\\sigma;\\ \\mu + 1{,}96\\sigma]$ an (Grenzen auf 1 Nachkommastelle).`,
        teile: [
          {
            typ: "zahl",
            label: "untere Grenze",
            loesung: `${n}*${p} - 1.96*sqrt(${n}*${p}*(1-${p}))`,
            toleranz: 0.1,
            fehler: [{ wert: `${n}*${p} - sqrt(${n}*${p}*(1-${p}))`, meldung: "Das ist nur $\\mu - \\sigma$, also etwa $68\\,\\%$. Für $95\\,\\%$ brauchst du $1{,}96\\,\\sigma$." }],
          },
          { typ: "zahl", label: "obere Grenze", loesung: `${n}*${p} + 1.96*sqrt(${n}*${p}*(1-${p}))`, toleranz: 0.1 },
        ],
        hinweis: "$\\mu = np$ und $\\sigma = \\sqrt{np(1-p)}$.",
        loesung: `**Ansatz:** Streubereich mit den σ-Regeln der Normalverteilung. Faustregel: $np(1-p) = ${tz(n * p * (1 - p))} > 9$.\n---\n$\\mu = ${tz(mu)}$ und $\\sigma \\approx ${tz(sigma, 3)}$.\n---\n$${tz(mu)} \\pm 1{,}96 \\cdot ${tz(sigma, 3)}$ ergibt $[${tz(mu - 1.96 * sigma, 1)};\\ ${tz(mu + 1.96 * sigma, 1)}]$.`,
      };
    },
  }),
];
