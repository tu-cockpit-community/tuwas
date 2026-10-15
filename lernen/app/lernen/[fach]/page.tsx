import Link from "next/link";
import { notFound } from "next/navigation";
import { ladeBereiche, ladeKurs, ladeUebersicht } from "@/lib/lernen/kurs";
import { KursHeute, LernstandGesichert } from "@/components/lernen/KursHeute";
import { journalPfad } from "@/lib/lernen/journal";
import { Md } from "@/components/lernen/Md";
import { AufgabenFortschritt, KursZahlen } from "@/components/lernen/Fortschritt";

type Props = { params: Promise<{ fach: string }> };

export async function generateMetadata({ params }: Props) {
  const { fach } = await params;
  const kurs = ladeKurs(fach);
  return { title: kurs ? `${kurs.titel} · Lernen` : "Lernen" };
}

function Gewicht({ wert }: { wert: number }) {
  const text = ["kaum", "gelegentlich", "regelmäßig", "fast immer"][wert] ?? "";
  return (
    <span className="gewicht" title={`In der Prüfung: ${text}`}>
      <span className="gewicht-balken" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <i key={n} className={n <= wert ? "an" : ""} />
        ))}
      </span>
      <span className="sr-only">Prüfungsrelevanz: {text}</span>
    </span>
  );
}

export default async function KursSeite({ params }: Props) {
  const { fach } = await params;
  const kurs = ladeKurs(fach);
  if (!kurs) notFound();
  const kapitel = ladeUebersicht(fach);
  const bereiche = ladeBereiche(fach);
  const alleIds = kapitel.flatMap((k) => k.aufgabenIds);
  const karten = kapitel.reduce((s, k) => s + k.karteIds.length, 0);
  const stunden = kapitel.reduce((s, k) => s + (k.meta.stunden ?? 0), 0);
  const teile = Object.entries(kurs.teile);
  // "Einführung in die Programmierung 1 (185.A91)" -> Titel und LVA-Kennung getrennt darstellen
  const titelTeile = kurs.titel.match(/^(.*?)\s*\(([\dA-Z.]+)\)$/);
  const titelText = titelTeile ? titelTeile[1] : kurs.titel;
  const lvaCode = titelTeile?.[2];

  return (
    <div className="kurs-seite">
      <header className="kurs-hero">
        <div className="kurs-hero-text">
          <p className="kurs-unter">
            {lvaCode ? <span className="kurs-code">{lvaCode}</span> : null}
            {kurs.untertitel}
          </p>
          <h1 className="kurs-titel">{titelText}</h1>
        </div>
        <KursZahlen kurs={fach} ids={alleIds} karten={karten} mitPruefung={bereiche.pruefung} />
      </header>

      <KursHeute
        kurs={fach}
        kapitel={kapitel.map((k) => ({
          slug: k.slug,
          nummer: k.meta.nummer,
          titel: k.meta.titel,
          stunden: k.meta.stunden ?? 0,
          pruefungsgewicht: k.meta.pruefungsgewicht,
          abschnitte: k.abschnitte,
        }))}
      />

      <div className="kurs-raster">
        <div className="kurs-kapitel">
          {teile.map(([schluessel, name]) => {
            const liste = kapitel.filter((k) => k.meta.teil === schluessel);
            if (liste.length === 0) return null;
            return (
              <section key={schluessel} className="teil" aria-labelledby={`teil-${schluessel}`}>
                <h2 id={`teil-${schluessel}`} className="teil-titel">
                  {/* Kurze Kennungen (A, B, 1) als "Teil A: ..."; Wortschluessel (physik1: grundlagen) nur mit Namen */}
                  {/^[A-Z0-9]{1,3}$/.test(schluessel) ? `Teil ${schluessel}: ${name}` : name}
                </h2>
                <ol className="kapitel-liste">
                  {liste.map((k) => {
                    const ids = k.aufgabenIds;
                    return (
                      <li key={k.slug}>
                        <Link href={`/lernen/${fach}/${k.slug}`} className="kapitel-zeile">
                          <span className="kapitel-nr" aria-hidden="true">
                            {String(k.meta.nummer).padStart(2, "0")}
                          </span>
                          <span className="kapitel-text">
                            <span className="kapitel-name">
                              <span className="sr-only">Kapitel {k.meta.nummer}: </span>
                              {k.meta.titel}
                            </span>
                            <span className="kapitel-kurz">{k.meta.kurz}</span>
                            <span className="kapitel-meta">
                              {ids.length} Aufgaben
                              {k.meta.stunden ? ` · ca. ${k.meta.stunden} h` : ""}
                              <Gewicht wert={k.meta.pruefungsgewicht} />
                            </span>
                          </span>
                          <span className="kapitel-stand">
                            <AufgabenFortschritt kurs={fach} ids={ids} kompakt />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
          {kapitel.length === 0 ? <p className="leer">Die Kapitel werden gerade geschrieben.</p> : null}
        </div>

        <aside className="kurs-seitenleiste">
          {kurs.pruefung ? (
            <details className="seitenbox pruefungs-info" open>
              <summary>Die Prüfung</summary>
              <dl>
                {kurs.pruefung.form ? (
                  <>
                    <dt>Form</dt>
                    <dd>{kurs.pruefung.form}</dd>
                  </>
                ) : null}
                {kurs.pruefung.dauer_minuten ? (
                  <>
                    <dt>Schriftlich</dt>
                    <dd>{kurs.pruefung.dauer_minuten} Minuten</dd>
                  </>
                ) : null}
                {kurs.pruefung.hilfsmittel ? (
                  <>
                    <dt>Hilfsmittel</dt>
                    <dd>{kurs.pruefung.hilfsmittel}</dd>
                  </>
                ) : null}
                {kurs.pruefung.pruefer ? (
                  <>
                    <dt>Prüfung</dt>
                    <dd>{kurs.pruefung.pruefer}</dd>
                  </>
                ) : null}
              </dl>
            </details>
          ) : null}
          <LernstandGesichert pfad={journalPfad()} />
          {kurs.beschreibung ? (
            <details className="seitenbox kurs-beschreibung">
              <summary>Stoff laut Verordnung</summary>
              <Md>{kurs.beschreibung}</Md>
              {stunden ? <p className="kurs-stunden">Lernzeit gesamt: ca. {stunden} Stunden</p> : null}
            </details>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
