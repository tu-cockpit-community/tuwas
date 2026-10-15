import { rmSync } from "node:fs";
import Database from "better-sqlite3";
import { INHALT_TABELLEN, PAKET_FORMAT } from "./konfig";

/** Ein Inhaltspaket ist unbrauchbar oder passt nicht zu dieser App. Die Meldung ist fuer Nutzer gedacht. */
export class PaketFehler extends Error {}

const spalten = (db: Database.Database, tabelle: string): string => {
  const zeilen = db.prepare(`SELECT name, type FROM pragma_table_info(?) ORDER BY name`).all(tabelle) as { name: string; type: string }[];
  return zeilen.map((z) => `${z.name}:${z.type.toLowerCase()}`).join(",");
};

/**
 * Prueft eine heruntergeladene Datei, bevor sie die Datenbank beruehrt. Ein Paket darf nur die erwarteten
 * Inhalts-Tabellen mit genau den Spalten der App enthalten: keine Views, Trigger oder fremden Tabellen,
 * denn das ist Code, der beim Einspielen mitlaufen koennte.
 */
export function pruefePaket(paketPfad: string, app: Database.Database): void {
  let paket: Database.Database;
  try {
    paket = new Database(paketPfad, { readonly: true, fileMustExist: true });
  } catch {
    throw new PaketFehler("Die Datei ist keine lesbare Datenbank.");
  }
  try {
    // Ob die Datei eine Datenbank ist, zeigt sich erst bei der ersten Abfrage.
    try {
      paket.pragma("trusted_schema = OFF");
      if (paket.pragma("integrity_check", { simple: true }) !== "ok") throw new PaketFehler("Das Inhaltspaket ist beschädigt.");
    } catch (fehler) {
      throw fehler instanceof PaketFehler ? fehler : new PaketFehler("Die Datei ist keine gültige Datenbank oder beschädigt.");
    }
    const format = paket.pragma("user_version", { simple: true });
    if (format !== PAKET_FORMAT) {
      throw new PaketFehler(`Das Inhaltspaket hat das Format ${String(format)}, diese App erwartet Format ${PAKET_FORMAT}. Bitte die App aktualisieren.`);
    }

    const objekte = paket.prepare("SELECT type, name FROM sqlite_master").all() as { type: string; name: string }[];
    const fremd = objekte.filter(
      (o) => !(o.type === "table" || (o.type === "index" && (o.name.startsWith("sqlite_autoindex_") || o.name.endsWith("_unique"))))
    );
    if (fremd.length > 0) throw new PaketFehler(`Das Inhaltspaket enthält unerwartete Objekte (${fremd.map((o) => o.type).join(", ")}).`);

    const tabellen = objekte.filter((o) => o.type === "table" && o.name !== "sqlite_sequence").map((o) => o.name).sort();
    const erwartet = [...INHALT_TABELLEN].sort();
    if (tabellen.join() !== erwartet.join()) throw new PaketFehler("Das Inhaltspaket hat nicht die erwarteten Tabellen.");

    for (const tabelle of INHALT_TABELLEN) {
      if (spalten(paket, tabelle) !== spalten(app, tabelle)) {
        throw new PaketFehler(`Die Tabelle ${tabelle} im Inhaltspaket passt nicht zu dieser App-Version.`);
      }
    }
    if ((paket.pragma("foreign_key_check") as unknown[]).length > 0) throw new PaketFehler("Das Inhaltspaket verletzt seine eigenen Verweise.");
  } finally {
    paket.close();
  }
}

/**
 * Erzeugt aus einer Datenbank ein Inhaltspaket: Kopie der Datei, in der alles ausser den Inhalts-Tabellen
 * entfernt ist (Nutzerstand, Fortschritt, Migrationsverlauf). Gibt die Zeilenzahl je Tabelle zurueck.
 */
export function erzeugePaket(quellPfad: string, zielPfad: string): Record<string, number> {
  rmSync(zielPfad, { force: true });
  const quelle = new Database(quellPfad, { readonly: true, fileMustExist: true });
  try {
    quelle.prepare("VACUUM INTO ?").run(zielPfad);
  } finally {
    quelle.close();
  }

  const ziel = new Database(zielPfad);
  try {
    ziel.pragma("foreign_keys = OFF");
    const behalten = new Set<string>(INHALT_TABELLEN);
    const alle = ziel.prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'").all() as { name: string }[];
    for (const { name } of alle) if (!behalten.has(name)) ziel.exec(`DROP TABLE "${name}"`);
    ziel.pragma(`user_version = ${PAKET_FORMAT}`);
    const zeilen: Record<string, number> = {};
    for (const tabelle of INHALT_TABELLEN) zeilen[tabelle] = (ziel.prepare(`SELECT count(*) AS n FROM "${tabelle}"`).get() as { n: number }).n;
    ziel.exec("VACUUM");
    return zeilen;
  } finally {
    ziel.close();
  }
}
