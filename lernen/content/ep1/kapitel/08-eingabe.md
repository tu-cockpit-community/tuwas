---
nummer: 8
titel: Eingabe mit Scanner
kurz: Zahlen, Wörter und Zeilen von der Tastatur einlesen, die nextLine-Falle verstehen, Eingaben mit hasNextInt prüfen, Eingabemethoden für Taschenrechner und Ratespiel schreiben und Zufallszahlen mit Random erzeugen.
teil: methoden
stunden: 3
pruefungsgewicht: 1
voraussetzungen: [ausdruecke, verzweigungen, schleifen, methoden]
lernziele:
  - ein Programm mit Scanner schreiben, das ganze Zahlen, Kommazahlen und Wörter einliest, und zu einer gegebenen Eingabe die Ausgabe exakt angeben
  - für eine gegebene Eingabe bestimmen, welchen Wert jeder Aufruf von next, nextInt und nextDouble liefert und wann eine InputMismatchException oder NoSuchElementException entsteht
  - die nextLine-Falle nach nextInt erkennen, mit dem Puffer des Scanners erklären und durch Leeren des Puffers beheben
  - Eingaben vor dem Lesen mit hasNextInt prüfen und ungültige Eingaben aus dem Puffer entfernen, sodass weder eine Exception noch eine Endlosschleife entsteht
  - eine Eingabemethode mit dem Scanner als Parameter schreiben, die so lange liest, bis eine ganze Zahl in einem vorgegebenen Intervall vorliegt, und diese zurückgibt
  - Eingaben, die genau ein Zeichen sein sollen (Operator, q oder c), zeilenweise einlesen und auf genau ein erlaubtes Zeichen prüfen
  - einen Taschenrechner mit Wiederholungsschleife aus Eingabemethoden zusammensetzen und dabei Ganzzahl- und Kommadivision richtig wählen
  - mit Random Zufallszahlen in einem geschlossenen Intervall erzeugen, mit einem festen Startwert reproduzierbar machen und ein Ratespiel mit begrenzter Anzahl an Versuchen programmieren
---

**Worum geht es?** Bisher standen alle Werte fest im Programm. Wer `int n = 7;` schreibt, bekommt bei
jedem Start dieselbe Ausgabe. Echte Programme fragen dagegen nach: Ein Taschenrechner will zwei Zahlen
wissen, ein Spiel wartet auf deinen Tipp. In diesem Kapitel lernst du, wie ein Java-Programm während
des Laufs Text von der Tastatur entgegennimmt. Das Werkzeug dafür heißt **Scanner**.

Einlesen klingt einfach, hat aber zwei Fallen, an denen fast alle Anfängerinnen und Anfänger hängen
bleiben. Die erste: Nach `nextInt()` liefert `nextLine()` scheinbar „nichts“. Die zweite: Tippt jemand
`zwölf` statt `12`, stürzt das Programm ab oder hängt in einer Endlosschleife. Beide Fallen verstehst du
nach diesem Kapitel genau, und du weißt, wie man sie sicher umgeht.

**Was kommt in der Prüfung?**

- **Aufgabenblätter:** Im Wintersemester 2023 war auf Blatt 2 ein **Taschenrechner** verlangt, der Zahlen
  und einen Operator einliest und jede falsche Eingabe abfängt. In anderen Jahrgängen war es ein
  **Ratespiel** (Guessing Game) mit Zufallszahl oder ein **Wörterraten**. Auf Blatt 5 (Wintersemester 2023)
  brauchte man eine Methode `readIntValue`, die so lange liest, bis eine ganze Zahl eingegeben wurde. Ob die
  Blätter im aktuellen Semester genauso aussehen, ist nicht veröffentlicht.
- **Feedbackgespräch:** Typische Zusatzfragen sind: „Wie unterscheidest du beim Scanner, welcher Datentyp
  eingegeben wurde?“ und „Warum muss eine ungültige Eingabe aus dem Scanner entfernt werden?“. Beide
  beantwortet dieses Kapitel ausführlich.
- **Quiz und Test:** Dort kommt Einlesen kaum vor. Im Programmiertest bekommen die Methoden ihre Werte als
  Parameter. Darum hat dieses Kapitel ein geringes Prüfungsgewicht. Für die Blätter ist es trotzdem Pflicht.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Strings und Zeichen** aus [Kapitel 2](/lernen/ep1/ausdruecke): `length()`, `charAt(i)`, `equals` und das Rechnen mit `char`.
- **Bedingungen** aus [Kapitel 3](/lernen/ep1/verzweigungen): `if`, `else`, `&&`, `||` und `!`.
- **Schleifen** aus [Kapitel 4](/lernen/ep1/schleifen): vor allem die `while`-Schleife, die läuft, solange eine Bedingung gilt.
- **Methoden** aus [Kapitel 6](/lernen/ep1/methoden): Parameter, Rückgabewert mit `return` und Methoden nach Vorgabe.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage
nicht klappt, wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: ei-ein-while
titel: Eine while-Schleife zählen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: ausgabe
    code: |
      int versuche = 3;
      while (versuche > 0) {
          System.out.println("noch " + versuche);
          versuche--;
      }
      System.out.println("aus");
    loesung: |
      noch 3
      noch 2
      noch 1
      aus
    fehler:
      - wert: "noch 3\nnoch 2\nnoch 1\nnoch 0\naus"
        meldung: Bei `versuche = 0` ist die Bedingung `0 > 0` falsch. Die Schleife läuft dann nicht mehr, also erscheint `noch 0` nicht.
hinweise:
  - Prüfe die Bedingung vor jedem Durchlauf mit dem aktuellen Wert von `versuche`.
loesung: |
  Die Schleife läuft für `versuche` gleich 3, 2 und 1. Jedes Mal erscheint eine Zeile, danach wird `versuche` um 1 kleiner.
  ---
  Bei `versuche = 0` ist `0 > 0` falsch. Die Schleife endet, und `aus` wird ausgegeben.
```

```aufgabe
id: ei-ein-charat
titel: Länge und erstes Zeichen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: ausgabe
    code: |
      String s = "q!";
      System.out.println(s.length());
      System.out.println(s.charAt(0));
      System.out.println(s.length() == 1);
    loesung: |
      2
      q
      false
    fehler:
      - wert: "2\nq\ntrue"
        meldung: '`"q!"` hat zwei Zeichen, `q` und `!`. Darum ist `s.length() == 1` falsch.'
      - wert: "2\n!\nfalse"
        meldung: Die Positionen beginnen bei 0. `charAt(0)` ist das erste Zeichen, also `q`.
hinweise:
  - "`length()` zählt alle Zeichen, auch Satzzeichen. `charAt(0)` ist das Zeichen an der ersten Position."
loesung: |
  `"q!"` besteht aus zwei Zeichen. `length()` liefert 2, `charAt(0)` liefert `q`.
  ---
  `2 == 1` ist falsch, also wird `false` ausgegeben.
```

```aufgabe
id: ei-ein-equals
titel: Strings vergleichen
niveau: 1
art: check
angabe: |
  Eine Variable `antwort` enthält einen eingelesenen Text. Wie prüfst du richtig, ob sie genau den Text
  `ja` enthält? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: auswahl
    optionen: ['`antwort.equals("ja")`', '`antwort == "ja"`', "`antwort = \"ja\"`"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`==` prüft bei Strings, ob beide Variablen auf **dasselbe** String-Objekt zeigen, nicht ob der Inhalt gleich ist. Ein eingelesener Text ist ein neues Objekt, darum liefert `==` hier `false`.'
      - wert: 2
        meldung: Ein einzelnes `=` ist eine Zuweisung, kein Vergleich. Es würde `antwort` überschreiben.
hinweise:
  - Für den Inhalt von Strings gibt es eine eigene Methode.
loesung: |
  Den Inhalt zweier Strings vergleicht man mit `equals`.
  ---
  `antwort.equals("ja")` liefert `true`, wenn `antwort` genau die Zeichen `j` und `a` enthält.
```

```aufgabe
id: ei-ein-division
titel: Ganzzahl- und Kommadivision
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.3 Gleitkommazahlen und der Typ eines Ausdrucks](/lernen/ep1/ausdruecke/gleitkommazahlen-und-der-typ-eines-ausdrucks))
teile:
  - typ: ausgabe
    code: |
      int a = 37, b = 4;
      System.out.println(a / b);
      System.out.println((double) a / b);
      System.out.println(a % b);
    loesung: |
      9
      9.25
      1
    fehler:
      - wert: "9.25\n9.25\n1"
        meldung: '`a / b` teilt zwei `int`-Werte. Dabei fällt der Nachkommaanteil weg, das Ergebnis ist `9`.'
      - wert: "9\n9.0\n1"
        meldung: Der Cast `(double)` wirkt zuerst auf `a`. Dann wird `37.0 / 4` gerechnet, und das ergibt `9.25`.
hinweise:
  - Bei `int / int` fällt der Rest weg. Ist ein Operand `double`, wird mit Kommastellen gerechnet.
loesung: |
  `37 / 4` sind zwei `int`, das Ergebnis ist `9`. `37 % 4` ist der Rest `1`, denn 9 · 4 + 1 = 37.
  ---
  `(double) a / b` macht zuerst aus `a` den Wert `37.0`. Dann ist `37.0 / 4 = 9.25`.
```

```aufgabe
id: ei-ein-oder
titel: Groß oder klein
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: ausgabe
    code: |
      char c = 'Q';
      if (c == 'q' || c == 'Q') {
          System.out.println("Ende");
      } else {
          System.out.println("weiter");
      }
    loesung: |
      Ende
    fehler:
      - wert: "weiter"
        meldung: '`c == ''q''` ist falsch, aber `||` verlangt nur, dass **eine** Seite wahr ist. `c == ''Q''` ist wahr.'
hinweise:
  - "`||` heißt oder: Es reicht, wenn eine der beiden Bedingungen wahr ist."
loesung: |
  `'Q' == 'q'` ist falsch, denn Groß- und Kleinbuchstaben sind verschiedene Zeichen.
  ---
  `'Q' == 'Q'` ist wahr. Falsch oder wahr ergibt wahr, also wird `Ende` ausgegeben.
```

```aufgabe
id: ei-ein-methode
titel: Ein Wert kommt zurück
niveau: 1
art: check
angabe: |
  Was gibt dieses Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Begrenzen {
          public static int begrenze(int x, int max) {
              if (x > max) {
                  return max;
              }
              return x;
          }

          public static void main(String[] args) {
              System.out.println(begrenze(250, 200));
              System.out.println(begrenze(17, 200));
          }
      }
    loesung: |
      200
      17
    fehler:
      - wert: "250\n17"
        meldung: Bei `x = 250` ist `250 > 200` wahr. Dann liefert `return max;` den Wert 200 und beendet die Methode sofort.
hinweise:
  - "`return` beendet die Methode sofort. Der Aufruf wird durch den zurückgegebenen Wert ersetzt."
loesung: |
  Erster Aufruf: `250 > 200` ist wahr, die Methode liefert `max`, also 200.
  ---
  Zweiter Aufruf: `17 > 200` ist falsch, die Methode erreicht `return x;` und liefert 17.
```

## Eingabe mit Scanner: das erste Programm

```aufgabe
id: ei-erst-check-print
titel: print oder println?
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Den Unterschied zwischen `print` und `println` kennst du aus
  [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println).
teile:
  - typ: ausgabe
    code: |
      System.out.print("Zahl: ");
      System.out.print("Zahl: ");
      System.out.println("Ende");
    loesung: |
      Zahl: Zahl: Ende
    fehler:
      - wert: "Zahl: \nZahl: \nEnde"
        meldung: '`print` beendet die Zeile **nicht**. Erst `println` setzt am Ende einen Zeilenumbruch.'
hinweise:
  - "`print` schreibt den Text und bleibt in derselben Zeile. `println` springt danach in die nächste Zeile."
loesung: |
  Die beiden `print`-Aufrufe schreiben `Zahl: ` zweimal hintereinander in dieselbe Zeile.
  ---
  `println("Ende")` hängt `Ende` an und beendet die Zeile. Ergebnis: `Zahl: Zahl: Ende`.
```

Stell dir ein Programm vor, das das Quadrat einer Zahl ausrechnet. Bisher musstest du die Zahl in den
Quelltext schreiben, zum Beispiel `int n = 7;`. Für eine andere Zahl musstest du das Programm ändern und
neu starten. Schöner wäre es, wenn das Programm beim Start fragt: „Welche Zahl?“, und du tippst die Zahl
einfach ein.

Dafür brauchst du die Gegenrichtung zur Ausgabe. `System.out` ist der **Ausgabestrom**: Alles, was du
mit `println` hineinschreibst, erscheint auf der Konsole. `System.in` ist der **Eingabestrom**: Dort kommt
alles an, was jemand auf der Tastatur tippt. Ein **Strom** ist dabei einfach eine Folge von Zeichen, die
nacheinander ankommen, wie Wasser in einem Rohr.

Mit `System.in` allein kann man aber schlecht arbeiten, denn es liefert nur einzelne Zeichen. Wer eine
Zahl wie `123` will, müsste die Zeichen `1`, `2` und `3` selbst zusammensetzen. Diese Arbeit nimmt dir die
Klasse **Scanner** ab. Ein Scanner liest die Zeichen aus dem Eingabestrom und macht daraus Zahlen und
Wörter.

```aufgabe
id: ei-erst-check-strom
titel: Hinein oder hinaus?
niveau: 1
art: check
angabe: Über welchen Strom kommen die Zeichen an, die jemand auf der Tastatur tippt?
teile:
  - typ: auswahl
    optionen: ['`System.in`', '`System.out`', '`Scanner`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`System.out` ist der Ausgabestrom. Was dort hineingeschrieben wird, erscheint auf der Konsole.'
      - wert: 2
        meldung: Der Scanner ist das Werkzeug, das aus einem Strom liest. Der Strom selbst heißt anders.
hinweise:
  - '„in“ steht für hinein, „out“ für hinaus.'
loesung: |
  Die Tastatur liefert ihre Zeichen in den Eingabestrom `System.in`.
  ---
  Ein Scanner liest später aus diesem Strom: `new Scanner(System.in)`.
```

### Die drei Zeilen, die du immer brauchst

So sieht ein vollständiges Programm aus, das eine Zahl einliest und ihr Quadrat ausgibt:

```java
import java.util.Scanner;

public class Quadrat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Welche Zahl? ");
        int n = sc.nextInt();
        System.out.println(n + " zum Quadrat ist " + n * n);
    }
}
```

Gehen wir die neuen Teile Wort für Wort durch.

- `import java.util.Scanner;` steht **ganz oben**, noch vor `public class`. Java hat Tausende fertige
  Klassen, sortiert in **Pakete** (Ordner). Der Scanner liegt im Paket `java.util` („util“ steht für
  utilities, also Hilfsmittel). `import` heißt „hole diese Klasse herein“. Danach kennt dein Programm den
  Namen `Scanner`. Die Klassen `String`, `Math` und `System` brauchen kein `import`, weil sie im Paket
  `java.lang` liegen. Dieses Paket ist immer automatisch dabei.
- `Scanner sc` deklariert eine Variable mit dem Namen `sc` und dem Typ `Scanner`. So wie `int n` eine
  Variable für eine ganze Zahl ist, ist `sc` eine Variable für einen Scanner. Den Namen darfst du frei
  wählen. Üblich sind `sc`, `scanner` oder `eingabe`.
- `new Scanner(System.in)` **erzeugt** einen neuen Scanner. Das Wort `new` legt ein neues **Objekt** an,
  also ein eigenständiges Ding mit eigenem Gedächtnis. In den runden Klammern steht, woher der Scanner
  lesen soll: aus `System.in`, der Tastatur.
- `sc.nextInt()` ruft eine **Methode** des Scanners auf. Der Punkt bedeutet „von diesem Scanner“, genau
  wie bei `s.length()` „von diesem String“. `nextInt` heißt „nächste ganze Zahl“ (Englisch: next integer).
  Die Methode liefert die eingelesene Zahl als `int` zurück. Wir speichern sie in `n`.

```aufgabe
id: ei-erst-check-teile
titel: Welche Zeile macht was?
niveau: 1
art: check
angabe: |
  Im Programm `Quadrat` stehen die Zeilen `import java.util.Scanner;`, `Scanner sc = new Scanner(System.in);`
  und `int n = sc.nextInt();`. Welche dieser Zeilen liest tatsächlich eine Zahl von der Tastatur?
teile:
  - typ: auswahl
    optionen: ['`int n = sc.nextInt();`', '`Scanner sc = new Scanner(System.in);`', '`import java.util.Scanner;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Diese Zeile erzeugt nur den Scanner und sagt ihm, dass er von der Tastatur lesen soll. Gelesen wird erst beim Aufruf einer Lesemethode.
      - wert: 2
        meldung: '`import` macht dem Compiler nur den Namen `Scanner` bekannt. Beim Ausführen passiert dadurch nichts.'
hinweise:
  - Gelesen wird erst, wenn eine Methode des Scanners aufgerufen wird.
loesung: |
  `import` macht die Klasse bekannt, `new Scanner(System.in)` erzeugt den Leser.
  ---
  Erst `sc.nextInt()` liest wirklich und liefert die Zahl, die in `n` gespeichert wird.
```

:::definition[Scanner, Eingabestrom, Eingabeaufforderung]
Ein **Scanner** ist ein Objekt der Klasse `java.util.Scanner`. Er liest Zeichen aus einer Quelle und
liefert sie als Werte passender Typen, zum Beispiel als `int` oder `String`. Für die Tastatur erzeugt man
ihn mit `new Scanner(System.in)`. Dabei ist `System.in` der **Eingabestrom** des Programms.

Eine **Eingabeaufforderung** (englisch: prompt) ist eine Ausgabe direkt vor dem Einlesen. Sie sagt der
Person an der Tastatur, was sie eingeben soll.
:::

**Beispiel:** `Scanner eingabe = new Scanner(System.in);` erzeugt einen Scanner für die Tastatur, und
`int alter = eingabe.nextInt();` liest damit eine ganze Zahl. **Kein Beispiel:** `int alter = System.in;`
ist kein Einlesen, sondern ein Compilerfehler. `System.in` ist ein Strom aus Zeichen, keine Zahl.
Auch `Scanner sc;` allein ist noch kein Scanner. Die Variable ist nur angekündigt, ein Objekt gibt es erst
mit `new`.

### Was beim Start passiert

Was passiert, wenn du das Programm `Quadrat` startest? Java führt `main` Zeile für Zeile aus.

1. Der Scanner wird erzeugt. Man sieht davon nichts.
2. `print` schreibt `Welche Zahl? ` auf die Konsole. Weil es `print` und nicht `println` ist, bleibt der
   Cursor (die blinkende Schreibmarke) direkt dahinter stehen.
3. `sc.nextInt()` **wartet**. Das Programm bleibt an dieser Stelle stehen, bis du etwas tippst und die
   **Enter-Taste** drückst. Vorher kommt beim Scanner nichts an, denn die Tastatur schickt eine Zeile erst
   mit Enter ab.
4. Tippst du `7` und Enter, liefert `nextInt()` die Zahl 7. Sie wird in `n` gespeichert.
5. `println` gibt `7 zum Quadrat ist 49` aus.

In IntelliJ sieht die Konsole danach so aus. Deine eigene Eingabe zeigt IntelliJ in grüner Farbe an:

```
Welche Zahl? 7
7 zum Quadrat ist 49
```

:::beispiel[Kinokarten zusammenrechnen]
Ein Programm fragt nach der Anzahl der Karten und dem Preis einer Karte in Cent. Es gibt den Gesamtpreis
in Euro und Cent aus.

```java
import java.util.Scanner;

public class Kino {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Wie viele Karten?");
        int karten = sc.nextInt();
        System.out.println("Preis pro Karte in Cent?");
        int preis = sc.nextInt();
        int gesamt = karten * preis;
        System.out.println("Zu zahlen: " + gesamt / 100 + " Euro " + gesamt % 100 + " Cent");
    }
}
```

Wir verfolgen einen Lauf, bei dem jemand zuerst `3` und dann `1150` eingibt.

1. Zeile 5 erzeugt den Scanner `sc`.
2. Zeile 6 fragt nach der Anzahl. Zeile 7 wartet, bis `3` mit Enter ankommt, und speichert 3 in `karten`.
3. Zeile 8 fragt nach dem Preis. Zeile 9 wartet auf `1150` und speichert 1150 in `preis`.
4. Zeile 10 rechnet `3 * 1150 = 3450`.
5. Zeile 11 zerlegt 3450 Cent: `3450 / 100` ist 34 (Ganzzahldivision), `3450 % 100` ist 50 (der Rest).
   Ausgabe: `Zu zahlen: 34 Euro 50 Cent`.

Die Konsole in IntelliJ zeigt Fragen, Eingaben und Ergebnis untereinander:

```
Wie viele Karten?
3
Preis pro Karte in Cent?
1150
Zu zahlen: 34 Euro 50 Cent
```
:::

### Was in den Aufgaben als Ausgabe zählt

In den Aufgaben dieses Kurses tippst du die Eingabe nicht selbst. Sie wird dem Programm automatisch
eingespeist, so als hätte jemand sie getippt. Die Angabe nennt dir die Eingabe immer ausdrücklich, zum
Beispiel „Eingabe: `3`, dann `1150`“.

Dabei gibt es einen Unterschied zur Konsole von IntelliJ, den du kennen musst. **Die Eingabe selbst ist
nicht Teil der Ausgabe**. Die Ausgabe ist nur das, was das Programm mit `print` und `println` schreibt.
Beim Kino-Programm ist die Ausgabe also nur

```
Wie viele Karten?
Preis pro Karte in Cent?
Zu zahlen: 34 Euro 50 Cent
```

Das hat eine überraschende Folge bei `print`. In IntelliJ beendet deine Enter-Taste die Zeile. In der
reinen Programmausgabe gibt es diese Enter-Taste aber nicht. Zwei Fragen mit `print` landen dann in
derselben Zeile. Das zeigt das nächste Beispiel.

:::beispiel[Zwei Fragen mit print]
```java
Scanner sc = new Scanner(System.in);
System.out.print("a = ");
int a = sc.nextInt();
System.out.print("b = ");
int b = sc.nextInt();
System.out.println("a + b = " + (a + b));
```

Eingabe: `4`, dann `5` (jeweils mit Enter).

1. `print("a = ")` schreibt `a = ` ohne Zeilenumbruch.
2. `nextInt()` liest 4. In IntelliJ sähe man jetzt `a = 4`, und die Enter-Taste beginnt eine neue Zeile.
   In der Programmausgabe steht aber nur `a = `.
3. `print("b = ")` schreibt also direkt dahinter: `a = b = `.
4. `nextInt()` liest 5. Danach schreibt `println` den Rest und beendet die Zeile.

Die Programmausgabe ist eine einzige Zeile:

```
a = b = a + b = 9
```

Die Klammern in `(a + b)` sind nötig. Ohne sie würde Java zuerst `"a + b = " + a` zu einem String
verketten und danach `b` anhängen. Das ergäbe `a + b = 45`.
:::

:::merke[Rezept: einen Wert von der Tastatur einlesen]
1. Ganz oben in der Datei: `import java.util.Scanner;`
2. Am Anfang von `main` **einmal**: `Scanner sc = new Scanner(System.in);`
3. Vor jedem Einlesen eine Eingabeaufforderung ausgeben, damit die Person weiß, was sie tippen soll.
4. Mit dem passenden Aufruf lesen und das Ergebnis speichern: `int n = sc.nextInt();`
:::

Für jeden Typ gibt es einen eigenen Leseaufruf. Die vier wichtigsten zeigt die Tabelle.

|Aufruf|liefert|Beispiel-Eingabe|Ergebnis|
|---|---|---|---|
|`sc.nextInt()`|`int`|`42`|`42`|
|`sc.nextDouble()`|`double`|`2.5`|`2.5`|
|`sc.next()`|`String`, ein Wort|`Hallo Welt`|`"Hallo"`|
|`sc.nextLine()`|`String`, Rest der Zeile|`Hallo Welt`|`"Hallo Welt"`|

Ein `nextChar()` für ein einzelnes Zeichen gibt es **nicht**. Wie man trotzdem ein Zeichen einliest,
zeigt [8.5 Eingabemethoden und der Taschenrechner](/lernen/ep1/eingabe/eingabemethoden-und-der-taschenrechner).
Was genau „ein Wort“ ist und warum `nextLine` besondere Vorsicht braucht, klären die Abschnitte
[8.2 Wie der Scanner die Eingabe zerlegt](/lernen/ep1/eingabe/wie-der-scanner-die-eingabe-zerlegt) und
[8.3 Ganze Zeilen und die nextLine-Falle](/lernen/ep1/eingabe/ganze-zeilen-und-die-nextline-falle).

```aufgabe
id: ei-erst-auswahl-wort
titel: Der richtige Leseaufruf
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Programm soll den Vornamen einer Person einlesen. Er besteht aus einem einzigen Wort. Welche Zeile
  ist richtig?
teile:
  - typ: auswahl
    optionen: ['`String vorname = sc.next();`', '`String vorname = sc.nextInt();`', '`char vorname = sc.next();`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`nextInt()` liest eine ganze Zahl und liefert `int`. Ein Name ist ein Text.'
      - wert: 2
        meldung: '`next()` liefert einen `String`, kein `char`. Außerdem hat ein Name meist mehr als ein Zeichen.'
hinweise:
  - Ein Wort ist Text, also ein `String`. Welcher Aufruf liefert einen `String`?
loesung: |
  Ein einzelnes Wort liest `next()`. Es liefert einen `String`.
  ---
  Also `String vorname = sc.next();`. Die anderen Zeilen kompilieren nicht, weil der Typ nicht passt.
```

:::achtung[Das import vergessen]
Eine typische erste Version sieht so aus:

```java
public class Quadrat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);   // Fehler
        ...
```

Der Compiler meldet zweimal `error: cannot find symbol` mit dem Zusatz `symbol: class Scanner`. Ohne
`import` kennt Java den Namen `Scanner` nicht. Die Meldung kommt zweimal, weil `Scanner` in der Zeile
zweimal vorkommt: als Typ der Variable und hinter `new`. Die Lösung ist die Zeile
`import java.util.Scanner;` ganz oben in der Datei. IntelliJ bietet sie dir mit Alt+Enter auch selbst an.
:::

:::achtung[Der Leseaufruf passt nicht zum Typ der Variable]
```java
int n = sc.next();          // Fehler
String wort = sc.nextInt(); // Fehler
int k = sc.nextInt;         // Fehler
```

- Zeile 1: `next()` liefert einen `String`. Der Compiler meldet
  `incompatible types: String cannot be converted to int`. Für eine Zahl brauchst du `nextInt()`.
- Zeile 2: umgekehrt, `int cannot be converted to String`.
- Zeile 3: Ohne runde Klammern ist es kein Methodenaufruf. Java sucht eine Variable namens `nextInt` und
  meldet `cannot find symbol`.

Erlaubt ist dagegen `double d = sc.nextInt();`. Ein `int` passt ohne Verlust in ein `double` (implizite
Typumwandlung aus [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast)).
:::

```aufgabe
id: ei-erst-gefuehrt
titel: Ein Programm mit zwei Eingaben verfolgen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eingabe: `12`, dann `5` (jeweils mit Enter). Was gibt das Programm aus? Löse die Aufgabe zuerst
  geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Rest {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              System.out.println("Dividend?");
              int a = sc.nextInt();
              System.out.println("Divisor?");
              int b = sc.nextInt();
              System.out.println(a + " : " + b + " = " + a / b + " Rest " + a % b);
          }
      }
    stdin: "12\n5\n"
    loesung: |
      Dividend?
      Divisor?
      12 : 5 = 2 Rest 2
    fehler:
      - wert: "Dividend?\n12\nDivisor?\n5\n12 : 5 = 2 Rest 2"
        meldung: Die Eingaben `12` und `5` sind nicht Teil der Programmausgabe. Ausgegeben wird nur, was `println` schreibt.
      - wert: "Dividend?\nDivisor?\n12 : 5 = 2.4 Rest 2"
        meldung: '`a / b` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg, also `12 / 5 = 2`.'
gefuehrt:
  - text: Welchen Wert hat `a` nach Zeile 7?
    teil: { typ: zahl, loesung: "12" }
    erklaerung: Der erste `nextInt()`-Aufruf liest die erste Zahl der Eingabe, also 12.
  - text: Welchen Wert hat `b` nach Zeile 9?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Der zweite Aufruf liest die nächste Zahl, also 5.
  - text: Was ergibt `a / b`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`12 / 5` mit zwei `int` ergibt 2, der Rest fällt weg.'
  - text: Was ergibt `a % b`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 12 = 2 · 5 + 2, der Rest ist 2.
hinweise:
  - Jeder Aufruf von `nextInt()` liest die nächste Zahl der Eingabe. Die Eingabe selbst erscheint nicht in der Ausgabe.
loesung: |
  **Ansatz:** `main` Zeile für Zeile ausführen und nur die `println`-Aufrufe in die Ausgabe schreiben.
  ---
  `Dividend?` erscheint, dann liest `nextInt()` die 12. `Divisor?` erscheint, dann wird 5 gelesen.
  ---
  `12 / 5 = 2` und `12 % 5 = 2`. Die letzte Zeile lautet `12 : 5 = 2 Rest 2`. Kontrolle: 2 · 5 + 2 = 12.
```

```aufgabe
id: ei-erst-summe
titel: Summe und Differenz
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Eingabe: `7 3` (beide Zahlen in einer Zeile, getrennt durch ein Leerzeichen). Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int x = sc.nextInt();
      int y = sc.nextInt();
      System.out.println(x + y);
      System.out.println("x - y = " + (x - y));
      System.out.println("x + y = " + x + y);
    stdin: "7 3\n"
    loesung: |
      10
      x - y = 4
      x + y = 73
    fehler:
      - wert: "10\nx - y = 4\nx + y = 10"
        meldung: 'In der letzten Zeile fehlen die Klammern. Java rechnet `+` von links nach rechts: Zuerst entsteht der String `"x + y = 7"`, dann wird `3` angehängt.'
      - wert: "73\nx - y = 4\nx + y = 73"
        meldung: In der ersten Zeile stehen zwei `int`-Werte ohne String davor. Dort bedeutet `+` normales Addieren.
hinweise:
  - Zwei Zahlen in einer Zeile sind kein Problem. `nextInt()` liest die erste, der nächste Aufruf die zweite.
  - Sobald links von `+` ein String steht, wird angehängt statt addiert.
loesung: |
  **Ansatz:** Zuerst die Werte der Variablen bestimmen, dann jede Ausgabezeile von links nach rechts auswerten.
  ---
  Der erste `nextInt()`-Aufruf liest 7, der zweite liest 3. Das Leerzeichen trennt die beiden Zahlen.
  ---
  Zeile 4: `7 + 3 = 10`. Zeile 5: Die Klammer rechnet zuerst `7 - 3 = 4`, dann wird angehängt: `x - y = 4`.
  ---
  Zeile 6: `"x + y = " + 7` ergibt `"x + y = 7"`, dann wird `3` angehängt: `x + y = 73`. Mit Klammern `(x + y)` stünde dort 10.
```

```aufgabe
id: ei-erst-luecke
titel: Die drei Zeilen ergänzen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass das Programm eine ganze Zahl einliest und ihr Doppeltes ausgibt.
teile:
  - typ: lueckentext
    code: |
      import ___;

      public class Doppelt {
          public static void main(String[] args) {
              Scanner sc = ___;
              int n = ___;
              System.out.println(2 * n);
          }
      }
    luecken:
      - ["java.util.Scanner", "java.util.*"]
      - ["new Scanner(System.in)"]
      - ["sc.nextInt()"]
    fehler:
      - wert: ["java.util.Scanner", "new Scanner()", "sc.nextInt()"]
        meldung: Der Scanner muss wissen, woher er lesen soll. Für die Tastatur steht `System.in` in den runden Klammern.
      - wert: ["java.util.Scanner", "new Scanner(System.in)", "sc.nextInt"]
        meldung: Ein Methodenaufruf braucht runde Klammern, auch wenn nichts darin steht.
hinweise:
  - Die Klasse liegt im Paket `java.util`. Ein neues Objekt erzeugt man mit `new`.
loesung: |
  Zeile 1 holt die Klasse herein: `import java.util.Scanner;` (oder mit `*` alle Klassen des Pakets).
  ---
  Zeile 5 erzeugt den Scanner für die Tastatur: `new Scanner(System.in)`. Zeile 6 liest mit `sc.nextInt()` eine ganze Zahl.
```

```aufgabe
id: ei-erst-zeilen
titel: Fehler beim Einlesen finden
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  In welchen Zeilen steckt ein Fehler, sodass das Programm nicht kompiliert? Markiere alle.
  Beurteile jede Zeile für sich.
teile:
  - typ: zeilen
    code: |
      import java.util.Scanner;

      public class Fehlersuche {
          public static void main(String[] args) {
              Scanner sc = new Scanner();
              int alter = sc.nextInt;
              String name = sc.nextInt();
              double groesse = sc.nextInt();
              char zeichen = sc.nextChar();
          }
      }
    loesung: [5, 6, 7, 9]
    fehler:
      - wert: [5, 6, 7, 8, 9]
        meldung: 'Zeile 8 ist korrekt. Ein `int` passt ohne Verlust in ein `double`, das ist eine erlaubte implizite Umwandlung.'
      - wert: [6, 7, 9]
        meldung: Schau dir in Zeile 5 an, was in den runden Klammern hinter `new Scanner` steht. Woher soll dieser Scanner lesen?
      - wert: [5, 6, 7]
        meldung: Gibt es beim Scanner eine Methode `nextChar`? Vergleiche mit der Tabelle der Leseaufrufe.
