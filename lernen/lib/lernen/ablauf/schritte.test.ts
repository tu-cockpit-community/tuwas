/**
 * Schritte der Ablauf-Engine: Struktur (Zeilen, Bereiche, fein/Zeile, Kette, Gueltigkeitsbereiche, Markierungen,
 * Aufrufstapel) und acht Beispielablaeufe als lesbarer Text-Dump (dumpAblauf). Die Dumps sind von Hand geprueft:
 * Werte, Reihenfolge der Auswertung und Erklaersaetze. Zeilenformat: Nr, "·" = feiner Schritt, Z = Zeile, Art,
 * «hervorgehobener Code», Erklaerung, ⟨Umformungskette⟩, oberster Frame {+neu *geaendert}, +"neue Ausgabe".
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { erzeugeAblauf, dumpAblauf, type Ablauf, type AblaufOptionen } from "./index";

function lauf(quelle: string, opt: AblaufOptionen = {}): Ablauf {
  const r = erzeugeAblauf(quelle, opt);
  assert.ok(r.ok, JSON.stringify(r));
  return r.ablauf;
}

/** Vertragsregeln, die fuer jeden Ablauf gelten */
function pruefeVertrag(a: Ablauf) {
  const zeilen = a.quelle.split("\n").length;
  let vorherAusgabe = "";
  let zeilenAusgabe = "";
  for (const s of a.schritte) {
    assert.ok(s.zeile >= 1 && s.zeile <= zeilen, `Zeile ${s.zeile}`);
    assert.ok(0 <= s.von && s.von <= s.bis && s.bis <= a.quelle.length, `Bereich ${s.von}-${s.bis}`);
    assert.equal(a.quelle.slice(0, s.von).split("\n").length, s.zeile, "zeile passt zu von");
    assert.ok(s.ausgabe.startsWith(vorherAusgabe), "Ausgabe waechst nur");
    if (s.fein) assert.ok(s.art === "ausdruck" || s.art === "bedingung", s.art);
    else {
      assert.equal(s.ausgabe, zeilenAusgabe + s.neueAusgabe, "neueAusgabe = Zuwachs seit dem letzten Zeilen-Schritt");
      zeilenAusgabe = s.ausgabe;
    }
    if (s.auswertung) assert.ok(s.auswertung.length >= 2);
    assert.ok(s.erklaerung.length > 5 && !/offensichtlich|trivial/.test(s.erklaerung));
    vorherAusgabe = s.ausgabe;
  }
  if (!a.abgeschnitten) {
    assert.equal(a.schritte[a.schritte.length - 1].art, "ende");
    assert.equal(a.schritte[a.schritte.length - 1].ausgabe, a.ausgabe);
  }
}

test("Kette eines Teilausdrucks: a / 3 -> 10 / 3 -> 3 mit Regel im Erklaersatz", () => {
  const a = lauf("int a = 10;\nint y = a / 3;");
  pruefeVertrag(a);
  const fein = a.schritte.find((s) => s.fein)!;
  assert.deepEqual(fein.auswertung, ["a / 3", "10 / 3", "3"]);
  assert.equal(a.quelle.slice(fein.von, fein.bis), "a / 3");
  assert.match(fein.erklaerung, /Ganzzahldivision/);
  const anw = a.schritte.find((s) => !s.fein && s.zeile === 2)!;
  assert.equal(anw.art, "anweisung");
  assert.match(anw.erklaerung, /mit a = 10/);
  assert.deepEqual(
    anw.frames[0].variablen.map((v) => [v.name, v.wert.art === "int" ? v.wert.text : "?", !!v.neu]),
    [
      ["a", "10", false],
      ["y", "3", true],
    ],
  );
});

