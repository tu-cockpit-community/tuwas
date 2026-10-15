"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useStand, type Stand } from "@/lib/lernen/fortschritt";
import { abschnittStand, type MAbschnitt } from "@/lib/lernen/mastery";

/** Kapitel in Kurzform fuer Gliederung und Brotkrumen (vom Layout aus ladeUebersicht gebaut). */
export interface GliederungKapitel {
  slug: string;
  nummer: number;
  titel: string;
  abschnitte: MAbschnitt[];
}

/** Bereichsseiten eines Kurses: dort gibt es keine Gliederung und keinen Kapitel-Krumen. */
const BEREICHE = new Set(["wiederholen", "training", "pruefung", "muendlich", "formeln", "glossar", "suche"]);

/** Aktuelles Kapitel und aktuelle Lektion aus dem Pfad; null ausserhalb von Kapitel- und Lektionsseiten. */
export function ortImKurs(pfad: string, fach: string): { kapitel: string; lektion: string | null } | null {
  const basis = `/lernen/${fach}/`;
  if (!pfad.startsWith(basis)) return null;
  const teile = pfad.slice(basis.length).split("/").filter(Boolean);
  if (teile.length < 1 || teile.length > 2 || BEREICHE.has(teile[0])) return null;
  const entschluesselt = teile.map((t) => {
    try {
      return decodeURIComponent(t);
    } catch {
      return t;
    }
  });
  return { kapitel: entschluesselt[0], lektion: entschluesselt[1] ?? null };
}

export function kapitelKurz(k: { nummer: number; titel: string }): string {
  return `${String(k.nummer).padStart(2, "0")} ${k.titel}`;
}

/* Eingeklappt-Praeferenz der breiten Spalte (UI-Praeferenz, kein Lernstand) */
const SCHLUESSEL = "lernen-gliederung";
const hoerer = new Set<() => void>();
function liesEingeklappt(): boolean {
  try {
    return localStorage.getItem(SCHLUESSEL) === "zu";
  } catch {
    return false;
  }
}
function abonniereEingeklappt(h: () => void) {
  hoerer.add(h);
  window.addEventListener("storage", h);
  return () => {
    hoerer.delete(h);
    window.removeEventListener("storage", h);
  };
}
function setzeEingeklappt(zu: boolean) {
  try {
    localStorage.setItem(SCHLUESSEL, zu ? "zu" : "auf");
  } catch {
    /* ohne Speicher gilt die Wahl nicht ueber die Seite hinaus */
  }
  hoerer.forEach((h) => h());
}

