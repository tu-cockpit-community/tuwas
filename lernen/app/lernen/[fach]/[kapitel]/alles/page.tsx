import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeKapitel, ladeKurs } from "@/lib/lernen/kurs";
import { Bloecke } from "@/components/lernen/Bloecke";

type Props = { params: Promise<{ fach: string; kapitel: string }> };

/** Ganzes Kapitel auf einer Seite: zum Drucken oder fuer den Ueberblick. */
export default async function KapitelAlles({ params }: Props) {
  const { fach, kapitel: slug } = await params;
  const kurs = ladeKurs(fach);
  const kapitel = ladeKapitel(fach, slug);
  if (!kurs || !kapitel) notFound();
  return (
    <div className="lektion">
      <article className="lektion-spalte">
        <p className="lektion-pfad">
          <Link href={`/lernen/${fach}/${slug}`}>Zurück zur Kapitelübersicht</Link>
        </p>
        <h1 className="lektion-titel">
          <span className="lektion-nr">Kapitel {kapitel.meta.nummer}</span>
          {kapitel.meta.titel}
        </h1>
        <Bloecke kurs={fach} bloecke={kapitel.einleitung} praefix={`${kapitel.meta.nummer}.0`} kapitel={slug} />
        {kapitel.abschnitte.map((a, i) => (
          <section key={a.id} aria-labelledby={`${a.id}-h`}>
            <h2 id={`${a.id}-h`} className="lektion-titel">
              <span className="lektion-nr">
                {kapitel.meta.nummer}.{i + 1}
              </span>
              {a.titel}
            </h2>
            <Bloecke kurs={fach} bloecke={a.bloecke} praefix={`${kapitel.meta.nummer}.${i + 1}`} kapitel={slug} />
          </section>
        ))}
      </article>
    </div>
  );
}
