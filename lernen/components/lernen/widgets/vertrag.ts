import type { ComponentType } from "react";

/**
 * Vertrag fuer interaktive Widgets (```widget-Bloecke). Jedes Widget ist eine Client-Komponente,
 * die ihre Einstellungen als untypisiertes `props`-Objekt aus dem YAML bekommt und selbst
 * validiert (fehlende Werte -> sinnvolle Defaults, nie Absturz).
 */
export interface WidgetProps {
  props: Record<string, unknown>;
  titel?: string;
}
export type WidgetKomponente = ComponentType<WidgetProps>;

/** kleine Helfer zum defensiven Lesen der YAML-Props */
export function zahl(p: Record<string, unknown>, k: string, standard: number): number {
  const v = p[k];
  return typeof v === "number" && Number.isFinite(v) ? v : standard;
}
export function text(p: Record<string, unknown>, k: string, standard: string): string {
  const v = p[k];
  return typeof v === "string" ? v : typeof v === "number" ? String(v) : standard;
}
export function bereich(p: Record<string, unknown>, k: string, standard: [number, number]): [number, number] {
  const v = p[k];
  return Array.isArray(v) && v.length === 2 && v.every((x) => typeof x === "number") ? [v[0] as number, v[1] as number] : standard;
}
