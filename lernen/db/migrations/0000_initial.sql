CREATE TABLE `abschnitt_fortschritt` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`abschnitt_id` text NOT NULL,
	`verstanden` integer NOT NULL,
	`verstanden_am` text,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `abschnitt_fortschritt_kurs_id_abschnitt_id_unique` ON `abschnitt_fortschritt` (`kurs_id`,`abschnitt_id`);--> statement-breakpoint
CREATE TABLE `begriff_fortschritt` (
	`begriff_id` integer PRIMARY KEY NOT NULL,
	`richtig_in_folge` integer NOT NULL,
	`gemeistert_session_am` text,
	`versuche_gesamt` integer NOT NULL,
	`box` integer NOT NULL,
	`naechste_wiederholung_am` text,
	`zuletzt_versucht_am` text,
	FOREIGN KEY (`begriff_id`) REFERENCES `begriffe`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `begriffe` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text,
	`lektion_id` text,
	`abschnitt_id` text,
	`sbp_pruefung_id` text,
	`begriff_id` text NOT NULL,
	`begriff` text NOT NULL,
	`definition` text NOT NULL,
	`quelle_typ` text NOT NULL,
	`position` integer NOT NULL,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`sbp_pruefung_id`) REFERENCES `sbp_pruefungen`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `kurse` (
	`id` text PRIMARY KEY NOT NULL,
	`lva_nummer` text NOT NULL,
	`name` text NOT NULL,
	`typ` text NOT NULL,
	`ects` real NOT NULL,
	`kategorie` text NOT NULL,
	`semester_plan` text NOT NULL,
	`semester_label` text,
	`steop` integer,
	`pflicht` integer,
	`enge_wahl` integer,
	`vertiefung_pflicht` integer,
	`streichkandidat` integer,
	`sbp_wahlfach` integer,
	`status` text NOT NULL,
	`note` real,
	`antritte` text,
	`schwierigkeitsgrad` text,
	`notiz` text,
	`links_tiss` text,
	`links_vowi` text,
	`pfad` text,
	`inhalt` text,
	`literatur` text,
	`tipps` text,
	`pruefungsstrategie` text,
	`tuwel_url` text,
	`sws` real,
	`format` text,
	`pruefungsmodus` text,
	`sprache` text,
	`vortragende` text,
	`institut` text,
	`lernergebnisse` text,
	`tiss_inhalt` text,
	`methoden` text,
	`leistungsnachweis` text,
	`vorkenntnisse_tiss` text,
	`weitere_informationen` text,
	`ects_breakdown` text,
	`weitere_felder` text,
	`skript_titel` text,
	`skript_untertitel` text
);
--> statement-breakpoint
CREATE TABLE `lektion_fortschritt` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`lektion_id` text NOT NULL,
	`abgeschlossen` integer NOT NULL,
	`abgeschlossen_am` text,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lektion_fortschritt_kurs_id_lektion_id_unique` ON `lektion_fortschritt` (`kurs_id`,`lektion_id`);--> statement-breakpoint
CREATE TABLE `lektionen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`lektion_id` text NOT NULL,
	`art` text NOT NULL,
	`nr` integer,
	`position` integer NOT NULL,
	`titel` text NOT NULL,
	`kurztitel` text NOT NULL,
	`anker` text NOT NULL,
	`zeilen` integer NOT NULL,
	`codebloecke` integer NOT NULL,
	`wortanzahl` integer NOT NULL,
	`lesedauer_minuten` integer NOT NULL,
	`markdown` text NOT NULL,
	`einleitung` text NOT NULL,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lektionen_kurs_id_lektion_id_unique` ON `lektionen` (`kurs_id`,`lektion_id`);--> statement-breakpoint
CREATE TABLE `lern_themen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`thema_id` text NOT NULL,
	`nr` integer NOT NULL,
	`titel` text NOT NULL,
	`erklaerung` text NOT NULL,
	`kernpunkte` text NOT NULL,
	`beispiel` text,
	`fragen` text NOT NULL,
	`typische_fehler` text,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lern_themen_kurs_id_thema_id_unique` ON `lern_themen` (`kurs_id`,`thema_id`);--> statement-breakpoint
CREATE TABLE `programmiertests` (
	`id` text PRIMARY KEY NOT NULL,
	`kurs_id` text NOT NULL,
	`titel` text NOT NULL,
	`jahrgang` text NOT NULL,
	`datum` text,
	`lektion_id` text,
	`dauer_minuten` integer NOT NULL,
	`dauer_quelle` text NOT NULL,
	`max_punkte` integer NOT NULL,
	`bestehensgrenze_punkte` integer NOT NULL,
	`deklarationen` text NOT NULL,
	`referenzloesung` text NOT NULL,
	`referenzloesung_quelle` text NOT NULL,
	`quelle` text NOT NULL,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `quiz_ergebnisse` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`lektion_id` text NOT NULL,
	`versuche` integer NOT NULL,
	`bestes_ergebnis` real NOT NULL,
	`max_punkte` real NOT NULL,
	`beste_quote` real NOT NULL,
	`zuletzt_am` text NOT NULL,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `quiz_ergebnisse_kurs_id_lektion_id_unique` ON `quiz_ergebnisse` (`kurs_id`,`lektion_id`);--> statement-breakpoint
CREATE TABLE `quiz_fragen` (
	`id` text PRIMARY KEY NOT NULL,
	`kurs_id` text NOT NULL,
	`typ` text NOT NULL,
	`lektion_id` text NOT NULL,
	`einleitung` text,
	`code` text,
	`sprache` text,
	`frage` text NOT NULL,
	`hinweis` text,
	`richtig` integer,
	`erklaerung` text NOT NULL,
	`punkte` integer NOT NULL,
	`quelle` text NOT NULL,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `quiz_optionen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`frage_id` text NOT NULL,
	`position` integer NOT NULL,
	`text` text,
	`code` text,
	`sprache` text,
	FOREIGN KEY (`frage_id`) REFERENCES `quiz_fragen`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `quiz_zeilen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`frage_id` text NOT NULL,
	`position` integer NOT NULL,
	`text` text,
	`code` text,
	`sprache` text,
	`richtig` integer NOT NULL,
	FOREIGN KEY (`frage_id`) REFERENCES `quiz_fragen`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sbp_pruefungen` (
	`id` text PRIMARY KEY NOT NULL,
	`position` integer NOT NULL,
	`bezeichnung` text NOT NULL,
	`beschreibung` text NOT NULL,
	`vorbereitungsaufwand` text NOT NULL,
	`termin_plan` text NOT NULL,
	`status` text NOT NULL,
	`note` real,
	`antritte` text NOT NULL,
	`max_antritte` integer NOT NULL,
	`ist_schlussstein` integer,
	`literatur` text,
	`hinweis` text
);
--> statement-breakpoint
CREATE TABLE `skript_abschnitte` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lektion_row_id` integer NOT NULL,
	`kurs_id` text NOT NULL,
	`abschnitt_id` text NOT NULL,
	`position` integer NOT NULL,
	`titel` text NOT NULL,
	`anker` text NOT NULL,
	`markdown` text NOT NULL,
	FOREIGN KEY (`lektion_row_id`) REFERENCES `lektionen`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `skript_abschnitte_kurs_id_abschnitt_id_unique` ON `skript_abschnitte` (`kurs_id`,`abschnitt_id`);--> statement-breakpoint
CREATE TABLE `test_aufrufe` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_id` text NOT NULL,
	`position` integer NOT NULL,
	`aufruf` text NOT NULL,
	`ausgabe` text NOT NULL,
	FOREIGN KEY (`test_id`) REFERENCES `programmiertests`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_einschraenkungen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_id` text NOT NULL,
	`position` integer NOT NULL,
	`text` text NOT NULL,
	FOREIGN KEY (`test_id`) REFERENCES `programmiertests`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_erlaubte_api` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_id` text NOT NULL,
	`position` integer NOT NULL,
	`text` text NOT NULL,
	FOREIGN KEY (`test_id`) REFERENCES `programmiertests`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_methoden` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_id` text NOT NULL,
	`position` integer NOT NULL,
	`signatur` text NOT NULL,
	`beschreibung` text NOT NULL,
	`vorbedingungen` text NOT NULL,
	`rekursiv` integer,
	`beispiel_ausgabe` text,
	FOREIGN KEY (`test_id`) REFERENCES `programmiertests`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_rubrik` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_id` text NOT NULL,
	`zeile_id` text NOT NULL,
	`position` integer NOT NULL,
	`methode` text NOT NULL,
	`kriterium` text NOT NULL,
	`punkte` integer NOT NULL,
	FOREIGN KEY (`test_id`) REFERENCES `programmiertests`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `test_rubrik_test_id_zeile_id_unique` ON `test_rubrik` (`test_id`,`zeile_id`);--> statement-breakpoint
CREATE TABLE `test_versuche` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kurs_id` text NOT NULL,
	`position` integer NOT NULL,
	`test_id` text NOT NULL,
	`datum` text NOT NULL,
	`benoetigte_minuten` integer NOT NULL,
	`selbstbewertung` text NOT NULL,
	`punkte` integer NOT NULL,
	`max_punkte` integer NOT NULL,
	`bestanden` integer NOT NULL,
	`notiz` text,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
