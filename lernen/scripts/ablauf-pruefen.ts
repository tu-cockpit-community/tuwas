/**
 * Korpus-Abgleich der Ablauf-Engine (lib/lernen/ablauf) gegen die mit echtem Java geprueften Ausgaben in content/.
 *
 *   npm run lernen:ablauf                     -> alle Kurse
 *   npm run lernen:ablauf -- ep1              -> ein Kurs
 *   npm run lernen:ablauf -- ep1 --details    -> jede Abweichung und jeden nicht unterstuetzten Fall einzeln
 *   npm run lernen:ablauf -- ep1 --id <id>    -> nur Aufgaben mit dieser id (mit Ablauf-Dump)
 *
 * Geprueft wird:
 *  - `ausgabe`-Teile: Ausgabe der Engine == `loesung` (Vergleichsregel wie bei Lernenden: pruefeTeil)
 *  - `code`-Teile: Musterloesung mit jedem Test (main-, Ausgabe- und Wert-Tests)
 *  - `code`-Teile mit `zeichnung: true`: Formenliste der Engine == Formenliste des Fake-CodeDraw im echten Java-Lauf der
 *    Musterloesung (exakt: gleiche Formen, Reihenfolge, Werte und Zahlenformat; braucht ein JDK)
 *  - Trainingsgeneratoren: `ausgabe`-Teile der Seeds 1-10 (der Validator prueft genau diese gegen Java)
 * Kategorien: gleich / nicht unterstuetzt / syntax (Engine haelt gueltiges Java fuer falsch) / verschieden (Fehler der
 * Engine, muss 0 sein) / Grenze (zu lang oder zu tief auch ohne Aufzeichnung). Bei Grenzen der Ansicht (Schritte, Zeit,
 * Ausgabe) laeuft der Fall ein zweites Mal ohne Aufzeichnung und mit hohen Grenzen, damit die Ausgabe vergleichbar ist.
 */
import fs from "node:fs";
import path from "node:path";
import { parse as yamlParse } from "yaml";
import { parseKapitel } from "../lib/lernen/parser";
import { PruefungSchema, type Aufgabe, type Block, type Teil, type TeilVon, type CodeTeil, type JavaTest } from "../lib/lernen/typen";
import { pruefeTeil } from "../lib/lernen/rechnen";
import { vergleicheAusgabe } from "../lib/lernen/bewertung";
import { setzeInRahmen } from "../lib/lernen/java/quelle";
import { jdkVerfuegbar, pruefeCode } from "../lib/lernen/java/runner";
import type { Form } from "../lib/lernen/java/codedraw";
import { Rng, type Drill } from "../lib/lernen/training";
import { erzeugeAblauf, erzeugeAblaufIntern, dumpAblauf, protokollFormen, type AblaufErgebnis, type AblaufOptionen } from "../lib/lernen/ablauf";

const WURZEL = path.join(process.cwd(), "content");
const argumente = process.argv.slice(2);
const details = argumente.includes("--details");
const nurId = argumente.includes("--id") ? argumente[argumente.indexOf("--id") + 1] : null;
const nurKurs = argumente.filter((a, i) => !a.startsWith("--") && argumente[i - 1] !== "--id")[0];

type Kategorie = "gleich" | "nichtUnterstuetzt" | "syntax" | "verschieden" | "grenze";
interface Fall {
  kurs: string;
  ort: string;
  id: string;
  art: "ausgabe" | "main" | "ausgabeTest" | "wert" | "zeichnung" | "training";
  kategorie: Kategorie;
  grund?: string;
  /** Ansicht mit Standardgrenzen abgeschnitten (Ausgabe dann ohne Aufzeichnung verglichen) */
  abgeschnittenInAnsicht?: string;
  ms: number;
}

const faelle: Fall[] = [];

/** Zeichnungs-Tests warten auf den Java-Lauf der Musterloesung (async), sie werden nach der Suche abgearbeitet */
interface ZeichnungsJob {
  kurs: string;
  ort: string;
  id: string;
  teil: CodeTeil;
  /** Index des Tests im Teil */
  nr: number;
}
const zeichnungsJobs: ZeichnungsJob[] = [];

