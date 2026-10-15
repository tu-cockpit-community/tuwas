package codedraw;

import java.awt.Color;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * Fake-CodeDraw fuer den EP1-Runner: gleiche Teilmenge der API wie in den Aufgabenblaettern
 * (CodeDraw 5), aber ohne Fenster. Jeder Zeichenaufruf wird als JSON-Form protokolliert; der Pruefer
 * gibt die Formen je Test aus, die Plattform rendert sie als SVG und vergleicht sie mit der Referenz.
 * Koordinaten wie im Original: Ursprung links oben, y nach unten; Kreis/Ellipse ueber den Mittelpunkt,
 * Rechteck/Quadrat ueber die linke obere Ecke.
 */
public class CodeDraw {
  private static final List<String> FORMEN = new ArrayList<>();
  private static final int MAX_FORMEN = 20000;

  private final int breite;
  private final int hoehe;
  private Color farbe = Color.BLACK;
  private double linienbreite = 1;
  private boolean geschlossen;

  public CodeDraw() {
    this(600, 600);
  }

  public CodeDraw(int canvasWidth, int canvasHeight) {
    if (canvasWidth < 1 || canvasHeight < 1) throw new IllegalArgumentException("Die Fenstergröße muss positiv sein.");
    breite = canvasWidth;
    hoehe = canvasHeight;
    neu("fenster", false, "\"b\":" + canvasWidth + ",\"h\":" + canvasHeight);
  }

  /** Vom Pruefer vor jedem Test aufgerufen. */
  public static synchronized void ep1Zuruecksetzen() {
    FORMEN.clear();
  }

  /** JSON-Array aller Formen seit dem letzten Zuruecksetzen, null wenn nichts gezeichnet wurde. */
  public static synchronized String ep1Protokoll() {
    if (FORMEN.isEmpty()) return null;
    return "[" + String.join(",", FORMEN) + "]";
  }

  private static String zahl(double d) {
    if (Double.isNaN(d) || Double.isInfinite(d)) return "null";
    if (d == Math.rint(d) && Math.abs(d) < 1e15) return String.valueOf((long) d);
    return String.format(Locale.ROOT, "%.4f", d);
  }

  private static String hex(Color c) {
    return String.format("\"#%02x%02x%02x\"", c.getRed(), c.getGreen(), c.getBlue());
  }

  private static String text(String s) {
    StringBuilder sb = new StringBuilder("\"");
    for (char c : s.toCharArray()) {
      if (c == '"' || c == '\\') sb.append('\\').append(c);
      else if (c < 0x20) sb.append(' ');
      else sb.append(c);
    }
    return sb.append('"').toString();
  }

  private void neu(String art, boolean gefuellt, String felder) {
    synchronized (CodeDraw.class) {
      if (FORMEN.size() >= MAX_FORMEN) throw new IllegalStateException("Mehr als " + MAX_FORMEN + " Formen gezeichnet (Endlosschleife?)");
      FORMEN.add("{\"art\":\"" + art + "\",\"farbe\":" + hex(farbe) + ",\"gefuellt\":" + gefuellt + ",\"linie\":" + zahl(linienbreite) + "," + felder + "}");
    }
  }

  public int getWidth() { return breite; }
  public int getHeight() { return hoehe; }
  public Color getColor() { return farbe; }
  public void setColor(Color color) {
    if (color == null) throw new NullPointerException("color darf nicht null sein");
    farbe = color;
  }
  public double getLineWidth() { return linienbreite; }
  public void setLineWidth(double lineWidth) {
    if (lineWidth <= 0) throw new IllegalArgumentException("Die Linienbreite muss positiv sein.");
    linienbreite = lineWidth;
  }
  public void setTitle(String title) {}
  public String getTitle() { return "CodeDraw"; }
  public void setAlwaysOnTop(boolean b) {}
  public void setCanvasPositionX(int x) {}
  public void setCanvasPositionY(int y) {}
  public boolean isClosed() { return geschlossen; }
  public void close() { geschlossen = true; }

