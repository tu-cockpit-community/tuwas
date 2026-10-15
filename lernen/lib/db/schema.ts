import { sqliteTable, text, integer, real, unique } from "drizzle-orm/sqlite-core";
import type {
  Literatur,
  LernFrage,
  LernBeispiel,
  QuizQuelle,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// Kurse
// ---------------------------------------------------------------------------

export const kurse = sqliteTable("kurse", {
  id: text().primaryKey(),
  lva_nummer: text().notNull(),
  name: text().notNull(),
  typ: text().notNull(),
  ects: real().notNull(),
  kategorie: text().notNull(),
  steop: integer({ mode: "boolean" }),
  pflicht: integer({ mode: "boolean" }),
  enge_wahl: integer({ mode: "boolean" }),
  vertiefung_pflicht: integer({ mode: "boolean" }),
  sbp_wahlfach: integer({ mode: "boolean" }),
  schwierigkeitsgrad: text(),
  links_tiss: text(),
  links_vowi: text(),
  pfad: text(),
  inhalt: text({ mode: "json" }).$type<string[]>(),
  literatur: text({ mode: "json" }).$type<Literatur[]>(),
  pruefungsstrategie: text({ mode: "json" }).$type<Record<string, unknown>>(),
  tuwel_url: text(),
  sws: real(),
  format: text(),
  pruefungsmodus: text(),
  sprache: text(),
  vortragende: text({ mode: "json" }).$type<string[]>(),
  institut: text(),
  lernergebnisse: text({ mode: "json" }).$type<string[]>(),
  tiss_inhalt: text({ mode: "json" }).$type<string[]>(),
  methoden: text(),
  leistungsnachweis: text(),
  vorkenntnisse_tiss: text(),
  weitere_informationen: text(),
  ects_breakdown: text({ mode: "json" }).$type<Record<string, number>>(),
  /** Ueberlauf fuer Felder, die nicht Teil des Kurs-Typs sind (z.B. `streichgrund`, `zeitplan`,
   * `voraussetzungen_empfohlen`). */
  weitere_felder: text({ mode: "json" }).$type<Record<string, unknown>>(),
  /** Titel und Untertitel des Skripts fuer die Lernpfad-Uebersicht. */
  skript_titel: text(),
  skript_untertitel: text(),
});

/**
 * Persoenlicher Stand je Kurs (Status, Note, Planung, eigene Notizen). Gehoert dem Nutzer und
 * ist nie Teil eines Inhaltspakets; ein Update der Inhalte laesst diese Tabelle unberuehrt.
 */
export const kurs_stand = sqliteTable("kurs_stand", {
  kurs_id: text()
    .primaryKey()
    .references(() => kurse.id),
  status: text().notNull().default("nicht_begonnen"),
  note: real(),
  antritte: text({ mode: "json" }).$type<unknown[]>(),
  semester_plan: text(),
  semester_label: text(),
  streichkandidat: integer({ mode: "boolean" }),
  notiz: text(),
  tipps: text(),
});

/** Eine Zeile (id = 1): welches Inhaltspaket zuletzt eingespielt wurde. */
export const inhalt_stand = sqliteTable("inhalt_stand", {
  id: integer().primaryKey(),
  quelle: text().notNull(),
  tag: text().notNull(),
  sha256: text().notNull(),
  veroeffentlicht_am: text().notNull(),
  eingespielt_am: text().notNull(),
});

// ---------------------------------------------------------------------------
// Lernpfad: Lektionen und Skriptabschnitte
// ---------------------------------------------------------------------------

export const lektionen = sqliteTable(
  "lektionen",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    lektion_id: text().notNull(),
    art: text({ enum: ["kapitel", "anhang"] }).notNull(),
    nr: integer(),
    position: integer().notNull(),
    titel: text().notNull(),
    kurztitel: text().notNull(),
    anker: text().notNull(),
    zeilen: integer().notNull(),
    codebloecke: integer().notNull(),
    wortanzahl: integer().notNull(),
    lesedauer_minuten: integer().notNull(),
    markdown: text().notNull(),
    einleitung: text().notNull(),
  },
  (t) => [unique().on(t.kurs_id, t.lektion_id)]
);

/** Die ###-Unterabschnitte einer Lektion -- Basis je einer Konzeptkarte. */
export const skript_abschnitte = sqliteTable(
  "skript_abschnitte",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    lektion_row_id: integer()
      .notNull()
      .references(() => lektionen.id),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    abschnitt_id: text().notNull(),
    position: integer().notNull(),
    titel: text().notNull(),
    anker: text().notNull(),
    markdown: text().notNull(),
  },
  (t) => [unique().on(t.kurs_id, t.abschnitt_id)]
);

// ---------------------------------------------------------------------------
// Quizfragen
// ---------------------------------------------------------------------------

