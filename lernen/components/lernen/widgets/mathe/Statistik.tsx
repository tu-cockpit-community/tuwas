"use client";

import { useId, useState } from "react";
import { Koordinaten, FARBEN } from "../../Koordinaten";
import { type WidgetProps } from "../vertrag";
import { alsZahl, Formel, Hinweis, Kennwerte, Legende, teilung } from "./gemeinsam";
import { texZahl, zahlSig } from "./format";
import { kennzahlen, leseDaten, regression, type Kennzahlen } from "./rechnen-statistik";

/**
 * Beschreibende Statistik. Props: daten (Liste von Zahlen; im Widget als Text editierbar),
 * paare (optional, Liste [x, y]) -> Streudiagramm mit Regressionsgerade und r.
 */

const STANDARD = [3, 5, 7, 7, 8, 10, 12];

function datenText(roh: unknown): string {
  const werte = Array.isArray(roh) ? roh.map(alsZahl).filter((v): v is number => v !== null) : [];
  return (werte.length ? werte : STANDARD).map((v) => String(v).replace(".", ",")).join("; ");
}

function lesePaare(roh: unknown): [number, number][] {
  if (!Array.isArray(roh)) return [];
  return roh
    .filter((p): p is unknown[] => Array.isArray(p) && p.length === 2)
    .map((p) => [alsZahl(p[0]), alsZahl(p[1])] as const)
    .filter((p): p is [number, number] => p[0] !== null && p[1] !== null);
}

