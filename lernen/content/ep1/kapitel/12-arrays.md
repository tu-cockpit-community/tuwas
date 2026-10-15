---
nummer: 12
titel: Arrays und Referenzen
kurz: Viele Werte unter einem Namen. Arrays anlegen, mit Schleifen durchlaufen, Summe, Minimum und Suche programmieren, neue Arrays bauen und verstehen, warum zwei Variablen auf dasselbe Array zeigen können, genau wie Blatt 4 und das Quiz es verlangen.
teil: arrays
stunden: 6
pruefungsgewicht: 3
voraussetzungen: [ausdruecke, schleifen, methoden, codequalitaet]
lernziele:
  - ein Array mit new oder mit einer Initialisierungsliste anlegen und für jedes Element Index, Standardwert und den gültigen Indexbereich angeben
  - ein Array mit for- und while-Schleifen vorwärts, rückwärts und in Schritten durchlaufen, mit Trennzeichen ausgeben und Indexfehler (ArrayIndexOutOfBoundsException) vermeiden
  - den Inhalt eines Arrays nach einer Schleife exakt angeben, auch in einer Tabelle oder als Richtig/Falsch-Aussage im Stil des Quiz
  - Standardalgorithmen auf Arrays schreiben, nämlich Summe, ganzzahligen Mittelwert, Minimum und Maximum, Zählen, Suchen und Häufigkeiten
  - neue Arrays aus bestehenden erzeugen (kopieren, umdrehen, filtern, Elemente einfügen) und die Länge des neuen Arrays vorher berechnen
  - für jede Zuweisung angeben, welche Variablen auf dasselbe Array zeigen, und erklären, was der Vergleich mit == bei Arrays prüft
  - vorhersagen und begründen, ob eine Methode das Array des Aufrufers verändert, und Methoden mit Array-Parameter oder Array-Rückgabe nach Vorgabe schreiben
  - die Zusatzfragen von Blatt 4 (Indextyp, Länge ändern, Kopieren, Vergleich mit ==, void-Methoden) im Feedbackgespräch in ganzen Sätzen beantworten
---

**Worum geht es?** Bisher hatte jede Variable genau einen Wert. Oft hat man aber viele Werte derselben Art: die
Temperaturen eines Monats, die Punkte aller Teilnehmenden, die Würfe eines Würfels. Für jeden Wert eine eigene
Variable anzulegen, wäre mühsam. Außerdem könnte keine Schleife über die Namen `t1`, `t2`, `t3` laufen.

Ein **Array** (deutsch auch **Feld** oder Reihung) löst dieses Problem. Es ist eine Reihe von Speicherplätzen
gleicher Art unter einem gemeinsamen Namen. Die Plätze sind durchnummeriert, und über die Nummer greifst du auf
jeden Platz einzeln zu. Weil die Nummer eine ganz normale Zahl ist, kann sie in einer Variable stehen. Dann
erledigt eine einzige Schleife die Arbeit für alle Plätze.

Ein Bild aus dem Alltag: eine Reihe von Schließfächern am Bahnhof. Alle Fächer sind gleich groß, sie stehen
nebeneinander, und jedes trägt eine Nummer. Wer die Nummer kennt, findet sein Fach sofort. Die Reihe hat eine
feste Anzahl von Fächern. Man kann nicht nachträglich ein Fach anschrauben.

**Was kommt in der Prüfung?** Arrays sind einer der wichtigsten Stoffe in EP1.

- **Aufgabenblatt 4:** In Aufgabe 1 beantwortest du Fragen zu einem fertigen Programm. Warum wirft eine Methode eine
  Exception (einen Programmabbruch mit Fehlermeldung, siehe
  [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen))? Warum verändert eine Methode das Array, obwohl sie scheinbar auf einer Kopie arbeitet? In Aufgabe 2
  legst du Arrays in `main` an, füllst sie und gibst sie aus. In Aufgabe 3 schreibst du Methoden, die Arrays
  erzeugen oder verändern.
- **Quiz:** Im TUWEL-Test 2 (TUWEL ist die Lernplattform der TU Wien) beurteilst du zum Beispiel vier Kommentare
  zum Inhalt eines Arrays nach einer Schleife als richtig oder falsch. Eine andere Frage dort betrifft Zeilen, die ein
  Array anlegen, und was direkt danach mit dem Array möglich ist.
- **Programmiertest:** Zwei der drei Aufgaben arbeiten mit Arrays. Die erste erzeugt ein neues Array, die zweite
  verändert ein bestehendes. Dort sind die Arrays zweidimensional, also Tabellen mit Zeilen und Spalten
  ([14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen)).
  Alle Techniken dieses Kapitels werden dort gebraucht.
- **Feedbackgespräch:** Die Zusatzfragen von Blatt 4 lauten etwa „Wie kann die Länge eines Arrays verändert
  werden?“ oder „Ist es sinnvoll, zwei Arrays mit `==` zu vergleichen?“.

