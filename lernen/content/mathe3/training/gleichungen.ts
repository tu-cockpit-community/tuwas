import { drill, tz, ggt, koef, bruchTex, polyTex, type Drill } from "@/lib/lernen/training";

const K = "gleichungen";

/** "+ 3" / "- 3" fuer Summanden nach dem ersten Glied */
function vz(k: number): string {
  return k < 0 ? `- ${Math.abs(k)}` : `+ ${k}`;
}

/** Linearer Term a*x + b als LaTeX (a != 0) */
function lin(a: number, b: number, v = "x"): string {
  return polyTex([a, b], v);
}

/** Zahl in Klammern, wenn negativ: -3 -> "(-3)" */
function kl(k: number): string {
  return k < 0 ? `(${k})` : String(k);
}

/** Linearfaktor (x - r) als LaTeX: r = 0 -> "x", r = -2 -> "(x + 2)" */
function faktor(r: number): string {
  return r === 0 ? "x" : `(x ${vz(-r)})`;
}

/** Menge als LaTeX, Zahlen aufsteigend */
function mengeTex(werte: number[]): string {
  if (werte.length === 0) return "\\emptyset";
  return `\\{${[...werte].sort((p, q) => p - q).join(";\\ ")}\\}`;
}

export const DRILLS: Drill[] = [
  drill({
    id: "gl-d-linear",
    kapitel: K,
    titel: "Lineare Gleichung",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-9, 9);
      let c = r.intOhne0(-9, 9);
      while (c === a) c = r.intOhne0(-9, 9);
      const s = r.int(-8, 8);
      const b = r.int(-15, 15);
      const d = (a - c) * s + b;
      return {
        angabe: `Löse $${lin(a, b)} = ${lin(c, d)}$.`,
        teile: [{ typ: "zahl", label: "$x$", loesung: `(${d} - (${b}))/(${a} - (${c}))` }],
        hinweis: "Bring alle Terme mit $x$ auf die linke Seite und alle Zahlen auf die rechte.",
        loesung: `**Ansatz:** Wir sortieren mit Äquivalenzumformungen, damit $x$ nur noch links steht. Dazu subtrahieren wir $${koef(c)}x$ und $${b}$ auf beiden Seiten: $${koef(a - c)}x = ${d - b}$.\n---\nDer Koeffizient $${a - c}$ ist nicht null, also dürfen wir durch ihn dividieren: $x = \\dfrac{${d - b}}{${a - c}} = ${s}$.\n---\n**Probe:** links $${a}\\cdot ${kl(s)} ${vz(b)} = ${a * s + b}$, rechts $${c}\\cdot ${kl(s)} ${vz(d)} = ${c * s + d}$. Beide Seiten stimmen überein.`,
      };
    },
  }),
  drill({
    id: "gl-d-parameter-linear",
    kapitel: K,
    titel: "Lineare Gleichung mit Parameter",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.intOhne0(-6, 6);
      let k = r.int(-6, 6);
      while (k === m || k === -m) k = r.int(-6, 6);
      const koeffTex = `a ${vz(-m)}`;
      return {
        angabe: `Gegeben ist $(${koeffTex})\\,x = a^2 - ${m * m}$ mit einem reellen Parameter $a$. a) Löse die Gleichung für $a = ${k}$. b) Welche Lösungsmenge ergibt sich für $a = ${m}$?`,
        teile: [
          {
            typ: "zahl",
            label: `a) $x$ für $a = ${k}$`,
            loesung: `(${k}^2 - ${m * m})/(${k} - (${m}))`,
            fehler: k - m !== 1 ? [{ wert: String(k * k - m * m), meldung: "Du hast die rechte Seite ausgerechnet, aber noch nicht durch den Koeffizienten von $x$ dividiert." }] : undefined,
          },
          {
            typ: "auswahl",
            label: `b) $a = ${m}$`,
            optionen: ["$L = \\emptyset$", "$L = \\R$", `$L = \\{${2 * m}\\}$`],
            richtig: [1],
            fehler: [
              { wert: 0, meldung: `Für $a = ${m}$ ist auch die rechte Seite $${m * m} - ${m * m} = 0$. Die Gleichung $0\\cdot x = 0$ ist immer wahr.` },
              { wert: 2, meldung: `Die Formel $x = a + ${kl(m)}$ gilt nur, wenn man durch $a ${vz(-m)}$ dividieren darf. Für $a = ${m}$ ist das eine Division durch null.` },
            ],
          },
        ],
        hinweis: `Zerlege $a^2 - ${m * m} = (a ${vz(-m)})(a ${vz(m)})$. Für $a = ${m}$ ist der Koeffizient von $x$ null.`,
        loesung: `**Ansatz:** Durch den Koeffizienten $a ${vz(-m)}$ dürfen wir nur dividieren, wenn er nicht null ist. Deshalb unterscheiden wir zwei Fälle.\n---\na) Für $a = ${k}$ ist der Koeffizient $${k - m} \\neq 0$. Also $x = \\dfrac{${k * k - m * m}}{${k - m}} = ${k + m}$. Allgemein gilt für $a \\neq ${m}$: $x = \\dfrac{(a ${vz(-m)})(a ${vz(m)})}{a ${vz(-m)}} = a ${vz(m)}$.\n---\nb) Für $a = ${m}$ steht da $0\\cdot x = 0$. Das ist für jede Zahl wahr, also $L = \\R$.`,
      };
    },
  }),
  drill({
    id: "gl-d-quadr-normal",
    kapitel: K,
    titel: "Quadratische Gleichung in Normalform",
    niveau: 1,
    erzeuge: (r) => {
      const x1 = r.int(-9, 9);
      let x2 = r.int(-9, 9);
      while (x2 === x1) x2 = r.int(-9, 9);
      const p = -(x1 + x2);
      const q = x1 * x2;
      const D = (p * p) / 4 - q;
      return {
        angabe: `Löse $${polyTex([1, p, q])} = 0$. Gib beide Lösungen ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: [String(x1), String(x2)],
            fehler: x1 + x2 === 0 ? undefined : [{ wert: [String(-x1), String(-x2)], meldung: "Prüfe das Vorzeichen: In der Formel steht $-\\tfrac{p}{2}$. Das Vorzeichen von $p$ gehört zur Zahl." }],
          },
        ],
        hinweis: `Kleine Lösungsformel mit $p = ${p}$ und $q = ${q}$.`,
        loesung: `**Ansatz:** Die Gleichung steht in Normalform, also verwenden wir die kleine Lösungsformel mit $p = ${p}$ und $q = ${q}$. Unter der Wurzel steht $D = \\left(\\tfrac{p}{2}\\right)^2 - q = ${tz((p * p) / 4)} ${vz(-q)} = ${tz(D)}$.\n---\n$D$ ist positiv, also gibt es zwei Lösungen. Mit $\\sqrt D = ${tz(Math.sqrt(D))}$ ist $x_{1,2} = ${tz(-p / 2)} \\pm ${tz(Math.sqrt(D))}$, also $L = ${mengeTex([x1, x2])}$.\n---\n**Kontrolle mit Vieta:** Summe $${x1 + x2} = -p$ und Produkt $${q} = q$. Beides stimmt.`,
      };
    },
  }),
  drill({
    id: "gl-d-quadr-allgemein",
    kapitel: K,
    titel: "Quadratische Gleichung mit großer Lösungsformel",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.wahl([2, 3, 4, 5]);
      let n = r.intOhne0(-9, 9);
      while (n % m === 0) n = r.intOhne0(-9, 9);
      const s = r.int(-6, 6);
      // (m x - n)(x - s) = m x^2 - (m s + n) x + n s
      const a = m;
      const b = -(m * s + n);
      const c = n * s;
      const delta = b * b - 4 * a * c;
      const w = Math.sqrt(delta);
      return {
        angabe: `Löse $${polyTex([a, b, c])} = 0$. Gib beide Lösungen ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: [`${n}/${m}`, String(s)],
            fehler: [{ wert: [String(-b + w), String(-b - w)], meldung: `Du hast nur den Zähler $-b \\pm \\sqrt{\\Delta}$ ausgerechnet. Er muss noch durch $2a = ${2 * a}$ geteilt werden.` }],
          },
        ],
        hinweis: "$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        loesung: `**Ansatz:** Vor $x^2$ steht $${a}$, deshalb nehmen wir die große Formel mit $a = ${a}$, $b = ${b}$ und $c = ${c}$.\n---\nDiskriminante: $\\Delta = b^2 - 4ac = ${b * b} ${vz(-4 * a * c)} = ${delta}$. Sie ist ${delta > 0 ? "positiv, also gibt es zwei Lösungen" : "null, also gibt es eine Lösung"}, und $\\sqrt\\Delta = ${w}$.\n---\n$x_{1,2} = \\dfrac{${-b} \\pm ${w}}{${2 * a}}$, also $x_1 = \\dfrac{${-b + w}}{${2 * a}} = ${bruchTex(-b + w, 2 * a)}$ und $x_2 = \\dfrac{${-b - w}}{${2 * a}} = ${bruchTex(-b - w, 2 * a)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-diskriminante",
    kapitel: K,
    titel: "Anzahl der Lösungen über die Diskriminante",
    niveau: 1,
    erzeuge: (r) => {
      const typ = r.wahl([0, 1, 2]);
      const p = 2 * r.intOhne0(-5, 5);
      const h = (p * p) / 4;
      const q = typ === 1 ? h : typ === 2 ? h - r.int(1, 12) : h + r.int(1, 12);
      const D = h - q;
      return {
        angabe: `Wie viele reelle Lösungen hat $${polyTex([1, p, q])} = 0$? Löse die Gleichung nicht.`,
        teile: [{ typ: "zahl", label: "Anzahl", loesung: String(typ) }],
        hinweis: "Nur das Vorzeichen von $D = \\left(\\tfrac{p}{2}\\right)^2 - q$ zählt.",
        loesung: `**Ansatz:** Das Vorzeichen der Diskriminante entscheidet: positiv heißt zwei, null heißt eine, negativ heißt keine Lösung. Mit $p = ${p}$ und $q = ${q}$ ist $D = ${h} ${vz(-q)} = ${D}$.\n---\n${D > 0 ? "$D > 0$: Es gibt zwei verschiedene reelle Lösungen, weil $+\\sqrt D$ und $-\\sqrt D$ verschieden sind." : D === 0 ? `$D = 0$: Es gibt genau eine Lösung $x = -\\tfrac{p}{2} = ${-p / 2}$, weil $\\pm 0$ dasselbe ergibt.` : "$D < 0$: Es gibt keine reelle Lösung, weil man aus einer negativen Zahl keine reelle Wurzel ziehen kann."}`,
      };
    },
  }),
  drill({
    id: "gl-d-vieta",
    kapitel: K,
    titel: "Zweite Lösung mit Vieta",
    niveau: 2,
    erzeuge: (r) => {
      const x1 = r.intOhne0(-8, 8);
      let x2 = r.int(-8, 8);
      while (x2 === x1) x2 = r.int(-8, 8);
      const p = -(x1 + x2);
      return {
        angabe: `Die Gleichung $x^2${p === 0 ? "" : ` ${p < 0 ? "-" : "+"} ${Math.abs(p) === 1 ? "" : Math.abs(p)}x`} + q = 0$ hat die Lösung $x_1 = ${x1}$. Bestimme die zweite Lösung $x_2$ und die Zahl $q$.`,
        teile: [
          {
            typ: "zahl",
            label: "$x_2$",
            loesung: `${-p} - (${x1})`,
            fehler: x2 === -x1 ? undefined : [{ wert: String(p - x1), meldung: "Die Summe der Lösungen ist $-p$, nicht $p$. Prüfe das Vorzeichen." }],
          },
          { typ: "zahl", label: "$q$", loesung: `(${x1})*(${x2})` },
        ],
        hinweis: "Nach Vieta ist $x_1 + x_2 = -p$ und $x_1 x_2 = q$.",
        loesung: `**Ansatz:** Satz von Vieta für die Normalform. Die Summe der Lösungen ist $-p = ${-p}$. Also $x_2 = ${-p} ${vz(-x1)} = ${x2}$.\n---\nDas Produkt der Lösungen ist $q$: $q = ${x1}\\cdot ${kl(x2)} = ${x1 * x2}$. **Kontrolle:** $${polyTex([1, p, x1 * x2])} = ${faktor(x1)}${faktor(x2)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-biquadratisch",
    kapitel: K,
    titel: "Biquadratische Gleichung",
    niveau: 2,
    erzeuge: (r) => {
      const w1 = r.int(1, 5);
      const u1 = w1 * w1;
      const negativ = r.zufall() < 0.4;
      let u2 = negativ ? -r.int(1, 9) : r.int(1, 6) ** 2;
      while (u2 === u1) u2 = r.int(1, 6) ** 2;
      const loes = [w1, -w1];
      if (u2 > 0) loes.push(Math.sqrt(u2), -Math.sqrt(u2));
      return {
        angabe: `Bestimme alle reellen Lösungen von $${polyTex([1, 0, -(u1 + u2), 0, u1 * u2])} = 0$. Gib sie ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: loes.map(String),
            fehler: [{ wert: (u2 > 0 ? [u1, u2] : [u1]).map(String), meldung: "Das sind Lösungen für $u = x^2$. Die Rücksubstitution fehlt: Gesucht ist $x$." }],
          },
        ],
        hinweis: "Substitution $u = x^2$.",
        loesung: `**Ansatz:** Es kommen nur $x^4$ und $x^2$ vor. Mit $u = x^2$ wird daraus die quadratische Gleichung $${polyTex([1, -(u1 + u2), u1 * u2], "u")} = 0$. Nach Vieta ist sie $(u ${vz(-u1)})(u ${vz(-u2)}) = 0$, also $u_1 = ${u1}$ und $u_2 = ${u2}$.\n---\nRücksubstitution: $x^2 = ${u1}$ ergibt $x = \\pm ${w1}$, weil beide Zahlen das Quadrat $${u1}$ haben. ${u2 > 0 ? `Ebenso ergibt $x^2 = ${u2}$ die Lösungen $x = \\pm ${Math.sqrt(u2)}$.` : `Die Gleichung $x^2 = ${u2}$ hat keine reelle Lösung, weil ein Quadrat nie negativ ist.`}\n---\nAlso $L = ${mengeTex(loes)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-polynom-raten",
    kapitel: K,
    titel: "Gleichung dritten Grades: raten und abspalten",
    niveau: 3,
    erzeuge: (r) => {
      const r1 = r.wahl([1, -1, 2, -2]);
      let r2 = r.int(-5, 5);
      while (r2 === r1 || r2 === 0) r2 = r.int(-5, 5);
      let r3 = r.int(-5, 5);
      while (r3 === r1 || r3 === r2 || r3 === 0) r3 = r.int(-5, 5);
      // (x - r1)(x - r2)(x - r3)
      const a2 = -(r1 + r2 + r3);
      const a1 = r1 * r2 + r1 * r3 + r2 * r3;
      const a0 = -r1 * r2 * r3;
      // Horner mit r1: Koeffizienten 1, h1, h0 der quadratischen Restgleichung
      const h1 = a2 + r1;
      const h0 = a1 + r1 * h1;
      return {
        angabe: `Löse $${polyTex([1, a2, a1, a0])} = 0$. Finde zuerst eine ganzzahlige Lösung durch Probieren und spalte dann den Linearfaktor ab. Gib alle Lösungen ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: [String(r1), String(r2), String(r3)],
            fehler: [{ wert: [String(r2), String(r3)], meldung: "Das sind die Lösungen der quadratischen Restgleichung. Die erratene Lösung gehört auch dazu." }],
          },
        ],
        hinweis: `Ganzzahlige Lösungen sind Teiler von $${a0}$. Probiere $\\pm 1$ und $\\pm 2$.`,
        loesung: `**Ansatz:** Für eine Gleichung dritten Grades gibt es keine einfache Formel. Ist eine ganzzahlige Lösung vorhanden, teilt sie das konstante Glied $${a0}$. Probieren: $x = ${r1}$ ergibt $${r1 ** 3} ${vz(a2 * r1 * r1)} ${vz(a1 * r1)} ${vz(a0)} = 0$. Also ist $${r1}$ eine Lösung.\n---\nWir spalten den Linearfaktor $(x ${vz(-r1)})$ ab, mit Polynomdivision oder Horner-Schema. Horner mit $${r1}$: Koeffizienten $1$, $${a2}$, $${a1}$, $${a0}$ ergeben $1$, $${h1}$, $${h0}$ und den Rest $0$. Also $${polyTex([1, a2, a1, a0])} = (x ${vz(-r1)})(${polyTex([1, h1, h0])})$.\n---\nDie Restgleichung $${polyTex([1, h1, h0])} = 0$ lösen wir mit Vieta: Summe $${r2 + r3}$, Produkt $${r2 * r3}$. Das ergibt $${r2}$ und $${r3}$.\n---\nAlso $L = ${mengeTex([r1, r2, r3])}$. **Kontrolle:** Das Produkt aller Lösungen ist $${r1 * r2 * r3}$. Das ist das konstante Glied mit umgekehrtem Vorzeichen, wie es sein muss.`,
      };
    },
  }),
  drill({
    id: "gl-d-bruch",
    kapitel: K,
    titel: "Bruchgleichung",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(-6, 6);
      let n = r.int(-6, 6);
      while (n === m) n = r.int(-6, 6);
      let s = r.int(-8, 8);
      while (s === m || s === n) s = r.int(-8, 8);
      let a = s - m;
      let b = s - n;
      const g = ggt(a, b);
      a /= g;
      b /= g;
      if (a < 0) {
        a = -a;
        b = -b;
      }
      const nenner = (k: number) => (k === 0 ? "x" : `x ${vz(-k)}`);
      return {
        angabe: `Löse $\\dfrac{${a}}{${nenner(m)}} = \\dfrac{${b}}{${nenner(n)}}$. Bestimme zuerst die Definitionsmenge.`,
        teile: [{ typ: "zahl", label: "$x$", loesung: `(${a}*(${n}) - (${b})*(${m}))/(${a} - (${b}))` }],
        hinweis: `$D = \\R\\setminus\\{${Math.min(m, n)}; ${Math.max(m, n)}\\}$. Multipliziere beide Seiten mit beiden Nennern.`,
        loesung: `**Ansatz:** Die Unbekannte steht im Nenner. Durch null darf man nicht dividieren, also ist $D = \\R\\setminus\\{${Math.min(m, n)};\\ ${Math.max(m, n)}\\}$.\n---\nWir multiplizieren mit $(${nenner(m)})(${nenner(n)})$, damit die Brüche verschwinden: $${a}(${nenner(n)}) = ${kl(b)}(${nenner(m)})$. Ausmultiplizieren und sortieren ergibt $${a - b}x = ${a * n - b * m}$, also $x = ${s}$.\n---\n**Abgleich mit $D$:** $${s}$ ist keine Nullstelle eines Nenners, also liegt es in $D$. Deshalb ist $L = \\{${s}\\}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-wurzel",
    kapitel: K,
    titel: "Wurzelgleichung mit Probe",
    niveau: 2,
    erzeuge: (r) => {
      // sqrt(a x + b) = x + c mit (x + c)^2 - (a x + b) = (x - r1)(x - r2)
      let c = 0;
      let r1 = 0;
      let r2 = 0;
      let a = 0;
      do {
        c = r.int(-4, 4);
        r1 = r.int(-6, 6);
        r2 = r.int(-6, 6);
        a = 2 * c + r1 + r2;
      } while (r1 === r2 || a === 0 || (r1 + c < 0 && r2 + c < 0));
      const b = c * c - r1 * r2;
      const gueltig = [r1, r2].filter((x) => x + c >= 0);
      const ungueltig = [r1, r2].filter((x) => x + c < 0);
      const rechts = c === 0 ? "x" : `x ${vz(c)}`;
      return {
        angabe: `Löse $\\sqrt{${lin(a, b)}} = ${rechts}$. Gib alle Lösungen ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: gueltig.map(String),
            // Scheinlösung zuerst: [gültig, 0] würde als Text „g,0“ zur Dezimalzahl g,0 = g.
            fehler: ungueltig.length ? [{ wert: [...ungueltig, ...gueltig].map(String), meldung: "Nach dem Quadrieren ist die Probe Pflicht. Setze beide Kandidaten in die **Ausgangsgleichung** ein. Eine Wurzel ist nie negativ." }] : undefined,
          },
        ],
        hinweis: "Quadrieren, die quadratische Gleichung lösen, dann jede Lösung in der Ausgangsgleichung prüfen.",
        loesung: `**Ansatz:** Die Wurzel steht schon allein. Wir quadrieren beide Seiten: $${lin(a, b)} = ${polyTex([1, 2 * c, c * c])}$. Quadrieren ist nicht umkehrbar, deshalb kommt am Ende die Probe.\n---\nAlles auf eine Seite: $${polyTex([1, 2 * c - a, c * c - b])} = 0$. Die Kandidaten sind $${r1}$ und $${r2}$.\n---\n**Probe:** ${[r1, r2].map((x) => `$x = ${x}$: links $\\sqrt{${a * x + b}} = ${Math.sqrt(a * x + b)}$, rechts $${x + c}$ ${x + c >= 0 ? "✓" : "✗"}`).join("; ")}.\n---\n${ungueltig.length ? `$${ungueltig.join(", ")}$ ist eine Scheinlösung, weil die rechte Seite dort negativ ist. ` : "Beide Kandidaten bestehen die Probe. "}Also $L = ${mengeTex(gueltig)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-betrag",
    kapitel: K,
    titel: "Betragsgleichung |ax + b| = c",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([1, 2, 3, -2]);
      const s1 = r.int(-6, 6);
      const c = r.int(1, 8);
      const b = c - a * s1;
      return {
        angabe: `Löse $|${lin(a, b)}| = ${c}$. Gib beide Lösungen ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$L$",
            loesung: [String(s1), `(${-c} - (${b}))/(${a})`],
            fehler: [{ wert: [String(s1)], meldung: `Ein Betrag ist auch dann ${c}, wenn der Inhalt $-${c}$ ist. Es fehlt der zweite Fall.` }],
          },
        ],
        hinweis: "$|T| = c$ mit $c > 0$ heißt $T = c$ oder $T = -c$.",
        loesung: `**Ansatz:** Der Betrag ist der Abstand zur Null. Abstand $${c}$ haben genau die Zahlen $${c}$ und $-${c}$. Also ist der Inhalt $${c}$ oder $-${c}$.\n---\nFall 1: $${lin(a, b)} = ${c}$ ergibt $x = ${s1}$. Fall 2: $${lin(a, b)} = ${-c}$ ergibt $x = ${bruchTex(-c - b, a)}$.\n---\nAlso $L = \\left\\{${s1};\\ ${bruchTex(-c - b, a)}\\right\\}$. **Probe** für $x = ${s1}$: $|${a * s1 + b}| = ${c}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-exp-basis",
    kapitel: K,
    titel: "Exponentialgleichung: gleiche Basis",
    niveau: 1,
    erzeuge: (r) => {
      const [g, e] = r.wahl([[2, 2], [2, 3], [3, 2], [3, 3], [2, 4], [5, 2]] as const);
      const s = r.int(-4, 5);
      let u = r.intOhne0(-3, 4);
      while (u === e) u = r.intOhne0(-3, 4);
      const w = r.int(-3, 3);
      const v = e * (s + w) - u * s;
      const basis = g ** e;
      return {
        angabe: `Löse ohne Taschenrechner: $${g}^{${lin(u, v)}} = ${basis}^{${lin(1, w)}}$`,
        teile: [{ typ: "zahl", label: "$x$", loesung: `(${e * w} - (${v}))/(${u} - ${e})` }],
        hinweis: `$${basis} = ${g}^{${e}}$.`,
        loesung: `**Ansatz:** Beide Seiten lassen sich als Potenz von $${g}$ schreiben, weil $${basis} = ${g}^{${e}}$ ist. Mit der Regel $(a^m)^n = a^{m\\cdot n}$ wird $${basis}^{${lin(1, w)}} = ${g}^{${lin(e, e * w)}}$.\n---\nGleiche Basis, also müssen die Exponenten gleich sein, denn $a^u = a^v$ gilt nur für $u = v$: $${lin(u, v)} = ${lin(e, e * w)}$. Das ergibt $${koef(u - e)}x = ${e * w - v}$, also $x = ${s}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-exp-log",
    kapitel: K,
    titel: "Exponentialgleichung durch Logarithmieren",
    niveau: 1,
    erzeuge: (r) => {
      const q = r.wahl([1.03, 1.05, 1.08, 1.12, 1.2, 0.9, 0.85, 0.7]);
      const c = r.int(2, 9);
      const faktor = q > 1 ? r.wahl([1.5, 2, 3, 4, 5, 10]) : r.wahl([0.5, 0.25, 0.1, 0.4]);
      const d = Number((c * faktor).toFixed(2));
      const x = Math.log(d / c) / Math.log(q);
      return {
        angabe: `Löse $${c}\\cdot ${tz(q)}^x = ${tz(d)}$ auf drei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            label: "$x$",
            loesung: `ln(${d}/${c})/ln(${q})`,
            toleranz: 0.001,
            fehler: [{ wert: `ln(${d})/ln(${q})`, meldung: `Zuerst muss die Potenz allein stehen. Dividiere durch $${c}$, bevor du logarithmierst.` }],
          },
        ],
        hinweis: "Zuerst die Potenz isolieren, dann logarithmieren.",
        loesung: `**Ansatz:** Die Unbekannte steht im Exponenten. Wir isolieren zuerst die Potenz, indem wir durch $${c}$ dividieren: $${tz(q)}^x = \\dfrac{${tz(d)}}{${c}} = ${tz(d / c)}$.\n---\nJetzt logarithmieren wir beide Seiten. Nach der Regel $\\ln(a^x) = x\\ln a$ kommt $x$ herunter: $x\\ln ${tz(q)} = \\ln ${tz(d / c)}$, also $x = \\dfrac{\\ln ${tz(d / c)}}{\\ln ${tz(q)}} \\approx ${tz(x, 3)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-verdopplung",
    kapitel: K,
    titel: "Verdopplungs- und Halbwertszeit",
    niveau: 2,
    erzeuge: (r) => {
      const art = r.wahl(["prozent", "lambda"] as const);
      if (art === "prozent") {
        const p = r.wahl([2, 3, 4, 5, 6, 8, 10, 12]);
        const t = Math.log(2) / Math.log(1 + p / 100);
        return {
          angabe: `Ein Bestand wächst um $${tz(p)}\\,\\%$ pro Jahr. Nach wie vielen Jahren hat er sich verdoppelt? Runde auf zwei Nachkommastellen.`,
          teile: [
            {
              typ: "zahl",
              einheit: "Jahre",
              loesung: `ln(2)/ln(${1 + p / 100})`,
              toleranz: 0.01,
              fehler: [{ wert: String(100 / p), meldung: "Du hast linear gerechnet, als käme jedes Jahr derselbe Betrag dazu. Beim prozentuellen Wachstum wächst auch der Zuwachs." }],
            },
          ],
          hinweis: `Setze $N_0\\cdot ${tz(1 + p / 100)}^t = 2N_0$ und kürze $N_0$.`,
          loesung: `**Ansatz:** Wachstum um $${tz(p)}\\,\\%$ heißt Multiplikation mit $${tz(1 + p / 100)}$ pro Jahr. Verdoppelt ist der Bestand bei $N_0\\cdot ${tz(1 + p / 100)}^t = 2N_0$. Wir kürzen $N_0$: $${tz(1 + p / 100)}^t = 2$.\n---\nLogarithmieren: $t = \\dfrac{\\ln 2}{\\ln ${tz(1 + p / 100)}} \\approx ${tz(t, 2)}$ Jahre. Der Anfangsbestand spielt keine Rolle.`,
        };
      }
      const lam = r.wahl([0.02, 0.035, 0.05, 0.08, 0.1, 0.15]);
      const zerfall = r.zufall() < 0.5;
      const t = Math.log(2) / lam;
      return {
        angabe: `Für einen Bestand gilt $N(t) = N_0\\, e^{${zerfall ? "-" : ""}${tz(lam)}\\,t}$ ($t$ in Stunden). Berechne die ${zerfall ? "Halbwertszeit" : "Verdopplungszeit"}. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "h", loesung: `ln(2)/${lam}`, toleranz: 0.01 }],
        hinweis: zerfall ? "Setze $e^{-\\lambda t} = \\tfrac12$ und logarithmiere." : "Setze $e^{\\lambda t} = 2$ und logarithmiere.",
        loesung: `**Ansatz:** ${zerfall ? "Halbiert" : "Verdoppelt"} heißt $N(t) = ${zerfall ? "\\tfrac12" : "2"}N_0$. Wir kürzen $N_0$: $e^{${zerfall ? "-" : ""}${tz(lam)}t} = ${zerfall ? "\\tfrac12" : "2"}$.\n---\nDer natürliche Logarithmus macht $e^{(\\cdot)}$ rückgängig: $${zerfall ? "-" : ""}${tz(lam)}\\,t = ${zerfall ? "-\\ln 2" : "\\ln 2"}$, also $t = \\dfrac{\\ln 2}{${tz(lam)}} \\approx ${tz(t, 2)}$ h. $N_0$ spielt keine Rolle.`,
      };
    },
  }),
  drill({
    id: "gl-d-log",
    kapitel: K,
    titel: "Logarithmusgleichung",
    niveau: 2,
    erzeuge: (r) => {
      const [bas, k] = r.wahl([[2, 3], [2, 4], [2, 5], [3, 2], [3, 3], [5, 2], [10, 2], [10, 1]] as const);
      const a = r.int(1, 5);
      const s = r.int(-5, 12);
      const c = bas ** k - a * s;
      const log = bas === 10 ? "\\lg" : `\\log_{${bas}}`;
      return {
        angabe: `Löse $${log}(${lin(a, c)}) = ${k}$.`,
        teile: [
          {
            typ: "zahl",
            label: "$x$",
            loesung: `(${bas}^${k} - (${c}))/${a}`,
            fehler: bas * k !== bas ** k ? [{ wert: `(${bas * k} - (${c}))/${a}`, meldung: `$${log}$ und Potenz heben sich auf: Das Argument ist $${bas}^{${k}}$, nicht $${bas}\\cdot ${k}$.` }] : undefined,
          },
        ],
        hinweis: "$\\log_b T = k$ bedeutet $T = b^k$.",
        loesung: `**Ansatz:** Nach der Definition des Logarithmus heißt $\\log_b T = k$ dasselbe wie $T = b^k$. Also $${lin(a, c)} = ${bas}^{${k}} = ${bas ** k}$.\n---\nDiese lineare Gleichung lösen wir: $${koef(a)}x = ${bas ** k - c}$, also $x = ${s}$.\n---\n**Kontrolle:** Das Argument ist $${bas ** k}$, also positiv. Der Logarithmus ist dort definiert.`,
      };
    },
  }),
  drill({
    id: "gl-d-ungl-quadratisch",
    kapitel: K,
    titel: "Quadratische Ungleichung",
    niveau: 2,
    erzeuge: (r) => {
      const x1 = r.int(-7, 5);
      const x2 = x1 + r.int(1, 7);
      const zeichen = r.wahl(["<", "\\leq", ">", "\\geq"] as const);
      const optionen = [
        `$]${x1};\\ ${x2}[$`,
        `$[${x1};\\ ${x2}]$`,
        `$]-\\infty;\\ ${x1}[\\ \\cup\\ ]${x2};\\ \\infty[$`,
        `$]-\\infty;\\ ${x1}]\\ \\cup\\ [${x2};\\ \\infty[$`,
      ];
      const richtig = { "<": 0, "\\leq": 1, ">": 2, "\\geq": 3 }[zeichen];
      const gespiegelt = { 0: 2, 1: 3, 2: 0, 3: 1 }[richtig] as number;
      return {
        angabe: `Löse $${polyTex([1, -(x1 + x2), x1 * x2])} ${zeichen} 0$.`,
        teile: [
          { typ: "vektor", label: "Nullstellen (aufsteigend)", namen: ["x₁", "x₂"], loesung: [String(x1), String(x2)] },
          {
            typ: "auswahl",
            label: "Lösungsmenge",
            optionen,
            richtig: [richtig],
            fehler: [{ wert: gespiegelt, meldung: "Eine nach oben offene Parabel ist **zwischen** den Nullstellen negativ und **außerhalb** positiv. Du hast die Bereiche vertauscht." }],
          },
        ],
        hinweis: "Nullstellen bestimmen, Parabel skizzieren (nach oben offen).",
        loesung: `**Ansatz:** Wir lösen zuerst die zugehörige Gleichung und lesen das Vorzeichen an der Parabel ab. Nullstellen: $${polyTex([1, -(x1 + x2), x1 * x2])} = ${faktor(x1)}${faktor(x2)}$, also $${x1}$ und $${x2}$.\n---\nDie Zahl vor $x^2$ ist positiv, also ist die Parabel nach oben offen. Sie liegt zwischen den Nullstellen unter der Achse und außerhalb darüber. ${richtig % 2 === 1 ? "Wegen des Gleichheitszeichens gehören die Nullstellen dazu." : "Die Nullstellen selbst gehören nicht dazu, weil dort der Term null ist."}\n---\n$L = ${optionen[richtig].slice(1, -1)}$`,
      };
    },
  }),
  drill({
    id: "gl-d-bruch-ungl",
    kapitel: K,
    titel: "Bruchungleichung mit Vorzeichentabelle",
    niveau: 3,
    erzeuge: (r) => {
      const a = r.int(-6, 6);
      let b = r.int(-6, 6);
      while (b === a) b = r.int(-6, 6);
      const lo = Math.min(a, b);
      const hi = Math.max(a, b);
      const kl1 = lo === a ? "[" : "]";
      const kl2 = hi === a ? "]" : "[";
      const optionen = [
        `$${kl1}${lo};\\ ${hi}${kl2}$`,
        `$[${lo};\\ ${hi}]$`,
        `$]${lo};\\ ${hi}[$`,
        `$]-\\infty;\\ ${lo}]\\ \\cup\\ [${hi};\\ \\infty[$`,
      ];
      const nennerTex = b === 0 ? "x" : `x ${vz(-b)}`;
      const zaehlerTex = a === 0 ? "x" : `x ${vz(-a)}`;
      return {
        angabe: `Löse $\\dfrac{${zaehlerTex}}{${nennerTex}} \\leq 0$.`,
        teile: [
          {
            typ: "auswahl",
            label: "Lösungsmenge",
            optionen,
            richtig: [0],
            fehler: [
              { wert: 1, meldung: `Für $x = ${b}$ ist der Nenner null. Diese Zahl liegt nicht in der Definitionsmenge und gehört nie zur Lösung.` },
              { wert: 2, meldung: `Für $x = ${a}$ ist der Bruch gleich $0$. Wegen „kleiner gleich“ gehört diese Zahl dazu.` },
              { wert: 3, meldung: "Außerhalb haben Zähler und Nenner dasselbe Vorzeichen. Dann ist der Bruch positiv." },
            ],
          },
        ],
        hinweis: "Nicht mit dem Nenner multiplizieren: Sein Vorzeichen ist unbekannt. Untersuche die Vorzeichen von Zähler und Nenner in den drei Bereichen.",
        loesung: `**Ansatz:** Das Vorzeichen des Nenners hängt von $x$ ab. Multiplizieren würde je nach Fall das Zeichen umdrehen. Deshalb untersuchen wir die Vorzeichen direkt. Es ist $D = \\R\\setminus\\{${b}\\}$.\n---\nDer Zähler ist null bei $${a}$, der Nenner bei $${b}$. Diese Stellen teilen die Zahlengerade in drei Bereiche. Links von $${lo}$ sind Zähler und Nenner beide negativ, rechts von $${hi}$ beide positiv. Dort ist der Bruch positiv.\n---\nZwischen $${lo}$ und $${hi}$ haben Zähler und Nenner verschiedene Vorzeichen, der Bruch ist negativ. Bei $${a}$ ist er null und gehört wegen „kleiner gleich“ dazu. Bei $${b}$ ist er nicht definiert.\n---\nAlso $L = ${optionen[0].slice(1, -1)}$.`,
      };
    },
  }),
  drill({
    id: "gl-d-gerade-parabel",
    kapitel: K,
    titel: "Schnittpunkte von Gerade und Parabel",
    niveau: 2,
    erzeuge: (r) => {
      const x1 = r.int(-4, 4);
      let x2 = r.int(-4, 4);
      while (x2 === x1) x2 = r.int(-4, 4);
      const m = r.int(-3, 3);
      const n = r.int(-4, 4);
      const b = m - (x1 + x2);
      const c = n + x1 * x2;
      const g = polyTex([m, n]);
      return {
        angabe: `Bestimme die $x$-Koordinaten der Schnittpunkte der Parabel $y = ${polyTex([1, b, c])}$ mit der Geraden $y = ${g}$. Gib sie ein, getrennt durch einen Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            label: "$x$-Koordinaten",
            loesung: [String(x1), String(x2)],
            fehler: x1 + x2 === 0 ? undefined : [{ wert: [String(-x1), String(-x2)], meldung: "Prüfe die Vorzeichen in der Lösungsformel: Es ist $-\\tfrac{p}{2}$, und das Vorzeichen von $p$ gehört zur Zahl." }],
          },
        ],
        hinweis: "Setze die beiden Terme gleich und bring alles auf eine Seite.",
        loesung: `**Ansatz:** In einem Schnittpunkt haben beide Graphen denselben $y$-Wert. Wir setzen gleich: $${polyTex([1, b, c])} = ${g}$.\n---\nAlles auf die linke Seite: $${polyTex([1, b - m, c - n])} = 0$. Das ist eine quadratische Gleichung mit $p = ${b - m}$ und $q = ${c - n}$.\n---\nNach Vieta brauchen wir zwei Zahlen mit Summe $${x1 + x2}$ und Produkt $${x1 * x2}$: $${x1}$ und $${x2}$. Die Schnittpunkte sind $(${x1} \\mid ${m * x1 + n})$ und $(${x2} \\mid ${m * x2 + n})$, die $y$-Werte kommen aus der Geradengleichung.`,
      };
    },
  }),
];
