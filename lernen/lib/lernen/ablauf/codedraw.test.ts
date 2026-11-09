/**
 * CodeDraw in der Ablauf-Engine: Formen (gleich dem Fake-CodeDraw der Plattform, das echte Java ausfuehrt), clear(),
 * Schrittstaende zum Vor- und Zurueckblaettern, Erklaersaetze, Variablenanzeige und Fehlerfaelle.
 * Die Vergleiche mit echtem Java brauchen ein JDK und werden sonst uebersprungen.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { TeilSchema, type CodeTeil } from "../typen";
import { javaProgramm } from "../java/quelle";
import { jdkVerfuegbar, pruefeCode, sandboxVerfuegbar } from "../java/runner";
import { erzeugeAblauf, dumpAblauf, protokollFormen, sichtbareFormen, type Ablauf, type AblaufOptionen } from "./index";
import { zahlJ } from "./codedraw";

function lauf(quelle: string, opt: AblaufOptionen = {}): Ablauf {
  const r = erzeugeAblauf(quelle, opt);
  assert.ok(r.ok, JSON.stringify(r));
  return r.ablauf;
}

/** Fehlerfall: Ablauf mit Laufzeitfehler des Programms */
function fehler(quelle: string, opt: AblaufOptionen = {}): { name: string; meldung: string } {
  const a = lauf(quelle, opt);
  assert.ok(a.fehler, "erwartet einen Laufzeitfehler");
  return { name: a.fehler.name, meldung: a.fehler.meldung };
}

const PUNKTE = "import codedraw.*;\n";

// ---------------------------------------------------------------------------------------------------------------
// Formen: gleich dem Fake-CodeDraw (echtes Java)

const jdk = jdkVerfuegbar();
const ohneJava = !jdk.ok ? `kein JDK: ${jdk.meldung}` : !sandboxVerfuegbar() ? "unshare -rn nicht verfügbar" : false;

const code = (t: unknown) => TeilSchema.parse({ typ: "code", ...(t as object) }) as CodeTeil;

/** Formen, die das Fake-CodeDraw in echtem Java je Test meldet (die Musterloesung laeuft mit allen Tests) */
async function javaFormen(quelle: string, tests: object[]): Promise<string[]> {
  const teil = code({ vorlage: quelle, musterloesung: quelle, tests });
  const e = await pruefeCode(teil, quelle);
  assert.equal(e.compiler.length, 0, JSON.stringify(e.compiler));
  return e.tests.map((t) => {
    assert.ok(t.status === "ok", `${t.status}: ${t.meldung}`);
    return JSON.stringify(t.formen ?? []);
  });
}

