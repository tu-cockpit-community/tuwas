import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeKapitel, ladeKapitelListe, ladeKurs } from "@/lib/lernen/kurs";
import { mAbschnitte } from "@/lib/lernen/statistik";
import { Bloecke } from "@/components/lernen/Bloecke";
import { GelesenKnopf } from "@/components/lernen/GelesenKnopf";
import { LektionsBilanz, Tastenblaettern } from "@/components/lernen/LektionsStand";

type Props = { params: Promise<{ fach: string; kapitel: string; lektion: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach, kapitel, lektion } = await params;
  const k = ladeKapitel(fach, kapitel);
  const a = k?.abschnitte.find((x) => x.id === decodeURIComponent(lektion));
  return { title: a && k ? `${a.titel} · ${k.meta.titel}` : "Lernen" };
}

/** Eine Lektion = ein ##-Abschnitt. Kurze, fokussierte Seite mit Vor/Zurueck und Mastery-Stand. */
export default async function LektionSeite({ params }: Props) {
  const { fach, kapitel: slug, lektion: roh } = await params;
  const lektion = decodeURIComponent(roh);
  const kurs = ladeKurs(fach);
  const kapitel = ladeKapitel(fach, slug);
  if (!kurs || !kapitel) notFound();
  const index = kapitel.abschnitte.findIndex((a) => a.id === lektion);
  if (index < 0) notFound();
  const abschnitt = kapitel.abschnitte[index];
  const lektionen = mAbschnitte(kapitel);
  const nummer = `${kapitel.meta.nummer}.${index + 1}`;

  // Blaettern ueber Kapitelgrenzen hinweg
  const liste = ladeKapitelListe(fach);
  const kIndex = liste.findIndex((k) => k.slug === slug);
  const vorKapitel = kIndex > 0 ? liste[kIndex - 1] : null;
  const nachKapitel = kIndex >= 0 && kIndex < liste.length - 1 ? liste[kIndex + 1] : null;
  const zurueck =
    index > 0
      ? { href: `/lernen/${fach}/${slug}/${kapitel.abschnitte[index - 1].id}`, text: kapitel.abschnitte[index - 1].titel, art: "Vorherige Lektion" }
      : vorKapitel
        ? { href: `/lernen/${fach}/${vorKapitel.slug}`, text: `${vorKapitel.meta.nummer} ${vorKapitel.meta.titel}`, art: "Vorheriges Kapitel" }
        : null;
  const weiter =
    index < kapitel.abschnitte.length - 1
      ? { href: `/lernen/${fach}/${slug}/${kapitel.abschnitte[index + 1].id}`, text: kapitel.abschnitte[index + 1].titel, art: "Nächste Lektion" }
      : nachKapitel
        ? { href: `/lernen/${fach}/${nachKapitel.slug}`, text: `${nachKapitel.meta.nummer} ${nachKapitel.meta.titel}`, art: "Nächstes Kapitel" }
        : null;

  return (
    <div className="lektion">
      <div className="lektion-leiste">
        <p className="lektion-pfad">
          <Link href={`/lernen/${fach}/${slug}`}>
            Kapitel {kapitel.meta.nummer}: {kapitel.meta.titel}
          </Link>{" "}
          · Lektion {index + 1} von {kapitel.abschnitte.length}
        </p>
      </div>

      <article className="lektion-spalte" aria-labelledby="lektion-titel">
        <h1 id="lektion-titel" className="lektion-titel">
          <span className="lektion-nr">{nummer}</span>
          {abschnitt.titel}
        </h1>
        <div className="lektion-inhalt">
          <Bloecke kurs={fach} bloecke={abschnitt.bloecke} praefix={nummer} kapitel={slug} />
        </div>
      </article>

      <footer className="lektion-fuss">
        <LektionsBilanz kurs={fach} kapitel={slug} lektion={lektionen[index]} />
        <GelesenKnopf kurs={fach} schluessel={`${slug}#${abschnitt.id}`} titel={abschnitt.titel} />
        <nav className="blaettern" aria-label="Blättern">
          {zurueck ? (
            <Link href={zurueck.href} rel="prev">
              <span>{zurueck.art}</span>
              {zurueck.text}
            </Link>
          ) : (
            <span />
          )}
          {weiter ? (
            <Link href={weiter.href} rel="next" className="weiter">
              <span>{weiter.art}</span>
              {weiter.text}
            </Link>
          ) : null}
        </nav>
        <p className="tasten-hinweis">
          Blättern mit <kbd>←</kbd> und <kbd>→</kbd>
        </p>
        <Tastenblaettern zurueck={zurueck?.href} weiter={weiter?.href} />
      </footer>
    </div>
  );
}