hinweise:
  - Prüfe bei jeder Zeile drei Dinge. Steht `System.in` in den runden Klammern hinter `new Scanner`? Hat der Aufruf runde Klammern? Passt der gelieferte Typ zur Variable?
  - '`nextInt()` liefert `int`, `next()` liefert `String`. Eine Methode `nextChar()` gibt es nicht.'
loesung: |
  **Ansatz:** Jede Zeile einzeln prüfen: Quelle in `new Scanner(...)`, Klammern beim Aufruf, Typ des Ergebnisses.
  ---
  Zeile 5: `new Scanner()` ohne Quelle gibt es nicht (`no suitable constructor found`). Richtig: `new Scanner(System.in)`.
  Zeile 6: `sc.nextInt` ohne Klammern ist kein Aufruf (`cannot find symbol`).
  ---
  Zeile 7: `nextInt()` liefert `int`, die Variable ist aber ein `String` (`incompatible types`). Zeile 9: Eine Methode `nextChar()` gibt es nicht (`cannot find symbol`).
  ---
  Zeile 8 ist korrekt: Der `int`-Wert wird automatisch in `double` umgewandelt. Fehlerhaft sind also die Zeilen 5, 6, 7 und 9.
```

```aufgabe
id: ei-erst-prompt-zeile
titel: Drei Fragen mit print
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Eingabe: `2`, dann `30`, dann `15` (jeweils eine Zeile). Was gibt das Programm aus? Denk daran: Die
  Eingabe selbst ist nicht Teil der Ausgabe.
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      System.out.print("Stunden: ");
      int h = sc.nextInt();
      System.out.print("Minuten: ");
      int m = sc.nextInt();
      System.out.println("Sekunden: ");
      int s = sc.nextInt();
      System.out.println(h * 3600 + m * 60 + s);
    stdin: "2\n30\n15\n"
    loesung: |
      Stunden: Minuten: Sekunden: 
      9015
    fehler:
      - wert: "Stunden: \nMinuten: \nSekunden: \n9015"
        meldung: In der Programmausgabe gibt es keine Enter-Taste der Eingabe. Nach `print` bleibt die Ausgabe in derselben Zeile, bis ein `println` kommt.
      - wert: "Stunden: Minuten: Sekunden: 9015"
        meldung: Die dritte Frage wird mit `println` ausgegeben. Danach beginnt eine neue Zeile.
      - wert: "Stunden: Minuten: Sekunden: \n2*3600+30*60+15"
        meldung: Hier wird mit Zahlen gerechnet, nicht verkettet. Rechne das Ergebnis aus.
    trim: true
hinweise:
  - Nur `println` beendet eine Zeile. Die Enter-Taste beim Tippen gehört nicht zur Ausgabe.
  - 2 Stunden sind 7200 Sekunden, 30 Minuten sind 1800 Sekunden.
loesung: |
  **Ansatz:** Nur die Ausgaben aufschreiben und auf `print` gegenüber `println` achten.
  ---
  `Stunden: ` und `Minuten: ` werden mit `print` geschrieben und bleiben in einer Zeile. `Sekunden: ` kommt mit `println` dazu und beendet die erste Zeile.
  ---
  Die Rechnung: 2 · 3600 + 30 · 60 + 15 = 7200 + 1800 + 15 = 9015. Das steht in der zweiten Zeile.
```

```aufgabe
id: ei-erst-rf
titel: Aussagen über den Scanner
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ohne `import java.util.Scanner;` (oder `import java.util.*;`) kompiliert ein Programm mit Scanner nicht.
        richtig: true
        erklaerung: Der Scanner liegt im Paket `java.util`, das nicht automatisch eingebunden ist. Der Compiler meldet `cannot find symbol`.
      - text: '`sc.nextInt()` liest sofort weiter, auch wenn noch niemand etwas getippt hat, und liefert dann 0.'
        richtig: false
        erklaerung: Das Programm wartet an dieser Stelle, bis eine Eingabe mit Enter abgeschickt wird.
      - text: '`String` und `Math` brauchen kein `import`, weil sie im Paket `java.lang` liegen.'
        richtig: true
        erklaerung: '`java.lang` ist in jedem Programm automatisch eingebunden.'
      - text: Die Eingabe, die jemand tippt, ist ein Teil der Programmausgabe.
        richtig: false
        erklaerung: IntelliJ zeigt sie in der Konsole an, aber das Programm hat sie nicht ausgegeben. Zur Ausgabe zählt nur, was `print` und `println` schreiben.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`nextInt()` erfindet keinen Wert. Es wartet, bis eine Eingabe da ist.'
      - wert: [r, f, r, r]
        meldung: Die Konsole zeigt die Eingabe zwar an, das Programm hat sie aber nicht geschrieben.
hinweise:
  - Überlege bei jeder Aussage, ob sie vom Compiler, vom Programm oder von IntelliJ handelt.
  - '`java.lang` ist das einzige Paket, das ohne `import` verfügbar ist.'
loesung: |
  **Ansatz:** Jede Aussage einzeln mit den Regeln aus diesem Abschnitt vergleichen.
  ---
  Aussage 1 und 3 sind richtig: `java.util` muss importiert werden, `java.lang` nicht.
  ---
  Aussage 2 und 4 sind falsch: `nextInt()` wartet auf eine Eingabe, und die Eingabe gehört nicht zur Ausgabe des Programms.
```

```aufgabe
id: ei-erst-rechteck
titel: Fläche und Umfang eines Rechtecks
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze `main`. Das Programm liest zuerst die Breite und dann die Höhe eines Rechtecks als ganze Zahlen
  ein. Danach gibt es genau zwei Zeilen aus:

  ```
  Flaeche: <Breite mal Höhe>
  Umfang: <zweimal Breite plus zweimal Höhe>
  ```

  Gib **keine** Eingabeaufforderungen aus, damit die Ausgabe genau dieser Form entspricht. Beispiel:
  Bei der Eingabe `4 7` lauten die Zeilen `Flaeche: 28` und `Umfang: 22`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Rechteck {
          public static void main(String[] args) {
              // TODO: Scanner erzeugen, Breite und Höhe einlesen, Fläche und Umfang ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Rechteck {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int breite = sc.nextInt();
              int hoehe = sc.nextInt();
              System.out.println("Flaeche: " + breite * hoehe);
              System.out.println("Umfang: " + (2 * breite + 2 * hoehe));
          }
      }
    tests:
      - { stdin: "4 7\n", stdout: "Flaeche: 28\nUmfang: 22\n", beschreibung: "Eingabe 4 7" }
      - { stdin: "10\n3\n", stdout: "Flaeche: 30\nUmfang: 26\n", beschreibung: "Eingabe in zwei Zeilen: 10 und 3" }
      - { stdin: "1 1\n", stdout: "Flaeche: 1\nUmfang: 4\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Steht beim Umfang eine Klammer um die Rechnung? Ohne Klammer wird nach dem String angehängt statt addiert." }
hinweise:
  - Du brauchst zwei Aufrufe von `nextInt()`, einen für die Breite und einen für die Höhe.
  - 'Schreibe beim Umfang `"Umfang: " + (2 * breite + 2 * hoehe)`. Die Klammer sorgt dafür, dass zuerst gerechnet wird.'
loesung: |
  **Ansatz:** Scanner erzeugen, zwei ganze Zahlen lesen, rechnen und ausgeben.
  ---
  ```java
  Scanner sc = new Scanner(System.in);
  int breite = sc.nextInt();
  int hoehe = sc.nextInt();
  System.out.println("Flaeche: " + breite * hoehe);
  System.out.println("Umfang: " + (2 * breite + 2 * hoehe));
  ```
  ---
  Bei der Fläche ist keine Klammer nötig, denn `*` wird vor `+` ausgewertet. Beim Umfang ohne Klammer entstünde `"Umfang: 8"` und dann `"Umfang: 814"`.
  ---
  Probe mit `4 7`: 4 · 7 = 28 und 2 · 4 + 2 · 7 = 22. Ob die Zahlen in einer Zeile oder in zwei Zeilen stehen, ist für `nextInt()` egal.
```

```aufgabe
id: ei-erst-zeit
titel: Sekunden in Stunden, Minuten und Sekunden
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Eine Sportuhr speichert die Dauer eines Laufs nur in Sekunden. Schreibe `main`: Das Programm liest eine
  ganze Zahl `sekunden` (mindestens 0) ein und gibt die Dauer in der Form `h:mm:ss` aus. Minuten und
  Sekunden haben immer **zwei** Stellen, die Stunden so viele, wie nötig sind.

  Beispiele: `3725` ergibt `1:02:05`, `59` ergibt `0:00:59`, `36000` ergibt `10:00:00`.

  Gib keine Eingabeaufforderung aus, nur die eine Zeile mit dem Ergebnis.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Laufzeit {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Laufzeit {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int sekunden = sc.nextInt();
              int h = sekunden / 3600;
              int m = sekunden % 3600 / 60;
              int s = sekunden % 60;
              String mm = (m < 10 ? "0" : "") + m;
              String ss = (s < 10 ? "0" : "") + s;
              System.out.println(h + ":" + mm + ":" + ss);
          }
      }
    tests:
      - { stdin: "3725\n", stdout: "1:02:05\n", beschreibung: "3725 Sekunden" }
      - { stdin: "59\n", stdout: "0:00:59\n", beschreibung: "weniger als eine Minute" }
      - { stdin: "36000\n", stdout: "10:00:00\n", beschreibung: "genau 10 Stunden" }
      - { stdin: "0\n", stdout: "0:00:00\n", versteckt: true }
      - { stdin: "4199\n", stdout: "1:09:59\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche mit 1:02:05. Rechnest du die Minuten aus dem Rest nach den vollen Stunden (sekunden % 3600 / 60)? Und bekommen Minuten und Sekunden unter 10 eine führende 0?" }
      - { wert: 2, meldung: "Bekommen Minuten und Sekunden unter 10 eine führende 0? 0 Minuten müssen als 00 erscheinen." }
      - { wert: 3, meldung: "Bei 36000 Sekunden sind die Minuten 0. Rechnest du die Minuten aus dem Rest nach den vollen Stunden (sekunden % 3600)? Erscheinen sie als 00?" }
hinweise:
  - Eine Stunde hat 3600 Sekunden, eine Minute 60. Ganzzahldivision `/` liefert die vollen Einheiten, `%` den Rest.
  - 'Minuten: zuerst die vollen Stunden abziehen (`sekunden % 3600`), dann durch 60 teilen. Für die führende Null hängst du `"0"` vor, wenn die Zahl kleiner als 10 ist.'
loesung: |
  **Ansatz:** Mit Ganzzahldivision und Rest die Sekunden schrittweise in Stunden, Minuten und Sekunden zerlegen.
  ---
  Für 3725: Stunden `3725 / 3600 = 1`. Rest nach den Stunden `3725 % 3600 = 125`, davon Minuten `125 / 60 = 2`. Sekunden `3725 % 60 = 5`.
  ---
  ```java
  int h = sekunden / 3600;
  int m = sekunden % 3600 / 60;
  int s = sekunden % 60;
  String mm = (m < 10 ? "0" : "") + m;
  String ss = (s < 10 ? "0" : "") + s;
  System.out.println(h + ":" + mm + ":" + ss);
  ```
  Der Ausdruck `m < 10 ? "0" : ""` ist der Bedingungsoperator aus [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung): Ist `m < 10`, entsteht `"0"`, sonst der leere String. Ein `if` mit zwei Zuweisungen leistet dasselbe.
  ---
  Probe: 1 · 3600 + 2 · 60 + 5 = 3725. Bei 36000 Sekunden: 10 Stunden, Rest 0, also `10:00:00`.
```

```reflexion
frage: Warum erzeugt man den Scanner einmal am Anfang von main und nicht vor jedem einzelnen Einlesen neu? Überlege, bevor du die Antwort aufdeckst.
antwort: |
  Ein Scanner liest die Eingabe nicht Zeichen für Zeichen, sondern holt sich gleich einen ganzen Block auf
  Vorrat und merkt sich den Rest. Dieser Vorrat heißt **Puffer**. Erzeugt man einen zweiten Scanner, kennt
  er den Puffer des ersten nicht. Was der erste schon geholt, aber noch nicht geliefert hat, ist für den
  zweiten verloren. Beim langsamen Eintippen fällt das oft nicht auf, weil der Puffer dann nur die gerade
  getippte Zeile enthält. Wird die Eingabe aber auf einmal eingefügt, wie bei den automatischen Tests
  dieses Kurses, bricht das Programm ab. Java meldet dann eine `NoSuchElementException`, also „es gibt
  keine weitere Eingabe“ (mehr zu solchen Abbrüchen in
  [8.2 Wie der Scanner die Eingabe zerlegt](/lernen/ep1/eingabe/wie-der-scanner-die-eingabe-zerlegt)).
  Darum gilt: ein Scanner pro Programm, und Methoden bekommen ihn als Parameter.
```

## Wie der Scanner die Eingabe zerlegt

```aufgabe
id: ei-token-check-leer
titel: Auch Leerzeichen sind Zeichen
niveau: 1
art: check
angabe: |
  Wie lang ist der String `" 7  x\n"`? Er besteht aus einem Leerzeichen, der Ziffer 7, zwei
  Leerzeichen, dem Buchstaben x und einem Zeilenumbruch `\n`. (Wiederholung:
  [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "2"
        meldung: '`length()` zählt **alle** Zeichen, auch Leerzeichen und den Zeilenumbruch `\n`. Das ist ein einziges Zeichen, obwohl man es mit zwei Zeichen hinschreibt.'
      - wert: "5"
        meldung: Der Zeilenumbruch `\n` ist ebenfalls ein Zeichen und zählt mit.
hinweise:
  - Zähle Zeichen für Zeichen, auch die unsichtbaren.
loesung: |
  Leerzeichen (1), `7` (2), zwei Leerzeichen (3, 4), `x` (5), Zeilenumbruch (6).
  ---
  Die Länge ist 6.
```

Bisher hat jeder Aufruf von `nextInt()` „die nächste Zahl“ gelesen. Was ist aber, wenn jemand mehrere
Zahlen in eine Zeile schreibt, Leerzeilen lässt oder statt einer Zahl ein Wort tippt? Um das sicher
vorherzusagen, musst du wissen, wie der Scanner die Eingabe sieht.

Für den Scanner ist die gesamte Eingabe **ein einziger langer Text**. Die Enter-Taste fügt darin nur ein
weiteres Zeichen ein, den Zeilenumbruch `\n`. Tippt jemand

```
12  Wien
  7
```

dann sieht der Scanner diese Zeichenfolge. Dabei steht `␣` für ein Leerzeichen, und `\n` ist **ein**
einziges Zeichen, der Zeilenumbruch:

```
12␣␣Wien\n␣␣7\n
```

Der Scanner zerlegt diesen Text in **Token**. Ein Token (englisch für „Marke“, Mehrzahl ebenfalls Token)
ist ein zusammenhängendes Stück ohne Leerraum. **Leerraum** (englisch: whitespace) sind Leerzeichen,
Tabulatoren und Zeilenumbrüche. Im Beispiel gibt es drei Token: `12`, `Wien` und `7`.

:::definition[Token und Leerraum]
**Leerraum** sind die Zeichen, die man nicht sieht: Leerzeichen, Tabulator und Zeilenumbruch. Ein
**Token** ist eine möglichst lange Folge von Zeichen ohne Leerraum. Der Scanner trennt die Eingabe an
jedem Leerraum, egal wie viel es ist.
:::

**Beispiel:** In der Eingabe `Hallo,␣␣Welt!␣3` (`␣` ist wieder ein Leerzeichen) gibt es drei Token: `Hallo,`, `Welt!` und `3`. Satzzeichen
gehören zum Token, nur Leerraum trennt. **Kein Token:** Die zwei Leerzeichen zwischen `Hallo,` und `Welt!`
sind kein leeres Token dazwischen. Mehrere Leerräume hintereinander zählen wie einer. Ebenso ist `12abc`
ein einziges Token und nicht die Zahl 12 gefolgt von `abc`.

### Der Lesezeiger

Der Scanner merkt sich, bis wohin er schon gelesen hat. Stell dir dafür einen **Lesezeiger** vor, einen
Pfeil im Text. Am Anfang steht er vor dem ersten Zeichen. Jeder Aufruf von `next()`, `nextInt()` oder
`nextDouble()` macht drei Dinge:

1. Er **überspringt** allen Leerraum ab dem Lesezeiger, auch Zeilenumbrüche und leere Zeilen.
2. Er **liest** das nächste Token bis zum nächsten Leerraum.
3. Er **schiebt** den Lesezeiger direkt hinter dieses Token. Der Leerraum danach bleibt liegen.

`next()` liefert das Token als `String`. `nextInt()` liefert es als `int`, aber nur, wenn das Token wie eine
ganze Zahl aussieht. `nextDouble()` liefert es als `double`.

:::beispiel[Namen und Alter aus zwei Zeilen]
```java
Scanner sc = new Scanner(System.in);
String n1 = sc.next();
int a1 = sc.nextInt();
String n2 = sc.next();
int a2 = sc.nextInt();
System.out.println(n1 + " ist " + a1 + ", " + n2 + " ist " + a2 + ".");
System.out.println("Zusammen " + (a1 + a2) + " Jahre.");
```

Eingabe (zwei Zeilen):

```
Anna 19
  Ben    21
```

Der Scanner sieht `Anna␣19\n␣␣Ben␣␣␣␣21\n`. Wir verfolgen den Lesezeiger, hier als Zeichen `‸`.

|Aufruf|überspringt|liefert|Lesezeiger danach|
|---|---|---|---|
|`next()`|nichts|`"Anna"`|`Anna‸␣19\n…`|
|`nextInt()`|ein Leerzeichen|`19`|`…19‸\n␣␣Ben…`|
|`next()`|`\n` und zwei Leerzeichen|`"Ben"`|`…Ben‸␣␣␣␣21\n`|
|`nextInt()`|vier Leerzeichen|`21`|`…21‸\n`|

Die Ausgabe ist:

```
Anna ist 19, Ben ist 21.
Zusammen 40 Jahre.
```

Beachte: Am Ende bleibt der letzte Zeilenumbruch `\n` ungelesen liegen. Das ist hier egal. Warum es bei
`nextLine()` wichtig wird, zeigt [8.3 Ganze Zeilen und die nextLine-Falle](/lernen/ep1/eingabe/ganze-zeilen-und-die-nextline-falle).
:::

```aufgabe
id: ei-token-check-anzahl
titel: Token zählen
niveau: 1
art: check
angabe: |
  Wie viele Token enthält die Eingabe `␣␣3␣+␣4=7␣␣␣ok?␣`? Dabei steht `␣` für ein Leerzeichen.
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "7"
        meldung: Ein Token endet nur an Leerraum. `4=7` und `ok?` enthalten kein Leerzeichen, also ist jedes davon **ein** Token. Rechen- und Satzzeichen trennen nicht.
      - wert: "6"
        meldung: 'Zwei häufige Ursachen: `4=7` ist **ein** Token, denn `=` trennt nicht. Und Leerzeichen am Anfang und am Ende erzeugen keine leeren Token, sie werden einfach übersprungen.'
hinweise:
  - Trenne nur an Leerzeichen. Satzzeichen und Rechenzeichen gehören zum Token.
loesung: |
  Die Token sind `3`, `+`, `4=7` und `ok?`.
  ---
  Das sind 4 Token. Die Leerzeichen am Rand und die mehrfachen Leerzeichen erzeugen keine weiteren.
```

### Wann ist ein Token eine Zahl?

`nextInt()` akzeptiert ein Token nur, wenn es eine ganze Zahl im Bereich von `int` darstellt: Ziffern,
davor höchstens ein Vorzeichen `+` oder `-`. So sind `42`, `-3`, `+7` und sogar `007` (ergibt 7) gültig.
Nicht gültig sind `4.0` (Punkt), `12abc` (Buchstaben), `zwölf` und `2147483648` (größer als der größte
`int`-Wert 2147483647). Eine Ausnahme, die du nur kennen, aber nie verwenden musst: Tausendertrennzeichen
nimmt `nextInt()` ebenfalls an. Mit englischer Spracheinstellung (mehr dazu im Kasten „Komma oder Punkt
bei nextDouble?“ dieser Lektion) wird aus `1,000` die Zahl 1000.

`nextDouble()` ist großzügiger: Es nimmt jede ganze Zahl und zusätzlich Kommazahlen wie `2.5` oder `-0.75`.
Aus dem Token `4` wird dabei `4.0`.

:::beispiel[Ein Preis mit Kommazahl]
```java
Scanner sc = new Scanner(System.in);
double preis = sc.nextDouble();
int stueck = sc.nextInt();
double summe = preis * stueck;
System.out.println(stueck + " Stueck zu " + preis + " kosten " + summe);
```

Eingabe: `2.5 4`

1. `nextDouble()` liest das Token `2.5` und liefert den `double`-Wert 2.5.
2. `nextInt()` überspringt das Leerzeichen und liest `4`.
3. `2.5 * 4` ist eine Rechnung mit einem `double`, das Ergebnis ist der `double`-Wert `10.0`.
4. Ausgabe: `4 Stueck zu 2.5 kosten 10.0`. Ein `double` wird immer mit Nachkommastelle ausgegeben, auch
   wenn sie 0 ist.

Mit der Eingabe `3 4` ginge es ebenso: `nextDouble()` macht aus dem Token `3` den Wert `3.0`. Die Ausgabe
wäre `4 Stueck zu 3.0 kosten 12.0`.
:::

```aufgabe
id: ei-token-check-double
titel: nextDouble mit einer ganzen Zahl
niveau: 1
art: check
angabe: Das nächste Token ist `7`. Welchen Wert liefert `sc.nextDouble()`, so wie `println` ihn ausgibt?
teile:
  - typ: auswahl
    optionen: ['`7.0`', '`7`', 'gar nichts, das Programm bricht ab, weil `7` keine Kommazahl ist']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`nextDouble()` liefert immer einen `double`. Ein `double` wird mit Nachkommastelle ausgegeben.'
      - wert: 2
        meldung: '`nextDouble()` nimmt auch ganze Zahlen. Nur `nextInt()` ist streng: Es lehnt Kommazahlen ab.'
hinweise:
  - Jede ganze Zahl ist auch eine gültige Kommazahl.
loesung: |
  `nextDouble()` akzeptiert das Token `7` und macht daraus den `double`-Wert 7.0.
  ---
  `println` zeigt ihn als `7.0`.
```

Was passiert, wenn das Token **nicht** passt? Dann wirft der Leseaufruf eine **Exception** (Ausnahme), und
das Programm bricht ab. Eine Exception ist Javas Art zu sagen: „Hier geht es nicht weiter.“ Für das
Einlesen gibt es zwei wichtige:

- `InputMismatchException` (mismatch heißt „passt nicht“): Es gibt ein Token, aber es hat nicht den
  verlangten Typ. Beispiel: `nextInt()` trifft auf `zwölf`.
- `NoSuchElementException` („kein solches Element“): Es gibt überhaupt kein Token mehr, die Eingabe ist zu
  Ende.

:::achtung[Ein Wort, wo eine Zahl erwartet wird]
Das Programm `Quadrat` aus [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm)
bekommt die Eingabe `sieben`. Die Konsole zeigt:

```
Welche Zahl? sieben
Exception in thread "main" java.util.InputMismatchException
	at java.base/java.util.Scanner.throwFor(Scanner.java:947)
	...
	at Quadrat.main(Quadrat.java:7)
```

Die letzte Zeile verrät die Stelle: Zeile 7, also `sc.nextInt()`. Der Fehler liegt nicht im Code, sondern in
der Eingabe. Für ein Programm, das Menschen bedienen, ist so ein Absturz trotzdem nicht akzeptabel. Wie
man Eingaben vorher prüft, zeigt [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).
Wichtig für später: Nach der Exception liegt das Token `sieben` **immer noch** ungelesen im Scanner.
`nextInt()` hat es nicht verbraucht.
:::

:::achtung[Komma oder Punkt bei nextDouble?]
Gibt man in IntelliJ für `nextDouble()` die Zahl `2.5` ein, kann trotzdem eine `InputMismatchException`
kommen. Der Grund ist die **Spracheinstellung** (englisch: locale) des Computers. Auf einem Rechner mit
deutscher oder österreichischer Einstellung erwartet der Scanner das Dezimalkomma, also `2,5`. Auf einem
Rechner mit englischer Einstellung erwartet er den Punkt `2.5`.

Das gilt nur für die **Eingabe**. Im Quelltext und bei der Ausgabe mit `println` verwendet Java immer den
Punkt. Die Aufgaben dieses Kurses laufen mit englischer Einstellung, darum stehen Kommazahlen in den
Eingaben immer mit Punkt. Wer die Einstellung im eigenen Programm festlegen will, schreibt nach dem
Erzeugen `sc.useLocale(java.util.Locale.US);`. Danach gilt immer der Punkt.
:::

```aufgabe
id: ei-token-gefuehrt
titel: Den Lesezeiger verfolgen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Eingabe (drei Zeilen, die mittlere ist leer):

  ```
  Graz   8010

     Linz 4020
  ```

  Was gibt der Code aus? Löse zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      String a = sc.next();
      int pa = sc.nextInt();
      String b = sc.next();
      int pb = sc.nextInt();
      System.out.println(b + "-" + a);
      System.out.println(pb - pa);
    stdin: "Graz   8010\n\n   Linz 4020\n"
    loesung: |
      Linz-Graz
      -3990
    fehler:
      - wert: "Graz-Linz\n-3990"
        meldung: In der ersten Ausgabezeile steht `b` vor `a`. `b` ist das zweite gelesene Wort.
      - wert: "Linz-Graz\n3990"
        meldung: Gerechnet wird `pb - pa`, also 4020 − 8010. Das Ergebnis ist negativ.
gefuehrt:
  - text: Welches Token liefert der erste Aufruf `sc.next()`?
    teil:
      typ: auswahl
      optionen: ['`Graz`', '`Graz   8010`', '`G`']
      richtig: [0]
    erklaerung: '`next()` liest bis zum ersten Leerraum. Das Token ist `Graz`.'
  - text: Welchen Wert liefert danach `sc.nextInt()`?
    teil: { typ: zahl, loesung: "8010" }
    erklaerung: Die drei Leerzeichen werden übersprungen, dann wird `8010` gelesen.
  - text: Was passiert mit der leeren Zeile, wenn `sc.next()` zum zweiten Mal aufgerufen wird?
    teil:
      typ: auswahl
      optionen: ['Sie wird übersprungen, `next()` liefert `Linz`.', '`next()` liefert einen leeren String.', 'Das Programm bricht mit einer Exception ab.']
      richtig: [0]
    erklaerung: Zeilenumbrüche und Leerzeichen sind Leerraum. `next()` überspringt beliebig viel davon, auch ganze leere Zeilen.
  - text: Was ergibt `pb - pa`?
    teil: { typ: zahl, loesung: "4020 - 8010" }
    erklaerung: 4020 − 8010 = −3990.
hinweise:
  - Leerraum, auch eine ganze leere Zeile, wird vor jedem Token übersprungen.
  - Achte in der Ausgabe auf die Reihenfolge `b` vor `a` und auf das Vorzeichen.
loesung: |
  **Ansatz:** Die Eingabe in Token zerlegen und der Reihe nach den Aufrufen zuordnen.
  ---
  Die Token sind `Graz`, `8010`, `Linz`, `4020`. Also `a = "Graz"`, `pa = 8010`, `b = "Linz"`, `pb = 4020`. Die leere Zeile ist nur Leerraum.
  ---
  Zeile 1 der Ausgabe: `b + "-" + a` ergibt `Linz-Graz`. Zeile 2: 4020 − 8010 = −3990.
```

```aufgabe
id: ei-token-leerzeilen
titel: Zahlen über mehrere Zeilen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Eingabe besteht aus vier Zeilen: `␣␣5`, einer leeren Zeile, `8␣2` und `␣␣␣1`. Dabei steht `␣` für ein
  Leerzeichen. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int a = sc.nextInt();
      int b = sc.nextInt();
      int c = sc.nextInt();
      System.out.println(a * 100 + b * 10 + c);
    stdin: "  5\n\n8 2\n   1\n"
    loesung: |
      582
    fehler:
      - wert: "581"
        meldung: Der dritte Aufruf liest das dritte Token. Die Zeile `8 2` enthält **zwei** Token, `8` und `2`.
      - wert: "15"
        meldung: 'Die drei Werte werden nicht einfach addiert. Setze sie in `a * 100 + b * 10 + c` ein: 5 · 100 + 8 · 10 + 2.'
hinweise:
  - Zerlege die ganze Eingabe in Token. Zeilen spielen für `nextInt()` keine Rolle.
loesung: |
  Die Token sind `5`, `8`, `2`, `1`. Die drei Aufrufe lesen 5, 8 und 2. Das Token `1` bleibt ungelesen.
  ---
  5 · 100 + 8 · 10 + 2 = 582.
```

```aufgabe
id: ei-token-rf-int
titel: Welche Token nimmt nextInt?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: Ein Aufruf `sc.nextInt()` trifft als nächstes Token jeweils auf den genannten Text. Liefert er eine Zahl?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`+7` wird als 7 gelesen.'
        richtig: true
        erklaerung: Ein Vorzeichen vor den Ziffern ist erlaubt, auch ein Plus.
      - text: '`4.0` wird als 4 gelesen.'
        richtig: false
        erklaerung: Der Punkt macht daraus eine Kommazahl. `nextInt()` wirft eine `InputMismatchException`. `nextDouble()` würde 4.0 liefern.
      - text: '`007` wird als 7 gelesen.'
        richtig: true
        erklaerung: Führende Nullen sind erlaubt und ändern den Wert nicht.
      - text: '`12abc` wird als 12 gelesen, der Rest `abc` bleibt für den nächsten Aufruf liegen.'
        richtig: false
        erklaerung: '`12abc` ist ein einziges Token. Es ist keine ganze Zahl, also wirft `nextInt()` eine `InputMismatchException`.'
    fehler:
      - wert: [r, f, r, r]
        meldung: Der Scanner zerlegt nur an Leerraum. `12abc` ist ein ganzes Token und wird nicht in Ziffern und Buchstaben aufgeteilt.
      - wert: [r, r, r, f]
        meldung: '`4.0` hat einen Punkt. Für `nextInt()` muss das Token nur aus Ziffern bestehen, höchstens mit Vorzeichen davor.'
hinweise:
  - Ein gültiges `int`-Token besteht aus Ziffern, davor höchstens ein `+` oder `-`.
  - Das Token endet erst am nächsten Leerraum.
loesung: |
  **Ansatz:** Für jedes Token prüfen, ob es nur aus Ziffern mit optionalem Vorzeichen besteht.
  ---
  `+7` und `007` sind gültig und ergeben 7.
  ---
  `4.0` und `12abc` sind keine ganzen Zahlen. In beiden Fällen kommt eine `InputMismatchException`, und das Token bleibt ungelesen im Scanner.
```

```aufgabe
id: ei-token-trace
titel: Was liefert jeder Aufruf?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eingabe: `x 10   3.5 -2 Ende` in einer Zeile. Ein Programm ruft der Reihe nach
  `sc.next()`, `sc.nextInt()`, `sc.nextDouble()`, `sc.nextDouble()` und `sc.next()` auf.
  Trage für jeden Aufruf das gelesene Token und den Typ des gelieferten Werts ein (`String`, `int` oder `double`).
teile:
  - typ: trace
    spalten: [Token, Typ]
    zeilen: ["next()", "nextInt()", "nextDouble()", "nextDouble()", "next()"]
    loesung: [["x", "String"], ["10", "int"], ["3.5", "double"], ["-2", "double"], ["Ende", "String"]]
    fehler:
      - wert: ["x", "String", "10", "int", "3.5", "double", "-2", "int", "Ende", "String"]
        meldung: 'Den Typ bestimmt der Aufruf, nicht das Token. `nextDouble()` liefert immer einen `double`, auch für das Token `-2`. Ausgegeben würde es als `-2.0`.'
      - wert: ["x", "String", "10", "int", "3.5", "double", "-2", "double", "Ende", "double"]
        meldung: '`next()` liefert jedes Token als `String`, egal wie es aussieht.'
hinweise:
  - Zerlege die Zeile zuerst in Token. Jeder Aufruf nimmt genau das nächste.
  - '`nextDouble()` macht auch aus einem ganzzahligen Token einen `double`-Wert.'
loesung: |
  **Ansatz:** Token bestimmen und jedem Aufruf der Reihe nach eines zuordnen.
  ---
  Die Token sind `x`, `10`, `3.5`, `-2` und `Ende`. Die mehrfachen Leerzeichen trennen nur.
  ---
  `next()` liefert `"x"` als `String`, `nextInt()` liefert 10 als `int`, `nextDouble()` liefert 3.5 als `double`.
  ---
  Das vierte Token `-2` wird mit `nextDouble()` gelesen. Der Wert ist also ein `double`, nämlich `-2.0`. Der letzte `next()` liefert `"Ende"` als `String`.
```

```aufgabe
id: ei-token-exception
titel: Was passiert bei dieser Eingabe?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  ```java
  Scanner sc = new Scanner(System.in);
  int a = sc.nextInt();
  int b = sc.nextInt();
  System.out.println(a + b);
  ```

  Ordne jeder Eingabe zu, was passiert.

  a) Eingabe `3 vier`

  b) Eingabe `3` (danach endet die Eingabe)

  c) Eingabe `3 4 5`
