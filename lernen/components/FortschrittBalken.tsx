import { progressBar } from "@/lib/utils";

interface Props {
  wert: number;
  max: number;
  farbe?: string;
}

/** Small labelled progress bar, matching the app's bg-accent/bg-surface-sunken track idiom. */
export function FortschrittBalken({ wert, max, farbe = "bg-accent" }: Props): React.JSX.Element {
  const pct = progressBar(wert, max);
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex-1 h-2 bg-surface-sunken rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={wert}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div className={`h-full ${farbe} rounded-full transition-all`} style={{ width: pct }} />
      </div>
      <span className="text-xs font-mono text-ink-muted shrink-0">{pct}</span>
    </div>
  );
}
