import type { Teil, TeilVon } from "./typen";
import type { Urteil } from "./rechnen";
import { anzahlLuecken, fuelleLuecken } from "./java/quelle";

/**
 * Bewertung der Programmier-Antworttypen (ausgabe, richtigfalsch, lueckentext, zeilen, trace,
 * reihenfolge, code). Laeuft identisch in Browser und Node; `code` selbst prueft der Java-Runner
 * (lib/lernen/java/runner.ts), hier wird nur erkannt, ob die Vorlage unveraendert ist.
 */

export const NEUE_TYPEN = ["ausgabe", "richtigfalsch", "lueckentext", "zeilen", "trace", "reihenfolge", "code"] as const;
export type NeuerTeil = TeilVon<(typeof NEUE_TYPEN)[number]>;

export function istNeuerTyp(t: Teil): t is NeuerTeil {
  return (NEUE_TYPEN as readonly string[]).includes(t.typ);
}

type Eingabe = string | (string | number)[];

// ------------------------------------------------------------------ Normalisierung

export interface AusgabeOptionen {
  trim?: boolean;
  whitespace?: "exakt" | "tolerant";
}

/**
 * Konsolenausgabe vergleichbar machen. Immer: Zeilenenden vereinheitlicht, abschliessende Zeilenumbrueche
 * egal (println am Ende tippt niemand mit). trim: Leerraum am Zeilenende und Leerzeilen am Rand egal.
 * tolerant: jede Folge von Leerraum zaehlt wie ein Leerzeichen.
 */
export function normalisiereAusgabe(s: string, opt: AusgabeOptionen = {}): string {
  const x = s.replace(/\r\n?/g, "\n");
  if (opt.whitespace === "tolerant") return x.replace(/\s+/g, " ").trim();
  if (opt.trim)
    return x
      .split("\n")
      .map((z) => z.replace(/[ \t]+$/, ""))
      .join("\n")
      .replace(/^\n+|\n+$/g, "");
  return x.replace(/\n+$/, "");
}

/** Vergleich mit hilfreicher Rueckmeldung, ohne die Loesung zu verraten. */
export function vergleicheAusgabe(ist: string, soll: string, opt: AusgabeOptionen = {}): Urteil {
  const a = normalisiereAusgabe(ist, opt);
  const b = normalisiereAusgabe(soll, opt);
  if (a === b) return { ok: true };
  if (normalisiereAusgabe(ist, { whitespace: "tolerant" }) === normalisiereAusgabe(soll, { whitespace: "tolerant" }))
    return { ok: false, meldung: "Fast: Die Zeichen stimmen, aber Leerzeichen oder Zeilenumbrüche nicht." };
  const za = a.split("\n");
  const zb = b.split("\n");
  const k = za.findIndex((z, i) => z !== zb[i]);
  if (k >= 0 && k < zb.length) return { ok: false, meldung: `Die erste Abweichung steckt in Zeile ${k + 1}.` };
  if (za.length < zb.length) return { ok: false, meldung: "Die ersten Zeilen stimmen, aber es fehlt noch Ausgabe." };
  return { ok: false, meldung: "Die ersten Zeilen stimmen, aber du hast zu viele Zeilen." };
}

/** Code-Schnipsel vergleichen: Leerraum egal, ausser er trennt zwei Woerter ("int x" ≠ "intx"). */
export function codeNorm(s: string | number): string {
  return String(s)
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*([^\w\s$])\s*/g, "$1");
}

function alsZahl(s: string): number | null {
  const t = s.trim().replace(",", ".");
  return /^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?[dDfFlL]?$/.test(t) ? Number(t.replace(/[dDfFlL]$/, "")) : null;
}

/** Zelle einer Trace-Tabelle: Zahlen numerisch ("2,50" = 2.5), sonst wie codeNorm. */
export function zelleGleich(ist: string | number, soll: string | number): boolean {
  const a = codeNorm(ist);
  const b = codeNorm(soll);
  if (a === b) return true;
  const x = alsZahl(a);
  const y = alsZahl(b);
  return x !== null && y !== null && Math.abs(x - y) <= 1e-9 * Math.max(1, Math.abs(y));
}

