import { z } from "zod";
import { sqlite } from "../client";
import { haenge, journalPfad, liesEreignisse, neueId, uebernahmeId, type Ereignis } from "@/lib/lernen/journal";
import { leererFortschritt } from "@/lib/kurs-inhalt";
import type { KursFortschritt } from "@/lib/types";
import { MASTERY_SCHWELLE, LEITNER_INTERVALLE_TAGE, effektiverStreak, inTagen, type FortschrittRow } from "./begriffe-leitner";

/**
 * Der persoenliche Stand der Kurse unter /kurse (Lernpfad, Quiz, Programmiertests, Begriffe), der Kursstand (Status,
 * Note, Notizen) und der Stand der SBP-Pruefungen, gefaltet aus dem Protokoll (lib/lernen/journal.ts). Die Datenbank
 * haelt nur noch Inhalt; ihre alten Nutzertabellen werden einmal als Uebernahme ins Protokoll geholt und danach weder
 * gelesen noch geschrieben.
 *
 * Arten (kurs = kurse.id, fuer SBP "sbp"): lektion {abgeschlossen}, abschnitt {verstanden}, quiz {punkte,max},
 * test (ein Versuch, id = Versuchs-id), test_loeschen (ref = Versuchs-id), begriff (ref = natuerlicher Schluessel,
 * {richtig}), uebernahme (ref = "<tabelle>:<schluessel>", wert = alte Zeile). Uebernahmen haben t <= Zeilenposition,
 * stehen also vor allem Neuen, und werden verlustfrei zusammengefuehrt (zwei Rechner: beides bleibt).
 */

export const SBP = "sbp";

export interface BegriffZeile {
  richtig_in_folge: number;
  gemeistert_session_am: string | null;
  versuche_gesamt: number;
  box: number;
  naechste_wiederholung_am: string | null;
  zuletzt_versucht_am: string | null;
}

export interface StandZeile {
  status: string;
  note: number | null;
  antritte: unknown[] | null;
  semester_plan: string | null;
  semester_label: string | null;
  streichkandidat: boolean | null;
  notiz: string | null;
  tipps: string | null;
}

export interface SbpZeile {
  status: string;
  note: number | null;
  antritte: unknown[];
}

export interface KursZustand {
  fortschritt: KursFortschritt;
  /** parallel zu fortschritt.tests: die id jedes Versuchs (zum Loeschen) */
  versuchIds: string[];
  /** natuerlicher Schluessel -> Leitner-Zeile */
  begriffe: Map<string, BegriffZeile>;
  stand: StandZeile | null;
  /** Zeit des Kursstands, der gerade gilt (der spaeteste gewinnt bei Skalaren) */
  standT: number;
}

const datum = (t: number) => new Date(t).toISOString().slice(0, 10);
const minDatum = (a: string | null, b: string | null) => (a && b ? (a < b ? a : b) : (a ?? b));
const maxDatum = (a: string | null, b: string | null) => (a && b ? (a > b ? a : b) : (a ?? b));
const quote = (bestes: number, max: number) => (max > 0 ? Math.round((bestes / max) * 100) / 100 : 0);

/** Zwei Texte zusammen, ohne einen zu verlieren (zwei Rechner mit verschiedenen Notizen). */
function texte(a: string | null, b: string | null): string | null {
  if (!a || !b || a === b || a.includes(b)) return a || b || null;
  if (b.includes(a)) return b;
  return `${a}\n\n${b}`;
}

const TestWert = z.object({
  test_id: z.string(),
  datum: z.string(),
  benoetigte_minuten: z.number(),
  selbstbewertung: z.record(z.string(), z.number()),
  punkte: z.number(),
  max_punkte: z.number(),
  bestanden: z.boolean(),
  notiz: z.string().nullish(),
});

function leer(kursId: string): KursZustand {
  return { fortschritt: leererFortschritt(kursId), versuchIds: [], begriffe: new Map(), stand: null, standT: -Infinity };
}

function testDazu(z: KursZustand, id: string, roh: unknown): void {
  const w = TestWert.safeParse(roh);
  if (!w.success || z.versuchIds.includes(id)) return;
  const { notiz, ...rest } = w.data;
  z.fortschritt.tests.push({ ...rest, notiz: notiz ?? undefined });
  z.versuchIds.push(id);
}

