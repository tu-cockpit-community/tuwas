import type { CalloutTyp } from "@/lib/callouts";

interface CalloutStil {
  icon: React.JSX.Element;
  label: string;
  klassen: string;
}

/** Schlichte Linien-Icons auf einem 16x16-Raster; die Farbe kommt vom umgebenden Text. */
function Symbol({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-3.5 h-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const STILE: Record<CalloutTyp, CalloutStil> = {
  merke: {
    icon: (
      <Symbol>
        <path d="M4 2.5h8v11l-4-2.8-4 2.8z" />
      </Symbol>
    ),
    label: "Merke",
    klassen: "bg-accent-soft border-accent-line text-ink",
  },
  achtung: {
    icon: (
      <Symbol>
        <path d="M8 2.2l6.2 11H1.8z" />
        <path d="M8 6.5v3M8 11.5v.01" />
      </Symbol>
    ),
    label: "Achtung",
    klassen: "bg-warning-soft border-warning-line text-ink",
  },
  fehler: {
    icon: (
      <Symbol>
        <circle cx="8" cy="8" r="6" />
        <path d="M5.8 5.8l4.4 4.4M10.2 5.8l-4.4 4.4" />
      </Symbol>
    ),
    label: "Häufiger Fehler",
    klassen: "bg-danger-soft border-danger-line text-ink",
  },
  tipp: {
    icon: (
      <Symbol>
        <path d="M8 1.8a4.2 4.2 0 0 0-2.4 7.6c.5.4.8 1 .8 1.6v.4h3.2V11c0-.6.3-1.2.8-1.6A4.2 4.2 0 0 0 8 1.8z" />
        <path d="M6.4 13.4h3.2" />
      </Symbol>
    ),
    label: "Tipp",
    klassen: "bg-success-soft border-success-line text-ink",
  },
  pruefung: {
    icon: (
      <Symbol>
        <circle cx="8" cy="8" r="6" />
        <circle cx="8" cy="8" r="2.5" />
      </Symbol>
    ),
    label: "Prüfungsrelevant",
    klassen: "bg-info-soft border-info-line text-ink",
  },
  uebung: {
    icon: (
      <Symbol>
        <path d="M2.5 13.5l.7-3L11 2.7a1.4 1.4 0 0 1 2 2L5.2 12.5z" />
        <path d="M9.8 3.9l2.3 2.3" />
      </Symbol>
    ),
    label: "Übung",
    klassen: "bg-accent-soft border-accent-line text-ink",
  },
  check: {
    icon: (
      <Symbol>
        <circle cx="8" cy="8" r="6" />
        <path d="M5.2 8.2l2 2 3.6-4" />
      </Symbol>
    ),
    label: "Kurz-Check",
    klassen: "bg-surface-sunken border-line border-dashed text-ink",
  },
};

/**
 * Rendert :::merke / :::achtung / :::fehler / :::tipp / :::pruefung / :::uebung / :::check
 * Container-Direktiven der Lektionstexte (siehe lib/callouts.ts).
 */
export function Callout({ type, children }: { type: string; children: React.ReactNode }): React.JSX.Element {
  const stil = STILE[type as CalloutTyp] ?? STILE.merke;
  return (
    <div className={`my-4 rounded-lg border px-4 py-3 ${stil.klassen}`}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
        {stil.icon}
        {stil.label}
      </p>
      <div className="text-sm leading-relaxed [&>p]:m-0 [&>p+p]:mt-2">{children}</div>
    </div>
  );
}