function richtigFalschWert(v: string | number): "r" | "f" | "" {
  const s = String(v).trim().toLowerCase();
  if (/^(r|richtig|w|wahr|true|ja)$/.test(s)) return "r";
  if (/^(f|falsch|false|nein)$/.test(s)) return "f";
  return "";
}

// ------------------------------------------------------------------ Reihenfolge

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Startreihenfolge (Indizes): `start` aus der Aufgabe oder deterministisch gemischt, nie schon richtig. */
export function startReihenfolge(teil: TeilVon<"reihenfolge">): number[] {
  const n = teil.elemente.length;
  const gueltig = teil.start && teil.start.length === n && new Set(teil.start).size === n && teil.start.every((i) => i < n);
  if (gueltig) return [...teil.start!];
  const idx = teil.elemente.map((_, i) => i);
  let s = hash(teil.elemente.join("\u0000")) || 1;
  for (let i = n - 1; i > 0; i--) {
    s = (Math.imul(s, 1103515245) + 12345) >>> 0;
    const j = s % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  const schonRichtig = () => idx.every((k, i) => teil.elemente[k] === teil.elemente[i]);
  for (let r = 0; r < n && schonRichtig(); r++) idx.push(idx.shift()!);
  return idx;
}

// ------------------------------------------------------------------ Bewertung

function leer(meldung = "Bitte eine Antwort eingeben."): Urteil {
  return { ok: false, leer: true, meldung };
}

function liste(e: Eingabe): string[] {
  return Array.isArray(e) ? e.map((x) => String(x ?? "")) : [String(e)];
}

/** Antwort fuer einen neuen Typ pruefen (ohne Fehlerbilder; die ergaenzt pruefeTeil). */
export function pruefeNeu(teil: NeuerTeil, eingabe: Eingabe): Urteil {
  switch (teil.typ) {
    case "ausgabe": {
      const text = Array.isArray(eingabe) ? eingabe.join("\n") : eingabe;
      if (!text.trim()) return leer("Bitte die erwartete Ausgabe eintragen.");
      return vergleicheAusgabe(text, teil.loesung, teil);
    }
    case "richtigfalsch": {
      const w = liste(eingabe).map(richtigFalschWert);
      const n = teil.aussagen.length;
      const richtig = teil.aussagen.filter((a, i) => w[i] === (a.richtig ? "r" : "f")).length;
      const beantwortet = w.filter(Boolean).length;
      if (beantwortet === 0) return leer("Bitte jede Aussage mit „richtig“ oder „falsch“ beurteilen.");
      if (beantwortet < n) return { ...leer(`Noch ${n - beantwortet} Aussage${n - beantwortet === 1 ? "" : "n"} offen.`), anteil: richtig / n };
      if (richtig === n) return { ok: true };
      return { ok: false, anteil: richtig / n, meldung: `${richtig} von ${n} Aussagen richtig beurteilt.` };
    }
    case "lueckentext": {
      const w = liste(eingabe);
      if (w.every((x) => !x.trim())) return leer("Bitte die Lücken füllen.");
      const ok = teil.luecken.map((varianten, i) => varianten.some((v) => codeNorm(v) === codeNorm(w[i] ?? "")));
      const n = ok.filter(Boolean).length;
      if (n === ok.length) return { ok: true };
      const offen = w.filter((x, i) => i < teil.luecken.length && !x.trim()).length;
      return {
        ok: false,
        anteil: n / ok.length,
        meldung: ok.length === 1 ? undefined : `${n} von ${ok.length} Lücken richtig${offen ? `, ${offen} noch leer` : ""}.`,
      };
    }
    case "zeilen": {
      const gewaehlt = new Set(liste(eingabe).map(Number).filter((z) => Number.isInteger(z) && z > 0));
      if (gewaehlt.size === 0) return leer("Bitte mindestens eine Zeile markieren.");
      const soll = new Set(teil.loesung);
      const treffer = [...gewaehlt].filter((z) => soll.has(z)).length;
      if (treffer === soll.size && gewaehlt.size === soll.size) return { ok: true };
      // Teilwertung: Treffer minus Fehlmarkierungen, nicht unter 0
      const anteil = Math.max(0, (treffer - (gewaehlt.size - treffer)) / soll.size);
      const meldung =
        treffer === soll.size
          ? "Alle gesuchten Zeilen sind dabei, aber du hast zu viele markiert."
          : gewaehlt.size === treffer
            ? `Richtig markiert, aber es fehlen noch Zeilen (gesucht: ${soll.size}).`
            : `Nicht alle markierten Zeilen sind fehlerhaft (gesucht: ${soll.size} Zeile${soll.size === 1 ? "" : "n"}).`;
      return { ok: false, anteil, meldung };
    }
    case "trace": {
      const w = liste(eingabe);
      const breite = teil.spalten.length;
      const ab = (teil.vorgabe ?? 0) * breite;
      const zellen = teil.loesung.flat();
      const offen = zellen.map((_, i) => i).filter((i) => i >= ab);
      if (offen.every((i) => !(w[i] ?? "").trim())) return leer("Bitte die Tabelle ausfüllen.");
      const richtig = offen.filter((i) => zelleGleich(w[i] ?? "", zellen[i])).length;
      if (richtig === offen.length) return { ok: true };
      // erste falsche Zeile nennen: hilft beim Nachverfolgen, ohne Werte zu verraten
      const erste = offen.find((i) => !zelleGleich(w[i] ?? "", zellen[i]))!;
      return {
        ok: false,
        anteil: richtig / offen.length,
        meldung: `${richtig} von ${offen.length} Zellen richtig. Die erste Abweichung ist in Zeile ${Math.floor(erste / breite) + 1}.`,
      };
    }
    case "reihenfolge": {
      const w = liste(eingabe).map(Number);
      const start = startReihenfolge(teil);
      if (w.length !== teil.elemente.length) return leer("Bitte die Elemente ordnen.");
      if (w.every((x, i) => x === start[i])) return leer("Bring die Elemente zuerst in die richtige Reihenfolge.");
      const anRichtigerStelle = w.filter((k, i) => teil.elemente[k] === teil.elemente[i]).length;
      if (anRichtigerStelle === w.length) return { ok: true };
      return { ok: false, meldung: `${anRichtigerStelle} von ${w.length} Elementen stehen an der richtigen Stelle.` };
    }
    case "code": {
      const text = Array.isArray(eingabe) ? eingabe.join("\n") : eingabe;
      if (!text.trim() || text.trim() === teil.vorlage.trim()) return leer("Du hast die Vorlage noch nicht verändert.");
      return leer("Code-Aufgaben prüft der Java-Runner.");
    }
  }
}

/** Entspricht die Eingabe dem Fehlerbild `wert`? (Bei `code` entscheidet das Runner-Ergebnis, siehe codePruefen.ts.) */
export function passtFehlerbild(teil: NeuerTeil, eingabe: Eingabe, wert: string | number | (string | number)[]): boolean {
  const werte = Array.isArray(wert) ? wert.map(String) : [String(wert)];
  const w = liste(eingabe);
  switch (teil.typ) {
    case "ausgabe":
      return vergleicheAusgabe(w.join("\n"), werte.join("\n"), teil).ok;
    case "richtigfalsch":
      return werte.length === teil.aussagen.length && werte.every((x, i) => richtigFalschWert(x) === richtigFalschWert(w[i] ?? ""));
    case "lueckentext":
      return werte.length === teil.luecken.length && werte.every((x, i) => codeNorm(x) === codeNorm(w[i] ?? ""));
    case "zeilen": {
      const a = new Set(w.map(Number));
      const b = new Set(werte.map(Number));
      return a.size === b.size && [...a].every((z) => b.has(z));
    }
    case "trace": {
      const ab = (teil.vorgabe ?? 0) * teil.spalten.length;
      return werte.length === teil.loesung.flat().length && werte.every((x, i) => i < ab || zelleGleich(w[i] ?? "", x));
    }
    case "reihenfolge": {
      const ist = w.map((k) => teil.elemente[Number(k)]);
      const fb = werte.map((k) => teil.elemente[Number(k)]);
      return ist.length === fb.length && ist.every((x, i) => x === fb[i]);
    }
    case "code":
      return false;
  }
}

// ------------------------------------------------------------------ Musteranzeige

function zelleMd(v: string | number): string {
  const s = String(v);
  return s.trim() === "" ? " " : s.replace(/\|/g, "\\|");
}

function codeZaun(code: string, sprache = ""): string {
  const zaun = code.includes("```") ? "~~~~" : "```";
  return `${zaun}${sprache}\n${code.replace(/\n+$/, "")}\n${zaun}`;
}

/** Musterantwort als Markdown (Block). */
export function musterMdNeu(teil: NeuerTeil): string {
  switch (teil.typ) {
    case "ausgabe":
      return codeZaun(teil.loesung, "text");
    case "richtigfalsch":
      return teil.aussagen
        .map((a, i) => `${i + 1}. **${a.richtig ? "richtig" : "falsch"}:** ${a.text}${a.erklaerung ? `  \n   ${a.erklaerung}` : ""}`)
        .join("\n");
    case "lueckentext": {
      const erste = teil.luecken.map((v) => String(v[0]));
      const voll = fuelleLuecken(teil.code ?? teil.text ?? "", erste);
      const varianten = teil.luecken
        .map((v, i) => (v.length > 1 ? `Lücke ${i + 1}: ${v.map((x) => `\`${x}\``).join(" oder ")}` : null))
        .filter(Boolean);
      return (teil.code !== undefined ? codeZaun(voll, "java") : voll) + (varianten.length ? `\n\nAuch richtig: ${varianten.join("; ")}.` : "");
    }
    case "zeilen": {
      const zeilen = teil.code.replace(/\n+$/, "").split("\n");
      const breite = String(zeilen.length).length;
      const sortiert = [...teil.loesung].sort((a, b) => a - b);
      return (
        `Zeile${sortiert.length === 1 ? "" : "n"} ${sortiert.join(", ")}\n\n` +
        codeZaun(sortiert.map((z) => `${String(z).padStart(breite)}: ${zeilen[z - 1] ?? ""}`).join("\n"), "text")
      );
    }
    case "trace": {
      const mitLabel = !!teil.zeilen?.length;
      const kopf = `| ${mitLabel ? " |" : ""} ${teil.spalten.map(zelleMd).join(" | ")} |`;
      const trenner = `|${mitLabel ? " --- |" : ""}${teil.spalten.map(() => " --- |").join("")}`;
      const rumpf = teil.loesung.map((r, i) => `|${mitLabel ? ` ${zelleMd(teil.zeilen?.[i] ?? "")} |` : ""} ${r.map(zelleMd).join(" | ")} |`);
      return [kopf, trenner, ...rumpf].join("\n");
    }
    case "reihenfolge":
      return teil.elemente.map((e, i) => `${i + 1}. ${e}`).join("\n");
    case "code":
      return "Alle Tests bestehen mit der Musterlösung im Lösungsweg.";
  }
}

/** Musterantwort als einfacher Text (Fallback ohne Markdown). */
export function musterTextNeu(teil: NeuerTeil): string {
  switch (teil.typ) {
    case "ausgabe":
      return teil.loesung;
    case "richtigfalsch":
      return teil.aussagen.map((a) => (a.richtig ? "R" : "F")).join(" ");
    case "lueckentext":
      return teil.luecken.map((v) => String(v[0])).join(" | ");
    case "zeilen":
      return [...teil.loesung].sort((a, b) => a - b).join(", ");
    case "trace":
      return teil.loesung.map((r) => r.join(" ")).join("; ");
    case "reihenfolge":
      return teil.elemente.join(" → ");
    case "code":
      return "";
  }
}

/** Anzahl der Luecken im Text/Code eines Lueckentexts. */
export function lueckenImText(teil: TeilVon<"lueckentext">): number {
  return anzahlLuecken(teil.code ?? teil.text ?? "");
}
