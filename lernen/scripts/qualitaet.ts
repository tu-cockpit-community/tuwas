/**
 * Zaehlbare Kriterien aus content/QUALITAET.md (Rubrik A) und content/SPRACHE.md als Warnungen mit Kennung.
 * Aufruf ueber den Validator: npm run lernen:pruefen -- <fach> [NN] --qualitaet
 * Die Kennung (Q-A5, Q-K6, Q-S1 ...) entspricht der Rubrik, damit Autor:innen nachschlagen koennen.
 */
import type { Aufgabe, Block, Kapitel } from "../lib/lernen/typen";

export interface QWarnung {
  code: string;
  ort: string;
  meldung: string;
}

const KEIN_LERNABSCHNITT = /prüfungsaufgaben|mündliche prüfung|überblick|gemischte wiederholung|zusammenfassung|auf einen blick|eingangs|vorwissen/i;
const VERBOTEN = /\b(offensichtlich|trivialerweise|trivial|man sieht leicht|man sieht sofort|bekanntlich|wie oben|siehe oben|siehe unten|weiter oben|weiter unten|weiter vorne|oben in diesem Kapitel|oben gezeigt|im vorigen Abschnitt|im nächsten Abschnitt|analog dazu|analog zu)\b/gi;

function aufgaben(bloecke: Block[]): Aufgabe[] {
  return bloecke.flatMap((b) => (b.art === "aufgabe" ? [b.aufgabe] : []));
}
function mdText(bloecke: Block[]): string {
  return bloecke.map((b) => (b.art === "md" ? b.md : "")).join("\n");
}
function woerter(md: string): number {
  const t = md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " F ")
    .replace(/\$[^$]*\$/g, " F ")
    .replace(/[#*>|:-]/g, " ");
  return t.split(/\s+/).filter(Boolean).length;
}
function zaehle(md: string, re: RegExp): number {
  return (md.match(re) ?? []).length;
}
function istUebung(a: Aufgabe) {
  return a.art !== "check";
}

/** Laengste Strecke Fliesstext (Woerter) ohne aktives Element oder Beispielkasten dazwischen. */
function laengsteStrecke(bloecke: Block[]): number {
  let max = 0;
  let lauf = 0;
  for (const b of bloecke) {
    if (b.art === "md") {
      // Beispiel-Kaesten unterbrechen ebenfalls die Textstrecke
      const teile = b.md.split(/^:::beispiel.*$/m);
      teile.forEach((t, i) => {
        if (i > 0) lauf = 0;
        lauf += woerter(t);
        max = Math.max(max, lauf);
      });
    } else lauf = 0;
  }
  return max;
}

export function pruefeQualitaet(datei: string, k: Kapitel, drillsImKapitel: number, kursErstesKapitel: boolean): QWarnung[] {
  const w: QWarnung[] = [];
  const add = (code: string, ort: string, meldung: string) => w.push({ code, ort: `${datei}${ort ? ` §${ort}` : ""}`, meldung });
  const lernabschnitte = k.abschnitte.filter((a) => !KEIN_LERNABSCHNITT.test(a.titel));

  // ---------- je Lernabschnitt ----------
  for (const a of lernabschnitte) {
    const md = mdText(a.bloecke);
    const auf = aufgaben(a.bloecke);
    const ueb = auf.filter(istUebung);
    const n = [1, 2, 3].map((x) => ueb.filter((u) => u.niveau === x).length);
    if (!auf.some((x) => x.art === "check") && !/^:::vorwissen/m.test(md)) add("Q-A1", a.titel, "kein Vorwissen-Check (art: check oder :::vorwissen) am Abschnittsbeginn");
    const beispiele = zaehle(md, /^:::beispiel/gm);
    if (beispiele < 2) add("Q-A2", a.titel, `${beispiele} durchgerechnete Beispiele (:::beispiel) < 2`);
    if (!auf.some((x) => x.gefuehrt?.length)) add("Q-A4", a.titel, "keine geführte Aufgabe (gefuehrt:)");
    if (ueb.length < 6 || n[0] < 2 || n[1] < 2 || n[2] < 1)
      add("Q-A5", a.titel, `${ueb.length} Übungen (N1/N2/N3 = ${n.join("/")}); verlangt ≥ 6 mit ≥ 2/≥ 2/≥ 1`);
    const achtung = zaehle(md, /^:::achtung/gm);
    if (achtung < 2) add("Q-A8", a.titel, `${achtung} :::achtung-Kästen mit konkreter Fehlrechnung < 2`);
    const teile = ueb.filter((u) => u.niveau <= 2).flatMap((u) => u.teile).filter((t) => t.typ !== "text");
    const mitFehler = teile.filter((t) => "fehler" in t && t.fehler?.length).length;
    if (teile.length && mitFehler / teile.length < 0.5) add("Q-A9", a.titel, `Fehlerbild-Feedback nur bei ${mitFehler}/${teile.length} Antwortfeldern (N1/N2) < 50 %`);
    if (!a.bloecke.some((b) => b.art === "reflexion") && !auf.some((x) => x.kompetenz === "begruenden"))
      add("Q-A10", a.titel, "keine Selbsterklärung (reflexion oder kompetenz: begruenden)");
    const strecke = laengsteStrecke(a.bloecke);
    if (strecke > 350) add("Q-A12", a.titel, `${strecke} Wörter Fließtext ohne aktives Element oder Beispiel (≤ 350)`);
    for (const u of ueb) {
      const soll = u.niveau === 1 ? 1 : 2;
      if (u.hinweise.length < soll) add("Q-A13", a.titel, `[${u.id}] ${u.hinweise.length} Hinweise < ${soll}`);
      const schritte = u.loesung.split(/\n\s*---\s*(?:\n|$)/).filter((x) => x.trim()).length;
      const sollS = u.niveau === 1 ? 2 : 3;
      if (schritte < sollS) add("Q-A14", a.titel, `[${u.id}] Lösungsweg mit ${schritte} Schritten < ${sollS}`);
    }
    if (a.bloecke.some((b) => b.art === "widget") && !auf.some((x) => x.art === "check"))
      add("Q-A17", a.titel, "Widget ohne vorherige Vorhersage-Frage (art: check)");
  }

  // ---------- je Kapitel ----------
  const alle = [...aufgaben(k.einleitung), ...k.abschnitte.flatMap((a) => aufgaben(a.bloecke))];
  const uebungen = alle.filter(istUebung);
  const lz = k.meta.lernziele.length;
  if (lz < 6 || lz > 10) add("Q-K1", "", `${lz} Lernziele (verlangt 6–10)`);
  const ohneZiel = uebungen.filter((u) => u.lernziel === undefined).length;
  if (ohneZiel) add("Q-K1", "", `${ohneZiel} Übungen ohne lernziel-Index`);
  for (let i = 0; i < lz; i++) {
    const zu = uebungen.filter((u) => u.lernziel === i);
    if (ohneZiel === 0 && (zu.length < 4 || !zu.some((u) => u.niveau === 3)))
      add("Q-K1", "", `Lernziel ${i} hat ${zu.length} Aufgaben (≥ 4, davon ≥ 1 auf Niveau 3)`);
  }
  if (uebungen.some((u) => u.lernziel !== undefined && u.lernziel >= lz)) add("Q-K1", "", "lernziel-Index außerhalb der Lernziel-Liste");
  if (!kursErstesKapitel) {
    if (k.meta.voraussetzungen.length === 0) add("Q-K2", "", "keine voraussetzungen im Frontmatter");
    const eingang = aufgaben(k.einleitung).filter((x) => x.art === "check").length;
    if (eingang < 5) add("Q-K2", "", `Eingangsdiagnose in der Einleitung mit ${eingang} check-Fragen < 5`);
  }
  const sollUeb = Math.max(60, 6 * lernabschnitte.length);
  if (uebungen.length < sollUeb) add("Q-K3", "", `${uebungen.length} Übungen < ${sollUeb}`);
  const pruef = k.abschnitte.find((a) => /prüfungsaufgaben/i.test(a.titel));
  const pa = pruef ? aufgaben(pruef.bloecke).filter((x) => x.punkte) : [];
  if (pa.length < 5) add("Q-K4", "", `${pa.length} Prüfungsaufgaben mit punkte < 5`);
  const misch = k.abschnitte.find((a) => /gemischte wiederholung/i.test(a.titel));
  if (!misch || aufgaben(misch.bloecke).length < 8) add("Q-K5", "", "Abschnitt „Gemischte Wiederholung“ mit ≥ 8 Aufgaben fehlt");
  const alleMd = [mdText(k.einleitung), ...k.abschnitte.map((a) => mdText(a.bloecke))].join("\n");
  if (!/^:::zusammenfassung/m.test(alleMd)) add("Q-K6", "", "keine :::zusammenfassung");
  const karten = [...k.einleitung, ...k.abschnitte.flatMap((a) => a.bloecke)].flatMap((b) => (b.art === "karten" ? b.karten : []));
  if (karten.length < 12 || karten.length > 20) add("Q-K8", "", `${karten.length} Karten (verlangt 12–20)`);
  const ohneKern = karten.filter((x) => !x.kernpunkte?.length).length;
  if (ohneKern) add("Q-K8", "", `${ohneKern} Karten ohne kernpunkte`);
  if (drillsImKapitel < 10) add("Q-K9", "", `${drillsImKapitel} Trainingsgeneratoren < 10`);
  const links = zaehle(alleMd + alle.map((a) => a.angabe + a.loesung).join("\n"), /\]\(\/lernen\//g);
  if (links < 5) add("Q-K10", "", `${links} Querverweise < 5`);
  const wz = woerter(alleMd);
  if (wz < 4000) add("Q-K12", "", `${wz} Wörter Fließtext < 4000`);

  // ---------- Sprache (SPRACHE.md) ----------
  const texte = [alleMd, ...alle.flatMap((a) => [a.angabe, a.loesung, ...a.hinweise])].join("\n");
  const verboten = [...new Set((texte.match(VERBOTEN) ?? []).map((x) => x.toLowerCase()))];
  if (verboten.length) add("Q-S1", "", `verbotene Floskeln: ${verboten.join(", ")}`);
  const saetze = texte
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\$\$[\s\S]*?\$\$/g, " F. ")
    .replace(/\$[^$]*\$/g, "F")
    .split(/(?<=[.!?])\s+|\n\s*\n/)
    .map((x) => x.split(/\s+/).filter(Boolean).length);
  const lang = saetze.filter((x) => x > 30).length;
  if (lang > 0) add("Q-S2", "", `${lang} Sätze mit mehr als 30 Wörtern`);
  const kurzschrift = zaehle(texte.replace(/\$\$[\s\S]*?\$\$/g, ""), /\$[^$]{1,40}\$\s*(?:\\Rightarrow|⇒|\\implies)|(?:⇒)\s*\$/g);
  if (kurzschrift) add("Q-S3", "", `${kurzschrift} Stellen mit ⇒ als Satzteil im Fließtext (in Worten ausschreiben)`);
  return w;
}
