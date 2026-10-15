"use client";

import { useState } from "react";
import { FARBEN, zahlDe } from "../../Koordinaten";
import { zahl, text, type WidgetProps } from "../vertrag";
import { Auswahl, Regler, ReglerGitter } from "./bausteine";

/**
 * Gleichstromkreis mit Spannungsquelle (U0, Innenwiderstand Ri) und drei Schaltungsarten:
 * "reihe": R1 + R2 · "parallel": R1 ‖ R2 · "gemischt": R1 + (R2 ‖ R3).
 * Zeigt Ersatzwiderstand, Teilstroeme, Teilspannungen und Leistungen (Kirchhoff zum Nachpruefen).
 * Props: schaltung, U0 (V), Ri (Ω), R1, R2, R3 (Ω).
 */
const parallel = (a: number, b: number) => (a * b) / (a + b);

function Widerstand({ x, y, senkrecht, name, farbe }: { x: number; y: number; senkrecht?: boolean; name: string; farbe: string }) {
  return senkrecht ? (
    <g>
      <rect x={x - 10} y={y - 25} width={20} height={50} rx={2} fill="var(--color-surface-raised)" stroke={farbe} strokeWidth={2.5} />
      <text x={x + 16} y={y + 5} className="plot-label">
        {name}
      </text>
    </g>
  ) : (
    <g>
      <rect x={x - 25} y={y - 10} width={50} height={20} rx={2} fill="var(--color-surface-raised)" stroke={farbe} strokeWidth={2.5} />
      <text x={x - 8} y={y - 16} className="plot-label">
        {name}
      </text>
    </g>
  );
}

