import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "wellen-akustik";

export const DRILLS: Drill[] = [
  drill({
    id: "p8-d-lambda",
    kapitel: K,
    titel: "Wellenlänge aus Frequenz",
    niveau: 1,
    erzeuge: (r) => {
      const [medium, c] = r.wahl([
        ["Luft", 340],
        ["Wasser", 1480],
        ["Stahl", 5100],
      ] as const);
      const f = r.int(1, 80) * 50;
      return {
        angabe: `Ein Ton von $${f}\\,\\text{Hz}$ breitet sich in ${medium} aus ($c = ${c}\\,\\text{m/s}$). Wie groß ist die Wellenlänge in m?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c}/${f}`,
            einheit: "m",
            fehler: [{ wert: `${f}/${c}`, meldung: "Du hast den Kehrwert berechnet. Aus $c = \\lambda f$ folgt durch Teilen durch $f$ die Formel $\\lambda = c/f$." }],
          },
        ],
        hinweis: "Stelle c = λ·f nach λ um.",
        loesung: `**Ansatz:** Aus $c = \\lambda f$ folgt durch Teilen durch $f$ die Formel $\\lambda = c/f$.\n---\n**Rechnung:** $\\lambda = \\dfrac{${c}\\,\\text{m/s}}{${f}\\,\\text{s}^{-1}} = ${tz(c / f, 4)}\\,\\text{m}$. Die Sekunden kürzen sich, es bleiben Meter.`,
      };
    },
  }),
  drill({
    id: "p8-d-frequenz",
    kapitel: K,
    titel: "Frequenz aus Wellenlänge und Geschwindigkeit",
    niveau: 1,
    erzeuge: (r) => {
      let l = r.int(2, 60) / 10;
      if (l === 1) l = 1.1; // bei l = 1 waeren Fehlerbild c*l und Loesung c/l gleich
      let c = r.int(1, 40) / 2;
      if (Math.abs(c - l) < 1e-9) c += 0.5; // sonst waeren f und T beide 1
      return {
        angabe: `Eine Welle hat die Wellenlänge $${tz(l)}\\,\\text{m}$ und breitet sich mit $${tz(c)}\\,\\text{m/s}$ aus. Berechne Frequenz und Periodendauer.`,
        teile: [
          {
            typ: "zahl",
            label: "Frequenz",
            loesung: `${c}/${l}`,
            einheit: "Hz",
            fehler: [{ wert: `${c}*${l}`, meldung: "Aus $c = \\lambda f$ folgt $f = c/\\lambda$. Du hast multipliziert." }],
          },
          { typ: "zahl", label: "Periodendauer", loesung: `${l}/${c}`, einheit: "s" },
        ],
        hinweis: "f = c/λ und T = 1/f.",
        loesung: `**Frequenz:** $f = \\dfrac{c}{\\lambda} = \\dfrac{${tz(c)}\\,\\text{m/s}}{${tz(l)}\\,\\text{m}} = ${tz(c / l, 4)}\\,\\text{Hz}$.\n---\n**Periodendauer:** $T = \\dfrac{1}{f} = \\dfrac{\\lambda}{c} = ${tz(l / c, 4)}\\,\\text{s}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-mediumwechsel",
    kapitel: K,
    titel: "Schall wechselt das Medium",
    niveau: 2,
    erzeuge: (r) => {
      const f = r.int(2, 40) * 50;
      const [m2, c2] = r.wahl([
        ["Wasser", 1480],
        ["Körpergewebe", 1540],
        ["Stahl", 5100],
      ] as const);
      return {
        angabe: `Ein Ton mit $${f}\\,\\text{Hz}$ läuft aus Luft ($340\\,\\text{m/s}$) in ${m2} ($${c2}\\,\\text{m/s}$) über. Wie groß ist die Wellenlänge in ${m2} in m?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${c2}/${f}`,
            einheit: "m",
            fehler: [
              { wert: `340/${f}`, meldung: "Das ist die Wellenlänge in Luft. Beim Übergang bleibt die **Frequenz** gleich, die Wellenlänge ändert sich mit der Geschwindigkeit." },
            ],
          },
        ],
        hinweis: "Welche Größe bleibt beim Mediumwechsel gleich?",
        loesung: `**Ansatz:** Die Frequenz kommt von der Quelle und bleibt beim Übergang $${f}\\,\\text{Hz}$.\n---\n**Rechnung:** $\\lambda_2 = \\dfrac{c_2}{f} = \\dfrac{${c2}\\,\\text{m/s}}{${f}\\,\\text{s}^{-1}} = ${tz(c2 / f, 4)}\\,\\text{m}$.\n---\n**Vergleich:** In Luft waren es $${tz(340 / f, 4)}\\,\\text{m}$. Die Welle wird im Verhältnis der Geschwindigkeiten länger.`,
      };
    },
  }),
  drill({
    id: "p8-d-saite",
    kapitel: K,
    titel: "Eigenfrequenzen einer Saite",
    niveau: 2,
    erzeuge: (r) => {
      const L = r.int(30, 120) / 100;
      const c = r.int(10, 50) * 10;
      const n = r.int(2, 4);
      return {
        angabe: `Auf einer $${tz(L * 100)}\\,\\text{cm}$ langen, beidseitig eingespannten Saite laufen Wellen mit $${c}\\,\\text{m/s}$. Wie groß ist die Frequenz des ${n}. Teiltons ($n = ${n}$) in Hz?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${n}*${c}/(2*${L})`,
            einheit: "Hz",
            fehler: [{ wert: `${n}*${c}/${L}`, meldung: "Im Grundton liegt nur eine halbe Wellenlänge auf der Saite, also $\\lambda_1 = 2L$ und $f_1 = c/(2L)$." }],
          },
        ],
        hinweis: "f_n = n·c/(2L), Länge in Metern.",
        loesung: `**Grundton:** Knoten an beiden Enden, $\\lambda_1 = 2L = ${tz(2 * L, 2)}\\,\\text{m}$ und $f_1 = \\dfrac{c}{2L} = ${tz(c / (2 * L), 2)}\\,\\text{Hz}$.\n---\n**Teilton:** $f_${n} = ${n}\\cdot f_1 = ${tz((n * c) / (2 * L), 2)}\\,\\text{Hz}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-saite-kraft",
    kapitel: K,
    titel: "Saite: Spannkraft, Geschwindigkeit, Grundton",
    niveau: 3,
    erzeuge: (r) => {
      const mu = r.int(5, 40) / 10; // g/m
      const F = r.int(4, 30) * 5; // N
      const L = r.int(40, 90) / 100;
      const c = Math.sqrt(F / (mu / 1000));
      return {
        angabe: `Eine $${tz(L * 100)}\\,\\text{cm}$ lange Saite mit $${tz(mu)}\\,\\text{g}$ pro Meter ist mit $${F}\\,\\text{N}$ gespannt. Berechne die Grundfrequenz in Hz.`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(${F}/(${mu}/1000))/(2*${L})`,
            einheit: "Hz",
            fehler: [
              { wert: `sqrt(${F}/${mu})/(2*${L})`, meldung: "Die Massenbelegung muss in kg/m stehen. Teile die Gramm durch $1000$." },
              { wert: `sqrt(${F}/(${mu}/1000))/${L}`, meldung: "Im Grundton gilt $\\lambda = 2L$, nicht $\\lambda = L$." },
            ],
          },
        ],
        hinweis: "Erst c = √(F/μ) mit μ in kg/m, dann f₁ = c/(2L).",
        loesung: `**Umrechnen:** $\\mu = ${tz(mu)}\\,\\text{g/m} = ${tz(mu / 1000, 5)}\\,\\text{kg/m}$.\n---\n**Wellengeschwindigkeit:** $c = \\sqrt{F/\\mu} = \\sqrt{${F}\\,\\text{N} : ${tz(mu / 1000, 5)}\\,\\text{kg/m}} = ${tz(c, 1)}\\,\\text{m/s}$.\n---\n**Grundton:** $f_1 = \\dfrac{c}{2L} = \\dfrac{${tz(c, 1)}\\,\\text{m/s}}{${tz(2 * L, 2)}\\,\\text{m}} = ${tz(c / (2 * L), 1)}\\,\\text{Hz}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-pfeife",
    kapitel: K,
    titel: "Offene und gedackte Pfeife",
    niveau: 2,
    erzeuge: (r) => {
      const L = r.int(10, 200) / 100;
      const offen = r.zufall() < 0.5;
      return {
        angabe: `Eine ${offen ? "beidseitig offene" : "an einem Ende geschlossene (gedackte)"} Pfeife ist $${tz(L)}\\,\\text{m}$ lang ($c = 340\\,\\text{m/s}$). Wie groß ist ihre Grundfrequenz in Hz?`,
        teile: [
          {
            typ: "zahl",
            loesung: offen ? `340/(2*${L})` : `340/(4*${L})`,
            einheit: "Hz",
            fehler: [
              offen
                ? { wert: `340/(4*${L})`, meldung: "Das ist die Formel der gedackten Pfeife. Bei der offenen liegen an beiden Enden Bäuche, also $L = \\lambda/2$." }
                : { wert: `340/(2*${L})`, meldung: "Das ist die Formel der offenen Pfeife. Bei der gedackten liegt am geschlossenen Ende ein Knoten, also $L = \\lambda/4$." },
            ],
          },
        ],
        hinweis: offen ? "Bäuche an beiden Enden: L = λ/2." : "Knoten am geschlossenen, Bauch am offenen Ende: L = λ/4.",
        loesung: `**Randbedingungen:** ${offen ? "Zwei offene Enden, zwei Bäuche. Dazwischen passt eine halbe Wellenlänge." : "Ein Knoten am geschlossenen und ein Bauch am offenen Ende. Dazwischen passt eine Viertelwellenlänge."}\n---\n**Wellenlänge:** $\\lambda = ${offen ? "2L" : "4L"} = ${tz(offen ? 2 * L : 4 * L, 3)}\\,\\text{m}$.\n---\n**Frequenz:** $f = c/\\lambda = ${tz(offen ? 340 / (2 * L) : 340 / (4 * L), 1)}\\,\\text{Hz}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-schwebung",
    kapitel: K,
    titel: "Schwebungsfrequenz",
    niveau: 1,
    erzeuge: (r) => {
      const f1 = r.int(200, 900);
      const f2 = f1 + r.intOhne0(-8, 8);
      return {
        angabe: `Zwei Töne mit $${f1}\\,\\text{Hz}$ und $${f2}\\,\\text{Hz}$ erklingen gleichzeitig. Wie groß ist die Schwebungsfrequenz in Hz?`,
        teile: [
          {
            typ: "zahl",
            loesung: `abs(${f1}-${f2})`,
            einheit: "Hz",
            fehler: [{ wert: `abs(${f1}-${f2})/2`, meldung: "Das ist die Frequenz des Kosinusfaktors. Die Lautstärke ist pro Kosinusperiode zweimal maximal, also $f_S = |f_1 - f_2|$." }],
          },
        ],
        hinweis: "f_S = |f₁ − f₂|.",
        loesung: `**Ansatz:** Die Lautstärke schwankt mit $f_S = |f_1 - f_2|$.\n---\n$f_S = |${f1} - ${f2}|\\,\\text{Hz} = ${Math.abs(f1 - f2)}\\,\\text{Hz}$. Man hört einen Ton von $${tz((f1 + f2) / 2, 1)}\\,\\text{Hz}$, der so oft pro Sekunde anschwillt.`,
      };
    },
  }),
  drill({
    id: "p8-d-interferenz",
    kapitel: K,
    titel: "Maximum oder Minimum?",
    niveau: 2,
    erzeuge: (r) => {
      const lambda = r.wahl([0.2, 0.25, 0.4, 0.5, 0.8, 1.0] as const);
      const k = r.int(0, 6);
      const max = r.zufall() < 0.5;
      const ds = (max ? k : k + 0.5) * lambda;
      const s1 = r.int(20, 60) / 10;
      const f = 340 / lambda;
      return {
        angabe: `Zwei gleichphasige Lautsprecher spielen $${tz(f, 1)}\\,\\text{Hz}$ ($c = 340\\,\\text{m/s}$). Ein Hörer ist $${tz(s1, 2)}\\,\\text{m}$ vom einen und $${tz(s1 + ds, 3)}\\,\\text{m}$ vom anderen entfernt. Hört er ein Maximum oder ein Minimum?`,
        teile: [
          {
            typ: "auswahl",
            optionen: ["Maximum (konstruktiv)", "Minimum (destruktiv)"],
            richtig: [max ? 0 : 1],
            fehler: [
              {
                wert: max ? 1 : 0,
                meldung: "Teile den Gangunterschied durch die Wellenlänge. Ganze Zahl bedeutet Maximum, halbzahlig bedeutet Minimum.",
              },
            ],
          },
        ],
        hinweis: "Gangunterschied in Wellenlängen ausdrücken.",
        loesung: `**Wellenlänge:** $\\lambda = c/f = ${tz(lambda, 2)}\\,\\text{m}$.\n---\n**Gangunterschied:** $\\Delta s = ${tz(ds, 3)}\\,\\text{m} = ${tz(ds / lambda, 1)}\\,\\lambda$.\n---\n${max ? "Ganzzahliges Vielfaches: Berg trifft Berg, Maximum." : "Halbzahliges Vielfaches: Berg trifft Tal, Minimum."}`,
      };
    },
  }),
  drill({
    id: "p8-d-ausloeschung",
    kapitel: K,
    titel: "Tiefste Frequenz mit Auslöschung",
    niveau: 3,
    erzeuge: (r) => {
      const ds = r.int(10, 120) / 100;
      const n = r.int(0, 2);
      const namen = ["tiefste", "zweittiefste", "dritttiefste"];
      return {
        angabe: `An einem Platz ist der Weg zum einen von zwei gleichphasigen Lautsprechern $${tz(ds, 2)}\\,\\text{m}$ länger als zum anderen ($c = 340\\,\\text{m/s}$). Welches ist die ${namen[n]} Frequenz, die dort ausgelöscht wird? Antwort in Hz.`,
        teile: [
          {
            typ: "zahl",
            loesung: `(${n}+0.5)*340/${ds}`,
            einheit: "Hz",
            fehler: [{ wert: `(${n}+1)*340/${ds}`, meldung: "Bei dieser Frequenz ist der Gangunterschied ein ganzzahliges Vielfaches von $\\lambda$, also ein Maximum. Auslöschung verlangt $\\Delta s = (n + \\tfrac12)\\lambda$." }],
          },
        ],
        hinweis: "Δs = (n + ½)·λ mit λ = c/f, nach f umstellen.",
        loesung: `**Bedingung:** Auslöschung bei $\\Delta s = (n + \\tfrac12)\\lambda$. Mit $\\lambda = c/f$ folgt $f = (n + \\tfrac12)\\,c/\\Delta s$.\n---\n**Grundwert:** $c/\\Delta s = 340 : ${tz(ds, 2)}\\,\\text{Hz} = ${tz(340 / ds, 1)}\\,\\text{Hz}$.\n---\n**Ergebnis:** Mit $n = ${n}$ ist $f = ${tz(n + 0.5, 1)}\\cdot ${tz(340 / ds, 1)}\\,\\text{Hz} = ${tz(((n + 0.5) * 340) / ds, 1)}\\,\\text{Hz}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-doppler",
    kapitel: K,
    titel: "Doppler-Effekt bei bewegter Quelle",
    niveau: 2,
    erzeuge: (r) => {
      const f = r.int(2, 20) * 50;
      const v = r.int(5, 50);
      const nah = r.zufall() < 0.5;
      return {
        angabe: `Eine Schallquelle ($${f}\\,\\text{Hz}$) bewegt sich mit $${v}\\,\\text{m/s}$ ${nah ? "auf einen ruhenden Beobachter zu" : "von einem ruhenden Beobachter weg"} ($c = 340\\,\\text{m/s}$). Welche Frequenz hört er in Hz?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${f}*340/(340${nah ? "-" : "+"}${v})`,
            einheit: "Hz",
            fehler: [
              { wert: `${f}*340/(340${nah ? "+" : "-"}${v})`, meldung: "Das Vorzeichen ist vertauscht. Annähern macht den Ton höher, Entfernen tiefer." },
            ],
          },
        ],
        hinweis: "Bewegte Quelle: f' = f·c/(c ∓ v), Minus beim Annähern.",
        loesung: `**Ansatz:** Die Quelle bewegt sich, also $f' = f\\cdot\\dfrac{c}{c ${nah ? "-" : "+"} v_Q}$.\n---\n**Rechnung:** $f' = ${f}\\,\\text{Hz}\\cdot\\dfrac{340}{${nah ? 340 - v : 340 + v}} = ${tz((f * 340) / (nah ? 340 - v : 340 + v), 1)}\\,\\text{Hz}$.\n---\n**Kontrolle:** ${nah ? "Annähern: höher als" : "Entfernen: tiefer als"} $${f}\\,\\text{Hz}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-doppler-beobachter",
    kapitel: K,
    titel: "Doppler-Effekt bei bewegtem Beobachter",
    niveau: 2,
    erzeuge: (r) => {
      const f = r.int(4, 20) * 50;
      // ab 30 m/s: darunter unterscheiden sich Quellen- und Beobachterformel um weniger als 0,5 % (Toleranz)
      const v = r.int(30, 60);
      const nah = r.zufall() < 0.5;
      return {
        angabe: `Eine ruhende Sirene sendet $${f}\\,\\text{Hz}$. Ein Fahrzeug fährt mit $${v}\\,\\text{m/s}$ ${nah ? "auf sie zu" : "von ihr weg"} ($c = 340\\,\\text{m/s}$, Windstille). Welche Frequenz hört der Fahrer in Hz?`,
        teile: [
          {
            typ: "zahl",
            loesung: `${f}*(340${nah ? "+" : "-"}${v})/340`,
            einheit: "Hz",
            fehler: [
              { wert: `${f}*340/(340${nah ? "-" : "+"}${v})`, meldung: "Das ist die Formel der bewegten **Quelle**. Hier ruht die Sirene, der Beobachter bewegt sich: $f' = f(c \\pm v_B)/c$." },
            ],
          },
        ],
        hinweis: "Bewegter Beobachter: f' = f·(c ± v)/c, Plus beim Annähern.",
        loesung: `**Ansatz:** Der Beobachter bewegt sich durch die ruhende Luft, die Wellenberge liegen normal dicht. Also $f' = f\\cdot\\dfrac{c ${nah ? "+" : "-"} v_B}{c}$.\n---\n**Rechnung:** $f' = ${f}\\,\\text{Hz}\\cdot\\dfrac{${nah ? 340 + v : 340 - v}}{340} = ${tz((f * (nah ? 340 + v : 340 - v)) / 340, 1)}\\,\\text{Hz}$.\n---\n**Kontrolle:** ${nah ? "Entgegenfahren: mehr Wellenberge pro Sekunde, höherer Ton." : "Wegfahren: weniger Wellenberge pro Sekunde, tieferer Ton."}`,
      };
    },
  }),
  drill({
    id: "p8-d-pegel",
    kapitel: K,
    titel: "Schallpegel aus Intensität",
    niveau: 2,
    erzeuge: (r) => {
      const m = r.int(1, 9);
      const e = r.int(-11, -1);
      const I = m * 10 ** e;
      return {
        angabe: `Die Schallintensität beträgt $${m}\\cdot 10^{${e}}\\,\\text{W/m}^2$. Wie groß ist der Schallpegel in dB?`,
        teile: [
          {
            typ: "zahl",
            loesung: `10*lg(${m}e${e}/1e-12)`,
            einheit: "dB",
            fehler: [{ wert: `lg(${m}e${e}/1e-12)`, meldung: "Der Faktor $10$ fehlt. Ohne ihn erhältst du Bel, nicht Dezibel." }],
          },
        ],
        hinweis: "L = 10·lg(I/I₀), I₀ = 10⁻¹² W/m².",
        loesung: `**Verhältnis:** $\\dfrac{I}{I_0} = \\dfrac{${m}\\cdot 10^{${e}}}{10^{-12}} = ${m}\\cdot 10^{${e + 12}}$.\n---\n**Pegel:** $L = 10\\lg(${m}\\cdot 10^{${e + 12}})\\,\\text{dB} = ${tz(10 * Math.log10(I / 1e-12), 1)}\\,\\text{dB}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-pegel-quellen",
    kapitel: K,
    titel: "Pegel mehrerer gleicher Quellen",
    niveau: 2,
    erzeuge: (r) => {
      const L = r.int(40, 95);
      const n = r.wahl([2, 3, 4, 5, 10, 20, 100] as const);
      return {
        angabe: `Eine Schallquelle erzeugt an einem Ort $${L}\\,\\text{dB}$. Welcher Pegel herrscht dort, wenn ${n} gleich laute Quellen gleichzeitig wirken? Antwort in dB.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${L}+10*lg(${n})`,
            einheit: "dB",
            fehler: [{ wert: `${n}*${L}`, meldung: "Dezibel darf man nicht addieren oder vervielfachen. Addieren darf man die Intensitäten: $n$ Quellen ergeben $+10\\lg n$ Dezibel." }],
          },
        ],
        hinweis: "Die Intensitäten addieren sich: +10·lg(n) dB.",
        loesung: `**Ansatz:** ${n} gleiche Quellen liefern die ${n}-fache Intensität. Der Pegel steigt um $10\\lg ${n}\\,\\text{dB}$.\n---\n**Rechnung:** $L = ${L}\\,\\text{dB} + ${tz(10 * Math.log10(n), 1)}\\,\\text{dB} = ${tz(L + 10 * Math.log10(n), 1)}\\,\\text{dB}$.`,
      };
    },
  }),
  drill({
    id: "p8-d-pegel-abstand",
    kapitel: K,
    titel: "Pegel in einem anderen Abstand",
    niveau: 3,
    erzeuge: (r) => {
      const L1 = r.int(70, 110);
      const r1 = r.int(1, 10);
      const k = r.wahl([2, 3, 4, 5, 10] as const);
      const r2 = r1 * k;
      return {
        angabe: `In $${r1}\\,\\text{m}$ Abstand von einer kleinen Schallquelle misst man $${L1}\\,\\text{dB}$. Welcher Pegel herrscht in $${r2}\\,\\text{m}$ Abstand (gleichmäßige Abstrahlung, keine Reflexionen)? Antwort in dB.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${L1}+10*lg((${r1}/${r2})^2)`,
            einheit: "dB",
            fehler: [{ wert: `${L1}+10*lg(${r1}/${r2})`, meldung: "Die Intensität fällt mit $1/r^2$, nicht mit $1/r$. Der Abstandsfaktor muss quadriert werden." }],
          },
        ],
        hinweis: "I ∝ 1/r². Faktor k im Abstand bedeutet −20·lg(k) dB.",
        loesung: `**Modell:** Abstandsgesetz $I \\propto 1/r^2$. Der Abstand wächst um den Faktor ${k}, die Intensität sinkt auf $1/${k * k}$.\n---\n**Pegeländerung:** $10\\lg\\tfrac{1}{${k * k}}\\,\\text{dB} = ${tz(-20 * Math.log10(k), 1)}\\,\\text{dB}$.\n---\n**Ergebnis:** $L_2 = ${tz(L1 - 20 * Math.log10(k), 1)}\\,\\text{dB}$.`,
      };
    },
  }),
];
