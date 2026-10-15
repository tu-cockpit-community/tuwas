---
nummer: 2
titel: Ausdrücke, Datentypen, Casts und Strings
kurz: Variablen, Datentypen und Literale, Rechnen mit ganzen Zahlen und Gleitkommazahlen, implizite und explizite Typumwandlung, char als Zahl, String-Verkettung, String-Methoden, equals und die Klasse Math.
teil: grundlagen
stunden: 6
pruefungsgewicht: 3
voraussetzungen: [werkzeuge]
lernziele:
  - Variablen mit passendem Datentyp deklarieren, initialisieren und Zuweisungen Schritt für Schritt verfolgen sowie zu jedem Literal (auch 0x1F, 017, 0b101, 5L, 2.5f, 1e3) Typ und Wert angeben
  - Ausdrücke mit int-Operatoren (+ - * / %, Vorrang, +=, ++) einschließlich Ganzzahldivision, Rest mit negativen Zahlen und Überlauf exakt auswerten
  - den Typ jedes Teilausdrucks in gemischten Rechnungen bestimmen und die Ausgabe von double-Werten (zum Beispiel 3.0, 0.30000000000000004, 1.0E7) vorhersagen
  - implizite Typumwandlungen in einer Anweisungsfolge zählen und explizite Casts samt Datenverlust (Abschneiden, byte-Überlauf) auswerten
  - mit char-Werten als Zahlen rechnen ('a' + 1, Cast nach char, Ziffernwert c - '0') und die Ausgabe vorhersagen
  - die Ausgabe von String-Verkettungen mit Zahlen und Zeichen aus der Auswertung von links nach rechts exakt herleiten
  - die String-Methoden length, charAt, substring und indexOf mit korrekten Indizes anwenden und begründen, warum man Strings mit equals und nicht mit == vergleicht
  - Vergleichsoperatoren und Methoden der Klasse Math korrekt einsetzen und damit kleine Rechenprogramme (Wechselgeld, Rundung, Durchschnitt) schreiben
---

**Worum geht es?** Ein Programm rechnet mit Werten: Zahlen, Zeichen, Texten, Wahrheitswerten. In diesem Kapitel
lernst du, wie Java diese Werte speichert und wie es mit ihnen rechnet. Das klingt einfach, hat aber Tücken.
In Java ist `7 / 2` nicht `3.5`, sondern `3`. Und `'a' + 'b'` ergibt keinen Text, sondern die Zahl `195`.
Solche Regeln lernst du hier so genau, dass du jede Ausgabe vorhersagen kannst.

**Was kommt in der Prüfung?** Fast alles in diesem Kapitel ist Quizstoff. Im ersten TUWEL-Quiz der letzten Jahre
fragten die ersten beiden Fragen immer nach diesem Kapitel:

- **Typumwandlungen zählen oder ein Cast-Ergebnis angeben,** zum Beispiel „Wie viele implizite Typkonvertierungen finden statt?“ oder „Welchen Wert hat `(int) (2.6F + 4.7F)`?“.
- **Zulässige Zuweisungen erkennen,** zum Beispiel ob `String s = text.charAt(0);` übersetzt wird.
- **Ausgaben vorhersagen,** etwa bei `"" + a + b` im Vergleich zu `a + b + ""`.

Dazu kommen die beiden Übungen ohne Blatt (Übung 1 und 2) und das Übungsblatt zu Datentypen und Strings. Im
Programmiertest am Ende brauchst du die String-Methoden `charAt`, `length`, `substring`, `equals` und `isEmpty`
ständig. Und im Feedbackgespräch zu deinen Blättern wirst du gefragt, warum eine Ausgabe so aussieht, wie sie aussieht.

**Wozu brauchst du das später?** Jedes Programm in diesem Kurs besteht aus Ausdrücken. Wer Ganzzahldivision, Rest
und Verkettung sicher beherrscht, findet leichter Fehler in Schleifen ([Kapitel 4](/lernen/ep1/schleifen)). Mit `/`
und `%` zerlegst du Zahlen in Ziffern
([7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division)). Und
mit den String-Methoden schreibst du rekursive Methoden
([10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings)).

:::vorwissen
Du brauchst aus [Kapitel 1](/lernen/ep1/werkzeuge):

- **Ein Programm übersetzen und starten:** Der Compiler prüft deinen Quelltext und übersetzt ihn. Erst danach läuft das Programm.
- **Die Methode `main`:** Dort beginnt die Ausführung. Die Anweisungen darin laufen von oben nach unten ab.
- **Ausgabe mit `System.out.println` und `System.out.print`:** `println` schreibt und beginnt danach eine neue Zeile, `print` nicht.
- **Kommentare:** Text nach `//` oder zwischen `/*` und `*/` ignoriert der Compiler.

Die folgenden sechs Fragen zeigen dir, ob du diese Grundlagen sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst [Kapitel 1](/lernen/ep1/werkzeuge).
:::

```aufgabe
id: au-ein-print-println
titel: print und println
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Achte genau auf die Zeilenumbrüche.
  (Wiederholung: [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println))
teile:
  - typ: ausgabe
    code: |
      System.out.print("Hallo");
      System.out.println("Welt");
      System.out.print("Tschüss");
    loesung: |
      HalloWelt
      Tschüss
    fehler:
      - wert: "Hallo\nWelt\nTschüss"
        meldung: |
          `print` beginnt nach der Ausgabe **keine** neue Zeile. Erst `println` setzt den Zeilenumbruch,
          und zwar **nach** seinem eigenen Text.
      - wert: "Hallo Welt\nTschüss"
        meldung: Java fügt nie von sich aus ein Leerzeichen ein. Zwischen den Texten steht nur, was in den Anführungszeichen steht.
loesung: |
  `print("Hallo")` schreibt `Hallo` und bleibt in derselben Zeile.
  ---
  `println("Welt")` schreibt `Welt` direkt dahinter und beginnt danach eine neue Zeile. `print("Tschüss")` schreibt in diese neue Zeile.
```

```aufgabe
id: au-ein-anfuehrung
titel: Text in Anführungszeichen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println))
teile:
  - typ: ausgabe
    code: |
      System.out.println("3 + 4");
    loesung: |
      3 + 4
    fehler:
      - wert: "7"
        meldung: |
          Alles zwischen den doppelten Anführungszeichen `"` ist Text. Java rechnet darin nichts aus,
          sondern gibt die Zeichen genau so aus, wie sie dastehen.
loesung: |
  Zwischen `"` und `"` steht ein Text (ein String). Er wird Zeichen für Zeichen ausgegeben.
  ---
  Die Ausgabe ist also `3 + 4` mit den Leerzeichen. Gerechnet wird nur ohne Anführungszeichen, das lernst du in diesem Kapitel.
```

```aufgabe
id: au-ein-kommentar
titel: Was ignoriert der Compiler?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [1.5 Kommentare und lesbarer Code](/lernen/ep1/werkzeuge/kommentare-und-lesbarer-code))
teile:
  - typ: ausgabe
    code: |
      System.out.println("A"); // System.out.println("B");
      /* System.out.println("C"); */
      System.out.println("D");
    loesung: |
      A
      D
    fehler:
      - wert: "A\nB\nC\nD"
        meldung: Text nach `//` bis zum Zeilenende und Text zwischen `/*` und `*/` sind Kommentare. Sie werden nicht ausgeführt.
      - wert: "D"
        meldung: Der Kommentar beginnt erst **nach** der ersten Anweisung. `System.out.println("A");` steht davor und wird ausgeführt.
loesung: |
  In Zeile 1 läuft `System.out.println("A");`. Alles ab `//` ist Kommentar.
  ---
  Zeile 2 ist ganz Kommentar. Zeile 3 gibt `D` aus.
```

```aufgabe
id: au-ein-main
titel: Wo beginnt das Programm?
niveau: 1
art: check
angabe: |
  Ein Java-Programm besteht aus einer Klasse mit mehreren Teilen. Wo beginnt die Ausführung, wenn du das Programm
  startest? (Wiederholung: [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile))
teile:
  - typ: auswahl
    optionen:
      - in der ersten Zeile der Datei, also bei `public class …`
      - bei der ersten Anweisung in der Methode `main`
      - bei der Anweisung, die am weitesten links steht
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Zeile `public class …` legt nur fest, wie die Klasse heißt. Ausgeführt wird sie nicht.
      - wert: 2
        meldung: Die Einrückung ist nur für Menschen da. Java richtet sich nach der Struktur, nicht nach Leerzeichen.
loesung: |
  Java sucht in der gestarteten Klasse die Methode `public static void main(String[] args)`.
  ---
  Die Anweisungen in ihren geschweiften Klammern `{ }` laufen von oben nach unten ab.
```

```aufgabe
id: au-ein-semikolon
titel: Was fehlt hier?
niveau: 1
art: check
angabe: |
  Welche Zeile wird vom Compiler **nicht** übersetzt? (Wiederholung: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))
teile:
  - typ: zeilen
    code: |
      System.out.println("eins");
      System.out.println("zwei")
      System.out.println("drei");
    loesung: [2]
    fehler:
      - wert: [3]
        meldung: |
          Zeile 3 endet korrekt mit `;`. Schau dir das Ende der Zeile davor an: Dort fehlt etwas. Der Compiler
          meldet genau diese Zeile und setzt den Pfeil `^` direkt hinter die schließende Klammer.
loesung: |
  Jede Anweisung endet in Java mit einem Strichpunkt `;`.
  ---
  In Zeile 2 fehlt er. Der Compiler meldet `';' expected`, und das Programm startet gar nicht.
```

```aufgabe
id: au-ein-reihenfolge
titel: Von oben nach unten
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println))
teile:
  - typ: ausgabe
    code: |
      System.out.println("1");
      System.out.println();
      System.out.println("2");
    loesung: |
      1

      2
    fehler:
      - wert: "1\n2"
        meldung: '`System.out.println()` ohne Inhalt gibt eine **leere Zeile** aus. Sie zählt mit.'
loesung: |
  Die Anweisungen laufen von oben nach unten.
  ---
  Die mittlere Anweisung schreibt nichts, beginnt aber eine neue Zeile. Dadurch entsteht eine leere Zeile zwischen `1` und `2`.
```

## Variablen, Datentypen und Literale

```aufgabe
id: au-var-check-ausgabe
titel: Zwei Ausgaben hintereinander
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Ausgaben mit `println` kennst du aus [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println).)
teile:
  - typ: ausgabe
    code: |
      System.out.println("Preis:");
      System.out.println("12 Euro");
    loesung: |
      Preis:
      12 Euro
    fehler:
      - wert: "Preis:12 Euro"
        meldung: '`println` beginnt nach jeder Ausgabe eine neue Zeile. Die zweite Ausgabe steht also darunter.'
loesung: |
  Die erste Anweisung schreibt `Preis:` und beginnt eine neue Zeile.
  ---
  Die zweite schreibt `12 Euro` in diese neue Zeile.
```

Bisher hat dein Programm nur feste Texte ausgegeben. Ein echtes Programm muss sich aber Werte **merken**: einen
Preis, eine Anzahl, einen Namen. Dafür gibt es Variablen. In diesem Abschnitt lernst du, wie man eine Variable
anlegt, wie man ihr einen Wert gibt und welche Arten von Werten Java kennt.

### Was ist eine Variable?

Stell dir eine **Variable** als beschriftete Schachtel im Speicher des Computers vor. Auf der Schachtel steht ein
Name, zum Beispiel `alter`. In der Schachtel liegt genau ein Wert, zum Beispiel `19`. Außerdem ist festgelegt, welche
Art von Wert hineinpasst: nur ganze Zahlen, nur Texte und so weiter. Diese Art heißt **Datentyp** (kurz: Typ).

:::definition[Variable, Deklaration, Zuweisung]
Eine **Variable** ist eine benannte Speicherstelle. Sie hat einen **Namen**, einen **Datentyp** und einen **Wert**.

- Die **Deklaration** legt die Variable an: `int alter;` Dabei ist `int` der Datentyp (ganze Zahl), `alter` der Name, und der Strichpunkt `;` beendet die Anweisung.
- Die **Zuweisung** `alter = 19;` legt den Wert `19` in die Variable. Das Zeichen `=` heißt hier **nicht** „ist gleich“, sondern „bekommt den Wert“.
- Die **Initialisierung** ist die erste Zuweisung. Man kann sie mit der Deklaration verbinden: `int alter = 19;`
:::

Bei einer Zuweisung rechnet Java **zuerst die rechte Seite** aus. Erst danach legt es das Ergebnis in die Variable
links. Darum ist `x = x + 1;` sinnvoll: Nimm den alten Wert von `x`, zähle 1 dazu, und lege das Ergebnis wieder in `x`.
Ein Wert in einer Variable bleibt, bis eine neue Zuweisung ihn überschreibt.

**Nichtbeispiele:** `19 = alter;` übersetzt nicht, denn links vom `=` muss immer eine Variable stehen. Und
`int k; System.out.println(k);` übersetzt auch nicht. Der Compiler meldet `variable k might not have been initialized`:
Eine Variable muss einen Wert bekommen, bevor man sie liest.

:::beispiel[Zuweisungen Zeile für Zeile verfolgen]
```java
int a = 3;
int b = a;
a = 10;
System.out.println(b);
```

1. `int a = 3;` legt die Variable `a` an und legt `3` hinein.
2. `int b = a;` legt `b` an. Rechts steht `a`, also liest Java den Wert `3` und legt eine **Kopie** davon in `b`.
3. `a = 10;` überschreibt den Wert in `a`. Jetzt gilt `a = 10`. In `b` liegt weiter die Kopie `3`.
4. `System.out.println(b);` gibt den Wert von `b` aus, also `3`.

Die Ausgabe ist `3`. Wer `10` erwartet, denkt sich `b = a` wie eine dauerhafte Verbindung. Es ist aber nur eine einmalige Kopie.
:::

:::beispiel[Eine Variable mit sich selbst verrechnen]
```java
int punkte = 8;
punkte = punkte * 2;
punkte = punkte - 3;
System.out.println(punkte);
```

| Zeile | Rechnung rechts vom `=` | Wert von `punkte` danach |
|---|---|---|
| 1 | Der feste Wert `8`. | 8. |
| 2 | Alter Wert `8` mal `2` ergibt `16`. | 16. |
| 3 | Alter Wert `16` minus `3` ergibt `13`. | 13. |

Die Ausgabe ist `13`. So eine Tabelle heißt **Trace-Tabelle**. Sie ist das wichtigste Werkzeug, um Programme von Hand nachzuvollziehen.
:::

### Namen für Variablen

Ein Variablenname (ein **Bezeichner**) besteht aus Buchstaben, Ziffern, `_` und `$`. Er darf **nicht mit einer
Ziffer beginnen** und kein reserviertes Wort von Java sein, etwa `int`, `class` oder `while`. Groß- und
Kleinschreibung zählt: `summe` und `Summe` sind zwei verschiedene Variablen.

- **Gültige Namen:** `counter`, `anzahlTage`, `MAX_WERT`, `test2`.
- **Ungültige Namen:** `2tage` (beginnt mit Ziffer), `anzahl-tage` (Bindestrich ist ein Minus), `class` (reserviert).

In der Lehrveranstaltung schreibt man Variablen in **lowerCamelCase**: klein beginnen, jedes weitere Wort groß,
zum Beispiel `firstLetterInText`. Gute Namen sagen, wofür die Variable da ist. `elapsedDays` ist besser als `d`.

```aufgabe
id: au-var-trace
titel: Zuweisungen in einer Tabelle verfolgen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Verfolge die Werte der Variablen nach jeder Zeile. Trage den Wert nach der jeweiligen Zeile ein.

  ```java
  int x = 6;
  int y = x + 1;
  x = y * 2;
  y = x - y;
  ```
teile:
  - typ: trace
    spalten: [x, y]
    zeilen: [nach Zeile 1, nach Zeile 2, nach Zeile 3, nach Zeile 4]
    vorgabe: 1
    loesung: [[6, "-"], [6, 7], [14, 7], [14, 7]]
    fehler:
      - wert: ["6", "-", "6", "7", "14", "7", "14", "-7"]
        meldung: |
          In Zeile 4 steht `y = x - y`. Rechts wird zuerst gerechnet, und zwar mit den **aktuellen** Werten:
          `x` ist 14 und `y` ist 7. Das ergibt 7, nicht −7.
      - wert: ["6", "-", "6", "7", "12", "7", "12", "5"]
        meldung: In Zeile 3 hat `y` schon den Wert 7 aus Zeile 2. Java rechnet mit dem Wert, der **jetzt** in der Variable liegt.
hinweise:
  - Bei jeder Zeile zuerst die rechte Seite mit den aktuellen Werten ausrechnen, dann das Ergebnis links eintragen.
loesung: |
  **Ansatz:** Zeile für Zeile, jeweils zuerst rechts vom `=` rechnen. In Zeile 1 gibt es `y` noch nicht, daher der Strich.
  ---
  Zeile 2: `y = 6 + 1 = 7`. Zeile 3: `x = 7 * 2 = 14`.
  ---
  Zeile 4: `y = 14 - 7 = 7`. Am Ende gilt `x = 14` und `y = 7`.
```

### Die wichtigsten Datentypen

Java ist **streng typisiert**. Das heißt: Jede Variable hat einen festen Typ, und der Compiler prüft schon vor dem
Start, ob die Werte dazu passen. Ein Datentyp legt zwei Dinge fest: welche Werte erlaubt sind (der
**Wertebereich**) und was man mit ihnen tun kann.

Ein **Bit** ist eine einzelne Speicherstelle, die 0 oder 1 sein kann. Je mehr Bit ein Typ belegt, desto mehr Werte
passen hinein: 8 Bit ergeben 256 Muster, 32 Bit über 4 Milliarden.

| Typ | Was er speichert | Wertebereich und Beispiel |
|---|---|---|
| `int` | ganze Zahl (32 Bit). | etwa −2,1 bis +2,1 Milliarden, zum Beispiel `42`. |
| `long` | große ganze Zahl (64 Bit). | etwa ±9,2 Trillionen, zum Beispiel `42L`. |
| `double` | Kommazahl (64 Bit). | etwa 15 bis 16 gültige Stellen, zum Beispiel `3.14`. |
| `float` | Kommazahl (32 Bit, ungenauer). | etwa 7 gültige Stellen, zum Beispiel `3.14f`. |
| `boolean` | Wahrheitswert. | nur `true` oder `false`. |
| `char` | ein einzelnes Zeichen. | zum Beispiel `'A'`, `'7'`, `'?'`. |
| `String` | ein Text aus beliebig vielen Zeichen. | zum Beispiel `"Hallo"` oder der leere Text `""`. |

Daneben gibt es noch `byte` (8 Bit, −128 bis 127) und `short` (16 Bit, −32768 bis 32767). Sie kommen in Quizfragen
zu Casts vor, im Alltag kaum. In Java schreibt man Kommazahlen mit **Punkt**: `3.14`, nie `3,14`.

```aufgabe
id: au-var-typ-waehlen
titel: Den passenden Typ wählen
niveau: 1
lernziel: 0
kompetenz: verstehen
quelle: Übung 1 WS2021, Aufgabe 2 (nachgebaut)
angabe: |
  Welcher Datentyp passt am besten zu dem Wert, der gespeichert werden soll?
teile:
  - typ: auswahl
    label: a) die Anzahl der Studierenden in einem Hörsaal
    optionen: ['`int`', '`double`', '`String`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Anzahl hat keine Nachkommastellen. Mit `double` hättest du unnötig Kommazahlen und Rundungsprobleme.
  - typ: auswahl
    label: b) ob jemand den Test bestanden hat
    optionen: ['`char`', '`boolean`', '`int`']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: Mit `0` und `1` könnte man das nachbauen. Für „ja oder nein“ gibt es aber den eigenen Typ `boolean` mit `true` und `false`.
  - typ: auswahl
    label: c) der Anfangsbuchstabe eines Namens
    optionen: ['`String`', '`char`', '`int`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein `String` ginge auch, aber für **genau ein** Zeichen ist `char` der passende Typ.
  - typ: auswahl
    label: d) die Anzahl der Millisekunden seit dem Jahr 1970 (etwa 1,8 Billionen)
    optionen: ['`int`', '`long`', '`double`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`int` reicht nur bis etwa 2,1 Milliarden. 1,8 Billionen ist mehr als 800-mal so groß.'
hinweise:
  - Frag dich jeweils, ob der Wert eine ganze Zahl, eine Kommazahl, ein Wahrheitswert, ein Zeichen oder ein Text ist.
loesung: |
  **Ansatz:** Zuerst die Art des Werts bestimmen, dann bei ganzen Zahlen die Größe prüfen.
  ---
  a) Anzahl: ganze Zahl, klein, also `int`. b) Ja oder nein: `boolean`. c) Ein Zeichen: `char`.
  d) Ganze Zahl über 2,1 Milliarden: `long`.
```

Die sechs Typen der Tabelle außer `String` heißen zusammen mit `byte` und `short` **primitive Datentypen**. Das
sind genau acht. Ihr Wert liegt direkt in der Variable. `String` ist **kein** primitiver Typ, sondern eine Klasse.
Darum wird er großgeschrieben. Den Unterschied merkst du beim Vergleichen von Strings, das klärt
[2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).

### Literale: wie Werte im Quelltext stehen

Ein **Literal** ist ein Wert, der direkt im Quelltext steht, zum Beispiel `42` oder `"Hallo"`. Aus der Schreibweise
eines Literals ergibt sich sein Typ:

- **Ganze Zahl ohne Zusatz** wie `42` ist ein `int`. Mit angehängtem `L` wie `42L` ist sie ein `long`.
- **Kommazahl** wie `3.14` ist ein `double`. Mit angehängtem `f` wie `3.14f` ist sie ein `float`.
- **Zehnerpotenz:** `1.5e3` heißt 1,5 mal 10 hoch 3, also `1500.0`. Das Ergebnis ist immer ein `double` (mit `f` ein `float`).
- **Zeichen** stehen in einfachen Anführungszeichen: `'A'`. **Texte** stehen in doppelten: `"A"`.
- **Wahrheitswerte** sind `true` und `false`, ohne Anführungszeichen.

Ganze Zahlen kann man auch in anderen Zahlensystemen schreiben. Das kommt in Übungen und Quizfragen vor:

- `0x` am Anfang heißt **hexadezimal** (Basis 16, Ziffern 0–9 und A–F): `0x1A` ist 1 · 16 + 10 = 26.
- `0b` am Anfang heißt **binär** (Basis 2): `0b101` ist 1 · 4 + 0 · 2 + 1 = 5.
- Eine **führende Null** heißt **oktal** (Basis 8): `017` ist 1 · 8 + 7 = 15.
- Unterstriche dienen nur der Lesbarkeit: `1_000_000` ist eine Million.

:::tipp[Vorgriff: mehrere Werte in einer Zeile ausgeben]
In den Aufgaben dieses Abschnitts steht oft eine Ausgabe wie `System.out.println(h + ", " + o);`. Steht neben einem
`+` ein Text in Anführungszeichen, rechnet Java nicht. Es hängt die Werte als Text aneinander. Mit `h = 43` und
`o = 10` erscheint also `43, 10`. Die genauen Regeln und eine wichtige Falle lernst du in
[2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten).
:::

:::beispiel[Typ und Wert von Literalen bestimmen]
Diese Werte stammen in ähnlicher Form aus dem Übungsblatt zu Datentypen. Für jede Zeile bestimmen wir Typ und Wert.

| Literal | Typ | Wert, wie `println` ihn ausgibt |
|---|---|---|
| `250e-2f` | `float`, wegen des `f`. | 250 mal 10 hoch −2 ergibt `2.5`. |
| `0.0042e3` | `double` (Kommazahl ohne `f`). | 0,0042 mal 1000 ergibt `4.2`. |
| `0x1F` | `int` (hexadezimal). | 1 · 16 + 15 ergibt `31`. |
| `021` | `int` (oktal wegen der führenden Null). | 2 · 8 + 1 ergibt `17`. |
| `9L` | `long`, wegen des `L`. | `9` (das `L` wird nicht ausgegeben). |
| `'9'` | `char`. | das Zeichen `9`. |

Beachte: `println` gibt Zahlen immer im Zehnersystem aus. Die Schreibweise im Quelltext geht dabei verloren.
:::

**Nichtbeispiele:** Diese Literale passen **nicht** zum Typ der Variable, und der Compiler lehnt sie ab:

- `int gross = 3000000000;` Der Wert ist größer als der größte `int`. Meldung: `integer number too large`. Richtig wäre `long gross = 3000000000L;`
- `float preis = 1.5;` Das Literal `1.5` ist ein `double`, und ein `double` passt nicht ohne Verlust in einen `float`. Richtig ist `1.5f`.
- `char zeichen = "a";` Doppelte Anführungszeichen machen einen `String`. Ein `char` braucht `'a'`.

:::achtung[Eine führende Null ändert den Wert]
Eine typische falsche Erwartung:
```java
int nummer = 016;
System.out.println(nummer);   // erwartet: 16   tatsächlich: 14
```
Die führende Null macht aus `016` eine **Oktalzahl**: 1 · 8 + 6 = 14. Schreib Zahlen nie mit führender Null,
außer du willst wirklich das Achtersystem.
:::

:::achtung[Kommazahl ohne f in einer float-Variable]
```java
float gewicht = 75.5;     // Compilerfehler
```
Der Compiler meldet `possible lossy conversion from double to float`. Der Grund: `75.5` ist ein `double`-Literal,
und ein `double` hat mehr Stellen als ein `float`. Java verbietet stillen Genauigkeitsverlust. Richtig ist
`float gewicht = 75.5f;` oder gleich `double gewicht = 75.5;`.
:::

:::merke[Rezept: Literal lesen]
1. Steht es in `'…'`? Dann `char`. In `"…"`? Dann `String`. Ist es `true` oder `false`? Dann `boolean`.
2. Hat es (ohne `0x` davor) einen Punkt oder ein `e`? Dann `double`, mit `f` am Ende `float`.
3. Sonst ist es eine ganze Zahl: mit `L` ein `long`, sonst ein `int`.
4. Bei ganzen Zahlen den Anfang prüfen: `0x` heißt Basis 16 (`E` und `F` sind dort Ziffern), `0b` Basis 2, eine führende `0` Basis 8.
:::

```aufgabe
id: au-var-literal-gefuehrt
titel: Ein Literal-Programm nachvollziehen
niveau: 2
lernziel: 0
kompetenz: rechnen
quelle: Übungsblatt WS2021, Aufgabe 1a/c (nachgebaut)
angabe: |
  Was gibt das Programm aus? Trage die Ausgabe genau ein.
teile:
  - typ: ausgabe
    code: |
      int h = 0x2B;
      int o = 012;
      int b = 0b1101;
      double e = 3.5e2;
      long l = 7L;
      System.out.println(h + ", " + o + ", " + b + ", " + e + ", " + l);
    loesung: |
      43, 10, 13, 350.0, 7
    fehler:
      - wert: "43, 12, 13, 350.0, 7"
        meldung: '`012` hat eine führende Null und ist darum eine Oktalzahl (Basis 8): 1 · 8 + 2 = 10.'
      - wert: "43, 10, 13, 350, 7"
        meldung: '`3.5e2` ist ein `double`. Ein `double` wird immer mit Punkt ausgegeben, auch wenn er ganzzahlig ist: `350.0`.'
      - wert: "0x2B, 012, 0b1101, 3.5e2, 7L"
        meldung: Ausgegeben wird der **Wert** im Zehnersystem, nicht die Schreibweise aus dem Quelltext.
hinweise:
  - 'Rechne jedes Literal einzeln ins Zehnersystem um. Hexadezimal: B steht für 11.'
  - '`0b1101` ist binär: Stellenwerte 8, 4, 2, 1. Ein `double` wird immer mit Nachkommastelle ausgegeben.'
gefuehrt:
  - text: Welchen Wert hat `0x2B`? (Basis 16, B steht für 11)
    teil: { typ: zahl, loesung: "2*16 + 11" }
    erklaerung: 2 · 16 + 11 = 43.
  - text: Welchen Wert hat `012`?
    teil: { typ: zahl, loesung: "1*8 + 2" }
    erklaerung: Die führende Null bedeutet Basis 8, also 1 · 8 + 2 = 10.
  - text: Welchen Wert hat `0b1101`?
    teil: { typ: zahl, loesung: "8 + 4 + 0 + 1" }
    erklaerung: Binär mit den Stellenwerten 8, 4, 2, 1 ergibt 8 + 4 + 1 = 13.
  - text: Wie gibt `println` den Wert von `3.5e2` aus?
    teil:
      typ: auswahl
      optionen: ['`350`', '`350.0`', '`3.5e2`']
      richtig: [1]
    erklaerung: 3,5 mal 100 ist 350. Weil es ein `double` ist, erscheint `350.0`.
  - text: Überlege, was mit dem `L` von `7L` bei der Ausgabe passiert.
    erklaerung: Das `L` gehört nur zur Schreibweise im Quelltext. Ausgegeben wird `7`.
loesung: |
  **Ansatz:** Jedes Literal einzeln in Typ und Wert übersetzen, dann die Verkettung mit `", "` bilden.
  ---
  `0x2B` = 43, `012` = 10 (oktal), `0b1101` = 13, `3.5e2` = `350.0` (double), `7L` = `7`.
  ---
  Die Teile werden mit `", "` verbunden: `43, 10, 13, 350.0, 7`.
```

```aufgabe
id: au-var-literal-rf
titel: Typen von Literalen beurteilen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über das angegebene Literal.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`8L` ist ein Literal vom Typ `long`."
        richtig: true
      - text: "`2.0` ist ein Literal vom Typ `float`."
        richtig: false
        erklaerung: Kommazahlen ohne `f` sind `double`. Ein `float`-Literal wäre `2.0f`.
      - text: "`'4'` und `4` haben denselben Wert."
        richtig: false
        erklaerung: "`'4'` ist ein Zeichen. Intern steht dafür die Zahl 52, seine Nummer in der Zeichentabelle Unicode (mehr dazu in 2.5). `4` ist die Zahl vier."
      - text: "`1e2` ist ein Literal vom Typ `double` mit dem Wert 100."
        richtig: true
    fehler:
      - wert: [r, r, f, r]
        meldung: '`2.0` hat kein `f` am Ende. Jede Kommazahl ohne Zusatz ist in Java ein `double`.'
      - wert: [r, f, r, r]
        meldung: Ein Zeichen in einfachen Anführungszeichen ist ein `char`. Intern ist es seine Nummer in der Zeichentabelle Unicode, für `'4'` also 52, nicht 4.
