"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { exportiere, faellig, importiere, useStand } from "@/lib/lernen/fortschritt";
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

/** Fortschritt als Datei sichern und wiederherstellen (zum Mitnehmen oder um einen aelteren Stand zurueckzuholen). */
export function FortschrittSichern({ kurs }: { kurs: string }) {
  const datei = useRef<HTMLInputElement>(null);
  const [meldung, setMeldung] = useState<string | null>(null);
  return (
    <section className="kurs-werkzeuge" aria-labelledby="sichern-titel">
      <h2 id="sichern-titel">Fortschritt sichern</h2>
      <p>Dein Lernstand wird auf diesem Rechner gespeichert. Als Datei nimmst du ihn mit oder holst einen älteren Stand zurück.</p>
      <div className="knopf-reihe">
        <button
          type="button"
          className="knopf knopf-klein"
          onClick={() => {
            const blob = new Blob([exportiere(kurs)], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `lernstand-${kurs}-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
            setMeldung("Sicherung heruntergeladen.");
          }}
        >
          Sicherung herunterladen
        </button>
        <button type="button" className="knopf knopf-klein" onClick={() => datei.current?.click()}>
          Sicherung laden
        </button>
        <input
          ref={datei}
          type="file"
          accept="application/json"
          hidden
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            try {
              importiere(kurs, await f.text());
              setMeldung("Lernstand wiederhergestellt.");
            } catch (err) {
              setMeldung(err instanceof Error ? err.message : "Die Datei konnte nicht gelesen werden.");
            }
            e.target.value = "";
          }}
        />
      </div>
      {meldung ? (
        <p role="status" style={{ marginTop: "0.6rem" }}>
          {meldung}
        </p>
      ) : null}
    </section>
  );
}
