---
nummer: 6
titel: Methoden, Überladen, Vor- und Nachbedingungen
kurz: Eigene Methoden schreiben und aufrufen, Parameter und Rückgabewerte, Sichtbarkeit von Variablen, Überladen ohne doppelten Code sowie Vor- und Nachbedingungen im Stil der TUWEL-Quiz.
teil: methoden
stunden: 5
pruefungsgewicht: 3
voraussetzungen: [ausdruecke, verzweigungen, schleifen]
lernziele:
  - einen Methodenkopf in seine Teile zerlegen, zu einer Beschreibung den passenden Methodenkopf schreiben und eine Methode mit passenden Argumenten aufrufen
  - den Ablauf eines Programms mit mehreren Methodenaufrufen Schritt für Schritt verfolgen und seine Ausgabe exakt angeben
  - mit dem Prinzip call-by-value begründen, warum eine Zuweisung an einen Parameter die Variable des Aufrufers nicht verändert
  - Methoden mit Rückgabewert schreiben, Rückgabe und Ausgabe (Seiteneffekt) unterscheiden und zu einer Ausgabe die passende Aufrufsequenz bestimmen
  - für jeden Variablenzugriff bestimmen, welche lokale Variable, welcher Parameter oder welche Klassenvariable gemeint ist, und Sichtbarkeitsfehler erkennen
  - Signaturen vergleichen, zulässige Überladungen erkennen und für einen Aufruf bestimmen, welche überladene Methode Java auswählt
  - Vor- und Nachbedingungen formulieren und mit Gegenbeispielen prüfen, ob eine Vorbedingung eine Exception (etwa eine Division durch 0) sicher ausschließt
  - Methoden mit vorgegebenem Methodenkopf nach einer schriftlichen Angabe implementieren und mit den Beispielen der Angabe in main testen
  - überladene Methoden ohne doppelten Code schreiben, indem eine Variante die andere aufruft
---

**Worum geht es?** Bisher stand dein ganzes Programm in `main`. Sobald ein Programm länger wird, ist das
unübersichtlich: Dieselben Zeilen tauchen mehrfach auf, und niemand findet sich mehr zurecht. Eine
**Methode** löst das. Du gibst einem Stück Code einen Namen und kannst es danach beliebig oft über diesen
Namen ausführen lassen. Methoden sind das wichtigste Werkzeug, um Programme in kleine, verständliche
Teile zu zerlegen.

**Was kommt in der Prüfung?** Dieses Kapitel ist für alle vier Prüfungsteile wichtig.

- **Quiz:** Im ersten TUWEL-Quiz gibt es drei typische Fragen dazu. Du sollst zu einer Ausgabe die richtige Folge von Methodenaufrufen finden. Du sollst eine Vorbedingung wählen, die eine Division durch 0 ausschließt. Und du sollst eine korrekte Nachbedingung erkennen.
- **Aufgabenblätter:** Auf Blatt 2 schreibst du mehrere Methoden mit vorgegebenem Methodenkopf. Auf Blatt 3 schreibst du vier gleichnamige Methoden (`addChar`), die sich gegenseitig verwenden sollen.
- **Test:** Im Programmiertest sind alle drei Aufgaben Methoden mit vorgegebenem Kopf. Den Kopf darfst du nicht verändern.
- **Feedbackgespräch:** Auf Blatt 2 stehen dazu Zusatzfragen. Eine lautet: „Kann eine Methode mehr als einen Rückgabewert haben?“ Andere fragen, wie viele Parameter eine Methode haben kann und ob `func(i+1);` und `func(i++);` dasselbe bedeuten.

**Wozu brauchst du das später?** Jede Rekursion in Kapitel 10 ist eine Methode, die sich selbst aufruft
(siehe [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf)).
Jede Aufgabe im Programmiertest ist eine Methode. Wenn du dieses Kapitel sicher beherrschst, wird der
Rest des Kurses deutlich leichter.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Ausdrücke und Datentypen** aus [Kapitel 2](/lernen/ep1/ausdruecke): `int`, `double`, `char`, `String`, Ganzzahldivision und das Rechnen mit Zeichen.
- **Verzweigungen** aus [Kapitel 3](/lernen/ep1/verzweigungen): `if` und `else`, Vergleiche und die Verknüpfungen `&&`, `||` und `!`.
- **Schleifen** aus [Kapitel 4](/lernen/ep1/schleifen): `for` und `while`, auch über die Zeichen eines Strings mit `length()` und `charAt(i)`.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage
nicht klappt, wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: me-ein-ganzzahl
titel: Ganzzahldivision und Rest
niveau: 1
art: check
angabe: |
  Was gibt diese Zeile aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      System.out.println(17 / 5 + 17 % 5);
    loesung: |
      5
    fehler:
      - wert: "5.4"
        meldung: |
          `17 / 5` ist eine Division zweier `int`-Werte. Dabei fällt der Nachkommaanteil weg, das Ergebnis ist `3`, nicht `3.4`.
      - wert: "6"
        meldung: Prüfe den Rest. `17 % 5` ist der Rest der Division 17 durch 5, also 2.
hinweise:
  - '`/` zwischen zwei `int`-Werten schneidet die Nachkommastellen ab. `%` liefert den Rest.'
loesung: |
  `17 / 5` ergibt `3`, denn 5 passt dreimal in 17, und bei `int` fällt der Rest weg.
  ---
  `17 % 5` ergibt den Rest `2`, denn 17 = 3 · 5 + 2. Zusammen: 3 + 2 = 5.
```

```aufgabe
id: me-ein-zeichen
titel: Mit Zeichen rechnen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      char c = 'm';
      System.out.println(c + 1);
      System.out.println((char) (c + 1));
    loesung: |
      110
      n
    fehler:
      - wert: "n\nn"
        meldung: |
          In `c + 1` wird mit dem Zahlenwert von `'m'` gerechnet (109). Das Ergebnis ist ein `int`, und `println` gibt dann die Zahl 110 aus. Erst der Cast `(char)` macht wieder ein Zeichen daraus.
hinweise:
  - "`'m'` hat den Zahlenwert 109. Eine Rechnung mit `char` und `int` ergibt ein `int`."
loesung: |
  `c + 1` ist `109 + 1 = 110`. Der Typ ist `int`, darum erscheint die Zahl.
  ---
  `(char) (c + 1)` wandelt 110 zurück in ein Zeichen. Das Zeichen mit dem Wert 110 ist `n`.
```

```aufgabe
id: me-ein-verkettung
titel: Verkettung von links nach rechts
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten))
teile:
  - typ: ausgabe
    code: |
      System.out.println("A" + 2 + 3);
      System.out.println(2 + 3 + "A");
    loesung: |
      A23
      5A
    fehler:
      - wert: "A5\n5A"
        meldung: |
          Java rechnet `+` von links nach rechts. Zuerst entsteht `"A" + 2`, also der String `"A2"`. Danach wird `3` an diesen String angehängt.
hinweise:
  - Sobald links ein String steht, bedeutet `+` „anhängen“. Davor wird noch normal gerechnet.
loesung: |
  Zeile 1: `"A" + 2` ergibt `"A2"`, dann `"A2" + 3` ergibt `"A23"`.
  ---
  Zeile 2: `2 + 3` sind zwei Zahlen, also `5`. Danach `5 + "A"` ergibt `"5A"`.
```

```aufgabe
id: me-ein-verzweigung
titel: Welcher Zweig läuft?
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung))
teile:
  - typ: ausgabe
    code: |
      int x = 4, y = 7;
      if (x > 5 || y % 2 == 0) {
          System.out.println("A");
      } else if (x < y && y < 10) {
          System.out.println("B");
      } else {
          System.out.println("C");
      }
    loesung: |
      B
    fehler:
      - wert: "A"
        meldung: Prüfe beide Teile von `||`. `4 > 5` ist falsch, und `7 % 2` ist 1, also ist `y % 2 == 0` auch falsch.
      - wert: "B\nC"
        meldung: Bei `if – else if – else` läuft höchstens ein Zweig. Sobald eine Bedingung wahr ist, werden die übrigen übersprungen.
hinweise:
  - Werte die erste Bedingung vollständig aus. Nur wenn sie falsch ist, prüft Java die zweite.
loesung: |
  Erste Bedingung: `4 > 5` ist falsch, `7 % 2 == 0` ist falsch. Falsch oder falsch ist falsch.
  ---
  Zweite Bedingung: `4 < 7` ist wahr und `7 < 10` ist wahr. Also läuft der Zweig mit `B`, und der `else`-Zweig wird übersprungen.
```

```aufgabe
id: me-ein-summe
titel: Summe mit einer Schleife
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings))
teile:
  - typ: ausgabe
    code: |
      int summe = 0;
      for (int i = 2; i <= 8; i += 3) {
          summe += i;
      }
      System.out.println(summe);
    loesung: |
      15
    fehler:
      - wert: "7"
        meldung: Die Schleife läuft auch noch für `i = 8`, denn die Bedingung ist `i <= 8` und nicht `i < 8`.
hinweise:
  - "Schreib die Werte von `i` auf: Start 2, dann jeweils plus 3, solange `i <= 8` gilt."
loesung: |
  `i` nimmt die Werte 2, 5 und 8 an. Danach ist `i = 11`, und die Bedingung `11 <= 8` ist falsch.
  ---
  Die Summe ist 2 + 5 + 8 = 15.
```

```aufgabe
id: me-ein-string
titel: Jedes zweite Zeichen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      String s = "Methode";
      for (int i = 0; i < s.length(); i += 2) {
          System.out.print(s.charAt(i));
      }
      System.out.println();
    loesung: |
      Mtoe
    fehler:
      - wert: "ehd"
        meldung: Die Zählung der Positionen beginnt bei 0. Position 0 ist das `M`, und mit `i += 2` kommen die Positionen 0, 2, 4 und 6 dran.
hinweise:
  - Die Positionen eines Strings beginnen bei 0. `"Methode"` hat die Länge 7, also die Positionen 0 bis 6.
loesung: |
  `i` läuft über 0, 2, 4 und 6. Bei `i = 8` ist `8 < 7` falsch.
  ---
  `charAt(0)` ist `M`, `charAt(2)` ist `t`, `charAt(4)` ist `o`, `charAt(6)` ist `e`. Ausgabe: `Mtoe`.
```

## Was ist eine Methode?

```aufgabe
id: me-was-check-schleife
titel: Eine Linie aus Strichen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? `for`-Schleifen kennst du aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 6; i++) {
          System.out.print("-");
      }
      System.out.println();
      System.out.println("Hallo");
    loesung: |
      ------
      Hallo
    fehler:
      - wert: "-\n-\n-\n-\n-\n-\nHallo"
        meldung: "`print` ohne `ln` setzt keinen Zeilenumbruch. Die sechs Striche stehen deshalb in einer Zeile. Erst das leere `println()` beendet die Zeile."
hinweise:
  - "`i` läuft von 0 bis 5. Das sind sechs Durchläufe."
loesung: |
  Die Schleife läuft für `i = 0, 1, 2, 3, 4, 5`, also sechsmal. Jedes Mal gibt `print` einen Strich ohne Zeilenumbruch aus.
  ---
  `println()` ohne Inhalt beendet die Zeile. Danach steht `Hallo` in einer eigenen Zeile.
```

Stell dir vor, dein Programm soll an drei Stellen eine Trennlinie aus Strichen zeichnen. Ohne Methoden
schreibst du dieselbe Schleife dreimal hin. Das hat zwei Nachteile. Erstens wird das Programm lang und
schwer zu lesen. Zweitens musst du bei einer Änderung, etwa „Linie aus `=` statt `-`“, drei Stellen
finden und gleich ändern. Vergisst du eine, ist das Programm fehlerhaft.

Eine **Methode** ist ein benanntes Stück Code. Du schreibst die Anweisungen einmal auf und gibst ihnen
einen Namen. Danach kannst du sie über diesen Namen beliebig oft ausführen lassen. Das nennt man einen
**Aufruf** der Methode. Im Alltag ist das wie ein Rezept im Kochbuch: Es steht einmal im Buch, und du
kannst es so oft kochen, wie du willst.

Eine Methode kennst du schon, auch wenn du sie nicht so genannt hast: `main`. Java ruft `main`
automatisch auf, wenn das Programm startet. Auch `System.out.println` ist eine Methode. Sie wurde von
den Entwicklern von Java geschrieben, und du rufst sie auf.

### Der Aufbau einer Methode

So sieht eine Methode aus, die eine Linie zeichnet:

```java
public static void druckeLinie() {
    System.out.println("----------");
}
```

Die erste Zeile heißt **Methodenkopf**. Gehen wir sie Wort für Wort durch.

- `public` heißt „öffentlich“. Die Methode darf auch aus anderen Klassen aufgerufen werden. In den Vorlesungsfolien steht oft `private`, dann darf nur die eigene Klasse sie aufrufen. Für deine Programme in diesem Kapitel macht das keinen Unterschied.
- `static` heißt hier „gehört zur Klasse“. In EP1 schreibst du ausschließlich solche Methoden. Methoden ohne `static` gehören zu Objekten, und die kommen erst in EP2.
- `void` ist der **Rückgabetyp**. `void` heißt wörtlich „leer“: Die Methode liefert kein Ergebnis zurück. Methoden mit Ergebnis lernst du in [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return) kennen.
- `druckeLinie` ist der **Name**. Für ihn gelten dieselben Regeln wie für Variablennamen.
- `()` ist die **Parameterliste**. Hier ist sie leer. Was in die Klammern kommen kann, zeigt [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).

```aufgabe
id: me-was-check-name
titel: Wo steht der Name?
niveau: 1
art: check
angabe: |
  Gegeben ist der Methodenkopf `public static void zeigeHilfe()`. Wie heißt die Methode?
