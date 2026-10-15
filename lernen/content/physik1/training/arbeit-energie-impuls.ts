import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "arbeit-energie-impuls";
const G = 9.81;
const sinG = (w: number) => Math.sin((w * Math.PI) / 180);
const cosG = (w: number) => Math.cos((w * Math.PI) / 180);

type FehlerKandidat = { wert: string; num: number; meldung: string };

/** Fehlerbilder nur behalten, wenn sie sich deutlich von der richtigen Antwort unterscheiden
 * (sonst würde der Validator ein Fehlerbild als richtige Antwort werten). */
function fehlerbilder(soll: number, kandidaten: FehlerKandidat[]) {
  return kandidaten
    .filter((k) => Number.isFinite(k.num) && Math.abs(k.num - soll) > 0.02 * Math.max(Math.abs(soll), 1e-9))
    .map(({ wert, meldung }) => ({ wert, meldung }));
}

export const DRILLS: Drill[] = [
  drill({
    id: "p4-d-hubarbeit",
    kapitel: K,
    titel: "Hubarbeit und Leistung",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(5, 120);
      const h = r.int(2, 30);
      const t = r.int(2, 60);
      const W = m * G * h;
      return {
        angabe: `Ein Körper mit $${m}\\,\\text{kg}$ wird in $${t}\\,\\text{s}$ gleichmäßig um $${h}\\,\\text{m}$ gehoben. Berechne die Hubarbeit in J und die Leistung in W.`,
        teile: [
          {
            typ: "zahl",
            label: "Arbeit",
            loesung: `${m}*9.81*${h}`,
            einheit: "J",
            fehler: fehlerbilder(W, [
              { wert: `${m}*${h}`, num: m * h, meldung: "Die Fallbeschleunigung fehlt. Für die Arbeit brauchst du die **Kraft** $m g$ in Newton, nicht die Masse." },
            ]),
          },
          {
            typ: "zahl",
            label: "Leistung",
            loesung: `${m}*9.81*${h}/${t}`,
            einheit: "W",
            fehler: fehlerbilder(W / t, [
              { wert: `${m}*9.81*${h}*${t}`, num: W * t, meldung: "Leistung ist Arbeit **pro** Zeit. Du musst durch die Zeit teilen." },
            ]),
          },
        ],
        hinweis: "Hubarbeit W = m·g·h, Leistung P = W/t.",
        loesung: `**Ansatz:** Beim gleichmäßigen Heben ist die Kraft gleich der Gewichtskraft und zeigt wie der Weg nach oben. Also $W = m g h$.\n---\n**Arbeit:** $W = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${h}\\,\\text{m} = ${tz(W, 1)}\\,\\text{J}$.\n---\n**Leistung:** $P = \\dfrac{W}{t} = \\dfrac{${tz(W, 1)}\\,\\text{J}}{${t}\\,\\text{s}} = ${tz(W / t, 1)}\\,\\text{W}$.`,
      };
    },
  }),
  drill({
    id: "p4-d-arbeit-winkel",
    kapitel: K,
    titel: "Arbeit einer schrägen Zugkraft",
    niveau: 1,
    erzeuge: (r) => {
      const F = r.int(4, 40) * 5;
      const s = r.int(2, 60);
      const w = r.wahl([20, 25, 30, 35, 40, 45, 50, 60] as const);
      const W = F * cosG(w) * s;
      return {
        angabe: `Ein Wagen wird mit einer Seilkraft von $${F}\\,\\text{N}$ über $${s}\\,\\text{m}$ waagrecht gezogen. Das Seil ist um $${w}^\\circ$ gegen die Waagrechte geneigt. Welche Arbeit verrichtet die Seilkraft (in J)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${F}*cos(inRad(${w}))*${s}`,
            einheit: "J",
            fehler: fehlerbilder(W, [
              { wert: `${F}*${s}`, num: F * s, meldung: "Du hast die ganze Kraft eingesetzt. Nur der Anteil in Wegrichtung, $F\\cos\\alpha$, verrichtet Arbeit." },
              { wert: `${F}*sin(inRad(${w}))*${s}`, num: F * sinG(w) * s, meldung: "Du hast den Sinus genommen, also den senkrechten Anteil. Der Anteil in Wegrichtung liegt am Winkel an: Kosinus." },
            ]),
          },
        ],
        hinweis: "W = F·s·cos α: Nur der Kraftanteil in Wegrichtung zählt.",
        loesung: `**Ansatz:** Kraft und Weg schließen den Winkel $\\alpha = ${w}^\\circ$ ein. Es gilt $W = F s\\cos\\alpha$.\n---\n**Anteil in Wegrichtung:** $F\\cos\\alpha = ${F}\\,\\text{N}\\cdot\\cos ${w}^\\circ = ${tz(F * cosG(w), 2)}\\,\\text{N}$.\n---\n**Arbeit:** $W = ${tz(F * cosG(w), 2)}\\,\\text{N}\\cdot ${s}\\,\\text{m} = ${tz(W, 1)}\\,\\text{J}$. Probe: weniger als $F\\cdot s = ${F * s}\\,\\text{J}$, wie es bei schrägem Zug sein muss.`,
      };
    },
  }),
  drill({
    id: "p4-d-ekin",
    kapitel: K,
    titel: "Kinetische Energie",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(4, 40) * 50; // 200 kg (Motorrad mit Fahrer) bis 2000 kg (großes Auto)
      const vk = r.int(2, 26) * 5;
      const v = vk / 3.6;
      const E = (0.5 * m * v * v) / 1000;
      return {
        angabe: `Ein Fahrzeug mit $${m}\\,\\text{kg}$ fährt mit $${vk}\\,\\text{km/h}$. Wie groß ist seine kinetische Energie (in kJ)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `0.5*${m}*(${vk}/3.6)^2/1000`,
            einheit: "kJ",
            fehler: fehlerbilder(E, [
              { wert: `0.5*${m}*${vk}^2/1000`, num: (0.5 * m * vk * vk) / 1000, meldung: "Du hast km/h nicht in m/s umgerechnet. Teile die Geschwindigkeit zuerst durch $3{,}6$." },
              { wert: `${m}*(${vk}/3.6)^2/1000`, num: 2 * E, meldung: "Der Faktor $\\tfrac12$ fehlt. Die kinetische Energie ist $\\tfrac12 m v^2$." },
            ]),
          },
        ],
        hinweis: "Erst km/h in m/s umrechnen (durch 3,6), dann ½·m·v².",
        loesung: `**Umrechnen:** $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 3)}\\,\\text{m/s}$.\n---\n**Einsetzen:** $E_{\\text{kin}} = \\tfrac12\\cdot ${m}\\,\\text{kg}\\cdot(${tz(v, 3)}\\,\\text{m/s})^2 = ${tz(E * 1000, 0)}\\,\\text{J} = ${tz(E, 2)}\\,\\text{kJ}$.`,
      };
    },
  }),
  drill({
    id: "p4-d-fallhoehe",
    kapitel: K,
    titel: "Energieerhaltung: Geschwindigkeit nach einem Höhenunterschied",
    niveau: 1,
    erzeuge: (r) => {
      const h = r.int(1, 60);
      const v0 = r.wahl([0, 0, 2, 5] as const);
      const v = Math.sqrt(v0 * v0 + 2 * G * h);
      const kandidaten: FehlerKandidat[] = [
        { wert: `sqrt(9.81*${h} + ${v0}^2)`, num: Math.sqrt(G * h + v0 * v0), meldung: "Der Faktor $2$ fehlt. Er kommt aus dem $\\tfrac12$ in $\\tfrac12 m v^2$." },
      ];
      if (v0 > 0)
        kandidaten.push({ wert: `${v0} + sqrt(2*9.81*${h})`, num: v0 + Math.sqrt(2 * G * h), meldung: "Du hast Geschwindigkeiten addiert. Erhalten bleibt die **Energie**, also addieren sich die Quadrate: $v^2 = v_0^2 + 2 g h$." });
      return {
        angabe: `Ein Körper ${v0 ? `hat oben die Geschwindigkeit $${v0}\\,\\text{m/s}$ und ` : "startet aus der Ruhe und "}bewegt sich reibungsfrei um $${h}\\,\\text{m}$ nach unten. Wie schnell ist er dort (in m/s)?`,
        teile: [{ typ: "zahl", loesung: `sqrt(${v0}^2 + 2*9.81*${h})`, einheit: "m/s", fehler: fehlerbilder(v, kandidaten) }],
        hinweis: "Bewegungsenergie oben plus Lageenergie oben gleich Bewegungsenergie unten. Die Masse kürzt sich.",
        loesung: `**Bilanz in Worten:** kinetische Energie oben plus Lageenergie oben gleich kinetische Energie unten: $\\tfrac12 m v_0^2 + m g h = \\tfrac12 m v^2$.\n---\n**Umformen:** Wir teilen durch $m$ und multiplizieren mit $2$: $v = \\sqrt{v_0^2 + 2 g h}$.\n---\n**Einsetzen:** $v = \\sqrt{(${v0}\\,\\text{m/s})^2 + 2\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${h}\\,\\text{m}} = ${tz(v, 2)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p4-d-feder",
    kapitel: K,
    titel: "Spannenergie wird Bewegungsenergie",
    niveau: 2,
    erzeuge: (r) => {
      const D = r.int(1, 20) * 100;
      const scm = r.int(2, 10);
      const s = scm / 100;
      const mg = r.int(1, 20) * 10;
      const m = mg / 1000;
      const E = 0.5 * D * s * s;
      const v = s * Math.sqrt(D / m);
      return {
        angabe: `Eine Feder ($D = ${D}\\,\\text{N/m}$) wird um $${scm}\\,\\text{cm}$ gestaucht und schießt eine Kugel mit $${mg}\\,\\text{g}$ waagrecht ab. Wie schnell ist die Kugel (in m/s)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${s}*sqrt(${D}/${m})`,
            einheit: "m/s",
            fehler: fehlerbilder(v, [
              { wert: `${s}*sqrt(${D}/${mg})`, num: s * Math.sqrt(D / mg), meldung: "Du hast die Masse in Gramm eingesetzt. Mit $D$ in N/m muss $m$ in kg stehen." },
              { wert: `${scm}*sqrt(${D}/${m})`, num: scm * Math.sqrt(D / m), meldung: "Du hast die Stauchung in Zentimetern eingesetzt. Rechne sie in Meter um." },
            ]),
          },
        ],
        hinweis: "½·D·s² = ½·m·v², alle Größen in SI-Einheiten.",
        loesung: `**Bilanz in Worten:** Spannenergie der Feder gleich kinetische Energie der Kugel: $\\tfrac12 D s^2 = \\tfrac12 m v^2$.\n---\n**Spannenergie:** $\\tfrac12\\cdot ${D}\\,\\text{N/m}\\cdot(${tz(s)}\\,\\text{m})^2 = ${tz(E, 4)}\\,\\text{J}$.\n---\n**Geschwindigkeit:** $v = \\sqrt{\\dfrac{2E}{m}} = \\sqrt{\\dfrac{2\\cdot ${tz(E, 4)}\\,\\text{J}}{${tz(m)}\\,\\text{kg}}} = ${tz(v, 2)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p4-d-wirkungsgrad",
    kapitel: K,
    titel: "Wirkungsgrad eines Hebemotors",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 20) * 50;
      const h = r.int(2, 20);
      const t = r.int(5, 40);
      const Pn = (m * G * h) / t;
      const Pzu = Math.ceil(Pn / 100 + r.int(1, 10)) * 100;
      const eta = (Pn / Pzu) * 100;
      return {
        angabe: `Ein Motor nimmt $${Pzu}\\,\\text{W}$ auf und hebt $${m}\\,\\text{kg}$ in $${t}\\,\\text{s}$ gleichmäßig um $${h}\\,\\text{m}$. Wie groß ist der Wirkungsgrad (in %)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*9.81*${h}/${t}/${Pzu}*100`,
            einheit: "%",
            fehler: fehlerbilder(eta, [
              { wert: `${Pzu}/(${m}*9.81*${h}/${t})*100`, num: (Pzu / Pn) * 100, meldung: "Du hast den Bruch umgedreht. Der Nutzen steht im Zähler, der Aufwand im Nenner. Ein Wirkungsgrad über $100\\,\\%$ ist unmöglich." },
              { wert: `${m}*${h}/${t}/${Pzu}*100`, num: ((m * h) / t / Pzu) * 100, meldung: "Die Fallbeschleunigung fehlt in der Hubarbeit $m g h$." },
            ]),
          },
        ],
        hinweis: "Nutzleistung = Hubarbeit / Zeit, Wirkungsgrad = Nutzleistung / aufgenommene Leistung.",
        loesung: `**Ansatz:** Nutzen ist die Hubleistung, Aufwand die aufgenommene Leistung. $\\eta = P_{\\text{nutz}}/P_{\\text{zu}}$.\n---\n**Nutzleistung:** $P_{\\text{nutz}} = \\dfrac{m g h}{t} = \\dfrac{${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${h}\\,\\text{m}}{${t}\\,\\text{s}} = ${tz(Pn, 1)}\\,\\text{W}$.\n---\n**Wirkungsgrad:** $\\eta = \\dfrac{${tz(Pn, 1)}\\,\\text{W}}{${Pzu}\\,\\text{W}} = ${tz(eta, 1)}\\,\\%$. Er muss unter $100\\,\\%$ liegen. ✓`,
      };
    },
  }),
  drill({
    id: "p4-d-kwh",
    kapitel: K,
    titel: "Energie und Kosten in Kilowattstunden",
    niveau: 1,
    erzeuge: (r) => {
      const P = r.int(2, 30) * 100;
      const tmin = r.wahl([15, 20, 30, 45, 90, 120] as const);
      const preis = r.wahl([0.25, 0.28, 0.3, 0.32] as const);
      const E = (P / 1000) * (tmin / 60);
      return {
        angabe: `Ein Gerät mit $${P}\\,\\text{W}$ läuft $${tmin}\\,\\text{min}$. Wie viel elektrische Energie nimmt es auf (in kWh), und was kostet das bei $${tz(preis)}$ Euro pro kWh (in Euro)?`,
        teile: [
          {
            typ: "zahl",
            label: "Energie",
            loesung: `${P}/1000*${tmin}/60`,
            einheit: "kWh",
            fehler: fehlerbilder(E, [
              { wert: `${P}/1000*${tmin}`, num: (P / 1000) * tmin, meldung: "Du hast Kilowatt mal **Minuten** gerechnet. Für kWh muss die Zeit in Stunden stehen." },
              { wert: `${P}*${tmin}/60`, num: (P * tmin) / 60, meldung: "Das sind Wattstunden. Für Kilowattstunden setzt du die Leistung in kW ein." },
            ]),
          },
          { typ: "zahl", label: "Kosten", loesung: `${P}/1000*${tmin}/60*${preis}`, einheit: "Euro", toleranz: 0.005 },
        ],
        hinweis: "Leistung in kW, Zeit in h, dann E = P·t.",
        loesung: `**Umrechnen:** $P = ${tz(P / 1000)}\\,\\text{kW}$ und $t = ${tmin}\\,\\text{min} = ${tz(tmin / 60, 3)}\\,\\text{h}$.\n---\n**Energie:** $E = P\\cdot t = ${tz(P / 1000)}\\,\\text{kW}\\cdot ${tz(tmin / 60, 3)}\\,\\text{h} = ${tz(E, 3)}\\,\\text{kWh}$.\n---\n**Kosten:** $${tz(E, 3)}\\cdot ${tz(preis)}$ Euro $= ${tz(E * preis, 3)}$ Euro.`,
      };
    },
  }),
  drill({
    id: "p4-d-bremsweg",
    kapitel: K,
    titel: "Bremsweg mit dem Arbeit-Energie-Satz",
    niveau: 2,
    erzeuge: (r) => {
      const vk = r.int(4, 26) * 5;
      const mu = r.wahl([0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.8] as const);
      const v = vk / 3.6;
      const s = (v * v) / (2 * mu * G);
      return {
        angabe: `Ein Fahrzeug bremst auf ebener Straße aus $${vk}\\,\\text{km/h}$ bis zum Stillstand. Die Bremsung entspricht einer Reibungszahl $\\mu = ${tz(mu)}$. Wie lang ist der Bremsweg (in m)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${vk}/3.6)^2/(2*${mu}*9.81)`,
            einheit: "m",
            fehler: fehlerbilder(s, [
              { wert: `(${vk}/3.6)^2/(${mu}*9.81)`, num: 2 * s, meldung: "Der Faktor $2$ im Nenner fehlt. Er kommt aus dem $\\tfrac12$ in $\\tfrac12 m v^2$." },
              { wert: `${vk}^2/(2*${mu}*9.81)`, num: (vk * vk) / (2 * mu * G), meldung: "Du hast km/h nicht in m/s umgerechnet. Das Ergebnis wird dadurch fast 13-mal zu groß." },
            ]),
          },
        ],
        hinweis: "Die Reibungsarbeit μ·m·g·s baut die ganze kinetische Energie ½·m·v² ab. Die Masse kürzt sich.",
        loesung: `**Ansatz:** Arbeit-Energie-Satz. Die Reibung $\\mu m g$ verrichtet die Arbeit $-\\mu m g s$ und baut $\\tfrac12 m v^2$ ab: $\\mu m g s = \\tfrac12 m v^2$.\n---\n**Umformen:** Die Masse kürzt sich, $s = \\dfrac{v^2}{2\\mu g}$, mit $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Einsetzen:** $s = \\dfrac{(${tz(v, 2)}\\,\\text{m/s})^2}{2\\cdot ${tz(mu)}\\cdot 9{,}81\\,\\text{m/s}^2} = ${tz(s, 1)}\\,\\text{m}$. Doppelte Geschwindigkeit ergäbe den vierfachen Bremsweg.`,
      };
    },
  }),
  drill({
    id: "p4-d-rutsche",
    kapitel: K,
    titel: "Reibungswärme aus einer Energiebilanz",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(15, 60);
      const h = r.int(2, 8);
      const vmax = Math.sqrt(2 * G * h);
      const v = Math.round(vmax * r.int(50, 85)) / 100;
      const Q = m * G * h - 0.5 * m * v * v;
      return {
        angabe: `Ein Kind ($${m}\\,\\text{kg}$) rutscht aus der Ruhe eine $${h}\\,\\text{m}$ hohe Rutsche hinab und kommt unten mit $${tz(v)}\\,\\text{m/s}$ an. Wie viel Energie wurde in Wärme umgewandelt (in J)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*9.81*${h} - 0.5*${m}*${v}^2`,
            einheit: "J",
            fehler: fehlerbilder(Q, [
              { wert: `${m}*9.81*${h} + 0.5*${m}*${v}^2`, num: m * G * h + 0.5 * m * v * v, meldung: "Die kinetische Energie unten ist der Teil, der **nicht** zu Wärme wurde. Ziehe sie von der Lageenergie ab." },
              { wert: `0.5*${m}*${v}^2`, num: 0.5 * m * v * v, meldung: "Das ist die kinetische Energie unten. Die Wärme ist der Rest, der von der Lageenergie oben fehlt." },
            ]),
          },
        ],
        hinweis: "Lageenergie oben = kinetische Energie unten + Wärme.",
        loesung: `**Bilanz in Worten:** Lageenergie oben gleich kinetische Energie unten plus Reibungswärme.\n---\n**Oben:** $m g h = ${m}\\,\\text{kg}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${h}\\,\\text{m} = ${tz(m * G * h, 1)}\\,\\text{J}$. **Unten:** $\\tfrac12 m v^2 = ${tz(0.5 * m * v * v, 1)}\\,\\text{J}$.\n---\n**Wärme:** $Q = ${tz(m * G * h, 1)}\\,\\text{J} - ${tz(0.5 * m * v * v, 1)}\\,\\text{J} = ${tz(Q, 1)}\\,\\text{J}$. Ohne Reibung wäre das Kind mit $${tz(vmax, 2)}\\,\\text{m/s}$ angekommen.`,
      };
    },
  }),
  drill({
    id: "p4-d-kraftstoss",
    kapitel: K,
    titel: "Kraftstoß",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(1, 30) / 10;
      const v = r.int(5, 40);
      const ms = r.int(2, 50);
      const F = (m * v) / (ms / 1000);
      return {
        angabe: `Ein ruhender Ball ($${tz(m)}\\,\\text{kg}$) erhält in $${ms}\\,\\text{ms}$ die Geschwindigkeit $${v}\\,\\text{m/s}$. Wie groß ist die mittlere Kraft auf den Ball (in N)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*${v}/${ms / 1000}`,
            einheit: "N",
            fehler: fehlerbilder(F, [
              { wert: `${m}*${v}/${ms}`, num: (m * v) / ms, meldung: "Du hast die Zeit in Millisekunden eingesetzt. Rechne sie in Sekunden um." },
              { wert: `${m}*${v}*${ms / 1000}`, num: m * v * (ms / 1000), meldung: "Die Kraft ist Impulsänderung **durch** Zeit, nicht mal Zeit." },
            ]),
          },
        ],
        hinweis: "Kraftstoß: F·Δt = Δp, also F = m·Δv/Δt mit Δt in Sekunden.",
        loesung: `**Impulsänderung:** $\\Delta p = m\\,\\Delta v = ${tz(m)}\\,\\text{kg}\\cdot ${v}\\,\\text{m/s} = ${tz(m * v, 2)}\\,\\text{kg}\\cdot\\text{m/s}$.\n---\n**Kraft:** $\\bar F = \\dfrac{\\Delta p}{\\Delta t} = \\dfrac{${tz(m * v, 2)}\\,\\text{kg}\\cdot\\text{m/s}}{${tz(ms / 1000, 3)}\\,\\text{s}} = ${tz(F, 1)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p4-d-unelastisch",
    kapitel: K,
    titel: "Vollkommen unelastischer Stoß",
    niveau: 2,
    erzeuge: (r) => {
      const m1 = r.int(1, 20) * 100;
      const m2 = r.int(1, 20) * 100;
      const v1 = r.int(2, 30);
      // B darf nur dann in Fahrtrichtung von A fahren, wenn er langsamer ist, sonst holt A ihn nie ein.
      const v2 = r.wahl([0, 0, -r.int(1, 10), r.int(1, Math.min(10, v1 - 1))] as const);
      const v = (m1 * v1 + m2 * v2) / (m1 + m2);
      const kandidaten: FehlerKandidat[] = [];
      if (v2 < 0)
        kandidaten.push({ wert: `(${m1}*${v1} + ${m2}*${-v2})/(${m1}+${m2})`, num: (m1 * v1 - m2 * v2) / (m1 + m2), meldung: "Körper B fährt in die Gegenrichtung. Seine Geschwindigkeit und sein Impuls zählen negativ." });
      kandidaten.push({
        wert: `sqrt((${m1}*${v1}^2 + ${m2}*${v2}^2)/(${m1}+${m2}))`,
        num: Math.sqrt((m1 * v1 * v1 + m2 * v2 * v2) / (m1 + m2)),
        meldung: "Du hast mit Energieerhaltung gerechnet. Beim Zusammenhaften geht Energie verloren, nur der Impuls bleibt erhalten.",
      });
      return {
        angabe: `Körper A ($${m1}\\,\\text{kg}$, $${v1}\\,\\text{m/s}$) stößt auf Körper B ($${m2}\\,\\text{kg}$, $${v2}\\,\\text{m/s}$, gleiche Achse, Vorzeichen gibt die Richtung an). Beide bleiben aneinander haften. Wie groß ist die gemeinsame Geschwindigkeit (in m/s, mit Vorzeichen)?`,
        teile: [{ typ: "zahl", loesung: `(${m1}*${v1} + ${m2}*(${v2}))/(${m1}+${m2})`, einheit: "m/s", fehler: fehlerbilder(v, kandidaten) }],
        hinweis: "Nur der Impuls bleibt erhalten: m_A·v_A + m_B·v_B = (m_A + m_B)·v'.",
        loesung: `**Ansatz:** Vollkommen unelastischer Stoß. Es gilt nur die Impulserhaltung mit gemeinsamer Geschwindigkeit: $m_A v_A + m_B v_B = (m_A + m_B)\\,v'$.\n---\n**Einsetzen:** $v' = \\dfrac{${m1}\\cdot ${v1} + ${m2}\\cdot(${v2})}{${m1 + m2}}\\,\\text{m/s} = ${tz(v, 3)}\\,\\text{m/s}$.\n---\n**Deutung:** ${Math.abs(v) < 1e-9 ? "Der Gesamtimpuls war null, also bleibt das Paar stehen." : v > 0 ? "Das Paar bewegt sich in die ursprüngliche Richtung von A." : "Das Minus heißt: Das Paar bewegt sich in die Richtung, in die B gefahren ist."}`,
      };
    },
  }),
  drill({
    id: "p4-d-elastisch",
    kapitel: K,
    titel: "Elastischer Stoß auf einen ruhenden Körper",
    niveau: 3,
    erzeuge: (r) => {
      const m1 = r.int(1, 10);
      let m2 = r.int(1, 10);
      if (m2 === m1) m2 = m1 + 1;
      const v = r.int(1, 12);
      const v1 = ((m1 - m2) / (m1 + m2)) * v;
      const v2 = ((2 * m1) / (m1 + m2)) * v;
      return {
        angabe: `Ein Wagen ($${m1}\\,\\text{kg}$, $${v}\\,\\text{m/s}$) stößt elastisch und zentral auf einen ruhenden Wagen ($${m2}\\,\\text{kg}$). Berechne beide Geschwindigkeiten nach dem Stoß (in m/s, ursprüngliche Richtung positiv).`,
        teile: [
          {
            typ: "zahl",
            label: "stoßender Wagen",
            loesung: `(${m1}-${m2})/(${m1}+${m2})*${v}`,
            einheit: "m/s",
            fehler: fehlerbilder(v1, [
              { wert: "0", num: 0, meldung: "Liegen bleibt der stoßende Wagen nur bei gleichen Massen." },
              { wert: `(${m2}-${m1})/(${m1}+${m2})*${v}`, num: -v1, meldung: "Das Vorzeichen ist falsch. Im Zähler steht $m_1 - m_2$: Ist der stoßende Wagen leichter, prallt er zurück." },
            ]),
          },
          {
            typ: "zahl",
            label: "gestoßener Wagen",
            loesung: `2*${m1}/(${m1}+${m2})*${v}`,
            einheit: "m/s",
            fehler: fehlerbilder(v2, [
              { wert: `${m1}/(${m1}+${m2})*${v}`, num: (m1 / (m1 + m2)) * v, meldung: "Das ist die gemeinsame Geschwindigkeit beim unelastischen Stoß. Beim elastischen Stoß steht $2 m_1$ im Zähler." },
            ]),
          },
        ],
        hinweis: "v₁' = (m₁ − m₂)/(m₁ + m₂)·v, v₂' = 2m₁/(m₁ + m₂)·v.",
        loesung: `**Ansatz:** Elastischer Stoß, Ziel ruht. Aus Impuls- und Energieerhaltung folgen $v_1' = \\dfrac{m_1 - m_2}{m_1 + m_2}v$ und $v_2' = \\dfrac{2m_1}{m_1 + m_2}v$.\n---\n**Stoßender Wagen:** $v_1' = \\dfrac{${m1} - ${m2}}{${m1 + m2}}\\cdot ${v}\\,\\text{m/s} = ${tz(v1, 3)}\\,\\text{m/s}$.\n---\n**Gestoßener Wagen:** $v_2' = \\dfrac{2\\cdot ${m1}}{${m1 + m2}}\\cdot ${v}\\,\\text{m/s} = ${tz(v2, 3)}\\,\\text{m/s}$.\n---\n**Probe:** Impuls vorher $${m1 * v}$, nachher $${tz(m1 * v1 + m2 * v2, 3)}\\,\\text{kg}\\cdot\\text{m/s}$. Energie vorher $${tz(0.5 * m1 * v * v, 3)}$, nachher $${tz(0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2, 3)}\\,\\text{J}$. ✓`,
      };
    },
  }),
  drill({
    id: "p4-d-ballistisch",
    kapitel: K,
    titel: "Ballistisches Pendel",
    niveau: 3,
    erzeuge: (r) => {
      const mg = r.wahl([5, 8, 10, 12, 15, 20] as const);
      const m = mg / 1000;
      const M = r.int(8, 40) / 10;
      const hcm = r.int(3, 15);
      const h = hcm / 100;
      const vs = Math.sqrt(2 * G * h);
      const v = ((m + M) / m) * vs;
      return {
        angabe: `Ein Geschoss ($${mg}\\,\\text{g}$) fliegt waagrecht in einen ruhenden, hängenden Holzklotz ($${tz(M)}\\,\\text{kg}$) und bleibt stecken. Der Klotz schwingt danach $${hcm}\\,\\text{cm}$ hoch. Wie schnell war das Geschoss (in m/s)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${m}+${M})/${m}*sqrt(2*9.81*${h})`,
            einheit: "m/s",
            fehler: fehlerbilder(v, [
              { wert: `sqrt(2*9.81*${h}*(${m}+${M})/${m})`, num: Math.sqrt((2 * G * h * (m + M)) / m), meldung: "Du hast Energieerhaltung über den Einschlag angewandt. Beim Einschlag geht fast alle Energie verloren, dort gilt nur der Impuls." },
              { wert: `${M}/${m}*sqrt(2*9.81*${h})`, num: (M / m) * vs, meldung: "Nach dem Einschlag bewegt sich der Klotz **mit** dem Geschoss. Die Masse ist $m + M$." },
            ]),
          },
        ],
        hinweis: "Zwei Phasen: erst Hochschwingen (Energie), v' = √(2gh); dann Einschlag (Impuls), m·v = (m + M)·v'.",
        loesung: `**Phasen:** Einschlag (vollkommen unelastisch, nur Impuls) und Hochschwingen (nur Energie). Wir rechnen rückwärts.\n---\n**Hochschwingen:** $v' = \\sqrt{2 g h} = \\sqrt{2\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${tz(h)}\\,\\text{m}} = ${tz(vs, 3)}\\,\\text{m/s}$.\n---\n**Einschlag:** $m v = (m + M) v'$, also $v = \\dfrac{${tz(m + M, 3)}\\,\\text{kg}}{${tz(m, 3)}\\,\\text{kg}}\\cdot ${tz(vs, 3)}\\,\\text{m/s} = ${tz(v, 1)}\\,\\text{m/s}$.`,
      };
    },
  }),
];
