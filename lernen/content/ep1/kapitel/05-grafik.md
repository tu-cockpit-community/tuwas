---
nummer: 5
titel: "Muster und Grafik: Konsole und CodeDraw"
kurz: Konsolenmuster mit Zeilentabellen planen (Dreieck, Pyramide, Trapez, Raute, Tannenbaum), Muster mit Positionsbedingungen, CodeDraw-Reihen und Raster aus Schleifen, Zeichnen nach Maßskizze, Kreismuster mit Gleitkomma und optische Täuschungen.
teil: grundlagen
stunden: 5
pruefungsgewicht: 1
voraussetzungen: [werkzeuge, ausdruecke, verzweigungen, schleifen]
lernziele:
  - die Konsolenausgabe eines Musters aus verschachtelten Schleifen Zeile für Zeile herleiten und die Anzahl der ausgegebenen Zeichen bestimmen
  - zu einem vorgegebenen Konsolenmuster eine Zeilentabelle aufstellen und daraus die Grenzen der inneren Schleifen als Formeln in Zeile und Größe ableiten
  - Trapez, Parallelogramm, Raute und Tannenbaum für eine beliebige zulässige Größe mit verschachtelten Schleifen exakt ausgeben
  - Muster mit Positionsbedingungen im Schleifenrumpf erzeugen (Rahmen, Diagonalen, Schachbrett, jede k-te Stelle) und die passende Bedingung auswählen
  - in CodeDraw die Koordinaten von Formen in Reihen und Rastern aus dem Schleifenindex, dem Rand und dem Abstand berechnen
  - ein Bild nach einer Maßskizze in CodeDraw-Aufrufe übersetzen und die Koordinaten aus Maßketten berechnen
  - Größen, Abstände und Farbverläufe so mit Gleitkomma- oder Ganzzahlarithmetik berechnen, dass ein Muster für jedes zulässige n das Fenster füllt, und ungültige Eingaben mit einer Bedingung abweisen
  - optische Täuschungen aus Raster, Rest-Bedingung mit `%` und Zeichenreihenfolge nachbauen und begründen, welche Form welche überdeckt
---

**Worum geht es?** In diesem Kapitel zeichnest du. Zuerst auf der Konsole: Mit `print` und verschachtelten
Schleifen entstehen Dreiecke, Pyramiden, Trapeze, Rauten und Tannenbäume aus Zeichen wie `#` und `*`. Danach im
CodeDraw-Fenster: Eine Schleife setzt zehn Quadrate in eine Reihe, zwei verschachtelte Schleifen füllen ein ganzes
Raster mit Kreisen. Am Ende baust du optische Täuschungen nach, bei denen gerade Linien schief wirken. Neue
Java-Befehle brauchst du dafür kaum. Neu ist die **Denkweise**: ein Bild in Zeilen, Spalten und Formeln zerlegen.

**Was kommt in der Prüfung?** Grafik ist kein eigener Prüfungsteil, sie steckt aber in mehreren:

- **Aufgabenblatt 1** (WS 2023 als Vorlage): Aufgabe 3 verlangt ein Trapez und ein Parallelogramm aus `#` in jeder Größe. Aufgabe 4 verlangt ein CodeDraw-Bild nach einer Skizze mit Maßangaben. Aufgabe 5 verlangt ein Kreismuster, das sich an eine ungerade Zahl `n` anpasst.
- **Aufgabenblatt 2**: In allen vorliegenden Blättern von 2021 bis 2023 ist Aufgabe 1 eine optische Täuschung (zum Beispiel nach Pinna oder Ouchi). In den Blättern von 2022 und 2023 ist Aufgabe 5 die freie **Designaufgabe** mit CodeDraw.
- **Quiz:** Eine Frage aus einem früheren TUWEL-Test lautet zum Beispiel: Durch welche Änderung gibt eine Schleife eine Zeile mehr aus?
- **Test am Rechner:** In den vorliegenden Programmiertests kommt CodeDraw nicht vor. Die Denkweise „Zeile `i`, Spalte `j`, Bedingung entscheidet“ ist aber genau die, die du für zweidimensionale Arrays brauchst ([Kapitel 14, Zwei- und mehrdimensionale Arrays](/lernen/ep1/arrays-2d)).
- **Feedbackgespräch** (das Gespräch mit einer Tutorin oder einem Tutor über deine Abgabe). Mögliche Fragen sind „Warum steht hier `h - 1 - i`?“ oder „Was passiert bei einer geraden Breite?“.

**So arbeitest du mit diesem Kapitel.** Halte Papier mit Karos bereit. Jedes Muster zeichnest du zuerst von Hand,
Kästchen für Kästchen. Dann schreibst du für jede Zeile auf, wie viele Leerzeichen und wie viele Zeichen sie hat.
Erst danach schreibst du Code. Diese Reihenfolge wirkt langsam. Sie ist aber der schnellste Weg zu einem Muster,
das beim ersten Start stimmt.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Ausgaben** aus [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println): `print` schreibt ohne Zeilenumbruch, `println` beendet die Zeile.
- **CodeDraw** aus [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild). Der Ursprung liegt links oben, und `y` wächst nach unten. Ein Rechteck gibt man über die linke obere Ecke an, einen Kreis über den Mittelpunkt. `setColor` steht vor der Form, `show()` am Ende.
- **Ganzzahldivision, Rest und Gleitkommazahlen** aus [Kapitel 2, Ausdrücke, Datentypen, Casts und Strings](/lernen/ep1/ausdruecke): `7 / 2` ist `3`, `7 % 2` ist `1`, `7 / 2.0` ist `3.5`.
- **Bedingungen** aus [Kapitel 3, Verzweigungen und Bedingungen](/lernen/ep1/verzweigungen): `if`, `else`, `&&` (und), `||` (oder).
- **for-Schleifen und verschachtelte Schleifen** aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen): Die innere Schleife läuft für jeden Durchlauf der äußeren komplett.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt. Code-Ausschnitte ohne Klasse stehen in der Methode `main`.
:::

```aufgabe
id: gr-ein-print
titel: print und println
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println))
teile:
  - typ: ausgabe
    code: |
      System.out.print("ab");
      System.out.print("c");
      System.out.println();
      System.out.println("d");
      System.out.print("e");
    loesung: |
      abc
      d
      e
    fehler:
      - wert: "ab\nc\n\nd\ne"
        meldung: '`print` beendet die Zeile **nicht**. `ab` und `c` stehen deshalb in derselben Zeile. Erst `println()` beginnt eine neue Zeile.'
loesung: |
  `print("ab")` und `print("c")` schreiben hintereinander in dieselbe Zeile: `abc`. Das leere `println()` beendet diese Zeile.
  ---
  `println("d")` schreibt `d` und beendet die Zeile. `print("e")` schreibt `e` in die nächste Zeile.
```

```aufgabe
id: gr-ein-durchlaeufe
titel: Durchläufe einer for-Schleife
niveau: 1
art: check
angabe: |
  Wie oft läuft der Rumpf von `for (int j = 0; j < 2 * 3 + 1; j++) { ... }`?
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "2 * 3 + 1"
    fehler:
      - wert: "8"
        meldung: Mit `<` gehört der Endwert 7 nicht dazu. `j` läuft 0, 1, …, 6, das sind 7 Werte.
      - wert: "9"
        meldung: Punkt vor Strich. `2 * 3 + 1` ist 7, nicht `2 * (3 + 1)`.
loesung: |
  Die Grenze ist `2 * 3 + 1 = 7`. Mit `j < 7` läuft `j` von 0 bis 6.
  ---
  Das sind 7 − 0 = 7 Durchläufe.
```

```aufgabe
id: gr-ein-verschachtelt
titel: Eine kleine Doppelschleife
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 3; i++) {
          for (int j = 0; j < i; j++) {
              System.out.print("#");
          }
          System.out.println();
      }
    loesung: |
      #
      ##
      ###
    fehler:
      - wert: "###\n###\n###"
        meldung: Die innere Grenze ist `j < i`, keine feste Zahl. Bei `i = 1` läuft die innere Schleife nur einmal.
      - wert: "######"
        meldung: Das `println()` steht in der äußeren Schleife. Nach jeder Zeile beginnt eine neue Zeile.
loesung: |
  Für `i = 1` läuft `j` nur mit dem Wert 0, also ein `#`. Dann folgt der Zeilenumbruch.
  ---
  Für `i = 2` sind es zwei, für `i = 3` drei Zeichen. Es entsteht ein Dreieck.
```

```aufgabe
id: gr-ein-rest
titel: Rest bei Division durch 2
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int i = 2;
      int j = 3;
      System.out.println((i + j) % 2);
      System.out.println((i + j + 1) % 2);
      System.out.println(9 / 2);
    loesung: |
      1
      0
      4
    fehler:
      - wert: "1\n0\n4.5"
        meldung: '`9 / 2` sind zwei `int`. Das ist Ganzzahldivision, der Nachkommaanteil fällt weg.'
      - wert: "0\n1\n4"
        meldung: '`2 + 3` ist 5, also ungerade. Der Rest bei Division durch 2 ist dann 1.'
loesung: |
  `(2 + 3) % 2` ist `5 % 2`, also Rest 1. `(2 + 3 + 1) % 2` ist `6 % 2`, also 0.
  ---
  `9 / 2` ist Ganzzahldivision: 4, der Rest 1 fällt weg.
```

```aufgabe
id: gr-ein-gleitkomma
titel: Ganzzahl oder Gleitkomma?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks))
teile:
  - typ: ausgabe
    code: |
      System.out.println(300 / 7);
      System.out.println(300.0 / 7);
    loesung: |
      42
      42.857142857142854
    fehler:
      - wert: "42.857142857142854\n42.857142857142854"
        meldung: '`300 / 7` sind zwei `int`. Das Ergebnis ist wieder ein `int`, also 42. Erst ein `double` wie `300.0` macht die Division genau.'
      - wert: "43\n42.857142857142854"
        meldung: Ganzzahldivision rundet nicht, sie schneidet ab. 42,857 wird zu 42.
loesung: |
  `300 / 7` ist `int / int`: 7 passt 42-mal in 300, der Rest fällt weg.
  ---
  `300.0 / 7` enthält einen `double`. Java rechnet mit Nachkommastellen und gibt 42.857142857142854 aus. Die letzte Stelle kommt von der begrenzten Genauigkeit von `double`.
```

```aufgabe
id: gr-ein-codedraw
titel: Wo liegt das Quadrat?
niveau: 1
art: check
angabe: |
  `cd.fillSquare(40, 60, 30);` Bei welchem x-Wert liegt der **rechte Rand** des Quadrats?
  (Wiederholung: [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild))
teile:
  - typ: zahl
    loesung: "40 + 30"
    fehler:
      - wert: "55"
        meldung: Bei `fillSquare` ist (x, y) die linke obere Ecke, nicht der Mittelpunkt. Der rechte Rand liegt eine ganze Seitenlänge rechts davon.
      - wert: "90"
        meldung: 60 ist der y-Wert. Für den rechten Rand zählen x und die Seitenlänge.
loesung: |
  Die Werte sind x = 40, y = 60 und Seitenlänge 30. (40, 60) ist die linke obere Ecke.
  ---
  Rechter Rand: 40 + 30 = 70.
```

## Konsolenmuster Zeile für Zeile planen

```aufgabe
id: gr-zeile-check
titel: Wie oft läuft die innere Schleife?
niveau: 1
art: check
angabe: |
  In einer verschachtelten Schleife steht innen `for (int j = 0; j < 2 * i + 1; j++)`. Wie oft läuft diese innere
  Schleife im Durchlauf mit `i = 3`? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: zahl
    loesung: "2 * 3 + 1"
    fehler:
      - wert: "3"
        meldung: Die Grenze ist nicht `i`, sondern `2 * i + 1`. Setze `i = 3` ein und rechne zuerst die Grenze aus.
      - wert: "8"
        meldung: Mit `<` gehört die Grenze selbst nicht dazu. `j` läuft von 0 bis 6.
loesung: |
  Für `i = 3` ist die Grenze `2 * 3 + 1 = 7`.
  ---
  `j` läuft 0, 1, …, 6. Das sind 7 Durchläufe.
```

Auf Aufgabenblatt 1 steht zum Beispiel diese Forderung: Gib für die Breite 7 ein Trapez aus `#` aus. Die Ausgabe
muss **zeichengenau** stimmen, also jedes Leerzeichen an der richtigen Stelle. Wer hier sofort Code tippt und dann
so lange an Zahlen dreht, bis das Bild passt, verliert viel Zeit. Es gibt einen besseren Weg.

Jedes Konsolenmuster besteht aus **Zeilen**. Jede Zeile besteht wiederum aus einigen Leerzeichen am Anfang und
danach einigen sichtbaren Zeichen. Wenn du für jede Zeile weißt, **wie viele** Leerzeichen und **wie viele** Zeichen
sie hat, ist der Code fast fertig. Die äußere Schleife zählt die Zeilen. Für jede Gruppe gleicher Zeichen in einer
Zeile gibt es eine eigene innere Schleife. Danach beendet `System.out.println()` die Zeile.

Um diese Anzahlen zu finden, legst du eine Tabelle an. Wir nennen sie **Zeilentabelle**. Damit du Leerzeichen in
der Tabelle sehen kannst, schreiben wir sie hier als Punkt `.`. In Java bleibt es natürlich ein Leerzeichen `" "`.

:::definition[Zeilentabelle]
Eine **Zeilentabelle** ist eine Tabelle mit einer Zeile je Musterzeile. Sie enthält:

- die **Zeilennummer** `i`, so wie sie die äußere Schleife zählt (meist ab 0).
- die **Anzahl der Leerzeichen** am Zeilenanfang.
- die **Anzahl der Zeichen** jeder weiteren Gruppe (zum Beispiel Sterne).

Aus den Spalten liest du **Formeln** in `i` und in der Größe `n` ab. Diese Formeln werden die Grenzen der inneren
Schleifen.
:::

**Beispiel:** Für ein rechtsbündiges Dreieck mit 4 Zeilen enthält die Zeilentabelle die Spalten `i`, Leerzeichen
und Sterne. Zeile 0 hat 3 Leerzeichen und 1 Stern, Zeile 3 hat 0 Leerzeichen und 4 Sterne.

**Nichtbeispiel:** Die Notiz „Zeile 2 sieht so aus: `.***`“ ist **keine** Zeilentabelle. Sie malt das Bild nur ab
und enthält keine Anzahlen. Aus abgemalten Zeilen kannst du keine Formel ablesen, also auch keine Schleifengrenze.

```aufgabe
id: gr-zeile-check-leer
titel: Leerzeichen in der ersten Zeile
niveau: 1
art: check
angabe: |
  Ein rechtsbündiges Dreieck hat 5 Zeilen. Die unterste Zeile besteht aus 5 Sternen ohne Leerzeichen, jede Zeile
  darüber hat einen Stern weniger. Wie viele Leerzeichen stehen am Anfang der **obersten** Zeile?
teile:
  - typ: zahl
    loesung: "5 - 1"
    fehler:
      - wert: "5"
        meldung: Die oberste Zeile hat einen Stern. Zusammen mit den Leerzeichen ist sie so breit wie die unterste, also 5 Zeichen.
      - wert: "0"
        meldung: Rechtsbündig heißt, dass alle Zeilen rechts an derselben Stelle enden. Kurze Zeilen werden links mit Leerzeichen aufgefüllt.
loesung: |
  Alle Zeilen enden rechts an derselben Stelle, die unterste ist 5 Zeichen breit.
  ---
  Die oberste Zeile hat 1 Stern, also davor 5 − 1 = 4 Leerzeichen.
```

:::beispiel[Ein rechtsbündiges Dreieck]
Gesucht ist dieses Muster mit `n = 4` Zeilen (Punkte stehen für Leerzeichen):

```text
...*
..**
.***
****
```

**Schritt 1: Zeilentabelle.**

|`i`|Leerzeichen|Sterne|
|---|---|---|
|0|3|1|
|1|2|2|
|2|1|3|
|3|0|4|

**Schritt 2: Formeln ablesen.** Die Leerzeichen nehmen von Zeile zu Zeile um 1 ab und beginnen bei 3. Das ist
`n - 1 - i`: Für `i = 0` ergibt das 3, für `i = 3` ergibt es 0. Die Sterne beginnen bei 1 und nehmen um 1 zu. Das ist
`i + 1`.

**Schritt 3: Code.**

```java
int n = 4;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
        System.out.print(" ");
    }
    for (int j = 0; j < i + 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

- Zeile 1 legt die Größe fest. Alles andere hängt von `n` ab. Für ein größeres Dreieck änderst du nur diese Zahl.
- Zeile 2 ist die äußere Schleife. Sie läuft für `i` = 0, 1, 2, 3, also einmal je Musterzeile.
- Zeilen 3 bis 5 geben `n - 1 - i` Leerzeichen aus. Weil die Variable `j` nur innerhalb ihrer Schleife existiert, darf die nächste Schleife wieder `j` heißen.
- Zeilen 6 bis 8 geben `i + 1` Sterne aus.
- Zeile 9 beendet die Musterzeile. Es steht nach beiden inneren Schleifen, aber noch in der äußeren.

**Probe:** Für `i = 3` gibt es `4 - 1 - 3 = 0` Leerzeichen und `3 + 1 = 4` Sterne. Das ist die letzte Zeile.
:::

Die Formel für eine Spalte findest du fast immer auf dieselbe Weise. Ändert sich die Anzahl von Zeile zu Zeile um
denselben Betrag `a`, dann lautet die Formel `a * i + b`. Dabei ist `b` der Wert in Zeile 0. Beim Dreieck ändern
sich die Leerzeichen um `a = -1` und beginnen bei `b = n - 1`. So entsteht `-1 * i + (n - 1)`, also `n - 1 - i`.

:::beispiel[Eine Pyramide]
Gesucht ist eine Pyramide mit `n = 4` Zeilen:

```text
...*
..***
.*****
*******
```

|`i`|Leerzeichen|Sterne|
|---|---|---|
|0|3|1|
|1|2|3|
|2|1|5|
|3|0|7|

- Die Leerzeichen sind dieselben wie beim Dreieck: `n - 1 - i`.
- Die Sterne beginnen bei 1 und wachsen **um 2** je Zeile, weil die Pyramide links und rechts je einen Stern dazubekommt. Also `a = 2`, `b = 1`, die Formel ist `2 * i + 1`.

```java
int n = 4;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
        System.out.print(" ");
    }
    for (int j = 0; j < 2 * i + 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

**Probe** mit der letzten Zeile `i = 3`: `4 - 1 - 3 = 0` Leerzeichen und `2 · 3 + 1 = 7` Sterne. Das stimmt.
Insgesamt gibt die Pyramide 1 + 3 + 5 + 7 = 16 Sterne aus. Das ist kein Zufall: Die Summe der ersten `n` ungeraden
Zahlen ist immer `n · n`.
:::

Rechts von den Sternen steht in der Pyramide **nichts**. Du musst dort keine Leerzeichen ausgeben. Die Zeile ist
einfach zu Ende.

:::merke[Rezept: vom Muster zum Code]
1. Muster für eine kleine Größe auf Karopapier zeichnen.
2. Zeilentabelle anlegen: Zeilennummer `i` ab 0, Leerzeichen am Anfang, Anzahl jeder Zeichengruppe.
3. Für jede Spalte die Änderung `a` von Zeile zu Zeile und den Startwert `b` bestimmen. Formel `a * i + b`, dabei die Größe `n` einsetzen.
4. Äußere Schleife über die Zeilen. Je Spalte der Tabelle eine innere Schleife mit der Formel als Grenze. Danach `println()`.
5. Probe mit der ersten und der letzten Zeile und mit der kleinsten erlaubten Größe.
:::

```aufgabe
id: gr-zeile-umgekehrt
titel: Ein Dreieck, das kleiner wird
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 4; i >= 1; i--) {
          for (int j = 0; j < i; j++) {
              System.out.print("*");
          }
          System.out.println();
      }
    loesung: |
      ****
      ***
      **
      *
    fehler:
      - wert: "*\n**\n***\n****"
        meldung: Die äußere Schleife zählt **abwärts** von 4 bis 1. Die erste Zeile gehört zu `i = 4`.
      - wert: "****\n****\n****\n****"
        meldung: Die innere Grenze ist `j < i`, keine feste Zahl. Mit kleinerem `i` wird jede Zeile kürzer.
hinweise:
  - Schreib für jedes `i` auf, wie oft die innere Schleife läuft. Sie läuft genau `i` Mal.
loesung: |
  **Ansatz:** Die äußere Schleife läuft mit `i` = 4, 3, 2, 1. Die innere gibt jeweils `i` Sterne aus.
  ---
  Zeilen: 4, 3, 2 und 1 Stern. Bei `i = 0` ist `i >= 1` falsch, die Schleife endet.
  ---
  Es entsteht ein linksbündiges Dreieck, das nach unten schmaler wird.
```

:::achtung[Die Formel nur aus einer Zeile geraten]
Jemand sieht, dass die Pyramide oben einen Stern hat, und schreibt für die Sterne `j < i + 1`:

```java
for (int j = 0; j < i + 1; j++) {
    System.out.print("*");
}
```

Die Ausgabe für `n = 4` ist dann kein Dreieck mit Spitze, sondern das rechtsbündige Dreieck:

```text
   *
  **
 ***
****
```

Zeile 0 stimmt zufällig: `0 + 1 = 1`. Aber Zeile 1 braucht 3 Sterne, nicht 2. Eine Formel aus **einer** Zeile ist
immer geraten. Prüfe sie an mindestens zwei Zeilen. Der Unterschied zwischen zwei Zeilen verrät dir das `a` in
`a * i + b`, hier also 2 statt 1.
:::

:::achtung[Unsichtbare Leerzeichen am Zeilenende]
Jemand will die Pyramide „symmetrisch“ machen und gibt nach den Sternen noch einmal `n - 1 - i` Leerzeichen aus:

```java
for (int j = 0; j < n - 1 - i; j++) {
    System.out.print(" ");
}
```

Auf dem Bildschirm sieht das Ergebnis genau gleich aus, denn Leerzeichen am Zeilenende sind unsichtbar. Die erste
Zeile ist aber jetzt `"   *   "` statt `"   *"`. Ein zeichengenauer Vergleich, wie ihn Testprogramme machen,
meldet einen Fehler. Gib rechts vom letzten sichtbaren Zeichen **nichts** aus. Ein guter Trick beim Testen: Ersetze
`" "` vorübergehend durch `"."`. Dann siehst du jedes Leerzeichen.
:::

```aufgabe
id: gr-zeile-punkte
titel: Ziffern hinter Punkten
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 3;
      for (int i = 1; i <= n; i++) {
          for (int j = 0; j < n - i; j++) {
              System.out.print(".");
          }
          for (int j = 0; j < i; j++) {
              System.out.print(i);
          }
          System.out.println();
      }
    loesung: |
      ..1
      .22
      333
    fehler:
      - wert: "..1\n.12\n123"
        meldung: Ausgegeben wird `i`, nicht `j`. In Zeile `i` steht deshalb `i` Mal dieselbe Ziffer `i`.
      - wert: "...1\n..22\n.333"
        meldung: 'Hier zählt `i` ab 1, nicht ab 0. Die Punkte sind deshalb `n - i`: 2, 1 und 0.'
hinweise:
  - 'Zeilentabelle: Für `i` = 1, 2, 3 jeweils `n - i` Punkte und `i` Ziffern.'
loesung: |
  **Ansatz:** Zeilentabelle mit `i`, Punkten (`n - i`) und Ziffern (`i`).
  ---
  `i = 1`: 2 Punkte, eine `1`. `i = 2`: 1 Punkt, zwei `2`. `i = 3`: kein Punkt, drei `3`.
  ---
  Ausgabe `..1`, `.22`, `333`. Mit Leerzeichen statt Punkten wäre es ein rechtsbündiges Zahlendreieck.
```

```aufgabe
id: gr-zeile-tabelle
titel: Zeilentabelle einer umgedrehten Pyramide
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Fülle die Zeilentabelle für diese umgedrehte Pyramide mit `n = 4` aus (Punkte stehen für Leerzeichen).
  Die erste Zeile ist vorgegeben.
  ```text
  *******
  .*****
  ..***
  ...*
  ```
teile:
  - typ: trace
    spalten: [i, Leerzeichen, Sterne]
    vorgabe: 1
    loesung: [[0, 0, 7], [1, 1, 5], [2, 2, 3], [3, 3, 1]]
    fehler:
      - wert: ["0", "0", "7", "1", "1", "6", "2", "2", "5", "3", "3", "4"]
        meldung: Zähle die Sterne in Zeile 1 noch einmal. Die Pyramide verliert links **und** rechts je einen Stern, also 2 je Zeile.
      - wert: ["0", "0", "7", "1", "0", "5", "2", "0", "3", "3", "0", "1"]
        meldung: Die Zeilen sind nach rechts eingerückt. Zähle die Punkte am Anfang jeder Zeile als Leerzeichen.
hinweise:
  - Zähle in jeder Zeile zuerst die Punkte am Anfang, dann die Sterne.
  - Die Sterne nehmen jeweils um 2 ab, die Leerzeichen um 1 zu.
loesung: |
  **Ansatz:** Für jede Zeile die Punkte und die Sterne abzählen.
  ---
  Leerzeichen: 0, 1, 2, 3, also `i`. Sterne: 7, 5, 3, 1.
  ---
  Die Sterne fallen um 2 und beginnen bei `2 · 4 − 1 = 7`. Formel: `2 * (n - i) - 1`. Probe für `i = 3`: `2 · 1 − 1 = 1`.
```

```aufgabe
id: gr-zeile-formel
titel: Die Grenzen der Pyramide ergänzen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Der Code soll für jedes `n` eine Pyramide ausgeben, für `n = 3` also (Punkte stehen für Leerzeichen):
  ```text
  ..*
  .***
  *****
  ```
  Ergänze die beiden Schleifengrenzen.
teile:
  - typ: lueckentext
    code: |
      int n = 5;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < ___; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < ___; j++) {
              System.out.print("*");
          }
          System.out.println();
      }
    luecken: [["n - 1 - i", "n - i - 1", "(n - 1) - i", "-i + n - 1"], ["2 * i + 1", "1 + 2 * i", "i * 2 + 1", "i + i + 1"]]
    fehler:
      - wert: ["n - i", "2 * i + 1"]
        meldung: 'Mit `n - i` hat Zeile 0 schon `n` Leerzeichen. Dann hat auch die letzte Zeile noch ein Leerzeichen vor dem ersten Stern. Die unterste Zeile muss ganz links beginnen.'
      - wert: ["n - 1 - i", "i + 1"]
        meldung: 'Mit `i + 1` Sternen entsteht ein rechtsbündiges Dreieck. Die Pyramide wächst um **zwei** Sterne je Zeile.'
hinweise:
  - Lege eine Zeilentabelle für `n = 3` an. Die Werte in Zeile 0 und Zeile 1 verraten dir die Formeln.
  - 'Leerzeichen: Start `n - 1`, Änderung −1. Sterne: Start 1, Änderung +2. Das ergibt `a * i + b`.'
gefuehrt:
  - text: Wie viele Leerzeichen hat Zeile 0 bei `n = 5`?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Die unterste Zeile hat 0 Leerzeichen. Jede Zeile weiter oben hat eins mehr. Zeile 0 liegt 4 Zeilen über Zeile 4.
  - text: Wie viele Leerzeichen hat Zeile 1?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Eins weniger als Zeile 0. Die Formel lautet also `n - 1 - i`.
  - text: Wie viele Sterne hat Zeile 2?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Zeile 0 hat 1 Stern, Zeile 1 hat 3, Zeile 2 hat 5. Je Zeile kommen 2 dazu.
  - text: Welche Formel ergibt 1, 3, 5, … für `i` = 0, 1, 2, …?
    erklaerung: 'Änderung `a = 2`, Startwert `b = 1`: `2 * i + 1`.'
loesung: |
  **Ansatz:** Zeilentabelle für die Pyramide, dann die Formeln `a * i + b` ablesen.
  ---
  Leerzeichen: 4, 3, 2, 1, 0 bei `n = 5`, also `n - 1 - i`.
  ---
  Sterne: 1, 3, 5, 7, 9, also `2 * i + 1`. Probe für die letzte Zeile `i = 4`: 0 Leerzeichen und 9 Sterne.
```

```aufgabe
id: gr-zeile-summe
titel: Sterne der großen Pyramide
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Pyramide aus dem Lückentext („Die Grenzen der Pyramide ergänzen“) wird mit `n = 6` ausgeführt.
  Wie viele **Sterne** gibt sie insgesamt aus? (Leerzeichen zählen nicht.)
teile:
  - typ: zahl
    loesung: "1 + 3 + 5 + 7 + 9 + 11"
    fehler:
      - wert: "21"
        meldung: 'Das ist 1 + 2 + … + 6, die Summe für ein Dreieck. Die Pyramide hat in Zeile `i` aber `2 * i + 1` Sterne.'
      - wert: "66"
        meldung: Nicht jede Zeile hat 11 Sterne. Nur die letzte ist so breit. Addiere die Sterne Zeile für Zeile.
hinweise:
  - Bestimme die Sterne je Zeile mit `2 * i + 1` für `i` von 0 bis 5.
  - 'Addiere die sechs Werte. Zur Probe: Die Summe der ersten n ungeraden Zahlen ist n · n.'
loesung: |
  **Ansatz:** Die innere Grenze hängt von `i` ab. Also zeilenweise zählen und addieren.
  ---
  Sterne je Zeile: 1, 3, 5, 7, 9, 11.
  ---
  Summe: 1 + 3 + 5 + 7 + 9 + 11 = 36. Probe: 6 · 6 = 36.
```

```aufgabe
id: gr-zeile-compiler
titel: Leerzeichen multiplizieren?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Student will sich die innere Schleife für die Leerzeichen sparen. Welche Zeilen kompilieren nicht?
teile:
  - typ: zeilen
    code: |
      int n = 4;
      for (int i = 0; i < n; i++) {
          System.out.print(" " * (n - 1 - i));
          for (int j = 0; j <= i; j++) {
              System.out.print('*');
          }
          System.out.println()
      }
    loesung: [3, 7]
    fehler:
      - wert: [7]
        meldung: 'Schau dir Zeile 3 genau an. Darf man einen String mit einer Zahl multiplizieren?'
      - wert: [3, 5, 7]
        meldung: "`print('*')` ist erlaubt. `'*'` ist ein `char`, und `print` kann jeden Wert ausgeben."
      - wert: [3]
        meldung: Am Ende von Zeile 7 fehlt etwas, das jede einfache Anweisung abschließt.
hinweise:
  - Prüfe jede Zeile auf zwei Dinge. Fehlt ein Strichpunkt? Passen die Typen links und rechts eines Operators?
  - '`*` ist nur für Zahlen definiert. `+` ist der einzige Operator, der mit Strings arbeitet.'
loesung: |
  **Ansatz:** Den Code lesen wie der Compiler, Zeile für Zeile.
  ---
  Zeile 7: Nach `println()` fehlt der Strichpunkt. Meldung `';' expected`. Der Compiler prüft zuerst nur die Satzzeichen und den Aufbau. Solange dieser Fehler besteht, meldet er **nur** ihn.
  ---
  Zeile 3: `" " * (n - 1 - i)` multipliziert einen String mit einer Zahl. Diesen Fehler meldet der Compiler erst, wenn der Strichpunkt ergänzt ist: `bad operand types for binary operator '*'`. Leerzeichen gibt man mit einer eigenen inneren Schleife aus. Zeile 5 ist in Ordnung.
```

````aufgabe
id: gr-zeile-pyramide-code
titel: Die umgedrehte Pyramide programmieren
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Das Programm liest eine Zahl `n ≥ 1` ein und gibt eine umgedrehte Pyramide aus `#` mit `n` Zeilen aus.
  Für `n = 3` (Punkte stehen hier für Leerzeichen):
  ```text
  #####
  .###
  ..#
  ```
  Wie das Einlesen mit `Scanner` genau funktioniert, lernst du in [Kapitel 8, Eingabe mit Scanner](/lernen/ep1/eingabe). Die Vorlage
  erledigt es schon. Rechts vom letzten `#` darf kein Leerzeichen stehen.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class UmgedrehtePyramide {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO: umgedrehte Pyramide ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class UmgedrehtePyramide {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < i; j++) {
                      System.out.print(" ");
                  }
                  for (int j = 0; j < 2 * (n - i) - 1; j++) {
                      System.out.print("#");
                  }
                  System.out.println();
              }
          }
      }
    tests:
      - stdin: "3"
        stdout: "#####\n ###\n  #\n"
        beschreibung: "n = 3"
      - stdin: "1"
        stdout: "#\n"
        beschreibung: "n = 1: nur die Spitze"
      - stdin: "5"
        stdout: "#########\n #######\n  #####\n   ###\n    #\n"
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeichen für Zeichen. Stehen am Zeilenende Leerzeichen? Hat die erste Zeile 2 · n − 1 Zeichen?" }
      - { wert: 2, meldung: "Bei n = 1 gibt es genau eine Zeile mit genau einem #. Prüfe deine Formel für die Anzahl der # mit i = 0 und n = 1." }
hinweise:
  - 'Beginne mit der Zeilentabelle aus der Aufgabe „Zeilentabelle einer umgedrehten Pyramide“: Leerzeichen `i`, Zeichen `2 * (n - i) - 1`.'
  - Du brauchst eine äußere Schleife über `i` von 0 bis `n - 1` und darin zwei innere Schleifen, danach `System.out.println()`.