teile:
  - typ: auswahl
    optionen: ['`zeigeHilfe`', '`void`', '`static`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`void` ist der Rückgabetyp. Der Name steht direkt vor den runden Klammern.'
      - wert: 2
        meldung: '`static` ist ein Zusatzwort vor dem Rückgabetyp (ein sogenannter Modifikator). Der Name steht direkt vor den runden Klammern.'
loesung: |
  Der Name steht immer unmittelbar vor der Parameterliste `()`.
  ---
  Die Methode heißt also `zeigeHilfe`. Aufgerufen wird sie mit `zeigeHilfe();`.
```

Danach folgt in geschweiften Klammern `{ }` der **Methodenrumpf**. Er enthält die Anweisungen, die bei
jedem Aufruf ausgeführt werden. Nach dem Kopf steht **kein** Strichpunkt.

:::definition[Methode, Methodenkopf, Methodenrumpf, Aufruf]
Eine **Methode** ist eine benannte Folge von Anweisungen innerhalb einer Klasse. Sie besteht aus dem
**Methodenkopf** (Modifikatoren wie `public static`, Rückgabetyp, Name, Parameterliste in runden
Klammern) und dem **Methodenrumpf** in geschweiften Klammern.

Ein **Aufruf** wie `druckeLinie();` führt den Rumpf aus. Danach setzt das Programm direkt hinter der
Aufrufstelle fort.
:::

**Beispiel:** `public static void zeigeMenue() { System.out.println("1) Start"); }` ist eine Methode
mit Kopf und Rumpf. **Kein Beispiel:** `druckeLinie();` allein ist keine Methode, sondern ein Aufruf.
Auch `{ System.out.println("x"); }` ohne Kopf ist keine Methode, denn es fehlt der Name.

Wo steht eine Methode? Immer **innerhalb der Klasse**, aber **außerhalb** jeder anderen Methode. Die
Reihenfolge der Methoden in der Klasse ist egal. Java beginnt trotzdem immer mit `main`.

:::beispiel[Eine Linie über und unter einem Text]
```java
public class Begruessung {
    public static void druckeLinie() {
        System.out.println("----------");
    }

    public static void main(String[] args) {
        druckeLinie();
        System.out.println("Willkommen!");
        druckeLinie();
    }
}
```

Wir verfolgen den Ablauf Schritt für Schritt.

1. Java startet in `main`. Die Methode `druckeLinie` steht zwar vor `main` in der Datei, wird dort aber nur **definiert**, also beschrieben. Sie läuft erst, wenn jemand sie aufruft.
2. Die erste Anweisung in `main` ist `druckeLinie();`. Java springt in den Rumpf von `druckeLinie` und gibt `----------` aus.
3. Der Rumpf ist zu Ende. Java springt zurück und macht **direkt nach** dem Aufruf weiter. Dort steht die Ausgabe von `Willkommen!`.
4. Der zweite Aufruf `druckeLinie();` springt wieder in die Methode. Es erscheint eine zweite Linie.
5. Danach ist `main` zu Ende, und das Programm endet.

Die Ausgabe ist:

```
----------
Willkommen!
----------
```
:::

Ein Aufruf ist also ein Sprung mit Rückfahrkarte. Java merkt sich, wo der Aufruf stand, führt die
Methode aus und kehrt genau dorthin zurück.

:::achtung[Aufruf ohne Klammern]
Eine typische falsche Zeile ist

```java
druckeLinie;      // falsch
```

Der Compiler meldet `error: not a statement`. Ohne die runden Klammern erkennt Java keinen Aufruf.
Richtig ist `druckeLinie();`. Die Klammern gehören auch dann dazu, wenn die Methode keine Parameter
hat.
:::

:::achtung[Strichpunkt nach dem Methodenkopf]
Wer aus Gewohnheit jede Zeile mit `;` beendet, schreibt

```java
public static void druckeLinie(); {     // falsch
    System.out.println("----------");
}
```

Der Compiler meldet `error: missing method body, or declare abstract`. Der Strichpunkt beendet den
Kopf, bevor der Rumpf beginnt. Für Java hat die Methode dann keinen Rumpf. Nach einem Methodenkopf steht
direkt die öffnende geschweifte Klammer.
:::

Methoden dürfen andere Methoden aufrufen. Dann merkt sich Java mehrere Rücksprungstellen gleichzeitig,
wie einen Stapel Lesezeichen. Das oberste Lesezeichen wird zuerst wieder benutzt.

:::beispiel[Eine Methode ruft eine andere auf]
```java
public class Karte {
    public static void druckeRand() {
        System.out.println("+------+");
    }

    public static void druckeKarte() {
        druckeRand();
        System.out.println("| EP1  |");
        druckeRand();
    }

    public static void main(String[] args) {
        System.out.println("Start");
        druckeKarte();
        System.out.println("Ende");
    }
}
```

1. `main` gibt `Start` aus.
2. `main` ruft `druckeKarte()` auf. Lesezeichen 1: „zurück in `main`, nach dem Aufruf“.
3. `druckeKarte` ruft `druckeRand()` auf. Lesezeichen 2: „zurück in `druckeKarte`, nach dem ersten Aufruf“. Ausgabe `+------+`.
4. Rücksprung mit Lesezeichen 2. `druckeKarte` gibt `| EP1  |` aus.
5. Zweiter Aufruf von `druckeRand()`, Ausgabe `+------+`, Rücksprung in `druckeKarte`.
6. `druckeKarte` ist fertig. Rücksprung mit Lesezeichen 1 nach `main`. Ausgabe `Ende`.

```
Start
+------+
| EP1  |
+------+
Ende
```
:::

:::merke[So verfolgst du ein Programm mit Methoden]
1. Beginne immer bei der ersten Anweisung in `main`, egal wo `main` in der Datei steht.
2. Bei einem Aufruf: Merke dir die Stelle (Lesezeichen) und arbeite den Rumpf der aufgerufenen Methode vollständig ab.
3. Am Ende des Rumpfs: Kehre zum letzten Lesezeichen zurück und mach direkt dahinter weiter.
4. Methoden, die nie aufgerufen werden, erzeugen keine Ausgabe.
:::

Zum **Namen** einer Methode: Er beginnt klein und beschreibt, was die Methode tut. Meist ist es ein
Verb, zum Beispiel `druckeLinie`, `zeigeMenue` oder `berechneSumme`. Besteht der Name aus mehreren
Wörtern, beginnt jedes weitere Wort groß. Das nennt man **camelCase**, weil die Großbuchstaben wie
Kamelhöcker aussehen. Groß- und Kleinschreibung zählt: `druckeLinie` und `DruckeLinie` sind für Java
zwei verschiedene Namen.

```reflexion
frage: Lohnt sich eine Methode schon, wenn ein Codestück nur zweimal vorkommt? Überlege dir zwei Gründe, bevor du die Antwort aufdeckst.
antwort: |
  Ja. Erstens musst du eine Änderung nur an einer Stelle machen. Bei zwei Kopien vergisst man leicht
  eine, und dann verhalten sich die beiden Stellen unterschiedlich. Zweitens sagt der Name, was der Code
  tut. `druckeLinie();` liest sich schneller als eine Schleife, deren Zweck man erst erraten muss. Ein
  dritter Grund: Man kann die Methode allein testen, bevor man sie überall verwendet.
```

```aufgabe
id: me-was-gefuehrt
titel: Einen Ablauf Schritt für Schritt verfolgen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt dieses Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Ablauf {
          public static void piep() {
              System.out.println("piep");
          }

          public static void zweimal() {
              piep();
              piep();
          }

          public static void main(String[] args) {
              System.out.println("los");
              zweimal();
              piep();
              System.out.println("aus");
          }
      }
    loesung: |
      los
      piep
      piep
      piep
      aus
    fehler:
      - wert: "piep\nlos\npiep\npiep\npiep\naus"
        meldung: Java beginnt in `main`, nicht bei der ersten Methode in der Datei. `piep` läuft nur, wenn es aufgerufen wird.
      - wert: "los\npiep\npiep\naus"
        meldung: Du hast den Aufruf `piep();` in `main` übersehen. Nach `zweimal()` kommt noch ein eigener Aufruf.
gefuehrt:
  - text: Mit welcher Anweisung beginnt Java?
    teil:
      typ: auswahl
      optionen: ['`System.out.println("piep");` in `piep`', '`System.out.println("los");` in `main`', '`piep();` in `zweimal`']
      richtig: [1]
    erklaerung: Java startet immer in `main`. Die erste Anweisung dort gibt `los` aus.
  - text: Wie viele Zeilen `piep` erzeugt der Aufruf `zweimal();`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`zweimal` ruft `piep` zweimal auf. Jeder Aufruf gibt eine Zeile `piep` aus.'
  - text: Wie viele Zeilen `piep` stehen insgesamt in der Ausgabe?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Zwei Zeilen kommen aus `zweimal()`, eine dritte aus dem direkten Aufruf `piep();` in `main`.
  - text: Welche Zeile steht ganz am Ende?
    teil:
      typ: auswahl
      optionen: ['`piep`', '`aus`', '`los`']
      richtig: [1]
    erklaerung: Die letzte Anweisung in `main` gibt `aus` aus. Danach endet das Programm.
hinweise:
  - Beginne in `main` und merke dir bei jedem Aufruf, wohin Java danach zurückkehrt.
loesung: |
  **Ansatz:** Wir starten in `main` und arbeiten jeden Aufruf vollständig ab, bevor wir weitergehen.
  ---
  `los` wird ausgegeben. Dann ruft `main` die Methode `zweimal` auf, die zweimal `piep` aufruft: zwei Zeilen `piep`.
  ---
  Zurück in `main` folgt der direkte Aufruf `piep();`, eine dritte Zeile `piep`. Zum Schluss erscheint `aus`. Kontrolle: fünf Zeilen, dreimal `piep`.
```

```aufgabe
id: me-was-ausgabe-verschachtelt
titel: Drei Methoden, eine Ausgabe
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Verschachtelt {
          public static void a() {
              System.out.println("a");
          }

          public static void b() {
              System.out.println("b1");
              a();
              System.out.println("b2");
          }

          public static void main(String[] args) {
              a();
              b();
              a();
          }
      }
    loesung: |
      a
      b1
      a
      b2
      a
    fehler:
      - wert: "a\nb1\nb2\na"
        meldung: In `b` steht zwischen den beiden Ausgaben ein Aufruf `a();`. Er erzeugt eine eigene Zeile `a`.
      - wert: "a\nb1\nb2\na\na"
        meldung: Der Aufruf `a();` in `b` läuft sofort, wenn Java an ihn kommt, also zwischen `b1` und `b2`, nicht erst am Ende.
hinweise:
  - Ein Aufruf wird sofort und vollständig ausgeführt. Erst danach geht es in der aufrufenden Methode weiter.
loesung: |
  **Ansatz:** Start in `main`, jeden Aufruf vollständig abarbeiten.
  ---
  `a()` gibt `a` aus. Dann `b()`: zuerst `b1`, dann der Aufruf `a()` mit `a`, danach `b2`.
  ---
  Zum Schluss noch einmal `a()`. Ausgabe: `a`, `b1`, `a`, `b2`, `a`. Kontrolle: `a` kommt dreimal vor, weil es dreimal aufgerufen wird.
```

```aufgabe
id: me-was-rf-grundlagen
titel: Aussagen über Methoden
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage über Methoden in Java.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Methode wird ausgeführt, sobald Java beim Lesen der Datei an ihr vorbeikommt.
        richtig: false
        erklaerung: Eine Methode läuft nur, wenn sie aufgerufen wird. Das Programm beginnt immer in `main`.
      - text: Die Reihenfolge, in der die Methoden in der Klasse stehen, spielt für den Ablauf keine Rolle.
        richtig: true
        erklaerung: Nur die Reihenfolge der Aufrufe zählt. `main` darf auch ganz unten stehen.
      - text: Dieselbe Methode darf beliebig oft aufgerufen werden.
        richtig: true
        erklaerung: Genau dafür gibt es Methoden. Jeder Aufruf führt den Rumpf erneut aus.
      - text: Man darf eine Methode innerhalb von `main` definieren.
        richtig: false
        erklaerung: Methoden stehen in der Klasse, aber außerhalb anderer Methoden. Innerhalb von `main` meldet der Compiler `illegal start of expression`.
    fehler:
      - wert: [r, r, r, f]
        meldung: Methoden laufen nicht beim „Vorbeikommen“. Sie laufen nur bei einem Aufruf.
      - wert: [f, f, r, f]
        meldung: Java startet immer in `main`. Wo `main` in der Datei steht, ist egal.
hinweise:
  - Denk an das Rezept im Kochbuch. Es steht im Buch, gekocht wird es erst, wenn jemand es auswählt.
loesung: |
  **Ansatz:** Unterscheide genau zwischen „eine Methode definieren“ (aufschreiben) und „eine Methode aufrufen“ (ausführen).
  ---
  Aussage 1 ist falsch und Aussage 3 richtig: Ausgeführt wird nur bei einem Aufruf, und das beliebig oft.
  ---
  Aussage 2 ist richtig, Aussage 4 falsch: Die Position in der Klasse ist egal, aber jede Methode steht außerhalb der anderen Methoden.
```

```aufgabe
id: me-was-teile-kopf
titel: Die Teile eines Methodenkopfs
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist der Methodenkopf `public static void zeigeMenue()`. Welche Aussage über das Wort `void` stimmt?
teile:
  - typ: auswahl
    optionen:
      - '`void` ist der Rückgabetyp. Die Methode liefert kein Ergebnis zurück.'
      - '`void` ist ein Parameter, den man beim Aufruf übergeben muss.'
      - '`void` ist der Name der Methode.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Parameter stehen in den runden Klammern hinter dem Namen. Die Klammern sind hier leer, die Methode hat also keine Parameter.
      - wert: 2
        meldung: Der Name steht direkt vor den runden Klammern. Hier heißt die Methode `zeigeMenue`.
hinweise:
  - 'Lies den Kopf von hinten: `()` ist die Parameterliste, davor steht der Name, davor der Rückgabetyp.'
loesung: |
  **Ansatz:** Ein Methodenkopf hat die Reihenfolge Modifikatoren, Rückgabetyp, Name, Parameterliste.
  ---
  Vor dem Namen `zeigeMenue` steht `void`. An dieser Stelle steht immer der Rückgabetyp.
  ---
  `void` heißt „leer“: Die Methode gibt kein Ergebnis zurück. Sie kann trotzdem etwas ausgeben.
```

```aufgabe
id: me-was-zeilen-fehler
titel: Drei Fehler im Aufruf und im Kopf
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  In welchen Zeilen steckt ein Fehler, sodass das Programm nicht kompiliert? Markiere alle.
  Achtung: Der Compiler meldet nicht immer alle Fehler auf einmal. Beurteile jede Zeile für sich.
teile:
  - typ: zeilen
    code: |
      public class Gruesse {
          public static void gruss(); {
              System.out.println("Hallo");
          }

          public static void main(String[] args) {
              gruss;
              Gruss();
              gruss();
          }
      }
    loesung: [2, 7, 8]
    fehler:
      - wert: [7, 8]
        meldung: Schau dir den Methodenkopf in Zeile 2 genau an. Was steht direkt nach den runden Klammern?
      - wert: [2, 7]
        meldung: Java unterscheidet Groß- und Kleinschreibung. Gibt es eine Methode namens `Gruss`?
      - wert: [2, 7, 8, 9]
        meldung: Zeile 9 ist ein korrekter Aufruf. Der Compiler meldet dort keinen Fehler.
hinweise:
  - Prüfe drei Dinge. Steht nach dem Kopf ein Strichpunkt? Hat jeder Aufruf runde Klammern? Stimmt der Name exakt?
  - 'Groß- und Kleinschreibung zählt: `gruss` und `Gruss` sind verschiedene Namen.'
loesung: |
  **Ansatz:** Jede Zeile einzeln gegen die Regeln prüfen: Kopf ohne Strichpunkt, Aufruf mit Klammern, Name exakt gleich.
  ---
  Zeile 2: Der Strichpunkt nach `gruss()` beendet den Kopf, und die Methode hat keinen Rumpf. Fehlermeldung `missing method body`.
  ---
  Zeile 7: `gruss;` ohne Klammern ist kein Aufruf (`not a statement`). Zeile 8: `Gruss` mit großem G gibt es nicht (`cannot find symbol`).
  ---
  Zeile 9 ist korrekt. Repariert lautet Zeile 2 `public static void gruss() {`, Zeile 7 `gruss();`, Zeile 8 ebenfalls `gruss();`.
```

```aufgabe
id: me-was-reihenfolge-tee
titel: Teekochen in Methoden
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  In welcher Reihenfolge erscheinen die Ausgaben dieses Programms?

  ```java
  public class Tee {
      public static void zucker() {
          System.out.println("Zucker");
      }

      public static void aufgiessen() {
          System.out.println("Wasser");
          zucker();
          System.out.println("Umruehren");
      }

      public static void main(String[] args) {
          System.out.println("Tasse");
          aufgiessen();
          System.out.println("Trinken");
          zucker();
      }
  }
  ```
teile:
  - typ: reihenfolge
    elemente: ["`Tasse`", "`Wasser`", "`Zucker` (aus `aufgiessen`)", "`Umruehren`", "`Trinken`", "`Zucker` (aus `main`)"]
    fehler:
      - wert: [0, 1, 3, 2, 4, 5]
        meldung: Der Aufruf `zucker();` in `aufgiessen` steht zwischen `Wasser` und `Umruehren`. Er läuft sofort an dieser Stelle.
hinweise:
  - Beginne in `main`. Jeder Aufruf wird vollständig ausgeführt, bevor es in der aufrufenden Methode weitergeht.
  - '`aufgiessen` gibt drei Zeilen aus. Die mittlere stammt aus dem Aufruf von `zucker`.'
loesung: |
  **Ansatz:** Start in `main`, bei jedem Aufruf ein Lesezeichen setzen.
  ---
  `main` gibt `Tasse` aus und ruft `aufgiessen` auf. Dort folgen `Wasser`, der Aufruf von `zucker` mit `Zucker` und dann `Umruehren`.
  ---
  Zurück in `main` kommen `Trinken` und der zweite Aufruf von `zucker` mit `Zucker`. Kontrolle: sechs Zeilen, `Zucker` zweimal.
```

```aufgabe
id: me-was-anzahl-zeilen
titel: Wie viele Zeilen entstehen?
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Wie viele Zeilen gibt dieses Programm insgesamt aus? Rechne, statt jede Zeile aufzuschreiben.

  ```java
  public class Zaehlen {
      public static void c() {
          System.out.println("*");
      }

      public static void b() {
          c();
          c();
          c();
      }

      public static void a() {
          b();
          System.out.println("-");
          b();
      }

      public static void main(String[] args) {
          a();
          c();
          a();
      }
  }
  ```
teile:
  - typ: zahl
    label: Anzahl der Zeilen
    loesung: "2*(3 + 1 + 3) + 1"
    fehler:
      - wert: "3"
        meldung: Du hast nur die Aufrufe in `main` gezählt. Jeder Aufruf von `a` erzeugt selbst viele Zeilen.
      - wert: "8"
        meldung: Du hast `a` nur einmal gezählt. `main` ruft `a` zweimal auf.
      - wert: "11"
        meldung: Prüfe, wie oft `b` die Methode `c` aufruft. Es sind drei Aufrufe, nicht zwei.
      - wert: "13"
        meldung: Das ist die Zahl der Sterne. Die Zeilen mit `-` aus den beiden Aufrufen von `a` kommen noch dazu.
hinweise:
  - Zähle von innen nach außen. Wie viele Zeilen erzeugt ein Aufruf von `c`? Wie viele einer von `b`?
  - Ein Aufruf von `a` erzeugt zweimal die Zeilen von `b` und eine eigene Zeile `-`.
loesung: |
  **Ansatz:** Von der innersten Methode nach außen zählen und jeweils mit der Anzahl der Aufrufe multiplizieren.
  ---
  `c` gibt 1 Zeile aus. `b` ruft `c` dreimal auf, also 3 Zeilen.
  ---
  `a` erzeugt 3 Zeilen (erstes `b`) + 1 Zeile (`-`) + 3 Zeilen (zweites `b`) = 7 Zeilen.
  ---
  `main`: 7 (`a`) + 1 (`c`) + 7 (`a`) = 15 Zeilen. Kontrolle über die Zeichen: 2 · 6 + 1 = 13 Sterne und 2 Striche, zusammen 15 Zeilen.
```

```aufgabe
id: me-was-code-trenner
titel: Eine Methode für die Trennlinie
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreibe die Methode `druckeTrenner()`. Sie gibt genau eine Zeile mit fünf Gleichheitszeichen aus: `=====`.
  Rufe sie danach in `main` so auf, dass das Programm diese Ausgabe erzeugt:

  ```
  =====
  EP1
  =====
  ```
teile:
  - typ: code
    vorlage: |
      public class Trenner {
          public static void druckeTrenner() {
              // TODO: eine Zeile mit fünf Gleichheitszeichen ausgeben
          }

          public static void main(String[] args) {
              // TODO: druckeTrenner passend aufrufen
              System.out.println("EP1");
          }
      }
    musterloesung: |
      public class Trenner {
          public static void druckeTrenner() {
              System.out.println("=====");
          }

          public static void main(String[] args) {
              druckeTrenner();
              System.out.println("EP1");
              druckeTrenner();
          }
      }
    tests:
      - { aufruf: "druckeTrenner()", stdout: "=====\n", beschreibung: "druckeTrenner() gibt eine Zeile aus" }
      - { stdout: "=====\nEP1\n=====\n", beschreibung: "main erzeugt die ganze Ausgabe" }
    fehler:
      - { wert: 2, meldung: "Die Methode allein stimmt. Jetzt muss `main` sie vor und nach `EP1` aufrufen." }
      - { wert: 1, meldung: "Prüfe die Ausgabe der Methode: genau fünf `=` in einer Zeile, mit `println`." }
hinweise:
  - Der Rumpf von `druckeTrenner` braucht genau eine Anweisung.
  - In `main` steht der Aufruf `druckeTrenner();` einmal vor und einmal nach der Ausgabe von `EP1`.
loesung: |
  **Ansatz:** Erst die Methode schreiben, dann in `main` an den richtigen Stellen aufrufen.
  ---
  ```java
  public static void druckeTrenner() {
      System.out.println("=====");
  }
  ```
  ---
  In `main` steht `druckeTrenner();` vor und nach `System.out.println("EP1");`. Kontrolle: drei Zeilen, die äußeren gleich.
```

```aufgabe
id: me-was-code-baum
titel: Ein Baum aus drei Methoden
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreibe drei Methoden ohne Parameter.

  - `druckeKrone()` gibt diese drei Zeilen aus (die Leerzeichen am Zeilenanfang gehören dazu):
    ```
      *
     ***
    *****
    ```
  - `druckeStamm()` gibt die Zeile `  |` aus (zwei Leerzeichen, dann ein senkrechter Strich).
  - `druckeBaum()` zeichnet einen ganzen Baum, indem sie **die beiden anderen Methoden aufruft**.

  `main` soll zwei Bäume untereinander zeichnen, also insgesamt acht Zeilen.
teile:
  - typ: code
    vorlage: |
      public class Wald {
          public static void druckeKrone() {
              // TODO
          }

          public static void druckeStamm() {
              // TODO
          }

          public static void druckeBaum() {
              // TODO: die beiden anderen Methoden aufrufen
          }

          public static void main(String[] args) {
              // TODO: zwei Bäume zeichnen
          }
      }
    musterloesung: |
      public class Wald {
          public static void druckeKrone() {
              System.out.println("  *");
              System.out.println(" ***");
              System.out.println("*****");
          }

          public static void druckeStamm() {
              System.out.println("  |");
          }

          public static void druckeBaum() {
              druckeKrone();
              druckeStamm();
          }

          public static void main(String[] args) {
              druckeBaum();
              druckeBaum();
          }
      }
    tests:
      - { aufruf: "druckeKrone()", stdout: "  *\n ***\n*****\n" }
      - { aufruf: "druckeStamm()", stdout: "  |\n" }
      - { aufruf: "druckeBaum()", stdout: "  *\n ***\n*****\n  |\n" }
      - { stdout: "  *\n ***\n*****\n  |\n  *\n ***\n*****\n  |\n", beschreibung: "main zeichnet zwei Bäume" }
    fehler:
      - { wert: 1, meldung: "Zähle die Leerzeichen am Zeilenanfang: zwei vor dem ersten Stern, eines vor den drei Sternen, keines vor den fünf." }
      - { wert: 3, meldung: "`druckeBaum` soll zuerst die Krone und dann den Stamm zeichnen, jeweils durch einen Aufruf." }
hinweise:
  - Beginne mit `druckeKrone` und `druckeStamm`. Teste sie einzeln, bevor du `druckeBaum` schreibst.
  - '`druckeBaum` enthält nur zwei Aufrufe. `main` enthält zwei Aufrufe von `druckeBaum`.'
loesung: |
  **Ansatz:** Das Bild in Teile zerlegen: Krone, Stamm, ganzer Baum. Jeder Teil wird eine Methode, der ganze Baum setzt die Teile zusammen.
  ---
  `druckeKrone` gibt drei Zeilen aus: `"  *"`, `" ***"` und `"*****"`. `druckeStamm` gibt `"  |"` aus.
  ---
  `druckeBaum` ruft `druckeKrone();` und dann `druckeStamm();` auf. `main` ruft `druckeBaum();` zweimal auf.
  ---
  Kontrolle: Ein Baum hat 4 Zeilen, zwei Bäume ergeben 8 Zeilen. Willst du später das Aussehen des Stamms ändern, änderst du nur eine Zeile.
```

## Parameter: Werte an eine Methode übergeben

```aufgabe
id: me-par-check-kopie
titel: Eine Zuweisung kopiert den Wert
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Zuweisungen kennst du aus [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale).
teile:
  - typ: ausgabe
    code: |
      int a = 5;
      int b = a;
      b = b + 1;
      System.out.println(a + " " + b);
    loesung: |
      5 6
    fehler:
      - wert: "6 6"
        meldung: '`int b = a;` kopiert nur den **Wert** 5 in `b`. Danach sind `a` und `b` zwei getrennte Variablen. Eine Änderung von `b` lässt `a` unverändert.'
hinweise:
  - Stell dir zwei getrennte Kästchen vor. Die Zuweisung schreibt eine Kopie der Zahl in das zweite Kästchen.
loesung: |
  Nach `int b = a;` steht in beiden Variablen die Zahl 5, aber jede hat ihr eigenes Kästchen.
  ---
  `b = b + 1;` ändert nur `b` auf 6. Ausgabe: `5 6`.
```

Die Methode `druckeLinie()` aus [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode)
zeichnet immer zehn Striche. Was, wenn du einmal drei und einmal zwanzig Striche brauchst? Zwei Methoden
`druckeLinie3` und `druckeLinie20` wären unsinnig. Besser ist eine einzige Methode, der du beim Aufruf
sagst, wie lang die Linie werden soll. Diesen Wert nennt man **Parameter**.

```java
public static void druckeLinie(int laenge) {
    for (int i = 0; i < laenge; i++) {
        System.out.print("-");
    }
    System.out.println();
}
```

In den runden Klammern des Kopfs steht jetzt `int laenge`. Das sieht aus wie eine Variablendeklaration,
und genau das ist es auch: `laenge` ist eine Variable vom Typ `int`, die nur innerhalb dieser Methode
existiert. Ihr Startwert wird aber nicht hier festgelegt. Er kommt bei jedem Aufruf von außen.

:::definition[Formaler Parameter und Argument]
Ein **formaler Parameter** ist eine Variable, die im Methodenkopf in den runden Klammern deklariert wird,
zum Beispiel `int laenge`. Jeder Parameter hat einen Typ und einen Namen. Mehrere Parameter werden durch
Kommas getrennt.

Ein **Argument** (auch **aktueller Parameter**) ist der Wert, den man beim Aufruf in die Klammern
schreibt, zum Beispiel die `3` in `druckeLinie(3)`. Beim Aufruf wird jeder formale Parameter mit dem
Wert des passenden Arguments belegt: das erste Argument für den ersten Parameter, das zweite für den
zweiten und so weiter.
:::

**Beispiel:** `public static void druckeZeichen(char zeichen, int anzahl)` hat zwei formale Parameter.
Im Aufruf `druckeZeichen('#', 4)` sind `'#'` und `4` die Argumente. **Kein Beispiel:**
`public static void f(int a, b)` ist kein gültiger Kopf. Jeder Parameter braucht seinen eigenen Typ, und
der Compiler meldet `<identifier> expected`. Richtig wäre `f(int a, int b)`.

:::beispiel[Linien verschiedener Länge]
```java
public class Linien {
    public static void druckeLinie(int laenge) {
        for (int i = 0; i < laenge; i++) {
            System.out.print("-");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        druckeLinie(3);
        druckeLinie(2 + 4);
        int n = 2;
        druckeLinie(n * 5);
    }
}
```

1. Aufruf `druckeLinie(3)`: Das Argument ist die Zahl 3. Java legt die Variable `laenge` an und setzt sie auf 3. Die Schleife läuft dreimal, Ausgabe `---`.
2. Aufruf `druckeLinie(2 + 4)`: Zuerst wird das Argument **ausgerechnet**, also `6`. Erst dann springt Java in die Methode, und `laenge` bekommt 6. Ausgabe `------`.
3. `int n = 2;` legt in `main` eine Variable an.
4. Aufruf `druckeLinie(n * 5)`: `n * 5` ergibt 10. `laenge` bekommt 10. Ausgabe: zehn Striche.

```
---
------
----------
```

Jeder Aufruf bekommt eine **neue** Variable `laenge`. Sie verschwindet wieder, sobald die Methode fertig
ist.
:::

```aufgabe
id: me-par-check-argument
titel: Welcher Wert kommt an?
niveau: 1
art: check
angabe: |
  Gegeben ist `druckeLinie(int laenge)` aus dem Beispiel „Linien verschiedener Länge“. Welchen Wert hat `laenge` beim Aufruf `druckeLinie(7 / 2)`?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "3.5"
        meldung: '`7 / 2` ist eine Division zweier `int`-Werte. Das Ergebnis ist 3, der Nachkommaanteil fällt weg.'
loesung: |
  Das Argument `7 / 2` wird vor dem Sprung in die Methode ausgerechnet. Bei `int` ergibt das 3.
  ---
  `laenge` bekommt also den Wert 3, und die Linie hat drei Striche.
```

### Mehrere Parameter

Eine Methode darf beliebig viele Parameter haben. Dann zählt die **Reihenfolge**: Das erste Argument
landet im ersten Parameter, das zweite im zweiten. Die Namen der Variablen im Aufruf spielen dabei
keine Rolle.

:::beispiel[Ein Zeichen mehrmals ausgeben]
```java
public class Zeichen {
    public static void druckeZeichen(char zeichen, int anzahl) {
        for (int i = 0; i < anzahl; i++) {
            System.out.print(zeichen);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        druckeZeichen('#', 4);
        int anzahl = 2;
        char zeichen = 'o';
        druckeZeichen(zeichen, anzahl + 1);
    }
}
```

1. `druckeZeichen('#', 4)`: Der erste Parameter `zeichen` bekommt `'#'`, der zweite `anzahl` bekommt 4. Ausgabe `####`.
2. In `main` werden zwei Variablen `anzahl` und `zeichen` angelegt. Sie heißen zufällig wie die Parameter, sind aber **andere** Variablen in `main`.
3. `druckeZeichen(zeichen, anzahl + 1)`: Die Argumente werden ausgewertet zu `'o'` und `3`. Diese Werte werden in die Parameter kopiert. Ausgabe `ooo`.

```
####
ooo
```
:::

Java passt die Typen beim Aufruf an, aber nur in eine Richtung. Ein „kleinerer“ Typ wird automatisch in
einen „größeren“ umgewandelt: `int` wird zu `double`, `char` wird zu `int`. Diese Richtung verliert keine
Information. Die andere Richtung, etwa von `double` nach `int`, macht Java beim Aufruf nie automatisch.
Dann meldet der Compiler `possible lossy conversion`, also „möglicher Verlust bei der Umwandlung“.

:::achtung[Argumente vertauscht]
Für `druckeZeichen(char zeichen, int anzahl)` schreibt jemand

```java
druckeZeichen(5, '*');     // falsch
```

Der Compiler meldet `incompatible types: possible lossy conversion from int to char`. Das erste
Argument `5` müsste in den ersten Parameter vom Typ `char`. Java ordnet nach der **Position** zu, nicht
nach dem Typ. Richtig ist `druckeZeichen('*', 5)`.
:::

:::achtung[Ein Zeichen an einen int-Parameter]
Gegeben ist `public static void druckeZahl(int n) { System.out.println(n); }`. Der Aufruf
`druckeZahl('A')` kompiliert, denn `char` wird automatisch zu `int`. Wer `A` als Ausgabe erwartet,
liegt falsch: Ausgegeben wird `65`, der Zahlenwert des Zeichens `'A'`. Der Parameter hat den Typ `int`,
und `println` gibt eine Zahl aus.
:::

### Call-by-value: Die Methode bekommt eine Kopie

Was passiert, wenn eine Methode ihren Parameter verändert? Ändert sich dann auch die Variable, die
beim Aufruf übergeben wurde? Die Antwort ist **nein**. Diese Regel steckt hinter vielen Ausgabe-Aufgaben,
darum lohnt es sich, sie genau zu verstehen.

:::definition[Call-by-value]
Beim Aufruf wird jedes Argument zuerst zu einem **Wert** ausgerechnet. Dieser Wert wird in den formalen
Parameter **kopiert**. Diese Art der Übergabe heißt **call-by-value**, auf Deutsch „Aufruf mit Wert“.
Eine spätere Zuweisung an den Parameter ändert nur die Kopie, nie die Variable des Aufrufers.
:::

:::beispiel[Verdoppeln, ohne das Original zu ändern]
```java
public class Kopie {
    public static void verdopple(int x) {
        x = x * 2;
        System.out.println("in verdopple: " + x);
    }

    public static void main(String[] args) {
        int zahl = 5;
        verdopple(zahl);
        System.out.println("in main: " + zahl);
    }
}
```

1. In `main` entsteht das Kästchen `zahl` mit dem Inhalt 5.
2. Beim Aufruf `verdopple(zahl)` wird der Wert 5 gelesen und in ein **neues** Kästchen `x` kopiert.
3. `x = x * 2;` ändert nur das Kästchen `x` auf 10. Ausgabe `in verdopple: 10`.
4. Die Methode endet, das Kästchen `x` verschwindet. Das Kästchen `zahl` wurde nie angefasst. Ausgabe `in main: 5`.

Als Speicherbild direkt vor dem Ende von `verdopple`:

```
main:       zahl [ 5 ]
verdopple:  x    [ 10 ]
```

```
in verdopple: 10
in main: 5
```
:::

:::achtung[Erwartet, dass sich das Original ändert]
Viele sagen für das Beispiel „Verdoppeln, ohne das Original zu ändern“ die Ausgabe

```
in verdopple: 10
in main: 10        (falsch)
```

voraus. Das wäre nur richtig, wenn `x` und `zahl` dasselbe Kästchen wären. Bei call-by-value ist `x`
aber eine Kopie. Hieße der Parameter ebenfalls `zahl`, wäre es immer noch eine eigene Variable der
Methode. Wenn eine Methode ein Ergebnis nach außen liefern soll, braucht sie einen Rückgabewert, siehe
[6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
:::

:::merke[Was beim Aufruf mit Parametern passiert]
1. Java rechnet jedes Argument von links nach rechts zu einem Wert aus.
2. Für jeden Parameter entsteht eine neue Variable. Sie bekommt den Wert des Arguments an derselben Position.
3. Der Rumpf läuft mit diesen Variablen.
4. Am Ende verschwinden die Parameter. Die Variablen des Aufrufers sind unverändert.
:::

```reflexion
frage: Eine Methode heißt `setzeAufNull(int wert)` und enthält nur `wert = 0;`. Kann sie überhaupt irgendetwas bewirken? Überlege, bevor du aufdeckst.
antwort: |
  Nein, sie bewirkt nichts Sichtbares. Wegen call-by-value bekommt `wert` nur eine Kopie des Arguments.
  Die Zuweisung `wert = 0;` ändert diese Kopie, und am Ende der Methode verschwindet sie. Die Variable des
  Aufrufers behält ihren alten Wert. Damit eine Methode etwas bewirkt, muss sie etwas ausgeben, einen
  Wert zurückgeben oder eine Variable verändern, die außerhalb der Methode lebt.
```

```aufgabe
id: me-par-gefuehrt-bonus
titel: Punkte mit Bonus
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: Was gibt dieses Programm aus? Löse es zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Punkte {
          public static void bonus(int punkte, int extra) {
              punkte = punkte + extra;
              System.out.println("Mit Bonus: " + punkte);
          }

          public static void main(String[] args) {
              int punkte = 40;
              bonus(punkte, 5);
              bonus(punkte + 10, punkte / 8);
              System.out.println("Ende: " + punkte);
          }
      }
    loesung: |
      Mit Bonus: 45
      Mit Bonus: 55
      Ende: 40
    fehler:
      - wert: "Mit Bonus: 45\nMit Bonus: 60\nEnde: 45"
        meldung: Du hast angenommen, dass der erste Aufruf `punkte` in `main` auf 45 erhöht. Der Parameter `punkte` ist aber eine Kopie. In `main` bleibt `punkte` bei 40.
      - wert: "Mit Bonus: 45\nMit Bonus: 55\nEnde: 55"
        meldung: Die letzte Zeile gibt die Variable `punkte` aus `main` aus. Sie wurde nie verändert.
gefuehrt:
  - text: Welchen Wert bekommt der Parameter `punkte` beim ersten Aufruf `bonus(punkte, 5)`?
    teil: { typ: zahl, loesung: "40" }
    erklaerung: Der Wert der Variable `punkte` aus `main` wird kopiert, also 40.
  - text: Was gibt der erste Aufruf nach „Mit Bonus:“ aus?
    teil: { typ: zahl, loesung: "45" }
    erklaerung: In der Methode wird die Kopie auf 40 + 5 = 45 gesetzt und ausgegeben.
  - text: Welchen Wert hat die Variable `punkte` in `main` nach dem ersten Aufruf?
    teil: { typ: zahl, loesung: "40" }
    erklaerung: Call-by-value. Die Methode hat nur ihre Kopie verändert.
  - text: Welche Werte bekommen die Parameter beim zweiten Aufruf? Gib den Wert von `extra` an.
    teil: { typ: zahl, loesung: "40/8" }
    erklaerung: 'Die Argumente werden ausgerechnet: `punkte + 10` = 50 und `punkte / 8` = 5. Der Parameter `punkte` bekommt 50, `extra` bekommt 5. Ausgabe 55.'
hinweise:
  - Unterscheide die Variable `punkte` in `main` vom Parameter `punkte` in `bonus`. Es sind zwei verschiedene Kästchen.
  - Rechne bei jedem Aufruf zuerst die Argumente aus und kopiere die Werte in die Parameter.
loesung: |
  **Ansatz:** Bei jedem Aufruf die Argumente auswerten und in neue Parameter-Variablen kopieren. Die Variable `punkte` in `main` ändert sich nie.
  ---
  Erster Aufruf: `bonus(40, 5)`. Die Kopie wird 45, Ausgabe `Mit Bonus: 45`.
  ---
  Zweiter Aufruf: Die Argumente sind `40 + 10 = 50` und `40 / 8 = 5`. Die Kopie wird 55, Ausgabe `Mit Bonus: 55`.
  ---
  Zum Schluss `Ende: 40`, denn `punkte` in `main` hat immer noch den Wert 40.
```

```aufgabe
id: me-par-ausgabe-zeichen
titel: Zeichen in einer Reihe
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Reihe {
          public static void reihe(char c, int n) {
              for (int i = 1; i <= n; i++) {
                  System.out.print(c);
              }
              System.out.println("|");
          }

          public static void main(String[] args) {
              reihe('x', 3);
              reihe('a', 7 % 4);
              int k = 1;
              reihe('-', k - 1);
          }
      }
    loesung: |
      xxx|
      aaa|
      |
    fehler:
      - wert: "xxx|\naaaaaaa|\n|"
        meldung: Das zweite Argument ist `7 % 4`. Es wird vor dem Aufruf ausgerechnet und ergibt den Rest 3.
      - wert: "xxx|\naaa|\n-|"
        meldung: Beim dritten Aufruf ist `n = 0`. Die Schleife läuft dann kein einziges Mal, es erscheint nur der Strich `|`.
hinweise:
  - Rechne jedes Argument aus, bevor du die Schleife durchgehst. Die Schleife läuft für `i` von 1 bis `n`.
loesung: |
  **Ansatz:** Für jeden Aufruf erst die Argumente ausrechnen, dann zählen, wie oft die Schleife läuft.
  ---
  `reihe('x', 3)` druckt dreimal `x` und dann `|`. `reihe('a', 7 % 4)` bekommt `n = 3` und druckt `aaa|`.
  ---
  `reihe('-', k - 1)` bekommt `n = 0`. Die Schleife läuft nicht, es erscheint nur `|`.
```

```aufgabe
id: me-par-ausgabe-kopie
titel: Ändert die Methode die Variable?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Erhoehen {
          public static void erhoehe(int z) {
              z = z + 100;
              System.out.println(z);
          }

          public static void main(String[] args) {
              int z = 1;
              erhoehe(z);
              erhoehe(z);
              System.out.println(z);
          }
      }
    loesung: |
      101
      101
      1
    fehler:
      - wert: "101\n201\n201"
        meldung: Der Parameter `z` ist eine Kopie. Jeder Aufruf startet wieder mit dem Wert 1 aus `main`, und `main` behält 1.
      - wert: "101\n101\n101"
        meldung: Die letzte Zeile gibt das `z` aus `main` aus. Das hat sich durch die Aufrufe nicht verändert.
hinweise:
  - Das `z` in `main` und der Parameter `z` sind zwei verschiedene Variablen, obwohl sie gleich heißen.
loesung: |
  **Ansatz:** Call-by-value. Jeder Aufruf kopiert den aktuellen Wert von `z` aus `main`.
  ---
  Beide Aufrufe bekommen 1, rechnen 1 + 100 und geben 101 aus. `main` ändert sich dabei nicht.
  ---
  Die letzte Zeile gibt das `z` aus `main` aus: `1`.
```

```aufgabe
id: me-par-lueckentext-kopf
titel: Den Kopf zum Aufruf ergänzen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze die Typen der beiden Parameter so, dass das Programm kompiliert. Beide Aufrufe in `main` sollen funktionieren.
teile:
  - typ: lueckentext
    code: |
      public class Preisliste {
          public static void zeigePreis(___ name, ___ preis) {
              System.out.println(name + " kostet " + preis + " Euro");
          }

          public static void main(String[] args) {
              zeigePreis("Kaffee", 3.5);
              zeigePreis("Tee", 2);
          }
      }
    luecken: [["String"], ["double"]]
    fehler:
      - wert: ["String", "int"]
        meldung: Der erste Aufruf übergibt `3.5`. Eine Kommazahl passt nicht automatisch in einen `int`-Parameter.
      - wert: ["char", "double"]
        meldung: '`"Kaffee"` steht in doppelten Anführungszeichen. Das ist ein `String`, kein einzelnes Zeichen.'
hinweise:
  - Schau dir die Argumente an. `"Kaffee"` ist ein Text, `3.5` eine Kommazahl, `2` eine ganze Zahl.
loesung: |
  **Ansatz:** Für jeden Parameter einen Typ wählen, zu dem alle Argumente an dieser Position passen.
  ---
  Position 1 bekommt `"Kaffee"` und `"Tee"`, also `String`.
  ---
  Position 2 bekommt `3.5` und `2`. `double` nimmt beides, denn `int` wird automatisch zu `double`. Ausgabe beim Tee übrigens `Tee kostet 2.0 Euro`.
```

```aufgabe
id: me-par-auswahl-aufrufe
titel: Welche Aufrufe kompilieren?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Gegeben ist der Methodenkopf `public static void zeichne(double groesse, int anzahl)`.
  Welche Aufrufe kompilieren? Wähle alle passenden.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '`zeichne(3, 4);`'
      - '`zeichne(2.5, 3);`'
      - '`zeichne(1, 2.0);`'
      - '`zeichne(4);`'
      - "`zeichne('a', 'b');`"
    richtig: [0, 1, 4]
    fehler:
      - wert: [0, 1]
        meldung: "Auch `char` wird automatisch erweitert: `'a'` passt in `double` (97.0) und `'b'` in `int` (98)."
      - wert: [0, 1, 2, 4]
        meldung: '`2.0` ist ein `double`. Java wandelt beim Aufruf nie automatisch von `double` nach `int` um.'
      - wert: [1]
        meldung: '`int` wird automatisch zu `double`. Der Aufruf `zeichne(3, 4)` ist deshalb erlaubt.'
hinweise:
  - Prüfe für jeden Aufruf zuerst die Anzahl der Argumente, dann jede Position einzeln.
  - 'Erlaubt sind nur Umwandlungen ohne Verlust: `char` nach `int`, `int` nach `double`, `char` nach `double`.'
loesung: |
  **Ansatz:** Anzahl der Argumente prüfen, dann für jede Position, ob der Typ passt oder verlustfrei erweitert wird.
  ---
  `zeichne(3, 4)`: 3 wird zu 3.0. Erlaubt. `zeichne(2.5, 3)`: passt genau. Erlaubt.
  ---
  `zeichne(1, 2.0)`: `2.0` müsste von `double` nach `int`. Nicht erlaubt. `zeichne(4)`: Es fehlt ein Argument. Nicht erlaubt.
  ---
  `zeichne('a', 'b')`: `'a'` wird zu 97.0, `'b'` zu 98. Erlaubt, auch wenn es seltsam aussieht.
```

```aufgabe
id: me-par-trace-tausch
titel: Der Tausch, der nichts tauscht
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Verfolge die Variablen. Schreib `-`, wenn eine Variable an dieser Stelle nicht existiert.

  ```java
  public class Tausch {
      public static void tausche(int x, int y) {
          int hilf = x;
          x = y;
          y = hilf;
          System.out.println(x + " " + y);
      }

      public static void main(String[] args) {
          int a = 1, b = 2;
          tausche(a, b);
          System.out.println(a + " " + b);
      }
  }
  ```
teile:
  - typ: trace
    spalten: [a, b, x, y, hilf]
    zeilen: ["nach int a = 1, b = 2", "beim Eintritt in tausche", "nach int hilf = x", "nach x = y", "nach y = hilf", "zurück in main"]
    vorgabe: 1
    loesung:
      - [1, 2, "-", "-", "-"]
      - [1, 2, 1, 2, "-"]
      - [1, 2, 1, 2, 1]
      - [1, 2, 2, 2, 1]
      - [1, 2, 2, 1, 1]
      - [1, 2, "-", "-", "-"]
    fehler:
      - wert: [1, 2, "-", "-", "-", 1, 2, 1, 2, "-", 1, 2, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 1, "-", "-", "-"]
        meldung: Die letzte Zeile ist der springende Punkt. `x` und `y` sind Kopien. Ihr Tausch ändert `a` und `b` in `main` nicht.
hinweise:
  - Beim Eintritt bekommen `x` und `y` Kopien der Werte von `a` und `b`.
  - Nach dem Ende von `tausche` existieren `x`, `y` und `hilf` nicht mehr. `a` und `b` wurden nie verändert.
loesung: |
  **Ansatz:** Call-by-value. `x` und `y` sind neue Kästchen mit Kopien von `a` und `b`.
  ---
  In der Methode wird mit `hilf` getauscht: Danach ist `x = 2` und `y = 1`. Die Methode gibt `2 1` aus.
  ---
  Zurück in `main` sind `x`, `y` und `hilf` verschwunden. `a` und `b` sind unverändert 1 und 2, `main` gibt `1 2` aus.
  ---
  Folgerung: Mit einer Methode, die nur ihre Parameter verändert, kann man in Java keine zwei `int`-Variablen des Aufrufers tauschen.
```

```aufgabe
id: me-par-code-dreieck
titel: Ein Dreieck mit Parametern
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreibe `druckeDreieck(int hoehe, char zeichen)`. Die Methode gibt ein Dreieck aus `hoehe` Zeilen aus.
  Zeile 1 enthält das Zeichen einmal, Zeile 2 zweimal und so weiter. Muster dieser Art kennst du aus
  [5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen).

  Vorbedingung: `hoehe >= 0`. Eine **Vorbedingung** sagt, was du über die Argumente voraussetzen darfst. Hier
  wird die Methode also nie mit einer negativen Höhe aufgerufen. Genaueres dazu steht in
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).

  Beispiel: `druckeDreieck(3, '*')` gibt aus:
  ```
  *
  **
  ***
  ```
teile:
  - typ: code
    vorlage: |
      public class Dreieck {
          public static void druckeDreieck(int hoehe, char zeichen) {
              // TODO
          }

          public static void main(String[] args) {
              druckeDreieck(3, '*');
          }
      }
    musterloesung: |
      public class Dreieck {
          public static void druckeDreieck(int hoehe, char zeichen) {
              for (int zeile = 1; zeile <= hoehe; zeile++) {
                  for (int k = 0; k < zeile; k++) {
                      System.out.print(zeichen);
                  }
                  System.out.println();
              }
          }

          public static void main(String[] args) {
              druckeDreieck(3, '*');
          }
      }
    tests:
      - { aufruf: "druckeDreieck(3, '*')", stdout: "*\n**\n***\n" }
      - { aufruf: "druckeDreieck(1, '#')", stdout: "#\n" }
      - { aufruf: "druckeDreieck(0, 'x')", stdout: "", beschreibung: "Höhe 0: keine Ausgabe" }
      - { aufruf: "druckeDreieck(4, 'o')", stdout: "o\noo\nooo\noooo\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zeile 1 braucht ein Zeichen, Zeile 2 zwei. Die innere Schleife hängt also von der Nummer der Zeile ab." }
      - { wert: 2, meldung: "Verwendest du wirklich den Parameter `zeichen`? Ein fest eingetipptes `'*'` passt nur zum ersten Test." }
hinweise:
  - Du brauchst zwei Schleifen. Die äußere zählt die Zeilen, die innere gibt die Zeichen einer Zeile aus.
  - 'Die innere Schleife läuft so oft, wie die Nummer der aktuellen Zeile angibt. Nach der inneren Schleife kommt `System.out.println();`.'
loesung: |
  **Ansatz:** Eine Schleife über die Zeilen 1 bis `hoehe`. In Zeile `zeile` wird das Zeichen `zeile`-mal ausgegeben.
  ---
  ```java
  for (int zeile = 1; zeile <= hoehe; zeile++) {
      for (int k = 0; k < zeile; k++) {
          System.out.print(zeichen);
      }
      System.out.println();
  }
  ```
  ---
  Kontrolle mit `hoehe = 0`: Die äußere Schleife läuft nicht, es gibt keine Ausgabe. Das passt zur Vorbedingung `hoehe >= 0`.
```

```aufgabe
id: me-par-ausgabe-inkrement
titel: i + 1 oder i++ als Argument?
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfrage „func(i+1) vs. func(i++)“ der Aufgabenblätter (nachgebaut)
angabe: |
  Eine ähnliche Frage steht als Zusatzfrage auf Aufgabenblatt 2. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Inkrement {
          public static void zeige(int a, int b) {
              System.out.println(a + " " + b);
          }

          public static void main(String[] args) {
              int i = 3;
              zeige(i + 1, i);
              zeige(i++, i);
              zeige(i, i + 1);
              System.out.println(i);
          }
      }
    loesung: |
      4 3
      3 4
      4 5
      4
    fehler:
      - wert: "4 3\n4 4\n5 6\n5"
        meldung: '`i + 1` rechnet nur einen Wert aus und ändert `i` nicht. Erst `i++` erhöht `i`, und zwar genau einmal.'
      - wert: "4 3\n3 3\n4 5\n4"
        meldung: Die Argumente werden von links nach rechts ausgewertet. Nach `i++` im ersten Argument hat `i` schon den Wert 4, wenn das zweite Argument gelesen wird.
      - wert: "4 4\n3 4\n4 5\n4"
        meldung: '`i + 1` verändert `i` nicht. Das zweite Argument des ersten Aufrufs ist deshalb noch 3.'
hinweise:
  - '`i + 1` ist nur ein Ausdruck. Er liefert einen Wert, die Variable `i` bleibt gleich.'
  - '`i++` liefert den **alten** Wert von `i` und erhöht danach `i` um 1. Die Argumente werden von links nach rechts ausgewertet.'
loesung: |
  **Ansatz:** Argumente von links nach rechts auswerten und genau mitschreiben, wann sich `i` ändert.
  ---
  `zeige(i + 1, i)`: `i + 1` ist 4, `i` bleibt 3. Ausgabe `4 3`.
  ---
  `zeige(i++, i)`: Das erste Argument ist der alte Wert 3, danach wird `i` zu 4. Das zweite Argument liest schon 4. Ausgabe `3 4`.
  ---
  `zeige(i, i + 1)` gibt `4 5` aus, und die letzte Zeile zeigt `i = 4`. Merksatz fürs Gespräch: `func(i + 1)` übergibt den nächsten Wert, ohne `i` zu ändern. `func(i++)` übergibt den alten Wert und erhöht `i`.
```

```aufgabe
id: me-par-code-rahmen
titel: Ein hohler Rahmen
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreibe `druckeRahmen(int breite, int hoehe, char rand)`. Die Methode gibt ein Rechteck aus `hoehe`
  Zeilen und `breite` Spalten aus. Am Rand steht das Zeichen `rand`, innen stehen Leerzeichen.
  Vorbedingung: `breite >= 2` und `hoehe >= 2`.

  Beispiel: `druckeRahmen(5, 3, '#')` gibt aus:
  ```
  #####
  #   #
  #####
  ```
teile:
  - typ: code
    vorlage: |
      public class Rahmen {
          public static void druckeRahmen(int breite, int hoehe, char rand) {
              // TODO
          }

          public static void main(String[] args) {
              druckeRahmen(5, 3, '#');
          }
      }
    musterloesung: |
      public class Rahmen {
          public static void druckeRahmen(int breite, int hoehe, char rand) {
              for (int zeile = 1; zeile <= hoehe; zeile++) {
                  for (int spalte = 1; spalte <= breite; spalte++) {
                      if (zeile == 1 || zeile == hoehe || spalte == 1 || spalte == breite) {
                          System.out.print(rand);
                      } else {
                          System.out.print(' ');
                      }
                  }
                  System.out.println();
              }
          }

          public static void main(String[] args) {
              druckeRahmen(5, 3, '#');
          }
      }
    tests:
      - { aufruf: "druckeRahmen(5, 3, '#')", stdout: "#####\n#   #\n#####\n" }
      - { aufruf: "druckeRahmen(2, 2, '+')", stdout: "++\n++\n", beschreibung: "kleinster Rahmen ohne Innenraum" }
      - { aufruf: "druckeRahmen(4, 5, 'o')", stdout: "oooo\no  o\no  o\no  o\noooo\n" }
      - { aufruf: "druckeRahmen(3, 4, '*')", stdout: "***\n* *\n* *\n***\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bei Breite 2 und Höhe 2 gibt es keinen Innenraum. Jede Stelle liegt am Rand." }
      - { wert: 3, meldung: "Vertauschst du Breite und Höhe? Die äußere Schleife zählt die Zeilen (`hoehe`), die innere die Spalten (`breite`)." }
hinweise:
  - Zwei Schleifen wie beim Dreieck. Für jede Stelle entscheidest du, ob sie am Rand liegt.
  - Eine Stelle liegt am Rand, wenn sie in der ersten oder letzten Zeile oder in der ersten oder letzten Spalte steht. Verknüpfe die vier Vergleiche mit `||`.
loesung: |
  **Ansatz:** Jede Stelle (Zeile, Spalte) einzeln entscheiden: Rand oder innen. Die Entscheidung ist eine `if`-Bedingung mit vier Vergleichen.
  ---
  ```java
  for (int zeile = 1; zeile <= hoehe; zeile++) {
      for (int spalte = 1; spalte <= breite; spalte++) {
          if (zeile == 1 || zeile == hoehe || spalte == 1 || spalte == breite) {
              System.out.print(rand);
          } else {
              System.out.print(' ');
          }
      }
      System.out.println();
  }
  ```
  ---
  Kontrolle mit `druckeRahmen(5, 3, '#')`: Zeile 2 hat nur in Spalte 1 und 5 ein `#`, dazwischen drei Leerzeichen. Das passt zum Beispiel.
```

```aufgabe
id: me-par-text-kopie
titel: Warum bleibt die Variable gleich?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitstudent sagt im Feedbackgespräch: „Meine Methode `verdopple(int x)` setzt `x = x * 2`, aber in
  `main` ist die Zahl danach nicht verdoppelt. Java hat einen Fehler.“ Erkläre in zwei bis drei Sätzen,
  was wirklich passiert und wie man das gewünschte Verhalten erreicht.
teile:
  - typ: text
    muster: |
      Java übergibt Argumente mit call-by-value: Beim Aufruf wird der Wert der Variable in den Parameter `x`
      kopiert. `x = x * 2` ändert nur diese Kopie, die am Ende der Methode verschwindet. Die Variable in
      `main` wird nie angefasst. Wer das Ergebnis in `main` braucht, gibt es mit `return x * 2;` zurück
      und schreibt in `main` zum Beispiel `zahl = verdopple(zahl);`.
hinweise:
  - Was genau wird beim Aufruf in den Parameter geschrieben, die Variable selbst oder ihr Wert?
  - Wie kommt ein Ergebnis aus einer Methode zurück zum Aufrufer, wenn nicht über den Parameter?
loesung: |
  **Ansatz:** Den Mechanismus call-by-value benennen und auf das Beispiel anwenden.
  ---
  Der Parameter `x` ist eine eigene Variable der Methode. Beim Aufruf bekommt er eine Kopie des Werts.
  ---
  Die Verdopplung betrifft nur die Kopie. Abhilfe: Rückgabewert verwenden, also `return x * 2;` und in `main` `zahl = verdopple(zahl);`. Das zeigt [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
```

## Rückgabewerte und return

```aufgabe
id: me-rue-check-math
titel: Methoden, die etwas liefern
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Die Klasse `Math` kennst du aus [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).
teile:
  - typ: ausgabe
    code: |
      System.out.println(Math.max(3, 8) * 2);
      System.out.println(Math.abs(-4) + 1);
    loesung: |
      16
      5
    fehler:
      - wert: "8\n4"
        meldung: Der Wert von `Math.max(3, 8)` wird im Ausdruck weiterverwendet. Danach wird noch mit 2 multipliziert beziehungsweise 1 addiert.
hinweise:
  - '`Math.max(3, 8)` liefert die größere Zahl, `Math.abs(-4)` den Betrag.'
loesung: |
  `Math.max(3, 8)` liefert 8, und 8 · 2 = 16.
  ---
  `Math.abs(-4)` liefert 4, und 4 + 1 = 5.
```

`Math.max(3, 8)` gibt nichts auf der Konsole aus. Die Methode **liefert** ein Ergebnis, und dieses
Ergebnis rechnet der Ausdruck weiter. Genau so etwas kannst du auch selbst schreiben. Dafür ersetzt du
`void` im Methodenkopf durch den Typ des Ergebnisses und gibst das Ergebnis mit `return` zurück.

```java
public static int quadrat(int x) {
    return x * x;
}
```

:::definition[Rückgabetyp und return-Anweisung]
Der **Rückgabetyp** steht im Methodenkopf vor dem Namen. Er sagt, welchen Typ das Ergebnis der Methode
hat, zum Beispiel `int`, `double`, `boolean`, `char` oder `String`. `void` bedeutet „kein Ergebnis“.

Die Anweisung `return ausdruck;` rechnet den Ausdruck aus, **beendet die Methode sofort** und liefert
den Wert an die Aufrufstelle. Dort wird der Aufruf durch diesen Wert ersetzt. Der Wert heißt
**Rückgabewert**.
:::

**Beispiel:** `public static boolean istGerade(int n) { return n % 2 == 0; }` liefert `true` oder
`false`. Den Aufruf kann man direkt als Bedingung verwenden: `if (istGerade(zahl)) { ... }`.
**Kein Beispiel:** Eine Methode `public static void druckeQuadrat(int x) { System.out.println(x * x); }`
liefert nichts zurück. Der Ausdruck `druckeQuadrat(3) + 1` kompiliert nicht. Der Compiler meldet
`'void' type not allowed here`.

:::beispiel[Ein Aufruf wird durch seinen Wert ersetzt]
```java
public class Quadrate {
    public static int quadrat(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        int s = quadrat(3) + quadrat(4);
        System.out.println(s);
        System.out.println(quadrat(quadrat(2)));
    }
}
```

1. In `int s = quadrat(3) + quadrat(4);` ruft Java zuerst `quadrat(3)` auf. `x` ist 3, `return 3 * 3` liefert 9. Im Ausdruck steht jetzt gedanklich `9 + quadrat(4)`.
2. Dann `quadrat(4)`, Rückgabewert 16. Der Ausdruck wird zu `9 + 16 = 25`, und `s` bekommt 25.
3. `System.out.println(s)` gibt `25` aus.
4. `quadrat(quadrat(2))`: Das Argument ist selbst ein Aufruf. Es wird **zuerst** ausgewertet: `quadrat(2)` liefert 4. Danach läuft `quadrat(4)` und liefert 16. Ausgabe `16`.

```
25
16
```

Beachte: `quadrat` selbst gibt nie etwas aus. Jede Ausgabe stammt von `println` in `main`.
:::

Eine Methode darf mehrere `return`-Anweisungen haben. Die erste, die erreicht wird, beendet die
Methode. Auch eine `void`-Methode darf `return;` ohne Wert enthalten. Das beendet sie vorzeitig.

:::beispiel[Mehrere return-Anweisungen]
```java
public class Vergleich {
    public static int maximum(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static void pruefeAlter(int alter) {
        if (alter < 0) {
            System.out.println("ungueltig");
            return;
        }
        System.out.println("Alter: " + alter);
    }

    public static void main(String[] args) {
        System.out.println(maximum(4, 9));
        System.out.println(maximum(12, 5) - 2);
        pruefeAlter(-3);
        pruefeAlter(20);
    }
}
```

1. `maximum(4, 9)`: `4 > 9` ist falsch. Das erste `return` wird übersprungen, `return b` liefert 9.
2. `maximum(12, 5)`: `12 > 5` ist wahr, `return a` liefert 12 und beendet die Methode sofort. Die Zeile `return b;` läuft nicht mehr. In `main` wird `12 - 2 = 10` ausgegeben.
3. `pruefeAlter(-3)`: Die Bedingung ist wahr. Es erscheint `ungueltig`, dann beendet `return;` die Methode. Die Zeile mit `Alter:` läuft nicht.
4. `pruefeAlter(20)`: Die Bedingung ist falsch, es erscheint `Alter: 20`.

```
9
10
ungueltig
Alter: 20
```
:::

```aufgabe
id: me-rue-check-ende
titel: Was passiert nach return?
niveau: 1
art: check
angabe: |
  Gegeben ist `public static int f(int n) { if (n > 5) { return 1; } return 2; }`. Was liefert `f(9)`?
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "2"
        meldung: '`return 1;` beendet die Methode sofort. Die Zeile `return 2;` wird bei `n = 9` nie erreicht.'
loesung: |
  `9 > 5` ist wahr, also läuft `return 1;`.
  ---
  Damit ist die Methode beendet. Das Ergebnis ist 1.
```

:::achtung[missing return statement, obwohl alle Fälle abgedeckt sind]
Diese Methode sieht vollständig aus:

```java
public static String art(int a) {
    if (a > 0) {
        return "positiv";
    } else if (a <= 0) {
        return "nicht positiv";
    }
}                                  // error: missing return statement
```

Für dich ist klar, dass eine der beiden Bedingungen immer wahr ist. Der Compiler prüft aber nicht, was
die Bedingungen bedeuten. Er sieht nur einen Weg ohne `return`: Beide `if` könnten falsch sein. Die
Lösung ist ein `else` ohne Bedingung, also `} else { return "nicht positiv"; }`.
:::

:::achtung[Ausgeben statt zurückgeben]
Die Angabe lautet: „Die Methode **liefert** die Summe zurück.“ Eine typische falsche Lösung ist

```java
public static void summe(int a, int b) {
    System.out.println(a + b);       // falsch: gibt aus statt zurückzugeben
}
```

Der Aufruf `int s = summe(2, 3);` kompiliert dann nicht (`void cannot be converted to int`). Wenn die
Angabe „liefert zurück“ sagt, ist der Rückgabetyp `int` und der Rumpf endet mit `return a + b;`. Wenn sie
„gibt aus“ sagt, ist `println` richtig. Achte im Test genau auf dieses Wort.
:::

### Rückgabe und Seiteneffekt

Eine Methode kann zwei Arten von Wirkung haben. Die eine ist der Rückgabewert. Die andere ist alles,
was sie zusätzlich „nebenbei“ verändert und was man von außen bemerkt. Das nennt man einen
**Seiteneffekt**.

:::definition[Seiteneffekt]
Ein **Seiteneffekt** einer Methode ist jede von außen sichtbare Wirkung außer dem Rückgabewert. Beispiele
sind eine Ausgabe auf der Konsole oder die Änderung einer Klassenvariable (siehe
[6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen)).
:::

**Beispiel:** `System.out.println` hat einen Seiteneffekt (die Ausgabe) und keinen Rückgabewert.
`quadrat(int x)` hat einen Rückgabewert und keinen Seiteneffekt. **Kein Seiteneffekt** ist die Zuweisung
an einen Parameter, etwa `x = x * 2;`. Sie bleibt in der Methode und ist von außen nicht zu bemerken.

Im Quiz kommt oft eine Methode mit **beidem** vor: Sie gibt etwas aus und liefert etwas zurück. Dann
musst du sehr genau auf die Reihenfolge der Ausgaben achten.

:::beispiel[Ausgabe und Rückgabe in einer Methode]
```java
public class Weiter {
    public static String weiter(String a, String b) {
        System.out.println(a);
        return b + a;
    }

    public static void main(String[] args) {
        String s = "X";
        String t = "Y";
        System.out.println(weiter(s, t));
        weiter(t, s);
        System.out.println(weiter(t, t));
    }
}
```

1. `System.out.println(weiter(s, t))`: Bevor `println` etwas ausgeben kann, braucht es seinen Wert. Also läuft zuerst `weiter("X", "Y")`. Die Methode gibt `X` aus (Seiteneffekt) und liefert `"Y" + "X"`, also `"YX"`. Jetzt gibt `println` den Wert `YX` aus.
2. `weiter(t, s);` steht allein als Anweisung. Die Methode gibt `Y` aus und liefert `"XY"`. Diesen Wert benutzt niemand, er geht verloren. Es erscheint nur `Y`.
3. `System.out.println(weiter(t, t))`: Ausgabe `Y` in der Methode, Rückgabewert `"YY"`, dann gibt `println` den Wert `YY` aus.

```
X
YX
Y
Y
YY
```
:::

:::merke[Aufrufsequenzen im Quiz lösen]
1. Bei `System.out.println(f(...))` entstehen **zuerst** die Ausgaben innerhalb von `f`, **danach** die Zeile mit dem Rückgabewert.
2. Steht `f(...);` allein, bleiben nur die Ausgaben innerhalb von `f`. Der Rückgabewert geht verloren.
3. Ordne jedem Aufruf seine Zeilen zu und vergleiche Block für Block mit der gesuchten Ausgabe.
:::

:::achtung[Den Rückgabewert ignoriert und trotzdem eine Ausgabe erwartet]
Zum Beispiel „Ein Aufruf wird durch seinen Wert ersetzt“ schreibt jemand zusätzlich die Zeile
`quadrat(5);` in `main` und erwartet die Ausgabe `25`. Es erscheint aber nichts. Der Aufruf berechnet
25, doch der Wert wird weder ausgegeben noch gespeichert. Richtig ist `System.out.println(quadrat(5));`
oder `int q = quadrat(5);`.
:::

Kann eine Methode **zwei** Werte zurückgeben? Nein. `return` liefert genau einen Wert. Diese Frage steht
als Zusatzfrage auf Aufgabenblatt 2. Braucht man mehrere Ergebnisse, schreibt man mehrere Methoden, oder man
verpackt die Werte später in ein Array (siehe
[12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert)).

```aufgabe
id: me-rue-gefuehrt-sequenz
titel: Welche Aufrufe erzeugen diese Ausgabe?
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: TUWEL-Test zur Vorbereitung 2021, Frage 8 (nachgebaut)
angabe: |
  Gegeben sind die Methode und zwei Variablen:

  ```java
  public static String h(String a, String b) {
      System.out.println(a);
      return b;
  }

  String p = "Ab";
  String q = "Cd";
  ```

  Welche Folge von Aufrufen erzeugt diese Ausgabe?

  ```
  Ab
  Cd
  Cd
  Cd
  Cd
  Ab
  ```
teile:
  - typ: auswahl
    optionen:
      - "`System.out.println(h(p, q));` `System.out.println(h(q, q));` `System.out.println(h(q, p));`"
      - "`System.out.println(h(q, p));` `System.out.println(h(q, q));` `System.out.println(h(p, q));`"
      - "`System.out.println(h(p, q));` `System.out.println(h(p, p));` `System.out.println(h(q, p));`"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei `h(q, p)` gibt die Methode zuerst `q` aus, also `Cd`. Die Ausgabe beginnt aber mit `Ab`.
      - wert: 2
        meldung: '`h(p, p)` erzeugt `Ab` und `Ab`. In der Mitte der gesuchten Ausgabe steht aber zweimal `Cd`.'
gefuehrt:
  - text: Wie viele Zeilen erzeugt ein einzelner Aufruf `System.out.println(h(x, y));`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Eine Zeile kommt aus `h` selbst (das erste Argument), eine zweite aus `println` (der Rückgabewert, also das zweite Argument).
  - text: Welche der beiden Zeilen erscheint zuerst?
    teil:
      typ: auswahl
      optionen: ['das erste Argument', 'der Rückgabewert (das zweite Argument)']
      richtig: [0]
    erklaerung: '`println` braucht den Rückgabewert, bevor es etwas ausgeben kann. Also läuft zuerst `h` mit seiner eigenen Ausgabe.'
  - text: Die ersten beiden Zeilen sind `Ab` und `Cd`. Welcher Aufruf erzeugt sie?
    teil:
      typ: auswahl
      optionen: ['`h(p, q)`', '`h(q, p)`', '`h(q, q)`']
      richtig: [0]
    erklaerung: Erstes Argument `Ab` ist `p`, zweites Argument `Cd` ist `q`.
  - text: Welcher Aufruf erzeugt die letzten beiden Zeilen `Cd` und `Ab`?
    teil:
      typ: auswahl
      optionen: ['`h(p, q)`', '`h(q, p)`', '`h(p, p)`']
      richtig: [1]
    erklaerung: Erst wird `q` ausgegeben (`Cd`), dann `p` zurückgeliefert (`Ab`). Die mittleren Zeilen `Cd`, `Cd` stammen von `h(q, q)`.
hinweise:
  - Jeder Aufruf erzeugt genau zwei Zeilen. Teile die Ausgabe in Zweierblöcke.
  - In jedem Block ist die erste Zeile das erste Argument und die zweite Zeile das zweite Argument.
loesung: |
  **Ansatz:** Jeder Aufruf `System.out.println(h(x, y))` erzeugt zuerst `x` (Ausgabe in `h`), dann `y` (Rückgabewert, ausgegeben von `println`).
  ---
  Die Ausgabe in Zweierblöcke teilen: `Ab Cd`, `Cd Cd`, `Cd Ab`.
  ---
  Die Blöcke gehören zu `h(p, q)`, `h(q, q)` und `h(q, p)`. Das ist die erste Option. Kontrolle: Option 2 beginnt mit `Cd`, Option 3 enthält einen Block `Ab Ab`.
```

```aufgabe
id: me-rue-ausgabe-verschachtelt
titel: Rückgabewerte weiterrechnen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Rechnen {
          public static int dreifach(int x) {
              return 3 * x;
          }

          public static int minusEins(int x) {
              return x - 1;
          }

          public static void main(String[] args) {
              System.out.println(dreifach(2) + minusEins(10));
              System.out.println(dreifach(minusEins(4)));
              System.out.println(minusEins(dreifach(minusEins(1))));
              int a = dreifach(1);
              a = dreifach(a);
              System.out.println(a);
          }
      }
    loesung: |
      15
      9
      -1
      9
    fehler:
      - wert: "15\n11\n-1\n9"
        meldung: Bei `dreifach(minusEins(4))` wird zuerst das innere `minusEins(4)` ausgewertet. Erst mit diesem Ergebnis 3 wird `dreifach` aufgerufen.
      - wert: "15\n9\n-1\n3"
        meldung: '`a = dreifach(a);` setzt `a` auf das Dreifache des alten Werts, also von 3 auf 9.'
hinweise:
  - Verschachtelte Aufrufe werden von innen nach außen ausgewertet.
loesung: |
  **Ansatz:** Jeden Aufruf durch seinen Rückgabewert ersetzen, innere Aufrufe zuerst.
  ---
  Zeile 1: 6 + 9 = 15. Zeile 2: `minusEins(4)` = 3, `dreifach(3)` = 9.
  ---
  Zeile 3: `minusEins(1)` = 0, `dreifach(0)` = 0, `minusEins(0)` = -1. Zum Schluss wird `a` erst 3 und dann 9.
```

```aufgabe
id: me-rue-rf-return
titel: Aussagen über return
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Mit `return a, b;` kann eine Methode zwei Werte gleichzeitig zurückgeben.
        richtig: false
        erklaerung: '`return` liefert genau einen Wert. `return a, b;` kompiliert nicht.'
      - text: Nach einem ausgeführten `return` läuft keine weitere Anweisung dieser Methode mehr.
        richtig: true
        erklaerung: '`return` beendet die Methode sofort.'
      - text: Eine `void`-Methode darf die Anweisung `return;` enthalten.
        richtig: true
        erklaerung: '`return;` ohne Wert beendet eine `void`-Methode vorzeitig.'
      - text: Den Rückgabewert einer Methode muss man immer in einer Variable speichern, sonst kompiliert der Aufruf nicht.
        richtig: false
        erklaerung: Ein Aufruf wie `quadrat(5);` kompiliert. Der Wert geht dann einfach verloren.
    fehler:
      - wert: [f, r, f, f]
        meldung: '`return;` ohne Wert ist in `void`-Methoden erlaubt und beendet sie vorzeitig.'
      - wert: [f, r, r, r]
        meldung: Ein Rückgabewert darf ignoriert werden. Der Compiler verlangt nicht, dass man ihn verwendet.
hinweise:
  - Denk an das Beispiel mit `pruefeAlter`. Dort steht `return;` in einer `void`-Methode.
loesung: |
  **Ansatz:** Jede Aussage an einem kleinen Gegenbeispiel prüfen.
  ---
  Aussage 1 falsch: Es gibt immer genau einen Rückgabewert. Aussage 2 richtig: `return` beendet die Methode.
  ---
  Aussage 3 richtig, siehe `pruefeAlter`. Aussage 4 falsch: `quadrat(5);` kompiliert, der Wert wird verworfen.
```

```aufgabe
id: me-rue-code-teiler
titel: Ist t ein Teiler von n?
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Schreibe `istTeiler(int teiler, int zahl)`. Die Methode liefert `true`, wenn `zahl` ohne Rest durch
  `teiler` teilbar ist, sonst `false`. Sie gibt nichts aus. Vorbedingung: `teiler != 0`.
teile:
  - typ: code
    vorlage: |
      public class Teiler {
          public static boolean istTeiler(int teiler, int zahl) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(istTeiler(3, 12));
          }
      }
    musterloesung: |
      public class Teiler {
          public static boolean istTeiler(int teiler, int zahl) {
              return zahl % teiler == 0;
          }

          public static void main(String[] args) {
              System.out.println(istTeiler(3, 12));
          }
      }
    tests:
      - { aufruf: "istTeiler(3, 12)", erwartet: "true" }
      - { aufruf: "istTeiler(5, 12)", erwartet: "false" }
      - { aufruf: "istTeiler(7, 0)", erwartet: "true", beschreibung: "0 ist durch jede Zahl teilbar" }
      - { aufruf: "istTeiler(-4, 8)", erwartet: "true", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Liefert deine Methode wirklich ein Ergebnis mit `return`? Eine Ausgabe mit `println` zählt nicht als Rückgabewert." }
      - { wert: 2, meldung: "Vertauschst du die Rollen? Geteilt wird `zahl` durch `teiler`, also `zahl % teiler`." }
hinweise:
  - Teilbar heißt „Rest 0“. Den Rest liefert der Operator `%`.
  - 'Ein Vergleich wie `zahl % teiler == 0` ist selbst schon ein `boolean`. Du kannst ihn direkt zurückgeben.'
loesung: |
  **Ansatz:** Der Rückgabetyp ist `boolean`. Gesucht ist ein Ausdruck, der genau bei Teilbarkeit `true` ist.
  ---
  `zahl % teiler == 0` ist `true`, wenn kein Rest bleibt. Also: `return zahl % teiler == 0;`
  ---
  Kontrolle: `12 % 3 = 0`, also `true`. `12 % 5 = 2`, also `false`. Ein `if` mit `return true;` und `return false;` funktioniert auch, ist aber länger.
```

```aufgabe
id: me-rue-zeilen-return
titel: Drei Fehler rund um return
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  In dieser Klasse stecken drei Fehler. Betrachte jeden Fehler für sich und markiere die Zeile, auf die
  der Compiler bei diesem Fehler zeigt. Achtung: `javac` meldet hier zuerst nur den Fehler in Zeile 13.
  Die beiden anderen meldet er erst, wenn dieser behoben ist.
teile:
  - typ: zeilen
    code: |
      public class Rueckgabe {
          public static int doppelt(int x) {
              return 2 * x;
          }

          public static int halb(int x) {
              if (x > 0) {
                  return x / 2;
              }
          }

          public static void gruss() {
              return "Hallo";
          }

          public static int plus(int a, int b) {
              return a + b;
              System.out.println("fertig");
          }
      }
    loesung: [10, 13, 18]
    fehler:
      - wert: [7, 13, 18]
        meldung: Bei einem fehlenden `return` zeigt der Compiler auf die schließende Klammer der Methode, denn dort endet der Weg ohne Rückgabewert.
      - wert: [10, 13]
        meldung: Kann Zeile 18 jemals laufen? Direkt davor beendet `return` die Methode.
      - wert: [10, 18]
        meldung: '`gruss` ist eine `void`-Methode. Darf sie einen Wert zurückgeben?'
hinweise:
  - 'Prüfe jede Methode: Endet jeder Weg mit `return`? Passt der zurückgegebene Wert zum Rückgabetyp? Steht etwas nach einem `return`?'
  - 'Der Compiler meldet `missing return statement` an der schließenden Klammer der Methode, `incompatible types: unexpected return value` am `return` und `unreachable statement` an der Zeile, die nie erreicht wird.'
loesung: |
  **Ansatz:** Jede Methode einzeln prüfen: alle Wege mit `return`, passender Typ, nichts hinter `return`.
  ---
  `halb`: Für `x <= 0` gibt es keinen `return`. Der Compiler meldet `missing return statement` in Zeile 10.
  ---
  `gruss` ist `void`, liefert aber `"Hallo"`. Fehler `unexpected return value` in Zeile 13.
  ---
  `plus`: Zeile 18 steht nach `return` und kann nie laufen. Fehler `unreachable statement`. `doppelt` ist korrekt.
```

```aufgabe
id: me-rue-ausgabe-seiteneffekt
titel: Zählen mit Nebenwirkung
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Nebenwirkung {
          public static int zaehle(int n) {
              System.out.println("zaehle " + n);
              return n + 1;
          }

          public static void main(String[] args) {
              int x = zaehle(zaehle(1));
              System.out.println(x);
              zaehle(x);
          }
      }
    loesung: |
      zaehle 1
      zaehle 2
      3
      zaehle 3
    fehler:
      - wert: "zaehle 2\nzaehle 1\n3\nzaehle 3"
        meldung: Der innere Aufruf `zaehle(1)` läuft zuerst, weil sein Ergebnis das Argument des äußeren Aufrufs ist.
      - wert: "zaehle 1\nzaehle 2\n3\nzaehle 3\n4"
        meldung: '`zaehle(x);` steht allein. Der Rückgabewert 4 wird nicht ausgegeben.'
hinweise:
  - Erst der innere Aufruf, dann der äußere. Jeder Aufruf gibt eine Zeile aus und liefert `n + 1`.
  - Ein Aufruf, dessen Rückgabewert niemand verwendet, erzeugt nur die Ausgaben innerhalb der Methode.
loesung: |
  **Ansatz:** Innere Aufrufe zuerst, und bei jedem Aufruf Ausgabe (Seiteneffekt) und Rückgabewert getrennt notieren.
  ---
  `zaehle(1)` gibt `zaehle 1` aus und liefert 2. Dann `zaehle(2)`: Ausgabe `zaehle 2`, Rückgabe 3. `x` wird 3.
  ---
  `println(x)` gibt `3` aus. `zaehle(3)` gibt `zaehle 3` aus. Der Rückgabewert 4 geht verloren.
```

```aufgabe
id: me-rue-ausgabe-suche
titel: Früh aussteigen mit return
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Suche {
          public static int findeErstes(String s, char c) {
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) == c) {
                      return i;
                  }
              }
              return -1;
          }

          public static void main(String[] args) {
              System.out.println(findeErstes("Banane", 'n'));
              System.out.println(findeErstes("Banane", 'B'));
              System.out.println(findeErstes("Banane", 'x'));
              System.out.println(findeErstes("", 'a'));
          }
      }
    loesung: |
      2
      0
      -1
      -1
    fehler:
      - wert: "4\n0\n-1\n-1"
        meldung: '`return i;` beendet die Methode beim **ersten** Treffer. Die Schleife läuft danach nicht weiter bis zum zweiten `n`.'
      - wert: "3\n1\n-1\n-1"
        meldung: Die Positionen in einem String beginnen bei 0. Das `B` steht an Position 0.
hinweise:
  - '`return` innerhalb der Schleife beendet die ganze Methode, nicht nur die Schleife.'
  - '`return -1;` wird nur erreicht, wenn die Schleife ohne Treffer zu Ende läuft.'
loesung: |
  **Ansatz:** Für jeden Aufruf die Schleife durchgehen, bis zum ersten Treffer oder bis zum Ende.
  ---
  `"Banane"` hat `B` an Position 0, `a` an 1, `n` an 2. Der erste Treffer für `'n'` ist Position 2, für `'B'` Position 0.
  ---
  `'x'` kommt nicht vor, und beim leeren String läuft die Schleife gar nicht. In beiden Fällen kommt `return -1;` dran.
```

```aufgabe
id: me-rue-code-vorzeichen
titel: Vorzeichen, Betrag und eine Kombination
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Ad-hoc-Aufgabe 13, Sammlung 2017W (nachgebaut)
angabe: |
  Schreibe drei Methoden **ohne** die Klasse `Math`:

  - `vorzeichen(int n)` liefert `1`, wenn `n > 0`, `-1`, wenn `n < 0`, und `0`, wenn `n == 0`.
  - `betrag(int n)` liefert den Betrag von `n`, also `n` ohne Minuszeichen.
  - `kombi(int a, int b)` liefert das Produkt aus dem Vorzeichen von `a` und dem Betrag von `b`. Sie soll dafür die beiden anderen Methoden **aufrufen**.
teile:
  - typ: code
    vorlage: |
      public class Kombi {
          public static int vorzeichen(int n) {
              return 0; // TODO
          }

          public static int betrag(int n) {
              return 0; // TODO
          }

          public static int kombi(int a, int b) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(kombi(-2, 5));
          }
      }
    musterloesung: |
      public class Kombi {
          public static int vorzeichen(int n) {
              if (n > 0) {
                  return 1;
              }
              if (n < 0) {
                  return -1;
              }
              return 0;
          }

          public static int betrag(int n) {
              if (n < 0) {
                  return -n;
              }
              return n;
          }

          public static int kombi(int a, int b) {
              return vorzeichen(a) * betrag(b);
          }

          public static void main(String[] args) {
              System.out.println(kombi(-2, 5));
          }
      }
    tests:
      - { aufruf: "vorzeichen(7)", erwartet: "1" }
      - { aufruf: "vorzeichen(-3)", erwartet: "-1" }
      - { aufruf: "vorzeichen(0)", erwartet: "0" }
      - { aufruf: "betrag(-9)", erwartet: "9" }
      - { aufruf: "betrag(4)", erwartet: "4" }
      - { aufruf: "kombi(-2, 5)", erwartet: "-5" }
      - { aufruf: "kombi(3, -6)", erwartet: "6" }
      - { aufruf: "kombi(0, -8)", erwartet: "0", versteckt: true }
    regeln: { verboteneApi: ["Math"] }
    fehler:
      - { wert: "verboteneApi", meldung: "Die Klasse `Math` ist hier verboten. Den Betrag bekommst du mit einem `if` und dem Minuszeichen: `-n`." }
      - { wert: 4, meldung: "Für negative Zahlen liefert `-n` den Betrag. Für positive Zahlen bleibt `n`, wie es ist." }
      - { wert: 7, meldung: "In `kombi` gehört der Betrag von `b`, nicht `b` selbst, in das Produkt." }
hinweise:
  - '`vorzeichen` braucht drei Fälle. Mit zwei `if` und einem abschließenden `return 0;` sind alle Wege abgedeckt.'
  - '`kombi` ist eine Zeile: `return vorzeichen(a) * betrag(b);`'
loesung: |
  **Ansatz:** Jede Methode löst eine kleine Aufgabe. `kombi` setzt die beiden anderen zusammen, statt deren Code zu wiederholen.
  ---
  ```java
  public static int vorzeichen(int n) {
      if (n > 0) {
          return 1;
      }
      if (n < 0) {
          return -1;
      }
      return 0;
  }

  public static int betrag(int n) {
      if (n < 0) {
          return -n;
      }
      return n;
  }
  ```
  ---
  `kombi(int a, int b)` enthält nur `return vorzeichen(a) * betrag(b);`.
  ---
  Kontrolle: `kombi(-2, 5)` ist `-1 * 5 = -5`, `kombi(3, -6)` ist `1 * 6 = 6`. Hinweis zur Quelle: Die Studi-Lösung in der Ad-hoc-Sammlung verwendet `Math.abs`, obwohl die Angabe „ohne Bibliotheken“ verlangt.
```

```aufgabe
id: me-rue-auswahl-implementierung
titel: Welche Implementierung passt zur Ausgabe?
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: TUWEL-Test 1 vom 26.11.2021, Frage 8 (nachgebaut)
angabe: |
  Diese Anweisungen

  ```java
  String a = "Tag";
  String b = "Uhr";
  System.out.println(fun(a, b));
  System.out.println(fun(b, b));
  ```

  erzeugen die Ausgabe

  ```
  Tag
  UhrTag
  Uhr
  UhrUhr
  ```

  Wie muss `fun` implementiert sein?
teile:
  - typ: auswahl
    optionen:
      - |
        ```java
        public static String fun(String a, String b) {
            System.out.println(b);
            return a + b;
        }
        ```
      - |
        ```java
        public static String fun(String a, String b) {
            System.out.println(a);
            return b + a;
        }
        ```
      - |
        ```java
        public static String fun(String a, String b) {
            System.out.println(a);
            System.out.println(b);
            return a;
        }
        ```
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Diese Variante gibt bei `fun(a, b)` zuerst `b` aus, also `Uhr`. Die gesuchte Ausgabe beginnt aber mit `Tag`.'
      - wert: 2
        meldung: Diese Variante erzeugt pro Aufruf drei Zeilen. Die gesuchte Ausgabe hat nur zwei Zeilen pro Aufruf.
hinweise:
  - Zähle zuerst, wie viele Zeilen pro Aufruf entstehen. Damit fällt eine Option sofort weg.
  - Die zweite Zeile jedes Blocks ist der Rückgabewert. Bei `fun(a, b)` ist er `UhrTag`, also `b + a`.
loesung: |
  **Ansatz:** Für jede Option die Ausgabe des ersten Aufrufs `fun("Tag", "Uhr")` ausrechnen und vergleichen.
  ---
  Option 1: Ausgabe `Uhr`, Rückgabe `TagUhr`. Passt nicht, die erste Zeile müsste `Tag` sein.
  ---
  Option 3: drei Zeilen pro Aufruf (`Tag`, `Uhr`, `Tag`). Passt nicht.
  ---
  Option 2: Ausgabe `Tag`, Rückgabe `"Uhr" + "Tag" = "UhrTag"`. Zweiter Aufruf: `Uhr` und `UhrUhr`. Das ist genau die gesuchte Ausgabe.
```

```aufgabe
id: me-rue-text-missing-return
titel: Warum meckert der Compiler?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Erkläre in zwei bis drei Sätzen, warum diese Methode mit `missing return statement` abgelehnt wird,
  obwohl jede Zahl entweder gerade oder ungerade ist. Gib eine korrigierte Fassung an.

  ```java
  public static String paritaet(int n) {
      if (n % 2 == 0) {
          return "gerade";
      }
      if (n % 2 != 0) {
          return "ungerade";
      }
  }
  ```
teile:
  - typ: text
    muster: |
      Der Compiler wertet die Bedingungen nicht inhaltlich aus. Er sieht zwei unabhängige `if`, die beide
      falsch sein könnten, und dann käme die Methode ohne `return` an ihr Ende. Bei einem Rückgabetyp
      `String` ist das verboten. Korrektur: das zweite `if` weglassen und am Ende `return "ungerade";`
      schreiben, oder `if (...) { return "gerade"; } else { return "ungerade"; }`.
hinweise:
  - Prüft der Compiler, was die Bedingungen bedeuten, oder nur, welche Wege es im Code gibt?
  - Welcher Weg durch die Methode endet ohne `return`?
loesung: |
  **Ansatz:** Den Code aus Sicht des Compilers lesen: Welche Wege durch die Methode gibt es?
  ---
  Es gibt einen Weg, auf dem beide `if` falsch sind. Dass dieser Weg nie vorkommt, weiß nur der Mensch.
  ---
  Mit einem abschließenden `return "ungerade";` oder einem `else` endet jeder Weg mit `return`, und die Methode kompiliert.
```

## Sichtbarkeit und Lebensdauer von Variablen

```aufgabe
id: me-sic-check-schleife
titel: Gibt es i nach der Schleife noch?
niveau: 1
art: check
angabe: |
  Kompiliert dieser Code? Schleifenvariablen kennst du aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).

  ```java
  for (int i = 0; i < 3; i++) {
      System.out.print(i);
  }
  System.out.println(i);
  ```