hinweise:
  - Geh das Rezept „Literal lesen“ durch. Achte auf Anführungszeichen, Punkt, `e`, `f` und `L`.
loesung: |
  **Ansatz:** Für jedes Literal die Schreibweise prüfen.
  ---
  `8L` ist `long` (richtig). `2.0` ist `double`, nicht `float` (falsch). `'4'` ist ein Zeichen mit dem Zahlenwert 52 (falsch).
  `1e2` ist 1 mal 10 hoch 2 = `100.0`, ein `double` (richtig).
```

```aufgabe
id: au-var-zeilen
titel: Welche Deklarationen übersetzen nicht?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Markiere alle Zeilen, die der Compiler **nicht** übersetzt.
teile:
  - typ: zeilen
    code: |
      int 3d = 4;
      double preis = 9.99;
      float rabatt = 0.15;
      long sterne = 100000000000L;
      int einwohner = 9000000000;
      char note = "A";
      boolean fertig = false;
      String name = "Ada";
    loesung: [1, 3, 5, 6]
    fehler:
      - wert: [1, 5, 6]
        meldung: '`0.15` ist ein `double`-Literal. In eine `float`-Variable passt es nur mit `f`: `0.15f`.'
      - wert: [1, 3, 6]
        meldung: 9 Milliarden sind größer als der größte `int` (etwa 2,1 Milliarden). Das Literal ist ohne `L` gar nicht zulässig.
      - wert: [3, 5, 6]
        meldung: Ein Variablenname darf nicht mit einer Ziffer beginnen. `3d` ist kein gültiger Name.
hinweise:
  - Prüfe jede Zeile auf zwei Dinge. Ist der Name gültig? Passt das Literal zum Typ?
  - 'Kritisch sind: Kommazahl ohne `f` bei `float`, zu große ganze Zahl ohne `L`, doppelte Anführungszeichen bei `char`.'
loesung: |
  **Ansatz:** Jede Zeile auf gültigen Namen und passendes Literal prüfen.
  ---
  Zeile 1: `3d` beginnt mit einer Ziffer. Zeile 3: `0.15` ist `double`, passt nicht in `float`.
  ---
  Zeile 5: `9000000000` ist zu groß für ein `int`-Literal. Zeile 6: `"A"` ist ein `String`, kein `char`.
  Die Zeilen 2, 4, 7 und 8 sind korrekt.
```

```aufgabe
id: au-var-tausch
titel: Zwei Werte tauschen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Werte von `links` und `rechts` sollen getauscht werden. Danach soll `links` den Wert 9 und `rechts` den Wert 4
  haben. Fülle die Lücken. Die Hilfsvariable `merk` hält einen Wert fest, bevor er überschrieben wird.
teile:
  - typ: lueckentext
    code: |
      int links = 4;
      int rechts = 9;
      int merk = ___;
      links = ___;
      rechts = ___;
      System.out.println(links + " " + rechts);
    luecken: [["links"], ["rechts"], ["merk"]]
    fehler:
      - wert: ["links", "rechts", "links"]
        meldung: |
          Nach `links = rechts;` liegt in `links` schon die 9. Die alte 4 steckt nur noch in `merk`.
          Darum muss `rechts` den Wert aus `merk` bekommen.
hinweise:
  - Sobald du `links` überschreibst, ist sein alter Wert weg. Sichere ihn vorher.
  - 'Reihenfolge: alten Wert von `links` merken, `links` mit `rechts` überschreiben, `rechts` mit dem gemerkten Wert füllen.'
loesung: |
  **Ansatz:** Ein Tausch braucht eine dritte Variable, weil jede Zuweisung den alten Wert überschreibt.
  ---
  `int merk = links;` sichert die 4. `links = rechts;` legt die 9 in `links`.
  ---
  `rechts = merk;` legt die gesicherte 4 in `rechts`. Ausgabe: `9 4`.
```

```aufgabe
id: au-var-kette
titel: Eine längere Zuweisungskette
niveau: 3
lernziel: 0
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Erstelle dir zuerst eine Trace-Tabelle mit den Spalten `p`, `q` und `r`.
teile:
  - typ: ausgabe
    code: |
      int p = 5;
      int q = p * p;
      int r = q - p;
      p = r - q;
      q = q + p;
      r = p * q - r;
      System.out.println(p + " " + q + " " + r);
    loesung: |
      -5 20 -120
    fehler:
      - wert: "5 30 130"
        meldung: In Zeile 4 ist `r - q` = 20 − 25 = −5. Rechne mit dem Vorzeichen weiter.
      - wert: "-5 20 -80"
        meldung: In der letzten Zeile ist `p * q` = −5 · 20 = −100. Davon ziehst du `r` = 20 ab und erhältst −120.
hinweise:
  - Trage nach jeder Zeile alle drei Werte ein. Rechne immer mit den gerade aktuellen Werten.
  - 'Nach Zeile 3 gilt `p = 5`, `q = 25`, `r = 20`. Zeile 4 ergibt einen negativen Wert.'
loesung: |
  **Ansatz:** Trace-Tabelle Zeile für Zeile.
  ---
  Zeile 1 bis 3: `p = 5`, `q = 25`, `r = 25 - 5 = 20`.
  ---
  Zeile 4: `p = 20 - 25 = -5`. Zeile 5: `q = 25 + (-5) = 20`. Zeile 6: `r = (-5) * 20 - 20 = -120`.
  ---
  Ausgabe mit Leerzeichen dazwischen: `-5 20 -120`.
```

```reflexion
frage: Warum ist es sinnvoll, dass Java schon beim Übersetzen meldet, dass `float rabatt = 0.15;` nicht passt, statt einfach still zu runden?
antwort: |
  Weil ein stiller Genauigkeitsverlust ein Fehler ist, den man sonst lange nicht bemerkt. Der Compiler zwingt dich,
  dich bewusst zu entscheiden: Entweder du schreibst `0.15f` und nimmst die geringere Genauigkeit von `float` in Kauf,
  oder du verwendest `double`. Fehler, die der Compiler findet, sind die billigsten Fehler. Sie fallen auf, bevor das
  Programm überhaupt läuft.
```

```aufgabe
id: au-var-lieblingswerte
titel: Variablen anlegen und ausgeben
niveau: 2
lernziel: 0
kompetenz: anwenden
quelle: Aufgabenblatt 0 SS2020, Aufgabe 1a–c (nachgebaut)
angabe: |
  Ergänze `main`. Lege genau diese Variablen mit **genau dem Typ des Literals** an und gib sie dann in **einer**
  Zeile aus, getrennt durch Komma und Leerzeichen:

  - `zahl` mit dem Wert `0x1F`,
  - `gross` mit dem Wert `5000000000L`,
  - `anteil` mit dem Wert `0.25f`,
  - `zeichen` mit dem Wert `'Z'`,
  - `fertig` mit dem Wert `true`.

  Erwartete Ausgabe: `31, 5000000000, 0.25, Z, true`
teile:
  - typ: code
    vorlage: |
      public class Literale {
          public static void main(String[] args) {
              // TODO: Variablen anlegen und ausgeben
          }
      }
    musterloesung: |
      public class Literale {
          public static void main(String[] args) {
              int zahl = 0x1F;
              long gross = 5000000000L;
              float anteil = 0.25f;
              char zeichen = 'Z';
              boolean fertig = true;
              System.out.println(zahl + ", " + gross + ", " + anteil + ", " + zeichen + ", " + fertig);
          }
      }
    tests:
      - { stdout: "31, 5000000000, 0.25, Z, true\n", beschreibung: "Ausgabe von main" }
    fehler:
      - { wert: 1, meldung: "Vergleiche deine Ausgabe Zeichen für Zeichen. Nach jedem Komma steht genau ein Leerzeichen, und die Zeile endet mit einem Zeilenumbruch (println)." }
hinweise:
  - 'Bestimme zu jedem Literal den Typ: `0x1F` ist `int`, `5000000000L` ist `long`, `0.25f` ist `float`.'
  - 'Baue die Ausgabe mit `+` und dem Text `", "` zwischen je zwei Variablen, also `zahl + ", " + gross + ", " + …`.'
loesung: |
  **Ansatz:** Zuerst jedes Literal einem Typ zuordnen, dann die Ausgabe mit `+` zusammensetzen.
  ---
  ```java
  int zahl = 0x1F;
  long gross = 5000000000L;
  float anteil = 0.25f;
  char zeichen = 'Z';
  boolean fertig = true;
  ```
  ---
  ```java
  System.out.println(zahl + ", " + gross + ", " + anteil + ", " + zeichen + ", " + fertig);
  ```
  Kontrolle: `0x1F` wird als `31` ausgegeben, das `L` und das `f` erscheinen nicht.
```

## Rechnen mit ganzen Zahlen

```aufgabe
id: au-int-check-zuweisung
titel: Zuweisungen nacheinander
niveau: 1
art: check
angabe: |
  Welchen Wert hat `a` am Ende? (Zuweisungen Zeile für Zeile verfolgen: [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale))

  ```java
  int a = 5;
  a = a + 2;
  a = a * 3;
  ```
teile:
  - typ: zahl
    loesung: "(5 + 2) * 3"
    fehler:
      - wert: "5 + 2 * 3"
        meldung: Die beiden Zeilen laufen nacheinander. Nach Zeile 2 ist `a` schon 7, erst dann wird mit 3 multipliziert.
loesung: |
  Nach Zeile 2 gilt `a = 5 + 2 = 7`.
  ---
  Zeile 3 rechnet mit diesem neuen Wert: `a = 7 * 3 = 21`.
```

Mit ganzen Zahlen rechnet Java fast so, wie du es aus der Schule kennst. Fast: Bei der Division gibt es keinen
Nachkommaanteil, und sehr große Ergebnisse „laufen über“. Genau diese zwei Stellen fragen Quiz und Feedbackgespräch
besonders gern ab.

### Operatoren und ihr Vorrang

Ein **Ausdruck** ist eine Rechenvorschrift, die einen Wert ergibt, zum Beispiel `3 + 4` oder `preis * menge`. Die
Rechenzeichen darin heißen **Operatoren**, die Werte links und rechts davon heißen **Operanden**.

| Operator | Bedeutung | Beispiel mit `int` |
|---|---|---|
| `+` | Addition. | `7 + 2` ergibt `9`. |
| `-` | Subtraktion, auch Vorzeichen. | `7 - 2` ergibt `5`, `-7` ist minus sieben. |
| `*` | Multiplikation. | `7 * 2` ergibt `14`. |
| `/` | Division (bei `int` ganzzahlig). | `7 / 2` ergibt `3`. |
| `%` | Rest der ganzzahligen Division (sprich „modulo“). | `7 % 2` ergibt `1`. |

Wie in der Mathematik gilt **Punkt vor Strich**: `*`, `/` und `%` binden stärker als `+` und `-`. Stehen mehrere
Operatoren derselben Stufe nebeneinander, rechnet Java **von links nach rechts**. Klammern ändern die Reihenfolge.

:::beispiel[Einen Ausdruck mit vier Operatoren auswerten]
Was ergibt `14 - 9 / 2 * 3 % 4`?

1. Zuerst die Punktrechnungen `/`, `*` und `%`, und zwar von links nach rechts. Ganz links steht `9 / 2`. Das ergibt `4`, denn bei ganzen Zahlen fällt der Rest weg.
2. Weiter von links: `4 * 3` ergibt `12`.
3. Dann `12 % 4`: 12 geteilt durch 4 ist 3 Rest **0**. Also `0`.
4. Zum Schluss die Strichrechnung: `14 - 0` ergibt `14`.

Mit Klammern ändert sich alles: `(14 - 9) / 2 * 3` ist `5 / 2 * 3`, also `2 * 3 = 6`.
:::

### Ganzzahldivision und Rest

:::definition[Ganzzahldivision und Rest]
Sind beide Operanden von `/` ganze Zahlen (`int` oder `long`), dann ist das Ergebnis wieder eine ganze Zahl. Der
Nachkommaanteil wird **abgeschnitten**, also Richtung 0 gerundet. Das heißt **Ganzzahldivision**.

Der Operator `%` liefert den **Rest** dieser Division. Für alle ganzen Zahlen `a` und `b` mit `b ≠ 0` gilt:

`a == (a / b) * b + a % b`

Das doppelte Gleichheitszeichen `==` bedeutet in Java „ist gleich“. Ein einzelnes `=` wäre ja eine Zuweisung.

Ist der Rest nicht 0, hat er immer **dasselbe Vorzeichen wie `a`** (der Dividend, also die Zahl, die geteilt wird).
:::

Wir lesen die Definition an Zahlen. `17 / 5` ist 3, denn 5 passt dreimal in 17. Es bleibt `17 % 5 = 2` übrig.
Probe: 3 · 5 + 2 = 17. Ein **Nichtbeispiel**: `19 / 5` ist **nicht** 4, obwohl 3,8 näher bei 4 liegt. Java rundet
nicht, es schneidet ab. Das Ergebnis ist `3`, und der Rest ist `4`.

```aufgabe
id: au-int-check-abschneiden
titel: Abschneiden bei negativen Zahlen
niveau: 1
art: check
angabe: |
  Welchen Wert hat `-11 / 4` in Java?
teile:
  - typ: zahl
    loesung: "-2"
    fehler:
      - wert: "-3"
        meldung: −2,75 wird zur 0 hin abgeschnitten, nicht nach unten gerundet. Es bleibt −2.
      - wert: "-2.75"
        meldung: Beide Operanden sind `int`. Dann ist auch das Ergebnis eine ganze Zahl.
loesung: |
  −11 geteilt durch 4 ist −2,75.
  ---
  Abschneiden zur 0 hin ergibt `-2`. Der Rest ist `-11 % 4 = -3`, denn (−2) · 4 + (−3) = −11.
```

Bei negativen Zahlen bedeutet „abschneiden“ ein Runden **zur 0 hin**. Also ist `-17 / 5` gleich `-3` und nicht `-4`.
Den Rest liefert die Formel: `-17 == (-3) * 5 + r`, also ist `r = -2`. Der Rest ist negativ, weil `-17` negativ ist.
Bei `17 % -5` ist der Dividend positiv, daher ist der Rest `2`.

| Ausdruck | Ergebnis | Begründung |
|---|---|---|
| `17 / 5` | `3` | 3,4 abgeschnitten. |
| `17 % 5` | `2` | 17 = 3 · 5 + 2. |
| `-17 / 5` | `-3` | −3,4 zur 0 hin abgeschnitten. |
| `-17 % 5` | `-2` | −17 = (−3) · 5 + (−2), Vorzeichen wie −17. |
| `17 % -5` | `2` | 17 = (−3) · (−5) + 2, Vorzeichen wie 17. |

:::beispiel[Wechselgeld mit Scheinen und Münzen]
Du bekommst 87 Euro Wechselgeld. Es gibt nur 20-Euro-Scheine und 1-Euro-Münzen, und du willst möglichst wenige Stücke.

```java
int wechselgeld = 87;
int scheine = wechselgeld / 20;
int muenzen = wechselgeld % 20;
System.out.println(scheine + " Scheine, " + muenzen + " Münzen");
```

1. `87 / 20` ist die Ganzzahldivision: 20 passt viermal in 87. Also `scheine = 4`.
2. `87 % 20` ist der Rest: 87 − 4 · 20 = 7. Also `muenzen = 7`.
3. Die Ausgabe lautet `4 Scheine, 7 Münzen`. Probe: 4 · 20 + 7 = 87.

Genau so zerlegt man Sekunden in Minuten, Tage in Wochen oder Zahlen in Ziffern: `/` zählt die vollen Gruppen, `%` den Rest.
:::

:::achtung[Negative Division nach unten gerundet]
Eine typische falsche Rechnung:
```java
System.out.println(-7 / 2);   // erwartet: -4   tatsächlich: -3
System.out.println(-7 % 2);   // erwartet: 1    tatsächlich: -1
```
Wer −3,5 „nach unten“ auf −4 rundet, denkt an die Mathematik. Java schneidet aber zur 0 hin ab: −3,5 wird zu −3.
Der Rest folgt aus `-7 == (-3) * 2 + r`, also `r = -1`. Darum erkennt der Test `n % 2 == 1` („Rest ist gleich 1“)
keine negativen ungeraden Zahlen. Sicher ist der Test `n % 2 != 0`. Dabei bedeutet `!=` „ist ungleich“.
:::

:::achtung[Erst teilen, dann multiplizieren]
```java
int menge = 7;
System.out.println(menge / 2 * 2);   // erwartet: 7   tatsächlich: 6
```
Von links nach rechts: `7 / 2` ist schon `3`, der Rest ist verloren. Danach ergibt `3 * 2` nur `6`. In der Mathematik
kürzt man „durch 2 mal 2“ einfach weg. Bei Ganzzahldivision darf man das **nicht**.
:::

Was passiert bei einer Division durch 0? Der Compiler übersetzt `int q = 5 / 0;` ohne Murren. Erst beim Ausführen
bricht das Programm mit `ArithmeticException: / by zero` ab. Das ist ein **Laufzeitfehler**, also ein Fehler, der
erst während des Laufs auftritt. Dasselbe gilt für `5 % 0`.

```aufgabe
id: au-int-div-rest
titel: Division und Rest mit Vorzeichen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(23 / 4);
      System.out.println(23 % 4);
      System.out.println(-23 / 4);
      System.out.println(-23 % 4);
      System.out.println(23 % -4);
    loesung: |
      5
      3
      -5
      -3
      3
    fehler:
      - wert: "5\n3\n-6\n1\n3"
        meldung: |
          Java rundet bei der Division zur 0 hin, nicht nach unten. −5,75 wird zu −5. Der Rest hat dann dasselbe
          Vorzeichen wie −23: −23 = (−5) · 4 + (−3).
      - wert: "5.75\n3\n-5.75\n-3\n3"
        meldung: '`23` und `4` sind beide `int`. Dann ist auch das Ergebnis von `/` ein `int`, und der Nachkommaanteil fällt weg.'
      - wert: "5\n3\n-5\n-3\n-3"
        meldung: Das Vorzeichen des Rests richtet sich nach der Zahl, die geteilt wird (hier `23`), nicht nach dem Teiler `-4`.
hinweise:
  - 'Formel: `a == (a / b) * b + a % b`. Bestimme zuerst `a / b` durch Abschneiden, dann den Rest.'
loesung: |
  **Ansatz:** Zuerst die Ganzzahldivision (abschneiden zur 0 hin), dann den Rest aus der Formel.
  ---
  `23 / 4 = 5` und `23 % 4 = 3`, denn 5 · 4 + 3 = 23.
  ---
  `-23 / 4 = -5` (−5,75 abgeschnitten), `-23 % 4 = -3`, denn (−5) · 4 + (−3) = −23.
  `23 % -4 = 3`, denn der Dividend 23 ist positiv: (−5) · (−4) + 3 = 23.
```

```aufgabe
id: au-int-luecken-wochen
titel: Tage in Wochen zerlegen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Projekt dauert `tage` Tage. Das Programm soll ausgeben, wie viele **volle Wochen** und wie viele **übrige Tage**
  das sind. Für 52 Tage soll `7 Wochen und 3 Tage` erscheinen.
  Fülle die beiden Lücken mit je einem Operator.
teile:
  - typ: lueckentext
    code: |
      int tage = 52;
      int wochen = tage ___ 7;
      int uebrig = tage ___ 7;
      System.out.println(wochen + " Wochen und " + uebrig + " Tage");
    luecken: [["/"], ["%"]]
    fehler:
      - wert: ["%", "/"]
        meldung: '`/` zählt, wie oft 7 ganz in die Zahl passt (die vollen Wochen). `%` liefert, was danach übrig bleibt.'
hinweise:
  - Wie oft passt 7 ganz in 52, und was bleibt übrig?
loesung: |
  **Ansatz:** Volle Gruppen zählt die Ganzzahldivision, den Rest liefert `%`.
  ---
  `52 / 7 = 7` volle Wochen und `52 % 7 = 3` übrige Tage. Probe: 7 · 7 + 3 = 52.
```

```aufgabe
id: au-int-vorrang
titel: Punkt vor Strich mit Ganzzahldivision
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(20 - 7 % 4 * 3 / 2);
      System.out.println(2 + 3 * 4 - 10 / 3);
      System.out.println((2 + 3) * (4 - 10) / 3);
    loesung: |
      16
      11
      -10
    fehler:
      - wert: "17\n11\n-10"
        meldung: |
          In der ersten Zeile hast du vermutlich `3 / 2` zuerst gerechnet. Operatoren derselben Stufe (`%`, `*`, `/`)
          wertet Java von links nach rechts aus: zuerst `7 % 4`.
      - wert: "16\n10.666666666666666\n-10"
        meldung: Alle Zahlen sind `int`. Dann ist `10 / 3` gleich `3`, und das ganze Ergebnis bleibt ganzzahlig.
hinweise:
  - Punktrechnung (`*`, `/`, `%`) vor Strichrechnung. Auf derselben Stufe von links nach rechts.
  - 'In Zeile 1 lautet die Reihenfolge: `7 % 4`, dann `* 3`, dann `/ 2`, zuletzt `20 - …`.'
gefuehrt:
  - text: Zeile 1, erster Schritt. Was ergibt `7 % 4`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 7 = 1 · 4 + 3, der Rest ist 3.
  - text: Jetzt `3 * 3 / 2`, von links nach rechts.
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 3 · 3 = 9, und 9 / 2 = 4 (Ganzzahldivision).
  - text: Was gibt Zeile 1 also aus?
    teil: { typ: zahl, loesung: "16" }
    erklaerung: 20 − 4 = 16.
  - text: Zeile 2. Was ergibt `10 / 3` bei `int`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 3,33… abgeschnitten ist 3. Dann 2 + 12 − 3 = 11.
  - text: Zeile 3. Was ergibt `5 * (-6) / 3`?
    teil: { typ: zahl, loesung: "-10" }
    erklaerung: 5 · (−6) = −30, und −30 / 3 = −10 (geht ohne Rest auf).
loesung: |
  **Ansatz:** Für jede Zeile die Auswertungsreihenfolge festlegen: Klammern, dann Punkt vor Strich, dann von links nach rechts.
  ---
  Zeile 1: `7 % 4 = 3`, `3 * 3 = 9`, `9 / 2 = 4`, `20 - 4 = 16`.
  ---
  Zeile 2: `3 * 4 = 12`, `10 / 3 = 3`, `2 + 12 - 3 = 11`.
  ---
  Zeile 3: Klammern zuerst: `5` und `-6`. Dann `5 * -6 = -30` und `-30 / 3 = -10`.
```

### Überlauf: wenn die Zahl nicht mehr hineinpasst

Ein `int` hat 32 Bit. Der größte Wert ist `Integer.MAX_VALUE` = 2 147 483 647, der kleinste ist
`Integer.MIN_VALUE` = −2 147 483 648. Was passiert, wenn ein Ergebnis größer wird? Java meldet **keinen** Fehler.
Die Zahl springt einfach auf die andere Seite des Bereichs, so wie ein Kilometerzähler nach 999999 wieder bei 000000
beginnt. Das heißt **Überlauf**.

:::beispiel[Ein Überlauf beim Multiplizieren]
```java
int x = Integer.MAX_VALUE;
System.out.println(x + 1);
System.out.println(1000000 * 1000000);
System.out.println(1000000L * 1000000);
```

1. `x + 1` ist eins mehr als der größte `int`. Es springt auf den kleinsten: `-2147483648`.
2. `1000000 * 1000000` wäre eine Billion. Das passt nicht in einen `int`. Java behält nur die unteren 32 Bit. Rechnerisch heißt das: Java zieht so oft 2 hoch 32 = 4 294 967 296 ab, bis das Ergebnis im `int`-Bereich liegt. Hier ist das 233-mal: 1 000 000 000 000 − 233 · 4 294 967 296 = −727 379 968. Ausgegeben wird `-727379968`. Das ist sinnlos, aber Java warnt nicht.
3. Mit `1000000L` ist der linke Operand ein `long`. Dann rechnet Java in `long` und gibt `1000000000000` aus.
:::

Merke dir: Bei großen Zahlen muss **schon die Rechnung** in `long` stattfinden. `long g = 1000000 * 1000000;` hilft
nicht. Rechts rechnet Java zuerst mit zwei `int`, der Überlauf passiert dort. Erst danach wird das falsche Ergebnis in
den `long` gelegt.

### Kurzschreibweisen: +=, ++ und --

Weil Anweisungen wie `summe = summe + x;` sehr häufig sind, gibt es Abkürzungen:

| Kurzform | bedeutet | Beispiel mit `k = 10` |
|---|---|---|
| `k += 3;` | `k = k + 3;` | `k` wird 13. |
| `k -= 3;` | `k = k - 3;` | `k` wird 7. |
| `k *= 3;` | `k = k * 3;` | `k` wird 30. |
| `k /= 3;` | `k = k / 3;` | `k` wird 3. |
| `k %= 3;` | `k = k % 3;` | `k` wird 1. |
| `k++;` oder `++k;` | `k = k + 1;` | `k` wird 11. |
| `k--;` oder `--k;` | `k = k - 1;` | `k` wird 9. |

Allein in einer Zeile sind `k++;` und `++k;` gleich. Steht der Operator aber **in einem größeren Ausdruck**, gibt es
einen Unterschied. `++k` (Präfix) erhöht zuerst und liefert den **neuen** Wert. `k++` (Postfix) liefert den **alten**
Wert und erhöht danach.

:::beispiel[Präfix und Postfix im Vergleich]
```java
int a = 3;
int b = ++a;
int c = a++;
System.out.println(a + " " + b + " " + c);
```

1. `int a = 3;` Danach ist `a = 3`.
2. `int b = ++a;` Präfix: Zuerst wird `a` auf 4 erhöht, dann bekommt `b` den neuen Wert 4.
3. `int c = a++;` Postfix: `c` bekommt den alten Wert 4, danach wird `a` auf 5 erhöht.
4. Ausgabe: `5 4 4`.
:::

```aufgabe
id: au-int-inkrement-trace
titel: Präfix und Postfix verfolgen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Verfolge die Variablen nach jeder Zeile.

  ```java
  int a = 6;
  int b = a++;
  int c = ++a + b;
  a -= c;
  ```
teile:
  - typ: trace
    spalten: [a, b, c]
    zeilen: [nach Zeile 1, nach Zeile 2, nach Zeile 3, nach Zeile 4]
    vorgabe: 1
    loesung: [[6, "-", "-"], [7, 6, "-"], [8, 6, 14], [-6, 6, 14]]
    fehler:
      - wert: ["6", "-", "-", "7", "7", "-", "8", "7", "15", "-7", "7", "15"]
        meldung: '`b = a++` ist Postfix: `b` bekommt den **alten** Wert 6. Erst danach steigt `a` auf 7.'
      - wert: ["6", "-", "-", "7", "6", "-", "7", "6", "13", "-6", "6", "13"]
        meldung: '`++a` in Zeile 3 erhöht `a` zuerst auf 8 und liefert diesen neuen Wert. `a` ändert sich also auch in Zeile 3.'
hinweise:
  - Bei `x++` wird der alte Wert verwendet, bei `++x` der neue. In beiden Fällen ist `x` danach um 1 größer.
  - '`a -= c` bedeutet `a = a - c`.'
loesung: |
  **Ansatz:** Bei jeder Zeile klären, welcher Wert in den Ausdruck eingeht und wann die Variable sich ändert.
  ---
  Zeile 2: `b` bekommt den alten Wert 6, danach ist `a = 7`.
  ---
  Zeile 3: `++a` erhöht `a` auf 8 und liefert 8. Also `c = 8 + 6 = 14`.
  ---
  Zeile 4: `a = 8 - 14 = -6`. Endstand: `a = -6`, `b = 6`, `c = 14`.
```

```aufgabe
id: au-int-kurzformen
titel: Eine Kette von Kurzformen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int k = 9;
      k += 6;
      k /= 4;
      k *= k;
      k %= 5;
      k -= 7;
      System.out.println(k);
    loesung: |
      -3
    fehler:
      - wert: "-2.9375"
        meldung: '`k` ist ein `int`. `k /= 4` ist eine Ganzzahldivision, also ohne Nachkommaanteil.'
      - wert: "-6"
        meldung: Du hast bei `k /= 4` den Wert 3,75 auf 4 gerundet. Die Ganzzahldivision rundet nicht, sie schneidet ab.
hinweise:
  - Schreib jede Kurzform als lange Zuweisung aus, zum Beispiel `k = k / 4;`.
  - 'Die Zwischenwerte sind 15, 3, 9, 4.'
loesung: |
  **Ansatz:** Jede Kurzform in die ausführliche Zuweisung übersetzen und Zeile für Zeile rechnen.
  ---
  `k = 9 + 6 = 15`, dann `k = 15 / 4 = 3` (ganzzahlig), dann `k = 3 * 3 = 9`.
  ---
  `k = 9 % 5 = 4`, dann `k = 4 - 7 = -3`. Ausgabe: `-3`.
