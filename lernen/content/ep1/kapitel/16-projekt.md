---
nummer: 16
titel: "Abschlussprojekt: ein Spiel auf einem Zeichenfeld"
kurz: Ein ganzes Spiel aus kleinen Methoden bauen. Sokoban auf einem zweidimensionalen char-Array Schritt für Schritt, dazu die Hinweise von Mastermind, genau so, wie Aufgabenblatt 6 es verlangt.
teil: projekt
stunden: 6
pruefungsgewicht: 1
voraussetzungen: [verzweigungen, schleifen, methoden, arrays, arrays-2d, arrays-anwendungen]
lernziele:
  - einen Level-Text mit Zeilenumbrüchen in ein zweidimensionales char-Array umwandeln und jedes Feld mit feld[y][x] richtig lesen und schreiben, auch bei unterschiedlich langen Zeilen
  - Zeichen in einem Level-Text oder Spielfeld zählen und die Positionen der Spielfigur und aller Kisten als Arrays der Form {x, y} zurückgeben
  - aus einer Position und einem Richtungscode das Nachbarfeld berechnen und begründen, warum „oben“ im Spielfeld y - 1 bedeutet
  - einen Spielzug nach den Sokoban-Regeln implementieren (Wand, freies Feld, Kiste mit freiem Feld dahinter) und den Rückgabewert richtig setzen
  - Zielpunkte getrennt vom Spielfeld speichern, prüfen, ob ein Level gelöst ist, und erkennen, wann eine Kiste in einer Ecke feststeckt
  - ein Spielfeld mit CodeDraw zeichnen, indem du aus Zeile und Spalte die Pixelkoordinaten berechnest und die Zeichenreihenfolge der Ebenen beachtest
  - in Mastermind die Hinweise (richtige Farbe an richtiger Stelle, richtige Farbe an falscher Stelle) berechnen und einen Geheimcode aus verschiedenen Zufallswerten erzeugen
  - eigene Spielmethoden im Feedbackgespräch erklären, Fehler darin finden und kleine Änderungswünsche umsetzen
---

**Worum geht es?** In den bisherigen Kapiteln hast du einzelne Werkzeuge gelernt: Schleifen, Methoden, Arrays,
zweidimensionale Arrays. Jetzt baust du daraus ein **ganzes Spiel**. Das letzte Aufgabenblatt von EP1 ist genau so
ein Projekt. Im Wintersemester 2023 war es **Sokoban**, im Wintersemester 2021 **Mastermind**.

Ein Spiel wirkt auf den ersten Blick groß. Der Trick ist derselbe wie beim Kochen nach Rezept: Niemand kocht „ein
Menü“ in einem Schritt. Man schneidet Gemüse, kocht Nudeln, rührt eine Soße. Jeder Schritt ist klein und für sich
verständlich. Genauso zerlegst du das Spiel in kleine **Methoden** (benannte Programmteile mit einer klaren
Aufgabe, siehe [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode)). Eine Methode findet die Spielfigur, eine bewegt sie, eine prüft,
ob das Level gelöst ist, eine zeichnet das Bild. Jede dieser Methoden ist nicht schwerer als die Aufgaben aus
den Kapiteln davor.

**Was ist Sokoban?** Sokoban ist ein japanisches Denkspiel. Der Name bedeutet „Lagerverwalter“. Eine Spielfigur
steht in einem Lagerhaus mit Wänden. Im Lager liegen Kisten, und auf dem Boden sind Zielpunkte markiert. Die Figur
soll jede Kiste auf einen Zielpunkt schieben. Dabei gelten zwei Regeln: Die Figur kann eine Kiste nur **schieben**,
nie ziehen. Und sie kann immer nur **eine** Kiste auf einmal schieben.

**Was kommt in der Prüfung?** Dieses Kapitel bereitet vor allem einen Prüfungsteil vor.

- **Aufgabenblatt 6:** Im Wintersemester 2023 waren sechs Methoden für Sokoban zu schreiben. Sie zählen die Ziele,
  finden die Figur, führen einen Zug aus, finden alle Kisten, prüfen den Sieg und zeichnen das Spielfeld. Aufgabenblatt 6
  brachte 7 Punkte. Im Wintersemester 2021 waren es fünf Methoden für Mastermind, darunter die Berechnung der
  Hinweise nach jedem Rateversuch.
- **Feedbackgespräch:** Nach der Abgabe erklärst du einer Tutorin oder einem Tutor deinen Code. Mögliche Fragen
  sind „Warum steht hier `level[y][x]` und nicht `level[x][y]`?“ oder „Was passiert, wenn hinter der Kiste eine
  zweite Kiste steht?“. Die Fragen in diesem Kapitel sind Beispiele in diesem Stil, keine Originalfragen.
- **Programmiertest und Quiz:** Sie verlangen kein ganzes Spiel. Die Einzelteile kommen aber vor: zweidimensionale
  Arrays durchlaufen, eine Position suchen, ein Array an Ort und Stelle verändern. Darum ist dieses Kapitel auch
  eine Wiederholung der Kapitel [12 Arrays und Referenzen](/lernen/ep1/arrays) bis
  [15 2D-Anwendungen: Sudoku, Bilder, Flood-Fill](/lernen/ep1/arrays-anwendungen) an einem durchgehenden Beispiel.

Ob Aufgabenblatt 6 im Wintersemester 2026 wieder Sokoban oder Mastermind verlangt, ist nicht veröffentlicht. Die
Methoden in diesem Kapitel sind **Nachbauten mit eigenen Namen und eigenen Levels**. Wer sie versteht, kann jedes
Spiel auf einem Raster bauen, auch Vier gewinnt oder Minesweeper.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Strings Zeichen für Zeichen durchlaufen** mit `length()` und `charAt(i)` aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
- **Den Typ `char`** und den Vergleich von Zeichen mit `==` aus
  [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
- **Verschachtelte Schleifen** aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
- **Die `switch`-Anweisung** aus [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).
- **Methoden mit Rückgabewert** aus [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
- **Arrays** und die Tatsache, dass eine Methode ein übergebenes Array verändern kann, aus
  [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array) und
  [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
- **Zweidimensionale Arrays** wie `int[][]` aus [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen)
  und Zeilen unterschiedlicher Länge aus [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays).
- Hilfreich, aber nicht nötig: **Zeichenbilder als `char[][]`** und Nachbarfelder in einem Raster aus [15.1 Nachbarn im Raster: Richtungen und Randprüfung](/lernen/ep1/arrays-anwendungen/nachbarn-im-raster-richtungen-und-randpruefung).

Die folgenden sieben Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst das verlinkte Kapitel. Alles, was dieses Kapitel über zweidimensionale Arrays braucht, wird in
[16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld) noch einmal kurz erklärt.
:::

```aufgabe
id: pj-ein-zeichen-zaehlen
titel: Ein Zeichen in einem String zählen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      String s = "#.$#..#";
      int anzahl = 0;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == '.') {
              anzahl++;
          }
      }
      System.out.println(anzahl);
    loesung: |
      3
    fehler:
      - wert: "7"
        meldung: Gezählt wird nicht jedes Zeichen, sondern nur die Zeichen, für die `s.charAt(i) == '.'` gilt.
      - wert: "2"
        meldung: 'Geh den String Zeichen für Zeichen durch. Die Punkte stehen an den Indizes 1, 4 und 5. Das sind drei.'
hinweise:
  - Schreib die Zeichen mit ihren Indizes 0 bis 6 untereinander und markiere jeden Punkt.
loesung: |
  Die Schleife läuft mit `i` von 0 bis 6 über alle sieben Zeichen. Bei jedem Punkt erhöht `anzahl++` den Zähler um 1.
  ---
  Punkte stehen an den Indizes 1, 4 und 5. Ausgabe `3`.
```

```aufgabe
id: pj-ein-char-vergleich
titel: Ein Zeichen richtig vergleichen
niveau: 1
art: check
angabe: |
  Welche Bedingung prüft, ob das Zeichen mit Index 2 im String `s` ein Dollarzeichen ist, und kompiliert?
  (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: auswahl
    optionen:
      - "`s.charAt(2) == '$'`"
      - '`s.charAt(2) == "$"`'
      - '`s.charAt(2).equals("$")`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`"$"` in doppelten Anführungszeichen ist ein **String**, `s.charAt(2)` ein `char`. Java kann einen `char` nicht mit `==` mit einem String vergleichen, der Compiler meldet einen Fehler.'
      - wert: 2
        meldung: '`char` ist ein primitiver Typ, also ein einfacher Wert ohne Methoden. `.equals` gibt es nur bei Objekten wie Strings. Der Compiler meldet einen Fehler.'
hinweise:
  - Einfache Anführungszeichen stehen für ein einzelnes Zeichen (`char`), doppelte für einen String.
loesung: |
  `s.charAt(2)` liefert einen `char`. Zwei `char`-Werte vergleicht man mit `==`, so wie zwei Zahlen.
  ---
  Das Zeichen-Literal schreibt man in einfachen Anführungszeichen: `'$'`. Richtig ist also `s.charAt(2) == '$'`.
```

```aufgabe
id: pj-ein-doppelschleife
titel: Zeilen und Spalten mit zwei Schleifen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: ausgabe
    code: |
      for (int y = 0; y < 2; y++) {
          for (int x = 0; x < 3; x++) {
              System.out.print(y + "" + x + " ");
          }
          System.out.println();
      }
    trim: true
    loesung: |
      00 01 02 
      10 11 12 
    fehler:
      - wert: "00 10 \n01 11 \n02 12 "
        meldung: Die äußere Schleife gehört zu `y`. Für jedes `y` läuft die innere Schleife einmal ganz mit `x = 0, 1, 2` durch, erst dann kommt der Zeilenumbruch.
      - wert: "0 1 2 \n1 2 3 "
        meldung: '`y + "" + x` rechnet nicht, sondern **verkettet**. Wegen des leeren Strings in der Mitte wird `x` als Text angehängt. Aus `y = 1` und `x = 2` wird `"12"`.'
hinweise:
  - Die innere Schleife läuft für jeden Wert von `y` vollständig durch. `println()` beendet danach die Zeile.
loesung: |
  Für `y = 0` druckt die innere Schleife `00 01 02 `, dann beendet `println()` die Zeile.
  ---
  Für `y = 1` folgt `10 11 12 ` und wieder ein Zeilenumbruch. Jede Ausgabezeile endet mit einem Leerzeichen, das beim Vergleich hier nicht zählt.
```

```aufgabe
id: pj-ein-switch
titel: Eine Zahl in eine Richtung übersetzen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough))
teile:
  - typ: ausgabe
    code: |
      int richtung = 3;
      switch (richtung) {
          case 1:
              System.out.println("oben");
              break;
          case 2:
              System.out.println("unten");
              break;
          case 3:
              System.out.println("links");
          case 4:
              System.out.println("rechts");
              break;
      }
    loesung: |
      links
      rechts
    fehler:
      - wert: "links"
        meldung: 'Im Fall `case 3` fehlt das `break`. Java läuft dann in den nächsten Fall weiter und führt auch dessen Anweisungen aus. Das nennt man **Fallthrough**.'
hinweise:
  - Achte darauf, welche Fälle mit `break` enden.
loesung: |
  `richtung` ist 3. Java springt zu `case 3` und gibt `links` aus.
  ---
  Dort steht kein `break`. Java läuft in `case 4` weiter, gibt `rechts` aus und hält erst beim nächsten `break` an.
```

```aufgabe
id: pj-ein-2d-zugriff
titel: Ein zweidimensionales Array lesen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen))
teile:
  - typ: ausgabe
    code: |
      int[][] a = {{1, 2, 3}, {4, 5}};
      System.out.println(a[1][0]);
      System.out.println(a.length);
      System.out.println(a[0].length + a[1].length);
    loesung: |
      4
      2
      5
    fehler:
      - wert: "2\n2\n5"
        meldung: 'Der **erste** Index wählt die Zeile, der zweite die Stelle in dieser Zeile. `a[1][0]` ist also das erste Element der zweiten Zeile `{4, 5}`.'
      - wert: "4\n5\n5"
        meldung: '`a.length` zählt die **Zeilen** von `a`, nicht alle Zahlen. `a` hat zwei Zeilen.'
hinweise:
  - Ein zweidimensionales Array ist ein Array von Zeilen. `a[1]` ist die Zeile mit Index 1.
loesung: |
  `a[1]` ist die zweite Zeile `{4, 5}`, darin hat Index 0 den Wert 4.
  ---
  `a.length` ist die Zahl der Zeilen, also 2. Die Zeilen sind 3 und 2 Elemente lang, zusammen 5.
```

```aufgabe
id: pj-ein-referenz
titel: Eine Methode verändert ein Array
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      public class Referenz {
          public static void markiere(char[] zeile) {
              zeile[1] = '*';
          }

          public static void main(String[] args) {
              char[] z = {'#', ' ', '#'};
              markiere(z);
              System.out.println(z[1]);
          }
      }
    loesung: |
      *
    fehler:
      - wert: " "
        meldung: Die Methode bekommt keine Kopie des Arrays, sondern einen Verweis auf **dasselbe** Array. Was sie hineinschreibt, sieht danach auch `main`.
hinweise:
  - Eine Array-Variable enthält nicht die Elemente selbst, sondern einen Verweis (eine Referenz) auf das Array.
loesung: |
  `markiere(z)` übergibt den Verweis auf das Array. Der Parameter `zeile` zeigt auf dasselbe Array wie `z`.
  ---
  `zeile[1] = '*'` verändert also das Array von `main`. Ausgabe `*`.
```

```aufgabe
id: pj-ein-return
titel: Ein return beendet die Methode sofort
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Frueh {
          public static boolean enthaelt(String s, char c) {
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) == c) {
                      return true;
                  }
              }
              return false;
          }

          public static void main(String[] args) {
              System.out.println(enthaelt("#  @ #", '@'));
              System.out.println(enthaelt("# $ #", '@'));
          }
      }
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: 'Sobald `s.charAt(i) == c` gilt, beendet `return true` die Methode sofort. Das `return false` nach der Schleife wird dann gar nicht mehr erreicht.'
hinweise:
  - Ein `return` beendet die Methode an genau dieser Stelle, auch mitten in einer Schleife.
loesung: |
  Im ersten String steht `@` an Index 3. Dort liefert `return true` das Ergebnis, die Schleife bricht ab.
  ---
  Im zweiten String gibt es kein `@`. Die Schleife läuft bis zum Ende, danach liefert `return false` das Ergebnis.
```

## Das Spielfeld als Zeichenfeld

```aufgabe
id: pj-sf-check-laenge
titel: Wie lang ist ein Text mit Zeilenumbruch?
niveau: 1
art: check
angabe: |
  In Java schreibt man einen Zeilenumbruch in einem String als `\n`. Wie viele Zeichen hat der String
  `"#@\n##"`? (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "6"
        meldung: '`\n` sieht im Quelltext aus wie zwei Zeichen, ist aber **ein einziges** Zeichen: der Zeilenumbruch. Der Rückstrich kündigt nur an, dass ein Sonderzeichen folgt.'
      - wert: "4"
        meldung: Auch der Zeilenumbruch ist ein Zeichen des Strings und zählt bei `length()` mit.
hinweise:
  - 'Zähle `#`, `@`, den Zeilenumbruch, `#` und `#`.'
loesung: |
  Der Rückstrich `\` leitet eine **Escape-Sequenz** ein, also eine Schreibweise für ein Zeichen, das man nicht direkt tippen kann. `\n` steht für genau ein Zeichen, den Zeilenumbruch.
  ---
  Die Zeichen sind `#`, `@`, Zeilenumbruch, `#`, `#`. Das sind 5.
```

Ein Sokoban-Level ist ein Bild aus Zeichen. Jedes Zeichen steht für ein Feld des Lagerhauses. Aufgabenblatt 6 aus dem
Wintersemester 2023 verwendet dieselben Zeichen wie die meisten Sokoban-Programme:

- `' '` (Leerzeichen) ist leerer Boden. Hier darf die Figur hin.
- `'#'` ist eine Wand.
- `'.'` ist ein Zielpunkt. Hier soll eine Kiste landen.
- `'$'` ist eine Kiste.
- `'@'` ist die Spielfigur.

Ein kleines Level sieht so aus:

```
######
#    #
#@$ .#
######
```

Die Figur steht links, rechts daneben liegt eine Kiste, und noch weiter rechts ist der Zielpunkt. Die Figur muss die
Kiste zweimal nach rechts schieben, dann ist das Level gelöst.

Im Programm dieses Aufgabenblatts kommt ein Level zuerst als **ein einziger String** an. Es wird aus einer Datei gelesen. Die
Zeilen sind durch das Zeichen `'\n'` getrennt, den **Zeilenumbruch**. Das Level von eben ist also der String

```java
String text = "######\n#    #\n#@$ .#\n######";
```

Ein langer String ist zum Spielen unpraktisch. Die Frage „Was liegt rechts neben der Figur?“ verlangt Rechnerei mit
Indizes über Zeilengrenzen hinweg. Darum wandelt das Programm den Text in ein **zweidimensionales `char`-Array** um,
ein `char[][]`. Das ist eine Tabelle aus Zeichen. Eine solche Tabelle nennen wir in diesem Kapitel **Spielfeld** oder
**Zeichenfeld**.

:::beispiel[Ein Level als Tabelle mit Zeilen und Spalten]
Wir schreiben das kleine Level mit Figur, Kiste und Zielpunkt als Tabelle. Über jede Spalte schreiben wir ihre Nummer `x`, vor jede
Zeile ihre Nummer `y`. Beide beginnen bei 0, wie jeder Index in Java.

| y \ x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **0** | `#` | `#` | `#` | `#` | `#` | `#` |
| **1** | `#` | ` ` | ` ` | ` ` | ` ` | `#` |
| **2** | `#` | `@` | `$` | ` ` | `.` | `#` |
| **3** | `#` | `#` | `#` | `#` | `#` | `#` |

Jetzt lesen wir drei Felder ab:

1. Die Figur `@` steht in Zeile `y = 2` und Spalte `x = 1`.
2. Die Kiste `$` steht in derselben Zeile, eine Spalte weiter rechts: `y = 2`, `x = 2`.
3. Der Zielpunkt `.` steht bei `y = 2`, `x = 4`.

Im Programm heißt das Array `feld`. `feld[2]` ist die Zeile mit Nummer 2, also das Array `{'#', '@', '$', ' ', '.', '#'}`.
`feld[2][1]` ist darin das Zeichen mit Index 1, also `'@'`. Man schreibt **zuerst die Zeile, dann die Spalte**.
:::

:::definition[Spielfeld, Zeile y, Spalte x]
Ein **Spielfeld** ist ein Array `char[][] feld`. Darin ist `feld[y]` die Zeile mit Nummer `y`. `feld[y][x]` ist das
Zeichen in dieser Zeile an der Stelle `x`.

- `y` zählt die **Zeilen** von oben nach unten, beginnend bei 0. Ein größeres `y` liegt also **tiefer** im Bild.
- `x` zählt die **Spalten** von links nach rechts, beginnend bei 0.
- `feld.length` ist die Zahl der Zeilen, `feld[y].length` die Länge der Zeile `y`.

Der Zugriff lautet immer `feld[y][x]`. Aufgabenblatt 6 formuliert es so: Ein Punkt mit den Koordinaten (x, y) wird im Array
als `level[y][x]` angesprochen.
:::

**Beispiel:** Im Level aus der Tabelle ist `feld[1][3]` ein Leerzeichen und `feld[0].length` gleich 6.

**Kein Beispiel:** `feld[1][2]` ist **nicht** „Spalte 1, Zeile 2“. Wer es so liest, erwartet dort die Figur. Der erste
Index ist aber immer die Zeile. `feld[1][2]` ist Zeile 1, Spalte 2, und dort liegt nur ein Leerzeichen.

Warum diese Reihenfolge? Ein `char[][]` ist ein **Array von Zeilen**. Zuerst wählt man mit `feld[y]` eine Zeile aus,
und erst in dieser Zeile ein einzelnes Zeichen. Das passt dazu, wie man Text liest: erst die Zeile suchen, dann darin
die Stelle.

```aufgabe
id: pj-sf-gefuehrt
titel: Felder um die Figur ablesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      char[][] feld = {
          {'#', '#', '#', '#', '#'},
          {'#', '.', '$', '@', '#'},
          {'#', ' ', '#', ' ', '#'},
          {'#', '#', '#', '#', '#'}
      };
      System.out.println(feld[1][3]);
      System.out.println(feld[1][2]);
      System.out.println(feld[2][3] == ' ');
      System.out.println(feld.length + " " + feld[2].length);
    loesung: |
      @
      $
      true
      4 5
    fehler:
      - wert: "#\n \nfalse\n4 5"
        meldung: 'Du hast die Indizes vertauscht und zum Beispiel `feld[3][1]` statt `feld[1][3]` gelesen. Der erste Index ist die **Zeile**. `feld[1][3]` ist Zeile 1, Spalte 3.'
      - wert: "@\n$\ntrue\n5 4"
        meldung: '`feld.length` zählt die Zeilen (4), `feld[2].length` die Zeichen in Zeile 2 (5).'
gefuehrt:
  - text: Welche Zeile ist `feld[1]`?
    teil:
      typ: auswahl
      optionen: ["`{'#', '.', '$', '@', '#'}`", "`{'#', ' ', '#', ' ', '#'}`", "die Spalte `{'#', '.', ' ', '#'}`"]
      richtig: [0]
    erklaerung: '`feld[1]` ist die Zeile mit Nummer 1, also die zweite Zeile von oben. Spalten kann man nicht mit einem einzigen Index auswählen.'
  - text: Welches Zeichen ist `feld[1][3]`?
    teil:
      typ: auswahl
      optionen: ["`'@'`", "`'$'`", "`'#'`"]
      richtig: [0]
    erklaerung: In der Zeile `{'#', '.', '$', '@', '#'}` hat das Zeichen mit Index 3 den Wert `'@'`. Die Indizes beginnen bei 0.
  - text: Welches Zeichen steht direkt unter der Figur, also in derselben Spalte eine Zeile tiefer?
    teil:
      typ: auswahl
      optionen: ["`feld[2][3]`, ein Leerzeichen", "`feld[0][3]`, eine Wand", "`feld[1][4]`, eine Wand"]
      richtig: [0]
    erklaerung: Eine Zeile tiefer heißt `y + 1`, die Spalte bleibt gleich. `feld[2][3]` ist ein Leerzeichen, also ist `feld[2][3] == ' '` wahr.
  - text: Wie viele Zeilen hat das Feld, also welchen Wert hat `feld.length`?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Das äußere Array enthält vier Zeilen. Jede Zeile hat fünf Zeichen, darum ist `feld[2].length` gleich 5.
hinweise:
  - Lies jeden Zugriff als „Zeile, dann Spalte“. Zähle Zeilen und Spalten ab 0.
loesung: |
  **Ansatz:** Jeden Zugriff als „Zeile `y`, Spalte `x`“ lesen und in der Tabelle nachschauen.
  ---
  `feld[1][3]` ist `'@'`, `feld[1][2]` ist `'$'` (links neben der Figur). `feld[2][3]` ist ein Leerzeichen, der Vergleich liefert `true`.
  ---
  `feld.length` ist 4 (Zeilen), `feld[2].length` ist 5 (Zeichen in Zeile 2). Kontrolle: Die Ausgabe hat vier Zeilen.
```

### Das Spielfeld ausgeben und durchsuchen

Fast jede Methode des Spiels muss **alle Felder** besuchen: zum Ausgeben, zum Zählen, zum Suchen. Dafür verwendet man
zwei verschachtelte Schleifen. Die äußere Schleife läuft über die Zeilen `y`, die innere über die Stellen `x` in der
aktuellen Zeile.

:::beispiel[Ein Spielfeld auf der Konsole ausgeben]
```java
public static void zeigeFeld(char[][] feld) {
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            System.out.print(feld[y][x]);
        }
        System.out.println();
    }
}
```

Zeile für Zeile:

- `public static void zeigeFeld(char[][] feld)` ist der Methodenkopf. Die Methode bekommt ein Spielfeld und gibt nichts zurück (`void`).
- `for (int y = 0; y < feld.length; y++)` geht alle Zeilen durch. `feld.length` ist die Zahl der Zeilen.
- `for (int x = 0; x < feld[y].length; x++)` geht alle Zeichen der **aktuellen** Zeile `y` durch. Die Grenze ist `feld[y].length`, die Länge genau dieser Zeile.
- `System.out.print(feld[y][x]);` gibt ein Zeichen aus, ohne Zeilenumbruch.
- `System.out.println();` beendet nach jeder Zeile die Ausgabezeile.

Für das Level aus der Tabelle erscheint wieder das Bild aus vier Zeilen:

```
######
#    #
#@$ .#
######
```
:::

Warum `feld[y].length` und nicht einfach `feld[0].length`? Echte Sokoban-Levels sind oft **nicht rechteckig**. Ihre
Zeilen sind unterschiedlich lang, weil rechts außerhalb der Wände nichts mehr steht. Ein zweidimensionales Array mit
unterschiedlich langen Zeilen heißt **jagged Array** (englisch *jagged*, „gezackt, ausgefranst“), wie in
[14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays). Wir sagen auch kurz **ausgefranst**. In Java ist das
erlaubt, denn jede Zeile ist ein eigenes Array mit eigener Länge.

:::achtung[Die Länge der ersten Zeile für alle Zeilen benutzt]
Für das ausgefranste Level

```
####
#  ###
#@$ .#
######
```

hat Zeile 0 die Länge 4, die anderen Zeilen haben die Länge 6. Diese Fassung ist falsch:

```java
for (int y = 0; y < feld.length; y++) {
    for (int x = 0; x < feld[0].length; x++) {   // falsch: immer die Länge von Zeile 0
        System.out.print(feld[y][x]);
    }
    System.out.println();
}
```

Sie gibt `####`, `#  #`, `#@$ ` und `####` aus. Von jeder längeren Zeile fehlen die letzten zwei Zeichen. Der Zielpunkt
verschwindet aus dem Bild. Ist umgekehrt die **erste** Zeile die längste, liest die Schleife über das Ende einer
kürzeren Zeile hinaus. Dann bricht das Programm mit einer `ArrayIndexOutOfBoundsException` ab, also dem Fehler
„Index außerhalb des Arrays“. Richtig ist immer `x < feld[y].length`.
:::

```aufgabe
id: pj-sf-masse
titel: Zeilen und Zeilenlängen eines Level-Texts
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Level kommt als String an:

  ```java
  String text = "  ####\n###  #\n#@ $.#\n######";
  ```

  Das Level wird in ein `char[][] feld` umgewandelt, eine Zeile pro Textzeile, ohne die Zeilenumbrüche.

  **a)** Welchen Wert hat `feld.length`?

  **b)** Welchen Wert hat `feld[0].length`?

  **c)** Welchen Wert hat `text.length()`?
teile:
  - typ: zahl
    label: a)
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Drei Zeilenumbrüche trennen **vier** Zeilen. Nach dem letzten Umbruch folgt noch die Zeile `######`.
  - typ: zahl
    label: b)
    loesung: "6"
    fehler:
      - wert: "4"
        meldung: 'Die beiden Leerzeichen am Anfang von `"  ####"` sind Zeichen der Zeile und zählen mit.'
  - typ: zahl
    label: c)
    loesung: "4 * 6 + 3"
    fehler:
      - wert: "24"
        meldung: Der String enthält zusätzlich die drei Zeilenumbrüche. Jeder `\n` ist ein Zeichen.
      - wert: "30"
        meldung: '`\n` ist ein einziges Zeichen, nicht zwei.'
hinweise:
  - Zähle die Zeilenumbrüche. Es gibt immer eine Zeile mehr als Umbrüche.
loesung: |
  **Ansatz:** Die Zeilen sind die Stücke zwischen den Zeilenumbrüchen.
  ---
  Die vier Zeilen lauten `"  ####"`, `"###  #"`, `"#@ $.#"` und `"######"`. Also ist `feld.length = 4`, und jede Zeile hat 6 Zeichen.
  ---
  Der String hat `4 · 6 = 24` Zeichen in den Zeilen und 3 Zeilenumbrüche, zusammen 27.
```

:::achtung[Zeile und Spalte vertauscht]
Wer in der Tabelle „x zuerst“ denkt, schreibt leicht `feld[x][y]`. Im rechteckigen Level aus der Tabelle steht die
Figur bei `x = 1`, `y = 2`. Der falsche Zugriff `feld[1][2]` liefert ein Leerzeichen statt `'@'`. Der Fehler fällt nicht
sofort auf, weil kein Absturz passiert. Bei einem Feld mit 4 Zeilen und 6 Spalten stürzt `feld[x][y]` aber ab, sobald
`x` größer als 3 ist. Dann gibt es die Zeile `feld[x]` nicht, und Java wirft eine `ArrayIndexOutOfBoundsException`.
Merke dir: **Im Array steht `y` vorne, in der Position `{x, y}` steht `x` vorne.**
:::

```aufgabe
id: pj-sf-rf-grundlagen
titel: Aussagen über ein Spielfeld
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist das ausgefranste Spielfeld

  ```java
  char[][] feld = {
      {'#', '#', '#'},
      {'#', '@', '#', '#', '#'},
      {'#', ' ', '$', '.', '#'},
      {'#', '#', '#', '#', '#'}
  };
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`feld[2][2]` ist die Kiste.'
        richtig: true
        erklaerung: Zeile 2 ist `{'#', ' ', '$', '.', '#'}`, darin hat Index 2 den Wert `'$'`.
      - text: '`feld[0][3]` ist eine Wand.'
        richtig: false
        erklaerung: Zeile 0 hat nur drei Zeichen mit den Indizes 0 bis 2. `feld[0][3]` wirft eine `ArrayIndexOutOfBoundsException`.
      - text: 'Die Figur steht bei `x = 1`, `y = 1`.'
        richtig: true
        erklaerung: In Zeile 1 hat Index 1 den Wert `'@'`. Hier sind Zeile und Spalte zufällig gleich.
      - text: '`feld[3].length` ist 5, und `feld.length` ist ebenfalls 5.'
        richtig: false
        erklaerung: '`feld[3].length` ist 5, aber `feld` hat nur 4 Zeilen.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Zähle die Zeilen des äußeren Arrays. `feld.length` ist die Zahl der Zeilen, nicht die Länge einer Zeile.
      - wert: [r, r, r, f]
        meldung: Zeile 0 ist kürzer als die anderen. Welche Indizes hat sie, und gibt es darin den Index 3?
hinweise:
  - Prüfe bei jedem Zugriff zuerst, ob die Zeile lang genug ist.
loesung: |
  **Ansatz:** Jede Zeile einzeln betrachten, denn die Zeilen sind unterschiedlich lang.
  ---
  `feld[2][2]` ist `'$'`, `feld[1][1]` ist `'@'`. Aussagen 1 und 3 sind richtig. `feld[0]` hat nur die Indizes 0 bis 2, also ist Aussage 2 falsch. `feld` hat 4 Zeilen, also ist Aussage 4 falsch.
```

### Vom Text zum Spielfeld

Jetzt wandeln wir den Level-Text in ein Spielfeld um. Aufgabenblatt 6 (Wintersemester 2023) gibt dafür eine fertige Methode vor. Du sollst sie
trotzdem verstehen, denn im Feedbackgespräch kann jede Zeile des Projekts Thema sein. Die Idee hat zwei Schritte:

1. **Zeilen zählen.** Ein Text mit `k` Zeilenumbrüchen hat `k + 1` Zeilen. Damit legen wir das äußere Array an.
2. **Jede Zeile einzeln bauen.** Wir merken uns, wo die aktuelle Zeile im Text beginnt. Wir suchen ihr Ende, also
   den nächsten Zeilenumbruch oder das Textende. Dann legen wir ein `char[]` genau dieser Länge an und kopieren
   die Zeichen hinein.

:::beispiel[Ein Level-Text wird zum Spielfeld]
```java
public static char[][] feldAusText(String text) {
    int zeilen = 1;
    for (int i = 0; i < text.length(); i++) {
        if (text.charAt(i) == '\n') {
            zeilen++;
        }
    }
    char[][] feld = new char[zeilen][];
    int start = 0;
    for (int y = 0; y < zeilen; y++) {
        int ende = start;
        while (ende < text.length() && text.charAt(ende) != '\n') {
            ende++;
        }
        feld[y] = new char[ende - start];
        for (int x = 0; x < feld[y].length; x++) {
            feld[y][x] = text.charAt(start + x);
        }
        start = ende + 1;
    }
    return feld;
}
```

- Die erste Schleife zählt die Zeilenumbrüche. `zeilen` beginnt bei 1, weil es eine Zeile mehr als Umbrüche gibt.
- `new char[zeilen][]` legt nur das äußere Array an. Die zweite Klammer bleibt leer, weil die Zeilen noch unterschiedlich lang werden dürfen. Bis zur Zuweisung ist jede Zeile `null`, also „noch kein Array“.
- `start` ist der Index im Text, an dem die aktuelle Zeile beginnt.
- Die `while`-Schleife schiebt `ende` weiter, bis dort ein Zeilenumbruch steht oder der Text zu Ende ist. Die Prüfung `ende < text.length()` steht vorne. Sie verhindert, dass `charAt` hinter das Textende greift.
- `feld[y] = new char[ende - start];` legt die Zeile mit der richtigen Länge an.
- Die innere `for`-Schleife kopiert die Zeichen. Zeichen `x` der Zeile steht im Text an der Stelle `start + x`.
- `start = ende + 1;` springt über den Zeilenumbruch zum Anfang der nächsten Zeile.

Für `"##\n#@#"` ergibt sich: zwei Zeilen. Zeile 0 beginnt bei `start = 0` und endet bei `ende = 2`, sie hat Länge 2.
Zeile 1 beginnt bei `start = 3` und endet am Textende `ende = 6`, sie hat Länge 3. Das Ergebnis ist
`{{'#', '#'}, {'#', '@', '#'}}`.
:::

```aufgabe
id: pj-sf-trace-umwandeln
titel: start und ende beim Umwandeln verfolgen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Methode `feldAusText` aus dem Beispiel bekommt den Text `"####\n#@.#\n#\n####"`. Trage für jede Zeile `y`
  die Werte von `start` und `ende` ein, die beim Anlegen von `feld[y]` gelten, und die Länge der Zeile.
teile:
  - typ: trace
    spalten: [start, ende, Länge]
    zeilen: [y = 0, y = 1, y = 2, y = 3]
    loesung: [[0, 4, 4], [5, 9, 4], [10, 11, 1], [12, 16, 4]]
    fehler:
      - wert: ["0", "4", "4", "4", "4", "0", "4", "4", "0", "4", "4", "0"]
        meldung: 'Nach jeder Zeile wird `start = ende + 1` gesetzt. Das `+ 1` springt über den Zeilenumbruch. Ohne es bleibt `start` auf dem Umbruch stehen, und alle weiteren Zeilen werden leer.'
      - wert: ["0", "3", "4", "5", "8", "4", "10", "10", "1", "12", "15", "4"]
        meldung: '`ende` zeigt **auf** den Zeilenumbruch (oder hinter das letzte Zeichen), nicht auf das letzte Zeichen der Zeile. Die Länge ist `ende - start`.'
hinweise:
  - Schreib die Indizes unter den Text. Die Zeilenumbrüche stehen an den Stellen 4, 9 und 11.
  - '`ende` ist der Index des Zeilenumbruchs, beim letzten Stück die Textlänge 16. Danach gilt `start = ende + 1`.'
loesung: |
  **Ansatz:** Die Zeilenumbrüche finden, dann für jede Zeile `start`, `ende` und `ende - start` ablesen.
  ---
  Der Text hat 16 Zeichen. Zeilenumbrüche stehen an den Indizes 4, 9 und 11.
  ---
  Zeile 0: `start = 0`, `ende = 4`, Länge 4. Zeile 1: `start = 5`, `ende = 9`, Länge 4. Zeile 2: `start = 10`, `ende = 11`, Länge 1. Zeile 3: `start = 12`, `ende = 16` (Textende), Länge 4.
  ---
  Kontrolle: Die Längen 4, 4, 1, 4 und drei Umbrüche ergeben `13 + 3 = 16` Zeichen, die ganze Textlänge.
```

```aufgabe
id: pj-sf-zeilen-ausgabe
titel: Fehler in einer Ausgabemethode finden
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Methode soll ein beliebiges, auch ausgefranstes Spielfeld Zeile für Zeile ausgeben. Markiere **alle Zeilen,
  die falsch sind**.
teile:
  - typ: zeilen
    code: |
      public static void zeige(char[][] feld) {
          for (int y = 0; y <= feld.length; y++) {
              for (int x = 0; x < feld[0].length; x++) {
                  System.out.print(feld[x][y]);
              }
              System.out.println();
          }
      }
    loesung: [2, 3, 4]
    fehler:
      - wert: [4]
        meldung: 'Zeile 4 ist falsch, aber nicht allein. Prüfe auch die Grenzen beider Schleifen: Bis wohin darf `y` laufen, und wie lang ist die Zeile `y`?'
      - wert: [2, 4]
        meldung: 'Die innere Schleife verwendet die Länge von Zeile 0. Bei einem ausgefransten Feld passt sie nicht zu jeder Zeile.'
      - wert: [3, 4]
        meldung: '`y <= feld.length` lässt `y` auch den Wert `feld.length` annehmen. Diese Zeile gibt es nicht.'
hinweise:
  - Prüfe jede Schleifengrenze und jeden Zugriff einzeln gegen die Definition `feld[y][x]`.
  - Die letzte gültige Zeile hat den Index `feld.length - 1`. Die Länge der Zeile `y` ist `feld[y].length`.
loesung: |
  **Ansatz:** Beide Schleifengrenzen und den Zugriff mit der Regel „Zeile `y` zuerst, Länge der aktuellen Zeile“ vergleichen.
  ---
  Zeile 2: `y <= feld.length` greift am Ende auf eine Zeile zu, die es nicht gibt. Richtig ist `y < feld.length`. Zeile 3: `feld[0].length` passt nur, wenn alle Zeilen gleich lang sind. Richtig ist `feld[y].length`.
  ---
  Zeile 4: `feld[x][y]` vertauscht Zeile und Spalte. Richtig ist `feld[y][x]`. Die Zeilen 1, 5 und 6 bis 8 sind korrekt.
```

````aufgabe
id: pj-sf-text-aus-feld
titel: Ein Spielfeld zurück in einen Text verwandeln
niveau: 2
lernziel: 0
kompetenz: anwenden
quelle: Umkehrung der vorgegebenen Methode newLevel aus Aufgabenblatt 6, WS 2023 (eigene Aufgabe)
angabe: |
  Implementiere `String textAusFeld(char[][] feld)`. Die Methode setzt alle Zeilen zu einem String zusammen. Zwischen
  zwei Zeilen steht genau ein Zeilenumbruch `'\n'`. Nach der letzten Zeile steht **kein** Zeilenumbruch.
  Vorbedingung (also eine Zusage, auf die sich die Methode verlassen darf, siehe [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)):
  `feld` hat mindestens eine Zeile, und keine Zeile ist `null`.

  Beispiel: Für `{{'#', '#'}, {'#', '@', '#'}}` liefert die Methode `"##\n#@#"`.
teile:
  - typ: code
    vorlage: |
      public class Umwandeln {
          public static String textAusFeld(char[][] feld) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Umwandeln {
          public static String textAusFeld(char[][] feld) {
              String text = "";
              for (int y = 0; y < feld.length; y++) {
                  if (y > 0) {
                      text += "\n";
                  }
                  for (int x = 0; x < feld[y].length; x++) {
                      text += feld[y][x];
                  }
              }
              return text;
          }
      }
    tests:
      - { aufruf: "textAusFeld(new char[][]{{'#', '#'}, {'#', '@', '#'}})", erwartet: '"##\n#@#"' }
      - { aufruf: "textAusFeld(new char[][]{{'#', '$', '.'}})", erwartet: '"#$."', beschreibung: "eine einzige Zeile: kein Umbruch" }
      - { aufruf: "textAusFeld(new char[][]{{'#'}, {}, {'@'}})", erwartet: '"#\n\n@"', beschreibung: "leere Zeile in der Mitte" }
      - { aufruf: "textAusFeld(new char[][]{\"  ###\".toCharArray(), \"### #\".toCharArray(), \"#@$.#\".toCharArray()})", erwartet: '"  ###\n### #\n#@$.#"', versteckt: true }
    fehler:
      - { wert: 1, meldung: "Nach der letzten Zeile darf kein Zeilenumbruch stehen. Setze den Umbruch **vor** jede Zeile außer der ersten, dann gibt es genau einen zwischen zwei Zeilen." }
      - { wert: 2, meldung: "Bei nur einer Zeile darf überhaupt kein Zeilenumbruch erscheinen." }
hinweise:
  - 'Das ist das Zaunpfahlproblem aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem): Bei `n` Zeilen gibt es nur `n - 1` Trennzeichen.'
  - Hänge den Umbruch nur an, wenn schon eine Zeile im Text steht, also bei `y > 0`. Danach hängst du die Zeichen der Zeile einzeln an.
loesung: |
  **Ansatz:** Das ist das **Zaunpfahlproblem** aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem): Zwischen `n` Zeilen stehen nur `n - 1` Trennzeichen. Darum schreiben wir den Umbruch **vor** jede Zeile außer der ersten.
  ---
  ```java
  String text = "";
  for (int y = 0; y < feld.length; y++) {
      if (y > 0) {
          text += "\n";
      }
      for (int x = 0; x < feld[y].length; x++) {
          text += feld[y][x];
      }
  }
  return text;
  ```
  ---
  `text += feld[y][x]` hängt ein `char` an einen String an. Weil links schon ein String steht, wird verkettet und nicht gerechnet.
  ---
  Probe mit `{{'#', '#'}, {'#', '@', '#'}}`: Bei `y = 0` kommt `##`, bei `y = 1` zuerst `\n`, dann `#@#`. Ergebnis `"##\n#@#"`.
````

```aufgabe
id: pj-sf-warum-zeilen
titel: Warum ein char-Array statt eines Strings?
niveau: 2
lernziel: 0
kompetenz: begruenden
quelle: nach den Zusatzfragen der Aufgabenblätter (eigene Frage)
angabe: |
  Eine Tutorin fragt im Feedbackgespräch: „Das Level steht doch schon im String `text`. Warum wandelt das Programm
  es in ein `char[][]` um? Und warum ist das Array **ausgefranst** statt rechteckig?“ Beantworte beide Fragen in drei
  bis fünf Sätzen.
teile:
  - typ: text
    muster: |
      In einem `char[][]` erreiche ich jedes Feld direkt mit `feld[y][x]`. Das Nachbarfeld rechts ist `feld[y][x + 1]`,
      das darüber `feld[y - 1][x]`. Im String müsste ich dafür Indizes über die Zeilenumbrüche hinweg ausrechnen, und
      das ist fehleranfällig, besonders wenn die Zeilen verschieden lang sind. Außerdem ist ein String in Java
      unveränderlich: Für jeden Zug müsste ein neuer String gebaut werden, während ich im Array einfach einzelne
      Zeichen überschreibe. Ausgefranst ist das Array, weil jede Zeile genau so lang wird wie die Textzeile. So
      entstehen keine erfundenen Felder rechts außerhalb des Levels.
hinweise:
  - Wie kommst du im String an das Zeichen genau über der Figur?
  - Kann man in einem String ein einzelnes Zeichen überschreiben?
loesung: |
  **Ansatz:** Zwei Vorteile des Arrays nennen (direkter Zugriff, veränderbar) und den Grund für die Zeilenlängen.
  ---
  Direkter Zugriff: `feld[y][x]` statt Indexrechnung über Zeilenumbrüche. Nachbarn erreicht man mit `x ± 1` oder `y ± 1`.
  ---
  Veränderbar: Strings kann man nicht verändern, ein `char`-Array schon. Jeder Zug überschreibt nur zwei oder drei Zeichen.
  ---
  Ausgefranst: Jede Zeile ist so lang wie im Text. Rechts außerhalb des Levels entsteht kein künstliches Feld.
```

````aufgabe
id: pj-sf-rechteckig
titel: Ein ausgefranstes Feld rechteckig machen
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: Programmiertest, Muster „auf Ziellänge bringen“ (getRectangular), auf ein Spielfeld übertragen
angabe: |
  Implementiere `char[][] rechteckig(char[][] feld)`. Die Methode liefert ein **neues** Spielfeld mit genauso vielen
  Zeilen wie `feld`. Jede neue Zeile ist so lang wie die **längste** Zeile von `feld`. Vorne stehen die Zeichen der
  alten Zeile, der Rest wird mit Leerzeichen `' '` aufgefüllt. Das übergebene `feld` darf nicht verändert werden.
  Vorbedingung: `feld` hat mindestens eine Zeile, keine Zeile ist `null`.

  Beispiel: Aus `{{'#', '#'}, {'#', '@', '#'}}` wird `{{'#', '#', ' '}, {'#', '@', '#'}}`.
teile:
  - typ: code
    vorlage: |
      public class Rechteck {
          public static char[][] rechteckig(char[][] feld) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Rechteck {
          public static char[][] rechteckig(char[][] feld) {
              int breite = 0;
              for (int y = 0; y < feld.length; y++) {
                  if (feld[y].length > breite) {
                      breite = feld[y].length;
                  }
              }
              char[][] neu = new char[feld.length][breite];
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < breite; x++) {
                      if (x < feld[y].length) {
                          neu[y][x] = feld[y][x];
                      } else {
                          neu[y][x] = ' ';
                      }
                  }
              }
              return neu;
          }
      }
    tests:
      - { aufruf: "rechteckig(new char[][]{{'#', '#'}, {'#', '@', '#'}})", erwartet: "new char[][]{{'#', '#', ' '}, {'#', '@', '#'}}" }
      - { aufruf: "rechteckig(new char[][]{{'#', '#', '#'}, {'#'}})", erwartet: "new char[][]{{'#', '#', '#'}, {'#', ' ', ' '}}", beschreibung: "längste Zeile vorne" }
      - { aufruf: "rechteckig(new char[][]{{'#', '.'}, {'@', '$'}})", erwartet: "new char[][]{{'#', '.'}, {'@', '$'}}", beschreibung: "schon rechteckig" }
      - { vorher: "char[][] f = {{'#'}, {'#', '@'}};", aufruf: "rechteckig(f)", ergebnis: "f", erwartet: "new char[][]{{'#'}, {'#', '@'}}", beschreibung: "Original bleibt unverändert" }
      - { aufruf: "rechteckig(new char[][]{{}, {'$', ' ', '.'}, {'#'}})", erwartet: "new char[][]{{' ', ' ', ' '}, {'$', ' ', '.'}, {'#', ' ', ' '}}", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Die längste Zeile muss nicht die erste sein. Bestimme die Breite als Maximum über **alle** Zeilen." }
      - { wert: 4, meldung: "Das übergebene Feld wurde verändert. Lege mit `new char[...][...]` ein neues Array an und kopiere die Zeichen hinein." }
hinweise:
  - Zwei Schritte. Zuerst die größte Zeilenlänge suchen, dann ein neues rechteckiges Array anlegen und füllen.
  - '`new char[feld.length][breite]` legt alle Zeilen gleich lang an. Die Standardwerte sind das Zeichen mit Code 0, nicht das Leerzeichen. Fülle darum auch die Rest-Felder ausdrücklich mit `'' ''`.'
loesung: |
  **Ansatz:** Zuerst das Maximum der Zeilenlängen bestimmen, wie die Suche nach dem größten Element in einem Array. Dann ein neues Array dieser Breite füllen.
  ---
  ```java
  int breite = 0;
  for (int y = 0; y < feld.length; y++) {
      if (feld[y].length > breite) {
          breite = feld[y].length;
      }
  }
  ```
  ---
  ```java
  char[][] neu = new char[feld.length][breite];
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < breite; x++) {
          if (x < feld[y].length) {
              neu[y][x] = feld[y][x];
          } else {
              neu[y][x] = ' ';
          }
      }
  }
  return neu;
  ```
  ---
  Warum das `else`? Ein neues `char`-Array ist mit dem Zeichen mit Code 0 gefüllt (geschrieben `'\u0000'`), nicht mit Leerzeichen. Probe mit `{{'#'}, {'#', '@'}}`: Breite 2, Ergebnis `{{'#', ' '}, {'#', '@'}}`, das Original bleibt gleich.
````

```reflexion
frage: Warum ist es kein Widerspruch, dass die Position der Figur als `{x, y}` gespeichert wird, der Zugriff aber `feld[y][x]` lautet?
antwort: |
  Die beiden Schreibweisen beschreiben verschiedene Dinge. `{x, y}` ist eine **Position**, so wie man sie aus der
  Mathematik kennt: erst die Spalte (waagrecht), dann die Zeile (senkrecht). `feld[y][x]` ist ein **Zugriff** auf ein
  Array von Zeilen: Man muss zuerst die Zeile auswählen, bevor man darin eine Stelle wählen kann. Wichtig ist nur,
  beim Übergang sauber umzusetzen: Aus `int[] pos = {x, y}` wird `feld[pos[1]][pos[0]]`.
```

## Figur und Kisten finden

```aufgabe
id: pj-su-check-suche
titel: Suchen und sofort aufhören
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren))
teile:
  - typ: ausgabe
    code: |
      String s = "# $ $#";
      int stelle = -1;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == '$') {
              stelle = i;
              break;
          }
      }
      System.out.println(stelle);
    loesung: |
      2
    fehler:
      - wert: "4"
        meldung: '`break` beendet die Schleife beim **ersten** Treffer. Das zweite Dollarzeichen an Index 4 wird gar nicht mehr erreicht.'
      - wert: "3"
        meldung: Die Zählung beginnt bei 0. Das erste Dollarzeichen ist das dritte Zeichen und hat den Index 2.
hinweise:
  - Schreib die Indizes 0 bis 5 unter die Zeichen und geh sie der Reihe nach durch.
loesung: |
  Die Schleife prüft Index 0 (`#`) und Index 1 (Leerzeichen). Bei Index 2 steht `$`.
  ---
  `stelle` wird 2, und `break` beendet die Schleife sofort. Ausgabe `2`.
```

Ein Spiel muss ständig fragen: Wo steht die Figur? Wo liegen die Kisten? Wie viele Zielpunkte hat das Level? Alle drei
Fragen beantwortest du mit demselben Werkzeug: zwei verschachtelte Schleifen über das ganze Spielfeld, wie beim
Ausgeben in [16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld). Nur das, was
bei einem Treffer passiert, ändert sich:

- **Zählen:** Bei jedem Treffer wird ein Zähler um 1 erhöht. Am Ende liefert die Methode den Zähler.
- **Eine Position finden:** Beim ersten Treffer liefert die Methode sofort die Position.
- **Alle Positionen sammeln:** Jeder Treffer wird in ein Ergebnis-Array geschrieben.

In den Beispielen dieser Lektion verwenden wir dieses Level:

```
#######
# .$  #
#  @$ #
#   . #
#######
```

Damit man ein Spielfeld im Code bequem hinschreiben kann, verwenden die Aufgaben oft die String-Methode
`toCharArray()`. Sie macht aus einem String ein `char`-Array mit denselben Zeichen. `"#@ #".toCharArray()` ist also
das Array `{'#', '@', ' ', '#'}`. Ein ganzes Spielfeld schreibt man dann so:

```java
char[][] feld = {
    "#######".toCharArray(),
    "# .$  #".toCharArray(),
    "#  @$ #".toCharArray(),
    "#   . #".toCharArray(),
    "#######".toCharArray()
};
```

:::beispiel[Ein Zeichen im ganzen Spielfeld zählen]
```java
public static int zaehleImFeld(char[][] feld, char c) {
    int anzahl = 0;
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == c) {
                anzahl++;
            }
        }
    }
    return anzahl;
}
```

- `int anzahl = 0;` ist der Zähler. Er steht **vor** beiden Schleifen, damit er über das ganze Feld weiterzählt.
- Die beiden Schleifen besuchen jedes Feld genau einmal, Zeile für Zeile.
- `if (feld[y][x] == c)` vergleicht zwei `char`-Werte mit `==`.
- `return anzahl;` steht **nach** beiden Schleifen. Erst wenn alle Felder besucht sind, steht das Ergebnis fest.

Für das Level dieser Lektion liefert `zaehleImFeld(feld, '$')` den Wert 2. Die Kisten liegen in Zeile 1 und Zeile 2.
`zaehleImFeld(feld, '#')` liefert 20: 7 Wände oben, 7 unten und je 2 am Rand der drei mittleren Zeilen.
:::

Die Methode `numberOfGoals` aus Aufgabenblatt 6 (Wintersemester 2023) macht dasselbe auf dem Level-**Text** statt auf dem Spielfeld. Sie zählt die
Punkte `'.'` im String. Dann reicht eine einzige Schleife über `text.length()` Zeichen. Die Zeilenumbrüche stören
nicht, denn ein `'\n'` ist kein Punkt.

```aufgabe
id: pj-su-code-ziele
titel: Zielpunkte im Level-Text zählen
niveau: 1
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2023, Methode numberOfGoals (nachgebaut, eigene Testdaten)
angabe: |
  Implementiere `int zaehleZiele(String text)`. Die Methode zählt, wie oft der Punkt `'.'` im Level-Text vorkommt.
  Vorbedingung: `text != null`.

  Beispiel: `zaehleZiele("#.$@.#")` liefert 2.
