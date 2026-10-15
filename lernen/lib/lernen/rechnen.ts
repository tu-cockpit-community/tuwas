import { create, all, type MathJsInstance, type Complex } from "mathjs";
import type { Teil } from "./typen";
import type { CodeErgebnis } from "./java/ergebnis";
import { istNeuerTyp, musterTextNeu, passtFehlerbild, pruefeNeu } from "./bewertung";

/**
 * Rechenkern fuer Antwortpruefung, Plots und Validator. Laeuft identisch in Browser und Node.
 * Eingaben werden aus Schulnotation (Dezimalkomma, √, ², π, ln, ·) in mathjs-Syntax uebersetzt.
 */

const math: MathJsInstance = create(all, {});

function binom(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  return Number(math.combinations(n, k));
}
function binompdf(n: number, p: number, k: number): number {
  return binom(n, k) * p ** k * (1 - p) ** (n - k);
}
function binomcdf(n: number, p: number, k: number): number {
  let s = 0;
  for (let i = 0; i <= Math.floor(k); i++) s += binompdf(n, p, i);
  return s;
}
function normcdf(x: number, mu = 0, sigma = 1): number {
  return 0.5 * (1 + Number(math.erf((x - mu) / (sigma * Math.SQRT2))));
}
/** Quantil der Standardnormalverteilung (Acklam), fuer Konfidenz-/Schwellenaufgaben. */
function invnorm(p: number, mu = 0, sigma = 1): number {
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const pl = 0.02425;
  let q: number, r: number, z: number;
  if (p < pl) {
    q = Math.sqrt(-2 * Math.log(p));
    z = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= 1 - pl) {
    q = p - 0.5;
    r = q * q;
    z = ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    z = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  return mu + sigma * z;
}
/** numerisches Integral (Simpson) -- fuer Validator-Ausdruecke wie integral("x^2", 0, 3) */
function integral(f: string, a: number, b: number, variable = "x"): number {
  const code = math.compile(normalisiere(f));
  const n = 2000;
  const h = (b - a) / n;
  let s = 0;
  for (let i = 0; i <= n; i++) {
    const x = a + i * h;
    const w = i === 0 || i === n ? 1 : i % 2 === 1 ? 4 : 2;
    s += w * Number(code.evaluate({ [variable]: x }));
  }
  return (s * h) / 3;
}

math.import(
  {
    ln: (x: number) => Math.log(x),
    lg: (x: number) => Math.log10(x),
    ld: (x: number) => Math.log2(x),
    arcsin: (x: number) => Math.asin(x),
    arccos: (x: number) => Math.acos(x),
    arctan: (x: number) => Math.atan(x),
    binom,
    nCr: binom,
    binompdf,
    binomcdf,
    normcdf,
    invnorm,
    integral,
    /** Grad -> Bogenmass */
    inRad: (x: number) => (x * Math.PI) / 180,
    /** Bogenmass -> Grad */
    inGrad: (x: number) => (x * 180) / Math.PI,
  },
  { override: true },
);

const HOCHZAHLEN: Record<string, string> = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };

/** Schulnotation -> mathjs. Dezimalkomma wird nur zwischen Ziffern ersetzt, damit Funktions-
 * argumente wie binom(12,3) erhalten bleiben -- "binom(12, 3)" und "1,5" sind beide eindeutig. */
export function normalisiere(eingabe: string): string {
  let s = eingabe.trim();
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, (m) => "^(" + [...m].map((c) => HOCHZAHLEN[c]).join("") + ")");
  s = s
    .replace(/·|×|⋅/g, "*")
    .replace(/÷/g, "/")
    // ":" ist Divisionszeichen -- ausser im Bedingungsausdruck "bed ? a : b" (mathjs)
    .replace(/:/g, s.includes("?") ? ":" : "/")
    .replace(/−|–/g, "-")
    .replace(/π/g, "pi")
    .replace(/∞/g, "Infinity")
    .replace(/√\s*\(/g, "sqrt(")
    .replace(/√\s*([0-9.]+|[a-z])/g, "sqrt($1)")
    // "30°" als Antwort = Zahl in Grad; "sin(30°)" innerhalb eines Ausdrucks = Winkel in Grad
    .replace(/°\s*$/, "")
    .replace(/°/g, " deg")
    .replace(/\bj\b/g, "i");
  // "2x(x-1)": ein einzelner Buchstabe direkt vor "(" ist eine Variable, kein Funktionsaufruf.
  // Mehrbuchstabige Namen (sin, ln, binom ...) bleiben Funktionen.
  s = s.replace(/(^|[^A-Za-z_])([A-Za-z]|pi)\(/g, "$1$2*(");
  return dezimalkomma(s);
}

/** "1,5" -> "1.5". Innerhalb eines Funktionsaufrufs wie binomcdf(12,0.25,2) bleibt das Komma
 * Argumenttrenner; dort muss ein Dezimalpunkt verwendet werden. */
function dezimalkomma(s: string): string {
  const stapel: boolean[] = [];
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "[") stapel.push(c === "(" && /[A-Za-z_]$/.test(s.slice(0, i)));
    else if (c === ")" || c === "]") stapel.pop();
    if (c === "," && !stapel.some(Boolean) && /\d/.test(s[i - 1] ?? "") && /\d/.test(s[i + 1] ?? "")) out += ".";
    else out += c;
  }
  return out;
}

