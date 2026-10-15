import { connection } from "next/server";
import Link from "next/link";
import { kursIds, ladeKurs as ladeKursInhalt, ladeUebersicht } from "@/lib/lernen/kurs";
import { alleKurse } from "@/lib/db/queries/kurse";
import { lektionenAnzahl } from "@/lib/db/queries/kurs-inhalt";
import { themenAnzahl } from "@/lib/db/queries/lernen";
import { sbpPruefungen } from "@/lib/db/queries/sbp";
import { tuwasDaten } from "@/lib/lernen/angemeldet";
import { baueFaecher } from "@/lib/lernen/faecher";
import { InhaltAktualisieren } from "@/components/InhaltAktualisieren";
import { lokalerStatus } from "@/lib/inhalt/service";
import { AufgabenFortschritt } from "@/components/lernen/Fortschritt";

export const metadata = { title: "Fächer" };

/** Lehrveranstaltungen ohne Inhalte (weder Lernkurs unter content/ noch Lernpfad oder Lernmodul): da, aber ausständig. */
const AUSSTAENDIG = "ausständig";

/**
 * Der Wert, oder bei einem Fehler der Ersatz. Die Seite listet jede Lehrveranstaltung des Nutzers und darf deshalb nie
 * scheitern: eine fehlende Datenbank, eine beschaedigte Kursdatei oder ein kaputter Lernkurs kosten nur ihren Teil.
 */
function sicher<T>(lies: () => T, ersatz: T, was: string): T {
  try {
    return lies();
  } catch (fehler) {
    console.error(`Fächer: ${was} nicht lesbar`, fehler);
    return ersatz;
  }
}

function ects(wert: number | null): string {
  return wert === null ? "–" : String(wert).replace(".", ",");
}

const lektionen = (n: number) => `${n} ${n === 1 ? "Lektion" : "Lektionen"}`;

type Fach = { id: string; titel: string; kapitel: ReturnType<typeof ladeUebersicht> };

/** Zeile eines Faches mit Lernkurs (Kapitel, Lektionen, Aufgaben, Fortschritt). */
function FachZeile({ nr, name, kurz, fach }: { nr: string; name: string; kurz: string; fach: Fach }) {
  const ids = fach.kapitel.flatMap((k) => k.aufgabenIds);
  const anzahlLektionen = fach.kapitel.reduce((n, k) => n + k.abschnitte.length, 0);
  return (
    <>
      <span className="kapitel-nr" aria-hidden="true">
        {nr}
      </span>
      <span className="kapitel-text">
        <span className="kapitel-name">{name}</span>
        {kurz !== name ? <span className="kapitel-kurz">{kurz}</span> : null}
        <span className="kapitel-meta">
          {fach.kapitel.length} Kapitel · {lektionen(anzahlLektionen)} · {ids.length} Aufgaben
        </span>
      </span>
      <span className="kapitel-stand">
        <AufgabenFortschritt kurs={fach.id} ids={ids} kompakt />
      </span>
    </>
  );
}

/** Zeile ohne eigenen Lernkurs: Nummer, Name, Untertitel, Stand rechts (ausständig, Lektionen …). */
function EinfacheZeile({ nr, name, kurz, meta, stand, leise }: { nr: string; name: string; kurz?: string; meta?: string; stand: string; leise: boolean }) {
  return (
    <>
      <span className="kapitel-nr" aria-hidden="true">
        {nr}
      </span>
      <span className="kapitel-text">
        <span className="kapitel-name">{name}</span>
        {kurz ? <span className="kapitel-kurz">{kurz}</span> : null}
        {meta ? <span className="kapitel-meta">{meta}</span> : null}
      </span>
      <span className={`kapitel-stand lernen-pfad${leise ? " lernen-pfad-leise" : ""}`}>{stand}</span>
    </>
  );
}

/** Was ein Kurs der Kursliste ohne eigenen Lernkurs hat: Lektionen im Lernpfad, Themen im Lernmodul, sonst nichts. */
function umfang(kursId: string): { stand: string; hatInhalt: boolean } {
  const anzahlLektionen = sicher(() => lektionenAnzahl(kursId), 0, `Lernpfad von ${kursId}`);
  if (anzahlLektionen > 0) return { stand: `${lektionen(anzahlLektionen)} →`, hatInhalt: true };
  const themen = sicher(() => themenAnzahl(kursId), 0, `Lernmodul von ${kursId}`);
  if (themen > 0) return { stand: `${themen} ${themen === 1 ? "Thema" : "Themen"} →`, hatInhalt: true };
  return { stand: AUSSTAENDIG, hatInhalt: false };
}

