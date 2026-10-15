export type KursStatus =
  | "nicht_begonnen"
  | "in_vorbereitung"
  | "angemeldet"
  | "abgelegt"
  | "bestanden"
  | "nicht_bestanden";

export type Prioritaet = "kritisch" | "hoch" | "mittel" | "niedrig" | "info" | "optional";

export interface Kurs {
  id: string;
  lva_nummer: string;
  name: string;
  typ: string;
  ects: number;
  kategorie: string;
  semester_plan: string;
  semester_label?: string;
  steop?: boolean;
  pflicht?: boolean;
  enge_wahl?: boolean;
  vertiefung_pflicht?: boolean;
  streichkandidat?: boolean;
  sbp_wahlfach?: boolean;
  status: KursStatus;
  note: number | null;
  antritte?: unknown[];
  schwierigkeitsgrad?: string;
  notiz?: string;
  links?: { tiss?: string; vowi?: string };
  pfad?: string;
  inhalt?: string[];
  literatur?: Literatur[];
  tipps?: string;
  pruefungsstrategie?: Record<string, unknown>;
  // TISS-enriched fields
  tuwel_url?: string;
  sws?: number;
  format?: string;
  pruefungsmodus?: string;
  sprache?: string;
  vortragende?: string[];
  institut?: string;
  lernergebnisse?: string[];
  tiss_inhalt?: string[];
  methoden?: string;
  leistungsnachweis?: string;
  vorkenntnisse_tiss?: string;
  weitere_informationen?: string;
  ects_breakdown?: Record<string, number>;
}

export interface Literatur {
  titel: string;
  autor?: string;
  autoren?: string[];
  auflage?: string;
  typ: string;
  verfuegbarkeit?: string;
  url?: string;
  anmerkung?: string;
  isbn?: string;
}

export interface Termin {
  datum?: string;
  datum_von?: string;
  datum_bis?: string;
  datum_ca?: string;
  kategorie: string;
  prioritaet: Prioritaet;
  titel: string;
  beschreibung: string;
  erledigt: boolean;
  erledigt_am?: string;
  status?: string;
  link?: string;
}

export interface LernFrage {
  frage: string;
  antwort: string;
}

export interface LernBeispiel {
  code?: string;
  sprache?: string;
  erklaerung: string;
}

export interface LernThema {
  nr: number;
  id: string;
  titel: string;
  erklaerung: string;
  kernpunkte: string[];
  beispiel?: LernBeispiel;
  fragen: LernFrage[];
  typische_fehler?: string[];
}

export interface LernModule {
  kurs_id: string;
  themen: LernThema[];
}

// ---------------------------------------------------------------------------
// Lernpfad (interaktive Kursansicht)
// ---------------------------------------------------------------------------

export type LektionArt = "kapitel" | "anhang";

/** Leichte Metadaten eines Unterabschnitts (### ) -- fuer den Anker-Chip und die Sidebar. */
export interface SkriptUnterabschnittMeta {
  id: string;
  position: number;
  titel: string;
  anker: string;
}

/** Ein Unterabschnitt inkl. seines eigenen Markdown-Ausschnitts -- Basis einer Konzeptkarte. */
export interface SkriptUnterabschnitt extends SkriptUnterabschnittMeta {
  markdown: string;
}

export interface SkriptLektionMeta {
  id: string;
  art: LektionArt;
  nr: number | null;
  position: number;
  titel: string;
  kurztitel: string;
  anker: string;
  unterabschnitte: SkriptUnterabschnittMeta[];
  zeilen: number;
  codebloecke: number;
  wortanzahl: number;
  lesedauer_minuten: number;
}

export interface SkriptLektion extends SkriptLektionMeta {
  markdown: string;
  /** Dieselben Unterabschnitte wie `unterabschnitte`, aber mit eigenem Markdown pro Karte. */
  abschnitte: SkriptUnterabschnitt[];
  /** Text zwischen der Kapitelueberschrift und dem ersten ###-Abschnitt (oft leer). */
  einleitung: string;
}