teile:
  - typ: code
    vorlage: |
      public class Ziele {
          public static int zaehleZiele(String text) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ziele {
          public static int zaehleZiele(String text) {
              int anzahl = 0;
              for (int i = 0; i < text.length(); i++) {
                  if (text.charAt(i) == '.') {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: 'zaehleZiele("#.$@.#")', erwartet: "2" }
      - { aufruf: 'zaehleZiele("######")', erwartet: "0", beschreibung: "Level ohne Ziel" }
      - { aufruf: 'zaehleZiele(".")', erwartet: "1", beschreibung: "Punkt am Anfang und Ende" }
      - { aufruf: 'zaehleZiele("  ###\n#.@ #\n#..$#\n#####")', erwartet: "3", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Ein Punkt an Index 0 wird nicht gezählt? Die Schleife muss bei `i = 0` beginnen und bis `i < text.length()` laufen." }
hinweise:
  - Eine Schleife über alle Zeichen des Strings und ein Zähler genügen.
loesung: |
  **Ansatz:** Zählen mit einer Schleife wie in [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings).
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == '.') {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Probe: In `"#.$@.#"` stehen Punkte an den Indizes 1 und 4, das Ergebnis ist 2.
```

### Die Position der Figur finden

Die Position eines Feldes besteht aus **zwei** Zahlen, `x` und `y`. Eine Java-Methode kann aber nur **einen**
Wert zurückgeben. Die Lösung von Aufgabenblatt 6: Die Methode gibt ein kleines `int`-Array mit zwei Elementen zurück. An
Index 0 steht `x`, an Index 1 steht `y`. Man schreibt es als `new int[]{x, y}`. Das ist eine Kurzform, die ein neues
Array anlegt und gleich mit den Werten in den geschweiften Klammern füllt.

:::beispiel[Die Spielfigur suchen]
```java
public static int[] findeFigur(char[][] feld) {
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '@') {
                return new int[]{x, y};
            }
        }
    }
    return null;
}
```

- Der Rückgabetyp `int[]` sagt: Die Methode liefert ein `int`-Array.
- Beim ersten `'@'` liefert `return new int[]{x, y};` sofort die Position. Das `return` beendet **beide** Schleifen und die ganze Methode auf einmal.
- `return null;` am Ende wird nur erreicht, wenn keine Figur gefunden wurde. `null` bedeutet „kein Array“. Aufgabenblatt 6 verspricht als **Vorbedingung**, dass genau eine Figur im Feld steht. Trotzdem verlangt der Compiler eine Anweisung `return`, die nach den Schleifen erreicht werden kann.

Für das Level dieser Lektion steht `'@'` in Zeile 2 an der Stelle 3. Die Methode liefert `{3, 2}`. Wer damit wieder
auf das Feld zugreifen will, schreibt `int[] pos = findeFigur(feld);` und dann `feld[pos[1]][pos[0]]`. Das ist
`feld[2][3]`, also wirklich `'@'`.
:::

:::achtung[Die Position als {y, x} zurückgegeben]
Weil die Schleifen in der Reihenfolge `y`, dann `x` stehen, schreiben viele auch `return new int[]{y, x};`. Für das
Level dieser Lektion liefert die Methode dann `{2, 3}` statt `{3, 2}`. Der Code, der die Methode aufruft, greift mit
`feld[pos[1]][pos[0]]` auf `feld[3][2]` zu. Dort liegt ein Leerzeichen und nicht die Figur. Jeder folgende Zug geht
von einer falschen Position aus. Halte dich an die Abmachung von Aufgabenblatt 6: **Positionen immer als `{x, y}`.**
:::

:::achtung[Das letzte return vergessen]
Diese Fassung kompiliert nicht:

```java
public static int[] findeFigur(char[][] feld) {
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '@') {
                return new int[]{x, y};
            }
        }
    }
}   // Fehler: missing return statement
```

Der Compiler meldet `missing return statement`, also „Anweisung return fehlt“. Er prüft nicht, ob die Vorbedingung
eine Figur garantiert. Er sieht nur: Wenn die Schleifen ohne Treffer enden, liefert die Methode nichts. Die Reparatur
ist ein `return null;` nach den Schleifen.
:::

```aufgabe
id: pj-su-gefuehrt
titel: Eine gefundene Position benutzen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Methode `findeFigur` ist die aus dem Beispiel. Was gibt das Programm aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Suche {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static void main(String[] args) {
              char[][] feld = {
                  "######".toCharArray(),
                  "#. $ #".toCharArray(),
                  "#   @#".toCharArray(),
                  "######".toCharArray()
              };
              int[] pos = findeFigur(feld);
              System.out.println(pos[0] + " " + pos[1]);
              System.out.println(feld[pos[1] - 1][pos[0] - 1]);
          }
      }
    loesung: |
      4 2
      $
    fehler:
      - wert: "2 4\n#"
        meldung: '`pos[0]` ist `x`, die Spalte, und `pos[1]` ist `y`, die Zeile. Die Figur steht in Zeile 2 an der Stelle 4.'
      - wert: "4 2\n "
        meldung: '`feld[pos[1] - 1][pos[0] - 1]` ist `feld[1][3]`, eine Zeile höher und eine Spalte weiter links als die Figur. Zähle in `"#. $ #"` ab Index 0.'
gefuehrt:
  - text: In welcher Zeile `y` steht die Figur?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Die Zeilen sind 0 (`######`), 1 (`#. $ #`) und 2 (`#   @#`). Die Figur steht in Zeile 2.
  - text: An welcher Stelle `x` steht sie in dieser Zeile?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: In `"#   @#"` haben die Zeichen die Indizes 0 bis 5. Das `@` hat den Index 4.
  - text: Welches Array liefert `findeFigur(feld)`?
    teil:
      typ: auswahl
      optionen: ['`{4, 2}`', '`{2, 4}`', '`{4, 2, 0}`']
      richtig: [0]
    erklaerung: Die Methode liefert `new int[]{x, y}`, also zuerst die Spalte 4, dann die Zeile 2.
  - text: Welches Zeichen ist `feld[1][3]`?
    teil:
      typ: auswahl
      optionen: ["`'$'`", "`' '`", "`'.'`"]
      richtig: [0]
    erklaerung: 'Zeile 1 ist `"#. $ #"`. Index 0 ist `#`, 1 ist `.`, 2 ist ein Leerzeichen, 3 ist `$`.'
hinweise:
  - Bestimme zuerst `x` und `y` der Figur. Dann rechne `pos[1] - 1` und `pos[0] - 1` aus.
loesung: |
  **Ansatz:** Die Figur suchen, die Position als `{x, y}` notieren und dann den zweiten Zugriff ausrechnen.
  ---
  Die Figur steht in Zeile 2 an der Stelle 4. `pos` ist `{4, 2}`, die erste Ausgabe lautet `4 2`.
  ---
  `feld[pos[1] - 1][pos[0] - 1]` ist `feld[1][3]`. Das ist das Feld schräg links über der Figur, dort liegt die Kiste `$`.
```

```aufgabe
id: pj-su-auswahl-pos
titel: Welche Position liefert die Suche?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  `findeFigur` aus dem Beispiel bekommt dieses Spielfeld:

  ```
  #####
  #  .#
  #$  #
  # @ #
  #####
  ```

  Welches Array liefert die Methode?
teile:
  - typ: auswahl
    optionen: ['`{2, 3}`', '`{3, 2}`', '`{2, 2}`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist `{y, x}`. Die Methode liefert die Spalte zuerst. Die Figur steht in Spalte 2 und Zeile 3.
      - wert: 2
        meldung: Zähle die Zeilen ab 0. Die oberste Wandzeile ist Zeile 0, die Figur steht in Zeile 3.
hinweise:
  - Zähle Zeilen und Spalten ab 0 und gib zuerst die Spalte an.
loesung: |
  **Ansatz:** Zeile und Spalte der Figur abzählen, dann in der Reihenfolge `{x, y}` notieren.
  ---
  Die Figur steht in Zeile 3 (`# @ #`) an der Stelle 2. Die Methode liefert `{2, 3}`.
```

```aufgabe
id: pj-su-ausgabe-letzte
titel: Ohne return gefunden
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Diese Suche beendet die Schleifen nicht beim ersten Treffer. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      char[][] feld = {
          "#$ #".toCharArray(),
          "# $#".toCharArray(),
          "#$ #".toCharArray()
      };
      int gx = -1;
      int gy = -1;
      for (int y = 0; y < feld.length; y++) {
          for (int x = 0; x < feld[y].length; x++) {
              if (feld[y][x] == '$') {
                  gx = x;
                  gy = y;
              }
          }
      }
      System.out.println(gx + " " + gy);
    loesung: |
      1 2
    fehler:
      - wert: "1 0"
        meldung: Ohne `return` oder `break` läuft die Suche bis zum Ende weiter. Jeder spätere Treffer überschreibt `gx` und `gy`. Es bleibt der **letzte** Treffer übrig.
      - wert: "2 1"
        meldung: 'Das ist die zweite Kiste. Die Suche läuft danach noch durch Zeile 2. Dort liegt eine dritte Kiste bei `x = 1`.'
hinweise:
  - Notiere jeden Treffer in der Reihenfolge, in der die Schleifen die Felder besuchen.
  - Am Ende steht in `gx` und `gy` der zuletzt gefundene Treffer.
loesung: |
  **Ansatz:** Treffer in Lesereihenfolge aufschreiben. Jeder Treffer überschreibt die vorigen Werte.
  ---
  Die Treffer sind `(1, 0)`, `(2, 1)` und `(1, 2)`.
  ---
  Der letzte Treffer bleibt stehen: Ausgabe `1 2`. So findet man das **letzte** Vorkommen statt des ersten.
```

### Alle Kisten sammeln

Die Methode `boxPositions` von Aufgabenblatt 6 liefert die Positionen **aller** Kisten. Das Ergebnis ist ein Array von
Positionen, also ein `int[][]`. Jede Zeile ist eine Position `{x, y}`. Die Zahl der Kisten bekommt die Methode als
Parameter `anzahl` mitgeliefert. So kann sie das Ergebnis-Array gleich in der richtigen Größe anlegen.

Eine Schwierigkeit gibt es: Die Schleifenvariablen `y` und `x` beschreiben das Spielfeld. Wo im Ergebnis der nächste
Treffer hingehört, sagt keine von beiden. Dafür brauchen wir einen eigenen **Schreibindex** `k`. Er zeigt immer auf
die nächste freie Zeile im Ergebnis und wächst nur bei einem Treffer.

:::beispiel[Die Positionen aller Kisten sammeln]
```java
public static int[][] kistenPositionen(char[][] feld, int anzahl) {
    int[][] ergebnis = new int[anzahl][];
    int k = 0;
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '$') {
                ergebnis[k] = new int[]{x, y};
                k++;
            }
        }
    }
    return ergebnis;
}
```

- `new int[anzahl][]` legt `anzahl` leere Plätze für Positionen an.
- `k` beginnt bei 0. Bei jedem Treffer wird die Position an Platz `k` gespeichert, dann rückt `k` um eins weiter.
- Die Kisten landen in **Lesereihenfolge** im Ergebnis: zuerst Zeile 0 von links nach rechts, dann Zeile 1 und so weiter.

Für das Level dieser Lektion liegen die Kisten bei `(3, 1)` und `(4, 2)`. Der Ablauf:

1. Zeile 1, Stelle 3: Treffer. `ergebnis[0] = {3, 1}`, danach ist `k = 1`.
2. Zeile 2, Stelle 4: Treffer. `ergebnis[1] = {4, 2}`, danach ist `k = 2`.
3. Keine weiteren Treffer. Das Ergebnis ist `{{3, 1}, {4, 2}}`.
:::

```aufgabe
id: pj-su-trace-kisten
titel: Den Schreibindex k verfolgen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  `kistenPositionen` aus dem Beispiel bekommt dieses Spielfeld und `anzahl = 3`:

  ```
  ######
  #$  $#
  # @. #
  #.$ .#
  ######
  ```

  Trage für jeden Treffer die gespeicherte Position und den Wert von `k` **nach** dem Speichern ein.
teile:
  - typ: trace
    spalten: [x, y, k danach]
    zeilen: [1. Treffer, 2. Treffer, 3. Treffer]
    loesung: [[1, 1, 1], [4, 1, 2], [2, 3, 3]]
    fehler:
      - wert: ["1", "1", "1", "1", "4", "2", "3", "2", "3"]
        meldung: 'In der Spalte `x` steht die Spalte des Treffers, in `y` die Zeile. Die zweite Kiste liegt in Zeile 1 an der Stelle 4, also `x = 4`, `y = 1`.'
      - wert: ["1", "1", "1", "2", "3", "2", "4", "1", "3"]
        meldung: Die äußere Schleife läuft über die Zeilen. Gefunden wird in Lesereihenfolge, also beide Kisten in Zeile 1 vor der Kiste in Zeile 3.
hinweise:
  - Lies das Feld wie einen Text, Zeile für Zeile von links nach rechts.
  - '`k` steigt bei jedem Treffer um 1, beginnend bei 0. Nach dem ersten Treffer ist `k = 1`.'
loesung: |
  **Ansatz:** Treffer in Lesereihenfolge suchen und `k` mitzählen.
  ---
  Zeile 1 (`#$  $#`) hat Kisten an den Stellen 1 und 4. Zeile 2 hat keine Kiste. Zeile 3 (`#.$ .#`) hat eine Kiste an Stelle 2.
  ---
  Gespeichert werden `{1, 1}`, `{4, 1}` und `{2, 3}`. Danach ist `k` jeweils 1, 2 und 3. Am Ende ist `k` gleich `anzahl`, alle Plätze sind gefüllt.
```

```aufgabe
id: pj-su-lueckentext-letzte
titel: Die letzte Kiste von hinten suchen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Methode soll die Position der **letzten** Kiste in Lesereihenfolge liefern. Sie sucht dazu von hinten, also
  von der untersten Zeile aufwärts und in jeder Zeile von rechts nach links. Gibt es keine Kiste, liefert sie `null`.
  Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public static int[] letzteKiste(char[][] feld) {
          for (int y = ___; y >= 0; y--) {
              for (int x = ___; x >= 0; ___) {
                  if (feld[y][x] == '$') {
                      return ___;
                  }
              }
          }
          return null;
      }
    luecken: [["feld.length - 1", "feld.length-1"], ["feld[y].length - 1", "feld[y].length-1"], ["x--", "x -= 1", "x = x - 1"], ["new int[]{x, y}", "new int[] {x, y}", "new int[]{x,y}"]]
    kompilieren: false
    fehler:
      - wert: ["feld.length", "feld[y].length - 1", "x--", "new int[]{x, y}"]
        meldung: 'Der letzte gültige Zeilenindex ist `feld.length - 1`. Mit `feld.length` greift `feld[y]` gleich beim ersten Durchlauf ins Leere.'
      - wert: ["feld.length - 1", "feld[0].length - 1", "x--", "new int[]{x, y}"]
        meldung: 'Die Zeilen können unterschiedlich lang sein. Jede Zeile beginnt bei ihrem eigenen letzten Index `feld[y].length - 1`.'
      - wert: ["feld.length - 1", "feld[y].length - 1", "x--", "new int[]{y, x}"]
        meldung: Positionen werden als `{x, y}` geliefert, die Spalte zuerst.
hinweise:
  - Rückwärts beginnt jede Schleife beim letzten gültigen Index und zählt herunter.
  - Der letzte Index einer Zeile ist ihre Länge minus 1. Die Position ist ein neues Array mit Spalte und Zeile.
loesung: |
  **Ansatz:** Dieselbe Doppelschleife wie bei `findeFigur`, aber beide Schleifen laufen rückwärts. Der erste Treffer von hinten ist der letzte in Lesereihenfolge.
  ---
  Die Zeilenschleife beginnt bei `feld.length - 1`. Die Spaltenschleife beginnt bei `feld[y].length - 1` und zählt mit `x--` herunter.
  ---
  Beim ersten Treffer liefert `return new int[]{x, y};` die Position. Ohne Kiste wird `return null;` erreicht.
