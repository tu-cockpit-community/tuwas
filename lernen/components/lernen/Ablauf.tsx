"use client";

import { Fragment, useEffect, useId, useMemo, useRef, useState } from "react";
import type { Ablauf, Frame, Schritt, Variable, Wert } from "@/lib/lernen/ablauf/typen";
import { javaTokens, type JavaTokenArt } from "@/lib/lernen/javaHighlight";
import { hatZeichnung, leinwand, neueFormen, sichtbareFormen } from "@/lib/lernen/ablauf/zeichnung";
import { JavaTokens } from "./JavaCode";
import { FormElement, formGrenzen } from "./CodeDrawVorschau";

/**
 * Ablauf-Spieler: zeigt einen aufgezeichneten Ablauf (lib/lernen/ablauf/typen.ts) Schritt fuer Schritt. Die Engine
 * hat alles vorher berechnet; hier wird nur geblaettert (vor, zurueck, Wiedergabe). Inline in der Karte, kein Dialog.
 * Wird von AblaufKnopf erst bei Bedarf geladen.
 */

export type AblaufModus = "zeile" | "ausdruck";

/** Indizes der Schritte, die im Modus zu sehen sind: "Zeile fuer Zeile" blendet die feinen Teilausdruck-Schritte aus. */
export function sichtbareSchritte(schritte: Schritt[], modus: AblaufModus): number[] {
  const alle = schritte.map((_, i) => i);
  if (modus === "ausdruck") return alle;
  const grob = alle.filter((i) => !schritte[i].fein);
  return grob.length ? grob : alle;
}

/** Beim Moduswechsel: derselbe Schritt, sonst der naechste sichtbare (das Ende der Anweisung), sonst der letzte. */
export function passenderSchritt(liste: number[], index: number): number {
  if (!liste.length) return 0;
  return liste.find((i) => i >= index) ?? liste[liste.length - 1];
}

const ESCAPES: Record<string, string> = { "\n": "\\n", "\t": "\\t", "\r": "\\r", "\\": "\\\\" };

/** Wert in Java-Schreibweise: Strings mit Anfuehrungszeichen, char mit Apostrophen, Arrays als Kurzform. */
export function wertText(w: Wert): string {
  switch (w.art) {
    case "String":
      return `"${w.text.replace(/[\n\t\r\\"]/g, (z) => ESCAPES[z] ?? `\\${z}`)}"`;
    case "char":
      // Falls die Engine den Apostroph schon mitliefert, nicht doppelt setzen
      if (w.text.length >= 3 && w.text.startsWith("'") && w.text.endsWith("'")) return w.text;
      return `'${w.text.replace(/[\n\t\r\\']/g, (z) => ESCAPES[z] ?? `\\${z}`)}'`;
    case "null":
      return "null";
    case "array":
      return `${w.elementTyp}[${w.elemente.length}]`;
    default:
      return w.text;
  }
}

const WERT_FARBE: Partial<Record<Wert["art"], string>> = {
  String: "jv-str",
  char: "jv-str",
  int: "jv-num",
  long: "jv-num",
  double: "jv-num",
  boolean: "jv-lit",
  null: "jv-lit",
};

interface Stueck {
  text: string;
  art?: JavaTokenArt;
  markiert: boolean;
}

/**
 * Quelle in Zeilen aus hervorgehobenen Stuecken. Die Tokens werden ueber die ganze Quelle gebildet (mehrzeilige
 * Kommentare bleiben richtig gefaerbt) und an Zeilenenden sowie an den Grenzen des Bereichs [von, bis) geteilt.
 */
export function codeZeilen(quelle: string, von: number, bis: number): Stueck[][] {
  const zeilen: Stueck[][] = [[]];
  let pos = 0;
  for (const t of javaTokens(quelle)) {
    const ende = pos + t.text.length;
    let i = pos;
    while (i < ende) {
      if (quelle[i] === "\n") {
        zeilen.push([]);
        i++;
        continue;
      }
      const innen = i >= von && i < bis;
      let j = i + 1;
      while (j < ende && quelle[j] !== "\n" && (j >= von && j < bis) === innen) j++;
      zeilen[zeilen.length - 1].push({ text: quelle.slice(i, j), art: t.art, markiert: innen });
      i = j;
    }
    pos = ende;
  }
  while (zeilen.length > 1 && zeilen[zeilen.length - 1].length === 0) zeilen.pop();
  return zeilen;
}

/** Erklaersatz mit Code in Backticks */
function MitCode({ text }: { text: string }) {
  const teile = text.split("`");
  // ungerade Anzahl Backticks: der letzte bleibt als Zeichen stehen
  if (teile.length % 2 === 0) teile.splice(teile.length - 2, 2, `${teile[teile.length - 2]}\`${teile[teile.length - 1]}`);
  return (
    <>
      {teile.map((t, i) =>
        i % 2 ? (
          <code key={i} className="inline-code">
            {t}
          </code>
        ) : (
          <Fragment key={i}>{t}</Fragment>
        ),
      )}
    </>
  );
}

