import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { z } from "zod";
import { MAX_PAKET_BYTES, PAKET_DATEI } from "./konfig";

/** Das Aktualisieren ist gescheitert. Die Meldung ist fuer Nutzer gedacht. */
export class UpdateFehler extends Error {}

export interface Veroeffentlichung {
  tag: string;
  veroeffentlichtAm: string;
  seite: string;
  url: string;
  groesse: number;
  sha256: string;
}

type Hol = typeof fetch;

const REPOSITORY = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})\/[A-Za-z0-9._-]{1,100}$/;

const Release = z.object({
  tag_name: z.string().min(1),
  published_at: z.string().min(1),
  html_url: z.url(),
  assets: z.array(
    z.object({ name: z.string(), browser_download_url: z.url(), size: z.number(), digest: z.string().nullish() })
  ),
});

/** Nur GitHub selbst liefert Releases aus (die Datei liegt nach Weiterleitung auf githubusercontent.com). */
function vonGithub(adresse: string): boolean {
  const { protocol, hostname } = new URL(adresse);
  return protocol === "https:" && (hostname === "github.com" || hostname.endsWith(".githubusercontent.com"));
}

/**
 * Das neueste Release des Repositories ("name/repo") mit dem Inhaltspaket. `null`, wenn es noch kein Release gibt.
 * Die Pruefsumme kommt von GitHub (Feld `digest` des Release-Assets); ohne sie wird nichts geladen.
 */
export async function neuesteVeroeffentlichung(repository: string, hol: Hol = fetch): Promise<Veroeffentlichung | null> {
  if (!REPOSITORY.test(repository)) throw new UpdateFehler("Die Update-Quelle ist ungültig, erwartet wird name/repo.");

  let antwort: Response;
  try {
    antwort = await hol(`https://api.github.com/repos/${repository}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "User-Agent": "lernen-inhalt" },
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    throw new UpdateFehler("GitHub ist nicht erreichbar. Bist du online?");
  }
  if (antwort.status === 404) return null;
  if (!antwort.ok) throw new UpdateFehler(`GitHub antwortet mit HTTP ${antwort.status}.`);

  const release = Release.safeParse(await antwort.json().catch(() => null));
  if (!release.success) throw new UpdateFehler("Die Antwort von GitHub konnte nicht gelesen werden.");

  const datei = release.data.assets.find((a) => a.name === PAKET_DATEI);
  if (!datei) throw new UpdateFehler(`Im neuesten Release fehlt die Datei ${PAKET_DATEI}.`);
  const sha256 = /^sha256:([0-9a-f]{64})$/i.exec(datei.digest ?? "")?.[1]?.toLowerCase();
  if (!sha256) throw new UpdateFehler("Das Release enthält keine Prüfsumme für das Inhaltspaket.");
  if (datei.size > MAX_PAKET_BYTES) throw new UpdateFehler("Das Inhaltspaket ist größer als erlaubt.");
  if (!vonGithub(datei.browser_download_url)) throw new UpdateFehler("Das Inhaltspaket liegt nicht bei GitHub.");

  return {
    tag: release.data.tag_name,
    veroeffentlichtAm: release.data.published_at,
    seite: release.data.html_url,
    url: datei.browser_download_url,
    groesse: datei.size,
    sha256,
  };
}

/** Laedt das Paket nach `zielPfad` und prueft Groesse und SHA-256. Bei einer Abweichung wird nichts geschrieben. */
export async function ladePaket(veroeffentlichung: Veroeffentlichung, zielPfad: string, hol: Hol = fetch): Promise<void> {
  let antwort: Response;
  try {
    antwort = await hol(veroeffentlichung.url, { headers: { "User-Agent": "lernen-inhalt" }, signal: AbortSignal.timeout(120_000) });
  } catch {
    throw new UpdateFehler("Das Inhaltspaket konnte nicht geladen werden. Bist du online?");
  }
  if (!antwort.ok) throw new UpdateFehler(`Der Download scheiterte mit HTTP ${antwort.status}.`);
  if (antwort.url && !vonGithub(antwort.url)) throw new UpdateFehler("Der Download wurde auf eine fremde Adresse umgeleitet.");

  const teile: Uint8Array[] = [];
  let gesamt = 0;
  for await (const teil of antwort.body as unknown as AsyncIterable<Uint8Array>) {
    gesamt += teil.byteLength;
    if (gesamt > MAX_PAKET_BYTES || gesamt > veroeffentlichung.groesse) throw new UpdateFehler("Das Inhaltspaket ist größer als angekündigt.");
    teile.push(teil);
  }
  if (gesamt !== veroeffentlichung.groesse) throw new UpdateFehler("Das Inhaltspaket ist unvollständig angekommen.");
  const daten = Buffer.concat(teile);
  if (createHash("sha256").update(daten).digest("hex") !== veroeffentlichung.sha256) {
    throw new UpdateFehler("Die Prüfsumme des Inhaltspakets stimmt nicht. Es wurde nicht eingespielt.");
  }
  writeFileSync(zielPfad, daten, { mode: 0o600 });
}
