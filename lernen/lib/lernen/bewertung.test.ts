import { test } from "node:test";
import assert from "node:assert/strict";
import { TeilSchema, aufgabeFuerClient, teilFuerClient, type Teil, type TeilVon } from "./typen";
import { pruefeTeil, musterText } from "./rechnen";
import { codeNorm, normalisiereAusgabe, startReihenfolge, zelleGleich } from "./bewertung";
import { javaTokens } from "./javaHighlight";
import { erzeugePruefer } from "./java/pruefer";
import { javaProgramm, javaString, klassenName } from "./java/quelle";
import { vergleicheFormen, type Form } from "./java/codedraw";
import { istLokaleAnfrage } from "./java/zugang";
import { urteilAusErgebnis } from "./codePruefen";
import type { CodeErgebnis } from "./java/ergebnis";

const teil = <T extends Teil["typ"]>(t: unknown) => TeilSchema.parse(t) as TeilVon<T>;

test("ausgabe: abschließender Zeilenumbruch egal, sonst exakt; trim und tolerant", () => {
  const t = teil<"ausgabe">({ typ: "ausgabe", code: 'System.out.println("a  b");', loesung: "a  b\n" });
  assert.ok(pruefeTeil(t, "a  b").ok);
  assert.ok(pruefeTeil(t, "a  b\r\n").ok);
  const fast = pruefeTeil(t, "a b");
  assert.equal(fast.ok, false);
  assert.match(fast.meldung ?? "", /Leerzeichen oder Zeilenumbrüche/);
  assert.ok(pruefeTeil({ ...t, whitespace: "tolerant" }, "a b").ok);
  assert.ok(pruefeTeil({ ...t, loesung: "x\ny" , trim: true }, "\nx   \ny\n\n").ok);
  assert.match(pruefeTeil({ ...t, loesung: "1\n2\n3" }, "1\n5\n3").meldung ?? "", /Zeile 2/);
  assert.equal(pruefeTeil(t, "   ").leer, true);
  assert.equal(normalisiereAusgabe("a\n\n"), "a");
});

test("ausgabe: Fehlerbild greift bei typischer falscher Ausgabe", () => {
  const t = teil<"ausgabe">({ typ: "ausgabe", code: "System.out.println(7/2);", loesung: "3", fehler: [{ wert: "3.5", meldung: "Ganzzahldivision!" }] });
  const u = pruefeTeil(t, "3.5\n");
  assert.equal(u.ok, false);
  assert.equal(u.fehlerbild, 0);
  assert.equal(pruefeTeil(t, "4").fehlerbild, undefined);
});

test("richtigfalsch: Teilwertung, offene Aussagen zählen als leer", () => {
  const t = teil<"richtigfalsch">({
    typ: "richtigfalsch",
    aussagen: [
      { text: "a", richtig: true },
      { text: "b", richtig: false },
      { text: "c", richtig: true },
      { text: "d", richtig: false },
    ],
  });
  assert.ok(pruefeTeil(t, ["r", "f", "r", "f"]).ok);
  const drei = pruefeTeil(t, ["r", "f", "r", "r"]);
  assert.equal(drei.ok, false);
  assert.equal(drei.anteil, 0.75);
  assert.equal(pruefeTeil(t, ["", "", "", ""]).leer, true);
  const offen = pruefeTeil(t, ["r", "", "", ""]);
  assert.equal(offen.leer, true);
  assert.equal(offen.anteil, 0.25);
  assert.equal(musterText(t), "R F R F");
});

test("lueckentext: Varianten, Leerraum egal, aber Wörter bleiben getrennt", () => {
  const t = teil<"lueckentext">({ typ: "lueckentext", code: "for (int i = 0; ___; i++) ___", luecken: [["i < n", "n > i"], ["s += i;"]] });
  assert.ok(pruefeTeil(t, ["i<n", "s+=i;"]).ok);
  assert.ok(pruefeTeil(t, ["n  >  i", "s += i ;"]).ok);
  const halb = pruefeTeil(t, ["i <= n", "s += i;"]);
  assert.equal(halb.ok, false);
  assert.equal(halb.anteil, 0.5);
  assert.equal(codeNorm("int  x = 3 ;"), "int x=3;");
  assert.notEqual(codeNorm("int x"), codeNorm("intx"));
  assert.equal(pruefeTeil(t, ["", ""]).leer, true);
});

test("zeilen: Menge der Zeilennummern mit Teilwertung", () => {
  const t = teil<"zeilen">({ typ: "zeilen", code: "a\nb\nc\nd", loesung: [2, 4] });
  assert.ok(pruefeTeil(t, [4, 2]).ok);
  assert.equal(pruefeTeil(t, [2]).anteil, 0.5);
  assert.match(pruefeTeil(t, [2, 4, 1]).meldung ?? "", /zu viele/);
  assert.equal(pruefeTeil(t, [2, 1]).anteil, 0);
  assert.equal(pruefeTeil(t, []).leer, true);
});