const PROGRAMME: { name: string; quelle: string; tests: { aufruf?: string; stdin?: string; zeichnung: true }[] }[] = [
  {
    name: "Ouchi-Gitter mit Schleifen, if und Farbwechsel",
    quelle: `import codedraw.*;
public class Ouchi {
  static void gitter(CodeDraw cd, int hoehe) {
    for (int i = 0; i < cd.getHeight() / hoehe; i++) {
      for (int j = 0; j < cd.getWidth() / 16; j++) {
        if ((i + j) % 2 == 0) {
          cd.setColor(Palette.BLACK);
        } else {
          cd.setColor(Palette.WHITE);
        }
        cd.fillRectangle(j * 16, i * hoehe, 16, hoehe);
      }
    }
    cd.show();
  }
  public static void main(String[] args) {
    gitter(new CodeDraw(64, 16), 4);
  }
}`,
    tests: [{ zeichnung: true }, { aufruf: "gitter(new CodeDraw(48, 24), 6)", zeichnung: true }],
  },
  {
    name: "alle Formen mit Kommazahlen, Linienbreite, Bogen und Text",
    quelle: `import codedraw.*;
public class Alles {
  public static void main(String[] args) {
    CodeDraw cd = new CodeDraw(300, 200);
    double r = 300.0 / (2 * 7);
    cd.setLineWidth(2.5);
    cd.setColor(Palette.RED);
    cd.drawCircle(r + 2 * r * 3, 1 / 3.0, r);
    cd.setColor(Palette.fromRGB(10, 20, 30));
    cd.fillCircle(2.0 / 3, 0.00015, 7);
    cd.drawEllipse(100, 50.5, 30, 12.25);
    cd.fillEllipse(100, 50.5, 3, 1);
    cd.drawSquare(5, 6, 7);
    cd.fillSquare(5.5, 6.5, 7);
    cd.drawRectangle(1, 2, 3, 4);
    cd.drawLine(0, 0, 299, 199);
    cd.drawTriangle(10, 10, 50, 10, 30, 40);
    cd.fillTriangle(10, 10, 50, 10, 30, 40);
    cd.drawPoint(3, 4);
    cd.drawPixel(5, 6);
    cd.drawArc(150, 100, 40, 0, Math.PI / 2);
    cd.drawArc(150, 100, 40, -Math.PI, 3.14159265);
    cd.setColor(Palette.SKY_BLUE);
    cd.drawText(10, 20, "Hallo \\"Welt\\" \\\\ ok\\ttab");
    cd.setLineWidth(1);
    cd.show();
  }
}`,
    tests: [{ zeichnung: true }],
  },
  {
    name: "clear, Color-Konstanten, Palette-Farben und mehrere Fenster",
    quelle: `import codedraw.*;
import java.awt.Color;
public class Mehr {
  public static void main(String[] args) {
    CodeDraw a = new CodeDraw();
    a.fillSquare(1, 2, 3);
    a.clear();
    a.setColor(Color.RED);
    a.fillCircle(50, 50, 10);
    a.setColor(new Color(40, 70, 110));
    a.drawLine(1, 2, 3, 4);
    a.clear(Palette.BLUE);
    CodeDraw b = new CodeDraw(80, 40);
    b.setColor(Palette.TRANSPARENT);
    b.fillRectangle(0, 0, 80, 40);
    b.setColor(Color.GREEN);
    b.fillSquare(a.getWidth() / 10, b.getHeight() * 0.5, 4);
    a.clear(Color.pink);
    b.fillCircle(5, 5, 1);
    a.setColor(Palette.fromGrayscale(100));
    a.fillCircle(7, 7, 7);
  }
}`,
    tests: [{ zeichnung: true }],
  },
  {
    name: "Tastatureingabe, Methoden mit Rueckgabewerten und Rekursion",
    quelle: `import codedraw.*;
import java.util.Scanner;
public class Baum {
  static void ast(CodeDraw cd, double x, double y, double laenge, int tiefe) {
    if (tiefe == 0) return;
    double x2 = x + laenge * 0.6;
    double y2 = y - laenge * 0.8;
    cd.setLineWidth(tiefe);
    cd.drawLine(x, y, x2, y2);
    ast(cd, x2, y2, laenge * 0.7, tiefe - 1);
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    CodeDraw cd = new CodeDraw(400, 400);
    cd.setColor(Palette.DARK_GREEN);
    ast(cd, 200, 390, 100, n);
    cd.show(10);
  }
}`,
    tests: [{ stdin: "4\n", zeichnung: true }, { stdin: "1\n", zeichnung: true }],
  },
];

for (const p of PROGRAMME) {
  test(`Formen wie im echten Java (Fake-CodeDraw): ${p.name}`, { skip: ohneJava, timeout: 240_000 }, async () => {
    const soll = await javaFormen(p.quelle, p.tests);
    assert.equal(soll.length, p.tests.length);
    p.tests.forEach((t, i) => {
      const a = lauf(p.quelle, { aufruf: t.aufruf, stdin: t.stdin });
      assert.ok(a.formen && a.formen.length > 0);
      // exakt: gleiche Formen, gleiche Reihenfolge, gleiche Werte (auch das Zahlenformat), gleiche Schluesselreihenfolge
      assert.equal(JSON.stringify(protokollFormen(a.formen)), soll[i], `Test ${i + 1}`);
    });
  });
}

