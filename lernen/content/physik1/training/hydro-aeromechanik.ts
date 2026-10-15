import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "hydro-aeromechanik";

export const DRILLS: Drill[] = [
  drill({
    id: "p9-d-druck",
    kapitel: K,
    titel: "Druck aus Kraft und Fläche",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(5, 120);
      const Acm = r.wahl([1, 2, 5, 10, 25, 50, 100, 200] as const);
      const F = m * 9.81;
      const p = F / (Acm * 1e-4);
      return {
        angabe: `Ein Körper mit $${m}\\,\\text{kg}$ steht auf einer Fläche von $${Acm}\\,\\text{cm}^2$. Welchen Druck übt er auf den Boden aus ($g = 9{,}81\\,\\text{m/s}^2$)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*9.81/(${Acm}e-4)`,
            einheit: "Pa",
            fehler: [
              { wert: `${m}*9.81/(${Acm}e-2)`, meldung: "Bei Flächen ist der Umrechnungsfaktor $10^{-4}$: $1\\,\\text{cm}^2 = 10^{-4}\\,\\text{m}^2$, nicht $10^{-2}\\,\\text{m}^2$." },
              { wert: `${m}/(${Acm}e-4)`, meldung: "Du hast die Masse statt der Gewichtskraft eingesetzt. Rechne zuerst $F = m\\cdot g$." },
            ],
          },
        ],
        hinweis: "Zuerst die Gewichtskraft F = m·g, dann die Fläche in m² umrechnen.",
        loesung: `**Ansatz:** Druck ist Kraft pro Fläche, $p = F/A$. Die Kraft ist die Gewichtskraft.\n---\n**Kraft und Fläche:** $F = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2 = ${tz(F, 2)}\\,\\text{N}$ und $A = ${Acm}\\cdot 10^{-4}\\,\\text{m}^2$.\n---\n**Druck:** $p = F/A = ${tz(p, 0)}\\,\\text{Pa}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-schweredruck",
    kapitel: K,
    titel: "Druck in einer Flüssigkeit",
    niveau: 1,
    erzeuge: (r) => {
      const [name, rho] = r.wahl([
        ["Süßwasser", 1000],
        ["Meerwasser", 1025],
        ["Öl", 850],
        ["Quecksilber", 13546],
      ] as const);
      const h = rho > 5000 ? r.int(1, 30) / 100 : r.int(1, 60);
      const ps = rho * 9.81 * h;
      return {
        angabe: `Berechne den Absolutdruck in $${tz(h)}\\,\\text{m}$ Tiefe in ${name} ($\\rho = ${rho}\\,\\text{kg/m}^3$, Luftdruck $p_0 = 101\\,300\\,\\text{Pa}$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `101300 + ${rho}*9.81*${h}`,
            einheit: "Pa",
            fehler: [{ wert: `${rho}*9.81*${h}`, meldung: "Das ist nur der Überdruck der Flüssigkeit. Der Absolutdruck enthält auch den Luftdruck an der Oberfläche." }],
          },
        ],
        hinweis: "p = p₀ + ρ·g·h mit allen Größen in SI-Einheiten.",
        loesung: `**Ansatz:** In der Tiefe $h$ gilt $p = p_0 + \\rho g h$.\n---\n**Schweredruck:** $\\rho g h = ${rho}\\cdot 9{,}81\\cdot ${tz(h)}\\,\\text{Pa} = ${tz(ps, 0)}\\,\\text{Pa}$.\n---\n**Absolutdruck:** $p = 101\\,300\\,\\text{Pa} + ${tz(ps, 0)}\\,\\text{Pa} = ${tz(101300 + ps, 0)}\\,\\text{Pa}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-hydraulik",
    kapitel: K,
    titel: "Hydraulische Presse mit Durchmessern",
    niveau: 2,
    erzeuge: (r) => {
      const d1 = r.int(1, 5);
      const k = r.int(3, 12);
      const d2 = d1 * k;
      const F1 = r.int(2, 30) * 10;
      const F2 = F1 * k * k;
      return {
        angabe: `Bei einer hydraulischen Presse hat der Pumpkolben $${d1}\\,\\text{cm}$ Durchmesser, der Arbeitskolben $${d2}\\,\\text{cm}$. Am Pumpkolben wirken $${F1}\\,\\text{N}$. Welche Kraft liefert der Arbeitskolben?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${F1}*(${d2}/${d1})^2`,
            einheit: "N",
            fehler: [{ wert: `${F1}*${d2}/${d1}`, meldung: "Die Kräfte verhalten sich wie die **Flächen**. Kreisflächen wachsen mit dem Quadrat des Durchmessers, also musst du das Durchmesserverhältnis quadrieren." }],
          },
        ],
        hinweis: "Die Flächen verhalten sich wie die Quadrate der Durchmesser.",
        loesung: `**Ansatz:** Nach Pascal ist der Druck an beiden Kolben gleich, also $F_2/F_1 = A_2/A_1 = (d_2/d_1)^2$.\n---\n**Flächenverhältnis:** $(${d2}/${d1})^2 = ${k}^2 = ${k * k}$.\n---\n**Kraft:** $F_2 = ${F1}\\,\\text{N}\\cdot ${k * k} = ${tz(F2)}\\,\\text{N}$. Der Arbeitskolben bewegt sich dafür nur um $\\tfrac{1}{${k * k}}$ des Weges des Pumpkolbens.`,
      };
    },
  }),
  drill({
    id: "p9-d-auftrieb",
    kapitel: K,
    titel: "Auftriebskraft",
    niveau: 1,
    erzeuge: (r) => {
      const VL = r.int(1, 50) / 2;
      const [fl, rho] = r.wahl([
        ["Wasser", 1000],
        ["Meerwasser", 1025],
        ["Spiritus", 790],
      ] as const);
      const [stoff, rhoK] = r.wahl([
        ["Eisen", 7870],
        ["Aluminium", 2700],
        ["Granit", 2700],
        ["Blei", 11340],
      ] as const);
      return {
        angabe: `Ein Körper aus ${stoff} ($\\rho_K = ${rhoK}\\,\\text{kg/m}^3$) mit $${tz(VL)}\\,\\text{L}$ Volumen taucht ganz in ${fl} ($\\rho = ${rho}\\,\\text{kg/m}^3$) ein. Wie groß ist der Auftrieb?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${rho}*9.81*${VL}e-3`,
            einheit: "N",
            fehler: [
              { wert: `${rhoK}*9.81*${VL}e-3`, meldung: "Das ist die Gewichtskraft des Körpers. In die Auftriebsformel gehört die Dichte der **Flüssigkeit**." },
              { wert: `${rho}*9.81*${VL}`, meldung: "Das Volumen muss in $\\text{m}^3$ stehen: $1\\,\\text{L} = 10^{-3}\\,\\text{m}^3$." },
            ],
          },
        ],
        hinweis: "Der Auftrieb ist das Gewicht der verdrängten Flüssigkeit; das Material des Körpers spielt keine Rolle.",
        loesung: `**Ansatz:** Archimedes, $F_A = \\rho_\\text{Fl}\\, g\\, V$. Die Dichte des Körpers wird nicht gebraucht.\n---\n**Volumen:** $V = ${tz(VL)}\\cdot 10^{-3}\\,\\text{m}^3$.\n---\n**Auftrieb:** $F_A = ${rho}\\cdot 9{,}81\\cdot ${tz(VL)}\\cdot 10^{-3}\\,\\text{N} = ${tz(rho * 9.81 * VL * 1e-3, 3)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-schwimmanteil",
    kapitel: K,
    titel: "Eingetauchter Anteil eines schwimmenden Körpers",
    niveau: 2,
    erzeuge: (r) => {
      const [stoff, rhoK] = r.wahl([
        ["Kiefernholz", 520],
        ["Eichenholz", 750],
        ["Eis", 917],
        ["Kork", 240],
        ["Paraffin", 900],
      ] as const);
      const [fl, rhoF] = r.wahl([
        ["Süßwasser", 1000],
        ["Meerwasser", 1025],
        ["Salzlake", 1200],
      ] as const);
      return {
        angabe: `${stoff} ($\\rho = ${rhoK}\\,\\text{kg/m}^3$) schwimmt in ${fl} ($\\rho = ${rhoF}\\,\\text{kg/m}^3$). Welcher Anteil des Volumens (in %) ist eingetaucht?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${rhoK}/${rhoF}*100`,
            einheit: "%",
            fehler: [
              { wert: `${rhoF}/${rhoK}*100`, meldung: "Mehr als 100 % kann nicht eintauchen. Die Dichte des **Körpers** gehört in den Zähler." },
              { wert: `(1-${rhoK}/${rhoF})*100`, meldung: "Das ist der Anteil, der **herausragt**." },
            ],
          },
        ],
        hinweis: "Auftrieb = Gewicht, daraus V_eing/V = ρ_K/ρ_Fl.",
        loesung: `**Ansatz:** Beim Schwimmen ist $\\rho_\\text{Fl}\\, g\\, V_\\text{eing} = \\rho_K\\, g\\, V$, also $V_\\text{eing}/V = \\rho_K/\\rho_\\text{Fl}$.\n---\n**Ergebnis:** $\\dfrac{${rhoK}}{${rhoF}} = ${tz((100 * rhoK) / rhoF, 1)}\\,\\%$. Probe: weniger als 100 %, der Körper schwimmt.`,
      };
    },
  }),
  drill({
    id: "p9-d-dichte-waegung",
    kapitel: K,
    titel: "Dichte aus zwei Wägungen",
    niveau: 2,
    erzeuge: (r) => {
      const [stoff, rhoK] = r.wahl([
        ["Aluminium", 2700],
        ["Eisen", 7870],
        ["Kupfer", 8960],
        ["Blei", 11340],
        ["Glas", 2500],
      ] as const);
      const FA = r.int(10, 60) / 100;
      const FG = Math.round((FA * rhoK) / 1000 * 100) / 100;
      const FW = Math.round((FG - FA) * 100) / 100;
      const rho = (1000 * FG) / (FG - FW);
      return {
        angabe: `Ein Körper zeigt am Kraftmesser in Luft $${tz(FG, 2)}\\,\\text{N}$ und ganz unter Wasser $${tz(FW, 2)}\\,\\text{N}$. Berechne seine Dichte. Aus welchem Stoff könnte er sein?`,
        teile: [
          {
            typ: "zahl",
            loesung: `1000*${FG}/(${FG}-${FW})`,
            einheit: "kg/m³",
            fehler: [{ wert: `1000*${FW}/(${FG}-${FW})`, meldung: "Für die Masse brauchst du das Gewicht **in Luft**. Die Anzeige unter Wasser ist schon um den Auftrieb verkleinert." }],
          },
        ],
        hinweis: "Die Differenz der Anzeigen ist der Auftrieb. Dann ρ = ρ_W · F_G / F_A.",
        loesung: `**Ansatz:** Der Kraftmesser zeigt unter Wasser um den Auftrieb weniger an: $F_A = ${tz(FG, 2)}\\,\\text{N} - ${tz(FW, 2)}\\,\\text{N} = ${tz(FG - FW, 2)}\\,\\text{N}$.\n---\n**Dichte:** $\\rho = \\rho_W\\cdot\\dfrac{F_G}{F_A} = 1000\\,\\text{kg/m}^3\\cdot\\dfrac{${tz(FG, 2)}}{${tz(FG - FW, 2)}} = ${tz(rho, 0)}\\,\\text{kg/m}^3$.\n---\n**Deutung:** Das passt zu ${stoff} ($${rhoK}\\,\\text{kg/m}^3$). Kleine Abweichungen kommen vom Runden der Anzeigen.`,
      };
    },
  }),
  drill({
    id: "p9-d-nutzlast",
    kapitel: K,
    titel: "Nutzlast eines Floßes oder Ballons",
    niveau: 3,
    erzeuge: (r) => {
      if (r.int(0, 1) === 0) {
        const V = r.int(5, 30) / 10;
        const rhoH = r.wahl([450, 500, 550, 600] as const);
        const last = (1000 - rhoH) * V;
        return {
          angabe: `Ein Floß aus Holz ($\\rho = ${rhoH}\\,\\text{kg/m}^3$) hat das Volumen $${tz(V)}\\,\\text{m}^3$. Welche Last in kg trägt es höchstens, bevor es ganz untertaucht (Süßwasser)?`,
          teile: [
            {
              typ: "zahl",
              loesung: `(1000-${rhoH})*${V}`,
              einheit: "kg",
              fehler: [{ wert: `1000*${V}`, meldung: "Das Floß muss auch sich selbst tragen. Zieh seine eigene Masse ab." }],
            },
          ],
          hinweis: "Masse des verdrängten Wassers bei ganz eingetauchtem Floß minus Masse des Floßes.",
          loesung: `**Ansatz:** Ganz untergetaucht verdrängt das Floß $${tz(V)}\\,\\text{m}^3$ Wasser. Weil überall $g$ steht, rechnen wir mit Massen.\n---\n**Massen:** verdrängtes Wasser $${tz(1000 * V, 0)}\\,\\text{kg}$, Floß $${tz(rhoH * V, 0)}\\,\\text{kg}$.\n---\n**Nutzlast:** $${tz(last, 0)}\\,\\text{kg}$. In der Praxis lädt man weniger, damit das Floß nicht überspült wird.`,
        };
      }
      const V = r.int(5, 40);
      const hull = r.int(10, 40) / 10;
      const last = (1.29 - 0.18) * V - hull;
      return {
        angabe: `Ein Heliumballon hat $${V}\\,\\text{m}^3$ Volumen ($\\rho_\\text{He} = 0{,}18\\,\\text{kg/m}^3$, $\\rho_L = 1{,}29\\,\\text{kg/m}^3$). Die Hülle wiegt $${tz(hull)}\\,\\text{kg}$. Welche Nutzlast in kg trägt er höchstens?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(1.29-0.18)*${V}-${hull}`,
            einheit: "kg",
            fehler: [
              { wert: `1.29*${V}-${hull}`, meldung: "Das Helium hat auch Masse und muss mitgetragen werden." },
              { wert: `(1.29-0.18)*${V}`, meldung: "Die Hülle muss auch getragen werden." },
            ],
          },
        ],
        hinweis: "Masse der verdrängten Luft minus Helium minus Hülle.",
        loesung: `**Ansatz:** Der Auftrieb ist das Gewicht der verdrängten Luft. Davon gehen Helium und Hülle ab.\n---\n**Massen:** Luft $${tz(1.29 * V, 2)}\\,\\text{kg}$, Helium $${tz(0.18 * V, 2)}\\,\\text{kg}$, Hülle $${tz(hull)}\\,\\text{kg}$.\n---\n**Nutzlast:** $${tz(last, 2)}\\,\\text{kg}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-barometrisch",
    kapitel: K,
    titel: "Luftdruck in der Höhe",
    niveau: 2,
    erzeuge: (r) => {
      const h = r.int(5, 90) * 100;
      const p = 1013 * Math.exp(-h / 8000);
      return {
        angabe: `Schätze mit der barometrischen Höhenformel ($p_0 = 1013\\,\\text{hPa}$, $H = 8{,}0\\,\\text{km}$) den Luftdruck in $${h}\\,\\text{m}$ Höhe ab. Gib das Ergebnis in hPa an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `1013*exp(-${h}/8000)`,
            einheit: "hPa",
            toleranz: 2,
            fehler: [{ wert: `1013*exp(-${h}/8)`, meldung: "Höhe und Skalenhöhe müssen dieselbe Einheit haben. $H = 8\\,\\text{km} = 8000\\,\\text{m}$." }],
          },
        ],
        hinweis: "p = p₀ · e^(−h/H), h und H in derselben Einheit.",
        loesung: `**Ansatz:** $p = p_0\\, e^{-h/H}$.\n---\n**Exponent:** $h/H = ${h}\\,\\text{m}/8000\\,\\text{m} = ${tz(h / 8000, 4)}$, also $e^{-h/H} = ${tz(Math.exp(-h / 8000), 4)}$.\n---\n**Ergebnis:** $p = 1013\\,\\text{hPa}\\cdot ${tz(Math.exp(-h / 8000), 4)} = ${tz(p, 0)}\\,\\text{hPa}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-kapillar",
    kapitel: K,
    titel: "Steighöhe in einer Kapillare",
    niveau: 1,
    erzeuge: (r) => {
      const dmm = r.wahl([0.1, 0.2, 0.4, 0.5, 0.8, 1.0, 1.6, 2.0] as const);
      const rm = (dmm / 2) * 1e-3;
      const h = (2 * 0.073) / (1000 * 9.81 * rm);
      return {
        angabe: `Wie hoch steigt Wasser ($\\sigma = 0{,}073\\,\\text{N/m}$, $\\theta = 0^\\circ$) in einer Glasröhre mit $${tz(dmm)}\\,\\text{mm}$ **Durchmesser**? Gib das Ergebnis in cm an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `2*0.073/(1000*9.81*${dmm / 2}e-3)*100`,
            einheit: "cm",
            fehler: [{ wert: `2*0.073/(1000*9.81*${dmm}e-3)*100`, meldung: "In die Formel gehört der **Radius**, also der halbe Durchmesser." }],
          },
        ],
        hinweis: "h = 2σ/(ρ g r) mit r in Metern.",
        loesung: `**Ansatz:** $h = \\dfrac{2\\sigma\\cos\\theta}{\\rho g r}$ mit $\\cos 0^\\circ = 1$ und $r = ${tz(dmm / 2)}\\,\\text{mm}$.\n---\n**Ergebnis:** $h = \\dfrac{2\\cdot 0{,}073}{1000\\cdot 9{,}81\\cdot ${tz(dmm / 2)}\\cdot 10^{-3}}\\,\\text{m} = ${tz(h * 100, 2)}\\,\\text{cm}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-kontinuitaet",
    kapitel: K,
    titel: "Kontinuitätsgleichung",
    niveau: 1,
    erzeuge: (r) => {
      const d1 = r.int(2, 10);
      const d2 = r.int(1, d1 - 1);
      const v1 = r.int(2, 30) / 10;
      const v2 = v1 * (d1 / d2) ** 2;
      return {
        angabe: `Wasser strömt mit $${tz(v1)}\\,\\text{m/s}$ durch ein Rohr mit $${d1}\\,\\text{cm}$ Durchmesser, das sich auf $${d2}\\,\\text{cm}$ verengt. Wie schnell strömt es in der Verengung?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${v1}*(${d1}/${d2})^2`,
            einheit: "m/s",
            fehler: [{ wert: `${v1}*${d1}/${d2}`, meldung: "In der Kontinuitätsgleichung stehen Flächen. Das Durchmesserverhältnis muss quadriert werden." }],
          },
        ],
        hinweis: "A₁·v₁ = A₂·v₂ und A ∝ d².",
        loesung: `**Ansatz:** $A_1 v_1 = A_2 v_2$, also $v_2 = v_1\\left(\\dfrac{d_1}{d_2}\\right)^2$.\n---\n**Ergebnis:** $v_2 = ${tz(v1)}\\,\\text{m/s}\\cdot\\left(\\dfrac{${d1}}{${d2}}\\right)^2 = ${tz(v2, 3)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-venturi",
    kapitel: K,
    titel: "Druckabfall in einer Verengung",
    niveau: 2,
    erzeuge: (r) => {
      const v1 = r.int(1, 5);
      const k = r.wahl([2, 3, 4] as const);
      const v2 = v1 * k;
      const dp = 0.5 * 1000 * (v2 * v2 - v1 * v1);
      return {
        angabe: `In einem waagrechten Wasserrohr strömt Wasser mit $${v1}\\,\\text{m/s}$. In einer Verengung ist der Querschnitt ${k === 2 ? "halb" : k === 3 ? "ein Drittel" : "ein Viertel"} so groß. Wie groß ist der Druckabfall?`,
        teile: [
          {
            typ: "zahl",
            loesung: `0.5*1000*((${v1}*${k})^2 - ${v1}^2)`,
            einheit: "Pa",
            fehler: [
              { wert: `0.5*1000*(${v1}*${k})^2`, meldung: "Das Wasser hatte vorher schon $v_1$. Du musst $\\tfrac12\\rho v_1^2$ abziehen." },
              { wert: `0.5*1000*(${v1}*${k}-${v1})^2`, meldung: "Man subtrahiert die Quadrate, nicht das Quadrat der Differenz." },
            ],
          },
        ],
        hinweis: "Erst Kontinuität (Fläche als Bruchteil), dann Bernoulli waagrecht.",
        loesung: `**Ansatz:** Kontinuität liefert $v_2$, Bernoulli den Druckabfall $\\tfrac12\\rho(v_2^2 - v_1^2)$.\n---\n**Geschwindigkeit:** $v_2 = ${k}\\cdot ${v1}\\,\\text{m/s} = ${v2}\\,\\text{m/s}$.\n---\n**Druckabfall:** $\\Delta p = 500\\,\\text{kg/m}^3\\cdot(${v2 * v2} - ${v1 * v1})\\,\\text{m}^2/\\text{s}^2 = ${tz(dp)}\\,\\text{Pa}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-torricelli",
    kapitel: K,
    titel: "Ausflussgeschwindigkeit",
    niveau: 1,
    erzeuge: (r) => {
      const h = r.int(5, 200) / 10;
      return {
        angabe: `Ein Loch befindet sich $${tz(h)}\\,\\text{m}$ unter dem Wasserspiegel eines großen, offenen Behälters. Mit welcher Geschwindigkeit tritt das Wasser aus?`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(2*9.81*${h})`,
            einheit: "m/s",
            fehler: [{ wert: `2*9.81*${h}`, meldung: "Das ist $v^2$. Zieh noch die Wurzel." }],
          },
        ],
        hinweis: "Bernoulli zwischen Oberfläche und Loch: v = √(2gh).",
        loesung: `**Ansatz:** Oben und am Loch herrscht Luftdruck, oben ruht das Wasser. Bernoulli gibt $v = \\sqrt{2gh}$.\n---\n**Ergebnis:** $v = \\sqrt{2\\cdot 9{,}81\\cdot ${tz(h)}}\\,\\text{m/s} = ${tz(Math.sqrt(2 * 9.81 * h), 2)}\\,\\text{m/s}$, so schnell wie nach freiem Fall aus dieser Höhe.`,
      };
    },
  }),
  drill({
    id: "p9-d-fluegel",
    kapitel: K,
    titel: "Mindestgeschwindigkeit eines Flugzeugs",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(3, 15) * 100;
      const A = r.int(10, 20);
      const cA = r.wahl([1.2, 1.4, 1.5, 1.6] as const);
      const v = Math.sqrt((2 * m * 9.81) / (cA * 1.2 * A));
      return {
        angabe: `Ein Flugzeug hat $${m}\\,\\text{kg}$ Masse und $${A}\\,\\text{m}^2$ Flügelfläche. Der größte Auftriebsbeiwert ist $c_A = ${tz(cA)}$, die Luft hat $1{,}2\\,\\text{kg/m}^3$. Wie schnell muss es mindestens fliegen?`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(2*${m}*9.81/(${cA}*1.2*${A}))`,
            einheit: "m/s",
            fehler: [{ wert: `sqrt(${m}*9.81/(${cA}*1.2*${A}))`, meldung: "Beim Umstellen von $\\tfrac12 c_A\\rho A v^2 = m g$ ist der Faktor $2$ verloren gegangen." }],
          },
        ],
        hinweis: "Auftrieb ½·c_A·ρ·A·v² gleich Gewichtskraft m·g, nach v auflösen.",
        loesung: `**Ansatz:** Im waagrechten Flug ist $\\tfrac12 c_A\\rho A v^2 = m g$, also $v = \\sqrt{2 m g/(c_A\\rho A)}$.\n---\n**Rechnung:** $v = \\sqrt{\\dfrac{2\\cdot ${m}\\cdot 9{,}81}{${tz(cA)}\\cdot 1{,}2\\cdot ${A}}}\\,\\text{m/s} = ${tz(v, 1)}\\,\\text{m/s} = ${tz(v * 3.6, 0)}\\,\\text{km/h}$.`,
      };
    },
  }),
  drill({
    id: "p9-d-stokes",
    kapitel: K,
    titel: "Sinkgeschwindigkeit nach Stokes",
    niveau: 3,
    erzeuge: (r) => {
      const rmm = r.wahl([0.5, 1.0, 1.5, 2.0] as const);
      const [fl, rhoF, eta] = r.wahl([
        ["Glyzerin", 1260, 1.4],
        ["Honig", 1400, 10],
        ["Rizinusöl", 960, 0.99],
      ] as const);
      const rhoK = 7800;
      const rr = rmm * 1e-3;
      const v = (2 * rr * rr * (rhoK - rhoF) * 9.81) / (9 * eta);
      return {
        angabe: `Eine Stahlkugel ($\\rho = 7800\\,\\text{kg/m}^3$, Radius $${tz(rmm)}\\,\\text{mm}$) sinkt in ${fl} ($\\rho = ${rhoF}\\,\\text{kg/m}^3$, $\\eta = ${tz(eta)}\\,\\text{Pa}\\cdot\\text{s}$). Berechne ihre Endgeschwindigkeit in mm/s. Berücksichtige den Auftrieb.`,
        teile: [
          {
            typ: "zahl",
            loesung: `2*(${rmm}e-3)^2*(7800-${rhoF})*9.81/(9*${eta})*1000`,
            einheit: "mm/s",
            fehler: [{ wert: `2*(${rmm}e-3)^2*7800*9.81/(9*${eta})*1000`, meldung: "Du hast den Auftrieb vergessen. In die Formel gehört $\\rho_K - \\rho_\\text{Fl}$." }],
          },
        ],
        hinweis: "Gleichgewicht: Stokes-Reibung + Auftrieb = Gewicht, daraus v = 2r²(ρ_K − ρ_Fl)g/(9η).",
        loesung: `**Ansatz:** Bei der Endgeschwindigkeit gilt $6\\pi\\eta r v + \\rho_\\text{Fl} g V = \\rho_K g V$ mit $V = \\tfrac43\\pi r^3$. Umgestellt: $v = \\dfrac{2 r^2(\\rho_K - \\rho_\\text{Fl}) g}{9\\eta}$.\n---\n**Rechnung:** $v = \\dfrac{2\\cdot(${tz(rmm)}\\cdot 10^{-3}\\,\\text{m})^2\\cdot ${rhoK - rhoF}\\,\\text{kg/m}^3\\cdot 9{,}81\\,\\text{m/s}^2}{9\\cdot ${tz(eta)}\\,\\text{Pa}\\cdot\\text{s}} = ${tz(v * 1000, 3)}\\,\\text{mm/s}$.\n---\n**Plausibilität:** Kleine Kugeln in zähen Flüssigkeiten sinken langsam; die Strömung ist laminar, Stokes darf verwendet werden.`,
      };
    },
  }),
  drill({
    id: "p9-d-luftwiderstand",
    kapitel: K,
    titel: "Luftwiderstand und Leistung",
    niveau: 2,
    erzeuge: (r) => {
      const cw = r.wahl([0.25, 0.3, 0.35, 0.4, 0.9] as const);
      const A = r.wahl([0.5, 1.8, 2.0, 2.2, 2.5] as const);
      const vk = r.wahl([36, 54, 72, 90, 108, 126, 144] as const);
      const v = vk / 3.6;
      const F = 0.5 * cw * 1.2 * A * v * v;
      return {
        angabe: `Ein Fahrzeug ($c_w = ${tz(cw)}$, $A = ${tz(A)}\\,\\text{m}^2$) fährt mit $${vk}\\,\\text{km/h}$ ($\\rho_L = 1{,}2\\,\\text{kg/m}^3$). Berechne die Luftwiderstandskraft und die dafür nötige Leistung.`,
        teile: [
          {
            typ: "zahl",
            label: "Kraft",
            loesung: `0.5*${cw}*1.2*${A}*(${vk}/3.6)^2`,
            einheit: "N",
            fehler: [{ wert: `0.5*${cw}*1.2*${A}*${vk}^2`, meldung: "Die Geschwindigkeit muss in m/s stehen. Teile km/h durch 3,6." }],
          },
          { typ: "zahl", label: "Leistung", loesung: `0.5*${cw}*1.2*${A}*(${vk}/3.6)^3`, einheit: "W" },
        ],
        hinweis: "Geschwindigkeit in m/s umrechnen; P = F·v.",
        loesung: `**Ansatz:** Turbulente Umströmung, $F_W = \\tfrac12 c_w\\rho A v^2$, und bei konstanter Geschwindigkeit $P = F_W v$.\n---\n**Geschwindigkeit:** $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 3)}\\,\\text{m/s}$.\n---\n**Kraft:** $F_W = ${tz(F, 1)}\\,\\text{N}$. **Leistung:** $P = ${tz(F * v, 0)}\\,\\text{W}$.`,
      };
    },
  }),
];