teile:
  - typ: auswahl
    optionen:
      - 'Nein. `i` ist nur innerhalb der Schleife bekannt.'
      - 'Ja, und die letzte Zeile gibt `3` aus.'
      - 'Ja, und die letzte Zeile gibt `2` aus.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`i` wurde im Kopf der `for`-Schleife deklariert. Nach der Schleife existiert die Variable nicht mehr. Der Compiler meldet `cannot find symbol`.'
      - wert: 2
        meldung: Nach der Schleife gibt es `i` gar nicht mehr. Der Code kompiliert nicht.
loesung: |
  Eine Variable, die im Kopf einer `for`-Schleife deklariert wird, gehört zur Schleife.
  ---
  Nach der schließenden Klammer der Schleife ist `i` unbekannt. Der Compiler meldet `cannot find symbol`.
```

Die Frage im Check hat schon gezeigt: Eine Variable ist nicht überall bekannt. Das gilt erst recht für
Methoden. Jede Methode hat ihre eigenen Variablen, und keine Methode kann in die Variablen einer anderen
hineinschauen. Das ist kein Hindernis, sondern ein Schutz: Du kannst eine Methode schreiben, ohne zu
wissen, welche Namen die anderen Methoden verwenden.

Zwei Begriffe musst du dabei auseinanderhalten. **Sichtbarkeit** beantwortet die Frage: „An welchen
Stellen im Quelltext darf ich diesen Namen verwenden?“ **Lebensdauer** beantwortet die Frage: „Wann gibt
es das Kästchen im Speicher, während das Programm läuft?“

:::definition[Block, lokale Variable, Sichtbarkeitsbereich, Lebensdauer]
Ein **Block** ist ein Stück Code zwischen `{` und `}`. Eine **lokale Variable** ist eine Variable, die
innerhalb einer Methode deklariert wird. Auch die Parameter einer Methode zählen dazu.

Der **Sichtbarkeitsbereich** (englisch *scope*) einer lokalen Variable beginnt bei ihrer Deklaration und
endet mit dem Block, in dem sie deklariert wurde. Außerhalb ist der Name unbekannt.

Die **Lebensdauer** einer lokalen Variable beginnt, wenn ihre Deklaration ausgeführt wird, und endet,
wenn der Block verlassen wird. Jeder neue Aufruf einer Methode legt ihre lokalen Variablen **neu** an.
:::

**Beispiel:** In `public static void f(int a) { int b = a + 1; }` sind `a` und `b` lokale Variablen von
`f`. Sie sind nur in `f` sichtbar. **Kein Beispiel:** Die Variable `zahl` in `main` ist **keine** lokale
Variable von `f`. Schreibst du in `f` den Namen `zahl`, meldet der Compiler `cannot find symbol`, auch wenn
`main` die Methode `f` aufruft.

:::beispiel[Jeder Aufruf beginnt von vorne]
```java
public class Zaehler {
    public static void zaehleLokal() {
        int anzahl = 0;
        anzahl++;
        System.out.println("lokal: " + anzahl);
    }

    public static void main(String[] args) {
        zaehleLokal();
        zaehleLokal();
        int anzahl = 10;
        zaehleLokal();
        System.out.println("main: " + anzahl);
    }
}
```

1. Erster Aufruf: Java legt in `zaehleLokal` ein neues Kästchen `anzahl` mit 0 an, erhöht auf 1 und gibt `lokal: 1` aus. Am Ende des Aufrufs verschwindet das Kästchen.
2. Zweiter Aufruf: Wieder ein **neues** Kästchen mit 0. Es erscheint erneut `lokal: 1`.
3. In `main` entsteht eine eigene Variable `anzahl` mit 10. Sie hat mit der Variable in `zaehleLokal` nichts zu tun.
4. Dritter Aufruf: wieder `lokal: 1`. Das `anzahl` aus `main` ist in `zaehleLokal` nicht sichtbar.
5. `main` gibt seine eigene Variable aus: `main: 10`.

```
lokal: 1
lokal: 1
lokal: 1
main: 10
```
:::

:::achtung[Erwartet, dass eine lokale Variable weiterzählt]
Zum Beispiel „Jeder Aufruf beginnt von vorne“ sagen viele die Ausgabe `lokal: 1`, `lokal: 2`,
`lokal: 3` voraus. Das wäre nur richtig, wenn `anzahl` den Aufruf überleben würde. Eine lokale
Variable stirbt aber am Ende jedes Aufrufs, und `int anzahl = 0;` legt sie beim nächsten Aufruf neu an.
:::

### Klassenvariablen

Manchmal soll ein Wert über mehrere Aufrufe hinweg erhalten bleiben. Dafür gibt es Variablen, die
nicht in einer Methode, sondern direkt in der Klasse stehen.

:::definition[Klassenvariable und Verdecken]
Eine **Klassenvariable** wird innerhalb der Klasse, aber außerhalb jeder Methode mit `static`
deklariert, zum Beispiel `static int aufrufe = 0;`. In den Folien steht oft `private static`. Sie ist in
allen Methoden der Klasse sichtbar und lebt vom Programmstart bis zum Programmende.

Hat eine lokale Variable denselben Namen wie eine Klassenvariable, **verdeckt** die lokale Variable die
Klassenvariable. In ihrem Sichtbarkeitsbereich bezeichnet der Name dann die lokale Variable.
:::

:::beispiel[Eine Klassenvariable zählt mit, eine lokale verdeckt]
```java
public class Klassenvariable {
    static int aufrufe = 0;
    static int wert = 7;

    public static void tick() {
        aufrufe++;
    }

    public static void zeige() {
        int wert = 1;
        System.out.println("wert = " + wert);
    }