test("Zahlenformat wie zahl() im Fake: ganze Zahlen ohne Nachkomma, sonst vier Stellen (HALF_UP auf der kuerzesten Darstellung)", () => {
  assert.equal(zahlJ(5), 5);
  assert.equal(zahlJ(-0), 0);
  assert.equal(zahlJ(1 / 3), 0.3333);
  assert.equal(zahlJ(2 / 3), 0.6667);
  assert.equal(zahlJ(0.00015), 0.0002, "Java rundet die kuerzeste Darstellung 1.5E-4 auf, nicht den exakten Binaerwert");
  assert.equal(zahlJ(12.25), 12.25);
  assert.ok(Number.isNaN(zahlJ(NaN)) && Number.isNaN(zahlJ(Infinity)), "wird wie in Java zu null (JSON)");
});

// ---------------------------------------------------------------------------------------------------------------
// Formen und Erklaersaetze (von Hand gepruefte Werte)

const KLEIN = `import codedraw.*;
public class K {
  public static void main(String[] args) {
    CodeDraw cd = new CodeDraw(400, 300);
    cd.setColor(Palette.RED);
    cd.fillRectangle(20, 40, 60, 30);
    cd.setLineWidth(3);
    cd.drawCircle(200, 150.5, 25);
    cd.setColor(Palette.fromRGB(40, 70, 110));
    cd.drawLine(0, 0, cd.getWidth() / 2, cd.getHeight());
    cd.show();
  }
}`;

test("Formen: Fenster zuerst, dann jede Form in Zeichenreihenfolge mit Farbe, gefuellt und Linienbreite", () => {
  const a = lauf(KLEIN);
  assert.deepEqual(a.formen, [
    { art: "fenster", farbe: "#000000", gefuellt: false, linie: 1, b: 400, h: 300 },
    { art: "rechteck", farbe: "#ff0000", gefuellt: true, linie: 1, x: 20, y: 40, b: 60, h: 30 },
    { art: "kreis", farbe: "#ff0000", gefuellt: false, linie: 3, x: 200, y: 150.5, r: 25 },
    { art: "linie", farbe: "#28466e", gefuellt: false, linie: 3, x1: 0, y1: 0, x2: 200, y2: 300 },
  ]);
  // die Schluessel stehen in der Reihenfolge des Fakes (der Vergleich mit Java ist ein JSON-Vergleich)
  assert.deepEqual(Object.keys(a.formen![1]), ["art", "farbe", "gefuellt", "linie", "x", "y", "b", "h"]);
});

test("Erklaersaetze der Zeichenaufrufe sagen auf Deutsch, was gezeichnet wird", () => {
  const a = lauf(KLEIN);
  const satz = (zeile: number) => a.schritte.find((s) => s.zeile === zeile && !s.fein)!.erklaerung;
  assert.equal(satz(5), "Stellt die Zeichenfarbe auf Rot ein. Alles, was danach gezeichnet wird, bekommt diese Farbe, bis `setColor` sie wieder ändert.");
  assert.equal(satz(6), "Zeichnet ein gefülltes Rechteck: Ecke links oben bei (20, 40), 60 breit, 30 hoch, Farbe Rot.");
  assert.equal(satz(8), "Zeichnet den Umriss eines Kreises: Mittelpunkt (200, 150.5), Radius 25, Farbe Rot, Linienbreite 3.");
  assert.equal(satz(9), "Stellt die Zeichenfarbe auf RGB(40, 70, 110) ein. Alles, was danach gezeichnet wird, bekommt diese Farbe, bis `setColor` sie wieder ändert.");
  assert.equal(satz(10), "Zeichnet eine Linie von (0, 0) nach (200, 300), Farbe RGB(40, 70, 110), Linienbreite 3.");
  assert.match(satz(11), /^Zeigt die Zeichnung im Fenster an: Jetzt wird alles sichtbar/);
  assert.match(satz(4), /^`cd` wird angelegt: ein neues Zeichenfenster mit einer Zeichenfläche von 400 × 300 Pixeln/);
  // Teilausdruecke als feine Schritte: getWidth() liefert 400, dann die Division
  const fein = a.schritte.filter((s) => s.fein && s.zeile === 10);
  assert.deepEqual(fein[0].auswertung, ["cd.drawLine(0, 0, cd.getWidth() / 2, cd.getHeight())", "cd.drawLine(0, 0, 400 / 2, cd.getHeight())"]);
  assert.match(fein[0].erklaerung, /liefert die Breite der Zeichenfläche: 400 Pixel/);
});

