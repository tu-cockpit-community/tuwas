import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "drehbewegung-einfache-maschinen";
const G = 9.81;
const sinG = (w: number) => Math.sin((w * Math.PI) / 180);
const cosG = (w: number) => Math.cos((w * Math.PI) / 180);
/** Fehlerbild nur anbieten, wenn es sich deutlich (> 2 %) von der richtigen Antwort unterscheidet. */
const weit = (falsch: number, richtig: number) => Math.abs(falsch - richtig) > 0.02 * Math.abs(richtig);
type Fehler = { wert: string; meldung: string };
const nurWeit = (richtig: number, liste: [number, Fehler][]): Fehler[] => liste.filter(([w]) => weit(w, richtig)).map(([, f]) => f);

export const DRILLS: Drill[] = [
  drill({
    id: "p5-d-drehmoment",
    kapitel: K,
    titel: "Drehmoment einer schrägen Kraft",
    niveau: 1,
    erzeuge: (r) => {
      const F = r.int(2, 30) * 10;
      const l = r.int(10, 60) / 100;
      const w = r.wahl([30, 40, 50, 60, 70, 90] as const);
      const M = F * l * sinG(w);
      const fehler = nurWeit(M, [
        [F * l * cosG(w), { wert: `${F}*${l}*cos(inRad(${w}))`, meldung: "Sinus und Kosinus sind vertauscht. Der Hebelarm liegt dem Winkel zwischen Kraft und Hebel **gegenüber**: $r_\\perp = r\\sin\\alpha$." }],
        [F * l, { wert: `${F}*${l}`, meldung: "Du hast den ganzen Abstand als Hebelarm genommen. Bei einer schrägen Kraft zählt nur der **senkrechte** Abstand der Wirkungslinie, $r\\sin\\alpha$." }],
      ]);
      return {
        angabe: `Eine Kraft von $${F}\\,\\text{N}$ greift am Ende eines $${tz(l * 100)}\\,\\text{cm}$ langen Hebels an, unter $${w}^\\circ$ gegen den Hebel. Wie groß ist das Drehmoment in $\\text{N}\\,\\text{m}$?`,
        teile: [{ typ: "zahl", loesung: `${F}*${l}*sin(inRad(${w}))`, einheit: "N·m", fehler }],
        hinweis: "Der Hebelarm ist der senkrechte Abstand der Wirkungslinie von der Achse: r⊥ = r·sin α.",
        loesung: `**Ansatz:** Das Drehmoment ist Kraft mal Hebelarm, $M = F\\cdot r_\\perp$. Bei schräger Kraft ist der Hebelarm $r_\\perp = r\\sin\\alpha$.\n---\n**Hebelarm:** $r_\\perp = ${tz(l)}\\,\\text{m}\\cdot\\sin ${w}^\\circ = ${tz(l * sinG(w), 3)}\\,\\text{m}$.\n---\n**Drehmoment:** $M = ${F}\\,\\text{N}\\cdot ${tz(l * sinG(w), 3)}\\,\\text{m} = ${tz(M, 2)}\\,\\text{N}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p5-d-hebel",
    kapitel: K,
    titel: "Hebelgesetz",
    niveau: 1,
    erzeuge: (r) => {
      const last = r.int(2, 30) * 50;
      const b = r.int(5, 40) / 100;
      const a = r.int(Math.ceil(b * 100) + 10, 200) / 100;
      const F = (last * b) / a;
      return {
        angabe: `An einem Hebel greift eine Last von $${last}\\,\\text{N}$ im Abstand $${tz(b)}\\,\\text{m}$ vom Drehpunkt an, senkrecht zum Hebel. Welche senkrechte Kraft ist im Abstand $${tz(a)}\\,\\text{m}$ auf der anderen Seite nötig, damit Gleichgewicht herrscht? Antwort in Newton.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${last}*${b}/${a}`,
            einheit: "N",
            fehler: [{ wert: `${last}*${a}/${b}`, meldung: "Der Bruch ist umgekehrt. Am **längeren** Arm braucht man die **kleinere** Kraft: $F = G\\cdot b/a$." }],
          },
        ],
        hinweis: "Hebelgesetz: Kraft mal Kraftarm gleich Last mal Lastarm.",
        loesung: `**Ansatz:** Im Gleichgewicht gilt das Hebelgesetz $F\\cdot a = G\\cdot b$. Wir teilen durch $a$.\n---\n**Rechnung:** $F = ${last}\\,\\text{N}\\cdot\\dfrac{${tz(b)}\\,\\text{m}}{${tz(a)}\\,\\text{m}} = ${tz(F, 1)}\\,\\text{N}$.\n---\n**Kontrolle:** Der Kraftarm ist länger als der Lastarm, also ist die Kraft kleiner als die Last.`,
      };
    },
  }),
  drill({
    id: "p5-d-auflager",
    kapitel: K,
    titel: "Balken auf zwei Stützen",
    niveau: 2,
    erzeuge: (r) => {
      const L = r.int(2, 6);
      const Gb = r.int(5, 30) * 10;
      const P = r.int(10, 80) * 10;
      let x = r.int(1, L * 10 - 1) / 10;
      if (Math.abs(x - L / 2) < 0.05) x = L / 4;
      const FR = (Gb * (L / 2) + P * x) / L;
      const FL = Gb + P - FR;
      return {
        angabe: `Ein gleichmäßig dicker Balken der Länge $${L}\\,\\text{m}$ mit der Gewichtskraft $${Gb}\\,\\text{N}$ liegt an beiden Enden auf. Eine Last von $${P}\\,\\text{N}$ steht $${tz(x)}\\,\\text{m}$ vom linken Ende entfernt. Berechne die Kräfte der beiden Auflager in Newton.`,
        teile: [
          {
            typ: "zahl",
            label: "links",
            loesung: `${Gb}+${P}-(${Gb}*${L / 2}+${P}*${x})/${L}`,
            einheit: "N",
            fehler: nurWeit(FL, [[P - (P * x) / L, { wert: `${P}-${P}*${x}/${L}`, meldung: "Du hast das Eigengewicht des Balkens vergessen. Es greift in der Mitte an und verteilt sich auf beide Auflager." }]]),
          },
          {
            typ: "zahl",
            label: "rechts",
            loesung: `(${Gb}*${L / 2}+${P}*${x})/${L}`,
            einheit: "N",
            fehler: nurWeit(FR, [[(P * x) / L, { wert: `${P}*${x}/${L}`, meldung: "In der Drehmomentgleichung fehlt das Eigengewicht des Balkens, angreifend in der Mitte." }]]),
          },
        ],
        hinweis: "Bezugspunkt im linken Auflager wählen. Das Eigengewicht greift in der Balkenmitte an.",
        loesung: `**Ansatz:** Bezugspunkt im linken Auflager, dort fällt die unbekannte Kraft $F_L$ heraus. Das Eigengewicht greift bei $${tz(L / 2)}\\,\\text{m}$ an.\n---\n**Drehmomente:** $F_R\\cdot ${L}\\,\\text{m} = ${Gb}\\,\\text{N}\\cdot ${tz(L / 2)}\\,\\text{m} + ${P}\\,\\text{N}\\cdot ${tz(x)}\\,\\text{m} = ${tz(Gb * (L / 2) + P * x, 2)}\\,\\text{N}\\,\\text{m}$, also $F_R = ${tz(FR, 1)}\\,\\text{N}$.\n---\n**Kräftegleichgewicht:** $F_L = ${Gb}\\,\\text{N} + ${P}\\,\\text{N} - ${tz(FR, 1)}\\,\\text{N} = ${tz(FL, 1)}\\,\\text{N}$. Das Auflager näher an der Last trägt mehr.`,
      };
    },
  }),
  drill({
    id: "p5-d-schwerpunkt",
    kapitel: K,
    titel: "Schwerpunkt auf einer Stange",
    niveau: 2,
    erzeuge: (r) => {
      const m1 = r.int(1, 9);
      const m2 = r.int(1, 9);
      let m3 = r.int(1, 9);
      if (m1 === m2 && m2 === m3) m3 = m3 === 9 ? 1 : m3 + 1;
      const x2 = r.int(2, 6) / 10;
      const x3 = Math.round((x2 + r.int(2, 6) / 10) * 10) / 10;
      const xs = (m2 * x2 + m3 * x3) / (m1 + m2 + m3);
      return {
        angabe: `Auf einer masselosen Stange sitzen $${m1}\\,\\text{kg}$ bei $x = 0$, $${m2}\\,\\text{kg}$ bei $x = ${tz(x2)}\\,\\text{m}$ und $${m3}\\,\\text{kg}$ bei $x = ${tz(x3)}\\,\\text{m}$. Wo liegt der Schwerpunkt? Antwort in Metern.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${m2}*${x2}+${m3}*${x3})/(${m1}+${m2}+${m3})`,
            einheit: "m",
            fehler: nurWeit(xs, [[(x2 + x3) / 3, { wert: `(0+${x2}+${x3})/3`, meldung: "Du hast die Orte ohne Massen gemittelt. Jeder Ort zählt mit seiner Masse, und geteilt wird durch die **Gesamtmasse**." }]]),
          },
        ],
        hinweis: "Der Schwerpunkt ist der mit den Massen gewichtete Mittelwert der Orte.",
        loesung: `**Ansatz:** $x_S = \\dfrac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3}$.\n---\n**Einsetzen:** $x_S = \\dfrac{${m1}\\cdot 0 + ${m2}\\cdot ${tz(x2)} + ${m3}\\cdot ${tz(x3)}}{${m1 + m2 + m3}}\\,\\text{m}$.\n---\n**Ergebnis:** $x_S = ${tz(xs, 3)}\\,\\text{m}$. Er liegt näher an den schwereren Massen.`,
      };
    },
  }),
  drill({
    id: "p5-d-kippwinkel",
    kapitel: K,
    titel: "Kippwinkel eines Quaders",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.int(30, 120) / 100;
      const h = r.int(Math.ceil(b * 50) + 10, 150) / 100;
      const a = (Math.atan(b / 2 / h) * 180) / Math.PI;
      return {
        angabe: `Ein Schrank ist $${tz(b)}\\,\\text{m}$ tief. Sein Schwerpunkt liegt mittig, $${tz(h)}\\,\\text{m}$ über dem Boden. Um welchen Winkel kann man ihn um eine untere Kante kippen, bevor er von selbst umfällt? Antwort in Grad.`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(atan(${b}/2/${h}))`,
            einheit: "°",
            fehler: [{ wert: `inGrad(atan(${b}/${h}))`, meldung: "Du hast die ganze Tiefe genommen. Der Schwerpunkt liegt nur die **halbe** Tiefe von der Kippkante entfernt." }],
          },
        ],
        hinweis: "Er kippt, sobald der Schwerpunkt genau über der Kante steht: tan α = (b/2)/h_S.",
        loesung: `**Ansatz:** Der Schrank fällt um, sobald der Schwerpunkt über der Kippkante steht. Dann gilt $\\tan\\alpha = \\dfrac{b/2}{h_S}$.\n---\n**Abstand zur Kante:** $b/2 = ${tz(b / 2, 3)}\\,\\text{m}$, also $\\tan\\alpha = \\dfrac{${tz(b / 2, 3)}\\,\\text{m}}{${tz(h)}\\,\\text{m}} = ${tz(b / 2 / h, 3)}$.\n---\n**Winkel:** $\\alpha = ${tz(a, 1)}^\\circ$. Ein tieferer Schwerpunkt würde den Winkel vergrößern.`,
      };
    },
  }),
  drill({
    id: "p5-d-wellrad",
    kapitel: K,
    titel: "Wellrad",
    niveau: 1,
    erzeuge: (r) => {
      const last = r.int(2, 20) * 50;
      const rk = r.int(2, 10);
      const R = r.int(rk + 5, 60);
      return {
        angabe: `Eine Seilwelle mit Radius $${rk}\\,\\text{cm}$ wird mit einer Kurbel vom Radius $${R}\\,\\text{cm}$ gedreht. Welche Kurbelkraft hält eine Last von $${last}\\,\\text{N}$? Antwort in Newton.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${last}*${rk}/${R}`,
            einheit: "N",
            fehler: [{ wert: `${last}*${R}/${rk}`, meldung: "Der Bruch ist umgekehrt. Die Kurbel ist der lange Hebelarm, an ihr braucht man **weniger** Kraft als die Last." }],
          },
        ],
        hinweis: "Wellrad: F·R = G·r. Die Radien sind die Hebelarme.",
        loesung: `**Ansatz:** Das Wellrad ist ein Hebel mit den Radien als Hebelarmen: $F\\cdot R = G\\cdot r$.\n---\n**Rechnung:** $F = ${last}\\,\\text{N}\\cdot\\dfrac{${rk}\\,\\text{cm}}{${R}\\,\\text{cm}} = ${tz((last * rk) / R, 1)}\\,\\text{N}$. Die Zentimeter kürzen sich.`,
      };
    },
  }),
  drill({
    id: "p5-d-zahnrad",
    kapitel: K,
    titel: "Zahnradgetriebe",
    niveau: 1,
    erzeuge: (r) => {
      const z1 = r.int(10, 30);
      let z2 = r.int(12, 80);
      if (Math.abs(z2 - z1) < 4) z2 = z1 + 10;
      const n1 = r.int(5, 30) * 100;
      const M1 = r.int(2, 40) / 2;
      return {
        angabe: `Ein Ritzel mit $${z1}$ Zähnen dreht sich mit $${n1}$ Umdrehungen pro Minute und überträgt das Drehmoment $${tz(M1)}\\,\\text{N}\\,\\text{m}$ auf ein Zahnrad mit $${z2}$ Zähnen. Reibung vernachlässigen wir. Berechne Drehzahl und Drehmoment des Zahnrads.`,
        teile: [
          {
            typ: "zahl",
            label: "Drehzahl in Umdrehungen pro Minute",
            loesung: `${n1}*${z1}/${z2}`,
            einheit: "1/min",
            fehler: [{ wert: `${n1}*${z2}/${z1}`, meldung: "Die Übersetzung ist umgekehrt. Das Rad mit **mehr** Zähnen dreht sich **langsamer**: $n_2 = n_1\\cdot z_1/z_2$." }],
          },
          {
            typ: "zahl",
            label: "Drehmoment",
            loesung: `${M1}*${z2}/${z1}`,
            einheit: "N·m",
            fehler: [{ wert: `${M1}*${z1}/${z2}`, meldung: "Wo die Drehzahl sinkt, steigt das Drehmoment. Es gilt $M_2 = M_1\\cdot z_2/z_1$." }],
          },
        ],
        hinweis: "n₂/n₁ = z₁/z₂ und M₂/M₁ = z₂/z₁.",
        loesung: `**Ansatz:** An der Berührstelle laufen gleich viele Zähne vorbei, und die Zähne drücken mit gleicher Kraft. Daraus folgen $n_2 = n_1\\cdot z_1/z_2$ und $M_2 = M_1\\cdot z_2/z_1$.\n---\n**Drehzahl:** $n_2 = ${n1}\\,\\text{min}^{-1}\\cdot\\dfrac{${z1}}{${z2}} = ${tz((n1 * z1) / z2, 1)}\\,\\text{min}^{-1}$.\n---\n**Drehmoment:** $M_2 = ${tz(M1)}\\,\\text{N}\\,\\text{m}\\cdot\\dfrac{${z2}}{${z1}} = ${tz((M1 * z2) / z1, 2)}\\,\\text{N}\\,\\text{m}$. Das Produkt aus Drehmoment und Drehzahl, also die Leistung, bleibt gleich.`,
      };
    },
  }),
  drill({
    id: "p5-d-flaschenzug",
    kapitel: K,
    titel: "Flaschenzug",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(2, 8);
      const last = r.int(2, 40) * 100;
      const h = r.int(5, 40) / 10;
      return {
        angabe: `Eine Last von $${last}\\,\\text{N}$ samt loser Flasche hängt an einem Flaschenzug mit ${n} tragenden Seilstücken. Sie soll reibungsfrei $${tz(h)}\\,\\text{m}$ gehoben werden. Berechne Zugkraft und Seilweg.`,
        teile: [
          {
            typ: "zahl",
            label: "Zugkraft",
            loesung: `${last}/${n}`,
            einheit: "N",
            fehler: [{ wert: `${last}*${n}`, meldung: "Ein Flaschenzug **verkleinert** die Kraft. Jedes der Seilstücke trägt nur einen Teil der Last." }],
          },
          {
            typ: "zahl",
            label: "Seilweg",
            loesung: `${n}*${h}`,
            einheit: "m",
            fehler: [{ wert: `${h}/${n}`, meldung: "Der Seilweg wird **länger** als die Hubhöhe. Jedes tragende Seilstück wird um die Hubhöhe kürzer." }],
          },
        ],
        hinweis: "F = G/n und s = n·h.",
        loesung: `**Ansatz:** Die Last verteilt sich auf $n = ${n}$ Seilstücke mit gleicher Seilkraft. Hebt sich die Last um $h$, wird jedes Stück um $h$ kürzer.\n---\n**Zugkraft:** $F = \\dfrac{${last}\\,\\text{N}}{${n}} = ${tz(last / n, 1)}\\,\\text{N}$.\n---\n**Seilweg:** $s = ${n}\\cdot ${tz(h)}\\,\\text{m} = ${tz(n * h)}\\,\\text{m}$. Probe: $F\\cdot s = G\\cdot h = ${tz(last * h)}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p5-d-flaschenzug-eta",
    kapitel: K,
    titel: "Flaschenzug mit Wirkungsgrad",
    niveau: 2,
    erzeuge: (r) => {
      const n = r.int(2, 6);
      const m = r.int(5, 60) * 10;
      const eta = r.int(60, 90) / 100;
      return {
        angabe: `Eine Masse von $${m}\\,\\text{kg}$ samt loser Flasche hängt an einem Flaschenzug mit ${n} tragenden Seilstücken. Der Wirkungsgrad ist $${tz(eta * 100)}\\,\\%$. Welche Zugkraft ist nötig? Antwort in Newton.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*${G}/(${n}*${eta})`,
            einheit: "N",
            fehler: [
              { wert: `${m}*${G}/${n}*${eta}`, meldung: "Mit Reibung braucht man **mehr** Kraft, nicht weniger. Teile die ideale Kraft durch den Wirkungsgrad." },
              { wert: `${m}/(${n}*${eta})`, meldung: "Du hast mit der Masse statt mit der Gewichtskraft gerechnet. Die Last ist $G = m g$ in Newton." },
            ],
          },
        ],
        hinweis: "Ideale Kraft G/n berechnen und durch den Wirkungsgrad teilen.",
        loesung: `**Gewichtskraft:** $G = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2 = ${tz(m * G, 1)}\\,\\text{N}$.\n---\n**Ohne Reibung:** $F_0 = G/${n} = ${tz((m * G) / n, 1)}\\,\\text{N}$.\n---\n**Mit Reibung:** $F = \\dfrac{F_0}{\\eta} = \\dfrac{${tz((m * G) / n, 1)}\\,\\text{N}}{${tz(eta)}} = ${tz((m * G) / (n * eta), 1)}\\,\\text{N}$. Die Kraft ist größer als ohne Reibung, wie es sein muss.`,
      };
    },
  }),
  drill({
    id: "p5-d-schiefe-ebene",
    kapitel: K,
    titel: "Schiefe Ebene",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(5, 200);
      // Ab 12° liegt m·g mehr als 2 % über m·g·cos α; sonst wäre das Fehlerbild „Normalkraft = Gewichtskraft“ fast die richtige Antwort.
      const w = r.int(12, 40);
      return {
        angabe: `Ein Körper mit $${m}\\,\\text{kg}$ liegt auf einer reibungsfreien schiefen Ebene mit $${w}^\\circ$ Neigung. Berechne die Hangabtriebskraft und die Normalkraft in Newton.`,
        teile: [
          {
            typ: "zahl",
            label: "Hangabtriebskraft",
            loesung: `${m}*${G}*sin(inRad(${w}))`,
            einheit: "N",
            fehler: [{ wert: `${m}*${G}*cos(inRad(${w}))`, meldung: "Sinus und Kosinus sind vertauscht. Prüfe mit dem Extremfall $0^\\circ$: Dort gibt es keinen Hangabtrieb, und $\\sin 0^\\circ = 0$." }],
          },
          {
            typ: "zahl",
            label: "Normalkraft",
            loesung: `${m}*${G}*cos(inRad(${w}))`,
            einheit: "N",
            fehler: nurWeit(m * G * cosG(w), [[m * G, { wert: `${m}*${G}`, meldung: "Auf einer geneigten Ebene ist die Normalkraft kleiner als die Gewichtskraft: $F_N = m g\\cos\\alpha$." }]]),
          },
        ],
        hinweis: "F_H = m g sin α, F_N = m g cos α.",
        loesung: `**Gewichtskraft:** $G = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2 = ${tz(m * G, 1)}\\,\\text{N}$.\n---\n**Hangabtrieb:** $F_H = G\\sin ${w}^\\circ = ${tz(m * G * sinG(w), 1)}\\,\\text{N}$.\n---\n**Normalkraft:** $F_N = G\\cos ${w}^\\circ = ${tz(m * G * cosG(w), 1)}\\,\\text{N}$. Beide sind kleiner als $G$.`,
      };
    },
  }),
  drill({
    id: "p5-d-wirkungsgrad",
    kapitel: K,
    titel: "Wirkungsgrad beim Heben",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(2, 100) * 10;
      const h = r.int(2, 30);
      const t = r.int(5, 60);
      const pNutz = (m * G * h) / t;
      const P = Math.ceil(((pNutz / r.int(55, 90)) * 100) / 10) * 10;
      return {
        angabe: `Ein Motor nimmt $${P}\\,\\text{W}$ auf und hebt dabei $${m}\\,\\text{kg}$ in $${t}\\,\\text{s}$ um $${h}\\,\\text{m}$. Wie groß ist der Wirkungsgrad in Prozent?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*${G}*${h}/(${P}*${t})*100`,
            einheit: "%",
            fehler: [
              { wert: `${P}*${t}/(${m}*${G}*${h})*100`, meldung: "Ein Wirkungsgrad über $100\\,\\%$ ist unmöglich. Es gilt Nutzarbeit **durch** zugeführte Arbeit." },
              { wert: `${m}*${h}/(${P}*${t})*100`, meldung: "Die Hubarbeit ist $m g h$. Du hast den Faktor $g$ vergessen." },
            ],
          },
        ],
        hinweis: "Nutzarbeit m·g·h durch zugeführte Arbeit P·t.",
        loesung: `**Nutzarbeit:** $W_{\\text{nutz}} = m g h = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${h}\\,\\text{m} = ${tz(m * G * h, 0)}\\,\\text{J}$.\n---\n**Zugeführte Arbeit:** $W_{\\text{zu}} = P\\,t = ${P}\\,\\text{W}\\cdot ${t}\\,\\text{s} = ${P * t}\\,\\text{J}$.\n---\n**Wirkungsgrad:** $\\eta = \\dfrac{W_{\\text{nutz}}}{W_{\\text{zu}}} = ${tz(((m * G * h) / (P * t)) * 100, 1)}\\,\\%$, kleiner als $100\\,\\%$.`,
      };
    },
  }),
  drill({
    id: "p5-d-schraube",
    kapitel: K,
    titel: "Wagenheber mit Wirkungsgrad",
    niveau: 3,
    erzeuge: (r) => {
      const h = r.int(2, 8);
      const rad = r.int(15, 40);
      const last = r.int(4, 15) * 1000;
      const eta = r.int(20, 50) / 100;
      const F = (last * (h / 1000)) / (2 * Math.PI * (rad / 100) * eta);
      return {
        angabe: `Ein Schraubenwagenheber hat $${h}\\,\\text{mm}$ Ganghöhe und eine Kurbel mit $${rad}\\,\\text{cm}$ Radius. Er hebt eine Last von $${last}\\,\\text{N}$. Der Wirkungsgrad ist $${tz(eta * 100)}\\,\\%$. Welche Kraft an der Kurbel ist nötig? Antwort in Newton.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${last}*${h / 1000}/(2*pi*${rad / 100}*${eta})`,
            einheit: "N",
            fehler: [
              { wert: `${last}*${h / 1000}/(2*pi*${rad / 100})*${eta}`, meldung: "Mit Reibung braucht man **mehr** Kraft. Teile die ideale Kraft durch $\\eta$." },
              { wert: `${last}*${h}/(2*pi*${rad}*${eta})`, meldung: "Millimeter und Zentimeter gemischt. Rechne beide Längen in Meter um, sonst ist das Verhältnis um den Faktor $10$ falsch." },
            ],
          },
        ],
        hinweis: "Pro Umdrehung: Kurbelweg 2πr, Hubweg h. Mit η: F = G·h/(2πr·η), alle Längen in Metern.",
        loesung: `**Ansatz:** Für eine Umdrehung ist der Wirkungsgrad $\\eta = \\dfrac{G\\cdot h}{F\\cdot 2\\pi r}$, also $F = \\dfrac{G\\cdot h}{\\eta\\cdot 2\\pi r}$.\n---\n**Ohne Reibung:** $F_0 = ${last}\\,\\text{N}\\cdot\\dfrac{${tz(h / 1000)}\\,\\text{m}}{2\\pi\\cdot ${tz(rad / 100)}\\,\\text{m}} = ${tz(F * eta, 2)}\\,\\text{N}$.\n---\n**Mit Reibung:** $F = \\dfrac{F_0}{${tz(eta)}} = ${tz(F, 1)}\\,\\text{N}$. Die Kraft ist viel kleiner als die Last, obwohl Reibung einen großen Teil der Arbeit verbraucht.`,
      };
    },
  }),
  drill({
    id: "p5-d-rotationsenergie",
    kapitel: K,
    titel: "Rotationsenergie einer Scheibe",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(2, 60);
      const rad = r.int(10, 60) / 100;
      const n = r.int(1, 30) * 100;
      const w = (2 * Math.PI * n) / 60;
      const I = 0.5 * m * rad * rad;
      return {
        angabe: `Eine Vollscheibe ($m = ${m}\\,\\text{kg}$, $r = ${tz(rad * 100)}\\,\\text{cm}$) dreht sich mit $${n}$ Umdrehungen pro Minute. Berechne ihre Rotationsenergie in Joule.`,
        teile: [
          {
            typ: "zahl",
            loesung: `0.5*(0.5*${m}*${rad}^2)*(2*pi*${n}/60)^2`,
            einheit: "J",
            fehler: [
              { wert: `0.5*(0.5*${m}*${rad}^2)*(2*pi*${n})^2`, meldung: "Die Drehzahl ist pro Minute angegeben. Teile durch $60$, bevor du $\\omega = 2\\pi n$ bildest." },
              { wert: `0.5*(${m}*${rad}^2)*(2*pi*${n}/60)^2`, meldung: "Für eine Vollscheibe ist $I = \\tfrac12 m r^2$, nicht $m r^2$." },
            ],
          },
        ],
        hinweis: "I = ½ m r², ω = 2π n mit n in Umdrehungen pro Sekunde, E = ½ I ω².",
        loesung: `**Trägheitsmoment:** $I = \\tfrac12 m r^2 = \\tfrac12\\cdot ${m}\\,\\text{kg}\\cdot(${tz(rad)}\\,\\text{m})^2 = ${tz(I, 4)}\\,\\text{kg}\\,\\text{m}^2$.\n---\n**Winkelgeschwindigkeit:** $n = ${n}/60\\,\\text{s}^{-1}$, also $\\omega = 2\\pi n = ${tz(w, 2)}\\,\\text{s}^{-1}$.\n---\n**Energie:** $E = \\tfrac12 I\\omega^2 = ${tz(0.5 * I * w * w, 1)}\\,\\text{J}$.`,
      };
    },
  }),
  drill({
    id: "p5-d-drehimpuls",
    kapitel: K,
    titel: "Drehimpulserhaltung",
    niveau: 2,
    erzeuge: (r) => {
      const I1 = r.int(20, 60) / 10;
      const I2 = r.int(6, Math.floor(I1 * 10) - 6) / 10;
      const n1 = r.int(5, 20) / 10;
      const n2 = (I1 * n1) / I2;
      return {
        angabe: `Eine Person auf einem reibungsfreien Drehstuhl hält Hanteln mit ausgestreckten Armen und dreht sich mit $${tz(n1)}$ Umdrehungen pro Sekunde. Ihr Trägheitsmoment ist $${tz(I1)}\\,\\text{kg}\\,\\text{m}^2$. Sie zieht die Hanteln an den Körper, ihr Trägheitsmoment sinkt auf $${tz(I2)}\\,\\text{kg}\\,\\text{m}^2$. Wie viele Umdrehungen pro Sekunde macht sie jetzt?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${I1}*${n1}/${I2}`,
            einheit: "1/s",
            fehler: nurWeit(n2, [
              [n1 * Math.sqrt(I1 / I2), { wert: `${n1}*sqrt(${I1}/${I2})`, meldung: "Du hast die Rotationsenergie gleichgesetzt. Sie bleibt nicht erhalten, weil die Muskeln Arbeit verrichten. Erhalten bleibt der **Drehimpuls** $I\\omega$." }],
              [(I2 * n1) / I1, { wert: `${I2}*${n1}/${I1}`, meldung: "Mit kleinerem Trägheitsmoment muss sie sich **schneller** drehen. Es gilt $n_2 = n_1\\cdot I_1/I_2$." }],
            ]),
          },
        ],
        hinweis: "Ohne äußeres Drehmoment bleibt der Drehimpuls erhalten: I₁·n₁ = I₂·n₂.",
        loesung: `**Ansatz:** Es wirkt kein äußeres Drehmoment, also bleibt der Drehimpuls erhalten: $I_1\\omega_1 = I_2\\omega_2$. Mit $\\omega = 2\\pi n$ gilt auch $I_1 n_1 = I_2 n_2$.\n---\n**Rechnung:** $n_2 = ${tz(n1)}\\,\\text{s}^{-1}\\cdot\\dfrac{${tz(I1)}\\,\\text{kg}\\,\\text{m}^2}{${tz(I2)}\\,\\text{kg}\\,\\text{m}^2} = ${tz(n2, 2)}\\,\\text{s}^{-1}$.\n---\n**Deutung:** Sie dreht sich schneller. Ihre Rotationsenergie wächst dabei auf das $${tz(I1 / I2, 2)}$-Fache, die Energie liefern ihre Muskeln.`,
      };
    },
  }),
  drill({
    id: "p5-d-rollen",
    kapitel: K,
    titel: "Rollen auf der schiefen Ebene",
    niveau: 3,
    erzeuge: (r) => {
      const [name, k, kTex] = r.wahl([
        ["eine Vollkugel", 0.4, "\\tfrac25"],
        ["ein Vollzylinder", 0.5, "\\tfrac12"],
        ["ein dünnwandiges Rohr", 1, "1"],
      ] as const);
      const l = r.int(10, 40) / 10;
      const w = r.int(5, 35);
      const h = l * sinG(w);
      const v = Math.sqrt((2 * G * h) / (1 + k));
      return {
        angabe: `${name.charAt(0).toUpperCase() + name.slice(1)} rollt aus der Ruhe, ohne zu rutschen, eine $${tz(l)}\\,\\text{m}$ lange Rampe mit $${w}^\\circ$ Neigung hinab. Das Trägheitsmoment des Körpers ist $I = ${kTex}\\,m r^2$. Wie schnell ist der Körper am Ende der Rampe, und wie lange braucht er?`,
        teile: [
          {
            typ: "zahl",
            label: "Endgeschwindigkeit",
            loesung: `sqrt(2*${G}*${l}*sin(inRad(${w}))/(1+${k}))`,
            einheit: "m/s",
            fehler: [
              { wert: `sqrt(2*${G}*${l}*sin(inRad(${w})))`, meldung: "Das gilt für einen gleitenden Körper. Ein rollender Körper steckt einen Teil der Energie in die Drehung und ist langsamer." },
              { wert: `sqrt(2*${G}*${l}/(1+${k}))`, meldung: "Du hast die Rampenlänge als Höhe eingesetzt. Die Höhe ist $h = l\\sin\\alpha$." },
            ],
          },
          {
            typ: "zahl",
            label: "Zeit",
            loesung: `2*${l}/sqrt(2*${G}*${l}*sin(inRad(${w}))/(1+${k}))`,
            einheit: "s",
            fehler: [{ wert: `${l}/sqrt(2*${G}*${l}*sin(inRad(${w}))/(1+${k}))`, meldung: "Aus der Ruhe ist die mittlere Geschwindigkeit nur halb so groß wie die Endgeschwindigkeit. Also $t = 2l/v$." }],
          },
        ],
        hinweis: "Energieerhaltung: m g h = ½ m v² (1 + k) mit I = k m r². Danach t = 2l/v.",
        loesung: `**Höhe:** $h = ${tz(l)}\\,\\text{m}\\cdot\\sin ${w}^\\circ = ${tz(h, 3)}\\,\\text{m}$.\n---\n**Energieerhaltung:** $m g h = \\tfrac12 m v^2 + \\tfrac12 I\\omega^2 = \\tfrac12 m v^2\\,(1 + ${kTex})$, weil $\\omega = v/r$. Masse und Radius kürzen sich: $v = \\sqrt{\\dfrac{2 g h}{1 + ${kTex}}} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Zeit:** Die Bewegung ist gleichmäßig beschleunigt aus der Ruhe, die mittlere Geschwindigkeit ist $v/2$. Also $t = \\dfrac{2l}{v} = \\dfrac{${tz(2 * l)}\\,\\text{m}}{${tz(v, 2)}\\,\\text{m/s}} = ${tz((2 * l) / v, 2)}\\,\\text{s}$.`,
      };
    },
  }),
];
