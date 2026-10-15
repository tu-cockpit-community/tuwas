"use client";

import { useState } from "react";
import { Koordinaten, FARBEN, graphPfad } from "../../Koordinaten";
import { text, type WidgetProps } from "../vertrag";
import { achse, alsZahl, autoY, bool, Formel, funktion, Hinweis, Kennwerte, Legende, Regler, zahlTerm } from "./gemeinsam";
import { texZahl, zahlSig } from "./format";
import { einseitigerGrenzwert, findeDelta } from "./rechnen-analysis";
import { termTex } from "./term";

/**
 * Stueckweise Funktion an einer Stelle s: f(x) = links(x) fuer x < s, rechts(x) fuer x > s.
 * Props: links, rechts, stelle, wert (Zahl, oder "links" | "rechts" | "keiner"; Standard "links",
 * d.h. f(s) = links(s)), x, y, epsdelta (ε-δ-Bild anfangs zeigen).
 */

function urteil(L: number, R: number, fs: number | null): { stetig: boolean; text: string } {
  const gleich = (p: number, q: number) => Math.abs(p - q) <= 1e-6 * (1 + Math.abs(p) + Math.abs(q));
  if (!Number.isFinite(L) || !Number.isFinite(R)) {
    if (Number.isNaN(L) || Number.isNaN(R)) return { stetig: false, text: "Mindestens ein einseitiger Grenzwert existiert nicht – f ist dort nicht stetig." };
    return { stetig: false, text: "Die Funktionswerte wachsen über alle Grenzen (Polstelle) – f ist dort nicht stetig." };
  }
  if (!gleich(L, R)) return { stetig: false, text: `Linksseitiger und rechtsseitiger Grenzwert sind verschieden (Sprung der Höhe ${zahlSig(Math.abs(R - L))}) – nicht stetig.` };
  if (fs === null) return { stetig: false, text: "Der Grenzwert existiert, aber f(s) ist nicht definiert (Definitionslücke, hebbar) – nicht stetig." };
  if (!gleich(fs, L)) return { stetig: false, text: "Der Grenzwert existiert, ist aber verschieden von f(s) (hebbare Unstetigkeit) – nicht stetig." };
  return { stetig: true, text: "Linksseitiger Grenzwert = rechtsseitiger Grenzwert = f(s) – f ist an der Stelle s stetig." };
}