```

````aufgabe
id: pj-su-code-je-zeile
titel: Kisten je Zeile zählen
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 6 K1, WS 2017, Methode arrSearchValues (Idee übernommen, auf ein Spielfeld übertragen)
angabe: |
  Implementiere `int[] kistenJeZeile(char[][] feld)`. Die Methode liefert ein neues Array, das so lang ist, wie
  `feld` Zeilen hat. An Stelle `y` steht, wie viele Kisten `'$'` in Zeile `y` liegen. Die Zeilen können
  unterschiedlich lang sein. Vorbedingung: Keine Zeile ist `null`.

  Beispiel: Für `{"#$$#".toCharArray(), "# #".toCharArray(), "#$ .#".toCharArray()}` liefert die Methode `{2, 0, 1}`.
teile:
  - typ: code
    vorlage: |
      public class JeZeile {
          public static int[] kistenJeZeile(char[][] feld) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class JeZeile {
          public static int[] kistenJeZeile(char[][] feld) {
              int[] anzahl = new int[feld.length];
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '$') {
                          anzahl[y]++;
                      }
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: 'kistenJeZeile(new char[][]{"#$$#".toCharArray(), "# #".toCharArray(), "#$ .#".toCharArray()})', erwartet: "new int[]{2, 0, 1}" }
      - { aufruf: 'kistenJeZeile(new char[][]{"####".toCharArray()})', erwartet: "new int[]{0}", beschreibung: "keine Kiste" }
      - { aufruf: 'kistenJeZeile(new char[][]{"#".toCharArray(), "#$$$$#".toCharArray()})', erwartet: "new int[]{0, 4}", beschreibung: "zweite Zeile länger als die erste" }
      - { aufruf: 'kistenJeZeile(new char[][]{})', erwartet: "new int[]{}", beschreibung: "Feld ohne Zeilen", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Die zweite Zeile ist länger als die erste. Die innere Schleife muss bis `feld[y].length` laufen, nicht bis `feld[0].length`." }
      - { wert: 1, meldung: "Zählst du alle Kisten in eine einzige Variable? Jede Zeile braucht ihren eigenen Zähler, also ein Array mit einem Platz je Zeile." }
hinweise:
  - Das Ergebnis-Array hat einen Platz je Zeile. Neue `int`-Arrays sind mit 0 gefüllt.
  - Bei einem Treffer in Zeile `y` erhöhst du `anzahl[y]` um 1.
loesung: |
  **Ansatz:** Ein Zähler-Array mit einem Platz je Zeile. Der Zähler der Zeile `y` ist `anzahl[y]`.
  ---
  ```java
  int[] anzahl = new int[feld.length];
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < feld[y].length; x++) {
          if (feld[y][x] == '$') {
              anzahl[y]++;
          }
      }
  }
  return anzahl;
  ```
  ---
  Ein neues `int`-Array ist mit 0 gefüllt. Darum braucht es keine eigene Startzuweisung.
  ---
  Probe mit dem Beispiel: Zeile 0 hat zwei Kisten, Zeile 1 keine, Zeile 2 eine. Ergebnis `{2, 0, 1}`.
````

````aufgabe
id: pj-su-code-nte
titel: Das n-te Vorkommen eines Zeichens
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Implementiere `int[] nteStelle(char[][] feld, char c, int n)`. Die Methode liefert die Position `{x, y}` des
  `n`-ten Vorkommens von `c` in Lesereihenfolge. Das erste Vorkommen hat die Nummer 1. Kommt `c` weniger als
  `n`-mal vor, liefert die Methode `null`. Vorbedingungen: `n ≥ 1`, keine Zeile ist `null`.

  Beispiel: Im Feld `{"#$ $".toCharArray(), "$#".toCharArray()}` liefert `nteStelle(feld, '$', 2)` die Position
  `{3, 0}` und `nteStelle(feld, '$', 4)` den Wert `null`.
teile:
  - typ: code
    vorlage: |
      public class NteStelle {
          public static int[] nteStelle(char[][] feld, char c, int n) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class NteStelle {
          public static int[] nteStelle(char[][] feld, char c, int n) {
              int gefunden = 0;
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == c) {
                          gefunden++;
                          if (gefunden == n) {
                              return new int[]{x, y};
                          }
                      }
                  }
              }
              return null;
          }
      }
    tests:
      - { aufruf: "nteStelle(new char[][]{\"#$ $\".toCharArray(), \"$#\".toCharArray()}, '$', 2)", erwartet: "new int[]{3, 0}" }
      - { aufruf: "nteStelle(new char[][]{\"#$ $\".toCharArray(), \"$#\".toCharArray()}, '$', 3)", erwartet: "new int[]{0, 1}", beschreibung: "Vorkommen in der nächsten Zeile" }
      - { aufruf: "nteStelle(new char[][]{\"#$ $\".toCharArray(), \"$#\".toCharArray()}, '$', 4)", erwartet: "null", beschreibung: "zu wenige Vorkommen" }
      - { aufruf: "nteStelle(new char[][]{\"@\".toCharArray()}, '@', 1)", erwartet: "new int[]{0, 0}", beschreibung: "erstes Vorkommen" }
      - { aufruf: "nteStelle(new char[][]{\"..\".toCharArray(), \"\".toCharArray(), \" .#.\".toCharArray()}, '.', 4)", erwartet: "new int[]{3, 2}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zählst du ab 0? Das erste Vorkommen hat die Nummer 1. Erhöhe den Zähler **vor** dem Vergleich mit `n`." }
      - { wert: 3, meldung: "Wenn `c` zu selten vorkommt, muss die Methode nach den Schleifen `null` liefern." }
hinweise:
  - Du brauchst einen Zähler für die Treffer. Er wächst nur, wenn `feld[y][x] == c` gilt.
  - Sobald der Zähler gleich `n` ist, lieferst du sofort `new int[]{x, y}`. Nach den Schleifen steht `return null;`.
loesung: |
  **Ansatz:** Eine Suche wie `findeFigur`, aber erst beim `n`-ten Treffer wird die Position zurückgegeben. Ein Zähler merkt sich, wie viele Treffer es schon gab.
  ---
  ```java
  int gefunden = 0;
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < feld[y].length; x++) {
          if (feld[y][x] == c) {
              gefunden++;
              if (gefunden == n) {
                  return new int[]{x, y};
              }
          }
      }
  }
  return null;
  ```
  ---
  Die Reihenfolge im `if` ist wichtig: Zuerst wird der Treffer gezählt, dann verglichen. So passt die Zählung ab 1.
  ---
  Probe mit dem Beispiel: Die `$` stehen bei `(1, 0)`, `(3, 0)` und `(0, 1)`. Der zweite Treffer ist `{3, 0}`. Einen vierten gibt es nicht, also `null`.
````

```reflexion
frage: Aufgabenblatt 6 verspricht als Vorbedingung, dass die Figur genau einmal im Feld steht. Was würde `findeFigur` liefern, wenn diese Vorbedingung verletzt wäre, also bei zwei Figuren oder bei keiner?
antwort: |
  Bei zwei Figuren liefert die Methode die Position der ersten in Lesereihenfolge, denn das `return` beendet die Suche
  beim ersten Treffer. Die zweite Figur wird nie gesehen. Bei keiner Figur erreicht die Methode `return null;`. Der
  Aufrufer würde dann bei `pos[0]` mit einer `NullPointerException` abbrechen, weil `null` kein Array ist. Die
  Vorbedingung erlaubt uns, diese Fälle nicht eigens zu behandeln. Sie legt aber auch fest, wer schuld ist, wenn es
  doch passiert: der Aufrufer, nicht die Methode.
```

## Richtungen und Nachbarfelder

```aufgabe
id: pj-ri-check-oben
titel: Wo ist oben im Fenster?
niveau: 1
art: check
angabe: |
  In CodeDraw liegt der Punkt `(0, 0)` in der linken oberen Ecke des Fensters. Welcher der beiden Punkte liegt
  **höher** im Fenster? (Wiederholung: [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild))
teile:
  - typ: auswahl
    optionen: ['`(50, 20)`', '`(50, 80)`', 'Beide liegen gleich hoch.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In der Schule wächst die y-Achse nach oben. In CodeDraw ist es umgekehrt. Die y-Koordinate zählt von der oberen Kante nach unten, ein größeres y liegt also tiefer.
      - wert: 2
        meldung: Die beiden Punkte haben dieselbe x-Koordinate. Sie liegen also senkrecht übereinander, aber verschieden hoch.
hinweise:
  - Die y-Koordinate gibt den Abstand von der **oberen** Kante an.
loesung: |
  In CodeDraw beginnt y an der oberen Kante bei 0 und wächst nach unten.
  ---
  `(50, 20)` ist 20 Pixel von der oberen Kante entfernt, `(50, 80)` 80 Pixel. Also liegt `(50, 20)` höher.
```

Im Spiel drückt man eine Pfeiltaste, und die Figur soll einen Schritt in diese Richtung gehen. Das Programm muss also
aus der Position der Figur und der Richtung das **Nachbarfeld** ausrechnen. Aufgabenblatt 6 codiert die vier Richtungen als
ganze Zahlen:

- `1` bedeutet **oben**.
- `2` bedeutet **unten**.
- `3` bedeutet **links**.
- `4` bedeutet **rechts**.
- `0` bedeutet „noch keine Richtung“. Diesen Wert hat das Spiel am Anfang, bevor eine Taste gedrückt wurde.

Warum Zahlen statt Wörtern? Eine Zahl kann man billig speichern, vergleichen und als Parameter übergeben. Und mit
einer `switch`-Anweisung kann man für jede Zahl einen eigenen Fall schreiben.

Wie ändern sich die Koordinaten bei einem Schritt? Im Spielfeld zählt `y` die Zeilen **von oben nach unten**, genau wie
im CodeDraw-Fenster. Daraus folgt:

- Ein Schritt nach **oben** führt in die Zeile darüber. Diese Zeile hat eine kleinere Nummer, also wird `y` um 1 kleiner.
- Ein Schritt nach **unten** macht `y` um 1 größer.
- Ein Schritt nach **links** macht `x` um 1 kleiner, nach **rechts** um 1 größer.

Bei einem Schritt nach oben oder unten bleibt `x` gleich. Bei einem Schritt nach links oder rechts bleibt `y` gleich.

:::beispiel[Das Nachbarfeld berechnen]
Aufgabenblatt 6 gibt dafür die Methode `adjacentPosition` vor. Unser Nachbau heißt `nachbar`:

```java
public static int[] nachbar(int x, int y, int richtung) {
    switch (richtung) {
        case 1:
            return new int[]{x, y - 1};
        case 2:
            return new int[]{x, y + 1};
        case 3:
            return new int[]{x - 1, y};
        case 4:
            return new int[]{x + 1, y};
        default:
            return new int[]{x, y};
    }
}
```

- Die Methode bekommt eine Position und eine Richtung. Sie liefert die neue Position als `{x, y}`.
- Jeder Fall endet mit `return`. Ein `return` verlässt die ganze Methode, darum braucht es hier kein `break`.
- `default` fängt alle anderen Werte ab, zum Beispiel die Richtung 0. Dann bleibt die Position gleich. Ohne `default`
  meldet der Compiler `missing return statement`, weil die Methode sonst für manche Werte nichts liefern würde.

Drei Aufrufe mit Zahlen:

1. `nachbar(4, 2, 1)` liefert `{4, 1}`. Oben heißt eine Zeile höher, also `y = 2 - 1 = 1`.
2. `nachbar(4, 2, 2)` liefert `{4, 3}`.
3. `nachbar(4, 2, 3)` liefert `{3, 2}`. Links heißt eine Spalte weiter links, also `x = 4 - 1 = 3`.
:::

**Beispiel:** Die Figur steht bei `(1, 1)`, die Taste ist „unten“. Die neue Position ist `(1, 2)`, denn die Zeile
darunter hat die Nummer 2.

**Kein Beispiel:** Bei „oben“ ist die neue Position **nicht** `(1, 2)`. Wer `y + 1` schreibt, verwechselt das Spielfeld
mit dem Koordinatensystem aus der Mathematik, in dem y nach oben wächst.

:::achtung[Oben mit y + 1 gerechnet]
Jemand schreibt `case 1: return new int[]{x, y + 1};`. Die Figur steht bei `(2, 3)` in diesem Level:

```
#####
#   #
# $ #
# @ #
#   #
#####
```

Er drückt „oben“ und erwartet, dass die Figur die Kiste bei `(2, 2)` auf das freie Feld `(2, 1)` schiebt. Seine Methode
liefert aber `(2, 4)`, das freie Feld **unter** der Figur. Die Figur läuft nach unten. Der Fehler fällt erst beim Spielen auf. Darum
lohnt es sich, jede Richtung einmal mit Zahlen zu prüfen: Nach oben muss `y` **kleiner** werden.
:::

```aufgabe
id: pj-ri-gefuehrt
titel: Das Feld hinter einer Kiste finden
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Figur steht bei `x = 2`, `y = 4`. Direkt **über** ihr liegt eine Kiste. Die Figur will nach oben gehen
  (Richtung 1) und die Kiste dabei schieben. Auf welches Feld würde die Kiste rutschen? Gib `x` und `y` dieses Felds an.
teile:
  - typ: zahl
    label: '`x` des Felds hinter der Kiste'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: Bei einem Schritt nach oben ändert sich nur `y`. Die Spalte `x` bleibt gleich.
  - typ: zahl
    label: '`y` des Felds hinter der Kiste'
    loesung: "4 - 2"
    fehler:
      - wert: "6"
        meldung: Nach oben heißt in eine Zeile mit **kleinerer** Nummer. Bei zwei Schritten nach oben wird `y` um 2 kleiner.
      - wert: "3"
        meldung: Das ist die Zeile der Kiste. Das Feld **hinter** der Kiste liegt noch eine Zeile höher.
gefuehrt:
  - text: Welche Koordinate ändert sich bei einem Schritt nach oben?
    teil:
      typ: auswahl
      optionen: ['nur `y`', 'nur `x`', '`x` und `y`']
      richtig: [0]
    erklaerung: Nach oben bleibt man in derselben Spalte, nur die Zeile wechselt.
  - text: In welcher Zeile `y` liegt die Kiste?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Die Kiste ist das Nachbarfeld nach oben, also `y = 4 - 1 = 3`.
  - text: In welcher Zeile liegt das Feld hinter der Kiste?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Hinter der Kiste heißt noch einmal einen Schritt in dieselbe Richtung, also `y = 3 - 1 = 2`.
hinweise:
  - Das Feld hinter der Kiste ist das Nachbarfeld des Nachbarfelds, beide Male in Richtung oben.
loesung: |
  **Ansatz:** Zweimal hintereinander das Nachbarfeld in Richtung oben bilden.
  ---
  Die Kiste liegt bei `nachbar(2, 4, 1) = {2, 3}`.
  ---
  Das Feld dahinter ist `nachbar(2, 3, 1) = {2, 2}`. Kontrolle: Die Spalte bleibt 2, die Zeile wird zweimal um 1 kleiner.
```

### Zwei Schritte in dieselbe Richtung

Für das Schieben einer Kiste braucht das Spiel zwei Felder: das Nachbarfeld der Figur (dort liegt vielleicht eine
Kiste) und das Feld **hinter** diesem Nachbarfeld (dorthin würde die Kiste rutschen). Das zweite Feld bekommt man,
indem man `nachbar` noch einmal aufruft, diesmal mit dem ersten Nachbarfeld als Startpunkt.

:::beispiel[Nachbarfeld und Feld dahinter]
Die Figur steht in diesem Level bei `(1, 2)` und will nach rechts (Richtung 4):

```
######
#    #
#@$  #
######
```

```java
int[] vor = nachbar(1, 2, 4);              // {2, 2}
int[] hinter = nachbar(vor[0], vor[1], 4); // {3, 2}
```

1. `vor` ist `{2, 2}`. Dort steht `feld[2][2] == '$'`, eine Kiste.
2. `hinter` ist `{3, 2}`. Dort steht `feld[2][3] == ' '`, ein freies Feld. Die Kiste darf also verschoben werden.
3. Der zweite Aufruf bekommt `vor[0]` und `vor[1]` als Startpunkt, nicht die alte Position der Figur.

Dieselben Zahlen erhält man ohne Methode: Nach rechts wächst `x` um 1 je Schritt. Zwei Schritte von `x = 1` aus
ergeben `x = 3`.
:::

Statt einer `switch`-Anweisung kann man die Richtungen auch in zwei **Tabellen** ablegen. Das Array `dx` enthält für
jede Richtung, um wie viel sich `x` ändert. Das Array `dy` enthält dasselbe für `y`. Der Richtungscode ist der Index.

:::beispiel[Richtungen als Tabelle]
```java
int[] dx = {0,  0, 0, -1, 1};
int[] dy = {0, -1, 1,  0, 0};
```

- Index 0 gehört zur Richtung 0 („keine Bewegung“). Beide Änderungen sind 0.
- Index 1 gehört zu „oben“: `dx[1] = 0`, `dy[1] = -1`.
- Index 4 gehört zu „rechts“: `dx[4] = 1`, `dy[4] = 0`.

Das Nachbarfeld ist dann `{x + dx[richtung], y + dy[richtung]}`. Für `x = 4`, `y = 2` und Richtung 3 („links“) ergibt
sich `{4 + (-1), 2 + 0} = {3, 2}`, dasselbe wie mit `nachbar(4, 2, 3)`. Der Vorteil der Tabelle: Man braucht keine vier
Fälle, und zwei Schritte sind einfach `x + 2 * dx[richtung]`.
:::

:::achtung[Die Position der Figur aus Versehen verändert]
Eine Studentin will das Nachbarfeld nach oben so berechnen:

```java
int[] pos = findeFigur(feld);   // pos ist {3, 2}
int[] neu = pos;                // keine Kopie!
neu[1] = neu[1] - 1;            // neu ist {3, 1}, aber pos auch
```

`int[] neu = pos;` legt **kein** neues Array an. Beide Variablen zeigen auf dasselbe Array (siehe die Referenzen in
[12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array)). Danach ist auch `pos` gleich `{3, 1}`. Wenn das Programm später die alte Position
leeren will, löscht es mit `feld[pos[1]][pos[0]] = ' '` das falsche Feld, nämlich das neue Feld der Figur. Die Figur verschwindet
aus dem Spiel. Richtig ist ein neues Array: `int[] neu = new int[]{pos[0], pos[1] - 1};` oder gleich `nachbar(...)`.
:::

```aufgabe
id: pj-ri-zahlen
titel: Nachbarfelder mit Zahlen
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Figur steht bei `x = 5`, `y = 3`.

  **a)** Welche `y`-Koordinate hat das Nachbarfeld in Richtung 1 (oben)?

  **b)** Welche `x`-Koordinate hat das Nachbarfeld in Richtung 3 (links)?

  **c)** Rechts neben der Figur liegt eine Kiste. Welche `x`-Koordinate hat das Feld hinter dieser Kiste?
teile:
  - typ: zahl
    label: a)
    loesung: "3 - 1"
    fehler:
      - wert: "4"
        meldung: Oben heißt eine Zeile mit **kleinerer** Nummer. Die Zeilen werden von oben nach unten gezählt.
  - typ: zahl
    label: b)
    loesung: "5 - 1"
    fehler:
      - wert: "6"
        meldung: Links heißt eine Spalte mit kleinerer Nummer. Die Spalten werden von links nach rechts gezählt.
  - typ: zahl
    label: c)
    loesung: "5 + 2"
    fehler:
      - wert: "6"
        meldung: Das ist das Feld der Kiste selbst. Das Feld **hinter** ihr liegt noch eine Spalte weiter rechts.
hinweise:
  - Oben und links verkleinern eine Koordinate um 1, unten und rechts vergrößern sie.
loesung: |
  **Ansatz:** Je Richtung ändert sich genau eine Koordinate um 1.
  ---
  a) `y = 3 - 1 = 2`. b) `x = 5 - 1 = 4`. c) Die Kiste liegt bei `x = 6`, das Feld dahinter bei `x = 7`.
```

```aufgabe
id: pj-ri-auswahl
titel: Welche Richtung war es?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Figur stand bei `(3, 5)` und steht nach einem Zug bei `(3, 6)`. Welcher Richtungscode wurde gedrückt?
teile:
  - typ: auswahl
    optionen: ['`2` (unten)', '`1` (oben)', '`4` (rechts)']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`y` ist größer geworden. Größere Zeilennummern liegen **tiefer** im Spielfeld, also ging es nach unten.'
      - wert: 2
        meldung: Die erste Zahl `x` ist gleich geblieben. Nach rechts hätte sich `x` geändert.
hinweise:
  - Prüfe, welche Koordinate sich geändert hat und in welche Richtung.
loesung: |
  **Ansatz:** Vergleichen, welche Koordinate sich ändert. Hier bleibt `x = 3`, und `y` wächst von 5 auf 6.
  ---
  Ein größeres `y` ist eine Zeile tiefer. Das ist Richtung 2, unten.
```

```aufgabe
id: pj-ri-ausgabe-weg
titel: Einen Weg mit Richtungstabellen gehen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] dx = {0, 0, 0, -1, 1};
      int[] dy = {0, -1, 1, 0, 0};
      int[] wege = {4, 4, 1, 3, 2, 2};
      int x = 2;
      int y = 2;
      for (int i = 0; i < wege.length; i++) {
          x = x + dx[wege[i]];
          y = y + dy[wege[i]];
      }
      System.out.println(x + " " + y);
    loesung: |
      3 3
    fehler:
      - wert: "3 1"
        meldung: '`dy[1]` ist -1 und `dy[2]` ist +1. Richtung 1 (oben) verkleinert also `y`, Richtung 2 (unten) vergrößert es. Du hast die beiden vertauscht.'
      - wert: "2 2"
        meldung: 'Rechne nicht nur „zweimal rechts, einmal links“. Auch oben und unten heben sich nicht auf: Es geht einmal nach oben, aber zweimal nach unten.'
hinweise:
  - Verfolge `x` und `y` nach jedem der sechs Schritte in einer kleinen Tabelle.
  - '`wege[i]` ist der Richtungscode, also der Index in `dx` und `dy`.'
loesung: |
  **Ansatz:** Für jeden Richtungscode `dx` und `dy` nachschlagen und auf die Position addieren.
  ---
  Start `(2, 2)`. Rechts `(3, 2)`, rechts `(4, 2)`, oben `(4, 1)`, links `(3, 1)`, unten `(3, 2)`, unten `(3, 3)`.
  ---
  Kontrolle: Zweimal rechts und einmal links ergeben netto `x + 1 = 3`. Einmal oben und zweimal unten ergeben `y + 1 = 3`. Ausgabe `3 3`.
```

```aufgabe
id: pj-ri-rf
titel: Aussagen über die Methode nachbar
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über die Methode `nachbar` aus dem ersten Beispiel dieser Lektion.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`nachbar(0, 0, 1)` liefert `{0, -1}`.'
        richtig: true
        erklaerung: Die Methode rechnet nur. Sie prüft nicht, ob die neue Position im Spielfeld liegt.
      - text: 'Nach `int a = 4; int b = 2; nachbar(a, b, 3);` hat `a` den Wert 3.'
        richtig: false
        erklaerung: Die Methode bekommt Kopien der Werte. Sie liefert ein neues Array und verändert `a` nicht.
      - text: 'Weil nach den `return`-Anweisungen kein `break` steht, liefert `nachbar(4, 2, 1)` das Ergebnis von Fall 4.'
        richtig: false
        erklaerung: Ein `return` verlässt die Methode sofort. Zu einem Durchfallen in den nächsten Fall kommt es gar nicht.
      - text: 'Ohne den `default`-Fall würde die Methode nicht kompilieren.'
        richtig: true
        erklaerung: Für Richtungen außer 1 bis 4 gäbe es dann kein `return`. Der Compiler meldet `missing return statement`.
    fehler:
      - wert: [f, f, f, r]
        meldung: '`nachbar(0, 0, 1)` rechnet einfach `y - 1`. Die Methode prüft keine Grenzen, das Ergebnis ist `{0, -1}`.'
      - wert: [r, f, r, r]
        meldung: '`break` braucht man nur, wenn ein Fall **nicht** mit `return` endet. Ein `return` beendet die ganze Methode.'
hinweise:
  - Lies jede Zeile der Methode genau. Was passiert bei einem `return` innerhalb von `switch`?
  - Java übergibt beim Aufruf Kopien der Zahlen. Kann die Methode damit die Variablen des Aufrufers ändern?
loesung: |
  **Ansatz:** Jede Aussage gegen den Code und die Regeln für `return`, `switch` und Parameterübergabe prüfen.
  ---
  Aussage 1 stimmt, die Methode rechnet ohne Grenzprüfung. Aussage 2 stimmt nicht, Parameter sind Kopien.
  ---
  Aussage 3 stimmt nicht, denn `return` verlässt die Methode. Aussage 4 stimmt, ohne `default` fehlt für manche Werte ein `return`.
```

````aufgabe
id: pj-ri-code-umkehr
titel: Aus zwei Positionen die Richtung bestimmen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `int richtungZu(int x1, int y1, int x2, int y2)`. Liegt `(x2, y2)` direkt über, unter, links oder
  rechts neben `(x1, y1)`, liefert die Methode den passenden Richtungscode 1 bis 4. Sonst liefert sie 0. Auch
  gleiche Positionen und schräge Nachbarn liefern 0.

  Beispiele: `richtungZu(3, 3, 3, 2)` liefert 1, `richtungZu(3, 3, 4, 4)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Umkehr {
          public static int richtungZu(int x1, int y1, int x2, int y2) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Umkehr {
          public static int richtungZu(int x1, int y1, int x2, int y2) {
              if (x2 == x1 && y2 == y1 - 1) {
                  return 1;
              }
              if (x2 == x1 && y2 == y1 + 1) {
                  return 2;
              }
              if (y2 == y1 && x2 == x1 - 1) {
                  return 3;
              }
              if (y2 == y1 && x2 == x1 + 1) {
                  return 4;
              }
              return 0;
          }
      }
    tests:
      - { aufruf: "richtungZu(3, 3, 3, 2)", erwartet: "1", beschreibung: "oben" }
      - { aufruf: "richtungZu(3, 3, 3, 4)", erwartet: "2", beschreibung: "unten" }
      - { aufruf: "richtungZu(3, 3, 2, 3)", erwartet: "3", beschreibung: "links" }
      - { aufruf: "richtungZu(3, 3, 4, 3)", erwartet: "4", beschreibung: "rechts" }
      - { aufruf: "richtungZu(3, 3, 4, 4)", erwartet: "0", beschreibung: "schräg" }
      - { aufruf: "richtungZu(3, 3, 3, 3)", erwartet: "0", beschreibung: "gleiche Position" }
      - { aufruf: "richtungZu(5, 1, 5, 3)", erwartet: "0", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Oben ist die Zeile mit der **kleineren** Nummer. `(3, 2)` liegt über `(3, 3)`." }
      - { wert: 5, meldung: "Bei einem schrägen Nachbarn ändern sich beide Koordinaten. Prüfe für jede Richtung, dass die andere Koordinate **gleich** bleibt." }
hinweise:
  - Für jede der vier Richtungen gilt eine Bedingung aus zwei Teilen, die mit `&&` verknüpft sind.
  - 'Oben: gleiche Spalte und `y2 == y1 - 1`. Rechts: gleiche Zeile und `x2 == x1 + 1`. Am Ende steht `return 0;`.'
loesung: |
  **Ansatz:** Das ist die Umkehrung von `nachbar`. Für jede Richtung prüfen wir, ob `(x2, y2)` genau das Nachbarfeld in dieser Richtung ist.
  ---
  ```java
  if (x2 == x1 && y2 == y1 - 1) {
      return 1;
  }
  if (x2 == x1 && y2 == y1 + 1) {
      return 2;
  }
  if (y2 == y1 && x2 == x1 - 1) {
      return 3;
  }
  if (y2 == y1 && x2 == x1 + 1) {
      return 4;
  }
  return 0;
  ```
  ---
  Die zweite Hälfte jeder Bedingung (gleiche Spalte oder gleiche Zeile) schließt schräge Nachbarn aus.
  ---
  Probe: `(3, 3)` und `(4, 4)` erfüllen keine Bedingung, Ergebnis 0. `(5, 1)` und `(5, 3)` liegen zwei Zeilen auseinander, ebenfalls 0.
````

```aufgabe
id: pj-ri-text-grenzen
titel: Warum prüft nachbar keine Grenzen?
niveau: 2
lernziel: 2
kompetenz: begruenden
quelle: nach den Vorbedingungen in Aufgabenblatt 6, WS 2023 (eigene Frage)
angabe: |
  `nachbar(0, 0, 1)` liefert `{0, -1}`, eine Position außerhalb jedes Spielfelds. Trotzdem stürzt das Spiel von Aufgabenblatt 6
  nie mit einer `ArrayIndexOutOfBoundsException` ab, wenn es auf `feld[neu[1]][neu[0]]` zugreift. Erkläre in drei bis
  vier Sätzen, warum.
teile:
  - typ: text
    muster: |
      Aufgabenblatt 6 verspricht, dass jedes Level ringsum von Wänden umgeben ist, ohne Löcher und ohne Ausgänge. Die Figur
      steht darum immer im Inneren. Ihr Nachbarfeld ist entweder ein Innenfeld oder eine Wand, liegt aber immer im
      Array. In eine Wand geht die Figur nie hinein, und eine Kiste kann nie auf einer Wand liegen. Darum liegt auch
      das Feld hinter einer Kiste immer im Array. Eine Grenzprüfung wäre also nur nötig, wenn diese Vorbedingung nicht
      gälte.
hinweise:
  - Was verspricht Aufgabenblatt 6 über den Rand jedes Levels?
  - Wo kann die Figur stehen, und wo kann eine Kiste stehen?
loesung: |
  **Ansatz:** Die Vorbedingung von Aufgabenblatt 6 nutzen: Jedes Level ist vollständig von Wänden umschlossen.
  ---
  Die Figur steht nie auf einer Wand, also nie am Rand. Ihre Nachbarn existieren im Array.
  ---
  Kisten stehen ebenfalls im Inneren. Das Feld hinter einer Kiste ist darum auch ein gültiges Feld, zur Not eine Wand.
```

````aufgabe
id: pj-ri-code-freie-schritte
titel: Wie weit ist der Weg frei?
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `int freieSchritte(char[][] feld, int x, int y, int richtung)`. Die Methode zählt, wie viele
  Leerzeichen `' '` von `(x, y)` aus in der angegebenen Richtung (1 oben, 2 unten, 3 links, 4 rechts) **direkt
  hintereinander** folgen. Das Startfeld zählt nicht mit. Die Zählung endet beim ersten Feld, das kein Leerzeichen
  ist, oder wenn der Weg das Spielfeld verlässt.

  **Achtung:** Hier ist das Feld **nicht** von Wänden umschlossen, und die Zeilen sind unterschiedlich lang. Eine
  Position `(nx, ny)` liegt nur im Feld, wenn `0 ≤ ny < feld.length` und `0 ≤ nx < feld[ny].length` gilt.

  Für das Spielfeld

  ```
  ######
  #    #
  #  @   
  # 
  #
  ```

  Zeile 2 ist 7 Zeichen lang, Zeile 3 hat 2 Zeichen und Zeile 4 ein Zeichen. Hier liefert `freieSchritte(feld, 3, 2, 4)`
  den Wert 3. Rechts der Figur folgen nämlich drei Leerzeichen bis zum Ende der Zeile.
teile:
  - typ: code
    vorlage: |
      public class Weg {
          public static int freieSchritte(char[][] feld, int x, int y, int richtung) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Weg {
          public static int freieSchritte(char[][] feld, int x, int y, int richtung) {
              int dx = 0;
              int dy = 0;
              if (richtung == 1) {
                  dy = -1;
              } else if (richtung == 2) {
                  dy = 1;
              } else if (richtung == 3) {
                  dx = -1;
              } else {
                  dx = 1;
              }
              int anzahl = 0;
              int nx = x + dx;
              int ny = y + dy;
              while (ny >= 0 && ny < feld.length && nx >= 0 && nx < feld[ny].length && feld[ny][nx] == ' ') {
                  anzahl++;
                  nx = nx + dx;
                  ny = ny + dy;
              }
              return anzahl;
          }
      }
    tests:
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "#  @   ".toCharArray(), "# ".toCharArray(), "#".toCharArray()};', aufruf: "freieSchritte(f, 3, 2, 4)", erwartet: "3", beschreibung: "rechts bis zum Zeilenende" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "#  @   ".toCharArray(), "# ".toCharArray(), "#".toCharArray()};', aufruf: "freieSchritte(f, 3, 2, 3)", erwartet: "2", beschreibung: "links bis zur Wand" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "#  @   ".toCharArray(), "# ".toCharArray(), "#".toCharArray()};', aufruf: "freieSchritte(f, 3, 2, 1)", erwartet: "1", beschreibung: "oben" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "#  @   ".toCharArray(), "# ".toCharArray(), "#".toCharArray()};', aufruf: "freieSchritte(f, 3, 2, 2)", erwartet: "0", beschreibung: "unten: Zeile 3 ist zu kurz" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "#  @   ".toCharArray(), "# ".toCharArray(), "#".toCharArray()};', aufruf: "freieSchritte(f, 1, 1, 2)", erwartet: "2", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Am Ende der Zeile muss die Zählung aufhören. Prüfe `nx < feld[ny].length`, **bevor** du auf `feld[ny][nx]` zugreifst." }
      - { wert: 4, meldung: "Zeile 3 ist nur 2 Zeichen lang. Die Position `(3, 3)` liegt außerhalb dieser Zeile. Prüfe die Länge der Zeile `ny`, nicht die von Zeile `y`." }
      - { wert: 3, meldung: "Oben heißt `y - 1`. Von `(3, 2)` aus ist `(3, 1)` frei, `(3, 0)` ist eine Wand." }
hinweise:
  - Bestimme zuerst die Schrittweiten `dx` und `dy` aus der Richtung. Dann gehst du mit einer `while`-Schleife Feld für Feld weiter.
  - 'Die Bedingung der Schleife prüft zuerst alle Grenzen und erst ganz am Ende `feld[ny][nx] == '' ''`. Wegen der **Kurzschlussauswertung** von `&&` (Java hört beim ersten `false` auf und prüft den Rest nicht mehr) wird der Zugriff dann nur bei gültigen Indizes ausgeführt.'
loesung: |
  **Ansatz:** Mit `dx` und `dy` Schritt für Schritt weitergehen, solange das nächste Feld im Spielfeld liegt und frei ist. Die Reihenfolge der Bedingungen schützt vor einem Zugriff außerhalb des Arrays.
  ---
  ```java
  int dx = 0;
  int dy = 0;
  if (richtung == 1) {
      dy = -1;
  } else if (richtung == 2) {
      dy = 1;
  } else if (richtung == 3) {
      dx = -1;
  } else {
      dx = 1;
  }
  ```
  ---
  ```java
  int anzahl = 0;
  int nx = x + dx;
  int ny = y + dy;
  while (ny >= 0 && ny < feld.length && nx >= 0 && nx < feld[ny].length && feld[ny][nx] == ' ') {
      anzahl++;
      nx = nx + dx;
      ny = ny + dy;
  }
  return anzahl;
  ```
  ---
  Warum diese Reihenfolge? `&&` wertet von links nach rechts aus und hört beim ersten `false` auf ([3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht)). `feld[ny]` wird also nur gelesen, wenn `ny` gültig ist, und `feld[ny][nx]` nur, wenn auch `nx` gültig ist.
  ---
  Probe nach unten von `(3, 2)`: `ny = 3` ist gültig, aber `nx = 3` ist nicht kleiner als `feld[3].length = 2`. Die Schleife läuft nicht, das Ergebnis ist 0.
````

## Ein Spielzug: gehen und Kisten schieben

```aufgabe
id: pj-zu-check-kette
titel: Welcher Zweig läuft?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung))
teile:
  - typ: ausgabe
    code: |
      char c = '$';
      if (c == '#') {
          System.out.println("Wand");
      } else if (c == ' ') {
          System.out.println("frei");
      } else if (c == '$') {
          System.out.println("Kiste");
      } else {
          System.out.println("sonst");
      }
    loesung: |
      Kiste
    fehler:
      - wert: "Kiste\nsonst"
        meldung: In einer `if`-`else if`-Kette läuft höchstens **ein** Zweig. Sobald eine Bedingung wahr ist, werden alle weiteren übersprungen.
hinweise:
  - Prüfe die Bedingungen der Reihe nach, bis die erste wahr ist.
loesung: |
  `c == '#'` und `c == ' '` sind falsch. `c == '$'` ist wahr, also erscheint `Kiste`.
  ---
  Danach überspringt Java den Rest der Kette, auch den `else`-Zweig.
```

Jetzt kommt das Herz des Spiels: ein **Zug**. Die Spielerin drückt eine Pfeiltaste, und die Figur soll einen Schritt
in diese Richtung machen. Ob das klappt, hängt vom Nachbarfeld ab. Wir nennen es `vor`, weil es vor der Figur liegt.

In diesem Kapitel stehen im Spielfeld während des Spiels nur noch vier Zeichen: Leerzeichen, Wand `'#'`, Kiste `'$'`
und Figur `'@'`. Die Zielpunkte speichert das Programm getrennt. Warum das nötig ist, erklärt
[16.5 Zielpunkte, Sieg und Sackgassen](/lernen/ep1/projekt/zielpunkte-sieg-und-sackgassen). Für einen Zug zählt nur:
Ein Zielpunkt ist ein ganz normales freies Feld.

Die Regeln von Sokoban für einen Zug lauten:

1. Ist `vor` eine **Wand**, passiert nichts.
2. Ist `vor` **frei**, geht die Figur dorthin. Ihr altes Feld wird frei.
3. Liegt auf `vor` eine **Kiste**, schaut man auf das Feld dahinter. Wir nennen es `hinter`.
   - Ist `hinter` frei, rutscht die Kiste auf `hinter`, und die Figur geht auf `vor`.
   - Ist `hinter` eine Wand oder eine zweite Kiste, passiert nichts. Zwei Kisten auf einmal kann die Figur nicht schieben.

Die Methode von Aufgabenblatt 6 heißt `move`. Sie verändert das übergebene Spielfeld **an Ort und Stelle**, denn sie bekommt
einen Verweis auf das Array und kein Duplikat. Zusätzlich liefert sie einen Wahrheitswert zurück: `true`, wenn sich die
Figur bewegt hat, sonst `false`. Damit zählt das Hauptprogramm die Schritte.

:::beispiel[Ein Schritt ohne Kiste]
Wir bauen den Zug in zwei Stufen. Die erste Stufe kann nur gehen, nicht schieben:

```java
public static boolean geheSchritt(char[][] feld, int richtung) {
    int[] pos = findeFigur(feld);
    int[] vor = nachbar(pos[0], pos[1], richtung);
    if (feld[vor[1]][vor[0]] != ' ') {
        return false;
    }
    feld[vor[1]][vor[0]] = '@';
    feld[pos[1]][pos[0]] = ' ';
    return true;
}
```

- `findeFigur` und `nachbar` sind die Methoden aus [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden) und
  [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder). `pos` ist die Position der Figur, `vor` das Nachbarfeld.
- Ist `vor` nicht frei, liefert die Methode sofort `false`. Das Feld bleibt unverändert.
- Sonst schreibt sie `'@'` auf `vor` und ein Leerzeichen auf das alte Feld. Dann liefert sie `true`.

Ablauf für die Zeile `#@  #` (Zeile 1 eines Felds) und Richtung 4:

