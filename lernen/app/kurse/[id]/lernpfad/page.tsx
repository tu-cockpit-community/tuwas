import { notFound } from "next/navigation";
import Link from "next/link";
import { gesamtFortschritt } from "@/lib/kurs-inhalt";
import { ladeFortschritt, ladeQuizBank, ladeTestBank } from "@/lib/db/queries/kurs-inhalt";
import { ladeGliederung } from "@/lib/db/queries/lernpfad";
import { ladeLernModul } from "@/lib/db/queries/lernen";
import { ladeKurs } from "@/lib/db/queries/kurse";
import { FortschrittBalken } from "@/components/FortschrittBalken";
import { LernThemaKarte } from "@/components/LernThemaKarte";
import { lektionStatusConfig, quizQuoteConfig } from "@/lib/utils";

type Props = { params: Promise<{ id: string }> };

/**
 * EIN Lernpfad-Button pro Kurs, unabhaengig vom Inhaltsstand: existiert ein vollstaendig
 * geparstes Skript (aktuell nur EP1), zeigt diese Seite den reichen Lektionen-Lernpfad wie
 * bisher. Ohne Skript faellt sie auf die leichte `lern_themen`-Kurzuebersicht zurueck -- selbe
 * Route, selbes Layout-Grundgeruest (Sidebar + Themenkarten), nur weniger Tiefe. Sobald ein Kurs
 * ein echtes Skript bekommt, wechselt er automatisch auf die reiche Ansicht, ohne dass sich am
 * Button oder an der URL irgendetwas aendert.
 */
export default async function LernpfadUebersicht({ params }: Props): Promise<React.JSX.Element> {
  const { id } = await params;
  const gliederung = ladeGliederung(id);

  if (!gliederung) {
    const kurs = ladeKurs(id);
    if (!kurs) notFound();
    const lernModul = ladeLernModul(id);
    if (!lernModul) notFound();

    return (
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start">
        <nav className="md:sticky md:top-6 bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden max-h-[70vh] md:max-h-none overflow-y-auto">
          <div className="px-4 py-3 border-b border-line">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">Themen</p>
          </div>
          <div className="divide-y divide-line">
            {lernModul.themen.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-ink-muted hover:text-accent hover:bg-accent-soft transition-colors"
              >
                <span className="font-mono text-ink-muted shrink-0">{String(t.nr).padStart(2, "0")}</span>
                {t.titel}
              </a>
            ))}
          </div>
        </nav>
        <div className="space-y-5 min-w-0">
          {lernModul.themen.map((t) => (
            <LernThemaKarte key={t.id} thema={t} />
          ))}
        </div>
      </div>
    );
  }

  const fortschritt = ladeFortschritt(id);
  const quizBank = ladeQuizBank(id);
  const testBank = ladeTestBank(id);
  const { abgeschlossen, gesamt, quizSchnitt } = gesamtFortschritt(gliederung, fortschritt);

  const bestandeneTests = fortschritt.tests.filter((t) => t.bestanden).length;

  return (
    <>
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-ink">{gliederung.titel}</h1>
          <span className="text-xs font-mono text-ink-faint">
            {abgeschlossen} von {gesamt} Lektionen
          </span>
        </div>
        {gliederung.untertitel && <p className="text-sm text-ink-muted mb-4">{gliederung.untertitel}</p>}
        <FortschrittBalken wert={abgeschlossen} max={gesamt} />
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-muted">
          <span>
            Quiz-Schnitt:{" "}
            <span className="font-mono text-ink-soft">
              {quizSchnitt === null ? "-" : `${Math.round(quizSchnitt * 100)}%`}
            </span>
          </span>
          {testBank && testBank.tests.length > 0 && (
            <span>
              Programmiertests bestanden:{" "}
              <span className="font-mono text-ink-soft">
                {bestandeneTests} / {testBank.tests.length}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {gliederung.lektionen.map((l) => {
          const abgeschlossenL = fortschritt.lektionen[l.id]?.abgeschlossen ?? false;
          const statusL = lektionStatusConfig(abgeschlossenL);
          const anzahlFragen = quizBank?.fragen.filter((f) => f.lektion_id === l.id).length ?? 0;
          const quiz = fortschritt.quiz[l.id];
          const quizC = quiz ? quizQuoteConfig(quiz.beste_quote) : null;
          return (
            <Link
              key={l.id}
              href={`/kurse/${id}/lernpfad/lektion/${l.id}`}
              className="bg-surface-raised border border-line rounded-xl shadow-sm p-4 hover:border-accent-line transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-mono text-xs text-ink-faint bg-surface-sunken px-1.5 py-0.5 rounded shrink-0">
                  {l.nr !== null ? String(l.nr).padStart(2, "0") : l.art}
                </span>
                <h2 className="text-sm font-medium text-ink truncate flex-1">{l.kurztitel}</h2>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium ${statusL.bg}`}>
                  {statusL.label}
                </span>
                {quizC && (
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium ${quizC.bg}`}>
                    Quiz: {quizC.label}
                  </span>
                )}
                <span className="text-[10px] font-mono text-ink-faint ml-auto">
                  {l.lesedauer_minuten} Min{anzahlFragen > 0 ? ` · ${anzahlFragen} Fragen` : ""}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
