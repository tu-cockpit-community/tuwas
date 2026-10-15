import { lvaSchluessel } from "./lva";

/**
 * Was die Hostapp TUWAS ueber die Lehrveranstaltungen des Nutzers mitgibt (Format in src/shared/lernenKurse.ts der
 * Hostapp). Ohne server-only, damit es sich testen laesst; gelesen wird die Datei in angemeldet.ts.
 */

export interface HostKurs {
  lva: string;
  titel: string;
  typ: string | null;
  ects: number | null;
  semester: string | null;
}

export interface TuwasDaten {
  /** LVA-Schluessel (lvaSchluessel) aller Lehrveranstaltungen, die der Nutzer hat. */
  lvas: Set<string>;
  /** Die Pruefungen der Studienberechtigungspruefung als eigenes Modul zeigen. */
  sbp: boolean;
  /** Titel, Typ, ECTS je LVA-Schluessel: damit zeigt die Seite auch Lehrveranstaltungen, die sie selbst nicht kennt. */
  kurse: Map<string, HostKurs>;
}

const text = (x: unknown): string | null => (typeof x === "string" && x.trim() ? x.trim() : null);

/** Eine LVA-Nummer hat sechs Ziffern oder Buchstaben (185.A91). */
const istLva = (lva: string): boolean => /^[0-9]{3}[0-9A-Z]{3}$/.test(lvaSchluessel(lva));

/**
 * Liest den Inhalt der Datei nachsichtig: unbrauchbare Eintraege fallen einzeln weg, statt die ganze Datei zu
 * verwerfen. Versteht auch das alte Format ({ lvas, sbp }). `null` nur, wenn gar nichts Verwertbares drin ist.
 */
export function leseVorgabe(roh: unknown): TuwasDaten | null {
  if (!roh || typeof roh !== "object" || Array.isArray(roh)) return null;
  const r = roh as { lvas?: unknown; kurse?: unknown; sbp?: unknown };
  if (!Array.isArray(r.lvas) && !Array.isArray(r.kurse)) return null;
  const kurse = new Map<string, HostKurs>();
  for (const k of Array.isArray(r.kurse) ? r.kurse : []) {
    if (!k || typeof k !== "object") continue;
    const e = k as Record<string, unknown>;
    const lva = text(e.lva);
    if (!lva || !istLva(lva)) continue;
    const schluessel = lvaSchluessel(lva);
    if (kurse.has(schluessel)) continue;
    kurse.set(schluessel, {
      lva,
      titel: text(e.titel) ?? lva,
      typ: text(e.typ),
      ects: typeof e.ects === "number" && Number.isFinite(e.ects) && e.ects >= 0 ? e.ects : null,
      semester: text(e.semester),
    });
  }
  const lvas = new Set(kurse.keys());
  for (const l of Array.isArray(r.lvas) ? r.lvas : []) {
    const lva = text(l);
    if (lva && istLva(lva)) lvas.add(lvaSchluessel(lva));
  }
  return { lvas, sbp: r.sbp === true, kurse };
}