  public void drawPoint(double x, double y) { neu("punkt", true, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y)); }
  public void drawPixel(double x, double y) { drawPoint(x, y); }

  public void drawLine(double startX, double startY, double endX, double endY) {
    neu("linie", false, "\"x1\":" + zahl(startX) + ",\"y1\":" + zahl(startY) + ",\"x2\":" + zahl(endX) + ",\"y2\":" + zahl(endY));
  }

  private void kreis(double x, double y, double r, boolean f) {
    neu("kreis", f, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y) + ",\"r\":" + zahl(r));
  }
  public void drawCircle(double x, double y, double radius) { kreis(x, y, radius, false); }
  public void fillCircle(double x, double y, double radius) { kreis(x, y, radius, true); }

  private void ellipse(double x, double y, double rx, double ry, boolean f) {
    neu("ellipse", f, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y) + ",\"rx\":" + zahl(rx) + ",\"ry\":" + zahl(ry));
  }
  public void drawEllipse(double x, double y, double horizontalRadius, double verticalRadius) { ellipse(x, y, horizontalRadius, verticalRadius, false); }
  public void fillEllipse(double x, double y, double horizontalRadius, double verticalRadius) { ellipse(x, y, horizontalRadius, verticalRadius, true); }

  private void rechteck(double x, double y, double b, double h, boolean f) {
    neu("rechteck", f, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y) + ",\"b\":" + zahl(b) + ",\"h\":" + zahl(h));
  }
  public void drawRectangle(double x, double y, double width, double height) { rechteck(x, y, width, height, false); }
  public void fillRectangle(double x, double y, double width, double height) { rechteck(x, y, width, height, true); }
  public void drawSquare(double x, double y, double sideLength) { rechteck(x, y, sideLength, sideLength, false); }
  public void fillSquare(double x, double y, double sideLength) { rechteck(x, y, sideLength, sideLength, true); }

  private void dreieck(double x1, double y1, double x2, double y2, double x3, double y3, boolean f) {
    neu("dreieck", f, "\"x1\":" + zahl(x1) + ",\"y1\":" + zahl(y1) + ",\"x2\":" + zahl(x2) + ",\"y2\":" + zahl(y2) + ",\"x3\":" + zahl(x3) + ",\"y3\":" + zahl(y3));
  }
  public void drawTriangle(double x1, double y1, double x2, double y2, double x3, double y3) { dreieck(x1, y1, x2, y2, x3, y3, false); }
  public void fillTriangle(double x1, double y1, double x2, double y2, double x3, double y3) { dreieck(x1, y1, x2, y2, x3, y3, true); }

  public void drawArc(double x, double y, double radius, double startRadians, double sweepRadians) {
    neu("bogen", false, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y) + ",\"r\":" + zahl(radius) + ",\"start\":" + zahl(startRadians) + ",\"winkel\":" + zahl(sweepRadians));
  }

  public void drawText(double x, double y, String text) {
    neu("text", true, "\"x\":" + zahl(x) + ",\"y\":" + zahl(y) + ",\"text\":" + text(String.valueOf(text)));
  }

  /** Loescht die Zeichenflaeche: bisher Gezeichnetes ist danach nicht mehr sichtbar. */
  public void clear() { clear(Color.WHITE); }
  public void clear(Color color) {
    synchronized (CodeDraw.class) {
      FORMEN.removeIf(f -> !f.startsWith("{\"art\":\"fenster\""));
    }
    Color alt = farbe;
    farbe = color;
    neu("hintergrund", true, "\"b\":" + breite + ",\"h\":" + hoehe);
    farbe = alt;
  }

  public void show() {}
  public void show(long waitMilliseconds) {
    if (waitMilliseconds < 0) throw new IllegalArgumentException("Wartezeit muss >= 0 sein.");
  }
}
