import { notFound } from "next/navigation";
import Link from "next/link";
import { ladeKurs } from "@/lib/db/queries/kurse";
import { hatLernpfad, ladeFortschritt } from "@/lib/db/queries/kurs-inhalt";
import { ladeGliederung } from "@/lib/db/queries/lernpfad";
import { hatLernModul } from "@/lib/db/queries/lernen";
import { LektionNav } from "@/components/LektionNav";

type Props = { params: Promise<{ id: string }>; children: React.ReactNode };

/** Rahmen fuer BEIDE Lernpfad-Stufen (siehe page.tsx): mit vollem Skript traegt die
 * LektionNav-Sidebar Lektionen/Programmiertests-Unterrouten; ohne Skript, aber mit
 * `lern_themen`-Kurzuebersicht, baut die Seite selbst ihre eigene (einfachere) Themen-Sidebar --
 * hier nur Breadcrumb + volle Breite, keine doppelte Navigation. */
export default async function LernpfadLayout({ params, children }: Props): Promise<React.JSX.Element> {
  const { id } = await params;
  const kurs = ladeKurs(id);
  if (!kurs) notFound();

  const breadcrumb = (
    <div className="flex items-center gap-3 mb-6">
      <Link
        href={`/kurse/${id}`}
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors"
      >
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 12L6 8l4-4" />
        </svg>
        {kurs.name}
      </Link>
      <span className="text-ink-subtle" aria-hidden="true">/</span>
      <span className="text-sm font-medium text-ink-soft">Lernpfad</span>
    </div>
  );

  if (!hatLernpfad(id)) {
    if (!hatLernModul(id)) notFound();
    return (
      <div className="p-6">
        {breadcrumb}
        {children}
      </div>
    );
  }

  const gliederung = ladeGliederung(id);
  if (!gliederung) notFound();
  const fortschritt = ladeFortschritt(id);

  return (
    <div className="p-6">
      {breadcrumb}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 items-start">
        <LektionNav kursId={id} gliederung={gliederung} fortschritt={fortschritt} />
        <div className="space-y-5 min-w-0">{children}</div>
      </div>
    </div>
  );
}
