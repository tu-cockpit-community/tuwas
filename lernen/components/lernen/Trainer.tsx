"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Drill, DrillAufgabe } from "@/lib/lernen/training";
import { Rng } from "@/lib/lernen/training";
import { zaehleTraining, useStand } from "@/lib/lernen/fortschritt";
import type { Stand } from "@/lib/lernen/stand";
import { Aufgabe } from "./Aufgabe";
import { Md } from "./Md";
import { schritteAus } from "./aufgabeText";
import { teilRenderClient } from "./AufgabeClient";

/** Endlostraining mit Zufallsaufgaben. Laedt die Generatoren des Kurses lazy im Browser. */

const LADER: Record<string, () => Promise<{ DRILLS: Drill[] }>> = {
  ep1: () => import("@/content/ep1/training"),
  mathe3: () => import("@/content/mathe3/training"),
  physik1: () => import("@/content/physik1/training"),
};

interface KapitelInfo {
  slug: string;
  nummer: number;
  titel: string;
}

function poolFuer(drills: Drill[], kapitel: string | null, niveau: number): Drill[] {
  return drills.filter((d) => (!kapitel || d.kapitel === kapitel) && (!niveau || d.niveau === niveau));
}

interface Aktuell {
  drill: Drill;
  seed: number;
  aufgabe: DrillAufgabe;
}

/** Zieht die naechste Aufgabe: `nur` erzeugt neue Zahlen fuer genau diesen Typ, sonst gewinnt zufaellig einer aus dem Pool,
 * Typen mit schlechterer Trefferquote haeufiger. `null`, wenn der Pool leer ist oder der Generator scheitert. */
function ziehe(pool: Drill[], stand: Stand, nur?: Drill): Aktuell | null {
  if (!pool.length && !nur) return null;
  const gewicht = (d: Drill) => {
    const t = stand.training[d.id];
    return 1 + (t ? (t.f * 2) / (t.r + t.f + 1) : 1);
  };
  let drill = nur;
  if (!drill) {
    const summe = pool.reduce((s, d) => s + gewicht(d), 0);
    let z = Math.random() * summe;
    drill = pool.find((d) => (z -= gewicht(d)) <= 0) ?? pool[pool.length - 1];
  }
  const seed = Math.floor(Math.random() * 2 ** 31);
  try {
    return { drill, seed, aufgabe: drill.erzeuge(new Rng(seed)) };
  } catch {
    return null;
  }
}

/** Laedt die Aufgabentypen des Kurses (lazy im Browser) und startet dann das Training. */
export function Trainer({ fach, kapitel }: { fach: string; kapitel: KapitelInfo[] }) {
  const [drills, setDrills] = useState<Drill[] | null>(null);
  useEffect(() => {
    let aktiv = true;
    // scheitert das Nachladen (z. B. offline), nicht ewig "wird geladen" zeigen
    (LADER[fach]?.() ?? Promise.resolve({ DRILLS: [] })).then(
      (m) => aktiv && setDrills(m.DRILLS),
      () => aktiv && setDrills([]),
    );
    return () => {
      aktiv = false;
    };
  }, [fach]);
  if (drills === null) return <p className="leer">Trainingsaufgaben werden geladen …</p>;
  return <Training key={fach} fach={fach} kapitel={kapitel} drills={drills} />;
}