function CodeAnsicht({ quelle, schritt, besucht, codeRef }: { quelle: string; schritt: Schritt; besucht: Set<number>; codeRef: React.Ref<HTMLPreElement> }) {
  const zeilen = codeZeilen(quelle, schritt.von, schritt.bis);
  return (
    <pre className="code-block code-java ablauf-code" ref={codeRef} tabIndex={0} role="group" aria-label="Code, die aktuelle Zeile ist markiert">
      <code>
        {zeilen.map((stuecke, i) => {
          const nr = i + 1;
          const aktiv = nr === schritt.zeile;
          // aufeinanderfolgende markierte Stuecke in ein <mark>, damit die Hervorhebung durchgehend ist
          const gruppen: { markiert: boolean; stuecke: Stueck[] }[] = [];
          for (const s of stuecke) {
            const letzte = gruppen[gruppen.length - 1];
            if (letzte && letzte.markiert === s.markiert) letzte.stuecke.push(s);
            else gruppen.push({ markiert: s.markiert, stuecke: [s] });
          }
          return (
            <span
              key={i}
              className={`ablauf-zeile${aktiv ? " ist-aktuell" : ""}${besucht.has(nr) && !aktiv ? " ist-besucht" : ""}`}
              data-zeile={nr}
              aria-current={aktiv ? "step" : undefined}
            >
              <span className="code-nr" aria-hidden="true">
                {nr}
              </span>
              <span className="ablauf-zeiger" aria-hidden="true">
                {aktiv ? "▶" : ""}
              </span>
              {gruppen.map((g, k) => {
                const inhalt = g.stuecke.map((s, x) =>
                  s.art ? (
                    <span key={x} className={`jv-${s.art}`}>
                      {s.text}
                    </span>
                  ) : (
                    <Fragment key={x}>{s.text}</Fragment>
                  ),
                );
                return g.markiert ? (
                  <mark key={k} className="ablauf-bereich">
                    {inhalt}
                  </mark>
                ) : (
                  <Fragment key={k}>{inhalt}</Fragment>
                );
              })}
              {"\n"}
            </span>
          );
        })}
      </code>
    </pre>
  );
}

const ART_TEXT: Record<Schritt["art"], string> = {
  anweisung: "Anweisung",
  bedingung: "Bedingung",
  schleife: "Schleife",
  aufruf: "Aufruf",
  rueckkehr: "Rückkehr",
  ausdruck: "Teilausdruck",
  ende: "Ende",
};

function Kette({ formen }: { formen: string[] }) {
  return (
    <ol className="ablauf-kette" aria-label="Auswertung">
      {formen.map((f, i) => {
        const letzte = i === formen.length - 1;
        return (
          <li key={i} className={letzte ? "ist-ergebnis" : undefined}>
            {i > 0 ? (
              <span className="ablauf-pfeil" aria-hidden="true">
                →
              </span>
            ) : null}
            {i > 0 ? <span className="sr-only">wird zu</span> : null}
            <code className="ablauf-form">{letzte ? <strong><JavaTokens code={f} /></strong> : <JavaTokens code={f} />}</code>
          </li>
        );
      })}
    </ol>
  );
}

