import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, describe, test } from "node:test";
import { ladePaket, neuesteVeroeffentlichung, UpdateFehler, type Veroeffentlichung } from "./github";
import { MAX_PAKET_BYTES, PAKET_DATEI } from "./konfig";

const ordner = mkdtempSync(join(tmpdir(), "lernen-github-"));
after(() => rmSync(ordner, { recursive: true, force: true }));

const daten = Buffer.from("inhaltspaket-testdaten".repeat(100));
const sha = createHash("sha256").update(daten).digest("hex");
const URL_ASSET = "https://github.com/name/repo/releases/download/inhalt-1/lernen-inhalt.db";

type Asset = { name: string; browser_download_url: string; size: number; digest?: string | null };
const asset = (ueberschreiben: Partial<Asset> = {}): Asset => ({ name: PAKET_DATEI, browser_download_url: URL_ASSET, size: daten.length, digest: `sha256:${sha}`, ...ueberschreiben });
const release = (assets: Asset[]) => ({ tag_name: "inhalt-1", published_at: "2026-10-13T10:00:00Z", html_url: "https://github.com/name/repo/releases/tag/inhalt-1", assets });
const json = (koerper: unknown, status = 200): typeof fetch => async () => new Response(JSON.stringify(koerper), { status });
const antwortMit = (koerper: Buffer | string, optionen: { status?: number; url?: string } = {}): Response => {
  const antwort = new Response(typeof koerper === "string" ? koerper : new Uint8Array(koerper), { status: optionen.status ?? 200 });
  Object.defineProperty(antwort, "url", { value: optionen.url ?? URL_ASSET });
  return antwort;
};

describe("neuesteVeroeffentlichung", () => {
  test("liefert Tag, Datum, Adresse, Groesse und Pruefsumme des Pakets", async () => {
    const v = await neuesteVeroeffentlichung("name/repo", json(release([asset()])));
    assert.deepEqual(v, { tag: "inhalt-1", veroeffentlichtAm: "2026-10-13T10:00:00Z", seite: "https://github.com/name/repo/releases/tag/inhalt-1", url: URL_ASSET, groesse: daten.length, sha256: sha });
  });

  test("ohne Release (404) gibt es nichts zu holen", async () => {
    assert.equal(await neuesteVeroeffentlichung("name/repo", json({}, 404)), null);
  });

  test("fragt GitHubs API fuer genau dieses Repository", async () => {
    let adresse = "";
    await neuesteVeroeffentlichung("name/repo", async (a) => ((adresse = String(a)), new Response(JSON.stringify(release([asset()])))));
    assert.equal(adresse, "https://api.github.com/repos/name/repo/releases/latest");
  });

  const fehler: [string, () => typeof fetch, string, RegExp][] = [
    ["ungueltiges Repository", () => json({}), "../../etc/passwd", /ungültig/],
    ["Repository mit Leerzeichen", () => json({}), "name/re po", /ungültig/],
    ["Datei fehlt im Release", () => json(release([asset({ name: "anderes.zip" })])), "name/repo", /fehlt die Datei/],
    ["keine Pruefsumme", () => json(release([asset({ digest: null })])), "name/repo", /keine Prüfsumme/],
    ["Pruefsumme in falschem Format", () => json(release([asset({ digest: "md5:abc" })])), "name/repo", /keine Prüfsumme/],
    ["Paket zu gross", () => json(release([asset({ size: MAX_PAKET_BYTES + 1 })])), "name/repo", /größer als erlaubt/],
    ["Datei liegt nicht bei GitHub", () => json(release([asset({ browser_download_url: "https://example.org/lernen-inhalt.db" })])), "name/repo", /nicht bei GitHub/],
    ["Datei ueber http", () => json(release([asset({ browser_download_url: "http://github.com/x/lernen-inhalt.db" })])), "name/repo", /nicht bei GitHub/],
    ["GitHub-Fehler", () => json({}, 500), "name/repo", /HTTP 500/],
    ["Antwort ist kein Release", () => json({ foo: 1 }), "name/repo", /nicht gelesen/],
    ["Netzwerkfehler", () => async () => Promise.reject(new TypeError("fetch failed")), "name/repo", /nicht erreichbar/],
  ];
  for (const [name, hol, repo, meldung] of fehler) {
    test(`lehnt ab: ${name}`, async () => {
      await assert.rejects(neuesteVeroeffentlichung(repo, hol()), (e) => e instanceof UpdateFehler && meldung.test(e.message));
    });
  }
});

describe("ladePaket", () => {
  const v: Veroeffentlichung = { tag: "inhalt-1", veroeffentlichtAm: "", seite: "", url: URL_ASSET, groesse: daten.length, sha256: sha };
  const ziel = (name: string) => join(ordner, name);

  test("schreibt die Datei, wenn Groesse und Pruefsumme stimmen", async () => {
    await ladePaket(v, ziel("ok.db"), async () => antwortMit(daten));
    assert.deepEqual(readFileSync(ziel("ok.db")), daten);
  });

  const abweichungen: [string, () => Response, RegExp][] = [
    ["falsche Pruefsumme", () => antwortMit(Buffer.from("x".repeat(daten.length))), /Prüfsumme/],
    ["zu wenig Daten", () => antwortMit(daten.subarray(0, 10)), /unvollständig/],
    ["mehr Daten als angekuendigt", () => antwortMit(Buffer.concat([daten, Buffer.from("zu viel")])), /größer als angekündigt/],
    ["Umleitung auf fremde Adresse", () => antwortMit(daten, { url: "https://example.org/lernen-inhalt.db" }), /fremde Adresse/],
    ["HTTP-Fehler", () => antwortMit("nein", { status: 503 }), /HTTP 503/],
  ];
  for (const [name, antwort, meldung] of abweichungen) {
    test(`lehnt ab und schreibt nichts: ${name}`, async () => {
      const datei = ziel(`abgelehnt-${name.replace(/\W+/g, "-")}.db`);
      await assert.rejects(ladePaket(v, datei, async () => antwort()), (e) => e instanceof UpdateFehler && meldung.test(e.message));
      assert.equal(existsSync(datei), false);
    });
  }

  test("Netzwerkfehler beim Download", async () => {
    await assert.rejects(ladePaket(v, ziel("netz.db"), async () => Promise.reject(new TypeError("x"))), /Bist du online/);
  });
});