teile:
  - typ: auswahl
    label: a)
    optionen: ['Abbruch mit `InputMismatchException`', 'Abbruch mit `NoSuchElementException`', 'Ausgabe `7`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein zweites Token ist vorhanden, nämlich `vier`. Es hat nur den falschen Typ.
  - typ: auswahl
    label: b)
    optionen: ['Abbruch mit `InputMismatchException`', 'Abbruch mit `NoSuchElementException`', 'Ausgabe `3`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Es gibt gar kein zweites Token mehr. „Passt nicht“ wäre es nur, wenn ein Token da wäre.
      - wert: 2
        meldung: '`nextInt()` erfindet keinen Wert. Fehlt die Eingabe, bricht das Programm ab.'
  - typ: auswahl
    label: c)
    optionen: ['Abbruch, weil ein Token übrig bleibt', 'Ausgabe `7`', 'Ausgabe `12`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Übrige Token stören nicht. Sie bleiben einfach ungelesen.
      - wert: 2
        meldung: Es gibt nur zwei Aufrufe von `nextInt()`. Die 5 wird nie gelesen.
hinweise:
  - Unterscheide „es gibt ein Token, aber es passt nicht“ von „es gibt kein Token mehr“.
  - Token, die niemand liest, bleiben einfach liegen.
loesung: |
  **Ansatz:** Für jede Eingabe die Token bestimmen und prüfen, was der zweite Aufruf vorfindet.
  ---
  a) Das zweite Token ist `vier`, keine ganze Zahl: `InputMismatchException`.
  ---
  b) Nach `3` ist die Eingabe zu Ende. Der zweite Aufruf findet kein Token: `NoSuchElementException`.
  ---
  c) Die Aufrufe lesen 3 und 4, die Ausgabe ist `7`. Das Token `5` bleibt ungelesen, das ist kein Fehler.
```

```aufgabe
id: ei-token-preis
titel: Kommazahlen einlesen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eingabe: `1.5 3` in einer Zeile. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      double liter = sc.nextDouble();
      double flaschen = sc.nextDouble();
      System.out.println(liter * flaschen);
      System.out.println(flaschen);
    stdin: "1.5 3\n"
    loesung: |
      4.5
      3.0
    fehler:
      - wert: "4.5\n3"
        meldung: '`flaschen` hat den Typ `double`, weil es mit `nextDouble()` gelesen wurde. Ein `double` wird immer mit Nachkommastelle ausgegeben.'
hinweise:
  - '`nextDouble()` macht aus dem Token `3` den Wert `3.0`.'
loesung: |
  `liter` ist 1.5, `flaschen` ist 3.0, denn `nextDouble()` liefert immer einen `double`.
  ---
  1.5 · 3.0 = 4.5. Die zweite Zeile zeigt `3.0` mit Nachkommastelle.
```

```aufgabe
id: ei-token-fehler-finden
titel: Wo bricht es ab?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eingabe: `Linz 4020 Wels 4600.5`. In welcher Zeile bricht das Programm mit einer Exception ab?
  Markiere genau eine Zeile.
teile:
  - typ: zeilen
    code: |
      Scanner sc = new Scanner(System.in);
      String s1 = sc.next();
      int p1 = sc.nextInt();
      String s2 = sc.next();
      int p2 = sc.nextInt();
      System.out.println(p1 + p2);
    loesung: [5]
    fehler:
      - wert: [6]
        meldung: Zeile 6 wird nie erreicht. Das Problem entsteht beim Lesen, nicht beim Rechnen.
      - wert: [4]
        meldung: '`next()` nimmt jedes Token als `String`, auch `Wels`. Hier kann nichts schiefgehen, solange noch ein Token da ist.'
hinweise:
  - Ordne jedem Leseaufruf sein Token zu und prüfe, ob der Typ passt.
  - '`4600.5` enthält einen Punkt.'
loesung: |
  **Ansatz:** Token den Aufrufen zuordnen und jeweils den Typ prüfen.
  ---
  Zeile 2 liest `Linz`, Zeile 3 liest `4020` als `int`, Zeile 4 liest `Wels`.
  ---
  Zeile 5 trifft auf `4600.5`. Das ist keine ganze Zahl, also kommt dort eine `InputMismatchException`.
```

```aufgabe
id: ei-token-summe-n
titel: Anzahl, dann die Zahlen
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Schreibe `main`. Die Eingabe beginnt mit einer ganzen Zahl `n` (mindestens 1). Danach folgen genau `n`
  ganze Zahlen, beliebig auf Zeilen verteilt. Gib in zwei Zeilen die Summe und das Maximum dieser `n`
  Zahlen aus:

  ```
  Summe: <Summe>
  Maximum: <größte Zahl>
  ```

  Beispiel: Eingabe `3` und darunter `4 -2 9` ergibt `Summe: 11` und `Maximum: 9`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class SummeMax {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class SummeMax {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int n = sc.nextInt();
              int summe = 0;
              int max = 0;
              for (int i = 0; i < n; i++) {
                  int x = sc.nextInt();
                  summe += x;
                  if (i == 0 || x > max) {
                      max = x;
                  }
              }
              System.out.println("Summe: " + summe);
              System.out.println("Maximum: " + max);
          }
      }
    tests:
      - { stdin: "3\n4 -2 9\n", stdout: "Summe: 11\nMaximum: 9\n", beschreibung: "3 Zahlen: 4 -2 9" }
      - { stdin: "1\n-5\n", stdout: "Summe: -5\nMaximum: -5\n", beschreibung: "eine einzige negative Zahl" }
      - { stdin: "4\n-3\n-1\n-7\n-2\n", stdout: "Summe: -13\nMaximum: -1\n", beschreibung: "nur negative Zahlen, jede in einer Zeile" }
      - { stdin: "5 1 2 3 4 5\n", stdout: "Summe: 15\nMaximum: 5\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Startet dein Maximum bei 0? Bei nur negativen Zahlen bleibt es dann fälschlich 0. Setze das Maximum mit der ersten gelesenen Zahl." }
      - { wert: 3, meldung: "Startet dein Maximum bei 0? Bei nur negativen Zahlen bleibt es dann fälschlich 0. Setze das Maximum mit der ersten gelesenen Zahl." }
hinweise:
  - Lies zuerst `n`. Dann liest eine `for`-Schleife mit `n` Durchläufen jeweils eine Zahl.
  - Das Maximum darf nicht bei 0 beginnen. Nimm die erste gelesene Zahl als Startwert, zum Beispiel mit `if (i == 0 || x > max)`.
loesung: |
  **Ansatz:** Die Anzahl steht vorne, also passt eine Zählschleife aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen). Summe und Maximum werden beim Lesen mitgeführt.
  ---
  ```java
  int n = sc.nextInt();
  int summe = 0;
  int max = 0;
  for (int i = 0; i < n; i++) {
      int x = sc.nextInt();
      summe += x;
      if (i == 0 || x > max) {
          max = x;
      }
  }
  ```
  ---
  Die Bedingung `i == 0` sorgt dafür, dass die erste Zahl immer das Maximum setzt. Würde `max` bei 0 starten, käme bei `-3 -1 -7 -2` fälschlich 0 heraus.
  ---
  Probe mit `3` und `4 -2 9`: Summe 4 − 2 + 9 = 11, Maximum 9. Wie die Zahlen auf Zeilen verteilt sind, spielt für `nextInt()` keine Rolle.
```

```reflexion
frage: 'Eine Zusatzfrage aus dem Feedbackgespräch lautet: „Wie können die eingegebenen Daten (beziehungsweise deren Datentypen) bei der Verwendung des Scanners unterschieden werden?“ Was antwortest du nach diesem Abschnitt, und was fehlt dir noch?'
antwort: |
  Der Scanner sieht nur Text. Er zerlegt ihn an Leerraum in Token. Ob ein Token eine ganze Zahl, eine
  Kommazahl oder ein Wort ist, entscheidet sich an seiner Form: nur Ziffern mit optionalem Vorzeichen ist
  ein `int`, mit Dezimaltrennzeichen ein `double`, alles andere nur ein `String`. Mit `nextInt()` verlangt
  man einen bestimmten Typ, und passt das Token nicht, kommt eine `InputMismatchException`. Was noch fehlt:
  Man kann den Typ auch **vorher prüfen**, ohne etwas zu lesen. Dafür gibt es `hasNextInt()`,
  `hasNextDouble()` und `hasNext()`. Das ist das Thema von [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).
```

## Ganze Zeilen und die nextLine-Falle

```aufgabe
id: ei-zeile-check-leer
titel: Ein leerer String in Klammern
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Das Verketten von Strings kennst du aus
  [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten).
teile:
  - typ: ausgabe
    code: |
      String s = "";
      System.out.println("[" + s + "]");
      System.out.println(s.length());
    loesung: |
      []
      0
    fehler:
      - wert: "[ ]\n0"
        meldung: Der leere String `""` enthält kein einziges Zeichen, auch kein Leerzeichen. Die Klammern stehen direkt nebeneinander.
hinweise:
  - '`""` ist ein String der Länge 0.'
loesung: |
  `s` ist der leere String. Zwischen `[` und `]` wird nichts eingefügt.
  ---
  Die Länge ist 0. Ausgabe: `[]` und `0`.
```

`next()` liefert immer nur ein Wort. Für einen ganzen Satz, einen Namen mit Leerzeichen wie
`Ada Lovelace` oder eine Adresse wie `Karlsplatz 13` reicht das nicht. Dafür gibt es `nextLine()`.

`nextLine()` arbeitet **anders** als die übrigen Leseaufrufe. Es zerlegt nicht in Token, sondern denkt in
Zeilen:

1. Es überspringt **nichts**, auch keinen Leerraum.
2. Es liest alle Zeichen ab dem Lesezeiger **bis zum nächsten Zeilenumbruch** `\n`.
3. Es liefert diese Zeichen als `String`, **ohne** den Zeilenumbruch.
4. Es schiebt den Lesezeiger **hinter** den Zeilenumbruch, also an den Anfang der nächsten Zeile.

Leerzeichen am Anfang oder Ende der Zeile bleiben dabei erhalten. Die Eingabe `␣␣Hallo Welt␣␣` (`␣` steht
für ein Leerzeichen) liefert den String `"␣␣Hallo Welt␣␣"` mit allen vier Leerzeichen am Rand.

:::beispiel[Ein Name mit Leerzeichen]
```java
Scanner sc = new Scanner(System.in);
System.out.println("Ganzer Name?");
String name = sc.nextLine();
System.out.println("Hallo " + name + "!");
System.out.println("Der Name hat " + name.length() + " Zeichen.");
```

Eingabe: `Ada Lovelace`

1. `nextLine()` liest alle Zeichen bis zum Zeilenumbruch: `Ada Lovelace`, 12 Zeichen samt Leerzeichen.
2. Ausgabe: `Ganzer Name?`, dann `Hallo Ada Lovelace!`, dann `Der Name hat 12 Zeichen.`

Mit `sc.next()` statt `nextLine()` käme nur `Ada` an. Die Ausgabe wäre `Hallo Ada!` und
`Der Name hat 3 Zeichen.`, und `Lovelace` bliebe ungelesen liegen.
:::

### Die Falle: nextLine nach nextInt

Jetzt kommt die bekannteste Falle beim Einlesen. Ein Programm fragt zuerst nach dem Alter und dann nach
dem Namen:

```java
Scanner sc = new Scanner(System.in);
System.out.println("Alter?");
int alter = sc.nextInt();
System.out.println("Name?");
String name = sc.nextLine();
System.out.println(name + " ist " + alter + " Jahre alt.");
```

Wer das in IntelliJ startet, `19` tippt und Enter drückt, erlebt eine Überraschung: Das Programm wartet
gar nicht auf den Namen. Es gibt sofort ` ist 19 Jahre alt.` aus, mit einem Leerzeichen am Anfang und
ohne Namen. Was ist passiert?

Die Erklärung liegt im **Puffer** des Scanners. Ein Puffer ist ein Zwischenspeicher. Der Scanner holt sich
die getippten Zeichen in diesen Speicher und arbeitet sie dort mit dem Lesezeiger ab. Was hinter dem
Lesezeiger liegt, ist schon verbraucht. Was davor liegt, wartet auf den nächsten Leseaufruf.

:::definition[Puffer des Scanners]
Der **Puffer** ist der Zwischenspeicher, in dem der Scanner die eingegebenen Zeichen ablegt. Ein
Leseaufruf entnimmt Zeichen ab dem Lesezeiger. Zeichen, die kein Aufruf entnommen hat, bleiben im Puffer
und werden vom **nächsten** Leseaufruf gesehen. Den Puffer **leeren** heißt, die übrigen Zeichen
absichtlich zu entnehmen und wegzuwerfen.
:::

**Beispiel:** Nach `nextInt()` auf der Eingabe `19⏎` liegt im Puffer noch der Zeilenumbruch. **Kein
Beispiel für einen vollen Puffer:** Nach `nextLine()` auf derselben Eingabe ist der Puffer leer, denn
`nextLine()` entnimmt den Zeilenumbruch mit.

:::beispiel[Die Falle Schritt für Schritt]
Wir verfolgen das Alter-Name-Programm mit der Eingabe `19⏎Ada⏎` (das Zeichen `⏎` steht für den
Zeilenumbruch `\n`). Den Lesezeiger zeigt das Zeichen `‸`.

|Schritt|Puffer mit Lesezeiger|Ergebnis|
|---|---|---|
|Start|`‸19⏎Ada⏎`|–|
|`nextInt()`|`19‸⏎Ada⏎`|`alter = 19`|
|`nextLine()`|`19⏎‸Ada⏎`|`name = ""`|

`nextInt()` liest das Token `19` und bleibt **direkt dahinter** stehen. Der Zeilenumbruch, den die
Enter-Taste erzeugt hat, liegt noch im Puffer. Dann kommt `nextLine()`. Es liest „bis zum nächsten
Zeilenumbruch“. Der steht aber sofort vor dem Lesezeiger. Also liefert `nextLine()` die Zeichen
**davor**, und das sind keine. Ergebnis: der leere String `""`. Der echte Name `Ada` wird nie gelesen.

Die Ausgabe des Programms ist deshalb:

```
Alter?
Name?
 ist 19 Jahre alt.
```

In IntelliJ sieht es so aus, als hätte das Programm die Frage nach dem Namen übersprungen.
:::

:::merke[Die Lösung: den Puffer leeren]
Steht nach `nextInt()`, `nextDouble()` oder `next()` ein `nextLine()`, das eine **neue** Zeile lesen soll,
dann rufe davor einmal `sc.nextLine();` auf, ohne das Ergebnis zu speichern. Dieser Aufruf entnimmt den
Rest der alten Zeile samt Zeilenumbruch. Danach steht der Lesezeiger am Anfang der neuen Zeile.

```java
int alter = sc.nextInt();
sc.nextLine();                 // Rest der Zeile (meist nur der Zeilenumbruch) wegwerfen
String name = sc.nextLine();   // liest jetzt wirklich die nächste Zeile
```
:::

```aufgabe
id: ei-zeile-check-wohin
titel: Wo steht der Lesezeiger jetzt?
niveau: 1
art: check
angabe: |
  Eingabe `19⏎Ada⏎`. Nach `sc.nextInt();` folgt ein allein stehendes `sc.nextLine();`. Wo steht der
  Lesezeiger danach?
