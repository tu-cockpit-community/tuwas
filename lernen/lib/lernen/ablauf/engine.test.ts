/**
 * Semantik der Ablauf-Engine: Ausgaben wie echtes Java. Jeder Erwartungswert ist im Kommentar begruendet und wurde
 * zusaetzlich mit javac/java 21 (Gebiet C/US, Dezimalpunkt) gegengeprueft.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { erzeugeAblauf, type Ablauf, type AblaufOptionen } from "./index";
import { doubleText, floatText, javaFormat, rundeHalfUp, type FormatArg } from "./formatiere";

function lauf(quelle: string, opt: AblaufOptionen = {}): Ablauf {
  const r = erzeugeAblauf(quelle, { maxSchritte: 100000, ...opt });
  assert.ok(r.ok, `nicht ausfuehrbar: ${JSON.stringify(r)}`);
  return r.ablauf;
}
const aus = (quelle: string, opt: AblaufOptionen = {}) => lauf(quelle, opt).ausgabe;

test("Ganzzahldivision rundet zur Null hin, der Rest hat das Vorzeichen des Dividenden", () => {
  // 7/2 = 3.5 -> 3; -7/2 = -3.5 -> -3 (nicht -4); 7 % -2 = 7 - (-3)(-2) = 1; -7 % 2 = -7 - (-3)(2) = -1; 7/2.0 = 3.5
  assert.equal(aus("System.out.println(7 / 2); System.out.println(-7 / 2); System.out.println(7 % -2); System.out.println(-7 % 2); System.out.println(7 / 2.0);"), "3\n-3\n1\n-1\n3.5\n");
});

test("int-Ueberlauf (32 Bit), long, Casts schneiden ab", () => {
  const q =
    "int m = Integer.MAX_VALUE; System.out.println(m + 1); System.out.println(m * 2); long l = m; System.out.println(l + 1);" +
    "System.out.println(Long.MAX_VALUE + 1); System.out.println(Math.abs(Integer.MIN_VALUE)); System.out.println((byte) 200);" +
    "System.out.println((int) 3.99); System.out.println((int) -3.99); System.out.println((int) 1e20); System.out.println((char) 65 + \"\" + (int) 'A');";
  // 2^31-1 + 1 laeuft auf -2^31; (2^31-1)*2 = 2^32-2 -> -2; als long kein Ueberlauf; Long.MAX+1 -> Long.MIN;
  // |MIN| passt nicht -> MIN; 200 - 256 = -56; Casts schneiden zur Null hin ab; 1e20 wird auf MAX_VALUE begrenzt
  assert.equal(aus(q), "-2147483648\n-2\n2147483648\n-9223372036854775808\n-2147483648\n-56\n3\n-3\n2147483647\nA65\n");
});

test("char rechnet mit dem Zeichencode, Verkettung von links", () => {
  const q =
    "char c = 'a'; System.out.println(c + 1); System.out.println((char)(c + 1)); System.out.println(c + c); System.out.println(\"\" + c + c);" +
    "System.out.println('a' + 'b' + \"c\"); System.out.println(\"c\" + 'a' + 'b'); c += 2; System.out.println(c); c++; System.out.println(c);";
  // 'a' = 97: 97+1 = 98; (char) 98 = b; 97+97 = 194; "" + 'a' + 'a' = "aa"; 'a'+'b' = 195 (zuerst gerechnet), dann "c";
  // "c" + 'a' + 'b' haengt an; c += 2 bleibt char ('c'); c++ ergibt 'd'
  assert.equal(aus(q), "98\nb\n194\naa\n195c\ncab\nc\nd\n");
});

test("double-Ausgabe wie Double.toString", () => {
  const q =
    "System.out.println(10.0 / 4); System.out.println(1e10); System.out.println(1.0e-4); System.out.println(100.0); System.out.println(0.1 + 0.2);" +
    "System.out.println(1.0 / 0); System.out.println(0.0 / 0); System.out.println(-0.0); System.out.println(20.0 / 3); System.out.println(1234567.0);" +
    "System.out.println(12345678.0); System.out.println((float) 0.1); System.out.println(3 * 0.1); System.out.println(1.0f / 3);";
  // ab 10^7 und unter 10^-3 wissenschaftlich; sonst mindestens eine Nachkommastelle; kuerzeste eindeutige Ziffernfolge
  assert.equal(
    aus(q),
    "2.5\n1.0E10\n1.0E-4\n100.0\n0.30000000000000004\nInfinity\nNaN\n-0.0\n6.666666666666667\n1234567.0\n1.2345678E7\n0.1\n0.30000000000000004\n0.33333334\n",
  );
  assert.equal(doubleText(5e-324), "4.9E-324"); // Java waehlt bei einer Ziffer die naechstgelegene zweistellige Darstellung
  assert.equal(doubleText(1e7), "1.0E7");
  assert.equal(doubleText(0.001), "0.001");
  assert.equal(floatText(Math.fround(-3696141.25)), "-3696141.2"); // Gleichstand: gerade letzte Ziffer
});

test("printf/format: Breite, Flags, HALF_UP-Rundung, %n und %%", () => {
  const q =
    'System.out.printf("%d|%5d|%-5d|%05d|%,d%n", 42, 42, 42, 42, 1234567); System.out.printf("%.2f|%8.3f|%.0f|%e%n", 3.14159, 2.5, 2.5, 12345.678);' +
    'System.out.printf("%s|%10s|%-6s|%c|%b|%x|%%%n", "ab", "rechts", "li", \'z\', true, 255); System.out.println(String.format("%.2f|%.1f|%s", 1.005, 0.05, 1.0 / 3));';
  // %.0f von 2.5 rundet HALF_UP auf 3; 1.005 hat die kuerzeste Darstellung "1.005" -> HALF_UP 1.01 (nicht 1.00 wie in C)
  assert.equal(aus(q), "42|   42|42   |00042|1,234,567\n3.14|   2.500|3|1.234568e+04\nab|    rechts|li    |z|true|ff|%\n1.01|0.1|0.3333333333333333\n");
  assert.deepEqual(rundeHalfUp(0.125, 2), { ganz: "0", bruch: "13" });
  const c: FormatArg = { art: "char", wert: 97, klasse: "java.lang.Character" };
  assert.throws(() => javaFormat("%d", [c], String), /d != java.lang.Character/);
});

test("Strings haben Identitaet: == vergleicht Referenzen, Literale und Konstanten sind interniert", () => {
  const q =
    'String a = "hi"; String b = "hi"; String c = new String("hi"); String d = "h" + "i"; String h = "h"; String e = h + "i";' +
    'final String f = "h"; String g = f + "i";' +
    'System.out.println((a == b) + " " + (a == c) + " " + (a == d) + " " + (a == e) + " " + (a == g) + " " + a.equals(c) + " " + (a == e.intern()) + " " + (a.substring(0) == a) + " " + (a.toUpperCase() == a));';
  // gleiche Literale: dasselbe Objekt; new String: neues Objekt; "h"+"i" ist eine Konstante (zur Uebersetzungszeit);
  // h + "i" entsteht zur Laufzeit (neu); f ist final mit Konstante, also wieder Konstante; substring(0) liefert this;
  // toUpperCase aendert etwas, also neues Objekt
  assert.equal(aus(q), "true false true false true true true true false\n");
});

test("String-Methoden", () => {
  const q =
    'String s = "Hallo Welt"; System.out.println(s.length() + " " + s.charAt(4) + " " + s.substring(6) + " " + s.substring(1, 4) + " " + s.indexOf(\'l\') + " " + s.lastIndexOf("l") + " " + s.toUpperCase() + " " + s.replace(\'l\', \'L\') + " " + s.contains("We") + " " + "b".compareTo("a") + " " + "Abc".compareTo("abc") + " " + Arrays.toString("a,b,,c,,".split(",")) + " " + "ab".repeat(3) + " " + "  x ".trim() + "|");';
  // compareTo: 'b'-'a' = 1, 'A'-'a' = 65-97 = -32; split entfernt leere Teile am Ende
  assert.equal(aus(q), "10 o Welt all 2 8 HALLO WELT HaLLo WeLt true 1 -32 [a, b, , c] ababab x|\n");
});

test("Arrays: Referenzen, 2D, char[] ausgeben, Arrays-Methoden", () => {
  const q =
    "int[] a = new int[3]; a[1] = 5; int[] b = a; b[2] = 7; System.out.println(Arrays.toString(a)); int[][] m = {{1, 2}, {3}};" +
    "System.out.println(m[1].length + \" \" + Arrays.deepToString(m)); char[] cs = {'h', 'i'}; System.out.println(cs);" +
    "System.out.println(Arrays.equals(a, new int[]{0, 5, 7})); int[] k = Arrays.copyOf(a, 5); Arrays.sort(k); System.out.println(Arrays.toString(k));";
  // b zeigt auf dasselbe Array wie a; println(char[]) gibt die Zeichen aus; copyOf fuellt mit 0 auf
  assert.equal(aus(q), "[0, 5, 7]\n1 [[1, 2], [3]]\nhi\ntrue\n[0, 0, 0, 5, 7]\n");
});

test("switch: Fallthrough, String-switch, Pfeilform und switch-Ausdruck", () => {
  const q =
    'String t = "b";' +
    ' switch (t) { case "a": System.out.print("A"); case "b": System.out.print("B"); case "c": System.out.print("C"); break; default: System.out.print("D"); }' +
    ' int k = 3; switch (k) { case 1, 2 -> System.out.print("x"); case 3 -> System.out.print("y"); default -> System.out.print("z"); } System.out.println();' +
    " int w = switch (k) { case 3 -> 30; default -> 0; }; System.out.println(w); switch (k) { case 1: System.out.println(1); }";
  // ab case "b" ohne break weiter bis zum break nach "C"; Pfeilform faellt nicht durch; kein passender Fall ohne default: nichts
  assert.equal(aus(q), "BCy\n30\n");
});

test("Schleifen: break/continue mit Marke, do-while, for-each", () => {
  const q =
    "int s = 0; aussen: for (int i = 0; i < 5; i++) { for (int j = 0; j < 5; j++) { if (j == 3) continue aussen; if (i == 3) break aussen; s += j; } } System.out.println(s);" +
    " int n = 0; do { n += 3; } while (n < 10); System.out.println(n); int z = 0; while (z < 3) z++; System.out.println(z);" +
    " for (int x : new int[]{1, 2, 3}) { if (x == 2) continue; System.out.print(x); } System.out.println();";
  // i = 0, 1, 2 addieren je 0+1+2 = 3 (bei j == 3 weiter aussen), bei i == 3 Abbruch: 9; n: 3, 6, 9, 12
  assert.equal(aus(q), "9\n12\n3\n13\n");
});

test("?: hat einen gemeinsamen Typ (numerische Promotion, char bei int-Konstante)", () => {
  const q = 'System.out.println(true ? 1 : 2.0); System.out.println(false ? 1 : \'x\'); char c = \'a\'; int i = 1; System.out.println(true ? c : i); System.out.println(true ? c : 0); System.out.println(i > 0 ? "pos" : "neg");';
  // int und double -> double (1.0); int-Konstante und char -> char; char und int-Variable -> int (97); char und 0 -> char
  assert.equal(aus(q), "1.0\nx\n97\na\npos\n");
});

test("Verbundzuweisung mit verstecktem Cast", () => {
  const q =
    'int x = 5; x += 2.7; System.out.println(x); x -= 0.5; System.out.println(x); short s = 1; s += 70000; System.out.println(s); x *= 2.5; System.out.println(x);' +
    ' String t = "a"; t += 1 + 2; System.out.println(t); char c = \'a\'; c *= 2; System.out.println((int) c);';
  // (int)(7.7) = 7; (int)(6.5) = 6; (short) 70001 = 70001 - 65536 = 4465; (int) 15.0 = 15; 1 + 2 wird zuerst gerechnet; 'a' * 2 = 194
  assert.equal(aus(q), "7\n6\n4465\n15\na3\n194\n");
});

test("++/-- vorne und hinten, Auswertung von links", () => {
  const q = 'int i = 5; int j = i++ + ++i; System.out.println(i + " " + j); int k = 1; k = k++; System.out.println(k); int[] a = {0, 0}; int p = 0; a[p++] = p; System.out.println(a[0] + " " + a[1] + " " + p);';
  // i++ liefert 5 (i = 6), ++i liefert 7: j = 12; k = k++ speichert den alten Wert 1; a[p++]: Index 0 zuerst, dann rechts p = 1
  assert.equal(aus(q), "7 12\n1\n1 0 1\n");
});

test("Math, Integer, Character, Double", () => {
  assert.equal(
    aus('System.out.println(Math.max(3, 7L) + " " + Math.pow(2, 10) + " " + Math.sqrt(2) + " " + Math.round(2.5) + " " + Math.round(-2.5) + " " + Math.abs(-4.5) + " " + Math.floor(-1.5) + " " + Math.ceil(1.2) + " " + Math.min(-0.0, 0.0) + " " + Math.round(2.4f) + " " + Math.PI);'),
    // max(int, long) ist long; pow/sqrt/floor/ceil liefern double; round(.5) rundet Richtung +unendlich: 3 und -2
    "7 1024.0 1.4142135623730951 3 -2 4.5 -2.0 2.0 -0.0 2 3.141592653589793\n",
  );
  assert.equal(
    aus('System.out.println(Integer.parseInt("-42") + 1); System.out.println(Character.isDigit(\'7\') + " " + Character.isLetter(\'ß\') + " " + Character.toUpperCase(\'q\') + " " + Character.getNumericValue(\'z\') + " " + Integer.toBinaryString(10) + " " + Integer.MIN_VALUE + " " + Double.parseDouble("2.5") + " " + Integer.toString(255, 16) + " " + Long.MAX_VALUE);'),
    "-41\ntrue true Q 35 1010 -2147483648 2.5 ff 9223372036854775807\n",
  );
});

test("Scanner liest Tokens und Zeilen aus stdin", () => {
  const q =
    'Scanner sc = new Scanner(System.in); int a = sc.nextInt(); int b = sc.nextInt(); String rest = sc.nextLine(); String z = sc.nextLine(); System.out.println(a + b); System.out.println("[" + rest + "][" + z + "]"); System.out.println(sc.hasNextInt() + " " + sc.nextInt() + " " + sc.hasNext());';
  // nach nextInt steht der Zeilenumbruch noch in der Eingabe: das erste nextLine liefert ""
  assert.equal(aus(q, { stdin: "3 4\nHallo Welt\n7" }), "7\n[][Hallo Welt]\ntrue 7 false\n");
  const leer = lauf("Scanner sc = new Scanner(System.in); int n = sc.nextInt();", { stdin: "" });
  assert.equal(leer.fehler?.name, "NoSuchElementException");
  const falsch = lauf("Scanner sc = new Scanner(System.in); int n = sc.nextInt();", { stdin: "abc" });
  assert.equal(falsch.fehler?.name, "InputMismatchException");
});

test("java.util.Random mit Startwert ist exakt nachgebaut", () => {
  const q = 'Random r = new Random(42); System.out.println(r.nextInt(10) + " " + r.nextInt(10) + " " + r.nextInt()); System.out.println(new Random(42).nextDouble()); System.out.println(new Random(7).nextInt(1, 7) + " " + new Random(3).nextBoolean() + " " + new Random(5).nextLong() + " " + new Random(1).nextInt(100));';
  // Werte von java.util.Random (JDK 21) mit denselben Startwerten
  assert.equal(aus(q), "0 3 -1360544799\n0.7275636800328681\n5 true -4971030886054769832 85\n");
});

test("StringBuilder veraendert sich selbst", () => {
  const q = 'StringBuilder sb = new StringBuilder("ab"); sb.append(1).append(\'c\').append(2.5); sb.insert(0, "x"); System.out.println(sb + " " + sb.length() + " " + sb.reverse() + " " + sb.charAt(0)); sb.setCharAt(0, \'Z\'); sb.deleteCharAt(1); System.out.println(sb.toString());';
  // von links: erst der Inhalt "xab1c2.5", dann die Laenge 8, dann reverse (veraendert sb!), dann charAt(0) des Umgedrehten
  assert.equal(aus(q), "xab1c2.5 8 5.2c1bax 5\nZ2c1bax\n");
});

test("Methoden: Ueberladung nach Typ, Varargs, Rekursion, statische Felder", () => {
  const q = `public class M {
    static int zaehler = 0;
    static int f(int x) { return 1; }
    static int f(double x) { return 2; }
    static int f(long x) { return 3; }
    static int summe(int... z) { int s = 0; for (int x : z) s += x; return s; }
    static int fib(int n) { zaehler++; return n < 2 ? n : fib(n - 1) + fib(n - 2); }
    public static void main(String[] args) {
        System.out.println(f(1) + " " + f(1L) + " " + f(1.0f) + " " + f('a'));
        System.out.println(summe() + " " + summe(1, 2, 3));
        System.out.println(fib(6) + " " + zaehler);
    }
}`;
  // f(1.0f): float passt nur zu double; f('a'): char wird am liebsten zu int; fib(6) = 8 mit 25 Aufrufen
  assert.equal(aus(q), "1 3 2 1\n0 6\n8 25\n");
});

test("Aufruf statt main: Rueckgabewert, vorher und In-place-Aenderung", () => {
  const q = "public class A {\n  static int doppelt(int x) { return 2 * x; }\n  static void tausche(int[] a) { int t = a[0]; a[0] = a[1]; a[1] = t; }\n}";
  const r = lauf(q, { aufruf: "doppelt(21)" });
  assert.equal(r.ergebnis, "42");
  assert.equal(r.aufruf, "doppelt(21)");
  const t = lauf(q, { vorher: "int[] a = {1, 2};", aufruf: "tausche(a)" });
  assert.equal(t.ergebnis, undefined); // void: kein Rueckgabewert
  const ende = t.schritte[t.schritte.length - 1];
  assert.equal(ende.art, "ende");
  // der Rahmen "Aufruf" zeigt die vorher-Variable a, die tausche veraendert hat
  assert.deepEqual(ende.frames[0].variablen[0].wert, { art: "array", id: (ende.frames[0].variablen[0].wert as { id: number }).id, elementTyp: "int", elemente: [{ art: "int", text: "2" }, { art: "int", text: "1" }] });
});

test("Laufzeitfehler wie Java: Meldung, Zeile, Ausgabe bis dahin, letzter Schritt zeigt die Stelle", () => {
  const a = lauf('int[] a = {1, 2, 3};\nSystem.out.println("vorher");\nSystem.out.println(a[5]);');
  assert.deepEqual(a.fehler, { name: "ArrayIndexOutOfBoundsException", meldung: "Index 5 out of bounds for length 3", zeile: 3 });
  assert.equal(a.ausgabe, "vorher\n");
  const letzter = a.schritte[a.schritte.length - 1];
  assert.equal(letzter.art, "ende");
  assert.equal(a.quelle.slice(letzter.von, letzter.bis), "a[5]");
  const faelle: [string, string, string][] = [
    ["int x = 0;\nSystem.out.println(5 / x);", "ArithmeticException", "/ by zero"],
    ['String s = "abcd";\nSystem.out.println(s.substring(2, 9));', "StringIndexOutOfBoundsException", "Range [2, 9) out of bounds for length 4"],
    ['String s = "abc";\nSystem.out.println(s.charAt(5));', "StringIndexOutOfBoundsException", "Index 5 out of bounds for length 3"],
    ['int n = Integer.parseInt("x1");', "NumberFormatException", 'For input string: "x1"'],
    ["int[] a = new int[-1];", "NegativeArraySizeException", "-1"],
    ["String s = null;\nint n = s.length();", "NullPointerException", 'Cannot invoke "String.length()" because "s" is null'],
    ['String t = "a".repeat(-1);', "IllegalArgumentException", "count is negative: -1"],
  ];
  for (const [q, name, meldung] of faelle) {
    const r = lauf(q);
    assert.equal(r.fehler?.name, name, q);
    assert.equal(r.fehler?.meldung, meldung, q);
  }
});

test("Grenzen: Endlosschleife, zu viel Ausgabe, Endlosrekursion haengen nie", () => {
  const e = erzeugeAblauf("int i = 0;\nwhile (true) { i++; }", { maxSchritte: 500 });
  assert.ok(e.ok);
  assert.equal(e.ablauf.abgeschnitten, "schritte");
  assert.equal(e.ablauf.schritte.length, 500);
  const o = erzeugeAblauf('while (true) System.out.print("xx");', { maxAusgabe: 101, maxSchritte: 1e6 });
  assert.ok(o.ok);
  assert.equal(o.ablauf.abgeschnitten, "ausgabe");
  assert.equal(o.ablauf.ausgabe.length, 101);
  const r = erzeugeAblauf("public class R {\n  static int f(int n) { return f(n + 1); }\n  public static void main(String[] a) { f(0); }\n}", { maxSchritte: 100000 });
  assert.ok(r.ok);
  assert.equal(r.ablauf.abgeschnitten, "stapel");
  assert.equal(r.ablauf.fehler?.name, "StackOverflowError");
  const z = erzeugeAblauf("long s = 0;\nfor (long i = 0; i < 100000000000L; i++) s += i;", { maxSchritte: 1e9, maxMs: 200 });
  assert.ok(z.ok);
  assert.equal(z.ablauf.abgeschnitten, "zeit");
});

test("nicht unterstuetzt und Syntax/Compilerfehler werden freundlich gemeldet", () => {
  const nu: [string, RegExp][] = [
    ["List<Integer> l = new ArrayList<>();", /Generics/],
    ["Runnable r = () -> {};", /Lambdas/],
    ["Thread.sleep(10);", /Thread/],
    ["double z = Math.random();", /Math\.random/],
    ["Random r = new Random();", /Startwert/],
    ["try { int x = 1; } catch (Exception e) { }", /try/],
    ["int[] a = {1};\nSystem.out.println(a);", /Speicheradresse/],
    ["public class P { int x; P() {} public static void main(String[] a) { P p = new P(); } }", /Objekten/],
    ["static int quadrat(int x) {\n  return x * x;\n}", /nur Methoden/],
  ];
  for (const [q, m] of nu) {
    const r = erzeugeAblauf(q);
    assert.ok(!r.ok && r.grund === "nichtUnterstuetzt", q + " -> " + JSON.stringify(r));
    assert.match(r.meldung, m, q);
  }
  const s = erzeugeAblauf("int x = 3;\nint y = ...;");
  assert.ok(!s.ok && s.grund === "syntax" && s.zeile === 2);
  const c = erzeugeAblauf("int x = 3.5;");
  assert.ok(!c.ok && c.grund === "syntax");
  assert.match(c.meldung, /^Compilerfehler: /);
  const u = erzeugeAblauf("System.out.println(y);");
  assert.ok(!u.ok && u.grund === "syntax");
  assert.match(u.meldung, /unbekannt/);
  // Konstante passt in byte/char: erlaubt; Variable nicht
  assert.equal(aus("byte b = 10; char c = 65; System.out.println(b + \" \" + c);"), "10 A\n");
  const v = erzeugeAblauf("int i = 65; char c = i;");
  assert.ok(!v.ok && v.grund === "syntax");
  // Fehler im Aufruf-Text haben keine Zeile in der gezeigten Quelle
  const a = erzeugeAblauf("public class A { static int f(int x) { return x; } }", { aufruf: "f(3" });
  assert.ok(!a.ok && a.grund === "syntax" && a.zeile === undefined);
  assert.match(a.meldung, /Im Aufruf/);
});

test("Lexer: Text-Block, Escapes und Zahlliterale", () => {
  const q = [
    'String t = """',
    "    Hallo",
    "      Welt\\t",
    '    """;',
    "System.out.print(t + \"|\" + '\\u0041' + \"\\101\\t|\" + 0x1F + 0b101 + 1_000 + 017 + 07L + 1e1f + .5);",
  ].join("\n");
  // Text-Block: gemeinsame Einrueckung weg, \t bleibt; \101 = 'A' (oktal); 0x1F = 31, 0b101 = 5, 017 = 15, 1e1f = 10.0
  assert.equal(aus(q), "Hallo\n  Welt\t\n|AA\t|315100015710.00.5");
});

test("Lektionsausschnitt: lose Methode plus Anweisungen laeuft (Methode wird Teil der ergaenzten Klasse)", () => {
  assert.equal(aus("static int quadrat(int x) {\n    return x * x;\n}\nSystem.out.println(quadrat(4));"), "16\n");
});