loesung: |
  **Ansatz:** Zeilentabelle für `n = 3`: Leerzeichen 0, 1, 2 und Zeichen 5, 3, 1. Daraus die Formeln `i` und `2 * (n - i) - 1`.
  ---
  ```java
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < i; j++) {
          System.out.print(" ");
      }
      for (int j = 0; j < 2 * (n - i) - 1; j++) {
          System.out.print("#");
      }
      System.out.println();
  }
  ```
  ---
  Probe für `i = n - 1`: `n - 1` Leerzeichen und `2 · 1 − 1 = 1` Zeichen, also die Spitze. Für `n = 1` läuft die äußere Schleife einmal mit 0 Leerzeichen und einem `#`.
````

```reflexion
frage: Warum lohnt es sich, die Zeilennummer i ab 0 zu zählen und nicht ab 1? Was ändert sich an den Formeln, wenn du ab 1 zählst?
antwort: |
  Ab 0 gezählt ist der Wert in Zeile 0 direkt der Startwert b der Formel a * i + b. Man liest ihn einfach in der
  ersten Tabellenzeile ab. Zählt man ab 1, verschiebt sich alles um eins. Die Pyramide hätte dann 2 * i - 1 Sterne
  und n - i Leerzeichen. Beides ist richtig, solange Tabelle, Formel und Schleife dieselbe Zählweise benutzen.
  Gefährlich ist nur das Mischen: eine Formel aus einer Tabelle ab 0, aber eine Schleife ab 1. Dann ist jede Zeile
  um eine Stelle verschoben. Ab 0 zu zählen passt außerdem zu Strings und später zu Arrays, deren Indizes bei 0 beginnen.
```

## Trapez, Raute und Tannenbaum

```aufgabe
id: gr-form-check
titel: Die halbe Breite
niveau: 1
art: check
angabe: |
  Es gilt `int breite = 7;`. Welchen Wert hat `breite / 2`?
  (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "3.5"
        meldung: '`breite` und `2` sind beide `int`. Dann ist `/` eine Ganzzahldivision, und der Nachkommaanteil fällt weg.'
      - wert: "4"
        meldung: Ganzzahldivision rundet nicht auf, sie schneidet ab. Aus 3,5 wird 3.
loesung: |
  `7 / 2` ist `int / int`, also Ganzzahldivision.
  ---
  2 passt dreimal in 7, der Rest 1 fällt weg. Ergebnis 3.
```

Aufgabenblatt 1 verlangt in Aufgabe 3 Formen in **jeder** erlaubten Größe. Das Programm bekommt eine Variable,
etwa `int breite`, und muss für 2, 9 oder 13 jeweils das richtige Bild liefern. Die Zeilentabelle aus
[5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen) bleibt das
Werkzeug. Neu ist nur, dass oft **zwei** Größen im Spiel sind: die vorgegebene Breite und eine daraus berechnete Höhe.

Das **Trapez** im Aufgabenblatt hat diese Regeln. Die untere Seite ist `breite` Zeichen lang. Die Höhe ist die
ganzzahlige Hälfte der Breite, also `breite / 2`. Jede Zeile ist zwei Zeichen kürzer als die darunter und um ein
Zeichen eingerückt. So sieht es für die Breiten 8 und 9 aus (Punkte stehen für Leerzeichen):

```text
breite = 8        breite = 9
...##             ...###
..####            ..#####
.######           .#######
########          #########
```

```aufgabe
id: gr-form-check-zeilen
titel: Wie viele Zeilen hat das Trapez?
niveau: 1
art: check
angabe: |
  Wie viele Zeilen hat das Trapez für `breite = 14`?
teile:
  - typ: zahl
    loesung: "14 / 2"
    fehler:
      - wert: "14"
        meldung: 'Die Höhe ist die Hälfte der Breite: `breite / 2`.'
      - wert: "6"
        meldung: '`14 / 2` geht ohne Rest auf. Zähle die Zeilen mit 2, 4, 6, … bis 14 Zeichen noch einmal.'
loesung: |
  Die Höhe ist `breite / 2`, also `14 / 2 = 7`.
  ---
  Die Zeilen haben 2, 4, 6, 8, 10, 12 und 14 Zeichen.
```

:::beispiel[Ein Trapez der Breite 9]
**Höhe:** `h = 9 / 2 = 4`, also vier Zeilen.

**Zeilentabelle** (gezählt wird von oben, `i` ab 0):

|`i`|Leerzeichen|Zeichen|
|---|---|---|
|0|3|3|
|1|2|5|
|2|1|7|
|3|0|9|

**Formeln:** Die Leerzeichen fallen um 1 und enden bei 0 in der letzten Zeile `i = h - 1`. Das ergibt `h - 1 - i`.
Die Zeichen erhält man aus der Breite: Jedes Leerzeichen links fehlt auch rechts. Also hat Zeile `i` genau
`breite - 2 * (h - 1 - i)` Zeichen. Probe für `i = 0`: `9 - 2 · 3 = 3`.

```java
int breite = 9;
int h = breite / 2;
for (int i = 0; i < h; i++) {
    for (int j = 0; j < h - 1 - i; j++) {
        System.out.print(" ");
    }
    for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
        System.out.print("#");
    }
    System.out.println();
}
```

- Zeile 2 berechnet die Höhe einmal und speichert sie. So steht die Formel nicht dreimal im Code.
- Zeile 3: Die äußere Schleife läuft `h` Mal.
- Zeilen 4 bis 6 und 7 bis 9 sind die beiden Spalten der Zeilentabelle.

**Probe mit der kleinsten Breite 2:** `h = 1`. Die einzige Zeile hat `1 - 1 - 0 = 0` Leerzeichen und
`2 - 2 · 0 = 2` Zeichen. Das ist `##`, genau wie im Aufgabenblatt. Bei Breite 3 entsteht `###`.
:::

```aufgabe
id: gr-form-hoehe
titel: Höhe und obere Seite
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Trapez nach den Regeln des Aufgabenblatts hat die Breite `breite = 15`.
  Wie viele Zeilen hat es, und wie viele Zeichen stehen in der **obersten** Zeile?
teile:
  - typ: zahl
    label: Anzahl der Zeilen
    loesung: "7"
    fehler:
      - wert: "7.5"
        meldung: Die Höhe ist die **ganzzahlige** Hälfte. `15 / 2` ergibt in Java 7.
      - wert: "8"
        meldung: Ganzzahldivision rundet nicht auf. Aus 7,5 wird 7.
  - typ: zahl
    label: Zeichen in der obersten Zeile
    loesung: "15 - 2 * 6"
    fehler:
      - wert: "1"
        meldung: 'Die oberste Zeile hat `h - 1 = 6` Leerzeichen. Also fehlen links und rechts je 6 Zeichen.'
      - wert: "2"
        meldung: Zwei Zeichen oben gibt es nur bei gerader Breite. Bei ungerader Breite bleibt die Zeichenzahl in jeder Zeile ungerade.
hinweise:
  - '`h = breite / 2` mit Ganzzahldivision.'
loesung: |
  **Ansatz:** Höhe als ganzzahlige Hälfte, dann die Formel `breite - 2 * (h - 1 - i)` für `i = 0`.
  ---
  `h = 15 / 2 = 7` Zeilen. Oberste Zeile: `15 - 2 · 6 = 3` Zeichen.
  ---
  Probe: Die Zeilen haben 3, 5, 7, 9, 11, 13 und 15 Zeichen. Die letzte ist so breit wie `breite`.
```

Viele Muster sind **symmetrisch**: Die untere Hälfte ist das Spiegelbild der oberen. Eine Raute ist das bekannteste
Beispiel. Man könnte die obere und die untere Hälfte mit zwei getrennten Schleifen ausgeben. Eleganter ist eine
einzige Schleife, die für jede Zeile ausrechnet, wie weit sie von der Mitte entfernt ist.

:::definition[Abstand zur Mittelzeile]
Ein Muster hat eine **ungerade** Höhe `h`, mit Zeilen `i` = 0 bis `h - 1`. Dann ist `m = h / 2` die **Mittelzeile**.
Der **Abstand zur Mittelzeile** ist

```java
int d = Math.abs(i - m);
```

`Math.abs` liefert den Betrag, also den Wert ohne Vorzeichen (siehe
[2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math)).
Zwei Zeilen mit gleichem `d` liegen spiegelbildlich und sehen gleich aus.
:::

**Beispiel:** Für `h = 5` ist `m = 2`. Die Zeilen 0 bis 4 haben die Abstände 2, 1, 0, 1, 2. Zeile 0 und Zeile 4 sind
gleich weit von der Mitte entfernt, ebenso Zeile 1 und Zeile 3.

**Nichtbeispiel:** Bei der geraden Höhe `h = 4` gibt es **keine** Mittelzeile. `h / 2` ergibt 2, und die Abstände
wären 2, 1, 0, 1. Die oberste Zeile hätte Abstand 2, die unterste nur 1. Das Muster wäre nicht symmetrisch. Darum
gibt man einer Raute eine ungerade Höhe.

:::beispiel[Eine Raute mit einer einzigen Schleife]
```java
int h = 5;
int m = h / 2;
for (int i = 0; i < h; i++) {
    int d = Math.abs(i - m);
    for (int j = 0; j < d; j++) {
        System.out.print(" ");
    }
    for (int j = 0; j < 2 * (m - d) + 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Wir stellen die Zeilentabelle mit der zusätzlichen Spalte `d` auf:

|`i`|`d`|Leerzeichen `d`|Sterne `2*(m-d)+1`|
|---|---|---|---|
|0|2|2|1|
|1|1|1|3|
|2|0|0|5|
|3|1|1|3|
|4|2|2|1|

- Die Leerzeichen sind einfach `d`: Je weiter von der Mitte, desto weiter eingerückt.
- In der Mitte (`d = 0`) stehen `2 · 2 + 1 = 5` Sterne. Mit jedem Schritt weg von der Mitte gehen 2 verloren.

Die Ausgabe:

```text
  *
 ***
*****
 ***
  *
```
:::

:::merke[Symmetrische Muster]
1. Ungerade Höhe `h`, Mittelzeile `m = h / 2`.
2. Für jede Zeile `d = Math.abs(i - m)` berechnen.
3. Die Zeilentabelle in Abhängigkeit von `d` statt von `i` aufstellen. Die Formeln gelten dann für die obere und die untere Hälfte zugleich.
4. Probe mit der Mittelzeile (`d = 0`) und der obersten Zeile (`d = m`).
:::

Der **Tannenbaum** aus einem älteren Aufgabenblatt (Sommersemester 2020) setzt sich aus mehreren Abschnitten
zusammen. Abschnitt 1 hat eine Zeile, Abschnitt 2 zwei Zeilen, und so weiter. Er braucht drei Schleifen
ineinander: über die Abschnitte, über die Zeilen eines Abschnitts und über die Zeichen einer Zeile. Du baust ihn in
einer Aufgabe dieser Seite selbst.

```aufgabe
id: gr-form-trapez-ausgabe
titel: Ein Trapez aus Pluszeichen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int breite = 12;
      int h = breite / 2;
      for (int i = 0; i < h; i++) {
          for (int j = 0; j < h - 1 - i; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
              System.out.print("+");
          }
          System.out.println();
      }
    loesung: "     ++\n    ++++\n   ++++++\n  ++++++++\n ++++++++++\n++++++++++++\n"
    fehler:
      - wert: "++\n++++\n++++++\n++++++++\n++++++++++\n++++++++++++"
        meldung: Die Zeichenzahlen stimmen. Es fehlen aber die Leerzeichen am Zeilenanfang. Zeile 0 hat `h - 1 - 0 = 5` davon.
      - wert: "    ++\n   ++++\n  ++++++\n ++++++++\n++++++++++"
        meldung: 'Die Höhe ist `12 / 2 = 6`. Es gibt also sechs Zeilen, und die unterste ist 12 Zeichen breit.'
hinweise:
  - Bestimme zuerst `h`. Lege dann eine Zeilentabelle mit Leerzeichen `h - 1 - i` und Zeichen `breite - 2 * (h - 1 - i)` an.
loesung: |
  **Ansatz:** `h = 12 / 2 = 6`. Zeilentabelle für `i` = 0 bis 5.
  ---
  Leerzeichen: 5, 4, 3, 2, 1, 0. Zeichen: 12 − 10 = 2, 12 − 8 = 4, 12 − 6 = 6, 12 − 4 = 8, 12 − 2 = 10 und 12.
  ---
  Ausgabe: `     ++`, `    ++++`, `   ++++++`, `  ++++++++`, ` ++++++++++`, `++++++++++++`. Probe: Die unterste Zeile ist so breit wie `breite`.
```

:::achtung[Die Höhe mit 2.0 geteilt]
Jemand möchte „genau“ rechnen und schreibt `double h = breite / 2.0;`. Für `breite = 7` ist dann `h = 3.5`. Die
Schleife `for (int i = 0; i < h; i++)` läuft für `i` = 0, 1, 2, 3, also **viermal**. Mit Punkten für Leerzeichen ist
die Ausgabe:

```text
...##
..####
.######
########
```

Das Trapez hat vier Zeilen statt drei, und die unterste ist 8 statt 7 Zeichen breit. Die Aufgabe verlangt
ausdrücklich die **ganzzahlige** Hälfte. Hier ist die Ganzzahldivision `breite / 2` also genau richtig.
:::

:::achtung[Die Mittelzeile doppelt]
Eine Raute mit zwei Schleifen, oben wachsend und unten schrumpfend:

```java
for (int i = 0; i <= m; i++) { /* Zeile mit 2 * i + 1 Sternen */ }
for (int i = m; i >= 0; i--) { /* Zeile mit 2 * i + 1 Sternen */ }
```

Beide Schleifen enthalten `i = m`. Die breiteste Zeile erscheint deshalb zweimal:

```text
  *
 ***
*****
*****
 ***
  *
```

Die zweite Schleife muss bei `m - 1` beginnen. Mit dem Abstand `d = Math.abs(i - m)` kann dieser Fehler gar nicht
erst entstehen, weil jede Zeile genau einmal vorkommt.
:::

```aufgabe
id: gr-form-sanduhr
titel: Eine Sanduhr
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.
teile:
  - typ: ausgabe
    code: |
      int h = 7;
      int m = h / 2;
      for (int i = 0; i < h; i++) {
          int d = Math.abs(i - m);
          for (int j = 0; j < m - d; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < 2 * d + 1; j++) {
              System.out.print("o");
          }
          System.out.println();
      }
    loesung: "ooooooo\n ooooo\n  ooo\n   o\n  ooo\n ooooo\nooooooo\n"
    fehler:
      - wert: "   o\n  ooo\n ooooo\nooooooo\n ooooo\n  ooo\n   o"
        meldung: 'Das ist die Raute. Hier sind die Rollen vertauscht: Die Zeichen hängen an `2 * d + 1`, also ist die Zeile **außen** breit und in der Mitte schmal.'
      - wert: "ooooooo\nooooo\nooo\no\nooo\nooooo\nooooooo"
        meldung: 'Die Anzahl der `o` stimmt, aber die Einrückung fehlt. Vor den Zeichen stehen `m - d` Leerzeichen.'
hinweise:
  - Bestimme `m` und dann für jede Zeile `d`. Die Werte von `d` sind 3, 2, 1, 0, 1, 2, 3.
  - Leerzeichen sind `m - d`, Zeichen `2 * d + 1`. Mach eine Zeilentabelle.
gefuehrt:
  - text: Welchen Wert hat `m`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`7 / 2` ist Ganzzahldivision, also 3. Zeile 3 ist die Mittelzeile.'
  - text: Welchen Wert hat `d` in Zeile `i = 0`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`Math.abs(0 - 3)` ist 3. Die oberste Zeile ist am weitesten von der Mitte entfernt.'
  - text: Wie viele `o` stehen in Zeile 0?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: 'Zeile 0: `2 · 3 + 1 = 7`. Mittelzeile: `d = 0`, also nur `2 · 0 + 1 = 1` Zeichen.'
  - text: Wie viele Leerzeichen stehen vor dem `o` in der Mittelzeile?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`m - d = 3 - 0 = 3`. Danach geht es spiegelbildlich wieder nach außen.'
loesung: |
  **Ansatz:** Zeilentabelle mit `d = Math.abs(i - 3)`, Leerzeichen `3 - d` und Zeichen `2 * d + 1`.
  ---
  `d`: 3, 2, 1, 0, 1, 2, 3. Leerzeichen: 0, 1, 2, 3, 2, 1, 0. Zeichen: 7, 5, 3, 1, 3, 5, 7.
  ---
  Es entsteht eine Sanduhr: oben und unten 7 Zeichen, in der Mitte eines. Probe: Die Zeile ist immer `(3 - d) + (2d + 1)` lang, also höchstens 7.
```

```aufgabe
id: gr-form-schraeg
titel: Ein schräges Band
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.
teile:
  - typ: ausgabe
    code: |
      int w = 4;
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 2 * i; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < w; j++) {
              System.out.print("#");
          }
          System.out.println();
      }
    loesung: "####\n  ####\n    ####\n"
    fehler:
      - wert: "####\n ####\n  ####"
        meldung: 'Die Einrückung ist `2 * i`, nicht `i`. Jede Zeile rückt um **zwei** Stellen weiter.'
      - wert: "####\n####\n####"
        meldung: Vor den Zeichen steht eine eigene Schleife mit Leerzeichen. Nur Zeile 0 beginnt ganz links.
hinweise:
  - Die Anzahl der `#` hängt nicht von `i` ab. Nur die Einrückung ändert sich.
  - 'Zeilentabelle: Leerzeichen 0, 2, 4 und jeweils 4 Zeichen.'
loesung: |
  **Ansatz:** Die äußere Schleife läuft dreimal. Jede Zeile hat `2 * i` Leerzeichen und 4 Zeichen.
  ---
  `i = 0`: 0 Leerzeichen. `i = 1`: 2. `i = 2`: 4.
  ---
  Es entsteht ein gefülltes Parallelogramm, das steiler nach rechts läuft als bei einer Einrückung um 1.
```

```aufgabe
id: gr-form-aussagen
titel: Aussagen über das Trapez
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Trapez folgt den Regeln des Aufgabenblatts: Grundseite `breite`, Höhe `breite / 2`, jede Zeile zwei Zeichen
  kürzer als die darunter. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für `breite = 13` hat das Trapez 7 Zeilen.
        richtig: false
        erklaerung: '`13 / 2` ist in Java 6. Das Trapez hat 6 Zeilen mit 3, 5, 7, 9, 11 und 13 Zeichen.'
      - text: Die Breiten 16 und 17 ergeben dieselbe Anzahl an Zeilen.
        richtig: true
        erklaerung: '`16 / 2` und `17 / 2` sind beide 8.'
      - text: Für `breite = 2` besteht das Trapez aus genau einer Zeile mit 2 Zeichen.
        richtig: true
        erklaerung: '`h = 1`, die einzige Zeile hat 0 Leerzeichen und `2 - 0 = 2` Zeichen.'
      - text: Bei gerader Breite hat die oberste Zeile immer genau 1 Zeichen.
        richtig: false
        erklaerung: 'Bei gerader Breite ist jede Zeilenlänge gerade, denn es werden immer 2 Zeichen abgezogen. Oben stehen 2 Zeichen.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Rechne die Höhe für Breite 13 mit Ganzzahldivision aus. `13 / 2` ergibt nicht 7.'
      - wert: [f, r, r, r]
        meldung: Von einer geraden Zahl zwei abzuziehen ergibt wieder eine gerade Zahl. Kann dann oben eine 1 stehen?
hinweise:
  - Rechne jede Höhe mit Ganzzahldivision aus.
  - Überlege, ob die Zeilenlängen gerade oder ungerade bleiben, wenn man immer 2 abzieht.
loesung: |
  **Ansatz:** Für jede Aussage Höhe und Zeilenlängen ausrechnen.
  ---
  Breite 13: `h = 6`, also ist Aussage 1 falsch. Breite 16 und 17: beide `h = 8`, Aussage 2 richtig.
  ---
  Breite 2: eine Zeile `##`, Aussage 3 richtig. Gerade Breite ergibt nur gerade Zeilenlängen, oben also 2. Aussage 4 ist falsch.
```

````aufgabe
id: gr-form-trapez-code
titel: Das Trapez programmieren
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 3 (Trapez, nachgebaut)
angabe: |
  Das Programm liest die Breite `breite ≥ 2` ein und gibt das Trapez aus `#` aus. Die Grundseite ist `breite`,
  die Höhe `breite / 2` (ganzzahlig). Jede Zeile ist zwei Zeichen kürzer und eine Stelle weiter eingerückt als die
  darunter. Rechts vom letzten `#` steht kein Leerzeichen. Für `breite = 8`:
  ```text
     ##
    ####
   ######
  ########
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Trapez {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int breite = eingabe.nextInt();
              // TODO: Trapez ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Trapez {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int breite = eingabe.nextInt();
              int h = breite / 2;
              for (int i = 0; i < h; i++) {
                  for (int j = 0; j < h - 1 - i; j++) {
                      System.out.print(" ");
                  }
                  for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
                      System.out.print("#");
                  }
                  System.out.println();
              }
          }
      }
    tests:
      - stdin: "8"
        stdout: "   ##\n  ####\n ######\n########\n"
        beschreibung: "gerade Breite 8"
      - stdin: "9"
        stdout: "   ###\n  #####\n #######\n#########\n"
        beschreibung: "ungerade Breite 9"
      - stdin: "2"
        stdout: "##\n"
        beschreibung: "kleinste Breite 2"
      - stdin: "13"
        stdout: "     ###\n    #####\n   #######\n  #########\n ###########\n#############\n"
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 2, meldung: "Bei ungerader Breite muss die Höhe die ganzzahlige Hälfte sein, 9 / 2 = 4. Rechnest du mit 2.0, entsteht eine Zeile zu viel." }
      - { wert: 3, meldung: "Bei Breite 2 gibt es genau eine Zeile ## ohne Leerzeichen. Prüfe deine Leerzeichen-Formel für i = 0 und h = 1." }
hinweise:
  - Lies die Formeln aus dem Beispiel „Ein Trapez der Breite 9“ ab. Höhe `h = breite / 2`, Leerzeichen `h - 1 - i`.
  - 'Zeichen je Zeile: `breite - 2 * (h - 1 - i)`. Zwei innere Schleifen, danach `println()`.'
loesung: |
  **Ansatz:** Zeilentabelle mit `h = breite / 2` Zeilen, Leerzeichen `h - 1 - i`, Zeichen `breite - 2 * (h - 1 - i)`.
  ---
  ```java
  int h = breite / 2;
  for (int i = 0; i < h; i++) {
      for (int j = 0; j < h - 1 - i; j++) {
          System.out.print(" ");
      }
      for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
          System.out.print("#");
      }
      System.out.println();
  }
  ```
  ---
  Probe mit Breite 9: vier Zeilen mit 3, 5, 7 und 9 Zeichen. Mit Breite 2: eine Zeile `##`.
````

````aufgabe
id: gr-form-tannenbaum
titel: Ein Tannenbaum aus Abschnitten
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 2 SS2020, Aufgabe 2 (Baumfiguren, nachgebaut)
angabe: |
  Das Programm liest `hoehe ≥ 1` ein und gibt einen Tannenbaum aus `hoehe` Abschnitten aus.

  - Abschnitt `k` (für `k` = 1 bis `hoehe`) hat `k` Zeilen mit 1, 3, 5, … Elementen.
  - Das allererste Element des Baums (Abschnitt 1) ist ein `^`.
  - Jede andere Zeile mit einem Element ist ein `o`. Zeilen mit mehr Elementen bestehen aus `o` am Rand und `+` innen.
  - Alle Zeilen sind mittig ausgerichtet. Die breiteste Zeile beginnt ganz links. Rechts steht kein Leerzeichen.

  Für `hoehe = 3`:
  ```text
    ^
    o
   o+o
    o
   o+o
  o+++o
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Tannenbaum {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int hoehe = eingabe.nextInt();
              // TODO: Tannenbaum ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Tannenbaum {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int hoehe = eingabe.nextInt();
              for (int k = 1; k <= hoehe; k++) {
                  for (int r = 0; r < k; r++) {
                      for (int j = 0; j < hoehe - 1 - r; j++) {
                          System.out.print(" ");
                      }
                      if (k == 1) {
                          System.out.print("^");
                      } else if (r == 0) {
                          System.out.print("o");
                      } else {
                          System.out.print("o");
                          for (int j = 0; j < 2 * r - 1; j++) {
                              System.out.print("+");
                          }
                          System.out.print("o");
                      }
                      System.out.println();
                  }
              }
          }
      }
    tests:
      - stdin: "3"
        stdout: "  ^\n  o\n o+o\n  o\n o+o\no+++o\n"
        beschreibung: "hoehe = 3"
      - stdin: "1"
        stdout: "^\n"
        beschreibung: "hoehe = 1: nur die Spitze"
      - stdin: "2"
        stdout: " ^\n o\no+o\n"
        beschreibung: "hoehe = 2"
      - stdin: "6"
        stdout: "     ^\n     o\n    o+o\n     o\n    o+o\n   o+++o\n     o\n    o+o\n   o+++o\n  o+++++o\n     o\n    o+o\n   o+++o\n  o+++++o\n o+++++++o\n     o\n    o+o\n   o+++o\n  o+++++o\n o+++++++o\no+++++++++o\n"
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 2, meldung: "Bei hoehe = 1 gibt es nur das ^ ohne Leerzeichen davor. Hängt deine Einrückung von hoehe ab?" }
      - { wert: 1, meldung: "Die Einrückung hängt nur von der Zeile r innerhalb des Abschnitts ab, nicht vom Abschnitt k: hoehe - 1 - r. Jeder Abschnitt beginnt wieder mit einem einzelnen o genau unter dem ^." }
hinweise:
  - 'Drei Schleifen ineinander: über die Abschnitte `k`, über die Zeilen `r` = 0 bis `k - 1` eines Abschnitts und über die Zeichen einer Zeile.'
  - 'Zeile `r` eines Abschnitts hat `2 * r + 1` Elemente und `hoehe - 1 - r` Leerzeichen davor. Unterscheide mit `if`: `k == 1` (das `^`), `r == 0` (ein `o`), sonst `o`, dann `2 * r - 1` Mal `+`, dann `o`.'
loesung: |
  **Ansatz:** Zeilentabelle für einen Abschnitt: Zeile `r` hat `hoehe - 1 - r` Leerzeichen und `2 * r + 1` Elemente. Die Abschnitte wiederholen das mit wachsender Zeilenzahl.
  ---
  ```java
  for (int k = 1; k <= hoehe; k++) {
      for (int r = 0; r < k; r++) {
          for (int j = 0; j < hoehe - 1 - r; j++) {
              System.out.print(" ");
          }
          if (k == 1) {
              System.out.print("^");
          } else if (r == 0) {
              System.out.print("o");
          } else {
              System.out.print("o");
              for (int j = 0; j < 2 * r - 1; j++) {
                  System.out.print("+");
              }
              System.out.print("o");
          }
          System.out.println();
      }
  }
  ```
  ---
  Probe mit `hoehe = 3`: Der letzte Abschnitt hat die Zeile `r = 2` mit 0 Leerzeichen und `o+++o`, also 5 Elementen. Das ist die breiteste Zeile, sie beginnt ganz links.
````

```aufgabe
id: gr-form-eine-schleife
titel: "Zusatzfrage: Geht es mit einer Schleife?"
niveau: 2
lernziel: 2
kompetenz: begruenden
quelle: Aufgabenblatt 2 SS2020, Zusatzfrage zu Aufgabe 2
angabe: |
  Zum Tannenbaum stellte das Aufgabenblatt eine Zusatzfrage, die man schriftlich als Kommentar beantworten musste:
  Lässt sich der Baum auch mit nur **einer** Schleife ausgeben, und wie ginge man dabei vor? Antworte in drei bis fünf
  ganzen Sätzen.
teile:
  - typ: text
    muster: |
      Ja, wenn man darauf verzichtet, für jede Zeile eine eigene innere Schleife zu schreiben. Man lässt eine
      einzige Schleife über alle **Zeichenpositionen** laufen. Der Baum hat insgesamt 1 + 2 + … + hoehe Zeilen,
      und jede Zeile hat hoehe + r Positionen bis zum letzten Zeichen. In der Schleife merkt man sich in Variablen,
      in welchem Abschnitt k, in welcher Zeile r und an welcher Position man gerade ist. Am Zeilenende gibt man
      einen Zeilenumbruch aus, setzt die Position auf 0 und erhöht r. Wenn r den Wert k erreicht, beginnt ein
      neuer Abschnitt. Ob an einer Position ein Leerzeichen, ein ^, ein o oder ein + steht, entscheidet ein if.
      Das geht, ist aber schwerer zu lesen als drei verschachtelte Schleifen.
hinweise:
  - Eine Schleife kann auch über alle Zeichen des ganzen Bildes laufen statt über die Zeilen.
  - 'Was muss sich das Programm dann in Variablen merken, damit es weiß, wo es gerade ist?'
loesung: |
  **Ansatz:** Verschachtelte Schleifen sind bequem, aber nicht nötig. Entscheidend ist, dass das Programm jederzeit weiß, welches Zeichen als nächstes kommt.
  ---
  Mit einer einzigen Schleife über alle Positionen führt man die Zähler für Abschnitt, Zeile und Spalte selbst als Variablen mit. Am Zeilenende wird die Spalte zurückgesetzt, am Abschnittsende die Zeile.
  ---
  Ein `if` entscheidet je Position über das Zeichen. Die Lösung ist möglich, aber unübersichtlicher. Wichtig ist, dass du das Weiterzählen der drei Zähler erklären kannst.
```

```reflexion
frage: Bei der Raute verwendest du eine Schleife mit d = Math.abs(i - m). Warum braucht diese Lösung keine Sonderbehandlung für die Mittelzeile, die Lösung mit zwei Schleifen aber schon?
antwort: |
  Die eine Schleife läuft über jede Zeile genau einmal, von 0 bis h - 1. Die Mittelzeile ist einfach die Zeile mit
  d = 0 und wird wie jede andere behandelt. Bei zwei Schleifen muss ich selbst festlegen, zu welcher Hälfte die
  Mittelzeile gehört. Schreibe ich sie in beide, erscheint sie doppelt. Vergesse ich sie in beiden, fehlt sie. Die
  Formel mit dem Abstand verlagert diese Entscheidung in die Rechnung, und die Rechnung kann sie nicht vergessen.
