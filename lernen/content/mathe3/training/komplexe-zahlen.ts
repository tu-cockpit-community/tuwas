import { drill, tz, polyTex, bruchTex, type Drill } from "@/lib/lernen/training";

/** a + bi als LaTeX mit sauberem Vorzeichen */
function ktex(a: number, b: number): string {
  if (b === 0) return tz(a);
  const im = Math.abs(b) === 1 ? "i" : `${tz(Math.abs(b))}i`;
  if (a === 0) return `${b < 0 ? "-" : ""}${im}`;
  return `${tz(a)} ${b < 0 ? "-" : "+"} ${im}`;
}
const kausdruck = (a: number, b: number) => `(${a} + (${b})*i)`;
/** Zahl in Klammern, wenn negativ (fuer Rechenschritte) */
const kl = (x: number) => (x < 0 ? `(${tz(x)})` : tz(x));

/** Winkel in [0, 360) */
const norm = (w: number) => ((w % 360) + 360) % 360;

/**
 * Exakter Wert von k * cos(w) bzw. k * sin(w) fuer Vielfache von 30° und 45°, mit geradem k.
 * Es gilt 2*cos(w) = ±sqrt(q) mit q aus {0, 1, 2, 3, 4}; also k*cos(w) = ±(k/2)*sqrt(q).
 */
function exakt(k: number, wert: number): { tex: string; sign: number } {
  const q = Math.round((2 * wert) ** 2);
  const s = Math.abs(wert) < 1e-9 ? 0 : Math.sign(wert);
  const h = k / 2;
  if (s === 0 || q === 0) return { tex: "0", sign: 0 };
  if (q === 1) return { tex: tz(h), sign: s };
  if (q === 4) return { tex: tz(2 * h), sign: s };
  return { tex: `${h === 1 ? "" : tz(h)}\\sqrt{${q}}`, sign: s };
}
/** k (cos w + i sin w) exakt als a + bi in LaTeX (k gerade) */
function polarExaktTex(k: number, w: number): string {
  const c = exakt(k, Math.cos((w * Math.PI) / 180));
  const s = exakt(k, Math.sin((w * Math.PI) / 180));
  if (s.sign === 0) return `${c.sign < 0 ? "-" : ""}${c.tex}`;
  const im = s.tex === "1" ? "i" : `${s.tex}\\,i`;
  if (c.sign === 0) return `${s.sign < 0 ? "-" : ""}${im}`;
  return `${c.sign < 0 ? "-" : ""}${c.tex} ${s.sign < 0 ? "-" : "+"} ${im}`;
}
/** Real- und Imaginaerteil von k (cos w + i sin w) einzeln als LaTeX (mit Vorzeichen) */
function polarTeileTex(k: number, w: number): { a: string; b: string } {
  const c = exakt(k, Math.cos((w * Math.PI) / 180));
  const s = exakt(k, Math.sin((w * Math.PI) / 180));
  return { a: `${c.sign < 0 ? "-" : ""}${c.tex}`, b: `${s.sign < 0 ? "-" : ""}${s.tex}` };
}
const polarAusdruck = (r: number | string, w: number) => `(${r})*(cos(inRad(${w})) + i*sin(inRad(${w})))`;

const QUADRANT = (a: number, b: number) => (a > 0 ? (b > 0 ? 1 : 4) : b > 0 ? 2 : 3);