**Wozu brauchst du das später?** Kapitel 13 verbindet Arrays mit Rekursion, beginnend mit
[13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
Kapitel 14 baut Arrays aus Arrays, also Tabellen mit Zeilen und Spalten
([14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen)).
Die Kapitel über Suchen und Sortieren arbeiten ausschließlich auf Arrays, etwa
[18.1 Lineare Suche](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) und
[19.1 Was heißt sortieren?](/lernen/ep1/sortieren/was-heisst-sortieren-vertauschen-und-pruefen).

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Die for-Schleife** aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
  Das ist die wichtigste Voraussetzung, denn fast jede Arbeit mit Arrays ist eine Schleife.
- **Trennzeichen** aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
- **Indizes ab 0** bei Strings aus [2.7 String-Methoden](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
- **Ganzzahldivision** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
- **Parameter als Kopie** aus [6.2 Parameter](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).
- **Exceptions lesen** aus [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht
klappt, wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: ar-ein-for
titel: Wie oft läuft die Schleife?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: ausgabe
    code: |
      int n = 0;
      for (int i = 0; i < 6; i++) {
          n++;
      }
      System.out.println(n);
      int m = 0;
      for (int i = 0; i <= 6; i += 2) {
          m++;
      }
      System.out.println(m);
    loesung: |
      6
      4
    fehler:
      - wert: "7\n4"
        meldung: Die erste Schleife läuft für `i` von 0 bis 5. Bei `i = 6` ist `6 < 6` falsch, dieser Durchlauf findet nicht mehr statt.
      - wert: "6\n3"
        meldung: Die zweite Schleife läuft für 0, 2, 4 und 6. Bei `i = 6` ist `6 <= 6` noch wahr, das sind vier Durchläufe.
hinweise:
  - Schreib die Werte von `i` auf, für die die Bedingung noch wahr ist, und zähle sie.
loesung: |
  Die erste Schleife läuft für `i = 0, 1, 2, 3, 4, 5`. Das sind 6 Durchläufe, also `n = 6`.
  ---
  Die zweite Schleife läuft für `i = 0, 2, 4, 6`, denn `6 <= 6` ist noch wahr. Das sind 4 Durchläufe.
```

```aufgabe
id: ar-ein-charat
titel: Das letzte Zeichen eines Strings
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.7 String-Methoden](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: ausgabe
    code: |
      String s = "Kiste";
      System.out.println(s.length());
      System.out.println(s.charAt(0));
      System.out.println(s.charAt(s.length() - 1));
    loesung: |
      5
      K
      e
    fehler:
      - wert: "5\nK\nt"
        meldung: '`s.length() - 1` ist 4. Der Index 4 ist das fünfte Zeichen, denn gezählt wird ab 0. Das ist das `e`.'
      - wert: "5\ni\ne"
        meldung: Der erste Index ist 0, nicht 1. `charAt(0)` liefert das erste Zeichen `K`.
hinweise:
  - Die Positionen eines Strings der Länge 5 sind 0, 1, 2, 3 und 4.
loesung: |
  `"Kiste"` hat 5 Zeichen. Ihre Positionen (Indizes) sind 0 bis 4.
  ---
  `charAt(0)` ist das `K`. Der letzte Index ist `5 - 1 = 4`, dort steht das `e`.
```

```aufgabe
id: ar-ein-zaunpfahl
titel: Komma nur zwischen den Zahlen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem))
teile:
  - typ: ausgabe
    code: |
      String s = "";
      for (int i = 1; i <= 4; i++) {
          if (i > 1) {
              s = s + ",";
          }
          s = s + (i * 3);
      }
      System.out.println(s);
    loesung: |
      3,6,9,12
    fehler:
      - wert: "3,6,9,12,"
        meldung: Das Komma kommt **vor** jeder Zahl außer der ersten. Nach der letzten Zahl steht deshalb keines.
      - wert: ",3,6,9,12"
        meldung: 'Beim ersten Durchlauf ist `i = 1`, und `1 > 1` ist falsch. Vor der ersten Zahl steht also kein Komma.'
hinweise:
  - Prüfe für jeden Durchlauf zuerst die Bedingung `i > 1` und hänge danach die Zahl an.
loesung: |
  Im ersten Durchlauf ist `i > 1` falsch. Es wird nur `3` angehängt.
  ---
  Ab dem zweiten Durchlauf kommt zuerst ein Komma, dann die Zahl. Ergebnis: `3,6,9,12`.
```

```aufgabe
id: ar-ein-mittel
titel: Ein Durchschnitt mit int
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int summe = 7 + 8 + 10;
      System.out.println(summe / 3);
      System.out.println(summe / 3.0);
      System.out.println(-summe / 3);
    loesung: |
      8
      8.333333333333334
      -8
    fehler:
      - wert: "8.333333333333334\n8.333333333333334\n-8"
        meldung: '`summe / 3` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg, es bleibt 8.'
      - wert: "8\n8.333333333333334\n-9"
        meldung: Die Ganzzahldivision rundet **zur Null hin**, nicht nach unten. Aus -8,33 wird -8.
hinweise:
  - Zwei `int`-Werte ergeben bei `/` wieder einen `int`. Ist ein `double` beteiligt, rechnet Java mit Kommastellen.
loesung: |
  `summe` ist 25. `25 / 3` ist eine Ganzzahldivision mit Ergebnis 8. `25 / 3.0` rechnet mit Kommastellen.
  ---
  `-25 / 3` ist -8,33…, und Java schneidet zur Null hin ab. Das ergibt -8.
```

```aufgabe
id: ar-ein-parameter
titel: Ändert die Methode die Variable?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.2 Parameter](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      public class Wert {
          public static void erhoehe(int x) {
              x = x + 10;
              System.out.println(x);
          }

          public static void main(String[] args) {
              int x = 3;
              erhoehe(x);
              System.out.println(x);
          }
      }
    loesung: |
      13
      3
    fehler:
      - wert: "13\n13"
        meldung: Der Parameter `x` ist eine eigene Variable mit einer Kopie des Werts. Die Zuweisung in `erhoehe` ändert nur diese Kopie, das `x` in `main` bleibt 3.
hinweise:
  - Beim Aufruf wird nur der Wert 3 übergeben, nicht die Variable selbst.
loesung: |
  `erhoehe(3)` legt einen neuen Parameter `x = 3` an, rechnet `x = 13` und gibt 13 aus.
  ---
  Zurück in `main` hat sich dessen `x` nicht verändert. Es wird 3 ausgegeben.
```

```aufgabe
id: ar-ein-exception
titel: Welcher Aufruf bricht ab?
niveau: 1
art: check
angabe: |
  Gegeben ist `String w = "Tor";`. Welcher Ausdruck wirft eine `StringIndexOutOfBoundsException`?
  (Wiederholung: [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen))
teile:
  - typ: auswahl
    optionen: ['`w.charAt(3)`', '`w.charAt(2)`', '`w.charAt(w.length() - 1)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Index 2 ist das dritte Zeichen `r`. Bei einem String der Länge 3 sind die Indizes 0, 1 und 2 erlaubt.
      - wert: 2
        meldung: '`w.length() - 1` ist 2, das ist der letzte erlaubte Index. Dieser Aufruf liefert `r`.'
loesung: |
  `"Tor"` hat die Länge 3. Erlaubt sind die Indizes 0, 1 und 2.
  ---
  `charAt(3)` greift eine Stelle hinter das letzte Zeichen. Java bricht mit `Index 3 out of bounds for length 3` ab.
```

## Was ist ein Array? Anlegen, Index und Länge

```aufgabe
id: ar-an-check-index
titel: Der letzte Index
niveau: 1
art: check
angabe: |
  Bei Strings beginnt die Zählung der Positionen bei 0 (siehe
  [2.7 String-Methoden](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals)). Ein String hat
  die Länge 7. Welchen Index hat sein letztes Zeichen?
teile:
  - typ: zahl
    loesung: "7 - 1"
    fehler:
      - wert: "7"
        meldung: 'Die Zählung beginnt bei 0. Die sieben Positionen sind 0, 1, 2, 3, 4, 5 und 6.'
loesung: |
  Die Positionen sind 0, 1, …, 6. Das sind sieben Stück.
  ---
  Der letzte Index ist immer die Länge minus 1, hier `7 - 1 = 6`.
```

Stell dir vor, du willst die Höchsttemperaturen einer Woche speichern. Mit dem, was du bisher kennst, sähe das so
aus:

```java
int montag = 12;
int dienstag = 15;
int mittwoch = 9;
// ... und so weiter bis sonntag
```

Das geht für sieben Werte gerade noch. Für die 365 Tage eines Jahres geht es nicht mehr. Und selbst bei sieben
Werten ist die Summe mühsam: `montag + dienstag + mittwoch + …`. Eine Schleife hilft nicht, denn sie kann nicht
„der Reihe nach“ über verschiedene Variablennamen laufen.

Die Lösung ist ein **Array**. Statt sieben Variablen gibt es eine einzige Variable, hinter der sieben
nummerierte Plätze stehen. Die Nummer eines Platzes heißt **Index** (Mehrzahl: Indizes). Der Inhalt eines
Platzes heißt **Element**. Die Anzahl der Plätze ist die **Länge** des Arrays.

### Ein Array anlegen

So legst du ein Array für sieben ganze Zahlen an:

```java
int[] temp = new int[7];
```

Wir gehen die Zeile Zeichen für Zeichen durch:

- `int[]` ist der **Typ** der Variable. Die eckigen Klammern `[]` hinter `int` bedeuten „ein Array von `int`-Werten“.
  Gesprochen: „int-Array“.
- `temp` ist der Name der Variable, frei gewählt wie jeder Variablenname.
- `=` weist der Variable etwas zu, wie bei jeder anderen Variable.
- `new` heißt „neu“. Dieses Schlüsselwort erzeugt ein neues Array im Speicher.
- `int[7]` sagt, was erzeugt wird: ein Array mit Platz für genau 7 `int`-Werte.

Das Array sieht danach so aus. Oben stehen die Indizes, unten die Elemente:

```text
Index:     0    1    2    3    4    5    6
         +----+----+----+----+----+----+----+
temp:    |  0 |  0 |  0 |  0 |  0 |  0 |  0 |
         +----+----+----+----+----+----+----+
```

Alle Plätze enthalten zunächst 0. Java füllt ein neues Array automatisch mit einem **Standardwert**, bei `int`
ist das 0. Die Indizes laufen von 0 bis 6, genau wie die Positionen eines Strings der Länge 7.

### Auf ein Element zugreifen

Ein einzelnes Element sprichst du mit dem Namen und dem Index in eckigen Klammern an. `temp[0]` ist das erste
Element, `temp[6]` das letzte. Gesprochen: „temp an der Stelle 0“. Ein solcher Ausdruck verhält sich wie eine
gewöhnliche `int`-Variable. Man kann ihm etwas zuweisen und ihn in Rechnungen verwenden:

```java
temp[0] = 12;                 // Platz 0 bekommt den Wert 12
temp[1] = temp[0] + 3;        // Platz 1 bekommt 12 + 3 = 15
System.out.println(temp[1]);  // gibt 15 aus
```

Die Länge eines Arrays liefert `temp.length`. Achte auf die Schreibweise: Bei Arrays steht `length` **ohne**
runde Klammern. Bei Strings war es die Methode `length()` mit Klammern.

:::beispiel[Eine Woche Temperaturen]
```java
public class Woche {
    public static void main(String[] args) {
        int[] temp = new int[7];
        temp[0] = 12;
        temp[1] = 15;
        temp[2] = 9;
        temp[6] = temp[0] - temp[2];
        System.out.println(temp[1]);
        System.out.println(temp[3]);
        System.out.println(temp[6]);
        System.out.println(temp.length);
    }
}
```

Zeile für Zeile:

1. `int[] temp = new int[7];` erzeugt ein Array mit sieben Plätzen. Alle enthalten 0.
2. Die nächsten drei Zeilen schreiben 12, 15 und 9 auf die Plätze 0, 1 und 2.
3. `temp[6] = temp[0] - temp[2];` liest zuerst die Plätze 0 und 2. Es rechnet `12 - 9 = 3` und schreibt die 3 auf Platz 6.
4. `temp[1]` ist 15. `temp[3]` wurde nie beschrieben und enthält noch den Standardwert 0.
5. `temp[6]` ist 3, und `temp.length` ist 7.

Die Ausgabe ist:

```
15
0
3
7
```

Das Array sieht am Ende so aus: `12, 15, 9, 0, 0, 0, 3`.
:::

```aufgabe
id: ar-an-gefuehrt
titel: Plätze füllen und lesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Was gibt der Code aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      int[] z = new int[5];
      z[1] = 4;
      z[3] = z[1] * 2;
      z[4] = z[3] + z[0];
      System.out.println(z[0] + " " + z[1] + " " + z[2] + " " + z[3] + " " + z[4]);
      System.out.println(z.length);
    loesung: |
      0 4 0 8 8
      5
    fehler:
      - wert: "4 0 8 8 0\n5"
        meldung: '`z[1]` ist der **zweite** Platz, denn gezählt wird ab 0. Der erste Platz `z[0]` wurde nie beschrieben und enthält 0.'
      - wert: "0 4 0 8 8\n4"
        meldung: '`z.length` ist die Anzahl der Plätze, also 5. Der größte Index ist 4, das ist etwas anderes.'
gefuehrt:
  - text: Welchen Wert hat `z[0]` direkt nach `new int[5]`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Ein neues `int`-Array ist mit dem Standardwert 0 gefüllt.
  - text: Welcher Wert steht nach der dritten Zeile in `z[3]`?
    teil: { typ: zahl, loesung: "4 * 2" }
    erklaerung: '`z[1]` ist 4, also `4 * 2 = 8`.'
  - text: Welcher Wert steht danach in `z[4]`?
    teil: { typ: zahl, loesung: "8 + 0" }
    erklaerung: '`z[3] + z[0]` ist `8 + 0 = 8`.'
  - text: Welchen Wert hat `z.length`?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Die Länge ist die Zahl in `new int[5]`, also die Anzahl der Plätze.
hinweise:
  - Zeichne fünf Kästchen mit den Indizes 0 bis 4 und trage jede Zuweisung ein.
loesung: |
  **Ansatz:** Das Array als Kästchenreihe mitschreiben. Am Anfang stehen überall Nullen.
  ---
  `z[1] = 4`, dann `z[3] = 8` und `z[4] = 8 + 0 = 8`. Die Plätze 0 und 2 bleiben 0.
  ---
  Ausgabe der Reihe nach: `0 4 0 8 8`, danach die Länge 5.
```

:::definition[Array, Element, Index, Länge]
Ein **Array** ist eine Reihe von Speicherplätzen, die alle denselben Typ haben und unter einem gemeinsamen Namen
stehen. Jeder Platz heißt **Element**. Die Plätze sind mit ganzen Zahlen durchnummeriert, beginnend bei 0. Diese
Nummer heißt **Index**.

Die **Länge** ist die Anzahl der Plätze. Sie wird beim Erzeugen festgelegt und ändert sich danach nie mehr. Man
liest sie mit `name.length`. Erlaubt sind die Indizes 0 bis `name.length - 1`.
:::

**Beispiel:** `double[] preise = new double[3];` ist ein Array mit drei `double`-Plätzen und den Indizes 0, 1 und 2.

**Kein Beispiel:** Nach `int[] a = new int[3];` ist die Zuweisung `a[0] = 2.5;` nicht erlaubt. Der Wert `2.5` ist
kein `int`, und alle Elemente müssen den Typ des Arrays haben. Der Compiler lehnt die Zeile ab und meldet
`incompatible types: possible lossy conversion from double to int`, auf Deutsch: „Die Umwandlung von `double` nach
`int` könnte Information verlieren.“

### Standardwerte

Ein mit `new` erzeugtes Array ist nie „leer“. Java schreibt in jeden Platz einen Standardwert, abhängig vom Typ:

- `int` und `long`: die Zahl `0`.
- `double`: die Zahl `0.0`.
- `boolean`: der Wert `false`.
- `char`: das Zeichen mit der Nummer 0. Es ist unsichtbar und hat nichts mit der Ziffer `'0'` zu tun.
- `String` und alle anderen Typen, die keine einfachen Zahlen sind: der besondere Wert `null`. Er bedeutet „hier
  ist gar nichts“, also auch kein leerer String.

```aufgabe
id: ar-an-standardwerte
titel: Was steht in einem neuen Array?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach `double[] d = new double[3];` enthält `d[2]` den Wert `0.0`.
        richtig: true
        erklaerung: Der Standardwert für `double` ist `0.0`.
      - text: Nach `String[] s = new String[2];` enthält `s[0]` den leeren String `""`.
        richtig: false
        erklaerung: Der Standardwert für Strings ist `null`, also „gar kein String“. Der leere String `""` ist ein String mit Länge 0.
      - text: Nach `boolean[] b = new boolean[4];` sind alle vier Elemente `false`.
        richtig: true
        erklaerung: Der Standardwert für `boolean` ist `false`.
      - text: Nach `int[] a = new int[5];` gilt `a.length == 4`, weil der größte Index 4 ist.
        richtig: false
        erklaerung: Die Länge ist 5. Der größte Index ist die Länge minus 1, also 4.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`null` und `""` sind verschieden. Ein neues String-Array enthält `null`.'
      - wert: [r, f, r, r]
        meldung: Länge und größter Index unterscheiden sich immer um 1. Die Länge zählt die Plätze.
hinweise:
  - Jeder Typ hat seinen eigenen Standardwert. Für Strings ist es nicht der leere String.
loesung: |
  **Ansatz:** Für jede Zeile den Standardwert des Typs bestimmen.
  ---
  Richtig sind die Aussagen 1 und 3. Bei Strings steht `null` im Array, und die Länge von `new int[5]` ist 5.
```

### Die Initialisierungsliste

Oft kennst du die Werte schon beim Anlegen. Dann schreibst du sie in geschweiften Klammern hin, getrennt durch
Kommas:

```java
int[] tage = {31, 28, 31, 30};
```

Diese Schreibweise heißt **Initialisierungsliste** (initialisieren heißt „mit Anfangswerten belegen“). Java zählt
die Werte und legt ein Array genau dieser Länge an, hier mit der Länge 4. Das `new` steht nicht da, passiert aber
trotzdem.

Die Kurzform mit `{…}` ist nur direkt beim Anlegen der Variable erlaubt. An allen anderen Stellen, etwa bei einer
späteren Zuweisung oder als Argument eines Methodenaufrufs, schreibt man die lange Form mit `new`:

```java
tage = new int[]{30, 31};     // spätere Zuweisung: new int[] mit Werten
```

Bei der langen Form steht keine Länge in den eckigen Klammern. Die Länge ergibt sich wieder aus der Anzahl der
Werte.

:::beispiel[Ein Array aus Strings und Rechnen mit Indizes]
```java
public class Farben {
    public static void main(String[] args) {
        String[] farben = {"rot", "gelb", "blau", "grün"};
        int letzter = farben.length - 1;
        System.out.println(farben[letzter]);
        System.out.println(farben[letzter - 1]);
        farben[0] = farben[2] + farben[1];
        System.out.println(farben[0]);
        int i = 1;
        System.out.println(farben[i + 2].length());
    }
}
```

1. Die Liste hat vier Werte, also ist `farben.length` 4. Die Indizes sind 0 bis 3.
2. `letzter` ist `4 - 1 = 3`. `farben[3]` ist `"grün"`, `farben[2]` ist `"blau"`.
3. `farben[0] = farben[2] + farben[1];` verkettet `"blau"` und `"gelb"` zu `"blaugelb"`. Das überschreibt `"rot"`.
4. Der Index darf ein beliebiger `int`-Ausdruck sein. `i + 2` ist 3, und `farben[3].length()` ist die Länge von `"grün"`, also 4.

Die Ausgabe ist:

```
grün
blau
blaugelb
4
```

Achte in der letzten Zeile auf die beiden Längen. `farben[3]` ist ein String, darum steht `.length()` mit
Klammern. Ein Array hätte `.length` ohne Klammern.
:::

```aufgabe
id: ar-an-ausgabe-tiere
titel: Ein String-Array lesen und ändern
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      String[] tiere = {"Hund", "Katze", "Maus", "Igel", "Uhu"};
      System.out.println(tiere[1]);
      System.out.println(tiere[tiere.length - 2]);
      tiere[0] = tiere[4] + tiere[2];
      System.out.println(tiere[0]);
      System.out.println(tiere.length);
    loesung: |
      Katze
      Igel
      UhuMaus
      5
    fehler:
      - wert: "Hund\nMaus\nUhuMaus\n5"
        meldung: Gezählt wird ab 0. `tiere[1]` ist das **zweite** Element `Katze`, und `tiere[3]` ist `Igel`.
      - wert: "Katze\nIgel\nUhuMaus\n4"
        meldung: '`length` ist die Anzahl der Elemente, hier 5. Der größte Index ist 4.'
      - wert: "Katze\nIgel\nIgelKatze\n5"
        meldung: Index 4 ist `Uhu`, Index 2 ist `Maus`. Zähle beim Index immer ab 0.
hinweise:
  - Schreib die Indizes 0 bis 4 über die fünf Wörter.
loesung: |
  **Ansatz:** Indizes notieren: 0 Hund, 1 Katze, 2 Maus, 3 Igel, 4 Uhu.
  ---
  `tiere[1]` ist `Katze`. `tiere.length - 2` ist 3, also `Igel`.
  ---
  `tiere[0]` wird zu `"Uhu" + "Maus"`, also `UhuMaus`. Die Länge bleibt 5.
```

:::achtung[Der Index gleich der Länge]
Viele schreiben beim letzten Element den Index, der der Länge entspricht:

```java
int[] w = new int[5];
w[5] = 7;      // falsch
```

Der Compiler meldet keinen Fehler, denn er prüft Indizes nicht. Erst beim Ausführen bricht das Programm ab:

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
```

Die Meldung heißt übersetzt: „Index 5 liegt außerhalb der Grenzen bei Länge 5“. Bei der Länge 5 sind nur die
Indizes 0 bis 4 erlaubt. Richtig ist `w[4] = 7;` oder allgemein `w[w.length - 1] = 7;`. Auch negative Indizes wie
`w[-1]` führen zu dieser Exception.
:::

:::achtung[length mit oder ohne Klammern]
Bei Arrays und Strings heißt die Länge gleich, wird aber verschieden geschrieben:

```java
int[] a = {1, 2, 3};
String s = "abc";
int x = a.length();   // falsch: Compilerfehler "cannot find symbol"
int y = s.length;     // falsch: Compilerfehler "cannot find symbol"
```

Richtig ist `a.length` für das Array und `s.length()` für den String. Eine Merkhilfe: Ein String **berechnet** seine
Länge mit einer Methode, darum die Klammern. Ein Array **hat** seine Länge als festen Eintrag.
:::

### Welche Indizes sind erlaubt?

Eine Zusatzfrage von Blatt 4 lautet: „Welchen Datentyp muss der Indexausdruck haben?“ Die Antwort ist `int`. Ein
Index muss eine ganze Zahl sein, denn es gibt keinen Platz 2,5. Erlaubt sind auch kleinere ganzzahlige Typen, die
Java ohne Verlust in einen `int` umwandeln kann. Dazu gehört `char`, denn jedes Zeichen hat eine Nummer (siehe
[2.5 Zeichen sind Zahlen](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)).

Nicht erlaubt sind `long` und `double`, auch wenn der Wert zufällig klein ist. Der Compiler meldet dann
`incompatible types: possible lossy conversion from long to int`. Die Meldung heißt: „Umwandlung von `long` nach
`int` könnte Information verlieren.“ Wer wirklich einen `long` als Index braucht, schreibt einen **Cast** wie `a[(int) k]`.
Ein Cast ist eine ausdrückliche Typumwandlung (siehe
[2.4 Typumwandlung](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast)).

```aufgabe
id: ar-an-zeilen-kompiliert
titel: Welche Zeilen kompilieren nicht?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Markiere **alle Zeilen, die der Compiler ablehnt**. Jede Zeile soll für sich beurteilt werden, mit den
  Variablen aus den Zeilen davor.
teile:
  - typ: zeilen
    code: |
      int[] a = new int[3];
      double[] b = {1, 2.5};
      int[] c = {1, 2.5};
      int n = a.length();
      long k = 2;
      a[k] = 4;
      a['B' - 'A'] = 1;
      a = {7, 8};
    loesung: [3, 4, 6, 8]
    fehler:
      - wert: [3, 4, 8]
        meldung: 'Zeile 6 verwendet einen `long` als Index. Ein Index muss `int` sein, auch wenn der Wert 2 klein ist.'
      - wert: [2, 3, 4, 6, 8]
        meldung: 'Zeile 2 ist erlaubt. Die ganze Zahl 1 wird automatisch zu `1.0`, und `2.5` ist ein `double`.'
      - wert: [3, 4, 6, 7, 8]
        meldung: "Zeile 7 ist erlaubt. `'B' - 'A'` rechnet mit den Nummern der Zeichen und ergibt den `int` 1."
      - wert: [3, 4, 6]
        meldung: 'Die Kurzform `{7, 8}` ist nur beim Anlegen einer Variable erlaubt. Bei einer späteren Zuweisung braucht es `new int[]{7, 8}`.'
hinweise:
  - Prüfe bei jeder Zeile den Typ. Passt der Wert zum Array? Ist der Index ein `int`?
  - Achte auf `length` mit und ohne Klammern und darauf, wo die Kurzform `{…}` erlaubt ist.
loesung: |
  **Ansatz:** Jede Zeile gegen drei Regeln prüfen: gleicher Elementtyp, Index vom Typ `int`, Kurzform nur beim Anlegen.
  ---
  Zeile 3: `2.5` passt nicht in ein `int`-Array. Zeile 4: Bei Arrays heißt es `a.length` ohne Klammern.
  ---
  Zeile 6: `k` ist ein `long` und kein erlaubter Index. Zeile 8: Nach dem Anlegen braucht es `new int[]{7, 8}`.
  ---
  Zeile 2 ist erlaubt, weil `int` automatisch zu `double` wird. Zeile 7 ist erlaubt, weil `'B' - 'A'` der `int` 1 ist.
```

```aufgabe
id: ar-an-groesster-index
titel: Länge und größter Index
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist `int[] werte = new int[2 * 3 + 1];`. Welcher ist der größte Index, den du verwenden darfst?
teile:
  - typ: zahl
    loesung: "2 * 3 + 1 - 1"
    fehler:
      - wert: "7"
        meldung: 7 ist die Länge, also die Anzahl der Plätze. Weil die Zählung bei 0 beginnt, ist der größte Index um 1 kleiner.
      - wert: "8"
        meldung: In den eckigen Klammern steht die Länge `2 * 3 + 1 = 7`. Der größte Index ist die Länge minus 1.
hinweise:
  - Rechne zuerst die Länge aus. Wie viele Indizes ab 0 passen in diese Länge?
loesung: |
  Die Länge ist `2 * 3 + 1 = 7`. Die erlaubten Indizes sind 0 bis 6.
  ---
  Der größte Index ist `7 - 1 = 6`.
```

```aufgabe
id: ar-an-rf-grenzen
titel: Welcher Zugriff geht gut?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Gegeben ist `int[] p = {3, 0, 2};`. Beurteile jede Aussage. Ein Zugriff „wirft eine Exception“, wenn das
  Programm dabei mit `ArrayIndexOutOfBoundsException` abbricht.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`p[p.length]` wirft eine Exception.'
        richtig: true
        erklaerung: '`p.length` ist 3. Erlaubt sind nur die Indizes 0, 1 und 2.'
      - text: '`p[p[1]]` liefert 3.'
        richtig: true
        erklaerung: '`p[1]` ist 0. Also wird `p[0]` gelesen, und das ist 3.'
      - text: '`p[p[0]]` liefert 2.'
        richtig: false
        erklaerung: '`p[0]` ist 3. Der Zugriff `p[3]` liegt hinter dem letzten Platz und wirft eine Exception.'
      - text: '`p[p[2] - 2]` liefert 3.'
        richtig: true
        erklaerung: '`p[2]` ist 2, und `2 - 2 = 0`. `p[0]` ist 3.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Werte verschachtelte Zugriffe von innen nach außen aus. Prüfe danach, ob der äußere Index zwischen 0 und 2 liegt.
      - wert: [f, r, f, r]
        meldung: Der Index `p.length` ist immer einer zu viel. Bei Länge 3 ist 3 kein gültiger Index.
hinweise:
  - Rechne bei `p[p[1]]` zuerst den inneren Ausdruck `p[1]` aus. Das Ergebnis ist der Index für den äußeren Zugriff.
  - Gültig sind nur die Indizes 0, 1 und 2.
loesung: |
  **Ansatz:** Jeden inneren Zugriff zuerst durch seinen Wert ersetzen, dann den äußeren Index prüfen.
  ---
  `p[p.length]` ist `p[3]`, eine Exception. `p[p[1]]` ist `p[0] = 3`. `p[p[2] - 2]` ist `p[0] = 3`.
  ---
  `p[p[0]]` ist `p[3]` und wirft eine Exception. Nur Aussage 3 ist falsch.
```

:::merke[Die Länge eines Arrays ist fest]
Ein Array kann weder wachsen noch schrumpfen. Die Zuweisung `a.length = 10;` lehnt der Compiler ab. Brauchst du
mehr Platz, legst du ein **neues, größeres Array** an und überträgst die Werte. Wie das geht, zeigt
[12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen). Das ist auch
die Antwort auf die Zusatzfrage „Wie kann die Länge eines Arrays verändert werden?“.
:::

```aufgabe
id: ar-an-verschachtelt
titel: Indizes aus dem Array selbst
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus? Das Array wird während des Programms verändert.
teile:
  - typ: ausgabe
    code: |
      int[] f = {2, 0, 3, 1};
      System.out.println(f[f[0]]);
      System.out.println(f[f[f[1]]]);
      f[f[3]] = f[2] + f[3];
      System.out.println(f[0] + " " + f[1] + " " + f[2] + " " + f[3]);
      f[0] = f[f[0] - 1];
      System.out.println(f[0]);
    loesung: |
      3
      3
      2 4 3 1
      4
    fehler:
      - wert: "3\n3\n2 0 3 4\n0"
        meldung: 'Die Zuweisung `f[f[3]] = …` schreibt nicht auf Platz 3. Der Index ist der **Wert** `f[3]`, also 1.'
      - wert: "0\n3\n2 4 3 1\n4"
        meldung: '`f[0]` ist 2. Der äußere Zugriff liest dann `f[2]`, und das ist 3.'
      - wert: "3\n3\n2 4 3 1\n0"
        meldung: 'In `f[1]` steht inzwischen nicht mehr 0. Die Zuweisung davor hat dort die 4 hineingeschrieben. Rechne immer mit dem **aktuellen** Inhalt.'
hinweise:
  - Schreib das Array als Kästchenreihe auf und ändere sie bei jeder Zuweisung.
  - Bei `f[f[3]] = …` rechnest du zuerst den Index `f[3]` aus, dann die rechte Seite.
loesung: |
  **Ansatz:** Verschachtelte Zugriffe von innen nach außen auswerten und das Array nach jeder Zuweisung aktualisieren.
  ---
  `f[f[0]]` ist `f[2] = 3`. Bei `f[f[f[1]]]` ist `f[1] = 0`, dann `f[0] = 2`, dann `f[2] = 3`.
  ---
  `f[3]` ist 1, also wird Platz 1 beschrieben. Der neue Wert ist `f[2] + f[3] = 3 + 1 = 4`. Das Array ist jetzt `2 4 3 1`.
  ---
  `f[0] - 1` ist `2 - 1 = 1`. `f[1]` ist inzwischen 4, damit wird 4 in `f[0]` geschrieben und ausgegeben.
```

```aufgabe
id: ar-an-text-indextyp
titel: Zusatzfrage zum Indextyp
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfrage 1 zu Aufgabenblatt 4, WS 2023 (umformuliert)
angabe: |
  Im Feedbackgespräch fragt die Tutorin: „Von welchem Typ muss der Ausdruck in den eckigen Klammern sein, wenn du
  auf ein Element eines Arrays zugreifst? Geht auch ein `char` oder ein `long`?“ Antworte in drei bis fünf Sätzen.
teile:
  - typ: text
    muster: |
      Der Index muss vom Typ int sein, denn die Plätze eines Arrays sind mit ganzen Zahlen ab 0 nummeriert.
      Erlaubt sind auch kleinere ganzzahlige Typen wie char, weil Java sie ohne Verlust automatisch in einen int
      umwandelt. Ein char wird dabei zu seiner Nummer, zum Beispiel 'A' zu 65. Ein long oder ein double geht nicht
      direkt, auch wenn der Wert klein ist. Der Compiler meldet dann einen möglichen Informationsverlust, und man
      müsste ausdrücklich mit (int) umwandeln.
hinweise:
  - Welche Zahlen kommen als Platznummer überhaupt in Frage, ganze Zahlen oder Kommazahlen?
  - Welche Typen wandelt Java automatisch in einen `int` um, ohne dass Information verloren gehen kann?
loesung: |
  **Ansatz:** Zuerst den verlangten Typ nennen, dann die beiden Nachfragen zu `char` und `long` beantworten.
  ---
  Der Index ist ein `int`. Ein `char` geht, weil Java ihn automatisch in seine Nummer umwandelt.
  ---
  Ein `long` geht nicht ohne Cast. Die Umwandlung von `long` nach `int` könnte Information verlieren, darum lehnt der Compiler sie ab.
```

```aufgabe
id: ar-an-code-monate
titel: Tage eines Monats nachschlagen
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Implementiere `int tageImMonat(int monat, boolean schaltjahr)`. Die Methode liefert die Anzahl der Tage des
  Monats `monat`. Dabei ist 1 der Jänner und 12 der Dezember. Im Schaltjahr hat der Februar 29 statt 28 Tage.
  Vorbedingung (das garantiert der Aufrufer, siehe
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)): `monat` liegt zwischen 1 und 12.

  Verwende ein Array mit den zwölf Monatslängen statt zwölf `if`-Anweisungen. Die Monate haben der Reihe nach
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 und 31 Tage.
teile:
  - typ: code
    vorlage: |
      public class Kalender {
          public static int tageImMonat(int monat, boolean schaltjahr) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Kalender {
          public static int tageImMonat(int monat, boolean schaltjahr) {
              int[] tage = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
              int ergebnis = tage[monat - 1];
              if (schaltjahr && monat == 2) {
                  ergebnis++;
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "tageImMonat(1, false)", erwartet: "31", beschreibung: "Jänner" }
      - { aufruf: "tageImMonat(2, false)", erwartet: "28", beschreibung: "Februar, kein Schaltjahr" }
      - { aufruf: "tageImMonat(2, true)", erwartet: "29", beschreibung: "Februar im Schaltjahr" }
      - { aufruf: "tageImMonat(12, false)", erwartet: "31", beschreibung: "Dezember, der letzte Monat" }
      - { aufruf: "tageImMonat(11, true)", erwartet: "30", versteckt: true }
      - { aufruf: "tageImMonat(4, false)", erwartet: "30", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Der Jänner ist Monat 1, steht im Array aber auf Index 0. Rechne den Index als `monat - 1`." }
      - { wert: 3, meldung: "Nur der Februar bekommt im Schaltjahr einen Tag dazu. Prüfe beide Bedingungen: `schaltjahr` und `monat == 2`." }
      - { wert: 4, meldung: "Für den Dezember greifst du vermutlich auf Index 12 zu. Das Array hat die Länge 12, erlaubt sind nur 0 bis 11." }
hinweise:
  - Lege in der Methode ein Array mit einer Initialisierungsliste an. Der Wert für Monat 1 steht auf Index 0.
  - Lies `tage[monat - 1]` und zähle im Schaltjahr beim Februar 1 dazu.
loesung: |
  **Ansatz:** Eine Nachschlagetabelle. Das Array speichert die zwölf Längen, der Monat bestimmt den Index.
  ---
  Monat und Index unterscheiden sich um 1, denn der Jänner steht auf Index 0. Also lautet der Zugriff `tage[monat - 1]`.
  ---
  ```java
  int[] tage = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
  int ergebnis = tage[monat - 1];
  if (schaltjahr && monat == 2) {
      ergebnis++;
  }
  return ergebnis;
  ```
  ---
  Probe: `tageImMonat(12, false)` liest `tage[11] = 31`. Mit `tage[monat]` wäre es `tage[12]`, und das Programm bräche ab.
```

```reflexion
frage: Warum ist es sinnvoll, dass der erste Index 0 und nicht 1 ist? Denk an die Frage „Wie weit ist dieser Platz vom Anfang entfernt?“.
antwort: |
  Der Index gibt an, wie viele Plätze man vom Anfang des Arrays weitergehen muss. Das erste Element liegt direkt am
  Anfang, man muss null Plätze weitergehen. Das dritte Element liegt zwei Plätze weiter, also hat es den Index 2.
  Dadurch rechnet der Computer die Lage eines Elements ganz einfach aus: Anfang plus Index mal Platzgröße. Eine
  Folge davon ist, dass der letzte Index immer `length - 1` ist. Genau dort passieren die meisten Fehler.
```

## Arrays mit Schleifen durchlaufen

```aufgabe
id: ar-sl-check-schritt
titel: Eine Schleife in Dreierschritten
niveau: 1
art: check
angabe: |
  Wie oft läuft der Rumpf der Schleife `for (int i = 0; i < 10; i += 3)`? (Wiederholung:
  [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: 'Der Wert 0 zählt mit. Die Werte von `i` sind 0, 3, 6 und 9. Erst bei 12 ist `12 < 10` falsch.'
loesung: |
  `i` nimmt die Werte 0, 3, 6 und 9 an. Alle sind kleiner als 10.
  ---
  Der nächste Wert 12 erfüllt die Bedingung nicht mehr. Der Rumpf läuft also 4-mal.
```

Ein Array entfaltet seine Stärke erst mit einer Schleife. Der Index ist eine gewöhnliche `int`-Zahl, also kann er
in einer Variable stehen. Wenn diese Variable von 0 bis zum letzten Index läuft, kommt jedes Element genau einmal
an die Reihe. Fast jedes Programm mit Arrays enthält deshalb diese eine Zeile:

```java
for (int i = 0; i < a.length; i++) {
    // hier wird a[i] bearbeitet
}
```

Die drei Teile im Kopf der Schleife kennst du aus
[4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen):

- `int i = 0` startet beim ersten Index.
- `i < a.length` ist die Bedingung. Sie ist wahr für 0, 1, …, `a.length - 1`, also genau für die erlaubten Indizes.
  Bei `i == a.length` endet die Schleife, bevor ein ungültiger Zugriff passiert.
- `i++` geht nach jedem Durchlauf einen Platz weiter.

Im Rumpf steht `a[i]` für „das Element, das gerade an der Reihe ist“. Die Schleifenvariable heißt bei Arrays fast
immer `i`, für „Index“.

:::beispiel[Ein Array füllen, verändern und ausgeben]
Ein Array soll die ersten sechs Quadratzahlen 1, 4, 9, … enthalten. Danach sollen alle Werte, die durch 4 teilbar
sind, auf 0 gesetzt werden. Zum Schluss werden die Werte nebeneinander ausgegeben, getrennt durch je ein
Leerzeichen.

```java
public class Quadrate {
    public static void main(String[] args) {
        int[] q = new int[6];
        for (int i = 0; i < q.length; i++) {
            q[i] = (i + 1) * (i + 1);
        }
        for (int i = 0; i < q.length; i++) {
            if (q[i] % 4 == 0) {
                q[i] = 0;
            }
        }
        for (int i = 0; i < q.length; i++) {
            if (i > 0) {
                System.out.print(" ");
            }
            System.out.print(q[i]);
        }
        System.out.println();
    }
}
```

1. **Füllen:** Auf Index `i` soll die Quadratzahl von `i + 1` stehen. Der Index beginnt bei 0, die Zählung der
   Quadratzahlen bei 1. Darum steht dort `(i + 1) * (i + 1)`. Das Array ist danach `1, 4, 9, 16, 25, 36`.
2. **Verändern:** Die zweite Schleife prüft jedes Element. `q[i] % 4 == 0` ist wahr für 4, 16 und 36. Diese
   Plätze bekommen 0. Das Array ist jetzt `1, 0, 9, 0, 25, 0`.
3. **Ausgeben:** Vor jedem Element außer dem ersten steht ein Leerzeichen. Das ist die Trennzeichen-Regel aus
   [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem). Das
   abschließende `println()` beendet die Zeile.

Die Ausgabe ist:

```
1 0 9 0 25 0
```
:::

```aufgabe
id: ar-sl-gefuehrt
titel: Füllen und mit Kommas ausgeben
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: Was gibt der Code aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      int[] v = new int[5];
      for (int i = 0; i < v.length; i++) {
          v[i] = 3 * i + 1;
      }
      String s = "";
      for (int i = 0; i < v.length; i++) {
          if (i > 0) {
              s = s + ",";
          }
          s = s + v[i];
      }
      System.out.println(s);
    loesung: |
      1,4,7,10,13
    fehler:
      - wert: "4,7,10,13,16"
        meldung: 'Der erste Index ist 0. `v[0]` ist `3 * 0 + 1 = 1`, nicht `3 * 1 + 1`.'
      - wert: "1,4,7,10,13,"
        meldung: Das Komma wird **vor** jedes Element außer dem ersten gesetzt. Nach dem letzten Element steht keines.
gefuehrt:
  - text: Welcher Wert steht in `v[0]`?
    teil: { typ: zahl, loesung: "3 * 0 + 1" }
    erklaerung: Beim ersten Durchlauf ist `i = 0`, also `3 * 0 + 1 = 1`.
  - text: Welcher Wert steht in `v[4]`, dem letzten Element?
    teil: { typ: zahl, loesung: "3 * 4 + 1" }
    erklaerung: Das Array hat die Länge 5, der letzte Index ist 4. `3 * 4 + 1 = 13`.
  - text: Wie viele Kommas enthält der fertige String?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Ein Komma steht vor jedem Element außer dem ersten. Bei fünf Elementen sind das vier Kommas.
hinweise:
  - Berechne zuerst alle fünf Elemente, dann baue den String.
loesung: |
  **Ansatz:** Erst das Array füllen, dann den String mit der Trennzeichen-Regel bauen.
  ---
  Für `i = 0` bis 4 ergibt `3 * i + 1` die Werte 1, 4, 7, 10 und 13.
  ---
  Vor jedem Element außer dem ersten steht ein Komma. Ergebnis: `1,4,7,10,13`.
```

### Rückwärts und in Schritten

Eine Schleife muss nicht vorne beginnen. Rückwärts startet sie beim letzten Index `a.length - 1` und läuft, solange
der Index mindestens 0 ist:

```java
for (int i = a.length - 1; i >= 0; i--) {
    // a[i] von hinten nach vorne
}
```

Die Bedingung lautet hier `i >= 0` und nicht `i > 0`. Sonst käme das erste Element `a[0]` nie an die Reihe. Soll
nur jedes zweite Element bearbeitet werden, ersetzt man `i--` durch `i -= 2` (oder vorwärts `i++` durch `i += 2`).

Dieselben Durchläufe kann man auch mit einer `while`-Schleife schreiben. Startwert, Bedingung und Schritt stehen
dann an drei getrennten Stellen. Blatt 4 verlangt genau das: dieselbe Ausgabe einmal mit `for` und einmal mit
`while`.

:::beispiel[Jedes zweite Element von hinten, mit for und while]
Das Array `f` enthält `5, 8, 13, 21, 34, 55, 89`. Gesucht ist jedes zweite Element, beginnend beim letzten,
getrennt durch Bindestriche.

```java
int[] f = {5, 8, 13, 21, 34, 55, 89};

System.out.print("for:   ");
for (int i = f.length - 1; i >= 0; i -= 2) {
    if (i < f.length - 1) {
        System.out.print("-");
    }
    System.out.print(f[i]);
}
System.out.println();

System.out.print("while: ");
int j = f.length - 1;
while (j >= 0) {
    if (j < f.length - 1) {
        System.out.print("-");
    }
    System.out.print(f[j]);
    j -= 2;
}
System.out.println();
```

1. Die Länge ist 7, der letzte Index ist 6. Die Indizes sind der Reihe nach 6, 4, 2 und 0. Beim nächsten Schritt
   wäre der Index -2, und `-2 >= 0` ist falsch.
2. Die Elemente auf diesen Plätzen sind 89, 34, 13 und 5.
3. Das erste ausgegebene Element ist das auf Index 6. Vor allen anderen gilt `i < 6`, dort kommt ein Bindestrich davor.
4. Die `while`-Fassung macht genau dasselbe. Der Startwert steht vor der Schleife, der Schritt `j -= 2` am Ende des Rumpfs.

Die Ausgabe ist:

```
for:   89-34-13-5
while: 89-34-13-5
```

Bei einer geraden Länge wie 6 wären die Indizes 5, 3 und 1. Das Element `f[0]` käme dann nicht vor.
:::

```aufgabe
id: ar-sl-rueckwaerts
titel: Von hinten nach vorne
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] a = {4, 9, 1, 7, 6};
      for (int i = a.length - 1; i > 0; i--) {
          System.out.print(a[i] + " ");
      }
      System.out.println();
      System.out.println(a[0]);
    loesung: |
      6 7 1 9 
      4
    trim: true
    fehler:
      - wert: "6 7 1 9 4\n4"
        meldung: 'Die Bedingung ist `i > 0`, nicht `i >= 0`. Bei `i = 0` endet die Schleife, `a[0]` wird in ihr nicht ausgegeben.'
      - wert: "4 9 1 7\n4"
        meldung: Die Schleife beginnt beim letzten Index 4 und zählt herunter. Das erste ausgegebene Element ist `a[4] = 6`.
hinweise:
  - Schreib die Werte auf, die `i` annimmt. Prüfe bei jedem, ob `i > 0` noch gilt.
loesung: |
  **Ansatz:** Indizes der Schleife bestimmen: Start bei `a.length - 1 = 4`, Ende vor 0.
  ---
  Die Schleife läuft für `i = 4, 3, 2, 1` und gibt 6, 7, 1 und 9 aus. Danach folgt ein Zeilenumbruch.
  ---
  Das `a[0]` wird erst danach ausgegeben, in einer eigenen Zeile: 4.
```

```aufgabe
id: ar-sl-luecke-rueckwaerts
titel: Die rückwärts laufende Schleife ergänzen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Schleife soll **alle** Elemente von `a` ausgeben, beginnend beim letzten. Ergänze die beiden Lücken.
teile:
  - typ: lueckentext
    code: |
      int[] a = {3, 1, 4, 1, 5};
      for (int i = ___; ___; i--) {
          System.out.println(a[i]);
      }
    luecken: [["a.length - 1", "a.length-1", "4"], ["i >= 0", "i > -1", "0 <= i"]]
    fehler:
      - wert: ["a.length", "i >= 0"]
        meldung: '`a.length` ist kein gültiger Index. Der letzte Index ist `a.length - 1`.'
      - wert: ["a.length - 1", "i > 0"]
        meldung: 'Mit `i > 0` wird `a[0]` nie ausgegeben. Die Schleife muss auch für `i = 0` laufen.'
hinweise:
  - Der letzte gültige Index ist um 1 kleiner als die Länge.
loesung: |
  **Ansatz:** Start beim letzten gültigen Index, Ende nach dem ersten Index 0.
  ---
  Start: `a.length - 1`. Bedingung: `i >= 0`, damit auch `a[0]` an die Reihe kommt.
```

```aufgabe
id: ar-sl-while-zweite
titel: Jedes zweite Element mit while
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] w = {6, 2, 8, 4, 9, 1, 5, 3};
      int i = w.length - 1;
      String s = "";
      while (i >= 0) {
          s = s + w[i];
          if (i >= 2) {
              s = s + "/";
          }
          i -= 2;
      }
      System.out.println(s);
    loesung: |
      3/1/4/2
    fehler:
      - wert: "5/9/8/6"
        meldung: 'Die Länge ist 8, der letzte Index also 7. Die Schleife beginnt bei `w[7] = 3`, nicht bei `w[6]`.'
      - wert: "3/1/4/2/"
        meldung: 'Beim letzten Durchlauf ist `i = 1`, und `1 >= 2` ist falsch. Nach dem letzten Element steht kein Schrägstrich.'
hinweise:
  - Bestimme zuerst die Indizes, die `i` annimmt. Start ist `w.length - 1`, der Schritt ist -2.
  - Prüfe bei jedem Index, ob danach noch ein Schrägstrich angehängt wird.
loesung: |
  **Ansatz:** Indizes bestimmen, Elemente ablesen, dann die Trennzeichen-Bedingung prüfen.
  ---
  `w.length` ist 8. `i` nimmt die Werte 7, 5, 3 und 1 an. Bei -1 endet die Schleife.
  ---
  Die Elemente sind `w[7] = 3`, `w[5] = 1`, `w[3] = 4` und `w[1] = 2`.
  ---
  Nach jedem Element mit `i >= 2` kommt ein `/`. Beim letzten (`i = 1`) nicht. Ergebnis: `3/1/4/2`.
```

### Ein Array auf einmal ausgeben: Arrays.toString

Für die schnelle Kontrolle gibt es eine fertige Methode. Sie steht in der Klasse `Arrays`, die zu Java gehört,
aber eingebunden werden muss:

```java
import java.util.Arrays;

int[] a = {3, 1, 4};
System.out.println(Arrays.toString(a));   // gibt [3, 1, 4] aus
```

Die Zeile `import java.util.Arrays;` steht ganz oben in der Datei, vor `public class`. Sie macht die Klasse
`Arrays` aus dem Paket `java.util` bekannt. Ein Paket ist eine Sammlung zusammengehöriger Klassen. Genauso bindest
du den `Scanner` ein (siehe [8.1 Eingabe mit Scanner](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm)).
`Arrays.toString(a)` baut einen String aus eckigen Klammern, den Elementen und je einem Komma mit Leerzeichen
dazwischen. Ein leeres Array ergibt `[]`, ein neues String-Array der Länge 2 ergibt `[null, null]`.

Im Programmiertest sind aus der Klasse `Arrays` ausdrücklich nur `Arrays.toString` und `Arrays.deepToString` erlaubt.
`deepToString` ist die Fassung für Arrays aus Arrays, die du in
[14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen)
kennenlernst. Auf den Aufgabenblättern
ist die Klasse `Arrays` meist gar nicht freigegeben, und verlangt ist eine eigene Ausgabe mit Leerzeichen oder
Doppelpunkten. Dann brauchst du die Schleife.

:::achtung[Das Array direkt mit println ausgeben]
Wer ein `int`-Array einfach an `println` übergibt, sieht nicht den Inhalt:

```java
int[] a = {3, 1, 4};
System.out.println(a);       // gibt etwas wie [I@1b6d3586 aus
```

`[I` ist Javas Kurzname für „Array von `int`“, nach dem `@` folgt eine Kennnummer des Arrays. Diese Nummer kann bei
jedem Programmstart anders sein. Den Inhalt zeigt nur eine Schleife oder `System.out.println(Arrays.toString(a));`.
Eine Ausnahme ist ein `char`-Array: `System.out.println(new char[]{'h', 'i'});` gibt die Zeichen als Wort `hi` aus.
Für `char`-Arrays gibt es nämlich eine eigene Fassung von `println`.
:::

```aufgabe
id: ar-sl-tostring
titel: Was zeigt Arrays.toString?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Was gibt der Code aus? Die Klasse `Arrays` ist eingebunden.
teile:
  - typ: ausgabe
    code: |
      int[] a = {7, -2, 0};
      System.out.println(Arrays.toString(a));
      System.out.println(Arrays.toString(new int[0]));
      System.out.println(Arrays.toString(new boolean[2]));
      String[] s = new String[3];
      s[1] = "ja";
      System.out.println(Arrays.toString(s));
    loesung: |
      [7, -2, 0]
      []
      [false, false]
      [null, ja, null]
    fehler:
      - wert: "[7, -2, 0]\n[]\n[false, false]\n[, ja, ]"
        meldung: Unbeschriebene Plätze eines String-Arrays enthalten `null`, nicht den leeren String. `Arrays.toString` schreibt `null` aus.
      - wert: "7 -2 0\n\nfalse false\nnull ja null"
        meldung: '`Arrays.toString` setzt eckige Klammern um die Elemente und trennt sie mit Komma und Leerzeichen.'
hinweise:
  - Denk an die Standardwerte. Ein neues `boolean`-Array enthält `false`, ein String-Array `null`.
loesung: |
  **Ansatz:** Format von `Arrays.toString`: `[` Elemente mit `, ` getrennt `]`.
  ---
  `new int[0]` hat keine Elemente und ergibt `[]`. `new boolean[2]` enthält zweimal `false`.
  ---
  Im String-Array ist nur Platz 1 beschrieben. Die anderen enthalten `null`.
```

### Die Exception aus Blatt 4: eine Schleife zu weit

In Aufgabe 1 von Blatt 4 wirft eine Methode `printArray` eine Exception. Der Fehler steckt im Kopf der Schleife.
Hier ist eine nachgebaute Fassung mit demselben Fehlerbild.

:::achtung[Kleiner-gleich statt kleiner]
```java
public static void zeige(int[] werte) {
    for (int i = 0; i <= werte.length; i++) {
        System.out.print(werte[i] + " ");
    }
    System.out.println();
}
```

Für `zeige(new int[]{8, 3, 5})` erscheint zuerst `8 3 5 `. Danach bricht das Programm ab:

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
	at Main.zeige(Main.java:4)
```

(Hier steht die Methode direkt unter `public class Main {`. Die Zeile mit `werte[i]` ist darum Zeile 4 der Datei.)

Die Bedingung `i <= werte.length` lässt auch `i = 3` zu. Dann greift `werte[3]` hinter den letzten Platz. Die
Reparatur ist `i < werte.length`. Typisch für diesen Fehler: Alle Elemente werden noch ausgegeben, erst der
Zugriff danach scheitert. Der Stacktrace nennt die Zeile mit dem Zugriff (siehe
[9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen)).
:::

Eine zweite Fassung desselben Fehlers zählt rückwärts und beginnt bei `werte.length`. Dann scheitert schon der
allererste Zugriff, noch bevor irgendetwas ausgegeben wird. Der richtige Start ist `werte.length - 1`.

```aufgabe
id: ar-sl-rf-exception
titel: Welche Schleife greift daneben?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist `int[] d = new int[6];`. Beurteile für jede Schleife die Aussage „Diese Schleife wirft eine
  `ArrayIndexOutOfBoundsException`.“
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`for (int i = 0; i <= d.length; i++) { d[i] = 1; }`'
        richtig: true
        erklaerung: 'Bei `i = 6` gilt `6 <= 6`. Der Zugriff `d[6]` liegt hinter dem letzten Platz 5.'
      - text: '`for (int i = d.length - 1; i >= 0; i--) { d[i] = i; }`'
        richtig: false
        erklaerung: Die Indizes laufen von 5 bis 0. Alle sind gültig.
      - text: '`for (int i = 1; i < d.length; i += 2) { d[i - 1] = d[i]; }`'
        richtig: false
        erklaerung: '`i` ist 1, 3 und 5. Gelesen werden die Plätze 1, 3, 5, geschrieben die Plätze 0, 2, 4. Alle sind gültig.'
      - text: '`for (int i = 0; i < d.length; i++) { d[i + 1] = 0; }`'
        richtig: true
        erklaerung: 'Beim letzten Durchlauf ist `i = 5`. Dann ist `i + 1 = 6` kein gültiger Index.'
    fehler:
      - wert: [r, f, f, f]
        meldung: Prüfe nicht nur die Schleifenvariable, sondern jeden Index im Rumpf. Was ist `i + 1` beim letzten Durchlauf?
      - wert: [r, f, r, r]
        meldung: 'In der dritten Schleife ist `i - 1` beim ersten Durchlauf 0, nicht -1, denn `i` beginnt bei 1.'
hinweise:
  - Bestimme für jede Schleife den kleinsten und den größten Wert von `i`.
  - Setze diese Werte in jeden Index im Rumpf ein, also auch in `i + 1` und `i - 1`. Gültig sind 0 bis 5.
loesung: |
  **Ansatz:** Für jede Schleife die Randwerte von `i` in alle Indexausdrücke einsetzen.
  ---
  Schleife 1 erreicht `i = 6`, Schleife 4 erreicht `i + 1 = 6`. Beide werfen eine Exception.
  ---
  Schleife 2 bleibt zwischen 5 und 0. In Schleife 3 liegen `i` und `i - 1` zwischen 0 und 5. Beide laufen fehlerfrei.
```

### Die erweiterte for-Schleife

In fremdem Code und in den Folien begegnet dir eine Kurzform, die **erweiterte for-Schleife** (englisch
*for-each*, „für jedes“):

```java
int[] a = {3, 1, 4};
int summe = 0;
for (int x : a) {
    summe = summe + x;
}
```

Man liest den Kopf als „für jedes `x` in `a`“. Die Variable `x` bekommt der Reihe nach jedes Element, also 3, dann 1,
dann 4. Es gibt keinen Index. Darum taugt die Kurzform nur zum **Lesen** aller Elemente von vorne nach hinten. Eine
Zuweisung `x = 0;` im Rumpf ändert nur die Variable `x`, nicht das Array. Für Rückwärtslaufen, Schritte,
Nachbarelemente oder Änderungen brauchst du die Schleife mit Index. In diesem Kurs verwenden wir fast immer die
Schleife mit Index, weil man sie für alle Aufgaben braucht.

```aufgabe
id: ar-sl-trace-praefix
titel: Jedes Element addiert seinen Vorgänger
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  int[] a = {2, 5, 1, 3};
  for (int i = 1; i < a.length; i++) {
      a[i] = a[i] + a[i - 1];
  }
  ```

  Trage für jeden Durchlauf den Wert von `i` und den neuen Wert von `a[i]` ein. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [i, "a[i] neu"]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3]
    vorgabe: 1
    loesung: [[1, 7], [2, 8], [3, 11]]
    fehler:
      - wert: ["1", "7", "2", "6", "3", "4"]
        meldung: '`a[i - 1]` ist im zweiten Durchlauf nicht mehr 5. Im ersten Durchlauf wurde `a[1]` schon auf 7 geändert. Rechne mit dem **aktuellen** Inhalt.'
hinweise:
  - Schreib das Array nach jedem Durchlauf neu auf. Der Durchlauf liest den Platz davor, der schon verändert sein kann.
  - Im zweiten Durchlauf ist `a[1]` bereits 7.
loesung: |
  **Ansatz:** Das Array nach jedem Durchlauf aktualisieren und mit dem neuen Inhalt weiterrechnen.
  ---
  `i = 1`: `a[1] = 5 + 2 = 7`. Das Array ist `2, 7, 1, 3`.
  ---
  `i = 2`: `a[2] = 1 + 7 = 8`. `i = 3`: `a[3] = 3 + 8 = 11`. Am Ende ist das Array `2, 7, 8, 11`.
  ---
  Jedes Element ist jetzt die Summe aller Elemente bis zu seinem Platz. Probe: `2 + 5 + 1 + 3 = 11`.
```

```aufgabe
id: ar-sl-code-rueckwaerts
titel: Rückwärts in Schritten ausgeben
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 2 c (umformuliert)
angabe: |
  Implementiere `void druckeRueckwaerts(int[] a, int schritt)`. Die Methode gibt das letzte Element von `a` aus.
  Danach folgt das Element, dessen Index um `schritt` kleiner ist, dann wieder eines mit einem um `schritt`
  kleineren Index und so fort, solange der Index gültig ist. Die Elemente werden durch Doppelpunkte getrennt, am Ende folgt ein Zeilenumbruch.

  Vorbedingung: `a.length >= 1` und `schritt >= 1`.

  Beispiel: Für `a = {4, 7, 1, 9, 3}` und `schritt = 2` lautet die Ausgabe `3:1:4`.
teile:
  - typ: code
    vorlage: |
      public class Rueckwaerts {
          public static void druckeRueckwaerts(int[] a, int schritt) {
              // TODO
          }
      }
    musterloesung: |
      public class Rueckwaerts {
          public static void druckeRueckwaerts(int[] a, int schritt) {
              for (int i = a.length - 1; i >= 0; i -= schritt) {
                  if (i < a.length - 1) {
                      System.out.print(":");
                  }
                  System.out.print(a[i]);
              }
              System.out.println();
          }
      }
    tests:
      - { aufruf: "druckeRueckwaerts(new int[]{4, 7, 1, 9, 3}, 2)", stdout: "3:1:4\n" }
      - { aufruf: "druckeRueckwaerts(new int[]{4, 7, 1, 9, 3}, 1)", stdout: "3:9:1:7:4\n", beschreibung: "Schritt 1: alles rückwärts" }
      - { aufruf: "druckeRueckwaerts(new int[]{6}, 3)", stdout: "6\n", beschreibung: "nur ein Element" }
      - { aufruf: "druckeRueckwaerts(new int[]{5, 5, 8}, 5)", stdout: "8\n", beschreibung: "Schritt größer als das Array" }
      - { aufruf: "druckeRueckwaerts(new int[]{2, 4, 6, 8, 10, 12, 14}, 3)", stdout: "14:8:2\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Prüfe Start und Trennzeichen. Das erste ausgegebene Element ist das letzte des Arrays, und vor ihm steht kein Doppelpunkt." }
      - { wert: 2, meldung: "Bei Schritt 1 muss auch `a[0]` erscheinen. Die Bedingung muss `i >= 0` lauten, nicht `i > 0`." }
      - { wert: 3, meldung: "Bei nur einem Element gibt es keinen Doppelpunkt. Hängst du das Trennzeichen nach jedem Element an?" }
hinweise:
  - Die Schleife beginnt bei `a.length - 1` und zählt mit `i -= schritt` herunter, solange `i >= 0` gilt.
  - Vor jedem Element außer dem ersten ausgegebenen steht ein Doppelpunkt. Das erste ausgegebene hat den Index `a.length - 1`.
loesung: |
  **Ansatz:** Eine rückwärts laufende Schleife mit variabler Schrittweite und der Trennzeichen-Regel „vor jedem außer dem ersten“.
  ---
  Kopf: `for (int i = a.length - 1; i >= 0; i -= schritt)`. Die Bedingung `i >= 0` lässt auch Index 0 zu.
  ---
  ```java
  for (int i = a.length - 1; i >= 0; i -= schritt) {
      if (i < a.length - 1) {
          System.out.print(":");
      }
      System.out.print(a[i]);
  }
  System.out.println();
  ```
  ---
  Probe mit `{4, 7, 1, 9, 3}` und Schritt 2: Indizes 4, 2, 0, also `3:1:4`. Der nächste Index -2 beendet die Schleife.
```

```aufgabe
id: ar-sl-quiz-inhalt
titel: Kommentare zum Inhalt eines Arrays beurteilen
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Inhalt eines Arrays nach einer Schleife), Inhalt neu
angabe: |
  Jedes Codestück beginnt mit `int[] data = new int[n];`. Der Kommentar soll den Inhalt von `data` danach
  beschreiben. Beurteile, ob der Kommentar **für jedes** `n` mit `1 < n < 1000` stimmt.

  ```java
  // (1)
  for (int i = 0; i < n; i++) { data[i] = n - i; }
  // data[0] ist n und data[n - 1] ist 1

  // (2)
  for (int i = 1; i < n; i++) { data[i] = data[i - 1] + 2; }
  // alle Elemente von data sind gerade Zahlen

  // (3)
  for (int i = n - 1; i > 0; i--) { data[i] = i * i; }
  // jedes Element von data ist eine Quadratzahl größer als 0

  // (4)
  for (int i = 0; i < n; i += 2) { data[i] = 1; }
  // genau die Hälfte der Elemente von data hat den Wert 1
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Kommentar (1) stimmt.
        richtig: true
        erklaerung: 'Für `i = 0` ist `data[0] = n`. Für `i = n - 1` ist `data[n - 1] = n - (n - 1) = 1`.'
      - text: Kommentar (2) stimmt.
        richtig: true
        erklaerung: '`data[0]` behält den Standardwert 0. Jedes weitere Element ist um 2 größer als sein Vorgänger: 0, 2, 4, … Alle sind gerade.'
      - text: Kommentar (3) stimmt.
        richtig: false
        erklaerung: 'Die Schleife endet vor `i = 0`. `data[0]` behält den Standardwert 0, und 0 ist nicht größer als 0.'
      - text: Kommentar (4) stimmt.
        richtig: false
        erklaerung: 'Bei ungeradem `n`, etwa `n = 3`, werden die Plätze 0 und 2 beschrieben. Das sind 2 von 3 Elementen, nicht die Hälfte.'
    fehler:
      - wert: [r, f, f, f]
        meldung: 'Auch `data[0]` gehört zum Array. Bei (2) wird es nicht beschrieben und behält 0. Ist 0 eine gerade Zahl?'
      - wert: [r, r, r, f]
        meldung: Prüfe bei (3), ob die Schleife auch den Platz 0 erreicht. Was steht dort, wenn er nie beschrieben wird?
      - wert: [r, r, f, r]
        meldung: 'Der Kommentar muss für **jedes** erlaubte `n` stimmen. Probiere bei (4) ein ungerades `n` wie 3 oder 5.'
hinweise:
  - Probiere jedes Codestück mit einem kleinen `n` aus, etwa 3 und 4. Schreib das ganze Array auf, auch die nie beschriebenen Plätze.
  - Nie beschriebene Plätze behalten den Standardwert 0. Ein einziges Gegenbeispiel genügt, damit ein Kommentar falsch ist.
loesung: |
  **Ansatz:** Für kleine `n` das ganze Array aufschreiben und besonders auf `data[0]`, `data[n - 1]` und gerade oder ungerade `n` achten.
  ---
  (1) Für `n = 4` entsteht `4, 3, 2, 1`. Allgemein ist `data[0] = n` und `data[n - 1] = 1`. Richtig.
  ---
  (2) Für `n = 4` entsteht `0, 2, 4, 6`. Die 0 auf Platz 0 ist auch gerade. Richtig.
  ---
  (3) Für `n = 4` entsteht `0, 1, 4, 9`. Platz 0 behält die 0. Falsch. (4) Für `n = 3` entsteht `1, 0, 1`, also zwei Einsen von drei. Falsch.
```

```reflexion
frage: Warum lautet die Bedingung der Standardschleife `i < a.length` und nicht `i <= a.length`? Erkläre es mit den Indizes eines Arrays der Länge 3.
antwort: |
  Ein Array der Länge 3 hat die Indizes 0, 1 und 2. Die Schleife soll genau für diese drei Werte laufen. Mit
  `i < 3` ist die Bedingung für 0, 1 und 2 wahr und für 3 falsch, die Schleife endet also rechtzeitig. Mit
  `i <= 3` liefe sie auch für `i = 3`, und der Zugriff `a[3]` würde eine `ArrayIndexOutOfBoundsException`
  auslösen. Allgemein: Die Länge ist immer der erste Index, der nicht mehr zum Array gehört.
```

## Typische Algorithmen: Summe, Minimum, Zählen und Suchen

```aufgabe
id: ar-alg-check-akku
titel: Eine Summe mit Bedingung
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.3 Akkumulieren](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings))
teile:
  - typ: ausgabe
    code: |
      int summe = 0;
      for (int i = 1; i <= 6; i++) {
          if (i % 2 == 1) {
              summe = summe + i;
          }
      }
      System.out.println(summe);
    loesung: |
      9
    fehler:
      - wert: "21"
        meldung: Addiert werden nur die `i` mit `i % 2 == 1`, also die ungeraden Zahlen 1, 3 und 5.
      - wert: "12"
        meldung: '`i % 2 == 1` ist für die **ungeraden** Zahlen wahr. 2, 4 und 6 gehören nicht dazu.'
hinweise:
  - Prüfe für jedes `i` von 1 bis 6, ob der Rest bei Division durch 2 gleich 1 ist.
loesung: |
  Die Bedingung gilt für 1, 3 und 5. Nur diese werden zu `summe` addiert.
  ---
  `1 + 3 + 5 = 9`.
```

Ein **Algorithmus** ist ein genaues Rezept: eine Folge von Schritten, die zu jeder erlaubten Eingabe das richtige
Ergebnis liefert. Für Arrays gibt es eine Handvoll Algorithmen, die immer wieder vorkommen. Fast jede größere
Aufgabe setzt sich aus ihnen zusammen. Auf Blatt 4 brauchst du zum Beispiel Mittelwert, Minimum und Maximum in
einer einzigen Methode.

Die meisten dieser Algorithmen folgen dem Muster des **Akkumulators** aus
[4.3 Akkumulieren](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings). Akkumulieren heißt
„anhäufen“. Eine Variable sammelt beim Durchlaufen ein Zwischenergebnis, und jeder Durchlauf verarbeitet ein
weiteres Element. Entscheidend sind zwei Fragen: Mit welchem Wert beginnt die Variable? Was passiert mit ihr in
jedem Durchlauf?

### Summe und Mittelwert

Für die Summe beginnt die Variable bei 0, und jedes Element wird dazugezählt. Der **Mittelwert** (Durchschnitt)
ist die Summe geteilt durch die Anzahl der Elemente. Die Anzahl ist die Länge des Arrays.

:::beispiel[Schritte einer Woche]
Ein Schrittzähler hat an sieben Tagen 8200, 10450, 6300, 12000, 9100, 4800 und 7604 Schritte gemessen.

```java
int[] schritte = {8200, 10450, 6300, 12000, 9100, 4800, 7604};
int summe = 0;
for (int i = 0; i < schritte.length; i++) {
    summe = summe + schritte[i];
}
int mittel = summe / schritte.length;
double genau = (double) summe / schritte.length;
System.out.println(summe);
System.out.println(mittel);
System.out.println(genau);
```

1. `summe` beginnt bei 0. Nach den sieben Durchläufen enthält sie `8200 + 10450 + … + 7604 = 58454`.
2. `summe / schritte.length` teilt zwei `int`-Werte. Der genaue Wert wäre 8350,57…, der Nachkommaanteil fällt weg.
   Das Ergebnis ist 8350. Blatt 4 verlangt genau diesen ganzzahligen Mittelwert („Nachkommaanteil abschneiden“).
3. `(double) summe` wandelt die Summe vor der Division in einen `double` um. Dieser **Cast** kommt aus
   [2.4 Typumwandlung](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast). Jetzt rechnet Java mit
   Kommastellen.

Die Ausgabe ist:

```
58454
8350
8350.57142857143
```
:::

```aufgabe
id: ar-alg-gefuehrt
titel: Positive Summe und negative Anzahl
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Programm addiert alle positiven Werte und zählt alle negativen Werte. Was gibt es aus? Löse die Aufgabe
  zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      int[] p = {4, -2, 7, 0, -5, 3};
      int summe = 0;
      int negativ = 0;
      for (int i = 0; i < p.length; i++) {
          if (p[i] > 0) {
              summe = summe + p[i];
          } else if (p[i] < 0) {
              negativ++;
          }
      }
      System.out.println(summe + " " + negativ);
    loesung: |
      14 2
    fehler:
      - wert: "7 2"
        meldung: 'Addiert werden **alle** positiven Werte, also 4, 7 und 3.'
      - wert: "14 3"
        meldung: Die 0 ist weder positiv noch negativ. Für sie gilt keine der beiden Bedingungen, sie wird nicht gezählt.
gefuehrt:
  - text: Welche Werte erfüllen `p[i] > 0`? Gib ihre Summe ein.
    teil: { typ: zahl, loesung: "4 + 7 + 3" }
    erklaerung: Positiv sind 4, 7 und 3. Ihre Summe ist 14.
  - text: Wie viele Werte erfüllen `p[i] < 0`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Negativ sind -2 und -5.
  - text: Was passiert mit dem Wert 0?
    teil:
      typ: auswahl
      optionen: ['Er wird übersprungen.', 'Er zählt als negativ.', 'Er wird zur Summe addiert.']
      richtig: [0]
    erklaerung: '`0 > 0` und `0 < 0` sind beide falsch. Keiner der beiden Zweige läuft.'
hinweise:
  - Geh das Array Element für Element durch und entscheide jeweils, welcher Zweig läuft.
loesung: |
  **Ansatz:** Zwei Akkumulatoren: `summe` für die positiven Werte, `negativ` als Zähler.
  ---
  Positiv: `4 + 7 + 3 = 14`. Negativ: -2 und -5, also 2 Werte. Die 0 fällt durch beide Bedingungen.
```

```aufgabe
id: ar-alg-mittelwert
titel: Drei Arten zu teilen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] w = {7, 4, 9, 5};
      int s = 0;
      for (int i = 0; i < w.length; i++) {
          s = s + w[i];
      }
      System.out.println(s / w.length);
      System.out.println((double) s / w.length);
      double m = s / w.length;
      System.out.println(m);
    loesung: |
      6
      6.25
      6.0
    fehler:
      - wert: "6.25\n6.25\n6.25"
        meldung: '`s / w.length` teilt zwei `int`-Werte. Das Ergebnis ist der `int` 6, der Nachkommaanteil ist weg.'
      - wert: "6\n6.25\n6.25"
        meldung: 'In der dritten Rechnung passiert die Division zuerst, und zwar mit zwei `int`-Werten. Erst das Ergebnis 6 wird in `double` umgewandelt.'
