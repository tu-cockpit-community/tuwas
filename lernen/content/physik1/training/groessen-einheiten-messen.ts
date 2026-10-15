import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "groessen-einheiten-messen";

/** Stichproben-Standardabweichung (Teilen durch n - 1), wie mathjs std(). */
function stdAbw(werte: number[]): number {
  const m = werte.reduce((a, b) => a + b, 0) / werte.length;
  return Math.sqrt(werte.reduce((a, b) => a + (b - m) ** 2, 0) / (werte.length - 1));
}

export const DRILLS: Drill[] = [
  drill({
    id: "p1-d-kmh-ms",
    kapitel: K,
    titel: "km/h in m/s",
    niveau: 1,
    erzeuge: (r) => {
      const v = r.int(2, 60) * 3.6 * r.wahl([1, 1, 0.5] as const);
      return {
        angabe: `Rechne $${tz(v)}\\,\\text{km/h}$ in m/s um.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${v}/3.6`,
            einheit: "m/s",
            fehler: [{ wert: `${v}*3.6`, meldung: "Du hast mit $3{,}6$ multipliziert. Der Zahlenwert in m/s ist immer der **kleinere**, denn in einer Sekunde kommt man weniger weit als in einer Stunde." }],
          },
        ],
        hinweis: "Ein Kilometer hat 1000 m, eine Stunde 3600 s. Also durch 3,6 teilen.",
        loesung: `**Ansatz:** Einheiten ersetzen: $1\\,\\text{km/h} = \\dfrac{1000\\,\\text{m}}{3600\\,\\text{s}} = \\dfrac{1}{3{,}6}\\,\\text{m/s}$.\n---\n**Rechnung:** $${tz(v)}\\,\\text{km/h} = \\dfrac{${tz(v)}}{3{,}6}\\,\\text{m/s} = ${tz(v / 3.6)}\\,\\text{m/s}$. Probe: $${tz(v / 3.6)}\\cdot 3{,}6 = ${tz(v)}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-ms-kmh",
    kapitel: K,
    titel: "m/s in km/h",
    niveau: 1,
    erzeuge: (r) => {
      const v = r.int(5, 400) / 10;
      return {
        angabe: `Rechne $${tz(v)}\\,\\text{m/s}$ in km/h um.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${v}*3.6`,
            einheit: "km/h",
            fehler: [{ wert: `${v}/3.6`, meldung: "Du hast durch $3{,}6$ geteilt. In km/h muss die Zahl **größer** werden, denn in einer Stunde kommt man viel weiter als in einer Sekunde." }],
          },
        ],
        hinweis: "1 m/s = 3,6 km/h.",
        loesung: `**Ansatz:** $1\\,\\text{m/s} = \\dfrac{0{,}001\\,\\text{km}}{\\tfrac{1}{3600}\\,\\text{h}} = 3{,}6\\,\\text{km/h}$.\n---\n**Rechnung:** $${tz(v)}\\,\\text{m/s} = ${tz(v)}\\cdot 3{,}6\\,\\text{km/h} = ${tz(v * 3.6)}\\,\\text{km/h}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-vorsilbe",
    kapitel: K,
    titel: "Vorsilben in Zehnerpotenzen",
    niveau: 1,
    erzeuge: (r) => {
      const [name, zeichen, exp] = r.wahl([
        ["Kilo", "k", 3],
        ["Mega", "M", 6],
        ["Giga", "G", 9],
        ["Milli", "m", -3],
        ["Mikro", "\\mu", -6],
        ["Nano", "n", -9],
        ["Zenti", "c", -2],
        ["Piko", "p", -12],
      ] as const);
      // Zenti ist praktisch nur beim Meter üblich (cm), nicht bei cs, cW, cJ oder cA
      const [einheit] = zeichen === "c" ? (["m"] as const) : r.wahl([["m"], ["s"], ["W"], ["J"], ["A"]] as const);
      const z = r.int(11, 999) / 10;
      const zeichenTex = zeichen === "\\mu" ? `\\mu\\text{${einheit}}` : `\\text{${zeichen}${einheit}}`;
      const verwechselt = exp === -2 ? -3 : exp > 0 ? exp - 3 : exp + 3;
      return {
        angabe: `Schreibe $${tz(z)}\\,${zeichenTex}$ in der Grundeinheit ${einheit} (Zahl eingeben, Zehnerpotenzen mit e, zum Beispiel $7{,}5\\cdot 10^{-4}$ als 7,5e-4).`,
        teile: [
          {
            typ: "zahl",
            loesung: `${z}*10^(${exp})`,
            einheit,
            // relative 0,5 %; die feste Untergrenze 1e-6 der Standardtoleranz wuerde kleine Werte nicht trennen
            toleranz: z * 10 ** exp * 0.005,
            fehler: [{ wert: `${z}*10^(${verwechselt})`, meldung: "Du hast die Vorsilbe mit einer benachbarten verwechselt. Präge dir die Liste ein: Piko $10^{-12}$, Nano $10^{-9}$, Mikro $10^{-6}$, Milli $10^{-3}$, Zenti $10^{-2}$, Kilo $10^{3}$, Mega $10^{6}$, Giga $10^{9}$." }],
          },
        ],
        hinweis: `${name} steht für eine Zehnerpotenz. Ersetze das Zeichen durch sie.`,
        loesung: `**Ansatz:** ${name} bedeutet $10^{${exp}}$.\n---\n**Ersetzen:** $${tz(z)}\\,${zeichenTex} = ${tz(z)}\\cdot 10^{${exp}}\\,\\text{${einheit}}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-flaeche-volumen",
    kapitel: K,
    titel: "Flächen- und Volumeneinheiten",
    niveau: 2,
    erzeuge: (r) => {
      const fall = r.wahl(["cm2", "mm2", "cm3", "L", "dm3"] as const);
      const z = r.int(2, 900);
      const daten = {
        cm2: { tex: "\\text{cm}^2", ziel: "m²", zielTex: "\\text{m}^2", f: "1e-4", falsch: "1e-2", hin: "1\\,\\text{cm}^2 = (10^{-2}\\,\\text{m})^2 = 10^{-4}\\,\\text{m}^2" },
        mm2: { tex: "\\text{mm}^2", ziel: "m²", zielTex: "\\text{m}^2", f: "1e-6", falsch: "1e-3", hin: "1\\,\\text{mm}^2 = (10^{-3}\\,\\text{m})^2 = 10^{-6}\\,\\text{m}^2" },
        cm3: { tex: "\\text{cm}^3", ziel: "m³", zielTex: "\\text{m}^3", f: "1e-6", falsch: "1e-2", hin: "1\\,\\text{cm}^3 = (10^{-2}\\,\\text{m})^3 = 10^{-6}\\,\\text{m}^3" },
        L: { tex: "\\text{L}", ziel: "m³", zielTex: "\\text{m}^3", f: "1e-3", falsch: "1e-1", hin: "1\\,\\text{L} = 1\\,\\text{dm}^3 = (10^{-1}\\,\\text{m})^3 = 10^{-3}\\,\\text{m}^3" },
        dm3: { tex: "\\text{dm}^3", ziel: "m³", zielTex: "\\text{m}^3", f: "1e-3", falsch: "1e-1", hin: "1\\,\\text{dm}^3 = (10^{-1}\\,\\text{m})^3 = 10^{-3}\\,\\text{m}^3" },
      }[fall];
      return {
        angabe: `Rechne $${z}\\,${daten.tex}$ in ${daten.ziel} um.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${z}*${daten.f}`,
            einheit: daten.ziel,
            fehler: [{ wert: `${z}*${daten.falsch}`, meldung: "Du hast nur die Länge umgerechnet. Bei Flächen- und Volumeneinheiten wird die Vorsilbe **mitpotenziert**, also hoch zwei oder hoch drei genommen." }],
          },
        ],
        hinweis: "Die Vorsilbe wird mitpotenziert.",
        loesung: `**Ansatz:** Die Vorsilbe wird mit der Einheit potenziert: $${daten.hin}$.\n---\n**Rechnung:** $${z}\\,${daten.tex} = ${z}\\cdot 10^{${daten.f.slice(2)}}\\,${daten.zielTex}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-dichte",
    kapitel: K,
    titel: "Dichte g/cm³ in kg/m³",
    niveau: 1,
    erzeuge: (r) => {
      const rho = r.int(5, 220) / 10;
      return {
        angabe: `Ein Stoff hat die Dichte $${tz(rho)}\\,\\text{g/cm}^3$. Gib sie in kg/m³ an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${rho}*1000`,
            einheit: "kg/m³",
            fehler: [{ wert: `${rho}/1000`, meldung: "Du hast geteilt. Ein Kubikmeter hat eine Million Kubikzentimeter, aber nur tausendmal so viel Gramm wie Kilogramm. Insgesamt wird die Zahl also **tausendmal größer**." }],
          },
        ],
        hinweis: "Ersetze g durch 10⁻³ kg und cm³ durch 10⁻⁶ m³.",
        loesung: `**Ansatz:** Zähler und Nenner einzeln ersetzen: $1\\,\\text{g/cm}^3 = \\dfrac{10^{-3}\\,\\text{kg}}{10^{-6}\\,\\text{m}^3} = 1000\\,\\text{kg/m}^3$.\n---\n**Rechnung:** $${tz(rho)}\\,\\text{g/cm}^3 = ${tz(rho * 1000)}\\,\\text{kg/m}^3$. Zum Vergleich: Wasser hat $1000\\,\\text{kg/m}^3$.`,
      };
    },
  }),
  drill({
    id: "p1-d-vektor-betrag",
    kapitel: K,
    titel: "Betrag und Winkel eines Kraftvektors",
    niveau: 2,
    erzeuge: (r) => {
      const [a, b] = r.wahl([[3, 4], [6, 8], [5, 12], [8, 15], [9, 12], [12, 16], [7, 24], [20, 21]] as const);
      const fx = a * r.int(1, 3);
      const fy = b * (fx / a);
      return {
        angabe: `Eine Kraft hat die Komponenten $F_x = ${fx}\\,\\text{N}$ und $F_y = ${fy}\\,\\text{N}$. Berechne den Betrag in N und den Winkel zur $x$-Achse in Grad.`,
        teile: [
          {
            typ: "zahl",
            label: "Betrag",
            loesung: `sqrt(${fx}^2+${fy}^2)`,
            einheit: "N",
            fehler: [{ wert: `${fx + fy}`, meldung: "Komponenten stehen senkrecht aufeinander, man darf sie nicht einfach addieren. Verwende den Satz des Pythagoras." }],
          },
          {
            typ: "zahl",
            label: "Winkel in Grad",
            loesung: `inGrad(atan(${fy}/${fx}))`,
            einheit: "°",
            fehler: [{ wert: `inGrad(atan(${fx}/${fy}))`, meldung: "Das ist der Winkel zur $y$-Achse. Für den Winkel zur $x$-Achse gilt $\\tan\\alpha = F_y/F_x$." }],
          },
        ],
        hinweis: "Pythagoras für den Betrag, Tangens für den Winkel.",
        loesung: `**Betrag:** $F = \\sqrt{${fx}^2 + ${fy}^2}\\,\\text{N} = ${tz(Math.hypot(fx, fy))}\\,\\text{N}$.\n---\n**Winkel:** $\\tan\\alpha = \\dfrac{${fy}\\,\\text{N}}{${fx}\\,\\text{N}}$, also $\\alpha = ${tz((Math.atan(fy / fx) * 180) / Math.PI, 1)}^\\circ$. Beide Komponenten sind positiv, der Winkel liegt im ersten Quadranten.`,
      };
    },
  }),
  drill({
    id: "p1-d-komponenten",
    kapitel: K,
    titel: "Kraft in Komponenten zerlegen",
    niveau: 2,
    erzeuge: (r) => {
      const F = r.int(2, 40) * 10;
      const w = r.wahl([15, 20, 25, 30, 35, 40, 50, 55, 60, 70] as const);
      const fx = F * Math.cos((w * Math.PI) / 180);
      const fy = F * Math.sin((w * Math.PI) / 180);
      return {
        angabe: `Eine Kraft von $${F}\\,\\text{N}$ wirkt unter $${w}^\\circ$ gegen die Waagrechte. Berechne die waagrechte und die senkrechte Komponente in N.`,
        teile: [
          {
            typ: "zahl",
            label: "waagrecht",
            loesung: `${F}*cos(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${F}*sin(inRad(${w}))`, meldung: "Sinus und Kosinus vertauscht. Die waagrechte Komponente liegt am Winkel an, sie ist die Ankathete, also Kosinus." }],
          },
          {
            typ: "zahl",
            label: "senkrecht",
            loesung: `${F}*sin(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${F}*cos(inRad(${w}))`, meldung: "Sinus und Kosinus vertauscht. Die senkrechte Komponente liegt dem Winkel gegenüber, also Sinus." }],
          },
        ],
        hinweis: "Waagrecht: Ankathete, also Kosinus. Senkrecht: Gegenkathete, also Sinus.",
        loesung: `**Ansatz:** Die Kraft ist die Hypotenuse, die Komponenten sind die Katheten.\n---\n$F_x = ${F}\\,\\text{N}\\cdot\\cos ${w}^\\circ = ${tz(fx, 1)}\\,\\text{N}$ und $F_y = ${F}\\,\\text{N}\\cdot\\sin ${w}^\\circ = ${tz(fy, 1)}\\,\\text{N}$.\n---\n**Probe:** $\\sqrt{${tz(fx, 1)}^2 + ${tz(fy, 1)}^2}\\,\\text{N} \\approx ${F}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-laufzeit",
    kapitel: K,
    titel: "Entfernung aus der Echolaufzeit",
    niveau: 2,
    erzeuge: (r) => {
      const [medium, v] = r.wahl([
        ["Luft (Schall)", 340],
        ["Wasser (Schall)", 1480],
        ["Vakuum (Licht)", 3e8],
      ] as const);
      const imMedium = medium.startsWith("Vakuum") ? `im ${medium}` : `in ${medium}`;
      const t = v > 1e6 ? r.int(1, 90) * 1e-7 : r.int(2, 60) / 10;
      const ttex = v > 1e6 ? `${tz(t * 1e6)}\\,\\mu\\text{s}` : `${tz(t)}\\,\\text{s}`;
      const vtex = v > 1e6 ? "3{,}00\\cdot 10^{8}" : `${v}`;
      return {
        angabe: `Ein Signal ${imMedium} mit der Geschwindigkeit $${vtex}\\,\\text{m/s}$ kommt nach $${ttex}$ als Echo zurück. Wie weit ist das reflektierende Objekt entfernt (in m)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${v}*${t}/2`,
            einheit: "m",
            fehler: [{ wert: `${v}*${t}`, meldung: "Das ist der Weg hin **und** zurück. Der Abstand ist die Hälfte davon." }],
          },
        ],
        hinweis: "Das Signal läuft hin und zurück.",
        loesung: `**Ansatz:** Hin- und Rückweg zusammen sind $2d = v\\,t$, also $d = \\dfrac{v\\,t}{2}$.\n---\n**Rechnung:** $d = \\dfrac{${vtex}\\,\\text{m/s}\\cdot ${ttex}}{2} = ${tz((v * t) / 2, 2)}\\,\\text{m}$. Die Sekunden kürzen sich.`,
      };
    },
  }),
  drill({
    id: "p1-d-mikrometer",
    kapitel: K,
    titel: "Mikrometerschraube ablesen",
    niveau: 1,
    erzeuge: (r) => {
      const huelse = r.int(2, 40) / 2;
      const trommel = r.int(1, 49);
      return {
        angabe: `Eine Mikrometerschraube hat $0{,}5\\,\\text{mm}$ Gewindesteigung und eine Trommel mit $50$ Teilen. Auf der Hülse sind die Striche bis $${tz(huelse)}\\,\\text{mm}$ sichtbar, die Trommel zeigt $${trommel}$. Wie lautet der Messwert in mm?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${huelse}+${trommel}*0.01`,
            einheit: "mm",
            toleranz: 0.005, // auf 0,01 mm genau; sonst laege bei kleiner Trommelzahl das Fehlerbild in der Toleranz
            fehler: [{ wert: `${huelse}+${trommel}*0.1`, meldung: "Ein Trommelteil ist $0{,}5\\,\\text{mm}/50 = 0{,}01\\,\\text{mm}$, nicht $0{,}1\\,\\text{mm}$." }],
          },
        ],
        hinweis: "Ein Trommelteil entspricht 0,5 mm / 50 = 0,01 mm.",
        loesung: `**Ansatz:** Ein Trommelteil ist $\\dfrac{0{,}5\\,\\text{mm}}{50} = 0{,}01\\,\\text{mm}$.\n---\n**Messwert:** $${tz(huelse)}\\,\\text{mm} + ${trommel}\\cdot 0{,}01\\,\\text{mm} = ${tz(huelse + trommel * 0.01, 2)}\\,\\text{mm}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-relativ",
    kapitel: K,
    titel: "Relative Unsicherheit",
    niveau: 1,
    erzeuge: (r) => {
      const x = r.int(20, 500) / 10;
      const dx = r.wahl([0.1, 0.2, 0.5] as const);
      return {
        angabe: `Ein Messwert lautet $(${tz(x)} \\pm ${tz(dx)})\\,\\text{cm}$. Wie groß ist die relative Unsicherheit in Prozent? Runde auf drei signifikante Stellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${dx}/${x}*100`,
            einheit: "%",
            fehler: [
              { wert: `${dx}/${x}`, meldung: "Das ist die relative Unsicherheit als Dezimalzahl. Für Prozent mit $100$ multiplizieren." },
              { wert: `${x}/${dx}*100`, meldung: "Du hast den Kehrwert gebildet. Relative Unsicherheit ist Unsicherheit **durch** Messwert." },
            ],
          },
        ],
        hinweis: "Relative Unsicherheit = absolute Unsicherheit durch Messwert, mal 100 %.",
        loesung: `**Ansatz:** $\\dfrac{\\Delta x}{x}$, die Zentimeter kürzen sich.\n---\n**Rechnung:** $\\dfrac{${tz(dx)}\\,\\text{cm}}{${tz(x)}\\,\\text{cm}} = ${tz(dx / x, 5)} = ${tz((dx / x) * 100, 2)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "p1-d-mittelwert-std",
    kapitel: K,
    titel: "Messreihe: Mittelwert und Standardabweichung",
    niveau: 2,
    erzeuge: (r) => {
      const basis = r.int(150, 250) / 100;
      const abw = r.mische([-0.03, -0.01, 0, 0.02, 0.02]);
      const werte = abw.map((d) => Number((basis + d).toFixed(2)));
      const liste = werte.join(", ");
      const m = werte.reduce((a, b) => a + b, 0) / werte.length;
      const s = stdAbw(werte);
      return {
        angabe: `Fünf Messungen einer Schwingungsdauer ergeben (in s): $${werte.map((w) => tz(w)).join("$; $")}$. Berechne Mittelwert, Standardabweichung (Teilen durch $n - 1$) und Unsicherheit des Mittelwerts in s.`,
        teile: [
          { typ: "zahl", label: "Mittelwert", loesung: `mean([${liste}])`, einheit: "s" },
          {
            typ: "zahl",
            label: "Standardabweichung",
            loesung: `std([${liste}])`,
            einheit: "s",
            toleranz: 0.0005,
            fehler: [{ wert: `std([${liste}], "uncorrected")`, meldung: "Du hast durch $n = 5$ geteilt. Bei einer Messreihe teilt man durch $n - 1 = 4$." }],
          },
          {
            typ: "zahl",
            label: "Unsicherheit des Mittelwerts",
            loesung: `std([${liste}])/sqrt(5)`,
            einheit: "s",
            toleranz: 0.0005,
            fehler: [{ wert: `std([${liste}])/5`, meldung: "Geteilt wird durch $\\sqrt n = \\sqrt5$, nicht durch $n$." }],
          },
        ],
        hinweis: "Erst den Mittelwert, dann die Abweichungen quadrieren, addieren, durch 4 teilen, Wurzel. Zuletzt durch √5.",
        loesung: `**Mittelwert:** Summe durch Anzahl, $\\bar T = ${tz(m, 3)}\\,\\text{s}$.\n---\n**Standardabweichung:** $s = \\sqrt{\\dfrac{\\sum (T_i - \\bar T)^2}{4}} = ${tz(s, 4)}\\,\\text{s}$.\n---\n**Unsicherheit des Mittelwerts:** $\\Delta\\bar T = \\dfrac{s}{\\sqrt5} = ${tz(s / Math.sqrt(5), 4)}\\,\\text{s}$. Ergebnis: $T = (${tz(m, 3)} \\pm ${tz(Math.ceil((s / Math.sqrt(5)) * 1000) / 1000, 3)})\\,\\text{s}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-fehler-quotient",
    kapitel: K,
    titel: "Unsicherheit einer Geschwindigkeit",
    niveau: 2,
    erzeuge: (r) => {
      const s = r.int(20, 200);
      const ds = r.wahl([0.1, 0.2, 0.5] as const);
      const t = r.int(40, 300) / 10;
      const dt = r.wahl([0.1, 0.2] as const);
      const v = s / t;
      const rel = ds / s + dt / t;
      return {
        angabe: `Eine Strecke $s = (${s} \\pm ${tz(ds)})\\,\\text{m}$ wird in $t = (${tz(t)} \\pm ${tz(dt)})\\,\\text{s}$ zurückgelegt. Berechne $v$ und die Größtunsicherheit $\\Delta v$ in m/s, beide auf drei Nachkommastellen.`,
        teile: [
          { typ: "zahl", label: "v", loesung: `${s}/${t}`, einheit: "m/s" },
          {
            typ: "zahl",
            label: "Δv",
            loesung: `${s}/${t}*(${ds}/${s}+${dt}/${t})`,
            einheit: "m/s",
            toleranz: 0.002,
            // Fehlerbild nur, wenn es sich deutlich von der Lösung unterscheidet (sonst würde der Fehler als richtig gelten)
            fehler: Math.abs(rel * v - (ds + dt)) > 0.01 ? [{ wert: `${ds}+${dt}`, meldung: "Meter und Sekunden kann man nicht addieren. Beim Quotienten addiert man die **relativen** Unsicherheiten." }] : [],
          },
        ],
        hinweis: "Beim Quotienten addieren sich die relativen Unsicherheiten. Dann mit v multiplizieren.",
        loesung: `**Wert:** $v = \\dfrac{${s}\\,\\text{m}}{${tz(t)}\\,\\text{s}} = ${tz(v, 3)}\\,\\text{m/s}$.\n---\n**Relativ:** $\\dfrac{${tz(ds)}}{${s}} + \\dfrac{${tz(dt)}}{${tz(t)}} = ${tz(rel * 100, 2)}\\,\\%$.\n---\n**Absolut:** $\\Delta v = ${tz(rel, 4)}\\cdot ${tz(v, 3)}\\,\\text{m/s} = ${tz(rel * v, 3)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-fehler-potenz",
    kapitel: K,
    titel: "Unsicherheit bei einer Potenz",
    niveau: 2,
    erzeuge: (r) => {
      const [form, n, groesse] = r.wahl([
        ["das Kugelvolumen $V = \\tfrac{\\pi}{6}d^3$", 3, "Durchmesser"],
        ["das Würfelvolumen $V = a^3$", 3, "Kantenlänge"],
        ["die Kreisfläche $A = \\pi r^2$", 2, "Radius"],
        ["die Fallhöhe $h = \\tfrac12 g t^2$", 2, "Fallzeit"],
      ] as const);
      const p = r.wahl([0.5, 0.8, 1.2, 1.5, 2, 2.5] as const);
      return {
        angabe: `Für ${form} wird die Größe „${groesse}“ mit einer relativen Unsicherheit von $${tz(p)}\\,\\%$ gemessen. Wie groß ist die relative Unsicherheit des Ergebnisses in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n}*${p}`,
            einheit: "%",
            fehler: [{ wert: `${p}`, meldung: `Die Größe steht hoch ${n} in der Formel. Die relative Unsicherheit wird mit dem Exponenten multipliziert.` }],
          },
        ],
        hinweis: "Bei einer Potenz xⁿ wird die relative Unsicherheit mit n multipliziert. Konstante Faktoren tragen nichts bei.",
        loesung: `**Ansatz:** Potenzregel, $\\dfrac{\\Delta(x^n)}{x^n} = n\\cdot\\dfrac{\\Delta x}{x}$. Zahlen wie $\\pi$ oder $g$ als exakt angenommen tragen nichts bei.\n---\n**Rechnung:** $${n}\\cdot ${tz(p)}\\,\\% = ${tz(n * p)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "p1-d-proportional",
    kapitel: K,
    titel: "Proportionalitätsschluss",
    niveau: 2,
    erzeuge: (r) => {
      const [text, n, nTex, gr] = r.wahl([
        ["Der Bremsweg ist proportional zu $v^2$", 2, "2", "Geschwindigkeit $v$"],
        ["Das Volumen einer Kugel ist proportional zu $r^3$", 3, "3", "Radius $r$"],
        ["Die Schwingungsdauer eines Pendels ist proportional zu $\\sqrt l$", 0.5, "\\tfrac12", "Fadenlänge $l$"],
        ["Die Fläche eines Quadrats ist proportional zu $a^2$", 2, "2", "Seitenlänge $a$"],
      ] as const);
      const c = r.wahl([2, 3, 4, 9] as const);
      return {
        angabe: `${text}. Die ${gr} wird mit dem Faktor $${c}$ multipliziert. Um welchen Faktor ändert sich das Ergebnis? Runde auf zwei Nachkommastellen, falls nötig.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c}^${n}`,
            fehler: [{ wert: `${c}`, meldung: "Das Ergebnis ist nicht direkt proportional, sondern zu einer **Potenz** der Größe. Der Faktor wird mit dieser Potenz genommen." }],
          },
        ],
        hinweis: "Ist y proportional zu xⁿ, dann wird y bei c-fachem x um cⁿ größer.",
        loesung: `**Ansatz:** Aus $y \\propto x^{${nTex}}$ folgt: Wird $x$ mit $${c}$ multipliziert, wird $y$ mit $${c}^{${nTex}}$ multipliziert.\n---\n**Rechnung:** $${c}^{${nTex}} = ${tz(c ** n, 3)}$.`,
      };
    },
  }),
  drill({
    id: "p1-d-pendel-g",
    kapitel: K,
    titel: "Fallbeschleunigung aus einer linearisierten Pendelmessung",
    niveau: 3,
    erzeuge: (r) => {
      const g = r.wahl([9.7, 9.75, 9.8, 9.85, 9.9] as const);
      const l1 = r.wahl([0.2, 0.3, 0.4] as const);
      const l2 = r.wahl([0.8, 0.9, 1.0, 1.2] as const);
      const k = (4 * Math.PI ** 2) / g;
      const T1 = Number(Math.sqrt(k * l1).toFixed(3));
      const T2 = Number(Math.sqrt(k * l2).toFixed(3));
      const kAus = `(${T2}^2-${T1}^2)/(${l2}-${l1})`;
      return {
        angabe: `Ein Fadenpendel wird bei zwei Längen gemessen: $l_1 = ${tz(l1)}\\,\\text{m}$ mit $T_1 = ${tz(T1)}\\,\\text{s}$ und $l_2 = ${tz(l2)}\\,\\text{m}$ mit $T_2 = ${tz(T2)}\\,\\text{s}$. Es gilt $T^2 = \\dfrac{4\\pi^2}{g}\\,l$. Bestimme die Steigung $k$ im $T^2$-$l$-Diagramm in $\\text{s}^2/\\text{m}$ und daraus $g$ in $\\text{m/s}^2$.`,
        teile: [
          {
            typ: "zahl",
            label: "Steigung k",
            loesung: kAus,
            einheit: "s²/m",
            fehler: [{ wert: `(${T2}-${T1})/(${l2}-${l1})`, meldung: "Du hast die Steigung im $T$-$l$-Diagramm berechnet. Linearisiert wird mit $T^2$, also musst du die Schwingungsdauern quadrieren." }],
          },
          {
            typ: "zahl",
            label: "g",
            loesung: `4*pi^2/(${kAus})`,
            einheit: "m/s²",
            fehler: [{ wert: `${kAus}/(4*pi^2)`, meldung: "Kehrwert. Aus $k = 4\\pi^2/g$ folgt $g = 4\\pi^2/k$." }],
          },
        ],
        hinweis: "Quadriere beide Schwingungsdauern. Die Steigung ist ΔT² / Δl, dann g = 4π²/k.",
        loesung: `**Linearisieren:** $T_1^2 = ${tz(T1 ** 2, 3)}\\,\\text{s}^2$ und $T_2^2 = ${tz(T2 ** 2, 3)}\\,\\text{s}^2$.\n---\n**Steigung:** $k = \\dfrac{${tz(T2 ** 2, 3)}\\,\\text{s}^2 - ${tz(T1 ** 2, 3)}\\,\\text{s}^2}{${tz(l2)}\\,\\text{m} - ${tz(l1)}\\,\\text{m}} = ${tz((T2 ** 2 - T1 ** 2) / (l2 - l1), 3)}\\,\\text{s}^2/\\text{m}$.\n---\n**Fallbeschleunigung:** $g = \\dfrac{4\\pi^2}{k} = ${tz((4 * Math.PI ** 2 * (l2 - l1)) / (T2 ** 2 - T1 ** 2), 2)}\\,\\text{m/s}^2$. Die Einheit stimmt: $1/(\\text{s}^2/\\text{m}) = \\text{m/s}^2$.`,
      };
    },
  }),
];
