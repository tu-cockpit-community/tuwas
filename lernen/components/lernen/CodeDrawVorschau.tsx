import type { Form } from "@/lib/lernen/java/codedraw";

/**
 * SVG-Vorschau der Fake-CodeDraw-Formen. Koordinaten wie CodeDraw: Ursprung links oben, y nach unten,
 * Winkel im Bogenmass ab 3 Uhr im Uhrzeigersinn. Die Leinwand bleibt auch im Dunkelmodus weiss,
 * weil Farben der Zeichnung Teil der Aufgabe sind.
 */
export function CodeDrawVorschau({ formen, titel }: { formen: Form[]; titel: string }) {
  const fenster = formen.find((f) => f.art === "fenster");
  const b = fenster && "b" in fenster ? fenster.b : 600;
  const h = fenster && "h" in fenster ? fenster.h : 600;
  const sichtbar = formen.filter((f) => f.art !== "fenster");
  return (
    <figure className="codedraw">
      <svg viewBox={`0 0 ${b} ${h}`} role="img" aria-label={`${titel}: ${sichtbar.length} Formen auf ${b} × ${h} Pixeln`} className="codedraw-svg">
        <rect x={0} y={0} width={b} height={h} fill="#ffffff" />
        {sichtbar.map((f, i) => {
          const malen = f.gefuellt ? { fill: f.farbe, stroke: "none" } : { fill: "none", stroke: f.farbe, strokeWidth: f.linie };
          switch (f.art) {
            case "hintergrund":
              return <rect key={i} x={0} y={0} width={f.b} height={f.h} fill={f.farbe} />;
            case "punkt":
              return <circle key={i} cx={f.x} cy={f.y} r={Math.max(0.75, f.linie / 2)} fill={f.farbe} />;
            case "linie":
              return <line key={i} x1={f.x1} y1={f.y1} x2={f.x2} y2={f.y2} stroke={f.farbe} strokeWidth={f.linie} strokeLinecap="round" />;
            case "kreis":
              return <circle key={i} cx={f.x} cy={f.y} r={Math.max(0, f.r)} {...malen} />;
            case "ellipse":
              return <ellipse key={i} cx={f.x} cy={f.y} rx={Math.max(0, f.rx)} ry={Math.max(0, f.ry)} {...malen} />;
            case "rechteck":
              return <rect key={i} x={f.x} y={f.y} width={Math.max(0, f.b)} height={Math.max(0, f.h)} {...malen} />;
            case "dreieck":
              return <polygon key={i} points={`${f.x1},${f.y1} ${f.x2},${f.y2} ${f.x3},${f.y3}`} {...malen} />;
            case "bogen": {
              const a = f.start;
              const e = f.start + f.winkel;
              const p = (w: number) => `${f.x + f.r * Math.cos(w)},${f.y + f.r * Math.sin(w)}`;
              const gross = Math.abs(f.winkel) > Math.PI ? 1 : 0;
              const richtung = f.winkel >= 0 ? 1 : 0;
              return <path key={i} d={`M ${p(a)} A ${f.r} ${f.r} 0 ${gross} ${richtung} ${p(e)}`} fill="none" stroke={f.farbe} strokeWidth={f.linie} />;
            }
            case "text":
              return (
                <text key={i} x={f.x} y={f.y} fill={f.farbe} fontSize={16} dominantBaseline="hanging" fontFamily="sans-serif">
                  {f.text}
                </text>
              );
            default:
              return null;
          }
        })}
      </svg>
      <figcaption>{titel}</figcaption>
    </figure>
  );
}