function Boxplot({ s }: { s: Kennzahlen }) {
  const B = 640;
  const H = 180;
  const links = 30;
  const rechts = B - 30;
  const pad = s.spannweite > 0 ? s.spannweite * 0.08 : 1;
  const ticks = teilung(s.min - pad, s.max + pad, 8);
  const lo = Math.min(ticks[0], s.min - pad);
  const hi = Math.max(ticks[ticks.length - 1], s.max + pad);
  const px = (v: number) => links + ((v - lo) / (hi - lo)) * (rechts - links);
  const achseY = 146;
  const boxOben = 98;
  const boxUnten = 128;
  // Punktdiagramm: gleiche Werte werden gestapelt
  const zaehler = new Map<number, number>();
  const punkte = s.sortiert.map((v) => {
    const c = zaehler.get(v) ?? 0;
    zaehler.set(v, c + 1);
    return { v, c };
  });
  const r = s.n > 60 ? 3 : 4.5;
  return (
    <svg
      viewBox={`0 0 ${B} ${H}`}
      className="mw-svg"
      role="img"
      aria-label={`Punktdiagramm und Boxplot: Minimum ${zahlSig(s.min)}, unteres Quartil ${zahlSig(s.q1)}, Median ${zahlSig(s.median)}, oberes Quartil ${zahlSig(s.q3)}, Maximum ${zahlSig(s.max)}, Mittelwert ${zahlSig(s.mittel)}.`}
    >
      {punkte.map((p, i) => (
        <circle key={i} cx={px(p.v)} cy={Math.max(8, 82 - p.c * (2 * r + 2))} r={r} fill={FARBEN[0]} fillOpacity={0.8} />
      ))}
      <line x1={px(s.min)} x2={px(s.q1)} y1={(boxOben + boxUnten) / 2} y2={(boxOben + boxUnten) / 2} stroke="currentColor" strokeWidth={1.5} />
      <line x1={px(s.q3)} x2={px(s.max)} y1={(boxOben + boxUnten) / 2} y2={(boxOben + boxUnten) / 2} stroke="currentColor" strokeWidth={1.5} />
      {[s.min, s.max].map((v, i) => (
        <line key={i} x1={px(v)} x2={px(v)} y1={boxOben + 6} y2={boxUnten - 6} stroke="currentColor" strokeWidth={1.5} />
      ))}
      <rect x={px(s.q1)} y={boxOben} width={Math.max(1, px(s.q3) - px(s.q1))} height={boxUnten - boxOben} fill={FARBEN[0]} fillOpacity={0.15} stroke={FARBEN[0]} strokeWidth={1.6} />
      <line x1={px(s.median)} x2={px(s.median)} y1={boxOben} y2={boxUnten} stroke={FARBEN[0]} strokeWidth={3} />
      <line x1={px(s.mittel)} x2={px(s.mittel)} y1={boxOben - 8} y2={boxUnten + 8} stroke={FARBEN[1]} strokeWidth={2} strokeDasharray="4 3" />
      <text x={px(s.mittel)} y={boxOben - 11} textAnchor="middle" className="mw-svg-text">
        x̄
      </text>
      <line x1={links} x2={rechts} y1={achseY} y2={achseY} stroke="currentColor" strokeWidth={1.2} />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={px(t)} x2={px(t)} y1={achseY} y2={achseY + 5} stroke="currentColor" />
          <text x={px(t)} y={achseY + 18} textAnchor="middle" className="tick">
            {zahlSig(t)}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Statistik({ props }: WidgetProps) {
  const id = useId();
  const [eingabe, setEingabe] = useState(() => datenText(props.daten));
  const { werte, fehler } = leseDaten(eingabe);
  const s = kennzahlen(werte);
  const paare = lesePaare(props.paare);
  const reg = regression(paare);

  return (
    <div>
      <div className="mw-textfeld">
        <label htmlFor={id}>Daten (getrennt durch Strichpunkt, Leerzeichen oder Zeilenumbruch; Dezimalkomma erlaubt)</label>
        <textarea id={id} className="feld" rows={2} value={eingabe} onChange={(e) => setEingabe(e.target.value)} aria-invalid={fehler.length > 0} />
      </div>
      {fehler.length ? <Hinweis art="warnung">Nicht lesbar und ignoriert: {fehler.join(", ")}</Hinweis> : null}
      {s ? (
        <>
          <Boxplot s={s} />
          <Legende
            eintraege={[
              { farbe: FARBEN[0], label: "Daten, Box: Quartile, dicker Strich: Median" },
              { farbe: FARBEN[1], label: "arithmetisches Mittel x̄", gestrichelt: true },
            ]}
          />
          <Kennwerte
            werte={[
              { name: "n =", wert: String(s.n) },
              { name: "x̄ =", wert: zahlSig(s.mittel, 6) },
              { name: "Median =", wert: zahlSig(s.median, 6) },
              { name: "Modus =", wert: s.modus.length ? s.modus.map((m) => zahlSig(m)).join("; ") : "keiner (alle gleich häufig)" },
              { name: "Min / Max =", wert: `${zahlSig(s.min)} / ${zahlSig(s.max)}` },
              { name: "Spannweite =", wert: zahlSig(s.spannweite, 6) },
              { name: "q₁ =", wert: zahlSig(s.q1, 6) },
              { name: "q₃ =", wert: zahlSig(s.q3, 6) },
              { name: "Quartilsabstand =", wert: zahlSig(s.iqr, 6) },
            ]}
          />
          <div className="widget-info">
            <Formel
              block
              tex={`\\sigma^2 = \\tfrac{1}{n}\\sum (x_i-\\bar x)^2 = ${texZahl(s.varianzN, 6)},\\ \\sigma = ${texZahl(s.sN, 6)} \\qquad s^2 = \\tfrac{1}{n-1}\\sum (x_i-\\bar x)^2 = ${
                s.n > 1 ? texZahl(s.varianzN1, 6) : "\\text{–}"
              },\\ s = ${s.n > 1 ? texZahl(s.sN1, 6) : "\\text{–}"}`}
            />
          </div>
          <Hinweis>
            Varianz mit Nenner n (empirische Varianz der Liste) und mit n − 1 (Stichprobenvarianz) – welche gemeint ist, steht in der Aufgabe. Quartile: q₁ ist der Median der unteren
            Hälfte, q₃ der Median der oberen Hälfte; bei ungeradem n gehört der Median zu keiner Hälfte.
          </Hinweis>
        </>
      ) : (
        <Hinweis art="warnung">Keine Zahlen eingegeben.</Hinweis>
      )}
      {paare.length ? <Streudiagramm paare={paare} reg={reg} /> : null}
    </div>
  );
}

function Streudiagramm({ paare, reg }: { paare: [number, number][]; reg: ReturnType<typeof regression> }) {
  const xs = paare.map((p) => p[0]);
  const ys = paare.map((p) => p[1]);
  const spann = (v: number[]): [number, number] => {
    const lo = Math.min(...v);
    const hi = Math.max(...v);
    const d = hi - lo || 1;
    return [lo - 0.08 * d, hi + 0.1 * d];
  };
  const x = spann(xs);
  const y = spann(ys);
  return (
    <>
      <Koordinaten
        x={x}
        y={y}
        hoehe={300}
        beschreibung={`Streudiagramm mit ${paare.length} Punkten${reg ? `, Regressionsgerade y = ${zahlSig(reg.k)}·x + ${zahlSig(reg.d)}, r = ${zahlSig(reg.r, 3)}` : ""}`}
      >
        {(k) => (
          <>
            {reg ? (
              <line x1={k.px(x[0])} y1={k.py(reg.k * x[0] + reg.d)} x2={k.px(x[1])} y2={k.py(reg.k * x[1] + reg.d)} stroke={FARBEN[1]} strokeWidth={2.2} />
            ) : null}
            {reg ? <circle cx={k.px(reg.mx)} cy={k.py(reg.my)} r={6} fill="none" stroke={FARBEN[1]} strokeWidth={2} /> : null}
            {paare.map((p, i) => (
              <circle key={i} cx={k.px(p[0])} cy={k.py(p[1])} r={4.5} fill={FARBEN[0]} fillOpacity={0.85} />
            ))}
          </>
        )}
      </Koordinaten>
      {reg ? (
        <>
          <Legende
            eintraege={[
              { farbe: FARBEN[0], label: "Datenpunkte (xᵢ | yᵢ)" },
              { farbe: FARBEN[1], label: "Regressionsgerade durch den Schwerpunkt (x̄ | ȳ)" },
            ]}
          />
          <div className="widget-info">
            <Formel block tex={`y = ${texZahl(reg.k, 5)}\\,x ${reg.d < 0 ? "-" : "+"} ${texZahl(Math.abs(reg.d), 5)}, \\qquad r = ${Number.isNaN(reg.r) ? "\\text{nicht definiert}" : texZahl(reg.r, 4)}`} />
          </div>
        </>
      ) : (
        <Hinweis art="warnung">Für die Regressionsgerade braucht es mindestens zwei Punkte mit verschiedenen x-Werten.</Hinweis>
      )}
    </>
  );
}
