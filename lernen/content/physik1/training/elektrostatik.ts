import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "elektrostatik";
const KC = 8.99e9; // 1/(4π ε0) in N m²/C², wie im Kapiteltext gerundet
const E0 = 8.854e-12;
const QE = 1.602e-19;
const ME = 9.109e-31;

export const DRILLS: Drill[] = [
  drill({
    id: "p12-d-elementarladungen",
    kapitel: K,
    titel: "Ladung in Elementarladungen umrechnen",
    niveau: 1,
    erzeuge: (r) => {
      const q = r.int(11, 99) / 10; // nC
      const negativ = r.zufall() < 0.5;
      const n = (q * 1e-9) / QE;
      return {
        angabe: `Ein Körper trägt die Ladung $Q = ${negativ ? "-" : "+"}${tz(q)}\\,\\text{nC}$. Wie viele Elektronen hat er ${negativ ? "zu viel" : "zu wenig"}? Gib das Ergebnis in Vielfachen von $10^{10}$ an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${q}e-9/1.602e-19/1e10`,
            fehler: [{ wert: `${q}e-9*1.602e-19/1e10`, meldung: "Du hast mit $e$ multipliziert. Gesucht ist, **wie oft** $e$ in die Ladung passt, also $N = |Q|/e$." }],
          },
        ],
        hinweis: "Nano heißt 10⁻⁹. Dann N = |Q|/e mit e = 1,602·10⁻¹⁹ C.",
        loesung: `**Ansatz:** Ladung ist gequantelt, $|Q| = N\\cdot e$, also $N = |Q|/e$.\n---\n**Rechnung:** $N = \\dfrac{${tz(q)}\\cdot 10^{-9}\\,\\text{C}}{1{,}602\\cdot 10^{-19}\\,\\text{C}} = ${tz(n / 1e10, 2)}\\cdot 10^{10}$. Die Einheit Coulomb kürzt sich, $N$ ist eine Anzahl.\n---\n**Deutung:** ${negativ ? "Negativ heißt Elektronenüberschuss." : "Positiv heißt Elektronenmangel, es kommen keine Protonen dazu."}`,
      };
    },
  }),
  drill({
    id: "p12-d-coulomb",
    kapitel: K,
    titel: "Coulomb-Kraft zwischen zwei Ladungen",
    niveau: 1,
    erzeuge: (r) => {
      const q1 = r.int(1, 9);
      const q2 = r.int(1, 9);
      const rcm = r.int(2, 30);
      const F = (KC * q1 * 1e-9 * q2 * 1e-9) / (rcm / 100) ** 2;
      return {
        angabe: `Zwei Punktladungen $Q_1 = ${q1}\\,\\text{nC}$ und $Q_2 = ${q2}\\,\\text{nC}$ sind $${rcm}\\,\\text{cm}$ voneinander entfernt. Berechne den Betrag der Kraft zwischen ihnen in µN ($k = 8{,}99\\cdot 10^{9}\\,\\text{N}\\,\\text{m}^2/\\text{C}^2$).`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.99e9*${q1}e-9*${q2}e-9/${rcm / 100}^2*1e6`,
            einheit: "µN",
            fehler: [{ wert: `8.99e9*${q1}e-9*${q2}e-9/${rcm / 100}*1e6`, meldung: "Der Abstand steht im Coulomb-Gesetz **quadriert** im Nenner." }],
          },
        ],
        hinweis: "F = k·Q₁·Q₂/r² mit r in Metern.",
        loesung: `**Ansatz:** Coulomb-Gesetz, alle Größen in SI-Einheiten: $r = ${tz(rcm / 100)}\\,\\text{m}$.\n---\n**Rechnung:** $F = 8{,}99\\cdot 10^{9}\\,\\tfrac{\\text{N}\\,\\text{m}^2}{\\text{C}^2}\\cdot\\dfrac{${q1}\\cdot 10^{-9}\\,\\text{C}\\cdot ${q2}\\cdot 10^{-9}\\,\\text{C}}{(${tz(rcm / 100)}\\,\\text{m})^2} = ${tz(F * 1e6, 2)}\\,\\mu\\text{N}$.\n---\n**Richtung:** Beide Ladungen sind positiv, sie stoßen einander ab. Beide spüren gleich große Kräfte.`,
      };
    },
  }),
  drill({
    id: "p12-d-superposition",
    kapitel: K,
    titel: "Kraft von zwei Ladungen auf einer Geraden",
    niveau: 2,
    erzeuge: (r) => {
      const q1 = r.int(1, 5); // µC bei x = 0
      let q2 = r.int(1, 5); // µC (negativ) bei x = a
      if (q1 === 4 * q2) q2 = 2; // sonst waere die Gesamtkraft genau null
      const a = r.wahl([0.2, 0.3, 0.4, 0.5] as const);
      const q3 = 1; // µC bei x = 2a
      const F1 = (KC * q1 * 1e-6 * q3 * 1e-6) / (2 * a) ** 2;
      const F2 = (KC * q2 * 1e-6 * q3 * 1e-6) / a ** 2;
      const F = F1 - F2;
      return {
        angabe: `Auf der $x$-Achse sitzen $Q_1 = +${q1}{,}0\\,\\mu\\text{C}$ bei $x = 0$, $Q_2 = -${q2}{,}0\\,\\mu\\text{C}$ bei $x = ${tz(a)}\\,\\text{m}$ und $Q_3 = +1{,}0\\,\\mu\\text{C}$ bei $x = ${tz(2 * a)}\\,\\text{m}$. Berechne die Kraft auf $Q_3$ in N, mit Vorzeichen (positiv heißt $+x$-Richtung).`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.99e9*1e-6*(${q1}e-6/${2 * a}^2 - ${q2}e-6/${a}^2)`,
            einheit: "N",
            fehler: [{ wert: `8.99e9*1e-6*(${q1}e-6/${2 * a}^2 + ${q2}e-6/${a}^2)`, meldung: "Die Kräfte zeigen entgegengesetzt: $Q_1$ stößt $Q_3$ nach rechts, $Q_2$ zieht $Q_3$ nach links." }],
          },
        ],
        hinweis: "Q₁ stößt Q₃ nach +x, Q₂ zieht Q₃ nach −x. Abstände: 2a und a.",
        loesung: `**Ansatz:** Superposition. Beträge mit Coulomb, Richtungen aus „gleichnamig stößt ab, ungleichnamig zieht an“.\n---\n**Kraft von $Q_1$** ($+x$, Abstand $${tz(2 * a)}\\,\\text{m}$): $F_1 = ${tz(F1, 4)}\\,\\text{N}$.\n---\n**Kraft von $Q_2$** ($-x$, Abstand $${tz(a)}\\,\\text{m}$): $F_2 = ${tz(F2, 4)}\\,\\text{N}$.\n---\n**Summe:** $F = ${tz(F1, 4)}\\,\\text{N} - ${tz(F2, 4)}\\,\\text{N} = ${tz(F, 4)}\\,\\text{N}$, also ${F < 0 ? "nach links, zu $Q_2$ hin" : "nach rechts"}.`,
      };
    },
  }),
  drill({
    id: "p12-d-feld-punkt",
    kapitel: K,
    titel: "Feldstärke einer Punktladung",
    niveau: 1,
    erzeuge: (r) => {
      const q = r.int(1, 20);
      const rcm = r.wahl([5, 10, 15, 20, 25, 30, 40, 50] as const);
      const E = (KC * q * 1e-9) / (rcm / 100) ** 2;
      return {
        angabe: `Wie groß ist die Feldstärke im Abstand $${rcm}\\,\\text{cm}$ von einer Punktladung $Q = ${q}\\,\\text{nC}$ (in V/m)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.99e9*${q}e-9/${rcm / 100}^2`,
            einheit: "V/m",
            fehler: [{ wert: `8.99e9*${q}e-9/${rcm / 100}`, meldung: "Das wäre das Potential in V. Die Feldstärke hat $r^2$ im Nenner." }],
          },
        ],
        hinweis: "E = k·Q/r² mit r in Metern.",
        loesung: `**Ansatz:** Feld einer Punktladung, $E = k\\,Q/r^2$.\n---\n**Rechnung:** $E = 8{,}99\\cdot 10^{9}\\cdot\\dfrac{${q}\\cdot 10^{-9}}{(${tz(rcm / 100)})^2}\\,\\text{V/m} = ${tz(E, 0)}\\,\\text{V/m}$, radial von der Ladung weg.`,
      };
    },
  }),
  drill({
    id: "p12-d-homogen",
    kapitel: K,
    titel: "Homogenes Feld: E = U/d",
    niveau: 1,
    erzeuge: (r) => {
      const U = r.int(1, 50) * 10;
      const dmm = r.wahl([2, 2.5, 4, 5, 8, 10, 20] as const);
      return {
        angabe: `Ein Plattenkondensator mit $${tz(dmm)}\\,\\text{mm}$ Plattenabstand liegt an $${U}\\,\\text{V}$. Berechne die Feldstärke in kV/m.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${U}/${dmm}e-3/1000`,
            einheit: "kV/m",
            fehler: [{ wert: `${U}*${dmm}e-3/1000`, meldung: "Die Feldstärke ist Spannung **pro** Abstand: $E = U/d$." }],
          },
        ],
        hinweis: "E = U/d, Abstand in Metern, Ergebnis durch 1000 für kV/m.",
        loesung: `**Ansatz:** Im Plattenkondensator ist das Feld homogen, $E = U/d$.\n---\n**Rechnung:** $E = \\dfrac{${U}\\,\\text{V}}{${tz(dmm / 1000)}\\,\\text{m}} = ${tz((U / dmm) * 1000, 0)}\\,\\text{V/m} = ${tz(U / dmm, 2)}\\,\\text{kV/m}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-potential",
    kapitel: K,
    titel: "Spannung zwischen zwei Abständen von einer Punktladung",
    niveau: 2,
    erzeuge: (r) => {
      const q = r.int(2, 12); // nC
      const r1 = r.wahl([0.1, 0.2, 0.25, 0.3] as const);
      const r2 = r1 * r.wahl([2, 3, 4] as const);
      const p1 = (KC * q * 1e-9) / r1;
      const p2 = (KC * q * 1e-9) / r2;
      return {
        angabe: `Eine Punktladung $Q = +${q}\\,\\text{nC}$ sitzt im Ursprung. Welche Spannung liegt zwischen den Punkten im Abstand $${tz(r1)}\\,\\text{m}$ und $${tz(r2)}\\,\\text{m}$ (in V)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.99e9*${q}e-9*(1/${r1} - 1/${r2})`,
            einheit: "V",
            fehler: [{ wert: `8.99e9*${q}e-9/${r1}^2*${r2 - r1}`, meldung: "$U = E\\cdot d$ gilt nur im homogenen Feld. Um eine Punktladung nimmt das Feld nach außen ab. Bilde die Differenz der Potentiale $kQ/r$." }],
          },
        ],
        hinweis: "φ = k·Q/r für jeden Abstand, dann die Differenz.",
        loesung: `**Ansatz:** Das Feld ist nicht homogen. Die Spannung ist die Differenz der Potentiale $\\varphi = kQ/r$.\n---\n**Potentiale:** $\\varphi_1 = ${tz(p1, 1)}\\,\\text{V}$, $\\varphi_2 = ${tz(p2, 1)}\\,\\text{V}$.\n---\n**Spannung:** $U = ${tz(p1, 1)}\\,\\text{V} - ${tz(p2, 1)}\\,\\text{V} = ${tz(p1 - p2, 1)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-plattenkondensator",
    kapitel: K,
    titel: "Kapazität des Plattenkondensators",
    niveau: 1,
    erzeuge: (r) => {
      const Acm2 = r.int(1, 40) * 25;
      const dmm = r.wahl([0.5, 1, 1.5, 2, 3, 5] as const);
      const er = r.wahl([1, 1, 2, 3, 5] as const);
      const C = (E0 * er * Acm2 * 1e-4) / (dmm * 1e-3);
      return {
        angabe: `Ein Plattenkondensator hat die Plattenfläche $${Acm2}\\,\\text{cm}^2$ und den Abstand $${tz(dmm)}\\,\\text{mm}$${er > 1 ? `; dazwischen liegt ein Dielektrikum mit $\\varepsilon_r = ${er}$` : " (Luft)"}. Berechne die Kapazität in pF.`,
        teile: [
          {
            typ: "zahl",
            loesung: `8.854e-12*${er}*${Acm2}e-4/${dmm}e-3*1e12`,
            einheit: "pF",
            fehler: [{ wert: `8.854e-12*${er}*${Acm2}e-2/${dmm}e-3*1e12`, meldung: "$1\\,\\text{cm}^2 = 10^{-4}\\,\\text{m}^2$, nicht $10^{-2}\\,\\text{m}^2$, weil $1\\,\\text{cm} = 10^{-2}\\,\\text{m}$ quadriert wird." }],
          },
        ],
        hinweis: "Fläche in m² (·10⁻⁴) und Abstand in m (·10⁻³) umrechnen, dann C = ε₀·εr·A/d.",
        loesung: `**Umrechnen:** $A = ${Acm2}\\cdot 10^{-4}\\,\\text{m}^2$, $d = ${tz(dmm)}\\cdot 10^{-3}\\,\\text{m}$.\n---\n**Rechnung:** $C = \\varepsilon_0\\varepsilon_r\\dfrac{A}{d} = 8{,}854\\cdot 10^{-12}\\,\\tfrac{\\text{F}}{\\text{m}}\\cdot ${er}\\cdot\\dfrac{${tz(Acm2 * 1e-4)}\\,\\text{m}^2}{${tz(dmm * 1e-3)}\\,\\text{m}} = ${tz(C * 1e12, 1)}\\,\\text{pF}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-kondensator-energie",
    kapitel: K,
    titel: "Ladung und Energie eines Kondensators",
    niveau: 1,
    erzeuge: (r) => {
      const C = r.wahl([10, 22, 47, 100, 220, 470, 1000] as const);
      const U = r.wahl([5, 9, 12, 16, 24, 50, 100] as const);
      return {
        angabe: `Ein Kondensator mit $${C}\\,\\mu\\text{F}$ wird an $${U}\\,\\text{V}$ geladen. Berechne die Ladung (in mC) und die gespeicherte Energie (in mJ).`,
        teile: [
          { typ: "zahl", label: "Q in mC", loesung: `${C}e-6*${U}*1000`, einheit: "mC" },
          {
            typ: "zahl",
            label: "W in mJ",
            loesung: `0.5*${C}e-6*${U}^2*1000`,
            einheit: "mJ",
            fehler: [{ wert: `${C}e-6*${U}^2*1000`, meldung: "Der Faktor ½ fehlt: Beim Laden steigt die Spannung erst von null auf U." }],
          },
        ],
        hinweis: "Q = C·U und W = ½·C·U², Mikro heißt 10⁻⁶.",
        loesung: `**Ladung:** $Q = CU = ${C}\\cdot 10^{-6}\\,\\text{F}\\cdot ${U}\\,\\text{V} = ${tz(C * U * 1e-3, 3)}\\,\\text{mC}$.\n---\n**Energie:** $W = \\tfrac12 CU^2 = \\tfrac12\\cdot ${C}\\cdot 10^{-6}\\,\\text{F}\\cdot(${U}\\,\\text{V})^2 = ${tz(0.5 * C * U * U * 1e-3, 3)}\\,\\text{mJ}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-schaltung",
    kapitel: K,
    titel: "Kondensatoren in Reihe und parallel",
    niveau: 1,
    erzeuge: (r) => {
      const [a, b] = r.wahl([[2, 3], [3, 6], [1, 4], [6, 12], [10, 15], [2, 8], [5, 20]] as const);
      const reihe = r.zufall() < 0.5;
      const C = reihe ? (a * b) / (a + b) : a + b;
      return {
        angabe: `Zwei Kondensatoren mit $${a}\\,\\mu\\text{F}$ und $${b}\\,\\mu\\text{F}$ werden ${reihe ? "in Reihe" : "parallel"} geschaltet. Wie groß ist die Gesamtkapazität in µF?`,
        teile: [
          {
            typ: "zahl",
            loesung: reihe ? `1/(1/${a}+1/${b})` : `${a}+${b}`,
            einheit: "µF",
            fehler: [
              reihe
                ? { wert: `${a}+${b}`, meldung: "In Reihe addieren sich die **Kehrwerte**, wie bei Widerständen parallel. Die Gesamtkapazität ist kleiner als jede einzelne." }
                : { wert: `1/(1/${a}+1/${b})`, meldung: "Parallel addieren sich die Kapazitäten direkt, so als würde man die Plattenflächen zusammenlegen." },
            ],
          },
        ],
        hinweis: reihe ? "In Reihe addieren sich die Kehrwerte." : "Parallel addieren sich die Kapazitäten.",
        loesung: reihe
          ? `**Ansatz:** Reihenschaltung, alle tragen dieselbe Ladung: $\\dfrac1C = \\dfrac1{C_1} + \\dfrac1{C_2}$.\n---\n$\\dfrac1C = \\dfrac1{${a}} + \\dfrac1{${b}}$, also $C = ${tz(C, 3)}\\,\\mu\\text{F}$, kleiner als jeder Einzelwert.`
          : `**Ansatz:** Parallelschaltung, alle haben dieselbe Spannung: $C = C_1 + C_2$.\n---\n$C = ${a}\\,\\mu\\text{F} + ${b}\\,\\mu\\text{F} = ${C}\\,\\mu\\text{F}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-veraendern",
    kapitel: K,
    titel: "Kondensator verändern: mit oder ohne Quelle",
    niveau: 2,
    erzeuge: (r) => {
      const C0 = r.wahl([100, 150, 200, 250, 400] as const); // pF
      const U0 = r.wahl([50, 100, 120, 200] as const);
      const f = r.wahl([2, 3, 4] as const);
      const angeschlossen = r.zufall() < 0.5;
      const dielektrikum = r.zufall() < 0.5;
      const Cneu = dielektrikum ? C0 * f : C0 / f;
      const tat = dielektrikum ? `einen Isolator mit $\\varepsilon_r = ${f}$ einschiebt, der den Zwischenraum ganz ausfüllt` : `den Plattenabstand auf das ${f}-Fache vergrößert`;
      if (angeschlossen)
        return {
          angabe: `Ein Kondensator mit $${C0}\\,\\text{pF}$ bleibt an $${U0}\\,\\text{V}$ **angeschlossen**, während man ${tat}. Welche Ladung trägt er danach (in nC)?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${Cneu}e-12*${U0}*1e9`,
              einheit: "nC",
              fehler: [{ wert: `${C0}e-12*${U0}*1e9`, meldung: "Das ist die Ladung vorher. Angeschlossen bleibt $U$ fest, die Kapazität ändert sich, also auch $Q = CU$." }],
            },
          ],
          hinweis: "Angeschlossen: U bleibt konstant. Neue Kapazität bestimmen, dann Q = C·U.",
          loesung: `**Was bleibt?** Die Quelle hält $U = ${U0}\\,\\text{V}$ fest.\n---\n**Neue Kapazität:** $C = ${tz(Cneu, 2)}\\,\\text{pF}$.\n---\n**Ladung:** $Q = CU = ${tz(Cneu, 2)}\\cdot 10^{-12}\\,\\text{F}\\cdot ${U0}\\,\\text{V} = ${tz((Cneu * U0) / 1000, 3)}\\,\\text{nC}$.`,
        };
      return {
        angabe: `Ein Kondensator mit $${C0}\\,\\text{pF}$ wird auf $${U0}\\,\\text{V}$ geladen und von der Quelle **getrennt**. Dann ${dielektrikum ? `schiebt man einen Isolator mit $\\varepsilon_r = ${f}$ ein, der den Zwischenraum ganz ausfüllt` : `vergrößert man den Plattenabstand auf das ${f}-Fache`}. Welche Spannung liegt danach an (in V)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${C0}*${U0}/${Cneu}`,
            einheit: "V",
            fehler: [{ wert: `${U0}`, meldung: "Getrennt bleibt nicht die Spannung, sondern die **Ladung** konstant. Berechne $U = Q/C$ mit der neuen Kapazität." }],
          },
        ],
        hinweis: "Getrennt: Q bleibt konstant. Q vorher berechnen, dann U = Q/C_neu.",
        loesung: `**Was bleibt?** Getrennt kann keine Ladung fließen: $Q = ${C0}\\,\\text{pF}\\cdot ${U0}\\,\\text{V} = ${tz((C0 * U0) / 1000, 3)}\\,\\text{nC}$.\n---\n**Neue Kapazität:** $C = ${tz(Cneu, 2)}\\,\\text{pF}$.\n---\n**Spannung:** $U = Q/C = ${tz((C0 * U0) / Cneu, 2)}\\,\\text{V}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-elektron-beschleunigt",
    kapitel: K,
    titel: "Elektron durch eine Spannung beschleunigen",
    niveau: 2,
    erzeuge: (r) => {
      const U = r.wahl([10, 50, 100, 200, 500, 1000, 1500, 2000, 3000, 5000] as const);
      const v = Math.sqrt((2 * QE * U) / ME);
      return {
        angabe: `Ein Elektron wird aus der Ruhe durch $${U}\\,\\text{V}$ beschleunigt. Welche Geschwindigkeit erreicht es? Gib das Ergebnis in $10^{6}\\,\\text{m/s}$ an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(2*1.602e-19*${U}/9.109e-31)/1e6`,
            fehler: [{ wert: `sqrt(1.602e-19*${U}/9.109e-31)/1e6`, meldung: "Der Faktor 2 fehlt: Aus $\\tfrac12 m v^2 = eU$ folgt $v^2 = 2eU/m$." }],
          },
        ],
        hinweis: "Energiesatz: e·U = ½·m·v².",
        loesung: `**Ansatz:** Energiesatz. Die Energie $eU = ${U}\\,\\text{eV}$ wird zu Bewegungsenergie: $eU = \\tfrac12 m_e v^2$.\n---\n**Umstellen:** $v = \\sqrt{\\dfrac{2eU}{m_e}}$.\n---\n**Rechnung:** $v = \\sqrt{\\dfrac{2\\cdot 1{,}602\\cdot 10^{-19}\\,\\text{C}\\cdot ${U}\\,\\text{V}}{9{,}109\\cdot 10^{-31}\\,\\text{kg}}} = ${tz(v / 1e6, 3)}\\cdot 10^{6}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-ablenkung",
    kapitel: K,
    titel: "Ablenkung eines Elektronenstrahls",
    niveau: 3,
    erzeuge: (r) => {
      const UB = r.wahl([1000, 1500, 2000, 2500, 3000] as const);
      let U: number = r.wahl([40, 50, 60, 80, 100] as const);
      let Lcm: number = r.wahl([2, 3, 4, 5] as const);
      let dmm: number = r.wahl([5, 8, 10] as const);
      // Nur Kombinationen, bei denen der Strahl die Platte nicht trifft: y hoechstens 0,4 * d (d/2 waere die Platte).
      const passt = () => (U * (Lcm / 100) ** 2) / (4 * (dmm / 1000) * UB) <= 0.4 * (dmm / 1000);
      for (let i = 0; i < 50 && !passt(); i++) {
        U = r.wahl([40, 50, 60, 80, 100] as const);
        Lcm = r.wahl([2, 3, 4, 5] as const);
        dmm = r.wahl([5, 8, 10] as const);
      }
      if (!passt()) [U, Lcm, dmm] = [40, 2, 10];
      const y =(U * (Lcm / 100) ** 2) / (4 * (dmm / 1000) * UB);
      const tana = (U * (Lcm / 100)) / (2 * (dmm / 1000) * UB);
      return {
        angabe: `Elektronen werden durch $U_B = ${UB}\\,\\text{V}$ beschleunigt und fliegen dann mittig durch einen Ablenkkondensator (Plattenlänge $${Lcm}\\,\\text{cm}$, Abstand $${dmm}\\,\\text{mm}$, Spannung $${U}\\,\\text{V}$). Um wie viele Millimeter sind sie beim Austritt abgelenkt?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${U}*${Lcm / 100}^2/(4*${dmm / 1000}*${UB})*1000`,
            einheit: "mm",
            fehler: [{ wert: `${U}*${Lcm / 100}^2/(2*${dmm / 1000}*${UB})*1000`, meldung: "Der Faktor im Nenner ist $4$: $y = \\tfrac12 a t^2$ mit $v_0^2 = 2eU_B/m$ ergibt $y = UL^2/(4dU_B)$." }],
          },
        ],
        hinweis: "Wie beim waagrechten Wurf: y = ½·a·t² mit a = eU/(m·d) und t = L/v₀. Mit v₀² = 2eU_B/m wird y = U·L²/(4·d·U_B).",
        loesung: `**Modell:** Längs der Platten gleichförmig, quer gleichmäßig beschleunigt, wie beim waagrechten Wurf.\n---\n**Formel:** $y = \\tfrac12\\,\\dfrac{eU}{m d}\\,\\dfrac{L^2}{v_0^2}$ mit $v_0^2 = \\dfrac{2eU_B}{m}$ ergibt $y = \\dfrac{U L^2}{4 d U_B}$. Ladung und Masse kürzen sich.\n---\n**Rechnung:** $y = \\dfrac{${U}\\,\\text{V}\\cdot(${tz(Lcm / 100)}\\,\\text{m})^2}{4\\cdot ${tz(dmm / 1000)}\\,\\text{m}\\cdot ${UB}\\,\\text{V}} = ${tz(y * 1000, 3)}\\,\\text{mm}$.\n---\n**Zusatz:** Der Austrittswinkel folgt aus $\\tan\\alpha = \\dfrac{UL}{2dU_B} = ${tz(tana, 3)}$.`,
      };
    },
  }),
  drill({
    id: "p12-d-millikan",
    kapitel: K,
    titel: "Millikan: Ladung eines schwebenden Tröpfchens",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.int(1, 6);
      const m = r.wahl([1.0, 1.5, 2.0, 2.5, 3.0] as const);
      const dmm = r.wahl([5, 6, 8, 10] as const);
      // Schwebespannung so, dass q = n e herauskommt, auf ganze Volt gerundet
      const U = Math.round((m * 1e-15 * 9.81 * dmm * 1e-3) / (n * QE));
      const q = (m * 1e-15 * 9.81 * dmm * 1e-3) / U;
      return {
        angabe: `Ein Öltröpfchen der Masse $${tz(m)}\\cdot 10^{-15}\\,\\text{kg}$ schwebt zwischen waagrechten Platten im Abstand $${dmm}\\,\\text{mm}$ bei $${U}\\,\\text{V}$. Berechne die Ladung in $10^{-19}\\,\\text{C}$ und die Zahl der Elementarladungen.`,
        teile: [
          {
            typ: "zahl",
            label: "q in 10⁻¹⁹ C",
            loesung: `${m}e-15*9.81*${dmm}e-3/${U}/1e-19`,
            fehler: [{ wert: `${m}e-15*9.81/(${dmm}e-3*${U})/1e-19`, meldung: "Beim Umstellen von $qU/d = mg$ wandert $d$ in den Zähler: $q = mgd/U$." }],
          },
          { typ: "zahl", label: "Anzahl", loesung: `round(${m}e-15*9.81*${dmm}e-3/${U}/1.602e-19)` },
        ],
        hinweis: "Schweben: q·U/d = m·g, also q = m·g·d/U.",
        loesung: `**Ansatz:** Kräftegleichgewicht: elektrische Kraft nach oben gleich Gewichtskraft, $q\\,U/d = m\\,g$.\n---\n**Ladung:** $q = \\dfrac{mgd}{U} = \\dfrac{${tz(m)}\\cdot 10^{-15}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${tz(dmm / 1000)}\\,\\text{m}}{${U}\\,\\text{V}} = ${tz(q / 1e-19, 3)}\\cdot 10^{-19}\\,\\text{C}$.\n---\n**Elementarladungen:** $q/e = ${tz(q / QE, 2)} \\approx ${Math.round(q / QE)}$. Die Abweichung von der ganzen Zahl kommt nur vom Runden der Spannung.`,
      };
    },
  }),
];