```

## Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett

```aufgabe
id: gr-bed-check
titel: Eine Bedingung mit Rest
niveau: 1
art: check
angabe: |
  Es gilt `int i = 1;` und `int j = 2;`. Welchen Wert hat `(i + j) % 2 == 0`?
  (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: auswahl
    optionen: ['`true`', '`false`', '`1`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`1 + 2` ist 3, und `3 % 2` ist 1. Der Vergleich `1 == 0` ist falsch.'
      - wert: 2
        meldung: '`(i + j) % 2` allein wäre die Zahl 1. Mit `== 0` wird daraus ein Vergleich, und der liefert einen `boolean`.'
loesung: |
  `i + j` ist 3. `3 % 2` ist der Rest 1.
  ---
  `1 == 0` ist `false`. Die Summe ist ungerade.
```

Bisher hatte jede Musterzeile die Form „erst Leerzeichen, dann Zeichen“. Ein hohles Rechteck, ein Kreuz oder ein
Schachbrett passt nicht in diese Form. In einer Zeile wechseln sich Zeichen und Lücken ab. Dafür gibt es eine
zweite Denkweise. Du stellst dir das Muster als **Gitter** vor: Zeile `i` von oben, Spalte `j` von links, beide ab 0.
Die innere Schleife läuft über **alle** Spalten. Für jede Position `(i, j)` entscheidet ein `if`, welches Zeichen
dort steht.

```text
        j = 0  1  2  3  4  5
i = 0       #  #  #  #  #  #
i = 1       #  .  .  .  .  #
i = 2       #  .  .  .  .  #
i = 3       #  #  #  #  #  #
```

In diesem Gitter steht `#` genau am Rand. Der Rand sind die Zeile 0, die letzte Zeile, die Spalte 0 und die letzte
Spalte. Diese Beschreibung kann man direkt als Bedingung schreiben.

:::definition[Positionsbedingung]
Eine **Positionsbedingung** ist ein Ausdruck vom Typ `boolean`, der nur von der Zeile `i`, der Spalte `j` und den
Größen des Musters abhängt. Im Rumpf der inneren Schleife entscheidet sie mit `if` und `else`, welches Zeichen an
der Position `(i, j)` ausgegeben wird.
:::

**Beispiel:** `i == 0 || i == hoehe - 1 || j == 0 || j == breite - 1` ist die Positionsbedingung für den Rand. Sie
ist für jede Position wahr, die in der ersten oder letzten Zeile **oder** in der ersten oder letzten Spalte liegt.

**Nichtbeispiel:** `j < i + 1` als Grenze einer inneren Schleife ist **keine** Positionsbedingung. Sie bestimmt,
wie oft die Schleife läuft, also wie lang die Zeile wird. Eine Positionsbedingung ändert die Länge nicht, sondern
wählt für jede Stelle einer fest langen Zeile das Zeichen.

:::beispiel[Ein hohles Rechteck]
```java
int hoehe = 4;
int breite = 6;
for (int i = 0; i < hoehe; i++) {
    for (int j = 0; j < breite; j++) {
        if (i == 0 || i == hoehe - 1 || j == 0 || j == breite - 1) {
            System.out.print("#");
        } else {
            System.out.print(" ");
        }
    }
    System.out.println();
}
```

- Die äußere Schleife läuft über 4 Zeilen, die innere über 6 Spalten. Jede Zeile hat also genau 6 Zeichen.
- Für `i = 0` ist schon `i == 0` wahr. Wegen `||` (oder) reicht das, die ganze erste Zeile wird `######`.
- Für `i = 1` sind die beiden Vergleiche mit `i` falsch. Nur bei `j = 0` und `j = 5` ist einer der Vergleiche mit `j` wahr. Dazwischen stehen 4 Leerzeichen: `#    #`.
- Weil die letzte Spalte immer `#` ist, steht am Zeilenende kein Leerzeichen.

```text
######
#    #
#    #
######
```

Insgesamt gibt es 6 + 6 + 2 + 2 = 16 Zeichen `#`. Die Ecken gehören zu den Zeilen 0 und 3 und werden dort gezählt,
deshalb zählt man bei den Spalten nur die 2 mittleren Zeilen.
:::

:::beispiel[Ein Schachbrett]
```java
for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 5; j++) {
        if ((i + j) % 2 == 0) {
            System.out.print("X");
        } else {
            System.out.print(".");
        }
    }
    System.out.println();
}
```

Beim Schachbrett wechselt das Feld bei jedem Schritt nach rechts **und** bei jedem Schritt nach unten. Die Summe
`i + j` macht genau das. Ein Schritt nach rechts erhöht `j` um 1, ein Schritt nach unten erhöht `i` um 1. In beiden
Fällen springt die Summe von gerade auf ungerade oder umgekehrt.

|Position|`i + j`|gerade?|Zeichen|
|---|---|---|---|
|(0, 0)|0|ja|`X`|
|(0, 1)|1|nein|`.`|
|(1, 0)|1|nein|`.`|
|(1, 1)|2|ja|`X`|

```text
X.X.X
.X.X.
X.X.X
.X.X.
```

Diese Bedingung brauchst du wieder für das Schachbrett mit Kreuzen in
[5.7 Optische Täuschungen: Café-Wall, Pinna und Ouchi](/lernen/ep1/grafik/optische-taeuschungen-cafe-wall-pinna-und-ouchi).
:::

:::merke[Häufige Positionsbedingungen]
In einem Gitter mit `hoehe` Zeilen und `breite` Spalten (bei quadratischen Mustern beide gleich `n`):

- **Rand:** `i == 0 || i == hoehe - 1 || j == 0 || j == breite - 1`.
- **Hauptdiagonale** (von links oben nach rechts unten): `i == j`.
- **Gegendiagonale** (von rechts oben nach links unten): `i + j == n - 1`.
- **Schachbrett:** `(i + j) % 2 == 0`.
- **Jede k-te Spalte:** `j % k == 0`, **jede k-te Zeile:** `i % k == 0`.
- **Jede k-te Position**, zeilenweise durchgezählt: `(i * breite + j + 1) % k == 0`.
:::

:::achtung[UND statt ODER beim Rand]
Jemand denkt „Rand heißt: am Zeilenrand und am Spaltenrand“ und schreibt:

```java
if ((i == 0 || i == hoehe - 1) && (j == 0 || j == breite - 1)) {
```

Mit `&&` (und) müssen **beide** Teile wahr sein. Das gilt nur in den vier Ecken. Mit Punkten für Leerzeichen ist
die Ausgabe für 4 mal 6:

```text
#....#
......
......
#....#
```

Der Rand ist die Menge der Positionen, bei denen **irgendeiner** der vier Vergleiche stimmt. Das verlangt `||`.
Zusätzlich hat jede Zeile jetzt Leerzeichen am Ende, was in einem zeichengenauen Vergleich ebenfalls auffällt.
:::

:::achtung[Streifen statt Schachbrett]
Für ein Schachbrett schreibt jemand `if (i % 2 == 0)`. Die Bedingung hängt nur von der Zeile ab. Jede Zeile besteht
deshalb aus lauter gleichen Zeichen:

```text
XXXXX
.....
XXXXX
.....
```

Das sind Querstreifen. Für ein Schachbrett muss die Bedingung bei jedem Schritt nach rechts **und** nach unten
umschlagen. Das leistet nur eine Bedingung, in der `i` und `j` beide vorkommen, etwa `(i + j) % 2 == 0`.
:::

```aufgabe
id: gr-bed-x
titel: Ein Kreuz aus Diagonalen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 5;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              if (i == j || i + j == n - 1) {
                  System.out.print("*");
              } else {
                  System.out.print(".");
              }
          }
          System.out.println();
      }
    loesung: |
      *...*
      .*.*.
      ..*..
      .*.*.
      *...*
    fehler:
      - wert: "*....\n.*...\n..*..\n...*.\n....*"
        meldung: 'Das ist nur die Hauptdiagonale `i == j`. Wegen `||` ist auch jede Position mit `i + j == 4` ein Stern.'
      - wert: "*...*\n.*.*.\n.....\n.*.*.\n*...*"
        meldung: 'In der Mitte ist `i = j = 2`. Dort ist `i == j` wahr, also steht ein Stern, auch wenn beide Diagonalen sich treffen.'
hinweise:
  - Markiere zuerst alle Positionen mit `i == j`, dann alle mit `i + j == 4`.
loesung: |
  **Ansatz:** Zwei Positionsbedingungen mit `||`: Hauptdiagonale und Gegendiagonale.
  ---
  Hauptdiagonale: (0,0), (1,1), (2,2), (3,3), (4,4). Gegendiagonale: (0,4), (1,3), (2,2), (3,1), (4,0).
  ---
  Beide kreuzen sich bei (2,2). Es entsteht ein X aus 9 Sternen.
```

```aufgabe
id: gr-bed-streifen
titel: Senkrechte Striche
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 7; j++) {
              if (j % 3 == 0) {
                  System.out.print("|");
              } else {
                  System.out.print("-");
              }
          }
          System.out.println();
      }
    loesung: |
      |--|--|
      |--|--|
      |--|--|
    fehler:
      - wert: "--|--|-\n--|--|-\n--|--|-"
        meldung: 'Auch `j = 0` erfüllt `j % 3 == 0`, denn `0 % 3` ist 0. Die erste Spalte ist schon ein Strich.'
      - wert: "|--|--|"
        meldung: Die äußere Schleife läuft dreimal, und `println()` beendet jede Zeile. Es gibt drei gleiche Zeilen.
hinweise:
  - Die Bedingung hängt nur von `j` ab. Alle Zeilen sehen deshalb gleich aus.
loesung: |
  **Ansatz:** Für `j` von 0 bis 6 prüfen, ob `j` durch 3 teilbar ist.
  ---
  `j` = 0, 3, 6 sind durch 3 teilbar und ergeben `|`. Die anderen ergeben `-`. Eine Zeile lautet `|--|--|`.
  ---
  Die Zeile erscheint dreimal untereinander.
```

```aufgabe
id: gr-bed-rahmen-auswahl
titel: Welche Bedingung zeichnet den Rahmen?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Muster hat `n` Zeilen und `n` Spalten. Am Rand soll `#` stehen, innen ein Leerzeichen. Welche
  Positionsbedingung ist richtig?
teile:
  - typ: auswahl
    optionen:
      - '`i == 0 || i == n - 1 || j == 0 || j == n - 1`'
      - '`(i == 0 || i == n - 1) && (j == 0 || j == n - 1)`'
      - '`i == 0 || i == n || j == 0 || j == n`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mit `&&` müssen Zeile **und** Spalte am Rand sein. Das gilt nur in den vier Ecken.
      - wert: 2
        meldung: '`i` läuft nur bis `n - 1`. Den Wert `n` erreicht es nie, die letzte Zeile und Spalte würden fehlen.'
hinweise:
  - Probiere jede Bedingung an der Position (0, 2) und an der Position (n − 1, 1) aus.
  - 'Die letzte Zeile hat den Index `n - 1`, nicht `n`.'
loesung: |
  **Ansatz:** Der Rand ist erreicht, wenn **irgendeine** der vier Randbedingungen gilt. Das verlangt `||`.
  ---
  Option 2 trifft nur die Ecken. Option 3 prüft auf `n`, aber der größte Index ist `n - 1`.
  ---
  Richtig ist Option 1. Probe mit (0, 2): `i == 0` ist wahr, also `#`.
```

```aufgabe
id: gr-bed-schach-luecke
titel: Ein Schachbrett mit Punkt in der Ecke
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Programm soll ein Schachbrett ausgeben, das links oben mit einem Punkt beginnt:
  ```text
  .#.#
  #.#.
  .#.#
  ```
  Ergänze die Bedingung.
teile:
  - typ: lueckentext
    code: |
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 4; j++) {
              if (___) {
                  System.out.print("#");
              } else {
                  System.out.print(".");
              }
          }
          System.out.println();
      }
    luecken: [["(i + j) % 2 == 1", "(i + j) % 2 != 0", "(j + i) % 2 == 1", "(j + i) % 2 != 0", "(i + j) % 2 > 0"]]
    fehler:
      - wert: ["(i + j) % 2 == 0"]
        meldung: 'Damit stünde links oben ein `#`, denn bei (0, 0) ist die Summe 0 und damit gerade. Hier soll `#` dort stehen, wo die Summe **ungerade** ist.'
      - wert: ["j % 2 == 1"]
        meldung: 'Diese Bedingung hängt nur von der Spalte ab. Alle Zeilen wären gleich, es entstünden senkrechte Streifen `.#.#`.'
hinweise:
  - Bei (0, 0) steht ein Punkt, bei (0, 1) und (1, 0) ein `#`.
  - Welche Eigenschaft hat `i + j` an allen Stellen mit `#`?
loesung: |
  **Ansatz:** Die Felder mit `#` sind (0,1), (0,3), (1,0), (1,2), … Dort ist `i + j` immer ungerade.
  ---
  Ungerade heißt: Rest 1 bei Division durch 2. Bedingung `(i + j) % 2 == 1`.
  ---
  Probe: (0,0) hat Summe 0, also Punkt. (2,1) hat Summe 3, also `#`. Das passt zur dritten Zeile `.#.#`.
```

```aufgabe
id: gr-bed-dreieck-hohl
titel: Ein hohles Dreieck
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus? Schreib Leerzeichen als Leerzeichen.
teile:
  - typ: ausgabe
    code: |
      int n = 5;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j <= i; j++) {
              if (j == 0 || j == i || i == n - 1) {
                  System.out.print("*");
              } else {
                  System.out.print(" ");
              }
          }
          System.out.println();
      }
    loesung: "*\n**\n* *\n*  *\n*****\n"
    fehler:
      - wert: "*\n**\n***\n****\n*****"
        meldung: Innen steht ein Leerzeichen. Ein Stern kommt nur in Spalte 0, in Spalte `i` (die Schräge) oder in der letzten Zeile.
      - wert: "*\n**\n* *\n*  *\n*   *"
        meldung: 'Die letzte Zeile hat `i = n - 1 = 4`. Dort ist `i == n - 1` wahr, also ist die ganze Zeile aus Sternen.'
hinweise:
  - Die innere Schleife läuft nur bis `j <= i`. Die Zeilen sind also verschieden lang.
  - 'Drei Bedingungen mit `||`: linke Kante, Schräge, unterste Zeile.'
loesung: |
  **Ansatz:** Ein Dreieck mit Zeilenlänge `i + 1`, darin eine Positionsbedingung für den Rand.
  ---
  Zeilen 0 und 1 bestehen nur aus Randpositionen: `*` und `**`. In Zeile 2 ist nur `j = 1` innen: `* *`. Zeile 3: `*  *`.
  ---
  Zeile 4 ist die letzte Zeile, also ganz gefüllt: `*****`.
```

```aufgabe
id: gr-bed-jede-kte
titel: Jede dritte Stelle
niveau: 2
lernziel: 3
kompetenz: rechnen
quelle: Ad-hoc-Sammlung 2017W, Task 11 (Raster mit jedem x-ten Feld, als Konsolenmuster nachgebaut)
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 4;
      int k = 3;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              int p = i * n + j;
              if ((p + 1) % k == 0) {
                  System.out.print("X");
              } else {
                  System.out.print("O");
              }
          }
          System.out.println();
      }
    loesung: |
      OOXO
      OXOO
      XOOX
      OOXO
    fehler:
      - wert: "OOXO\nOOXO\nOOXO\nOOXO"
        meldung: '`p` zählt über die Zeilen hinweg weiter: In Zeile 1 beginnt `p` bei 4, nicht wieder bei 0.'
      - wert: "XOOX\nOOXO\nOXOO\nXOOX"
        meldung: 'Die Bedingung ist `(p + 1) % 3 == 0`, nicht `p % 3 == 0`. Das erste `X` steht bei `p = 2`.'
hinweise:
  - '`p = i * n + j` nummeriert die Felder zeilenweise durch: 0, 1, 2, 3 in Zeile 0, dann 4, 5, 6, 7 und so weiter.'
  - Ein `X` steht dort, wo `p + 1` durch 3 teilbar ist, also bei `p` = 2, 5, 8, 11, 14.
gefuehrt:
  - text: Welchen Wert hat `p` bei `i = 1` und `j = 1`?
    teil: { typ: zahl, loesung: "1 * 4 + 1" }
    erklaerung: 'Zeile 0 hat 4 Felder (0 bis 3). Zeile 1 beginnt bei 4, also ist (1, 1) das Feld 5.'
  - text: Steht bei `p = 5` ein `X`? Antworte mit 1 für ja und 0 für nein.
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`(5 + 1) % 3` ist `6 % 3 = 0`. Die Bedingung ist wahr, also `X`.'
  - text: Welche Felder `p` zwischen 0 und 15 bekommen ein `X`?
    erklaerung: 'Alle mit `p + 1` = 3, 6, 9, 12, 15, also `p` = 2, 5, 8, 11, 14.'
  - text: Was gibt Zeile 2 aus (Felder 8 bis 11)?
    teil: { typ: ausgabe, code: "int n = 4;\nint k = 3;\nint i = 2;\nfor (int j = 0; j < n; j++) {\n    int p = i * n + j;\n    if ((p + 1) % k == 0) {\n        System.out.print(\"X\");\n    } else {\n        System.out.print(\"O\");\n    }\n}\nSystem.out.println();", loesung: "XOOX" }
    erklaerung: 'Feld 8 und Feld 11 sind `X`, Feld 9 und 10 sind `O`.'
loesung: |
  **Ansatz:** Die Felder zeilenweise mit `p = i * n + j` nummerieren und für jedes `p` die Bedingung prüfen.
  ---
  `X` bei `p` = 2, 5, 8, 11, 14. Das sind (0,2), (1,1), (2,0), (2,3), (3,2).
  ---
  Ausgabe `OOXO`, `OXOO`, `XOOX`, `OOXO`. Weil 4 nicht durch 3 teilbar ist, wandert das `X` von Zeile zu Zeile.
```

```aufgabe
id: gr-bed-zaehlen
titel: Wie viele Zeichen am Rand?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein hohles Rechteck wie im Beispiel „Ein hohles Rechteck“ hat `hoehe = 5` Zeilen und `breite = 8` Spalten.
  Wie viele Zeichen `#` gibt das Programm aus?
teile:
  - typ: zahl
    loesung: "2 * 8 + 2 * (5 - 2)"
    fehler:
      - wert: "26"
        meldung: Du hast die Ecken doppelt gezählt. Die Ecken gehören schon zur ersten und letzten Zeile.
      - wert: "40"
        meldung: Das sind alle 5 · 8 Positionen. Innen stehen aber Leerzeichen.
hinweise:
  - Zähle zuerst die beiden vollen Zeilen, dann die Randzeichen in den Zeilen dazwischen.
  - 'Zwischen erster und letzter Zeile liegen `hoehe - 2` Zeilen mit je 2 Zeichen.'
loesung: |
  **Ansatz:** Volle Zeilen oben und unten, dazwischen nur je ein Zeichen links und rechts.
  ---
  Oben und unten: 2 · 8 = 16. Dazwischen: 5 − 2 = 3 Zeilen mit je 2 Zeichen, also 6.
  ---
  Summe 16 + 6 = 22. Probe: Alle Positionen 40, innen 3 · 6 = 18 Leerzeichen, 40 − 18 = 22.
```

````aufgabe
id: gr-bed-parallelogramm
titel: Das hohle Parallelogramm programmieren
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 3 (Parallelogramm, gespiegelt nachgebaut)
angabe: |
  Das Programm liest `breite ≥ 2` ein und gibt ein hohles Parallelogramm aus `#` aus, das nach links unten geneigt ist.
  Es hat `breite` Zeilen. Jede Zeile ist eine Stelle **weniger** eingerückt als die vorige, die letzte Zeile beginnt
  ganz links. Die erste und die letzte Zeile bestehen aus `breite` Zeichen `#`. Die Zeilen dazwischen haben ein `#`
  am Anfang, `breite - 2` Leerzeichen und ein `#` am Ende. Für `breite = 4` (Punkte stehen für Leerzeichen):
  ```text
  ...####
  ..#..#
  .#..#
  ####
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Parallelogramm {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int breite = eingabe.nextInt();
              // TODO: hohles Parallelogramm ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Parallelogramm {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int breite = eingabe.nextInt();
              for (int i = 0; i < breite; i++) {
                  for (int j = 0; j < breite - 1 - i; j++) {
                      System.out.print(" ");
                  }
                  for (int j = 0; j < breite; j++) {
                      if (i == 0 || i == breite - 1 || j == 0 || j == breite - 1) {
                          System.out.print("#");
                      } else {
                          System.out.print(" ");
                      }
                  }
                  System.out.println();
              }
          }
      }
    tests:
      - stdin: "4"
        stdout: "   ####\n  #  #\n #  #\n####\n"
        beschreibung: "breite = 4"
      - stdin: "2"
        stdout: " ##\n##\n"
        beschreibung: "kleinste Breite 2: kein Innenraum"
      - stdin: "3"
        stdout: "  ###\n # #\n###\n"
        beschreibung: "breite = 3"
      - stdin: "6"
        stdout: "     ######\n    #    #\n   #    #\n  #    #\n #    #\n######\n"
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 1, meldung: "Jede Zeile hat zwei Teile: breite - 1 - i Leerzeichen zum Einrücken, dann breite Positionen, in denen eine Positionsbedingung zwischen # und Leerzeichen wählt." }
      - { wert: 2, meldung: "Bei breite = 2 hat jede Zeile zwei #. Die erste Zeile ist um 1 eingerückt, die zweite gar nicht." }
hinweise:
  - Trenne die Einrückung (eine Schleife mit `breite - 1 - i` Leerzeichen) vom eigentlichen Rechteck (eine Schleife über `breite` Spalten).
  - 'Für das hohle Rechteck brauchst du die Randbedingung `i == 0 || i == breite - 1 || j == 0 || j == breite - 1`.'
loesung: |
  **Ansatz:** Das Parallelogramm ist ein hohles Quadrat, dessen Zeile `i` um `breite - 1 - i` Stellen eingerückt ist. Die Einrückung nimmt also von `breite - 1` bis 0 ab.
  ---
  ```java
  for (int i = 0; i < breite; i++) {
      for (int j = 0; j < breite - 1 - i; j++) {
          System.out.print(" ");
      }
      for (int j = 0; j < breite; j++) {
          if (i == 0 || i == breite - 1 || j == 0 || j == breite - 1) {
              System.out.print("#");
          } else {
              System.out.print(" ");
          }
      }
      System.out.println();
  }
  ```
  ---
  Probe mit `breite = 3`: zwei Stellen eingerückt `###`, dann eine Stelle eingerückt `# #`, dann ganz links `###`. Die letzte Spalte ist immer `#`, also gibt es keine Leerzeichen am Zeilenende.
````

```reflexion
frage: Wann planst du ein Muster mit einer Zeilentabelle (Leerzeichen, dann Zeichen) und wann mit einer Positionsbedingung? Gibt es Muster, für die beides geht?
antwort: |
  Die Zeilentabelle passt, wenn jede Zeile aus zusammenhängenden Blöcken besteht: erst Leerzeichen, dann eine
  Gruppe gleicher Zeichen. Dreieck, Pyramide, Trapez und Raute sind so gebaut. Die Positionsbedingung passt, wenn
  Zeichen und Lücken in einer Zeile wechseln, wie beim Rahmen, beim Kreuz oder beim Schachbrett. Beides geht zum
  Beispiel bei einem rechtsbündigen Dreieck: Man kann eine feste Zeilenlänge n nehmen und mit der Bedingung
  j >= n - 1 - i entscheiden, ob ein Stern kommt. Die Positionsbedingung ist allgemeiner. Sie ist auch die
  Denkweise für zweidimensionale Arrays, wo man für jede Zelle (i, j) entscheidet, was hineinkommt.
```

## CodeDraw mit Schleifen: Reihen, Raster und Verläufe

```aufgabe
id: gr-cd-check
titel: Der oberste Punkt eines Kreises
niveau: 1
art: check
angabe: |
  `cd.drawCircle(100, 80, 30);` Bei welchem y-Wert liegt der **oberste** Punkt des Kreises?
  (Wiederholung: [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild))
teile:
  - typ: zahl
    loesung: "80 - 30"
    fehler:
      - wert: "110"
        meldung: In CodeDraw wächst y nach **unten**. Der oberste Punkt hat deshalb den kleinsten y-Wert, also Mittelpunkt minus Radius.
      - wert: "80"
        meldung: 80 ist der y-Wert des Mittelpunkts. Bei Kreisen ist (x, y) der Mittelpunkt, der Rand liegt einen Radius entfernt.
loesung: |
  Bei `drawCircle` ist (100, 80) der Mittelpunkt, der Radius ist 30.
  ---
  Oben heißt kleineres y: 80 − 30 = 50.
```

In [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild) hast du jede Form mit festen Zahlen
gezeichnet: ein Haus, eine Ampel, eine Zielscheibe. Für zehn Quadrate in einer Reihe müsstest du so zehn Zeilen mit
zehn ausgerechneten x-Werten schreiben. Für ein Raster aus 10 mal 10 Quadraten wären es hundert. Das macht niemand
von Hand. Stattdessen lässt du eine Schleife die Koordinaten **berechnen**.

Der Trick ist derselbe wie bei den Konsolenmustern. Dort hast du aus der Zeilennummer `i` die Anzahl der Zeichen
berechnet. Hier berechnest du aus der Nummer `i` einer Form ihre Position. Zwischen zwei Nachbarn liegt immer
derselbe Schritt: die Größe einer Form plus der Abstand zur nächsten.

:::definition[Koordinatenformel]
Formen der Größe `s` stehen in einer Reihe. Vor der ersten bleibt ein **Rand** `rand` frei, zwischen zwei
Formen ein **Abstand** `abstand`. Dann hat die Form mit der Nummer `i` (ab 0) die linke Kante

```java
double x = rand + i * (s + abstand);
```

Der Ausdruck `s + abstand` ist der **Schritt** von einer Form zur nächsten. In einem Raster gilt dieselbe
Formel für `y` mit der Zeilennummer.
:::

**Beispiel:** Rand 20, Größe 50, Abstand 10. Die Formen beginnen bei x = 20, 80, 140, … Probe für `i = 2`:
`20 + 2 · 60 = 140`.

**Nichtbeispiel:** `x = i * s` ist **keine** vollständige Koordinatenformel. Sie lässt Rand und Abstand weg. Die
erste Form klebt am linken Fensterrand, und alle Formen berühren sich ohne Lücke.

```aufgabe
id: gr-cd-check-formel
titel: Die Koordinatenformel anwenden
niveau: 1
art: check
angabe: |
  Rand 20, Größe 50, Abstand 10. Bei welchem x-Wert beginnt die Form mit der Nummer `i = 3`?
teile:
  - typ: zahl
    loesung: "20 + 3 * (50 + 10)"
    fehler:
      - wert: "170"
        meldung: Der Schritt ist Größe **plus** Abstand, also 60, nicht 50.
      - wert: "260"
        meldung: 'Die Form mit `i = 3` ist die vierte. Vor ihr liegen drei Schritte, nicht vier.'
loesung: |
  Koordinatenformel `rand + i * (s + abstand)`.
  ---
  `20 + 3 · 60 = 200`.
```

:::beispiel[Quadrate gleichmäßig in einer Reihe verteilen]
Dieses Beispiel folgt einer Aufgabe aus der Ad-hoc-Sammlung, einer Sammlung kurzer Übungsaufgaben aus früheren
Jahrgängen. Die Zahlen sind eigene. Ein Fenster ist 400 Pixel breit und 100 Pixel hoch. Darin sollen `n = 5` Quadrate mit
Seite 50 nebeneinander stehen. Der Rand links und rechts soll **genauso groß** sein wie der Abstand zwischen den
Quadraten.

**Abstand berechnen.** Nebeneinander liegen 5 Quadrate und 6 Lücken (eine vor dem ersten, vier dazwischen, eine
nach dem letzten). Zusammen füllen sie die Breite:

`5 · 50 + 6 · abstand = 400`, also `abstand = (400 − 250) / 6 = 25`.

```java
CodeDraw cd = new CodeDraw(400, 100);
int n = 5;
int s = 50;
int abstand = (400 - n * s) / (n + 1);
cd.setColor(Palette.BLUE);
for (int i = 0; i < n; i++) {
    cd.fillSquare(abstand + i * (s + abstand), 25, s);
}
cd.show();
```

- Zeile 4 rechnet den Abstand aus der Breite aus, statt ihn hinzuschreiben. Ändert man `n`, passt er sich an.
- Zeile 5 setzt die Farbe **einmal vor** der Schleife. Alle Quadrate haben dieselbe Farbe.
- Zeile 7 ist die Koordinatenformel mit `rand = abstand`. Der y-Wert 25 setzt die Quadrate in die Mitte der Höhe: `(100 − 50) / 2 = 25`.

|`i`|x = 25 + i · 75|rechte Kante|
|---|---|---|
|0|25|75|
|1|100|150|
|2|175|225|
|3|250|300|
|4|325|375|

**Probe:** Nach dem letzten Quadrat bleiben 400 − 375 = 25 Pixel. Der rechte Rand ist so groß wie der linke.
:::

```aufgabe
id: gr-cd-koordinaten-ausgabe
titel: Koordinaten ausgeben statt zeichnen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: Statt zu zeichnen, gibt das Programm die berechneten x-Werte aus. Was steht auf der Konsole? Ein Leerzeichen am Zeilenende darfst du weglassen.
teile:
  - typ: ausgabe
    code: |
      int rand = 10;
      int s = 30;
      int abstand = 5;
      for (int i = 0; i < 4; i++) {
          int x = rand + i * (s + abstand);
          System.out.print(x + " ");
      }
      System.out.println();
    trim: true
    loesung: "10 45 80 115 \n"
    fehler:
      - wert: "10 40 70 100"
        meldung: Der Schritt ist Seite plus Abstand, also 35, nicht nur 30.
      - wert: "45 80 115 150"
        meldung: 'Die Schleife beginnt bei `i = 0`. Die erste Form liegt deshalb genau beim Rand, x = 10.'
hinweise:
  - Der Schritt ist `s + abstand = 35`.
loesung: |
  **Ansatz:** Für `i` = 0 bis 3 die Formel `10 + i * 35` auswerten.
  ---
  Werte: 10, 45, 80, 115. Nach jedem folgt ein Leerzeichen.
  ---
  Solche Testausgaben sind ein guter Trick: Bevor du zeichnest, prüfst du die Koordinaten auf der Konsole.
```

Für ein **Raster** aus mehreren Reihen brauchst du zwei verschachtelte Schleifen. Die äußere zählt die Zeilen `i`,
die innere die Spalten `j`. Die Spalte bestimmt `x`, die Zeile bestimmt `y`. Das ist dieselbe Denkweise wie bei den
Positionsbedingungen in
[5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett).

Bei Kreisen gibt es eine Besonderheit. CodeDraw platziert sie über den **Mittelpunkt**. Ein Kreis, der eine Zelle
der Breite `c` füllt, hat den Mittelpunkt `j * c + c / 2` und den Radius `c / 2`.

Farben kannst du auch berechnen. Jede Bildschirmfarbe besteht aus drei Anteilen: Rot, Grün und Blau, jeder von 0
bis 255. Sind alle drei gleich, entsteht ein Grauton.

:::definition[Farbe aus Zahlen]
`Palette.fromRGB(rot, gruen, blau)` erzeugt eine Farbe aus drei ganzen Zahlen von 0 bis 255. Man setzt sie wie jede
andere Farbe mit `cd.setColor(...)`.
:::

**Beispiel:** `Palette.fromRGB(128, 128, 128)` ist ein mittleres Grau, `Palette.fromRGB(0, 0, 0)` ist Schwarz und
`Palette.fromRGB(255, 255, 255)` ist Weiß.

**Nichtbeispiel:** `Palette.fromRGB(300, 0, 0)` ist **keine** Farbe. 300 liegt außerhalb von 0 bis 255. Das Programm
bricht beim Ausführen mit einer `IllegalArgumentException` ab, also mit einem Laufzeitfehler, der einen ungültigen
Wert meldet. Berechnete Farbwerte musst du deshalb so bauen, dass
sie diesen Bereich nie verlassen.

:::beispiel[Konzentrische Kreise mit Grauverlauf]
Nach einer Aufgabe aus der Ad-hoc-Sammlung, mit eigenen Zahlen: Fünf Kreise mit demselben Mittelpunkt, außen hell,
innen dunkel. Der äußerste hat
Radius 150 und den Grauwert 230. Jeder weitere ist 30 Pixel kleiner und 50 Stufen dunkler.

```java
CodeDraw cd = new CodeDraw(300, 300);
for (int i = 0; i < 5; i++) {
    int r = 150 - 30 * i;
    int g = 230 - 50 * i;
    cd.setColor(Palette.fromRGB(g, g, g));
    cd.fillCircle(150, 150, r);
}
cd.show();
```

|`i`|Radius|Grauwert|
|---|---|---|
|0|150|230|
|1|120|180|
|2|90|130|
|3|60|80|
|4|30|30|

- Die Farbe wird **in** der Schleife gesetzt, weil jeder Kreis eine andere bekommt.
- Der größte Kreis wird zuerst gezeichnet. Jeder kleinere liegt darüber und lässt vom vorigen einen Ring sichtbar.
- **Probe:** Der kleinste Grauwert ist 30, also nie unter 0. Der kleinste Radius ist 30, also nie 0 oder negativ.
:::

:::merke[Rezept: Formen mit Schleifen anordnen]
1. Eine Form von Hand skizzieren und ihre Größe `s` festlegen.
2. Rand und Abstand bestimmen, notfalls aus der Fensterbreite: `abstand = (breite - n * s) / (n + 1)`.
3. Koordinatenformel `rand + i * (s + abstand)` für x, im Raster dasselbe mit `j` für x und `i` für y.
4. Bei Kreisen die Hälfte der Zelle addieren, weil (x, y) der Mittelpunkt ist.
5. Farben, die sich ändern, **in** der Schleife setzen, feste Farben **vor** der Schleife.
6. Probe mit der ersten und der letzten Form: Liegen beide vollständig im Fenster?
:::

```aufgabe
id: gr-cd-x
titel: Wo beginnt das vierte Quadrat?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Quadrate mit Seite 40 stehen in einer Reihe. Der Rand links ist 30, der Abstand zwischen zwei Quadraten 20.
  Bei welchem x-Wert liegt die linke Kante des **vierten** Quadrats?
teile:
  - typ: zahl
    loesung: "30 + 3 * (40 + 20)"
    fehler:
      - wert: "270"
        meldung: 'Das vierte Quadrat hat die Nummer `i = 3`, weil die Zählung bei 0 beginnt. Du hast mit `i = 4` gerechnet.'
      - wert: "150"
        meldung: 'Der Schritt von einem Quadrat zum nächsten ist Seite **plus** Abstand, also 60, nicht 40.'
      - wert: "180"
        meldung: Du hast den Rand vergessen. Das erste Quadrat beginnt nicht bei 0, sondern bei 30.
hinweise:
  - 'Koordinatenformel: `rand + i * (s + abstand)`. Das erste Quadrat hat `i = 0`.'
loesung: |
  **Ansatz:** Koordinatenformel mit `rand = 30`, `s = 40`, `abstand = 20` und `i = 3`.
  ---
  `30 + 3 · (40 + 20) = 30 + 180 = 210`.
  ---
  Probe: Die Quadrate beginnen bei 30, 90, 150 und 210. Das vierte ist 210.
```

:::achtung[Die Nummer statt der Koordinate]
```java
for (int i = 0; i < 5; i++) {
    cd.fillSquare(i, 25, 50);
}
```

Hier wird die Nummer `i` direkt als x-Wert benutzt. Die fünf Quadrate beginnen bei x = 0, 1, 2, 3 und 4. Sie liegen
fast genau übereinander, und man sieht ein einziges, etwas breiteres Quadrat. Die Nummer einer Form ist keine
Position. Erst die Koordinatenformel macht daraus eine: `abstand + i * (s + abstand)`.
:::

