"use client";

const SPEICHER_SCHLUESSEL = "lernen-theme";

/** Liest/schreibt das Theme direkt am DOM statt in React-State -- so entscheidet reines CSS
 * (die dark:-Variante), welches der beiden Icons sichtbar ist, ohne Hydration-Mismatch-Risiko
 * gegenueber dem Anti-Flacker-Inline-Skript in app/layout.tsx, das dasselbe Attribut vor dem
 * ersten Paint setzt. */
function umschalten(): void {
  const aktuell = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  const neu = aktuell === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = neu;
  try {
    localStorage.setItem(SPEICHER_SCHLUESSEL, neu);
  } catch {
    // localStorage kann in privaten Fenstern fehlschlagen -- Theme gilt dann nur fuer diese Seite
  }
}

export function ThemeUmschalter(): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={umschalten}
      aria-label="Zwischen hellem und dunklem Modus wechseln"
      title="Theme wechseln"
      className="flex items-center justify-center w-8 h-8 rounded-lg border border-line bg-surface-raised text-ink-muted hover:text-ink hover:bg-surface-sunken transition-colors"
    >
      <svg className="dark:hidden" viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg className="hidden dark:block" viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