hinweise:
  - Die Summe ist 25. Entscheidend ist bei jeder Division, ob ein `double` beteiligt ist, **bevor** geteilt wird.
loesung: |
  **Ansatz:** Summe 25, Länge 4. Bei jeder Division prüfen, welche Typen beteiligt sind.
  ---
  `25 / 4` ist eine Ganzzahldivision: 6. `(double) 25 / 4` rechnet mit Kommastellen: 6,25.
  ---
  `double m = 25 / 4;` teilt zuerst ganzzahlig zu 6 und wandelt dann in `6.0` um.
```

:::achtung[Der Mittelwert wird zu früh abgeschnitten]
Gesucht ist der genaue Mittelwert von `{3, 4, 6, 8}`. Viele schreiben

```java
double mittel = summe / werte.length;   // falsch: ergibt 5.0
```

Die Summe ist 21, die Länge 4. Java rechnet zuerst `21 / 4` mit zwei `int`-Werten und erhält 5. Erst danach wird
die 5 in `5.0` umgewandelt. Der Typ der Variable links hat auf die Rechnung rechts keinen Einfluss. Richtig ist
`(double) summe / werte.length`. Das ergibt 5,25. Wenn eine Aufgabe ausdrücklich den ganzzahligen Mittelwert
verlangt, ist `summe / werte.length` dagegen genau richtig.
:::

### Minimum und Maximum

Für das **Maximum** (den größten Wert) merkt sich eine Variable den größten Wert, der bisher gesehen wurde. Jedes
neue Element wird damit verglichen. Ist es größer, wird es das neue bisherige Maximum. Beim **Minimum** (dem
kleinsten Wert) ist es genauso, nur mit „kleiner“.

Die wichtigste Frage ist der Startwert. Die sichere Wahl ist das **erste Element** `a[0]`. Es ist auf jeden Fall
ein Wert aus dem Array, also kann das Ergebnis nie ein Wert sein, der gar nicht vorkommt. Die Schleife kann dann
bei Index 1 beginnen. Voraussetzung ist, dass das Array mindestens ein Element hat. Deshalb steht bei solchen
Aufgaben die **Vorbedingung** `a.length > 0`. Eine Vorbedingung ist eine Zusage an die Methode: Der Aufrufer
garantiert sie, die Methode muss sie nicht selbst prüfen (siehe
[6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)).

:::beispiel[Kältester und wärmster Tag mit Position]
```java
int[] t = {-3, 2, -7, 4, 1, 4};
int max = t[0];
int posMax = 0;
int min = t[0];
for (int i = 1; i < t.length; i++) {
    if (t[i] > max) {
        max = t[i];
        posMax = i;
    }
    if (t[i] < min) {
        min = t[i];
    }
}
System.out.println(max + " an Index " + posMax);
System.out.println(min);
```

1. Start: `max` und `min` sind beide -3, `posMax` ist 0.
2. `i = 1`: 2 ist größer als -3, also `max = 2` und `posMax = 1`.
3. `i = 2`: -7 ist kleiner als -3, also `min = -7`.
4. `i = 3`: 4 ist größer als 2, also `max = 4` und `posMax = 3`.
5. `i = 4`: 1 ändert nichts. `i = 5`: 4 ist **nicht größer** als 4. Der Vergleich `>` ist streng, darum bleibt
   `posMax = 3`. Gemerkt wird also die erste Stelle des Maximums.

Die Ausgabe ist:

```
4 an Index 3
-7
```

Mit `>=` statt `>` würde sich die Methode die **letzte** Stelle merken, hier den Index 5.
:::

:::achtung[Das Maximum beginnt bei 0]
Diese Fassung sieht harmlos aus:

```java
int max = 0;                               // falsch
for (int i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
```

Für `a = {-5, -2, -9}` ist kein Element größer als 0. Die Methode liefert 0, obwohl 0 gar nicht im Array vorkommt.
Das richtige Maximum ist -2. Die Reparatur ist `int max = a[0];`. Derselbe Fehler passiert beim Minimum mit
Startwert 0, sobald alle Werte positiv sind.
:::

```aufgabe
id: ar-alg-max-auswahl
titel: Welche Fassung findet das Maximum?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Welche Fassung liefert für **jedes** Array mit mindestens einem Element den größten Wert?

  ```java
  // Fassung A
  int max = 0;
  for (int i = 0; i < a.length; i++) { if (a[i] > max) { max = a[i]; } }

  // Fassung B
  int max = a[0];
  for (int i = 1; i < a.length; i++) { if (a[i] > max) { max = a[i]; } }

  // Fassung C
  int max = a[0];
  for (int i = 1; i < a.length; i++) { if (a[i] > a[i - 1]) { max = a[i]; } }
  ```
teile:
  - typ: auswahl
    optionen: ['Fassung A', 'Fassung B', 'Fassung C']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Fassung A beginnt bei 0. Für `{-5, -2, -9}` liefert sie 0, obwohl 0 nicht vorkommt.'
      - wert: 2
        meldung: 'Fassung C vergleicht nur Nachbarn. Für `{9, 1, 3}` ist zuletzt 3 größer als 1, und das Ergebnis wäre 3 statt 9.'
hinweise:
  - Probiere jede Fassung mit einem Array, in dem alle Werte negativ sind.
  - Probiere die übrigen Fassungen mit einem Array, in dem das Maximum ganz vorne steht und danach ein kleiner Anstieg folgt.
loesung: |
  **Ansatz:** Für jede Fassung ein Gegenbeispiel suchen. Eine Fassung ohne Gegenbeispiel muss man begründen.
  ---
  A scheitert an negativen Werten. C scheitert an `{9, 1, 3}`, weil sie nicht mit dem bisherigen Maximum vergleicht.
  ---
  B beginnt mit einem echten Element und vergleicht jedes weitere mit dem größten bisher gesehenen. Darum ist `max` nach jedem Durchlauf das Maximum der schon geprüften Elemente.
```

```aufgabe
id: ar-alg-trace-min
titel: Das Minimum und seine Stelle verfolgen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  int[] a = {6, 3, 8, 3, 1};
  int min = a[0];
  int pos = 0;
  for (int i = 1; i < a.length; i++) {
      if (a[i] < min) {
          min = a[i];
          pos = i;
      }
  }
  ```

  Trage die Werte von `min` und `pos` nach jedem Durchlauf ein. Die erste Zeile zeigt den Zustand vor der Schleife.
teile:
  - typ: trace
    spalten: [min, pos]
    zeilen: [vor der Schleife, nach i = 1, nach i = 2, nach i = 3, nach i = 4]
    vorgabe: 1
    loesung: [[6, 0], [3, 1], [3, 1], [3, 1], [1, 4]]
    fehler:
      - wert: ["6", "0", "3", "1", "3", "1", "3", "3", "1", "4"]
        meldung: 'Bei `i = 3` ist `a[3] = 3` nicht **kleiner** als `min = 3`. Der Vergleich `<` ist streng, `pos` bleibt 1.'
      - wert: ["6", "0", "3", "1", "8", "2", "3", "3", "1", "4"]
        meldung: '`min` merkt sich den kleinsten Wert **bisher**, nicht das aktuelle Element. Bei `i = 2` ist 8 nicht kleiner als 3.'
hinweise:
  - Vergleiche in jedem Durchlauf das aktuelle Element mit dem bisherigen `min`.
  - Nur wenn es **echt kleiner** ist, ändern sich `min` und `pos`.
loesung: |
  **Ansatz:** In jedem Durchlauf `a[i] < min` prüfen und nur bei wahr beide Variablen ändern.
  ---
  `i = 1`: 3 < 6, also `min = 3`, `pos = 1`. `i = 2`: 8 ist nicht kleiner, keine Änderung.
  ---
  `i = 3`: 3 ist nicht kleiner als 3, keine Änderung. `i = 4`: 1 < 3, also `min = 1`, `pos = 4`.
  ---
  Ergebnis: Das Minimum 1 steht an Index 4. Probe: Kein Element ist kleiner als 1.
```

### Zählen und Suchen

**Zählen** ist ein Akkumulator, der bei 0 beginnt und um 1 wächst, wenn ein Element eine Bedingung erfüllt.
**Suchen** fragt nach der Stelle eines Werts. Das Ergebnis ist der Index des ersten Treffers. Gibt es keinen
Treffer, liefert man vereinbarungsgemäß -1, denn -1 ist nie ein gültiger Index. Die Suche heißt **linear**, weil
sie die Elemente der Reihe nach prüft, wie man eine Liste von oben nach unten liest.

In einer Methode kann die Suche beim ersten Treffer sofort mit `return` enden. Erst wenn die Schleife ganz
durchgelaufen ist, steht fest, dass es keinen Treffer gibt. Darum steht `return -1;` **nach** der Schleife.

:::beispiel[Die erste Stelle eines Werts]
```java
public class Suche {
    public static int indexVon(int[] a, int gesucht) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] == gesucht) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] z = {4, 8, 15, 16, 23, 8};
        System.out.println(indexVon(z, 8));
        System.out.println(indexVon(z, 42));
        System.out.println(indexVon(new int[0], 4));
    }
}
```

1. Die Schleife prüft die Elemente der Reihe nach. Beim ersten Treffer beendet `return i;` die ganze Methode
   sofort. Die zweite 8 auf Index 5 wird nie erreicht.
2. Für 42 gibt es keinen Treffer. Die Schleife läuft ganz durch, danach liefert `return -1;` das Ergebnis.
3. Beim leeren Array läuft die Schleife kein einziges Mal, denn `0 < 0` ist falsch. Auch hier ist das Ergebnis -1.

Die Ausgabe ist:

```
1
-1
-1
```
:::

:::achtung[Aufgeben nach dem ersten Element]
Diese Fassung liefert -1, sobald der gesuchte Wert nicht schon auf Index 0 steht:

```java
for (int i = 0; i < a.length; i++) {
    if (a[i] == gesucht) {
        return i;
    } else {
        return -1;          // falsch: beendet die Suche schon beim ersten Element
    }
}
return -1;
```

Für `{4, 8, 15}` und den gesuchten Wert 8 ist `a[0] = 4` kein Treffer. Der `else`-Zweig beendet die Methode sofort
mit -1, und die 8 auf Index 1 wird nie geprüft. Ein einzelnes Element, das nicht passt, sagt aber nichts über die
anderen. Die Reparatur: den `else`-Zweig streichen. Das `return -1;` gehört ausschließlich hinter die Schleife.
:::

```aufgabe
id: ar-alg-suchen
titel: Erste und letzte Stelle
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Stellen {
          public static int erste(int[] a, int x) {
              for (int i = 0; i < a.length; i++) {
                  if (a[i] == x) {
                      return i;
                  }
              }
              return -1;
          }

          public static int letzte(int[] a, int x) {
              int pos = -1;
              for (int i = 0; i < a.length; i++) {
                  if (a[i] == x) {
                      pos = i;
                  }
              }
              return pos;
          }

          public static void main(String[] args) {
              int[] d = {5, 2, 7, 2, 9, 2, 1};
              System.out.println(erste(d, 2) + " " + letzte(d, 2));
              System.out.println(erste(d, 9) + " " + letzte(d, 9));
              System.out.println(erste(d, 3) + " " + letzte(d, 3));
          }
      }
    loesung: |
      1 5
      4 4
      -1 -1
    fehler:
      - wert: "1 1\n4 4\n-1 -1"
        meldung: '`letzte` beendet die Schleife nicht beim ersten Treffer. Sie überschreibt `pos` bei jedem Treffer, am Ende bleibt der letzte.'
      - wert: "2 6\n5 5\n-1 -1"
        meldung: Indizes zählen ab 0. Die erste 2 steht auf Index 1, nicht 2.
hinweise:
  - '`erste` hört beim ersten Treffer auf. `letzte` läuft immer bis zum Ende und merkt sich jeden Treffer.'
  - Die 2 steht auf den Indizes 1, 3 und 5.
loesung: |
  **Ansatz:** Für jede Methode bestimmen, ob sie beim ersten Treffer aufhört oder bis zum Ende weiterläuft.
  ---
  Die 2 steht auf 1, 3 und 5. `erste` liefert 1, `letzte` überschreibt `pos` bis 5.
  ---
  Die 9 kommt nur einmal vor, auf Index 4. Beide liefern 4. Die 3 kommt nicht vor. Beide liefern -1.
```

### Häufigkeiten zählen

Manchmal will man nicht wissen, ob ein Wert vorkommt, sondern **wie oft jeder Wert** vorkommt. Bei kleinen ganzen
Zahlen gibt es dafür einen eleganten Trick. Man legt ein zweites Array an, das **Zählerarray**. Der Wert selbst
dient darin als Index. Diese Technik braucht zum Beispiel die Aufgabe „Ziffern zählen“ aus einer älteren Sammlung
von EP1-Übungsaufgaben (den sogenannten Ad-hoc-Aufgaben aus dem Winter 2017).

:::beispiel[Wie oft fiel welche Augenzahl?]
```java
int[] wuerfe = {3, 6, 1, 3, 5, 6, 3, 2};
int[] anzahl = new int[7];
for (int i = 0; i < wuerfe.length; i++) {
    anzahl[wuerfe[i]]++;
}
for (int augen = 1; augen <= 6; augen++) {
    System.out.println(augen + ": " + anzahl[augen]);
}
```

1. Die Augenzahlen gehen von 1 bis 6. Das Zählerarray hat die Länge 7, damit der Index 6 existiert. Der Platz 0
   bleibt ungenutzt. So stimmt die Augenzahl direkt mit dem Index überein.
2. `anzahl[wuerfe[i]]++` liest zuerst den Wurf, zum Beispiel 3. Dann erhöht es `anzahl[3]` um 1. Nach der Schleife
   steht in `anzahl[k]`, wie oft die Augenzahl `k` gefallen ist.
3. Die 3 kommt dreimal vor, die 6 zweimal. Die 1, die 2 und die 5 je einmal, die 4 gar nicht.

Die Ausgabe ist:

```
1: 1
2: 1
3: 3
4: 0
5: 1
6: 2
```

Probe: `1 + 1 + 3 + 0 + 1 + 2 = 8`, und es gab 8 Würfe.
:::

```aufgabe
id: ar-alg-histogramm
titel: Ziffern zählen mit einem Zählerarray
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Ad-hoc-Aufgabe 20 der EP1-Sammlung 2017W (umformuliert)
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] ziffern = {3, 1, 3, 0, 9, 3, 1, 0, 3};
      int[] h = new int[10];
      for (int i = 0; i < ziffern.length; i++) {
          h[ziffern[i]]++;
      }
      System.out.println(h[3] + " " + h[1] + " " + h[0] + " " + h[2]);
      int haeufigste = 0;
      for (int z = 1; z < h.length; z++) {
          if (h[z] > h[haeufigste]) {
              haeufigste = z;
          }
      }
      System.out.println(haeufigste);
    loesung: |
      4 2 2 0
      3
    fehler:
      - wert: "0 1 3 3\n3"
        meldung: '`h[3]` ist nicht das Element auf Platz 3 von `ziffern`. Es ist der **Zähler** für die Ziffer 3, also wie oft die 3 vorkommt.'
      - wert: "4 2 2 0\n4"
        meldung: Die zweite Schleife liefert nicht die größte Anzahl, sondern die **Ziffer** mit der größten Anzahl. Das ist die 3.
hinweise:
  - Nach der ersten Schleife ist `h[k]` die Anzahl der Ziffer `k` im Array `ziffern`.
  - Die zweite Schleife sucht den Index mit dem größten Zähler. Ausgegeben wird dieser Index.
loesung: |
  **Ansatz:** Das Zählerarray `h` füllen, dann den Index mit dem größten Eintrag suchen.
  ---
  Die 3 kommt viermal vor, die 1 und die 0 je zweimal, die 9 einmal, die 2 nie. Also `h[3] = 4`, `h[1] = 2`, `h[0] = 2`, `h[2] = 0`.
  ---
  Die zweite Schleife merkt sich den Index mit dem größten Zähler. Das ist 3 mit dem Zähler 4.
```

```aufgabe
id: ar-alg-code-bereich
titel: Werte in einem Bereich zählen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `int zaehleImBereich(int[] a, int von, int bis)`. Die Methode liefert, wie viele Elemente von `a`
  im Bereich von `von` bis `bis` liegen, beide Grenzen eingeschlossen. Vorbedingung: `a != null` und `von <= bis`.
  Das Array darf leer sein.

  Beispiel: `zaehleImBereich(new int[]{4, 9, 2, 7, 4}, 4, 7)` liefert 3, denn 4, 7 und 4 liegen im Bereich.
teile:
  - typ: code
    vorlage: |
      public class Bereich {
          public static int zaehleImBereich(int[] a, int von, int bis) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Bereich {
          public static int zaehleImBereich(int[] a, int von, int bis) {
              int anzahl = 0;
              for (int i = 0; i < a.length; i++) {
                  if (a[i] >= von && a[i] <= bis) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "zaehleImBereich(new int[]{4, 9, 2, 7, 4}, 4, 7)", erwartet: "3" }
      - { aufruf: "zaehleImBereich(new int[]{-3, 0, 3}, -3, 0)", erwartet: "2", beschreibung: "negative Grenze, Grenzen zählen mit" }
      - { aufruf: "zaehleImBereich(new int[0], 1, 5)", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "zaehleImBereich(new int[]{5, 5, 5}, 5, 5)", erwartet: "3", beschreibung: "Bereich aus einer einzigen Zahl" }
      - { aufruf: "zaehleImBereich(new int[]{10, 20, 30, 40}, 11, 39)", erwartet: "2", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Beide Grenzen gehören zum Bereich. Verwende `>=` und `<=`, nicht `>` und `<`." }
      - { wert: 3, meldung: "Beim leeren Array darf kein Element gelesen werden. Läuft deine Schleife mit `i < a.length`?" }
hinweise:
  - Ein Zähler beginnt bei 0 und wächst bei jedem Element, das die Bedingung erfüllt.
  - 'Die Bedingung besteht aus zwei Teilen, die beide gelten müssen: `a[i] >= von && a[i] <= bis`.'
loesung: |
  **Ansatz:** Zählen mit einem Akkumulator. Die Bedingung prüft beide Grenzen einschließlich.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < a.length; i++) {
      if (a[i] >= von && a[i] <= bis) {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Beim leeren Array läuft die Schleife nicht, das Ergebnis bleibt 0. Probe mit dem Beispiel: 4, 7 und 4 liegen im Bereich, also 3.
```

```aufgabe
id: ar-alg-code-serie
titel: Die längste Serie gleicher Werte
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `int laengsteSerie(int[] a)`. Eine **Serie** ist eine Folge direkt aufeinanderfolgender gleicher
  Werte. Die Methode liefert die Länge der längsten Serie. Für ein leeres Array liefert sie 0.
  Vorbedingung: `a != null`.

  Beispiele: `{1, 1, 2, 2, 2, 3}` liefert 3 (die drei Zweien). `{5}` liefert 1. `{4, 7, 4}` liefert 1, denn die
  beiden Vieren stehen nicht direkt nebeneinander.
teile:
  - typ: code
    vorlage: |
      public class Serie {
          public static int laengsteSerie(int[] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Serie {
          public static int laengsteSerie(int[] a) {
              if (a.length == 0) {
                  return 0;
              }
              int beste = 1;
              int aktuell = 1;
              for (int i = 1; i < a.length; i++) {
                  if (a[i] == a[i - 1]) {
                      aktuell++;
                  } else {
                      aktuell = 1;
                  }
                  if (aktuell > beste) {
                      beste = aktuell;
                  }
              }
              return beste;
          }
      }
    tests:
      - { aufruf: "laengsteSerie(new int[]{1, 1, 2, 2, 2, 3})", erwartet: "3" }
      - { aufruf: "laengsteSerie(new int[]{5})", erwartet: "1", beschreibung: "ein Element" }
      - { aufruf: "laengsteSerie(new int[0])", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "laengsteSerie(new int[]{4, 7, 4})", erwartet: "1", beschreibung: "gleiche Werte, aber nicht nebeneinander" }
      - { aufruf: "laengsteSerie(new int[]{8, 3, 3, 3, 3})", erwartet: "4", beschreibung: "längste Serie am Ende" }
      - { aufruf: "laengsteSerie(new int[]{2, 2, 9, 9, 9, 1, 1, 1, 1, 0})", erwartet: "4", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Beim leeren Array gibt es weder `a[0]` noch eine Serie. Fange diesen Fall vor der Schleife ab." }
      - { wert: 4, meldung: "Du zählst vermutlich, wie oft ein Wert insgesamt vorkommt. Eine Serie zählt nur **direkt benachbarte** gleiche Werte." }
      - { wert: 5, meldung: "Die längste Serie steht hier ganz am Ende. Aktualisierst du das Maximum erst, wenn eine Serie abbricht? Dann fehlt die letzte Serie." }
hinweise:
  - Du brauchst zwei Variablen. `aktuell` ist die Länge der Serie, in der du gerade bist. `beste` ist die längste bisher.
  - Vergleiche `a[i]` mit dem Vorgänger `a[i - 1]`. Bei Gleichheit wächst `aktuell`, sonst beginnt eine neue Serie mit Länge 1. Prüfe in jedem Durchlauf, ob `aktuell` größer als `beste` ist.
loesung: |
  **Ansatz:** Zwei Akkumulatoren. `aktuell` zählt die laufende Serie, `beste` merkt sich das Maximum wie beim Maximum-Algorithmus.
  ---
  Das leere Array wird zuerst abgefangen. Danach beginnen beide Variablen bei 1, denn das erste Element bildet allein eine Serie der Länge 1.
  ---
  ```java
  if (a.length == 0) {
      return 0;
  }
  int beste = 1;
  int aktuell = 1;
  for (int i = 1; i < a.length; i++) {
      if (a[i] == a[i - 1]) {
          aktuell++;
      } else {
          aktuell = 1;
      }
      if (aktuell > beste) {
          beste = aktuell;
      }
  }
  return beste;
  ```
  ---
  Der Vergleich mit `beste` steht in jedem Durchlauf, nicht nur beim Abbruch einer Serie. So zählt auch eine Serie am Ende. Probe mit `{8, 3, 3, 3, 3}`: `aktuell` wird 1, 2, 3, 4, also `beste = 4`.
```

```reflexion
frage: Beim Maximum beginnt man mit `a[0]`, bei der Summe mit 0. Nach welcher Regel wählst du den Startwert eines Akkumulators?
antwort: |
  Der Startwert muss das richtige Ergebnis für den Fall sein, dass noch kein Element verarbeitet wurde, und er
  darf das Ergebnis nicht verfälschen. Bei der Summe ist das 0, denn 0 zu addieren ändert nichts. Beim Zählen ist
  es ebenfalls 0. Beim Maximum gibt es keinen solchen neutralen Wert unter den üblichen Zahlen: Jede feste Zahl
  könnte größer sein als alle Elemente. Darum nimmt man ein echtes Element, nämlich `a[0]`. Das setzt voraus, dass
  das Array nicht leer ist.
```

## Neue Arrays bauen: kopieren, umdrehen, filtern, einfügen

```aufgabe
id: ar-neu-check-umdrehen
titel: Einen String umdrehen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      String s = "Rad";
      String r = "";
      for (int i = 0; i < s.length(); i++) {
          r = s.charAt(i) + r;
      }
      System.out.println(r);
    loesung: |
      daR
    fehler:
      - wert: "Rad"
        meldung: 'Jedes Zeichen wird **vor** den bisherigen String gesetzt: `s.charAt(i) + r`. Dadurch dreht sich die Reihenfolge um.'
hinweise:
  - Schreib `r` nach jedem Durchlauf auf.
loesung: |
  Nach dem ersten Durchlauf ist `r = "R"`, nach dem zweiten `"aR"`.
  ---
  Nach dem dritten ist `r = "daR"`. Das neue Zeichen kommt immer nach vorne.
```

Ein Array hat eine feste Länge (siehe [12.1 Was ist ein Array?](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge)).
Soll ein Array länger, kürzer oder anders angeordnet werden, legst du ein **neues** Array an und füllst es. Diese
Art von Aufgabe kommt im Programmiertest regelmäßig vor. Dort heißt es dann etwa „liefert ein neues Array zurück“.
Sie folgt immer demselben Plan:

1. **Wie lang wird das neue Array?** Manchmal steht die Länge sofort fest, etwa beim Kopieren. Manchmal muss eine
   erste Schleife sie erst ausrechnen, etwa beim Filtern.
2. **Welcher Wert kommt auf welchen Platz?** Eine zweite Schleife überträgt die Werte. Oft braucht sie zwei Indizes:
   einen zum Lesen im alten Array und einen zum Schreiben im neuen.

### Kopieren

Eine Zusatzfrage von Blatt 4 lautet: „Wie gehen Sie vor, wenn Sie ein `int`-Array kopieren müssen?“ Die Antwort:
ein neues Array derselben Länge anlegen und jeden Wert einzeln übertragen. Danach gibt es zwei voneinander
unabhängige Arrays mit gleichem Inhalt.

:::beispiel[Eine echte Kopie]
```java
int[] original = {7, 3, 9};
int[] kopie = new int[original.length];
for (int i = 0; i < original.length; i++) {
    kopie[i] = original[i];
}
kopie[0] = 100;
System.out.println(Arrays.toString(original));
System.out.println(Arrays.toString(kopie));
```

1. `new int[original.length]` legt ein zweites Array mit drei Plätzen an. Es enthält zunächst nur Nullen.
2. Die Schleife überträgt jeden Wert auf denselben Platz im neuen Array.
3. `kopie[0] = 100;` ändert nur das neue Array. Das Original bleibt, wie es war.

Die Ausgabe ist:

```
[7, 3, 9]
[100, 3, 9]
```
:::

Java bietet auch fertige Kopiermethoden, etwa `original.clone()` oder `System.arraycopy`. Im Programmiertest sind
sie **ausdrücklich verboten**. Auf den Aufgabenblättern sind ohnehin nur wenige fertige Klassen erlaubt (auf Blatt 4
nur `String`, `Math` und `Integer`). Du sollst zeigen, dass du die Schleife selbst schreiben kannst. Was dagegen die kurze Zeile `int[] kopie = original;` macht, ist eine eigene Lektion wert. Sie erzeugt
nämlich **keine** Kopie (siehe [12.5 Referenzen](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array)).

```aufgabe
id: ar-neu-rf-kopie
titel: Was ist eine Kopie?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist `int[] a = {2, 4, 6};`. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach `int[] b = new int[a.length];` und einer Schleife mit `b[i] = a[i];` sind `a` und `b` zwei verschiedene Arrays mit gleichem Inhalt.
        richtig: true
        erklaerung: '`new` erzeugt ein zweites Array, die Schleife überträgt die Werte. Das ist eine echte Kopie.'
      - text: Nach dieser Kopie ändert `b[1] = 0;` auch `a[1]`.
        richtig: false
        erklaerung: Die beiden Arrays sind unabhängig. Eine Änderung in `b` betrifft `a` nicht.
      - text: Mit `a.length = 5;` kann man das Array `a` auf fünf Plätze verlängern.
        richtig: false
        erklaerung: Die Länge ist fest. Der Compiler lehnt die Zuweisung ab. Für mehr Platz braucht es ein neues Array.
      - text: Ein neues Array, das um ein Element länger ist als `a`, legt man mit `new int[a.length + 1]` an.
        richtig: true
        erklaerung: Die Länge in den eckigen Klammern darf ein beliebiger `int`-Ausdruck sein.
    fehler:
      - wert: [r, r, f, r]
        meldung: Nach einer elementweisen Kopie gibt es zwei Arrays. Eine Änderung im einen ist im anderen nicht zu sehen.
      - wert: [r, f, r, r]
        meldung: '`length` kann man nur lesen. Die Länge wird beim Anlegen festgelegt und nie mehr geändert.'
hinweise:
  - '`new` erzeugt immer ein neues, eigenes Array.'
loesung: |
  **Ansatz:** Bei jeder Aussage fragen, wie viele Arrays es gibt und ob die Länge sich ändern soll.
  ---
  Richtig sind 1 und 4. Eine elementweise Kopie ergibt zwei unabhängige Arrays, und ein längeres Array legt man neu an.
```

### Umdrehen

Beim Umdrehen landet das erste Element auf dem letzten Platz, das zweite auf dem vorletzten und so weiter. Für ein
Array der Länge 5 gehört zu Index 0 der Platz 4, zu Index 1 der Platz 3, zu Index 2 der Platz 2. Die Summe der
beiden Indizes ist immer 4, also `länge - 1`. Daraus folgt die Formel: Das Element auf Index `i` kommt auf den
Platz `a.length - 1 - i`.

:::beispiel[Ein Array in ein neues Array umdrehen]
```java
int[] a = {10, 20, 30, 40, 50};
int[] b = new int[a.length];
for (int i = 0; i < a.length; i++) {
    b[a.length - 1 - i] = a[i];
}
System.out.println(Arrays.toString(b));
```

Für jeden Durchlauf:

- `i = 0`: Zielplatz `5 - 1 - 0 = 4`. `b[4]` wird 10.
- `i = 1`: Zielplatz 3. `b[3]` wird 20.
- `i = 2`: Zielplatz 2. `b[2]` wird 30, die Mitte bleibt in der Mitte.
- `i = 3` und `i = 4`: Die Zielplätze 1 und 0 bekommen 40 und 50.

Die Ausgabe ist `[50, 40, 30, 20, 10]`. Probe: Das erste Element 10 steht jetzt am Ende.
:::

```aufgabe
id: ar-neu-gefuehrt
titel: Ein char-Array umdrehen
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? Ein `char`-Array gibt `println` als Wort aus (siehe die Achtung-Box zu `println` in
  [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen)). Löse die Aufgabe
  zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      char[] w = {'L', 'A', 'M', 'P', 'E', 'N'};
      char[] r = new char[w.length];
      for (int i = 0; i < w.length; i++) {
          r[w.length - 1 - i] = w[i];
      }
      System.out.println(r);
      System.out.println(r[1]);
    loesung: |
      NEPMAL
      E
    fehler:
      - wert: "LAMPEN\nA"
        meldung: Jedes Zeichen wird auf den **gespiegelten** Platz `w.length - 1 - i` geschrieben, nicht auf denselben.
      - wert: "NEPMAL\nN"
        meldung: '`r[1]` ist der zweite Platz des umgedrehten Arrays, also das vorletzte Zeichen von `w`.'
gefuehrt:
  - text: Auf welchen Platz von `r` schreibt der Durchlauf mit `i = 0`?
    teil: { typ: zahl, loesung: "6 - 1 - 0" }
    erklaerung: '`w.length` ist 6. Der Zielplatz ist `6 - 1 - 0 = 5`, der letzte Platz.'
  - text: Auf welchen Platz von `r` schreibt der Durchlauf mit `i = 4`?
    teil: { typ: zahl, loesung: "6 - 1 - 4" }
    erklaerung: '`6 - 1 - 4 = 1`. Dort landet `w[4]`, also das `E`.'
  - text: Welches Zeichen steht am Ende in `r[0]`?
    teil:
      typ: auswahl
      optionen: ["'N'", "'L'", "'E'"]
      richtig: [0]
    erklaerung: Auf Platz 0 landet das Element mit `i = 5`, das letzte Zeichen `N`.
hinweise:
  - Das Element auf Index `i` kommt auf den Platz `w.length - 1 - i`.
loesung: |
  **Ansatz:** Gespiegelte Plätze: Index `i` wird zu `5 - i`.
  ---
  `r` enthält von vorne nach hinten `N, E, P, M, A, L`. `println` gibt das `char`-Array als `NEPMAL` aus.
  ---
  `r[1]` ist das zweite Zeichen von `r`, also `E`.
```

:::achtung[Der gespiegelte Index um eins daneben]
Eine häufige falsche Formel lautet

```java
for (int i = 0; i < a.length; i++) {
    b[a.length - i] = a[i];      // falsch
}
```

Schon im ersten Durchlauf ist `i = 0`, und der Zielplatz ist `a.length`. Das ist kein gültiger Index. Das Programm
bricht sofort mit `ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5` ab, wenn `a` fünf Elemente
hat. Richtig ist `a.length - 1 - i`. Prüfe so eine Formel immer mit den beiden Randwerten: Für `i = 0` muss der
letzte Index herauskommen, für den letzten Index die 0.
:::

```aufgabe
id: ar-neu-zeilen-fehler
titel: Wo steckt der Fehler beim Verlängern?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Methode soll ein neues Array liefern, das alle Werte von `a` enthält und zusätzlich am Ende den Wert `x`.
  Für `{4, 1}` und `x = 9` soll `{4, 1, 9}` herauskommen. Markiere **die Zeilen mit Fehlern**.
teile:
  - typ: zeilen
    code: |
      public static int[] haengeAn(int[] a, int x) {
          int[] neu = new int[a.length];
          for (int i = 0; i < a.length; i++) {
              neu[i] = a[i];
          }
          neu[a.length + 1] = x;
          return neu;
      }
    loesung: [2, 6]
    fehler:
      - wert: [2]
        meldung: Auch mit der richtigen Länge `a.length + 1` stimmt Zeile 6 nicht. Der letzte Index des neuen Arrays ist `a.length`, nicht `a.length + 1`.
      - wert: [6]
        meldung: Das neue Array muss um einen Platz länger sein als `a`. Zeile 2 legt es genauso lang an.
      - wert: [3, 6]
        meldung: Die Schleife in Zeile 3 überträgt alle alten Werte und ist richtig. Prüfe stattdessen die Länge des neuen Arrays.
hinweise:
  - Wie lang muss das neue Array sein, wenn genau ein Element dazukommt?
  - Welchen Index hat der letzte Platz eines Arrays der Länge `a.length + 1`?
loesung: |
  **Ansatz:** Zuerst die Länge prüfen, dann jeden Index gegen den gültigen Bereich.
  ---
  Zeile 2: Das neue Array braucht `a.length + 1` Plätze, sonst hat `x` keinen Platz.
  ---
  Zeile 6: Bei Länge `a.length + 1` ist der letzte Index `a.length`. Richtig ist `neu[a.length] = x;`.
  ---
  Probe mit `{4, 1}`: Länge 3, Plätze 0 und 1 aus der Schleife, Platz 2 bekommt die 9.
```

### Filtern: zwei Durchläufe und zwei Indizes

**Filtern** heißt: nur die Elemente behalten, die eine Bedingung erfüllen. Die Schwierigkeit ist die Länge. Bevor
das neue Array angelegt werden kann, muss feststehen, wie viele Elemente die Bedingung erfüllen. Darum braucht man
**zwei Durchläufe**: Der erste zählt, der zweite füllt.

Im zweiten Durchlauf laufen die Plätze im alten und im neuen Array nicht mehr gleich. Darum gibt es einen zweiten
Index `j`. Er zeigt auf den nächsten freien Platz im neuen Array und wächst nur, wenn wirklich etwas geschrieben
wurde.

:::beispiel[Nur die positiven Werte behalten]
```java
int[] a = {5, -2, 8, 0, -1, 3};
int anzahl = 0;
for (int i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        anzahl++;
    }
}
int[] pos = new int[anzahl];
int j = 0;
for (int i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        pos[j] = a[i];
        j++;
    }
}
System.out.println(Arrays.toString(pos));
```

1. **Zählen:** Positiv sind 5, 8 und 3. Die 0 ist nicht positiv. Also ist `anzahl = 3`.
2. **Anlegen:** `pos` bekommt genau drei Plätze.
3. **Füllen:** `i` läuft über alle sechs alten Plätze. `j` beginnt bei 0. Bei `i = 0` wird 5 auf `pos[0]` geschrieben,
   dann ist `j = 1`. Bei `i = 2` kommt 8 auf `pos[1]`, und `j` wird 2. Bei `i = 5` kommt 3 auf `pos[2]`.
4. Nach der Schleife ist `j = 3`. Das ist genau die Länge. Daran erkennt man, dass jeder Platz gefüllt wurde.

Die Ausgabe ist `[5, 8, 3]`.
:::

:::achtung[Das neue Array ist zu lang]
Wer das Zählen überspringt, legt das neue Array oft so lang wie das alte an:

```java
int[] pos = new int[a.length];   // falsch: 6 statt 3 Plätze
```

Für `{5, -2, 8, 0, -1, 3}` entsteht dann `[5, 8, 3, 0, 0, 0]`. Die drei überzähligen Plätze behalten den
Standardwert 0, und das Ergebnis enthält Nullen, die gar nicht positiv sind. Richtig ist, zuerst die Treffer zu
zählen und das Array mit `new int[anzahl]` anzulegen.
:::

:::achtung[Ein Index für beide Arrays]
Ein zweiter typischer Fehler verwendet `i` auch im neuen Array:

```java
if (a[i] > 0) {
    pos[i] = a[i];      // falsch: i ist der Platz im ALTEN Array
}
```

Bei `i = 2` soll die 8 auf `pos[1]` landen, landet aber auf `pos[2]`. Spätestens bei `i = 5` ist `pos[5]` kein
gültiger Platz mehr, denn `pos` hat nur drei Plätze. Das Programm bricht mit einer
`ArrayIndexOutOfBoundsException` ab. Die Reparatur ist ein eigener Schreibindex `j`, der nur bei einem Treffer wächst.
:::

```aufgabe
id: ar-neu-laenge
titel: Wie lang wird das neue Array?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist `int[] a = {6, 0, 0, 4, 9, 0, 1};`.

  a) Ein neues Array soll nur die Werte enthalten, die **nicht** 0 sind. Wie lang muss es sein?

  b) Ein neues Array soll alle Werte von `a` enthalten und zusätzlich **vor jeder 0** den Wert 8. Wie lang muss es sein?
teile:
  - typ: zahl
    label: a)
    loesung: "7 - 3"
    fehler:
      - wert: "7"
        meldung: Das ist die Länge des alten Arrays. Die drei Nullen fallen weg.
      - wert: "3"
        meldung: 3 ist die Anzahl der Nullen. Gesucht ist die Anzahl der Werte, die übrig bleiben.
  - typ: zahl
    label: b)
    loesung: "7 + 3"
    fehler:
      - wert: "7"
        meldung: Vor jeder der drei Nullen kommt ein zusätzlicher Platz für die 8 dazu.
      - wert: "8"
        meldung: Es gibt drei Nullen, nicht eine. Jede bekommt ihre eigene 8.
hinweise:
  - Zähle zuerst die Nullen in `a`. Es sind drei.
loesung: |
  **Ansatz:** Neue Länge = alte Länge minus entfernte Elemente plus eingefügte Elemente.
  ---
  a) Sieben Elemente, drei davon sind 0. Es bleiben `7 - 3 = 4`.
  ---
  b) Alle sieben bleiben, und für jede der drei Nullen kommt eine 8 dazu: `7 + 3 = 10`.
```

```aufgabe
id: ar-neu-luecke-filter
titel: Gerade Werte herausfiltern
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Der Code soll ein neues Array `gerade` mit allen geraden Werten von `a` in derselben Reihenfolge erzeugen. Die
  Variable `anzahl` enthält bereits die Anzahl der geraden Werte. Ergänze die drei Lücken.
teile:
  - typ: lueckentext
    code: |
      int[] a = {4, 7, 10, 3, 6};
      int anzahl = 3;
      int[] gerade = new int[anzahl];
      int j = ___;
      for (int i = 0; i < a.length; i++) {
          if (a[i] % 2 == 0) {
              gerade[___] = a[i];
              ___;
          }
      }
    luecken: [["0"], ["j"], ["j++", "j = j + 1", "j += 1", "++j"]]
    fehler:
      - wert: ["0", "i", "j++"]
        meldung: '`i` ist der Platz im alten Array. Bei `i = 2` würde die 10 auf `gerade[2]` landen statt auf `gerade[1]`, und bei `i = 4` gäbe es eine Exception.'
      - wert: ["1", "j", "j++"]
        meldung: Der erste Treffer gehört auf den ersten Platz des neuen Arrays, also auf Index 0.
hinweise:
  - '`j` zeigt immer auf den nächsten freien Platz im neuen Array.'
  - '`j` darf nur wachsen, wenn wirklich ein Wert geschrieben wurde. Darum steht das Erhöhen im `if`-Block.'
loesung: |
  **Ansatz:** Ein eigener Schreibindex `j` für das neue Array, Start bei 0.
  ---
  Bei einem Treffer wird auf `gerade[j]` geschrieben und `j` danach um 1 erhöht.
  ---
  Probe: 4 kommt auf Platz 0, 10 auf Platz 1, 6 auf Platz 2. Danach ist `j = 3`, das ist die Länge.
```

### Einfügen

Beim **Einfügen** wird das neue Array länger. Auch hier hilft der Plan: erst die Länge ausrechnen, dann mit zwei
Indizes füllen. Diesmal wächst der Schreibindex `j` manchmal um 2, nämlich wenn neben dem alten Wert noch ein
neuer geschrieben wird. Auf Blatt 4 sollst du zum Beispiel vor jeder Ziffer in einem `char`-Array ein zusätzliches
Zeichen einfügen.

:::beispiel[Nach jeder geraden Zahl eine 0 einfügen]
```java
int[] a = {3, 4, 7, 8, 8};
int gerade = 0;
for (int i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        gerade++;
    }
}
int[] neu = new int[a.length + gerade];
int j = 0;
for (int i = 0; i < a.length; i++) {
    neu[j] = a[i];
    j++;
    if (a[i] % 2 == 0) {
        neu[j] = 0;
        j++;
    }
}
System.out.println(Arrays.toString(neu));
```

1. Gerade sind 4, 8 und 8. Das neue Array braucht `5 + 3 = 8` Plätze.
2. In jedem Durchlauf wird zuerst der alte Wert übertragen. Ist er gerade, folgt direkt dahinter eine 0.
3. Ablauf: 3 auf Platz 0. Dann 4 auf Platz 1 und 0 auf Platz 2. Dann 7 auf Platz 3. Dann 8 auf Platz 4, 0 auf
   Platz 5, 8 auf Platz 6 und 0 auf Platz 7.
4. Am Ende ist `j = 8`, also ist jeder Platz gefüllt.

Die Ausgabe ist `[3, 4, 0, 7, 8, 0, 8, 0]`. Soll der neue Wert **vor** dem alten stehen, vertauscht man einfach die
beiden Schreibvorgänge im Rumpf.
:::

```aufgabe
id: ar-neu-ausgabe-verdoppeln
titel: Große Werte verdoppeln
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] a = {7, 2, 9, 5, 6};
      int gross = 0;
      for (int i = 0; i < a.length; i++) {
          if (a[i] > 5) {
              gross++;
          }
      }
      int[] b = new int[a.length + gross];
      int j = 0;
      for (int i = 0; i < a.length; i++) {
          b[j] = a[i];
          j++;
          if (a[i] > 5) {
              b[j] = a[i];
              j++;
          }
      }
      System.out.println(b.length);
      System.out.println(Arrays.toString(b));
    loesung: |
      8
      [7, 7, 2, 9, 9, 5, 6, 6]
    fehler:
      - wert: "9\n[7, 7, 2, 9, 9, 5, 5, 6, 6]"
        meldung: 'Die Bedingung ist `a[i] > 5`, also **echt** größer. Die 5 selbst wird nicht verdoppelt.'
      - wert: "8\n[7, 2, 9, 5, 6, 7, 9, 6]"
        meldung: Die Kopie wird direkt hinter das Original geschrieben, nicht ans Ende. `j` wächst in jedem Schritt um eins.
hinweise:
  - Zähle zuerst die Werte, die größer als 5 sind. Das ergibt die Länge.
  - Geh dann die alten Werte der Reihe nach durch und schreib jeden einmal oder zweimal hintereinander auf.
loesung: |
  **Ansatz:** Länge bestimmen, dann mit Schreibindex `j` füllen.
  ---
  Größer als 5 sind 7, 9 und 6. Die Länge ist `5 + 3 = 8`.
  ---
  7 kommt zweimal, 2 einmal, 9 zweimal, 5 einmal, 6 zweimal. Ergebnis `[7, 7, 2, 9, 9, 5, 6, 6]`.
```

```aufgabe
id: ar-neu-code-anhaengen
titel: Ein Array um ein Element verlängern
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int[] anhaengen(int[] a, int wert)`. Die Methode liefert ein **neues** Array, das alle Werte von
  `a` in derselben Reihenfolge enthält und am Ende zusätzlich `wert`. Das Array `a` selbst bleibt unverändert. Es
  darf leer sein. Verwende weder `clone` noch `System.arraycopy` noch eine Methode der Klasse `Arrays`.

  Beispiel: `anhaengen(new int[]{4, 1}, 9)` liefert `{4, 1, 9}`.
teile:
  - typ: code
    vorlage: |
      public class Anhaengen {
          public static int[] anhaengen(int[] a, int wert) {
              return a; // TODO
          }
      }
    musterloesung: |
      public class Anhaengen {
          public static int[] anhaengen(int[] a, int wert) {
              int[] neu = new int[a.length + 1];
              for (int i = 0; i < a.length; i++) {
                  neu[i] = a[i];
              }
              neu[a.length] = wert;
              return neu;
          }
      }
    tests:
      - { aufruf: "anhaengen(new int[]{4, 1}, 9)", erwartet: "new int[]{4, 1, 9}" }
      - { aufruf: "anhaengen(new int[0], 5)", erwartet: "new int[]{5}", beschreibung: "leeres Array" }
      - { vorher: "int[] a = {3, 8};", aufruf: "anhaengen(a, 0) != a", erwartet: "true", beschreibung: "Ergebnis ist ein neues Array" }
      - { vorher: "int[] a = {3, 8};", aufruf: "anhaengen(a, 0)", ergebnis: "a", erwartet: "new int[]{3, 8}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "anhaengen(new int[]{-1, -2, -3}, -4)", erwartet: "new int[]{-1, -2, -3, -4}", versteckt: true }
    regeln: { keineArrayKopie: true, verboteneApi: ["Arrays"] }
    fehler:
      - { wert: 2, meldung: "Beim leeren Array hat das neue Array die Länge 1. Der neue Wert kommt auf Index `a.length`, hier also 0." }
      - { wert: 3, meldung: "Die Methode muss ein **neues** Array liefern. `return a;` gibt das alte zurück, und dessen Länge ist fest." }
      - { wert: "keineArrayKopie", meldung: "Kopiere die Werte mit einer eigenen Schleife. `clone` und `System.arraycopy` sind wie im Programmiertest verboten." }
hinweise:
  - Lege ein Array mit `a.length + 1` Plätzen an.
  - Übertrage die alten Werte mit einer Schleife auf dieselben Plätze. Der neue Wert kommt auf den letzten Platz, Index `a.length`.
loesung: |
  **Ansatz:** Die Länge ist fest, also ein neues Array mit einem Platz mehr anlegen und füllen.
  ---
  Die alten Werte behalten ihre Indizes 0 bis `a.length - 1`. Der letzte Platz hat den Index `a.length`.
  ---
  ```java
  int[] neu = new int[a.length + 1];
  for (int i = 0; i < a.length; i++) {
      neu[i] = a[i];
  }
  neu[a.length] = wert;
  return neu;
  ```
  ---
  Probe mit dem leeren Array: Die Schleife läuft nicht, `neu[0] = wert`, Ergebnis `{wert}`.
```

```aufgabe
id: ar-neu-code-markieren
titel: Vor jedem Großbuchstaben ein Zeichen einfügen
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 2 b (umformuliert, als Methode)
angabe: |
  Implementiere `char[] markiereGross(char[] z)`. Die Methode liefert ein neues `char`-Array mit allen Zeichen von
  `z` in derselben Reihenfolge. Zusätzlich steht **vor jedem Großbuchstaben** (`'A'` bis `'Z'`) das Zeichen `'^'`.
  Vorbedingung: `z != null`. Umlaute kommen nicht vor.

  Beispiel: Aus `{'d', 'E', 'r', 'B', 'u', 'S'}` wird `{'d', '^', 'E', 'r', '^', 'B', 'u', '^', 'S'}`.

  Verwende weder `clone` noch `System.arraycopy` noch eine Methode der Klasse `Arrays`.
teile:
  - typ: code
    vorlage: |
      public class Markieren {
          public static char[] markiereGross(char[] z) {
              return z; // TODO
          }
      }
    musterloesung: |
      public class Markieren {
          public static char[] markiereGross(char[] z) {
              int gross = 0;
              for (int i = 0; i < z.length; i++) {
                  if (z[i] >= 'A' && z[i] <= 'Z') {
                      gross++;
                  }
              }
              char[] neu = new char[z.length + gross];
              int j = 0;
              for (int i = 0; i < z.length; i++) {
                  if (z[i] >= 'A' && z[i] <= 'Z') {
                      neu[j] = '^';
                      j++;
                  }
                  neu[j] = z[i];
                  j++;
              }
              return neu;
          }
      }
    tests:
      - { aufruf: "markiereGross(new char[]{'d', 'E', 'r', 'B', 'u', 'S'})", erwartet: "new char[]{'d', '^', 'E', 'r', '^', 'B', 'u', '^', 'S'}" }
      - { aufruf: "markiereGross(new char[]{'x', '3', ':'})", erwartet: "new char[]{'x', '3', ':'}", beschreibung: "ohne Großbuchstaben" }
      - { aufruf: "markiereGross(new char[0])", erwartet: "new char[0]", beschreibung: "leeres Array" }
      - { aufruf: "markiereGross(new char[]{'A', 'Z'})", erwartet: "new char[]{'^', 'A', '^', 'Z'}", beschreibung: "die Grenzen A und Z" }
      - { aufruf: "markiereGross(new char[]{'@', 'a', '[', 'Q', 'q'})", erwartet: "new char[]{'@', 'a', '[', '^', 'Q', 'q'}", versteckt: true }
    regeln: { keineArrayKopie: true, verboteneApi: ["Arrays", "Character"] }
    fehler:
      - { wert: 1, meldung: "Prüfe die Reihenfolge: Das `'^'` steht **vor** dem Großbuchstaben. Prüfe auch die Länge: ein zusätzlicher Platz pro Großbuchstabe." }
      - { wert: 4, meldung: "Auch `'A'` und `'Z'` selbst sind Großbuchstaben. Die Bedingung lautet `z[i] >= 'A' && z[i] <= 'Z'`." }
      - { wert: "keineArrayKopie", meldung: "Baue das neue Array mit einer eigenen Schleife und einem Schreibindex." }
hinweise:
  - 'Erster Durchlauf: Zähle die Großbuchstaben. Ein Zeichen `c` ist ein Großbuchstabe, wenn `c >= ''A'' && c <= ''Z''` gilt.'
  - 'Zweiter Durchlauf mit Schreibindex `j`: Bei einem Großbuchstaben zuerst `''^''` schreiben und `j` erhöhen, dann in jedem Fall das Zeichen selbst schreiben und `j` erhöhen.'
loesung: |
  **Ansatz:** Einfügen nach Plan. Erst zählen, dann ein Array mit `z.length + gross` Plätzen anlegen und mit Schreibindex `j` füllen.
  ---
  Zeichen kann man wie Zahlen vergleichen (siehe [2.5 Zeichen sind Zahlen](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)). Die Großbuchstaben haben die Nummern von `'A'` bis `'Z'`, also gilt für sie `z[i] >= 'A' && z[i] <= 'Z'`.
  ---
  ```java
  int gross = 0;
  for (int i = 0; i < z.length; i++) {
      if (z[i] >= 'A' && z[i] <= 'Z') {
          gross++;
      }
  }
  char[] neu = new char[z.length + gross];
  int j = 0;
  for (int i = 0; i < z.length; i++) {
      if (z[i] >= 'A' && z[i] <= 'Z') {
          neu[j] = '^';
          j++;
      }
      neu[j] = z[i];
      j++;
  }
  return neu;
  ```
  ---
  Probe mit dem Beispiel: drei Großbuchstaben, also Länge `6 + 3 = 9`. Am Ende ist `j = 9`, jeder Platz ist gefüllt.
```

```reflexion
frage: Warum braucht man zum Filtern zwei Schleifen, obwohl doch eine Schleife alle Elemente einmal ansieht?
antwort: |
  Ein Array muss mit seiner endgültigen Länge angelegt werden, und die Länge lässt sich danach nicht mehr ändern.
  Beim Filtern hängt die Länge aber davon ab, wie viele Elemente die Bedingung erfüllen. Das weiß man erst, wenn man
  alle Elemente angesehen hat. Darum zählt die erste Schleife die Treffer, dann wird das Array mit genau dieser
  Länge angelegt, und erst die zweite Schleife kann es füllen. Mit nur einer Schleife müsste man das neue Array
  vorher zu groß anlegen und hätte am Ende überzählige Nullen.
```

## Referenzen: zwei Namen für dasselbe Array

```aufgabe
id: ar-ref-check-equals
titel: Strings richtig vergleichen
niveau: 1
art: check
angabe: |
  Du willst prüfen, ob die beiden Strings `s` und `t` dieselben Zeichen in derselben Reihenfolge enthalten. Welcher
  Ausdruck ist dafür richtig? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: auswahl
    optionen: ['`s.equals(t)`', '`s == t`', '`s.length() == t.length()`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`==` prüft bei Strings nur, ob beide Variablen auf **dasselbe** String-Objekt zeigen. Zwei gleich geschriebene Strings können verschiedene Objekte sein.'
      - wert: 2
        meldung: Gleiche Länge heißt nicht gleicher Inhalt. `"Tor"` und `"Rot"` sind gleich lang.
loesung: |
  `equals` vergleicht die Zeichen der beiden Strings einzeln.
  ---
  `==` vergleicht nur, ob es dasselbe Objekt ist. Genau diesen Unterschied gibt es bei Arrays wieder.
```

Bisher haben wir so getan, als ob die Variable `a` das Array **ist**. Das stimmt nicht ganz. Bei Arrays steckt in
der Variable nicht der Inhalt, sondern nur ein Verweis auf den Inhalt. Diese Lektion erklärt, was das bedeutet. Die
Stelle ist für fast alle ungewohnt. Lies sie langsam, und zeichne die Bilder ruhig selbst nach.

### Was steht in einer Array-Variable?

Bei `int x = 5;` steht die Zahl 5 direkt in der Variable `x`. Das gilt für alle **primitiven Typen**, zum Beispiel
`int`, `long`, `double`, `boolean` und `char`. „Primitiv“ heißt hier „einfach“: ein einzelner Wert, der direkt in die
Variable passt.

Ein Array ist dagegen ein größeres Gebilde. Java legt es in einem eigenen Speicherbereich ab, dem **Heap**
(englisch für „Haufen“). Die Variable enthält nur die Information, **wo** das Array liegt. Diese Information heißt
**Referenz** (deutsch „Verweis“). Man stellt sie als Pfeil dar:

```text
int x = 5;               int[] a = {7, 3, 9};

  x                        a
+---+                    +---+       +---+---+---+
| 5 |                    | o-+-----> | 7 | 3 | 9 |
+---+                    +---+       +---+---+---+
                                      Array im Heap
```

Ein Bild aus dem Alltag: Die Variable `a` ist wie die Marke, die du an einer Garderobe bekommst. Auf der Marke
steht nicht dein Mantel, sondern nur die Nummer des Hakens. Wer deine Marke hat, kommt an deinen Mantel.

Ein solches Gebilde im Heap, auf das Variablen nur verweisen, heißt **Objekt**. Arrays sind Objekte, ebenso Strings
und ein `Scanner`. Variablen für Objekte heißen **Referenzvariablen**, ihre Typen **Referenztypen**.

### Zwei Variablen, ein Array

Jetzt wird es wichtig. Die Zuweisung `int[] b = a;` kopiert den Inhalt der Variable `a` nach `b`. Der Inhalt von
`a` ist aber nur der Pfeil. Also zeigt danach auch `b` auf **dasselbe** Array. Es gibt weiterhin nur ein Array, aber
zwei Namen dafür. Das nennt man **Aliasing** (*alias* heißt „auch genannt“).

:::beispiel[Eine Änderung über den zweiten Namen]
```java
int[] a = {7, 3, 9};
int[] b = a;
b[0] = 100;
System.out.println(a[0]);
System.out.println(a == b);
```

Nach den ersten beiden Zeilen sieht der Speicher so aus:

```text
  a
+---+
| o-+-----+
+---+     |      +---+---+---+
          +----> | 7 | 3 | 9 |
  b       |      +---+---+---+
+---+     |
| o-+-----+
+---+
```

1. `int[] b = a;` legt **kein** neues Array an. Es gibt nur ein `new` beziehungsweise eine Initialisierungsliste,
   also nur ein Array.
2. `b[0] = 100;` folgt dem Pfeil von `b` und ändert Platz 0 dieses einen Arrays.
3. `a[0]` folgt dem Pfeil von `a` und landet beim selben Array. Dort steht jetzt 100.
4. `a == b` vergleicht die beiden Pfeile. Sie zeigen auf dasselbe Array, also ist das Ergebnis `true`.

Die Ausgabe ist:

```
100
true
```
:::

```aufgabe
id: ar-ref-gefuehrt
titel: Ein Array mit zwei Namen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Was gibt der Code aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      int[] p = {5, 6, 7};
      int[] q = p;
      q[1] = 0;
      int[] r = {5, 0, 7};
      System.out.println(p[1]);
      System.out.println(p == q);
      System.out.println(p == r);
    loesung: |
      0
      true
      false
    fehler:
      - wert: "6\ntrue\nfalse"
        meldung: '`q = p` kopiert nur den Verweis. `p` und `q` zeigen auf dasselbe Array, darum ist die Änderung über `q` auch über `p` zu sehen.'
      - wert: "0\ntrue\ntrue"
        meldung: '`r` hat zwar denselben Inhalt, ist aber ein eigenes Array. `==` vergleicht die Verweise, nicht den Inhalt.'
gefuehrt:
  - text: Wie viele Arrays gibt es in diesem Code?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Es gibt zwei Initialisierungslisten, also zwei Arrays. `int[] q = p;` erzeugt kein neues.
  - text: Welchen Wert hat `p[1]` nach `q[1] = 0;`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`q` zeigt auf dasselbe Array wie `p`. Die Änderung ist über beide Namen sichtbar.'
  - text: Was liefert `p == r`?
    teil:
      typ: auswahl
      optionen: ['`false`', '`true`']
      richtig: [0]
    erklaerung: '`p` und `r` zeigen auf zwei verschiedene Arrays. Der gleiche Inhalt spielt für `==` keine Rolle.'
hinweise:
  - Zeichne für jede Variable einen Pfeil zum Array, auf das sie zeigt.
loesung: |
  **Ansatz:** Arrays zählen (zwei) und für jede Variable notieren, auf welches sie zeigt.
  ---
  `p` und `q` zeigen auf das erste Array. Nach `q[1] = 0` enthält es `5, 0, 7`, also ist `p[1] = 0`.
  ---
  `p == q` ist `true`, gleiche Pfeile. `p == r` ist `false`, zwei verschiedene Arrays, auch wenn der Inhalt gleich ist.
```

:::definition[Referenz und Aliasing]
Eine **Referenz** ist ein Verweis auf ein Objekt, zum Beispiel ein Array. Eine Variable eines Array-Typs enthält
nicht die Elemente, sondern eine Referenz auf das Array.

Eine Zuweisung zwischen Referenzvariablen wie `b = a` kopiert nur die Referenz. Danach zeigen beide Variablen auf
dasselbe Objekt. Diesen Zustand nennt man **Aliasing**. Eine Änderung an den Elementen über eine der Variablen
ist über jede andere Variable mit derselben Referenz sichtbar.
:::

**Beispiel:** Nach `int[] a = {1, 2}; int[] b = a;` sind `a` und `b` Aliase. `b[1] = 9` ändert auch `a[1]`.

**Kein Beispiel:** Nach `int x = 1; int y = x; y = 9;` ist `x` weiterhin 1. Bei `int` steht der Wert direkt in
der Variable, und `y = x` kopiert den Wert selbst. Es gibt kein gemeinsames Objekt.

```aufgabe
id: ar-ref-trace-pfeile
titel: Wer zeigt worauf?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  int[] a = new int[2];   // erzeugt Array A
  int[] b = {1, 2};       // erzeugt Array B
  int[] c = a;            // Zeile 3
  a = b;                  // Zeile 4
  b = c;                  // Zeile 5
  ```

  Trage nach jeder Zeile ein, auf welches Array jede Variable zeigt. Schreib dafür den Großbuchstaben `A` oder `B`.
  Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [a, b, c]
    zeilen: [nach Zeile 3, nach Zeile 4, nach Zeile 5]
    vorgabe: 1
    loesung: [[A, B, A], [B, B, A], [B, A, A]]
    fehler:
      - wert: ["A", "B", "A", "B", "B", "B", "B", "B", "B"]
        meldung: '`c = a` kopiert den Verweis, der **in diesem Moment** in `a` steht. Wenn `a` später auf etwas anderes zeigt, bleibt `c` beim alten Array A.'
      - wert: ["A", "B", "A", "B", "A", "A", "B", "A", "A"]
        meldung: '`a = b` tauscht nichts. Nur der Pfeil von `a` ändert sich, `b` zeigt nach Zeile 4 weiterhin auf B.'
hinweise:
  - Eine Zuweisung `x = y` ändert nur den Pfeil von `x`. Er zeigt danach dorthin, wohin `y` gerade zeigt.
loesung: |
  **Ansatz:** Für jede Zuweisung nur den Pfeil der linken Variable umsetzen. Alle anderen Pfeile bleiben.
  ---
  Zeile 4: `a` zeigt jetzt wie `b` auf B. `c` bleibt bei A.
  ---
  Zeile 5: `b` zeigt jetzt wie `c` auf A. Am Ende zeigen `a` auf B, `b` und `c` auf A. Die beiden Arrays haben die Namen getauscht.
```

### Was vergleicht ==?

Der Operator `==` vergleicht den Inhalt der beiden Variablen. Bei `int` ist das die Zahl. Bei Arrays ist es die
Referenz. `a == b` ist also genau dann `true`, wenn beide auf **dasselbe** Array zeigen. Zwei verschiedene Arrays
mit gleichem Inhalt sind für `==` verschieden. Das ist dieselbe Falle wie bei Strings in
[2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).

Willst du den Inhalt vergleichen, schreibst du eine Schleife. Zwei Arrays haben denselben Inhalt, wenn sie gleich
lang sind und an jeder Stelle dasselbe Element haben. Die Klasse `Arrays` hätte dafür die Methode `Arrays.equals`,
aber im Programmiertest sind von `Arrays` nur `toString` und `deepToString` erlaubt.

:::beispiel[Gleich oder dasselbe?]
```java
int[] x = {4, 5};
int[] y = {4, 5};
int[] z = x;
System.out.println(x == y);
System.out.println(x == z);

boolean gleich = x.length == y.length;
for (int i = 0; i < x.length && gleich; i++) {
    if (x[i] != y[i]) {
        gleich = false;
    }
}
System.out.println(gleich);
```

1. `x` und `y` sind zwei Arrays, denn es gibt zwei Initialisierungslisten. `x == y` ist `false`.
2. `z` ist ein zweiter Name für das Array von `x`. `x == z` ist `true`.
3. Der Inhaltsvergleich prüft zuerst die Länge. Sind die Längen verschieden, steht `gleich` schon auf `false`, und
   die Schleife läuft gar nicht. Die Bedingung `i < x.length && gleich` beendet die Schleife beim ersten Unterschied.
4. Hier sind beide Längen 2 und beide Elemente gleich. Also bleibt `gleich` auf `true`.

Die Ausgabe ist:

```
false
true
true
```
:::

:::achtung[Gleiche Arrays mit == vergleichen]
```java
int[] soll = {1, 2, 3};
int[] ist = {1, 2, 3};
if (ist == soll) {                  // falsch: immer false bei zwei Arrays
    System.out.println("korrekt");
}
```

Hier erscheint nie `korrekt`, obwohl der Inhalt übereinstimmt. `ist` und `soll` sind zwei verschiedene Arrays, und
`==` vergleicht nur, ob die Pfeile auf dasselbe Array zeigen. Für den Inhalt braucht es eine Schleife, die Länge und
jedes Element vergleicht.
:::

```aufgabe
id: ar-ref-rf-grundlagen
titel: Aussagen über Referenzen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach `int[] b = a;` gibt es zwei Arrays mit demselben Inhalt.
        richtig: false
        erklaerung: Es gibt nur ein Array. `b = a` kopiert den Verweis, beide Variablen zeigen auf dasselbe Array.
      - text: '`a == b` ist genau dann `true`, wenn `a` und `b` auf dasselbe Array zeigen.'
        richtig: true
        erklaerung: '`==` vergleicht bei Arrays die Referenzen, nicht den Inhalt.'
      - text: Eine Variable vom Typ `int` enthält eine Referenz auf eine Zahl.
        richtig: false
        erklaerung: '`int` ist ein primitiver Typ. Die Zahl steht direkt in der Variable.'
      - text: Zwei Arrays mit gleicher Länge und gleichen Elementen sind für `==` gleich.
        richtig: false
        erklaerung: Für `==` zählt nur, ob es dasselbe Array ist. Den Inhalt vergleicht man mit einer Schleife.
    fehler:
      - wert: [r, r, f, f]
        meldung: '`b = a` erzeugt kein neues Array. Ein neues Array entsteht nur mit `new` oder einer Initialisierungsliste.'
      - wert: [f, r, f, r]
        meldung: '`==` sieht den Inhalt gar nicht an. Es prüft nur, ob beide Pfeile auf dasselbe Array zeigen.'
hinweise:
  - Ein neues Array entsteht nur mit `new` oder mit `{…}` beim Anlegen.
loesung: |
  **Ansatz:** Primitive Typen enthalten den Wert, Array-Variablen eine Referenz. `==` vergleicht den Inhalt der Variablen.
  ---
  Nur Aussage 2 ist richtig. `b = a` erzeugt kein zweites Array, `int` enthält keine Referenz, und `==` ignoriert den Inhalt der Arrays.
```

```aufgabe
id: ar-ref-code-gleich
titel: Inhalt zweier Arrays vergleichen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Implementiere `boolean gleicherInhalt(int[] a, int[] b)`. Die Methode liefert `true`, wenn beide Arrays gleich
  lang sind und an jeder Stelle denselben Wert haben, sonst `false`. Vorbedingung: `a != null` und `b != null`.
  Verwende keine Methode der Klasse `Arrays`.
teile:
  - typ: code
    vorlage: |
      public class Vergleich {
          public static boolean gleicherInhalt(int[] a, int[] b) {
              return a == b; // TODO
          }
      }
    musterloesung: |
      public class Vergleich {
          public static boolean gleicherInhalt(int[] a, int[] b) {
              if (a.length != b.length) {
                  return false;
              }
              for (int i = 0; i < a.length; i++) {
                  if (a[i] != b[i]) {
                      return false;
                  }
              }
              return true;
          }
      }
    tests:
      - { aufruf: "gleicherInhalt(new int[]{1, 2}, new int[]{1, 2})", erwartet: "true", beschreibung: "zwei Arrays, gleicher Inhalt" }
      - { aufruf: "gleicherInhalt(new int[]{1, 2}, new int[]{1, 2, 3})", erwartet: "false", beschreibung: "verschieden lang" }
      - { aufruf: "gleicherInhalt(new int[]{4, 5}, new int[]{5, 4})", erwartet: "false", beschreibung: "gleiche Werte, andere Reihenfolge" }
      - { aufruf: "gleicherInhalt(new int[0], new int[0])", erwartet: "true", beschreibung: "zwei leere Arrays" }
      - { vorher: "int[] a = {3, 3};", aufruf: "gleicherInhalt(a, a)", erwartet: "true", versteckt: true }
      - { aufruf: "gleicherInhalt(new int[]{1, 2, 3}, new int[]{1, 2})", erwartet: "false", versteckt: true }
    regeln: { verboteneApi: ["Arrays"] }
    fehler:
      - { wert: 1, meldung: "`==` vergleicht nur die Referenzen. Für zwei verschiedene Arrays ist es immer `false`, auch bei gleichem Inhalt." }
      - { wert: 2, meldung: "Prüfe zuerst die Längen. Bei verschiedenen Längen sind die Inhalte nie gleich, und der Zugriff auf `b[i]` könnte sonst aus dem Array hinauslaufen." }
      - { wert: 3, meldung: "Es genügt nicht, dass dieselben Werte vorkommen. Vergleiche an **jeder Stelle** `a[i]` mit `b[i]`." }
hinweise:
  - Vergleiche zuerst die Längen. Sind sie verschieden, steht das Ergebnis sofort fest.
  - Durchlaufe dann beide Arrays mit demselben Index. Beim ersten Unterschied lieferst du `false`. Erst nach der Schleife steht `true` fest.
loesung: |
  **Ansatz:** Inhaltsvergleich in zwei Stufen: Länge, dann jedes Element. Das Muster ist dasselbe wie bei der Suche.
  ---
  Ein einziger Unterschied genügt für `false`. Darum endet die Methode beim ersten Unterschied, und `return true;` steht hinter der Schleife.
  ---
  ```java
  if (a.length != b.length) {
      return false;
  }
  for (int i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
          return false;
      }
  }
  return true;
  ```
  ---
  Probe: Zwei leere Arrays sind gleich lang, die Schleife läuft nicht, Ergebnis `true`.
```

### Ein neues Array zuweisen

Eine Zuweisung an die **Variable** ändert nur deren Pfeil. Eine Zuweisung an ein **Element** ändert das Array. Diesen
Unterschied musst du in jeder Zeile genau beachten:

- `b[0] = 5;` folgt dem Pfeil von `b` und ändert das Array. Alle Aliase sehen die Änderung.
- `b = new int[3];` biegt nur den Pfeil von `b` auf ein neues Array um. Das alte Array bleibt unverändert, und alle
  anderen Variablen zeigen weiter dorthin, wo sie vorher hinzeigten.

Zeigt auf ein Array gar kein Pfeil mehr, kann das Programm es nie wieder erreichen. Java gibt seinen Speicher dann
irgendwann automatisch frei. Den Teil von Java, der das erledigt, nennt man **Garbage Collector** („Müllabfuhr“).

:::beispiel[Pfeile umbiegen]
```java
int[] a = {1, 2, 3};
int[] b = a;
b = new int[]{8, 8};
b[0] = 5;
a = b;
System.out.println(Arrays.toString(a));
System.out.println(Arrays.toString(b));
```

1. Zeile 1 und 2: Ein Array `1, 2, 3` mit den Namen `a` und `b`.
2. `b = new int[]{8, 8};` erzeugt ein zweites Array. Nur der Pfeil von `b` zeigt dorthin, `a` zeigt weiter auf `1, 2, 3`.
3. `b[0] = 5;` ändert das zweite Array zu `5, 8`. Das erste bleibt `1, 2, 3`.
4. `a = b;` biegt auch den Pfeil von `a` auf das zweite Array. Auf `1, 2, 3` zeigt jetzt keine Variable mehr. Es ist
   für das Programm verloren.

Die Ausgabe ist:

```
[5, 8]
[5, 8]
```
:::

:::achtung[Eine „Kopie“ mit dem Gleichheitszeichen]
Genau dieser Fehler steckt in Aufgabe 1 von Blatt 4. Eine Methode legt scheinbar eine Kopie an und arbeitet darauf:

```java
int[] kopie = werte;                // falsch: keine Kopie
for (int i = 0; i < kopie.length; i++) {
    if (kopie[i] < 0) {
        kopie[i] = 0;
    }
}
```

Für `werte = {-4, 6, -8}` steht danach auch in `werte` der Inhalt `0, 6, 0`. Der Name `kopie` täuscht. `kopie`
und `werte` zeigen auf dasselbe Array, jede Änderung trifft das Original. Für eine echte Kopie braucht es
`new int[werte.length]` und eine Schleife, die jeden Wert überträgt (siehe
[12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen)).
:::

:::achtung[Eine Referenz auf nichts: null]
Eine Referenzvariable kann statt eines Pfeils den besonderen Wert `null` enthalten. `null` heißt „zeigt auf
nichts“. Folgt man diesem Pfeil, bricht das Programm ab:

```java
int[] d = null;
System.out.println(d.length);       // falsch: NullPointerException
```

Die Meldung lautet `java.lang.NullPointerException: Cannot read the array length because "d" is null`. Übersetzt:
„Die Länge des Arrays kann nicht gelesen werden, weil `d` null ist.“ (IntelliJ zeigt den Variablennamen `"d"`. Wer
ohne Debug-Informationen übersetzt, etwa mit einem einfachen `javac`-Aufruf im Terminal, sieht stattdessen einen
Platzhalter wie `"<local1>"`.) Ein leeres Array `new int[0]` ist dagegen
ein echtes Array der Länge 0. Darum steht in Vorbedingungen oft `a != null`, und das ist etwas anderes als
`a.length > 0`.
:::

```aufgabe
id: ar-ref-ausgabe-pfeile
titel: Pfeile umbiegen und Elemente ändern
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: Was gibt der Code aus? Zeichne die Pfeile mit.
teile:
  - typ: ausgabe
    code: |
      int[] x = {1, 2, 3};
      int[] y = x;
      x[0] = 10;
      y = new int[]{4, 5, 6};
      y[1] = x[0];
      int[] z = x;
      x = y;
      x[2] = 0;
      System.out.println(Arrays.toString(x));
      System.out.println(Arrays.toString(y));
      System.out.println(Arrays.toString(z));
      System.out.println((x == y) + " " + (y == z));
    loesung: |
      [4, 10, 0]
      [4, 10, 0]
      [10, 2, 3]
      true false
    fehler:
      - wert: "[4, 10, 0]\n[4, 10, 6]\n[10, 2, 3]\nfalse false"
        meldung: '`x = y` erzeugt keine Kopie. Danach zeigen `x` und `y` auf dasselbe Array, und `x[2] = 0` ist auch über `y` zu sehen.'
      - wert: "[4, 10, 0]\n[4, 10, 0]\n[4, 10, 0]\ntrue true"
        meldung: '`z = x` kopiert den Pfeil, der **in diesem Moment** in `x` steht. Dass `x` danach umgebogen wird, ändert `z` nicht.'
      - wert: "[4, 1, 0]\n[4, 1, 0]\n[10, 2, 3]\ntrue false"
        meldung: '`y[1] = x[0]` liest den **aktuellen** Wert von `x[0]`. Die Zeile `x[0] = 10` davor hat ihn schon auf 10 geändert.'
hinweise:
  - Es gibt genau zwei Arrays. Nenne sie A (`{1, 2, 3}`) und B (`{4, 5, 6}`) und notiere nach jeder Zeile, wohin `x`, `y` und `z` zeigen.
  - Unterscheide bei jeder Zeile, ob ein Element geändert wird oder ein Pfeil umgebogen wird.
loesung: |
  **Ansatz:** Zwei Arrays A und B. Für jede Zeile entweder ein Element ändern oder einen Pfeil umsetzen.
  ---
  `x` und `y` zeigen auf A. `x[0] = 10` macht A zu `10, 2, 3`. Dann zeigt `y` auf B = `4, 5, 6`.
  ---
  `y[1] = x[0]` macht B zu `4, 10, 6`. `z` zeigt auf A. `x = y` setzt `x` auf B. `x[2] = 0` macht B zu `4, 10, 0`.
  ---
  `x` und `y` zeigen auf B, `z` auf A. Also `x == y` ist `true`, `y == z` ist `false`.
```

```aufgabe
id: ar-ref-zaehlen
titel: Wie viele Arrays gibt es?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  int[] p = new int[3];
  int[] q = {1, 2};
  int[] r = p;
  q = new int[]{4};
  p = q;
  int[] s = r;
  ```

  a) Wie viele Arrays werden insgesamt erzeugt?

  b) Auf wie viele dieser Arrays zeigt am Ende noch mindestens eine Variable?