:::achtung[Ganzzahldivision im Farbverlauf]
Zehn Quadrate sollen von Schwarz (0) bis fast Weiß gehen. Jemand schreibt `int g = 255 / n * i;` mit `n = 10`. Zuerst
wird `255 / 10` gerechnet, das ist als Ganzzahldivision 25. Für `i = 9` ergibt sich `25 · 9 = 225`. Richtig wäre
`255 · 9 / 10 = 229`. Bei einem elften Quadrat mit `i = 10` kämen nur 250 statt 255 heraus, also nie ganz Weiß. Ganz allgemein gilt: Bei
`int`-Rechnungen **zuerst multiplizieren, dann teilen**. Dann geht nur am Schluss ein Rest verloren.
:::

```aufgabe
id: gr-cd-abstand
titel: Gleiche Lücken für sechs Quadrate
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  In ein 400 Pixel breites Fenster sollen 6 Quadrate mit Seite 40 nebeneinander. Rand links, Rand rechts und alle
  Abstände dazwischen sollen gleich groß sein. Wie groß ist dieser Abstand **genau**? (Auf zwei Nachkommastellen.)
teile:
  - typ: zahl
    loesung: "(400 - 6 * 40) / 7"
    toleranz: 0.01
    fehler:
      - wert: "22"
        meldung: 'Das ist das Ergebnis der Ganzzahldivision `160 / 7`. Genau ist der Abstand nicht ganzzahlig. Rechne mit Kommazahlen.'
      - wert: "26.67"
        meldung: 'Bei 6 Quadraten gibt es 7 Lücken: eine vor dem ersten, fünf dazwischen und eine nach dem letzten. Du hast durch 6 geteilt.'
hinweise:
  - Zähle die Lücken. Bei n Quadraten mit Rand auf beiden Seiten sind es n + 1.
  - Was von 400 Pixeln nach den Quadraten übrig bleibt, wird gleichmäßig auf die Lücken verteilt.
loesung: |
  **Ansatz:** Quadrate und Lücken füllen zusammen die Breite: `6 · 40 + 7 · abstand = 400`.
  ---
  Freier Platz: 400 − 240 = 160 Pixel, verteilt auf 7 Lücken.
  ---
  `abstand = 160 / 7 ≈ 22,86`. In Java braucht man dafür `double`, etwa `(400 - 6 * 40) / 7.0`. Mit `int` gingen je Lücke 0,86 Pixel verloren, rechts wären 6 Pixel zu viel frei.
```

````aufgabe
id: gr-cd-reihe
titel: n Quadrate mit gleichen Lücken
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 3 (nachgebaut)
angabe: |
  Das Programm liest eine Zahl `n` (1 bis 9) ein. Es zeichnet in einem Fenster mit 400 mal 120 Pixeln `n`
  **ausgefüllte blaue** Quadrate (`Palette.BLUE`) mit Seite 40 nebeneinander. Die Oberkante liegt bei y = 40.
  Rand links, Rand rechts und alle Abstände zwischen den Quadraten sind gleich groß. Rechne den Abstand mit
  Kommazahlen (`double`), damit die Lücken für jedes `n` genau gleich sind. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;
      import java.util.Scanner;

      public class Reihe {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              CodeDraw cd = new CodeDraw(400, 120);
              // TODO: n Quadrate zeichnen
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;
      import java.util.Scanner;

      public class Reihe {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              CodeDraw cd = new CodeDraw(400, 120);
              double abstand = (400 - n * 40) / (n + 1.0);
              cd.setColor(Palette.BLUE);
              for (int i = 0; i < n; i++) {
                  cd.fillSquare(abstand + i * (40 + abstand), 40, 40);
              }
              cd.show();
          }
      }
    tests:
      - { stdin: "5", zeichnung: true, beschreibung: "n = 5" }
      - { stdin: "1", zeichnung: true, beschreibung: "n = 1: ein Quadrat in der Mitte" }
      - { stdin: "8", zeichnung: true, versteckt: true }
    fehler:
      - { wert: 1, meldung: "Bei n = 5 gibt es 6 gleich große Lücken. Rechnest du den Abstand mit int, wird er 33 statt 33,33, und die hinteren Quadrate rutschen um mehr als ein Pixel nach links." }
      - { wert: 2, meldung: "Bei n = 1 liegt das eine Quadrat genau in der Mitte: Abstand (400 − 40) / 2 = 180." }
hinweise:
  - 'Abstand: Was nach den Quadraten von 400 Pixeln übrig bleibt, verteilt sich auf `n + 1` Lücken. Schreib `n + 1.0`, damit Java mit `double` teilt.'
  - 'Koordinatenformel mit `rand = abstand`: `abstand + i * (40 + abstand)`. Die Farbe setzt du einmal vor der Schleife.'
loesung: |
  **Ansatz:** Gleich große Lücken: `n · 40 + (n + 1) · abstand = 400`. Die Quadrate stehen bei `abstand + i * (40 + abstand)`.
  ---
  ```java
  double abstand = (400 - n * 40) / (n + 1.0);
  cd.setColor(Palette.BLUE);
  for (int i = 0; i < n; i++) {
      cd.fillSquare(abstand + i * (40 + abstand), 40, 40);
  }
  ```
  ---
  `n * 40` ist noch ein `int`. Erst `n + 1.0` macht die Division zu einer Gleitkommadivision.
  ---
  Probe für `n = 5`: Abstand 33,33. Das letzte Quadrat beginnt bei 33,33 + 4 · 73,33 = 326,67 und endet bei 366,67. Rechts bleiben 33,33 Pixel frei.
````

```aufgabe
id: gr-cd-konzentrisch
titel: Radien und Grauwerte
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: Das Programm gibt Radius und Grauwert konzentrischer Kreise aus, statt sie zu zeichnen. Was steht auf der Konsole?
teile:
  - typ: ausgabe
    code: |
      int n = 4;
      for (int i = 0; i < n; i++) {
          int r = 120 - i * 120 / n;
          int g = 200 - i * 50;
          System.out.println(r + " " + g);
      }
    loesung: |
      120 200
      90 150
      60 100
      30 50
    fehler:
      - wert: "120 200\n90 150\n60 100\n30 50\n0 0"
        meldung: Die Schleife läuft nur für `i` = 0 bis 3. Einen Kreis mit Radius 0 gibt es nicht.
      - wert: "30 200\n0 150\n-30 100\n-60 50"
        meldung: 'Punkt vor Strich: Java rechnet nicht `(120 - i * 120) / n`. Zuerst wird `i * 120 / n` ausgerechnet, erst dann wird das Ergebnis von 120 abgezogen.'
hinweise:
  - '`i * 120 / n` wird von links nach rechts gerechnet: erst `i * 120`, dann durch 4.'
  - Der Radius wird je Schritt um 30 kleiner, der Grauwert um 50.
gefuehrt:
  - text: Welchen Wert hat `i * 120 / n` für `i = 1`?
    teil: { typ: zahl, loesung: "120 / 4" }
    erklaerung: '`1 · 120 = 120`, dann `120 / 4 = 30`.'
  - text: Welchen Radius hat also der Kreis mit `i = 1`?
    teil: { typ: zahl, loesung: "90" }
    erklaerung: '`120 - 30 = 90`.'
  - text: Welchen Grauwert hat der Kreis mit `i = 3`?
    teil: { typ: zahl, loesung: "200 - 3 * 50" }
    erklaerung: '`200 - 150 = 50`, ein sehr dunkles Grau.'
  - text: In welcher Reihenfolge muss man die Kreise zeichnen, damit alle sichtbar sind?
    erklaerung: Vom größten zum kleinsten, also genau in der Reihenfolge der Schleife. Sonst verdeckt ein großer Kreis die kleinen.
loesung: |
  **Ansatz:** Für `i` = 0 bis 3 Radius und Grauwert ausrechnen.
  ---
  Radien: 120, 120 − 30 = 90, 120 − 60 = 60, 120 − 90 = 30. Grauwerte: 200, 150, 100, 50.
  ---
  Ausgabe vier Zeilen `120 200`, `90 150`, `60 100`, `30 50`. Die Schleife zeichnet also vom größten, hellsten zum kleinsten, dunkelsten Kreis.
```

```aufgabe
id: gr-cd-aussagen
titel: Farben und Reihenfolge in Schleifen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  ```java
  CodeDraw cd = new CodeDraw(300, 300);
  cd.setColor(Palette.RED);
  for (int i = 0; i < 3; i++) {
      cd.fillCircle(150, 150, 50 + 40 * i);
      cd.setColor(Palette.BLUE);
  }
  cd.show();
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der kleinste Kreis ist rot, die beiden anderen sind blau.
        richtig: true
        erklaerung: 'Beim ersten Kreis gilt noch Rot. Danach wird Blau gesetzt und bleibt für alle weiteren Kreise.'
      - text: Am Ende ist im Fenster ein roter Kreis zu sehen.
        richtig: false
        erklaerung: 'Die Kreise werden größer (50, 90, 130). Der zweite, blaue Kreis überdeckt den roten vollständig.'
      - text: Am Ende sieht man nur eine blaue Scheibe mit Radius 130.
        richtig: true
        erklaerung: 'Der letzte Kreis ist der größte und überdeckt alle früheren.'
      - text: Setzt man `cd.setColor(Palette.BLUE);` vor `fillCircle` in die Schleife, ist der kleinste Kreis blau.
        richtig: true
        erklaerung: 'Dann gilt Blau schon beim ersten Kreis.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'In welcher Reihenfolge werden die Kreise gezeichnet, und wie groß sind sie? Kann der rote kleine Kreis unter einem größeren noch sichtbar sein?'
hinweise:
  - Schreib für jeden Durchlauf Radius und aktuelle Farbe auf.
  - Später Gezeichnetes liegt oben. Ein größerer gefüllter Kreis verdeckt einen kleineren mit demselben Mittelpunkt ganz.
loesung: |
  **Ansatz:** Durchläufe verfolgen: Radius 50 in Rot, dann 90 in Blau, dann 130 in Blau.
  ---
  Aussage 1 ist richtig. Der Wechsel auf Blau kommt erst nach dem ersten Kreis.
  ---
  Die Kreise werden größer, also verdeckt jeder den vorigen. Sichtbar bleibt nur die blaue Scheibe mit Radius 130. Aussage 2 falsch, 3 richtig, 4 richtig.
```

````aufgabe
id: gr-cd-raster
titel: Kreise und Quadrate im Raster
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 11 (nachgebaut)
angabe: |
  Das Programm liest zwei Zahlen `n` und `k` ein (beide mindestens 1). Das Fenster ist 400 mal 400 Pixel groß und
  wird in `n` mal `n` gleich große quadratische Zellen geteilt. Die Zellen werden zeilenweise ab 0 nummeriert
  (`p = i * n + j`).

  - In jede Zelle kommt ein schwarzer Kreisumriss (`Palette.BLACK`, `drawCircle`) mit dem Zellmittelpunkt als Mittelpunkt und einem Drittel der Zellbreite als Radius.
  - **Ausnahme:** Ist `(p + 1) % k == 0`, kommt stattdessen ein ausgefülltes rotes Quadrat (`Palette.RED`) in die Zelle. Seine Seite ist die halbe Zellbreite, und es liegt genau in der Mitte der Zelle.

  Rechne die Zellbreite mit `double`. Die Linienbreite bleibt 1. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;
      import java.util.Scanner;

      public class Raster {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              int k = eingabe.nextInt();
              CodeDraw cd = new CodeDraw(400, 400);
              // TODO: Raster zeichnen
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;
      import java.util.Scanner;

      public class Raster {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              int k = eingabe.nextInt();
              CodeDraw cd = new CodeDraw(400, 400);
              double c = 400.0 / n;
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < n; j++) {
                      int p = i * n + j;
                      if ((p + 1) % k == 0) {
                          cd.setColor(Palette.RED);
                          cd.fillSquare(j * c + c / 4, i * c + c / 4, c / 2);
                      } else {
                          cd.setColor(Palette.BLACK);
                          cd.drawCircle(j * c + c / 2, i * c + c / 2, c / 3);
                      }
                  }
              }
              cd.show();
          }
      }
    tests:
      - { stdin: "3 2", zeichnung: true, beschreibung: "n = 3, k = 2: Schachbrett" }
      - { stdin: "4 3", zeichnung: true, beschreibung: "n = 4, k = 3" }
      - { stdin: "1 5", zeichnung: true, beschreibung: "eine einzige Zelle, kein Quadrat" }
      - { stdin: "7 4", zeichnung: true, versteckt: true }
    fehler:
      - { wert: 1, meldung: "Prüfe die Mittelpunkte: Kreise werden über den Mittelpunkt gezeichnet, also j * c + c / 2. Das Quadrat beginnt eine Viertelzelle nach dem Zellrand, j * c + c / 4." }
      - { wert: 2, meldung: "Zählt p über die Zeilen hinweg weiter? In Zeile 1 beginnt p bei n, nicht wieder bei 0." }
hinweise:
  - 'Zellbreite `c = 400.0 / n`. Die Zelle `(i, j)` beginnt links oben bei `(j * c, i * c)`.'
  - 'Kreis: Mittelpunkt `(j * c + c / 2, i * c + c / 2)`, Radius `c / 3`. Quadrat: linke obere Ecke `(j * c + c / 4, i * c + c / 4)`, Seite `c / 2`. Setze vor jeder Form die passende Farbe.'
loesung: |
  **Ansatz:** Zwei verschachtelte Schleifen über Zeilen `i` und Spalten `j`, Zellbreite `c`, Positionsbedingung mit der Zellnummer `p`.
  ---
  ```java
  double c = 400.0 / n;
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          int p = i * n + j;
          if ((p + 1) % k == 0) {
              cd.setColor(Palette.RED);
              cd.fillSquare(j * c + c / 4, i * c + c / 4, c / 2);
          } else {
              cd.setColor(Palette.BLACK);
              cd.drawCircle(j * c + c / 2, i * c + c / 2, c / 3);
          }
      }
  }
  ```
  ---
  Das Quadrat liegt mittig, weil links und rechts je `c / 4` frei bleibt: `c / 4 + c / 2 + c / 4 = c`.
  ---
  Probe mit `n = 3`, `k = 2`: Zellen 1, 3, 5, 7 bekommen Quadrate. Das ergibt ein Schachbrettmuster wie im Bild `O X O / X O X / O X O` der Ad-hoc-Aufgabe.
````

````aufgabe
id: gr-cd-verlauf
titel: Ein Farbverlauf über das ganze Fenster
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 8 (nachgebaut mit eigenen Maßen)
angabe: |
  Zeichne in einem Fenster mit 400 mal 400 Pixeln 8 mal 8 ausgefüllte Quadrate mit Seite 50, die das Fenster
  lückenlos füllen. Rechts oben soll Schwarz sein, links unten Weiß, dazwischen ein gleichmäßiger Grauverlauf.

  Genauer: Zeile `i` und Spalte `j` laufen von 0 bis 7, Zeile 0 ist oben. Das Quadrat `(i, j)` ist `s = i + (7 - j)`
  Schritte von der Ecke rechts oben entfernt. Sein Grauwert ist `g = s * 255 / 14` als Ganzzahlrechnung, also zuerst
  multiplizieren, dann teilen. Die Farbe ist `Palette.fromRGB(g, g, g)`. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Verlauf {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              // TODO: 64 Quadrate mit Grauverlauf
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Verlauf {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              for (int i = 0; i < 8; i++) {
                  for (int j = 0; j < 8; j++) {
                      int g = (i + 7 - j) * 255 / 14;
                      cd.setColor(Palette.fromRGB(g, g, g));
                      cd.fillSquare(j * 50, i * 50, 50);
                  }
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "64 Quadrate mit den richtigen Grauwerten" }
    fehler:
      - { wert: 1, meldung: "Prüfe zwei Ecken. Rechts oben (i = 0, j = 7) muss g = 0 sein, links unten (i = 7, j = 0) g = 255. Steht bei dir 255 / 14 vor der Multiplikation, geht durch die Ganzzahldivision Genauigkeit verloren." }
hinweise:
  - Zwei verschachtelte Schleifen über `i` (Zeilen) und `j` (Spalten). Die linke obere Ecke des Quadrats ist `(j * 50, i * 50)`.
  - Berechne `g` in der inneren Schleife und setze die Farbe vor jedem Quadrat neu.
loesung: |
  **Ansatz:** Raster aus 8 mal 8 Zellen der Größe 50, Rand und Abstand 0. Der Grauwert hängt über `s = i + 7 - j` von der Position ab.
  ---
  ```java
  for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
          int g = (i + 7 - j) * 255 / 14;
          cd.setColor(Palette.fromRGB(g, g, g));
          cd.fillSquare(j * 50, i * 50, 50);
      }
  }
  ```
  ---
  `s` reicht von 0 (rechts oben) bis 7 + 7 = 14 (links unten). Daher teilt man durch 14: Der größte Wert wird `14 · 255 / 14 = 255`, der kleinste 0. Alle Farbwerte bleiben im erlaubten Bereich.
  ---
  Probe: Quadrat (3, 4) hat `s = 3 + 3 = 6` und `g = 1530 / 14 = 109`, ein dunkles Grau. Mit `255 / 14 * s` wäre es `18 · 6 = 108`, und links unten käme nur `18 · 14 = 252` heraus.
````

```reflexion
frage: Warum setzt man bei den konzentrischen Kreisen die Farbe in der Schleife, bei der Reihe aus blauen Quadraten aber vor der Schleife? Was wäre falsch daran, sie bei den Quadraten in die Schleife zu schreiben?
antwort: |
  Die Farbe gilt ab dem Aufruf von setColor für alle folgenden Formen. Haben alle Quadrate dieselbe Farbe, genügt ein
  Aufruf vor der Schleife. Bei den Kreisen ändert sich die Farbe mit jedem Durchlauf, also muss sie in jedem Durchlauf
  neu gesetzt werden, und zwar vor fillCircle. Bei den Quadraten wäre setColor in der Schleife nicht falsch, das Bild
  bliebe gleich. Es würde nur fünfmal dieselbe Farbe gesetzt. Für die Lesbarkeit ist es besser, Dinge, die sich nicht
  ändern, vor die Schleife zu ziehen. Dann sieht man auf einen Blick, was in der Schleife variiert.
```

## Zeichnen nach Maßskizze

```aufgabe
id: gr-mass-check
titel: Die rechte Kante eines Rechtecks
niveau: 1
art: check
angabe: |
  `cd.drawRectangle(50, 80, 120, 60);` Bei welchem x-Wert liegt die **rechte** Kante?
  (Wiederholung: [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild))
teile:
  - typ: zahl
    loesung: "50 + 120"
    fehler:
      - wert: "110"
        meldung: 'Der vierte Wert (60) ist die Höhe. Für die rechte Kante zählt die Breite, der dritte Wert.'
      - wert: "120"
        meldung: 120 ist die Breite, keine Koordinate. Die Kante liegt 120 Pixel rechts von der linken Kante bei 50.
loesung: |
  Die Werte sind x = 50, y = 80, Breite 120, Höhe 60. (50, 80) ist die linke obere Ecke.
  ---
  Rechte Kante: 50 + 120 = 170.
```

In Aufgabe 4 von Aufgabenblatt 1 bekommst du kein Programm, sondern ein **Bild mit Maßangaben**. Neben den Formen
stehen Pfeile mit Zahlen wie „100px“ oder „40px“. Jede Zahl ist ein **Abstand**: von einer Kante zur nächsten, vom
Fensterrand zu einer Form oder die Breite einer Form. Koordinaten stehen fast nie direkt im Bild. Deine Aufgabe ist,
aus den Abständen die Koordinaten zu berechnen, die CodeDraw braucht.

:::definition[Maßkette]
Eine **Maßkette** ist eine Folge von Abständen entlang einer Richtung, die bei einem Bezugspunkt mit bekannter
Koordinate beginnt, meist beim Fensterrand mit x = 0 oder y = 0. Die Koordinate eines Punkts ist die **Summe aller
Abstände** vom Bezugspunkt bis zu diesem Punkt.
:::

**Beispiel:** Von links gemessen: 40 Pixel Rand, dann ein Quadrat mit 100 Pixeln, dann 20 Pixel Lücke. Die Lücke
endet bei x = 40 + 100 + 20 = 160. Dort beginnt die nächste Form.

**Nichtbeispiel:** Steht im Bild „30 Pixel vom **rechten** Rand“, gehört diese Zahl **nicht** zu einer Kette, die links
beginnt. Sie wird nicht addiert, sondern vom rechten Rand abgezogen. Bei einem Fenster mit 400 Pixeln ist die Stelle
x = 400 − 30 = 370.

Für die roten Formen in der Blattaufgabe brauchst du einen Befehl, der in Kapitel 1 noch nicht vorkam:
`cd.fillEllipse(x, y, rx, ry)` zeichnet eine ausgefüllte **Ellipse**, `drawEllipse` nur ihren Umriss. Eine Ellipse
ist ein in die Länge gezogener Kreis. Wie beim Kreis ist (x, y) der **Mittelpunkt**. `rx` ist der waagrechte Radius,
also die halbe Breite. `ry` ist der senkrechte Radius, die halbe Höhe.

:::beispiel[Quadrat, Diagonalen und Ellipse nach Maßen]
Die Skizze zeigt einen Ausschnitt eines Fensters mit 400 mal 400 Pixeln. Die Zahlen sind Pixel.

```text
x = 0
|<- 40 ->|<---- 120 ---->|<-20->|<-40->|
         +---------------+      .----.        ---  y = 220 (oberer Rand des Quadrats)
         | \           / |      |    |         ^
         |   \       /   |      |    |         |
         |     \   /     |      |rot |        120
         |     /   \     |      |    |         |
         |   /       \   |      |    |         v
         | /           \ |      '----'        ---
         +---------------+
            grau, Diagonalen gelb      Ellipse so hoch wie das Quadrat
```

**Waagrecht** rechnen wir die Maßkette von links:

- Quadrat: linke Kante bei 40, rechte Kante bei 40 + 120 = 160.
- Ellipse: linke Kante bei 160 + 20 = 180, rechte Kante bei 180 + 40 = 220. Der Mittelpunkt liegt in der Mitte: 180 + 20 = 200. Der waagrechte Radius ist 40 / 2 = 20.

**Senkrecht:** Das Quadrat beginnt bei y = 220 und endet bei 220 + 120 = 340. Die Ellipse ist genauso hoch, ihr
Mittelpunkt liegt bei 220 + 60 = 280, und ihr senkrechter Radius ist 120 / 2 = 60.

```java
cd.setColor(Palette.GRAY);
cd.fillSquare(40, 220, 120);
cd.setColor(Palette.YELLOW);
cd.drawLine(40, 220, 160, 340);
cd.drawLine(160, 220, 40, 340);
cd.setColor(Palette.RED);
cd.fillEllipse(200, 280, 20, 60);
```

- Die Diagonalen verbinden gegenüberliegende Ecken: links oben (40, 220) mit rechts unten (160, 340), rechts oben (160, 220) mit links unten (40, 340).
- Die gelben Linien kommen **nach** dem grauen Quadrat, sonst würde das Quadrat sie verdecken.
- **Probe:** Der höchste Punkt der Ellipse liegt bei 280 − 60 = 220, also auf Höhe der Oberkante des Quadrats.
:::

Im Code darfst du die Rechnung stehen lassen, etwa `cd.fillEllipse(200, 280, 20, 60)` als
`cd.fillEllipse(160 + 20 + 20, 220 + 60, 20, 60)`. Viele schreiben die Summen bewusst hin. Im Feedbackgespräch kannst du dann
zeigen, aus welchen Maßen jede Zahl stammt.

Die Blattaufgabe verlangt außerdem, dass du eine Gruppe von grünen und orangen Linien mit **einer einzigen Schleife**
zeichnest. Wir üben das an einem eigenen Beispiel: Die Linien beginnen alle im selben Punkt und enden an gleichmäßig
verteilten Punkten einer Kante. So
entsteht ein **Linienfächer**.

:::beispiel[Ein Linienfächer in zwei Farben]
Acht Linien beginnen im Punkt (250, 350). Sie enden auf der Senkrechten x = 350, die erste bei y = 50, jede weitere
40 Pixel tiefer. Linien mit gerader Nummer sind grün, die anderen orange.

```java
cd.setLineWidth(2);
for (int k = 0; k < 8; k++) {
    if (k % 2 == 0) {
        cd.setColor(Palette.GREEN);
    } else {
        cd.setColor(Palette.ORANGE);
    }
    cd.drawLine(250, 350, 350, 50 + 40 * k);
}
```

|`k`|Endpunkt|Farbe|
|---|---|---|
|0|(350, 50)|grün|
|1|(350, 90)|orange|
|2|(350, 130)|grün|
|…|…|…|
|7|(350, 330)|orange|

- Der Startpunkt ist fest, nur der Endpunkt hängt von `k` ab. Das ist wieder eine Koordinatenformel: Start 50, Schritt 40.
- Die Farbe wechselt mit dem Rest `k % 2`, also mit derselben Idee wie beim Schachbrett.
- **Probe:** Die letzte Linie (`k = 7`) endet bei 50 + 280 = 330. Das liegt noch oberhalb des Startpunkts bei y = 350.
:::

:::merke[Rezept: Bild nach Maßskizze]
1. Alle Formen im Bild aufzählen und ihre Farbe notieren.
2. Für jede Form die Maßketten waagrecht und senkrecht vom Fensterrand aus aufsummieren. Maße vom rechten oder unteren Rand von 400 abziehen.
3. Umrechnen, was CodeDraw braucht: linke obere Ecke bei Rechtecken, Mittelpunkt und halbe Breite bei Kreisen und Ellipsen.
4. Reihenfolge festlegen: Was weiter hinten liegt, zuerst zeichnen.
5. Gleichmäßige Wiederholungen (Linienfächer) mit einer Schleife und einer Koordinatenformel zeichnen.
:::

:::achtung[Durchmesser statt Radius bei der Ellipse]
Für die Ellipse aus dem Beispiel „Quadrat, Diagonalen und Ellipse nach Maßen“ (40 breit, 120 hoch) schreibt jemand:

```java
cd.fillEllipse(200, 280, 40, 120);
```

Die Ellipse ist dann **doppelt** so breit und doppelt so hoch, nämlich 80 mal 240. Sie ragt über das Quadrat hinaus
und reicht senkrecht von 160 bis 400, also bis zum unteren Fensterrand. Die beiden letzten Werte sind **Radien**, also
die halbe Breite und die halbe Höhe: `fillEllipse(200, 280, 20, 60)`.
:::

:::achtung[Maß vom falschen Rand]
Im Bild steht: Ein Rechteck mit Breite 60 hat seine rechte Kante 40 Pixel vom rechten Fensterrand entfernt. Jemand
schreibt `cd.fillRectangle(40, 100, 60, 30);`. Das Rechteck steht jetzt ganz **links**. Das Maß 40 gehört zum
rechten Rand. Die rechte Kante liegt bei 400 − 40 = 360, die linke also bei 360 − 60 = 300. Richtig ist
`cd.fillRectangle(300, 100, 60, 30);`. Prüfe bei jedem Maßpfeil, an welchem Rand er beginnt.
:::

```aufgabe
id: gr-mass-kette
titel: Eine Maßkette aufsummieren
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Von links gemessen liegen hintereinander: 30 Pixel bis zu einem Rahmen, 80 Pixel bis zu einem Quadrat und das
  Quadrat mit 60 Pixeln Breite. Danach folgen 20 Pixel Lücke und ein Kreis mit Radius 25. Welchen x-Wert hat der
  **Mittelpunkt** des Kreises?
teile:
  - typ: zahl
    loesung: "30 + 80 + 60 + 20 + 25"
    fehler:
      - wert: "190"
        meldung: Das ist die linke Kante des Kreises. CodeDraw braucht bei Kreisen den Mittelpunkt, also noch einen Radius weiter.
      - wert: "240"
        meldung: Vom linken Rand des Kreises bis zu seinem Mittelpunkt ist es ein Radius (25), nicht der Durchmesser.
hinweise:
  - Addiere alle Abstände bis zur linken Kante des Kreises. Dann kommt noch der Weg bis zum Mittelpunkt dazu.
loesung: |
  **Ansatz:** Maßkette von links aufsummieren und bei Kreisen bis zum Mittelpunkt weiterrechnen.
  ---
  Linke Kante des Kreises: 30 + 80 + 60 + 20 = 190. Mittelpunkt: 190 + 25 = 215.
  ---
  Probe: Der Kreis reicht von 215 − 25 = 190 bis 215 + 25 = 240.
```

```aufgabe
id: gr-mass-ellipse
titel: Der richtige Ellipsen-Aufruf
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Gesucht ist eine ausgefüllte Ellipse, die 100 Pixel breit und 30 Pixel hoch ist. Ihr Mittelpunkt liegt bei (200, 100).
  Welcher Aufruf zeichnet sie?
teile:
  - typ: auswahl
    optionen:
      - '`cd.fillEllipse(200, 100, 50, 15);`'
      - '`cd.fillEllipse(200, 100, 100, 30);`'
      - '`cd.fillEllipse(150, 85, 50, 15);`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die letzten beiden Werte sind Radien, also halbe Breite und halbe Höhe. So würde die Ellipse 200 breit und 60 hoch.
      - wert: 2
        meldung: '(150, 85) wäre die linke obere Ecke des umgebenden Rechtecks. Bei Ellipsen ist (x, y) aber der Mittelpunkt.'
hinweise:
  - Bei Ellipsen ist (x, y) wie beim Kreis der Mittelpunkt.
loesung: |
  **Ansatz:** Mittelpunkt übernehmen, Breite und Höhe halbieren.
  ---
  `rx = 100 / 2 = 50`, `ry = 30 / 2 = 15`. Der Aufruf ist `cd.fillEllipse(200, 100, 50, 15);`.
  ---
  Probe: Die Ellipse reicht waagrecht von 150 bis 250 und senkrecht von 85 bis 115.
```

```aufgabe
id: gr-mass-rechts
titel: Gemessen vom rechten und unteren Rand
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Fenster ist 400 mal 400 Pixel groß. Ein Rechteck ist 60 breit und 75 hoch. Seine rechte Kante ist 40 Pixel vom
  rechten Fensterrand entfernt, seine Unterkante 25 Pixel vom unteren Fensterrand. Gib die linke obere Ecke (x, y)
  für `cd.fillRectangle(x, y, 60, 75);` an.
teile:
  - typ: zahl
    label: x
    loesung: "400 - 40 - 60"
    fehler:
      - wert: "40"
        meldung: Die 40 Pixel werden vom **rechten** Rand gemessen. Ziehe sie von 400 ab.
      - wert: "360"
        meldung: Bei 360 liegt die **rechte** Kante. CodeDraw braucht die linke, also noch die Breite abziehen.
  - typ: zahl
    label: y
    loesung: "400 - 25 - 75"
    fehler:
      - wert: "375"
        meldung: Bei 375 liegt die **Unterkante**. Die Oberkante liegt eine Höhe darüber.
hinweise:
  - Rechne zuerst die rechte Kante und die Unterkante aus.
  - Von dort gehst du um die Breite nach links und um die Höhe nach oben.
gefuehrt:
  - text: Bei welchem x-Wert liegt die rechte Kante?
    teil: { typ: zahl, loesung: "400 - 40" }
    erklaerung: 40 Pixel links vom rechten Fensterrand bei 400, also 360.
  - text: Bei welchem x-Wert liegt die linke Kante?
    teil: { typ: zahl, loesung: "360 - 60" }
    erklaerung: Eine Breite weiter links, also 300.
  - text: Bei welchem y-Wert liegt die Unterkante?
    teil: { typ: zahl, loesung: "400 - 25" }
    erklaerung: 25 Pixel über dem unteren Rand bei 400, also 375.
  - text: Bei welchem y-Wert liegt die Oberkante?
    erklaerung: Eine Höhe darüber, also 375 − 75 = 300.
loesung: |
  **Ansatz:** Maße vom rechten und unteren Rand von 400 abziehen, dann Breite und Höhe abziehen.
  ---
  x: rechte Kante 400 − 40 = 360, linke Kante 360 − 60 = 300.
  ---
  y: Unterkante 400 − 25 = 375, Oberkante 375 − 75 = 300. Aufruf `cd.fillRectangle(300, 300, 60, 75);`. Probe: 300 + 60 + 40 = 400 und 300 + 75 + 25 = 400.
```

```aufgabe
id: gr-mass-faecher-ausgabe
titel: Endpunkte eines Fächers
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: Das Programm gibt für jede Linie eines Fächers Farbe und y-Wert des Endpunkts aus. Was steht auf der Konsole?
teile:
  - typ: ausgabe
    code: |
      for (int k = 0; k < 5; k++) {
          String farbe;
          if (k % 2 == 0) {
              farbe = "gruen";
          } else {
              farbe = "orange";
          }
          System.out.println(farbe + " " + (60 + 35 * k));
      }
    loesung: |
      gruen 60
      orange 95
      gruen 130
      orange 165
      gruen 200
    fehler:
      - wert: "orange 60\ngruen 95\norange 130\ngruen 165\norange 200"
        meldung: '`0 % 2` ist 0. Die erste Linie (`k = 0`) ist also grün.'
      - wert: "gruen 600\norange 6035\ngruen 6070\norange 60105\ngruen 60140"
        meldung: 'Die Klammer um `60 + 35 * k` sorgt dafür, dass zuerst gerechnet wird. Ohne sie würde Java `60` und danach `35 * k` als Text anhängen. Mit Klammer wird erst die Zahl ausgerechnet und dann angehängt.'
