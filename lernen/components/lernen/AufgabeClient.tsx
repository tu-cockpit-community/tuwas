"use client";

import type { Aufgabe as AufgabeDaten, Teil } from "@/lib/lernen/typen";
import { Aufgabe, type TeilRender } from "./Aufgabe";
import { Md } from "./Md";
import { Plot } from "./Plot";
import { musterAlsBlock, musterMd, optionenTexte, schritteAus } from "./aufgabeText";

/** Aufgabe aus Rohdaten im Browser rendern (Wiederholung, Vorwissen-Check, Suche). */

export function teilRenderClient(t: Teil): TeilRender {
  return {
    label: t.label ? <Md inline>{t.label}</Md> : undefined,
    optionen: optionenTexte(t)?.map((o, i) => <Md key={i} inline>{o}</Md>),
    muster: musterMd(t),
    musterBlock: musterAlsBlock(t),
    fehler: t.typ !== "text" ? t.fehler?.map((f) => f.meldung) : undefined,
  };
}

export function AufgabeClient({
  kurs,
  aufgabe,
  nummer,
  beiErgebnis,
}: {
  kurs: string;
  aufgabe: AufgabeDaten;
  nummer?: string;
  beiErgebnis?: (richtig: boolean) => void;
}) {
  return (
    <Aufgabe
      kurs={kurs}
      id={aufgabe.id}
      nummer={nummer}
      titel={aufgabe.titel}
      niveau={aufgabe.niveau}
      quelle={aufgabe.quelle}
      punkte={aufgabe.punkte}
      art={aufgabe.art}
      angabe={<Md>{aufgabe.angabe}</Md>}
      plot={aufgabe.plot ? <Plot spec={aufgabe.plot} /> : undefined}
      teile={aufgabe.teile}
      teilRender={aufgabe.teile.map(teilRenderClient)}
      hinweise={aufgabe.hinweise}
      schritte={schritteAus(aufgabe.loesung)}
      gefuehrt={aufgabe.gefuehrt?.map((g) => ({
        text: <Md>{g.text}</Md>,
        teil: g.teil,
        teilRender: g.teil ? teilRenderClient(g.teil) : undefined,
        erklaerung: g.erklaerung,
      }))}
      beiErgebnis={beiErgebnis}
    />
  );
}
