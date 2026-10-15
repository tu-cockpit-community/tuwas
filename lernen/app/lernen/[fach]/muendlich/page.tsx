import Link from "next/link";
import { ladeKurs, ladeUebersicht } from "@/lib/lernen/kurs";
import { KartenStand } from "@/components/lernen/KartenStand";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Mündliche Prüfung · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

/** Die Kapitel mit Karteikarten. Die Karten selbst stehen je Kapitel auf einer eigenen Seite, sonst muesste jeder Aufruf alle rendern. */
export default async function MuendlichSeite({ params }: Props) {
  const { fach } = await params;
  const kapitel = ladeUebersicht(fach).filter((k) => k.karteIds.length > 0);
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <h1>Mündliche Prüfung</h1>
        <p>
          Nach der schriftlichen Prüfung folgt ein Prüfungsgespräch. Gefragt werden Definitionen, Sätze mit ihren
          Voraussetzungen und Begründungen. Beantworte jede Frage laut, decke dann auf und bewerte dich ehrlich.
          Gewusste Karten kommen nach 1, 3, 7, 16 und 35 Tagen unter „Wiederholen“ zurück.
        </p>
      </header>
      <div className="trainer-themen">
        {kapitel.map((k) => (
          <Link key={k.slug} href={`/lernen/${fach}/muendlich/${k.slug}`} className="thema-karte">
            <span className="thema-nr" aria-hidden="true">
              {k.meta.nummer}
            </span>
            <span className="thema-titel">{k.meta.titel}</span>
            <span className="thema-meta">
              <KartenStand kurs={fach} ids={k.karteIds} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