1. `pos` ist `{1, 1}`, `vor` ist `{2, 1}`. Dort steht ein Leerzeichen.
2. `feld[1][2] = '@'` und `feld[1][1] = ' '`. Die Zeile lautet jetzt `# @ #`.
3. Ein zweiter Aufruf mit Richtung 4 macht daraus `#  @#`. Ein dritter findet bei `vor = {4, 1}` die Wand und liefert `false`.
:::

### Eine Kiste schieben

Für die Kiste braucht der Zug drei Felder in einer Reihe: das Feld der Figur, `vor` und `hinter`. Das Feld `hinter`
bekommt man, indem man `nachbar` noch einmal vom Feld `vor` aus aufruft, wie in
[16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder).

:::beispiel[Eine Kiste nach rechts schieben]
In der Zeile `#@$ #` drückt die Spielerin „rechts“. Die drei Felder in einer Reihe sind:

- Figur bei `x = 1`, `vor` bei `x = 2` (Kiste), `hinter` bei `x = 3` (frei).

Weil `hinter` frei ist, darf geschoben werden. Das Programm schreibt drei Zeichen:

1. `'$'` auf `hinter`: Die Zeile lautet `#@$$#`. Für einen Moment liegen zwei Kisten da.
2. `'@'` auf `vor`: Die Zeile lautet `#@@$#`. Die alte Kiste ist überschrieben.
3. `' '` auf das alte Feld der Figur: Die Zeile lautet `# @$#`.

Am Ende steht genau eine Figur und genau eine Kiste in der Zeile, beide eine Stelle weiter rechts. Der Rückgabewert
ist `true`. Drückt die Spielerin noch einmal „rechts“, ist `hinter` die Wand bei `x = 4`. Dann passiert nichts, und
der Rückgabewert ist `false`.
:::

:::merke[Entscheidungstabelle für einen Zug]
- `vor` ist eine **Wand**: Nichts passiert. Rückgabe `false`.
- `vor` ist **frei**: Die Figur geht auf `vor`. Rückgabe `true`.
- `vor` ist eine **Kiste** und `hinter` ist frei: Die Kiste kommt auf `hinter`, die Figur auf `vor`. Rückgabe `true`.
- `vor` ist eine **Kiste** und `hinter` ist eine Wand oder Kiste: Nichts passiert. Rückgabe `false`.

Bei jedem erfolgreichen Zug wird das alte Feld der Figur frei. Bei jedem erfolglosen Zug bleibt das Spielfeld
genau so, wie es war.
:::

:::achtung[Das alte Feld der Figur nicht geleert]
Eine Fassung vergisst die Zeile `feld[pos[1]][pos[0]] = ' ';`. In der Zeile `#@  #` macht ein Schritt nach rechts
daraus `#@@ #`. Jetzt stehen **zwei** Figuren im Feld. Beim nächsten Zug findet `findeFigur` die linke, also die alte
Figur. Sie läuft gegen die rechte Figur, denn `'@'` ist kein freies Feld. Das Spiel scheint zu hängen. Die Reparatur:
Nach jedem erfolgreichen Zug das alte Feld auf `' '` setzen.
:::

:::achtung[Nur die Wand hinter der Kiste geprüft]
Eine andere Fassung prüft hinter der Kiste nur `if (feld[hinter[1]][hinter[0]] == '#') return false;`. In der Zeile
`#@$$ #` drückt die Spielerin „rechts“. `hinter` ist die zweite Kiste, keine Wand. Das Programm schreibt `'$'` auf
`hinter` (dort lag schon eine Kiste), `'@'` auf `vor` und ein Leerzeichen auf das alte Feld. Ergebnis: `# @$ #`. Aus
zwei Kisten ist eine geworden, das Level ist nicht mehr lösbar. Richtig ist die Prüfung „`hinter` ist **frei**“:
`if (feld[hinter[1]][hinter[0]] != ' ') return false;`. Sie schließt Wand und Kiste auf einmal aus.
:::

```aufgabe
id: pj-zu-gefuehrt
titel: Eine Kiste auf einen Zielpunkt schieben
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Zeile des Spielfelds lautet `#@$  #`, die Figur steht also bei `x = 1`. Auf der Stelle `x = 3` liegt ein
  Zielpunkt. Er steht nicht im Spielfeld, denn Zielpunkte werden getrennt gespeichert. Die Spielerin drückt
  „rechts“. Wie lautet die Zeile nach dem Zug?
