import { drill, tz, ggt, type Drill } from "@/lib/lernen/training";

const K = "trigonometrie";
const rad = (g: number) => (g * Math.PI) / 180;
const grad = (x: number) => (x * 180) / Math.PI;

/** Vielfaches von π als LaTeX: (z/n)·π gekuerzt, z. B. 3/4 -> \tfrac{3\pi}{4} */
function piTex(z: number, n: number): string {
  if (z === 0) return "0";
  const g = ggt(z, n);
  const zz = z / g;
  const nn = n / g;
  const vz = zz < 0 ? "-" : "";
  const za = Math.abs(zz);
  const zaehler = za === 1 ? "\\pi" : `${za}\\pi`;
  return nn === 1 ? `${vz}${zaehler}` : `${vz}\\tfrac{${zaehler}}{${nn}}`;
}

/** Vielfaches von π als mathjs-Ausdruck, z. B. 3/4 -> "3*pi/4" */
function piAus(z: number, n: number): string {
  const g = ggt(z, n);
  return `${z / g}*pi/${n / g}`;
}

/** exakte Werte im ersten Quadranten (Bezugswinkel) */
const SIN_EXAKT: Record<number, string> = { 0: "0", 30: "\\tfrac12", 45: "\\tfrac{\\sqrt2}{2}", 60: "\\tfrac{\\sqrt3}{2}", 90: "1" };
const TAN_EXAKT: Record<number, string> = { 0: "0", 30: "\\tfrac{\\sqrt3}{3}", 45: "1", 60: "\\sqrt3" };

function quadrantInfo(alpha: number): { bezug: number; quadrant: string } {
  if (alpha <= 90) return { bezug: alpha, quadrant: "I" };
  if (alpha <= 180) return { bezug: 180 - alpha, quadrant: "II" };
  if (alpha <= 270) return { bezug: alpha - 180, quadrant: "III" };
  return { bezug: 360 - alpha, quadrant: "IV" };
}