export type Wert = number | Complex;

export function werte(ausdruck: string | number, scope: Record<string, unknown> = {}): Wert {
  if (typeof ausdruck === "number") return ausdruck;
  const r = math.evaluate(normalisiere(ausdruck), { ...scope });
  if (typeof r === "number") return r;
  if (r && typeof r === "object" && "re" in r && "im" in r) return r as Complex;
  // Einheiten (z.B. "30 km/h") nie stillschweigend verwerfen; pruefeTeil rechnet sie gezielt um
  if (r && typeof r === "object" && (r as { isUnit?: boolean }).isUnit) throw new Error("Einheit");
  if (typeof r === "boolean") return r ? 1 : 0;
  throw new Error(`Kein Zahlenwert: ${ausdruck}`);
}

export function werteReell(ausdruck: string | number, scope: Record<string, unknown> = {}): number {
  const w = werte(ausdruck, scope);
  if (typeof w === "number") return w;
  if (Math.abs(w.im) < 1e-12) return w.re;
  throw new Error(`Komplexes Ergebnis, reelle Zahl erwartet: ${ausdruck}`);
}

/** Kompiliert f(x) einmal; liefert NaN statt Exceptions (fuer Plots). */
export function kompiliere(f: string, variable = "x"): (x: number, extra?: Record<string, number>) => number {
  const code = math.compile(normalisiere(f));
  return (x, extra = {}) => {
    try {
      const r = code.evaluate({ ...extra, [variable]: x });
      if (typeof r === "number") return r;
      if (r && typeof r === "object" && "im" in r) return Math.abs((r as Complex).im) < 1e-12 ? (r as Complex).re : NaN;
      return NaN;
    } catch {
      return NaN;
    }
  };
}

function nahe(a: number, b: number, tol?: number): boolean {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return a === b;
  if (tol !== undefined) return Math.abs(a - b) <= tol + 1e-12;
  return Math.abs(a - b) <= Math.max(1e-6, 0.005 * Math.abs(b));
}

/** `leer`: nichts eingegeben -- zaehlt weder als richtig noch als Fehlversuch. */
export type Urteil = {
  ok: boolean;
  meldung?: string;
  leer?: boolean;
  /** Index des getroffenen Fehlerbilds */
  fehlerbild?: number;
  /** Teilwertung 0..1 (richtigfalsch, lueckentext, zeilen, trace, code); fehlt = alles oder nichts */
  anteil?: number;
  /** Testergebnisse des Java-Runners (nur `code`) */
  java?: CodeErgebnis;
};

const LEER: Urteil = { ok: false, leer: true, meldung: "Bitte eine Antwort eingeben." };

function istLeer(teil: Teil, eingabe: string | (string | number)[]): boolean {
  if (teil.typ === "text") return false;
  if (Array.isArray(eingabe)) return eingabe.length === 0 || eingabe.every((e) => String(e).trim() === "");
  return eingabe.trim() === "";
}

function zahlAus(eingabe: string): number {
  if (!eingabe.trim()) throw new Error("leer");
  return werteReell(eingabe);
}

function komplexAus(e: string | number): Complex {
  const w = werte(e);
  return typeof w === "number" ? (math.complex(w, 0) as Complex) : w;
}

/** Zufaellige, aber deterministische Stichprobe fuer den Termvergleich. */
function stichproben(bereich: [number, number], n = 9): number[] {
  const [a, b] = bereich;
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(a + ((b - a) * (i + 0.37 + 0.13 * Math.sin(i * 7.1))) / n);
  return out;
}

export function termeGleich(
  eingabe: string,
  loesung: string,
  variable = "x",
  bereich: [number, number] = [-2.3, 3.7],
  plusC = false,
): boolean {
  const f = kompiliere(eingabe, variable);
  const g = kompiliere(loesung, variable);
  let verschiebung: number | null = null;
  let gueltig = 0;
  for (const x of stichproben(bereich)) {
    const a = f(x);
    const b = g(x);
    if (!Number.isFinite(b)) continue;
    if (!Number.isFinite(a)) return false;
    gueltig++;
    let d = a - b;
    if (plusC) {
      if (verschiebung === null) verschiebung = d;
      d -= verschiebung;
    }
    if (Math.abs(d) > Math.max(1e-6, 1e-6 * Math.abs(b))) return false;
  }
  return gueltig >= 3;
}

