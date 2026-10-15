import { drill, ggt, tz, type Drill } from "@/lib/lernen/training";

const K = "pruefungsstrategie";

/** relative Abweichung zweier Zahlen (fuer Schutz gegen Fehlerbilder, die zufaellig fast richtig sind) */
const relAbw = (a: number, b: number) => Math.abs(a - b) / Math.max(Math.abs(b), 1e-12);
const grad = (rad: number) => (rad * 180) / Math.PI;
const normWinkel = (w: number) => ((w % 360) + 360) % 360;
function binomKoeff(n: number, k: number): number {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
}

export const DRILLS: Drill[] = [
  drill({
    id: "ps-d-minuten-pro-punkt",
    kapitel: K,
    titel: "Zeitbudget aus den Punkten",
    niveau: 1,
    erzeuge: (r) => {
      const P = r.wahl([30, 40, 50, 60]);
      const reserve = r.wahl([10, 15, 20]);
      const k = r.int(2, 6);
      const B = 120 - 5 - reserve;
      const mpp = B / P;
      return {
        angabe: `Eine Prüfung dauert $120$ Minuten und hat $${P}$ Punkte. Du planst $5$ Minuten zum Lesen und $${reserve}$ Minuten für offene Teile und Kontrolle ein.\n\na) Wie viele Minuten hast du pro Punkt? Runde auf zwei Nachkommastellen.\n\nb) Wie viele Minuten bekommt eine Teilaufgabe mit $${k}$ Punkten? Runde auf eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            label: "a) Minuten pro Punkt",
            loesung: `(120 - 5 - ${reserve})/${P}`,
            toleranz: 0.01,
            fehler: [
              { wert: `120/${P}`, meldung: "Du hast die ganze Prüfungszeit verteilt. Zieh zuerst Lesezeit und Reserve ab." },
              { wert: `${P}/${B}`, meldung: "Das sind Punkte pro Minute. Gefragt sind Minuten pro Punkt: Minuten durch Punkte." },
            ],
          },
          {
            typ: "zahl",
            label: "b) Minuten für die Teilaufgabe",
            loesung: `${k}*(120 - 5 - ${reserve})/${P}`,
            toleranz: 0.06,
            fehler: [{ wert: `${k}/((120 - 5 - ${reserve})/${P})`, meldung: "Jeder Punkt bekommt dieselbe Zeit. Multipliziere die Punkte mit den Minuten pro Punkt." }],
          },
        ],
        hinweis: "Bearbeitungszeit = 120 Minuten minus Lesezeit minus Reserve. Dann durch die Punkte teilen.",
        loesung: `**Ansatz:** Minuten pro Punkt = Bearbeitungszeit durch Gesamtpunkte.\n---\nBearbeitungszeit $120 - 5 - ${reserve} = ${B}$ Minuten, also $\\tfrac{${B}}{${P}} \\approx ${tz(mpp, 2)}$ Minuten pro Punkt.\n---\nTeilaufgabe: $${k}\\cdot ${tz(mpp, 4)} \\approx ${tz(k * mpp, 1)}$ Minuten. Nach dieser Zeit prüfst du, ob du weitermachst oder die Stopp-Regel anwendest.`,
      };
    },
  }),
  drill({
    id: "ps-d-kmh-ms",
    kapitel: K,
    titel: "km/h in m/s umrechnen",
    niveau: 1,
    erzeuge: (r) => {
      const ms = r.int(5, 40);
      const kmh = Math.round(ms * 3.6 * 10) / 10;
      return {
        angabe: `Ein Fahrzeug fährt mit $${tz(kmh, 1)}$ km/h. Gib seine Geschwindigkeit in m/s an.`,
        teile: [
          {
            typ: "zahl",
            label: "Geschwindigkeit",
            einheit: "m/s",
            loesung: `${kmh}/3.6`,
            fehler: [
              { wert: `${kmh}*3.6`, meldung: "Du hast mit $3{,}6$ multipliziert. Die Zahl in m/s ist kleiner als die in km/h: Teile durch $3{,}6$." },
              { wert: `${kmh}/10`, meldung: "Der Umrechnungsfaktor ist $3{,}6$, nicht $10$." },
            ],
          },
        ],
        hinweis: "1 m/s = 3,6 km/h, weil 1 m/s = 3600 m pro Stunde = 3,6 km/h.",
        loesung: `**Ansatz:** $1$ m/s entspricht $3600$ m pro Stunde, also $3{,}6$ km/h.\n---\n$\\tfrac{${tz(kmh, 1)}}{3{,}6} = ${ms}$ m/s.`,
      };
    },
  }),
  drill({
    id: "ps-d-signifikant",
    kapitel: K,
    titel: "Auf drei signifikante Stellen runden",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(10001, 99999);
      const e = r.int(-6, 0);
      // x = m · 10^(e−2) als Quotient ganzer Zahlen, damit keine Gleitkomma-Reste entstehen
      const x = m / 10 ** (2 - e);
      // auf drei signifikante Stellen runden: ganzzahlig an m (kaufmännisch, ,5 wird aufgerundet)
      const r3 = Math.round(m / 100);
      const gerundet = r3 / 10 ** -e;
      const step = r3 === 1000 ? 10 ** (e + 1) : 10 ** e;
      const nachkomma = r3 === 1000 ? Math.max(0, -e - 1) : -e;
      const gerundetText = gerundet.toFixed(nachkomma);
      const dezimal3 = Math.round(x * 1000) / 1000;
      const fehler = Math.abs(dezimal3 - gerundet) > step / 5 ? [{ wert: String(dezimal3), meldung: "Du hast auf drei **Nachkommastellen** gerundet. Signifikante Stellen zählen ab der ersten Ziffer, die nicht $0$ ist." }] : undefined;
      return {
        angabe: `Runde $${tz(x, 10)}$ auf **drei signifikante Stellen**.`,
        teile: [{ typ: "zahl", loesung: gerundetText, toleranz: step / 10, fehler }],
        hinweis: "Führende Nullen zählen nicht. Zähle ab der ersten Ziffer, die nicht 0 ist, drei Ziffern ab und runde an der vierten.",
        loesung: `**Ansatz:** Die signifikanten Ziffern beginnen bei der ersten Ziffer ungleich $0$.\n---\nDrei Ziffern behalten und nach der vierten Ziffer runden: $${tz(x, 10)} \\approx ${gerundetText.replace(".", "{,}")}$.${gerundetText.includes(".") && gerundetText.endsWith("0") ? " Die Null am Ende bleibt stehen, weil sie eine der drei signifikanten Stellen ist." : ""}`,
      };
    },
  }),
  drill({
    id: "ps-d-logbasis",
    kapitel: K,
    titel: "Logarithmus mit Basiswechsel",
    niveau: 1,
    erzeuge: (r) => {
      const b = r.wahl([2, 3, 5, 7]);
      let x = r.int(20, 900);
      while (Math.abs(Math.log(x) / Math.log(b) - Math.round(Math.log(x) / Math.log(b))) < 1e-9) x += 1;
      const wert = Math.log(x) / Math.log(b);
      const f1 = Math.log(b) / Math.log(x);
      const f2 = Math.log(x / b);
      const fehler = [
        ...(relAbw(f1, wert) > 0.02 ? [{ wert: `ln(${b})/ln(${x})`, meldung: "Zähler und Nenner sind vertauscht. Die Zahl kommt in den Zähler, die Basis in den Nenner." }] : []),
        ...(relAbw(f2, wert) > 0.02 ? [{ wert: `ln(${x}/${b})`, meldung: "$\\ln\\tfrac{x}{b}$ ist nicht dasselbe wie $\\tfrac{\\ln x}{\\ln b}$. Berechne beide Logarithmen getrennt und teile dann." }] : []),
      ];
      return {
        angabe: `Berechne $\\log_{${b}} ${x}$ auf vier Nachkommastellen.`,
        teile: [{ typ: "zahl", loesung: `ln(${x})/ln(${b})`, toleranz: 0.0001, fehler: fehler.length ? fehler : undefined }],
        hinweis: "Basiswechsel: log_b x = ln x / ln b. Nach jedem ln die Klammer schließen.",
        loesung: `**Ansatz:** Basiswechsel $\\log_{${b}} ${x} = \\dfrac{\\ln ${x}}{\\ln ${b}}$.\n---\nEingabe [ln] ${x} [)] [÷] [ln] ${b} [)] [=] ergibt $${tz(wert, 4)}$.\n---\nKontrolle: $${b}^{${tz(wert, 4)}} \\approx ${x}$.`,
      };
    },
  }),
  drill({
    id: "ps-d-bruchexponent",
    kapitel: K,
    titel: "Potenz mit Bruch als Hochzahl",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 12);
      const q = r.wahl([2, 3, 4, 5]);
      let p = r.int(1, q + 2);
      while (p === q || ggt(p, q) !== 1) p = p === q + 2 ? 1 : p + 1;
      const wert = a ** (p / q);
      const f1 = a ** p / q;
      const f2 = a ** (q / p);
      const fehler = [
        ...(relAbw(f1, wert) > 0.02 ? [{ wert: `${a}^${p}/${q}`, meldung: "Ohne Klammer um die Hochzahl rechnet der Rechner erst die Potenz und teilt dann. Setz die Hochzahl in Klammern." }] : []),
        ...(relAbw(f2, wert) > 0.02 ? [{ wert: `${a}^(${q}/${p})`, meldung: "Zähler und Nenner der Hochzahl sind vertauscht." }] : []),
      ];
      return {
        angabe: `Berechne $${a}^{${p}/${q}}$ auf vier Nachkommastellen.`,
        teile: [{ typ: "zahl", loesung: `${a}^(${p}/${q})`, toleranz: 0.0001, fehler: fehler.length ? fehler : undefined }],
        hinweis: "Die Hochzahl muss beim Eintippen in Klammern stehen: a ^ ( p ÷ q ).",
        loesung: `**Ansatz:** $${a}^{${p}/${q}} = \\sqrt[${q}]{${a}^{${p}}}$.\n---\nEingabe [${a}] [^] [(] ${p} [÷] ${q} [)] [=] ergibt $${tz(wert, 4)}$.\n---\nKontrolle: $${tz(wert, 4)}^{${q}} \\approx ${a}^{${p}} = ${a ** p}$.`,
      };
    },
  }),
  drill({
    id: "ps-d-verdopplung",
    kapitel: K,
    titel: "Verdopplungszeit bei Prozentwachstum",
    niveau: 2,
    erzeuge: (r) => {
      const p = r.wahl([4, 4.5, 5, 6, 7, 7.5, 8, 9, 10, 12]);
      const q = 1 + p / 100;
      const t = Math.log(2) / Math.log(q);
      const naeh = Math.log(2) / (p / 100);
      const fehler = [
        ...(relAbw(naeh, t) > 0.01 ? [{ wert: `ln(2)/${p / 100}`, meldung: `$\\ln ${tz(q)}$ ist nur ungefähr $${tz(p / 100)}$. Tippe den Logarithmus wirklich ein.` }] : []),
        { wert: `ln(2/ln(${q}))`, meldung: "Die Klammer nach dem ersten ln wurde nicht geschlossen. Schließe sie nach der 2." },
      ];
      return {
        angabe: `Ein Bestand wächst pro Jahr um $${tz(p)}\\,\\%$. Nach wie vielen Jahren hat er sich verdoppelt? Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", label: "Verdopplungszeit", einheit: "Jahre", loesung: `ln(2)/ln(${q})`, toleranz: 0.01, fehler }],
        hinweis: "Ansatz: Wachstumsfaktor hoch t = 2, dann logarithmieren.",
        loesung: `**Ansatz:** Der Faktor pro Jahr ist $${tz(q)}$. Verdopplung heißt $${tz(q)}^t = 2$.\n---\nLogarithmieren: $t\\cdot\\ln ${tz(q)} = \\ln 2$, also $t = \\dfrac{\\ln 2}{\\ln ${tz(q)}}$.\n---\n$t \\approx ${tz(t, 2)}$ Jahre. Kontrolle: $${tz(q)}^{${tz(t, 2)}} \\approx 2$.`,
      };
    },
  }),
  drill({
    id: "ps-d-steigungswinkel",
    kapitel: K,
    titel: "Steigung in Prozent als Winkel",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.int(3, 25);
      const w = grad(Math.atan(p / 100));
      const sinW = grad(Math.asin(p / 100));
      const fehler = [
        { wert: `atan(${p / 100})`, meldung: "Das ist der Winkel im Bogenmaß. Stell den Rechner auf Grad (DEG) um." },
        ...(Math.abs(sinW - w) > 0.03 ? [{ wert: `inGrad(asin(${p / 100}))`, meldung: "Die Steigung ist Höhe durch **waagrechte** Strecke, also der Tangens, nicht der Sinus." }] : []),
      ];
      return {
        angabe: `Eine Straße hat $${p}\\,\\%$ Steigung. Unter welchem Winkel steigt sie an? Gib den Winkel in Grad auf zwei Nachkommastellen an.`,
        teile: [{ typ: "zahl", label: "Winkel", einheit: "°", loesung: `inGrad(atan(${p / 100}))`, toleranz: 0.01, fehler }],
        hinweis: "p % Steigung heißt p Meter Höhe auf 100 Meter waagrecht, also tan α = p/100.",
        loesung: `**Ansatz:** $${p}\\,\\%$ Steigung heißt $\\tan\\alpha = ${tz(p / 100)}$.\n---\nIm Gradmodus: [SHIFT] [tan] ${tz(p / 100)} [)] [=] ergibt $\\alpha \\approx ${tz(w, 2)}°$.`,
      };
    },
  }),
  drill({
    id: "ps-d-winkel-alle",
    kapitel: K,
    titel: "Alle Winkel zu einem Sinus- oder Kosinuswert",
    niveau: 2,
    erzeuge: (r) => {
      const fn = r.wahl(["sin", "cos"] as const);
      const c = r.wahl([-0.9, -0.8, -0.7, -0.6, -0.4, -0.3, -0.2, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9]);
      const haupt = fn === "sin" ? grad(Math.asin(c)) : grad(Math.acos(c));
      const a1 = normWinkel(haupt);
      const a2 = normWinkel(fn === "sin" ? 180 - haupt : 360 - haupt);
      const falsch2 = normWinkel(fn === "sin" ? 360 - haupt : 180 - haupt);
      const ausdr = fn === "sin" ? `asin(${c})` : `acos(${c})`;
      const loes =
        fn === "sin"
          ? [`mod(inGrad(${ausdr}) + 360, 360)`, `180 - inGrad(${ausdr})`]
          : [`inGrad(${ausdr})`, `360 - inGrad(${ausdr})`];
      return {
        angabe: `Bestimme alle $\\alpha \\in [0°, 360°)$ mit $\\${fn}\\alpha = ${tz(c)}$. Runde auf zwei Nachkommastellen und trenne die Lösungen mit einem Strichpunkt.`,
        teile: [
          {
            typ: "menge",
            loesung: loes,
            fehler: [
              { wert: [a1.toFixed(2)], meldung: "Das ist nur eine Lösung. Zu jedem Wert gibt es pro Umdrehung zwei Winkel." },
              {
                wert: [a1.toFixed(2), falsch2.toFixed(2)],
                meldung: fn === "sin" ? "Beim Sinus ist die zweite Lösung $180° - \\alpha$, nicht $360° - \\alpha$." : "Beim Kosinus ist die zweite Lösung $360° - \\alpha$, nicht $180° - \\alpha$.",
              },
            ],
          },
        ],
        hinweis: fn === "sin" ? "Hauptwert mit sin⁻¹, zweite Lösung 180° − α, negative Winkel plus 360°." : "Hauptwert mit cos⁻¹, zweite Lösung 360° − α.",
        loesung: `**Ansatz:** Hauptwert mit dem Rechner, zweite Lösung über die Symmetrie am Einheitskreis.\n---\n$\\${fn}^{-1}(${tz(c)}) \\approx ${tz(haupt, 2)}°$${haupt < 0 ? `, plus $360°$ ergibt $${tz(a1, 2)}°$` : ""}.\n---\nZweite Lösung: ${fn === "sin" ? `$180° - (${tz(haupt, 2)}°)$` : `$360° - ${tz(haupt, 2)}°$`} $= ${tz(a2, 2)}°$.`,
      };
    },
  }),
  drill({
    id: "ps-d-binom-genau",
    kapitel: K,
    titel: "Binomialwahrscheinlichkeit eintippen",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(5, 12);
      const p = r.wahl([0.1, 0.15, 0.2, 0.25, 0.3, 0.4]);
      const m = Math.round(n * p);
      const k = Math.min(n - 1, Math.max(1, m + r.int(-1, 1)));
      const wert = binomKoeff(n, k) * p ** k * (1 - p) ** (n - k);
      return {
        angabe: `Ein Versuch gelingt mit Wahrscheinlichkeit $${tz(p)}$. Er wird $${n}$-mal unabhängig wiederholt. Wie groß ist die Wahrscheinlichkeit für genau $${k}$ Erfolge? Runde auf vier Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `binompdf(${n}, ${p}, ${k})`,
            toleranz: 0.0001,
            fehler: [{ wert: `${p}^${k}*${1 - p}^${n - k}`, meldung: `Der Binomialkoeffizient $\\binom{${n}}{${k}} = ${binomKoeff(n, k)}$ fehlt. Die Erfolge können an verschiedenen Stellen liegen.` }],
          },
        ],
        hinweis: "P(X = k) = (n nCr k) · p^k · (1 − p)^(n − k).",
        loesung: `**Ansatz:** $X$ ist binomialverteilt mit $n = ${n}$ und $p = ${tz(p)}$.\n---\n$P(X = ${k}) = \\binom{${n}}{${k}}\\cdot ${tz(p)}^{${k}}\\cdot ${tz(1 - p)}^{${n - k}}$. Eingabe [${n}] [nCr] [${k}] [×] ${tz(p)} [^] ${k} [×] ${tz(1 - p)} [^] ${n - k} [=].\n---\nErgebnis $\\approx ${tz(wert, 4)}$.`,
      };
    },
  }),
  drill({
    id: "ps-d-mindestens-eins",
    kapitel: K,
    titel: "Mindestens ein Treffer",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(3, 10);
      const p = r.wahl([0.05, 0.1, 0.15, 0.2, 0.25, 0.3]);
      const wert = 1 - (1 - p) ** n;
      const np = n * p;
      const fehler = [
        ...(np <= 1 && Math.abs(np - wert) > 0.002 ? [{ wert: `${n}*${p}`, meldung: "Wahrscheinlichkeiten der einzelnen Versuche darf man hier nicht einfach addieren, denn mehrere Treffer würden doppelt gezählt. Nimm das Gegenereignis „kein Treffer“." }] : []),
        ...(Math.abs(1 - p ** n - wert) > 0.002 ? [{ wert: `1 - ${p}^${n}`, meldung: `Das Gegenereignis von „mindestens ein Treffer“ ist „kein Treffer“, also jedes Mal Misserfolg: $${tz(1 - p)}^{${n}}$.` }] : []),
      ];
      return {
        angabe: `Ein Versuch gelingt mit Wahrscheinlichkeit $${tz(p)}$. Er wird $${n}$-mal unabhängig wiederholt. Wie groß ist die Wahrscheinlichkeit für mindestens einen Erfolg? Runde auf vier Nachkommastellen.`,
        teile: [{ typ: "zahl", loesung: `1 - (1 - ${p})^${n}`, toleranz: 0.0001, fehler: fehler.length ? fehler : undefined }],
        hinweis: "Gegenereignis: kein einziger Erfolg.",
        loesung: `**Ansatz:** Über das Gegenereignis „kein Erfolg“: $P(X \\ge 1) = 1 - P(X = 0)$.\n---\n$P(X = 0) = ${tz(1 - p)}^{${n}} \\approx ${tz((1 - p) ** n, 4)}$.\n---\n$P(X \\ge 1) \\approx ${tz(wert, 4)}$.`,
      };
    },
  }),
  drill({
    id: "ps-d-standardabweichung",
    kapitel: K,
    titel: "Beide Standardabweichungen",
    niveau: 2,
    erzeuge: (r) => {
      const mittel = r.int(5, 20);
      const abw = r.mische([r.int(1, 4), -r.int(1, 4), r.int(-3, 3), r.int(-3, 3)]);
      const letzte = -abw.reduce((s, x) => s + x, 0);
      const daten = [...abw, letzte].map((d) => mittel + d);
      const qs = [...abw, letzte].reduce((s, d) => s + d * d, 0);
      const sN = Math.sqrt(qs / 5);
      const s1 = Math.sqrt(qs / 4);
      const liste = daten.join(",\\ ");
      const arr = `[${daten.join(", ")}]`;
      return {
        angabe: `Berechne für die Daten $${liste}$ den Mittelwert und beide Standardabweichungen (Division durch $n$ und durch $n - 1$) auf drei Nachkommastellen.`,
        teile: [
          { typ: "zahl", label: "Mittelwert", loesung: `mean(${arr})`, fehler: [{ wert: `${mittel * 5}/4`, meldung: "Die Summe wird durch die Anzahl der Werte geteilt, also durch $5$." }] },
          { typ: "zahl", label: "mit $n$", loesung: `std(${arr}, "uncorrected")`, toleranz: 0.001, fehler: [{ wert: `sqrt(${qs}/4)`, meldung: "Das ist die Variante mit $n - 1$. Hier ist durch $n = 5$ zu teilen." }] },
          { typ: "zahl", label: "mit $n - 1$", loesung: `std(${arr})`, toleranz: 0.001, fehler: [{ wert: `sqrt(${qs}/5)`, meldung: "Das ist die Variante mit $n$. Hier ist durch $n - 1 = 4$ zu teilen." }] },
        ],
        hinweis: "Abweichungen vom Mittelwert quadrieren und addieren, dann durch n bzw. n − 1 teilen und die Wurzel ziehen.",
        loesung: `**Ansatz:** Mittelwert, Quadratsumme der Abweichungen, dann einmal durch $n$ und einmal durch $n - 1$.\n---\n$\\bar x = ${mittel}$. Quadratsumme der Abweichungen $= ${qs}$.\n---\nMit $n$: $\\sqrt{\\tfrac{${qs}}{5}} \\approx ${tz(sN, 3)}$. Mit $n - 1$: $\\sqrt{\\tfrac{${qs}}{4}} \\approx ${tz(s1, 3)}$.`,
      };
    },
  }),
  drill({
    id: "ps-d-restzeit",
    kapitel: K,
    titel: "Restzeit pro offenem Punkt",
    niveau: 2,
    erzeuge: (r) => {
      const P = r.wahl([40, 50]);
      const t = r.int(50, 80);
      const d = r.int(Math.round(P * 0.3), Math.round(P * 0.7));
      const c = r.int(5, 10);
      const wert = (120 - t - c) / (P - d);
      const f1 = (120 - t) / (P - d);
      const f2 = (120 - t - c) / d;
      const fehler = [
        ...(relAbw(f1, wert) > 0.02 ? [{ wert: `(120 - ${t})/${P - d}`, meldung: "Die Minuten für die Kontrolle stehen nicht für die Bearbeitung zur Verfügung. Zieh sie zuerst ab." }] : []),
        ...(relAbw(f2, wert) > 0.02 ? [{ wert: `(120 - ${t} - ${c})/${d}`, meldung: `Teile durch die **offenen** Punkte, also $${P} - ${d} = ${P - d}$.` }] : []),
      ];
      return {
        angabe: `Eine Prüfung hat $${P}$ Punkte und dauert $120$ Minuten. Nach $${t}$ Minuten hast du Teilaufgaben mit zusammen $${d}$ Punkten bearbeitet. Die letzten $${c}$ Minuten willst du für die Kontrolle freihalten. Wie viele Minuten bleiben pro offenem Punkt? Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", loesung: `(120 - ${t} - ${c})/(${P} - ${d})`, toleranz: 0.01, fehler: fehler.length ? fehler : undefined }],
        hinweis: "Restzeit für die Bearbeitung durch die Zahl der offenen Punkte.",
        loesung: `**Ansatz:** Restzeit ohne Kontrolle durch offene Punkte.\n---\nRestzeit $120 - ${t} - ${c} = ${120 - t - c}$ Minuten, offen sind $${P} - ${d} = ${P - d}$ Punkte.\n---\n$\\tfrac{${120 - t - c}}{${P - d}} \\approx ${tz(wert, 2)}$ Minuten pro Punkt.`,
      };
    },
  }),
  drill({
    id: "ps-d-zwischenrundung",
    kapitel: K,
    titel: "Was frühes Runden kostet",
    niveau: 3,
    erzeuge: (r) => {
      const K0 = r.wahl([1500, 2000, 2500, 3000]);
      const zins = r.wahl([2.25, 2.75, 3.25, 3.35, 3.75, 4.35]);
      const n = r.int(8, 16);
      const q = 1 + zins / 100;
      const qr = Math.round(q * 100) / 100;
      const exakt = K0 * q ** n;
      const gerundet = K0 * qr ** n;
      const diff = Math.abs(exakt - gerundet);
      return {
        angabe: `Ein Kapital von $${K0}$ Euro wird $${n}$ Jahre lang mit $${tz(zins)}\\,\\%$ pro Jahr verzinst (Zinseszins).\n\na) Berechne das Endkapital auf Cent genau, ohne Zwischenergebnisse zu runden.\n\nb) Ein Prüfling rundet den Zinsfaktor zuerst auf $${tz(qr)}$. Um wie viele Euro weicht sein Ergebnis ab? Runde auf ganze Euro.`,
        teile: [
          {
            typ: "zahl",
            label: "a) Endkapital",
            einheit: "Euro",
            loesung: `${K0}*${q}^${n}`,
            toleranz: 0.01,
            anzeige: tz(exakt, 2),
            fehler: [{ wert: `${K0}*${qr}^${n}`, meldung: "Das ist das Ergebnis mit dem gerundeten Faktor. Rechne mit dem vollen Faktor." }],
          },
          { typ: "zahl", label: "b) Abweichung", einheit: "Euro", loesung: `abs(${K0}*${q}^${n} - ${K0}*${qr}^${n})`, toleranz: 0.5, anzeige: String(Math.round(diff)) },
        ],
        hinweis: "Zinseszins: K = K0 · q^n mit dem vollen Faktor q = 1 + p/100.",
        loesung: `**Ansatz:** Zinseszins $K = ${K0}\\cdot ${tz(q)}^{${n}}$.\n---\na) $K \\approx ${tz(exakt, 2)}$ Euro.\n---\nb) Mit dem gerundeten Faktor: $${K0}\\cdot ${tz(qr)}^{${n}} \\approx ${tz(gerundet, 2)}$ Euro. Die Abweichung beträgt etwa $${Math.round(diff)}$ Euro.\n---\nFolgerung: Zwischenergebnisse im Rechner behalten und erst am Ende runden.`,
      };
    },
  }),
  drill({
    id: "ps-d-zeitplan-ende",
    kapitel: K,
    titel: "Wann sollte ein Beispiel fertig sein?",
    niveau: 3,
    erzeuge: (r) => {
      const reserve = r.wahl([10, 15]);
      const k = r.int(1, 3);
      const B = 120 - 5 - reserve;
      const mpp = B / 40;
      const ende = 5 + k * 10 * mpp;
      return {
        angabe: `Eine Prüfung hat vier Beispiele zu je $10$ Punkten und dauert $120$ Minuten. Du planst $5$ Minuten zum Lesen und $${reserve}$ Minuten Reserve am Ende. In welcher Minute nach Prüfungsbeginn solltest du laut Plan mit dem ${k === 1 ? "ersten" : k === 2 ? "zweiten" : "dritten"} Beispiel deiner Reihenfolge fertig sein? Runde auf eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            label: "Minute",
            loesung: `5 + ${k}*10*${B}/40`,
            toleranz: 0.06,
            fehler: [{ wert: `${k}*10*${B}/40`, meldung: "Die Lesezeit am Anfang fehlt. Die Bearbeitung beginnt erst in Minute 5." }],
          },
        ],
        hinweis: "Minuten pro Punkt = Bearbeitungszeit / 40. Ein Beispiel dauert 10-mal so lange. Die Lesezeit kommt am Anfang dazu.",
        loesung: `**Ansatz:** Budget pro Punkt berechnen, dann die Zeiten der Reihe nach aufaddieren.\n---\nBearbeitungszeit $120 - 5 - ${reserve} = ${B}$ Minuten, also $\\tfrac{${B}}{40} = ${tz(mpp, 3)}$ Minuten pro Punkt und $${tz(10 * mpp, 2)}$ Minuten pro Beispiel.\n---\nEnde von Beispiel ${k}: $5 + ${k}\\cdot ${tz(10 * mpp, 2)} = ${tz(ende, 2)}$, also etwa Minute $${tz(ende, 1)}$.`,
      };
    },
  }),
];