hinweise:
  - Für `k` von 0 bis 4 jeweils Farbe und `60 + 35 * k` bestimmen.
  - Ohne die Klammer würde `+` hier Strings verketten. Mit Klammer wird zuerst gerechnet.
loesung: |
  **Ansatz:** Durchläufe `k` = 0 bis 4. Gerade `k` ergeben „gruen“, ungerade „orange“.
  ---
  y-Werte: 60, 95, 130, 165, 200, immer 35 mehr.
  ---
  Fünf Zeilen, abwechselnd grün und orange, beginnend mit grün.
```

```aufgabe
id: gr-mass-diagonalen
titel: Diagonalen in ein Quadrat
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Quadrat hat seine linke obere Ecke bei (60, 150) und die Seitenlänge 80. Ergänze die beiden Linien so, dass
  sie die Diagonalen des Quadrats bilden.
teile:
  - typ: lueckentext
    code: |
      import codedraw.*;

      public class Diagonalen {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.drawSquare(60, 150, 80);
              cd.drawLine(60, 150, ___, ___);
              cd.drawLine(___, 150, 60, ___);
              cd.show();
          }
      }
    luecken: [["140", "60 + 80"], ["230", "150 + 80"], ["140", "60 + 80"], ["230", "150 + 80"]]
    fehler:
      - wert: ["80", "80", "80", "80"]
        meldung: 80 ist die Seitenlänge, keine Koordinate. Die rechte untere Ecke liegt eine Seitenlänge rechts und unterhalb der linken oberen.
      - wert: ["140", "150", "140", "150"]
        meldung: 'Der Endpunkt muss in der **unteren** Ecke liegen. Die Unterkante ist bei 150 + 80 = 230.'
hinweise:
  - Bestimme alle vier Ecken des Quadrats.
  - 'Eine Diagonale verbindet links oben mit rechts unten, die andere rechts oben mit links unten.'
loesung: |
  **Ansatz:** Ecken berechnen: rechte Kante 60 + 80 = 140, Unterkante 150 + 80 = 230.
  ---
  Erste Diagonale: (60, 150) nach (140, 230). Zweite Diagonale: (140, 150) nach (60, 230).
  ---
  Probe: Beide Diagonalen kreuzen sich in der Mitte (100, 190) des Quadrats.