test("trace: zellweise, Zahlen numerisch, Vorgabezeilen zählen nicht", () => {
  const t = teil<"trace">({ typ: "trace", spalten: ["i", "s"], loesung: [[0, 0], [1, 1], [2, "3"]], vorgabe: 1 });
  assert.ok(pruefeTeil(t, ["0", "0", "1", "1", "2", "3"]).ok);
  assert.ok(pruefeTeil(t, ["0", "0", " 1 ", "1,0", "2", "3"]).ok);
  const u = pruefeTeil(t, ["0", "0", "1", "1", "2", "4"]);
  assert.equal(u.anteil, 0.75);
  assert.match(u.meldung ?? "", /Zeile 3/);
  assert.equal(pruefeTeil(t, ["0", "0", "", "", "", ""]).leer, true);
  assert.ok(zelleGleich("2.50", 2.5));
  assert.ok(!zelleGleich("2", "3"));
});

test("reihenfolge: deterministischer Start, nie schon richtig, unverändert zählt als leer", () => {
  const t = teil<"reihenfolge">({ typ: "reihenfolge", elemente: ["a", "b", "c", "d"] });
  const s = startReihenfolge(t);
  assert.deepEqual(s, startReihenfolge(t));
  assert.equal([...s].sort().join(), "0,1,2,3");
  assert.ok(!s.every((k, i) => k === i));
  assert.equal(pruefeTeil(t, s).leer, true);
  assert.ok(pruefeTeil(t, [0, 1, 2, 3]).ok);
  assert.match(pruefeTeil(t, [1, 0, 2, 3]).meldung ?? "", /2 von 4/);
  // zwei Elemente: der Start muss trotzdem vertauscht sein
  const zwei = teil<"reihenfolge">({ typ: "reihenfolge", elemente: ["x", "y"] });
  assert.deepEqual(startReihenfolge(zwei), [1, 0]);
});

test("code: unveränderte Vorlage ist leer; Musterlösung und verborgene Tests gehen nicht an den Browser", () => {
  const t = teil<"code">({
    typ: "code",
    vorlage: "public class A { static int f() { return 0; } }",
    musterloesung: "public class A { static int f() { return 1; } }",
    tests: [{ aufruf: "f()", erwartet: "1" }, { aufruf: "f()", erwartet: "1", versteckt: true, beschreibung: "geheim" }],
  });
  assert.equal(pruefeTeil(t, t.vorlage).leer, true);
  const c = teilFuerClient(t) as TeilVon<"code">;
  assert.equal(c.musterloesung, "");
  assert.deepEqual(c.tests[1], { versteckt: true, beschreibung: "geheim" });
  assert.equal(c.tests[0].erwartet, "1");
  const a = aufgabeFuerClient({ id: "x", titel: "x", niveau: 1, art: "uebung", angabe: "", teile: [t], hinweise: [], loesung: "" });
  assert.ok(!JSON.stringify(a).includes("return 1"));
});

test("code: Urteil aus Runner-Ergebnis mit Teilwertung, Regelabzug und Fehlerbild", () => {
  const t = teil<"code">({
    typ: "code",
    vorlage: "public class A {}",
    musterloesung: "public class A {}",
    tests: [{ aufruf: "f(1)", erwartet: "1" }, { aufruf: "f(-1)", erwartet: "1" }],
    fehler: [{ wert: 2, meldung: "Negative Zahlen?" }, { wert: "keineSchleifenIn", meldung: "Rekursion!" }],
  });
  const basis: CodeErgebnis = { status: "tests", compiler: [], regeln: [], ms: 1, tests: [
    { nr: 0, bestanden: true, status: "ok" },
    { nr: 1, bestanden: false, status: "falsch" },
  ] };
  const u = urteilAusErgebnis(t, basis);
  assert.equal(u.ok, false);
  assert.equal(u.anteil, 0.5);
  assert.equal(u.fehlerbild, 0);
  const mitRegel = urteilAusErgebnis(t, { ...basis, tests: [basis.tests[0], { ...basis.tests[1], bestanden: true }], regeln: [{ zeile: 3, regel: "keineSchleifenIn", meldung: "x" }] });
  assert.equal(mitRegel.ok, false);
  assert.equal(mitRegel.anteil, 0);
  assert.equal(mitRegel.fehlerbild, 1);
  assert.equal(urteilAusErgebnis(t, { ...basis, status: "deaktiviert", meldung: "aus" }).leer, true);
});