teile:
  - typ: auswahl
    optionen: ['`# @$ #`', '`#  @$#`', '`# @ $#`', '`#@$  #`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Zug ist **ein** Schritt. Figur und Kiste rücken je um eine Stelle weiter, nicht um zwei.
      - wert: 2
        meldung: Die Kiste rutscht nur auf das Feld direkt hinter ihr, also auf `x = 3`. Sie springt nicht zwei Felder weit.
      - wert: 3
        meldung: Hinter der Kiste ist frei. Für das Spielfeld ist der Zielpunkt ein freies Feld, darum darf geschoben werden.
gefuehrt:
  - text: Welches Zeichen steht auf `vor`, also bei `x = 2`?
    teil:
      typ: auswahl
      optionen: ["`'$'`", "`' '`", "`'#'`"]
      richtig: [0]
    erklaerung: In `#@$  #` hat Index 2 den Wert `'$'`. Die Figur muss also schieben.
  - text: Auf welcher Stelle `x` liegt `hinter`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Ein weiterer Schritt nach rechts von `x = 2` aus führt zu `x = 3`.
  - text: Darf die Kiste geschoben werden?
    teil:
      typ: auswahl
      optionen: ['Ja, denn `hinter` ist frei.', 'Nein, denn auf `hinter` liegt ein Zielpunkt.', 'Nein, denn eine Kiste darf nie bewegt werden.']
      richtig: [0]
    erklaerung: Im Spielfeld steht auf `x = 3` ein Leerzeichen. Der Zielpunkt ist nur in der getrennten Liste der Ziele vermerkt.
hinweise:
  - Bestimme die Felder `vor` und `hinter` und schau in der Entscheidungstabelle nach.
loesung: |
  **Ansatz:** Drei Felder in einer Reihe betrachten: Figur bei 1, `vor` bei 2, `hinter` bei 3.
  ---
  `vor` ist eine Kiste, `hinter` ist frei. Also rutscht die Kiste auf 3, und die Figur geht auf 2.
  ---
  Das alte Feld 1 wird frei. Die Zeile lautet `# @$ #`. Die Kiste liegt jetzt auf dem Zielpunkt.
```

```aufgabe
id: pj-zu-rf-regeln
titel: Was passiert bei diesem Zug?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Jede Aussage beschreibt eine Zeile des Spielfelds und den Zug „rechts“. Beurteile, ob die Aussage stimmt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'In `#@ $#` geht die Figur einen Schritt nach rechts, die Rückgabe ist `true`.'
        richtig: true
        erklaerung: '`vor` ist frei. Die Kiste liegt erst ein Feld weiter und spielt keine Rolle.'
      - text: 'In `#@$#` wird die Kiste nach rechts geschoben.'
        richtig: false
        erklaerung: '`hinter` ist die Wand. Nichts bewegt sich, die Rückgabe ist `false`.'
      - text: 'In `#@$$ #` werden beide Kisten eine Stelle nach rechts geschoben.'
        richtig: false
        erklaerung: '`hinter` ist eine Kiste und damit nicht frei. Die Figur kann nur eine Kiste schieben.'
      - text: 'In `#@#` bleibt das Spielfeld unverändert, die Rückgabe ist `false`.'
        richtig: true
        erklaerung: '`vor` ist eine Wand. Nach Regel 1 passiert nichts.'
    fehler:
      - wert: [r, f, r, r]
        meldung: Die Figur schiebt höchstens **eine** Kiste. Steht hinter der ersten Kiste eine zweite, bewegt sich gar nichts.
      - wert: [f, f, f, r]
        meldung: 'In `#@ $#` ist das Feld direkt rechts der Figur frei. Ob danach eine Kiste kommt, ist für diesen Zug egal.'
hinweise:
  - Bestimme für jede Zeile `vor` und, falls dort eine Kiste liegt, `hinter`.
loesung: |
  **Ansatz:** Für jede Zeile die Felder `vor` und `hinter` bestimmen und die Entscheidungstabelle anwenden.
  ---
  Aussage 1: `vor` frei, die Figur geht, richtig. Aussage 2: `hinter` ist eine Wand, falsch. Aussage 3: `hinter` ist eine Kiste, falsch. Aussage 4: `vor` ist eine Wand, richtig.
```

```aufgabe
id: pj-zu-ausgabe-pfad
titel: Ein Weg mit erfolglosen Schritten
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Programm verwendet `geheSchritt` aus dem Beispiel (nur gehen, nicht schieben). Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      public class Pfad {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean geheSchritt(char[][] feld, int richtung) {
              int[] pos = findeFigur(feld);
              int[] vor = nachbar(pos[0], pos[1], richtung);
              if (feld[vor[1]][vor[0]] != ' ') {
                  return false;
              }
              feld[vor[1]][vor[0]] = '@';
              feld[pos[1]][pos[0]] = ' ';
              return true;
          }

          public static void main(String[] args) {
              char[][] feld = {
                  "#####".toCharArray(),
                  "#@  #".toCharArray(),
                  "# # #".toCharArray(),
                  "#   #".toCharArray(),
                  "#####".toCharArray()
              };
              int[] tasten = {4, 4, 4, 2, 2, 3, 1, 3};
              int schritte = 0;
              for (int i = 0; i < tasten.length; i++) {
                  if (geheSchritt(feld, tasten[i])) {
                      schritte++;
                  }
              }
              for (int y = 0; y < feld.length; y++) {
                  System.out.println(new String(feld[y]));
              }
              System.out.println(schritte);
          }
      }
    loesung: |
      #####
      #   #
      # # #
      #@  #
      #####
      6
    fehler:
      - wert: "#####\n#   #\n# # #\n#@  #\n#####\n8"
        meldung: Gezählt werden nur Schritte, bei denen `geheSchritt` den Wert `true` liefert. Zwei Tasten führen gegen eine Wand.
hinweise:
  - '`new String(feld[y])` macht aus einer Zeile wieder einen String. So wird jede Zeile in einem Stück ausgegeben.'
  - Verfolge die Position der Figur nach jeder Taste in einer Tabelle und notiere, ob der Schritt gelingt.
loesung: |
  **Ansatz:** Die acht Tasten der Reihe nach ausführen und die Position der Figur mitschreiben. Gezählt wird nur, wenn das Nachbarfeld frei ist.
  ---
  Start `(1, 1)`. Rechts `(2, 1)`, rechts `(3, 1)`, rechts: Wand bei `(4, 1)`, kein Schritt.
  ---
  Unten `(3, 2)`, unten `(3, 3)`, links `(2, 3)`, oben: Wand bei `(2, 2)`, kein Schritt. Links `(1, 3)`.
  ---
  Sechs erfolgreiche Schritte. Die Figur steht in Zeile 3 ganz links, alle anderen Innenfelder sind frei.
```

```aufgabe
id: pj-zu-zeilen-fehler
titel: Zwei Fehler in einem Zug
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Diese Fassung des Zugs enthält zwei Fehler. Markiere die beiden falschen Zeilen.
teile:
  - typ: zeilen
    code: |
      public static boolean bewege(char[][] feld, int richtung) {
          int[] pos = findeFigur(feld);
          int[] vor = nachbar(pos[0], pos[1], richtung);
          if (feld[vor[1]][vor[0]] == '#') {
              return false;
          }
          if (feld[vor[1]][vor[0]] == '$') {
              int[] hinter = nachbar(vor[0], vor[1], richtung);
              if (feld[hinter[1]][hinter[0]] == '#') {
                  return false;
              }
              feld[hinter[1]][hinter[0]] = '$';
          }
          feld[vor[1]][vor[0]] = '@';
          feld[pos[0]][pos[1]] = ' ';
          return true;
      }
    loesung: [9, 15]
    fehler:
      - wert: [9]
        meldung: Zeile 9 stimmt, es gibt aber noch einen zweiten Fehler. Vergleiche die Indizes in jedem Zugriff mit der Regel `feld[y][x]`.
      - wert: [15]
        meldung: Zeile 15 stimmt. Prüfe noch einmal, was hinter einer Kiste liegen darf, damit sie geschoben werden kann.
      - wert: [4, 15]
        meldung: Zeile 4 ist richtig, gegen eine Wand geht die Figur nicht. Der zweite Fehler steckt in der Prüfung **hinter** der Kiste.
hinweise:
  - Teste die Methode im Kopf mit einer Zeile, in der rechts neben der Figur zwei Kisten hintereinander liegen, und Richtung 4.
  - '`pos` ist `{x, y}`. Welcher Index gehört beim Zugriff nach vorne?'
loesung: |
  **Ansatz:** Die Methode mit kritischen Fällen durchspielen und jeden Zugriff gegen `feld[y][x]` prüfen.
  ---
  Zeile 9 prüft nur auf Wand. Bei zwei Kisten hintereinander wird die zweite überschrieben. Richtig ist `if (feld[hinter[1]][hinter[0]] != ' ')`.
  ---
  Zeile 15 vertauscht die Indizes. Richtig ist `feld[pos[1]][pos[0]] = ' ';`. Sonst wird ein falsches Feld geleert oder das Programm stürzt ab.
```

```aufgabe
id: pj-zu-reihenfolge
titel: Die Schritte eines Zugs ordnen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Bring die Schritte der Methode `bewege` in die richtige Reihenfolge. Schritt 5 wird nur ausgeführt, wenn auf
  `vor` eine Kiste lag.
teile:
  - typ: reihenfolge
    elemente:
      - 'die Position `pos` der Figur mit `findeFigur` bestimmen'
      - 'das Nachbarfeld `vor` in der gedrückten Richtung berechnen'
      - 'ist `vor` eine Wand, `false` liefern'
      - 'ist `vor` eine Kiste, das Feld `hinter` berechnen und `false` liefern, wenn es nicht frei ist'
      - '`$` auf `hinter` schreiben'
      - '`@` auf `vor` schreiben und das Feld `pos` leeren'
      - '`true` liefern'
    fehler:
      - wert: [0, 1, 3, 2, 4, 5, 6]
        meldung: Ist `vor` eine Wand, gibt es kein sinnvolles Feld `hinter`. Prüfe zuerst die Wand und erst danach die Kiste.
      - wert: [0, 1, 2, 3, 5, 4, 6]
        meldung: 'Wer zuerst `@` auf `vor` schreibt, überschreibt die Kiste. Danach ist `vor` kein Kistenfeld mehr. Schreibe die Kiste darum vor der Figur.'
hinweise:
  - Erst wird alles geprüft, dann wird geschrieben. Ein `false` darf nie nach einer Änderung kommen.
  - Lies die Entscheidungstabelle von oben nach unten.
loesung: |
  **Ansatz:** Zuerst Positionen bestimmen, dann alle Fälle prüfen, die zu `false` führen, und erst zum Schluss schreiben.
  ---
  Die Prüfungen kommen vor jeder Änderung. So bleibt das Feld bei `false` garantiert unverändert.
  ---
  Beim Schreiben kommt die Kiste vor der Figur. Dann ist die Information „hier lag eine Kiste“ schon verarbeitet, wenn `@` sie überschreibt.
```

````aufgabe
id: pj-zu-code-pfad
titel: Einen Weg aus Buchstaben gehen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Weg ist als String aus den Buchstaben `o` (oben), `u` (unten), `l` (links) und `r` (rechts) gegeben.
  Implementiere `int gehePfad(char[][] feld, String pfad)`. Die Methode führt für jeden Buchstaben einen Schritt mit
  der vorgegebenen Methode `geheSchritt` aus und liefert die Zahl der **erfolgreichen** Schritte. Das Spielfeld wird
  dabei verändert. Vorbedingung: `pfad` enthält nur diese vier Buchstaben.
teile:
  - typ: code
    vorlage: |
      public class Weg {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean geheSchritt(char[][] feld, int richtung) {
              int[] pos = findeFigur(feld);
              int[] vor = nachbar(pos[0], pos[1], richtung);
              if (feld[vor[1]][vor[0]] != ' ') {
                  return false;
              }
              feld[vor[1]][vor[0]] = '@';
              feld[pos[1]][pos[0]] = ' ';
              return true;
          }

          public static int gehePfad(char[][] feld, String pfad) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Weg {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean geheSchritt(char[][] feld, int richtung) {
              int[] pos = findeFigur(feld);
              int[] vor = nachbar(pos[0], pos[1], richtung);
              if (feld[vor[1]][vor[0]] != ' ') {
                  return false;
              }
              feld[vor[1]][vor[0]] = '@';
              feld[pos[1]][pos[0]] = ' ';
              return true;
          }

          public static int gehePfad(char[][] feld, String pfad) {
              int erfolgreich = 0;
              for (int i = 0; i < pfad.length(); i++) {
                  char c = pfad.charAt(i);
                  int richtung = 0;
                  if (c == 'o') {
                      richtung = 1;
                  } else if (c == 'u') {
                      richtung = 2;
                  } else if (c == 'l') {
                      richtung = 3;
                  } else if (c == 'r') {
                      richtung = 4;
                  }
                  if (geheSchritt(feld, richtung)) {
                      erfolgreich++;
                  }
              }
              return erfolgreich;
          }
      }
    tests:
      - { vorher: 'char[][] f = {"#####".toCharArray(), "#@  #".toCharArray(), "#####".toCharArray()};', aufruf: 'gehePfad(f, "rrr")', erwartet: "2", beschreibung: "dritter Schritt gegen die Wand" }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "#@  #".toCharArray(), "#####".toCharArray()};', aufruf: 'gehePfad(f, "rrl")', ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "# @ #".toCharArray(), "#####".toCharArray()}', beschreibung: "Spielfeld danach" }
      - { vorher: 'char[][] f = {"####".toCharArray(), "# @#".toCharArray(), "#  #".toCharArray(), "####".toCharArray()};', aufruf: 'gehePfad(f, "uloo")', erwartet: "3", beschreibung: "unten, links, oben, oben" }
      - { vorher: 'char[][] f = {"###".toCharArray(), "#@#".toCharArray(), "###".toCharArray()};', aufruf: 'gehePfad(f, "")', erwartet: "0", beschreibung: "leerer Weg" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#    #".toCharArray(), "# #@ #".toCharArray(), "######".toCharArray()};', aufruf: 'gehePfad(f, "lorrulo")', erwartet: "5", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zähle nur die Schritte, bei denen `geheSchritt` den Wert `true` liefert. Der Aufruf steht dafür am besten direkt in der Bedingung eines `if`." }
      - { wert: 3, meldung: "Prüfe die Zuordnung der Buchstaben. `o` ist oben (Richtung 1) und `u` ist unten (Richtung 2)." }
hinweise:
  - Geh den String Zeichen für Zeichen durch. Übersetze jeden Buchstaben mit einer `if`-Kette oder einem `switch` in einen Richtungscode.
  - 'Rufe `geheSchritt` genau **einmal** je Buchstabe auf, direkt in der Bedingung: `if (geheSchritt(feld, richtung)) erfolgreich++;`.'
loesung: |
  **Ansatz:** Eine Schleife über den String. Jeder Buchstabe wird in einen Richtungscode übersetzt, dann wird genau ein Schritt versucht.
  ---
  ```java
  int erfolgreich = 0;
  for (int i = 0; i < pfad.length(); i++) {
      char c = pfad.charAt(i);
      int richtung = 0;
      if (c == 'o') {
          richtung = 1;
      } else if (c == 'u') {
          richtung = 2;
      } else if (c == 'l') {
          richtung = 3;
      } else if (c == 'r') {
          richtung = 4;
      }
      if (geheSchritt(feld, richtung)) {
          erfolgreich++;
      }
  }
  return erfolgreich;
  ```
  ---
  Wichtig: `geheSchritt` verändert das Feld. Wer es zweimal aufruft, etwa einmal zum Prüfen und einmal zum Ausführen, macht zwei Schritte statt einem.
  ---
  Probe mit `"#@  #"` und `"rrl"`: rechts, rechts, links. Die Figur steht danach bei `x = 2`, alle drei Schritte gelingen.
````

```aufgabe
id: pj-zu-text-boolean
titel: Warum liefert der Zug einen Wahrheitswert?
niveau: 2
lernziel: 3
kompetenz: begruenden
quelle: nach den Zusatzfragen der Aufgabenblätter (eigene Frage)
angabe: |
  Im Feedbackgespräch fragt der Tutor: „Ihre Methode `bewege` verändert das Spielfeld doch schon selbst. Wozu
  braucht sie dann noch den Rückgabetyp `boolean`? Und warum muss sie das Feld nicht zurückgeben?“ Antworte in drei
  bis vier Sätzen.
teile:
  - typ: text
    muster: |
      Das Spielfeld muss nicht zurückgegeben werden, weil die Methode einen Verweis auf dasselbe Array bekommt wie der
      Aufrufer. Jede Änderung, die sie hineinschreibt, sieht danach auch `main`. Der Wahrheitswert sagt dem Aufrufer,
      ob sich die Figur wirklich bewegt hat. Nur dann zählt `main` einen Schritt. Bei einem Zug gegen eine Wand bleibt
      der Schrittzähler gleich, und die Figur dreht sich laut Aufgabenblatt 6 nur in die neue Richtung.
hinweise:
  - Was bekommt die Methode beim Aufruf übergeben, eine Kopie des Arrays oder einen Verweis darauf?
  - Was macht das Hauptprogramm von Aufgabenblatt 6 nach jedem Zug mit der Schrittzahl?
loesung: |
  **Ansatz:** Zwei Fragen trennen: Wie kommt die Änderung zum Aufrufer, und welche Information fehlt dem Aufrufer noch?
  ---
  Arrays werden als Verweis übergeben. Die Methode verändert das Array des Aufrufers direkt, eine Rückgabe ist unnötig.
  ---
  Ob sich etwas bewegt hat, sieht der Aufrufer nicht ohne Weiteres. Der Rückgabewert liefert genau diese Information für den Schrittzähler.
```

````aufgabe
id: pj-zu-code-bewege
titel: Der vollständige Zug mit Kisten
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2023, Methode move (nachgebaut, eigene Namen und Testfelder)
angabe: |
  Implementiere `boolean bewege(char[][] feld, int richtung)` nach den Regeln von Sokoban. Die Methoden `findeFigur`
  und `nachbar` sind vorgegeben. Im Feld stehen nur `' '`, `'#'`, `'$'` und `'@'`. Die Methode verändert das Feld
  und liefert `true`, wenn sich die Figur bewegt hat, sonst `false`. Bei `false` darf sich das Feld nicht verändern.

  Vorbedingungen: Die Figur steht genau einmal im Feld, das Level ist von Wänden umschlossen, `richtung` liegt
  zwischen 1 und 4.
teile:
  - typ: code
    vorlage: |
      public class Sokoban {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean bewege(char[][] feld, int richtung) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Sokoban {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean bewege(char[][] feld, int richtung) {
              int[] pos = findeFigur(feld);
              int[] vor = nachbar(pos[0], pos[1], richtung);
              char c = feld[vor[1]][vor[0]];
              if (c == '#') {
                  return false;
              }
              if (c == '$') {
                  int[] hinter = nachbar(vor[0], vor[1], richtung);
                  if (feld[hinter[1]][hinter[0]] != ' ') {
                      return false;
                  }
                  feld[hinter[1]][hinter[0]] = '$';
              }
              feld[vor[1]][vor[0]] = '@';
              feld[pos[1]][pos[0]] = ' ';
              return true;
          }
      }
    tests:
      - { vorher: 'char[][] f = {"####".toCharArray(), "# @#".toCharArray(), "####".toCharArray()};', aufruf: "bewege(f, 3)", ergebnis: "f", erwartet: 'new char[][]{"####".toCharArray(), "#@ #".toCharArray(), "####".toCharArray()}', beschreibung: "gehen ohne Kiste" }
      - { vorher: 'char[][] f = {"####".toCharArray(), "# @#".toCharArray(), "####".toCharArray()};', aufruf: "bewege(f, 4)", erwartet: "false", beschreibung: "gegen die Wand" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#@$  #".toCharArray(), "######".toCharArray()};', aufruf: "bewege(f, 4)", ergebnis: "f", erwartet: 'new char[][]{"######".toCharArray(), "# @$ #".toCharArray(), "######".toCharArray()}', beschreibung: "Kiste nach rechts schieben" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#@$$ #".toCharArray(), "######".toCharArray()};', aufruf: "bewege(f, 4)", ergebnis: "f", erwartet: 'new char[][]{"######".toCharArray(), "#@$$ #".toCharArray(), "######".toCharArray()}', beschreibung: "zwei Kisten hintereinander: nichts passiert" }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "#@$##".toCharArray(), "#####".toCharArray()};', aufruf: "bewege(f, 4)", erwartet: "false", beschreibung: "Wand hinter der Kiste" }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "#   #".toCharArray(), "# $ #".toCharArray(), "# @ #".toCharArray(), "#####".toCharArray()};', aufruf: "bewege(f, 1)", ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "# $ #".toCharArray(), "# @ #".toCharArray(), "#   #".toCharArray(), "#####".toCharArray()}', beschreibung: "Kiste nach oben schieben" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#@$  #".toCharArray(), "######".toCharArray()};', aufruf: "bewege(f, 4)", erwartet: "true", versteckt: true }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "# $ #".toCharArray(), "# $ #".toCharArray(), "# @ #".toCharArray(), "#####".toCharArray()};', aufruf: "bewege(f, 1)", ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "# $ #".toCharArray(), "# $ #".toCharArray(), "# @ #".toCharArray(), "#####".toCharArray()}', versteckt: true }
    fehler:
      - { wert: 4, meldung: "Hinter der Kiste liegt eine zweite Kiste. Die Kiste darf nur geschoben werden, wenn das Feld dahinter **frei** ist, also `' '` enthält." }
      - { wert: 6, meldung: "Nach oben heißt `y - 1`. Prüfe auch, ob du beim Zugriff `feld[y][x]` die Reihenfolge einhältst: Positionen sind `{x, y}`, also `feld[p[1]][p[0]]`." }
      - { wert: 1, meldung: "Nach einem erfolgreichen Schritt muss das alte Feld der Figur leer sein. Setze `feld[pos[1]][pos[0]] = ' '`." }
hinweise:
  - Bestimme `pos` und `vor`. Unterscheide dann die drei Fälle aus der Entscheidungstabelle für das Feld `vor`.
  - 'Liegt auf `vor` eine Kiste, berechne `hinter = nachbar(vor[0], vor[1], richtung)`. Nur wenn dort `'' ''` steht, darfst du schreiben: zuerst die Kiste auf `hinter`, dann die Figur auf `vor`, dann das alte Feld leeren.'
loesung: |
  **Ansatz:** Erst alle Fälle prüfen, die zu `false` führen. Erst danach das Feld verändern. Die Reihenfolge folgt der Entscheidungstabelle.
  ---
  ```java
  int[] pos = findeFigur(feld);
  int[] vor = nachbar(pos[0], pos[1], richtung);
  char c = feld[vor[1]][vor[0]];
  if (c == '#') {
      return false;
  }
  ```
  ---
  ```java
  if (c == '$') {
      int[] hinter = nachbar(vor[0], vor[1], richtung);
      if (feld[hinter[1]][hinter[0]] != ' ') {
          return false;
      }
      feld[hinter[1]][hinter[0]] = '$';
  }
  ```
  ---
  ```java
  feld[vor[1]][vor[0]] = '@';
  feld[pos[1]][pos[0]] = ' ';
  return true;
  ```
  Hier kommt man an, wenn `vor` frei war oder die Kiste schon verschoben ist. In beiden Fällen geht die Figur auf `vor`.
  ---
  Probe mit `#@$$ #`: `vor` ist eine Kiste, `hinter` auch. Die Prüfung `!= ' '` liefert `false`, bevor etwas geschrieben wird. Das Feld bleibt unverändert.
````

```reflexion
frage: Warum prüft `bewege` alle Fälle, die zu `false` führen, bevor es das erste Zeichen ins Feld schreibt? Was könnte sonst passieren?
antwort: |
  Die Methode verspricht: Bei `false` bleibt das Spielfeld unverändert. Würde sie zuerst die Figur auf `vor` setzen und
  erst danach merken, dass die Kiste nicht verschoben werden kann, wäre das Feld schon kaputt. Die Kiste wäre
  überschrieben, und man müsste die Änderung mühsam rückgängig machen. Wer erst prüft und dann schreibt, braucht nie
  etwas zurückzunehmen. Dieses Muster „erst prüfen, dann ändern“ hilft bei jeder Methode, die ein Array an Ort und
  Stelle verändert.
```

## Zielpunkte, Sieg und Sackgassen

```aufgabe
id: pj-zi-check-alle
titel: Prüfen, ob alle Zeichen passen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren))
teile:
  - typ: ausgabe
    code: |
      public class Alle {
          public static boolean nurKisten(String s) {
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) != '$') {
                      return false;
                  }
              }
              return true;
          }

          public static void main(String[] args) {
              System.out.println(nurKisten("$$$"));
              System.out.println(nurKisten("$$ $"));
              System.out.println(nurKisten(""));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "true\nfalse\nfalse"
        meldung: Beim leeren String läuft die Schleife kein einziges Mal. Es gibt also kein Zeichen, das die Bedingung verletzt, und die Methode erreicht `return true`.
hinweise:
  - Die Methode sucht ein Gegenbeispiel. Erst wenn keines gefunden wurde, liefert sie `true`.
loesung: |
  Die Methode liefert `false`, sobald ein Zeichen keine Kiste ist. `"$$ $"` hat an Index 2 ein Leerzeichen.
  ---
  `"$$$"` und `""` haben kein solches Zeichen. Beide erreichen `return true`.
```

Bisher war ein Zielpunkt im Spielfeld einfach ein Punkt `'.'`. Beim Spielen entsteht damit ein Problem: Sobald die
Figur oder eine Kiste über einen Zielpunkt läuft, wird der Punkt überschrieben. Wenn sie das Feld wieder verlässt,
schreibt der Zug dort ein Leerzeichen hin. Der Zielpunkt ist dann verschwunden.

:::beispiel[Ein Zielpunkt geht verloren]
Die Zeile lautet `#@. #`. Der Punkt bei `x = 2` ist ein Zielpunkt. Wir lassen ihn im Spielfeld stehen und drücken
zweimal „rechts“.

1. Erster Schritt: Die Figur geht auf `x = 2`. Dort steht jetzt `'@'`, der Punkt ist überschrieben. Die Zeile lautet `# @ #`.
2. Zweiter Schritt: Die Figur geht auf `x = 3`. Ihr altes Feld wird zu `' '`. Die Zeile lautet `#  @#`.

Im Spielfeld steht nirgends mehr ein Punkt. Das Programm weiß nicht mehr, wo das Ziel war. Es kann weder das Ziel
zeichnen noch prüfen, ob eine Kiste darauf liegt.
:::

Aufgabenblatt 6 löst das Problem so: Beim Laden eines Levels werden alle Zielpunkte in ein **eigenes Array** `goals`
geschrieben. Jede Zeile dieses Arrays ist eine Position `{x, y}`. Im Spielfeld werden die Punkte durch Leerzeichen
ersetzt. Ab dann gibt es zwei getrennte Informationen:

- Das **Spielfeld** sagt, was gerade wo steht: Wand, Kiste, Figur oder nichts. Es ändert sich bei jedem Zug.
- Die **Zielliste** sagt, wo die Ziele liegen. Sie ändert sich während eines Levels nie.

So etwas nennt man eine Trennung von **Zustand** (was sich ändert) und **festen Daten** (was gleich bleibt). Eine Kiste
auf einem Ziel erkennt man jetzt so: Im Spielfeld steht `'$'`, und die Position steht in der Zielliste.

:::beispiel[Die Ziele beim Laden herauslösen]
```java
public static int[][] zieleHerausloesen(char[][] feld) {
    int anzahl = 0;
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '.') {
                anzahl++;
            }
        }
    }
    int[][] ziele = new int[anzahl][];
    int k = 0;
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            if (feld[y][x] == '.') {
                ziele[k] = new int[]{x, y};
                k++;
                feld[y][x] = ' ';
            }
        }
    }
    return ziele;
}
```

- Der erste Durchlauf zählt nur die Punkte. Erst danach kennt die Methode die Größe der Zielliste.
- Der zweite Durchlauf speichert jede Position mit dem Schreibindex `k`, wie bei `kistenPositionen` in
  [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden).
- `feld[y][x] = ' ';` ersetzt den Punkt im Spielfeld. Weil die Methode einen Verweis auf das Array bekommt, sieht der
  Aufrufer diese Änderung. Die Methode macht also zwei Dinge: Sie liefert die Zielliste **und** verändert das Feld.

Für das Feld `{"#@.$.#"}` aus einer einzigen Zeile liefert sie `{{2, 0}, {4, 0}}`. Danach lautet die Zeile `#@ $ #`.
:::

### Ist das Level gelöst?

Ein Level ist gelöst, wenn **jede** Kiste auf einem Ziel liegt. Aufgabenblatt 6 verspricht, dass es genauso viele Kisten wie
Ziele gibt. Dann darf man die Frage umdrehen: Das Level ist gelöst, wenn auf **jedem** Ziel eine Kiste liegt. Diese
Frage ist leichter, denn die Ziele stehen schon fertig in der Liste.

Warum ist das dasselbe? Angenommen, es gibt drei Kisten und drei Ziele, und auf jedem Ziel liegt eine Kiste. Dann
liegen schon drei Kisten auf Zielen. Mehr Kisten gibt es nicht, also liegt jede Kiste auf einem Ziel.

:::beispiel[Den Sieg prüfen]
```java
public static boolean gewonnen(char[][] feld, int[][] ziele) {
    for (int i = 0; i < ziele.length; i++) {
        int x = ziele[i][0];
        int y = ziele[i][1];
        if (feld[y][x] != '$') {
            return false;
        }
    }
    return true;
}
```

- Die Schleife geht alle Ziele durch. `ziele[i]` ist eine Position, `ziele[i][0]` ihr `x`, `ziele[i][1]` ihr `y`.
- Liegt auf einem Ziel keine Kiste, steht das Ergebnis fest: noch nicht gewonnen.
- Erst wenn **kein** Ziel ohne Kiste gefunden wurde, liefert die Methode `true`. Das ist dasselbe Muster wie
  `nurKisten` aus der Frage am Anfang dieser Lektion: ein Gegenbeispiel suchen.

Für das Feld `{"#@ $$#"}` und die Ziele `{{3, 0}, {4, 0}}` liegen auf beiden Zielen Kisten. Ergebnis `true`. Für die Ziele
`{{2, 0}, {4, 0}}` liegt auf `(2, 0)` keine Kiste. Ergebnis `false`.
:::

:::achtung[Zu früh true geliefert]
Diese Fassung sieht ähnlich aus, ist aber falsch:

```java
for (int i = 0; i < ziele.length; i++) {
    if (feld[ziele[i][1]][ziele[i][0]] == '$') {
        return true;            // falsch: erst ein Ziel geprüft
    }
}
return false;
```

Sie liefert `true`, sobald **ein** Ziel belegt ist. Bei zwei Zielen `{{3, 0}, {1, 0}}` und der Zeile `# @$ $#` ist das erste
Ziel belegt, das zweite nicht. Trotzdem meldet die Methode „gewonnen“, und das Spiel lädt das nächste Level. Richtig:
Ein einzelner Fehlschlag entscheidet sofort (`return false`). Ein Erfolg entscheidet erst, wenn alle geprüft sind.
:::

:::achtung[Nach Punkten im Spielfeld gesucht]
Eine andere Idee lautet: „Gewonnen ist, wenn im Spielfeld kein `'.'` mehr steht, weil alle Ziele von Kisten bedeckt
sind.“ Das wäre richtig, wenn die Punkte im Feld stünden. Nach dem Laden hat `zieleHerausloesen` aber **alle**
Punkte durch Leerzeichen ersetzt. Die Prüfung `zaehleImFeld(feld, '.') == 0` liefert darum schon vor dem ersten Zug
`true`. Das Spiel wäre sofort gewonnen. Wer die Zielliste einführt, muss alle Prüfungen auf die Zielliste umstellen.
:::

```aufgabe
id: pj-zi-gefuehrt
titel: Den Sieg für zwei Ziellisten prüfen
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  `gewonnen` ist die Methode aus dem Beispiel. Was gibt das Programm aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Sieg {
          public static boolean gewonnen(char[][] feld, int[][] ziele) {
              for (int i = 0; i < ziele.length; i++) {
                  int x = ziele[i][0];
                  int y = ziele[i][1];
                  if (feld[y][x] != '$') {
                      return false;
                  }
              }
              return true;
          }

          public static void main(String[] args) {
              char[][] feld = {
                  "######".toCharArray(),
                  "#  $ #".toCharArray(),
                  "# $@ #".toCharArray(),
                  "######".toCharArray()
              };
              int[][] ziele1 = {{3, 1}, {2, 2}};
              int[][] ziele2 = {{3, 1}, {4, 1}};
              System.out.println(gewonnen(feld, ziele1));
              System.out.println(gewonnen(feld, ziele2));
          }
      }
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: 'Eine Position ist `{x, y}`. Das Ziel `{3, 1}` ist also Spalte 3 in Zeile 1, und dort steht `feld[1][3] == ''$''`.'
      - wert: "true\ntrue"
        meldung: Für `ziele2` reicht es nicht, dass das erste Ziel belegt ist. Auf `(4, 1)` liegt keine Kiste.
gefuehrt:
  - text: Welches Zeichen steht auf dem Ziel `{3, 1}`?
    teil:
      typ: auswahl
      optionen: ["`'$'`", "`' '`", "`'#'`"]
      richtig: [0]
    erklaerung: 'Ziel `{3, 1}` heißt `x = 3`, `y = 1`, also `feld[1][3]`. In `"#  $ #"` hat Index 3 den Wert `''$''`.'
  - text: Welches Zeichen steht auf dem Ziel `{2, 2}`?
    teil:
      typ: auswahl
      optionen: ["`'$'`", "`'@'`", "`' '`"]
      richtig: [0]
    erklaerung: '`feld[2][2]` ist in `"# $@ #"` das Zeichen mit Index 2, also eine Kiste.'
  - text: Welches Zeichen steht auf dem Ziel `{4, 1}`?
    teil:
      typ: auswahl
      optionen: ["`' '`", "`'$'`", "`'#'`"]
      richtig: [0]
    erklaerung: '`feld[1][4]` ist in `"#  $ #"` ein Leerzeichen. Für `ziele2` liefert `gewonnen` darum `false`.'
hinweise:
  - Lies jedes Ziel als `{x, y}` und schau bei `feld[y][x]` nach.
loesung: |
  **Ansatz:** Für jede Zielliste alle Ziele nacheinander im Feld nachschlagen.
  ---
  `ziele1`: `feld[1][3]` und `feld[2][2]` sind beide `'$'`. Ausgabe `true`.
  ---
  `ziele2`: `feld[1][3]` ist `'$'`, aber `feld[1][4]` ist ein Leerzeichen. Ausgabe `false`.
```

```aufgabe
id: pj-zi-auswahl-verlust
titel: Was passiert mit einem Punkt im Spielfeld?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Programm lässt die Zielpunkte als `'.'` im Spielfeld stehen und verwendet den Zug `bewege` aus
  [16.4 Ein Spielzug: gehen und Kisten schieben](/lernen/ep1/projekt/ein-spielzug-gehen-und-kisten-schieben). Die Zeile lautet `#@.$ #`. Was passiert, wenn die
  Spielerin „rechts“ drückt?
teile:
  - typ: auswahl
    optionen:
      - Die Figur geht auf den Zielpunkt und überschreibt den Punkt.
      - Nichts. Ein Punkt ist kein Leerzeichen, darum bleibt die Figur stehen.
      - Die Figur schiebt die Kiste ein Feld nach rechts.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`bewege` fragt nur „Wand?“ und „Kiste?“. Ein Punkt ist keins von beiden, darum behandelt der Zug ihn wie ein freies Feld.'
      - wert: 2
        meldung: Die Kiste liegt nicht direkt neben der Figur, sondern ein Feld weiter. Ein Zug ist nur ein Schritt.
hinweise:
  - Welche beiden Zeichen prüft `bewege` auf dem Feld `vor`, und was passiert in allen anderen Fällen?
loesung: |
  **Ansatz:** Den Zug genau so auswerten, wie er programmiert ist. `bewege` blockiert nur bei Wand, schiebt nur bei Kiste und geht sonst.
  ---
  `vor` ist `x = 2` mit `'.'`. Das ist weder `'#'` noch `'$'`, also schreibt der Zug `'@'` auf `vor` und `' '` auf das alte Feld. Die Zeile lautet `# @$ #`.
  ---
  Der Punkt ist damit überschrieben. Geht die Figur weiter, steht dort ein Leerzeichen, und das Ziel ist verloren. Genau das verhindert die getrennte Zielliste.
```

```aufgabe
id: pj-zi-rf-sieg
titel: Aussagen über die Siegprüfung
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über `gewonnen` aus dem Beispiel. Es gibt immer gleich viele Kisten wie Ziele.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für eine leere Zielliste (`ziele.length == 0`) liefert die Methode `true`.
        richtig: true
        erklaerung: Die Schleife läuft nicht, also wird `return true` erreicht. Ohne Ziele gibt es auch keine Kisten, das Level ist gelöst.
      - text: Liefert die Methode `true`, liegt jede Kiste auf einem Ziel.
        richtig: true
        erklaerung: Jedes Ziel trägt eine Kiste. Bei gleich vielen Kisten wie Zielen bleibt keine Kiste übrig.
      - text: Die Methode verändert das Spielfeld.
        richtig: false
        erklaerung: Sie liest nur. Es gibt keine Zuweisung an `feld[...][...]`.
      - text: 'Man könnte genauso prüfen, ob im Spielfeld noch ein `''.''` steht.'
        richtig: false
        erklaerung: Nach dem Laden stehen keine Punkte mehr im Feld. Diese Prüfung meldet sofort einen Sieg.
    fehler:
      - wert: [f, r, f, f]
        meldung: Bei einer leeren Zielliste läuft die Schleife kein einziges Mal. Welches `return` wird dann erreicht?
      - wert: [r, r, f, r]
        meldung: Die Punkte werden beim Laden durch Leerzeichen ersetzt. Im Spielfeld findet man sie nie wieder.
hinweise:
  - Überlege für jede Aussage, welche Zeilen der Methode wirklich ausgeführt werden.
loesung: |
  **Ansatz:** Jede Aussage am Code und an der Vorbedingung „gleich viele Kisten wie Ziele“ prüfen.
  ---
  Aussage 1 und 2 sind richtig. Aussage 3 ist falsch, die Methode schreibt nichts. Aussage 4 ist falsch, weil die Punkte beim Laden entfernt wurden.
```

```aufgabe
id: pj-zi-trace-ziele
titel: Zielpunkte beim Laden herauslösen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  `zieleHerausloesen` aus dem Beispiel bekommt dieses Spielfeld:

  ```
  #######
  #. $ .#
  # @$  #
  #  .$ #
  #######
  ```

  Trage für jedes Ziel ein, welche Position im zweiten Durchlauf gespeichert wird und welchen Wert `k` danach hat.
teile:
  - typ: trace
    spalten: [x, y, k danach]
    zeilen: [1. Ziel, 2. Ziel, 3. Ziel]
    loesung: [[1, 1, 1], [5, 1, 2], [3, 3, 3]]
    fehler:
      - wert: ["1", "1", "0", "5", "1", "1", "3", "3", "2"]
        meldung: '`k++` steht **nach** dem Speichern. Nach dem ersten Ziel ist `k` schon 1.'
      - wert: ["1", "1", "1", "1", "5", "2", "3", "3", "3"]
        meldung: 'Das zweite Ziel liegt in Zeile 1 an der Stelle 5. Gespeichert wird `{x, y}`, also `{5, 1}`.'
hinweise:
  - Suche die Punkte Zeile für Zeile von links nach rechts.
  - Gespeichert wird `{x, y}`, danach wird `k` um 1 erhöht.
loesung: |
  **Ansatz:** Die Punkte in Lesereihenfolge finden und `k` mitzählen.
  ---
  Zeile 1 (`#. $ .#`) hat Punkte an den Stellen 1 und 5. Zeile 2 hat keinen. Zeile 3 (`#  .$ #`) hat einen an Stelle 3.
  ---
  Gespeichert werden `{1, 1}`, `{5, 1}` und `{3, 3}`, danach ist `k` jeweils 1, 2 und 3. Im Spielfeld stehen danach drei Leerzeichen statt der Punkte.
```

````aufgabe
id: pj-zi-code-anzahl
titel: Wie viele Kisten liegen schon richtig?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Für eine Fortschrittsanzeige soll das Spiel anzeigen, wie viele Kisten schon auf einem Ziel liegen. Implementiere
  `int kistenAufZiel(char[][] feld, int[][] ziele)`. Jede Zeile von `ziele` ist eine Position `{x, y}`.
  Vorbedingung: Alle Ziele liegen im Spielfeld.
teile:
  - typ: code
    vorlage: |
      public class Fortschritt {
          public static int kistenAufZiel(char[][] feld, int[][] ziele) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Fortschritt {
          public static int kistenAufZiel(char[][] feld, int[][] ziele) {
              int anzahl = 0;
              for (int i = 0; i < ziele.length; i++) {
                  if (feld[ziele[i][1]][ziele[i][0]] == '$') {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: 'kistenAufZiel(new char[][]{"######".toCharArray(), "#@$ $#".toCharArray(), "######".toCharArray()}, new int[][]{{2, 1}, {3, 1}})', erwartet: "1" }
      - { aufruf: 'kistenAufZiel(new char[][]{"#####".toCharArray(), "# $ #".toCharArray(), "#  @#".toCharArray(), "#####".toCharArray()}, new int[][]{{2, 1}})', erwartet: "1", beschreibung: "eine Kiste auf ihrem Ziel" }
      - { aufruf: 'kistenAufZiel(new char[][]{"#####".toCharArray(), "#$ @#".toCharArray(), "#####".toCharArray()}, new int[][]{{2, 1}})', erwartet: "0", beschreibung: "Ziel frei" }
      - { aufruf: 'kistenAufZiel(new char[][]{"####".toCharArray(), "#$$#".toCharArray(), "#$@#".toCharArray(), "####".toCharArray()}, new int[][]{{1, 1}, {1, 2}, {2, 1}})', erwartet: "3", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Positionen sind `{x, y}`. Das Ziel `{2, 1}` ist `feld[1][2]`, nicht `feld[2][1]`." }
      - { wert: 1, meldung: "Gezählt werden nur Kisten **auf** Zielen. Die Kiste bei `x = 4` liegt nicht auf einem Ziel." }
hinweise:
  - Du musst nicht das ganze Feld durchsuchen. Es genügt, jedes Ziel einmal anzuschauen.
  - 'Für das Ziel `ziele[i]` ist das Feld `feld[ziele[i][1]][ziele[i][0]]`.'
loesung: |
  **Ansatz:** Eine Schleife über die Zielliste. Für jedes Ziel prüfen, ob dort eine Kiste steht, und zählen.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < ziele.length; i++) {
      if (feld[ziele[i][1]][ziele[i][0]] == '$') {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Diese Methode ist eng mit `gewonnen` verwandt: Das Level ist genau dann gelöst, wenn `kistenAufZiel(feld, ziele) == ziele.length` gilt.
  ---
  Probe mit dem ersten Test: Ziel `{2, 1}` trägt eine Kiste, Ziel `{3, 1}` ist frei. Ergebnis 1.
````

### Sackgassen: wenn eine Kiste feststeckt

Aufgabenblatt 6 erwähnt Spielzustände, aus denen man nicht mehr herauskommt. Der einfachste Fall: Eine Kiste wird in eine
**Ecke** geschoben, also auf ein Feld, das oben oder unten **und** links oder rechts eine Wand hat. Eine solche Kiste kann
man nie wieder bewegen. Zum Schieben müsste die Figur auf der gegenüberliegenden Seite stehen, und dort ist eine Wand.
Liegt die Kiste nicht auf einem Ziel, ist das Level verloren. Die Spielerin muss mit der Taste `r` neu beginnen.

**Beispiel:** In diesem Feld steckt die Kiste bei `(1, 1)` fest. Über ihr und links von ihr ist eine Wand.

```
#####
#$  #
#  @#
#####
```

**Kein Beispiel:** Läge die Kiste in diesem Feld stattdessen bei `(2, 1)`, hätte sie nur oben eine Wand. Links von ihr
(`(1, 1)`) und rechts von ihr (`(3, 1)`) wäre frei. Die Figur könnte sie nach links und nach rechts schieben. Sie
steckt nicht in einer Ecke.

```aufgabe
id: pj-zi-auswahl-ecke
titel: Welche Kisten stecken fest?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  In diesem Spielfeld liegt keine der drei Kisten auf einem Ziel. Welche Kisten stecken in einer Ecke fest?
  Wähle alle zutreffenden aus.

  ```
  #######
  #$    #
  #  $  #
  #    $#
  #######
  ```
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['die Kiste bei `(1, 1)`', 'die Kiste bei `(3, 2)`', 'die Kiste bei `(5, 3)`']
    richtig: [0, 2]
    fehler:
      - wert: [0]
        meldung: Prüfe auch die Kiste rechts unten. Unter ihr liegt die untere Wand, rechts von ihr die rechte Wand.
      - wert: [0, 1, 2]
        meldung: Die Kiste in der Mitte hat ringsum freie Felder. Sie kann in jede Richtung geschoben werden.
hinweise:
  - Eine Ecke heißt eine Wand oben oder unten **und** eine Wand links oder rechts.
  - Prüfe für jede Kiste die vier Nachbarfelder.
loesung: |
  **Ansatz:** Für jede Kiste prüfen, ob es eine senkrechte und eine waagrechte Wand als Nachbarn gibt.
  ---
  `(1, 1)`: oben und links Wand, steckt fest. `(3, 2)`: alle vier Nachbarn frei, steckt nicht fest.
  ---
  `(5, 3)`: unten und rechts Wand, steckt fest. Richtig sind die erste und die dritte Kiste.
```

```aufgabe
id: pj-zi-text-getrennt
titel: Warum die Ziele getrennt speichern?
niveau: 2
lernziel: 4
kompetenz: begruenden
quelle: nach der Beschreibung von goals in Aufgabenblatt 6, WS 2023 (eigene Frage)
angabe: |
  Eine Tutorin fragt: „Warum speichert das Spiel die Zielpunkte in einem eigenen Array `goals`, statt sie einfach als
  Punkte im Spielfeld stehen zu lassen?“ Antworte in drei bis vier Sätzen und nenne ein konkretes Beispiel.
teile:
  - typ: text
    muster: |
      Im Spielfeld kann pro Feld nur ein Zeichen stehen. Betritt die Figur einen Zielpunkt oder wird eine Kiste darauf
      geschoben, wird der Punkt überschrieben. Verlässt sie das Feld wieder, setzt der Zug ein Leerzeichen, und der
      Zielpunkt ist verloren. Beispiel: In `#@. #` geht die Figur zweimal nach rechts, danach steht `#  @#` da, und
      kein Punkt mehr. In einem eigenen Array bleiben die Ziele das ganze Level über erhalten. Damit kann man sie
      jederzeit zeichnen und mit `gewonnen` prüfen, ob auf jedem Ziel eine Kiste liegt.
hinweise:
  - Wie viele Zeichen kann ein einzelnes Feld des Spielfelds gleichzeitig speichern?
  - Was schreibt der Zug auf das alte Feld der Figur?
loesung: |
  **Ansatz:** Den Informationsverlust beim Überschreiben erklären und ein Beispiel durchspielen.
  ---
  Ein Feld kann nur ein Zeichen speichern. Figur oder Kiste auf einem Ziel überschreiben den Punkt.
  ---
  Beim Verlassen wird das Feld zu `' '`. Die Zielliste dagegen ändert sich nie und hält die Ziele für Zeichnen und Siegprüfung fest.
```

````aufgabe
id: pj-zi-code-festgefahren
titel: Eine Kiste steckt in einer Ecke
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach dem Spielablauf in Aufgabenblatt 6, WS 2023 (Kiste in einer Ecke, eigene Aufgabe)
angabe: |
  Implementiere `boolean festgefahren(char[][] feld, int[][] ziele)`. Die Methode liefert `true`, wenn es **mindestens
  eine** Kiste gibt, die **nicht** auf einem Ziel liegt und in einer Ecke steckt. Eine Ecke heißt: Oben oder unten ist
  eine Wand, **und** links oder rechts ist eine Wand. Sonst liefert sie `false`.

  Vorbedingungen: Das Level ist von Wänden umschlossen, darum hat jede Kiste vier Nachbarfelder im Array. Jede Zeile
  von `ziele` ist eine Position `{x, y}`.
teile:
  - typ: code
    vorlage: |
      public class Sackgasse {
          public static boolean festgefahren(char[][] feld, int[][] ziele) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Sackgasse {
          public static boolean festgefahren(char[][] feld, int[][] ziele) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '$') {
                          boolean aufZiel = false;
                          for (int i = 0; i < ziele.length; i++) {
                              if (ziele[i][0] == x && ziele[i][1] == y) {
                                  aufZiel = true;
                              }
                          }
                          boolean senkrecht = feld[y - 1][x] == '#' || feld[y + 1][x] == '#';
                          boolean waagrecht = feld[y][x - 1] == '#' || feld[y][x + 1] == '#';
                          if (!aufZiel && senkrecht && waagrecht) {
                              return true;
                          }
                      }
                  }
              }
              return false;
          }
      }
    tests:
      - { aufruf: 'festgefahren(new char[][]{"#####".toCharArray(), "#$ @#".toCharArray(), "#   #".toCharArray(), "#####".toCharArray()}, new int[][]{{3, 2}})', erwartet: "true", beschreibung: "Kiste links oben in der Ecke" }
      - { aufruf: 'festgefahren(new char[][]{"#####".toCharArray(), "#$ @#".toCharArray(), "#   #".toCharArray(), "#####".toCharArray()}, new int[][]{{1, 1}})', erwartet: "false", beschreibung: "Ecke, aber auf einem Ziel" }
      - { aufruf: 'festgefahren(new char[][]{"######".toCharArray(), "# $  #".toCharArray(), "#  @ #".toCharArray(), "######".toCharArray()}, new int[][]{{4, 2}})', erwartet: "false", beschreibung: "nur oben eine Wand" }
      - { aufruf: 'festgefahren(new char[][]{"######".toCharArray(), "#$   #".toCharArray(), "#  $@#".toCharArray(), "######".toCharArray()}, new int[][]{{1, 1}, {1, 2}})', erwartet: "false", beschreibung: "zweite Kiste frei, erste auf Ziel" }
      - { aufruf: 'festgefahren(new char[][]{"#####".toCharArray(), "# @ #".toCharArray(), "#  $#".toCharArray(), "#####".toCharArray()}, new int[][]{{1, 1}})', erwartet: "true", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Eine Kiste auf einem Ziel ist kein Problem, auch in einer Ecke. Prüfe für jede Kiste zuerst, ob ihre Position in der Zielliste steht." }
      - { wert: 3, meldung: "Eine Wand nur oben reicht nicht. Für eine Ecke braucht es eine Wand oben oder unten **und** eine Wand links oder rechts." }
hinweise:
  - Durchsuche das Feld nach Kisten. Für jede Kiste brauchst du zwei Antworten. Liegt sie auf einem Ziel? Steckt sie in einer Ecke?
  - 'Ecke: `(oben || unten) && (links || rechts)`, wobei jedes Wort für „dort steht `#`“ steht. Ob die Kiste auf einem Ziel liegt, findest du mit einer Schleife über `ziele`.'
loesung: |
  **Ansatz:** Jede Kiste einzeln prüfen. Sie ist ein Problem, wenn sie nicht auf einem Ziel liegt und eine senkrechte sowie eine waagrechte Wand berührt. Eine solche Kiste genügt für `true`.
  ---
  Liegt die Kiste auf einem Ziel? Eine Schleife über die Zielliste vergleicht beide Koordinaten:
  ```java
  boolean aufZiel = false;
  for (int i = 0; i < ziele.length; i++) {
      if (ziele[i][0] == x && ziele[i][1] == y) {
          aufZiel = true;
      }
  }
  ```
  ---
  Steckt sie in einer Ecke? Zwei Wahrheitswerte, die wir dann verknüpfen:
  ```java
  boolean senkrecht = feld[y - 1][x] == '#' || feld[y + 1][x] == '#';
  boolean waagrecht = feld[y][x - 1] == '#' || feld[y][x + 1] == '#';
  if (!aufZiel && senkrecht && waagrecht) {
      return true;
  }
  ```
  Das Ganze steht in der Doppelschleife über das Feld, innerhalb von `if (feld[y][x] == '$')`. Nach den Schleifen folgt `return false;`.
  ---
  Warum `(oben || unten) && (links || rechts)`? Die Bedingung ist genau dann wahr, wenn eine der vier Kombinationen zutrifft: oben und links, oben und rechts, unten und links oder unten und rechts. Das sind genau die vier Ecken.
  ---
  Probe mit dem ersten Test: Die Kiste bei `(1, 1)` hat oben und links eine Wand, und das einzige Ziel ist `(3, 2)`. Ergebnis `true`.
````

```reflexion
frage: Eine Kiste kann auch ohne Ecke feststecken, zum Beispiel an einer langen Wand ohne Ziel. Warum erkennt `festgefahren` solche Fälle nicht, und ist das schlimm?
antwort: |
  `festgefahren` schaut nur auf die vier Nachbarfelder einer Kiste. Eine Kiste an einer geraden Wand kann noch entlang
  der Wand geschoben werden. Ob sie dabei je ein Ziel erreicht, hängt aber vom ganzen Level ab, etwa davon, ob an
  dieser Wand überhaupt ein Ziel liegt. Das lässt sich nicht aus vier Nachbarn ablesen. Schlimm ist das nicht: Die
  Methode meldet nur sichere Fälle. Was sie nicht erkennt, muss die Spielerin selbst merken und mit `r` neu beginnen.
  Eine Methode, die nie falsch „verloren“ sagt, ist nützlicher als eine, die manchmal zu früh aufgibt.
```

## Das Spielfeld zeichnen

```aufgabe
id: pj-ze-check-raster
titel: Wo beginnt ein Quadrat im Raster?
niveau: 1
art: check
angabe: |
  Ein Raster besteht aus Quadraten mit der Seitenlänge 40 Pixel, die lückenlos nebeneinander liegen. Spalten und
  Zeilen werden ab 0 gezählt. `fillSquare(x, y, seite)` bekommt die **linke obere Ecke**. Welche Pixelkoordinaten hat
  die linke obere Ecke des Quadrats in Spalte 3 und Zeile 2?
  (Wiederholung: [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe))
teile:
  - typ: zahl
    label: x in Pixel
    loesung: "3 * 40"
    fehler:
      - wert: "160"
        meldung: Spalte 3 ist die **vierte** Spalte. Vor ihr liegen nur die drei Spalten 0, 1 und 2, also 3 · 40 Pixel.
      - wert: "80"
        meldung: Das ist der Wert für die Zeile. Für die x-Koordinate zählt die Spalte.
  - typ: zahl
    label: y in Pixel
    loesung: "2 * 40"
    fehler:
      - wert: "120"
        meldung: Das ist der Wert für die Spalte. Für die y-Koordinate zählt die Zeile.
hinweise:
  - Vor dem Quadrat in Spalte 3 liegen drei ganze Quadrate.
loesung: |
  Links vom Quadrat liegen die Spalten 0, 1 und 2, zusammen `3 · 40 = 120` Pixel. Also ist `x = 120`.
  ---
  Darüber liegen die Zeilen 0 und 1, zusammen `2 · 40 = 80` Pixel. Also ist `y = 80`.
```

Bis jetzt lebt das Spiel nur im Speicher. Jetzt soll man es sehen. Aufgabenblatt 6 zeichnet jedes Feld mit einem kleinen
Bild, einem **Sprite** (gesprochen „spreit“, englisch für Kobold). Ein Sprite ist eine kleine Grafik, die eine
Spielfigur oder einen Gegenstand darstellt. Aufgabenblatt 6 lädt die Bilder mit `Image.fromFile(...)` und zeichnet sie mit
`drawImage(...)`. Unsere Aufgaben prüft ein Testprogramm ohne Fenster und ohne Bilddateien. Darum zeichnen wir jedes
Feld als **farbiges Quadrat**. Die Rechnung mit den Koordinaten ist genau dieselbe.

Die Grundidee: Jedes Feld des Spielfelds wird ein Quadrat mit der Seitenlänge `G` Pixel. Aufgabenblatt 6 nennt diese
Konstante `SQUARE_SIZE`. Im Programm steht sie als `static final int G = 40;` in der Klasse. `static final` heißt:
Eine Variable der Klasse, deren Wert sich nie ändert. Das Feld in Spalte `x` und Zeile `y` liegt dann so im Fenster:

- Seine linke obere Ecke hat die Pixelkoordinaten `(x · G, y · G)`.
- Links davon liegen `x` ganze Felder, darüber `y` ganze Felder.

Die erste Zeile des Arrays erscheint dabei als oberste Zeile im Fenster. Das passt, denn im Spielfeld und im
CodeDraw-Fenster wächst `y` nach unten.

:::beispiel[Pixelkoordinaten und Fenstergröße]
Für dieses Level mit `G = 40`:

```
  ####
###  #
#@ $.#
######
```

1. Die Figur steht bei `x = 1`, `y = 2`. Ihr Quadrat beginnt bei `(1 · 40, 2 · 40) = (40, 80)`.
2. Die Kiste steht bei `x = 3`, `y = 2`. Ihr Quadrat beginnt bei `(120, 80)` und endet rechts bei `120 + 40 = 160`.
3. Das Fenster muss so breit sein wie die **längste** Zeile: 6 Felder, also `6 · 40 = 240` Pixel.
4. Die Höhe ergibt sich aus der Zahl der Zeilen: 4 Zeilen, also `4 · 40 = 160` Pixel.

Aufgabenblatt 6 legt das Fenster bereits in der richtigen Größe an. Wer das Fenster selbst anlegt, schreibt
`new CodeDraw(240, 160)`.
:::

Für jedes Feld wählen wir eine Farbe aus der Klasse `Palette`, die CodeDraw mitbringt:

- Wand `'#'`: grau (`Palette.GRAY`).
- Kiste `'$'`: orange (`Palette.ORANGE`).
- Figur `'@'`: blau (`Palette.BLUE`).
- freies Feld `' '`: weiß (`Palette.WHITE`).

:::beispiel[Die Felder des Spielfelds zeichnen]
```java
public static void zeichneFeld(CodeDraw cd, char[][] feld) {
    for (int y = 0; y < feld.length; y++) {
        for (int x = 0; x < feld[y].length; x++) {
            char c = feld[y][x];
            if (c == '#') {
                cd.setColor(Palette.GRAY);
            } else if (c == '$') {
                cd.setColor(Palette.ORANGE);
            } else if (c == '@') {
                cd.setColor(Palette.BLUE);
            } else {
                cd.setColor(Palette.WHITE);
            }
            cd.fillSquare(x * G, y * G, G);
        }
    }
}
```

- `cd` ist das Fenster. Die Methode bekommt es als Parameter, wie `drawGame` in Aufgabenblatt 6.
- Die beiden Schleifen besuchen jedes Feld, wie beim Ausgeben in
  [16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld).
- Die `if`-Kette wählt die Farbe. `setColor` muss **vor** `fillSquare` stehen, denn CodeDraw zeichnet jede Form in der
  gerade eingestellten Farbe.
- `cd.fillSquare(x * G, y * G, G)` zeichnet das ausgefüllte Quadrat an der Pixelstelle des Felds.

Für die ersten vier Felder von Zeile 2 (`#@ $`) mit `G = 40` entstehen vier Quadrate: grau bei `(0, 80)`, blau bei `(40, 80)`, weiß bei
`(80, 80)` und orange bei `(120, 80)`.
:::

### Die Ziele als zweite Ebene

Die Zielpunkte stehen nicht im Spielfeld, sondern in der Zielliste. Darum zeichnet man sie in einem **zweiten
Durchgang** über das fertige Spielfeld. Man kann sich das wie zwei Folien vorstellen. Die erste Folie zeigt Boden,
Wände, Kisten und Figur. Die zweite Folie liegt darüber und zeigt nur die Ziele. Alles, was später gezeichnet wird,
deckt Früheres zu.

Für jedes Ziel gibt es zwei Fälle:

- Liegt dort eine Kiste, wird das Feld **grün** übermalt (`Palette.GREEN`). So sieht man sofort, welche Kisten richtig liegen.
- Sonst wird in die Mitte des Felds ein kleiner **roter** Kreis gezeichnet (`Palette.RED`, Radius 8). Bei `fillCircle`
  sind die ersten beiden Zahlen der **Mittelpunkt**. Die Mitte des Felds ist `(x · G + G / 2, y · G + G / 2)`.

:::beispiel[Ein Ziel unter der Figur]
Die Figur steht auf einem Ziel bei `x = 4`, `y = 2`, mit `G = 40`. Der erste Durchgang malt dort ein blaues Quadrat bei
`(160, 80)`. Im zweiten Durchgang findet das Programm das Ziel. Im Spielfeld steht `'@'`, keine Kiste. Also zeichnet es
den roten Kreis mit Mittelpunkt `(4 · 40 + 20, 2 · 40 + 20) = (180, 100)`. Man sieht einen roten Punkt auf der blauen
Figur und weiß: Hier ist ein Ziel, auch wenn die Figur gerade darauf steht.

Hätte das Programm die Ziele **zuerst** gezeichnet, wäre der rote Kreis danach vom blauen Quadrat verdeckt. Die
Reihenfolge der Durchgänge entscheidet, was man sieht.
:::

:::achtung[Spalte und Zeile bei den Pixeln vertauscht]
Wer `cd.fillSquare(y * G, x * G, G)` schreibt, zeichnet das Feld `(x, y)` an der Stelle des Felds `(y, x)`. Für die
Kiste bei `x = 3`, `y = 2` entsteht das Quadrat bei `(80, 120)` statt bei `(120, 80)`. Das ganze Level erscheint an der
Diagonale gespiegelt. Bei einem breiten, flachen Level ragt das Bild dann unten aus dem Fenster heraus, und rechts
bleibt das Fenster leer. Merke: `x` gehört zur waagrechten Pixelkoordinate, `y` zur senkrechten.
:::

:::achtung[Die Ziele vor dem Spielfeld gezeichnet]
Eine Fassung zeichnet zuerst für jedes Ziel den roten Kreis und danach `zeichneFeld`. Jedes freie Feld bekommt im
zweiten Schritt ein weißes Quadrat bei `(x · G, y · G)` mit der Seite `G`. Dieses Quadrat deckt den roten Kreis
vollständig zu, denn der Kreis mit Radius 8 liegt mitten im Feld. Im Fenster ist kein einziges Ziel zu sehen. Die
Spielerin weiß nicht, wohin die Kisten sollen. Richtig: zuerst das Spielfeld, danach die Ziele.
:::

```aufgabe
id: pj-ze-gefuehrt
titel: Ein Quadrat im Fenster platzieren
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Spielfeld wird mit `G = 32` gezeichnet. Eine Kiste steht bei `x = 5`, `y = 3`. Bei welchen Pixelkoordinaten
  liegt die linke obere Ecke ihres Quadrats?
teile:
  - typ: zahl
    label: x in Pixel
    loesung: "5 * 32"
    fehler:
      - wert: "96"
        meldung: Das ist `3 · 32`, also der Wert für die Zeile. Für die waagrechte Pixelkoordinate zählt die Spalte `x = 5`.
  - typ: zahl
    label: y in Pixel
    loesung: "3 * 32"
    fehler:
      - wert: "160"
        meldung: Das ist `5 · 32`, also der Wert für die Spalte. Für die senkrechte Pixelkoordinate zählt die Zeile `y = 3`.
      - wert: "112"
        meldung: Die Zeilen beginnen bei 0. Über Zeile 3 liegen drei Zeilen, nicht dreieinhalb. Gefragt ist die linke obere Ecke, nicht die Mitte.
gefuehrt:
  - text: Wie viele ganze Felder liegen links von der Kiste?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Die Spalten 0 bis 4 liegen links von Spalte 5. Das sind 5 Felder.
  - text: Wie viele Pixel sind das?
    teil: { typ: zahl, loesung: "5 * 32" }
    erklaerung: Jedes Feld ist 32 Pixel breit, also `5 · 32 = 160`.
  - text: Wie viele Pixel liegen über der Kiste?
    teil: { typ: zahl, loesung: "3 * 32" }
    erklaerung: Über Zeile 3 liegen die Zeilen 0, 1 und 2, also `3 · 32 = 96` Pixel.
hinweise:
  - Die linke obere Ecke liegt bei `(x · G, y · G)`.
loesung: |
  **Ansatz:** Die Felder links und über der Kiste zählen und mit der Feldgröße multiplizieren.
  ---
  `x · G = 5 · 32 = 160` und `y · G = 3 · 32 = 96`.
  ---
  Kontrolle: Die rechte untere Ecke liegt bei `(192, 128)`, also eine Feldgröße weiter in beide Richtungen.
```

```aufgabe
id: pj-ze-auswahl-farbe
titel: Welche Farbe hat eine Kiste auf einem Ziel?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Das Programm zeichnet zuerst das Spielfeld mit den Farben aus dem Beispiel und danach die Ziele, wie in diesem
  Abschnitt beschrieben. Eine Kiste liegt genau auf einem Ziel. Was sieht man auf diesem Feld?
teile:
  - typ: auswahl
    optionen:
      - ein grünes Quadrat
      - ein oranges Quadrat
      - ein oranges Quadrat mit einem roten Kreis in der Mitte
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das orange Quadrat entsteht im ersten Durchgang. Im zweiten Durchgang wird das Feld des Ziels noch einmal übermalt.
      - wert: 2
        meldung: Den roten Kreis bekommt ein Ziel nur, wenn **keine** Kiste darauf liegt. Mit Kiste wird das ganze Feld grün.
hinweise:
  - Was im zweiten Durchgang gezeichnet wird, liegt über dem ersten.
loesung: |
  **Ansatz:** Beide Durchgänge der Reihe nach betrachten. Der spätere deckt den früheren zu.
  ---
  Erster Durchgang: oranges Quadrat. Zweiter Durchgang: Auf dem Ziel liegt eine Kiste, also ein grünes Quadrat derselben Größe darüber. Man sieht nur Grün.
```

````aufgabe
id: pj-ze-code-bild
titel: Das Bild der Figur nach der Richtung wählen
niveau: 1
lernziel: 5
kompetenz: anwenden
quelle: nach drawGame in Aufgabenblatt 6, WS 2023 (Figur je Richtung, eigene Namen)
angabe: |
  Aufgabenblatt 6 zeichnet die Figur je nach der zuletzt gedrückten Richtung mit einem anderen Bild. Implementiere
  `String bildFuerRichtung(int richtung)`. Die Methode liefert den Namen des Bilds:

  - `"oben"` für Richtung 1, `"links"` für Richtung 3 und `"rechts"` für Richtung 4,
  - `"unten"` für Richtung 2 **und** für Richtung 0 (noch keine Taste gedrückt).

  Vorbedingung: `0 ≤ richtung ≤ 4`.
teile:
  - typ: code
    vorlage: |
      public class Bild {
          public static String bildFuerRichtung(int richtung) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Bild {
          public static String bildFuerRichtung(int richtung) {
              switch (richtung) {
                  case 1:
                      return "oben";
                  case 3:
                      return "links";
                  case 4:
                      return "rechts";
                  default:
                      return "unten";
              }
          }
      }
    tests:
      - { aufruf: "bildFuerRichtung(1)", erwartet: '"oben"' }
      - { aufruf: "bildFuerRichtung(2)", erwartet: '"unten"' }
      - { aufruf: "bildFuerRichtung(0)", erwartet: '"unten"', beschreibung: "Anfangsrichtung 0" }
      - { aufruf: "bildFuerRichtung(3)", erwartet: '"links"' }
      - { aufruf: "bildFuerRichtung(4)", erwartet: '"rechts"', versteckt: true }
    fehler:
      - { wert: 3, meldung: "Richtung 0 bedeutet „noch keine Taste“. Aufgabenblatt 6 zeichnet die Figur dann wie bei Richtung 2, mit Blick nach unten." }
hinweise:
  - 'Mit `switch` kannst du zwei Fälle zusammenfassen, indem du `case 0:` und `case 2:` direkt untereinander schreibst. Oder du nimmst `default` für alles Übrige.'
loesung: |
  **Ansatz:** Eine Fallunterscheidung mit `switch`. Drei Richtungen haben ein eigenes Bild, die beiden übrigen teilen sich `"unten"`.
  ---
  ```java
  switch (richtung) {
      case 1:
          return "oben";
      case 3:
          return "links";
      case 4:
          return "rechts";
      default:
          return "unten";
  }
  ```
  ---
  Probe: `bildFuerRichtung(0)` und `bildFuerRichtung(2)` landen beide im `default`-Fall und liefern `"unten"`.
````

```aufgabe
id: pj-ze-zahl-fenster
titel: Wie groß muss das Fenster sein?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Level kommt als Text `"#####\n#@ $###\n#  . .#\n########"` und wird mit der Feldgröße `G = 32` gezeichnet.
  Wie breit und wie hoch muss das Fenster in Pixel sein, damit jedes Feld hineinpasst?
teile:
  - typ: zahl
    label: Breite in Pixel
    loesung: "8 * 32"
    fehler:
      - wert: "160"
        meldung: Das ist die Breite der ersten Zeile. Die Zeilen sind verschieden lang. Das Fenster muss die **längste** Zeile aufnehmen.
      - wert: "224"
        meldung: 'Zähle die letzte Zeile `########` noch einmal. Sie hat 8 Zeichen.'
  - typ: zahl
    label: Höhe in Pixel
    loesung: "4 * 32"
    fehler:
      - wert: "96"
        meldung: Drei Zeilenumbrüche trennen vier Zeilen.
hinweise:
  - Zerlege den Text an den Zeilenumbrüchen und zähle die Zeichen jeder Zeile.
  - Die Breite richtet sich nach der längsten Zeile, die Höhe nach der Zahl der Zeilen.
loesung: |
  **Ansatz:** Die Zeilenlängen bestimmen, die größte nehmen und mit `G` multiplizieren.
  ---
  Die Zeilen sind `#####` (5), `#@ $###` (7), `#  . .#` (7) und `########` (8).
  ---
  Breite: `8 · 32 = 256` Pixel. Höhe: `4 · 32 = 128` Pixel.
```

```aufgabe
id: pj-ze-ausgabe-protokoll
titel: Pixelstellen ausgeben statt zeichnen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Statt zu zeichnen, gibt dieses Programm aus, wo es Figur und Kisten zeichnen würde. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      public class Protokoll {
          static final int G = 30;

          public static void main(String[] args) {
              char[][] feld = {
                  "#@##".toCharArray(),
                  "#  $".toCharArray()
              };
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@' || feld[y][x] == '$') {
                          System.out.println(feld[y][x] + " bei " + (x * G) + "," + (y * G));
                      }
                  }
              }
          }
      }
    loesung: |
      @ bei 30,0
      $ bei 90,30
    fehler:
      - wert: "@ bei 0,30\n$ bei 30,90"
        meldung: 'Die erste Zahl ist `x * G`, die zweite `y * G`. Die Figur steht in Zeile 0 an der Stelle 1, also bei `(30, 0)`.'
      - wert: "@ bei 1,0\n$ bei 3,1"
        meldung: Das sind die Feldkoordinaten. Das Programm multipliziert sie mit `G = 30` zu Pixelkoordinaten.