teile:
  - typ: zahl
    label: a)
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: Nicht jede Zeile erzeugt ein Array. Nur `new` und eine Initialisierungsliste `{…}` erzeugen eines. Zuweisungen wie `r = p` kopieren nur Pfeile.
      - wert: "4"
        meldung: '`int[] s = r;` legt eine neue Variable an, aber kein neues Array.'
  - typ: zahl
    label: b)
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: 'Auf das Array `{1, 2}` zeigte nur `q`, und `q` wurde umgebogen. Danach erreicht es keine Variable mehr.'
      - wert: "1"
        meldung: '`r` und `s` zeigen weiter auf das Array aus `new int[3]`. Dass `p` umgebogen wurde, ändert ihre Pfeile nicht.'
hinweise:
  - Zähle für a) nur die Stellen mit `new` oder `{…}`.
  - Notiere für b) nach jeder Zeile, wohin `p`, `q`, `r` und `s` zeigen.
loesung: |
  **Ansatz:** Arrays entstehen nur durch `new` oder `{…}`. Danach für jede Variable den letzten Pfeil bestimmen.
  ---
  a) Erzeugt werden `new int[3]` (A), `{1, 2}` (B) und `new int[]{4}` (C). Das sind 3 Arrays.
  ---
  b) Am Ende zeigen `p` und `q` auf C, `r` und `s` auf A. Auf B zeigt niemand mehr. Erreichbar sind also 2 Arrays.
