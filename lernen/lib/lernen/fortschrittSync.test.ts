import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { erzeugeStandSpeicher } from "./fortschrittSync";
import { haenge, liesEreignisse, type Ereignis } from "./journal";
import { falte, neuesEreignis } from "./standEreignisse";
import { LEER, type Stand } from "./stand";

/** Browser mit eigenem Speicher gegen das echte Protokoll (Temp-Datei), ohne Netz; der Server faltet wie die Route. */
function umgebung() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sync-"));
  process.env.LERNEN_JOURNAL = path.join(dir, "lernstand.jsonl");
  const server = { erreichbar: true, posts: 0 };
  const stand = (kurs: string) => ({ stand: falte(liesEreignisse(kurs)) });
  const holen = async (url: string, init?: RequestInit): Promise<Response> => {
    if (!server.erreichbar) throw new TypeError("offline");
    if (init?.keepalive && String(init.body ?? "").length > 64 * 1024) throw new TypeError("keepalive body too large");
    const kurs = url.split("/").pop()!;
    if (!init?.method || init.method === "GET") return Response.json(stand(kurs));
    server.posts++;
    const d = JSON.parse(init.body as string) as { ereignisse: Ereignis[] };
    haenge(d.ereignisse.map((e) => ({ ...e, kurs })));
    return Response.json(stand(kurs));
  };
  const browser = (vorhanden: Record<string, string> = {}, verzoegerung = 0) => {
    const daten = new Map(Object.entries(vorhanden));
    const speicher = { getItem: (k: string) => daten.get(k) ?? null, setItem: (k: string, v: string) => void daten.set(k, v) };
    return { daten, s: erzeugeStandSpeicher({ speicher, holen, verzoegerung }) };
  };
  const ende = () => {
    delete process.env.LERNEN_JOURNAL;
    fs.rmSync(dir, { recursive: true, force: true });
  };
  return { server, browser, ende };
}

const warte = (ms = 40) => new Promise((r) => setTimeout(r, ms));
const geloest = (kurs: string, id: string): Ereignis => neuesEreignis(kurs, "aufgabe", id, { status: "richtig" });
const anzahl = (s: Stand) => Object.keys(s.aufgaben).length;

test("Sync: Ereignisse kommen ins Protokoll, ein leerer Browser bekommt den Stand zurueck", async () => {
  const u = umgebung();
  try {
    const a = u.browser();
    await a.s.laden("ep1");
    a.s.melde("ep1", geloest("ep1", "x"));
    assert.equal(anzahl(a.s.lies("ep1")), 1, "sofort sichtbar");
    await warte();
    assert.equal(liesEreignisse("ep1").length, 1);

    const neu = u.browser();
    assert.equal(anzahl(neu.s.lies("ep1")), 0);
    await neu.s.laden("ep1");
    assert.equal(anzahl(neu.s.lies("ep1")), 1);
  } finally {
    u.ende();
  }
});

test("Sync: ohne Server bleibt alles in der Warteschlange und geht beim Wiederverbinden genau einmal raus", async () => {
  const u = umgebung();
  try {
    const a = u.browser();
    await a.s.laden("ep1");
    u.server.erreichbar = false;
    a.s.melde("ep1", geloest("ep1", "x"));
    a.s.melde("ep1", geloest("ep1", "y"));
    await warte();
    assert.equal(liesEreignisse("ep1").length, 0);
    assert.equal(anzahl(a.s.lies("ep1")), 2, "lokal trotzdem sichtbar");
    u.server.erreichbar = true;
    a.s.alleSenden();
    a.s.alleSenden();
    await warte();
    assert.equal(liesEreignisse("ep1").length, 2);
    assert.equal(anzahl(a.s.lies("ep1")), 2);
  } finally {
    u.ende();
  }
});

test("Sync: zwei Browser lernen weiter, nichts geht verloren und Zaehler addieren sich", async () => {
  const u = umgebung();
  try {
    const a = u.browser();
    const b = u.browser();
    await a.s.laden("ep1");
    await b.s.laden("ep1");
    a.s.melde("ep1", geloest("ep1", "x"));
    a.s.melde("ep1", neuesEreignis("ep1", "training", "d", { richtig: true }));
    b.s.melde("ep1", geloest("ep1", "y"));
    b.s.melde("ep1", neuesEreignis("ep1", "training", "d", { richtig: true }));
    await warte(80);
    await a.s.laden("ep1");
    const s = a.s.lies("ep1");
    assert.deepEqual(Object.keys(s.aufgaben).sort(), ["x", "y"]);
    assert.deepEqual(s.training.d, { r: 2, f: 0 });
  } finally {
    u.ende();
  }
});

test("Sync: Sicherung laden (ersetzen) gilt auch auf dem Server", async () => {
  const u = umgebung();
  try {
    const a = u.browser();
    await a.s.laden("ep1");
    for (const id of ["a", "b", "c"]) a.s.melde("ep1", geloest("ep1", id));
    await warte();
    a.s.melde("ep1", neuesEreignis("ep1", "ersetzen", "", { ...LEER, gelesen: { k: 1 } }));
    await warte();
    const server = falte(liesEreignisse("ep1"));
    assert.equal(anzahl(server), 0);
    assert.deepEqual(server.gelesen, { k: 1 });
  } finally {
    u.ende();
  }
});

test("Sync: Lernstand aus der Zeit vor dem Protokoll wird einmal hochgeladen", async () => {
  const u = umgebung();
  try {
    const alt: Stand = { ...LEER, aufgaben: { x: { s: "richtig", v: 1, t: 5 }, y: { s: "versucht", v: 2, t: 6 } } };
    const b = u.browser({ "lernen:ep1": JSON.stringify(alt), "lernen-sync:ep1": JSON.stringify({ rev: 3, offen: true }) });
    await b.s.laden("ep1");
    await warte();
    await b.s.laden("ep1");
    await warte();
    const ev = liesEreignisse("ep1");
    assert.equal(ev.length, 1);
    assert.equal(ev[0].art, "uebernahme");
    assert.equal(anzahl(falte(ev)), 2);
  } finally {
    u.ende();
  }
});

test("Sync: beim Verlassen der Seite geht die Warteschlange mit keepalive raus", async () => {
  const u = umgebung();
  try {
    const a = u.browser({}, 10_000); // der normale Timer kaeme viel spaeter
    await a.s.laden("ep1");
    a.s.melde("ep1", geloest("ep1", "x"));
    a.s.alleSenden(true);
    await warte();
    assert.equal(liesEreignisse("ep1").length, 1);
  } finally {
    u.ende();
  }
});

test("Sync: erreicht der Browser den Server nicht, gilt der Stand trotzdem als geladen", async () => {
  const u = umgebung();
  try {
    u.server.erreichbar = false;
    const a = u.browser();
    assert.equal(a.s.istGeladen("ep1"), false);
    await a.s.laden("ep1");
    assert.equal(a.s.istGeladen("ep1"), true);
  } finally {
    u.ende();
  }
});
