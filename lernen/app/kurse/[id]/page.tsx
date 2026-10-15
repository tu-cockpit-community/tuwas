import { notFound } from "next/navigation";
import Link from "next/link";
import type { Literatur } from "@/lib/types";
import { kategorieName } from "@/lib/lernen/module";
import { schwierigkeitColor, schwierigkeitText, semesterText, statusConfig } from "@/lib/utils";
import { ladeKurs } from "@/lib/db/queries/kurse";
import { gesamtFortschritt } from "@/lib/kurs-inhalt";
import { hatLernpfad, ladeFortschritt } from "@/lib/db/queries/kurs-inhalt";
import { ladeGliederung } from "@/lib/db/queries/lernpfad";
import { hatLernModul } from "@/lib/db/queries/lernen";

type Props = { params: Promise<{ id: string }> };

function LiteraturRow({ l }: { l: Literatur }): React.JSX.Element {
  const autor = l.autor ?? (l.autoren ? l.autoren.join(", ") : null);
  const typColor =
    l.typ === "buch"
      ? "bg-info-soft text-info border-info-line"
      : l.typ === "online" || l.typ === "frei_online"
      ? "bg-success-soft text-success border-success-line"
      : "bg-surface-sunken text-ink-muted border-line";

  return (
    <div className="flex items-start gap-3 py-3 border-b border-line last:border-0">
      <span className={`shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded border mt-0.5 ${typColor}`}>
        {l.typ}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-ink">
          {l.url ? (
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              {l.titel}
            </a>
          ) : l.titel}
        </div>
        {autor && <div className="text-xs text-ink-muted mt-0.5">{autor}</div>}
        {l.auflage && <div className="text-xs text-ink-faint mt-0.5">{l.auflage}</div>}
        {l.anmerkung && <div className="text-xs text-ink-faint mt-0.5 italic">{l.anmerkung}</div>}
      </div>
      {l.verfuegbarkeit && (
        <span className="text-[10px] text-ink-faint shrink-0">{l.verfuegbarkeit}</span>
      )}
    </div>
  );
}

