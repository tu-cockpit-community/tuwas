/**
 * Inhaltspaket: eine SQLite-Datei mit den Inhalts-Tabellen der App (Kurse, Lernpfad, Quiz, Programmiertests,
 * Begriffe), ohne Nutzerstand. Sie wird als Release-Datei auf GitHub veroeffentlicht und von der App eingespielt.
 */

/**
 * Tabellen mit Inhalt, so geordnet, dass Eltern vor Kindern stehen: in dieser Reihenfolge wird eingespielt,
 * rueckwaerts geloescht. `kurse` wird nie geloescht, nur aktualisiert (der Nutzerstand haengt an den Kurs-IDs).
 */
export const INHALT_TABELLEN = [
  "kurse",
  "lektionen",
  "skript_abschnitte",
  "quiz_fragen",
  "quiz_optionen",
  "quiz_zeilen",
  "programmiertests",
  "test_einschraenkungen",
  "test_erlaubte_api",
  "test_methoden",
  "test_aufrufe",
  "test_rubrik",
  "lern_themen",
  "sbp_pruefungen",
  "begriffe",
] as const;

/** Version des Paketformats (SQLite `user_version`). Erhoehen, wenn sich Tabellen oder Spalten aendern. */
export const PAKET_FORMAT = 1;

/** Name der Datei im GitHub-Release. */
export const PAKET_DATEI = "lernen-inhalt.db";

/** Groessere Pakete werden nicht geladen. */
export const MAX_PAKET_BYTES = 64 * 1024 * 1024;

/** Umgebungsvariable mit dem Repository der Releases, z. B. "name/repo". Ohne sie ist das Aktualisieren aus. */
export const QUELLE_VARIABLE = "LERNEN_INHALT_REPO";
