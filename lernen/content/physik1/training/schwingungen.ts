import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "schwingungen";
const G = 9.81;
const PI2 = 2 * Math.PI;

type Fehler = { wert: string; meldung: string };
/** Fehlerbilder nur behalten, wenn ihr Wert deutlich (> 2 %) von der richtigen Lösung abweicht. */
function nurUnterscheidbar(richtig: number, kandidaten: [number, string, string][]): Fehler[] {
  return kandidaten
    .filter(([w]) => Number.isFinite(w) && Math.abs(w - richtig) > 0.02 * Math.abs(richtig) + 1e-9)
    .map(([, wert, meldung]) => ({ wert, meldung }));
}

export const DRILLS: Drill[] = [
  drill({
    id: "p7-d-periode",
    kapitel: K,
    titel: "Periode und Frequenz aus einer Messung",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.wahl([10, 20, 25, 50] as const);
      const t = r.int(50, 600) / 10;
      const T = t / n;
      return {
        angabe: `Ein Pendel macht ${n} vollständige Schwingungen in $${tz(t)}\\,\\text{s}$. Berechne die Periodendauer in s und die Frequenz in Hz.`,
        teile: [
          {
            typ: "zahl",
            label: "Periodendauer",
            loesung: `${t}/${n}`,
            einheit: "s",
            fehler: nurUnterscheidbar(T, [[n / t, `${n}/${t}`, "Du hast Schwingungen durch Zeit geteilt. Das ist die Frequenz. Die Periodendauer ist die Zeit **für eine** Schwingung."]]),
          },
          {
            typ: "zahl",
            label: "Frequenz",
            loesung: `${n}/${t}`,
            einheit: "Hz",
            fehler: nurUnterscheidbar(1 / T, [[T, `${t}/${n}`, "Das ist die Periodendauer. Die Frequenz ist ihr Kehrwert, die Zahl der Schwingungen pro Sekunde."]]),
          },
        ],
        hinweis: "Die Periodendauer ist die Gesamtzeit geteilt durch die Zahl der Schwingungen. Die Frequenz ist ihr Kehrwert.",
        loesung: `**Periodendauer:** ${n} Schwingungen dauern $${tz(t)}\\,\\text{s}$, eine also $T = \\dfrac{${tz(t)}\\,\\text{s}}{${n}} = ${tz(T, 4)}\\,\\text{s}$.\n---\n**Frequenz:** $f = \\dfrac{1}{T} = ${tz(1 / T, 4)}\\,\\text{Hz}$. Kontrolle: Das ist auch direkt $${n} : ${tz(t)}\\,\\text{s}$, also Schwingungen pro Sekunde.`,
      };
    },
  }),
  drill({
    id: "p7-d-federpendel",
    kapitel: K,
    titel: "Schwingungsdauer des Federpendels",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(1, 40) / 10;
      const D = r.int(1, 50) * 10;
      const T = PI2 * Math.sqrt(m / D);
      return {
        angabe: `Eine Masse von $${tz(m)}\\,\\text{kg}$ schwingt an einer Feder mit $D = ${D}\\,\\text{N/m}$. Berechne die Schwingungsdauer in s.`,
        teile: [
          {
            typ: "zahl",
            loesung: `2*pi*sqrt(${m}/${D})`,
            einheit: "s",
            fehler: nurUnterscheidbar(T, [
              [PI2 * Math.sqrt(D / m), `2*pi*sqrt(${D}/${m})`, "Du hast den Bruch umgedreht. Unter der Wurzel steht $m/D$, denn eine größere Masse schwingt langsamer."],
              [Math.sqrt(m / D), `sqrt(${m}/${D})`, "Der Faktor $2\\pi$ fehlt. Es gilt $T = 2\\pi\\sqrt{m/D}$."],
            ]),
          },
        ],
        hinweis: "T = 2π·√(m/D) mit m in kg und D in N/m.",
        loesung: `**Ansatz:** Für das Federpendel gilt $T = 2\\pi\\sqrt{m/D}$.\n---\n**Rechnung:** $\\dfrac{m}{D} = \\dfrac{${tz(m)}\\,\\text{kg}}{${D}\\,\\text{N/m}} = ${tz(m / D, 5)}\\,\\text{s}^2$, also $T = 2\\pi\\cdot ${tz(Math.sqrt(m / D), 4)}\\,\\text{s} = ${tz(T, 3)}\\,\\text{s}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-federkonstante",
    kapitel: K,
    titel: "Federkonstante aus der Schwingungsdauer",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 30) / 10;
      const T = r.int(2, 30) / 10;
      const D = (4 * Math.PI ** 2 * m) / (T * T);
      return {
        angabe: `Ein Körper von $${tz(m)}\\,\\text{kg}$ schwingt an einer Feder mit der Periodendauer $T = ${tz(T)}\\,\\text{s}$. Wie groß ist die Federkonstante in N/m?`,
        teile: [
          {
            typ: "zahl",
            loesung: `4*pi^2*${m}/${T}^2`,
            einheit: "N/m",
            fehler: nurUnterscheidbar(D, [
              [(4 * Math.PI ** 2 * m) / T, `4*pi^2*${m}/${T}`, "Du hast $T$ nicht quadriert. Nach dem Quadrieren von $T = 2\\pi\\sqrt{m/D}$ steht $T^2$ im Nenner."],
              [(PI2 * m) / (T * T), `2*pi*${m}/${T}^2`, "Auch $2\\pi$ muss quadriert werden, $(2\\pi)^2 = 4\\pi^2$."],
            ]),
          },
        ],
        hinweis: "T = 2π√(m/D) quadrieren und nach D auflösen: D = 4π²m/T².",
        loesung: `**Ansatz:** Quadrieren von $T = 2\\pi\\sqrt{m/D}$ ergibt $T^2 = 4\\pi^2 m/D$. Mit $D$ multiplizieren und durch $T^2$ teilen: $D = \\dfrac{4\\pi^2 m}{T^2}$.\n---\n**Rechnung:** $D = \\dfrac{39{,}48\\cdot ${tz(m)}\\,\\text{kg}}{(${tz(T)}\\,\\text{s})^2} = ${tz(D, 2)}\\,\\text{N/m}$.\n---\n**Probe:** $2\\pi\\sqrt{${tz(m)}/${tz(D, 2)}}\\,\\text{s} = ${tz(PI2 * Math.sqrt(m / D), 3)}\\,\\text{s}$. ✓`,
      };
    },
  }),
  drill({
    id: "p7-d-fadenpendel",
    kapitel: K,
    titel: "Schwingungsdauer des Fadenpendels",
    niveau: 1,
    erzeuge: (r) => {
      const l = r.int(10, 300) / 100;
      const [ort, g] = r.wahl([
        ["auf der Erde", 9.81],
        ["auf dem Mond", 1.62],
        ["auf dem Mars", 3.71],
      ] as const);
      const T = PI2 * Math.sqrt(l / g);
      const kand: [number, string, string][] = [[PI2 * Math.sqrt(g / l), `2*pi*sqrt(${g}/${l})`, "Du hast den Bruch umgedreht. Ein längeres Pendel schwingt langsamer, also steht $l$ im Zähler."]];
      if (g !== 9.81) kand.push([PI2 * Math.sqrt(l / 9.81), `2*pi*sqrt(${l}/9.81)`, "Das ist die Schwingungsdauer auf der Erde. Setze das $g$ des jeweiligen Himmelskörpers ein."]);
      return {
        angabe: `Ein Fadenpendel der Länge $${tz(l)}\\,\\text{m}$ schwingt ${ort} ($g = ${tz(g)}\\,\\text{m/s}^2$) mit kleinen Ausschlägen. Berechne die Schwingungsdauer in s.`,
        teile: [{ typ: "zahl", loesung: `2*pi*sqrt(${l}/${g})`, einheit: "s", fehler: nurUnterscheidbar(T, kand) }],
        hinweis: "T = 2π·√(l/g). Die Masse spielt keine Rolle.",
        loesung: `**Ansatz:** Für kleine Ausschläge gilt $T = 2\\pi\\sqrt{l/g}$.\n---\n**Rechnung:** $T = 2\\pi\\sqrt{\\dfrac{${tz(l)}\\,\\text{m}}{${tz(g)}\\,\\text{m/s}^2}} = ${tz(T, 3)}\\,\\text{s}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-pendellaenge",
    kapitel: K,
    titel: "Pendellänge zu gegebener Periode",
    niveau: 2,
    erzeuge: (r) => {
      const T = r.int(5, 40) / 10;
      const l = (G * T * T) / (4 * Math.PI ** 2);
      return {
        angabe: `Wie lang muss ein Fadenpendel sein, damit es die Schwingungsdauer $${tz(T)}\\,\\text{s}$ hat? Gib die Länge in m an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `9.81*${T}^2/(4*pi^2)`,
            einheit: "m",
            fehler: nurUnterscheidbar(l, [[(G * T) / (4 * Math.PI ** 2), `9.81*${T}/(4*pi^2)`, "Du hast $T$ nicht quadriert. Aus $T^2 = 4\\pi^2 l/g$ folgt $l = g T^2/(4\\pi^2)$."]]),
          },
        ],
        hinweis: "Quadriere T = 2π√(l/g) und löse nach l auf: l = g·T²/(4π²).",
        loesung: `**Ansatz:** Quadrieren ergibt $T^2 = 4\\pi^2 l/g$. Mit $g$ multiplizieren und durch $4\\pi^2$ teilen: $l = \\dfrac{g T^2}{4\\pi^2}$.\n---\n**Rechnung:** $l = \\dfrac{9{,}81\\,\\text{m/s}^2\\cdot(${tz(T)}\\,\\text{s})^2}{39{,}48} = ${tz(l, 3)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-vmax",
    kapitel: K,
    titel: "Höchstgeschwindigkeit und Höchstbeschleunigung",
    niveau: 2,
    erzeuge: (r) => {
      const A = r.int(1, 20);
      const f = r.int(1, 40) / 2;
      const w = PI2 * f;
      const vh = (A / 100) * w;
      const ah = (A / 100) * w * w;
      return {
        angabe: `Ein Körper schwingt harmonisch mit der Amplitude $${A}\\,\\text{cm}$ und der Frequenz $${tz(f)}\\,\\text{Hz}$. Berechne die größte Geschwindigkeit in m/s und die größte Beschleunigung in $\\text{m/s}^2$.`,
        teile: [
          {
            typ: "zahl",
            label: "größte Geschwindigkeit",
            loesung: `${A / 100}*2*pi*${f}`,
            einheit: "m/s",
            fehler: nurUnterscheidbar(vh, [
              [A * w, `${A}*2*pi*${f}`, "Du hast die Amplitude in Zentimetern eingesetzt. Für m/s muss $A$ in Metern stehen."],
              [(A / 100) * f, `${A / 100}*${f}`, "Du hast $f$ statt $\\omega = 2\\pi f$ genommen."],
            ]),
          },
          {
            typ: "zahl",
            label: "größte Beschleunigung",
            loesung: `${A / 100}*(2*pi*${f})^2`,
            einheit: "m/s²",
            fehler: nurUnterscheidbar(ah, [[vh, `${A / 100}*2*pi*${f}`, "Das ist $A\\omega$, die größte Geschwindigkeit. Für die Beschleunigung steht $\\omega$ im Quadrat."]]),
          },
        ],
        hinweis: "v̂ = A·ω und â = A·ω² mit ω = 2πf und A in Metern.",
        loesung: `**Kreisfrequenz:** $\\omega = 2\\pi f = ${tz(w, 3)}\\,\\text{s}^{-1}$.\n---\n**Geschwindigkeit:** $\\hat v = A\\omega = ${tz(A / 100, 2)}\\,\\text{m}\\cdot ${tz(w, 3)}\\,\\text{s}^{-1} = ${tz(vh, 3)}\\,\\text{m/s}$, in der Ruhelage.\n---\n**Beschleunigung:** $\\hat a = A\\omega^2 = ${tz(ah, 2)}\\,\\text{m/s}^2$, in den Umkehrpunkten.`,
      };
    },
  }),
  drill({
    id: "p7-d-energie",
    kapitel: K,
    titel: "Schwingungsenergie und Höchstgeschwindigkeit",
    niveau: 2,
    erzeuge: (r) => {
      const D = r.int(1, 40) * 10;
      const A = r.int(1, 20);
      const m = r.int(1, 20) / 10;
      const E = 0.5 * D * (A / 100) ** 2;
      const vh = Math.sqrt((2 * E) / m);
      return {
        angabe: `Ein Federpendel ($D = ${D}\\,\\text{N/m}$, $m = ${tz(m)}\\,\\text{kg}$) schwingt mit der Amplitude $${A}\\,\\text{cm}$. Berechne die Energie in J und die Höchstgeschwindigkeit in m/s.`,
        teile: [
          {
            typ: "zahl",
            label: "Energie",
            loesung: `0.5*${D}*${A / 100}^2`,
            einheit: "J",
            fehler: nurUnterscheidbar(E, [
              [D * (A / 100) ** 2, `${D}*${A / 100}^2`, "Der Faktor $\\tfrac12$ fehlt, $E = \\tfrac12 D A^2$."],
              [0.5 * D * A * A, `0.5*${D}*${A}^2`, "Du hast die Amplitude in Zentimetern eingesetzt."],
            ]),
          },
          {
            typ: "zahl",
            label: "Höchstgeschwindigkeit",
            loesung: `sqrt(2*0.5*${D}*${A / 100}^2/${m})`,
            einheit: "m/s",
            fehler: nurUnterscheidbar(vh, [[Math.sqrt(E / m), `sqrt(0.5*${D}*${A / 100}^2/${m})`, "Beim Umstellen von $E = \\tfrac12 m\\hat v^2$ fehlt der Faktor $2$: $\\hat v = \\sqrt{2E/m}$."]]),
          },
        ],
        hinweis: "Im Umkehrpunkt ist alles Spannenergie ½DA², in der Ruhelage alles Bewegungsenergie ½mv̂².",
        loesung: `**Energie:** Im Umkehrpunkt ist alles Spannenergie: $E = \\tfrac12 D A^2 = \\tfrac12\\cdot ${D}\\,\\text{N/m}\\cdot(${tz(A / 100, 2)}\\,\\text{m})^2 = ${tz(E, 4)}\\,\\text{J}$.\n---\n**Höchstgeschwindigkeit:** In der Ruhelage ist alles Bewegungsenergie: $\\hat v = \\sqrt{2E/m} = ${tz(vh, 3)}\\,\\text{m/s}$.\n---\n**Probe:** $A\\sqrt{D/m} = ${tz(A / 100, 2)}\\,\\text{m}\\cdot ${tz(Math.sqrt(D / m), 3)}\\,\\text{s}^{-1} = ${tz((A / 100) * Math.sqrt(D / m), 3)}\\,\\text{m/s}$. ✓`,
      };
    },
  }),
  drill({
    id: "p7-d-auslenkung",
    kapitel: K,
    titel: "Auslenkung zu einem Zeitpunkt",
    niveau: 2,
    erzeuge: (r) => {
      const A = r.int(1, 20);
      const T = r.int(5, 40) / 10;
      const t = r.int(1, 30) / 10;
      const x = A * Math.sin((PI2 * t) / T);
      const grad = A * Math.sin((((PI2 * t) / T) * Math.PI) / 180);
      return {
        angabe: `Eine Schwingung startet bei $t = 0$ in der Ruhelage nach oben, mit $A = ${A}\\,\\text{cm}$ und $T = ${tz(T)}\\,\\text{s}$. Wie groß ist die Auslenkung (in cm) bei $t = ${tz(t)}\\,\\text{s}$? Achte auf das Vorzeichen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${A}*sin(2*pi*${t}/${T})`,
            einheit: "cm",
            toleranz: 0.02,
            fehler: Math.abs(grad - x) > 0.05 ? [{ wert: `${A}*sin(inRad(2*pi*${t}/${T}))`, meldung: "Dein Rechner steht im Gradmodus. Die Phase $\\omega t$ ist ein Winkel im Bogenmaß." }] : [],
          },
        ],
        hinweis: "x = A·sin(2πt/T), Rechner auf Bogenmaß (RAD).",
        loesung: `**Ansatz:** Start in der Ruhelage nach oben, also $x(t) = A\\sin(\\omega t)$ mit $\\omega = 2\\pi/T$.\n---\n**Phase:** $\\omega t = 2\\pi\\cdot\\dfrac{${tz(t)}\\,\\text{s}}{${tz(T)}\\,\\text{s}} = ${tz((PI2 * t) / T, 3)}$ (Bogenmaß).\n---\n**Auslenkung:** $x = ${A}\\,\\text{cm}\\cdot\\sin(${tz((PI2 * t) / T, 3)}) = ${tz(x, 3)}\\,\\text{cm}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-phase",
    kapitel: K,
    titel: "Ort, Geschwindigkeit und Beschleunigung zu einem Zeitpunkt",
    niveau: 2,
    erzeuge: (r) => {
      const A = r.int(2, 10);
      const T = r.wahl([0.4, 0.8, 1.2, 1.6, 2.0, 2.4] as const);
      const bruch = r.wahl([
        [1, 8, "ein Achtel"],
        [1, 6, "ein Sechstel"],
        [3, 8, "drei Achtel"],
      ] as const);
      const t = (T * bruch[0]) / bruch[1];
      const w = PI2 / T;
      const v = (A / 100) * w * Math.cos(w * t);
      const a = -(A / 100) * w * w * Math.sin(w * t);
      return {
        angabe: `Ein Körper schwingt mit $A = ${A}\\,\\text{cm}$ und $T = ${tz(T)}\\,\\text{s}$. Bei $t = 0$ geht er durch die Ruhelage nach oben. Berechne Geschwindigkeit (in m/s) und Beschleunigung (in $\\text{m/s}^2$) nach ${bruch[2]} der Periode, also bei $t = ${tz(t, 4)}\\,\\text{s}$. Achte auf die Vorzeichen.`,
        teile: [
          // Toleranz 1 % relativ: deckt die auf vier Stellen gerundete Zeitangabe ab, ohne grobe Fehler (z. B. ohne cos-Faktor) anzunehmen.
          { typ: "zahl", label: "Geschwindigkeit", loesung: `${A / 100}*2*pi/${T}*cos(2*pi*${t}/${T})`, einheit: "m/s", toleranz: 0.01 * Math.abs(v) },
          {
            typ: "zahl",
            label: "Beschleunigung",
            loesung: `-${A / 100}*(2*pi/${T})^2*sin(2*pi*${t}/${T})`,
            einheit: "m/s²",
            toleranz: 0.01 * Math.abs(a),
            fehler: [{ wert: `${A / 100}*(2*pi/${T})^2*sin(2*pi*${t}/${T})`, meldung: "Das Vorzeichen fehlt. Die Beschleunigung zeigt immer zur Ruhelage, $a = -\\omega^2 x$. Oberhalb der Ruhelage ist sie negativ." }],
          },
        ],
        hinweis: "v(t) = Aω·cos(ωt), a(t) = −Aω²·sin(ωt), Rechner auf Bogenmaß.",
        loesung: `**Kreisfrequenz:** $\\omega = 2\\pi/T = ${tz(w, 3)}\\,\\text{s}^{-1}$, die Phase ist $\\omega t = ${tz(w * t, 3)}$.\n---\n**Geschwindigkeit:** $v = A\\omega\\cos(\\omega t) = ${tz((A / 100) * w, 4)}\\,\\text{m/s}\\cdot ${tz(Math.cos(w * t), 3)} = ${tz(v, 3)}\\,\\text{m/s}$.\n---\n**Beschleunigung:** $a = -A\\omega^2\\sin(\\omega t) = -${tz((A / 100) * w * w, 3)}\\,\\text{m/s}^2\\cdot ${tz(Math.sin(w * t), 3)} = ${tz(a, 3)}\\,\\text{m/s}^2$. Der Körper ist oberhalb der Ruhelage, also zeigt $a$ nach unten.`,
      };
    },
  }),
  drill({
    id: "p7-d-g-messen",
    kapitel: K,
    titel: "Fallbeschleunigung aus einer Pendelmessung",
    niveau: 2,
    erzeuge: (r) => {
      const l = r.int(40, 150) / 100;
      const n = r.wahl([10, 20, 30] as const);
      const gWahr = 9.7 + r.int(0, 20) / 100;
      const tGes = Math.round(n * PI2 * Math.sqrt(l / gWahr) * 10) / 10;
      const T = tGes / n;
      const g = (4 * Math.PI ** 2 * l) / (T * T);
      return {
        angabe: `Ein Fadenpendel ist bis zur Kugelmitte $${tz(l)}\\,\\text{m}$ lang. ${n} Schwingungen dauern $${tz(tGes)}\\,\\text{s}$. Berechne $g$ in $\\text{m/s}^2$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `4*pi^2*${l}/(${tGes}/${n})^2`,
            einheit: "m/s²",
            fehler: nurUnterscheidbar(g, [
              [(4 * Math.PI ** 2 * l) / T, `4*pi^2*${l}/(${tGes}/${n})`, "Du hast $T$ nicht quadriert, $g = 4\\pi^2 l/T^2$."],
              [(4 * Math.PI ** 2 * l) / (tGes * tGes), `4*pi^2*${l}/${tGes}^2`, "Teile die Gesamtzeit zuerst durch die Zahl der Schwingungen."],
            ]),
          },
        ],
        hinweis: "Erst T = Gesamtzeit / Zahl der Schwingungen, dann g = 4π²·l/T².",
        loesung: `**Periodendauer:** $T = ${tz(tGes)}\\,\\text{s} : ${n} = ${tz(T, 4)}\\,\\text{s}$.\n---\n**Umstellen:** Aus $T = 2\\pi\\sqrt{l/g}$ folgt $g = \\dfrac{4\\pi^2 l}{T^2}$.\n---\n**Rechnung:** $g = \\dfrac{39{,}48\\cdot ${tz(l)}\\,\\text{m}}{(${tz(T, 4)}\\,\\text{s})^2} = ${tz(g, 3)}\\,\\text{m/s}^2$. Das liegt nahe beim Tabellenwert $9{,}81\\,\\text{m/s}^2$.`,
      };
    },
  }),
  drill({
    id: "p7-d-daempfung",
    kapitel: K,
    titel: "Abklingkonstante aus zwei Maxima",
    niveau: 2,
    erzeuge: (r) => {
      const A1 = r.int(40, 90) / 10;
      const faktor = r.int(55, 90) / 100;
      const A2 = Math.round(A1 * faktor * 100) / 100;
      const n = r.wahl([1, 2, 3] as const);
      const T = r.int(5, 20) / 10;
      const dt = n * T;
      const d = Math.log(A1 / A2) / dt;
      return {
        angabe: `In der Messkurve einer gedämpften Schwingung ($T = ${tz(T)}\\,\\text{s}$) hat ein Maximum die Höhe $${tz(A1)}\\,\\text{cm}$. ${n === 1 ? "Eine Periode" : `${n} Perioden`} später ist das Maximum noch $${tz(A2)}\\,\\text{cm}$ hoch. Berechne die Abklingkonstante $\\delta$ in $\\text{s}^{-1}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `ln(${A1}/${A2})/${dt}`,
            einheit: "1/s",
            fehler: nurUnterscheidbar(d, [
              [Math.log(A1 / A2), `ln(${A1}/${A2})`, "Du hast nicht durch den Zeitabstand der beiden Maxima geteilt."],
              [Math.log10(A1 / A2) / dt, `lg(${A1}/${A2})/${dt}`, "Zur Basis $e$ gehört der natürliche Logarithmus $\\ln$, nicht „log“."],
              [(A1 - A2) / dt, `(${A1}-${A2})/${dt}`, "Bei exponentieller Abnahme zählt das **Verhältnis** der Maxima, nicht ihre Differenz."],
            ]),
          },
        ],
        hinweis: "A₂/A₁ = e^(−δ·Δt), also δ = ln(A₁/A₂)/Δt mit Δt = Zahl der Perioden mal T.",
        loesung: `**Zeitabstand:** $\\Delta t = ${n}\\cdot ${tz(T)}\\,\\text{s} = ${tz(dt)}\\,\\text{s}$.\n---\n**Ansatz:** Aus $\\dfrac{A_2}{A_1} = e^{-\\delta\\,\\Delta t}$ folgt durch Logarithmieren $\\delta = \\dfrac{\\ln(A_1/A_2)}{\\Delta t}$.\n---\n**Rechnung:** $\\delta = \\dfrac{\\ln(${tz(A1)}/${tz(A2)})}{${tz(dt)}\\,\\text{s}} = \\dfrac{${tz(Math.log(A1 / A2), 4)}}{${tz(dt)}\\,\\text{s}} = ${tz(d, 4)}\\,\\text{s}^{-1}$. Die Halbwertszeit der Amplitude ist $\\ln 2/\\delta = ${tz(Math.log(2) / d, 2)}\\,\\text{s}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-resonanz",
    kapitel: K,
    titel: "Resonanzgeschwindigkeit bei regelmäßigen Bodenwellen",
    niveau: 2,
    erzeuge: (r) => {
      const f0 = r.int(9, 20) / 10;
      const d = r.int(4, 15);
      const v = f0 * d * 3.6;
      return {
        angabe: `Die Federung eines Fahrzeugs hat die Eigenfrequenz $${tz(f0)}\\,\\text{Hz}$. Auf der Straße liegen regelmäßige Bodenwellen im Abstand von $${d}\\,\\text{m}$. Bei welcher Geschwindigkeit in km/h tritt Resonanz auf?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${f0}*${d}*3.6`,
            einheit: "km/h",
            fehler: nurUnterscheidbar(v, [
              [f0 * d, `${f0}*${d}`, "Das ist die Geschwindigkeit in m/s. Für km/h mal $3{,}6$."],
              [(d / f0) * 3.6, `${d}/${f0}*3.6`, "Die Erregerfrequenz ist $f_E = v/d$, also $v = f_E\\cdot d$, nicht $d/f_E$."],
            ]),
          },
        ],
        hinweis: "Die Erregerfrequenz ist die Zahl der Bodenwellen pro Sekunde, f_E = v/d. Resonanz bei f_E = f₀.",
        loesung: `**Resonanzbedingung:** $f_E = \\dfrac{v}{d} = f_0$.\n---\n**Geschwindigkeit:** $v = f_0\\cdot d = ${tz(f0)}\\,\\text{s}^{-1}\\cdot ${d}\\,\\text{m} = ${tz(f0 * d, 2)}\\,\\text{m/s}$.\n---\n**Umrechnen:** $${tz(f0 * d, 2)}\\,\\text{m/s}\\cdot 3{,}6 = ${tz(v, 1)}\\,\\text{km/h}$.`,
      };
    },
  }),
  drill({
    id: "p7-d-federn-kombi",
    kapitel: K,
    titel: "Schwingungsdauer mit zwei Federn",
    niveau: 3,
    erzeuge: (r) => {
      const D1 = r.int(2, 12) * 20;
      const D2 = r.int(2, 12) * 20;
      const m = r.int(2, 20) / 10;
      const parallel = r.wahl([true, false] as const);
      const D = parallel ? D1 + D2 : (D1 * D2) / (D1 + D2);
      const Dfalsch = parallel ? (D1 * D2) / (D1 + D2) : D1 + D2;
      const T = PI2 * Math.sqrt(m / D);
      return {
        angabe: `Ein Körper mit $${tz(m)}\\,\\text{kg}$ hängt an zwei Federn mit $D_1 = ${D1}\\,\\text{N/m}$ und $D_2 = ${D2}\\,\\text{N/m}$, die ${parallel ? "nebeneinander (parallel)" : "hintereinander (in Reihe)"} angebracht sind. Berechne die Schwingungsdauer in s.`,
        teile: [
          {
            typ: "zahl",
            loesung: parallel ? `2*pi*sqrt(${m}/(${D1}+${D2}))` : `2*pi*sqrt(${m}*(1/${D1}+1/${D2}))`,
            einheit: "s",
            fehler: nurUnterscheidbar(T, [
              [
                PI2 * Math.sqrt(m / Dfalsch),
                parallel ? `2*pi*sqrt(${m}*(1/${D1}+1/${D2}))` : `2*pi*sqrt(${m}/(${D1}+${D2}))`,
                parallel
                  ? "Das ist die Reihenschaltung. Nebeneinander teilen sich die Federn die Last, die Federkonstanten addieren sich."
                  : "Das ist die Parallelschaltung. Hintereinander addieren sich die Dehnungen, also die Kehrwerte der Federkonstanten.",
              ],
            ]),
          },
        ],
        hinweis: "Zuerst die Ersatzfederkonstante: parallel D = D₁ + D₂, in Reihe 1/D = 1/D₁ + 1/D₂. Dann T = 2π√(m/D).",
        loesung: `**Ersatzfeder:** ${parallel ? `Parallel addieren sich die Kräfte: $D = ${D1} + ${D2} = ${D}\\,\\text{N/m}$.` : `In Reihe addieren sich die Dehnungen: $\\dfrac{1}{D} = \\dfrac{1}{${D1}} + \\dfrac{1}{${D2}}$, also $D = ${tz(D, 2)}\\,\\text{N/m}$.`}\n---\n**Schwingungsdauer:** $T = 2\\pi\\sqrt{\\dfrac{${tz(m)}\\,\\text{kg}}{${tz(D, 2)}\\,\\text{N/m}}} = ${tz(T, 3)}\\,\\text{s}$.\n---\n**Kontrolle:** ${parallel ? "Das Paar ist härter als jede einzelne Feder, die Schwingung also schneller." : "Die Kette ist weicher als jede einzelne Feder, die Schwingung also langsamer."}`,
      };
    },
  }),
  drill({
    id: "p7-d-amplitude-energie",
    kapitel: K,
    titel: "Amplitude aus Ort und Geschwindigkeit",
    niveau: 3,
    erzeuge: (r) => {
      const m = r.int(1, 10) / 10;
      const D = r.int(2, 20) * 10;
      const x = r.int(1, 6);
      const v = r.int(2, 15) / 10;
      const E = 0.5 * D * (x / 100) ** 2 + 0.5 * m * v * v;
      const A = Math.sqrt((2 * E) / D) * 100;
      const nurKin = Math.sqrt((m * v * v) / D) * 100;
      return {
        angabe: `Ein Körper ($m = ${tz(m)}\\,\\text{kg}$) schwingt an einer Feder mit $D = ${D}\\,\\text{N/m}$. In einem Moment ist er $${x}\\,\\text{cm}$ von der Ruhelage entfernt und hat die Geschwindigkeit $${tz(v)}\\,\\text{m/s}$. Wie groß ist die Amplitude in cm?`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(2*(0.5*${D}*${x / 100}^2+0.5*${m}*${v}^2)/${D})*100`,
            einheit: "cm",
            fehler: nurUnterscheidbar(A, [
              [nurKin, `sqrt(${m}*${v}^2/${D})*100`, "Du hast nur die Bewegungsenergie berücksichtigt. Die Feder ist in diesem Moment schon gespannt und speichert ebenfalls Energie."],
              [nurKin + x, `sqrt(${m}*${v}^2/${D})*100+${x}`, "Auslenkungen darf man nicht addieren, nur Energien. Bilde die Summe der Energien und rechne dann die Amplitude aus."],
            ]),
          },
        ],
        hinweis: "Gesamtenergie = ½Dx² + ½mv². Im Umkehrpunkt ist sie ½DA².",
        loesung: `**Energie jetzt:** $E = \\tfrac12\\cdot ${D}\\cdot(${tz(x / 100, 2)})^2\\,\\text{J} + \\tfrac12\\cdot ${tz(m)}\\cdot ${tz(v)}^2\\,\\text{J} = ${tz(E, 4)}\\,\\text{J}$.\n---\n**Amplitude:** Im Umkehrpunkt gilt $\\tfrac12 D A^2 = E$, also $A = \\sqrt{2E/D} = ${tz(A / 100, 4)}\\,\\text{m} = ${tz(A, 2)}\\,\\text{cm}$.\n---\n**Kontrolle:** Die Amplitude ist größer als die momentane Auslenkung $${x}\\,\\text{cm}$, wie es sein muss. ✓`,
      };
    },
  }),
];
