import { notFound } from "next/navigation";
import Link from "next/link";
import { fragenFuerLektion } from "@/lib/kurs-inhalt";
import { ladeFortschritt, ladeQuizBank } from "@/lib/db/queries/kurs-inhalt";
import { ladeGliederung, ladeLektion } from "@/lib/db/queries/lernpfad";
import { nachbarn } from "@/lib/skript";
import { SkriptMarkdown } from "@/components/SkriptMarkdown";
import { LektionAbschluss } from "@/components/LektionAbschluss";
import { KonzeptKarte } from "@/components/KonzeptKarte";
import { AufklappbarGruppe } from "@/components/AufklappbarGruppe";
import { QuizSet } from "@/components/QuizSet";

type Props = { params: Promise<{ id: string; lektion: string }> };

export default async function LektionPage({ params }: Props): Promise<React.JSX.Element> {
  const { id, lektion: lektionId } = await params;

  const lektion = ladeLektion(id, lektionId);
  if (!lektion) notFound();
  const gliederung = ladeGliederung(id);
  const fortschritt = ladeFortschritt(id);
  const quizBank = ladeQuizBank(id);
  const fragen = fragenFuerLektion(quizBank, lektionId);
  const { vorher, nachher } = gliederung ? nachbarn(gliederung, lektionId) : { vorher: null, nachher: null };
  const status = fortschritt.lektionen[lektionId] ?? { abgeschlossen: false, abgeschlossen_am: null };

  return (
    <>
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="font-mono text-xs text-ink-faint">
            {lektion.nr !== null ? String(lektion.nr).padStart(2, "0") : lektion.art}
          </span>
          <h1 className="text-lg font-semibold text-ink mt-0.5">{lektion.kurztitel}</h1>
          <p className="text-xs text-ink-faint mt-1">
            {lektion.lesedauer_minuten} Min Lesezeit
            {lektion.codebloecke > 0 ? ` · ${lektion.codebloecke} Codebeispiele` : ""}
          </p>
        </div>
        <LektionAbschluss
          kursId={id}
          lektionId={lektionId}
          abgeschlossen={status.abgeschlossen}
          abgeschlossenAm={status.abgeschlossen_am}
        />
      </div>

      {lektion.unterabschnitte.length > 1 && (
        <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2">In dieser Lektion</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {lektion.unterabschnitte.map((u) => (
              <a key={u.anker} href={`#${u.anker}`} className="text-xs text-ink-muted hover:text-accent transition-colors">
                {u.titel}
              </a>
            ))}
          </div>
        </div>
      )}

      {lektion.einleitung.trim() && <SkriptMarkdown>{lektion.einleitung}</SkriptMarkdown>}

      {lektion.abschnitte.length > 1 && (
        <AufklappbarGruppe>
          <div className="space-y-3">
            {lektion.abschnitte.map((abschnitt, i) => (
              <KonzeptKarte
                key={abschnitt.id}
                kursId={id}
                abschnitt={abschnitt}
                nummer={i + 1}
                verstanden={fortschritt.abschnitte[abschnitt.id]?.verstanden ?? false}
              />
            ))}
          </div>
        </AufklappbarGruppe>
      )}
      {lektion.abschnitte.length === 1 && (
        <KonzeptKarte
          kursId={id}
          abschnitt={lektion.abschnitte[0]}
          nummer={1}
          verstanden={fortschritt.abschnitte[lektion.abschnitte[0].id]?.verstanden ?? false}
        />
      )}

      {fragen.length > 0 && <QuizSet kursId={id} lektionId={lektionId} fragen={fragen} />}

      <div className="flex items-center justify-between pt-2">
        {vorher ? (
          <Link
            href={`/kurse/${id}/lernpfad/lektion/${vorher.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 12L6 8l4-4" />
            </svg>
            {vorher.kurztitel}
          </Link>
        ) : (
          <span />
        )}
        {nachher ? (
          <Link
            href={`/kurse/${id}/lernpfad/lektion/${nachher.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            {nachher.kurztitel}
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </Link>
        ) : (
          <Link
            href={`/kurse/${id}/lernpfad`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Zur Übersicht
          </Link>
        )}
      </div>
    </>
  );
}
