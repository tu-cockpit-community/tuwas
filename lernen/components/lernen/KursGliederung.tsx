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

/* Breite der Spalte in px (UI-Praeferenz wie oben); null heisst Standardbreite aus dem CSS */
const BREITE_SCHLUESSEL = "lernen-gliederung-breite";
const MIN_BREITE = 200;
const MAX_BREITE = 560;
const breiteHoerer = new Set<() => void>();
function begrenze(px: number): number {
  return Math.round(Math.min(MAX_BREITE, Math.max(MIN_BREITE, px)));
}
function liesBreite(): number | null {
  try {
    const wert = Number(localStorage.getItem(BREITE_SCHLUESSEL));
    return wert > 0 ? begrenze(wert) : null;
  } catch {
    return null;
  }
}
function abonniereBreite(h: () => void) {
  breiteHoerer.add(h);
  window.addEventListener("storage", h);
  return () => {
    breiteHoerer.delete(h);
    window.removeEventListener("storage", h);
  };
}
function setzeBreite(px: number | null) {
  try {
    if (px === null) localStorage.removeItem(BREITE_SCHLUESSEL);
    else localStorage.setItem(BREITE_SCHLUESSEL, String(begrenze(px)));
  } catch {
    /* ohne Speicher gilt die Breite nur bis zum naechsten Laden */
  }
  breiteHoerer.forEach((h) => h());
}

/**
 * Griff am rechten Rand der Gliederung, wie der zwischen Seitenleiste und Inhalt in TUWAS: ziehen verstellt die
 * Breite, Pfeiltasten in 16px-Schritten, Doppelklick setzt auf die Standardbreite zurueck.
 */
function BreitenGriff({ rahmen, breite, onZiehen }: { rahmen: React.RefObject<HTMLDivElement | null>; breite: number | null; onZiehen: (px: number | null) => void }) {
  const zieht = useRef(false);
  const ende = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!zieht.current) return;
    zieht.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    document.body.classList.remove("gliederung-zieht");
    const aside = rahmen.current?.querySelector(".kurs-gliederung");
    setzeBreite(aside ? aside.getBoundingClientRect().width : null);
    onZiehen(null);
  };
  const aktuell = () => breite ?? rahmen.current?.querySelector(".kurs-gliederung")?.getBoundingClientRect().width ?? 280;
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Breite der Gliederung"
      aria-valuemin={MIN_BREITE}
      aria-valuemax={MAX_BREITE}
      aria-valuenow={Math.round(aktuell())}
      title="Breite der Gliederung: ziehen zum Verstellen, Doppelklick setzt zurück"
      tabIndex={0}
      className="gliederung-griff"
      onPointerDown={(e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        zieht.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        document.body.classList.add("gliederung-zieht");
      }}
      onPointerMove={(e) => {
        const links = rahmen.current?.getBoundingClientRect().left;
        if (zieht.current && links !== undefined) onZiehen(begrenze(e.clientX - links));
      }}
      onPointerUp={ende}
      onPointerCancel={ende}
      onLostPointerCapture={ende}
      onDoubleClick={() => setzeBreite(null)}
      onKeyDown={(e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault();
        setzeBreite(aktuell() + (e.key === "ArrowLeft" ? -16 : 16));
      }}
    />
  );
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
  const rahmen = useRef<HTMLDivElement>(null);
  const gespeicherteBreite = useSyncExternalStore(abonniereBreite, liesBreite, () => null);
  // Waehrend des Ziehens nur im Zustand, gespeichert wird beim Loslassen
  const [gezogen, setGezogen] = useState<number | null>(null);
  const breite = gezogen ?? gespeicherteBreite;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (offen && !d.open) d.showModal();
    if (!offen && d.open) d.close();
  }, [offen]);

  const zustand = !ort ? "aus" : eingeklappt ? "zu" : "auf";
  return (
    <div
      ref={rahmen}
      className="kurs-rahmen"
      data-gliederung={zustand}
      style={breite !== null ? ({ "--gliederung-breite": `${breite}px` } as React.CSSProperties) : undefined}
    >
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
      {ort && !eingeklappt ? <BreitenGriff rahmen={rahmen} breite={breite} onZiehen={setGezogen} /> : null}
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