function begriffVersuch(alt: BegriffZeile | undefined, richtig: boolean, heute: string): BegriffZeile {
  const bisher = alt ? ({ ...alt, begriff_id: 0 } as FortschrittRow) : undefined;
  const versuche = (alt?.versuche_gesamt ?? 0) + 1;
  if (!richtig)
    return {
      richtig_in_folge: 0,
      gemeistert_session_am: alt?.gemeistert_session_am ?? null,
      versuche_gesamt: versuche,
      box: 0,
      naechste_wiederholung_am: inTagen(heute, LEITNER_INTERVALLE_TAGE[0]),
      zuletzt_versucht_am: heute,
    };
  const streak = effektiverStreak(bisher, heute) + 1;
  const gemeistert = streak >= MASTERY_SCHWELLE;
  const box = gemeistert ? Math.min((alt?.box ?? 0) + 1, LEITNER_INTERVALLE_TAGE.length - 1) : (alt?.box ?? 0);
  return {
    richtig_in_folge: streak,
    versuche_gesamt: versuche,
    box,
    naechste_wiederholung_am: gemeistert ? inTagen(heute, LEITNER_INTERVALLE_TAGE[box]) : (alt?.naechste_wiederholung_am ?? null),
    gemeistert_session_am: gemeistert ? heute : (alt?.gemeistert_session_am ?? null),
    zuletzt_versucht_am: heute,
  };
}

function uebernimm(z: KursZustand, e: Ereignis): void {
  const tabelle = e.ref.slice(0, e.ref.indexOf(":"));
  const schluessel = e.ref.slice(tabelle.length + 1);
  const w = (e.wert ?? {}) as Record<string, unknown>;
  const f = z.fortschritt;
  switch (tabelle) {
    case "lektion_fortschritt": {
      const alt = f.lektionen[schluessel];
      const an = Boolean(w.abgeschlossen) || Boolean(alt?.abgeschlossen);
      f.lektionen[schluessel] = { abgeschlossen: an, abgeschlossen_am: an ? minDatum(alt?.abgeschlossen_am ?? null, (w.abgeschlossen_am as string) ?? null) : null };
      break;
    }
    case "abschnitt_fortschritt": {
      const alt = f.abschnitte[schluessel];
      const an = Boolean(w.verstanden) || Boolean(alt?.verstanden);
      f.abschnitte[schluessel] = { verstanden: an, verstanden_am: an ? minDatum(alt?.verstanden_am ?? null, (w.verstanden_am as string) ?? null) : null };
      break;
    }
    case "quiz_ergebnisse": {
      const alt = f.quiz[schluessel];
      const bestes = Math.max(alt?.bestes_ergebnis ?? 0, Number(w.bestes_ergebnis) || 0);
      const max = Math.max(alt?.max_punkte ?? 0, Number(w.max_punkte) || 0);
      f.quiz[schluessel] = {
        versuche: Math.max(alt?.versuche ?? 0, Number(w.versuche) || 0),
        bestes_ergebnis: bestes,
        max_punkte: max,
        beste_quote: max > 0 ? quote(bestes, max) : Number(w.beste_quote) || 0,
        zuletzt_am: maxDatum(alt?.zuletzt_am ?? null, (w.zuletzt_am as string) ?? null) ?? "",
      };
      break;
    }
    case "test_versuche":
      testDazu(z, e.id, w);
      break;
    case "begriff_fortschritt": {
      const alt = z.begriffe.get(schluessel);
      const neu: BegriffZeile = {
        richtig_in_folge: Number(w.richtig_in_folge) || 0,
        gemeistert_session_am: (w.gemeistert_session_am as string) ?? null,
        versuche_gesamt: Number(w.versuche_gesamt) || 0,
        box: Number(w.box) || 0,
        naechste_wiederholung_am: (w.naechste_wiederholung_am as string) ?? null,
        zuletzt_versucht_am: (w.zuletzt_versucht_am as string) ?? null,
      };
      const besser = !alt || neu.box > alt.box || (neu.box === alt.box && (neu.naechste_wiederholung_am ?? "") > (alt.naechste_wiederholung_am ?? "")) ? neu : alt;
      z.begriffe.set(schluessel, { ...besser, versuche_gesamt: Math.max(neu.versuche_gesamt, alt?.versuche_gesamt ?? 0) });
      break;
    }
    case "kurs_stand": {
      const neu: StandZeile = {
        status: typeof w.status === "string" ? w.status : "nicht_begonnen",
        note: typeof w.note === "number" ? w.note : null,
        antritte: Array.isArray(w.antritte) ? w.antritte : null,
        semester_plan: (w.semester_plan as string) ?? null,
        semester_label: (w.semester_label as string) ?? null,
        streichkandidat: typeof w.streichkandidat === "boolean" ? w.streichkandidat : null,
        notiz: (w.notiz as string) ?? null,
        tipps: (w.tipps as string) ?? null,
      };
      const alt = z.stand;
      // Skalare vom spaeteren Stand; Notizen und Tipps beider Staende bleiben
      z.stand = alt ? { ...(e.t >= z.standT ? neu : alt), notiz: texte(alt.notiz, neu.notiz), tipps: texte(alt.tipps, neu.tipps) } : neu;
      z.standT = Math.max(z.standT, e.t);
      break;
    }
  }
}

