import { drill, tz, polyTex, bruchTex, type Drill } from "@/lib/lernen/training";

const K = "funktionen";

/** "+ 3" / "- 3" / "" fuer additive Konstanten in LaTeX */
function plus(v: number): string {
  if (v === 0) return "";
  return v < 0 ? ` - ${tz(-v)}` : ` + ${tz(v)}`;
}
/** (x - b) mit sauberem Vorzeichen; b = 0 -> x */
function xMinus(b: number, v = "x"): string {
  if (b === 0) return v;
  return b > 0 ? `(${v} - ${tz(b)})` : `(${v} + ${tz(-b)})`;
}
/** Faktor vor einer Klammer: 1 -> "", -1 -> "-", sonst Zahl */
function vorfaktor(a: number): string {
  return a === 1 ? "" : a === -1 ? "-" : tz(a);
}

export const DRILLS: Drill[] = [
  drill({
    id: "fu-d-gerade",
    kapitel: K,
    titel: "Gerade durch zwei Punkte",
    niveau: 1,
    erzeuge: (r) => {
      const k = r.intOhne0(-4, 4);
      const d = r.int(-6, 6);
      const x1 = r.int(-4, 2);
      const x2 = x1 + r.int(1, 4);
      const y1 = k * x1 + d;
      const y2 = k * x2 + d;
      return {
        angabe: `Bestimme $k$ und $d$ der linearen Funktion $f(x) = kx + d$, deren Graph durch $A(${x1} \\mid ${y1})$ und $B(${x2} \\mid ${y2})$ geht.`,
        teile: [
          {
            typ: "zahl",
            label: "$k$",
            loesung: `(${y2} - (${y1}))/(${x2} - (${x1}))`,
            fehler: Math.abs(k) !== 1 ? [{ wert: `(${x2} - (${x1}))/(${y2} - (${y1}))`, meldung: "Die Steigung ist Höhenunterschied durch waagrechten Abstand, also $\\tfrac{\\Delta y}{\\Delta x}$." }] : [],
          },
          { typ: "zahl", label: "$d$", loesung: `${y1} - (${k})*(${x1})` },
        ],
        hinweis: "Zuerst die Steigung aus dem Steigungsdreieck, im Zähler und im Nenner in derselben Reihenfolge. Danach d aus einem Punkt.",
        loesung: `**Ansatz:** Die Steigung kommt aus dem Steigungsdreieck zwischen $A$ und $B$: $k = \\dfrac{${y2} - (${y1})}{${x2} - (${x1})} = \\dfrac{${y2 - y1}}{${x2 - x1}} = ${k}$.\n---\nDen Achsenabschnitt bekommen wir, indem wir $A$ in $y = kx + d$ einsetzen: $${y1} = ${k}\\cdot(${x1}) + d$, also $d = ${d}$.\n---\nErgebnis: $f(x) = ${polyTex([k, d])}$. Probe mit $B$: $${k}\\cdot(${x2})${plus(d)} = ${y2}$. Es stimmt.`,
      };
    },
  }),
  drill({
    id: "fu-d-scheitel",
    kapitel: K,
    titel: "Scheitelform durch quadratisches Ergänzen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([1, 1, 2, -1, -2, 3]);
      const xs = r.intOhne0(-5, 5);
      const ys = r.int(-9, 9);
      const b = -2 * a * xs;
      const c = a * xs * xs + ys;
      return {
        angabe: `Bestimme den Scheitel $S$ der Parabel $f(x) = ${polyTex([a, b, c])}$.`,
        teile: [
          {
            typ: "vektor",
            label: "Scheitel $S$",
            namen: ["x_S", "y_S"],
            loesung: [`-(${b})/(2*${a})`, `${c} - (${b})^2/(4*${a})`],
            fehler: [{ wert: [`${-xs}`, `${ys}`], meldung: "Vorzeichen prüfen: Es gilt $x_S = -\\tfrac{b}{2a}$. Das Minus gehört zur Formel." }],
          },
        ],
        hinweis: "Formel x_S = −b/(2a), danach y_S = f(x_S). Oder quadratisch ergänzen.",
        loesung: `**Ansatz:** Der Scheitel liegt bei $x_S = -\\dfrac{b}{2a} = -\\dfrac{${b}}{${2 * a}} = ${xs}$.\n---\nDen $y$-Wert bekommen wir durch Einsetzen: $y_S = f(${xs}) = ${a}\\cdot(${xs})^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}\\cdot(${xs})${plus(c)} = ${ys}$.\n---\nScheitelform: $f(x) = ${vorfaktor(a)}${xMinus(xs)}^2${plus(ys)}$. Der Scheitel ist $S(${xs} \\mid ${ys})$, die Parabel ist nach ${a > 0 ? "oben" : "unten"} offen, also ist $S$ ein ${a > 0 ? "Tiefpunkt" : "Hochpunkt"}.`,
      };
    },
  }),
  drill({
    id: "fu-d-nullstellen-quadratisch",
    kapitel: K,
    titel: "Nullstellen einer quadratischen Funktion",
    niveau: 1,
    erzeuge: (r) => {
      const r1 = r.int(-7, 6);
      let r2 = r.int(-7, 7);
      if (r2 === r1) r2 = r1 + r.int(1, 4);
      const a = r.wahl([1, 1, 2, -1]);
      const koeffs = [a, -a * (r1 + r2), a * r1 * r2];
      const p = -(r1 + r2);
      const q = r1 * r2;
      return {
        angabe: `Bestimme alle Nullstellen von $f(x) = ${polyTex(koeffs)}$. Gib sie getrennt durch einen Strichpunkt an.`,
        teile: [
          {
            typ: "menge",
            label: "Nullstellen",
            loesung: [String(r1), String(r2)],
            fehler: r1 + r2 !== 0 ? [{ wert: [String(-r1), String(-r2)], meldung: "Alle Vorzeichen sind vertauscht. In der Lösungsformel steht $-\\tfrac p2$. Setze zur Probe ein." }] : [],
          },
        ],
        hinweis: a === 1 ? "Kleine Lösungsformel mit p und q, oder Zerlegung mit dem Satz von Vieta." : "Zuerst durch den Leitkoeffizienten dividieren, dann die kleine Lösungsformel.",
        loesung: `${a !== 1 ? `**Ansatz:** Nullstellen sind die Lösungen von $f(x) = 0$. Wir dividieren zuerst durch $${a}$, damit vor $x^2$ eine $1$ steht: $${polyTex([1, p, q])} = 0$.\n---\n` : `**Ansatz:** Nullstellen sind die Lösungen von $f(x) = 0$, hier $${polyTex([1, p, q])} = 0$.\n---\n`}Kleine Lösungsformel mit $p = ${p}$ und $q = ${q}$: $x_{1,2} = ${tz(-p / 2)} \\pm \\sqrt{${tz((p / 2) ** 2)} - (${q})} = ${tz(-p / 2)} \\pm ${tz(Math.abs(r1 - r2) / 2)}$.\n---\nNullstellen: $${Math.min(r1, r2)}$ und $${Math.max(r1, r2)}$. Produktform: $f(x) = ${vorfaktor(a)}${xMinus(r1)}${xMinus(r2)}$.`,
      };
    },
  }),
  drill({
    id: "fu-d-symmetrie",
    kapitel: K,
    titel: "Symmetrie eines Polynoms",
    niveau: 1,
    erzeuge: (r) => {
      const art = r.wahl(["gerade", "ungerade", "keines"] as const);
      const a = r.intOhne0(-4, 4);
      let b = r.intOhne0(-6, 6);
      const c = r.intOhne0(-5, 5);
      // Bei "keines" darf a + b nicht 0 sein, sonst waere f(1) = f(-1) und die Kontrolle unten falsch
      if (art === "keines" && a + b === 0) b *= 2;
      let koeffs: number[];
      if (art === "gerade") koeffs = [a, 0, b, 0, c];
      else if (art === "ungerade") koeffs = [a, 0, b, 0];
      else koeffs = [a, 0, b, c];
      const term = polyTex(koeffs);
      const index = art === "gerade" ? 0 : art === "ungerade" ? 1 : 2;
      const begr =
        art === "gerade"
          ? "Es kommen nur gerade Hochzahlen vor, die Konstante zählt als $x^0$. Beim Einsetzen von $-x$ ändert sich nichts: $f(-x) = f(x)$."
          : art === "ungerade"
            ? "Es kommen nur ungerade Hochzahlen vor. Beim Einsetzen von $-x$ wechselt jedes Glied das Vorzeichen: $f(-x) = -f(x)$."
            : "Es kommen gerade und ungerade Hochzahlen vor: $x^3$ und $x$ sind ungerade, die Konstante zählt als gerade. Also gilt weder $f(-x) = f(x)$ noch $f(-x) = -f(x)$.";
      const f1 = koeffs.reduce((s, k) => s + k, 0);
      const fm1 = koeffs.reduce((s, k, i) => s + k * (-1) ** (koeffs.length - 1 - i), 0);
      return {
        angabe: `Ist $f(x) = ${term}$ gerade, ungerade oder keines von beiden?`,
        teile: [
          {
            typ: "auswahl",
            optionen: ["gerade", "ungerade", "keines von beiden"],
            richtig: [index],
            fehler: art === "keines" ? [{ wert: 1, meldung: "Die Konstante zählt als gerade Hochzahl $x^0$. Prüfe die Stellen $1$ und $-1$." }] : [],
          },
        ],
        hinweis: "Setze −x ein und vergleiche f(−x) mit f(x) und mit −f(x).",
        loesung: `**Ansatz:** Wir bilden $f(-x)$ und vergleichen. ${begr}\n---\nKontrolle an den Stellen $1$ und $-1$: $f(1) = ${f1}$ und $f(-1) = ${fm1}$. ${art === "gerade" ? "Beide Werte sind gleich." : art === "ungerade" ? "Die Werte sind Gegenzahlen." : "Die Werte sind weder gleich noch Gegenzahlen."}`,
      };
    },
  }),
  drill({
    id: "fu-d-umkehr-linear",
    kapitel: K,
    titel: "Umkehrfunktion einer linearen Funktion",
    niveau: 2,
    erzeuge: (r) => {
      const k = r.wahl([2, 3, 4, 5, -2, -3, -4]);
      const d = r.intOhne0(-9, 9);
      return {
        angabe: `Bestimme die Umkehrfunktion von $f(x) = ${polyTex([k, d])}$.`,
        teile: [
          {
            typ: "term",
            label: "$f^{-1}(x)$",
            loesung: `(x - (${d}))/(${k})`,
            fehler: [
              { wert: `1/(${k}*x + (${d}))`, meldung: "Das ist der Kehrwert von $f$. Die Umkehrfunktion bekommst du, indem du $y = f(x)$ nach $x$ auflöst." },
              { wert: `x/(${k}) - (${d})`, meldung: "Zuerst $d$ auf die andere Seite bringen, dann dividieren. Dabei wird auch $d$ durch $k$ geteilt." },
            ],
          },
        ],
        hinweis: "y = f(x) nach x auflösen, dann x und y umbenennen.",
        loesung: `**Ansatz:** Die Umkehrfunktion beantwortet die Frage, welche Eingabe zu einer Ausgabe gehört. Wir lösen $y = ${polyTex([k, d])}$ nach $x$ auf.\n---\nWir bringen $${tz(d)}$ auf die andere Seite: $${k}x = y${plus(-d)}$. Dann dividieren wir durch $${k}$: $x = \\dfrac{y${plus(-d)}}{${k}}$.\n---\nUmbenennen: $f^{-1}(x) = \\dfrac{x${plus(-d)}}{${k}}$. Probe: $f(1) = ${k + d}$ und $f^{-1}(${k + d}) = \\dfrac{${k + d}${plus(-d)}}{${k}} = 1$.`,
      };
    },
  }),
  drill({
    id: "fu-d-verkettung",
    kapitel: K,
    titel: "Verkettung an einer Stelle",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, -1, -2, 4]);
      const b = r.int(-5, 5);
      const c = r.int(-4, 4);
      const x0 = r.int(-3, 3);
      const g0 = x0 * x0 + c;
      const fg = a * g0 + b;
      const f0 = a * x0 + b;
      const gf = f0 * f0 + c;
      return {
        angabe: `Es sei $f(x) = ${polyTex([a, b])}$ und $g(x) = ${polyTex([1, 0, c])}$. Berechne $f(g(${x0}))$ und $g(f(${x0}))$.`,
        teile: [
          {
            typ: "zahl",
            label: `$f(g(${x0}))$`,
            loesung: `${a}*((${x0})^2 + (${c})) + (${b})`,
            fehler: fg !== gf ? [{ wert: String(gf), meldung: "Das ist $g(f(x_0))$. Bei $f(g(x_0))$ ist $g$ die innere Funktion und wird zuerst ausgewertet." }] : [],
          },
          { typ: "zahl", label: `$g(f(${x0}))$`, loesung: `(${a}*(${x0}) + (${b}))^2 + (${c})` },
        ],
        hinweis: "Von innen nach außen: zuerst die innere Funktion an der Stelle auswerten, dann mit dem Ergebnis die äußere.",
        loesung: `**Ansatz:** Bei einer Verkettung rechnet man von innen nach außen. Für $f(g(${x0}))$ ist $g$ innen: $g(${x0}) = ${g0}$, also $f(g(${x0})) = f(${g0}) = ${fg}$.\n---\nFür $g(f(${x0}))$ ist $f$ innen: $f(${x0}) = ${f0}$, also $g(f(${x0})) = g(${f0}) = ${gf}$.\n---\n${fg === gf ? "Hier stimmen beide Werte zufällig überein. Im Allgemeinen ist $f\\circ g \\ne g\\circ f$." : "Die Werte sind verschieden. Die Reihenfolge der Verkettung zählt."}`,
      };
    },
  }),
  drill({
    id: "fu-d-transformation",
    kapitel: K,
    titel: "Transformierte Parabel aufstellen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([1, 2, 3, -1, -2, 0.5]);
      const b = r.intOhne0(-5, 5);
      const c = r.intOhne0(-5, 5);
      const streck =
        a === 1
          ? ""
          : a === -1
            ? "an der $x$-Achse gespiegelt, "
            : a < 0
              ? `mit dem Faktor ${tz(-a)} in $y$-Richtung gestreckt und an der $x$-Achse gespiegelt, `
              : `mit dem Faktor ${tz(a)} in $y$-Richtung ${a < 1 ? "gestaucht" : "gestreckt"}, `;
      return {
        angabe: `Der Graph von $f(x) = x^2$ wird ${streck}dann um ${Math.abs(b)} nach ${b > 0 ? "rechts" : "links"} und um ${Math.abs(c)} nach ${c > 0 ? "oben" : "unten"} verschoben. Gib den neuen Funktionsterm an.`,
        teile: [
          {
            typ: "term",
            label: "$g(x)$",
            loesung: `${a}*(x - (${b}))^2 + (${c})`,
            fehler: [{ wert: `${a}*(x + (${b}))^2 + (${c})`, meldung: "Innen wirkt umgekehrt: Eine Verschiebung nach rechts um $b$ heißt, $x$ durch $x - b$ zu ersetzen." }],
          },
        ],
        hinweis: "Verschiebung nach rechts um b: x durch (x − b) ersetzen. Nach oben: zum Ergebnis addieren.",
        loesung: `${a !== 1 ? `**Ansatz:** Strecken und Spiegeln wirken außen auf das Ergebnis: $x^2$ wird zu $${vorfaktor(a)}x^2$.\n---\n` : "**Ansatz:** Verschiebungen in $x$-Richtung wirken innen und umgekehrt, in $y$-Richtung außen.\n---\n"}Verschieben in $x$-Richtung: $x$ wird durch $${xMinus(b)}$ ersetzt.\n---\nVerschieben in $y$-Richtung: $g(x) = ${vorfaktor(a)}${xMinus(b)}^2${plus(c)}$. Der Scheitel liegt bei $(${b} \\mid ${c})$, denn dort ist die Klammer null.`,
      };
    },
  }),
  drill({
    id: "fu-d-asymptote",
    kapitel: K,
    titel: "Polstelle und waagrechte Asymptote",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.intOhne0(-5, 5);
      const c = r.wahl([1, 2]);
      const d = -c * p;
      const a = r.intOhne0(-6, 6);
      let b = r.int(-6, 6);
      if (a * d - b * c === 0) b += 1; // sonst kuerzbar (konstante Funktion)
      const asym = a / c;
      return {
        angabe: `Gegeben ist $f(x) = \\dfrac{${polyTex([a, b])}}{${polyTex([c, d])}}$. Bestimme die Polstelle $x_P$ und die Zahl $y_A$ der waagrechten Asymptote $y = y_A$.`,
        teile: [
          { typ: "zahl", label: "$x_P$", loesung: `-(${d})/(${c})`, fehler: [{ wert: String(-p), meldung: "Setze den Nenner null und löse sorgfältig nach $x$ auf. Prüfe das Vorzeichen." }] },
          {
            typ: "zahl",
            label: "$y_A$",
            loesung: `${a}/${c}`,
            fehler: b !== 0 && b * c !== a * d ? [{ wert: `${b}/(${d})`, meldung: "Für große $x$ zählen die Leitterme, nicht die konstanten Glieder." }] : [],
          },
        ],
        hinweis: "Nenner null setzen. Bei gleichem Grad von Zähler und Nenner ist die Asymptote der Quotient der Leitkoeffizienten.",
        loesung: `**Ansatz:** Polstellen sind Nullstellen des Nenners, die nach dem Kürzen bleiben. $${polyTex([c, d])} = 0$ ergibt $x = ${p}$.\n---\nDer Zähler ist dort $${a * p + b} \\ne 0$. Man kann also nicht kürzen, und $x_P = ${p}$ ist eine Polstelle.\n---\nZähler und Nenner haben Grad $1$. Die waagrechte Asymptote ist der Quotient der Leitkoeffizienten: $y = \\dfrac{${a}}{${c}} = ${bruchTex(a, c)}$${Number.isInteger(asym) ? "" : ` $= ${tz(asym)}$`}.`,
      };
    },
  }),
  drill({
    id: "fu-d-schiefe-asymptote",
    kapitel: K,
    titel: "Schräge Asymptote mit Polynomdivision",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.intOhne0(-4, 4);
      const m = r.intOhne0(-3, 3);
      const n = r.int(-5, 5);
      const rest = r.intOhne0(-6, 6);
      // Zaehler = (m x + n)(x - p) + rest; rest != 0, also nicht kuerzbar
      const a2 = m;
      const a1 = n - m * p;
      const z0 = -n * p + rest;
      return {
        angabe: `Gegeben ist $f(x) = \\dfrac{${polyTex([a2, a1, z0])}}{${xMinus(p).replace(/^\(|\)$/g, "")}}$. Bestimme mit Polynomdivision die schräge Asymptote $y = mx + n$.`,
        teile: [
          {
            typ: "term",
            label: "Asymptote $mx + n$",
            loesung: `${m}*x + (${n})`,
            fehler: n !== 0 ? [{ wert: `${m}*x`, meldung: "Nach dem ersten Divisionsschritt fehlt noch der zweite. Er liefert den Achsenabschnitt der Asymptote." }] : [],
          },
        ],
        hinweis: "Erster Schritt: Leitterm des Zählers durch x teilen, zurückmultiplizieren, abziehen. Mit dem Rest weiterrechnen.",
        loesung: `**Ansatz:** Der Zählergrad ist um $1$ größer als der Nennergrad. Die Polynomdivision liefert $f(x) = mx + n + \\dfrac{\\text{Rest}}{${xMinus(p).replace(/^\(|\)$/g, "")}}$, und $y = mx + n$ ist die schräge Asymptote.\n---\nErster Schritt: $${tz(a2)}x^2 : x = ${tz(m)}x$. Wir multiplizieren $${tz(m)}x\\cdot${xMinus(p)}$ zurück und ziehen es vom Zähler ab. Übrig bleibt $${polyTex([n, z0])}$.\n---\nZweiter Schritt: ${n === 0 ? "Der Rest hat schon kleineren Grad als der Nenner" : `$${tz(n)}x : x = ${tz(n)}$. Zurückmultiplizieren und abziehen`} lässt den Rest $${rest}$. Also $f(x) = ${polyTex([m, n])} ${rest < 0 ? "-" : "+"} \\dfrac{${Math.abs(rest)}}{${xMinus(p).replace(/^\(|\)$/g, "")}}$.\n---\nDer Bruch wird für große $|x|$ beliebig klein. Die schräge Asymptote ist $y = ${polyTex([m, n])}$. Probe: $(${polyTex([m, n])})\\cdot${xMinus(p)}${plus(rest)} = ${polyTex([a2, a1, z0])}$.`,
      };
    },
  }),
  drill({
    id: "fu-d-log",
    kapitel: K,
    titel: "Logarithmen ohne Taschenrechner",
    niveau: 1,
    erzeuge: (r) => {
      const basis = r.wahl([2, 3, 5, 10]);
      const k = r.wahl([-3, -2, -1, 2, 3, 4, 5]);
      const wert = basis ** Math.abs(k);
      const argTex = k > 0 ? String(wert) : `\\tfrac{1}{${wert}}`;
      const logTex = basis === 10 ? "\\lg" : `\\log_{${basis}}`;
      return {
        angabe: `Berechne $${logTex} ${argTex}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `log(${k > 0 ? wert : `1/${wert}`}, ${basis})`,
            fehler: [{ wert: String(-k), meldung: "Vorzeichen prüfen: Ein Kehrwert gehört zu einer negativen Hochzahl, eine ganze Zahl über $1$ zu einer positiven." }],
          },
        ],
        hinweis: "Ein Logarithmus ist eine Hochzahl: Mit welcher Hochzahl muss man die Basis potenzieren?",
        loesung: `**Ansatz:** $${logTex} ${argTex}$ ist die Hochzahl $x$ mit $${basis}^x = ${argTex}$.\n---\nEs ist $${basis}^{${k}} = ${argTex}$. Also ist $${logTex} ${argTex} = ${k}$.`,
      };
    },
  }),
  drill({
    id: "fu-d-exp-e-form",
    kapitel: K,
    titel: "Exponentialfunktion in e-Form umschreiben",
    niveau: 2,
    erzeuge: (r) => {
      const c = r.wahl([2, 3, 4, 5, 8, 10]);
      const a = r.wahl([1.5, 2, 3, 0.5, 0.8, 0.9, 1.2, 4]);
      const lam = Math.log(a);
      return {
        angabe: `Schreibe $f(x) = ${c}\\cdot ${tz(a)}^x$ in der Form $\\alpha\\,e^{\\lambda x}$. Gib $\\lambda$ auf vier Nachkommastellen an.`,
        teile: [
          { typ: "zahl", label: "$\\alpha$", loesung: String(c), fehler: [{ wert: `ln(${c})`, meldung: "Der Anfangswert bleibt beim Umschreiben unverändert: $\\alpha = f(0)$." }] },
          {
            typ: "zahl",
            label: "$\\lambda$",
            loesung: `ln(${a})`,
            toleranz: 0.0001,
            fehler: [{ wert: String(a - 1), meldung: "$\\lambda$ ist nicht der Prozentsatz $a - 1$, sondern der natürliche Logarithmus der Basis." }],
          },
        ],
        hinweis: "Jede Basis lässt sich als e hoch ln a schreiben: a^x = e^(x · ln a).",
        loesung: `**Ansatz:** Wegen $${tz(a)} = e^{\\ln ${tz(a)}}$ gilt $${tz(a)}^x = e^{(\\ln ${tz(a)})\\,x}$. Der Faktor $${c}$ bleibt stehen.\n---\nAlso ist $\\alpha = ${c}$ und $\\lambda = \\ln ${tz(a)} \\approx ${tz(lam, 4)}$.\n---\n${lam > 0 ? "Kontrolle: $\\lambda > 0$ passt zu Wachstum, denn die Basis ist größer als $1$." : "Kontrolle: $\\lambda < 0$ passt zu Abnahme, denn die Basis ist kleiner als $1$."}`,
      };
    },
  }),
  drill({
    id: "fu-d-lambda-prozent",
    kapitel: K,
    titel: "Wachstumskonstante und Prozentsatz umrechnen",
    niveau: 1,
    erzeuge: (r) => {
      if (r.zufall() < 0.5) {
        const lam = r.wahl([0.02, 0.03, 0.045, 0.05, 0.06, 0.08, 0.1, 0.12, -0.04, -0.07, -0.1]);
        const p = (Math.exp(lam) - 1) * 100;
        return {
          angabe: `Ein Bestand ändert sich nach $N(t) = N_0\\,e^{${tz(lam)}t}$, $t$ in Jahren. Um wie viel Prozent ändert er sich pro Jahr? Gib eine Abnahme negativ an und runde auf zwei Nachkommastellen.`,
          teile: [
            {
              typ: "zahl",
              einheit: "%",
              loesung: `(e^(${lam}) - 1)*100`,
              toleranz: 0.01,
              fehler: [{ wert: String(lam * 100), meldung: "$\\lambda$ ist nicht der Prozentsatz. Der Faktor pro Jahr ist $e^{\\lambda}$, die Änderung $e^{\\lambda} - 1$." }],
            },
          ],
          hinweis: "Der Faktor pro Jahr ist q = e^λ, die Änderung ist q − 1.",
          loesung: `**Ansatz:** Von einem Jahr zum nächsten wird mit $q = e^{${tz(lam)}} \\approx ${tz(Math.exp(lam), 5)}$ multipliziert.\n---\nDie Änderung ist $q - 1 \\approx ${tz(Math.exp(lam) - 1, 5)}$, also $${tz(p, 2)}\\,\\%$ pro Jahr. ${lam > 0 ? "Das ist etwas mehr" : "Der Betrag ist etwas kleiner"} als $${tz(Math.abs(lam) * 100)}\\,\\%$.`,
        };
      }
      const p = r.wahl([2, 3, 4, 5, 6, 8, 10, 12, -5, -10, -15, -20]);
      const q = 1 + p / 100;
      return {
        angabe: `Ein Bestand ${p > 0 ? "wächst" : "nimmt"} pro Stunde um $${Math.abs(p)}\\,\\%$${p > 0 ? "" : " ab"}. Gib die Konstante $\\lambda$ in $N(t) = N_0e^{\\lambda t}$ auf vier Nachkommastellen an.`,
        teile: [
          {
            typ: "zahl",
            label: "$\\lambda$",
            loesung: `ln(${q})`,
            toleranz: 0.0001,
            fehler: [{ wert: String(p / 100), meldung: "$\\lambda$ ist nicht der Prozentsatz, sondern $\\ln q$ mit dem Faktor $q$." }],
          },
        ],
        hinweis: "Zuerst den Wachstumsfaktor q bestimmen, dann λ = ln q.",
        loesung: `**Ansatz:** Bei ${p > 0 ? "einer Zunahme" : "einer Abnahme"} um $${Math.abs(p)}\\,\\%$ ist der Faktor $q = ${tz(q)}$.\n---\nDann ist $\\lambda = \\ln ${tz(q)} \\approx ${tz(Math.log(q), 4)}$. ${p > 0 ? "Wie erwartet ist $\\lambda$ positiv." : "Wie erwartet ist $\\lambda$ negativ."}`,
      };
    },
  }),
  drill({
    id: "fu-d-verdopplung",
    kapitel: K,
    titel: "Verdopplungszeit",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.wahl([1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20]);
      const q = 1 + p / 100;
      const einheit = r.wahl(["Jahr", "Tag", "Stunde"] as const);
      const plural = { Jahr: "Jahre", Tag: "Tage", Stunde: "Stunden" }[einheit];
      const t2 = Math.log(2) / Math.log(q);
      return {
        angabe: `Eine Größe wächst um $${tz(p)}\\,\\%$ pro ${einheit}. Nach welcher Zeit hat sie sich verdoppelt? Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: plural,
            loesung: `ln(2)/ln(${q})`,
            toleranz: 0.01,
            fehler: [{ wert: String(100 / p), meldung: "Das wäre lineares Wachstum. Exponentiell löst man $q^T = 2$ mit dem Logarithmus." }],
          },
        ],
        hinweis: "Ansatz q^T = 2, dann beide Seiten logarithmieren.",
        loesung: `**Ansatz:** Der Faktor pro ${einheit} ist $q = ${tz(q)}$. Verdoppelt hat sich die Größe, wenn $q^T = 2$ ist. Der Anfangswert spielt keine Rolle.\n---\nLogarithmieren: $T = \\dfrac{\\ln 2}{\\ln ${tz(q)}} \\approx \\dfrac{0{,}6931}{${tz(Math.log(q), 5)}} \\approx ${tz(t2, 2)}$ ${plural}.\n---\nKontrolle mit der Faustregel: $70 : ${tz(p)} \\approx ${tz(70 / p, 1)}$. Das passt ungefähr.`,
      };
    },
  }),
  drill({
    id: "fu-d-halbwertszeit",
    kapitel: K,
    titel: "Restmenge aus der Halbwertszeit",
    niveau: 2,
    erzeuge: (r) => {
      const T = r.wahl([2, 4, 5, 6, 8, 10, 12, 30]);
      const t = T * r.wahl([0.5, 1.5, 2, 2.5, 3, 4, 0.25]);
      const m0 = r.wahl([100, 200, 400, 500, 800, 1000]);
      const rest = m0 * 0.5 ** (t / T);
      return {
        angabe: `Ein Stoff hat eine Halbwertszeit von $${T}$ Tagen. Zu Beginn sind $${m0}$ mg vorhanden. Wie viel ist nach $${tz(t)}$ Tagen noch übrig? Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: "mg",
            loesung: `${m0}*0.5^(${t}/${T})`,
            toleranz: 0.01,
            fehler: t / T !== 1 ? [{ wert: `${m0}*(1 - 0.5*${t}/${T})`, meldung: "Zerfall ist nicht linear. Pro Halbwertszeit halbiert sich die jeweils vorhandene Menge: $0{,}5^{t/T}$." }] : [],
          },
        ],
        hinweis: "Zerfallsgesetz N(t) = N₀ · 0,5^(t/T): Der Exponent zählt, wie viele Halbwertszeiten vergangen sind.",
        loesung: `**Ansatz:** Nach jeder Halbwertszeit ist die Hälfte übrig. Das Zerfallsgesetz lautet $m(t) = ${m0}\\cdot 0{,}5^{t/${T}}$.\n---\nIn $${tz(t)}$ Tagen vergehen $\\tfrac{${tz(t)}}{${T}} = ${tz(t / T)}$ Halbwertszeiten.\n---\n$m(${tz(t)}) = ${m0}\\cdot 0{,}5^{${tz(t / T)}} \\approx ${tz(rest, 2)}$ mg.`,
      };
    },
  }),
  drill({
    id: "fu-d-wann-erreicht",
    kapitel: K,
    titel: "Wann wird ein Wert erreicht?",
    niveau: 2,
    erzeuge: (r) => {
      const n0 = r.wahl([50, 100, 200, 250, 400, 1000]);
      const p = r.wahl([3, 4, 5, 6, 8, 10, 12]);
      const faktor = r.wahl([2, 3, 4, 5, 10]);
      const ziel = n0 * faktor;
      const q = 1 + p / 100;
      const t = Math.log(faktor) / Math.log(q);
      return {
        angabe: `Ein Bestand von $${n0}$ wächst exponentiell um $${p}\\,\\%$ pro Jahr. Nach wie vielen Jahren ist der Wert $${ziel}$ erreicht? Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: "Jahre",
            loesung: `ln(${ziel}/${n0})/ln(${q})`,
            toleranz: 0.01,
            fehler: [{ wert: `ln(${ziel})/ln(${q})`, meldung: "Zuerst durch den Anfangswert dividieren: $q^t = \\tfrac{\\text{Zielwert}}{N_0}$. Erst dann logarithmieren." }],
          },
        ],
        hinweis: "N₀ · q^t = Zielwert, zuerst durch N₀ dividieren, dann logarithmieren.",
        loesung: `**Ansatz:** Wachstumsgesetz $N(t) = ${n0}\\cdot ${tz(q)}^t$. Gesucht ist $t$ mit $${n0}\\cdot ${tz(q)}^t = ${ziel}$.\n---\nDurch $${n0}$ dividieren, damit die Potenz allein steht: $${tz(q)}^t = ${faktor}$.\n---\nLogarithmieren: $t = \\dfrac{\\ln ${faktor}}{\\ln ${tz(q)}} \\approx ${tz(t, 2)}$ Jahre.`,
      };
    },
  }),
  drill({
    id: "fu-d-exp-zwei-punkte",
    kapitel: K,
    titel: "Exponentialfunktion durch zwei Punkte",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.wahl([2, 3, 4, 5]);
      const c = r.int(1, 5);
      const x1 = r.int(0, 2);
      const x2 = x1 + 2;
      const y1 = c * a ** x1;
      const y2 = c * a ** x2;
      return {
        angabe: `Die Funktion $f(x) = c\\cdot a^x$ mit $a > 0$ geht durch $P(${x1} \\mid ${y1})$ und $Q(${x2} \\mid ${y2})$. Bestimme $a$ und $c$.`,
        teile: [
          { typ: "zahl", label: "$a$", loesung: `sqrt(${y2}/${y1})`, fehler: [{ wert: String(a * a), meldung: "Die Division liefert $a^2$. Gesucht ist $a$ selbst, also die Wurzel." }] },
          { typ: "zahl", label: "$c$", loesung: `${y1}/${a}^${x1}` },
        ],
        hinweis: "Beide Punkte einsetzen und die zweite Gleichung durch die erste dividieren. Dann fällt c weg.",
        loesung: `**Ansatz:** Beide Punkte liefern eine Gleichung: $c\\,a^{${x1}} = ${y1}$ und $c\\,a^{${x2}} = ${y2}$.\n---\nDivision der Gleichungen, damit $c$ wegfällt: $a^2 = \\dfrac{${y2}}{${y1}} = ${a * a}$, also $a = ${a}$, denn die Basis ist positiv.\n---\n$c = \\dfrac{${y1}}{${a}^{${x1}}} = ${c}$. Also $f(x) = ${c === 1 ? "" : `${c}\\cdot `}${a}^x$. Probe: $f(${x2}) = ${y2}$.`,
      };
    },
  }),
  drill({
    id: "fu-d-umkehr-quadratisch",
    kapitel: K,
    titel: "Umkehrfunktion eines Parabelasts",
    niveau: 3,
    erzeuge: (r) => {
      const a = r.wahl([1, 2, 3, 0.5]);
      const h = r.int(-4, 4);
      const k = r.int(-5, 5);
      return {
        angabe: `Gegeben ist $f(x) = ${vorfaktor(a)}${xMinus(h)}^2${plus(k)}$ auf $D = [${h}, \\infty)$. Bestimme die Umkehrfunktion und den linken Rand ihrer Definitionsmenge.`,
        teile: [
          {
            typ: "term",
            label: "$f^{-1}(x)$",
            loesung: `${h} + sqrt((x - (${k}))/${a})`,
            bereich: [k + 0.5, k + 8],
            fehler: [{ wert: `${h} - sqrt((x - (${k}))/${a})`, meldung: `Auf $D = [${h}, \\infty)$ ist $x - (${h}) \\ge 0$. Darum gilt nur die positive Wurzel.` }],
          },
          { typ: "zahl", label: "linker Rand von $D_{f^{-1}}$", loesung: String(k), fehler: h !== k ? [{ wert: String(h), meldung: "Die Definitionsmenge der Umkehrfunktion ist die **Wertemenge** von $f$. Sie beginnt beim Scheitelwert." }] : [] },
        ],
        hinweis: "y = f(x) nach x auflösen: erst k abziehen, dann durch a dividieren, dann die positive Wurzel ziehen, weil x ≥ h ist.",
        loesung: `**Ansatz:** Auf $[${h}, \\infty)$ ist $f$ der rechte Parabelast und streng steigend, also umkehrbar. Wir lösen $y = ${vorfaktor(a)}${xMinus(h)}^2${plus(k)}$ nach $x$ auf.\n---\nZuerst $${k}$ abziehen und durch $${tz(a)}$ dividieren: $${xMinus(h)}^2 = \\dfrac{y${plus(-k)}}{${tz(a)}}$.\n---\nWegen $x \\ge ${h}$ ist die Klammer nicht negativ. Nur die positive Wurzel passt: $x = ${h} + \\sqrt{\\dfrac{y${plus(-k)}}{${tz(a)}}}$.\n---\nUmbenennen: $f^{-1}(x) = ${h} + \\sqrt{\\dfrac{x${plus(-k)}}{${tz(a)}}}$. Die Definitionsmenge ist die Wertemenge von $f$, also $[${k}, \\infty)$. Probe: $f^{-1}(${k}) = ${h}$, das ist der Scheitel.`,
      };
    },
  }),
  drill({
    id: "fu-d-beschraenkt",
    kapitel: K,
    titel: "Abkühlung im beschränkten Modell",
    niveau: 2,
    erzeuge: (r) => {
      const raum = r.wahl([18, 20, 22, 24]);
      const start = r.wahl([70, 80, 85, 90, 95]);
      const k = r.wahl([0.04, 0.05, 0.06, 0.08, 0.1]);
      const ziel = r.wahl([40, 45, 50, 55, 60].filter((z) => z < start - 5 && z > raum + 5));
      const diff = start - raum;
      const t = Math.log(diff / (ziel - raum)) / k;
      return {
        angabe: `Ein Getränk hat $${start}\\,°\\text{C}$ und steht in einem Raum mit $${raum}\\,°\\text{C}$. Seine Temperatur ist $T(t) = ${raum} + ${diff}\\,e^{-${tz(k)}t}$ mit $t$ in Minuten. Nach welcher Zeit hat es $${ziel}\\,°\\text{C}$? Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: "min",
            loesung: `ln(${diff}/(${ziel} - ${raum}))/${k}`,
            toleranz: 0.01,
            fehler: [{ wert: `ln(${diff}/${ziel})/${k}`, meldung: "Zuerst die Raumtemperatur abziehen: Der **Unterschied** zum Raum soll $" + (ziel - raum) + "\\,°\\text{C}$ sein." }],
          },
        ],
        hinweis: "Den Summanden der Raumtemperatur abziehen, durch den Anfangsunterschied dividieren, dann logarithmieren.",
        loesung: `**Ansatz:** Beschränktes Modell mit der Grenze $${raum}\\,°$C. Der Unterschied zum Raum ist $${diff}\\,e^{-${tz(k)}t}$ und soll $${ziel} - ${raum} = ${ziel - raum}$ betragen.\n---\n$e^{-${tz(k)}t} = \\dfrac{${ziel - raum}}{${diff}}$. Logarithmieren und durch $-${tz(k)}$ dividieren: $t = \\dfrac{\\ln(${diff}/${ziel - raum})}{${tz(k)}}$.\n---\n$t \\approx ${tz(t, 2)}$ min. Probe: $${raum} + ${diff}\\,e^{-${tz(k)}\\cdot ${tz(t, 2)}} \\approx ${ziel}$.`,
      };
    },
  }),
  drill({
    id: "fu-d-transformation-punkt",
    kapitel: K,
    titel: "Wohin wandert ein Punkt?",
    niveau: 3,
    erzeuge: (r) => {
      const u = r.int(-3, 4);
      const v = r.intOhne0(-4, 5);
      const a = r.wahl([2, 3, -1, -2, 0.5]);
      const c = r.intOhne0(-3, 3);
      const d = r.int(-4, 4);
      const xn = u + c;
      const yn = a * v + d;
      return {
        angabe: `Der Graph von $f$ enthält den Punkt $P(${u} \\mid ${v})$. In welchen Punkt geht $P$ beim Graphen von $g(x) = ${tz(a)}\\cdot f${xMinus(c)}${plus(d)}$ über?`,
        teile: [
          {
            typ: "vektor",
            label: "Bild von $P$",
            namen: ["x", "y"],
            loesung: [String(xn), `${a}*${v} + (${d})`],
            fehler: [
              { wert: [String(u - c), String(yn)], meldung: "Innen wirkt umgekehrt: $x$ muss so gewählt werden, dass die Eingabe $x - (" + c + ")$ gleich " + u + " ist." },
              ...(a * v + d !== v + d ? [{ wert: [String(xn), String(v + d)], meldung: "Der Faktor außen wird zuerst angewendet: Der Wert $" + v + "$ wird mit $" + tz(a) + "$ multipliziert, dann kommt $" + d + "$ dazu." }] : []),
            ],
          },
        ],
        hinweis: "Waagrecht: Für welches x ist die Eingabe von f genau u? Senkrecht: Rechne mit dem Wert v außen weiter.",
        loesung: `**Ansatz:** $g$ verwendet an der Stelle $x$ den Wert von $f$ an der Stelle $${xMinus(c).replace(/^\(|\)$/g, "")}$. Damit $f$ die Eingabe $${u}$ bekommt, muss $${xMinus(c).replace(/^\(|\)$/g, "")} = ${u}$ sein, also $x = ${xn}$.\n---\nAußen wird gerechnet: $${tz(a)}\\cdot ${v}${plus(d)} = ${tz(yn)}$.\n---\nDas Bild von $P$ ist $(${xn} \\mid ${tz(yn)})$.${a < 0 ? " Wegen des negativen Faktors wird dabei an der $x$-Achse gespiegelt." : ""}`,
      };
    },
  }),
];