test("for-Schleife: Init, Bedingung, Durchlauf, Rumpf, Update; die Laufvariable verschwindet danach", () => {
  const a = lauf("int s = 0;\nfor (int i = 1; i <= 2; i++) {\n    s += i;\n}\nSystem.out.println(s);");
  pruefeVertrag(a);
  const z = a.schritte.filter((s) => !s.fein);
  assert.deepEqual(
    z.map((s) => s.art + (s.bedingung === undefined ? "" : s.bedingung ? "+" : "-")),
    ["anweisung", "anweisung", "bedingung+", "schleife", "anweisung", "anweisung", "bedingung+", "schleife", "anweisung", "anweisung", "bedingung-", "schleife", "anweisung", "ende"],
  );
  assert.match(z[3].erklaerung, /Durchlauf 1/);
  assert.match(z[5].erklaerung, /von 1 auf 2/); // i++ nennt Wert davor und danach
  assert.match(z[11].erklaerung, /zu Ende/);
  assert.deepEqual(z[10].frames[0].variablen.map((v) => v.name), ["s", "i"]);
  assert.deepEqual(z[11].frames[0].variablen.map((v) => v.name), ["s"]); // i gehoert nur zur Schleife
  assert.equal(z[12].neueAusgabe, "3\n");
});

test("Markierungen: neu, geaendert und geaenderte Zellen (1D und 2D)", () => {
  const a = lauf("int[] a = {5, 1};\na[1] = 9;\nint[][] m = new int[2][2];\nm[1][0] = 4;");
  pruefeVertrag(a);
  const z = a.schritte.filter((s) => !s.fein);
  const va = (k: number, n: string) => z[k].frames[0].variablen.find((v) => v.name === n)!;
  assert.equal(va(0, "a").neu, true);
  assert.equal(va(1, "a").geaendert, true);
  assert.deepEqual(va(1, "a").geaenderteElemente, ["1"]);
  assert.equal(va(2, "a").geaendert, undefined);
  assert.deepEqual(va(3, "m").geaenderteElemente, ["1,0"]);
  const w = va(3, "m").wert;
  assert.ok(w.art === "array" && w.elementTyp === "int[]" && w.elemente[1].art === "array" && w.elemente[1].elemente[0].art === "int");
});

test("Methodenaufruf: neuer Frame mit Parametern, Rueckkehr mit Wert, Rekursion stapelt Frames", () => {
  const q =
    "public class F {\n    static int fak(int n) {\n        if (n <= 1) return 1;\n        return n * fak(n - 1);\n    }\n    public static void main(String[] args) {\n        int r = fak(3);\n        System.out.println(r);\n    }\n}";
  const a = lauf(q);
  pruefeVertrag(a);
  assert.equal(a.schritte[0].art, "aufruf"); // main startet
  const aufrufe = a.schritte.filter((s) => s.art === "aufruf");
  assert.equal(aufrufe.length, 4); // main, fak(3), fak(2), fak(1)
  const tief = aufrufe[3];
  assert.deepEqual(tief.frames.map((f) => f.methode), ["main", "fak(int n)", "fak(int n)", "fak(int n)"]);
  assert.deepEqual(tief.frames[3].variablen, [{ name: "n", typ: "int", wert: { art: "int", text: "1" }, neu: true }]);
  assert.equal(tief.frames[0].zeile, 7); // main wartet in Zeile 7
  assert.match(tief.erklaerung, /fak\(1\)/);
  const rueck = a.schritte.filter((s) => s.art === "rueckkehr").map((s) => s.rueckgabe);
  assert.deepEqual(rueck, ["1", "2", "6"]);
  assert.equal(a.ausgabe, "6\n");
});

test("Statische Felder erscheinen in felder (optionale Erweiterung)", () => {
  const a = lauf("public class Z {\n  static int zaehler = 0;\n  public static void main(String[] args) {\n    zaehler++;\n  }\n}");
  const s = a.schritte.find((x) => x.art === "anweisung")!;
  assert.deepEqual(s.felder, [{ name: "zaehler", typ: "int", wert: { art: "int", text: "1" }, geaendert: true }]);
  assert.equal(lauf("int x = 1;").schritte[0].felder, undefined);
});