function GliederungsListe({ fach, kapitel, stand, ort }: { fach: string; kapitel: GliederungKapitel[]; stand: Stand; ort: { kapitel: string; lektion: string | null } }) {
  return (
    <ol className="gliederung-kapitel">
      {kapitel.map((k) => {
        const st = k.abschnitte.map((a) => abschnittStand(a, stand, `${k.slug}#${a.id}`));
        const gemeistert = st.filter((x) => x.gemeistert).length;
        const aktuell = k.slug === ort.kapitel;
        return (
          <li key={k.slug}>
            <details open={aktuell}>
              <summary>
                <span className="gliederung-nr" aria-hidden="true">
                  {String(k.nummer).padStart(2, "0")}
                </span>
                <span className="gliederung-name">
                  <span className="sr-only">Kapitel {k.nummer}: </span>
                  {k.titel}
                </span>
                <span className={`gliederung-stand${k.abschnitte.length && gemeistert === k.abschnitte.length ? " fertig" : ""}`}>
                  {gemeistert}/{k.abschnitte.length}
                  <span className="sr-only"> Lektionen gemeistert</span>
                </span>
              </summary>
              <ol className="gliederung-lektionen">
                <li>
                  <Link
                    href={`/lernen/${fach}/${k.slug}`}
                    aria-current={aktuell && !ort.lektion ? "page" : undefined}
                    className="gliederung-kapitelseite"
                  >
                    Kapitelübersicht
                  </Link>
                </li>
                {k.abschnitte.map((a, i) => {
                  const s = st[i];
                  const hier = aktuell && a.id === ort.lektion;
                  return (
                    <li key={a.id}>
                      <Link href={`/lernen/${fach}/${k.slug}/${a.id}`} aria-current={hier ? "page" : undefined}>
                        <span className={`gliederung-marke${s.gemeistert ? " gemeistert" : s.begonnen ? " begonnen" : ""}`} aria-hidden="true">
                          {s.gemeistert ? "✓" : ""}
                        </span>
                        <span>
                          {a.titel}
                          {s.gemeistert ? <span className="sr-only"> (gemeistert)</span> : s.begonnen ? <span className="sr-only"> (begonnen)</span> : null}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </details>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Gliederung des Kurses auf Kapitel- und Lektionsseiten. Liegt im Kurs-Layout und bleibt beim Blaettern gemountet
 * (Scrollposition bleibt). Breit (>= 1100px): klebende linke Spalte, einklappbar; schmal: Schublade als <dialog>.
 */
export function KursGliederung({ fach, kapitel, children }: { fach: string; kapitel: GliederungKapitel[]; children: React.ReactNode }) {
  const pfad = usePathname();
  const ort = ortImKurs(pfad, fach);
  const stand = useStand(fach);
  const eingeklappt = useSyncExternalStore(abonniereEingeklappt, liesEingeklappt, () => false);
  const [offen, setOffen] = useState(false);
  // Jede Navigation schliesst die Schublade, auch wenn der <dialog> dabei ausgehaengt wird und kein close-Ereignis
  // mehr feuert (Zustand beim Rendern zuruecksetzen, wie React es fuer abgeleiteten Zustand empfiehlt)
  const [letzterPfad, setLetzterPfad] = useState(pfad);
  if (letzterPfad !== pfad) {
    setLetzterPfad(pfad);
    setOffen(false);
  }
  const dialog = useRef<HTMLDialogElement>(null);
  const knopf = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (offen && !d.open) d.showModal();
    if (!offen && d.open) d.close();
  }, [offen]);

  const zustand = !ort ? "aus" : eingeklappt ? "zu" : "auf";
  return (
    <div className="kurs-rahmen" data-gliederung={zustand}>
      {ort ? (
        <aside className="kurs-gliederung" aria-label="Gliederung des Kurses">
          <div className="gliederung-kopf">
            <span className="gliederung-titel">Gliederung</span>
            <button
              type="button"
              className="gliederung-klappe"
              aria-expanded={!eingeklappt}
              aria-controls="gliederung-spalte"
              onClick={() => setzeEingeklappt(!eingeklappt)}
              title={eingeklappt ? "Gliederung ausklappen" : "Gliederung einklappen"}
            >
              <span aria-hidden="true">{eingeklappt ? "»" : "«"}</span>
              <span className="sr-only">{eingeklappt ? "Gliederung ausklappen" : "Gliederung einklappen"}</span>
            </button>
          </div>
          <div id="gliederung-spalte" className="gliederung-spalte" hidden={eingeklappt}>
            <GliederungsListe fach={fach} kapitel={kapitel} stand={stand} ort={ort} />
          </div>
        </aside>
      ) : null}
      <div className="kurs-rahmen-inhalt">
        {ort ? (
          <div className="gliederung-schublade-leiste">
            <button
              ref={knopf}
              type="button"
              className="gliederung-oeffnen"
              aria-haspopup="dialog"
              aria-expanded={offen}
              onClick={() => setOffen(true)}
            >
              Gliederung
            </button>
          </div>
        ) : null}
        {children}
      </div>
      {ort ? (
        <dialog
          ref={dialog}
          className="gliederung-schublade"
          aria-label="Gliederung des Kurses"
          onClose={() => {
            setOffen(false);
            knopf.current?.focus();
          }}
          onClick={(e) => {
            // Klick auf den Hintergrund (das dialog-Element selbst) schliesst
            if (e.target === e.currentTarget) e.currentTarget.close();
          }}
        >
          <div className="gliederung-schublade-innen">
            <div className="gliederung-kopf">
              <span className="gliederung-titel">Gliederung</span>
              <button type="button" className="gliederung-zu" onClick={() => dialog.current?.close()}>
                Schließen
              </button>
            </div>
            {offen ? <GliederungsListe fach={fach} kapitel={kapitel} stand={stand} ort={ort} /> : null}
          </div>
        </dialog>
      ) : null}
    </div>
  );
}
