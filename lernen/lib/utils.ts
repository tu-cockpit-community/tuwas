import type { KursStatus } from "./types";

interface BadgeConfig {
  bg: string;
  label: string;
}

const STATUS_CONFIG: Record<string, BadgeConfig> = {
  bestanden:      { bg: "bg-success-soft text-success border border-success-line",  label: "Bestanden" },
  abgeschlossen:  { bg: "bg-success-soft text-success border border-success-line",  label: "Abgeschlossen" },
  in_vorbereitung:{ bg: "bg-info-soft    text-info    border border-info-line",     label: "In Vorbereitung" },
  angemeldet:     { bg: "bg-warning-soft   text-warning   border border-warning-line",    label: "Angemeldet" },
  abgelegt:       { bg: "bg-warning-soft  text-warning  border border-warning-line",   label: "Abgelegt" },
  nicht_bestanden:{ bg: "bg-danger-soft     text-danger     border border-danger-line",      label: "Nicht bestanden" },
  nicht_begonnen: { bg: "bg-surface-sunken  text-ink-muted   border border-line",    label: "Nicht begonnen" },
  anrechnung_beantragt: { bg: "bg-info-soft text-info border border-info-line", label: "Anrechnung beantragt" },
  ausstehend:     { bg: "bg-surface-sunken  text-ink-muted   border border-line",    label: "Ausstehend" },
  aktiv:          { bg: "bg-info-soft    text-info    border border-info-line",     label: "Aktiv" },
  geplant:        { bg: "bg-surface-sunken  text-ink-muted   border border-line",    label: "Geplant" },
  pause:          { bg: "bg-surface-sunken  text-ink-muted   border border-line",    label: "Pause" },
};

export function statusConfig(status: KursStatus | string): BadgeConfig {
  return STATUS_CONFIG[status] ?? { bg: "bg-surface-sunken text-ink-muted border border-line", label: status };
}

export function schwierigkeitColor(s: string | undefined): string {
  switch (s) {
    case "sehr_hoch": return "text-danger";
    case "hoch":      return "text-warning";
    case "mittel":    return "text-warning";
    case "niedrig":   return "text-success";
    default:          return "text-ink-muted";
  }
}

export function progressBar(value: number, max: number): string {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return `${Math.round(pct)}%`;
}

/** Badge for a quiz best-score quote (0..1), or null when never attempted. */
export function quizQuoteConfig(quote: number | null): BadgeConfig {
  if (quote === null) return { bg: "bg-surface-sunken text-ink-muted border border-line", label: "Offen" };
  if (quote >= 0.9) return { bg: "bg-success-soft text-success border border-success-line", label: "Sehr gut" };
  if (quote >= 0.75) return { bg: "bg-success-soft text-success border border-success-line", label: "Gut" };
  if (quote >= 0.5) return { bg: "bg-warning-soft text-warning border border-warning-line", label: "Ausreichend" };
  return { bg: "bg-danger-soft text-danger border border-danger-line", label: "Zu wenig" };
}

/** Badge for whether a Lernpfad-Lektion has been marked as read/complete. */
export function lektionStatusConfig(abgeschlossen: boolean): BadgeConfig {
  return abgeschlossen
    ? { bg: "bg-success-soft text-success border border-success-line", label: "Abgeschlossen" }
    : { bg: "bg-surface-sunken text-ink-muted border border-line", label: "Offen" };
}

/** "WS2627" -> "WS 26/27", "SS2027" -> "SS 27", "SS2026_pre" -> "Vorkurs". */
export function semesterText(s: string | undefined): string {
  if (!s) return "-";
  if (s === "SS2026_pre") return "Vorkurs";
  if (s === "flexibel") return "Flexibel";
  const ws = s.match(/^WS(\d{2})(\d{2})$/);
  if (ws) return `WS ${ws[1]}/${ws[2]}`;
  const ss = s.match(/^SS(\d{4})$/);
  if (ss) return `SS ${ss[1].slice(2)}`;
  return s;
}

/** "sehr_hoch" -> "Sehr hoch". */
export function schwierigkeitText(s: string): string {
  const t = s.replace(/_/g, " ");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