    public static void main(String[] args) {
        tick();
        tick();
        tick();
        System.out.println("aufrufe = " + aufrufe);
        zeige();
        System.out.println("wert = " + wert);
    }
}
```

1. `aufrufe` und `wert` sind Klassenvariablen. Sie entstehen beim Programmstart mit 0 und 7.
2. Jeder Aufruf von `tick()` erhöht **dieselbe** Variable `aufrufe`. Nach drei Aufrufen ist sie 3. Ausgabe `aufrufe = 3`.
3. In `zeige()` wird eine lokale Variable `wert` mit 1 angelegt. Sie verdeckt die Klassenvariable. Ausgabe `wert = 1`.
4. In `main` gibt es keine lokale Variable `wert`. Der Name bezeichnet die Klassenvariable. Ausgabe `wert = 7`.

```
aufrufe = 3
wert = 1
wert = 7
```
:::

Klassenvariablen sind bequem, aber gefährlich. Das Ergebnis einer Methode hängt dann nicht mehr nur von
ihren Argumenten ab, sondern auch davon, was vorher passiert ist. Deshalb verbieten die Aufgabenblätter
bei Rekursion und der Programmiertest ausdrücklich „globale Variablen“. Gemeint sind Klassenvariablen.
Arbeite stattdessen mit Parametern und Rückgabewerten.

:::achtung[Derselbe Name in einem inneren Block]
Lokale Variablen dürfen sich nicht gegenseitig verdecken. Dieser Code

```java
int x = 1;
if (x > 0) {
    int x = 2;     // falsch
}
```

liefert `error: variable x is already defined in method main(String[])`. Nur eine Klassenvariable darf
von einer lokalen Variable verdeckt werden. Zwei lokale Variablen mit demselben Namen gehen nur, wenn
ihre Blöcke sich nicht überlappen, etwa in zwei verschiedenen Methoden oder zwei getrennten Schleifen.
:::

:::achtung[Eine Variable nach ihrem Block verwenden]
```java
if (punkte >= 50) {
    String note = "bestanden";
}
System.out.println(note);    // falsch
```

Der Compiler meldet `cannot find symbol`. `note` lebt nur im `if`-Block. Richtig ist, die Variable vor
dem `if` zu deklarieren, etwa `String note = "nicht bestanden";`, und im Block nur neu zuzuweisen.
:::

:::merke[Welche Variable ist gemeint?]
1. Suche von der Verwendung aus nach oben im **selben Block** und in den umschließenden Blöcken derselben Methode. Die Parameter gehören dazu.
2. Findest du dort eine Deklaration, ist diese lokale Variable gemeint.
3. Findest du keine, ist die Klassenvariable mit diesem Namen gemeint.
4. Gibt es auch keine Klassenvariable, kompiliert der Code nicht (`cannot find symbol`).
:::

```aufgabe
id: me-sic-gefuehrt-welches-n
titel: Drei Variablen namens n
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse es geführt.
teile:
  - typ: ausgabe
    code: |
      public class Welches {
          static int n = 1;

          public static void a(int n) {
              System.out.println(n);
          }

          public static void b() {
              System.out.println(n);
          }

          public static void main(String[] args) {
              int n = 2;
              a(3);
              b();
              System.out.println(n);
          }
      }
    loesung: |
      3
      1
      2
    fehler:
      - wert: "3\n2\n2"
        meldung: '`b` sieht die lokale Variable `n` aus `main` nicht. In `b` gibt es kein lokales `n`, also ist die Klassenvariable gemeint.'
      - wert: "1\n1\n2"
        meldung: In `a` ist `n` ein Parameter. Er verdeckt die Klassenvariable und hat den Wert des Arguments, also 3.
gefuehrt:
  - text: Welches `n` gibt die Methode `a` aus?
    teil:
      typ: auswahl
      optionen: ['den Parameter `n` von `a`', 'die Klassenvariable `n`', 'die lokale Variable `n` aus `main`']
      richtig: [0]
    erklaerung: Der Parameter ist eine lokale Variable von `a`. Er verdeckt die Klassenvariable. Sein Wert ist das Argument 3.
  - text: Welches `n` gibt die Methode `b` aus?
    teil:
      typ: auswahl
      optionen: ['die lokale Variable `n` aus `main`', 'die Klassenvariable `n`']
      richtig: [1]
    erklaerung: In `b` ist kein lokales `n` deklariert. Variablen aus `main` sind in `b` unsichtbar. Also gilt die Klassenvariable mit dem Wert 1.
  - text: Welchen Wert gibt die letzte Zeile in `main` aus?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: In `main` verdeckt die lokale Variable `n = 2` die Klassenvariable.
hinweise:
  - Für jedes `println(n)` gilt die Regel aus dem Merke-Kasten „Welche Variable ist gemeint?“. Suche die nächste Deklaration in derselben Methode.
  - Gibt es in der Methode kein lokales `n`, ist die Klassenvariable gemeint.
loesung: |
  **Ansatz:** Für jede Verwendung von `n` die Deklaration suchen, die an dieser Stelle gilt.
  ---
  `a(3)`: Der Parameter `n` hat den Wert 3. Ausgabe `3`.
  ---
  `b()`: kein lokales `n`, also die Klassenvariable. Ausgabe `1`.
  ---
  `main`: das lokale `n` mit 2. Ausgabe `2`.
```

```aufgabe
id: me-sic-ausgabe-sterne
titel: Ein String, der immer neu beginnt
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Sterne {
          public static void reihe(int n) {
              String s = "";
              for (int i = 0; i < n; i++) {
                  s = s + "*";
              }
              System.out.println(s);
          }

          public static void main(String[] args) {
              reihe(2);
              reihe(3);
              reihe(1);
          }
      }
    loesung: |
      **
      ***
      *
    fehler:
      - wert: "**\n*****\n******"
        meldung: '`s` ist eine lokale Variable. Jeder Aufruf legt sie mit `""` neu an. Die Sterne vom vorigen Aufruf sind dann weg.'
hinweise:
  - Wo wird `s` deklariert, und was passiert mit `s` am Ende eines Aufrufs?
loesung: |
  **Ansatz:** Jeder Aufruf hat sein eigenes `s`, das mit dem leeren String beginnt.
  ---
  `reihe(2)` baut `**`, `reihe(3)` baut `***`, `reihe(1)` baut `*`.
  ---
  Die Ausgaben addieren sich nicht, weil `s` am Ende jedes Aufrufs verschwindet.
```

```aufgabe
id: me-sic-zahl-angelegt
titel: Wie oft entsteht die Variable?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int dreimal(int x) {
      int ergebnis = 3 * x;
      return ergebnis;
  }
  ```

  `main` führt nacheinander `dreimal(1);`, `dreimal(2);` und `dreimal(3);` aus. Wie oft wird die Variable
  `ergebnis` insgesamt im Speicher angelegt?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: Eine lokale Variable überlebt den Aufruf nicht. Jeder der drei Aufrufe legt ein neues Kästchen `ergebnis` an.
hinweise:
  - Lebensdauer einer lokalen Variable - vom Ausführen der Deklaration bis zum Verlassen des Blocks.
loesung: |
  **Ansatz:** Lebensdauer einer lokalen Variable betrachten.
  ---
  Bei jedem Aufruf wird `int ergebnis = 3 * x;` ausgeführt und legt die Variable neu an. Am Ende des Aufrufs verschwindet sie.
  ---
  Drei Aufrufe, also dreimal angelegt.
```

```aufgabe
id: me-sic-rf-regeln
titel: Aussagen über Sichtbarkeit
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine lokale Variable behält ihren Wert bis zum nächsten Aufruf derselben Methode.
        richtig: false
        erklaerung: Lokale Variablen werden bei jedem Aufruf neu angelegt und am Ende wieder entfernt.
      - text: Ein Parameter ist innerhalb seiner Methode wie eine lokale Variable sichtbar.
        richtig: true
        erklaerung: Parameter sind lokale Variablen, deren Startwert vom Aufrufer kommt.
      - text: Eine Klassenvariable ist in allen Methoden der Klasse sichtbar, außer dort, wo eine lokale Variable gleichen Namens sie verdeckt.
        richtig: true
        erklaerung: Genau das bedeutet Verdecken.
      - text: Zwei verschiedene Methoden dürfen keine lokalen Variablen mit demselben Namen haben.
        richtig: false
        erklaerung: Jede Methode hat ihren eigenen Sichtbarkeitsbereich. Gleiche Namen in verschiedenen Methoden stören sich nicht.
    fehler:
      - wert: [r, r, r, f]
        meldung: Lokale Variablen sterben am Ende jedes Aufrufs. Werte über Aufrufe hinweg hält nur eine Klassenvariable.
      - wert: [f, r, r, r]
        meldung: Verschiedene Methoden haben getrennte Sichtbarkeitsbereiche. Beide dürfen zum Beispiel eine Variable `i` haben.
hinweise:
  - Unterscheide zwischen „derselbe Block“ und „verschiedene Methoden“.
loesung: |
  **Ansatz:** Jede Aussage gegen die Regeln für Sichtbarkeit und Lebensdauer prüfen.
  ---
  Aussage 1 falsch (Lebensdauer endet mit dem Aufruf). Aussage 2 richtig (Parameter sind lokale Variablen).
  ---
  Aussage 3 richtig (Verdecken). Aussage 4 falsch (getrennte Methoden, getrennte Namen).
```

```aufgabe
id: me-sic-zeilen-fehler
titel: Drei Sichtbarkeitsfehler
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: In welchen Zeilen meldet der Compiler einen Fehler? Markiere alle.
teile:
  - typ: zeilen
    code: |
      public class Sicht {
          public static void rechne() {
              int ergebnis = 5;
              System.out.println(ergebnis + zahl);
          }

          public static void main(String[] args) {
              int zahl = 3;
              if (zahl > 0) {
                  int doppelt = 2 * zahl;
              }
              System.out.println(doppelt);
              for (int i = 0; i < 2; i++) {
                  int zahl = i;
              }
              rechne();
          }
      }
    loesung: [4, 12, 14]
    fehler:
      - wert: [12, 14]
        meldung: '`rechne` verwendet `zahl`. Diese Variable gehört zu `main` und ist in `rechne` unsichtbar.'
      - wert: [4, 12]
        meldung: In Zeile 14 wird ein zweites lokales `zahl` deklariert, während das `zahl` aus Zeile 8 noch sichtbar ist.
      - wert: [4, 14]
        meldung: '`doppelt` lebt nur im `if`-Block. In Zeile 12 ist der Block schon geschlossen.'
hinweise:
  - Prüfe jede Verwendung eines Namens. Ist an dieser Stelle eine passende Deklaration sichtbar?
  - Prüfe jede Deklaration. Ist der Name an dieser Stelle schon durch eine andere lokale Variable belegt?
loesung: |
  **Ansatz:** Für jeden Namen klären, wo er deklariert ist und wie weit sein Block reicht.
  ---
  Zeile 4: `zahl` ist in `rechne` unbekannt (`cannot find symbol`). Variablen von `main` sind in anderen Methoden unsichtbar.
  ---
  Zeile 12: `doppelt` existiert nur im `if`-Block (`cannot find symbol`).
  ---
  Zeile 14: `zahl` ist in `main` schon deklariert und noch sichtbar (`variable zahl is already defined`).
```

```aufgabe
id: me-sic-trace-kasse
titel: Eine Kasse mit Klassenvariable
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Verfolge die beiden Variablen namens `summe`. Schreib `-`, wenn die lokale Variable noch nicht existiert.

  ```java
  public class Kasse {
      static int summe = 0;

      public static void buche(int betrag) {
          summe = summe + betrag;
      }

      public static void main(String[] args) {
          buche(5);
          buche(-2);
          int summe = 50;
          buche(summe);
          System.out.println(summe);
      }
  }
  ```
teile:
  - typ: trace
    spalten: ["Klassenvariable summe", "lokale summe in main"]
    zeilen: ["vor buche(5)", "nach buche(5)", "nach buche(-2)", "nach int summe = 50", "nach buche(summe)"]
    vorgabe: 1
    loesung:
      - [0, "-"]
      - [5, "-"]
      - [3, "-"]
      - [3, 50]
      - [53, 50]
    fehler:
      - wert: [0, "-", 5, "-", 3, "-", 3, 50, 53, 53]
        meldung: '`buche` verändert die Klassenvariable. Die lokale `summe` in `main` ist nur das Argument und bleibt 50.'
      - wert: [0, "-", 5, "-", 3, "-", 50, 50, 100, 50]
        meldung: '`int summe = 50;` legt eine **neue** lokale Variable an. Die Klassenvariable bleibt dabei 3.'
  - typ: zahl
    label: Was gibt die letzte Zeile aus?
    loesung: "50"
    fehler:
      - wert: "53"
        meldung: In `main` verdeckt die lokale Variable `summe` die Klassenvariable. Ausgegeben wird also die lokale Variable.
hinweise:
  - In `buche` gibt es kein lokales `summe`. Dort ist immer die Klassenvariable gemeint.
  - In `main` ist `summe` ab Zeile `int summe = 50;` die lokale Variable. Der Aufruf `buche(summe)` übergibt deren Wert 50.
loesung: |
  **Ansatz:** Zwei getrennte Kästchen führen und bei jeder Zeile entscheiden, welches gemeint ist.
  ---
  `buche(5)` und `buche(-2)` ändern die Klassenvariable: 0, dann 5, dann 3.
  ---
  `int summe = 50;` legt in `main` eine lokale Variable an. Sie verdeckt ab hier die Klassenvariable.
  ---
  `buche(summe)` übergibt 50. In `buche` wird die Klassenvariable 3 + 50 = 53. `println(summe)` in `main` gibt die lokale Variable aus: 50.
```

```aufgabe
id: me-sic-ausgabe-schatten
titel: Parameter, lokale Variable und Klassenvariable
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Schatten {
          static int x = 100;

          public static int f(int x) {
              x = x + 1;
              return x;
          }

          public static void g() {
              x = x + 10;
          }

          public static void h() {
              int x = 5;
              x = x * 2;
              System.out.println("h: " + x);
          }

          public static void main(String[] args) {
              int y = f(x);
              System.out.println(y + " " + x);
              g();
              System.out.println(x);
              h();
              System.out.println(x);
              int x = 1;
              System.out.println(f(x) + x);
          }
      }
    loesung: |
      101 100
      110
      h: 10
      110
      3
    fehler:
      - wert: "101 101\n111\nh: 10\n111\n3"
        meldung: In `f` ist `x` der Parameter. `x = x + 1` ändert nur ihn, die Klassenvariable bleibt 100.
      - wert: "101 100\n110\nh: 10\n10\n3"
        meldung: '`h` hat ein eigenes lokales `x`. Es verdeckt die Klassenvariable nur innerhalb von `h`.'
      - wert: "101 100\n110\nh: 10\n110\n112"
        meldung: Ab `int x = 1;` bezeichnet `x` in `main` die lokale Variable mit dem Wert 1, nicht mehr die Klassenvariable.
hinweise:
  - Bestimme für jedes `x`, ob es der Parameter von `f`, das lokale `x` von `h`, das spätere lokale `x` von `main` oder die Klassenvariable ist.
  - Nur `g` verändert die Klassenvariable, denn nur in `g` gibt es kein lokales `x`.
loesung: |
  **Ansatz:** Jedes Vorkommen von `x` einer der vier Variablen zuordnen: Klassenvariable, Parameter von `f`, lokales `x` von `h`, lokales `x` von `main`.
  ---
  `f(x)` bekommt 100, rechnet mit dem Parameter 101 und liefert 101. Die Klassenvariable bleibt 100. Ausgabe `101 100`.
  ---
  `g()` ändert die Klassenvariable auf 110. `h()` rechnet mit seinem eigenen `x` und gibt `h: 10` aus. Die Klassenvariable bleibt 110.
  ---
  `int x = 1;` legt ein lokales `x` in `main` an. `f(x)` liefert 2, dazu `x = 1`, Ausgabe `3`.
```

```aufgabe
id: me-sic-code-ohne-global
titel: Ohne Klassenvariable rechnen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Jemand hat diese Lösung geschrieben:

  ```java
  static int summe = 0;

  public static int summeQuadrate(int n) {
      for (int i = 1; i <= n; i++) {
          summe = summe + i * i;
      }
      return summe;
  }
  ```

  Der erste Aufruf `summeQuadrate(3)` liefert richtig 14. Ein zweiter Aufruf `summeQuadrate(3)` liefert
  aber 28. Schreibe `summeQuadrate(int n)` neu, **ohne Klassenvariable**. Die Methode liefert
  1² + 2² + … + n². Vorbedingung: `n >= 0`.
teile:
  - typ: code
    vorlage: |
      public class Quadratsumme {
          public static int summeQuadrate(int n) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(summeQuadrate(3));
              System.out.println(summeQuadrate(3));
          }
      }
    musterloesung: |
      public class Quadratsumme {
          public static int summeQuadrate(int n) {
              int summe = 0;
              for (int i = 1; i <= n; i++) {
                  summe = summe + i * i;
              }
              return summe;
          }

          public static void main(String[] args) {
              System.out.println(summeQuadrate(3));
              System.out.println(summeQuadrate(3));
          }
      }
    tests:
      - { aufruf: "summeQuadrate(3)", erwartet: "14" }
      - { aufruf: "summeQuadrate(1)", erwartet: "1" }
      - { aufruf: "summeQuadrate(0)", erwartet: "0" }
      - { vorher: "summeQuadrate(4);", aufruf: "summeQuadrate(2)", erwartet: "5", beschreibung: "zweiter Aufruf direkt nach einem ersten" }
    regeln: { keineFelder: true }
    fehler:
      - { wert: "keineFelder", meldung: "Hier sind keine Klassenvariablen erlaubt. Deklariere `summe` als lokale Variable in der Methode." }
      - { wert: 4, meldung: "Der zweite Aufruf rechnet mit Resten vom ersten. Die Summe muss bei jedem Aufruf wieder bei 0 beginnen." }
hinweise:
  - Was ist der Unterschied zwischen einer Variable, die bei jedem Aufruf neu angelegt wird, und einer, die das ganze Programm lang lebt?
  - Verschiebe die Deklaration `int summe = 0;` in die Methode, vor die Schleife.
loesung: |
  **Ansatz:** Die Summe gehört zu genau einem Aufruf. Also muss sie eine lokale Variable sein, die bei jedem Aufruf mit 0 beginnt.
  ---
  ```java
  public static int summeQuadrate(int n) {
      int summe = 0;
      for (int i = 1; i <= n; i++) {
          summe = summe + i * i;
      }
      return summe;
  }
  ```
  ---
  Kontrolle: Jeder Aufruf mit 3 liefert 1 + 4 + 9 = 14, egal wie oft man ihn wiederholt. Das ist ein Grund, warum der Programmiertest globale Variablen verbietet.
```

```aufgabe
id: me-sic-text-global
titel: Warum sind globale Variablen verboten?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Im Programmiertest steht: „Sie dürfen keine zusätzlichen eigenen Hilfsmethoden oder globalen Variablen
  verwenden“. Erkläre in zwei bis drei Sätzen, was mit globalen Variablen gemeint
  ist und welches Problem eine Klassenvariable bei mehreren Testaufrufen verursachen kann.
teile:
  - typ: text
    muster: |
      Gemeint sind Klassenvariablen, also `static`-Variablen außerhalb der Methoden. Ihr Wert bleibt über
      Aufrufe hinweg erhalten. Dann hängt das Ergebnis einer Methode nicht nur von ihren Argumenten ab,
      sondern auch von früheren Aufrufen. Ruft der Test die Methode mehrmals auf, rechnet der zweite
      Aufruf mit Resten des ersten und liefert ein falsches Ergebnis. Mit Parametern, lokalen Variablen und
      Rückgabewerten ist jede Methode für sich vorhersagbar.
hinweise:
  - Wie lange lebt eine Klassenvariable, und wie lange eine lokale Variable?
  - Denk an die Aufgabe „Ohne Klassenvariable rechnen“, bei der der zweite Aufruf 28 statt 14 liefert.
loesung: |
  **Ansatz:** Den Begriff „globale Variable“ übersetzen und dann die Lebensdauer betrachten.
  ---
  Globale Variablen sind Klassenvariablen. Sie leben das ganze Programm lang.
  ---
  Ein Rest aus einem früheren Aufruf verfälscht spätere Aufrufe. Tests, die eine Methode mehrmals aufrufen, schlagen dann fehl, obwohl der erste Aufruf richtig war.
```

## Überladen von Methoden

```aufgabe
id: me-ueb-check-typ
titel: Welchen Typ hat der Ausdruck?
niveau: 1
art: check
angabe: |
  Welchen Typ hat der Ausdruck `'a' + 1`? Das Rechnen mit Zeichen kennst du aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
teile:
  - typ: auswahl
    optionen: ['`int`', '`char`', '`String`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei `char + int` rechnet Java mit Zahlen. Das Ergebnis ist ein `int` mit dem Wert 98. Ein `char` entsteht erst mit dem Cast `(char)`.
      - wert: 2
        meldung: Ein `String` entsteht nur, wenn einer der beiden Operanden ein String ist. `'a'` ist ein einzelnes Zeichen in einfachen Anführungszeichen.
loesung: |
  `'a'` hat den Zahlenwert 97. Java rechnet `97 + 1`.
  ---
  Das Ergebnis 98 hat den Typ `int`. Dieser Typ entscheidet gleich, welche von mehreren gleichnamigen Methoden Java aufruft.
```

`System.out.println` kannst du mit einer Zahl, einem Zeichen, einem Text oder einer Kommazahl aufrufen.
Trotzdem gibt es nicht eine einzige Methode, die alles kann. In der Klasse `PrintStream` (zu ihr gehört
`System.out`) stehen viele Methoden namens `println`: eine für `int`, eine für `char`, eine für `String`, eine für `double` und
noch einige mehr. Java sucht bei jedem Aufruf die passende heraus. Mehrere Methoden mit demselben Namen
nennt man **überladen**.

Damit Java die Methoden auseinanderhalten kann, müssen sie sich in ihren Parametern unterscheiden.
Entscheidend ist die **Signatur**.

:::definition[Signatur und Überladen]
Die **Signatur** einer Methode besteht aus ihrem **Namen** und der **Liste der Parametertypen** in ihrer
Reihenfolge. Die Signatur von `public static int flaeche(int breite, int hoehe)` ist `flaeche(int, int)`.

**Nicht** zur Signatur gehören der Rückgabetyp, die Namen der Parameter und die Modifikatoren wie
`public static`.

Eine Methode ist **überladen**, wenn es in derselben Klasse mehrere Methoden mit demselben Namen, aber
verschiedenen Signaturen gibt. Die Parameterlisten müssen sich also in der Anzahl, in den Typen oder in
der Reihenfolge der Typen unterscheiden.
:::

**Beispiel:** `flaeche(int)` und `flaeche(int, int)` sind zulässige Überladungen, denn die Anzahl der
Parameter unterscheidet sich. **Kein Beispiel:** `int flaeche(int seite)` und `double flaeche(int radius)`
haben dieselbe Signatur `flaeche(int)`. Weder der Rückgabetyp noch der Parametername zählen. Der Compiler
meldet `method flaeche(int) is already defined`.

:::beispiel[Flächen mit einem Namen]
```java
public class Flaechen {
    public static int flaeche(int seite) {
        return flaeche(seite, seite);
    }

    public static int flaeche(int breite, int hoehe) {
        return breite * hoehe;
    }

    public static double flaeche(double radius) {
        return 3.14 * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println(flaeche(4));
        System.out.println(flaeche(3, 5));
        System.out.println(flaeche(2.0));
        System.out.println(flaeche(1, 1) + flaeche(2));
    }
}
```

Die drei Signaturen sind `flaeche(int)`, `flaeche(int, int)` und `flaeche(double)`. Alle sind
verschieden, also ist die Klasse gültig.

1. `flaeche(4)`: ein Argument vom Typ `int`. Das passt genau zu `flaeche(int)`. Diese Methode ruft ihrerseits `flaeche(4, 4)` auf, denn ein Quadrat ist ein Rechteck mit gleichen Seiten. Ergebnis 16.
2. `flaeche(3, 5)`: zwei `int`-Argumente, also `flaeche(int, int)`. Ergebnis 15.
3. `flaeche(2.0)`: ein `double`-Argument, also `flaeche(double)`. Ergebnis 3.14 · 2.0 · 2.0 = 12.56.
4. `flaeche(1, 1) + flaeche(2)`: 1 + 4 = 5.

```
16
15
12.56
5
```

Beachte Schritt 1: Die Quadrat-Variante rechnet nicht selbst, sondern ruft die Rechteck-Variante auf. So
steht die Formel nur an einer Stelle. Diese Technik brauchst du auf Blatt 3, siehe
[6.7 Methoden nach Vorgabe schreiben](/lernen/ep1/methoden/methoden-nach-vorgabe-schreiben).
:::

### Welche Methode wählt Java?

Bei einem Aufruf sucht Java unter allen Methoden mit passendem Namen die beste aus. Das nennt man
**Überladungsauflösung**. Für EP1 genügen vier Regeln.

1. **Anzahl:** Nur Methoden mit so vielen Parametern, wie es Argumente gibt, kommen in Frage.
2. **Genau passend:** Gibt es eine Methode, deren Parametertypen genau zu den Argumenttypen passen, wird sie genommen.
3. **Erweitern:** Sonst darf Java jedes Argument automatisch in einen „größeren“ Typ umwandeln. Die erlaubten Richtungen sind `byte → short → int → long → float → double` und `char → int`. Gibt es mehrere passende Methoden, nimmt Java die mit den „kleinsten“ Typen, also die nächstgelegene.
4. **Fehler:** Passt keine Methode, kompiliert der Aufruf nicht. Passen zwei gleich gut, meldet der Compiler `reference to ... is ambiguous`, also „mehrdeutig“.

Die Richtung der Erweiterung kannst du dir als Leiter vorstellen. Java darf beim Aufruf nur nach rechts
steigen, nie nach links:

```
byte → short → int → long → float → double
               ↑
             char
```

Ein `String` steht nicht auf dieser Leiter. Zwischen `char` und `String` gibt es keine automatische
Umwandlung.

:::beispiel[Java wählt zwischen int, double und String]
```java
public class Typen {
    public static void typ(int x) {
        System.out.println("int: " + x);
    }

    public static void typ(double x) {
        System.out.println("double: " + x);
    }

    public static void typ(String x) {
        System.out.println("String: " + x);
    }

    public static void main(String[] args) {
        typ('A');
        typ(7f);
        typ(7 / 2);
        typ(7 / 2.0);
    }
}
```

1. `typ('A')`: Für `char` gibt es keine eigene Methode. Erweitern: `char → int` ist möglich, `char → double` auch. Die nächstgelegene ist `int`. Ausgabe `int: 65`, denn `'A'` hat den Zahlenwert 65.
2. `typ(7f)`: `7f` ist ein `float`. Eine `float`-Methode gibt es nicht. Erweitert werden kann nur zu `double`. Ausgabe `double: 7.0`.
3. `typ(7 / 2)`: Das Argument wird zuerst ausgerechnet. `7 / 2` ist der `int`-Wert 3. Ausgabe `int: 3`.
4. `typ(7 / 2.0)`: `7 / 2.0` ist der `double`-Wert 3.5. Ausgabe `double: 3.5`.

```
int: 65
double: 7.0
int: 3
double: 3.5
```
:::

:::achtung[Zwei Methoden, die nur der Rückgabetyp unterscheidet]
```java
public static int lies(int x) { return x; }
public static double lies(int x) { return x; }     // falsch
```

Viele halten das für eine Überladung, weil die Rückgabetypen verschieden sind. Der Compiler meldet aber
`method lies(int) is already defined`. Der Grund: Beim Aufruf `lies(3);` sieht Java nur den Namen und das
Argument. Es könnte nicht entscheiden, welche Methode gemeint ist. Deshalb gehört der Rückgabetyp nicht
zur Signatur.
:::

:::achtung[Mehrdeutiger Aufruf]
Gegeben sind `void p(int a, double b)` und `void p(double a, int b)`. Der Aufruf `p(1, 2)` kompiliert
nicht: `reference to p is ambiguous`. Für die erste Methode muss Java das zweite Argument erweitern, für
die zweite das erste. Beide brauchen genau eine Erweiterung, keine ist besser. Java wählt **nicht** einfach
die Methode, die in der Klasse zuerst steht. Eindeutig wären `p(1, 2.0)` oder `p(1.0, 2)`.
:::

:::achtung[Zeichen ist nicht Text]
Für `public static void h(String s)` kompiliert `h('x')` nicht: `incompatible types: char cannot be
converted to String`. `'x'` in einfachen Anführungszeichen ist ein `char`, `"x"` in doppelten ein
`String`. Richtig ist `h("x")`, oder man macht mit `h("" + 'x')` aus dem Zeichen einen String.
:::

:::merke[Überladungsauflösung in vier Schritten]
1. Argumente ausrechnen und ihren Typ bestimmen (`'a' + 1` ist `int`, `7 / 2.0` ist `double`).
2. Nur Methoden mit der richtigen Anzahl Parameter behalten.
3. Genau passende Methode vorhanden? Dann diese. Sonst alle Methoden, die nach Erweiterung passen, und davon die nächstgelegene.
4. Keine passende oder zwei gleich gute: Compilerfehler.
:::

```aufgabe
id: me-ueb-gefuehrt-zeige
titel: Ein Zeichen und drei Kandidaten
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben sind drei überladene Methoden. Was gibt `main` aus? Löse zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Kandidaten {
          public static void zeige(long x) {
              System.out.println("long " + x);
          }

          public static void zeige(double x) {
              System.out.println("double " + x);
          }

          public static void zeige(String x) {
              System.out.println("String " + x);
          }

          public static void main(String[] args) {
              zeige('7');
              zeige(7);
              zeige(7.0);
              zeige("7");
          }
      }
    loesung: |
      long 55
      long 7
      double 7.0
      String 7
    fehler:
      - wert: "String 7\nlong 7\ndouble 7.0\nString 7"
        meldung: '`''7''` ist ein `char`, kein `String`. Von `char` gibt es keine automatische Umwandlung in `String`.'
      - wert: "long 7\nlong 7\ndouble 7.0\nString 7"
        meldung: Wird `'7'` zu einer Zahl erweitert, zählt der Zahlenwert des Zeichens. Das Zeichen `'7'` hat den Wert 55, nicht 7.
      - wert: "double 55.0\ndouble 7.0\ndouble 7.0\nString 7"
        meldung: Passen mehrere Methoden nach Erweiterung, nimmt Java die nächstgelegene. `long` liegt auf der Leiter näher an `char` und `int` als `double`.
gefuehrt:
  - text: Welche Methoden kommen für `zeige('7')` überhaupt in Frage?
    teil:
      typ: auswahl
      mehrfach: true
      optionen: ['`zeige(long)`', '`zeige(double)`', '`zeige(String)`']
      richtig: [0, 1]
    erklaerung: '`char` kann zu `long` und zu `double` erweitert werden, aber nie zu `String`.'
  - text: Welche der beiden passenden Methoden nimmt Java?
    teil:
      typ: auswahl
      optionen: ['`zeige(long)`', '`zeige(double)`']
      richtig: [0]
    erklaerung: Auf der Leiter `char → int → long → float → double` liegt `long` näher. Java wählt die nächstgelegene Methode.
  - text: Welchen Zahlenwert hat das Zeichen `'7'`? (Die Ziffern `'0'` bis `'9'` haben die Werte 48 bis 57.)
    teil: { typ: zahl, loesung: "48 + 7" }
    erklaerung: '`''0''` hat den Wert 48, also hat `''7''` den Wert 55. Ausgabe `long 55`.'
  - text: Welche Methode bekommt der Aufruf `zeige(7)`?
    teil:
      typ: auswahl
      optionen: ['`zeige(long)`', '`zeige(double)`', '`zeige(String)`']
      richtig: [0]
    erklaerung: '`int` wird zu `long` erweitert, das ist näher als `double`. Ausgabe `long 7`.'
hinweise:
  - Bestimme zuerst den Typ jedes Arguments. `'7'` ist ein `char`, `7` ein `int`, `7.0` ein `double`, `"7"` ein `String`.
  - Gibt es keine genau passende Methode, nimm die nächstgelegene auf der Leiter `char → int → long → float → double`.
loesung: |
  **Ansatz:** Für jeden Aufruf Argumenttyp bestimmen, passende Methoden sammeln, die nächstgelegene wählen.
  ---
  `zeige('7')`: `char` passt zu `long` und `double`, nicht zu `String`. Die nächstgelegene ist `long`. Der Zahlenwert von `'7'` ist 55. Ausgabe `long 55`.
  ---
  `zeige(7)`: `int` wird zu `long` erweitert. Ausgabe `long 7`.
  ---
  `zeige(7.0)` und `zeige("7")` passen genau. Ausgaben `double 7.0` und `String 7`.
```

```aufgabe
id: me-ueb-auswahl-paare
titel: Welche Paare dürfen nebeneinander stehen?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche der folgenden Methodenpaare dürfen gemeinsam in einer Klasse stehen? Wähle alle zulässigen Paare.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '`void f(int a)` und `void f(double a)`'
      - '`int f(int a)` und `double f(int a)`'
      - '`void f(int a, String s)` und `void f(String s, int a)`'
      - '`void f(int a)` und `void f(int b)`'
      - '`void f(int a)` und `void f(int a, int b)`'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: Der Rückgabetyp gehört nicht zur Signatur. `int f(int)` und `double f(int)` haben beide die Signatur `f(int)`.
      - wert: [0, 2, 3, 4]
        meldung: Parameternamen gehören nicht zur Signatur. `f(int a)` und `f(int b)` haben beide die Signatur `f(int)`.
      - wert: [0, 4]
        meldung: Auch die Reihenfolge der Typen zählt. `f(int, String)` und `f(String, int)` sind verschiedene Signaturen.
hinweise:
  - Schreib für jede Methode nur die Signatur auf, also Name und Typen der Parameter. Gleiche Signaturen dürfen nicht nebeneinander stehen.
loesung: |
  **Ansatz:** Signaturen vergleichen. Rückgabetyp und Parameternamen weglassen.
  ---
  Paar 1: `f(int)` und `f(double)`, verschieden. Paar 2: zweimal `f(int)`, gleich. Paar 3: `f(int, String)` und `f(String, int)`, verschieden.
  ---
  Paar 4: zweimal `f(int)`, gleich. Paar 5: `f(int)` und `f(int, int)`, verschieden. Zulässig sind also die Paare 1, 3 und 5.
```

```aufgabe
id: me-ueb-ausgabe-info
titel: Drei Varianten von info
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Info {
          public static String info(int a) {
              return "eine Zahl";
          }

          public static String info(String a) {
              return "ein Text";
          }

          public static String info(int a, int b) {
              return "zwei Zahlen";
          }

          public static void main(String[] args) {
              System.out.println(info(4));
              System.out.println(info("4"));
              System.out.println(info(4, 2));
          }
      }
    loesung: |
      eine Zahl
      ein Text
      zwei Zahlen
    fehler:
      - wert: "eine Zahl\neine Zahl\nzwei Zahlen"
        meldung: '`"4"` in doppelten Anführungszeichen ist ein `String`. Dafür gibt es eine eigene Methode.'
hinweise:
  - Bestimme für jeden Aufruf die Anzahl und die Typen der Argumente.
loesung: |
  **Ansatz:** Anzahl und Typen der Argumente mit den drei Signaturen `info(int)`, `info(String)` und `info(int, int)` vergleichen.
  ---
  `info(4)` passt zu `info(int)`, `info("4")` zu `info(String)`.
  ---
  `info(4, 2)` hat zwei Argumente und passt nur zu `info(int, int)`.
```

