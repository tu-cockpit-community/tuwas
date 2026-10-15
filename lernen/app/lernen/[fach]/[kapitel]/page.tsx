import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeKapitel, ladeKapitelListe, ladeKurs } from "@/lib/lernen/kurs";
import { kapitelIds, mAbschnitte } from "@/lib/lernen/statistik";
import { Bloecke } from "@/components/lernen/Bloecke";
import { Md } from "@/components/lernen/Md";
import { AufgabenFortschritt } from "@/components/lernen/Fortschritt";
import { KapitelWeiter, LektionsListe } from "@/components/lernen/LektionsStand";

type Props = { params: Promise<{ fach: string; kapitel: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach, kapitel } = await params;
  const k = ladeKapitel(fach, kapitel);
  const kurs = ladeKurs(fach);
  return { title: k && kurs ? `${k.meta.nummer} ${k.meta.titel} · ${kurs.titel}` : "Lernen" };
}

/** Kapiteluebersicht: Worum geht es, Lernziele, Einstieg mit Vorwissen-Check, Lektionsliste. */
export default async function KapitelSeite({ params }: Props) {
  const { fach, kapitel: slug } = await params;
  const kurs = ladeKurs(fach);
  const kapitel = ladeKapitel(fach, slug);
  if (!kurs || !kapitel) notFound();
  const { meta } = kapitel;
  const liste = ladeKapitelListe(fach);
  const voraus = meta.voraussetzungen.map((v) => liste.find((k) => k.slug === v)).filter((k) => k !== undefined);
  const lektionen = mAbschnitte(kapitel);

  return (
    <div className="kapitel-seite">
      <header className="kapitel-kopf">
        <p className="kapitel-kopf-nr">
          <Link href={`/lernen/${fach}`}>{kurs.titel}</Link> · Kapitel {meta.nummer} · Teil {meta.teil}: {kurs.teile[meta.teil] ?? ""}
        </p>
        <h1 className="kapitel-kopf-titel">{meta.titel}</h1>
        <p className="kapitel-kopf-kurz">{meta.kurz}</p>
        <div className="kapitel-kopf-stand">
          <AufgabenFortschritt kurs={fach} ids={kapitelIds(kapitel)} />
          {meta.stunden ? <span>ca. {meta.stunden} Stunden</span> : null}
        </div>
        <div className="kapitel-aktionen">
          <KapitelWeiter kurs={fach} kapitel={slug} lektionen={lektionen} />
          <Link href={`/lernen/${fach}/training?kapitel=${slug}`} className="knopf knopf-gross">
            Kapitel trainieren
          </Link>
        </div>
        {meta.lernziele.length > 0 ? (
          <div className="lernziele">
            <h2>Nach diesem Kapitel kannst du</h2>
            <ul>
              {meta.lernziele.map((z, i) => (
                <li key={i}>
                  <Md inline>{z}</Md>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {voraus.length > 0 ? (
          <p className="kapitel-voraus">
            Baut auf:{" "}
            {voraus.map((v, i) => (
              <span key={v.slug}>
                {i > 0 ? ", " : ""}
                <Link href={`/lernen/${fach}/${v.slug}`} className="lern-link">
                  {v.meta.nummer} {v.meta.titel}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </header>

      {kapitel.einleitung.length > 0 ? (
        <section className="kapitel-einstieg" aria-label="Einstieg">
          <Bloecke kurs={fach} bloecke={kapitel.einleitung} praefix={`${meta.nummer}.0`} kapitel={slug} />
        </section>
      ) : null}

      <h2 className="lektionen-titel">Lektionen</h2>
      <LektionsListe kurs={fach} kapitel={slug} lektionen={lektionen} />
      <p className="kapitel-kopf-stand">
        <Link href={`/lernen/${fach}/${slug}/alles`} className="lern-link">
          Ganzes Kapitel auf einer Seite (zum Drucken)
        </Link>
      </p>
    </div>
  );
}
