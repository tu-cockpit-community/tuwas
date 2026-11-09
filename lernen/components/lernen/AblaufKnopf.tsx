"use client";

import { useId, useRef, useState } from "react";
import type { AblaufErgebnis, AblaufOptionen } from "@/lib/lernen/ablauf/typen";
import type { JavaTest } from "@/lib/lernen/typen";
import type { AblaufSpieler as SpielerKomponente } from "./Ablauf";

/**
 * Knopf "Ablauf ansehen": laedt Engine und Spieler erst beim Klick (kein Gewicht im Hauptbundle), fuehrt den Code im
 * Browser aus (kein Netz, kein Server) und zeigt darunter den Spieler oder eine freundliche Meldung. Client-Insel,
 * die auch in serverseitig gerendertem Markdown (Md.tsx) steckt: ohne Klick rendert sie nur den Knopf.
 */

type Stand =
  | { art: "zu" }
  | { art: "laedt" }
  | { art: "offen"; ergebnis: AblaufErgebnis; fuer: string; Spieler: typeof SpielerKomponente; lauf: number }
  | { art: "ladefehler" };

/** Nur gesetzte Optionen, damit derselbe Lauf denselben Schluessel hat */
function sauber(o: AblaufOptionen | undefined): AblaufOptionen {
  const r: AblaufOptionen = {};
  if (o?.aufruf !== undefined) r.aufruf = o.aufruf;
  if (o?.vorher !== undefined) r.vorher = o.vorher;
  if (o?.stdin !== undefined) r.stdin = o.stdin;
  return r;
}

const naechsterTakt = () => new Promise<void>((r) => setTimeout(r, 0));

