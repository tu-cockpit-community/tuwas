"use client";

import { MATHE_WIDGETS } from "./mathe";
import { PHYSIK_WIDGETS } from "./physik";

/** Waehlt das Widget per Name; unbekannte Namen zeigen einen sichtbaren Hinweis statt zu crashen. */
export function WidgetHost({ name, titel, props }: { name: string; titel?: string; props: Record<string, unknown> }) {
  const W = MATHE_WIDGETS[name] ?? PHYSIK_WIDGETS[name];
  return (
    <figure className="widget" aria-label={titel ?? "Interaktive Grafik"}>
      {titel ? <figcaption className="widget-titel">{titel}</figcaption> : null}
      {W ? <W props={props} titel={titel} /> : <p className="widget-fehlt">Interaktive Grafik „{name}“ ist noch nicht verfügbar.</p>}
    </figure>
  );
}
