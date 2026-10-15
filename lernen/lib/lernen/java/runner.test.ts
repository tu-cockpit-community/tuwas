/**
 * Integrationstests des Java-Runners gegen ein echtes JDK (langsam: je Pruefung zwei JVM-Starts).
 *   npx tsx --test lib/lernen/java/*.test.ts      (oder npm run lernen:test:java)
 * Ohne JDK werden sie uebersprungen.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { TeilSchema, type CodeTeil } from "../typen";
import { erzeugePruefer } from "./pruefer";
import { fuehreProgrammeAus, jdkVerfuegbar, pruefeCode, sandbox, sandboxVerfuegbar, starte } from "./runner";

const jdk = jdkVerfuegbar();
const ohne = !jdk.ok ? `kein JDK: ${jdk.meldung}` : !sandboxVerfuegbar() ? "unshare -rn nicht verfügbar" : false;
const opt = { skip: ohne, timeout: 240_000 };

const code = (t: unknown) => TeilSchema.parse({ typ: "code", ...(t as object) }) as CodeTeil;

const quersumme = code({
  vorlage: "import java.util.Scanner;\npublic class Ziffern {\n  public static int quersumme(int n) {\n    return 0;\n  }\n  public static void main(String[] args) {\n  }\n}\n",
  musterloesung:
    "import java.util.Scanner;\npublic class Ziffern {\n  public static int quersumme(int n) {\n    if (n < 10) return n;\n    return n % 10 + quersumme(n / 10);\n  }\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    System.out.println(quersumme(sc.nextInt()));\n  }\n}\n",
  tests: [
    { aufruf: "quersumme(123)", erwartet: "6" },
    { aufruf: "quersumme(0)", erwartet: "0", versteckt: true },
    { aufruf: "System.out.println(quersumme(99))", stdout: "18" },
    { stdin: "4711\n", stdout: "13" },
  ],
  regeln: { keineSchleifenIn: ["quersumme"], rekursiv: ["quersumme"], keinStringGleichOperator: true },
});

test("richtige Lösung besteht alle Tests (Wert, Ausgabe, main mit stdin)", opt, async () => {
  const e = await pruefeCode(quersumme, quersumme.musterloesung);
  assert.equal(e.status, "ok", JSON.stringify(e, null, 1));
  assert.equal(e.tests.length, 4);
  assert.ok(e.tests.every((t) => t.bestanden));
  assert.equal(e.tests[0].erhalten, "6");
  assert.deepEqual(e.regeln, []);
});

test("Endlosrekursion: StackOverflowError mit Hinweis auf den Basisfall", opt, async () => {
  const e = await pruefeCode(quersumme, quersumme.vorlage.replace("return 0;", "return n % 10 + quersumme(n / 10);"));
  assert.equal(e.status, "tests");
  assert.equal(e.tests[0].status, "stackoverflow");
  assert.match(e.tests[0].meldung ?? "", /Basisfall/);
  assert.equal(e.tests[0].bestanden, false);
});

test("Endlosschleife: Zeitlimit, nachfolgende Tests werden als nicht ausgeführt gemeldet", opt, async () => {
  const t = code({ ...quersumme, zeitlimit: 1000, regeln: undefined });
  const e = await pruefeCode(t, t.vorlage.replace("return 0;", "while (n >= 0) { n = n + 0; }\n    return n;"));
  assert.equal(e.tests[0].status, "timeout");
  assert.match(e.tests[0].meldung ?? "", /Zeitlimit/);
  assert.equal(e.tests[1].status, "abbruch");
  assert.ok(e.tests.every((x) => !x.bestanden));
});

test("Regelverstöße: Schleife statt Rekursion, == auf Strings, API außerhalb der Allowlist, Hilfsmethode", opt, async () => {
  const t = code({
    vorlage: "public class R {\n  public static int f(int n, String s) {\n    return 0;\n  }\n}\n",
    musterloesung: "public class R {\n  public static int f(int n, String s) {\n    return n <= 0 ? s.length() : 1 + f(n - 1, s);\n  }\n}\n",
    tests: [{ aufruf: 'f(2, "ab")', erwartet: "4" }],
    regeln: { keineSchleifenIn: ["f"], keinStringGleichOperator: true, erlaubteApi: ["String.length"], keineHilfsmethoden: true, rekursiv: ["f"] },
  });
  const quelle =
    'public class R {\n  public static int f(int n, String s) {\n    int r = 0;\n    for (int i = 0; i < n; i++) r++;\n    if (s == "x") return -1;\n    return Math.abs(r) + hilfe(s);\n  }\n  static int hilfe(String s) { return s.length(); }\n}\n';
  const e = await pruefeCode(t, quelle);
  const regeln = e.regeln.map((r) => r.regel).sort();
  assert.deepEqual(regeln, ["erlaubteApi", "keinStringGleichOperator", "keineHilfsmethoden", "keineSchleifenIn", "rekursiv"], JSON.stringify(e.regeln, null, 1));
  assert.equal(e.regeln.find((r) => r.regel === "keineSchleifenIn")?.zeile, 4);
  assert.equal(e.regeln.find((r) => r.regel === "keinStringGleichOperator")?.zeile, 5);
  assert.match(e.regeln.find((r) => r.regel === "erlaubteApi")?.meldung ?? "", /Math\.abs/);
  // Tests laufen trotzdem: Ergebnis stimmt, aber Regelverstoss => nicht bestanden
  assert.equal(e.tests[0].bestanden, true);
  assert.equal(e.status, "tests");
});

test("Compilerfehler: deutsche Meldung mit Zeile; geänderte Signatur zeigt auf die Tests", opt, async () => {
  const e = await pruefeCode(quersumme, quersumme.vorlage.replace("return 0;", "return n % 10"));
  assert.equal(e.status, "compilerfehler");
  assert.equal(e.compiler[0].zeile, 4);
  assert.equal(e.compiler[0].ort, "eigen");
  assert.match(e.compiler[0].meldung, /erwartet/);
  // Parameter String statt int: die Testaufrufe passen nicht mehr
  const s = await pruefeCode(quersumme, quersumme.vorlage.replace("int quersumme(int n)", "int quersumme(String n)"));
  assert.equal(s.status, "compilerfehler");
  assert.ok(s.compiler.some((c) => c.ort === "tests" && /Signatur|Rückgabetyp|Parameter/.test(c.meldung)), JSON.stringify(s, null, 1));
  assert.ok(s.regeln.some((r) => r.regel === "signaturBeibehalten"));
  // long statt int uebersetzt noch (Erweiterung), faellt aber unter die Signaturregel
  const l = await pruefeCode(quersumme, quersumme.vorlage.replace("int quersumme(int n)", "long quersumme(long n)"));
  assert.equal(l.status, "tests");
  assert.ok(l.regeln.some((r) => r.regel === "signaturBeibehalten"));
});

test("Fake-CodeDraw: Formen werden protokolliert und mit der Musterlösung verglichen (±1 px)", opt, async () => {
  const t = code({
    vorlage: "import codedraw.*;\npublic class Bild {\n  public static void zeichne(CodeDraw cd) {\n  }\n}\n",
    musterloesung:
      "import codedraw.*;\npublic class Bild {\n  public static void zeichne(CodeDraw cd) {\n    cd.setColor(Palette.RED);\n    cd.fillCircle(100, 100, 50);\n    cd.setColor(Palette.BLUE);\n    cd.drawRectangle(10, 20, 30, 40);\n    cd.show();\n  }\n}\n",
    tests: [{ aufruf: "zeichne(new CodeDraw(200, 200))", zeichnung: true }],
  });
  const fastGleich = t.musterloesung.replace("fillCircle(100, 100, 50)", "fillCircle(100.6, 99.5, 50)");
  const gut = await pruefeCode(t, fastGleich);
  assert.equal(gut.status, "ok", JSON.stringify(gut, null, 1));
  assert.equal(gut.tests[0].formen?.find((f) => f.art === "kreis")?.farbe, "#ff0000");
  assert.ok(gut.tests[0].formenSoll?.some((f) => f.art === "rechteck"));
  const schlecht = await pruefeCode(t, t.musterloesung.replace("cd.drawRectangle(10, 20, 30, 40);", ""));
  assert.equal(schlecht.tests[0].bestanden, false);
  assert.match(schlecht.tests[0].meldung ?? "", /fehlen/);
});

test("Große Zeichnung (10000 Pixel je Test) und ein Thread, der zwischen den Tests auf stdout schreibt", opt, async () => {
  const t = code({
    vorlage: "import codedraw.*;\npublic class Bild {\n  public static void zeichne(CodeDraw cd) {\n  }\n}\n",
    musterloesung:
      "import codedraw.*;\npublic class Bild {\n  static boolean an;\n  public static void zeichne(CodeDraw cd) {\n    if (!an) { an = true; Thread t = new Thread(() -> { while (true) { System.out.print(\"x\"); try { Thread.sleep(1); } catch (Exception e) {} } }); t.setDaemon(true); t.start(); }\n    for (int x = 0; x < 100; x++) for (int y = 0; y < 100; y++) cd.drawPixel(x, y);\n  }\n}\n",
    tests: [
      { aufruf: "zeichne(new CodeDraw(200, 200))", zeichnung: true },
      { aufruf: "zeichne(new CodeDraw(200, 200))", zeichnung: true },
    ],
  });
  const e = await pruefeCode(t, t.musterloesung);
  assert.equal(e.status, "ok", JSON.stringify(e.tests.map((x) => x.meldung)));
  assert.equal(e.tests[1].formen?.length, 10001);
});

test("Kindprozess, der stdout offen hält, blockiert den Runner nicht und wird beendet", opt, async () => {
  const p = await starte(sandbox(["sh", "-c", "sleep 20 & echo fertig"], 2), { timeoutMs: 2000 });
  assert.equal(p.stdout, "fertig\n");
  assert.equal(p.zeitUeberschritten, false);
  assert.ok(p.ms < 1500, `dauerte ${p.ms} ms`);
});

test("Mehrzeilige Testteile: Compilerzeilen im Prüfer werden dem richtigen Test zugeordnet", () => {
  const p = erzeugePruefer("K", [{ vorher: "int a = 1;\nint b = 2;", aufruf: "f(a, b)", erwartet: "3" }, { aufruf: "f(1, 1)", erwartet: "2" }]);
  const zeilen = p.quelle.split("\n");
  const zweiter = zeilen.findIndex((z) => z.includes("f(1, 1)")) + 1;
  assert.equal(p.testZeile.get(zweiter), 1);
  assert.equal(p.testZeile.get(zweiter - 1), 0);
});

test("Programme ausführen (ausgabe im Validator): Ausschnitt in main, Compilerfehler mit Zeile", opt, async () => {
  const [a, b, c] = await fuehreProgrammeAus([
    { code: 'int x = 7 / 2;\nSystem.out.println(x + " " + (char) (65 + 1) + " " + (-7 % 3));' },
    { code: 'int x = "a";' },
    { code: "public class E { public static void main(String[] a) { System.out.println(new java.util.Scanner(System.in).nextLine().toUpperCase()); } }", stdin: "hallo\n" },
  ]);
  assert.equal(a.status, "ok");
  assert.equal(a.ausgabe, "3 B -1\n");
  assert.equal(b.status, "compilerfehler");
  assert.equal(b.diagnosen[0].zeile - b.versatz, 1);
  assert.equal(c.ausgabe, "HALLO\n");
});