export const quiz_fragen = sqliteTable("quiz_fragen", {
  id: text().primaryKey(),
  kurs_id: text()
    .notNull()
    .references(() => kurse.id),
  typ: text({ enum: ["einfachauswahl", "wahr_falsch"] }).notNull(),
  lektion_id: text().notNull(),
  einleitung: text(),
  code: text(),
  sprache: text(),
  frage: text().notNull(),
  hinweis: text(),
  richtig: integer(),
  erklaerung: text().notNull(),
  punkte: integer().notNull(),
  quelle: text({ mode: "json" }).$type<QuizQuelle>().notNull(),
});

/** `text` ist oft leer: reine Code-Antwortoptionen (nur `code`, kein Label) kommen vor. */
export const quiz_optionen = sqliteTable("quiz_optionen", {
  id: integer().primaryKey({ autoIncrement: true }),
  frage_id: text()
    .notNull()
    .references(() => quiz_fragen.id),
  position: integer().notNull(),
  text: text(),
  code: text(),
  sprache: text(),
});

/** `text` ist wie bei quiz_optionen real haeufig leer (reine Code-Zeilen). */
export const quiz_zeilen = sqliteTable("quiz_zeilen", {
  id: integer().primaryKey({ autoIncrement: true }),
  frage_id: text()
    .notNull()
    .references(() => quiz_fragen.id),
  position: integer().notNull(),
  text: text(),
  code: text(),
  sprache: text(),
  richtig: integer({ mode: "boolean" }).notNull(),
});

// ---------------------------------------------------------------------------
// Programmiertests
// ---------------------------------------------------------------------------

export const programmiertests = sqliteTable("programmiertests", {
  id: text().primaryKey(),
  kurs_id: text()
    .notNull()
    .references(() => kurse.id),
  titel: text().notNull(),
  jahrgang: text().notNull(),
  datum: text(),
  lektion_id: text(),
  dauer_minuten: integer().notNull(),
  dauer_quelle: text({ enum: ["angabe", "annahme"] }).notNull(),
  max_punkte: integer().notNull(),
  bestehensgrenze_punkte: integer().notNull(),
  deklarationen: text().notNull(),
  referenzloesung: text().notNull(),
  referenzloesung_quelle: text({ enum: ["skript", "eigen"] }).notNull(),
  quelle: text({ mode: "json" }).$type<QuizQuelle>().notNull(),
});

export const test_einschraenkungen = sqliteTable("test_einschraenkungen", {
  id: integer().primaryKey({ autoIncrement: true }),
  test_id: text()
    .notNull()
    .references(() => programmiertests.id),
  position: integer().notNull(),
  text: text().notNull(),
});

export const test_erlaubte_api = sqliteTable("test_erlaubte_api", {
  id: integer().primaryKey({ autoIncrement: true }),
  test_id: text()
    .notNull()
    .references(() => programmiertests.id),
  position: integer().notNull(),
  text: text().notNull(),
});

export const test_methoden = sqliteTable("test_methoden", {
  id: integer().primaryKey({ autoIncrement: true }),
  test_id: text()
    .notNull()
    .references(() => programmiertests.id),
  position: integer().notNull(),
  signatur: text().notNull(),
  beschreibung: text().notNull(),
  vorbedingungen: text({ mode: "json" }).$type<string[]>().notNull(),
  rekursiv: integer({ mode: "boolean" }),
  beispiel_ausgabe: text(),
});

export const test_aufrufe = sqliteTable("test_aufrufe", {
  id: integer().primaryKey({ autoIncrement: true }),
  test_id: text()
    .notNull()
    .references(() => programmiertests.id),
  position: integer().notNull(),
  aufruf: text().notNull(),
  ausgabe: text().notNull(),
});

/** `zeile_id` ist die vom Autor vergebene TestRubrikZeile.id -- speichereTestVersuch()
 * matched selbstbewertung-Eintraege exakt dagegen, daher separat von der surrogate PK. */
export const test_rubrik = sqliteTable(
  "test_rubrik",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    test_id: text()
      .notNull()
      .references(() => programmiertests.id),
    zeile_id: text().notNull(),
    position: integer().notNull(),
    methode: text().notNull(),
    kriterium: text().notNull(),
    punkte: integer().notNull(),
  },
  (t) => [unique().on(t.test_id, t.zeile_id)]
);

// ---------------------------------------------------------------------------
// Lernthemen
// ---------------------------------------------------------------------------

export const lern_themen = sqliteTable(
  "lern_themen",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    thema_id: text().notNull(),
    nr: integer().notNull(),
    titel: text().notNull(),
    erklaerung: text().notNull(),
    kernpunkte: text({ mode: "json" }).$type<string[]>().notNull(),
    beispiel: text({ mode: "json" }).$type<LernBeispiel>(),
    fragen: text({ mode: "json" }).$type<LernFrage[]>().notNull(),
    typische_fehler: text({ mode: "json" }).$type<string[]>(),
  },
  (t) => [unique().on(t.kurs_id, t.thema_id)]
);