```

```aufgabe
id: au-int-rest-rf
titel: Aussagen über den Rest
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Beurteile die Aussagen. `n`, `a` und `b` sind `int`-Variablen, `b` ist nicht 0.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`n % 2 == 1` ist genau dann wahr, wenn `n` ungerade ist."
        richtig: false
        erklaerung: Für negative ungerade `n` ist der Rest −1, zum Beispiel `-3 % 2 == -1`.
      - text: "`-10 % 3` ergibt `2`."
        richtig: false
        erklaerung: "Der Rest hat das Vorzeichen des Dividenden: −10 = (−3) · 3 + (−1), also −1."
      - text: "Es gilt immer `a == (a / b) * b + a % b`."
        richtig: true
        erklaerung: So sind `/` und `%` in Java gerade festgelegt.
      - text: "Für `n ≥ 0` liefert `n % 10` die letzte Ziffer von `n`."
        richtig: true
        erklaerung: "Zum Beispiel 473 = 47 · 10 + 3."
    fehler:
      - wert: [r, f, r, r]
        meldung: Teste die erste Aussage mit einer negativen ungeraden Zahl, etwa −3. Was ergibt `-3 % 2`?
      - wert: [f, r, r, r]
        meldung: Rechne mit der Formel `a == (a / b) * b + a % b`. `-10 / 3` ist −3 (zur 0 hin). Welcher Rest bleibt?
hinweise:
  - Teste jede Aussage mit einem kleinen, auch negativen Zahlenbeispiel.
  - 'Merke: Der Rest hat das Vorzeichen der Zahl, die geteilt wird.'
loesung: |
  **Ansatz:** Jede Aussage mit der Definition `a == (a / b) * b + a % b` und einem Gegenbeispiel prüfen.
  ---
  1: Falsch, Gegenbeispiel `-3 % 2 == -1`. 2: Falsch, `-10 % 3` ist −1.
  ---
  3: Richtig, das ist die Definition. 4: Richtig für nicht negative `n`.
  Merke für die Praxis: Ungerade prüft man mit `n % 2 != 0`.
```

```aufgabe
id: au-int-ueberlauf
titel: Wann läuft die Rechnung über?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Was gibt das Programm aus? Beachte genau, in welchem Typ jede Rechnung stattfindet.
teile:
  - typ: ausgabe
    code: |
      int x = Integer.MAX_VALUE;
      x = x + 2;
      System.out.println(x);
      int y = 50000 * 50000;
      System.out.println(y);
      long z = 50000L * 50000;
      System.out.println(z);
      long w = 50000 * 50000;
      System.out.println(w);
    loesung: |
      -2147483647
      -1794967296
      2500000000
      -1794967296
    fehler:
      - wert: "-2147483647\n-1794967296\n2500000000\n2500000000"
        meldung: |
          In der letzten Rechnung sind beide Operanden `int`. Java rechnet zuerst in `int`, dort passiert der Überlauf.
          Erst das falsche Ergebnis wird in den `long` gelegt.
      - wert: "2147483649\n2500000000\n2500000000\n2500000000"
        meldung: Ein `int` kann höchstens 2 147 483 647 speichern. Größere Ergebnisse laufen über, ohne Fehlermeldung.
hinweise:
  - '`Integer.MAX_VALUE + 1` ist `Integer.MIN_VALUE` = −2 147 483 648. Plus 2 ist also eins mehr.'
  - '50000 · 50000 = 2 500 000 000. Ziehe 2 hoch 32 = 4 294 967 296 ab, um den `int`-Wert zu erhalten.'
loesung: |
  **Ansatz:** Für jede Rechnung den Typ der Operanden bestimmen. Nur wenn ein Operand `long` ist, rechnet Java in `long`.
  ---
  `MAX_VALUE + 2` springt über das Ende: −2 147 483 648 + 1 = −2 147 483 647.
  ---
  `50000 * 50000` in `int`: 2 500 000 000 − 4 294 967 296 = −1 794 967 296.
  ---
  `50000L * 50000` rechnet in `long`: 2 500 000 000. Bei `w` rechnet Java dagegen zuerst in `int`. Erst danach kommt der falsche Wert in den `long`.
```

```aufgabe
id: au-int-zeit
titel: Sekunden in Stunden, Minuten und Sekunden
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Schreibe den Rumpf der Methode `alsZeit`. Sie bekommt eine Anzahl Sekunden (`sekunden ≥ 0`) und liefert einen Text
  der Form `"1 h 2 min 5 s"`. Für 3725 Sekunden ist das genau dieser Text, denn 3725 = 1 · 3600 + 2 · 60 + 5.

  So liest du die Vorlage: Die Zeile `public static String alsZeit(int sekunden)` ist vorgegeben und bleibt unverändert.
  Beim Testen liegt in `sekunden` die Eingabezahl. Mit `return` gibst du das Ergebnis zurück. Was eine Methode genau
  ist, lernst du in [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode). Hier brauchst du nur
  `/`, `%` und `+` (das `+` hängt wie in einer Ausgabe Zahlen und Texte aneinander).
teile:
  - typ: code
    vorlage: |
      public class Zeit {
          public static String alsZeit(int sekunden) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Zeit {
          public static String alsZeit(int sekunden) {
              int stunden = sekunden / 3600;
              int minuten = sekunden % 3600 / 60;
              int rest = sekunden % 60;
              return stunden + " h " + minuten + " min " + rest + " s";
          }
      }
    tests:
      - { aufruf: "alsZeit(3725)", erwartet: "\"1 h 2 min 5 s\"" }
      - { aufruf: "alsZeit(59)", erwartet: "\"0 h 0 min 59 s\"" }
      - { aufruf: "alsZeit(7200)", erwartet: "\"2 h 0 min 0 s\"" }
      - { aufruf: "alsZeit(86399)", erwartet: "\"23 h 59 min 59 s\"", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Für die Minuten musst du zuerst die vollen Stunden abziehen: `sekunden % 3600` ist der Rest nach den Stunden, davon `/ 60`." }
      - { wert: 3, meldung: "7200 Sekunden sind genau 2 Stunden. Minuten und Sekunden müssen dann 0 sein. Prüfe, ob du für die Minuten `sekunden / 60` ohne `% 3600` verwendest." }
hinweise:
  - Eine Stunde hat 3600 Sekunden, eine Minute 60. Die vollen Stunden liefert `sekunden / 3600`.
  - 'Die Minuten stecken im Rest nach den Stunden: `sekunden % 3600 / 60`. Die Sekunden sind `sekunden % 60`.'
loesung: |
  **Ansatz:** `/` zählt volle Gruppen, `%` liefert den Rest. Wir zerlegen von der größten Einheit zur kleinsten.
  ---
  `stunden = sekunden / 3600`. Für 3725 ist das 1.
  ---
  Der Rest nach den Stunden ist `sekunden % 3600` = 125. Davon sind `125 / 60 = 2` volle Minuten. Die übrigen Sekunden
  sind `sekunden % 60` = 5.
  ---
  ```java
  int stunden = sekunden / 3600;
  int minuten = sekunden % 3600 / 60;
  int rest = sekunden % 60;
  return stunden + " h " + minuten + " min " + rest + " s";
  ```
  Probe: 1 · 3600 + 2 · 60 + 5 = 3725.
```

## Gleitkommazahlen und der Typ eines Ausdrucks

```aufgabe
id: au-dbl-check-ganzzahl
titel: Ganzzahldivision wiederholen
niveau: 1
art: check
angabe: |
  Was ergibt `9 / 2`, wenn beide Zahlen `int` sind? (Ganzzahldivision: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "4.5"
        meldung: Bei zwei `int`-Operanden schneidet Java den Nachkommaanteil ab. Es bleibt 4.
      - wert: "5"
        meldung: Java rundet nicht auf, es schneidet ab. 4,5 wird zu 4.
loesung: |
  Beide Operanden sind ganze Zahlen, also ist auch das Ergebnis eine ganze Zahl.
  ---
  4,5 wird zur 0 hin abgeschnitten: `4`.
```

Preise, Durchschnitte und Messwerte haben Nachkommastellen. Dafür gibt es die **Gleitkommazahlen** `double` und
`float`. Der Name kommt daher, dass das Komma intern „gleitet“: Java speichert Ziffern und Größenordnung getrennt,
ähnlich wie 1,5 · 10³. In diesem Abschnitt lernst du die wichtigste Regel des ganzen Kapitels: Jeder Teilausdruck hat
einen Typ, und dieser Typ entscheidet, wie gerechnet wird.

### double und float

`double` ist der Standardtyp für Kommazahlen. Er hat etwa 15 bis 16 gültige Dezimalstellen. `float` hat nur etwa 7
und braucht ein `f` am Literal. In EP1 nimmst du fast immer `double`. `float` kommt vor allem in Quizfragen vor.

`println` gibt einen `double` immer **mit Punkt** aus, auch wenn er ganzzahlig ist. Sehr große oder sehr kleine Werte
erscheinen in **wissenschaftlicher Schreibweise**. Dabei bedeutet `E` „mal 10 hoch“.

| Wert im Programm | Ausgabe mit `println` |
|---|---|
| `5.0` oder `10 / 2.0` | `5.0`. |
| `2.5e7` (ab 10 Millionen) | `2.5E7`. |
| `0.0005` (unter 0,001) | `5.0E-4`. |
| `1.0 / 8` | `0.125`. |
| `100.0 / 3` | `33.333333333333336`. |

### Die Typregel für Rechnungen

:::definition[Typ eines Ausdrucks (numerische Typanpassung)]
Bei jeder einzelnen Rechnung `a op b` mit `op` aus `+ - * / %` passt Java zuerst die beiden Operanden aneinander an:

1. Ist einer der Operanden `double`, wird der andere zu `double`, und das Ergebnis ist `double`.
2. Sonst, wenn einer `float` ist: Rechnung und Ergebnis in `float`.
3. Sonst, wenn einer `long` ist: Rechnung und Ergebnis in `long`.
4. Sonst wird in `int` gerechnet. Das gilt auch für `byte`, `short` und `char`: Sie werden mindestens zu `int`.

Die Regel gilt **für jede Operation einzeln**, in der Reihenfolge, in der Java den Ausdruck auswertet.
:::

Ein **Beispiel**: In `7 / 2.0` ist `2.0` ein `double`. Also wird `7` zu `7.0`, und das Ergebnis ist `3.5`. Ein
**Nichtbeispiel**: In `double d = 7 / 2;` steht zwar links ein `double`, aber das ändert die Rechnung rechts nicht.
Rechts stehen zwei `int`, also ergibt `7 / 2` den Wert `3`. Erst danach wird `3` zu `3.0` und in `d` gelegt.

:::beispiel[Dieselben Zahlen, zwei Ergebnisse]
```java
System.out.println(1 / 4 * 4.0);
System.out.println(1 / 4.0 * 4);
```

Zeile 1, von links nach rechts:

1. `1 / 4`: beide `int`, also Ganzzahldivision. Ergebnis `0` (Typ `int`).
2. `0 * 4.0`: ein Operand ist `double`, also wird `0` zu `0.0`. Ergebnis `0.0`.

Zeile 2:

1. `1 / 4.0`: ein Operand ist `double`. Ergebnis `0.25`.
2. `0.25 * 4`: `4` wird zu `4.0`. Ergebnis `1.0`.

Die Ausgabe ist `0.0` und darunter `1.0`. Der Unterschied entsteht allein dadurch, **wo** der `double` steht.
:::

:::beispiel[Die Rechnung im Ristorante]
Diese Aufgabe stammt in ähnlicher Form aus Übung 1 (WS 2021). Getränke kosten netto 120 Euro, Essen 255 Euro. Auf
Getränke kommen 20 Prozent, auf Essen 10 Prozent Steuer.

```java
int getraenke = 120;
int essen = 255;
double brutto = getraenke * 1.2 + essen + essen * 10 / 100.0;
System.out.println(brutto);
```

1. `getraenke * 1.2`: `120` wird zu `120.0`, das Ergebnis ist `144.0`.
2. `essen * 10`: beide `int`, ergibt `2550` (Typ `int`).
3. `2550 / 100.0`: ein `double`, ergibt `25.5`.
4. `144.0 + 255` ergibt `399.0`, plus `25.5` ergibt `424.5`. Die Ausgabe ist `424.5`.

Was wäre mit `100` statt `100.0`? Dann ist `2550 / 100` eine Ganzzahldivision und ergibt `25`. Die 50 Cent Steuer
gehen verloren, und es erscheint `424.0`. Genau diese Frage stellte die Übung.
:::

:::achtung[Die Ganzzahldivision steckt im double]
```java
int summe = 23;
double schnitt = summe / 3;
System.out.println(schnitt);   // erwartet: 7.666666666666667   tatsächlich: 7.0
```
Der Typ links vom `=` hilft nicht. Rechts sind `summe` und `3` beide `int`, also ist `summe / 3` gleich `7`. Erst
dieses Ergebnis wird zu `7.0`. Richtig ist `summe / 3.0` oder `(double) summe / 3`.
:::

:::achtung[Gleitkommazahlen mit == vergleichen]
```java
System.out.println(0.1 + 0.2);          // erwartet: 0.3   tatsächlich: 0.30000000000000004
System.out.println(0.1 * 3 == 0.3);     // erwartet: true  tatsächlich: false
```
Der Computer speichert Zahlen im Zweiersystem. Darin ist 0,1 ein unendlicher Bruch, ähnlich wie 1/3 im Zehnersystem.
Java speichert also nur einen sehr nahen Wert, und kleine Fehler summieren sich. Vergleiche Kommazahlen daher nicht mit
`==` („ist gleich“). Man prüft stattdessen, ob der Abstand sehr klein ist, zum Beispiel mit `Math.abs(a - b) < 1e-9`.
Dabei liefert `Math.abs` den Betrag, also den Abstand ohne Vorzeichen, und `<` heißt „kleiner als“. Mehr dazu in
[2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).
:::

Noch ein Unterschied zu `int`: Eine Division eines `double` durch 0 bricht **nicht** ab. `4.0 / 0` ergibt `Infinity`
(unendlich), und `0.0 / 0` ergibt `NaN` („not a number“, keine Zahl).

:::merke[Rezept: Typ eines Ausdrucks bestimmen]
1. Lege die Auswertungsreihenfolge fest: Klammern, Punkt vor Strich, von links nach rechts.
2. Geh die Rechnungen in dieser Reihenfolge durch. Bestimme bei jeder den Typ aus den **beiden** Operanden.
3. Rechne mit diesem Typ: bei `int` mit Ganzzahldivision, bei `double` mit Nachkommastellen.
4. Erst ganz am Ende wird das Ergebnis an den Typ der Variable links angepasst.
:::

```aufgabe
id: au-dbl-ausgabeform
titel: Wie sieht ein double in der Ausgabe aus?
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(9.0 / 3);
      System.out.println(5 / 2.0);
      System.out.println(1e3);
      System.out.println(3.6e7);
      System.out.println(0.0002);
    loesung: |
      3.0
      2.5
      1000.0
      3.6E7
      2.0E-4
    fehler:
      - wert: "3\n2.5\n1000\n36000000\n0.0002"
        meldung: Ein `double` erscheint immer mit Punkt (`3.0`). Ab 10 Millionen und unter 0,001 schreibt Java ihn mit `E`.
      - wert: "3.0\n2.5\n1000.0\n3.6E7\n0.0002"
        meldung: Werte unter 0,001 gibt `println` in wissenschaftlicher Schreibweise aus. 0,0002 ist 2 mal 10 hoch −4.
hinweise:
  - 'Ganzzahlige `double`-Werte bekommen `.0`. Die Schreibweise mit `E` kommt ab 10 000 000 und unter 0,001.'
loesung: |
  **Ansatz:** Für jede Zeile Wert und Typ bestimmen. Alle fünf Ergebnisse sind `double`.
  ---
  `9.0 / 3 = 3.0`, `5 / 2.0 = 2.5`, `1e3 = 1000.0`. `3.6e7` ist 36 Millionen, also `3.6E7`. `0.0002` ist kleiner als 0,001, also `2.0E-4`.
```

```aufgabe
id: au-dbl-typ-bestimmen
titel: Welchen Typ hat der Ausdruck?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben sind `int i = 5; long l = 6L; float f = 1.5f; double d = 2.0; char c = 'x';`
  Welchen Typ hat jeweils der ganze Ausdruck?
teile:
  - typ: auswahl
    label: a) `i * l`
    optionen: ['`int`', '`long`', '`double`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein Operand ist `long`. Dann wird auch `i` zu `long`, und das Ergebnis ist `long`.
  - typ: auswahl
    label: b) `l + f`
    optionen: ['`long`', '`float`', '`double`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In der Rangfolge steht `float` über `long`. Ist ein Operand `float` und keiner `double`, wird in `float` gerechnet.
  - typ: auswahl
    label: c) `c + 1`
    optionen: ['`char`', '`int`', '`String`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`char` wird bei jeder Rechnung mindestens zu `int`. Das Ergebnis ist eine Zahl, kein Zeichen.'
  - typ: auswahl
    label: d) `i / 2 + d`
    optionen: ['`int`', '`double`', '`float`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`i / 2` ist zwar `int`, aber danach wird `d` addiert. Diese zweite Rechnung hat einen `double`-Operanden.'
hinweise:
  - 'Rangfolge: `double` vor `float` vor `long` vor `int`. Kleinere Typen werden mindestens zu `int`.'
loesung: |
  **Ansatz:** Für jede Operation den größeren der beiden Operandentypen nehmen, mindestens `int`.
  ---
  a) `int` und `long` ergibt `long`. b) `long` und `float` ergibt `float`.
  ---
  c) `char` und `int` ergibt `int`. d) `i / 2` ist `int`, dann `int + double` ergibt `double`.
```

```aufgabe
id: au-dbl-gemischt
titel: Ganzzahldivision mitten im Ausdruck
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 9;
      double r = n / 2 + n / 2.0;
      System.out.println(r);
      System.out.println(10 / 4 * 1.5);
      System.out.println(10 / 4.0 * 1.5);
      System.out.println(3 / 2 + 0.5);
    loesung: |
      8.5
      3.0
      3.75
      1.5
    fehler:
      - wert: "9.0\n3.75\n3.75\n2.0"
        meldung: '`n / 2` und `10 / 4` und `3 / 2` sind Ganzzahldivisionen. Sie liefern 4, 2 und 1, bevor überhaupt ein `double` ins Spiel kommt.'
      - wert: "8.5\n3\n3.75\n1.5"
        meldung: '`2 * 1.5` hat einen `double`-Operanden. Das Ergebnis `3.0` wird mit Punkt ausgegeben.'
hinweise:
  - Bestimme bei jeder einzelnen Rechnung den Typ der beiden Operanden.
  - '`10 / 4` ist 2, nicht 2,5. Erst bei `* 1.5` wird in `double` gerechnet.'
loesung: |
  **Ansatz:** Jede Operation einzeln mit ihrem eigenen Typ auswerten.
  ---
  `n / 2 = 4` (int), `n / 2.0 = 4.5` (double), Summe `8.5`.
  ---
  `10 / 4 = 2` (int), dann `2 * 1.5 = 3.0`. Dagegen `10 / 4.0 = 2.5` und `2.5 * 1.5 = 3.75`.
  ---
  `3 / 2 = 1` (int), dann `1 + 0.5 = 1.5`.
```

```aufgabe
id: au-dbl-gefuehrt
titel: Der Notendurchschnitt
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Drei Noten sind gespeichert: `int n1 = 2, n2 = 3, n3 = 3;`. Welcher Ausdruck berechnet den Durchschnitt korrekt
  als `2.6666666666666665`?
teile:
  - typ: auswahl
    optionen:
      - '`double schnitt = (n1 + n2 + n3) / 3;`'
      - '`double schnitt = (n1 + n2 + n3) / 3.0;`'
      - '`double schnitt = n1 + n2 + n3 / 3.0;`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`(n1 + n2 + n3) / 3` ist `8 / 3` mit zwei `int`. Das ergibt 2, gespeichert als `2.0`.'
      - wert: 2
        meldung: Ohne Klammern wird nur `n3` durch 3 geteilt. Das ergibt 2 + 3 + 1,0 = 6,0.
hinweise:
  - Zuerst muss die Summe gebildet werden, dann wird geteilt. Welche Option hat dafür Klammern?
  - Damit nicht ganzzahlig geteilt wird, muss einer der beiden Operanden von `/` ein `double` sein.
gefuehrt:
  - text: Was ergibt `n1 + n2 + n3`?
    teil: { typ: zahl, loesung: "8" }
    erklaerung: 2 + 3 + 3 = 8, ein `int`.
  - text: Was ergibt `8 / 3` mit zwei `int`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 2,67 abgeschnitten ist 2. Das ist der Fehler der ersten Option.
  - text: Was ergibt `8 / 3.0`?
    teil:
      typ: auswahl
      optionen: ['`2`', '`2.0`', '`2.6666666666666665`']
      richtig: [2]
    erklaerung: Ein Operand ist `double`, also wird mit Nachkommastellen gerechnet.
  - text: Überlege, warum die dritte Option ohne Klammern falsch ist.
    erklaerung: '`/` bindet stärker als `+`. Es wird also nur `n3 / 3.0 = 1.0` gerechnet und dann 2 + 3 + 1,0 = 6,0.'
loesung: |
  **Ansatz:** Ein Durchschnitt braucht zwei Dinge: Klammern um die Summe und eine Division mit `double`.
  ---
  Option 1 teilt `8 / 3` ganzzahlig und liefert `2.0`. Option 3 teilt nur `n3` und liefert `6.0`.
  ---
  Option 2: `(2 + 3 + 3) / 3.0 = 8 / 3.0 = 2.6666666666666665`. Die letzte Ziffer 5 entsteht durch die Gleitkomma-Ungenauigkeit.
```

```aufgabe
id: au-dbl-ristorante
titel: Hundert oder hundert Komma null?
niveau: 2
lernziel: 2
kompetenz: begruenden
quelle: Übung 1 WS2021, Aufgabe 3 (nachgebaut)
angabe: |
  In einem Lokal kosten Getränke netto 80 Euro und Speisen 135 Euro. Auf Speisen kommen 10 Prozent Steuer.

  ```java
  int getraenke = 80;
  int speisen = 135;
  double brutto = getraenke + speisen + speisen * 10 / 100;
  System.out.println(brutto);
  ```
teile:
  - typ: ausgabe
    label: a) Was gibt das Programm aus?
    codeAnzeigen: false
    code: |
      int getraenke = 80;
      int speisen = 135;
      double brutto = getraenke + speisen + speisen * 10 / 100;
      System.out.println(brutto);
    loesung: |
      228.0
    fehler:
      - wert: "228.5"
        meldung: Rechts vom `=` stehen nur `int`. `1350 / 100` ist eine Ganzzahldivision und liefert 13, nicht 13,5.
      - wert: "228"
        meldung: '`brutto` ist ein `double`. Bei der Zuweisung wird `228` zu `228.0`, und so erscheint es auch in der Ausgabe.'
  - typ: text
    label: b) Was ändert sich, wenn man `100` durch `100.0` ersetzt? Und könnte `brutto` dann ein `int` sein?
    muster: |
      Mit `100.0` wird `1350 / 100.0` in `double` gerechnet und ergibt `13.5`. Die Ausgabe ist dann `228.5`.
      Ein `int` ginge dann nicht mehr: Rechts steht ein `double`, und `int brutto = …` übersetzt nicht
      (`possible lossy conversion from double to int`). Man müsste ausdrücklich casten und verlöre die 50 Cent.
hinweise:
  - Bestimme bei `speisen * 10 / 100` den Typ jeder Teilrechnung.
  - 'Bei b) denk an die Typregel: Ein `double`-Operand macht das ganze Ergebnis zum `double`.'
loesung: |
  **Ansatz:** Den Typ jeder Teilrechnung bestimmen. Alle Operanden sind `int`.
  ---
  `speisen * 10 = 1350`, `1350 / 100 = 13` (abgeschnitten). `80 + 135 + 13 = 228`.
  ---
  Bei der Zuweisung an `double` wird `228` zu `228.0`. Ausgabe: `228.0`.
  ---
  Mit `100.0` ergibt sich `13.5` und die Ausgabe `228.5`. Dann ist der Ausdruck ein `double`, und `int brutto` würde nicht übersetzen.
```

```aufgabe
id: au-dbl-schnitt-code
titel: Durchschnitt als Methode
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe den Rumpf von `durchschnitt`. Die Methode bekommt drei ganze Zahlen und liefert ihren Durchschnitt **mit
  Nachkommastellen**. `durchschnitt(2, 3, 3)` soll also `2.6666666666666665` liefern, nicht `2.0`.

  Die Zeile `public static double durchschnitt(int a, int b, int c)` bleibt unverändert. Beim Test liegen in `a`, `b`
  und `c` die Eingabezahlen, und mit `return` gibst du das Ergebnis zurück.