function Training({ fach, kapitel, drills }: { fach: string; kapitel: KapitelInfo[]; drills: Drill[] }) {
  const router = useRouter();
  const gewaehlt = useSearchParams().get("kapitel");
  const stand = useStand(fach);
  const [niveau, setNiveau] = useState<0 | 1 | 2 | 3>(0);
  const [aktuell, setAktuell] = useState<Aktuell | null>(() => ziehe(poolFuer(drills, gewaehlt, 0), stand));
  const [sitzung, setSitzung] = useState({ richtig: 0, falsch: 0 });
  const [gewertet, setGewertet] = useState(false);

  const pool = useMemo(() => poolFuer(drills, gewaehlt, niveau), [drills, gewaehlt, niveau]);

  function neu(nur?: Drill, auswahl: Drill[] = pool) {
    setAktuell(ziehe(auswahl, stand, nur));
    setGewertet(false);
  }

  function ergebnis(ok: boolean) {
    if (!aktuell || gewertet) return;
    setGewertet(true);
    zaehleTraining(fach, aktuell.drill.id, ok);
    setSitzung((s) => (ok ? { ...s, richtig: s.richtig + 1 } : { ...s, falsch: s.falsch + 1 }));
  }

  function waehleThema(k: string | null) {
    router.replace(k ? `?kapitel=${k}` : "?", { scroll: false });
    neu(undefined, poolFuer(drills, k, niveau));
  }

  const kapitelName = (slug: string) => kapitel.find((k) => k.slug === slug);

  return (
    <div className="trainer">
      <div className="trainer-themen" role="group" aria-label="Thema">
        <button type="button" aria-pressed={!gewaehlt} className="thema-karte" onClick={() => waehleThema(null)}>
          <span className="thema-nr" aria-hidden="true">
            ∗
          </span>
          <span className="thema-titel">Alle Kapitel gemischt</span>
          <span className="thema-meta">{drills.length} Aufgabentypen</span>
        </button>
        {kapitel.map((k) => {
          const anzahl = drills.filter((d) => d.kapitel === k.slug).length;
          return (
            <button
              key={k.slug}
              type="button"
              aria-pressed={gewaehlt === k.slug}
              disabled={anzahl === 0}
              className="thema-karte"
              onClick={() => waehleThema(k.slug)}
            >
              <span className="thema-nr" aria-hidden="true">
                {k.nummer}
              </span>
              <span className="thema-titel">{k.titel}</span>
              <span className="thema-meta">{anzahl === 0 ? "noch keine Aufgaben" : `${anzahl} Aufgabentypen`}</span>
            </button>
          );
        })}
      </div>

      <div className="trainer-filter">
        <div className="trainer-feld" role="group" aria-label="Niveau">
          <span>Niveau</span>
          <div className="segment">
            {(["Alle", "Basis", "Standard", "Prüfung"] as const).map((n, i) => (
              <button
                key={n}
                type="button"
                aria-pressed={niveau === i}
                className={niveau === i ? "an" : ""}
                onClick={() => {
                  setNiveau(i as 0 | 1 | 2 | 3);
                  neu(undefined, poolFuer(drills, gewaehlt, i));
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <p className="trainer-sitzung" aria-live="polite">
          Diese Sitzung: <strong>{sitzung.richtig}</strong> richtig, <strong>{sitzung.falsch}</strong> falsch
        </p>
      </div>

      {pool.length === 0 ? (
        <p className="leer">Für diese Auswahl gibt es noch keine Trainingsaufgaben. Wähle ein anderes Thema oder Niveau.</p>
      ) : null}

      {aktuell ? (
        <>
          <p className="trainer-thema">
            {kapitelName(aktuell.drill.kapitel)
              ? `Kapitel ${kapitelName(aktuell.drill.kapitel)!.nummer}: ${kapitelName(aktuell.drill.kapitel)!.titel}`
              : aktuell.drill.kapitel}
          </p>
          <Aufgabe
            key={`${aktuell.drill.id}-${aktuell.seed}`}
            kurs={fach}
            id={`training-${aktuell.drill.id}`}
            titel={aktuell.drill.titel}
            niveau={aktuell.drill.niveau}
            angabe={<Md>{aktuell.aufgabe.angabe}</Md>}
            teile={aktuell.aufgabe.teile}
            teilRender={aktuell.aufgabe.teile.map(teilRenderClient)}
            hinweise={aktuell.aufgabe.hinweis ? [aktuell.aufgabe.hinweis] : []}
            schritte={schritteAus(aktuell.aufgabe.loesung)}
            beiErgebnis={ergebnis}
          />
          <div className="trainer-weiter">
            <button type="button" className="knopf knopf-primaer" onClick={() => neu()}>
              Nächste Aufgabe
            </button>
            <button type="button" className="knopf" onClick={() => neu(aktuell.drill)}>
              Gleicher Typ, neue Zahlen
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