```

```aufgabe
id: ar-ref-text-gleich
titel: Zusatzfrage zum Vergleich mit ==
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfrage 4 zu Aufgabenblatt 4, WS 2023 (umformuliert)
angabe: |
  Im Feedbackgespräch kommt die Frage: „Taugt `==`, um zwei Arrays zu vergleichen? Was
  prüft der Operator dabei genau?“ Antworte in drei bis fünf Sätzen und nenne, wie man es richtig macht.
teile:
  - typ: text
    muster: |
      Meistens ist es nicht sinnvoll. Eine Array-Variable enthält nur eine Referenz auf das Array, und == vergleicht
      genau diese Referenzen. Das Ergebnis ist also nur dann true, wenn beide Variablen auf dasselbe Array zeigen.
      Zwei verschiedene Arrays mit gleichem Inhalt liefern false. Will man den Inhalt vergleichen, prüft man zuerst
      die Längen und dann in einer Schleife jedes Element. Sinnvoll ist == nur, wenn man wirklich wissen will, ob zwei
      Variablen Aliase für dasselbe Array sind.
hinweise:
  - Was steht in einer Array-Variable, die Elemente oder eine Referenz?
  - Nenne den Fall, in dem `==` trotz gleichem Inhalt `false` liefert, und die richtige Alternative.
loesung: |
  **Ansatz:** Erst sagen, was `==` vergleicht, dann die Folge für gleiche Inhalte, dann die Alternative.
  ---
  `==` vergleicht die Referenzen. Es ist nur `true`, wenn beide Variablen auf dasselbe Array zeigen.
  ---
  Für den Inhalt vergleicht man die Längen und danach jedes Element in einer Schleife.