test("Schritte: jeder Schritt kennt Laenge und Loeschstand des gemeinsamen Protokolls (Vor- und Zurueckblaettern ohne Neuberechnung)", () => {
  const a = lauf(KLEIN);
  const staende = a.schritte.map((s) => s.zeichnung?.anzahl);
  // vor dem Fenster: nichts; danach waechst die Zahl nur, nie rueckwaerts
  assert.equal(a.schritte[0].zeichnung, undefined, "im Schritt `main startet` gibt es noch kein Fenster");
  const zahlen = staende.filter((x): x is number => x !== undefined);
  assert.deepEqual(zahlen, [...zahlen].sort((x, y) => x - y));
  assert.equal(zahlen[0], 1, "das Fenster ist der erste Eintrag");
  assert.equal(zahlen[zahlen.length - 1], 4);
  // Anzahl sichtbarer Formen (ohne Fenster) je Zeichenzeile
  const sichtbar = (zeile: number) => sichtbareFormen(a, a.schritte.find((s) => s.zeile === zeile && !s.fein)!).length;
  assert.deepEqual([4, 5, 6, 7, 8, 9, 10, 11].map(sichtbar), [0, 0, 1, 1, 2, 2, 3, 3]);
  // show(): vorher nichts gezeigt, danach alle 4 Eintraege
  assert.equal(a.schritte.find((s) => s.zeile === 10 && !s.fein)!.zeichnung!.gezeigt, 0);
  assert.equal(a.schritte.find((s) => s.zeile === 11 && !s.fein)!.zeichnung!.gezeigt, 4);
});

const CLEAR = `import codedraw.*;
public class C {
  public static void main(String[] args) {
    CodeDraw cd = new CodeDraw(100, 100);
    cd.setColor(Palette.RED);
    cd.fillSquare(1, 1, 10);
    cd.fillSquare(20, 1, 10);
    cd.clear();
    cd.fillSquare(40, 1, 10);
    cd.clear(Palette.BLUE);
    cd.fillCircle(50, 50, 5);
  }
}`;

test("clear(): bisher Gezeichnetes ist nicht mehr sichtbar, der Hintergrund kommt dazu; das Protokoll bleibt fuer das Zurueckblaettern", () => {
  const a = lauf(CLEAR);
  const arten = a.formen!.map((f) => f.art);
  assert.deepEqual(arten, ["fenster", "rechteck", "rechteck", "hintergrund", "rechteck", "hintergrund", "kreis"]);
  const bei = (zeile: number) => a.schritte.find((s) => s.zeile === zeile && !s.fein)!;
  assert.deepEqual(sichtbareFormen(a, bei(7)).map((f) => f.art), ["rechteck", "rechteck"]);
  const nachClear = sichtbareFormen(a, bei(8));
  assert.deepEqual(nachClear.map((f) => [f.art, f.farbe]), [["hintergrund", "#ffffff"]]);
  assert.deepEqual(sichtbareFormen(a, bei(9)).map((f) => f.art), ["hintergrund", "rechteck"]);
  assert.deepEqual(sichtbareFormen(a, bei(10)).map((f) => [f.art, f.farbe]), [["hintergrund", "#0000ff"]]);
  assert.deepEqual(sichtbareFormen(a, bei(11)).map((f) => f.art), ["hintergrund", "kreis"]);
  // die Liste des Fakes nach dem Lauf: alle Fenster, ab dem letzten clear() alles; wie ep1Protokoll()
  assert.deepEqual(protokollFormen(a.formen!).map((f) => f.art), ["fenster", "hintergrund", "kreis"]);
  assert.equal(bei(8).zeichnung!.ab, 3);
  assert.equal(bei(10).zeichnung!.ab, 5);
  assert.match(bei(8).erklaerung, /^Löscht die Zeichenfläche: Alles bisher Gezeichnete verschwindet, der Hintergrund wird Weiß\./);
  assert.match(bei(10).erklaerung, /der Hintergrund wird Blau/);
});