/** Erklaerung, Umformungskette und Hinweise zum Ende (Fehler, Rueckgabewert) eines Schritts */
function Erklaerung({ ablauf, schritt, nr, von, letzter, erwartet }: { ablauf: Ablauf; schritt: Schritt; nr: number; von: number; letzter: boolean; erwartet?: string }) {
  const abbruchGenannt = /hier bricht das programm ab/i.test(schritt.erklaerung);
  const ergebnisGenannt = ablauf.ergebnis !== undefined && schritt.erklaerung.includes(`Rückgabewert: ${ablauf.ergebnis}`);
  return (
    <div className="ablauf-erklaerung" aria-live="polite" aria-atomic="true">
      <p className="ablauf-schrittkopf">
        <span className="sr-only">
          Schritt {nr} von {von},{" "}
        </span>
        <span className="ablauf-art">{ART_TEXT[schritt.art]}</span>
        {schritt.bedingung !== undefined ? (
          <span className={`ablauf-marke ${schritt.bedingung ? "ist-wahr" : "ist-falsch"}`}>
            <span aria-hidden="true">{schritt.bedingung ? "✓ " : "✗ "}</span>
            {schritt.bedingung ? "wahr" : "falsch"}
          </span>
        ) : null}
        {schritt.rueckgabe !== undefined ? (
          <span className="ablauf-marke">
            gibt zurück: <code>{schritt.rueckgabe}</code>
          </span>
        ) : null}
        <span className="ablauf-zeilennr">Zeile {schritt.zeile}</span>
      </p>
      <p className="ablauf-satz">
        <MitCode text={schritt.erklaerung} />
      </p>
      {schritt.auswertung && schritt.auswertung.length > 1 ? <Kette formen={schritt.auswertung} /> : null}
      {letzter && ablauf.fehler ? (
        <p className="ablauf-fehler">
          {/* Die Engine nennt den Abbruch meist schon im Erklaersatz; dann nicht wiederholen */}
          <span className="ablauf-fehler-art">
            <span aria-hidden="true">✗ </span>
            {abbruchGenannt ? "Laufzeitfehler" : "Fehler"}
          </span>{" "}
          {abbruchGenannt ? null : "Hier bricht das Programm ab: "}
          <code>
            {ablauf.fehler.name}
            {ablauf.fehler.meldung ? `: ${ablauf.fehler.meldung}` : ""}
          </code>{" "}
          (Zeile {ablauf.fehler.zeile}).
        </p>
      ) : null}
      {letzter && ablauf.ergebnis !== undefined && (!ergebnisGenannt || erwartet !== undefined) ? (
        <p className="ablauf-ergebnis">
          {ergebnisGenannt ? null : (
            <>
              Rückgabewert: <code>{ablauf.ergebnis}</code>
            </>
          )}
          {erwartet !== undefined ? (
            <span className="ablauf-erwartet">
              {ergebnisGenannt ? (
                <>
                  Der Test erwartet <code>{erwartet}</code>.
                </>
              ) : (
                <>
                  {" "}
                  (der Test erwartet <code>{erwartet}</code>)
                </>
              )}
            </span>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}

const MAX_ZELLEN = 40;

/** Ausschnitt eines langen Arrays: die ersten 40, ausser eine geaenderte Zelle liegt weiter hinten */
function fenster(laenge: number, geaendert: number[]): [number, number] {
  if (laenge <= MAX_ZELLEN) return [0, laenge];
  const erste = geaendert.find((g) => g >= MAX_ZELLEN);
  const start = erste === undefined ? 0 : Math.min(laenge - MAX_ZELLEN, Math.max(0, erste - MAX_ZELLEN / 2));
  return [start, start + MAX_ZELLEN];
}

function Zellwert({ w }: { w: Wert }) {
  return <span className={WERT_FARBE[w.art]}>{wertText(w)}</span>;
}

function Auslassung({ anzahl }: { anzahl: number }) {
  return (
    <td className="ablauf-auslassung">
      <span aria-hidden="true">…</span>
      <span className="sr-only">{anzahl} weitere</span>
    </td>
  );
}

function ArrayAnsicht({ wert, geaendert }: { wert: Extract<Wert, { art: "array" }>; geaendert: string[] }) {
  const n = wert.elemente.length;
  const zweiD = n > 0 && wert.elemente.every((e) => e.art === "array" || e.art === "null") && wert.elemente.some((e) => e.art === "array");
  if (n === 0) return <span className="ablauf-leer-array">leeres Array (Länge 0)</span>;
  if (!zweiD) {
    const geaenderteIdx = geaendert.map(Number).filter((x) => Number.isInteger(x));
    const [a, b] = fenster(n, geaenderteIdx);
    const idx = Array.from({ length: b - a }, (_, k) => a + k);
    return (
      <div className="ablauf-array">
        <table className="ablauf-zellen">
          <caption className="sr-only">Array mit {n} Elementen</caption>
          <thead>
            <tr>
              {a > 0 ? <td /> : null}
              {idx.map((i) => (
                <th key={i} scope="col">
                  {i}
                </th>
              ))}
              {b < n ? <td /> : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              {a > 0 ? <Auslassung anzahl={a} /> : null}
              {idx.map((i) => {
                const neu = geaenderteIdx.includes(i);
                return (
                  <td key={i} className={neu ? "ist-geaendert" : undefined}>
                    <Zellwert w={wert.elemente[i]} />
                    {neu ? <span className="sr-only"> (geändert)</span> : null}
                  </td>
                );
              })}
              {b < n ? <Auslassung anzahl={n - b} /> : null}
            </tr>
          </tbody>
        </table>
        <p className="ablauf-array-info">Länge {n}</p>
      </div>
    );
  }
  // 2D (auch gezackt): Raster mit Zeilen- und Spaltenindex
  const zeilen = wert.elemente.slice(0, MAX_ZELLEN);
  const breite = Math.min(MAX_ZELLEN, Math.max(...zeilen.map((z) => (z.art === "array" ? z.elemente.length : 0))));
  const spalten = Array.from({ length: breite }, (_, k) => k);
  const laengen = zeilen.map((z) => (z.art === "array" ? z.elemente.length : -1));
  const rechteckig = laengen.every((l) => l === laengen[0]) && n <= MAX_ZELLEN;
  return (
    <div className="ablauf-array">
      <table className="ablauf-zellen ablauf-raster-2d">
        <caption className="sr-only">Zweidimensionales Array mit {n} Zeilen</caption>
        <thead>
          <tr>
            <td />
            {spalten.map((s) => (
              <th key={s} scope="col">
                {s}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {zeilen.map((z, r) => {
            const zeileNeu = geaendert.includes(String(r));
            return (
              <tr key={r} className={zeileNeu ? "ist-geaendert" : undefined}>
                <th scope="row">{r}</th>
                {z.art !== "array" ? (
                  <td colSpan={Math.max(1, breite)} className="ablauf-nullzeile">
                    <span className="jv-lit">null</span>
                  </td>
                ) : (
                  spalten.map((s) => {
                    if (s >= z.elemente.length) return <td key={s} className="ablauf-keine-zelle" />;
                    const neu = zeileNeu || geaendert.includes(`${r},${s}`);
                    return (
                      <td key={s} className={neu ? "ist-geaendert" : undefined}>
                        <Zellwert w={z.elemente[s]} />
                        {neu ? <span className="sr-only"> (geändert)</span> : null}
                      </td>
                    );
                  })
                )}
                {z.art === "array" && z.elemente.length > MAX_ZELLEN ? <Auslassung anzahl={z.elemente.length - MAX_ZELLEN} /> : null}
              </tr>
            );
          })}
          {n > MAX_ZELLEN ? (
            <tr>
              <Auslassung anzahl={n - MAX_ZELLEN} />
            </tr>
          ) : null}
        </tbody>
      </table>
      <p className="ablauf-array-info">{rechteckig ? `${n} Zeilen × ${laengen[0] < 0 ? 0 : laengen[0]} Spalten` : `${n} Zeilen, unterschiedlich lang`}</p>
    </div>
  );
}

function WertAnsicht({ wert, geaendert }: { wert: Wert; geaendert?: string[] }) {
  if (wert.art === "array") return <ArrayAnsicht wert={wert} geaendert={geaendert ?? []} />;
  return (
    <code className={`ablauf-wert ${WERT_FARBE[wert.art] ?? ""}`}>
      {wert.art === "objekt" && wert.farbe ? <span className="ablauf-farbfeld" style={{ background: wert.farbe }} aria-hidden="true" /> : null}
      {wertText(wert)}
    </code>
  );
}

function VariablenTabelle({ variablen, beschriftung }: { variablen: Variable[]; beschriftung: string }) {
  if (!variablen.length) return <p className="ablauf-leer">Hier gibt es gerade keine Variablen.</p>;
  return (
    <div className="ablauf-tabelle-huelle">
      <table className="ablauf-tabelle">
        <caption className="sr-only">{beschriftung}</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Typ</th>
            <th scope="col">Wert</th>
          </tr>
        </thead>
        <tbody>
          {variablen.map((v) => {
            const gleich =
              v.wert.art === "array"
                ? variablen.filter((o) => o !== v && o.wert.art === "array" && o.wert.id === (v.wert as { id: number }).id).map((o) => o.name)
                : [];
            return (
              <tr key={v.name} className={v.neu ? "ist-neu" : v.geaendert ? "ist-geaendert" : undefined}>
                <th scope="row">
                  <code>{v.name}</code>
                  {v.neu ? <span className="ablauf-marke ablauf-marke-neu">neu</span> : v.geaendert ? <span className="ablauf-marke ablauf-marke-geaendert">geändert</span> : null}
                </th>
                <td>
                  <code>{v.typ}</code>
                </td>
                <td>
                  <WertAnsicht wert={v.wert} geaendert={v.geaenderteElemente} />
                  {gleich.length ? (
                    <p className="ablauf-gleich">
                      dasselbe Array wie{" "}
                      {gleich.map((g, i) => (
                        <Fragment key={g}>
                          {i > 0 ? ", " : null}
                          <code>{g}</code>
                        </Fragment>
                      ))}
                    </p>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function kurzWerte(f: Frame): string {
  return f.variablen
    .slice(0, 4)
    .map((v) => `${v.name} = ${wertText(v.wert)}`)
    .concat(f.variablen.length > 4 ? ["…"] : [])
    .join(", ");
}

function Stapel({ frames }: { frames: Frame[] }) {
  const oben = frames.length - 1;
  return (
    <div className="ablauf-feld ablauf-stapel">
      <p className="ablauf-titel">
        Aufrufstapel <span className="ablauf-titel-zusatz">{frames.length} Aufrufe, der oberste läuft gerade</span>
      </p>
      <ol className="ablauf-stapel-liste">
        {frames
          .map((f, k) => ({ f, k }))
          .reverse()
          .map(({ f, k }) => (
            <li key={k} className={`ablauf-karte${k === oben ? " ist-aktiv" : ""}`}>
              <p className="ablauf-karte-kopf">
                <code>{f.methode}</code>
                {k === oben ? <span className="ablauf-marke">läuft</span> : <span className="ablauf-karte-zeile">wartet in Zeile {f.zeile}</span>}
              </p>
              {f.variablen.length ? <p className="ablauf-karte-werte">{kurzWerte(f)}</p> : null}
              {k !== oben && f.variablen.length ? (
                <details className="ablauf-karte-details">
                  <summary>Variablen zeigen</summary>
                  <VariablenTabelle variablen={f.variablen} beschriftung={`Variablen in ${f.methode}`} />
                </details>
              ) : null}
            </li>
          ))}
      </ol>
    </div>
  );
}

/** Konsolentext; mit `zeichen` werden Zeilenenden (¶) und Leerzeichen (·) sichtbar */
function KonsolenText({ text, zeichen }: { text: string; zeichen: boolean }) {
  if (!zeichen) return <>{text}</>;
  const teile = text.split(/(\n| )/);
  return (
    <>
      {teile.map((t, i) =>
        t === "\n" ? (
          <Fragment key={i}>
            <span className="ablauf-sonderzeichen" aria-hidden="true">
              ¶
            </span>
            {"\n"}
          </Fragment>
        ) : t === " " ? (
          <span key={i} className="ablauf-sonderzeichen">
            ·
          </span>
        ) : (
          <Fragment key={i}>{t}</Fragment>
        ),
      )}
    </>
  );
}

function Konsole({ schritt, zeichen, setZeichen, konsoleRef }: { schritt: Schritt; zeichen: boolean; setZeichen: (b: boolean) => void; konsoleRef: React.Ref<HTMLPreElement> }) {
  const id = useId();
  const neu = schritt.neueAusgabe && schritt.ausgabe.endsWith(schritt.neueAusgabe) ? schritt.neueAusgabe : "";
  const alt = schritt.ausgabe.slice(0, schritt.ausgabe.length - neu.length);
  return (
    <div className="ablauf-feld ablauf-konsole-feld">
      <div className="ablauf-titelzeile">
        <p className="ablauf-titel" id={`${id}-t`}>
          Konsole
        </p>
        <label className="ablauf-schalter">
          <input type="checkbox" checked={zeichen} onChange={(e) => setZeichen(e.target.checked)} />
          Zeilenenden ¶ und Leerzeichen · zeigen
        </label>
      </div>
      <pre className="ablauf-konsole" ref={konsoleRef} tabIndex={0} role="group" aria-labelledby={`${id}-t`}>
        <KonsolenText text={alt} zeichen={zeichen} />
        {neu ? (
          <mark className="ablauf-neu">
            <span className="sr-only">neu: </span>
            <KonsolenText text={neu} zeichen={zeichen} />
            {!zeichen && neu.endsWith("\n") ? (
              <span className="ablauf-sonderzeichen ablauf-umbruch-neu" aria-hidden="true">
                ↵
              </span>
            ) : null}
          </mark>
        ) : null}
        <span className="ablauf-cursor" aria-hidden="true">
          ▏
        </span>
      </pre>
      {schritt.ausgabe === "" ? <p className="ablauf-leer">Noch keine Ausgabe.</p> : null}
    </div>
  );
}

/**
 * Rahmen um eine neue Form: etwas groesser als die Form, aber immer innerhalb der Leinwand (eine Form, die bis an den
 * Rand reicht, bekommt ihn innen am Rand; sonst waere er abgeschnitten). Liegt die Form ganz ausserhalb, gibt es keinen.
 */
function Hervorhebung({ f, b, h }: { f: Parameters<typeof formGrenzen>[0]; b: number; h: number }) {
  const g = formGrenzen(f);
  if (!g || g.x + g.b < 0 || g.y + g.h < 0 || g.x > b || g.y > h) return null;
  const rand = Math.max(1, 0.01 * Math.max(b, h));
  const x0 = Math.max(g.x - rand, rand);
  const y0 = Math.max(g.y - rand, rand);
  const x1 = Math.min(g.x + g.b + rand, b - rand);
  const y1 = Math.min(g.y + g.h + rand, h - rand);
  const breite = Math.max(1, x1 - x0);
  const hoehe = Math.max(1, y1 - y0);
  return (
    <>
      <rect className="ablauf-flaeche-halo" x={x0} y={y0} width={breite} height={hoehe} />
      <rect className="ablauf-flaeche-rahmen" x={x0} y={y0} width={breite} height={hoehe} />
    </>
  );
}

const MAX_HERVORGEHOBEN = 40;

/**
 * Zeichenflaeche (CodeDraw): genau die Formen, die bis zu diesem Schritt gezeichnet und nicht durch `clear()` geloescht
 * sind, in Zeichenreihenfolge. Was seit dem vorherigen angezeigten Schritt neu dazukam, bekommt einen gestrichelten
 * Rahmen. Die Leinwand ist wie im Original weiss (auch im Dunkelmodus), die Groesse kommt aus `new CodeDraw(b, h)`.
 */
function Zeichenflaeche({ ablauf, schritt, vorher, zeigtShow }: { ablauf: Ablauf; schritt: Schritt; vorher: Schritt | undefined; zeigtShow: boolean }) {
  const { b, h } = leinwand(ablauf.formen);
  const z = schritt.zeichnung;
  const sichtbar = sichtbareFormen(ablauf, schritt);
  const neu = z ? neueFormen(ablauf, Math.max(vorher?.zeichnung?.anzahl ?? 0, z.ab), z.anzahl) : [];
  const gezeichnet = sichtbar.filter((f) => f.art !== "hintergrund").length;
  const neuGezeichnet = neu.filter((f) => f.art !== "hintergrund").length;
  const geloescht = neu.some((f) => f.art === "hintergrund");
  const ungezeigt = z && zeigtShow ? neueFormen(ablauf, Math.max(z.gezeigt, z.ab), z.anzahl).filter((f) => f.art !== "hintergrund").length : 0;
  const beschreibung = !z
    ? `Zeichenfläche: noch kein Fenster angelegt`
    : `Zeichenfläche ${b} × ${h} Pixel mit ${gezeichnet} ${gezeichnet === 1 ? "Form" : "Formen"}${
        geloescht ? ", gerade gelöscht" : ""
      }${neuGezeichnet ? `, davon ${neuGezeichnet} neu in diesem Schritt` : ""}`;
  return (
    <figure className="ablauf-feld ablauf-flaeche">
      <figcaption className="ablauf-titel">
        Zeichenfläche{" "}
        <span className="ablauf-titel-zusatz">
          {b} × {h}
        </span>
      </figcaption>
      <svg viewBox={`0 0 ${b} ${h}`} role="img" aria-label={beschreibung} className="ablauf-flaeche-svg">
        <rect x={0} y={0} width={b} height={h} fill="#ffffff" />
        {sichtbar.map((f, i) => (
          <FormElement key={i} f={f} />
        ))}
        {/* neu bei jedem Schritt: der Schlüssel startet die Puls-Animation von vorn */}
        <g key={schritt.zeichnung ? `${z!.anzahl}-${z!.ab}-${vorher?.zeichnung?.anzahl ?? 0}` : "leer"} className="ablauf-flaeche-neu">
          {neu.slice(0, MAX_HERVORGEHOBEN).map((f, i) => (
            <Hervorhebung key={i} f={f} b={b} h={h} />
          ))}
        </g>
      </svg>
      {!z ? (
        <p className="ablauf-leer">Noch kein Fenster: Die Zeichenfläche entsteht mit <code>new CodeDraw(…)</code>.</p>
      ) : (
        <p className="ablauf-flaeche-info">
          {gezeichnet === 0 ? "Noch nichts gezeichnet." : `${gezeichnet} ${gezeichnet === 1 ? "Form" : "Formen"} zu sehen.`}
          {neuGezeichnet ? (
            <span className="ablauf-flaeche-neu-text">
              <span className="ablauf-flaeche-legende" aria-hidden="true" />
              {neuGezeichnet === 1 ? "1 neu in diesem Schritt (gestrichelter Rahmen)" : `${neuGezeichnet} neu in diesem Schritt (gestrichelter Rahmen)`}
            </span>
          ) : null}
          {geloescht ? <span className="ablauf-flaeche-neu-text">Gerade gelöscht: Die Fläche ist leer bis auf den Hintergrund.</span> : null}
          {ungezeigt > 0 ? (
            <span className="ablauf-flaeche-hinweis">
              {ungezeigt === 1 ? "1 Form" : `${ungezeigt} Formen`} noch nicht mit <code>show()</code> angezeigt: Im echten Fenster erscheint sie erst danach.
            </span>
          ) : null}
        </p>
      )}
    </figure>
  );
}

const ABGESCHNITTEN: Record<NonNullable<Ablauf["abgeschnitten"]>, string> = {
  schritte: "",
  zeit: " Grund: Die Rechenzeit war zu lang.",
  ausgabe: " Grund: Das Programm gibt sehr viel aus.",
  stapel: " Grund: Es sind zu viele Aufrufe gleichzeitig offen (zu tiefe Rekursion).",
};

/**
 * Bild eines Schritts ohne eigenen Zustand: Code, Erklaerung, Variablen, Stapel, Konsole. Der Spieler setzt die
 * Steuerung dazwischen; einzeln nutzbar (z. B. fuer Tests und eine statische Vorschau).
 */
export function AblaufSchritt({
  ablauf,
  index,
  nr,
  von,
  erwartet,
  zeichen = false,
  setZeichen = () => {},
  steuerung,
  codeRef,
  konsoleRef,
  vorher,
}: {
  ablauf: Ablauf;
  /** Index in ablauf.schritte */
  index: number;
  /** Index des Schritts, der davor angezeigt wurde (im aktuellen Modus); nur fuer das Hervorheben neuer Formen. Fehlt er, gilt index - 1 */
  vorher?: number;
  /** Position im aktuellen Modus (1-basiert) und Anzahl der sichtbaren Schritte, fuer die Ansage */
  nr: number;
  von: number;
  erwartet?: string;
  zeichen?: boolean;
  setZeichen?: (b: boolean) => void;
  steuerung?: React.ReactNode;
  codeRef?: React.Ref<HTMLPreElement>;
  konsoleRef?: React.Ref<HTMLPreElement>;
}) {
  const schritt = ablauf.schritte[index];
  const besucht = new Set(ablauf.schritte.slice(0, index + 1).map((s) => s.zeile));
  const frame = schritt.frames[schritt.frames.length - 1];
  const letzter = index === ablauf.schritte.length - 1;
  const zeichnet = useMemo(() => hatZeichnung(ablauf), [ablauf]);
  // der show()-Hinweis nur, wenn das Programm show() ueberhaupt aufruft (sonst waere er Rauschen)
  const zeigtShow = useMemo(() => ablauf.schritte.some((x) => (x.zeichnung?.gezeigt ?? 0) > 0), [ablauf]);
  const davor = vorher !== undefined ? ablauf.schritte[vorher] : index > 0 ? ablauf.schritte[index - 1] : undefined;
  return (
    <div className="ablauf-raster">
      <div className="ablauf-links">
        <CodeAnsicht quelle={ablauf.quelle} schritt={schritt} besucht={besucht} codeRef={codeRef ?? null} />
        <Erklaerung ablauf={ablauf} schritt={schritt} nr={nr} von={von} letzter={letzter} erwartet={erwartet} />
        {steuerung}
      </div>
      <div className="ablauf-rechts">
        {zeichnet ? <Zeichenflaeche ablauf={ablauf} schritt={schritt} vorher={davor} zeigtShow={zeigtShow} /> : null}
        <div className="ablauf-feld ablauf-variablen">
          <p className="ablauf-titel">
            Variablen{" "}
            {frame ? (
              <span className="ablauf-titel-zusatz">
                in <code>{frame.methode}</code>
              </span>
            ) : null}
          </p>
          <VariablenTabelle variablen={frame?.variablen ?? []} beschriftung={frame ? `Variablen in ${frame.methode}` : "Variablen"} />
        </div>
        {schritt.felder?.length ? (
          <div className="ablauf-feld ablauf-klassenvariablen">
            <p className="ablauf-titel">
              Klassenvariablen <span className="ablauf-titel-zusatz">(static: gehören zur Klasse, alle Methoden sehen sie)</span>
            </p>
            <VariablenTabelle variablen={schritt.felder} beschriftung="Klassenvariablen" />
          </div>
        ) : null}
        {schritt.frames.length > 1 ? <Stapel frames={schritt.frames} /> : null}
        <Konsole schritt={schritt} zeichen={zeichen} setZeichen={setZeichen} konsoleRef={konsoleRef ?? null} />
      </div>
    </div>
  );
}

const TEMPO = { langsam: 1800, normal: 1000, schnell: 400 } as const;
type Tempo = keyof typeof TEMPO;

function Bildzeichen({ art }: { art: "anfang" | "zurueck" | "spielen" | "pause" | "vor" | "ende" }) {
  const pfade: Record<typeof art, React.ReactNode> = {
    anfang: (
      <>
        <rect x="3" y="3" width="2.2" height="10" rx="0.5" />
        <path d="M13 3.5v9L6.5 8z" />
      </>
    ),
    zurueck: <path d="M11.5 3.5v9L5 8z" />,
    spielen: <path d="M5 3v10l8-5z" />,
    pause: (
      <>
        <rect x="4" y="3" width="3" height="10" rx="0.6" />
        <rect x="9" y="3" width="3" height="10" rx="0.6" />
      </>
    ),
    vor: <path d="M4.5 3.5v9L11 8z" />,
    ende: (
      <>
        <path d="M3 3.5v9L9.5 8z" />
        <rect x="10.8" y="3" width="2.2" height="10" rx="0.5" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false">
      {pfade[art]}
    </svg>
  );
}

export interface AblaufSpielerProps {
  ablauf: Ablauf;
  /** Tastatureingabe (stdin), als Kopfzeile gezeigt */
  eingabe?: string;
  /** Erwarteter Rueckgabewert laut Test, neben dem Rueckgabewert gezeigt */
  erwartet?: string;
  onSchliessen?: () => void;
  /** Beim Oeffnen den Fokus in den Spieler setzen (damit die Pfeiltasten sofort gehen) */
  autoFokus?: boolean;
}

export function AblaufSpieler({ ablauf, eingabe, erwartet, onSchliessen, autoFokus = false }: AblaufSpielerProps) {
  const id = useId();
  const [modus, setModus] = useState<AblaufModus>("zeile");
  const [index, setIndex] = useState(() => sichtbareSchritte(ablauf.schritte, "zeile")[0] ?? 0);
  const [laeuft, setLaeuft] = useState(false);
  const [tempo, setTempo] = useState<Tempo>("normal");
  const [zeichen, setZeichen] = useState(false);
  const wurzel = useRef<HTMLElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);
  const konsoleRef = useRef<HTMLPreElement>(null);

  const liste = useMemo(() => sichtbareSchritte(ablauf.schritte, modus), [ablauf.schritte, modus]);
  const pos = Math.max(0, liste.indexOf(index));
  const letzte = liste.length - 1;
  const hatFein = ablauf.schritte.some((s) => s.fein);
  const schritt = ablauf.schritte[index];

  useEffect(() => {
    if (autoFokus) wurzel.current?.focus();
  }, [autoFokus]);

  // aktuelle Zeile im Codefeld sichtbar halten, Konsole ans Ende scrollen (nur die Felder, nicht die Seite)
  useEffect(() => {
    const code = codeRef.current;
    const zeile = code?.querySelector<HTMLElement>(`[data-zeile="${schritt?.zeile}"]`);
    if (code && zeile) {
      const oben = zeile.offsetTop;
      const unten = oben + zeile.offsetHeight;
      if (oben < code.scrollTop) code.scrollTop = Math.max(0, oben - 8);
      else if (unten > code.scrollTop + code.clientHeight) code.scrollTop = unten - code.clientHeight + 8;
    }
    const konsole = konsoleRef.current;
    if (konsole) konsole.scrollTop = konsole.scrollHeight;
  }, [schritt]);

  // Wiedergabe: ein Schritt je Takt, stoppt am Ende
  useEffect(() => {
    if (!laeuft) return;
    const t = window.setTimeout(() => {
      if (pos >= letzte) {
        setLaeuft(false);
        return;
      }
      setIndex(liste[pos + 1]);
      if (pos + 1 >= letzte) setLaeuft(false);
    }, TEMPO[tempo]);
    return () => window.clearTimeout(t);
  }, [laeuft, pos, letzte, liste, tempo]);

  function gehe(p: number) {
    setLaeuft(false);
    setIndex(liste[Math.min(letzte, Math.max(0, p))]);
  }
  function wiedergabe() {
    if (laeuft) return setLaeuft(false);
    // am Ende beginnt die Wiedergabe von vorn
    if (pos >= letzte) setIndex(liste[0]);
    setLaeuft(true);
  }
  function wechsleModus(m: AblaufModus) {
    setModus(m);
    setIndex(passenderSchritt(sichtbareSchritte(ablauf.schritte, m), index));
  }

  function taste(e: React.KeyboardEvent<HTMLElement>) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const ziel = e.target as HTMLElement;
    const tag = ziel.tagName;
    const formular = tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA";
    const eigeneTaste = formular || tag === "BUTTON" || tag === "SUMMARY" || tag === "A";
    if (e.key === "ArrowRight" && !formular) gehe(pos + 1);
    else if (e.key === "ArrowLeft" && !formular) gehe(pos - 1);
    else if (e.key === "Home" && !formular) gehe(0);
    else if (e.key === "End" && !formular) gehe(letzte);
    else if (e.key === " " && !eigeneTaste) wiedergabe();
    else return;
    e.preventDefault();
  }

  if (!schritt) return <p className="ablauf-meldung">Der Ablauf enthält keine Schritte.</p>;

  const knopf = (art: Parameters<typeof Bildzeichen>[0]["art"], beschriftung: string, kuerzel: string, aus: boolean, klick: () => void) => (
    <button
      type="button"
      className="knopf knopf-klein ablauf-taste"
      aria-label={beschriftung}
      title={`${beschriftung} (${kuerzel})`}
      aria-disabled={aus || undefined}
      onClick={() => {
        if (!aus) klick();
      }}
    >
      <Bildzeichen art={art} />
    </button>
  );

  const steuerung = (
    <div className="ablauf-steuerung" role="group" aria-label="Steuerung">
      <div className="ablauf-knoepfe">
        {knopf("anfang", "Zum Anfang", "Pos1", pos === 0, () => gehe(0))}
        {knopf("zurueck", "Schritt zurück", "←", pos === 0, () => gehe(pos - 1))}
        <button
          type="button"
          className="knopf knopf-klein ablauf-taste ablauf-spielen"
          aria-label={laeuft ? "Pause" : "Wiedergabe"}
          title={`${laeuft ? "Pause" : "Wiedergabe"} (Leertaste)`}
          onClick={wiedergabe}
        >
          <Bildzeichen art={laeuft ? "pause" : "spielen"} />
          <span className="ablauf-taste-text">{laeuft ? "Pause" : "Abspielen"}</span>
        </button>
        {knopf("vor", "Schritt vor", "→", pos >= letzte, () => gehe(pos + 1))}
        {knopf("ende", "Ans Ende", "Ende", pos >= letzte, () => gehe(letzte))}
      </div>
      <label className="ablauf-regler">
        <span className="ablauf-regler-text">
          Schritt {pos + 1} von {liste.length}
        </span>
        <input
          type="range"
          min={1}
          max={Math.max(1, liste.length)}
          value={pos + 1}
          aria-valuetext={`Schritt ${pos + 1} von ${liste.length}`}
          onChange={(e) => gehe(Number(e.target.value) - 1)}
        />
      </label>
      <div className="ablauf-optionen">
        <div className="ablauf-modus" role="radiogroup" aria-labelledby={`${id}-modus`}>
          <span className="sr-only" id={`${id}-modus`}>
            Genauigkeit
          </span>
          {(
            [
              ["zeile", "Zeile für Zeile"],
              ["ausdruck", "Ausdruck für Ausdruck"],
            ] as const
          ).map(([m, text]) => {
            const aus = m === "ausdruck" && !hatFein;
            return (
              <label key={m} className={`rf-knopf ablauf-modus-knopf ${modus === m ? "an" : ""} ${aus ? "ist-aus" : ""}`}>
                <input type="radio" name={`${id}-modus`} checked={modus === m} disabled={aus} onChange={() => wechsleModus(m)} />
                {text}
              </label>
            );
          })}
        </div>
        <label className="ablauf-tempo">
          Tempo{" "}
          <select value={tempo} onChange={(e) => setTempo(e.target.value as Tempo)}>
            <option value="langsam">langsam</option>
            <option value="normal">normal</option>
            <option value="schnell">schnell</option>
          </select>
        </label>
      </div>
      {!hatFein ? <p className="ablauf-tasten">Dieser Ablauf hat keine Teilausdrücke: „Ausdruck für Ausdruck“ zeigt nichts zusätzlich.</p> : null}
      <p className="ablauf-tasten">Tastatur im Spieler: ← und → für einen Schritt, Leertaste für die Wiedergabe, Pos1 und Ende für Anfang und Ende.</p>
    </div>
  );

  return (
    <section className="ablauf" aria-label="Ablauf-Spieler" ref={wurzel} tabIndex={-1} onKeyDown={taste}>
      <header className="ablauf-kopf">
        <div className="ablauf-kopf-text">
          <p className="ablauf-name">Ablauf Schritt für Schritt</p>
          {ablauf.vorher ? (
            <p className="ablauf-kopfzeile">
              Vorher: <code>{ablauf.vorher}</code>
            </p>
          ) : null}
          {ablauf.aufruf ? (
            <p className="ablauf-kopfzeile">
              Aufruf: <code>{ablauf.aufruf}</code>
            </p>
          ) : null}
          {eingabe ? (
            <p className="ablauf-kopfzeile">
              Eingabe: <code>{eingabe.replace(/\n/g, "⏎")}</code>
            </p>
          ) : null}
        </div>
        {onSchliessen ? (
          <button type="button" className="knopf knopf-leise knopf-klein" onClick={onSchliessen}>
            Ablauf schließen
          </button>
        ) : null}
      </header>
      {ablauf.abgeschnitten ? (
        <p className="ablauf-hinweis">
          Die Ablaufansicht hört nach {ablauf.schritte.length} Schritten auf, das Programm läuft aber weiter.{ABGESCHNITTEN[ablauf.abgeschnitten]}
        </p>
      ) : null}
      <AblaufSchritt
        ablauf={ablauf}
        index={index}
        nr={pos + 1}
        von={liste.length}
        erwartet={erwartet}
        zeichen={zeichen}
        setZeichen={setZeichen}
        steuerung={steuerung}
        codeRef={codeRef}
        konsoleRef={konsoleRef}
        vorher={pos > 0 ? liste[pos - 1] : undefined}
      />
    </section>
  );
}