```

```aufgabe
id: ar-ref-quiz
titel: Vier Aussagen zu einem Codestück
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  Gegeben ist

  ```java
  int[] a = {3, 1, 2};
  int[] b = a;
  int[] c = {3, 1, 2};
  b[1] = 5;
  c = b;
  a = new int[3];
  ```

  Beurteile jede Aussage über den Zustand **nach** dem letzten Befehl.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`b == c` ist `true`.'
        richtig: true
        erklaerung: '`c = b` hat den Pfeil von `c` auf das Array von `b` gesetzt. Beide zeigen auf dasselbe Array.'
      - text: '`a[1]` hat den Wert 5.'
        richtig: false
        erklaerung: '`a` zeigt zum Schluss auf ein neues Array aus `new int[3]`. Dort steht überall 0.'
      - text: Auf das Array, das in der dritten Zeile angelegt wurde, zeigt keine Variable mehr.
        richtig: true
        erklaerung: Nur `c` zeigte darauf, und `c` wurde auf das Array von `b` umgebogen.
      - text: '`c[1]` hat den Wert 1.'
        richtig: false
        erklaerung: '`c` zeigt auf das erste Array. Dort wurde über `b` die Stelle 1 auf 5 gesetzt.'
    fehler:
      - wert: [r, r, r, f]
        meldung: '`a = new int[3]` biegt nur den Pfeil von `a` um. Das Array mit der 5 hat `a` dadurch verlassen.'
      - wert: [f, f, r, r]
        meldung: Nach `c = b` ist `c` ein weiterer Name für das erste Array. Seine Elemente sind die von `b`, also `3, 5, 2`.
      - wert: [r, f, f, f]
        meldung: Welche Variable zeigte auf das zweite Array `{3, 1, 2}`? Was passierte mit ihr in der fünften Zeile?
hinweise:
  - Es gibt drei Arrays. Nenne sie nach ihrer Entstehung A, B und C und notiere nach jeder Zeile die Pfeile.
  - Am Ende zeigen `b` und `c` auf A, `a` auf C. Auf B zeigt niemand.
loesung: |
  **Ansatz:** Arrays benennen. A entsteht in Zeile 1, B in Zeile 3, C in Zeile 6. Dann Pfeile und Elemente mitschreiben.
  ---
  Zeile 2: `b` zeigt auf A. Zeile 4: A wird `3, 5, 2`. Zeile 5: `c` zeigt auf A, B ist nicht mehr erreichbar.
  ---
  Zeile 6: `a` zeigt auf C mit `0, 0, 0`. Also ist `b == c` wahr, `a[1]` ist 0, B ist verloren, und `c[1]` ist 5.
  ---
  Richtig sind die Aussagen 1 und 3.
```

## Arrays als Parameter und Rückgabewert

```aufgabe
id: ar-par-check-kopie
titel: Was bekommt eine Methode beim Aufruf?
niveau: 1
art: check
angabe: |
  Gegeben ist `int x = 4;` und der Aufruf `verdopple(x);`. Was bekommt die Methode `verdopple`?
  (Wiederholung: [6.2 Parameter](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: auswahl
    optionen: ['eine Kopie des Werts 4 in einer eigenen Variable', 'die Variable `x` selbst', 'nichts, weil `x` keine Methode ist']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Java übergibt immer nur den Wert. Der Parameter ist eine eigene Variable, die mit einer Kopie dieses Werts beginnt.
      - wert: 2
        meldung: Beim Aufruf wird der Wert des Arguments in den Parameter kopiert. Das funktioniert mit jeder Variable.
loesung: |
  Beim Aufruf wird der Wert des Arguments in den Parameter kopiert. Das heißt **call-by-value**.
  ---
  Eine Zuweisung an den Parameter ändert deshalb das `x` des Aufrufers nicht.
```

In [6.2 Parameter](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben) hast du gelernt: Java kopiert
beim Aufruf den Wert des Arguments in den Parameter. Diese Regel heißt **call-by-value** (Aufruf mit dem Wert) und
gilt ohne Ausnahme, auch für Arrays. Neu ist nur, **was** dabei kopiert wird. Eine Array-Variable enthält eine
Referenz (siehe [12.5 Referenzen](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array)). Also wird die
Referenz kopiert, nicht das Array.

Die Folge: Der Parameter in der Methode und die Variable des Aufrufers zeigen auf **dasselbe** Array. Der
Parameter ist ein Alias. Daraus ergeben sich zwei Regeln, die du in jeder Aufgabe zu Methoden mit Arrays brauchst:

1. Ändert die Methode **Elemente** (`a[i] = …`), sieht der Aufrufer die Änderung.
2. Weist die Methode dem **Parameter** ein anderes Array zu (`a = …`), ändert sich nur der Pfeil des Parameters.
   Der Aufrufer merkt davon nichts.

### Elemente ändern: der Aufrufer sieht es

:::beispiel[Ein Array in einer void-Methode füllen]
```java
public class Fuellen {
    public static void fuelle(int[] feld, int start) {
        for (int i = 0; i < feld.length; i++) {
            feld[i] = start + i;
        }
    }

    public static void main(String[] args) {
        int[] zahlen = new int[4];
        fuelle(zahlen, 10);
        System.out.println(Arrays.toString(zahlen));
    }
}
```

Beim Aufruf `fuelle(zahlen, 10)` wird die Referenz aus `zahlen` in den Parameter `feld` kopiert:

```text
  main: zahlen
+---+
| o-+-----+
+---+     |      +----+----+----+----+
          +----> |  0 |  0 |  0 |  0 |
  fuelle: feld   +----+----+----+----+
+---+     |
| o-+-----+
+---+
```

1. Die Schleife schreibt über `feld` die Werte 10, 11, 12 und 13 in das Array. Es ist dasselbe Array, auf das auch
   `zahlen` zeigt.
2. Nach dem Ende von `fuelle` verschwindet der Parameter `feld`. Das Array bleibt, und `zahlen` zeigt weiterhin darauf.
3. Darum gibt `main` den gefüllten Inhalt aus.

Die Ausgabe ist `[10, 11, 12, 13]`. (Die Klasse beginnt mit `import java.util.Arrays;`, die Zeile ist hier
weggelassen.)

Das beantwortet eine Frage von Blatt 4: Eine Methode, die ein Array füllt, braucht keinen Rückgabewert. Sie
bekommt eine Referenz auf das Array des Aufrufers und schreibt direkt hinein. Man nennt eine solche Änderung einen
**Seiteneffekt**, weil die Methode etwas außerhalb ihrer eigenen Variablen verändert.
:::

```aufgabe
id: ar-par-gefuehrt
titel: Ein Array und eine Zahl als Parameter
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Aendern {
          public static void aendere(int[] a, int x) {
              a[0] = 100;
              x = 100;
          }

          public static void main(String[] args) {
              int[] feld = {1, 2, 3};
              int zahl = 5;
              aendere(feld, zahl);
              System.out.println(feld[0]);
              System.out.println(zahl);
          }
      }
    loesung: |
      100
      5
    fehler:
      - wert: "1\n5"
        meldung: Der Parameter `a` zeigt auf dasselbe Array wie `feld`. `a[0] = 100` ändert dieses eine Array, und `main` sieht die Änderung.
      - wert: "100\n100"
        meldung: '`x` ist eine Kopie der Zahl 5. Die Zuweisung `x = 100` ändert nur diese Kopie, `zahl` in `main` bleibt 5.'
gefuehrt:
  - text: Was wird beim Aufruf in den Parameter `a` kopiert?
    teil:
      typ: auswahl
      optionen: ['die Referenz auf das Array von `feld`', 'ein neues Array mit den Werten 1, 2, 3', 'nur die Zahl 1']
      richtig: [0]
    erklaerung: Call-by-value kopiert den Inhalt der Variable `feld`. Das ist die Referenz.
  - text: Welchen Wert hat `feld[0]` nach dem Aufruf?
    teil: { typ: zahl, loesung: "100" }
    erklaerung: '`a[0] = 100` ändert das gemeinsame Array.'
  - text: Welchen Wert hat `zahl` nach dem Aufruf?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '`x` war nur eine Kopie von 5. Die Zuweisung an `x` erreicht `zahl` nicht.'
hinweise:
  - Bei `int` wird die Zahl kopiert, bei `int[]` die Referenz.
loesung: |
  **Ansatz:** Für jeden Parameter fragen, was kopiert wird: bei `a` die Referenz, bei `x` die Zahl.
  ---
  `a[0] = 100` folgt der Referenz und ändert das Array von `main`. `x = 100` ändert nur die Kopie. Ausgabe `100` und `5`.
```

```aufgabe
id: ar-par-rf
titel: Aussagen über Array-Parameter
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine `void`-Methode kann den Inhalt eines übergebenen Arrays verändern.
        richtig: true
        erklaerung: Sie bekommt eine Referenz auf das Array des Aufrufers und kann seine Elemente überschreiben.
      - text: Weist eine Methode ihrem Array-Parameter ein neues Array zu, zeigt danach auch die Variable des Aufrufers darauf.
        richtig: false
        erklaerung: Die Zuweisung ändert nur den Pfeil des Parameters. Die Variable des Aufrufers ist eine andere Variable.
      - text: Eine Methode kann mehrere Werte zurückgeben, indem sie ein Array zurückgibt.
        richtig: true
        erklaerung: Ein Array ist ein einziger Rückgabewert, kann aber beliebig viele Elemente enthalten.
      - text: Java übergibt Arrays anders als `int`-Werte, nämlich nicht mit call-by-value.
        richtig: false
        erklaerung: Es ist immer call-by-value. Bei Arrays ist der kopierte Wert eben eine Referenz.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`a = new int[3]` in der Methode biegt nur den Pfeil des Parameters um. Der Aufrufer behält seinen Pfeil.'
      - wert: [r, f, r, r]
        meldung: Auch bei Arrays wird der Inhalt der Variable kopiert. Der Unterschied ist nur, dass dieser Inhalt eine Referenz ist.
hinweise:
  - Unterscheide zwischen einer Änderung an einem Element und einer Zuweisung an den Parameter selbst.
loesung: |
  **Ansatz:** Call-by-value gilt immer. Bei Arrays wird die Referenz kopiert, also sind Parameter und Argument Aliase.
  ---
  Richtig sind 1 und 3. Elemente ändern wirkt nach außen, eine neue Zuweisung an den Parameter nicht. Mehrere Werte packt man in ein Array.
```

### Den Parameter neu zuweisen: der Aufrufer sieht nichts

:::beispiel[Ein neues Array im Parameter]
```java
public class Ersetzen {
    public static void ersetze(int[] werte) {
        werte = new int[]{9, 9};
        werte[0] = 1;
        System.out.println(Arrays.toString(werte));
    }

    public static void main(String[] args) {
        int[] a = {4, 5, 6};
        ersetze(a);
        System.out.println(Arrays.toString(a));
    }
}
```

Direkt nach `werte = new int[]{9, 9};` sieht der Speicher so aus:

```text
  main: a                   +---+---+---+
+---+                       | 4 | 5 | 6 |
| o-+---------------------> +---+---+---+
+---+
  ersetze: werte            +---+---+
+---+                       | 9 | 9 |
| o-+---------------------> +---+---+
+---+
```

1. Beim Aufruf zeigt `werte` zunächst auf das Array von `a`.
2. `werte = new int[]{9, 9};` erzeugt ein neues Array und biegt nur den Pfeil von `werte` dorthin. `a` zeigt
   unverändert auf `4, 5, 6`.
3. `werte[0] = 1;` ändert das neue Array zu `1, 9`. Die Methode gibt es aus.
4. Nach der Methode ist das neue Array nicht mehr erreichbar. `main` gibt das unveränderte Original aus.

Die Ausgabe ist:

```
[1, 9]
[4, 5, 6]
```
:::

:::achtung[Das Ergebnis im Parameter abliefern wollen]
Genau so ist es in Aufgabe 1 d von Blatt 4. Eine Methode soll ein Array mit neuem Inhalt liefern:

```java
public static void neuerInhalt(int[] werte) {
    int[] hilfe = new int[werte.length];
    for (int i = 0; i < hilfe.length; i++) {
        hilfe[i] = i * i;
    }
    werte = hilfe;              // falsch: erreicht den Aufrufer nicht
}
```

Nach `neuerInhalt(feld);` hat `feld` in `main` weiterhin den alten Inhalt. Die letzte Zeile ändert nur den Pfeil
der lokalen Variable `werte`, und die verschwindet am Ende der Methode. Es gibt zwei Reparaturen. Entweder die
Methode schreibt die Werte direkt in das übergebene Array, also `werte[i] = i * i;`. Oder sie gibt das neue Array
zurück, mit dem Kopf `int[] neuerInhalt(int[] werte)` und dem Aufruf `feld = neuerInhalt(feld);`.
:::

```aufgabe
id: ar-par-zeilen
titel: Welche Zeilen ändern das Array des Aufrufers?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  `main` ruft `m(feld)` mit `int[] feld = {1, 2, 3};` auf. Markiere **alle Zeilen, die ein Element des Arrays
  von `feld` verändern**.
teile:
  - typ: zeilen
    code: |
      public static void m(int[] a) {
          int[] b = a;
          b[0] = 7;
          a[1] = b[0];
          a = new int[3];
          a[0] = 9;
          b[2] = a[0];
      }
    loesung: [3, 4, 7]
    fehler:
      - wert: [3, 4]
        meldung: '`b` zeigt auch nach Zeile 5 noch auf das Array von `feld`. Nur `a` wurde umgebogen. Zeile 7 schreibt also in das Original.'
      - wert: [3, 4, 6, 7]
        meldung: 'Nach Zeile 5 zeigt `a` auf ein neues Array. Zeile 6 ändert dieses neue Array, nicht das von `feld`.'
      - wert: [4, 7]
        meldung: '`b = a` erzeugt keine Kopie. `b[0] = 7` ändert das Array, auf das auch `feld` zeigt.'
hinweise:
  - Notiere nach jeder Zeile, wohin `a` und `b` zeigen. Am Anfang zeigen beide auf das Array von `feld`.
  - Eine Zeile verändert das Original genau dann, wenn sie ein Element über eine Variable ändert, die gerade auf das Original zeigt.
loesung: |
  **Ansatz:** Pfeile verfolgen. Zuerst zeigen `a` und `b` auf das Original. Ab Zeile 5 zeigt nur noch `b` dorthin.
  ---
  Zeile 3 und 4 ändern das Original, denn `b` und `a` zeigen darauf. Es wird zu `7, 7, 3`.
  ---
  Zeile 6 ändert das neue Array von `a`. Zeile 7 schreibt über `b` in das Original den Wert `a[0] = 9`. Das Original ist am Ende `7, 7, 9`.
```

### Ein Array zurückgeben

Eine Methode kann ein Array auch als Ergebnis liefern. Der Rückgabetyp lautet dann `int[]`. Zurückgegeben wird,
wie immer, ein Wert, hier also eine Referenz. Der Aufrufer speichert sie in einer eigenen Variable. Das ist der
übliche Weg, wenn eine Methode ein **neues** Array erzeugt, etwa beim Filtern aus
[12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen).

Ein Array als Rückgabewert löst außerdem ein Problem aus
[6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return): Eine Methode hat nur einen
Rückgabewert. Braucht man zwei Ergebnisse, packt man sie in ein Array der Länge 2.

:::beispiel[Zwei Summen in einem Array zurückgeben]
```java
public class Summen {
    public static int[] summen(int[] a) {
        int[] ergebnis = new int[2];
        for (int i = 0; i < a.length; i++) {
            if (a[i] > 0) {
                ergebnis[0] = ergebnis[0] + a[i];
            } else {
                ergebnis[1] = ergebnis[1] + a[i];
            }
        }
        return ergebnis;
    }

    public static void main(String[] args) {
        int[] werte = {12, -40, 7, -3, 25};
        int[] s = summen(werte);
        System.out.println("positiv: " + s[0]);
        System.out.println("negativ: " + s[1]);
    }
}
```

1. `int[] summen(int[] a)` sagt: Die Methode bekommt ein `int`-Array und liefert ein `int`-Array.
2. Das Ergebnis-Array hat zwei Plätze, beide beginnen mit 0. Platz 0 sammelt die positiven Werte, Platz 1 die übrigen.
3. Positiv: `12 + 7 + 25 = 44`. Negativ: `-40 + (-3) = -43`.
4. `return ergebnis;` liefert die Referenz. In `main` zeigt danach `s` auf dieses Array.

Die Ausgabe ist:

```
positiv: 44
negativ: -43
```

Die Methode verändert `werte` nicht. Sie liest es nur.
:::

:::achtung[Den Rückgabewert wegwerfen]
```java
int[] z = {1, 4, 7};
verdoppelt(z);                         // falsch: Ergebnis geht verloren
System.out.println(Arrays.toString(z));
```

Liefert `verdoppelt` ein **neues** Array mit den doppelten Werten, gibt diese Ausgabe weiterhin `[1, 4, 7]` aus.
Das neue Array wurde zwar erzeugt, aber keine Variable zeigt darauf. Java meldet dabei keinen Fehler. Richtig ist
`z = verdoppelt(z);` oder `int[] d = verdoppelt(z);`. Frag dich bei jedem Aufruf: Ändert die Methode das
übergebene Array (dann reicht der Aufruf), oder liefert sie ein neues (dann muss ich es speichern)?
:::

```aufgabe
id: ar-par-rueckgabe
titel: Gespeichert oder weggeworfen?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Doppelt {
          public static int[] verdoppelt(int[] a) {
              int[] n = new int[a.length];
              for (int i = 0; i < a.length; i++) {
                  n[i] = 2 * a[i];
              }
              return n;
          }

          public static void main(String[] args) {
              int[] z = {1, 4, 7};
              verdoppelt(z);
              System.out.println(Arrays.toString(z));
              int[] w = verdoppelt(z);
              System.out.println(Arrays.toString(w));
              z = verdoppelt(w);
              System.out.println(Arrays.toString(z));
              System.out.println(w == z);
          }
      }
    loesung: |
      [1, 4, 7]
      [2, 8, 14]
      [4, 16, 28]
      false
    fehler:
      - wert: "[2, 8, 14]\n[4, 16, 28]\n[8, 32, 56]\nfalse"
        meldung: '`verdoppelt` ändert das übergebene Array nicht. Es erzeugt ein neues. Der erste Aufruf wirft dieses neue Array weg, `z` bleibt `[1, 4, 7]`.'
      - wert: "[1, 4, 7]\n[2, 8, 14]\n[4, 16, 28]\ntrue"
        meldung: Jeder Aufruf von `verdoppelt` erzeugt mit `new` ein eigenes Array. `w` und `z` zeigen auf zwei verschiedene Arrays.
hinweise:
  - '`verdoppelt` liest `a` nur und schreibt in ein neues Array `n`.'
  - Ein Ergebnis kommt nur dann an, wenn es einer Variable zugewiesen wird.
loesung: |
  **Ansatz:** Für jeden Aufruf prüfen, ob sein Ergebnis gespeichert wird. Das übergebene Array bleibt immer unverändert.
  ---
  Der erste Aufruf wird weggeworfen, `z` bleibt `[1, 4, 7]`. Dann ist `w = [2, 8, 14]`.
  ---
  `verdoppelt(w)` liefert `[4, 16, 28]`, und `z` zeigt darauf.
  ---
  `w` und `z` stammen aus zwei Aufrufen mit je einem `new`. Es sind zwei Arrays, `w == z` ist `false`.
```

```aufgabe
id: ar-par-code-minmax
titel: Minimum und Maximum als Array zurückgeben
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Implementiere `int[] minMax(int[] a)`. Die Methode liefert ein neues Array der Länge 2. Auf Index 0 steht der
  kleinste, auf Index 1 der größte Wert von `a`. Das Array `a` darf nicht verändert werden.
  Vorbedingung: `a != null` und `a.length > 0`. Verwende keine Methode der Klasse `Arrays`.

  Beispiel: `minMax(new int[]{4, -2, 9, 0})` liefert `{-2, 9}`.
teile:
  - typ: code
    vorlage: |
      public class MinMax {
          public static int[] minMax(int[] a) {
              return new int[2]; // TODO
          }
      }
    musterloesung: |
      public class MinMax {
          public static int[] minMax(int[] a) {
              int min = a[0];
              int max = a[0];
              for (int i = 1; i < a.length; i++) {
                  if (a[i] < min) {
                      min = a[i];
                  }
                  if (a[i] > max) {
                      max = a[i];
                  }
              }
              return new int[]{min, max};
          }
      }
    tests:
      - { aufruf: "minMax(new int[]{4, -2, 9, 0})", erwartet: "new int[]{-2, 9}" }
      - { aufruf: "minMax(new int[]{7})", erwartet: "new int[]{7, 7}", beschreibung: "ein Element" }
      - { aufruf: "minMax(new int[]{-5, -8, -1})", erwartet: "new int[]{-8, -1}", beschreibung: "nur negative Werte" }
      - { aufruf: "minMax(new int[]{3, 8, 5})", erwartet: "new int[]{3, 8}", beschreibung: "nur positive Werte" }
      - { vorher: "int[] a = {3, 1, 2};", aufruf: "minMax(a)", ergebnis: "a", erwartet: "new int[]{3, 1, 2}", beschreibung: "a bleibt unverändert" }
    regeln: { verboteneApi: ["Arrays"] }
    fehler:
      - { wert: 3, meldung: "Bei lauter negativen Werten liefert ein Startwert 0 ein falsches Maximum. Beginne mit `a[0]`." }
      - { wert: 4, meldung: "Bei lauter positiven Werten liefert ein Startwert 0 ein falsches Minimum. Beginne mit `a[0]`." }
      - { wert: 5, meldung: "Die Methode darf `a` nicht verändern. Sortierst oder überschreibst du Elemente? Merke dir die Werte in eigenen Variablen." }
hinweise:
  - Suche Minimum und Maximum in einer Schleife, beide mit dem Startwert `a[0]`.
  - Erzeuge am Ende mit `new int[]{min, max}` das Ergebnis-Array und gib es zurück.
loesung: |
  **Ansatz:** Zwei Akkumulatoren wie in [12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen), danach die beiden Ergebnisse in ein neues Array packen.
  ---
  Startwert ist für beide `a[0]`, so funktioniert es auch bei lauter negativen oder lauter positiven Werten.
  ---
  ```java
  int min = a[0];
  int max = a[0];
  for (int i = 1; i < a.length; i++) {
      if (a[i] < min) {
          min = a[i];
      }
      if (a[i] > max) {
          max = a[i];
      }
  }
  return new int[]{min, max};
  ```
  ---
  Die Methode liest `a` nur. Probe: `{7}` liefert `{7, 7}`, denn bei einem Element ist es zugleich Minimum und Maximum.
```

### Zufallsarrays erzeugen

Auf Blatt 4 sollst du ein Array mit Zufallszahlen erzeugen. Eine Zufallszahl liefert zum Beispiel
`Math.random()`. Es gibt einen `double` zurück, der mindestens 0 und kleiner als 1 ist. Mit
`(int) (Math.random() * 6)` entsteht daraus eine ganze Zahl von 0 bis 5. Mit `+ 1` dahinter wird es eine Zahl von
1 bis 6, wie bei einem Würfel. Die Klasse `Random` aus [8.6 Zufallszahlen](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel)
funktioniert ebenso. Auf Blatt 4 ist sie aber nicht freigegeben, denn dort sind nur `String`, `Math` und `Integer`
erlaubt. Nimm dort `Math.random()`.

Wie testet man eine Methode, deren Ergebnis zufällig ist? Man prüft nicht die einzelnen Zahlen, sondern
**Eigenschaften**: Stimmt die Länge? Liegen alle Werte im erlaubten Bereich? Hängen die berechneten Werte richtig
von den zufälligen ab? Genau so arbeiten die Tests der folgenden Aufgabe.

:::beispiel[Ein Array mit Würfelwürfen]
```java
public static int[] wuerfle(int anzahl) {
    int[] w = new int[anzahl];
    for (int i = 0; i < w.length; i++) {
        w[i] = (int) (Math.random() * 6) + 1;
    }
    return w;
}
```

1. `Math.random()` liefert zum Beispiel 0,73. Mal 6 ergibt das 4,38.
2. `(int)` schneidet die Nachkommastellen ab. Es bleibt 4. Weil `Math.random()` nie 1 erreicht, ist das Ergebnis
   höchstens 5.
3. `+ 1` verschiebt den Bereich von 0 bis 5 auf 1 bis 6.

Ein Aufruf `wuerfle(5)` liefert zum Beispiel `[3, 6, 1, 1, 4]`. Bei jedem Start entsteht ein anderes Array. Sicher
ist nur: Es hat 5 Elemente, und jedes liegt zwischen 1 und 6.
:::

```aufgabe
id: ar-par-code-zufall
titel: Zufallszahlen mit ihrem Doppelten
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 3 a (umformuliert, Paare statt Dreiergruppen)
angabe: |
  Implementiere `int[] zufallsPaare(int laenge, int max)`. Die Methode erzeugt ein Array der Länge `laenge`. Auf
  jedem **geraden** Index (0, 2, 4, …) steht eine neue Zufallszahl von 1 bis `max`, beide Grenzen eingeschlossen.
  Auf dem Index direkt dahinter steht das Doppelte dieser Zufallszahl. Die Methode gibt das Array zurück.

  Vorbedingung: `laenge > 0`, `laenge` ist gerade, und `max >= 1`.

  Beispiel: `zufallsPaare(6, 10)` liefert zum Beispiel `{7, 14, 2, 4, 10, 20}`.
teile:
  - typ: code
    vorlage: |
      public class Zufall {
          public static int[] zufallsPaare(int laenge, int max) {
              return new int[laenge]; // TODO
          }
      }
    musterloesung: |
      public class Zufall {
          public static int[] zufallsPaare(int laenge, int max) {
              int[] a = new int[laenge];
              for (int i = 0; i < a.length; i += 2) {
                  a[i] = (int) (Math.random() * max) + 1;
                  a[i + 1] = 2 * a[i];
              }
              return a;
          }
      }
    tests:
      - { aufruf: "zufallsPaare(8, 10).length", erwartet: "8", beschreibung: "Länge 8" }
      - { aufruf: "zufallsPaare(4, 1)", erwartet: "new int[]{1, 2, 1, 2}", beschreibung: "max = 1: jede Zufallszahl ist 1" }
      - vorher: "int[] r = zufallsPaare(10, 6); boolean ok = true; for (int i = 0; i < r.length; i += 2) { if (r[i] < 1 || r[i] > 6 || r[i + 1] != 2 * r[i]) { ok = false; } }"
        aufruf: "ok"
        erwartet: "true"
        beschreibung: "zufallsPaare(10, 6): alle Paare im Bereich und verdoppelt"
      - vorher: "boolean eins = false; boolean sechs = false; for (int k = 0; k < 300; k++) { int[] r = zufallsPaare(2, 6); if (r[0] == 1) { eins = true; } if (r[0] == 6) { sechs = true; } }"
        aufruf: "eins && sechs"
        erwartet: "true"
        beschreibung: "300 Aufrufe: die Grenzen 1 und 6 kommen beide vor"
    fehler:
      - { wert: 2, meldung: "Bei `max = 1` muss jede Zufallszahl 1 sein. Liefert deine Formel 0? Dann fehlt das `+ 1`." }
      - { wert: 3, meldung: "Prüfe Bereich und Paare. Jede Zufallszahl liegt zwischen 1 und `max`, und der Platz dahinter enthält genau ihr Doppeltes." }
      - { wert: 4, meldung: "Die Grenze `max` muss vorkommen können. `(int) (Math.random() * max)` liefert 0 bis `max - 1`, erst `+ 1` verschiebt auf 1 bis `max`." }
hinweise:
  - Lass die Schleife in Zweierschritten laufen. Dann ist `i` immer gerade und `i + 1` der Platz dahinter.
  - '`(int) (Math.random() * max) + 1` liefert eine ganze Zahl von 1 bis `max`.'
loesung: |
  **Ansatz:** Ein neues Array der Länge `laenge` und eine Schleife in Zweierschritten. Jeder Durchlauf füllt ein Paar.
  ---
  Weil `laenge` gerade ist, gibt es zu jedem geraden Index `i` auch den Platz `i + 1`. Die Schleife greift also nie daneben.
  ---
  ```java
  int[] a = new int[laenge];
  for (int i = 0; i < a.length; i += 2) {
      a[i] = (int) (Math.random() * max) + 1;
      a[i + 1] = 2 * a[i];
  }
  return a;
  ```
  ---
  Probe mit `max = 1`: `Math.random() * 1` liegt unter 1, `(int)` macht daraus 0, plus 1 ergibt 1. Das Array ist `{1, 2, 1, 2}`.
```

```aufgabe
id: ar-par-blatt-a1
titel: Das Programm aus Aufgabe 1 von Blatt 4
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2021 und WS 2023, Aufgabe 1 (Zahlen, Namen und Filter geändert)
angabe: |
  Das Programm ist der Aufgabe 1 von Blatt 4 nachgebaut. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      public class Werkstatt {
          public static void fuelle(int[] feld) {
              int zahl = 5;
              for (int i = 0; i < feld.length; i++) {
                  feld[i] = zahl;
                  zahl += 5;
              }
          }

          public static void markiereKopie(int[] werte) {
              int[] kopie = werte;
              for (int i = 0; i < kopie.length; i++) {
                  if (kopie[i] % 3 == 0) {
                      kopie[i] = 0;
                  }
              }
              zeige(kopie);
          }

          public static void neuerInhalt(int[] werte) {
              int[] hilfe = new int[werte.length];
              for (int i = 0; i < hilfe.length; i++) {
                  hilfe[i] = i * i;
              }
              werte = hilfe;
              zeige(werte);
          }

          public static void zeige(int[] w) {
              String s = "";
              for (int i = 0; i < w.length; i++) {
                  if (i > 0) {
                      s = s + " ";
                  }
                  s = s + w[i];
              }
              System.out.println(s);
          }

          public static void main(String[] args) {
              int[] feld = new int[6];
              fuelle(feld);
              zeige(feld);
              markiereKopie(feld);
              zeige(feld);
              feld[0] = 99;
              neuerInhalt(feld);
              zeige(feld);
          }
      }
    loesung: |
      5 10 15 20 25 30
      5 10 0 20 25 0
      5 10 0 20 25 0
      0 1 4 9 16 25
      99 10 0 20 25 0
    fehler:
      - wert: "5 10 15 20 25 30\n5 10 0 20 25 0\n5 10 15 20 25 30\n0 1 4 9 16 25\n99 10 15 20 25 30"
        meldung: '`kopie = werte` ist keine Kopie. `markiereKopie` ändert das Array von `feld`, darum zeigt die dritte Zeile schon die Nullen.'
      - wert: "5 10 15 20 25 30\n5 10 0 20 25 0\n5 10 0 20 25 0\n0 1 4 9 16 25\n0 1 4 9 16 25"
        meldung: '`werte = hilfe` biegt nur den Pfeil des Parameters um. `feld` in `main` zeigt weiter auf das alte Array mit der 99.'
      - wert: "5 10 15 20 25 30\n5 10 0 20 25 0\n5 10 0 20 25 0\n0 1 4 9 16 25\n99 1 4 9 16 25"
        meldung: Die Methode `neuerInhalt` schreibt nie in das Array von `feld`. Sie füllt nur ihr eigenes Array `hilfe`.
hinweise:
  - Es gibt zwei Arrays, das von `feld` und das neue `hilfe`. Notiere nach jedem Aufruf, was in jedem steht.
  - In `markiereKopie` zeigt `kopie` auf das Array von `feld`. In `neuerInhalt` wird nur der Parameter `werte` umgebogen.
loesung: |
  **Ansatz:** Für jede Methode fragen: Ändert sie Elemente des übergebenen Arrays, oder biegt sie nur einen Pfeil um?
  ---
  `fuelle` schreibt 5, 10, …, 30 direkt in das Array von `feld`. Erste Zeile: `5 10 15 20 25 30`.
  ---
  `markiereKopie`: `kopie` ist ein Alias. Durch 3 teilbar sind 15 und 30, sie werden 0. Die Methode und danach `main` zeigen `5 10 0 20 25 0`.
  ---
  `feld[0] = 99`. `neuerInhalt` füllt `hilfe` mit `0 1 4 9 16 25` und gibt es aus. `werte = hilfe` erreicht `main` nicht.
  ---
  `main` gibt zuletzt das alte Array aus: `99 10 0 20 25 0`.
```

```aufgabe
id: ar-par-text-void
titel: Zusatzfrage zur void-Methode
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Aufgabenblatt 4, WS 2023, Aufgabe 1 b (umformuliert)
angabe: |
  Es geht um das Programm aus der Aufgabe „Das Programm aus Aufgabe 1 von Blatt 4“. Die Tutorin fragt: „Die Methode
  `fuelle` soll ein Array mit Werten füllen. Warum kommt sie trotzdem ohne Rückgabewert aus?“ Antworte in zwei bis vier Sätzen.
teile:
  - typ: text
    muster: |
      Beim Aufruf wird die Referenz auf das Array von main in den Parameter kopiert. Der Parameter feld zeigt also auf
      dasselbe Array wie die Variable in main. Wenn fuelle die Elemente über feld[i] beschreibt, ändert sie genau
      dieses eine Array. Darum sieht main die Werte auch ohne Rückgabewert.
hinweise:
  - Was wird beim Aufruf in den Parameter `feld` kopiert?
  - Wie viele Arrays gibt es, und welche Variablen zeigen darauf?
loesung: |
  **Ansatz:** Mit call-by-value und Referenzen argumentieren.
  ---
  Kopiert wird die Referenz. Parameter und Variable in `main` zeigen auf dasselbe Array.
  ---
  Die Methode schreibt in dieses Array. Ein Rückgabewert ist überflüssig, weil `main` das Array schon kennt.
```

## Gemischte Wiederholung

Hier sind die Aufgaben bunt gemischt, auch mit Stoff aus den Kapiteln 2, 4, 6, 8 und 10. Im Quiz und im Test steht
nicht dabei, zu welchem Abschnitt eine Frage gehört. Bei den ersten beiden Aufgaben musst du nichts programmieren.
Du entscheidest nur, welches Verfahren passt. Diese Entscheidung ist bei jeder Array-Aufgabe der erste Schritt.

```aufgabe
id: ar-mix-verfahren
titel: Welches Verfahren passt?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Entscheide für jede Angabe, welches Verfahren passt. Du musst nichts programmieren.

  a) „Liefere den größten Wert des Arrays.“

  b) „Liefere ein neues Array, das nur die nicht-negativen Werte enthält.“

  c) „Liefere `true`, wenn der Wert 7 im Array vorkommt.“