test("Speicher: viele Formen liegen einmal im gemeinsamen Protokoll, jeder Schritt hat nur zwei Zahlen", () => {
  const q = `import codedraw.*;
public class V {
  public static void main(String[] args) {
    CodeDraw cd = new CodeDraw(64, 64);
    for (int i = 0; i < 300; i++) {
      cd.fillSquare(i % 64, i / 64, 1);
    }
  }
}`;
  const a = lauf(q, { maxSchritte: 3000 });
  assert.equal(a.formen!.length, 301);
  assert.equal(a.abgeschnitten, undefined);
  const staende = new Set(a.schritte.map((s) => s.zeichnung));
  // gleiche Staende teilen sich ein Objekt (Schleifenkopf-Schritte ohne neue Form)
  assert.ok(staende.size <= a.schritte.length);
  const letzter = a.schritte[a.schritte.length - 1];
  assert.equal(sichtbareFormen(a, letzter).length, 300);
  assert.equal(sichtbareFormen(a, a.schritte[10]).length < 300, true);
});

// ---------------------------------------------------------------------------------------------------------------
// Variablen: CodeDraw und Color lesbar anzeigen

test("Variablenkasten: CodeDraw und Color erscheinen als lesbarer Text mit Farbfeld, geaendert wird beim Farbwechsel markiert", () => {
  const a = lauf(KLEIN);
  const bei = (zeile: number) => a.schritte.find((s) => s.zeile === zeile && !s.fein)!.frames[0].variablen[0];
  const neu = bei(4);
  assert.equal(neu.name, "cd");
  assert.equal(neu.typ, "CodeDraw");
  assert.deepEqual(neu.wert, { art: "objekt", typ: "CodeDraw", text: "CodeDraw 400×300, Farbe Schwarz, Linienbreite 1", farbe: "#000000" });
  assert.equal(neu.neu, true);
  const rot = bei(5);
  assert.equal(rot.geaendert, true);
  assert.deepEqual(rot.wert, { art: "objekt", typ: "CodeDraw", text: "CodeDraw 400×300, Farbe Rot, Linienbreite 1", farbe: "#ff0000" });
  assert.equal(bei(6).geaendert, undefined, "Zeichnen aendert das Objekt nicht, nur Farbe und Linienbreite");
  assert.match((bei(7).wert as { text: string }).text, /Linienbreite 3$/);
  const farben = lauf(`import codedraw.*;\nimport java.awt.Color;\nColor c = Palette.GOLD;\nColor d = new Color(5, 6, 7);\nColor[] f = {Palette.RED, Color.BLUE};`);
  const vars = farben.schritte[farben.schritte.length - 1].frames[0].variablen;
  assert.deepEqual(vars[0].wert, { art: "objekt", typ: "Color", text: "Gold", farbe: "#ffd700" });
  assert.deepEqual(vars[1].wert, { art: "objekt", typ: "Color", text: "RGB(5, 6, 7)", farbe: "#050607" });
  assert.equal(vars[2].wert.art, "array");
  assert.match(dumpAblauf(farben), /Formen|Color\(|Gold/);
});

// ---------------------------------------------------------------------------------------------------------------
// Fehlerfaelle wie im Fake

test("Fehlerfaelle: Fenstergroesse, null-Farbe, Linienbreite, Farbwerte, Wartezeit, Formenlimit", () => {
  const e1 = fehler(PUNKTE + "CodeDraw cd = new CodeDraw(0, 100);");
  assert.deepEqual(e1, { name: "IllegalArgumentException", meldung: "Die Fenstergröße muss positiv sein." });
  assert.equal(fehler(PUNKTE + "CodeDraw cd = new CodeDraw(100, -3);").name, "IllegalArgumentException");
  const e2 = fehler(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.setColor(null);");
  assert.deepEqual(e2, { name: "NullPointerException", meldung: "color darf nicht null sein" });
  assert.deepEqual(fehler(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.setLineWidth(0);"), { name: "IllegalArgumentException", meldung: "Die Linienbreite muss positiv sein." });
  assert.deepEqual(fehler(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.show(-1);"), { name: "IllegalArgumentException", meldung: "Wartezeit muss >= 0 sein." });
  assert.deepEqual(fehler(PUNKTE + "import java.awt.Color;\nColor c = new Color(256, 0, -1);"), { name: "IllegalArgumentException", meldung: "Color parameter outside of expected range: Red Blue" });
  assert.equal(fehler(PUNKTE + "CodeDraw cd = new CodeDraw();\nCodeDraw x = null;\nx.fillCircle(1, 1, 1);").name, "NullPointerException");
  // Das Fake begrenzt die Liste auf 20000 Formen (Endlosschleife)
  const ise = fehler(PUNKTE + "CodeDraw cd = new CodeDraw(10, 10);\nfor (int i = 0; i < 30000; i++) cd.drawPoint(1, 1);", { maxSchritte: 100000, maxMs: 20000 });
  assert.equal(ise.name, "IllegalStateException");
  assert.match(ise.meldung, /Mehr als 20000 Formen/);
  // der Lauf endet mit dem Fehler: die Zeichenflaeche zeigt, was bis dahin entstand
  const a = lauf(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.fillCircle(1, 1, 1);\ncd.setColor(null);");
  assert.equal(a.formen!.length, 2);
  assert.equal(a.fehler!.zeile, 4);
});

test("Compilerfehler und nicht Unterstuetztes sind verstaendlich gemeldet", () => {
  const syntax = (q: string, muster: RegExp) => {
    const r = erzeugeAblauf(q);
    assert.ok(!r.ok && r.grund === "syntax", q + " -> " + JSON.stringify(r));
    assert.match(r.meldung, muster, q);
  };
  // wie in echtem Java: ohne import kennt eine Klasse CodeDraw und Color nicht
  syntax("public class A {\n  public static void main(String[] a) {\n    CodeDraw cd = new CodeDraw();\n  }\n}", /import codedraw/);
  syntax("import codedraw.*;\npublic class A {\n  public static void main(String[] a) {\n    Color c = Palette.RED;\n  }\n}", /import java\.awt\.Color/);
  // Ausschnitte (wie javaProgramm) bekommen codedraw.* dazu, Color aber nicht
  syntax("Color c = new Color(1, 2, 3);", /import java\.awt\.Color/);
  lauf("CodeDraw cd = new CodeDraw();");
  lauf("java.awt.Color c = new java.awt.Color(1, 2, 3);\nSystem.out.println(c.getRed());");
  syntax(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.setColor(Palette.White);", /Palette\.White.*Palette\.WHITE/);
  syntax(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.fillCircle(1, 2);", /genau 3 Werte/);
  syntax(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.setColor(5);", /Farbe/);
  syntax(PUNKTE + "CodeDraw cd = new CodeDraw(1.5, 2);", /int/);
  syntax(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.fillCircle(1, 2, \"r\");", /Zahl/);
  const nu = erzeugeAblauf(PUNKTE + "CodeDraw cd = new CodeDraw();\ncd.drawImage(1, 2);");
  assert.ok(!nu.ok && nu.grund === "nichtUnterstuetzt");
  assert.match(nu.meldung, /drawImage/);
});

// ---------------------------------------------------------------------------------------------------------------
// Einbindung: Aufruf-Option, Ausschnitt, javaProgramm

test("Aufruf wie bei code-Aufgaben: zeichne(new CodeDraw(64, 8)) und der Aufrufschritt nennt das Fenster", () => {
  const q = `import codedraw.*;
public class Ecke {
    static void ecke(CodeDraw cd) {
        cd.setColor(Palette.BLACK);
        cd.fillRectangle(0, 0, 16, 4);
        cd.setColor(Palette.WHITE);
        cd.fillRectangle(16, 0, 16, 4);
    }
}`;
  const a = lauf(q, { aufruf: "ecke(new CodeDraw(64, 8))" });
  assert.deepEqual(a.formen!.map((f) => f.art), ["fenster", "rechteck", "rechteck"]);
  assert.deepEqual(a.formen![0], { art: "fenster", farbe: "#000000", gefuellt: false, linie: 1, b: 64, h: 8 });
  const erster = a.schritte[0];
  assert.equal(erster.art, "aufruf");
  assert.match(erster.erklaerung, /cd. ist CodeDraw 64×8/);
  assert.equal(erster.zeichnung!.anzahl, 1, "das Fenster entsteht schon beim Auswerten des Arguments");
  assert.equal(erster.frames[erster.frames.length - 1].variablen[0].wert.art, "objekt");
});

test("Ausschnitte: Anweisungen mit CodeDraw laufen ohne Klasse; imports am Anfang werden verstanden", () => {
  const a = lauf("import codedraw.*;\nimport java.awt.Color;\nCodeDraw cd = new CodeDraw(50, 50);\ncd.setColor(new Color(1, 2, 3));\ncd.fillCircle(25, 25, 10);");
  assert.equal(a.formen![1].farbe, "#010203");
  const k = javaProgramm("import java.awt.Color;   // Farbe\n\nCodeDraw cd = new CodeDraw();\ncd.setColor(Color.RED);");
  assert.equal(k.versatz, 3);
  assert.equal(k.quelle.split("\n")[0], "import java.util.*; import codedraw.*; import java.awt.Color;");
  assert.equal(k.quelle.split("\n")[3], "", "die Importzeile des Ausschnitts bleibt als Leerzeile stehen: Zeilennummern stimmen");
  assert.equal(k.quelle.split("\n")[5], "CodeDraw cd = new CodeDraw();");
  // eine lose main (ohne Klasse) wird Inhalt der Klasse Main statt in main() geschachtelt
  const m = javaProgramm("public static void main(String[] args) {\n  System.out.println(1);\n}\nstatic void f() {}");
  assert.match(m.quelle, /^import java.util.\*; import codedraw.\*;\npublic class Main \{\npublic static void main/);
  assert.equal(m.versatz, 2);
  assert.equal(javaProgramm("int x = 1;").versatz, 3);
});

test("Konstanten: Palette und Color sind je Konstante dasselbe Objekt (==), Color.GREEN ist anders als Palette.GREEN", () => {
  const q = `import codedraw.*;
import java.awt.Color;
System.out.println(Palette.RED == Palette.RED);
System.out.println(Palette.RED.equals(Color.RED));
System.out.println(Palette.RED == Color.RED);
System.out.println(Palette.GREEN.equals(Color.GREEN));
System.out.println(new Color(255, 0, 0).equals(Color.red));
System.out.println(Palette.fromRGB(1, 2, 3).getBlue() + " " + new Color(0x112233).getGreen());
System.out.println(Color.ORANGE);`;
  assert.equal(lauf(q).ausgabe, "true\ntrue\nfalse\nfalse\ntrue\n3 34\njava.awt.Color[r=255,g=200,b=0]\n");
});

test("Dump: Zeichenflaeche je Schritt und die Formen am Ende", () => {
  const d = dumpAblauf(lauf(CLEAR));
  assert.match(d, /Flaeche\{2 ungezeigt\}/);
  assert.match(d, /Formen \(7\):\n {2}fenster #000000 Linie 1 \(100 100\)\n {2}rechteck #ff0000 gefuellt \(1 1 10 10\)/);
});