export interface SkriptGliederung {
  kurs_id: string;
  titel: string;
  untertitel: string | null;
  lektionen: SkriptLektionMeta[];
}

export interface QuizQuelle {
  datei: string;
  seite?: number;
  frage_nr?: number;
  jahrgang?: string;
}

export interface QuizOption {
  /** Fehlt bei reinen Code-Antwortoptionen (nur `code`, kein Textlabel) -- real haeufig. */
  text?: string;
  code?: string;
  sprache?: string;
}

export interface QuizFrageEinfachauswahl {
  id: string;
  typ: "einfachauswahl";
  lektion_id: string;
  einleitung?: string;
  code?: string;
  sprache?: string;
  frage: string;
  optionen: QuizOption[];
  richtig: number;
  erklaerung: string;
  punkte: number;
  quelle: QuizQuelle;
}

export interface QuizZeile {
  /** Fehlt bei reinen Code-Zeilen (nur `code`, kein Textlabel) -- real haeufig. */
  text?: string;
  code?: string;
  sprache?: string;
  richtig: boolean;
}

export interface QuizFrageWahrFalsch {
  id: string;
  typ: "wahr_falsch";
  lektion_id: string;
  einleitung?: string;
  hinweis?: string;
  frage: string;
  zeilen: QuizZeile[];
  erklaerung: string;
  punkte: number;
  quelle: QuizQuelle;
}

export type QuizFrage = QuizFrageEinfachauswahl | QuizFrageWahrFalsch;

export interface QuizBank {
  kurs: string;
  beschreibung: string;
  fragen: QuizFrage[];
}

export interface TestRubrikZeile {
  id: string;
  methode: string;
  kriterium: string;
  punkte: number;
}

export interface TestAufrufBeispiel {
  aufruf: string;
  ausgabe: string;
}

export interface TestMethode {
  signatur: string;
  beschreibung: string;
  vorbedingungen: string[];
  rekursiv?: boolean;
  beispiel_ausgabe?: string;
}

export interface Programmiertest {
  id: string;
  titel: string;
  jahrgang: string;
  datum: string | null;
  lektion_id: string | null;
  dauer_minuten: number;
  dauer_quelle: "angabe" | "annahme";
  max_punkte: number;
  bestehensgrenze_punkte: number;
  einschraenkungen: string[];
  erlaubte_api: string[];
  deklarationen: string;
  methoden: TestMethode[];
  testaufrufe: TestAufrufBeispiel[];
  rubrik: TestRubrikZeile[];
  referenzloesung: string;
  referenzloesung_quelle: "skript" | "eigen";
  quelle: QuizQuelle;
}

export interface ProgrammiertestBank {
  kurs: string;
  beschreibung: string;
  hinweis_selbstbewertung: string;
  tests: Programmiertest[];
}

export interface LektionFortschritt {
  abgeschlossen: boolean;
  abgeschlossen_am: string | null;
}

export interface AbschnittFortschritt {
  verstanden: boolean;
  verstanden_am: string | null;
}

export interface QuizErgebnis {
  versuche: number;
  bestes_ergebnis: number;
  max_punkte: number;
  beste_quote: number;
  zuletzt_am: string;
}

export interface TestVersuch {
  test_id: string;
  datum: string;
  benoetigte_minuten: number;
  selbstbewertung: Record<string, number>;
  punkte: number;
  max_punkte: number;
  bestanden: boolean;
  notiz?: string;
}

export interface KursFortschritt {
  kurs: string;
  zuletzt_aktualisiert: string;
  lektionen: Record<string, LektionFortschritt>;
  abschnitte: Record<string, AbschnittFortschritt>;
  quiz: Record<string, QuizErgebnis>;
  tests: TestVersuch[];
}