function wendeAn(z: KursZustand, e: Ereignis): void {
  const w = (e.wert ?? {}) as Record<string, unknown>;
  const f = z.fortschritt;
  switch (e.art) {
    case "lektion":
      f.lektionen[e.ref] = w.abgeschlossen === true ? { abgeschlossen: true, abgeschlossen_am: datum(e.t) } : { abgeschlossen: false, abgeschlossen_am: null };
      break;
    case "abschnitt":
      f.abschnitte[e.ref] = w.verstanden === true ? { verstanden: true, verstanden_am: datum(e.t) } : { verstanden: false, verstanden_am: null };
      break;
    case "quiz": {
      const punkte = Number(w.punkte);
      const max = Number(w.max);
      if (!Number.isFinite(punkte) || !Number.isFinite(max)) break;
      const alt = f.quiz[e.ref];
      const bestes = Math.max(alt?.bestes_ergebnis ?? 0, punkte);
      f.quiz[e.ref] = { versuche: (alt?.versuche ?? 0) + 1, bestes_ergebnis: bestes, max_punkte: max, beste_quote: quote(bestes, max), zuletzt_am: datum(e.t) };
      break;
    }
    case "test":
      testDazu(z, e.id, w);
      break;
    case "test_loeschen": {
      const i = z.versuchIds.indexOf(e.ref);
      if (i >= 0) {
        z.versuchIds.splice(i, 1);
        f.tests.splice(i, 1);
      }
      break;
    }
    case "begriff":
      if (typeof w.richtig === "boolean") z.begriffe.set(e.ref, begriffVersuch(z.begriffe.get(e.ref), w.richtig, datum(e.t)));
      break;
    case "uebernahme":
      uebernimm(z, e);
      break;
  }
}

// ------------------------------------------------------------------ Uebernahme aus der Datenbank

/** Begriffe mit ihrem natuerlichen Schluessel (wie NUMMERIERT in lib/inhalt/einspielen.ts): ueberlebt Inhalts-Updates. */
const BEGRIFF_SCHLUESSEL = `
  SELECT id, kurs_id, sbp_pruefung_id, lektion_id, abschnitt_id, begriff_id,
         row_number() OVER (PARTITION BY kurs_id, sbp_pruefung_id, lektion_id, abschnitt_id, begriff_id ORDER BY position, id) AS o
  FROM begriffe`;

type BegriffOrt = { id: number; kurs_id: string | null; sbp_pruefung_id: string | null; lektion_id: string | null; abschnitt_id: string | null; begriff_id: string; o: number };

function ortSchluessel(b: BegriffOrt): { kurs: string; ref: string } {
  return { kurs: b.kurs_id ?? SBP, ref: [b.sbp_pruefung_id ?? "", b.lektion_id ?? "", b.abschnitt_id ?? "", b.begriff_id, b.o].join("|") };
}

/** Kurs und natuerlicher Schluessel eines Begriffs zu seiner aktuellen Zeilen-id. */
export function begriffSchluessel(dbId: number): { kurs: string; ref: string } | null {
  const b = sqlite.prepare(`SELECT * FROM (${BEGRIFF_SCHLUESSEL}) WHERE id = ?`).get(dbId) as BegriffOrt | undefined;
  return b ? ortSchluessel(b) : null;
}