export const DRILLS: Drill[] = [
  drill({
    id: "tr-d-grad-rad",
    kapitel: K,
    titel: "Grad ins Bogenmaß",
    niveau: 1,
    erzeuge: (r) => {
      const alpha = r.wahl([15, 20, 30, 36, 40, 45, 60, 72, 90, 120, 135, 150, 210, 225, 240, 270, 300, 315, 330]);
      return {
        angabe: `Rechne $${alpha}°$ ins Bogenmaß um. Gib das Ergebnis exakt als Vielfaches von $\\pi$ (Eingabe mit \`pi\`) oder auf drei Nachkommastellen an.`,
        teile: [
          {
            typ: "zahl",
            loesung: `${alpha}*pi/180`,
            anzeige: `${piTex(alpha, 180)} \\approx ${tz(rad(alpha), 3)}`,
            fehler: [{ wert: `${alpha}*180/pi`, meldung: "Du hast mit dem Kehrwert multipliziert. Von Grad ins Bogenmaß rechnest du mit $\\frac{\\pi}{180}$." }],
          },
        ],
        hinweis: "Es gilt 180° entspricht π. Multipliziere den Winkel deshalb mit π/180.",
        loesung: `**Ansatz:** Eine halbe Drehung ist $180°$ oder $\\pi$. Also multiplizieren wir mit $\\frac{\\pi}{180}$.\n---\n$${alpha}° = ${alpha}\\cdot\\dfrac{\\pi}{180} = ${piTex(alpha, 180)} \\approx ${tz(rad(alpha), 3)}$. Der Bruch wurde dabei so weit wie möglich gekürzt.`,
      };
    },
  }),
  drill({
    id: "tr-d-rad-grad",
    kapitel: K,
    titel: "Bogenmaß in Grad",
    niveau: 1,
    erzeuge: (r) => {
      if (r.zufall() < 0.6) {
        const [z, n] = r.wahl([[1, 6], [1, 4], [1, 3], [1, 2], [2, 3], [3, 4], [5, 6], [7, 6], [5, 4], [4, 3], [3, 2], [5, 3], [7, 4], [11, 6], [1, 12], [5, 12]] as const);
        const g = (180 * z) / n;
        return {
          angabe: `Rechne $x = ${piTex(z, n)}$ in Grad um.`,
          teile: [{ typ: "zahl", einheit: "°", loesung: `${z}*180/${n}` }],
          hinweis: "Ersetze π durch 180°.",
          loesung: `**Ansatz:** $\\pi$ entspricht $180°$. Wir setzen also $180°$ für $\\pi$ ein.\n---\n$${piTex(z, n)} = \\dfrac{${z}\\cdot 180°}{${n}} = ${tz(g)}°$.`,
        };
      }
      const x = r.wahl([0.5, 1, 1.5, 2, 2.5, 3, 4, 5]);
      return {
        angabe: `Rechne $x = ${tz(x)}$ (Bogenmaß) in Grad um. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "°", loesung: `${x}*180/pi`, toleranz: 0.01, fehler: [{ wert: `${x}*pi/180`, meldung: "Das ist die Umrechnung in die falsche Richtung. Von Bogenmaß in Grad multiplizierst du mit $\\frac{180°}{\\pi}$." }] }],
        hinweis: "Multipliziere mit 180°/π.",
        loesung: `**Ansatz:** Ein Radiant sind $\\frac{180°}{\\pi} \\approx 57{,}3°$. Wir multiplizieren also mit $\\frac{180°}{\\pi}$.\n---\n$${tz(x)}\\cdot\\dfrac{180°}{\\pi} \\approx ${tz(grad(x), 2)}°$.`,
      };
    },
  }),
  drill({
    id: "tr-d-kathete",
    kapitel: K,
    titel: "Kathete aus Hypotenuse und Winkel",
    niveau: 1,
    erzeuge: (r) => {
      const c = r.int(4, 30);
      let alpha = r.int(10, 80);
      // Bei 45° sind Sinus und Kosinus gleich, dann wäre das Fehlerbild die richtige Antwort.
      if (alpha === 45) alpha = 46;
      const gegen = r.zufall() < 0.5;
      const wert = gegen ? c * Math.sin(rad(alpha)) : c * Math.cos(rad(alpha));
      const fn = gegen ? "sin" : "cos";
      const anderes = gegen ? "cos" : "sin";
      return {
        angabe: `Ein rechtwinkliges Dreieck hat die Hypotenuse $c = ${c}$ cm und den spitzen Winkel $\\alpha = ${alpha}°$. Berechne die ${gegen ? "Gegenkathete $a$" : "Ankathete $b$"} von $\\alpha$. Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: "cm",
            loesung: `${c}*${fn}(inRad(${alpha}))`,
            toleranz: 0.01,
            fehler: [{ wert: `${c}*${anderes}(inRad(${alpha}))`, meldung: gegen ? "Das ist die Ankathete. Die Gegenkathete liegt dem Winkel gegenüber und gehört zum Sinus." : "Das ist die Gegenkathete. Die Ankathete berührt den Winkel und gehört zum Kosinus." }],
          },
        ],
        hinweis: gegen ? "Die Gegenkathete liegt dem Winkel gegenüber. Gegenkathete durch Hypotenuse ist der Sinus." : "Die Ankathete berührt den Winkel. Ankathete durch Hypotenuse ist der Kosinus.",
        loesung: `**Ansatz:** Gegeben ist die Hypotenuse, gesucht die ${gegen ? "Gegenkathete. Beide verbindet der Sinus" : "Ankathete. Beide verbindet der Kosinus"}: $\\${fn}\\alpha = \\dfrac{${gegen ? "a" : "b"}}{c}$.\n---\nWir multiplizieren beide Seiten mit $c$: $${gegen ? "a" : "b"} = ${c}\\cdot\\${fn} ${alpha}° \\approx ${c}\\cdot ${tz(gegen ? Math.sin(rad(alpha)) : Math.cos(rad(alpha)), 4)} \\approx ${tz(wert, 2)}$ cm. Der Rechner steht dabei auf DEG.`,
      };
    },
  }),
  drill({
    id: "tr-d-winkel-katheten",
    kapitel: K,
    titel: "Winkel aus zwei Katheten",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 15);
      let b = r.int(2, 15);
      if (b === a) b += 1;
      const alpha = grad(Math.atan(a / b));
      return {
        angabe: `In einem rechtwinkligen Dreieck mit dem rechten Winkel bei $C$ sind die Katheten $a = ${a}$ und $b = ${b}$. Berechne den Winkel $\\alpha$ gegenüber von $a$. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "°", loesung: `inGrad(atan(${a}/${b}))`, toleranz: 0.01, fehler: [{ wert: `inGrad(atan(${b}/${a}))`, meldung: "Das ist der andere spitze Winkel $\\beta$. Für $\\alpha$ ist $a$ die Gegenkathete und $b$ die Ankathete." }] }],
        hinweis: "Beide Katheten sind bekannt. Gegenkathete durch Ankathete ist der Tangens.",
        loesung: `**Ansatz:** $a$ liegt $\\alpha$ gegenüber, $b$ liegt an. Das Verhältnis der beiden Katheten ist der Tangens: $\\tan\\alpha = \\dfrac{${a}}{${b}}$.\n---\n$\\alpha = \\tan^{-1}\\dfrac{${a}}{${b}} \\approx ${tz(alpha, 2)}°$. **Kontrolle:** Der andere Winkel ist $90° - ${tz(alpha, 2)}° = ${tz(90 - alpha, 2)}°$, und ${a < b ? `wegen $a < b$ muss $\\alpha$ kleiner als $45°$ sein` : `wegen $a > b$ muss $\\alpha$ größer als $45°$ sein`}.`,
      };
    },
  }),
  drill({
    id: "tr-d-steigung",
    kapitel: K,
    titel: "Steigung in Prozent und Winkel",
    niveau: 1,
    erzeuge: (r) => {
      if (r.zufall() < 0.5) {
        const p = r.wahl([3, 5, 6, 8, 9, 10, 12, 15, 18, 20, 25, 30]);
        const w = grad(Math.atan(p / 100));
        return {
          angabe: `Eine Straße hat $${p}\\,\\%$ Steigung. Unter welchem Winkel steigt sie an? Runde auf zwei Nachkommastellen.`,
          teile: [{ typ: "zahl", einheit: "°", loesung: `inGrad(atan(${p}/100))`, toleranz: 0.01, fehler: [{ wert: `${p}/100*90`, meldung: "Prozent und Winkel sind nicht proportional. Die Steigung ist der Tangens des Winkels." }] }],
          hinweis: "Die Steigung als Dezimalzahl ist der Tangens des Steigungswinkels.",
          loesung: `**Ansatz:** $${p}\\,\\%$ Steigung heißt $${p}$ m Höhe auf $100$ m waagrechter Strecke. Das ist Gegenkathete durch Ankathete, also $\\tan\\alpha = ${tz(p / 100)}$.\n---\n$\\alpha = \\tan^{-1}(${tz(p / 100)}) \\approx ${tz(w, 2)}°$.`,
        };
      }
      const w = r.wahl([2, 4, 5, 8, 10, 15, 20, 25, 35, 40]);
      const p = 100 * Math.tan(rad(w));
      return {
        angabe: `Ein Hang steigt unter $${w}°$ an. Wie viel Prozent Steigung sind das? Runde auf eine Nachkommastelle.`,
        teile: [{ typ: "zahl", einheit: "%", loesung: `100*tan(inRad(${w}))`, toleranz: 0.05, fehler: [{ wert: `${w}/90*100`, meldung: "Prozent und Winkel sind nicht proportional. Rechne $100\\cdot\\tan\\alpha$." }] }],
        hinweis: "Die Prozentangabe ist 100 mal der Tangens des Winkels.",
        loesung: `**Ansatz:** Die Steigung ist $\\tan\\alpha$. In Prozent wird sie mit $100$ multipliziert.\n---\n$\\tan ${w}° \\approx ${tz(Math.tan(rad(w)), 4)}$, also etwa $${tz(p, 1)}\\,\\%$ Steigung.`,
      };
    },
  }),
  drill({
    id: "tr-d-exakt",
    kapitel: K,
    titel: "Exakte Werte am Einheitskreis",
    niveau: 2,
    erzeuge: (r) => {
      const fn = r.wahl(["sin", "cos", "tan"] as const);
      const kandidaten = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].filter((a) => !(fn === "tan" && (a === 90 || a === 270)));
      const alpha = r.wahl(kandidaten);
      const { bezug, quadrant } = quadrantInfo(alpha);
      const wert = fn === "sin" ? Math.sin(rad(alpha)) : fn === "cos" ? Math.cos(rad(alpha)) : Math.tan(rad(alpha));
      const betrag = fn === "sin" ? SIN_EXAKT[bezug] : fn === "cos" ? SIN_EXAKT[90 - bezug] : TAN_EXAKT[bezug];
      const negativ = wert < -1e-9;
      const exakt = Math.abs(wert) < 1e-9 ? "0" : `${negativ ? "-" : ""}${betrag}`;
      const teil =
        Math.abs(wert) < 1e-9
          ? { typ: "zahl" as const, loesung: `${fn}(inRad(${alpha}))`, toleranz: 0.001 }
          : { typ: "zahl" as const, loesung: `${fn}(inRad(${alpha}))`, toleranz: 0.001, fehler: [{ wert: `-${fn}(inRad(${alpha}))`, meldung: "Der Betrag stimmt, aber das Vorzeichen nicht. Prüfe, in welchem Quadranten der Winkel liegt." }] };
      return {
        angabe: `Bestimme $\\${fn} ${alpha}°$ exakt. Eingabe zum Beispiel als \`sqrt(3)/2\`.`,
        teile: [teil],
        hinweis: "Bestimme den Quadranten für das Vorzeichen und den Bezugswinkel zur x-Achse für den Betrag.",
        loesung: `**Ansatz:** Das Vorzeichen kommt aus dem Quadranten, der Betrag aus dem Bezugswinkel im I. Quadranten.\n---\n$${alpha}°$ liegt ${alpha % 90 === 0 ? "auf einer Koordinatenachse" : `im ${quadrant}. Quadranten`}. Der Bezugswinkel ist $${bezug}°$.\n---\nDas Vorzeichen von $\\${fn}$ dort: ${Math.abs(wert) < 1e-9 ? "Der Wert ist $0$" : negativ ? "negativ" : "positiv"}.\n---\nAlso ist $\\${fn} ${alpha}° = ${exakt}$.`,
      };
    },
  }),
  drill({
    id: "tr-d-sektor",
    kapitel: K,
    titel: "Bogenlänge und Sektorfläche",
    niveau: 1,
    erzeuge: (r) => {
      const rr = r.int(3, 20);
      const alpha = r.wahl([30, 40, 45, 60, 72, 90, 120, 135, 150]);
      const x = rad(alpha);
      const b = rr * x;
      const A = 0.5 * rr * rr * x;
      return {
        angabe: `Ein Kreissektor hat den Radius $r = ${rr}$ cm und den Mittelpunktswinkel $${alpha}°$. Berechne Bogenlänge und Fläche. Runde auf zwei Nachkommastellen.`,
        teile: [
          { typ: "zahl", label: "Bogenlänge", einheit: "cm", loesung: `${rr}*${alpha}*pi/180`, toleranz: 0.01, fehler: [{ wert: `${rr}*${alpha}`, meldung: "In $b = r\\cdot x$ muss der Winkel im Bogenmaß stehen. Rechne zuerst um." }] },
          { typ: "zahl", label: "Fläche", einheit: "cm²", loesung: `0.5*${rr}^2*${alpha}*pi/180`, toleranz: 0.01, fehler: [{ wert: `${rr}^2*${alpha}*pi/180`, meldung: "Der Faktor $\\frac12$ in $A = \\frac12 r^2 x$ fehlt." }] },
        ],
        hinweis: "Rechne den Winkel ins Bogenmaß um. Dann b = r·x und A = ½·r²·x.",
        loesung: `**Ansatz:** Die Formeln $b = r x$ und $A = \\frac12 r^2 x$ gelten im Bogenmaß.\n---\n$x = ${alpha}\\cdot\\frac{\\pi}{180} = ${piTex(alpha, 180)} \\approx ${tz(x, 4)}$.\n---\n$b = ${rr}\\cdot ${tz(x, 4)} \\approx ${tz(b, 2)}$ cm und $A = \\frac12\\cdot ${rr * rr}\\cdot ${tz(x, 4)} \\approx ${tz(A, 2)}\\text{ cm}^2$. **Kontrolle:** Der Sektor ist der Anteil $\\frac{${alpha}}{360}$ des Kreises mit Fläche $${rr * rr}\\pi$.`,
      };
    },
  }),
  drill({
    id: "tr-d-flaeche",
    kapitel: K,
    titel: "Dreiecksfläche mit dem Sinus",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(3, 20);
      const b = r.int(3, 20);
      const g = r.int(20, 150);
      const A = 0.5 * a * b * Math.sin(rad(g));
      return {
        angabe: `Zwei Seiten eines Dreiecks sind $a = ${a}$ m und $b = ${b}$ m. Sie schließen den Winkel $\\gamma = ${g}°$ ein. Berechne den Flächeninhalt. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "m²", loesung: `0.5*${a}*${b}*sin(inRad(${g}))`, toleranz: 0.01, fehler: [{ wert: `${a}*${b}*sin(inRad(${g}))`, meldung: "Der Faktor $\\frac12$ fehlt. Die Fläche ist das halbe Produkt der Seiten mal dem Sinus." }] }],
        hinweis: "Die beiden Seiten schließen den Winkel ein. Verwende A = ½·a·b·sin γ.",
        loesung: `**Ansatz:** Zwei Seiten und der eingeschlossene Winkel sind bekannt. Die Höhe auf $a$ ist $b\\cdot\\sin\\gamma$, also $A = \\frac12\\, a\\, b\\,\\sin\\gamma$.\n---\n$A = \\tfrac12\\cdot ${a}\\cdot ${b}\\cdot\\sin ${g}° \\approx ${tz((a * b) / 2)}\\cdot ${tz(Math.sin(rad(g)), 4)} \\approx ${tz(A, 2)}\\text{ m}^2$.`,
      };
    },
  }),
  drill({
    id: "tr-d-kosinussatz-seite",
    kapitel: K,
    titel: "Kosinussatz: dritte Seite (SWS)",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.int(3, 15);
      const c = r.int(3, 15);
      let alpha = r.int(20, 150);
      // Bei 90° wäre der Pythagoras (Fehlerbild) die richtige Antwort.
      if (alpha === 90) alpha = 91;
      const a2 = b * b + c * c - 2 * b * c * Math.cos(rad(alpha));
      const term = 2 * b * c * Math.cos(rad(alpha));
      return {
        angabe: `Im Dreieck $ABC$ ist $b = ${b}$, $c = ${c}$ und der eingeschlossene Winkel $\\alpha = ${alpha}°$. Berechne die Seite $a$. Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            loesung: `sqrt(${b}^2 + ${c}^2 - 2*${b}*${c}*cos(inRad(${alpha})))`,
            toleranz: 0.01,
            fehler: [{ wert: `sqrt(${b}^2 + ${c}^2)`, meldung: "Das wäre der Pythagoras. Er gilt nur bei einem rechten Winkel. Hier kommt der Term $-2bc\\cos\\alpha$ dazu." }],
          },
        ],
        hinweis: "Zwei Seiten und der eingeschlossene Winkel: Kosinussatz a² = b² + c² − 2bc·cos α.",
        loesung: `**Ansatz:** Bekannt sind zwei Seiten und der Winkel dazwischen (SWS). Der Kosinussatz liefert die dritte Seite.\n---\n$a^2 = ${b}^2 + ${c}^2 - 2\\cdot ${b}\\cdot ${c}\\cdot\\cos ${alpha}° \\approx ${b * b + c * c} ${term >= 0 ? "-" : "+"} ${tz(Math.abs(term), 2)} = ${tz(a2, 2)}$.\n---\n$a \\approx \\sqrt{${tz(a2, 2)}} \\approx ${tz(Math.sqrt(a2), 2)}$.${alpha > 90 ? " Weil $\\alpha$ stumpf ist, ist $\\cos\\alpha$ negativ, und $a$ wird länger als beim rechten Winkel." : alpha < 90 ? " Weil $\\alpha$ spitz ist, wird $a$ kürzer als beim rechten Winkel." : ""}`,
      };
    },
  }),
  drill({
    id: "tr-d-kosinussatz-winkel",
    kapitel: K,
    titel: "Kosinussatz: Winkel aus drei Seiten (SSS)",
    niveau: 2,
    erzeuge: (r) => {
      let a = r.int(3, 12);
      let b = r.int(3, 12);
      let c = r.int(3, 12);
      // Dreiecksungleichung sicherstellen
      while (a + b <= c || a + c <= b || b + c <= a) {
        a = r.int(3, 12);
        b = r.int(3, 12);
        c = r.int(3, 12);
      }
      const cosG = (a * a + b * b - c * c) / (2 * a * b);
      const gam = grad(Math.acos(cosG));
      return {
        angabe: `Ein Dreieck hat die Seiten $a = ${a}$, $b = ${b}$, $c = ${c}$. Berechne den Winkel $\\gamma$ gegenüber von $c$. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "°", loesung: `inGrad(acos((${a}^2 + ${b}^2 - ${c}^2)/(2*${a}*${b})))`, toleranz: 0.01 }],
        hinweis: "Stelle den Kosinussatz nach cos γ um: cos γ = (a² + b² − c²) / (2ab).",
        loesung: `**Ansatz:** Drei Seiten sind bekannt (SSS). Der Kosinussatz, nach $\\cos\\gamma$ umgestellt, liefert den Winkel eindeutig.\n---\n$\\cos\\gamma = \\dfrac{${a * a} + ${b * b} - ${c * c}}{2\\cdot ${a}\\cdot ${b}} = \\dfrac{${a * a + b * b - c * c}}{${2 * a * b}} \\approx ${tz(cosG, 4)}$.\n---\n$\\gamma = \\cos^{-1}(${tz(cosG, 4)}) \\approx ${tz(gam, 2)}°$. ${gam > 90.005 ? "Der Kosinus ist negativ, also ist $\\gamma$ stumpf." : gam < 89.995 ? "Der Kosinus ist positiv, also ist $\\gamma$ spitz." : "Der Kosinus ist null, also ist $\\gamma$ ein rechter Winkel."}`,
      };
    },
  }),
  drill({
    id: "tr-d-sinussatz",
    kapitel: K,
    titel: "Sinussatz (WSW)",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.int(4, 25);
      const alpha = r.int(25, 80);
      let beta = r.int(25, 150 - alpha);
      // Bei β = α ist b = a, dann wäre das Fehlerbild (Bruch auf dem Kopf) die richtige Antwort.
      if (beta === alpha) beta = beta + 5 <= 150 - alpha ? beta + 5 : beta - 5;
      const b = (a * Math.sin(rad(beta))) / Math.sin(rad(alpha));
      return {
        angabe: `Im Dreieck $ABC$ ist $a = ${a}$ cm, $\\alpha = ${alpha}°$ und $\\beta = ${beta}°$. Berechne $b$. Runde auf zwei Nachkommastellen.`,
        teile: [{ typ: "zahl", einheit: "cm", loesung: `${a}*sin(inRad(${beta}))/sin(inRad(${alpha}))`, toleranz: 0.01, fehler: [{ wert: `${a}*sin(inRad(${alpha}))/sin(inRad(${beta}))`, meldung: "Der Bruch steht auf dem Kopf. Aus $\\frac{b}{\\sin\\beta} = \\frac{a}{\\sin\\alpha}$ folgt $b = \\frac{a\\sin\\beta}{\\sin\\alpha}$." }] }],
        hinweis: "Das Paar a und α ist vollständig bekannt. Sinussatz: b / sin β = a / sin α, nach b umstellen.",
        loesung: `**Ansatz:** Seite $a$ und Gegenwinkel $\\alpha$ bilden ein bekanntes Paar. Der Sinussatz verbindet es mit $b$ und $\\beta$: $\\dfrac{b}{\\sin\\beta} = \\dfrac{a}{\\sin\\alpha}$.\n---\nMit $\\sin\\beta$ multiplizieren: $b = \\dfrac{${a}\\cdot\\sin ${beta}°}{\\sin ${alpha}°} \\approx \\dfrac{${tz(a * Math.sin(rad(beta)), 4)}}{${tz(Math.sin(rad(alpha)), 4)}} \\approx ${tz(b, 2)}$ cm.`,
      };
    },
  }),
  drill({
    id: "tr-d-ssw",
    kapitel: K,
    titel: "Der mehrdeutige Fall SSW",
    niveau: 3,
    erzeuge: (r) => {
      // a < b und b·sin α < a garantieren zwei Dreiecke
      let alpha = r.int(25, 50);
      let b = r.int(8, 16);
      let a = r.int(4, b - 1);
      let s = (b * Math.sin(rad(alpha))) / a;
      let versuche = 0;
      while ((s >= 0.97 || s <= 0.3) && versuche < 50) {
        alpha = r.int(25, 50);
        b = r.int(8, 16);
        a = r.int(4, b - 1);
        s = (b * Math.sin(rad(alpha))) / a;
        versuche++;
      }
      if (s >= 0.97 || s <= 0.3) {
        alpha = 40;
        b = 8;
        a = 6;
        s = (b * Math.sin(rad(alpha))) / a;
      }
      const b1 = grad(Math.asin(s));
      const b2 = 180 - b1;
      return {
        angabe: `Von einem Dreieck kennt man $a = ${a}$, $b = ${b}$ und $\\alpha = ${alpha}°$. Gib beide möglichen Winkel $\\beta$ an. Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "menge",
            loesung: [`inGrad(asin(${b}*sin(inRad(${alpha}))/${a}))`, `180 - inGrad(asin(${b}*sin(inRad(${alpha}))/${a}))`],
            fehler: [{ wert: [`inGrad(asin(${b}*sin(inRad(${alpha}))/${a}))`], meldung: "Der Rechner liefert nur den spitzen Winkel. Prüfe auch $180° - \\beta_1$." }],
          },
        ],
        hinweis: "Sinussatz: sin β = b·sin α / a. Zu einem Sinuswert unter 1 gibt es zwei Winkel zwischen 0° und 180°. Prüfe beide mit α + β < 180°.",
        loesung: `**Ansatz:** Fall SSW mit $a < b$. Der Sinussatz liefert $\\sin\\beta$, und dazu gibt es zwei Kandidaten.\n---\n$\\sin\\beta = \\dfrac{${b}\\cdot\\sin ${alpha}°}{${a}} \\approx ${tz(s, 4)}$. Kandidaten: $\\beta_1 \\approx ${tz(b1, 2)}°$ und $\\beta_2 = 180° - \\beta_1 \\approx ${tz(b2, 2)}°$.\n---\nPrüfen: $${alpha}° + ${tz(b2, 2)}° = ${tz(alpha + b2, 2)}° < 180°$. Beide Kandidaten sind gültig, es gibt zwei Dreiecke.`,
      };
    },
  }),
  drill({
    id: "tr-d-hoehenwinkel",
    kapitel: K,
    titel: "Höhe aus Höhenwinkel",
    niveau: 2,
    erzeuge: (r) => {
      const e = r.wahl([20, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150]);
      const w = r.int(15, 60);
      const auge = r.wahl([0, 1.5, 1.6, 1.7, 1.8]);
      const h = e * Math.tan(rad(w)) + auge;
      return {
        angabe: `Aus $${e}$ m Entfernung sieht man die Spitze eines Gebäudes unter dem Höhenwinkel $${w}°$.${auge ? ` Die Augenhöhe beträgt $${tz(auge)}$ m.` : " Gemessen wird vom Boden aus."} Wie hoch ist das Gebäude? Runde auf zwei Nachkommastellen.`,
        teile: [
          {
            typ: "zahl",
            einheit: "m",
            loesung: `${e}*tan(inRad(${w})) + ${auge}`,
            toleranz: 0.01,
            fehler: [{ wert: `${e}*sin(inRad(${w})) + ${auge}`, meldung: "Die Entfernung ist waagrecht gemessen, also die Ankathete und nicht die Hypotenuse. Verwende den Tangens." }],
          },
        ],
        hinweis: "Die waagrechte Entfernung ist die Ankathete, die Höhe über dem Messpunkt die Gegenkathete. Beide verbindet der Tangens.",
        loesung: `**Ansatz:** Das rechtwinklige Dreieck liegt ${auge ? "über der Augenhöhe" : "auf dem Boden"}. Die Entfernung $${e}$ m ist die Ankathete, die gesuchte Höhe $x$ die Gegenkathete: $\\tan ${w}° = \\dfrac{x}{${e}}$.\n---\n$x = ${e}\\cdot\\tan ${w}° \\approx ${tz(e * Math.tan(rad(w)), 2)}$ m.${auge ? `\n---\nDie Augenhöhe kommt dazu: $h \\approx ${tz(e * Math.tan(rad(w)), 2)} + ${tz(auge)} = ${tz(h, 2)}$ m.` : ""}`,
      };
    },
  }),
  drill({
    id: "tr-d-sinusfunktion",
    kapitel: K,
    titel: "Amplitude und Periode",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.wahl([-4, -3, -2, 2, 3, 4, 5, 0.5]);
      const [bTex, bAus, pTex] = r.wahl([
        ["2", "2", "\\pi"],
        ["3", "3", "\\tfrac{2\\pi}{3}"],
        ["4", "4", "\\tfrac{\\pi}{2}"],
        ["\\tfrac12", "1/2", "4\\pi"],
        ["\\pi", "pi", "2"],
        ["\\tfrac{\\pi}{2}", "pi/2", "4"],
      ] as const);
      const d = r.int(-3, 3);
      const fn = r.wahl(["sin", "cos"] as const);
      return {
        angabe: `Bestimme Amplitude und Periode von $f(x) = ${tz(a)}\\${fn}(${bTex}\\,x)${d === 0 ? "" : d > 0 ? ` + ${d}` : ` - ${-d}`}$.`,
        teile: [
          { typ: "zahl", label: "Amplitude", loesung: `abs(${a})` },
          { typ: "zahl", label: "Periode", loesung: `2*pi/(${bAus})`, anzeige: pTex },
        ],
        hinweis: "Die Amplitude ist |a|, also nie negativ. Die Periode ist 2π geteilt durch b.",
        loesung: `**Ansatz:** Bei $a\\,\\${fn}(bx) + d$ ist die Amplitude $|a|$ und die Periode $\\frac{2\\pi}{b}$.\n---\nAmplitude $|a| = ${tz(Math.abs(a))}$.${a < 0 ? " Das Minus spiegelt die Kurve nur an der Mittellage." : ""}\n---\nPeriode $p = \\dfrac{2\\pi}{${bTex}} = ${pTex}$. Die Wertemenge ist $[${tz(d - Math.abs(a))}, ${tz(d + Math.abs(a))}]$, denn die Mittellage ist $${d}$.`,
      };
    },
  }),
  drill({
    id: "tr-d-phase",
    kapitel: K,
    titel: "Phasenverschiebung ablesen",
    niveau: 2,
    erzeuge: (r) => {
      const b = r.wahl([2, 3, 4]);
      const [z, n] = r.wahl([[1, 2], [1, 3], [1, 4], [2, 3], [3, 4], [1, 6]] as const);
      const plus = r.zufall() < 0.5;
      // Argument b·x ∓ (z/n)·π, Verschiebung c = ±(z/n)·π / b
      const cZ = plus ? -z : z;
      const cN = n * b;
      return {
        angabe: `Bestimme die Phasenverschiebung $c$ von $f(x) = \\sin\\!\\left(${b}x ${plus ? "+" : "-"} ${piTex(z, n)}\\right)$ in der Form $\\sin\\big(b(x - c)\\big)$. Eingabe zum Beispiel als \`-pi/6\`.`,
        teile: [
          {
            typ: "zahl",
            label: "$c$",
            loesung: piAus(cZ, cN),
            anzeige: piTex(cZ, cN),
            fehler: [{ wert: piAus(cZ, n), meldung: `Du hast nicht durch $b = ${b}$ geteilt. Klammere zuerst $${b}$ aus.` }],
          },
        ],
        hinweis: `Klammere im Argument die ${b} aus und schreibe das Ergebnis als x − c.`,
        loesung: `**Ansatz:** Die Verschiebung kann man erst ablesen, wenn das Argument die Form $b(x - c)$ hat.\n---\n$${b}x ${plus ? "+" : "-"} ${piTex(z, n)} = ${b}\\left(x ${plus ? "+" : "-"} ${piTex(z, n * b)}\\right)$.\n---\nAlso $c = ${piTex(cZ, cN)}$. Die Kurve ist um $${piTex(z, n * b)}$ nach ${plus ? "links" : "rechts"} verschoben. **Probe:** Bei $x = c$ ist das Argument null.`,
      };
    },
  }),
  drill({
    id: "tr-d-gleichung",
    kapitel: K,
    titel: "Trigonometrische Grundgleichung",
    niveau: 2,
    erzeuge: (r) => {
      const fn = r.wahl(["sin", "cos"] as const);
      const [sTex, s, grund] = r.wahl([
        ["\\tfrac12", 0.5, 30],
        ["-\\tfrac12", -0.5, -30],
        ["\\tfrac{\\sqrt2}{2}", Math.SQRT1_2, 45],
        ["-\\tfrac{\\sqrt2}{2}", -Math.SQRT1_2, -45],
        ["\\tfrac{\\sqrt3}{2}", Math.sqrt(3) / 2, 60],
        ["-\\tfrac{\\sqrt3}{2}", -Math.sqrt(3) / 2, -60],
      ] as const);
      let l1: number, l2: number;
      if (fn === "sin") {
        l1 = (grund + 360) % 360;
        l2 = (180 - grund + 360) % 360;
      } else {
        const ac = grad(Math.acos(s));
        l1 = Math.round(ac);
        l2 = Math.round(360 - ac);
      }
      const [x1, x2] = [Math.min(l1, l2), Math.max(l1, l2)];
      const nurEine = fn === "sin" ? String((grund + 360) % 360) : String(l1);
      return {
        angabe: `Löse $\\${fn} x = ${sTex}$ für $0° \\le x < 360°$. Gib die Lösungen in Grad an.`,
        teile: [{ typ: "menge", loesung: [String(x1), String(x2)], fehler: [{ wert: [nurEine], meldung: "Das ist nur eine Lösung. Zu jedem Wert gibt es am Einheitskreis zwei Punkte." }] }],
        hinweis: fn === "sin" ? "Die zweite Lösung liefert sin(180° − x) = sin x." : "Die zweite Lösung liefert cos(360° − x) = cos x.",
        loesung:
          fn === "sin"
            ? `**Ansatz:** Ein Grundwinkel mit $\\sin^{-1}$, der zweite aus der Spiegelung an der $y$-Achse.\n---\n$\\sin^{-1}(${sTex}) = ${grund}°$${grund < 0 ? `, im Bereich $[0°, 360°)$ also $${l1}°$` : ""}.\n---\nZweite Lösung: $180° - (${grund}°) = ${(180 - grund) % 360}°$.\n---\n$L = \\{${x1}°;\\ ${x2}°\\}$.`
            : `**Ansatz:** Ein Grundwinkel mit $\\cos^{-1}$, der zweite aus der Spiegelung an der $x$-Achse.\n---\n$\\cos^{-1}(${sTex}) = ${l1}°$.\n---\nZweite Lösung: $360° - ${l1}° = ${l2}°$.\n---\n$L = \\{${x1}°;\\ ${x2}°\\}$.`,
      };
    },
  }),
  drill({
    id: "tr-d-gleichung-innen",
    kapitel: K,
    titel: "Gleichung mit innerem Argument",
    niveau: 3,
    erzeuge: (r) => {
      const b = r.wahl([2, 3]);
      const [sTex, z1, n1] = r.wahl([
        ["\\tfrac12", 1, 6],
        ["\\tfrac{\\sqrt2}{2}", 1, 4],
        ["\\tfrac{\\sqrt3}{2}", 1, 3],
      ] as const);
      // Loesungen fuer u = b·x: u1 = z1/n1·π, u2 = π − u1, jeweils + 2kπ; x = u/b in [0, 2π)
      const u1 = z1 / n1;
      const u2 = 1 - u1;
      const loes: string[] = [];
      const tex: string[] = [];
      for (let k = 0; k < b; k++) {
        for (const u of [u1, u2]) {
          // x = (u + 2k)/b · π als Bruch mit Nenner n1·b
          const zaehler = Math.round((u + 2 * k) * n1);
          loes.push(piAus(zaehler, n1 * b));
          tex.push(piTex(zaehler, n1 * b));
        }
      }
      const erste = [loes[0], loes[1]];
      return {
        angabe: `Löse $\\sin(${b}x) = ${sTex}$ im Intervall $[0, 2\\pi)$. Eingabe zum Beispiel als \`pi/12\`.`,
        teile: [{ typ: "menge", loesung: loes, fehler: [{ wert: erste, meldung: `Das sind nur die Lösungen für $k = 0$. Beim Teilen durch $${b}$ wird auch die Periode geteilt: aus $2k\\pi$ wird $\\frac{2k\\pi}{${b}}$.` }] }],
        hinweis: `Setze u = ${b}x und löse zuerst sin u = s mit allen Lösungen. Teile dann alles, auch die Periode, durch ${b}.`,
        loesung: `**Ansatz:** Erst für das ganze Argument $u = ${b}x$ lösen, dann zurückrechnen.\n---\n$\\sin u = ${sTex}$ ergibt $u = ${piTex(z1, n1)} + 2k\\pi$ oder $u = ${piTex(n1 - z1, n1)} + 2k\\pi$.\n---\nTeilen durch $${b}$: $x = ${piTex(z1, n1 * b)} + \\frac{2k\\pi}{${b}}$ oder $x = ${piTex(n1 - z1, n1 * b)} + \\frac{2k\\pi}{${b}}$.\n---\nIm Intervall liegen $${2 * b}$ Lösungen: $${tex.join(";\\ ")}$. Es sind $${2 * b}$, weil $\\sin(${b}x)$ in $[0, 2\\pi)$ genau $${b}$ volle Perioden durchläuft.`,
      };
    },
  }),
  drill({
    id: "tr-d-polar",
    kapitel: K,
    titel: "Kartesisch in Polarkoordinaten",
    niveau: 2,
    erzeuge: (r) => {
      const x = r.intOhne0(-9, 9);
      const y = r.intOhne0(-9, 9);
      const rr = Math.sqrt(x * x + y * y);
      const bezug = grad(Math.atan(Math.abs(y / x)));
      let phi: number;
      let quadrant: string;
      let regel: string;
      if (x > 0 && y > 0) {
        phi = bezug;
        quadrant = "I";
        regel = "\\varphi = \\alpha";
      } else if (x < 0 && y > 0) {
        phi = 180 - bezug;
        quadrant = "II";
        regel = "\\varphi = 180° - \\alpha";
      } else if (x < 0 && y < 0) {
        phi = 180 + bezug;
        quadrant = "III";
        regel = "\\varphi = 180° + \\alpha";
      } else {
        phi = 360 - bezug;
        quadrant = "IV";
        regel = "\\varphi = 360° - \\alpha";
      }
      const phiAus = x > 0 && y > 0 ? `inGrad(atan(${Math.abs(y)}/${Math.abs(x)}))` : x < 0 && y > 0 ? `180 - inGrad(atan(${Math.abs(y)}/${Math.abs(x)}))` : x < 0 && y < 0 ? `180 + inGrad(atan(${Math.abs(y)}/${Math.abs(x)}))` : `360 - inGrad(atan(${Math.abs(y)}/${Math.abs(x)}))`;
      return {
        angabe: `Bestimme die Polarkoordinaten des Punktes $P(${x} \\mid ${y})$ mit $0° \\le \\varphi < 360°$. Runde auf zwei Nachkommastellen.`,
        teile: [
          { typ: "zahl", label: "$r$", loesung: `sqrt(${x * x + y * y})`, toleranz: 0.01 },
          {
            typ: "zahl",
            label: "$\\varphi$",
            einheit: "°",
            loesung: phiAus,
            toleranz: 0.01,
            ...(quadrant === "I" ? {} : { fehler: [{ wert: `inGrad(atan(${y}/${x}))`, meldung: "Der Rechner liefert nur Winkel zwischen $-90°$ und $90°$. Korrigiere den Winkel mit dem Quadranten des Punktes." }] }),
          },
        ],
        hinweis: "r = √(x² + y²). Den Winkel bestimmst du über den Bezugswinkel tan⁻¹|y/x| und korrigierst ihn je nach Quadrant.",
        loesung: `**Ansatz:** Abstand mit dem Pythagoras, Winkel über den Bezugswinkel mit Quadrantenkorrektur.\n---\n$r = \\sqrt{${x * x} + ${y * y}} = \\sqrt{${x * x + y * y}} \\approx ${tz(rr, 2)}$.\n---\nDer Punkt liegt im ${quadrant}. Quadranten. Bezugswinkel: $\\alpha = \\tan^{-1}\\frac{${Math.abs(y)}}{${Math.abs(x)}} \\approx ${tz(bezug, 2)}°$.\n---\n$${regel} \\approx ${tz(phi, 2)}°$. **Probe:** $${tz(rr, 2)}\\cdot\\cos ${tz(phi, 2)}° \\approx ${x}$.`,
      };
    },
  }),
];
