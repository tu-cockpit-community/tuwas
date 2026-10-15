import { connection } from "next/server";
import Link from "next/link";
import { kursIds, ladeKurs as ladeKursInhalt, ladeUebersicht } from "@/lib/lernen/kurs";
import { alleKurse } from "@/lib/db/queries/kurse";
import { hatLernpfad } from "@/lib/db/queries/kurs-inhalt";
import { hatLernModul } from "@/lib/db/queries/lernen";
import { sbpPruefungen } from "@/lib/db/queries/sbp";
import { soutDaten } from "@/lib/lernen/angemeldet";
import { baueFaecher } from "@/lib/lernen/faecher";
import { InhaltAktualisieren } from "@/components/InhaltAktualisieren";
import { lokalerStatus } from "@/lib/inhalt/service";
import { AufgabenFortschritt } from "@/components/lernen/Fortschritt";

export const metadata = { title: "Fächer" };

const SBP_STAND: Record<string, string> = {
  nicht_begonnen: "Inhalte folgen",
  anrechnung_beantragt: "Anrechnung beantragt",
  bestanden: "Bestanden",
};

function ects(wert: number): string {
  return String(wert).replace(".", ",");
}

type Fach = { id: string; titel: string; kapitel: ReturnType<typeof ladeUebersicht> };

/** Zeile eines Faches mit Lernkurs (Kapitel, Aufgaben, Fortschritt). */
function FachZeile({ nr, name, kurz, fach }: { nr: string; name: string; kurz: string; fach: Fach }) {
  const ids = fach.kapitel.flatMap((k) => k.aufgabenIds);
  return (
    <>
      <span className="kapitel-nr" aria-hidden="true">
        {nr}
      </span>
      <span className="kapitel-text">
        <span className="kapitel-name">{name}</span>
        {kurz !== name ? <span className="kapitel-kurz">{kurz}</span> : null}
        <span className="kapitel-meta">
          {fach.kapitel.length} Kapitel · {ids.length} Aufgaben
        </span>
      </span>
      <span className="kapitel-stand">
        <AufgabenFortschritt kurs={fach.id} ids={ids} kompakt />
      </span>
    </>
  );
}

/** Zeile einer Pruefung der Studienberechtigung ohne eigenen Lernkurs. */
function SbpZeile({ nr, name, kurz, meta, stand }: { nr: number; name: string; kurz: string; meta?: string; stand: string }) {
  return (
    <>
      <span className="kapitel-nr" aria-hidden="true">
        {nr}
      </span>
      <span className="kapitel-text">
        <span className="kapitel-name">{name}</span>
        <span className="kapitel-kurz">{kurz}</span>
        {meta ? <span className="kapitel-meta">{meta}</span> : null}
      </span>
      <span className="kapitel-stand lernen-pfad lernen-pfad-leise">{stand}</span>
    </>
  );
}

export default async function LernenSeite() {
  // liest Kursdateien bei jedem Request, damit Aenderungen ohne Neu-Build sichtbar sind
  await connection();
  const inhalte = new Map<string, Fach & { lva?: string; sbp?: string }>(
    kursIds().flatMap((id) => {
      const kurs = ladeKursInhalt(id);
      return kurs ? [[id, { id, titel: kurs.titel, lva: kurs.lva, sbp: kurs.sbp, kapitel: ladeUebersicht(id) }] as const] : [];
    })
  );
  const ansicht = baueFaecher({
    kurse: alleKurse(),
    pruefungen: sbpPruefungen(),
    inhalte: [...inhalte.values()],
    sout: soutDaten(),
    hatLernpfad: (id) => hatLernpfad(id) || hatLernModul(id),
  });

  return (
    <div className="lern-seite">
      <header className="kurs-kopf">
        <p className="kurs-unter">TU Wien · Bachelor Informatik</p>
        <h1 className="kurs-titel">Fächer</h1>
        <p className="hub-stand">
          {ansicht.anzahlKurse} Lehrveranstaltungen{ansicht.sbp ? ` · ${ansicht.sbp.length} Prüfungen der Studienberechtigung` : ""}
        </p>
      </header>

      {ansicht.sbp ? (
        <section className="teil" aria-labelledby="modul-sbp">
          <h2 id="modul-sbp" className="teil-titel">
            Studienberechtigungsprüfung
          </h2>
          <ol className="kapitel-liste">
            {ansicht.sbp.map(({ pruefung: p, inhaltId, wahlfach }, i) => {
              const fach = inhaltId ? inhalte.get(inhaltId) : undefined;
              const stand = SBP_STAND[p.status] ?? p.status.replace(/_/g, " ");
              return (
                <li key={p.id}>
                  {fach ? (
                    <Link href={`/lernen/${fach.id}`} className="kapitel-zeile">
                      <FachZeile nr={String(i + 1)} name={p.bezeichnung} kurz={fach.titel} fach={fach} />
                    </Link>
                  ) : wahlfach ? (
                    <Link href={`/kurse/${wahlfach.id}`} className="kapitel-zeile">
                      <SbpZeile nr={i + 1} name={p.bezeichnung} kurz={wahlfach.name} meta={`${wahlfach.lva_nummer} · zählt doppelt`} stand={stand} />
                    </Link>
                  ) : (
                    <div className="kapitel-zeile">
                      <SbpZeile nr={i + 1} name={p.bezeichnung} kurz={p.beschreibung} stand={stand} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ) : null}

      {ansicht.gruppen.map(({ titel, zeilen }) => (
        <section key={titel} className="teil" aria-labelledby={`modul-${titel}`}>
          <h2 id={`modul-${titel}`} className="teil-titel">
            {titel}
          </h2>
          <ol className="kapitel-liste">
            {zeilen.map(({ kurs: k, inhaltId, hatLernpfad: hatPfad }) => {
              const fach = inhaltId ? inhalte.get(inhaltId) : undefined;
              const lva = k.lva_nummer.includes("TBD") || k.lva_nummer === "variabel" ? null : k.lva_nummer;
              return (
                <li key={k.id}>
                  {fach ? (
                    <Link href={`/lernen/${fach.id}`} className="kapitel-zeile">
                      <FachZeile nr={ects(k.ects)} name={fach.titel} kurz={`${ects(k.ects)} ECTS`} fach={fach} />
                    </Link>
                  ) : (
                    <Link href={hatPfad ? `/kurse/${k.id}/lernpfad` : `/kurse/${k.id}`} className="kapitel-zeile">
                      <span className="kapitel-nr" aria-hidden="true">
                        {ects(k.ects)}
                      </span>
                      <span className="kapitel-text">
                        <span className="kapitel-name">
                          <span className="sr-only">{ects(k.ects)} ECTS: </span>
                          {k.name}
                        </span>
                        <span className="kapitel-meta">
                          {lva ? `${lva} · ` : ""}
                          {ects(k.ects)} ECTS
                        </span>
                      </span>
                      <span className={`kapitel-stand lernen-pfad ${hatPfad ? "" : "lernen-pfad-leise"}`}>{hatPfad ? "Zum Lernpfad →" : "Inhalte folgen"}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      <InhaltAktualisieren anfang={lokalerStatus()} />
    </div>
  );
}
