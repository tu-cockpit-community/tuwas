/**
 * Die Module des Bachelors Informatik, in denen die Lehrveranstaltungen auf der Seite "Faecher" stehen. Jede
 * Kategorie der Datenbank (kurse.kategorie) gehoert zu genau einem Modul und hat einen lesbaren Namen.
 */
const KATEGORIEN: ReadonlyArray<{ kategorie: string; name: string; modul: string }> = [
  { kategorie: "steop", name: "StEOP", modul: "StEOP" },
  { kategorie: "pflicht", name: "Pflicht", modul: "Pflicht" },
  { kategorie: "enge_wahl", name: "Enge Wahl", modul: "Enge Wahl" },
  { kategorie: "enge_wahl_und_vertiefung", name: "Enge Wahl und Vertiefung", modul: "Enge Wahl" },
  { kategorie: "vertiefung_aiml", name: "Vertiefung AI & ML", modul: "Vertiefung AI & ML" },
  { kategorie: "freie_wahl", name: "Freie Wahl", modul: "Freie Wahl" },
  { kategorie: "bachelorarbeit", name: "Bachelorarbeit", modul: "Bachelorarbeit" },
  { kategorie: "optional", name: "Vorkurs", modul: "Vorkurs" },
];

/** Die Module in der Reihenfolge der Seite. */
export const MODULE: readonly string[] = [...new Set(KATEGORIEN.map((k) => k.modul))];

/** Das Modul einer Kategorie, `undefined` bei einer unbekannten Kategorie. */
export function modulVon(kategorie: string): string | undefined {
  return KATEGORIEN.find((k) => k.kategorie === kategorie)?.modul;
}

/** Kategorie wie in der Datenbank ("vertiefung_aiml") lesbar ("Vertiefung AI & ML"). */
export function kategorieName(kategorie: string | undefined): string {
  if (!kategorie) return "-";
  return KATEGORIEN.find((k) => k.kategorie === kategorie)?.name ?? kategorie.replace(/_/g, " ");
}
