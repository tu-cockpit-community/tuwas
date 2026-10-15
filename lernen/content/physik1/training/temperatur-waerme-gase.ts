import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "temperatur-waerme-gase";

export const DRILLS: Drill[] = [
  drill({
    id: "p10-d-kelvin",
    kapitel: K,
    titel: "Celsius in Kelvin",
    niveau: 1,
    erzeuge: (r) => {
      const c = r.int(-200, 500);
      return {
        angabe: `Rechne $${c}\\,^\\circ\\text{C}$ in Kelvin um.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c}+273.15`,
            einheit: "K",
            fehler: [{ wert: `${c}-273.15`, meldung: "Der Kelvin-Nullpunkt liegt **tiefer** als der Celsius-Nullpunkt. Die Zahl in Kelvin ist also immer größer: Man addiert $273{,}15$." }],
          },
        ],
        hinweis: "Die Kelvin-Skala hat dieselbe Schrittweite wie Celsius, beginnt aber 273,15 Schritte tiefer.",
        loesung: `**Ansatz:** $T = \\vartheta + 273{,}15$, weil der absolute Nullpunkt bei $-273{,}15\\,^\\circ\\text{C}$ liegt.\n---\n**Ergebnis:** $T = ${c} + 273{,}15 = ${tz(c + 273.15, 2)}\\,\\text{K}$. Probe: Der Wert ist positiv, wie jede Temperatur in Kelvin.`,
      };
    },
  }),
  drill({
    id: "p10-d-fahrenheit",
    kapitel: K,
    titel: "Fahrenheit in Celsius",
    niveau: 1,
    erzeuge: (r) => {
      const c = r.int(-30, 60);
      const f = (9 / 5) * c + 32;
      return {
        angabe: `Ein amerikanisches Thermometer zeigt $${tz(f, 1)}\\,^\\circ\\text{F}$. Wie viel ist das in Grad Celsius?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${f.toFixed(1)}-32)*5/9`,
            einheit: "°C",
            toleranz: 0.1,
            fehler: [{ wert: `${f.toFixed(1)}*5/9`, meldung: "Du hast die $32$ vergessen. Zuerst $32$ abziehen, dann mit $\\tfrac59$ multiplizieren." }],
          },
        ],
        hinweis: "Umkehrung von ϑ_F = 9/5·ϑ + 32: erst 32 abziehen, dann mal 5/9.",
        loesung: `**Ansatz:** Aus $\\vartheta_F = \\tfrac95\\vartheta + 32$ folgt $\\vartheta = \\tfrac59(\\vartheta_F - 32)$.\n---\n**Ergebnis:** $\\vartheta = \\tfrac59\\cdot(${tz(f, 1)} - 32) = ${tz(c, 1)}\\,^\\circ\\text{C}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-ausdehnung",
    kapitel: K,
    titel: "Längenausdehnung",
    niveau: 1,
    erzeuge: (r) => {
      const [stoff, a] = r.wahl([
        ["Stahl", 12],
        ["Kupfer", 17],
        ["Aluminium", 23],
        ["Glas", 8],
      ] as const);
      const l = r.int(1, 200);
      const dT = r.int(5, 80);
      return {
        angabe: `Ein Stab aus ${stoff} ($\\alpha = ${a}\\cdot 10^{-6}\\,\\text{K}^{-1}$) ist $${l}\\,\\text{m}$ lang und wird um $${dT}\\,\\text{K}$ erwärmt. Um wie viele Millimeter verlängert er sich?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a}e-6*${l}*${dT}*1000`,
            einheit: "mm",
            fehler: [{ wert: `${a}e-6*${l}*${dT}`, meldung: "Das ist das Ergebnis in Metern, weil die Länge in Metern eingesetzt ist. Gefragt sind Millimeter." }],
          },
        ],
        hinweis: "Δl = α·l₀·ΔT; das Ergebnis hat die Einheit von l₀.",
        loesung: `**Ansatz:** Längenausdehnung $\\Delta l = \\alpha\\,l_0\\,\\Delta T$.\n---\n**Rechnung:** $\\Delta l = ${a}\\cdot 10^{-6}\\,\\text{K}^{-1}\\cdot ${l}\\,\\text{m}\\cdot ${dT}\\,\\text{K} = ${tz(a * 1e-6 * l * dT, 6)}\\,\\text{m}$.\n---\n**Ergebnis:** $\\Delta l = ${tz(a * 1e-6 * l * dT * 1000, 3)}\\,\\text{mm}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-waerme",
    kapitel: K,
    titel: "Wärmemenge Q = c·m·ΔT",
    niveau: 1,
    erzeuge: (r) => {
      const [stoff, c] = r.wahl([
        ["Wasser", 4190],
        ["Aluminium", 900],
        ["Eisen", 450],
        ["Kupfer", 385],
      ] as const);
      const m = r.int(1, 50) / 10;
      const t1 = r.int(5, 30);
      const t2 = t1 + r.int(10, 70);
      return {
        angabe: `Wie viel Wärme braucht man, um $${tz(m)}\\,\\text{kg}$ ${stoff} ($c = ${c}\\,\\text{J/(kg K)}$) von $${t1}\\,^\\circ\\text{C}$ auf $${t2}\\,^\\circ\\text{C}$ zu erwärmen?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c}*${m}*${t2 - t1}`,
            einheit: "J",
            fehler: [{ wert: `${c}*${m}*${t2}`, meldung: "In die Grundgleichung gehört die **Änderung** der Temperatur, nicht die Endtemperatur." }],
          },
        ],
        hinweis: "Q = c·m·ΔT mit ΔT = Endtemperatur minus Anfangstemperatur.",
        loesung: `**Ansatz:** Erwärmen ohne Phasenübergang, also $Q = c\\,m\\,\\Delta T$ mit $\\Delta T = ${t2} - ${t1} = ${t2 - t1}\\,\\text{K}$.\n---\n**Ergebnis:** $Q = ${c}\\cdot ${tz(m)}\\cdot ${t2 - t1}\\,\\text{J} = ${tz(c * m * (t2 - t1), 0)}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-mischung",
    kapitel: K,
    titel: "Mischungstemperatur (Wasser)",
    niveau: 2,
    erzeuge: (r) => {
      const m1 = r.int(1, 10) * 50;
      const m2 = r.int(1, 10) * 50;
      const t1 = r.int(50, 95);
      const t2 = r.int(5, 30);
      const tm = (m1 * t1 + m2 * t2) / (m1 + m2);
      return {
        angabe: `$${m1}\\,\\text{g}$ Wasser mit $${t1}\\,^\\circ\\text{C}$ werden mit $${m2}\\,\\text{g}$ Wasser mit $${t2}\\,^\\circ\\text{C}$ gemischt. Welche Mischungstemperatur stellt sich ein, wenn keine Wärme verloren geht?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${m1}*${t1}+${m2}*${t2})/(${m1}+${m2})`,
            einheit: "°C",
            toleranz: 0.05,
            fehler:
              m1 === m2
                ? []
                : [{ wert: `(${t1}+${t2})/2`, meldung: "Die Mitte gilt nur bei gleichen Massen. Hier muss man mit den Massen gewichten." }],
          },
        ],
        hinweis: "Abgegebene Wärme = aufgenommene Wärme; bei gleichem Stoff kürzt sich c.",
        loesung: `**Ansatz:** Das heiße Wasser gibt so viel Wärme ab, wie das kalte aufnimmt. Bei gleichem Stoff kürzt sich $c$: $${m1}\\,(${t1} - T_m) = ${m2}\\,(T_m - ${t2})$.\n---\n**Auflösen:** $T_m = \\dfrac{${m1}\\cdot ${t1} + ${m2}\\cdot ${t2}}{${m1 + m2}} = ${tz(tm, 2)}\\,^\\circ\\text{C}$.\n---\n**Probe:** Das Ergebnis liegt zwischen $${t2}$ und $${t1}\\,^\\circ\\text{C}$, näher an der Temperatur der größeren Menge.`,
      };
    },
  }),
  drill({
    id: "p10-d-mischung-stoffe",
    kapitel: K,
    titel: "Mischung zweier Stoffe",
    niveau: 2,
    erzeuge: (r) => {
      const [stoff, c] = r.wahl([
        ["Eisen", 450],
        ["Aluminium", 900],
        ["Kupfer", 385],
      ] as const);
      const mK = r.int(2, 10) / 10;
      const tK = r.int(10, 30) * 10;
      const mW = r.int(5, 30) / 10;
      const tW = r.int(10, 25);
      const C1 = c * mK;
      const C2 = 4190 * mW;
      const tm = (C1 * tK + C2 * tW) / (C1 + C2);
      return {
        angabe: `Ein Stück ${stoff} ($${tz(mK)}\\,\\text{kg}$, $c = ${c}\\,\\text{J/(kg K)}$) mit $${tK}\\,^\\circ\\text{C}$ wird in $${tz(mW)}\\,\\text{kg}$ Wasser von $${tW}\\,^\\circ\\text{C}$ gelegt. Welche Endtemperatur stellt sich ein? Es verdampft kein Wasser.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${c}*${mK}*${tK}+4190*${mW}*${tW})/(${c}*${mK}+4190*${mW})`,
            einheit: "°C",
            toleranz: 0.1,
            fehler: [{ wert: `(${mK}*${tK}+${mW}*${tW})/(${mK}+${mW})`, meldung: "Bei verschiedenen Stoffen darf man nicht nur mit den Massen mitteln. Gewichtet wird mit den Wärmekapazitäten $c\\,m$." }],
          },
        ],
        hinweis: "Gewichteter Mittelwert mit den Wärmekapazitäten C = c·m.",
        loesung: `**Ansatz:** Das Metall gibt Wärme ab, das Wasser nimmt sie auf. Die Endtemperatur ist der mit $C = c\\,m$ gewichtete Mittelwert.\n---\n**Wärmekapazitäten:** $C_1 = ${c}\\cdot ${tz(mK)} = ${tz(C1, 1)}\\,\\text{J/K}$, $C_2 = 4190\\cdot ${tz(mW)} = ${tz(C2, 1)}\\,\\text{J/K}$.\n---\n**Ergebnis:** $T_m = \\dfrac{${tz(C1, 1)}\\cdot ${tK} + ${tz(C2, 1)}\\cdot ${tW}}{${tz(C1 + C2, 1)}}\\,^\\circ\\text{C} = ${tz(tm, 2)}\\,^\\circ\\text{C}$. Das Wasser setzt sich wegen seiner großen Wärmekapazität durch.`,
      };
    },
  }),
  drill({
    id: "p10-d-latent",
    kapitel: K,
    titel: "Schmelzen und Verdampfen",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 40) / 10;
      const verdampfen = r.zufall() < 0.5;
      const q = verdampfen ? 2257000 : 334000;
      return {
        angabe: verdampfen
          ? `Wie viel Wärme braucht man, um $${tz(m)}\\,\\text{kg}$ Wasser von $20\\,^\\circ\\text{C}$ vollständig zu verdampfen ($q_v = 2257\\,\\text{kJ/kg}$)?`
          : `Wie viel Wärme braucht man, um $${tz(m)}\\,\\text{kg}$ Eis von $0\\,^\\circ\\text{C}$ zu schmelzen und das Wasser auf $20\\,^\\circ\\text{C}$ zu erwärmen ($q_s = 334\\,\\text{kJ/kg}$)?`,
        teile: [
          {
            typ: "zahl",
            loesung: verdampfen ? `${m}*(4190*80+2257000)` : `${m}*(334000+4190*20)`,
            einheit: "J",
            fehler: [{ wert: verdampfen ? `${m}*4190*80` : `${m}*4190*20`, meldung: "Du hast den Phasenübergang vergessen. Er braucht die meiste Energie." }],
          },
        ],
        hinweis: "Zwei Abschnitte: Temperaturänderung und Phasenübergang.",
        loesung: verdampfen
          ? `**Ansatz:** Zwei Abschnitte. Zuerst wird das Wasser auf $100\\,^\\circ\\text{C}$ erwärmt, dann verdampft es bei gleichbleibender Temperatur.\n---\n**Erwärmen:** $4190\\cdot ${tz(m)}\\cdot 80\\,\\text{J} = ${tz(4190 * m * 80, 0)}\\,\\text{J}$. **Verdampfen:** $2\\,257\\,000\\cdot ${tz(m)}\\,\\text{J} = ${tz(q * m, 0)}\\,\\text{J}$.\n---\n**Summe:** $${tz(m * (4190 * 80 + q), 0)}\\,\\text{J}$.`
          : `**Ansatz:** Zwei Abschnitte. Zuerst schmilzt das Eis bei $0\\,^\\circ\\text{C}$, dann wird das Schmelzwasser erwärmt.\n---\n**Schmelzen:** $334\\,000\\cdot ${tz(m)}\\,\\text{J} = ${tz(q * m, 0)}\\,\\text{J}$. **Erwärmen:** $4190\\cdot ${tz(m)}\\cdot 20\\,\\text{J} = ${tz(4190 * m * 20, 0)}\\,\\text{J}$.\n---\n**Summe:** $${tz(m * (q + 4190 * 20), 0)}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-eis-reicht",
    kapitel: K,
    titel: "Schmilzt das ganze Eis?",
    niveau: 3,
    erzeuge: (r) => {
      const mW = r.int(1, 6) * 50;
      const tW = r.int(10, 40);
      const mE = r.int(1, 6) * 20;
      const verfuegbar = 4190 * (mW / 1000) * tW;
      const bedarf = 334000 * (mE / 1000);
      const ganz = verfuegbar >= bedarf;
      const tm = ganz ? (4190 * (mW / 1000) * tW - bedarf) / (4190 * ((mW + mE) / 1000)) : 0;
      return {
        angabe: `In $${mW}\\,\\text{g}$ Wasser mit $${tW}\\,^\\circ\\text{C}$ kommen $${mE}\\,\\text{g}$ Eis mit $0\\,^\\circ\\text{C}$. Welche Endtemperatur stellt sich ein ($q_s = 334\\,\\text{kJ/kg}$, keine Verluste)?`,
        teile: [{ typ: "zahl", loesung: ganz ? `(4190*${mW / 1000}*${tW}-334000*${mE / 1000})/(4190*${(mW + mE) / 1000})` : "0", einheit: "°C", toleranz: 0.1 }],
        hinweis: "Prüfe zuerst, ob die Wärme, die das Wasser bis 0 °C abgeben kann, zum Schmelzen reicht.",
        loesung: `**Prüfen:** Das Wasser kann bis $0\\,^\\circ\\text{C}$ höchstens $4190\\cdot ${tz(mW / 1000, 3)}\\cdot ${tW}\\,\\text{J} = ${tz(verfuegbar, 0)}\\,\\text{J}$ abgeben. Das Eis braucht zum Schmelzen $334\\,000\\cdot ${tz(mE / 1000, 3)}\\,\\text{J} = ${tz(bedarf, 0)}\\,\\text{J}$.\n---\n` +
          (ganz
            ? `**Fall:** Die Wärme reicht, alles Eis schmilzt. Bilanz: $4190\\cdot ${tz(mW / 1000, 3)}\\cdot(${tW} - T_m) = ${tz(bedarf, 0)} + 4190\\cdot ${tz(mE / 1000, 3)}\\cdot T_m$.\n---\n**Ergebnis:** $T_m = ${tz(tm, 2)}\\,^\\circ\\text{C}$.`
            : `**Fall:** Die Wärme reicht nicht. Es schmelzen nur $${tz((verfuegbar / 334000) * 1000, 1)}\\,\\text{g}$ Eis.\n---\n**Ergebnis:** Eis und Wasser bleiben nebeneinander, also ist die Endtemperatur genau $0\\,^\\circ\\text{C}$.`),
      };
    },
  }),
  drill({
    id: "p10-d-waermeleitung",
    kapitel: K,
    titel: "Wärmestrom durch eine Dämmung",
    niveau: 2,
    erzeuge: (r) => {
      const [stoff, lam] = r.wahl([
        ["Styropor", 0.035],
        ["Mineralwolle", 0.04],
        ["Holz", 0.13],
      ] as const);
      const A = r.int(5, 60);
      const dcm = r.int(2, 20);
      const dT = r.int(10, 35);
      const P = (lam * A * dT) / (dcm / 100);
      return {
        angabe: `Eine Wand mit $${A}\\,\\text{m}^2$ besteht aus $${dcm}\\,\\text{cm}$ ${stoff} ($\\lambda = ${tz(lam, 3)}\\,\\text{W/(m K)}$). Innen ist es $${dT}\\,\\text{K}$ wärmer als außen. Wie groß ist der Wärmestrom?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${lam}*${A}*${dT}/${dcm / 100}`,
            einheit: "W",
            fehler: [{ wert: `${lam}*${A}*${dT}/${dcm}`, meldung: "Die Dicke muss in Metern stehen, weil λ in W/(m K) angegeben ist." }],
          },
        ],
        hinweis: "P = λ·A·ΔT/d mit d in Metern.",
        loesung: `**Ansatz:** Wärmeleitung durch eine Schicht, $P = \\lambda\\,A\\,\\Delta T/d$ mit $d = ${tz(dcm / 100, 2)}\\,\\text{m}$.\n---\n**Ergebnis:** $P = ${tz(lam, 3)}\\cdot\\dfrac{${A}\\cdot ${dT}}{${tz(dcm / 100, 2)}}\\,\\text{W} = ${tz(P, 1)}\\,\\text{W}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-strahlung-faktor",
    kapitel: K,
    titel: "Strahlung und vierte Potenz",
    niveau: 2,
    erzeuge: (r) => {
      const c1 = r.int(0, 40) * 10;
      const c2 = c1 + r.int(5, 60) * 10;
      const T1 = c1 + 273.15;
      const T2 = c2 + 273.15;
      return {
        angabe: `Ein Körper wird von $${c1}\\,^\\circ\\text{C}$ auf $${c2}\\,^\\circ\\text{C}$ erhitzt. Um welchen Faktor steigt seine abgestrahlte Leistung (ohne Rückstrahlung der Umgebung)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `((${c2}+273.15)/(${c1}+273.15))^4`,
            toleranz: 0.01,
            fehler: [{ wert: `((${c2}+273.15)/(${c1}+273.15))`, meldung: "Die Strahlungsleistung wächst mit der **vierten** Potenz der absoluten Temperatur." }],
          },
        ],
        hinweis: "P ∝ T⁴ mit T in Kelvin.",
        loesung: `**Ansatz:** Nach Stefan-Boltzmann ist $P \\propto T^4$ mit absoluten Temperaturen.\n---\n**Kelvin:** $T_1 = ${tz(T1, 2)}\\,\\text{K}$, $T_2 = ${tz(T2, 2)}\\,\\text{K}$.\n---\n**Faktor:** $(T_2/T_1)^4 = ${tz(T2 / T1, 4)}^4 = ${tz((T2 / T1) ** 4, 3)}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-boyle",
    kapitel: K,
    titel: "Boyle-Mariotte",
    niveau: 1,
    erzeuge: (r) => {
      const p1 = r.int(1, 5);
      const V1 = r.int(2, 20) * 5;
      const V2 = r.int(1, V1 / 5 - 1) * 5 || 5;
      return {
        angabe: `Ein Gas hat bei $${p1}\\,\\text{bar}$ das Volumen $${V1}\\,\\text{L}$. Es wird bei konstanter Temperatur auf $${V2}\\,\\text{L}$ zusammengedrückt. Welcher Druck herrscht dann?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${p1}*${V1}/${V2}`,
            einheit: "bar",
            fehler: [{ wert: `${p1}*${V2}/${V1}`, meldung: "Kleineres Volumen heißt größerer Druck. Das alte Volumen gehört in den Zähler." }],
          },
        ],
        hinweis: "Bei konstanter Temperatur gilt p₁V₁ = p₂V₂.",
        loesung: `**Ansatz:** Konstante Temperatur, also Boyle-Mariotte: $p_1V_1 = p_2V_2$, aufgelöst $p_2 = p_1\\cdot V_1/V_2$.\n---\n**Ergebnis:** $p_2 = ${p1}\\cdot\\dfrac{${V1}}{${V2}}\\,\\text{bar} = ${tz((p1 * V1) / V2, 3)}\\,\\text{bar}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-isochor",
    kapitel: K,
    titel: "Druck bei Erwärmung (Amontons)",
    niveau: 2,
    erzeuge: (r) => {
      const p1 = r.int(10, 60) / 10;
      const t1 = r.int(-10, 25);
      const t2 = t1 + r.int(10, 120);
      return {
        angabe: `Ein Gas in einem starren Behälter hat bei $${t1}\\,^\\circ\\text{C}$ den Absolutdruck $${tz(p1)}\\,\\text{bar}$. Welcher Druck herrscht bei $${t2}\\,^\\circ\\text{C}$?`,
        teile: [{ typ: "zahl", loesung: `${p1}*(${t2}+273.15)/(${t1}+273.15)`, einheit: "bar" }],
        hinweis: "Volumen konstant: p₁/T₁ = p₂/T₂, Temperaturen in Kelvin.",
        loesung: `**Ansatz:** Starrer Behälter, also Amontons: $p_2 = p_1\\cdot T_2/T_1$ mit Kelvin.\n---\n**Kelvin:** $T_1 = ${tz(t1 + 273.15, 2)}\\,\\text{K}$, $T_2 = ${tz(t2 + 273.15, 2)}\\,\\text{K}$.\n---\n**Ergebnis:** $p_2 = ${tz(p1)}\\,\\text{bar}\\cdot\\dfrac{${tz(t2 + 273.15, 2)}}{${tz(t1 + 273.15, 2)}} = ${tz((p1 * (t2 + 273.15)) / (t1 + 273.15), 3)}\\,\\text{bar}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-isobar",
    kapitel: K,
    titel: "Volumen bei Erwärmung (Gay-Lussac)",
    niveau: 2,
    erzeuge: (r) => {
      const V1 = r.int(10, 100) / 10;
      const t1 = r.int(0, 25);
      const t2 = t1 + r.int(10, 200);
      return {
        angabe: `Ein Gas nimmt bei $${t1}\\,^\\circ\\text{C}$ das Volumen $${tz(V1)}\\,\\text{L}$ ein. Welches Volumen hat es bei gleichem Druck und $${t2}\\,^\\circ\\text{C}$?`,
        teile: [{ typ: "zahl", loesung: `${V1}*(${t2}+273.15)/(${t1}+273.15)`, einheit: "L" }],
        hinweis: "Druck konstant: V₁/T₁ = V₂/T₂, Temperaturen in Kelvin.",
        loesung: `**Ansatz:** Konstanter Druck, also Gay-Lussac: $V_2 = V_1\\cdot T_2/T_1$ mit Kelvin.\n---\n**Ergebnis:** $V_2 = ${tz(V1)}\\cdot\\dfrac{${tz(t2 + 273.15, 2)}}{${tz(t1 + 273.15, 2)}}\\,\\text{L} = ${tz((V1 * (t2 + 273.15)) / (t1 + 273.15), 3)}\\,\\text{L}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-allgemein",
    kapitel: K,
    titel: "Allgemeine Gasgleichung",
    niveau: 3,
    erzeuge: (r) => {
      const p1 = r.int(8, 30) / 10;
      const V1 = r.int(2, 20);
      const t1 = r.int(0, 30);
      const p2 = r.int(5, 40) / 10;
      let t2 = r.int(-40, 80);
      // deutliche Temperaturaenderung, sonst laege das Fehlerbild ohne Temperatur in der Toleranz
      if (Math.abs(t2 - t1) < 10) t2 = t1 + 40;
      const V2 = (V1 * (p1 / p2) * (t2 + 273.15)) / (t1 + 273.15);
      return {
        angabe: `Eine abgeschlossene Gasmenge hat $${V1}\\,\\text{L}$ bei $${tz(p1)}\\,\\text{bar}$ und $${t1}\\,^\\circ\\text{C}$. Welches Volumen hat sie bei $${tz(p2)}\\,\\text{bar}$ und $${t2}\\,^\\circ\\text{C}$?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${V1}*(${p1}/${p2})*(${t2}+273.15)/(${t1}+273.15)`,
            einheit: "L",
            fehler: [{ wert: `${V1}*(${p1}/${p2})`, meldung: "Du hast die Temperaturänderung vergessen. Wenn sich Druck **und** Temperatur ändern, gilt die allgemeine Gasgleichung." }],
          },
        ],
        hinweis: "p₁V₁/T₁ = p₂V₂/T₂ mit Kelvin; bar und Liter dürfen bleiben.",
        loesung: `**Ansatz:** Druck und Temperatur ändern sich, also $\\tfrac{p_1V_1}{T_1} = \\tfrac{p_2V_2}{T_2}$, aufgelöst $V_2 = V_1\\cdot\\tfrac{p_1}{p_2}\\cdot\\tfrac{T_2}{T_1}$.\n---\n**Kelvin:** $T_1 = ${tz(t1 + 273.15, 2)}\\,\\text{K}$, $T_2 = ${tz(t2 + 273.15, 2)}\\,\\text{K}$.\n---\n**Ergebnis:** $V_2 = ${V1}\\cdot\\dfrac{${tz(p1)}}{${tz(p2)}}\\cdot\\dfrac{${tz(t2 + 273.15, 2)}}{${tz(t1 + 273.15, 2)}}\\,\\text{L} = ${tz(V2, 3)}\\,\\text{L}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-stoffmenge",
    kapitel: K,
    titel: "Stoffmenge mit pV = nRT",
    niveau: 2,
    erzeuge: (r) => {
      const pbar = r.int(1, 200);
      const VL = r.int(1, 60);
      const t = r.int(0, 40);
      const n = (pbar * 1e5 * VL * 1e-3) / (8.314 * (t + 273.15));
      return {
        angabe: `Wie viel Mol Gas enthält ein Behälter mit $${VL}\\,\\text{L}$ bei $${pbar}\\,\\text{bar}$ (absolut) und $${t}\\,^\\circ\\text{C}$?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${pbar}e5*${VL}e-3/(8.314*(${t}+273.15))`,
            einheit: "mol",
            fehler: [{ wert: `${pbar}*${VL}/(8.314*(${t}+273.15))`, meldung: "Du hast bar und Liter eingesetzt. Mit $R$ in Joule braucht man Pascal und Kubikmeter." }],
          },
        ],
        hinweis: "Alles in SI: Pa, m³, K.",
        loesung: `**Ansatz:** $pV = nRT$, aufgelöst $n = pV/(RT)$, alles in SI.\n---\n**SI-Einheiten:** $p = ${pbar}\\cdot 10^5\\,\\text{Pa}$, $V = ${VL}\\cdot 10^{-3}\\,\\text{m}^3$, $T = ${tz(t + 273.15, 2)}\\,\\text{K}$.\n---\n**Ergebnis:** $n = ${tz(n, 3)}\\,\\text{mol}$.`,
      };
    },
  }),
  drill({
    id: "p10-d-vrms",
    kapitel: K,
    titel: "Teilchengeschwindigkeit v_rms",
    niveau: 2,
    erzeuge: (r) => {
      const [gas, M] = r.wahl([
        ["Helium", 4],
        ["Stickstoff", 28],
        ["Sauerstoff", 32],
        ["Kohlendioxid", 44],
        ["Wasserstoff", 2],
      ] as const);
      const t = r.int(-50, 300);
      const v = Math.sqrt((3 * 8.314 * (t + 273.15)) / (M / 1000));
      return {
        angabe: `Berechne $v_\\text{rms}$ von ${gas} ($M = ${M}\\,\\text{g/mol}$) bei $${t}\\,^\\circ\\text{C}$.`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(3*8.314*(${t}+273.15)/${M / 1000})`,
            einheit: "m/s",
            fehler: [{ wert: `sqrt(3*8.314*(${t}+273.15)/${M})`, meldung: "Die molare Masse muss in kg/mol stehen, weil $R$ in Joule angegeben ist." }],
          },
        ],
        hinweis: "v_rms = √(3RT/M) mit M in kg/mol und T in K.",
        loesung: `**Ansatz:** Aus $\\tfrac12 m\\overline{v^2} = \\tfrac32 k_BT$ folgt $v_\\text{rms} = \\sqrt{3RT/M}$.\n---\n**Einheiten:** $T = ${tz(t + 273.15, 2)}\\,\\text{K}$, $M = ${tz(M / 1000, 3)}\\,\\text{kg/mol}$.\n---\n**Ergebnis:** $v_\\text{rms} = ${tz(v, 1)}\\,\\text{m/s}$.`,
      };
    },
  }),
];