teile:
  - typ: code
    vorlage: |
      public class Noten {
          public static double durchschnitt(int a, int b, int c) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Noten {
          public static double durchschnitt(int a, int b, int c) {
              return (a + b + c) / 3.0;
          }
      }
    tests:
      - { aufruf: "durchschnitt(2, 3, 3)", erwartet: "8 / 3.0" }
      - { aufruf: "durchschnitt(1, 2, 3)", erwartet: "2.0" }
      - { aufruf: "durchschnitt(5, 5, 4)", erwartet: "14 / 3.0" }
      - { aufruf: "durchschnitt(-1, 0, 0)", erwartet: "-1 / 3.0", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Erhältst du `2.0`? Dann teilst du ganzzahlig. Mindestens ein Operand der Division muss ein `double` sein, zum Beispiel `3.0`." }
hinweise:
  - Bilde zuerst die Summe in Klammern.
  - Teile durch `3.0` statt durch `3`, damit nicht ganzzahlig geteilt wird.
loesung: |
  **Ansatz:** Summe in Klammern, dann eine Division, bei der ein Operand `double` ist.
  ---
  `(a + b + c)` ist ein `int`. Würde man durch `3` teilen, wäre das eine Ganzzahldivision.
  ---
  ```java
  return (a + b + c) / 3.0;
  ```
  Probe: `(2 + 3 + 3) / 3.0 = 2.6666666666666665`.
```

```aufgabe
id: au-dbl-fehler-finden
titel: Ein Mitstudent rechnet den Rabatt
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitstudent will 15 Prozent Rabatt auf 240 Euro berechnen und schreibt:

  ```java
  int preis = 240;
  int prozent = 15;
  double rabatt = prozent / 100 * preis;
  System.out.println(rabatt);
  ```

  Er erwartet `36.0`. Welche Ausgabe erhält er wirklich, und mit welcher Änderung einer einzigen Zahl wird sie richtig?
teile:
  - typ: ausgabe
    label: Tatsächliche Ausgabe
    codeAnzeigen: false
    code: |
      int preis = 240;
      int prozent = 15;
      double rabatt = prozent / 100 * preis;
      System.out.println(rabatt);
    loesung: |
      0.0
    fehler:
      - wert: "36.0"
        meldung: '`prozent / 100` ist `15 / 100` mit zwei `int` und ergibt 0. Danach ist auch `0 * 240` gleich 0.'
  - typ: auswahl
    label: Welche Änderung behebt den Fehler?
    optionen:
      - '`100` durch `100.0` ersetzen'
      - '`double rabatt` durch `float rabatt` ersetzen'
      - '`240` durch `240.0` ersetzen, ohne den Typ von `preis` zu ändern'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Typ links vom `=` ändert nichts an der Rechnung rechts. Dort bleibt `15 / 100` gleich 0.
      - wert: 2
        meldung: '`int preis = 240.0;` übersetzt gar nicht. Und selbst mit `double preis` käme es zu spät: `15 / 100` ist dann schon 0.'
hinweise:
  - Werte von links nach rechts aus. Was ergibt `15 / 100` bei zwei `int`?
  - Die Division muss in `double` stattfinden. Einer ihrer beiden Operanden muss also ein `double` sein.
loesung: |
  **Ansatz:** Von links nach rechts auswerten und bei jeder Rechnung den Typ bestimmen.
  ---
  `15 / 100` ist eine Ganzzahldivision und ergibt `0`. `0 * 240` ergibt `0`, gespeichert als `0.0`.
  ---
  Mit `100.0` ergibt `15 / 100.0` den Wert `0.15`, und `0.15 * 240` ist `36.0`.
  Eine andere gute Lösung ist die Umstellung `prozent * preis / 100.0`.
```

## Typumwandlung: implizit und mit Cast

```aufgabe
id: au-cast-check-typ
titel: Typ einer gemischten Rechnung
niveau: 1
art: check
angabe: |
  Welchen Typ hat der Ausdruck `3 + 2.0`? (Typregel: [2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks))
teile:
  - typ: auswahl
    optionen: ['`int`', '`double`', '`float`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`2.0` ist ein `double`-Literal. Sobald ein Operand `double` ist, wird der andere angepasst, und das Ergebnis ist `double`.'
      - wert: 2
        meldung: Ein Kommaliteral ohne `f` ist `double`, nicht `float`.
loesung: |
  `2.0` ist ein `double`. Also wird `3` zu `3.0` umgewandelt.
  ---
  Das Ergebnis `5.0` hat den Typ `double`.
```

Du hast gesehen, dass Java in `3 + 2.0` die `3` von selbst in `3.0` umwandelt. Solche Umwandlungen passieren ständig,
meist unbemerkt. Manche Umwandlungen macht Java aber **nicht** von selbst, weil dabei etwas verloren gehen kann. Dann
musst du sie ausdrücklich verlangen. Beides zusammen ist Stoff der ersten Quizfrage: „Wie viele implizite
Typkonvertierungen finden statt?“

### Implizite Typumwandlung

:::definition[Implizite Typumwandlung (Erweiterung)]
Eine **implizite Typumwandlung** macht Java von selbst, ohne dass im Quelltext etwas dafür steht. Das Wort „implizit“
heißt „mitgemeint, nicht ausgesprochen“. Java tut das nur in **Richtung größerer Typen**, entlang dieser Kette:

`byte` → `short` → `int` → `long` → `float` → `double`, und zusätzlich `char` → `int`.

Ein Typ darf in jeden Typ umgewandelt werden, der **rechts** von ihm in der Kette steht. `char` darf zu `int`,
`long`, `float` und `double` werden. `boolean` lässt sich nie in einen Zahlentyp umwandeln.
:::

Implizite Umwandlungen geschehen an zwei Stellen:

1. **Bei einer Zuweisung**, wenn rechts ein kleinerer Typ steht als links. Beispiel: `long l = i;` mit `int i`. Der `int`-Wert wird zu `long`.
2. **In einer Rechnung**, wenn zwei verschiedene Typen aufeinandertreffen. Beispiel: In `i * 2.5` wird `i` zu `double`. Diese Regel kennst du aus [2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks).

**Nichtbeispiele:** `int i = 3.7;` übersetzt nicht. Von `double` nach `int` geht es in der Kette nach **links**, also
ist keine implizite Umwandlung erlaubt. Auch `short s = c;` mit `char c` übersetzt nicht: `char` und `short` sind
beide 16 Bit, decken aber verschiedene Bereiche ab. Ein `char` reicht von 0 bis 65535, ein `short` von −32768 bis
32767. Keiner der beiden Bereiche passt ganz in den anderen. Darum steht keiner der beiden rechts vom anderen.

Eine Sonderregel solltest du kennen: `byte b = 10;` übersetzt, obwohl `10` ein `int`-Literal ist. Steht rechts ein
**fester ganzzahliger Wert**, der in den kleineren Typ passt, erlaubt Java das. `byte b = 128;` übersetzt dagegen
nicht, denn ein `byte` reicht nur bis 127.

```aufgabe
id: au-cast-kette
titel: Erlaubt ohne Cast?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben sind `byte b = 5; char c = 'k'; long l = 9L; float f = 1.5f;`. Welche Zuweisungen übersetzen **ohne** Cast?
  Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['`int i = c;`', '`short s = b;`', '`int j = l;`', '`double d = f;`', '`char z = b;`']
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: '`long` steht in der Kette rechts von `int`. Von `long` nach `int` geht es nach links, das braucht einen Cast.'
      - wert: [0, 1, 3, 4]
        meldung: '`byte` kann negativ sein, `char` nicht. Darum ist `byte` nach `char` keine Erweiterung, und es braucht einen Cast.'
hinweise:
  - 'Prüfe jede Zuweisung an der Kette `byte → short → int → long → float → double` und `char → int`.'
  - Erlaubt ist nur der Weg nach rechts. `char` und `byte` oder `short` stehen nicht in derselben Reihe.
gefuehrt:
  - text: Darf ein `char` ohne Cast in eine `int`-Variable?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: '`char` → `int` ist eine Erweiterung. Der Wert ist die Nummer des Zeichens, hier 107.'
  - text: Darf ein `byte` ohne Cast in eine `short`-Variable?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: '`byte` → `short` geht in der Kette nach rechts.'
  - text: Darf ein `long` ohne Cast in eine `int`-Variable?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [1]
    erklaerung: Das ginge nach links. Ein `long` kann Werte haben, die in keinen `int` passen.
  - text: Überlege zuletzt, warum `char z = b;` nicht übersetzt, obwohl `byte` kleiner ist als `char`.
    erklaerung: '`byte` hat negative Werte (bis −128), `char` nur 0 bis 65535. Ein negativer `byte` hätte im `char` keinen Platz.'
loesung: |
  **Ansatz:** Jede Zuweisung an der Kette der Erweiterungen prüfen.
  ---
  `char` → `int`, `byte` → `short` und `float` → `double` sind Erweiterungen und übersetzen.
  ---
  `long` → `int` geht nach links, und `byte` → `char` ist keine Erweiterung, weil `byte` negative Werte hat. Beide brauchen einen Cast.
```

:::merke[So zählst du implizite Typumwandlungen]
Geh die Anweisungen der Reihe nach durch und zähle jede Stelle, an der ein Wert von selbst seinen Typ ändert:

1. Zuweisung: Hat der Wert rechts einen anderen Typ als die Variable links? Dann zählt das als eine Umwandlung.
2. Rechnung: Haben die beiden Operanden einer Operation verschiedene Typen? Dann wird der kleinere umgewandelt, das ist eine weitere.
3. **Nicht** gezählt werden: Zuweisungen gleichen Typs, Literale mit passendem Typ (`long b = 3L;`) und ausdrückliche Casts wie `(byte) b`.
:::

:::beispiel[Typumwandlungen zählen wie im Quiz]
Wie viele implizite Typumwandlungen finden statt?

```java
double x = 4.5;
int y = 2;
char z = 'q';
short s = (short) y;
x = y;
y = z;
s = (short) x;
```

1. Zeile 1 bis 3: Jedes Literal hat genau den Typ seiner Variable. Keine Umwandlung.
2. Zeile 4: `(short) y` ist ein **Cast**, also eine ausdrückliche Umwandlung. Sie zählt nicht als implizit.
3. Zeile 5: `x = y;` Der `int`-Wert 2 wird zu `double` 2.0. Das ist die **erste** implizite Umwandlung.
4. Zeile 6: `y = z;` Der `char` `'q'` wird zu `int` (sein Zahlenwert 113). Das ist die **zweite**.
5. Zeile 7: wieder ein Cast, zählt nicht.

Antwort: **2** implizite Typumwandlungen.
:::

### Expliziter Cast

:::definition[Expliziter Cast]
Ein **Cast** (englisch für „Guss, Umformen“) ist eine ausdrückliche Typumwandlung. Man schreibt den Zieltyp in runden
Klammern vor den Wert: `(int) 3.7`. Damit sagst du dem Compiler, dass du einen möglichen Verlust bewusst in Kauf
nimmst. Ein Cast ist nötig, wenn die Umwandlung in der Kette nach **links** geht, zum Beispiel von `double` nach
`int` oder von `int` nach `byte`.
:::

Was geht dabei verloren? Das hängt vom Zieltyp ab:

- **Kommazahl zu ganzer Zahl:** Der Nachkommaanteil wird **abgeschnitten**, nicht gerundet. `(int) 3.99` ist `3`, und `(int) -3.99` ist `-3`.
- **Zu kleiner ganzzahliger Typ:** Nur die unteren Bits bleiben. Bei `byte` heißt das: Der Wert wird so lange um 256 verschoben, bis er zwischen −128 und 127 liegt. `(byte) 200` ist 200 − 256 = `-56`, und `(byte) 300` ist 300 − 256 = `44`.
- **Zahl zu `char`:** `(char) 66` ist das Zeichen mit der Nummer 66, also `'B'`.

Ein **Nichtbeispiel** für einen gültigen Cast: `(int) true` übersetzt nicht. Zwischen `boolean` und Zahlen gibt es
keine Umwandlung, auch nicht mit Cast. Ebenso wenig macht `(int) "42"` aus einem Text eine Zahl.

:::beispiel[Wo der Cast steht, entscheidet]
Ein Cast bindet **stärker** als alle Rechenoperatoren. Er wirkt also nur auf den Wert direkt dahinter, außer man
setzt Klammern. Mit `double a = 7.9, b = 2.6;`:

| Ausdruck | Rechnung | Ergebnis |
|---|---|---|
| `(int) a + (int) b` | `7 + 2`. | `9`. |
| `(int) (a + b)` | `(int) 10.5`. | `10`. |
| `(int) a * b` | `7 * 2.6`, der Cast betrifft nur `a`. | `18.2`. |
| `(int) (a * b)` | `(int) 20.54`. | `20`. |

Genau so fragt das Quiz, dort mit `float`-Literalen wie `6.4F`: `(int) (6.4F + 8.9F)` ist `(int) 15.3` = `15`. Dagegen
ist `(int) 2.9F + (int) 11.6F` = 2 + 11 = `13`.
:::

:::achtung[Ein Cast rundet nicht]
```java
double note = 2.7;
int gerundet = (int) note;
System.out.println(gerundet);   // erwartet: 3   tatsächlich: 2
```
`(int)` schneidet die Nachkommastellen ab. Aus 2,7 wird 2. Wer runden will, nimmt `Math.round(note)`. Wie das
funktioniert, zeigt [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).
:::

:::achtung[Der Cast wirkt nur auf den nächsten Wert]
```java
int summe = 23, anzahl = 3;
double schnitt = (double) (summe / anzahl);
System.out.println(schnitt);   // erwartet: 7.666666666666667   tatsächlich: 7.0
```
Wegen der Klammern rechnet Java zuerst `summe / anzahl` in `int` und erhält `7`. Erst dann wird zu `7.0` gecastet.
Richtig ist `(double) summe / anzahl`. Dort wird zuerst `summe` zu `23.0`, und die Division findet in `double` statt.
:::

### Versteckte Casts in +=

Kurzformen wie `+=` enthalten einen **versteckten Cast** auf den Typ der linken Variable. Darum übersetzt das hier:

```java
int k = 5;
k += 2.7;      // entspricht k = (int) (k + 2.7), also k = 7
```

Die lange Form `k = k + 2.7;` übersetzt dagegen **nicht**, denn `k + 2.7` ist ein `double`. Dasselbe gilt für `byte`:
Bei `byte b = 10;` geht `b += 1;` und `b++;`, aber `b = b + 1;` nicht, weil `b + 1` ein `int` ist.

```aufgabe
id: au-cast-zaehlen
titel: Implizite Typumwandlungen zählen
niveau: 1
lernziel: 3
kompetenz: rechnen
quelle: TUWEL-Test zur Vorbereitung (TUWEL-Test 1) WS2021, Frage 1 (nachgebaut)
angabe: |
  Wie viele **implizite** Typumwandlungen werden ausgeführt?

  ```java
  long a = 10L;
  int b = 4;
  float c = 2.5f;
  a = b;
  c = a;
  double d = c;
  b = (int) d;
  ```
teile:
  - typ: auswahl
    optionen: ['2', '3', '4']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Hast du `c = a;` übersehen? Ein `long` wird dort zu `float`. Auch das ist eine Erweiterung in der Kette.
      - wert: 2
        meldung: '`b = (int) d;` ist ein ausdrücklicher Cast. Er zählt nicht als implizite Umwandlung.'
hinweise:
  - Prüfe jede Zuweisung. Hat der Wert rechts einen anderen Typ als die Variable links, und steht kein Cast davor?
loesung: |
  **Ansatz:** Jede Zeile einzeln prüfen. Literale mit passendem Typ und Casts zählen nicht.
  ---
  Zeile 4: `int` zu `long` (1). Zeile 5: `long` zu `float` (2). Zeile 6: `float` zu `double` (3).
  ---
  Zeile 7 ist ein expliziter Cast. Antwort: **3**.
```

```aufgabe
id: au-cast-ergebnisse
titel: Was bleibt nach dem Cast?
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println((int) 6.99);
      System.out.println((int) -6.99);
      System.out.println((byte) 300);
      System.out.println((char) 72);
      System.out.println((double) 7 / 2);
    loesung: |
      6
      -6
      44
      H
      3.5
    fehler:
      - wert: "7\n-7\n44\nH\n3.5"
        meldung: Ein Cast nach `int` rundet nicht, er schneidet ab. 6,99 wird zu 6 und −6,99 zu −6.
      - wert: "6\n-6\n300\nH\n3.5"
        meldung: Ein `byte` reicht nur von −128 bis 127. 300 wird um 256 verschoben, bis es passt.
      - wert: "6\n-6\n44\nH\n3.0"
        meldung: Der Cast `(double)` wirkt nur auf die `7`. Danach ist `7.0 / 2` eine Division in `double`.
hinweise:
  - '`(int)` schneidet ab. Bei `(byte)` so lange 256 abziehen oder addieren, bis der Wert zwischen −128 und 127 liegt.'
  - Das Zeichen mit der Nummer 65 ist `A`. Zähle von dort weiter.
loesung: |
  **Ansatz:** Für jeden Cast den Zieltyp und die Art des Verlusts bestimmen.
  ---
  `(int) 6.99 = 6`, `(int) -6.99 = -6` (abgeschnitten). `(byte) 300 = 300 - 256 = 44`.
  ---
  `(char) 72` ist `H` (A = 65, also 72 = A + 7). `(double) 7 / 2` ist `7.0 / 2 = 3.5`.
```

```aufgabe
id: au-cast-zulaessig
titel: Welche Zeilen brauchen einen Cast?
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: TUWEL-Test 1 WS2021, Frage 2 (nachgebaut)
angabe: |
  Gegeben sind `int i = 7; long l = 8L; double d = 1.5; char c = 'k'; byte b = 3;`.
  Markiere alle Zeilen, die **ohne Cast nicht übersetzen**.
teile:
  - typ: zeilen
    code: |
      double x = i;
      int y = l;
      long z = c;
      byte w = b + 1;
      float f = d;
      int v = c;
      i += d;
    loesung: [2, 4, 5]
    fehler:
      - wert: [2, 4, 5, 7]
        meldung: '`i += d;` übersetzt. Die Kurzform enthält einen versteckten Cast auf `int`: `i = (int) (i + d)`.'
      - wert: [2, 5]
        meldung: '`b + 1` ist eine Rechnung. Dabei wird `b` zu `int`, und das Ergebnis ist `int`. Ein `int` passt nicht ohne Cast in einen `byte`.'
      - wert: [2, 3, 4, 5]
        meldung: '`char` darf implizit zu `int` und damit auch zu `long` werden. `long z = c;` übersetzt.'
hinweise:
  - Bestimme für jede Zeile den Typ rechts und vergleiche ihn mit der Kette `byte → short → int → long → float → double` (und `char → int`).
  - Geht es nach links in der Kette, braucht es einen Cast. Denk an den versteckten Cast in `+=`.
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob der Typ rechts in der Kette links oder rechts vom Zieltyp steht.
  ---
  Zeile 2: `long` nach `int` geht nach links, Cast nötig. Zeile 4: `b + 1` ist `int`, nach `byte` nötig.
  Zeile 5: `double` nach `float` nötig.
  ---
  Zeile 1, 3 und 6 sind Erweiterungen. Zeile 7 übersetzt dank des versteckten Casts in `+=`.
```

```aufgabe
id: au-cast-rf
titel: Aussagen zu einer Anweisungsfolge
niveau: 2
lernziel: 3
kompetenz: verstehen
quelle: TUWEL-Test 1 WS2021, Frage 1 (nachgebaut)
angabe: |
  Gegeben sind die Anweisungen

  ```java
  int a = 15;
  double b = 4.2;
  double c = a + b;
  int d = a / 4;
  int e = (int) (a * b);
  long f = d;
  ```

  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: In der dritten Zeile findet eine implizite Typumwandlung statt.
        richtig: true
        erklaerung: In `a + b` wird `a` von `int` zu `double` umgewandelt.
      - text: "`d` hat den Wert `3.75`."
        richtig: false
        erklaerung: "`a / 4` ist eine Ganzzahldivision. `d` ist 3, und ein `int` kann gar keine Nachkommastellen speichern."
      - text: Bei der Zuweisung an `e` könnte man den Cast weglassen.
        richtig: false
        erklaerung: "`a * b` ist ein `double`. Ohne Cast übersetzt die Zuweisung an `int` nicht."
      - text: "`e` hat den Wert 63."
        richtig: true
        erklaerung: "15 · 4,2 = 63,0, abgeschnitten 63."
    fehler:
      - wert: [r, f, r, r]
        meldung: Ohne Cast müsste ein `double` in einen `int`. Das ist eine Umwandlung nach links in der Kette und braucht immer einen Cast.
      - wert: [f, f, f, r]
        meldung: In `a + b` treffen `int` und `double` aufeinander. Der `int`-Wert wird dabei von selbst umgewandelt.
hinweise:
  - Bestimme in jeder Zeile den Typ der rechten Seite.
  - 'Zur letzten Aussage: Rechne 15 · 4,2 aus und schneide ab. Hinweis: In `double` ergibt das hier genau `63.0`.'
loesung: |
  **Ansatz:** Für jede Zeile Typ und Wert der rechten Seite bestimmen.
  ---
  Zeile 3: `int + double`, implizite Umwandlung von `a` (Aussage 1 richtig). Zeile 4: `15 / 4 = 3` (Aussage 2 falsch).
  ---
  Zeile 5: `a * b` ist `double` mit Wert 63,0. Der Cast ist nötig (Aussage 3 falsch), `e = 63` (Aussage 4 richtig).
```

```aufgabe
id: au-cast-klammern
titel: Klammern setzen beim Cast
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Gegeben ist `int punkte = 47, aufgaben = 5;`. Der Durchschnitt `9.4` soll ausgegeben werden. Fülle die Lücke mit
  dem Typ, auf den gecastet wird.
teile:
  - typ: lueckentext
    code: |
      int punkte = 47, aufgaben = 5;
      double schnitt = (___) punkte / aufgaben;
      System.out.println(schnitt);
    luecken: [["double"]]
    fehler:
      - wert: ["int"]
        meldung: '`punkte` ist schon ein `int`. Dann bleibt `47 / 5` eine Ganzzahldivision und liefert 9.'
      - wert: ["float"]
        meldung: |
          Mit `float` wird zwar mit Nachkommastellen gerechnet, aber nur auf etwa 7 Stellen genau. Das Ergebnis
          `9.4f` wird dann in den `double` gelegt, und es erscheint `9.399999618530273`. Nimm `double`.
hinweise:
  - Der Cast wirkt nur auf `punkte`. Danach ist `/` eine Rechnung zwischen diesem Typ und `int`.
  - Damit `/` genau mit Nachkommastellen rechnet, muss `punkte` zum Kommazahltyp `double` werden.
loesung: |
  **Ansatz:** Der Cast muss **vor** der Division wirken, auf einen der beiden Operanden.
  ---
  `(double) punkte` ist `47.0`. Dann ist `47.0 / 5 = 9.4`.
  ---
  Ein `(double)` um die ganze Division, also `(double) (punkte / aufgaben)`, wäre zu spät und ergäbe `9.0`.
```

```aufgabe
id: au-cast-byte-summe
titel: Summe und byte-Summe vergleichen
niveau: 3
lernziel: 3
kompetenz: begruenden
quelle: Übungsblatt WS2021, Aufgabe 1f–h (nachgebaut, eigene Werte)
angabe: |
  Was gibt das Programm aus? Welche Variablen verursachen den Unterschied zwischen den beiden Summen?
teile:
  - typ: ausgabe
    label: a) Ausgabe
    code: |
      float f = 2.75f;
      double d = 1.5;
      int h = 0x10;
      int o = 017;
      int g = 200;
      long l = 300L;
      char c = '1';
      System.out.println((int) (f + d + h + o + g + l + c));
      System.out.println((byte) f + (byte) d + (byte) h + (byte) o + (byte) g + (byte) l + (byte) c);
    loesung: |
      584
      71
    fehler:
      - wert: "584\n584"
        meldung: Ein `byte` reicht nur bis 127. `(byte) 200` ist −56 und `(byte) 300` ist 44.
      - wert: "536\n23"
        meldung: Der `char` `'1'` geht mit seinem Zahlenwert 49 in die Rechnung ein, nicht mit 1.
      - wert: "585\n71"
        meldung: Der Cast `(int)` wirkt erst auf die fertige Summe 584,25 und schneidet ab. Es wird nicht gerundet.
  - typ: text
    label: b) Welche Variablen verursachen den Unterschied, und warum?
    muster: |
      Den Unterschied verursachen `g` und `l`. Ihre Werte 200 und 300 passen nicht in einen `byte` (−128 bis 127).
      Beim Cast bleiben nur die unteren 8 Bit, also wird um 256 verschoben: aus 200 wird −56, aus 300 wird 44.
      Zusammen fehlen dadurch 2 · 256 = 512. Dazu kommt ein kleiner Unterschied von 1: In der `byte`-Summe werden die
      Nachkommastellen von `f` und `d` (0,75 und 0,5) einzeln abgeschnitten, zusammen 1,25. In der ersten Summe wird nur
      am Ende einmal abgeschnitten, dort gehen nur 0,25 verloren.
hinweise:
  - Rechne zuerst die Werte aus. `0x10` = 16, `017` = 15, `'1'` hat den Zahlenwert 49.
  - Die erste Summe ist 2,75 + 1,5 + 16 + 15 + 200 + 300 + 49. Für die zweite jeden Wert einzeln in `byte` umwandeln.
loesung: |
  **Ansatz:** Zuerst jeden Wert bestimmen, dann einmal ganz summieren und einmal Wert für Wert nach `byte` casten.
  ---
  Werte: 2,75; 1,5; 16; 15; 200; 300; 49 (der Code von `'1'`). Summe 584,25, mit `(int)` abgeschnitten: `584`.
  ---
  Byte-Werte: 2, 1, 16, 15, −56 (200 − 256), 44 (300 − 256), 49. Summe: `71`.
  ---
  Der Unterschied ist 584 − 71 = 513. Davon kommen 512 von den beiden Verschiebungen um 256 bei `g` und `l`.
  Die restliche 1 entsteht, weil 0,75 und 0,5 einzeln abgeschnitten werden (zusammen 1,25 statt 0,25).
```

```reflexion
frage: Warum erlaubt Java `double d = i;` mit `int i` ohne Cast, verlangt aber für `int i = (int) d;` einen Cast?
antwort: |
  Weil die Umwandlung von `int` nach `double` keinen Wert zerstört: Jede ganze Zahl im `int`-Bereich lässt sich als
  `double` darstellen. Umgekehrt gehen bei `double` nach `int` die Nachkommastellen verloren, und zu große Werte passen
  gar nicht hinein. Java führt verlustbehaftete Umwandlungen nie heimlich aus. Mit dem Cast bestätigst du, dass du den
  Verlust bewusst in Kauf nimmst.
```

## Zeichen sind Zahlen: der Typ char

```aufgabe
id: au-chr-check-cast
titel: Eine Zahl als Zeichen
niveau: 1
art: check
angabe: |
  Was gibt `System.out.println((char) 66);` aus? (Casts: [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast))
teile:
  - typ: ausgabe
    code: |
      System.out.println((char) 66);
    loesung: |
      B
    fehler:
      - wert: "66"
        meldung: Der Cast `(char)` macht aus der Zahl 66 das Zeichen mit dieser Nummer. `println` gibt dann das Zeichen aus.
loesung: |
  `(char) 66` ist das Zeichen mit der Nummer 66.
  ---
  `A` hat die Nummer 65, also ist 66 das `B`.
```

Ein `char` sieht aus wie ein Buchstabe, ist im Speicher aber eine **Zahl**. Jedes Zeichen hat eine feste Nummer. Das
erklärt viele überraschende Ausgaben: Warum `'a' + 'b'` die Zahl 195 ergibt, und warum `(int) '8'` nicht 8 ist. Es
erklärt aber auch nützliche Tricks, etwa wie man aus dem Zeichen `'7'` die Zahl 7 macht.

### Zeichen und ihre Nummern

:::definition[char und Unicode]
Ein **`char`** speichert genau ein Zeichen. Ein `char`-Literal steht in **einfachen** Anführungszeichen: `'A'`,
`'z'`, `'7'`, `' '` (Leerzeichen). Intern ist ein `char` eine ganze Zahl von 0 bis 65535. Welche Zahl zu welchem
Zeichen gehört, legt die **Unicode-Tabelle** fest. Für die Zeichen der englischen Tastatur ist sie gleich der älteren
**ASCII-Tabelle**.
:::

Diese drei Bereiche solltest du kennen, denn in ihnen liegen die Zeichen **lückenlos hintereinander**:

| Zeichen | Nummern | Merkhilfe |
|---|---|---|
| `'0'` bis `'9'` | 48 bis 57. | `'0'` ist 48. |
| `'A'` bis `'Z'` | 65 bis 90. | `'A'` ist 65. |
| `'a'` bis `'z'` | 97 bis 122. | `'a'` ist 97, also 32 mehr als `'A'`. |

Das Leerzeichen `' '` hat die Nummer 32. **Nichtbeispiele** für `char`-Literale sind `"a"` (doppelte Anführungszeichen
machen einen `String`) und `'ab'` (zwei Zeichen passen nicht in einen `char`, der Compiler meldet einen Fehler).

Manche Zeichen kann man nicht direkt tippen. Dafür gibt es **Escape-Sequenzen**, die mit einem Rückwärtsschrägstrich
`\` beginnen. Sie zählen trotzdem als **ein** Zeichen: `'\n'` (neue Zeile, Nummer 10), `'\t'` (Tabulator), `'\''`
(einfaches Anführungszeichen), `'\\'` (der Schrägstrich selbst). In Strings gibt es zusätzlich `\"` für ein doppeltes
Anführungszeichen.

### Mit Zeichen rechnen

Weil ein `char` eine Zahl ist, kann man mit ihm rechnen. Dabei gilt die Typregel aus
[2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks):
In jeder Rechnung wird ein `char` mindestens zu `int`. Das Ergebnis ist dann eine **Zahl**, kein Zeichen. Will man
wieder ein Zeichen, castet man mit `(char)` zurück.

:::beispiel[Buchstaben verschieben]
```java
char c = 'D';
System.out.println(c + 3);
System.out.println((char) (c + 3));
c++;
System.out.println(c);
```

1. `c + 3`: `'D'` hat die Nummer 68. In der Rechnung wird es zu `int`, also 68 + 3 = 71. Ausgegeben wird die Zahl `71`.
2. `(char) (c + 3)`: Die 71 wird zurück in ein Zeichen verwandelt. Nummer 71 ist `G`. Ausgabe: `G`.
3. `c++;` erhöht die Nummer in `c` auf 69. `++` behält den Typ `char` (wie `+=` enthält es einen versteckten Cast).
4. `println(c)` gibt ein `char` als Zeichen aus: `E`.

Die Ausgabe ist `71`, `G`, `E`, jeweils in einer eigenen Zeile.
:::

:::beispiel[Aus einem Ziffernzeichen die Zahl machen]
```java
char z = '7';
System.out.println((int) z);
System.out.println(z - '0');
```

1. `(int) z` liefert die **Nummer** des Zeichens `'7'`. Die Ziffern beginnen bei 48, also ist es 48 + 7 = `55`.
2. `z - '0'` rechnet 55 − 48 = `7`. Weil die Ziffern lückenlos hintereinanderliegen, ist der Abstand zu `'0'` genau der Ziffernwert.

Diesen Trick brauchst du immer, wenn eine Zahl als Text vorliegt, zum Beispiel aus einer Eingabe.
Das Übungsblatt fragte genau danach: Warum gibt `System.out.println((int) c)` mit `char c = '8'` nicht 8 aus? Weil
der Cast die Unicode-Nummer liefert, und die ist 56.
:::

:::achtung[Den Zeichencode für den Ziffernwert gehalten]
```java
char ziffer = '5';
int wert = ziffer;           // erwartet: 5   tatsächlich: 53
int richtig = ziffer - '0';  // 5
```
Die Zuweisung `int wert = ziffer;` wandelt das Zeichen in seine Nummer um, nicht in den Ziffernwert. Für den Wert der
Ziffer ziehst du immer `'0'` ab.
:::

:::achtung[char plus char ergibt eine Zahl]
```java
System.out.println('a' + 'b');   // erwartet: ab   tatsächlich: 195
```
Hier ist kein `String` beteiligt. Beide `char` werden zu `int` (97 und 98) und addiert. Ein Text entsteht erst, wenn ein
`String` im Spiel ist, zum Beispiel bei `"" + 'a' + 'b'`. Das klärt
[2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten).
:::

Verwandt damit ist ein Compilerfehler: `char c = 'a'; c = c + 1;` übersetzt nicht, denn `c + 1` ist ein `int`. Es
geht mit `c++;`, mit `c += 1;` oder mit dem Cast `c = (char) (c + 1);`. Vergleichen kann man Zeichen direkt:
`'a' < 'b'` ist `true` (wahr), und auch `'Z' < 'a'` ist `true`, weil 90 kleiner als 97 ist. Das Zeichen `<` heißt
„kleiner als“. Alle Vergleichsoperatoren erklärt
[2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).

```reflexion
frage: Warum funktioniert der Trick `z - '0'` für jede Ziffer, und warum gäbe es mit `z - 'a'` bei Buchstaben dieselbe Idee?
antwort: |
  Weil die Zeichen `'0'` bis `'9'` in der Unicode-Tabelle lückenlos hintereinander stehen, mit den Nummern 48 bis 57.
  Der Abstand eines Ziffernzeichens zu `'0'` ist darum genau sein Ziffernwert, etwa 55 − 48 = 7 für `'7'`. Die
  Kleinbuchstaben stehen ebenso lückenlos von 97 bis 122. Darum liefert `z - 'a'` die Position im Alphabet, 0 für `a`
  bis 25 für `z`. Stünden die Zeichen verstreut, gäbe es keine so einfache Rechnung.
```

:::merke[Rezept: Ausdrücke mit char]
1. Steht der `char` allein in `println` oder in einer Verkettung mit einem `String`, erscheint das **Zeichen**.
2. Steht er in einer Rechnung mit `+ - * /`, wird er zur **Nummer** (`int`). Das Ergebnis ist eine Zahl.
3. Zurück zum Zeichen geht es mit `(char) (…)`. Den Ziffernwert erhältst du mit `z - '0'`.
:::

```aufgabe
id: au-chr-ausgabe
titel: Zeichen oder Zahl?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (`'A'` hat die Nummer 65, `'a'` die Nummer 97.)
teile:
  - typ: ausgabe
    code: |
      System.out.println('K');
      System.out.println('K' + 1);
      System.out.println((char) ('K' + 1));
      System.out.println((int) 'k');
    loesung: |
      K
      76
      L
      107
    fehler:
      - wert: "K\nL\nL\n107"
        meldung: '`''K'' + 1` ist eine Rechnung. Das `char` wird zu `int` (75), das Ergebnis ist die Zahl 76.'
      - wert: "K\n76\nL\nk"
        meldung: '`(int) ''k''` liefert die Nummer des Zeichens, nicht das Zeichen.'
hinweise:
  - Zähle von den bekannten Nummern aus weiter. `K` ist der elfte Buchstabe, also 65 + 10 = 75. Für Kleinbuchstaben kommen 32 dazu.
loesung: |
  **Ansatz:** Bei jeder Zeile entscheiden, ob ein Zeichen oder eine Zahl ausgegeben wird.
  ---
  `'K'` allein: Zeichen `K`. `'K' + 1`: Rechnung, 75 + 1 = `76`.
  ---
  `(char) 76` ist `L`. `(int) 'k'` ist 75 + 32 = `107`.
```

```aufgabe
id: au-chr-ziffernwert
titel: Der Wert eines Ziffernzeichens
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Welchen Wert hat `n` nach `char z = '6'; int n = z - '0';`?
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "54"
        meldung: 54 ist die Nummer des Zeichens `'6'`. Davon wird noch die Nummer von `'0'` (48) abgezogen.
      - wert: "-42"
        meldung: Du hast vermutlich 6 − 48 gerechnet. Mit `z` geht aber die Nummer von `'6'` (54) in die Rechnung ein.
hinweise:
  - '`''0''` hat die Nummer 48, die Ziffern liegen lückenlos dahinter.'
loesung: |
  **Ansatz:** Beide Zeichen durch ihre Nummern ersetzen.
  ---
  `'6'` ist 54 und `'0'` ist 48. Also `n = 54 - 48 = 6`.
```

```aufgabe
id: au-chr-trace
titel: Ein Zeichen weiterzählen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Verfolge die Variablen. Trage bei `c` das Zeichen ein (ohne Anführungszeichen), bei `n` die Zahl.

  ```java
  char c = 'q';
  c++;
  c += 3;
  int n = c - 'a';
  ```
teile:
  - typ: trace
    spalten: [c, n]
    zeilen: [nach Zeile 1, nach Zeile 2, nach Zeile 3, nach Zeile 4]
    vorgabe: 1
    loesung: [["q", "-"], ["r", "-"], ["u", "-"], ["u", 20]]
    fehler:
      - wert: ["q", "-", "r", "-", "u", "-", "u", "117"]
        meldung: '`n` ist der **Abstand** zu `''a''`: Nummer von `u` (117) minus Nummer von `a` (97).'
      - wert: ["q", "-", "r", "-", "t", "-", "t", "19"]
        meldung: '`c += 3` zählt vom aktuellen Zeichen `r` aus **drei** Schritte weiter, nicht zwei.'
hinweise:
  - '`++` und `+=` behalten den Typ `char`. Zähle im Alphabet weiter.'
  - '`c - ''a''` ist die Position im Alphabet, beginnend bei 0 für `a`.'
loesung: |
  **Ansatz:** Zeichen im Alphabet weiterzählen, am Ende die Differenz der Nummern bilden.
  ---
  `q` wird durch `c++` zu `r`, durch `c += 3` zu `u`.
  ---
  `n = 'u' - 'a' = 117 - 97 = 20`. Kontrolle: `u` ist der 21. Buchstabe, also Position 20 ab 0.
```

```aufgabe
id: au-chr-gross-klein
titel: Großbuchstabe zu Kleinbuchstabe
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  `gross` enthält einen Großbuchstaben zwischen `'A'` und `'Z'`. In `klein` soll der passende Kleinbuchstabe stehen.
  Fülle die Lücke so, dass die Rechnung über den Abstand zu `'A'` läuft.
teile:
  - typ: lueckentext
    code: |
      char gross = 'K';
      char klein = (char) (gross - 'A' + ___);
      System.out.println(klein);
    luecken: [["'a'", "97"]]
    fehler:
      - wert: ["'A'"]
        meldung: '`gross - ''A''` ist die Position im Alphabet (0 bis 25). Diese Position musst du zum Anfang der **Kleinbuchstaben** addieren.'
      - wert: ["32"]
        meldung: '32 ist der Abstand zwischen `''A''` und `''a''`. Hier ziehst du aber schon `''A''` ab. Du brauchst den Anfang der Kleinbuchstaben.'
hinweise:
  - '`gross - ''A''` liefert für `K` die Zahl 10.'
  - Welches Zeichen steht an Position 10, wenn man bei `'a'` zu zählen beginnt?
loesung: |
  **Ansatz:** Position im Alphabet bestimmen, dann vom Anfang der Kleinbuchstaben aus weiterzählen.
  ---
  `gross - 'A'` ist für `K` gleich 75 − 65 = 10.
  ---
  `10 + 'a'` ist 10 + 97 = 107, und `(char) 107` ist `k`. Gleichwertig ist `gross + 32`.
```

```aufgabe
id: au-chr-rf
titel: Aussagen über char
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`char c = 'a'; c = c + 1;` übersetzt nicht."
        richtig: true
        erklaerung: "`c + 1` ist ein `int`. Für die Zuweisung an `char` bräuchte man einen Cast."
      - text: "`'Z' < 'a'` ist `true`."
        richtig: true
        erklaerung: "`'Z'` hat die Nummer 90, `'a'` die Nummer 97."
      - text: "`'\\n'` besteht aus zwei Zeichen."
        richtig: false
        erklaerung: Eine Escape-Sequenz wird zwar mit zwei Zeichen geschrieben, steht aber für **ein** Zeichen (den Zeilenumbruch).
      - text: "`System.out.println('1' + '2');` gibt `12` aus."
        richtig: false
        erklaerung: "Zwei `char` werden als Zahlen addiert: 49 + 50 = 99."
    fehler:
      - wert: [r, r, f, r]
        meldung: Bei `'1' + '2'` ist kein `String` beteiligt. Was passiert mit zwei `char` in einer Rechnung?
      - wert: [f, r, f, f]
        meldung: '`c + 1` hat den Typ `int`. Darf ein `int` ohne Cast in einen `char`?'
hinweise:
  - Ersetze jedes Zeichen durch seine Nummer und wende die Typregel an.
  - 'Merke: `''0''` = 48, `''A''` = 65, `''a''` = 97.'
loesung: |
  **Ansatz:** Jede Aussage mit den Nummern der Zeichen und der Typregel prüfen.
  ---
  1 richtig (`c + 1` ist `int`), 2 richtig (90 < 97).
  ---
  3 falsch (`'\n'` ist ein Zeichen), 4 falsch (Ausgabe `99`).
```

```aufgabe
id: au-chr-mix
titel: Zeichen gemischt
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (`'x'` hat die Nummer 120.)
teile:
  - typ: ausgabe
    code: |
      char a = 'x';
      char b = 'y';
      System.out.println(a + b);
      System.out.println(a + 1 + b);
      System.out.println((char) (a + 1) + "" + b);
      System.out.println(b - a);
      System.out.println('9' - '0' + '1');
    loesung: |
      241
      242
      yy
      1
      58
    fehler:
      - wert: "xy\n242\nyy\n1\n58"
        meldung: '`a + b` sind zwei `char` ohne `String`. Sie werden als Zahlen addiert: 120 + 121.'
      - wert: "241\n242\nyy\n1\n10"
        meldung: '`''9'' - ''0''` ist 9, aber dann wird das Zeichen `''1''` addiert, also seine Nummer 49, nicht die Zahl 1.'
      - wert: "241\n242\n121y\n1\n58"
        meldung: Der Cast `(char)` macht aus 121 wieder ein Zeichen. Danach folgt `""`, also wird das Zeichen angehängt, nicht die Zahl.
hinweise:
  - Ersetze `'x'` durch 120 und `'y'` durch 121. Ein Zeichen bleibt nur ein Zeichen, wenn es allein, nach `(char)` oder in einer Verkettung mit einem `String` steht.
  - 'Letzte Zeile: `''9''` = 57, `''0''` = 48, `''1''` = 49.'
gefuehrt:
  - text: Was ergibt `a + b`?
    teil: { typ: zahl, loesung: "241" }
    erklaerung: 120 + 121 = 241. Zwei `char` werden als Zahlen addiert.
  - text: Was ergibt `(char) (a + 1)`?
    teil:
      typ: auswahl
      optionen: ['die Zahl 121', 'das Zeichen `y`', 'der Text `x1`']
      richtig: [1]
    erklaerung: 121 ist die Nummer von `y`, und der Cast macht daraus wieder ein Zeichen.
  - text: Was ergibt `(char) (a + 1) + ""`?
    teil:
      typ: auswahl
      optionen: ['der Text `y`', 'die Zahl 121', 'ein Compilerfehler']
      richtig: [0]
    erklaerung: Ein Zeichen plus ein leerer `String` ist eine Verkettung. Es entsteht der Text `y`, und danach wird `b` angehängt.
  - text: Was ergibt `'9' - '0' + '1'`?
    teil: { typ: zahl, loesung: "58" }
    erklaerung: 57 − 48 = 9, dann 9 + 49 = 58.
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob ein `String` beteiligt ist. Ohne `String` wird mit Nummern gerechnet.
  ---
  `a + b = 120 + 121 = 241`. `a + 1 + b = 120 + 1 + 121 = 242`.
  ---
  `(char) (a + 1)` ist `y`. Mit `""` entsteht ein Text, dann wird `b` angehängt: `yy`.
  ---
  `b - a = 1`. `'9' - '0' + '1' = 57 - 48 + 49 = 58`.
```

```aufgabe
id: au-chr-caesar
titel: Ein Zeichen verschlüsseln
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Bei der Caesar-Verschlüsselung wird jeder Buchstabe um `k` Stellen im Alphabet verschoben. Nach `z` geht es wieder
  bei `a` weiter. Schreibe den Rumpf von `verschiebe`. Er bekommt einen Kleinbuchstaben `c` und eine Zahl `k` mit
  `0 ≤ k ≤ 25` und liefert den verschobenen Buchstaben. Beispiele: `verschiebe('a', 1)` ist `'b'`,
  `verschiebe('z', 1)` ist `'a'`.

  Die Zeile mit `public static char verschiebe(char c, int k)` bleibt unverändert. In `c` und `k` liegen beim Test die
  Eingabewerte, und mit `return` gibst du das Ergebnis zurück.
teile:
  - typ: code
    vorlage: |
      public class Caesar {
          public static char verschiebe(char c, int k) {
              return c; // TODO
          }
      }
    musterloesung: |
      public class Caesar {
          public static char verschiebe(char c, int k) {
              int position = c - 'a';
              int neu = (position + k) % 26;
              return (char) ('a' + neu);
          }
      }
    tests:
      - { aufruf: "verschiebe('a', 1)", erwartet: "'b'" }
      - { aufruf: "verschiebe('z', 1)", erwartet: "'a'" }
      - { aufruf: "verschiebe('x', 5)", erwartet: "'c'" }
      - { aufruf: "verschiebe('m', 0)", erwartet: "'m'", versteckt: true }
      - { aufruf: "verschiebe('q', 25)", erwartet: "'p'", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Nach `z` muss es bei `a` weitergehen. Rechne mit der Position im Alphabet (0 bis 25) und nimm sie `% 26`." }
hinweise:
  - Rechne zuerst die Position im Alphabet aus, `c - 'a'`, also 0 für `a` bis 25 für `z`.
  - '`(position + k) % 26` bleibt zwischen 0 und 25. Dann zurück zum Zeichen: `(char) (''a'' + neu)`.'
loesung: |
  **Ansatz:** Statt mit den Nummern 97 bis 122 rechnen wir mit der Position 0 bis 25. Dort ist das Weiterzählen
  über `z` hinaus einfach ein Rest bei Division durch 26.
  ---
  `int position = c - 'a';` Für `x` ist das 23.
  ---
  `int neu = (position + k) % 26;` Für `x` und `k = 5` ist das 28 % 26 = 2.
  ---
  `return (char) ('a' + neu);` 97 + 2 = 99 ist `c`. Probe mit `z` und 1: (25 + 1) % 26 = 0, also `a`.
```

## Strings verketten

```aufgabe
id: au-str-check-char
titel: Zwei Zeichen addieren
niveau: 1
art: check
angabe: |
  Was gibt `System.out.println('a' + 'b');` aus? (Rechnen mit `char`: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      System.out.println('a' + 'b');
    loesung: |
      195
    fehler:
      - wert: "ab"
        meldung: Hier ist kein `String` beteiligt. Zwei `char` werden als Zahlen addiert, 97 + 98.
loesung: |
  `'a'` hat die Nummer 97 und `'b'` die Nummer 98. Ohne `String` wird gerechnet.
  ---
  97 + 98 = 195.
```

Ein **String** ist ein Text, also eine Folge von Zeichen in doppelten Anführungszeichen: `"Hallo"`, `"42"`, `"a"`
oder der leere String `""`. Strings setzt man mit `+` aneinander. Das klingt harmlos. Weil `+` aber auch Zahlen
addiert, entscheidet die **Reihenfolge** darüber, ob gerechnet oder verkettet wird. Genau das prüft das Quiz gern.

### Wann rechnet +, wann verkettet es?

:::definition[String-Verkettung]
Ist bei einem `+` **mindestens einer der beiden Operanden ein `String`**, dann rechnet Java nicht. Es wandelt den
anderen Operanden in Text um und hängt beide Texte aneinander. Das heißt **Verkettung** (englisch: concatenation).
Sonst, also bei zwei Zahlen oder Zeichen, ist `+` eine Addition.

Wie jedes `+` wird auch die Verkettung **von links nach rechts** ausgewertet, und `*`, `/` und `%` werden vorher berechnet.
:::

Ein **Beispiel**: `"Note: " + 2` ergibt den Text `"Note: 2"`. Ein **Nichtbeispiel**: `"7" - 2` ist keine Rechnung mit
der Zahl 7, sondern ein Compilerfehler (`bad operand types for binary operator '-'`). Für Strings gibt es nur das `+`.
Auch `String s = 5 + 6;` übersetzt nicht. `5 + 6` ist der `int` 11, und ein `int` ist kein `String`. Richtig wäre
`String s = "" + (5 + 6);`.

Bei der Umwandlung in Text erscheint jeder Wert so, wie `println` ihn ausgeben würde: `"" + 2.0` ist `"2.0"`,
`"" + 'x'` ist `"x"`, und `"" + true` ist `"true"`.

:::beispiel[Vier Ausgaben mit denselben Zahlen]
Diese Aufgabe stammt in ähnlicher Form aus Übung 1 (WS 2021). Es gilt `int a = 2, b = 4, c = 6;`.

```java
System.out.println("" + a + b + c);
System.out.println(a + b + c + "");
System.out.println("" + a + (b + c));
System.out.println(a + b + "" + c);
```

1. `"" + a` ist ein String-Plus, ergibt `"2"`. Dann `"2" + b` ergibt `"24"`, dann `"24" + c` ergibt `"246"`. Ausgabe `246`.
2. `a + b` sind zwei `int`, ergibt `6`. Dann `6 + c` ergibt `12`. Erst danach `12 + ""` ergibt `"12"`. Ausgabe `12`.
3. Die Klammer kommt zuerst: `b + c` ergibt `10`. Dann `"" + a` ergibt `"2"`, und `"2" + 10` ergibt `"210"`. Ausgabe `210`.
4. `a + b` ergibt `6`. `6 + ""` ergibt `"6"`. `"6" + c` ergibt `"66"`. Ausgabe `66`.

Die Faustregel: Alles **links** vom ersten String wird noch gerechnet. Ab dem ersten String wird nur noch verkettet.
:::

:::beispiel[Text, Zahl und Zeichen gemischt]
Diese Aufgabe stammt in ähnlicher Form aus dem Übungsblatt (WS 2021). Es gilt
`String st = "Ergebnis"; int i = 21; char c = '5';`. Die Ziffer `'5'` hat die Nummer 53.

```java
System.out.println(st + i + c);
System.out.println(i + c + st);
```

1. Zeile 1: `st + i` ist String plus Zahl, ergibt `"Ergebnis21"`. Dann wird `c` als **Zeichen** angehängt: `"Ergebnis215"`.
2. Zeile 2: `i + c` ist `int` plus `char`, also eine Rechnung: 21 + 53 = 74. Erst dann kommt der String: `"74Ergebnis"`.

Die Ausgaben vor und nach `Ergebnis` unterscheiden sich, weil in Zeile 2 der String erst **nach** der Addition kommt.
Vorher ist `c` eine Zahl, danach wäre es ein Zeichen.
:::

:::achtung[Zahlen in einem Satz zusammenzählen]
```java
int a = 3, b = 4;
System.out.println("Summe: " + a + b);   // erwartet: Summe: 7   tatsächlich: Summe: 34
```
Von links: `"Summe: " + a` ist schon ein String. Ab da wird nur noch angehängt. Richtig ist
`"Summe: " + (a + b)`. Die Klammer erzwingt, dass zuerst gerechnet wird.
:::

:::achtung[Ein leerer String am falschen Ende]
```java
char x = 'O', y = 'K';
System.out.println(x + y + "");   // erwartet: OK   tatsächlich: 154
```
Der leere String steht ganz rechts. Vorher wird `x + y` als Zahlen addiert: 79 + 75 = 154. Erst dann entsteht der
Text `"154"`. Richtig ist `"" + x + y`. Dann ist schon das erste `+` eine Verkettung.
:::

Punktrechnung bleibt Punktrechnung: In `"test" + 2 * 3` wird zuerst `2 * 3 = 6` gerechnet. Das Ergebnis ist `"test6"`.
Aber `"Wert: " + 10 / 4` ergibt `"Wert: 2"`, denn `10 / 4` ist eine Ganzzahldivision.

Sonderzeichen in Strings schreibst du mit Escape-Sequenzen: `"\n"` beginnt mitten im Text eine neue Zeile, `"\t"`
setzt einen Tabulator und `"\""` ein doppeltes Anführungszeichen. `System.out.println("a\nb");` gibt also `a` und `b`
in zwei Zeilen aus.

:::merke[Rezept: Verkettung auswerten]
1. Rechne zuerst alle Klammern und alle `*`, `/`, `%` aus.
2. Geh dann die `+` von links nach rechts durch. Schreib dir nach jedem `+` auf, ob das Zwischenergebnis eine Zahl oder ein Text ist.
3. Sobald ein Zwischenergebnis ein Text ist, wird jeder weitere Wert nur noch angehängt.
4. Ein `char` wird angehängt als Zeichen, aber addiert als Nummer.
:::

```aufgabe
id: au-str-reihenfolge
titel: Gerechnet oder verkettet?
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int x = 3, y = 5;
      System.out.println(x + y + "!");
      System.out.println("!" + x + y);
      System.out.println("!" + (x + y));
      System.out.println(x + "" + y);
    loesung: |
      8!
      !35
      !8
      35
    fehler:
      - wert: "8!\n!8\n!8\n8"
        meldung: Sobald links ein String steht, wird nicht mehr gerechnet. `"!" + x` ist `"!3"`, dann wird `5` angehängt.
      - wert: "35!\n!35\n!8\n35"
        meldung: In `x + y + "!"` kommt der String erst am Ende. Vorher ist `x + y` eine Addition zweier `int`.
hinweise:
  - Geh die `+` von links nach rechts durch und notiere, ob das Zwischenergebnis Zahl oder Text ist.
loesung: |
  **Ansatz:** Von links nach rechts, Klammern zuerst.
  ---
  `3 + 5 = 8`, dann `"8!"`. `"!" + 3 = "!3"`, dann `"!35"`.
  ---
  Klammer zuerst: `3 + 5 = 8`, dann `"!8"`. `3 + ""` ist `"3"`, dann `"35"`.
```

```aufgabe
id: au-str-summe-satz
titel: Die richtige Summe im Satz
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Es gilt `int a = 4, b = 5;`. Welche Anweisung gibt genau `Summe: 9` aus?
teile:
  - typ: auswahl
    optionen:
      - '`System.out.println("Summe: " + a + b);`'
      - '`System.out.println("Summe: " + (a + b));`'
      - '`System.out.println(a + b + "Summe: ");`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Ohne Klammer wird `a` an den Text angehängt und dann `b`. Die Ausgabe ist `Summe: 45`.'
      - wert: 2
        meldung: 'Hier wird zwar 9 gerechnet, aber die Zahl steht vor dem Text. Die Ausgabe ist `9Summe:` mit einem Leerzeichen am Ende.'
hinweise:
  - Die Addition muss stattfinden, bevor der Text ins Spiel kommt.
loesung: |
  **Ansatz:** Die Addition muss vor der ersten Verkettung passieren.
  ---
  Nur die Klammer in Option 2 erzwingt `4 + 5 = 9` vor dem Anhängen. Ausgabe: `Summe: 9`.
```

```aufgabe
id: au-str-gemischt
titel: Zeichen, Kommazahlen und Ziffern in Texten
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (`'A'` hat die Nummer 65.)
teile:
  - typ: ausgabe
    code: |
      char c = 'A';
      double d = 1.5;
      System.out.println(c + d + "x");
      System.out.println("x" + c + d);
      System.out.println(c + 1 + "" + c);
      System.out.println(1 + 2 + "3" + 4 + 5);
    loesung: |
      66.5x
      xA1.5
      66A
      3345
    fehler:
      - wert: "A1.5x\nxA1.5\n66A\n3345"
        meldung: '`c + d` ist eine Rechnung ohne String. Das `char` wird zur Zahl 65, plus 1,5 ergibt 66,5.'
      - wert: "66.5x\nxA1.5\n66A\n312"
        meldung: Nach `"3"` ist das Zwischenergebnis ein Text. Die `4` und die `5` werden einzeln angehängt, nicht addiert.
      - wert: "66.5x\nxA1.5\n6665\n3345"
        meldung: Das letzte `c` steht hinter einem String. Es wird als Zeichen `A` angehängt, nicht als Nummer.
hinweise:
  - Ersetze `c` durch 65, solange noch kein String im Spiel ist.
  - 'In der letzten Zeile: `1 + 2` ist noch eine Addition. Ab `"3"` wird nur noch angehängt.'
gefuehrt:
  - text: Was ergibt `c + d`?
    teil: { typ: zahl, loesung: "66.5" }
    erklaerung: 65 + 1,5 = 66,5. Das `char` wird zur Zahl, weil kein String beteiligt ist.
  - text: Was ergibt `"x" + c`?
    teil:
      typ: auswahl
      optionen: ['`"x65"`', '`"xA"`', '`"x" + 65`, also ein Fehler']
      richtig: [1]
    erklaerung: Links steht ein String, also wird das Zeichen als Zeichen angehängt.
  - text: Was ergibt `c + 1`, bevor der leere String kommt?
    teil: { typ: zahl, loesung: "66" }
    erklaerung: 65 + 1 = 66. Danach wird mit `""` ein Text daraus, und `c` wird als `A` angehängt.
  - text: Was ergibt `1 + 2 + "3"`?
    teil:
      typ: auswahl
      optionen: ['`"33"`', '`"123"`', '`6`']
      richtig: [0]
    erklaerung: 1 + 2 = 3 ist noch eine Addition. Dann wird `"3"` angehängt. Danach kommen `4` und `5` als Text dazu.
loesung: |
  **Ansatz:** Für jedes `+` von links nach rechts prüfen, ob schon ein String vorliegt.
  ---
  Zeile 1: `65 + 1.5 = 66.5`, dann `"66.5x"`. Zeile 2: `"x" + 'A'` ist `"xA"`, dann `"xA1.5"`.
  ---
  Zeile 3: `65 + 1 = 66`, dann `"66"`, dann `"66A"`.
  ---
  Zeile 4: `1 + 2 = 3`, dann `"33"`, `"334"`, `"3345"`.
```

```aufgabe
id: au-str-luecke-klammer
titel: Eine Rechnung als Satz ausgeben
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Für `int a = 10, b = 5;` soll genau `10 + 5 = 15` ausgegeben werden. Fülle die Lücke.
teile:
  - typ: lueckentext
    code: |
      int a = 10, b = 5;
      System.out.println(a + " + " + b + " = " + ___);
    luecken: [["(a + b)", "(b + a)", "(a+b)"]]
    fehler:
      - wert: ["a + b"]
        meldung: Ohne Klammer werden `a` und `b` nur angehängt. Die Ausgabe wäre `10 + 5 = 105`.
hinweise:
  - Links von der Lücke steht schon ein String. Was passiert dann mit `+`?
  - Mit Klammern erzwingst du, dass zuerst gerechnet wird.
loesung: |
  **Ansatz:** Ab dem ersten String wird verkettet. Die Summe muss deshalb in Klammern stehen.
  ---
  `(a + b)` wird zuerst ausgewertet und ergibt `15`.
  ---
  Dann wird `15` an `"10 + 5 = "` angehängt. Ausgabe: `10 + 5 = 15`.
```

```aufgabe
id: au-str-zeilen
titel: Welche String-Zuweisungen übersetzen nicht?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Markiere alle Zeilen, die der Compiler **nicht** übersetzt.
teile:
  - typ: zeilen
    code: |
      String s = 5;
      String t = "" + 5;
      String u = 'o' + 'k';
      String v = "o" + 'k';
      int n = "3" + 4;
      String w = "Preis" - 1;
    loesung: [1, 3, 5, 6]
    fehler:
      - wert: [1, 5, 6]
        meldung: "`'o' + 'k'` sind zwei `char` ohne String. Das Ergebnis ist ein `int`, und ein `int` ist kein `String`."
      - wert: [1, 3, 6]
        meldung: '`"3" + 4` ist eine Verkettung und ergibt den Text `"34"`. Ein Text passt nicht in eine `int`-Variable.'
hinweise:
  - Bestimme für jede Zeile den Typ der rechten Seite und vergleiche ihn mit dem Typ links.
  - 'Für Strings gibt es nur das `+`. Zwei `char` ergeben beim `+` einen `int`.'
loesung: |
  **Ansatz:** Typ der rechten Seite bestimmen. Zahlen werden nie von selbst zu Strings.
  ---
  Zeile 1: `int` in `String` geht nicht. Zeile 3: `'o' + 'k'` ist ein `int`.
  ---
  Zeile 5: `"3" + 4` ist ein `String`, passt nicht in `int`. Zeile 6: `-` gibt es für Strings nicht.
  Zeile 2 und 4 sind korrekt, weil dort ein String beteiligt ist.
```

```aufgabe
id: au-str-blatt
titel: Vor und nach dem Text
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: Übungsblatt WS2021, Aufgabe 1j (nachgebaut, eigene Werte)
angabe: |
  Was gibt das Programm aus? Erkläre anschließend, warum die Zahl vor `Kurs` anders aussieht als die nach `Kurs`.
teile:
  - typ: ausgabe
    label: a) Ausgabe
    code: |
      String st = "Kurs";
      int i = 12;
      char c = '3';
      System.out.println(st + i + c);
      System.out.println(i + c + st);
      System.out.println(c + i + st + c + i);
    loesung: |
      Kurs123
      63Kurs
      63Kurs312
    fehler:
      - wert: "Kurs123\n123Kurs\n312Kurs312"
        meldung: Vor dem ersten String wird gerechnet. `i + c` ist 12 plus die Nummer von `'3'`, also 12 + 51.
      - wert: "Kurs15\n63Kurs\n63Kurs15"
        meldung: Nach dem String wird nur noch angehängt. `"Kurs" + 12` ist `"Kurs12"`, dann kommt das Zeichen `3` dazu.
  - typ: text
    label: b) Warum unterscheiden sich die Ausgaben vor und nach `Kurs`?
    muster: |
      Java wertet `+` von links nach rechts aus. Solange noch kein String vorkam, ist `+` eine Addition: `i + c`
      rechnet 12 plus die Unicode-Nummer von `'3'` (51) und ergibt 63. Steht der String schon links, ist jedes weitere
      `+` eine Verkettung: `12` und das Zeichen `3` werden als Text angehängt.
hinweise:
  - '`''3''` hat die Nummer 51 (`''0''` ist 48).'
  - Markiere in jeder Zeile das erste `+`, an dem ein String beteiligt ist. Links davon wird gerechnet, rechts davon angehängt.
loesung: |
  **Ansatz:** In jeder Zeile die Stelle suchen, ab der ein String vorliegt.
  ---
  Zeile 1: `st` steht ganz links. `"Kurs" + 12 + '3'` ergibt `Kurs123`.
  ---
  Zeile 2: `12 + '3'` ist eine Rechnung: 12 + 51 = 63. Dann `"63Kurs"`.
  ---
  Zeile 3: `'3' + 12` = 63, dann `"63Kurs"`, dann `'3'` als Zeichen und `12` als Text: `63Kurs312`.
```

```aufgabe
id: au-str-rechnung-code
titel: Eine Rechnung als Text liefern
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Schreibe den Rumpf von `rechnung`. Die Methode bekommt zwei ganze Zahlen und liefert einen Text mit Summe und Produkt.
  Die Form ist genau so: `rechnung(3, 4)` liefert `"3 + 4 = 7, 3 * 4 = 12"`.

  Die Zeile `public static String rechnung(int a, int b)` bleibt unverändert. Mit `return` gibst du den Text zurück.
teile:
  - typ: code
    vorlage: |
      public class Rechnung {
          public static String rechnung(int a, int b) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Rechnung {
          public static String rechnung(int a, int b) {
              return a + " + " + b + " = " + (a + b) + ", " + a + " * " + b + " = " + a * b;
          }
      }
    tests:
      - { aufruf: "rechnung(3, 4)", erwartet: "\"3 + 4 = 7, 3 * 4 = 12\"" }
      - { aufruf: "rechnung(10, 0)", erwartet: "\"10 + 0 = 10, 10 * 0 = 0\"" }
      - { aufruf: "rechnung(-2, 5)", erwartet: "\"-2 + 5 = 3, -2 * 5 = -10\"", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Erhältst du `3 + 4 = 34`? Dann fehlt die Klammer um `a + b`. Hinter einem String wird `+` zur Verkettung." }
hinweise:
  - Setze den Text Stück für Stück zusammen. Die Teile `" + "`, `" = "` und `", "` sind Strings.
  - Die Summe braucht Klammern. Das Produkt nicht, denn `*` wird vor dem `+` ausgewertet.
loesung: |
  **Ansatz:** Text und Werte abwechselnd mit `+` verbinden und überall dort Klammern setzen, wo gerechnet werden soll.
  ---
  Die Summe muss `(a + b)` heißen. Ohne Klammer würde `a` und dann `b` angehängt.
  ---
  `a * b` braucht keine Klammer: `*` hat Vorrang vor jedem `+` und wird zuerst ausgerechnet.
  ---
  ```java
  return a + " + " + b + " = " + (a + b) + ", " + a + " * " + b + " = " + a * b;
  ```
  Probe: Für 3 und 4 entsteht `3 + 4 = 7, 3 * 4 = 12`. Auch das erste `a + " + "` ist schon eine Verkettung, weil `" + "` ein String ist.
```

```reflexion
frage: Warum schreiben viele Programmierer bei Ausgaben ein `"" +` an den Anfang, und wann ist das gefährlich?
antwort: |
  Der leere String am Anfang sorgt dafür, dass schon das erste `+` eine Verkettung ist. Dann werden alle folgenden
  Werte als Text angehängt, auch zwei Zeichen hintereinander (`"" + 'o' + 'k'` ergibt `"ok"`). Gefährlich ist das, wenn
  man eigentlich etwas addieren will: `"" + a + b` hängt die Ziffern aneinander, statt zu rechnen. Wo gerechnet werden
  soll, braucht es dann Klammern, zum Beispiel `"" + (a + b)`.
```

## String-Methoden und der Vergleich mit equals

```aufgabe
id: au-met-check-verkettung
titel: Text zusammensetzen
niveau: 1
art: check
angabe: |
  Was gibt `System.out.println("EP" + 1 + 2);` aus? (Verkettung: [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten))
teile:
  - typ: ausgabe
    code: |
      System.out.println("EP" + 1 + 2);
    loesung: |
      EP12
    fehler:
      - wert: "EP3"
        meldung: Links steht schon ein String. Ab dort wird nur noch angehängt, nicht gerechnet.
loesung: |
  `"EP" + 1` ist eine Verkettung und ergibt `"EP1"`.
  ---
  Dann wird `2` angehängt: `"EP12"`.
```

Mit `+` baust du Strings zusammen. Um sie zu **untersuchen** und zu **zerlegen**, gibt es Methoden. Eine **Methode**
ist hier eine fertige Funktion, die zu einem String gehört. Man ruft sie mit einem Punkt auf: `wort.length()`. Die
runden Klammern gehören immer dazu, auch wenn nichts darin steht. Im Programmiertest darfst du von `String` nur
`charAt`, `equals`, `length`, `substring` und `isEmpty` verwenden. Diese fünf musst du sicher beherrschen.

### Indizes beginnen bei 0

Jedes Zeichen eines Strings hat eine Position, den **Index**. Der erste Index ist **0**, nicht 1. Ein String der Länge
`n` hat also die Indizes `0` bis `n - 1`. Für `"Programm"` (Länge 8) sieht das so aus:

```
Index:    0  1  2  3  4  5  6  7
Zeichen:  P  r  o  g  r  a  m  m
```

:::definition[Die wichtigsten String-Methoden]
Für einen String `s`:

- `s.length()` liefert die Anzahl der Zeichen als `int`. `"Programm".length()` ist `8`, `"".length()` ist `0`.
- `s.charAt(i)` liefert das Zeichen am Index `i` als **`char`**. Gültig ist `0 ≤ i < s.length()`.
- `s.substring(a, b)` liefert den Teilstring von Index `a` **bis vor** Index `b`. Er hat `b - a` Zeichen.
- `s.substring(a)` liefert den Rest ab Index `a` bis zum Ende.
- `s.indexOf(c)` liefert den Index des **ersten** Vorkommens von `c` (ein Zeichen oder ein String). Kommt `c` nicht vor, ist das Ergebnis `-1`. `s.lastIndexOf(c)` sucht das **letzte** Vorkommen.
- `s.isEmpty()` ist `true`, wenn `s` die Länge 0 hat.
- `s.equals(t)` ist `true`, wenn `s` und `t` Zeichen für Zeichen gleich sind.

Dazu kommen `toUpperCase()`, `toLowerCase()`, `startsWith(t)` und `replace(alt, neu)`. Sie liefern jeweils einen **neuen** String.
:::

:::beispiel[Ein Wort untersuchen]
Für `String w = "Programm";` (Indizes in der Tabelle):

1. `w.length()` ist `8`. Der letzte Index ist also 7, und `w.charAt(7)` ist `'m'`.
2. `w.charAt(0)` ist `'P'`, das erste Zeichen.
3. `w.substring(0, 3)` nimmt die Indizes 0, 1, 2. Das ist `"Pro"`, also 3 − 0 = 3 Zeichen. Index 3 gehört **nicht** dazu.
4. `w.substring(3)` nimmt alles ab Index 3: `"gramm"`.
5. `w.indexOf('r')` ist `1`, das erste `r`. `w.lastIndexOf('r')` ist `4`.
6. `w.indexOf("gra")` ist `3`. Gesucht wird, wo der Teilstring beginnt.
7. `w.indexOf('x')` ist `-1`, denn `x` kommt nicht vor.
:::

**Nichtbeispiele:** `w.charAt(8)` ist kein gültiger Zugriff. Index 8 gibt es bei Länge 8 nicht. Das Programm übersetzt
zwar, bricht beim Ausführen aber mit `StringIndexOutOfBoundsException: Index 8 out of bounds for length 8` ab. Und
`String erstes = w.charAt(0);` übersetzt gar nicht: `charAt` liefert einen `char`, keinen `String`. Möglich ist
`char erstes = w.charAt(0);` oder `String erstes = "" + w.charAt(0);`.

:::beispiel[Einen Text an Trennzeichen zerlegen]
Diese Aufgabe stammt in ähnlicher Form aus Übung 2 (WS 2021). Eine Eingabe hat die Form `teil1+teil2=`. Wir holen die
beiden Teile heraus.

```java
String eingabe = "Haus+Boot=";
int plus = eingabe.indexOf('+');
int gleich = eingabe.indexOf('=');
String teil1 = eingabe.substring(0, plus);
String teil2 = eingabe.substring(plus + 1, gleich);
System.out.println(teil1 + teil2);
```

1. `indexOf('+')` findet das Plus an Index 4 (H=0, a=1, u=2, s=3, +=4).
2. `indexOf('=')` findet das Gleichheitszeichen an Index 9.
3. `substring(0, 4)` nimmt die Indizes 0 bis 3: `"Haus"`. Das Plus selbst ist nicht dabei.
4. `substring(5, 9)` beginnt **nach** dem Plus und endet vor dem `=`: `"Boot"`.
5. Ausgabe: `HausBoot`.
:::

:::achtung[Das Ende von substring mitgezählt]
```java
String s = "Informatik";
System.out.println(s.substring(2, 5));   // erwartet: form   tatsächlich: for
```
Der zweite Index ist **exklusiv**: Das Zeichen dort gehört nicht mehr dazu. `substring(2, 5)` liefert die Indizes 2, 3
und 4, also `b - a = 3` Zeichen. Wer `"form"` will, schreibt `substring(2, 6)`.
:::

### Strings sind unveränderlich

Ein String kann nach seiner Erzeugung **nicht mehr verändert** werden. Man sagt: Strings sind **unveränderlich**
(englisch: immutable). Methoden wie `toUpperCase()` ändern deshalb nichts am alten String. Sie liefern einen neuen.

```java
String t = "Hallo";
t.toUpperCase();          // das Ergebnis wird weggeworfen
System.out.println(t);    // Hallo
t = t.toUpperCase();      // jetzt zeigt t auf den neuen String
System.out.println(t);    // HALLO
```

### Strings vergleichen: equals statt ==

:::definition[Inhalt vergleichen mit equals]
Ein String ist kein primitiver Wert. Seine Zeichen liegen in einem eigenen Speicherbereich, einem **Objekt**. Eine
String-Variable enthält nur einen **Verweis** auf dieses Objekt, ähnlich wie eine Adresse. Darum vergleicht `==` bei Strings nur, ob zwei Variablen auf **dasselbe Objekt**
zeigen. Ob zwei Strings **dieselben Zeichen** enthalten, prüft `s.equals(t)`.
:::

:::beispiel[Gleicher Inhalt, verschiedene Objekte]
```java
String a = "Tor";
String b = "To";
String c = b + "r";
System.out.println(a == c);
System.out.println(a.equals(c));
```

1. `a` zeigt auf ein Objekt mit dem Inhalt `Tor`.
2. `c` entsteht erst beim Ausführen durch die Verkettung `b + "r"`. Dabei erzeugt Java ein **neues** Objekt, das ebenfalls `Tor` enthält.
3. `a == c` fragt: Ist es dasselbe Objekt? Nein, also `false`.
4. `a.equals(c)` fragt: Gleiche Zeichen? Ja, also `true`.
:::

Tückisch ist, dass `==` manchmal trotzdem `true` liefert. Gleiche String-Literale wie `"Tor"` und `"Tor"` legt Java
nur einmal an. Dann zeigen zwei Variablen zufällig auf dasselbe Objekt. Darauf darfst du dich nie verlassen. Bei
Strings aus Eingaben oder Rechnungen geht `==` schief. Darum gilt ohne Ausnahme: **Strings vergleicht man mit
`equals`.** Im Programmiertest kostet `==` zwischen Strings Punkte.

:::achtung[Strings mit == vergleichen]
```java
String antwort = "j";
String eingabe = "ja".substring(0, 1);     // ebenfalls "j"
System.out.println(eingabe == antwort);     // erwartet: true   tatsächlich: false
System.out.println(eingabe.equals(antwort)); // true
```
`substring` erzeugt ein neues Objekt. Der Inhalt ist gleich, aber es ist nicht dasselbe Objekt. Genau so verhält sich
später auch eine Eingabe von der Tastatur.
:::

```aufgabe
id: au-met-wien
titel: Methoden an einem kurzen Wort
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Graz";
      System.out.println(s.length());
      System.out.println(s.charAt(1));
      System.out.println(s.indexOf('a'));
      System.out.println(s.substring(1, 3));
      System.out.println(s.charAt(s.length() - 1));
    loesung: |
      4
      r
      2
      ra
      z
    fehler:
      - wert: "4\nG\n3\nGra\nz"
        meldung: Indizes beginnen bei 0. `charAt(1)` ist das **zweite** Zeichen.
      - wert: "4\nr\n2\nraz\nz"
        meldung: '`substring(1, 3)` endet **vor** Index 3. Es sind nur die Indizes 1 und 2.'
hinweise:
  - 'Schreib dir die Indizes auf: G = 0, r = 1, a = 2, z = 3.'
loesung: |
  **Ansatz:** Indizes notieren: G 0, r 1, a 2, z 3. Länge 4.
  ---
  `charAt(1)` ist `r`, `indexOf('a')` ist `2`, `substring(1, 3)` ist `ra`.
  ---
  `s.length() - 1` ist 3, und `charAt(3)` ist `z`, das letzte Zeichen.
```

```aufgabe
id: au-met-substring-laenge
titel: Wie lang ist der Teilstring?
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Wie viele Zeichen hat `"Elektrotechnik".substring(3, 9)`?
teile:
  - typ: zahl
    loesung: "9 - 3"
    fehler:
      - wert: "7"
        meldung: Der zweite Index ist exklusiv. Es sind die Indizes 3 bis 8, also 9 − 3 Zeichen.
hinweise:
  - '`substring(a, b)` hat immer `b - a` Zeichen.'
loesung: |
  **Ansatz:** Der Teilstring reicht von Index 3 bis vor Index 9.
  ---
  Das sind `9 - 3 = 6` Zeichen, nämlich `ktrote`.
```

```aufgabe
id: au-met-satz
titel: Einen Satz untersuchen
niveau: 2
lernziel: 6
kompetenz: rechnen
quelle: Übungsblatt WS2021, Aufgabe 2a–g (nachgebaut, eigener Satz)
angabe: |
  Was gibt das Programm aus? Der Satz hat 44 Zeichen. Zähle die Indizes sorgfältig, Leerzeichen zählen mit.
teile:
  - typ: ausgabe
    code: |
      String satz = "Ein String speichert eine Folge von Zeichen.";
      System.out.println(satz.charAt(4));
      System.out.println(satz.indexOf('e'));
      System.out.println(satz.substring(4, 10));
      System.out.println(satz.startsWith("Ein"));
      System.out.println(satz.indexOf("eine"));
      System.out.println(satz.lastIndexOf('e'));
    loesung: |
      S
      13
      String
      true
      21
      41
    fehler:
      - wert: "S\n0\nString\ntrue\n21\n41"
        meldung: '`indexOf(''e'')` unterscheidet Groß- und Kleinbuchstaben. Das `E` am Anfang ist ein anderes Zeichen.'
      - wert: "t\n13\nString\ntrue\n21\n41"
        meldung: Index 4 ist das fünfte Zeichen. `E` 0, `i` 1, `n` 2, Leerzeichen 3, `S` 4.
hinweise:
  - 'Schreib die ersten Indizes auf: E 0, i 1, n 2, Leerzeichen 3, S 4, t 5, r 6, i 7, n 8, g 9, Leerzeichen 10.'
  - 'Das Wort `eine` beginnt nach `Ein String speichert ` (21 Zeichen). Das letzte `e` steckt in `Zeichen`.'
gefuehrt:
  - text: Welches Zeichen steht an Index 4?
    teil:
      typ: auswahl
      optionen: ['`n`', '`S`', '`t`']
      richtig: [1]
    erklaerung: E 0, i 1, n 2, Leerzeichen 3, S 4.
  - text: An welchem Index steht das erste kleine `e`? (Ein String speichert …)
    teil: { typ: zahl, loesung: "13" }
    erklaerung: Nach `String` (Index 4 bis 9) kommt ein Leerzeichen (10), dann s 11, p 12, e 13.
  - text: Was liefert `substring(4, 10)`?
    teil:
      typ: auswahl
      optionen: ['`String`', '`String `', '`Strin`']
      richtig: [0]
    erklaerung: Die Indizes 4 bis 9, also 6 Zeichen. Das Leerzeichen an Index 10 ist nicht mehr dabei.
  - text: Überlege, wo das letzte `e` des Satzes steht. Der Punkt am Ende hat Index 43.
    erklaerung: '`Zeichen.` endet mit n (42) und Punkt (43). Davor: e 41. Also ist `lastIndexOf(''e'')` gleich 41.'
loesung: |
  **Ansatz:** Indizes ab 0 zählen, Leerzeichen und Groß-/Kleinschreibung beachten.
  ---
  `charAt(4)` ist `S`. Das erste kleine `e` steht in `speichert` an Index 13.
  ---
  `substring(4, 10)` ist `String`. `startsWith("Ein")` ist `true`.
  ---
  `eine` beginnt an Index 21. Das letzte `e` steht in `Zeichen` an Index 41 (der Punkt hat 43, das `n` 42).
```

```aufgabe
id: au-met-mail
titel: Eine E-Mail-Adresse zerlegen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Aus `mail` sollen der Teil vor dem `@` und der Teil nach dem `@` herausgeholt werden. Für `"ada@tuwien.ac.at"` soll
  `ada` und `tuwien.ac.at` erscheinen. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      String mail = "ada@tuwien.ac.at";
      int at = mail.indexOf(___);
      String name = mail.substring(0, ___);
      String domain = mail.substring(___);
      System.out.println(name);
      System.out.println(domain);
    luecken: [["'@'", "\"@\""], ["at"], ["at + 1", "at+1", "1 + at"]]
    fehler:
      - wert: ["'@'", "at", "at"]
        meldung: '`substring(at)` beginnt **beim** `@`. Die Domain soll aber erst nach dem `@` beginnen.'
      - wert: ["'@'", "at - 1", "at + 1"]
        meldung: Der zweite Index von `substring` ist schon exklusiv. Mit `at` endet der Name direkt vor dem `@`.
hinweise:
  - '`indexOf` liefert die Position des `@`. Bei `ada@…` ist das 3.'
  - Der Name endet vor dem `@`, die Domain beginnt ein Zeichen danach.
loesung: |
  **Ansatz:** Zuerst die Position des Trennzeichens suchen, dann links und rechts davon schneiden.
  ---
  `mail.indexOf('@')` ist 3.
  ---
  `substring(0, 3)` ist `ada` (Index 3 ist exklusiv). `substring(4)` ist `tuwien.ac.at`.
```

```aufgabe
id: au-met-equals-rf
titel: Aussagen über String-Vergleiche
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben ist `String a = "Java"; String b = "Ja"; String c = b + "va";`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`a.equals(c)` ist `true`."
        richtig: true
        erklaerung: Beide enthalten die Zeichen `Java`.
      - text: "`a == c` ist `true`, weil beide denselben Text enthalten."
        richtig: false
        erklaerung: "`c` entsteht beim Ausführen als neues Objekt. `==` vergleicht Objekte, nicht Inhalte."
      - text: "Nach `a.toUpperCase();` enthält `a` den Text `JAVA`."
        richtig: false
        erklaerung: Strings sind unveränderlich. Das Ergebnis wird hier weggeworfen, `a` bleibt `Java`.
      - text: "`c.charAt(c.length())` bricht zur Laufzeit mit einer Exception ab."
        richtig: true
        erklaerung: Der letzte gültige Index ist `length() - 1`.
    fehler:
      - wert: [r, r, f, r]
        meldung: '`==` prüft bei Strings, ob es **dasselbe Objekt** ist. Eine Verkettung zur Laufzeit erzeugt ein neues Objekt.'
      - wert: [r, f, r, r]
        meldung: '`toUpperCase()` liefert einen neuen String. Ohne `a = …` ändert sich `a` nicht.'
hinweise:
  - Unterscheide „gleicher Inhalt“ (`equals`) von „dasselbe Objekt“ (`==`).
  - Denk daran, dass String-Methoden nie den String selbst verändern.
loesung: |
  **Ansatz:** Für jede Aussage klären, ob nach Inhalt oder nach Objekt gefragt ist, und ob etwas verändert würde.
  ---
  1 richtig (gleicher Inhalt). 2 falsch (`c` ist ein neues Objekt).
  ---
  3 falsch (unveränderlich). 4 richtig (Index `length()` gibt es nicht).
```

```aufgabe
id: au-met-unveraenderlich
titel: Verweise und neue Strings
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String x = "EP";
      String y = x;
      x = x + "1";
      String z = "EP1";
      System.out.println(x);
      System.out.println(y);
      System.out.println(x.equals(z));
      System.out.println(x == z);
      System.out.println(y.toLowerCase());
      System.out.println(y);
    loesung: |
      EP1
      EP
      true
      false
      ep
      EP
    fehler:
      - wert: "EP1\nEP1\ntrue\nfalse\nep\nEP"
        meldung: |
          `x = x + "1"` verändert nicht das alte String-Objekt, sondern erzeugt ein neues und lässt `x` darauf zeigen.
          `y` zeigt weiter auf das alte `"EP"`.
      - wert: "EP1\nEP\ntrue\ntrue\nep\nEP"
        meldung: '`x` entstand zur Laufzeit durch Verkettung. Es ist ein anderes Objekt als das Literal `"EP1"`, also liefert `==` `false`.'
      - wert: "EP1\nEP\ntrue\nfalse\nep\nep"
        meldung: '`toLowerCase()` liefert einen neuen String. `y` selbst bleibt `EP`.'
hinweise:
  - Strings sind unveränderlich. Jede „Änderung“ erzeugt ein neues Objekt.
  - '`==` vergleicht Objekte, `equals` vergleicht Inhalte.'
loesung: |
  **Ansatz:** Für jede Zeile festhalten, auf welches Objekt jede Variable zeigt.
  ---
  `y = x` lässt `y` auf dasselbe `"EP"` zeigen. `x = x + "1"` erzeugt ein neues Objekt `"EP1"`. `y` zeigt weiter auf `"EP"`.
  ---
  `x.equals(z)` vergleicht Inhalte: `true`. `x == z` vergleicht Objekte: `false`.
  ---
  `y.toLowerCase()` liefert den neuen String `ep`, `y` bleibt `EP`.
```

```aufgabe
id: au-met-haelften
titel: Die Hälften eines Strings tauschen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Schreibe den Rumpf von `tauscheHaelften`. Die Methode teilt `s` in zwei Hälften und liefert zuerst die hintere, dann
  die vordere. Bei ungerader Länge ist die hintere Hälfte um ein Zeichen länger. Beispiele: `"abcdef"` wird zu
  `"defabc"`, und `"abcde"` wird zu `"cdeab"`. Der leere String bleibt leer.

  Erlaubt sind von `String` nur `length` und `substring` (wie im Programmiertest). Die Zeile mit
  `public static String tauscheHaelften(String s)` bleibt unverändert.
teile:
  - typ: code
    vorlage: |
      public class Haelften {
          public static String tauscheHaelften(String s) {
              return s; // TODO
          }
      }
    musterloesung: |
      public class Haelften {
          public static String tauscheHaelften(String s) {
              int mitte = s.length() / 2;
              return s.substring(mitte) + s.substring(0, mitte);
          }
      }
    tests:
      - { aufruf: "tauscheHaelften(\"abcdef\")", erwartet: "\"defabc\"" }
      - { aufruf: "tauscheHaelften(\"abcde\")", erwartet: "\"cdeab\"" }
      - { aufruf: "tauscheHaelften(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "tauscheHaelften(\"x\")", erwartet: "\"x\"", versteckt: true }
      - { aufruf: "tauscheHaelften(\"Informatik\")", erwartet: "\"matikInfor\"", versteckt: true }
    regeln: { erlaubteApi: ["String.length", "String.substring"] }
    fehler:
      - { wert: 2, meldung: "Bei ungerader Länge soll die hintere Hälfte länger sein. Mit `s.length() / 2` als Trennstelle ist die vordere Hälfte die kürzere." }
      - { wert: "erlaubteApi", meldung: "Hier sind nur `length` und `substring` erlaubt." }
hinweise:
  - Die Trennstelle ist `s.length() / 2`. Bei Länge 5 ist das 2 (Ganzzahldivision).
  - '`s.substring(mitte)` ist die hintere Hälfte, `s.substring(0, mitte)` die vordere.'
loesung: |
  **Ansatz:** Die Trennstelle mit Ganzzahldivision bestimmen und die beiden Teilstrings in umgekehrter Reihenfolge verketten.
  ---
  `int mitte = s.length() / 2;` Für `"abcde"` ist das 2. Die vordere Hälfte `ab` ist dann die kürzere, wie verlangt.
  ---
  `s.substring(mitte)` ist `cde`, `s.substring(0, mitte)` ist `ab`.
  ---
  ```java
  int mitte = s.length() / 2;
  return s.substring(mitte) + s.substring(0, mitte);
  ```
  Probe mit `""`: `mitte = 0`, beide Teilstrings sind leer, Ergebnis `""`.
```

## Vergleiche, boolean und die Klasse Math

```aufgabe
id: au-mat-check-typ
titel: Welcher Typ passt zu ja oder nein?
niveau: 1
art: check
angabe: |
  Welcher Datentyp speichert genau die Werte `true` und `false`? (Datentypen: [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale))
teile:
  - typ: auswahl
    optionen: ['`int`', '`boolean`', '`String`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In Java sind `true` und `false` keine Zahlen. `int b = true;` übersetzt nicht.
      - wert: 2
        meldung: '`"true"` in Anführungszeichen wäre ein Text. Der Wahrheitswert `true` hat seinen eigenen Typ.'
loesung: |
  `true` und `false` sind die beiden Werte des Typs `boolean`.
  ---
  Sie stehen ohne Anführungszeichen und sind keine Zahlen.
```

Programme müssen Entscheidungen treffen: Ist der Betrag größer als das Guthaben? Ist die Zahl gerade? Die Antwort auf
solche Fragen ist ein **Wahrheitswert**. In diesem Abschnitt lernst du, wie man ihn ausrechnet. Verwenden wirst du ihn
ab [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung) in `if`-Anweisungen. Außerdem lernst du die Klasse `Math` kennen. Sie
liefert Wurzeln, Potenzen, Beträge und Rundungen, die du nicht selbst programmieren musst.

### Vergleichsoperatoren und boolean

:::definition[Vergleich und boolean]
Ein **Vergleich** liefert einen Wert vom Typ **`boolean`**, also `true` (wahr) oder `false` (falsch). Java kennt sechs
Vergleichsoperatoren:

- `a == b`: gleich. Achtung, zwei Gleichheitszeichen.
- `a != b`: ungleich.
- `a < b` und `a > b`: kleiner und größer.
- `a <= b` und `a >= b`: kleiner oder gleich, größer oder gleich.

Vergleiche haben **niedrigeren Vorrang** als alle Rechenoperatoren. In `a == b + 4` wird also zuerst `b + 4`
gerechnet. Bei verschiedenen Zahlentypen gilt die Typregel: In `5 == 5.0` wird `5` zu `5.0`, das Ergebnis ist `true`.
:::

Ein **Beispiel**: Mit `int a = 7, b = 3;` ist `a > b` gleich `true` und `a % 2 != 0` gleich `true` (7 ist ungerade).
Den Wert kann man speichern und ausgeben: `boolean gross = a >= 10;` legt `false` in `gross`.

**Nichtbeispiele:** `1 < x < 9` übersetzt nicht. Java rechnet zuerst `1 < x` und erhält einen `boolean`. Danach
müsste es `true < 9` vergleichen, und das geht nicht. Für „zwischen“ brauchst du zwei Vergleiche, verbunden mit `&&`
(„und“). Das lernst du in [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht). Ebenso falsch ist `a = b` als Vergleich. Ein
einzelnes `=` ist eine Zuweisung.

:::beispiel[Vergleiche auswerten]
Mit `int x = 12, y = 5;`:

1. `x > y`: 12 ist größer als 5, also `true`.
2. `x % y == 2`: Zuerst `x % y` (Rechnung vor Vergleich). Das ist 2, und `2 == 2` ist `true`.
3. `x / y == 2.4`: `x / y` ist eine Ganzzahldivision und ergibt `2`. Dann wird `2` mit `2.4` verglichen. Das ist `false`.
4. `'B' > 'a'`: `'B'` hat die Nummer 66, `'a'` die Nummer 97. 66 ist nicht größer, also `false`.

Mit `println` erscheinen die Werte als `true` und `false`.
:::

:::achtung[= statt == im Vergleich]
```java
int x = 10;
System.out.println(x = 5);    // erwartet: false   tatsächlich: 5
```
Ein einzelnes `=` vergleicht nicht. Es weist `x` den Wert 5 zu, und der Ausdruck hat dann den Wert 5. Darum erscheint
`5`, und `x` ist danach verändert. Gemeint war `x == 5`, das hätte `false` ergeben. In `if (x = 5)` meldet der
Compiler immerhin einen Fehler, weil dort ein `boolean` verlangt ist.
:::

### Die Klasse Math

`Math` ist eine Sammlung fertiger Rechenmethoden. Man ruft sie mit dem Klassennamen auf: `Math.sqrt(16)`. Die
folgenden kommen in EP1 vor. Achte vor allem auf den **Rückgabetyp**, also den Typ des Ergebnisses.

| Methode | Bedeutung | Beispiel |
|---|---|---|
| `Math.abs(x)` | Betrag, Typ wie `x`. | `Math.abs(-4)` ist `4`. |
| `Math.max(a, b)`, `Math.min(a, b)` | größerer, kleinerer Wert. | `Math.max(3, 9)` ist `9`. |
| `Math.pow(a, b)` | a hoch b, immer `double`. | `Math.pow(2, 10)` ist `1024.0`. |
| `Math.sqrt(x)` | Quadratwurzel, immer `double`. | `Math.sqrt(49)` ist `7.0`. |
| `Math.round(x)` | auf die nächste ganze Zahl runden, bei `double` ein `long`. | `Math.round(3.5)` ist `4`. |
| `Math.floor(x)`, `Math.ceil(x)` | ab- und aufrunden, als `double`. | `Math.floor(2.7)` ist `2.0`. |
| `Math.PI` | die Kreiszahl π (keine Methode, ohne Klammern). | `3.141592653589793`. |

`Math.round` rundet bei `.5` immer **nach oben**, also in Richtung größerer Zahlen. Darum ist `Math.round(-3.5)` gleich
`-3`, nicht `-4`. Das ist ein Unterschied zum kaufmännischen Runden aus der Schule, das −3,5 auf −4 rundet. Bei
positiven Zahlen stimmen beide überein.

:::beispiel[Kreisfläche auf zwei Nachkommastellen]
Ein Kreis hat den Radius 2 cm. Wir berechnen die Fläche und runden auf zwei Nachkommastellen.

```java
double r = 2.0;
double flaeche = Math.PI * r * r;
System.out.println(flaeche);
System.out.println(Math.round(flaeche * 100) / 100.0);
```

1. `Math.PI * r * r` ist 3,14159… · 4. Die Ausgabe ist `12.566370614359172` (in cm²).
2. Zum Runden auf zwei Stellen schiebt man das Komma: `flaeche * 100` ist `1256.637…`.
3. `Math.round(1256.637…)` rundet auf die ganze Zahl `1257` (Typ `long`).
4. Teilen durch `100.0` schiebt das Komma zurück: `12.57`. Mit `/ 100` (ohne `.0`) wäre es eine Ganzzahldivision, und es käme `12` heraus.
:::

:::beispiel[Abstand zweier Punkte]
Wie weit liegen die Punkte (1 | 2) und (4 | 6) auseinander? Nach Pythagoras ist der Abstand die Wurzel aus der Summe
der Quadrate der Unterschiede.

```java
int x1 = 1, y1 = 2, x2 = 4, y2 = 6;
double d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
System.out.println(d);
```

1. `x2 - x1` ist 3, und `Math.pow(3, 2)` ist `9.0`.
2. `y2 - y1` ist 4, und `Math.pow(4, 2)` ist `16.0`.
3. `Math.sqrt(25.0)` ist `5.0`. Die Ausgabe ist `5.0`, mit Punkt, weil `sqrt` immer `double` liefert.
:::

:::achtung[Math.pow liefert keinen int]
```java
int flaeche = Math.pow(4, 2);     // Compilerfehler
int gerundet = Math.round(2.7);   // Compilerfehler
```
`Math.pow` liefert immer `double`, auch bei ganzen Zahlen. Und `Math.round` liefert für einen `double` einen `long`.
Beides passt nicht ohne Cast in einen `int`. Richtig ist `int flaeche = (int) Math.pow(4, 2);` und
`long gerundet = Math.round(2.7);`. Für einfache Quadrate ist `4 * 4` ohnehin klarer.
:::

:::merke[Rezept: Auf n Nachkommastellen runden]
1. Mit 10 hoch n multiplizieren (für zwei Stellen mit 100), damit die gewünschten Stellen vor dem Komma stehen.
2. `Math.round(…)` rundet auf eine ganze Zahl.
3. Durch `100.0` (nicht `100`) teilen, damit eine Kommazahl herauskommt.
:::

```aufgabe
id: au-mat-vergleiche
titel: Vergleiche ausgeben
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int m = 17, n = 4;
      System.out.println(m > n);
      System.out.println(m % n == 1);
      System.out.println(m / n == 4.25);
      System.out.println('b' < 'C');
      System.out.println(m - 1 == n * n);
    loesung: |
      true
      true
      false
      false
      true
    fehler:
      - wert: "true\ntrue\ntrue\nfalse\ntrue"
        meldung: '`m / n` ist eine Ganzzahldivision und ergibt 4. Erst danach wird mit `4.25` verglichen.'
      - wert: "true\ntrue\nfalse\ntrue\ntrue"
        meldung: Großbuchstaben haben kleinere Nummern als Kleinbuchstaben. `'b'` ist 98, `'C'` ist 67.
hinweise:
  - Rechenoperatoren werden vor dem Vergleich ausgewertet.
  - 'Zeichen werden über ihre Nummern verglichen: `''C''` = 67, `''b''` = 98.'
loesung: |
  **Ansatz:** In jeder Zeile zuerst rechnen, dann vergleichen.
  ---
  `17 > 4` ist `true`. `17 % 4 = 1`, also `true`. `17 / 4 = 4`, und `4 == 4.25` ist `false`.
  ---
  `98 < 67` ist `false`. `16 == 16` ist `true`.
```

```aufgabe
id: au-mat-ausgabe
titel: Ergebnisse von Math-Methoden
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(Math.abs(-9));
      System.out.println(Math.max(4, 11));
      System.out.println(Math.pow(3, 3));
      System.out.println(Math.sqrt(81));
      System.out.println(Math.round(4.5));
    loesung: |
      9
      11
      27.0
      9.0
      5
    fehler:
      - wert: "9\n11\n27\n9\n5"
        meldung: '`Math.pow` und `Math.sqrt` liefern immer einen `double`. Er wird mit `.0` ausgegeben.'
      - wert: "9\n11\n27.0\n9.0\n5.0"
        meldung: '`Math.round` liefert eine ganze Zahl (`long`). Sie erscheint ohne `.0`.'
hinweise:
  - 'Achte auf den Rückgabetyp: `abs` und `max` behalten den Typ der Argumente, `pow` und `sqrt` liefern `double`, `round` liefert `long`.'
loesung: |
  **Ansatz:** Wert und Rückgabetyp jeder Methode bestimmen.
  ---
  `abs(-9) = 9`, `max(4, 11) = 11` (beide `int`). `pow(3, 3) = 27.0`, `sqrt(81) = 9.0` (beide `double`).
  ---
  `round(4.5)` rundet `.5` nach oben: `5` (ein `long`, ohne Komma).
```

```aufgabe
id: au-mat-zeilen
titel: Rückgabetypen beachten
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Es gilt `int x = 4;`. Markiere alle Zeilen, die der Compiler **nicht** übersetzt.
teile:
  - typ: zeilen
    code: |
      int potenz = Math.pow(2, 4);
      double wurzel = Math.sqrt(16);
      int gerundet = Math.round(3.7);
      long gerundet2 = Math.round(3.7);
      boolean klein = x < 5;
      boolean dazwischen = 1 < x < 9;
      int groesser = Math.max(3, x);
    loesung: [1, 3, 6]
    fehler:
      - wert: [1, 6]
        meldung: '`Math.round` mit einem `double` liefert einen `long`. Ein `long` passt nicht ohne Cast in einen `int`.'
      - wert: [1, 3]
        meldung: '`1 < x < 9` wird als `(1 < x) < 9` gelesen. Das wäre `true < 9`, und das ist kein gültiger Vergleich.'
hinweise:
  - Bestimme für jede rechte Seite den Typ. `pow` und `sqrt` liefern `double`, `round` liefert bei `double` einen `long`.
  - Ein Vergleich liefert `boolean`. Was passiert, wenn man zwei Vergleiche ohne Verknüpfung hintereinander schreibt?
loesung: |
  **Ansatz:** Den Rückgabetyp jeder Methode und jedes Vergleichs mit dem Typ links vergleichen.
  ---
  Zeile 1: `double` in `int` geht nicht. Zeile 3: `long` in `int` geht nicht.
  ---
  Zeile 6: `(1 < x)` ist `boolean`, und `boolean < 9` gibt es nicht. Zeilen 2, 4, 5 und 7 sind korrekt.
```

```aufgabe
id: au-mat-runden
titel: Runden, abschneiden, abrunden
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      double preis = 7.4567;
      System.out.println(Math.round(preis * 100) / 100.0);
      System.out.println((int) (preis * 100) / 100.0);
      System.out.println(Math.round(preis));
      System.out.println(Math.round(-2.5));
      System.out.println(Math.floor(-2.5));
    loesung: |
      7.46
      7.45
      7
      -2
      -3.0
    fehler:
      - wert: "7.46\n7.46\n7\n-2\n-3.0"
        meldung: '`(int)` schneidet ab, statt zu runden. 745,67 wird zu 745.'
      - wert: "7.46\n7.45\n7\n-3\n-3.0"
        meldung: '`Math.round` rundet `.5` immer in Richtung der größeren Zahl. Von −2,5 aus ist das −2.'
      - wert: "7.46\n7.45\n7\n-2\n-2.0"
        meldung: '`Math.floor` rundet immer ab, also in Richtung kleinerer Zahlen. Von −2,5 aus ist das −3.'
hinweise:
  - '`preis * 100` ist 745,67. Unterscheide runden (`Math.round`) und abschneiden (`(int)`).'
  - '`Math.round` geht bei `.5` nach oben, `Math.floor` geht immer nach unten.'
gefuehrt:
  - text: Was ergibt `Math.round(745.67)`?
    teil: { typ: zahl, loesung: "746" }
    erklaerung: 745,67 liegt näher bei 746. Geteilt durch `100.0` ergibt das `7.46`.
  - text: Was ergibt `(int) 745.67`?
    teil: { typ: zahl, loesung: "745" }
    erklaerung: Der Cast schneidet ab. Geteilt durch `100.0` ergibt das `7.45`.
  - text: Was ergibt `Math.round(-2.5)`?
    teil: { typ: zahl, loesung: "-2" }
    erklaerung: Bei `.5` rundet `Math.round` in Richtung der größeren Zahl. −2 ist größer als −3.
  - text: Was gibt `Math.floor(-2.5)` aus?
    teil:
      typ: auswahl
      optionen: ['`-2.0`', '`-3.0`', '`-3`']
      richtig: [1]
    erklaerung: '`floor` rundet immer ab, also auf −3, und liefert einen `double`.'
loesung: |
  **Ansatz:** Für jede Zeile die Rundungsart bestimmen: runden, abschneiden oder abrunden.
  ---
  `Math.round(745.67) = 746`, geteilt durch `100.0` ist `7.46`. `(int) 745.67 = 745`, also `7.45`.
  ---
  `Math.round(7.4567) = 7`. `Math.round(-2.5) = -2` (nach oben).
  ---
  `Math.floor(-2.5) = -3.0` (nach unten, als `double`).
```

```aufgabe
id: au-mat-begrenzen
titel: Einen Wert begrenzen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Prozentwert `wert` soll auf den Bereich von 0 bis 100 begrenzt werden. Aus −15 wird 0, aus 130 wird 100, und
  57 bleibt 57. Fülle die beiden Lücken mit `max` oder `min`.
teile:
  - typ: lueckentext
    code: |
      int wert = 130;
      int begrenzt = Math.___(Math.___(wert, 0), 100);
      System.out.println(begrenzt);
    luecken: [["min"], ["max"]]
    fehler:
      - wert: ["max", "min"]
        meldung: |
          `Math.min(wert, 0)` liefert für jeden positiven Wert 0. Für die untere Grenze brauchst du den
          **größeren** Wert von `wert` und 0, also `max`.
hinweise:
  - Die innere Methode soll negative Werte auf 0 anheben. Welche liefert von `wert` und 0 den größeren?
  - Die äußere soll alles über 100 auf 100 senken. Welche liefert von zwei Werten den kleineren?
loesung: |
  **Ansatz:** Zuerst die untere Grenze, dann die obere.
  ---
  `Math.max(wert, 0)` hebt negative Werte auf 0 an. Für −15 ergibt das 0.
  ---
  `Math.min(…, 100)` senkt Werte über 100 auf 100. Für 130 ergibt das 100. Probe mit 57: `max(57, 0) = 57`, `min(57, 100) = 57`.
```

```aufgabe
id: au-mat-runde-code
titel: Auf beliebig viele Stellen runden
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Schreibe den Rumpf von `runde`. Die Methode rundet `x` mit `Math.round` auf `stellen` Nachkommastellen
  (`0 ≤ stellen ≤ 6`). Beispiele: `runde(3.14159, 2)` ist `3.14`, `runde(12.3456, 3)` ist `12.346` und
  `runde(2.5, 0)` ist `3.0`.

  Die Zeile mit `public static double runde(double x, int stellen)` bleibt unverändert.
teile:
  - typ: code
    vorlage: |
      public class Runden {
          public static double runde(double x, int stellen) {
              return x; // TODO
          }
      }
    musterloesung: |
      public class Runden {
          public static double runde(double x, int stellen) {
              double faktor = Math.pow(10, stellen);
              return Math.round(x * faktor) / faktor;
          }
      }
    tests:
      - { aufruf: "runde(3.14159, 2)", erwartet: "3.14" }
      - { aufruf: "runde(12.3456, 3)", erwartet: "12.346" }
      - { aufruf: "runde(2.5, 0)", erwartet: "3.0" }
      - { aufruf: "runde(-1.25, 1)", erwartet: "-1.2", versteckt: true, beschreibung: "negativer Wert mit .5 an der Rundungsstelle" }
      - { aufruf: "runde(7.0, 4)", erwartet: "7.0", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Erhältst du `3.0`? Dann teilst du vermutlich ganzzahlig oder rundest vor dem Multiplizieren. Erst mit 10 hoch `stellen` multiplizieren, dann runden, dann wieder teilen." }
hinweise:
  - Der Faktor ist 10 hoch `stellen`. Den liefert `Math.pow(10, stellen)` als `double`.
  - '`Math.round(x * faktor)` ist ein `long`. Teilst du ihn durch den `double` `faktor`, entsteht wieder eine Kommazahl.'
loesung: |
  **Ansatz:** Das Rezept „Auf n Nachkommastellen runden“ mit dem Faktor 10 hoch `stellen` statt fest 100.
  ---
  `double faktor = Math.pow(10, stellen);` Für 2 Stellen ist das `100.0`.
  ---
  `Math.round(x * faktor)` rundet auf eine ganze Zahl. Für 3,14159 ist das `Math.round(314.159) = 314`.
  ---
  ```java
  double faktor = Math.pow(10, stellen);
  return Math.round(x * faktor) / faktor;
  ```
  `314 / 100.0 = 3.14`. Weil `faktor` ein `double` ist, findet keine Ganzzahldivision statt.
  Probe mit −1,25 und einer Stelle: `Math.round(-12.5) = -12`, also `-1.2` (bei `.5` geht `round` nach oben).
```

```aufgabe
id: au-mat-abstand
titel: Abstand und Vergleich
niveau: 3
lernziel: 7
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int x1 = 2, y1 = -1, x2 = 7, y2 = 11;
      double d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      System.out.println(d);
      System.out.println(d > 12);
      System.out.println(Math.abs(x1 - x2) + Math.max(y1, y2));
      System.out.println((int) Math.sqrt(50) + " " + Math.round(Math.sqrt(50)));
    loesung: |
      13.0
      true
      16
      7 7
    fehler:
      - wert: "13\ntrue\n16\n7 7"
        meldung: '`Math.sqrt` liefert immer einen `double`. Auch 13 wird darum als `13.0` ausgegeben.'
      - wert: "13.0\ntrue\n6\n7 7"
        meldung: '`Math.abs(2 - 7)` ist der Betrag von −5, also 5. Dazu kommt `Math.max(-1, 11) = 11`.'
      - wert: "13.0\ntrue\n16\n7 8"
        meldung: Die Wurzel aus 50 ist etwa 7,07. Gerundet ist das 7, nicht 8.
hinweise:
  - 'Die Unterschiede sind 5 und 12. 5² + 12² = 169.'
  - 'Wurzel aus 50 ist etwa 7,07. `(int)` schneidet ab, `Math.round` rundet.'
loesung: |
  **Ansatz:** Zuerst die Unterschiede, dann Pythagoras, dann die Vergleiche.
  ---
  `x2 - x1 = 5`, `y2 - y1 = 12`. `25.0 + 144.0 = 169.0`, die Wurzel ist `13.0`. Und `13.0 > 12` ist `true`.
  ---
  `Math.abs(-5) + Math.max(-1, 11) = 5 + 11 = 16`.
  ---
  Die Wurzel aus 50 ist etwa 7,07. `(int)` liefert 7, `Math.round` liefert ebenfalls 7. Die Verkettung ergibt `7 7`.
```

```reflexion
frage: Warum liefert `Math.pow` immer einen double, selbst bei `Math.pow(2, 3)`?
antwort: |
  Weil `Math.pow` auch Potenzen wie `Math.pow(2, 0.5)` (die Wurzel aus 2) oder `Math.pow(2, -1)` (also 0,5) berechnen
  muss. Deren Ergebnisse sind keine ganzen Zahlen. Eine Methode hat in Java genau einen Rückgabetyp, und nur `double`
  passt für alle Fälle. Darum musst du bei ganzzahligen Potenzen selbst casten oder einfach multiplizieren.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben bunt gemischt, auch mit Stoff aus [Kapitel 1](/lernen/ep1/werkzeuge). Das ist
Absicht: Im Quiz steht nicht dabei, welcher Abschnitt gemeint ist. Bei den ersten beiden Aufgaben rechnest du nichts
aus. Du entscheidest nur, welches Werkzeug passt. Genau diese Entscheidung ist oft der schwerste Schritt.

```aufgabe
id: au-mix-werkzeug
titel: Welche Operation passt?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe das passende Werkzeug zu. Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: a) Wie viele volle Zwölferkartons füllen `n` Flaschen?
    optionen: ['`n / 12`', '`n % 12`', '`n / 12.0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`%` liefert die Flaschen, die **übrig** bleiben, nicht die Zahl der vollen Kartons.'
      - wert: 2
        meldung: Mit `12.0` erhältst du eine Kommazahl wie 4,5. Volle Kartons zählt die Ganzzahldivision.
  - typ: auswahl
    label: b) Haben zwei Strings `s` und `t` denselben Inhalt?
    optionen: ['`s == t`', '`s.equals(t)`', '`s.length() == t.length()`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`==` prüft bei Strings nur, ob es dasselbe Objekt ist, nicht ob die Zeichen gleich sind.'
      - wert: 2
        meldung: Gleiche Länge heißt noch nicht gleicher Inhalt, zum Beispiel `"Tor"` und `"Rot"`.
  - typ: auswahl
    label: c) Welchen Zahlenwert hat das Ziffernzeichen in `char z`?
    optionen: ['`(int) z`', '`z - ''0''`', '`z + 0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`(int) z` liefert die Unicode-Nummer, für `''7''` also 55, nicht 7.'
      - wert: 2
        meldung: '`z + 0` ist ebenfalls die Unicode-Nummer. Du musst die Nummer von `''0''` abziehen.'
hinweise:
  - 'Frag dich jeweils: Geht es um volle Gruppen, um Inhalte oder um Zeichennummern?'
  - '`/` zählt Gruppen, `equals` vergleicht Inhalte, `- ''0''` macht aus einer Ziffer ihren Wert.'
loesung: |
  **Ansatz:** Für jede Frage klären, welche Art von Ergebnis gesucht ist.
  ---
  a) Volle Gruppen zählt die Ganzzahldivision `n / 12`.
  ---
  b) Inhalte vergleicht `equals`. c) Den Ziffernwert liefert `z - '0'`.
