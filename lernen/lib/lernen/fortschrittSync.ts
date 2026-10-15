import type { Ereignis } from "./journal";
import { falte, neuesEreignis } from "./standEreignisse";
import { LEER, lesbarerStand, umfang, type Stand } from "./stand";

/**
 * Der Lernstand eines Browsers und sein Abgleich mit dem Server (ohne React und ohne globale Browser-Objekte, damit
 * er sich testen laesst). Was bleibt, ist das Protokoll auf dem Server (lib/lernen/journal.ts); der Browser haelt den
 * zuletzt gefalteten Serverstand und eine Warteschlange noch nicht bestaetigter Ereignisse.
 *
 * - Jede Aenderung ist ein Ereignis: sofort lokal sichtbar (Serverstand + Warteschlange), kurz danach gesendet.
 * - Der Server haengt nur an und kennt jede id einmal: doppelt gesendet schadet nicht, nichts wird ueberschrieben.
 * - Ohne Server bleibt die Warteschlange im Browser-Speicher und geht beim naechsten Mal raus.
 * - Ein Stand aus der Zeit vor dem Protokoll (`lernen:<kurs>` im alten Format) wird einmal als Uebernahme gesendet.
 */

export interface Umgebung {
  speicher: Pick<Storage, "getItem" | "setItem">;
  holen: (url: string, init?: RequestInit) => Promise<Response>;
  /** Wartezeit in ms, bis Ereignisse gesendet werden (sammelt schnelle Folgen) */
  verzoegerung?: number;
}

interface Abgleich {
  laeuft: boolean;
  holt: boolean;
  timer: ReturnType<typeof setTimeout> | null;
  /** Der erste Abgleich ist durch (mit Erfolg oder nicht), ab hier ist der angezeigte Stand der beste bekannte. */
  geladen: boolean;
}

export interface StandSpeicher {
  lies(kurs: string): Stand;
  /** Ein Ereignis aufnehmen: sofort sichtbar, kurz danach an den Server. */
  melde(kurs: string, e: Ereignis): void;
  /** Hoert auf jede Aenderung (auch durch den Abgleich); gibt die Abmeldung zurueck. */
  abonniere(h: () => void): () => void;
  /** Holt den Serverstand und sendet Offenes; nach einem Fehlschlag erneut aufrufbar. */
  laden(kurs: string): Promise<void>;
  istGeladen(kurs: string): boolean;
  /** Sendet alle Warteschlangen sofort (Seite wird verlassen, Verbindung ist wieder da) bzw. holt nach, was fehlte. */
  alleSenden(ausPageHide?: boolean): void;
  /** Der Browser-Speicher hat sich geaendert (anderer Tab): Zwischenspeicher verwerfen. */
  speicherGeaendert(): void;
}

const url = (kurs: string) => `/api/lernen/fortschritt/${kurs}`;
/** zuletzt bekannter Serverstand (vor dem Protokoll: der ganze lokale Stand) */
const standSchluessel = (kurs: string) => `lernen:${kurs}`;
const offenSchluessel = (kurs: string) => `lernen-offen:${kurs}`;
/** "2": Format mit Warteschlange. Fehlt er, ist lernen:<kurs> ein alter, vielleicht ungesendeter Stand. */
const formatSchluessel = (kurs: string) => `lernen-format:${kurs}`;
const KEEPALIVE_MAX = 60 * 1024;