teile:
  - typ: auswahl
    label: a)
    optionen: ['Maximum mit Startwert `a[0]`', 'Summe mit Startwert 0', 'Suche mit vorzeitigem Ende']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Summe addiert alle Werte. Gesucht ist aber ein einzelner Wert, der größte.
      - wert: 2
        meldung: Beim Maximum muss man alle Elemente ansehen. Ein späteres Element könnte noch größer sein.
  - typ: auswahl
    label: b)
    optionen: ['zwei Durchläufe: zählen, dann mit eigenem Schreibindex füllen', 'ein Durchlauf in ein neues Array derselben Länge', 'die Werte im alten Array auf 0 setzen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Array derselben Länge hätte am Ende überzählige Nullen. Die Länge muss vorher gezählt werden.
      - wert: 2
        meldung: Verlangt ist ein **neues** Array ohne die negativen Werte. Auf 0 setzen ändert das alte Array und kürzt es nicht.
  - typ: auswahl
    label: c)
    optionen: ['Suche mit vorzeitigem Ende, `false` erst nach der Schleife', 'Zählen und am Ende mit 7 vergleichen', 'Maximum suchen und mit 7 vergleichen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Gezählt würde, wie viele Elemente eine Bedingung erfüllen. Gefragt ist nur, ob die 7 irgendwo steht.
      - wert: 2
        meldung: Das Maximum sagt nichts darüber, ob die 7 vorkommt. In `{1, 9}` ist das Maximum 9, aber die 7 fehlt.
hinweise:
  - Frag dich, was das Ergebnis ist. Ein einzelner Wert, ein neues Array oder ein Wahrheitswert?
loesung: |
  **Ansatz:** Vom verlangten Ergebnis auf das Verfahren schließen.
  ---
  a) Ein Wert aus dem Array, der größte: Maximum mit `a[0]`. b) Ein kürzeres neues Array: erst zählen, dann füllen.
  ---
  c) Ein Wahrheitswert „kommt vor“: Suche, die beim ersten Treffer mit `true` endet.
```

```aufgabe
id: ar-mix-void
titel: Ändern oder neu liefern?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Wähle für jede Angabe den passenden Methodenkopf. Du musst nichts programmieren.

  a) „Verdopple jeden Wert im übergebenen Array.“

  b) „Liefere ein Array, das um ein Element länger ist als das übergebene.“

  c) „Liefere, wie oft der Wert 0 vorkommt.“
teile:
  - typ: auswahl
    label: a)
    optionen: ['`void verdopple(int[] a)`', '`int verdopple(int[] a)`', '`void verdopple(int a)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Ergebnis ist kein einzelner Wert. Die Methode ändert die Elemente direkt, das sieht der Aufrufer über die Referenz.
      - wert: 2
        meldung: Ein einzelner `int`-Parameter ist eine Kopie einer Zahl. Damit erreicht man das Array nicht.
  - typ: auswahl
    label: b)
    optionen: ['`int[] verlaengere(int[] a)`', '`void verlaengere(int[] a)`', '`int verlaengere(int[] a)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Länge eines Arrays ist fest. Es braucht ein neues Array, und das muss die Methode zurückgeben.
      - wert: 2
        meldung: Verlangt ist ein Array, keine Zahl. Der Rückgabetyp ist `int[]`.
  - typ: auswahl
    label: c)
    optionen: ['`int zaehleNullen(int[] a)`', '`int[] zaehleNullen(int[] a)`', '`void zaehleNullen(int[] a)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Ergebnis ist eine einzige Zahl, also `int`.
      - wert: 2
        meldung: Eine `void`-Methode liefert nichts zurück. Die Anzahl muss aber beim Aufrufer ankommen.
hinweise:
  - Ändert die Methode das vorhandene Array, oder entsteht etwas Neues? Ist das Ergebnis eine Zahl oder ein Array?
loesung: |
  **Ansatz:** Elemente ändern geht über die Referenz, dafür reicht `void`. Neue Arrays und Zahlen müssen zurückgegeben werden.
  ---
  a) `void`, die Änderung wirkt über die Referenz. b) Rückgabetyp `int[]`, weil ein neues Array entsteht.
  ---
  c) Rückgabetyp `int` für die Anzahl.
```

```aufgabe
id: ar-mix-char
titel: String, char-Array und Zeichenarithmetik
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? Zum Rechnen mit `char` siehe [2.5 Zeichen sind Zahlen](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
  Das Zeichen `'r'` hat die Nummer 114.
teile:
  - typ: ausgabe
    code: |
      String s = "Array";
      char[] z = {'A', 'r', 'r', 'a', 'y'};
      System.out.println(s.length() + z.length);
      System.out.println(s.charAt(4) == z[4]);
      System.out.println(z[1] + z[2]);
      System.out.println("" + z[1] + z[2]);
    loesung: |
      10
      true
      228
      rr
    fehler:
      - wert: "10\ntrue\nrr\nrr"
        meldung: '`z[1] + z[2]` addiert zwei `char`. Java rechnet dabei mit ihren Nummern: `114 + 114 = 228`. Erst mit einem String davor wird verkettet.'
      - wert: "55\ntrue\n228\nrr"
        meldung: '`s.length() + z.length` addiert zwei `int`-Werte, 5 und 5. Hier wird nicht verkettet, denn kein String steht davor.'
hinweise:
  - Beim String heißt es `length()`, beim Array `length`. Beide liefern hier 5.
  - '`+` zwischen zwei `char` rechnet mit den Nummern der Zeichen. Steht vorne ein String, wird verkettet.'
loesung: |
  **Ansatz:** Für jedes `+` bestimmen, welche Typen links und rechts stehen.
  ---
  `5 + 5 = 10`. `s.charAt(4)` und `z[4]` sind beide `'y'`, also `true`.
  ---
  `z[1] + z[2]` sind zwei `char`: `114 + 114 = 228`. Mit `""` davor wird verkettet: `rr`.
```

```aufgabe
id: ar-mix-buchstaben
titel: Buchstaben zählen mit c - 'a'
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? Der Ausdruck `c - 'a'` macht aus einem Kleinbuchstaben eine Zahl von 0 bis 25 (siehe
  [2.5 Zeichen sind Zahlen](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)).
teile:
  - typ: ausgabe
    code: |
      String wort = "banane";
      int[] zaehler = new int[26];
      for (int i = 0; i < wort.length(); i++) {
          char c = wort.charAt(i);
          zaehler[c - 'a']++;
      }
      System.out.println(zaehler[0] + " " + zaehler[1] + " " + zaehler['n' - 'a'] + " " + zaehler[4]);
      System.out.println(zaehler.length);
    loesung: |
      2 1 2 1
      26
    fehler:
      - wert: "2 1 2 0\n26"
        meldung: '`zaehler[4]` gehört zum Buchstaben mit der Nummer 4. Das ist `e`, denn `a` hat 0, `b` 1, `c` 2, `d` 3.'
      - wert: "2 1 2 1\n6"
        meldung: '`zaehler` wurde mit `new int[26]` angelegt, eine Stelle pro Buchstabe. Die Länge des Worts spielt dafür keine Rolle.'
hinweise:
  - '`c - ''a''` ist 0 für `a`, 1 für `b`, 4 für `e` und 13 für `n`.'
  - Zähle dann, wie oft jeder dieser Buchstaben in „banane“ vorkommt.
loesung: |
  **Ansatz:** Ein Zählerarray wie bei den Würfeln. Der Index ist die Nummer des Buchstabens im Alphabet, ab 0.
  ---
  „banane“ enthält a zweimal, b einmal, n zweimal und e einmal.
  ---
  `zaehler[0]` (a) ist 2, `zaehler[1]` (b) ist 1, `zaehler[13]` (n) ist 2, `zaehler[4]` (e) ist 1. Die Länge ist 26.
```

```aufgabe
id: ar-mix-negativ
titel: Der Mittelwert negativer Zahlen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int[] t = {-7, -2, -4};
      int s = 0;
      for (int i = 0; i < t.length; i++) {
          s += t[i];
      }
      System.out.println(s);
      System.out.println(s / t.length);
      System.out.println(s % t.length);
    loesung: |
      -13
      -4
      -1
    fehler:
      - wert: "-13\n-5\n2"
        meldung: Java rundet bei der Ganzzahldivision **zur Null hin**, nicht nach unten. Aus -4,33 wird -4. Der Rest hat das Vorzeichen der geteilten Zahl.
      - wert: "-13\n-4\n1"
        meldung: 'Der Rest hat bei Java das Vorzeichen der geteilten Zahl -13. Probe: `-4 · 3 + (-1) = -13`.'
hinweise:
  - '`s += t[i]` ist eine Kurzform für `s = s + t[i]`.'
  - -13 geteilt durch 3 ist -4,33. Java schneidet zur Null hin ab.
loesung: |
  **Ansatz:** Summe bilden, dann Ganzzahldivision und Rest nach den Java-Regeln.
  ---
  Die Summe ist `-7 - 2 - 4 = -13`. `-13 / 3` ist -4,33…, abgeschnitten zur Null hin -4.
  ---
  Der Rest erfüllt `-4 · 3 + Rest = -13`, also ist er -1.
```

```aufgabe
id: ar-mix-vorbedingung
titel: Eine Vorbedingung gegen Exceptions
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist die Methode

  ```java
  public static int mitteDurchErstes(int[] a) {
      return a[a.length / 2] / a[0];
  }
  ```

  Welche Vorbedingung schließt **jede** Exception aus? Vorbedingungen kennst du aus
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
teile:
  - typ: auswahl
    optionen: ['`a != null && a.length > 0 && a[0] != 0`', '`a.length > 0`', '`a != null && a[0] != 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit `a = {0, 5}` gilt `a.length > 0`, aber die Division durch `a[0] = 0` wirft eine `ArithmeticException`. Auch `null` ist nicht ausgeschlossen.'
      - wert: 2
        meldung: 'Für ein leeres Array wirft schon `a[0]` eine `ArrayIndexOutOfBoundsException`. Die Länge muss mindestens 1 sein.'
hinweise:
  - Suche jede Stelle, die eine Exception werfen kann. Es sind drei verschiedene Gründe.
  - '`null`, ein leeres Array und die Division durch 0 müssen ausgeschlossen werden.'
loesung: |
  **Ansatz:** Jede gefährliche Stelle finden und für jede eine Bedingung formulieren.
  ---
  `a.length` wirft bei `null`. `a[0]` wirft beim leeren Array. Die Division wirft, wenn `a[0]` gleich 0 ist.
  ---
  Bei Länge mindestens 1 ist `a.length / 2` immer ein gültiger Index. Darum genügt `a != null && a.length > 0 && a[0] != 0`.
```

```aufgabe
id: ar-mix-scanner
titel: Zahlen einlesen und rückwärts ausgeben
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Das Programm liest zuerst eine Anzahl und dann so viele Zahlen ein (siehe
  [8.1 Eingabe mit Scanner](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm)). Die Eingabe ist
  `4` und danach `3 8 1 6`. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Scanner;

      public class Einlesen {
          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int n = sc.nextInt();
              int[] z = new int[n];
              for (int i = 0; i < n; i++) {
                  z[i] = sc.nextInt();
              }
              String s = "";
              for (int i = n - 1; i >= 0; i--) {
                  s = s + z[i];
                  if (i > 0) {
                      s = s + " ";
                  }
              }
              System.out.println(s);
              System.out.println(z[0] * z[n - 1]);
          }
      }
    stdin: "4\n3 8 1 6\n"
    loesung: |
      6 1 8 3
      18
    fehler:
      - wert: "6 1 8 3 4\n18"
        meldung: Die erste Zahl 4 ist die Anzahl. Sie wird in `n` gespeichert, nicht im Array.
      - wert: "6 1 8 3\n24"
        meldung: '`z[0]` ist 3 und `z[n - 1]` ist 6. Ihr Produkt ist 18.'
hinweise:
  - Die erste Zahl bestimmt die Länge des Arrays. Die nächsten vier Zahlen landen auf den Plätzen 0 bis 3.
  - Die zweite Schleife läuft rückwärts. Das Leerzeichen kommt nach jedem Element außer dem letzten ausgegebenen.
loesung: |
  **Ansatz:** Eingabe aufteilen: Anzahl, dann die Elemente. Danach die Rückwärts-Schleife mit Trennzeichen.
  ---
  `n = 4`, das Array ist `3, 8, 1, 6`.
  ---
  Rückwärts: `6 1 8 3`. Nach dem letzten ausgegebenen Element (`i = 0`) steht kein Leerzeichen.
  ---
  `z[0] * z[3] = 3 · 6 = 18`.
```

```aufgabe
id: ar-mix-paare
titel: Paare mit Summe 10
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? Verschachtelte Schleifen kennst du aus
  [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
teile:
  - typ: ausgabe
    code: |
      int[] a = {3, 7, 5, 5, 2, 8, 5};
      int paare = 0;
      for (int i = 0; i < a.length; i++) {
          for (int j = i + 1; j < a.length; j++) {
              if (a[i] + a[j] == 10) {
                  paare++;
              }
          }
      }
      System.out.println(paare);
    loesung: |
      5
    fehler:
      - wert: "3"
        meldung: 'Es gibt drei Fünfen. Jede Kombination aus zwei verschiedenen Plätzen mit einer 5 zählt: die Plätze (2, 3), (2, 6) und (3, 6).'
      - wert: "10"
        meldung: 'Die innere Schleife beginnt bei `j = i + 1`. Jedes Paar wird also nur einmal gezählt, nicht in beiden Reihenfolgen.'
hinweise:
  - Die innere Schleife beginnt hinter `i`. Jedes Paar aus zwei verschiedenen Plätzen wird genau einmal geprüft.
  - Suche die Paare 3 + 7, 2 + 8 und 5 + 5. Bei den Fünfen kommt es auf die Plätze an.
loesung: |
  **Ansatz:** Alle Paare `i < j` durchgehen und die Summe 10 prüfen.
  ---
  3 + 7 (Plätze 0 und 1) und 2 + 8 (Plätze 4 und 5) sind je ein Paar.
  ---
  Die Fünfen stehen auf 2, 3 und 6. Daraus entstehen die Paare (2, 3), (2, 6) und (3, 6). Zusammen sind es 5 Paare.
```

```aufgabe
id: ar-mix-rekursion
titel: Eine Rekursion über ein Array
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Rekursion kennst du aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
  Hier läuft sie mit einem Index durch ein Array. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Rek {
          public static int s(int[] a, int i) {
              if (i >= a.length) {
                  return 0;
              }
              return a[i] + s(a, i + 2);
          }

          public static void main(String[] args) {
              int[] z = {3, 4, 7, 10, 1, 6, 2};
              System.out.println(s(z, 0));
              System.out.println(s(z, 1));
              System.out.println(s(z, 6));
          }
      }
    loesung: |
      13
      20
      2
    fehler:
      - wert: "33\n30\n2"
        meldung: Der Selbstaufruf geht mit `i + 2` weiter. Es wird nur jedes zweite Element addiert.
      - wert: "13\n20\n0"
        meldung: '`s(z, 6)` ist noch kein Basisfall, denn `6 >= 7` ist falsch. Es addiert `z[6] = 2` und ruft `s(z, 8)` auf, das 0 liefert.'
hinweise:
  - Schreib die Indizes auf, die die Aufrufe durchlaufen. Bei Start 0 sind es 0, 2, 4, 6 und dann 8.
  - Der Basisfall `i >= a.length` greift bei 7 und bei 8. Die Länge ist 7.
loesung: |
  **Ansatz:** Die Indexfolge bis zum Basisfall aufschreiben und die Elemente addieren.
  ---
  `s(z, 0)`: Indizes 0, 2, 4, 6, dann 8 als Basisfall. Summe `3 + 7 + 1 + 2 = 13`.
  ---
  `s(z, 1)`: Indizes 1, 3, 5, dann 7 als Basisfall. Summe `4 + 10 + 6 = 20`.
  ---
  `s(z, 6)`: Index 6 liefert 2, dann ist 8 der Basisfall. Ergebnis 2. Rekursion auf Arrays ist das Thema von [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im Format des
TUWEL-Quiz gestellt (Richtig/Falsch mit Teilpunkten, TUWEL ist die Lernplattform der TU Wien). Danach folgen drei Aufgaben im Stil von Blatt 4, eine Aufgabe
im Stil des Programmiertests und Fragen für das Feedbackgespräch. Plane die angegebene Zeit ein und arbeite ohne
Hinweise, bevor du einen aufdeckst. Das Format 2026W ist nicht veröffentlicht. Die Aufgaben folgen den Quiz, Blättern
und Programmiertests der Jahre 2020 bis 2023.

```aufgabe
id: ar-pruef-quiz-inhalt
titel: Vier Kommentare zum Inhalt von data
niveau: 3
punkte: 2
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 WS2022, Frage 2 (Inhalt eines Arrays für 1 < n < 1000), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Jedes Codestück beginnt mit `int[] data = new int[n];`. Beurteile, ob der Kommentar
  den Inhalt von `data` danach **für jedes** `n` mit `1 < n < 1000` richtig beschreibt.

  ```java
  // (1)
  for (int i = 0; i < n; i++) { data[i] = i % 3; }
  // data enthält nur die Werte 0, 1 und 2

  // (2)
  for (int i = 0; i < n - 1; i++) { data[i + 1] = data[i] + 1; }
  // für jeden Index i gilt data[i] == i

  // (3)
  for (int i = n - 1; i >= 0; i -= 2) { data[i] = 5; }
  // data[0] und data[n - 1] haben beide den Wert 5

  // (4)
  for (int i = 1; i <= n; i++) { data[i - 1] = n / i; }
  // data[n - 1] hat den Wert 1
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Kommentar (1) stimmt.
        richtig: true
        erklaerung: Der Rest bei Division durch 3 ist für nicht-negative Zahlen immer 0, 1 oder 2.
      - text: Kommentar (2) stimmt.
        richtig: true
        erklaerung: '`data[0]` bleibt 0. Jedes weitere Element ist um 1 größer als sein Vorgänger. Also steht auf Index `i` genau `i`.'
      - text: Kommentar (3) stimmt.
        richtig: false
        erklaerung: 'Bei geradem `n`, etwa `n = 4`, werden die Indizes 3 und 1 beschrieben. `data[0]` bleibt 0.'
      - text: Kommentar (4) stimmt.
        richtig: true
        erklaerung: 'Beim letzten Durchlauf ist `i = n`. Er schreibt `n / n = 1` auf den Index `n - 1`. Der Index `i - 1` bleibt immer gültig.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Probiere bei (3) ein gerades `n`. Welche Indizes erreicht die Schleife dann?
      - wert: [r, r, f, f]
        meldung: 'Bei (4) läuft `i` bis einschließlich `n`, geschrieben wird aber auf `i - 1`. Das ist gültig, und der letzte Wert ist `n / n`.'
      - wert: [r, f, f, r]
        meldung: 'Bei (2) bleibt `data[0]` auf dem Standardwert 0. Ab da wächst jedes Element um 1, also gilt `data[i] == i` auch für `i = 0`.'
hinweise:
  - Probiere jedes Codestück mit `n = 3` und `n = 4` aus und schreib das ganze Array auf.
  - Bei Schrittweite 2 hängt das Ergebnis davon ab, ob `n` gerade oder ungerade ist.
loesung: |
  **Ansatz:** Kleine Werte für `n` einsetzen, gerade und ungerade, und jeden Kommentar mit dem ganzen Array vergleichen.
  ---
  (1) `n = 4` ergibt `0, 1, 2, 0`. Nur Reste von Division durch 3. Richtig. (2) `n = 4` ergibt `0, 1, 2, 3`. Richtig.
  ---
  (3) `n = 4` ergibt `0, 5, 0, 5`. `data[0]` ist 0. Falsch. (4) `n = 4` ergibt `4, 2, 1, 1`. Der letzte Wert ist `4 / 4 = 1`. Richtig.
```

```aufgabe
id: ar-pruef-quiz-referenz
titel: Vier Aussagen zu einer Methode mit Array
niveau: 3
punkte: 2
lernziel: 6
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt nach Aufgabenblatt 4, Aufgabe 1 c und d
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist

  ```java
  public static int[] f(int[] a) {
      a[0]++;
      a = new int[]{a[0], 0};
      a[1] = 7;
      return a;
  }
  ```

  In `main` stehen die Zeilen `int[] x = {1, 2};` und `int[] y = f(x);`. Beurteile jede Aussage über den Zustand
  danach.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`x[0]` hat den Wert 2.'
        richtig: true
        erklaerung: '`a[0]++` ändert das Array von `x`, denn `a` zeigt zu diesem Zeitpunkt noch darauf.'
      - text: '`y[1]` ist 7, und `x[1]` ist 2.'
        richtig: true
        erklaerung: '`a[1] = 7` ändert schon das neue Array, das zurückgegeben wird. Das Array von `x` behält bei Index 1 die 2.'
      - text: '`x == y` ist `true`.'
        richtig: false
        erklaerung: '`f` gibt das neue Array aus `new int[]{…}` zurück. `x` zeigt weiter auf das alte.'
      - text: Die Zeile `a = new int[]{a[0], 0};` verändert das Array von `x`.
        richtig: false
        erklaerung: Sie erzeugt ein neues Array und biegt nur den Pfeil des Parameters `a` um. Das Array von `x` bleibt unberührt.
    fehler:
      - wert: [f, r, f, f]
        meldung: Vor der Zuweisung an `a` zeigt `a` noch auf das Array von `x`. Die erste Zeile der Methode ändert also `x[0]`.
      - wert: [r, f, f, f]
        meldung: Nach dem Umbiegen schreibt `a[1] = 7` in das neue Array. Das ist das Array, das `y` bekommt.
hinweise:
  - Bestimme für jede Zeile der Methode, auf welches Array `a` gerade zeigt.
  - Bis zur zweiten Zeile ist `a` ein Alias für `x`. Ab dann zeigt es auf ein neues Array.
loesung: |
  **Ansatz:** Den Pfeil des Parameters Zeile für Zeile verfolgen.
  ---
  `a[0]++` macht das Array von `x` zu `2, 2`. Dann zeigt `a` auf ein neues Array `2, 0`.
  ---
  `a[1] = 7` macht das neue Array zu `2, 7`. Es wird zurückgegeben, `y` zeigt darauf.
  ---
  Also `x = {2, 2}` und `y = {2, 7}`, zwei verschiedene Arrays. Richtig sind die Aussagen 1 und 2.
```

```aufgabe
id: ar-pruef-blatt-a1
titel: Eine Exception erklären und beheben
niveau: 3
punkte: 4
lernziel: 7
kompetenz: begruenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 1 a und Zusatzfragen 2 und 3 (umformuliert)
angabe: |
  (Zeitrichtwert: 10 Minuten) Die Methode soll alle Elemente in einer Zeile ausgeben, getrennt durch Leerzeichen:

  ```java
  public static void ausgeben(int[] w) {
      for (int i = 1; i <= w.length; i++) {
          System.out.print(w[i] + " ");
      }
      System.out.println();
  }
  ```

  Der Aufruf `ausgeben(new int[]{4, 8, 15})` gibt `8 15 ` aus und bricht dann mit einer
  `ArrayIndexOutOfBoundsException` ab.

  **a)** Bei welchem Wert von `i` bricht das Programm ab?

  **b)** Repariere den Schleifenkopf, sodass die Methode alle Elemente ausgibt und keine Exception wirft.

  **c)** Beantworte zwei Fragen aus dem Feedbackgespräch. Erstens: „Lässt sich die Länge eines Arrays nachträglich
  ändern, und was tut man, wenn man mehr Platz braucht?“ Zweitens: „Wie erstellst du eine echte Kopie eines
  `int`-Arrays?“
teile:
  - typ: auswahl
    label: a)
    optionen: ['bei `i = 3`', 'bei `i = 0`', 'bei `i = 2`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Schleife beginnt bei `i = 1`. Der Wert 0 kommt gar nicht vor, darum fehlt auch die 4 in der Ausgabe.
      - wert: 2
        meldung: '`w[2]` ist 15 und wurde noch ausgegeben. Erst der nächste Zugriff liegt außerhalb.'
  - typ: lueckentext
    label: b)
    code: |
      int[] w = {4, 8, 15};
      for (int i = ___; ___; i++) {
          System.out.print(w[i] + " ");
      }
    luecken: [["0"], ["i < w.length", "i <= w.length - 1", "i<w.length"]]
    fehler:
      - wert: ["1", "i < w.length"]
        meldung: Mit Start 1 wird `w[0]` nie ausgegeben. Der erste Index eines Arrays ist 0.
      - wert: ["0", "i <= w.length"]
        meldung: 'Mit `<=` erreicht `i` den Wert `w.length`, und `w[3]` gibt es nicht.'
  - typ: text
    label: c)
    muster: |
      Die Länge eines Arrays lässt sich nicht verändern, sie wird beim Erzeugen festgelegt. Braucht man eine andere
      Länge, legt man ein neues Array mit der gewünschten Länge an und überträgt die Werte. Zum Kopieren legt man
      ein neues int-Array derselben Länge an und überträgt jeden Wert einzeln in einer Schleife. Die Zuweisung
      b = a ist keine Kopie, denn danach zeigen beide Variablen auf dasselbe Array.
hinweise:
  - Bei Länge 3 sind die Indizes 0, 1 und 2 erlaubt. Welche Werte nimmt `i` an?
  - Für c) denk an die feste Länge und daran, was `b = a` bei Arrays bewirkt.
loesung: |
  **Ansatz:** Die Indizes der Schleife mit den erlaubten Indizes 0 bis 2 vergleichen.
  ---
  a) `i` läuft über 1, 2 und 3. Bei 1 und 2 erscheinen 8 und 15. Bei `i = 3` greift `w[3]` daneben.
  ---
  b) Zwei Fehler: Der Start muss 0 sein, sonst fehlt `w[0]`. Die Bedingung muss `i < w.length` lauten.
  ---
  c) Die Länge ist fest. Für eine andere Länge oder eine Kopie legt man ein neues Array an und überträgt die Werte in einer Schleife. `b = a` kopiert nur die Referenz.
```

```aufgabe
id: ar-pruef-blatt-a2
titel: Ein Array in main füllen und zweimal ausgeben
niveau: 3
punkte: 3
lernziel: 1
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2021 und WS 2023, Aufgabe 2 a und c (Zahlen und Regeln geändert)
angabe: |
  (Zeitrichtwert: 12 Minuten) Schreib alles in `main`. Eine eigene Methode für die Ausgabe ist erlaubt.

  1. Erstelle ein `int`-Array der Länge 12. Fülle es mit einer Schleife mit der Fünferreihe ab 15, also mit
     15, 20, 25, …
  2. Setze alle Elemente, die durch 4 teilbar sind, auf 0.
  3. Gib alle Elemente in einer Zeile aus, getrennt durch je ein Leerzeichen.
  4. Gib danach jedes dritte Element aus, beginnend beim letzten und dann nach vorne, getrennt durch Kommas. Mach
     das einmal mit einer `for`-Schleife und einmal mit einer `while`-Schleife. Vor die Zeile kommt jeweils
     `for: ` oder `while: `.

  Die erwartete Ausgabe ist

  ```
  15 0 25 30 35 0 45 50 55 0 65 70
  for: 70,55,0,25
  while: 70,55,0,25
  ```