/** Lauf mit Standardoptionen; bei Grenzen der Ansicht zweiter Lauf ohne Aufzeichnung */
function lauf(quelle: string, opt: AblaufOptionen): { r: AblaufErgebnis; abgeschnitten?: string; ms: number } {
  const t0 = Date.now();
  const r = erzeugeAblauf(quelle, opt);
  if (r.ok && r.ablauf.abgeschnitten && r.ablauf.abgeschnitten !== "stapel") {
    const r2 = erzeugeAblaufIntern(quelle, { ...opt, aufzeichnen: false, maxAusgabe: 2_000_000, maxMs: 20000, maxOps: 200_000_000, maxSchritte: Infinity });
    return { r: r2, abgeschnitten: r.ablauf.abgeschnitten, ms: Date.now() - t0 };
  }
  if (r.ok && r.ablauf.abgeschnitten === "stapel") {
    // tiefe Rekursion: ohne Aufzeichnung mit groesserer Tiefe (soweit der JS-Stack reicht)
    const r2 = erzeugeAblaufIntern(quelle, { ...opt, aufzeichnen: false, maxAusgabe: 2_000_000, maxMs: 20000, maxOps: 200_000_000, maxTiefe: 3000 });
    return { r: r2, abgeschnitten: "stapel", ms: Date.now() - t0 };
  }
  return { r, ms: Date.now() - t0 };
}

function einordnen(r: AblaufErgebnis, vergleich: (ausgabe: string, ergebnis: string | undefined) => string | null): { kategorie: Kategorie; grund?: string } {
  if (!r.ok) return { kategorie: r.grund === "syntax" ? "syntax" : "nichtUnterstuetzt", grund: r.meldung + (r.zeile ? ` (Zeile ${r.zeile})` : "") };
  if (r.ablauf.abgeschnitten) return { kategorie: "grenze", grund: `abgeschnitten: ${r.ablauf.abgeschnitten}` };
  const abw = vergleich(r.ablauf.ausgabe, r.ablauf.ergebnis);
  if (abw) return { kategorie: "verschieden", grund: abw + (r.ablauf.fehler ? ` [Engine-Laufzeitfehler: ${r.ablauf.fehler.name}: ${r.ablauf.fehler.meldung}]` : "") };
  return { kategorie: "gleich" };
}

function zeigeDiff(ist: string, soll: string): string {
  const a = ist.replace(/\r\n?/g, "\n").split("\n");
  const b = soll.replace(/\r\n?/g, "\n").split("\n");
  const k = a.findIndex((z, i) => z !== b[i]);
  const i = k < 0 ? Math.min(a.length, b.length) : k;
  return `erste Abweichung in Zeile ${i + 1}: Engine ${JSON.stringify(a[i] ?? "(Ende)")} / Java ${JSON.stringify(b[i] ?? "(Ende)")}`;
}

// ------------------------------------------------------------------ Wertevergleich (wie Ep1Lauf.gleich)

function wertGleich(ist: string, soll: string, toleranz: number): boolean {
  if (ist === soll) return true;
  const tok = (s: string) => s.match(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|-?(?:\d+\.?\d*(?:E-?\d+)?|NaN|Infinity)|[[\],]|true|false|null/g) ?? [];
  const a = tok(ist);
  const b = tok(soll);
  if (a.length !== b.length || a.length === 0) return false;
  return a.every((x, i) => {
    const y = b[i];
    if (x === y) return true;
    const p = Number(x);
    const q = Number(y);
    if (/^-?[\dNI]/.test(x) && /^-?[\dNI]/.test(y) && !Number.isNaN(p) && !Number.isNaN(q)) return Math.abs(p - q) <= Math.max(toleranz, 1e-9 * Math.abs(q));
    return x === "NaN" && y === "NaN";
  });
}

// ------------------------------------------------------------------ Pruefung je Teil

function pruefeAusgabeTeil(kurs: string, ort: string, id: string, t: TeilVon<"ausgabe">, art: "ausgabe" | "training") {
  const { r, abgeschnitten, ms } = lauf(t.code, { stdin: t.stdin });
  const e = einordnen(r, (ausgabe) => (pruefeTeil({ ...t, fehler: undefined }, ausgabe).ok ? null : zeigeDiff(ausgabe, t.loesung)));
  faelle.push({ kurs, ort, id, art, ...e, abgeschnittenInAnsicht: abgeschnitten, ms });
  if (nurId && r.ok) console.log(dumpAblauf(r.ablauf, { max: 400 }));
}