export default async function KursDetailPage({ params }: Props): Promise<React.JSX.Element> {
  const { id } = await params;
  const kurs = ladeKurs(id);
  if (!kurs) notFound();

  const hasLernpfad = hatLernpfad(id);
  const hasLernInhalt = hasLernpfad || hatLernModul(id);
  const gliederung = hasLernpfad ? ladeGliederung(id) : null;
  const lernpfadFortschritt = gliederung
    ? gesamtFortschritt(gliederung, ladeFortschritt(id))
    : null;

  const sc = statusConfig(kurs.status);

  return (
    <div className="p-6">
      <Link href="/lernen" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mb-5">
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 12L6 8l4-4" />
        </svg>
        Alle Fächer
      </Link>

      {/* Header card */}
      <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-6 mb-5">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="font-mono text-xs text-ink-faint bg-surface-sunken px-2 py-0.5 rounded">{kurs.lva_nummer}</span>
              <span className="text-xs text-ink-faint">{kurs.typ}</span>
              {kurs.sws != null && (
                <span className="font-mono text-xs text-ink-faint">{kurs.sws} SWS</span>
              )}
              {kurs.steop && (
                <span className="text-[10px] font-mono bg-info-soft text-info border border-info-line px-1.5 py-0.5 rounded-md">StEOP</span>
              )}
              {kurs.streichkandidat && (
                <span className="text-[10px] font-mono bg-surface-sunken text-ink-muted border border-line px-1.5 py-0.5 rounded-md">Streichkandidat</span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-ink">{kurs.name}</h1>
            {kurs.institut && (
              <p className="text-xs text-ink-faint mt-1">{kurs.institut}</p>
            )}
          </div>
          <div className="text-right shrink-0">
            <div className="flex items-baseline justify-end gap-1 mb-1.5">
              <span className="text-3xl font-mono font-bold text-ink leading-none">{kurs.ects}</span>
              <span className="text-base font-normal text-ink-faint">ECTS</span>
            </div>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${sc.bg}`}>
              {sc.label}
            </span>
            {kurs.note != null && (
              <div className="text-sm font-mono text-success font-semibold mt-1.5">Note: {kurs.note}</div>
            )}
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-xs text-ink-faint mb-0.5">Semester</p>
            <p className="font-mono text-ink-soft">{semesterText(kurs.semester_plan || kurs.semester_label)}</p>
          </div>
          <div>
            <p className="text-xs text-ink-faint mb-0.5">Kategorie</p>
            <p className="text-ink-soft">{kategorieName(kurs.kategorie)}</p>
          </div>
          {kurs.pruefungsmodus && (
            <div>
              <p className="text-xs text-ink-faint mb-0.5">Prüfungsmodus</p>
              <p className="text-ink-soft font-medium">{kurs.pruefungsmodus}</p>
            </div>
          )}
          {kurs.sprache && (
            <div>
              <p className="text-xs text-ink-faint mb-0.5">Sprache</p>
              <p className="text-ink-soft">{kurs.sprache}</p>
            </div>
          )}
          {kurs.schwierigkeitsgrad && (
            <div>
              <p className="text-xs text-ink-faint mb-0.5">Schwierigkeit</p>
              <p className={`font-medium ${schwierigkeitColor(kurs.schwierigkeitsgrad)}`}>
                {schwierigkeitText(kurs.schwierigkeitsgrad)}
              </p>
            </div>
          )}
          {kurs.format && (
            <div>
              <p className="text-xs text-ink-faint mb-0.5">Format</p>
              <p className="text-ink-soft">{kurs.format}</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 items-center">
          {hasLernInhalt && (
            <Link href={`/kurse/${kurs.id}/lernpfad`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors">
              Lernpfad
            </Link>
          )}
          {lernpfadFortschritt && (
            <span className="text-xs text-ink-faint">
              {lernpfadFortschritt.abgeschlossen} von {lernpfadFortschritt.gesamt} Lektionen
              {lernpfadFortschritt.quizSchnitt !== null &&
                ` · Quiz ${Math.round(lernpfadFortschritt.quizSchnitt * 100)}%`}
            </span>
          )}
          {kurs.links?.tiss && (
            <a href={kurs.links.tiss} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold text-accent hover:text-accent-hover hover:underline">
              TISS &rarr;
            </a>
          )}
          {kurs.links?.vowi && (
            <a href={kurs.links.vowi} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold text-accent hover:text-accent-hover hover:underline">
              VoWi &rarr;
            </a>
          )}
          {kurs.tuwel_url && (
            <a href={kurs.tuwel_url} target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold text-accent hover:text-accent-hover hover:underline">
              TUWEL &rarr;
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">
        {/* Left column: content */}
        <div className="space-y-5 min-w-0">
          {kurs.lernergebnisse && kurs.lernergebnisse.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Lernergebnisse</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
                <ul className="space-y-2.5">
                  {kurs.lernergebnisse.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="text-accent shrink-0 mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {(kurs.tiss_inhalt?.length || kurs.inhalt?.length) ? (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Inhalt</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
                <ul className="space-y-2">
                  {(kurs.tiss_inhalt ?? kurs.inhalt ?? []).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="text-ink-muted mt-0.5 shrink-0 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {kurs.methoden && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Methoden</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
                <p className="text-sm text-ink-soft leading-relaxed">{kurs.methoden}</p>
              </div>
            </section>
          )}

          {kurs.leistungsnachweis && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Leistungsnachweis</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-5">
                <p className="text-sm text-ink-soft leading-relaxed">{kurs.leistungsnachweis}</p>
              </div>
            </section>
          )}

          {kurs.ects_breakdown && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">ECTS-Aufwand</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm overflow-hidden">
                {Object.entries(kurs.ects_breakdown).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between px-4 py-2.5 border-b border-line last:border-0">
                    <span className="text-sm text-ink-muted">{key.replace(/_/g, " ")}</span>
                    <span className="font-mono text-sm text-ink-soft font-medium">{val}h</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {kurs.weitere_informationen && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Weitere Informationen</h2>
              <div className="bg-surface-sunken border border-line rounded-xl p-5">
                <p className="text-sm text-ink-muted leading-relaxed">{kurs.weitere_informationen}</p>
              </div>
            </section>
          )}

          {kurs.literatur && kurs.literatur.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Literatur</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm px-5">
                {kurs.literatur.map((l, i) => <LiteraturRow key={i} l={l} />)}
              </div>
            </section>
          )}
        </div>

        {/* Right sidebar */}
        <div className="space-y-5">
          {kurs.vortragende && kurs.vortragende.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Vortragende</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm divide-y divide-line">
                {kurs.vortragende.map((v) => (
                  <div key={v} className="px-4 py-2.5 text-sm text-ink-soft">{v}</div>
                ))}
              </div>
            </section>
          )}

          {kurs.vorkenntnisse_tiss && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Vorkenntnisse</h2>
              <div className="bg-surface-raised border border-line rounded-xl shadow-sm p-4">
                <p className="text-sm text-ink-soft leading-relaxed">{kurs.vorkenntnisse_tiss}</p>
              </div>
            </section>
          )}

          {kurs.tipps && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Tipps</h2>
              <div className="bg-warning-soft border border-warning-line rounded-xl p-4">
                <p className="text-sm text-warning leading-relaxed">{kurs.tipps}</p>
              </div>
            </section>
          )}

          {kurs.notiz && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Notiz</h2>
              <div className="bg-surface-raised border border-line rounded-xl p-4">
                <p className="text-sm text-ink-muted leading-relaxed italic">{kurs.notiz}</p>
              </div>
            </section>
          )}

          {kurs.pruefungsstrategie && Object.keys(kurs.pruefungsstrategie).length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Prüfungsstrategie</h2>
              <div className="bg-surface-raised border border-line rounded-xl p-4 space-y-3">
                {Object.entries(kurs.pruefungsstrategie).map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] font-semibold text-ink-faint uppercase tracking-wider mb-0.5">
                      {k.replace(/_/g, " ")}
                    </p>
                    <p className="text-sm text-ink-soft">{typeof v === "string" ? v : JSON.stringify(v)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
