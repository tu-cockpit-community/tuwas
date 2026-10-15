import type { PlotSpec } from "@/lib/lernen/typen";
import { werteReell } from "@/lib/lernen/rechnen";
import { Koordinaten, FARBEN, graphPfad, flaechePfad, kompiliere, zahlDe } from "./Koordinaten";

/** Statischer Plot aus einer ```plot-Spezifikation. Rendert serverseitig zu reinem SVG. */

const n = (v: number | string) => werteReell(v);

function beschreibe(spec: PlotSpec): string {
  const g = spec.graphen.map((x) => `${x.label ?? "Graph"}: y = ${x.f}`);
  const p = spec.punkte.map((x) => `${x.label ?? "Punkt"} (${zahlDe(n(x.x))} | ${zahlDe(n(x.y))})`);
  return spec.beschriftung ?? ["Diagramm", ...g, ...p].join("; ");
}

export function Plot({ spec }: { spec: PlotSpec }) {
  const x: [number, number] = [n(spec.x[0]), n(spec.x[1])];
  const y: [number, number] = [n(spec.y[0]), n(spec.y[1])];
  const piAchse = String(spec.x[0]).includes("pi") || String(spec.x[1]).includes("pi");
  return (
    <figure className="plot">
      <Koordinaten
        x={x}
        y={y}
        hoehe={spec.hoehe}
        gleich={spec.gleich}
        piAchse={piAchse}
        achsenX={spec.achsen?.x}
        achsenY={spec.achsen?.y}
        beschreibung={beschreibe(spec)}
      >
        {(k) => {
          // Graph-Labels weichen Punkt-Labels und einander vertikal aus. SHORTCUT: Breite aus der Zeichenzahl
          // geschaetzt (15px kursiv fett ~ 8.5 Einheiten/Zeichen); bei sehr dichten Plots bleibt Ueberlappung moeglich.
          type Box = [number, number, number, number];
          const breite = (s: string) => s.length * 8.5;
          // Punkt-Labels rechts vom Punkt; ragen sie ueber die Zeichenflaeche (rechts bei breite - 22), links davon
          const punktPos = spec.punkte.map((p) => {
            const px = k.px(n(p.x));
            const w = p.label ? breite(p.label) : 0;
            const links = px + 8 + w > k.breite - 22;
            return { tx: links ? px - 8 : px + 8, ty: k.py(n(p.y)) - 8, links, w };
          });
          const belegt: Box[] = spec.punkte
            .map((p, i) => ({ p, q: punktPos[i] }))
            .filter(({ p }) => p.label)
            .map(({ q }) => (q.links ? [q.tx - q.w, q.ty - 15, q.tx, q.ty + 4] : [q.tx, q.ty - 15, q.tx + q.w, q.ty + 4]));
          const schneidet = (a: Box) => belegt.some((b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3]);
          const labelPos = spec.graphen.map((g) => {
            if (!g.label) return null;
            const f = kompiliere(g.f);
            const von = g.von !== undefined ? n(g.von) : x[0];
            const bis = g.bis !== undefined ? n(g.bis) : x[1];
            const lx = von + (bis - von) * 0.86;
            const ly = f(lx);
            if (!Number.isFinite(ly) || ly <= y[0] || ly >= y[1]) return null;
            // rechtsbuendig vor dem Ankerpunkt, sonst laeuft ein langes Label ueber den rechten Rand
            const tx = k.px(lx) - 6;
            const w = breite(g.label);
            const versuche = [-8, 22, -28, 42].map((d) => k.py(ly) + d);
            const ty = versuche.find((v) => !schneidet([tx - w, v - 15, tx, v + 4])) ?? versuche[0];
            belegt.push([tx - w, ty - 15, tx, ty + 4]);
            return { tx, ty };
          });
          return (
          <>
            {spec.flaechen.map((a, i) => (
              <path
                key={`a${i}`}
                d={flaechePfad(kompiliere(a.f), kompiliere(a.g), k, n(a.von), n(a.bis))}
                fill={FARBEN[a.farbe ?? 0]}
                fillOpacity={0.18}
                stroke="none"
              />
            ))}
            {spec.balken.map((b, i) => {
              const bx = n(b.x);
              const by = n(b.y);
              const w = Math.abs(k.px(1) - k.px(0)) * 0.7;
              return (
                <rect
                  key={`b${i}`}
                  x={k.px(bx) - w / 2}
                  y={Math.min(k.py(by), k.py(0))}
                  width={w}
                  height={Math.abs(k.py(by) - k.py(0))}
                  fill={FARBEN[b.farbe ?? 0]}
                  fillOpacity={0.75}
                />
              );
            })}
            {spec.graphen.map((g, i) => {
              const f = kompiliere(g.f);
              const von = g.von !== undefined ? n(g.von) : x[0];
              const bis = g.bis !== undefined ? n(g.bis) : x[1];
              const pos = labelPos[i];
              return (
                <g key={`g${i}`}>
                  <path
                    d={graphPfad(f, k, von, bis)}
                    fill="none"
                    stroke={FARBEN[g.farbe ?? i % FARBEN.length]}
                    strokeWidth={2.4}
                    strokeDasharray={g.gestrichelt ? "6 5" : undefined}
                    strokeLinecap="round"
                  />
                  {pos ? (
                    <text
                      x={pos.tx}
                      y={pos.ty}
                      textAnchor="end"
                      className="plot-label"
                      fill={FARBEN[g.farbe ?? i % FARBEN.length]}
                    >
                      {g.label}
                    </text>
                  ) : null}
                </g>
              );
            })}
            {spec.kurven.map((c, i) => {
              const fx = kompiliere(c.x, "t");
              const fy = kompiliere(c.y, "t");
              const t0 = n(c.t[0]);
              const t1 = n(c.t[1]);
              const pts: string[] = [];
              for (let j = 0; j <= 360; j++) {
                const t = t0 + ((t1 - t0) * j) / 360;
                pts.push(`${j ? "L" : "M"}${k.px(fx(t)).toFixed(2)},${k.py(fy(t)).toFixed(2)}`);
              }
              return (
                <path
                  key={`c${i}`}
                  d={pts.join("")}
                  fill="none"
                  stroke={FARBEN[c.farbe ?? (spec.graphen.length + i) % FARBEN.length]}
                  strokeWidth={2.4}
                  strokeDasharray={c.gestrichelt ? "6 5" : undefined}
                />
              );
            })}
            {spec.strecken.map((s, i) => (
              <line
                key={`s${i}`}
                x1={k.px(n(s.von[0]))}
                y1={k.py(n(s.von[1]))}
                x2={k.px(n(s.nach[0]))}
                y2={k.py(n(s.nach[1]))}
                stroke={s.farbe !== undefined ? FARBEN[s.farbe] : "var(--color-ink-muted)"}
                strokeWidth={1.6}
                strokeDasharray={s.gestrichelt ? "5 4" : undefined}
              />
            ))}
            {spec.vektoren.map((v, i) => {
              const farbe = v.farbe ?? i % FARBEN.length;
              const x1 = k.px(n(v.von[0]));
              const y1 = k.py(n(v.von[1]));
              const x2 = k.px(n(v.nach[0]));
              const y2 = k.py(n(v.nach[1]));
              return (
                <g key={`v${i}`}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={FARBEN[farbe]} strokeWidth={2.4} markerEnd={`url(#pfeil-${farbe})`} />
                  {v.label ? (
                    <text x={(x1 + x2) / 2 + 8} y={(y1 + y2) / 2 - 8} className="plot-label" fill={FARBEN[farbe]}>
                      {v.label}
                    </text>
                  ) : null}
                </g>
              );
            })}
            {spec.punkte.map((p, i) => {
              const farbe = FARBEN[p.farbe ?? 0];
              return (
                <g key={`p${i}`}>
                  <circle
                    cx={k.px(n(p.x))}
                    cy={k.py(n(p.y))}
                    r={4.5}
                    fill={p.offen ? "var(--color-surface-raised)" : farbe}
                    stroke={farbe}
                    strokeWidth={2}
                  />
                  {p.label ? (
                    <text
                      x={punktPos[i].tx}
                      y={punktPos[i].ty}
                      textAnchor={punktPos[i].links ? "end" : undefined}
                      className="plot-label"
                    >
                      {p.label}
                    </text>
                  ) : null}
                </g>
              );
            })}
          </>
          );
        }}
      </Koordinaten>
      {spec.beschriftung ? <figcaption>{spec.beschriftung}</figcaption> : null}
    </figure>
  );
}
