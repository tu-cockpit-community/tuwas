import "server-only";
import { ladeKapitelListe } from "./kurs";

/** Glossar aus allen :::definition[Titel]-Kaesten eines Kurses, mit Fundstelle. */
export interface GlossarEintrag {
  begriff: string;
  text: string;
  kapitel: string;
  kapitelTitel: string;
  nummer: number;
  lektion: string;
  lektionTitel: string;
  anker: string;
}

function anker(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function ladeGlossar(fach: string): GlossarEintrag[] {
  const liste: GlossarEintrag[] = [];
  for (const k of ladeKapitelListe(fach)) {
    const quellen = [
      { id: "", titel: "Einstieg", bloecke: k.einleitung },
      ...k.abschnitte.map((a) => ({ id: a.id, titel: a.titel, bloecke: a.bloecke })),
    ];
    for (const q of quellen)
      for (const b of q.bloecke) {
        if (b.art !== "md") continue;
        for (const m of b.md.matchAll(/^:::definition\[([^\]]+)\]\s*\n([\s\S]*?)\n:::\s*$/gm))
          liste.push({
            begriff: m[1].trim(),
            text: m[2].trim(),
            kapitel: k.slug,
            kapitelTitel: k.meta.titel,
            nummer: k.meta.nummer,
            lektion: q.id,
            lektionTitel: q.titel,
            anker: anker(m[1]),
          });
      }
  }
  return liste.sort((a, b) => a.begriff.localeCompare(b.begriff, "de"));
}