function uebernahmeEreignis(kurs: string, tabelle: string, schluessel: string, wert: unknown, t: number): Ereignis {
  return { v: 1, id: uebernahmeId(`db:${tabelle}`, `${kurs}:${schluessel}`, wert), t, kurs, art: "uebernahme", ref: `${tabelle}:${schluessel}`, wert };
}

/**
 * Holt die alten Nutzertabellen ins Protokoll. Idempotent (gleiche Zeile -> gleiche id). Die SBP-Werte stehen in einer
 * Inhaltstabelle, die ein Update ueberschreibt: sie werden nur uebernommen, solange das Protokoll fuer diese Pruefung
 * noch nichts hat, damit Paketwerte nie den eigenen Stand verdraengen.
 */
export function uebernimmDb(): void {
  const alle = (sql: string) => sqlite.prepare(sql).all() as Record<string, unknown>[];
  const ev: Ereignis[] = [];
  for (const r of alle("SELECT kurs_id, lektion_id, abgeschlossen, abgeschlossen_am FROM lektion_fortschritt"))
    ev.push(uebernahmeEreignis(String(r.kurs_id), "lektion_fortschritt", String(r.lektion_id), { abgeschlossen: r.abgeschlossen === 1, abgeschlossen_am: r.abgeschlossen_am ?? null }, 0));
  for (const r of alle("SELECT kurs_id, abschnitt_id, verstanden, verstanden_am FROM abschnitt_fortschritt"))
    ev.push(uebernahmeEreignis(String(r.kurs_id), "abschnitt_fortschritt", String(r.abschnitt_id), { verstanden: r.verstanden === 1, verstanden_am: r.verstanden_am ?? null }, 0));
  for (const r of alle("SELECT kurs_id, lektion_id, versuche, bestes_ergebnis, max_punkte, beste_quote, zuletzt_am FROM quiz_ergebnisse")) {
    const { kurs_id, lektion_id, ...wert } = r;
    ev.push(uebernahmeEreignis(String(kurs_id), "quiz_ergebnisse", String(lektion_id), wert, 0));
  }
  for (const r of alle("SELECT kurs_id, position, test_id, datum, benoetigte_minuten, selbstbewertung, punkte, max_punkte, bestanden, notiz FROM test_versuche ORDER BY kurs_id, position")) {
    const wert = { ...r, kurs_id: undefined, selbstbewertung: JSON.parse(String(r.selbstbewertung ?? "{}")), bestanden: r.bestanden === 1 };
    delete wert.kurs_id;
    ev.push(uebernahmeEreignis(String(r.kurs_id), "test_versuche", String(r.position), wert, Number(r.position)));
  }
  for (const r of alle(`SELECT n.*, f.richtig_in_folge, f.gemeistert_session_am, f.versuche_gesamt, f.box, f.naechste_wiederholung_am, f.zuletzt_versucht_am
                        FROM begriff_fortschritt f JOIN (${BEGRIFF_SCHLUESSEL}) n ON n.id = f.begriff_id`)) {
    const { kurs, ref } = ortSchluessel(r as unknown as BegriffOrt);
    const { richtig_in_folge, gemeistert_session_am, versuche_gesamt, box, naechste_wiederholung_am, zuletzt_versucht_am } = r;
    ev.push(uebernahmeEreignis(kurs, "begriff_fortschritt", ref, { richtig_in_folge, gemeistert_session_am, versuche_gesamt, box, naechste_wiederholung_am, zuletzt_versucht_am }, 0));
  }
  for (const r of alle("SELECT * FROM kurs_stand")) {
    const { kurs_id, ...rest } = r;
    const wert = { ...rest, antritte: rest.antritte ? JSON.parse(String(rest.antritte)) : null, streichkandidat: rest.streichkandidat === null ? null : rest.streichkandidat === 1 };
    ev.push(uebernahmeEreignis(String(kurs_id), "kurs_stand", String(kurs_id), wert, 0));
  }
  const sbpBekannt = new Set(liesEreignisse(SBP).map((e) => e.ref));
  for (const r of alle("SELECT id, status, note, antritte FROM sbp_pruefungen")) {
    const ref = `sbp_pruefungen:${r.id}`;
    if (sbpBekannt.has(ref)) continue;
    ev.push(uebernahmeEreignis(SBP, "sbp_pruefungen", String(r.id), { status: r.status, note: r.note ?? null, antritte: r.antritte ? JSON.parse(String(r.antritte)) : [] }, 0));
  }
  haenge(ev);
}

