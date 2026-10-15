/**
 * Validator fuer Lernkurse unter content/<fach>/.
 *   npm run lernen:pruefen                 -> alle Kurse
 *   npm run lernen:pruefen -- mathe3       -> ein Kurs
 *   npm run lernen:pruefen -- mathe3 03    -> nur Kapiteldateien, die mit "03" beginnen
 * Prueft: Frontmatter/YAML-Schema, eindeutige ids, jede Musterloesung rechnet und besteht ihre eigene
 * Pruefung (auch gerundet), Term-Loesungen sind auswertbar, Plot-Ausdruecke, Widget-Namen,
 * jede $...$-Formel kompiliert mit KaTeX, Generatoren ueber 200 Seeds.
 */
import fs from "node:fs";
import path from "node:path";
import katex from "katex";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Md } from "../components/lernen/Md";
import { parse as yamlParse } from "yaml";
import { parseKapitel } from "../lib/lernen/parser";
import { KursSchema, PlotSchema, PruefungSchema, type Aufgabe, type PlotSpec, type Teil, type Block } from "../lib/lernen/typen";
import { pruefeTeil, werteReell, werte, kompiliere, musterText } from "../lib/lernen/rechnen";
import { ALLE_WIDGET_NAMEN } from "../components/lernen/widgets/namen";
import { Rng, type Drill } from "../lib/lernen/training";
import { karteId } from "../lib/lernen/karteId";
import { kartenGruppen } from "../lib/lernen/kartenGruppen";
import { pruefeQualitaet, type QWarnung } from "./qualitaet";
import type { CodeTeil, TeilVon } from "../lib/lernen/typen";
import { istNeuerTyp, lueckenImText, startReihenfolge } from "../lib/lernen/bewertung";
import { fuelleLuecken, klassenName } from "../lib/lernen/java/quelle";
import { fuehreProgrammeAus, jdkVerfuegbar, pruefeCode } from "../lib/lernen/java/runner";

const WURZEL = path.join(process.cwd(), "content");
const argumente = process.argv.slice(2);
const mitQualitaet = argumente.includes("--qualitaet");
const [nurKurs, nurKapitel] = argumente.filter((a) => !a.startsWith("--"));
const qWarnungen: QWarnung[] = [];

let fehlerZahl = 0;
let warnZahl = 0;
function fehler(ort: string, msg: string) {
  fehlerZahl++;
  console.log(`  ✗ ${ort}: ${msg}`);
}
function warnung(ort: string, msg: string) {
  warnZahl++;
  console.log(`  ! ${ort}: ${msg}`);
}

const MACROS = { "\\R": "\\mathbb{R}", "\\N": "\\mathbb{N}", "\\Z": "\\mathbb{Z}", "\\Q": "\\mathbb{Q}", "\\C": "\\mathbb{C}", "\\dd": "\\,\\mathrm{d}" };

/** Rendert Markdown durch dieselbe Pipeline wie die App und meldet, was dort kaputt ankommt. */
function pruefeRender(ort: string, md: string) {
  let html: string;
  try {
    html = renderToStaticMarkup(createElement(Md, null, md));
  } catch (e) {
    return fehler(ort, `Rendern fehlgeschlagen: ${(e as Error).message.split("\n")[0]}`);
  }
  for (const m of html.matchAll(/class="katex-error"[^>]*title="([^"]*)"/g)) fehler(ort, `KaTeX in der Pipeline: ${m[1].slice(0, 140)}`);
  const text = html.replace(/<annotation[\s\S]*?<\/annotation>/g, "").replace(/<(code|pre)[\s\S]*?<\/\1>/g, "");
  if (text.includes("$$")) fehler(ort, "unverarbeitetes $$ im gerenderten Text (Leerzeile vor/nach dem Formelblock fehlt?)");
}

/** Findet $$...$$ und $...$ (ohne \$-Escapes) und rendert sie mit KaTeX strikt; eingebettete ```plot-Bloecke werden mitgeprueft. */
let mitRender = true;
function pruefeTex(ort: string, md: string | undefined) {
  if (!md) return;
  if (mitRender) pruefeRender(ort, md);
  for (const m of md.matchAll(/^(\s*)```plot\s*\n([\s\S]*?)^\1```/gm)) {
    const yamlText = m[2].split("\n").map((z) => z.slice(m[1].length)).join("\n");
    let roh: unknown;
    try {
      roh = yamlParse(yamlText);
    } catch (e) {
      fehler(ort, `eingebetteter plot: YAML-Fehler ${(e as Error).message.split("\n")[0]}`);
      continue;
    }
    const r = PlotSchema.safeParse(roh);
    if (!r.success) fehler(ort, `eingebetteter plot: ${r.error.issues.map((i) => i.path.join(".") + ": " + i.message).join("; ")}`);
    else pruefePlot(ort + " (eingebetteter plot)", r.data);
  }
  const ohneCode = md.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
  const re = /\$\$([\s\S]+?)\$\$|(?<![\\$])\$(?!\$)((?:\\.|[^$\\])+?)\$/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(ohneCode))) {
    const tex = m[1] ?? m[2];
    try {
      katex.renderToString(tex, { throwOnError: true, displayMode: m[1] !== undefined, macros: { ...MACROS }, strict: "ignore" });
    } catch (e) {
      fehler(ort, `KaTeX: ${(e as Error).message.split("\n")[0]}  in  ${tex.slice(0, 80)}`);
    }
  }
  const dollar = (ohneCode.replace(/\\\$/g, "").match(/\$/g) ?? []).length;
  if (dollar % 2 === 1) fehler(ort, "ungerade Anzahl $-Zeichen (offene Formel?)");
}