hinweise:
  - '`static final int G = 30;` ist eine Konstante: eine Variable der Klasse, deren Wert sich nie ändert.'
  - Bestimme die Felder von Figur und Kiste und multipliziere beide Koordinaten mit 30.
loesung: |
  **Ansatz:** Figur und Kiste finden und ihre Feldkoordinaten mit `G` multiplizieren.
  ---
  Die Figur steht bei `x = 1`, `y = 0`, also bei `30,0`. Die Kiste steht bei `x = 3`, `y = 1`, also bei `90,30`.
  ---
  `feld[y][x] + " bei "` beginnt mit einem `char`, gefolgt von einem String. Darum wird verkettet, und das Zeichen erscheint am Zeilenanfang.
```

### Das Hauptprogramm des Spiels

Die Methode `main` von Aufgabenblatt 6 ist vorgegeben. Du musst sie nicht schreiben, solltest aber verstehen, wie sie deine
Methoden aufruft. Sie arbeitet in einer **Spielschleife**, also einer Schleife, die bis zum Spielende läuft. Sie
wartet auf einen Tastendruck und fragt CodeDraw nach der gedrückten Taste. Aufgabenblatt 6 nennt dafür die Methoden
`hasKeyDownEvent()` und `nextKeyDownEvent()`. Dann ruft sie den Zug auf, zeichnet neu und prüft den Sieg.

**Achtung, CodeDraw-Version:** `hasKeyDownEvent()`, `nextKeyDownEvent()` und `Image.fromFile(...)` stammen aus der
CodeDraw-Version der Vorlage von 2023 (laut [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild)
Version 4). Die ältere `CodeDraw.jar` aus den Vorlagen von 2021 kennt diese Methoden noch nicht. Dort bekommt
`drawImage` den Dateipfad direkt, und Tasten meldet man über `onKeyDown(...)`. Verwende immer genau die Aufrufe, die
in deiner Vorlage stehen. Dieses Kapitel prüft diese Aufrufe nicht, weil seine Aufgaben ohne Fenster laufen.

```aufgabe
id: pj-ze-reihenfolge
titel: Die Spielschleife ordnen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Bring die Schritte des Hauptprogramms für ein Level in die richtige Reihenfolge. Die Schritte 3 bis 7 wiederholen
  sich in der Spielschleife, bis das Level gelöst ist.
teile:
  - typ: reihenfolge
    elemente:
      - 'das Level aus dem Text in ein Spielfeld umwandeln und die Ziele herauslösen'
      - 'das Spielfeld samt Zielen zum ersten Mal zeichnen'
      - 'auf einen Tastendruck warten'
      - 'aus der Taste den Richtungscode bestimmen'
      - 'den Zug ausführen und bei `true` den Schrittzähler erhöhen'
      - 'das Spielfeld neu zeichnen'
      - 'mit `gewonnen` prüfen, ob das Level gelöst ist'
    fehler:
      - wert: [1, 0, 2, 3, 4, 5, 6]
        meldung: Gezeichnet werden kann erst, wenn das Spielfeld und die Zielliste existieren.
      - wert: [0, 1, 2, 3, 4, 6, 5]
        meldung: Auch das Bild des letzten Zugs soll man sehen. Zeichne darum zuerst neu und prüfe dann den Sieg.
hinweise:
  - Was muss es geben, bevor man etwas zeichnen kann?
  - Ein Zug verändert das Spielfeld. Was muss danach geschehen, damit man die Änderung sieht?
loesung: |
  **Ansatz:** Erst Daten erzeugen, dann zeigen. In der Schleife: Eingabe, Verarbeitung, Ausgabe, Prüfung.
  ---
  Vor der Schleife: Level umwandeln, Ziele herauslösen, einmal zeichnen.
  ---
  In der Schleife: Taste abwarten, Richtung bestimmen, Zug ausführen, neu zeichnen, Sieg prüfen. Ist das Level gelöst, endet die Schleife, und das nächste Level wird geladen.
```

```aufgabe
id: pj-ze-text-trennung
titel: Warum verändert die Zeichenmethode nichts?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitstudent schlägt vor: „Ich lösche in `zeichne` gleich die Ziele aus der Liste, auf denen eine Kiste liegt.
  Dann muss `gewonnen` nur noch prüfen, ob die Liste leer ist.“ Erkläre in drei bis vier Sätzen, warum das keine gute
  Idee ist.
teile:
  - typ: text
    muster: |
      Eine Zeichenmethode soll nur darstellen und nichts verändern. Wird sie öfter aufgerufen, etwa zweimal
      hintereinander, darf sich am Spiel nichts ändern. Das Ziel bleibt außerdem ein Ziel, auch wenn gerade eine Kiste
      darauf liegt: Schiebt die Spielerin die Kiste wieder weg, muss das Ziel wieder gezeichnet werden. Wäre es aus der
      Liste gelöscht, wäre es für immer verschwunden. Darum bleibt die Zielliste unverändert, und `gewonnen` prüft sie
      bei jedem Aufruf neu.
hinweise:
  - Kann eine Kiste ein Ziel auch wieder verlassen?
  - Was passiert, wenn das Programm `zeichne` zweimal hintereinander aufruft?
loesung: |
  **Ansatz:** Zwei Gründe nennen: Zeichnen darf den Spielzustand nicht ändern, und Ziele bleiben das ganze Level über bestehen.
  ---
  Eine Kiste kann vom Ziel wieder weggeschoben werden. Ein gelöschtes Ziel käme nicht zurück.
  ---
  Eine Methode, die nur darstellt, kann man beliebig oft aufrufen, ohne etwas kaputt zu machen. Logik und Darstellung bleiben getrennt.
```

````aufgabe
id: pj-ze-code-zeichne
titel: Spielfeld und Ziele zeichnen
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2023, Methode drawGame (nachgebaut mit farbigen Formen statt Sprites)
angabe: |
  Implementiere `void zeichne(CodeDraw cd, char[][] feld, int[][] ziele)`. Die Feldgröße ist die Konstante `G = 40`.

  1. **Spielfeld:** Für jedes Feld `(x, y)` ein ausgefülltes Quadrat `cd.fillSquare(x * G, y * G, G)`. Die Farbe ist
     `Palette.GRAY` für `'#'`, `Palette.ORANGE` für `'$'` und `Palette.BLUE` für `'@'`. Alles andere wird `Palette.WHITE`.
  2. **Ziele:** Danach für jedes Ziel `{x, y}` aus `ziele`: Liegt dort eine Kiste, ein ausgefülltes Quadrat in
     `Palette.GREEN` an derselben Stelle. Sonst ein ausgefüllter Kreis in `Palette.RED` mit Mittelpunkt
     `(x * G + G / 2, y * G + G / 2)` und Radius 8.

  Die Zeilen des Felds können unterschiedlich lang sein.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Zeichnen {
          static final int G = 40;

          public static void zeichne(CodeDraw cd, char[][] feld, int[][] ziele) {
              // TODO
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Zeichnen {
          static final int G = 40;

          public static void zeichne(CodeDraw cd, char[][] feld, int[][] ziele) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      char c = feld[y][x];
                      if (c == '#') {
                          cd.setColor(Palette.GRAY);
                      } else if (c == '$') {
                          cd.setColor(Palette.ORANGE);
                      } else if (c == '@') {
                          cd.setColor(Palette.BLUE);
                      } else {
                          cd.setColor(Palette.WHITE);
                      }
                      cd.fillSquare(x * G, y * G, G);
                  }
              }
              for (int i = 0; i < ziele.length; i++) {
                  int x = ziele[i][0];
                  int y = ziele[i][1];
                  if (feld[y][x] == '$') {
                      cd.setColor(Palette.GREEN);
                      cd.fillSquare(x * G, y * G, G);
                  } else {
                      cd.setColor(Palette.RED);
                      cd.fillCircle(x * G + G / 2, y * G + G / 2, 8);
                  }
              }
          }
      }
    tests:
      - { aufruf: 'zeichne(new CodeDraw(240, 120), new char[][]{"######".toCharArray(), "#@$  #".toCharArray(), "######".toCharArray()}, new int[][]{{4, 1}})', zeichnung: true, beschreibung: "ein freies Ziel" }
      - { aufruf: 'zeichne(new CodeDraw(240, 120), new char[][]{"######".toCharArray(), "#  @$#".toCharArray(), "######".toCharArray()}, new int[][]{{4, 1}})', zeichnung: true, beschreibung: "Kiste auf dem Ziel" }
      - { aufruf: 'zeichne(new CodeDraw(240, 160), new char[][]{"  ####".toCharArray(), "###  #".toCharArray(), "#@ $ #".toCharArray(), "######".toCharArray()}, new int[][]{{1, 2}, {4, 2}})', zeichnung: true, beschreibung: "ausgefranst, Figur auf einem Ziel" }
      - { aufruf: 'zeichne(new CodeDraw(200, 200), new char[][]{"#####".toCharArray(), "#$@ #".toCharArray(), "# $ #".toCharArray(), "#   #".toCharArray(), "#####".toCharArray()}, new int[][]{{1, 1}, {3, 3}})', zeichnung: true, versteckt: true }
    fehler:
      - { wert: 2, meldung: "Liegt eine Kiste auf dem Ziel, wird das Feld grün übermalt. Prüfe im zweiten Durchgang `feld[y][x] == '$'` mit `x` und `y` aus der Zielliste." }
      - { wert: 3, meldung: "Die Zeilen sind verschieden lang. Die innere Schleife muss bis `feld[y].length` laufen. Auch das Leerzeichen am Zeilenanfang bekommt ein weißes Quadrat." }
hinweise:
  - Zwei Durchgänge. Der erste ist eine Doppelschleife über das Feld, der zweite eine einfache Schleife über die Zielliste.
  - '`setColor` steht immer vor der Form. Der Mittelpunkt des Kreises ist `x * G + G / 2`, nicht `x * G`.'
loesung: |
  **Ansatz:** Erst die Ebene „Spielfeld“, dann die Ebene „Ziele“. Die zweite Ebene liegt über der ersten.
  ---
  Erster Durchgang, wie `zeichneFeld` aus dem Beispiel:
  ```java
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < feld[y].length; x++) {
          char c = feld[y][x];
          if (c == '#') {
              cd.setColor(Palette.GRAY);
          } else if (c == '$') {
              cd.setColor(Palette.ORANGE);
          } else if (c == '@') {
              cd.setColor(Palette.BLUE);
          } else {
              cd.setColor(Palette.WHITE);
          }
          cd.fillSquare(x * G, y * G, G);
      }
  }
  ```
  ---
  Zweiter Durchgang über die Ziele:
  ```java
  for (int i = 0; i < ziele.length; i++) {
      int x = ziele[i][0];
      int y = ziele[i][1];
      if (feld[y][x] == '$') {
          cd.setColor(Palette.GREEN);
          cd.fillSquare(x * G, y * G, G);
      } else {
          cd.setColor(Palette.RED);
          cd.fillCircle(x * G + G / 2, y * G + G / 2, 8);
      }
  }
  ```
  ---
  Probe mit dem ersten Test: Die Figur ist blau bei `(40, 40)`, die Kiste orange bei `(80, 40)`. Das freie Ziel bei `x = 4` bekommt einen roten Kreis mit Mittelpunkt `(180, 60)`.
````

## Mastermind: Hinweise berechnen

```aufgabe
id: pj-mm-check-zufall
titel: Welche Zahlen liefert nextInt?
niveau: 1
art: check
angabe: |
  `Random rnd = new Random();` legt einen Zufallsgenerator an. Welche Werte kann `rnd.nextInt(6) + 1` liefern?
  (Wiederholung: [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel))
teile:
  - typ: auswahl
    optionen: ['die ganzen Zahlen von 1 bis 6', 'die ganzen Zahlen von 0 bis 6', 'die ganzen Zahlen von 1 bis 7']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`nextInt(6)` liefert 0 bis 5. Durch das `+ 1` wird daraus 1 bis 6. Die 0 kommt nicht mehr vor.'
      - wert: 2
        meldung: '`nextInt(6)` liefert nie die 6 selbst, die obere Grenze ist ausgeschlossen. Der größte Wert ist `5 + 1 = 6`.'
hinweise:
  - '`nextInt(n)` liefert eine Zahl von 0 bis `n - 1`.'
loesung: |
  `nextInt(6)` liefert eine der Zahlen 0, 1, 2, 3, 4, 5.
  ---
  Mit `+ 1` werden daraus 1 bis 6, wie bei einem Würfel.
```

Das Aufgabenblatt 6 im Wintersemester 2021 verlangte statt Sokoban das Spiel **Mastermind**. Es ist ein Ratespiel.
Der Computer denkt sich einen geheimen **Code** aus, eine Reihe von vier Farben. Die Spielerin rät eine Reihe von vier
Farben. Nach jedem Versuch bekommt sie **Hinweise** in Form kleiner Stecker, sogenannter **Pins**:

- Ein **roter Pin** für jede Farbe, die an der **richtigen Stelle** steht.
- Ein **weißer Pin** für jede Farbe, die im Code vorkommt, aber an einer **anderen Stelle**.

Die Pins verraten nicht, **welche** Stelle gemeint ist, nur wie viele es sind. Die Reihenfolge der Pins spielt laut
Aufgabenblatt 6 keine Rolle. Aus den Hinweisen mehrerer Versuche schließt die Spielerin auf den Code.

Im Programm ist jede Farbe eine Zahl, etwa 1 für Blau und 2 für Grün. Ein Code ist dann ein `int`-Array, zum Beispiel
`{3, 1, 4, 6}`. In Aufgabenblatt 6 kommt jede Farbe im Code **höchstens einmal** vor. Wir nehmen zuerst dasselbe an: Im Code
und im Versuch sind alle Farben **verschieden**.

:::beispiel[Hinweise von Hand bestimmen]
Der geheime Code ist `{3, 1, 4, 6}`.

**Versuch `{1, 3, 4, 5}`:**

1. Stelle für Stelle vergleichen: Stelle 0 hat 1 statt 3, Stelle 1 hat 3 statt 1, Stelle 2 hat 4 und 4, Stelle 3 hat 5 statt 6. Nur Stelle 2 stimmt. Das gibt **1 roten Pin**.
2. Für die übrigen Farben des Versuchs (1, 3 und 5) prüfen, ob sie irgendwo im Code vorkommen. 1 und 3 kommen vor, 5 nicht. Das gibt **2 weiße Pins**.

**Versuch `{3, 1, 6, 4}`:** Stelle 0 und 1 stimmen, also **2 rote Pins**. 6 und 4 kommen im Code vor, aber an anderer
Stelle, also **2 weiße Pins**. Zusammen sind es 4 Pins: Alle Farben sind gefunden, nur die Reihenfolge der letzten
beiden ist falsch.
:::

Die Rechnung hat zwei Teile, und beide werden zu Schleifen:

- **Rot:** Eine Schleife über die Stellen `i` vergleicht `versuch[i]` mit `geheim[i]`.
- **Weiß:** Für jede Stelle `i`, die **nicht** rot war, sucht eine zweite, innere Schleife die Farbe `versuch[i]` im
  ganzen Code.

:::beispiel[Die Hinweise berechnen]
```java
public static int[] hinweise(int[] geheim, int[] versuch) {
    int rot = 0;
    int weiss = 0;
    for (int i = 0; i < versuch.length; i++) {
        if (versuch[i] == geheim[i]) {
            rot++;
        } else {
            for (int j = 0; j < geheim.length; j++) {
                if (versuch[i] == geheim[j]) {
                    weiss++;
                }
            }
        }
    }
    return new int[]{rot, weiss};
}
```

- Die Methode liefert zwei Zahlen. Wie bei den Positionen packen wir sie in ein Array: `{rot, weiss}`.
- Die äußere Schleife geht die Stellen des Versuchs durch.
- Stimmt die Farbe an Stelle `i`, gibt es einen roten Pin. Der `else`-Zweig wird dann **nicht** ausgeführt.
- Sonst durchsucht die innere Schleife den ganzen Code. Weil alle Farben verschieden sind, gibt es höchstens einen Treffer.

Für `geheim = {3, 1, 4, 6}` und `versuch = {1, 3, 4, 5}` ergibt sich: Stelle 0 findet die 1 an Stelle 1 im Code (weiß),
Stelle 1 findet die 3 an Stelle 0 (weiß), Stelle 2 ist rot, Stelle 3 findet nichts. Ergebnis `{1, 2}`.
:::

:::achtung[Rote Treffer auch als weiß gezählt]
Lässt man das `else` weg, läuft die innere Schleife auch für rote Stellen. Bei `geheim = {3, 1, 4, 6}` und
`versuch = {1, 3, 4, 5}` findet sie an Stelle 2 die 4 im Code, nämlich an derselben Stelle 2. Das gibt einen
zusätzlichen weißen Pin. Ergebnis `{1, 3}` statt `{1, 2}`. Die Spielerin glaubt, sie hätte vier Farben gefunden,
dabei sind es nur drei. Ein Pin pro Farbe des Versuchs, und rot hat Vorrang.
:::

```aufgabe
id: pj-mm-gefuehrt
titel: Rote und weiße Pins für einen Versuch
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Der geheime Code ist `{2, 5, 1, 4}`, der Versuch ist `{5, 2, 1, 6}`. Alle Farben sind verschieden. Wie viele rote und
  wie viele weiße Pins gibt es?
teile:
  - typ: zahl
    label: rote Pins
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: Rot gibt es nur für die **richtige Stelle**. Die 5 und die 2 kommen im Code vor, stehen aber an anderen Stellen.
  - typ: zahl
    label: weiße Pins
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: Die 1 an Stelle 2 ist schon ein roter Pin. Sie zählt nicht zusätzlich als weiß.
      - wert: "4"
        meldung: Die 6 kommt im Code gar nicht vor. Weiß gibt es nur für Farben, die im Code stehen.
gefuehrt:
  - text: An welchen Stellen stimmen Code und Versuch überein? Gib die Anzahl an.
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Stelle 0: 5 gegen 2, Stelle 1: 2 gegen 5, Stelle 2: 1 gegen 1, Stelle 3: 6 gegen 4. Nur Stelle 2 stimmt.'
  - text: Welche Farben des Versuchs bleiben für Weiß übrig?
    teil:
      typ: auswahl
      optionen: ['5, 2 und 6', '5, 2, 1 und 6', 'nur 6']
      richtig: [0]
    erklaerung: Die 1 hat schon einen roten Pin. Übrig sind die Farben an den Stellen 0, 1 und 3.
  - text: Wie viele dieser übrigen Farben kommen im Code vor?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 5 und 2 stehen im Code `{2, 5, 1, 4}`, die 6 nicht.
hinweise:
  - Erst alle Stellen auf Gleichheit prüfen, dann für die übrigen Farben im ganzen Code suchen.
loesung: |
  **Ansatz:** Zwei Durchgänge, wie in der Methode `hinweise`: zuerst rot, dann weiß für die übrigen Stellen.
  ---
  Rot: Nur Stelle 2 stimmt (1 und 1). Ein roter Pin.
  ---
  Weiß: Von den übrigen Farben 5, 2 und 6 kommen 5 und 2 im Code vor. Zwei weiße Pins. Kontrolle: `1 + 2 = 3` Farben des Versuchs stehen im Code.
```

```aufgabe
id: pj-mm-auswahl
titel: Welche Pins zeigt das Spiel?
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Der geheime Code ist `{6, 2, 3, 1}`, der Versuch ist `{1, 2, 6, 5}`. Welche Pins zeigt das Spiel?
teile:
  - typ: auswahl
    optionen: ['1 roter und 2 weiße Pins', '3 rote Pins', '1 roter und 3 weiße Pins', '3 weiße Pins']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rot gibt es nur an der richtigen Stelle. Die 1 und die 6 stehen im Code an anderen Stellen.
      - wert: 2
        meldung: Die 2 an Stelle 1 ist rot. Sie bekommt nicht zusätzlich einen weißen Pin.
      - wert: 3
        meldung: An Stelle 1 steht in beiden Reihen die 2. Das ist ein roter Pin.
hinweise:
  - Vergleiche zuerst Stelle für Stelle, dann suche die übrigen Farben im Code.
loesung: |
  **Ansatz:** Zuerst rot, dann weiß für die übrigen Farben.
  ---
  Stelle 1 hat in beiden Reihen die 2, ein roter Pin. Von 1, 6 und 5 kommen 1 und 6 im Code vor, zwei weiße Pins.
```

```aufgabe
id: pj-mm-rf
titel: Aussagen über die Hinweise
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Im Code und im Versuch sind alle vier Farben verschieden. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Zahl der roten und weißen Pins zusammen ist höchstens 4.
        richtig: true
        erklaerung: Jede Farbe des Versuchs bekommt höchstens einen Pin, und der Versuch hat vier Farben.
      - text: Bei 4 roten Pins ist der Code erraten.
        richtig: true
        erklaerung: Dann stimmt jede Stelle, also ist der Versuch gleich dem Code.
      - text: Die Methode `hinweise` durchsucht auch für eine rote Stelle den ganzen Code.
        richtig: false
        erklaerung: Für eine rote Stelle läuft nur der `if`-Zweig. Die Suche steht im `else`-Zweig.
      - text: Die Reihenfolge der Pins verrät, welche Stelle des Versuchs richtig ist.
        richtig: false
        erklaerung: Die Pins sagen nur, wie viele Stellen richtig sind. Laut Aufgabenblatt 6 (Wintersemester 2021) spielt ihre Reihenfolge keine Rolle.
    fehler:
      - wert: [r, r, r, f]
        meldung: Schau in der Methode nach, in welchem Zweig die innere Schleife steht. Für eine rote Stelle wird sie übersprungen.
      - wert: [r, r, f, r]
        meldung: Die Pins sind nur gezählt. Welche Stelle gemeint ist, muss die Spielerin selbst herausfinden.
hinweise:
  - Überlege für jede Aussage ein kleines Beispiel mit vier Farben.
loesung: |
  **Ansatz:** Jede Aussage mit der Regel „ein Pin pro Farbe des Versuchs, rot hat Vorrang“ und mit dem Code von `hinweise` vergleichen.
  ---
  Aussage 1 und 2 sind richtig. Aussage 3 ist falsch, die Suche steht im `else`. Aussage 4 ist falsch, die Pins sind ungeordnet.
```

```aufgabe
id: pj-mm-trace
titel: rot und weiss Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode `hinweise` aus dem Beispiel bekommt `geheim = {4, 2, 6, 3}` und `versuch = {2, 4, 6, 1}`. Trage die Werte
  von `rot` und `weiss` nach jedem Durchlauf der äußeren Schleife ein.
teile:
  - typ: trace
    spalten: [rot, weiss]
    zeilen: [nach i = 0, nach i = 1, nach i = 2, nach i = 3]
    loesung: [[0, 1], [0, 2], [1, 2], [1, 2]]
    fehler:
      - wert: ["0", "1", "0", "2", "1", "3", "1", "3"]
        meldung: Bei `i = 2` stimmt die Stelle, also läuft nur der `if`-Zweig. Die Suche im `else`-Zweig findet für eine rote Stelle nicht statt.
      - wert: ["0", "0", "0", "0", "1", "0", "1", "0"]
        meldung: '`versuch[0]` ist 2. Die 2 steht im Code an Stelle 1, also gibt es schon bei `i = 0` einen weißen Pin.'
hinweise:
  - Für jede Stelle `i` zuerst `versuch[i] == geheim[i]` prüfen.
  - Nur wenn das falsch ist, die Farbe `versuch[i]` im ganzen Code suchen.
loesung: |
  **Ansatz:** Die äußere Schleife Stelle für Stelle durchgehen und je Stelle entweder rot oder die Suche ausführen.
  ---
  `i = 0`: 2 ist nicht 4, die 2 steht im Code an Stelle 1, weiß 1. `i = 1`: 4 ist nicht 2, die 4 steht an Stelle 0, weiß 2.
  ---
  `i = 2`: 6 gleich 6, rot 1. `i = 3`: 1 ist nicht 3, die 1 kommt im Code nicht vor. Ergebnis `{1, 2}`.
```

```aufgabe
id: pj-mm-ausgabe-ohne-else
titel: Was gibt die fehlerhafte Fassung aus?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  In dieser Fassung fehlt das `else`. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class OhneElse {
          public static int[] hinweise(int[] geheim, int[] versuch) {
              int rot = 0;
              int weiss = 0;
              for (int i = 0; i < versuch.length; i++) {
                  if (versuch[i] == geheim[i]) {
                      rot++;
                  }
                  for (int j = 0; j < geheim.length; j++) {
                      if (versuch[i] == geheim[j]) {
                          weiss++;
                      }
                  }
              }
              return new int[]{rot, weiss};
          }

          public static void main(String[] args) {
              int[] geheim = {5, 3, 2, 6};
              int[] a = hinweise(geheim, new int[]{3, 5, 2, 6});
              int[] b = hinweise(geheim, new int[]{1, 4, 3, 5});
              System.out.println(a[0] + " " + a[1]);
              System.out.println(b[0] + " " + b[1]);
          }
      }
    loesung: |
      2 4
      0 2
    fehler:
      - wert: "2 2\n0 2"
        meldung: So würde die richtige Fassung rechnen. In diesem Code fehlt aber das `else`. Die innere Schleife läuft auch für die beiden roten Stellen und findet dort die Farbe noch einmal.
hinweise:
  - Ohne `else` läuft die innere Schleife für **jede** Stelle, auch für die roten.
  - Bei verschiedenen Farben findet die innere Schleife jede Farbe, die im Code vorkommt, genau einmal.
loesung: |
  **Ansatz:** Den Code genau so ausführen, wie er dasteht. Jede Stelle durchläuft die innere Schleife.
  ---
  Versuch `{3, 5, 2, 6}`: Die Stellen 2 und 3 sind rot, also `rot = 2`. Alle vier Farben kommen im Code vor, die innere Schleife zählt viermal: `weiss = 4`.
  ---
  Versuch `{1, 4, 3, 5}`: keine Stelle stimmt. 3 und 5 kommen vor, `weiss = 2`. Hier fällt der Fehler nicht auf, weil es keine rote Stelle gibt.
  ---
  Ausgabe `2 4` und `0 2`. Die erste Zeile zeigt den Fehler: 6 Pins für 4 Farben sind unmöglich.
```

````aufgabe
id: pj-mm-code-pins
titel: Die Pins als Array speichern
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2021, Methode updateTips (nachgebaut, eigene Testdaten)
angabe: |
  Aufgabenblatt 6 speichert die Hinweise nicht als zwei Zahlen, sondern als Array von Pins. Implementiere
  `int[] pins(int[] geheim, int[] versuch)`. Das Ergebnis ist so lang wie `geheim`. Vorne stehen so viele Einsen
  (rote Pins), wie Stellen übereinstimmen. Danach folgen so viele Zweien (weiße Pins), wie Farben an einer anderen
  Stelle im Code vorkommen. Der Rest ist 0.

  Vorbedingungen: Beide Arrays sind gleich lang. In jedem Array sind alle Werte verschieden.

  Beispiel: `pins(new int[]{3, 1, 4, 6}, new int[]{1, 3, 4, 5})` liefert `{1, 2, 2, 0}`.
teile:
  - typ: code
    vorlage: |
      public class Pins {
          public static int[] pins(int[] geheim, int[] versuch) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Pins {
          public static int[] pins(int[] geheim, int[] versuch) {
              int[] p = new int[geheim.length];
              int k = 0;
              for (int i = 0; i < versuch.length; i++) {
                  if (versuch[i] == geheim[i]) {
                      p[k] = 1;
                      k++;
                  }
              }
              for (int i = 0; i < versuch.length; i++) {
                  if (versuch[i] != geheim[i]) {
                      for (int j = 0; j < geheim.length; j++) {
                          if (versuch[i] == geheim[j]) {
                              p[k] = 2;
                              k++;
                          }
                      }
                  }
              }
              return p;
          }
      }
    tests:
      - { aufruf: "pins(new int[]{3, 1, 4, 6}, new int[]{1, 3, 4, 5})", erwartet: "new int[]{1, 2, 2, 0}" }
      - { aufruf: "pins(new int[]{3, 1, 4, 6}, new int[]{3, 1, 4, 6})", erwartet: "new int[]{1, 1, 1, 1}", beschreibung: "Code erraten" }
      - { aufruf: "pins(new int[]{1, 2, 3, 4}, new int[]{5, 6, 7, 8})", erwartet: "new int[]{0, 0, 0, 0}", beschreibung: "keine Farbe richtig" }
      - { aufruf: "pins(new int[]{1, 2, 3, 4}, new int[]{4, 3, 2, 1})", erwartet: "new int[]{2, 2, 2, 2}", beschreibung: "alle Farben an falscher Stelle" }
      - { aufruf: "pins(new int[]{2, 5, 1, 4, 3}, new int[]{5, 2, 1, 3, 6})", erwartet: "new int[]{1, 2, 2, 2, 0}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Erst alle roten Pins, dann die weißen. Wenn du beides in einer Schleife einträgst, landet ein weißer Pin vor einem roten. Mach zwei getrennte Durchgänge." }
      - { wert: 2, meldung: "Eine rote Stelle darf nicht zusätzlich einen weißen Pin bekommen. Suche nur für Stellen, an denen `versuch[i] != geheim[i]` gilt." }
hinweise:
  - Ein Schreibindex `k` zeigt auf den nächsten freien Platz im Ergebnis, wie bei `kistenPositionen`.
  - Zwei Durchgänge. Der erste trägt für jede passende Stelle eine 1 ein, der zweite für jede andere Farbe, die im Code vorkommt, eine 2. Neue `int`-Arrays sind schon mit 0 gefüllt.
loesung: |
  **Ansatz:** Ein Ergebnis-Array mit Schreibindex. Zuerst alle roten Pins eintragen, danach alle weißen. Der Rest bleibt 0.
  ---
  ```java
  int[] p = new int[geheim.length];
  int k = 0;
  for (int i = 0; i < versuch.length; i++) {
      if (versuch[i] == geheim[i]) {
          p[k] = 1;
          k++;
      }
  }
  ```
  ---
  ```java
  for (int i = 0; i < versuch.length; i++) {
      if (versuch[i] != geheim[i]) {
          for (int j = 0; j < geheim.length; j++) {
              if (versuch[i] == geheim[j]) {
                  p[k] = 2;
                  k++;
              }
          }
      }
  }
  return p;
  ```
  ---
  Kann `k` zu groß werden? Nein. Jede Stelle des Versuchs liefert höchstens einen Pin, also höchstens `geheim.length` Pins.
  ---
  Probe mit dem Beispiel: eine 1 für Stelle 2, dann zwei 2 für die Farben 1 und 3. Ergebnis `{1, 2, 2, 0}`.
````

````aufgabe
id: pj-mm-code-erzeuge
titel: Einen Code aus verschiedenen Zufallsfarben erzeugen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2021, Methode generateCode (nachgebaut, Zufallsgenerator als Parameter)
angabe: |
  Implementiere `int[] erzeugeCode(int laenge, int farben, Random rnd)`. Die Methode liefert ein Array der Länge
  `laenge` mit Zufallszahlen von 1 bis `farben`. **Jede Zahl darf höchstens einmal vorkommen.** Verwende für jede
  Zufallszahl `rnd.nextInt(farben) + 1`.

  Vorbedingung: `1 ≤ laenge ≤ farben`.

  Der Zufallsgenerator kommt als Parameter. So können die Tests einen Generator mit festem Startwert (Seed) übergeben,
  wie in [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel).

  Weil der Code zufällig ist, prüfen die Tests nicht die genauen Zahlen. Sie prüfen die Länge, den Wertebereich und
  dass alle Zahlen verschieden sind.
teile:
  - typ: code
    vorlage: |
      import java.util.Random;

      public class Code {
          public static int[] erzeugeCode(int laenge, int farben, Random rnd) {
              return null; // TODO
          }
      }
    musterloesung: |
      import java.util.Random;

      public class Code {
          public static int[] erzeugeCode(int laenge, int farben, Random rnd) {
              int[] code = new int[laenge];
              int i = 0;
              while (i < laenge) {
                  int farbe = rnd.nextInt(farben) + 1;
                  boolean schonDa = false;
                  for (int j = 0; j < i; j++) {
                      if (code[j] == farbe) {
                          schonDa = true;
                      }
                  }
                  if (!schonDa) {
                      code[i] = farbe;
                      i++;
                  }
              }
              return code;
          }
      }
    tests:
      - { aufruf: "erzeugeCode(4, 6, new Random(1)).length", erwartet: "4", beschreibung: "Länge 4" }
      - { aufruf: "Arrays.stream(erzeugeCode(4, 6, new Random(3))).distinct().count()", erwartet: "4", beschreibung: "vier verschiedene Zahlen" }
      - { aufruf: "Arrays.stream(erzeugeCode(6, 6, new Random(2))).allMatch(v -> v >= 1 && v <= 6)", erwartet: "true", beschreibung: "sechs Stellen, sechs Farben: alle Zahlen von 1 bis 6" }
      - { aufruf: "Arrays.stream(erzeugeCode(6, 6, new Random(4))).distinct().count()", erwartet: "6", beschreibung: "so viele Stellen wie Farben" }
      - { aufruf: "Arrays.stream(erzeugeCode(5, 9, new Random(5))).distinct().count()", erwartet: "5", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Es kommt eine Zahl doppelt vor. Prüfe vor dem Speichern, ob die neue Zahl schon in `code[0]` bis `code[i - 1]` steht, und zieh in diesem Fall noch einmal." }
      - { wert: 3, meldung: "Die Farben sind 1 bis `farben`. `rnd.nextInt(farben)` allein liefert 0 bis `farben - 1`, darum `+ 1`." }
hinweise:
  - 'Eine `for`-Schleife passt nicht gut, weil man nicht weiß, wie oft man ziehen muss. Nimm eine `while`-Schleife, die läuft, bis alle `laenge` Stellen gefüllt sind.'
  - Zieh eine Zahl und prüf mit einer inneren Schleife, ob sie unter den schon gefüllten Stellen `0` bis `i - 1` vorkommt. Nur wenn nicht, speicherst du sie und erhöhst `i`.
loesung: |
  **Ansatz:** So lange ziehen, bis eine Zahl kommt, die noch nicht im Code steht. Ein Zähler `i` merkt sich, wie viele Stellen schon gefüllt sind.
  ---
  ```java
  int[] code = new int[laenge];
  int i = 0;
  while (i < laenge) {
      int farbe = rnd.nextInt(farben) + 1;
      boolean schonDa = false;
      for (int j = 0; j < i; j++) {
          if (code[j] == farbe) {
              schonDa = true;
          }
      }
      if (!schonDa) {
          code[i] = farbe;
          i++;
      }
  }
  return code;
  ```
  ---
  Die innere Schleife läuft nur bis `i - 1`. Die Stellen ab `i` sind noch 0 und gehören nicht zum Code.
  ---
  Warum braucht es die Vorbedingung `laenge ≤ farben`? Gäbe es weniger Farben als Stellen, fände die Schleife irgendwann keine neue Farbe mehr und liefe ewig.
````

```aufgabe
id: pj-mm-text-vorbedingung
titel: Warum endet erzeugeCode?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  In `erzeugeCode` läuft eine `while`-Schleife, die bei einer schon vorhandenen Farbe einfach noch einmal zieht.
  Begründe in drei bis vier Sätzen: Warum endet die Schleife bei `laenge ≤ farben` (fast sicher), und was passiert bei
  `erzeugeCode(5, 4, rnd)`?
