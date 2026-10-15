import { z } from "zod";

/** Der Lernstand eines Kurses und was Browser und Server damit gemeinsam tun (ohne Browser- oder Node-Bezug). */

export type AufgabenStatus = "richtig" | "versucht" | "angesehen";

export interface Stand {
  aufgaben: Record<string, { s: AufgabenStatus; v: number; t: number }>;
  gelesen: Record<string, number>;
  pruefungen: Record<string, { t: number; punkte: number; max: number; dauer: number }[]>;
  training: Record<string, { r: number; f: number }>;
  karten: Record<string, { stufe: number; faellig: number }>;
  /** verteilte Wiederholung fuer Aufgaben (gleiche Leitner-Stufen wie Karten) */
  wiederholen: Record<string, { stufe: number; faellig: number }>;
}

export const LEER: Stand = { aufgaben: {}, gelesen: {}, pruefungen: {}, training: {}, karten: {}, wiederholen: {} };

const zahl = z.number().finite();
export const StandSchema: z.ZodType<Stand> = z.object({
  aufgaben: z.record(z.string(), z.object({ s: z.enum(["richtig", "versucht", "angesehen"]), v: zahl, t: zahl })),
  gelesen: z.record(z.string(), zahl),
  pruefungen: z.record(z.string(), z.array(z.object({ t: zahl, punkte: zahl, max: zahl, dauer: zahl }))),
  training: z.record(z.string(), z.object({ r: zahl, f: zahl })),
  karten: z.record(z.string(), z.object({ stufe: zahl, faellig: zahl })),
  wiederholen: z.record(z.string(), z.object({ stufe: zahl, faellig: zahl })),
});

/** Ergaenzt fehlende Bereiche (aeltere Staende) und prueft die Form. `null`, wenn etwas nicht stimmt. */
export function lesbarerStand(roh: unknown): Stand | null {
  const r = StandSchema.safeParse({ ...LEER, ...(roh && typeof roh === "object" ? roh : {}) });
  return r.success ? r.data : null;
}

/** Wie viel Lernstand steckt drin (Eintraege ueber alle Bereiche). */
export function umfang(s: Stand): number {
  return (
    Object.keys(s.aufgaben).length +
    Object.keys(s.gelesen).length +
    Object.values(s.pruefungen).reduce((n, v) => n + v.length, 0) +
    Object.keys(s.training).length +
    Object.keys(s.karten).length +
    Object.keys(s.wiederholen).length
  );
}

function vereineMap<T>(a: Record<string, T>, b: Record<string, T>, besser: (x: T, y: T) => T): Record<string, T> {
  const aus: Record<string, T> = { ...a };
  for (const [k, v] of Object.entries(b)) aus[k] = k in aus ? besser(aus[k], v) : v;
  return aus;
}

/**
 * Fuehrt zwei Staende zusammen, ohne etwas zu verlieren: Geloest bleibt geloest, Zaehler wachsen nur, bei Karten
 * und Wiederholungen gilt die hoehere Stufe. Gebraucht, wenn derselbe Kurs an zwei Stellen weitergelernt wurde.
 */
export function vereine(a: Stand, b: Stand): Stand {
  const stufe = (x: { stufe: number; faellig: number }, y: { stufe: number; faellig: number }) => (y.stufe > x.stufe || (y.stufe === x.stufe && y.faellig > x.faellig) ? y : x);
  return {
    aufgaben: vereineMap(a.aufgaben, b.aufgaben, (x, y) => ({
      s: x.s === "richtig" || y.s === "richtig" ? "richtig" : (x.t >= y.t ? x : y).s,
      v: Math.max(x.v, y.v),
      t: Math.max(x.t, y.t),
    })),
    gelesen: vereineMap(a.gelesen, b.gelesen, (x, y) => Math.max(x, y)),
    pruefungen: vereineMap(a.pruefungen, b.pruefungen, (x, y) => {
      const bekannt = new Set(x.map((v) => v.t));
      return [...x, ...y.filter((v) => !bekannt.has(v.t))].sort((p, q) => p.t - q.t);
    }),
    training: vereineMap(a.training, b.training, (x, y) => ({ r: Math.max(x.r, y.r), f: Math.max(x.f, y.f) })),
    karten: vereineMap(a.karten, b.karten, stufe),
    wiederholen: vereineMap(a.wiederholen, b.wiederholen, stufe),
  };
}
