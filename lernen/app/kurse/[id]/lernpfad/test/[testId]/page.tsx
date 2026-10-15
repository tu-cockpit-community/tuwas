import { notFound } from "next/navigation";
import { ladeFortschritt, ladeTestBank } from "@/lib/db/queries/kurs-inhalt";
import { TestRunner } from "@/components/TestRunner";
import { TestStartKnopf } from "@/components/TestStartKnopf";
import { TestVersuchLoeschen } from "@/components/TestVersuchLoeschen";

type Props = {
  params: Promise<{ id: string; testId: string }>;
  searchParams: Promise<{ start?: string }>;
};

export default async function TestSeite({ params, searchParams }: Props): Promise<React.JSX.Element> {
  const { id, testId } = await params;
  const { start } = await searchParams;
  const bank = ladeTestBank(id);
  const test = bank?.tests.find((t) => t.id === testId);
  if (!test) notFound();

  if (!start) {
    const alleVersuche = ladeFortschritt(id).tests;
    const versuche = alleVersuche
      .map((v, globalIndex) => ({ v, globalIndex }))
      .filter(({ v }) => v.test_id === testId);

    return (
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-6 space-y-4">
        <h1 className="text-lg font-semibold text-ink">{test.titel}</h1>
        <p className="text-sm text-ink-muted">
          {test.jahrgang} · geplante Dauer {test.dauer_minuten} Minuten
          {test.dauer_quelle === "annahme" ? " (Annahme, nicht in der Angabe genannt)" : ""} · max.{" "}
          {test.max_punkte} Punkte
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Der Timer startet, sobald du beginnst. Die Referenzlösung und die offizielle Bewertungsgrundlage bleiben
          bis dahin verborgen. Es gibt keine automatische Code-Ausführung - du löst die Aufgabe in deiner eigenen
          IDE und bewertest dich danach selbst anhand der echten Bewertungsgrundlage.
        </p>
        <TestStartKnopf href={`/kurse/${id}/lernpfad/test/${testId}`} />

        {versuche.length > 0 && (
          <div className="border-t border-line pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint mb-2">
              Bisherige Versuche ({versuche.length})
            </p>
            <div className="space-y-1.5">
              {versuche.map(({ v, globalIndex }) => (
                <div
                  key={globalIndex}
                  className="flex items-center justify-between gap-3 text-sm bg-surface-sunken rounded-lg px-3 py-2"
                >
                  <span className="text-ink-faint font-mono text-xs">{v.datum}</span>
                  <span
                    className={[
                      "font-mono text-xs px-1.5 py-0.5 rounded",
                      v.bestanden ? "text-success" : "text-danger",
                    ].join(" ")}
                  >
                    {v.punkte} / {v.max_punkte}
                  </span>
                  <span className="text-ink-faint text-xs">{v.benoetigte_minuten} Min</span>
                  <TestVersuchLoeschen kursId={id} index={globalIndex} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return <TestRunner kursId={id} test={test} startedAt={Number(start)} />;
}
