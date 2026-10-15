import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "dynamik";
const G = 9.81;
const sinG = (w: number) => Math.sin((w * Math.PI) / 180);
const cosG = (w: number) => Math.cos((w * Math.PI) / 180);

export const DRILLS: Drill[] = [
  drill({
    id: "p3-d-fma",
    kapitel: K,
    titel: "Grundgesetz F = m·a",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(2, 60) * 25;
      let a = r.int(1, 40) / 10;
      if (a === 1) a = 1.5; // bei a = 1 waeren Fehlerbild und Loesung gleich
      const fall = r.wahl(["F", "a", "m"] as const);
      const F = m * a;
      if (fall === "F")
        return {
          angabe: `Ein Körper mit $${m}\\,\\text{kg}$ wird mit $${tz(a)}\\,\\text{m/s}^2$ beschleunigt. Wie groß ist die resultierende Kraft in N?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${m}*${a}`,
              einheit: "N",
              fehler: [{ wert: `${m}/${a}`, meldung: "Du hast geteilt. Nach dem Grundgesetz ist die Kraft das **Produkt** aus Masse und Beschleunigung." }],
            },
          ],
          hinweis: "Grundgesetz F = m·a: Masse mal Beschleunigung.",
          loesung: `**Ansatz:** Das zweite Newtonsche Axiom sagt $F_{\\text{res}} = m\\cdot a$.\n---\n**Rechnung:** $F = ${m}\\,\\text{kg}\\cdot ${tz(a)}\\,\\text{m/s}^2 = ${tz(F)}\\,\\text{kg}\\cdot\\text{m/s}^2 = ${tz(F)}\\,\\text{N}$, denn $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$.`,
        };
      if (fall === "a")
        return {
          angabe: `Auf einen Körper mit $${m}\\,\\text{kg}$ wirkt die resultierende Kraft $${tz(F)}\\,\\text{N}$. Wie groß ist seine Beschleunigung in $\\text{m/s}^2$?`,
          teile: [
            {
              typ: "zahl",
              loesung: `${F}/${m}`,
              einheit: "m/s²",
              fehler: [{ wert: `${m}/${F}`, meldung: "Du hast den Kehrwert berechnet. Aus $F = m a$ folgt durch Teilen durch $m$: $a = F/m$." }],
            },
          ],
          hinweis: "Stelle F = m·a nach a um, indem du durch m teilst.",
          loesung: `**Ansatz:** Aus $F = m a$ folgt durch Teilen durch $m$ die Formel $a = F/m$.\n---\n**Rechnung:** $a = \\dfrac{${tz(F)}\\,\\text{N}}{${m}\\,\\text{kg}} = ${tz(a)}\\,\\text{m/s}^2$. Die Einheit stimmt, weil $\\text{N}/\\text{kg} = \\text{m/s}^2$ ist.`,
        };
      return {
        angabe: `Eine resultierende Kraft von $${tz(F)}\\,\\text{N}$ beschleunigt einen Körper mit $${tz(a)}\\,\\text{m/s}^2$. Wie groß ist seine Masse in kg?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${F}/${a}`,
            einheit: "kg",
            fehler: [{ wert: `${F}*${a}`, meldung: "Du hast multipliziert. Prüfe die Einheit: $\\text{N}\\cdot\\text{m/s}^2$ ist keine Masse. Es gilt $m = F/a$." }],
          },
        ],
        hinweis: "Stelle F = m·a nach m um, indem du durch a teilst.",
        loesung: `**Ansatz:** Aus $F = m a$ folgt durch Teilen durch $a$ die Formel $m = F/a$.\n---\n**Rechnung:** $m = \\dfrac{${tz(F)}\\,\\text{N}}{${tz(a)}\\,\\text{m/s}^2} = ${m}\\,\\text{kg}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-gewicht",
    kapitel: K,
    titel: "Gewichtskraft an verschiedenen Orten",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(2, 150);
      const [ort, g] = r.wahl([
        ["der Erde", 9.81],
        ["dem Mond", 1.62],
        ["dem Mars", 3.71],
        ["dem Jupiter", 24.8],
      ] as const);
      const fehler = [{ wert: `${m}`, meldung: "Das ist die Masse in kg. Die Gewichtskraft ist eine Kraft in Newton: Masse mal Fallbeschleunigung." }];
      if (g !== 9.81) fehler.push({ wert: `${m}*9.81`, meldung: "Das ist die Gewichtskraft auf der Erde. An einem anderen Ort gilt die dortige Fallbeschleunigung." });
      return {
        angabe: `Welche Gewichtskraft wirkt auf einen Körper mit $${m}\\,\\text{kg}$ auf ${ort} ($g = ${tz(g)}\\,\\text{m/s}^2$)? Antwort in N.`,
        teile: [{ typ: "zahl", loesung: `${m}*${g}`, einheit: "N", fehler }],
        hinweis: "F_G = m·g mit der Fallbeschleunigung des Ortes.",
        loesung: `**Ansatz:** Die Gewichtskraft ist $F_G = m\\cdot g$, mit dem $g$ des jeweiligen Himmelskörpers.\n---\n**Rechnung:** $F_G = ${m}\\,\\text{kg}\\cdot ${tz(g)}\\,\\text{m/s}^2 = ${tz(m * g, 2)}\\,\\text{N}$. Die Masse bleibt überall $${m}\\,\\text{kg}$, nur die Gewichtskraft hängt vom Ort ab.`,
      };
    },
  }),
  drill({
    id: "p3-d-hooke",
    kapitel: K,
    titel: "Hookesches Gesetz",
    niveau: 1,
    erzeuge: (r) => {
      const D = r.int(2, 80) * 10;
      const mg = r.int(1, 20) * 50; // Gramm
      const F = (mg / 1000) * G;
      const s = F / D;
      return {
        angabe: `Eine Feder mit $D = ${D}\\,\\text{N/m}$ wird mit einem Körper von $${mg}\\,\\text{g}$ belastet. Um wie viele Zentimeter verlängert sie sich?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${mg / 1000}*9.81/${D}*100`,
            einheit: "cm",
            fehler: [{ wert: `${mg / 1000}/${D}*100`, meldung: "Du hast die Masse statt der Kraft durch $D$ geteilt. An der Feder zieht die Gewichtskraft $m g$." }],
          },
        ],
        hinweis: "Zuerst die Gewichtskraft in N, dann s = F/D in m, dann in cm umrechnen.",
        loesung: `**Kraft:** Der Körper zieht mit seiner Gewichtskraft $F = m g = ${tz(mg / 1000, 3)}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2 = ${tz(F, 3)}\\,\\text{N}$.\n---\n**Hookesches Gesetz:** $F = D s$, also $s = \\dfrac{F}{D} = \\dfrac{${tz(F, 3)}\\,\\text{N}}{${D}\\,\\text{N/m}} = ${tz(s, 4)}\\,\\text{m}$.\n---\n**Umrechnen:** $${tz(s, 4)}\\,\\text{m} = ${tz(s * 100, 2)}\\,\\text{cm}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-reibung",
    kapitel: K,
    titel: "Gleitreibung auf waagrechtem Boden",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(5, 80);
      const mu = r.int(1, 8) / 10;
      const FR = mu * m * G;
      const F = Math.ceil(FR) + r.int(10, 100);
      const a = (F - FR) / m;
      return {
        angabe: `Eine Kiste ($${m}\\,\\text{kg}$) wird auf waagrechtem Boden mit $${F}\\,\\text{N}$ waagrecht geschoben und rutscht. Die Gleitreibungszahl ist $\\mu_G = ${tz(mu)}$. Wie groß ist ihre Beschleunigung in $\\text{m/s}^2$?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${F} - ${mu}*${m}*9.81)/${m}`,
            einheit: "m/s²",
            fehler: [
              { wert: `${F}/${m}`, meldung: "Du hast die Reibung vergessen. In $F = m a$ steht die **resultierende** Kraft: Schubkraft minus Gleitreibung." },
              { wert: `(${F} - ${mu}*${m})/${m}`, meldung: "In die Reibungsformel gehört die Normalkraft $m g$, nicht die Masse." },
            ],
          },
        ],
        hinweis: "Resultierende Kraft = Schubkraft minus Gleitreibung μ·m·g.",
        loesung: `**Ansatz:** Waagrecht wirken die Schubkraft nach vorn und die Gleitreibung nach hinten. Auf waagrechtem Boden ist $F_N = m g$.\n---\n**Reibung:** $F_R = \\mu_G m g = ${tz(mu)}\\cdot ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2 = ${tz(FR, 2)}\\,\\text{N}$.\n---\n**Grundgesetz:** $a = \\dfrac{${F}\\,\\text{N} - ${tz(FR, 2)}\\,\\text{N}}{${m}\\,\\text{kg}} = ${tz(a, 3)}\\,\\text{m/s}^2$.`,
      };
    },
  }),
  drill({
    id: "p3-d-schiefe-ebene",
    kapitel: K,
    titel: "Schiefe Ebene: Hangabtrieb und Normalkraft",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(1, 50);
      // ab 8 Grad: darunter ist cos α > 0,99 und das Fehlerbild m·g laege in der Toleranz von m·g·cos α
      let w = r.int(8, 60);
      if (w === 45) w = 40; // bei 45 Grad waeren sin und cos gleich
      const FG = m * G;
      return {
        angabe: `Ein Körper ($${m}\\,\\text{kg}$) liegt auf einer um $${w}^\\circ$ geneigten Ebene. Senkrecht zur Ebene wirken keine weiteren Kräfte. Berechne Hangabtriebskraft und Normalkraft in N.`,
        teile: [
          {
            typ: "zahl",
            label: "Hangabtriebskraft",
            loesung: `${m}*9.81*sin(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${m}*9.81*cos(inRad(${w}))`, meldung: "Sinus und Kosinus vertauscht. Bei waagrechter Ebene muss der Hangabtrieb null sein, das liefert nur der Sinus." }],
          },
          {
            typ: "zahl",
            label: "Normalkraft",
            loesung: `${m}*9.81*cos(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${m}*9.81`, meldung: "Auf der schiefen Ebene ist $F_N$ nicht $m g$, sondern nur der Anteil senkrecht zur Ebene, $m g\\cos\\alpha$." }],
          },
        ],
        hinweis: "F_H = m·g·sin α (entlang der Ebene), F_N = m·g·cos α (senkrecht dazu).",
        loesung: `**Ansatz:** Die Gewichtskraft $m g = ${tz(FG, 2)}\\,\\text{N}$ wird in einen Anteil entlang der Ebene und einen senkrecht dazu zerlegt.\n---\n**Hangabtrieb:** $F_H = m g\\sin ${w}^\\circ = ${tz(FG, 2)}\\,\\text{N}\\cdot ${tz(sinG(w), 3)} = ${tz(FG * sinG(w), 2)}\\,\\text{N}$.\n---\n**Normalkraft:** Senkrecht zur Ebene herrscht Gleichgewicht: $F_N = m g\\cos ${w}^\\circ = ${tz(FG * cosG(w), 2)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-haftgrenze",
    kapitel: K,
    titel: "Haftgrenze auf der schiefen Ebene",
    niveau: 1,
    erzeuge: (r) => {
      const mu = r.int(15, 90) / 100;
      const w = (Math.atan(mu) * 180) / Math.PI;
      return {
        angabe: `Ein Körper liegt auf einem Brett, die Haftreibungszahl ist $\\mu_H = ${tz(mu)}$. Ab welchem Neigungswinkel (in Grad) beginnt er zu rutschen?`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(atan(${mu}))`,
            einheit: "°",
            fehler: [{ wert: `inGrad(asin(${mu}))`, meldung: "Im Grenzfall gilt $m g\\sin\\alpha = \\mu_H m g\\cos\\alpha$. Teilt man durch $m g\\cos\\alpha$, bleibt der **Tangens**: $\\tan\\alpha = \\mu_H$." }],
          },
        ],
        hinweis: "Grenzfall: Hangabtrieb gleich Höchstwert der Haftreibung, also tan α = μ_H.",
        loesung: `**Ansatz:** Der Körper rutscht los, sobald der Hangabtrieb den Höchstwert der Haftreibung übersteigt. Im Grenzfall: $m g\\sin\\alpha = \\mu_H\\,m g\\cos\\alpha$.\n---\n**Umformen:** Teilen durch $m g\\cos\\alpha$ ergibt $\\tan\\alpha = \\mu_H = ${tz(mu)}$. Die Masse kürzt sich.\n---\n**Ergebnis:** $\\alpha = \\arctan ${tz(mu)} = ${tz(w, 1)}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p3-d-ebene-reibung",
    kapitel: K,
    titel: "Rutschen auf der schiefen Ebene mit Reibung",
    niveau: 2,
    erzeuge: (r) => {
      const w = r.int(20, 60);
      let mu = r.int(1, 5) / 10;
      if (Math.tan((w * Math.PI) / 180) <= mu) mu = 0.1;
      const a = G * (sinG(w) - mu * cosG(w));
      return {
        angabe: `Ein Körper rutscht eine um $${w}^\\circ$ geneigte Ebene hinab, die Gleitreibungszahl ist $\\mu_G = ${tz(mu)}$. Wie groß ist seine Beschleunigung in $\\text{m/s}^2$?`,
        teile: [
          {
            typ: "zahl",
            loesung: `9.81*(sin(inRad(${w})) - ${mu}*cos(inRad(${w})))`,
            einheit: "m/s²",
            fehler: [
              { wert: `9.81*(sin(inRad(${w})) + ${mu}*cos(inRad(${w})))`, meldung: "Beim Hinabrutschen zeigt die Reibung hangaufwärts. Sie wird vom Hangabtrieb **abgezogen**." },
              { wert: `9.81*sin(inRad(${w}))`, meldung: "Das wäre die Beschleunigung ohne Reibung. Die Gleitreibung $\\mu_G m g\\cos\\alpha$ bremst zusätzlich." },
            ],
          },
        ],
        hinweis: "a = g·(sin α − μ_G·cos α), weil die Reibung hangaufwärts zeigt.",
        loesung: `**Ansatz:** Entlang der Ebene wirken der Hangabtrieb $m g\\sin\\alpha$ hangabwärts und die Gleitreibung $\\mu_G m g\\cos\\alpha$ hangaufwärts. Also $m a = m g\\sin\\alpha - \\mu_G m g\\cos\\alpha$.\n---\n**Masse kürzen:** $a = g(\\sin\\alpha - \\mu_G\\cos\\alpha)$.\n---\n**Einsetzen:** $a = 9{,}81\\,\\text{m/s}^2\\cdot(${tz(sinG(w), 4)} - ${tz(mu)}\\cdot ${tz(cosG(w), 4)}) = ${tz(a, 3)}\\,\\text{m/s}^2$.`,
      };
    },
  }),
  drill({
    id: "p3-d-hinaufgestossen",
    kapitel: K,
    titel: "Eine Kiste die Rampe hinaufstoßen",
    niveau: 3,
    erzeuge: (r) => {
      const w = r.int(15, 40);
      const mu = r.int(1, 4) / 10;
      const v0 = r.int(3, 9);
      const aHin = G * (sinG(w) + mu * cosG(w));
      const s = (v0 * v0) / (2 * aHin);
      return {
        angabe: `Eine Kiste wird mit $${v0}\\,\\text{m/s}$ eine $${w}^\\circ$ steile Rampe hinaufgestoßen, $\\mu_G = ${tz(mu)}$. Wie groß ist der Betrag ihrer Beschleunigung beim Hinaufgleiten, und wie weit gleitet sie hinauf?`,
        teile: [
          {
            typ: "zahl",
            label: "Beschleunigung hinauf",
            loesung: `9.81*(sin(inRad(${w})) + ${mu}*cos(inRad(${w})))`,
            einheit: "m/s²",
            fehler: [{ wert: `9.81*(sin(inRad(${w})) - ${mu}*cos(inRad(${w})))`, meldung: "Das ist die Formel fürs Hinabgleiten. Beim Hinaufgleiten zeigt die Reibung hangabwärts und bremst **zusammen** mit dem Hangabtrieb." }],
          },
          {
            typ: "zahl",
            label: "Strecke hinauf",
            loesung: `${v0}^2/(2*9.81*(sin(inRad(${w})) + ${mu}*cos(inRad(${w}))))`,
            einheit: "m",
            fehler: [{ wert: `${v0}^2/(9.81*(sin(inRad(${w})) + ${mu}*cos(inRad(${w}))))`, meldung: "Der Faktor $2$ in $v_0^2 = 2 a s$ fehlt." }],
          },
        ],
        hinweis: "Beim Hinaufgleiten bremsen Hangabtrieb und Reibung gemeinsam: a = g·(sin α + μ_G·cos α). Dann s = v₀²/(2a).",
        loesung: `**Ansatz:** Die Kiste gleitet hangaufwärts. Die Reibung wirkt gegen die Bewegung, also hangabwärts, in dieselbe Richtung wie der Hangabtrieb.\n---\n**Beschleunigung:** $a = g(\\sin\\alpha + \\mu_G\\cos\\alpha) = 9{,}81\\,\\text{m/s}^2\\cdot(${tz(sinG(w), 3)} + ${tz(mu)}\\cdot ${tz(cosG(w), 3)}) = ${tz(aHin, 3)}\\,\\text{m/s}^2$.\n---\n**Strecke:** Zeitfreie Gleichung bis zum Stillstand: $s = \\dfrac{v_0^2}{2a} = \\dfrac{(${v0}\\,\\text{m/s})^2}{2\\cdot ${tz(aHin, 3)}\\,\\text{m/s}^2} = ${tz(s, 3)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-atwood",
    kapitel: K,
    titel: "Atwoodsche Fallmaschine",
    niveau: 2,
    erzeuge: (r) => {
      const m2 = r.int(1, 9) / 2;
      const m1 = m2 + r.int(1, 6) / 2;
      const a = ((m1 - m2) * G) / (m1 + m2);
      const T = m2 * (G + a);
      return {
        angabe: `Über eine reibungsfreie Rolle hängen $m_1 = ${tz(m1)}\\,\\text{kg}$ und $m_2 = ${tz(m2)}\\,\\text{kg}$ an einem masselosen Seil. Berechne die Beschleunigung in $\\text{m/s}^2$ und die Seilkraft in N.`,
        teile: [
          {
            typ: "zahl",
            label: "Beschleunigung",
            loesung: `(${m1}-${m2})*9.81/(${m1}+${m2})`,
            einheit: "m/s²",
            fehler: [{ wert: `(${m1}-${m2})*9.81/${m1}`, meldung: "Du hast nur durch eine Masse geteilt. Das Seil verbindet beide Körper, beschleunigt wird die **Gesamtmasse**." }],
          },
          {
            typ: "zahl",
            label: "Seilkraft",
            loesung: `2*${m1}*${m2}*9.81/(${m1}+${m2})`,
            einheit: "N",
            fehler: [{ wert: `${m2}*9.81`, meldung: "Das ist das Gewicht des leichteren Körpers. Er wird nach oben beschleunigt, also zieht das Seil stärker als sein Gewicht." }],
          },
        ],
        hinweis: "Antreibend ist die Differenz der Gewichtskräfte, beschleunigt wird die Gesamtmasse. Seilkraft am leichteren Körper: T = m₂(g + a).",
        loesung: `**Ansatz:** Für das Gesamtsystem ist die Seilkraft eine innere Kraft. Antreibend ist $(m_1 - m_2) g$, beschleunigt wird $m_1 + m_2$.\n---\n**Beschleunigung:** $a = \\dfrac{(${tz(m1)} - ${tz(m2)})\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2}{${tz(m1 + m2)}\\,\\text{kg}} = ${tz(a, 3)}\\,\\text{m/s}^2$.\n---\n**Seilkraft:** Der leichtere Körper beschleunigt nach oben: $T - m_2 g = m_2 a$, also $T = ${tz(m2)}\\,\\text{kg}\\cdot(9{,}81 + ${tz(a, 3)})\\,\\text{m/s}^2 = ${tz(T, 2)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-gekoppelt-reibung",
    kapitel: K,
    titel: "Klotz auf dem Tisch mit hängendem Gewicht und Reibung",
    niveau: 2,
    erzeuge: (r) => {
      const m1 = r.int(2, 8);
      const mu = r.int(1, 4) / 10;
      // haengende Masse so, dass sie sicher sinkt: m2 > mu*m1
      const m2 = Math.ceil(mu * m1 * 2) / 2 + r.int(1, 4) / 2;
      const FR = mu * m1 * G;
      const a = (m2 * G - FR) / (m1 + m2);
      const T = m2 * (G - a);
      return {
        angabe: `Ein Klotz ($${m1}\\,\\text{kg}$) liegt auf einem waagrechten Tisch, $\\mu_G = ${tz(mu)}$. Über eine Rolle an der Tischkante ist er mit einem hängenden Körper ($${tz(m2)}\\,\\text{kg}$) verbunden, der sinkt. Berechne die Beschleunigung in $\\text{m/s}^2$ und die Schnurkraft in N.`,
        teile: [
          {
            typ: "zahl",
            label: "Beschleunigung",
            loesung: `(${m2}*9.81 - ${mu}*${m1}*9.81)/(${m1}+${m2})`,
            einheit: "m/s²",
            fehler: [
              { wert: `${m2}*9.81/(${m1}+${m2})`, meldung: "Du hast die Reibung am Klotz vergessen. Sie ist eine äußere Kraft, die das ganze System bremst." },
              { wert: `(${m2}*9.81 - ${mu}*${m1}*9.81)/${m1}`, meldung: "Du hast nur durch die Masse des Klotzes geteilt. Der hängende Körper wird mitbeschleunigt." },
            ],
          },
          {
            typ: "zahl",
            label: "Schnurkraft",
            loesung: `${m2}*(9.81 - (${m2}*9.81 - ${mu}*${m1}*9.81)/(${m1}+${m2}))`,
            einheit: "N",
            fehler: [{ wert: `${m2}*9.81`, meldung: "Das ist das Gewicht des hängenden Körpers. Er sinkt beschleunigt, also muss die Schnurkraft kleiner sein." }],
          },
        ],
        hinweis: "Gesamtsystem: (m₂·g − μ_G·m₁·g)/(m₁ + m₂). Schnurkraft am hängenden Körper: T = m₂(g − a).",
        loesung: `**Ansatz:** Gesamtsystem. Antreibend ist $m_2 g = ${tz(m2 * G, 2)}\\,\\text{N}$, bremsend die Gleitreibung am Klotz $\\mu_G m_1 g = ${tz(FR, 2)}\\,\\text{N}$. Die Schnurkraft ist eine innere Kraft.\n---\n**Beschleunigung:** $a = \\dfrac{${tz(m2 * G, 2)}\\,\\text{N} - ${tz(FR, 2)}\\,\\text{N}}{${tz(m1 + m2)}\\,\\text{kg}} = ${tz(a, 3)}\\,\\text{m/s}^2$.\n---\n**Schnurkraft:** Der hängende Körper beschleunigt nach unten: $m_2 g - T = m_2 a$, also $T = ${tz(m2)}\\,\\text{kg}\\cdot(9{,}81 - ${tz(a, 3)})\\,\\text{m/s}^2 = ${tz(T, 2)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-lift",
    kapitel: K,
    titel: "Personenwaage im Lift",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(45, 110);
      const a = r.int(5, 30) / 10;
      const fall = r.wahl(["anfahren auf", "anfahren ab", "bremsen ab", "bremsen auf"] as const);
      const nachOben = fall === "anfahren auf" || fall === "bremsen ab";
      const text = {
        "anfahren auf": `fährt mit $${tz(a)}\\,\\text{m/s}^2$ nach oben an`,
        "anfahren ab": `fährt mit $${tz(a)}\\,\\text{m/s}^2$ nach unten an`,
        "bremsen ab": `fährt nach unten und bremst mit $${tz(a)}\\,\\text{m/s}^2$`,
        "bremsen auf": `fährt nach oben und bremst mit $${tz(a)}\\,\\text{m/s}^2$`,
      }[fall];
      const N = m * (G + (nachOben ? a : -a));
      return {
        angabe: `Eine Person ($${m}\\,\\text{kg}$) steht im Lift auf einer Waage. Der Lift ${text}. Welche Kraft zeigt die Waage in N?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*(9.81 ${nachOben ? "+" : "-"} ${a})`,
            einheit: "N",
            fehler: [
              {
                wert: `${m}*(9.81 ${nachOben ? "-" : "+"} ${a})`,
                meldung: "Vorzeichen verwechselt. Entscheidend ist die Richtung der **Beschleunigung**, nicht die Fahrtrichtung. Bremsen einer Abwärtsfahrt heißt Beschleunigung nach oben.",
              },
            ],
          },
        ],
        hinweis: "F_N − m·g = m·a mit „nach oben“ positiv. Zeigt die Beschleunigung nach oben oder nach unten?",
        loesung: `**Richtung der Beschleunigung:** Der Lift ${text}. Die Beschleunigung zeigt also nach **${nachOben ? "oben" : "unten"}**.\n---\n**Grundgesetz für die Person:** $F_N - m g = m a$ mit „nach oben“ positiv, also $F_N = m(g ${nachOben ? "+" : "-"} ${tz(a)}\\,\\text{m/s}^2)$.\n---\n**Ergebnis:** $F_N = ${m}\\,\\text{kg}\\cdot ${tz(G + (nachOben ? a : -a), 2)}\\,\\text{m/s}^2 = ${tz(N, 1)}\\,\\text{N}$. Die Waage zeigt ${nachOben ? "mehr" : "weniger"} als die Gewichtskraft $${tz(m * G, 1)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p3-d-vt-kraft",
    kapitel: K,
    titel: "Resultierende Kraft aus einer Geschwindigkeitsänderung",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(2, 40) * 5;
      const v1 = r.int(0, 10);
      let v2 = r.int(0, 20);
      if (v2 === v1) v2 = v1 + 3;
      const dt = r.int(2, 8);
      const a = (v2 - v1) / dt;
      const F = m * a;
      return {
        angabe: `Ein Wagen mit $${m}\\,\\text{kg}$ ändert seine Geschwindigkeit in $${dt}\\,\\text{s}$ gleichmäßig von $${v1}\\,\\text{m/s}$ auf $${v2}\\,\\text{m/s}$ (im v-t-Diagramm eine gerade Strecke). Wie groß ist die resultierende Kraft in N? Ein negatives Vorzeichen bedeutet: entgegen der Fahrtrichtung.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*(${v2}-${v1})/${dt}`,
            einheit: "N",
            fehler: [{ wert: `${m}*${v2}`, meldung: "Masse mal Geschwindigkeit ist der Impuls, keine Kraft. Für die Kraft brauchst du die Beschleunigung, also die Steigung $\\Delta v/\\Delta t$." }],
          },
        ],
        hinweis: "Die Beschleunigung ist die Steigung im v-t-Diagramm: a = Δv/Δt. Dann F = m·a.",
        loesung: `**Ansatz:** Im v-t-Diagramm ist die Beschleunigung die Steigung. Mit dem Grundgesetz wird daraus die resultierende Kraft.\n---\n**Beschleunigung:** $a = \\dfrac{${v2}\\,\\text{m/s} - ${v1}\\,\\text{m/s}}{${dt}\\,\\text{s}} = ${tz(a, 3)}\\,\\text{m/s}^2$.\n---\n**Kraft:** $F_{\\text{res}} = m a = ${m}\\,\\text{kg}\\cdot ${tz(a, 3)}\\,\\text{m/s}^2 = ${tz(F, 1)}\\,\\text{N}$${F < 0 ? ", also entgegen der Fahrtrichtung (Bremsen)" : ", in Fahrtrichtung"}.`,
      };
    },
  }),
  drill({
    id: "p3-d-federn",
    kapitel: K,
    titel: "Zwei Federn in Reihe oder parallel",
    niveau: 2,
    erzeuge: (r) => {
      const D1 = r.int(2, 12) * 50;
      let D2 = r.int(2, 12) * 50;
      if (D2 === D1) D2 = D1 + 100;
      const reihe = r.wahl([true, false] as const);
      const D = reihe ? (D1 * D2) / (D1 + D2) : D1 + D2;
      return {
        angabe: `Zwei Federn mit $D_1 = ${D1}\\,\\text{N/m}$ und $D_2 = ${D2}\\,\\text{N/m}$ hängen ${reihe ? "hintereinander (in Reihe)" : "nebeneinander (parallel) und tragen die Last gemeinsam"}. Wie groß ist die Federkonstante der Ersatzfeder in N/m?`,
        teile: [
          {
            typ: "zahl",
            loesung: reihe ? `1/(1/${D1} + 1/${D2})` : `${D1} + ${D2}`,
            einheit: "N/m",
            fehler: [
              reihe
                ? { wert: `${D1} + ${D2}`, meldung: "Das ist die Formel für **parallele** Federn. In Reihe trägt jede Feder die volle Last, die Kette wird weicher." }
                : { wert: `1/(1/${D1} + 1/${D2})`, meldung: "Das ist die Formel für Federn **in Reihe**. Parallel teilen sich die Federn die Last, das Paar wird härter." },
            ],
          },
        ],
        hinweis: "In Reihe addieren sich die Kehrwerte: 1/D = 1/D₁ + 1/D₂. Parallel addieren sich die Federkonstanten.",
        loesung: reihe
          ? `**Ansatz:** In Reihe trägt jede Feder die volle Last, die Verlängerungen addieren sich: $1/D = 1/D_1 + 1/D_2$.\n---\n**Rechnung:** $\\dfrac{1}{D} = \\dfrac{1}{${D1}\\,\\text{N/m}} + \\dfrac{1}{${D2}\\,\\text{N/m}}$, also $D = \\dfrac{D_1 D_2}{D_1 + D_2} = ${tz(D, 2)}\\,\\text{N/m}$.\n---\n**Kontrolle:** Die Ersatzfeder ist weicher als jede einzelne Feder. ✓`
          : `**Ansatz:** Parallel dehnen sich beide Federn gleich weit, und die Kräfte addieren sich: $D = D_1 + D_2$.\n---\n**Rechnung:** $D = ${D1}\\,\\text{N/m} + ${D2}\\,\\text{N/m} = ${D}\\,\\text{N/m}$.\n---\n**Kontrolle:** Das Paar ist härter als jede einzelne Feder. ✓`,
      };
    },
  }),
  drill({
    id: "p3-d-schraeg-ziehen",
    kapitel: K,
    titel: "Schräg ziehen mit Reibung",
    niveau: 3,
    erzeuge: (r) => {
      const m = r.int(10, 50);
      const w = r.wahl([15, 20, 25, 30, 35, 40] as const);
      const mu = r.int(1, 4) / 10;
      const FN0 = m * G;
      // Zugkraft so gross, dass sich die Kiste sicher bewegt
      const F = Math.ceil((mu * FN0) / 10) * 10 + r.int(2, 10) * 10;
      const FN = FN0 - F * sinG(w);
      const a = (F * cosG(w) - mu * FN) / m;
      return {
        angabe: `Eine Kiste ($${m}\\,\\text{kg}$) wird auf waagrechtem Boden an einem Seil gezogen, das um $${w}^\\circ$ nach oben geneigt ist. Die Zugkraft beträgt $${F}\\,\\text{N}$, $\\mu_G = ${tz(mu)}$. Berechne die Normalkraft in N und die Beschleunigung in $\\text{m/s}^2$.`,
        teile: [
          {
            typ: "zahl",
            label: "Normalkraft",
            loesung: `${m}*9.81 - ${F}*sin(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${m}*9.81`, meldung: "Das Seil zieht schräg nach oben und entlastet den Boden. $F_N$ ist kleiner als $m g$." }],
          },
          {
            typ: "zahl",
            label: "Beschleunigung",
            loesung: `(${F}*cos(inRad(${w})) - ${mu}*(${m}*9.81 - ${F}*sin(inRad(${w}))))/${m}`,
            einheit: "m/s²",
            fehler: [{ wert: `(${F} - ${mu}*${m}*9.81)/${m}`, meldung: "Waagrecht zieht nur der Anteil $F\\cos\\alpha$, und die Reibung hängt von der verkleinerten Normalkraft ab." }],
          },
        ],
        hinweis: "Senkrecht: F_N = m·g − F·sin α. Waagrecht: m·a = F·cos α − μ_G·F_N.",
        loesung: `**Ansatz:** Freikörperbild mit Gewichtskraft, Normalkraft, Reibung und schräger Zugkraft. Senkrecht herrscht Gleichgewicht, waagrecht gilt das Grundgesetz.\n---\n**Zerlegen:** waagrecht $F\\cos ${w}^\\circ = ${tz(F * cosG(w), 1)}\\,\\text{N}$, senkrecht $F\\sin ${w}^\\circ = ${tz(F * sinG(w), 1)}\\,\\text{N}$.\n---\n**Normalkraft:** $F_N = m g - F\\sin ${w}^\\circ = ${tz(FN0, 1)}\\,\\text{N} - ${tz(F * sinG(w), 1)}\\,\\text{N} = ${tz(FN, 1)}\\,\\text{N}$.\n---\n**Beschleunigung:** Reibung $\\mu_G F_N = ${tz(mu * FN, 1)}\\,\\text{N}$, also $a = \\dfrac{${tz(F * cosG(w), 1)}\\,\\text{N} - ${tz(mu * FN, 1)}\\,\\text{N}}{${m}\\,\\text{kg}} = ${tz(a, 3)}\\,\\text{m/s}^2$.`,
      };
    },
  }),
];
