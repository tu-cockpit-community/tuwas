"use client";

import Link from "next/link";
import { faellig, useStand } from "@/lib/lernen/fortschritt";
import { kapitelStand, naechsterSchritt, type MKapitel } from "@/lib/lernen/mastery";

/** "Heute"-Leiste der Kursseite: was als Naechstes dran ist, was faellig ist, wie weit du bist. */
export function KursHeute({ kurs, kapitel }: { kurs: string; kapitel: MKapitel[] }) {
  const stand = useStand(kurs);
  const due = faellig(stand);
  const anzahlFaellig = due.aufgaben.length + due.karten.length;
  const naechster = naechsterSchritt(kapitel, stand);
  const gemeistert = kapitel.reduce((s, k) => s + kapitelStand(k, stand).gemeistert, 0);
  const lektionen = kapitel.reduce((s, k) => s + k.abschnitte.length, 0);

  return (
    <section className="heute" aria-label="Heute">
      <div className="heute-karte heute-haupt">
        <h2>Weiter lernen</h2>
        {naechster ? (
          <>
            <p className="heute-text">
              Kapitel {naechster.kapitel.nummer} {naechster.kapitel.titel}
              <br />
              <strong>
                {naechster.abschnitt.nummer} {naechster.abschnitt.titel}
              </strong>
            </p>
            <Link href={`/lernen/${kurs}/${naechster.kapitel.slug}/${naechster.abschnitt.id}`} className="knopf knopf-primaer">
              Lektion öffnen
            </Link>
          </>
        ) : (
          <p className="heute-text">Alle Lektionen sind gemeistert. Jetzt Prüfungen simulieren.</p>
        )}
      </div>

      <div className="heute-karte">
        <h2>Wiederholen</h2>
        <p className="heute-gross">{anzahlFaellig}</p>
        <p className="heute-text">
          {anzahlFaellig === 0
            ? "Heute ist nichts fällig."
            : `${due.aufgaben.length} Aufgaben und ${due.karten.length} Karten warten. Dauert etwa ${Math.max(5, Math.round(due.aufgaben.length * 3 + due.karten.length * 1))} Minuten.`}
        </p>
        {anzahlFaellig > 0 ? (
          <Link href={`/lernen/${kurs}/wiederholen`} className="knopf">
            Jetzt wiederholen
          </Link>
        ) : null}
      </div>

      <div className="heute-karte">
        <h2>Lernstand</h2>
        <p className="heute-gross">
          {gemeistert} / {lektionen}
        </p>
        <p className="heute-text">Lektionen gemeistert.</p>
      </div>
    </section>
  );
}

/** Hinweis statt Knoepfen: jede Lernaktion landet von selbst im Lernstand-Protokoll (lib/lernen/journal.ts). */
export function LernstandGesichert({ pfad }: { pfad: string }) {
  return (
    <section className="kurs-werkzeuge" aria-labelledby="sichern-titel">
      <h2 id="sichern-titel">Lernstand</h2>
      <p>
        Wird automatisch gesichert: Jede gelöste Aufgabe, jede Karte und jede gelesene Lektion landet sofort in deinem
        Lernstand-Protokoll auf diesem Rechner, dazu eine Kopie pro Tag. Du musst nichts von Hand sichern.
      </p>
      <p className="kurs-werkzeuge-pfad">
        Für einen anderen Rechner diese Datei mitnehmen: <code>{pfad}</code>
      </p>
    </section>
  );
}