```aufgabe
id: me-ueb-code-kleineres
titel: Das Kleinere von zweien
niveau: 1
lernziel: 5
kompetenz: anwenden
quelle: Ad-hoc-Aufgabe 12, Sammlung 2017W (nachgebaut und als Überladung umgebaut)
angabe: |
  Schreibe zwei überladene Methoden namens `kleineres`:

  - `kleineres(int a, int b)` liefert die kleinere der beiden Zahlen.
  - `kleineres(String a, String b)` liefert den **kürzeren** der beiden Strings. Sind beide gleich lang, liefert sie `a`.

  Vorbedingung: `a != null` und `b != null`. (`null` bedeutet „kein String vorhanden“. Du darfst also
  annehmen, dass beide Strings existieren.) Verwende nicht die Klasse `Math`.
teile:
  - typ: code
    vorlage: |
      public class Kleineres {
          public static int kleineres(int a, int b) {
              return 0; // TODO
          }

          public static String kleineres(String a, String b) {
              return ""; // TODO
          }

          public static void main(String[] args) {
              System.out.println(kleineres(12, 8));
              System.out.println(kleineres("Servus", "Guten Abend!"));
          }
      }
    musterloesung: |
      public class Kleineres {
          public static int kleineres(int a, int b) {
              if (a < b) {
                  return a;
              }
              return b;
          }

          public static String kleineres(String a, String b) {
              if (b.length() < a.length()) {
                  return b;
              }
              return a;
          }

          public static void main(String[] args) {
              System.out.println(kleineres(12, 8));
              System.out.println(kleineres("Servus", "Guten Abend!"));
          }
      }
    tests:
      - { aufruf: "kleineres(12, 8)", erwartet: "8" }
      - { aufruf: "kleineres(-3, -7)", erwartet: "-7" }
      - { aufruf: "kleineres(\"Servus\", \"Guten Abend!\")", erwartet: "\"Servus\"" }
      - { aufruf: "kleineres(\"abc\", \"xy\")", erwartet: "\"xy\"" }
      - { aufruf: "kleineres(\"ab\", \"cd\")", erwartet: "\"ab\"", beschreibung: "gleich lang: der erste" }
    regeln: { verboteneApi: ["Math"] }
    fehler:
      - { wert: 3, meldung: "Bei Strings ist der kürzere gefragt, nicht der alphabetisch kleinere. Vergleiche `a.length()` mit `b.length()`." }
      - { wert: 5, meldung: "Bei gleicher Länge soll `a` herauskommen. Prüfe, ob dein Vergleich bei Gleichstand den richtigen Zweig nimmt." }
hinweise:
  - Beide Methoden haben dieselbe Struktur. Nur der Vergleich ist verschieden.
  - 'Für Strings vergleichst du die Längen: `b.length() < a.length()`. Nur wenn `b` echt kürzer ist, kommt `b` zurück.'
loesung: |
  **Ansatz:** Zwei Methoden mit gleichem Namen, aber verschiedenen Signaturen `kleineres(int, int)` und `kleineres(String, String)`.
  ---
  ```java
  public static int kleineres(int a, int b) {
      if (a < b) {
          return a;
      }
      return b;
  }

  public static String kleineres(String a, String b) {
      if (b.length() < a.length()) {
          return b;
      }
      return a;
  }
  ```
  ---
  Kontrolle Gleichstand: Bei `"ab"` und `"cd"` ist `2 < 2` falsch, also kommt `a` zurück. Die Studi-Lösung der Ad-hoc-Sammlung nennt die Methoden `shortestString` und `smallestInt`. Mit Überladen genügt ein Name.
```

```aufgabe
id: me-ueb-ausgabe-leiter
titel: Erweitern auf der Leiter
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Leiter {
          public static void d(int x) {
              System.out.println("int " + x);
          }

          public static void d(long x) {
              System.out.println("long " + x);
          }

          public static void d(double x) {
              System.out.println("double " + x);
          }

          public static void main(String[] args) {
              d('a');
              d(5L);
              d(5.0f);
              d(3 / 2);
              byte b = 2;
              d(b);
              d(2 * 1.5);
          }
      }
    loesung: |
      int 97
      long 5
      double 5.0
      int 1
      int 2
      double 3.0
    fehler:
      - wert: "int 97\nlong 5\ndouble 5.0\ndouble 1.5\nint 2\ndouble 3.0"
        meldung: '`3 / 2` ist eine Division zweier `int`-Werte und ergibt 1. Erst danach wird die Methode ausgewählt.'
      - wert: "double 97.0\nlong 5\ndouble 5.0\nint 1\nint 2\ndouble 3.0"
        meldung: '`char` passt nach Erweiterung zu `int`, `long` und `double`. Java nimmt die nächstgelegene, also `int`.'
      - wert: "int 97\nlong 5\ndouble 5.0\nint 1\nlong 2\ndouble 3.0"
        meldung: '`byte` wird zuerst zu `int` erweitert, nicht gleich zu `long`. Die nächstgelegene Methode ist `d(int)`.'
hinweise:
  - Bestimme zuerst den Typ jedes Arguments. `5L` ist `long`, `5.0f` ist `float`, `2 * 1.5` ist `double`.
  - Passt keine Methode genau, steigt Java auf der Leiter `byte → short → int → long → float → double` (und `char → int`) so wenig wie möglich.
loesung: |
  **Ansatz:** Argumenttyp bestimmen, dann die nächstgelegene passende Methode wählen.
  ---
  `'a'` ist `char`, nächstgelegen `int`: `int 97`. `5L` ist `long`, passt genau: `long 5`. `5.0f` ist `float`, nur `double` passt: `double 5.0`.
  ---
  `3 / 2` ist `int` 1: `int 1`. `byte` wird zu `int`: `int 2`. `2 * 1.5` ist `double` 3.0: `double 3.0`.
```

```aufgabe
id: me-ueb-rf-signatur
titel: Aussagen über Überladen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Rückgabetyp gehört zur Signatur einer Methode.
        richtig: false
        erklaerung: Die Signatur besteht nur aus dem Namen und der Liste der Parametertypen.
      - text: '`void m(int x, double y)` und `void m(double x, int y)` sind zulässige Überladungen.'
        richtig: true
        erklaerung: Die Reihenfolge der Typen ist verschieden, also sind es verschiedene Signaturen.
      - text: Gibt es genau die beiden Methoden aus der vorigen Aussage, ruft `m(1, 2)` die erste auf, weil sie in der Klasse zuerst steht.
        richtig: false
        erklaerung: Beide brauchen eine Erweiterung, keine ist besser. Der Aufruf ist mehrdeutig und kompiliert nicht.
      - text: '`System.out.println` ist eine überladene Methode.'
        richtig: true
        erklaerung: Es gibt eigene Varianten für `int`, `double`, `char`, `String`, `boolean` und weitere Typen.
    fehler:
      - wert: [f, r, r, r]
        meldung: Die Position in der Klasse spielt bei der Auswahl keine Rolle. Bei gleich guten Kandidaten meldet der Compiler einen Fehler.
      - wert: [r, r, f, r]
        meldung: Der Rückgabetyp gehört nicht zur Signatur. Sonst wäre bei `f(3);` unklar, welche Methode gemeint ist.
hinweise:
  - Signatur bedeutet Name plus Parametertypen in ihrer Reihenfolge, sonst nichts.
  - Bei zwei gleich guten Kandidaten wählt Java nicht selbst aus.
loesung: |
  **Ansatz:** Jede Aussage mit der Definition der Signatur und den Regeln der Überladungsauflösung prüfen.
  ---
  Aussage 1 falsch, Aussage 2 richtig: Nur Name und Parametertypen zählen, auch ihre Reihenfolge.
  ---
  Aussage 3 falsch: `m(1, 2)` ist mehrdeutig. Aussage 4 richtig: `println` gibt es für viele Typen.
```

```aufgabe
id: me-ueb-zeilen-konflikte
titel: Konflikte beim Überladen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: In welchen Zeilen meldet der Compiler einen Fehler? Markiere alle.
teile:
  - typ: zeilen
    code: |
      public class Ueberladen {
          public static int f(int a) {
              return a;
          }

          public static double f(int b) {
              return b;
          }

          public static void g(int a, double b) {
          }

          public static void g(double a, int b) {
          }

          public static void h(String s) {
          }

          public static void main(String[] args) {
              g(1, 2);
              g(1, 2.0);
              h('x');
          }
      }
    loesung: [6, 20, 22]
    fehler:
      - wert: [20, 22]
        meldung: Vergleiche die Signaturen der beiden Methoden `f`. Name und Parametertypen sind gleich.
      - wert: [6, 22]
        meldung: '`g(1, 2)` passt nach je einer Erweiterung zu beiden Methoden `g`. Das ist mehrdeutig.'
      - wert: [6, 20, 21, 22]
        meldung: '`g(1, 2.0)` passt genau zu `g(int, double)`. Dieser Aufruf ist in Ordnung.'
hinweise:
  - Prüfe zuerst die Methodenköpfe auf gleiche Signaturen, dann jeden Aufruf mit den Regeln der Überladungsauflösung.
  - Ein `char` lässt sich nicht automatisch in einen `String` umwandeln.
loesung: |
  **Ansatz:** Erst die Definitionen prüfen, dann die Aufrufe.
  ---
  Zeile 6: `f(int)` gibt es schon. Der andere Rückgabetyp hilft nicht (`already defined`).
  ---
  Zeile 20: `g(1, 2)` ist mehrdeutig (`ambiguous`). Zeile 21 passt genau zu `g(int, double)`.
  ---
  Zeile 22: `'x'` ist ein `char`, `h` verlangt einen `String` (`char cannot be converted to String`).
```

```aufgabe
id: me-ueb-code-wiederhole
titel: Wiederholen mit drei Varianten
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Schreibe drei überladene Methoden `wiederhole`. Keine von ihnen gibt etwas aus.

  - `wiederhole(String s, int n)` liefert `s` genau `n`-mal hintereinander. Vorbedingung: `s != null` (es gibt einen String, `null` hieße „kein String“) und `n >= 0`.
  - `wiederhole(char c, int n)` liefert das Zeichen `c` genau `n`-mal als String. Sie soll die erste Methode **aufrufen**.
  - `wiederhole(String s)` liefert `s` zweimal hintereinander. Auch sie soll die erste Methode aufrufen.

  Beispiele: `wiederhole("ab", 3)` liefert `"ababab"`, `wiederhole('x', 4)` liefert `"xxxx"`, `wiederhole("ha")` liefert `"haha"`.
teile:
  - typ: code
    vorlage: |
      public class Wiederholen {
          public static String wiederhole(String s, int n) {
              return ""; // TODO
          }

          public static String wiederhole(char c, int n) {
              return ""; // TODO: die erste Methode aufrufen
          }

          public static String wiederhole(String s) {
              return ""; // TODO: die erste Methode aufrufen
          }

          public static void main(String[] args) {
              System.out.println(wiederhole("ab", 3));
              System.out.println(wiederhole('x', 4));
              System.out.println(wiederhole("ha"));
          }
      }
    musterloesung: |
      public class Wiederholen {
          public static String wiederhole(String s, int n) {
              String ergebnis = "";
              for (int i = 0; i < n; i++) {
                  ergebnis = ergebnis + s;
              }
              return ergebnis;
          }

          public static String wiederhole(char c, int n) {
              return wiederhole("" + c, n);
          }

          public static String wiederhole(String s) {
              return wiederhole(s, 2);
          }

          public static void main(String[] args) {
              System.out.println(wiederhole("ab", 3));
              System.out.println(wiederhole('x', 4));
              System.out.println(wiederhole("ha"));
          }
      }
    tests:
      - { aufruf: "wiederhole(\"ab\", 3)", erwartet: "\"ababab\"" }
      - { aufruf: "wiederhole(\"q\", 0)", erwartet: "\"\"", beschreibung: "n = 0 liefert den leeren String" }
      - { aufruf: "wiederhole('x', 4)", erwartet: "\"xxxx\"" }
      - { aufruf: "wiederhole(\"ha\")", erwartet: "\"haha\"" }
      - { aufruf: "wiederhole('-', 1)", erwartet: "\"-\"", versteckt: true }
    regeln: { keineHilfsmethoden: true }
    fehler:
      - { wert: 3, meldung: "Rufst du in `wiederhole(char, int)` die String-Variante auf? Aus dem Zeichen wird mit `\"\" + c` ein String." }
      - { wert: 4, meldung: "`wiederhole(String s)` ist dasselbe wie `wiederhole(s, 2)`." }
hinweise:
  - Schreibe zuerst `wiederhole(String s, int n)` mit einer Schleife, die einen String Stück für Stück verlängert.
  - 'Die beiden anderen Methoden sind je eine Zeile: `return wiederhole("" + c, n);` und `return wiederhole(s, 2);`.'
loesung: |
  **Ansatz:** Nur eine Methode enthält die eigentliche Arbeit. Die anderen wandeln ihre Argumente passend um und rufen sie auf.
  ---
  ```java
  public static String wiederhole(String s, int n) {
      String ergebnis = "";
      for (int i = 0; i < n; i++) {
          ergebnis = ergebnis + s;
      }
      return ergebnis;
  }
  ```
  ---
  `wiederhole(char c, int n)` liefert `wiederhole("" + c, n)`. Der Ausdruck `"" + c` macht aus dem Zeichen einen String der Länge 1.
  ---
  `wiederhole(String s)` liefert `wiederhole(s, 2)`. Kontrolle: Ändert man später die Schleife, wirkt die Änderung automatisch in allen drei Varianten.
```

```aufgabe
id: me-ueb-ausgabe-knifflig
titel: Knifflige Überladungsauflösung
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Aufloesung {
          public static void k(float x) {
              System.out.println("float " + x);
          }

          public static void k(double x) {
              System.out.println("double " + x);
          }

          public static void s(char c) {
              System.out.println("char " + c);
          }

          public static void s(int i) {
              System.out.println("int " + i);
          }

          public static void s(String t) {
              System.out.println("String " + t);
          }

          public static void main(String[] args) {
              k(5);
              k(2.5);
              k(7L);
              s('x');
              s('x' + 1);
              s((char) ('x' + 1));
              s("" + 'x');
          }
      }
    loesung: |
      float 5.0
      double 2.5
      float 7.0
      char x
      int 121
      char y
      String x
    fehler:
      - wert: "double 5.0\ndouble 2.5\ndouble 7.0\nchar x\nint 121\nchar y\nString x"
        meldung: '`int` und `long` lassen sich zu `float` erweitern. `float` liegt auf der Leiter vor `double` und ist deshalb die nächstgelegene Methode.'
      - wert: "float 5.0\ndouble 2.5\nfloat 7.0\nchar x\nchar y\nchar y\nString x"
        meldung: '`''x'' + 1` ist ein `int` mit dem Wert 121. Ohne Cast bleibt es eine Zahl, also wird `s(int)` aufgerufen.'
hinweise:
  - Die Leiter lautet `byte → short → int → long → float → double`. Auch `long → float` ist eine erlaubte Erweiterung.
  - Bestimme den Typ von `'x' + 1`, von `(char) ('x' + 1)` und von `"" + 'x'`, bevor du die Methode wählst.
loesung: |
  **Ansatz:** Für jedes Argument den Typ bestimmen und die nächstgelegene Methode auf der Leiter suchen.
  ---
  `k(5)`: `int` passt zu `float` und `double`. Nächstgelegen ist `float`. Ausgabe `float 5.0`. `k(2.5)` passt genau zu `double`. `k(7L)`: `long` wird zu `float` erweitert, Ausgabe `float 7.0`.
  ---
  `s('x')` passt genau zu `s(char)`. `'x' + 1` ist `int` 121, Ausgabe `int 121`.
  ---
  `(char) ('x' + 1)` ist das Zeichen `y`, Ausgabe `char y`. `"" + 'x'` ist der String `"x"`, Ausgabe `String x`.
```

```aufgabe
id: me-ueb-text-rueckgabetyp
titel: Warum zählt der Rückgabetyp nicht?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Begründe mit einem konkreten Aufruf, warum Java zwei Methoden `int lies(int x)` und `double lies(int x)`
  in derselben Klasse nicht erlaubt.
teile:
  - typ: text
    muster: |
      Java wählt die Methode beim Aufruf nur anhand des Namens und der Argumente aus. Beim Aufruf
      `lies(3);` als eigene Anweisung wird der Rückgabewert gar nicht verwendet. Es gibt also keinen
      Hinweis, ob die `int`- oder die `double`-Variante gemeint ist. Damit jeder Aufruf eindeutig ist,
      gehört der Rückgabetyp nicht zur Signatur, und beide Methoden haben dieselbe Signatur `lies(int)`.
hinweise:
  - Woran erkennt Java beim Aufruf, welche Methode gemeint ist?
  - Denk an einen Aufruf, dessen Rückgabewert gar nicht verwendet wird.
loesung: |
  **Ansatz:** Die Auswahl der Methode aus der Sicht des Aufrufs betrachten.
  ---
  Beim Aufruf sind nur der Name und die Argumente bekannt. Bei `lies(3);` wird der Rückgabewert nicht einmal benutzt.
  ---
  Deshalb wäre die Auswahl unmöglich. Der Rückgabetyp gehört nicht zur Signatur, und beide Methoden heißen für Java `lies(int)`.