```

```aufgabe
id: au-mix-verfahren
titel: Welcher Ausdruck rechnet richtig?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Wähle jeweils den Ausdruck, der das Verlangte liefert. Du musst nichts ausrechnen.
  Gegeben sind `int summe, anzahl;` und `double betrag;`.
teile:
  - typ: auswahl
    label: a) der Durchschnitt `summe` durch `anzahl` mit Nachkommastellen
    optionen: ['`(double) (summe / anzahl)`', '`(double) summe / anzahl`', '`summe / anzahl`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Klammer lässt zuerst ganzzahlig teilen. Der Cast kommt zu spät.
      - wert: 2
        meldung: Zwei `int` ergeben eine Ganzzahldivision.
  - typ: auswahl
    label: b) `betrag` (positiv) auf Cent gerundet, nicht abgeschnitten
    optionen: ['`(int) (betrag * 100) / 100.0`', '`Math.round(betrag * 100) / 100`', '`Math.round(betrag * 100) / 100.0`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '`(int)` schneidet ab, statt zu runden.'
      - wert: 1
        meldung: '`Math.round` liefert einen `long`. Geteilt durch `100` ist das eine Ganzzahldivision, die Cents gehen verloren.'
hinweise:
  - Achte darauf, an welcher Stelle eine Ganzzahldivision passieren kann.
  - Ein Cast wirkt nur auf den Wert direkt dahinter. `(int)` rundet nicht.
loesung: |
  **Ansatz:** In jeder Option nach Ganzzahldivision und Abschneiden suchen.
  ---
  a) Nur `(double) summe / anzahl` castet vor der Division.
  ---
  b) Nur `Math.round(betrag * 100) / 100.0` rundet und teilt dann mit Nachkommastellen.
