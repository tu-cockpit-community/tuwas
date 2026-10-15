/**
 * TUWAS-Logo nach docs/logo (1 Einheit = Strichstaerke, Fasen 45 Grad). Der Block bleibt in beiden
 * Themes TU-Blau, die Wortmarke wechselt im Dark Mode auf Weiss (Vorlage 3a/3e).
 * Mindesthoehe 16 px; darunter nur das Favicon mit "WAS".
 */

const TU = (
  <>
    <rect width="4" height="1" />
    <rect x="1.5" y="1" width="1" height="4" />
    <path d="M5 0H6V4H8V0H9V4L8 5H6L5 4Z" />
  </>
);

const WAS = (
  <path
    fillRule="evenodd"
    d="M0 0H1V4H2V2H3V4H4V0H5V4L4 5H1L0 4Z M6 5V1L7 0H9L10 1V5H9V3H7V5ZM7 2H9V1.41L8.59 1H7.41L7 1.41Z M12 0H15V1H12.41L12 1.41V2H14L15 3V4L14 5H11V4H13.59L14 3.59V3H12L11 2V1Z"
  />
);

type Variante = "lockup" | "stack" | "bar";

const MASSE: Record<Variante, { viewBox: string; breite: number; hoehe: number }> = {
  lockup: { viewBox: "0 0 28 8", breite: 28, hoehe: 8 },
  stack: { viewBox: "0 0 15 14.5", breite: 15, hoehe: 14.5 },
  bar: { viewBox: "0 0 29 8", breite: 29, hoehe: 8 },
};

interface Props {
  variante?: Variante;
  /** Hoehe in px; die Breite folgt dem Seitenverhaeltnis. */
  hoehe?: number;
  className?: string;
}

export function Logo({ variante = "lockup", hoehe = 32, className }: Props): React.JSX.Element {
  const m = MASSE[variante];
  return (
    <svg
      viewBox={m.viewBox}
      height={hoehe}
      width={(hoehe * m.breite) / m.hoehe}
      role="img"
      aria-label="TUWAS"
      className={className}
    >
      {variante === "lockup" && (
        <>
          <rect width="12" height="8" className="fill-brand" />
          <g transform="translate(1.5 1.5)" fill="#fff">{TU}</g>
          <g transform="translate(13 1.5)" className="fill-logo-was">{WAS}</g>
        </>
      )}
      {variante === "stack" && (
        <>
          <rect width="15" height="8" className="fill-brand" />
          <g transform="translate(3 1.5)" fill="#fff">{TU}</g>
          <g transform="translate(0 9.5)" className="fill-logo-was">{WAS}</g>
        </>
      )}
      {variante === "bar" && (
        <>
          <rect width="29" height="8" className="fill-brand" />
          <g transform="translate(1.5 1.5)" fill="#fff">{TU}</g>
          <g transform="translate(12.5 1.5)" fill="#fff">{WAS}</g>
        </>
      )}
    </svg>
  );
}