```

## Vor- und Nachbedingungen

```aufgabe
id: me-vor-check-demorgan
titel: Eine Bedingung verneinen
niveau: 1
art: check
angabe: |
  Welcher Ausdruck hat für alle `int`-Werte `x` und `y` denselben Wert wie `!(x > 0 && y > 0)`?
  Verknüpfungen kennst du aus [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
teile:
  - typ: auswahl
    optionen: ['`x <= 0 || y <= 0`', '`x <= 0 && y <= 0`', '`x < 0 || y < 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Beim Verneinen wird aus `&&` ein `||`. „Nicht beide positiv“ heißt „mindestens eine ist nicht positiv“.
      - wert: 2
        meldung: Das Gegenteil von `x > 0` ist `x <= 0`, nicht `x < 0`. Die Null gehört dazu.
loesung: |
  Nach De Morgan wird `!(A && B)` zu `!A || !B`.
  ---
  `!(x > 0)` ist `x <= 0`, `!(y > 0)` ist `y <= 0`. Ergebnis: `x <= 0 || y <= 0`.
```

Manche Aufrufe gehen schief, obwohl die Methode richtig programmiert ist. Ein Beispiel:

```java
public static int durchschnitt(int summe, int anzahl) {
    return summe / anzahl;
}
```

Der Aufruf `durchschnitt(10, 0)` bricht das Programm ab mit
`Exception in thread "main" java.lang.ArithmeticException: / by zero`. Eine **Exception** (Ausnahme)
ist ein Fehler, der erst während des Laufs auftritt. Wenn niemand sie behandelt, beendet sie das
Programm sofort. In EP1 begegnen dir vor allem drei Arten.

- `ArithmeticException`: Ganzzahldivision oder Rest mit 0, also `/ 0` oder `% 0` bei `int`.
- `StringIndexOutOfBoundsException`: `charAt(i)` mit einer Position, die es im String nicht gibt, zum Beispiel `"".charAt(0)`.
- `NullPointerException`: eine Methode auf `null` aufgerufen, zum Beispiel `text.length()`, wenn `text` den Wert `null` hat. `null` bedeutet „kein String vorhanden“.

Wer ist schuld, die Methode oder der Aufrufer? Das regelt ein Vertrag zwischen beiden. Er besteht aus
einer Vorbedingung und einer Nachbedingung.

:::definition[Zusicherung, Vorbedingung, Nachbedingung]
Eine **Zusicherung** ist eine Aussage über die Werte der Variablen an einer bestimmten Stelle im
Programm, die dort immer wahr sein soll.

Eine **Vorbedingung** ist eine Zusicherung über die Parameter beim Aufruf. Sie sagt, was der **Aufrufer**
garantieren muss, damit die Methode richtig arbeitet. Ist sie verletzt, verspricht die Methode nichts.

Eine **Nachbedingung** ist eine Zusicherung über das Ergebnis am Ende der Methode. Sie sagt, was die
**Methode** garantiert, sofern die Vorbedingung erfüllt war.
:::

**Beispiel:** Für `durchschnitt` ist `anzahl != 0` eine Vorbedingung. Für eine Methode
`betrag(int n)` ist `ergebnis >= 0` eine Nachbedingung. **Kein Beispiel:** „Das Ergebnis ist positiv“ ist
**keine** Vorbedingung, denn es spricht über das Ergebnis und nicht über die Parameter. Umgekehrt ist
„`anzahl` ist nicht 0“ keine Nachbedingung, denn das muss schon vor dem Aufruf feststehen.

```aufgabe
id: me-vor-check-exception
titel: Welche Zeile wirft eine Exception?
niveau: 1
art: check
angabe: |
  Gegeben ist `String s = "";`. Welche Anweisung wirft beim Ausführen eine Exception?
teile:
  - typ: auswahl
    optionen: ['`System.out.println(s.length());`', '`System.out.println(s.charAt(0));`', '`System.out.println(s + "!");`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der leere String hat die Länge 0. `s.length()` liefert also problemlos 0.
      - wert: 2
        meldung: Anhängen an einen leeren String ist erlaubt. Das Ergebnis ist `"!"`.
loesung: |
  Der leere String hat keine einzige Position. Auch Position 0 gibt es nicht.
  ---
  `s.charAt(0)` wirft deshalb eine `StringIndexOutOfBoundsException`. Die beiden anderen Zeilen geben `0` und `!` aus.
```

Auf den Aufgabenblättern steht bei vielen Methoden eine Zeile wie „Vorbedingung: `text != null`“. Dort
gilt ausdrücklich: Du darfst dich darauf verlassen und musst die Vorbedingung **nicht** im Code prüfen. In
eigenen Programmen schreibt man Bedingungen meist als Kommentar über die Methode:

```java
// Vorbedingung: anzahl != 0
// Nachbedingung: Rückgabewert ist summe / anzahl (ganzzahlig)
public static int durchschnitt(int summe, int anzahl) {
    return summe / anzahl;
}
```

Java kann eine Zusicherung auch zur Laufzeit prüfen: `assert anzahl != 0 : "anzahl ist 0";`. Ist der
Ausdruck falsch, bricht das Programm mit einem `AssertionError` ab. Das passiert allerdings nur, wenn man
das Programm mit `java -ea` startet. In IntelliJ trägt man dafür `-ea` bei den „VM options“ der Ausführungskonfiguration ein (das sind Startoptionen für Java selbst).

### Eine Vorbedingung gegen Division durch 0

Im Quiz lautet die Frage meist so:

> Welche Vorbedingung schränkt die Argumente so ein, dass der Aufruf ohne Exception ausgeführt werden kann?

Du suchst unter drei Antworten die einzige, die **jede**
Exception ausschließt. Das schnellste Werkzeug dafür ist ein **Gegenbeispiel**: Werte, die die
angebotene Vorbedingung erfüllen, bei denen es aber trotzdem kracht.

:::beispiel[Welche Vorbedingung schützt vor / by zero?]
```java
public static int mittel(int a, int b) {
    int summe = 0;
    for (int i = a; i < b; i++) {
        summe += i;
    }
    return summe / (b - a);
}
```

Zur Auswahl stehen `a <= b`, `a != b` und `a >= 0`.

1. **Wo kann es krachen?** Die Schleife ist harmlos. Gefährlich ist nur die Division `summe / (b - a)`. Sie wirft eine Exception genau dann, wenn `b - a == 0` ist, also wenn `a == b`.
2. **`a <= b` prüfen:** Gesucht sind Werte mit `a <= b` und `a == b`. Zum Beispiel `a = 4`, `b = 4`. Die Vorbedingung ist erfüllt, und trotzdem wird durch 0 geteilt. Nicht ausreichend.
3. **`a >= 0` prüfen:** Gegenbeispiel `a = 3`, `b = 3`. Erfüllt, aber Division durch 0. Nicht ausreichend.
4. **`a != b` prüfen:** Dann ist `b - a` nie 0. Für `a > b` läuft die Schleife gar nicht, `summe` bleibt 0, und `0 / (b - a)` ist erlaubt, etwa `mittel(5, 2)` mit Ergebnis 0. Diese Vorbedingung schließt jede Exception aus.

Antwort: `a != b`.
:::

:::achtung[Eine zu schwache Vorbedingung gewählt]
Beim Beispiel „Welche Vorbedingung schützt vor / by zero?“ wählen viele `a <= b`, weil „die Schleife dann
sinnvoll läuft“. Die Frage war aber nicht, ob die Schleife Sinn ergibt, sondern ob eine Exception
möglich ist. Mit `a = 4, b = 4` ist `a <= b` erfüllt, und es folgt `0 / 0`, also `ArithmeticException`.
Eine einzige Gegenbeispiel-Belegung genügt, um eine Antwort auszuschließen.
:::

:::achtung[Bei double gibt es keine Exception]
Wer `5.0 / 0` für einen Absturz hält, irrt. Bei `double` liefert Java `Infinity` (unendlich), bei
`0.0 / 0` den Wert `NaN` („not a number“). Eine `ArithmeticException` gibt es nur bei der
**Ganzzahl**division `5 / 0` und beim Rest `5 % 0`. Prüfe also immer zuerst, ob die Division mit `int`
oder mit `double` rechnet.
:::

### Eine korrekte Nachbedingung erkennen

Die zweite Quizfrage dieses Typs zeigt eine Methode und fragt: „Welche der folgenden Möglichkeiten ist
eine korrekte Nachbedingung?“ Eine Nachbedingung ist korrekt, wenn sie für **jeden** erlaubten Aufruf
wahr ist. Sie muss nicht die genaueste Beschreibung sein. Auch hier hilft das Gegenbeispiel, und zwar
nach einer **Fallunterscheidung**: Du gehst alle Wege durch die Methode durch und notierst, was jeweils
herauskommt.

:::beispiel[Alle Wege durch eine Methode]
```java
public static String marke(int a, int b) {
    String s = "";
    if (a < b) {
        if (a + b < 10) {
            s += "K";
        } else {
            s += "G";
        }
    }
    if (b > 2 * a) {
        s += "Z";
    } else {
        s += "N";
    }
    return s;
}
```

1. **Erstes `if`:** Ist `a < b`, kommt genau ein Buchstabe dazu, `K` oder `G`. Sonst kommt nichts dazu.
2. **Zweites `if` mit `else`:** Hier kommt **immer** genau ein Buchstabe dazu, `Z` oder `N`.
3. **Alle Fälle mit je einem Aufruf als Beleg.** `marke(1, 3)` liefert `"KZ"`, `marke(3, 4)` liefert `"KN"`. `marke(4, 9)` liefert `"GZ"`, `marke(6, 7)` liefert `"GN"`. `marke(5, 1)` liefert `"N"`, und `marke(-3, -4)` liefert `"Z"`.
4. **Optionen prüfen:** `s.length() == 2` ist falsch, Gegenbeispiel `marke(5, 1)`. `s.length() == 1 || s.length() == 2` stimmt in allen Fällen. `s.charAt(0) < s.charAt(1)` wirft bei `"N"` sogar selbst eine Exception, denn es gibt keine Position 1.

Korrekt ist `s.length() == 1 || s.length() == 2`.
:::

:::achtung[Eine zu starke Nachbedingung gewählt]
Beim Beispiel „Alle Wege durch eine Methode“ probieren viele nur `marke(1, 3)`, sehen `"KZ"` und wählen
`s.length() == 2`. Eine Nachbedingung muss aber für **alle** erlaubten Aufrufe stimmen. Der Fall
`a >= b`, etwa `marke(5, 1)` mit Ergebnis `"N"`, widerlegt sie. Teste immer auch den Weg, auf dem ein
`if` **nicht** betreten wird.
:::

:::merke[Vor- und Nachbedingungen im Quiz prüfen]
1. **Vorbedingung:** Suche jede Stelle, die eine Exception werfen kann (`/` und `%` mit `int`, `charAt`, Methoden auf `null`). Bestimme, für welche Werte sie wirft.
2. Suche für jede Option eine Belegung, die die Option **erfüllt** und trotzdem eine Exception auslöst. Gibt es eine, ist die Option falsch.
3. **Nachbedingung:** Gehe alle Wege durch die Methode und notiere die möglichen Ergebnisse mit je einem Beispielaufruf.
4. Eine Option ist richtig, wenn sie für **jedes** dieser Ergebnisse wahr ist und sich ohne Exception auswerten lässt.
:::

```reflexion
frage: Warum ist eine Nachbedingung wie `ergebnis >= 0` für eine Methode `betrag(int n)` korrekt, obwohl sie viel weniger sagt als „ergebnis ist der Betrag von n“?
antwort: |
  Korrekt heißt nur: Die Aussage ist nach jedem erlaubten Aufruf wahr. Das gilt für `ergebnis >= 0`,
  denn ein Betrag ist nie negativ. Die Aussage ist schwach, weil sie zum Beispiel auch für eine Methode
  gelten würde, die immer 0 liefert. Im Quiz wird aber nicht nach der genauesten, sondern nach einer
  korrekten Nachbedingung gefragt. Eine genauere Nachbedingung wäre
  `ergebnis == n || ergebnis == -n` zusammen mit `ergebnis >= 0`.
```

```aufgabe
id: me-vor-gefuehrt-produkt
titel: Wann wird der Nenner 0?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Gegeben ist die Methode

  ```java
  public static int quote(int a, int b) {
      return 100 / (a * b - 6);
  }
  ```

  Welche Vorbedingung schränkt die Argumente so ein, dass der Aufruf ohne Exception ausgeführt werden kann?
teile:
  - typ: auswahl
    optionen: ['`a > 0 && b > 0`', '`a * b != 6`', '`a != b`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `a = 2`, `b = 3`. Beide sind positiv, aber `2 * 3 - 6 = 0`.'
      - wert: 2
        meldung: 'Gegenbeispiel: `a = 2`, `b = 3`. Sie sind verschieden, aber `2 * 3 - 6 = 0`.'
gefuehrt:
  - text: Bei welcher Operation kann hier eine Exception entstehen?
    teil:
      typ: auswahl
      optionen: ['bei der Multiplikation `a * b`', 'bei der Division durch `a * b - 6`', 'beim `return`']
      richtig: [1]
    erklaerung: Eine `ArithmeticException` entsteht bei einer Ganzzahldivision durch 0.
  - text: Wenn `a = 2` ist, für welches `b` wird der Nenner 0?
    teil: { typ: zahl, loesung: "6/2" }
    erklaerung: Der Nenner ist 0, wenn `a * b = 6`. Mit `a = 2` folgt `b = 3`.
  - text: Erfüllt die Belegung `a = 2`, `b = 3` die Vorbedingung `a > 0 && b > 0`?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: Beide Werte sind positiv. Die Vorbedingung lässt also eine Belegung zu, bei der es kracht. Sie reicht nicht.
  - text: Erfüllt dieselbe Belegung die Vorbedingung `a != b`?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: 2 und 3 sind verschieden. Auch diese Vorbedingung reicht nicht. Übrig bleibt `a * b != 6`, und die schließt den Nenner 0 genau aus.
hinweise:
  - Suche zuerst die Stelle, an der durch 0 geteilt werden könnte, und bestimme, wann der Nenner 0 ist.
  - Prüfe dann jede Option mit einem Gegenbeispiel, das die Option erfüllt und trotzdem den Nenner 0 macht.
loesung: |
  **Ansatz:** Nenner bestimmen, dann jede Option mit einem Gegenbeispiel prüfen.
  ---
  Der Nenner `a * b - 6` ist genau dann 0, wenn `a * b == 6`, zum Beispiel bei `a = 2`, `b = 3`.
  ---
  `a = 2, b = 3` erfüllt `a > 0 && b > 0` und `a != b`. Beide Optionen lassen die Exception zu.
  ---
  `a * b != 6` schließt genau den Fall aus, in dem der Nenner 0 wird. Das ist die gesuchte Vorbedingung.
```

```aufgabe
id: me-vor-lueckentext-art
titel: Vor oder nach?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Über und unter einer Methode stehen zwei Kommentare:

  ```java
  // n >= 0
  public static int ganzeWurzel(int n) {
      int w = 0;
      while ((w + 1) * (w + 1) <= n) {
          w++;
      }
      return w;
  }
  // Rückgabewert w erfüllt w * w <= n
  ```

  Ergänze die Wörter.
teile:
  - typ: lueckentext
    text: |
      `n >= 0` ist eine ___bedingung. `w * w <= n` ist eine ___bedingung.
    luecken: [["Vor", "vor"], ["Nach", "nach"]]
    fehler:
      - wert: ["Nach", "Vor"]
        meldung: Eine Bedingung über die Parameter beim Aufruf ist eine Vorbedingung. Eine Bedingung über das Ergebnis ist eine Nachbedingung.
hinweise:
  - Spricht die Bedingung über das, was hineingeht, oder über das, was herauskommt?
loesung: |
  **Ansatz:** Prüfen, worüber die Bedingung spricht: Parameter beim Aufruf oder Ergebnis am Ende.
  ---
  `n >= 0` betrifft den Parameter, also Vorbedingung. Der Aufrufer muss sie einhalten.
  ---
  `w * w <= n` betrifft den Rückgabewert, also Nachbedingung. Die Methode garantiert sie.
```

```aufgabe
id: me-vor-ausgabe-double
titel: Teilen durch 0 mit Kommazahlen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Was gibt der Code aus? Überlege bei jeder Zeile zuerst, ob eine Exception entstehen kann.
teile:
  - typ: ausgabe
    code: |
      System.out.println(5.0 / 0);
      System.out.println(-1.0 / 0);
      System.out.println(0 / 5);
    loesung: |
      Infinity
      -Infinity
      0
    fehler:
      - wert: "ArithmeticException"
        meldung: Eine `ArithmeticException` gibt es nur bei Ganzzahldivision durch 0. `5.0` ist ein `double`, die Division liefert `Infinity`.
      - wert: "Infinity\n-Infinity\nInfinity"
        meldung: In der dritten Zeile wird 0 durch 5 geteilt, nicht 5 durch 0. Das Ergebnis ist 0.
hinweise:
  - Prüfe bei jeder Division, ob ein `double` beteiligt ist und was im Nenner steht.
loesung: |
  **Ansatz:** Für jede Division Typ und Nenner bestimmen.
  ---
  `5.0 / 0` und `-1.0 / 0` rechnen mit `double`. Ergebnis `Infinity` beziehungsweise `-Infinity`, keine Exception.
  ---
  `0 / 5` ist eine gewöhnliche Ganzzahldivision mit dem Ergebnis 0.
```

```aufgabe
id: me-vor-auswahl-charat
titel: Das letzte Zeichen sicher lesen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Welche Vorbedingung stellt sicher, dass `letztes` ohne Exception läuft?

  ```java
  public static char letztes(String s) {
      return s.charAt(s.length() - 1);
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`s != null`', '`s != null && s.length() > 0`', '`s.length() >= 0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `s = ""`. Dann ist `s.length() - 1 = -1`, und `charAt(-1)` wirft eine `StringIndexOutOfBoundsException`.'
      - wert: 2
        meldung: '`s.length() >= 0` gilt für jeden String, auch für `""`. Außerdem schließt es `null` nicht aus, und `null.length()` wirft eine `NullPointerException`.'
hinweise:
  - Welche Exception kann bei `s.length()` entstehen, welche bei `charAt`?
  - 'Probiere den leeren String `""` als Gegenbeispiel.'
loesung: |
  **Ansatz:** Jede mögliche Exception einzeln betrachten.
  ---
  `s.length()` scheitert, wenn `s == null` ist (`NullPointerException`). `charAt(s.length() - 1)` scheitert beim leeren String, denn dann wäre die Position -1.
  ---
  Nur `s != null && s.length() > 0` schließt beide Fälle aus. Kontrolle: Für `"Java"` liefert die Methode `'a'`.
```

```aufgabe
id: me-vor-auswahl-nachbedingung
titel: Eine korrekte Nachbedingung wählen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: TUWEL-Test 1 vom 26.11.2021, Frage 10 (nachgebaut)
angabe: |
  Welche der folgenden Bedingungen ist eine korrekte Nachbedingung für diese Methode?

  ```java
  // Vorbedingung: text != null
  public static int zaehleGleiche(String text) {
      int anzahl = 0;
      for (int i = 1; i < text.length(); i++) {
          if (text.charAt(i) == text.charAt(i - 1)) {
              anzahl++;
          }
      }
      return anzahl;
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - '`anzahl >= 1`'
      - '`anzahl < text.length() || text.length() == 0`'
      - '`anzahl < text.length()`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `text = "abc"`. Keine zwei Nachbarn sind gleich, also `anzahl = 0`, und `0 >= 1` ist falsch.'
      - wert: 2
        meldung: 'Gegenbeispiel: `text = ""`. Dann ist `anzahl = 0` und `text.length() = 0`, und `0 < 0` ist falsch.'
hinweise:
  - Eine Nachbedingung muss für **jede** Eingabe stimmen, die die Vorbedingung erfüllt. Ein einziges Gegenbeispiel schließt eine Option aus.
  - Probiere die Randfälle `""` und einen String ohne gleiche Nachbarn wie `"abc"`.
loesung: |
  **Ansatz:** Zuerst überlegen, welche Werte `anzahl` annehmen kann, dann jede Option an Randfällen testen.
  ---
  Die Schleife vergleicht `text.length() - 1` Nachbarpaare (beim leeren String keines). `anzahl` liegt also zwischen 0 und `text.length() - 1`, beim leeren String ist es 0.
  ---
  Option 1 scheitert an `"abc"` (Ergebnis 0). Option 3 scheitert an `""` (0 < 0 ist falsch).
  ---
  Option 2 gilt immer. Bei einem nicht leeren String ist `anzahl` höchstens `text.length() - 1`, also kleiner als die Länge. Beim leeren String ist der zweite Teil `text.length() == 0` wahr. Eine Nachbedingung muss wahr sein, nicht möglichst eng.
```

```aufgabe
id: me-vor-rf-vertrag
titel: Aussagen über den Vertrag
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: Beurteile jede Aussage über Vor- und Nachbedingungen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Hält der Aufrufer die Vorbedingung nicht ein, garantiert die Methode nichts.
        richtig: true
        erklaerung: Die Nachbedingung gilt nur unter der Voraussetzung, dass die Vorbedingung erfüllt war.
      - text: Auf den Aufgabenblättern muss jede Methode ihre Vorbedingung mit einem `if` selbst prüfen.
        richtig: false
        erklaerung: Die Blätter sagen ausdrücklich, dass man sich auf die Vorbedingungen verlassen darf und sie nicht prüfen muss.
      - text: '`assert x > 0;` bricht das Programm bei `x = 0` immer ab, auch ohne besondere Startoption.'
        richtig: false
        erklaerung: Zusicherungen mit `assert` werden nur geprüft, wenn man das Programm mit `java -ea` startet.
      - text: Eine Nachbedingung beschreibt, was am Ende der Methode gilt, wenn die Vorbedingung erfüllt war.
        richtig: true
        erklaerung: Genau das ist ihre Definition.
    fehler:
      - wert: [r, r, f, r]
        meldung: Auf den Blättern steht, dass alle Aufrufe die Vorbedingungen erfüllen. Eine eigene Prüfung ist nicht verlangt.
      - wert: [r, f, r, r]
        meldung: Ohne die Option `-ea` ignoriert Java jede `assert`-Anweisung.
hinweise:
  - Wer ist für die Vorbedingung verantwortlich, der Aufrufer oder die Methode?
  - Wann wertet Java eine `assert`-Anweisung überhaupt aus? Denk an die Startoption `-ea`.
loesung: |
  **Ansatz:** Vertrag zwischen Aufrufer und Methode: Der Aufrufer liefert die Vorbedingung, die Methode die Nachbedingung.
  ---
  Aussage 1 richtig, Aussage 4 richtig: So ist der Vertrag definiert.
  ---
  Aussage 2 falsch (die Blätter verlangen keine Prüfung). Aussage 3 falsch (`assert` wirkt nur mit `java -ea`).
```

```aufgabe
id: me-vor-auswahl-zwei-zweige
titel: Zwei Divisionen in zwei Zweigen
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: TUWEL-Test 1 vom 26.11.2021, Frage 9 (nachgebaut)
angabe: |
  Welche Vorbedingung schränkt die Argumente so ein, dass `teile` ohne Exception ausgeführt werden kann?

  ```java
  public static int teile(int a, int b) {
      if (a < b) {
          return b / a;
      }
      return a / (a - b);
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`a != b`', '`a > b`', '`a > 0 && b > 0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `a = 0`, `b = 5`. Dann ist `a < b`, und `5 / 0` wirft eine Exception.'
      - wert: 2
        meldung: 'Gegenbeispiel: `a = 1`, `b = 1`. Dann ist `a < b` falsch, und `1 / (1 - 1)` teilt durch 0.'
hinweise:
  - Es gibt zwei Divisionen in zwei verschiedenen Zweigen. Bestimme für jeden Zweig, wann sein Nenner 0 ist.
  - Im ersten Zweig ist der Nenner `a`, im zweiten `a - b`. Suche für jede Option eine Belegung, die einen der beiden Nenner 0 macht.
loesung: |
  **Ansatz:** Für jeden Zweig die Gefahr bestimmen und jede Option mit einem Gegenbeispiel prüfen.
  ---
  Zweig 1 (`a < b`): Gefahr bei `a == 0`. Zweig 2 (`a >= b`): Gefahr bei `a == b`.
  ---
  `a != b` lässt `a = 0, b = 5` zu, Zweig 1 kracht. `a > 0 && b > 0` lässt `a = b = 1` zu, Zweig 2 kracht.
  ---
  `a > b` führt immer in Zweig 2, und dort ist `a - b > 0`. Keine Exception möglich. Antwort: `a > b`.
```

```aufgabe
id: me-vor-auswahl-string
titel: Eine Nachbedingung durch Fallunterscheidung
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: TUWEL-Test zur Vorbereitung 2021, Frage 10 (nachgebaut)
angabe: |
  Welche Bedingung über den Rückgabewert `s` ist eine korrekte Nachbedingung?

  ```java
  public static String code(int x, int y) {
      String s = "";
      if (x > y) {
          s += "X";
      }
      if (x % 2 == 0) {
          s += "EE";
      } else {
          s += "O";
      }
      return s;
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - '`s.length() == 2`'
      - '`s.length() >= 1 && s.length() <= 3`'
      - '`s.charAt(0) == ''X''`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `code(1, 5)`. Dann ist `x > y` falsch, es kommt kein `X` dazu, und das Ergebnis `"O"` hat die Länge 1.'
      - wert: 2
        meldung: 'Gegenbeispiel: `code(2, 7)` liefert `"EE"`. Das erste Zeichen ist dann kein `X`.'
hinweise:
  - Das erste `if` hängt `X` an oder nicht. Das zweite hängt immer etwas an, entweder `EE` (zwei Zeichen) oder `O` (ein Zeichen). Welche Längen sind möglich?
  - Schreib die vier Fälle (mit oder ohne `X`, dann `EE` oder `O`) als Tabelle auf.
loesung: |
  **Ansatz:** Fallunterscheidung über beide `if`-Anweisungen und für jeden Fall ein Beispiel.
  ---
  Mögliche Ergebnisse: `"XEE"` (etwa `code(4, 1)`, Länge 3), `"XO"` (`code(5, 1)`, Länge 2), `"EE"` (`code(2, 7)`, Länge 2), `"O"` (`code(1, 5)`, Länge 1).
  ---
  Länge 2 gilt nicht immer, und ein `X` am Anfang auch nicht. Die Länge liegt aber immer zwischen 1 und 3.
  ---
  Antwort: `s.length() >= 1 && s.length() <= 3`. Kontrolle: Alle vier Fälle erfüllen diese Bedingung.
```

```aufgabe
id: me-vor-text-mitte
titel: Den Vertrag selbst formulieren
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Formuliere eine Vorbedingung und eine Nachbedingung für diese Methode. Begründe die Vorbedingung mit den
  Exceptions, die sonst auftreten könnten.

  ```java
  public static char mitte(String s) {
      return s.charAt(s.length() / 2);
  }
  ```
teile:
  - typ: text
    muster: |
      **Vorbedingung:** `s != null && s.length() > 0`. Bei `s == null` wirft schon `s.length()` eine
      `NullPointerException`. Beim leeren String ist `s.length() / 2 = 0`, und `"".charAt(0)` wirft eine
      `StringIndexOutOfBoundsException`. Für jeden String mit mindestens einem Zeichen liegt
      `s.length() / 2` zwischen 0 und `s.length() - 1`, also ist die Position gültig.

      **Nachbedingung:** Der Rückgabewert ist das Zeichen an Position `s.length() / 2`, also
      `ergebnis == s.charAt(s.length() / 2)`. Bei gerader Länge ist das das rechte der beiden mittleren
      Zeichen, zum Beispiel `'v'` bei `"Java"`.
hinweise:
  - Welche zwei Exceptions können in dieser einen Zeile entstehen?
  - Prüfe, ob `s.length() / 2` für einen String der Länge 1 eine gültige Position ist.
loesung: |
  **Ansatz:** Jede mögliche Exception einzeln ausschließen und dann das Ergebnis beschreiben.
  ---
  `null` führt zur `NullPointerException`, der leere String zur `StringIndexOutOfBoundsException`. Vorbedingung: `s != null && s.length() > 0`.
  ---
  Für Länge 1 ist die Position `1 / 2 = 0`, gültig. Für Länge 4 ist sie 2, ebenfalls gültig.
  ---
  Nachbedingung: Rückgabewert ist `s.charAt(s.length() / 2)`. Beispiel: `mitte("Java")` liefert `'v'`, `mitte("EP1")` liefert `'P'`.
```

## Methoden nach Vorgabe schreiben

```aufgabe
id: me-vor-check-zaehlen
titel: Zeichen in einem String zählen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Schleifen über Strings kennst du aus [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      String t = "Mississippi";
      int anzahl = 0;
      for (int i = 0; i < t.length(); i++) {
          if (t.charAt(i) == 's') {
              anzahl++;
          }
      }
      System.out.println(anzahl);
    loesung: |
      4
    fehler:
      - wert: "2"
        meldung: Zähle jedes einzelne `s`, auch die doppelten. `Mississippi` enthält zweimal `ss`.
hinweise:
  - Schreib das Wort Buchstabe für Buchstabe auf und markiere jedes `s`.
loesung: |
  `Mississippi` besteht aus M-i-s-s-i-s-s-i-p-p-i.
  ---
  Das `s` steht an den Positionen 2, 3, 5 und 6. Die Schleife zählt also 4.
```

Auf den Aufgabenblättern und im Programmiertest ist der Methodenkopf fast immer vorgegeben. Die Angabe
beschreibt in Worten, was die Methode tun soll, nennt eine Vorbedingung und zeigt einige Beispiele. Deine
Aufgabe ist der Rumpf. Damit dabei nichts schiefgeht, lohnt sich ein festes Vorgehen. Wir zeigen es an
einer Methode im Stil von Blatt 2.

:::beispiel[Von der Angabe zur getesteten Methode]
**Angabe:** Implementieren Sie `int zaehleZeichen(String text, char zeichen)`. Die Methode liefert, wie
oft `zeichen` in `text` vorkommt. Vorbedingung: `text != null`. Beispiele: `zaehleZeichen("Banane", 'a')`
liefert 2, `zaehleZeichen("", 'x')` liefert 0.

**Schritt 1, Angabe zerlegen.** Name `zaehleZeichen`. Zwei Parameter: `text` vom Typ `String`, `zeichen`
vom Typ `char`. Das Wort „liefert“ heißt Rückgabewert, Typ `int`. Es steht nirgends „gibt aus“, also gibt
die Methode nichts aus. Wegen der Vorbedingung musst du `null` nicht behandeln.

**Schritt 2, Kopf abschreiben und kompilierbar machen.**

```java
public static int zaehleZeichen(String text, char zeichen) {
    return 0; // vorläufig
}
```

**Schritt 3, ein Beispiel von Hand durchspielen.** Bei `"Banane"` und `'a'` gehst du die Positionen 0 bis
5 durch und zählst bei jedem `a` eins dazu. Das ist eine Schleife über alle Positionen mit einem Zähler.

**Schritt 4, Rumpf schreiben.**

```java
public static int zaehleZeichen(String text, char zeichen) {
    int anzahl = 0;
    for (int i = 0; i < text.length(); i++) {
        if (text.charAt(i) == zeichen) {
            anzahl++;
        }
    }
    return anzahl;
}
```

**Schritt 5, in `main` mit den Beispielen und einem Randfall testen.**

```java
public static void main(String[] args) {
    System.out.println(zaehleZeichen("Banane", 'a'));   // erwartet 2
    System.out.println(zaehleZeichen("", 'x'));         // erwartet 0
    System.out.println(zaehleZeichen("aaa", 'a'));      // erwartet 3
}
```

Die Ausgabe `2`, `0`, `3` stimmt mit den Erwartungen überein. Der leere String ist ein wichtiger Randfall.
Dort läuft die Schleife kein einziges Mal, und es kommt der Startwert 0 zurück.
:::

:::merke[Methode nach Vorgabe in fünf Schritten]
1. **Angabe zerlegen:** Name, Parameter mit Typen, Rückgabetyp, „liefert“ (also `return`) oder „gibt aus“ (also `println`), Vorbedingung.
2. **Kopf exakt abschreiben** und mit einem vorläufigen `return` kompilierbar machen.
3. **Ein Beispiel von Hand** durchspielen und erkennen, welche Schleife oder Verzweigung nötig ist.
4. **Rumpf schreiben.**
5. **In `main` testen**, mit allen Beispielen der Angabe und mindestens einem Randfall (leerer String, 0, ein einziges Zeichen). Im Programmiertest gibt es für Testfälle in `main` eigene Punkte.
:::

:::achtung[Den Methodenkopf verändert]
Die Angabe verlangt `int zaehleZeichen(String text, char zeichen)`. Jemand schreibt

```java
public static int zaehleZeichen(String text, String zeichen) {   // falsch
```

weil sich ein String leichter vergleichen lässt. Damit ist die verlangte Methode nicht vorhanden. Die
Tests rufen `zaehleZeichen("Banane", 'a')` mit einem `char` auf und kompilieren nicht. Im Programmiertest
steht deshalb ausdrücklich: „Die vorgegebenen Methodenköpfe dürfen nicht erweitert oder geändert werden“.
Technisch würde eine Umbenennung der Parameter nichts zerstören, denn Parameternamen gehören nicht zur
Signatur. Name, Parametertypen, ihre Reihenfolge und Rückgabetyp aber schon. Am sichersten schreibst du den
Kopf wörtlich ab.
:::

```aufgabe
id: me-vor-check-liefert
titel: Liefert oder gibt aus?
niveau: 1
art: check
angabe: |
  Eine Angabe lautet: „Die Methode `istGross` liefert `true`, wenn die Zahl größer als 100 ist.“ Welcher Methodenkopf passt?
teile:
  - typ: auswahl
    optionen: ['`public static boolean istGross(int zahl)`', '`public static void istGross(int zahl)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: „Liefert“ bedeutet Rückgabewert. Eine `void`-Methode kann `true` nur ausgeben, aber nicht zurückgeben.
loesung: |
  „Liefert“ heißt: Die Methode gibt mit `return` einen Wert zurück.
  ---
  Der Wert ist `true` oder `false`, also ist der Rückgabetyp `boolean`.
```

### Überladene Methoden ohne doppelten Code

Auf Blatt 3 kommt eine Aufgabe, in der dieselbe Methode in vier Varianten verlangt wird (`addChar`, in
früheren Jahren `addSequence` oder `addTags`). In den Angaben von WS 2021 und WS 2023 steht wörtlich: „Vermeiden
Sie redundanten Code, indem Sie eine bereits implementierte Methode verwenden.“ **Redundant** heißt „überflüssig
doppelt“. Gemeint ist: Die Schleife, die die eigentliche Arbeit macht, steht nur in **einer** Variante. Die
anderen Varianten rufen diese auf. Das hast du schon bei `flaeche(int seite)` in
[6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden) gesehen.

:::beispiel[Vier Varianten von addSequence]
**Angabe (nach Blatt 3, WS 2021):** `void addSequence(String text, char symbol)` gibt `text` aus, wobei
zwischen je zwei Zeichen dreimal `symbol` steht. `addSequence(int number, char symbol)` macht dasselbe mit
den Ziffern einer Zahl. `addSequence(String text, String symbols)` gibt für jedes Zeichen von `symbols`
eine eigene Zeile aus. `addSequence(String text)` verwendet das Zeichen `+`.

```java
public class Sequenz {
    public static void addSequence(String text, char symbol) {
        String ergebnis = "";
        for (int i = 0; i < text.length(); i++) {
            ergebnis = ergebnis + text.charAt(i);
            if (i < text.length() - 1) {
                ergebnis = ergebnis + symbol + symbol + symbol;
            }
        }
        System.out.println(ergebnis);
    }

    public static void addSequence(int number, char symbol) {
        addSequence(Integer.toString(number), symbol);
    }

    public static void addSequence(String text, String symbols) {
        for (int i = 0; i < symbols.length(); i++) {
            addSequence(text, symbols.charAt(i));
        }
    }

    public static void addSequence(String text) {
        addSequence(text, '+');
    }

    public static void main(String[] args) {
        addSequence("Uni", '#');
        addSequence(305, ':');
        addSequence("ok", "*-");
        addSequence("Wien");
    }
}
```

1. **Grundvariante** `addSequence(String, char)`: Sie hängt jedes Zeichen an `ergebnis` an. Nach jedem Zeichen außer dem letzten (`i < text.length() - 1`) kommen drei Symbole dazu. `addSequence("Uni", '#')` ergibt `U###n###i`.
2. **Zahl-Variante:** `Integer.toString(305)` macht aus der Zahl den String `"305"`. Dann übernimmt die Grundvariante. Ausgabe `3:::0:::5`.
3. **String-Variante:** Für jedes Zeichen von `"*-"` wird die Grundvariante einmal aufgerufen. Ausgaben `o***k` und `o---k`.
4. **Variante ohne Symbol:** ruft die Grundvariante mit `'+'` auf. Ausgabe `W+++i+++e+++n`.

```
U###n###i
3:::0:::5
o***k
o---k
W+++i+++e+++n
```

Nur die Grundvariante enthält eine Schleife über `text`. Ein Fehler darin wird an einer Stelle behoben
und ist dann in allen vier Varianten weg.
:::

:::achtung[Zeichen addiert statt angehängt]
Eine kürzere, aber falsche Zeile in der Grundvariante ist

```java
ergebnis += symbol + symbol + symbol;     // falsch
```

Für `addSequence("Uni", '#')` erscheint dann `U105n105i`. Der Grund: Rechts vom `+=` stehen nur `char`-Werte.
Java rechnet sie wie Zahlen zusammen, 35 + 35 + 35 = 105, und hängt erst dann die Zahl an. In der
richtigen Fassung `ergebnis = ergebnis + symbol + symbol + symbol;` steht links ein String. Dann wird von
links nach rechts angehängt.
:::

:::achtung[Die Schleife in jede Variante kopiert]
Wer die Schleife aus der Grundvariante in alle vier Methoden kopiert, bekommt zwar die richtige Ausgabe.
Die Angabe verlangt aber ausdrücklich, redundanten Code zu vermeiden. Im Feedbackgespräch kommt dann die
Frage, was man ändern müsste, wenn statt drei Symbolen nur noch zwei eingefügt werden sollen. Mit
Kopien sind es vier Stellen, und eine vergessene Stelle ist ein Fehler. Mit Aufrufen ist es eine Stelle.
:::

```reflexion
frage: In der Zahl-Variante steht `addSequence(Integer.toString(number), symbol);`. Warum ruft Java hier die String-Variante auf und nicht wieder die Zahl-Variante selbst?
antwort: |
  `Integer.toString(number)` hat den Typ `String`. Der Aufruf hat also die Argumenttypen `String` und
  `char`. Nach den Regeln der Überladungsauflösung passt genau `addSequence(String, char)`. Die
  Zahl-Variante `addSequence(int, char)` passt nicht, weil ein `String` nie in `int` umgewandelt wird.
  Würde dort `addSequence(number, symbol)` stehen, riefe sich die Methode endlos selbst auf. Eine Methode,
  die sich selbst aufruft, heißt rekursiv. Wie man das mit einem Ende baut, zeigt
  [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
```

```aufgabe
id: me-vor-gefuehrt-addchar
titel: Zweimal, einmal, zweimal
niveau: 2
lernziel: 8
kompetenz: verstehen
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 2 (nachgebaut)
angabe: |
  Diese Methode fügt zwischen je zwei Zeichen abwechselnd **zweimal** und **einmal** das Zeichen `c` ein.
  Was gibt `main` aus?
teile:
  - typ: ausgabe
    code: |
      public class AddChar {
          public static void addChar(String text, char c) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  ergebnis = ergebnis + text.charAt(i);
                  if (i < text.length() - 1) {
                      if (i % 2 == 0) {
                          ergebnis = ergebnis + c;
                      }
                      ergebnis = ergebnis + c;
                  }
              }
              System.out.println(ergebnis);
          }

          public static void addChar(String text) {
              addChar(text, '~');
          }

          public static void main(String[] args) {
              addChar("Tabelle", '#');
              addChar("Go", '%');
              addChar("Q", '!');
              addChar("Uni");
          }
      }
    loesung: |
      T##a#b##e#l##l#e
      G%%o
      Q
      U~~n~i
    fehler:
      - wert: "T#a##b#e##l#l##e\nG%o\nQ\nU~n~~i"
        meldung: Bei `i = 0` ist `i % 2 == 0` wahr. Die erste Lücke bekommt also zwei Zeichen, nicht eines.
      - wert: "T##a#b##e#l##l#e##\nG%%o%\nQ!!\nU~~n~i~~"
        meldung: Nach dem letzten Zeichen wird nichts mehr eingefügt. Dafür sorgt die Bedingung `i < text.length() - 1`.
gefuehrt:
  - text: Wie viele Lücken zwischen zwei Zeichen hat `"Tabelle"`?
    teil: { typ: zahl, loesung: "7 - 1" }
    erklaerung: Ein String mit 7 Zeichen hat 6 Lücken zwischen Nachbarn.
  - text: Die Lücken bekommen der Reihe nach 2, 1, 2, 1, 2, 1 Zeichen. Wie viele `#` werden insgesamt eingefügt?
    teil: { typ: zahl, loesung: "3*2 + 3*1" }
    erklaerung: Dreimal zwei und dreimal eins ergibt 9.
  - text: Wie lang ist die erste Ausgabezeile?
    teil: { typ: zahl, loesung: "7 + 9" }
    erklaerung: 7 Buchstaben und 9 eingefügte Zeichen ergeben 16 Zeichen.
  - text: Was gibt `addChar("Q", '!')` aus?
    teil:
      typ: auswahl
      optionen: ['`Q`', '`Q!!`', 'nichts']
      richtig: [0]
    erklaerung: Ein einzelnes Zeichen hat keine Lücke. Die Bedingung `i < text.length() - 1` ist bei `i = 0` falsch, es wird nur `Q` ausgegeben.
hinweise:
  - 'Für die Lücke nach Position `i` gilt: bei geradem `i` zwei Zeichen, bei ungeradem eines.'
  - '`addChar("Uni")` ruft `addChar("Uni", ''~'')` auf.'
loesung: |
  **Ansatz:** Für jede Lücke nach Position `i` (außer nach dem letzten Zeichen) die Anzahl bestimmen: gerades `i` zwei, ungerades `i` eines.
  ---
  `"Tabelle"`: Lücken nach i = 0 bis 5 bekommen 2, 1, 2, 1, 2, 1 Zeichen. Ergebnis `T##a#b##e#l##l#e`.
  ---
  `"Go"`: eine Lücke (i = 0) mit zwei Zeichen, `G%%o`. `"Q"`: keine Lücke, `Q`.
  ---
  `addChar("Uni")` ruft die Grundvariante mit `'~'` auf: `U~~n~i`. Kontrolle: Die erste Zeile hat 16 Zeichen.
```

```aufgabe
id: me-vor-code-zeichenbereich
titel: Ein Bereich von Zeichen
niveau: 1
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 2 (`printAlphabet`, `printAsciiNeighbors`, abgewandelt)
angabe: |
  Implementiere `void printCharRange(char from, char to)`. Die Methode gibt alle Zeichen von `from` bis
  einschließlich `to` in einer Zeile aus, getrennt durch je ein Leerzeichen. Nach dem letzten Zeichen
  steht kein Leerzeichen, danach folgt ein Zeilenumbruch. Vorbedingung: `from <= to`.

  Beispiel: `printCharRange('a', 'e')` gibt `a b c d e` aus.
teile:
  - typ: code
    vorlage: |
      public class Bereich {
          public static void printCharRange(char from, char to) {
              // TODO
          }

          public static void main(String[] args) {
              printCharRange('a', 'e');
          }
      }
    musterloesung: |
      public class Bereich {
          public static void printCharRange(char from, char to) {
              for (char c = from; c <= to; c++) {
                  System.out.print(c);
                  if (c < to) {
                      System.out.print(' ');
                  }
              }
              System.out.println();
          }

          public static void main(String[] args) {
              printCharRange('a', 'e');
          }
      }
    tests:
      - { aufruf: "printCharRange('a', 'e')", stdout: "a b c d e\n" }
      - { aufruf: "printCharRange('X', 'X')", stdout: "X\n", beschreibung: "ein einziges Zeichen" }
      - { aufruf: "printCharRange('0', '3')", stdout: "0 1 2 3\n" }
      - { aufruf: "printCharRange('w', 'z')", stdout: "w x y z\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Prüfe das Ende der Zeile: Nach `e` darf kein Leerzeichen mehr stehen." }
      - { wert: 3, meldung: "Gibst du Zeichen aus oder Zahlen? Mit einer `int`-Schleifenvariable erscheinen Zahlenwerte wie 48. Verwende eine `char`-Variable oder einen Cast." }
hinweise:
  - Eine Schleifenvariable darf den Typ `char` haben. `c++` geht dann zum nächsten Zeichen.
  - 'Das Leerzeichen gehört nur zwischen zwei Zeichen. Gib es also nur aus, wenn `c < to` ist.'
loesung: |
  **Ansatz:** Eine Schleife über die Zeichen von `from` bis `to`. Trennzeichen nur zwischen den Zeichen.
  ---
  ```java
  for (char c = from; c <= to; c++) {
      System.out.print(c);
      if (c < to) {
          System.out.print(' ');
      }
  }
  System.out.println();
  ```
  ---
  Kontrolle mit `('X', 'X')`: Die Schleife läuft einmal, `c < to` ist falsch, also kein Leerzeichen. Ausgabe `X`.
```

```aufgabe
id: me-vor-code-ungerade
titel: Summe der ungeraden Zahlen
niveau: 1
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 2 (`calcSum`, abgewandelt)
angabe: |
  Implementiere `int calcOddSum(int start, int end)`. Die Methode liefert die Summe aller **ungeraden**
  Zahlen im Intervall [`start`, `end`], also einschließlich beider Grenzen. Vorbedingung: `start <= end`.

  Beispiele: `calcOddSum(1, 6)` liefert 1 + 3 + 5 = 9. `calcOddSum(-5, 0)` liefert -5 + -3 + -1 = -9.
teile:
  - typ: code
    vorlage: |
      public class Ungerade {
          public static int calcOddSum(int start, int end) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(calcOddSum(1, 6));
          }
      }
    musterloesung: |
      public class Ungerade {
          public static int calcOddSum(int start, int end) {
              int summe = 0;
              for (int i = start; i <= end; i++) {
                  if (i % 2 != 0) {
                      summe += i;
                  }
              }
              return summe;
          }

          public static void main(String[] args) {
              System.out.println(calcOddSum(1, 6));
          }
      }
    tests:
      - { aufruf: "calcOddSum(1, 6)", erwartet: "9" }
      - { aufruf: "calcOddSum(4, 4)", erwartet: "0", beschreibung: "nur eine gerade Zahl" }
      - { aufruf: "calcOddSum(7, 7)", erwartet: "7", beschreibung: "obere Grenze zählt mit" }
      - { aufruf: "calcOddSum(-5, 0)", erwartet: "-9", beschreibung: "negative Zahlen" }
    fehler:
      - { wert: 3, meldung: "Läuft deine Schleife bis einschließlich `end`? Das Intervall [start, end] ist an beiden Seiten geschlossen." }
      - { wert: 4, meldung: "Für negative ungerade Zahlen ist `i % 2` nicht 1, sondern -1. Prüfe deshalb `i % 2 != 0` statt `i % 2 == 1`." }
hinweise:
  - Eine Schleife von `start` bis einschließlich `end`. Addiere nur, wenn die Zahl ungerade ist.
  - 'Achtung bei negativen Zahlen: `-5 % 2` ist in Java `-1`.'
loesung: |
  **Ansatz:** Alle Zahlen des Intervalls durchgehen und nur die ungeraden aufaddieren.
  ---
  ```java
  int summe = 0;
  for (int i = start; i <= end; i++) {
      if (i % 2 != 0) {
          summe += i;
      }
  }
  return summe;
  ```
  ---
  Kontrolle: `calcOddSum(-5, 0)` addiert -5, -3 und -1, also -9. Mit `i % 2 == 1` käme 0 heraus, weil der Rest negativer Zahlen in Java negativ ist.
```

```aufgabe
id: me-vor-code-zweimal
titel: Kommt das Zeichen genau zweimal vor?
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 2 (`isCharOnceInString`, abgewandelt)
angabe: |
  Implementiere `boolean isCharTwiceInString(String text, char character)`. Die Methode liefert `true`,
  wenn `character` in `text` **genau zweimal** vorkommt, sonst `false`. Vorbedingung: `text != null`.

  Beispiele: `("Kaffee", 'f')` liefert `true`, `("Kaffee", 'e')` liefert `true`, `("Banane", 'n')` liefert `true`,
  `("Kanada", 'a')` liefert `false` (dreimal).
teile:
  - typ: code
    vorlage: |
      public class Zweimal {
          public static boolean isCharTwiceInString(String text, char character) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(isCharTwiceInString("Kaffee", 'f'));
          }
      }
    musterloesung: |
      public class Zweimal {
          public static boolean isCharTwiceInString(String text, char character) {
              int anzahl = 0;
              for (int i = 0; i < text.length(); i++) {
                  if (text.charAt(i) == character) {
                      anzahl++;
                  }
              }
              return anzahl == 2;
          }

          public static void main(String[] args) {
              System.out.println(isCharTwiceInString("Kaffee", 'f'));
          }
      }
    tests:
      - { aufruf: "isCharTwiceInString(\"Kaffee\", 'f')", erwartet: "true" }
      - { aufruf: "isCharTwiceInString(\"Kanada\", 'a')", erwartet: "false", beschreibung: "dreimal ist nicht zweimal" }
      - { aufruf: "isCharTwiceInString(\"\", 'x')", erwartet: "false" }
      - { aufruf: "isCharTwiceInString(\"Banane\", 'B')", erwartet: "false", beschreibung: "nur einmal" }
      - { aufruf: "isCharTwiceInString(\"abab\", 'b')", erwartet: "true", versteckt: true }
    regeln: { erlaubteApi: ["String.charAt", "String.length"] }
    fehler:
      - { wert: 2, meldung: "„Genau zweimal“ heißt: nicht weniger und nicht mehr. Prüfe `anzahl == 2`, nicht `anzahl >= 2`." }
      - { wert: 4, meldung: "Ein einziges Vorkommen reicht nicht. Liefert deine Methode schon beim ersten Treffer `true`?" }
      - { wert: "erlaubteApi", meldung: "Hier sind nur `charAt` und `length` erlaubt, so wie auf den Blättern und im Test." }
hinweise:
  - Zähle zuerst alle Vorkommen mit einer Schleife. Entscheide erst danach.
  - '`return anzahl == 2;` liefert direkt den passenden Wahrheitswert.'
loesung: |
  **Ansatz:** Vorkommen zählen wie im Beispiel „Von der Angabe zur getesteten Methode“, dann mit 2 vergleichen.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == character) {
          anzahl++;
      }
  }
  return anzahl == 2;
  ```
  ---
  Kontrolle: `"Kanada"` mit `'a'` zählt 3, also `false`. Ein vorzeitiges `return true` beim zweiten Treffer wäre falsch, denn danach könnte ein drittes Vorkommen folgen.
```

```aufgabe
id: me-vor-code-grossbuchstaben
titel: Großbuchstaben entfernen
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 2 (`removeNumbersInString`, abgewandelt)
angabe: |
  Implementiere `String removeUppercase(String text)`. Die Methode liefert einen **neuen** String, in dem
  alle Großbuchstaben `A` bis `Z` aus `text` entfernt sind. Alle anderen Zeichen bleiben in ihrer
  Reihenfolge erhalten. Vorbedingung: `text != null`. Erlaubt sind nur `charAt` und `length`.

  Beispiel: `removeUppercase("Hallo EP1 Welt!")` liefert `"allo 1 elt!"`.
teile:
  - typ: code
    vorlage: |
      public class Klein {
          public static String removeUppercase(String text) {
              return text; // TODO
          }

          public static void main(String[] args) {
              System.out.println(removeUppercase("Hallo EP1 Welt!"));
          }
      }
    musterloesung: |
      public class Klein {
          public static String removeUppercase(String text) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  char c = text.charAt(i);
                  if (c < 'A' || c > 'Z') {
                      ergebnis = ergebnis + c;
                  }
              }
              return ergebnis;
          }

          public static void main(String[] args) {
              System.out.println(removeUppercase("Hallo EP1 Welt!"));
          }
      }
    tests:
      - { aufruf: "removeUppercase(\"Hallo EP1 Welt!\")", erwartet: "\"allo 1 elt!\"" }
      - { aufruf: "removeUppercase(\"\")", erwartet: "\"\"" }
      - { aufruf: "removeUppercase(\"ABC\")", erwartet: "\"\"", beschreibung: "nur Großbuchstaben" }
      - { aufruf: "removeUppercase(\"[Zebra@Ast]\")", erwartet: "\"[ebra@st]\"", beschreibung: "Zeichen direkt neben A und Z" }
    regeln: { erlaubteApi: ["String.charAt", "String.length"] }
    fehler:
      - { wert: 4, meldung: "Prüfe die Grenzen. `[` liegt direkt hinter `Z`, `@` direkt vor `A`. Beide sind keine Großbuchstaben und müssen bleiben." }
      - { wert: "erlaubteApi", meldung: "Methoden wie `Character.isUpperCase` oder `replace` sind hier nicht erlaubt. Vergleiche das Zeichen mit `'A'` und `'Z'`." }
hinweise:
  - Baue einen neuen String Zeichen für Zeichen auf. Hänge ein Zeichen nur an, wenn es kein Großbuchstabe ist.
  - 'Ein Zeichen `c` ist ein Großbuchstabe, wenn `c >= ''A'' && c <= ''Z''` gilt. Das Gegenteil ist `c < ''A'' || c > ''Z''`.'
loesung: |
  **Ansatz:** Neuen String aus allen Zeichen aufbauen, die keine Großbuchstaben sind. Strings selbst sind unveränderlich, deshalb entsteht ein neuer.
  ---
  ```java
  String ergebnis = "";
  for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      if (c < 'A' || c > 'Z') {
          ergebnis = ergebnis + c;
      }
  }
  return ergebnis;
  ```
  ---
  Kontrolle: Bei `"[Zebra@Ast]"` bleiben `[` und `@` erhalten, `Z` und `A` verschwinden. Ergebnis `[ebra@st]`.
```

```aufgabe
id: me-vor-zeilen-koepfe
titel: Passen die Köpfe zur Angabe?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Angabe verlangt genau diese vier Methoden:
  `int countVowels(String text)`, `boolean isLonger(String text, int n)`,
  `void printFramed(String text)` und `String repeatChar(char c, int n)`.

  In welchen Zeilen der Abgabe weicht der Methodenkopf so ab, dass die verlangte Methode fehlt?
teile:
  - typ: zeilen
    code: |
      public class Abgabe {
          public static void countVowels(String text) {
              // Rumpf
          }
          public static boolean isLonger(String s, int laenge) {
              // Rumpf
          }
          public static void printframed(String text) {
              // Rumpf
          }
          public static String repeatChar(int n, char c) {
              // Rumpf
          }
      }
    loesung: [2, 8, 11]
    fehler:
      - wert: [2, 5, 8, 11]
        meldung: Zeile 5 ist in Ordnung. Parameternamen gehören nicht zur Signatur, `s` statt `text` ist erlaubt.
      - wert: [2, 11]
        meldung: Java unterscheidet Groß- und Kleinschreibung. `printframed` ist ein anderer Name als `printFramed`.
      - wert: [8, 11]
        meldung: Auch der Rückgabetyp muss stimmen. Die Angabe verlangt `int countVowels`, nicht `void`.
hinweise:
  - Vergleiche je Kopf vier Dinge. Rückgabetyp, Name (mit Groß- und Kleinschreibung), Parametertypen, deren Reihenfolge.
  - Parameternamen dürfen abweichen.
loesung: |
  **Ansatz:** Jeden Kopf Stück für Stück mit der Angabe vergleichen. Parameternamen ignorieren.
  ---
  Zeile 2: Rückgabetyp `void` statt `int`. Zeile 8: `printframed` statt `printFramed`.
  ---
  Zeile 11: Parameter in der falschen Reihenfolge, `(int, char)` statt `(char, int)`.
  ---
  Zeile 5 stimmt: `boolean isLonger(String, int)`. Nur die Namen der Parameter sind anders, und die zählen nicht.
```

```aufgabe
id: me-vor-ausgabe-sequenz
titel: addSequence mit anderen Daten
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Die Klasse `Sequenz` aus dem Beispiel „Vier Varianten von addSequence“ wird mit anderen Aufrufen verwendet.
  Was gibt dieses `main` aus?
teile:
  - typ: ausgabe
    code: |
      public class Sequenz2 {
          public static void addSequence(String text, char symbol) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  ergebnis = ergebnis + text.charAt(i);
                  if (i < text.length() - 1) {
                      ergebnis = ergebnis + symbol + symbol + symbol;
                  }
              }
              System.out.println(ergebnis);
          }

          public static void addSequence(int number, char symbol) {
              addSequence(Integer.toString(number), symbol);
          }

          public static void addSequence(String text, String symbols) {
              for (int i = 0; i < symbols.length(); i++) {
                  addSequence(text, symbols.charAt(i));
              }
          }

          public static void addSequence(String text) {
              addSequence(text, '+');
          }

          public static void main(String[] args) {
              addSequence("Hi!", '-');
              addSequence("");
              addSequence(76, '*');
              addSequence("EP", "<>");
          }
      }
    loesung: |
      H---i---!
      
      7***6
      E<<<P
      E>>>P
    fehler:
      - wert: "H---i---!\n7***6\nE<<<P\nE>>>P"
        meldung: '`addSequence("")` gibt den leeren String mit `println` aus. Das ergibt eine leere Zeile, sie gehört zur Ausgabe.'
      - wert: "H---i---!---\n\n7***6\nE<<<P\nE>>>P"
        meldung: Nach dem letzten Zeichen werden keine Symbole angehängt. Dafür sorgt die Bedingung `i < text.length() - 1`.
hinweise:
  - Bestimme bei jedem Aufruf zuerst, welche Variante Java wählt, und verfolge dann die Grundvariante.
  - Auch ein leerer String wird mit `println` ausgegeben. Was erscheint dann?
loesung: |
  **Ansatz:** Für jeden Aufruf die Variante bestimmen. Alle Varianten landen in der Grundvariante `addSequence(String, char)`.
  ---
  `addSequence("Hi!", '-')` ergibt `H---i---!`. `addSequence("")` ruft die Grundvariante mit `'+'` auf. Die Schleife läuft nicht, `println("")` gibt eine leere Zeile aus.
  ---
  `addSequence(76, '*')` wird zu `addSequence("76", '*')`, Ausgabe `7***6`.
  ---
  `addSequence("EP", "<>")` ruft die Grundvariante einmal mit `'<'` und einmal mit `'>'` auf: `E<<<P` und `E>>>P`.
```

```aufgabe
id: me-vor-lueckentext-delegation
titel: Varianten durch Aufrufe ergänzen
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Ergänze die Rümpfe der beiden Varianten so, dass sie die Grundvariante `rahme(String, char)` aufrufen,
  statt deren Code zu wiederholen. `rahme(int, char)` soll die Ziffern der Zahl einrahmen,
  `rahme(String)` soll das Zeichen `*` verwenden.
teile:
  - typ: lueckentext
    code: |
      public class Rahmen2 {
          public static void rahme(String text, char c) {
              System.out.println(c + text + c);
          }

          public static void rahme(int zahl, char c) {
              ___;
          }

          public static void rahme(String text) {
              ___;
          }

          public static void main(String[] args) {
              rahme("EP1", '#');
              rahme(2026, '|');
              rahme("ok");
          }
      }
    luecken:
      - ["rahme(Integer.toString(zahl), c)", "rahme(\"\" + zahl, c)", "rahme(String.valueOf(zahl), c)"]
      - ["rahme(text, '*')"]
    fehler:
      - wert: ["rahme(zahl, c)", "rahme(text, '*')"]
        meldung: '`rahme(zahl, c)` ruft wieder die `int`-Variante auf, also sich selbst, und das endlos. Wandle die Zahl zuerst in einen String um.'
      - wert: ["rahme(Integer.toString(zahl), c)", "rahme(text, \"*\")"]
        meldung: '`"*"` ist ein `String`. Die Grundvariante verlangt als zweites Argument einen `char`, also `''*''`.'
hinweise:
  - Die Grundvariante braucht einen `String` und einen `char`. Wie wird aus einer Zahl ein String?
loesung: |
  **Ansatz:** Jede Variante wandelt ihre Argumente in die Typen der Grundvariante `rahme(String, char)` um und ruft sie auf.
  ---
  `rahme(int, char)`: `rahme(Integer.toString(zahl), c);`. Auch `"" + zahl` macht aus der Zahl einen String.
  ---
  `rahme(String)`: `rahme(text, '*');`. Die Ausgabe von `main` ist dann `#EP1#`, `|2026|` und `*ok*`.
```

```aufgabe
id: me-vor-code-separator
titel: Vier Varianten von addSeparator
niveau: 3
lernziel: 8
kompetenz: anwenden
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 2 (`addChar`, nachgebaut mit vertauschtem Muster)
angabe: |
  Implementiere vier überladene Methoden. Jede gibt genau eine Zeile pro Text aus.

  - `void addSeparator(String text, char sep)`: Zwischen je zwei Zeichen von `text` wird `sep` abwechselnd **einmal** und **zweimal** eingefügt, beginnend mit einmal. Ist `text` leer, wird eine leere Zeile ausgegeben. Vorbedingung: `text != null`.
  - `void addSeparator(int number, char sep)`: dasselbe für die Ziffern von `number`. Vorbedingung: `number >= 0`.
  - `void addSeparator(String text, String seps)`: eine Zeile für jedes Zeichen von `seps`, in dieser Reihenfolge. Vorbedingung: beide `!= null`.
  - `void addSeparator(String text)`: verwendet das Zeichen `_`.

  Vermeide redundanten Code: Nur eine Variante darf eine Schleife über `text` enthalten.

  Beispiele: `addSeparator("Wasser", '#')` gibt `W#a##s#s##e#r` aus. `addSeparator(3095, '.')` gibt `3.0..9.5` aus.
  `addSeparator("Uni")` gibt `U_n__i` aus.
teile:
  - typ: code
    vorlage: |
      public class Separator {
          public static void addSeparator(String text, char sep) {
              // TODO
          }

          public static void addSeparator(int number, char sep) {
              // TODO
          }

          public static void addSeparator(String text, String seps) {
              // TODO
          }

          public static void addSeparator(String text) {
              // TODO
          }

          public static void main(String[] args) {
              addSeparator("Wasser", '#');
              addSeparator(3095, '.');
              addSeparator("OK", "?=");
              addSeparator("Uni");
          }
      }
    musterloesung: |
      public class Separator {
          public static void addSeparator(String text, char sep) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  ergebnis = ergebnis + text.charAt(i);
                  if (i < text.length() - 1) {
                      ergebnis = ergebnis + sep;
                      if (i % 2 == 1) {
                          ergebnis = ergebnis + sep;
                      }
                  }
              }
              System.out.println(ergebnis);
          }

          public static void addSeparator(int number, char sep) {
              addSeparator(Integer.toString(number), sep);
          }

          public static void addSeparator(String text, String seps) {
              for (int i = 0; i < seps.length(); i++) {
                  addSeparator(text, seps.charAt(i));
              }
          }

          public static void addSeparator(String text) {
              addSeparator(text, '_');
          }

          public static void main(String[] args) {
              addSeparator("Wasser", '#');
              addSeparator(3095, '.');
              addSeparator("OK", "?=");
              addSeparator("Uni");
          }
      }
    tests:
      - { aufruf: "addSeparator(\"Wasser\", '#')", stdout: "W#a##s#s##e#r\n" }
      - { aufruf: "addSeparator(\"Z\", '+')", stdout: "Z\n", beschreibung: "ein einzelnes Zeichen" }
      - { aufruf: "addSeparator(\"\", '@')", stdout: "\n", beschreibung: "leerer Text: leere Zeile" }
      - { aufruf: "addSeparator(3095, '.')", stdout: "3.0..9.5\n" }
      - { aufruf: "addSeparator(7, ':')", stdout: "7\n" }
      - { aufruf: "addSeparator(\"OK\", \"?=\")", stdout: "O?K\nO=K\n" }
      - { aufruf: "addSeparator(\"Uni\")", stdout: "U_n__i\n" }
      - { aufruf: "addSeparator(\"Tabelle\", \"-\")", stdout: "T-a--b-e--l-l--e\n", versteckt: true }
    regeln: { keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Das Muster beginnt mit **einem** Zeichen: nach der ersten Lücke `#`, nach der zweiten `##`. Prüfe, bei welchem `i` du das zweite Zeichen anhängst." }
      - { wert: 3, meldung: "Beim leeren Text soll eine leere Zeile erscheinen. Gib auch dann `ergebnis` mit `println` aus." }
      - { wert: 4, meldung: "Wandle die Zahl mit `Integer.toString(number)` in einen String um und rufe die Grundvariante auf." }
      - { wert: 6, meldung: "Für jedes Zeichen von `seps` eine eigene Zeile: Rufe die Grundvariante in einer Schleife über `seps` auf." }
hinweise:
  - Schreibe zuerst die Grundvariante `addSeparator(String, char)` und teste sie mit `"Wasser"`, `"Z"` und `""`. Erst dann die anderen.
  - In der Grundvariante kommt nach Position `i` (außer nach der letzten) immer ein `sep`, bei ungeradem `i` ein zweites.
  - Die drei anderen Varianten enthalten nur Aufrufe der Grundvariante, `seps` braucht dafür eine eigene Schleife über `seps`, nicht über `text`.
loesung: |
  **Ansatz:** Eine Grundvariante mit der eigentlichen Logik, drei Varianten, die nur umwandeln und aufrufen.
  ---
  Grundvariante: Jedes Zeichen anhängen. Nach jedem Zeichen außer dem letzten ein `sep`, bei ungeradem `i` noch ein zweites.
  ```java
  String ergebnis = "";
  for (int i = 0; i < text.length(); i++) {
      ergebnis = ergebnis + text.charAt(i);
      if (i < text.length() - 1) {
          ergebnis = ergebnis + sep;
          if (i % 2 == 1) {
              ergebnis = ergebnis + sep;
          }
      }
  }
  System.out.println(ergebnis);
  ```
  ---
  Die drei anderen Varianten:
  ```java
  addSeparator(Integer.toString(number), sep);           // Zahl
  for (int i = 0; i < seps.length(); i++) {              // mehrere Zeichen
      addSeparator(text, seps.charAt(i));
  }
  addSeparator(text, '_');                               // ohne Zeichen
  ```
  ---
  Kontrolle: `"Wasser"` hat Lücken nach i = 0 bis 4 mit 1, 2, 1, 2, 1 Zeichen: `W#a##s#s##e#r`. Im Original (Blatt 3, WS 2023) beginnt das Muster mit zweimal. Dort genügt es, die Bedingung auf `i % 2 == 0` zu ändern.
```

```aufgabe
id: me-vor-text-redundanz
titel: Im Feedbackgespräch die Varianten erklären
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Die Tutorin fragt: „Warum rufen Ihre Varianten `addSeparator(int, char)` und `addSeparator(String)`
  die Grundvariante auf, statt die Schleife selbst zu enthalten? Und was müssten Sie ändern, wenn das
  Muster künftig mit zweimal beginnen soll?“ Antworte in drei bis vier Sätzen.
teile:
  - typ: text
    muster: |
      Die eigentliche Logik steht nur in der Grundvariante `addSeparator(String, char)`. Die anderen
      Varianten wandeln nur ihre Argumente um, also die Zahl mit `Integer.toString` in einen String oder
      sie setzen das Standardzeichen `_` ein, und rufen dann die Grundvariante auf. So gibt es keinen
      doppelten Code, wie es die Angabe verlangt. Für das neue Muster ändere ich nur in der Grundvariante
      die Bedingung von `i % 2 == 1` auf `i % 2 == 0`, und alle vier Varianten verhalten sich sofort richtig.
hinweise:
  - Was ist der Vorteil, wenn eine Logik nur an einer Stelle im Code steht?
  - Welche Zeile der Grundvariante entscheidet, wann ein zweites Zeichen eingefügt wird?
loesung: |
  **Ansatz:** Den Begriff „redundanter Code“ erklären und mit der konkreten Änderung belegen.
  ---
  Nur die Grundvariante enthält die Schleife. Die anderen Varianten passen ihre Argumente an und rufen sie auf.
  ---
  Eine Änderung des Musters betrifft daher nur die Bedingung `i % 2 == 1` in der Grundvariante. Mit kopierten Schleifen müsste man vier Stellen ändern und könnte eine vergessen.
```

## Gemischte Wiederholung

Hier sind die Aufgaben bunt gemischt, auch mit Stoff aus den Kapiteln 2 bis 5. Das ist Absicht: Im Quiz
und im Test steht nicht dabei, welcher Abschnitt gemeint ist. Bei den ersten beiden Aufgaben musst du nichts
programmieren. Du entscheidest nur, welcher Methodenkopf oder welche Art von Methode passt. Genau diese
Entscheidung ist am Anfang jeder Blattaufgabe der wichtigste Schritt.

```aufgabe
id: me-mix-kopf-waehlen
titel: Welcher Methodenkopf passt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  „Die Methode prüft, ob ein Text mehr als `n` Zeichen hat, und liefert das Ergebnis zurück.“
  Welcher Methodenkopf passt zu dieser Beschreibung? Du musst nichts programmieren.
teile:
  - typ: auswahl
    optionen:
      - '`public static boolean istLaenger(String text, int n)`'
      - '`public static void istLaenger(String text, int n)`'
      - '`public static int istLaenger(String text)`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: „Liefert das Ergebnis zurück“ verlangt einen Rückgabetyp. `void` liefert nichts.
      - wert: 2
        meldung: Die Methode braucht zwei Angaben, den Text und die Zahl `n`. Außerdem ist das Ergebnis ja oder nein, also `boolean`.
hinweise:
  - Was geht hinein (Parameter), was kommt heraus (Rückgabetyp)? Eine Ja-oder-nein-Antwort hat den Typ `boolean`.
loesung: |
  **Ansatz:** Aus der Beschreibung Parameter und Rückgabetyp ablesen.
  ---
  Hinein gehen ein Text (`String`) und eine Zahl (`int`). Heraus kommt ja oder nein, also `boolean`.
  ---
  Passend ist `public static boolean istLaenger(String text, int n)`.
```

```aufgabe
id: me-mix-void-oder-rueckgabe
titel: Ausgeben oder zurückgeben?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Entscheide für jede Beschreibung, welcher Rückgabetyp passt. Du musst nichts programmieren.

  a) „Die Methode gibt eine Tabelle mit den Zahlen 1 bis `n` und ihren Quadraten auf der Konsole aus.“

  b) „Die Methode berechnet den Durchschnitt zweier ganzer Zahlen als Kommazahl.“

  c) „Die Methode liefert den Text, in dem alle Leerzeichen entfernt sind.“
teile:
  - typ: auswahl
    label: a)
    optionen: ['`void`', '`int`', '`String`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Methode soll etwas **ausgeben**, nicht ein Ergebnis liefern. Ausgaben brauchen keinen Rückgabewert.
      - wert: 2
        meldung: '„Gibt auf der Konsole aus“ heißt `println` in der Methode. Ein Rückgabewert ist nicht verlangt.'
  - typ: auswahl
    label: b)
    optionen: ['`void`', '`int`', '`double`']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Der Durchschnitt von 3 und 4 ist 3,5. Eine Kommazahl braucht den Typ `double`.
      - wert: 0
        meldung: „Berechnet“ ein Ergebnis, das der Aufrufer weiterverwenden will. Es muss zurückgegeben werden.
  - typ: auswahl
    label: c)
    optionen: ['`void`', '`char`', '`String`']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Ein `char` ist ein einzelnes Zeichen. Gefragt ist ein ganzer Text.
      - wert: 0
        meldung: „Liefert“ bedeutet Rückgabewert. `void` liefert nichts.