```

```aufgabe
id: au-mix-geruest
titel: Das Programmgerüst
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ergänze das Gerüst so, dass das Programm `Hi` ausgibt und danach eine neue Zeile beginnt.
  (Wiederholung: [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile))
teile:
  - typ: lueckentext
    code: |
      public class Hallo {
          public static void ___(String[] args) {
              System.out.___("Hi");
          }
      }
    luecken: [["main"], ["println"]]
    fehler:
      - wert: ["main", "print"]
        meldung: '`print` beginnt danach keine neue Zeile. Verlangt ist aber ein Zeilenumbruch.'
hinweise:
  - Die Methode, bei der jedes Programm beginnt, hat einen festen Namen.
loesung: |
  **Ansatz:** Ein ausführbares Programm braucht die Methode `main`.
  ---
  `public static void main(String[] args)` ist der Startpunkt. `System.out.println("Hi")` schreibt `Hi` und beginnt eine neue Zeile.
```

```aufgabe
id: au-mix-fehlerart
titel: Compilerfehler oder Laufzeitfehler?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen. Ein **Compilerfehler** verhindert das Übersetzen. Ein **Laufzeitfehler** tritt erst beim
  Ausführen auf. (Wiederholung: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein fehlender Strichpunkt ist ein Compilerfehler.
        richtig: true
      - text: "`System.out.println(10 / 0);` wird vom Compiler abgelehnt."
        richtig: false
        erklaerung: Der Compiler übersetzt es. Erst beim Ausführen entsteht eine `ArithmeticException`.
      - text: "`\"abc\".charAt(3)` führt zu einem Laufzeitfehler."
        richtig: true
        erklaerung: "Der größte Index ist 2. Beim Ausführen kommt eine `StringIndexOutOfBoundsException`."
      - text: "`int x = 2.5;` ist ein Laufzeitfehler."
        richtig: false
        erklaerung: Das ist ein Compilerfehler (`possible lossy conversion from double to int`).
    fehler:
      - wert: [r, r, r, f]
        meldung: Der Compiler prüft vor allem Typen und Schreibweise. Eine Division durch 0 meldet er nicht, sie fällt erst beim Ausführen auf.
      - wert: [r, f, r, r]
        meldung: Typfehler wie `double` in `int` findet schon der Compiler. Das Programm startet dann gar nicht.
hinweise:
  - Der Compiler prüft Schreibweise und Typen. Ob ein Teiler 0 ist oder ein Index zu groß, merkt erst das laufende Programm.
  - Gehe jede Zeile durch und frage dich, ob man den Fehler schon ohne Ausführen erkennen kann.
loesung: |
  **Ansatz:** Typen und Syntax prüft der Compiler, Werte erst die Ausführung.
  ---
  1 richtig (Syntax). 2 falsch (Division durch 0 ist ein Laufzeitfehler).
  ---
  3 richtig (falscher Index zur Laufzeit). 4 falsch (Typfehler, Compilerfehler).
```

```aufgabe
id: au-mix-print
titel: print, println und Verkettung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Achte auf die Zeilenumbrüche. (`print` und `println`: [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println))
teile:
  - typ: ausgabe
    code: |
      System.out.print(1 + 2);
      System.out.print(" ");
      System.out.println("1" + 2);
      System.out.print('1' + 2);
      System.out.println();
    loesung: |
      3 12
      51
    fehler:
      - wert: "3 12\n12"
        meldung: '`''1''` ist ein `char` mit der Nummer 49. Ohne String wird gerechnet: 49 + 2 = 51.'
      - wert: "3\n \n12\n51"
        meldung: '`print` beginnt keine neue Zeile. Die ersten drei Ausgaben stehen in derselben Zeile.'
hinweise:
  - Nur `println` beginnt eine neue Zeile.
  - '`"1"` ist ein String, `''1''` ein Zeichen mit der Nummer 49.'
loesung: |
  **Ansatz:** Zeilenumbrüche und Verkettung getrennt betrachten.
  ---
  `print(3)`, `print(" ")` und `println("12")` stehen in einer Zeile: `3 12`.
  ---
  `'1' + 2` ist 49 + 2 = `51`. Das letzte `println()` beendet die Zeile.
```

```aufgabe
id: au-mix-kommentar
titel: Kommentare und gemischte Typen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 7; // a = 8;
      /* a = 9; */
      System.out.println(a / 2 * 2.0 + a % 3);
    loesung: |
      7.0
    fehler:
      - wert: "10.0"
        meldung: '`a = 8;` steht hinter `//` und ist Kommentar. `a` bleibt 7.'
      - wert: "8.0"
        meldung: '`a = 9;` steht zwischen `/*` und `*/` und ist Kommentar. `a` bleibt 7.'
      - wert: "7"
        meldung: In der Rechnung kommt `2.0` vor. Ab dort ist das Ergebnis ein `double` und erscheint mit `.0`.
hinweise:
  - Kommentare zählen nicht. `a` ist 7.
  - '`7 / 2` ist zuerst eine Ganzzahldivision.'
loesung: |
  **Ansatz:** Kommentare streichen, dann von links nach rechts mit Typen rechnen.
  ---
  `7 / 2 = 3` (int), `3 * 2.0 = 6.0` (double), `7 % 3 = 1`.
  ---
  `6.0 + 1 = 7.0`.
```

```aufgabe
id: au-mix-java
titel: Ein Wort, viele Typen
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (`'v'` hat die Nummer 118.)
teile:
  - typ: ausgabe
    code: |
      String s = "Java";
      int n = s.length();
      char c = s.charAt(n / 2);
      System.out.println(c + n);
      System.out.println("" + c + n);
      System.out.println(s.substring(1, n - 1) + (char) (c + 1));
    loesung: |
      122
      v4
      avw
    fehler:
      - wert: "v4\nv4\navw"
        meldung: '`c + n` ist `char` plus `int` ohne String. Das Zeichen wird zur Nummer 118.'
      - wert: "122\nv4\navaw"
        meldung: '`substring(1, 3)` endet vor Index 3. Das sind nur die Zeichen `a` und `v`.'
hinweise:
  - '`n` ist 4, also ist `n / 2` gleich 2. Welches Zeichen steht in `"Java"` an Index 2?'
  - Unterscheide Rechnung (ohne String) und Verkettung (mit String).
loesung: |
  **Ansatz:** Zuerst `n` und `c` bestimmen, dann jede Ausgabe mit der Verkettungsregel.
  ---
  `n = 4`, `c = s.charAt(2) = 'v'`.
  ---
  `c + n = 118 + 4 = 122`. `"" + c + n = "v4"`.
  ---
  `s.substring(1, 3) = "av"`, `(char) (118 + 1) = 'w'`, zusammen `avw`.
```

```aufgabe
id: au-mix-trace
titel: Casts in einer Tabelle
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Verfolge die Variablen. Trage `d` mit Nachkommastelle ein, zum Beispiel `3.0`, und `c` als Zeichen.

  ```java
  int i = 7;
  double d = i / 2;
  i = (int) (d * 3.5);
  char c = (char) ('a' + i % 26);
  ```
teile:
  - typ: trace
    spalten: [i, d, c]
    zeilen: [nach Zeile 1, nach Zeile 2, nach Zeile 3, nach Zeile 4]
    vorgabe: 1
    loesung: [[7, "-", "-"], [7, 3.0, "-"], [10, 3.0, "-"], [10, 3.0, "k"]]
    fehler:
      - wert: ["7", "-", "-", "7", "3.5", "-", "12", "3.5", "-", "12", "3.5", "m"]
        meldung: '`i / 2` ist eine Ganzzahldivision. `d` bekommt 3, gespeichert als 3.0.'
      - wert: ["7", "-", "-", "7", "3.0", "-", "11", "3.0", "-", "11", "3.0", "l"]
        meldung: '`(int) 10.5` schneidet ab und rundet nicht. Es ergibt 10.'
hinweise:
  - '`7 / 2` mit zwei `int` ergibt 3.'
  - '`3.0 * 3.5 = 10.5`, abgeschnitten 10. Dann `''a'' + 10`.'
loesung: |
  **Ansatz:** Jede Zeile mit Typen auswerten.
  ---
  Zeile 2: `7 / 2 = 3`, also `d = 3.0`.
  ---
  Zeile 3: `3.0 * 3.5 = 10.5`, `(int) 10.5 = 10`.
  ---
  Zeile 4: `10 % 26 = 10`, `'a' + 10 = 107`, das ist `k`.
```

```aufgabe
id: au-mix-fehler-zeilen
titel: Fehler in einem kleinen Programm
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Markiere alle Zeilen, die der Compiler **nicht** übersetzt. (Grundregeln der Schreibweise: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))
teile:
  - typ: zeilen
    code: |
      public class Rechner {
          public static void main(String[] args) {
              int anzahl = 3
              double preis = 2.5;
              system.out.println(anzahl * preis);
              String text = "Summe: " + anzahl * preis;
              System.out.println(text);
          }
      }
    loesung: [3, 5]
    fehler:
      - wert: [3]
        meldung: Java unterscheidet Groß- und Kleinschreibung. `system` ist nicht dasselbe wie `System`.
      - wert: [3, 5, 6]
        meldung: '`"Summe: " + anzahl * preis` ist korrekt. Zuerst wird `3 * 2.5 = 7.5` gerechnet, dann angehängt.'
