import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "kreisbewegung-gravitation";
const G = 6.674e-11;
const ME = 5.97e24;
const RE = 6.37e6;
const GME = G * ME;
const g = 9.81;

type FehlerKandidat = { wert: string; num: number; meldung: string };

/** Fehlerbilder nur behalten, wenn sie sich deutlich von der richtigen Antwort unterscheiden
 * (sonst würde ein Fehlerbild eine richtige Eingabe als falsch melden). */
function fehlerbilder(soll: number, kandidaten: FehlerKandidat[]) {
  return kandidaten
    .filter((k) => Number.isFinite(k.num) && Math.abs(k.num - soll) > 0.02 * Math.max(Math.abs(soll), 1e-12))
    .map(({ wert, meldung }) => ({ wert, meldung }));
}

/** Zahl in Zehnerpotenzschreibweise für LaTeX, z. B. 3,98\cdot 10^{14} */
function zp(v: number, stellen = 3): string {
  const e = Math.floor(Math.log10(Math.abs(v)));
  const m = v / 10 ** e;
  return `${tz(Number(m.toPrecision(stellen)), stellen)}\\cdot 10^{${e}}`;
}

export const DRILLS: Drill[] = [
  drill({
    id: "p6-d-drehzahl",
    kapitel: K,
    titel: "Drehzahl, Periode, Winkelgeschwindigkeit",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(1, 60) * 50;
      const f = n / 60;
      return {
        angabe: `Ein Rad dreht sich mit $${n}$ Umdrehungen pro Minute. Berechne die Periodendauer (in s) und die Winkelgeschwindigkeit (in $\\text{s}^{-1}$).`,
        teile: [
          {
            typ: "zahl",
            label: "Periodendauer",
            loesung: `60/${n}`,
            einheit: "s",
            fehler: fehlerbilder(60 / n, [
              { wert: `1/${n}`, num: 1 / n, meldung: "Die Drehzahl ist pro **Minute** angegeben. Teile sie zuerst durch $60$, dann bilde den Kehrwert." },
            ]),
          },
          {
            typ: "zahl",
            label: "Winkelgeschwindigkeit",
            loesung: `2*pi*${n}/60`,
            einheit: "1/s",
            fehler: fehlerbilder(2 * Math.PI * f, [
              { wert: `2*pi*${n}`, num: 2 * Math.PI * n, meldung: "Hier fehlt die Umrechnung von Minuten in Sekunden. Dein Wert ist $60$-mal zu groß." },
              { wert: `${n}/60`, num: f, meldung: "Das ist die Frequenz $f$. Die Winkelgeschwindigkeit ist $\\omega = 2\\pi f$." },
            ]),
          },
        ],
        hinweis: "Drehzahl durch 60 ergibt f in 1/s. Dann T = 1/f und ω = 2π·f.",
        loesung: `**Frequenz:** Eine Minute hat $60\\,\\text{s}$, also $f = \\dfrac{${n}}{60\\,\\text{s}} = ${tz(f, 3)}\\,\\text{s}^{-1}$.\n---\n**Periodendauer:** $T = \\dfrac1f = ${tz(60 / n, 4)}\\,\\text{s}$.\n---\n**Winkelgeschwindigkeit:** $\\omega = 2\\pi f = ${tz(2 * Math.PI * f, 2)}\\,\\text{s}^{-1}$. Kontrolle: $\\omega T = 2\\pi$, also genau eine Runde.`,
      };
    },
  }),
  drill({
    id: "p6-d-bahngeschwindigkeit",
    kapitel: K,
    titel: "Bahngeschwindigkeit aus Radius und Umlaufzeit",
    niveau: 1,
    erzeuge: (r) => {
      // Radius 1–10 m, Umlauf ab 4 s: höchstens rund 16 m/s, realistisch für ein Karussell
      const rad = r.int(2, 20) / 2;
      const T = r.int(4, 30);
      const v = (2 * Math.PI * rad) / T;
      return {
        angabe: `Ein Sitz eines Karussells läuft im Abstand $${tz(rad)}\\,\\text{m}$ von der Achse und braucht $${T}\\,\\text{s}$ für eine Runde. Wie schnell bewegt er sich (in m/s)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `2*pi*${rad}/${T}`,
            einheit: "m/s",
            fehler: fehlerbilder(v, [
              { wert: `pi*${rad}/${T}`, num: (Math.PI * rad) / T, meldung: "Für eine Runde ist der Weg der ganze Umfang $2\\pi r$, nicht $\\pi r$." },
              { wert: `${rad}/${T}`, num: rad / T, meldung: "Der Weg einer Runde ist der Umfang $2\\pi r$, nicht der Radius." },
            ]),
          },
        ],
        hinweis: "In einer Periode wird der Umfang 2πr zurückgelegt: v = 2πr/T.",
        loesung: `**Ansatz:** In einer Periode $T$ läuft der Sitz einmal den Umfang $2\\pi r$ entlang, also $v = \\dfrac{2\\pi r}{T}$.\n---\n**Einsetzen:** $v = \\dfrac{2\\pi\\cdot ${tz(rad)}\\,\\text{m}}{${T}\\,\\text{s}} = ${tz(v, 3)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-zentripetalbeschleunigung",
    kapitel: K,
    titel: "Zentripetalbeschleunigung",
    niveau: 1,
    erzeuge: (r) => {
      const vk = r.int(4, 24) * 5;
      const v = vk / 3.6;
      // Radius so wählen, dass die Beschleunigung höchstens 8 m/s² beträgt (mehr schafft kein Reifen)
      const rad = r.int(Math.max(2, Math.ceil((v * v) / 80)), 50) * 10;
      const a = (v * v) / rad;
      return {
        angabe: `Ein Fahrzeug fährt mit $${vk}\\,\\text{km/h}$ durch eine Kurve mit Radius $${rad}\\,\\text{m}$. Wie groß ist seine Zentripetalbeschleunigung (in $\\text{m/s}^2$)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${vk}/3.6)^2/${rad}`,
            einheit: "m/s²",
            fehler: fehlerbilder(a, [
              { wert: `${vk}^2/${rad}`, num: (vk * vk) / rad, meldung: "Die Geschwindigkeit muss in m/s stehen. Teile zuerst durch $3{,}6$." },
              { wert: `(${vk}/3.6)/${rad}`, num: v / rad, meldung: "In der Formel steht $v^2/r$, die Geschwindigkeit im Quadrat." },
            ]),
          },
        ],
        hinweis: "Erst km/h in m/s (durch 3,6), dann a = v²/r.",
        loesung: `**Umrechnen:** $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Einsetzen:** $a_z = \\dfrac{v^2}{r} = \\dfrac{(${tz(v, 2)}\\,\\text{m/s})^2}{${rad}\\,\\text{m}} = ${tz(a, 3)}\\,\\text{m/s}^2$, das sind $${tz(a / g, 2)}\\,g$.`,
      };
    },
  }),
  drill({
    id: "p6-d-zentripetalkraft",
    kapitel: K,
    titel: "Zentripetalkraft",
    niveau: 1,
    erzeuge: (r) => {
      const m = r.int(1, 20) * 100;
      const vk = r.int(3, 20) * 5;
      const v = vk / 3.6;
      // Radius so wählen, dass die nötige Haftreibung realistisch bleibt (a höchstens 8 m/s²)
      const rad = r.int(Math.max(2, Math.ceil((v * v) / 80)), 30) * 10;
      const F = (m * v * v) / rad;
      return {
        angabe: `Ein Fahrzeug ($${m}\\,\\text{kg}$) fährt mit $${vk}\\,\\text{km/h}$ durch eine flache Kurve mit Radius $${rad}\\,\\text{m}$. Wie groß ist die nötige Zentripetalkraft (in N)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${m}*(${vk}/3.6)^2/${rad}`,
            einheit: "N",
            fehler: fehlerbilder(F, [
              { wert: `${m}*${vk}^2/${rad}`, num: (m * vk * vk) / rad, meldung: "Die Geschwindigkeit muss in m/s stehen. Teile zuerst durch $3{,}6$." },
              { wert: `${m}*(${vk}/3.6)/${rad}`, num: (m * v) / rad, meldung: "Die Geschwindigkeit steht im Quadrat: $F = m v^2/r$." },
            ]),
          },
        ],
        hinweis: "F = m·v²/r mit v in m/s. Geliefert wird sie von der Haftreibung.",
        loesung: `**Umrechnen:** $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Kraft:** $F_z = \\dfrac{m v^2}{r} = \\dfrac{${m}\\,\\text{kg}\\cdot(${tz(v, 2)}\\,\\text{m/s})^2}{${rad}\\,\\text{m}} = ${tz(F, 0)}\\,\\text{N}$.\n---\n**Rolle:** In der flachen Kurve liefert die Haftreibung zwischen Reifen und Straße diese Kraft.`,
      };
    },
  }),
  drill({
    id: "p6-d-kurve-vmax",
    kapitel: K,
    titel: "Höchstgeschwindigkeit in der Kurve",
    niveau: 2,
    erzeuge: (r) => {
      const mu = r.int(1, 9) / 10;
      const rad = r.int(2, 40) * 10;
      const v = Math.sqrt(mu * g * rad);
      return {
        angabe: `Wie schnell (in km/h) kann ein Auto höchstens durch eine flache Kurve mit Radius $${rad}\\,\\text{m}$ fahren, wenn die Haftreibungszahl $\\mu_H = ${tz(mu)}$ ist?`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(${mu}*9.81*${rad})*3.6`,
            einheit: "km/h",
            fehler: fehlerbilder(v * 3.6, [
              { wert: `sqrt(${mu}*9.81*${rad})`, num: v, meldung: "Das ist die Geschwindigkeit in m/s. Gefragt ist km/h, also mal $3{,}6$." },
              { wert: `${mu}*9.81*${rad}*3.6`, num: mu * g * rad * 3.6, meldung: "$\\mu_H g r$ ist $v^2$. Zieh zuerst die Wurzel." },
            ]),
          },
        ],
        hinweis: "Die größte Haftreibung μ·m·g liefert die Zentripetalkraft m·v²/r. Die Masse kürzt sich.",
        loesung: `**Ansatz:** $\\dfrac{m v^2}{r} = \\mu_H m g$, also $v_{\\max} = \\sqrt{\\mu_H g r}$.\n---\n**Einsetzen:** $v_{\\max} = \\sqrt{${tz(mu)}\\cdot 9{,}81\\,\\text{m/s}^2\\cdot ${rad}\\,\\text{m}} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Umrechnen:** $${tz(v, 2)}\\,\\text{m/s}\\cdot 3{,}6 = ${tz(v * 3.6, 1)}\\,\\text{km/h}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-looping",
    kapitel: K,
    titel: "Mindestgeschwindigkeit im Looping",
    niveau: 2,
    erzeuge: (r) => {
      const rad = r.int(3, 30);
      return {
        angabe: `Ein Looping hat den Radius $${rad}\\,\\text{m}$. Welche Geschwindigkeit braucht der Wagen im höchsten Punkt mindestens (in m/s), und aus welcher Höhe über dem tiefsten Punkt muss er reibungsfrei aus der Ruhe starten (in m)?`,
        teile: [
          {
            typ: "zahl",
            label: "Mindestgeschwindigkeit",
            loesung: `sqrt(9.81*${rad})`,
            einheit: "m/s",
            fehler: fehlerbilder(Math.sqrt(g * rad), [
              { wert: `sqrt(2*9.81*${rad})`, num: Math.sqrt(2 * g * rad), meldung: "Das ist die Fallformel. Oben im Looping gilt der Grenzfall $m g = m v^2/r$." },
            ]),
          },
          {
            typ: "zahl",
            label: "Starthöhe",
            loesung: `2.5*${rad}`,
            einheit: "m",
            fehler: fehlerbilder(2.5 * rad, [
              { wert: `2*${rad}`, num: 2 * rad, meldung: "Auf der Höhe $2r$ käme der Wagen oben mit $v = 0$ an. Er braucht dort noch Bewegungsenergie $\\tfrac12 m g r$." },
            ]),
          },
        ],
        hinweis: "Oben liefert im Grenzfall das Gewicht allein die Zentripetalkraft. Danach Energiesatz zwischen Start und Scheitel (Höhe 2r).",
        loesung: `**Scheitel:** Im Grenzfall drückt die Schiene nicht mehr, $m g = m v^2/r$, also $v_{\\min} = \\sqrt{g r} = ${tz(Math.sqrt(g * rad), 2)}\\,\\text{m/s}$.\n---\n**Energiesatz:** $m g h = m g\\cdot 2r + \\tfrac12 m g r$. Die Masse kürzt sich, $h = 2{,}5\\,r$.\n---\n**Ergebnis:** $h = 2{,}5\\cdot ${rad}\\,\\text{m} = ${tz(2.5 * rad, 1)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-kettenkarussell",
    kapitel: K,
    titel: "Winkel der Kette im Kettenkarussell",
    niveau: 2,
    erzeuge: (r) => {
      const rad = r.int(3, 9);
      // ab 5 s pro Umlauf: höchstens rund 11 m/s und 55°, wie bei echten Kettenkarussells
      const T = r.int(5, 9);
      const w = (2 * Math.PI) / T;
      const t = (w * w * rad) / g;
      const alpha = (Math.atan(t) * 180) / Math.PI;
      return {
        angabe: `Die Sitze eines Kettenkarussells laufen auf einem Kreis mit Radius $${rad}\\,\\text{m}$, eine Umdrehung dauert $${T}\\,\\text{s}$. Unter welchem Winkel gegen die Senkrechte hängen die Ketten (in Grad)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(atan((2*pi/${T})^2*${rad}/9.81))`,
            einheit: "°",
            fehler: fehlerbilder(alpha, [
              { wert: `90 - inGrad(atan((2*pi/${T})^2*${rad}/9.81))`, num: 90 - alpha, meldung: "Das ist der Winkel gegen die **Waagrechte**. Gegen die Senkrechte gilt $\\tan\\alpha = \\omega^2 r/g$." },
              { wert: `inGrad(atan((2*pi/${T})*${rad}/9.81))`, num: (Math.atan((w * rad) / g) * 180) / Math.PI, meldung: "Im Zähler steht $\\omega^2 r$, nicht $\\omega r$." },
            ]),
          },
        ],
        hinweis: "Senkrecht trägt die Kette das Gewicht, waagrecht liefert sie die Zentripetalkraft: tan α = ω²·r/g.",
        loesung: `**Ansatz:** $F_K\\cos\\alpha = m g$ und $F_K\\sin\\alpha = m\\omega^2 r$. Teilen ergibt $\\tan\\alpha = \\dfrac{\\omega^2 r}{g}$.\n---\n**Winkelgeschwindigkeit:** $\\omega = \\dfrac{2\\pi}{${T}\\,\\text{s}} = ${tz(w, 3)}\\,\\text{s}^{-1}$.\n---\n**Winkel:** $\\tan\\alpha = \\dfrac{(${tz(w, 3)}\\,\\text{s}^{-1})^2\\cdot ${rad}\\,\\text{m}}{9{,}81\\,\\text{m/s}^2} = ${tz(t, 3)}$, also $\\alpha = ${tz(alpha, 1)}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p6-d-gravitationskraft",
    kapitel: K,
    titel: "Gravitationskraft",
    niveau: 1,
    erzeuge: (r) => {
      const m1 = r.int(1, 99) * 10;
      const m2 = r.int(1, 99) * 10;
      const d = r.int(5, 50) / 10;
      const F = (G * m1 * m2) / (d * d);
      return {
        angabe: `Zwei Kugeln mit $${m1}\\,\\text{kg}$ und $${m2}\\,\\text{kg}$ haben einen Mittelpunktsabstand von $${tz(d)}\\,\\text{m}$. Wie groß ist die Gravitationskraft zwischen ihnen (in N)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `6.674e-11*${m1}*${m2}/${d}^2`,
            einheit: "N",
            toleranz: 0.005 * F, // relative 0,5 %; die feste Untergrenze 1e-6 der Standardtoleranz wuerde alle Fehlerbilder akzeptieren
            fehler: fehlerbilder(F, [
              { wert: `6.674e-11*${m1}*${m2}/${d}`, num: (G * m1 * m2) / d, meldung: "Der Abstand steht im **Quadrat** im Nenner." },
              { wert: `6.674e-11*(${m1}+${m2})/${d}^2`, num: (G * (m1 + m2)) / (d * d), meldung: "Im Gesetz steht das **Produkt** der Massen, nicht die Summe." },
            ]),
          },
        ],
        hinweis: "F = G·m₁·m₂/r² mit G = 6,674·10⁻¹¹ N·m²/kg².",
        loesung: `**Ansatz:** Gravitationsgesetz $F = G\\dfrac{m_1 m_2}{r^2}$.\n---\n**Einsetzen:** $F = 6{,}674\\cdot 10^{-11}\\,\\dfrac{\\text{N}\\,\\text{m}^2}{\\text{kg}^2}\\cdot\\dfrac{${m1}\\,\\text{kg}\\cdot ${m2}\\,\\text{kg}}{(${tz(d)}\\,\\text{m})^2} = ${zp(F)}\\,\\text{N}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-g-planet",
    kapitel: K,
    titel: "Fallbeschleunigung auf einem Himmelskörper",
    niveau: 1,
    erzeuge: (r) => {
      const koerper = r.wahl([
        { name: "der Mond", M: 7.35e22, R: 1737 },
        { name: "der Mars", M: 6.42e23, R: 3390 },
        { name: "die Venus", M: 4.87e24, R: 6052 },
        { name: "der Merkur", M: 3.3e23, R: 2440 },
        { name: "der Jupitermond Ganymed", M: 1.48e23, R: 2634 },
      ] as const);
      const gk = (G * koerper.M) / (koerper.R * 1000) ** 2;
      return {
        angabe: `Wie groß ist die Fallbeschleunigung an der Oberfläche, wenn ${koerper.name} die Masse $${zp(koerper.M)}\\,\\text{kg}$ und den Radius $${koerper.R}\\,\\text{km}$ hat (in $\\text{m/s}^2$)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `6.674e-11*${koerper.M}/(${koerper.R}e3)^2`,
            einheit: "m/s²",
            fehler: fehlerbilder(gk, [
              { wert: `6.674e-11*${koerper.M}/${koerper.R}^2`, num: (G * koerper.M) / koerper.R ** 2, meldung: "Der Radius muss in Metern stehen. Dein Wert ist um den Faktor $10^6$ zu groß." },
              { wert: `6.674e-11*${koerper.M}/(${koerper.R}e3)`, num: (G * koerper.M) / (koerper.R * 1000), meldung: "Der Radius steht im Quadrat im Nenner." },
            ]),
          },
        ],
        hinweis: "g = G·M/R², den Radius in Metern.",
        loesung: `**Ansatz:** An der Oberfläche ist die Gravitationskraft die Gewichtskraft: $m g = G M m/R^2$, also $g = G\\dfrac{M}{R^2}$.\n---\n**Einsetzen:** $g = 6{,}674\\cdot 10^{-11}\\,\\dfrac{\\text{N}\\,\\text{m}^2}{\\text{kg}^2}\\cdot\\dfrac{${zp(koerper.M)}\\,\\text{kg}}{(${zp(koerper.R * 1000, 4)}\\,\\text{m})^2} = ${tz(gk, 3)}\\,\\text{m/s}^2$, also $${tz(gk / g, 2)}$-mal so viel wie auf der Erde.`,
      };
    },
  }),
  drill({
    id: "p6-d-g-hoehe",
    kapitel: K,
    titel: "Fallbeschleunigung in der Höhe",
    niveau: 2,
    erzeuge: (r) => {
      const h = r.int(1, 80) * 100;
      const gh = g * (6370 / (6370 + h)) ** 2;
      return {
        angabe: `Wie groß ist die Fallbeschleunigung in $${h}\\,\\text{km}$ Höhe über der Erdoberfläche (in $\\text{m/s}^2$)? ($g_0 = 9{,}81\\,\\text{m/s}^2$, $R_E = 6370\\,\\text{km}$)`,
        teile: [
          {
            typ: "zahl",
            loesung: `9.81*(6370/(6370+${h}))^2`,
            einheit: "m/s²",
            fehler: fehlerbilder(gh, [
              { wert: `9.81*(6370/${h})^2`, num: g * (6370 / h) ** 2, meldung: "Im Nenner steht der Abstand vom **Erdmittelpunkt**, $R_E + h$, nicht die Höhe." },
              { wert: `9.81*6370/(6370+${h})`, num: (g * 6370) / (6370 + h), meldung: "Das Verhältnis muss quadriert werden, $g$ nimmt mit $1/r^2$ ab." },
            ]),
          },
        ],
        hinweis: "g nimmt mit dem Quadrat des Abstands vom Erdmittelpunkt ab: g(h) = g₀·(R/(R+h))².",
        loesung: `**Ansatz:** $g(h) = g_0\\left(\\dfrac{R_E}{R_E + h}\\right)^2$, der Abstand vom Mittelpunkt ist $${6370 + h}\\,\\text{km}$.\n---\n**Verhältnis:** $\\left(\\dfrac{6370\\,\\text{km}}{${6370 + h}\\,\\text{km}}\\right)^2 = ${tz((6370 / (6370 + h)) ** 2, 4)}$.\n---\n**Ergebnis:** $g = 9{,}81\\,\\text{m/s}^2\\cdot ${tz((6370 / (6370 + h)) ** 2, 4)} = ${tz(gh, 3)}\\,\\text{m/s}^2$.`,
      };
    },
  }),
  drill({
    id: "p6-d-satellit",
    kapitel: K,
    titel: "Satellit auf Kreisbahn",
    niveau: 2,
    erzeuge: (r) => {
      const h = r.int(2, 40) * 100;
      const rad = RE + h * 1000;
      const v = Math.sqrt(GME / rad);
      const T = (2 * Math.PI * rad) / v / 60;
      return {
        angabe: `Ein Satellit umkreist die Erde in $${h}\\,\\text{km}$ Höhe. Berechne Bahngeschwindigkeit (in m/s) und Umlaufzeit (in Minuten). ($M_E = 5{,}97\\cdot 10^{24}\\,\\text{kg}$, $R_E = 6370\\,\\text{km}$)`,
        teile: [
          {
            typ: "zahl",
            label: "Bahngeschwindigkeit",
            loesung: `sqrt(6.674e-11*5.97e24/(6.37e6+${h * 1000}))`,
            einheit: "m/s",
            fehler: fehlerbilder(v, [
              { wert: `sqrt(6.674e-11*5.97e24/${h * 1000})`, num: Math.sqrt(GME / (h * 1000)), meldung: "Du hast die Höhe statt des Abstands vom Erdmittelpunkt eingesetzt, $r = R_E + h$." },
            ]),
          },
          {
            typ: "zahl",
            label: "Umlaufzeit",
            loesung: `2*pi*(6.37e6+${h * 1000})/sqrt(6.674e-11*5.97e24/(6.37e6+${h * 1000}))/60`,
            einheit: "min",
            fehler: fehlerbilder(T, [
              { wert: `2*pi*(6.37e6+${h * 1000})/sqrt(6.674e-11*5.97e24/(6.37e6+${h * 1000}))`, num: T * 60, meldung: "Das ist die Umlaufzeit in Sekunden. Teile durch $60$." },
            ]),
          },
        ],
        hinweis: "Gravitation = Zentripetalkraft: G·M·m/r² = m·v²/r mit r = R_E + h. Dann T = 2πr/v.",
        loesung: `**Ansatz:** Die Gravitation ist die Zentripetalkraft, also $v = \\sqrt{G M_E/r}$ mit $r = R_E + h = ${tz(rad / 1e6, 3)}\\cdot 10^{6}\\,\\text{m}$.\n---\n**Geschwindigkeit:** $v = \\sqrt{\\dfrac{3{,}98\\cdot 10^{14}\\,\\text{m}^3/\\text{s}^2}{${tz(rad / 1e6, 3)}\\cdot 10^{6}\\,\\text{m}}} = ${tz(v, 0)}\\,\\text{m/s}$.\n---\n**Umlaufzeit:** $T = \\dfrac{2\\pi r}{v} = ${tz(T * 60, 0)}\\,\\text{s} = ${tz(T, 1)}\\,\\text{min}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-bahnradius",
    kapitel: K,
    titel: "Bahnhöhe aus der Umlaufzeit",
    niveau: 3,
    erzeuge: (r) => {
      const Th = r.int(2, 24);
      const T = Th * 3600;
      const rad = Math.cbrt((GME * T * T) / (4 * Math.PI ** 2));
      const h = rad / 1000 - 6370;
      return {
        angabe: `Ein Satellit soll die Erde auf einer Kreisbahn in genau $${Th}\\,\\text{h}$ umrunden. In welcher Höhe über der Erdoberfläche muss er fliegen (in km)? ($G M_E = 3{,}98\\cdot 10^{14}\\,\\text{m}^3/\\text{s}^2$, $R_E = 6370\\,\\text{km}$)`,
        teile: [
          {
            typ: "zahl",
            loesung: `nthRoot(6.674e-11*5.97e24*(${T})^2/(4*pi^2), 3)/1000 - 6370`,
            einheit: "km",
            fehler: fehlerbilder(h, [
              { wert: `nthRoot(6.674e-11*5.97e24*(${T})^2/(4*pi^2), 3)/1000`, num: rad / 1000, meldung: "Das ist der Abstand vom Erd**mittelpunkt**. Für die Höhe ziehst du noch den Erdradius ab." },
              { wert: `nthRoot(6.674e-11*5.97e24*${Th}^2/(4*pi^2), 3)/1000 - 6370`, num: Math.cbrt((GME * Th * Th) / (4 * Math.PI ** 2)) / 1000 - 6370, meldung: "Die Umlaufzeit muss in Sekunden stehen." },
            ]),
          },
        ],
        hinweis: "Aus T = 2π·√(r³/(G·M)) folgt r³ = G·M·T²/(4π²). Danach den Erdradius abziehen.",
        loesung: `**Ansatz:** Gravitation gleich Zentripetalkraft liefert $T^2 = \\dfrac{4\\pi^2 r^3}{G M}$, also $r = \\sqrt[3]{\\dfrac{G M T^2}{4\\pi^2}}$.\n---\n**Zeit in Sekunden:** $T = ${Th}\\cdot 3600\\,\\text{s} = ${T}\\,\\text{s}$.\n---\n**Bahnradius:** $r = \\sqrt[3]{\\dfrac{3{,}98\\cdot 10^{14}\\cdot ${T}^2}{4\\pi^2}}\\,\\text{m} = ${tz(rad / 1000, 0)}\\,\\text{km}$.\n---\n**Höhe:** $h = r - R_E = ${tz(h, 0)}\\,\\text{km}$.${h < 0 ? " Das Ergebnis ist negativ: Eine so kurze Umlaufzeit ist um die Erde unmöglich." : ""}`,
      };
    },
  }),
  drill({
    id: "p6-d-kepler",
    kapitel: K,
    titel: "Drittes Keplersches Gesetz",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(3, 400) / 10;
      return {
        angabe: `Ein Himmelskörper umläuft die Sonne auf einer Bahn mit großer Halbachse $${tz(a)}\\,\\text{AE}$. Wie lange dauert ein Umlauf (in Jahren)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a}^1.5`,
            einheit: "a",
            fehler: fehlerbilder(a ** 1.5, [
              { wert: `${a}^(2/3)`, num: a ** (2 / 3), meldung: "Die Hochzahl ist verkehrt. Aus $T^2 \\sim a^3$ folgt $T = a^{3/2}$." },
              { wert: `${a}^3`, num: a ** 3, meldung: "Das ist $T^2$. Zieh noch die Wurzel." },
            ]),
          },
        ],
        hinweis: "Mit der Erde als Vergleich: T in Jahren = (a in AE)^(3/2).",
        loesung: `**Ansatz:** Beide umlaufen die Sonne, also $\\dfrac{T^2}{(1\\,\\text{a})^2} = \\dfrac{a^3}{(1\\,\\text{AE})^3}$.\n---\n**Ergebnis:** $T = ${tz(a)}^{3/2}\\,\\text{a} = \\sqrt{${tz(Number((a ** 3).toPrecision(4)), 4)}}\\,\\text{a} = ${tz(a ** 1.5, 2)}\\,\\text{a}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-flaechensatz",
    kapitel: K,
    titel: "Flächensatz zwischen Perihel und Aphel",
    niveau: 2,
    erzeuge: (r) => {
      const rp = r.int(3, 15) / 10;
      const ra = Math.round(rp * r.int(2, 30) * 100) / 100;
      const vp = r.int(20, 60);
      const va = (vp * rp) / ra;
      return {
        angabe: `Ein Komet kommt der Sonne bis auf $${tz(rp)}\\,\\text{AE}$ nahe und ist dort $${vp}\\,\\text{km/s}$ schnell. Sein größter Abstand ist $${tz(ra, 2)}\\,\\text{AE}$. Wie schnell ist er dort (in km/s)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${vp}*${rp}/${ra}`,
            einheit: "km/s",
            fehler: fehlerbilder(va, [
              { wert: `${vp}*${ra}/${rp}`, num: (vp * ra) / rp, meldung: "Weit draußen ist der Komet **langsamer**. Aus $r_P v_P = r_A v_A$ folgt $v_A = v_P r_P/r_A$." },
              { wert: `${vp}*(${rp}/${ra})^2`, num: vp * (rp / ra) ** 2, meldung: "Der Flächensatz verknüpft $r$ und $v$ linear, ohne Quadrat." },
            ]),
          },
        ],
        hinweis: "Flächensatz für Perihel und Aphel: r_P·v_P = r_A·v_A.",
        loesung: `**Ansatz:** Im Perihel und im Aphel steht die Geschwindigkeit senkrecht zum Fahrstrahl. Der Flächensatz liefert $r_P v_P = r_A v_A$.\n---\n**Umstellen:** $v_A = v_P\\dfrac{r_P}{r_A} = ${vp}\\,\\text{km/s}\\cdot\\dfrac{${tz(rp)}}{${tz(ra, 2)}}$.\n---\n**Ergebnis:** $v_A = ${tz(va, 3)}\\,\\text{km/s}$.`,
      };
    },
  }),
  drill({
    id: "p6-d-fluchtgeschwindigkeit",
    kapitel: K,
    titel: "Fluchtgeschwindigkeit",
    niveau: 2,
    erzeuge: (r) => {
      const koerper = r.wahl([
        { name: "des Mondes", M: 7.35e22, R: 1737 },
        { name: "des Mars", M: 6.42e23, R: 3390 },
        { name: "der Venus", M: 4.87e24, R: 6052 },
        { name: "des Merkur", M: 3.3e23, R: 2440 },
        { name: "der Erde", M: 5.97e24, R: 6370 },
      ] as const);
      const vf = Math.sqrt((2 * G * koerper.M) / (koerper.R * 1000)) / 1000;
      return {
        angabe: `Berechne die Fluchtgeschwindigkeit ${koerper.name} (Masse $${zp(koerper.M)}\\,\\text{kg}$, Radius $${koerper.R}\\,\\text{km}$) in km/s.`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(2*6.674e-11*${koerper.M}/(${koerper.R}e3))/1000`,
            einheit: "km/s",
            fehler: fehlerbilder(vf, [
              { wert: `sqrt(6.674e-11*${koerper.M}/(${koerper.R}e3))/1000`, num: vf / Math.SQRT2, meldung: "Der Faktor $2$ fehlt. Das wäre die Kreisbahngeschwindigkeit knapp über dem Boden." },
              { wert: `sqrt(2*6.674e-11*${koerper.M}/${koerper.R})/1000`, num: Math.sqrt((2 * G * koerper.M) / koerper.R) / 1000, meldung: "Der Radius muss in Metern stehen." },
            ]),
          },
        ],
        hinweis: "½·m·v² = G·M·m/R, also v = √(2·G·M/R).",
        loesung: `**Ansatz:** Die kinetische Energie muss die Bindungsenergie aufbringen: $\\tfrac12 m v_F^2 = G\\dfrac{M m}{R}$, also $v_F = \\sqrt{\\dfrac{2 G M}{R}}$.\n---\n**Einsetzen:** $v_F = \\sqrt{\\dfrac{2\\cdot 6{,}674\\cdot 10^{-11}\\cdot ${zp(koerper.M)}}{${zp(koerper.R * 1000, 4)}}}\\,\\text{m/s} = ${tz(vf * 1000, 0)}\\,\\text{m/s}$.\n---\n**Ergebnis:** $v_F = ${tz(vf, 2)}\\,\\text{km/s}$.`,
      };
    },
  }),
];
