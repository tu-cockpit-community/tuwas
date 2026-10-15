import type Database from "better-sqlite3";
import { INHALT_TABELLEN } from "./konfig";
import { PaketFehler, pruefePaket } from "./paket";

/** Woher das Paket stammt; wird als Stand der Inhalte gespeichert. */
export interface Herkunft {
  quelle: string;
  tag: string;
  sha256: string;
  veroeffentlichtAm: string;
}

export interface EinspielErgebnis {
  kurse: number;
  begriffe: number;
  /** Begriffe, deren Lernfortschritt auf den neuen Stand uebertragen wurde. */
  fortschrittBehalten: number;
  /** Fortschritt zu Begriffen, die es im neuen Stand nicht mehr gibt. */
  fortschrittVerloren: number;
}

/** Jeder Begriff mit seiner laufenden Nummer unter gleichen Begriffen desselben Abschnitts. */
const NUMMERIERT = `
  SELECT id, kurs_id, sbp_pruefung_id, lektion_id, abschnitt_id, begriff_id,
         row_number() OVER (PARTITION BY kurs_id, sbp_pruefung_id, lektion_id, abschnitt_id, begriff_id ORDER BY position, id) AS o
  FROM main.begriffe`;

const quote = (name: string): string => `"${name.replace(/"/g, '""')}"`;

function spaltenVon(db: Database.Database, tabelle: string): string[] {
  return (db.prepare("SELECT name FROM pragma_table_info(?) ORDER BY cid").all(tabelle) as { name: string }[]).map((z) => z.name);
}

/**
 * Spielt ein geprueftes Inhaltspaket in die Datenbank ein. Alles geschieht in einer Transaktion: scheitert etwas,
 * bleibt die Datenbank unveraendert.
 *
 * - Kurse werden aktualisiert oder ergaenzt, nie geloescht (Fortschritt und Nutzerstand haengen an der Kurs-ID).
 * - Lektionen, Quiz, Tests, Lernthemen, SBP-Pruefungen und Begriffe werden durch die des Pakets ersetzt.
 * - Nutzerstand (`kurs_stand`) und Fortschrittstabellen bleiben unberuehrt. Nur der Begriffs-Fortschritt haengt an
 *   Zeilen-IDs, die sich aendern: er wird ueber einen inhaltlichen Schluessel auf die neuen IDs uebertragen.
 */
export function spieleEin(app: Database.Database, paketPfad: string, herkunft: Herkunft): EinspielErgebnis {
  pruefePaket(paketPfad, app);

  app.prepare("ATTACH DATABASE ? AS paket").run(paketPfad);
  try {
    return app.transaction((): EinspielErgebnis => {
      app.pragma("defer_foreign_keys = ON");

      // Der Fortschritt haengt an Zeilen-IDs, die das Paket neu vergibt. Schluessel: Herkunft, Lektion, Abschnitt, Begriff
      // und die laufende Nummer unter gleichen Begriffen desselben Abschnitts. Die Position taugt nicht, sie verschiebt
      // sich bei jedem neuen Begriff davor.
      app.exec(`
        CREATE TEMP TABLE fortschritt_alt AS
        WITH nummeriert AS (${NUMMERIERT})
        SELECT n.kurs_id AS k, n.sbp_pruefung_id AS s, n.lektion_id AS l, n.abschnitt_id AS a, n.begriff_id AS b, n.o AS o,
               f.richtig_in_folge, f.gemeistert_session_am, f.versuche_gesamt, f.box, f.naechste_wiederholung_am, f.zuletzt_versucht_am
        FROM main.begriff_fortschritt f JOIN nummeriert n ON n.id = f.begriff_id`);
      const vorher = (app.prepare("SELECT count(*) AS n FROM temp.fortschritt_alt").get() as { n: number }).n;

      app.exec("DELETE FROM main.begriff_fortschritt");
      for (const tabelle of [...INHALT_TABELLEN].reverse()) {
        if (tabelle !== "kurse") app.exec(`DELETE FROM main.${quote(tabelle)}`);
      }

      for (const tabelle of INHALT_TABELLEN) {
        const spalten = spaltenVon(app, tabelle).map(quote).join(", ");
        if (tabelle === "kurse") {
          const aenderbar = spaltenVon(app, tabelle).filter((s) => s !== "id").map((s) => `${quote(s)} = excluded.${quote(s)}`).join(", ");
          app.exec(
            `INSERT INTO main.kurse (${spalten}) SELECT ${spalten} FROM paket.kurse WHERE true ON CONFLICT(id) DO UPDATE SET ${aenderbar}`
          );
        } else {
          app.exec(`INSERT INTO main.${quote(tabelle)} (${spalten}) SELECT ${spalten} FROM paket.${quote(tabelle)}`);
        }
      }

      const behalten = app
        .prepare(
          `WITH nummeriert AS (${NUMMERIERT})
           INSERT OR IGNORE INTO main.begriff_fortschritt
             (begriff_id, richtig_in_folge, gemeistert_session_am, versuche_gesamt, box, naechste_wiederholung_am, zuletzt_versucht_am)
           SELECT n.id, a.richtig_in_folge, a.gemeistert_session_am, a.versuche_gesamt, a.box, a.naechste_wiederholung_am, a.zuletzt_versucht_am
           FROM temp.fortschritt_alt a
           JOIN nummeriert n
             ON n.kurs_id IS a.k AND n.sbp_pruefung_id IS a.s AND n.lektion_id IS a.l AND n.abschnitt_id IS a.a
            AND n.begriff_id = a.b AND n.o = a.o`
        )
        .run().changes;
      app.exec("DROP TABLE temp.fortschritt_alt");

      app
        .prepare(
          `INSERT INTO main.inhalt_stand (id, quelle, tag, sha256, veroeffentlicht_am, eingespielt_am) VALUES (1, ?, ?, ?, ?, ?)
           ON CONFLICT(id) DO UPDATE SET quelle = excluded.quelle, tag = excluded.tag, sha256 = excluded.sha256,
             veroeffentlicht_am = excluded.veroeffentlicht_am, eingespielt_am = excluded.eingespielt_am`
        )
        .run(herkunft.quelle, herkunft.tag, herkunft.sha256, herkunft.veroeffentlichtAm, new Date().toISOString());

      if ((app.pragma("foreign_key_check") as unknown[]).length > 0) throw new PaketFehler("Das Inhaltspaket passt nicht zu den vorhandenen Daten.");

      const zahl = (sql: string): number => (app.prepare(sql).get() as { n: number }).n;
      return {
        kurse: zahl("SELECT count(*) AS n FROM paket.kurse"),
        begriffe: zahl("SELECT count(*) AS n FROM main.begriffe"),
        fortschrittBehalten: behalten,
        fortschrittVerloren: vorher - behalten,
      };
    })();
  } finally {
    app.exec("DETACH DATABASE paket");
  }
}