// ---------------------------------------------------------------------------
// Studienberechtigungsprüfung
// ---------------------------------------------------------------------------

export const sbp_pruefungen = sqliteTable("sbp_pruefungen", {
  id: text().primaryKey(),
  position: integer().notNull(),
  bezeichnung: text().notNull(),
  beschreibung: text().notNull(),
  vorbereitungsaufwand: text().notNull(),
  termin_plan: text().notNull(),
  status: text().notNull(),
  note: real(),
  antritte: text({ mode: "json" }).$type<unknown[]>().notNull(),
  max_antritte: integer().notNull(),
  ist_schlussstein: integer({ mode: "boolean" }),
  literatur: text({ mode: "json" }).$type<Literatur[]>(),
  hinweis: text(),
});

// ---------------------------------------------------------------------------
// Fortschritt
// ---------------------------------------------------------------------------

export const lektion_fortschritt = sqliteTable(
  "lektion_fortschritt",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    lektion_id: text().notNull(),
    abgeschlossen: integer({ mode: "boolean" }).notNull(),
    abgeschlossen_am: text(),
  },
  (t) => [unique().on(t.kurs_id, t.lektion_id)]
);

export const abschnitt_fortschritt = sqliteTable(
  "abschnitt_fortschritt",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    abschnitt_id: text().notNull(),
    verstanden: integer({ mode: "boolean" }).notNull(),
    verstanden_am: text(),
  },
  (t) => [unique().on(t.kurs_id, t.abschnitt_id)]
);

/** `lektion_id` ist bei KursFortschritt.quiz der Schluessel -- ein QuizSet
 * gehoert zu genau einer Lektion, nicht zu einer einzelnen Frage. */
export const quiz_ergebnisse = sqliteTable(
  "quiz_ergebnisse",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    kurs_id: text()
      .notNull()
      .references(() => kurse.id),
    lektion_id: text().notNull(),
    versuche: integer().notNull(),
    bestes_ergebnis: real().notNull(),
    max_punkte: real().notNull(),
    beste_quote: real().notNull(),
    zuletzt_am: text().notNull(),
  },
  (t) => [unique().on(t.kurs_id, t.lektion_id)]
);

/** `position` haelt die Reihenfolge der Versuche; loescheTestVersuch() adressiert per Index. */
export const test_versuche = sqliteTable("test_versuche", {
  id: integer().primaryKey({ autoIncrement: true }),
  kurs_id: text()
    .notNull()
    .references(() => kurse.id),
  position: integer().notNull(),
  test_id: text().notNull(),
  datum: text().notNull(),
  benoetigte_minuten: integer().notNull(),
  selbstbewertung: text({ mode: "json" }).$type<Record<string, number>>().notNull(),
  punkte: integer().notNull(),
  max_punkte: integer().notNull(),
  bestanden: integer({ mode: "boolean" }).notNull(),
  notiz: text(),
});

// ---------------------------------------------------------------------------
// Begriffe und Wiederholung
// ---------------------------------------------------------------------------

export const begriffe = sqliteTable("begriffe", {
  id: integer().primaryKey({ autoIncrement: true }),
  kurs_id: text().references(() => kurse.id),
  lektion_id: text(),
  abschnitt_id: text(),
  sbp_pruefung_id: text().references(() => sbp_pruefungen.id),
  begriff_id: text().notNull(),
  begriff: text().notNull(),
  definition: text().notNull(),
  quelle_typ: text({ enum: ["tabelle", "kernpunkt", "manuell"] }).notNull(),
  position: integer().notNull(),
});

/** 1:1 zu `begriffe` (Einzelnutzer-App, kein separates Nutzerkonzept). `box` ist ein
 * Leitner-Faecher-Index (0-4); richtig erhoeht ihn und setzt naechste_wiederholung_am
 * per Intervall-Tabelle weiter in die Zukunft, falsch setzt ihn auf 0 zurueck (siehe
 * queries/begriffe.ts LEITNER_INTERVALLE_TAGE). richtig_in_folge ist NUR die
 * Sofort-Wiederholung innerhalb der aktuellen Drill-Session (Mastery-Schwelle: 2). */
export const begriff_fortschritt = sqliteTable("begriff_fortschritt", {
  begriff_id: integer()
    .primaryKey()
    .references(() => begriffe.id),
  richtig_in_folge: integer().notNull(),
  gemeistert_session_am: text(),
  versuche_gesamt: integer().notNull(),
  box: integer().notNull(),
  naechste_wiederholung_am: text(),
  zuletzt_versucht_am: text(),
});
