import java.io.*;
import java.lang.reflect.Array;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

/**
 * Laufzeit fuer den generierten Pruefer (Ep1Pruefer.java). Jeder Test laeuft in einem eigenen Thread mit
 * Zeitlimit; System.out/System.in werden je Test umgelenkt. Ergebnisse gehen als JSON-Zeilen mit dem
 * Praefix "\u0001EP1 " auf den urspruenglichen stdout, damit Ausgaben der Lernenden nicht stoeren.
 */
public final class Ep1Lauf {
  private Ep1Lauf() {}

  public interface Lauf {
    Object lauf() throws Throwable;
  }

  /** Marker fuer Tests ohne Rueckgabewert. */
  public static final Object NICHTS = new Object();

  private static PrintStream protokoll;
  private static String datei = "";
  private static int anzahl;
  private static final int MAX_AUSGABE = 16 * 1024;

  public static void start(String dateiDerLernenden, int tests) {
    protokoll = new PrintStream(new FileOutputStream(FileDescriptor.out), true, StandardCharsets.UTF_8);
    // System.out zeigt ausserhalb eines Tests ins Leere: Threads der Lernenden, die nach ihrem Test weiter
    // ausgeben, wuerden sonst grosse Protokollzeilen (geschrieben in 8-KB-Stuecken) mittendrin zerschneiden
    System.setOut(new PrintStream(OutputStream.nullOutputStream(), true, StandardCharsets.UTF_8));
    datei = dateiDerLernenden;
    anzahl = tests;
  }

  public static Object wert(Object o) {
    return o;
  }

  /** Begrenzter Puffer: verhindert, dass eine Endlosausgabe den Speicher fuellt. */
  static final class Begrenzt extends OutputStream {
    final ByteArrayOutputStream b = new ByteArrayOutputStream();
    boolean abgeschnitten;

    @Override public synchronized void write(int x) {
      if (b.size() < MAX_AUSGABE) b.write(x);
      else abgeschnitten = true;
    }

    @Override public synchronized void write(byte[] d, int off, int len) {
      int frei = MAX_AUSGABE - b.size();
      if (len > frei) abgeschnitten = true;
      b.write(d, off, Math.max(0, Math.min(len, frei)));
    }

    String text() {
      return b.toString(StandardCharsets.UTF_8) + (abgeschnitten ? "\n[… Ausgabe gekürzt]" : "");
    }
  }