test("Kurzschluss und String-Vergleich werden erklaert", () => {
  const k = lauf("int x = 0;\nboolean b = x != 0 && 10 / x > 1;");
  assert.ok(k.schritte.some((s) => s.fein && /rechte Seite wird gar nicht/.test(s.erklaerung)));
  const g = lauf('String s = "ab";\nString t = new String("ab");\nboolean b = s == t;');
  assert.ok(g.schritte.some((s) => s.fein && /zwei verschiedene Objekte, obwohl der Text gleich ist/.test(s.erklaerung)));
});

test("Fehler: letzter Schritt zeigt die Stelle mit Erklaerung", () => {
  const a = lauf("int[] a = new int[2];\nint i = 2;\na[i] = 1;");
  pruefeVertrag(a);
  const l = a.schritte[a.schritte.length - 1];
  assert.equal(l.art, "ende");
  assert.equal(l.zeile, 3);
  assert.match(l.erklaerung, /ArrayIndexOutOfBoundsException/);
  assert.match(l.erklaerung, /nur die Indizes 0 bis 1/);
});

test("maxSchritte zaehlt feine Schritte mit", () => {
  const a = lauf("int s = 0;\nfor (int i = 0; i < 100; i++) s = s + i * 2;", { maxSchritte: 50 });
  assert.equal(a.schritte.length, 50);
  assert.equal(a.abgeschnitten, "schritte");
  assert.ok(a.schritte.some((s) => s.fein));
});

// ------------------------------------------------------------------ Beispielablaeufe (Text-Dump, von Hand geprueft)