```

````aufgabe
id: gr-mass-faecher-code
titel: Einen Fächer mit einer Schleife zeichnen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 4 (Linien in zwei Farben mit einer Schleife, nachgebaut)
angabe: |
  Zeichne in einem Fenster mit 400 mal 400 Pixeln mit Linienbreite 2 einen Fächer aus 7 Linien. Alle Linien
  beginnen im Punkt (60, 340). Sie enden auf der Waagrechten y = 60, die erste bei x = 100 und jede weitere 40 Pixel
  weiter rechts. Linien mit gerader Nummer (0, 2, 4, 6) sind blau (`Palette.BLUE`), die anderen rot (`Palette.RED`).
  Verwende **eine einzige** Schleife. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Faecher {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setLineWidth(2);
              // TODO: 7 Linien mit einer Schleife
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Faecher {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setLineWidth(2);
              for (int k = 0; k < 7; k++) {
                  if (k % 2 == 0) {
                      cd.setColor(Palette.BLUE);
                  } else {
                      cd.setColor(Palette.RED);
                  }
                  cd.drawLine(60, 340, 100 + 40 * k, 60);
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "7 Linien, abwechselnd blau und rot" }
    fehler:
      - { wert: 1, meldung: "Die Endpunkte liegen bei x = 100, 140, …, 340 und y = 60. Die Farbe wechselt mit k % 2 und muss vor jeder Linie gesetzt werden." }
hinweise:
  - 'Endpunkt der Linie `k`: `(100 + 40 * k, 60)`. Der Startpunkt ist immer derselbe.'
  - 'Vor jeder Linie entscheidet `if (k % 2 == 0)`, welche Farbe gesetzt wird.'
loesung: |
  **Ansatz:** Eine Schleife über `k` = 0 bis 6. Der Endpunkt folgt einer Koordinatenformel, die Farbe dem Rest `k % 2`.
  ---
  ```java
  for (int k = 0; k < 7; k++) {
      if (k % 2 == 0) {
          cd.setColor(Palette.BLUE);
      } else {
          cd.setColor(Palette.RED);
      }
      cd.drawLine(60, 340, 100 + 40 * k, 60);
  }
  ```
  ---
  Probe: Die letzte Linie (`k = 6`) endet bei x = 100 + 240 = 340 und ist blau, weil 6 gerade ist.
````

````aufgabe
id: gr-mass-bild
titel: Ein ganzes Bild nach Maßangaben
niveau: 3
lernziel: 5
kompetenz: modellieren
quelle: Aufgabenblatt 1 WS2023, Aufgabe 4 (nachgebaut, eigene Maße)
angabe: |
  Zeichne in einem Fenster mit 400 mal 400 Pixeln dieses Bild. Setze zu Beginn `cd.setLineWidth(2);` und ändere die
  Linienbreite danach nicht mehr. Alle Maße sind Pixel.

  ```text
  Skizze (nicht maßstabsgetreu, die Maße stehen in der Liste darunter)

  +--------------------------------------+   Rahmen
  |     .----.                        /| |
  |    ( (##) )   Kreise            /  | |   Fächer: Endpunkte auf
  |     '----'                    /   /| |   der rechten Rahmenkante
  |                             /   /  | |
  |  +------+  .-.            /   /    | |
  |  | \  / |  | |          /   /      | |
  |  |  \/  |  | |        /   /        | |
  |  |  /\  |  | |      /   /          | |
  |  | /  \ |  '-'    /   /            | |
  |  +------+       / /                | |
  +----------------o---------------------+
     Quadrat   Ellipse   Startpunkt des Fächers
  ```

  - **Rahmen:** schwarzer Umriss (`Palette.BLACK`), 25 vom linken und vom oberen Fensterrand, 350 breit und 350 hoch.
  - **Kreise:** Der Mittelpunkt liegt 100 rechts vom linken und 100 unter dem oberen Rahmenrand. Außen ein magentafarbener Umriss (`Palette.MAGENTA`) mit Radius 75, innen ein ausgefüllter blauer Kreis (`Palette.BLUE`) mit Radius 35.
  - **Quadrat:** grau ausgefüllt (`Palette.GRAY`), Seite 90. Seine linke Kante ist 25 vom linken Rahmenrand entfernt, seine Unterkante 25 vom unteren Rahmenrand. Darin die beiden Diagonalen in Gelb (`Palette.YELLOW`).
  - **Ellipse:** rot ausgefüllt (`Palette.RED`), 40 breit, 20 rechts neben dem Quadrat und genauso hoch wie das Quadrat, auf gleicher Höhe.
  - **Fächer:** 6 Linien, alle beginnend auf der Unterkante des Rahmens bei x = 230. Sie enden auf der rechten Rahmenkante, die erste bei y = 25, jede weitere 50 tiefer. Gerade Nummern grün (`Palette.GREEN`), ungerade orange (`Palette.ORANGE`). Eine Schleife.

  Am Ende steht `cd.show();`. Die Reihenfolge der Formen ist frei, solange nichts Sichtbares verdeckt wird.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Massbild {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setLineWidth(2);
              // TODO: Bild nach Maßangaben
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Massbild {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setLineWidth(2);
              cd.setColor(Palette.BLACK);
              cd.drawRectangle(25, 25, 350, 350);
              cd.setColor(Palette.MAGENTA);
              cd.drawCircle(25 + 100, 25 + 100, 75);
              cd.setColor(Palette.BLUE);
              cd.fillCircle(25 + 100, 25 + 100, 35);
              cd.setColor(Palette.GRAY);
              cd.fillSquare(25 + 25, 375 - 25 - 90, 90);
              cd.setColor(Palette.YELLOW);
              cd.drawLine(50, 260, 140, 350);
              cd.drawLine(140, 260, 50, 350);
              cd.setColor(Palette.RED);
              cd.fillEllipse(50 + 90 + 20 + 20, 260 + 45, 20, 45);
              for (int k = 0; k < 6; k++) {
                  if (k % 2 == 0) {
                      cd.setColor(Palette.GREEN);
                  } else {
                      cd.setColor(Palette.ORANGE);
                  }
                  cd.drawLine(230, 375, 375, 25 + 50 * k);
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "Rahmen, Kreise, Quadrat mit Diagonalen, Ellipse und Fächer" }
    fehler:
      - { wert: 1, meldung: "Rechne die Maßketten vom Fensterrand aus: Der Rahmen beginnt bei 25 und endet bei 375. Das Quadrat liegt bei x = 50 und endet unten bei 350, beginnt also bei y = 260. Die Ellipse hat den Mittelpunkt (180, 305) und die Radien 20 und 45." }
hinweise:
  - 'Rahmen: 25 bis 375 in beide Richtungen. Kreismittelpunkt: (25 + 100, 25 + 100). Quadrat: linke Kante 25 + 25, Unterkante 375 − 25, also Oberkante 350 − 90.'
  - 'Ellipse: linke Kante 50 + 90 + 20 = 160, Breite 40, also Mittelpunkt x = 180 und `rx = 20`. Senkrecht wie das Quadrat: Mitte 260 + 45, `ry = 45`. Fächer: Endpunkte `(375, 25 + 50 * k)` für `k` = 0 bis 5.'
loesung: |
  **Ansatz:** Für jede Form die Maßketten vom Fensterrand aus aufsummieren und in die Werte umrechnen, die CodeDraw erwartet.
  ---
  Rahmen `drawRectangle(25, 25, 350, 350)`, rechte und untere Kante bei 375. Kreise mit Mittelpunkt (125, 125), Radien 75 und 35.
  ---
  Quadrat: x = 25 + 25 = 50. Unterkante 375 − 25 = 350, Oberkante 350 − 90 = 260. Diagonalen (50, 260)–(140, 350) und (140, 260)–(50, 350), nach dem Quadrat gezeichnet.
  ---
  Ellipse: linke Kante 50 + 90 + 20 = 160, Mitte 160 + 20 = 180. Senkrecht Mitte 260 + 45 = 305, Radien 20 und 45.
  ---
  ```java
  for (int k = 0; k < 6; k++) {
      if (k % 2 == 0) {
          cd.setColor(Palette.GREEN);
      } else {
          cd.setColor(Palette.ORANGE);
      }
      cd.drawLine(230, 375, 375, 25 + 50 * k);
  }
  ```
  Probe: Die letzte Fächerlinie endet bei y = 25 + 250 = 275, noch über dem Startpunkt auf der Unterkante.
````

```aufgabe
id: gr-mass-summen
titel: Summen im Code stehen lassen?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Zwei Lösungen derselben Maßskizze:

  - Lösung A: `cd.fillSquare(50, 260, 90);`
  - Lösung B: `cd.fillSquare(25 + 25, 375 - 25 - 90, 90);`

  Beide zeichnen dasselbe. Welche würdest du abgeben, und warum? Nenne zwei Gründe in ganzen Sätzen.
teile:
  - typ: text
    muster: |
      Ich würde Lösung B abgeben. Erstens sieht man jeder Zahl an, aus welchen Maßen der Skizze sie stammt: 25 für
      den Rahmen, 25 Abstand, 375 als Unterkante des Rahmens. Im Feedbackgespräch kann ich so jede Zahl sofort
      erklären. Zweitens ist ein Rechenfehler leichter zu finden, weil man die Summe mit der Skizze vergleichen kann.
      Ändert sich ein Maß, etwa der Rand, sieht man auch, welche Stellen betroffen sind. Noch besser wären Variablen
      wie `int rahmen = 25;`, dann steht jede Zahl nur einmal im Programm.
hinweise:
  - Denk an das Feedbackgespräch, in dem du jede Zahl erklären musst.
  - Was passiert, wenn sich ein Maß in der Skizze ändert?
loesung: |
  **Ansatz:** Beide Lösungen sind richtig. Es geht um Lesbarkeit und Erklärbarkeit.
  ---
  Lösung B zeigt die Herkunft jeder Zahl. Das hilft beim Erklären und beim Finden von Rechenfehlern.
  ---
  Am besten sind benannte Variablen für wiederkehrende Maße, etwa `rahmen` und `abstand`. Dann ändert man ein Maß an einer einzigen Stelle.
```

```reflexion
frage: Warum rechnet man alle Maßketten vom Fensterrand aus und nicht von der jeweils zuletzt gezeichneten Form?
antwort: |
  Der Fensterrand hat eine bekannte, feste Koordinate: 0 links und oben, 400 rechts und unten. Jede Form, deren
  Position ich davon ableite, ist eindeutig bestimmt. Rechne ich dagegen von Form zu Form, wandert jeder Fehler
  weiter: Liegt das Quadrat falsch, liegt auch die Ellipse daneben falsch, und der Fehler fällt erst ganz am Ende auf.
  Natürlich darf eine Kette über eine Form hinweglaufen, wie beim Quadrat und der Ellipse. Ihr Anfang ist aber
  immer ein Rand, dessen Koordinate ich kenne.
```

## Kreismuster: Gleitkomma und ungerades n

```aufgabe
id: gr-kreis-check
titel: Ist n ungerade?
niveau: 1
art: check
angabe: |
  Welche Bedingung ist genau dann `true`, wenn die positive Zahl `n` ungerade ist?
  (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: auswahl
    optionen: ['`n % 2 == 1`', '`n / 2 == 1`', '`n % 2 == 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n / 2 == 1` gilt nur für 2 und 3. Ob eine Zahl gerade ist, verrät der Rest, nicht der Quotient.'
      - wert: 2
        meldung: Rest 0 bei Division durch 2 heißt **gerade**. Gesucht ist das Gegenteil.
loesung: |
  Ungerade Zahlen lassen bei Division durch 2 den Rest 1.
  ---
  Also `n % 2 == 1`. Für positive `n` ist das gleichwertig mit `n % 2 != 0`.
```

Aufgabe 5 von Aufgabenblatt 1 verlangt ein Kreismuster in einem Fenster mit 300 mal 300 Pixeln. Eine Variable `n`
gibt an, wie viele Kreise nebeneinander und übereinander Platz haben. Erlaubt sind nur **ungerade** Werte von 5 bis 19.
Für jedes erlaubte `n` soll das Muster das Fenster genau füllen. Für unerlaubte Werte soll das Programm eine
Fehlermeldung auf der Konsole ausgeben.

Darin stecken zwei neue Schwierigkeiten. Erstens hängt die **Größe** der Kreise von `n` ab, und 300 lässt sich nicht
durch jedes `n` ohne Rest teilen. Zweitens beziehen sich die Muster auf die **Mitte** des Fensters, und eine Mitte
gibt es nur bei ungeradem `n`.

:::definition[Zelle und Mittelindex]
Teilt man eine Strecke der Länge `W` in `n` gleich breite **Zellen**, hat jede die Breite `d = W / n`, als
Kommazahl gerechnet. Zelle `k` (ab 0) reicht von `k * d` bis `(k + 1) * d`. Ihr Mittelpunkt liegt bei
`(k + 0.5) * d`. Ist `n` ungerade, heißt `m = n / 2` (Ganzzahldivision) der **Mittelindex**. Der Mittelpunkt der Zelle
`m` ist genau die Mitte der Strecke.
:::

**Beispiel:** `W = 300`, `n = 5`. Dann ist `d = 60` und `m = 5 / 2 = 2`. Der Mittelpunkt von Zelle 2 liegt bei
`2,5 · 60 = 150`, also genau in der Fenstermitte. Links davon liegen zwei Zellen, rechts davon auch.

**Nichtbeispiel:** Bei `n = 6` gibt es **keine** mittlere Zelle. `m = 6 / 2 = 3` ergibt den Mittelpunkt
`3,5 · 50 = 175`, nicht 150. Die Fenstermitte fällt auf die Grenze zwischen Zelle 2 und Zelle 3. Ein Kreuz aus
Kreisen wäre dann nicht symmetrisch. Darum verlangt die Aufgabe ein ungerades `n`.

:::beispiel[Ganzzahl oder Kommazahl beim Radius]
Bei `n = 7` sollen 7 Kreise eine Zeile von 300 Pixeln füllen. Jeder Kreis bekommt eine Zelle, sein Durchmesser ist
die Zellbreite, sein Radius die halbe Zellbreite: `300 / (2 · 7)`.

**Mit `int`:** `int r = 300 / (2 * 7);` ergibt die Ganzzahldivision `300 / 14 = 21`. Sieben Kreise mit Durchmesser 42
sind zusammen 7 · 42 = 294 Pixel breit. Rechts bleiben 6 Pixel leer, das Muster sitzt sichtbar schief.

**Mit `double`:** `double r = 300.0 / (2 * n);` ergibt 21.428571428571427. Sieben Durchmesser ergeben genau 300 Pixel.

```java
double r = 300.0 / (2 * n);
for (int k = 0; k < n; k++) {
    cd.drawCircle(r + 2 * r * k, 150, r);
}
```

- `300.0` ist ein `double`. Darum wird die ganze Division mit Nachkommastellen gerechnet.
- Der Mittelpunkt des Kreises `k` ist `r + 2 * r * k`. Das ist `(k + 0.5) * d` mit `d = 2 * r`: ein Radius bis zur ersten Mitte, danach je ein Durchmesser weiter.
- CodeDraw nimmt `double`-Koordinaten an. Du musst nichts runden.

**Probe** für `k = 6`: `21,43 + 12 · 21,43 = 278,57`. Der Kreis reicht bis 278,57 + 21,43 = 300.
:::

Jetzt zur Mitte. Viele Muster dieser Art bestehen aus einer Zeile und einer Spalte von Kreisen, die sich in der
Fenstermitte kreuzen. Die Spalte hat in jeder Zeile `k` den Kreis in Spalte `m`. Die Zeile hat in jeder Spalte `k`
den Kreis in Zeile `m`. Am Kreuzungspunkt würden beide denselben Kreis zeichnen.

:::beispiel[Ein Kreuz aus Kreisen mit Eingabeprüfung]
Eine rote, dicke Spalte und eine blaue, dünne Zeile. Am Kreuzungspunkt soll der rote Kreis sichtbar bleiben.

```java
int n = 7;
if (n % 2 == 1 && n >= 5 && n <= 19) {
    CodeDraw cd = new CodeDraw(300, 300);
    double r = 300.0 / (2 * n);
    int m = n / 2;
    cd.setLineWidth(6);
    cd.setColor(Palette.RED);
    for (int k = 0; k < n; k++) {
        cd.drawCircle(r + 2 * r * m, r + 2 * r * k, r);
    }
    cd.setLineWidth(2);
    cd.setColor(Palette.BLUE);
    for (int k = 0; k < n; k++) {
        if (k != m) {
            cd.drawCircle(r + 2 * r * k, r + 2 * r * m, r);
        }
    }
    cd.show();
} else {
    System.out.println("Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.");
}
```

- Zeile 2 prüft alle drei Forderungen zugleich. Nur wenn **alle** stimmen (`&&`), wird gezeichnet. Sonst kommt die Fehlermeldung.
- Zeile 5: Für `n = 7` ist `m = 3`, die vierte Zelle ist die Mitte.
- Zeilen 8 bis 10 zeichnen die Spalte. Der x-Wert ist fest (Spalte `m`), der y-Wert wandert mit `k`.
- Zeilen 13 bis 17 zeichnen die Zeile. Jetzt ist der y-Wert fest (Zeile `m`), der x-Wert wandert. Das `if (k != m)` lässt den Kreuzungspunkt aus. Dort liegt schon ein roter Kreis, und ein blauer Kreis darüber würde ihn teilweise verdecken.
:::

:::merke[Rezept: Muster, die sich an n anpassen]
1. Gültigkeit von `n` mit **einer** Bedingung aus `&&`-Teilen prüfen. Bei ungültigem `n` nur die Fehlermeldung ausgeben.
2. Zellbreite oder Radius als `double` berechnen: `300.0 / n` oder `300.0 / (2 * n)`.
3. Mittelpunkt der Zelle `k`: `(k + 0.5) * d`, gleichwertig `r + 2 * r * k`.
4. Mittelindex `m = n / 2` für die Fenstermitte.
5. Was oben liegen soll, zuletzt zeichnen. Was nicht überdeckt werden darf, beim späteren Zeichnen auslassen.
:::

:::achtung[Der Radius als int]
```java
int r = 300 / (2 * n);
```

Für `n = 7` ist `r = 21` statt 21,43. Jeder Kreis ist knapp ein Pixel zu klein. Über sieben Kreise summiert sich das
auf 6 Pixel, rechts und unten bleibt ein leerer Streifen. Bei `n = 13` ist es noch schlimmer: `300 / 26 = 11`, also
13 · 22 = 286 Pixel, und 14 Pixel bleiben frei. Das Aufgabenblatt sagt deshalb ausdrücklich, dass der Radius mit
Gleitkommaarithmetik berechnet werden soll.
:::

:::achtung[ODER statt UND in der Prüfung]
```java
if (n % 2 == 1 || n >= 5 && n <= 19) {
```

`&&` bindet stärker als `||`. Java liest das als „`n` ist ungerade **oder** liegt zwischen 5 und 19“. Dann wird
`n = 21` angenommen, weil 21 ungerade ist, und auch `n = 3`. Ebenso `n = 8`, weil 8 zwischen 5 und 19 liegt. Alle drei
Forderungen müssen **gleichzeitig** gelten, also gehört zwischen alle drei Teile ein `&&`.
:::

```aufgabe
id: gr-kreis-radius
titel: Der Radius bei neun Kreisen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Neun Kreise sollen nebeneinander genau 300 Pixel füllen. Welchen Radius hat jeder Kreis? (Auf zwei Nachkommastellen.)
teile:
  - typ: zahl
    loesung: "300 / (2 * 9)"
    toleranz: 0.01
    fehler:
      - wert: "16"
        meldung: 'Das ist das Ergebnis von `300 / 18` als Ganzzahldivision. Der genaue Radius hat Nachkommastellen.'
      - wert: "33.33"
        meldung: 300 / 9 ist der **Durchmesser**, also die Zellbreite. Der Radius ist die Hälfte davon.
hinweise:
  - Jeder Kreis bekommt eine Zelle der Breite 300 / 9. Der Radius ist die halbe Zellbreite.
loesung: |
  **Ansatz:** Zellbreite `d = 300 / 9`, Radius `r = d / 2 = 300 / 18`.
  ---
  `300 / 18 ≈ 16,67`.
  ---
  Probe: 9 Durchmesser zu je 33,33 ergeben 300.
```

```aufgabe
id: gr-kreis-mitte
titel: Die mittlere Zelle bei elf Kreisen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Fenster ist 300 Pixel breit und wird in `n = 11` Zellen geteilt. Welchen Wert hat der Mittelindex `m = n / 2`,
  und bei welchem x-Wert liegt der Mittelpunkt der Zelle `m`?
teile:
  - typ: zahl
    label: Mittelindex m
    loesung: "5"
    fehler:
      - wert: "5.5"
        meldung: '`11 / 2` ist in Java eine Ganzzahldivision. Der Index einer Zelle ist immer ganz.'
      - wert: "6"
        meldung: Die Zellen werden ab 0 gezählt. Von 0 bis 10 ist 5 die Mitte, links und rechts liegen je 5 Zellen.
  - typ: zahl
    label: x-Wert des Mittelpunkts
    loesung: "(5 + 0.5) * 300 / 11"
    fehler:
      - wert: "136.36"
        meldung: Das ist die **linke Kante** der Zelle 5. Der Mittelpunkt liegt eine halbe Zellbreite weiter rechts.
hinweise:
  - '`m = 11 / 2` als Ganzzahldivision. Mittelpunkt der Zelle `k`: `(k + 0.5) * d` mit `d = 300 / 11`.'
loesung: |
  **Ansatz:** Mittelindex mit Ganzzahldivision, Mittelpunkt mit der Formel `(k + 0.5) * d`.
  ---
  `m = 11 / 2 = 5`. Zellbreite `d = 300 / 11 ≈ 27,27`.
  ---
  Mittelpunkt: `5,5 · 27,27 = 150`. Das ist genau die Fenstermitte, wie es bei ungeradem `n` sein muss.
```

```aufgabe
id: gr-kreis-pruefung
titel: Welche n besteht die Prüfung?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Das Programm zeichnet nur, wenn `n % 2 == 1 && n >= 5 && n <= 19` gilt. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`n = 5` wird angenommen.'
        richtig: true
        erklaerung: '5 ist ungerade, und `5 >= 5` sowie `5 <= 19` gelten.'
      - text: '`n = 19` wird angenommen.'
        richtig: true
        erklaerung: 'Beide Grenzen sind mit `>=` und `<=` eingeschlossen.'
      - text: '`n = 4` wird angenommen.'
        richtig: false
        erklaerung: '4 ist gerade, schon der erste Teil ist falsch.'
      - text: '`n = 21` wird angenommen.'
        richtig: false
        erklaerung: '21 ist ungerade, aber `21 <= 19` ist falsch. Bei `&&` reicht ein falscher Teil.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Alle drei Teile sind mit `&&` verbunden. Ist `21 <= 19` erfüllt?'
      - wert: [r, f, f, f]
        meldung: '`n <= 19` schließt 19 selbst ein. Die obere Grenze gehört dazu.'
hinweise:
  - Prüfe für jede Zahl alle drei Teile einzeln.
  - Bei `&&` muss jeder Teil wahr sein.
loesung: |
  **Ansatz:** Für jede Zahl die drei Teile auswerten.
  ---
  5 und 19 erfüllen alle drei Teile, denn beide Grenzen sind eingeschlossen.
  ---
  4 scheitert an „ungerade“, 21 an „höchstens 19“. Ergebnis: richtig, richtig, falsch, falsch.
```

```aufgabe
id: gr-kreis-mittelpunkte
titel: Mittelpunkte ausgeben
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: Was gibt das Programm aus? Ein Leerzeichen am Zeilenende darfst du weglassen.
teile:
  - typ: ausgabe
    code: |
      int n = 5;
      double d = 300.0 / n;
      for (int k = 0; k < n; k++) {
          System.out.print((k + 0.5) * d + " ");
      }
      System.out.println();
    trim: true
    loesung: "30.0 90.0 150.0 210.0 270.0 \n"
    fehler:
      - wert: "30 90 150 210 270"
        meldung: Das Ergebnis ist ein `double`. Java gibt einen `double`-Wert wie diesen mit Dezimalpunkt und mindestens einer Nachkommastelle aus, auch wenn er ganz ist, also `30.0`.
      - wert: "0.0 60.0 120.0 180.0 240.0"
        meldung: Das sind die linken Kanten der Zellen. Mit `+ 0.5` geht es eine halbe Zelle weiter, zum Mittelpunkt.
hinweise:
  - '`d = 300.0 / 5 = 60.0`. Der Mittelpunkt der Zelle `k` ist `(k + 0.5) * 60.0`.'
  - Ein `double` wird mit Dezimalpunkt und mindestens einer Nachkommastelle ausgegeben.
loesung: |
  **Ansatz:** Zellbreite 60.0, Mittelpunkte `(k + 0.5) * 60.0` für `k` = 0 bis 4.
  ---
  0,5 · 60 = 30, 1,5 · 60 = 90, und so weiter bis 4,5 · 60 = 270.
  ---
  Ausgabe `30.0 90.0 150.0 210.0 270.0`. Der mittlere Wert 150.0 gehört zu `k = 2 = 5 / 2`, dem Mittelindex.
```

```aufgabe
id: gr-kreis-bedingung
titel: Die Eingabeprüfung schreiben
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ergänze die Bedingung: Gezeichnet wird nur, wenn `n` ungerade ist und zwischen 5 und 19 liegt (beide Grenzen
  eingeschlossen).
teile:
  - typ: lueckentext
    code: |
      int n = 7;
      if (___) {
          System.out.println("zeichnen");
      } else {
          System.out.println("Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.");
      }
    luecken: [["n % 2 == 1 && n >= 5 && n <= 19", "n % 2 != 0 && n >= 5 && n <= 19", "n >= 5 && n <= 19 && n % 2 == 1", "n >= 5 && n <= 19 && n % 2 != 0", "n % 2 == 1 && 5 <= n && n <= 19", "n % 2 == 1 && n > 4 && n < 20"]]
    fehler:
      - wert: ["n % 2 == 1 || n >= 5 && n <= 19"]
        meldung: 'Mit `||` reicht schon „ungerade“. Dann würden auch 3 und 21 angenommen. Alle Teile müssen mit `&&` verbunden sein.'
      - wert: ["n % 2 == 1 && n > 5 && n < 19"]
        meldung: 'Die Grenzen 5 und 19 sollen erlaubt sein. Mit `>` und `<` würden sie abgewiesen.'
hinweise:
  - Du brauchst drei Teile, die alle gleichzeitig gelten müssen.
  - Ungerade heißt `n % 2 == 1`. Eingeschlossene Grenzen verlangen `>=` und `<=`.
loesung: |
  **Ansatz:** Drei Forderungen, alle gleichzeitig, also mit `&&` verbinden.
  ---
  Ungerade: `n % 2 == 1`. Untere Grenze eingeschlossen: `n >= 5`. Obere Grenze eingeschlossen: `n <= 19`.
  ---
  `n % 2 == 1 && n >= 5 && n <= 19`. Probe: 7 erfüllt alle drei Teile, also wird `zeichnen` ausgegeben.
```

```aufgabe
id: gr-kreis-luecke
titel: Wie viel Platz geht verloren?
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Jemand berechnet bei `n = 13` den Radius mit `int r = 300 / (2 * n);` und zeichnet 13 Kreise nebeneinander, den
  ersten am linken Rand. Wie viele Pixel bleiben am rechten Rand des 300 Pixel breiten Fensters frei?
teile:
  - typ: zahl
    loesung: "300 - 13 * 2 * 11"
    fehler:
      - wert: "0"
        meldung: 'Mit `int` ist `300 / 26` nicht 11,54, sondern 11. Die Kreise sind also kleiner als nötig.'
      - wert: "1"
        meldung: Ein Kreis allein ist nur gut einen Pixel zu schmal. Aber das passiert 13 Mal, bei jedem Kreis.
hinweise:
  - Rechne zuerst `300 / 26` als Ganzzahldivision.
  - Die 13 Kreise sind zusammen 13 Durchmesser breit.
gefuehrt:
  - text: Welchen Wert hat `r` mit Ganzzahldivision?
    teil: { typ: zahl, loesung: "11" }
    erklaerung: '`300 / 26` ist 11 Rest 14. Der Rest fällt weg.'
  - text: Wie breit sind die 13 Kreise zusammen?
    teil: { typ: zahl, loesung: "13 * 22" }
    erklaerung: 'Jeder Kreis hat den Durchmesser 22. Zusammen 13 · 22 = 286.'
  - text: Wie viele Pixel bleiben frei?
    teil: { typ: zahl, loesung: "300 - 286" }
    erklaerung: 300 − 286 = 14 Pixel. Genau der Rest der Division.
loesung: |
  **Ansatz:** Radius als Ganzzahldivision, dann die Gesamtbreite aller Kreise.
  ---
  `r = 300 / 26 = 11`, Durchmesser 22.
  ---
  13 · 22 = 286, frei bleiben 300 − 286 = 14 Pixel. Mit `double r = 300.0 / 26` wären es 0.
```

````aufgabe
id: gr-kreis-kreuz
titel: Ein Kreuz aus Kreisen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Das Programm liest `n` ein. Ist `n` ungerade und liegt zwischen 5 und 19, zeichnet es ein Kreuz aus Kreisumrissen.
  Das Fenster ist 300 mal 300 Pixel groß, der Radius ist `300.0 / (2 * n)`.

  - Zuerst kommt die **Zeile** `m = n / 2` mit `n` roten Kreisen (`Palette.RED`, Linienbreite 6).
  - Danach kommt die **Spalte** `m` mit blauen Kreisen (`Palette.BLUE`, Linienbreite 2). Der Kreuzungspunkt wird ausgelassen, damit der rote Kreis dort nicht überdeckt wird.

  Sonst gibt es genau diese Zeile aus und erzeugt **kein** Fenster:
  `Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.`
teile:
  - typ: code
    vorlage: |
      import codedraw.*;
      import java.util.Scanner;

      public class Kreuz {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO: n prüfen, dann zeichnen oder Fehlermeldung ausgeben
          }
      }
    musterloesung: |
      import codedraw.*;
      import java.util.Scanner;

      public class Kreuz {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              if (n % 2 == 1 && n >= 5 && n <= 19) {
                  CodeDraw cd = new CodeDraw(300, 300);
                  double r = 300.0 / (2 * n);
                  int m = n / 2;
                  cd.setLineWidth(6);
                  cd.setColor(Palette.RED);
                  for (int k = 0; k < n; k++) {
                      cd.drawCircle(r + 2 * r * k, r + 2 * r * m, r);
                  }
                  cd.setLineWidth(2);
                  cd.setColor(Palette.BLUE);
                  for (int k = 0; k < n; k++) {
                      if (k != m) {
                          cd.drawCircle(r + 2 * r * m, r + 2 * r * k, r);
                      }
                  }
                  cd.show();
              } else {
                  System.out.println("Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.");
              }
          }
      }
    tests:
      - { stdin: "5", zeichnung: true, beschreibung: "n = 5" }
      - { stdin: "9", zeichnung: true, beschreibung: "n = 9" }
      - stdin: "4"
        stdout: "Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.\n"
        beschreibung: "n = 4 ist gerade"
      - stdin: "21"
        stdout: "Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.\n"
        versteckt: true
    fehler:
      - { wert: 1, meldung: "Prüfe die Mittelpunkte: Kreis k hat die Mitte r + 2 * r * k. Die Zeile hat den festen y-Wert r + 2 * r * m. Rechnest du r als double? Und lässt du beim blauen Kreis k == m aus?" }
      - { wert: 3, meldung: "Für n = 4 muss die Fehlermeldung kommen. Sind alle drei Teile der Bedingung mit && verbunden?" }
hinweise:
  - 'Gerüst: `if (n % 2 == 1 && n >= 5 && n <= 19) { ... } else { System.out.println(...); }`. Das Fenster wird erst im `if`-Zweig erzeugt.'
  - 'Rote Zeile: fester y-Wert `r + 2 * r * m`, x-Wert `r + 2 * r * k`. Blaue Spalte: umgekehrt, mit `if (k != m)`. Vor jeder Gruppe Farbe und Linienbreite setzen.'
loesung: |
  **Ansatz:** Erst prüfen, dann im gültigen Fall Radius und Mittelindex berechnen. Zwei Schleifen: Zeile (rot, zuerst) und Spalte (blau, ohne Mitte).
  ---
  ```java
  if (n % 2 == 1 && n >= 5 && n <= 19) {
      CodeDraw cd = new CodeDraw(300, 300);
      double r = 300.0 / (2 * n);
      int m = n / 2;
      cd.setLineWidth(6);
      cd.setColor(Palette.RED);
      for (int k = 0; k < n; k++) {
          cd.drawCircle(r + 2 * r * k, r + 2 * r * m, r);
      }
      cd.setLineWidth(2);
      cd.setColor(Palette.BLUE);
      for (int k = 0; k < n; k++) {
          if (k != m) {
              cd.drawCircle(r + 2 * r * m, r + 2 * r * k, r);
          }
      }
      cd.show();
  } else {
      System.out.println("Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.");
  }
  ```
  ---
  Probe mit `n = 5`: `r = 30`, `m = 2`. Die rote Zeile liegt bei y = 150, die blaue Spalte bei x = 150. Es gibt 5 rote und 4 blaue Kreise.
````

````aufgabe
id: gr-kreis-muster
titel: Das Kreismuster des Aufgabenblatts
niveau: 3
lernziel: 6
kompetenz: modellieren
quelle: Aufgabenblatt 1 WS2023, Aufgabe 5 (gespiegelt nachgebaut)
angabe: |
  Das Programm liest `n` ein. Ein gültiges `n` ist ungerade und liegt zwischen 5 und 19. Für ungültiges `n` gibt es nur
  die Zeile `Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.` aus und erzeugt kein Fenster. Sonst zeichnet
  es in einem Fenster mit 300 mal 300 Pixeln Kreisumrisse in einem Raster aus `n` mal `n` Zellen. Der Radius ist
  `r = 300.0 / (2 * n)`, der Mittelindex `m = n / 2`. Zeile `i` und Spalte `j` zählen ab 0. Die Zelle `(i, j)` hat den
  Mittelpunkt `(r + 2 * r * j, r + 2 * r * i)`. Jede Zelle bekommt höchstens einen Kreis.

  1. **Rot** (`Palette.RED`, Linienbreite 6), zuerst. Rot sind Zeile 0 in den Spalten `m + 1` bis `n - 1` und die ganze Spalte `m`. Dazu kommt Zeile `n - 1` in den Spalten 0 bis `m - 1`.
  2. **Blau** (`Palette.BLUE`, Linienbreite 2), danach: Spalte `n - 1` in den Zeilen 1 bis `m - 1`, Zeile `m` in allen Spalten außer `m`.
  3. **Orange** (`Palette.ORANGE`, Linienbreite 2), zuletzt: ein einzelner Kreis. Er füllt genau das Quadrat aus den Zeilen 1 bis `m - 1` und den Spalten `m + 1` bis `n - 2` aus. Sein Radius ist `(m - 1) * r`.

  Für `n = 5` beginnt oben rechts ein rotes Band. Es läuft durch die mittlere Spalte nach unten und biegt unten nach
  links ab. Rechts und in der mittleren Zeile liegen blaue Kreise. Oben rechts, zwischen Rot und Blau, sitzt ein oranger
  Kreis von der Größe einer Zelle.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;
      import java.util.Scanner;

      public class Kreismuster {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import codedraw.*;
      import java.util.Scanner;

      public class Kreismuster {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              if (n % 2 == 1 && n >= 5 && n <= 19) {
                  CodeDraw cd = new CodeDraw(300, 300);
                  double r = 300.0 / (2 * n);
                  int m = n / 2;
                  cd.setLineWidth(6);
                  cd.setColor(Palette.RED);
                  for (int j = m + 1; j < n; j++) {
                      cd.drawCircle(r + 2 * r * j, r, r);
                  }
                  for (int i = 0; i < n; i++) {
                      cd.drawCircle(r + 2 * r * m, r + 2 * r * i, r);
                  }
                  for (int j = 0; j < m; j++) {
                      cd.drawCircle(r + 2 * r * j, r + 2 * r * (n - 1), r);
                  }
                  cd.setLineWidth(2);
                  cd.setColor(Palette.BLUE);
                  for (int i = 1; i < m; i++) {
                      cd.drawCircle(r + 2 * r * (n - 1), r + 2 * r * i, r);
                  }
                  for (int j = 0; j < n; j++) {
                      if (j != m) {
                          cd.drawCircle(r + 2 * r * j, r + 2 * r * m, r);
                      }
                  }
                  cd.setColor(Palette.ORANGE);
                  cd.drawCircle((m + n) * r, (m + 1) * r, (m - 1) * r);
                  cd.show();
              } else {
                  System.out.println("Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.");
              }
          }
      }
    tests:
      - { stdin: "5", zeichnung: true, beschreibung: "n = 5" }
      - { stdin: "7", zeichnung: true, beschreibung: "n = 7" }
      - stdin: "6"
        stdout: "Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.\n"
        beschreibung: "n = 6 ist gerade"
      - { stdin: "19", zeichnung: true, versteckt: true }
      - stdin: "3"
        stdout: "Fehler: n muss ungerade sein und zwischen 5 und 19 liegen.\n"
        versteckt: true
    fehler:
      - { wert: 1, meldung: "Zähle die Kreise für n = 5: rot 2 + 5 + 2 = 9, blau 1 + 4 = 5, orange 1. Zeichnest du eine Zelle doppelt, etwa die Zelle (0, m) im oberen Band und in der Spalte, ist ein Kreis zu viel." }
      - { wert: 2, meldung: "Bei n = 7 ist m = 3. Der orange Kreis füllt dann 2 mal 2 Zellen (Zeilen 1 und 2, Spalten 4 und 5): Mittelpunkt (10r, 4r), Radius 2r. Allgemein Mittelpunkt ((m + n) · r, (m + 1) · r) und Radius (m − 1) · r." }
hinweise:
  - Zeichne die Zellen für `n = 5` auf Karopapier und markiere, welche rot, blau oder orange sind. Leg für jede farbige Gruppe fest, welcher Index fest ist und welcher läuft.
  - 'Jede Gruppe ist eine eigene einfache Schleife. Der orange Bereich reicht senkrecht von Zeile 1 bis `m - 1`, also von y = 2r bis y = 2mr. Seine Mitte ist der Durchschnitt: `(2r + 2mr) / 2 = (m + 1) * r`. Waagrecht reicht er von Spalte `m + 1` bis `n - 2`, also von x = 2(m + 1)r bis x = 2(n - 1)r. Dort liegt die Mitte bei `(m + n) * r`.'
loesung: |
  **Ansatz:** Eingabe prüfen, dann jede farbige Gruppe als einfache Schleife mit einem festen und einem laufenden Index zeichnen. Rot zuerst, damit Blau sie nicht überdeckt.
  ---
  Rot: Zeile 0 mit `j` = `m + 1` bis `n - 1` und Spalte `m` mit allen `i`. Dazu Zeile `n - 1` mit `j` = 0 bis `m - 1`. Die Grenzen sind so gewählt, dass keine Zelle doppelt vorkommt.
  ---
  Blau: Spalte `n - 1` mit `i` = 1 bis `m - 1`, dann Zeile `m` mit allen `j` außer `m`. Die Zelle `(m, n - 1)` gehört nur zur Zeile, deshalb endet die Spalte bei `m - 1`.
  ---
  Orange: Der Bereich aus den Zeilen 1 bis `m - 1` und den Spalten `m + 1` bis `n - 2`. Mitte `((m + n) * r, (m + 1) * r)`, Radius `(m - 1) * r`. Für `n = 5` sind das die Mitte (210, 90) und der Radius 30, also genau eine Zelle.
  ---
  Probe mit `n = 19`: `r ≈ 7,89`, `m = 9`. Der orange Kreis hat den Radius 8r ≈ 63,2 und füllt 8 mal 8 Zellen, die Spalten 10 bis 17 und die Zeilen 1 bis 8.
````

```reflexion
frage: Warum verlangt das Aufgabenblatt ein ungerades n? Was würde mit dem Kreuz aus Kreisen passieren, wenn man n = 6 zulässt?
antwort: |
  Bei ungeradem n gibt es eine mittlere Zelle m = n / 2, deren Mittelpunkt genau in der Fenstermitte liegt. Links
  und rechts davon liegen gleich viele Zellen. Bei n = 6 ist m = 3, aber die Fenstermitte liegt auf der Grenze
  zwischen Zelle 2 und Zelle 3. Die rote Spalte stünde dann rechts von der Mitte, mit drei Zellen links und nur zwei
  rechts. Das Muster wäre nicht mehr symmetrisch. Darum prüft das Programm die Eingabe, bevor es zeichnet.
```

## Optische Täuschungen: Café-Wall, Pinna und Ouchi

```aufgabe
id: gr-t-check
titel: Was liegt oben?
niveau: 1
art: check
angabe: |
  ```java
  cd.setColor(Palette.RED);
  cd.fillSquare(0, 0, 100);
  cd.setColor(Palette.WHITE);
  cd.fillCircle(50, 50, 30);
  ```
  Welche Farbe sieht man im Punkt (50, 50)? (Wiederholung: [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild))
teile:
  - typ: auswahl
    optionen: ['Weiß', 'Rot', 'Eine Mischung aus Rot und Weiß']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der weiße Kreis wird **nach** dem roten Quadrat gezeichnet. Später Gezeichnetes liegt oben.
      - wert: 2
        meldung: Ausgefüllte Formen sind nicht durchsichtig. Die obere Form verdeckt die untere vollständig.
loesung: |
  Das rote Quadrat deckt (0, 0) bis (100, 100) ab. Der weiße Kreis mit Mittelpunkt (50, 50) wird danach gezeichnet.
  ---
  Er liegt oben und verdeckt das Rot in seinem Bereich. Im Punkt (50, 50) sieht man Weiß.
```

In den vorliegenden Aufgabenblättern 2 von 2021 bis 2023 ist Aufgabe 1 immer eine **optische Täuschung**. Das ist ein Bild, bei dem das Gehirn etwas
anderes sieht, als tatsächlich gezeichnet ist. Bei der **Café-Wall**-Täuschung und ihren Verwandten wirken
schnurgerade Kanten schief oder wellig. Bei der **Pinna**-Täuschung scheint sich ein Bildteil zu bewegen, wenn man den
Kopf vor und zurück bewegt. Bei der **Ouchi**-Täuschung scheint die Mitte über dem Hintergrund zu schweben.

So unterschiedlich die Wirkung ist, die Bausteine sind immer dieselben drei, und du kennst sie schon:

1. ein **Raster** aus gleich großen Formen, berechnet mit der Koordinatenformel aus [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe),
2. eine **Positionsbedingung** mit dem Rest-Operator `%` (man nennt ihn auch **Modulo**), die die Farbe wählt, wie beim Schachbrett aus [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett),
3. die richtige **Zeichenreihenfolge**, damit die richtigen Formen oben liegen.

:::definition[Malerprinzip]
CodeDraw zeichnet wie ein Maler mit deckender Farbe: Jede neue Form überdeckt alles, was an derselben Stelle schon
gezeichnet ist. Was am Ende sichtbar sein soll, wird deshalb **von hinten nach vorne** gezeichnet. Die Reihenfolge
der Zeichenaufrufe legt fest, welche Form oben liegt.
:::

**Beispiel:** Bei der Pinna-Täuschung liegt ein weißes Quadrat über der Mitte eines Kreisrasters. Erst kommen die
Kreise, dann das weiße Quadrat, dann die kleinen Quadrate darauf. In umgekehrter Reihenfolge wären die kleinen
Quadrate unter dem weißen Quadrat verschwunden.

**Nichtbeispiel:** Bei einer Reihe aus Quadraten, die sich nicht berühren, spielt die Reihenfolge **keine** Rolle. Wo
sich nichts überlappt, kann nichts verdeckt werden. Das Malerprinzip ist nur dort eine Entscheidung, wo Formen
übereinander liegen.

```aufgabe
id: gr-t-check-reihenfolge
titel: Was zuerst zeichnen?
niveau: 1
art: check
angabe: |
  Ein kleines weißes Quadrat soll sichtbar **auf** einem großen schwarzen Quadrat liegen. Was muss zuerst gezeichnet
  werden?
teile:
  - typ: auswahl
    optionen: ['das große schwarze Quadrat', 'das kleine weiße Quadrat', 'Das ist egal.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Was später gezeichnet wird, liegt oben. Käme das schwarze Quadrat danach, würde es das weiße verdecken.
      - wert: 2
        meldung: Die beiden Quadrate überlappen sich. Dann entscheidet die Reihenfolge, welches oben liegt.
loesung: |
  Malerprinzip: Was oben liegen soll, kommt zuletzt.
  ---
  Also zuerst das große schwarze Quadrat, dann das kleine weiße darauf.
```

:::beispiel[Schachbrett mit Kreuzen (Café-Wall-Variante)]
Nach dem Vorbild von Aufgabenblatt 2 (WS 2023), mit eigenen Maßen und Farben. Ein Fenster mit 400 mal 300 Pixeln, darin 8 mal 6
Quadrate mit Seite 50. Dunkle Quadrate haben die Farbe `Palette.fromRGB(40, 70, 110)`, helle `Palette.fromRGB(130, 160, 200)`.
An jedem **inneren** Eckpunkt, an dem vier Quadrate zusammenstoßen, liegt ein kleines Kreuz aus zwei Balken mit 16
mal 4 Pixeln. Ist `(i + j)` gerade, ist der waagrechte Balken schwarz und der senkrechte weiß, sonst umgekehrt.

```java
CodeDraw cd = new CodeDraw(400, 300);
for (int i = 0; i < 6; i++) {
    for (int j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            cd.setColor(Palette.fromRGB(40, 70, 110));
        } else {
            cd.setColor(Palette.fromRGB(130, 160, 200));
        }
        cd.fillSquare(50 * j, 50 * i, 50);
    }
}
for (int i = 1; i < 6; i++) {
    for (int j = 1; j < 8; j++) {
        int x = 50 * j;
        int y = 50 * i;
        if ((i + j) % 2 == 0) {
            cd.setColor(Palette.BLACK);
        } else {
            cd.setColor(Palette.WHITE);
        }
        cd.fillRectangle(x - 8, y - 2, 16, 4);
        if ((i + j) % 2 == 0) {
            cd.setColor(Palette.WHITE);
        } else {
            cd.setColor(Palette.BLACK);
        }
        cd.fillRectangle(x - 2, y - 8, 4, 16);
    }
}
cd.show();
```

- **Erste Doppelschleife:** das Schachbrett. Quadrat `(i, j)` hat die linke obere Ecke `(50 * j, 50 * i)`, Rand und Abstand sind 0.
- **Zweite Doppelschleife:** die Kreuze. Die inneren Eckpunkte liegen bei `x = 50 * j` mit `j` von 1 bis 7 und `y = 50 * i` mit `i` von 1 bis 5. Die Ränder des Fensters bekommen kein Kreuz.
- Ein Balken soll **mittig** auf dem Eckpunkt liegen. Der waagrechte ist 16 breit und 4 hoch, also beginnt er 8 links und 2 oberhalb des Punkts: `(x - 8, y - 2)`. Beim senkrechten ist es umgekehrt.
- **Reihenfolge:** Die Kreuze kommen nach dem Schachbrett, sonst wären sie verdeckt. Im Kreuz selbst liegt der senkrechte Balken über dem waagrechten.

**Zählprobe:** 8 · 6 = 48 Quadrate und 7 · 5 = 35 Kreuze mit je 2 Balken, zusammen 48 + 70 = 118 Formen.
:::

:::beispiel[Kreise und Quadrate in Schichten (Pinna-Variante)]
Nach dem Vorbild von Aufgabenblatt 2 (WS 2022): Fenstergröße `ws = 360`, Kreisradius `r = ws / 60 = 6`.

1. **15 mal 15 Kreise**, schwarz gefüllt, Mittelpunkte bei `(2r + 4r · j, 2r + 4r · i)`, also bei 12, 36, 60, … bis 348.
2. **Darüber graue Ringe**: an denselben Mittelpunkten ein Kreisumriss in `Palette.GRAY` mit Linienbreite 3.
3. **Darüber ein weißes Quadrat** in der Mitte. Seine linke obere Ecke liegt bei `ws / 4 + r = 96`, die Seite ist `ws / 2 - 2r = 168`. Es bekommt einen schwarzen Umriss (Linienbreite 1).
4. **Darauf 7 mal 7 kleine Quadrate** als schwarze Umrisse mit Seite `2r = 12`. Das erste beginnt bei `ws / 4 + 2r = 102`, der Abstand von Anfang zu Anfang ist `4r = 24`.

```java
int ws = 360;
int r = ws / 60;
CodeDraw cd = new CodeDraw(ws, ws);
for (int i = 0; i < 15; i++) {
    for (int j = 0; j < 15; j++) {
        cd.setColor(Palette.BLACK);
        cd.fillCircle(2 * r + 4 * r * j, 2 * r + 4 * r * i, r);
        cd.setLineWidth(3);
        cd.setColor(Palette.GRAY);
        cd.drawCircle(2 * r + 4 * r * j, 2 * r + 4 * r * i, r);
    }
}
cd.setLineWidth(1);
cd.setColor(Palette.WHITE);
cd.fillSquare(ws / 4 + r, ws / 4 + r, ws / 2 - 2 * r);
cd.setColor(Palette.BLACK);
cd.drawSquare(ws / 4 + r, ws / 4 + r, ws / 2 - 2 * r);
for (int i = 0; i < 7; i++) {
    for (int j = 0; j < 7; j++) {
        cd.drawSquare(ws / 4 + 2 * r + 4 * r * j, ws / 4 + 2 * r + 4 * r * i, 2 * r);
    }
}
cd.show();
```

**Probe der Maße:** Das weiße Quadrat reicht von 96 bis 96 + 168 = 264. Das letzte kleine Quadrat beginnt bei
102 + 6 · 24 = 246 und endet bei 258, also innerhalb des weißen Quadrats. Der letzte Kreis hat den Mittelpunkt
12 + 14 · 24 = 348 und reicht bis 354, also noch im Fenster.

**Probe der Reihenfolge:** Das weiße Quadrat verdeckt die Kreise in der Mitte. Die kleinen Quadrate kommen danach und
liegen deshalb sichtbar auf dem weißen Grund.
:::

:::merke[Rezept: eine optische Täuschung nachbauen]
1. Bild in Schichten zerlegen: Hintergrund, Raster, Abdeckung, Details. Die Schichten werden in dieser Reihenfolge gezeichnet.
2. Für jedes Raster: Anzahl der Zeilen und Spalten, Größe einer Zelle, Koordinatenformel.
3. Für jede Farbwahl: eine Positionsbedingung, meist `(i + j) % 2`.
4. Bei Formen, die mittig auf einem Punkt liegen sollen: die halbe Breite und Höhe abziehen.
5. Zählprobe: Wie viele Formen erwartest du? Stimmt die Zahl mit den Schleifengrenzen überein?
:::

```aufgabe
id: gr-t-farbe
titel: Hell oder dunkel?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Im Schachbrett aus dem Beispiel „Schachbrett mit Kreuzen“ ist ein Quadrat dunkel, wenn `(i + j) % 2 == 0` gilt.
  Welche Farbe hat das Quadrat in Zeile `i = 2` und Spalte `j = 3`?
teile:
  - typ: auswahl
    optionen: ['dunkel', 'hell', 'Das hängt von der Reihenfolge der Schleifen ab.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`2 + 3 = 5` ist ungerade, `5 % 2` ist 1. Die Bedingung `== 0` ist also falsch.'
      - wert: 2
        meldung: Die Farbe hängt nur von `i` und `j` ab, nicht davon, wann das Quadrat gezeichnet wird. Die Quadrate überlappen sich nicht.
hinweise:
  - Berechne `(2 + 3) % 2`.
loesung: |
  **Ansatz:** Positionsbedingung für `(i, j) = (2, 3)` auswerten.
  ---
  `(2 + 3) % 2 = 1`, also nicht 0. Das Quadrat ist hell.
```

:::achtung[Die Abdeckung zu früh gezeichnet]
Jemand zeichnet bei der Pinna-Variante zuerst das weiße Quadrat und danach das ganze Kreisraster. Die Kreise in der
Mitte liegen dann **über** dem weißen Quadrat. Man sieht ein vollständiges Kreisraster, und vom Quadrat bleiben nur
Lücken zwischen den Kreisen. Die Täuschung funktioniert nicht mehr, weil die ruhige weiße Fläche fehlt. Die Abdeckung
muss **nach** dem Raster kommen, das sie verdecken soll.
:::

:::achtung[Color ohne Import]
Das Aufgabenblatt schreibt Farben in der Form `new Color(rot, gruen, blau)`. Wer etwa `new Color(40, 70, 110)` in die
Datei `Taeuschung.java` übernimmt, erhält vom Compiler (hier für Zeile 6):

```text
Taeuschung.java:6: error: cannot find symbol
        cd.setColor(new Color(40, 70, 110));
                        ^
  symbol:   class Color
  location: class Taeuschung
```

Die Klasse `Color` gehört nicht zu CodeDraw, sondern zum Paket `java.awt`. `import codedraw.*;` holt sie nicht mit.
Entweder ergänzt du oben `import java.awt.Color;`, oder du verwendest `Palette.fromRGB(40, 70, 110)`, das ohne
zusätzlichen Import auskommt.
:::

```aufgabe
id: gr-t-anzahl
titel: Wie viele Formen?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Café-Wall-Variante hat 9 Spalten und 7 Zeilen von Quadraten. An jedem **inneren** Eckpunkt (an dem vier
  Quadrate zusammenstoßen) liegt ein Kreuz aus zwei Rechtecken. Wie viele `fill`-Aufrufe zeichnet das Programm
  insgesamt?
teile:
  - typ: zahl
    loesung: "9 * 7 + 2 * (8 * 6)"
    fehler:
      - wert: "111"
        meldung: Jedes Kreuz besteht aus **zwei** Rechtecken. Die Kreuze zählen also doppelt.
      - wert: "223"
        meldung: 'Du hast alle 10 · 8 Eckpunkte gezählt. Am Fensterrand stoßen aber keine vier Quadrate zusammen. Innen sind es 8 · 6.'
hinweise:
  - Bei 9 Spalten gibt es 8 innere senkrechte Grenzlinien, bei 7 Zeilen 6 innere waagrechte.
  - Die inneren Eckpunkte sind die Kreuzungen dieser Grenzlinien.
loesung: |
  **Ansatz:** Quadrate und Kreuze getrennt zählen.
  ---
  Quadrate: 9 · 7 = 63. Innere Eckpunkte: 8 · 6 = 48, je 2 Rechtecke, also 96.
  ---
  Zusammen 63 + 96 = 159 Aufrufe von `fillSquare` und `fillRectangle`.
```

```aufgabe
id: gr-t-reihenfolge
titel: Die Schichten der Pinna-Täuschung
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Bring die Zeichenschritte der Pinna-Variante in die richtige Reihenfolge, damit am Ende alles wie im Beispiel
  „Kreise und Quadrate in Schichten“ sichtbar ist.
teile:
  - typ: reihenfolge
    elemente:
      - schwarze gefüllte Kreise des Rasters
      - graue Ringe über den Kreisen
      - weißes gefülltes Quadrat in der Mitte
      - schwarzer Umriss des großen Quadrats
      - 7 mal 7 kleine Quadrate
    fehler:
      - wert: [2, 0, 1, 3, 4]
        meldung: Wird das weiße Quadrat zuerst gezeichnet, malen die Kreise danach darüber. Die Mitte wäre nicht mehr frei.
      - wert: [1, 0, 2, 3, 4]
        meldung: Die gefüllten schwarzen Kreise verdecken die grauen Ringe, wenn sie danach kommen. Der Ring soll sichtbar auf der Scheibe liegen.
hinweise:
  - Malerprinzip, von hinten nach vorne.
  - Ein gefüllter Kreis verdeckt einen gleich großen Ring, wenn er nach ihm kommt.
loesung: |
  **Ansatz:** Malerprinzip. Was ganz hinten liegt, kommt zuerst.
  ---
  Zuerst die Scheiben, darauf die Ringe. Dann das weiße Quadrat, das die Mitte abdeckt, und sein Umriss.
  ---
  Zuletzt die kleinen Quadrate, die auf dem weißen Grund liegen.
```

```aufgabe
id: gr-t-kreuz-koordinaten
titel: Wo liegt der senkrechte Balken?
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Im Schachbrett mit Quadraten der Seite 50 liegt der innere Eckpunkt mit `i = 2` und `j = 3` bei `(50 * j, 50 * i)`.
  Der senkrechte Balken des Kreuzes ist 4 breit und 16 hoch und liegt mittig auf dem Eckpunkt. Gib die linke obere
  Ecke (x, y) für `fillRectangle(x, y, 4, 16)` an.
teile:
  - typ: zahl
    label: x
    loesung: "50 * 3 - 4 / 2"
    fehler:
      - wert: "150"
        meldung: 150 ist der Eckpunkt selbst. Damit der Balken mittig liegt, beginnt er eine halbe Balkenbreite weiter links.
      - wert: "142"
        meldung: Du hast die halbe **Höhe** abgezogen. Waagrecht zählt die Breite des senkrechten Balkens, also 4.
  - typ: zahl
    label: y
    loesung: "50 * 2 - 16 / 2"
    fehler:
      - wert: "98"
        meldung: Senkrecht ist der Balken 16 hoch. Abziehen musst du die halbe Höhe, also 8.
hinweise:
  - Bestimme zuerst den Eckpunkt.
  - Mittig heißt, um die halbe Breite nach links und um die halbe Höhe nach oben verschieben.
gefuehrt:
  - text: Wo liegt der Eckpunkt (x-Wert)?
    teil: { typ: zahl, loesung: "150" }
    erklaerung: '`50 · 3 = 150`.'
  - text: Wo liegt der Eckpunkt (y-Wert)?
    teil: { typ: zahl, loesung: "100" }
    erklaerung: '`50 · 2 = 100`.'
  - text: Um wie viel musst du nach links und um wie viel nach oben gehen?
    erklaerung: Um die halbe Breite 4 / 2 = 2 nach links, um die halbe Höhe 16 / 2 = 8 nach oben.
loesung: |
  **Ansatz:** Eckpunkt bestimmen, dann halbe Breite und halbe Höhe abziehen.
  ---
  Eckpunkt (150, 100). Linke obere Ecke: x = 150 − 2 = 148, y = 100 − 8 = 92.
  ---
  Probe: Der Balken reicht waagrecht von 148 bis 152 und senkrecht von 92 bis 108. Seine Mitte ist (150, 100).
```

````aufgabe
id: gr-t-schachbrett-code
titel: Das Schachbrett der Täuschung
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS2023, Aufgabe 1 (Quadrate der Täuschung, nachgebaut mit eigenen Maßen)
angabe: |
  Zeichne in einem Fenster mit 360 mal 300 Pixeln 6 Spalten und 5 Zeilen ausgefüllter Quadrate mit Seite 60, die das
  Fenster lückenlos füllen. Links oben ist das Quadrat **hell** (`Palette.fromRGB(130, 160, 200)`), daneben und darunter
  dunkel (`Palette.fromRGB(40, 70, 110)`), wie bei einem Schachbrett. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Schachbrett {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(360, 300);
              // TODO
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Schachbrett {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(360, 300);
              for (int i = 0; i < 5; i++) {
                  for (int j = 0; j < 6; j++) {
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.fromRGB(130, 160, 200));
                      } else {
                          cd.setColor(Palette.fromRGB(40, 70, 110));
                      }
                      cd.fillSquare(60 * j, 60 * i, 60);
                  }
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "30 Quadrate im Schachbrettmuster" }
    fehler:
      - { wert: 1, meldung: "Prüfe die Ecke links oben: (0, 0) muss hell sein. Und prüfe die Anzahl: 5 Zeilen mal 6 Spalten. Die Zeile bestimmt y, die Spalte x." }
hinweise:
  - Zwei verschachtelte Schleifen, Zeilen `i` von 0 bis 4, Spalten `j` von 0 bis 5. Linke obere Ecke `(60 * j, 60 * i)`.
  - 'Hell bei `(i + j) % 2 == 0`, sonst dunkel. Die Farbe vor jedem Quadrat setzen.'
loesung: |
  **Ansatz:** Raster ohne Rand und Abstand, Farbe über die Schachbrettbedingung.
  ---
  ```java
  for (int i = 0; i < 5; i++) {
      for (int j = 0; j < 6; j++) {
          if ((i + j) % 2 == 0) {
              cd.setColor(Palette.fromRGB(130, 160, 200));
          } else {
              cd.setColor(Palette.fromRGB(40, 70, 110));
          }
          cd.fillSquare(60 * j, 60 * i, 60);
      }
  }
  ```
  ---
  Probe: Das letzte Quadrat (`i = 4`, `j = 5`) liegt bei (300, 240) und endet bei (360, 300), genau in der Fensterecke. Die Summe 4 + 5 = 9 ist ungerade, also ist es dunkel. Hell sind nur Quadrate mit gerader Summe, wie das links oben.
````

````aufgabe
id: gr-t-ringe
titel: Kreisraster mit Abdeckung
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS2022, Aufgabe 1 (Pinna, vereinfacht nachgebaut)
angabe: |
  Fenster 240 mal 240 Pixel. Zeichne in dieser Reihenfolge:

  1. 8 mal 8 Kreise mit den Mittelpunkten `(15 + 30 * j, 15 + 30 * i)`. An jedem Mittelpunkt zuerst ein schwarz gefüllter Kreis mit Radius 5. Direkt danach ein grauer Kreisumriss (`Palette.GRAY`, Linienbreite 2) mit demselben Mittelpunkt und Radius 5.
  2. Ein weiß gefülltes Quadrat mit linker oberer Ecke (60, 60) und Seite 120.
  3. Einen schwarzen Umriss desselben Quadrats mit Linienbreite 1.

  Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Ringe {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(240, 240);
              // TODO
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Ringe {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(240, 240);
              for (int i = 0; i < 8; i++) {
                  for (int j = 0; j < 8; j++) {
                      cd.setColor(Palette.BLACK);
                      cd.fillCircle(15 + 30 * j, 15 + 30 * i, 5);
                      cd.setLineWidth(2);
                      cd.setColor(Palette.GRAY);
                      cd.drawCircle(15 + 30 * j, 15 + 30 * i, 5);
                  }
              }
              cd.setColor(Palette.WHITE);
              cd.fillSquare(60, 60, 120);
              cd.setLineWidth(1);
              cd.setColor(Palette.BLACK);
              cd.drawSquare(60, 60, 120);
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, reihenfolge: true, beschreibung: "Kreise, Ringe, dann Abdeckung in dieser Reihenfolge" }
    fehler:
      - { wert: 1, meldung: "Hier zählt auch die Reihenfolge: je Mittelpunkt zuerst die Scheibe, dann der Ring, und erst nach allen 64 Kreisen das weiße Quadrat und sein Umriss. Ist die Linienbreite des Rings 2 und die des Quadratumrisses 1?" }
hinweise:
  - Zwei verschachtelte Schleifen über `i` und `j` von 0 bis 7. In der inneren Schleife zuerst Scheibe, dann Ring.
  - 'Die Linienbreite zählt nur für Umrisse. Setze sie vor dem Ring auf 2 und vor dem Quadratumriss auf 1.'
loesung: |
  **Ansatz:** Malerprinzip. Raster aus Scheiben und Ringen zuerst, dann die Abdeckung.
  ---
  ```java
  for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
          cd.setColor(Palette.BLACK);
          cd.fillCircle(15 + 30 * j, 15 + 30 * i, 5);
          cd.setLineWidth(2);
          cd.setColor(Palette.GRAY);
          cd.drawCircle(15 + 30 * j, 15 + 30 * i, 5);
      }
  }
  cd.setColor(Palette.WHITE);
  cd.fillSquare(60, 60, 120);
  cd.setLineWidth(1);
  cd.setColor(Palette.BLACK);
  cd.drawSquare(60, 60, 120);
  ```
  ---
  Probe: Das weiße Quadrat reicht von 60 bis 180. Es verdeckt die Kreise mit den Mittelpunkten 75, 105, 135 und 165, also 4 mal 4 Kreise. Der Kreis bei 45 reicht nur bis 50 und bleibt sichtbar.
````

```aufgabe
id: gr-t-zeilen
titel: Warum kompiliert die Täuschung nicht?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Studentin übernimmt die Schreibweise `new Color(...)` aus dem Aufgabenblatt. Welche Zeilen kompilieren nicht?
teile:
  - typ: zeilen
    code: |
      import codedraw.*;

      public class Taeuschung {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setColor(new Color(40, 70, 110));
              cd.fillSquare(0, 0, 50);
              cd.setColor(Palette.fromRGB(130, 160, 200));
              cd.fillSquare(50, 0, 50)
              cd.show();
          }
      }
    loesung: [6, 9]
    fehler:
      - wert: [9]
        meldung: 'Zeile 6 verwendet die Klasse `Color`. Wird sie importiert? `import codedraw.*;` holt nur Klassen aus dem Paket `codedraw`.'
      - wert: [6, 8, 9]
        meldung: '`Palette.fromRGB` gehört zu CodeDraw und ist mit `import codedraw.*;` verfügbar. Zeile 8 ist in Ordnung.'
      - wert: [6]
        meldung: Schau auf das Ende von Zeile 9.
hinweise:
  - Prüfe jede Zeile auf fehlende Strichpunkte und auf Klassen, die nicht importiert sind.
  - '`Color` gehört zum Paket `java.awt`.'
loesung: |
  **Ansatz:** Den Code wie der Compiler lesen: zuerst Satzzeichen, dann Namen und Typen.
  ---
  Zeile 9: Nach `fillSquare(50, 0, 50)` fehlt der Strichpunkt (`';' expected`). Solange dieser Fehler besteht, meldet der Compiler **nur** ihn.
  ---
  Zeile 6: `Color` ist unbekannt. Das meldet der Compiler, sobald der Strichpunkt ergänzt ist: `cannot find symbol` mit `symbol: class Color`. Der Grund: `java.awt.Color` ist nicht importiert. Abhilfe: `import java.awt.Color;` oder `Palette.fromRGB(40, 70, 110)`.
```

````aufgabe
id: gr-t-ouchi
titel: Die Ouchi-Täuschung
niveau: 3
lernziel: 7
kompetenz: modellieren
quelle: Aufgabenblatt 2 SS2023, Aufgabe 1 (Ouchi-Illusion, nachgebaut mit eigenen Maßen)
angabe: |
  Fenster 400 mal 400 Pixel. Die Täuschung besteht aus zwei Schichten von ausgefüllten Rechtecken in Schwarz
  (`Palette.BLACK`) und Weiß (`Palette.WHITE`).

  1. **Hintergrund** über das ganze Fenster (auch unter der Mitte): liegende Rechtecke mit 40 mal 10 Pixeln, 10 Spalten
     und 40 Zeilen. Das Rechteck in Zeile `i` und Spalte `j` hat die linke obere Ecke `(40 * j, 10 * i)`. Es ist
     schwarz, wenn `(i + j) % 2 == 0`, sonst weiß.
  2. **Mitte**, danach: ein Quadrat von (120, 120) bis (280, 280) aus **stehenden** Rechtecken mit 10 mal 40 Pixeln,
     16 Spalten und 4 Zeilen. Das Rechteck in Zeile `i` und Spalte `j` beginnt bei `(120 + 10 * j, 120 + 40 * i)`. Es ist
     schwarz, wenn `(i + j) % 2 == 0`, sonst weiß.

  Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Ouchi {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              // TODO
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Ouchi {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              for (int i = 0; i < 40; i++) {
                  for (int j = 0; j < 10; j++) {
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.BLACK);
                      } else {
                          cd.setColor(Palette.WHITE);
                      }
                      cd.fillRectangle(40 * j, 10 * i, 40, 10);
                  }
              }
              for (int i = 0; i < 4; i++) {
                  for (int j = 0; j < 16; j++) {
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.BLACK);
                      } else {
                          cd.setColor(Palette.WHITE);
                      }
                      cd.fillRectangle(120 + 10 * j, 120 + 40 * i, 10, 40);
                  }
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "400 liegende und 64 stehende Rechtecke" }
    fehler:
      - { wert: 1, meldung: "Zähle die Rechtecke: Der Hintergrund hat 40 · 10 = 400 und füllt das ganze Fenster, auch unter der Mitte. Die Mitte hat 4 · 16 = 64 stehende Rechtecke mit Breite 10 und Höhe 40." }
hinweise:
  - 'Zwei getrennte Doppelschleifen, eine je Schicht. Im Hintergrund wächst x um 40 und y um 10, in der Mitte x um 10 und y um 40.'
  - 'Prüfe die Grenzen: 10 · 40 = 400 und 40 · 10 = 400 füllen das Fenster. 16 · 10 = 160 und 4 · 40 = 160 füllen das Quadrat von 120 bis 280.'
loesung: |
  **Ansatz:** Zwei Schichten nach dem Malerprinzip. Jede Schicht ist ein Raster mit Schachbrettfarben, nur die Form der Rechtecke ist gedreht.
  ---
  ```java
  for (int i = 0; i < 40; i++) {
      for (int j = 0; j < 10; j++) {
          if ((i + j) % 2 == 0) {
              cd.setColor(Palette.BLACK);
          } else {
              cd.setColor(Palette.WHITE);
          }
          cd.fillRectangle(40 * j, 10 * i, 40, 10);
      }
  }
  ```
  ---
  ```java
  for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 16; j++) {
          if ((i + j) % 2 == 0) {
              cd.setColor(Palette.BLACK);
          } else {
              cd.setColor(Palette.WHITE);
          }
          cd.fillRectangle(120 + 10 * j, 120 + 40 * i, 10, 40);
      }
  }
  ```
  ---
  Probe: Die Mitte beginnt bei 120 = 3 · 40, also genau an einer Spaltengrenze des Hintergrunds, und endet bei 120 + 160 = 280 = 7 · 40. Weil die Mitte zuletzt kommt, verdeckt sie den Hintergrund dort vollständig.
````

```reflexion
frage: Bei der Café-Wall-Variante kommen die Kreuze nach dem Schachbrett. Könnte man auch zuerst alle Kreuze und dann alle Quadrate zeichnen? Begründe mit dem Malerprinzip.
antwort: |
  Nein. Die Kreuze liegen genau auf den Ecken der Quadrate, jeder Balken ragt in vier Quadrate hinein. Zeichnet man
  die Quadrate danach, übermalen sie die Balken vollständig, weil gefüllte Formen deckend sind. Man sähe nur das
  Schachbrett. Nach dem Malerprinzip muss alles, was oben sichtbar sein soll, später gezeichnet werden. Die Reihenfolge
  innerhalb einer Schicht ist dagegen egal, solange sich die Formen dieser Schicht nicht überlappen. Die Quadrate des
  Schachbretts könnte man also in jeder Reihenfolge zeichnen.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben gemischt. Sie enthalten auch Stoff aus [Kapitel 2, Ausdrücke, Datentypen, Casts und Strings](/lernen/ep1/ausdruecke),
[Kapitel 3, Verzweigungen und Bedingungen](/lernen/ep1/verzweigungen) und [Kapitel 4, Schleifen auf Zahlen und Strings](/lernen/ep1/schleifen). Das ist Absicht. Im Quiz und auf den
Aufgabenblättern steht nicht dabei, welches Werkzeug gemeint ist. Bei den ersten beiden Aufgaben musst du nichts
ausrechnen. Du entscheidest nur, welches Verfahren passt. Diese Entscheidung ist bei Mustern oft der schwerste
Schritt, denn mit dem falschen Verfahren wird jeder Code mühsam.

```aufgabe
id: gr-mix-verfahren
titel: Welches Verfahren passt?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Ordne jeder Aufgabe das Planungswerkzeug zu, das am besten passt. Du musst nichts programmieren.
teile:
  - typ: auswahl
    label: a) Eine Pyramide aus `*` mit `n` Zeilen auf der Konsole
    optionen: ['Zeilentabelle', 'Positionsbedingung', 'Koordinatenformel']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Jede Zeile der Pyramide besteht aus einem Block Leerzeichen und einem Block Sterne. Es gibt keine Lücken mitten in der Zeile.
      - wert: 2
        meldung: Koordinaten in Pixeln gibt es nur in CodeDraw. Auf der Konsole zählt man Zeichen.
  - typ: auswahl
    label: b) Ein Schachbrett aus `X` und `.` auf der Konsole
    optionen: ['Zeilentabelle', 'Positionsbedingung', 'Koordinatenformel']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In einer Schachbrettzeile wechseln die Zeichen bei jeder Stelle. Für jede Stelle muss eine Bedingung entscheiden.
      - wert: 2
        meldung: Es geht um Zeichen auf der Konsole, nicht um Pixel.
  - typ: auswahl
    label: c) 12 Kreise gleichmäßig über die Breite eines CodeDraw-Fensters verteilen
    optionen: ['Zeilentabelle', 'Positionsbedingung', 'Koordinatenformel']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Zeilentabelle zählt Zeichen in Konsolenzeilen. Hier brauchst du Pixelpositionen aus Rand, Größe und Abstand.
      - wert: 1
        meldung: Alle Kreise sehen gleich aus. Es ist nichts zu entscheiden, nur die Position zu berechnen.
hinweise:
  - Frag dich, ob Zeichen in Blöcken stehen, ob jede Stelle einzeln entschieden wird oder ob Pixelpositionen gesucht sind.
  - 'Zeilentabelle: Blöcke je Zeile. Positionsbedingung: Zeichen wechseln innerhalb der Zeile. Koordinatenformel: Positionen in CodeDraw.'
loesung: |
  **Ansatz:** Für jede Aufgabe klären, ob Zeichen gezählt, Stellen entschieden oder Pixel berechnet werden.
  ---
  a) Blöcke aus Leerzeichen und Sternen: Zeilentabelle. b) Zeichen wechseln an jeder Stelle: Positionsbedingung.
  ---
  c) Gleichmäßig verteilte Formen im Fenster: Koordinatenformel `rand + i * (s + abstand)`.
```

```aufgabe
id: gr-mix-zuerst
titel: Was klärst du zuerst?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: Welcher Schritt ist bei der jeweiligen Aufgabe der entscheidende erste? Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: a) Ein weißes Quadrat soll die Mitte eines Kreisrasters abdecken.
    optionen: ['Zeichenreihenfolge festlegen', 'Maßkette vom Fensterrand aufsummieren', 'Mittelindex m = n / 2 bestimmen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Position des Quadrats ist wichtig, aber ob es die Kreise verdeckt, entscheidet die Reihenfolge.
      - wert: 2
        meldung: Ein Mittelindex hilft bei Mustern, die sich an ungerades n anpassen. Hier geht es ums Überdecken.
  - typ: auswahl
    label: b) Eine Ellipse ist im Bild 15 Pixel rechts neben einem Quadrat eingezeichnet.
    optionen: ['Zeichenreihenfolge festlegen', 'Maßkette vom Fensterrand aufsummieren', 'Mittelindex m = n / 2 bestimmen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Formen überlappen sich nicht. Zuerst brauchst du die Koordinaten der Ellipse.
      - wert: 2
        meldung: Es gibt hier kein n. Die Position ergibt sich aus den Maßen im Bild.
  - typ: auswahl
    label: c) Ein Kreuz aus Kreisen soll für jedes ungerade n genau in der Fenstermitte liegen.
    optionen: ['Zeichenreihenfolge festlegen', 'Maßkette vom Fensterrand aufsummieren', 'Mittelindex m = n / 2 bestimmen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Reihenfolge brauchst du am Kreuzungspunkt, aber zuerst musst du wissen, wo die Mitte liegt.
      - wert: 1
        meldung: Es gibt keine festen Maße, die Lage hängt von n ab.
hinweise:
  - Überlege bei jeder Aufgabe, was ohne diesen Schritt garantiert schiefgeht.
loesung: |
  **Ansatz:** Für jede Aufgabe die Kernschwierigkeit benennen.
  ---
  a) Überdecken: Malerprinzip, also Reihenfolge. b) Position aus Maßen: Maßkette.
  ---
  c) Symmetrie bei veränderlichem n: Mittelindex `m = n / 2` und der Mittelpunkt `(m + 0.5) * d`.
```

```aufgabe
id: gr-mix-buchstaben
titel: Ein Buchstabendreieck
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (`char` als Zahl: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).)'
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 4; i++) {
          for (int j = 0; j <= i; j++) {
              System.out.print((char) ('a' + j));
          }
          System.out.println();
      }
    loesung: |
      a
      ab
      abc
      abcd
    fehler:
      - wert: "97\n9798\n979899\n979899100"
        meldung: 'Der Cast `(char)` macht aus der Zahl `''a'' + j` wieder ein Zeichen. Ohne ihn würden die Zahlen ausgegeben.'
      - wert: "a\nbb\nccc\ndddd"
        meldung: Ausgegeben wird `'a' + j`, nicht `'a' + i`. In jeder Zeile beginnt `j` wieder bei 0, also wieder bei `a`.
hinweise:
  - '`''a'' + j` ist eine Zahl (97 + j). Der Cast `(char)` macht daraus den Buchstaben.'
loesung: |
  **Ansatz:** Ein linksbündiges Dreieck. In Zeile `i` laufen die Buchstaben von `a` bis `'a' + i`.
  ---
  `i = 0`: `a`. `i = 1`: `ab`. `i = 2`: `abc`. `i = 3`: `abcd`.
  ---
  Dasselbe Prinzip brauchst du in der Aufgabe „Aufgabenblatt: Rautenfigur mit Buchstaben“ in [5.9 Prüfungsaufgaben](/lernen/ep1/grafik/pruefungsaufgaben). Dort besteht das Innere der Raute aus fortlaufenden Buchstaben.
```

```aufgabe
id: gr-mix-switch
titel: Zeichen mit switch wählen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (`switch` und Fallthrough: [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).)'
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 5; i++) {
          switch (i % 3) {
              case 0:
                  System.out.print("#");
                  break;
              case 1:
                  System.out.print("+");
              default:
                  System.out.print("-");
          }
      }
      System.out.println();
    loesung: |
      #+--#+-
    fehler:
      - wert: "#+-#+"
        meldung: Bei `case 1` fehlt ein `break`. Nach dem `+` fällt Java in `default` durch und gibt zusätzlich `-` aus.
      - wert: "#+-#+-"
        meldung: Für `i = 2` ist `i % 3` gleich 2. Kein `case` passt, also läuft `default` und gibt `-` aus.
hinweise:
  - Bestimme für `i` = 0 bis 4 den Wert `i % 3`.
  - Ohne `break` läuft ein `case` in den nächsten weiter.
loesung: |
  **Ansatz:** Für jedes `i` den Rest `i % 3` berechnen und das `switch` auswerten.
  ---
  Reste: 0, 1, 2, 0, 1. Rest 0 ergibt `#`. Rest 1 ergibt `+` und durch den Fallthrough `-`. Rest 2 ergibt `-`.
  ---
  Zusammen `#`, `+-`, `-`, `#`, `+-`, also `#+--#+-`.
```

```aufgabe
id: gr-mix-while
titel: Ein Muster mit while
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (while-Schleifen: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).)'
teile:
  - typ: ausgabe
    code: |
      int n = 4;
      int i = n;
      while (i > 0) {
          int j = 0;
          while (j < i) {
              System.out.print(j % 2);
              j++;
          }
          System.out.println();
          i -= 2;
      }
    loesung: |
      0101
      01
    fehler:
      - wert: "0101\n010\n01\n0"
        meldung: '`i` wird um **2** verringert, nicht um 1. Nach 4 kommt 2, dann 0, und bei 0 endet die äußere Schleife.'
      - wert: "0123\n01"
        meldung: 'Ausgegeben wird `j % 2`, der Rest bei Division durch 2. Er ist abwechselnd 0 und 1.'
