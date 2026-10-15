/**
 * What TUWAS tells the Lernen app about the user's courses (the file TUWAS_ANGEMELDET points to). The Lernen tab shows
 * a row for every course TUWAS knows from TISS or TUWEL – with its content if there is some, otherwise as "ausständig" –
 * so it needs more than the LVA numbers: title, type and ECTS let it show a course it has never heard of.
 * Version 2 keeps `lvas` so that an older Lernen build still understands the file.
 */

export interface LernenKurs {
  /** LVA number as TISS writes it, e.g. "185.A91" */
  lva: string
  titel: string
  typ: string | null
  ects: number | null
  /** e.g. "2026W"; null if unknown (TUWEL-only course) */
  semester: string | null
}

export interface LernenVorgabe {
  version: 2
  lvas: string[]
  kurse: LernenKurs[]
  sbp: boolean
}

/** "185.A91", "185A91" and "185.a91" are the same LVA. */
export const lvaKey = (lva: string): string => lva.replace(/[^A-Za-z0-9]/g, '').toUpperCase()

/** An LVA number has six letters or digits (TU Wien: 3 digits, 3 digits or letters). */
const isLva = (lva: string): boolean => /^[0-9]{3}[0-9A-Z]{3}$/.test(lvaKey(lva))

export type CourseSource = Partial<LernenKurs> & { lva: string }

/**
 * Merges course lists from several sources, best source first: one entry per LVA, and each field comes from the
 * first source that knows it. Entries without a valid LVA number are dropped; a missing title falls back to the number.
 */
export function mergeLernenCourses(sources: CourseSource[][]): LernenKurs[] {
  const byLva = new Map<string, LernenKurs>()
  for (const source of sources) {
    for (const entry of source) {
      if (typeof entry?.lva !== 'string' || !isLva(entry.lva)) continue
      const key = lvaKey(entry.lva)
      const known = byLva.get(key)
      const title = typeof entry.titel === 'string' && entry.titel.trim() ? entry.titel.trim() : null
      byLva.set(key, {
        lva: known?.lva ?? entry.lva.trim(),
        titel: known && known.titel !== known.lva ? known.titel : (title ?? known?.titel ?? entry.lva.trim()),
        typ: known?.typ ?? entry.typ ?? null,
        ects: known?.ects ?? (typeof entry.ects === 'number' && Number.isFinite(entry.ects) ? entry.ects : null),
        semester: known?.semester ?? entry.semester ?? null
      })
    }
  }
  return [...byLva.values()].sort((a, b) => a.lva.localeCompare(b.lva))
}