teile:
  - typ: code
    vorlage: |
      public class Blatt4 {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      public class Blatt4 {
          public static void main(String[] args) {
              int[] a = new int[12];
              for (int i = 0; i < a.length; i++) {
                  a[i] = 15 + 5 * i;
                  if (a[i] % 4 == 0) {
                      a[i] = 0;
                  }
              }
              for (int i = 0; i < a.length; i++) {
                  if (i > 0) {
                      System.out.print(" ");
                  }
                  System.out.print(a[i]);
              }
              System.out.println();

              System.out.print("for: ");
              for (int i = a.length - 1; i >= 0; i -= 3) {
                  if (i < a.length - 1) {
                      System.out.print(",");
                  }
                  System.out.print(a[i]);
              }
              System.out.println();

              System.out.print("while: ");
              int j = a.length - 1;
              while (j >= 0) {
                  if (j < a.length - 1) {
                      System.out.print(",");
                  }
                  System.out.print(a[j]);
                  j -= 3;
              }
              System.out.println();
          }
      }
    tests:
      - { stdout: "15 0 25 30 35 0 45 50 55 0 65 70\nfor: 70,55,0,25\nwhile: 70,55,0,25\n", beschreibung: "Ausgabe von main" }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeile für Zeile. Häufige Ursachen: ein Leerzeichen am Zeilenende, ein Komma nach dem letzten Element oder die Fünferreihe ab 20 statt ab 15." }
hinweise:
  - Auf Index `i` steht `15 + 5 * i`. Durch 4 teilbar sind 20, 40 und 60.
  - Die Rückwärts-Schleife beginnt bei Index 11 und geht in Dreierschritten. Das Komma kommt vor jedem Element außer dem ersten ausgegebenen.
loesung: |
  **Ansatz:** Füllen und Nullsetzen in einer Schleife, dann zwei Ausgaben mit der Trennzeichen-Regel.
  ---
  Die Werte sind `15 + 5 · i` für `i = 0` bis 11. Durch 4 teilbar sind 20, 40 und 60. Sie werden zu 0.
  ---
  ```java
  int[] a = new int[12];
  for (int i = 0; i < a.length; i++) {
      a[i] = 15 + 5 * i;
      if (a[i] % 4 == 0) {
          a[i] = 0;
      }
  }
  ```
  ---
  Rückwärts in Dreierschritten: Indizes 11, 8, 5 und 2, also `70,55,0,25`. Die `for`- und die `while`-Fassung unterscheiden sich nur darin, wo Start, Bedingung und Schritt stehen (siehe [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen)).
```

```aufgabe
id: ar-pruef-blatt-a3
titel: Werte am Mittelwert ausrichten
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 3 b (umformuliert, andere Regeln und Daten)
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `void angleichen(int[] werte, int ab)`.

  Die Methode berechnet zuerst den ganzzahligen Mittelwert aller Elemente. Der Nachkommaanteil wird abgeschnitten.
  Außerdem bestimmt sie das Minimum und das Maximum des ganzen Arrays. Danach ändert sie die Elemente vom Index `ab`
  bis zum Ende des Arrays:

  - Ein Wert **größer** als der Mittelwert wird durch das Maximum ersetzt.
  - Ein Wert **kleiner** als der Mittelwert wird durch das Minimum ersetzt.
  - Ein Wert **gleich** dem Mittelwert bleibt.

  Vorbedingung: `werte != null`, `werte.length > 0` und `0 <= ab < werte.length`. Verwende keine Hilfsmethoden.

  Beispiel: Für `{14, 3, 17, 20, 9, 11, 6, 15}` ist die Summe 95 und der Mittelwert 11. Minimum 3, Maximum 20.
  `angleichen(werte, 4)` ändert nur die Indizes 4 bis 7 und ergibt `{14, 3, 17, 20, 3, 11, 3, 20}`.
teile:
  - typ: code
    vorlage: |
      public class Angleichen {
          public static void angleichen(int[] werte, int ab) {
              // TODO
          }
      }
    musterloesung: |
      public class Angleichen {
          public static void angleichen(int[] werte, int ab) {
              int summe = 0;
              int min = werte[0];
              int max = werte[0];
              for (int i = 0; i < werte.length; i++) {
                  summe += werte[i];
                  if (werte[i] < min) {
                      min = werte[i];
                  }
                  if (werte[i] > max) {
                      max = werte[i];
                  }
              }
              int mittel = summe / werte.length;
              for (int i = ab; i < werte.length; i++) {
                  if (werte[i] > mittel) {
                      werte[i] = max;
                  } else if (werte[i] < mittel) {
                      werte[i] = min;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[] w = {14, 3, 17, 20, 9, 11, 6, 15};", aufruf: "angleichen(w, 4)", ergebnis: "w", erwartet: "new int[]{14, 3, 17, 20, 3, 11, 3, 20}", beschreibung: "Beispiel aus der Angabe" }
      - { vorher: "int[] w = {14, 3, 17, 20, 9, 11, 6, 15};", aufruf: "angleichen(w, 0)", ergebnis: "w", erwartet: "new int[]{20, 3, 20, 20, 3, 11, 3, 20}", beschreibung: "ab Index 0" }
      - { vorher: "int[] w = {2, 6, 4, 7, 4};", aufruf: "angleichen(w, 1)", ergebnis: "w", erwartet: "new int[]{2, 7, 4, 7, 4}", beschreibung: "Werte gleich dem Mittelwert 4 bleiben" }
      - { vorher: "int[] w = {8, 8, 8};", aufruf: "angleichen(w, 1)", ergebnis: "w", erwartet: "new int[]{8, 8, 8}", beschreibung: "alle Werte gleich" }
      - { vorher: "int[] w = {5};", aufruf: "angleichen(w, 0)", ergebnis: "w", erwartet: "new int[]{5}", versteckt: true }
      - { vorher: "int[] w = {30, 10, 20, 1};", aufruf: "angleichen(w, 3)", ergebnis: "w", erwartet: "new int[]{30, 10, 20, 1}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Nur die Indizes ab `ab` dürfen sich ändern. Beginnt deine zweite Schleife bei `ab`?" }
      - { wert: 2, meldung: "Mittelwert, Minimum und Maximum gehören zum **ganzen** Array, nicht nur zum Teil ab `ab`. Berechne sie in einer eigenen Schleife vor allen Änderungen." }
      - { wert: 3, meldung: "Ein Wert, der genau dem Mittelwert entspricht, bleibt unverändert. Prüfe `>` und `<` getrennt, nicht `>=`." }
hinweise:
  - Erste Schleife über das ganze Array für Summe, Minimum und Maximum. Danach `mittel = summe / werte.length`.
  - Zweite Schleife von `ab` bis zum Ende mit `if (werte[i] > mittel) … else if (werte[i] < mittel) …`. Gleiche Werte fallen durch beide Bedingungen.
loesung: |
  **Ansatz:** Zwei Phasen. Erst alles messen (Summe, Minimum, Maximum), dann ab `ab` ändern. Sonst würden die Änderungen die Messung verfälschen.
  ---
  Die Methode ist `void`, denn sie ändert das übergebene Array über die Referenz (siehe [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert)).
  ---
  ```java
  int summe = 0;
  int min = werte[0];
  int max = werte[0];
  for (int i = 0; i < werte.length; i++) {
      summe += werte[i];
      if (werte[i] < min) {
          min = werte[i];
      }
      if (werte[i] > max) {
          max = werte[i];
      }
  }
  int mittel = summe / werte.length;
  for (int i = ab; i < werte.length; i++) {
      if (werte[i] > mittel) {
          werte[i] = max;
      } else if (werte[i] < mittel) {
          werte[i] = min;
      }
  }
  ```
  ---
  Probe mit dem Beispiel: `95 / 8 = 11`. Ab Index 4: 9 wird 3, 11 bleibt, 6 wird 3, 15 wird 20.
```

```aufgabe
id: ar-pruef-pt-verschraenken
titel: Zwei Arrays verschränken
niveau: 3
punkte: 6
lernziel: 4
kompetenz: anwenden
quelle: Stil der ersten Aufgabe im Programmiertest (neues Array erzeugen), Idee nach Aufgabenblatt 4, WS 2021, Aufgabe 3 c
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int[] verschraenke(int[] a, int[] b)`. Die Methode erzeugt ein neues
  Array der Länge `a.length + b.length`. Es enthält abwechselnd ein Element von `a` und eines von `b`, beginnend
  mit `a[0]`. Ist ein Array länger, folgen seine restlichen Elemente am Ende in ihrer Reihenfolge. Die beiden
  übergebenen Arrays bleiben unverändert.

  Vorbedingung: `a != null` und `b != null`. Leere Arrays sind erlaubt.

  Es gelten die Einschränkungen des Programmiertests: keine Hilfsmethoden, keine Klassenvariablen, kein `clone`,
  kein `System.arraycopy` und keine Methode der Klasse `Arrays`.

  Beispiele:

  - `verschraenke({1, 2, 3}, {7, 8, 9})` liefert `{1, 7, 2, 8, 3, 9}`.
  - `verschraenke({1, 2, 3, 4, 5}, {7, 8})` liefert `{1, 7, 2, 8, 3, 4, 5}`.
  - `verschraenke({9, 8}, {1, 2, 3, 4})` liefert `{9, 1, 8, 2, 3, 4}`.
teile:
  - typ: code
    vorlage: |
      public class Verschraenken {
          public static int[] verschraenke(int[] a, int[] b) {
              return new int[0]; // TODO
          }
      }
    musterloesung: |
      public class Verschraenken {
          public static int[] verschraenke(int[] a, int[] b) {
              int[] neu = new int[a.length + b.length];
              int j = 0;
              int laenger = a.length;
              if (b.length > laenger) {
                  laenger = b.length;
              }
              for (int i = 0; i < laenger; i++) {
                  if (i < a.length) {
                      neu[j] = a[i];
                      j++;
                  }
                  if (i < b.length) {
                      neu[j] = b[i];
                      j++;
                  }
              }
              return neu;
          }
      }
    tests:
      - { aufruf: "verschraenke(new int[]{1, 2, 3}, new int[]{7, 8, 9})", erwartet: "new int[]{1, 7, 2, 8, 3, 9}", beschreibung: "gleich lang" }
      - { aufruf: "verschraenke(new int[]{1, 2, 3, 4, 5}, new int[]{7, 8})", erwartet: "new int[]{1, 7, 2, 8, 3, 4, 5}", beschreibung: "a ist länger" }
      - { aufruf: "verschraenke(new int[]{9, 8}, new int[]{1, 2, 3, 4})", erwartet: "new int[]{9, 1, 8, 2, 3, 4}", beschreibung: "b ist länger" }
      - { aufruf: "verschraenke(new int[0], new int[]{4, 5})", erwartet: "new int[]{4, 5}", beschreibung: "a ist leer" }
      - { aufruf: "verschraenke(new int[]{6}, new int[0])", erwartet: "new int[]{6}", versteckt: true }
      - { aufruf: "verschraenke(new int[0], new int[0])", erwartet: "new int[0]", versteckt: true }
      - { vorher: "int[] a = {1, 2}; int[] b = {3};", aufruf: "verschraenke(a, b)", ergebnis: "a", erwartet: "new int[]{1, 2}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, verboteneApi: ["Arrays"] }
    fehler:
      - { wert: 1, meldung: "Prüfe die Reihenfolge: zuerst `a[0]`, dann `b[0]`, dann `a[1]`. Ein eigener Schreibindex `j` für das neue Array hilft." }
      - { wert: 2, meldung: "Wenn `a` länger ist, darf `b[i]` nur gelesen werden, solange `i < b.length` gilt. Prüfe jeden Zugriff einzeln." }
      - { wert: 3, meldung: "Wenn `b` länger ist, muss die Schleife bis zur Länge des **längeren** Arrays laufen, sonst fehlen die restlichen Elemente von `b`." }
      - { wert: 4, meldung: "Ein leeres `a` darf keinen Zugriff `a[0]` auslösen. Lies nur, wenn `i < a.length` gilt." }
hinweise:
  - Lass einen Index `i` bis zur Länge des längeren Arrays laufen und verwende einen eigenen Schreibindex `j` für das neue Array.
  - In jedem Durchlauf schreibst du `a[i]`, falls `i < a.length` gilt, und danach `b[i]`, falls `i < b.length` gilt.
loesung: |
  **Ansatz:** Ein neues Array erzeugen (Muster der ersten Testaufgabe). Lesen mit `i`, Schreiben mit `j`, und vor jedem Lesezugriff prüfen, ob der Index im jeweiligen Array gültig ist.
  ---
  Die Länge steht sofort fest: `a.length + b.length`. Die Schleife läuft bis zur größeren der beiden Längen, damit auch die Reste ankommen.
  ---
  ```java
  int[] neu = new int[a.length + b.length];
  int j = 0;
  int laenger = a.length;
  if (b.length > laenger) {
      laenger = b.length;
  }
  for (int i = 0; i < laenger; i++) {
      if (i < a.length) {
          neu[j] = a[i];
          j++;
      }
      if (i < b.length) {
          neu[j] = b[i];
          j++;
      }
  }
  return neu;
  ```
  ---
  Probe mit `{1, 2, 3, 4, 5}` und `{7, 8}`: Bis `i = 1` kommen Paare, ab `i = 2` nur noch Elemente von `a`. Am Ende ist `j = 7`, das ist die Länge.
```

```aufgabe
id: ar-pruef-gespraech
titel: Drei Fragen im Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfragen und Aufgabe 1 c zu Aufgabenblatt 4, WS 2021 und WS 2023 (umformuliert)
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) Beantworte jede Frage in zwei bis vier Sätzen, so wie du sie im
  Gespräch sagen würdest.

  **a)** Eine Methode legt mit `int[] kopie = werte;` eine „Kopie“ an und setzt darin einige Werte auf 0. Warum ist
  das Array des Aufrufers danach ebenfalls verändert?

  **b)** Eine Methode weist ihrem Parameter mit `werte = hilfe;` ein neues Array zu. Warum sieht der Aufrufer danach
  trotzdem den alten Inhalt?

  **c)** Beginnt die Indexzählung eines Arrays immer bei 0, und was ist der größte erlaubte Index?
teile:
  - typ: text
    label: a)
    muster: |
      Die Zuweisung kopiert nur die Referenz, nicht das Array. Danach zeigen kopie und werte auf dasselbe Array, und
      werte zeigt wiederum auf das Array des Aufrufers. Jede Änderung über kopie trifft also das Original.
  - typ: text
    label: b)
    muster: |
      Der Parameter werte ist eine eigene Variable, in die beim Aufruf die Referenz kopiert wurde. Die Zuweisung
      biegt nur diese lokale Referenz auf das neue Array um. Die Variable des Aufrufers zeigt weiter auf das alte
      Array, und das wurde nicht verändert.
  - typ: text
    label: c)
    muster: |
      Ja, in Java beginnt der Index immer bei 0. Der größte erlaubte Index ist die Länge minus 1, also a.length - 1.
      Ein Zugriff mit einem Index außerhalb von 0 bis a.length - 1 wirft eine ArrayIndexOutOfBoundsException.
hinweise:
  - Bei a) und b) hilft das Bild mit den Pfeilen. Wie viele Arrays gibt es, und wohin zeigt welche Variable?
  - Unterscheide bei a) und b) zwischen „ein Element ändern“ und „die Variable neu zuweisen“.
loesung: |
  **Ansatz:** Alle drei Fragen mit dem Referenzmodell beantworten: Variablen enthalten Pfeile, Arrays liegen im Heap.
  ---
  a) `kopie = werte` kopiert den Pfeil. Es gibt nur ein Array, also ändert jede Änderung über `kopie` das Original.
  ---
  b) `werte = hilfe` biegt nur den Pfeil des Parameters um. Der Pfeil des Aufrufers bleibt, wo er war.
  ---
  c) Ja, ab 0. Der größte Index ist `length - 1`. Alles andere wirft eine `ArrayIndexOutOfBoundsException`.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Ein Array hat eine feste Länge, seine Indizes laufen von 0 bis `length - 1`, und jeder
  Zugriff außerhalb wirft eine `ArrayIndexOutOfBoundsException`. (2) Eine Array-Variable enthält nur eine Referenz.
  `b = a` erzeugt keine Kopie, sondern einen zweiten Namen für dasselbe Array, und `==` vergleicht nur Referenzen.
  (3) Eine Methode bekommt eine Kopie der Referenz. Änderungen an Elementen sieht der Aufrufer, eine neue Zuweisung
  an den Parameter nicht. Ebenso gute Antworten sind der Plan „erst Länge, dann füllen“ oder der Startwert `a[0]`
  beim Maximum.
```

:::zusammenfassung
1. **Array:** eine feste Anzahl von Plätzen gleichen Typs unter einem Namen. Anlegen mit `new int[n]` (alle Plätze mit dem Standardwert, bei `int` 0) oder mit einer Initialisierungsliste `{3, 1, 4}`. Die Länge `a.length` (ohne Klammern) ändert sich nie.
2. **Index:** eine ganze Zahl vom Typ `int` von 0 bis `a.length - 1`. Ein Zugriff außerhalb bricht mit `ArrayIndexOutOfBoundsException` ab. Der Index darf ein beliebiger `int`-Ausdruck sein, auch `a[a[0]]`.
3. **Durchlaufen:** `for (int i = 0; i < a.length; i++)`, rückwärts ab `a.length - 1` mit `i >= 0`, in Schritten mit `i += k`. Ausgabe mit Trennzeichen vor jedem Element außer dem ersten oder mit `Arrays.toString(a)`.
4. **Algorithmen:** Summe ab 0, ganzzahliger Mittelwert `summe / a.length`, Maximum und Minimum ab `a[0]`, Zählen mit Bedingung. Die Suche liefert beim Treffer `return i` und erst nach der Schleife `return -1`. Häufigkeiten zählt ein Zählerarray.
5. **Neue Arrays:** erst die Länge bestimmen, dann füllen. Beim Filtern und Einfügen zählt die erste Schleife, die zweite füllt mit eigenem Schreibindex `j`. Umdrehen mit dem Zielplatz `a.length - 1 - i`. Kopieren heißt: neues Array und jeden Wert einzeln übertragen.
6. **Referenzen:** Eine Array-Variable enthält einen Verweis auf das Array. `b = a` kopiert nur den Verweis, danach sind `a` und `b` Aliase. `==` vergleicht Verweise, den Inhalt vergleicht eine Schleife. `null` heißt „zeigt auf nichts“.
7. **Methoden:** Call-by-value kopiert die Referenz. Änderungen an Elementen wirken beim Aufrufer, darum kann eine `void`-Methode ein Array füllen. Eine Zuweisung an den Parameter wirkt nicht nach außen. Ein neues Array muss zurückgegeben und beim Aufrufer gespeichert werden.
8. **Prüfungsregeln:** Im Programmiertest sind `clone`, `System.arraycopy` und alle Methoden von `Arrays` außer `toString` und `deepToString` verboten. Kopieren und Vergleichen schreibst du selbst mit einer Schleife.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Index gleich der Länge**, etwa `w[5]` bei Länge 5. Training: „Welcher Zugriff geht gut?“ in [12.1 Was ist ein Array?](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
2. **`length()` mit Klammern beim Array oder `length` ohne Klammern beim String.** Training: „Welche Zeilen kompilieren nicht?“ in [12.1](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
3. **`<=` statt `<` in der Schleife**, die Exception aus Blatt 4. Training: „Welche Schleife greift daneben?“ in [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen) und „Eine Exception erklären und beheben“ in den [Prüfungsaufgaben](/lernen/ep1/arrays/pruefungsaufgaben).
4. **`i > 0` statt `i >= 0` beim Rückwärtslaufen**, sodass `a[0]` fehlt. Training: „Von hinten nach vorne“ und „Rückwärts in Schritten ausgeben“ in [12.2](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen).
5. **Nie beschriebene Plätze vergessen**, die den Standardwert 0 behalten. Training: „Kommentare zum Inhalt eines Arrays beurteilen“ in [12.2](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen) und „Vier Kommentare zum Inhalt von data“ in den [Prüfungsaufgaben](/lernen/ep1/arrays/pruefungsaufgaben).
6. **Maximum oder Minimum mit Startwert 0.** Training: „Welche Fassung findet das Maximum?“ in [12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen) und „Minimum und Maximum als Array zurückgeben“ in [12.6](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
7. **Mittelwert zu früh abgeschnitten** (`double m = summe / n;`). Training: „Drei Arten zu teilen“ in [12.3](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen).
8. **Suche bricht im `else`-Zweig nach dem ersten Element ab.** Training: „Erste und letzte Stelle“ in [12.3](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen).
9. **Neues Array mit falscher Länge oder ein Index für beide Arrays.** Training: „Wie lang wird das neue Array?“ und „Gerade Werte herausfiltern“ in [12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen).
10. **Gespiegelter Index um eins daneben** (`a.length - i`). Training: „Ein char-Array umdrehen“ in [12.4](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen).
11. **`b = a` für eine Kopie gehalten.** Training: „Pfeile umbiegen und Elemente ändern“ in [12.5 Referenzen](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array) und „Das Programm aus Aufgabe 1 von Blatt 4“ in [12.6](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
12. **Arrays mit `==` auf gleichen Inhalt geprüft.** Training: „Inhalt zweier Arrays vergleichen“ in [12.5](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array).
13. **Ergebnis über eine Zuweisung an den Parameter abliefern wollen.** Training: „Welche Zeilen ändern das Array des Aufrufers?“ in [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
14. **Zurückgegebenes Array nicht gespeichert.** Training: „Gespeichert oder weggeworfen?“ in [12.6](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
15. **Zufallszahl mit falschem Bereich**, etwa 0 bis `max - 1` statt 1 bis `max`. Training: „Zufallszahlen mit ihrem Doppelten“ in [12.6](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Arrays anlegen und Index, Standardwert und Indexbereich angeben.
2. Arrays vorwärts, rückwärts und in Schritten durchlaufen und mit Trennzeichen ausgeben.
3. Den Inhalt eines Arrays nach einer Schleife exakt angeben.
4. Summe, Mittelwert, Minimum, Maximum, Zählen, Suchen und Häufigkeiten programmieren.
5. Neue Arrays erzeugen: kopieren, umdrehen, filtern, einfügen.
6. Für jede Zuweisung angeben, welche Variablen auf dasselbe Array zeigen.
7. Vorhersagen, ob eine Methode das Array des Aufrufers verändert, und Methoden mit Arrays schreiben.
8. Die Zusatzfragen von Blatt 4 in ganzen Sätzen beantworten.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein **Feedbackgespräch**.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Zusatzfragen zu Blatt 4 drehen sich um den Typ des
Index, die Länge, das Kopieren und den Vergleich mit `==`. Aufgabe 1 fragt außerdem, warum das Original verändert ist. Formuliere zuerst
laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den
Kernpunkten.

```karten
- id: ar-karte-array
  frage: Was ist ein Array, und wie legst du eines an?
  antwort: |
    Ein Array ist eine feste Anzahl von Speicherplätzen gleichen Typs unter einem gemeinsamen Namen. Die Plätze sind
    ab 0 durchnummeriert. Ich lege es mit `new` und der Länge an, etwa `int[] a = new int[5];`. Dann enthält jeder
    Platz den Standardwert, bei `int` die 0. Kenne ich die Werte schon, schreibe ich eine Initialisierungsliste wie
    `int[] a = {3, 1, 4};`, die Länge ergibt sich dann aus der Anzahl der Werte.
  kernpunkte:
    - feste Anzahl, gleicher Typ, ein Name
    - new mit Länge, Standardwerte
    - Initialisierungsliste
- id: ar-karte-indextyp
  frage: Welchen Datentyp muss ein Index haben, und welche Indizes sind erlaubt?
  antwort: |
    Der Index muss ein `int` sein. Kleinere ganzzahlige Typen wie `char` gehen auch, weil Java sie automatisch in
    einen `int` umwandelt. Ein `long` oder `double` geht nicht ohne Cast. Erlaubt sind die Indizes 0 bis
    `a.length - 1`. Jeder andere Index wirft beim Ausführen eine `ArrayIndexOutOfBoundsException`, der Compiler
    merkt das nicht.
  kernpunkte:
    - int, auch char
    - 0 bis length minus 1
    - Fehler erst zur Laufzeit
- id: ar-karte-laenge
  frage: Kann man ein Array nachträglich verlängern oder verkürzen?
  antwort: |
    Gar nicht. Die Länge wird beim Erzeugen festgelegt, und `length` kann man nur lesen. Brauche ich mehr oder
    weniger Platz, lege ich ein neues Array mit der gewünschten Länge an und übertrage die Werte, die ich behalten
    will, mit einer Schleife. Danach weise ich das neue Array der Variable zu oder gebe es zurück.
  kernpunkte:
    - Länge ist fest
    - neues Array anlegen
    - Werte übertragen
- id: ar-karte-kopieren
  frage: Wie kopierst du ein int-Array, und warum reicht b = a nicht?
  antwort: |
    Ich lege mit `new int[a.length]` ein neues Array an und übertrage in einer Schleife jeden Wert mit
    `b[i] = a[i]`. Die Zuweisung `b = a` kopiert dagegen nur die Referenz. Danach gibt es weiterhin nur ein Array mit
    zwei Namen, und jede Änderung über `b` ändert auch das Array von `a`. Fertige Methoden wie `clone` sind im
    Programmiertest verboten.
  kernpunkte:
    - neues Array gleicher Länge
    - Schleife überträgt jeden Wert
    - b = a kopiert nur die Referenz
- id: ar-karte-referenz
  frage: Was steht in einer Array-Variable, und was ist der Unterschied zu einer int-Variable?
  antwort: |
    In einer `int`-Variable steht die Zahl selbst. Eine Array-Variable enthält nur eine Referenz, also einen Verweis
    darauf, wo das Array im Speicher liegt. Das Array selbst liegt im Heap. Darum kopiert eine Zuweisung zwischen
    Array-Variablen nur den Verweis, während sie bei `int` die Zahl kopiert.
  kernpunkte:
    - int enthält den Wert
    - Array-Variable enthält eine Referenz
    - Zuweisung kopiert den Inhalt der Variable
- id: ar-karte-gleich
  frage: Was prüft der Vergleich a == b bei zwei Arrays, und wann ist er sinnvoll?
  antwort: |
    Meistens nicht. `==` vergleicht die beiden Referenzen. Es liefert nur dann `true`, wenn beide Variablen auf
    dasselbe Array zeigen. Zwei verschiedene Arrays mit gleichem Inhalt ergeben `false`. Für den Inhalt vergleiche
    ich zuerst die Längen und dann in einer Schleife jedes Element. Das ist dieselbe Falle wie `==` bei Strings (siehe
    2.7 String-Methoden und der Vergleich mit equals).
  kernpunkte:
    - == vergleicht Referenzen
    - gleicher Inhalt ergibt trotzdem false
    - Inhaltsvergleich mit Schleife
- id: ar-karte-alias
  frage: Warum verändert eine Methode das Original, obwohl sie scheinbar auf einer Kopie arbeitet?
  antwort: |
    Weil `int[] kopie = werte;` keine Kopie ist. Die Zuweisung kopiert nur die Referenz, `kopie` ist ein zweiter
    Name für dasselbe Array. Der Parameter `werte` zeigt wiederum auf das Array des Aufrufers. Jede Änderung über
    `kopie` landet also im Original. So ist es in Aufgabe 1 von Blatt 4.
  kernpunkte:
    - Zuweisung kopiert die Referenz
    - kopie ist ein Alias
    - Änderung trifft das Original
- id: ar-karte-void
  frage: Wieso braucht eine Methode, die ein Array füllt, keinen Rückgabewert?
  antwort: |
    Beim Aufruf wird die Referenz auf das Array in den Parameter kopiert. Parameter und Variable des Aufrufers zeigen
    damit auf dasselbe Array. Wenn die Methode über den Parameter Elemente beschreibt, ändert sie genau dieses Array,
    und der Aufrufer sieht die Werte. Das ist call-by-value wie in 6.2 Parameter, nur dass der kopierte Wert
    eine Referenz ist.
  kernpunkte:
    - Referenz wird kopiert
    - beide zeigen auf dasselbe Array
    - call-by-value wie in 6.2 Parameter
- id: ar-karte-neuzuweisen
  frage: Eine Methode weist ihrem Array-Parameter ein neues Array zu. Warum sieht der Aufrufer den alten Inhalt?
  antwort: |
    Der Parameter ist eine eigene lokale Variable. Die Zuweisung biegt nur ihren Pfeil auf das neue Array um. Die
    Variable des Aufrufers ist eine andere Variable und zeigt weiter auf das alte Array. Am Ende der Methode
    verschwindet der Parameter, und das neue Array ist verloren. Soll der Aufrufer das neue Array bekommen, muss die
    Methode es zurückgeben, und der Aufrufer muss es speichern.
  kernpunkte:
    - nur der Pfeil des Parameters ändert sich
    - Aufrufer zeigt weiter auf das alte Array
    - neues Array zurückgeben und speichern
- id: ar-karte-maximum
  frage: Warum beginnt man beim Maximum mit a[0] und nicht mit 0?
  antwort: |
    Ein Startwert 0 ist nur dann harmlos, wenn mindestens ein Element größer als 0 ist. Bei lauter negativen Werten
    bliebe das Ergebnis 0, obwohl 0 gar nicht im Array vorkommt. `a[0]` ist dagegen sicher ein Wert aus dem Array.
    Voraussetzung ist, dass das Array mindestens ein Element hat, darum steht bei solchen Aufgaben die Vorbedingung
    `a.length > 0`.
  kernpunkte:
    - 0 versagt bei negativen Werten
    - a[0] ist ein echtes Element
    - Vorbedingung length größer 0
- id: ar-karte-filtern
  frage: Wie erzeugst du ein Array, das nur bestimmte Elemente eines anderen enthält?
  antwort: |
    In zwei Schritten. Die erste Schleife zählt, wie viele Elemente die Bedingung erfüllen. Dann lege ich ein Array
    genau dieser Länge an. Die zweite Schleife läuft mit `i` über das alte Array und schreibt jeden Treffer auf
    `neu[j]`. Der Schreibindex `j` beginnt bei 0 und wächst nur bei einem Treffer. Am Ende muss `j` gleich der neuen
    Länge sein.
  kernpunkte:
    - erst zählen, dann anlegen
    - Lesen mit i, Schreiben mit j
    - j wächst nur bei Treffer
- id: ar-karte-suche
  frage: Wie suchst du den ersten Index eines Werts, und wo steht return -1?
  antwort: |
    Ich durchlaufe das Array von vorne. Beim ersten Element, das gleich dem gesuchten Wert ist, gebe ich sofort
    seinen Index zurück. Das `return -1;` steht erst hinter der Schleife, denn erst wenn alle Elemente geprüft sind,
    steht fest, dass es keinen Treffer gibt. -1 eignet sich als Ergebnis, weil es nie ein gültiger Index ist.
  kernpunkte:
    - return i beim ersten Treffer
    - return -1 erst nach der Schleife
    - -1 ist kein gültiger Index
- id: ar-karte-null
  frage: Was ist der Unterschied zwischen null und einem leeren Array?
  antwort: |
    `null` heißt, die Variable zeigt auf gar kein Array. Schon `a.length` wirft dann eine `NullPointerException`. Ein
    leeres Array, etwa `new int[0]`, ist ein echtes Array mit der Länge 0. Man kann `length` lesen, und eine Schleife
    läuft einfach kein einziges Mal. Darum bedeutet die Vorbedingung `a != null` etwas anderes als `a.length > 0`.
  kernpunkte:
    - null zeigt auf nichts
    - leeres Array hat Länge 0
    - zwei verschiedene Vorbedingungen
- id: ar-karte-quiz
  frage: Wie beurteilst du im Quiz einen Kommentar zum Inhalt eines Arrays nach einer Schleife?
  antwort: |
    Ich setze kleine Werte für `n` ein, mindestens einen geraden und einen ungeraden, und schreibe das ganze Array
    auf. Dabei achte ich besonders auf Plätze, die die Schleife nie beschreibt, denn dort steht der Standardwert 0.
    Ein Kommentar ist nur richtig, wenn er für jedes erlaubte `n` stimmt. Ein einziges Gegenbeispiel genügt, um ihn
    als falsch zu erkennen.
  kernpunkte:
    - kleine n einsetzen, gerade und ungerade
    - unbeschriebene Plätze haben Standardwert
    - ein Gegenbeispiel genügt
- id: ar-karte-zufall
  frage: Wie erzeugst du eine ganze Zufallszahl von 1 bis max, und wie testest du eine Methode mit Zufall?
  antwort: |
    `Math.random()` liefert eine Kommazahl von mindestens 0 und kleiner als 1. Mit `(int) (Math.random() * max)`
    entsteht eine ganze Zahl von 0 bis `max - 1`, und `+ 1` verschiebt sie auf 1 bis `max`. Eine Methode mit Zufall
    teste ich über Eigenschaften: die Länge, den Wertebereich und die Abhängigkeiten zwischen den Werten. Mit
    `max = 1` gibt es sogar ein festes Ergebnis.
  kernpunkte:
    - Math.random mal max, Cast, plus 1
    - Eigenschaften statt einzelner Werte prüfen
    - Sonderfall mit festem Ergebnis
```
