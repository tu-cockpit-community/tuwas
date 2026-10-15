"use client";

import { useId, useMemo } from "react";
import katex from "katex";
import { alsTex } from "@/lib/lernen/rechnen";
import type { Teil } from "@/lib/lernen/typen";
import { istNeuerTyp } from "@/lib/lernen/bewertung";
import {
  AusgabeEingabe,
  CodeEingabe,
  leereAntwortNeu,
  LueckentextEingabe,
  ReihenfolgeEingabe,
  RichtigFalschEingabe,
  TraceEingabe,
  ZeilenEingabe,
} from "./EingabeJava";

/** Eingabefelder je Antworttyp. Zustand gehoert dem Aufrufer (Aufgabe oder Pruefung). */

export type Antwort = string | string[] | number[];

export function leereAntwort(teil: Teil): Antwort {
  if (istNeuerTyp(teil)) return leereAntwortNeu(teil);
  if (teil.typ === "vektor") return teil.loesung.map(() => "");
  if (teil.typ === "auswahl") return [] as number[];
  return "";
}

function Vorschau({ text }: { text: string }) {
  const html = useMemo(() => {
    const tex = alsTex(text);
    if (!tex) return null;
    try {
      return katex.renderToString(tex, { throwOnError: false });
    } catch {
      return null;
    }
  }, [text]);
  if (!text.trim()) return null;
  return (
    <span className="eingabe-vorschau" aria-hidden="true">
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : <span className="eingabe-unlesbar">?</span>}
    </span>
  );
}

const PLATZHALTER: Partial<Record<Teil["typ"], string>> = {
  zahl: "z. B. 12,6 oder ln(2)/0,055",
  term: "z. B. 3x^2 - 2e^x",
  komplex: "z. B. 3 - 4i",
  menge: "z. B. -2; 3   (leer: {})",
};

interface Props {
  teil: Teil;
  wert: Antwort;
  setze: (a: Antwort) => void;
  label?: React.ReactNode;
  optionen?: React.ReactNode[];
  status?: "ok" | "falsch" | null;
  gesperrt?: boolean;
  onEnter?: () => void;
}

export function Eingabe({ teil, wert, setze, label, optionen, status, gesperrt, onEnter }: Props) {
  const id = useId();
  const zustand = status === "ok" ? "eingabe-ok" : status === "falsch" ? "eingabe-falsch" : "";

  const gemeinsam = { wert, setze, label, optionen, zustand, gesperrt };
  switch (teil.typ) {
    case "ausgabe":
      return <AusgabeEingabe teil={teil} {...gemeinsam} />;
    case "richtigfalsch":
      return <RichtigFalschEingabe teil={teil} {...gemeinsam} />;
    case "lueckentext":
      return <LueckentextEingabe teil={teil} {...gemeinsam} />;
    case "zeilen":
      return <ZeilenEingabe teil={teil} {...gemeinsam} />;
    case "trace":
      return <TraceEingabe teil={teil} {...gemeinsam} />;
    case "reihenfolge":
      return <ReihenfolgeEingabe teil={teil} {...gemeinsam} />;
    case "code":
      return <CodeEingabe teil={teil} {...gemeinsam} />;
  }

  if (teil.typ === "auswahl") {
    const gewaehlt = (wert as number[]) ?? [];
    const mehrfach = teil.mehrfach ?? teil.richtig.length > 1;
    return (
      <fieldset className={`eingabe-auswahl ${zustand}`} disabled={gesperrt}>
        {label ? <legend className="eingabe-label">{label}</legend> : null}
        <p className="eingabe-hilfe">{mehrfach ? "Alle zutreffenden auswählen." : "Eine Antwort auswählen."}</p>
        <div className="auswahl-optionen">
          {teil.optionen.map((o, i) => {
            const an = gewaehlt.includes(i);
            return (
              <label key={i} className={`auswahl-option ${an ? "an" : ""}`}>
                <input
                  type={mehrfach ? "checkbox" : "radio"}
                  name={id}
                  checked={an}
                  onChange={() => setze(mehrfach ? (an ? gewaehlt.filter((g) => g !== i) : [...gewaehlt, i]) : [i])}
                />
                <span className="auswahl-buchstabe" aria-hidden="true">
                  {String.fromCharCode(97 + i)}
                </span>
                <span className="auswahl-text">{optionen?.[i] ?? o}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  if (teil.typ === "vektor") {
    const felder = wert as string[];
    return (
      <div className={`eingabe-zeile ${zustand}`}>
        {label ? <span className="eingabe-label" id={`${id}-l`}>{label}</span> : null}
        <div className="vektor-eingabe" role="group" aria-labelledby={label ? `${id}-l` : undefined}>
          <span className="vektor-klammer" aria-hidden="true">(</span>
          <div className="vektor-felder">
            {felder.map((f, i) => (
              <input
                key={i}
                className="feld feld-klein"
                value={f}
                disabled={gesperrt}
                inputMode="decimal"
                aria-label={teil.namen?.[i] ?? `Komponente ${i + 1}`}
                placeholder={teil.namen?.[i] ?? ""}
                onChange={(e) => setze(felder.map((g, j) => (j === i ? e.target.value : g)))}
                onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
              />
            ))}
          </div>
          <span className="vektor-klammer" aria-hidden="true">)</span>
        </div>
      </div>
    );
  }

  if (teil.typ === "text") {
    return (
      <div className="eingabe-zeile eingabe-text">
        {label ? <label htmlFor={id} className="eingabe-label">{label}</label> : null}
        <textarea
          id={id}
          className="feld feld-text"
          rows={3}
          value={wert as string}
          disabled={gesperrt}
          placeholder="Deine Antwort in Stichworten (wird nicht automatisch bewertet)"
          onChange={(e) => setze(e.target.value)}
        />
      </div>
    );
  }

  const text = wert as string;
  return (
    <div className={`eingabe-zeile ${zustand}`}>
      {label ? <label htmlFor={id} className="eingabe-label">{label}</label> : null}
      <div className="eingabe-feldzeile">
        <input
          id={id}
          className="feld"
          value={text}
          disabled={gesperrt}
          autoComplete="off"
          spellCheck={false}
          placeholder={PLATZHALTER[teil.typ]}
          onChange={(e) => setze(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
        />
        {"einheit" in teil && teil.einheit ? <span className="eingabe-einheit">{teil.einheit}</span> : null}
        {teil.typ !== "menge" ? <Vorschau text={text} /> : null}
      </div>
    </div>
  );
}
