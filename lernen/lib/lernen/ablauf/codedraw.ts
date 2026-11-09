/**
 * Konstanten und Zahlenformat fuer CodeDraw in der Ablauf-Engine. Orakel ist das Fake-CodeDraw der Plattform
 * (lib/lernen/java/codedraw/CodeDraw.java und Palette.java): gleiche Farbwerte, gleiches Zahlenformat der Formen.
 */

/** Obergrenze des Fakes: mehr Formen gleichzeitig -> IllegalStateException */
export const MAX_FORMEN = 20000;

/** Standardgroesse von `new CodeDraw()` */
export const FENSTER_STANDARD = 600;

/** [r, g, b, a, deutscher Name] je Konstante von `codedraw.Palette` (wie Palette.java) */
export const PALETTE: Record<string, [number, number, number, number, string]> = {
  BLACK: [0x00, 0x00, 0x00, 255, "Schwarz"],
  WHITE: [0xff, 0xff, 0xff, 255, "Weiß"],
  RED: [0xff, 0x00, 0x00, 255, "Rot"],
  GREEN: [0x00, 0x80, 0x00, 255, "Grün"],
  LIME: [0x00, 0xff, 0x00, 255, "Limettengrün"],
  BLUE: [0x00, 0x00, 0xff, 255, "Blau"],
  YELLOW: [0xff, 0xff, 0x00, 255, "Gelb"],
  ORANGE: [0xff, 0xa5, 0x00, 255, "Orange"],
  PINK: [0xff, 0xc0, 0xcb, 255, "Rosa"],
  MAGENTA: [0xff, 0x00, 0xff, 255, "Magenta"],
  CYAN: [0x00, 0xff, 0xff, 255, "Cyan"],
  GRAY: [0x80, 0x80, 0x80, 255, "Grau"],
  LIGHT_GRAY: [0xd3, 0xd3, 0xd3, 255, "Hellgrau"],
  DARK_GRAY: [0xa9, 0xa9, 0xa9, 255, "Dunkelgrau"],
  BROWN: [0xa5, 0x2a, 0x2a, 255, "Braun"],
  PURPLE: [0x80, 0x00, 0x80, 255, "Lila"],
  VIOLET: [0xee, 0x82, 0xee, 255, "Violett"],
  INDIGO: [0x4b, 0x00, 0x82, 255, "Indigo"],
  NAVY: [0x00, 0x00, 0x80, 255, "Marineblau"],
  TEAL: [0x00, 0x80, 0x80, 255, "Blaugrün"],
  OLIVE: [0x80, 0x80, 0x00, 255, "Oliv"],
  MAROON: [0x80, 0x00, 0x00, 255, "Kastanienbraun"],
  GOLD: [0xff, 0xd7, 0x00, 255, "Gold"],
  SILVER: [0xc0, 0xc0, 0xc0, 255, "Silber"],
  DARK_GREEN: [0x00, 0x64, 0x00, 255, "Dunkelgrün"],
  DARK_BLUE: [0x00, 0x00, 0x8b, 255, "Dunkelblau"],
  DARK_RED: [0x8b, 0x00, 0x00, 255, "Dunkelrot"],
  LIGHT_BLUE: [0xad, 0xd8, 0xe6, 255, "Hellblau"],
  LIGHT_GREEN: [0x90, 0xee, 0x90, 255, "Hellgrün"],
  SKY_BLUE: [0x87, 0xce, 0xeb, 255, "Himmelblau"],
  BEIGE: [0xf5, 0xf5, 0xdc, 255, "Beige"],
  CORAL: [0xff, 0x7f, 0x50, 255, "Koralle"],
  CRIMSON: [0xdc, 0x14, 0x3c, 255, "Karmesinrot"],
  TURQUOISE: [0x40, 0xe0, 0xd0, 255, "Türkis"],
  SALMON: [0xfa, 0x80, 0x72, 255, "Lachsrosa"],
  KHAKI: [0xf0, 0xe6, 0x8c, 255, "Khaki"],
  TRANSPARENT: [0, 0, 0, 0, "durchsichtig"],
};

