"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Bereiche } from "@/lib/lernen/kurs";
import { faellig, useStand } from "@/lib/lernen/fortschritt";
import { kapitelKurz, ortImKurs, type GliederungKapitel } from "./KursGliederung";

/** Kapitelwechsel im Brotkrumen: <details>-Menue, Escape und Klick daneben schliessen es. */
function KapitelMenue({ fach, kapitel, aktuell }: { fach: string; kapitel: GliederungKapitel[]; aktuell: GliederungKapitel }) {
  const menue = useRef<HTMLDetailsElement>(null);
  const [offen, setOffen] = useState(false);
  const pfad = usePathname();

  // Navigation schliesst das Menue (das toggle-Ereignis setzt den Zustand)
  useEffect(() => {
    if (menue.current) menue.current.open = false;
  }, [pfad]);
  useEffect(() => {
    if (!offen) return;
    const klick = (e: PointerEvent) => {
      if (menue.current && !menue.current.contains(e.target as Node)) menue.current.open = false;
    };
    const taste = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !menue.current) return;
      menue.current.open = false;
      menue.current.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", klick);
    document.addEventListener("keydown", taste);
    return () => {
      document.removeEventListener("pointerdown", klick);
      document.removeEventListener("keydown", taste);
    };
  }, [offen]);

  return (
    <details ref={menue} className="kurs-nav-kapitel" onToggle={(e) => setOffen(e.currentTarget.open)}>
      <summary>
        <span className="sr-only">Kapitel wechseln, aktuell: </span>
        {kapitelKurz(aktuell)}
        <span className="kurs-nav-pfeil" aria-hidden="true">
          ▾
        </span>
      </summary>
      <ol className="kurs-nav-menue">
        {kapitel.map((k) => (
          <li key={k.slug}>
            <Link href={`/lernen/${fach}/${k.slug}`} aria-current={k.slug === aktuell.slug ? "true" : undefined}>
              {kapitelKurz(k)}
            </Link>
          </li>
        ))}
      </ol>
    </details>
  );
}

/** Kursleiste: Brotkrumen (Lernen / Kurs / Kapitel / Lektion) und Reiter in drei Gruppen. */
export function KursNav({
  fach,
  titel,
  bereiche,
  kapitel,
}: {
  fach: string;
  titel: string;
  bereiche: Bereiche;
  kapitel: GliederungKapitel[];
}) {
  const pfad = usePathname();
  const stand = useStand(fach);
  const due = faellig(stand);
  const anzahlFaellig = due.aufgaben.length + due.karten.length;
  const basis = `/lernen/${fach}`;
  const ort = ortImKurs(pfad, fach);
  const aktKapitel = ort ? kapitel.find((k) => k.slug === ort.kapitel) : undefined;
  const aktLektion = ort?.lektion && aktKapitel ? aktKapitel.abschnitte.find((a) => a.id === ort.lektion) : undefined;

  const gruppen = [
    { name: "Lernen", eintraege: [{ href: basis, label: "Übersicht", da: true }] },
    {
      name: "Üben",
      eintraege: [
        { href: `${basis}/wiederholen`, label: "Wiederholen", da: true, zahl: anzahlFaellig },
        { href: `${basis}/training`, label: "Training", da: bereiche.training },
        { href: `${basis}/pruefung`, label: "Prüfungen", da: bereiche.pruefung },
        { href: `${basis}/muendlich`, label: "Mündlich", da: bereiche.muendlich },
      ],
    },
    {
      name: "Nachschlagen",
      eintraege: [
        { href: `${basis}/formeln`, label: "Formeln", da: bereiche.formeln },
        { href: `${basis}/glossar`, label: "Glossar", da: true },
        { href: `${basis}/suche`, label: "Suche", da: true },
      ],
    },
  ]
    .map((g) => ({ ...g, eintraege: g.eintraege.filter((e) => e.da) }))
    .filter((g) => g.eintraege.length > 0);
  const bereichsLinks = gruppen.flatMap((g) => g.eintraege).filter((e) => e.href !== basis);
  const aktiv = (href: string) =>
    href === basis ? pfad === basis || !bereichsLinks.some((e) => pfad.startsWith(e.href)) : pfad.startsWith(href);

  return (
    <nav className="kurs-nav" aria-label={`${titel}: Navigation`}>
      <ol className="kurs-nav-pfad" aria-label="Brotkrumen">
        <li>
          <Link href="/lernen" className="kurs-nav-zurueck">
            Lernen
          </Link>
        </li>
        <li>
          <Link href={basis} className="kurs-nav-titel">
            {titel}
          </Link>
        </li>
        {aktKapitel ? (
          <li>
            <KapitelMenue fach={fach} kapitel={kapitel} aktuell={aktKapitel} />
          </li>
        ) : null}
        {aktLektion ? (
          <li>
            <span className="kurs-nav-lektion" aria-current="page">
              {aktLektion.titel}
            </span>
          </li>
        ) : null}
      </ol>
      <div className="kurs-nav-reiter">
        {gruppen.map((g) => (
          <div key={g.name} className="kurs-nav-gruppe">
            <span className="kurs-nav-gruppe-name" id={`kurs-nav-${g.name}`}>
              {g.name}
            </span>
            <ul aria-labelledby={`kurs-nav-${g.name}`}>
              {g.eintraege.map((e) => {
                const an = aktiv(e.href);
                const zahl = "zahl" in e ? e.zahl : 0;
                return (
                  <li key={e.href}>
                    {/* "page" nur auf der Seite selbst; auf Kapitel- und Lektionsseiten ist "Übersicht" nur der Bereich */}
                    <Link href={e.href} aria-current={an ? (pfad === e.href ? "page" : "true") : undefined} className={an ? "an" : ""}>
                      {e.label}
                      {zahl ? (
                        <span className="kurs-nav-zahl">
                          {zahl}
                          <span className="sr-only"> fällig</span>
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