hinweise:
  - Verfolge `i`. Für jeden Wert läuft die innere Schleife `i` Mal.
  - 'Die Zeichen sind `j % 2`, also 0, 1, 0, 1, …'
loesung: |
  **Ansatz:** Trace der äußeren Variable `i`: 4, 2, dann 0.
  ---
  `i = 4`: `j` = 0 bis 3, Ausgabe `0101`. `i = 2`: `j` = 0 und 1, Ausgabe `01`.
  ---
  Bei `i = 0` ist `0 > 0` falsch. Es bleiben zwei Zeilen.
```

```aufgabe
id: gr-mix-string
titel: Eine Zeile als String aufbauen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Strings verketten: [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten).)'
teile:
  - typ: ausgabe
    code: |
      String zeile = "";
      for (int i = 1; i <= 4; i++) {
          zeile = zeile + "*";
          System.out.println(zeile + zeile.length());
      }
    loesung: |
      *1
      **2
      ***3
      ****4
    fehler:
      - wert: "*\n**\n***\n****"
        meldung: 'Hinter jede Zeile wird noch `zeile.length()` gehängt, die Anzahl der Sterne.'
      - wert: "*1\n*2\n*3\n*4"
        meldung: '`zeile = zeile + "*"` hängt an den bisherigen String an. `zeile` wird also mit jedem Durchlauf länger.'
hinweise:
  - Verfolge `zeile` nach jedem Durchlauf. Sie wird jedes Mal um einen Stern länger.
  - '`zeile + zeile.length()` ist String plus Zahl, also wird die Zahl angehängt.'
loesung: |
  **Ansatz:** Akkumulator-String. In jedem Durchlauf kommt ein Stern dazu, dann wird die Zeile mit ihrer Länge ausgegeben.
  ---
  Nach Durchlauf 1: `*`, Länge 1. Nach Durchlauf 2: `**`, Länge 2. Und so weiter bis `****`.
  ---
  So kann man ein Dreieck auch ohne innere Schleife ausgeben. Die Wiederholung steckt dann im wachsenden String.
```

```aufgabe
id: gr-mix-cast
titel: Radius abschneiden
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Casts: [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).)'
teile:
  - typ: ausgabe
    code: |
      double r = 300.0 / 14;
      System.out.println((int) r);
      System.out.println((int) (r * 14));
      System.out.println((int) r * 14);
    loesung: |
      21
      300
      294
    fehler:
      - wert: "21\n300\n300"
        meldung: 'Der Cast `(int)` bindet stärker als `*`. In der dritten Zeile wird zuerst `r` zu 21 abgeschnitten, dann mal 14 gerechnet.'
      - wert: "21.428571428571427\n300\n294"
        meldung: '`(int) r` schneidet die Nachkommastellen ab. Ausgegeben wird eine ganze Zahl.'
hinweise:
  - '`r` ist ungefähr 21,43. Ein Cast wirkt auf den Wert direkt rechts von ihm.'
loesung: |
  **Ansatz:** Bei jedem Cast prüfen, worauf er wirkt.
  ---
  `(int) r` ist 21. `(int) (r * 14)` schneidet erst nach der Multiplikation ab: `r * 14` ist 300.0, also 300.
  ---
  `(int) r * 14` ist `21 * 14 = 294`. Genau diese 6 fehlenden Pixel entstehen, wenn man den Radius zu früh in `int` umwandelt.
```

```aufgabe
id: gr-mix-intervall
titel: Die richtige Schleife für die Kreismitten
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Kreise sollen ihre Mittelpunkte bei x = 20, 50, 80, … haben, der letzte bei x = 290.
  Welche Schleife erzeugt genau diese x-Werte? (Intervalle in Schleifen: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).)
teile:
  - typ: auswahl
    optionen:
      - '`for (int x = 20; x <= 290; x += 30)`'
      - '`for (int x = 20; x < 290; x += 30)`'
      - '`for (int x = 20; x <= 290; x++)`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '290 = 20 + 9 · 30 wird genau getroffen. Mit `<` fehlt dieser letzte Kreis.'
      - wert: 2
        meldung: '`x++` erhöht um 1. Dann entstünde an jeder ganzen Zahl ein Kreis, nicht nur alle 30 Pixel.'
hinweise:
  - Der Schritt zwischen zwei Mittelpunkten ist 30.
  - Prüfe, ob 290 selbst erreicht wird und dazugehören soll.
loesung: |
  **Ansatz:** Start 20, Schritt 30, letzter Wert 290 eingeschlossen.
  ---
  20 + 9 · 30 = 290. Der letzte Wert wird also genau getroffen und muss mit `<=` eingeschlossen werden.
  ---
  Option 1 ist richtig und erzeugt 10 Kreise. Option 2 endet bei 260, Option 3 hat den falschen Schritt.
```

```aufgabe
id: gr-mix-vorrang
titel: UND und ODER in einer Positionsbedingung
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Vorrang von `&&` vor `||`: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).)'
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 3; j++) {
              if (i == 0 || j == 0 && i == 2) {
                  System.out.print("#");
              } else {
                  System.out.print(".");
              }
          }
          System.out.println();
      }
    loesung: |
      ###
      ...
      #..
    fehler:
      - wert: "###\n#..\n#.."
        meldung: '`&&` bindet stärker als `||`. Die Bedingung heißt `i == 0 || (j == 0 && i == 2)`. In Zeile 1 ist keiner der beiden Teile wahr.'
      - wert: "...\n...\n#.."
        meldung: 'Das wäre `(i == 0 || j == 0) && i == 2`. Ohne Klammern wird aber zuerst `&&` ausgewertet, und `i == 0` allein reicht für die ganze erste Zeile.'
hinweise:
  - Setze die unsichtbaren Klammern. `&&` wird vor `||` ausgewertet.
loesung: |
  **Ansatz:** Die Bedingung lautet mit Klammern `i == 0 || (j == 0 && i == 2)`.
  ---
  Zeile 0: `i == 0` ist wahr, also `###`. Zeile 1: beide Teile falsch, also `...`.
  ---
  Zeile 2: Nur bei `j = 0` ist `j == 0 && i == 2` wahr, also `#..`.
```

## Prüfungsaufgaben

Diese Aufgaben sind im Stil der Prüfungsteile gebaut. Die Quizfragen orientieren sich an den vorliegenden TUWEL-Tests
aus dem Wintersemester 2021, etwa Single Choice mit drei Optionen. Das genaue Format der Quiz im Wintersemester 2026
kennen wir nicht. Die Programmieraufgaben entsprechen den Aufgabenblättern 1 und 2: Die Ausgabe muss zeichengenau
stimmen, die Zeichnung muss die verlangten Formen enthalten. Löse die Quizfragen ohne Computer, mit Papier und
Zeilentabelle, in höchstens drei Minuten je Frage.

```aufgabe
id: gr-pa-quiz-sterne
titel: "Quiz: Sterne einer Doppelschleife"
niveau: 3
lernziel: 0
kompetenz: rechnen
punkte: 1
quelle: Tuwel-Test zur Vorbereitung (TUWEL-Test 1) WS2021, Frage 6 (Schleifenfrage, Stil nachgebaut)
angabe: |
  ```java
  int n = 6;
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j += 2) {
          System.out.print("*");
      }
      System.out.println();
  }
  ```
  Wie viele Sterne werden insgesamt ausgegeben?
teile:
  - typ: auswahl
    optionen: ['12', '21', '18']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '21 wäre 6 + 5 + 4 + 3 + 2 + 1, also mit Schrittweite 1. Hier springt `j` in Zweierschritten.'
      - wert: 2
        meldung: 'Die innere Schleife beginnt bei `j = i`, nicht bei 0. Mit jeder Zeile fallen Durchläufe weg.'
hinweise:
  - Bestimme für jedes `i` von 0 bis 5 die Werte von `j`.
  - 'Für `i = 0` sind es `j` = 0, 2, 4. Wie viele sind es für `i = 1`?'
loesung: |
  **Ansatz:** Die innere Grenze hängt von `i` ab. Zeile für Zeile zählen.
  ---
  `i = 0`: 0, 2, 4 (3). `i = 1`: 1, 3, 5 (3). `i = 2`: 2, 4 (2). `i = 3`: 3, 5 (2). `i = 4`: 4 (1). `i = 5`: 5 (1).
  ---
  3 + 3 + 2 + 2 + 1 + 1 = 12. Richtig ist Option 1.
```

```aufgabe
id: gr-pa-quiz-aussagen
titel: "Quiz: Aussagen zu einem Muster"
niveau: 3
lernziel: 3
kompetenz: verstehen
punkte: 2
angabe: |
  ```java
  int n = 5;
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          if (i == j || j == n / 2) {
              System.out.print("x");
          } else {
              System.out.print("o");
          }
      }
      System.out.println();
  }
  ```
  Beurteile die Aussagen. (Teilpunkte je richtig beurteilter Aussage.)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die mittlere Zeile enthält zwei `x`.
        richtig: false
        erklaerung: 'In Zeile 2 treffen sich die Diagonale (`j = 2`) und die mittlere Spalte (`j = 2`) an derselben Stelle. Es gibt nur ein `x`.'
      - text: Insgesamt werden 9 `x` ausgegeben.
        richtig: true
        erklaerung: '5 auf der Diagonale, 5 in der mittleren Spalte, der Punkt (2, 2) ist doppelt gezählt: 5 + 5 − 1 = 9.'
      - text: Ersetzt man `||` durch `&&`, wird genau ein `x` ausgegeben.
        richtig: true
        erklaerung: 'Dann müssen `i == j` und `j == 2` gleichzeitig gelten. Das ist nur bei (2, 2) der Fall.'
      - text: Die letzte Zeile lautet `ooxoo`.
        richtig: false
        erklaerung: 'In Zeile 4 ist auch `j = 4` ein `x`, weil `i == j`. Die Zeile lautet `ooxox`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'In der mittleren Zeile liegt das Diagonalen-`x` genau in der mittleren Spalte. Wie viele verschiedene Stellen sind das?'
      - wert: [f, r, r, r]
        meldung: 'Prüfe die letzte Zeile mit `i = 4`: Wo gilt `i == j`?'
hinweise:
  - Markiere die Diagonale `i == j` und die Spalte `j == 2` in einem 5 mal 5 Gitter.
  - Stellen, die zu beiden gehören, zählen nur einmal.
loesung: |
  **Ansatz:** Gitter zeichnen und beide Teilbedingungen markieren.
  ---
  Die Diagonale und die Spalte 2 schneiden sich in (2, 2). Zusammen sind es 9 Stellen, in der Mitte nur ein `x`.
  ---
  Mit `&&` bleibt nur (2, 2). Die letzte Zeile hat `x` bei `j = 2` und `j = 4`. Ergebnis: falsch, richtig, richtig, falsch.
```

```aufgabe
id: gr-pa-quiz-luecke
titel: "Quiz: Ein rechtsbündiges Zahlendreieck"
niveau: 3
lernziel: 1
kompetenz: anwenden
punkte: 2
angabe: |
  Für `n = 4` soll das Programm ausgeben:
  ```text
     1
    22
   333
  4444
  ```
  Ergänze die drei Lücken. Verwende `n`, `i` und `j`.
teile:
  - typ: lueckentext
    code: |
      int n = 4;
      for (int i = 1; i <= n; i++) {
          for (int j = 0; j < ___; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < ___; j++) {
              System.out.print(___);
          }
          System.out.println();
      }
    luecken: [["n - i", "-i + n"], ["i"], ["i"]]
    fehler:
      - wert: ["n - 1 - i", "i", "i"]
        meldung: 'Hier zählt `i` ab 1. In Zeile `i = 1` braucht es 3 Leerzeichen, also `n - i`. Mit `n - 1 - i` fehlt in jeder Zeile eins.'
      - wert: ["n - i", "i", "j"]
        meldung: 'Mit `j` stünde in Zeile 2 `01` statt `22`. Gesucht ist in jeder Zeile `i` Mal die Ziffer `i`.'
hinweise:
  - Achte darauf, dass `i` hier bei 1 beginnt.
  - 'Zeilentabelle: `i` = 1, 2, 3, 4 mit 3, 2, 1, 0 Leerzeichen und 1, 2, 3, 4 Ziffern.'
loesung: |
  **Ansatz:** Zeilentabelle mit `i` ab 1: Leerzeichen 3, 2, 1, 0, Ziffern 1, 2, 3, 4.
  ---
  Leerzeichen `n - i`, Ziffern `i` Stück, ausgegeben wird `i`.
  ---
  Probe für `i = 4`: 0 Leerzeichen und `4444`.
```

````aufgabe
id: gr-pa-blatt-formen
titel: "Aufgabenblatt: Trapez und Parallelogramm"
niveau: 3
lernziel: 2
kompetenz: anwenden
punkte: 3
quelle: Aufgabenblatt 1 WS2023, Aufgabe 3 (nachgebaut, Parallelogramm gespiegelt)
angabe: |
  Das Programm liest zwei Wahrheitswerte `istTrapez` und `istParallelogramm` und dann `breite ≥ 2` ein (wie das
  Einlesen geht, steht schon in der Vorlage).

  - Ist `istTrapez` wahr, gibt es das Trapez aus: Grundseite `breite`, Höhe `breite / 2`, jede Zeile zwei `#` kürzer und eine Stelle weiter eingerückt als die darunter.
  - Ist `istParallelogramm` wahr, gibt es danach das hohle Parallelogramm aus. Es hat `breite` Zeilen, jede eine Stelle **weniger** eingerückt als die vorige. Die letzte Zeile beginnt ganz links. Die erste und die letzte Zeile sind voll, dazwischen stehen `#`, `breite - 2` Leerzeichen, `#`.
  - Sind beide falsch, wird nichts ausgegeben.

  Rechts vom letzten `#` einer Zeile steht nie ein Leerzeichen. Für `true true 8` (Punkte für Leerzeichen):
  ```text
  ...##
  ..####
  .######
  ########
  .......########
  ......#......#
  .....#......#
  ....#......#
  ...#......#
  ..#......#
  .#......#
  ########
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Formen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              boolean istTrapez = eingabe.nextBoolean();
              boolean istParallelogramm = eingabe.nextBoolean();
              int breite = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Formen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              boolean istTrapez = eingabe.nextBoolean();
              boolean istParallelogramm = eingabe.nextBoolean();
              int breite = eingabe.nextInt();
              if (istTrapez) {
                  int h = breite / 2;
                  for (int i = 0; i < h; i++) {
                      for (int j = 0; j < h - 1 - i; j++) {
                          System.out.print(" ");
                      }
                      for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
                          System.out.print("#");
                      }
                      System.out.println();
                  }
              }
              if (istParallelogramm) {
                  for (int i = 0; i < breite; i++) {
                      for (int j = 0; j < breite - 1 - i; j++) {
                          System.out.print(" ");
                      }
                      for (int j = 0; j < breite; j++) {
                          if (i == 0 || i == breite - 1 || j == 0 || j == breite - 1) {
                              System.out.print("#");
                          } else {
                              System.out.print(" ");
                          }
                      }
                      System.out.println();
                  }
              }
          }
      }
    tests:
      - stdin: "true true 8"
        stdout: "   ##\n  ####\n ######\n########\n       ########\n      #      #\n     #      #\n    #      #\n   #      #\n  #      #\n #      #\n########\n"
        beschreibung: "beide Formen, breite = 8"
      - stdin: "false true 2"
        stdout: " ##\n##\n"
        beschreibung: "nur Parallelogramm, breite = 2"
      - stdin: "true false 13"
        stdout: "     ###\n    #####\n   #######\n  #########\n ###########\n#############\n"
        beschreibung: "nur Trapez, breite = 13"
      - stdin: "false false 4"
        stdout: ""
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 1, meldung: "Bei beiden Formen kommt zuerst das Trapez und direkt danach das Parallelogramm. Zwei getrennte if-Anweisungen, kein else." }
      - { wert: 3, meldung: "Das Trapez bei breite = 13 hat 13 / 2 = 6 Zeilen mit 3, 5, 7, 9, 11 und 13 Zeichen." }
hinweise:
  - Zwei getrennte `if`-Anweisungen, damit beide Formen ausgegeben werden können. Ein `else` würde das verhindern.
  - 'Übernimm die Lösungen aus „Das Trapez programmieren“ in [5.2 Trapez, Raute und Tannenbaum](/lernen/ep1/grafik/trapez-raute-und-tannenbaum). Übernimm außerdem „Das hohle Parallelogramm programmieren“ aus [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett).'
loesung: |
  **Ansatz:** Zwei unabhängige Formen, jede hinter ihrem eigenen `if`. Trapez mit Zeilentabelle, Parallelogramm mit Einrückung und Positionsbedingung.
  ---
  ```java
  if (istTrapez) {
      int h = breite / 2;
      for (int i = 0; i < h; i++) {
          for (int j = 0; j < h - 1 - i; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < breite - 2 * (h - 1 - i); j++) {
              System.out.print("#");
          }
          System.out.println();
      }
  }
  ```
  ---
  ```java
  if (istParallelogramm) {
      for (int i = 0; i < breite; i++) {
          for (int j = 0; j < breite - 1 - i; j++) {
              System.out.print(" ");
          }
          for (int j = 0; j < breite; j++) {
              if (i == 0 || i == breite - 1 || j == 0 || j == breite - 1) {
                  System.out.print("#");
              } else {
                  System.out.print(" ");
              }
          }
          System.out.println();
      }
  }
  ```
  ---
  Probe mit `true true 8`: Trapez mit `h = 4` (Zeilen mit 2, 4, 6 und 8 Zeichen), danach das Parallelogramm mit 8 Zeilen. Mit `false false` läuft keiner der beiden Blöcke.
````

````aufgabe
id: gr-pa-blatt-raute
titel: "Aufgabenblatt: Rautenfigur mit Buchstaben"
niveau: 3
lernziel: 2
kompetenz: anwenden
punkte: 3
quelle: Aufgabenblatt 2 WS2021, Aufgabe 2 (Rautenfiguren, mit anderen Zeichen nachgebaut)
angabe: |
  Das Programm liest eine ungerade Höhe `hoehe` (1 bis 25) ein und gibt eine Raute in einem Rechteck aus
  `hoehe` Zeilen mit je `hoehe + 1` Zeichen aus:

  - Außerhalb der Raute stehen Bindestriche `-`.
  - Der linke Rand der Raute ist in der oberen Hälfte `/`, in der unteren `\`, der rechte Rand umgekehrt. Die Mittelzeile beginnt und endet mit `|`.
  - Innen stehen fortlaufende Großbuchstaben, in jeder Zeile wieder ab `A`.

  Verwende keine String-Variablen und keine Methoden außer `print` und `println` (das Einlesen in der Vorlage ausgenommen). Zeichen wie `"/"` direkt in `print` sind erlaubt.
  Einen Backslash gibt man als `"\\"` aus. Für `hoehe = 5`:
  ```text
  --/\--
  -/AB\-
  |ABCD|
  -\AB/-
  --\/--
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Raute {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int hoehe = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Raute {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int hoehe = eingabe.nextInt();
              int m = hoehe / 2;
              for (int i = 0; i < hoehe; i++) {
                  int d = i - m;
                  if (d < 0) {
                      d = -d;
                  }
                  for (int j = 0; j < d; j++) {
                      System.out.print("-");
                  }
                  if (i < m) {
                      System.out.print("/");
                  } else if (i > m) {
                      System.out.print("\\");
                  } else {
                      System.out.print("|");
                  }
                  for (int j = 0; j < 2 * (m - d); j++) {
                      System.out.print((char) ('A' + j));
                  }
                  if (i < m) {
                      System.out.print("\\");
                  } else if (i > m) {
                      System.out.print("/");
                  } else {
                      System.out.print("|");
                  }
                  for (int j = 0; j < d; j++) {
                      System.out.print("-");
                  }
                  System.out.println();
              }
          }
      }
    tests:
      - stdin: "5"
        stdout: "--/\\--\n-/AB\\-\n|ABCD|\n-\\AB/-\n--\\/--\n"
        beschreibung: "hoehe = 5"
      - stdin: "1"
        stdout: "||\n"
        beschreibung: "hoehe = 1: nur die Mittelzeile"
      - stdin: "7"
        stdout: "---/\\---\n--/AB\\--\n-/ABCD\\-\n|ABCDEF|\n-\\ABCD/-\n--\\AB/--\n---\\/---\n"
        beschreibung: "hoehe = 7"
      - stdin: "11"
        stdout: "-----/\\-----\n----/AB\\----\n---/ABCD\\---\n--/ABCDEF\\--\n-/ABCDEFGH\\-\n|ABCDEFGHIJ|\n-\\ABCDEFGH/-\n--\\ABCDEF/--\n---\\ABCD/---\n----\\AB/----\n-----\\/-----\n"
        versteckt: true
    regeln: { erlaubteApi: ["Scanner"] }
    fehler:
      - { wert: 1, meldung: "Prüfe die Mittelzeile: Sie hat d = 0, also kein -, dann |, dann 2 · m Buchstaben, dann |. In der oberen Hälfte steht links / und rechts \\, in der unteren umgekehrt." }
      - { wert: 2, meldung: "Bei hoehe = 1 ist m = 0. Die einzige Zeile ist die Mittelzeile mit 0 Buchstaben: ||." }
