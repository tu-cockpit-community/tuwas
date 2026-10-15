import type { Kurs } from "@/lib/types";
import { lvaSchluessel } from "./lva";
import type { HostKurs } from "./tuwasVorgabe";
import { MODULE, modulVon } from "./module";

/** Was die Seite "Faecher" zeigt: aus den Kursen der Datenbank, den SBP-Pruefungen und dem, was TUWAS vorgibt. */

export interface Inhaltskurs {
  id: string;
  lva?: string;
  sbp?: string;
}

export interface Pruefung {
  id: string;
}

export interface TuwasVorgabe {
  lvas: Set<string>;
  sbp: boolean;
  /** Titel, Typ, ECTS je LVA-Schluessel, wie TUWAS sie aus TISS und TUWEL kennt */
  kurse?: Map<string, HostKurs>;
}

export interface FaecherEingabe<P extends Pruefung> {
  kurse: Kurs[];
  pruefungen: P[];
  /** Kurse mit Inhalt unter content/ (Kapitel, Training ...) */
  inhalte: Inhaltskurs[];
  /** `null`: ohne TUWAS, dann gilt: alles mit Lernpfad oder Inhalt, samt SBP */
  tuwas: TuwasVorgabe | null;
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

/** Eine angemeldete LVA, die die Kursliste nicht kennt: Zeile aus dem, was TUWAS mitgibt (Skelett). */
export interface Skelettzeile {
  lva: string;
  titel: string;
  typ: string | null;
  ects: number | null;
  /** Lernkurs unter content/ mit dieser LVA-Nummer, falls es schon einen gibt */
  inhaltId?: string;
}

export interface FaecherAnsicht<P extends Pruefung> {
  /** `null`: die SBP ist ausgeblendet */
  sbp: Pruefungszeile<P>[] | null;
  gruppen: { titel: string; zeilen: Kurszeile[] }[];
  /** Angemeldete Lehrveranstaltungen ausserhalb der Kursliste: jede bekommt eine Zeile, nie faellt eine weg. */
  weitere: Skelettzeile[];
  anzahlKurse: number;
}

export function baueFaecher<P extends Pruefung>(e: FaecherEingabe<P>): FaecherAnsicht<P> {
  const nachLva = new Map(e.inhalte.filter((i) => i.lva).map((i) => [lvaSchluessel(i.lva!), i.id]));
  const nachSbp = new Map(e.inhalte.filter((i) => i.sbp).map((i) => [i.sbp!, i.id]));

  const zeilen: Kurszeile[] = e.kurse
    .filter((k) => (e.tuwas ? e.tuwas.lvas.has(lvaSchluessel(k.lva_nummer)) : e.hatLernpfad(k.id) || nachLva.has(lvaSchluessel(k.lva_nummer))))
    .map((kurs) => ({ kurs, inhaltId: nachLva.get(lvaSchluessel(kurs.lva_nummer)), hatLernpfad: e.hatLernpfad(kurs.id) }));

  // Was TUWAS meldet, aber die Kursliste nicht kennt, faellt nicht weg: eine Zeile aus Titel, Typ und ECTS von TUWAS.
  const bekannt = new Set(e.kurse.map((k) => lvaSchluessel(k.lva_nummer)));
  const weitere: Skelettzeile[] = e.tuwas
    ? [...e.tuwas.lvas]
        .filter((schluessel) => !bekannt.has(schluessel))
        .map((schluessel) => {
          const k = e.tuwas!.kurse?.get(schluessel);
          const lva = k?.lva ?? `${schluessel.slice(0, 3)}.${schluessel.slice(3)}`;
          return { lva, titel: k?.titel ?? lva, typ: k?.typ ?? null, ects: k?.ects ?? null, inhaltId: nachLva.get(schluessel) };
        })
        // mit Titel alphabetisch, reine LVA-Nummern (Titel unbekannt) am Ende
        .sort((a, b) => Number(a.titel === a.lva) - Number(b.titel === b.lva) || a.titel.localeCompare(b.titel, "de"))
    : [];

  const gruppen = MODULE.map((titel) => ({ titel, zeilen: zeilen.filter((z) => modulVon(z.kurs.kategorie) === titel) })).filter((m) => m.zeilen.length > 0);

  // Das Wahlfach der SBP ist eine LVA der StEOP, die doppelt zaehlt.
  const wahlfach = e.kurse.find((k) => k.sbp_wahlfach);
  const zeigeSbp = e.tuwas?.sbp ?? true;

  return {
    sbp: zeigeSbp ? e.pruefungen.map((pruefung) => ({ pruefung, inhaltId: nachSbp.get(pruefung.id), wahlfach: pruefung.id === "sbp-wahlfach" ? wahlfach : undefined })) : null,
    gruppen,
    weitere,
    anzahlKurse: zeilen.length + weitere.length,
  };
}
