import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeKurs, ladePruefungen } from "@/lib/lernen/kurs";
import { teilFuerClient } from "@/lib/lernen/typen";
import { Md } from "@/components/lernen/Md";
import { Plot } from "@/components/lernen/Plot";
import { teilRender } from "@/components/lernen/Bloecke";
import { schritteAus } from "@/components/lernen/aufgabeText";
import { PruefungLauf } from "@/components/lernen/PruefungLauf";

type Props = { params: Promise<{ fach: string; id: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach, id } = await params;
  const p = ladePruefungen(fach).find((x) => x.id === id);
  return { title: `${p?.titel ?? "Prüfung"} · ${ladeKurs(fach)?.titel ?? "Lernen"}` };
}

export default async function PruefungSeite({ params }: Props) {
  const { fach, id } = await params;
  const p = ladePruefungen(fach).find((x) => x.id === id);
  if (!p) notFound();
  return (
    <div className="lern-seite lern-seite-schmal">
      <header className="seiten-kopf">
        <p className="seiten-zurueck">
          <Link href={`/lernen/${fach}/pruefung`}>Alle Prüfungen</Link>
        </p>
        <h1>{p.titel}</h1>
        {p.quelle ? <p>Quelle: {p.quelle}</p> : null}
      </header>
      <PruefungLauf
        kurs={fach}
        id={p.id}
        titel={p.titel}
        dauerMinuten={p.dauer_minuten}
        hinweis={p.hinweis ? <Md>{p.hinweis}</Md> : undefined}
        aufgaben={p.aufgaben.map((a) => ({
          id: a.id,
          titel: a.titel,
          punkte: a.punkte ?? 10,
          angabe: <Md>{a.angabe}</Md>,
          plot: a.plot ? <Plot spec={a.plot} /> : undefined,
          teile: a.teile.map(teilFuerClient),
          teilRender: a.teile.map(teilRender),
          schritte: schritteAus(a.loesung),
        }))}
      />
    </div>
  );
}