/** Liste aus Nutzereingabe: Trennzeichen ";" oder Zeilenumbruch, "{ }" werden ignoriert. */
export function liste(eingabe: string): string[] {
  const s = eingabe.replace(/[{}]/g, "").trim();
  if (!s || s === "∅" || /^leer$/i.test(s)) return [];
  const teile = s.includes(";") || s.includes("\n") ? s.split(/[;\n]/) : s.split(/,\s+|,(?=\s*-?[a-zA-Zπ√(])/);
  return teile.map((t) => t.trim()).filter(Boolean);
}

/** Prueft eine Eingabe; ist sie falsch, wird geschaut, ob sie einem hinterlegten Fehlerbild entspricht. */
export function pruefeTeil(teil: Teil, eingabe: string | (string | number)[]): Urteil {
  if (istNeuerTyp(teil)) {
    const u = pruefeNeu(teil, eingabe);
    if (u.ok || u.leer || !teil.fehler?.length) return u;
    const i = teil.fehler.findIndex((f) => passtFehlerbild(teil, eingabe, f.wert));
    return i < 0 ? u : { ...u, meldung: undefined, fehlerbild: i };
  }
  const u = pruefeRoh(teil, eingabe);
  if (u.ok || u.leer || teil.typ === "text" || !teil.fehler?.length) return u;
  for (let i = 0; i < teil.fehler.length; i++) {
    const w = teil.fehler[i].wert;
    const als: Teil =
      teil.typ === "auswahl"
        ? { ...teil, richtig: (Array.isArray(w) ? w : [w]).map(Number), fehler: undefined }
        : ({ ...teil, loesung: teil.typ === "vektor" || teil.typ === "menge" ? (Array.isArray(w) ? w : [w]) : Array.isArray(w) ? String(w[0]) : w, fehler: undefined } as Teil);
    if (pruefeRoh(als, eingabe).ok) return { ok: false, fehlerbild: i };
  }
  return u;
}

/** Eingabe mit Einheit ("108 km/h") als Zahl in `einheit`; null, wenn sie keine dazu passende Einheit hat. */
function inEinheit(eingabe: string, einheit: string): number | null {
  try {
    const u = math.evaluate(normalisiere(eingabe)) as { isUnit?: boolean; toNumber: (z: string) => number };
    return u?.isUnit ? u.toNumber(einheit.replace(/°/g, "deg")) : null;
  } catch {
    return null;
  }
}

function pruefeRoh(teil: Teil, eingabe: string | (string | number)[]): Urteil {
  if (istNeuerTyp(teil)) return pruefeNeu(teil, eingabe);
  if (istLeer(teil, eingabe)) return LEER;
  try {
    switch (teil.typ) {
      case "zahl": {
        // "30 m/s" bei einheit "m/s": Einheit der Aufgabe am Ende abschneiden
        let roh = String(eingabe).trim();
        const e = teil.einheit?.replace(/\s+/g, "");
        const kompakt = roh.replace(/\s+/g, "");
        if (e && kompakt.length > e.length && kompakt.endsWith(e)) {
          const ohne = kompakt.slice(0, -e.length);
          // "5000 mm" bei einheit "m" ist ein Vorsatz (mm), nicht "5000m" + "m": steht ein Buchstabe davor und laesst
          // sich die ganze Eingabe als Einheit umrechnen, wird umgerechnet; "2pi m" o. ae. wird weiter abgeschnitten
          if (!(/[A-Za-zµμ]$/.test(ohne) && inEinheit(roh, teil.einheit!) !== null)) roh = ohne;
        }
        let ist: number;
        try {
          ist = zahlAus(roh);
        } catch (err) {
          if ((err as Error).message !== "Einheit") throw err;
          // andere Einheit eingegeben: in die Einheit der Aufgabe umrechnen, falls kompatibel
          const u = teil.einheit ? inEinheit(roh, teil.einheit) : null;
          if (u === null) return { ok: false, meldung: teil.einheit ? `Bitte als Zahl in ${teil.einheit} angeben.` : "Bitte nur die Zahl ohne Einheit angeben." };
          ist = u;
        }
        const soll = werteReell(teil.loesung);
        if (nahe(ist, soll, teil.toleranz)) return { ok: true };
        if (Math.abs(ist + soll) < 1e-9 + 0.005 * Math.abs(soll) && Math.abs(soll) > 1e-9)
          return { ok: false, meldung: "Vorzeichen prüfen." };
        if (Math.abs(soll) > 1e-9 && nahe(ist * 100, soll) ) return { ok: false, meldung: "Faktor 100 daneben, Prozent vs. Dezimalzahl?" };
        if (Math.abs(soll) > 1e-9 && nahe(ist / 100, soll)) return { ok: false, meldung: "Faktor 100 daneben, Prozent vs. Dezimalzahl?" };
        return { ok: false };
      }
      case "term":
        return { ok: termeGleich(String(eingabe), teil.loesung, teil.variable, teil.bereich, teil.plusC) };
      case "komplex": {
        const ist = komplexAus(String(eingabe));
        const soll = komplexAus(teil.loesung);
        return { ok: nahe(ist.re, soll.re, teil.toleranz) && nahe(ist.im, soll.im, teil.toleranz) };
      }
      case "vektor": {
        const felder = Array.isArray(eingabe) ? eingabe.map(String) : liste(String(eingabe));
        if (felder.length !== teil.loesung.length) return { ok: false, meldung: `${teil.loesung.length} Komponenten erwartet.` };
        const ist = felder.map(zahlAus);
        const soll = teil.loesung.map((s) => werteReell(s));
        if (!teil.vielfaches) return { ok: ist.every((v, i) => nahe(v, soll[i], teil.toleranz)) };
        const k = soll.findIndex((v) => Math.abs(v) > 1e-12);
        if (k < 0 || Math.abs(ist[k]) < 1e-12) return { ok: false };
        const lambda = ist[k] / soll[k];
        const ok = ist.every((v, i) => Math.abs(v - lambda * soll[i]) <= 1e-6 + 0.005 * Math.abs(v));
        return { ok, meldung: ok && Math.abs(lambda - 1) > 1e-9 ? "Richtig (Vielfaches gilt auch)." : undefined };
      }
      case "menge": {
        const ist = liste(String(eingabe)).map(zahlAus);
        const soll = teil.loesung.map((s) => werteReell(s));
        if (ist.length !== soll.length)
          return { ok: false, meldung: soll.length === 0 ? "Die Lösungsmenge ist leer." : `Anzahl der Elemente stimmt nicht.` };
        const frei = [...soll];
        for (const v of ist) {
          const idx = frei.findIndex((s) => nahe(v, s, teil.toleranz));
          if (idx < 0) return { ok: false };
          frei.splice(idx, 1);
        }
        return { ok: true };
      }
      case "auswahl": {
        const gewaehlt = Array.isArray(eingabe) ? [...eingabe].sort() : [];
        const soll = [...teil.richtig].sort();
        return { ok: gewaehlt.length === soll.length && gewaehlt.every((v, i) => v === soll[i]) };
      }
      case "text":
        return { ok: false, meldung: "Selbsteinschätzung" };
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    if (msg === "leer") return { ok: false, meldung: "Bitte eine Antwort eingeben." };
    return { ok: false, meldung: "Eingabe nicht lesbar. Beispiele: 1,5 · 3/4 · sqrt(2) · 2pi · ln(3)" };
  }
}

/** Musterwert eines Teils als Text (Fallback, wenn kein `anzeige` gesetzt ist). */
export function musterText(teil: Teil): string {
  const fmt = (v: number) => {
    if (Number.isInteger(v)) return String(v);
    const r = Number(v.toPrecision(6));
    return String(r).replace(".", ",");
  };
  if (istNeuerTyp(teil)) return musterTextNeu(teil);
  try {
    switch (teil.typ) {
      case "zahl":
        return fmt(werteReell(teil.loesung)) + (teil.einheit ? ` ${teil.einheit}` : "");
      case "komplex": {
        const z = komplexAus(teil.loesung);
        const im = fmt(Math.abs(z.im));
        return z.im === 0 ? fmt(z.re) : `${fmt(z.re)} ${z.im < 0 ? "−" : "+"} ${im}i`;
      }
      case "vektor":
        return "(" + teil.loesung.map((s) => fmt(werteReell(s))).join(" | ") + ")";
      case "menge":
        return teil.loesung.length ? "{" + teil.loesung.map((s) => fmt(werteReell(s))).join("; ") + "}" : "∅";
      case "term":
        return teil.loesung;
      case "auswahl":
        return teil.richtig.map((i) => teil.optionen[i]).join(", ");
      case "text":
        return "";
    }
  } catch {
    return String((teil as { loesung?: unknown }).loesung ?? "");
  }
}

/** LaTeX-Vorschau der Nutzereingabe (mathjs toTex). */
export function alsTex(eingabe: string): string | null {
  try {
    if (!eingabe.trim()) return null;
    return math
      .parse(normalisiere(eingabe))
      .toTex({ parenthesis: "auto", implicit: "hide" })
      .replace(/(\d)\.(\d)/g, "$1{,}$2");
  } catch {
    return null;
  }
}

export { math };
