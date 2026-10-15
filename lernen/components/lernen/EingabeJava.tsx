"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import type { TeilVon } from "@/lib/lernen/typen";
import { startReihenfolge, type NeuerTeil } from "@/lib/lernen/bewertung";
import { LUECKE } from "@/lib/lernen/java/quelle";
import { CodeEditor } from "./CodeEditor";
import { JavaCode, JavaTokens } from "./JavaCode";

/**
 * Eingaben der Programmier-Typen (ausgabe, richtigfalsch, lueckentext, zeilen, trace, reihenfolge, code).
 * Antwortformen: ausgabe/code = string, richtigfalsch/lueckentext/trace = string[] (trace zeilenweise
 * flach), zeilen/reihenfolge = number[].
 */

type Antwort = string | string[] | number[];

export function leereAntwortNeu(teil: NeuerTeil): Antwort {
  switch (teil.typ) {
    case "ausgabe":
      return "";
    case "code":
      return teil.vorlage;
    case "richtigfalsch":
      return teil.aussagen.map(() => "");
    case "lueckentext":
      return teil.luecken.map(() => "");
    case "zeilen":
      return [] as number[];
    case "trace": {
      const ab = teil.vorgabe ?? 0;
      return teil.loesung.flatMap((r, i) => r.map((z) => (i < ab ? String(z) : "")));
    }
    case "reihenfolge":
      return startReihenfolge(teil);
  }
}

interface Props<T extends NeuerTeil["typ"]> {
  teil: TeilVon<T>;
  wert: Antwort;
  setze: (a: Antwort) => void;
  label?: React.ReactNode;
  optionen?: React.ReactNode[];
  zustand: string;
  gesperrt?: boolean;
}

function Kopf({ label, id }: { label?: React.ReactNode; id: string }) {
  return label ? (
    <span className="eingabe-label" id={id}>
      {label}
    </span>
  ) : null;
}

export function AusgabeEingabe({ teil, wert, setze, label, zustand, gesperrt }: Props<"ausgabe">) {
  const id = useId();
  return (
    <div className={`eingabe-zeile ${zustand}`}>
      {teil.codeAnzeigen === false ? null : <JavaCode code={teil.code} zeilenNummern />}
      {teil.stdin ? (
        <p className="eingabe-hilfe">
          Eingabe über die Tastatur (System.in): <code className="inline-code">{teil.stdin.replace(/\n/g, "⏎")}</code>
        </p>
      ) : null}
      <label htmlFor={id} className="eingabe-label">
        {label ?? "Was gibt das Programm aus?"}
      </label>
      <textarea
        id={id}
        className="feld feld-code"
        rows={4}
        value={wert as string}
        disabled={gesperrt}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        placeholder="Ausgabe Zeile für Zeile, genau wie auf der Konsole"
        onChange={(e) => setze(e.target.value)}
      />
    </div>
  );
}

export function RichtigFalschEingabe({ teil, wert, setze, label, optionen, zustand, gesperrt }: Props<"richtigfalsch">) {
  const id = useId();
  const w = wert as string[];
  return (
    <fieldset className={`eingabe-rf ${zustand}`} disabled={gesperrt}>
      {label ? <legend className="eingabe-label">{label}</legend> : <legend className="sr-only">Aussagen beurteilen</legend>}
      <p className="eingabe-hilfe">Beurteile jede Aussage mit „richtig“ oder „falsch“.</p>
      <ol className="rf-liste">
        {teil.aussagen.map((a, i) => (
          <li key={i} className="rf-zeile">
            <span className="rf-text" id={`${id}-${i}`}>
              {optionen?.[i] ?? a.text}
            </span>
            <span className="rf-wahl" role="radiogroup" aria-labelledby={`${id}-${i}`}>
              {(["r", "f"] as const).map((v) => (
                <label key={v} className={`rf-knopf ${w[i] === v ? "an" : ""}`}>
                  <input type="radio" name={`${id}-${i}`} checked={w[i] === v} onChange={() => setze(w.map((x, j) => (j === i ? v : x)))} />
                  {v === "r" ? "richtig" : "falsch"}
                </label>
              ))}
            </span>
          </li>
        ))}
      </ol>
    </fieldset>
  );
}

export function LueckentextEingabe({ teil, wert, setze, label, zustand, gesperrt }: Props<"lueckentext">) {
  const id = useId();
  const w = wert as string[];
  const text = teil.code ?? teil.text ?? "";
  const stuecke = text.split(LUECKE);
  const feld = (i: number) => (
    <input
      key={`l${i}`}
      className="luecke"
      value={w[i] ?? ""}
      disabled={gesperrt}
      size={Math.max(6, (w[i] ?? "").length + 1)}
      aria-label={`Lücke ${i + 1}`}
      spellCheck={false}
      autoCapitalize="off"
      autoComplete="off"
      onChange={(e) => setze(w.map((x, j) => (j === i ? e.target.value : x)))}
    />
  );
  return (
    <div className={`eingabe-zeile ${zustand}`} role="group" aria-labelledby={label ? `${id}-l` : undefined}>
      <Kopf label={label} id={`${id}-l`} />
      {teil.code !== undefined ? (
        <pre className="code-block code-java code-luecken">
          <code>
            {stuecke.map((s, i) => (
              <Fragment key={i}>
                <JavaTokens code={s} />
                {i < stuecke.length - 1 ? feld(i) : null}
              </Fragment>
            ))}
          </code>
        </pre>
      ) : (
        <p className="luecken-text">
          {stuecke.map((s, i) => (
            <Fragment key={i}>
              {s}
              {i < stuecke.length - 1 ? feld(i) : null}
            </Fragment>
          ))}
        </p>
      )}
    </div>
  );
}

