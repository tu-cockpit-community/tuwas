import { istGeloest, type Stand } from "./fortschritt";

/**
 * Mastery-Modell: Ein Abschnitt gilt als gemeistert, wenn mindestens MASTERY_QUOTE seiner Uebungen
 * selbststaendig richtig geloest wurden (nicht nur angesehen oder gefuehrt) oder wenn die Person den ganzen
 * Abschnitt als durchgearbeitet markiert hat. Die Markierung gilt vor den Uebungen: Der Abschnitt ist dann fertig,
 * die Uebungen selbst bleiben so, wie sie sind (geloest oder offen). Eine Aufgabe, die die Person von Hand als geloest
 * markiert hat, zaehlt wie eine geloeste. Daraus folgen Kapitelstand und "naechster Schritt".
 * Bewusst typunabhaengig vom Server-Index (nur die benoetigten Felder), damit es im Client laeuft.
 */

export const MASTERY_QUOTE = 0.8;

export interface MAufgabe {
  id: string;
  art: "uebung" | "check";
}
export interface MAbschnitt {
  id: string;
  titel: string;
  nummer: string;
  aufgaben: MAufgabe[];
}
export interface MKapitel {
  slug: string;
  nummer: number;
  titel: string;
  stunden: number;
  pruefungsgewicht: number;
  abschnitte: MAbschnitt[];
}

export interface AbschnittStand {
  gesamt: number;
  geloest: number;
  versucht: number;
  quote: number;
  gemeistert: boolean;
  begonnen: boolean;
  /** Die Person hat den Abschnitt als durchgearbeitet markiert (das macht ihn zum gemeisterten, egal wie die Uebungen stehen). */
  gelesen: boolean;
}

export function abschnittStand(a: MAbschnitt, s: Stand, gelesenSchluessel?: string): AbschnittStand {
  const uebungen = a.aufgaben.filter((x) => x.art === "uebung");
  const geloest = uebungen.filter((x) => istGeloest(s, x.id)).length;
  const versucht = uebungen.filter((x) => s.aufgaben[x.id] && !istGeloest(s, x.id)).length;
  const gesamt = uebungen.length;
  const quote = gesamt ? geloest / gesamt : 0;
  const gelesen = gelesenSchluessel ? Boolean(s.gelesen[gelesenSchluessel]) : false;
  return {
    gesamt,
    geloest,
    versucht,
    quote,
    // Die Markierung "durchgearbeitet" gilt vor den Uebungen; sonst zaehlt die Quote selbst geloester Uebungen
    gemeistert: gelesen || (gesamt > 0 && quote >= MASTERY_QUOTE),
    begonnen: geloest + versucht > 0 || gelesen,
    gelesen,
  };
}

export function kapitelStand(k: MKapitel, s: Stand): { gemeistert: number; abschnitte: number; anteil: number } {
  const st = k.abschnitte.map((a) => abschnittStand(a, s, `${k.slug}#${a.id}`));
  const gemeistert = st.filter((x) => x.gemeistert).length;
  return { gemeistert, abschnitte: st.length, anteil: st.length ? gemeistert / st.length : 0 };
}

/** Erster nicht gemeisterter Abschnitt in Kursreihenfolge (bevorzugt einen bereits begonnenen). */
export function naechsterSchritt(kapitel: MKapitel[], s: Stand): { kapitel: MKapitel; abschnitt: MAbschnitt } | null {
  let erster: { kapitel: MKapitel; abschnitt: MAbschnitt } | null = null;
  for (const k of kapitel)
    for (const a of k.abschnitte) {
      const st = abschnittStand(a, s, `${k.slug}#${a.id}`);
      if (st.gemeistert) continue;
      if (st.begonnen) return { kapitel: k, abschnitt: a };
      erster ??= { kapitel: k, abschnitt: a };
    }
  return erster;
}
