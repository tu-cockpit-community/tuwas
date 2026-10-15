import { parse as yamlParse } from "yaml";
import { asciiSlug } from "./slug";
import {
  AufgabeSchema,
  KapitelMetaSchema,
  KarteSchema,
  PlotSchema,
  ReflexionSchema,
  WidgetSchema,
  type Abschnitt,
  type Block,
  type Kapitel,
} from "./typen";
import { z } from "zod";

/**
 * Zerlegt ein Kapitel (Markdown mit YAML-Frontmatter) in Abschnitte (an "## "-Ueberschriften)
 * und typisierte Bloecke. Eingezaeunte Bloecke ```aufgabe / ```plot / ```widget / ```karten
 * enthalten YAML; alles andere bleibt Markdown. Fehler werden gesammelt statt sofort geworfen,
 * damit der Validator alle Probleme eines Kapitels auf einmal melden kann.
 */

export interface ParseFehler {
  zeile: number;
  meldung: string;
}

const BLOCK_ARTEN = new Set(["aufgabe", "plot", "widget", "karten", "reflexion"]);

function zodMeldung(e: z.ZodError): string {
  return e.issues.map((i) => `${i.path.join(".") || "(wurzel)"}: ${i.message}`).join("; ");
}

export function parseKapitel(slug: string, quelle: string): { kapitel: Kapitel | null; fehler: ParseFehler[] } {
  const fehler: ParseFehler[] = [];
  const zeilen = quelle.replace(/\r\n/g, "\n").split("\n");

  // Frontmatter
  let start = 0;
  let metaRoh: unknown = {};
  if (zeilen[0]?.trim() === "---") {
    const ende = zeilen.findIndex((z, k) => k > 0 && z.trim() === "---");
    if (ende < 0) fehler.push({ zeile: 1, meldung: "Frontmatter nicht geschlossen" });
    else {
      try {
        metaRoh = yamlParse(zeilen.slice(1, ende).join("\n"));
      } catch (e) {
        fehler.push({ zeile: 1, meldung: `Frontmatter-YAML: ${(e as Error).message}` });
      }
      start = ende + 1;
    }
  } else fehler.push({ zeile: 1, meldung: "Frontmatter fehlt" });
  const metaErg = KapitelMetaSchema.safeParse(metaRoh);
  if (!metaErg.success) fehler.push({ zeile: 1, meldung: `Frontmatter: ${zodMeldung(metaErg.error)}` });

  // "A", "A", "A 1" -> a, a-1, a-1-1: eine Nummer darf nicht mit einem echten Titel wie "A 1" zusammenfallen
  const vergeben = new Set<string>();
  const eindeutig = (titel: string) => {
    const basis = asciiSlug(titel);
    let id = basis;
    for (let n = 1; vergeben.has(id); n++) id = `${basis}-${n}`;
    vergeben.add(id);
    return id;
  };
  const einleitung: Block[] = [];
  const abschnitte: Abschnitt[] = [];
  let aktuell: Block[] = einleitung;
  let md: string[] = [];
  const ids = new Set<string>();

  const flushMd = () => {
    const text = md.join("\n").trim();
    if (text) aktuell.push({ art: "md", md: text });
    md = [];
  };

  let i = start;
  let imCode: string | null = null; // gewoehnlicher Codezaun, z.B. ```python
  while (i < zeilen.length) {
    const z = zeilen[i];
    if (imCode) {
      md.push(z);
      if (z.trim() === imCode) imCode = null;
      i++;
      continue;
    }
    const zaun = /^(`{3,})\s*([a-z]+)?\s*$/.exec(z);
    if (zaun && zaun[2] && BLOCK_ARTEN.has(zaun[2])) {
      const art = zaun[2];
      const zeichen = zaun[1];
      const begin = i + 1;
      let j = begin;
      // nur ein Zaun in Spalte 0 schliesst; eingerueckte Zaeune gehoeren zum YAML-Inhalt (z.B. ```plot in loesung)
      while (j < zeilen.length && zeilen[j].trimEnd() !== zeichen) j++;
      if (j >= zeilen.length) {
        fehler.push({ zeile: i + 1, meldung: `\`\`\`${art}-Block nicht geschlossen` });
        break;
      }
      flushMd();
      const yamlText = zeilen.slice(begin, j).join("\n");
      const block = parseBlock(art, yamlText, i + 1, fehler);
      if (block) {
        if (block.art === "aufgabe") {
          if (ids.has(block.aufgabe.id)) fehler.push({ zeile: i + 1, meldung: `doppelte Aufgaben-id ${block.aufgabe.id}` });
          ids.add(block.aufgabe.id);
        }
        aktuell.push(block);
      }
      i = j + 1;
      continue;
    }
    if (zaun) {
      imCode = zaun[1];
      md.push(z);
      i++;
      continue;
    }
    const h2 = /^##\s+(.+?)\s*$/.exec(z);
    if (h2) {
      flushMd();
      const titel = h2[1];
      const abschnitt: Abschnitt = { id: eindeutig(titel), titel, bloecke: [] };
      abschnitte.push(abschnitt);
      aktuell = abschnitt.bloecke;
      i++;
      continue;
    }
    md.push(z);
    i++;
  }
  flushMd();

  if (!metaErg.success) return { kapitel: null, fehler };
  return { kapitel: { slug, meta: metaErg.data, einleitung, abschnitte }, fehler };
}

function parseBlock(art: string, yamlText: string, zeile: number, fehler: ParseFehler[]): Block | null {
  let roh: unknown;
  try {
    roh = yamlParse(yamlText);
  } catch (e) {
    fehler.push({ zeile, meldung: `${art}: YAML-Fehler: ${(e as Error).message.split("\n")[0]}` });
    return null;
  }
  switch (art) {
    case "aufgabe": {
      const r = AufgabeSchema.safeParse(roh);
      if (!r.success) {
        const id = (roh as { id?: string })?.id ?? "?";
        fehler.push({ zeile, meldung: `aufgabe ${id}: ${zodMeldung(r.error)}` });
        return null;
      }
      return { art: "aufgabe", aufgabe: r.data };
    }
    case "plot": {
      const r = PlotSchema.safeParse(roh);
      if (!r.success) {
        fehler.push({ zeile, meldung: `plot: ${zodMeldung(r.error)}` });
        return null;
      }
      return { art: "plot", plot: r.data };
    }
    case "widget": {
      const r = WidgetSchema.safeParse(roh);
      if (!r.success) {
        fehler.push({ zeile, meldung: `widget: ${zodMeldung(r.error)}` });
        return null;
      }
      return { art: "widget", widget: r.data };
    }
    case "reflexion": {
      const r = ReflexionSchema.safeParse(roh);
      if (!r.success) {
        fehler.push({ zeile, meldung: `reflexion: ${zodMeldung(r.error)}` });
        return null;
      }
      return { art: "reflexion", reflexion: r.data };
    }
    case "karten": {
      const r = z.array(KarteSchema).min(1).safeParse(roh);
      if (!r.success) {
        fehler.push({ zeile, meldung: `karten: ${zodMeldung(r.error)}` });
        return null;
      }
      return { art: "karten", karten: r.data };
    }
  }
  return null;
}