export const DRILLS: Drill[] = [
  drill({
    id: "kz-d-addsub",
    kapitel: "komplexe-zahlen",
    titel: "Addieren und Subtrahieren",
    niveau: 1,
    erzeuge: (r) => {
      const [a, b, c, d] = [r.intOhne0(-7, 7), r.intOhne0(-7, 7), r.intOhne0(-7, 7), r.intOhne0(-7, 7)];
      const k = r.wahl([2, 3, -1, -2] as const);
      const re = a + k * c;
      const im = b + k * d;
      const op = k === -1 ? "z_1 - z_2" : k < 0 ? `z_1 - ${-k}z_2` : `z_1 + ${k}z_2`;
      return {
        angabe: `Gegeben sind $z_1 = ${ktex(a, b)}$ und $z_2 = ${ktex(c, d)}$. Berechne $${op}$ in der Form $a + bi$.`,
        teile: [
          {
            typ: "komplex",
            loesung: `${kausdruck(a, b)} + (${k})*${kausdruck(c, d)}`,
            fehler: [{ wert: `${re} + (${b + d})*i`, meldung: "Der Faktor vor $z_2$ (mit seinem Vorzeichen) gilt auch für den Imaginärteil von $z_2$." }],
          },
        ],
        hinweis: "Realteile zusammenfassen, Imaginärteile zusammenfassen. Ein Faktor vor der Klammer gilt für beide Teile.",
        loesung: `Ansatz: Addieren und Subtrahieren geschieht getrennt für Real- und Imaginärteil. Zuerst wird $z_2$ mit $${k}$ multipliziert.\n---\n$${k}\\cdot z_2 = ${ktex(k * c, k * d)}$.\n---\nRealteil: $${tz(a)} + ${kl(k * c)} = ${tz(re)}$. Imaginärteil: $${tz(b)} + ${kl(k * d)} = ${tz(im)}$.\n---\nErgebnis: $${op} = ${ktex(re, im)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-mult",
    kapitel: "komplexe-zahlen",
    titel: "Multiplizieren in algebraischer Form",
    niveau: 1,
    erzeuge: (r) => {
      const [a, b, c, d] = [r.intOhne0(-6, 6), r.intOhne0(-6, 6), r.intOhne0(-6, 6), r.intOhne0(-6, 6)];
      const re = a * c - b * d;
      const im = a * d + b * c;
      return {
        angabe: `Berechne $(${ktex(a, b)})\\,(${ktex(c, d)})$ in der Form $a + bi$.`,
        teile: [
          {
            typ: "komplex",
            loesung: `${kausdruck(a, b)} * ${kausdruck(c, d)}`,
            fehler: [{ wert: `${a * c + b * d} + (${im})*i`, meldung: "Beim Produkt der Imaginärteile entsteht $i^2 = -1$. Dieses Produkt wechselt deshalb das Vorzeichen, bevor es zum Realteil kommt." }],
          },
        ],
        hinweis: "Jeden Teil mit jedem Teil multiplizieren (vier Produkte), dann $i^2 = -1$ einsetzen.",
        loesung: `Ansatz: Ausmultiplizieren wie bei zwei Klammern. Es entstehen vier Produkte.\n---\n$${tz(a * c)} ${a * d < 0 ? "-" : "+"} ${tz(Math.abs(a * d))}i ${b * c < 0 ? "-" : "+"} ${tz(Math.abs(b * c))}i ${b * d < 0 ? "-" : "+"} ${tz(Math.abs(b * d))}i^2$.\n---\nMit $i^2 = -1$ wird $${tz(b * d)}i^2 = ${tz(-b * d)}$. Realteil: $${tz(a * c)} ${b * d < 0 ? "+" : "-"} ${tz(Math.abs(b * d))} = ${tz(re)}$. Imaginärteil: $${tz(a * d)} + ${kl(b * c)} = ${tz(im)}$.\n---\nErgebnis: $${ktex(re, im)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-div",
    kapitel: "komplexe-zahlen",
    titel: "Dividieren mit der Konjugierten",
    niveau: 2,
    erzeuge: (r) => {
      // Ergebnis ganzzahlig waehlen: z1 = w * z2
      const [p, q, c, d] = [r.int(-5, 5), r.intOhne0(-5, 5), r.intOhne0(-4, 4), r.intOhne0(-4, 4)];
      const a = p * c - q * d;
      const b = p * d + q * c;
      const n = c * c + d * d;
      return {
        angabe: `Bringe $\\dfrac{${ktex(a, b)}}{${ktex(c, d)}}$ auf die Form $a + bi$.`,
        teile: [{ typ: "komplex", loesung: `${kausdruck(a, b)} / ${kausdruck(c, d)}` }],
        hinweis: `Erweitere Zähler und Nenner mit der Konjugierten des Nenners, $${ktex(c, -d)}$.`,
        loesung: `Ansatz: Mit der Konjugierten des Nenners $${ktex(c, -d)}$ erweitern. Dann wird der Nenner reell.\n---\nNenner: $(${ktex(c, d)})(${ktex(c, -d)}) = ${kl(c)}^2 + ${kl(d)}^2 = ${n}$.\n---\nZähler: $(${ktex(a, b)})(${ktex(c, -d)}) = ${ktex(a * c + b * d, b * c - a * d)}$.\n---\nReal- und Imaginärteil durch $${n}$ teilen: $${ktex(p, q)}$. Probe: $(${ktex(p, q)})(${ktex(c, d)}) = ${ktex(a, b)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-betrag",
    kapitel: "komplexe-zahlen",
    titel: "Betrag",
    niveau: 1,
    erzeuge: (r) => {
      const [m, n] = r.wahl([[3, 4], [5, 12], [8, 6], [6, 8], [9, 12], [8, 15], [1, 1], [2, 3]] as const);
      const a = m * r.vorzeichen();
      const b = n * r.vorzeichen();
      const s = a * a + b * b;
      const exaktWert = Number.isInteger(Math.sqrt(s)) ? ` = ${Math.sqrt(s)}` : ` \\approx ${tz(Math.sqrt(s), 3)}`;
      return {
        angabe: `Berechne den Betrag $|${ktex(a, b)}|$ (exakt oder auf drei Nachkommastellen).`,
        teile: [{ typ: "zahl", loesung: `sqrt(${s})`, fehler: [{ wert: `${a + b}`, meldung: "Der Betrag ist nicht die Summe der Teile, sondern die Länge des Pfeils: $\\sqrt{a^2 + b^2}$." }] }],
        hinweis: "Satz des Pythagoras: $|a + bi| = \\sqrt{a^2 + b^2}$. In die Formel kommen nur reelle Zahlen, kein $i$.",
        loesung: `Ansatz: Der Betrag ist die Länge des Pfeils. Real- und Imaginärteil sind die Katheten.\n---\n$|z| = \\sqrt{${kl(a)}^2 + ${kl(b)}^2} = \\sqrt{${a * a} + ${b * b}} = \\sqrt{${s}}${exaktWert}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-argument",
    kapitel: "komplexe-zahlen",
    titel: "Argument mit Quadrantenregel",
    niveau: 2,
    erzeuge: (r) => {
      const a = r.intOhne0(-6, 6);
      const b = r.intOhne0(-6, 6);
      let phi = (Math.atan2(b, a) * 180) / Math.PI;
      if (phi < 0) phi += 360;
      const alpha = (Math.atan(b / a) * 180) / Math.PI;
      const quadrant = QUADRANT(a, b);
      const korrektur = a < 0 ? "Wegen $a < 0$ (links der imaginären Achse) kommen $180°$ dazu" : b < 0 ? "Im 4. Quadranten kommen $360°$ dazu, damit der Winkel in $[0°, 360°)$ liegt" : "Im 1. Quadranten ist keine Korrektur nötig";
      return {
        angabe: `Bestimme das Argument $\\varphi \\in [0°, 360°)$ von $z = ${ktex(a, b)}$ in Grad (auf zwei Nachkommastellen).`,
        teile: [
          {
            typ: "zahl",
            loesung: `mod(inGrad(atan2(${b}, ${a})) + 360, 360)`,
            einheit: "°",
            toleranz: 0.1,
            fehler: quadrant === 1 ? undefined : [{ wert: `${alpha}`, meldung: "Das ist nur der Arcustangens. Er zeigt immer nach rechts. Korrigiere den Winkel passend zum Quadranten." }],
          },
        ],
        hinweis: "Zuerst eine Skizze: In welchem Quadranten liegt $z$?",
        loesung: `Ansatz: Skizze, Hilfswinkel $\\arctan\\frac ba$, Korrektur je nach Quadrant.\n---\n$z$ liegt im ${quadrant}. Quadranten.\n---\n$\\arctan\\frac{${b}}{${a}} \\approx ${tz(alpha, 2)}°$. ${korrektur}.\n---\n$\\varphi \\approx ${tz(phi, 2)}°$. Kontrolle: Der Winkel passt zum ${quadrant}. Quadranten.`,
      };
    },
  }),
  drill({
    id: "kz-d-potenz-i",
    kapitel: "komplexe-zahlen",
    titel: "Potenzen von i",
    niveau: 1,
    erzeuge: (r) => {
      const n = r.int(5, 2999);
      const rest = n % 4;
      const quot = Math.floor(n / 4);
      const werte = ["1", "i", "-1", "-i"];
      const wert = werte[rest];
      const falsch = werte[quot % 4];
      return {
        angabe: `Berechne $i^{${n}}$.`,
        teile: [
          {
            typ: "komplex",
            loesung: wert,
            fehler: falsch !== wert ? [{ wert: falsch, meldung: `Du hast mit dem Quotienten $${quot}$ gerechnet. Entscheidend ist der **Rest** bei der Division durch $4$, denn volle Viererrunden ergeben $1$.` }] : undefined,
          },
        ],
        hinweis: "Die Potenzen von $i$ wiederholen sich mit Periode $4$. Bestimme den Rest der Hochzahl bei Division durch $4$.",
        loesung: `Ansatz: Es gilt $i^4 = 1$. Volle Viererpakete ändern also nichts, es zählt nur der Rest.\n---\n$${n} = 4 \\cdot ${quot} + ${rest}$, also $i^{${n}} = (i^4)^{${quot}}\\cdot i^{${rest}} = i^{${rest}} = ${wert}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-quadratisch",
    kapitel: "komplexe-zahlen",
    titel: "Quadratische Gleichung mit D < 0",
    niveau: 2,
    erzeuge: (r) => {
      const u = r.int(-5, 5);
      const v = r.int(1, 6);
      const p = -2 * u;
      const q = u * u + v * v;
      const ptex = p === 0 ? "" : ` ${p < 0 ? "-" : "+"} ${Math.abs(p)}z`;
      return {
        angabe: `Löse $z^2${ptex} + ${q} = 0$ in $\\C$. Gib die Lösung mit positivem Imaginärteil an.`,
        teile: [
          {
            typ: "komplex",
            loesung: `${u} + ${v}i`,
            fehler: [{ wert: `${u + v}`, meldung: "Die Diskriminante ist negativ. Ihre Wurzel ist ein Vielfaches von $i$, keine reelle Zahl." }],
          },
        ],
        hinweis: `Kleine Lösungsformel mit $p = ${p}$ und $q = ${q}$. Ist $D < 0$, dann ist $\\sqrt D = i\\sqrt{|D|}$.`,
        loesung: `Ansatz: Kleine Lösungsformel $z = -\\frac p2 \\pm \\sqrt D$ mit $D = \\left(\\frac p2\\right)^2 - q$.\n---\n$D = ${kl(-u)}^2 - ${q} = ${u * u} - ${q} = ${-v * v} < 0$, also $\\sqrt{D} = i\\sqrt{${v * v}} = ${v === 1 ? "" : v}i$.\n---\n$z_{1,2} = ${u} \\pm ${v === 1 ? "" : v}i$. Gesucht ist $${ktex(u, v)}$. Die beiden Lösungen sind zueinander konjugiert.`,
      };
    },
  }),
  drill({
    id: "kz-d-polar-zurueck",
    kapitel: "komplexe-zahlen",
    titel: "Polarform in algebraische Form",
    niveau: 1,
    erzeuge: (r) => {
      const k = r.wahl([2, 4, 6, 8] as const);
      const w = r.wahl([30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330] as const);
      const quadrant = w < 90 ? 1 : w < 180 ? 2 : w < 270 ? 3 : 4;
      const bezug = quadrant === 1 ? w : quadrant === 2 ? 180 - w : quadrant === 3 ? w - 180 : 360 - w;
      const t = polarTeileTex(k, w);
      return {
        angabe: `Schreibe $z = ${k}\\,(\\cos ${w}° + i\\sin ${w}°)$ in der Form $a + bi$ (exakt oder auf drei Nachkommastellen).`,
        teile: [
          {
            typ: "komplex",
            loesung: polarAusdruck(k, w),
            fehler:
              w % 90 === 45
                ? undefined
                : [{ wert: `${k}*(sin(inRad(${w})) + i*cos(inRad(${w})))`, meldung: "Kosinus und Sinus sind vertauscht. Der Realteil ist $r\\cos\\varphi$, der Imaginärteil $r\\sin\\varphi$." }],
          },
        ],
        hinweis: `$${w}°$ liegt im ${quadrant}. Quadranten. Der Bezugswinkel ist $${bezug}°$.`,
        loesung: `Ansatz: $a = r\\cos\\varphi$ und $b = r\\sin\\varphi$. Die Werte holen wir über den Bezugswinkel $${bezug}°$ und die Vorzeichen im ${quadrant}. Quadranten.\n---\n$a = ${k}\\cos ${w}° = ${t.a}$ und $b = ${k}\\sin ${w}° = ${t.b}$.\n---\nErgebnis: $z = ${polarExaktTex(k, w)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-drehstreckung",
    kapitel: "komplexe-zahlen",
    titel: "Multiplizieren und Dividieren in Polarform",
    niveau: 2,
    erzeuge: (r) => {
      const r1 = r.int(2, 9);
      const r2 = r1 === 2 ? r.int(3, 9) : r.int(2, 9);
      const w1 = 10 * r.int(1, 35);
      const w2 = 10 * r.int(1, 35);
      const wp = norm(w1 + w2);
      const wq = norm(w1 - w2);
      return {
        angabe: `Es ist $z_1 = ${r1}\\,e^{i\\cdot ${w1}°}$ und $z_2 = ${r2}\\,e^{i\\cdot ${w2}°}$. Bestimme Betrag und Argument (in $[0°, 360°)$) von $z_1 z_2$ und von $\\frac{z_1}{z_2}$.`,
        teile: [
          { typ: "zahl", label: "$|z_1 z_2|$", loesung: `${r1}*${r2}`, fehler: [{ wert: `${r1 + r2}`, meldung: "Beträge werden multipliziert, nicht addiert." }] },
          { typ: "zahl", label: "$\\arg(z_1 z_2)$", einheit: "°", loesung: `${wp}` },
          { typ: "zahl", label: "$|z_1 / z_2|$", loesung: `${r1}/${r2}` },
          {
            typ: "zahl",
            label: "$\\arg(z_1 / z_2)$",
            einheit: "°",
            loesung: `${wq}`,
            fehler: w1 - w2 < 0 ? [{ wert: `${w1 - w2}`, meldung: "Die Richtung stimmt, aber der Winkel soll in $[0°, 360°)$ liegen. Addiere $360°$." }] : undefined,
          },
        ],
        hinweis: "Beim Multiplizieren Beträge multiplizieren und Winkel addieren, beim Dividieren Beträge dividieren und Winkel subtrahieren.",
        loesung: `Ansatz: Multiplikationsregel in Polarform (Drehstreckung).\n---\n$|z_1 z_2| = ${r1}\\cdot ${r2} = ${r1 * r2}$ und $\\arg(z_1 z_2) = ${w1}° + ${w2}° = ${w1 + w2}°${w1 + w2 >= 360 ? ` \\equiv ${wp}°` : ""}$.\n---\n$|z_1/z_2| = \\frac{${r1}}{${r2}}${bruchTex(r1, r2) !== `\\frac{${r1}}{${r2}}` ? ` = ${bruchTex(r1, r2)}` : ""}$ und $\\arg(z_1/z_2) = ${w1}° - ${w2}° = ${w1 - w2}°${w1 - w2 < 0 ? ` \\equiv ${wq}°` : ""}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-gleichheit",
    kapitel: "komplexe-zahlen",
    titel: "Unbekannte durch Vergleich von Real- und Imaginärteil",
    niveau: 2,
    erzeuge: (r) => {
      const x = r.intOhne0(-6, 6);
      const y = r.intOhne0(-6, 6);
      const p = r.int(2, 4);
      const q = r.wahl([-3, -2, -1, 1, 2, 3].filter((x) => x !== p));
      const s = x + y;
      const t = p * x + q * y;
      const qtex = q === 1 ? "+ y" : q === -1 ? "- y" : `${q < 0 ? "-" : "+"} ${Math.abs(q)}y`;
      return {
        angabe: `Bestimme die reellen Zahlen $x$ und $y$ mit $(x + y) + (${p}x ${qtex})\\,i = ${ktex(s, t)}$.`,
        teile: [
          { typ: "zahl", label: "$x$", loesung: `${x}` },
          { typ: "zahl", label: "$y$", loesung: `${y}` },
        ],
        hinweis: "Realteile vergleichen und Imaginärteile vergleichen. Das ergibt ein lineares Gleichungssystem mit zwei Unbekannten.",
        loesung: `Ansatz: Zwei komplexe Zahlen sind gleich, wenn Real- und Imaginärteile übereinstimmen.\n---\nRealteile: $x + y = ${s}$. Imaginärteile: $${p}x ${qtex} = ${t}$.\n---\nAus der ersten Gleichung $y = ${s} - x$. Einsetzen: $${p}x ${q < 0 ? "-" : "+"} ${Math.abs(q)}(${s} - x) = ${t}$, also $${p - q}x = ${t - q * s}$ und $x = ${x}$.\n---\nDann $y = ${s} - ${kl(x)} = ${y}$. Probe: $(${x} + ${kl(y)}) + (${p}\\cdot ${kl(x)} ${q < 0 ? "-" : "+"} ${Math.abs(q)}\\cdot ${kl(y)})\\,i = ${ktex(s, t)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-de-moivre",
    kapitel: "komplexe-zahlen",
    titel: "Hohe Potenzen mit de Moivre",
    niveau: 2,
    erzeuge: (r) => {
      // Basen mit bekannter Polarform: Betrag sqrt(2) (nur gerade n) oder 2
      const basis = r.wahl([
        { tex: "1 + i", ausdruck: "(1+i)", rTex: "\\sqrt2", w: 45, wurzel2: true },
        { tex: "-1 + i", ausdruck: "(-1+i)", rTex: "\\sqrt2", w: 135, wurzel2: true },
        { tex: "-1 - i", ausdruck: "(-1-i)", rTex: "\\sqrt2", w: 225, wurzel2: true },
        { tex: "1 - i", ausdruck: "(1-i)", rTex: "\\sqrt2", w: 315, wurzel2: true },
        { tex: "\\sqrt3 + i", ausdruck: "(sqrt(3)+i)", rTex: "2", w: 30, wurzel2: false },
        { tex: "1 + \\sqrt3\\, i", ausdruck: "(1+sqrt(3)*i)", rTex: "2", w: 60, wurzel2: false },
        { tex: "-\\sqrt3 + i", ausdruck: "(-sqrt(3)+i)", rTex: "2", w: 150, wurzel2: false },
        { tex: "1 - \\sqrt3\\, i", ausdruck: "(1-sqrt(3)*i)", rTex: "2", w: 300, wurzel2: false },
      ] as const);
      const n = basis.wurzel2 ? 2 * r.int(2, 5) : r.int(3, 6);
      const betrag = basis.wurzel2 ? 2 ** (n / 2) : 2 ** n;
      const roh = n * basis.w;
      const w = norm(roh);
      const runden = Math.floor(roh / 360);
      return {
        angabe: `Berechne $(${basis.tex})^{${n}}$ in der Form $a + bi$.`,
        teile: [
          {
            typ: "komplex",
            loesung: `${basis.ausdruck}^${n}`,
            fehler: w % 180 !== 0 ? [{ wert: polarAusdruck(betrag, norm(-roh)), meldung: "Das ist die Konjugierte des Ergebnisses. Prüfe das Vorzeichen des Winkels: Er wird gegen den Uhrzeigersinn gemessen." }] : undefined,
          },
        ],
        hinweis: `Polarform der Basis: $r = ${basis.rTex}$ und $\\varphi = ${basis.w}°$. Nach de Moivre: $r^{${n}}$ und $${n}\\varphi$.`,
        loesung: `Ansatz: Hohe Potenzen rechnet man in Polarform mit dem Satz von de Moivre.\n---\n$${basis.tex}$ hat den Betrag $${basis.rTex}$ und das Argument $${basis.w}°$.\n---\n$r^{${n}} = (${basis.rTex})^{${n}} = ${betrag}$ und $${n}\\cdot ${basis.w}° = ${roh}°${runden > 0 ? ` = ${runden}\\cdot 360° + ${w}°` : ""}$.\n---\nErgebnis: $${betrag}\\,(\\cos ${w}° + i\\sin ${w}°) = ${polarExaktTex(betrag, w)}$.`,
      };
    },
  }),
  drill({
    id: "kz-d-wurzeln",
    kapitel: "komplexe-zahlen",
    titel: "Alle Lösungen von zⁿ = w",
    niveau: 3,
    erzeuge: (r) => {
      const n = r.wahl([2, 3, 4] as const);
      const rho = r.wahl([2, 4] as const);
      const phi = n === 4 ? r.wahl([0, 180] as const) : r.wahl([0, 90, 180, 270] as const);
      const betragW = rho ** n;
      const wurzelTex = n === 2 ? `\\sqrt{${betragW}}` : `\\sqrt[${n}]{${betragW}}`;
      const wTex = phi === 0 ? `${betragW}` : phi === 90 ? `${betragW}i` : phi === 180 ? `-${betragW}` : `-${betragW}i`;
      const winkel = Array.from({ length: n }, (_, k) => (phi + k * 360) / n);
      const k = r.int(0, n - 1);
      const liste = winkel.map((w, j) => `$z_${j} = ${rho}\\,(\\cos ${w}° + i\\sin ${w}°) = ${polarExaktTex(rho, w)}$`).join(", ");
      return {
        angabe: `Die Gleichung $z^{${n}} = ${wTex}$ hat ${n} Lösungen $z_0, \\dots, z_{${n - 1}}$, geordnet nach aufsteigendem Argument in $[0°, 360°)$. Gib den gemeinsamen Betrag der Lösungen und die Lösung $z_{${k}}$ an (exakt oder auf drei Nachkommastellen).`,
        teile: [
          { typ: "zahl", label: "Betrag", loesung: `nthRoot(${betragW}, ${n})`, fehler: [{ wert: `${betragW}`, meldung: `Aus dem Betrag $${betragW}$ wird die ${n}. Wurzel gezogen.` }] },
          { typ: "komplex", label: `$z_{${k}}$`, loesung: polarAusdruck(rho, winkel[k]) },
        ],
        hinweis: `$${wTex}$ hat den Betrag $${betragW}$ und den Winkel $${phi}°$. Die Lösungen haben die Winkel $\\frac{${phi}° + k\\cdot 360°}{${n}}$.`,
        loesung: `Ansatz: Formel für die $n$-ten Wurzeln. Betrag der Lösungen $${wurzelTex}$, Winkel $\\frac{\\varphi + k\\cdot 360°}{${n}}$.\n---\n$${wurzelTex} = ${rho}$. Die Winkel sind ${winkel.map((w) => `$${w}°$`).join(", ")}. Sie liegen jeweils $${360 / n}°$ auseinander.\n---\n${liste}.\n---\nGesucht ist $z_{${k}} = ${polarExaktTex(rho, winkel[k])}$. Probe mit de Moivre: $${rho}^{${n}} = ${betragW}$ und $${n}\\cdot ${winkel[k]}° = ${n * winkel[k]}°$, das ist der Winkel von $${wTex}$ plus volle Umdrehungen.`,
      };
    },
  }),
  drill({
    id: "kz-d-polynom",
    kapitel: "komplexe-zahlen",
    titel: "Kubische Gleichung mit einer bekannten Nullstelle",
    niveau: 3,
    erzeuge: (r) => {
      const z0 = r.intOhne0(-3, 3);
      const u = r.int(-3, 3);
      const v = r.int(1, 4);
      const p = -2 * u;
      const q = u * u + v * v;
      // (z - z0)(z^2 + p z + q)
      const koeffs = [1, p - z0, q - z0 * p, -z0 * q];
      return {
        angabe: `Das Polynom $f(z) = ${polyTex(koeffs, "z")}$ hat die Nullstelle $z_0 = ${z0}$. Bestimme die nicht-reelle Nullstelle mit positivem Imaginärteil.`,
        teile: [
          {
            typ: "komplex",
            loesung: `${u} + ${v}i`,
            fehler: u !== 0 ? [{ wert: `${-u} + ${v}i`, meldung: `Der Restfaktor ist $${polyTex([1, p, q], "z")}$. Für den Realteil gilt $-\\frac p2$, mit umgedrehtem Vorzeichen von $p$.` }] : undefined,
          },
        ],
        hinweis: `Teile $f(z)$ durch $(z ${z0 < 0 ? "+" : "-"} ${Math.abs(z0)})$ (Horner-Schema mit $${z0}$). Löse dann die quadratische Gleichung.`,
        loesung: `Ansatz: Linearfaktor $(z ${z0 < 0 ? "+" : "-"} ${Math.abs(z0)})$ abspalten, dann bleibt eine quadratische Gleichung.\n---\nHorner-Schema mit $${z0}$: Die Koeffizienten $${koeffs.join(",\\ ")}$ ergeben $1,\\ ${p},\\ ${q}$ mit Rest $0$. Also $f(z) = (z ${z0 < 0 ? "+" : "-"} ${Math.abs(z0)})(${polyTex([1, p, q], "z")})$.\n---\n$${polyTex([1, p, q], "z")} = 0$: $D = ${kl(-u)}^2 - ${q} = ${-v * v}$, also $\\sqrt D = ${v === 1 ? "" : v}i$ und $z = ${u} \\pm ${v === 1 ? "" : v}i$.\n---\nGesucht ist $${ktex(u, v)}$. Die dritte Nullstelle ist ihre Konjugierte $${ktex(u, -v)}$, wie bei reellen Koeffizienten zu erwarten.`,
      };
    },
  }),
];