  /**
   * Fuehrt einen Test aus. erwartet == null: kein Wertvergleich (nur Ausgabe/Zeichnung/keine Exception).
   * vergleichen == false bei Tests ohne Rueckgabewert.
   */
  public static void test(int nr, long limitMs, String stdin, Lauf lauf, Lauf erwartet, double toleranz) {
    Object soll = null;
    if (erwartet != null) {
      try {
        soll = erwartet.lauf();
      } catch (Throwable t) {
        melde(nr, "fehler", null, null, "", "Testfall fehlerhaft (erwartet-Ausdruck wirft " + t + ")", 0, null);
        return;
      }
    }
    PrintStream altOut = System.out;
    PrintStream altErr = System.err;
    InputStream altIn = System.in;
    Begrenzt puffer = new Begrenzt();
    PrintStream ps = new PrintStream(puffer, true, StandardCharsets.UTF_8);
    System.setOut(ps);
    System.setErr(ps);
    System.setIn(new ByteArrayInputStream((stdin == null ? "" : stdin).getBytes(StandardCharsets.UTF_8)));
    codedraw.CodeDraw.ep1Zuruecksetzen();
    final Object[] ergebnis = new Object[1];
    final Throwable[] fehler = new Throwable[1];
    Thread th = new Thread(null, () -> {
      try {
        ergebnis[0] = lauf.lauf();
      } catch (Throwable t) {
        fehler[0] = t;
      }
    }, "ep1-test-" + nr, 0);
    th.setDaemon(true);
    long t0 = System.nanoTime();
    th.start();
    try {
      th.join(limitMs);
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
    long ms = (System.nanoTime() - t0) / 1_000_000;
    ps.flush();
    System.setOut(altOut);
    System.setErr(altErr);
    System.setIn(altIn);
    String formen = codedraw.CodeDraw.ep1Protokoll();
    if (th.isAlive()) {
      melde(nr, "timeout", null, null, puffer.text(), "Zeitlimit von " + limitMs + " ms überschritten (Endlosschleife oder Endlosrekursion?)", ms, formen);
      for (int i = nr + 1; i < anzahl; i++) melde(i, "abbruch", null, null, "", "Nicht ausgeführt, weil ein vorheriger Test hängen blieb.", 0, null);
      protokoll.flush();
      Runtime.getRuntime().halt(0);
    }
    if (fehler[0] != null) {
      Throwable t = fehler[0];
      String status = t instanceof StackOverflowError ? "stackoverflow" : "exception";
      melde(nr, status, null, erwartet == null ? null : zeige(soll), puffer.text(), beschreibe(t), ms, formen);
      return;
    }
    Object ist = ergebnis[0];
    if (erwartet == null) {
      melde(nr, "ok", ist == NICHTS ? null : zeige(ist), null, puffer.text(), null, ms, formen);
      return;
    }
    boolean gleich = gleich(ist, soll, toleranz);
    melde(nr, gleich ? "ok" : "falsch", zeige(ist), zeige(soll), puffer.text(), null, ms, formen);
  }

  public static void ende() {
    protokoll.flush();
    // Threads der Lernenden (z. B. Fenster-Timer) sollen den Prozess nicht offen halten
    Runtime.getRuntime().halt(0);
  }

  static String beschreibe(Throwable t) {
    String zeile = "";
    for (StackTraceElement e : t.getStackTrace()) {
      if (datei.equals(e.getFileName()) && e.getLineNumber() > 0) {
        zeile = " (Zeile " + e.getLineNumber() + ")";
        break;
      }
    }
    String m = t.getMessage();
    return t.getClass().getName() + (m == null || t instanceof StackOverflowError ? "" : ": " + m) + zeile;
  }

  static boolean gleich(Object a, Object b, double tol) {
    if (a == null || b == null) return a == b;
    if (a instanceof Number x && b instanceof Number y) {
      boolean fliess = x instanceof Double || x instanceof Float || y instanceof Double || y instanceof Float;
      if (!fliess) return x.longValue() == y.longValue();
      double p = x.doubleValue(), q = y.doubleValue();
      if (Double.isNaN(p) || Double.isNaN(q)) return Double.isNaN(p) && Double.isNaN(q);
      return Math.abs(p - q) <= Math.max(tol, 1e-9 * Math.abs(q));
    }
    if (a.getClass().isArray() && b.getClass().isArray()) {
      int n = Array.getLength(a);
      if (n != Array.getLength(b)) return false;
      for (int i = 0; i < n; i++) if (!gleich(Array.get(a, i), Array.get(b, i), tol)) return false;
      return true;
    }
    return Objects.equals(a, b);
  }

  static String zeige(Object o) {
    if (o == null) return "null";
    if (o instanceof String s) return "\"" + s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n") + "\"";
    if (o instanceof Character c) return "'" + c + "'";
    if (o.getClass().isArray()) {
      StringBuilder sb = new StringBuilder("[");
      int n = Array.getLength(o);
      for (int i = 0; i < n; i++) {
        if (i > 0) sb.append(", ");
        sb.append(zeige(Array.get(o, i)));
        if (sb.length() > 4000) {
          sb.append(", …");
          break;
        }
      }
      return sb.append(']').toString();
    }
    String s = String.valueOf(o);
    return s.length() > 4000 ? s.substring(0, 4000) + "…" : s;
  }

  static String json(String s) {
    if (s == null) return "null";
    StringBuilder sb = new StringBuilder("\"");
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      switch (c) {
        case '"' -> sb.append("\\\"");
        case '\\' -> sb.append("\\\\");
        case '\n' -> sb.append("\\n");
        case '\r' -> sb.append("\\r");
        case '\t' -> sb.append("\\t");
        default -> {
          if (c < 0x20) sb.append(String.format("\\u%04x", (int) c));
          else sb.append(c);
        }
      }
    }
    return sb.append('"').toString();
  }

  static synchronized void melde(int nr, String status, String erhalten, String erwartet, String ausgabe, String meldung, long ms, String formen) {
    protokoll.println("\u0001EP1 {\"nr\":" + nr + ",\"status\":" + json(status) + ",\"erhalten\":" + json(erhalten) + ",\"erwartet\":" + json(erwartet)
        + ",\"ausgabe\":" + json(ausgabe) + ",\"meldung\":" + json(meldung) + ",\"ms\":" + ms + ",\"formen\":" + (formen == null ? "null" : formen) + "}");
  }
}