teile:
  - typ: auswahl
    optionen: ['Am Anfang der Zeile `Ada`', 'Direkt hinter `19`, vor dem Zeilenumbruch', 'Hinter `Ada`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dort stand er nach `nextInt()`. Das allein stehende `nextLine()` entnimmt den Zeilenumbruch.
      - wert: 2
        meldung: '`nextLine()` liest nur bis zum **ersten** Zeilenumbruch, also nur den Rest der ersten Zeile.'
hinweise:
  - '`nextLine()` entnimmt alles bis einschließlich des nächsten Zeilenumbruchs.'
loesung: |
  `nextInt()` lässt den Lesezeiger hinter `19` stehen. `nextLine()` entnimmt den Zeilenumbruch.
  ---
  Danach steht der Lesezeiger am Anfang von `Ada`. Das nächste `nextLine()` liefert `"Ada"`.
```

Mit dieser Zeile liefert das Programm bei `19⏎Ada⏎` die Ausgabe `Ada ist 19 Jahre alt.`. Der zusätzliche
Aufruf wirft übrigens den **ganzen** Rest der Zeile weg. Tippt jemand `19 Jahre`, verschwindet auch
` Jahre`. Das ist meist genau richtig.

Es gibt noch einen zweiten Weg: alles mit `nextLine()` lesen und die Zahl danach umwandeln.
`Integer.parseInt("19")` macht aus dem String `"19"` die Zahl 19. (`Integer` ist wie `String` eine fertige
Klasse aus `java.lang` und braucht kein `import`. `parseInt` heißt „als ganze Zahl lesen“.) So entsteht die Falle gar nicht, weil
jeder Aufruf eine ganze Zeile samt Zeilenumbruch nimmt. Allerdings verträgt `parseInt` keine Leerzeichen:
`Integer.parseInt(" 19")` bricht mit einer `NumberFormatException` ab.

:::achtung[„nextLine liest die nächste Zeile“]
Diese Vorstellung ist der Kern der Falle. Richtig ist: `nextLine()` liest **den Rest der aktuellen Zeile**,
also ab dem Lesezeiger bis zum Zeilenumbruch. Nur wenn der Lesezeiger gerade am Anfang einer Zeile steht,
ist das zufällig eine ganze Zeile.

Konkret mit der Eingabe `5 Aepfel⏎Birnen⏎`:

```java
int n = sc.nextInt();          // 5
String a = sc.nextLine();      // " Aepfel"  (mit Leerzeichen am Anfang!)
String b = sc.nextLine();      // "Birnen"
```

Wer erwartet, dass `a` den Wert `"Birnen"` hat, liegt falsch. `a` ist der Rest der ersten Zeile, und das
Leerzeichen zwischen `5` und `Aepfel` gehört dazu.
:::

```aufgabe
id: ei-zeile-check-rest
titel: Rest einer Zeile
niveau: 1
art: check
angabe: Eingabe `5 Aepfel⏎`. Nach `sc.nextInt();` folgt `String a = sc.nextLine();`. Wie viele Zeichen hat `a`?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: Das Leerzeichen zwischen `5` und `Aepfel` gehört zum Rest der Zeile. `nextLine()` überspringt es nicht.
      - wert: "0"
        meldung: Hinter der 5 steht in derselben Zeile noch Text. Der Rest ist also nicht leer.
hinweise:
  - Zähle alle Zeichen vom Lesezeiger bis zum Zeilenumbruch.
loesung: |
  Nach `nextInt()` steht der Lesezeiger direkt hinter der 5. Der Rest ist `" Aepfel"`.
  ---
  Ein Leerzeichen und sechs Buchstaben ergeben 7 Zeichen.
```

:::achtung[Den Puffer an der falschen Stelle leeren]
Wer die Falle kennt, schreibt manchmal vorsichtshalber nach **jedem** Einlesen `sc.nextLine();`. Das geht
schief, wenn davor schon ein `nextLine()` stand:

```java
String vorname = sc.nextLine();   // liest "Ada", Zeilenumbruch ist schon weg
sc.nextLine();                    // wirft die ganze nächste Zeile weg!
String ort = sc.nextLine();
```

Bei der Eingabe `Ada⏎Wien⏎Graz⏎` wird `Wien` weggeworfen, und `ort` wird `"Graz"`. Bei nur zwei
Eingabezeilen bricht das Programm sogar mit `NoSuchElementException: No line found` ab. Den Puffer leert man
nur nach `nextInt()`, `nextDouble()` oder `next()`, nie nach `nextLine()`.
:::

```aufgabe
id: ei-zeile-gefuehrt
titel: Alter, Stadt und Lieblingsessen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eingabe (drei Zeilen):

  ```
  23
  Sankt Poelten
  Kaesespaetzle
  ```

  Was gibt der Code aus? Löse zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int alter = sc.nextInt();
      String stadt = sc.nextLine();
      String essen = sc.nextLine();
      System.out.println("Stadt: [" + stadt + "]");
      System.out.println("Essen: [" + essen + "]");
    stdin: "23\nSankt Poelten\nKaesespaetzle\n"
    loesung: |
      Stadt: []
      Essen: [Sankt Poelten]
    fehler:
      - wert: "Stadt: [Sankt Poelten]\nEssen: [Kaesespaetzle]"
        meldung: Nach `nextInt()` steht der Lesezeiger direkt vor dem Zeilenumbruch der ersten Zeile. Das erste `nextLine()` liest nur den Rest dieser Zeile, und der ist leer.
      - wert: "Stadt: [Sankt]\nEssen: [Poelten]"
        meldung: '`nextLine()` zerlegt nicht in Wörter. Es liest bis zum Zeilenende, Leerzeichen gehören dazu.'
gefuehrt:
  - text: Wo steht der Lesezeiger nach `sc.nextInt()`?
    teil:
      typ: auswahl
      optionen: ['Direkt hinter `23`, vor dem Zeilenumbruch', 'Am Anfang der Zeile `Sankt Poelten`', 'Hinter `Sankt`']
      richtig: [0]
    erklaerung: '`nextInt()` liest nur das Token `23`. Der Zeilenumbruch danach bleibt im Puffer.'
  - text: Wie viele Zeichen hat `stadt`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`nextLine()` liest bis zum Zeilenumbruch, der sofort folgt. Also liefert es den leeren String.'
  - text: Welche Zeile liest das zweite `nextLine()`?
    teil:
      typ: auswahl
      optionen: ['`Sankt Poelten`', '`Kaesespaetzle`', 'nichts, der Puffer ist leer']
      richtig: [0]
    erklaerung: Nach dem ersten `nextLine()` steht der Lesezeiger am Anfang der zweiten Zeile. Die dritte Zeile wird nie gelesen.
hinweise:
  - Verfolge den Lesezeiger. Nach `nextInt()` liegt der Zeilenumbruch der ersten Zeile noch im Puffer.
  - Das erste `nextLine()` liest also nur den Rest der ersten Zeile.
loesung: |
  **Ansatz:** Den Lesezeiger durch die Eingabe `23⏎Sankt Poelten⏎Kaesespaetzle⏎` verfolgen.
  ---
  `nextInt()` liest 23 und bleibt vor dem ersten `⏎` stehen. Das erste `nextLine()` liest bis zu diesem `⏎`, also nichts: `stadt = ""`.
  ---
  Das zweite `nextLine()` liest die ganze zweite Zeile: `essen = "Sankt Poelten"`. Die dritte Zeile bleibt ungelesen. Ausgabe: `Stadt: []` und `Essen: [Sankt Poelten]`.
```

```aufgabe
id: ei-zeile-leerzeichen
titel: Leerzeichen bleiben erhalten
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Eingabe: eine Zeile mit zwei Leerzeichen, dann `Java ist`, dann ein Leerzeichen, also `  Java ist `.
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      String zeile = sc.nextLine();
      System.out.println("<" + zeile + ">");
      System.out.println(zeile.length());
    stdin: "  Java ist \n"
    loesung: |
      <  Java ist >
      11
    fehler:
      - wert: "<Java ist>\n8"
        meldung: '`nextLine()` überspringt keinen Leerraum. Die Leerzeichen am Anfang und am Ende gehören zum gelieferten String.'
      - wert: "<  Java ist >\n12"
        meldung: Der Zeilenumbruch am Ende gehört nicht zum String. `nextLine()` entnimmt ihn, liefert ihn aber nicht mit.
hinweise:
  - Zähle alle Zeichen bis zum Zeilenumbruch, auch die Leerzeichen.
loesung: |
  `nextLine()` liefert alle Zeichen vor dem Zeilenumbruch: zwei Leerzeichen, `Java`, ein Leerzeichen, `ist`, ein Leerzeichen.
  ---
  Das sind 2 + 4 + 1 + 3 + 1 = 11 Zeichen. Ausgabe: `<  Java ist >` und `11`.
```

```aufgabe
id: ei-zeile-falle
titel: Warum fehlt der Titel?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eingabe: `3`, dann in der nächsten Zeile `Der Hobbit`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      System.out.println("Anzahl?");
      int anzahl = sc.nextInt();
      System.out.println("Titel?");
      String titel = sc.nextLine();
      System.out.println(anzahl + "x " + titel + ".");
    stdin: "3\nDer Hobbit\n"
    loesung: |
      Anzahl?
      Titel?
      3x .
    fehler:
      - wert: "Anzahl?\nTitel?\n3x Der Hobbit."
        meldung: Das ist die nextLine-Falle. Nach `nextInt()` liegt der Zeilenumbruch hinter der `3` noch im Puffer, und `nextLine()` liefert nur den leeren Rest dieser Zeile.
hinweise:
  - Was liegt nach `nextInt()` noch vor dem Lesezeiger in der ersten Zeile?
loesung: |
  `nextInt()` liest 3, der Zeilenumbruch bleibt liegen. `nextLine()` liefert den leeren Rest der ersten Zeile.
  ---
  `titel` ist `""`. Die letzte Zeile lautet `3x .`. Der Titel `Der Hobbit` wird nie gelesen.
```

```aufgabe
id: ei-zeile-repariert
titel: Mit geleertem Puffer
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Eingabe (drei Zeilen): `4 Stueck`, dann `rote Rosen`, dann `Muttertag`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      sc.nextLine();
      String was = sc.nextLine();
      String anlass = sc.nextLine();
      System.out.println(n + " " + was + " zum " + anlass);
    stdin: "4 Stueck\nrote Rosen\nMuttertag\n"
    loesung: |
      4 rote Rosen zum Muttertag
    fehler:
      - wert: "4  Stueck zum rote Rosen"
        meldung: 'Der Aufruf `sc.nextLine();` in Zeile 3 entnimmt den Rest der ersten Zeile, hier ` Stueck` samt Zeilenumbruch, und wirft ihn weg.'
      - wert: "4 Stueck rote Rosen zum Muttertag"
        meldung: Das Ergebnis von `sc.nextLine();` in Zeile 3 wird nicht gespeichert. Der Text ` Stueck` geht verloren.
hinweise:
  - Der allein stehende Aufruf `sc.nextLine();` entnimmt den ganzen Rest der Zeile, nicht nur den Zeilenumbruch.
  - Danach steht der Lesezeiger am Anfang der zweiten Zeile.
loesung: |
  **Ansatz:** Lesezeiger verfolgen und beachten, dass der Rest der ersten Zeile weggeworfen wird.
  ---
  `nextInt()` liest 4. Das allein stehende `sc.nextLine();` entnimmt ` Stueck⏎` und verwirft es.
  ---
  `was = "rote Rosen"`, `anlass = "Muttertag"`. Ausgabe: `4 rote Rosen zum Muttertag`.
```

```aufgabe
id: ei-zeile-luecke
titel: Die fehlende Zeile einsetzen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Das Programm soll eine Postleitzahl und danach in einer eigenen Zeile den Ortsnamen einlesen. Der
  Ortsname kann Leerzeichen enthalten, zum Beispiel `Sankt Poelten`. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      Scanner sc = new Scanner(System.in);
      int plz = sc.___();
      ___;
      String ort = sc.___();
      System.out.println(plz + " " + ort);
    luecken:
      - ["nextInt"]
      - ["sc.nextLine()"]
      - ["nextLine"]
    fehler:
      - wert: ["nextInt", "sc.nextLine()", "next"]
        meldung: '`next()` liefert nur ein Wort. Bei `Sankt Poelten` käme nur `Sankt` an.'
      - wert: ["nextLine", "sc.nextLine()", "nextLine"]
        meldung: Die Postleitzahl soll als `int` gespeichert werden. `nextLine()` liefert einen `String`.
hinweise:
  - Eine Zahl liest man mit dem Aufruf für ganze Zahlen, einen Namen mit Leerzeichen mit `nextLine()`.
  - Zwischen den beiden muss der Rest der ersten Zeile entfernt werden.
loesung: |
  **Ansatz:** Zahl lesen, Puffer leeren, dann die ganze nächste Zeile lesen.
  ---
  Zeile 2: `sc.nextInt()` liest die Postleitzahl. Zeile 3: `sc.nextLine()` wirft den Zeilenumbruch nach der Zahl weg.
  ---
  Zeile 4: `sc.nextLine()` liest den ganzen Ortsnamen, auch mit Leerzeichen.
```

```aufgabe
id: ei-zeile-rf
titel: Aussagen zu nextLine
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`nextLine()` überspringt wie `next()` zuerst allen Leerraum.'
        richtig: false
        erklaerung: '`nextLine()` überspringt nichts. Es liefert alles ab dem Lesezeiger bis zum Zeilenumbruch, auch Leerzeichen und auch gar nichts.'
      - text: Nach `nextInt()` liegt der Zeilenumbruch der Eingabezeile noch im Puffer.
        richtig: true
        erklaerung: '`nextInt()` liest nur das Token und bleibt direkt dahinter stehen.'
      - text: '`nextLine()` kann den leeren String liefern, ohne dass das Programm abbricht.'
        richtig: true
        erklaerung: Steht der Lesezeiger direkt vor einem Zeilenumbruch, liefert `nextLine()` den leeren String `""`.
      - text: Nach zwei aufeinanderfolgenden `nextLine()`-Aufrufen muss man den Puffer leeren.
        richtig: false
        erklaerung: '`nextLine()` entnimmt den Zeilenumbruch selbst. Ein zusätzliches `sc.nextLine();` würde eine ganze Eingabezeile wegwerfen.'
    fehler:
      - wert: [r, r, r, f]
        meldung: '`next()` und `nextLine()` arbeiten verschieden. Nur die Token-Aufrufe überspringen Leerraum.'
      - wert: [f, r, r, r]
        meldung: Puffer leeren ist nur nach `nextInt()`, `nextDouble()` oder `next()` nötig, weil nur diese den Zeilenumbruch liegen lassen.
hinweise:
  - Unterscheide Token-Aufrufe (`next`, `nextInt`, `nextDouble`) von `nextLine`.
  - Welcher Aufruf entnimmt den Zeilenumbruch, welcher lässt ihn liegen?
loesung: |
  **Ansatz:** Für jede Aussage das Verhalten des Lesezeigers durchdenken.
  ---
  Aussage 1 ist falsch: `nextLine()` überspringt nichts. Aussage 2 ist richtig: Der Zeilenumbruch bleibt nach `nextInt()` liegen.
  ---
  Aussage 3 ist richtig: Dann entsteht `""`. Aussage 4 ist falsch: Nach `nextLine()` ist der Zeilenumbruch schon entnommen.
```

```aufgabe
id: ei-zeile-wo-leeren
titel: Wo gehört das Leeren hin?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Programm liest der Reihe nach: (1) eine Zahl mit `nextInt()`, (2) einen Satz mit `nextLine()`,
  (3) noch einen Satz mit `nextLine()`, (4) ein Wort mit `next()`. Jede Angabe steht in einer eigenen
  Eingabezeile. Vor welchem Leseaufruf muss ein zusätzliches `sc.nextLine();` stehen?
teile:
  - typ: auswahl
    optionen: ['nur vor (2)', 'vor (2) und vor (3)', 'vor (2), (3) und (4)']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Aufruf (2) ist ein `nextLine()`. Er entnimmt den Zeilenumbruch selbst, darum kann (3) direkt die nächste Zeile lesen.
      - wert: 2
        meldung: '`next()` überspringt allen Leerraum, auch Zeilenumbrüche. Vor einem `next()` muss man nie leeren.'
hinweise:
  - Leeren ist nur nötig, wenn ein `nextLine()` auf einen Token-Aufruf folgt.
  - '`next()` überspringt Zeilenumbrüche selbst, `nextLine()` entnimmt seinen Zeilenumbruch selbst.'
loesung: |
  **Ansatz:** Nur dort leeren, wo ein `nextLine()` direkt auf `nextInt()`, `nextDouble()` oder `next()` folgt.
  ---
  Vor (2) ist das der Fall: (1) war `nextInt()`. Vor (3) nicht, denn (2) war schon `nextLine()`.
  ---
  Vor (4) ist es überflüssig, weil `next()` den Zeilenumbruch selbst überspringt. Also nur vor (2).
```

```aufgabe
id: ei-zeile-karte
titel: Eine Visitenkarte einlesen
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe `main`. Die Eingabe besteht aus drei Zeilen: dem Alter (ganze Zahl), dem vollständigen Namen
  (kann Leerzeichen enthalten) und dem Wohnort (kann Leerzeichen enthalten). Gib genau eine Zeile aus:

  ```
  <Name> (<Alter>) aus <Wohnort>
  ```

  Beispiel: Die Eingabe `31`, `Grace Hopper`, `New York` ergibt `Grace Hopper (31) aus New York`.
  Gib keine Eingabeaufforderungen aus.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Visitenkarte {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Visitenkarte {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int alter = sc.nextInt();
              sc.nextLine();
              String name = sc.nextLine();
              String ort = sc.nextLine();
              System.out.println(name + " (" + alter + ") aus " + ort);
          }
      }
    tests:
      - { stdin: "31\nGrace Hopper\nNew York\n", stdout: "Grace Hopper (31) aus New York\n", beschreibung: "31 / Grace Hopper / New York" }
      - { stdin: "19\nAda\nWien\n", stdout: "Ada (19) aus Wien\n", beschreibung: "Namen ohne Leerzeichen" }
      - { stdin: "70\nKarl Heinz Maier\nSankt Johann im Pongau\n", stdout: "Karl Heinz Maier (70) aus Sankt Johann im Pongau\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Prüfe zwei Dinge. Wird nach nextInt() der Rest der ersten Zeile mit einem zusätzlichen sc.nextLine() entfernt? Und liest du Name und Ort mit nextLine()? Mit next() käme von Grace Hopper nur Grace an." }
      - { wert: 2, meldung: "Steht der Name leer in der Ausgabe? Dann fehlt nach nextInt() ein zusätzliches sc.nextLine(), das den Rest der ersten Zeile entfernt. Fehlt der Ort? Dann liest du den Namen vermutlich mit next(), und das folgende nextLine() liefert nur den leeren Rest der Namenszeile." }
hinweise:
  - Das Alter ist eine Zahl, Name und Ort sind ganze Zeilen.
  - Nach `nextInt()` den Puffer mit einem allein stehenden `sc.nextLine();` leeren, dann zweimal `nextLine()` für Name und Ort.
loesung: |
  **Ansatz:** Zahl mit `nextInt()`, dann Puffer leeren, dann zwei ganze Zeilen mit `nextLine()`.
  ---
  ```java
  int alter = sc.nextInt();
  sc.nextLine();
  String name = sc.nextLine();
  String ort = sc.nextLine();
  System.out.println(name + " (" + alter + ") aus " + ort);
  ```
  ---
  Ohne das Leeren wäre `name` der leere String und `ort` wäre `Grace Hopper`. Mit `next()` statt `nextLine()` käme bei `Grace Hopper` nur `Grace` an.
  ---
  Probe mit `31`, `Grace Hopper`, `New York`: Ausgabe `Grace Hopper (31) aus New York`.
```

```aufgabe
id: ei-zeile-rest
titel: Der Rest der Zeile
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Eingabe (drei Zeilen):

  ```
  7 Zwerge
  hinter den
  Bergen
  ```

  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int n = sc.nextInt();
      String a = sc.nextLine();
      String b = sc.next();
      String c = sc.nextLine();
      String d = sc.nextLine();
      System.out.println(n + "|" + a + "|" + b + "|" + c + "|" + d);
    stdin: "7 Zwerge\nhinter den\nBergen\n"
    loesung: |
      7| Zwerge|hinter| den|Bergen
    fehler:
      - wert: "7|Zwerge|hinter|den|Bergen"
        meldung: '`nextLine()` überspringt keinen Leerraum. Das Leerzeichen vor `Zwerge` und vor `den` gehört jeweils zum gelieferten String.'
      - wert: "7||hinter| den|Bergen"
        meldung: Hier steht nach `nextInt()` noch ` Zwerge` in der Zeile. `nextLine()` liefert diesen Rest, nicht den leeren String.
hinweise:
  - Verfolge den Lesezeiger durch `7␣Zwerge⏎hinter␣den⏎Bergen⏎`.
  - '`next()` liest nur `hinter`. Das folgende `nextLine()` liefert den Rest dieser Zeile.'
loesung: |
  **Ansatz:** Lesezeiger durch `7␣Zwerge⏎hinter␣den⏎Bergen⏎` verfolgen.
  ---
  `nextInt()` liest 7. `nextLine()` liefert den Rest ` Zwerge` (mit Leerzeichen) und springt in Zeile 2.
  ---
  `next()` liest `hinter`. `nextLine()` liefert den Rest ` den` und springt in Zeile 3. Das letzte `nextLine()` liefert `Bergen`.
  ---
  Ausgabe: `7| Zwerge|hinter| den|Bergen`. Die Trennstriche zeigen, wo jeder String beginnt und endet.
```

```reflexion
frage: 'Eine naheliegende Nachfrage im Feedbackgespräch (sie steht so nicht auf den bisherigen Blättern): „Was ist der Puffer des Scanners, und warum liefert nextLine() nach nextInt() einen leeren String?“ Formuliere zuerst laut eine Antwort in drei Sätzen.'
antwort: |
  Der Puffer ist der Zwischenspeicher, in dem der Scanner die eingegebenen Zeichen hält. Jeder Leseaufruf
  entnimmt ab dem Lesezeiger Zeichen, und was nicht entnommen wurde, sieht der nächste Aufruf. `nextInt()`
  entnimmt nur die Ziffern und lässt den Zeilenumbruch der Enter-Taste liegen. `nextLine()` liest bis zum
  nächsten Zeilenumbruch, und der steht sofort an. Darum liefert es die Zeichen davor, also keine. Abhilfe:
  einmal `sc.nextLine();` ohne Speichern aufrufen, damit der Rest der Zeile verschwindet.
```

## Eingaben prüfen mit hasNextInt

```aufgabe
id: ei-pruef-check-nicht
titel: Eine Schleife mit NICHT
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Die Verneinung `!` kennst du aus
  [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht),
  die `while`-Schleife aus [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
teile:
  - typ: ausgabe
    code: |
      int x = 1;
      boolean gross = false;
      while (!gross) {
          x = x * 3;
          gross = x > 20;
      }
      System.out.println(x);
    loesung: |
      27
    fehler:
      - wert: "9"
        meldung: Bei `x = 9` ist `9 > 20` falsch, also bleibt `gross` falsch, und `!gross` ist wahr. Die Schleife läuft noch einmal.
      - wert: "1"
        meldung: '`!gross` ist am Anfang `!false`, also wahr. Die Schleife läuft mindestens einmal.'
hinweise:
  - '`!gross` ist wahr, solange `gross` falsch ist.'
loesung: |
  `x` wird 3, 9, 27. Erst bei 27 ist `27 > 20` wahr, und `gross` wird `true`.
  ---
  Dann ist `!gross` falsch, und die Schleife endet. Ausgabe: `27`.
```

Ein Programm, das bei der Eingabe `sieben` mit einer `InputMismatchException` abstürzt, ist für Menschen
unbrauchbar. Ein gutes Programm prüft die Eingabe zuerst und fragt bei Unsinn einfach noch einmal nach.
Das nennt man **Eingabevalidierung**. Blatt 2 aus dem Wintersemester 2023 verlangt genau das. Dort heißt
es: „Lesen Sie solange neue Werte ein, bis ein korrekter Integer-Wert eingegeben wurde.“ Blatt 5 desselben
Semesters verlangt es für die Methode `readIntValue` ebenso.

Das Werkzeug dafür sind die **has-Methoden** des Scanners. Sie lesen nichts, sondern schauen nur nach.
Stell dir einen Briefkasten mit Sichtfenster vor: `nextInt()` nimmt den nächsten Brief heraus,
`hasNextInt()` schaut nur durch das Fenster, ob der nächste Brief eine Zahl enthält. Der Brief bleibt
drin.

- `sc.hasNextInt()` liefert `true`, wenn das nächste Token eine gültige ganze Zahl ist.
- `sc.hasNextDouble()` liefert `true`, wenn das nächste Token eine Kommazahl oder ganze Zahl ist.
- `sc.hasNext()` liefert `true`, wenn überhaupt noch ein Token kommt.
- `sc.hasNextLine()` liefert `true`, wenn überhaupt noch eine Zeile kommt.

Alle vier liefern einen `boolean` und verschieben den Lesezeiger **nicht**. Ist die Eingabe zu Ende,
liefern sie `false`. Sitzt jemand an der Tastatur, **warten** sie, bis etwas getippt wurde. Sie wissen ja
sonst nicht, was als Nächstes kommt.

:::definition[Eingabevalidierung]
**Eingabevalidierung** heißt, eine Eingabe vor der Verwendung auf ihre Gültigkeit zu prüfen und ungültige
Eingaben abzulehnen, ohne dass das Programm abbricht. Beim Scanner prüft man zuerst mit einer
has-Methode den **Typ** und danach, falls nötig, den **Wertebereich**. Eine abgelehnte Eingabe wird aus
dem Puffer entfernt.
:::

**Beispiel:** Ein Programm will eine Zahl von 1 bis 6. Bei `acht` meldet es „keine Zahl“, bei `9` meldet es
„nicht zwischen 1 und 6“, und bei `4` arbeitet es weiter. **Kein Beispiel:** `int n = sc.nextInt();` gefolgt
von `if (n < 1 || n > 6) System.out.println("Fehler");` ist keine vollständige Validierung. Bei `acht`
stürzt das Programm schon beim Lesen ab, und bei `9` arbeitet es nach der Meldung mit dem falschen Wert
weiter.

```aufgabe
id: ei-pruef-check-schauen
titel: Was macht hasNextInt?
niveau: 1
art: check
angabe: Vorne im Puffer liegt das Token `acht`. Was passiert bei `sc.hasNextInt()`?
teile:
  - typ: auswahl
    optionen: ['Es liefert `false`, und `acht` bleibt im Puffer.', 'Es liefert `false` und entfernt `acht`.', 'Es wirft eine `InputMismatchException`.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die has-Methoden schauen nur durch das Sichtfenster. Sie entnehmen nie etwas.
      - wert: 2
        meldung: Eine Exception wirft nur `nextInt()`. `hasNextInt()` antwortet immer mit `true` oder `false`.
hinweise:
  - Denk an den Briefkasten mit Sichtfenster.
loesung: |
  `acht` ist keine ganze Zahl, also liefert `hasNextInt()` den Wert `false`.
  ---
  Das Token bleibt im Puffer. Wer es loswerden will, muss es mit `sc.next()` entnehmen.
```

### Das Grundmuster: prüfen, sonst wegwerfen

```java
while (!sc.hasNextInt()) {
    System.out.println("Keine ganze Zahl: " + sc.next());
}
int n = sc.nextInt();
```

So liest du das Muster:

1. `sc.hasNextInt()` schaut nach, ob das nächste Token eine ganze Zahl ist.
2. Wenn **nicht**, läuft der Schleifenrumpf. `sc.next()` nimmt das unbrauchbare Token heraus und gibt es
   in der Fehlermeldung gleich mit aus. Danach liegt das nächste Token vorne.
3. Die Schleife prüft erneut. Sie läuft, bis vorne eine ganze Zahl liegt.
4. Erst jetzt ist `sc.nextInt()` sicher. Es kann keine `InputMismatchException` mehr geben.

:::beispiel[Nur die Zahlen zusammenzählen]
```java
Scanner sc = new Scanner(System.in);
int summe = 0;
while (sc.hasNext()) {
    if (sc.hasNextInt()) {
        summe += sc.nextInt();
    } else {
        System.out.println("ignoriert: " + sc.next());
    }
}
System.out.println("Summe: " + summe);
```

Eingabe (zwei Zeilen): `3 drei 4` und `x 5`. Die Token sind `3`, `drei`, `4`, `x`, `5`.

|Durchlauf|`hasNext()`|Token|`hasNextInt()`|Aktion|`summe`|
|---|---|---|---|---|---|
|1|true|`3`|true|lesen|3|
|2|true|`drei`|false|wegwerfen|3|
|3|true|`4`|true|lesen|7|
|4|true|`x`|false|wegwerfen|7|
|5|true|`5`|true|lesen|12|
|6|false|–|–|Ende|12|

„Lesen“ heißt `nextInt()`, „wegwerfen“ heißt `next()`.

Die Ausgabe ist:

```
ignoriert: drei
ignoriert: x
Summe: 12
```

`hasNext()` sorgt dafür, dass die Schleife am Ende der Eingabe aufhört. Beim Tippen an der Tastatur
würde sie weiter auf Eingaben warten.
:::

:::achtung[Das Wegwerfen vergessen: eine Endlosschleife]
```java
while (!sc.hasNextInt()) {
    System.out.println("Bitte eine ganze Zahl!");   // kein sc.next()
}
int n = sc.nextInt();
```

Bei der Eingabe `abc` liefert `hasNextInt()` den Wert `false`, und die Meldung erscheint. Dann prüft die
Schleife wieder. `hasNextInt()` schaut aber nur nach und nimmt nichts heraus. Vorne liegt immer noch
`abc`, also kommt wieder `false`. Die Meldung erscheint endlos, und das Programm reagiert auf keine
weitere Eingabe mehr.

Genau das meint die Zusatzfrage „Warum muss eine ungültige Eingabe aus dem Input-Stream des Scanners
entfernt werden?“. Der Scanner bleibt an dem Token hängen, bis jemand es entnimmt.
:::

:::achtung[if statt while: nur ein zweiter Versuch]
```java
if (!sc.hasNextInt()) {
    System.out.println("Bitte eine ganze Zahl!");
    sc.next();
}
int n = sc.nextInt();
```

Mit der Eingabe `abc 7` klappt das: `abc` wird weggeworfen, dann wird 7 gelesen. Mit `abc xyz 7` stürzt das
Programm aber ab. Das `if` prüft nur **einmal**. Nach dem Wegwerfen von `abc` liegt `xyz` vorne, und
`nextInt()` wirft eine `InputMismatchException`. Wer „so lange, bis“ liest, braucht eine Schleife.
:::

### Typ und Wertebereich zusammen prüfen

Oft reicht „ganze Zahl“ nicht. Beim Ratespiel aus
[8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel) muss die Zahl
zwischen 0 und 120 liegen. Dann gibt es zwei Arten von Fehlern mit je eigener Meldung. Ein
`boolean`-Merker `gueltig` hält fest, ob schon ein guter Wert da ist. (Ein **Merker** ist eine Variable, die
sich nur „ja“ oder „nein“ merkt.)

:::beispiel[Eine Zahl von 0 bis 120]
```java
Scanner sc = new Scanner(System.in);
int x = -1;
boolean gueltig = false;
while (!gueltig) {
    if (sc.hasNextInt()) {
        x = sc.nextInt();
        if (x >= 0 && x <= 120) {
            gueltig = true;
        } else {
            System.out.println(x + " liegt nicht in [0, 120].");
        }
    } else {
        System.out.println(sc.next() + " ist keine ganze Zahl.");
    }
}
System.out.println("Gelesen: " + x);
```

Eingabe: `12abc 130 -1 99`

1. Vorne liegt `12abc`. `hasNextInt()` ist falsch. `sc.next()` entnimmt das Token, Meldung
   `12abc ist keine ganze Zahl.`
2. Vorne liegt `130`. `hasNextInt()` ist wahr, `x = 130`. Die Bereichsprüfung `130 <= 120` ist falsch, Meldung
   `130 liegt nicht in [0, 120].` Die Zahl ist schon entnommen, darum braucht es hier kein `next()`.
3. `-1` ist eine ganze Zahl, aber `-1 >= 0` ist falsch. Meldung `-1 liegt nicht in [0, 120].`
4. `99` ist eine ganze Zahl im Bereich. `gueltig` wird `true`, die Schleife endet.

Ausgabe:

```
12abc ist keine ganze Zahl.
130 liegt nicht in [0, 120].
-1 liegt nicht in [0, 120].
Gelesen: 99
```

Die Variable `x` braucht vor der Schleife einen Startwert (hier `-1`). Sonst meldet der Compiler bei der
letzten Zeile `variable x might not have been initialized`. Er kann nicht erkennen, dass die Schleife `x`
sicher setzt.
:::

:::merke[Rezept: so lange lesen, bis die Eingabe gültig ist]
1. Merker `boolean gueltig = false;` und Ergebnisvariable mit Startwert anlegen.
2. `while (!gueltig)`: Mit `hasNextInt()` den Typ prüfen.
3. Falscher Typ: Meldung ausgeben und das Token mit `sc.next()` (oder die ganze Zeile mit `sc.nextLine()`) entfernen.
4. Richtiger Typ: mit `nextInt()` lesen, dann den Bereich prüfen. Gültig: Merker setzen. Ungültig: Meldung, die Zahl ist schon entnommen.
5. Nach der Schleife ist der Wert garantiert gültig.
:::

Soll eine ungültige **Zeile** als Ganzes abgelehnt werden, wirft man mit `sc.nextLine()` weg statt mit
`sc.next()`. Bei der Eingabe `zwei Euro` gibt es dann eine einzige Fehlermeldung statt zwei. Vorsicht: Es
verschwindet dabei auch alles, was danach noch in derselben Zeile steht.

```aufgabe
id: ei-pruef-gefuehrt
titel: Eine Würfelzahl einlesen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Eingabe: `sechs 0 2.5 7 3 5` in einer Zeile. Was gibt der Code aus? Löse zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int w = 0;
      boolean ok = false;
      while (!ok) {
          if (sc.hasNextInt()) {
              w = sc.nextInt();
              if (w >= 1 && w <= 6) {
                  ok = true;
              } else {
                  System.out.println("Bereich: " + w);
              }
          } else {
              System.out.println("Typ: " + sc.next());
          }
      }
      System.out.println("Wurf " + w);
    stdin: "sechs 0 2.5 7 3 5\n"
    loesung: |
      Typ: sechs
      Bereich: 0
      Typ: 2.5
      Bereich: 7
      Wurf 3
    fehler:
      - wert: "Typ: sechs\nBereich: 0\nBereich: 2.5\nBereich: 7\nWurf 3"
        meldung: '`2.5` ist keine ganze Zahl. `hasNextInt()` liefert dafür `false`, also landet es im `else`-Zweig mit der Meldung `Typ:`.'
      - wert: "Typ: sechs\nBereich: 0\nTyp: 2.5\nBereich: 7\nWurf 5"
        meldung: Die Schleife endet, sobald die erste gültige Zahl gelesen wurde. Das Token `5` wird nie gelesen.
gefuehrt:
  - text: Was liefert `hasNextInt()` für das Token `sechs`?
    teil:
      typ: auswahl
      optionen: ['`false`', '`true`', 'Es wirft eine Exception.']
      richtig: [0]
    erklaerung: '`sechs` ist ein Wort, keine Ziffernfolge. Die has-Methoden werfen nie eine Exception, sie liefern nur `true` oder `false`.'
  - text: Welches Token liegt vorne, nachdem `sc.next()` das Wort `sechs` entnommen hat?
    teil:
      typ: auswahl
      optionen: ['`0`', '`sechs`', '`3`']
      richtig: [0]
    erklaerung: '`next()` hat `sechs` herausgenommen. Jetzt liegt `0` vorne.'
  - text: Wie viele Meldungen (Zeilen mit `Typ:` oder `Bereich:`) erscheinen insgesamt?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '`sechs`, `0`, `2.5` und `7` werden abgelehnt. Bei `3` ist die Eingabe gültig.'
hinweise:
  - Gehe die Token der Reihe nach durch und entscheide jeweils, welcher Zweig läuft.
  - '`2.5` ist für `hasNextInt()` keine ganze Zahl.'
loesung: |
  **Ansatz:** Token für Token entscheiden: falscher Typ, falscher Bereich oder gültig.
  ---
  `sechs`: falscher Typ, `Typ: sechs`. `0`: ganze Zahl, aber nicht in 1 bis 6, `Bereich: 0`.
  ---
  `2.5`: keine ganze Zahl, `Typ: 2.5`. `7`: außerhalb des Bereichs, `Bereich: 7`.
  ---
  `3` ist gültig, die Schleife endet. Ausgabe `Wurf 3`. Das Token `5` bleibt ungelesen.
```

```aufgabe
id: ei-pruef-meldungen
titel: Meldungen bei falschen Eingaben
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eingabe: `elf 4.0 11` in einer Zeile. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      while (!sc.hasNextInt()) {
          System.out.println("Nein: " + sc.next());
      }
      int n = sc.nextInt();
      System.out.println("Ja: " + n);
    stdin: "elf 4.0 11\n"
    loesung: |
      Nein: elf
      Nein: 4.0
      Ja: 11
    fehler:
      - wert: "Nein: elf\nJa: 4"
        meldung: '`4.0` hat einen Punkt und ist darum keine ganze Zahl. `hasNextInt()` liefert `false`.'
hinweise:
  - '`hasNextInt()` ist nur für Ziffernfolgen (mit optionalem Vorzeichen) wahr.'
loesung: |
  `elf` ist keine ganze Zahl: Meldung, `next()` entnimmt es. `4.0` ebenfalls nicht: zweite Meldung.
  ---
  `11` ist eine ganze Zahl. Die Schleife endet, `nextInt()` liest 11. Ausgabe `Ja: 11`.
```

```aufgabe
id: ei-pruef-schaut-nur
titel: Schauen oder nehmen?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Eingabe: `42 Pinguine`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      System.out.println(sc.hasNextInt());
      System.out.println(sc.hasNextInt());
      System.out.println(sc.nextInt());
      System.out.println(sc.hasNextInt());
      System.out.println(sc.hasNext());
    stdin: "42 Pinguine\n"
    loesung: |
      true
      true
      42
      false
      true
    fehler:
      - wert: "true\nfalse\n42\nfalse\ntrue"
        meldung: '`hasNextInt()` nimmt nichts heraus. Ein zweiter Aufruf schaut auf dasselbe Token `42` und liefert wieder `true`.'
      - wert: "true\ntrue\n42\nfalse\nfalse"
        meldung: '`hasNext()` fragt nur, ob überhaupt noch ein Token kommt. `Pinguine` ist ein Token, also `true`.'
hinweise:
  - Nur `nextInt()` verschiebt den Lesezeiger. Die has-Methoden schauen nur.
loesung: |
  Die ersten beiden `hasNextInt()` schauen beide auf `42`: zweimal `true`. Dann entnimmt `nextInt()` die 42.
  ---
  Vorne liegt jetzt `Pinguine`. Das ist keine ganze Zahl (`false`), aber ein Token (`hasNext()` liefert `true`).
```

```aufgabe
id: ei-pruef-trace
titel: Die Validierungsschleife als Tabelle
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Programm liest mit dem Muster aus diesem Abschnitt eine ganze Zahl von 10 bis 99 ein:

  ```java
  int z = 0;
  boolean ok = false;
  while (!ok) {
      if (sc.hasNextInt()) {
          z = sc.nextInt();
          ok = z >= 10 && z <= 99;
      } else {
          sc.next();
      }
  }
  ```

  Eingabe: `x 5 100 -42 37`. Trage für jeden Schleifendurchlauf das betrachtete Token, den Wert von
  `hasNextInt()` (`true` oder `false`) und den Wert von `ok` am Ende des Durchlaufs ein.
teile:
  - typ: trace
    spalten: [Token, hasNextInt, ok]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3, Durchlauf 4, Durchlauf 5]
    loesung: [["x", "false", "false"], ["5", "true", "false"], ["100", "true", "false"], ["-42", "true", "false"], ["37", "true", "true"]]
    fehler:
      - wert: ["x", "false", "false", "5", "true", "false", "100", "true", "false", "-42", "false", "false", "37", "true", "true"]
        meldung: '`-42` ist eine ganze Zahl, das Minuszeichen ist erlaubt. `hasNextInt()` liefert `true`, erst die Bereichsprüfung lehnt sie ab.'
hinweise:
  - Pro Durchlauf wird genau ein Token entnommen, entweder mit `next()` oder mit `nextInt()`.
  - '`ok` wird nur im `if`-Zweig neu berechnet. Im `else`-Zweig bleibt es `false`.'
loesung: |
  **Ansatz:** Für jedes Token erst den Typ, dann den Bereich prüfen.
  ---
  `x`: kein `int`, `next()` entnimmt es, `ok` bleibt `false`. `5`: `int`, aber `5 >= 10` ist falsch.
  ---
  `100`: `int`, aber `100 <= 99` ist falsch. `-42`: `int`, aber negativ, also außerhalb.
  ---
  `37`: `int` im Bereich, `ok` wird `true`, die Schleife endet mit `z = 37`.
```

```aufgabe
id: ei-pruef-zeile-weg
titel: Ganze Zeile wegwerfen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eingabe (drei Zeilen): `drei Stueck`, dann `x 8`, dann `5`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      while (!sc.hasNextInt()) {
          String weg = sc.nextLine();
          System.out.println("Zeile verworfen: " + weg);
      }
      System.out.println("Zahl: " + sc.nextInt());
    stdin: "drei Stueck\nx 8\n5\n"
    loesung: |
      Zeile verworfen: drei Stueck
      Zeile verworfen: x 8
      Zahl: 5
    fehler:
      - wert: "Zeile verworfen: drei Stueck\nZeile verworfen: x 8\nZahl: 8"
        meldung: '`nextLine()` wirft die **ganze** Zeile `x 8` weg, also auch die 8. Danach liegt die 5 vorne.'
      - wert: "Zeile verworfen: drei\nZeile verworfen: Stueck\nZeile verworfen: x\nZahl: 8"
        meldung: Hier wird mit `nextLine()` weggeworfen, nicht mit `next()`. Jeder Aufruf entfernt eine ganze Zeile.
hinweise:
  - Vor jedem Durchlauf schaut `hasNextInt()` auf das erste Token der aktuellen Zeile.
  - '`nextLine()` entfernt alles bis zum Zeilenende, auch eine Zahl, die später in der Zeile steht.'
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob ihr erstes Token eine ganze Zahl ist.
  ---
  Zeile 1 beginnt mit `drei`: `nextLine()` verwirft `drei Stueck`. Zeile 2 beginnt mit `x`: `nextLine()` verwirft `x 8`, die 8 geht mit verloren.
  ---
  Zeile 3 beginnt mit `5`. `hasNextInt()` ist wahr, die Schleife endet, und `nextInt()` liefert 5.
```

```aufgabe
id: ei-pruef-zeilen
titel: Warum hängt das Programm?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Studentin schreibt diese Methode für Blatt 2. Bei der Eingabe `abc` gibt das Programm endlos
  `Ungueltig!` aus. Markiere die Zeile, in der die eigentliche Ursache liegt (dort fehlt etwas).
teile:
  - typ: zeilen
    code: |
      public static int liesZahl(Scanner sc) {
          System.out.println("Zahl eingeben:");
          while (!sc.hasNextInt()) {
              System.out.println("Ungueltig!");
          }
          return sc.nextInt();
      }
    loesung: [4]
    fehler:
      - wert: [3]
        meldung: Die Bedingung ist richtig. Das Problem ist, dass sie sich nie ändert, weil im Rumpf nichts aus dem Puffer entnommen wird.
      - wert: [6]
        meldung: Zeile 6 wird nie erreicht. Die Schleife davor endet nicht.
hinweise:
  - Was ändert sich zwischen zwei Prüfungen von `hasNextInt()`?
  - Im Rumpf der Schleife muss das ungültige Token entnommen werden.
loesung: |
  **Ansatz:** Bei einer Endlosschleife suchen, warum sich die Bedingung nie ändert.
  ---
  `hasNextInt()` schaut nur auf das Token `abc`, ohne es zu entnehmen. Im Rumpf (Zeile 4) passiert nur eine Ausgabe.
  ---
  Bei der nächsten Prüfung liegt wieder `abc` vorne. Lösung: in Zeile 4 zusätzlich `sc.next();` aufrufen, also zum Beispiel `System.out.println("Ungueltig: " + sc.next());`.
```

```aufgabe
id: ei-pruef-rf
titel: Aussagen zu den has-Methoden
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`hasNextInt()` entnimmt das nächste Token, wenn es eine ganze Zahl ist.'
        richtig: false
        erklaerung: Die has-Methoden entnehmen nie etwas. Gelesen wird erst mit `nextInt()`.
      - text: Nach `while (!sc.hasNextInt()) { sc.next(); }` kann `sc.nextInt()` keine `InputMismatchException` mehr werfen.
        richtig: true
        erklaerung: Die Schleife endet erst, wenn vorne eine ganze Zahl liegt.
      - text: '`hasNext()` liefert `false`, wenn das nächste Token keine Zahl ist.'
        richtig: false
        erklaerung: '`hasNext()` fragt nur, ob überhaupt noch ein Token kommt. Der Typ spielt keine Rolle.'
      - text: Ist die Eingabe zu Ende, liefert `hasNextInt()` den Wert `false`.
        richtig: true
        erklaerung: Ohne Token gibt es auch keine ganze Zahl. Beim Tippen an der Tastatur wartet `hasNextInt()` dagegen auf die nächste Eingabe.
    fehler:
      - wert: [r, r, f, r]
        meldung: Schauen und Nehmen sind getrennt. `hasNextInt()` schaut nur, `nextInt()` nimmt.
      - wert: [f, r, r, r]
        meldung: '`hasNext()` prüft keinen Typ. Jedes Wort ist ein Token.'
hinweise:
  - Die has-Methoden liefern `boolean` und lassen den Lesezeiger stehen.
  - '`hasNext()` ist die allgemeinste Prüfung: Kommt noch irgendein Token?'
loesung: |
  **Ansatz:** Für jede Aussage klären, ob die Methode schaut oder nimmt und was sie prüft.
  ---
  Aussage 1 ist falsch: `hasNextInt()` schaut nur. Aussage 2 ist richtig: Nach der Schleife liegt sicher eine ganze Zahl vorne.
  ---
  Aussage 3 ist falsch: `hasNext()` prüft keinen Typ. Aussage 4 ist richtig: Ohne Token gibt es keine Zahl.
```

```aufgabe
id: ei-pruef-noten
titel: Gültige Noten mitteln
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Schreibe `main`. Die Eingabe enthält beliebig viele Token. Gültig sind nur ganze Zahlen von 1 bis 5
  (österreichische Schulnoten). Alles andere wird ignoriert, auch Zahlen außerhalb von 1 bis 5. Lies bis
  zum Ende der Eingabe und gib dann zwei Zeilen aus:

  ```
  Gueltig: <Anzahl der gültigen Noten>
  Schnitt: <Durchschnitt als double>
  ```

  Gibt es keine gültige Note, gib als zweite Zeile `Schnitt: -` aus.

  Beispiel: Eingabe `2 sehr gut 1 7 3.0 3` ergibt `Gueltig: 3` und `Schnitt: 2.0`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Noten {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Noten {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int anzahl = 0;
              int summe = 0;
              while (sc.hasNext()) {
                  if (sc.hasNextInt()) {
                      int note = sc.nextInt();
                      if (note >= 1 && note <= 5) {
                          anzahl++;
                          summe += note;
                      }
                  } else {
                      sc.next();
                  }
              }
              System.out.println("Gueltig: " + anzahl);
              if (anzahl > 0) {
                  System.out.println("Schnitt: " + (double) summe / anzahl);
              } else {
                  System.out.println("Schnitt: -");
              }
          }
      }
    tests:
      - { stdin: "2 sehr gut 1 7 3.0 3\n", stdout: "Gueltig: 3\nSchnitt: 2.0\n", beschreibung: "2 sehr gut 1 7 3.0 3" }
      - { stdin: "1 2\n", stdout: "Gueltig: 2\nSchnitt: 1.5\n", beschreibung: "Schnitt mit Nachkommastelle" }
      - { stdin: "null 0 6 -1\n", stdout: "Gueltig: 0\nSchnitt: -\n", beschreibung: "keine gültige Note" }
      - { stdin: "5\n5\nfuenf\n4\n", stdout: "Gueltig: 3\nSchnitt: 4.666666666666667\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "1 und 2 ergeben im Schnitt 1.5. Teilst du zwei int-Werte? Dann fällt die Nachkommastelle weg. Caste vorher auf double." }
      - { wert: 3, meldung: "Ohne gültige Note darfst du nicht durch 0 teilen. Prüfe zuerst, ob die Anzahl größer als 0 ist." }
hinweise:
  - Eine Schleife `while (sc.hasNext())` läuft bis zum Ende der Eingabe. Darin entscheidet `hasNextInt()`, ob mit `nextInt()` gelesen oder mit `next()` weggeworfen wird.
  - 'Für den Schnitt mit Kommastellen: `(double) summe / anzahl`. Vorher prüfen, ob `anzahl > 0` ist.'
loesung: |
  **Ansatz:** Alle Token durchgehen wie im Beispiel „Nur die Zahlen zusammenzählen“, zusätzlich mit Bereichsprüfung und einem Zähler.
  ---
  ```java
  while (sc.hasNext()) {
      if (sc.hasNextInt()) {
          int note = sc.nextInt();
          if (note >= 1 && note <= 5) {
              anzahl++;
              summe += note;
          }
      } else {
          sc.next();
      }
  }
  ```
  ---
  Danach: `Gueltig: ` mit der Anzahl, und nur bei `anzahl > 0` der Schnitt `(double) summe / anzahl`. Ohne Cast ergäbe `3 / 2` den Wert 1 statt 1.5. Ohne die Prüfung wäre `0 / 0` bei `int` eine `ArithmeticException`. Mit dem Cast käme statt einer Exception `NaN` heraus (englisch „not a number“, keine Zahl), und auch das ist keine gültige Ausgabe.
  ---
  Probe mit `2 sehr gut 1 7 3.0 3`: gültig sind 2, 1 und 3. `sehr`, `gut` und `3.0` sind keine ganzen Zahlen, 7 liegt außerhalb. Schnitt 6 / 3 = 2.0.
```

```reflexion
frage: 'Zusatzfrage aus Blatt 2: „Warum muss eine ungültige Eingabe aus dem Input-Stream des Scanners entfernt werden?“ Antworte so, als würdest du es im Feedbackgespräch erklären.'
antwort: |
  Die Prüfmethoden wie `hasNextInt()` schauen nur auf das nächste Token und nehmen es nicht heraus. Auch
  ein gescheitertes `nextInt()` lässt das Token im Puffer liegen. Solange niemand das ungültige Token
  entnimmt, sieht jede weitere Prüfung wieder genau dieses Token. Eine Schleife „solange keine ganze Zahl,
  melde einen Fehler“ läuft dann endlos, oder das nächste `nextInt()` stürzt ab. Darum muss man das Token
  mit `sc.next()` oder die Zeile mit `sc.nextLine()` entnehmen. Erst dann kommt die nächste Eingabe an die
  Reihe.
```

## Eingabemethoden und der Taschenrechner

```aufgabe
id: ei-meth-check-kopf
titel: Welcher Methodenkopf passt?
niveau: 1
art: check
angabe: |
  „Die Methode bekommt einen Text und liefert dessen erstes Zeichen zurück.“ Welcher Kopf passt? (Wiederholung:
  [6.7 Methoden nach Vorgabe schreiben](/lernen/ep1/methoden/methoden-nach-vorgabe-schreiben))
teile:
  - typ: auswahl
    optionen: ['`public static char erstes(String text)`', '`public static void erstes(String text)`', '`public static String erstes(char text)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '„Liefert zurück“ verlangt einen Rückgabetyp. `void` liefert nichts.'
      - wert: 2
        meldung: Hinein geht ein Text, also ein `String`. Heraus kommt ein Zeichen, also ein `char`. Hier ist es vertauscht.
hinweise:
  - Was geht hinein (Parameter), was kommt heraus (Rückgabetyp)?
loesung: |
  Hinein geht ein `String`, heraus kommt ein einzelnes Zeichen, also `char`.
  ---
  Passend ist `public static char erstes(String text)`.
```

Auf Blatt 2 aus dem Wintersemester 2023 war der Taschenrechner in **Methoden** zu zerlegen. Eine Methode liest
einen Operanden, eine den Operator und eine die Antwort auf die Frage „weiter oder beenden?“. Die Angabe sagt dazu: „Überlegen Sie
sich, was der Methode übergeben werden muss und welchen Rückgabetyp diese haben muss.“ Genau diese
Überlegung machen wir jetzt.

**Was geht hinein?** Die Methode muss lesen können, also braucht sie einen Scanner. Sie bekommt ihn als
**Parameter**: `int readOperand(Scanner sc)`. In `main` wird **ein** Scanner erzeugt und an jede
Eingabemethode übergeben. Das ist kein Zufall. Ein zweiter Scanner auf `System.in` würde den Puffer des
ersten nicht kennen (siehe die Reflexion am Ende von [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm)).

**Was kommt heraus?** Heraus kommt der gelesene und **schon geprüfte** Wert. Sein Typ passt zu dem, was
`main` damit macht: ein `int` für einen Operanden, ein `char` für einen Operator und ein `boolean` für die
Frage „noch eine Rechnung?“.
Damit hat `main` nichts mehr mit falschen Eingaben zu tun. Die ganze Validierung steckt in den Methoden.

:::beispiel[Eine Methode wie readIntValue]
Blatt 5 aus dem Wintersemester 2023 verlangt eine Methode `int readIntValue(Scanner sc)`. Sie liest so
lange, bis eine ganze Zahl kommt, meldet jede falsche Eingabe und liefert die Zahl. Ob die Zahl im
erlaubten Bereich liegt, prüft laut Angabe `main`, indem es `readIntValue` wiederholt aufruft. Unser
Beispiel verwendet dasselbe Muster für eine Lautstärke von 1 bis 30.

```java
import java.util.Scanner;

public class Lautstaerke {
    public static int readIntValue(Scanner sc) {
        while (!sc.hasNextInt()) {
            System.out.println("Keine ganze Zahl: " + sc.next());
        }
        return sc.nextInt();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Lautstaerke (1-30)?");
        int wert = readIntValue(sc);
        while (wert < 1 || wert > 30) {
            System.out.println("Nicht im Bereich 1 bis 30.");
            wert = readIntValue(sc);
        }
        System.out.println("Lautstaerke: " + wert);
    }
}
```

Eingabe: `zehn 0 15`

1. `main` erzeugt den Scanner und übergibt ihn an `readIntValue`.
2. In `readIntValue` ist `zehn` keine ganze Zahl. Meldung `Keine ganze Zahl: zehn`, das Token ist weg.
3. Vorne liegt `0`. Die Schleife endet, `readIntValue` liefert 0.
4. In `main` ist `0 < 1` wahr. Meldung `Nicht im Bereich 1 bis 30.`, dann ein neuer Aufruf. Er liefert 15.
5. `15` liegt im Bereich. Ausgabe `Lautstaerke: 15`.

```
Lautstaerke (1-30)?
Keine ganze Zahl: zehn
Nicht im Bereich 1 bis 30.
Lautstaerke: 15
```

Die Methode arbeitet mit **demselben** Scanner wie `main`. Darum sieht der zweite Aufruf genau dort weiter,
wo der erste aufgehört hat.
:::

### Genau ein Zeichen einlesen

Beim Operator verlangt Blatt 2 (Wintersemester 2023) mehr. Dort steht: „Auch ein korrektes Zeichen (Operator)
gefolgt von mehreren falschen/korrekten Zeichen soll als falsche Eingabe interpretiert werden.“ Die Eingabe
`+-` ist also falsch, obwohl sie mit `+` beginnt. Da es kein
`nextChar()` gibt, liest man die **ganze Zeile** mit `nextLine()` und prüft zwei Dinge:

1. Die Zeile hat genau ein Zeichen: `zeile.length() == 1`.
2. Dieses Zeichen ist erlaubt. Kurz geht das mit `"+-*/%".indexOf(zeile.charAt(0)) >= 0`. `indexOf`
   liefert die Position des Zeichens im String `"+-*/%"`, oder -1, wenn es nicht vorkommt.

Die Reihenfolge der Prüfungen zählt. Bei einer leeren Zeile gibt es kein Zeichen an Position 0, und
`charAt(0)` würde eine `StringIndexOutOfBoundsException` werfen. Darum steht die Längenprüfung zuerst. `||` und `&&` werten
von links aus und hören auf, sobald das Ergebnis feststeht. Das ist die Kurzschlussauswertung aus
[3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).

:::beispiel[Den Operator prüfen]
```java
public static char readOperator(Scanner sc) {
    System.out.println("Operator (+, -, *, / oder %)?");
    String zeile = sc.nextLine();
    while (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {
        System.out.println("Ungueltig: [" + zeile + "]");
        zeile = sc.nextLine();
    }
    return zeile.charAt(0);
}
```

Eingabe (drei Zeilen): `plus`, `+-`, `*`

1. `zeile = "plus"`. Die Länge ist 4, also ist `zeile.length() != 1` wahr. Wegen `||` prüft Java den Rest
   gar nicht mehr. Meldung `Ungueltig: [plus]`, nächste Zeile lesen.
2. `zeile = "+-"`. Länge 2, wieder ungültig. Meldung `Ungueltig: [+-]`.
3. `zeile = "*"`. Länge 1, also ist der linke Teil falsch, und Java prüft den rechten. `indexOf('*')` ist 2,
   und `2 < 0` ist falsch. Beide Teile sind falsch, die Schleife endet.
4. Die Methode liefert das Zeichen `'*'`.

Die eckigen Klammern in der Meldung zeigen, was genau gelesen wurde, auch Leerzeichen oder eine leere
Zeile. Das hilft beim Testen sehr.
:::

```aufgabe
id: ei-meth-check-laenge
titel: Warum zuerst die Länge?
niveau: 1
art: check
angabe: |
  In `zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0` ist `zeile` der leere String. Was passiert?
teile:
  - typ: auswahl
    optionen: ['Die Bedingung ist wahr, `charAt(0)` wird nicht aufgerufen.', 'Es kommt eine `StringIndexOutOfBoundsException`.', 'Die Bedingung ist falsch.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die linke Seite `0 != 1` ist schon wahr. Bei `||` steht das Ergebnis damit fest, und die rechte Seite wird nicht ausgewertet.
      - wert: 2
        meldung: Eine leere Zeile hat die Länge 0, und `0 != 1` ist wahr. Wahr oder irgendwas ist wahr.
hinweise:
  - Bei `||` reicht eine wahre linke Seite für das Ergebnis.
loesung: |
  `"".length()` ist 0, und `0 != 1` ist wahr.
  ---
  Wegen der Kurzschlussauswertung wird `charAt(0)` gar nicht aufgerufen. Die Bedingung ist wahr, die leere Zeile gilt als ungültig.
```

:::achtung[Operanden mit nextInt, Operator mit nextLine]
Liest `readOperand` die Zahl mit `nextInt()` und `readOperator` danach die Zeile mit `nextLine()`, schlägt
die nextLine-Falle zu. Sie ist in [8.3 Ganze Zeilen und die nextLine-Falle](/lernen/ep1/eingabe/ganze-zeilen-und-die-nextline-falle) erklärt. Bei der Eingabe
`14⏎5⏎+⏎` liefert der erste `nextLine()`-Aufruf in `readOperator` den leeren Rest der Zeile `5`. Die
Ausgabe enthält dann eine rätselhafte Meldung, obwohl alles richtig getippt wurde:

```
Ungueltig: []
```

Abhilfe: `readOperand` räumt hinter sich auf. Nach dem Lesen der Zahl wirft es den Rest der Zeile weg:

```java
public static int readOperand(Scanner sc) {
    while (!sc.hasNextInt()) {
        System.out.println("Keine ganze Zahl: " + sc.nextLine());
    }
    int zahl = sc.nextInt();
    sc.nextLine();          // Rest der Zeile entfernen
    return zahl;
}
```

Hier wird auch die ungültige Eingabe zeilenweise mit `nextLine()` entfernt. So bleibt jede Methode bei
„eine Eingabe pro Zeile“, und die nächste Methode beginnt immer am Anfang einer neuen Zeile.
:::

:::achtung[Einen neuen Scanner in jeder Methode erzeugen]
Ein naheliegender, aber falscher Ansatz sieht so aus:

```java
public static int getNumber() {
    Scanner scanner = new Scanner(System.in);   // in jeder Methode neu
    return scanner.nextInt();
}
```

Ruft `main` die Methode zweimal auf und kommt die Eingabe `3⏎4⏎` auf einmal an, bricht der zweite Aufruf mit
`NoSuchElementException` ab. Der erste Scanner hat beide Zeilen in seinen Puffer geholt, aber nur die 3
geliefert. Die 4 steckt in seinem Puffer, und der zweite Scanner sieht sie nie. Beim langsamen Tippen fällt
das nicht auf, bei automatischen Tests sofort. Richtig ist der Scanner als Parameter, wie bei `readIntValue`.
:::

```aufgabe
id: ei-meth-check-scanner
titel: Wie viele Scanner?
niveau: 1
art: check
angabe: Ein Programm hat `main` und drei Eingabemethoden. Wie viele Scanner auf `System.in` sollte es erzeugen?
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "4"
        meldung: Jeder weitere Scanner kennt den Puffer der anderen nicht. Eingaben können verloren gehen.
      - wert: "3"
        meldung: Auch die Eingabemethoden brauchen keinen eigenen Scanner. Sie bekommen den aus `main` als Parameter.
hinweise:
  - Ein zweiter Scanner sieht nicht, was der erste schon in seinen Puffer geholt hat.
loesung: |
  Genau einen, erzeugt in `main`.
  ---
  Jede Eingabemethode bekommt ihn als Parameter, zum Beispiel `readOperand(sc)`.
```

:::merke[Rezept: eine Eingabemethode schreiben]
1. Kopf: Scanner als Parameter, Rückgabetyp = Typ des fertigen Werts (`int`, `char`, `boolean`).
2. Lesen, prüfen, bei Fehler melden und das Falsche entfernen, so lange, bis der Wert gültig ist.
3. Den gültigen Wert mit `return` zurückgeben.
4. Eine Eingabe pro Zeile: Nach `nextInt()` den Rest der Zeile mit `sc.nextLine()` entfernen, wenn später `nextLine()` folgt.
:::

### Der Taschenrechner aus Blatt 2

Mit drei Eingabemethoden wird `main` kurz. Die Rechnung selbst wählt mit `switch` (aus
[3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough)) den
Operator aus. Für `/` verlangt das Blatt ein Ergebnis mit Kommastellen, also `(double) a / b`. Für `%`
und die übrigen Operatoren bleibt es bei `int`. Ist der Divisor (die Zahl, durch die geteilt wird) 0,
melden wir das, statt abzustürzen. Für die Wiederholung passt eine `do-while`-Schleife aus
[4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife),
denn mindestens eine Rechnung findet immer statt.

```java
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    boolean weiter;
    do {
        int a = readOperand(sc);
        int b = readOperand(sc);
        char op = readOperator(sc);
        if ((op == '/' || op == '%') && b == 0) {
            System.out.println("Division durch 0 ist nicht erlaubt.");
        } else if (op == '/') {
            System.out.println(a + " / " + b + " = " + (double) a / b);
        } else {
            int erg;
            switch (op) {
                case '+': erg = a + b; break;
                case '-': erg = a - b; break;
                case '*': erg = a * b; break;
                default:  erg = a % b;
            }
            System.out.println(a + " " + op + " " + b + " = " + erg);
        }
        weiter = readContinue(sc);
    } while (weiter);
    System.out.println("Rechnung beendet!");
}
```

Die Methode `readContinue` liest wie `readOperator` eine Zeile und akzeptiert genau `q`, `Q`, `c` oder `C`.
Sie liefert `true` für `c` und `C`, also „weiter“, und `false` für `q` und `Q`. Du schreibst sie selbst in
einer Aufgabe dieses Abschnitts.

```aufgabe
id: ei-meth-gefuehrt
titel: Eine Runde Taschenrechner
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Die Methoden `readOperand` und `readOperator` sind die aus diesem Abschnitt. Eingabe (fünf Zeilen):
  `7`, `x`, `2`, `/ `, `/`. Beachte: In der vierten Zeile steht nach dem `/` noch ein Leerzeichen.
  Was gibt das Programm aus? Löse zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Rechner {
          public static int readOperand(Scanner sc) {
              while (!sc.hasNextInt()) {
                  System.out.println("Keine ganze Zahl: " + sc.nextLine());
              }
              int zahl = sc.nextInt();
              sc.nextLine();
              return zahl;
          }

          public static char readOperator(Scanner sc) {
              String zeile = sc.nextLine();
              while (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {
                  System.out.println("Ungueltig: [" + zeile + "]");
                  zeile = sc.nextLine();
              }
              return zeile.charAt(0);
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int a = readOperand(sc);
              int b = readOperand(sc);
              char op = readOperator(sc);
              if (op == '/') {
                  System.out.println(a + " / " + b + " = " + (double) a / b);
              } else {
                  System.out.println("anderer Operator");
              }
          }
      }
    stdin: "7\nx\n2\n/ \n/\n"
    loesung: |
      Keine ganze Zahl: x
      Ungueltig: [/ ]
      7 / 2 = 3.5
    fehler:
      - wert: "Keine ganze Zahl: x\n7 / 2 = 3.5"
        meldung: Die Zeile `/ ` hat zwei Zeichen, den Schrägstrich und ein Leerzeichen. `nextLine()` liefert beide, und die Länge ist 2.
      - wert: "Keine ganze Zahl: x\nUngueltig: [/ ]\n7 / 2 = 3"
        meldung: '`(double) a / b` rechnet mit Kommastellen. 7.0 / 2 ist 3.5.'
gefuehrt:
  - text: Welchen Wert liefert der erste Aufruf `readOperand(sc)`?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: Die erste Zeile ist `7`, eine ganze Zahl. Danach entfernt `sc.nextLine()` den Zeilenumbruch.
  - text: Wie viele Meldungen gibt der zweite Aufruf `readOperand(sc)` aus, bevor er eine Zahl liefert?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Die Zeile `x` ist keine Zahl und wird mit einer Meldung verworfen. Danach kommt `2`.
  - text: Welche Länge hat der String, den `readOperator` als erstes liest?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Die Zeile `/ ` besteht aus dem Schrägstrich und einem Leerzeichen.
  - text: Welches Zeichen liefert `readOperator` schließlich?
    teil:
      typ: auswahl
      optionen: ["`'/'`", "`' '`", "`'x'`"]
      richtig: [0]
    erklaerung: Die fünfte Zeile ist genau `/`. Sie hat Länge 1, und `/` ist erlaubt.
hinweise:
  - Jede Methode verarbeitet ganze Zeilen. Gehe die fünf Zeilen der Reihe nach durch.
  - Das Leerzeichen in der vierten Zeile zählt bei `length()` mit.
loesung: |
  **Ansatz:** Zeile für Zeile verfolgen, welche Methode sie liest und ob sie gültig ist.
  ---
  `readOperand` liest `7`. Der zweite Aufruf verwirft die Zeile `x` (Meldung `Keine ganze Zahl: x`) und liest dann `2`.
  ---
  `readOperator` liest `/ ` mit Länge 2: Meldung `Ungueltig: [/ ]`. Dann liest es `/` und liefert `'/'`.
  ---
  `(double) 7 / 2 = 3.5`. Letzte Zeile: `7 / 2 = 3.5`.
```

```aufgabe
id: ei-meth-operator-ausgabe
titel: Welche Zeile wird akzeptiert?
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Methode `readOperator` ist die aus dem Beispiel „Den Operator prüfen“, ohne die Eingabeaufforderung.
  Eingabe (vier Zeilen): `x`, eine leere Zeile, `%%`, `-`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Op {
          public static char readOperator(Scanner sc) {
              String zeile = sc.nextLine();
              while (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {
                  System.out.println("Ungueltig: [" + zeile + "]");
                  zeile = sc.nextLine();
              }
              return zeile.charAt(0);
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              char op = readOperator(sc);
              System.out.println("Operator " + op);
          }
      }
    stdin: "x\n\n%%\n-\n"
    loesung: |
      Ungueltig: [x]
      Ungueltig: []
      Ungueltig: [%%]
      Operator -
    fehler:
      - wert: "Ungueltig: [x]\nUngueltig: [%%]\nOperator -"
        meldung: Auch die leere Zeile wird gelesen. `nextLine()` liefert dafür den leeren String, seine Länge ist 0, also ist er ungültig.
hinweise:
  - Jede Zeile wird mit `nextLine()` gelesen, auch die leere.
loesung: |
  `x` hat Länge 1, ist aber kein Operator. Die leere Zeile hat Länge 0. `%%` hat Länge 2. Alle drei werden gemeldet.
  ---
  `-` hat Länge 1 und ist erlaubt. Ausgabe `Operator -`. Bei der leeren Zeile verhindert die Kurzschlussauswertung, dass `charAt(0)` aufgerufen wird.
```

```aufgabe
id: ei-meth-kopf-waehlen
titel: Kopf für die Weiter-Frage
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine Methode soll `q`, `Q`, `c` oder `C` einlesen, falsche Eingaben ablehnen und `main` mitteilen, ob eine
  weitere Rechnung folgen soll. Welcher Kopf passt am besten?
teile:
  - typ: auswahl
    optionen: ['`public static boolean readContinue(Scanner sc)`', '`public static void readContinue(Scanner sc)`', '`public static boolean readContinue()`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`main` muss die Antwort erfahren. Eine `void`-Methode kann nichts zurückgeben.'
      - wert: 2
        meldung: Ohne Parameter müsste die Methode einen eigenen Scanner erzeugen. Ein zweiter Scanner auf `System.in` verliert aber Eingaben aus dem Puffer des ersten.
hinweise:
  - Was braucht die Methode zum Lesen, und welche Art von Antwort braucht `main`?
loesung: |
  Zum Lesen braucht sie den gemeinsamen Scanner als Parameter.
  ---
  Die Antwort ist ja oder nein, also `boolean`: `public static boolean readContinue(Scanner sc)`.
```

```aufgabe
id: ei-meth-readint
titel: readIntValue implementieren
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 4 (`readIntValue`, nachgebaut)
angabe: |
  Implementiere `int readIntValue(Scanner sc)`. Die Methode liest mit `sc` so lange, bis eine ganze Zahl
  eingegeben wurde, und liefert diese Zahl. Jedes Token, das keine ganze Zahl ist, wird entfernt, und
  dazu wird eine Meldung ausgegeben (Text frei wählbar). Der Bereich spielt hier keine Rolle.
  Vorbedingung: `sc != null`, und irgendwann kommt eine ganze Zahl.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Eingabe {
          public static int readIntValue(Scanner sc) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              System.out.println(readIntValue(sc));
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Eingabe {
          public static int readIntValue(Scanner sc) {
              while (!sc.hasNextInt()) {
                  System.out.println("Keine ganze Zahl: " + sc.next());
              }
              return sc.nextInt();
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              System.out.println(readIntValue(sc));
          }
      }
    tests:
      - { aufruf: "readIntValue(new Scanner(System.in))", stdin: "17\n", erwartet: "17", beschreibung: "gleich eine Zahl: 17" }
      - { aufruf: "readIntValue(new Scanner(System.in))", stdin: "abc 2.5 -8\n", erwartet: "-8", beschreibung: "abc 2.5 -8" }
      - { aufruf: "readIntValue(new Scanner(System.in))", stdin: "zehn\nelf\n\n12\n", erwartet: "12", beschreibung: "Wörter in mehreren Zeilen, dann 12" }
      - { aufruf: "readIntValue(new Scanner(System.in))", stdin: "x 0 5\n", erwartet: "0", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bleibt deine Methode bei abc hängen? Das ungültige Token muss mit sc.next() entfernt werden, sonst prüft hasNextInt() immer wieder dasselbe." }
hinweise:
  - Das Grundmuster „prüfen, sonst wegwerfen“ aus [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint) passt genau. Lege keinen eigenen Scanner an, sondern verwende den Parameter `sc`.
  - '`while (!sc.hasNextInt()) { ... sc.next() ... }` und danach `return sc.nextInt();`.'
loesung: |
  **Ansatz:** So lange prüfen und wegwerfen, bis vorne eine ganze Zahl liegt, dann lesen und zurückgeben.
  ---
  ```java
  public static int readIntValue(Scanner sc) {
      while (!sc.hasNextInt()) {
          System.out.println("Keine ganze Zahl: " + sc.next());
      }
      return sc.nextInt();
  }
  ```
  ---
  `sc.next()` in der Meldung entfernt das falsche Token und zeigt es gleichzeitig an. Nach der Schleife ist `nextInt()` sicher.
  ---
  Probe mit `abc 2.5 -8`: `abc` und `2.5` werden gemeldet und entfernt, `-8` wird geliefert. Das Minuszeichen ist erlaubt.
```

```aufgabe
id: ei-meth-readoperator
titel: Den Operator einlesen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 4 (zweite Methode, nachgebaut)
angabe: |
  Implementiere `char readOperator(Scanner sc)`. Die Methode liest **zeilenweise**. Gültig ist eine Zeile,
  die aus genau einem der Zeichen `+`, `-`, `*`, `/` besteht (in dieser Aufgabe ohne `%`). Jede ungültige
  Zeile wird mit einer Meldung abgelehnt (Text frei wählbar), dann wird die nächste Zeile gelesen. Die
  Methode liefert das gültige Zeichen.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Operator {
          public static char readOperator(Scanner sc) {
              return ' '; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Operator {
          public static char readOperator(Scanner sc) {
              String zeile = sc.nextLine();
              while (zeile.length() != 1 || "+-*/".indexOf(zeile.charAt(0)) < 0) {
                  System.out.println("Ungueltiger Operator: [" + zeile + "]");
                  zeile = sc.nextLine();
              }
              return zeile.charAt(0);
          }
      }
    tests:
      - { aufruf: "readOperator(new Scanner(System.in))", stdin: "*\n", erwartet: "'*'", beschreibung: "gleich gültig: *" }
      - { aufruf: "readOperator(new Scanner(System.in))", stdin: "plus\n+-\n*\n", erwartet: "'*'", beschreibung: "plus, +-, dann *" }
      - { aufruf: "readOperator(new Scanner(System.in))", stdin: "\n%\n/\n", erwartet: "'/'", beschreibung: "leere Zeile und % sind ungültig" }
      - { aufruf: "readOperator(new Scanner(System.in))", stdin: " -\n- \n/\n", erwartet: "'/'", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Wird +- als + akzeptiert? Prüfe zuerst, ob die Zeile genau ein Zeichen lang ist." }
      - { wert: 3, meldung: "Stürzt die Methode bei der leeren Zeile ab? charAt(0) gibt es bei Länge 0 nicht. Prüfe die Länge zuerst und nutze die Kurzschlussauswertung von ||." }
hinweise:
  - Lies mit `sc.nextLine()`. Gültig ist die Zeile nur, wenn `zeile.length() == 1` ist und das Zeichen eines von `+ - * /` ist.
  - 'Schreibe die Bedingung für „ungültig“ so: `zeile.length() != 1 || "+-*/".indexOf(zeile.charAt(0)) < 0`. Durch `||` wird `charAt(0)` bei einer leeren Zeile nie aufgerufen.'
loesung: |
  **Ansatz:** Zeilenweise lesen, weil auch „gültiges Zeichen plus Rest“ abgelehnt werden muss.
  ---
  ```java
  String zeile = sc.nextLine();
  while (zeile.length() != 1 || "+-*/".indexOf(zeile.charAt(0)) < 0) {
      System.out.println("Ungueltiger Operator: [" + zeile + "]");
      zeile = sc.nextLine();
  }
  return zeile.charAt(0);
  ```
  ---
  Statt `indexOf` geht auch `c != '+' && c != '-' && c != '*' && c != '/'` mit `char c = zeile.charAt(0);`. Dann muss die Längenprüfung aber vorher in einem eigenen `if` stehen.
  ---
  Probe: `plus` (Länge 4) und `+-` (Länge 2) werden abgelehnt, `*` wird geliefert. Eine leere Zeile scheitert schon an `length() != 1`.
```

```aufgabe
id: ei-meth-readcontinue
titel: Weiter oder beenden?
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 4 (dritte Methode, nachgebaut)
angabe: |
  Implementiere `boolean readContinue(Scanner sc)`. Die Methode liest zeilenweise, bis eine Zeile genau
  `q`, `Q`, `c` oder `C` ist. Jede andere Zeile wird mit einer Meldung abgelehnt. Bei `c` oder `C` liefert
  die Methode `true` (eine weitere Rechnung), bei `q` oder `Q` liefert sie `false`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Weiter {
          public static boolean readContinue(Scanner sc) {
              return false; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Weiter {
          public static boolean readContinue(Scanner sc) {
              String zeile = sc.nextLine();
              while (!(zeile.equals("q") || zeile.equals("Q") || zeile.equals("c") || zeile.equals("C"))) {
                  System.out.println("Bitte q/Q oder c/C eingeben.");
                  zeile = sc.nextLine();
              }
              return zeile.equals("c") || zeile.equals("C");
          }
      }
    tests:
      - { aufruf: "readContinue(new Scanner(System.in))", stdin: "c\n", erwartet: "true", beschreibung: "c heißt weiter" }
      - { aufruf: "readContinue(new Scanner(System.in))", stdin: "Q\n", erwartet: "false", beschreibung: "Q heißt beenden" }
      - { aufruf: "readContinue(new Scanner(System.in))", stdin: "ja\ncc\nC\n", erwartet: "true", beschreibung: "ja und cc sind ungültig, dann C" }
      - { aufruf: "readContinue(new Scanner(System.in))", stdin: "\nquit\nq\n", erwartet: "false", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Wird cc als c akzeptiert? Vergleiche die ganze Zeile mit equals, nicht nur das erste Zeichen." }
hinweise:
  - Vergleiche die ganze Zeile mit `equals`, zum Beispiel `zeile.equals("q")`. Dann sind `cc` und `quit` automatisch ungültig.
  - 'Die Schleife läuft, solange die Zeile **keiner** der vier Texte ist: `!(zeile.equals("q") || ... )`. Am Ende liefert `zeile.equals("c") || zeile.equals("C")` die Antwort.'
loesung: |
  **Ansatz:** Zeilenweise lesen und die ganze Zeile mit den vier erlaubten Texten vergleichen.
  ---
  ```java
  String zeile = sc.nextLine();
  while (!(zeile.equals("q") || zeile.equals("Q") || zeile.equals("c") || zeile.equals("C"))) {
      System.out.println("Bitte q/Q oder c/C eingeben.");
      zeile = sc.nextLine();
  }
  return zeile.equals("c") || zeile.equals("C");
  ```
  ---
  Nach der Schleife ist die Zeile sicher einer der vier Texte. Ist sie nicht `c` oder `C`, muss sie `q` oder `Q` sein, also stimmt `false`.
  ---
  Probe: `ja` und `cc` werden abgelehnt, `C` liefert `true`. Mit `==` statt `equals` würde der Vergleich bei eingelesenen Strings scheitern.
```

```aufgabe
id: ei-meth-falle-rechner
titel: Die rätselhafte Meldung
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Hier liest `readOperand` die Zahl mit `nextInt()`, räumt aber den Rest der Zeile **nicht** weg.
  Eingabe (drei Zeilen): `14`, `5`, `+`. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Falle {
          public static int readOperand(Scanner sc) {
              while (!sc.hasNextInt()) {
                  System.out.println("Keine Zahl: " + sc.next());
              }
              return sc.nextInt();
          }

          public static char readOperator(Scanner sc) {
              String zeile = sc.nextLine();
              while (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {
                  System.out.println("Ungueltig: [" + zeile + "]");
                  zeile = sc.nextLine();
              }
              return zeile.charAt(0);
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int a = readOperand(sc);
              int b = readOperand(sc);
              char op = readOperator(sc);
              System.out.println(a + " " + op + " " + b);
          }
      }
    stdin: "14\n5\n+\n"
    loesung: |
      Ungueltig: []
      14 + 5
    fehler:
      - wert: "14 + 5"
        meldung: Nach dem zweiten `nextInt()` liegt der Zeilenumbruch hinter `5` noch im Puffer. Das erste `nextLine()` in `readOperator` liefert deshalb den leeren String.
hinweise:
  - Wo steht der Lesezeiger, nachdem `nextInt()` die `5` gelesen hat?
  - Das erste `nextLine()` liest den Rest dieser Zeile.
loesung: |
  **Ansatz:** Lesezeiger verfolgen, besonders beim Wechsel von `nextInt()` zu `nextLine()`.
  ---
  `readOperand` liest 14, der zweite Aufruf überspringt den Zeilenumbruch und liest 5. Danach steht der Lesezeiger vor dem Zeilenumbruch nach der 5.
  ---
  `readOperator` liest zuerst den leeren Rest dieser Zeile: Meldung `Ungueltig: []`. Dann liest es `+`. Ausgabe danach: `14 + 5`. Abhilfe: in `readOperand` nach `nextInt()` ein `sc.nextLine();`.
```

```aufgabe
id: ei-meth-switch
titel: Rechnen nach Operator
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Der Rechenteil des Taschenrechners bekommt `a = 17`, `b = 5` und den Operator aus der Eingabe.
  Eingabe: `%`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int a = 17, b = 5;
      char op = sc.nextLine().charAt(0);
      if (op == '/') {
          System.out.println(a + " / " + b + " = " + (double) a / b);
      } else if (op == '%') {
          System.out.println(a + " % " + b + " = " + a % b);
      } else {
          System.out.println("anderer Operator");
      }
    stdin: "%\n"
    loesung: |
      17 % 5 = 2
    fehler:
      - wert: "17 % 5 = 3.4"
        meldung: '`%` ist der Rest der Division, nicht die Division selbst. 17 = 3 · 5 + 2.'
hinweise:
  - '`a % b` ist der Rest beim Teilen von `a` durch `b`.'
loesung: |
  `op` ist `'%'`, also läuft der zweite Zweig.
  ---
  17 geteilt durch 5 ist 3 Rest 2. Ausgabe: `17 % 5 = 2`.
```

```aufgabe
id: ei-meth-lueckentext
titel: Die Bedingung für einen gültigen Operator
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ergänze die Schleifenbedingung so, dass die Schleife läuft, solange die Zeile **ungültig** ist. Gültig ist
  genau ein Zeichen aus `+`, `-`, `*`, `/`. Die Bedingung darf bei einer leeren Zeile keine Exception werfen.
teile:
  - typ: lueckentext
    code: |
      Scanner sc = new Scanner(System.in);
      String zeile = sc.nextLine();
      while (zeile.length() ___ 1 ___ "+-*/".indexOf(zeile.charAt(0)) ___) {
          zeile = sc.nextLine();
      }
    luecken:
      - ["!="]
      - ["||"]
      - ["< 0", "== -1", "<= -1"]
    fehler:
      - wert: ["!=", "&&", "< 0"]
        meldung: 'Ungültig ist die Zeile schon, wenn **eine** der beiden Bedingungen zutrifft: falsche Länge **oder** falsches Zeichen. Dafür steht `||`.'
      - wert: ["==", "||", "< 0"]
        meldung: Gesucht ist die Bedingung für **ungültig**. Eine Zeile mit Länge 1 ist nicht automatisch ungültig.
hinweise:
  - Ungültig heißt „Länge nicht 1“ oder „Zeichen nicht in der Liste“.
  - '`indexOf` liefert -1, wenn das Zeichen nicht vorkommt.'
loesung: |
  **Ansatz:** Die Bedingung für „ungültig“ zusammensetzen und auf die Reihenfolge achten.
  ---
  Erster Teil: `zeile.length() != 1`. Zweiter Teil: `"+-*/".indexOf(zeile.charAt(0)) < 0`, das Zeichen kommt nicht vor.
  ---
  Verbunden mit `||`. Ist die Zeile leer, ist schon der linke Teil wahr, und `charAt(0)` wird wegen der Kurzschlussauswertung nicht mehr aufgerufen.
```

```aufgabe
id: ei-meth-bereich
titel: Eine Zahl in einem Intervall lesen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int readInRange(Scanner sc, int min, int max)`. Die Methode liest so lange Token, bis
  eine ganze Zahl im Intervall `[min, max]` (beide Grenzen eingeschlossen) kommt, und liefert sie. Für jedes
  abgelehnte Token gibt sie genau eine Zeile aus:

  - `Keine ganze Zahl: <Token>`, wenn das Token keine ganze Zahl ist,
  - `Nicht in [<min>, <max>]: <Zahl>`, wenn es eine ganze Zahl außerhalb des Intervalls ist.

  Vorbedingung: `min <= max`, und irgendwann kommt eine passende Zahl.

  Beispiel: `readInRange(sc, 10, 90)` mit der Eingabe `hundert 91 9 90` gibt drei Meldungen aus und
  liefert 90.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Bereich {
          public static int readInRange(Scanner sc, int min, int max) {
              return min; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Bereich {
          public static int readInRange(Scanner sc, int min, int max) {
              int x = min;
              boolean gueltig = false;
              while (!gueltig) {
                  if (sc.hasNextInt()) {
                      x = sc.nextInt();
                      if (x >= min && x <= max) {
                          gueltig = true;
                      } else {
                          System.out.println("Nicht in [" + min + ", " + max + "]: " + x);
                      }
                  } else {
                      System.out.println("Keine ganze Zahl: " + sc.next());
                  }
              }
              return x;
          }
      }
    tests:
      - { aufruf: "System.out.println(readInRange(new Scanner(System.in), 10, 90))", stdin: "hundert 91 9 90\n", stdout: "Keine ganze Zahl: hundert\nNicht in [10, 90]: 91\nNicht in [10, 90]: 9\n90\n", beschreibung: "readInRange(sc, 10, 90) mit hundert 91 9 90" }
      - { aufruf: "System.out.println(readInRange(new Scanner(System.in), 1, 6))", stdin: "1\n", stdout: "1\n", beschreibung: "untere Grenze gehört dazu" }
      - { aufruf: "System.out.println(readInRange(new Scanner(System.in), 1, 40))", stdin: "40.0 0\n41 x 7\n", stdout: "Keine ganze Zahl: 40.0\nNicht in [1, 40]: 0\nNicht in [1, 40]: 41\nKeine ganze Zahl: x\n7\n", beschreibung: "readInRange(sc, 1, 40) über zwei Zeilen" }
      - { aufruf: "System.out.println(readInRange(new Scanner(System.in), -3, -3))", stdin: "-2 -4 -3\n", stdout: "Nicht in [-3, -3]: -2\nNicht in [-3, -3]: -4\n-3\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche deine Meldungen Zeichen für Zeichen mit der Angabe, auch Leerzeichen, Komma und Doppelpunkt." }
      - { wert: 2, meldung: "Die Grenzen gehören zum Intervall. Verwendest du >= und <= statt > und <?" }
hinweise:
  - Kombiniere die Typprüfung mit `hasNextInt()` und die Bereichsprüfung, wie im Beispiel „Eine Zahl von 0 bis 120“ in [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).
  - 'Die Meldung für den Bereich setzt sich so zusammen: `"Nicht in [" + min + ", " + max + "]: " + x`.'
loesung: |
  **Ansatz:** Schleife mit Merker. Erst Typ prüfen, dann Bereich. Nur ein Token, das kein `int` ist, muss mit `next()` entfernt werden.
  ---
  ```java
  int x = min;
  boolean gueltig = false;
  while (!gueltig) {
      if (sc.hasNextInt()) {
          x = sc.nextInt();
          if (x >= min && x <= max) {
              gueltig = true;
          } else {
              System.out.println("Nicht in [" + min + ", " + max + "]: " + x);
          }
      } else {
          System.out.println("Keine ganze Zahl: " + sc.next());
      }
  }
  return x;
  ```
  ---
  Der Startwert `x = min` ist nur nötig, damit der Compiler zufrieden ist. Zurückgegeben wird immer ein gelesener Wert.
  ---
  Probe mit `hundert 91 9 90` und `[10, 90]`: drei Meldungen, dann liefert die Methode 90. Die obere Grenze gehört dazu.
```

```reflexion
frage: Warum liefert readOperator einen char und nicht den gelesenen String? Und warum prüft nicht main die Eingaben, sondern die Methode selbst?
antwort: |
  Nach der Prüfung steht fest, dass die Zeile genau ein Zeichen hat. Ein `char` drückt genau das aus, und
  `main` kann ihn direkt in `switch` oder mit `op == '/'` verwenden. Ein String würde Fragen offenlassen,
  etwa ob er leer sein kann, und Vergleiche bräuchten `equals`. Die Prüfung gehört in die Methode, weil
  dann `main` nur noch mit gültigen Werten arbeitet. Jede Methode hat eine klare Aufgabe, und ihr Ergebnis
  ist durch eine Nachbedingung beschrieben, etwa „liefert eines der Zeichen + - * / %“ (vergleiche
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)). So lässt sich jede
  Methode allein testen, wie in den Aufgaben dieses Abschnitts.
```

## Zufallszahlen und das Ratespiel

```aufgabe
id: ei-zufall-check-anzahl
titel: Wie viele Zahlen hat das Intervall?
niveau: 1
art: check
angabe: |
  Wie viele ganze Zahlen liegen im geschlossenen Intervall [0, 120], also von 0 bis 120 mit beiden Grenzen?
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "120 - 0 + 1"
    toleranz: 0.1
    fehler:
      - wert: "120"
        meldung: Bei einem geschlossenen Intervall zählen beide Grenzen mit. Von 0 bis 120 sind es eine Zahl mehr als 120 − 0.
hinweise:
  - Von `a` bis `b` mit beiden Grenzen sind es `b - a + 1` Zahlen. Probiere es klein aus, etwa von 3 bis 5.
loesung: |
  Von 3 bis 5 sind es die drei Zahlen 3, 4, 5, also 5 − 3 + 1. Die Regel lautet `b - a + 1`.
  ---
  Für [0, 120]: 120 − 0 + 1 = 121 Zahlen.
```

Für das Ratespiel braucht das Programm eine Zahl, die die spielende Person nicht kennt. Dafür gibt es in
`java.util` die Klasse **Random**. Ein Random-Objekt ist ein **Zufallszahlengenerator**: Bei jedem Aufruf
liefert er eine neue Zahl, die zufällig aussieht.

```java
import java.util.Random;     // ganz oben in der Datei, wie beim Scanner

Random rnd = new Random();  // in main: einen Generator erzeugen
int z = rnd.nextInt(6);     // eine der Zahlen 0, 1, 2, 3, 4, 5
```

`rnd.nextInt(n)` liefert eine ganze Zahl von **0 bis n − 1**. Die obere Grenze `n` selbst kommt nie
vor. Jede der `n` möglichen Zahlen ist gleich wahrscheinlich. Für einen Würfel mit den Augenzahlen 1 bis
6 verschiebt man das Ergebnis: `rnd.nextInt(6) + 1` liefert 1 bis 6.

:::merke[Eine Zufallszahl im Intervall [a, b]]
Das Intervall hat `b - a + 1` ganze Zahlen. Also:

```java
int z = rnd.nextInt(b - a + 1) + a;
```

Dabei ist `a` die untere und `b` die obere Grenze. `nextInt(b - a + 1)` liefert 0 bis `b - a`. Plus `a`
ergibt `a` bis `b`. Beispiel Ratespiel mit [0, 120]: `rnd.nextInt(121)`. Beispiel [10, 20]:
`rnd.nextInt(11) + 10`.
:::

### Zufall zum Wiederholen: der Startwert

Ein Computer kann nicht wirklich würfeln. `Random` **berechnet** jede neue Zahl aus der vorigen mit einer
festen Formel. Die Zahlen sehen nur zufällig aus. Man nennt sie darum **Pseudozufallszahlen** („pseudo“
heißt „scheinbar“). Die erste Rechnung braucht einen Startwert, den **Seed** (englisch für „Saatkorn“).
`new Random()` nimmt dafür einen Wert, der sich bei jedem Start ändert. Darum kommen bei jedem Start andere
Zahlen.

Man kann den Seed aber auch selbst festlegen: `new Random(42)`. Dann liefert der Generator bei **jedem**
Programmstart **dieselbe** Folge von Zahlen. Das klingt unsinnig, ist aber beim Testen Gold wert. Ein
Ratespiel mit `new Random(42)` hat bei jedem Lauf dieselbe geheime Zahl. So kannst du gezielt prüfen, ob
„kleiner“, „größer“ und „gewonnen“ richtig erscheinen.

:::definition[Zufallszahlengenerator und Seed]
Ein **Zufallszahlengenerator** ist ein Objekt, das bei jedem Aufruf eine neue, zufällig wirkende Zahl
liefert. In Java ist das ein Objekt der Klasse `java.util.Random`. Der **Seed** ist der Startwert der
Berechnung. Gleicher Seed bedeutet gleiche Zahlenfolge.
:::

**Beispiel:** Zwei Generatoren `new Random(5)` liefern als erste Zahl mit `nextInt(100)` beide dieselbe Zahl.
**Kein Beispiel für einen Seed:** In `rnd.nextInt(100)` ist 100 kein Seed, sondern die **obere Schranke**
für das Ergebnis. Der Seed steht nur beim Erzeugen in `new Random(...)`.

:::beispiel[Fünfmal würfeln mit festem Seed]
```java
import java.util.Random;

public class Wuerfel {
    public static void main(String[] args) {
        Random rnd = new Random(2026);
        for (int i = 0; i < 5; i++) {
            System.out.print(rnd.nextInt(6) + 1);
            System.out.print(" ");
        }
        System.out.println();
    }
}
```

1. `new Random(2026)` erzeugt einen Generator mit dem Seed 2026.
2. Die Schleife ruft fünfmal `rnd.nextInt(6) + 1` auf. Jeder Aufruf liefert die nächste Zahl der Folge,
   verschoben auf 1 bis 6.
3. Mit genau diesem Seed lautet die Ausgabe bei **jedem** Start `6 5 2 1 4 ` (mit einem Leerzeichen am Ende).

Die Zahlen selbst kann man nicht im Kopf ausrechnen. Man muss es auch nie. Wichtig ist nur: Ändert man den
Seed auf 2027 oder lässt ihn weg, kommen andere Zahlen. Bleibt der Seed gleich, kommen dieselben.
:::

:::achtung[nextInt(120) für das Intervall [0, 120]]
Das Ratespiel dieser Lektion braucht eine Zufallszahl im Intervall [0, 120]. Naheliegend, aber falsch ist

```java
int geheim = rnd.nextInt(120);    // falsch: liefert nur 0 bis 119
```

`nextInt(120)` liefert 120 verschiedene Zahlen, nämlich 0 bis 119. Die 120 kommt nie vor. Das
Intervall [0, 120] hat aber 121 Zahlen. Richtig ist `rnd.nextInt(121)`. Beim Testen fällt der Fehler
kaum auf, denn nur eine von 121 Zahlen fehlt. Darum hilft nur, die Formel `b - a + 1` bewusst
anzuwenden.
:::

:::achtung[Der Cast an der falschen Stelle bei Math.random]
Statt `Random` sieht man oft `Math.random()` aus der Klasse `Math`. Es liefert eine Kommazahl von 0
(eingeschlossen) bis 1 (ausgeschlossen). Damit schreiben manche

```java
int geheim = (int) Math.random() * 121;   // falsch: immer 0
```

Der Cast `(int)` bindet stärker als `*`. Er wirkt also nur auf `Math.random()`. Eine Zahl wie `0.73` wird
dabei zu 0 abgeschnitten, und `0 * 121` ist 0. Die geheime Zahl ist immer 0. Richtig ist
`(int) (Math.random() * 121)`: Erst wird multipliziert (0 bis unter 121), dann abgeschnitten (0 bis 120).
:::

```aufgabe
id: ei-zufall-gefuehrt
titel: Ein Zufallsbereich Schritt für Schritt
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Für ein Spiel soll eine zufällige Temperatur von −5 bis 15 Grad entstehen, beide Grenzen eingeschlossen.
  Welcher Ausdruck ist richtig? Löse zuerst geführt.
teile:
  - typ: auswahl
    optionen: ['`rnd.nextInt(21) - 5`', '`rnd.nextInt(20) - 5`', '`rnd.nextInt(15) - 5`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`nextInt(20)` liefert 0 bis 19. Minus 5 ergibt −5 bis 14. Die obere Grenze 15 fehlt.'
      - wert: 2
        meldung: '`nextInt(15)` liefert 0 bis 14, minus 5 also −5 bis 9. Die Schranke muss die Anzahl der Zahlen sein, nicht die obere Grenze.'
gefuehrt:
  - text: Wie viele ganze Zahlen hat das Intervall [−5, 15]?
    teil: { typ: zahl, loesung: "15 - (-5) + 1" }
    erklaerung: 15 − (−5) + 1 = 21.
  - text: Welche Zahlen liefert `rnd.nextInt(21)`? Gib die größte an.
    teil: { typ: zahl, loesung: "20" }
    erklaerung: '`nextInt(21)` liefert 0 bis 20.'
  - text: Welche Zahl muss man addieren, damit die kleinste mögliche Zahl −5 ist?
    teil: { typ: zahl, loesung: "-5" }
    erklaerung: 0 + (−5) = −5 und 20 + (−5) = 15. Man addiert also −5, das heißt, man zieht 5 ab.
hinweise:
  - Zuerst die Anzahl der Zahlen bestimmen, dann verschieben.
loesung: |
  Anzahl: 15 − (−5) + 1 = 21. Also `nextInt(21)` mit Ergebnis 0 bis 20.
  ---
  Verschieben um −5: Ergebnis −5 bis 15. Richtig ist `rnd.nextInt(21) - 5`.
```

```aufgabe
id: ei-zufall-grenzen
titel: Kleinster und größter Wert
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Welche Werte kann `int z = rnd.nextInt(8) + 3;` annehmen? Gib den kleinsten und den größten möglichen
  Wert an.
teile:
  - typ: zahl
    label: kleinster Wert
    loesung: "0 + 3"
    fehler:
      - wert: "4"
        meldung: '`nextInt(8)` kann auch 0 liefern. Der kleinste Wert ist also 0 + 3.'
  - typ: zahl
    label: größter Wert
    loesung: "7 + 3"
    fehler:
      - wert: "11"
        meldung: '`nextInt(8)` liefert höchstens 7, nie 8. Die Schranke selbst ist ausgeschlossen.'
hinweise:
  - '`nextInt(n)` liefert 0 bis n − 1.'
loesung: |
  `nextInt(8)` liefert 0 bis 7.
  ---
  Plus 3 ergibt 3 bis 10. Kleinster Wert 3, größter Wert 10. Das sind 8 mögliche Zahlen.
```

```aufgabe
id: ei-zufall-seed
titel: Derselbe Seed, dieselbe Zahl
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Wenn man dieses Programm startet, lauten die ersten beiden Ausgabezeilen `87` und `92`. Was steht in der
  dritten und vierten Zeile? Du musst nichts ausrechnen, nur überlegen.
teile:
  - typ: ausgabe
    code: |
      Random a = new Random(5);
      System.out.println(a.nextInt(100));
      System.out.println(a.nextInt(100));
      Random b = new Random(5);
      System.out.println(b.nextInt(100));
      System.out.println(b.nextInt(100));
    loesung: |
      87
      92
      87
      92
    fehler:
      - wert: "87\n92\n87\n87"
        meldung: Der zweite Aufruf von `b.nextInt(100)` liefert die zweite Zahl der Folge zum Seed 5, also dieselbe wie der zweite Aufruf bei `a`.
      - wert: "87\n92\n92\n87"
        meldung: '`b` ist ein neuer Generator. Er beginnt wieder am Anfang der Folge, also mit derselben ersten Zahl wie `a`.'
hinweise:
  - Gleicher Seed bedeutet gleiche Zahlenfolge. `b` beginnt seine Folge von vorne.
  - Die Generatoren beeinflussen einander nicht.
loesung: |
  **Ansatz:** Ein Generator mit Seed 5 liefert immer dieselbe Folge, egal wann er erzeugt wird.
  ---
  `a` liefert 87 und 92. `b` hat ebenfalls Seed 5 und beginnt seine Folge neu.
  ---
  Also liefert `b` wieder 87 und 92. Ausgabe: `87`, `92`, `87`, `92`.
```

### Das Ratespiel

Jetzt setzen wir alles zusammen: Zufallszahl, Eingabevalidierung und eine Schleife mit begrenzter Anzahl
an Versuchen. Die Regeln folgen dem Guessing Game der Blätter aus den Wintersemestern 2021 und 2022, aber mit
eigenen Zahlen: Die geheime Zahl liegt in [0, 120]. Nach jedem Tipp erfährt man, ob die gesuchte Zahl größer
oder kleiner ist. Nach 7 Tipps ohne Treffer ist das Spiel verloren. Ungültige Eingaben (Wörter, Kommazahlen,
Zahlen außerhalb von [0, 120]) werden gemeldet und kosten **keinen** Versuch.

:::beispiel[Ein Ratespiel mit festem Seed]
```java
import java.util.Random;
import java.util.Scanner;

public class Ratespiel {
    public static int readGuess(Scanner sc) {
        while (true) {
            if (!sc.hasNextInt()) {
                System.out.println("Ungueltig: " + sc.next());
            } else {
                int tipp = sc.nextInt();
                if (tipp >= 0 && tipp <= 120) {
                    return tipp;
                }
                System.out.println("Ungueltig: " + tipp);
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rnd = new Random(42);
        int geheim = rnd.nextInt(121);
        int versuche = 0;
        boolean erraten = false;
        while (!erraten && versuche < 7) {
            int tipp = readGuess(sc);
            versuche++;
            if (tipp < geheim) {
                System.out.println("Groesser! Noch " + (7 - versuche) + " Versuche.");
            } else if (tipp > geheim) {
                System.out.println("Kleiner! Noch " + (7 - versuche) + " Versuche.");
            } else {
                erraten = true;
            }
        }
        if (erraten) {
            System.out.println("Gewonnen nach " + versuche + " Versuchen!");
        } else {
            System.out.println("Verloren! Gesucht war " + geheim + ".");
        }
    }
}
```

`readGuess` verwendet `while (true)`, eine Schleife ohne eigene Abbruchbedingung. Sie endet nur durch
`return tipp;`, und das passiert genau dann, wenn eine gültige Zahl gelesen wurde. Das ist eine kürzere
Form des Musters mit dem Merker `gueltig`.

Mit dem Seed 42 ist die geheime Zahl bei jedem Start 117. Eingabe: `60 abc 90 105 130 112 118 117`.

|Token|Gültig?|Versuch|Ausgabe|
|---|---|---|---|
|`60`|ja|1|`Groesser! Noch 6 Versuche.`|
|`abc`|nein, kein `int`|–|`Ungueltig: abc`|
|`90`|ja|2|`Groesser! Noch 5 Versuche.`|
|`105`|ja|3|`Groesser! Noch 4 Versuche.`|
|`130`|nein, zu groß|–|`Ungueltig: 130`|
|`112`|ja|4|`Groesser! Noch 3 Versuche.`|
|`118`|ja|5|`Kleiner! Noch 2 Versuche.`|
|`117`|ja|6|Schleife endet|

Danach ist `erraten` wahr, und es erscheint `Gewonnen nach 6 Versuchen!`. Die beiden ungültigen Eingaben
haben keinen Versuch gekostet, weil `versuche++` erst **nach** `readGuess` steht. Die Methode kehrt ja erst
mit einem gültigen Tipp zurück.
:::

Mit einer klugen Strategie gewinnt man übrigens immer. Wer jedes Mal die Mitte des noch möglichen
Bereichs tippt, halbiert den Bereich bei jedem Versuch: 121, dann höchstens 60, 30, 15, 7, 3, 1
mögliche Zahlen. Spätestens der siebte Tipp trifft also. Dieses Halbieren heißt **binäre Suche**. Sie kommt in
[18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren)
wieder.

```aufgabe
id: ei-zufall-ratespiel-ausgabe
titel: Eine Runde Ratespiel vorhersagen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Hier ist die geheime Zahl fest 73, und es gibt nur 4 Versuche. `readGuess` ist dieselbe Methode wie im
  Beispiel „Ein Ratespiel mit festem Seed“, nur kürzer geschrieben. Eingabe: `80 sieben 60 -1 75 70`.
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Runde {
          public static int readGuess(Scanner sc) {
              while (true) {
                  if (!sc.hasNextInt()) {
                      System.out.println("Ungueltig: " + sc.next());
                  } else {
                      int tipp = sc.nextInt();
                      if (tipp >= 0 && tipp <= 120) {
                          return tipp;
                      }
                      System.out.println("Ungueltig: " + tipp);
                  }
              }
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int geheim = 73;
              int versuche = 0;
              boolean erraten = false;
              while (!erraten && versuche < 4) {
                  int tipp = readGuess(sc);
                  versuche++;
                  if (tipp < geheim) {
                      System.out.println("Groesser!");
                  } else if (tipp > geheim) {
                      System.out.println("Kleiner!");
                  } else {
                      erraten = true;
                  }
              }
              if (erraten) {
                  System.out.println("Gewonnen nach " + versuche + " Versuchen!");
              } else {
                  System.out.println("Verloren! Gesucht war " + geheim + ".");
              }
          }
      }
    stdin: "80 sieben 60 -1 75 70\n"
    loesung: |
      Kleiner!
      Ungueltig: sieben
      Groesser!
      Ungueltig: -1
      Kleiner!
      Groesser!
      Verloren! Gesucht war 73.
    fehler:
      - wert: "Kleiner!\nUngueltig: sieben\nGroesser!\nUngueltig: -1\nVerloren! Gesucht war 73."
        meldung: Ungültige Eingaben kosten keinen Versuch. Gültig sind 80, 60, 75 und 70, das sind genau 4 Versuche. Erst nach dem vierten endet die Schleife.
      - wert: "Kleiner!\nUngueltig: sieben\nGroesser!\nGroesser!\nKleiner!\nVerloren! Gesucht war 73."
        meldung: '`-1` ist zwar eine ganze Zahl, liegt aber nicht in [0, 120]. `readGuess` meldet sie als ungültig.'
hinweise:
  - Zähle nur die gültigen Tipps als Versuche.
  - '`-1` ist eine ganze Zahl, aber außerhalb des erlaubten Bereichs.'
loesung: |
  **Ansatz:** Token durchgehen, ungültige melden, gültige mit 73 vergleichen und Versuche zählen.
  ---
  `80`: Versuch 1, `Kleiner!`. `sieben`: ungültig. `60`: Versuch 2, `Groesser!`. `-1`: ungültig (außerhalb).
  ---
  `75`: Versuch 3, `Kleiner!`. `70`: Versuch 4, `Groesser!`. Jetzt ist `versuche < 4` falsch, die Schleife endet.
  ---
  `erraten` ist falsch: `Verloren! Gesucht war 73.` Der Tipp 73 kam nicht mehr an die Reihe.
```

```aufgabe
id: ei-zufall-luecke
titel: Zufallszahl zwischen zwei Grenzen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ergänze die Methode. Sie soll eine Zufallszahl aus dem geschlossenen Intervall `[von, bis]` liefern.
  Vorbedingung: `von <= bis`.
teile:
  - typ: lueckentext
    code: |
      public class Zufall {
          public static int zufallImBereich(java.util.Random rnd, int von, int bis) {
              return rnd.nextInt(___) + ___;
          }
      }
    luecken:
      - ["bis - von + 1", "bis + 1 - von", "1 + bis - von"]
      - ["von"]
    fehler:
      - wert: ["bis - von", "von"]
        meldung: '`nextInt(bis - von)` liefert höchstens `bis - von - 1`. Die obere Grenze `bis` würde nie erreicht. Das Intervall hat `bis - von + 1` Zahlen.'
      - wert: ["bis", "von"]
        meldung: Mit `nextInt(bis) + von` kann das Ergebnis über `bis` hinausgehen, zum Beispiel bei `von = 5`, `bis = 10` bis zu 14.
hinweise:
  - Die Schranke ist die Anzahl der Zahlen im Intervall.
  - Danach wird so verschoben, dass die kleinste mögliche Zahl `von` ist.
loesung: |
  **Ansatz:** Merke-Formel `rnd.nextInt(b - a + 1) + a` mit `a = von` und `b = bis`.
  ---
  Erste Lücke: `bis - von + 1`. Damit liefert `nextInt` die Zahlen 0 bis `bis - von`.
  ---
  Zweite Lücke: `von`. Ergebnis: `von` bis `bis`. Probe mit `von = 5`, `bis = 10`: `nextInt(6)` liefert 0 bis 5, plus 5 ergibt 5 bis 10.
```

```aufgabe
id: ei-zufall-rf
titel: Aussagen über Random
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: Beurteile jede Aussage. `rnd` ist ein Objekt der Klasse `Random`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`rnd.nextInt(10)` kann den Wert 10 liefern.'
        richtig: false
        erklaerung: Die Schranke ist ausgeschlossen. Mögliche Werte sind 0 bis 9.
      - text: Zwei Programme, die beide `new Random(7)` verwenden und gleich aufrufen, bekommen dieselben Zahlen.
        richtig: true
        erklaerung: Gleicher Seed, gleiche Folge. Darauf beruht reproduzierbares Testen.
      - text: '`(int) Math.random() * 6 + 1` liefert einen Würfelwurf von 1 bis 6.'
        richtig: false
        erklaerung: Der Cast wirkt nur auf `Math.random()` und macht daraus immer 0. Das Ergebnis ist immer 1. Richtig wäre `(int) (Math.random() * 6) + 1`.
      - text: Für eine Zufallszahl in [1, 80] ist `rnd.nextInt(80) + 1` richtig.
        richtig: true
        erklaerung: '`nextInt(80)` liefert 0 bis 79, plus 1 ergibt 1 bis 80.'
    fehler:
      - wert: [r, r, f, r]
        meldung: Die Schranke von `nextInt` ist immer ausgeschlossen. Bei `nextInt(10)` ist 9 die größte Zahl.
      - wert: [f, r, r, r]
        meldung: Achte auf die Klammern beim Cast. `(int) Math.random()` ist immer 0.
hinweise:
  - Prüfe bei jedem Ausdruck den kleinsten und den größten möglichen Wert.
  - Ein Cast bindet stärker als `*`.
loesung: |
  **Ansatz:** Für jeden Ausdruck die möglichen Werte bestimmen.
  ---
  Aussage 1 ist falsch (0 bis 9), Aussage 2 richtig (gleicher Seed, gleiche Folge).
  ---
  Aussage 3 ist falsch: `(int) Math.random()` ist 0, das Ergebnis immer 1. Aussage 4 ist richtig: 1 bis 80.
```

```aufgabe
id: ei-zufall-math-random
titel: Das Ratespiel liefert immer 0
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Student schreibt für die geheime Zahl in [0, 120] die Zeile
  `int geheim = (int) Math.random() * 121;`. Beim Testen ist die gesuchte Zahl jedes Mal 0.
  Welche Korrektur ist richtig?
teile:
  - typ: auswahl
    optionen:
      - '`int geheim = (int) (Math.random() * 121);`'
      - '`int geheim = (int) (Math.random() * 120);`'
      - '`int geheim = (int) Math.random() * 121 + 1;`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`Math.random() * 120` liegt zwischen 0 und knapp unter 120. Abgeschnitten ergibt das 0 bis 119, die 120 fehlt.'
      - wert: 2
        meldung: Der Cast wirkt weiterhin nur auf `Math.random()` und liefert 0. Das Ergebnis wäre dann immer 1.
hinweise:
  - Was macht `(int)` mit einer Zahl zwischen 0 und 1?
  - Der Cast muss auf das ganze Produkt wirken. Dafür braucht es Klammern.
loesung: |
  **Ansatz:** Klären, worauf der Cast wirkt.
  ---
  `(int) Math.random()` schneidet eine Zahl von 0 bis unter 1 ab und ergibt immer 0. Mal 121 bleibt es 0.
  ---
  Mit Klammern wird zuerst `Math.random() * 121` gerechnet, also eine Zahl von 0 bis unter 121. Abgeschnitten ergibt das 0 bis 120. Richtig ist die erste Option.
```

```aufgabe
id: ei-zufall-runde-methode
titel: Eine Spielrunde als Methode
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2021 und WS 2022, Guessing Game (Spielablauf ohne Grafik, nachgebaut)
angabe: |
  Implementiere `int spieleRunde(Scanner sc, int geheim, int maxVersuche)`. Die Methode liest Tipps mit
  `sc`, bis die Zahl `geheim` erraten ist oder `maxVersuche` gültige Tipps verbraucht sind.

  - Ungültig sind Token, die keine ganze Zahl sind, und ganze Zahlen außerhalb von [0, 120]. Für sie gibt
    die Methode `Ungueltig` aus, und sie kosten keinen Versuch.
  - Für einen gültigen falschen Tipp gibt sie `Groesser` oder `Kleiner` aus, je nachdem, ob die gesuchte
    Zahl größer oder kleiner als der Tipp ist.
  - Rückgabe: die Anzahl der benötigten Versuche, wenn die Zahl erraten wurde, sonst `-1`.

  Beispiel: `spieleRunde(sc, 50, 3)` mit der Eingabe `20 x 60 50` gibt `Groesser`, `Ungueltig`, `Kleiner`
  aus (je eine Zeile) und liefert 3.
  Vorbedingung: `geheim` liegt in [0, 120], `maxVersuche >= 1`, und es kommen genug Eingaben.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Raten {
          public static int spieleRunde(Scanner sc, int geheim, int maxVersuche) {
              return -1; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Raten {
          public static int spieleRunde(Scanner sc, int geheim, int maxVersuche) {
              int versuche = 0;
              while (versuche < maxVersuche) {
                  if (!sc.hasNextInt()) {
                      sc.next();
                      System.out.println("Ungueltig");
                  } else {
                      int tipp = sc.nextInt();
                      if (tipp < 0 || tipp > 120) {
                          System.out.println("Ungueltig");
                      } else {
                          versuche++;
                          if (tipp == geheim) {
                              return versuche;
                          } else if (tipp < geheim) {
                              System.out.println("Groesser");
                          } else {
                              System.out.println("Kleiner");
                          }
                      }
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: "System.out.println(spieleRunde(new Scanner(System.in), 50, 3))", stdin: "20 x 60 50\n", stdout: "Groesser\nUngueltig\nKleiner\n3\n", beschreibung: "spieleRunde(sc, 50, 3) mit 20 x 60 50" }
      - { aufruf: "System.out.println(spieleRunde(new Scanner(System.in), 7, 5))", stdin: "7\n", stdout: "1\n", beschreibung: "sofort erraten" }
      - { aufruf: "System.out.println(spieleRunde(new Scanner(System.in), 100, 2))", stdin: "121 -3 1.5 99 101 100\n", stdout: "Ungueltig\nUngueltig\nUngueltig\nGroesser\nKleiner\n-1\n", beschreibung: "verloren nach 2 gültigen Versuchen" }
      - { aufruf: "System.out.println(spieleRunde(new Scanner(System.in), 0, 3))", stdin: "120 0\n", stdout: "Kleiner\n2\n", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Kosten ungültige Eingaben bei dir einen Versuch? Erhöhe den Zähler erst, wenn ein Tipp im Bereich [0, 120] gelesen wurde." }
hinweise:
  - Die Schleife läuft, solange `versuche < maxVersuche` gilt. Wird die Zahl erraten, beendet `return versuche;` die Methode sofort.
  - 'Zähle `versuche++` nur im Zweig für gültige Tipps. Nach der Schleife steht `return -1;`.'
loesung: |
  **Ansatz:** Schleife über die Versuche. In jedem Durchlauf ein Token prüfen: ungültig, falsch oder richtig.
  ---
  ```java
  int versuche = 0;
  while (versuche < maxVersuche) {
      if (!sc.hasNextInt()) {
          sc.next();
          System.out.println("Ungueltig");
      } else {
          int tipp = sc.nextInt();
          if (tipp < 0 || tipp > 120) {
              System.out.println("Ungueltig");
          } else {
              versuche++;
              if (tipp == geheim) {
                  return versuche;
              } else if (tipp < geheim) {
                  System.out.println("Groesser");
              } else {
                  System.out.println("Kleiner");
              }
          }
      }
  }
  return -1;
  ```
  ---
  Ein Durchlauf mit ungültiger Eingabe erhöht `versuche` nicht. Darum endet die Schleife erst nach `maxVersuche` gültigen Tipps.
  ---
  Probe mit `geheim = 50`, Eingabe `20 x 60 50`: `Groesser` (Versuch 1), `Ungueltig`, `Kleiner` (Versuch 2), dann richtig im Versuch 3. Rückgabe 3.
```

```reflexion
frage: Warum ist ein fester Seed beim Testen des Ratespiels sinnvoll, beim fertigen Spiel aber nicht?
antwort: |
  Mit einem festen Seed wie `new Random(42)` ist die geheime Zahl bei jedem Start dieselbe. Dann kann man
  eine bestimmte Folge von Tipps eingeben und vorher wissen, welche Ausgaben richtig sind. Ein Fehler lässt
  sich so jederzeit wiederholen und nach der Korrektur erneut prüfen. Beim fertigen Spiel wäre genau das
  langweilig: Wer einmal gespielt hat, kennt die Zahl. Darum nimmt man dort `new Random()` ohne Seed. Ein
  guter Weg ist, die Zahl in einer eigenen Methode zu erzeugen, die das Random-Objekt als Parameter bekommt.
  Dann wechselt man zwischen Test und Spiel nur an einer einzigen Stelle.
```

## Gemischte Wiederholung

Hier sind die Aufgaben bunt gemischt, auch mit Stoff aus den Kapiteln 2, 3, 4 und 6. Das ist Absicht:
Auf dem Blatt und im Feedbackgespräch steht nicht dabei, welcher Abschnitt gemeint ist. Bei den ersten
beiden Aufgaben musst du nichts programmieren. Du entscheidest nur, welches Werkzeug passt. Genau diese
Entscheidung steht am Anfang jeder Eingabeaufgabe.

```aufgabe
id: ei-mix-welcher-aufruf
titel: Welcher Leseaufruf passt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ordne jeder Eingabe den passenden Leseaufruf zu. Du musst nichts programmieren.

  a) Eine Postadresse wie `Favoritenstrasse 9-11`, die in einer eigenen Zeile steht.

  b) Die Anzahl der Personen in einer Reservierung.

  c) Ein Kennwort ohne Leerzeichen, nach dem in derselben Zeile noch weitere Angaben folgen.
teile:
  - typ: auswahl
    label: a)
    optionen: ['`nextLine()`', '`next()`', '`nextInt()`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`next()` liest nur bis zum ersten Leerzeichen. Von der Adresse käme nur `Favoritenstrasse` an.'
      - wert: 2
        meldung: Eine Adresse ist Text. `nextInt()` würde hier eine `InputMismatchException` werfen.
  - typ: auswahl
    label: b)
    optionen: ['`nextLine()`', '`next()`', '`nextInt()`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Mit `nextLine()` bekämst du einen `String` und müsstest ihn noch umwandeln. Für eine ganze Zahl passt `nextInt()` direkt.
      - wert: 1
        meldung: '`next()` liefert einen `String`. Mit einer Anzahl will man aber rechnen.'
  - typ: auswahl
    label: c)
    optionen: ['`nextLine()`', '`next()`', '`nextInt()`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`nextLine()` würde auch die weiteren Angaben derselben Zeile mitnehmen.'
      - wert: 2
        meldung: Ein Kennwort ist Text, keine Zahl.
hinweise:
  - Frage dich bei jeder Eingabe, welcher Typ herauskommen soll und ob Leerzeichen dazugehören.
loesung: |
  **Ansatz:** Typ und Leerzeichen entscheiden über den Aufruf.
  ---
  a) Text mit Leerzeichen in einer eigenen Zeile: `nextLine()`. b) Ganze Zahl: `nextInt()`.
  ---
  c) Ein Wort ohne Leerzeichen, danach geht es in der Zeile weiter: `next()`.
```

```aufgabe
id: ei-mix-welche-schleife
titel: Welche Schleife für die Validierung?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  „Lies so lange, bis eine gültige Zahl eingegeben wurde.“ Welche Schleife passt dazu am besten? Die Arten
  von Schleifen kennst du aus [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife).
  Du musst nichts programmieren.
teile:
  - typ: auswahl
    optionen:
      - '`while` mit einer Bedingung wie `!sc.hasNextInt()` oder `!gueltig`'
      - '`for (int i = 0; i < 3; i++)`'
      - 'eine `if`-Anweisung ohne Schleife'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Zählschleife läuft genau dreimal. Wie viele falsche Eingaben kommen, weiß man aber vorher nicht.'
      - wert: 2
        meldung: Ein `if` prüft nur einmal. Bei zwei falschen Eingaben hintereinander stürzt das Programm ab.
hinweise:
  - Weißt du vorher, wie oft gelesen werden muss?
loesung: |
  **Ansatz:** Die Anzahl der Wiederholungen ist vorher unbekannt.
  ---
  Dafür ist eine bedingungsgesteuerte Schleife da, also `while` (oder `do-while`). Eine Zählschleife passt nur, wenn die Anzahl feststeht.
  ---
  Mit `while (!sc.hasNextInt())` oder einem Merker `while (!gueltig)` läuft sie genau so oft, wie nötig.
```

```aufgabe
id: ei-mix-rueckwaerts
titel: Ein Wort rückwärts
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eingabe: `Rentner rot`. Was gibt der Code aus? Strings rückwärts durchlaufen kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      String w = sc.next();
      String r = "";
      for (int i = w.length() - 1; i >= 0; i--) {
          r = r + w.charAt(i);
      }
      System.out.println(r);
      System.out.println(r.equals(w));
    stdin: "Rentner rot\n"
    loesung: |
      rentneR
      false
    fehler:
      - wert: "tor rentneR\nfalse"
        meldung: '`next()` liest nur das erste Wort `Rentner`. `rot` bleibt ungelesen.'
      - wert: "rentneR\ntrue"
        meldung: 'Groß- und Kleinschreibung zählt. `rentneR` und `Rentner` sind verschiedene Strings.'
hinweise:
  - Welches Token liefert `next()`? Dann von hinten nach vorne zusammensetzen.
  - '`equals` unterscheidet zwischen `R` und `r`.'
loesung: |
  **Ansatz:** Erst das gelesene Token bestimmen, dann die Schleife ausführen.
  ---
  `next()` liefert `Rentner`. Rückwärts gelesen: `r`, `e`, `n`, `t`, `n`, `e`, `R`, also `rentneR`.
  ---
  `"rentneR".equals("Rentner")` ist falsch, weil das große R an einer anderen Stelle steht. Ausgabe `false`.
```

```aufgabe
id: ei-mix-zeichen
titel: Mit dem ersten Zeichen rechnen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eingabe: `kiwi`. Was gibt der Code aus? (Rechnen mit `char`: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      char c = sc.next().charAt(0);
      System.out.println(c - 'a');
      System.out.println((char) (c - 32));
    stdin: "kiwi\n"
    loesung: |
      10
      K
    fehler:
      - wert: "11\nK"
        meldung: Die Zählung beginnt bei `'a'` mit 0. `'a' - 'a'` ist 0, `'b' - 'a'` ist 1, also ist `'k' - 'a'` gleich 10.
      - wert: "10\n75"
        meldung: Der Cast `(char)` macht aus der Zahl 75 wieder ein Zeichen. Ausgegeben wird `K`.
hinweise:
  - '`next().charAt(0)` ist das erste Zeichen des Worts. Kleinbuchstaben liegen in der Zeichentabelle 32 Stellen hinter den Großbuchstaben.'
loesung: |
  `next()` liefert `kiwi`, `charAt(0)` ist `'k'`. `'k' - 'a'` ist 10, denn k ist der elfte Buchstabe.
  ---
  `'k'` hat den Wert 107, minus 32 ergibt 75. Als Zeichen ist das `K`.
```

```aufgabe
id: ei-mix-menue
titel: Ein Menü mit switch
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eingabe: `2`. Was gibt der Code aus? Achte auf die `break`-Anweisungen (Fallthrough aus
  [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough)).
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int wahl = sc.nextInt();
      switch (wahl) {
          case 1:
              System.out.println("Neues Spiel");
              break;
          case 2:
              System.out.println("Laden");
          case 3:
              System.out.println("Optionen");
              break;
          default:
              System.out.println("Unbekannt");
      }
    stdin: "2\n"
    loesung: |
      Laden
      Optionen
    fehler:
      - wert: "Laden"
        meldung: Nach `case 2` fehlt ein `break`. Java läuft in den nächsten Fall weiter und führt auch `case 3` aus.
      - wert: "Laden\nOptionen\nUnbekannt"
        meldung: Das `break` am Ende von `case 3` beendet den `switch`. `default` wird nicht mehr erreicht.
hinweise:
  - Ab dem passenden `case` läuft Java weiter, bis ein `break` kommt.
  - Gelesen wird die Zahl 2.
loesung: |
  **Ansatz:** Beim passenden `case` einsteigen und bis zum nächsten `break` weiterlaufen.
  ---
  `wahl` ist 2. Java springt zu `case 2` und gibt `Laden` aus. Dort fehlt ein `break`.
  ---
  Darum läuft es in `case 3` weiter: `Optionen`. Das `break` danach beendet den `switch`.
```

```aufgabe
id: ei-mix-call-by-value
titel: Liest die Methode in die Variable?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Eingabe: `42`. Was gibt das Programm aus? (Call-by-value aus [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Lesen {
          public static void lies(Scanner sc, int ziel) {
              ziel = sc.nextInt();
              System.out.println("in lies: " + ziel);
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int zahl = 0;
              lies(sc, zahl);
              System.out.println("in main: " + zahl);
          }
      }
    stdin: "42\n"
    loesung: |
      in lies: 42
      in main: 0
    fehler:
      - wert: "in lies: 42\nin main: 42"
        meldung: Java übergibt bei `int` eine Kopie des Werts. Die Zuweisung an den Parameter `ziel` ändert nur diese Kopie, nicht `zahl` in `main`.
hinweise:
  - Ein Parameter ist eine eigene lokale Variable der Methode.
  - Ein gelesener Wert kommt nur über `return` zurück zu `main`.
loesung: |
  **Ansatz:** Call-by-value: `ziel` bekommt beim Aufruf eine Kopie von `zahl`, also 0.
  ---
  In `lies` wird `ziel` auf 42 gesetzt und ausgegeben: `in lies: 42`.
  ---
  `zahl` in `main` bleibt 0: `in main: 0`. Darum hat `readIntValue` den Rückgabetyp `int` und wird als `int wert = readIntValue(sc);` verwendet.
```

```aufgabe
id: ei-mix-schnitt
titel: Durchschnitt dreier Eingaben
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Eingabe: `7 8 8`. Was gibt der Code aus? (Ganzzahldivision aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int s = sc.nextInt() + sc.nextInt() + sc.nextInt();
      System.out.println(s / 3);
      System.out.println(s / 3.0);
    stdin: "7 8 8\n"
    loesung: |
      7
      7.666666666666667
    fehler:
      - wert: "7.666666666666667\n7.666666666666667"
        meldung: '`s / 3` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg.'
      - wert: "7\n7.7"
        meldung: Java rundet bei der Ausgabe eines `double` nicht auf eine Stelle. Es zeigt so viele Stellen, wie nötig sind.
hinweise:
  - Die Summe ist 23. `23 / 3` und `23 / 3.0` unterscheiden sich im Typ.
loesung: |
  Die drei Aufrufe lesen 7, 8 und 8, die Summe ist 23.
  ---
  `23 / 3` ist 7 (Ganzzahldivision). `23 / 3.0` ist ein `double`: `7.666666666666667`.
```

```aufgabe
id: ei-mix-woerter
titel: Wörter zählen bis zum Ende
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eingabe (zwei Zeilen): `Es␣war␣␣einmal` und `␣ein␣2.␣Versuch`. Dabei steht `␣` für ein Leerzeichen.
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int woerter = 0;
      int zahlen = 0;
      while (sc.hasNext()) {
          if (sc.hasNextInt()) {
              zahlen++;
          }
          woerter++;
          sc.next();
      }
      System.out.println(woerter + " Token, davon " + zahlen + " ganze Zahlen");
    stdin: "Es war  einmal\n ein 2. Versuch\n"
    loesung: |
      6 Token, davon 0 ganze Zahlen
    fehler:
      - wert: "6 Token, davon 1 ganze Zahlen"
        meldung: Das Token heißt `2.` mit Punkt. Mit dem Punkt ist es keine ganze Zahl.
      - wert: "7 Token, davon 0 ganze Zahlen"
        meldung: Mehrere Leerzeichen hintereinander erzeugen kein leeres Token.
hinweise:
  - Zähle die Token beider Zeilen. Prüfe dann jedes, ob es nur aus Ziffern besteht.
loesung: |
  **Ansatz:** Token zählen und jedes auf `int` prüfen. `sc.next()` entnimmt in jedem Durchlauf eines.
  ---
  Die Token sind `Es`, `war`, `einmal`, `ein`, `2.` und `Versuch`, also 6.
  ---
  `2.` endet mit einem Punkt und ist keine ganze Zahl. Darum sind es 0 ganze Zahlen.
```

```aufgabe
id: ei-mix-vokale
titel: Vokale in einer Zeile zählen
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe `main`. Die Eingabe beginnt mit einer ganzen Zahl `n` in der ersten Zeile. Danach folgen `n`
  Zeilen Text. Gib für jede Textzeile in einer eigenen Zeile die Anzahl der Vokale aus (`a e i o u`, klein
  und groß). Umlaute zählen nicht mit.

  Beispiel: Eingabe `2`, `Hallo Welt`, `EP1 ist super` ergibt die Zeilen `3` und `4`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Vokale {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Vokale {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int n = sc.nextInt();
              sc.nextLine();
              for (int k = 0; k < n; k++) {
                  String zeile = sc.nextLine();
                  int anzahl = 0;
                  for (int i = 0; i < zeile.length(); i++) {
                      if ("aeiouAEIOU".indexOf(zeile.charAt(i)) >= 0) {
                          anzahl++;
                      }
                  }
                  System.out.println(anzahl);
              }
          }
      }
    tests:
      - { stdin: "2\nHallo Welt\nEP1 ist super\n", stdout: "3\n4\n", beschreibung: "2 Zeilen: Hallo Welt / EP1 ist super" }
      - { stdin: "3\nxyz\n\nOUI\n", stdout: "0\n0\n3\n", beschreibung: "mit leerer Zeile" }
      - { stdin: "1\n  Ein Esel  \n", stdout: "4\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Kommt bei dir als erste Zahl 0 heraus und fehlt eine Zeile? Nach nextInt() liegt der Zeilenumbruch noch im Puffer. Entferne ihn mit sc.nextLine(), bevor du die Textzeilen liest." }
      - { wert: 2, meldung: "Eine leere Zeile ist eine eigene Textzeile mit 0 Vokalen. Liest du die Zeilen mit nextLine()?" }
hinweise:
  - Nach `nextInt()` für `n` musst du den Puffer mit `sc.nextLine();` leeren. Danach liest jedes `nextLine()` genau eine Textzeile.
  - Eine innere Schleife läuft über die Zeichen der Zeile. Ob ein Zeichen ein Vokal ist, prüft `"aeiouAEIOU".indexOf(c) >= 0`.
loesung: |
  **Ansatz:** Zahl lesen, Puffer leeren, dann `n` Zeilen mit `nextLine()`. Pro Zeile die Vokale mit einer Schleife wie in [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen) zählen.
  ---
  ```java
  int n = sc.nextInt();
  sc.nextLine();
  for (int k = 0; k < n; k++) {
      String zeile = sc.nextLine();
      int anzahl = 0;
      for (int i = 0; i < zeile.length(); i++) {
          if ("aeiouAEIOU".indexOf(zeile.charAt(i)) >= 0) {
              anzahl++;
          }
      }
      System.out.println(anzahl);
  }
  ```
  ---
  Ohne `sc.nextLine();` nach `nextInt()` wäre die erste „Textzeile“ der leere Rest der Zeile mit `n`, und die letzte Zeile würde nie gelesen.
  ---
  Probe: `Hallo Welt` enthält a, o, e, also 3. `EP1 ist super` enthält E, i, u, e, also 4. Die Ziffer 1 und das P sind keine Vokale.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Aufgabenblatt und Quiz. Die ersten beiden sind im Format der TUWEL-Quiz
gestellt (Single Choice mit drei Optionen und Richtig/Falsch mit vier Aussagen). Danach folgen drei
Blattaufgaben zum Programmieren, nachgebaut nach Blatt 2 (WS 2023) und dem Wörterraten (SS 2020), und eine
Aufgabe für das Feedbackgespräch. Plane die angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen
aufdeckst. Das Quizformat 2026W ist nicht veröffentlicht. Die Aufgaben folgen den TUWEL-Tests 2021 bis 2023.

```aufgabe
id: ei-pa-quiz
titel: Drei Quizfragen zum Einlesen
niveau: 3
punkte: 3
lernziel: 2
kompetenz: anwenden
quelle: Format nach TUWEL-Test 1 (Single Choice, drei Optionen), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) In allen Fragen ist `sc` ein Scanner auf `System.in`.

  **a)** Die Eingabe ist `5⏎Wien⏎`. Welchen Wert hat `s` nach `int n = sc.nextInt(); String s = sc.nextLine();`?

  **b)** Die Eingabe ist `x 3`. Was passiert bei `while (!sc.hasNextInt()) { System.out.println("?"); } int n = sc.nextInt();`?

  **c)** Welcher Ausdruck liefert eine Zufallszahl aus [5, 15], wenn `rnd` ein `Random`-Objekt ist?
teile:
  - typ: auswahl
    label: a)
    optionen: ['`""` (der leere String)', '`"Wien"`', '`"5"`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach `nextInt()` steht der Lesezeiger vor dem Zeilenumbruch hinter der 5. `nextLine()` liest nur den leeren Rest dieser Zeile.
      - wert: 2
        meldung: Die 5 hat `nextInt()` schon entnommen. `nextLine()` beginnt dahinter.
  - typ: auswahl
    label: b)
    optionen: ['Das Programm gibt endlos `?` aus.', 'Es gibt einmal `?` aus und liest dann 3.', 'Es bricht mit einer `InputMismatchException` ab.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Im Schleifenrumpf wird `x` nicht entnommen. `hasNextInt()` sieht jedes Mal wieder `x`.
      - wert: 2
        meldung: '`hasNextInt()` wirft keine Exception. Und `nextInt()` wird nie erreicht, weil die Schleife nicht endet.'
  - typ: auswahl
    label: c)
    optionen: ['`rnd.nextInt(11) + 5`', '`rnd.nextInt(15) + 5`', '`rnd.nextInt(10) + 5`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`nextInt(15) + 5` liefert 5 bis 19. Die Schranke ist die Anzahl der Zahlen, hier 15 − 5 + 1 = 11.'
      - wert: 2
        meldung: '`nextInt(10) + 5` liefert 5 bis 14. Die 15 fehlt, weil die Schranke ausgeschlossen ist.'
hinweise:
  - a) Verfolge den Lesezeiger. b) Was nimmt der Schleifenrumpf aus dem Puffer?
  - c) Ein Intervall [a, b] hat `b - a + 1` ganze Zahlen.
loesung: |
  **Ansatz:** Jede Frage mit dem passenden Modell beantworten: Lesezeiger, Schauen gegenüber Nehmen, Intervallformel.
  ---
  a) `nextInt()` liest 5 und lässt den Zeilenumbruch liegen. `nextLine()` liefert `""`.
  ---
  b) Der Rumpf entnimmt nichts. `hasNextInt()` sieht immer wieder `x`, und `?` erscheint endlos.
  ---
  c) [5, 15] hat 11 Zahlen: `rnd.nextInt(11)` liefert 0 bis 10, plus 5 ergibt 5 bis 15.
```

```aufgabe
id: ei-pa-rf
titel: Vier Aussagen zu einem Programm
niveau: 3
punkte: 2
lernziel: 3
kompetenz: anwenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist dieses Programm. Die Eingabe ist `4 vier 4.0 -4 40`.

  ```java
  import java.util.Scanner;

  public class Vier {
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          int summe = 0;
          int fehler = 0;
          while (sc.hasNext()) {
              if (sc.hasNextInt()) {
                  summe += sc.nextInt();
              } else {
                  fehler++;
                  sc.next();
              }
          }
          System.out.println(summe + " " + fehler);
      }
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Ausgabe ist `40 2`.
        richtig: true
        erklaerung: Gültige ganze Zahlen sind 4, −4 und 40, Summe 40. `vier` und `4.0` zählen als Fehler.
      - text: Lässt man `sc.next();` im `else`-Zweig weg, entsteht bei dieser Eingabe eine Endlosschleife.
        richtig: true
        erklaerung: Dann bleibt `vier` vorne liegen. `hasNext()` ist immer wahr, `hasNextInt()` immer falsch.
      - text: Ersetzt man `sc.next();` durch `sc.nextLine();`, ist die Ausgabe dieselbe.
        richtig: false
        erklaerung: '`nextLine()` würde ab `vier` den ganzen Rest der Zeile wegwerfen, also auch `4.0 -4 40`. Die Ausgabe wäre `4 1`.'
      - text: Die Schleife endet nie, weil `hasNext()` an der Tastatur immer auf Eingaben wartet.
        richtig: false
        erklaerung: Bei einer eingespeisten Eingabe ist irgendwann das Ende erreicht, und `hasNext()` liefert `false`. Nur beim Tippen wartet es auf weitere Eingaben.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`nextLine()` entfernt nicht ein Token, sondern den ganzen Rest der Zeile. Hier stehen alle Token in einer Zeile.'
      - wert: [f, r, f, f]
        meldung: '`-4` ist eine gültige ganze Zahl, und `4.0` ist keine. Zähle die Summe noch einmal.'
hinweise:
  - Bestimme für jedes Token, ob `hasNextInt()` wahr ist.
  - Für die dritte Aussage überlege, wie viel `nextLine()` entnimmt, wenn alles in einer Zeile steht.
loesung: |
  **Ansatz:** Das Programm einmal mit der Eingabe durchspielen, dann jede Änderung gedanklich ausprobieren.
  ---
  Token: `4` (int), `vier` (Fehler), `4.0` (Fehler), `-4` (int), `40` (int). Summe 4 − 4 + 40 = 40, Fehler 2. Aussage 1 ist richtig.
  ---
  Ohne `sc.next()` bleibt `vier` liegen: Endlosschleife, Aussage 2 ist richtig. Mit `nextLine()` verschwindet nach `vier` der Rest der Zeile: Ausgabe `4 1`, Aussage 3 ist falsch.
  ---
  Aussage 4 ist falsch: Am Ende der eingespeisten Eingabe liefert `hasNext()` den Wert `false`.
```

````aufgabe
id: ei-pa-taschenrechner
titel: Der Taschenrechner aus Blatt 2
niveau: 3
punkte: 6
lernziel: 6
kompetenz: modellieren
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 4, und SS 2023, Aufgabe 4 (Taschenrechner, nachgebaut und umformuliert)
angabe: |
  (Zeitrichtwert: 35 Minuten) Implementiere einen Taschenrechner mit den drei vorgegebenen Methoden und
  einer Schleife in `main`. Alle Eingaben stehen **jeweils in einer eigenen Zeile**. Alle Ausgaben müssen
  genau so aussehen wie angegeben.

  - `int readOperand(Scanner sc)` gibt einmal `Zahl:` aus. Dann liest sie so lange Zeilen, bis eine Zeile
    mit einer ganzen Zahl beginnt. Jede andere Zeile wird mit der Meldung `Ungueltige Zahl!` verworfen. Nach
    der Zahl wird der Rest der Zeile entfernt. Rückgabe: die Zahl. Leere Zeilen kommen in der Eingabe nicht vor.
  - `char readOperator(Scanner sc)` gibt einmal `Operator (+, -, *, / oder %):` aus. Gültig ist eine Zeile, die
    aus genau einem dieser fünf Zeichen besteht. Andere Zeilen: Meldung `Ungueltiger Operator!`.
  - `boolean readContinue(Scanner sc)` gibt einmal `Weiter mit c/C, Ende mit q/Q:` aus. Gültig sind die
    Zeilen `c`, `C`, `q`, `Q`. Andere Zeilen: Meldung `Ungueltige Eingabe!`. Rückgabe `true` bei `c` oder `C`.

  `main` liest pro Runde zwei Operanden und einen Operator und gibt das Ergebnis in der Form
  `<a> <op> <b> = <Ergebnis>` aus. Bei `/` ist das Ergebnis ein `double`, bei allen anderen Operatoren ein
  `int`. Ist bei `/` oder `%` der zweite Operand 0, wird statt des Ergebnisses `Division durch 0!`
  ausgegeben. Danach fragt `readContinue`. Bei `c` oder `C` erscheint `Naechste Rechnung:` und eine neue
  Runde beginnt. Bei `q` oder `Q` endet das Programm mit `Rechnung beendet!`.

  Beispiel: Die Eingabe `39`, `4`, `/`, `q` (vier Zeilen) ergibt

  ```
  Zahl:
  Zahl:
  Operator (+, -, *, / oder %):
  39 / 4 = 9.75
  Weiter mit c/C, Ende mit q/Q:
  Rechnung beendet!
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Taschenrechner {
          public static int readOperand(Scanner sc) {
              return 0; // TODO
          }

          public static char readOperator(Scanner sc) {
              return '+'; // TODO
          }

          public static boolean readContinue(Scanner sc) {
              return false; // TODO
          }

          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Taschenrechner {
          public static int readOperand(Scanner sc) {
              System.out.println("Zahl:");
              while (!sc.hasNextInt()) {
                  System.out.println("Ungueltige Zahl!");
                  sc.nextLine();
              }
              int zahl = sc.nextInt();
              sc.nextLine();
              return zahl;
          }

          public static char readOperator(Scanner sc) {
              System.out.println("Operator (+, -, *, / oder %):");
              String zeile = sc.nextLine();
              while (zeile.length() != 1 || "+-*/%".indexOf(zeile.charAt(0)) < 0) {
                  System.out.println("Ungueltiger Operator!");
                  zeile = sc.nextLine();
              }
              return zeile.charAt(0);
          }

          public static boolean readContinue(Scanner sc) {
              System.out.println("Weiter mit c/C, Ende mit q/Q:");
              String zeile = sc.nextLine();
              while (!(zeile.equals("c") || zeile.equals("C") || zeile.equals("q") || zeile.equals("Q"))) {
                  System.out.println("Ungueltige Eingabe!");
                  zeile = sc.nextLine();
              }
              return zeile.equals("c") || zeile.equals("C");
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              boolean weiter = true;
              while (weiter) {
                  int a = readOperand(sc);
                  int b = readOperand(sc);
                  char op = readOperator(sc);
                  if ((op == '/' || op == '%') && b == 0) {
                      System.out.println("Division durch 0!");
                  } else if (op == '/') {
                      System.out.println(a + " / " + b + " = " + (double) a / b);
                  } else {
                      int erg;
                      if (op == '+') {
                          erg = a + b;
                      } else if (op == '-') {
                          erg = a - b;
                      } else if (op == '*') {
                          erg = a * b;
                      } else {
                          erg = a % b;
                      }
                      System.out.println(a + " " + op + " " + b + " = " + erg);
                  }
                  weiter = readContinue(sc);
                  if (weiter) {
                      System.out.println("Naechste Rechnung:");
                  }
              }
              System.out.println("Rechnung beendet!");
          }
      }
    tests:
      - stdin: "39\n4\n/\nq\n"
        stdout: "Zahl:\nZahl:\nOperator (+, -, *, / oder %):\n39 / 4 = 9.75\nWeiter mit c/C, Ende mit q/Q:\nRechnung beendet!\n"
        beschreibung: "39 / 4, dann q"
      - stdin: "13\n4\n*\nC\n17\n5\n%\nQ\n"
        stdout: "Zahl:\nZahl:\nOperator (+, -, *, / oder %):\n13 * 4 = 52\nWeiter mit c/C, Ende mit q/Q:\nNaechste Rechnung:\nZahl:\nZahl:\nOperator (+, -, *, / oder %):\n17 % 5 = 2\nWeiter mit c/C, Ende mit q/Q:\nRechnung beendet!\n"
        beschreibung: "zwei Runden: 13 * 4, dann 17 % 5"
      - stdin: "zwoelf\n12\n6.5\n-6\n+-\nplus\n+\nweiter\nq\n"
        stdout: "Zahl:\nUngueltige Zahl!\nZahl:\nUngueltige Zahl!\nOperator (+, -, *, / oder %):\nUngueltiger Operator!\nUngueltiger Operator!\n12 + -6 = 6\nWeiter mit c/C, Ende mit q/Q:\nUngueltige Eingabe!\nRechnung beendet!\n"
        beschreibung: "falsche Eingaben bei Zahl, Operator und Weiter-Frage"
      - stdin: "7\n0\n/\nc\n-7\n2\n/\nq\n"
        stdout: "Zahl:\nZahl:\nOperator (+, -, *, / oder %):\nDivision durch 0!\nWeiter mit c/C, Ende mit q/Q:\nNaechste Rechnung:\nZahl:\nZahl:\nOperator (+, -, *, / oder %):\n-7 / 2 = -3.5\nWeiter mit c/C, Ende mit q/Q:\nRechnung beendet!\n"
        versteckt: true
    fehler:
      - { wert: 1, meldung: "Bei 39 / 4 muss 9.75 herauskommen. Rechnest du mit (double) a / b? Und erscheint vor dem Operator keine zusätzliche Meldung? Dann fehlt nach nextInt() das Entfernen des Zeilenrests." }
      - { wert: 3, meldung: "Wird +- als Operator akzeptiert oder weiter als Antwort? Lies Operator und Weiter-Frage zeilenweise und prüfe die ganze Zeile." }
hinweise:
  - Baue die drei Methoden wie in [8.5 Eingabemethoden und der Taschenrechner](/lernen/ep1/eingabe/eingabemethoden-und-der-taschenrechner). Jede Methode gibt ihre Frage genau einmal aus, vor der Schleife.
  - In `readOperand` verwirfst du ungültige Zeilen mit `sc.nextLine()` und entfernst nach einer gültigen Zahl den Zeilenrest. `main` läuft in einer Schleife, solange `readContinue` den Wert `true` liefert.
loesung: |
  **Ansatz:** Jede Eingabe zeilenweise behandeln. Drei Methoden kapseln Lesen und Prüfen, `main` rechnet und steuert die Wiederholung.
  ---
  `readOperand`: Frage ausgeben, dann `while (!sc.hasNextInt())` mit Meldung und `sc.nextLine()`. Danach `nextInt()` und `sc.nextLine()` für den Zeilenrest. `readOperator` und `readContinue` lesen ganze Zeilen und prüfen sie wie in den Aufgaben „Den Operator einlesen“ und „Weiter oder beenden?“.
  ---
  `main`:
  ```java
  boolean weiter = true;
  while (weiter) {
      int a = readOperand(sc);
      int b = readOperand(sc);
      char op = readOperator(sc);
      if ((op == '/' || op == '%') && b == 0) {
          System.out.println("Division durch 0!");
      } else if (op == '/') {
          System.out.println(a + " / " + b + " = " + (double) a / b);
      } else {
          // erg mit +, -, * oder % berechnen
          System.out.println(a + " " + op + " " + b + " = " + erg);
      }
      weiter = readContinue(sc);
      if (weiter) {
          System.out.println("Naechste Rechnung:");
      }
  }
  System.out.println("Rechnung beendet!");
  ```
  ---
  Die Prüfung auf 0 muss vor der Division stehen. Bei `%` wäre `a % 0` eine `ArithmeticException`, bei `/` käme `Infinity` (bei 0 / 0 sogar `NaN`, „keine Zahl“) heraus.
  ---
  Probe mit Test 3: `zwoelf` und `6.5` werden als Zahl abgelehnt, `+-` und `plus` als Operator, `weiter` als Antwort. Ergebnis `12 + -6 = 6`.
````

````aufgabe
id: ei-pa-buchstabe
titel: Einen Buchstaben für das Wörterraten einlesen
niveau: 3
punkte: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 2 SS 2020, Aufgabe 4 (`getUserInput`, nachgebaut)
angabe: |
  (Zeitrichtwert: 12 Minuten) Implementiere `char getUserInput(Scanner sc)`. Die Methode liest
  **zeilenweise**. Gültig ist eine Zeile, die aus genau einem Buchstaben von `a` bis `z` oder von `A` bis `Z`
  besteht. Für jede ungültige Zeile gibt sie `Bitte genau einen Buchstaben eingeben.` aus und liest die
  nächste. Einen gültigen Großbuchstaben wandelt sie in den entsprechenden Kleinbuchstaben um und liefert
  ihn. Erlaubt sind von `String` nur `length`, `charAt` und `equals`.

  Beispiel: Die Eingabe `ab`, `7`, `E` (drei Zeilen) ergibt zwei Meldungen und liefert `'e'`.
  Vorbedingung: `sc != null`, und es kommt irgendwann eine gültige Zeile.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Buchstabe {
          public static char getUserInput(Scanner sc) {
              return 'a'; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Buchstabe {
          public static char getUserInput(Scanner sc) {
              String zeile = sc.nextLine();
              while (zeile.length() != 1
                      || !((zeile.charAt(0) >= 'a' && zeile.charAt(0) <= 'z')
                           || (zeile.charAt(0) >= 'A' && zeile.charAt(0) <= 'Z'))) {
                  System.out.println("Bitte genau einen Buchstaben eingeben.");
                  zeile = sc.nextLine();
              }
              char c = zeile.charAt(0);
              if (c >= 'A' && c <= 'Z') {
                  c = (char) (c + ('a' - 'A'));
              }
              return c;
          }
      }
    tests:
      - { aufruf: "getUserInput(new Scanner(System.in))", stdin: "ab\n7\nE\n", erwartet: "'e'", beschreibung: "ab, 7, dann E: liefert e" }
      - { aufruf: "getUserInput(new Scanner(System.in))", stdin: "q\n", erwartet: "'q'", beschreibung: "Kleinbuchstabe bleibt" }
      - { aufruf: "getUserInput(new Scanner(System.in))", stdin: "\n[\n`\n{\n@\nZ\n", erwartet: "'z'", beschreibung: "leere Zeile und Nachbarzeichen der Buchstaben sind ungültig" }
      - aufruf: "getUserInput(new Scanner(System.in))"
        stdin: "x y\nA\n"
        stdout: "Bitte genau einen Buchstaben eingeben.\n"
        versteckt: true
    regeln: { erlaubteApi: ["String.length", "String.charAt", "String.equals", "Scanner"] }
    fehler:
      - { wert: 3, meldung: "Stürzt die Methode bei der leeren Zeile ab, oder werden die Zeichen [ ` { @ akzeptiert? Prüfe zuerst die Länge und dann beide Buchstabenbereiche mit >= und <=." }
      - { wert: 1, meldung: "Aus E muss e werden. Der Abstand zwischen Groß- und Kleinbuchstaben ist 'a' - 'A', also 32." }
hinweise:
  - Lies mit `nextLine()`. Gültig ist die Zeile bei Länge 1 und einem Zeichen in `'a'` bis `'z'` oder `'A'` bis `'Z'`.
  - 'Umwandeln: `(char) (c + (''a'' - ''A''))`. Die Zeichen `[`, `` ` ``, `{` und `@` liegen in der Zeichentabelle direkt neben den Buchstaben und müssen abgelehnt werden.'
loesung: |
  **Ansatz:** Zeilenweise lesen, Länge und Zeichenbereich prüfen, dann Großbuchstaben umwandeln.
  ---
  Die Bedingung für „ungültig“:
  ```java
  zeile.length() != 1
      || !((zeile.charAt(0) >= 'a' && zeile.charAt(0) <= 'z')
           || (zeile.charAt(0) >= 'A' && zeile.charAt(0) <= 'Z'))
  ```
  Dank `||` wird `charAt(0)` bei einer leeren Zeile nie aufgerufen.
  ---
  Umwandeln mit der Zeichenarithmetik aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char): `'E' + ('a' - 'A')` ist 69 + 32 = 101, als `char` ist das `'e'`.
  ---
  Probe mit `ab`, `7`, `E`: `ab` hat Länge 2, `7` ist kein Buchstabe, `E` wird zu `'e'`.
````

````aufgabe
id: ei-pa-woerterraten
titel: Wörterraten auf der Konsole
niveau: 3
punkte: 5
lernziel: 7
kompetenz: modellieren
quelle: Aufgabenblatt 2 SS 2020, Aufgabe 4 (`runGame`, ohne Grafik nachgebaut)
angabe: |
  (Zeitrichtwert: 30 Minuten) Implementiere zwei Methoden für ein Wörterraten auf der Konsole.

  **a)** `String maske(String wort, String erraten)` liefert `wort`, in dem jeder Buchstabe, der **nicht**
  in `erraten` vorkommt, durch `_` ersetzt ist. `erraten` enthält nur Kleinbuchstaben. Der Vergleich
  ignoriert Groß- und Kleinschreibung, angezeigt wird aber der Buchstabe aus `wort`.
  Beispiel: `maske("Telefon", "etn")` liefert `"Te_e__n"`.

  **b)** `void spiele(Scanner sc, String wort, int versuche)` führt das Spiel durch. In jeder Runde wird mit
  `sc.next()` ein Token gelesen.

  - Ist das Token nicht genau ein Kleinbuchstabe von `a` bis `z`, gib `Ungueltig` aus. Das kostet keinen Versuch.
  - Kommt der Buchstabe im Wort vor und wurde noch nicht geraten, wird er aufgedeckt.
  - Kommt er nicht vor oder wurde er schon geraten, kostet das einen Versuch.
  - Nach jedem gültigen Token gib eine Zeile `<Maske> (<verbleibende Versuche>)` aus.

  Das Spiel endet, wenn alle Buchstaben aufgedeckt sind (Ausgabe `Gewonnen!`) oder keine Versuche mehr
  übrig sind (Ausgabe `Verloren!`).

  Beispiel: `spiele(sc, "Java", 2)` mit der Eingabe `a x j A a v` gibt aus:

  ```
  _a_a (2)
  _a_a (1)
  Ja_a (1)
  Ungueltig
  Ja_a (0)
  Verloren!
  ```

  Vorbedingungen: `wort` besteht nur aus Buchstaben und ist nicht leer, `versuche > 0`, und es kommen genug
  Token. Erlaubt sind von `String` nur `length`, `charAt`, `equals` und `indexOf`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Woerterraten {
          public static String maske(String wort, String erraten) {
              return wort; // TODO
          }

          public static void spiele(Scanner sc, String wort, int versuche) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Woerterraten {
          public static String maske(String wort, String erraten) {
              String m = "";
              for (int i = 0; i < wort.length(); i++) {
                  char c = wort.charAt(i);
                  char klein = c;
                  if (c >= 'A' && c <= 'Z') {
                      klein = (char) (c + ('a' - 'A'));
                  }
                  if (erraten.indexOf(klein) >= 0) {
                      m = m + c;
                  } else {
                      m = m + '_';
                  }
              }
              return m;
          }

          public static void spiele(Scanner sc, String wort, int versuche) {
              String erraten = "";
              while (versuche > 0 && maske(wort, erraten).indexOf('_') >= 0) {
                  String t = sc.next();
                  if (t.length() != 1 || t.charAt(0) < 'a' || t.charAt(0) > 'z') {
                      System.out.println("Ungueltig");
                  } else {
                      char b = t.charAt(0);
                      boolean neu = erraten.indexOf(b) < 0;
                      boolean drin = !maske(wort, "" + b).equals(maske(wort, ""));
                      if (neu && drin) {
                          erraten = erraten + b;
                      } else {
                          versuche--;
                      }
                      System.out.println(maske(wort, erraten) + " (" + versuche + ")");
                  }
              }
              if (maske(wort, erraten).indexOf('_') < 0) {
                  System.out.println("Gewonnen!");
              } else {
                  System.out.println("Verloren!");
              }
          }
      }
    tests:
      - { aufruf: "maske(\"Telefon\", \"etn\")", erwartet: "\"Te_e__n\"", beschreibung: "maske(\"Telefon\", \"etn\")" }
      - { aufruf: "maske(\"Wien\", \"\")", erwartet: "\"____\"", beschreibung: "nichts erraten" }
      - { aufruf: "maske(\"Otto\", \"ot\")", erwartet: "\"Otto\"", beschreibung: "Großbuchstabe am Anfang" }
      - { aufruf: "spiele(new Scanner(System.in), \"Java\", 2)", stdin: "a x j A a v\n", stdout: "_a_a (2)\n_a_a (1)\nJa_a (1)\nUngueltig\nJa_a (0)\nVerloren!\n", beschreibung: "spiele(sc, \"Java\", 2) mit a x j A a v" }
      - { aufruf: "spiele(new Scanner(System.in), \"Otto\", 3)", stdin: "t e o\n", stdout: "_tt_ (3)\n_tt_ (2)\nOtto (2)\nGewonnen!\n", beschreibung: "spiele(sc, \"Otto\", 3) mit t e o" }
      - { aufruf: "spiele(new Scanner(System.in), \"Ei\", 1)", stdin: "ei 1 i e\n", stdout: "Ungueltig\nUngueltig\n_i (1)\nEi (1)\nGewonnen!\n", versteckt: true }
    regeln: { erlaubteApi: ["String.length", "String.charAt", "String.equals", "String.indexOf", "Scanner"] }
    fehler:
      - { wert: 3, meldung: "Bleibt das große O von Otto verdeckt? Wandle für den Vergleich jeden Buchstaben des Worts in einen Kleinbuchstaben um, zeige aber den Originalbuchstaben." }
      - { wert: 4, meldung: "Ein schon geratener Buchstabe (hier das zweite a) kostet einen Versuch, ebenso ein Buchstabe, der nicht vorkommt. Ein ungültiges Token wie A (Großbuchstabe) kostet keinen." }
hinweise:
  - Für `maske` läuft eine Schleife über `wort`. Für den Vergleich machst du aus einem Großbuchstaben mit `(char) (c + ('a' - 'A'))` einen Kleinbuchstaben und prüfst `erraten.indexOf(klein) >= 0`.
  - 'Für `spiele`: Ob ein Buchstabe `b` im Wort vorkommt, erkennst du daran, dass `maske(wort, "" + b)` sich von `maske(wort, "")` unterscheidet. Gewonnen ist, wenn `maske(wort, erraten)` keinen `_` mehr enthält.'
loesung: |
  **Ansatz:** `maske` erledigt die ganze Anzeige-Logik. `spiele` merkt sich die erratenen Buchstaben in einem String und fragt `maske` um Rat.
  ---
  a) Schleife über `wort`, jeden Buchstaben für den Vergleich klein machen und je nach `erraten.indexOf(klein) >= 0` den Originalbuchstaben oder `_` anhängen.
  ---
  b) Kern der Spielschleife:
  ```java
  String erraten = "";
  while (versuche > 0 && maske(wort, erraten).indexOf('_') >= 0) {
      String t = sc.next();
      if (t.length() != 1 || t.charAt(0) < 'a' || t.charAt(0) > 'z') {
          System.out.println("Ungueltig");
      } else {
          char b = t.charAt(0);
          boolean neu = erraten.indexOf(b) < 0;
          boolean drin = !maske(wort, "" + b).equals(maske(wort, ""));
          if (neu && drin) {
              erraten = erraten + b;
          } else {
              versuche--;
          }
          System.out.println(maske(wort, erraten) + " (" + versuche + ")");
      }
  }
  ```
  Danach `Gewonnen!`, wenn keine `_` mehr übrig sind, sonst `Verloren!`.
  ---
  Probe mit `Java`, 2 Versuchen und `a x j A a v`: `a` ist neu und kommt vor, `_a_a (2)`. `x` kommt nicht vor, `_a_a (1)`. `j` deckt das große J auf, `Ja_a (1)`.
  ---
  `A` ist kein Kleinbuchstabe: `Ungueltig`, kein Versuch weg. Das zweite `a` wurde schon geraten und kostet den letzten Versuch: `Ja_a (0)`. Die Schleife endet, im Wort steht noch ein `_`, also `Verloren!`. Das `v` wird nie gelesen.
````

````aufgabe
id: ei-pa-feedback
titel: Zusatzfragen im Feedbackgespräch
niveau: 3
punkte: 2
lernziel: 3
kompetenz: begruenden
quelle: Aufgabenblatt 2 WS 2021, Aufgabe 5, Zusatzfragen 1 und 2 (ergänzt)
angabe: |
  (Zeitrichtwert: 8 Minuten) Beantworte die Fragen in ganzen Sätzen, so wie du sie im Feedbackgespräch
  mündlich beantworten würdest.

  1. Wie können die eingegebenen Daten (beziehungsweise deren Datentypen) bei der Verwendung des Scanners
     unterschieden werden?
  2. Warum muss eine ungültige Eingabe aus dem Eingabestrom des Scanners entfernt werden?
  3. Warum bekommt deine Methode `readIntValue` den Scanner als Parameter, statt selbst einen zu erzeugen?
  4. Was ist der Unterschied zwischen `next()` und `nextLine()`?
teile:
  - typ: text
    muster: |
      1. Der Scanner zerlegt die Eingabe an Leerraum in Token. Mit den has-Methoden prüfe ich, bevor ich
         lese, welche Form das nächste Token hat: `hasNextInt()` für eine ganze Zahl, `hasNextDouble()`
         für eine Kommazahl, `hasNext()` für irgendein Token. Erst danach lese ich mit `nextInt()`,
         `nextDouble()` oder `next()`.
      2. Die has-Methoden schauen nur und entnehmen nichts, und auch ein gescheitertes `nextInt()` lässt
         das Token liegen. Ohne Entfernen sieht jede weitere Prüfung dasselbe ungültige Token, und die
         Validierungsschleife läuft endlos. Darum entferne ich es mit `sc.next()` oder die ganze Zeile mit
         `sc.nextLine()`.
      3. Ein Scanner hält gelesene Zeichen in seinem Puffer. Ein zweiter Scanner auf `System.in` kennt
         diesen Puffer nicht, und Eingaben gehen verloren, vor allem wenn sie auf einmal ankommen. Mit einem
         gemeinsamen Scanner als Parameter liest jede Methode genau dort weiter, wo die vorige aufgehört hat.
      4. `next()` überspringt Leerraum und liefert ein einzelnes Wort. `nextLine()` überspringt nichts und
         liefert den Rest der aktuellen Zeile samt Leerzeichen, auch den leeren String. Nach `nextInt()`
         liefert `nextLine()` deshalb oft `""`, und man muss den Puffer vorher mit einem zusätzlichen
         `sc.nextLine()` leeren.
hinweise:
  - Denk an das Bild vom Briefkasten mit Sichtfenster und an den Lesezeiger.
  - Jede Antwort braucht einen Grund, nicht nur eine Behauptung. Nenne zu Frage 3 die Ursache „Puffer“.
loesung: |
  **Ansatz:** Jede Frage mit dem passenden Begriff beantworten: Token und has-Methoden, Schauen gegenüber Nehmen, Puffer, Lesezeiger.
  ---
  1 und 2: Typ vorher mit `hasNextInt()` und Co. prüfen. Ungültiges muss entnommen werden, weil die Prüfung sonst immer dasselbe Token sieht.
  ---
  3: Ein Scanner pro Programm, sonst gehen Eingaben im Puffer eines anderen Scanners verloren.
  ---
  4: `next()` liest ein Token, `nextLine()` den Rest der Zeile. Daraus folgt die nextLine-Falle nach `nextInt()`.
````

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Der Scanner zerlegt die Eingabe an Leerraum in Token. `next()`, `nextInt()`
  und `nextDouble()` lesen je ein Token, `nextLine()` liest den Rest der aktuellen Zeile. (2) Nach
  `nextInt()` bleibt der Zeilenumbruch im Puffer. Ein folgendes `nextLine()` liefert dann `""`, darum
  leert man den Puffer vorher mit einem zusätzlichen `sc.nextLine();`. (3) Eingaben prüft man vor dem
  Lesen mit `hasNextInt()` in einer Schleife und entfernt ungültige Token mit `next()`, sonst entsteht eine
  Endlosschleife. Ebenso gute Antworten sind „ein Scanner pro Programm, als Parameter weitergeben“ oder
  die Intervallformel `rnd.nextInt(b - a + 1) + a`.
```

:::zusammenfassung
1. **Einlesen braucht drei Zeilen:** `import java.util.Scanner;`, einmal `Scanner sc = new Scanner(System.in);` und dann ein passender Leseaufruf wie `int n = sc.nextInt();`. Das Programm wartet an dieser Stelle auf eine Eingabe mit Enter. Die Eingabe selbst ist nicht Teil der Programmausgabe.
2. **Token:** Der Scanner sieht die Eingabe als einen langen Text und trennt sie an Leerraum (Leerzeichen, Tabulator, Zeilenumbruch). `next()` liefert das nächste Token als `String`, `nextInt()` und `nextDouble()` als Zahl. Passt das Token nicht, kommt eine `InputMismatchException`, fehlt es, eine `NoSuchElementException`.
3. **nextLine** liest den Rest der aktuellen Zeile ohne den Zeilenumbruch und überspringt nichts. Nach `nextInt()`, `nextDouble()` oder `next()` liegt der Zeilenumbruch noch im Puffer. Darum liefert ein folgendes `nextLine()` den leeren String, bis man den Puffer mit einem zusätzlichen `sc.nextLine();` leert.
4. **Validieren:** `hasNextInt()`, `hasNextDouble()` und `hasNext()` schauen nur und entnehmen nichts. In einer Schleife `while (!sc.hasNextInt())` muss jedes ungültige Token mit `sc.next()` (oder die Zeile mit `sc.nextLine()`) entfernt werden, sonst läuft die Schleife endlos. Danach prüft man, falls nötig, den Wertebereich.
5. **Eingabemethoden** bekommen den einen gemeinsamen Scanner als Parameter und liefern den fertig geprüften Wert mit dem passenden Typ (`int`, `char`, `boolean`). Einzelne Zeichen liest man als Zeile und prüft `length() == 1` vor `charAt(0)`.
6. **Taschenrechner:** `main` liest mit den Eingabemethoden, rechnet bei `/` mit `(double) a / b`, fängt den Divisor 0 ab und wiederholt in einer Schleife, solange die Weiter-Frage `true` liefert.
7. **Random:** `rnd.nextInt(n)` liefert 0 bis n − 1. Eine Zahl aus [a, b] liefert `rnd.nextInt(b - a + 1) + a`. Mit einem festen Seed wie `new Random(42)` kommt bei jedem Start dieselbe Folge, das macht Tests reproduzierbar.
8. **Ratespiel:** Ungültige Eingaben werden in der Lesemethode abgefangen und kosten keinen Versuch. Die Schleife endet, wenn die Zahl erraten oder die Versuche verbraucht sind.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt,
löse die genannte Aufgabe noch einmal.

1. **`import java.util.Scanner;` vergessen** oder `new Scanner()` ohne `System.in`. Training: „Fehler beim Einlesen finden“. Zu finden in [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm).
2. **Leseaufruf passt nicht zum Typ** (`int n = sc.next();`) oder fehlende Klammern (`sc.nextInt`). Training: „Fehler beim Einlesen finden“ und „Die drei Zeilen ergänzen“. Zu finden in [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm).
3. **Die Eingabe zur Ausgabe gezählt oder `print` und `println` verwechselt.** Training: „Drei Fragen mit print“. Zu finden in [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm).
4. **Token falsch zerlegt**, etwa `12abc` für die Zahl 12 gehalten oder `4.0` für eine ganze Zahl. Training: „Welche Token nimmt nextInt?“ und „Wo bricht es ab?“. Zu finden in [8.2 Wie der Scanner die Eingabe zerlegt](/lernen/ep1/eingabe/wie-der-scanner-die-eingabe-zerlegt).
5. **Die nextLine-Falle:** Nach `nextInt()` liefert `nextLine()` den leeren String. Training: „Warum fehlt der Titel?“ und „Alter, Stadt und Lieblingsessen“. Zu finden in [8.3 Ganze Zeilen und die nextLine-Falle](/lernen/ep1/eingabe/ganze-zeilen-und-die-nextline-falle).
6. **Den Puffer an der falschen Stelle geleert** und damit eine echte Eingabezeile weggeworfen. Training: „Wo gehört das Leeren hin?“ und „Mit geleertem Puffer“. Zu finden in [8.3 Ganze Zeilen und die nextLine-Falle](/lernen/ep1/eingabe/ganze-zeilen-und-die-nextline-falle).
7. **Ungültiges Token nicht entfernt**, die Validierungsschleife läuft endlos. Training: „Warum hängt das Programm?“. Zu finden in [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).
8. **`if` statt `while`:** Nur ein zweiter Versuch, beim zweiten Fehler stürzt das Programm ab. Training: „Welche Schleife für die Validierung?“. Zu finden in [8.7 Gemischte Wiederholung](/lernen/ep1/eingabe/gemischte-wiederholung).
9. **In jeder Methode einen neuen Scanner erzeugt**, sodass Eingaben im Puffer verloren gehen. Training: „Kopf für die Weiter-Frage“ und „readIntValue implementieren“. Zu finden in [8.5 Eingabemethoden und der Taschenrechner](/lernen/ep1/eingabe/eingabemethoden-und-der-taschenrechner).
10. **Operator mit `next().charAt(0)` gelesen** oder `charAt(0)` vor der Längenprüfung aufgerufen, sodass `+-` als `+` gilt oder eine leere Zeile abstürzt. Training: „Den Operator einlesen“ und „Die Bedingung für einen gültigen Operator“. Zu finden in [8.5 Eingabemethoden und der Taschenrechner](/lernen/ep1/eingabe/eingabemethoden-und-der-taschenrechner).
11. **`nextInt(120)` für [0, 120] oder `(int) Math.random() * 121`.** Training: „Zufallszahl zwischen zwei Grenzen“ und „Das Ratespiel liefert immer 0“. Zu finden in [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel).
12. **Ungültige Tipps als Versuch gezählt.** Training: „Eine Runde Ratespiel vorhersagen“ und „Eine Spielrunde als Methode“. Zu finden in [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig,
**3** = sicher, auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich
bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Ein Programm mit Scanner schreiben und zu einer Eingabe die Ausgabe exakt angeben.
2. Für eine Eingabe bestimmen, was `next`, `nextInt` und `nextDouble` liefern und wann eine Exception kommt.
3. Die nextLine-Falle erkennen, erklären und beheben.
4. Eingaben mit `hasNextInt` prüfen und ungültige Eingaben entfernen.
5. Eine Eingabemethode wie `readIntValue` mit Scanner-Parameter und Intervallprüfung schreiben.
6. Einzelzeichen wie Operator oder `q`/`c` zeilenweise einlesen und prüfen.
7. Den Taschenrechner mit Schleife und richtiger Division zusammensetzen.
8. Zufallszahlen in einem Intervall erzeugen, einen Seed setzen und ein Ratespiel programmieren.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein
**Feedbackgespräch**. Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen typische
Fragen zu Blatt 2 (Taschenrechner, Ratespiel) und Blatt 5 (`readIntValue`). Formuliere zuerst laut eine
eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den
Kernpunkten.

```karten
- id: ei-karte-scanner
  frage: Was brauchst du, um in Java eine ganze Zahl von der Tastatur einzulesen? Erkläre jede Zeile.
  antwort: |
    Zuerst `import java.util.Scanner;`, weil die Klasse im Paket `java.util` liegt und sonst unbekannt ist.
    Dann erzeuge ich einmal mit `new Scanner(System.in)` einen Scanner, der aus dem Eingabestrom der
    Tastatur liest. Mit `int n = sc.nextInt();` lese ich die nächste ganze Zahl. Das Programm wartet an
    dieser Stelle, bis eine Eingabe mit Enter abgeschickt wurde.
  kernpunkte:
    - import aus java.util
    - einmal new Scanner(System.in)
    - nextInt wartet auf Eingabe mit Enter
- id: ei-karte-token
  frage: Was ist ein Token, und wie zerlegt der Scanner die Eingabe?
  antwort: |
    Ein Token ist eine zusammenhängende Zeichenfolge ohne Leerraum. Der Scanner sieht die ganze Eingabe als
    einen Text und trennt ihn an Leerzeichen, Tabulatoren und Zeilenumbrüchen. Mehrere Leerräume zählen wie
    einer. `next()`, `nextInt()` und `nextDouble()` überspringen zuerst Leerraum und lesen dann genau ein
    Token. Darum ist es egal, ob zwei Zahlen in einer Zeile oder in zwei Zeilen stehen.
  kernpunkte:
    - Folge ohne Leerraum
    - Leerraum wird übersprungen
    - Zeilen spielen für Token keine Rolle
- id: ei-karte-datentypen
  frage: Wie können die eingegebenen Daten beziehungsweise ihre Datentypen beim Scanner unterschieden werden?
  antwort: |
    Der Scanner sieht nur Text, die Form des Tokens entscheidet. Mit `hasNextInt()`, `hasNextDouble()` und
    `hasNext()` prüfe ich vor dem Lesen, ob das nächste Token eine ganze Zahl, eine Kommazahl oder
    irgendein Token ist. Diese Methoden liefern `true` oder `false` und entnehmen nichts. Danach lese ich mit
    dem passenden Aufruf, ohne Gefahr einer `InputMismatchException`.
  kernpunkte:
    - has-Methoden prüfen die Form
    - liefern boolean, entnehmen nichts
    - danach passender Leseaufruf
- id: ei-karte-entfernen
  frage: Warum muss eine ungültige Eingabe aus dem Eingabestrom des Scanners entfernt werden?
  antwort: |
    Weil weder `hasNextInt()` noch ein gescheitertes `nextInt()` das Token entnimmt. Es bleibt vorne im
    Puffer liegen. Jede weitere Prüfung sieht wieder dasselbe Token, und eine Schleife wie
    `while (!sc.hasNextInt())` läuft endlos. Erst `sc.next()` oder `sc.nextLine()` nimmt es heraus, dann
    kommt die nächste Eingabe an die Reihe.
  kernpunkte:
    - Prüfen entnimmt nichts
    - sonst Endlosschleife
    - entfernen mit next oder nextLine
- id: ei-karte-puffer
  frage: Was ist der Scanner-Puffer, und warum liefert nextLine() nach nextInt() einen leeren String?
  antwort: |
    Der Puffer ist der Zwischenspeicher, in dem der Scanner die eingegebenen Zeichen hält. Ein Lesezeiger
    markiert, was schon entnommen ist. `nextInt()` entnimmt nur die Ziffern und lässt den Zeilenumbruch der
    Enter-Taste liegen. `nextLine()` liest bis zum nächsten Zeilenumbruch, und der steht sofort an. Also
    liefert es die Zeichen davor, und das sind keine. Abhilfe ist ein zusätzliches `sc.nextLine();` vor dem
    eigentlichen `nextLine()`.
  kernpunkte:
    - Puffer als Zwischenspeicher mit Lesezeiger
    - nextInt lässt den Zeilenumbruch liegen
    - zusätzliches nextLine leert den Rest
- id: ei-karte-next-nextline
  frage: Was ist der Unterschied zwischen next() und nextLine()? Nenne ein Beispiel, in dem sie verschiedene Ergebnisse liefern.
  antwort: |
    `next()` überspringt Leerraum und liefert ein einzelnes Wort. `nextLine()` überspringt nichts und
    liefert den Rest der aktuellen Zeile mit allen Leerzeichen, möglicherweise auch den leeren String. Bei
    der Eingabe `Ada Lovelace` liefert `next()` nur `"Ada"`, `nextLine()` dagegen `"Ada Lovelace"`.
  kernpunkte:
    - next ein Token, überspringt Leerraum
    - nextLine Rest der Zeile, überspringt nichts
    - Beispiel mit Leerzeichen im Namen
- id: ei-karte-leeren-falsch
  frage: Warum schreibt man nicht einfach nach jedem Einlesen vorsichtshalber sc.nextLine()?
  antwort: |
    Nach einem `nextLine()` ist der Zeilenumbruch schon entnommen. Ein zusätzliches `sc.nextLine();` würde
    dann eine ganze echte Eingabezeile wegwerfen, oder das Programm bricht mit `No line found` ab, wenn keine
    Zeile mehr kommt. Den Puffer leert man nur, wenn ein `nextLine()` auf `nextInt()`, `nextDouble()` oder
    `next()` folgt.
  kernpunkte:
    - nach nextLine ist der Umbruch schon weg
    - echte Zeile ginge verloren
    - nur nach Token-Aufrufen leeren
- id: ei-karte-exceptions
  frage: Welche zwei Exceptions können beim Einlesen mit nextInt() auftreten, und was unterscheidet sie?
  antwort: |
    Eine `InputMismatchException` kommt, wenn zwar ein Token da ist, es aber keine ganze Zahl ist, etwa
    `vier` oder `4.0`. Eine `NoSuchElementException` kommt, wenn gar kein Token mehr da ist, weil die Eingabe
    zu Ende ist. Bei der ersten bleibt das Token im Puffer liegen. Beide vermeidet man, indem man vorher mit
    `hasNextInt()` beziehungsweise `hasNext()` prüft.
  kernpunkte:
    - InputMismatchException bei falschem Typ
    - NoSuchElementException bei fehlender Eingabe
    - vorher mit has-Methoden prüfen
- id: ei-karte-parameter
  frage: Warum bekommt readIntValue den Scanner als Parameter, statt selbst einen zu erzeugen?
  antwort: |
    Ein Scanner holt sich Eingaben auf Vorrat in seinen Puffer. Ein zweiter Scanner auf `System.in` kennt
    diesen Puffer nicht. Was der erste schon geholt, aber noch nicht geliefert hat, ist für den zweiten
    verloren. Beim Tippen fällt das oft nicht auf, bei eingefügter Eingabe oder automatischen Tests kommt eine
    `NoSuchElementException`. Mit einem gemeinsamen Scanner liest jede Methode dort weiter, wo die vorige
    aufgehört hat. Das ist dieselbe Idee wie bei Parametern in
    [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben): Werte kommen von außen herein.
  kernpunkte:
    - Puffer des ersten Scanners
    - zweiter Scanner verliert Eingaben
    - ein Scanner pro Programm, als Parameter
- id: ei-karte-operator
  frage: Wie liest du einen Operator so ein, dass auch eine Eingabe wie +- abgelehnt wird?
  antwort: |
    Es gibt kein `nextChar()`. Ich lese die ganze Zeile mit `nextLine()` und verlange `zeile.length() == 1`.
    Erst dann prüfe ich mit `charAt(0)`, ob das Zeichen einer der erlaubten Operatoren ist. Die Längenprüfung
    muss zuerst stehen, weil `charAt(0)` bei einer leeren Zeile abstürzen würde. Die Kurzschlussauswertung von
    `||` (siehe [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht)) sorgt dafür, dass der zweite Teil dann gar nicht ausgewertet wird.
  kernpunkte:
    - Zeile lesen, nicht next
    - Länge 1 vor charAt prüfen
    - Kurzschlussauswertung schützt
- id: ei-karte-rueckgabe
  frage: Welchen Rückgabetyp geben deine drei Eingabemethoden im Taschenrechner, und warum?
  antwort: |
    `readOperand` liefert `int`, weil `main` damit rechnet. `readOperator` liefert `char`, weil nach der
    Prüfung genau ein Zeichen feststeht und man es mit `==` oder `switch` vergleichen kann. `readContinue`
    liefert `boolean`, denn die Frage ist nur „weiter oder nicht“. Die Methoden liefern schon geprüfte
    Werte, also muss `main` keine falschen Eingaben mehr behandeln.
  kernpunkte:
    - int, char, boolean nach Verwendung
    - geprüfte Werte zurückgeben
    - main frei von Validierung
- id: ei-karte-division
  frage: Warum schreibst du im Taschenrechner (double) a / b und nicht (double) (a / b)?
  antwort: |
    Bei `(double) (a / b)` wird zuerst mit zwei `int` geteilt, der Nachkommaanteil fällt weg, und erst das
    Ergebnis wird umgewandelt. Aus 39 / 4 würde 9.0. Bei `(double) a / b` wird zuerst `a` zu 39.0, dann ist es
    eine Kommadivision, und es kommt 9.75 heraus. Das ist die Ganzzahldivision aus
    [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
  kernpunkte:
    - Klammer entscheidet über die Reihenfolge
    - int / int schneidet ab
    - Cast vor der Division
- id: ei-karte-random
  frage: Wie erzeugst du eine Zufallszahl im Intervall [0, 120], und warum ist nextInt(120) falsch?
  antwort: |
    Mit `rnd.nextInt(121)`. `nextInt(n)` liefert die Zahlen 0 bis n − 1, die Schranke ist ausgeschlossen.
    Das Intervall [0, 120] hat 121 Zahlen, nach der Regel b − a + 1. `nextInt(120)` liefert nur 0 bis 119, die
    120 käme nie vor. Allgemein für [a, b]: `rnd.nextInt(b - a + 1) + a`.
  kernpunkte:
    - Schranke ausgeschlossen
    - Anzahl b - a + 1
    - allgemeine Formel mit + a
- id: ei-karte-seed
  frage: Was ist ein Seed, und wozu legt man ihn fest?
  antwort: |
    Random berechnet jede Zahl aus der vorigen mit einer festen Formel. Der Seed ist der Startwert dieser
    Rechnung. Mit gleichem Seed, etwa `new Random(42)`, kommt bei jedem Start dieselbe Zahlenfolge. Das nutzt
    man zum Testen: Die geheime Zahl im Ratespiel ist dann immer gleich, und man kann gezielt prüfen, ob die
    Hinweise stimmen. Im fertigen Spiel nimmt man `new Random()` ohne Seed.
  kernpunkte:
    - Startwert der Berechnung
    - gleicher Seed, gleiche Folge
    - reproduzierbare Tests
- id: ei-karte-ratespiel
  frage: Warum kostet im Ratespiel eine ungültige Eingabe keinen Versuch, und wie sorgst du im Code dafür?
  antwort: |
    So verlangt es die Angabe: Nur echte Tipps im erlaubten Bereich, hier [0, 120], sollen zählen. Im Code liegt die ganze
    Validierung in der Lesemethode. Sie kehrt erst mit einem gültigen Tipp zurück. Der Zähler `versuche++`
    steht in `main` erst nach dem Aufruf der Lesemethode. Ungültige Eingaben werden innerhalb der Methode
    gemeldet und verworfen und erreichen den Zähler nie.
  kernpunkte:
    - nur gültige Tipps zählen
    - Validierung in der Lesemethode
    - Zähler nach dem Aufruf
- id: ei-karte-binaer
  frage: Wie gewinnt man das Ratespiel mit 121 möglichen Zahlen und 7 Versuchen sicher?
  antwort: |
    Man tippt immer die Mitte des noch möglichen Bereichs. Jeder Hinweis „größer“ oder „kleiner“ halbiert
    dann den Bereich: 121, höchstens 60, 30, 15, 7, 3, 1 Kandidaten. Spätestens der siebte Tipp trifft.
    Das ist die binäre Suche aus
    [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren).
  kernpunkte:
    - immer die Mitte tippen
    - Bereich halbiert sich
    - 7 Tipps reichen für 121 Zahlen
```