function pruefeCodeTeil(kurs: string, ort: string, id: string, t: CodeTeil) {
  t.tests.forEach((test: JavaTest, i) => {
    if (test.zeichnung) {
      zeichnungsJobs.push({ kurs, ort: `${ort} Test ${i + 1}`, id, teil: t, nr: i });
      return;
    }
    const aufruf = test.aufruf?.trim() ? test.aufruf : undefined;
    const art: Fall["art"] = !aufruf ? "main" : test.stdout !== undefined ? "ausgabeTest" : "wert";
    const o = `${ort} Test ${i + 1}`;
    const t0 = Date.now();
    if (art === "wert" && test.erwartet === undefined) return;
    // Wert-Tests mit `ergebnis` (in-place): Aufruf laeuft als `vorher`, verglichen wird der Ausdruck `ergebnis`
    const opt: AblaufOptionen =
      art === "wert" && test.ergebnis?.trim()
        ? { vorher: `${test.vorher ?? ""}\n${aufruf!.trim().replace(/;?$/, ";")}`, aufruf: test.ergebnis, stdin: test.stdin }
        : { aufruf, vorher: test.vorher, stdin: test.stdin };
    const muster = setzeInRahmen(t.rahmen, t.musterloesung).quelle;
    const { r, abgeschnitten } = lauf(muster, opt);
    let soll: string | undefined;
    if (test.erwartet !== undefined) {
      const rs = erzeugeAblaufIntern(muster, { aufruf: test.erwartet, aufzeichnen: false });
      if (!rs.ok) {
        faelle.push({ kurs, ort: o, id, art, kategorie: rs.grund === "syntax" ? "syntax" : "nichtUnterstuetzt", grund: `erwartet-Ausdruck: ${rs.meldung}`, ms: Date.now() - t0 });
        return;
      }
      soll = rs.ablauf.ergebnis;
    }
    const e = einordnen(r, (ausgabe, ergebnis) => {
      if (test.stdout !== undefined) {
        const v = vergleicheAusgabe(ausgabe, test.stdout, { whitespace: test.whitespace });
        if (!v.ok) return zeigeDiff(ausgabe, test.stdout);
      }
      if (test.erwartet !== undefined) {
        if (ergebnis === undefined) return `kein Rückgabewert (erwartet ${soll})`;
        if (soll === undefined || !wertGleich(ergebnis, soll, test.toleranz ?? 1e-9)) return `Rückgabewert ${ergebnis}, Java erwartet ${soll}`;
      }
      return null;
    });
    if (r.ok && r.ablauf.fehler && e.kategorie === "gleich") {
      // Die Musterloesung besteht in Java jeden Test; ein Laufzeitfehler der Engine ist also eine Abweichung
      e.kategorie = "verschieden";
      e.grund = `Engine-Laufzeitfehler ${r.ablauf.fehler.name}: ${r.ablauf.fehler.meldung} (Zeile ${r.ablauf.fehler.zeile})`;
    }
    faelle.push({ kurs, ort: o, id, art, ...e, abgeschnittenInAnsicht: abgeschnitten, ms: Date.now() - t0 });
    if (nurId && r.ok) console.log(`--- ${o}\n` + dumpAblauf(r.ablauf, { max: 400 }));
  });
}

/** Erste Abweichung zweier Formenlisten (exakt, JSON: Werte, Reihenfolge und Schluesselreihenfolge), null wenn gleich */
function formenAbweichung(ist: Form[], soll: Form[]): string | null {
  const n = Math.max(ist.length, soll.length);
  for (let i = 0; i < n; i++) {
    const a = ist[i] === undefined ? "(Ende)" : JSON.stringify(ist[i]);
    const b = soll[i] === undefined ? "(Ende)" : JSON.stringify(soll[i]);
    if (a !== b) return `Form ${i + 1} von ${soll.length} (Java): Engine ${a} / Java ${b}`;
  }
  return null;
}