hinweise:
  - Prüfe jede Zeile auf Strichpunkt und auf korrekte Groß- und Kleinschreibung.
  - Vergleiche Zeile 5 mit Zeile 7.
loesung: |
  **Ansatz:** Zeile für Zeile Syntax und Schreibweise prüfen.
  ---
  Zeile 3: Der Strichpunkt fehlt. Zeile 5: `system` muss `System` heißen.
  ---
  Zeile 6 ist korrekt. Punkt vor Strich: Erst `7.5`, dann die Verkettung `"Summe: 7.5"`.
```

## Prüfungsaufgaben

Die folgenden Aufgaben haben das Niveau von Quiz und Aufgabenblatt. Die ersten fünf folgen dem Format der TUWEL-Tests
2021 (Single Choice mit drei Optionen, Richtig/Falsch mit vier Aussagen, Lückentext). Ob das Quiz 2026W genauso
aussieht, ist nicht veröffentlicht. Plane für eine Single-Choice-Frage etwa drei Minuten ein und für eine
Richtig/Falsch-Frage etwa fünf. Rechne alles auf Papier, bevor du antwortest. Die letzten beiden Aufgaben sind
Programmieraufgaben im Stil der Übungen und Blätter.

```aufgabe
id: au-pr-casts-zaehlen
titel: Quiz – implizite Typkonvertierungen
niveau: 3
punkte: 1
lernziel: 3
kompetenz: rechnen
quelle: nach TUWEL-Test zur Vorbereitung (TUWEL-Test 1) WS2021, Frage 1 (abgewandelt)
angabe: |
  (Zeitrichtwert: 3 Minuten) Sie haben folgende Anweisungen in einer Methode gegeben:

  ```java
  int a = 3;
  double b = a;
  char c = 'x';
  int d = c + a;
  float e = 2.5f;
  e = d;
  long f = (long) e;
  ```

  Wie viele implizite Typkonvertierungen werden hier durchgeführt?
teile:
  - typ: auswahl
    optionen: ['2', '3', '4']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In `c + a` treffen `char` und `int` aufeinander. Der `char` wird dabei von selbst zu `int`.
      - wert: 2
        meldung: '`(long) e` ist ein expliziter Cast und zählt nicht.'
hinweise:
  - Prüfe Zuweisungen **und** Rechnungen. Explizite Casts zählen nicht.
  - 'Kandidaten: `double b = a`, `c + a`, `e = d`.'
loesung: |
  **Ansatz:** Jede Zeile auf Typwechsel ohne Cast prüfen, bei Zuweisungen und in Rechnungen.
  ---
  `double b = a;` int zu double (1). `c + a`: char zu int (2). Das Ergebnis ist schon `int`, die Zuweisung an `d` ist typgleich.
  ---
  `e = d;` int zu float (3). `long f = (long) e;` ist explizit.
  ---
  Antwort: **3**.
```

```aufgabe
id: au-pr-zuweisung
titel: Quiz – zulässige Zuweisung
niveau: 3
punkte: 1
lernziel: 6
kompetenz: verstehen
quelle: nach TUWEL-Test zur Vorbereitung (TUWEL-Test 1) WS2021, Frage 2 (abgewandelt)
angabe: |
  (Zeitrichtwert: 2 Minuten) Sie haben folgende Deklarationen in einer Methode gegeben:

  ```java
  String t1 = "Kaffee";
  String t2 = "Tee";
  char z;
  ```

  Welche der folgenden Zuweisungen ist direkt danach zulässig?