/** Konstanten von `java.awt.Color` (nur die Namen in Grossbuchstaben; die kleingeschriebenen sind dieselben Farben) */
export const AWT_FARBEN: Record<string, [number, number, number, number, string]> = {
  BLACK: [0, 0, 0, 255, "Schwarz"],
  WHITE: [255, 255, 255, 255, "Weiß"],
  RED: [255, 0, 0, 255, "Rot"],
  GREEN: [0, 255, 0, 255, "Grün"],
  BLUE: [0, 0, 255, 255, "Blau"],
  YELLOW: [255, 255, 0, 255, "Gelb"],
  ORANGE: [255, 200, 0, 255, "Orange"],
  PINK: [255, 175, 175, 255, "Rosa"],
  MAGENTA: [255, 0, 255, 255, "Magenta"],
  CYAN: [0, 255, 255, 255, "Cyan"],
  GRAY: [128, 128, 128, 255, "Grau"],
  LIGHT_GRAY: [192, 192, 192, 255, "Hellgrau"],
  DARK_GRAY: [64, 64, 64, 255, "Dunkelgrau"],
};

const KLEINGESCHRIEBEN: Record<string, string> = {
  white: "WHITE",
  lightGray: "LIGHT_GRAY",
  gray: "GRAY",
  darkGray: "DARK_GRAY",
  black: "BLACK",
  red: "RED",
  pink: "PINK",
  orange: "ORANGE",
  yellow: "YELLOW",
  green: "GREEN",
  magenta: "MAGENTA",
  cyan: "CYAN",
  blue: "BLUE",
};

/** `Color.red` und `Color.RED` sind dieselbe Konstante: liefert den Namen in Grossbuchstaben oder null (gibt es nicht) */
export function awtKonstante(name: string): string | null {
  if (Object.hasOwn(AWT_FARBEN, name)) return name;
  return Object.hasOwn(KLEINGESCHRIEBEN, name) ? KLEINGESCHRIEBEN[name] : null;
}

/** `#rrggbb` wie `hex(Color)` im Fake (der Alphawert geht nicht ein) */
export function hexJ(r: number, g: number, b: number): string {
  const h = (n: number) => n.toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}

/**
 * Zahl wie `zahl(double)` im Fake: ganze Zahlen ohne Nachkommastellen, sonst `%.4f` (Locale.ROOT, HALF_UP auf der
 * kuerzesten Dezimaldarstellung wie Javas Formatter); NaN und Unendlich werden zu `null` (hier NaN: JSON.stringify
 * macht daraus ebenfalls `null`).
 */
export function zahlJ(d: number): number {
  if (!Number.isFinite(d)) return NaN;
  if (d === Math.round(d) && Math.abs(d) < 1e15) return d === 0 ? 0 : d;
  return auf4(d);
}

function auf4(d: number): number {
  const neg = d < 0;
  const [mant, exp] = Math.abs(d).toExponential().split("e");
  const ziffern = mant.replace(".", "");
  // Wert = 0.ziffern * 10^(e10)  mit e10 = exp + 1
  const e10 = Number(exp) + 1;
  // auf 4 Nachkommastellen: ganze Zahl n = round_half_up(Wert * 10^4)
  const stellen = e10 + 4;
  let n: bigint;
  if (stellen < 0) n = BigInt(0);
  else {
    const rest = ziffern.length - stellen;
    if (rest <= 0) n = BigInt(ziffern + "0".repeat(-rest));
    else {
      n = BigInt(ziffern.slice(0, stellen) || "0");
      if (ziffern.charCodeAt(stellen) >= 53) n += BigInt(1);
    }
  }
  const text = n.toString().padStart(5, "0");
  const v = Number(text.slice(0, -4) + "." + text.slice(-4));
  return neg && v !== 0 ? -v : neg ? -0 : v;
}

/** Zahl im Erklaersatz: ganze Zahlen ohne `.0`, sonst hoechstens vier Nachkommastellen */
export function zahlText(d: number): string {
  if (!Number.isFinite(d)) return String(d);
  const z = zahlJ(d);
  return Object.is(z, -0) ? "0" : String(z);
}

/** Zeichen unter 0x20 werden im Fake zu Leerzeichen (JSON-sicher) */
export function formText(s: string): string {
  return s.replace(/[\u0000-\u001f]/g, " ");
}