/** Uebersetzt einfache LaTeX-Anzeigen ("\\tfrac{11}{5} - 2i", "-3 - 3\\sqrt3\\,i") in mathjs. null = nicht pruefbar. */
function texZuAusdruck(tex: string): string | null {
  let s = tex
    .replace(/\\[,;!: ]|\\quad|\\left|\\right/g, "")
    .replace(/\{,\}/g, ".")
    .replace(/\\pi/g, "pi")
    .replace(/\\cdot|\\times/g, "*")
    .replace(/\\sqrt(\d)/g, "sqrt($1)")
    .replace(/\\[dt]?frac(\d)(\d)/g, "(($1)/($2))")
    .replace(/°/g, "");
  for (let i = 0; i < 5; i++) {
    s = s
      .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, "(($1)/($2))")
      .replace(/\\sqrt\[([^\]]*)\]\{([^{}]*)\}/g, "nthRoot($2,$1)")
      .replace(/\\sqrt\{([^{}]*)\}/g, "sqrt($1)")
      .replace(/\^\{([^{}]*)\}/g, "^($1)");
  }
  if (/\\|[{}]|[a-df-hj-z]{2,}(?<!sqrt|pi|nthRoot)/.test(s.replace(/sqrt|nthRoot|pi/g, ""))) return null;
  return s.trim() || null;
}