/** Zeichnungs-Tests: Engine-Formen gegen den Java-Lauf der Musterloesung (ein Java-Lauf je code-Teil mit allen Tests) */
async function pruefeZeichnungen() {
  const teile = new Map<CodeTeil, ZeichnungsJob[]>();
  for (const j of zeichnungsJobs) teile.set(j.teil, [...(teile.get(j.teil) ?? []), j]);
  const jdk = jdkVerfuegbar();
  const arbeit = [...teile.entries()];
  let naechstes = 0;
  const arbeiter = async () => {
    while (naechstes < arbeit.length) {
      const [teil, jobs] = arbeit[naechstes++];
      const t0 = Date.now();
      const java = jdk.ok ? await pruefeCode(teil, teil.musterloesung) : null;
      for (const j of jobs) {
        const basis = { kurs: j.kurs, ort: j.ort, id: j.id, art: "zeichnung" as const };
        const test = teil.tests[j.nr];
        if (!java || java.status === "fehler" || java.status === "compilerfehler") {
          faelle.push({ ...basis, kategorie: "verschieden", grund: !jdk.ok ? `kein JDK: ${jdk.meldung}` : `Java-Lauf der Musterlösung: ${java?.status ?? "?"} ${java?.meldung ?? JSON.stringify(java?.compiler ?? [])}`, ms: 0 });
          continue;
        }
        const jt = java.tests[j.nr];
        if (!jt || jt.status !== "ok") {
          faelle.push({ ...basis, kategorie: "verschieden", grund: `Java-Lauf der Musterlösung: Test ${jt?.status ?? "fehlt"} ${jt?.meldung ?? ""}`, ms: 0 });
          continue;
        }
        const aufruf = test.aufruf?.trim() ? test.aufruf : undefined;
        const muster = setzeInRahmen(teil.rahmen, teil.musterloesung).quelle;
        const { r, abgeschnitten } = lauf(muster, { aufruf, vorher: test.vorher, stdin: test.stdin });
        let e = einordnen(r, () => null);
        if (r.ok && e.kategorie === "gleich") {
          const abw = formenAbweichung(protokollFormen(r.ablauf.formen ?? []), jt.formen ?? []);
          if (r.ablauf.fehler) e = { kategorie: "verschieden", grund: `Engine-Laufzeitfehler ${r.ablauf.fehler.name}: ${r.ablauf.fehler.meldung} (Zeile ${r.ablauf.fehler.zeile})` };
          else if (abw) e = { kategorie: "verschieden", grund: abw };
        }
        faelle.push({ ...basis, ...e, abgeschnittenInAnsicht: abgeschnitten, ms: Date.now() - t0 });
        if (nurId && r.ok) console.log(`--- ${j.ort}\n` + dumpAblauf(r.ablauf, { max: 60 }));
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(3, arbeit.length) }, arbeiter));
}

function pruefeAufgabe(kurs: string, ort: string, a: Aufgabe) {
  if (nurId && a.id !== nurId) return;
  a.teile.forEach((t: Teil) => {
    if (t.typ === "ausgabe") pruefeAusgabeTeil(kurs, ort, a.id, t, "ausgabe");
    if (t.typ === "code") pruefeCodeTeil(kurs, ort, a.id, t);
  });
}

function bloecke(kurs: string, ort: string, bs: Block[]) {
  for (const b of bs) if (b.art === "aufgabe") pruefeAufgabe(kurs, ort, b.aufgabe);
}

