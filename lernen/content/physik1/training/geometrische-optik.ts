import { drill, tz, type Drill } from "@/lib/lernen/training";

const K = "geometrische-optik";
const grad = (x: number) => (x * 180) / Math.PI;
const rad = (x: number) => (x * Math.PI) / 180;

const MEDIEN = [
  ["Wasser", 1.33],
  ["Plexiglas", 1.49],
  ["Kronglas", 1.52],
  ["Flintglas", 1.65],
  ["Diamant", 2.42],
] as const;

export const DRILLS: Drill[] = [
  drill({
    id: "p15-d-snellius",
    kapitel: K,
    titel: "Brechungswinkel aus Luft",
    niveau: 1,
    erzeuge: (r) => {
      const [name, n] = r.wahl(MEDIEN);
      // ab 30° unterscheidet sich das Fehlerbild a/n um mehr als 2 % von der Lösung (bei kleinen Winkeln fiele es in die Toleranz)
      const a = r.int(30, 80);
      const b = grad(Math.asin(Math.sin(rad(a)) / n));
      return {
        angabe: `Licht fällt aus Luft unter $${a}^\\circ$ gegen das Lot auf ${name} ($n = ${tz(n)}$). Berechne den Brechungswinkel in Grad auf eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(asin(sin(inRad(${a}))/${n}))`,
            einheit: "°",
            fehler: [{ wert: `${a}/${n}`, meldung: "Das Brechungsgesetz verbindet die **Sinuswerte**, nicht die Winkel: $\\sin\\beta = \\sin\\alpha/n$." }],
          },
        ],
        hinweis: "Snellius mit $n_1 = 1$: $\\sin\\beta = \\sin\\alpha/n$.",
        loesung: `**Ansatz:** Brechungsgesetz von Snellius mit $n_1 = 1$ für Luft: $\\sin ${a}^\\circ = ${tz(n)}\\cdot\\sin\\beta$.\n---\n**Rechnung:** Wir teilen durch $${tz(n)}$: $\\sin\\beta = ${tz(Math.sin(rad(a)) / n, 4)}$, also $\\beta = ${tz(b, 1)}^\\circ$.\n---\n**Probe:** Ins optisch dichtere Medium wird zum Lot hin gebrochen, und tatsächlich ist $${tz(b, 1)}^\\circ < ${a}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p15-d-austritt",
    kapitel: K,
    titel: "Brechung beim Austritt in Luft",
    niveau: 2,
    erzeuge: (r) => {
      const [name, n] = r.wahl(MEDIEN.slice(0, 4));
      const grenz = grad(Math.asin(1 / n));
      const a = r.int(5, Math.floor(grenz) - 2);
      const b = grad(Math.asin(n * Math.sin(rad(a))));
      return {
        angabe: `Ein Strahl trifft in ${name} ($n = ${tz(n)}$) unter $${a}^\\circ$ gegen das Lot auf die Grenzfläche zur Luft. Unter welchem Winkel gegen das Lot tritt er aus? Eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(asin(${n}*sin(inRad(${a}))))`,
            einheit: "°",
            fehler: [{ wert: `inGrad(asin(sin(inRad(${a}))/${n}))`, meldung: "Die Brechzahlen sind vertauscht. Das Licht kommt aus dem Stoff, also ist $n_1 = n$ und $n_2 = 1$. Beim Austritt wird der Winkel größer." }],
          },
        ],
        hinweis: "Jetzt ist $n_1 = n$ und $n_2 = 1$.",
        loesung: `**Ansatz:** Snellius mit $n_1 = ${tz(n)}$ und $n_2 = 1$: $${tz(n)}\\cdot\\sin ${a}^\\circ = \\sin\\beta$.\n---\n**Rechnung:** $\\sin\\beta = ${tz(n * Math.sin(rad(a)), 4)}$, also $\\beta = ${tz(b, 1)}^\\circ$.\n---\n**Probe:** Vom Lot weg gebrochen, wie beim Übergang ins optisch dünnere Medium erwartet. Der Einfallswinkel liegt unter dem Grenzwinkel $${tz(grenz, 1)}^\\circ$, also tritt Licht aus.`,
      };
    },
  }),
  drill({
    id: "p15-d-grenzwinkel",
    kapitel: K,
    titel: "Grenzwinkel der Totalreflexion",
    niveau: 1,
    erzeuge: (r) => {
      const [name, n] = r.wahl(MEDIEN);
      return {
        angabe: `Berechne den Grenzwinkel der Totalreflexion für ${name} ($n = ${tz(n)}$) gegen Luft. Eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            loesung: `inGrad(asin(1/${n}))`,
            einheit: "°",
            fehler: [{ wert: `90-inGrad(asin(1/${n}))`, meldung: "Das ist der Winkel gegen die **Fläche**. Der Grenzwinkel wird gegen das Lot gemessen." }],
          },
        ],
        hinweis: "Gegen Luft gilt $\\sin\\alpha_g = 1/n$.",
        loesung: `**Ansatz:** Beim Grenzwinkel wäre der Brechungswinkel $90^\\circ$. Mit $\\sin 90^\\circ = 1$ folgt $\\sin\\alpha_g = 1/n$.\n---\n**Rechnung:** $\\sin\\alpha_g = \\dfrac{1}{${tz(n)}} = ${tz(1 / n, 4)}$, also $\\alpha_g = ${tz(grad(Math.asin(1 / n)), 1)}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p15-d-faser",
    kapitel: K,
    titel: "Grenzwinkel und Führungswinkel in der Glasfaser",
    niveau: 2,
    erzeuge: (r) => {
      const n1 = r.wahl([1.48, 1.5, 1.52, 1.62] as const);
      const dn = r.wahl([0.02, 0.04, 0.06, 0.1] as const);
      const n2 = Number((n1 - dn).toFixed(2));
      const ag = grad(Math.asin(n2 / n1));
      return {
        angabe: `Eine Glasfaser hat einen Kern mit $n_1 = ${tz(n1)}$ und einen Mantel mit $n_2 = ${tz(n2)}$. Berechne den Grenzwinkel an der Kern-Mantel-Grenze und den größten Winkel, unter dem ein Strahl gegen die Faserachse laufen darf (beides in Grad, eine Nachkommastelle).`,
        teile: [
          {
            typ: "zahl",
            label: "Grenzwinkel in Grad",
            loesung: `inGrad(asin(${n2}/${n1}))`,
            einheit: "°",
            fehler: [{ wert: `inGrad(asin(1/${n1}))`, meldung: "Das wäre der Grenzwinkel gegen **Luft**. Am Kern grenzt aber der Mantel: $\\sin\\alpha_g = n_2/n_1$." }],
          },
          {
            typ: "zahl",
            label: "Winkel zur Achse in Grad",
            loesung: `90-inGrad(asin(${n2}/${n1}))`,
            einheit: "°",
          },
        ],
        hinweis: "Grenzwinkel mit $\\sin\\alpha_g = n_2/n_1$. Lot und Faserachse stehen senkrecht aufeinander.",
        loesung: `**Ansatz:** An der Kern-Mantel-Grenze läuft Licht ins optisch dünnere Medium: $\\sin\\alpha_g = n_2/n_1$.\n---\n**Grenzwinkel:** $\\sin\\alpha_g = \\dfrac{${tz(n2)}}{${tz(n1)}} = ${tz(n2 / n1, 4)}$, also $\\alpha_g = ${tz(ag, 1)}^\\circ$.\n---\n**Winkel zur Achse:** Das Lot auf die Wand steht senkrecht zur Achse, also höchstens $90^\\circ - ${tz(ag, 1)}^\\circ = ${tz(90 - ag, 1)}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p15-d-prisma",
    kapitel: K,
    titel: "Ablenkung am Prisma",
    niveau: 3,
    erzeuge: (r) => {
      const g = r.wahl([45, 60] as const);
      const n = r.wahl([1.5, 1.52, 1.6] as const);
      const a1 = r.int(40, 70);
      const b1 = grad(Math.asin(Math.sin(rad(a1)) / n));
      const b2 = g - b1;
      const a2 = grad(Math.asin(n * Math.sin(rad(b2))));
      return {
        angabe: `Ein Prisma mit dem brechenden Winkel $\\gamma = ${g}^\\circ$ hat die Brechzahl $n = ${tz(n)}$. Ein Strahl trifft die erste Fläche unter $\\alpha_1 = ${a1}^\\circ$. Berechne die Gesamtablenkung in Grad auf eine Nachkommastelle.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${a1}+inGrad(asin(${n}*sin(inRad(${g}-inGrad(asin(sin(inRad(${a1}))/${n}))))))-${g}`,
            einheit: "°",
            fehler: [
              {
                wert: `${a1}+inGrad(asin(${n}*sin(inRad(${g}-inGrad(asin(sin(inRad(${a1}))/${n}))))))`,
                meldung: "Der brechende Winkel fehlt. Die Lote der beiden Flächen sind um $\\gamma$ gegeneinander gedreht: $\\delta = \\alpha_1 + \\alpha_2 - \\gamma$.",
              },
            ],
          },
        ],
        hinweis: "Erst $\\beta_1$ aus Snellius, dann $\\beta_2 = \\gamma - \\beta_1$, dann $\\sin\\alpha_2 = n\\sin\\beta_2$.",
        loesung: `**Ansatz:** Zweimal Snellius, verbunden durch $\\beta_1 + \\beta_2 = \\gamma$. Ablenkung $\\delta = \\alpha_1 + \\alpha_2 - \\gamma$.\n---\n**Erste Fläche:** $\\sin\\beta_1 = \\sin ${a1}^\\circ/${tz(n)}$, also $\\beta_1 = ${tz(b1, 1)}^\\circ$. Dann $\\beta_2 = ${g}^\\circ - ${tz(b1, 1)}^\\circ = ${tz(b2, 1)}^\\circ$.\n---\n**Zweite Fläche:** $\\sin\\alpha_2 = ${tz(n)}\\cdot\\sin ${tz(b2, 1)}^\\circ = ${tz(n * Math.sin(rad(b2)), 3)}$, also $\\alpha_2 = ${tz(a2, 1)}^\\circ$.\n---\n**Ablenkung:** $\\delta = ${a1}^\\circ + ${tz(a2, 1)}^\\circ - ${g}^\\circ = ${tz(a1 + a2 - g, 1)}^\\circ$.`,
      };
    },
  }),
  drill({
    id: "p15-d-bildweite",
    kapitel: K,
    titel: "Bildweite und Abbildungsmaßstab (Sammellinse)",
    niveau: 1,
    erzeuge: (r) => {
      // ganzzahlige Bildweiten: b = f*g/(g-f) mit g = f + d, d | f^2
      const f = r.wahl([4, 6, 8, 10, 12, 15, 20] as const);
      const teiler = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40].filter((d) => (f * f) % d === 0 && d !== f);
      const d = r.wahl(teiler);
      const g = f + d;
      const b = (f * g) / d;
      return {
        angabe: `Ein Gegenstand steht $${g}\\,\\text{cm}$ vor einer Sammellinse mit $f = ${f}\\,\\text{cm}$. Berechne die Bildweite in cm und den Abbildungsmaßstab $V = -b/g$.`,
        teile: [
          {
            typ: "zahl",
            label: "Bildweite in cm",
            loesung: `1/(1/${f}-1/${g})`,
            einheit: "cm",
            fehler: [{ wert: `1/${f}-1/${g}`, meldung: "Das ist erst $\\tfrac1b$. Bilde noch den Kehrwert." }],
          },
          {
            typ: "zahl",
            label: "V",
            loesung: `-(1/(1/${f}-1/${g}))/${g}`,
            fehler: [{ wert: `(1/(1/${f}-1/${g}))/${g}`, meldung: "Ein reelles Bild einer Sammellinse steht auf dem Kopf: $V = -b/g$ ist negativ." }],
          },
        ],
        hinweis: "$\\tfrac1b = \\tfrac1f - \\tfrac1g$, dann Kehrwert.",
        loesung: `**Ansatz:** Abbildungsgleichung nach $\\tfrac1b$ umgestellt: $\\dfrac{1}{b} = \\dfrac{1}{${f}} - \\dfrac{1}{${g}} = \\dfrac{${d}}{${f * g}}$, in $\\tfrac{1}{\\text{cm}}$.\n---\n**Bildweite:** Kehrwert, $b = ${tz(b)}\\,\\text{cm}$.\n---\n**Maßstab:** $V = -\\dfrac{${tz(b)}\\,\\text{cm}}{${g}\\,\\text{cm}} = ${tz(-b / g, 3)}$. Das Bild ist reell, umgekehrt und ${b > g ? "vergrößert" : b < g ? "verkleinert" : "gleich groß"}.`,
      };
    },
  }),
  drill({
    id: "p15-d-virtuell",
    kapitel: K,
    titel: "Virtuelles Bild (Lupe oder Zerstreuungslinse)",
    niveau: 2,
    erzeuge: (r) => {
      const zerstreu = r.zufall() < 0.5;
      const fb = r.wahl([5, 10, 12, 15, 20] as const);
      const f = zerstreu ? -fb : fb;
      const g = zerstreu ? r.int(2, 8) * 5 : r.int(1, fb - 1);
      const b = 1 / (1 / f - 1 / g);
      return {
        angabe: `Ein Gegenstand steht $${g}\\,\\text{cm}$ vor einer ${zerstreu ? "Zerstreuungslinse" : "Sammellinse"} mit $f = ${f}\\,\\text{cm}$. Berechne die Bildweite in cm (mit Vorzeichen) und den Abbildungsmaßstab.`,
        teile: [
          {
            typ: "zahl",
            label: "Bildweite in cm",
            loesung: `1/(1/(${f})-1/${g})`,
            einheit: "cm",
            fehler: [{ wert: `-1/(1/(${f})-1/${g})`, meldung: "Das Vorzeichen stimmt nicht. Das Bild ist virtuell, also ist $b$ negativ." }],
          },
          { typ: "zahl", label: "V", loesung: `-(1/(1/(${f})-1/${g}))/${g}` },
        ],
        hinweis: zerstreu ? "Brennweite negativ einsetzen." : "Der Gegenstand liegt innerhalb der Brennweite.",
        loesung: `**Ansatz:** $\\dfrac1b = \\dfrac1f - \\dfrac1g$ mit $f = ${f}\\,\\text{cm}$ und $g = ${g}\\,\\text{cm}$.\n---\n**Bildweite:** $\\dfrac{1}{b} = \\dfrac{1}{${f}} - \\dfrac{1}{${g}}$, also $b = ${tz(b, 2)}\\,\\text{cm}$. Negativ heißt: virtuelles Bild auf der Seite des Gegenstands.\n---\n**Maßstab:** $V = -b/g = ${tz(-b / g, 3)}$: aufrecht und ${-b / g > 1 ? "vergrößert" : "verkleinert"}.`,
      };
    },
  }),
  drill({
    id: "p15-d-hohlspiegel",
    kapitel: K,
    titel: "Bild am Hohlspiegel",
    niveau: 2,
    erzeuge: (r) => {
      const R = r.wahl([12, 20, 24, 30, 40] as const);
      const f = R / 2;
      const teiler = [1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 20, 25].filter((d) => (f * f) % d === 0 && d !== f);
      const d = r.wahl(teiler);
      const g = f + d;
      const b = (f * g) / d;
      return {
        angabe: `Ein Hohlspiegel hat den Krümmungsradius $R = ${R}\\,\\text{cm}$. Ein Gegenstand steht $${g}\\,\\text{cm}$ vor ihm. Berechne die Bildweite in cm und den Abbildungsmaßstab.`,
        teile: [
          {
            typ: "zahl",
            label: "Bildweite in cm",
            loesung: `1/(1/${f}-1/${g})`,
            einheit: "cm",
            fehler: [{ wert: `1/(1/${R}-1/${g})`, meldung: "Die Brennweite ist nicht $R$, sondern $R/2$: Der Brennpunkt liegt in der Mitte zwischen Spiegel und Krümmungsmittelpunkt." }],
          },
          { typ: "zahl", label: "V", loesung: `-(1/(1/${f}-1/${g}))/${g}` },
        ],
        hinweis: "Zuerst $f = R/2$, dann die Abbildungsgleichung.",
        loesung: `**Ansatz:** Für Kugelspiegel ist $f = R/2 = ${f}\\,\\text{cm}$. Dann gilt dieselbe Abbildungsgleichung wie für Linsen.\n---\n**Bildweite:** $\\dfrac1b = \\dfrac1{${f}} - \\dfrac1{${g}} = \\dfrac{${d}}{${f * g}}$, also $b = ${tz(b)}\\,\\text{cm}$ vor dem Spiegel.\n---\n**Maßstab:** $V = -\\dfrac{${tz(b)}}{${g}} = ${tz(-b / g, 3)}$: reell, umgekehrt und ${b > g ? "vergrößert" : b < g ? "verkleinert" : "gleich groß"}.`,
      };
    },
  }),
  drill({
    id: "p15-d-brechkraft",
    kapitel: K,
    titel: "Brechkraft und Brennweite",
    niveau: 1,
    erzeuge: (r) => {
      const D1 = r.wahl([2.5, 4, 5, 8, 10] as const);
      const D2 = r.wahl([-0.5, -1, -1.5, -2, 1, 1.5, 3] as const);
      const D = D1 + D2;
      return {
        angabe: `Eine Linse mit $f_1 = ${tz(100 / D1)}\\,\\text{cm}$ wird direkt mit einer Linse von $${tz(D2)}\\,\\text{dpt}$ kombiniert. Berechne die Gesamtbrechkraft in dpt und die Gesamtbrennweite in cm.`,
        teile: [
          {
            typ: "zahl",
            label: "Gesamtbrechkraft in dpt",
            loesung: `${D1}+(${D2})`,
            einheit: "dpt",
            fehler: [{ wert: `1/${tz(100 / D1).replace("{,}", ".")}+(${D2})`, meldung: "Die Brennweite muss für Dioptrien in **Metern** stehen. Rechne $D_1 = 1/f_1$ mit $f_1$ in m." }],
          },
          { typ: "zahl", label: "Brennweite in cm", loesung: `100/(${D1}+(${D2}))`, einheit: "cm" },
        ],
        hinweis: "Brechkräfte dicht liegender Linsen addieren sich. $D = 1/f$ mit $f$ in Metern.",
        loesung: `**Ansatz:** Erst $D_1 = 1/f_1$ mit $f_1$ in Metern, dann addieren.\n---\n**Brechkräfte:** $D_1 = \\dfrac{1}{${tz(1 / D1)}\\,\\text{m}} = ${tz(D1)}\\,\\text{dpt}$, also $D = ${tz(D1)}\\,\\text{dpt} + (${tz(D2)}\\,\\text{dpt}) = ${tz(D)}\\,\\text{dpt}$.\n---\n**Brennweite:** $f = \\dfrac{1}{D} = ${tz(1 / D, 4)}\\,\\text{m} = ${tz(100 / D, 2)}\\,\\text{cm}$.`,
      };
    },
  }),
  drill({
    id: "p15-d-geraete",
    kapitel: K,
    titel: "Vergrößerung von Lupe, Mikroskop, Fernrohr",
    niveau: 2,
    erzeuge: (r) => {
      const art = r.wahl(["lupe", "mikroskop", "fernrohr"] as const);
      if (art === "lupe") {
        const f = r.wahl([2, 2.5, 4, 5, 6.25, 10] as const);
        return {
          angabe: `Wie groß ist die Vergrößerung einer Lupe mit $f = ${tz(f)}\\,\\text{cm}$ bei entspanntem Auge?`,
          teile: [{ typ: "zahl", loesung: `25/${f}`, fehler: [{ wert: `${f}/25`, meldung: "Die deutliche Sehweite steht im Zähler: $v = s_0/f$. Eine Lupe vergrößert, $v > 1$." }] }],
          hinweis: "Deutliche Sehweite 25 cm, $v = s_0/f$.",
          loesung: `**Ansatz:** Der Gegenstand liegt im Brennpunkt, das Auge sieht ihn unter $\\tan\\varepsilon = G/f$ statt $G/s_0$. Also $v = s_0/f$.\n---\n**Rechnung:** $v = \\dfrac{25\\,\\text{cm}}{${tz(f)}\\,\\text{cm}} = ${tz(25 / f, 2)}$.`,
        };
      }
      if (art === "mikroskop") {
        const f1 = r.wahl([2, 4, 5, 8] as const);
        const f2 = r.wahl([10, 20, 25, 50] as const);
        return {
          angabe: `Ein Mikroskop hat $f_{\\text{Obj}} = ${f1}\\,\\text{mm}$, $f_{\\text{Ok}} = ${f2}\\,\\text{mm}$ und die optische Tubuslänge $160\\,\\text{mm}$. Berechne die Gesamtvergrößerung.`,
          teile: [{ typ: "zahl", loesung: `160/${f1}*250/${f2}`, fehler: [{ wert: `160/${f1}+250/${f2}`, meldung: "Die Vergrößerungen von Objektiv und Okular werden **multipliziert**, nicht addiert." }] }],
          hinweis: "Objektiv $t/f_1$ mal Okular $s_0/f_2$ mit $s_0 = 250\\,\\text{mm}$.",
          loesung: `**Ansatz:** Das Okular vergrößert das schon vergrößerte Zwischenbild, also $v = \\dfrac{t}{f_1}\\cdot\\dfrac{s_0}{f_2}$.\n---\n**Rechnung:** $v = \\dfrac{160}{${f1}}\\cdot\\dfrac{250}{${f2}} = ${tz(160 / f1)}\\cdot ${tz(250 / f2)} = ${tz((160 / f1) * (250 / f2))}$.`,
        };
      }
      const f1 = r.wahl([500, 800, 1000, 1200, 2000] as const);
      const f2 = r.wahl([10, 20, 25, 40] as const);
      return {
        angabe: `Ein Keplersches Fernrohr hat $f_1 = ${f1}\\,\\text{mm}$ und $f_2 = ${f2}\\,\\text{mm}$. Berechne Vergrößerung und Baulänge in mm.`,
        teile: [
          { typ: "zahl", label: "Vergrößerung", loesung: `${f1}/${f2}`, fehler: [{ wert: `${f2}/${f1}`, meldung: "Das Objektiv mit der langen Brennweite steht im Zähler: $v = f_1/f_2$." }] },
          { typ: "zahl", label: "Baulänge in mm", loesung: `${f1}+${f2}`, einheit: "mm" },
        ],
        hinweis: "$v = f_1/f_2$, Baulänge $f_1 + f_2$.",
        loesung: `**Ansatz:** Beim Keplerschen Fernrohr fallen die Brennpunkte von Objektiv und Okular zusammen. Es gilt $v = f_1/f_2$.\n---\n**Rechnung:** $v = \\dfrac{${f1}}{${f2}} = ${tz(f1 / f2)}$. Baulänge $${f1}\\,\\text{mm} + ${f2}\\,\\text{mm} = ${f1 + f2}\\,\\text{mm}$.`,
      };
    },
  }),
  drill({
    id: "p15-d-brille",
    kapitel: K,
    titel: "Brillenstärke berechnen",
    niveau: 2,
    erzeuge: (r) => {
      if (r.zufall() < 0.5) {
        const a = r.wahl([20, 25, 40, 50, 80, 100, 200] as const);
        return {
          angabe: `Der Fernpunkt eines kurzsichtigen Auges liegt bei $${a}\\,\\text{cm}$. Welche Brechkraft in dpt braucht die Brille (Abstand zum Auge vernachlässigen)?`,
          teile: [{ typ: "zahl", loesung: `-100/${a}`, einheit: "dpt", fehler: [{ wert: `100/${a}`, meldung: "Das kurzsichtige Auge bricht zu stark. Die Brille muss Brechkraft wegnehmen, das Vorzeichen ist negativ." }] }],
          hinweis: "Von $g = \\infty$ soll ein virtuelles Bild im Fernpunkt entstehen.",
          loesung: `**Ansatz:** $D = \\tfrac1g + \\tfrac1b$ mit $g = \\infty$ und $b = -a_{\\text{Fern}}$, also $D = -1/a_{\\text{Fern}}$.\n---\n**Rechnung:** $D = -\\dfrac{1}{${tz(a / 100)}\\,\\text{m}} = ${tz(-100 / a, 2)}\\,\\text{dpt}$, eine Zerstreuungslinse.`,
        };
      }
      const a = r.wahl([40, 50, 80, 100, 125, 200] as const);
      return {
        angabe: `Der Nahpunkt eines Auges liegt bei $${a}\\,\\text{cm}$. Welche Lesebrille in dpt ermöglicht das Lesen in $25\\,\\text{cm}$?`,
        teile: [{ typ: "zahl", loesung: `4-100/${a}`, einheit: "dpt", fehler: [{ wert: `100/${a}-4`, meldung: "Die Kehrwerte sind vertauscht. Eine Lesebrille ist eine Sammellinse mit positiver Brechkraft." }] }],
        hinweis: "Gegenstand bei 25 cm, virtuelles Bild im Nahpunkt.",
        loesung: `**Ansatz:** $D = \\tfrac1g + \\tfrac1b$ mit $g = 0{,}25\\,\\text{m}$ und $b = -a_{\\text{Nah}}$.\n---\n**Rechnung:** $D = \\dfrac{1}{0{,}25\\,\\text{m}} - \\dfrac{1}{${tz(a / 100)}\\,\\text{m}} = 4 - ${tz(100 / a, 2)} = ${tz(4 - 100 / a, 2)}\\,\\text{dpt}$, eine Sammellinse.`,
      };
    },
  }),
  drill({
    id: "p15-d-nahpunkt-brille",
    kapitel: K,
    titel: "Sehbereich mit Brille",
    niveau: 3,
    erzeuge: (r) => {
      const fern = r.wahl([25, 40, 50, 80, 100] as const);
      const nah = r.wahl([8, 10, 12, 15] as const);
      const D = -100 / fern;
      const g = 100 / (D + 100 / nah);
      return {
        angabe: `Ein kurzsichtiges Auge sieht ohne Brille zwischen $${nah}\\,\\text{cm}$ und $${fern}\\,\\text{cm}$ scharf. Es bekommt die Brille, mit der es in die Ferne scharf sieht. Berechne die Brechkraft der Brille in dpt und den neuen Nahpunkt in cm (eine Nachkommastelle).`,
        teile: [
          { typ: "zahl", label: "Brechkraft in dpt", loesung: `-100/${fern}`, einheit: "dpt" },
          {
            typ: "zahl",
            label: "neuer Nahpunkt in cm",
            loesung: `100/(-100/${fern}+100/${nah})`,
            einheit: "cm",
            fehler: [{ wert: `100/(-100/${fern}-100/${nah})`, meldung: "Das Bild am alten Nahpunkt ist virtuell, $b = -a_{\\text{Nah}}$. Dann ist $-\\tfrac1b$ positiv." }],
          },
        ],
        hinweis: "Brille $D = -1/a_{\\text{Fern}}$. Neuer Nahpunkt: Bild bei $b = -a_{\\text{Nah}}$, also $\\tfrac1g = D - \\tfrac1b$.",
        loesung: `**Brille:** $D = -\\dfrac{1}{${tz(fern / 100)}\\,\\text{m}} = ${tz(D, 2)}\\,\\text{dpt}$.\n---\n**Ansatz Nahpunkt:** Der Gegenstand soll durch die Brille ein virtuelles Bild am alten Nahpunkt haben, $b = -${tz(nah / 100)}\\,\\text{m}$. Also $\\tfrac1g = D - \\tfrac1b$.\n---\n**Rechnung:** $\\dfrac1g = ${tz(D, 2)} + ${tz(100 / nah, 2)} = ${tz(D + 100 / nah, 2)}\\,\\tfrac1{\\text{m}}$, also $g = ${tz(g, 1)}\\,\\text{cm}$. Mit Brille reicht der scharfe Bereich von $${tz(g, 1)}\\,\\text{cm}$ bis unendlich.`,
      };
    },
  }),
];