teile:
  - typ: auswahl
    optionen:
      - '`z = t1 + t2.charAt(0);`'
      - '`z = t2.charAt(t1.length() - 4);`'
      - '`z = t1.charAt(0) + 1;`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`t1 + …` beginnt mit einem String. Das Ergebnis ist ein `String` und passt nicht in einen `char`.'
      - wert: 2
        meldung: '`charAt(0) + 1` ist eine Rechnung. Das Ergebnis ist ein `int`, und `int` passt nicht ohne Cast in `char`.'
hinweise:
  - Bestimme den Typ jeder rechten Seite.
  - 'Option 2: `t1.length() - 4` ist 2, und `t2` hat Index 2. Übersetzbar ist es auch, wenn der Index falsch wäre.'
loesung: |
  **Ansatz:** Typ der rechten Seite mit `char` vergleichen.
  ---
  Option 1 liefert einen `String`, Option 3 einen `int`. Beide passen nicht in `char`.
  ---
  Option 2 liefert `char`: `t2.charAt(2)` ist `'e'`. Der Index 6 − 4 = 2 ist auch gültig.
```

```aufgabe
id: au-pr-cast-kommentar
titel: Quiz – welcher Kommentar stimmt?
niveau: 3
punkte: 1
lernziel: 3
kompetenz: rechnen
quelle: nach TUWEL-Test 1 WS2021 (26.11.2021), Frage 2 (abgewandelt)
angabe: |
  (Zeitrichtwert: 3 Minuten) Bei jedem Programmfragment steht am Ende ein Kommentar. Welcher Kommentar ist korrekt?
teile:
  - typ: auswahl
    optionen:
      - "`float a = 4.6F, b = 7.7F; int c = (int) a + (int) b;` // c wird der Wert 12 zugewiesen."
      - "`float a = 4.6F, b = 7.7F; int c = (int) (a + b);` // c wird der Wert 12 zugewiesen."
      - "`float a = 9.5F, b = 1.9F; int c = (int) a + (int) b;` // c wird der Wert 11 zugewiesen."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Jeder Wert wird einzeln abgeschnitten, 4 + 7 = 11 und nicht 12.'
      - wert: 2
        meldung: '`(int) 9.5F` ist 9 und `(int) 1.9F` ist 1. Zusammen 10. Ein Cast rundet nicht.'
hinweise:
  - Ein Cast wirkt nur auf den Wert direkt dahinter, außer es stehen Klammern.
  - '`(int)` schneidet ab.'
loesung: |
  **Ansatz:** Bei jeder Option bestimmen, ob einzeln oder die Summe gecastet wird.
  ---
  Option 1: `4 + 7 = 11`. Option 3: `9 + 1 = 10`.
  ---
  Option 2: `(int) 12.3F = 12`. Nur dieser Kommentar stimmt.
```

```aufgabe
id: au-pr-rf-verkettung
titel: Quiz – Aussagen zu Ausdrücken
niveau: 3
punkte: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist:

  ```java
  int x = 9;
  char y = 'B';
  String z = "Z";
  ```

  Beurteile die Aussagen. (Teilpunkte: jede richtig beurteilte Aussage zählt ein Viertel.)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`x + y + z` ergibt den String `\"75Z\"`."
        richtig: true
        erklaerung: "`9 + 66 = 75`, dann `\"75Z\"`."
      - text: "`z + x + y` ergibt den String `\"Z75\"`."
        richtig: false
        erklaerung: Links steht der String. Ab dort wird angehängt, Ergebnis `"Z9B"`.
      - text: "`x / 2 + z` ergibt den String `\"4.5Z\"`."
        richtig: false
        erklaerung: "`9 / 2` ist eine Ganzzahldivision. Ergebnis `\"4Z\"`."
      - text: "`(char) (y + 1) + z` ergibt den String `\"CZ\"`."
        richtig: true
        erklaerung: "`(char) 67` ist `'C'`, dann wird `\"Z\"` angehängt."
    fehler:
      - wert: [r, r, f, r]
        meldung: Steht der String ganz links, wird jeder folgende Wert nur angehängt. `'B'` erscheint dann als Zeichen.
      - wert: [f, f, f, r]
        meldung: Vor dem ersten String wird gerechnet. `9 + 'B'` ist eine Addition mit der Nummer 66.
hinweise:
  - '`''B''` hat die Nummer 66.'
  - Von links nach rechts. Vor dem ersten String wird gerechnet, danach angehängt.
loesung: |
  **Ansatz:** Jeden Ausdruck von links nach rechts mit der Verkettungsregel auswerten.
  ---
  1: `9 + 66 = 75`, dann `"75Z"` (richtig). 2: `"Z" + 9 + 'B'` = `"Z9B"` (falsch).
  ---
  3: `9 / 2 = 4`, also `"4Z"` (falsch). 4: `(char) 67 = 'C'`, also `"CZ"` (richtig).
```

```aufgabe
id: au-pr-typen-luecke
titel: Quiz – den Typ eintragen
niveau: 3
punkte: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  (Zeitrichtwert: 4 Minuten) Trage für jede Variable **genau den Typ** der rechten Seite ein, also den Typ, den Java
  für den Ausdruck bestimmt. Erlaubt sind `int`, `long`, `double`, `char`, `boolean` und `String`.
teile:
  - typ: lueckentext
    code: |
      ___ a = 7 / 2;
      ___ b = 7 / 2.0;
      ___ c = 'A' + 1;
      ___ d = "" + 'A' + 1;
      ___ e = Math.round(2.5);
      ___ f = 3 < 2;
    luecken: [["int"], ["double"], ["int"], ["String"], ["long"], ["boolean"]]
    fehler:
      - wert: ["int", "double", "char", "String", "long", "boolean"]
        meldung: '`''A'' + 1` ist eine Rechnung. Der `char` wird zu `int`, und das Ergebnis ist `int`, kein `char`.'
      - wert: ["int", "double", "int", "String", "int", "boolean"]
        meldung: '`Math.round` mit einem `double`-Argument liefert einen `long`.'
hinweise:
  - Typregel für Rechnungen, Verkettungsregel für `+` mit String, Rückgabetyp von `Math.round`.
  - 'Ein Vergleich liefert immer `boolean`.'
loesung: |
  **Ansatz:** Für jede rechte Seite den Typ nach den Regeln des Kapitels bestimmen.
  ---
  `7 / 2` ist `int`, `7 / 2.0` ist `double`, `'A' + 1` ist `int`.
  ---
  `"" + 'A' + 1` ist `String` (`"A1"`). `Math.round(2.5)` ist `long`. `3 < 2` ist `boolean`.
```

```aufgabe
id: au-pr-wechselgeld
titel: Übung – Wechselgeld im Ristorante
niveau: 3
punkte: 5
lernziel: 7
kompetenz: modellieren
quelle: nach Übung 1 WS2021, Aufgabe 4 (abgewandelt)
angabe: |
  (Zeitrichtwert: 15 Minuten) Im Ristorante wird Wechselgeld nur mit 50-Euro-Scheinen, 10-Euro-Scheinen und
  1-Euro-Münzen herausgegeben, und zwar mit möglichst wenigen Stücken. Schreibe den Rumpf von `wechselgeld`. Die
  Methode bekommt den Betrag (`betrag ≥ 0`) und liefert einen Text der Form `"1 x 50, 3 x 10, 6 x 1"` für 86 Euro.

  Verwende nur `/`, `%` und Verkettung. Die Zeile mit `public static String wechselgeld(int betrag)` bleibt unverändert.
teile:
  - typ: code
    vorlage: |
      public class Ristorante {
          public static String wechselgeld(int betrag) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Ristorante {
          public static String wechselgeld(int betrag) {
              int fuenfziger = betrag / 50;
              int rest = betrag % 50;
              int zehner = rest / 10;
              int einser = rest % 10;
              return fuenfziger + " x 50, " + zehner + " x 10, " + einser + " x 1";
          }
      }
    tests:
      - { aufruf: "wechselgeld(86)", erwartet: "\"1 x 50, 3 x 10, 6 x 1\"" }
      - { aufruf: "wechselgeld(0)", erwartet: "\"0 x 50, 0 x 10, 0 x 1\"" }
      - { aufruf: "wechselgeld(199)", erwartet: "\"3 x 50, 4 x 10, 9 x 1\"" }
      - { aufruf: "wechselgeld(40)", erwartet: "\"0 x 50, 4 x 10, 0 x 1\"", versteckt: true }
      - { aufruf: "wechselgeld(500)", erwartet: "\"10 x 50, 0 x 10, 0 x 1\"", versteckt: true }
    regeln: { keineSchleifen: true }
    fehler:
      - { wert: 3, meldung: "Bei 199 Euro bleiben nach drei Fünfzigern 49 Euro. Die Zehner berechnest du aus diesem Rest, nicht aus dem ganzen Betrag." }
      - { wert: "keineSchleifen", meldung: "Hier geht es ohne Schleife: `/` zählt die Scheine, `%` liefert den Rest." }
hinweise:
  - Zähle zuerst die Fünfziger mit `betrag / 50`. Was übrig bleibt, liefert `betrag % 50`.
  - Aus diesem Rest zählst du die Zehner (`/ 10`), und der Rest davon (`% 10`) sind die Münzen.
loesung: |
  **Ansatz:** Von der größten zur kleinsten Einheit: `/` zählt die Stücke, `%` gibt den Rest an die nächste Einheit weiter.
  ---
  `fuenfziger = betrag / 50`, `rest = betrag % 50`. Für 199: 3 Fünfziger, Rest 49.
  ---
  `zehner = rest / 10 = 4`, `einser = rest % 10 = 9`.
  ---
  ```java
  return fuenfziger + " x 50, " + zehner + " x 10, " + einser + " x 1";
  ```
  Probe: 3 · 50 + 4 · 10 + 9 · 1 = 199. Weil die Stückelung mit dem größten Schein beginnt, ist die Anzahl minimal.
```

```aufgabe
id: au-pr-tauschen
titel: Übung – zwei Teile vertauschen
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: nach Übung 2 WS2021, Beispiel StringCat (abgewandelt)
angabe: |
  (Zeitrichtwert: 10 Minuten) Ein Text hat die Form `links+rechts` mit genau einem `+`. Schreibe den Rumpf von
  `vertausche`. Die Methode liefert `rechts+links`. Beispiele: `"Haus+Boot"` wird zu `"Boot+Haus"`, und `"+x"` wird zu
  `"x+"`.

  Erlaubt sind von `String` nur `indexOf`, `substring` und `length`. Die Zeile mit
  `public static String vertausche(String s)` bleibt unverändert.
teile:
  - typ: code
    vorlage: |
      public class Tauschen {
          public static String vertausche(String s) {
              return s; // TODO
          }
      }
    musterloesung: |
      public class Tauschen {
          public static String vertausche(String s) {
              int plus = s.indexOf('+');
              return s.substring(plus + 1) + "+" + s.substring(0, plus);
          }
      }
    tests:
      - { aufruf: "vertausche(\"Haus+Boot\")", erwartet: "\"Boot+Haus\"" }
      - { aufruf: "vertausche(\"a+bc\")", erwartet: "\"bc+a\"" }
      - { aufruf: "vertausche(\"+x\")", erwartet: "\"x+\"", beschreibung: "linker Teil leer" }
      - { aufruf: "vertausche(\"IT+2\")", erwartet: "\"2+IT\"", versteckt: true }
    regeln: { erlaubteApi: ["String.indexOf", "String.substring", "String.length"] }
    fehler:
      - { wert: 1, meldung: "Erscheint das Plus doppelt oder fehlt ein Zeichen? `substring(plus + 1)` beginnt **nach** dem Plus, und `substring(0, plus)` endet **vor** ihm." }
hinweise:
  - Suche zuerst die Position des `+` mit `indexOf`.
  - Der rechte Teil beginnt bei `plus + 1`, der linke endet vor `plus`. Das `+` setzt du selbst wieder ein.
loesung: |
  **Ansatz:** Position des Trennzeichens bestimmen, beide Teile herausschneiden, in umgekehrter Reihenfolge verketten.
  ---
  `int plus = s.indexOf('+');` Für `"Haus+Boot"` ist das 4.
  ---
  `s.substring(plus + 1)` ist `Boot`, `s.substring(0, plus)` ist `Haus`.
  ---
  ```java
  return s.substring(plus + 1) + "+" + s.substring(0, plus);
  ```
  Probe mit `"+x"`: `plus = 0`, rechts `x`, links der leere String. Ergebnis `x+`.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Jede einzelne Rechnung hat einen Typ, der sich aus ihren beiden Operanden ergibt. Bei zwei
  `int` ist `/` eine Ganzzahldivision, die zur 0 hin abschneidet. (2) Ein `+` verkettet, sobald ein Operand ein String
  ist, und es wird von links nach rechts ausgewertet. Davor wird gerechnet, auch mit `char` als Zahl. (3) Strings
  vergleicht man mit `equals`, weil `==` nur prüft, ob es dasselbe Objekt ist. Andere gute Antworten sind die Kette der
  impliziten Typumwandlungen oder „Ein Cast schneidet ab und rundet nicht“.
```

:::zusammenfassung
1. **Variablen** haben Namen, Typ und Wert. Bei einer Zuweisung wird zuerst die rechte Seite ausgewertet, dann wird ihr Wert kopiert. Literale bestimmen ihren Typ selbst: `5` ist `int`, `5L` ist `long`, `5.0` ist `double`, `5.0f` ist `float`, `'5'` ist `char` und `"5"` ist `String`. `017` ist oktal (15), `0x1F` ist hexadezimal (31).
2. **Ganzzahldivision:** `int / int` schneidet zur 0 hin ab (`-7 / 2` ist `-3`). Der Rest `%` hat das Vorzeichen des Dividenden, und es gilt `a == (a / b) * b + a % b`. Zu große `int`-Ergebnisse laufen ohne Warnung über.
3. **Typregel:** Bei jeder Rechnung wird der kleinere Operand an den größeren angepasst (`int` → `long` → `float` → `double`, mindestens `int`). Der Typ der Variable links ändert die Rechnung rechts nicht.
4. **Implizite Umwandlungen** gehen nur nach rechts in der Kette `byte` → `short` → `int` → `long` → `float` → `double` (und `char` → `int`). Nach links braucht es einen **Cast** wie `(int) x`. Er schneidet ab, rundet nicht und wirkt nur auf den Wert direkt dahinter. Kurzformen wie `+=` enthalten einen versteckten Cast.
5. **`char` ist eine Zahl:** `'0'` = 48, `'A'` = 65, `'a'` = 97. In Rechnungen wird ein `char` zu `int`. Mit `(char)` kommt man zum Zeichen zurück, mit `z - '0'` zum Ziffernwert.
6. **Verkettung:** Ein `+` mit einem String hängt an. Ausgewertet wird von links nach rechts. Vor dem ersten String wird gerechnet, danach nur noch angehängt. Klammern erzwingen das Rechnen.
7. **String-Methoden:** Indizes laufen von 0 bis `length() - 1`. `substring(a, b)` endet vor `b` und hat `b - a` Zeichen. `indexOf` liefert `-1`, wenn nichts gefunden wird. Strings sind unveränderlich, und Inhalte vergleicht man mit `equals`, nie mit `==`.
8. **Vergleiche** liefern `boolean`. `Math.pow` und `Math.sqrt` liefern `double`, `Math.round` liefert bei `double` einen `long` und rundet `.5` nach oben. Auf zwei Stellen rundet man mit `Math.round(x * 100) / 100.0`.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **`7 / 2` für 3,5 gehalten** oder `double d = 7 / 2;` für 3,5. Training: „Ganzzahldivision mitten im Ausdruck“ und „Ein Mitstudent rechnet den Rabatt“. Zu finden in [2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks).
2. **Negative Division nach unten gerundet** oder das Vorzeichen des Rests vom Teiler genommen (`-7 / 2` als −4, `-7 % 2` als 1). Training: „Division und Rest mit Vorzeichen“ und „Aussagen über den Rest“. Zu finden in [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
3. **Überlauf übersehen** oder geglaubt, eine `long`-Variable links verhindere ihn. Training: „Wann läuft die Rechnung über?“. Zu finden in [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
4. **Eine führende Null überlesen** (`016` als 16) oder `float f = 1.5;` geschrieben. Training: „Ein Literal-Programm nachvollziehen“ und „Welche Deklarationen übersetzen nicht?“. Zu finden in [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale).
5. **Beim Zählen impliziter Umwandlungen Casts mitgezählt** oder Umwandlungen in Rechnungen vergessen. Training: „Implizite Typumwandlungen zählen“ und „Quiz – implizite Typkonvertierungen“. Zu finden in [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).
6. **Geglaubt, `(int)` runde,** oder den Cast an die falsche Stelle gesetzt (`(double) (a / b)`). Training: „Was bleibt nach dem Cast?“ und „Klammern setzen beim Cast“. Zu finden in [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).
7. **Den Zeichencode für den Ziffernwert gehalten** (`(int) '8'` als 8) oder `'a' + 'b'` für `"ab"`. Training: „Zeichen oder Zahl?“ und „Zeichen gemischt“. Zu finden in [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
8. **`"Summe: " + a + b` für eine Addition gehalten.** Training: „Gerechnet oder verkettet?“ und „Vor und nach dem Text“. Zu finden in [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten).
9. **Indizes ab 1 gezählt oder das Ende von `substring` mitgenommen.** Training: „Methoden an einem kurzen Wort“ und „Einen Satz untersuchen“. Zu finden in [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
10. **Strings mit `==` verglichen** oder erwartet, `s.toUpperCase()` ändere `s`. Training: „Aussagen über String-Vergleiche“ und „Verweise und neue Strings“. Zu finden in [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
11. **Rückgabetypen von `Math` übersehen** (`int p = Math.pow(2, 3);`) oder durch `100` statt `100.0` geteilt. Training: „Rückgabetypen beachten“ und „Runden, abschneiden, abrunden“. Zu finden in [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).
12. **Präfix und Postfix verwechselt** (`b = a++` gibt den alten Wert). Training: „Präfix und Postfix verfolgen“. Zu finden in [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast, aber
Fehler machst, liegt deine wichtigste Baustelle.

1. Variablen deklarieren, Zuweisungen verfolgen, Literale lesen.
2. Ganzzahldivision, Rest, Vorrang, Überlauf, `++` und `+=`.
3. Typ eines gemischten Ausdrucks und Ausgabeform von `double`.
4. Implizite Umwandlungen zählen und Casts auswerten.
5. Mit `char` rechnen.
6. Verkettungen von links nach rechts auswerten.
7. String-Methoden und `equals`.
8. Vergleiche und die Klasse `Math`.

## Mündliche Prüfung

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber ein **Feedbackgespräch** zu jedem Aufgabenblatt. Dort
erklärst du deinen Code und beantwortest Zusatzfragen, wie sie auf den Blättern als Kommentare stehen. Die Karten
üben genau das. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf
und vergleiche sie mit den Kernpunkten.

```karten
- id: au-karte-variable
  frage: Was ist eine Variable, und was passiert bei `int b = a;` genau?
  antwort: |
    Eine Variable ist eine benannte Speicherstelle mit Namen, Datentyp und Wert. Bei `int b = a;` wertet Java zuerst die
    rechte Seite aus, liest also den aktuellen Wert von `a`, und legt eine Kopie davon in `b`. Ändert man danach `a`,
    bleibt `b` unverändert, denn zwischen den beiden Variablen besteht keine Verbindung.
  kernpunkte:
    - Name, Typ, Wert
    - rechte Seite zuerst
    - Kopie des Werts, keine Verbindung
- id: au-karte-literale
  frage: Warum ist der aus den Variablen erzeugte Text nicht gleich den Literalen `0x16, 016, 16L` aus dem Quelltext?
  antwort: |
    Weil `println` Zahlen immer im Zehnersystem ausgibt. `0x16` ist hexadezimal und hat den Wert 22, `016` hat wegen der
    führenden Null die Basis 8 und den Wert 14. Das `L` bei `16L` legt nur den Typ `long` fest und erscheint nicht in der
    Ausgabe. Ähnlich wird `0.00345e3` als `3.45` ausgegeben. Die Schreibweise im Quelltext geht verloren, nur der Wert bleibt.
  kernpunkte:
    - Ausgabe immer dezimal
    - 0x hexadezimal, führende 0 oktal
    - L und f bestimmen nur den Typ
- id: au-karte-ganzzahldivision
  frage: Was ergibt `-17 / 5` und `-17 % 5` in Java, und warum?
  antwort: |
    `-17 / 5` ist `-3`, weil bei zwei ganzen Zahlen der Nachkommaanteil zur 0 hin abgeschnitten wird. −3,4 wird also zu
    −3 und nicht zu −4. Der Rest folgt aus `a == (a / b) * b + a % b`: −17 = (−3) · 5 + r, also r = −2. Der Rest hat
    immer das Vorzeichen des Dividenden.
  kernpunkte:
    - abschneiden zur 0 hin
    - Formel a == (a / b) * b + a % b
    - Vorzeichen des Rests wie Dividend
- id: au-karte-ueberlauf
  frage: Warum hilft `long g = 1000000 * 1000000;` nicht gegen einen Überlauf?
  antwort: |
    Weil Java zuerst die rechte Seite auswertet, und dort stehen zwei `int`. Die Multiplikation passiert in `int`, das
    Ergebnis läuft über und wird falsch. Erst danach wird dieser falsche Wert in einen `long` umgewandelt. Damit in `long`
    gerechnet wird, muss ein Operand selbst `long` sein, zum Beispiel `1000000L * 1000000`.
  kernpunkte:
    - rechte Seite zuerst, in int
    - Überlauf ohne Fehlermeldung
    - ein Operand muss long sein
- id: au-karte-typregel
  frage: Wie bestimmt Java den Typ eines Ausdrucks wie `1 / 4 * 4.0`?
  antwort: |
    Für jede einzelne Operation in der Auswertungsreihenfolge. Zuerst `1 / 4`: zwei `int`, also Ganzzahldivision mit
    Ergebnis 0. Dann `0 * 4.0`: ein Operand ist `double`, also wird 0 zu 0.0 und das Ergebnis ist `0.0`. Der kleinere
    Typ wird immer an den größeren angepasst, mindestens an `int`. Der Typ einer Variable links vom `=` ändert daran nichts.
  kernpunkte:
    - jede Operation einzeln
    - kleinerer Typ wird angepasst
    - Variable links ändert die Rechnung nicht
- id: au-karte-implizit-explizit
  frage: Wann wird ein Wert automatisch in einen anderen Typ umgewandelt, und wann braucht man einen Cast?
  antwort: |
    Automatisch, also implizit, nur in Richtung größerer Typen entlang der Kette `byte`, `short`, `int`, `long`, `float`,
    `double` sowie von `char` zu `int`. Das passiert bei Zuweisungen und in Rechnungen. In die andere Richtung kann
    etwas verloren gehen, darum verlangt Java einen expliziten Cast wie `(int) 3.7`. Der Cast schneidet ab und rundet nicht.
  kernpunkte:
    - Kette der Erweiterungen nennen
    - Zuweisung und Rechnung
    - Cast bei möglichem Verlust, schneidet ab
- id: au-karte-byte-summe
  frage: Warum unterscheidet sich die Summe von 200 und 300 als `int` von der Summe der beiden nach `byte` gecasteten Werte?
  antwort: |
    Ein `byte` speichert nur Werte von −128 bis 127. Beim Cast bleiben nur die unteren 8 Bit erhalten, das heißt, der
    Wert wird um Vielfache von 256 verschoben. Aus 200 wird −56 und aus 300 wird 44. Die `int`-Summe ist 500, die
    `byte`-Summe nur −12. Den Unterschied verursachen also genau die Werte, die nicht in einen `byte` passen.
  kernpunkte:
    - Bereich von byte
    - Verschiebung um 256
    - nur Werte außerhalb des Bereichs verursachen den Unterschied
- id: au-karte-char-8
  frage: Warum gibt `System.out.println((int) c);` mit `char c = '8';` nicht 8 aus?
  antwort: |
    Weil ein `char` intern eine Zahl ist, nämlich die Nummer des Zeichens in der Unicode-Tabelle. Die Ziffer `'8'` hat
    die Nummer 56, denn `'0'` hat 48 und die Ziffern folgen lückenlos. Der Cast `(int)` liefert genau diese Nummer.
    Den Ziffernwert 8 erhält man mit `c - '0'`.
  kernpunkte:
    - char ist eine Zahl (Unicode)
    - Ziffer 0 hat 48, Ziffer 8 hat 56
    - Ziffernwert mit c - '0'
- id: au-karte-verkettung
  frage: Warum sind die Ausgaben von `st + i + c` und `i + c + st` verschieden, wenn `st` ein String, `i` ein int und `c` ein char ist?
  antwort: |
    `+` wird von links nach rechts ausgewertet. Bei `st + i + c` steht der String vorne, also ist jedes `+` eine
    Verkettung: `i` und `c` werden als Text angehängt, `c` als Zeichen. Bei `i + c + st` ist das erste `+` eine Addition
    zweier Zahlen: `c` geht mit seiner Unicode-Nummer ein. Erst danach kommt der String und macht aus der Summe einen Text.
  kernpunkte:
    - links nach rechts
    - mit String Verkettung, sonst Addition
    - char als Zeichen oder als Nummer
- id: au-karte-equals
  frage: Warum vergleicht man Strings mit `equals` und nicht mit `==`?
  antwort: |
    Eine String-Variable enthält nur einen Verweis auf ein Objekt. `==` prüft, ob zwei Variablen auf dasselbe Objekt
    zeigen. `equals` prüft, ob die Zeichen gleich sind. Zwei Strings mit gleichem Inhalt können verschiedene Objekte sein,
    etwa wenn einer zur Laufzeit durch Verkettung oder `substring` entsteht. Dann liefert `==` `false`. Dass es bei
    Literalen manchmal trotzdem klappt, ist Zufall der Speicherverwaltung und darf nicht ausgenutzt werden.
  kernpunkte:
    - Verweis auf ein Objekt
    - == Objekt, equals Inhalt
    - Gegenbeispiel mit Verkettung oder substring
- id: au-karte-substring
  frage: Wie kann man einen Teilstring herausholen, und wie ginge es ohne die Methode `substring`?
  antwort: |
    `s.substring(a, b)` liefert die Zeichen von Index `a` bis vor Index `b`, also `b - a` Zeichen. Ohne `substring` geht
    man mit einer Schleife von `a` bis `b - 1` und hängt jedes Zeichen `s.charAt(i)` an einen zunächst leeren String an.
    Wie das geht, zeigt [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen). Das Prinzip ist dasselbe: Indizes beginnen bei 0, und das Ende ist exklusiv.
  kernpunkte:
    - Ende exklusiv, Länge b − a
    - Indizes ab 0
    - Ersatz mit charAt und Schleife
- id: au-karte-unveraenderlich
  frage: Was bedeutet es, dass Strings unveränderlich sind? Gib ein Beispiel, bei dem das zu einem Fehler führt.
  antwort: |
    Ein String-Objekt kann nach seiner Erzeugung nicht mehr geändert werden. Methoden wie `toUpperCase` oder `replace`
    liefern einen neuen String. Schreibt man nur `name.toUpperCase();`, wird das Ergebnis weggeworfen, und `name` bleibt
    wie vorher. Richtig ist `name = name.toUpperCase();`.
  kernpunkte:
    - Objekt nicht änderbar
    - Methoden liefern neuen String
    - Ergebnis zuweisen
- id: au-karte-math
  frage: Welche Rückgabetypen haben `Math.pow`, `Math.sqrt` und `Math.round`, und welche Folgen hat das?
  antwort: |
    `Math.pow` und `Math.sqrt` liefern immer `double`, auch bei ganzzahligen Ergebnissen. `Math.pow(2, 3)` wird daher als
    `8.0` ausgegeben und passt nicht ohne Cast in einen `int`. `Math.round` liefert bei einem `double` einen `long`, bei
    einem `float` einen `int`. Es rundet `.5` in Richtung der größeren Zahl, also ist `Math.round(-2.5)` gleich −2.
  kernpunkte:
    - pow und sqrt liefern double
    - round liefert long bei double
    - .5 wird nach oben gerundet
- id: au-karte-wechselgeld
  frage: Wie berechnest du mit möglichst wenigen Scheinen das Wechselgeld, und warum brauchst du dafür keine Schleife?
  antwort: |
    Ich beginne beim größten Schein. `betrag / 50` zählt die Fünfziger, `betrag % 50` ist der Rest. Aus diesem Rest zähle
    ich mit `/ 10` die Zehner, und `% 10` sind die übrigen Münzen. Eine Schleife ist nicht nötig, weil die
    Ganzzahldivision in einem Schritt angibt, wie oft ein Schein hineinpasst. Dieselbe Idee zerlegt Zahlen in Ziffern
    ([7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division)).
  kernpunkte:
    - vom größten Schein zum kleinsten
    - / zählt, % gibt den Rest weiter
    - Verbindung zur Ziffernzerlegung
- id: au-karte-fehlerarten
  frage: Was ist der Unterschied zwischen einem Compilerfehler und einem Laufzeitfehler? Nenne je ein Beispiel aus diesem Kapitel.
  antwort: |
    Einen Compilerfehler findet der Compiler beim Übersetzen, das Programm startet dann gar nicht. Beispiele sind
    `int x = 2.5;` oder `float f = 1.5;`, weil die Typen nicht passen. Ein Laufzeitfehler tritt erst beim Ausführen auf,
    weil ein Wert ungültig ist. Beispiele sind `10 / 0` (`ArithmeticException`) und `"abc".charAt(3)`
    (`StringIndexOutOfBoundsException`). Der Compiler prüft Typen und Schreibweise. Ob beim Ausführen ein Teiler 0
    wird oder ein Index zu groß ist, prüft er nicht.
  kernpunkte:
    - Compiler prüft Typen und Syntax
    - Laufzeit prüft Werte
    - je ein Beispiel
```