export function Stetigkeit({ props }: WidgetProps) {
  const lText = text(props, "links", "x+1");
  const rText = text(props, "rechts", "x^2");
  const s = zahlTerm(props, "stelle", 1);
  const x = achse(props, "x", [s - 2, s + 2]);
  const fl = funktion(lText) ?? (() => NaN);
  const fr = funktion(rText) ?? (() => NaN);
  const wertProp = props.wert;
  const fsRoh = alsZahl(wertProp) ?? (wertProp === "rechts" ? fr(s) : wertProp === "keiner" ? NaN : fl(s));
  const fs = Number.isFinite(fsRoh) ? fsRoh : null;
  const f = (t: number) => (t < s ? fl(t) : t > s ? fr(t) : (fs ?? NaN));

  const L = einseitigerGrenzwert(fl, s, -1);
  const R = einseitigerGrenzwert(fr, s, 1);
  const u = urteil(L, R, fs);
  const y = autoY(props, [(t) => (t < s ? fl(t) : NaN), (t) => (t > s ? fr(t) : NaN)], x, [L, R, fs ?? NaN]);

  const [zeigeEps, setZeigeEps] = useState(() => bool(props, "epsdelta", false));
  const ySpanne = y[1] - y[0];
  const [logEps, setLogEps] = useState(() => Math.log10(ySpanne / 10));
  const eps = 10 ** logEps;
  const delta = zeigeEps && fs !== null ? findeDelta(f, s, fs, eps, (x[1] - x[0]) / 2) : null;

  const lt = termTex(lText) ?? lText;
  const rt = termTex(rText) ?? rText;
  const sTex = texZahl(s);
  const definition =
    wertProp === "rechts"
      ? `f(x) = \\begin{cases} ${lt} & x < ${sTex} \\\\ ${rt} & x \\ge ${sTex} \\end{cases}`
      : alsZahl(wertProp) !== null || wertProp === "keiner"
        ? `f(x) = \\begin{cases} ${lt} & x < ${sTex} \\\\ ${fs !== null ? texZahl(fs) : "\\text{nicht definiert}"} & x = ${sTex} \\\\ ${rt} & x > ${sTex} \\end{cases}`
        : `f(x) = \\begin{cases} ${lt} & x \\le ${sTex} \\\\ ${rt} & x > ${sTex} \\end{cases}`;

  // offener Kreis: einseitiger Grenzwert, der nicht zugleich Funktionswert ist
  const offen = (v: number) => Number.isFinite(v) && (fs === null || Math.abs(v - fs) > 1e-6 * (1 + Math.abs(v)));

  return (
    <div>
      <div className="widget-info">
        <Formel block tex={definition} />
      </div>
      <Koordinaten
        x={x}
        y={y}
        beschreibung={`Stückweise Funktion an der Stelle s = ${zahlSig(s)}. Linksseitiger Grenzwert ${zahlSig(L)}, rechtsseitiger ${zahlSig(R)}, f(s) = ${fs !== null ? zahlSig(fs) : "nicht definiert"}. ${u.text}`}
      >
        {(k) => (
          <>
            {zeigeEps && fs !== null ? (
              <>
                <rect x={k.px(x[0])} width={k.px(x[1]) - k.px(x[0])} y={k.py(fs + eps)} height={Math.max(0, k.py(fs - eps) - k.py(fs + eps))} fill={FARBEN[2]} fillOpacity={0.13} />
                {delta !== null ? (
                  <rect x={k.px(s - delta)} width={Math.max(1, k.px(s + delta) - k.px(s - delta))} y={k.py(y[1])} height={k.py(y[0]) - k.py(y[1])} fill={FARBEN[3]} fillOpacity={0.13} />
                ) : null}
              </>
            ) : null}
            <line x1={k.px(s)} x2={k.px(s)} y1={k.py(y[0])} y2={k.py(y[1])} stroke="var(--color-line-strong)" strokeDasharray="3 4" />
            <path d={graphPfad(fl, k, x[0], s)} fill="none" stroke={FARBEN[0]} strokeWidth={2.6} />
            <path d={graphPfad(fr, k, s, x[1])} fill="none" stroke={FARBEN[1]} strokeWidth={2.6} />
            {[L, R].map((v, i) =>
              offen(v) ? <circle key={i} cx={k.px(s)} cy={k.py(v)} r={5.5} fill="var(--color-surface-raised)" stroke={FARBEN[i]} strokeWidth={2.2} /> : null,
            )}
            {fs !== null ? <circle cx={k.px(s)} cy={k.py(fs)} r={5.5} fill="var(--color-ink)" /> : null}
          </>
        )}
      </Koordinaten>
      <Legende
        eintraege={[
          { farbe: FARBEN[0], label: `linker Ast: ${lText}` },
          { farbe: FARBEN[1], label: `rechter Ast: ${rText}` },
          { farbe: "var(--color-ink)", label: "gefüllt: f(s); offen: Grenzwert ohne Funktionswert" },
        ]}
      />
      <Kennwerte
        werte={[
          { name: "lim x→s⁻ f(x) ≈", wert: zahlSig(L, 6), farbe: FARBEN[0] },
          { name: "lim x→s⁺ f(x) ≈", wert: zahlSig(R, 6), farbe: FARBEN[1] },
          { name: "f(s) =", wert: fs !== null ? zahlSig(fs, 6) : "nicht definiert" },
        ]}
      />
      <Hinweis art={u.stetig ? "ok" : "nein"}>{u.text}</Hinweis>
      <label className="mw-hinweis" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="checkbox" checked={zeigeEps} onChange={(e) => setZeigeEps(e.target.checked)} disabled={fs === null} />
        ε-δ-Bild zeigen
      </label>
      {zeigeEps && fs !== null ? (
        <>
          <div className="regler-gruppe">
            <Regler
              label="ε"
              min={Math.log10(ySpanne / 2000)}
              max={Math.log10(ySpanne / 2)}
              step={0.01}
              wert={logEps}
              anzeige={zahlSig(eps, 3)}
              beschreibung={`ε = ${zahlSig(eps, 3)}`}
              setze={setLogEps}
            />
          </div>
          <Hinweis art={delta !== null ? undefined : "warnung"}>
            {delta !== null
              ? `Für ε = ${zahlSig(eps, 3)} reicht δ ≈ ${zahlSig(delta, 3)}: Alle x mit |x − s| < δ haben |f(x) − f(s)| < ε (waagrechtes ε-Band, senkrechtes δ-Band). Stetig heißt: Das klappt für jedes noch so kleine ε.`
              : `Für ε = ${zahlSig(eps, 3)} gibt es kein δ: Beliebig nahe bei s liegen Funktionswerte außerhalb des ε-Bands um f(s).`}
          </Hinweis>
        </>
      ) : null}
    </div>
  );
}