const uebernommen = new Set<string>();

/** Einmal je Prozess (und Protokoll/Datenbank) die alten Tabellen uebernehmen. */
function sicherStellen(): void {
  const schluessel = `${journalPfad()}|${sqlite.name}`;
  if (uebernommen.has(schluessel)) return;
  uebernimmDb();
  uebernommen.add(schluessel);
}

// ------------------------------------------------------------------ Lesen

// gefalteter Zustand je Kurs, solange sich das Protokoll nicht aendert (liesEreignisse() behaelt dann dieselbe Liste)
const gefaltet = new WeakMap<readonly unknown[], Map<string, KursZustand>>();

export function kursZustand(kursId: string): KursZustand {
  sicherStellen();
  const alle = liesEreignisse();
  let m = gefaltet.get(alle);
  if (!m) gefaltet.set(alle, (m = new Map()));
  let z = m.get(kursId);
  if (!z) {
    z = leer(kursId);
    for (const e of alle) if (e.kurs === kursId) wendeAn(z, e);
    m.set(kursId, z);
  }
  return z;
}

/** Leitner-Zeile eines Begriffs (ueber seine aktuelle Zeilen-id). */
export function begriffZeile(dbId: number): BegriffZeile | null {
  const s = begriffSchluessel(dbId);
  return s ? (kursZustand(s.kurs).begriffe.get(s.ref) ?? null) : null;
}

/** Stand der SBP-Pruefungen: der spaeteste uebernommene Wert je Pruefung. */
export function sbpStand(): Map<string, SbpZeile> {
  sicherStellen();
  const aus = new Map<string, SbpZeile>();
  for (const e of liesEreignisse(SBP)) {
    if (e.art !== "uebernahme" || !e.ref.startsWith("sbp_pruefungen:")) continue;
    const w = (e.wert ?? {}) as Record<string, unknown>;
    aus.set(e.ref.slice("sbp_pruefungen:".length), {
      status: typeof w.status === "string" ? w.status : "nicht_begonnen",
      note: typeof w.note === "number" ? w.note : null,
      antritte: Array.isArray(w.antritte) ? w.antritte : [],
    });
  }
  return aus;
}

// ------------------------------------------------------------------ Schreiben

function melde(kurs: string, art: string, ref: string, wert: unknown): void {
  sicherStellen();
  haenge([{ v: 1, id: neueId(), t: Date.now(), kurs, art, ref, wert }]);
}

export function setzeLektion(kursId: string, lektionId: string, abgeschlossen: boolean): void {
  melde(kursId, "lektion", lektionId, { abgeschlossen });
}

export function setzeAbschnitt(kursId: string, abschnittId: string, verstanden: boolean): void {
  melde(kursId, "abschnitt", abschnittId, { verstanden });
}

export function meldeQuiz(kursId: string, lektionId: string, punkte: number, max: number): void {
  melde(kursId, "quiz", lektionId, { punkte, max });
}

export function meldeTestVersuch(kursId: string, versuch: z.infer<typeof TestWert>): void {
  melde(kursId, "test", versuch.test_id, TestWert.parse(versuch));
}

/** Loescht den Versuch an Position `index` (Reihenfolge wie in KursFortschritt.tests). */
export function loescheTestVersuchNachIndex(kursId: string, index: number): void {
  const id = kursZustand(kursId).versuchIds[index];
  if (id) melde(kursId, "test_loeschen", id, {});
}

/** Zeichnet einen Drill-Versuch auf und gibt den neuen Streak zurueck. */
export function meldeBegriffVersuch(dbId: number, richtig: boolean): { streak: number; gemeistert: boolean } {
  const s = begriffSchluessel(dbId);
  if (!s) throw new Error(`Unbekannter Begriff ${dbId}`);
  melde(s.kurs, "begriff", s.ref, { richtig });
  const zeile = kursZustand(s.kurs).begriffe.get(s.ref);
  const streak = zeile?.richtig_in_folge ?? 0;
  return { streak, gemeistert: richtig && streak >= MASTERY_SCHWELLE };
}
