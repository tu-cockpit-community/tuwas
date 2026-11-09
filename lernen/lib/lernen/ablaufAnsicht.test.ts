import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement, type ComponentProps } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type { Ablauf, Wert } from "./ablauf/typen";
import { AblaufSchritt, AblaufSpieler, codeZeilen, passenderSchritt, sichtbareSchritte, wertText } from "../../components/lernen/Ablauf";
import { AblaufFuerCode } from "../../components/lernen/AblaufKnopf";
import { BEISPIEL_DREIECK, BEISPIEL_FAKULTAET, BEISPIEL_FELDER } from "../../components/lernen/ablaufBeispiele";
import { AusgabeEingabe, CodeEingabe } from "../../components/lernen/EingabeJava";
import { Md } from "../../components/lernen/Md";
import { erzeugeAblauf } from "./ablauf";

/** Ablauf-Ansicht (Paket B): Fixture-Vertrag, Filter der Modi, Code-Zerlegung und Server-Rendering. */

const ENTITAETEN: Record<string, string> = { "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&lt;": "<", "&gt;": ">", "&amp;": "&" };
const ent = (s: string) => s.replace(/&(quot|#x27|#39|lt|gt|amp);/g, (m) => ENTITAETEN[m]);
/** sichtbarer Text ohne Tags */
const text = (html: string) => ent(html.replace(/<[^>]+>/g, ""));
const html = (el: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(el);
/** Md mit eingeschaltetem Ablauf-Knopf (children kommt als drittes Argument, wie JSX es uebergibt) */
const mdMitAblauf = (md: string) => createElement(Md, { ablauf: true } as ComponentProps<typeof Md>, md);

// ---------------------------------------------------------------------------------------------------------------
// Fixture haelt den Vertrag aus typen.ts ein (sonst testet die Ansicht gegen falsche Daten)

for (const [name, a] of Object.entries({ dreieck: BEISPIEL_DREIECK, fakultaet: BEISPIEL_FAKULTAET, felder: BEISPIEL_FELDER })) {
  test(`Fixture ${name}: Bereiche, Zeilen und Konsole sind stimmig`, () => {
    let vorher = "";
    for (const s of a.schritte) {
      assert.ok(s.von >= 0 && s.von <= s.bis && s.bis <= a.quelle.length, "Bereich liegt in der Quelle");
      assert.equal(s.zeile, a.quelle.slice(0, s.von).split("\n").length, "zeile ist die Zeile von `von`");
      assert.equal(s.ausgabe, vorher + s.neueAusgabe, "Konsole waechst genau um neueAusgabe");
      vorher = s.ausgabe;
    }
    assert.equal(a.schritte[a.schritte.length - 1].fein, false, "letzter Schritt ist grob");
    assert.equal(a.ausgabe, vorher);
  });
}

test("Fixture Dreieck gibt das Muster aus, das Java ausgibt", () => {
  // for i = 1..3: i Sterne mit print, dann println
  assert.equal(BEISPIEL_DREIECK.ausgabe, "*\n**\n***\n");
});

// ---------------------------------------------------------------------------------------------------------------
// Modi

test("Zeile für Zeile blendet feine Schritte aus, Ausdruck für Ausdruck zeigt alle", () => {
  const s = BEISPIEL_DREIECK.schritte;
  const zeile = sichtbareSchritte(s, "zeile");
  const ausdruck = sichtbareSchritte(s, "ausdruck");
  assert.equal(ausdruck.length, s.length);
  assert.ok(zeile.length < ausdruck.length, "die Fixture hat feine Schritte");
  assert.ok(zeile.every((i) => !s[i].fein));
  assert.deepEqual(
    zeile,
    s.flatMap((x, i) => (x.fein ? [] : [i])),
  );
});

test("Moduswechsel von einem feinen Schritt springt ans Ende der Anweisung", () => {
  const s = BEISPIEL_DREIECK.schritte;
  const fein = s.findIndex((x) => x.fein);
  const zeile = sichtbareSchritte(s, "zeile");
  const ziel = passenderSchritt(zeile, fein);
  assert.equal(ziel, fein + 1, "direkt nach dem Teilausdruck kommt der grobe Bedingungsschritt");
  assert.equal(s[ziel].art, "bedingung");
  assert.equal(passenderSchritt(zeile, zeile[2]), zeile[2], "sichtbarer Schritt bleibt");
  assert.equal(passenderSchritt([1, 3], 9), 3, "hinter dem letzten: der letzte");
});

// ---------------------------------------------------------------------------------------------------------------
// Code-Zerlegung: Zeilen, Syntaxfarben und Bereich

test("codeZeilen teilt Tokens an den Grenzen des Bereichs und an Zeilenenden", () => {
  const q = 'int a = 1;\nSystem.out.println("hallo" + a);\n';
  const von = q.indexOf('"hallo" + a');
  const bis = von + '"hallo" + a'.length;
  const z = codeZeilen(q, von, bis);
  assert.equal(z.length, 2, "abschliessender Zeilenumbruch erzeugt keine leere Zeile");
  assert.deepEqual(
    z.map((st) => st.map((x) => x.text).join("")),
    ["int a = 1;", 'System.out.println("hallo" + a);'],
  );
  const markiert = z[1].filter((x) => x.markiert);
  assert.equal(markiert.map((x) => x.text).join(""), '"hallo" + a');
  assert.equal(markiert[0].art, "str", "der String im Bereich behaelt seine Farbe");
  assert.ok(z[0].every((x) => !x.markiert));
  assert.equal(z[0][0].art, "kw");
});

test("codeZeilen: mehrzeiliger Kommentar bleibt in jeder Zeile Kommentar", () => {
  const z = codeZeilen("/* a\n b */ int x;", 0, 0);
  assert.equal(z[0][0].art, "kom");
  assert.equal(z[1][0].art, "kom");
  assert.equal(z[1][0].text, " b */");
});

test("wertText: Java-Schreibweise je Typ", () => {
  const w = (x: Wert) => wertText(x);
  assert.equal(w({ art: "String", text: 'a"b\n' }), '"a\\"b\\n"');
  assert.equal(w({ art: "char", text: "x" }), "'x'");
  assert.equal(w({ art: "char", text: "'" }), "'\\''");
  assert.equal(w({ art: "char", text: "'y'" }), "'y'", "schon gesetzte Apostrophe nicht verdoppeln");
  assert.equal(w({ art: "null" }), "null");
  assert.equal(w({ art: "boolean", text: "true" }), "true");
  assert.equal(w({ art: "double", text: "6.666666666666667" }), "6.666666666666667");
  assert.equal(w({ art: "array", id: 1, elementTyp: "int", elemente: [] }), "int[0]");
});

// ---------------------------------------------------------------------------------------------------------------
// Server-Rendering des Spielers

test("Spieler rendert serverseitig: erster grober Schritt, Zeile, Variable, leere Konsole, Modus", () => {
  const h = html(createElement(AblaufSpieler, { ablauf: BEISPIEL_DREIECK }));
  const t = text(h);
  const grob = BEISPIEL_DREIECK.schritte.filter((s) => !s.fein).length;
  assert.ok(t.includes(`Schritt 1 von ${grob}`), "Zaehlung im Modus Zeile für Zeile");
  assert.match(h, /class="ablauf-zeile ist-aktuell" data-zeile="1" aria-current="step"/);
  assert.match(h, /<mark class="ablauf-bereich">/, "Bereich des Schritts markiert");
  assert.ok(t.includes("`n` wird angelegt".replace(/`/g, "")), "Erklaersatz ohne Backticks, Code als <code>");
  assert.match(h, /<code class="inline-code">n<\/code>/);
  assert.match(h, /aria-live="polite"/);
  assert.match(h, /<th scope="row"><code>n<\/code><span class="ablauf-marke ablauf-marke-neu">neu<\/span>/);
  assert.ok(t.includes("Noch keine Ausgabe."));
  assert.match(h, /<input type="radio"[^>]*checked=""[^>]*\/>Zeile für Zeile/);
  assert.ok(t.includes("Ausdruck für Ausdruck"));
  for (const l of ["Zum Anfang", "Schritt zurück", "Wiedergabe", "Schritt vor", "Ans Ende"]) assert.ok(h.includes(`aria-label="${l}"`), l);
  assert.match(h, /aria-label="Zum Anfang"[^>]*aria-disabled="true"/, "am Anfang ist zurück gesperrt (ohne den Fokus zu verlieren)");
  assert.ok(!t.includes("Aufrufstapel"), "ein Frame: kein Stapel");
});

test("Schritt mit Teilausdruck zeigt die Umformungskette, die letzte Form betont", () => {
  const i = BEISPIEL_FELDER.schritte.findIndex((s) => s.auswertung?.length === 5);
  const h = html(createElement(AblaufSchritt, { ablauf: BEISPIEL_FELDER, index: i, nr: i + 1, von: BEISPIEL_FELDER.schritte.length }));
  const kette = h.slice(h.indexOf('<ol class="ablauf-kette"'), h.indexOf("</ol>", h.indexOf('<ol class="ablauf-kette"')));
  assert.equal(kette.match(/<li/g)?.length, 5);
  assert.equal(kette.match(/wird zu/g)?.length, 4);
  assert.match(kette, /<li class="ist-ergebnis">.*<strong>/);
  assert.ok(text(kette).includes('"abx 3"'));
  assert.ok(text(h).includes("Teilausdruck"));
});

test("Konsole hebt das neue Stück hervor; mit Sonderzeichen werden Zeilenende und Leerzeichen sichtbar", () => {
  const s = BEISPIEL_DREIECK.schritte;
  const i = s.findIndex((x, k) => x.neueAusgabe === "*" && k > 0 && s.slice(0, k).some((y) => y.neueAusgabe === "\n"));
  const h = html(createElement(AblaufSchritt, { ablauf: BEISPIEL_DREIECK, index: i, nr: 1, von: 1 }));
  assert.match(h, /<pre class="ablauf-konsole"[^>]*>\*\n<mark class="ablauf-neu"><span class="sr-only">neu: <\/span>\*<\/mark>/);
  const j = s.findIndex((x) => x.neueAusgabe === "\n");
  const mitZeichen = html(createElement(AblaufSchritt, { ablauf: BEISPIEL_DREIECK, index: j, nr: 1, von: 1, zeichen: true }));
  assert.match(mitZeichen, /<mark class="ablauf-neu">(?:(?!<\/mark>)[\s\S])*¶[\s\S]*?<\/mark>/);
  const ohne = html(createElement(AblaufSchritt, { ablauf: BEISPIEL_DREIECK, index: j, nr: 1, von: 1 }));
  assert.match(ohne, /ablauf-umbruch-neu/, "auch ohne Option ist ein neuer Zeilenumbruch erkennbar");
});

test("Rekursion: Aufruf als Kopfzeile, Stapel mit wartenden Aufrufen, Rückgabewert am Ende", () => {
  const a = BEISPIEL_FAKULTAET;
  const kopf = text(html(createElement(AblaufSpieler, { ablauf: a })));
  assert.ok(kopf.includes("Aufruf: fakultaet(3)"));
  const tief = a.schritte.findIndex((s) => s.frames.length === 3);
  const h = html(createElement(AblaufSchritt, { ablauf: a, index: tief, nr: 1, von: 1 }));
  const t = text(h);
  assert.ok(t.includes("Aufrufstapel"));
  assert.ok(t.includes("3 Aufrufe"));
  assert.equal(h.match(/class="ablauf-karte( ist-aktiv)?"/g)?.length, 3);
  assert.equal(h.match(/ist-aktiv/g)?.length, 1);
  assert.equal((t.match(/wartet in Zeile 6/g) ?? []).length, 2);
  // aktive Karte steht oben: n = 1 vor n = 2 vor n = 3
  const stapel = text(h.slice(h.indexOf('<ol class="ablauf-stapel-liste"')));
  assert.ok(stapel.indexOf("n = 1") < stapel.indexOf("n = 2") && stapel.indexOf("n = 2") < stapel.indexOf("n = 3"));
  assert.ok(t.includes("Variablen zeigen"), "Variablen der wartenden Aufrufe aufklappbar");
  const ende = text(html(createElement(AblaufSchritt, { ablauf: a, index: a.schritte.length - 1, nr: 1, von: 1, erwartet: "6" })));
  assert.ok(ende.includes("Rückgabewert: 6"));
  assert.ok(ende.includes("der Test erwartet 6"));
  assert.ok(ende.includes("Hier gibt es gerade keine Variablen."), "nach dem Aufruf ist der Stapel leer");
});

test("Arrays als Zellen mit Index, 2D als Raster, geänderte Zellen markiert, Fehler am letzten Schritt", () => {
  const a = BEISPIEL_FELDER;
  const i = a.schritte.findIndex((s) => s.frames[0].variablen.some((v) => v.geaenderteElemente?.includes("1,2")));
  const h = html(createElement(AblaufSchritt, { ablauf: a, index: i, nr: 1, von: 1 }));
  assert.ok(text(h).includes("2 Zeilen × 3 Spalten"));
  assert.ok(text(h).includes("Länge 3"));
  assert.equal(h.match(/<td class="ist-geaendert">/g)?.length, 1, "genau die Zelle m[1][2]");
  assert.match(h, /<td class="ist-geaendert"><span class="jv-num">3<\/span><span class="sr-only"> \(geändert\)<\/span>/);
  assert.match(h, /<span class="ablauf-marke ablauf-marke-geaendert">geändert<\/span>/);
  const letzter = text(html(createElement(AblaufSchritt, { ablauf: a, index: a.schritte.length - 1, nr: 1, von: 1 })));
  assert.ok(letzter.includes("Hier bricht das Programm ab: ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3 (Zeile 9)."));
  const vorletzter = text(html(createElement(AblaufSchritt, { ablauf: a, index: a.schritte.length - 2, nr: 1, von: 1 })));
  assert.ok(!vorletzter.includes("Hier bricht"), "Fehler erst am letzten Schritt");
  assert.ok(text(html(createElement(AblaufSchritt, { ablauf: a, index: 3, nr: 1, von: 1 }))).includes("'x'"), "char mit Apostrophen");
});

test("lange Arrays werden nach 40 Zellen abgeschnitten, gleiche Referenzen benannt", () => {
  const lang: Wert = { art: "array", id: 7, elementTyp: "int", elemente: Array.from({ length: 50 }, (_, k) => ({ art: "int", text: String(k) })) };
  const a: Ablauf = {
    quelle: "int[] a = new int[50];\nint[] b = a;\n",
    ausgabe: "",
    schritte: [
      {
        zeile: 2,
        von: 23,
        bis: 35,
        art: "anweisung",
        fein: false,
        erklaerung: "`b` zeigt auf dasselbe Array.",
        frames: [{ methode: "main", zeile: 2, variablen: [{ name: "a", typ: "int[]", wert: lang }, { name: "b", typ: "int[]", wert: lang, neu: true }] }],
        ausgabe: "",
        neueAusgabe: "",
      },
    ],
  };
  const h = html(createElement(AblaufSchritt, { ablauf: a, index: 0, nr: 1, von: 1 }));
  const zellen = h.slice(h.indexOf('<table class="ablauf-zellen"'), h.indexOf("</table>", h.indexOf('<table class="ablauf-zellen"')));
  assert.equal(zellen.match(/<th scope="col">/g)?.length, 40);
  assert.ok(text(zellen).includes("10 weitere"));
  assert.ok(text(h).includes("dasselbe Array wie a"));
  assert.ok(text(h).includes("dasselbe Array wie b"));
});

test("Sonderfälle: abgeschnitten, Eingabe und Schließen in der Kopfzeile", () => {
  const t = text(html(createElement(AblaufSpieler, { ablauf: { ...BEISPIEL_DREIECK, abgeschnitten: "schritte" }, eingabe: "3\n4", onSchliessen: () => {} })));
  assert.ok(t.includes(`Die Ablaufansicht hört nach ${BEISPIEL_DREIECK.schritte.length} Schritten auf, das Programm läuft aber weiter.`));
  assert.ok(t.includes("Eingabe: 3⏎4"));
  assert.ok(t.includes("Ablauf schließen"));
  const ohneFein: Ablauf = { ...BEISPIEL_DREIECK, schritte: BEISPIEL_DREIECK.schritte.filter((s) => !s.fein) };
  const h = html(createElement(AblaufSpieler, { ablauf: ohneFein }));
  assert.match(h, /<input type="radio"[^>]*disabled=""[^>]*\/>Ausdruck für Ausdruck/, "ohne Teilausdrücke ist der Modus aus");
});

test("Klassenvariablen (Schritt.felder) erscheinen als eigener Block, nur wenn es welche gibt", () => {
  const a: Ablauf = {
    ...BEISPIEL_DREIECK,
    schritte: BEISPIEL_DREIECK.schritte.map((s, k) => (k === 0 ? { ...s, felder: [{ name: "zaehler", typ: "int", wert: { art: "int", text: "1" }, geaendert: true }] } : s)),
  };
  const mit = text(html(createElement(AblaufSchritt, { ablauf: a, index: 0, nr: 1, von: 1 })));
  assert.ok(mit.includes("Klassenvariablen"));
  assert.ok(mit.includes("zaehlergeändert"), "Name mit Marke");
  const ohne = text(html(createElement(AblaufSchritt, { ablauf: a, index: 1, nr: 1, von: 1 })));
  assert.ok(!ohne.includes("Klassenvariablen"));
});

test("echte Engine: Ablauf mit Aufruf, Rekursion und Klassenvariable rendert im Spieler", () => {
  const quelle = "public class Z {\n    static int anzahl = 0;\n    static int quersumme(int n) {\n        anzahl++;\n        if (n < 10) return n;\n        return n % 10 + quersumme(n / 10);\n    }\n}\n";
  const r = erzeugeAblauf(quelle, { aufruf: "quersumme(123)" });
  assert.ok(r.ok, "die Engine unterstuetzt das Beispiel");
  if (!r.ok) return;
  const a = r.ablauf;
  assert.equal(a.ergebnis, "6");
  const t = text(html(createElement(AblaufSpieler, { ablauf: a, erwartet: "6" })));
  assert.ok(t.includes("Aufruf: quersumme(123)"));
  const tief = a.schritte.findIndex((s) => s.frames.length === 3);
  const h = text(html(createElement(AblaufSchritt, { ablauf: a, index: tief, nr: 1, von: 1 })));
  assert.ok(h.includes("Aufrufstapel") && h.includes("Klassenvariablen"));
  const ende = text(html(createElement(AblaufSchritt, { ablauf: a, index: a.schritte.length - 1, nr: 1, von: 1, erwartet: "6" })));
  assert.equal((ende.match(/Rückgabewert: 6/g) ?? []).length, 1, "der Erklaersatz der Engine nennt ihn schon, die Ansicht wiederholt ihn nicht");
  assert.ok(ende.includes("Der Test erwartet 6."));
});

test("echte Engine: char ohne Apostrophe, die Ansicht setzt sie; Laufzeitfehler ohne doppelten Satz", () => {
  const r = erzeugeAblauf("char c = 'a';\nc++;\nint[] a = new int[2];\na[2] = 1;\n");
  assert.ok(r.ok);
  if (!r.ok) return;
  const a = r.ablauf;
  const i = a.schritte.findIndex((s) => s.frames[0]?.variablen.some((v) => v.name === "c" && v.wert.art === "char" && v.wert.text === "b"));
  assert.ok(i >= 0, "Engine liefert den char roh");
  assert.ok(text(html(createElement(AblaufSchritt, { ablauf: a, index: i, nr: 1, von: 1 }))).includes("'b'"));
  assert.ok(a.fehler, "a[2] bei Laenge 2");
  const letzter = text(html(createElement(AblaufSchritt, { ablauf: a, index: a.schritte.length - 1, nr: 1, von: 1 })));
  assert.ok(letzter.includes("ArrayIndexOutOfBoundsException"));
  assert.equal((letzter.match(/Hier bricht das Programm ab/g) ?? []).length, 1, "der Satz steht nur einmal da");
});

// ---------------------------------------------------------------------------------------------------------------
// Einbau

test("Md: lauffähiger Java-Block bekommt den Knopf nur mit `ablauf`, serverseitig gerendert", () => {
  const md = '```java\nint x = 2;\nSystem.out.println(x * 3);\n```';
  const mit = html(mdMitAblauf(md));
  assert.match(mit, /<div class="ablauf-block"><pre class="code-block code-java/);
  assert.ok(text(mit).includes("Ablauf ansehen"));
  assert.match(mit, /aria-expanded="false"/);
  const ohne = html(createElement(Md, null, md));
  assert.ok(!text(ohne).includes("Ablauf ansehen"), "Angaben und Karten (ohne ablauf) verraten nichts");
  assert.ok(ohne.includes("code-java"));
});

test("Md: nur Blöcke, die ausführbar aussehen", () => {
  const knopf = (java: string) => text(html(mdMitAblauf("```java\n" + java + "\n```"))).includes("Ablauf ansehen");
  assert.equal(knopf("int x = 3;\nx++;"), false, "keine Ausgabe, kein main, keine Methode");
  assert.equal(knopf("public static int quadrat(int x) {\n    return x * x;\n}"), false, "nur eine Methode: ohne Aufruf läuft nichts");
  assert.equal(knopf("public class A {\n    static void f() {\n        System.out.println(1);\n    }\n}"), false, "Klasse ohne main");
  assert.equal(knopf("public class A {\n    public static void main(String[] args) {\n        System.out.println(1);\n    }\n}"), true);
  assert.equal(knopf("for (int i = 0; i < 3; i++) {\n    if (i > 0) {\n        System.out.print(i);\n    } else if (i < 0) {\n    }\n}"), true, "Schleifen und if sind keine Methodenköpfe");
  assert.equal(knopf("Scanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n);"), false, "in Lektionen gibt es keine Tastatureingabe");
  assert.equal(knopf("public static void main(String... args) {\n    int a = 1;\n}"), true, "Varargs sind kein Platzhalter");
  assert.equal(knopf("System.out.println(x);\n...\n"), false, "Platzhalter ...");
  assert.equal(knopf("static void f() {\n    …\n}"), false, "Platzhalter …");
  assert.equal(knopf('System.out.println("...");\n// ... weiter'), true, "... in String und Kommentar stört nicht");
});

test("Md: CodeDraw-Blöcke bekommen den Knopf nur, wenn sie ein Fenster anlegen und vollständig aussehen", () => {
  const knopf = (java: string) => text(html(mdMitAblauf("```java\n" + java + "\n```"))).includes("Ablauf ansehen");
  const klasse = "import codedraw.*;\npublic class Bild {\n    public static void main(String[] args) {\n        CodeDraw cd = new CodeDraw(200, 100);\n        cd.fillCircle(50, 50, 20);\n    }\n}";
  assert.equal(knopf(klasse), true, "Klasse mit main und Fenster");
  assert.equal(knopf("CodeDraw cd = new CodeDraw(200, 100);\ncd.fillCircle(50, 50, 20);"), true, "Anweisungen mit eigenem Fenster");
  assert.equal(knopf("cd.fillCircle(50, 50, 20);\ncd.show();"), false, "ohne `new CodeDraw(` fehlt das Fenster");
  assert.equal(knopf("import codedraw.CodeDraw;\npublic class A {\n    public static void main(String[] args) {\n        System.out.println(1);\n    }\n}"), false, "nur der Import, kein Fenster");
  assert.equal(knopf("import codedraw.*;\nCodeDraw cd = new CodeDraw(200, 100);\ncd.show();"), false, "Anweisungen mit Import sind ein Dateiausschnitt");
  assert.equal(knopf("static void ecke(CodeDraw cd) {\n    cd.fillCircle(5, 5, 5);\n}"), false, "Methode ohne Aufruf");
});

const AUSGABE_TEIL = { typ: "ausgabe", code: 'System.out.println("hi");', loesung: "hi\n" } as const;

test("AusgabeEingabe: Knopf erst nach dem Prüfen (der Ablauf verrät die Ausgabe)", () => {
  const props = { teil: AUSGABE_TEIL, wert: "", setze: () => {}, gesperrt: false } as unknown as Parameters<typeof AusgabeEingabe>[0];
  assert.ok(!text(html(createElement(AusgabeEingabe, { ...props, zustand: "" }))).includes("Ablauf ansehen"));
  assert.ok(text(html(createElement(AusgabeEingabe, { ...props, zustand: "eingabe-falsch" }))).includes("Ablauf ansehen"));
});

test("CodeEingabe: Testwahl ohne verborgene Tests, Zeichnungs-Tests sind wählbar", () => {
  const tests = [
    { aufruf: "quersumme(123)", erwartet: "6" },
    { aufruf: "quersumme(0)", erwartet: "0", beschreibung: "Basisfall 0" },
    { versteckt: true, beschreibung: "geheim" },
    { aufruf: "zeichne(new CodeDraw(400, 400))", zeichnung: true },
  ];
  const h = html(createElement(AblaufFuerCode, { quelle: "class A {}", tests }));
  const t = text(h);
  assert.equal(h.match(/<option/g)?.length, 3);
  assert.ok(t.includes("quersumme(123)") && t.includes("quersumme(0) (Basisfall 0)"), "Aufruf zuerst, Beschreibung in Klammern");
  assert.ok(!t.includes("geheim"));
  assert.ok(t.includes("zeichne(new CodeDraw(400, 400))"), "der Zeichnungs-Test steht zur Wahl");
  assert.ok(!t.includes("zeigt die Ablaufansicht nicht"), "kein Hinweis mehr, dass Zeichnungen fehlen");
  assert.ok(t.includes("Meinen Code ablaufen sehen"));
  const einer = text(html(createElement(AblaufFuerCode, { quelle: "class A {}", tests: [{ stdin: "5\n", stdout: "25\n" }] })));
  assert.ok(einer.includes("Mit dem Test main mit Eingabe 5⏎"));
  const nurZeichnung = text(html(createElement(AblaufFuerCode, { quelle: "class A {}", tests: [tests[3]] })));
  assert.ok(nurZeichnung.includes("Meinen Code ablaufen sehen") && nurZeichnung.includes("Mit dem Test zeichne(new CodeDraw(400, 400))"));
  const teil = { typ: "code", vorlage: "class A {}", tests, musterloesung: "" };
  const ce = text(html(createElement(CodeEingabe, { teil, wert: "class A {}", setze: () => {}, zustand: "" } as unknown as Parameters<typeof CodeEingabe>[0])));
  assert.ok(ce.includes("Meinen Code ablaufen sehen"), "immer verfügbar, auch vor dem Prüfen");
});

// ---------------------------------------------------------------------------------------------------------------
// Zeichenfläche (CodeDraw)

const BILD = [
  "CodeDraw cd = new CodeDraw(400, 300);",
  "cd.setColor(Palette.RED);",
  "cd.fillRectangle(20, 40, 60, 30);",
  "cd.fillCircle(200, 150, 25);",
  "cd.show();",
  "cd.clear();",
  "cd.fillSquare(5, 5, 10);",
].join("\n");

function ablaufVon(q: string): Ablauf {
  const r = erzeugeAblauf(q);
  assert.ok(r.ok, JSON.stringify(r));
  return r.ablauf;
}
const bildAblauf = () => ablaufVon(BILD);
const schrittZeile = (a: Ablauf, zeile: number) => a.schritte.findIndex((s) => s.zeile === zeile && !s.fein);
const flaeche = (a: Ablauf, index: number, vorher?: number) => html(createElement(AblaufSchritt, { ablauf: a, index, nr: 1, von: 1, vorher }));
/** Inhalt des SVG der Zeichenfläche (ohne den umschließenden Tag) */
const svgInhalt = (h: string) => h.slice(h.indexOf('class="ablauf-flaeche-svg">'), h.indexOf("</svg>", h.indexOf("ablauf-flaeche-svg")));
/** gezeichnete Formen (ohne Leinwand und Hervorhebung) */
const gezeichnet = (h: string) =>
  (svgInhalt(h).replace(/<g class="ablauf-flaeche-neu".*$/, "").match(/<(?:circle|rect|ellipse|line|polygon|path) /g) ?? []).length - 1;

test("Zeichenfläche: weiße Leinwand in der Größe aus new CodeDraw, Legende, role=img mit Anzahl der Formen", () => {
  const a = bildAblauf();
  // Zeile 3: fillRectangle
  const h = flaeche(a, schrittZeile(a, 3), schrittZeile(a, 2));
  assert.match(h, /<svg viewBox="0 0 400 300" role="img" aria-label="Zeichenfläche 400 × 300 Pixel mit 1 Form, davon 1 neu in diesem Schritt"/);
  assert.ok(text(h).includes("Zeichenfläche 400 × 300"));
  assert.match(h, /<rect x="0" y="0" width="400" height="300" fill="#ffffff"><\/rect>/, "weißer Hintergrund");
  assert.match(h, /<rect x="20" y="40" width="60" height="30" fill="#ff0000" stroke="none"><\/rect>/, "das Rechteck mit seiner Farbe");
  assert.ok(text(h).includes("1 neu in diesem Schritt (gestrichelter Rahmen)"));
  assert.equal((h.match(/ablauf-flaeche-rahmen/g) ?? []).length, 1, "genau die neue Form hat einen Rahmen");
  assert.match(h, /<rect class="ablauf-flaeche-rahmen" x="16" y="36" width="68" height="38"><\/rect>/, "Rahmen etwas größer als das Rechteck");
});

test("Zeichenfläche: zeigt genau die Formen bis zum Schritt, auch beim Springen zurück; clear() leert sie", () => {
  const a = bildAblauf();
  assert.equal(gezeichnet(flaeche(a, schrittZeile(a, 2), schrittZeile(a, 1))), 0, "nach der Farbe noch nichts gezeichnet");
  assert.equal(gezeichnet(flaeche(a, schrittZeile(a, 3), schrittZeile(a, 2))), 1);
  const bei4 = flaeche(a, schrittZeile(a, 4), schrittZeile(a, 3));
  assert.equal(gezeichnet(bei4), 2, "Rechteck und Kreis");
  // Zurückblättern: Zeile 3 zeigt wieder nur das Rechteck, ohne Neuberechnung
  assert.equal(gezeichnet(flaeche(a, schrittZeile(a, 3), schrittZeile(a, 2))), 1);
  assert.equal(gezeichnet(flaeche(a, schrittZeile(a, 3))), 1, "ohne Vorgänger-Angabe gilt der Schritt davor");
  const nachClear = flaeche(a, schrittZeile(a, 6), schrittZeile(a, 5));
  assert.ok(!nachClear.includes('fill="#ff0000"') && !nachClear.includes("<circle"), "Rechteck und Kreis sind weg");
  assert.ok(text(nachClear).includes("Gerade gelöscht"));
  assert.match(nachClear, /aria-label="Zeichenfläche 400 × 300 Pixel mit 0 Formen, gerade gelöscht"/);
  const danach = flaeche(a, schrittZeile(a, 7), schrittZeile(a, 6));
  assert.ok(danach.includes('<rect x="5" y="5" width="10" height="10"'));
  assert.equal(gezeichnet(danach), 2, "nach dem Löschen: der Hintergrund und das Quadrat, sonst nichts");
});

test("Zeichenfläche: vor dem Fenster nur ein Platzhalter; show()-Hinweis nur, wenn das Programm show() aufruft", () => {
  const a = bildAblauf();
  const vorFenster = flaeche(ablaufVon("int x = 1;\nCodeDraw cd = new CodeDraw(30, 20);"), 0);
  assert.match(vorFenster, /aria-label="Zeichenfläche: noch kein Fenster angelegt"/);
  assert.ok(text(vorFenster).includes("Noch kein Fenster"));
  const unterwegs = text(flaeche(a, schrittZeile(a, 4), schrittZeile(a, 3)));
  assert.ok(unterwegs.includes("2 Formen noch nicht mit show() angezeigt"), unterwegs);
  const nachShow = text(flaeche(a, schrittZeile(a, 5), schrittZeile(a, 4)));
  assert.ok(!nachShow.includes("noch nicht mit show()"), "nach show() ist alles gezeigt");
  const ohneShow = ablaufVon("CodeDraw cd = new CodeDraw(50, 50);\ncd.fillCircle(5, 5, 5);");
  assert.ok(!text(flaeche(ohneShow, 1, 0)).includes("show()"), "kein Hinweis, wenn nie show() kommt");
});

test("Zeichenfläche fehlt bei Programmen ohne CodeDraw; Farben erscheinen als Farbfeld im Variablenkasten", () => {
  assert.ok(!html(createElement(AblaufSchritt, { ablauf: BEISPIEL_DREIECK, index: 0, nr: 1, von: 1 })).includes("ablauf-flaeche"));
  const a = bildAblauf();
  const h = flaeche(a, schrittZeile(a, 2), schrittZeile(a, 1));
  assert.match(h, /<span class="ablauf-farbfeld" style="background:#ff0000" aria-hidden="true"><\/span>CodeDraw 400×300, Farbe Rot, Linienbreite 1/);
});