export default async function LernenSeite() {
  // liest Kursdateien bei jedem Request, damit Aenderungen ohne Neu-Build sichtbar sind
  await connection();
  const inhalte = new Map<string, Fach & { lva?: string; sbp?: string }>(
    sicher(() => kursIds(), [], "Lernkurse").flatMap((id) => {
      const kurs = sicher(() => ladeKursInhalt(id), null, `Lernkurs ${id}`);
      const kapitel = kurs ? sicher(() => ladeUebersicht(id), null, `Kapitel von ${id}`) : null;
      return kurs && kapitel ? [[id, { id, titel: kurs.titel, lva: kurs.lva, sbp: kurs.sbp, kapitel }] as const] : [];
    }),
  );
  const ansicht = baueFaecher({
    kurse: sicher(() => alleKurse(), [], "Kursliste"),
    pruefungen: sicher(() => sbpPruefungen(), [], "SBP-Prüfungen"),
    inhalte: [...inhalte.values()],
    tuwas: tuwasDaten(),
    hatLernpfad: (id) => umfang(id).hatInhalt,
  });
  const inhaltStand = sicher(() => lokalerStatus(), null, "Inhaltsstand");

  return (
    <div className="lern-seite">
      <header className="kurs-kopf">
        <p className="kurs-unter">TU Wien · Bachelor Informatik</p>
        <h1 className="kurs-titel">Fächer</h1>
        <p className="hub-stand">
          {ansicht.anzahlKurse} Lehrveranstaltungen{ansicht.sbp?.length ? ` · ${ansicht.sbp.length} Prüfungen der Studienberechtigung` : ""}
        </p>
      </header>

      {ansicht.sbp && ansicht.sbp.length > 0 ? (
        <section className="teil" aria-labelledby="modul-sbp">
          <h2 id="modul-sbp" className="teil-titel">
            Studienberechtigungsprüfung
          </h2>
          <ol className="kapitel-liste">
            {ansicht.sbp.map(({ pruefung: p, inhaltId, wahlfach }, i) => {
              const fach = inhaltId ? inhalte.get(inhaltId) : undefined;
              return (
                <li key={p.id}>
                  {fach ? (
                    <Link href={`/lernen/${fach.id}`} className="kapitel-zeile">
                      <FachZeile nr={String(i + 1)} name={p.bezeichnung} kurz={fach.titel} fach={fach} />
                    </Link>
                  ) : wahlfach ? (
                    // Die LVA gehoert in die StEOP und steht dort als Kurs; hier nur der Hinweis, dass sie die Pruefung erfuellt.
                    <div className="kapitel-zeile">
                      <EinfacheZeile
                        nr={String(i + 1)}
                        name={p.bezeichnung}
                        kurz={`über die StEOP: ${wahlfach.name}`}
                        meta={`${wahlfach.lva_nummer} · zählt doppelt`}
                        stand="in der StEOP"
                        leise
                      />
                    </div>
                  ) : (
                    <div className="kapitel-zeile">
                      <EinfacheZeile nr={String(i + 1)} name={p.bezeichnung} kurz={p.beschreibung} stand={AUSSTAENDIG} leise />
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
            {zeilen.map(({ kurs: k, inhaltId }) => {
              const fach = inhaltId ? inhalte.get(inhaltId) : undefined;
              const lva = k.lva_nummer.includes("TBD") || k.lva_nummer === "variabel" ? null : k.lva_nummer;
              const u = fach ? null : umfang(k.id);
              return (
                <li key={k.id}>
                  {fach ? (
                    <Link href={`/lernen/${fach.id}`} className="kapitel-zeile">
                      <FachZeile nr={ects(k.ects)} name={fach.titel} kurz={`${ects(k.ects)} ECTS`} fach={fach} />
                    </Link>
                  ) : (
                    <Link href={u!.hatInhalt ? `/kurse/${k.id}/lernpfad` : `/kurse/${k.id}`} className="kapitel-zeile">
                      <EinfacheZeile
                        nr={ects(k.ects)}
                        name={k.name}
                        meta={`${lva ? `${lva} · ` : ""}${ects(k.ects)} ECTS`}
                        stand={u!.stand}
                        leise={!u!.hatInhalt}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      {ansicht.weitere.length > 0 ? (
        <section className="teil" aria-labelledby="modul-weitere">
          <h2 id="modul-weitere" className="teil-titel">
            Weitere Lehrveranstaltungen
          </h2>
          <ol className="kapitel-liste">
            {ansicht.weitere.map((z) => {
              const fach = z.inhaltId ? inhalte.get(z.inhaltId) : undefined;
              const meta = [z.lva, z.typ, z.ects !== null ? `${ects(z.ects)} ECTS` : null].filter(Boolean).join(" · ");
              return (
                <li key={z.lva}>
                  {fach ? (
                    <Link href={`/lernen/${fach.id}`} className="kapitel-zeile">
                      {/* ohne Titel von TUWAS (nur die Nummer) gilt der Titel des Lernkurses */}
                      <FachZeile nr={ects(z.ects)} name={z.titel === z.lva ? fach.titel : z.titel} kurz={meta} fach={fach} />
                    </Link>
                  ) : (
                    <div className="kapitel-zeile">
                      <EinfacheZeile nr={ects(z.ects)} name={z.titel} meta={meta} stand={AUSSTAENDIG} leise />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ) : null}

      {inhaltStand ? <InhaltAktualisieren anfang={inhaltStand} /> : null}
    </div>
  );
}