teile:
  - typ: text
    muster: |
      Solange noch nicht alle Stellen gefüllt sind, gibt es bei `laenge ≤ farben` immer mindestens eine Farbe, die
      noch nicht im Code steht. Jede Ziehung trifft diese Farbe mit einer festen Wahrscheinlichkeit größer als 0.
      Darum kommt nach endlich vielen Ziehungen fast sicher eine neue Farbe, und `i` wächst bis `laenge`. Bei
      `erzeugeCode(5, 4, rnd)` sind nach vier Stellen alle vier Farben verbraucht. Jede weitere Ziehung liefert eine
      schon vorhandene Farbe, `i` bleibt bei 4, und die Schleife läuft endlos.
hinweise:
  - Wie viele Farben sind noch frei, wenn schon `i` Stellen gefüllt sind?
  - Was passiert, wenn keine Farbe mehr frei ist?
loesung: |
  **Ansatz:** Zählen, wie viele Farben nach `i` gefüllten Stellen noch frei sind: `farben - i`.
  ---
  Bei `laenge ≤ farben` ist `farben - i ≥ 1` für jedes `i < laenge`. Eine freie Farbe wird früher oder später gezogen.
  ---
  Bei 5 Stellen und 4 Farben ist nach 4 Stellen keine Farbe mehr frei. Die Schleife zieht ewig weiter, das Programm hängt. Darum steht die Bedingung als Vorbedingung in der Angabe der Methode.
```

### Variante: Farben dürfen sich wiederholen

Im echten Brettspiel darf eine Farbe im Code mehrfach vorkommen, etwa `{2, 2, 5, 1}`. Dann reicht die Methode
`hinweise` nicht mehr. Für Weiß gilt jetzt: Jede Farbe des Codes kann **nur einen** Pin auslösen. Ein Pin pro
Farbe im Versuch reicht nicht als Regel.

:::achtung[Wiederholte Farben mehrfach gezählt]
Geheim ist `{1, 2, 3, 4}`, der Versuch ist `{1, 1, 1, 1}`. Richtig ist ein roter Pin (Stelle 0) und **kein** weißer,
denn im Code gibt es nur eine 1, und die ist schon rot. Die Methode `hinweise` rechnet aber so: Für die Stellen 1, 2
und 3 sucht sie die 1 im Code und findet sie jedes Mal an Stelle 0. Ergebnis `{1, 3}` statt `{1, 0}`. Die eine 1 im
Code wird viermal verwendet.
:::

Die Lösung ist **Zählen pro Farbe**. Für jede Farbe zählt man, wie oft sie im Code und wie oft im Versuch vorkommt.
Die kleinere der beiden Zahlen sagt, wie viele Paare man bilden kann. Die Summe dieser Paare über alle Farben ist die
Zahl der gemeinsamen Farben, rot und weiß zusammen. Davon zieht man die roten Pins ab.

:::beispiel[Hinweise mit wiederholten Farben]
Geheim `{2, 2, 5, 1}`, Versuch `{5, 2, 2, 2}`.

1. Rot: Nur Stelle 1 stimmt (2 und 2). **1 roter Pin.**
2. Zählen im Code: Farbe 2 kommt zweimal vor, 5 einmal, 1 einmal.
3. Zählen im Versuch: Farbe 5 kommt einmal vor, 2 dreimal.
4. Paare je Farbe: Farbe 2 ergibt das Minimum von 2 und 3, also 2. Farbe 5 ergibt das Minimum von 1 und 1, also 1.
   Farbe 1 ergibt 0, weil sie im Versuch fehlt. Zusammen sind es 3 gemeinsame Farben.
5. Weiß: `3 - 1 = 2` **weiße Pins.**

Probe in Worten: Die 5 des Versuchs passt zur 5 im Code, aber an anderer Stelle (weiß). Von den drei Zweien des
Versuchs steht eine richtig (rot). Eine weitere passt zur zweiten 2 im Code (weiß). Die dritte 2 findet keinen Partner mehr.
:::

````aufgabe
id: pj-mm-code-wiederholung
titel: Hinweise bei wiederholten Farben
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Implementiere `int[] hinweiseMitWiederholung(int[] geheim, int[] versuch, int farben)`. Farben sind die Zahlen 1 bis
  `farben` und dürfen sich in beiden Arrays wiederholen. Die Methode liefert `{rot, weiss}`:

  - `rot` ist die Zahl der Stellen `i` mit `geheim[i] == versuch[i]`.
  - `weiss` ist die Zahl der gemeinsamen Farben minus `rot`. Die gemeinsamen Farben sind die Summe über alle Farben `f`
    von `Math.min(Anzahl von f in geheim, Anzahl von f in versuch)`. `Math.min(a, b)` liefert die kleinere der beiden Zahlen.

  Vorbedingung: Beide Arrays sind gleich lang, alle Werte liegen zwischen 1 und `farben`.
teile:
  - typ: code
    vorlage: |
      public class Wiederholung {
          public static int[] hinweiseMitWiederholung(int[] geheim, int[] versuch, int farben) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Wiederholung {
          public static int[] hinweiseMitWiederholung(int[] geheim, int[] versuch, int farben) {
              int rot = 0;
              for (int i = 0; i < geheim.length; i++) {
                  if (geheim[i] == versuch[i]) {
                      rot++;
                  }
              }
              int[] anzahlGeheim = new int[farben + 1];
              int[] anzahlVersuch = new int[farben + 1];
              for (int i = 0; i < geheim.length; i++) {
                  anzahlGeheim[geheim[i]]++;
                  anzahlVersuch[versuch[i]]++;
              }
              int gemeinsam = 0;
              for (int f = 1; f <= farben; f++) {
                  gemeinsam += Math.min(anzahlGeheim[f], anzahlVersuch[f]);
              }
              return new int[]{rot, gemeinsam - rot};
          }
      }
    tests:
      - { aufruf: "hinweiseMitWiederholung(new int[]{1, 2, 3, 4}, new int[]{1, 1, 1, 1}, 6)", erwartet: "new int[]{1, 0}", beschreibung: "eine 1 im Code, vier im Versuch" }
      - { aufruf: "hinweiseMitWiederholung(new int[]{1, 1, 2, 2}, new int[]{2, 2, 1, 1}, 4)", erwartet: "new int[]{0, 4}" }
      - { aufruf: "hinweiseMitWiederholung(new int[]{3, 1, 4, 6}, new int[]{1, 3, 4, 5}, 6)", erwartet: "new int[]{1, 2}", beschreibung: "ohne Wiederholung wie hinweise" }
      - { aufruf: "hinweiseMitWiederholung(new int[]{2, 2, 5, 5}, new int[]{2, 5, 2, 6}, 6)", erwartet: "new int[]{1, 2}" }
      - { aufruf: "hinweiseMitWiederholung(new int[]{6, 6, 6, 6}, new int[]{6, 1, 6, 2}, 6)", erwartet: "new int[]{2, 0}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Die eine 1 im Code darf nur einen Pin auslösen, und der ist schon rot. Zähle je Farbe, nimm das Minimum der beiden Anzahlen und zieh danach `rot` ab." }
      - { wert: 2, meldung: "Es reicht nicht zu prüfen, **ob** eine Farbe in beiden Arrays vorkommt. Zähle, **wie oft**: Die 1 und die 2 kommen hier in beiden Arrays je zweimal vor. Das sind zusammen vier Paare." }
hinweise:
  - 'Zählarrays: `int[] anzahlGeheim = new int[farben + 1];`. Der Index ist die Farbe, Index 0 bleibt unbenutzt.'
  - Drei Schritte. Rot wie bisher zählen. Dann beide Zählarrays füllen. Dann über alle Farben `Math.min` aufsummieren und `rot` abziehen.
loesung: |
  **Ansatz:** Statt für jede Stelle im Code zu suchen, zählen wir je Farbe. Die kleinere Anzahl je Farbe ist die Zahl der Paare. So kann keine Farbe des Codes doppelt verwendet werden.
  ---
  Rot wie bisher:
  ```java
  int rot = 0;
  for (int i = 0; i < geheim.length; i++) {
      if (geheim[i] == versuch[i]) {
          rot++;
      }
  }
  ```
  ---
  Zählarrays, bei denen der Index die Farbe ist:
  ```java
  int[] anzahlGeheim = new int[farben + 1];
  int[] anzahlVersuch = new int[farben + 1];
  for (int i = 0; i < geheim.length; i++) {
      anzahlGeheim[geheim[i]]++;
      anzahlVersuch[versuch[i]]++;
  }
  ```
  ---
  Paare zählen und rot abziehen:
  ```java
  int gemeinsam = 0;
  for (int f = 1; f <= farben; f++) {
      gemeinsam += Math.min(anzahlGeheim[f], anzahlVersuch[f]);
  }
  return new int[]{rot, gemeinsam - rot};
  ```
  ---
  Probe mit `{1, 2, 3, 4}` und `{1, 1, 1, 1}`: rot 1. Farbe 1 ergibt das Minimum von 1 und 4, also 1, alle anderen 0. Weiß `1 - 1 = 0`.
````

## Gemischte Wiederholung

Diese Aufgaben mischen den Stoff dieses Kapitels mit früheren Kapiteln: Zeichen als Zahlen, Überladen, Trennzeichen,
Rekursion, Stacktraces und Referenzen. Zwei Aufgaben fragen nur, welches Vorgehen passt, ohne dass du etwas
ausrechnen musst. Mische ruhig die Reihenfolge und löse ohne Hinweise, bevor du einen aufdeckst.

```aufgabe
id: pj-mix-char-plus
titel: Das Zeichen nach der Wand
niveau: 1
lernziel: 0
kompetenz: anwenden
quelle: Wiederholung aus Kapitel 2 (char als Zahl)
angabe: |
  Was gibt der Code aus? Das Zeichen `'#'` hat den Code 35. (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      char c = '#';
      System.out.println(c + 1);
      System.out.println((char) (c + 1));
    loesung: |
      36
      $
    fehler:
      - wert: "$\n$"
        meldung: '`c + 1` rechnet mit dem Zahlenwert des Zeichens. Ein `char` plus ein `int` ergibt ein `int`, also 36. Erst der Cast `(char)` macht wieder ein Zeichen daraus.'
      - wert: "#1\n$"
        meldung: Verkettet wird nur, wenn ein String beteiligt ist. `c + 1` enthält keinen String, also wird gerechnet.
hinweise:
  - In Java ist ein `char` eine kleine Zahl. Beim Rechnen mit `+` wird der Zahlenwert verwendet.
loesung: |
  **Ansatz:** `char` plus `int` ergibt einen `int`. Der Cast `(char)` wandelt den Zahlenwert zurück in ein Zeichen.
  ---
  `c + 1` ist `35 + 1 = 36`. `(char) 36` ist das Zeichen mit dem Code 36, das Dollarzeichen. In der Zeichentabelle folgt die Kiste direkt auf die Wand.
```

```aufgabe
id: pj-mix-ueberladen
titel: Zwei Methoden mit demselben Namen
niveau: 1
lernziel: 1
kompetenz: verstehen
quelle: Wiederholung aus Kapitel 6 (Überladen)
angabe: |
  Was gibt das Programm aus? `new String(z)` macht aus einem `char`-Array `z` einen String mit denselben Zeichen.
  (Wiederholung: [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden))
teile:
  - typ: ausgabe
    code: |
      public class Zaehlen {
          public static int zaehle(String s) {
              int n = 0;
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) == '$') {
                      n++;
                  }
              }
              return n;
          }

          public static int zaehle(char[][] feld) {
              int summe = 0;
              for (int y = 0; y < feld.length; y++) {
                  summe += zaehle(new String(feld[y]));
              }
              return summe;
          }

          public static void main(String[] args) {
              char[][] f = {"#$#".toCharArray(), "$$ ".toCharArray()};
              System.out.println(zaehle(f) + " " + zaehle("$.$"));
          }
      }
    loesung: |
      3 2
    fehler:
      - wert: "1 2"
        meldung: 'Die Fassung für `char[][]` ruft für **jede** Zeile die String-Fassung auf und addiert. Zeile 0 hat eine Kiste, Zeile 1 zwei.'
      - wert: "5"
        meldung: '`zaehle(f) + " " + zaehle("$.$")` enthält einen String in der Mitte. Darum werden die beiden Zahlen verkettet und nicht addiert.'
hinweise:
  - Java wählt die Methode nach dem Typ des Arguments. `f` ist ein `char[][]`, `"$.$"` ein String.
loesung: |
  **Ansatz:** Für jeden Aufruf die passende Fassung bestimmen: Der Parametertyp entscheidet.
  ---
  `zaehle(f)` nimmt die Fassung für `char[][]`. Sie macht aus jeder Zeile einen String und zählt darin: `1 + 2 = 3`.
  ---
  `zaehle("$.$")` nimmt die String-Fassung: 2. Ausgabe `3 2`.
```

```aufgabe
id: pj-mix-verfahren-muster
titel: Welches Suchmuster passt?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  **Welches Verfahren passt?** Du musst nichts rechnen. Ordne jeder Aufgabe das passende Muster aus
  [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden) zu: **Zählen** (Zähler erhöhen, am Ende
  liefern), **Finden** (beim ersten Treffer sofort `return`) oder **Sammeln** (jeden Treffer in ein Ergebnis-Array).

  Aufgabe: „Die Methode soll prüfen, ob irgendwo im Spielfeld eine Kiste in einer Ecke steckt.“
teile:
  - typ: auswahl
    optionen: ['Finden', 'Zählen', 'Sammeln']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Man könnte zählen und am Ende mit 0 vergleichen. Aber sobald **eine** solche Kiste gefunden ist, steht die Antwort fest. Weiterzusuchen ist unnötig.
      - wert: 2
        meldung: Die Frage lautet nur „gibt es eine?“. Die Positionen aller solchen Kisten braucht dafür niemand.
hinweise:
  - Steht die Antwort schon nach dem ersten Treffer fest?
loesung: |
  **Ansatz:** Überlegen, was die Methode liefern soll: eine einzige Ja-Nein-Antwort.
  ---
  Eine einzige Kiste in einer Ecke genügt für „ja“. Also **Finden**: beim ersten Treffer `return true`, nach den Schleifen `return false`. So arbeitet `festgefahren` in [16.5 Zielpunkte, Sieg und Sackgassen](/lernen/ep1/projekt/zielpunkte-sieg-und-sackgassen).
```

```aufgabe
id: pj-mix-verfahren-schleife
titel: Wann passt eine while-Schleife?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  **Welches Verfahren passt?** Für welche dieser Aufgaben passt eine `while`-Schleife besser als eine `for`-Schleife?
  Wähle alle zutreffenden aus. (Wiederholung: [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife))
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - alle Felder des Spielfelds zeichnen
      - so lange Zufallsfarben ziehen, bis vier verschiedene beisammen sind
      - in einer Richtung gehen, bis das erste Hindernis kommt
      - die Zielpunkte in einem Level-Text zählen
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: Beim Zeichnen und beim Zählen steht vorher fest, wie viele Durchläufe es gibt, nämlich so viele wie Felder oder Zeichen. Dafür ist `for` gemacht.
      - wert: [1]
        meldung: Auch beim Gehen bis zum Hindernis weiß man vorher nicht, wie viele Schritte es werden. Das entscheidet erst das Spielfeld.
hinweise:
  - Weiß man vorher, wie oft die Schleife läuft? Dann passt `for`. Hängt es von einer Bedingung ab, die sich erst unterwegs entscheidet, passt `while`.
loesung: |
  **Ansatz:** Für jede Aufgabe fragen: Steht die Zahl der Durchläufe vorher fest?
  ---
  Zeichnen und Zählen: Ja, je ein Durchlauf pro Feld oder Zeichen. Dafür passt `for`.
  ---
  Zufallsfarben ziehen (`erzeugeCode` in [16.7 Mastermind: Hinweise berechnen](/lernen/ep1/projekt/mastermind-hinweise-berechnen)) und bis zum Hindernis gehen (`freieSchritte` in [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder)): Die Zahl hängt vom Zufall oder vom Feld ab. Dafür passt `while`.
```

```aufgabe
id: pj-mix-trennzeichen
titel: Positionen mit Trennzeichen ausgeben
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Wiederholung aus Kapitel 4 (Trennzeichen)
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem))
teile:
  - typ: ausgabe
    code: |
      char[][] feld = {
          "#$ $#".toCharArray(),
          "# $ #".toCharArray()
      };
      String text = "";
      for (int y = 0; y < feld.length; y++) {
          for (int x = 0; x < feld[y].length; x++) {
              if (feld[y][x] == '$') {
                  if (!text.isEmpty()) {
                      text += ";";
                  }
                  text += "(" + x + "," + y + ")";
              }
          }
      }
      System.out.println(text);
    loesung: |
      (1,0);(3,0);(2,1)
    fehler:
      - wert: "(1,0);(3,0);(2,1);"
        meldung: Das Trennzeichen wird **vor** jede Position gesetzt, aber nur, wenn schon etwas im Text steht. Nach der letzten Position kommt darum keines.
      - wert: "(0,1);(0,3);(1,2)"
        meldung: Ausgegeben wird `x` vor `y`. Die erste Kiste steht in Zeile 0 an der Stelle 1, also `(1,0)`.
hinweise:
  - '`text.isEmpty()` ist nur vor der ersten Position wahr.'
  - Die Kisten werden in Lesereihenfolge gefunden.
loesung: |
  **Ansatz:** Treffer in Lesereihenfolge aufschreiben und das Trennzeichen nur zwischen zwei Positionen setzen.
  ---
  Treffer: `(1,0)`, `(3,0)`, `(2,1)`.
  ---
  Vor der ersten Position ist `text` leer, also kein `;`. Vor jeder weiteren steht eines. Ausgabe `(1,0);(3,0);(2,1)`.
```

````aufgabe
id: pj-mix-rekursion
titel: Kisten in einer Zeile rekursiv zählen
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Wiederholung aus Kapitel 10 (Rekursion mit Strings)
angabe: |
  Implementiere `int kistenRekursiv(String zeile)` **rekursiv** und ohne Schleifen. Die Methode zählt, wie oft `'$'` in
  `zeile` vorkommt. Von `String` darfst du nur `charAt`, `length`, `substring` und `isEmpty` verwenden.
  (Wiederholung: [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings))

  Beispiel: `kistenRekursiv("#$ $.#")` liefert 2.
teile:
  - typ: code
    vorlage: |
      public class Rekursiv {
          public static int kistenRekursiv(String zeile) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Rekursiv {
          public static int kistenRekursiv(String zeile) {
              if (zeile.isEmpty()) {
                  return 0;
              }
              int eigen = 0;
              if (zeile.charAt(0) == '$') {
                  eigen = 1;
              }
              return eigen + kistenRekursiv(zeile.substring(1));
          }
      }
    tests:
      - { aufruf: 'kistenRekursiv("#$ $.#")', erwartet: "2" }
      - { aufruf: 'kistenRekursiv("")', erwartet: "0", beschreibung: "Basisfall: leerer String" }
      - { aufruf: 'kistenRekursiv("$")', erwartet: "1", beschreibung: "nur eine Kiste" }
      - { aufruf: 'kistenRekursiv("$$#$ $$")', erwartet: "5", versteckt: true }
    regeln: { keineSchleifenIn: [kistenRekursiv], rekursiv: [kistenRekursiv], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Was liefert die Methode für den leeren String? Dort gibt es kein Zeichen, `charAt(0)` würde eine Exception werfen. Das ist dein Basisfall mit Ergebnis 0." }
      - { wert: "keineSchleifenIn", meldung: "Die Aufgabe verlangt Rekursion. Ersetze die Schleife durch einen Selbstaufruf mit `zeile.substring(1)`." }
hinweise:
  - Basisfall ist der leere String. Im rekursiven Fall betrachtest du nur das erste Zeichen.
  - Der eigene Beitrag ist 1, wenn `zeile.charAt(0) == '$'` gilt, sonst 0. Dazu kommt das Ergebnis für `zeile.substring(1)`.
loesung: |
  **Ansatz:** Erstes Zeichen und Rest, wie in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings). Der Rest wird vom Selbstaufruf gezählt.
  ---
  ```java
  if (zeile.isEmpty()) {
      return 0;
  }
  int eigen = 0;
  if (zeile.charAt(0) == '$') {
      eigen = 1;
  }
  return eigen + kistenRekursiv(zeile.substring(1));
  ```
  ---
  Fortschritt: `substring(1)` ist um ein Zeichen kürzer. Jede Kette von Aufrufen endet beim leeren String.
  ---
  Probe: `"$"` ergibt `1 + kistenRekursiv("") = 1 + 0 = 1`.
````

```aufgabe
id: pj-mix-stacktrace
titel: Einen Absturz beim Ausgeben deuten
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Wiederholung aus Kapitel 9 (Stacktraces lesen)
angabe: |
  Ein Programm gibt ein Spielfeld aus und bricht ab mit

  ```
  Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4
      at Spiel.zeige(Spiel.java:4)
      at Spiel.main(Spiel.java:12)
  ```

  Zeile 4 ist `System.out.print(feld[y][x]);`. Die Schleifen lauten
  `for (int y = 0; y < feld.length; y++)` und `for (int x = 0; x < feld[0].length; x++)`. Das Spielfeld ist
  `{"#####".toCharArray(), "#@ #".toCharArray(), "#####".toCharArray()}`. Was ist die Ursache?
  (Wiederholung: [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen))
teile:
  - typ: auswahl
    optionen:
      - 'Die innere Schleife läuft bis zur Länge von Zeile 0 (5). Zeile 1 hat aber nur 4 Zeichen, Index 4 gibt es dort nicht.'
      - 'Die äußere Schleife läuft eine Zeile zu weit.'
      - 'Im Zugriff sind `x` und `y` vertauscht.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Meldung sagt „length 4“. Das Spielfeld hat nur 3 Zeilen. Ein Fehler der äußeren Schleife würde „length 3“ melden.'
      - wert: 2
        meldung: Der Zugriff `feld[y][x]` ist richtig herum. Die Länge 4 gehört zu Zeile 1, und dort ist Index 4 der erste ungültige.
hinweise:
  - Die Meldung nennt den ungültigen Index (4) und die Länge des Arrays, in das gegriffen wurde (4).
  - Welche Zeile des Spielfelds hat die Länge 4?
loesung: |
  **Ansatz:** Index und Länge aus der Meldung mit den Arrays im Programm vergleichen.
  ---
  Länge 4 hat nur Zeile 1 (`#@ #`). Index 4 entsteht, weil die innere Schleife bis `feld[0].length = 5` läuft.
  ---
  Die Reparatur ist `x < feld[y].length`, wie in [16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld). Dann bekommt jede Zeile ihre eigene Grenze.
```

```aufgabe
id: pj-mix-alias
titel: Der Startzustand verändert sich mit
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Wiederholung aus Kapitel 12 (Referenzen)
angabe: |
  Für die Taste `r` (Level neu starten) will ein Programm den Startzustand aufheben. Was gibt der Code aus?
  `new String(z)` macht aus einem `char`-Array `z` einen String mit denselben Zeichen.
  (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      char[][] feld = {
          "#####".toCharArray(),
          "#@  #".toCharArray(),
          "#####".toCharArray()
      };
      char[][] start = feld;
      feld[1][1] = ' ';
      feld[1][2] = '@';
      System.out.println(new String(start[1]));
    loesung: |
      # @ #
    fehler:
      - wert: "#@  #"
        meldung: '`char[][] start = feld;` kopiert nur den Verweis. `start` und `feld` zeigen auf dasselbe Array. Jeder Zug ist auch in `start` zu sehen.'
hinweise:
  - Wird bei `start = feld` ein neues Array angelegt?
  - Wenn beide Variablen auf dasselbe Array zeigen, sieht man jede Änderung über beide.
loesung: |
  **Ansatz:** Klären, worauf `start` zeigt. Eine Zuweisung von Arrays kopiert nur den Verweis.
  ---
  `start` und `feld` sind zwei Namen für dasselbe Array. Der Zug schreibt in dieses Array.
  ---
  `start[1]` ist darum `# @ #`. Für einen echten Neustart braucht man eine **tiefe Kopie**: neue Zeilen-Arrays mit kopierten Zeichen.
```

````aufgabe
id: pj-mix-code-kopiere
titel: Eine tiefe Kopie für den Neustart
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: nach der Taste r (Level zurücksetzen) in Aufgabenblatt 6, WS 2023 (eigene Aufgabe)
angabe: |
  Implementiere `char[][] kopiere(char[][] feld)`. Die Methode liefert eine **tiefe Kopie**: ein neues äußeres Array
  und für jede Zeile ein neues `char`-Array mit denselben Zeichen und derselben Länge. Danach darf keine Änderung der
  Kopie das Original verändern und umgekehrt. Wie im Programmiertest sind `clone()`, `System.arraycopy` und
  `Arrays.copyOf` verboten. Vorbedingung: Keine Zeile ist `null`.
teile:
  - typ: code
    vorlage: |
      public class Kopie {
          public static char[][] kopiere(char[][] feld) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Kopie {
          public static char[][] kopiere(char[][] feld) {
              char[][] neu = new char[feld.length][];
              for (int y = 0; y < feld.length; y++) {
                  neu[y] = new char[feld[y].length];
                  for (int x = 0; x < feld[y].length; x++) {
                      neu[y][x] = feld[y][x];
                  }
              }
              return neu;
          }
      }
    tests:
      - { aufruf: 'kopiere(new char[][]{"###".toCharArray(), "#@ #".toCharArray()})', erwartet: 'new char[][]{"###".toCharArray(), "#@ #".toCharArray()}', beschreibung: "gleiche Zeichen, ausgefranst" }
      - { vorher: 'char[][] a = {"#@#".toCharArray()};', aufruf: "kopiere(a) == a", erwartet: "false", beschreibung: "neues äußeres Array" }
      - { vorher: 'char[][] a = {"#@#".toCharArray(), "# #".toCharArray()};', aufruf: "kopiere(a)[1] == a[1]", erwartet: "false", beschreibung: "neue Zeilen-Arrays" }
      - { vorher: 'char[][] a = {"#@ #".toCharArray()}; char[][] k = kopiere(a);', aufruf: "k[0][1] = ' '", ergebnis: "a", erwartet: 'new char[][]{"#@ #".toCharArray()}', beschreibung: "Änderung der Kopie lässt das Original gleich" }
      - { aufruf: 'kopiere(new char[][]{})', erwartet: "new char[][]{}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "`return feld;` liefert keine Kopie, sondern denselben Verweis. Lege mit `new char[feld.length][]` ein neues äußeres Array an." }
      - { wert: 3, meldung: "Das ist eine **flache** Kopie: Das äußere Array ist neu, die Zeilen sind aber dieselben. Lege für jede Zeile mit `new char[feld[y].length]` ein neues Array an und kopiere die Zeichen einzeln." }
      - { wert: "keineArrayKopie", meldung: "`clone()`, `System.arraycopy` und `Arrays.copyOf` sind hier verboten, wie im Programmiertest. Kopiere mit zwei Schleifen." }
hinweise:
  - Ein neues äußeres Array allein reicht nicht. Seine Plätze würden auf dieselben Zeilen zeigen wie das Original.
  - Für jede Zeile `y` ein neues Array `new char[feld[y].length]` anlegen und Zeichen für Zeichen kopieren.
loesung: |
  **Ansatz:** Ein zweidimensionales Array ist ein Array von Verweisen auf Zeilen. Eine tiefe Kopie braucht darum neue Arrays auf **beiden** Ebenen, wie in [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1).
  ---
  ```java
  char[][] neu = new char[feld.length][];
  for (int y = 0; y < feld.length; y++) {
      neu[y] = new char[feld[y].length];
      for (int x = 0; x < feld[y].length; x++) {
          neu[y][x] = feld[y][x];
      }
  }
  return neu;
  ```
  ---
  Die Zeilenlänge wird je Zeile übernommen. So bleibt ein ausgefranstes Feld ausgefranst.
  ---
  Probe mit dem vierten Test: `k[0][1] = ' '` ändert nur das neue Zeilen-Array. `a[0]` lautet weiterhin `#@ #`.
````

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Aufgabenblatt 6, Quiz und Feedbackgespräch. Zwei Aufgaben verlangen Methoden in
der Art von Aufgabenblatt 6, eine davon als **Variationsauftrag**, wie er im Feedbackgespräch vorkommt („Ändern Sie Ihr
Programm so, dass …“). Zwei Aufgaben sind im Format des Quiz auf TUWEL gestellt, der Lernplattform der TU Wien. Eine verlangt Fehlersuche in fremdem
Code, eine weitere mündliche Erklärungen. Plane die angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen
aufdeckst. Das Format 2026W ist nicht veröffentlicht. Die Aufgaben folgen den Blättern und Quiz der Jahre 2021 bis 2023.

````aufgabe
id: pj-pruef-positionen
titel: Alle Positionen eines Zeichens
niveau: 3
punkte: 3
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 6, WS 2023, Methode boxPositions (abgewandelt, ohne Anzahl-Parameter)
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int[][] positionen(char[][] feld, char c)`. Die Methode liefert die
  Positionen **aller** Vorkommen von `c` in Lesereihenfolge. Jede Zeile des Ergebnisses ist eine Position `{x, y}`.
  Anders als in Aufgabenblatt 6 bekommt die Methode die Anzahl **nicht** übergeben. Das Ergebnis hat genau so viele Zeilen,
  wie `c` vorkommt, also 0 Zeilen, wenn `c` fehlt. Vorbedingung: Keine Zeile von `feld` ist `null`.

  Beispiel: Für `{"#$ $".toCharArray(), "$#".toCharArray()}` und `'$'` liefert die Methode `{{1, 0}, {3, 0}, {0, 1}}`.
teile:
  - typ: code
    vorlage: |
      public class Positionen {
          public static int[][] positionen(char[][] feld, char c) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Positionen {
          public static int[][] positionen(char[][] feld, char c) {
              int anzahl = 0;
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == c) {
                          anzahl++;
                      }
                  }
              }
              int[][] ergebnis = new int[anzahl][];
              int k = 0;
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == c) {
                          ergebnis[k] = new int[]{x, y};
                          k++;
                      }
                  }
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "positionen(new char[][]{\"#$ $\".toCharArray(), \"$#\".toCharArray()}, '$')", erwartet: "new int[][]{{1, 0}, {3, 0}, {0, 1}}" }
      - { aufruf: "positionen(new char[][]{\"#@#\".toCharArray()}, '@')", erwartet: "new int[][]{{1, 0}}", beschreibung: "ein Vorkommen" }
      - { aufruf: "positionen(new char[][]{\"###\".toCharArray(), \"# #\".toCharArray()}, '$')", erwartet: "new int[0][]", beschreibung: "kein Vorkommen: leeres Ergebnis" }
      - { aufruf: "positionen(new char[][]{\"..\".toCharArray(), \"\".toCharArray(), \"# . .\".toCharArray()}, '.')", erwartet: "new int[][]{{0, 0}, {1, 0}, {2, 2}, {4, 2}}", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Kommt `c` nicht vor, muss das Ergebnis ein Array mit 0 Zeilen sein, nicht `null`. Zähle zuerst und lege dann `new int[anzahl][]` an." }
      - { wert: 1, meldung: "Positionen sind `{x, y}` und werden in Lesereihenfolge gespeichert: Zeile für Zeile, in jeder Zeile von links nach rechts." }
hinweise:
  - Weil die Anzahl unbekannt ist, brauchst du zwei Durchläufe. Der erste zählt, der zweite füllt.
  - 'Im zweiten Durchlauf hilft ein Schreibindex `k`: `ergebnis[k] = new int[]{x, y}; k++;`.'
loesung: |
  **Ansatz:** Zwei Durchläufe wie bei `zieleHerausloesen` in [16.5 Zielpunkte, Sieg und Sackgassen](/lernen/ep1/projekt/zielpunkte-sieg-und-sackgassen). Der erste bestimmt die Größe des Ergebnisses, der zweite füllt es mit Schreibindex.
  ---
  ```java
  int anzahl = 0;
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < feld[y].length; x++) {
          if (feld[y][x] == c) {
              anzahl++;
          }
      }
  }
  ```
  ---
  ```java
  int[][] ergebnis = new int[anzahl][];
  int k = 0;
  for (int y = 0; y < feld.length; y++) {
      for (int x = 0; x < feld[y].length; x++) {
          if (feld[y][x] == c) {
              ergebnis[k] = new int[]{x, y};
              k++;
          }
      }
  }
  return ergebnis;
  ```
  ---
  Probe mit dem Beispiel: drei Treffer, also drei Zeilen. Sie lauten `{1, 0}`, `{3, 0}` und `{0, 1}`.
````

```aufgabe
id: pj-pruef-quiz-rf
titel: Vier Aussagen zu einer Methode auf char[][]
niveau: 3
punkte: 2
lernziel: 0
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen zu einer 2D-Methode, Teilpunkte), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist

  ```java
  public static int breite(char[][] feld) {
      int max = 0;
      for (int y = 0; y < feld.length; y++) {
          if (feld[y].length > max) {
              max = feld[y].length;
          }
      }
      return max;
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`breite(new char[][]{})` liefert 0.'
        richtig: true
        erklaerung: Ohne Zeilen läuft die Schleife nicht, `max` bleibt 0.
      - text: '`breite(new char[][]{{''#''}, null})` wirft eine `NullPointerException`.'
        richtig: true
        erklaerung: 'Bei `y = 1` ist `feld[1]` gleich `null`. `null.length` wirft eine `NullPointerException`.'
      - text: '`breite(new char[3][])` liefert 0.'
        richtig: false
        erklaerung: '`new char[3][]` legt drei Zeilen an, die alle `null` sind. Schon `feld[0].length` wirft eine `NullPointerException`.'
      - text: '`breite(new char[2][5])` liefert 5.'
        richtig: true
        erklaerung: Beide Zeilen werden mit Länge 5 angelegt, also ist die größte Länge 5.
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Bei `new char[3][]` bleibt die zweite Klammer leer. Dann werden die Zeilen nicht angelegt und sind `null`.'
      - wert: [r, f, f, r]
        meldung: '`feld[1]` ist `null`. Der Zugriff `feld[1].length` auf `null` wirft eine Exception.'
hinweise:
  - Was steht in den Zeilen von `new char[3][]`, und was in denen von `new char[2][5]`?
  - Auf `null` darf man weder `.length` noch einen Index anwenden.
loesung: |
  **Ansatz:** Für jeden Aufruf klären, welche Zeilen es gibt und ob eine davon `null` ist.
  ---
  Aussage 1: keine Zeile, Ergebnis 0, richtig. Aussage 2: Zeile 1 ist `null`, Exception, richtig.
  ---
  Aussage 3: drei `null`-Zeilen, Exception bei der ersten, also falsch. Aussage 4: zwei Zeilen der Länge 5, Ergebnis 5, richtig.
```

```aufgabe
id: pj-pruef-pins-quiz
titel: Drei Rateversuche auswerten
niveau: 3
punkte: 3
lernziel: 6
kompetenz: anwenden
quelle: nach Aufgabenblatt 6, WS 2021 (Mastermind, eigene Codes), im Quizformat
angabe: |
  (Zeitrichtwert: 6 Minuten, je Teil 1 Punkt) Der geheime Code ist `{4, 1, 5, 2}`, alle Farben sind verschieden. Wie
  viele rote und weiße Pins bekommt jeder Versuch?

  **a)** `{1, 4, 5, 3}` **b)** `{4, 1, 2, 5}` **c)** `{6, 3, 7, 8}`
