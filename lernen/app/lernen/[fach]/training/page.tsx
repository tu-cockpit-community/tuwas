import { Suspense } from "react";
import { ladeKurs, ladeUebersicht } from "@/lib/lernen/kurs";
import { Trainer } from "@/components/lernen/Trainer";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  return { title: `Training · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function TrainingSeite({ params }: Props) {
  const { fach } = await params;
  const kapitel = ladeUebersicht(fach).map((k) => ({ slug: k.slug, nummer: k.meta.nummer, titel: k.meta.titel }));
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <h1>Training</h1>
        <p>
          Jede Aufgabe wird neu ausgewürfelt und sofort korrigiert. Aufgabentypen, bei denen du oft danebenliegst,
          kommen häufiger dran.
        </p>
      </header>
      <Suspense fallback={<p className="leer">Training wird vorbereitet …</p>}>
        <Trainer fach={fach} kapitel={kapitel} />
      </Suspense>
    </div>
  );
}
