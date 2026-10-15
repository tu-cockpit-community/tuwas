import Link from "next/link";
import { ladeFortschritt, ladeTestBank } from "@/lib/db/queries/kurs-inhalt";

type Props = { params: Promise<{ id: string }> };

export default async function TestUebersicht({ params }: Props): Promise<React.JSX.Element> {
  const { id } = await params;
  const bank = ladeTestBank(id);
  const fortschritt = ladeFortschritt(id);

  if (!bank || bank.tests.length === 0) {
    return (
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-10 text-center">
        <p className="text-ink-faint text-sm mb-2">Noch keine Programmiertests verfügbar.</p>
        <p className="text-xs text-ink-muted">Diese werden aus echten Angaben transkribiert und erscheinen hier.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
        <h1 className="text-lg font-semibold text-ink mb-1.5">Programmiertests</h1>
        <p className="text-sm text-ink-muted leading-relaxed">{bank.hinweis_selbstbewertung}</p>
      </div>

      <div className="space-y-3">
        {bank.tests.map((t) => {
          const versuche = fortschritt.tests.filter((v) => v.test_id === t.id);
          const bester = versuche.reduce<number | null>(
            (max, v) => (max === null || v.punkte > max ? v.punkte : max),
            null
          );
          return (
            <Link
              key={t.id}
              href={`/kurse/${id}/lernpfad/test/${t.id}`}
              className="block bg-surface-raised border border-line rounded-xl shadow-sm p-4 hover:border-accent-line transition-colors"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <h2 className="text-sm font-medium text-ink">{t.titel}</h2>
                  <p className="text-xs text-ink-faint mt-0.5">
                    {t.jahrgang} · {t.dauer_minuten} Min{t.dauer_quelle === "annahme" ? " (Annahme)" : ""} ·{" "}
                    {t.methoden.length} Methoden · max. {t.max_punkte} Punkte
                  </p>
                </div>
                <div className="text-right shrink-0">
                  {bester !== null ? (
                    <span
                      className={[
                        "text-xs font-mono px-2 py-0.5 rounded-md border",
                        bester >= t.bestehensgrenze_punkte
                          ? "bg-success-soft text-success border-success-line"
                          : "bg-danger-soft text-danger border-danger-line",
                      ].join(" ")}
                    >
                      Beste: {bester} / {t.max_punkte}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-ink-faint">Noch nicht versucht</span>
                  )}
                  {versuche.length > 0 && (
                    <p className="text-[10px] text-ink-faint mt-1">
                      {versuche.length} {versuche.length === 1 ? "Versuch" : "Versuche"}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
