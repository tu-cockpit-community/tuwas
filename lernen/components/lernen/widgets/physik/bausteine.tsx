"use client";

import { useId } from "react";
import { zahlDe } from "../../Koordinaten";

/** Gemeinsame Bedienelemente der Physik-Widgets: beschrifteter Schieberegler und Kennwert-Leiste. */

export function Regler({
  name,
  wert,
  min,
  max,
  schritt,
  einheit,
  stellen = 2,
  onChange,
}: {
  name: string;
  wert: number;
  min: number;
  max: number;
  schritt: number;
  einheit?: string;
  stellen?: number;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label htmlFor={id} className="flex justify-between gap-2 text-sm text-ink-soft">
        <span>{name}</span>
        <output htmlFor={id} className="font-mono tabular-nums text-ink">
          {zahlDe(wert, stellen)}
          {einheit ? ` ${einheit}` : ""}
        </output>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={schritt}
        value={wert}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-accent)]"
      />
    </div>
  );
}

export function ReglerGitter({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-x-6 gap-y-3 py-3 sm:grid-cols-2">{children}</div>;
}

export function Kennwerte({ werte }: { werte: { name: string; wert: string }[] }) {
  return (
    <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm" aria-live="polite">
      {werte.map((w) => (
        <div key={w.name} className="flex gap-1.5">
          <dt className="text-ink-muted">{w.name}</dt>
          <dd className="font-mono tabular-nums text-ink">{w.wert}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Auswahl({
  name,
  wert,
  optionen,
  onChange,
}: {
  name: string;
  wert: string;
  optionen: { wert: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2 text-sm">
      <legend className="sr-only">{name}</legend>
      {optionen.map((o) => (
        <button
          key={o.wert}
          type="button"
          aria-pressed={wert === o.wert}
          onClick={() => onChange(o.wert)}
          className={
            "rounded-md border px-2.5 py-1 " +
            (wert === o.wert ? "border-accent bg-accent-soft text-ink" : "border-line-strong text-ink-soft hover:border-accent")
          }
        >
          {o.label}
        </button>
      ))}
    </fieldset>
  );
}

/** Zahl in wissenschaftlicher Schreibweise mit Dezimalkomma, z.B. 3,2·10⁻⁵ */
export function wiss(v: number, stellen = 3): string {
  if (!Number.isFinite(v)) return "–";
  if (v === 0) return "0";
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -2 && e <= 4) return zahlDe(Number(v.toPrecision(stellen)), 6);
  const m = v / 10 ** e;
  const hoch = String(e)
    .replace("-", "⁻")
    .replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]);
  return `${zahlDe(Number(m.toPrecision(stellen)), 6)}·10${hoch}`;
}
