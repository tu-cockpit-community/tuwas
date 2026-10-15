import { z } from "zod";
import type { Ereignis } from "./journal";
import { naechsteStufe, tageBis } from "./leitner";
import { LEER, lesbarerStand, vereine, type AufgabenStatus, type Stand } from "./stand";

/**
 * Der Lernstand eines Fachs (/lernen/<fach>) als Folge von Ereignissen. `falte` rechnet daraus den Stand, im Browser
 * wie auf dem Server mit demselben Code. Zeiten (Faelligkeit, "gelesen am") kommen aus dem Ereignis, nie aus der Uhr
 * beim Falten, damit jedes Falten dasselbe ergibt.
 *
 * - Zaehler (Versuche, Training) sind Schritte, keine Summen: von zwei Geraeten zaehlt beides.
 * - Geloest bleibt geloest; Karten und Wiederholungen folgen der letzten Antwort (Leitner).
 * - uebernahme (Stand von frueher) wird verlustfrei eingemischt, ersetzen (Sicherung laden) setzt den Stand.
 */

export const STAND_ARTEN = ["aufgabe", "gelesen", "training", "pruefung", "karte", "uebernahme", "ersetzen"] as const;
export type StandArt = (typeof STAND_ARTEN)[number];

const TAG = 864e5;

const Werte = {
  aufgabe: z.object({ status: z.enum(["richtig", "versucht", "angesehen"]) }),
  gelesen: z.object({ an: z.boolean() }),
  training: z.object({ richtig: z.boolean() }),
  pruefung: z.object({ punkte: z.number(), max: z.number(), dauer: z.number() }),
  karte: z.object({ gewusst: z.boolean() }),
};

/**
 * Ein Ereignis auf einen Arbeitsstand anwenden, der dabei veraendert wird (linear auch bei Protokollen aus Jahren;
 * eine Kopie je Ereignis waere quadratisch). Gibt den Stand zurueck, der weitergilt: bei uebernahme und ersetzen ein
 * neues Objekt. Unbekannte Arten und unpassende Werte aendern nichts.
 */
function anwenden(s: Stand, e: Ereignis): Stand {
  switch (e.art) {
    case "aufgabe": {
      const w = Werte.aufgabe.safeParse(e.wert);
      if (!w.success) return s;
      const status: AufgabenStatus = w.data.status;
      const alt = s.aufgaben[e.ref];
      const stufe = naechsteStufe(s.wiederholen[e.ref]?.stufe ?? 0, status === "richtig");
      const tage = status === "richtig" ? tageBis(stufe) : 1;
      s.wiederholen[e.ref] = { stufe, faellig: e.t + tage * TAG };
      s.aufgaben[e.ref] = { s: alt?.s === "richtig" ? "richtig" : status, v: (alt?.v ?? 0) + (status === "angesehen" ? 0 : 1), t: e.t };
      return s;
    }
    case "gelesen": {
      const w = Werte.gelesen.safeParse(e.wert);
      if (!w.success) return s;
      if (w.data.an) s.gelesen[e.ref] = e.t;
      else delete s.gelesen[e.ref];
      return s;
    }
    case "training": {
      const w = Werte.training.safeParse(e.wert);
      if (!w.success) return s;
      const a = s.training[e.ref] ?? { r: 0, f: 0 };
      s.training[e.ref] = w.data.richtig ? { ...a, r: a.r + 1 } : { ...a, f: a.f + 1 };
      return s;
    }
    case "pruefung": {
      const w = Werte.pruefung.safeParse(e.wert);
      if (!w.success) return s;
      (s.pruefungen[e.ref] ??= []).push({ t: e.t, ...w.data });
      return s;
    }
    case "karte": {
      const w = Werte.karte.safeParse(e.wert);
      if (!w.success) return s;
      const stufe = naechsteStufe(s.karten[e.ref]?.stufe ?? 0, w.data.gewusst);
      s.karten[e.ref] = { stufe, faellig: e.t + tageBis(stufe) * TAG };
      return s;
    }
    case "uebernahme": {
      const alt = lesbarerStand(e.wert);
      return alt ? structuredClone(vereine(s, alt)) : s;
    }
    case "ersetzen": {
      const neu = lesbarerStand(e.wert);
      return neu ? structuredClone(neu) : s;
    }
    default:
      return s;
  }
}

/** Ein Ereignis auf den Stand anwenden (ohne ihn zu veraendern). */
export function wendeAn(s: Stand, e: Ereignis): Stand {
  return anwenden(structuredClone(s), e);
}

/** Nach Zeit und id ordnen, jede id einmal (auch wenn zwei Protokolle zusammengelegt wurden). */
export function ordne(ereignisse: readonly Ereignis[]): Ereignis[] {
  const ids = new Set<string>();
  return [...ereignisse]
    .sort((a, b) => a.t - b.t || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
    .filter((e) => (ids.has(e.id) ? false : (ids.add(e.id), true)));
}

/** Der Stand aus allen Ereignissen eines Fachs (`basis` bleibt unveraendert). */
export function falte(ereignisse: readonly Ereignis[], basis: Stand = LEER): Stand {
  return ordne(ereignisse).reduce(anwenden, structuredClone(basis));
}

/** Ein neues Ereignis (im Browser und auf dem Server). */
export function neuesEreignis(kurs: string, art: StandArt, ref: string, wert: unknown, t = Date.now()): Ereignis {
  const id = globalThis.crypto?.randomUUID?.() ?? `${t.toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  return { v: 1, id, t, kurs, art, ref, wert };
}