export function erzeugeStandSpeicher(env: Umgebung): StandSpeicher {
  const cache = new Map<string, Stand>();
  const hoerer = new Set<() => void>();
  const abgleich = new Map<string, Abgleich>();
  const verzoegerung = env.verzoegerung ?? 400;

  const zustand = (kurs: string): Abgleich => {
    let a = abgleich.get(kurs);
    if (!a) abgleich.set(kurs, (a = { laeuft: false, holt: false, timer: null, geladen: false }));
    return a;
  };
  const melden = () => hoerer.forEach((h) => h());

  function lesen<T>(schluessel: string, pruefe: (x: unknown) => T | null, ersatz: T): T {
    try {
      const roh = env.speicher.getItem(schluessel);
      return roh ? (pruefe(JSON.parse(roh)) ?? ersatz) : ersatz;
    } catch {
      return ersatz;
    }
  }
  function schreiben(schluessel: string, wert: unknown): void {
    try {
      env.speicher.setItem(schluessel, JSON.stringify(wert));
    } catch {
      /* privater Modus o. ae.: die Warteschlange lebt dann nur in diesem Tab */
    }
  }

  // Die Warteschlange wird immer frisch aus dem Speicher gelesen, damit zwei Tabs sich nicht gegenseitig ueberschreiben.
  const nurEreignisse = (x: unknown) => (Array.isArray(x) ? (x as Ereignis[]).filter((e) => e && typeof e.id === "string" && typeof e.t === "number") : null);
  const warteschlange = (kurs: string): Ereignis[] => lesen(offenSchluessel(kurs), nurEreignisse, []);
  const serverStand = (kurs: string): Stand => lesen(standSchluessel(kurs), lesbarerStand, LEER);

  function lies(kurs: string): Stand {
    const c = cache.get(kurs);
    if (c) return c;
    const s = falte(warteschlange(kurs), serverStand(kurs));
    cache.set(kurs, s);
    return s;
  }

  function neuBerechnen(kurs: string): void {
    cache.delete(kurs);
    melden();
  }

  /** Ein Stand im alten Format (vor dem Protokoll) wird einmal als Uebernahme in die Warteschlange gelegt. */
  function altesFormatUebernehmen(kurs: string): void {
    if (env.speicher.getItem(formatSchluessel(kurs)) === "2") return;
    const alt = serverStand(kurs);
    if (umfang(alt) > 0) schreiben(offenSchluessel(kurs), [...warteschlange(kurs), neuesEreignis(kurs, "uebernahme", "", alt, 0)]);
    try {
      env.speicher.setItem(formatSchluessel(kurs), "2");
    } catch {
      /* dann beim naechsten Laden erneut; die Uebernahme ist idempotent */
    }
  }

  function planeSenden(kurs: string, wartezeit = verzoegerung): void {
    const z = zustand(kurs);
    if (z.timer) clearTimeout(z.timer);
    z.timer = setTimeout(() => void sende(kurs), wartezeit);
  }

  function uebernimmServer(kurs: string, roh: unknown, gesendet: Set<string>): void {
    const stand = lesbarerStand(roh);
    if (!stand) return;
    schreiben(standSchluessel(kurs), stand);
    if (gesendet.size) schreiben(offenSchluessel(kurs), warteschlange(kurs).filter((e) => !gesendet.has(e.id)));
    neuBerechnen(kurs);
  }

  async function laden(kurs: string): Promise<void> {
    const z = zustand(kurs);
    if (z.holt) return;
    z.holt = true;
    try {
      altesFormatUebernehmen(kurs);
      const r = await env.holen(url(kurs), { cache: "no-store" });
      if (r.ok) uebernimmServer(kurs, ((await r.json()) as { stand?: unknown }).stand, new Set());
    } catch {
      /* Server nicht erreichbar: lokal weiterarbeiten, spaeter erneut */
    } finally {
      z.holt = false;
      if (!z.geladen) {
        z.geladen = true;
        neuBerechnen(kurs);
      }
    }
    if (warteschlange(kurs).length) await sende(kurs);
  }

  async function sende(kurs: string, ausPageHide = false): Promise<void> {
    const z = zustand(kurs);
    if (z.timer) clearTimeout(z.timer);
    z.timer = null;
    if (z.laeuft) return;
    const offen = warteschlange(kurs);
    if (offen.length === 0) return;
    z.laeuft = true;
    let weiter = false;
    try {
      const body = JSON.stringify({ ereignisse: offen });
      const r = await env.holen(url(kurs), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        // Browser lehnen keepalive-Anfragen ueber 64 KB ab; groessere gehen ohne (die Seite lebt meist noch kurz genug)
        keepalive: ausPageHide && body.length < KEEPALIVE_MAX,
      });
      if (r.ok) {
        uebernimmServer(kurs, ((await r.json()) as { stand?: unknown }).stand, new Set(offen.map((e) => e.id)));
        weiter = warteschlange(kurs).length > 0; // waehrend des Sendens dazugekommen
      }
    } catch {
      /* Server nicht erreichbar: bleibt in der Warteschlange */
    } finally {
      z.laeuft = false;
    }
    if (weiter) planeSenden(kurs, 0);
  }

  return {
    lies,
    melde(kurs, e) {
      schreiben(offenSchluessel(kurs), [...warteschlange(kurs), e]);
      neuBerechnen(kurs);
      planeSenden(kurs);
    },
    abonniere(h) {
      hoerer.add(h);
      return () => void hoerer.delete(h);
    },
    laden,
    istGeladen: (kurs) => zustand(kurs).geladen,
    alleSenden(ausPageHide = false) {
      for (const [kurs, z] of abgleich) void (z.geladen ? sende(kurs, ausPageHide) : laden(kurs));
    },
    speicherGeaendert() {
      cache.clear();
      melden();
    },
  };
}