export function Stromkreis({ props }: WidgetProps) {
  const [schaltung, setSchaltung] = useState(text(props, "schaltung", "reihe"));
  const [U0, setU0] = useState(zahl(props, "U0", 12));
  const [Ri, setRi] = useState(zahl(props, "Ri", 0));
  const [R1, setR1] = useState(zahl(props, "R1", 100));
  const [R2, setR2] = useState(zahl(props, "R2", 200));
  const [R3, setR3] = useState(zahl(props, "R3", 300));

  const Ra = schaltung === "reihe" ? R1 + R2 : schaltung === "parallel" ? parallel(R1, R2) : R1 + parallel(R2, R3);
  const I = U0 / (Ra + Ri);
  const Uk = I * Ra; // Klemmenspannung
  const zeilen: { name: string; R: number; U: number; I: number }[] = [];
  if (schaltung === "reihe") {
    zeilen.push({ name: "R₁", R: R1, U: I * R1, I }, { name: "R₂", R: R2, U: I * R2, I });
  } else if (schaltung === "parallel") {
    zeilen.push({ name: "R₁", R: R1, U: Uk, I: Uk / R1 }, { name: "R₂", R: R2, U: Uk, I: Uk / R2 });
  } else {
    const U23 = I * parallel(R2, R3);
    zeilen.push({ name: "R₁", R: R1, U: I * R1, I }, { name: "R₂", R: R2, U: U23, I: U23 / R2 }, { name: "R₃", R: R3, U: U23, I: U23 / R3 });
  }
  const mA = (v: number) => `${zahlDe(v * 1000, 1)} mA`;
  const farbe = (i: number) => FARBEN[i % FARBEN.length];

  return (
    <div>
      <Auswahl
        name="Schaltung"
        wert={schaltung}
        onChange={setSchaltung}
        optionen={[
          { wert: "reihe", label: "Reihenschaltung" },
          { wert: "parallel", label: "Parallelschaltung" },
          { wert: "gemischt", label: "R₁ + (R₂ ‖ R₃)" },
        ]}
      />
      <svg viewBox="0 0 420 200" className="mt-2 w-full max-w-xl" role="img" aria-label={`Schaltplan ${schaltung}, Gesamtstrom ${mA(I)}`}>
        <g stroke="var(--color-ink-muted)" strokeWidth={2} fill="none">
          {/* Quelle links */}
          <line x1="40" y1="30" x2="40" y2="85" />
          <line x1="40" y1="115" x2="40" y2="170" />
          <line x1="22" y1="85" x2="58" y2="85" strokeWidth={3} />
          <line x1="30" y1="115" x2="50" y2="115" strokeWidth={5} />
          <line x1="40" y1="30" x2="380" y2="30" />
          <line x1="40" y1="170" x2="380" y2="170" />
          {schaltung === "reihe" ? <line x1="380" y1="30" x2="380" y2="170" /> : null}
          {schaltung !== "reihe" ? (
            <>
              <line x1={schaltung === "parallel" ? 200 : 270} y1="30" x2={schaltung === "parallel" ? 200 : 270} y2="170" />
              <line x1="380" y1="30" x2="380" y2="170" />
            </>
          ) : null}
        </g>
        <text x="62" y="104" className="plot-label">
          U₀ = {zahlDe(U0, 1)} V
        </text>
        {schaltung === "reihe" ? (
          <>
            <Widerstand x={160} y={30} name="R₁" farbe={farbe(0)} />
            <Widerstand x={380} y={100} senkrecht name="R₂" farbe={farbe(1)} />
          </>
        ) : schaltung === "parallel" ? (
          <>
            <Widerstand x={200} y={100} senkrecht name="R₁" farbe={farbe(0)} />
            <Widerstand x={380} y={100} senkrecht name="R₂" farbe={farbe(1)} />
          </>
        ) : (
          <>
            <Widerstand x={160} y={30} name="R₁" farbe={farbe(0)} />
            <Widerstand x={270} y={100} senkrecht name="R₂" farbe={farbe(1)} />
            <Widerstand x={380} y={100} senkrecht name="R₃" farbe={farbe(2)} />
          </>
        )}
        <text x="100" y="190" className="plot-label">
          I = {mA(I)} →
        </text>
      </svg>
      <ReglerGitter>
        <Regler name="Quellenspannung U₀" wert={U0} min={1} max={24} schritt={0.5} einheit="V" stellen={1} onChange={setU0} />
        <Regler name="Innenwiderstand Rᵢ" wert={Ri} min={0} max={50} schritt={1} einheit="Ω" stellen={0} onChange={setRi} />
        <Regler name="R₁" wert={R1} min={10} max={1000} schritt={10} einheit="Ω" stellen={0} onChange={setR1} />
        <Regler name="R₂" wert={R2} min={10} max={1000} schritt={10} einheit="Ω" stellen={0} onChange={setR2} />
        {schaltung === "gemischt" ? <Regler name="R₃" wert={R3} min={10} max={1000} schritt={10} einheit="Ω" stellen={0} onChange={setR3} /> : null}
      </ReglerGitter>
      <div className="overflow-x-auto">
        <table className="w-full text-sm tabular-nums" aria-live="polite">
          <thead>
            <tr className="text-left text-ink-muted">
              <th className="py-1 pr-3 font-normal">Bauteil</th>
              <th className="py-1 pr-3 font-normal">R</th>
              <th className="py-1 pr-3 font-normal">U</th>
              <th className="py-1 pr-3 font-normal">I</th>
              <th className="py-1 font-normal">P = U·I</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {zeilen.map((z) => (
              <tr key={z.name} className="border-t border-line">
                <td className="py-1 pr-3">{z.name}</td>
                <td className="py-1 pr-3">{zahlDe(z.R, 1)} Ω</td>
                <td className="py-1 pr-3">{zahlDe(z.U, 3)} V</td>
                <td className="py-1 pr-3">{mA(z.I)}</td>
                <td className="py-1">{zahlDe(z.U * z.I * 1000, 1)} mW</td>
              </tr>
            ))}
            <tr className="border-t border-line-strong">
              <td className="py-1 pr-3">gesamt (außen)</td>
              <td className="py-1 pr-3">{zahlDe(Ra, 1)} Ω</td>
              <td className="py-1 pr-3">{zahlDe(Uk, 3)} V</td>
              <td className="py-1 pr-3">{mA(I)}</td>
              <td className="py-1">{zahlDe(Uk * I * 1000, 1)} mW</td>
            </tr>
          </tbody>
        </table>
      </div>
      {Ri > 0 ? (
        <p className="mt-1 text-sm text-ink-muted">
          Am Innenwiderstand fallen {zahlDe(I * Ri, 3)} V ab; die Klemmenspannung ist daher kleiner als U₀.
        </p>
      ) : null}
    </div>
  );
}
