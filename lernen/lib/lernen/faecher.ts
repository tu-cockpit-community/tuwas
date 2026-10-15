import type { Kurs } from "@/lib/types";
import { lvaSchluessel } from "./lva";
import { MODULE, modulVon } from "./module";

/** Was die Seite "Faecher" zeigt: aus den Kursen der Datenbank, den SBP-Pruefungen und dem, was sout vorgibt. */

export interface Inhaltskurs {
  id: string;
  lva?: string;
  sbp?: string;
}

export interface Pruefung {
  id: string;
}

export interface SoutVorgabe {
  lvas: Set<string>;
  sbp: boolean;
}

export interface FaecherEingabe<P extends Pruefung> {
  kurse: Kurs[];
  pruefungen: P[];
  /** Kurse mit Inhalt unter content/ (Kapitel, Training ...) */
  inhalte: Inhaltskurs[];
  /** `null`: ohne sout, dann gilt: alles mit Lernpfad oder Inhalt, samt SBP */
  sout: SoutVorgabe | null;
  hatLernpfad: (kursId: string) => boolean;
}

export interface Pruefungszeile<P extends Pruefung> {
  pruefung: P;
  /** Lernkurs unter content/, der die Pruefung vorbereitet */
  inhaltId?: string;
  /** Beim Wahlfach: die LVA der StEOP, die dafuer zaehlt */
  wahlfach?: Kurs;
}

export interface Kurszeile {
  kurs: Kurs;
  /** Lernkurs unter content/, der zu dieser LVA gehoert */
  inhaltId?: string;
  hatLernpfad: boolean;
}

export interface FaecherAnsicht<P extends Pruefung> {
  /** `null`: die SBP ist ausgeblendet */
  sbp: Pruefungszeile<P>[] | null;
  gruppen: { titel: string; zeilen: Kurszeile[] }[];
  anzahlKurse: number;
}

export function baueFaecher<P extends Pruefung>(e: FaecherEingabe<P>): FaecherAnsicht<P> {
  const nachLva = new Map(e.inhalte.filter((i) => i.lva).map((i) => [lvaSchluessel(i.lva!), i.id]));
  const nachSbp = new Map(e.inhalte.filter((i) => i.sbp).map((i) => [i.sbp!, i.id]));

  const zeilen: Kurszeile[] = e.kurse
    .filter((k) => (e.sout ? e.sout.lvas.has(lvaSchluessel(k.lva_nummer)) : e.hatLernpfad(k.id) || nachLva.has(lvaSchluessel(k.lva_nummer))))
    .map((kurs) => ({ kurs, inhaltId: nachLva.get(lvaSchluessel(kurs.lva_nummer)), hatLernpfad: e.hatLernpfad(kurs.id) }));

  const gruppen = MODULE.map((titel) => ({ titel, zeilen: zeilen.filter((z) => modulVon(z.kurs.kategorie) === titel) })).filter((m) => m.zeilen.length > 0);

  // Das Wahlfach der SBP ist eine LVA der StEOP, die doppelt zaehlt.
  const wahlfach = e.kurse.find((k) => k.sbp_wahlfach);
  const zeigeSbp = e.sout?.sbp ?? true;

  return {
    sbp: zeigeSbp ? e.pruefungen.map((pruefung) => ({ pruefung, inhaltId: nachSbp.get(pruefung.id), wahlfach: pruefung.id === "sbp-wahlfach" ? wahlfach : undefined })) : null,
    gruppen,
    anzahlKurse: zeilen.length,
  };
}
