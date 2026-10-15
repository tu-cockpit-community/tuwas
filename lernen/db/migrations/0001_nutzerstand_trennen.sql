CREATE TABLE `inhalt_stand` (
	`id` integer PRIMARY KEY NOT NULL,
	`quelle` text NOT NULL,
	`tag` text NOT NULL,
	`sha256` text NOT NULL,
	`veroeffentlicht_am` text NOT NULL,
	`eingespielt_am` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `kurs_stand` (
	`kurs_id` text PRIMARY KEY NOT NULL,
	`status` text DEFAULT 'nicht_begonnen' NOT NULL,
	`note` real,
	`antritte` text,
	`semester_plan` text,
	`semester_label` text,
	`streichkandidat` integer,
	`notiz` text,
	`tipps` text,
	FOREIGN KEY (`kurs_id`) REFERENCES `kurse`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
-- Persoenlichen Stand uebernehmen, bevor die Spalten aus `kurse` verschwinden.
INSERT INTO `kurs_stand` (`kurs_id`, `status`, `note`, `antritte`, `semester_plan`, `semester_label`, `streichkandidat`, `notiz`, `tipps`)
SELECT `id`, `status`, `note`, `antritte`, `semester_plan`, `semester_label`, `streichkandidat`, `notiz`, `tipps` FROM `kurse`;
--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `semester_plan`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `semester_label`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `streichkandidat`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `status`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `note`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `antritte`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `notiz`;--> statement-breakpoint
ALTER TABLE `kurse` DROP COLUMN `tipps`;