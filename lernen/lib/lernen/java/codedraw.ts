/**
 * Formen aus dem Fake-CodeDraw (lib/lernen/java/codedraw/CodeDraw.java) und ihr Vergleich.
 * Browser-tauglich: dieselben Typen rendert components/lernen/CodeDrawVorschau.tsx als SVG.
 */

interface Basis {
  farbe: string;
  gefuellt: boolean;
  linie: number;
}
export type Form =
  | (Basis & { art: "fenster" | "hintergrund"; b: number; h: number })
  | (Basis & { art: "punkt"; x: number; y: number })
  | (Basis & { art: "linie"; x1: number; y1: number; x2: number; y2: number })
  | (Basis & { art: "kreis"; x: number; y: number; r: number })
  | (Basis & { art: "ellipse"; x: number; y: number; rx: number; ry: number })
  | (Basis & { art: "rechteck"; x: number; y: number; b: number; h: number })
  | (Basis & { art: "dreieck"; x1: number; y1: number; x2: number; y2: number; x3: number; y3: number })
  | (Basis & { art: "bogen"; x: number; y: number; r: number; start: number; winkel: number })
  | (Basis & { art: "text"; x: number; y: number; text: string });

const ZAHLEN: Record<Form["art"], string[]> = {
  fenster: ["b", "h"],
  hintergrund: ["b", "h"],
  punkt: ["x", "y"],
  linie: ["x1", "y1", "x2", "y2"],
  kreis: ["x", "y", "r"],
  ellipse: ["x", "y", "rx", "ry"],
  rechteck: ["x", "y", "b", "h"],
  dreieck: ["x1", "y1", "x2", "y2", "x3", "y3"],
  bogen: ["x", "y", "r", "start", "winkel"],
  text: ["x", "y"],
};

/** Eine Linie von A nach B ist dieselbe wie von B nach A. */
function linienGleich(a: Form, b: Form, tol: number): boolean {
  if (a.art !== "linie" || b.art !== "linie") return false;
  const n = (u: number, v: number) => Math.abs(u - v) <= tol;
  return n(a.x1, b.x2) && n(a.y1, b.y2) && n(a.x2, b.x1) && n(a.y2, b.y1);
}

/** Der Zahlenwert einer Eigenschaft, die ZAHLEN fuer diese Form nennt (x, y, r, start, ...). */
function zahlwert(f: Form, schluessel: string): number {
  return (f as unknown as Record<string, number>)[schluessel];
}

export function formGleich(a: Form, b: Form, tol = 1): boolean {
  if (a.art !== b.art || a.farbe.toLowerCase() !== b.farbe.toLowerCase() || a.gefuellt !== b.gefuellt) return false;
  if (a.art === "text" && b.art === "text" && a.text !== b.text) return false;
  // Linienbreite zaehlt nur bei Umrissen
  if (!a.gefuellt && Math.abs(a.linie - b.linie) > 0.01) return false;
  // Winkel (Bogenmass) brauchen eine eigene, kleine Toleranz
  const ok = ZAHLEN[a.art].every((k) => Math.abs(zahlwert(a, k) - zahlwert(b, k)) <= (k === "start" || k === "winkel" ? 0.01 : tol));
  return ok || linienGleich(a, b, tol);
}

export interface FormVergleich {
  ok: boolean;
  fehlend: Form[];
  zuViel: Form[];
  /** nur bei reihenfolge: Index der ersten Abweichung */
  ersteAbweichung?: number;
}

/**
 * Vergleich als Multimenge (jede Form der Referenz braucht genau eine passende Form, Toleranz ±tol px).
 * Mit `reihenfolge` muss zusaetzlich die Zeichenreihenfolge stimmen (z. B. "Rot vor Blau").
 */
export function vergleicheFormen(ist: Form[], soll: Form[], opt: { tol?: number; reihenfolge?: boolean } = {}): FormVergleich {
  const tol = opt.tol ?? 1;
  if (opt.reihenfolge) {
    const n = Math.max(ist.length, soll.length);
    for (let i = 0; i < n; i++) {
      if (!ist[i] || !soll[i] || !formGleich(ist[i], soll[i], tol))
        return { ok: false, fehlend: soll.slice(i), zuViel: ist.slice(i), ersteAbweichung: i };
    }
    return { ok: true, fehlend: [], zuViel: [] };
  }
  const frei = [...ist];
  const fehlend: Form[] = [];
  for (const s of soll) {
    const k = frei.findIndex((f) => formGleich(f, s, tol));
    if (k < 0) fehlend.push(s);
    else frei.splice(k, 1);
  }
  return { ok: fehlend.length === 0 && frei.length === 0, fehlend, zuViel: frei };
}
