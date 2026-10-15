import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "gleichstrom";
const E = 1.602e-19;
const NORMREIHE = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 120, 150, 180, 220, 270, 330, 470] as const;

export const DRILLS: Drill[] = [
  drill({
    id: "p13-d-ladung",
    kapitel: K,
    titel: "Ladung und Elektronenzahl aus Strom und Zeit",
    niveau: 1,
    erzeuge: (r) => {
      const I = r.wahl([0.2, 0.25, 0.4, 0.5, 0.8, 1.5, 2, 2.5] as const);
      const min = r.int(2, 30);
      const t = min * 60;
      const Q = I * t;
      return {
        angabe: `Durch ein Gerät fließt $${min}$ Minuten lang der konstante Strom $${tz(I)}\\,\\text{A}$.\n\na) Welche Ladung fließt (in C)?\n\nb) Wie viele Elektronen sind das? Gib die Zahl vor $10^{20}$ an.`,
        teile: [
          {
            typ: "zahl",
            label: "a) Q in C",
            loesung: `${I}*${t}`,
            einheit: "C",
            fehler: [{ wert: `${I}*${min}`, meldung: "Ampere heißt Coulomb **pro Sekunde**. Die Zeit muss in Sekunden stehen." }],
          },
          {
            typ: "zahl",
            label: "b) Anzahl in 10²⁰",
            loesung: `${I}*${t}/1.602e-19/1e20`,
            fehler: [{ wert: `${I}*${t}*1.602e-19/1e20`, meldung: "Gesucht ist, wie oft $e$ in die Ladung passt: $N = Q/e$. Es wird geteilt." }],
          },
        ],
        hinweis: "Bei konstantem Strom gilt Q = I·t mit t in Sekunden. Dann N = Q/e.",
        loesung: `**Ansatz:** Der Strom ist konstant, also $Q = I\\cdot t$ mit $t = ${min}\\cdot 60\\,\\text{s} = ${t}\\,\\text{s}$.\n---\n**a)** $Q = ${tz(I)}\\,\\tfrac{\\text{C}}{\\text{s}}\\cdot ${t}\\,\\text{s} = ${tz(Q, 1)}\\,\\text{C}$.\n---\n**b)** $N = \\dfrac{Q}{e} = \\dfrac{${tz(Q, 1)}\\,\\text{C}}{1{,}602\\cdot 10^{-19}\\,\\text{C}} = ${tz(Q / E / 1e20, 2)}\\cdot 10^{20}$. Die Einheit Coulomb kürzt sich.`,
      };
    },
  }),
  drill({
    id: "p13-d-ohm",
    kapitel: K,
    titel: "Ohmsches Gesetz",
    niveau: 1,
    erzeuge: (r) => {
      const R = r.wahl(NORMREIHE);
      const Ima = r.int(5, 80);
      const U = (R * Ima) / 1000;
      const gesucht = r.wahl(["I", "R", "U"] as const);
      if (gesucht === "I")
        return {
          angabe: `An einem Widerstand von $${R}\\,\\Omega$ liegt die Spannung $${tz(U, 3)}\\,\\text{V}$. Welcher Strom fließt (in mA)?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${U}/${R}*1000`,
              einheit: "mA",
              fehler: [{ wert: `${U}*${R}*1000`, meldung: "Aus $R = U/I$ folgt $I = U/R$. Die Spannung wird durch den Widerstand geteilt." }],
            },
          ],
          hinweis: "Stelle R = U/I nach I um.",
          loesung: `**Ansatz:** Aus $R = U/I$ folgt $I = U/R$.\n---\n$I = \\dfrac{${tz(U, 3)}\\,\\text{V}}{${R}\\,\\Omega} = ${tz(U / R, 4)}\\,\\text{A} = ${Ima}\\,\\text{mA}$.`,
        };
      if (gesucht === "R")
        return {
          angabe: `Bei der Spannung $${tz(U, 3)}\\,\\text{V}$ fließen $${Ima}\\,\\text{mA}$ durch einen Widerstand. Wie groß ist er (in Ω)?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${U}/(${Ima}/1000)`,
              einheit: "Ω",
              fehler: [{ wert: `${U}/${Ima}`, meldung: "Der Strom muss in Ampere stehen: Milli heißt $10^{-3}$." }],
            },
          ],
          hinweis: "R = U/I mit I in Ampere.",
          loesung: `**Ansatz:** Definition des Widerstands, $R = U/I$, mit $I = ${tz(Ima / 1000)}\\,\\text{A}$.\n---\n$R = \\dfrac{${tz(U, 3)}\\,\\text{V}}{${tz(Ima / 1000)}\\,\\text{A}} = ${R}\\,\\Omega$.`,
        };
      return {
        angabe: `Durch einen Widerstand von $${R}\\,\\Omega$ fließen $${Ima}\\,\\text{mA}$. Welche Spannung liegt an ihm (in V)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${R}*${Ima}/1000`,
            einheit: "V",
            fehler: [{ wert: `${R}*${Ima}`, meldung: "Der Strom muss in Ampere stehen. Sonst ist das Ergebnis tausendmal zu groß." }],
          },
        ],
        hinweis: "U = R·I mit I in Ampere.",
        loesung: `**Ansatz:** Aus $R = U/I$ folgt $U = R\\cdot I$, mit $I = ${tz(Ima / 1000)}\\,\\text{A}$.\n---\n$U = ${R}\\,\\Omega\\cdot ${tz(Ima / 1000)}\\,\\text{A} = ${tz(U, 3)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p13-d-reihe",
    kapitel: K,
    titel: "Reihenschaltung",
    niveau: 1,
    erzeuge: (r) => {
      const [R1, R2, R3] = r.mische(NORMREIHE).slice(0, 3);
      const U = r.wahl([6, 9, 12, 24] as const);
      const R = R1 + R2 + R3;
      return {
        angabe: `Die Widerstände $${R1}\\,\\Omega$, $${R2}\\,\\Omega$ und $${R3}\\,\\Omega$ liegen in Reihe an $${U}\\,\\text{V}$. Berechne den Strom (in mA) und die Spannung am $${R2}$-$\\Omega$-Widerstand (in V).`,
        teile: [
          {
            typ: "zahl",
            label: "I in mA",
            loesung: `${U}/${R}*1000`,
            einheit: "mA",
            fehler: [{ wert: `${U}/${R2}*1000`, meldung: "In Reihe begrenzen **alle** Widerstände den Strom. Rechne mit dem Ersatzwiderstand $R_1 + R_2 + R_3$." }],
          },
          {
            typ: "zahl",
            label: "U₂ in V",
            loesung: `${U}/${R}*${R2}`,
            einheit: "V",
            // auch knapp neben R/3 (z. B. 15, 68, 120 Ω) laege U/3 in der 0,5-%-Toleranz der Loesung
            fehler: Math.abs(3 * R2 - R) / R < 0.02 ? [] : [{ wert: `${U}/3`, meldung: "Die Spannung teilt sich im Verhältnis der Widerstände auf, nicht zu gleichen Teilen." }],
          },
        ],
        hinweis: "In Reihe addieren sich die Widerstände. Durch alle fließt derselbe Strom.",
        loesung: `**Ansatz:** Reihenschaltung, also $R_{\\text{ges}} = ${R1} + ${R2} + ${R3} = ${R}\\,\\Omega$ und überall derselbe Strom.\n---\n$I = \\dfrac{${U}\\,\\text{V}}{${R}\\,\\Omega} = ${tz((U / R) * 1000, 2)}\\,\\text{mA}$.\n---\n$U_2 = R_2\\cdot I = ${R2}\\,\\Omega\\cdot ${tz(U / R, 5)}\\,\\text{A} = ${tz((U / R) * R2, 3)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p13-d-parallel",
    kapitel: K,
    titel: "Parallelschaltung zweier Widerstände",
    niveau: 1,
    erzeuge: (r) => {
      const [a, b] = r.wahl([[10, 40], [12, 6], [20, 30], [60, 30], [100, 25], [40, 60], [15, 30], [18, 9], [120, 40], [24, 8]] as const);
      const R = (a * b) / (a + b);
      return {
        angabe: `Berechne den Ersatzwiderstand von $${a}\\,\\Omega$ parallel zu $${b}\\,\\Omega$ (in Ω).`,
        teile: [
          {
            typ: "zahl",
            loesung: `1/(1/${a}+1/${b})`,
            einheit: "Ω",
            fehler: [
              { wert: `${a + b}`, meldung: "Addieren gilt nur in Reihe. Parallel ist der Ersatzwiderstand **kleiner** als der kleinste Einzelwiderstand." },
              { wert: `1/${a}+1/${b}`, meldung: "Das ist der Kehrwert $1/R$. Bilde zum Schluss noch den Kehrwert." },
            ],
          },
        ],
        hinweis: "Für zwei parallele Widerstände gilt R = R₁R₂/(R₁ + R₂).",
        loesung: `**Ansatz:** Parallel addieren sich die Kehrwerte. Für zwei Widerstände ist $R = \\dfrac{R_1 R_2}{R_1 + R_2}$.\n---\n$R = \\dfrac{${a}\\cdot ${b}}{${a + b}}\\,\\Omega = ${tz(R, 3)}\\,\\Omega$. Probe: Das ist kleiner als $${Math.min(a, b)}\\,\\Omega$.`,
      };
    },
  }),
  drill({
    id: "p13-d-gemischt",
    kapitel: K,
    titel: "R₁ in Reihe mit R₂ ‖ R₃",
    niveau: 2,
    erzeuge: (r) => {
      const R1 = r.wahl([10, 20, 30, 40, 50, 100] as const);
      const [R2, R3] = r.wahl([[30, 60], [20, 20], [40, 60], [60, 30], [100, 100], [12, 24], [30, 30]] as const);
      const U = r.wahl([6, 9, 12, 24, 48] as const);
      const R23 = (R2 * R3) / (R2 + R3);
      const R = R1 + R23;
      const I = U / R;
      const U23 = I * R23;
      return {
        angabe: `$R_1 = ${R1}\\,\\Omega$ liegt in Reihe mit der Parallelschaltung aus $R_2 = ${R2}\\,\\Omega$ und $R_3 = ${R3}\\,\\Omega$, alles an $${U}\\,\\text{V}$. Berechne den Gesamtstrom und den Strom durch $R_3$ (beide in mA).`,
        teile: [
          {
            typ: "zahl",
            label: "I in mA",
            loesung: `${U}/(${R1}+1/(1/${R2}+1/${R3}))*1000`,
            einheit: "mA",
            fehler: [{ wert: `${U}/(${R1}+${R2}+${R3})*1000`, meldung: "$R_2$ und $R_3$ liegen parallel. Fasse sie zuerst mit der Kehrwertregel zusammen." }],
          },
          {
            typ: "zahl",
            label: "I₃ in mA",
            loesung: `${U}/(${R1}+1/(1/${R2}+1/${R3}))*(1/(1/${R2}+1/${R3}))/${R3}*1000`,
            einheit: "mA",
            fehler: [{ wert: `${U}/${R3}*1000`, meldung: "An $R_3$ liegt nicht die volle Spannung. Ein Teil fällt schon an $R_1$ ab." }],
          },
        ],
        hinweis: "Erst den Parallelteil zusammenfassen, dann Gesamtstrom, dann rückwärts die Spannung am Parallelteil.",
        loesung: `**Hinweg:** $R_{23} = \\dfrac{${R2}\\cdot ${R3}}{${R2 + R3}}\\,\\Omega = ${tz(R23, 3)}\\,\\Omega$ und $R = ${R1}\\,\\Omega + ${tz(R23, 3)}\\,\\Omega = ${tz(R, 3)}\\,\\Omega$.\n---\n**Gesamtstrom:** $I = \\dfrac{${U}\\,\\text{V}}{${tz(R, 3)}\\,\\Omega} = ${tz(I * 1000, 2)}\\,\\text{mA}$.\n---\n**Rückweg:** $U_{23} = I\\cdot R_{23} = ${tz(U23, 3)}\\,\\text{V}$, also $I_3 = \\dfrac{U_{23}}{R_3} = ${tz((U23 / R3) * 1000, 2)}\\,\\text{mA}$.`,
      };
    },
  }),
  drill({
    id: "p13-d-draht",
    kapitel: K,
    titel: "Widerstand eines Drahtes",
    niveau: 2,
    erzeuge: (r) => {
      const [mat, rho] = r.wahl([
        ["Kupfer", 1.7e-8],
        ["Aluminium", 2.7e-8],
        ["Eisen", 1.0e-7],
        ["Konstantan", 4.9e-7],
      ] as const);
      const l = r.int(2, 100);
      const A = r.wahl([0.5, 0.75, 1, 1.5, 2.5, 4] as const);
      const R = (rho * l) / (A * 1e-6);
      return {
        angabe: `Ein ${mat}draht ($\\rho = ${tz(rho * 1e8, 2)}\\cdot 10^{-8}\\,\\Omega\\,\\text{m}$) ist $${l}\\,\\text{m}$ lang und hat $${tz(A)}\\,\\text{mm}^2$ Querschnitt. Berechne seinen Widerstand (in Ω).`,
        teile: [
          {
            typ: "zahl",
            loesung: `${rho}*${l}/(${A}e-6)`,
            einheit: "Ω",
            fehler: [{ wert: `${rho}*${l}/${A}`, meldung: "Der Querschnitt muss in m² stehen: $1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$." }],
          },
        ],
        hinweis: "R = ρ·l/A, mit A in m² (1 mm² = 10⁻⁶ m²).",
        loesung: `**Ansatz:** $R = \\rho\\dfrac{l}{A}$ mit $A = ${tz(A)}\\cdot 10^{-6}\\,\\text{m}^2$.\n---\n$R = ${tz(rho * 1e8, 2)}\\cdot 10^{-8}\\,\\Omega\\,\\text{m}\\cdot\\dfrac{${l}\\,\\text{m}}{${tz(A)}\\cdot 10^{-6}\\,\\text{m}^2} = ${tz(R, 4)}\\,\\Omega$.\n---\n**Einheiten:** $\\Omega\\,\\text{m}\\cdot\\text{m}/\\text{m}^2 = \\Omega$.`,
      };
    },
  }),
  drill({
    id: "p13-d-temperatur",
    kapitel: K,
    titel: "Widerstand bei anderer Temperatur",
    niveau: 2,
    erzeuge: (r) => {
      const R20 = r.wahl([5, 8, 10, 12, 20, 50] as const);
      const theta = r.wahl([-20, -10, 40, 50, 60, 80, 100] as const);
      const dt = theta - 20;
      const alpha = 3.9e-3;
      const R = R20 * (1 + alpha * dt);
      return {
        angabe: `Eine Kupferwicklung hat bei $20\\,^\\circ\\text{C}$ den Widerstand $${R20}\\,\\Omega$. Wie groß ist ihr Widerstand bei $${theta}\\,^\\circ\\text{C}$ (in Ω)? ($\\alpha = 3{,}9\\cdot 10^{-3}\\,\\text{K}^{-1}$)`,
        teile: [
          {
            typ: "zahl",
            loesung: `${R20}*(1+3.9e-3*(${dt}))`,
            einheit: "Ω",
            fehler: [{ wert: `${R20}*(1+3.9e-3*(${theta}))`, meldung: "In die Formel gehört die **Änderung** gegenüber $20\\,^\\circ\\text{C}$, nicht die Endtemperatur." }],
          },
        ],
        hinweis: "R = R₂₀·(1 + α·Δϑ) mit Δϑ = ϑ − 20 °C.",
        loesung: `**Ansatz:** $R = R_{20}\\,(1 + \\alpha\\,\\Delta\\vartheta)$ mit $\\Delta\\vartheta = ${theta}\\,^\\circ\\text{C} - 20\\,^\\circ\\text{C} = ${dt}\\,\\text{K}$.\n---\n$R = ${R20}\\,\\Omega\\cdot(1 + 3{,}9\\cdot 10^{-3}\\,\\text{K}^{-1}\\cdot(${dt}\\,\\text{K})) = ${R20}\\,\\Omega\\cdot ${tz(1 + alpha * dt, 4)} = ${tz(R, 3)}\\,\\Omega$.\n---\n**Deutung:** ${dt > 0 ? "Wärmer heißt beim Metall größerer Widerstand." : "Kälter heißt beim Metall kleinerer Widerstand."}`,
      };
    },
  }),
  drill({
    id: "p13-d-leistung",
    kapitel: K,
    titel: "Leistung, Strom und Widerstand eines Geräts",
    niveau: 1,
    erzeuge: (r) => {
      const P = r.wahl([40, 60, 100, 500, 800, 1000, 1200, 2000, 2200] as const);
      return {
        angabe: `Ein Gerät nimmt an $230\\,\\text{V}$ die Leistung $${P}\\,\\text{W}$ auf. Berechne den Strom (in A) und den Widerstand (in Ω).`,
        teile: [
          {
            typ: "zahl",
            label: "I in A",
            loesung: `${P}/230`,
            einheit: "A",
            fehler: [{ wert: `${P}*230`, meldung: "Aus $P = U\\cdot I$ folgt $I = P/U$. Es wird geteilt." }],
          },
          {
            typ: "zahl",
            label: "R in Ω",
            loesung: `230^2/${P}`,
            einheit: "Ω",
            fehler: [{ wert: `230/${P}`, meldung: "$U/P$ ist kein Widerstand. Richtig ist $R = U^2/P$." }],
          },
        ],
        hinweis: "I = P/U und R = U²/P.",
        loesung: `**Strom:** Aus $P = U\\cdot I$ folgt $I = \\dfrac{${P}\\,\\text{W}}{230\\,\\text{V}} = ${tz(P / 230, 3)}\\,\\text{A}$.\n---\n**Widerstand:** $R = \\dfrac{U^2}{P} = \\dfrac{(230\\,\\text{V})^2}{${P}\\,\\text{W}} = ${tz((230 * 230) / P, 2)}\\,\\Omega$. Probe: $U/I$ ergibt denselben Wert.`,
      };
    },
  }),
  drill({
    id: "p13-d-kosten",
    kapitel: K,
    titel: "Energiekosten in kWh",
    niveau: 1,
    erzeuge: (r) => {
      const P = r.wahl([5, 10, 60, 150, 800, 2000] as const);
      const h = r.wahl([1, 2, 4, 8, 24] as const);
      const tage = r.wahl([30, 100, 365] as const);
      const preis = r.wahl([0.25, 0.3, 0.35] as const);
      const W = (P * h * tage) / 1000;
      return {
        angabe: `Ein Gerät mit $${P}\\,\\text{W}$ läuft $${h}$ Stunden pro Tag an $${tage}$ Tagen. Wie viele kWh braucht es, und was kostet das bei $${tz(preis)}$ Euro pro kWh (in Euro)?`,
        teile: [
          {
            typ: "zahl",
            label: "W in kWh",
            loesung: `${P}*${h}*${tage}/1000`,
            einheit: "kWh",
            fehler: [{ wert: `${P}*${h}*${tage}`, meldung: "Das sind Wattstunden. Für Kilowattstunden noch durch $1000$ teilen." }],
          },
          {
            typ: "zahl",
            label: "Kosten in Euro",
            loesung: `${P}*${h}*${tage}/1000*${preis}`,
            einheit: "Euro",
          },
        ],
        hinweis: "W = P·t mit P in kW und t in Stunden.",
        loesung: `**Ansatz:** Energie ist Leistung mal Zeit. Leistung in kW: $${tz(P / 1000)}\\,\\text{kW}$, Zeit: $${h}\\cdot ${tage} = ${h * tage}\\,\\text{h}$.\n---\n$W = ${tz(P / 1000)}\\,\\text{kW}\\cdot ${h * tage}\\,\\text{h} = ${tz(W, 3)}\\,\\text{kWh}$.\n---\nKosten: $${tz(W, 3)}\\,\\text{kWh}\\cdot ${tz(preis)}\\,\\tfrac{\\text{Euro}}{\\text{kWh}} = ${tz(W * preis, 2)}$ Euro.`,
      };
    },
  }),
  drill({
    id: "p13-d-innenwiderstand",
    kapitel: K,
    titel: "Klemmenspannung mit Innenwiderstand",
    niveau: 2,
    erzeuge: (r) => {
      const U0 = r.wahl([1.5, 4.5, 9, 12] as const);
      const Ri = r.wahl([0.2, 0.5, 1, 2] as const);
      const Ra = r.wahl([2, 4, 5, 10, 20] as const);
      const I = U0 / (Ra + Ri);
      return {
        angabe: `Eine Quelle mit $U_0 = ${tz(U0)}\\,\\text{V}$ und $R_i = ${tz(Ri)}\\,\\Omega$ speist einen Widerstand von $${Ra}\\,\\Omega$. Berechne den Strom (in A) und die Klemmenspannung (in V).`,
        teile: [
          {
            typ: "zahl",
            label: "I in A",
            loesung: `${U0}/(${Ra}+${Ri})`,
            einheit: "A",
            fehler: [{ wert: `${U0}/${Ra}`, meldung: "Der Innenwiderstand fehlt. Innen- und Außenwiderstand liegen in Reihe." }],
          },
          {
            typ: "zahl",
            label: "U_K in V",
            loesung: `${U0}*${Ra}/(${Ra}+${Ri})`,
            einheit: "V",
            fehler: [{ wert: `${U0}`, meldung: "Die Quellenspannung misst man nur ohne Last. Unter Last fällt am Innenwiderstand $R_i I$ ab." }],
          },
        ],
        hinweis: "Innen- und Außenwiderstand liegen in Reihe. Dann U_K = U₀ − Rᵢ·I.",
        loesung: `**Ansatz:** $R_i$ und $R_a$ liegen in Reihe: $I = \\dfrac{U_0}{R_a + R_i} = \\dfrac{${tz(U0)}\\,\\text{V}}{${tz(Ra + Ri)}\\,\\Omega} = ${tz(I, 4)}\\,\\text{A}$.\n---\n**Klemmenspannung:** $U_K = U_0 - R_i I = ${tz(U0)}\\,\\text{V} - ${tz(Ri)}\\,\\Omega\\cdot ${tz(I, 4)}\\,\\text{A} = ${tz(U0 - Ri * I, 3)}\\,\\text{V}$.\n---\n**Probe:** $R_a\\cdot I = ${tz(Ra * I, 3)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p13-d-vorwiderstand-led",
    kapitel: K,
    titel: "Vorwiderstand einer LED",
    niveau: 2,
    erzeuge: (r) => {
      const [farbe, UL] = r.wahl([["rote", 1.8], ["gelbe", 2.1], ["grüne", 2.2], ["blaue", 3.0], ["weiße", 3.2]] as const);
      const U = r.wahl([5, 9, 12] as const);
      const Ima = r.wahl([10, 15, 20] as const);
      return {
        angabe: `Eine ${farbe} LED mit $${tz(UL)}\\,\\text{V}$ Durchlassspannung soll an $${U}\\,\\text{V}$ mit $${Ima}\\,\\text{mA}$ leuchten. Welcher Vorwiderstand ist nötig (in Ω)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${U}-${UL})/(${Ima}/1000)`,
            einheit: "Ω",
            fehler: [{ wert: `${U}/(${Ima}/1000)`, meldung: "Am Vorwiderstand liegt nicht die ganze Spannung. Die LED braucht selbst ihre Durchlassspannung." }],
          },
        ],
        hinweis: "Am Vorwiderstand liegt U − U_LED (Maschenregel).",
        loesung: `**Ansatz:** LED und Vorwiderstand liegen in Reihe. Maschenregel: $U_R = ${U}\\,\\text{V} - ${tz(UL)}\\,\\text{V} = ${tz(U - UL)}\\,\\text{V}$.\n---\n$R = \\dfrac{U_R}{I} = \\dfrac{${tz(U - UL)}\\,\\text{V}}{${tz(Ima / 1000)}\\,\\text{A}} = ${tz((U - UL) / (Ima / 1000), 1)}\\,\\Omega$.\n---\nIn der Praxis nimmt man den nächstgrößeren Normwert, damit der Strom sicher nicht zu groß wird.`,
      };
    },
  }),
  drill({
    id: "p13-d-spannungsteiler",
    kapitel: K,
    titel: "Belasteter Spannungsteiler",
    niveau: 2,
    erzeuge: (r) => {
      const R1 = r.wahl([1, 2, 3.3, 4.7, 10] as const);
      const R2 = r.wahl([1, 2.2, 4.7, 6.8, 10] as const);
      const RL = r.wahl([2.2, 4.7, 10, 22] as const);
      const U = r.wahl([5, 9, 12, 24] as const);
      const R2L = (R2 * RL) / (R2 + RL);
      return {
        angabe: `Ein Spannungsteiler aus $R_1 = ${tz(R1)}\\,\\text{k}\\Omega$ (oben) und $R_2 = ${tz(R2)}\\,\\text{k}\\Omega$ (unten) liegt an $${U}\\,\\text{V}$. Am Abgriff hängt parallel zu $R_2$ eine Last mit $${tz(RL)}\\,\\text{k}\\Omega$.\n\na) Welche Spannung liegt ohne Last an $R_2$ (in V)?\n\nb) Welche Spannung liegt mit Last an $R_2$ (in V)?`,
        teile: [
          {
            typ: "zahl",
            label: "a) ohne Last in V",
            loesung: `${U}*${R2}/(${R1}+${R2})`,
            einheit: "V",
            // bei R1 = R2 waere die Spannung am oberen Widerstand gleich der gesuchten
            fehler: R1 === R2 ? undefined : [{ wert: `${U}*${R1}/(${R1}+${R2})`, meldung: "Das ist die Spannung am oberen Widerstand. In den Zähler gehört $R_2$." }],
          },
          {
            typ: "zahl",
            label: "b) mit Last in V",
            loesung: `${U}*(${R2}*${RL}/(${R2}+${RL}))/(${R1}+${R2}*${RL}/(${R2}+${RL}))`,
            einheit: "V",
            fehler: [{ wert: `${U}*${R2}/(${R1}+${R2})`, meldung: "Die Last liegt parallel zu $R_2$ und verkleinert den unteren Teil. Die Formel ohne Last gilt nicht mehr." }],
          },
        ],
        hinweis: "Ohne Last U₂ = U·R₂/(R₁ + R₂). Mit Last zuerst R₂ und die Last parallel zusammenfassen.",
        loesung: `**a)** Unbelasteter Teiler: $U_2 = ${U}\\,\\text{V}\\cdot\\dfrac{${tz(R2)}}{${tz(R1)} + ${tz(R2)}} = ${tz((U * R2) / (R1 + R2), 3)}\\,\\text{V}$.\n---\n**b)** Unterer Teil mit Last: $R_2' = \\dfrac{${tz(R2)}\\cdot ${tz(RL)}}{${tz(R2)} + ${tz(RL)}}\\,\\text{k}\\Omega = ${tz(R2L, 3)}\\,\\text{k}\\Omega$.\n---\nDann $U_2 = ${U}\\,\\text{V}\\cdot\\dfrac{${tz(R2L, 3)}}{${tz(R1)} + ${tz(R2L, 3)}} = ${tz((U * R2L) / (R1 + R2L), 3)}\\,\\text{V}$. Die Last zieht die Spannung herunter.`,
      };
    },
  }),
  drill({
    id: "p13-d-messbereich",
    kapitel: K,
    titel: "Messbereich eines Instruments erweitern",
    niveau: 2,
    erzeuge: (r) => {
      const Ri = r.wahl([50, 100, 200, 500] as const);
      const Im = r.wahl([0.5, 1, 2] as const); // mA
      const Um = (Ri * Im) / 1000;
      if (r.zufall() < 0.5) {
        const I = r.wahl([10, 50, 100, 1000] as const); // mA
        return {
          angabe: `Ein Drehspulinstrument hat den Innenwiderstand $${Ri}\\,\\Omega$ und Vollausschlag bei $${tz(Im)}\\,\\text{mA}$. Welchen Nebenwiderstand braucht man für den Messbereich $${I}\\,\\text{mA}$ (in Ω)?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${Um}/((${I}-${Im})/1000)`,
              einheit: "Ω",
              fehler: [{ wert: `${Ri}*${Im}/(${I}-${Im})*1000`, meldung: "Rechne die Ströme in Ampere oder die Spannung in Volt konsequent. Achte auf die Vorsilben." }],
            },
          ],
          hinweis: "U_m = Rᵢ·I_m liegt auch am parallelen Nebenwiderstand. Durch ihn fließt I − I_m.",
          loesung: `**Ansatz:** Instrument und Nebenwiderstand liegen parallel. Bei Vollausschlag: $U_m = ${Ri}\\,\\Omega\\cdot ${tz(Im / 1000)}\\,\\text{A} = ${tz(Um, 4)}\\,\\text{V}$.\n---\nDurch den Nebenwiderstand fließt der Rest: $${I}\\,\\text{mA} - ${tz(Im)}\\,\\text{mA} = ${tz(I - Im)}\\,\\text{mA}$.\n---\n$R_N = \\dfrac{${tz(Um, 4)}\\,\\text{V}}{${tz((I - Im) / 1000, 4)}\\,\\text{A}} = ${tz(Um / ((I - Im) / 1000), 4)}\\,\\Omega$.`,
        };
      }
      const U = r.wahl([5, 10, 20, 50] as const);
      return {
        angabe: `Ein Drehspulinstrument hat den Innenwiderstand $${Ri}\\,\\Omega$ und Vollausschlag bei $${tz(Im)}\\,\\text{mA}$. Welchen Vorwiderstand braucht man für den Spannungsmessbereich $${U}\\,\\text{V}$ (in Ω)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${U}/(${Im}/1000)-${Ri}`,
            einheit: "Ω",
            toleranz: 0.5, // ganzzahlig; sonst laege der Gesamtwiderstand (Fehlerbild) bei grossem U/I_m in der 0,5-%-Toleranz
            fehler: [{ wert: `${U}/(${Im}/1000)`, meldung: "Das ist der nötige **Gesamtwiderstand**. Der Innenwiderstand des Instruments gehört schon dazu und wird abgezogen." }],
          },
        ],
        hinweis: "Bei der vollen Spannung soll genau I_m fließen. Gesamtwiderstand U/I_m, davon Rᵢ abziehen.",
        loesung: `**Ansatz:** Vorwiderstand und Instrument liegen in Reihe. Bei $${U}\\,\\text{V}$ soll genau $${tz(Im)}\\,\\text{mA}$ fließen.\n---\nGesamtwiderstand: $\\dfrac{${U}\\,\\text{V}}{${tz(Im / 1000)}\\,\\text{A}} = ${tz(U / (Im / 1000), 1)}\\,\\Omega$.\n---\n$R_V = ${tz(U / (Im / 1000), 1)}\\,\\Omega - ${Ri}\\,\\Omega = ${tz(U / (Im / 1000) - Ri, 1)}\\,\\Omega$.`,
      };
    },
  }),
  drill({
    id: "p13-d-quelle-messungen",
    kapitel: K,
    titel: "Quellenspannung und Innenwiderstand aus zwei Messungen",
    niveau: 3,
    erzeuge: (r) => {
      const U0 = r.wahl([4.5, 6, 9, 12] as const);
      const Ri = r.wahl([0.5, 0.8, 1, 1.5, 2] as const);
      const I1 = r.wahl([0.2, 0.4, 0.5] as const);
      const I2 = I1 + r.wahl([0.5, 1, 1.5] as const);
      const U1 = U0 - Ri * I1;
      const U2 = U0 - Ri * I2;
      return {
        angabe: `An einer Quelle misst man bei $${tz(I1)}\\,\\text{A}$ die Klemmenspannung $${tz(U1, 3)}\\,\\text{V}$ und bei $${tz(I2)}\\,\\text{A}$ die Klemmenspannung $${tz(U2, 3)}\\,\\text{V}$.\n\na) Wie groß ist der Innenwiderstand (in Ω)?\n\nb) Wie groß ist die Quellenspannung (in V)?\n\nc) Wie groß ist der Kurzschlussstrom (in A)?`,
        teile: [
          {
            typ: "zahl",
            label: "a) Rᵢ in Ω",
            loesung: `(${U1}-${U2})/(${I2}-${I1})`,
            einheit: "Ω",
            fehler: [{ wert: `${U1}/${I1}`, meldung: "$U/I$ an einem Messpunkt ist der äußere Widerstand. Der Innenwiderstand ist der Spannungsabfall pro Ampere **Stromzuwachs**." }],
          },
          { typ: "zahl", label: "b) U₀ in V", loesung: `${U1}+(${U1}-${U2})/(${I2}-${I1})*${I1}`, einheit: "V" },
          { typ: "zahl", label: "c) I_K in A", loesung: `(${U1}+(${U1}-${U2})/(${I2}-${I1})*${I1})/((${U1}-${U2})/(${I2}-${I1}))`, einheit: "A" },
        ],
        hinweis: "U_K = U₀ − Rᵢ·I ist eine fallende Gerade. Ihre Steigung ist −Rᵢ, ihr Achsenabschnitt U₀.",
        loesung: `**a)** Die Spannung fällt um $${tz(U1 - U2, 3)}\\,\\text{V}$, wenn der Strom um $${tz(I2 - I1)}\\,\\text{A}$ steigt: $R_i = \\dfrac{${tz(U1 - U2, 3)}\\,\\text{V}}{${tz(I2 - I1)}\\,\\text{A}} = ${tz(Ri)}\\,\\Omega$.\n---\n**b)** $U_0 = U_K + R_i I = ${tz(U1, 3)}\\,\\text{V} + ${tz(Ri)}\\,\\Omega\\cdot ${tz(I1)}\\,\\text{A} = ${tz(U0)}\\,\\text{V}$.\n---\n**c)** $I_K = \\dfrac{U_0}{R_i} = \\dfrac{${tz(U0)}\\,\\text{V}}{${tz(Ri)}\\,\\Omega} = ${tz(U0 / Ri, 3)}\\,\\text{A}$. Probe mit der zweiten Messung: $${tz(U0)} - ${tz(Ri)}\\cdot ${tz(I2)} = ${tz(U2, 3)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p13-d-leistungsanpassung",
    kapitel: K,
    titel: "Leistung an der Last und Wirkungsgrad",
    niveau: 3,
    erzeuge: (r) => {
      const U0 = r.wahl([6, 9, 12, 24] as const);
      const Ri = r.wahl([1, 2, 3, 4] as const);
      const f = r.wahl([0.5, 2, 3, 4] as const);
      const Ra = Ri * f;
      const P = (U0 * U0 * Ra) / (Ra + Ri) ** 2;
      const Pmax = (U0 * U0) / (4 * Ri);
      return {
        angabe: `Eine Quelle hat $U_0 = ${U0}\\,\\text{V}$ und $R_i = ${Ri}\\,\\Omega$.\n\na) Welche Leistung nimmt eine Last mit $${tz(Ra)}\\,\\Omega$ auf (in W)?\n\nb) Wie groß ist dabei der Wirkungsgrad (in Prozent)?\n\nc) Welche Leistung könnte die Last höchstens aufnehmen (in W)?`,
        teile: [
          {
            typ: "zahl",
            label: "a) P in W",
            loesung: `${U0}^2*${Ra}/(${Ra}+${Ri})^2`,
            einheit: "W",
            fehler: [{ wert: `${U0}^2/${Ra}`, meldung: "An der Last liegen nicht die vollen $U_0$. Ein Teil der Spannung fällt am Innenwiderstand ab. Rechne zuerst den Strom." }],
          },
          { typ: "zahl", label: "b) η in %", loesung: `${Ra}/(${Ra}+${Ri})*100`, einheit: "%" },
          { typ: "zahl", label: "c) P_max in W", loesung: `${U0}^2/(4*${Ri})`, einheit: "W" },
        ],
        hinweis: "I = U₀/(Rₐ + Rᵢ), P = I²·Rₐ, η = Rₐ/(Rₐ + Rᵢ). Das Maximum liegt bei Rₐ = Rᵢ.",
        loesung: `**a)** $I = \\dfrac{${U0}\\,\\text{V}}{${tz(Ra)}\\,\\Omega + ${Ri}\\,\\Omega} = ${tz(U0 / (Ra + Ri), 4)}\\,\\text{A}$, also $P = I^2 R_a = ${tz(P, 3)}\\,\\text{W}$.\n---\n**b)** Durch $R_a$ und $R_i$ fließt derselbe Strom, die Leistung teilt sich wie die Widerstände: $\\eta = \\dfrac{${tz(Ra)}}{${tz(Ra + Ri)}} = ${tz((Ra / (Ra + Ri)) * 100, 1)}\\,\\%$.\n---\n**c)** Höchstens bei Leistungsanpassung $R_a = R_i$: $P_{\\max} = \\dfrac{U_0^2}{4R_i} = \\dfrac{(${U0}\\,\\text{V})^2}{${4 * Ri}\\,\\Omega} = ${tz(Pmax, 3)}\\,\\text{W}$, dann mit nur $50\\,\\%$ Wirkungsgrad.`,
      };
    },
  }),
];