teile:
  - typ: auswahl
    label: a)
    optionen: ['1 rot, 2 weiß', '3 rot, 0 weiß', '1 rot, 3 weiß']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rot gibt es nur an der richtigen Stelle. Nur die 5 an Stelle 2 steht richtig.
      - wert: 2
        meldung: Die 5 ist rot und zählt nicht zusätzlich als weiß. Die 3 kommt im Code nicht vor.
  - typ: auswahl
    label: b)
    optionen: ['2 rot, 2 weiß', '4 rot, 0 weiß', '2 rot, 4 weiß']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: An den Stellen 2 und 3 sind die Farben vertauscht. Sie kommen im Code vor, aber an der jeweils anderen Stelle.
      - wert: 2
        meldung: Jede Farbe des Versuchs bekommt höchstens einen Pin. Zusammen sind es höchstens 4.
  - typ: auswahl
    label: c)
    optionen: ['0 rot, 0 weiß', '0 rot, 4 weiß', '1 rot, 0 weiß']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Weiß bekommt nur eine Farbe, die im Code vorkommt. Keine der Farben 6, 3, 7 und 8 steht im Code.
      - wert: 2
        meldung: Keine Stelle stimmt. Der Code hat an Stelle 0 die 4, der Versuch die 6.
hinweise:
  - Erst Stelle für Stelle vergleichen, dann die übrigen Farben im ganzen Code suchen.
  - Jede Farbe des Versuchs bekommt höchstens einen Pin, und rot hat Vorrang.
loesung: |
  **Ansatz:** Für jeden Versuch zuerst rot zählen, dann weiß für die übrigen Farben.
  ---
  a) Rot: nur die 5 an Stelle 2. Weiß: 1 und 4 kommen vor, 3 nicht. Also 1 rot, 2 weiß.
  ---
  b) Rot: 4 und 1 an den Stellen 0 und 1. Weiß: 2 und 5 kommen vor, aber vertauscht. Also 2 rot, 2 weiß.
  ---
  c) Keine Farbe kommt im Code vor. 0 rot, 0 weiß.
```

````aufgabe
id: pj-pruef-ziehe
titel: Variationsauftrag Kisten ziehen
niveau: 3
punkte: 4
lernziel: 7
kompetenz: anwenden
quelle: Variationsauftrag im Stil des Feedbackgesprächs zu Aufgabenblatt 6, WS 2023 (eigene Aufgabe)
angabe: |
  (Zeitrichtwert: 20 Minuten) Die Tutorin sagt: „Ändern Sie das Spiel so, dass die Figur Kisten **ziehen** statt
  schieben kann.“ Implementiere `boolean ziehe(char[][] feld, int richtung)` nach diesen Regeln:

  - Die Figur geht nur, wenn das Feld `vor` in `richtung` frei ist (`' '`). Sonst passiert nichts, Rückgabe `false`.
  - Geht die Figur, und liegt **hinter** ihr, also auf ihrer alten Position gegenüber von `richtung`, eine Kiste, dann
    rutscht diese Kiste auf das alte Feld der Figur. Sonst wird das alte Feld frei. Rückgabe `true`.

  Die Gegenrichtung von 1 ist 2 und umgekehrt, die von 3 ist 4 und umgekehrt. `findeFigur` und `nachbar` sind
  vorgegeben. Vorbedingung: Das Level ist von Wänden umschlossen, `richtung` liegt zwischen 1 und 4.

  Beispiel: Aus der Zeile `#$@ #` wird bei Richtung 4 die Zeile `# $@#`.
teile:
  - typ: code
    vorlage: |
      public class Ziehen {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean ziehe(char[][] feld, int richtung) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Ziehen {
          public static int[] findeFigur(char[][] feld) {
              for (int y = 0; y < feld.length; y++) {
                  for (int x = 0; x < feld[y].length; x++) {
                      if (feld[y][x] == '@') {
                          return new int[]{x, y};
                      }
                  }
              }
              return null;
          }

          public static int[] nachbar(int x, int y, int richtung) {
              switch (richtung) {
                  case 1: return new int[]{x, y - 1};
                  case 2: return new int[]{x, y + 1};
                  case 3: return new int[]{x - 1, y};
                  case 4: return new int[]{x + 1, y};
                  default: return new int[]{x, y};
              }
          }

          public static boolean ziehe(char[][] feld, int richtung) {
              int[] pos = findeFigur(feld);
              int[] vor = nachbar(pos[0], pos[1], richtung);
              if (feld[vor[1]][vor[0]] != ' ') {
                  return false;
              }
              int gegen;
              if (richtung == 1) {
                  gegen = 2;
              } else if (richtung == 2) {
                  gegen = 1;
              } else if (richtung == 3) {
                  gegen = 4;
              } else {
                  gegen = 3;
              }
              int[] hinten = nachbar(pos[0], pos[1], gegen);
              feld[vor[1]][vor[0]] = '@';
              if (feld[hinten[1]][hinten[0]] == '$') {
                  feld[pos[1]][pos[0]] = '$';
                  feld[hinten[1]][hinten[0]] = ' ';
              } else {
                  feld[pos[1]][pos[0]] = ' ';
              }
              return true;
          }
      }
    tests:
      - { vorher: 'char[][] f = {"#####".toCharArray(), "#$@ #".toCharArray(), "#####".toCharArray()};', aufruf: "ziehe(f, 4)", ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "# $@#".toCharArray(), "#####".toCharArray()}', beschreibung: "Kiste nach rechts ziehen" }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "# @ #".toCharArray(), "#####".toCharArray()};', aufruf: "ziehe(f, 3)", ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "#@  #".toCharArray(), "#####".toCharArray()}', beschreibung: "gehen ohne Kiste" }
      - { vorher: 'char[][] f = {"####".toCharArray(), "#$@#".toCharArray(), "####".toCharArray()};', aufruf: "ziehe(f, 4)", erwartet: "false", beschreibung: "Wand vor der Figur" }
      - { vorher: 'char[][] f = {"#####".toCharArray(), "# @$#".toCharArray(), "#####".toCharArray()};', aufruf: "ziehe(f, 4)", ergebnis: "f", erwartet: 'new char[][]{"#####".toCharArray(), "# @$#".toCharArray(), "#####".toCharArray()}', beschreibung: "Kiste vor der Figur: nicht schieben" }
      - { vorher: 'char[][] f = {"###".toCharArray(), "# #".toCharArray(), "#@#".toCharArray(), "#$#".toCharArray(), "###".toCharArray()};', aufruf: "ziehe(f, 1)", ergebnis: "f", erwartet: 'new char[][]{"###".toCharArray(), "#@#".toCharArray(), "#$#".toCharArray(), "# #".toCharArray(), "###".toCharArray()}', beschreibung: "Kiste nach oben ziehen" }
      - { vorher: 'char[][] f = {"######".toCharArray(), "#  @$#".toCharArray(), "######".toCharArray()};', aufruf: "ziehe(f, 3)", ergebnis: "f", erwartet: 'new char[][]{"######".toCharArray(), "# @$ #".toCharArray(), "######".toCharArray()}', versteckt: true }
    fehler:
      - { wert: 1, meldung: "Die Kiste liegt **hinter** der Figur, also in der Gegenrichtung. Nach dem Schritt muss sie auf das alte Feld der Figur rutschen, und ihr eigenes Feld wird frei." }
      - { wert: 4, meldung: "Beim Ziehen darf die Figur nicht schieben. Ist `vor` nicht frei, auch wenn dort eine Kiste liegt, passiert nichts." }
      - { wert: 5, meldung: "Die Gegenrichtung von oben (1) ist unten (2). Die Kiste liegt unter der Figur, bei `y + 1`." }
hinweise:
  - Drei Felder in einer Reihe, aber diesmal hinter der Figur. `vor` liegt in `richtung`, `hinten` in der Gegenrichtung.
  - 'Erst prüfen, ob `vor` frei ist. Dann die Gegenrichtung bestimmen. Dann schreiben: `@` auf `vor`, und das alte Feld wird je nach `hinten` zur Kiste oder frei.'
loesung: |
  **Ansatz:** Das Ziehen ist das Spiegelbild des Schiebens. Statt auf `hinter` vor der Kiste schauen wir auf das Feld hinter der Figur. Wie beim Schieben wird erst geprüft, dann geschrieben.
  ---
  Prüfen und Gegenrichtung bestimmen:
  ```java
  int[] pos = findeFigur(feld);
  int[] vor = nachbar(pos[0], pos[1], richtung);
  if (feld[vor[1]][vor[0]] != ' ') {
      return false;
  }
  int gegen;
  if (richtung == 1) {
      gegen = 2;
  } else if (richtung == 2) {
      gegen = 1;
  } else if (richtung == 3) {
      gegen = 4;
  } else {
      gegen = 3;
  }
  int[] hinten = nachbar(pos[0], pos[1], gegen);
  ```
  ---
  Schreiben:
  ```java
  feld[vor[1]][vor[0]] = '@';
  if (feld[hinten[1]][hinten[0]] == '$') {
      feld[pos[1]][pos[0]] = '$';
      feld[hinten[1]][hinten[0]] = ' ';
  } else {
      feld[pos[1]][pos[0]] = ' ';
  }
  return true;
  ```
  ---
  Probe mit `#$@ #` und Richtung 4: `vor` ist `x = 3` und frei. `hinten` ist `x = 1` mit einer Kiste. Ergebnis `# $@#`: Die Figur steht auf 3, die Kiste auf 2, das Feld 1 ist frei.
  ---
  Im Gespräch kannst du dazusagen: Die Prüfung von `vor` ist dieselbe wie bei `geheSchritt`. Neu ist nur der Blick nach hinten. So zeigst du, dass du deinen Code wiederverwendest.
````

```aufgabe
id: pj-pruef-fehler-gewonnen
titel: Zwei Fehler in einer erzeugten Siegprüfung
niveau: 3
punkte: 2
lernziel: 7
kompetenz: anwenden
quelle: nach Aufgabenblatt 3, WS 2023 (fehlerhaften KI-Code reparieren), auf die Siegprüfung übertragen
angabe: |
  (Zeitrichtwert: 6 Minuten) Ein KI-Werkzeug hat diese Siegprüfung erzeugt. Sie zählt die Ziele mit Kiste und
  vergleicht am Ende mit der Zahl der Ziele. Die Idee ist richtig, aber zwei Zeilen sind falsch. Markiere sie.
teile:
  - typ: zeilen
    code: |
      public static boolean gewonnen(char[][] feld, int[][] ziele) {
          int treffer = 0;
          for (int i = 0; i <= ziele.length; i++) {
              int x = ziele[i][0];
              int y = ziele[i][1];
              if (feld[x][y] == '$') {
                  treffer++;
              }
          }
          return treffer == ziele.length;
      }
    loesung: [3, 6]
    fehler:
      - wert: [3]
        meldung: Zeile 3 ist ein Fehler. Prüfe noch den Zugriff auf das Spielfeld gegen die Regel „Zeile zuerst“.
      - wert: [6]
        meldung: Zeile 6 ist ein Fehler. Prüfe noch die Schleifengrenze. Welchen Index hat das letzte Ziel?
      - wert: [6, 10]
        meldung: 'Zeile 10 ist richtig: Gewonnen ist, wenn jedes Ziel eine Kiste trägt, also `treffer == ziele.length`. Der zweite Fehler steckt in der Schleife.'
hinweise:
  - Spiel die Methode mit zwei Zielen im Kopf durch. Welche Werte nimmt `i` an?
  - Positionen sind `{x, y}`, der Zugriff lautet `feld[y][x]`.
loesung: |
  **Ansatz:** Jede Zeile gegen die Regeln für Schleifengrenzen und den Zugriff `feld[y][x]` prüfen. Die Idee „zählen und vergleichen“ ist richtig.
  ---
  Zeile 3: `i <= ziele.length` greift im letzten Durchlauf auf `ziele[ziele.length]` zu. Das wirft eine `ArrayIndexOutOfBoundsException`. Richtig ist `i < ziele.length`.
  ---
  Zeile 6: `feld[x][y]` vertauscht Zeile und Spalte. Richtig ist `feld[y][x]`.
```

```aufgabe
id: pj-pruef-feedback
titel: Drei Fragen im Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 7
kompetenz: begruenden
quelle: nach den Zusatzfragen und Variationsaufträgen der Aufgabenblätter (eigene Fragen zu Blatt 6)
angabe: |
  (Zeitrichtwert: 8 Minuten, je Frage 1 Punkt) Beantworte jede Frage in zwei bis vier Sätzen, so wie du sie im
  Gespräch sagen würdest.

  **a)** „Warum liefert Ihre Methode für die Position der Figur ein `int`-Array und nicht zwei Zahlen?“

  **b)** „Was müssten Sie in `move` ändern, damit die Figur **zwei** Kisten hintereinander schieben kann?“ (`move` heißt der Zug in Aufgabenblatt 6, in diesem Kapitel `bewege`.)

  **c)** „Was würde passieren, wenn ein Level eine Lücke in der Außenwand hätte?“
teile:
  - typ: text
    label: a)
    muster: |
      Eine Java-Methode kann nur einen einzigen Wert zurückgeben. Eine Position besteht aber aus x und y. Darum packe
      ich beide in ein kleines Array `new int[]{x, y}` und gebe dieses eine Array zurück. Der Aufrufer liest dann
      `pos[0]` als Spalte und `pos[1]` als Zeile.
  - typ: text
    label: b)
    muster: |
      Bisher prüfe ich nur das Feld `hinter` direkt nach der Kiste. Für zwei Kisten müsste ich, wenn auf `hinter` eine
      zweite Kiste liegt, noch ein Feld weiter schauen. Nur wenn dieses dritte Feld frei ist, schreibe ich eine Kiste
      dorthin, die Figur auf `vor`, und das alte Feld wird frei. Die mittlere Kiste bleibt einfach eine Kiste. Wichtig
      bleibt die Reihenfolge: erst alles prüfen, dann schreiben.
  - typ: text
    label: c)
    muster: |
      Meine Methoden verlassen sich auf die Vorbedingung, dass jedes Level von Wänden umschlossen ist. Mit einer Lücke
      könnte die Figur auf ein Randfeld gehen. Beim nächsten Schritt nach außen würde `nachbar` eine Position außerhalb
      des Arrays liefern, und der Zugriff würfe eine `ArrayIndexOutOfBoundsException`. Ich müsste dann vor jedem
      Zugriff prüfen, ob die Position im Feld liegt.
hinweise:
  - Bei a) geht es um eine Grenze von `return`. Bei b) um ein drittes Feld in der Reihe.
  - Bei c) hilft die Vorbedingung von Aufgabenblatt 6, die erklärt, warum `nachbar` keine Grenzen prüft.
loesung: |
  **Ansatz:** Jede Antwort nennt die Ursache im Code und eine konkrete Folge oder Änderung.
  ---
  a) Eine Methode hat nur einen Rückgabewert. Zwei Zahlen passen in ein Array mit zwei Plätzen, `{x, y}`.
  ---
  b) Ein drittes Feld in derselben Richtung prüfen. Nur wenn es frei ist, rutschen beide Kisten. Geschrieben wird erst, wenn alle Prüfungen bestanden sind.
  ---
  c) Ohne geschlossene Wand kann die Figur an den Rand gelangen. Dann liegt ein Nachbarfeld außerhalb des Arrays, und es kommt zu einer Exception. Abhilfe ist eine Grenzprüfung wie in `freieSchritte` aus [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder).
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Zusammenfassungskasten, der auf diese Frage folgt.
antwort: |
  Eine mögliche Auswahl: (1) Ein Spielfeld ist ein `char[][]`. Der Zugriff lautet `feld[y][x]` mit der Zeile zuerst,
  eine Position dagegen wird als `{x, y}` gespeichert, und Zeilen können verschieden lang sein. (2) Ein Spiel besteht
  aus kleinen Methoden mit wenigen Mustern: zählen, finden mit sofortigem `return`, sammeln mit Schreibindex,
  Nachbarfeld berechnen. (3) Ein Zug prüft zuerst alle Fälle, die zu `false` führen, und verändert erst danach das
  Spielfeld. Ebenso gut sind die getrennte Zielliste oder die Regel „ein Pin pro Farbe, rot hat Vorrang“ bei Mastermind.
```

:::zusammenfassung
1. **Spielfeld:** Ein Level wird aus einem Text mit Zeilenumbrüchen `'\n'` in ein `char[][]` umgewandelt. `feld[y]` ist die Zeile `y`, `feld[y][x]` das Zeichen an der Stelle `x`. `y` wächst nach unten. Zeilen dürfen verschieden lang sein, darum läuft die innere Schleife immer bis `feld[y].length`.
2. **Positionen:** Eine Position ist ein Array `{x, y}` mit der Spalte zuerst. Der Zugriff auf das Feld dazu ist `feld[pos[1]][pos[0]]`. Mehrere Positionen bilden ein `int[][]`, das mit einem Schreibindex gefüllt wird.
3. **Suchmuster:** Zählen (Zähler, `return` nach den Schleifen), Finden (sofort `return` beim ersten Treffer, `return null` am Ende) und Sammeln (zuerst zählen, dann Ergebnis-Array füllen). „Alle erfüllen“ prüft man, indem man ein Gegenbeispiel sucht.
4. **Richtungen:** 1 oben, 2 unten, 3 links, 4 rechts. Oben heißt `y - 1`, rechts heißt `x + 1`. Das Feld hinter einer Kiste ist das Nachbarfeld des Nachbarfelds in derselben Richtung.
5. **Ein Zug:** Ist `vor` eine Wand, passiert nichts. Ist `vor` frei, geht die Figur. Ist `vor` eine Kiste, wird nur geschoben, wenn `hinter` frei ist. Erst alles prüfen, dann schreiben, und nach jedem erfolgreichen Zug das alte Feld leeren. Der Rückgabewert sagt, ob sich etwas bewegt hat.
6. **Ziele und Sieg:** Ziele werden beim Laden in eine eigene Liste geschrieben und im Feld durch Leerzeichen ersetzt. Gewonnen ist, wenn auf jedem Ziel eine Kiste liegt. Eine Kiste, die nicht auf einem Ziel liegt und in einer Ecke steckt, macht das Level unlösbar.
7. **Zeichnen:** Das Feld `(x, y)` liegt bei den Pixeln `(x · G, y · G)`. Die Ebenen werden nacheinander gezeichnet, Späteres deckt Früheres zu: zuerst das Spielfeld, dann die Ziele. Zeichnen verändert den Spielzustand nicht.
8. **Mastermind:** Rot zählt richtige Stellen, weiß richtige Farben an falscher Stelle. Jede Farbe bekommt höchstens einen Pin, rot hat Vorrang. Bei wiederholten Farben zählt man je Farbe und nimmt das Minimum. Verschiedene Zufallsfarben zieht man mit einer `while`-Schleife, bis jede Stelle gefüllt ist.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **`feld[x][y]` statt `feld[y][x]`.** Training: „Felder um die Figur ablesen“ und „Fehler in einer Ausgabemethode finden“ in [16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld).
2. **`feld[0].length` als Grenze für alle Zeilen** bei ausgefransten Feldern. Training: „Kisten je Zeile zählen“ in [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden) und „Einen Absturz beim Ausgeben deuten“ in [16.8 Gemischte Wiederholung](/lernen/ep1/projekt/gemischte-wiederholung).
3. **Position als `{y, x}` zurückgegeben.** Training: „Welche Position liefert die Suche?“ in [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden).
4. **Das letzte `return` nach den Suchschleifen vergessen**, der Compiler meldet `missing return statement`. Training: „Das n-te Vorkommen eines Zeichens“ in [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden).
5. **Oben mit `y + 1` gerechnet.** Training: „Nachbarfelder mit Zahlen“ und „Aus zwei Positionen die Richtung bestimmen“ in [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder).
6. **Grenzen erst nach dem Zugriff geprüft**, sodass `feld[ny][nx]` abstürzt. Training: „Wie weit ist der Weg frei?“ in [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder).
7. **Hinter der Kiste nur auf Wand geprüft**, sodass zwei Kisten verschmelzen. Training: „Zwei Fehler in einem Zug“ und „Der vollständige Zug mit Kisten“ in [16.4 Ein Spielzug: gehen und Kisten schieben](/lernen/ep1/projekt/ein-spielzug-gehen-und-kisten-schieben).
8. **Altes Feld der Figur nicht geleert**, sodass zwei Figuren entstehen. Training: „Der vollständige Zug mit Kisten“ in [16.4 Ein Spielzug: gehen und Kisten schieben](/lernen/ep1/projekt/ein-spielzug-gehen-und-kisten-schieben).
9. **Siegprüfung liefert zu früh `true`** oder sucht nach Punkten im Feld. Training: „Den Sieg für zwei Ziellisten prüfen“ in [16.5 Zielpunkte, Sieg und Sackgassen](/lernen/ep1/projekt/zielpunkte-sieg-und-sackgassen) und „Zwei Fehler in einer erzeugten Siegprüfung“ in [16.9 Prüfungsaufgaben](/lernen/ep1/projekt/pruefungsaufgaben).
10. **Ziele vor dem Spielfeld gezeichnet** oder Pixel mit vertauschten Koordinaten. Training: „Spielfeld und Ziele zeichnen“ in [16.6 Das Spielfeld zeichnen](/lernen/ep1/projekt/das-spielfeld-zeichnen).
11. **Rote Treffer zusätzlich als weiß gezählt.** Training: „Was gibt die fehlerhafte Fassung aus?“ und „Die Pins als Array speichern“ in [16.7 Mastermind: Hinweise berechnen](/lernen/ep1/projekt/mastermind-hinweise-berechnen).
12. **Wiederholte Farben mehrfach gezählt.** Training: „Hinweise bei wiederholten Farben“ in [16.7 Mastermind: Hinweise berechnen](/lernen/ep1/projekt/mastermind-hinweise-berechnen).
13. **Startzustand mit `start = feld` gemerkt** statt tief kopiert. Training: „Der Startzustand verändert sich mit“ und „Eine tiefe Kopie für den Neustart“ in [16.8 Gemischte Wiederholung](/lernen/ep1/projekt/gemischte-wiederholung).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Einen Level-Text in ein `char[][]` umwandeln und mit `feld[y][x]` arbeiten.
2. Zeichen zählen und Positionen als `{x, y}` finden und sammeln.
3. Nachbarfelder aus Position und Richtung berechnen.
4. Einen Sokoban-Zug mit Kisten implementieren.
5. Ziele getrennt speichern, den Sieg prüfen und Ecken erkennen.
6. Ein Spielfeld mit CodeDraw in der richtigen Reihenfolge zeichnen.
7. Mastermind-Hinweise berechnen und einen Code aus verschiedenen Zufallsfarben erzeugen.
8. Den eigenen Code erklären, Fehler finden und Varianten umsetzen.

## Mündliche Prüfung: Feedbackgespräch

Nach Aufgabenblatt 6 erklärst du im **Feedbackgespräch** deinen Code. Welche Fragen genau kommen, ist nicht
veröffentlicht. Naheliegend sind Fragen zu den Koordinaten, zu Sonderfällen beim Zug und Änderungswünsche („Wie wäre
es, wenn …?“). Die Karten sind Beispiele in diesem Stil, keine Originalfragen. Formuliere zuerst
laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: pj-karte-feld
  frage: Wie ist ein Sokoban-Level im Programm gespeichert, und wie greifst du auf ein Feld zu?
  antwort: |
    Das Level ist ein zweidimensionales `char`-Array, ein Array von Zeilen. `feld[y]` ist die Zeile mit Nummer `y`,
    gezählt von oben ab 0. `feld[y][x]` ist das Zeichen in dieser Zeile an der Stelle `x`, gezählt von links ab 0. Die
    Zeichen sind Leerzeichen für Boden, `#` für Wand, das Dollarzeichen für eine Kiste und `@` für die Figur. Die Zeilen dürfen
    verschieden lang sein.
  kernpunkte:
    - Array von Zeilen
    - Zugriff feld[y][x], Zeile zuerst
    - y wächst nach unten
- id: pj-karte-yx
  frage: Warum steht im Zugriff `y` vorne, in der Position aber `x`?
  antwort: |
    Der Zugriff folgt dem Aufbau des Arrays: Zuerst wähle ich mit `feld[y]` eine Zeile aus, erst darin eine Stelle `x`.
    Die Position `{x, y}` folgt der Gewohnheit aus Mathematik und Grafik, erst waagrecht, dann senkrecht. Beides ist
    eine Abmachung. Wichtig ist, beim Übergang richtig umzusetzen: Aus `pos` wird `feld[pos[1]][pos[0]]`.
  kernpunkte:
    - Array von Zeilen verlangt Zeile zuerst
    - Position nach Gewohnheit x zuerst
    - Übergang feld[pos[1]][pos[0]]
- id: pj-karte-ausgefranst
  frage: Was ist ein jagged (ausgefranstes) Array, und worauf musst du bei Schleifen achten?
  antwort: |
    Ein jagged Array ist ein zweidimensionales Array, dessen Zeilen verschieden lang sind. Das geht in Java, weil
    jede Zeile ein eigenes Array ist. Sokoban-Levels sind oft so, weil rechts der Wände nichts mehr steht. In der inneren
    Schleife muss die Grenze darum `feld[y].length` sein. Mit `feld[0].length` fehlen Zeichen oder das Programm wirft
    eine `ArrayIndexOutOfBoundsException`.
  kernpunkte:
    - Zeilen verschieden lang
    - jede Zeile eigenes Array
    - Grenze feld[y].length
- id: pj-karte-position
  frage: Warum liefert die Suche nach der Figur ein `int`-Array, und was liefert sie, wenn es keine Figur gibt?
  antwort: |
    Eine Methode hat nur einen Rückgabewert, eine Position braucht aber zwei Zahlen. Darum liefere ich `new int[]{x, y}`.
    Beim ersten Treffer beendet das `return` beide Schleifen auf einmal. Gibt es keine Figur, erreicht die Methode
    `return null;` nach den Schleifen. Der Compiler verlangt dieses `return`, auch wenn die Vorbedingung eine Figur
    garantiert.
  kernpunkte:
    - ein Rückgabewert, darum Array
    - return beendet beide Schleifen
    - return null am Ende für den Compiler
- id: pj-karte-sammeln
  frage: Wie sammelst du alle Kisten in einem Ergebnis-Array?
  antwort: |
    Ich lege ein `int[][]` mit so vielen Zeilen an, wie es Kisten gibt. Ist die Zahl nicht bekannt, zähle ich in einem
    ersten Durchlauf. Dann gehe ich das Feld noch einmal durch und speichere jede Kiste mit einem Schreibindex `k`:
    `ergebnis[k] = new int[]{x, y}; k++;`. Der Schreibindex wächst nur bei einem Treffer, die Schleifenvariablen bei
    jedem Feld.
  kernpunkte:
    - Größe vorher kennen oder zählen
    - Schreibindex k nur bei Treffer
    - Lesereihenfolge
- id: pj-karte-richtung
  frage: Wie berechnest du das Nachbarfeld, und warum ist oben `y - 1`?
  antwort: |
    Die Richtungscodes sind 1 oben, 2 unten, 3 links und 4 rechts. Bei oben und unten ändert sich nur `y`, bei links
    und rechts nur `x`, jeweils um 1. Die Zeilen werden von oben nach unten gezählt, wie im CodeDraw-Fenster. Die Zeile
    über der Figur hat darum eine kleinere Nummer. Ich prüfe jede Richtung einmal mit Zahlen, weil der Fehler `y + 1`
    sonst erst beim Spielen auffällt.
  kernpunkte:
    - je Richtung eine Koordinate um 1
    - Zeilen von oben gezählt
    - oben ist y minus 1
- id: pj-karte-zug
  frage: Erkläre die Fälle eines Sokoban-Zugs.
  antwort: |
    Ich berechne das Feld `vor` in der gedrückten Richtung. Ist es eine Wand, passiert nichts, und die Methode liefert
    `false`. Ist es frei, geht die Figur hin. Liegt dort eine Kiste, schaue ich auf das Feld dahinter. Nur wenn es
    frei ist, rutscht die Kiste dorthin und die Figur auf `vor`. Bei einer Wand oder einer zweiten Kiste passiert
    nichts. Nach jedem erfolgreichen Zug wird das alte Feld der Figur frei, und die Methode liefert `true`.
  kernpunkte:
    - Wand blockiert
    - frei heißt gehen
    - Kiste nur mit freiem Feld dahinter
    - altes Feld leeren, true liefern
- id: pj-karte-pruefen-schreiben
  frage: Warum prüft dein Zug alles, bevor er etwas ins Spielfeld schreibt?
  antwort: |
    Bei `false` soll das Spielfeld unverändert bleiben. Würde ich zuerst die Figur setzen und erst danach merken, dass
    die Kiste blockiert ist, wäre die Kiste schon überschrieben. Ich müsste die Änderung rückgängig machen. Wer erst
    prüft und dann schreibt, braucht nie etwas zurückzunehmen. Beim Schreiben setze ich außerdem die Kiste vor der
    Figur, damit `@` die Kiste nicht überschreibt, bevor sie verschoben ist.
  kernpunkte:
    - bei false nichts verändern
    - erst prüfen, dann schreiben
    - Kiste vor der Figur schreiben
- id: pj-karte-referenz
  frage: Warum muss `move` (in diesem Kapitel `bewege`) das Spielfeld nicht zurückgeben, und wozu dient der Rückgabewert `boolean`?
  antwort: |
    Ein Array wird als Verweis übergeben, wie in [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert). Die Methode schreibt also direkt in das Array des
    Aufrufers, und `main` sieht jede Änderung. Der Wahrheitswert sagt dem Aufrufer, ob sich die Figur wirklich bewegt
    hat. Nur dann wird der Schrittzähler erhöht. Bei einem Zug gegen eine Wand bleibt er gleich.
  kernpunkte:
    - Arrays als Verweis übergeben
    - Änderung sofort beim Aufrufer sichtbar
    - boolean für den Schrittzähler
- id: pj-karte-ziele
  frage: Warum speichert das Spiel die Zielpunkte getrennt vom Spielfeld?
  antwort: |
    In einem Feld kann nur ein Zeichen stehen. Betritt die Figur ein Ziel oder wird eine Kiste darauf geschoben, wird
    der Punkt überschrieben. Verlässt sie es wieder, schreibt der Zug ein Leerzeichen. Dann wäre das Ziel verloren. In
    einer eigenen Liste bleiben die Ziele das ganze Level erhalten. Das Spielfeld beschreibt, was sich ändert, die
    Zielliste, was gleich bleibt.
  kernpunkte:
    - ein Zeichen pro Feld
    - Punkt würde überschrieben
    - Zielliste bleibt unverändert
- id: pj-karte-sieg
  frage: Wie prüfst du, ob ein Level gelöst ist, und warum reicht es, die Ziele anzuschauen?
  antwort: |
    Ich gehe die Zielliste durch. Liegt auf einem Ziel keine Kiste, liefere ich sofort `false`. Erst nach allen Zielen
    liefere ich `true`. Es reicht, die Ziele zu prüfen, weil es genauso viele Kisten wie Ziele gibt. Trägt jedes Ziel
    eine Kiste, ist keine Kiste mehr übrig, die woanders liegen könnte.
  kernpunkte:
    - Gegenbeispiel suchen, sofort false
    - true erst nach allen Zielen
    - gleich viele Kisten wie Ziele
- id: pj-karte-ecke
  frage: Wann ist ein Level nicht mehr lösbar? Nenne ein Beispiel und eine Grenze deiner Prüfung.
  antwort: |
    Wenn eine Kiste, die nicht auf einem Ziel liegt, in einer Ecke steckt, also oben oder unten und zugleich links oder
    rechts eine Wand hat. Zum Schieben müsste die Figur auf der Wandseite stehen, das geht nicht. Meine Prüfung findet
    nur solche Ecken. Eine Kiste an einer langen Wand ohne Ziel erkennt sie nicht, denn dafür müsste man das ganze
    Level betrachten.
  kernpunkte:
    - Kiste in Ecke ohne Ziel
    - senkrechte und waagrechte Wand
    - nur sichere Fälle erkannt
- id: pj-karte-zeichnen
  frage: Wie zeichnest du das Spielfeld, und warum ist die Reihenfolge wichtig?
  antwort: |
    Jedes Feld `(x, y)` wird ein Quadrat der Seitenlänge `G` mit der linken oberen Ecke bei `(x · G, y · G)`. Die Farbe
    hängt vom Zeichen ab. Danach zeichne ich die Ziele als zweite Ebene: ein grünes Quadrat, wenn eine Kiste darauf
    liegt, sonst einen roten Kreis. Was später gezeichnet wird, liegt oben. Würde ich die Ziele zuerst zeichnen, wären
    sie unter den weißen Bodenquadraten verschwunden.
  kernpunkte:
    - Pixel x mal G und y mal G
    - Spielfeld zuerst, dann Ziele
    - Späteres deckt Früheres zu
- id: pj-karte-mastermind
  frage: Wie berechnest du die Hinweise in Mastermind, wenn alle Farben verschieden sind?
  antwort: |
    Für jede Stelle vergleiche ich die Farbe des Versuchs mit der Farbe des Codes an derselben Stelle. Stimmt sie, gibt
    es einen roten Pin. Stimmt sie nicht, suche ich die Farbe im ganzen Code. Finde ich sie, gibt es einen weißen Pin.
    Die Suche steht im `else`, damit eine rote Stelle nicht zusätzlich als weiß zählt. Jede Farbe bekommt höchstens
    einen Pin.
  kernpunkte:
    - rot an gleicher Stelle
    - weiß nur im else-Zweig
    - höchstens ein Pin je Farbe
- id: pj-karte-wiederholung
  frage: Warum braucht Mastermind mit wiederholten Farben ein anderes Verfahren?
  antwort: |
    Die einfache Suche findet eine Farbe des Codes immer wieder, auch wenn sie schon verwendet wurde. Bei Code
    `{1, 2, 3, 4}` und Versuch `{1, 1, 1, 1}` gäbe es dann drei weiße Pins, richtig sind null. Darum zähle ich je Farbe,
    wie oft sie im Code und im Versuch vorkommt, und nehme das Minimum. Die Summe ist die Zahl der gemeinsamen Farben.
    Ziehe ich die roten Pins ab, bleiben die weißen.
  kernpunkte:
    - einfache Suche zählt mehrfach
    - je Farbe Minimum der Anzahlen
    - gemeinsam minus rot ist weiß
- id: pj-karte-kopie
  frage: Wie merkst du dir den Startzustand für einen Neustart, und warum reicht `start = feld` nicht?
  antwort: |
    `start = feld` kopiert nur den Verweis, beide Namen zeigen auf dasselbe Array. Jeder Zug verändert dann auch
    `start`. Ich brauche eine tiefe Kopie: ein neues äußeres Array und für jede Zeile ein neues `char`-Array, in das ich
    die Zeichen einzeln kopiere. Eine flache Kopie mit neuem äußerem Array, aber alten Zeilen, reicht ebenfalls nicht,
    denn die Zeilen wären geteilt.
  kernpunkte:
    - Zuweisung kopiert nur den Verweis
    - tiefe Kopie auf beiden Ebenen
    - flache Kopie teilt die Zeilen
```