export function AblaufKnopf({
  quelle,
  optionen,
  beschriftung = "Ablauf ansehen",
  erwartet,
}: {
  quelle: string;
  optionen?: AblaufOptionen;
  beschriftung?: string;
  /** Erwarteter Rueckgabewert laut Test (nur Anzeige) */
  erwartet?: string;
}) {
  const id = useId();
  const [stand, setStand] = useState<Stand>({ art: "zu" });
  const knopf = useRef<HTMLButtonElement>(null);
  const laeufe = useRef(0);
  const opt = sauber(optionen);
  const schluessel = JSON.stringify([quelle, opt]);

  async function starten() {
    setStand({ art: "laedt" });
    let engine: typeof import("@/lib/lernen/ablauf");
    let ansicht: typeof import("./Ablauf");
    try {
      [engine, ansicht] = await Promise.all([import("@/lib/lernen/ablauf"), import("./Ablauf")]);
    } catch {
      setStand({ art: "ladefehler" });
      return;
    }
    // Ladeanzeige zeichnen lassen, bevor die (synchrone) Ausfuehrung rechnet
    await naechsterTakt();
    let ergebnis: AblaufErgebnis;
    try {
      ergebnis = engine.erzeugeAblauf(quelle, opt);
    } catch (e) {
      ergebnis = { ok: false, grund: "nichtUnterstuetzt", meldung: `interner Fehler der Ablaufansicht (${e instanceof Error ? e.message : String(e)})` };
    }
    laeufe.current += 1;
    setStand({ art: "offen", ergebnis, fuer: schluessel, Spieler: ansicht.AblaufSpieler, lauf: laeufe.current });
  }

  function schliessen() {
    setStand({ art: "zu" });
    knopf.current?.focus();
  }

  const offen = stand.art === "offen" || stand.art === "ladefehler";
  return (
    <div className="ablauf-start">
      <button
        ref={knopf}
        type="button"
        className="knopf knopf-leise knopf-klein ablauf-knopf"
        aria-expanded={offen}
        aria-controls={offen ? `${id}-inhalt` : undefined}
        aria-busy={stand.art === "laedt" || undefined}
        aria-disabled={stand.art === "laedt" || undefined}
        onClick={() => {
          // aria-disabled statt disabled: der Fokus bleibt auf dem Knopf, waehrend geladen wird
          if (stand.art === "laedt") return;
          if (offen) schliessen();
          else void starten();
        }}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false">
          {offen ? <rect x="3.5" y="3.5" width="9" height="9" rx="1" /> : <path d="M5 3v10l8-5z" />}
        </svg>
        {stand.art === "laedt" ? "Ablauf wird vorbereitet …" : offen ? "Ablauf schließen" : beschriftung}
      </button>
      {offen ? (
        <div id={`${id}-inhalt`} className="ablauf-inhalt">
          {stand.art === "ladefehler" ? (
            <p className="ablauf-meldung" role="status">
              Die Ablaufansicht konnte nicht geladen werden. Lade die Seite neu und versuche es noch einmal.
            </p>
          ) : (
            <>
              {stand.fuer !== schluessel ? (
                <p className="ablauf-meldung ablauf-veraltet" role="status">
                  Der Code oder der Test hat sich geändert. Der Ablauf zeigt noch den alten Stand.{" "}
                  <button type="button" className="knopf knopf-klein" onClick={() => void starten()}>
                    Neu ablaufen lassen
                  </button>
                </p>
              ) : null}
              {stand.ergebnis.ok ? (
                <stand.Spieler key={stand.lauf} ablauf={stand.ergebnis.ablauf} eingabe={opt.stdin} erwartet={erwartet} onSchliessen={schliessen} autoFokus />
              ) : (
                <p className="ablauf-meldung" role="status">
                  {stand.ergebnis.grund === "syntax" ? (
                    <>
                      Die Ablaufansicht kann diesen Code nicht ausführen
                      {stand.ergebnis.zeile ? ` (Zeile ${stand.ergebnis.zeile})` : ""}: {stand.ergebnis.meldung}
                    </>
                  ) : (
                    <>Dieser Code ist (noch) nicht für die Ablaufansicht geeignet: {stand.ergebnis.meldung}</>
                  )}
                </p>
              )}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

/** Anzeigename eines Tests in der Auswahl */
function testName(t: JavaTest): string {
  const was = t.aufruf ?? "main";
  const eingabe = t.stdin ? ` mit Eingabe ${t.stdin.replace(/\n/g, "⏎")}` : "";
  // Aufruf zuerst (der ist eindeutig), die Beschreibung in Klammern dahinter
  return t.beschreibung ? `${was}${eingabe} (${t.beschreibung})` : `${was}${eingabe}`;
}

/**
 * Fuer `code`-Aufgaben: "Meinen Code ablaufen sehen" mit Wahl des sichtbaren Tests (Aufruf, vorher, Eingabe kommen
 * aus dem Test). Verborgene Tests stehen nicht zur Wahl. Zeichnungen (CodeDraw) sind wie jeder andere Test waehlbar:
 * die Ablaufansicht zeigt dann neben dem Code die Zeichenflaeche.
 */
export function AblaufFuerCode({ quelle, tests }: { quelle: string; tests: JavaTest[] }) {
  const id = useId();
  const [wahl, setWahl] = useState(0);
  const sichtbar = tests.filter((t) => !t.versteckt);
  // ohne passenden sichtbaren Test bleibt nur main, wenn es eine gibt
  const nurMain = !sichtbar.length && /\bstatic\s+void\s+main\s*\(/.test(quelle);
  if (!sichtbar.length && !nurMain) return null;
  const test = sichtbar[Math.min(wahl, sichtbar.length - 1)];
  const optionen: AblaufOptionen = test ? { aufruf: test.aufruf, vorher: test.vorher, stdin: test.stdin } : {};
  return (
    <div className="ablauf-code-wahl">
      {sichtbar.length > 1 ? (
        <label className="ablauf-testwahl" htmlFor={`${id}-test`}>
          Mit welchem Test?{" "}
          <select id={`${id}-test`} value={Math.min(wahl, sichtbar.length - 1)} onChange={(e) => setWahl(Number(e.target.value))}>
            {sichtbar.map((t, i) => (
              <option key={i} value={i}>
                {testName(t)}
              </option>
            ))}
          </select>
        </label>
      ) : test ? (
        <p className="ablauf-testwahl">
          Mit dem Test <code>{testName(test)}</code>
        </p>
      ) : null}
      <AblaufKnopf quelle={quelle} optionen={optionen} beschriftung="Meinen Code ablaufen sehen" erwartet={test && !test.ergebnis ? test.erwartet : undefined} />
    </div>
  );
}