test("Java-Hervorhebung: Schlüsselwörter, Strings, Kommentare, Typen, Zahlen", () => {
  const toks = javaTokens('public static int f(String s) { // Kommentar\n  return s.length() + 42; /* x */ "a\\"b" }');
  const art = (t: string) => toks.find((x) => x.text === t)?.art;
  assert.equal(art("public"), "kw");
  assert.equal(art("int"), "kw");
  assert.equal(art("String"), "typ");
  assert.equal(art("42"), "num");
  assert.equal(art("// Kommentar"), "kom");
  assert.equal(art("/* x */"), "kom");
  assert.equal(art('"a\\"b"'), "str");
  assert.equal(toks.map((t) => t.text).join(""), 'public static int f(String s) { // Kommentar\n  return s.length() + 42; /* x */ "a\\"b" }');
});

test("Quelltext-Helfer und Prüfer-Generator", () => {
  assert.equal(klassenName("// class X\nclass Hilfe {}\npublic class Haupt {}"), "Haupt");
  assert.equal(klassenName("System.out.println(1);"), null);
  const p = javaProgramm("System.out.println(1);");
  assert.equal(p.klasse, "Main");
  assert.match(p.quelle, /public static void main/);
  assert.equal(javaString('a"b\n\\'), '"a\\"b\\n\\\\"');
  const g = erzeugePruefer("Ziffern", [
    { aufruf: "quersumme(123)", erwartet: "6" },
    { vorher: "int[] a = {3, 1}", aufruf: "sortiere(a)", erwartet: "new int[]{1, 3}", ergebnis: "a" },
    { aufruf: "druck(2)", stdout: "**" },
    { stdin: "3\n", stdout: "9" },
  ]);
  assert.match(g.quelle, /class Ep1Pruefer extends Ziffern/);
  assert.match(g.quelle, /return Ep1Lauf\.wert\(quersumme\(123\)\);/);
  assert.match(g.quelle, /int\[\] a = \{3, 1\}; sortiere\(a\); return Ep1Lauf\.wert\(a\);/);
  assert.match(g.quelle, /druck\(2\); return Ep1Lauf\.NICHTS;/);
  assert.match(g.quelle, /Ziffern\.main\(new String\[0\]\)/);
  assert.match(g.quelle, /"3\\n"/);
  // Zeilenzuordnung fuer Compilerfehler im Pruefer
  const zeilen = g.quelle.split("\n");
  for (const [z, nr] of g.testZeile) assert.match(zeilen[z - 1], new RegExp(`Ep1Lauf\\.test\\(${nr},`));
});

test("Fake-CodeDraw: Vergleich als Multimenge mit ±1 px, optional mit Reihenfolge", () => {
  const f = (x: number, farbe = "#ff0000"): Form => ({ art: "kreis", x, y: 10, r: 5, farbe, gefuellt: true, linie: 1 });
  const soll = [f(10), f(20, "#0000ff")];
  assert.ok(vergleicheFormen([f(20.8, "#0000ff"), f(9.5)], soll).ok);
  assert.ok(!vergleicheFormen([f(20.8, "#0000ff"), f(9.5)], soll, { reihenfolge: true }).ok);
  const r = vergleicheFormen([f(12)], soll);
  assert.equal(r.ok, false);
  assert.equal(r.fehlend.length, 2);
  assert.equal(r.zuViel.length, 1);
  const linie = (x1: number, x2: number): Form => ({ art: "linie", x1, y1: 0, x2, y2: 0, farbe: "#000000", gefuellt: false, linie: 1 });
  assert.ok(vergleicheFormen([linie(5, 0)], [linie(0, 5)]).ok, "Linie rückwärts gezeichnet ist dieselbe");
});

test("Runner-Zugang nur von localhost", () => {
  const h = (o: Record<string, string>) => new Headers(o);
  assert.ok(istLokaleAnfrage(h({ host: "localhost:3000", "x-forwarded-for": "127.0.0.1" })));
  assert.ok(istLokaleAnfrage(h({ host: "[::1]:3000", "x-forwarded-for": "::1", origin: "http://localhost:3000" })));
  assert.ok(istLokaleAnfrage(h({ host: "127.0.0.1:3000", "x-forwarded-for": "::ffff:127.0.0.1" })));
  assert.ok(!istLokaleAnfrage(h({ host: "localhost:3000", "x-forwarded-for": "192.168.1.20" })));
  assert.ok(!istLokaleAnfrage(h({ host: "192.168.1.5:3000", "x-forwarded-for": "127.0.0.1" })));
  assert.ok(!istLokaleAnfrage(h({ host: "localhost:3000", origin: "https://boese.example" })));
  assert.ok(!istLokaleAnfrage(h({ host: "127.0.0.1.boese.example" })));
});