hinweise:
  - Achte auf die Verben. „Gibt aus“ spricht für `void`, „liefert“ oder „berechnet“ für einen Rückgabetyp.
  - Wähle den Rückgabetyp nach der Art des Ergebnisses. Ganzzahl, Kommazahl, Zeichen oder Text?
loesung: |
  **Ansatz:** Zuerst unterscheiden, ob ausgegeben oder zurückgegeben wird. Dann den Typ des Ergebnisses bestimmen.
  ---
  a) Nur Ausgabe auf der Konsole, also `void`.
  ---
  b) Ergebnis ist eine Kommazahl, also `double`. Achtung: Im Rumpf `(a + b) / 2.0` schreiben, sonst rechnet Java ganzzahlig.
  ---
  c) Ergebnis ist ein Text, also `String`.
```

```aufgabe
id: me-mix-umdrehen
titel: Einen String umdrehen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Einen String rückwärts zu durchlaufen kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      public class Umdrehen {
          public static String umdrehen(String s) {
              String r = "";
              int i = s.length() - 1;
              while (i >= 0) {
                  r = r + s.charAt(i);
                  i--;
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(umdrehen("Lager"));
              System.out.println(umdrehen("") + "|");
              System.out.println(umdrehen(umdrehen("EP1")));
              System.out.println(umdrehen("ab") + umdrehen("cd"));
          }
      }
    loesung: |
      regaL
      |
      EP1
      badc
    fehler:
      - wert: "regaL\n|\n1PE\nbadc"
        meldung: '`umdrehen(umdrehen("EP1"))` dreht zweimal um. Das zweite Umdrehen stellt die ursprüngliche Reihenfolge wieder her.'
      - wert: "regaL\n|\nEP1\ndcba"
        meldung: Jeder String wird einzeln umgedreht, danach werden die Ergebnisse aneinandergehängt. `"ba" + "dc"` ergibt `badc`.
hinweise:
  - Die Schleife beginnt beim letzten Zeichen und läuft bis Position 0.
  - Verschachtelte Aufrufe von innen nach außen auswerten.
loesung: |
  **Ansatz:** Die Methode liefert die Zeichen in umgekehrter Reihenfolge. Jeden Aufruf durch seinen Rückgabewert ersetzen.
  ---
  `umdrehen("Lager")` ist `"regaL"`. Beim leeren String läuft die Schleife nicht, es kommt `""` zurück, also erscheint nur `|`.
  ---
  `umdrehen("EP1")` ist `"1PE"`, nochmal umgedreht `"EP1"`. Zuletzt `"ba" + "dc"`, also `badc`.
```

```aufgabe
id: me-mix-durchschnitt
titel: Durchschnitt mit int und double
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Ganzzahldivision kennst du aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
teile:
  - typ: ausgabe
    code: |
      public class Mittel {
          public static int durchschnitt(int a, int b) {
              return (a + b) / 2;
          }

          public static double mittel(int a, int b) {
              return (a + b) / 2.0;
          }

          public static void main(String[] args) {
              System.out.println(durchschnitt(3, 4));
              System.out.println(mittel(3, 4));
              System.out.println(durchschnitt(7, -2));
              System.out.println(durchschnitt(-7, 2));
          }
      }
    loesung: |
      3
      3.5
      2
      -2
    fehler:
      - wert: "3.5\n3.5\n2.5\n-2.5"
        meldung: '`durchschnitt` hat den Rückgabetyp `int`, und `(a + b) / 2` ist eine Ganzzahldivision. Der Nachkommaanteil fällt weg.'
      - wert: "3\n3.5\n2\n-3"
        meldung: 'Ganzzahldivision rundet in Java **zur Null hin**. `-5 / 2` ergibt `-2`, nicht `-3`.'
hinweise:
  - Bei `int / int` fällt der Nachkommaanteil weg, und zwar Richtung 0. Bei `/ 2.0` rechnet Java mit Kommazahlen.
loesung: |
  **Ansatz:** Für jeden Aufruf den Ausdruck im `return` mit den Regeln für `int` und `double` auswerten.
  ---
  `durchschnitt(3, 4)`: `7 / 2 = 3`. `mittel(3, 4)`: `7 / 2.0 = 3.5`.
  ---
  `durchschnitt(7, -2)`: `5 / 2 = 2`. `durchschnitt(-7, 2)`: `-5 / 2 = -2`, denn Java schneidet zur Null hin ab.
```

```aufgabe
id: me-mix-note
titel: Punkte in eine Note umrechnen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  In EP1 gelten die Notengrenzen 92, 83, 74 und 65 Punkte. Implementiere `int note(int punkte)`:
  ab 92 Punkten Note 1, ab 83 Note 2, ab 74 Note 3, ab 65 Note 4, darunter Note 5.
  Vorbedingung: `0 <= punkte <= 100`. Mehrfachverzweigungen kennst du aus [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
teile:
  - typ: code
    vorlage: |
      public class Note {
          public static int note(int punkte) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(note(85));
          }
      }
    musterloesung: |
      public class Note {
          public static int note(int punkte) {
              if (punkte >= 92) {
                  return 1;
              }
              if (punkte >= 83) {
                  return 2;
              }
              if (punkte >= 74) {
                  return 3;
              }
              if (punkte >= 65) {
                  return 4;
              }
              return 5;
          }

          public static void main(String[] args) {
              System.out.println(note(85));
          }
      }
    tests:
      - { aufruf: "note(100)", erwartet: "1" }
      - { aufruf: "note(92)", erwartet: "1", beschreibung: "Grenze 92 gehört zur 1" }
      - { aufruf: "note(91)", erwartet: "2" }
      - { aufruf: "note(74)", erwartet: "3" }
      - { aufruf: "note(65)", erwartet: "4" }
      - { aufruf: "note(64)", erwartet: "5" }
      - { aufruf: "note(0)", erwartet: "5", versteckt: true }
    fehler:
      - { wert: 2, meldung: "„Ab 92“ schließt 92 ein. Verwende `>=`, nicht `>`." }
      - { wert: 1, meldung: "Prüfe die Reihenfolge der Abfragen. Beginnst du mit der höchsten Grenze, kann jedes `return` sofort antworten." }
hinweise:
  - Prüfe die Grenzen von oben nach unten. Ein `return` beendet die Methode, sobald eine Grenze erreicht ist.
  - 'Am Ende genügt `return 5;`, denn alle höheren Fälle sind dann schon erledigt.'
loesung: |
  **Ansatz:** Mehrere `if` mit `return` von der höchsten Grenze abwärts. Die erste erfüllte Bedingung bestimmt die Note.
  ---
  ```java
  if (punkte >= 92) {
      return 1;
  }
  if (punkte >= 83) {
      return 2;
  }
  if (punkte >= 74) {
      return 3;
  }
  if (punkte >= 65) {
      return 4;
  }
  return 5;
  ```
  ---
  Kontrolle an den Grenzen: 92 liefert 1, 91 liefert 2, 65 liefert 4, 64 liefert 5. Das abschließende `return 5;` sorgt dafür, dass jeder Weg mit `return` endet.
```

```aufgabe
id: me-mix-naechstes
titel: Das nächste Zeichen oder die nächste Zahl
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Das Rechnen mit Zeichen kennst du aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
teile:
  - typ: ausgabe
    code: |
      public class Naechstes {
          public static char naechstes(char c) {
              return (char) (c + 1);
          }

          public static int naechstes(int n) {
              return n + 1;
          }

          public static void main(String[] args) {
              System.out.println(naechstes('a'));
              System.out.println(naechstes('a' + 1));
              System.out.println(naechstes(9));
              System.out.println(naechstes(naechstes('w')));
          }
      }
    loesung: |
      b
      99
      10
      y
    fehler:
      - wert: "b\nc\n10\ny"
        meldung: '`''a'' + 1` ist ein `int` (98). Deshalb wird `naechstes(int)` aufgerufen, und die liefert die Zahl 99.'
hinweise:
  - Bestimme den Typ jedes Arguments, bevor du die Methode wählst. `'a' + 1` ist kein `char` mehr.
loesung: |
  **Ansatz:** Argumenttyp bestimmen, passende Variante wählen, Rückgabewert ausrechnen.
  ---
  `naechstes('a')` wählt die `char`-Variante: `b`. `naechstes('a' + 1)`: Das Argument ist der `int` 98, also die `int`-Variante mit 99.
  ---
  `naechstes(9)` liefert 10. `naechstes(naechstes('w'))` geht zweimal weiter: `x`, dann `y`.
```

```aufgabe
id: me-mix-schachbrett
titel: Ein Schachbrett auf der Konsole
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Implementiere `void druckeSchachbrett(int n)`. Die Methode gibt ein Feld aus `n` Zeilen und `n` Spalten
  aus. Links oben steht `#`, danach wechseln sich `#` und `.` in jeder Zeile und jeder Spalte ab.
  Ein Schachbrettmuster kennst du aus [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett). Vorbedingung: `n >= 1`.

  Beispiel: `druckeSchachbrett(3)` gibt aus:
  ```
  #.#
  .#.
  #.#
  ```
teile:
  - typ: code
    vorlage: |
      public class Schach {
          public static void druckeSchachbrett(int n) {
              // TODO
          }

          public static void main(String[] args) {
              druckeSchachbrett(3);
          }
      }
    musterloesung: |
      public class Schach {
          public static void druckeSchachbrett(int n) {
              for (int zeile = 0; zeile < n; zeile++) {
                  for (int spalte = 0; spalte < n; spalte++) {
                      if ((zeile + spalte) % 2 == 0) {
                          System.out.print('#');
                      } else {
                          System.out.print('.');
                      }
                  }
                  System.out.println();
              }
          }

          public static void main(String[] args) {
              druckeSchachbrett(3);
          }
      }
    tests:
      - { aufruf: "druckeSchachbrett(3)", stdout: "#.#\n.#.\n#.#\n" }
      - { aufruf: "druckeSchachbrett(1)", stdout: "#\n" }
      - { aufruf: "druckeSchachbrett(4)", stdout: "#.#.\n.#.#\n#.#.\n.#.#\n" }
    fehler:
      - { wert: 3, meldung: "Bei gerader Breite beginnt die zweite Zeile mit `.`. Hängt die Farbe bei dir nur von der Spalte ab? Sie hängt von Zeile und Spalte zusammen ab." }
hinweise:
  - Nummeriere Zeilen und Spalten ab 0. Welche Felder haben ein `#`?
  - 'Ein Feld hat ein `#`, wenn `zeile + spalte` gerade ist.'
loesung: |
  **Ansatz:** Zwei Schleifen über Zeilen und Spalten. Die Summe aus Zeilen- und Spaltennummer entscheidet über das Zeichen.
  ---
  Links oben ist `zeile + spalte = 0`, gerade, also `#`. Ein Schritt nach rechts oder unten macht die Summe ungerade, also `.`.
  ---
  ```java
  for (int zeile = 0; zeile < n; zeile++) {
      for (int spalte = 0; spalte < n; spalte++) {
          if ((zeile + spalte) % 2 == 0) {
              System.out.print('#');
          } else {
              System.out.print('.');
          }
      }
      System.out.println();
  }
  ```
```

```aufgabe
id: me-mix-verfahren-varianten
titel: Wie baust du die zweite Variante?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Du hast `void druckeTabelle(int n)` schon fertig. Jetzt verlangt die Angabe zusätzlich
  `void druckeTabelle()`, die dasselbe für `n = 10` tut. Welches Vorgehen passt am besten? Du musst nichts
  programmieren.
teile:
  - typ: auswahl
    optionen:
      - 'Die neue Methode enthält nur den Aufruf `druckeTabelle(10);`.'
      - 'Den Rumpf von `druckeTabelle(int n)` kopieren und darin `n` durch `10` ersetzen.'
      - 'Die neue Methode anders nennen, zum Beispiel `druckeTabelle10()`, weil zwei Methoden nicht gleich heißen dürfen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das funktioniert, ist aber redundanter Code. Jede spätere Änderung müsste an zwei Stellen gemacht werden.
      - wert: 2
        meldung: Zwei Methoden dürfen gleich heißen, wenn ihre Parameterlisten verschieden sind. Das ist Überladen.
hinweise:
  - Erinnere dich an `flaeche(int seite)`, die einfach `flaeche(seite, seite)` aufruft.
loesung: |
  **Ansatz:** Überladen und die vorhandene Methode wiederverwenden.
  ---
  `druckeTabelle()` und `druckeTabelle(int)` haben verschiedene Signaturen und dürfen nebeneinander stehen.
  ---
  Die neue Variante ruft nur `druckeTabelle(10);` auf. Die Logik steht weiterhin an einer einzigen Stelle.
```

```aufgabe
id: me-mix-vorbedingung-rest
titel: Rest, Länge und negative Zahlen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Welche Vorbedingung stellt sicher, dass `zyklisch` ohne Exception läuft? Den Rest `%` mit negativen
  Zahlen kennst du aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).

  ```java
  public static char zyklisch(String s, int k) {
      return s.charAt(k % s.length());
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - '`s != null && s.length() > 0`'
      - '`s != null && s.length() > 0 && k >= 0`'
      - '`k >= 0`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `s = "Java"`, `k = -1`. In Java ist `-1 % 4` gleich `-1`, und `charAt(-1)` wirft eine Exception.'
      - wert: 2
        meldung: 'Gegenbeispiel: `s = ""`, `k = 2`. Dann ist `s.length()` gleich 0, und `2 % 0` wirft eine `ArithmeticException`.'
hinweise:
  - Hier gibt es drei Gefahren. `s` könnte `null` sein, `s.length()` könnte 0 sein, und der Rest könnte negativ sein.
  - Der Rest `k % n` hat in Java das Vorzeichen von `k`. Für `k < 0` kann er negativ werden.
loesung: |
  **Ansatz:** Jede mögliche Exception einzeln betrachten und für jede Option ein Gegenbeispiel suchen.
  ---
  `s == null` führt zur `NullPointerException`. `s.length() == 0` macht `k % 0`, also `ArithmeticException`. `k < 0` kann einen negativen Rest und damit `charAt` mit negativer Position ergeben.
  ---
  Option 1 lässt `k = -1` zu, Option 3 lässt `s = ""` zu. Nur Option 2 schließt alle drei Gefahren aus.
  ---
  Kontrolle: `zyklisch("Java", 6)` ist `charAt(6 % 4) = charAt(2)`, also `'v'`.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im
Format des TUWEL-Quiz gestellt (Single Choice, also genau eine richtige Antwort, und Richtig/Falsch). Danach folgen zwei Blatt- und
Testaufgaben zum Programmieren, ein Lückentext und zwei Aufgaben für das Feedbackgespräch. Plane die
angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen aufdeckst. Das Quizformat 2026W ist nicht
veröffentlicht. Die Aufgaben folgen den TUWEL-Tests aus dem WS 2021.

```aufgabe
id: me-pruef-quiz-slots
titel: Drei Quizfragen zu Methoden
niveau: 3
punkte: 3
lernziel: 6
kompetenz: anwenden
quelle: TUWEL-Test 1 WS 2021, Fragen 8 bis 10 (Schablone nachgebaut)
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt)

  **a)** Gegeben sind `String p = "A"; String q = "B";` und die Methode

  ```java
  public static String m(String a, String b) {
      System.out.println(b);
      return b + a;
  }
  ```

  Welche Sequenz von Aufrufen erzeugt die Ausgabe `A`, `AB`, `A`, `AA`, `B`, `BA` (je eine Zeile)?
  In den Antworten steht `println` kurz für `System.out.println`.

  **b)** Gegeben ist `public static int f(int a, int b) { return 10 / (a % b); }`. Welche Vorbedingung
  schränkt die Argumente so ein, dass der Aufruf ohne Exception ausgeführt werden kann?

  **c)** Die Methode `zaehleZiffern(String t)` zählt, wie viele Zeichen von `t` zwischen `'0'` und `'9'`
  liegen, und liefert die Anzahl als `ergebnis`. Vorbedingung: `t != null`. Welche Nachbedingung ist korrekt?
teile:
  - typ: auswahl
    label: a)
    optionen:
      - "`println(m(p, q));` `println(m(q, q));` `println(m(q, p));`"
      - "`println(m(q, p));` `println(m(p, p));` `println(m(p, q));`"
      - "`println(m(q, p));` `println(m(q, q));` `println(m(p, q));`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`m(p, q)` gibt zuerst `q` aus, also `B`. Die gesuchte Ausgabe beginnt mit `A`.'
      - wert: 2
        meldung: '`m(q, q)` erzeugt `B` und `BB`. Die Zeilen 3 und 4 der Ausgabe sind aber `A` und `AA`.'
  - typ: auswahl
    label: b)
    optionen: ['`b != 0`', '`a > b`', '`b != 0 && a % b != 0`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Gegenbeispiel: `a = 4`, `b = 2`. Dann ist `4 % 2 = 0`, und `10 / 0` wirft eine Exception.'
      - wert: 1
        meldung: 'Gegenbeispiel: `a = 4`, `b = 2`. `a > b` ist erfüllt, aber `a % b` ist 0.'
  - typ: auswahl
    label: c)
    optionen: ['`ergebnis <= t.length()`', '`ergebnis < t.length()`', '`ergebnis > 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel: `t = "123"`. Alle drei Zeichen sind Ziffern, `ergebnis = 3`, und `3 < 3` ist falsch.'
      - wert: 2
        meldung: 'Gegenbeispiel: `t = "abc"` enthält keine Ziffer. Dann ist `ergebnis = 0`.'
hinweise:
  - 'a) Jeder Aufruf erzeugt zwei Zeilen: zuerst das zweite Argument, dann zweites plus erstes Argument.'
  - 'b) Es gibt zwei Gefahren: `a % b` mit `b == 0` und die Division durch `a % b == 0`. c) Teste die Randfälle `"abc"` und `"123"`.'
loesung: |
  **Ansatz:** a) Ausgabe in Zweierblöcke teilen. b) und c) mit Gegenbeispielen arbeiten.
  ---
  a) `println(m(u, v))` gibt `v` und dann `v + u` aus. Blöcke `A AB`, `A AA`, `B BA` gehören zu `m(q, p)`, `m(p, p)`, `m(p, q)`. Antwort: zweite Option.
  ---
  b) `a % b` wirft bei `b == 0`, und die Division wirft bei `a % b == 0`. Nur `b != 0 && a % b != 0` schließt beides aus.
  ---
  c) Es können nie mehr Ziffern gezählt werden, als `t` Zeichen hat. Also gilt `ergebnis <= t.length()` immer, Option 1 ist korrekt. Die anderen widerlegen `"123"` und `"abc"`.
```

```aufgabe
id: me-pruef-rf-programm
titel: Vier Aussagen zu einem Programm
niveau: 3
punkte: 2
lernziel: 5
kompetenz: anwenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist dieses Programm:

  ```java
  public class Mix {
      static int z = 0;

      public static int f(int x) {
          z++;
          return x * 2;
      }

      public static double f(double x) {
          z += 10;
          return x / 2;
      }

      public static void main(String[] args) {
          int a = 3;
          double d = f(a);
          System.out.println(d + " " + z);
          System.out.println(f(f(1.0)) + " " + z);
      }
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f(a)` ruft die Variante mit `int`-Parameter auf, obwohl das Ergebnis in einer `double`-Variable gespeichert wird.'
        richtig: true
        erklaerung: Die Auswahl richtet sich nur nach dem Argument `a` vom Typ `int`. Der Rückgabewert 6 wird erst danach in `6.0` umgewandelt.
      - text: Die erste Ausgabezeile lautet `6 1`.
        richtig: false
        erklaerung: '`d` ist ein `double`. Ausgegeben wird `6.0 1`.'
      - text: Am Ende des Programms hat `z` den Wert 21.
        richtig: true
        erklaerung: '`f(int)` erhöht einmal um 1, die zwei Aufrufe von `f(double)` erhöhen je um 10.'
      - text: Die Klasse kompiliert nicht, weil zwei Methoden `f` heißen.
        richtig: false
        erklaerung: Die Signaturen `f(int)` und `f(double)` sind verschieden. Das ist eine zulässige Überladung.
    fehler:
      - wert: [f, f, r, f]
        meldung: Welche Methode Java wählt, hängt nur von den Argumenten ab, nicht davon, wohin das Ergebnis gespeichert wird.
      - wert: [r, r, r, f]
        meldung: Eine `double`-Variable wird immer mit Nachkommastelle ausgegeben, auch wenn der Wert ganzzahlig ist.
hinweise:
  - Bestimme bei jedem Aufruf von `f` den Typ des Arguments und notiere, wie sich `z` ändert.
  - '`f(f(1.0))` ruft zweimal die `double`-Variante auf: erst mit 1.0, dann mit 0.5.'
loesung: |
  **Ansatz:** Für jeden Aufruf die gewählte Variante und die Änderung von `z` notieren.
  ---
  `f(a)` mit `int` ruft `f(int)`: `z = 1`, Rückgabe 6, gespeichert als `6.0`. Erste Zeile `6.0 1`.
  ---
  `f(1.0)` ruft `f(double)`: `z = 11`, Rückgabe 0.5. `f(0.5)`: `z = 21`, Rückgabe 0.25. Zweite Zeile `0.25 21`.
  ---
  Aussagen 1 und 3 sind richtig, 2 und 4 falsch.
```

```aufgabe
id: me-pruef-frame
titel: Text einrahmen in vier Varianten
niveau: 3
punkte: 4
lernziel: 8
kompetenz: anwenden
quelle: Aufgabenblatt 3 SS 2020, Aufgabe 2 (`addTags`, abgewandelt)
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere vier überladene Methoden. Keine Methode darf die Arbeit einer
  anderen wiederholen. Erlaubt sind `charAt`, `length` und `Integer.toString`.

  - `void frame(String text, char tag)`: gibt in einer Zeile `tag` so oft aus, wie `text` lang ist, dann `text`, dann wieder `tag` so oft, wie `text` lang ist. Vorbedingung: `text != null`.
  - `void frame(int number, char tag)`: dasselbe für die Ziffern von `number`. Vorbedingung: `number >= 0`.
  - `void frame(String text, String tags)`: eine Zeile je Zeichen von `tags`. Vorbedingung: beide `!= null`.
  - `void frame(String text)`: verwendet das Zeichen `*`.

  Beispiele: `frame("Uhr", ';')` gibt `;;;Uhr;;;` aus. `frame(205, '#')` gibt `###205###` aus.
  `frame("Hi", "+-")` gibt `++Hi++` und `--Hi--` aus.