const BEISPIELE: { name: string; quelle: string; opt: AblaufOptionen; nurZeilen: boolean; max: number; dump: string[] }[] = [
  {
    name: "Dreieck",
    quelle: "int n = 3;\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}\n",
    opt: {},
    nurZeilen: true,
    max: 13,
    dump: [
      "  1  Z1 anweisung | «int n = 3;» | `n` wird angelegt und bekommt den Wert 3. | main{+n=3}",
      "  2  Z2 anweisung | «int i = 1» | `i` wird angelegt und bekommt den Wert 1. | main{n=3 +i=1}",
      "  3  Z2 bedingung=wahr | «i <= n» | `i <= n` mit i = 1 und n = 3: wahr, also läuft der Rumpf. | ⟨i <= n → 1 <= 3 → true⟩ | main{n=3 i=1}",
      "  4  Z2 schleife | «for (int i = 1; i <= n; i++)» | Durchlauf 1 der äußeren Schleife beginnt (`i` ist 1). | main{n=3 i=1}",
      "  5  Z3 anweisung | «int j = 1» | `j` wird angelegt und bekommt den Wert 1. | main{n=3 i=1 +j=1}",
      "  6  Z3 bedingung=wahr | «j <= i» | `j <= i` mit j = 1 und i = 1: wahr, also läuft der Rumpf. | ⟨j <= i → 1 <= 1 → true⟩ | main{n=3 i=1 j=1}",
      "  7  Z3 schleife | «for (int j = 1; j <= i; j++)» | Durchlauf 1 der inneren Schleife beginnt (`j` ist 1). | main{n=3 i=1 j=1}",
      "  8  Z4 anweisung | «System.out.print(\"*\");» | `System.out.print` gibt `*` aus, ohne neue Zeile. | main{n=3 i=1 j=1} | +\"*\"",
      "  9  Z3 anweisung | «j++» | `j++`: `j` wird um 1 erhöht, von 1 auf 2. | main{n=3 i=1 *j=2}",
      " 10  Z3 bedingung=falsch | «j <= i» | `j <= i` mit j = 2 und i = 1: falsch. | ⟨j <= i → 2 <= 1 → false⟩ | main{n=3 i=1 j=2}",
      " 11  Z3 schleife | «for (int j = 1; j <= i; j++)» | Die innere Schleife ist zu Ende, weil `j <= i` falsch ist. `j` gibt es danach nicht mehr: Die Variable gehört nur zur Schleife. | main{n=3 i=1}",
      " 12  Z6 anweisung | «System.out.println();» | `System.out.println()` beendet die Zeile: Die nächste Ausgabe beginnt in einer neuen Zeile. | main{n=3 i=1} | +\"\\n\"",
      " 13  Z2 anweisung | «i++» | `i++`: `i` wird um 1 erhöht, von 1 auf 2. | main{n=3 *i=2}",
      "… 37 weitere Schritte",
      "Ausgabe: \"*\\n**\\n***\\n\"",
    ],
  },
  {
    name: "Quersumme",
    quelle: "public class Ziffern {\n    public static int quersumme(int n) {\n        if (n < 10) return n;\n        return n % 10 + quersumme(n / 10);\n    }\n}\n",
    opt: { aufruf: "quersumme(123)" },
    nurZeilen: true,
    max: 99,
    dump: [
      "Aufruf: quersumme(123)",
      "  1  Z2 aufruf | «public static int quersumme(int n)» | `quersumme(123)` wird aufgerufen: `n` ist 123. | quersumme(int n){+n=123}",
      "  2  Z3 bedingung=falsch | «n < 10» | `n < 10` mit n = 123: falsch, also wird der `if`-Teil übersprungen. | ⟨n < 10 → 123 < 10 → false⟩ | quersumme(int n){n=123}",
      "  3  Z2 aufruf | «public static int quersumme(int n)» | `quersumme(12)` wird aufgerufen: `n` ist 12. Der Aufruf `quersumme(123)` wartet, bis dieser fertig ist. | 2×quersumme(int n){+n=12}",
      "  4  Z3 bedingung=falsch | «n < 10» | `n < 10` mit n = 12: falsch, also wird der `if`-Teil übersprungen. | ⟨n < 10 → 12 < 10 → false⟩ | 2×quersumme(int n){n=12}",
      "  5  Z2 aufruf | «public static int quersumme(int n)» | `quersumme(1)` wird aufgerufen: `n` ist 1. Der Aufruf `quersumme(12)` wartet, bis dieser fertig ist. | 3×quersumme(int n){+n=1}",
      "  6  Z3 bedingung=wahr | «n < 10» | `n < 10` mit n = 1: wahr, also läuft der `if`-Teil. | ⟨n < 10 → 1 < 10 → true⟩ | 3×quersumme(int n){n=1}",
      "  7  Z3 rueckkehr | «return n;» | `quersumme(1)` gibt 1 zurück. | return 1 | 3×quersumme(int n){n=1}",
      "  8  Z4 rueckkehr | «return n % 10 + quersumme(n / 10);» | `quersumme(12)` gibt 3 zurück (`n % 10 + quersumme(n / 10)` mit n = 12). | ⟨n % 10 + quersumme(n / 10) → 12 % 10 + quersumme(n / 10) → 2 + quersumme(n / 10) → 2 + quersumme(12 / 10) → 2 + quersumme(1) → 2 + 1 → 3⟩ | return 3 | 2×quersumme(int n){n=12}",
      "  9  Z4 rueckkehr | «return n % 10 + quersumme(n / 10);» | `quersumme(123)` gibt 6 zurück (`n % 10 + quersumme(n / 10)` mit n = 123). | ⟨n % 10 + quersumme(n / 10) → 123 % 10 + quersumme(n / 10) → 3 + quersumme(n / 10) → 3 + quersumme(123 / 10) → 3 + quersumme(12) → 3 + 3 → 6⟩ | return 6 | quersumme(int n){n=123}",
      " 10  Z2 ende | «public static int quersumme(int n)» | Der Aufruf `quersumme(123)` ist fertig. Rückgabewert: 6.",
      "Ergebnis: 6",
      "Ausgabe: \"\"",
    ],
  },
  {
    name: "Fakultaet",
    quelle: "public class F {\n    static int fakultaet(int n) {\n        if (n <= 1) return 1;\n        return n * fakultaet(n - 1);\n    }\n}\n",
    opt: { aufruf: "fakultaet(4)" },
    nurZeilen: true,
    max: 99,
    dump: [
      "Aufruf: fakultaet(4)",
      "  1  Z2 aufruf | «static int fakultaet(int n)» | `fakultaet(4)` wird aufgerufen: `n` ist 4. | fakultaet(int n){+n=4}",
      "  2  Z3 bedingung=falsch | «n <= 1» | `n <= 1` mit n = 4: falsch, also wird der `if`-Teil übersprungen. | ⟨n <= 1 → 4 <= 1 → false⟩ | fakultaet(int n){n=4}",
      "  3  Z2 aufruf | «static int fakultaet(int n)» | `fakultaet(3)` wird aufgerufen: `n` ist 3. Der Aufruf `fakultaet(4)` wartet, bis dieser fertig ist. | 2×fakultaet(int n){+n=3}",
      "  4  Z3 bedingung=falsch | «n <= 1» | `n <= 1` mit n = 3: falsch, also wird der `if`-Teil übersprungen. | ⟨n <= 1 → 3 <= 1 → false⟩ | 2×fakultaet(int n){n=3}",
      "  5  Z2 aufruf | «static int fakultaet(int n)» | `fakultaet(2)` wird aufgerufen: `n` ist 2. Der Aufruf `fakultaet(3)` wartet, bis dieser fertig ist. | 3×fakultaet(int n){+n=2}",
      "  6  Z3 bedingung=falsch | «n <= 1» | `n <= 1` mit n = 2: falsch, also wird der `if`-Teil übersprungen. | ⟨n <= 1 → 2 <= 1 → false⟩ | 3×fakultaet(int n){n=2}",
      "  7  Z2 aufruf | «static int fakultaet(int n)» | `fakultaet(1)` wird aufgerufen: `n` ist 1. Der Aufruf `fakultaet(2)` wartet, bis dieser fertig ist. | 4×fakultaet(int n){+n=1}",
      "  8  Z3 bedingung=wahr | «n <= 1» | `n <= 1` mit n = 1: wahr, also läuft der `if`-Teil. | ⟨n <= 1 → 1 <= 1 → true⟩ | 4×fakultaet(int n){n=1}",
      "  9  Z3 rueckkehr | «return 1;» | `fakultaet(1)` gibt 1 zurück. | return 1 | 4×fakultaet(int n){n=1}",
      " 10  Z4 rueckkehr | «return n * fakultaet(n - 1);» | `fakultaet(2)` gibt 2 zurück (`n * fakultaet(n - 1)` mit n = 2). | ⟨n * fakultaet(n - 1) → 2 * fakultaet(2 - 1) → 2 * fakultaet(1) → 2 * 1 → 2⟩ | return 2 | 3×fakultaet(int n){n=2}",
      " 11  Z4 rueckkehr | «return n * fakultaet(n - 1);» | `fakultaet(3)` gibt 6 zurück (`n * fakultaet(n - 1)` mit n = 3). | ⟨n * fakultaet(n - 1) → 3 * fakultaet(3 - 1) → 3 * fakultaet(2) → 3 * 2 → 6⟩ | return 6 | 2×fakultaet(int n){n=3}",
      " 12  Z4 rueckkehr | «return n * fakultaet(n - 1);» | `fakultaet(4)` gibt 24 zurück (`n * fakultaet(n - 1)` mit n = 4). | ⟨n * fakultaet(n - 1) → 4 * fakultaet(4 - 1) → 4 * fakultaet(3) → 4 * 6 → 24⟩ | return 24 | fakultaet(int n){n=4}",
      " 13  Z2 ende | «static int fakultaet(int n)» | Der Aufruf `fakultaet(4)` ist fertig. Rückgabewert: 24.",
      "Ergebnis: 24",
      "Ausgabe: \"\"",
    ],
  },
  {
    name: "Verkettung",
    quelle: "int a = 1, b = 2;\nSystem.out.println(\"\" + a + b);\nSystem.out.println(a + b + \"\");\n",
    opt: {},
    nurZeilen: false,
    max: 99,
    dump: [
      "  1  Z1 anweisung | «int a = 1, b = 2;» | `a` wird angelegt und bekommt den Wert 1. `b` wird angelegt und bekommt den Wert 2. | main{+a=1 +b=2}",
      "  2 ·Z2 ausdruck | «\"\" + a» | `+` mit einem String: Der Wert 1 wird als Text angehängt, nicht gerechnet. Ergebnis: \"1\". | ⟨\"\" + a + b → \"\" + 1 + b → \"1\" + b⟩ | main{a=1 b=2}",
      "  3 ·Z2 ausdruck | «\"\" + a + b» | `+` mit einem String: Der Wert 2 wird als Text angehängt, nicht gerechnet. Ergebnis: \"12\". | ⟨\"\" + a + b → \"\" + 1 + b → \"1\" + b → \"1\" + 2 → \"12\"⟩ | main{a=1 b=2}",
      "  4  Z2 anweisung | «System.out.println(\"\" + a + b);» | `System.out.println` gibt `12` aus und beendet danach die Zeile (die nächste Ausgabe beginnt in einer neuen Zeile). | ⟨\"\" + a + b → \"\" + 1 + b → \"1\" + b → \"1\" + 2 → \"12\"⟩ | main{a=1 b=2} | +\"12\\n\"",
      "  5 ·Z3 ausdruck | «a + b» | 1 plus 2 ergibt 3. | ⟨a + b + \"\" → 1 + 2 + \"\" → 3 + \"\"⟩ | main{a=1 b=2}",
      "  6 ·Z3 ausdruck | «a + b + \"\"» | `+` mit einem String: Der Wert 3 wird als Text angehängt, nicht gerechnet. Ergebnis: \"3\". | ⟨a + b + \"\" → 1 + 2 + \"\" → 3 + \"\" → \"3\"⟩ | main{a=1 b=2}",
      "  7  Z3 anweisung | «System.out.println(a + b + \"\");» | `System.out.println` gibt `3` aus und beendet danach die Zeile (die nächste Ausgabe beginnt in einer neuen Zeile). | ⟨a + b + \"\" → 1 + 2 + \"\" → 3 + \"\" → \"3\"⟩ | main{a=1 b=2} | +\"3\\n\"",
      "  8  Z3 ende | «» | Das Programm ist zu Ende. | main{a=1 b=2}",
      "Ausgabe: \"12\\n3\\n\"",
    ],
  },
  {
    name: "Division",
    quelle: "int a = 10;\nint q = a / 3;\ndouble d = a / 3.0;\nint r = -7 % 3;\n",
    opt: {},
    nurZeilen: false,
    max: 99,
    dump: [
      "  1  Z1 anweisung | «int a = 10;» | `a` wird angelegt und bekommt den Wert 10. | main{+a=10}",
      "  2 ·Z2 ausdruck | «a / 3» | Beide Zahlen sind ganzzahlig (`int`), deshalb ist das eine Ganzzahldivision: 10 / 3 ergibt 3, die Nachkommastellen fallen weg (es wird nicht gerundet). | ⟨a / 3 → 10 / 3 → 3⟩ | main{a=10}",
      "  3  Z2 anweisung | «int q = a / 3;» | `int q = a / 3` mit a = 10: `q` wird angelegt und bekommt den Wert 3. | ⟨a / 3 → 10 / 3 → 3⟩ | main{a=10 +q=3}",
      "  4 ·Z3 ausdruck | «a / 3.0» | Mindestens eine Zahl ist eine Kommazahl (`double`), deshalb wird mit Nachkommastellen geteilt: 10 / 3.0 ergibt 3.3333333333333335. | ⟨a / 3.0 → 10 / 3.0 → 3.3333333333333335⟩ | main{a=10 q=3}",
      "  5  Z3 anweisung | «double d = a / 3.0;» | `double d = a / 3.0` mit a = 10: `d` wird angelegt und bekommt den Wert 3.3333333333333335. | ⟨a / 3.0 → 10 / 3.0 → 3.3333333333333335⟩ | main{a=10 q=3 +d=3.3333333333333335}",
      "  6 ·Z4 ausdruck | «-7 % 3» | `%` liefert den Rest der Ganzzahldivision: -7 / 3 ist -2, Rest -1. Der Rest hat immer das Vorzeichen der linken Zahl. | ⟨-7 % 3 → -1⟩ | main{a=10 q=3 d=3.3333333333333335}",
      "  7  Z4 anweisung | «int r = -7 % 3;» | `r` wird angelegt und bekommt den Wert -1. | ⟨-7 % 3 → -1⟩ | main{a=10 q=3 d=3.3333333333333335 +r=-1}",
      "  8  Z4 ende | «» | Das Programm ist zu Ende. | main{a=10 q=3 d=3.3333333333333335 r=-1}",
      "Ausgabe: \"\"",
    ],
  },
  {
    name: "Zeichen",
    quelle: "char c = 'a';\nint code = c + 1;\nchar d = (char) (c + 1);\nc++;\n",
    opt: {},
    nurZeilen: false,
    max: 99,
    dump: [
      "  1  Z1 anweisung | «char c = 'a';» | `c` wird angelegt und bekommt den Wert 'a'. | main{+c='a'}",
      "  2 ·Z2 ausdruck | «c + 1» | 'a' plus 1 ergibt 98. Ein `char` rechnet mit seinem Zeichencode ('a' hat den Code 97), das Ergebnis ist ein `int`. | ⟨c + 1 → 'a' + 1 → 98⟩ | main{c='a'}",
      "  3  Z2 anweisung | «int code = c + 1;» | `int code = c + 1` mit c = 'a': `code` wird angelegt und bekommt den Wert 98. | ⟨c + 1 → 'a' + 1 → 98⟩ | main{c='a' +code=98}",
      "  4 ·Z3 ausdruck | «c + 1» | 'a' plus 1 ergibt 98. Ein `char` rechnet mit seinem Zeichencode ('a' hat den Code 97), das Ergebnis ist ein `int`. | ⟨(char) (c + 1) → (char) ('a' + 1) → (char) 98⟩ | main{c='a' code=98}",
      "  5 ·Z3 ausdruck | «(char) (c + 1)» | `(char)` nimmt die Zahl 98 als Zeichencode: Das Zeichen mit dem Code 98 ist 'b'. | ⟨(char) (c + 1) → (char) ('a' + 1) → (char) 98 → 'b'⟩ | main{c='a' code=98}",
      "  6  Z3 anweisung | «char d = (char) (c + 1);» | `char d = (char) (c + 1)` mit c = 'a': `d` wird angelegt und bekommt den Wert 'b'. | ⟨(char) (c + 1) → (char) ('a' + 1) → (char) 98 → 'b'⟩ | main{c='a' code=98 +d='b'}",
      "  7  Z4 anweisung | «c++;» | `c++`: `c` wird um 1 erhöht, von 'a' auf 'b'. | main{*c='b' code=98 d='b'}",
      "  8  Z4 ende | «» | Das Programm ist zu Ende. | main{c='b' code=98 d='b'}",
      "Ausgabe: \"\"",
    ],
  },
  {
    name: "Kurzschluss",
    quelle: "int x = 0;\nboolean b = x != 0 && 10 / x > 1;\n",
    opt: {},
    nurZeilen: false,
    max: 99,
    dump: [
      "  1  Z1 anweisung | «int x = 0;» | `x` wird angelegt und bekommt den Wert 0. | main{+x=0}",
      "  2 ·Z2 ausdruck | «x != 0» | 0 != 0 ist falsch. | ⟨x != 0 && 10 / x > 1 → 0 != 0 && 10 / x > 1 → false && 10 / x > 1⟩ | main{x=0}",
      "  3 ·Z2 ausdruck | «x != 0 && 10 / x > 1» | `&&`: Die linke Seite ist falsch, also ist das Ganze falsch. Die rechte Seite wird gar nicht mehr ausgewertet (Kurzschluss). | ⟨x != 0 && 10 / x > 1 → 0 != 0 && 10 / x > 1 → false && 10 / x > 1 → false⟩ | main{x=0}",
      "  4  Z2 anweisung | «boolean b = x != 0 && 10 / x > 1;» | `boolean b = x != 0 && 10 / x > 1` mit x = 0: `b` wird angelegt und bekommt den Wert false. | ⟨x != 0 && 10 / x > 1 → 0 != 0 && 10 / x > 1 → false && 10 / x > 1 → false⟩ | main{x=0 +b=false}",
      "  5  Z2 ende | «» | Das Programm ist zu Ende. | main{x=0 b=false}",
      "Ausgabe: \"\"",
    ],
  },
  {
    name: "StringGleich",
    quelle: "String s = \"ab\";\nString t = new String(\"ab\");\nboolean gleich = s == t;\nboolean inhalt = s.equals(t);\n",
    opt: {},
    nurZeilen: false,
    max: 99,
    dump: [
      "  1  Z1 anweisung | «String s = \"ab\";» | `s` wird angelegt und bekommt den Wert \"ab\". | main{+s=\"ab\"}",
      "  2 ·Z2 ausdruck | «new String(\"ab\")» | `new String(\"ab\")` erzeugt ein neues String-Objekt mit dem Text \"ab\". Es ist ein anderes Objekt als das Literal, auch wenn der Text gleich ist. | ⟨new String(\"ab\") → \"ab\"⟩ | main{s=\"ab\"}",
      "  3  Z2 anweisung | «String t = new String(\"ab\");» | `t` wird angelegt und bekommt den Wert \"ab\". | ⟨new String(\"ab\") → \"ab\"⟩ | main{s=\"ab\" +t=\"ab\"}",
      "  4 ·Z3 ausdruck | «s == t» | `==` vergleicht bei Strings nicht den Text, sondern ob beide auf dasselbe Objekt zeigen. Hier sind es zwei verschiedene Objekte, obwohl der Text gleich ist: falsch. Den Inhalt vergleicht man mit `equals`. | ⟨s == t → \"ab\" == \"ab\" → false⟩ | main{s=\"ab\" t=\"ab\"}",
      "  5  Z3 anweisung | «boolean gleich = s == t;» | `boolean gleich = s == t` mit s = \"ab\" und t = \"ab\": `gleich` wird angelegt und bekommt den Wert false. | ⟨s == t → \"ab\" == \"ab\" → false⟩ | main{s=\"ab\" t=\"ab\" +gleich=false}",
      "  6 ·Z4 ausdruck | «s.equals(t)» | `s.equals(t)` vergleicht den Inhalt Zeichen für Zeichen: wahr. | ⟨s.equals(t) → \"ab\".equals(\"ab\") → true⟩ | main{s=\"ab\" t=\"ab\" gleich=false}",
      "  7  Z4 anweisung | «boolean inhalt = s.equals(t);» | `boolean inhalt = s.equals(t)` mit s = \"ab\" und t = \"ab\": `inhalt` wird angelegt und bekommt den Wert true. | ⟨s.equals(t) → \"ab\".equals(\"ab\") → true⟩ | main{s=\"ab\" t=\"ab\" gleich=false +inhalt=true}",
      "  8  Z4 ende | «» | Das Programm ist zu Ende. | main{s=\"ab\" t=\"ab\" gleich=false inhalt=true}",
      "Ausgabe: \"\"",
    ],
  },
];

for (const b of BEISPIELE) {
  test(`Beispielablauf ${b.name}`, () => {
    const a = lauf(b.quelle, b.opt);
    pruefeVertrag(a);
    assert.equal(dumpAblauf(a, { nurZeilen: b.nurZeilen, max: b.max }), b.dump.join("\n"));
  });
}
