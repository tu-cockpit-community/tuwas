package codedraw;

import java.awt.Color;

/** Farbkonstanten wie codedraw.Palette (CSS-Farbnamen), Teilmenge fuer die Aufgabenblaetter. */
public final class Palette {
  private Palette() {}

  public static final Color BLACK = new Color(0x000000);
  public static final Color WHITE = new Color(0xFFFFFF);
  public static final Color RED = new Color(0xFF0000);
  public static final Color GREEN = new Color(0x008000);
  public static final Color LIME = new Color(0x00FF00);
  public static final Color BLUE = new Color(0x0000FF);
  public static final Color YELLOW = new Color(0xFFFF00);
  public static final Color ORANGE = new Color(0xFFA500);
  public static final Color PINK = new Color(0xFFC0CB);
  public static final Color MAGENTA = new Color(0xFF00FF);
  public static final Color CYAN = new Color(0x00FFFF);
  public static final Color GRAY = new Color(0x808080);
  public static final Color LIGHT_GRAY = new Color(0xD3D3D3);
  public static final Color DARK_GRAY = new Color(0xA9A9A9);
  public static final Color BROWN = new Color(0xA52A2A);
  public static final Color PURPLE = new Color(0x800080);
  public static final Color VIOLET = new Color(0xEE82EE);
  public static final Color INDIGO = new Color(0x4B0082);
  public static final Color NAVY = new Color(0x000080);
  public static final Color TEAL = new Color(0x008080);
  public static final Color OLIVE = new Color(0x808000);
  public static final Color MAROON = new Color(0x800000);
  public static final Color GOLD = new Color(0xFFD700);
  public static final Color SILVER = new Color(0xC0C0C0);
  public static final Color DARK_GREEN = new Color(0x006400);
  public static final Color DARK_BLUE = new Color(0x00008B);
  public static final Color DARK_RED = new Color(0x8B0000);
  public static final Color LIGHT_BLUE = new Color(0xADD8E6);
  public static final Color LIGHT_GREEN = new Color(0x90EE90);
  public static final Color SKY_BLUE = new Color(0x87CEEB);
  public static final Color BEIGE = new Color(0xF5F5DC);
  public static final Color CORAL = new Color(0xFF7F50);
  public static final Color CRIMSON = new Color(0xDC143C);
  public static final Color TURQUOISE = new Color(0x40E0D0);
  public static final Color SALMON = new Color(0xFA8072);
  public static final Color KHAKI = new Color(0xF0E68C);
  public static final Color TRANSPARENT = new Color(0, 0, 0, 0);

  public static Color fromRGB(int red, int green, int blue) { return new Color(red, green, blue); }
  public static Color fromRGB(int rgb) { return new Color(rgb); }
  public static Color fromRGBA(int red, int green, int blue, int alpha) { return new Color(red, green, blue, alpha); }
  public static Color fromGrayscale(int brightness) { return new Color(brightness, brightness, brightness); }
}
