import "server-only";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { eq } from "drizzle-orm";
import { db, sqlite } from "../db/client";
import { inhalt_stand } from "../db/schema";
import { spieleEin } from "./einspielen";
import { ladePaket, neuesteVeroeffentlichung, UpdateFehler, type Veroeffentlichung } from "./github";
import { QUELLE_VARIABLE } from "./konfig";
import { PaketFehler } from "./paket";
import type { InhaltStatus } from "./typen";

export type { InhaltStatus } from "./typen";

/** Repository der Releases, z. B. "name/repo". */
export const inhaltQuelle = (): string | null => process.env[QUELLE_VARIABLE]?.trim() || null;

export function lokalerStatus(): InhaltStatus {
  const zeile = db.select().from(inhalt_stand).where(eq(inhalt_stand.id, 1)).get();
  return {
    konfiguriert: inhaltQuelle() !== null,
    installiert: zeile ? { tag: zeile.tag, veroeffentlichtAm: zeile.veroeffentlicht_am, eingespieltAm: zeile.eingespielt_am } : null,
  };
}

const fehlertext = (fehler: unknown): string => {
  if (fehler instanceof UpdateFehler || fehler instanceof PaketFehler) return fehler.message;
  console.error("[inhalt]", fehler);
  return "Beim Aktualisieren ist ein unerwarteter Fehler aufgetreten.";
};

function istNeuer(neu: Veroeffentlichung, stand: InhaltStatus["installiert"]): boolean {
  return !stand || stand.tag !== neu.tag;
}

export async function pruefeUpdate(): Promise<InhaltStatus> {
  const stand = lokalerStatus();
  const quelle = inhaltQuelle();
  if (!quelle) return { ...stand, fehler: `Keine Update-Quelle eingerichtet (${QUELLE_VARIABLE}).` };
  try {
    const neu = await neuesteVeroeffentlichung(quelle);
    if (!neu || !istNeuer(neu, stand.installiert)) return { ...stand, verfuegbar: null };
    return { ...stand, verfuegbar: { tag: neu.tag, veroeffentlichtAm: neu.veroeffentlichtAm, seite: neu.seite } };
  } catch (fehler) {
    return { ...stand, fehler: fehlertext(fehler) };
  }
}

let laufend: Promise<InhaltStatus> | null = null;

/** Laedt das neueste Inhaltspaket, sichert die Datenbank und spielt es ein. Ein zweiter Aufruf wartet auf den ersten. */
export function installiereUpdate(): Promise<InhaltStatus> {
  laufend ??= installieren().finally(() => {
    laufend = null;
  });
  return laufend;
}

async function installieren(): Promise<InhaltStatus> {
  const quelle = inhaltQuelle();
  if (!quelle) return { ...lokalerStatus(), fehler: `Keine Update-Quelle eingerichtet (${QUELLE_VARIABLE}).` };
  const ordner = mkdtempSync(join(tmpdir(), "lernen-inhalt-"));
  try {
    const neu = await neuesteVeroeffentlichung(quelle);
    if (!neu) return { ...lokalerStatus(), fehler: "Es gibt noch kein Release mit Inhalten." };
    if (!istNeuer(neu, lokalerStatus().installiert)) return { ...lokalerStatus(), meldung: "Die Inhalte sind schon auf dem neuesten Stand." };

    const paket = join(ordner, "paket.db");
    await ladePaket(neu, paket);

    const sicherungen = join(process.cwd(), "db", "backups");
    mkdirSync(sicherungen, { recursive: true });
    await sqlite.backup(join(sicherungen, `lernen-vor-update-${new Date().toISOString().replace(/[:.]/g, "-")}.db`));

    const ergebnis = spieleEin(sqlite, paket, { quelle, tag: neu.tag, sha256: neu.sha256, veroeffentlichtAm: neu.veroeffentlichtAm });
    const verloren = ergebnis.fortschrittVerloren > 0 ? `, ${ergebnis.fortschrittVerloren} Begriffe ohne Nachfolger` : "";
    return {
      ...lokalerStatus(),
      verfuegbar: null,
      meldung: `Inhalte aktualisiert (${neu.tag}): ${ergebnis.kurse} Kurse, ${ergebnis.begriffe} Begriffe. Dein Fortschritt blieb erhalten${verloren}.`,
    };
  } catch (fehler) {
    return { ...lokalerStatus(), fehler: fehlertext(fehler) };
  } finally {
    rmSync(ordner, { recursive: true, force: true });
  }
}