/** Jede pruefbare Seite einer Anzeige ("a = b \\approx c") muss zum Loesungswert passen. */
function pruefeAnzeige(ort: string, t: Teil) {
  if (t.typ === "vektor" && t.anzeige) {
    // optionaler Vorfaktor vor der Klammer, z.B. "\\tfrac19\\begin{pmatrix}4\\\\-4\\\\7\\end{pmatrix}"
    const start = t.anzeige.search(/\\begin\{pmatrix\}|\(/);
    const vor = start > 0 ? t.anzeige.slice(0, start).trim() : "";
    let faktor = 1;
    if (vor) {
      const f = texZuAusdruck(vor);
      if (!f) return;
      try {
        faktor = werteReell(f);
      } catch {
        return;
      }
    }
    const roh = (start > 0 ? t.anzeige.slice(start) : t.anzeige).replace(/\\begin\{pmatrix\}|\\end\{pmatrix\}|\\left|\\right|[()]/g, "");
    const teile = roh.split(/\\\\|\||;|,(?!\d)/).map((x) => x.trim()).filter(Boolean);
    if (teile.length !== t.loesung.length) return;
    teile.forEach((seg, k) => {
      const a = texZuAusdruck(seg.split(/\\approx/)[0]);
      if (!a) return;
      let ist: number;
      try {
        ist = werteReell(a);
      } catch {
        return;
      }
      ist *= faktor;
      const soll = werteReell(t.loesung[k]);
      if (!t.vielfaches && Math.abs(ist - soll) > 0.01 * Math.abs(soll) + 1e-6)
        fehler(ort, `anzeige-Komponente ${k + 1} "${seg}" passt nicht zu ${t.loesung[k]} (= ${soll})`);
    });
    return;
  }
  if (!("anzeige" in t) || !t.anzeige || (t.typ !== "zahl" && t.typ !== "komplex")) return;
  const soll = werte(t.loesung);
  const sre = typeof soll === "number" ? soll : soll.re;
  const sim = typeof soll === "number" ? 0 : soll.im;
  for (const seg of t.anzeige.split(/=|\\approx/)) {
    const ausdruck = texZuAusdruck(seg);
    if (!ausdruck) continue;
    let ist;
    try {
      ist = werte(ausdruck);
    } catch {
      continue;
    }
    const ire = typeof ist === "number" ? ist : ist.re;
    const iim = typeof ist === "number" ? 0 : ist.im;
    const tol = (v: number) => 0.01 * Math.abs(v) + 1e-6;
    if (Math.abs(ire - sre) > tol(sre) + (t.typ === "zahl" && t.toleranz ? t.toleranz : 0) || Math.abs(iim - sim) > tol(sim))
      fehler(ort, `anzeige "${seg.trim()}" passt nicht zur loesung ${t.loesung} (= ${typeof soll === "number" ? soll : soll.toString()})`);
  }
}

// ------------------------------------------------------------------ Java (EP1)
// Java-Pruefungen werden gesammelt und am Ende gebuendelt ausgefuehrt (ein Compiler-Lauf fuer alle
// Programme). Ohne JDK gibt es eine Warnung statt eines Fehlers.
type JavaAuftrag =
  | { art: "ausgabe"; ort: string; teil: TeilVon<"ausgabe"> }
  | { art: "kompilieren"; ort: string; code: string; was: string }
  | { art: "code"; ort: string; teil: CodeTeil };
const javaAuftraege: JavaAuftrag[] = [];
/** in Generatoren nur die ersten Seeds gegen echtes Java pruefen (Stichprobe) */
let mitJava = true;
/** Teile in Trainingsgeneratoren: code-Aufgaben sind dort nicht pruefbar (keine Aufgabe auf dem Server) */
let imGenerator = false;

function zeileOhneVersatz(z: number, versatz: number) {
  return z > versatz ? z - versatz : z;
}

async function pruefeJava() {
  if (javaAuftraege.length === 0) return;
  const jdk = jdkVerfuegbar();
  if (!jdk.ok) {
    warnung("Java", `${javaAuftraege.length} Java-Prüfungen übersprungen: ${jdk.meldung}`);
    return;
  }
  console.log(`\n■ Java: ${javaAuftraege.length} Prüfungen gegen echtes Java (JDK)`);
  const vorher = fehlerZahl;
  const programme = javaAuftraege.filter((a): a is Exclude<JavaAuftrag, { art: "code" }> => a.art !== "code");
  const erg = await fuehreProgrammeAus(
    programme.map((a) => (a.art === "ausgabe" ? { code: a.teil.code, stdin: a.teil.stdin } : { code: a.code, ausfuehren: false })),
  );
  programme.forEach((a, i) => {
    const e = erg[i];
    if (e.status === "compilerfehler") {
      const d = e.diagnosen[0];
      return fehler(a.ort, `${a.art === "kompilieren" ? a.was : "code"} kompiliert nicht: Zeile ${d ? zeileOhneVersatz(d.zeile, e.versatz) : "?"}: ${d?.meldung.split("\n")[0] ?? ""}`);
    }
    if (a.art !== "ausgabe") return;
    if (e.status === "timeout") return fehler(a.ort, "code läuft in ein Zeitlimit (Endlosschleife?)");
    if (e.status === "exception") warnung(a.ort, `code endet mit einer Exception (verglichen wird nur stdout): ${e.fehlerausgabe.split("\n")[0]}`);
    if (!pruefeTeil({ ...a.teil, fehler: undefined }, e.ausgabe).ok)
      fehler(a.ort, `loesung passt nicht zur echten Ausgabe. Java gibt aus:\n${e.ausgabe.replace(/\n$/, "").split("\n").map((z) => "      | " + z).join("\n")}`);
    else if (!pruefeTeil({ ...a.teil, fehler: undefined, whitespace: "exakt", trim: false }, e.ausgabe).ok)
      warnung(a.ort, "loesung weicht im Leerraum von der echten Ausgabe ab (Musterlösung exakt übernehmen)");
  });
  const codes = javaAuftraege.filter((a): a is Extract<JavaAuftrag, { art: "code" }> => a.art === "code");
  let naechstes = 0;
  const arbeiter = async () => {
    while (naechstes < codes.length) {
      const a = codes[naechstes++];
      try {
        const muster = await pruefeCode(a.teil, a.teil.musterloesung);
        if (muster.status === "compilerfehler")
          fehler(a.ort, `musterloesung kompiliert nicht: ${muster.compiler.map((c) => `Zeile ${c.zeile}: ${c.meldung.split("\n")[0]}`).join("; ")}`);
        else if (muster.status !== "ok") {
          muster.regeln.forEach((r) => fehler(a.ort, `musterloesung verletzt Regel ${r.regel} (Zeile ${r.zeile}): ${r.meldung}`));
          muster.tests
            .filter((t) => !t.bestanden)
            .forEach((t) =>
              fehler(
                a.ort,
                `musterloesung besteht Test ${t.nr + 1} (${t.aufruf}) nicht: ${t.meldung ?? ""}${t.status === "falsch" ? ` erwartet ${t.erwartet}, erhalten ${t.erhalten}` : ""}${t.ausgabeErwartet !== undefined && t.status === "ok" ? ` Ausgabe war: ${JSON.stringify(t.ausgabe ?? "")}` : ""}`,
              ),
            );
          if (muster.meldung) fehler(a.ort, muster.meldung);
        }
        a.teil.tests.forEach((t, i) => {
          if (t.zeichnung && !muster.tests[i]?.formen?.length) warnung(a.ort, `Test ${i + 1}: zeichnung gesetzt, aber die Musterlösung zeichnet nichts`);
        });
        const vorlage = await pruefeCode(a.teil, a.teil.vorlage);
        if (vorlage.status === "compilerfehler")
          fehler(a.ort, `vorlage kompiliert nicht (Lernende sollen mit übersetzbarem Code starten): ${vorlage.compiler.map((c) => `Zeile ${c.zeile}: ${c.meldung.split("\n")[0]}`).join("; ")}`);
        else if (vorlage.status === "ok") warnung(a.ort, "die unveränderte vorlage besteht schon alle Tests (Tests zu schwach?)");
      } catch (e) {
        fehler(a.ort, `Java-Runner gescheitert: ${(e as Error).message.split("\n")[0]}`);
      }
    }
  };
  await Promise.all([arbeiter(), arbeiter()]);
  console.log(`  ${fehlerZahl === vorher ? "✓" : "✗"} Java-Prüfungen`);
}

/** Statische Pruefung der Programmier-Typen; Java-Laeufe werden fuer pruefeJava vorgemerkt. */
function pruefeNeuenTeil(ort: string, t: Teil) {
  if (!istNeuerTyp(t)) return;
  // Fehlerbilder duerfen nie als richtig gelten
  if (t.typ !== "code")
    t.fehler?.forEach((f, i) => {
      if (pruefeTeil({ ...t, fehler: undefined }, Array.isArray(f.wert) ? f.wert : String(f.wert)).ok) fehler(ort, `Fehlerbild ${i + 1} wird als richtige Antwort gewertet`);
    });
  switch (t.typ) {
    case "ausgabe":
      if (!t.loesung.trim()) warnung(ort, "leere loesung (Programm ohne Ausgabe?)");
      if (!pruefeTeil({ ...t, fehler: undefined }, t.loesung).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      if (mitJava) javaAuftraege.push({ art: "ausgabe", ort, teil: t });
      break;
    case "richtigfalsch":
      t.aussagen.forEach((a, i) => {
        pruefeTex(`${ort} aussage ${i + 1}`, a.text);
        pruefeTex(`${ort} aussage ${i + 1} erklaerung`, a.erklaerung);
      });
      if (!pruefeTeil({ ...t, fehler: undefined }, t.aussagen.map((a) => (a.richtig ? "r" : "f"))).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      break;
    case "lueckentext": {
      if ((t.code === undefined) === (t.text === undefined)) return fehler(ort, "genau eines von code oder text angeben");
      const n = lueckenImText(t);
      if (n !== t.luecken.length) return fehler(ort, `${n} Lücken (___) im ${t.code !== undefined ? "code" : "text"}, aber ${t.luecken.length} Einträge in luecken`);
      if (!pruefeTeil({ ...t, fehler: undefined }, t.luecken.map((v) => String(v[0]))).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      if (t.code !== undefined && t.kompilieren !== false && mitJava) {
        const erste = t.luecken.map((v) => String(v[0]));
        t.luecken.forEach((varianten, i) =>
          varianten.forEach((v, k) => {
            if (i > 0 && k === 0) return; // Musterloesung nur einmal kompilieren
            const werteFuer = erste.map((e, j) => (j === i ? String(v) : e));
            javaAuftraege.push({ art: "kompilieren", ort, code: fuelleLuecken(t.code!, werteFuer), was: k === 0 ? "code mit Musterloesung" : `Variante ${k + 1} von Lücke ${i + 1} („${v}“)` });
          }),
        );
      }
      break;
    }
    case "zeilen": {
      const anzahl = t.code.replace(/\n+$/, "").split("\n").length;
      if (t.loesung.some((z) => z > anzahl)) fehler(ort, `Zeilennummer außerhalb des Codes (${anzahl} Zeilen)`);
      if (new Set(t.loesung).size !== t.loesung.length) fehler(ort, "Zeilennummer doppelt in loesung");
      if (!pruefeTeil({ ...t, fehler: undefined }, t.loesung).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      break;
    }
    case "trace": {
      t.loesung.forEach((r, i) => {
        if (r.length !== t.spalten.length) fehler(ort, `Zeile ${i + 1} hat ${r.length} Zellen, erwartet ${t.spalten.length}`);
      });
      if ((t.vorgabe ?? 0) >= t.loesung.length) fehler(ort, "vorgabe umfasst alle Zeilen, es bleibt nichts zum Ausfüllen");
      if (t.zeilen && t.zeilen.length !== t.loesung.length) fehler(ort, "zeilen (Beschriftungen) und loesung unterschiedlich lang");
      if (!pruefeTeil({ ...t, fehler: undefined }, t.loesung.flat().map(String)).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      break;
    }
    case "reihenfolge": {
      t.elemente.forEach((e, i) => pruefeTex(`${ort} element ${i + 1}`, e));
      if (new Set(t.elemente).size < 2) return fehler(ort, "mindestens zwei verschiedene Elemente nötig");
      if (new Set(t.elemente).size !== t.elemente.length) warnung(ort, "gleiche Elemente mehrfach (gelten als austauschbar)");
      if (t.start) {
        const n = t.elemente.length;
        if (t.start.length !== n || new Set(t.start).size !== n || t.start.some((i) => i >= n)) fehler(ort, "start ist keine Permutation der Elemente");
        else if (t.start.every((k, i) => t.elemente[k] === t.elemente[i])) fehler(ort, "start ist schon die richtige Reihenfolge");
      }
      if (startReihenfolge(t).every((k, i) => t.elemente[k] === t.elemente[i])) fehler(ort, "Startreihenfolge ist schon richtig");
      if (!pruefeTeil({ ...t, fehler: undefined }, t.elemente.map((_, i) => i)).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      break;
    }
    case "code": {
      if (imGenerator) return fehler(ort, "code-Teile gehen nur in Kapiteln und Prüfungen (die Route lädt Tests und Musterlösung vom Server)");
      const k = klassenName(t.vorlage);
      if (!k) return fehler(ort, "vorlage enthält keine Klasse");
      if (klassenName(t.musterloesung) !== k) fehler(ort, `musterloesung muss dieselbe Klasse ${k} enthalten wie die vorlage`);
      t.tests.forEach((x, i) => {
        if (!x.aufruf?.trim() && x.stdout === undefined && !x.zeichnung) fehler(ort, `Test ${i + 1}: ohne aufruf (main-Test) braucht er stdout oder zeichnung`);
        if (x.ergebnis && x.erwartet === undefined) fehler(ort, `Test ${i + 1}: ergebnis ohne erwartet`);
      });
      if (!t.tests.some((x) => !x.versteckt)) warnung(ort, "alle Tests verborgen: Lernende sehen keine Beispiele");
      if (mitJava) javaAuftraege.push({ art: "code", ort, teil: t });
      break;
    }
  }
}

function istEndlich(v: ReturnType<typeof werte>): boolean {
  return typeof v === "number" ? Number.isFinite(v) : Number.isFinite(v.re) && Number.isFinite(v.im);
}

function pruefeTeilDef(ort: string, t: Teil) {
  pruefeTex(ort + " label", t.label);
  try {
    pruefeAnzeige(ort, t);
  } catch {
    /* loesung selbst nicht berechenbar -- meldet der Typ-Zweig unten */
  }
  if (istNeuerTyp(t)) return pruefeNeuenTeil(ort, t);
  // Fehlerbilder duerfen nie als richtig gelten (Toleranz, Rundung, Sonderfaelle)
  if (t.typ !== "text")
    t.fehler?.forEach((f, i) => {
      try {
        if (pruefeTeil({ ...t, fehler: undefined }, Array.isArray(f.wert) ? (t.typ === "menge" ? f.wert.map(String).join("; ") : f.wert.map(String)) : String(f.wert)).ok)
          fehler(ort, `Fehlerbild ${i + 1} (${JSON.stringify(f.wert)}) wird als richtige Antwort gewertet`);
      } catch {
        /* Eingabe nicht auswertbar -- dann kann sie auch nicht richtig sein */
      }
    });
  switch (t.typ) {
    case "zahl": {
      let v: number;
      try {
        v = werteReell(t.loesung);
      } catch (e) {
        return fehler(ort, `loesung nicht berechenbar: ${t.loesung} (${(e as Error).message})`);
      }
      if (!Number.isFinite(v)) return fehler(ort, `loesung nicht endlich: ${t.loesung}`);
      if (!pruefeTeil(t, String(t.loesung)).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      const gerundet = musterText({ ...t, einheit: undefined }).replace(",", ".");
      if (!pruefeTeil(t, gerundet).ok) fehler(ort, `gerundete Anzeige ${gerundet} faellt durch (Toleranz zu eng?)`);
      if (t.toleranz !== undefined && t.toleranz > Math.max(0.05 * Math.abs(v), 0.5))
        warnung(ort, `sehr grosse Toleranz ${t.toleranz} fuer Wert ${v}`);
      pruefeTex(ort + " anzeige", t.anzeige ? `$${t.anzeige}$` : undefined);
      break;
    }
    case "komplex": {
      try {
        if (!istEndlich(werte(t.loesung))) fehler(ort, "komplexe loesung nicht endlich");
      } catch (e) {
        return fehler(ort, `loesung nicht berechenbar: ${t.loesung} (${(e as Error).message})`);
      }
      if (!pruefeTeil(t, t.loesung).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      pruefeTex(ort + " anzeige", t.anzeige ? `$${t.anzeige}$` : undefined);
      break;
    }
    case "vektor":
    case "menge": {
      try {
        t.loesung.forEach((s) => {
          if (!Number.isFinite(werteReell(s))) throw new Error(`nicht endlich: ${s}`);
        });
      } catch (e) {
        return fehler(ort, `loesung nicht berechenbar (${(e as Error).message})`);
      }
      const ein = t.typ === "vektor" ? t.loesung.map(String) : t.loesung.length ? t.loesung.map(String).join("; ") : "{}";
      if (!pruefeTeil(t, ein).ok) fehler(ort, "Musterloesung besteht eigene Pruefung nicht");
      if (t.typ === "vektor" && t.namen && t.namen.length !== t.loesung.length) fehler(ort, "namen und loesung unterschiedlich lang");
      pruefeTex(ort + " anzeige", t.anzeige ? `$${t.anzeige}$` : undefined);
      break;
    }
    case "term": {
      const f = kompiliere(t.loesung, t.variable);
      const [a, b] = t.bereich ?? [-2.3, 3.7];
      let ok = 0;
      for (let i = 0; i < 9; i++) if (Number.isFinite(f(a + ((b - a) * (i + 0.5)) / 9))) ok++;
      if (ok < 3) fehler(ort, `Term ${t.loesung} im Bereich [${a}, ${b}] kaum auswertbar (bereich setzen?)`);
      else if (!pruefeTeil(t, t.loesung).ok) fehler(ort, "Term-Musterloesung besteht eigene Pruefung nicht");
      pruefeTex(ort + " anzeige", t.anzeige ? `$${t.anzeige}$` : undefined);
      break;
    }
    case "auswahl":
      if (t.richtig.some((i) => i >= t.optionen.length)) fehler(ort, "richtig-Index ausserhalb der optionen");
      if (!t.mehrfach && t.richtig.length > 1) warnung(ort, "mehrere richtige Optionen ohne mehrfach: true (wird automatisch Mehrfachauswahl)");
      t.optionen.forEach((o, i) => pruefeTex(`${ort} option ${i}`, o));
      break;
    case "text":
      pruefeTex(ort + " muster", t.muster);
      break;
  }
}

function pruefePlot(ort: string, p: PlotSpec) {
  const ausdruecke: string[] = [];
  for (const v of [...p.x, ...p.y]) {
    try {
      werteReell(v);
    } catch {
      fehler(ort, `Achsenbereich nicht berechenbar: ${v}`);
    }
  }
  const nx = (v: number | string) => {
    try {
      return werteReell(v);
    } catch {
      fehler(ort, `nicht berechenbar: ${v}`);
      return 0;
    }
  };
  p.graphen.forEach((g) => ausdruecke.push(g.f));
  p.flaechen.forEach((a) => ausdruecke.push(a.f, a.g));
  for (const f of ausdruecke) {
    const fn = kompiliere(f);
    const x0 = nx(p.x[0]);
    const x1 = nx(p.x[1]);
    let ok = 0;
    for (let i = 0; i < 20; i++) if (Number.isFinite(fn(x0 + ((x1 - x0) * (i + 0.5)) / 20))) ok++;
    if (ok === 0) fehler(ort, `Funktion ${f} im Plotbereich nirgends auswertbar`);
  }
  p.kurven.forEach((c) => {
    const fx = kompiliere(c.x, "t");
    if (!Number.isFinite(fx(nx(c.t[0])))) fehler(ort, `Kurve x(t)=${c.x} nicht auswertbar`);
  });
  [...p.punkte.map((q) => [q.x, q.y]), ...p.vektoren.flatMap((v) => [v.von, v.nach]), ...p.strecken.flatMap((s) => [s.von, s.nach])]
    .flat()
    .forEach((v) => nx(v));
}

function pruefeAufgabe(ort: string, a: Aufgabe, ids: Set<string>) {
  const o = `${ort} [${a.id}]`;
  if (ids.has(a.id)) fehler(o, "id im Kurs doppelt");
  ids.add(a.id);
  pruefeTex(o + " angabe", a.angabe);
  a.hinweise.forEach((h, i) => pruefeTex(`${o} hinweis ${i + 1}`, h));
  pruefeTex(o + " loesung", a.loesung);
  if (!a.loesung.trim()) fehler(o, "leerer Loesungsweg");
  if (a.niveau >= 2 && a.hinweise.length === 0) warnung(o, "Niveau ≥ 2 ohne Hinweis");
  if (a.plot) pruefePlot(o + " plot", a.plot);
  a.teile.forEach((t, i) => pruefeTeilDef(`${o} teil ${i + 1}`, t));
  a.gefuehrt?.forEach((s, i) => {
    if (s.teil?.typ === "code") fehler(`${o} gefuehrt ${i + 1}`, "code-Teile gehen nicht im geführten Lösen (nur in teile)");
  });
}

function pruefeBloecke(ort: string, bloecke: Block[], ids: Set<string>, zaehler: { aufgaben: number; niveau: number[]; woerter: number; karten: number; widgets: number }) {
  for (const b of bloecke) {
    if (b.art === "md") {
      pruefeTex(ort, b.md);
      zaehler.woerter += b.md.split(/\s+/).length;
    } else if (b.art === "aufgabe") {
      pruefeAufgabe(ort, b.aufgabe, ids);
      zaehler.aufgaben++;
      zaehler.niveau[b.aufgabe.niveau - 1]++;
    } else if (b.art === "plot") pruefePlot(ort + " plot", b.plot);
    else if (b.art === "widget") {
      zaehler.widgets++;
      if (!ALLE_WIDGET_NAMEN.includes(b.widget.name)) fehler(ort, `unbekanntes Widget "${b.widget.name}"`);
    } else if (b.art === "karten") {
      zaehler.karten += b.karten.length;
      b.karten.forEach((k, i) => {
        pruefeTex(`${ort} karte ${i + 1}`, k.frage);
        pruefeTex(`${ort} karte ${i + 1}`, k.antwort);
      });
    }
  }
}

async function pruefeDrills(fach: string, kapitelSlugs: Set<string>, nurSlugs?: Set<string>) {
  const dir = path.join(WURZEL, fach, "training");
  if (!fs.existsSync(dir)) return { anzahl: 0, jeKapitel: new Map<string, number>() };
  const drills: Drill[] = [];
  for (const f of fs
    .readdirSync(dir)
    .filter((x) => x.endsWith(".ts") && x !== "index.ts" && !x.endsWith(".test.ts") && (!nurSlugs || nurSlugs.has(x.replace(/\.ts$/, ""))))
    .sort()) {
    const mod = (await import(path.join(dir, f))) as { DRILLS?: Drill[] };
    if (!Array.isArray(mod.DRILLS)) fehler(`training/${f}`, "exportiert kein DRILLS-Array");
    else drills.push(...mod.DRILLS);
  }
  const ids = new Set<string>();
  for (const d of drills) {
    const o = `training [${d.id}]`;
    if (ids.has(d.id)) fehler(o, "Drill-id doppelt");
    ids.add(d.id);
    if (!kapitelSlugs.has(d.kapitel)) fehler(o, `kapitel "${d.kapitel}" existiert nicht`);
    const vorher = fehlerZahl;
    for (let seed = 1; seed <= 200 && fehlerZahl === vorher; seed++) {
      let a;
      try {
        a = d.erzeuge(new Rng(seed));
      } catch (e) {
        fehler(o, `seed ${seed}: Generator wirft ${(e as Error).message}`);
        break;
      }
      // echtes Rendern ist teuer; die Pipeline-Pruefung genuegt fuer die ersten Seeds
      mitRender = seed <= 10;
      // Java-Gegenpruefung (JVM-Start je Programm) ebenfalls nur als Stichprobe
      mitJava = seed <= 10;
      imGenerator = true;
      pruefeTex(`${o} seed ${seed} angabe`, a.angabe);
      pruefeTex(`${o} seed ${seed} loesung`, a.loesung);
      if (a.teile.length === 0) fehler(o, "keine Antwortteile");
      a.teile.forEach((t, i) => pruefeTeilDef(`${o} seed ${seed} teil ${i + 1}`, t));
    }
    mitRender = true;
    mitJava = true;
    imGenerator = false;
  }
  const jeKapitel = new Map<string, number>();
  for (const d of drills) jeKapitel.set(d.kapitel, (jeKapitel.get(d.kapitel) ?? 0) + 1);
  return { anzahl: drills.length, jeKapitel };
}

/** Kapitel-Slugs und Lektions-ids eines anderen Kurses (einmal geparst, dann gemerkt). */
const fremdCache = new Map<string, Map<string, Set<string>>>();
function fremdeAbschnitte(fach: string): Map<string, Set<string>> {
  const c = fremdCache.get(fach);
  if (c) return c;
  const m = new Map<string, Set<string>>();
  const dir = path.join(WURZEL, fach, "kapitel");
  if (fs.existsSync(dir))
    for (const d of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
      const sl = d.replace(/\.md$/, "").replace(/^\d+-/, "");
      const pk = parseKapitel(sl, fs.readFileSync(path.join(dir, d), "utf8")).kapitel;
      m.set(sl, new Set(pk?.abschnitte.map((a) => a.id) ?? []));
    }
  fremdCache.set(fach, m);
  return m;
}

async function main() {
  const kurse = fs
    .readdirSync(WURZEL, { withFileTypes: true })
    .filter((d) => d.isDirectory() && (!nurKurs || d.name === nurKurs))
    .map((d) => d.name);
  for (const fach of kurse) {
    console.log(`\n■ ${fach}`);
    const kursDatei = path.join(WURZEL, fach, "kurs.yaml");
    if (!fs.existsSync(kursDatei)) {
      warnung(fach, "kurs.yaml fehlt (Kurs wird nicht angezeigt)");
      continue;
    }
    const kurs = KursSchema.safeParse(yamlParse(fs.readFileSync(kursDatei, "utf8")));
    if (!kurs.success) fehler("kurs.yaml", kurs.error.message);
    const ids = new Set<string>();
    const slugs = new Set<string>();
    const pruefungsIds = new Set<string>();
    const kapDir = path.join(WURZEL, fach, "kapitel");
    const dateien = fs.existsSync(kapDir) ? fs.readdirSync(kapDir).filter((f) => f.endsWith(".md")).sort() : [];
    const summe = { aufgaben: 0, niveau: [0, 0, 0], woerter: 0, karten: 0, widgets: 0 };
    // Abschnitts-ids aller Kapitel (fuer Lektionslinks), auch wenn nur ein Kapitel geprueft wird
    const abschnittIds = new Map<string, Set<string>>();
    for (const d of dateien) {
      const sl = d.replace(/\.md$/, "").replace(/^\d+-/, "");
      const pk = parseKapitel(sl, fs.readFileSync(path.join(kapDir, d), "utf8")).kapitel;
      abschnittIds.set(sl, new Set(pk?.abschnitte.map((a) => a.id) ?? []));
    }
    const gefiltert = new Set<string>();
    const geparst: { datei: string; kapitel: import("../lib/lernen/typen").Kapitel }[] = [];
    for (const datei of dateien) {
      const slug = datei.replace(/\.md$/, "").replace(/^\d+-/, "");
      // "01-x.md" und "02-x.md" haetten dieselbe URL; die App zeigte stillschweigend nur die erste Datei
      if (slugs.has(slug)) fehler(datei, `Kapitel-Slug "${slug}" doppelt (Dateiname ohne Nummer muss im Kurs eindeutig sein)`);
      slugs.add(slug);
      if (nurKapitel && !datei.startsWith(nurKapitel)) continue;
      gefiltert.add(slug);
      const vorher = fehlerZahl;
      const { kapitel, fehler: pf } = parseKapitel(slug, fs.readFileSync(path.join(kapDir, datei), "utf8"));
      pf.forEach((f) => fehler(`${datei}:${f.zeile}`, f.meldung));
      if (!kapitel) continue;
      if (kurs.success && !(kapitel.meta.teil in kurs.data.teile)) fehler(datei, `teil "${kapitel.meta.teil}" nicht in kurs.yaml`);
      geparst.push({ datei, kapitel });
      // Karten-ids tragen den Wiederholungsstand; zwei gleiche (gleiche id oder gleiche Frage ohne id) teilen ihn sich
      const karteIds = kartenGruppen(kapitel).flatMap((g) => g.block.karten.map((k) => karteId(kapitel.slug, k)));
      for (const doppelt of new Set(karteIds.filter((id, i) => karteIds.indexOf(id) !== i)))
        fehler(datei, `Karten-id ${doppelt} doppelt (eigene id vergeben oder Frage umformulieren)`);
      const z = { aufgaben: 0, niveau: [0, 0, 0], woerter: 0, karten: 0, widgets: 0 };
      pruefeBloecke(datei, kapitel.einleitung, ids, z);
      kapitel.abschnitte.forEach((a) => pruefeBloecke(`${datei} §${a.titel}`, a.bloecke, ids, z));
      for (const k of Object.keys(summe) as (keyof typeof summe)[]) {
        if (k === "niveau") z.niveau.forEach((v, i) => (summe.niveau[i] += v));
        else summe[k] += z[k];
      }
      console.log(
        `  ${fehlerZahl === vorher ? "✓" : "✗"} ${datei}: ${kapitel.abschnitte.length} Abschnitte, ${z.aufgaben} Aufgaben (${z.niveau.join("/")}), ${z.karten} Karten, ${z.widgets} Widgets, ~${z.woerter} Wörter`,
      );
    }
    const formeln = path.join(WURZEL, fach, "formelsammlung.md");
    if (fs.existsSync(formeln) && !nurKapitel) {
      const vorherF = fehlerZahl;
      pruefeTex("formelsammlung.md", fs.readFileSync(formeln, "utf8"));
      console.log(`  ${fehlerZahl === vorherF ? "✓" : "✗"} formelsammlung.md`);
    }
    const pDir = path.join(WURZEL, fach, "pruefungen");
    if (fs.existsSync(pDir) && !nurKapitel) {
      for (const f of fs.readdirSync(pDir).filter((x) => x.endsWith(".yaml"))) {
        let roh: unknown;
        try {
          roh = yamlParse(fs.readFileSync(path.join(pDir, f), "utf8"));
        } catch (e) {
          fehler(`pruefungen/${f}`, `YAML: ${(e as Error).message.split("\n")[0]}`);
          continue;
        }
        const r = PruefungSchema.safeParse(roh);
        if (!r.success) {
          fehler(`pruefungen/${f}`, r.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "));
          continue;
        }
        const vorherP = fehlerZahl;
        pruefungsIds.add(r.data.id);
        r.data.aufgaben.forEach((a) => pruefeAufgabe(`pruefungen/${f}`, a, ids));
        const punkte = r.data.aufgaben.reduce((s, a) => s + (a.punkte ?? 0), 0);
        console.log(`  ${fehlerZahl === vorherP ? "✓" : "✗"} pruefungen/${f}: ${r.data.aufgaben.length} Aufgaben, ${punkte} Punkte`);
      }
    }
    {
      // interne Links /lernen/<fach>/<ziel>[/<lektion>] muessen aufloesen (bei Filter nur in den gefilterten Kapiteln)
      // Bereichsseiten jedes Kurses (wie bei Links in andere Kurse unten)
      const statisch = new Set(["training", "pruefung", "muendlich", "formeln", "glossar", "suche", "wiederholen"]);
      const pDirVorhanden = fs.existsSync(pDir);
      if (!pDirVorhanden || pruefungsIds.size === 0)
        for (const f of pDirVorhanden ? fs.readdirSync(pDir).filter((x) => x.endsWith(".yaml")) : []) {
          const id = /^id:\s*(\S+)/m.exec(fs.readFileSync(path.join(pDir, f), "utf8"))?.[1];
          if (id) pruefungsIds.add(id);
        }
      const zuPruefen = dateien.filter((d) => !nurKapitel || d.startsWith(nurKapitel)).map((d) => path.join(kapDir, d));
      if (!nurKapitel) zuPruefen.push(path.join(WURZEL, fach, "formelsammlung.md"));
      for (const datei of zuPruefen) {
        if (!fs.existsSync(datei)) continue;
        for (const m of fs.readFileSync(datei, "utf8").matchAll(/\]\(\/lernen\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?(?:\/([^/#)\s]+))?[^)]*\)/g)) {
          const [, zf, ziel, unter] = m;
          const ort = path.basename(datei);
          if (zf !== fach) {
            if (!fs.existsSync(path.join(WURZEL, zf, "kurs.yaml"))) {
              fehler(ort, `Link auf unbekannten Kurs /lernen/${zf}`);
              continue;
            }
            // Kapitel und Lektion im anderen Kurs muessen existieren (nur bei Links mit Kapitel-Slug)
            if (ziel && !["training", "pruefung", "muendlich", "formeln", "glossar", "suche", "wiederholen"].includes(ziel)) {
              const fremd = fremdeAbschnitte(zf);
              if (!fremd.has(ziel)) fehler(ort, `Link auf unbekanntes Kapitel /lernen/${zf}/${ziel}`);
              else if (unter && !fremd.get(ziel)!.has(decodeURIComponent(unter)))
                fehler(ort, `Link auf unbekannte Lektion /lernen/${zf}/${ziel}/${unter}`);
            }
            continue;
          }
          if (!ziel || statisch.has(ziel)) {
            if (ziel === "pruefung" && unter && !pruefungsIds.has(unter)) fehler(ort, `Link auf unbekannte Pruefung ${unter}`);
            continue;
          }
          if (!slugs.has(ziel)) fehler(ort, `Link auf unbekanntes Kapitel /lernen/${fach}/${ziel}`);
          else if (unter && !abschnittIds.get(ziel)?.has(unter))
            fehler(ort, `Link auf unbekannte Lektion /lernen/${fach}/${ziel}/${unter} (gültig: ${[...(abschnittIds.get(ziel) ?? [])].slice(0, 6).join(", ")} …)`);
        }
      }
    }
    {
      const { anzahl: nDrills, jeKapitel } = await pruefeDrills(fach, slugs, nurKapitel ? gefiltert : undefined);
      console.log(`  Training: ${nDrills} Generatoren`);
      if (mitQualitaet) {
        // erstes Kapitel des ganzen Kurses (nicht nur der gefilterten): hat keine Voraussetzungen
        const erstes = Math.min(...dateien.map((d) => parseInt(d, 10)).filter((n) => Number.isFinite(n)));
        for (const g of geparst) {
          const q = pruefeQualitaet(g.datei, g.kapitel, jeKapitel.get(g.kapitel.slug) ?? 0, g.kapitel.meta.nummer === erstes);
          qWarnungen.push(...q);
          console.log(`  Qualität ${g.datei}: ${q.length} offene Kriterien`);
          for (const x of q) console.log(`    ${x.code} ${x.ort}: ${x.meldung}`);
        }
      }
    }
    console.log(
      `  Σ ${summe.aufgaben} Aufgaben (Basis/Standard/Prüfung ${summe.niveau.join("/")}), ${summe.karten} Karten, ${summe.widgets} Widgets, ~${summe.woerter} Wörter Fließtext`,
    );
  }
  await pruefeJava();
  console.log(`\n${fehlerZahl} Fehler, ${warnZahl} Warnungen${mitQualitaet ? `, ${qWarnungen.length} offene Qualitätskriterien` : ""}`);
  process.exit(fehlerZahl ? 1 : 0);
}

main();
