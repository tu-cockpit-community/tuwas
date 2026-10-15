import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "kinematik";
const G = 9.81;
const sinG = (w: number) => Math.sin((w * Math.PI) / 180);
const cosG = (w: number) => Math.cos((w * Math.PI) / 180);

export const DRILLS: Drill[] = [
  drill({
    id: "p2-d-gleichfoermig",
    kapitel: K,
    titel: "Gleichförmige Bewegung: Zeit aus Weg und Geschwindigkeit",
    niveau: 1,
    erzeuge: (r) => {
      const v = r.int(4, 30) * 5; // km/h
      const s = r.int(2, 60) * 5; // km
      return {
        angabe: `Ein Fahrzeug fährt mit konstant $${v}\\,\\text{km/h}$. Wie viele Minuten braucht es für $${s}\\,\\text{km}$?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${s}/${v}*60`,
            einheit: "min",
            fehler: [{ wert: `${s}/${v}`, meldung: "Das ist die Zeit in **Stunden**. Gefragt sind Minuten, also noch mit $60$ multiplizieren." }],
          },
        ],
        hinweis: "Bei konstanter Geschwindigkeit gilt t = s/v. Danach Stunden in Minuten umrechnen.",
        loesung: `**Ansatz:** Bei gleichförmiger Bewegung gilt $s = v\\,t$, also $t = s/v$.\n---\n**Rechnung:** $t = \\dfrac{${s}\\,\\text{km}}{${v}\\,\\text{km/h}} = ${tz(s / v, 4)}\\,\\text{h}$. Die Kilometer kürzen sich, es bleiben Stunden.\n---\n**In Minuten:** $${tz(s / v, 4)}\\,\\text{h}\\cdot 60\\,\\text{min/h} = ${tz((s / v) * 60, 1)}\\,\\text{min}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-anfahren",
    kapitel: K,
    titel: "Anfahren: Beschleunigung und Weg",
    niveau: 1,
    erzeuge: (r) => {
      const vk = r.wahl([36, 54, 72, 90, 108] as const);
      const t = r.int(4, 15);
      const v = vk / 3.6;
      return {
        angabe: `Ein Fahrzeug beschleunigt gleichmäßig in $${t}\\,\\text{s}$ aus dem Stand auf $${vk}\\,\\text{km/h}$. Berechne die Beschleunigung in $\\text{m/s}^2$ und den Weg in m.`,
        teile: [
          {
            typ: "zahl",
            label: "Beschleunigung",
            loesung: `${vk}/3.6/${t}`,
            einheit: "m/s²",
            fehler: [{ wert: `${vk}/${t}`, meldung: "Du hast km/h durch Sekunden geteilt. Rechne die Geschwindigkeit zuerst in m/s um (durch $3{,}6$)." }],
          },
          {
            typ: "zahl",
            label: "Weg",
            loesung: `0.5*${vk}/3.6*${t}`,
            einheit: "m",
            fehler: [{ wert: `${vk}/3.6*${t}`, meldung: "Du hast Endgeschwindigkeit mal Zeit gerechnet. Aus dem Stand ist die mittlere Geschwindigkeit nur die **Hälfte** der Endgeschwindigkeit." }],
          },
        ],
        hinweis: "Zuerst in m/s umrechnen. Dann a = Δv/Δt und s = ½·v·t (Mittelwert der Geschwindigkeit mal Zeit).",
        loesung: `**SI-Einheiten:** $v = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 2)}\\,\\text{m/s}$.\n---\n**Beschleunigung:** $a = \\dfrac{\\Delta v}{\\Delta t} = \\dfrac{${tz(v, 2)}\\,\\text{m/s}}{${t}\\,\\text{s}} = ${tz(v / t, 3)}\\,\\text{m/s}^2$.\n---\n**Weg:** Die Geschwindigkeit wächst linear, im Mittel ist sie $\\tfrac12 v$. Also $s = \\tfrac12\\,v\\,t = \\tfrac12\\cdot ${tz(v, 2)}\\,\\text{m/s}\\cdot ${t}\\,\\text{s} = ${tz(0.5 * v * t, 1)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-vorzeichen",
    kapitel: K,
    titel: "Beschleunigung mit Vorzeichen: schneller oder langsamer?",
    niveau: 1,
    erzeuge: (r) => {
      const vz = r.vorzeichen();
      const v1 = vz * r.int(2, 20);
      let v2 = vz * r.int(2, 20);
      if (v1 === v2) v2 = v1 + vz * 3;
      const t = r.int(2, 8);
      const a = (v2 - v1) / t;
      const schneller = Math.abs(v2) > Math.abs(v1);
      return {
        angabe: `Die $x$-Achse zeigt nach rechts. Die Geschwindigkeit eines Wagens ändert sich in $${t}\\,\\text{s}$ gleichmäßig von $${v1}\\,\\text{m/s}$ auf $${v2}\\,\\text{m/s}$.\n\na) Berechne die Beschleunigung in $\\text{m/s}^2$.\n\nb) Wird der Wagen schneller ($1$) oder langsamer ($-1$)?`,
        teile: [
          {
            typ: "zahl",
            label: "a) Beschleunigung",
            loesung: `(${v2}-(${v1}))/${t}`,
            einheit: "m/s²",
            fehler: [{ wert: `(${v1}-(${v2}))/${t}`, meldung: "Du hast Anfangswert minus Endwert gerechnet. Eine Änderung ist immer **Endwert minus Anfangswert**." }],
          },
          {
            typ: "zahl",
            label: "b) schneller (1) oder langsamer (−1)",
            loesung: schneller ? "1" : "-1",
            fehler: [{ wert: schneller ? "-1" : "1", meldung: "Vergleiche die Vorzeichen von $v$ und $a$. Gleiche Vorzeichen bedeuten schneller, verschiedene langsamer. Das Vorzeichen von $a$ allein entscheidet nicht." }],
          },
        ],
        hinweis: "a = (v₂ − v₁)/Δt mit Vorzeichen. Dann die Vorzeichen von v und a vergleichen.",
        loesung: `**Ansatz:** $\\bar a = \\dfrac{v_2 - v_1}{\\Delta t}$, Geschwindigkeiten mit Vorzeichen einsetzen.\n---\n**Rechnung:** $\\bar a = \\dfrac{${v2}\\,\\text{m/s} - (${v1}\\,\\text{m/s})}{${t}\\,\\text{s}} = ${tz(a, 3)}\\,\\text{m/s}^2$.\n---\n**Deutung:** $v$ ist ${vz > 0 ? "positiv" : "negativ"}, $a$ ist ${a > 0 ? "positiv" : "negativ"}. ${schneller ? "Gleiche Vorzeichen, also wird der Wagen schneller" : "Verschiedene Vorzeichen, also wird der Wagen langsamer"}: Das Tempo geht von $${Math.abs(v1)}$ auf $${Math.abs(v2)}\\,\\text{m/s}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-anhalteweg",
    kapitel: K,
    titel: "Anhalteweg mit Reaktionszeit",
    niveau: 2,
    erzeuge: (r) => {
      const vk = r.wahl([30, 50, 70, 80, 100, 130] as const);
      const tr = r.wahl([0.8, 1.0, 1.2] as const);
      const a = r.wahl([4, 5, 6, 7, 8] as const);
      const v = vk / 3.6;
      return {
        angabe: `Ein Auto fährt mit $${vk}\\,\\text{km/h}$. Die Reaktionszeit beträgt $${tz(tr)}\\,\\text{s}$, die Bremsverzögerung $${a}\\,\\text{m/s}^2$. Berechne den Anhalteweg in m.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${vk}/3.6*${tr} + (${vk}/3.6)^2/(2*${a})`,
            einheit: "m",
            fehler: [
              { wert: `(${vk}/3.6)^2/(2*${a})`, meldung: "Das ist nur der Bremsweg. Während der Reaktionszeit fährt das Auto ungebremst weiter, dieser Reaktionsweg gehört dazu." },
              { wert: `${vk}*${tr} + ${vk}^2/(2*${a})`, meldung: "Du hast km/h eingesetzt. Rechne zuerst in m/s um, sonst ist das Ergebnis viel zu groß." },
            ],
          },
        ],
        hinweis: "Anhalteweg = Reaktionsweg v₀·t_R + Bremsweg v₀²/(2a), alles in SI-Einheiten.",
        loesung: `**SI:** $v_0 = ${vk}/3{,}6\\,\\text{m/s} = ${tz(v, 2)}\\,\\text{m/s}$. **Reaktionsweg:** $s_R = v_0 t_R = ${tz(v, 2)}\\,\\text{m/s}\\cdot ${tz(tr)}\\,\\text{s} = ${tz(v * tr, 1)}\\,\\text{m}$.\n---\n**Bremsweg:** $s_B = \\dfrac{v_0^2}{2a} = \\dfrac{(${tz(v, 2)}\\,\\text{m/s})^2}{2\\cdot ${a}\\,\\text{m/s}^2} = ${tz((v * v) / (2 * a), 1)}\\,\\text{m}$.\n---\n**Anhalteweg:** $s_R + s_B = ${tz(v * tr + (v * v) / (2 * a), 1)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-vt-flaeche",
    kapitel: K,
    titel: "Weg aus einem v-t-Diagramm in drei Phasen",
    niveau: 2,
    erzeuge: (r) => {
      const v = r.int(4, 20);
      const t1 = r.int(2, 8);
      const t2 = r.int(3, 20);
      const t3 = r.int(2, 8);
      const s = 0.5 * t1 * v + t2 * v + 0.5 * t3 * v;
      return {
        angabe: `Ein Fahrzeug beschleunigt aus dem Stand in $${t1}\\,\\text{s}$ gleichmäßig auf $${v}\\,\\text{m/s}$, fährt $${t2}\\,\\text{s}$ konstant und bremst dann in $${t3}\\,\\text{s}$ gleichmäßig bis zum Stillstand. Wie lang ist der gesamte Weg in m?`,
        teile: [
          {
            typ: "zahl",
            loesung: `0.5*${t1}*${v} + ${t2}*${v} + 0.5*${t3}*${v}`,
            einheit: "m",
            fehler: [
              { wert: `${t1 + t2 + t3}*${v}`, meldung: "Du hast ein Rechteck über die ganze Zeit gerechnet, also beim Anfahren und Bremsen den Faktor $\\tfrac12$ vergessen. Dort ist die Fläche unter dem v-t-Graphen ein **Dreieck**." },
              { wert: `0.5*${t1 + t2 + t3}*${v}`, meldung: "Du hast ein einziges Dreieck über die ganze Zeit gebildet. In der mittleren Phase fährt das Fahrzeug aber konstant, dort ist die Fläche ein **Rechteck**." },
            ],
          },
        ],
        hinweis: "Der Weg ist die Fläche unter dem v-t-Graphen: Dreieck + Rechteck + Dreieck.",
        loesung: `**Ansatz:** Der Weg ist die Fläche unter dem v-t-Graphen. Sie besteht aus einem Dreieck, einem Rechteck und einem Dreieck.\n---\n**Teilflächen:** $\\tfrac12\\cdot ${t1}\\,\\text{s}\\cdot ${v}\\,\\text{m/s} = ${tz(0.5 * t1 * v)}\\,\\text{m}$, $${t2}\\,\\text{s}\\cdot ${v}\\,\\text{m/s} = ${t2 * v}\\,\\text{m}$, $\\tfrac12\\cdot ${t3}\\,\\text{s}\\cdot ${v}\\,\\text{m/s} = ${tz(0.5 * t3 * v)}\\,\\text{m}$.\n---\n**Summe:** $${tz(s)}\\,\\text{m}$. Kontrolle als Trapez: $\\tfrac12\\,(${t1 + t2 + t3} + ${t2})\\,\\text{s}\\cdot ${v}\\,\\text{m/s} = ${tz(s)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-freier-fall",
    kapitel: K,
    titel: "Freier Fall aus gegebener Höhe",
    niveau: 1,
    erzeuge: (r) => {
      const h = r.int(2, 80) * 2.5;
      return {
        angabe: `Ein Körper fällt aus $${tz(h)}\\,\\text{m}$ Höhe frei herab ($g = 9{,}81\\,\\text{m/s}^2$). Berechne Fallzeit in s und Aufprallgeschwindigkeit in m/s.`,
        teile: [
          {
            typ: "zahl",
            label: "Fallzeit",
            loesung: `sqrt(2*${h}/9.81)`,
            einheit: "s",
            fehler: [{ wert: `sqrt(${h}/9.81)`, meldung: "Der Faktor $2$ fehlt. Aus $h = \\tfrac12 g t^2$ folgt $t = \\sqrt{2h/g}$." }],
          },
          {
            typ: "zahl",
            label: "Geschwindigkeit",
            loesung: `sqrt(2*9.81*${h})`,
            einheit: "m/s",
            fehler: [{ wert: `9.81*${h}`, meldung: "Das ist $g\\cdot h$ mit der Einheit $\\text{m}^2/\\text{s}^2$. Es fehlen Faktor $2$ und Wurzel: $v = \\sqrt{2gh}$." }],
          },
        ],
        hinweis: "Achse nach unten, aus der Ruhe: h = ½gt², v = gt.",
        loesung: `**Modell:** Freier Fall aus der Ruhe, Achse nach unten.\n---\n**Fallzeit:** $t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2\\cdot ${tz(h)}\\,\\text{m}}{9{,}81\\,\\text{m/s}^2}} = ${tz(Math.sqrt((2 * h) / G), 3)}\\,\\text{s}$.\n---\n**Geschwindigkeit:** $v = \\sqrt{2gh} = ${tz(Math.sqrt(2 * G * h), 2)}\\,\\text{m/s}$. Probe: $g\\,t$ ergibt denselben Wert.`,
      };
    },
  }),
  drill({
    id: "p2-d-senkrechter-wurf",
    kapitel: K,
    titel: "Senkrechter Wurf: Steighöhe und Steigzeit",
    niveau: 1,
    erzeuge: (r) => {
      const v0 = r.int(4, 20); // von Hand geworfen: mehr als etwa 20 m/s senkrecht ist unrealistisch
      return {
        angabe: `Ein Ball wird mit $${v0}\\,\\text{m/s}$ senkrecht nach oben geworfen. Wie hoch steigt er (in m), und wie lange dauert der Aufstieg (in s)?`,
        teile: [
          {
            typ: "zahl",
            label: "Steighöhe",
            loesung: `${v0}^2/(2*9.81)`,
            einheit: "m",
            fehler: [{ wert: `${v0}^2/9.81`, meldung: "Der Faktor $2$ fehlt. Aus $0 = v_0^2 - 2gh$ folgt $h = v_0^2/(2g)$." }],
          },
          {
            typ: "zahl",
            label: "Steigzeit",
            loesung: `${v0}/9.81`,
            einheit: "s",
            fehler: [{ wert: `2*${v0}/9.81`, meldung: "Das ist die Zeit für Auf- **und** Abstieg. Gefragt ist nur der Aufstieg." }],
          },
        ],
        hinweis: "Im höchsten Punkt ist v = 0 (die Beschleunigung ist dort aber weiterhin g nach unten).",
        loesung: `**Ansatz:** Achse nach oben, $a = -g$. Im höchsten Punkt ist $v = 0$.\n---\n**Steigzeit:** $0 = v_0 - g t_S$, also $t_S = \\dfrac{${v0}\\,\\text{m/s}}{9{,}81\\,\\text{m/s}^2} = ${tz(v0 / G, 3)}\\,\\text{s}$.\n---\n**Steighöhe:** $h = \\dfrac{v_0^2}{2g} = \\dfrac{(${v0}\\,\\text{m/s})^2}{19{,}62\\,\\text{m/s}^2} = ${tz((v0 * v0) / (2 * G), 2)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-wurf-erhoeht",
    kapitel: K,
    titel: "Senkrechter Wurf von einer erhöhten Stelle",
    niveau: 2,
    erzeuge: (r) => {
      const h0 = r.int(4, 40);
      const v0 = r.int(3, 15);
      const w = Math.sqrt(v0 * v0 + 2 * G * h0);
      const t = (v0 + w) / G;
      return {
        angabe: `Von einem $${h0}\\,\\text{m}$ hohen Dach wird ein Ball mit $${v0}\\,\\text{m/s}$ senkrecht nach oben geworfen. Nach wie vielen Sekunden landet er am Boden?`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${v0} + sqrt(${v0}^2 + 2*9.81*${h0}))/9.81`,
            einheit: "s",
            fehler: [
              { wert: `2*${v0}/9.81`, meldung: "Nach $2t_S$ ist der Ball erst wieder auf **Dachhöhe**. Er fällt dann noch bis zum Boden. Löse $h(t) = 0$." },
              { wert: `sqrt(2*${h0}/9.81)`, meldung: "Das wäre der freie Fall vom Dach aus der Ruhe. Der Ball fliegt aber zuerst nach oben." },
            ],
          },
        ],
        hinweis: "Achse nach oben, Ursprung am Boden: h(t) = h₀ + v₀t − 4,905t² = 0, positive Lösung nehmen.",
        loesung: `**Ansatz:** $h(t) = ${h0} + ${v0}\\,t - 4{,}905\\,t^2$ ($h$ in m, $t$ in s). Landung bei $h = 0$.\n---\n**Lösungsformel:** $t = \\dfrac{${v0} + \\sqrt{${v0}^2 + 2\\cdot 9{,}81\\cdot ${h0}}}{9{,}81}\\,\\text{s} = \\dfrac{${v0} + ${tz(w, 2)}}{9{,}81}\\,\\text{s} = ${tz(t, 3)}\\,\\text{s}$. Die negative Lösung liegt vor dem Abwurf.\n---\n**Probe:** Aufprallgeschwindigkeit $v = ${v0} - 9{,}81\\cdot ${tz(t, 3)} = -${tz(w, 2)}\\,\\text{m/s}$, und zeitfrei $\\sqrt{v_0^2 + 2gh_0} = ${tz(w, 2)}\\,\\text{m/s}$. ✓`,
      };
    },
  }),
  drill({
    id: "p2-d-waagrechter-wurf",
    kapitel: K,
    titel: "Waagrechter Wurf: Wurfweite",
    niveau: 2,
    erzeuge: (r) => {
      const h = r.int(1, 40) * 0.5;
      const v0 = r.int(2, 25);
      const t = Math.sqrt((2 * h) / G);
      return {
        angabe: `Ein Körper wird aus $${tz(h)}\\,\\text{m}$ Höhe mit $${v0}\\,\\text{m/s}$ waagrecht abgeworfen. Wie weit fliegt er (in m)?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${v0}*sqrt(2*${h}/9.81)`,
            einheit: "m",
            fehler: [{ wert: `${v0}*sqrt(${h}/9.81)`, meldung: "In der Fallzeit fehlt der Faktor $2$: $t = \\sqrt{2h/g}$." }],
          },
        ],
        hinweis: "Die Fallzeit hängt nur von der Höhe ab (Superpositionsprinzip).",
        loesung: `**Ansatz:** Superposition. Senkrecht freier Fall aus der Ruhe, waagrecht gleichförmig mit $v_0$.\n---\n**Fallzeit:** $t = \\sqrt{2h/g} = \\sqrt{\\dfrac{2\\cdot ${tz(h)}\\,\\text{m}}{9{,}81\\,\\text{m/s}^2}} = ${tz(t, 3)}\\,\\text{s}$.\n---\n**Weite:** $w = v_0 t = ${v0}\\,\\text{m/s}\\cdot ${tz(t, 3)}\\,\\text{s} = ${tz(v0 * t, 2)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-schiefer-wurf",
    kapitel: K,
    titel: "Schiefer Wurf auf ebenem Boden",
    niveau: 2,
    erzeuge: (r) => {
      const v0 = r.int(5, 30);
      const w = r.wahl([15, 20, 25, 35, 40, 50, 55, 70] as const); // ohne 30 und 60: dort waere sin(2w) = sin(w) bzw. das Fehlerbild gleich der Loesung
      return {
        angabe: `Ein Ball wird mit $${v0}\\,\\text{m/s}$ unter $${w}^\\circ$ abgeworfen und landet auf gleicher Höhe. Berechne Wurfweite und Steighöhe in m.`,
        teile: [
          {
            typ: "zahl",
            label: "Wurfweite",
            loesung: `${v0}^2*sin(inRad(${2 * w}))/9.81`,
            einheit: "m",
            fehler: [{ wert: `${v0}^2*sin(inRad(${w}))/9.81`, meldung: "In der Weitenformel steht $\\sin(2\\alpha)$, nicht $\\sin\\alpha$." }],
          },
          {
            typ: "zahl",
            label: "Steighöhe",
            loesung: `(${v0}*sin(inRad(${w})))^2/(2*9.81)`,
            einheit: "m",
            fehler: [{ wert: `${v0}^2/(2*9.81)`, meldung: "Für die Höhe zählt nur der senkrechte Anteil $v_0\\sin\\alpha$, nicht das ganze $v_0$." }],
          },
        ],
        hinweis: "Zerlegen: v₀ₓ = v₀ cos α, v₀ᵧ = v₀ sin α. W = v₀² sin(2α)/g, H = (v₀ sin α)²/(2g).",
        loesung: `**Zerlegen:** $v_{0x} = ${v0}\\cos ${w}^\\circ = ${tz(v0 * cosG(w), 2)}\\,\\text{m/s}$, $v_{0y} = ${v0}\\sin ${w}^\\circ = ${tz(v0 * sinG(w), 2)}\\,\\text{m/s}$.\n---\n**Weite:** $W = \\dfrac{v_0^2\\sin(2\\alpha)}{g} = \\dfrac{(${v0}\\,\\text{m/s})^2\\cdot\\sin ${2 * w}^\\circ}{9{,}81\\,\\text{m/s}^2} = ${tz((v0 * v0 * sinG(2 * w)) / G, 2)}\\,\\text{m}$.\n---\n**Steighöhe:** $H = \\dfrac{v_{0y}^2}{2g} = ${tz((v0 * sinG(w)) ** 2 / (2 * G), 2)}\\,\\text{m}$.`,
      };
    },
  }),
  drill({
    id: "p2-d-begegnung",
    kapitel: K,
    titel: "Begegnung zweier Fahrzeuge",
    niveau: 2,
    erzeuge: (r) => {
      const d = r.int(4, 40) * 10; // km
      const v1 = r.int(6, 24) * 5;
      let v2 = r.int(6, 24) * 5;
      if (v2 === v1) v2 = v1 + 10; // sonst waere das Fehlerbild "Differenz" eine Division durch 0
      const t = d / (v1 + v2);
      return {
        angabe: `Zwei Fahrzeuge starten gleichzeitig in A und B, die $${d}\\,\\text{km}$ voneinander entfernt sind, und fahren einander mit $${v1}\\,\\text{km/h}$ (von A) und $${v2}\\,\\text{km/h}$ (von B) entgegen. Nach wie vielen Minuten und wie weit von A begegnen sie einander?`,
        teile: [
          {
            typ: "zahl",
            label: "Zeit",
            loesung: `${d}/(${v1}+${v2})*60`,
            einheit: "min",
            fehler: [{ wert: `${d}/${Math.abs(v1 - v2)}*60`, meldung: "Bei Gegenverkehr verkürzen **beide** den Abstand. Die Relativgeschwindigkeit ist die Summe." }],
          },
          {
            typ: "zahl",
            label: "Entfernung von A",
            loesung: `${v1}*${d}/(${v1}+${v2})`,
            einheit: "km",
            fehler: [{ wert: `${v2}*${d}/(${v1}+${v2})`, meldung: "Das ist die Strecke des Fahrzeugs aus B, also die Entfernung von **B**." }],
          },
        ],
        hinweis: "Ortsfunktionen x₁ = v₁t und x₂ = d − v₂t gleichsetzen, oder Abstand durch Summe der Geschwindigkeiten.",
        loesung: `**Ansatz:** Ursprung in A, Achse Richtung B: $x_1 = ${v1}\\,t$, $x_2 = ${d} - ${v2}\\,t$ ($x$ in km, $t$ in h). Gleichsetzen ergibt $t = \\dfrac{${d}}{${v1} + ${v2}}$.\n---\n**Zeit:** $t = \\dfrac{${d}\\,\\text{km}}{${v1 + v2}\\,\\text{km/h}} = ${tz(t, 4)}\\,\\text{h} = ${tz(t * 60, 1)}\\,\\text{min}$.\n---\n**Ort:** $x_1 = ${v1}\\,\\text{km/h}\\cdot ${tz(t, 4)}\\,\\text{h} = ${tz(v1 * t, 2)}\\,\\text{km}$ von A.`,
      };
    },
  }),
  drill({
    id: "p2-d-einholen",
    kapitel: K,
    titel: "Einholen aus dem Stand",
    niveau: 3,
    erzeuge: (r) => {
      const v = r.int(5, 30); // m/s, gleichfoermig
      const a = r.wahl([1, 1.5, 2, 2.5, 3, 4] as const); // m/s², Verfolger aus der Ruhe
      const t = (2 * v) / a;
      return {
        angabe: `Ein Motorrad fährt mit konstant $${v}\\,\\text{m/s}$ an einem stehenden Auto vorbei. Im selben Moment fährt das Auto mit $${tz(a)}\\,\\text{m/s}^2$ los.\n\na) Nach welcher Zeit holt das Auto das Motorrad ein?\n\nb) Wie groß ist der Vorsprung des Motorrads höchstens?`,
        teile: [
          {
            typ: "zahl",
            label: "a) Zeit",
            loesung: `2*${v}/${a}`,
            einheit: "s",
            fehler: [{ wert: `${v}/${a}`, meldung: "Zu diesem Zeitpunkt sind beide nur **gleich schnell**. Einholen heißt gleicher Ort, also die Ortsfunktionen gleichsetzen." }],
          },
          {
            typ: "zahl",
            label: "b) größter Vorsprung",
            loesung: `${v}^2/(2*${a})`,
            einheit: "m",
            fehler: [{ wert: `${v}*2*${v}/${a}`, meldung: "Das ist der Ort des Einholens. Der größte Vorsprung entsteht früher, wenn beide gleich schnell sind." }],
          },
        ],
        hinweis: "Motorrad x = v·t, Auto x = ½·a·t². Gleichsetzen; größter Abstand bei gleicher Geschwindigkeit a·t = v.",
        loesung: `**Ansatz:** Ursprung beim Auto. Motorrad $x_M = ${v}\\,t$, Auto $x_A = \\tfrac12\\cdot ${tz(a)}\\,t^2$ ($x$ in m, $t$ in s).\n---\n**a)** $${v}\\,t = ${tz(a / 2)}\\,t^2$, also $t\\,(${tz(a / 2)}\\,t - ${v}) = 0$. Die Lösung $t = 0$ ist der Start, gesucht ist $t = ${tz(t, 3)}\\,\\text{s}$.\n---\n**b)** Gleich schnell bei $${tz(a)}\\,t = ${v}$, also $t = ${tz(v / a, 3)}\\,\\text{s}$. Vorsprung $d = ${v}\\cdot ${tz(v / a, 3)} - ${tz(a / 2)}\\cdot ${tz(v / a, 3)}^2 = ${tz((v * v) / (2 * a), 2)}\\,\\text{m}$.\n---\n**Probe:** Beim Einholen ist das Auto $${tz(a * t, 2)}\\,\\text{m/s}$ schnell, genau doppelt so schnell wie das Motorrad. Das gilt immer beim Einholen aus dem Stand.`,
      };
    },
  }),
  drill({
    id: "p2-d-fluss",
    kapitel: K,
    titel: "Boot überquert einen Fluss",
    niveau: 2,
    erzeuge: (r) => {
      const vb = r.int(3, 8);
      const u = r.int(1, 6);
      const b = r.int(4, 30) * 10;
      return {
        angabe: `Ein Boot fährt mit $${vb}\\,\\text{m/s}$ relativ zum Wasser, der Bug zeigt senkrecht zum Ufer. Der Fluss ist $${b}\\,\\text{m}$ breit und fließt mit $${u}\\,\\text{m/s}$. Wie lange dauert die Überfahrt (in s), und wie weit wird das Boot abgetrieben (in m)?`,
        teile: [
          {
            typ: "zahl",
            label: "Zeit",
            loesung: `${b}/${vb}`,
            einheit: "s",
            fehler: [{ wert: `${b}/sqrt(${vb}^2+${u}^2)`, meldung: "Du hast die Breite durch die schräge Geschwindigkeit über Grund geteilt. Quer zum Fluss bewegt sich das Boot nur mit seiner eigenen Geschwindigkeit." }],
          },
          {
            typ: "zahl",
            label: "Abdrift",
            loesung: `${u}*${b}/${vb}`,
            einheit: "m",
            fehler: [{ wert: `${u}*${b}`, meldung: "Abdrift ist Strömungsgeschwindigkeit mal **Zeit**, nicht mal Breite." }],
          },
        ],
        hinweis: "Superposition: quer nur die Bootsgeschwindigkeit, längs nur die Strömung.",
        loesung: `**Ansatz:** Galilei-Addition, quer und längs getrennt.\n---\n**Zeit:** $t = \\dfrac{${b}\\,\\text{m}}{${vb}\\,\\text{m/s}} = ${tz(b / vb, 2)}\\,\\text{s}$.\n---\n**Abdrift:** $${u}\\,\\text{m/s}\\cdot ${tz(b / vb, 2)}\\,\\text{s} = ${tz((u * b) / vb, 2)}\\,\\text{m}$. Über Grund ist das Boot $\\sqrt{${vb}^2 + ${u}^2}\\,\\text{m/s} = ${tz(Math.hypot(vb, u), 2)}\\,\\text{m/s}$ schnell.`,
      };
    },
  }),
];
