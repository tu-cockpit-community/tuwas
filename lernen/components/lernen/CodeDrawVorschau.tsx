import type { Form } from "@/lib/lernen/java/codedraw";

/**
 * SVG-Vorschau der Fake-CodeDraw-Formen. Koordinaten wie CodeDraw: Ursprung links oben, y nach unten,
 * Winkel im Bogenmass ab 3 Uhr im Uhrzeigersinn. Die Leinwand bleibt auch im Dunkelmodus weiss,
 * weil Farben der Zeichnung Teil der Aufgabe sind.
 */
/** Eine Form als SVG-Element (gemeinsam fuer die Vorschau der Pruefung und die Zeichenflaeche der Ablaufansicht) */
export function FormElement({ f }: { f: Form }) {
  const malen = f.gefuellt ? { fill: f.farbe, stroke: "none" } : { fill: "none", stroke: f.farbe, strokeWidth: f.linie };
  switch (f.art) {
    case "hintergrund":
      return <rect x={0} y={0} width={f.b} height={f.h} fill={f.farbe} />;
    case "punkt":
      return <circle cx={f.x} cy={f.y} r={Math.max(0.75, f.linie / 2)} fill={f.farbe} />;
    case "linie":
      return <line x1={f.x1} y1={f.y1} x2={f.x2} y2={f.y2} stroke={f.farbe} strokeWidth={f.linie} strokeLinecap="round" />;
    case "kreis":
      return <circle cx={f.x} cy={f.y} r={Math.max(0, f.r)} {...malen} />;
    case "ellipse":
      return <ellipse cx={f.x} cy={f.y} rx={Math.max(0, f.rx)} ry={Math.max(0, f.ry)} {...malen} />;
    case "rechteck":
      return <rect x={f.x} y={f.y} width={Math.max(0, f.b)} height={Math.max(0, f.h)} {...malen} />;
    case "dreieck":
      return <polygon points={`${f.x1},${f.y1} ${f.x2},${f.y2} ${f.x3},${f.y3}`} {...malen} />;
    case "bogen": {
      const a = f.start;
      const e = f.start + f.winkel;
      const p = (w: number) => `${f.x + f.r * Math.cos(w)},${f.y + f.r * Math.sin(w)}`;
      const gross = Math.abs(f.winkel) > Math.PI ? 1 : 0;
      const richtung = f.winkel >= 0 ? 1 : 0;
      return <path d={`M ${p(a)} A ${f.r} ${f.r} 0 ${gross} ${richtung} ${p(e)}`} fill="none" stroke={f.farbe} strokeWidth={f.linie} />;
    }
    case "text":
      return (
        <text x={f.x} y={f.y} fill={f.farbe} fontSize={16} dominantBaseline="hanging" fontFamily="sans-serif">
          {f.text}
        </text>
      );
    default:
      return null;
  }
}

/** Umschliessendes Rechteck einer Form in Leinwandkoordinaten (Linienbreite eingerechnet); null bei `fenster` */
export function formGrenzen(f: Form): { x: number; y: number; b: number; h: number } | null {
  const rahmen = (x0: number, y0: number, x1: number, y1: number, rand: number) => ({ x: Math.min(x0, x1) - rand, y: Math.min(y0, y1) - rand, b: Math.abs(x1 - x0) + 2 * rand, h: Math.abs(y1 - y0) + 2 * rand });
  const rand = f.gefuellt ? 0 : f.linie / 2;
  switch (f.art) {
    case "hintergrund":
      return { x: 0, y: 0, b: f.b, h: f.h };
    case "punkt":
      return rahmen(f.x, f.y, f.x, f.y, Math.max(0.75, f.linie / 2));
    case "linie":
      return rahmen(f.x1, f.y1, f.x2, f.y2, f.linie / 2);
    case "kreis":
      return rahmen(f.x - f.r, f.y - f.r, f.x + f.r, f.y + f.r, rand);
    case "ellipse":
      return rahmen(f.x - f.rx, f.y - f.ry, f.x + f.rx, f.y + f.ry, rand);
    case "rechteck":
      return rahmen(f.x, f.y, f.x + f.b, f.y + f.h, rand);
    case "dreieck":
      return rahmen(Math.min(f.x1, f.x2, f.x3), Math.min(f.y1, f.y2, f.y3), Math.max(f.x1, f.x2, f.x3), Math.max(f.y1, f.y2, f.y3), rand);
    case "bogen": {
      // Punkte entlang des Bogens abtasten (reicht fuer einen Rahmen)
      const xs: number[] = [];
      const ys: number[] = [];
      for (let k = 0; k <= 32; k++) {
        const w = f.start + (f.winkel * k) / 32;
        xs.push(f.x + f.r * Math.cos(w));
        ys.push(f.y + f.r * Math.sin(w));
      }
      return rahmen(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys), f.linie / 2);
    }
    case "text":
      // grob: 16px-Schrift, rund 9px je Zeichen
      return { x: f.x, y: f.y, b: Math.max(9, f.text.length * 9), h: 18 };
    default:
      return null;
  }
}

export function CodeDrawVorschau({ formen, titel }: { formen: Form[]; titel: string }) {
  const fenster = formen.find((f) => f.art === "fenster");
  const b = fenster && "b" in fenster ? fenster.b : 600;
  const h = fenster && "h" in fenster ? fenster.h : 600;
  const sichtbar = formen.filter((f) => f.art !== "fenster");
  return (
    <figure className="codedraw">
      <svg viewBox={`0 0 ${b} ${h}`} role="img" aria-label={`${titel}: ${sichtbar.length} Formen auf ${b} × ${h} Pixeln`} className="codedraw-svg">
        <rect x={0} y={0} width={b} height={h} fill="#ffffff" />
        {sichtbar.map((f, i) => (
          <FormElement key={i} f={f} />
        ))}
      </svg>
      <figcaption>{titel}</figcaption>
    </figure>
  );
}