export function ZeilenEingabe({ teil, wert, setze, label, zustand, gesperrt }: Props<"zeilen">) {
  const id = useId();
  const gewaehlt = (wert as number[]) ?? [];
  const zeilen = teil.code.replace(/\n+$/, "").split("\n");
  return (
    <div className={`eingabe-zeile ${zustand}`} role="group" aria-labelledby={`${id}-l`}>
      <span className="eingabe-label" id={`${id}-l`}>
        {label ?? "Markiere die fehlerhaften Zeilen."}
      </span>
      <p className="eingabe-hilfe">Klick auf eine Zeile markiert sie, ein zweiter Klick hebt die Markierung auf.</p>
      <ol className="zeilen-wahl code-block code-java">
        {zeilen.map((z, i) => {
          const nr = i + 1;
          const an = gewaehlt.includes(nr);
          return (
            <li key={i}>
              <button
                type="button"
                className={`zeilen-knopf ${an ? "an" : ""}`}
                aria-pressed={an}
                disabled={gesperrt}
                onClick={() => setze(an ? gewaehlt.filter((g) => g !== nr) : [...gewaehlt, nr].sort((a, b) => a - b))}
              >
                <span className="code-nr">{nr}</span>
                <span className="zeilen-code">
                  <JavaTokens code={z || " "} />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function TraceEingabe({ teil, wert, setze, label, zustand, gesperrt }: Props<"trace">) {
  const id = useId();
  const w = wert as string[];
  const breite = teil.spalten.length;
  const ab = teil.vorgabe ?? 0;
  const mitLabel = !!teil.zeilen?.length;
  return (
    <div className={`eingabe-zeile ${zustand}`}>
      <Kopf label={label} id={`${id}-l`} />
      <div className="tabelle-huelle trace-huelle">
        <table className="trace-tabelle" aria-labelledby={label ? `${id}-l` : undefined}>
          <thead>
            <tr>
              {mitLabel ? <th scope="col">Schritt</th> : null}
              {teil.spalten.map((s, j) => (
                <th key={j} scope="col">
                  <code>{s}</code>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teil.loesung.map((zeile, i) => (
              <tr key={i} className={i < ab ? "trace-vorgabe" : ""}>
                {mitLabel ? <th scope="row">{teil.zeilen?.[i] ?? ""}</th> : null}
                {zeile.map((_, j) => {
                  const k = i * breite + j;
                  return (
                    <td key={j}>
                      {i < ab ? (
                        <code>{w[k]}</code>
                      ) : (
                        <input
                          className="trace-feld"
                          value={w[k] ?? ""}
                          disabled={gesperrt}
                          aria-label={`${teil.zeilen?.[i] ?? `Zeile ${i + 1}`}, ${teil.spalten[j]}`}
                          spellCheck={false}
                          autoCapitalize="off"
                          autoComplete="off"
                          onChange={(e) => setze(w.map((x, n) => (n === k ? e.target.value : x)))}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ReihenfolgeEingabe({ teil, wert, setze, label, optionen, zustand, gesperrt }: Props<"reihenfolge">) {
  const id = useId();
  const ordnung = (wert as number[]).length === teil.elemente.length ? (wert as number[]) : startReihenfolge(teil);
  const [fokus, setFokus] = useState<{ element: number; richtung: "hoch" | "runter" } | null>(null);
  const [ansage, setAnsage] = useState("");
  const liste = useRef<HTMLOListElement>(null);

  // Nach dem Verschieben bleibt der Fokus auf dem Knopf des bewegten Elements
  useEffect(() => {
    if (!fokus || !liste.current) return;
    const knopf =
      liste.current.querySelector<HTMLButtonElement>(`[data-element="${fokus.element}"][data-richtung="${fokus.richtung}"]:not(:disabled)`) ??
      liste.current.querySelector<HTMLButtonElement>(`[data-element="${fokus.element}"]:not(:disabled)`);
    knopf?.focus();
  }, [fokus, ordnung]);

  function schiebe(pos: number, richtung: "hoch" | "runter") {
    const ziel = richtung === "hoch" ? pos - 1 : pos + 1;
    if (ziel < 0 || ziel >= ordnung.length) return;
    const neu = [...ordnung];
    [neu[pos], neu[ziel]] = [neu[ziel], neu[pos]];
    setze(neu);
    setFokus({ element: ordnung[pos], richtung });
    setAnsage(`Element jetzt an Position ${ziel + 1} von ${ordnung.length}.`);
  }

  return (
    <div className={`eingabe-zeile ${zustand}`} role="group" aria-labelledby={`${id}-l`}>
      <span className="eingabe-label" id={`${id}-l`}>
        {label ?? "Bring die Elemente in die richtige Reihenfolge."}
      </span>
      <p className="eingabe-hilfe">Mit den Pfeilknöpfen nach oben oder unten verschieben.</p>
      <ol className="reihenfolge-liste" ref={liste}>
        {ordnung.map((k, pos) => (
          <li key={k} className="reihenfolge-element">
            <span className="reihenfolge-nr" aria-hidden="true">
              {pos + 1}
            </span>
            <span className="reihenfolge-text" id={`${id}-e${k}`}>
              {optionen?.[k] ?? teil.elemente[k]}
            </span>
            <span className="reihenfolge-knoepfe">
              <button
                type="button"
                className="knopf knopf-klein reihenfolge-knopf"
                data-element={k}
                data-richtung="hoch"
                disabled={gesperrt || pos === 0}
                aria-label={`Nach oben (Position ${pos + 1})`}
                aria-describedby={`${id}-e${k}`}
                onClick={() => schiebe(pos, "hoch")}
              >
                ↑
              </button>
              <button
                type="button"
                className="knopf knopf-klein reihenfolge-knopf"
                data-element={k}
                data-richtung="runter"
                disabled={gesperrt || pos === ordnung.length - 1}
                aria-label={`Nach unten (Position ${pos + 1})`}
                aria-describedby={`${id}-e${k}`}
                onClick={() => schiebe(pos, "runter")}
              >
                ↓
              </button>
            </span>
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">
        {ansage}
      </p>
    </div>
  );
}

const REGEL_TEXT: Record<string, (w: unknown) => string | null> = {
  keineSchleifen: (w) => (w ? "keine Schleifen" : null),
  keineSchleifenIn: (w) => (Array.isArray(w) && w.length ? `keine Schleifen in ${w.join(", ")}` : null),
  keineHilfsmethoden: (w) => (w ? "keine zusätzlichen Methoden" : null),
  keineFelder: (w) => (w ? "keine zusätzlichen Felder (Klassenvariablen)" : null),
  erlaubteApi: (w) => (Array.isArray(w) && w.length ? `nur diese fremden Methoden: ${w.join(", ")}` : null),
  verboteneApi: (w) => (Array.isArray(w) && w.length ? `nicht erlaubt: ${w.join(", ")}` : null),
  keinStringGleichOperator: (w) => (w ? "Strings nicht mit == vergleichen" : null),
  keineArrayKopie: (w) => (w ? "keine fertigen Array-Kopien (clone, arraycopy, Arrays.copyOf)" : null),
  rekursiv: (w) => (Array.isArray(w) && w.length ? `rekursiv lösen: ${w.join(", ")}` : null),
};

export function CodeEingabe({ teil, wert, setze, label, zustand, gesperrt }: Props<"code">) {
  const sichtbar = teil.tests.filter((t) => !t.versteckt);
  const verborgen = teil.tests.length - sichtbar.length;
  const regeln = Object.entries(teil.regeln ?? {})
    .map(([k, v]) => REGEL_TEXT[k]?.(v))
    .filter((x): x is string => !!x);
  return (
    <div className={`eingabe-zeile eingabe-code ${zustand}`}>
      <CodeEditor wert={wert as string} setze={(s) => setze(s)} label={label} gesperrt={gesperrt} />
      <div className="code-eingabe-leiste">
        <button
          type="button"
          className="knopf knopf-leise knopf-klein"
          disabled={gesperrt || wert === teil.vorlage}
          onClick={() => {
            if (window.confirm("Deinen Code verwerfen und die Vorlage wiederherstellen?")) setze(teil.vorlage);
          }}
        >
          Vorlage wiederherstellen
        </button>
      </div>
      {regeln.length ? (
        <p className="eingabe-hilfe">
          <strong>Regeln:</strong> {regeln.join(" · ")}
        </p>
      ) : null}
      <details className="code-testliste">
        <summary>
          Testfälle ({sichtbar.length} sichtbar{verborgen ? `, ${verborgen} verborgen` : ""})
        </summary>
        <ul>
          {sichtbar.map((t, i) => (
            <li key={i}>
              {t.beschreibung ? <span>{t.beschreibung}: </span> : null}
              <code>{t.aufruf ?? "main(…)"}</code>
              {t.erwartet !== undefined ? (
                <>
                  {" "}
                  → <code>{t.erwartet}</code>
                </>
              ) : null}
              {t.stdin !== undefined ? <span> (Eingabe: <code>{t.stdin.replace(/\n/g, "⏎")}</code>)</span> : null}
              {t.stdout !== undefined ? (
                <span>
                  {" "}
                  Ausgabe: <code>{t.stdout.replace(/\n/g, "⏎")}</code>
                </span>
              ) : null}
              {t.zeichnung ? <span> (Zeichnung wird mit der Musterlösung verglichen)</span> : null}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
