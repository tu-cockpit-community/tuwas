import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "magnetismus-wechselstrom";
const MU0 = 4 * Math.PI * 1e-7;
const QE = 1.602e-19;
const ME = 9.109e-31;

export const DRILLS: Drill[] = [
  drill({
    id: "p14-d-kraft-leiter",
    kapitel: K,
    titel: "Kraft auf einen Leiter im Magnetfeld",
    niveau: 1,
    erzeuge: (r) => {
      const B = r.wahl([0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1.2] as const);
      const I = r.int(1, 20);
      const lcm = r.wahl([5, 10, 15, 20, 25, 40, 50] as const);
      const w = r.wahl([90, 30, 45, 60] as const);
      const l = lcm / 100;
      const F = B * I * l * Math.sin((w * Math.PI) / 180);
      const fehler = [{ wert: `${B}*${I}*${lcm}*sin(inRad(${w}))`, meldung: "Du hast die Länge in Zentimetern eingesetzt. Ein Tesla ist $1\\,\\text{N}/(\\text{A m})$, also gehört $l$ in Metern in die Formel." }];
      if (w !== 90 && w !== 45)
        fehler.push({ wert: `${B}*${I}*${l}*cos(inRad(${w}))`, meldung: "Du hast den Kosinus genommen. Liegt der Leiter parallel zum Feld ($0^\\circ$), muss die Kraft null sein. Das liefert nur der Sinus." });
      return {
        angabe: `Ein Leiterstück von $${lcm}\\,\\text{cm}$ Länge führt $${I}\\,\\text{A}$ in einem Feld mit $B = ${tz(B)}\\,\\text{T}$. Leiter und Feldlinien schließen den Winkel $${w}^\\circ$ ein. Berechne die Kraft in N.`,
        teile: [{ typ: "zahl", loesung: `${B}*${I}*${l}*sin(inRad(${w}))`, einheit: "N", fehler }],
        hinweis: "F = B·I·l·sin α, die Länge in Metern, α ist der Winkel zwischen Leiter und Feld.",
        loesung: `**Ansatz:** Auf einen Leiter im Magnetfeld wirkt $F = BIl\\sin\\alpha$. Nur der Stromanteil senkrecht zum Feld zählt.\n---\n**Einheiten:** $l = ${lcm}\\,\\text{cm} = ${tz(l)}\\,\\text{m}$.\n---\n**Rechnung:** $F = ${tz(B)}\\,\\dfrac{\\text{N}}{\\text{A m}}\\cdot ${I}\\,\\text{A}\\cdot ${tz(l)}\\,\\text{m}\\cdot\\sin ${w}^\\circ = ${tz(F, 4)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-b-spule",
    kapitel: K,
    titel: "Feld einer langen Spule",
    niveau: 1,
    erzeuge: (r) => {
      const N = r.wahl([100, 200, 300, 500, 800, 1000, 1200] as const);
      const lcm = r.wahl([10, 15, 20, 25, 30, 40, 50] as const);
      const I = r.wahl([0.5, 1.5, 2, 3, 5] as const);
      const l = lcm / 100;
      const B = (MU0 * N * I) / l;
      return {
        angabe: `Eine Luftspule mit $${N}$ Windungen und $${lcm}\\,\\text{cm}$ Länge führt $${tz(I)}\\,\\text{A}$. Berechne die Flussdichte im Inneren in mT.`,
        teile: [
          {
            typ: "zahl",
            loesung: `4*pi*1e-7*${N}*${I}/${l}*1000`,
            einheit: "mT",
            fehler: [
              { wert: `4*pi*1e-7*${N}*${I}/${lcm}*1000`, meldung: "Du hast die Länge in Zentimetern eingesetzt. $\\mu_0$ rechnet mit Metern." },
              { wert: `4*pi*1e-7*${N}*${I}*${l}*1000`, meldung: "Die Länge gehört in den Nenner. Entscheidend ist die Windungsdichte $N/l$." },
            ],
          },
        ],
        hinweis: "B = μ0·N·I/l mit μ0 = 4π·10⁻⁷ T·m/A und l in Metern.",
        loesung: `**Ansatz:** Im Inneren einer langen Luftspule gilt $B = \\mu_0\\dfrac{NI}{l}$.\n---\n**Windungsdichte:** $\\dfrac{N}{l} = \\dfrac{${N}}{${tz(l)}\\,\\text{m}} = ${tz(N / l, 2)}\\,\\text{m}^{-1}$.\n---\n**Rechnung:** $B = 4\\pi\\cdot 10^{-7}\\,\\dfrac{\\text{T m}}{\\text{A}}\\cdot ${tz(N / l, 2)}\\,\\text{m}^{-1}\\cdot ${tz(I)}\\,\\text{A} = ${tz(B * 1000, 3)}\\,\\text{mT}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-b-leiter",
    kapitel: K,
    titel: "Feld eines geraden Leiters",
    niveau: 1,
    erzeuge: (r) => {
      const I = r.int(2, 50);
      const rcm = r.wahl([1, 2, 5, 10, 20] as const);
      const B = (MU0 * I) / (2 * Math.PI * (rcm / 100));
      const fehler = [{ wert: `4*pi*1e-7*${I}/(2*pi*${rcm / 100})`, meldung: "Das ist der Wert in Tesla. Gefragt sind Mikrotesla, also mal $10^6$." }];
      if (rcm !== 1) fehler.push({ wert: `4*pi*1e-7*${I}/(2*pi*${rcm})*1e6`, meldung: "Du hast den Abstand in Zentimetern eingesetzt. Rechne ihn in Meter um." });
      return {
        angabe: `Ein langer gerader Draht führt $${I}\\,\\text{A}$. Wie groß ist die Flussdichte im Abstand $${rcm}\\,\\text{cm}$? Gib sie in $\\mu\\text{T}$ an.`,
        teile: [{ typ: "zahl", loesung: `4*pi*1e-7*${I}/(2*pi*${rcm / 100})*1e6`, einheit: "µT", fehler }],
        hinweis: "B = μ0·I/(2πr), dabei ist μ0/(2π) = 2·10⁻⁷ T·m/A.",
        loesung: `**Ansatz:** Für einen langen geraden Leiter gilt $B = \\dfrac{\\mu_0 I}{2\\pi r}$, mit $\\dfrac{\\mu_0}{2\\pi} = 2\\cdot 10^{-7}\\,\\text{T m/A}$.\n---\n**Rechnung:** $B = 2\\cdot 10^{-7}\\,\\dfrac{\\text{T m}}{\\text{A}}\\cdot\\dfrac{${I}\\,\\text{A}}{${tz(rcm / 100)}\\,\\text{m}} = ${tz(B * 1e6, 2)}\\,\\mu\\text{T}$. Zum Vergleich: Das Erdfeld hat etwa $50\\,\\mu\\text{T}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-kreisbahn",
    kapitel: K,
    titel: "Elektron auf der Kreisbahn",
    niveau: 2,
    erzeuge: (r) => {
      const U = r.wahl([100, 150, 200, 250, 300] as const);
      const BmT = r.wahl([0.5, 0.8, 1, 1.5, 2] as const);
      const v = Math.sqrt((2 * QE * U) / ME);
      const rad = (ME * v) / (QE * BmT * 1e-3);
      return {
        angabe: `Elektronen werden aus der Ruhe mit $${U}\\,\\text{V}$ beschleunigt und fliegen senkrecht in ein Feld mit $B = ${tz(BmT)}\\,\\text{mT}$. Berechne den Bahnradius in cm ($e = 1{,}602\\cdot 10^{-19}\\,\\text{C}$, $m_e = 9{,}109\\cdot 10^{-31}\\,\\text{kg}$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `9.109e-31*sqrt(2*1.602e-19*${U}/9.109e-31)/(1.602e-19*${BmT}e-3)*100`,
            einheit: "cm",
            fehler: [{ wert: `9.109e-31*${U}/(1.602e-19*${BmT}e-3)*100`, meldung: "Du hast die Spannung als Geschwindigkeit eingesetzt. Berechne zuerst $v$ aus $eU = \\tfrac12 m_e v^2$." }],
          },
        ],
        hinweis: "Erst v aus eU = ½·m·v², dann r = m·v/(e·B).",
        loesung: `**Ansatz:** Zwei Schritte. Die Beschleunigung liefert $v$, die Lorentzkraft als Zentripetalkraft liefert $r = \\dfrac{m_e v}{eB}$.\n---\n**Geschwindigkeit:** $v = \\sqrt{\\dfrac{2eU}{m_e}} = ${tz(v / 1e6, 3)}\\cdot 10^{6}\\,\\text{m/s}$.\n---\n**Radius:** $r = \\dfrac{m_e v}{eB} = \\dfrac{9{,}109\\cdot 10^{-31}\\,\\text{kg}\\cdot ${tz(v / 1e6, 3)}\\cdot 10^{6}\\,\\text{m/s}}{1{,}602\\cdot 10^{-19}\\,\\text{C}\\cdot ${tz(BmT)}\\cdot 10^{-3}\\,\\text{T}} = ${tz(rad * 100, 2)}\\,\\text{cm}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-induktion-stab",
    kapitel: K,
    titel: "Induktion im bewegten Leiter",
    niveau: 1,
    erzeuge: (r) => {
      const B = r.wahl([0.1, 0.2, 0.3, 0.5, 0.8] as const);
      const lcm = r.wahl([10, 20, 25, 30, 50] as const);
      const v = r.int(2, 15);
      const l = lcm / 100;
      return {
        angabe: `Ein Stab von $${lcm}\\,\\text{cm}$ Länge bewegt sich mit $${v}\\,\\text{m/s}$ senkrecht zu einem Feld mit $${tz(B)}\\,\\text{T}$. Welche Spannung in V wird zwischen seinen Enden induziert?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${B}*${l}*${v}`,
            einheit: "V",
            fehler: [{ wert: `${B}*${lcm}*${v}`, meldung: "Du hast die Länge in Zentimetern eingesetzt. Mit $l$ in Metern kommt die Spannung in Volt heraus." }],
          },
        ],
        hinweis: "U = B·l·v, die Länge in Metern.",
        loesung: `**Ansatz:** Der Stab überstreicht pro Sekunde die Fläche $l\\cdot v$, der Fluss ändert sich um $Blv$ pro Sekunde. Also $U = Blv$.\n---\n**Rechnung:** $U = ${tz(B)}\\,\\text{T}\\cdot ${tz(l)}\\,\\text{m}\\cdot ${v}\\,\\text{m/s} = ${tz(B * l * v, 4)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-induktion-spule",
    kapitel: K,
    titel: "Induktionsgesetz für eine Spule",
    niveau: 2,
    erzeuge: (r) => {
      const N = r.wahl([50, 100, 200, 250, 500] as const);
      const B1 = r.wahl([0, 0.1, 0.2] as const);
      const B2 = B1 + r.wahl([0.1, 0.2, 0.3, 0.5] as const);
      const Acm2 = r.wahl([10, 20, 25, 40, 50] as const);
      const tms = r.wahl([5, 10, 20, 50, 100] as const);
      const dB = B2 - B1;
      const U = (N * dB * Acm2 * 1e-4) / (tms / 1000);
      return {
        angabe: `Das Feld durch eine Spule ($${N}$ Windungen, Querschnitt $${Acm2}\\,\\text{cm}^2$, senkrecht zum Feld) steigt in $${tms}\\,\\text{ms}$ gleichmäßig von $${tz(B1)}\\,\\text{T}$ auf $${tz(B2)}\\,\\text{T}$. Welche Spannung in V wird induziert (Betrag)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${N}*(${B2}-${B1})*${Acm2}e-4/(${tms}/1000)`,
            einheit: "V",
            fehler: [
              { wert: `(${B2}-${B1})*${Acm2}e-4/(${tms}/1000)`, meldung: "Das ist die Spannung einer Windung. Multipliziere mit der Windungszahl." },
              // bei B1 = 0 ist der Endwert gleich der Aenderung, das Fehlerbild waere die Loesung
              ...(B1 === 0 ? [] : [{ wert: `${N}*${B2}*${Acm2}e-4/(${tms}/1000)`, meldung: "Es zählt die **Änderung** des Feldes, nicht der Endwert. $\\Delta B = B_2 - B_1$." }]),
            ],
          },
        ],
        hinweis: "ΔΦ = ΔB·A mit A in m², dann |U| = N·ΔΦ/Δt mit Δt in Sekunden.",
        loesung: `**Ansatz:** Nur das Feld ändert sich. $|U| = N\\dfrac{\\Delta\\Phi}{\\Delta t}$ mit $\\Delta\\Phi = \\Delta B\\cdot A$.\n---\n**Flussänderung:** $\\Delta\\Phi = ${tz(dB)}\\,\\text{T}\\cdot ${Acm2}\\cdot 10^{-4}\\,\\text{m}^2 = ${tz(dB * Acm2 * 1e-4 * 1e3, 4)}\\cdot 10^{-3}\\,\\text{Wb}$.\n---\n**Spannung:** $|U| = ${N}\\cdot\\dfrac{${tz(dB * Acm2 * 1e-4 * 1e3, 4)}\\cdot 10^{-3}\\,\\text{Wb}}{${tz(tms / 1000)}\\,\\text{s}} = ${tz(U, 3)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-effektivwert",
    kapitel: K,
    titel: "Scheitel- und Effektivwert",
    niveau: 1,
    erzeuge: (r) => {
      const scheitel = r.zufall() < 0.5;
      const U = scheitel ? r.wahl([12, 24, 110, 230, 400] as const) : r.wahl([10, 50, 100, 170, 325] as const);
      return scheitel
        ? {
            angabe: `Eine sinusförmige Wechselspannung hat den Effektivwert $${U}\\,\\text{V}$. Wie groß ist der Scheitelwert in V?`,
            teile: [
              {
                typ: "zahl",
                loesung: `${U}*sqrt(2)`,
                einheit: "V",
                fehler: [{ wert: `${U}/sqrt(2)`, meldung: "Der Scheitelwert ist die Spitze und muss **größer** sein als der Effektivwert. Multipliziere mit $\\sqrt 2$." }],
              },
            ],
            hinweis: "Û = √2·U_eff.",
            loesung: `**Ansatz:** Bei Sinusform ist $U_{\\text{eff}} = \\hat U/\\sqrt2$, also $\\hat U = \\sqrt2\\,U_{\\text{eff}}$.\n---\n**Rechnung:** $\\hat U = 1{,}414\\cdot ${U}\\,\\text{V} = ${tz(U * Math.SQRT2, 2)}\\,\\text{V}$.`,
          }
        : {
            angabe: `Eine sinusförmige Wechselspannung hat den Scheitelwert $${U}\\,\\text{V}$. Wie groß ist der Effektivwert in V?`,
            teile: [
              {
                typ: "zahl",
                loesung: `${U}/sqrt(2)`,
                einheit: "V",
                fehler: [
                  { wert: `${U}/2`, meldung: "Der Effektivwert ist nicht die Hälfte. Man teilt durch $\\sqrt 2$, weil der Mittelwert von $\\sin^2$ gleich $\\tfrac12$ ist." },
                  { wert: `${U}*sqrt(2)`, meldung: "Der Effektivwert ist kleiner als der Scheitelwert. Teile durch $\\sqrt 2$." },
                ],
              },
            ],
            hinweis: "U_eff = Û/√2.",
            loesung: `**Ansatz:** Der Effektivwert hat dieselbe Wärmewirkung wie eine Gleichspannung. Bei Sinusform ist $U_{\\text{eff}} = \\hat U/\\sqrt2$.\n---\n**Rechnung:** $U_{\\text{eff}} = ${U}\\,\\text{V}/1{,}414 = ${tz(U / Math.SQRT2, 2)}\\,\\text{V}$.`,
          };
    },
  }),
  drill({
    id: "p14-d-blindwiderstand",
    kapitel: K,
    titel: "Induktiver und kapazitiver Widerstand",
    niveau: 2,
    erzeuge: (r) => {
      const f = r.wahl([50, 100, 500, 1000] as const);
      if (r.zufall() < 0.5) {
        const L = r.wahl([0.01, 0.05, 0.1, 0.2, 0.5] as const);
        return {
          angabe: `Berechne den induktiven Widerstand einer Spule mit $L = ${tz(L)}\\,\\text{H}$ bei $${f}\\,\\text{Hz}$ in Ω.`,
          teile: [{ typ: "zahl", loesung: `2*pi*${f}*${L}`, einheit: "Ω", fehler: [{ wert: `${f}*${L}`, meldung: "Der Faktor $2\\pi$ fehlt. In $X_L = \\omega L$ steht die Kreisfrequenz $\\omega = 2\\pi f$." }] }],
          hinweis: "X_L = 2π·f·L.",
          loesung: `**Ansatz:** Der Widerstand der Spule wächst mit der Frequenz, $X_L = 2\\pi fL$.\n---\n**Rechnung:** $X_L = 2\\pi\\cdot ${f}\\,\\text{s}^{-1}\\cdot ${tz(L)}\\,\\text{H} = ${tz(2 * Math.PI * f * L, 2)}\\,\\Omega$.`,
        };
      }
      const C = r.wahl([1, 2.2, 4.7, 10, 22, 47] as const);
      return {
        angabe: `Berechne den kapazitiven Widerstand eines Kondensators mit $C = ${tz(C)}\\,\\mu\\text{F}$ bei $${f}\\,\\text{Hz}$ in Ω.`,
        teile: [
          {
            typ: "zahl",
            loesung: `1/(2*pi*${f}*${C}e-6)`,
            einheit: "Ω",
            fehler: [{ wert: `2*pi*${f}*${C}e-6`, meldung: "Beim Kondensator steht $\\omega C$ im **Nenner**. Bei kleinen Frequenzen sperrt er, sein Widerstand muss dann groß sein." }],
          },
        ],
        hinweis: "X_C = 1/(2π·f·C), C in Farad.",
        loesung: `**Ansatz:** Der Widerstand des Kondensators sinkt mit der Frequenz, $X_C = \\dfrac{1}{2\\pi fC}$.\n---\n**Rechnung:** $X_C = \\dfrac{1}{2\\pi\\cdot ${f}\\,\\text{s}^{-1}\\cdot ${tz(C)}\\cdot 10^{-6}\\,\\text{F}} = ${tz(1 / (2 * Math.PI * f * C * 1e-6), 2)}\\,\\Omega$.`,
      };
    },
  }),
  drill({
    id: "p14-d-trafo",
    kapitel: K,
    titel: "Idealer Transformator",
    niveau: 1,
    erzeuge: (r) => {
      const N1 = r.wahl([500, 1150, 2000, 2300, 4600] as const);
      const N2 = r.wahl([25, 60, 100, 120, 200] as const);
      const U1 = 230;
      const I2 = r.wahl([0.5, 1, 2, 3, 5] as const);
      return {
        angabe: `Ein idealer Transformator hat $N_1 = ${N1}$ und $N_2 = ${N2}$ Windungen und liegt an $${U1}\\,\\text{V}$. Sekundär fließen $${tz(I2)}\\,\\text{A}$. Berechne $U_2$ in V und $I_1$ in A.`,
        teile: [
          { typ: "zahl", label: "U₂ in V", loesung: `${U1}*${N2}/${N1}`, einheit: "V", fehler: [{ wert: `${U1}*${N1}/${N2}`, meldung: "Das Verhältnis ist umgedreht. Weniger Windungen sekundär heißt kleinere Spannung." }] },
          { typ: "zahl", label: "I₁ in A", loesung: `${I2}*${N2}/${N1}`, einheit: "A", fehler: [{ wert: `${I2}*${N1}/${N2}`, meldung: "Die Ströme verhalten sich **umgekehrt** wie die Windungszahlen. Auf der Seite mit hoher Spannung fließt der kleine Strom." }] },
        ],
        hinweis: "U₂/U₁ = N₂/N₁ und I₁/I₂ = N₂/N₁.",
        loesung: `**Spannung:** $U_2 = U_1\\dfrac{N_2}{N_1} = ${U1}\\,\\text{V}\\cdot\\dfrac{${N2}}{${N1}} = ${tz((U1 * N2) / N1, 3)}\\,\\text{V}$.\n---\n**Strom:** $I_1 = I_2\\dfrac{N_2}{N_1} = ${tz(I2)}\\,\\text{A}\\cdot\\dfrac{${N2}}{${N1}} = ${tz((I2 * N2) / N1, 4)}\\,\\text{A}$.\n---\n**Probe:** $U_1I_1 = U_2I_2 = ${tz((U1 * N2 * I2) / N1, 3)}\\,\\text{W}$, die Leistung bleibt gleich.`,
      };
    },
  }),
  drill({
    id: "p14-d-selbstinduktion",
    kapitel: K,
    titel: "Spannungsspitze beim Abschalten",
    niveau: 1,
    erzeuge: (r) => {
      const L = r.wahl([0.05, 0.1, 0.2, 0.5, 1] as const);
      const I = r.wahl([0.5, 1, 2, 3, 4] as const);
      const tms = r.wahl([0.5, 1, 2, 5] as const);
      const U = (L * I) / (tms / 1000);
      return {
        angabe: `Durch eine Spule mit $L = ${tz(L)}\\,\\text{H}$ fließen $${tz(I)}\\,\\text{A}$. Der Strom wird in $${tz(tms)}\\,\\text{ms}$ auf null unterbrochen. Wie groß ist der Betrag der induzierten Spannung in V?`,
        teile: [{ typ: "zahl", loesung: `${L}*${I}/(${tms}/1000)`, einheit: "V", fehler: [{ wert: `${L}*${I}/${tms}`, meldung: "Du hast die Zeit in Millisekunden eingesetzt. Rechne in Sekunden um." }] }],
        hinweis: "|U| = L·ΔI/Δt mit Δt in Sekunden.",
        loesung: `**Ansatz:** Selbstinduktion, $|U| = L\\dfrac{\\Delta I}{\\Delta t}$.\n---\n**Rechnung:** $|U| = ${tz(L)}\\,\\dfrac{\\text{V s}}{\\text{A}}\\cdot\\dfrac{${tz(I)}\\,\\text{A}}{${tz(tms / 1000)}\\,\\text{s}} = ${tz(U, 2)}\\,\\text{V}$. Die kurze Schaltzeit macht die Spitze so groß.`,
      };
    },
  }),
  drill({
    id: "p14-d-netzgeraet",
    kapitel: K,
    titel: "Strom und Spitzenstrom eines Geräts am Netz",
    niveau: 2,
    erzeuge: (r) => {
      const P = r.wahl([500, 800, 1000, 1500, 2000, 2400] as const);
      const I = P / 230;
      return {
        angabe: `Ein Heizgerät hat die Angabe „$230\\,\\text{V}$, $${P}\\,\\text{W}$“. Berechne den Effektivwert des Stroms und den Scheitelwert des Stroms in A.`,
        teile: [
          { typ: "zahl", label: "I_eff in A", loesung: `${P}/230`, einheit: "A", fehler: [{ wert: `${P}/325`, meldung: "Die Angabe $230\\,\\text{V}$ ist schon der Effektivwert. Mit Effektivwerten gilt $P = U I$ wie bei Gleichstrom." }] },
          { typ: "zahl", label: "Î in A", loesung: `${P}/230*sqrt(2)`, einheit: "A", fehler: [{ wert: `${P}/230/sqrt(2)`, meldung: "Der Scheitelwert ist größer als der Effektivwert. Multipliziere mit $\\sqrt 2$." }] },
        ],
        hinweis: "I_eff = P/U_eff, dann Î = √2·I_eff.",
        loesung: `**Ansatz:** Geräteangaben sind Effektivwerte. Für einen ohmschen Verbraucher gilt $P = U_{\\text{eff}}I_{\\text{eff}}$.\n---\n**Effektivstrom:** $I_{\\text{eff}} = \\dfrac{${P}\\,\\text{W}}{230\\,\\text{V}} = ${tz(I, 3)}\\,\\text{A}$.\n---\n**Scheitelstrom:** $\\hat I = \\sqrt 2\\cdot ${tz(I, 3)}\\,\\text{A} = ${tz(I * Math.SQRT2, 3)}\\,\\text{A}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-schwingkreis",
    kapitel: K,
    titel: "Eigenfrequenz eines Schwingkreises",
    niveau: 2,
    erzeuge: (r) => {
      const LmH = r.wahl([1, 2, 5, 10, 20, 50] as const);
      const CnF = r.wahl([10, 22, 47, 100, 220, 470] as const);
      const f = 1 / (2 * Math.PI * Math.sqrt(LmH * 1e-3 * CnF * 1e-9));
      return {
        angabe: `Ein Schwingkreis besteht aus einer Spule mit $L = ${LmH}\\,\\text{mH}$ und einem Kondensator mit $C = ${CnF}\\,\\text{nF}$. Berechne seine Eigenfrequenz in kHz.`,
        teile: [
          {
            typ: "zahl",
            loesung: `1/(2*pi*sqrt(${LmH}e-3*${CnF}e-9))/1000`,
            einheit: "kHz",
            fehler: [{ wert: `1/sqrt(${LmH}e-3*${CnF}e-9)/1000`, meldung: "Das ist die Kreisfrequenz $\\omega_0$. Für die Frequenz musst du noch durch $2\\pi$ teilen." }],
          },
        ],
        hinweis: "f0 = 1/(2π·√(L·C)) mit L in H und C in F.",
        loesung: `**Ansatz:** Thomsonsche Schwingungsgleichung $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$.\n---\n**Produkt:** $LC = ${LmH}\\cdot 10^{-3}\\,\\text{H}\\cdot ${CnF}\\cdot 10^{-9}\\,\\text{F} = ${tz(LmH * CnF, 0)}\\cdot 10^{-12}\\,\\text{s}^2$.\n---\n**Frequenz:** $f_0 = \\dfrac{1}{2\\pi\\sqrt{${tz(LmH * CnF, 0)}\\cdot 10^{-12}}\\,\\text{s}} = ${tz(f / 1000, 3)}\\,\\text{kHz}$.`,
      };
    },
  }),
  drill({
    id: "p14-d-fernleitung",
    kapitel: K,
    titel: "Leitungsverluste bei zwei Spannungen",
    niveau: 3,
    erzeuge: (r) => {
      const [U1, U2] = r.wahl([
        [20, 110],
        [110, 220],
        [110, 380],
        [220, 380],
      ] as const);
      // Bei 20 kV nur kleine Leistungen und kurze Leitungen, sonst wären die Verluste größer als die übertragene
      // Leistung. So bleibt der Verlust bei höchstens 20 %, auch bei 110 kV (200 MW, 12 Ω: knapp 20 %).
      const PMW = U1 === 20 ? r.wahl([5, 10, 20] as const) : r.wahl([20, 50, 100, 200] as const);
      const R = U1 === 20 ? r.wahl([1, 2, 4] as const) : r.wahl([4, 5, 8, 10, 12] as const);
      const V1 = ((PMW * 1e6) / (U1 * 1e3)) ** 2 * R;
      const V2 = ((PMW * 1e6) / (U2 * 1e3)) ** 2 * R;
      return {
        angabe: `Ein Kraftwerk überträgt $${PMW}\\,\\text{MW}$ über eine Leitung mit $${R}\\,\\Omega$ Gesamtwiderstand. Berechne die Verlustleistung in MW bei $${U1}\\,\\text{kV}$ und bei $${U2}\\,\\text{kV}$.`,
        teile: [
          { typ: "zahl", label: `bei ${U1} kV in MW`, loesung: `(${PMW}e6/${U1}e3)^2*${R}/1e6`, einheit: "MW", fehler: Math.abs((U1 * 1e3) ** 2 / R - V1) > 0.02 * V1 ? [{ wert: `(${U1}e3)^2/${R}/1e6`, meldung: "Du hast $U^2/R$ mit der Übertragungsspannung gerechnet. Die fällt nicht an der Leitung ab. Rechne $I = P/U$ und dann $I^2R$." }] : undefined },
          { typ: "zahl", label: `bei ${U2} kV in MW`, loesung: `(${PMW}e6/${U2}e3)^2*${R}/1e6`, einheit: "MW", fehler: [{ wert: `(${PMW}e6/${U2}e3)*${R}/1e6`, meldung: "Du hast $I\\cdot R$ berechnet. Die Verlustleistung ist $I^2R$." }] },
        ],
        hinweis: "Zuerst I = P/U für jede Spannung, dann P_V = I²·R.",
        loesung: `**Ansatz:** Der Strom ist $I = P/U$, die Verluste sind $P_V = I^2R = P^2R/U^2$.\n---\n**Bei ${U1} kV:** $I = ${tz((PMW * 1e3) / U1, 1)}\\,\\text{A}$, $P_V = ${tz(V1 / 1e6, 3)}\\,\\text{MW}$.\n---\n**Bei ${U2} kV:** $I = ${tz((PMW * 1e3) / U2, 1)}\\,\\text{A}$, $P_V = ${tz(V2 / 1e6, 3)}\\,\\text{MW}$.\n---\n**Vergleich:** Die Verluste sinken um $(${U2}/${U1})^2 = ${tz((U2 / U1) ** 2, 2)}$, weil sie mit dem Quadrat der Spannung fallen.`,
      };
    },
  }),
  drill({
    id: "p14-d-lorentz-umkehr",
    kapitel: K,
    titel: "Feld für eine gewünschte Kreisbahn",
    niveau: 3,
    erzeuge: (r) => {
      const U = r.wahl([100, 200, 300, 400] as const);
      const rcm = r.wahl([3, 4, 5, 6, 8] as const);
      const v = Math.sqrt((2 * QE * U) / ME);
      const B = (ME * v) / (QE * (rcm / 100));
      return {
        angabe: `In einem Fadenstrahlrohr werden Elektronen mit $${U}\\,\\text{V}$ beschleunigt. Welche Flussdichte in mT braucht man, damit sie auf einem Kreis mit $${rcm}\\,\\text{cm}$ Radius laufen ($e = 1{,}602\\cdot 10^{-19}\\,\\text{C}$, $m_e = 9{,}109\\cdot 10^{-31}\\,\\text{kg}$)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `9.109e-31*sqrt(2*1.602e-19*${U}/9.109e-31)/(1.602e-19*${rcm / 100})*1000`,
            einheit: "mT",
            fehler: [{ wert: `9.109e-31*sqrt(2*1.602e-19*${U}/9.109e-31)/(1.602e-19*${rcm})*1000`, meldung: "Du hast den Radius in Zentimetern eingesetzt. Rechne ihn in Meter um." }],
          },
        ],
        hinweis: "Erst v aus eU = ½·m·v², dann aus r = m·v/(e·B) nach B umstellen.",
        loesung: `**Ansatz:** Aus $r = \\dfrac{m_e v}{eB}$ folgt $B = \\dfrac{m_e v}{e r}$. Die Geschwindigkeit liefert die Beschleunigung.\n---\n**Geschwindigkeit:** $v = \\sqrt{2eU/m_e} = ${tz(v / 1e6, 3)}\\cdot 10^{6}\\,\\text{m/s}$.\n---\n**Flussdichte:** $B = \\dfrac{9{,}109\\cdot 10^{-31}\\,\\text{kg}\\cdot ${tz(v / 1e6, 3)}\\cdot 10^{6}\\,\\text{m/s}}{1{,}602\\cdot 10^{-19}\\,\\text{C}\\cdot ${tz(rcm / 100)}\\,\\text{m}} = ${tz(B * 1000, 3)}\\,\\text{mT}$.`,
      };
    },
  }),
];