hinweise:
  - 'Mittelzeile `m = hoehe / 2`, Abstand `d` als Betrag von `i - m` (ohne `Math.abs`: bei negativem Wert das Vorzeichen umdrehen). Zeilentabelle: `d` mal `-`, Randzeichen, `2 * (m - d)` Buchstaben, Randzeichen, `d` mal `-`.'
  - 'Die Buchstaben bekommst du mit `(char) (''A'' + j)`. Für die Randzeichen unterscheidet ein `if` drei Fälle: `i < m`, `i > m` und die Mittelzeile.'
loesung: |
  **Ansatz:** Symmetrisches Muster mit dem Abstand `d` zur Mittelzeile. Jede Zeile besteht aus fünf Teilen: `-`, linker Rand, Buchstaben, rechter Rand, `-`.
  ---
  Zeilentabelle für `hoehe = 5` (`m = 2`): `d` = 2, 1, 0, 1, 2. Buchstaben `2 * (m - d)` = 0, 2, 4, 2, 0. Die Zeilenlänge ist `2d + 2 + 2(m - d) = 2m + 2 = hoehe + 1`.
  ---
  ```java
  int m = hoehe / 2;
  for (int i = 0; i < hoehe; i++) {
      int d = i - m;
      if (d < 0) {
          d = -d;
      }
      for (int j = 0; j < d; j++) {
          System.out.print("-");
      }
      if (i < m) {
          System.out.print("/");
      } else if (i > m) {
          System.out.print("\\");
      } else {
          System.out.print("|");
      }
      for (int j = 0; j < 2 * (m - d); j++) {
          System.out.print((char) ('A' + j));
      }
      if (i < m) {
          System.out.print("\\");
      } else if (i > m) {
          System.out.print("/");
      } else {
          System.out.print("|");
      }
      for (int j = 0; j < d; j++) {
          System.out.print("-");
      }
      System.out.println();
  }
  ```
  ---
  Probe mit `hoehe = 1`: `m = 0`, eine Zeile mit `d = 0`, keine Buchstaben, Ausgabe `||`.
````

````aufgabe
id: gr-pa-blatt-cafe
titel: "Aufgabenblatt: Schachbrett mit Kreuzen"
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 3
quelle: Aufgabenblatt 2 WS2023, Aufgabe 1 (nachgebaut mit eigenen Maßen)
angabe: |
  Fenster 280 mal 200 Pixel. Zeichne zuerst 7 Spalten und 5 Zeilen ausgefüllter Quadrate mit Seite 40, ohne Lücken.
  Quadrat `(i, j)` (Zeile `i`, Spalte `j`) ist dunkel (`Palette.fromRGB(40, 70, 110)`), wenn `(i + j) % 2 == 0`, sonst hell
  (`Palette.fromRGB(130, 160, 200)`).

  Danach kommt an jeden **inneren** Eckpunkt `(40 * j, 40 * i)` ein Kreuz aus zwei ausgefüllten Rechtecken, beide mittig
  auf dem Eckpunkt. Zuerst kommt ein waagrechtes mit 16 mal 4 Pixeln, dann ein senkrechtes mit 4 mal 16 Pixeln. Ist
  `(i + j)` gerade, ist das waagrechte schwarz und das senkrechte weiß, sonst umgekehrt. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class CafeWall {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(280, 200);
              // TODO
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class CafeWall {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(280, 200);
              for (int i = 0; i < 5; i++) {
                  for (int j = 0; j < 7; j++) {
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.fromRGB(40, 70, 110));
                      } else {
                          cd.setColor(Palette.fromRGB(130, 160, 200));
                      }
                      cd.fillSquare(40 * j, 40 * i, 40);
                  }
              }
              for (int i = 1; i < 5; i++) {
                  for (int j = 1; j < 7; j++) {
                      int x = 40 * j;
                      int y = 40 * i;
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.BLACK);
                      } else {
                          cd.setColor(Palette.WHITE);
                      }
                      cd.fillRectangle(x - 8, y - 2, 16, 4);
                      if ((i + j) % 2 == 0) {
                          cd.setColor(Palette.WHITE);
                      } else {
                          cd.setColor(Palette.BLACK);
                      }
                      cd.fillRectangle(x - 2, y - 8, 4, 16);
                  }
              }
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, reihenfolge: true, beschreibung: "erst 35 Quadrate, dann 24 Kreuze" }
    fehler:
      - { wert: 1, meldung: "Hier zählt die Reihenfolge: erst alle Quadrate zeilenweise, dann die Kreuze zeilenweise, je Kreuz erst waagrecht, dann senkrecht. Innere Eckpunkte gibt es für i = 1 bis 4 und j = 1 bis 6, also 24 Stück." }
hinweise:
  - 'Zwei getrennte Doppelschleifen. Die zweite beginnt bei 1, denn am Fensterrand stoßen keine vier Quadrate zusammen.'
  - 'Mittig auf `(x, y)`: waagrechter Balken bei `(x - 8, y - 2)`, senkrechter bei `(x - 2, y - 8)`.'
loesung: |
  **Ansatz:** Malerprinzip mit zwei Schichten: Schachbrett, dann Kreuze. Beide Schichten sind Raster mit der Schachbrettbedingung.
  ---
  Schachbrett: `i` von 0 bis 4, `j` von 0 bis 6, Quadrat bei `(40 * j, 40 * i)`, Farbe nach `(i + j) % 2`.
  ---
  Kreuze: `i` von 1 bis 4, `j` von 1 bis 6, Eckpunkt `(40 * j, 40 * i)`. Waagrechter Balken `fillRectangle(x - 8, y - 2, 16, 4)`, senkrechter `fillRectangle(x - 2, y - 8, 4, 16)`, Farben nach `(i + j) % 2` vertauscht.
  ---
  Zählprobe: 7 · 5 = 35 Quadrate und 6 · 4 = 24 Kreuze mit je 2 Balken, zusammen 35 + 48 = 83 Formen.
````

```aufgabe
id: gr-pa-gespraech
titel: "Feedbackgespräch: Erkläre dein Trapez"
niveau: 3
lernziel: 2
kompetenz: begruenden
punkte: 2
angabe: |
  Im Feedbackgespräch zeigt dir der Tutor deine Lösung aus „Das Trapez programmieren“ und fragt:

  a) Warum steht `int h = breite / 2;` und nicht `double h = breite / 2.0;`?
  b) Was müsstest du ändern, damit das Trapez auf dem Kopf steht, also die lange Seite oben?

  Antworte in ganzen Sätzen.
teile:
  - typ: text
    muster: |
      a) Die Aufgabe verlangt als Höhe die ganzzahlige Hälfte der Breite. Für Breite 7 sind das 3 Zeilen. Mit
      `breite / 2.0` wäre die Höhe 3,5, und die Schleife `i < h` liefe für i = 0 bis 3, also viermal. Außerdem würden
      die Formeln für Leerzeichen und Zeichen falsche Werte liefern, die unterste Zeile wäre 8 statt 7 Zeichen breit.
      b) Ich drehe die Reihenfolge der Zeilen um. Entweder lasse ich die äußere Schleife rückwärts laufen,
      `for (int i = h - 1; i >= 0; i--)`, und lasse den Rumpf gleich. Oder ich ändere die Formeln: Zeile i hat dann
      i Leerzeichen und `breite - 2 * i` Zeichen.
hinweise:
  - Rechne für a) beide Varianten mit Breite 7 durch.
  - Für b) überlege, welche Zeile zuerst kommen muss und wie sich dann die Zeilentabelle ändert.
loesung: |
  **Ansatz:** a) Ganzzahldivision und Schleifenanzahl. b) Zeilenreihenfolge umdrehen.
  ---
  a) `breite / 2` ergibt die verlangte ganzzahlige Höhe. Mit 2.0 läuft die Schleife bei ungerader Breite einmal zu oft, und die Zeichenzahlen stimmen nicht mehr.
  ---
  b) Äußere Schleife rückwärts laufen lassen oder die Formeln auf `i` Leerzeichen und `breite - 2 * i` Zeichen umstellen. Probe: Zeile 0 hat dann 0 Leerzeichen und `breite` Zeichen.
```

```aufgabe
id: gr-pa-design
titel: "Aufgabenblatt: Die Designaufgabe planen"
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 2
quelle: Aufgabenblatt 2 WS2023, Aufgabe 5 und Designaufgabe K1 WS2021 (Anforderungen nachgebaut)
angabe: |
  Die Designaufgabe verlangt ein eigenes CodeDraw-Programm mit mindestens zwei Verzweigungen, mindestens zwei
  Schleifen, 50 bis 200 Codezeilen und ohne Übernahme von Programmen aus Vorlesung oder Übung. Plane ein Bild,
  zum Beispiel eine Stadt bei Nacht. Beschreibe in ganzen Sätzen:

  a) Welche Schichten zeichnest du in welcher Reihenfolge?
  b) Wo kommen eine Schleife und eine Verzweigung vor, und wofür?
  c) Welche Größe legst du als Variable fest, damit sich das Bild leicht anpassen lässt?
teile:
  - typ: text
    muster: |
      a) Zuerst der Himmel als dunkelblaues Rechteck über das ganze Fenster, dann der Mond als gelber Kreis, dann die
      Häuser als graue Rechtecke, zuletzt die Fenster der Häuser. Was weiter vorne liegt, kommt später.
      b) Eine Schleife setzt die Häuser nebeneinander, mit der Koordinatenformel x = rand + i * (breite + abstand).
      Eine verschachtelte Schleife setzt in jedes Haus ein Raster aus Fenstern. Eine Verzweigung entscheidet je
      Fenster mit einer Positionsbedingung wie (i * 3 + j) % 4 == 0, ob es dunkel oder gelb erleuchtet ist. Eine
      zweite Verzweigung macht jedes zweite Haus höher, mit if (i % 2 == 0).
      c) Die Anzahl der Häuser n ist eine Variable. Breite und Abstand werden aus der Fensterbreite berechnet, so wie
      bei den gleich verteilten Quadraten. Ändere ich n, passt sich das ganze Bild an.
hinweise:
  - Nutze das Malerprinzip für a), Koordinatenformel und Positionsbedingung für b).
  - Eine Größe, aus der Abstände berechnet werden, macht das Bild anpassbar.
loesung: |
  **Ansatz:** Ein Design ist gut planbar, wenn es aus Schichten, Rastern und Bedingungen besteht, also aus den Bausteinen dieses Kapitels.
  ---
  a) Schichten von hinten nach vorne. b) Schleifen für Wiederholungen (Häuser, Fenster), Verzweigungen für Unterschiede (Farbe, Höhe).
  ---
  c) Eine Variable wie die Anzahl `n`, aus der Größen und Abstände berechnet werden. Im Feedbackgespräch kannst du dann zeigen, dass dein Programm mehr ist als eine Liste fester Zahlen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Ein Konsolenmuster plant man mit einer Zeilentabelle. Sie hält für jede Zeile die Zahl
  der Leerzeichen und Zeichen fest, und aus ihr liest man Formeln der Form a * i + b ab. (2) Wechseln Zeichen innerhalb
  einer Zeile, entscheidet eine Positionsbedingung in i und j, etwa (i + j) % 2 == 0 für ein Schachbrett. (3) In
  CodeDraw berechnet die Koordinatenformel rand + i * (s + abstand) die Position jeder Form, und das Malerprinzip
  legt fest, welche Form oben liegt. Gute Antworten sind auch die Maßkette vom Fensterrand oder der Radius als double.
```

:::zusammenfassung
1. **Zeilentabelle:** Für jede Musterzeile `i` die Anzahl der Leerzeichen und der Zeichen notieren. Ändert sich eine Spalte um `a` je Zeile und beginnt bei `b`, lautet die Grenze `a * i + b`. Rechts vom letzten Zeichen wird nichts ausgegeben.
2. **Formen in jeder Größe:** Trapez mit Höhe `breite / 2` (ganzzahlig). Raute mit Mittelzeile `m = h / 2` und Abstand `d = Math.abs(i - m)`. Tannenbaum mit drei Schleifen ineinander. Probe immer mit der kleinsten erlaubten Größe.
3. **Positionsbedingung:** Die innere Schleife läuft über alle Spalten, ein `if` wählt das Zeichen. Rand mit `||`, Diagonalen `i == j` und `i + j == n - 1`, Schachbrett `(i + j) % 2 == 0`.
4. **Koordinatenformel:** `rand + i * (s + abstand)`, im Raster `j` für x und `i` für y. Gleich große Lücken: `(breite - n * s) / (n + 1.0)`. Bei Kreisen und Ellipsen den Mittelpunkt angeben, also eine halbe Zelle dazu.
5. **Maßskizze:** Abstände vom Fensterrand aus aufsummieren (Maßkette), Maße vom rechten oder unteren Rand von der Fenstergröße abziehen. Ellipsen bekommen Radien, nicht Breite und Höhe.
6. **Größen aus n:** Radius und Zellbreite als `double` (`300.0 / (2 * n)`), Mittelindex `m = n / 2` bei ungeradem `n`, Eingabe mit einer `&&`-Bedingung prüfen. Bei `int`-Rechnungen zuerst multiplizieren, dann teilen.
7. **Malerprinzip:** Später Gezeichnetes überdeckt Früheres. Von hinten nach vorne zeichnen, Farben vor der Form setzen, wechselnde Farben in der Schleife.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Formel aus nur einer Zeile geraten**, etwa `i + 1` statt `2 * i + 1` Sterne. Training: „Die Grenzen der Pyramide ergänzen“ in [5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen).
2. **Leerzeichen am Zeilenende** oder fehlende Einrückung, sodass der zeichengenaue Vergleich scheitert. Training: „Die umgedrehte Pyramide programmieren“ in [5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen).
3. **`" " * k` statt einer Schleife** für mehrere Leerzeichen. Training: „Leerzeichen multiplizieren?“ in [5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen).
4. **Höhe mit `2.0` geteilt**, sodass bei ungerader Breite eine Zeile zu viel entsteht. Training: „Höhe und obere Seite“ und „Das Trapez programmieren“ in [5.2 Trapez, Raute und Tannenbaum](/lernen/ep1/grafik/trapez-raute-und-tannenbaum).
5. **Mittelzeile doppelt** bei einer Raute aus zwei Schleifen. Training: „Eine Sanduhr“ in [5.2 Trapez, Raute und Tannenbaum](/lernen/ep1/grafik/trapez-raute-und-tannenbaum).
6. **`&&` statt `||` in der Randbedingung** oder Streifen statt Schachbrett mit `i % 2`. Training: „Welche Bedingung zeichnet den Rahmen?“ und „Ein Schachbrett mit Punkt in der Ecke“ in [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett).
7. **Nummer statt Koordinate** oder Rand und Abstand vergessen. Training: „Wo beginnt das vierte Quadrat?“ in [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe).
8. **Ganzzahldivision bei Abständen und Farbverläufen** (`255 / n * i`). Training: „Gleiche Lücken für sechs Quadrate“ und „Ein Farbverlauf über das ganze Fenster“ in [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe).
9. **Maß vom falschen Rand** oder Ellipse mit Durchmesser statt Radius. Training: „Gemessen vom rechten und unteren Rand“ und „Der richtige Ellipsen-Aufruf“ in [5.5 Zeichnen nach Maßskizze](/lernen/ep1/grafik/zeichnen-nach-massskizze).
10. **Radius als `int`**, sodass rechts ein Streifen frei bleibt. Training: „Wie viel Platz geht verloren?“ in [5.6 Kreismuster: Gleitkomma und ungerades n](/lernen/ep1/grafik/kreismuster-gleitkomma-und-ungerades-n).
11. **Eingabeprüfung mit `||`** statt `&&`. Training: „Die Eingabeprüfung schreiben“ in [5.6 Kreismuster: Gleitkomma und ungerades n](/lernen/ep1/grafik/kreismuster-gleitkomma-und-ungerades-n).
12. **Falsche Zeichenreihenfolge**, etwa die Abdeckung vor dem Raster, oder `Color` ohne Import. Training: „Die Schichten der Pinna-Täuschung“ und „Warum kompiliert die Täuschung nicht?“ in [5.7 Optische Täuschungen: Café-Wall, Pinna und Ouchi](/lernen/ep1/grafik/optische-taeuschungen-cafe-wall-pinna-und-ouchi).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch ohne Computer. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich mit 3 einschätzt, aber Fehler
machst, liegt deine wichtigste Baustelle.

1. Die Ausgabe eines Konsolenmusters Zeile für Zeile herleiten und die Zeichen zählen.
2. Eine Zeilentabelle aufstellen und daraus die Schleifengrenzen als Formeln ablesen.
3. Trapez, Parallelogramm, Raute und Tannenbaum in jeder erlaubten Größe ausgeben.
4. Muster mit Positionsbedingungen erzeugen und die passende Bedingung wählen.
5. Koordinaten von Formen in Reihen und Rastern berechnen.
6. Ein Bild nach Maßskizze in CodeDraw-Aufrufe übersetzen.
7. Größen und Farben so berechnen, dass das Muster für jedes n passt, und Eingaben prüfen.
8. Optische Täuschungen nachbauen und die Zeichenreihenfolge begründen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein **Feedbackgespräch**.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen typische Fragen zu Mustern und
Grafik. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und
vergleiche sie mit den Kernpunkten.

```karten
- id: gr-karte-zeilentabelle
  frage: Wie gehst du vor, wenn du ein Konsolenmuster wie eine Pyramide programmieren sollst?
  antwort: |
    Ich zeichne das Muster für eine kleine Größe auf Karopapier. Dann lege ich eine Zeilentabelle an: Für jede Zeile i
    schreibe ich auf, wie viele Leerzeichen am Anfang stehen und wie viele Zeichen danach kommen. Aus den Spalten lese
    ich Formeln in i und n ab. Die äußere Schleife läuft über die Zeilen, je Spalte der Tabelle gibt es eine innere
    Schleife, danach kommt println. Zum Schluss prüfe ich die erste und die letzte Zeile.
  kernpunkte:
    - Skizze für kleine Größe
    - Zeilentabelle mit Leerzeichen und Zeichen
    - Formeln als Schleifengrenzen, Probe
- id: gr-karte-formel
  frage: Wie kommst du von den Zahlen einer Zeilentabelle zu einer Formel wie 2 * i + 1?
  antwort: |
    Ich schaue, um wie viel sich die Anzahl von einer Zeile zur nächsten ändert. Das ist der Faktor a. Der Wert in der
    ersten Zeile mit i = 0 ist der Startwert b. Die Formel ist dann a * i + b. Bei der Pyramide wachsen die Sterne um 2
    und beginnen bei 1, also 2 * i + 1. Ich prüfe die Formel immer an mindestens zwei Zeilen, weil eine Zeile allein
    zu viele Formeln zulässt.
  kernpunkte:
    - Änderung je Zeile ist a
    - Wert in Zeile 0 ist b
    - Probe an zwei Zeilen
- id: gr-karte-leerzeichen
  frage: Warum gibst du rechts von den Sternen keine Leerzeichen aus, obwohl man sie nicht sieht?
  antwort: |
    Gerade weil man sie nicht sieht. Die Ausgabe wird zeichengenau mit der erwarteten verglichen, und ein Leerzeichen am
    Zeilenende ist ein zusätzliches Zeichen. Das Bild sieht gleich aus, aber der Vergleich schlägt fehl. Beim Testen
    ersetze ich Leerzeichen kurz durch Punkte. Dann sehe ich jedes einzelne.
  kernpunkte:
    - zeichengenauer Vergleich
    - unsichtbare Zeichen am Zeilenende
    - Punkte zum Testen
- id: gr-karte-println
  frage: Wo steht in einem Konsolenmuster das println() und warum genau dort?
  antwort: |
    Das println() steht nach allen inneren Schleifen, aber noch in der äußeren. Die äußere Schleife zählt die Zeilen,
    die inneren geben die Zeichen einer Zeile mit print aus. Erst wenn eine Zeile fertig ist, beginnt println die
    nächste. Stünde es in der inneren Schleife, käme nach jedem Zeichen ein Zeilenumbruch. Das ist dieselbe Regel wie
    bei verschachtelten Schleifen in [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
  kernpunkte:
    - nach den inneren, in der äußeren Schleife
    - einmal je Musterzeile
    - Verbindung zu Kapitel 4
- id: gr-karte-trapez
  frage: Warum berechnest du die Höhe des Trapezes mit breite / 2 und nicht mit breite / 2.0?
  antwort: |
    Die Aufgabe verlangt die ganzzahlige Hälfte, also 3 bei Breite 7. Zwei int-Werte ergeben in Java eine
    Ganzzahldivision, die den Rest abschneidet. Mit 2.0 wäre die Höhe 3,5, und eine Schleife mit i < h liefe viermal.
    Die Formeln für die Zeichen ergäben dann eine unterste Zeile mit 8 statt 7 Zeichen. Die Ganzzahldivision aus
    [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen) ist hier also genau richtig.
  kernpunkte:
    - ganzzahlige Hälfte verlangt
    - int / int schneidet ab
    - mit 2.0 eine Zeile zu viel
- id: gr-karte-raute
  frage: Erkläre, wie eine Raute mit einer einzigen Schleife und d = Math.abs(i - m) entsteht.
  antwort: |
    Die Raute hat eine ungerade Höhe h und die Mittelzeile m = h / 2. Für jede Zeile ist d der Abstand zur Mittelzeile,
    oben und unten gleich groß. Die Zeile hat d Leerzeichen und 2 * (m - d) + 1 Sterne. So gilt dieselbe Formel für die
    obere und die untere Hälfte. Die Mittelzeile mit d = 0 kommt genau einmal vor. Mit zwei getrennten Schleifen müsste
    ich selbst aufpassen, dass sie nicht doppelt erscheint.
  kernpunkte:
    - Mittelzeile m und Abstand d
    - eine Formel für beide Hälften
    - Mittelzeile genau einmal
- id: gr-karte-positionsbedingung
  frage: Was ist eine Positionsbedingung? Gib die Bedingung für einen Rahmen an und erkläre, warum dort || steht.
  antwort: |
    Eine Positionsbedingung hängt nur von Zeile i, Spalte j und den Größen ab und entscheidet in der inneren Schleife,
    welches Zeichen an der Stelle (i, j) steht. Der Rahmen ist i == 0 || i == hoehe - 1 || j == 0 || j == breite - 1.
    Eine Stelle gehört zum Rand, wenn sie in der ersten oder letzten Zeile oder in der ersten oder letzten Spalte liegt.
    Es reicht, dass einer der Teile stimmt, deshalb ||. Mit && blieben nur die vier Ecken übrig.
  kernpunkte:
    - Bedingung in i und j wählt das Zeichen
    - Rand mit vier Vergleichen
    - ODER, weil ein Teil reicht
- id: gr-karte-schachbrett
  frage: Warum färbt (i + j) % 2 ein Schachbrett, i % 2 aber nicht?
  antwort: |
    Beim Schachbrett muss die Farbe bei jedem Schritt nach rechts und bei jedem Schritt nach unten wechseln. Ein Schritt
    in beide Richtungen ändert die Summe i + j um 1, also wechselt sie zwischen gerade und ungerade. i % 2 hängt nur von
    der Zeile ab. Eine ganze Zeile hätte dieselbe Farbe, und es entstünden Querstreifen.
  kernpunkte:
    - Wechsel nach rechts und nach unten
    - Summe wechselt bei jedem Schritt zwischen gerade und ungerade
    - i % 2 ergibt Streifen
- id: gr-karte-koordinatenformel
  frage: Erkläre die Formel rand + i * (s + abstand) für eine Reihe von Quadraten.
  antwort: |
    Das erste Quadrat mit i = 0 beginnt beim Rand. Von einem Quadrat zum nächsten geht es um seine Seitenlänge s und
    den Abstand weiter, das ist der Schritt s + abstand. Das Quadrat mit der Nummer i liegt also i Schritte rechts vom
    Rand. Soll der Rand so groß sein wie die Abstände, berechne ich ihn aus der Fensterbreite: Was nach n Quadraten
    übrig bleibt, verteile ich auf n + 1 Lücken.
  kernpunkte:
    - Start beim Rand
    - Schritt ist Größe plus Abstand
    - gleiche Lücken aus der Fensterbreite
- id: gr-karte-mittelpunkt
  frage: Warum addierst du bei Kreisen im Raster eine halbe Zellbreite, bei Quadraten aber nicht?
  antwort: |
    CodeDraw platziert Rechtecke und Quadrate über die linke obere Ecke, Kreise und Ellipsen über den Mittelpunkt. Die
    Zelle j beginnt bei j * c. Ein Quadrat, das die Zelle füllt, beginnt genau dort. Der Mittelpunkt eines Kreises liegt
    aber in der Mitte der Zelle, also bei j * c + c / 2. Ohne die halbe Zelle säße der Kreismittelpunkt auf der
    Zellgrenze, und die erste Spalte ragte zur Hälfte aus dem Fenster.
  kernpunkte:
    - Rechteck über die Ecke
    - Kreis über den Mittelpunkt
    - halbe Zelle dazu
- id: gr-karte-massskizze
  frage: Wie übersetzt du ein Bild mit Maßpfeilen in CodeDraw-Aufrufe?
  antwort: |
    Ich zähle zuerst alle Formen auf. Für jede Form summiere ich die Abstände entlang einer Maßkette vom Fensterrand aus
    auf, waagrecht und senkrecht. Maße vom rechten oder unteren Rand ziehe ich von der Fenstergröße ab. Dann rechne ich
    um, was CodeDraw braucht: die linke obere Ecke bei Rechtecken, den Mittelpunkt und die Radien bei Kreisen und
    Ellipsen. Gleichmäßige Wiederholungen wie einen Linienfächer zeichne ich mit einer Schleife.
  kernpunkte:
    - Maßkette vom Fensterrand
    - rechter Rand wird abgezogen
    - Ecke oder Mittelpunkt je nach Form
- id: gr-karte-double
  frage: Warum soll der Radius im Kreismuster mit double berechnet werden?
  antwort: |
    Der Radius ist 300 / (2 * n), und das geht für die meisten n nicht ohne Rest auf. Mit int schneidet die
    Ganzzahldivision den Rest ab, bei n = 7 ist der Radius 21 statt 21,43. Über sieben Kreise fehlen dann 6 Pixel,
    rechts bleibt ein Streifen frei. Mit 300.0 rechnet Java mit Nachkommastellen, und sieben Durchmesser ergeben genau
    300. CodeDraw nimmt double-Koordinaten an, ich muss nichts runden.
  kernpunkte:
    - 300 lässt sich nicht durch jedes 2n teilen
    - int verliert den Rest bei jedem Kreis
    - double füllt das Fenster genau
- id: gr-karte-ungerade
  frage: Warum verlangt das Kreismuster ein ungerades n, und wie prüfst du die Eingabe?
  antwort: |
    Nur bei ungeradem n gibt es eine mittlere Zelle m = n / 2, deren Mittelpunkt genau in der Fenstermitte liegt. Bei
    geradem n fällt die Mitte auf eine Zellgrenze, und ein Kreuz wäre nicht symmetrisch. Geprüft wird mit einer
    einzigen Bedingung n % 2 == 1 && n >= 5 && n <= 19. Alle drei Teile müssen gleichzeitig stimmen, deshalb &&. Ist
    sie falsch, gebe ich nur eine Fehlermeldung aus und zeichne nichts.
  kernpunkte:
    - mittlere Zelle nur bei ungeradem n
    - drei Teile mit UND
    - sonst nur Fehlermeldung
- id: gr-karte-malerprinzip
  frage: Was ist das Malerprinzip, und wo hat es dir bei der optischen Täuschung geholfen?
  antwort: |
    CodeDraw zeichnet deckend. Jede neue Form überdeckt, was an derselben Stelle schon da ist. Deshalb zeichne ich von
    hinten nach vorne. Bei der Pinna-Variante kommen zuerst die schwarzen Scheiben, dann die grauen Ringe, dann das
    weiße Quadrat, das die Mitte abdeckt, und zuletzt die kleinen Quadrate darauf. Bei Formen, die sich nicht
    überlappen, ist die Reihenfolge egal.
  kernpunkte:
    - deckende Farbe
    - von hinten nach vorne
    - Reihenfolge nur bei Überlappung wichtig
- id: gr-karte-color
  frage: Dein Programm meldet cannot find symbol bei new Color(40, 70, 110). Was ist los, und wie behebst du es?
  antwort: |
    Die Klasse Color gehört zum Paket java.awt. Die Zeile import codedraw.*; holt nur die Klassen aus dem Paket
    codedraw, also CodeDraw und Palette. Ohne Import kennt der Compiler den Namen Color nicht. Ich ergänze oben
    import java.awt.Color; oder ich schreibe Palette.fromRGB(40, 70, 110), das ohne weiteren Import funktioniert.
  kernpunkte:
    - Color liegt in java.awt
    - codedraw-Import holt sie nicht
    - Import ergänzen oder Palette.fromRGB
- id: gr-karte-arrays
  frage: Was hat die Denkweise mit Zeile i, Spalte j und Positionsbedingung mit späteren Kapiteln zu tun?
  antwort: |
    Ein zweidimensionales Array hat genau diese Struktur: Zeilen und Spalten, angesprochen mit zwei Indizes. Im
    Programmiertest erzeugt man solche Arrays oder verändert sie, und dabei entscheidet man für jede Zelle (i, j), was
    hineinkommt, oft mit einer Bedingung wie i == j oder (i + j) % 2 == 0. Wer Konsolenmuster mit Positionsbedingungen
    sicher kann, hat die schwierigste Denkweise für [Kapitel 14, Zwei- und mehrdimensionale Arrays](/lernen/ep1/arrays-2d) schon geübt.
  kernpunkte:
    - Zeilen und Spalten wie im 2D-Array
    - Bedingung je Zelle
    - Vorbereitung auf den Programmiertest
```