async function main() {
  const kurse = fs
    .readdirSync(WURZEL, { withFileTypes: true })
    .filter((d) => d.isDirectory() && (!nurKurs || d.name === nurKurs))
    .map((d) => d.name)
    .sort();
  const t0 = Date.now();
  for (const kurs of kurse) {
    const kd = path.join(WURZEL, kurs, "kapitel");
    if (fs.existsSync(kd))
      for (const d of fs.readdirSync(kd).filter((x) => x.endsWith(".md")).sort()) {
        const { kapitel } = parseKapitel(d.replace(/\.md$/, "").replace(/^\d+-/, ""), fs.readFileSync(path.join(kd, d), "utf8"));
        if (!kapitel) continue;
        bloecke(kurs, d, kapitel.einleitung);
        kapitel.abschnitte.forEach((a) => bloecke(kurs, `${d} §${a.titel}`, a.bloecke));
      }
    const pd = path.join(WURZEL, kurs, "pruefungen");
    if (fs.existsSync(pd))
      for (const f of fs.readdirSync(pd).filter((x) => x.endsWith(".yaml")).sort()) {
        const r = PruefungSchema.safeParse(yamlParse(fs.readFileSync(path.join(pd, f), "utf8")));
        if (r.success) r.data.aufgaben.forEach((a) => pruefeAufgabe(kurs, `pruefungen/${f}`, a));
      }
    const td = path.join(WURZEL, kurs, "training");
    if (fs.existsSync(td) && !nurId)
      for (const f of fs.readdirSync(td).filter((x) => x.endsWith(".ts") && x !== "index.ts" && !x.endsWith(".test.ts")).sort()) {
        const mod = (await import(path.join(td, f))) as { DRILLS?: Drill[] };
        for (const d of mod.DRILLS ?? [])
          for (let seed = 1; seed <= 10; seed++) {
            let a;
            try {
              a = d.erzeuge(new Rng(seed));
            } catch {
              continue;
            }
            a.teile.forEach((t) => {
              if (t.typ === "ausgabe") pruefeAusgabeTeil(kurs, `training/${f} seed ${seed}`, d.id, t, "training");
            });
          }
      }
  }

  await pruefeZeichnungen();

  // ---------------------------------------------------------------- Bericht
  const arten: [Fall["art"], string][] = [
    ["ausgabe", "ausgabe-Aufgaben"],
    ["main", "code: main-Tests"],
    ["ausgabeTest", "code: Ausgabe-Tests"],
    ["wert", "code: Wert-Tests"],
    ["zeichnung", "code: Zeichnungs-Tests"],
    ["training", "Training (ausgabe, Seeds 1-10)"],
  ];
  const pro = (x: number, n: number) => (n ? ((100 * x) / n).toFixed(1) + " %" : "-");
  if (details) {
    for (const f of faelle.filter((x) => x.kategorie !== "gleich"))
      console.log(`  ${f.kategorie === "verschieden" ? "✗" : f.kategorie === "syntax" ? "!" : "·"} [${f.kategorie}] ${f.kurs} ${f.ort} [${f.id}]: ${f.grund ?? ""}`);
  } else {
    for (const f of faelle.filter((x) => x.kategorie === "verschieden" || x.kategorie === "syntax"))
      console.log(`  ${f.kategorie === "verschieden" ? "✗" : "!"} [${f.kategorie}] ${f.kurs} ${f.ort} [${f.id}]: ${f.grund ?? ""}`);
  }
  console.log("\nKorpus-Abgleich der Ablauf-Engine gegen echtes Java");
  console.log("Art                               gesamt    gleich  nichtUnt.  syntax  Grenze  verschieden   unterstützt+gleich");
  for (const [art, name] of arten) {
    const f = faelle.filter((x) => x.art === art);
    if (!f.length) continue;
    const z = (k: Kategorie) => f.filter((x) => x.kategorie === k).length;
    console.log(
      `${name.padEnd(32)} ${String(f.length).padStart(7)} ${String(z("gleich")).padStart(9)} ${String(z("nichtUnterstuetzt")).padStart(10)} ${String(z("syntax")).padStart(7)} ${String(z("grenze")).padStart(7)} ${String(z("verschieden")).padStart(12)}   ${pro(z("gleich"), f.length).padStart(10)}`,
    );
  }
  const ansicht = faelle.filter((x) => x.abgeschnittenInAnsicht);
  if (ansicht.length) {
    const g: Record<string, number> = {};
    for (const f of ansicht) g[f.abgeschnittenInAnsicht!] = (g[f.abgeschnittenInAnsicht!] ?? 0) + 1;
    console.log(`\nIn der Ansicht (Standardgrenzen) abgeschnitten, Ausgabe ohne Aufzeichnung verglichen: ${ansicht.length} (${Object.entries(g).map(([k, v]) => `${k} ${v}`).join(", ")})`);
  }
  const gruende = new Map<string, number>();
  for (const f of faelle.filter((x) => x.kategorie === "nichtUnterstuetzt")) {
    const k = (f.grund ?? "").replace(/ \(Zeile \d+\)$/, "").replace(/^erwartet-Ausdruck: /, "").slice(0, 120);
    gruende.set(k, (gruende.get(k) ?? 0) + 1);
  }
  if (gruende.size) {
    console.log("\nHäufigste Gründe für „nicht unterstützt“:");
    for (const [g, n] of [...gruende.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(`  ${String(n).padStart(5)}  ${g}`);
  }
  const langsam = [...faelle].sort((a, b) => b.ms - a.ms).slice(0, 3);
  console.log(`\nLaufzeit ${((Date.now() - t0) / 1000).toFixed(1)} s; langsamste Fälle: ${langsam.map((f) => `${f.id} ${f.ms} ms`).join(", ")}`);
  const verschieden = faelle.filter((x) => x.kategorie === "verschieden").length;
  const syntax = faelle.filter((x) => x.kategorie === "syntax").length;
  const ziel = faelle.filter((x) => x.kurs === "ep1" && (x.art === "ausgabe" || x.art === "main" || x.art === "ausgabeTest"));
  const zielGleich = ziel.filter((x) => x.kategorie === "gleich").length;
  console.log(`Ziel ep1 (ausgabe + main- und Ausgabe-Tests): ${zielGleich} von ${ziel.length} unterstützt und gleich (${pro(zielGleich, ziel.length)}, Ziel ≥ 90 %)`);
  const zeichnungen = faelle.filter((x) => x.art === "zeichnung");
  const zeichnungenGleich = zeichnungen.filter((x) => x.kategorie === "gleich").length;
  console.log(`Zeichnungs-Tests (Formenliste Engine == Fake-CodeDraw in Java): ${zeichnungenGleich} von ${zeichnungen.length} unterstützt und gleich (${pro(zeichnungenGleich, zeichnungen.length)}, Ziel 100 %)`);
  console.log(`${verschieden} verschieden (Engine-Fehler), ${syntax} fälschlich als Syntaxfehler gemeldet`);
  process.exit(verschieden > 0 || zeichnungenGleich < zeichnungen.length ? 1 : 0);
}

main();
