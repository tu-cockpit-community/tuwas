import type { Teil } from "@/lib/lernen/typen";
import { musterText } from "@/lib/lernen/rechnen";
import { istNeuerTyp, musterMdNeu } from "@/lib/lernen/bewertung";

/** Reine Text-Helfer fuer Aufgaben, gemeinsam fuer Server (Kapitel) und Client (Training). */

/** Teilt einen Loesungsweg an Zeilen, die nur "---" enthalten, in Schritte. */
export function schritteAus(loesung: string): string[] {
  return loesung
    .split(/\n\s*---\s*(?:\n|$)/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Musterantwort eines Teils als Markdown. */
export function musterMd(teil: Teil): string {
  if (teil.typ === "text") return teil.muster;
  if (istNeuerTyp(teil)) return musterMdNeu(teil);
  if (teil.typ === "auswahl") return teil.richtig.map((i) => `(${String.fromCharCode(97 + i)}) ${teil.optionen[i]}`).join("  \n");
  if (teil.typ === "term") return `$${teil.anzeige ?? teil.loesung}$`;
  if (teil.anzeige) return `$${teil.anzeige}$`;
  return musterText(teil);
}

/** Muster als Block statt inline (Text, Code, Tabellen, Listen). */
export function musterAlsBlock(teil: Teil): boolean {
  return teil.typ === "text" || istNeuerTyp(teil);
}

/** Markdown-Texte, die als `optionen` vorgerendert werden: Auswahloptionen, R/F-Aussagen, Reihenfolge-Elemente. */
export function optionenTexte(teil: Teil): string[] | undefined {
  if (teil.typ === "auswahl") return teil.optionen;
  if (teil.typ === "richtigfalsch") return teil.aussagen.map((a) => a.text);
  if (teil.typ === "reihenfolge") return teil.elemente;
  return undefined;
}
