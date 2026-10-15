import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "hauptsaetze-waermekraftmaschinen";
const R = 8.314;

export const DRILLS: Drill[] = [
  drill({
    id: "p11-d-erster-hauptsatz",
    kapitel: K,
    titel: "Erster Hauptsatz ΔU = Q + W",
    niveau: 1,
    erzeuge: (r) => {
      const Q = r.intOhne0(-20, 20) * 50;
      const Wab = r.intOhne0(-20, 20) * 25;
      const satz1 = Q > 0 ? `Einem Gas werden $${Q}\\,\\text{J}$ Wärme zugeführt` : `Ein Gas gibt $${-Q}\\,\\text{J}$ Wärme ab`;
      const arb = Wab > 0 ? `verrichtet es $${Wab}\\,\\text{J}$ Arbeit an der Umgebung` : `wird an ihm $${-Wab}\\,\\text{J}$ Arbeit verrichtet`;
      return {
        angabe: `${satz1}. Gleichzeitig ${arb}. Wie groß ist die Änderung $\\Delta U$ der inneren Energie?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${Q} - (${Wab})`,
            einheit: "J",
            fehler: [
              {
                wert: `${Q} + (${Wab})`,
                meldung: "Du hast die Arbeit mit dem falschen Vorzeichen gezählt. In der Kurskonvention ist $W$ die Arbeit **am** Gas. Verrichtet das Gas selbst Arbeit, ist $W$ negativ.",
              },
            ],
          },
        ],
        hinweis: "Kurskonvention: Q ist die zugeführte Wärme, W die am Gas verrichtete Arbeit. Abgegebenes zählt negativ.",
        loesung: `**Vorzeichen:** $Q = ${Q}\\,\\text{J}$ und $W = ${-Wab}\\,\\text{J}$ (Arbeit am Gas).\n---\n**Erster Hauptsatz:** $\\Delta U = Q + W = ${Q}\\,\\text{J} ${-Wab < 0 ? "-" : "+"} ${Math.abs(Wab)}\\,\\text{J} = ${Q - Wab}\\,\\text{J}$. ${Q - Wab > 0 ? "Die innere Energie steigt." : Q - Wab < 0 ? "Die innere Energie sinkt." : "Die innere Energie bleibt gleich."}`,
      };
    },
  }),
  drill({
    id: "p11-d-isobar-arbeit",
    kapitel: K,
    titel: "Volumenarbeit bei konstantem Druck",
    niveau: 1,
    erzeuge: (r) => {
      const p = r.int(1, 10);
      const V1 = r.int(1, 20);
      const V2 = V1 + r.int(1, 20);
      return {
        angabe: `Ein Gas dehnt sich bei konstant $${p}\\,\\text{bar}$ von $${V1}\\,\\text{L}$ auf $${V2}\\,\\text{L}$ aus. Wie viel Arbeit verrichtet das Gas?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${p}e5*(${V2}-${V1})*1e-3`,
            einheit: "J",
            fehler: [{ wert: `${p}*(${V2}-${V1})`, meldung: "Du hast bar mal Liter als Joule genommen. Es gilt $1\\,\\text{bar}\\cdot 1\\,\\text{L} = 100\\,\\text{J}$." }],
          },
        ],
        hinweis: "In SI umrechnen: 1 bar = 10⁵ Pa, 1 L = 10⁻³ m³. Oder: 1 bar · 1 L = 100 J.",
        loesung: `**Ansatz:** Der Druck ist konstant, also $W_\\text{vom Gas} = p\\,\\Delta V$ mit $\\Delta V = ${V2 - V1}\\,\\text{L}$.\n---\n$W_\\text{vom Gas} = ${p}\\cdot 10^5\\,\\text{Pa}\\cdot ${V2 - V1}\\cdot 10^{-3}\\,\\text{m}^3 = ${p * (V2 - V1) * 100}\\,\\text{J}$. In der Kurskonvention ist die Arbeit am Gas $W = -${p * (V2 - V1) * 100}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p11-d-isotherm",
    kapitel: K,
    titel: "Isotherme Arbeit",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(1, 5) / 2;
      const T = r.int(25, 80) * 10;
      const V1 = r.int(2, 20);
      const V2 = V1 * r.wahl([2, 3, 4, 5] as const);
      const W = n * R * T * Math.log(V2 / V1);
      return {
        angabe: `$${tz(n)}\\,\\text{mol}$ ideales Gas dehnen sich bei $${T}\\,\\text{K}$ isotherm von $${V1}\\,\\text{L}$ auf $${V2}\\,\\text{L}$ aus. Wie viel Wärme nimmt das Gas auf?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n}*8.314*${T}*ln(${V2}/${V1})`,
            einheit: "J",
            fehler: [
              { wert: "0", meldung: "Isotherm heißt nicht „ohne Wärme“. Damit das Gas beim Arbeiten nicht abkühlt, muss Wärme nachfließen." },
              { wert: `${n}*8.314*${T}*log(${V2}/${V1}, 10)`, meldung: "Du hast den Zehnerlogarithmus verwendet. Die Formel braucht den natürlichen Logarithmus, Taste „ln“." },
            ],
          },
        ],
        hinweis: "Isotherm: ΔU = 0, also ist die aufgenommene Wärme gleich der Arbeit des Gases, nRT·ln(V₂/V₁).",
        loesung: `**Ansatz:** Bei konstanter Temperatur ist $\\Delta U = 0$, also $Q = W_\\text{vom Gas} = nRT\\ln\\dfrac{V_2}{V_1}$.\n---\n$Q = ${tz(n)}\\,\\text{mol}\\cdot 8{,}314\\,\\tfrac{\\text{J}}{\\text{mol K}}\\cdot ${T}\\,\\text{K}\\cdot\\ln ${V2 / V1} = ${tz(W, 0)}\\,\\text{J}$. Die gesamte Wärme wird zu Arbeit.`,
      };
    },
  }),
  drill({
    id: "p11-d-isochor",
    kapitel: K,
    titel: "Isochore Erwärmung",
    niveau: 2,
    erzeuge: (r) => {
      const f = r.wahl([3, 5] as const);
      const n = r.int(1, 8) / 2;
      const dT = r.int(2, 30) * 5;
      const andere = f === 3 ? 5 : 3;
      return {
        angabe: `$${tz(n)}\\,\\text{mol}$ eines ${f === 3 ? "einatomigen" : "zweiatomigen"} idealen Gases werden in einem starren Behälter um $${dT}\\,\\text{K}$ erwärmt. Wie viel Wärme ist nötig?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${f}/2*${n}*8.314*${dT}`,
            einheit: "J",
            fehler: [{ wert: `${andere}/2*${n}*8.314*${dT}`, meldung: `Du hast $f = ${andere}$ verwendet. Ein ${f === 3 ? "einatomiges" : "zweiatomiges"} Gas hat $f = ${f}$.` }],
          },
        ],
        hinweis: `Isochor: W = 0, also Q = ΔU = n·(f/2)·R·ΔT mit f = ${f}.`,
        loesung: `**Ansatz:** Starrer Behälter, also $W = 0$ und $Q = \\Delta U = \\tfrac{${f}}{2}\\,nR\\,\\Delta T$.\n---\n$Q = \\tfrac{${f}}{2}\\cdot ${tz(n)}\\,\\text{mol}\\cdot 8{,}314\\,\\tfrac{\\text{J}}{\\text{mol K}}\\cdot ${dT}\\,\\text{K} = ${tz((f / 2) * n * R * dT, 1)}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p11-d-adiabat-temperatur",
    kapitel: K,
    titel: "Temperatur nach adiabatischer Verdichtung",
    niveau: 2,
    erzeuge: (r) => {
      const eps = r.wahl([4, 5, 6, 8, 10, 12, 16, 20] as const);
      const t1 = r.int(0, 30);
      const T2 = (t1 + 273.15) * Math.pow(eps, 0.4);
      return {
        angabe: `Luft ($\\kappa = 1{,}4$) mit $${t1}\\,^\\circ\\text{C}$ wird schnell und ohne Wärmeaustausch auf $1/${eps}$ ihres Volumens verdichtet. Welche Temperatur in Kelvin hat sie danach?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${t1}+273.15)*${eps}^0.4`,
            einheit: "K",
            fehler: [
              { wert: `(${t1}+273.15)*${eps}^1.4`, meldung: "In der Hochzahl steht $\\kappa - 1 = 0{,}4$, nicht $\\kappa$. Die Formel $p V^\\kappa$ gilt für den Druck, für die Temperatur gilt $T V^{\\kappa-1}$." },
              { wert: `(${t1}+273.15)*${eps}`, meldung: "Das wäre richtig, wenn die Temperatur proportional zur Verdichtung stiege. Adiabatisch gilt aber $T_2 = T_1(V_1/V_2)^{\\kappa - 1}$." },
            ],
          },
        ],
        hinweis: "Adiabatisch gilt T·V^(κ−1) = konstant, also T₂ = T₁·(V₁/V₂)^0,4. T₁ in Kelvin einsetzen.",
        loesung: `**Ansatz:** Ohne Wärmeaustausch ist der Vorgang adiabatisch, also $T_2 = T_1\\left(\\dfrac{V_1}{V_2}\\right)^{\\kappa - 1}$ mit $T_1$ in Kelvin.\n---\n$T_1 = ${tz(t1 + 273.15, 2)}\\,\\text{K}$ und $${eps}^{0{,}4} = ${tz(Math.pow(eps, 0.4), 3)}$.\n---\n$T_2 = ${tz(t1 + 273.15, 2)}\\,\\text{K}\\cdot ${tz(Math.pow(eps, 0.4), 3)} = ${tz(T2, 0)}\\,\\text{K}$, also rund $${tz(T2 - 273.15, 0)}\\,^\\circ\\text{C}$. Die am Gas verrichtete Arbeit hat seine innere Energie erhöht.`,
      };
    },
  }),
  drill({
    id: "p11-d-wirkungsgrad",
    kapitel: K,
    titel: "Wirkungsgrad und Abwärme",
    niveau: 1,
    erzeuge: (r) => {
      const Pel = r.int(1, 20) * 50;
      const eta = r.wahl([25, 30, 35, 40, 45, 55, 60] as const);
      return {
        angabe: `Ein Kraftwerk liefert $${Pel}\\,\\text{MW}$ elektrische Leistung bei $${eta}\\,\\%$ Wirkungsgrad. Wie groß ist die Abwärmeleistung?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${Pel}/${eta / 100} - ${Pel}`,
            einheit: "MW",
            fehler: [{ wert: `${Pel}*(1-${eta / 100})`, meldung: "Der Verlustanteil $1 - \\eta$ bezieht sich auf die **zugeführte** Leistung, nicht auf die elektrische. Berechne zuerst $P_\\text{zu} = P_\\text{el}/\\eta$." }],
          },
        ],
        hinweis: "Zuerst die zugeführte Leistung P_zu = P_el/η, dann Abwärme = P_zu − P_el.",
        loesung: `**Zugeführte Leistung:** $P_\\text{zu} = ${Pel}\\,\\text{MW}/${tz(eta / 100)} = ${tz(Pel / (eta / 100), 1)}\\,\\text{MW}$.\n---\n**Abwärme:** $P_\\text{ab} = P_\\text{zu} - P_\\text{el} = ${tz(Pel / (eta / 100) - Pel, 1)}\\,\\text{MW}$.`,
      };
    },
  }),
  drill({
    id: "p11-d-carnot",
    kapitel: K,
    titel: "Carnot-Wirkungsgrad",
    niveau: 1,
    erzeuge: (r) => {
      const th = r.int(15, 60) * 10;
      const tk = r.int(1, 6) * 10;
      return {
        angabe: `Eine Wärmekraftmaschine arbeitet zwischen $${th}\\,^\\circ\\text{C}$ und $${tk}\\,^\\circ\\text{C}$. Wie groß ist der Carnot-Wirkungsgrad in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(1-(${tk}+273.15)/(${th}+273.15))*100`,
            einheit: "%",
            fehler: [{ wert: `(1-${tk}/${th})*100`, meldung: "Du hast in Grad Celsius gerechnet. Der Carnot-Wirkungsgrad ist ein Temperaturverhältnis und gilt nur mit Kelvin." }],
          },
        ],
        hinweis: "η_C = 1 − T_k/T_h, beide Temperaturen in Kelvin.",
        loesung: `**Umrechnen:** $T_h = ${tz(th + 273.15, 2)}\\,\\text{K}$, $T_k = ${tz(tk + 273.15, 2)}\\,\\text{K}$.\n---\n$\\eta_C = 1 - \\dfrac{${tz(tk + 273.15, 2)}}{${tz(th + 273.15, 2)}} = ${tz((1 - (tk + 273.15) / (th + 273.15)) * 100, 1)}\\,\\%$. Mehr kann keine Maschine zwischen diesen Temperaturen erreichen.`,
      };
    },
  }),
  drill({
    id: "p11-d-otto",
    kapitel: K,
    titel: "Wirkungsgrad des Otto-Prozesses",
    niveau: 1,
    erzeuge: (r) => {
      const eps = r.wahl([6, 7, 8, 9, 10, 11, 12] as const);
      const eta = (1 - Math.pow(eps, -0.4)) * 100;
      return {
        angabe: `Ein idealer Otto-Prozess hat das Verdichtungsverhältnis $\\varepsilon = ${eps}$ und $\\kappa = 1{,}4$. Wie groß ist sein Wirkungsgrad in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(1-${eps}^(-0.4))*100`,
            einheit: "%",
            fehler: [{ wert: `(1-${eps}^(-1.4))*100`, meldung: "In der Hochzahl steht $1 - \\kappa = -0{,}4$, nicht $-\\kappa$. Ein Wirkungsgrad über $90\\,\\%$ ist für einen Motor unrealistisch." }],
          },
        ],
        hinweis: "η = 1 − ε^(1−κ) = 1 − ε^(−0,4).",
        loesung: `**Ansatz:** $\\eta = 1 - \\varepsilon^{1-\\kappa}$ mit $1 - \\kappa = -0{,}4$.\n---\n$${eps}^{-0{,}4} = ${tz(Math.pow(eps, -0.4), 3)}$, also $\\eta = 1 - ${tz(Math.pow(eps, -0.4), 3)} = ${tz(eta, 1)}\\,\\%$. Reale Motoren erreichen etwa die Hälfte.`,
      };
    },
  }),
  drill({
    id: "p11-d-kreis-rechteck",
    kapitel: K,
    titel: "Rechteckiger Kreisprozess: Wirkungsgrad",
    niveau: 3,
    erzeuge: (r) => {
      const f = r.wahl([3, 5] as const);
      const pu = r.int(1, 3);
      const po = pu + r.int(1, 3);
      const Va = r.int(1, 3);
      const Vb = Va + r.int(1, 4);
      // pV in J (bar L * 100)
      const A = pu * Va * 100, B = po * Va * 100, C = po * Vb * 100;
      const Qab = (f / 2) * (B - A);
      const Qbc = (f / 2) * (C - B) + po * (Vb - Va) * 100;
      const Wn = (po - pu) * (Vb - Va) * 100;
      return {
        angabe: `Ein ${f === 3 ? "einatomiges" : "zweiatomiges"} ideales Gas ($f = ${f}$) durchläuft im Uhrzeigersinn das Rechteck A ($${Va}\\,\\text{L}$, $${pu}\\,\\text{bar}$), B ($${Va}\\,\\text{L}$, $${po}\\,\\text{bar}$), C ($${Vb}\\,\\text{L}$, $${po}\\,\\text{bar}$), D ($${Vb}\\,\\text{L}$, $${pu}\\,\\text{bar}$). Wie groß ist der Wirkungsgrad in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${Wn}/(${Qab}+${Qbc})*100`,
            einheit: "%",
            fehler: [
              { wert: `${Wn}/${Qbc}*100`, meldung: "Auch im isochoren Schritt A → B fließt Wärme hinein. $Q_\\text{zu}$ ist die Summe aller positiven Wärmen." },
              { wert: "100", meldung: "Netto-Wärme und Nettoarbeit sind immer gleich. In den Nenner gehört nur die **zugeführte** Wärme." },
            ],
          },
        ],
        hinweis: "pV in jeder Ecke in Joule (1 bar·L = 100 J), U = (f/2)·pV. Wärme fließt in A → B und B → C hinein.",
        loesung: `**Ecken:** $pV$ in A $${A}\\,\\text{J}$, in B $${B}\\,\\text{J}$, in C $${C}\\,\\text{J}$. Die innere Energie ist $\\tfrac{${f}}{2}\\,pV$.\n---\n**Zugeführte Wärme:** A → B isochor: $Q = \\tfrac{${f}}{2}(${B} - ${A})\\,\\text{J} = ${tz(Qab, 1)}\\,\\text{J}$. B → C isobar: $Q = \\Delta U - W = ${tz((f / 2) * (C - B), 1)}\\,\\text{J} + ${po * (Vb - Va) * 100}\\,\\text{J} = ${tz(Qbc, 1)}\\,\\text{J}$.\n---\n**Nettoarbeit:** eingeschlossene Fläche $${po - pu}\\,\\text{bar}\\cdot ${Vb - Va}\\,\\text{L} = ${Wn}\\,\\text{J}$.\n---\n$\\eta = \\dfrac{${Wn}}{${tz(Qab + Qbc, 1)}} = ${tz((100 * Wn) / (Qab + Qbc), 1)}\\,\\%$. Die beiden anderen Schritte geben Wärme ab.`,
      };
    },
  }),
  drill({
    id: "p11-d-waermepumpe",
    kapitel: K,
    titel: "Leistungszahl einer Wärmepumpe",
    niveau: 2,
    erzeuge: (r) => {
      const tk = r.int(-10, 12);
      const th = r.int(30, 60);
      return {
        angabe: `Eine ideale Wärmepumpe holt Wärme aus einer Umgebung mit $${tk}\\,^\\circ\\text{C}$ und heizt mit $${th}\\,^\\circ\\text{C}$ Vorlauftemperatur. Berechne die Carnot-Leistungszahl.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${th}+273.15)/(${th}-(${tk}))`,
            fehler: [{ wert: `${th}/(${th}-(${tk}))`, meldung: "Im Zähler steht eine absolute Temperatur. Rechne die Vorlauftemperatur in Kelvin um, nur die Differenz im Nenner ist in beiden Skalen gleich." }],
          },
        ],
        hinweis: "ε = T_h/(T_h − T_k), T_h in Kelvin; die Differenz ist in K und °C gleich.",
        loesung: `**Ansatz:** $\\varepsilon_\\text{WP,C} = \\dfrac{T_h}{T_h - T_k}$ mit $T_h = ${tz(th + 273.15, 2)}\\,\\text{K}$ und $T_h - T_k = ${th - tk}\\,\\text{K}$.\n---\n$\\varepsilon_\\text{C} = \\dfrac{${tz(th + 273.15, 2)}}{${th - tk}} = ${tz((th + 273.15) / (th - tk), 2)}$. Reale Wärmepumpen erreichen etwa die Hälfte davon.`,
      };
    },
  }),
  drill({
    id: "p11-d-kuehlschrank",
    kapitel: K,
    titel: "Kühlschrank: Leistungszahl und Wärme an die Küche",
    niveau: 1,
    erzeuge: (r) => {
      const W = r.int(5, 20) * 10;
      const Qk = W * r.int(2, 4) + r.int(0, 4) * 10;
      return {
        angabe: `Ein Kühlschrank entzieht dem Innenraum $${Qk}\\,\\text{W}$ Wärmeleistung, sein Kompressor nimmt $${W}\\,\\text{W}$ elektrische Leistung auf. Welche Wärmeleistung gibt er an die Küche ab?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${Qk}+${W}`,
            einheit: "W",
            fehler: [{ wert: `${Qk}-${W}`, meldung: "Die elektrische Arbeit verschwindet nicht. Sie wird zusätzlich an die Küche abgegeben, also $Q_h = Q_k + W$." }],
          },
        ],
        hinweis: "Energieerhaltung: Q_h = Q_k + W.",
        loesung: `**Energiebilanz:** $P_h = P_k + P_\\text{el} = ${Qk}\\,\\text{W} + ${W}\\,\\text{W} = ${Qk + W}\\,\\text{W}$.\n---\nDie Leistungszahl als Kühlschrank ist $${Qk}/${W} = ${tz(Qk / W, 2)}$. Die Küche wird stärker geheizt, als der Innenraum gekühlt wird.`,
      };
    },
  }),
  drill({
    id: "p11-d-entropie",
    kapitel: K,
    titel: "Entropieänderung bei Wärmeleitung",
    niveau: 2,
    erzeuge: (r) => {
      const Q = r.int(2, 20) * 100;
      const Tk = r.int(25, 35) * 10;
      const Th = Tk + r.int(5, 30) * 10;
      const dS = Q / Tk - Q / Th;
      return {
        angabe: `$${Q}\\,\\text{J}$ Wärme fließen von einem großen Körper mit $${Th}\\,\\text{K}$ zu einem großen Körper mit $${Tk}\\,\\text{K}$. Um wie viel ändert sich die Gesamtentropie?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${Q}/${Tk}-${Q}/${Th}`,
            einheit: "J/K",
            fehler: [{ wert: `${Q}/${Th}-${Q}/${Tk}`, meldung: "Die Vorzeichen sind vertauscht. Der kalte Körper **gewinnt** die Entropie $Q/T_k$, der heiße verliert $Q/T_h$." }],
          },
        ],
        hinweis: "Der heiße Körper verliert Q/T_h, der kalte gewinnt Q/T_k.",
        loesung: `**Heißer Körper:** $\\Delta S_h = -\\dfrac{${Q}\\,\\text{J}}{${Th}\\,\\text{K}} = ${tz(-Q / Th, 3)}\\,\\text{J/K}$.\n---\n**Kalter Körper:** $\\Delta S_k = +\\dfrac{${Q}\\,\\text{J}}{${Tk}\\,\\text{K}} = ${tz(Q / Tk, 3)}\\,\\text{J/K}$.\n---\n**Summe:** $\\Delta S = ${tz(dS, 3)}\\,\\text{J/K} > 0$, wie es der zweite Hauptsatz für Wärmeleitung verlangt.`,
      };
    },
  }),
  drill({
    id: "p11-d-feuchte",
    kapitel: K,
    titel: "Relative Luftfeuchtigkeit",
    niveau: 1,
    erzeuge: (r) => {
      const [T, fmax] = r.wahl([
        [0, 4.8],
        [5, 6.8],
        [10, 9.4],
        [15, 12.8],
        [20, 17.3],
        [25, 23.0],
        [30, 30.4],
      ] as const);
      const f = Math.round(fmax * r.int(20, 95)) / 100;
      return {
        angabe: `Luft mit $${T}\\,^\\circ\\text{C}$ (Sättigungsmenge $${tz(fmax)}\\,\\text{g/m}^3$) enthält $${tz(f)}\\,\\text{g}$ Wasserdampf pro Kubikmeter. Wie groß ist die relative Feuchte in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${f}/${fmax}*100`,
            einheit: "%",
            fehler: [{ wert: `${fmax}/${f}*100`, meldung: "Du hast den Bruch umgedreht. Eine relative Feuchte über $100\\,\\%$ gibt es nicht. Im Nenner steht die Sättigungsmenge." }],
          },
        ],
        hinweis: "φ = f/f_max · 100 %.",
        loesung: `**Ansatz:** Die relative Feuchte vergleicht den Wassergehalt mit der Sättigungsmenge: $\\varphi = f/f_\\text{max}$.\n---\n$\\varphi = \\dfrac{${tz(f)}}{${tz(fmax)}} = ${tz((100 * f) / fmax, 1)}\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "p11-d-foehn",
    kapitel: K,
    titel: "Föhn: Temperatur auf der Leeseite",
    niveau: 3,
    erzeuge: (r) => {
      const h0 = r.int(2, 6) * 100;
      const T0 = r.int(12, 24);
      const hw = h0 + r.int(4, 10) * 100;
      const hk = hw + r.int(8, 20) * 100;
      const Tk = T0 - (hw - h0) / 100 - (0.6 * (hk - hw)) / 100;
      const Tn = Tk + (hk - h0) / 100;
      return {
        angabe: `Luft mit $${T0}\\,^\\circ\\text{C}$ strömt in $${h0}\\,\\text{m}$ Seehöhe an ein Gebirge. Ab $${hw}\\,\\text{m}$ bilden sich Wolken, und es regnet. Der Kamm liegt auf $${hk}\\,\\text{m}$. Auf der anderen Seite sinkt die Luft wieder auf $${h0}\\,\\text{m}$. Welche Temperatur hat sie dort? Rechne mit $1\\,\\text{K}$ pro $100\\,\\text{m}$ trocken und $0{,}6\\,\\text{K}$ pro $100\\,\\text{m}$ feucht.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${T0}-(${hw}-${h0})/100-0.6*(${hk}-${hw})/100+(${hk}-${h0})/100`,
            einheit: "°C",
            fehler: [
              { wert: `${T0}-(${hw}-${h0})/100-0.6*(${hk}-${hw})/100+0.6*(${hk}-${h0})/100`, meldung: "Beim Abstieg ist die Luft trocken, denn sie hat ihr Wasser abgeregnet. Es gilt $1\\,\\text{K}$ pro $100\\,\\text{m}$, nicht $0{,}6$." },
              { wert: `${T0}`, meldung: "Auf- und Abstieg heben sich nicht auf. Oberhalb der Wolkenuntergrenze kühlt die Luft langsamer ab, beim Abstieg erwärmt sie sich schneller." },
            ],
          },
        ],
        hinweis: "Aufstieg bis zur Wolkenuntergrenze trocken, darüber feucht; Abstieg ganz trocken.",
        loesung: `**Trocken hinauf:** $${hw - h0}\\,\\text{m}$ mit $1\\,\\text{K}/100\\,\\text{m}$, also $${tz(T0 - (hw - h0) / 100, 1)}\\,^\\circ\\text{C}$ an der Wolkenuntergrenze.\n---\n**Feucht hinauf:** $${hk - hw}\\,\\text{m}$ mit $0{,}6\\,\\text{K}/100\\,\\text{m}$, also $${tz(Tk, 1)}\\,^\\circ\\text{C}$ am Kamm.\n---\n**Trocken hinunter:** $${hk - h0}\\,\\text{m}$ mit $1\\,\\text{K}/100\\,\\text{m}$, also $${tz(Tn, 1)}\\,^\\circ\\text{C}$. Die Luft ist $${tz(Tn - T0, 1)}\\,\\text{K}$ wärmer als vorher, weil Kondensationswärme frei wurde.`,
      };
    },
  }),
];