teile:
  - typ: code
    vorlage: |
      public class Rahmen3 {
          public static void frame(String text, char tag) {
              // TODO
          }

          public static void frame(int number, char tag) {
              // TODO
          }

          public static void frame(String text, String tags) {
              // TODO
          }

          public static void frame(String text) {
              // TODO
          }

          public static void main(String[] args) {
              frame("Uhr", ';');
              frame(205, '#');
              frame("Hi", "+-");
              frame("Java");
          }
      }
    musterloesung: |
      public class Rahmen3 {
          public static void frame(String text, char tag) {
              String rand = "";
              for (int i = 0; i < text.length(); i++) {
                  rand = rand + tag;
              }
              System.out.println(rand + text + rand);
          }

          public static void frame(int number, char tag) {
              frame(Integer.toString(number), tag);
          }

          public static void frame(String text, String tags) {
              for (int i = 0; i < tags.length(); i++) {
                  frame(text, tags.charAt(i));
              }
          }

          public static void frame(String text) {
              frame(text, '*');
          }

          public static void main(String[] args) {
              frame("Uhr", ';');
              frame(205, '#');
              frame("Hi", "+-");
              frame("Java");
          }
      }
    tests:
      - { aufruf: "frame(\"Uhr\", ';')", stdout: ";;;Uhr;;;\n" }
      - { aufruf: "frame(\"Z\", '!')", stdout: "!Z!\n" }
      - { aufruf: "frame(\"\", 'x')", stdout: "\n", beschreibung: "leerer Text: leere Zeile" }
      - { aufruf: "frame(205, '#')", stdout: "###205###\n" }
      - { aufruf: "frame(\"Hi\", \"+-\")", stdout: "++Hi++\n--Hi--\n" }
      - { aufruf: "frame(\"Java\")", stdout: "****Java****\n" }
      - { aufruf: "frame(\"-ok-\", \":\")", stdout: "::::-ok-::::\n", versteckt: true }
    regeln: { keineHilfsmethoden: true, erlaubteApi: ["String.charAt", "String.length", "Integer.toString"] }
    fehler:
      - { wert: 1, meldung: "Der Rand ist so lang wie der Text. Baue ihn einmal in einer Schleife auf und gib dann `rand + text + rand` aus." }
      - { wert: 4, meldung: "Wandle die Zahl mit `Integer.toString(number)` um und rufe die String-Variante auf." }
      - { wert: 5, meldung: "Für jedes Zeichen von `tags` eine Zeile. Die Schleife läuft über `tags` und ruft die Grundvariante auf." }
      - { wert: "erlaubteApi", meldung: "Erlaubt sind nur `charAt`, `length` und `Integer.toString`, wie auf dem Blatt." }
hinweise:
  - Schreibe zuerst `frame(String, char)` und teste sie mit `"Uhr"` und `""`.
  - Die drei anderen Varianten bestehen nur aus Aufrufen der ersten, eine davon in einer Schleife über `tags`.
loesung: |
  **Ansatz:** Eine Grundvariante, drei Varianten, die umwandeln und aufrufen. Bewertet wird wie auf dem Blatt: Ausgabe korrekt und kein redundanter Code.
  ---
  Grundvariante: Rand mit einer Schleife aufbauen, dann einmal ausgeben.
  ```java
  String rand = "";
  for (int i = 0; i < text.length(); i++) {
      rand = rand + tag;
  }
  System.out.println(rand + text + rand);
  ```
  ---
  `frame(int, char)`: `frame(Integer.toString(number), tag);`. `frame(String, String)`: Schleife über `tags` mit `frame(text, tags.charAt(i));`. `frame(String)`: `frame(text, '*');`.
  ---
  Kontrolle: `frame("Hi", "+-")` ruft die Grundvariante zweimal auf und gibt zwei Zeilen aus. Hinweis zur Quelle: Im Original von 2020 fehlt beim Beispiel mit fünf Tag-Zeichen die fünfte Zeile.
```

```aufgabe
id: me-pruef-toggle
titel: Groß- und Kleinschreibung tauschen
niveau: 3
punkte: 5
lernziel: 7
kompetenz: anwenden
quelle: Format nach Programmiertest (Methodenkopf vorgegeben, eingeschränkte API), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `String toggleCase(String text)`. Die Methode liefert einen
  neuen String, in dem jeder Kleinbuchstabe `a` bis `z` zum passenden Großbuchstaben wird und umgekehrt.
  Alle anderen Zeichen bleiben gleich. Vorbedingung: `text != null`.

  Einschränkungen wie im Test: Methodenkopf nicht ändern, keine Hilfsmethoden, keine Klassenvariablen, von
  `String` nur `charAt` und `length`.

  Beispiel: `toggleCase("Hallo EP1!")` liefert `"hALLO ep1!"`.
teile:
  - typ: code
    vorlage: |
      public class Umschalten {
          public static String toggleCase(String text) {
              return text; // TODO
          }

          public static void main(String[] args) {
              System.out.println(toggleCase("Hallo EP1!"));
          }
      }
    musterloesung: |
      public class Umschalten {
          public static String toggleCase(String text) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  char c = text.charAt(i);
                  if (c >= 'a' && c <= 'z') {
                      ergebnis = ergebnis + (char) (c - 'a' + 'A');
                  } else if (c >= 'A' && c <= 'Z') {
                      ergebnis = ergebnis + (char) (c - 'A' + 'a');
                  } else {
                      ergebnis = ergebnis + c;
                  }
              }
              return ergebnis;
          }

          public static void main(String[] args) {
              System.out.println(toggleCase("Hallo EP1!"));
          }
      }
    tests:
      - { aufruf: "toggleCase(\"Hallo EP1!\")", erwartet: "\"hALLO ep1!\"" }
      - { aufruf: "toggleCase(\"\")", erwartet: "\"\"" }
      - { aufruf: "toggleCase(\"a-Z_9\")", erwartet: "\"A-z_9\"", beschreibung: "Grenzbuchstaben und Sonderzeichen" }
      - { aufruf: "toggleCase(\"@[`{\")", erwartet: "\"@[`{\"", beschreibung: "Zeichen direkt neben den Buchstabenbereichen" }
      - { aufruf: "toggleCase(\"xYz\")", erwartet: "\"XyZ\"", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["String.charAt", "String.length"] }
    fehler:
      - { wert: 1, meldung: "Erscheinen Zahlen statt Buchstaben? `c - 'a' + 'A'` ist ein `int`. Mit dem Cast `(char)` wird daraus wieder ein Zeichen." }
      - { wert: 4, meldung: "Prüfe die Grenzen der Bereiche. `@` und `[` liegen direkt neben `A` und `Z`, `` ` `` und `{` direkt neben `a` und `z`." }
      - { wert: "erlaubteApi", meldung: "Methoden wie `Character.toUpperCase` oder `toLowerCase` sind nicht erlaubt. Rechne mit den Zeichenwerten." }
hinweise:
  - Kleinbuchstaben und Großbuchstaben liegen jeweils lückenlos hintereinander. Der Abstand von `'a'` zu `'A'` ist für alle Buchstaben gleich.
  - '`(char) (c - ''a'' + ''A'')` macht aus einem Kleinbuchstaben `c` den passenden Großbuchstaben. Für die Gegenrichtung tauschst du die Rollen.'
loesung: |
  **Ansatz:** Neuen String Zeichen für Zeichen aufbauen. Für jedes Zeichen drei Fälle: Kleinbuchstabe, Großbuchstabe, sonstiges.
  ---
  Kleinbuchstabe: `c - 'a'` ist seine Nummer im Alphabet (0 bis 25). `'A' +` diese Nummer ist der Großbuchstabe. Der Cast `(char)` ist nötig, weil die Rechnung ein `int` ergibt.
  ---
  ```java
  char c = text.charAt(i);
  if (c >= 'a' && c <= 'z') {
      ergebnis = ergebnis + (char) (c - 'a' + 'A');
  } else if (c >= 'A' && c <= 'Z') {
      ergebnis = ergebnis + (char) (c - 'A' + 'a');
  } else {
      ergebnis = ergebnis + c;
  }
  ```
  ---
  Kontrolle: `"a-Z_9"` wird zu `"A-z_9"`. Ohne Cast entstünde `"65-122_9"`, weil Zahlen angehängt würden.
```

```aufgabe
id: me-pruef-lueckentext-koepfe
titel: Drei Methodenköpfe vervollständigen
niveau: 3
punkte: 3
lernziel: 0
kompetenz: anwenden
quelle: Format nach TUWEL-Test mit Lückentext (Punkteschema „Stand 2024“ laut VoWi), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Ergänze die Typen in den Methodenköpfen so, dass das Programm kompiliert und
  `informatik: 4` ausgibt.
teile:
  - typ: lueckentext
    code: |
      public class Koepfe {
          public static ___ istVokal(___ c) {
              return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
          }

          public static ___ zaehleVokale(___ text) {
              int n = 0;
              for (int i = 0; i < text.length(); i++) {
                  if (istVokal(text.charAt(i))) {
                      n++;
                  }
              }
              return n;
          }

          public static ___ zeigeAnzahl(String text) {
              System.out.println(text + ": " + zaehleVokale(text));
          }

          public static void main(String[] args) {
              zeigeAnzahl("informatik");
          }
      }
    luecken: [["boolean"], ["char", "int"], ["int"], ["String"], ["void"]]
    fehler:
      - wert: ["boolean", "char", "int", "String", "String"]
        meldung: '`zeigeAnzahl` enthält kein `return`. Eine Methode ohne Rückgabewert hat den Rückgabetyp `void`.'
      - wert: ["char", "char", "int", "String", "void"]
        meldung: '`istVokal` liefert das Ergebnis eines Vergleichs mit `||`. Das ist ein Wahrheitswert, also `boolean`.'
hinweise:
  - Lies jeden Rumpf. Was steht hinter `return`? Welchen Typ hat der Wert, mit dem die Methode aufgerufen wird?
  - '`text.charAt(i)` liefert ein `char`. `n` ist ein `int`.'
loesung: |
  **Ansatz:** Rückgabetyp aus dem `return` ablesen, Parametertyp aus dem Aufruf.
  ---
  `istVokal` liefert einen Vergleich, also `boolean`. Aufgerufen wird sie mit `text.charAt(i)`, also Parameter `char` (auch `int` würde kompilieren).
  ---
  `zaehleVokale` liefert `n` (`int`) und bekommt `text` (`String`). `zeigeAnzahl` hat kein `return`, also `void`.
  ---
  Kontrolle: `informatik` enthält i, o, a, i, also 4 Vokale. Ausgabe `informatik: 4`.
```

```aufgabe
id: me-pruef-ausgabe-gesamt
titel: Alles zusammen in einem Programm
niveau: 3
punkte: 3
lernziel: 1
kompetenz: anwenden
quelle: Format nach TUWEL-Quiz „Was gibt das Programm aus?“, Inhalt neu
angabe: (Zeitrichtwert 8 Minuten) Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Gesamt {
          static int zaehler = 0;

          public static int verarbeite(int x) {
              zaehler++;
              x = x * 2;
              System.out.println("v" + x);
              return x + 1;
          }

          public static String verarbeite(String s) {
              zaehler += 10;
              return s + s.length();
          }

          public static void main(String[] args) {
              int x = 3;
              int y = verarbeite(x);
              System.out.println(x + " " + y);
              System.out.println(verarbeite("ab") + verarbeite(y));
              verarbeite(verarbeite(1));
              System.out.println(zaehler);
          }
      }
    loesung: |
      v6
      3 7
      v14
      ab215
      v2
      v6
      14
    fehler:
      - wert: "v6\n6 7\nv14\nab215\nv2\nv6\n14"
        meldung: Call-by-value. `x = x * 2` in der Methode ändert nur den Parameter. Das `x` in `main` bleibt 3.
      - wert: "v6\n3 7\nab2\nv14\n15\nv2\nv6\n14"
        meldung: '`verarbeite("ab") + verarbeite(y)` ist **ein** Ausdruck für **ein** `println`. Zuerst laufen beide Aufrufe (dabei erscheint `v14`), dann wird `ab2` mit `15` verkettet.'
      - wert: "v6\n3 7\nv14\nab215\nv2\nv6\n4"
        meldung: Die String-Variante erhöht `zaehler` um 10, nicht um 1.
hinweise:
  - Notiere bei jedem Aufruf, welche Variante läuft, was sie ausgibt, was sie liefert und wie sich `zaehler` ändert.
  - In `println(A + B)` werden zuerst `A` und `B` ausgewertet, mit allen ihren Ausgaben. Erst dann druckt `println`.
loesung: |
  **Ansatz:** Aufruf für Aufruf eine Tabelle führen: Variante, Ausgabe, Rückgabe, `zaehler`.
  ---
  `verarbeite(3)`: `int`-Variante, Ausgabe `v6`, Rückgabe 7, `zaehler = 1`. `main` gibt `3 7` aus, denn `x` in `main` bleibt 3.
  ---
  `verarbeite("ab")`: String-Variante, keine Ausgabe, Rückgabe `"ab2"`, `zaehler = 11`. `verarbeite(7)`: Ausgabe `v14`, Rückgabe 15, `zaehler = 12`. Dann druckt `println` `ab215`.
  ---
  `verarbeite(verarbeite(1))`: innen Ausgabe `v2`, Rückgabe 3, außen Ausgabe `v6`, Rückgabe 7 (geht verloren). `zaehler = 14`. Zum Schluss `14`.
```

```aufgabe
id: me-pruef-gespraech
titel: Fragen aus dem Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfragen der Aufgabenblätter (Anzahl Parameter, void, mehrere Rückgabewerte, Sichtbarkeit), nachgebaut
angabe: |
  (Zeitrichtwert: 6 Minuten) Beantworte die vier Fragen zur Methode
  `public static void zeigeRechnung(String name, int menge, double preis)` in ganzen Sätzen, so wie
  im Feedbackgespräch.

  1. Wie viele Parameter hat die Methode, und welche Typen haben sie?
  2. Warum ist sie `void`, und was müsste sich ändern, damit sie den Gesamtpreis zurückgibt?
  3. Kann eine Methode den Namen und den Gesamtpreis gleichzeitig zurückgeben?
  4. In `main` gibt es eine Variable `menge`. Ändert `menge = menge + 1;` innerhalb von `zeigeRechnung` diese Variable?
teile:
  - typ: text
    muster: |
      1. Sie hat drei Parameter: `name` vom Typ `String`, `menge` vom Typ `int` und `preis` vom Typ `double`.
      2. `void` heißt, sie liefert nichts zurück. Sie gibt die Rechnung nur auf der Konsole aus. Für einen
         Rückgabewert würde ich den Rückgabetyp auf `double` ändern und am Ende `return menge * preis;` schreiben.
      3. Nein, `return` liefert genau einen Wert. Man könnte zwei Methoden schreiben oder beides in einen
         String packen. Mit Arrays geht es später auch anders, siehe
         [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
      4. Nein. Wegen call-by-value ist der Parameter `menge` eine Kopie. Die Änderung betrifft nur die Kopie,
         die Variable in `main` bleibt unverändert. Außerdem sind die lokalen Variablen von `main` in
         `zeigeRechnung` gar nicht sichtbar.
hinweise:
  - Zähle die Parameter in den runden Klammern. Jeder hat einen Typ und einen Namen.
  - Für Frage 4 denk an call-by-value und an die Sichtbarkeit lokaler Variablen.
loesung: |
  **Ansatz:** Jede Frage mit dem passenden Begriff beantworten: Parameterliste, Rückgabetyp, `return`, call-by-value.
  ---
  1 und 2: drei Parameter `String`, `int`, `double`. `void` heißt keine Rückgabe. Mit Rückgabetyp `double` und `return menge * preis;` gäbe sie den Gesamtpreis zurück.
  ---
  3: Nein, genau ein Rückgabewert.
  ---
  4: Nein, call-by-value. Der Parameter ist eine Kopie, und `main`s Variablen sind in der Methode ohnehin unsichtbar.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Ein Aufruf springt in die Methode, führt sie vollständig aus und kehrt
  direkt hinter die Aufrufstelle zurück. Dabei werden die Argumente als Kopien übergeben (call-by-value).
  (2) Eine Methode liefert mit `return` genau einen Wert. Ausgaben sind Seiteneffekte und erscheinen
  vor der Zeile, die `println` mit dem Rückgabewert druckt. (3) Überladene Methoden unterscheiden sich in
  den Parametertypen. Java wählt die passendste Variante, und gute Varianten rufen einander auf, statt
  Code zu kopieren. Ebenso gute Antworten sind die Regeln zur Sichtbarkeit oder das Prüfen von Vor- und
  Nachbedingungen mit Gegenbeispielen.
```

:::zusammenfassung
1. **Eine Methode** ist ein benannter Codeblock mit Kopf (`public static`, Rückgabetyp, Name, Parameterliste) und Rumpf. Sie läuft nur, wenn sie aufgerufen wird. Nach dem Aufruf geht es direkt hinter der Aufrufstelle weiter.
2. **Parameter** sind lokale Variablen, die beim Aufruf mit den Werten der Argumente belegt werden. Die Zuordnung geht nach der Position. Java übergibt Kopien (call-by-value), deshalb ändert eine Zuweisung an einen Parameter nie die Variable des Aufrufers.
3. **`return`** beendet die Methode sofort und liefert genau einen Wert. Der Aufruf wird im Ausdruck durch diesen Wert ersetzt. Jeder Weg durch eine Methode mit Rückgabetyp muss mit `return` enden. „Liefert“ in einer Angabe heißt `return`, „gibt aus“ heißt `println`.
4. **Seiteneffekte** wie Ausgaben passieren während des Aufrufs. Bei `println(f(...))` erscheinen zuerst die Ausgaben in `f`, dann der Rückgabewert.
5. **Lokale Variablen** sind nur in ihrem Block sichtbar und werden bei jedem Aufruf neu angelegt. Klassenvariablen leben das ganze Programm lang und werden von gleichnamigen lokalen Variablen verdeckt. Im Test sind sie als „globale Variablen“ verboten.
6. **Überladen** heißt gleicher Name, verschiedene Signatur (Name plus Parametertypen). Der Rückgabetyp zählt nicht. Java wählt die genau passende oder die nächstgelegene Variante auf der Leiter `byte → short → int → long → float → double` (und `char → int`). Bei Gleichstand ist der Aufruf mehrdeutig.
7. **Vorbedingungen** muss der Aufrufer einhalten, **Nachbedingungen** garantiert die Methode. Ob eine Vorbedingung jede Exception ausschließt oder eine Nachbedingung immer stimmt, prüfst du mit Gegenbeispielen.
8. **Nach Vorgabe programmieren:** Kopf exakt übernehmen, an Beispielen planen, in `main` mit Randfällen testen. Überladene Varianten rufen eine Grundvariante auf, statt deren Code zu kopieren.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt,
löse die genannte Aufgabe noch einmal.

1. **Aufruf ohne Klammern oder Strichpunkt nach dem Methodenkopf** (`druckeLinie;` oder `void f(); {`). Training: „Drei Fehler im Aufruf und im Kopf“. Zu finden in [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode).
2. **Methoden in der Reihenfolge der Datei statt der Aufrufe ausgeführt.** Training: „Teekochen in Methoden“ und „Drei Methoden, eine Ausgabe“. Zu finden in [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode).
3. **Argumente in falscher Reihenfolge oder mit unpassendem Typ übergeben**, etwa `double` an einen `int`-Parameter. Training: „Welche Aufrufe kompilieren?“. Zu finden in [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).
4. **Erwartet, dass eine Zuweisung an einen Parameter die Variable des Aufrufers ändert.** Training: „Ändert die Methode die Variable?“ und „Der Tausch, der nichts tauscht“. Zu finden in [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).
5. **Ausgegeben statt zurückgegeben oder den Rückgabewert ignoriert.** Training: „Ist t ein Teiler von n?“ und „Zählen mit Nebenwirkung“. Zu finden in [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
6. **`missing return statement`, weil der letzte Fall mit `else if` statt `else` abgefragt wird.** Training: „Drei Fehler rund um return“ und „Warum meckert der Compiler?“. Zu finden in [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
7. **Bei Aufrufsequenzen die Reihenfolge von Ausgabe in der Methode und Rückgabewert vertauscht.** Training: „Welche Aufrufe erzeugen diese Ausgabe?“ und „Welche Implementierung passt zur Ausgabe?“. Zu finden in [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
8. **Erwartet, dass eine lokale Variable über Aufrufe hinweg weiterzählt, oder eine Klassenvariable als Zwischenspeicher benutzt.** Training: „Ein String, der immer neu beginnt“ und „Ohne Klassenvariable rechnen“. Zu finden in [6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen).
9. **Übersehen, dass ein Parameter oder eine lokale Variable eine Klassenvariable verdeckt.** Training: „Parameter, lokale Variable und Klassenvariable“ und „Eine Kasse mit Klassenvariable“. Zu finden in [6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen).
10. **Überladen nur über den Rückgabetyp versucht oder einen mehrdeutigen Aufruf übersehen.** Training: „Konflikte beim Überladen“ und „Welche Paare dürfen nebeneinander stehen?“. Zu finden in [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden).
11. **Bei der Überladungsauflösung `char` und `int` verwechselt**, etwa `'a' + 1` für ein Zeichen gehalten. Training: „Erweitern auf der Leiter“ und „Knifflige Überladungsauflösung“. Zu finden in [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden).
12. **Eine zu schwache Vorbedingung oder eine zu starke Nachbedingung gewählt**, weil nur ein einziges Beispiel probiert wurde. Training: „Zwei Divisionen in zwei Zweigen“ und „Eine korrekte Nachbedingung wählen“. Zu finden in [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
13. **Den vorgegebenen Methodenkopf verändert** (Rückgabetyp, Name, Reihenfolge der Parameter). Training: „Passen die Köpfe zur Angabe?“. Zu finden in [6.7 Methoden nach Vorgabe schreiben](/lernen/ep1/methoden/methoden-nach-vorgabe-schreiben).
14. **Zeichen mit `+=` addiert statt angehängt oder die Schleife in jede Variante kopiert.** Training: „Vier Varianten von addSeparator“ und „Varianten durch Aufrufe ergänzen“. Zu finden in [6.7 Methoden nach Vorgabe schreiben](/lernen/ep1/methoden/methoden-nach-vorgabe-schreiben).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig,
**3** = sicher, auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich
bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Methodenköpfe lesen und schreiben, Methoden passend aufrufen.
2. Den Ablauf von Programmen mit mehreren Methoden verfolgen.
3. Call-by-value erklären.
4. Rückgabe und Seiteneffekt unterscheiden, Aufrufsequenzen bestimmen.
5. Sichtbarkeit und Lebensdauer von Variablen bestimmen.
6. Überladene Methoden erkennen und die aufgerufene Variante bestimmen.
7. Vor- und Nachbedingungen formulieren und mit Gegenbeispielen prüfen.
8. Methoden nach einer Angabe implementieren und in `main` testen.
9. Überladene Varianten ohne doppelten Code schreiben.

## Mündliche Prüfung

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein
**Feedbackgespräch**. Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen typische
Fragen. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf
und vergleiche sie mit den Kernpunkten.

```karten
- id: me-karte-methode
  frage: Was ist eine Methode, und aus welchen Teilen besteht sie?
  antwort: |
    Eine Methode ist ein benannter Codeblock in einer Klasse, den man über seinen Namen aufrufen kann.
    Sie besteht aus dem Kopf und dem Rumpf. Der Kopf enthält die Modifikatoren `public static`, den
    Rückgabetyp, den Namen und in runden Klammern die Parameterliste. Der Rumpf steht in geschweiften
    Klammern und enthält die Anweisungen. Eine Methode läuft nur, wenn sie aufgerufen wird.
  kernpunkte:
    - benannter Codeblock, läuft nur bei Aufruf
    - Kopf mit Rückgabetyp, Name, Parameterliste
    - Rumpf in geschweiften Klammern
- id: me-karte-aufruf
  frage: Was passiert genau bei einem Methodenaufruf?
  antwort: |
    Zuerst werden die Argumente von links nach rechts ausgewertet. Dann werden für die Parameter neue
    Variablen angelegt und mit diesen Werten belegt. Java merkt sich die Aufrufstelle und führt den Rumpf
    aus. Bei `return` oder am Ende des Rumpfs kehrt es genau dorthin zurück, und die lokalen Variablen
    verschwinden. Ruft eine Methode eine weitere auf, merkt sich Java mehrere Rücksprungstellen übereinander.
  kernpunkte:
    - Argumente zuerst auswerten
    - Parameter als neue Variablen mit Kopien
    - Rücksprung direkt hinter die Aufrufstelle
- id: me-karte-parameter
  frage: Was ist der Unterschied zwischen einem formalen Parameter und einem Argument?
  antwort: |
    Der formale Parameter steht im Methodenkopf, zum Beispiel `int laenge`. Er hat einen Typ und einen
    Namen und verhält sich in der Methode wie eine lokale Variable. Das Argument, auch aktueller Parameter
    genannt, ist der Wert beim Aufruf, zum Beispiel die `3` in `druckeLinie(3)`. Beim Aufruf wird der
    formale Parameter mit dem Wert des Arguments an derselben Position belegt.
  kernpunkte:
    - formaler Parameter im Kopf mit Typ und Name
    - Argument ist der Wert beim Aufruf
    - Zuordnung nach Position
- id: me-karte-call-by-value
  frage: Warum ändert `x = x * 2;` in einer Methode die Variable des Aufrufers nicht?
  antwort: |
    Java übergibt Argumente mit call-by-value. Beim Aufruf wird nur der Wert in den Parameter `x` kopiert.
    `x` ist eine eigene lokale Variable der Methode. Die Zuweisung ändert diese Kopie, die am Ende der
    Methode verschwindet. Die Variable im Aufrufer wird nie berührt. Soll das Ergebnis nach außen, gibt man
    es mit `return` zurück und weist es im Aufrufer zu.
  kernpunkte:
    - call-by-value, Kopie des Werts
    - Parameter ist eigene lokale Variable
    - Ergebnis nach außen nur mit return
- id: me-karte-inkrement
  frage: Was ist der Unterschied zwischen `f(i + 1)` und `f(i++)`?
  antwort: |
    `f(i + 1)` übergibt den Wert von `i` plus 1, aber `i` selbst bleibt unverändert. `f(i++)` übergibt den
    **alten** Wert von `i` und erhöht danach `i` um 1. Wenn `i` vorher 3 ist, bekommt die Methode im ersten
    Fall 4 und `i` bleibt 3. Im zweiten Fall bekommt sie 3 und `i` wird 4.
  kernpunkte:
    - i + 1 ändert i nicht
    - i++ übergibt den alten Wert und erhöht danach
    - konkretes Zahlenbeispiel
- id: me-karte-return
  frage: Was bedeutet `void`, und kann eine Methode mehrere Werte zurückgeben?
  antwort: |
    `void` heißt, die Methode liefert keinen Rückgabewert. Sie wirkt nur über Seiteneffekte, zum Beispiel
    Ausgaben. Eine Methode mit Rückgabetyp liefert mit `return` genau einen Wert. `return` beendet die
    Methode sofort. Mehrere Werte gleichzeitig gehen nicht. Man kann mehrere Methoden schreiben, die Werte
    in einen String packen oder später ein Array zurückgeben.
  kernpunkte:
    - void heißt kein Rückgabewert
    - return liefert genau einen Wert und beendet die Methode
    - Ausweg mehrere Methoden oder Array
- id: me-karte-seiteneffekt
  frage: Was ist ein Seiteneffekt, und wie bestimmt man die Ausgabe von `System.out.println(f(a, b))`, wenn `f` selbst etwas ausgibt?
  antwort: |
    Ein Seiteneffekt ist jede von außen sichtbare Wirkung einer Methode außer dem Rückgabewert, zum Beispiel
    eine Ausgabe oder die Änderung einer Klassenvariable. Bei `println(f(a, b))` muss Java zuerst `f`
    ausführen, um den Wert für `println` zu kennen. Also erscheinen zuerst die Ausgaben von `f` und danach
    die Zeile mit dem Rückgabewert. Steht `f(a, b);` allein, erscheinen nur die Ausgaben von `f`.
  kernpunkte:
    - Seiteneffekt ist Wirkung außer dem Rückgabewert
    - zuerst Ausgaben in f, dann println des Rückgabewerts
    - allein stehender Aufruf verwirft den Rückgabewert
- id: me-karte-missing-return
  frage: Warum meldet der Compiler `missing return statement`, obwohl `if (n > 0) return 1; else if (n <= 0) return 0;` alle Fälle abdeckt?
  antwort: |
    Der Compiler wertet die Bedingungen nicht inhaltlich aus. Er sieht nur die möglichen Wege durch den Code.
    Nach dem `else if` gibt es einen Weg, auf dem beide Bedingungen falsch wären, und dort fehlt ein `return`.
    Dass dieser Weg nie vorkommt, weiß nur der Mensch. Die Lösung ist ein `else` ohne Bedingung oder ein
    abschließendes `return`.
  kernpunkte:
    - Compiler prüft Wege, nicht Bedeutung
    - Weg ohne return nach else if
    - else ohne Bedingung als Lösung
- id: me-karte-sichtbarkeit
  frage: Was ist der Unterschied zwischen einer lokalen Variable und einer Klassenvariable?
  antwort: |
    Eine lokale Variable wird in einer Methode deklariert, auch Parameter zählen dazu. Sie ist nur von
    ihrer Deklaration bis zum Ende ihres Blocks sichtbar und wird bei jedem Aufruf neu angelegt. Eine
    Klassenvariable wird mit `static` außerhalb der Methoden deklariert, ist in allen Methoden sichtbar und
    lebt das ganze Programm lang. Eine gleichnamige lokale Variable verdeckt sie.
  kernpunkte:
    - Sichtbarkeit bis Blockende vs ganze Klasse
    - Lebensdauer ein Aufruf vs ganzes Programm
    - lokale Variable verdeckt Klassenvariable
- id: me-karte-global
  frage: Warum sind globale Variablen im Programmiertest und bei Rekursionsaufgaben verboten?
  antwort: |
    Globale Variablen sind Klassenvariablen. Ihr Wert bleibt über Aufrufe hinweg erhalten. Dann hängt das
    Ergebnis einer Methode davon ab, was vorher passiert ist. Testet man die Methode mehrmals hintereinander,
    rechnet der zweite Aufruf mit Resten des ersten. Bei Rekursion (siehe
    [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf)) sollen
    alle Informationen über Parameter und Rückgabewerte laufen. Das macht jede Methode für sich vorhersagbar und prüfbar.
  kernpunkte:
    - globale Variable heißt Klassenvariable
    - Ergebnis hängt von früheren Aufrufen ab
    - Parameter und Rückgabewerte statt Zustand
- id: me-karte-signatur
  frage: Was gehört zur Signatur einer Methode, und was nicht?
  antwort: |
    Zur Signatur gehören der Name und die Liste der Parametertypen in ihrer Reihenfolge. Nicht dazu gehören
    der Rückgabetyp, die Namen der Parameter und die Modifikatoren. `int f(int a)` und `double f(int b)`
    haben also dieselbe Signatur `f(int)` und dürfen nicht nebeneinander stehen.
  kernpunkte:
    - Name und Parametertypen mit Reihenfolge
    - nicht Rückgabetyp und Parameternamen
    - Gegenbeispiel gleiche Signatur
- id: me-karte-aufloesung
  frage: Wie entscheidet Java, welche überladene Methode aufgerufen wird? Nenne einen Fall, in dem es nicht geht.
  antwort: |
    Java nimmt nur Methoden mit passender Anzahl Parameter. Passt eine genau zu den Argumenttypen, wird sie
    gewählt. Sonst darf jedes Argument erweitert werden, entlang `byte → short → int → long → float →
    double` und `char → int`, und Java wählt die nächstgelegene Variante. Gegenbeispiel: Mit `p(int, double)`
    und `p(double, int)` ist `p(1, 2)` mehrdeutig, denn beide brauchen genau eine Erweiterung. Der Compiler
    meldet einen Fehler.
  kernpunkte:
    - genau passend vor Erweiterung
    - nächstgelegene Variante auf der Leiter
    - mehrdeutiger Aufruf als Gegenbeispiel
- id: me-karte-bedingungen
  frage: Was ist eine Vorbedingung, was eine Nachbedingung, und wer ist für welche verantwortlich?
  antwort: |
    Eine Vorbedingung beschreibt, was beim Aufruf über die Parameter gelten muss, zum Beispiel `text != null`.
    Dafür ist der Aufrufer verantwortlich. Eine Nachbedingung beschreibt, was am Ende der Methode gilt, zum
    Beispiel über den Rückgabewert. Dafür ist die Methode verantwortlich, aber nur, wenn die Vorbedingung
    erfüllt war. Auf den Blättern darf man sich auf die Vorbedingungen verlassen und muss sie nicht prüfen.
  kernpunkte:
    - Vorbedingung über Parameter, Aufrufer verantwortlich
    - Nachbedingung über Ergebnis, Methode verantwortlich
    - Nachbedingung gilt nur bei erfüllter Vorbedingung
- id: me-karte-division
  frage: Wie prüfst du im Quiz, ob eine Vorbedingung eine Division durch 0 ausschließt?
  antwort: |
    Ich suche jede Ganzzahldivision und jeden Rest und bestimme, wann der Nenner 0 ist. Dann suche ich für
    jede angebotene Vorbedingung eine Belegung, die sie erfüllt und trotzdem den Nenner 0 macht. Gibt es so
    ein Gegenbeispiel, ist die Option falsch. Dabei hilft Kapitel 2: Nur `int`-Division wirft eine Exception,
    `5.0 / 0` liefert dagegen `Infinity`.
  kernpunkte:
    - Nenner bestimmen, wann er 0 ist
    - Gegenbeispiel zu jeder Option suchen
    - nur int-Division wirft eine Exception
- id: me-karte-vorgabe
  frage: Wie gehst du vor, wenn eine Methode mit vorgegebenem Kopf zu schreiben ist?
  antwort: |
    Ich zerlege die Angabe in Name, Parameter mit Typen, Rückgabetyp, „liefert“ oder „gibt aus“ und
    Vorbedingung. Ich schreibe den Kopf exakt ab und mache ihn mit einem vorläufigen `return` kompilierbar.
    Dann spiele ich ein Beispiel von Hand durch, schreibe den Rumpf und teste in `main` mit allen Beispielen
    der Angabe und mit Randfällen wie dem leeren String.
  kernpunkte:
    - Angabe zerlegen, Kopf exakt übernehmen
    - Beispiel von Hand durchspielen
    - in main mit Beispielen und Randfällen testen
- id: me-karte-redundanz
  frage: Warum soll eine überladene Variante wie `addChar(int, char)` die Grundvariante aufrufen, statt deren Schleife zu kopieren?
  antwort: |
    Dann steht die eigentliche Logik nur an einer Stelle. Die Variante wandelt nur ihre Argumente um, etwa
    mit `Integer.toString(number)`, und ruft die Grundvariante auf. Muss man das Muster ändern, ändert man
    eine Zeile, und alle Varianten sind sofort richtig. Mit Kopien müsste man jede Stelle finden, und eine
    vergessene Stelle ist ein Fehler. Die Blätter verlangen das ausdrücklich.
  kernpunkte:
    - Logik nur an einer Stelle
    - Variante wandelt um und ruft auf
    - Änderung an einer Stelle statt an vielen
- id: me-karte-rekursion
  frage: Welche Begriffe aus diesem Kapitel brauchst du für die Rekursion in Kapitel 10?
  antwort: |
    Eine rekursive Methode ruft sich selbst auf. Jeder Aufruf bekommt eigene Parameter und lokale Variablen,
    genau wie bei jedem anderen Aufruf. Die Rücksprungstellen stapeln sich wie Lesezeichen. Ergebnisse
    laufen über Rückgabewerte zurück, nicht über Klassenvariablen. Dass der Aufruf `addSequence(number, symbol)`
    in der `int`-Variante sich endlos selbst aufrufen würde, zeigt schon, warum eine Rekursion einen
    Basisfall braucht.
  kernpunkte:
    - jeder Aufruf mit eigenen Variablen
    - gestapelte Rücksprungstellen
    - Ergebnis über return, Basisfall nötig
```
