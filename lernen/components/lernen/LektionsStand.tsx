"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStand } from "@/lib/lernen/fortschritt";
import { abschnittStand, MASTERY_QUOTE, type MAbschnitt } from "@/lib/lernen/mastery";

/** Stand der aktuellen Lektion am Seitenende: wie viele Uebungen fehlen noch bis "gemeistert". */
export function LektionsBilanz({ kurs, kapitel, lektion }: { kurs: string; kapitel: string; lektion: MAbschnitt }) {
  const stand = useStand(kurs);
  const st = abschnittStand(lektion, stand, `${kapitel}#${lektion.id}`);
  const noetig = Math.max(0, Math.ceil(st.gesamt * MASTERY_QUOTE) - st.geloest);
  let text: string;
  if (st.gesamt === 0) text = "Diese Lektion hat keine Übungen. Lies sie in Ruhe und mach dann weiter.";
  else if (st.gemeistert) text = `Gemeistert: ${st.geloest} von ${st.gesamt} Übungen selbst gelöst. Die Lektion kommt später zur Wiederholung.`;
  else if (st.geloest === 0) text = `Löse mindestens ${Math.ceil(st.gesamt * MASTERY_QUOTE)} der ${st.gesamt} Übungen selbst, dann sitzt die Lektion.`;
  else text = `${st.geloest} von ${st.gesamt} Übungen gelöst. Noch ${noetig}, dann gilt die Lektion als gemeistert.`;
  return (
    <div className="lektion-stand-box" role="status">
      <p>{text}</p>
    </div>
  );
}

/** Pfeiltasten blaettern, solange kein Eingabefeld den Fokus hat und kein Widget die Taste selbst verbraucht. */
export function Tastenblaettern({ zurueck, weiter }: { zurueck?: string; weiter?: string }) {
  const router = useRouter();
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      // defaultPrevented: z. B. ziehbare Punkte in Widgets bewegen sich mit den Pfeiltasten
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || t?.closest("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowRight" && weiter) router.push(weiter);
      if (e.key === "ArrowLeft" && zurueck) router.push(zurueck);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [router, zurueck, weiter]);
  return null;
}

/** Lektionsliste auf der Kapiteluebersicht mit Mastery-Marken. */
export function LektionsListe({ kurs, kapitel, lektionen }: { kurs: string; kapitel: string; lektionen: MAbschnitt[] }) {
  const stand = useStand(kurs);
  return (
    <ol className="lektionen">
      {lektionen.map((l) => {
        const st = abschnittStand(l, stand, `${kapitel}#${l.id}`);
        return (
          <li key={l.id}>
            <Link href={`/lernen/${kurs}/${kapitel}/${l.id}`} className="lektion-zeile">
              <span className={`lektion-marke ${st.gemeistert ? "gemeistert" : st.begonnen ? "begonnen" : ""}`} aria-hidden="true">
                {st.gemeistert ? "✓" : l.nummer.split(".").pop()}
              </span>
              <span>
                <span className="lektion-name">{l.titel}</span>
                <span className="lektion-info">
                  {st.gesamt ? `${st.gesamt} Übungen` : "Lesen"}
                  {st.gemeistert ? " · gemeistert" : st.begonnen ? " · begonnen" : ""}
                </span>
              </span>
              <span className="lektion-stand">{st.gesamt ? `${st.geloest}/${st.gesamt}` : ""}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

/** "Weiter"-Knopf: erste nicht gemeisterte Lektion des Kapitels. */
export function KapitelWeiter({ kurs, kapitel, lektionen }: { kurs: string; kapitel: string; lektionen: MAbschnitt[] }) {
  const stand = useStand(kurs);
  const ziel = lektionen.find((l) => !abschnittStand(l, stand, `${kapitel}#${l.id}`).gemeistert) ?? lektionen[0];
  const begonnen = lektionen.some((l) => abschnittStand(l, stand, `${kapitel}#${l.id}`).begonnen);
  if (!ziel) return null;
  return (
    <Link href={`/lernen/${kurs}/${kapitel}/${ziel.id}`} className="knopf knopf-primaer knopf-gross">
      {begonnen ? `Weiter mit ${ziel.nummer} ${ziel.titel}` : `Mit Lektion ${ziel.nummer} beginnen`}
    </Link>
  );
}
