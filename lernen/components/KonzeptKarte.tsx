import type { SkriptUnterabschnitt } from "@/lib/types";
import { ladeBegriffeFuerAbschnitt } from "@/lib/db/queries/begriffe";
import { Aufklappbar } from "./Aufklappbar";
import { AbschnittHaken } from "./AbschnittHaken";
import { SkriptMarkdown } from "./SkriptMarkdown";
import { BegriffDrill } from "./BegriffDrill";

interface Props {
  kursId: string;
  abschnitt: SkriptUnterabschnitt;
  nummer: number;
  verstanden: boolean;
}

/** Eine Konzeptkarte pro ###-Unterabschnitt einer Lektion -- ersetzt den einen langen
 * SkriptMarkdown-Blob durch klar abgegrenzte, einzeln auf-/zuklappbare Einheiten. Der
 * Begriffe-Mikro-Drill sitzt direkt IN der Karte (interleaved), nicht als Quiz am Seitenende. */
export function KonzeptKarte({ kursId, abschnitt, nummer, verstanden }: Props): React.JSX.Element {
  const begriffe = ladeBegriffeFuerAbschnitt(kursId, abschnitt.id);
  return (
    <div id={abschnitt.anker} className="scroll-mt-6">
      <Aufklappbar
        kennzeichen={
          <>
            <span className="font-mono text-xs text-ink-faint shrink-0">{String(nummer).padStart(2, "0")}</span>
            <AbschnittHaken kursId={kursId} abschnittId={abschnitt.id} verstanden={verstanden} />
          </>
        }
        titel={abschnitt.titel}
      >
        <SkriptMarkdown bloss>{abschnitt.markdown}</SkriptMarkdown>
        <BegriffDrill begriffe={begriffe} />
      </Aufklappbar>
    </div>
  );
}
