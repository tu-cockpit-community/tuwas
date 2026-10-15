/** Stabile Karten-id: explizite id oder Hash des Fragetexts (ueberlebt Umsortieren und Verschieben). */
export function karteId(kapitel: string, karte: { id?: string; frage: string }): string {
  if (karte.id) return `${kapitel}-${karte.id}`;
  let h = 2166136261;
  for (const c of karte.frage.trim()) {
    h ^= c.codePointAt(0)!;
    h = Math.imul(h, 16777619);
  }
  return `${kapitel}-h${(h >>> 0).toString(36)}`;
}
