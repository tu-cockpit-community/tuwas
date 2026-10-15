import { ladeKurs } from "@/lib/lernen/kurs";
import { Wiederholen } from "@/components/lernen/Wiederholen";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Wiederholen · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function WiederholenSeite({ params }: Props) {
  const { fach } = await params;
  return (
    <div className="lektion">
      <div className="lektion-spalte">
        <header className="seiten-kopf">
          <h1>Wiederholen</h1>
          <p>
            Hier kommt zurück, was du schon geübt hast, kurz bevor du es vergessen würdest. Richtig Gelöstes kommt
            nach 3, 7, 16 und 35 Tagen wieder, Falsches schon morgen. Ein paar Minuten am Tag reichen.
          </p>
        </header>
        <Wiederholen kurs={fach} />
      </div>
    </div>
  );
}
