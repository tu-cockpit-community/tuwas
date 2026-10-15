---
nummer: 13
titel: Rekursion auf Arrays
kurz: Rekursive Methoden, die ein Array mit einem Index durchlaufen, prüfen, durchsuchen, neu befüllen, von beiden Enden bearbeiten oder halbieren. Genau so, wie Aufgabenblatt 4 und die rekursive Aufgabe im Programmiertest es verlangen.
teil: arrays
stunden: 4
pruefungsgewicht: 3
voraussetzungen: [methoden, rekursion, arrays]
lernziele:
  - rekursive Methoden schreiben, die ein Array mit einem Index-Parameter durchlaufen, und dabei den Basisfall am Arrayende, den Fortschritt index + 1 und den Startaufruf richtig wählen
  - den Ablauf einer Array-Rekursion verfolgen, die Aufrufe zählen, Ausgaben vor und nach dem Selbstaufruf ordnen und Rückgabewerte in einer Tabelle herleiten
  - rekursiv prüfen und suchen, also alle oder irgendein Element prüfen, den ersten oder letzten passenden Index, das Maximum und Eigenschaften benachbarter Paare ab einem Index bestimmen
  - mit einer Rekursion ein neues Array erzeugen und befüllen oder ein übergebenes Array direkt verändern und erklären, was der Aufrufer davon sieht
  - Rekursionen mit zwei Indizes schreiben, die ein Intervall von beiden Enden zur Mitte bearbeiten, und dabei gerade und ungerade Längen richtig behandeln
  - ein Array nach dem Prinzip Teile und herrsche halbieren, die Teilergebnisse kombinieren und die Anzahl der Aufrufe bestimmen
  - Fehler in Array-Rekursionen finden und reparieren, etwa Indexüberschreitung, Endlosrekursion durch index++ oder eine falsche Teilung und einen falschen Startwert des Ergebnisses
  - Aufgaben im Stil von Aufgabenblatt 4 und Programmiertest unter den Einschränkungen lösen (keine Schleifen, keine Hilfsmethoden, Kopf unverändert, kein clone) und Testfälle in main schreiben
---

**Worum geht es?** In [10.3 Rekursion mit ganzen Zahlen](/lernen/ep1/rekursion/rekursion-mit-ganzen-zahlen) und
[10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings) hast du Rekursion mit Zahlen und Strings kennengelernt.
Eine **rekursive Methode** ruft sich selbst auf. Sie führt eine Aufgabe auf eine kleinere Aufgabe derselben Art
zurück, bis die Aufgabe so klein ist, dass die Antwort ohne weitere Arbeit feststeht. In diesem Kapitel wenden
wir dieselbe Idee auf **Arrays** an. Ein Array ist eine nummerierte Reihe von Werten desselben Typs, zum Beispiel
zwölf Monatstemperaturen. Arrays hast du in [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge) kennengelernt.

Ein Bild aus dem Alltag: Du sollst die Beträge eines Stapels Rechnungen zusammenzählen. Du nimmst die oberste
Rechnung, merkst dir ihren Betrag und gibst den restlichen Stapel einer Kollegin: „Zähl du den Rest zusammen.“ Sie
macht es genauso. Die letzte Person bekommt einen leeren Stapel und sagt: „Das ist 0.“ Dann wandern die
Zwischensummen zurück. Bei einem Array kannst du den Stapel aber nicht wirklich kleiner machen. Stattdessen sagst
du: „Zähl ab Rechnung Nummer 5 zusammen.“ Diese Nummer ist der **Index**, und er wird in diesem Kapitel zum
wichtigsten Werkzeug.

**Was kommt in der Prüfung?** Rekursion auf Arrays ist in EP1 ein fester Bestandteil.

- **Aufgabenblatt 4:** In Aufgabe 4 schreibst du rekursive Methoden auf Arrays. Im Wintersemester 2023 verglich eine
  davon zwei Temperaturreihen und lieferte ein neues `char`-Array. Eine zweite tauschte den kleinsten Wert nach vorne
  und den größten nach hinten. Schleifen, Hilfsmethoden und Klassenvariablen (Variablen, die außerhalb jeder Methode
  in der Klasse stehen) sind dabei verboten.
- **Programmiertest:** Die dritte Methode war in den vorliegenden Tests von 2020 bis 2022 eine rekursive Methode ohne
  Schleifen. Mal arbeitete sie auf einem String, mal auf einem Array mit einem Startindex, zum Beispiel „Gibt es genau
  n geordnete Paare ab index?“ oder „Wechseln die Vorzeichen ab index ständig?“.
- **Quiz:** In einem TUWEL-Test vom 13. Jänner (Wintersemester 2021/22) hieß eine Frage sinngemäß: „Beurteilen Sie verschiedene rekursive
  Implementierungen bezüglich Rückgabewert und Terminierung“. **Terminieren** heißt: Die Methode kommt nach endlich
  vielen Aufrufen zu einem Ende.
- **Zusatzfragen:** Auf den Aufgabenblättern stehen Zusatzfragen wie „Wie oft wird die Methode aufgerufen?“. Im
  Feedbackgespräch können Fragen wie „Warum brauchst du den Parameter index?“ oder „Wo legst du das neue Array an?“
  kommen. Diese beiden Beispiele sind nicht aus einem echten Gespräch belegt, sie passen aber zum Stoff.

**Wozu brauchst du das später?** Die Idee, ein Array zu halbieren und die Hälften getrennt zu lösen, heißt **Teile
und herrsche**. Auf ihr beruht die binäre Suche in
[18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren).
Auch schnelle Sortierverfahren wie Mergesort nutzen sie. Sie werden in
[19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren) kurz erwähnt.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Arrays** aus [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge). Kurz zur Erinnerung: `int[] a = {4, 7, 2};` legt ein Array mit
  drei Werten an. `a[0]` ist der erste Wert, `a[2]` der letzte. `a.length` ist die Anzahl der Werte, hier 3. Gültige
  Indizes reichen von 0 bis `a.length - 1`. Ein Zugriff auf `a[3]` bricht mit einer
  `ArrayIndexOutOfBoundsException` ab.
- **Arrays als Parameter** aus [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert). Eine Methode bekommt nicht eine Kopie des Arrays,
  sondern einen Verweis auf dasselbe Array. Ändert sie `a[0]`, sieht der Aufrufer die Änderung.
- **Rekursion mit einem Index** aus
  [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string). Das
  ist die wichtigste Voraussetzung.
- **Den Aufrufstapel** aus [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg). Er
  erklärt, warum Ausgaben vor und nach dem Selbstaufruf in verschiedener Reihenfolge erscheinen.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: ra-ein-index
titel: Index und Länge eines Arrays
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] werte = {12, 5, 30, 8};
      System.out.println(werte.length);
      System.out.println(werte[1]);
      System.out.println(werte[werte.length - 1]);
    loesung: |
      4
      5
      8
    fehler:
      - wert: "4\n12\n8"
        meldung: Der Index beginnt bei 0. `werte[1]` ist also der **zweite** Wert, nicht der erste.
      - wert: "3\n5\n8"
        meldung: '`length` zählt die Werte, und das sind vier. Der größte gültige Index ist dagegen 3.'
hinweise:
  - Zähle die Indizes ab 0 durch und schreib sie unter die Werte. Der letzte Index ist `length - 1`.
loesung: |
  Das Array hat vier Werte, also ist `werte.length` gleich 4. Die Indizes lauten 0, 1, 2 und 3.
  ---
  `werte[1]` ist der Wert mit Index 1, also 5. `werte[werte.length - 1]` ist `werte[3]`, also der letzte Wert 8.
```

```aufgabe
id: ra-ein-referenz
titel: Eine Methode ändert ein Array
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert) und
  [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      public class Verweis {
          public static void aendere(int[] a, int x) {
              a[0] = 99;
              x = 99;
          }

          public static void main(String[] args) {
              int[] feld = {1, 2, 3};
              int zahl = 1;
              aendere(feld, zahl);
              System.out.println(feld[0] + " " + zahl);
          }
      }
    loesung: |
      99 1
    fehler:
      - wert: "1 1"
        meldung: Die Methode bekommt einen Verweis auf **dasselbe** Array wie `main`. Die Zuweisung `a[0] = 99` ändert also auch `feld`.
      - wert: "99 99"
        meldung: Bei einem `int` bekommt die Methode nur eine Kopie des Werts. `x = 99` ändert die Kopie, das `zahl` in `main` bleibt 1.
hinweise:
  - Ein Array-Parameter zeigt auf dasselbe Array wie die Variable des Aufrufers. Ein `int`-Parameter ist eine Kopie.
loesung: |
  `a` und `feld` zeigen auf dasselbe Array. Darum ist nach `a[0] = 99` auch `feld[0]` gleich 99.
  ---
  `x` ist eine eigene Variable mit einer Kopie von `zahl`. Die Zuweisung `x = 99` ändert `zahl` nicht. Ausgabe `99 1`.
```

```aufgabe
id: ra-ein-string-index
titel: Ein Index wandert durch einen String
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung:
  [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string))
teile:
  - typ: ausgabe
    code: |
      public class Sterne {
          public static int sterne(String s, int index) {
              if (index == s.length()) {
                  return 0;
              }
              if (s.charAt(index) == '*') {
                  return 1 + sterne(s, index + 1);
              }
              return sterne(s, index + 1);
          }

          public static void main(String[] args) {
              System.out.println(sterne("a**b*", 0));
              System.out.println(sterne("a**b*", 3));
          }
      }
    loesung: |
      3
      1
    fehler:
      - wert: "3\n3"
        meldung: Der zweite Aufruf beginnt erst bei Index 3, also beim `b`. Die Sterne an den Indizes 1 und 2 zählen nicht mit.
      - wert: "3\n2"
        meldung: Ab Index 3 stehen nur noch `b` und `*`. Das ist ein einziger Stern.
hinweise:
  - Schreib die Indizes unter die Zeichen. Gezählt wird nur ab dem Startindex bis zum Ende.
loesung: |
  Die Methode prüft das Zeichen an der Stelle `index` und ruft sich mit `index + 1` auf, bis `index` die Länge 5 erreicht.
  ---
  Ab Index 0 gibt es Sterne an den Indizes 1, 2 und 4, also 3. Ab Index 3 bleibt nur der Stern an Index 4, also 1.
```

```aufgabe
id: ra-ein-aufrufe
titel: Wie oft wird die Methode aufgerufen?
niveau: 1
art: check
angabe: |
  Gegeben ist die Methode `sterne(String s, int index)` aus der Frage „Ein Index wandert durch einen String“. Sie
  prüft das Zeichen an der Stelle `index` und ruft sich mit `index + 1` auf. Ihr Basisfall ist `index == s.length()`.
  Wie oft wird `sterne` beim Aufruf `sterne("abc", 0)` insgesamt aufgerufen? Der Aufruf aus `main` zählt mit. (Wiederholung:
  [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Der Aufruf mit `index = 3` landet im Basisfall. Er ist trotzdem ein Aufruf und zählt mit.
hinweise:
  - Schreib die Werte von `index` untereinander, bis `index == s.length()` gilt.
loesung: |
  Die Aufrufe haben `index = 0`, `1`, `2` und `3`. Erst bei 3 gilt `index == 3`, das ist der Basisfall.
  ---
  Das sind 4 Aufrufe. Allgemein braucht ein String der Länge n genau n + 1 Aufrufe.
```

```aufgabe
id: ra-ein-exception
titel: Ein Zugriff zu weit
niveau: 1
art: check
angabe: |
  Welche Zeile bricht das Programm ab? (Wiederholung:
  [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen))
teile:
  - typ: zeilen
    code: |
      int[] t = {3, 6, 9};
      int s = 0;
      for (int i = 0; i <= t.length; i++) {
          s = s + t[i];
      }
      System.out.println(s);
    loesung: [4]
    fehler:
      - wert: [3]
        meldung: Zeile 3 ist erlaubter Code. Abgebrochen wird erst beim Zugriff `t[i]` mit `i = 3`, und der steht in Zeile 4.
hinweise:
  - Welche Werte nimmt `i` an? Bei welchem Wert ist `t[i]` kein gültiger Zugriff mehr?
loesung: |
  Wegen `i <= t.length` läuft `i` bis 3. Gültige Indizes sind aber nur 0, 1 und 2.
  ---
  Beim Zugriff `t[3]` in Zeile 4 wirft Java eine `ArrayIndexOutOfBoundsException`. Richtig wäre `i < t.length`.
```

```aufgabe
id: ra-ein-tostring
titel: Ein Array ausgeben
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] neu = new int[3];
      neu[1] = 7;
      System.out.println(Arrays.toString(neu));
    loesung: |
      [0, 7, 0]
    fehler:
      - wert: "[7]"
        meldung: '`new int[3]` legt sofort drei Plätze an. Jeder Platz bekommt den Standardwert 0, auch wenn man ihn nie beschreibt.'
      - wert: "[7, 0, 0]"
        meldung: '`neu[1]` ist der **zweite** Platz. Der erste Platz hat den Index 0 und bleibt 0.'
hinweise:
  - '`new int[3]` füllt alle drei Plätze mit 0. `Arrays.toString` schreibt alle Werte in eckigen Klammern, durch Komma und Leerzeichen getrennt.'
loesung: |
  `new int[3]` erzeugt das Array `[0, 0, 0]`. Danach wird nur der Platz mit Index 1 auf 7 gesetzt.
  ---
  `Arrays.toString` liefert den Text `[0, 7, 0]`. Code-Ausschnitte wie dieser laufen mit `import java.util.*;`, darum ist `Arrays` bekannt.
```

## Ein Array mit einem Index durchlaufen

```aufgabe
id: ra-ix-check-rest
titel: Was ist bei Strings der Rest?
niveau: 1
art: check
angabe: |
  In [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings) hast du einen String in das erste
  Zeichen und den Rest zerlegt. Welcher Ausdruck liefert den Rest von `s` ohne das erste Zeichen?
teile:
  - typ: auswahl
    optionen: ['`s.substring(1)`', '`s.charAt(1)`', '`s.length() - 1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`charAt(1)` liefert nur ein einzelnes Zeichen, das zweite. Der Rest besteht aus allen Zeichen ab Index 1.'
      - wert: 2
        meldung: '`s.length() - 1` ist eine Zahl, nämlich die Länge des Rests. Gesucht ist der Rest selbst, also ein String.'
loesung: |
  `s.substring(1)` liefert einen neuen, um ein Zeichen kürzeren String. Er beginnt beim Zeichen mit Index 1.
  ---
  Diesen Rest hat die Rekursion an den Selbstaufruf übergeben, bis der String leer war.
```

Bei Strings war der Fortschritt einfach: Der Selbstaufruf bekam `s.substring(1)`, einen kürzeren String. Bei
Arrays gibt es nichts Vergleichbares, das in den Prüfungen erlaubt ist. Ein Array hat eine feste Länge. Man kann es
nicht kürzen, sondern höchstens ein neues, kürzeres Array anlegen und die Werte hineinkopieren. Das Kopieren ist im
Programmiertest aber verboten: `clone`, `System.arraycopy` und `Arrays.copyOfRange` darfst du dort nicht verwenden.

Die Lösung kennst du schon aus [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string).
Wir lassen das Array unverändert und geben dem Selbstaufruf zusätzlich einen **Index** mit. Der Index sagt: „Ab
hier ist noch etwas zu tun.“ Alles links davon ist schon erledigt.

:::definition[Der Rest ab einem Index]
Bei einer Array-Rekursion mit dem Parameter `index` bearbeitet jeder Aufruf den **Rest ab index**. Das sind die
Werte `a[index]`, `a[index + 1]`, … bis `a[a.length - 1]`. Der Rest ist leer, wenn `index == a.length` gilt.
:::

**Beispiel:** Für `a = {4, 7, 2}` ist der Rest ab Index 1 die Folge 7, 2. Der Rest ab Index 3 ist leer, denn es gibt
keinen Wert mit Index 3. **Kein Beispiel:** Der Rest ab Index 1 ist **nicht** das Array `{7, 2}`. Es entsteht kein
neues Array. Die Methode schaut nur ab Index 1 in dasselbe Array `a`.

:::beispiel[Die Summe eines Arrays rekursiv]
```java
public class Summe {
    public static int summe(int[] a, int index) {
        if (index == a.length) {
            return 0;
        }
        return a[index] + summe(a, index + 1);
    }

    public static void main(String[] args) {
        int[] a = {4, 7, 2};
        System.out.println(summe(a, 0));
    }
}
```

Die Zeilen der Methode `summe`:

- `public static int summe(int[] a, int index)` ist der Methodenkopf. Die Methode bekommt das Array `a` und den
  Startindex `index`. Sie liefert eine ganze Zahl, die Summe des Rests ab `index`.
- `if (index == a.length)` ist der **Basisfall**. Der Rest ist leer, und die Summe von gar nichts ist 0.
- `return a[index] + summe(a, index + 1);` ist der **rekursive Fall**. Der Aufruf nimmt seinen eigenen Wert
  `a[index]` und addiert die Summe des Rests ab dem nächsten Index. Das `index + 1` ist der **Fortschritt**.
- In `main` steht der **Startaufruf** `summe(a, 0)`. Er bestimmt, dass ab dem ersten Wert gezählt wird.

Der Ablauf als Tabelle. Auf dem Hinweg wird noch nichts gerechnet, jeder Aufruf wartet auf den nächsten. Auf dem
Rückweg entstehen die Ergebnisse von unten nach oben.

```
Aufruf        a[index]   wartet auf          Rückgabe
summe(a, 0)   4          summe(a, 1)         4 + 9 = 13
summe(a, 1)   7          summe(a, 2)         7 + 2 = 9
summe(a, 2)   2          summe(a, 3)         2 + 0 = 2
summe(a, 3)   –          nichts, Basisfall   0
```

Das Programm gibt `13` aus. Es gab vier Aufrufe für drei Werte. Allgemein braucht ein Array der Länge n genau
n + 1 Aufrufe, denn der Aufruf mit dem leeren Rest zählt mit.
:::

Wichtig: Alle vier Aufrufe arbeiten mit **demselben** Array. Es gibt nur ein Array im Speicher. Jeder Aufruf hat aber
seinen eigenen Parameter `index`. Darum weiß jeder Aufruf, für welche Stelle er zuständig ist.

```aufgabe
id: ra-ix-gefuehrt
titel: Gerade Werte zählen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Gerade {
          public static int gerade(int[] a, int index) {
              if (index == a.length) {
                  return 0;
              }
              int rest = gerade(a, index + 1);
              if (a[index] % 2 == 0) {
                  return rest + 1;
              }
              return rest;
          }

          public static void main(String[] args) {
              int[] z = {6, 3, 10, 7, 4};
              System.out.println(gerade(z, 0));
              System.out.println(gerade(z, 2));
          }
      }
    loesung: |
      3
      2
    fehler:
      - wert: "3\n3"
        meldung: Der zweite Aufruf beginnt bei Index 2. Die 6 an Index 0 gehört nicht mehr zum Rest und zählt nicht mit.
      - wert: "2\n1"
        meldung: Auch der letzte Wert wird geprüft. Erst der Aufruf mit `index == 5` ist der Basisfall, und er prüft keinen Wert mehr.
gefuehrt:
  - text: Welcher Aufruf ist der Basisfall, wenn das Array 5 Werte hat?
    teil:
      typ: auswahl
      optionen: ['`gerade(z, 5)`', '`gerade(z, 4)`', '`gerade(z, 0)`']
      richtig: [0]
    erklaerung: Der Basisfall greift bei `index == a.length`, also bei 5. Der Aufruf mit Index 4 prüft noch den letzten Wert 4.
  - text: Welche Werte im ganzen Array sind gerade? Wie viele sind es?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Gerade sind 6, 10 und 4. Ungerade sind 3 und 7.
  - text: Der zweite Aufruf startet bei Index 2. Welche Werte gehören zu seinem Rest?
    teil:
      typ: auswahl
      optionen: ['10, 7 und 4', '3, 10, 7 und 4', '6, 3 und 10']
      richtig: [0]
    erklaerung: Der Rest ab Index 2 enthält die Werte mit den Indizes 2, 3 und 4.
  - text: Wie viele davon sind gerade?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Gerade sind 10 und 4.
hinweise:
  - Schreib die Indizes unter die Werte. Jeder Aufruf prüft nur den Wert an seiner Stelle `index`.
loesung: |
  **Ansatz:** Die Methode zählt die geraden Werte im Rest ab `index`. Der Basisfall `index == a.length` liefert 0.
  ---
  Ab Index 0 sind 6, 10 und 4 gerade, also 3. Ab Index 2 bleiben 10, 7 und 4, davon sind 10 und 4 gerade, also 2.
```

Ob ein Aufruf seinen Beitrag vor oder nach dem Selbstaufruf leistet, spielt bei einer Summe keine Rolle. Bei
Ausgaben entscheidet es dagegen über die Reihenfolge, genau wie in
[10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg).

:::beispiel[Ein Array vorwärts und rückwärts ausgeben]
```java
public class Ausgeben {
    public static void vorwaerts(int[] a, int index) {
        if (index == a.length) {
            return;
        }
        System.out.print(a[index] + " ");
        vorwaerts(a, index + 1);
    }

    public static void rueckwaerts(int[] a, int index) {
        if (index == a.length) {
            return;
        }
        rueckwaerts(a, index + 1);
        System.out.print(a[index] + " ");
    }

    public static void main(String[] args) {
        int[] a = {3, 8, 5};
        vorwaerts(a, 0);
        System.out.println();
        rueckwaerts(a, 0);
        System.out.println();
    }
}
```

- In `vorwaerts` steht die Ausgabe **vor** dem Selbstaufruf. Sie läuft auf dem Hinweg. `vorwaerts(a, 0)` gibt
  zuerst 3 aus, dann ruft es `vorwaerts(a, 1)` auf, das 8 ausgibt, und so weiter. Die Ausgabe ist `3 8 5`.
- In `rueckwaerts` steht die Ausgabe **hinter** dem Selbstaufruf. `rueckwaerts(a, 0)` ruft zuerst `rueckwaerts(a, 1)`
  auf und wartet. Das wiederholt sich bis zum Basisfall mit Index 3. Danach werden die Aufrufe in umgekehrter
  Reihenfolge fertig. Zuerst gibt der Aufruf mit Index 2 die 5 aus, dann der mit Index 1 die 8, zuletzt der mit
  Index 0 die 3. Die Ausgabe ist `5 8 3`.

Beide Methoden durchlaufen den Index von 0 bis 3. Nur die Stelle der Ausgabe ist verschieden.
:::

:::merke[Rezept: ein Array mit einem Index durchlaufen]
1. **Basisfall:** `index == a.length`. Der Rest ist leer. Gib das Ergebnis für „nichts“ zurück: 0 bei Summen und
   Zählern, `true` bei „alle erfüllen …“, `false` bei „irgendeiner erfüllt …“. Eine `void`-Methode endet mit `return;`.
2. **Beitrag:** Der aktuelle Aufruf bearbeitet genau den Wert `a[index]`.
3. **Fortschritt:** Der Selbstaufruf bekommt dasselbe Array und `index + 1`.
4. **Zusammensetzen:** Verknüpfe den Beitrag mit dem Ergebnis des Selbstaufrufs, etwa durch `+`.
5. **Startaufruf:** Von außen wird die Methode mit Index 0 aufgerufen, wenn das ganze Array gemeint ist.
:::

```aufgabe
id: ra-ix-ausgabe-ab
titel: Summe ab einem Startindex
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class AbIndex {
          public static int summe(int[] a, int index) {
              if (index == a.length) {
                  return 0;
              }
              return a[index] + summe(a, index + 1);
          }

          public static void main(String[] args) {
              int[] t = {10, 20, 5, 1, 40};
              System.out.println(summe(t, 0));
              System.out.println(summe(t, 3));
              System.out.println(summe(t, 5));
          }
      }
    loesung: |
      76
      41
      0
    fehler:
      - wert: "76\n46\n0"
        meldung: Der Rest ab Index 3 beginnt beim Wert mit Index 3, also bei 1. Die 5 hat Index 2 und gehört nicht dazu.
      - wert: "76\n41\n40"
        meldung: Bei `index = 5` gilt sofort `index == a.length`. Der Rest ist leer, und die Summe von nichts ist 0.
hinweise:
  - Schreib die Indizes 0 bis 4 unter die Werte. Jeder Aufruf addiert die Werte ab seinem Startindex bis zum Ende.
loesung: |
  **Ansatz:** `summe(t, k)` addiert alle Werte ab Index `k`.
  ---
  Ab Index 0: `10 + 20 + 5 + 1 + 40 = 76`. Ab Index 3: `1 + 40 = 41`.
  ---
  `summe(t, 5)` ist sofort der Basisfall, denn das Array hat die Länge 5. Ergebnis 0.
```

:::achtung[Das Array wird nicht kürzer]
Wer die String-Rekursion im Kopf hat, schreibt leicht diesen Basisfall:

```java
public static int summe(int[] a, int index) {
    if (a.length == 0) {          // falsch: a.length ändert sich nie
        return 0;
    }
    return a[index] + summe(a, index + 1);
}
```

Für `a = {4, 7, 2}` ist `a.length` in jedem Aufruf 3, denn alle Aufrufe sehen dasselbe Array. Die Bedingung ist nie
wahr. Der Aufruf mit Index 3 greift auf `a[3]` zu, und das Programm bricht mit
`ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3` ab. Kleiner wird nur der Rest, und den
beschreibt der Index. Richtig ist deshalb `if (index == a.length)`.
:::

```aufgabe
id: ra-ix-rf-basisfall
titel: Welche Basisfälle sind richtig?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Methode `int zaehleNullen(int[] a, int index)` soll die Nullen im Rest ab `index` zählen. Sie wird mit
  `zaehleNullen(a, 0)` gestartet. Beurteile jede Aussage über ihren Basisfall.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`if (index == a.length) return 0;` ist ein passender Basisfall.'
        richtig: true
        erklaerung: Bei `index == a.length` ist der Rest leer. Ein leerer Rest enthält keine Null, also ist 0 richtig.
      - text: '`if (a.length == 0) return 0;` beendet die Rekursion für das Array `{0, 5}`.'
        richtig: false
        erklaerung: '`a.length` bleibt in jedem Aufruf 2. Die Bedingung wird nie wahr, und der Index läuft über das Ende hinaus. Liest die Methode `a[index]` vor dem Selbstaufruf, bricht sie bei `a[2]` mit einer `ArrayIndexOutOfBoundsException` ab. Ruft sie sich zuerst selbst auf, läuft sie bis zum `StackOverflowError`.'
      - text: '`if (index == a.length - 1) return 0;` zählt eine Null an der letzten Stelle nicht mit.'
        richtig: true
        erklaerung: Der Aufruf mit dem letzten Index endet sofort mit 0, ohne `a[index]` zu prüfen.
      - text: 'Mit dem Basisfall `index == a.length` funktioniert die Methode auch für ein leeres Array.'
        richtig: true
        erklaerung: 'Bei einem leeren Array ist `a.length` gleich 0. Schon der Startaufruf mit Index 0 ist der Basisfall und liefert 0.'
    fehler:
      - wert: [r, r, r, r]
        meldung: '`a.length` ist die Länge des ganzen Arrays. Sie ändert sich bei keinem Aufruf.'
      - wert: [r, f, f, r]
        meldung: Prüfe den Aufruf mit dem letzten Index genau. Wird der letzte Wert noch untersucht, bevor `return 0` kommt?
hinweise:
  - Welcher Wert ändert sich von Aufruf zu Aufruf, `a.length` oder `index`?
loesung: |
  **Ansatz:** Ein Basisfall muss genau dann greifen, wenn der Rest leer ist, also bei `index == a.length`.
  ---
  Aussage 1 und 4 sind richtig. Aussage 2 ist falsch, weil `a.length` gleich bleibt. Aussage 3 ist richtig, denn dieser Basisfall übergeht den letzten Wert.
```

```aufgabe
id: ra-ix-reihenfolge
titel: Ausgaben auf dem Hin- und Rückweg
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static void zeige(int[] a, int index) {
      if (index == a.length) {
          System.out.println("Ende");
          return;
      }
      System.out.println("hin " + a[index]);
      zeige(a, index + 1);
      System.out.println("zurück " + a[index]);
  }
  ```

  `main` ruft `zeige(new int[]{9, 1, 6}, 1)` auf. Bringe die Ausgaben in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente: ["`hin 1`", "`hin 6`", "`Ende`", "`zurück 6`", "`zurück 1`"]
    fehler:
      - wert: [0, 1, 2, 4, 3]
        meldung: Die `zurück`-Zeilen laufen auf dem Rückweg. Der zuletzt begonnene Aufruf, der mit dem Wert 6, wird zuerst fertig.
hinweise:
  - Der Startaufruf hat Index 1. Die 9 an Index 0 kommt also gar nicht vor.
  - Erst kommen alle `hin`-Zeilen, dann `Ende`, dann die `zurück`-Zeilen in umgekehrter Reihenfolge.
loesung: |
  **Ansatz:** Die Aufrufe haben die Indizes 1, 2 und 3. Der Aufruf mit Index 3 ist der Basisfall.
  ---
  Hinweg: `hin 1`, `hin 6`. Dann der Basisfall mit `Ende`.
  ---
  Rückweg: Zuerst wird der Aufruf mit Index 2 fertig und gibt `zurück 6` aus, dann der mit Index 1 mit `zurück 1`.
```

:::achtung[index++ statt index + 1]
Dieser Selbstaufruf sieht harmlos aus:

```java
return a[index] + summe(a, index++);    // falsch
```

`index++` erhöht die Variable `index`, liefert aber den **alten** Wert. Der Selbstaufruf bekommt also wieder
denselben Index, zum Beispiel 0. Der neue Aufruf ruft sich wieder mit 0 auf, und so weiter. Der Basisfall wird nie
erreicht. Nach einigen tausend Aufrufen ist der Aufrufstapel voll, und Java bricht mit einem `StackOverflowError` ab.
Schreib im Selbstaufruf immer `index + 1`. Dieser Ausdruck ändert keine Variable, er berechnet nur den neuen Wert.
:::

```aufgabe
id: ra-ix-luecken
titel: Werte über einer Grenze zählen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Methode soll zählen, wie viele Werte im Rest ab `index` **größer** als `grenze` sind. Fülle die Lücken.
  Beispiel: Für `{5, 12, 8, 20}` und `grenze = 8` ab Index 0 ist das Ergebnis 2, denn nur 12 und 20 sind größer als 8.
teile:
  - typ: lueckentext
    code: |
      public class Grenze {
          public static int groesser(int[] a, int grenze, int index) {
              if (___) {
                  return ___;
              }
              int rest = groesser(a, grenze, ___);
              if (a[index] > grenze) {
                  return ___;
              }
              return rest;
          }
      }
    luecken: [["index == a.length", "index >= a.length", "a.length == index"], ["0"], ["index + 1", "1 + index"], ["rest + 1", "1 + rest"]]
    fehler:
      - wert: ["index == a.length", "0", "index++", "rest + 1"]
        meldung: '`index++` übergibt den alten Wert. Der Selbstaufruf bekäme denselben Index, und die Rekursion endet nie.'
      - wert: ["index == a.length - 1", "0", "index + 1", "rest + 1"]
        meldung: Mit diesem Basisfall wird der letzte Wert nie geprüft. Der Rest ist erst bei `index == a.length` leer.
hinweise:
  - Der Basisfall ist der leere Rest. Wie viele Werte über der Grenze hat ein leerer Rest?
  - Ist der aktuelle Wert größer als die Grenze, ist das Ergebnis um eins größer als das Ergebnis des Rests.
loesung: |
  **Ansatz:** Zähl-Rezept mit Index: Basisfall leerer Rest, Beitrag 1 oder 0, Fortschritt `index + 1`.
  ---
  Lücken: `index == a.length`, `0`, `index + 1` und `rest + 1`.
  ---
  Probe mit `{5, 12, 8, 20}`, Grenze 8: Von hinten liefern die Aufrufe 0, 1, 1, 2, 2. Ergebnis 2.
```

```aufgabe
id: ra-ix-trace
titel: Rückgabewerte in einer Tabelle
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist

  ```java
  public static int f(int[] a, int index) {
      if (index == a.length) {
          return 1;
      }
      return a[index] * f(a, index + 1);
  }
  ```

  `main` ruft `f(new int[]{2, 5, 3}, 0)` auf. Trage für jeden Aufruf den Index und den Rückgabewert ein. Die erste
  Zeile ist der Aufruf aus `main`.
teile:
  - typ: trace
    spalten: [index, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf]
    loesung: [[0, 30], [1, 15], [2, 3], [3, 1]]
    fehler:
      - wert: ["0", "30", "1", "15", "2", "3", "3", "0"]
        meldung: Der Basisfall liefert hier 1, nicht 0. Bei einem Produkt ist 1 der neutrale Startwert, sonst würde alles 0.
      - wert: ["0", "2", "1", "10", "2", "30", "3", "1"]
        meldung: Die Rückgabewerte entstehen auf dem Rückweg, also von unten nach oben. Der erste Aufruf liefert das Gesamtergebnis.
hinweise:
  - Fülle zuerst die Spalte `index` von oben nach unten. Bei welchem Index greift der Basisfall?
  - Rechne die Rückgabewerte von unten nach oben. Jeder Wert ist `a[index]` mal den Wert darunter.
loesung: |
  **Ansatz:** Hinweg mit den Indizes 0, 1, 2, 3. Der Aufruf mit Index 3 ist der Basisfall und liefert 1.
  ---
  Rückweg: Index 2 liefert `3 · 1 = 3`, Index 1 liefert `5 · 3 = 15`, Index 0 liefert `2 · 15 = 30`.
  ---
  Die Methode berechnet also das Produkt aller Werte. Der Startwert 1 verändert ein Produkt nicht.
```

```aufgabe
id: ra-ix-zeilen
titel: Fehler in einer Index-Rekursion finden
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll für den Startaufruf `negative(a, 0)` die Anzahl der negativen Werte in `a` liefern. Sie enthält
  zwei Fehler. Markiere die beiden fehlerhaften Zeilen.
teile:
  - typ: zeilen
    code: |
      public static int negative(int[] a, int index) {
          if (index > a.length) {
              return 0;
          }
          int rest = negative(a, index + 1);
          if (a[index] < 0) {
              return rest + 1;
          }
          return index;
      }
    loesung: [2, 9]
    fehler:
      - wert: [2]
        meldung: Das ist ein Fehler. Schau dir noch den Fall an, in dem `a[index]` nicht negativ ist. Was wird dann zurückgegeben?
      - wert: [6, 9]
        meldung: Zeile 6 prüft richtig, ob der Wert negativ ist. Der zweite Fehler steckt im Basisfall.
hinweise:
  - Was passiert beim Aufruf mit `index == a.length`? Greift der Basisfall schon?
  - Ein nicht negativer Wert trägt nichts bei. Was muss dann zurückgegeben werden?
loesung: |
  **Ansatz:** Basisfall, Fortschritt und beide Rückgaben einzeln prüfen.
  ---
  Zeile 2: Mit `index > a.length` läuft der Aufruf mit `index == a.length` weiter. Nach seinem Selbstaufruf in Zeile 5 folgt in Zeile 6 der Zugriff `a[a.length]` und damit eine Exception. Richtig ist `index == a.length`.
  ---
  Zeile 9: Ein nicht negativer Wert zählt nicht. Zurückgegeben werden muss `rest`, nicht der Index.
```

```aufgabe
id: ra-ix-code-bereich
titel: Werte in einem Bereich zählen
niveau: 2
lernziel: 0
kompetenz: anwenden
quelle: nach Aufgabenblatt 3, WS 2023, Aufgabe 3 (countDigitsAboveFive), auf Arrays übertragen
angabe: |
  Implementiere `int zaehleImBereich(int[] werte, int von, int bis, int index)` **rekursiv** und ohne Schleifen. Die
  Methode zählt, wie viele Werte im Rest ab `index` im **geschlossenen Bereich** `[von, bis]` liegen. Geschlossen heißt:
  Die beiden Grenzen gehören dazu. Ein Wert `x` zählt also, wenn `x >= von` und `x <= bis` gilt.

  Vorbedingungen: `werte != null`, `von <= bis`, `0 <= index <= werte.length`.

  Beispiel: Für `werte = {15, 3, 22, 18, 9}` liefert `zaehleImBereich(werte, 10, 20, 0)` den Wert 2 (15 und 18).
teile:
  - typ: code
    vorlage: |
      public class Bereich {
          public static int zaehleImBereich(int[] werte, int von, int bis, int index) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Bereich {
          public static int zaehleImBereich(int[] werte, int von, int bis, int index) {
              if (index == werte.length) {
                  return 0;
              }
              int rest = zaehleImBereich(werte, von, bis, index + 1);
              if (werte[index] >= von && werte[index] <= bis) {
                  return rest + 1;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "zaehleImBereich(new int[]{15, 3, 22, 18, 9}, 10, 20, 0)", erwartet: "2" }
      - { aufruf: "zaehleImBereich(new int[]{10, 20, 21, 9}, 10, 20, 0)", erwartet: "2", beschreibung: "Grenzen gehören dazu" }
      - { aufruf: "zaehleImBereich(new int[]{15, 3, 22, 18, 9}, 10, 20, 4)", erwartet: "0", beschreibung: "Start beim letzten Index" }
      - { aufruf: "zaehleImBereich(new int[]{}, 0, 5, 0)", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "zaehleImBereich(new int[]{5, 5, 5, 6}, 5, 5, 1)", erwartet: "2", versteckt: true }
    regeln: { keineSchleifenIn: [zaehleImBereich], rekursiv: [zaehleImBereich], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Liegen 10 und 20 im Bereich `[10, 20]`? Ein geschlossener Bereich enthält seine Grenzen. Verwende `>=` und `<=`." }
      - { wert: 4, meldung: "Bei einem leeren Array muss schon der Startaufruf der Basisfall sein. Lautet dein Basisfall `index == werte.length`?" }
      - { wert: "keineSchleifenIn", meldung: "Die Laufvariable der Schleife wird zum Parameter `index`. Statt `i++` rufst du dich mit `index + 1` auf." }
hinweise:
  - Basisfall ist der leere Rest, `index == werte.length`. Er liefert 0.
  - Liegt `werte[index]` im Bereich, ist das Ergebnis `rest + 1`, sonst `rest`. Beide Grenzen gehören dazu.
loesung: |
  **Ansatz:** Zähl-Rezept mit Index. Der Beitrag ist 1, wenn `werte[index]` zwischen `von` und `bis` liegt, beide Grenzen eingeschlossen.
  ---
  ```java
  if (index == werte.length) {
      return 0;
  }
  int rest = zaehleImBereich(werte, von, bis, index + 1);
  if (werte[index] >= von && werte[index] <= bis) {
      return rest + 1;
  }
  return rest;
  ```
  ---
  In Java schreibt man `von <= x <= bis` als zwei Vergleiche mit `&&`. Die Form `von <= x <= bis` kompiliert nicht.
  ---
  Probe mit `{15, 3, 22, 18, 9}` und `[10, 20]`: 15 ja, 3 nein, 22 nein, 18 ja, 9 nein. Ergebnis 2.
```

```aufgabe
id: ra-ix-code-jeder-zweite
titel: Jeden zweiten Wert addieren
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Implementiere `int summeJederZweite(int[] a, int index)` **rekursiv** und ohne Schleifen. Die Methode addiert die
  Werte mit den Indizes `index`, `index + 2`, `index + 4`, … solange der Index gültig ist.

  Vorbedingungen: `a != null`, `index >= 0`. Der Startindex darf auch größer als `a.length` sein, dann ist das
  Ergebnis 0.

  Beispiel: Für `a = {1, 9, 2, 9, 3}` liefert `summeJederZweite(a, 0)` den Wert 6 und `summeJederZweite(a, 1)` den Wert 18.
teile:
  - typ: code
    vorlage: |
      public class JederZweite {
          public static int summeJederZweite(int[] a, int index) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class JederZweite {
          public static int summeJederZweite(int[] a, int index) {
              if (index >= a.length) {
                  return 0;
              }
              return a[index] + summeJederZweite(a, index + 2);
          }
      }
    tests:
      - { aufruf: "summeJederZweite(new int[]{1, 9, 2, 9, 3}, 0)", erwartet: "6", beschreibung: "ungerade Länge, Start 0" }
      - { aufruf: "summeJederZweite(new int[]{1, 9, 2, 9, 3}, 1)", erwartet: "18", beschreibung: "ungerade Länge, Start 1" }
      - { aufruf: "summeJederZweite(new int[]{4, 6, 8, 10}, 0)", erwartet: "12", beschreibung: "gerade Länge" }
      - { aufruf: "summeJederZweite(new int[]{4, 6}, 7)", erwartet: "0", beschreibung: "Start hinter dem Ende" }
      - { aufruf: "summeJederZweite(new int[]{5}, 0)", erwartet: "5", versteckt: true }
    regeln: { keineSchleifenIn: [summeJederZweite], rekursiv: [summeJederZweite], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Bei ungerader Länge springt der Index von 4 auf 6 und trifft die Länge 5 nie genau. Ein Basisfall `index == a.length` wird übersprungen. Verwende `index >= a.length`." }
      - { wert: 3, meldung: "Bei gerader Länge läuft der Index 0, 2, 4. Der Aufruf mit 4 muss der Basisfall sein und darf nicht mehr auf `a[4]` zugreifen." }
      - { wert: "keineSchleifenIn", meldung: "Statt einer Schleife mit `i += 2` rufst du dich selbst mit `index + 2` auf." }
hinweise:
  - Der Fortschritt ist `index + 2`. Kann der Index die Länge dabei überspringen?
  - Ein Basisfall, den man nicht überspringen kann, prüft „Index zu groß“, also `index >= a.length`, statt nur auf Gleichheit.
loesung: |
  **Ansatz:** Index-Rezept mit Schrittweite 2. Der Basisfall muss auch dann greifen, wenn der Index über das Ende springt.
  ---
  ```java
  if (index >= a.length) {
      return 0;
  }
  return a[index] + summeJederZweite(a, index + 2);
  ```
  ---
  Warum `>=`? Bei Länge 5 und Start 1 laufen die Indizes 1, 3, 5. Das trifft 5 genau. Bei Start 0 laufen sie 0, 2, 4, 6. Die 5 wird übersprungen, und erst `>=` fängt die 6 ab.
  ---
  Probe: Start 0 addiert `1 + 2 + 3 = 6`, Start 1 addiert `9 + 9 = 18`. Beide Ergebnisse stimmen mit dem Beispiel überein.
```

```reflexion
frage: Bei Strings genügte ein Parameter `s`, weil der Selbstaufruf `s.substring(1)` bekam. Warum braucht eine Array-Rekursion in den Prüfungen meist einen zusätzlichen Parameter `index`?
antwort: |
  Ein String-Aufruf kann einen kürzeren String erzeugen und weitergeben, deshalb wird die Aufgabe von selbst
  kleiner. Ein Array kann man nicht kürzen. Ein kürzeres Array müsste man neu anlegen und befüllen, und das Kopieren
  ist im Programmiertest verboten (`clone`, `System.arraycopy`, `Arrays.copyOfRange`). Darum bleibt das Array
  gleich, und der Index beschreibt, welcher Rest noch zu bearbeiten ist. Er übernimmt die Rolle des kürzeren Strings.
```

## Prüfen, suchen und das Größte finden

```aufgabe
id: ra-ps-check-vorzeitig
titel: Eine Suche vorzeitig beenden
niveau: 1
art: check
angabe: |
  In [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren) hast du eine Schleife
  gesehen, die beim ersten Treffer aufhört. Was liefert diese Methode für `a = {4, 0, 7, 0}`?

  ```java
  public static int ersteNull(int[] a) {
      for (int i = 0; i < a.length; i++) {
          if (a[i] == 0) {
              return i;
          }
      }
      return -1;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['1', '3', '-1']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`return i` beendet die Methode sofort beim **ersten** Treffer. Die zweite Null an Index 3 wird gar nicht mehr erreicht.'
      - wert: 2
        meldung: '-1 kommt nur zurück, wenn die Schleife ganz durchläuft, ohne eine Null zu finden. Hier steht an Index 1 eine Null.'
loesung: |
  Bei `i = 1` ist `a[1] == 0`. Das `return 1` beendet die Methode sofort.
  ---
  Das `return -1` hinter der Schleife ist für den Fall gedacht, dass es keinen Treffer gibt.
```

Viele Aufgaben auf Arrays sind Fragen: Kommt ein Wert vor? Sind alle Werte positiv? Wo steht der erste Treffer? Was
ist der größte Wert? Eine Schleife beantwortet sie, indem sie ein Ergebnis sammelt oder beim ersten Treffer aufhört.
Eine Rekursion macht dasselbe mit zwei Arten von Basisfällen:

- **Der Rest ist leer.** Dann gilt die Antwort für „nichts“, etwa „nicht gefunden“.
- **Die Antwort steht schon fest.** Ein Treffer wurde gefunden, oder ein Wert verletzt die Bedingung. Dann ruft sich
  die Methode nicht mehr selbst auf. Das entspricht dem vorzeitigen `return` in der Schleife.

:::beispiel[Den ersten Index eines Werts finden]
```java
public static int findeIndex(int[] a, int wert, int index) {
    if (index == a.length) {
        return -1;
    }
    if (a[index] == wert) {
        return index;
    }
    return findeIndex(a, wert, index + 1);
}
```

- Der erste Basisfall: Der Rest ist leer, der Wert kommt nicht vor. Die Methode liefert -1. Das ist eine übliche
  Abmachung, denn -1 ist nie ein gültiger Index.
- Der zweite Basisfall: Der Wert steht genau an der Stelle `index`. Die Methode liefert diesen Index und sucht nicht
  weiter.
- Sonst liefert die Methode, was die Suche im Rest ab `index + 1` ergibt. Das `return` vor dem Selbstaufruf ist
  wichtig. Ohne es ginge die Antwort des Rests verloren.

Für `a = {5, 9, 2, 9}` und `wert = 9`: Der Aufruf mit Index 0 sieht 5, kein Treffer, weiter mit Index 1. Dort steht 9,
also liefert er 1. Diese 1 wird unverändert bis zum Startaufruf durchgereicht. Ergebnis 1, obwohl die 9 auch an
Index 3 steht. Für `wert = 4` laufen die Aufrufe mit den Indizes 0 bis 4, und der letzte liefert -1.
:::

Nach demselben Schema prüft man, ob **irgendein** Wert eine Bedingung erfüllt: Der leere Rest liefert `false`, ein
Treffer liefert `true`. Für „**alle** Werte erfüllen die Bedingung“ ist es umgekehrt: Der leere Rest liefert `true`,
denn im leeren Rest gibt es keinen Wert, der die Bedingung verletzt. Ein Wert, der die Bedingung verletzt, liefert
sofort `false`.

```aufgabe
id: ra-ps-gefuehrt
titel: Sind alle Werte positiv?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Positiv {
          public static boolean allePositiv(int[] a, int index) {
              if (index == a.length) {
                  return true;
              }
              if (a[index] <= 0) {
                  return false;
              }
              return allePositiv(a, index + 1);
          }

          public static void main(String[] args) {
              int[] m = {3, 8, 0, 5};
              System.out.println(allePositiv(m, 0));
              System.out.println(allePositiv(m, 3));
              System.out.println(allePositiv(new int[0], 0));
          }
      }
    loesung: |
      false
      true
      true
    fehler:
      - wert: "false\ntrue\nfalse"
        meldung: Ein leeres Array enthält keinen Wert, der nicht positiv ist. Der Basisfall `index == a.length` greift sofort und liefert `true`.
      - wert: "true\ntrue\ntrue"
        meldung: Die 0 an Index 2 ist nicht positiv. Für sie gilt `a[index] <= 0`, und die Methode liefert sofort `false`.
gefuehrt:
  - text: Was liefert der Basisfall, wenn der Rest leer ist?
    teil:
      typ: auswahl
      optionen: ['`true`', '`false`']
      richtig: [0]
    erklaerung: Im leeren Rest gibt es keinen Wert, der die Bedingung verletzt. Darum gilt „alle sind positiv“.
  - text: Bei welchem Index liefert `allePositiv(m, 0)` zum ersten Mal ein Ergebnis ohne Selbstaufruf?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: An Index 2 steht die 0. Für sie gilt `0 <= 0`, also kommt sofort `false`.
  - text: Welche Werte prüft der Aufruf `allePositiv(m, 3)`?
    teil:
      typ: auswahl
      optionen: ['nur die 5', '0 und 5', 'alle vier Werte']
      richtig: [0]
    erklaerung: Der Rest ab Index 3 besteht nur aus der 5. Danach folgt der Basisfall mit Index 4.
  - text: Wie viele Aufrufe macht `allePositiv(new int[0], 0)` insgesamt?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Das Array hat die Länge 0. Schon der Startaufruf ist der Basisfall.
hinweise:
  - Prüfe für jeden Aufruf zuerst den Basisfall, dann den Wert `a[index]`.
loesung: |
  **Ansatz:** „Alle“-Muster: leerer Rest liefert `true`, ein verletzender Wert liefert sofort `false`.
  ---
  Ab Index 0 stößt die Methode an Index 2 auf die 0 und liefert `false`. Ab Index 3 gibt es nur die 5, also `true`. Das leere Array liefert sofort `true`.
```

Eine andere Art von Frage lautet: Welcher Wert ist der größte? Hier gibt es keinen sinnvollen Wert für den leeren
Rest. Das Maximum von „nichts“ ist nicht definiert. Darum endet diese Rekursion schon beim **letzten** Wert.
Die Aufgabe verlangt dafür eine Vorbedingung: Das Array hat mindestens einen Wert.

:::beispiel[Das Maximum rekursiv bestimmen]
```java
public static int maximum(int[] a, int index) {
    if (index == a.length - 1) {
        return a[index];
    }
    int restMax = maximum(a, index + 1);
    if (a[index] > restMax) {
        return a[index];
    }
    return restMax;
}
```

Vorbedingung: `a.length > 0` und `0 <= index < a.length`.

- Basisfall: `index` ist der letzte Index. Der Rest besteht aus genau einem Wert, und der ist sein eigenes Maximum.
- Rekursiver Fall: `restMax` ist das Maximum des Rests ab `index + 1`. Der aktuelle Aufruf vergleicht seinen Wert
  `a[index]` damit und gibt den größeren zurück. Statt des `if` kannst du auch `Math.max(a[index], restMax)` schreiben.

Ablauf für `a = {6, 11, 3, 8}`, Startaufruf `maximum(a, 0)`:

```
Aufruf          a[index]   restMax   Rückgabe
maximum(a, 0)   6          11        11
maximum(a, 1)   11         8         11
maximum(a, 2)   3          8         8
maximum(a, 3)   8          –         8   (Basisfall, letzter Index)
```

Das Ergebnis ist 11. Gelesen wird die Tabelle von unten nach oben, denn erst auf dem Rückweg liegen die Werte von
`restMax` vor.
:::

:::achtung[Das Maximum mit dem Startwert 0]
Ein naheliegender Versuch ist der Basisfall des Summen-Rezepts:

```java
if (index == a.length) {
    return 0;          // falsch für Arrays mit nur negativen Werten
}
```

Für `{6, 11, 3, 8}` kommt zufällig das Richtige heraus. Für `a = {-5, -2, -9}` liefert der Basisfall aber 0. Auf dem
Rückweg vergleicht der Aufruf mit Index 2: -9 gegen 0, Ergebnis 0. Ebenso gewinnt die 0 gegen -2 und -5. Die Methode
liefert 0, obwohl 0 gar nicht im Array steht. Richtig ist -2. Der Startwert 0 ist ein erfundener Wert. Darum endet
die Rekursion beim letzten echten Wert: `if (index == a.length - 1) return a[index];`.
:::

```aufgabe
id: ra-ps-ausgabe-enthaelt
titel: Kommt der Wert ab dem Index vor?
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class KommtVor {
          public static boolean kommtVor(int[] a, int wert, int index) {
              if (index == a.length) {
                  return false;
              }
              if (a[index] == wert) {
                  return true;
              }
              return kommtVor(a, wert, index + 1);
          }

          public static void main(String[] args) {
              int[] z = {7, 13, 4, 13, 1};
              System.out.println(kommtVor(z, 4, 0));
              System.out.println(kommtVor(z, 4, 3));
              System.out.println(kommtVor(z, 13, 3));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "true\ntrue\ntrue"
        meldung: Der zweite Aufruf sucht erst ab Index 3. Die 4 steht an Index 2 und wird nicht mehr gesehen.
      - wert: "true\nfalse\nfalse"
        meldung: Die 13 steht zweimal im Array, auch an Index 3. Der dritte Aufruf beginnt genau dort.
hinweise:
  - Schreib die Indizes unter die Werte. Jede Suche beginnt bei ihrem Startindex.
loesung: |
  **Ansatz:** „Irgendein“-Muster: Treffer liefert `true`, der leere Rest `false`.
  ---
  Die 4 steht an Index 2. Ab Index 0 wird sie gefunden, ab Index 3 nicht. Die 13 steht an Index 3, ab Index 3 also gefunden.
```

```aufgabe
id: ra-ps-auswahl-basis
titel: Der richtige Wert für den leeren Rest
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Methode `boolean hatNull(int[] a, int index)` soll prüfen, ob im Rest ab `index` **irgendein** Wert gleich 0
  ist. Was muss sie im Basisfall `index == a.length` zurückgeben?
teile:
  - typ: auswahl
    optionen: ['`false`', '`true`', '`a[index] == 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`true` würde bedeuten, dass jeder Rest eine Null enthält, denn jede Suche endet irgendwann im leeren Rest. Ein leerer Rest enthält aber keine Null.'
      - wert: 2
        meldung: Bei `index == a.length` gibt es keinen Wert `a[index]` mehr. Der Zugriff würde eine `ArrayIndexOutOfBoundsException` werfen.
hinweise:
  - Was ist die richtige Antwort auf „Enthält der leere Rest eine Null?“
loesung: |
  **Ansatz:** Der Basisfall beantwortet die Frage für den leeren Rest.
  ---
  Ein leerer Rest enthält keine Null. Also `return false;`. Ein Treffer liefert dagegen vorher schon `true`.
```

```aufgabe
id: ra-ps-luecken-alle
titel: Sind alle Werte gleich?
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Methode soll prüfen, ob alle Werte im Rest ab `index` gleich dem Wert `w` sind. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Gleich {
          public static boolean alleGleich(int[] a, int w, int index) {
              if (index == a.length) {
                  return ___;
              }
              if (a[index] != w) {
                  return ___;
              }
              return ___;
          }
      }
    luecken: [["true"], ["false"], ["alleGleich(a, w, index + 1)", "alleGleich(a, w, 1 + index)"]]
    fehler:
      - wert: ["false", "false", "alleGleich(a, w, index + 1)"]
        meldung: Mit `false` im Basisfall käme nie `true` heraus, denn jede Prüfung endet irgendwann im leeren Rest. Der leere Rest verletzt die Bedingung nicht.
      - wert: ["true", "false", "true"]
        meldung: Wenn der aktuelle Wert passt, steht die Antwort noch nicht fest. Die übrigen Werte müssen auch geprüft werden, also folgt der Selbstaufruf.
hinweise:
  - Ein Wert, der nicht gleich `w` ist, entscheidet sofort. Ein passender Wert entscheidet noch nichts.
loesung: |
  **Ansatz:** „Alle“-Muster: leerer Rest liefert `true`, ein verletzender Wert sofort `false`, sonst weiter im Rest.
  ---
  Lücken: `true`, `false` und `alleGleich(a, w, index + 1)`.
```

:::achtung[Nachbarpaare laufen über das Ende hinaus]
Viele Aufgaben vergleichen **benachbarte** Werte, also `a[index]` mit `a[index + 1]`. Dieser Versuch zählt die
Stellen, an denen der Nachbar größer ist:

```java
public static int anstiege(int[] a, int index) {
    if (index == a.length) {                       // falsch
        return 0;
    }
    int rest = anstiege(a, index + 1);
    if (a[index] < a[index + 1]) {
        return rest + 1;
    }
    return rest;
}
```

Für `a = {1, 4, 2}` erreicht die Rekursion den Aufruf mit Index 2. Der Basisfall greift noch nicht. Der Vergleich
liest `a[3]`, und das Programm bricht mit `ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3` ab.
Das letzte Paar beginnt beim vorletzten Index `a.length - 2`. Der Basisfall muss also schon bei
`index >= a.length - 1` greifen. Das `>=` fängt zusätzlich das leere Array ab, bei dem `a.length - 1` gleich -1 ist.
:::

:::beispiel[Anstiege zwischen Nachbarn zählen]
```java
public static int anstiege(int[] a, int index) {
    if (index >= a.length - 1) {
        return 0;
    }
    int rest = anstiege(a, index + 1);
    if (a[index] < a[index + 1]) {
        return rest + 1;
    }
    return rest;
}
```

Ein **Anstieg** ist ein Paar benachbarter Werte, bei dem der rechte größer ist als der linke. Für
`a = {2, 5, 5, 1, 7}` gibt es vier Paare. (2, 5) ist ein Anstieg. (5, 5) ist keiner, denn gleich ist nicht größer.
(5, 1) ist keiner, (1, 7) ist einer. `anstiege(a, 0)` liefert also 2. Die Aufrufe haben die Indizes 0 bis 4. Der Aufruf mit Index 4 ist
der Basisfall, denn `4 >= 5 - 1`. Paare dürfen sich überlappen: Die 5 an Index 1 gehört zu den Paaren (2, 5) und (5, 5).
:::

```aufgabe
id: ra-ps-ausgabe-letzter
titel: Den letzten Treffer finden
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Methode sucht diesmal auf dem **Rückweg**. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Letzter {
          public static int letzter(int[] a, int wert, int index) {
              if (index == a.length) {
                  return -1;
              }
              int hinten = letzter(a, wert, index + 1);
              if (hinten != -1) {
                  return hinten;
              }
              if (a[index] == wert) {
                  return index;
              }
              return -1;
          }

          public static void main(String[] args) {
              int[] z = {2, 6, 2, 8, 2, 6};
              System.out.println(letzter(z, 2, 0));
              System.out.println(letzter(z, 6, 0));
              System.out.println(letzter(z, 8, 4));
          }
      }
    loesung: |
      4
      5
      -1
    fehler:
      - wert: "0\n1\n-1"
        meldung: Die Methode prüft ihren eigenen Wert erst **nach** dem Selbstaufruf. Ein Treffer weiter hinten hat Vorrang. Sie findet also das letzte Vorkommen.
      - wert: "4\n5\n3"
        meldung: Der dritte Aufruf sucht erst ab Index 4. Die 8 an Index 3 liegt davor und wird nicht gesehen.
hinweise:
  - Der Aufruf mit dem höchsten Index entscheidet zuerst. Erst wenn hinten nichts gefunden wurde, zählt der eigene Wert.
  - Schreib die Indizes unter die Werte und suche das letzte Vorkommen ab dem Startindex.
loesung: |
  **Ansatz:** Auf dem Rückweg kommen die Antworten von hinten nach vorne. Ein Treffer hinten wird bis zum Start durchgereicht.
  ---
  Die 2 steht an den Indizes 0, 2 und 4. Der hinterste Treffer ist 4. Die 6 steht an 1 und 5, also 5.
  ---
  Ab Index 4 stehen nur noch 2 und 6. Die 8 kommt nicht vor, Ergebnis -1.
```

```aufgabe
id: ra-ps-rf-max
titel: Vier Versuche für das Maximum
niveau: 2
lernziel: 6
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (rekursive Implementierungen beurteilen), Inhalt neu
angabe: |
  Jede Aussage beschreibt eine Variante der Methode `maximum(int[] a, int index)` aus diesem Abschnitt. Gestartet
  wird immer mit Index 0. Beurteile, ob die Aussage stimmt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Mit dem Basisfall `if (index == a.length) return 0;` liefert die Methode für `{-4, -1}` den Wert -1.'
        richtig: false
        erklaerung: Der Basisfall liefert 0, und 0 gewinnt gegen -1 und -4. Die Methode liefert 0.
      - text: 'Mit dem Basisfall `if (index == a.length - 1) return a[index];` bricht der Aufruf für ein leeres Array mit einem Fehler ab.'
        richtig: true
        erklaerung: 'Bei Länge 0 ist `a.length - 1` gleich -1. Die Indizes 0, 1, 2, … treffen den Basisfall nie. Weil `maximum(a, index + 1)` vor dem Zugriff auf `a[index]` steht, ruft sich die Methode immer weiter auf, bis Java mit einem `StackOverflowError` abbricht. Darum verlangt die Aufgabe `a.length > 0`.'
      - text: 'Ersetzt man `return restMax;` durch `return a[index];`, liefert die Methode immer noch das Maximum.'
        richtig: false
        erklaerung: Dann käme bei jedem Vergleich, den `a[index]` verliert, trotzdem `a[index]` zurück. Für `{1, 5}` wäre das Ergebnis 1.
      - text: '`return Math.max(a[index], maximum(a, index + 1));` im rekursiven Fall liefert dasselbe wie die Fassung mit `if`.'
        richtig: true
        erklaerung: '`Math.max` gibt den größeren der beiden Werte zurück. Das ist genau der Vergleich mit `restMax`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: Rechne Aussage 1 für `{-4, -1}` wirklich durch. Was liefert der Basisfall, und wer gewinnt den Vergleich mit -1?
      - wert: [f, f, f, r]
        meldung: Bei einem leeren Array greift der Basisfall `index == a.length - 1` nie. Was passiert dann mit den Selbstaufrufen?
hinweise:
  - Probiere jede Variante an einem kleinen Array aus, am besten mit negativen Werten und mit einem leeren Array.
  - Bei einem leeren Array ist `a.length - 1` gleich -1. Kann der Startindex 0 diesen Wert treffen?
loesung: |
  **Ansatz:** Jede Variante mit einem kleinen Gegenbeispiel prüfen.
  ---
  Aussage 1 ist falsch: Der erfundene Startwert 0 gewinnt gegen alle negativen Werte. Aussage 2 ist richtig: Bei Länge 0 wird der Basisfall verfehlt, und die Selbstaufrufe enden mit einem `StackOverflowError`.
  ---
  Aussage 3 ist falsch: `{1, 5}` liefert 1. Aussage 4 ist richtig, denn `Math.max` macht denselben Vergleich.
```

```aufgabe
id: ra-ps-code-abstand
titel: Der größte Abstand zum letzten Wert
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2021, Aufgabe 4b (getHighestDifferenceWithLastValue, umformuliert)
angabe: |
  Implementiere `int groessterAbstandZumLetzten(int[] a, int index)` **rekursiv** und ohne Schleifen. Der **Abstand**
  zweier Zahlen ist der Betrag ihrer Differenz, also immer positiv oder 0. Die Methode liefert den größten Abstand
  zwischen einem Wert `a[i]` und dem letzten Wert des Arrays, für alle `i` von `index` bis `a.length - 2`.
  Den Betrag liefert `Math.abs`.

  Vorbedingungen: `a != null`, `a.length > 1`, `0 <= index < a.length - 1`.

  Beispiel: Für `a = {14, 30, 7, 22, 19, 25}` ist der letzte Wert 25. Die Abstände sind 11, 5, 18, 3 und 6. Also
  liefert `groessterAbstandZumLetzten(a, 0)` den Wert 18 und `groessterAbstandZumLetzten(a, 3)` den Wert 6.
teile:
  - typ: code
    vorlage: |
      public class Abstand {
          public static int groessterAbstandZumLetzten(int[] a, int index) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Abstand {
          public static int groessterAbstandZumLetzten(int[] a, int index) {
              int letzter = a[a.length - 1];
              int eigener = Math.abs(a[index] - letzter);
              if (index == a.length - 2) {
                  return eigener;
              }
              return Math.max(eigener, groessterAbstandZumLetzten(a, index + 1));
          }
      }
    tests:
      - { aufruf: "groessterAbstandZumLetzten(new int[]{14, 30, 7, 22, 19, 25}, 0)", erwartet: "18" }
      - { aufruf: "groessterAbstandZumLetzten(new int[]{14, 30, 7, 22, 19, 25}, 3)", erwartet: "6" }
      - { aufruf: "groessterAbstandZumLetzten(new int[]{14, 30, 7, 22, 19, 25}, 4)", erwartet: "6", beschreibung: "nur der vorletzte Wert" }
      - { aufruf: "groessterAbstandZumLetzten(new int[]{-3, 8}, 0)", erwartet: "11", beschreibung: "negativer Wert, kürzestes Array" }
      - { aufruf: "groessterAbstandZumLetzten(new int[]{40, 2, 10}, 0)", erwartet: "30", versteckt: true }
    regeln: { keineSchleifenIn: [groessterAbstandZumLetzten], rekursiv: [groessterAbstandZumLetzten], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 3, meldung: "Bei Start am vorletzten Index gibt es genau einen Abstand. Der Basisfall ist `index == a.length - 2`. Der letzte Wert wird nie mit sich selbst verglichen." }
      - { wert: 4, meldung: "Der Abstand ist der **Betrag** der Differenz. `-3 - 8` ist -11, der Abstand ist 11. Verwende `Math.abs`." }
      - { wert: "keineSchleifenIn", meldung: "Statt einer Schleife über `i` rufst du dich selbst mit `index + 1` auf und nimmst mit `Math.max` den größeren Wert." }
hinweise:
  - Der letzte Wert ist in jedem Aufruf `a[a.length - 1]`. Der eigene Abstand ist `Math.abs(a[index] - letzter)`.
  - Basisfall ist der vorletzte Index. Sonst ist das Ergebnis das Maximum aus dem eigenen Abstand und dem Ergebnis des Rests.
loesung: |
  **Ansatz:** Maximum-Muster. Der Basisfall ist der letzte Index, der noch einen Abstand hat, also der vorletzte Index `a.length - 2`.
  ---
  ```java
  int letzter = a[a.length - 1];
  int eigener = Math.abs(a[index] - letzter);
  if (index == a.length - 2) {
      return eigener;
  }
  return Math.max(eigener, groessterAbstandZumLetzten(a, index + 1));
  ```
  ---
  Die beiden lokalen Variablen sind erlaubt. Verboten wären nur Klassenvariablen.
  ---
  Probe mit dem Beispiel ab Index 3: Abstände 3 und 6, Maximum 6. Das stimmt mit der Angabe überein.
```

```aufgabe
id: ra-ps-code-steigend
titel: Ist die Folge streng steigend?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `boolean istStrengSteigend(int[] a, int index)` **rekursiv** und ohne Schleifen. Die Methode liefert
  `true`, wenn im Rest ab `index` jeder Wert **echt kleiner** als sein rechter Nachbar ist. Ein Rest mit höchstens einem
  Wert gilt als streng steigend.

  Vorbedingungen: `a != null`, `0 <= index <= a.length`.

  Beispiel: `{1, 4, 9, 9}` ab Index 0 liefert `false`. Die Paare (1, 4) und (4, 9) sind in Ordnung, aber 9 ist nicht
  echt kleiner als 9.
teile:
  - typ: code
    vorlage: |
      public class Steigend {
          public static boolean istStrengSteigend(int[] a, int index) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Steigend {
          public static boolean istStrengSteigend(int[] a, int index) {
              if (index >= a.length - 1) {
                  return true;
              }
              if (a[index] >= a[index + 1]) {
                  return false;
              }
              return istStrengSteigend(a, index + 1);
          }
      }
    tests:
      - { aufruf: "istStrengSteigend(new int[]{1, 4, 9, 9}, 0)", erwartet: "false" }
      - { aufruf: "istStrengSteigend(new int[]{2, 3, 5, 8}, 0)", erwartet: "true" }
      - { aufruf: "istStrengSteigend(new int[]{9, 1, 2, 3}, 1)", erwartet: "true", beschreibung: "Start nach dem Abstieg" }
      - { aufruf: "istStrengSteigend(new int[]{}, 0)", erwartet: "true", beschreibung: "leeres Array" }
      - { aufruf: "istStrengSteigend(new int[]{4}, 0)", erwartet: "true", beschreibung: "ein Wert" }
      - { aufruf: "istStrengSteigend(new int[]{1, 2, 3, 2}, 0)", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [istStrengSteigend], rekursiv: [istStrengSteigend], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Gleiche Nachbarn sind kein Anstieg. Prüfe auf `a[index] >= a[index + 1]`, nicht nur auf `>`." }
      - { wert: 2, meldung: "Läuft dein Zugriff `a[index + 1]` beim letzten Index über das Ende? Der Basisfall muss schon bei `index >= a.length - 1` greifen." }
      - { wert: 4, meldung: "Beim leeren Array ist `a.length - 1` gleich -1. Mit `index >= a.length - 1` greift der Basisfall sofort." }
hinweise:
  - Das ist ein „Alle“-Muster mit Paaren. Welcher Wert gilt für einen Rest mit höchstens einem Wert?
  - Ein Paar, das nicht echt steigt, entscheidet sofort mit `false`. Sonst geht es mit `index + 1` weiter.
loesung: |
  **Ansatz:** „Alle“-Muster auf Nachbarpaaren. Der Basisfall greift, sobald kein vollständiges Paar mehr übrig ist.
  ---
  ```java
  if (index >= a.length - 1) {
      return true;
  }
  if (a[index] >= a[index + 1]) {
      return false;
  }
  return istStrengSteigend(a, index + 1);
  ```
  ---
  Probe: `{1, 4, 9, 9}` liefert bei Index 2 `false`, weil `9 >= 9`. `{2, 3, 5, 8}` erreicht den Basisfall bei Index 3 und liefert `true`.
```

```aufgabe
id: ra-ps-code-anstiege
titel: Genau n Anstiege ab einem Index
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2021, Gruppe B (hasNOrderedPairs), umformuliert und abgewandelt
angabe: |
  Implementiere `boolean hatGenauNAnstiege(int[] folge, int n, int index)` **rekursiv**. Die Methode liefert `true`,
  wenn im Rest ab `index` **genau** `n` Anstiege vorkommen. Ein Anstieg ist ein Paar direkt benachbarter Werte, bei
  dem der rechte Wert **echt größer** ist als der linke. Paare dürfen sich überlappen. Die Zählung beginnt beim Paar
  `folge[index]`, `folge[index + 1]`.

  Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine Hilfsmethoden, keine Klassenvariablen,
  Methodenkopf unverändert.

  Vorbedingungen: `folge != null`, `folge.length > 0`, `n >= 0`, `index` ist ein gültiger Index von `folge`.

  Beispiel mit `folge = {3, 7, 7, 2, 4, 9, 1}`: Ab Index 0 gibt es die Anstiege (3, 7), (2, 4) und (4, 9). Also liefert
  `hatGenauNAnstiege(folge, 3, 0)` den Wert `true` und `hatGenauNAnstiege(folge, 2, 0)` den Wert `false`.
teile:
  - typ: code
    vorlage: |
      public class Anstiege {
          public static boolean hatGenauNAnstiege(int[] folge, int n, int index) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Anstiege {
          public static boolean hatGenauNAnstiege(int[] folge, int n, int index) {
              if (index >= folge.length - 1) {
                  return n == 0;
              }
              if (folge[index] < folge[index + 1]) {
                  return hatGenauNAnstiege(folge, n - 1, index + 1);
              }
              return hatGenauNAnstiege(folge, n, index + 1);
          }
      }
    tests:
      - { aufruf: "hatGenauNAnstiege(new int[]{3, 7, 7, 2, 4, 9, 1}, 3, 0)", erwartet: "true" }
      - { aufruf: "hatGenauNAnstiege(new int[]{3, 7, 7, 2, 4, 9, 1}, 2, 0)", erwartet: "false", beschreibung: "zu wenige verlangt" }
      - { aufruf: "hatGenauNAnstiege(new int[]{3, 7, 7, 2, 4, 9, 1}, 2, 3)", erwartet: "true", beschreibung: "Start bei Index 3" }
      - { aufruf: "hatGenauNAnstiege(new int[]{3, 7, 7, 2, 4, 9, 1}, 1, 1)", erwartet: "false", beschreibung: "gleiche Nachbarn zählen nicht" }
      - { aufruf: "hatGenauNAnstiege(new int[]{3, 7, 7, 2, 4, 9, 1}, 0, 6)", erwartet: "true", beschreibung: "Start beim letzten Index" }
      - { aufruf: "hatGenauNAnstiege(new int[]{5}, 1, 0)", erwartet: "false", versteckt: true }
      - { aufruf: "hatGenauNAnstiege(new int[]{1, 2, 3, 4}, 3, 0)", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [hatGenauNAnstiege], rekursiv: [hatGenauNAnstiege], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Es müssen **genau** n Anstiege sein, nicht mindestens n. Ein Basisfall wie `n == 0` mitten in der Folge hört zu früh auf. Entscheide erst am Ende des Rests mit `return n == 0;`." }
      - { wert: 4, meldung: "Ab Index 1 lauten die Paare (7, 7), (7, 2), (2, 4), (4, 9) und (9, 1). Das sind zwei Anstiege, nicht einer. Prüfst du auf echt größer und zählst bis zum letzten Paar?" }
      - { wert: 5, meldung: "Beim letzten Index gibt es kein Paar mehr. Der Basisfall muss bei `index >= folge.length - 1` greifen, sonst liest du `folge[index + 1]` hinter dem Ende." }
      - { wert: "keineHilfsmethoden", meldung: "Eine Hilfsmethode zum Zählen ist verboten. Zähle stattdessen den Parameter `n` herunter: Bei jedem Anstieg rufst du dich mit `n - 1` auf." }
hinweise:
  - Du darfst keinen Zähler anlegen, der über die Aufrufe hinweg lebt. Nutze dafür den Parameter `n`. Jeder gefundene Anstieg verringert ihn um 1.
  - Am Ende des Rests, wenn kein Paar mehr übrig ist, lautet die Antwort `n == 0`.
loesung: |
  **Ansatz:** Der Parameter `n` sagt, wie viele Anstiege im Rest noch vorkommen müssen. Jeder Anstieg verringert ihn. Am Ende muss genau 0 übrig sein.
  ---
  ```java
  if (index >= folge.length - 1) {
      return n == 0;
  }
  if (folge[index] < folge[index + 1]) {
      return hatGenauNAnstiege(folge, n - 1, index + 1);
  }
  return hatGenauNAnstiege(folge, n, index + 1);
  ```
  ---
  Wird `n` dabei negativ, gab es zu viele Anstiege. Am Ende ist dann `n == 0` falsch, und die Methode liefert richtig `false`.
  ---
  Probe ab Index 3 mit `n = 2`: (2, 4) ist ein Anstieg, `n` wird 1. (4, 9) ist einer, `n` wird 0. (9, 1) nicht. Bei Index 6 greift der Basisfall mit `0 == 0`, also `true`.
```

```reflexion
frage: Warum endet die Maximum-Rekursion beim letzten Wert, die Suche nach einem Wert aber beim leeren Rest?
antwort: |
  Für die Suche gibt es eine sinnvolle Antwort für den leeren Rest: Im leeren Rest kommt nichts vor, also -1 oder
  `false`. Für das Maximum gibt es diese Antwort nicht. Jeder Zahlenwert, den man für den leeren Rest erfindet, etwa 0,
  kann das Ergebnis verfälschen, wenn alle echten Werte kleiner sind. Darum hört die Maximum-Rekursion beim letzten
  echten Wert auf und verlangt die Vorbedingung, dass das Array nicht leer ist.
```

## Ein neues Array füllen oder das Array verändern

```aufgabe
id: ra-na-check-alias
titel: Zwei Variablen, ein Array
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] a = {1, 2, 3};
      int[] b = a;
      b[1] = 50;
      System.out.println(a[1]);
      System.out.println(a == b);
    loesung: |
      50
      true
    fehler:
      - wert: "2\ntrue"
        meldung: '`int[] b = a;` kopiert nicht das Array, sondern nur den Verweis. `a` und `b` zeigen auf dasselbe Array, darum sieht `a` die Änderung.'
      - wert: "50\nfalse"
        meldung: '`==` vergleicht bei Arrays, ob beide Variablen auf **dasselbe** Array zeigen. Das ist hier der Fall.'
hinweise:
  - Eine Zuweisung zwischen Array-Variablen legt kein neues Array an.
loesung: |
  Nach `int[] b = a;` gibt es nur ein Array, auf das zwei Variablen zeigen. `b[1] = 50` ändert dieses eine Array.
  ---
  Darum liefert `a[1]` den Wert 50, und `a == b` ist `true`.
```

Bisher haben unsere Methoden aus einem Array eine Zahl oder einen Wahrheitswert berechnet. Viele Aufgaben auf den
Aufgabenblättern verlangen aber ein **Array als Ergebnis**. Dafür gibt es zwei grundverschiedene Wege, und die Angabe sagt dir immer,
welcher gemeint ist:

- Die Methode **verändert das übergebene Array** selbst. Sie hat meist den Rückgabetyp `void`. Der Aufrufer sieht die
  Änderungen, weil er auf dasselbe Array zeigt.
- Die Methode **erzeugt ein neues Array** und gibt es zurück. Das übergebene Array bleibt unverändert.

:::definition[In-place]
Eine Methode arbeitet **in-place** (englisch für „an Ort und Stelle“), wenn sie das übergebene Array direkt verändert,
statt ein neues anzulegen. Sie braucht keinen Rückgabewert, denn der Aufrufer hält schon einen Verweis auf das Array.
:::

**Beispiel:** `void verdopple(int[] a, int index)` verdoppelt jeden Wert ab `index` direkt in `a`. Das ist in-place.
**Kein Beispiel:** `int[] verdoppelt(int[] a, int index)`, die ein neues Array mit den doppelten Werten zurückgibt und
`a` unverändert lässt. Sie arbeitet nicht in-place.

:::beispiel[Werte in-place verdoppeln]
```java
import java.util.*;

public class Verdoppeln {
    public static void verdopple(int[] a, int index) {
        if (index == a.length) {
            return;
        }
        a[index] = 2 * a[index];
        verdopple(a, index + 1);
    }

    public static void main(String[] args) {
        int[] z = {1, 4, 6};
        verdopple(z, 0);
        System.out.println(Arrays.toString(z));
    }
}
```

- `verdopple(z, 0)` übergibt einen Verweis auf das Array `z`. Der Parameter `a` zeigt also auf dasselbe Array.
- Der Aufruf mit Index 0 setzt `a[0]` von 1 auf 2. Dann ruft er sich mit Index 1 auf, der `a[1]` von 4 auf 8 setzt.
  Der Aufruf mit Index 2 setzt `a[2]` auf 12. Der Aufruf mit Index 3 ist der Basisfall und endet mit `return;`.
- Alle Aufrufe haben dasselbe Array verändert, jeder an seiner Stelle. Darum gibt `main` den Text `[2, 8, 12]` aus.
  Die erste Zeile `import java.util.*;` macht die Klasse `Arrays` mit ihrer Methode `toString` bekannt.
:::

```aufgabe
id: ra-na-gefuehrt
titel: Negative Werte auf 0 setzen
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      import java.util.*;

      public class Kappen {
          public static void kappe(int[] a, int index) {
              if (index == a.length) {
                  return;
              }
              if (a[index] < 0) {
                  a[index] = 0;
              }
              kappe(a, index + 1);
          }

          public static void main(String[] args) {
              int[] t = {-3, 5, -1, 0, 2};
              kappe(t, 2);
              System.out.println(Arrays.toString(t));
          }
      }
    loesung: |
      [-3, 5, 0, 0, 2]
    fehler:
      - wert: "[0, 5, 0, 0, 2]"
        meldung: Der Startaufruf hat Index 2. Die -3 an Index 0 gehört nicht zum Rest und bleibt unverändert.
      - wert: "[-3, 5, -1, 0, 2]"
        meldung: '`kappe` verändert das Array in-place. `main` gibt danach dasselbe Array aus und sieht die Änderung an Index 2.'
gefuehrt:
  - text: Welche Indizes bearbeitet der Startaufruf `kappe(t, 2)` und seine Selbstaufrufe, ohne den Basisfall?
    teil:
      typ: auswahl
      optionen: ['2, 3 und 4', '0 bis 4', '2 und 3']
      richtig: [0]
    erklaerung: Der Rest ab Index 2 umfasst die Indizes 2, 3 und 4. Der Aufruf mit Index 5 ist der Basisfall.
  - text: Wie viele Werte in diesem Rest werden auf 0 gesetzt?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Im Rest stehen -1, 0 und 2. Nur die -1 ist negativ. Die 0 ist nicht kleiner als 0.
  - text: Sieht `main` nach dem Aufruf die Änderung in `t`?
    teil:
      typ: auswahl
      optionen: ['ja, weil `a` und `t` auf dasselbe Array zeigen', 'nein, weil `a` eine Kopie des Arrays ist']
      richtig: [0]
    erklaerung: Bei Arrays wird nur der Verweis kopiert. Alle Aufrufe arbeiten am Array `t`.
hinweise:
  - Schreib die Indizes unter die Werte. Nur Werte ab dem Startindex können sich ändern.
loesung: |
  **Ansatz:** In-place-Muster ab Index 2. Jeder Aufruf ändert höchstens seinen eigenen Platz.
  ---
  An Index 2 wird -1 zu 0. Die 0 an Index 3 und die 2 an Index 4 bleiben. Die -3 an Index 0 liegt vor dem Start. Ausgabe `[-3, 5, 0, 0, 2]`.
```

Manche Aufgaben verlangen, dass Werte ihre Plätze **tauschen**. Zum Tauschen brauchst du eine dritte Variable, die
einen der beiden Werte kurz aufbewahrt. Man nennt das auch **Dreieckstausch**: Wert von A nach C, von B nach A, von C
nach B.

:::beispiel[Den größten Wert nach hinten tauschen]
```java
public static void groessterNachHinten(int[] a, int index) {
    if (index >= a.length - 1) {
        return;
    }
    if (a[index] > a[index + 1]) {
        int merk = a[index];
        a[index] = a[index + 1];
        a[index + 1] = merk;
    }
    groessterNachHinten(a, index + 1);
}
```

Jeder Aufruf vergleicht ein Nachbarpaar. Steht der größere Wert links, tauschen die beiden die Plätze. Dadurch wandert
der größte Wert Schritt für Schritt nach rechts. Ablauf für `a = {7, 2, 9, 4}` mit Startindex 0:

1. Index 0: 7 > 2, Tausch. Das Array ist jetzt `{2, 7, 9, 4}`.
2. Index 1: 7 > 9 ist falsch, kein Tausch.
3. Index 2: 9 > 4, Tausch. Das Array ist jetzt `{2, 7, 4, 9}`.
4. Index 3: `3 >= 4 - 1`, Basisfall.

Danach steht der größte Wert 9 ganz hinten. Der Rest ist noch nicht sortiert. Dieser eine Durchgang ist ein Baustein
des Sortierverfahrens **Bubblesort**, das in
[19.2 Bubblesort: benachbarte Werte vertauschen](/lernen/ep1/sortieren/bubblesort-benachbarte-werte-vertauschen) folgt.
:::

:::achtung[Tauschen ohne Hilfsvariable]
So sieht ein typischer Tauschversuch aus:

```java
a[index] = a[index + 1];
a[index + 1] = a[index];      // falsch: der alte Wert von a[index] ist schon weg
```

Für `a = {7, 2}` setzt die erste Zeile `a[0]` auf 2. Das Array ist `{2, 2}`. Die zweite Zeile kopiert diese 2 zurück
nach `a[1]`. Ergebnis `{2, 2}`, die 7 ist verloren. Richtig ist der Dreieckstausch mit `int merk = a[index];` vor der
ersten Zuweisung und `a[index + 1] = merk;` am Ende.
:::

```aufgabe
id: ra-na-ausgabe-inplace
titel: Den Index dazuzählen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.*;

      public class PlusIndex {
          public static void plusIndex(int[] a, int index) {
              if (index == a.length) {
                  return;
              }
              a[index] = a[index] + index;
              plusIndex(a, index + 1);
          }

          public static void main(String[] args) {
              int[] x = {5, 5, 5, 5};
              plusIndex(x, 0);
              System.out.println(Arrays.toString(x));
              plusIndex(x, 3);
              System.out.println(Arrays.toString(x));
          }
      }
    loesung: |
      [5, 6, 7, 8]
      [5, 6, 7, 11]
    fehler:
      - wert: "[5, 6, 7, 8]\n[5, 5, 5, 8]"
        meldung: Der erste Aufruf hat das Array schon verändert. Der zweite Aufruf arbeitet mit demselben, bereits geänderten Array weiter.
      - wert: "[5, 6, 7, 8]\n[5, 6, 7, 9]"
        meldung: Addiert wird der Index, nicht 1. Der Wert an Index 3 bekommt also noch einmal 3 dazu.
hinweise:
  - Jeder Wert bekommt seinen eigenen Index dazu. Beide Aufrufe ändern dasselbe Array.
loesung: |
  **Ansatz:** In-place ab dem Startindex. Jeder Platz bekommt `+ index`.
  ---
  Erster Aufruf: `5 + 0`, `5 + 1`, `5 + 2`, `5 + 3`, also `[5, 6, 7, 8]`. Der zweite Aufruf ändert nur Index 3: `8 + 3 = 11`. Ausgabe `[5, 6, 7, 11]`.
```

Jetzt zum zweiten Weg: Die Methode soll ein **neues** Array liefern. Die entscheidende Frage lautet dann: In welchem
Aufruf wird das neue Array mit `new` angelegt? Es darf nur genau einmal entstehen, und alle Aufrufe müssen in dasselbe
Array schreiben. Der Kopf ist aber fest vorgegeben, etwa `int[] differenzen(int[] alt, int[] neu, int index)`. Einen
Parameter für das Ergebnis-Array gibt es nicht.

Die Lösung: Das neue Array entsteht im **Basisfall**. Der Basisfall wird bei jedem Startaufruf genau einmal erreicht.
Auf dem Rückweg reicht jeder Aufruf das Array an seinen Aufrufer zurück und schreibt vorher seinen eigenen Platz hinein.

:::beispiel[Ein neues Array auf dem Rückweg füllen]
```java
public static int[] differenzen(int[] alt, int[] neu, int index) {
    if (index == alt.length) {
        return new int[alt.length];
    }
    int[] ergebnis = differenzen(alt, neu, index + 1);
    ergebnis[index] = neu[index] - alt[index];
    return ergebnis;
}
```

Vorbedingung: Beide Arrays sind gleich lang, und der Startaufruf hat Index 0.

- Der Basisfall legt ein neues Array der richtigen Länge an. Es ist zunächst mit Nullen gefüllt.
- Jeder andere Aufruf holt sich zuerst das Array vom Selbstaufruf. Dann trägt er die Differenz an **seiner** Stelle
  ein und gibt dasselbe Array weiter zurück.

Ablauf für `alt = {3, 5, 5}` und `neu = {4, 5, 2}`: Der Hinweg führt bis Index 3. Dort entsteht `[0, 0, 0]`. Der
Aufruf mit Index 2 schreibt `2 - 5 = -3` hinein. Der mit Index 1 schreibt `5 - 5 = 0`, der mit Index 0 schreibt
`4 - 3 = 1`. Ergebnis `[1, 0, -3]`. Die Arrays `alt` und `neu` bleiben unverändert, und es gab genau ein `new`.
:::

:::achtung[Ein neues Array in jedem Aufruf]
Dieser Versuch legt das Ergebnis-Array oben in der Methode an:

```java
public static int[] verdoppelt(int[] a, int index) {
    int[] r = new int[a.length];          // falsch: jeder Aufruf hat sein eigenes r
    if (index == a.length) {
        return r;
    }
    r[index] = 2 * a[index];
    verdoppelt(a, index + 1);              // Ergebnis wird weggeworfen
    return r;
}
```

Für `a = {1, 4, 6}` erzeugt jeder der vier Aufrufe ein eigenes Array. Der Startaufruf schreibt nur `r[0] = 2` in sein
Array. Die Arrays der anderen Aufrufe werden zurückgegeben, aber nie verwendet. Ergebnis `[2, 0, 0]` statt
`[2, 8, 12]`. Richtig: `new` nur im Basisfall, und das Ergebnis des Selbstaufrufs in einer Variable aufheben.
:::

```aufgabe
id: ra-na-rf-referenz
titel: Neues Array oder dasselbe Array?
niveau: 1
lernziel: 3
kompetenz: begruenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 1 (Fragen zur Referenzsemantik), auf Rekursion übertragen
angabe: |
  Beurteile jede Aussage über die Methoden `verdopple` (in-place, `void`) und `differenzen` (neues Array) aus diesem
  Abschnitt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach `verdopple(z, 0)` enthält `z` die verdoppelten Werte, obwohl die Methode nichts zurückgibt.
        richtig: true
        erklaerung: Der Parameter `a` zeigt auf dasselbe Array wie `z`. Alle Änderungen landen in diesem Array.
      - text: 'Nach `int[] d = differenzen(alt, neu, 0);` gilt `d == alt`.'
        richtig: false
        erklaerung: Das Ergebnis entsteht mit `new` im Basisfall. Es ist ein anderes Array als `alt`, darum liefert `==` hier `false`.
      - text: '`differenzen(alt, neu, 0)` führt `new int[alt.length]` genau einmal aus.'
        richtig: true
        erklaerung: '`new` steht nur im Basisfall, und der wird pro Startaufruf genau einmal erreicht.'
      - text: Schreibt man in `verdopple` am Anfang `a = new int[a.length];`, sieht `main` danach lauter Nullen in `z`.
        richtig: false
        erklaerung: Die Zuweisung lässt nur den Parameter `a` auf ein neues Array zeigen. `z` in `main` zeigt weiter auf das alte, unveränderte Array.
    fehler:
      - wert: [r, f, r, r]
        meldung: Eine Zuweisung an den Parameter `a` ändert nur, wohin `a` zeigt. Die Variable `z` in `main` ist davon nicht betroffen.
      - wert: [r, r, r, f]
        meldung: '`==` vergleicht bei Arrays, ob es dasselbe Array ist, nicht ob die Inhalte gleich sind. Das Ergebnis wurde neu angelegt.'
hinweise:
  - Unterscheide „den Inhalt eines Arrays ändern“ (`a[i] = …`) von „die Variable auf ein anderes Array zeigen lassen“ (`a = …`).
loesung: |
  **Ansatz:** Bei jeder Aussage fragen: Welche Variable zeigt auf welches Array?
  ---
  Aussage 1 und 3 sind richtig. Aussage 2 ist falsch, weil das Ergebnis ein eigenes Array ist. Aussage 4 ist falsch, weil eine Zuweisung an den Parameter den Aufrufer nicht betrifft.
```

```aufgabe
id: ra-na-ausgabe-neu
titel: Quadrate in ein neues Array
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.*;

      public class Quadrate {
          public static int[] quadrate(int[] a, int index) {
              if (index == a.length) {
                  return new int[a.length];
              }
              int[] r = quadrate(a, index + 1);
              r[index] = a[index] * a[index];
              return r;
          }

          public static void main(String[] args) {
              int[] a = {2, 3, -1};
              int[] q = quadrate(a, 0);
              System.out.println(Arrays.toString(q));
              System.out.println(Arrays.toString(a));
              System.out.println(q == a);
          }
      }
    loesung: |
      [4, 9, 1]
      [2, 3, -1]
      false
    fehler:
      - wert: "[4, 9, 1]\n[4, 9, 1]\nfalse"
        meldung: '`quadrate` schreibt nur in das neue Array `r`. Das Array `a` wird nur gelesen und bleibt unverändert.'
      - wert: "[4, 9, -1]\n[2, 3, -1]\nfalse"
        meldung: '`(-1) * (-1)` ist 1. Minus mal Minus ergibt Plus.'
      - wert: "[4, 9, 1]\n[2, 3, -1]\ntrue"
        meldung: '`q` zeigt auf das Array, das im Basisfall mit `new` angelegt wurde. Das ist ein anderes Array als `a`.'
hinweise:
  - Wo steht `new`? In welches Array schreiben die Aufrufe auf dem Rückweg?
  - '`==` fragt bei Arrays nur, ob beide Variablen auf dasselbe Array zeigen.'
loesung: |
  **Ansatz:** Das neue Array entsteht im Basisfall mit Index 3. Auf dem Rückweg schreibt jeder Aufruf sein Quadrat hinein.
  ---
  Index 2: `(-1) · (-1) = 1`. Index 1: `3 · 3 = 9`. Index 0: `2 · 2 = 4`. Ergebnis `[4, 9, 1]`.
  ---
  `a` wird nur gelesen und bleibt `[2, 3, -1]`. `q == a` ist `false`, weil `q` ein neues Array ist.
```

```aufgabe
id: ra-na-zeilen-neu
titel: Warum bleibt das Ergebnis fast leer?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll für den Startaufruf `halbiert(a, 0)` ein **neues** Array liefern, in dem jeder Wert von `a`
  halbiert ist (Ganzzahldivision). Für `{8, 6, 4}` liefert sie aber `[4, 0, 0]`. Markiere die beiden Zeilen, die das
  verursachen.
teile:
  - typ: zeilen
    code: |
      public static int[] halbiert(int[] a, int index) {
          int[] r = new int[a.length];
          if (index == a.length) {
              return r;
          }
          r[index] = a[index] / 2;
          halbiert(a, index + 1);
          return r;
      }
    loesung: [2, 7]
    fehler:
      - wert: [2]
        meldung: Zeile 2 ist ein Teil des Problems. Was passiert mit dem Array, das der Selbstaufruf zurückgibt?
      - wert: [6, 7]
        meldung: Zeile 6 schreibt den halbierten Wert richtig an seinen Platz. Der zweite Fehler steckt dort, wo das neue Array entsteht.
hinweise:
  - Wie viele Arrays entstehen bei einem Startaufruf mit drei Werten?
  - Das Ergebnis des Selbstaufrufs muss aufgehoben und weiterverwendet werden.
loesung: |
  **Ansatz:** Prüfen, wo `new` steht und was mit dem Rückgabewert des Selbstaufrufs passiert.
  ---
  Zeile 2: Jeder Aufruf legt ein eigenes Array an. Das `new` gehört nur in den Basisfall.
  ---
  Zeile 7: Das Array, das der Selbstaufruf liefert, wird weggeworfen. Richtig ist `int[] r = halbiert(a, index + 1);` und danach `r[index] = a[index] / 2;`.
```

```aufgabe
id: ra-na-luecken-paare
titel: Nachbarn paarweise tauschen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Methode soll in-place die Werte an den Indizes 0 und 1 tauschen, dann 2 und 3, dann 4 und 5, und so weiter.
  Bei ungerader Länge bleibt der letzte Wert stehen. Aus `{1, 2, 3, 4, 5}` wird `{2, 1, 4, 3, 5}`. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Paare {
          public static void tauschePaare(int[] a, int index) {
              if (___) {
                  return;
              }
              int merk = ___;
              a[index] = a[index + 1];
              a[index + 1] = ___;
              tauschePaare(a, ___);
          }
      }
    luecken: [["index >= a.length - 1", "index + 1 >= a.length", "index > a.length - 2"], ["a[index]"], ["merk"], ["index + 2", "2 + index"]]
    fehler:
      - wert: ["index == a.length", "a[index]", "merk", "index + 2"]
        meldung: Bei ungerader Länge springt der Index von 4 auf 6 und trifft 5 nie. Außerdem fehlt beim letzten Wert der Nachbar. Der Basisfall muss greifen, sobald kein vollständiges Paar mehr übrig ist.
      - wert: ["index >= a.length - 1", "a[index]", "merk", "index + 1"]
        meldung: Mit `index + 1` würde jedes Paar überlappend noch einmal getauscht. Der nächste Paaranfang liegt zwei Plätze weiter.
hinweise:
  - Ein Paar besteht aus `a[index]` und `a[index + 1]`. Wann ist kein vollständiges Paar mehr übrig?
  - Der Tausch braucht die Hilfsvariable `merk`. Das nächste Paar beginnt bei `index + 2`.
loesung: |
  **Ansatz:** In-place-Muster mit Schrittweite 2 und einem Dreieckstausch.
  ---
  Lücken: `index >= a.length - 1`, `a[index]`, `merk` und `index + 2`.
  ---
  Probe mit `{1, 2, 3, 4, 5}`: Index 0 tauscht 1 und 2, Index 2 tauscht 3 und 4, bei Index 4 gilt `4 >= 4`. Ergebnis `{2, 1, 4, 3, 5}`.
```

### Kopieren ist im Programmiertest verboten

In den vorliegenden Programmiertests von 2020 bis 2022 standen über den Aufgaben jedes Mal dieselben Einschränkungen.
Für Arrays sind zwei davon wichtig:

- **Kein `clone` und kein `System.arraycopy`.** Beide würden ein Array in einem Schritt kopieren.
- **Von `Arrays` nur `toString` und `deepToString`.** Damit ist auch `Arrays.copyOfRange` verboten.

Ein neues Array musst du also selbst mit `new` anlegen und Platz für Platz befüllen. In einer rekursiven Methode
geschieht das Befüllen durch die Selbstaufrufe, so wie in `differenzen`. Auf Aufgabenblatt 4 vom Wintersemester 2021
war `clone` in einer Aufgabe dagegen ausdrücklich erlaubt. Lies die Einschränkungen jeder Angabe genau.

```aufgabe
id: ra-na-code-trend
titel: Preise vergleichen
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 4a (compareTemperatures), mit anderem Kontext und anderen Zeichen
angabe: |
  Implementiere `char[] preisTrend(int[] alt, int[] neu, int index)` **rekursiv** und ohne Schleifen. Die Methode
  vergleicht zwei gleich lange Preislisten Platz für Platz und liefert ein **neues** `char`-Array derselben Länge. An
  jeder Stelle steht `'+'`, wenn der neue Preis höher ist, `'-'`, wenn er niedriger ist, und `'='`, wenn beide gleich
  sind. Die beiden übergebenen Arrays bleiben unverändert.

  Vorbedingungen: `alt != null`, `neu != null`, `alt.length == neu.length`, `alt.length > 0`, beim Startaufruf ist
  `index == 0`.

  Beispiel: `preisTrend(new int[]{10, 20, 30}, new int[]{12, 20, 25}, 0)` liefert das Array `['+', '=', '-']`.
teile:
  - typ: code
    vorlage: |
      public class Trend {
          public static char[] preisTrend(int[] alt, int[] neu, int index) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Trend {
          public static char[] preisTrend(int[] alt, int[] neu, int index) {
              if (index == alt.length) {
                  return new char[alt.length];
              }
              char[] trend = preisTrend(alt, neu, index + 1);
              if (neu[index] > alt[index]) {
                  trend[index] = '+';
              } else if (neu[index] < alt[index]) {
                  trend[index] = '-';
              } else {
                  trend[index] = '=';
              }
              return trend;
          }
      }
    tests:
      - { aufruf: "preisTrend(new int[]{10, 20, 30}, new int[]{12, 20, 25}, 0)", erwartet: "new char[]{'+', '=', '-'}" }
      - { aufruf: "preisTrend(new int[]{-3, 0, 7, 7}, new int[]{-5, 1, 7, 9}, 0)", erwartet: "new char[]{'-', '+', '=', '+'}", beschreibung: "mit negativen Werten" }
      - { aufruf: "preisTrend(new int[]{4}, new int[]{4}, 0)", erwartet: "new char[]{'='}", beschreibung: "ein Wert" }
      - { vorher: "int[] x = {1, 2}; int[] y = {2, 1};", aufruf: "preisTrend(x, y, 0)", ergebnis: "x[0] == 1 && x[1] == 2 && y[0] == 2 && y[1] == 1", erwartet: "true", beschreibung: "Eingaben bleiben unverändert" }
      - { aufruf: "preisTrend(new int[]{5, 5, 5, 5, 5}, new int[]{6, 4, 5, 6, 4}, 0)", erwartet: "new char[]{'+', '-', '=', '+', '-'}", versteckt: true }
    regeln: { keineSchleifenIn: [preisTrend], rekursiv: [preisTrend], keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Steht in deinem Ergebnis an manchen Stellen nichts (ein `char` mit dem Wert 0)? Dann entsteht das Array vermutlich in jedem Aufruf neu. Lege es nur im Basisfall an und reiche es auf dem Rückweg weiter." }
      - { wert: 4, meldung: "Die übergebenen Arrays dürfen sich nicht ändern. Schreib nur in das neue `char`-Array." }
      - { wert: "keineArrayKopie", meldung: "`clone` und `System.arraycopy` sind wie im Programmiertest verboten. Das neue Array entsteht mit `new char[alt.length]`." }
hinweise:
  - Lege das Ergebnis im Basisfall `index == alt.length` mit `new char[alt.length]` an.
  - Hole dir in jedem anderen Aufruf zuerst das Array vom Selbstaufruf, trage dann dein Zeichen an der Stelle `index` ein und gib das Array zurück.
loesung: |
  **Ansatz:** Neues Array im Basisfall anlegen, auf dem Rückweg befüllen. Jeder Aufruf schreibt genau ein Zeichen.
  ---
  ```java
  if (index == alt.length) {
      return new char[alt.length];
  }
  char[] trend = preisTrend(alt, neu, index + 1);
  if (neu[index] > alt[index]) {
      trend[index] = '+';
  } else if (neu[index] < alt[index]) {
      trend[index] = '-';
  } else {
      trend[index] = '=';
  }
  return trend;
  ```
  ---
  Ein `char`-Literal steht in einfachen Anführungszeichen: `'+'`. Mit `"+"` wäre es ein String, und die Zuweisung an `trend[index]` kompilierte nicht.
  ---
  Probe mit dem Beispiel: 12 > 10 ergibt `+`, 20 = 20 ergibt `=`, 25 < 30 ergibt `-`. Ergebnis `['+', '=', '-']`.
```

```aufgabe
id: ra-na-code-begrenzen
titel: Messwerte nach oben begrenzen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2021, Aufgabe 4c (replaceAllMoreDigitValues), ohne clone umformuliert
angabe: |
  Implementiere `int[] begrenze(int[] werte, int max, int index)` **rekursiv** und ohne Schleifen. Die Methode liefert
  ein **neues** Array derselben Länge. Jeder Wert, der größer als `max` ist, wird darin durch `max` ersetzt. Alle
  anderen Werte werden unverändert übernommen. Das Array `werte` bleibt unverändert, und `clone` ist verboten.

  Vorbedingungen: `werte != null`, beim Startaufruf ist `index == 0`.

  Beispiel: `begrenze(new int[]{40, 85, 120, 99}, 100, 0)` liefert `[40, 85, 100, 99]`.
teile:
  - typ: code
    vorlage: |
      public class Begrenzen {
          public static int[] begrenze(int[] werte, int max, int index) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Begrenzen {
          public static int[] begrenze(int[] werte, int max, int index) {
              if (index == werte.length) {
                  return new int[werte.length];
              }
              int[] r = begrenze(werte, max, index + 1);
              if (werte[index] > max) {
                  r[index] = max;
              } else {
                  r[index] = werte[index];
              }
              return r;
          }
      }
    tests:
      - { aufruf: "begrenze(new int[]{40, 85, 120, 99}, 100, 0)", erwartet: "new int[]{40, 85, 100, 99}" }
      - { aufruf: "begrenze(new int[]{7, 3, 7}, 7, 0)", erwartet: "new int[]{7, 3, 7}", beschreibung: "gleich max bleibt" }
      - { aufruf: "begrenze(new int[]{}, 5, 0)", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { vorher: "int[] w = {9, 1};", aufruf: "begrenze(w, 2, 0)", ergebnis: "w[0]", erwartet: "9", beschreibung: "Original unverändert" }
      - { vorher: "int[] w = {9, 1};", aufruf: "begrenze(w, 20, 0) == w", erwartet: "false", beschreibung: "Ergebnis ist ein neues Array" }
      - { aufruf: "begrenze(new int[]{-5, 0, 5}, -1, 0)", erwartet: "new int[]{-5, -1, -1}", versteckt: true }
    regeln: { keineSchleifenIn: [begrenze], rekursiv: [begrenze], keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Nur Werte, die **größer** als `max` sind, werden ersetzt. Ein Wert gleich `max` bleibt." }
      - { wert: 4, meldung: "Du hast in `werte` geschrieben. Das Original muss unverändert bleiben. Schreib nur in das neue Array." }
      - { wert: 5, meldung: "Gibst du `werte` selbst zurück? Verlangt ist ein neues Array, angelegt mit `new int[werte.length]` im Basisfall." }
hinweise:
  - Das neue Array entsteht im Basisfall `index == werte.length`.
  - Jeder andere Aufruf trägt an der Stelle `index` entweder `max` oder `werte[index]` ein. Auch unveränderte Werte müssen eingetragen werden, sonst bleibt dort 0.
loesung: |
  **Ansatz:** Neues Array im Basisfall, Befüllen auf dem Rückweg. Jeder Platz wird beschrieben, auch wenn sich der Wert nicht ändert.
  ---
  ```java
  if (index == werte.length) {
      return new int[werte.length];
  }
  int[] r = begrenze(werte, max, index + 1);
  if (werte[index] > max) {
      r[index] = max;
  } else {
      r[index] = werte[index];
  }
  return r;
  ```
  ---
  Statt des `if` geht auch `r[index] = Math.min(werte[index], max);`. `Math.min` liefert den kleineren der beiden Werte.
  ---
  Probe: 40 und 85 bleiben, 120 wird 100, 99 bleibt. Ergebnis `[40, 85, 100, 99]`.
```

```aufgabe
id: ra-na-code-raender
titel: Kleinster Wert nach vorne, größter nach hinten
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 4b (shiftLowestHighestValue), umformuliert mit festgelegter Reihenfolge
angabe: |
  Implementiere `void extremeAnDieRaender(int[] werte, int index)` **rekursiv** und ohne Schleifen. Die Methode
  verändert `werte` in-place. Sie bearbeitet die Indizes `i = index, index + 1, …` bis zum Ende **in dieser
  Reihenfolge** und macht für jedes `i` genau zwei Schritte:

  1. Ist `werte[i]` größer als der letzte Eintrag, tausche `werte[i]` mit dem letzten Eintrag.
  2. Ist `werte[i]` danach kleiner als der erste Eintrag, tausche `werte[i]` mit dem ersten Eintrag.

  Mit Startindex 0 steht danach der kleinste Wert vorne und der größte hinten. Die übrigen Werte dürfen ihre
  Reihenfolge ändern.

  Vorbedingungen: `werte != null`, `werte.length > 1`, `0 <= index < werte.length`.

  Beispiel: Aus `{27, 41, 18, 35, 12, 30}` wird mit Startindex 0 das Array `{12, 30, 27, 35, 18, 41}`.
teile:
  - typ: code
    vorlage: |
      public class Raender {
          public static void extremeAnDieRaender(int[] werte, int index) {
              // TODO
          }
      }
    musterloesung: |
      public class Raender {
          public static void extremeAnDieRaender(int[] werte, int index) {
              if (index == werte.length) {
                  return;
              }
              int letzter = werte.length - 1;
              if (werte[index] > werte[letzter]) {
                  int merk = werte[index];
                  werte[index] = werte[letzter];
                  werte[letzter] = merk;
              }
              if (werte[index] < werte[0]) {
                  int merk = werte[index];
                  werte[index] = werte[0];
                  werte[0] = merk;
              }
              extremeAnDieRaender(werte, index + 1);
          }
      }
    tests:
      - { vorher: "int[] a = {27, 41, 18, 35, 12, 30};", aufruf: "extremeAnDieRaender(a, 0)", ergebnis: "a", erwartet: "new int[]{12, 30, 27, 35, 18, 41}" }
      - { vorher: "int[] a = {27, 41, 18, 35, 12, 30};", aufruf: "extremeAnDieRaender(a, 3)", ergebnis: "a", erwartet: "new int[]{12, 41, 18, 30, 27, 35}", beschreibung: "Start bei Index 3" }
      - { vorher: "int[] a = {9, 7, 5, 3, 1};", aufruf: "extremeAnDieRaender(a, 0)", ergebnis: "a", erwartet: "new int[]{1, 7, 5, 3, 9}", beschreibung: "absteigende Folge" }
      - { vorher: "int[] a = {8, 3};", aufruf: "extremeAnDieRaender(a, 0)", ergebnis: "a", erwartet: "new int[]{3, 8}", beschreibung: "zwei Werte" }
      - { vorher: "int[] a = {2, 9, 4, 1, 7};", aufruf: "extremeAnDieRaender(a, 0)", ergebnis: "a", erwartet: "new int[]{1, 7, 4, 2, 9}", versteckt: true }
    regeln: { keineSchleifenIn: [extremeAnDieRaender], rekursiv: [extremeAnDieRaender], keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Halte die Reihenfolge genau ein: zuerst der Vergleich mit dem letzten Eintrag, dann mit dem ersten, beides **vor** dem Selbstaufruf. Eine andere Reihenfolge liefert ein anderes, ebenfalls plausibles Array." }
      - { wert: 2, meldung: "Bei Startindex 3 werden nur die Indizes 3, 4 und 5 bearbeitet. Die 41 an Index 1 bleibt stehen, obwohl sie größer ist." }
      - { wert: 4, meldung: "Bei zwei Werten tauscht schon `i = 0` mit dem letzten Eintrag. Prüfe, ob dein Tausch eine Hilfsvariable verwendet." }
hinweise:
  - Das ist ein In-place-Muster wie `verdopple`, aber mit zwei Dreieckstauschen vor dem Selbstaufruf.
  - Der letzte Index ist `werte.length - 1`, der erste ist 0. Vergleiche jeweils den aktuellen Wert `werte[index]` mit dem Wert an diesen Stellen.
loesung: |
  **Ansatz:** In-place-Muster. Jeder Aufruf erledigt die beiden Vergleiche für seinen Index und ruft sich dann mit `index + 1` auf. Basisfall ist `index == werte.length`.
  ---
  ```java
  if (index == werte.length) {
      return;
  }
  int letzter = werte.length - 1;
  if (werte[index] > werte[letzter]) {
      int merk = werte[index];
      werte[index] = werte[letzter];
      werte[letzter] = merk;
  }
  if (werte[index] < werte[0]) {
      int merk = werte[index];
      werte[index] = werte[0];
      werte[0] = merk;
  }
  extremeAnDieRaender(werte, index + 1);
  ```
  ---
  Zweimal `int merk` ist erlaubt, weil jede Variable nur in ihrem eigenen `if`-Block gilt.
  ---
  Probe mit dem Beispiel: Bei `i = 1` tauscht 41 mit 30. Bei `i = 2` tauscht 18 mit 27. Bei `i = 4` tauscht 12 mit 18. Ergebnis `{12, 30, 27, 35, 18, 41}`.
```

```reflexion
frage: Warum legt man bei einem festen Methodenkopf wie `int[] differenzen(int[] alt, int[] neu, int index)` das neue Array im Basisfall an und nicht im Startaufruf?
antwort: |
  Der Startaufruf ist von außen gesehen besonders, aber in der Methode sieht er aus wie jeder andere Aufruf. Man
  könnte ihn nur an `index == 0` erkennen, und auch dann hätte man keinen Weg, das neue Array an die Selbstaufrufe
  weiterzugeben, denn der Kopf hat keinen Parameter dafür. Der Basisfall dagegen wird pro Startaufruf genau einmal
  erreicht, und sein Rückgabewert kommt automatisch bei allen wartenden Aufrufen an. Jeder schreibt seinen Platz und
  reicht dasselbe Array weiter. So entsteht genau ein Array.
```

## Zwei Indizes: von beiden Enden zur Mitte

```aufgabe
id: ra-ze-check-palindrom
titel: Ein Palindrom von außen nach innen
niveau: 1
art: check
angabe: |
  In [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings) hast du geprüft, ob ein Wort ein
  **Palindrom** ist, also vorwärts und rückwärts gleich lautet. Welche beiden Zeichen vergleicht die Methode im
  allerersten Aufruf für das Wort `"rentner"`?
teile:
  - typ: auswahl
    optionen: ['das erste und das letzte Zeichen, `r` und `r`', 'die ersten beiden Zeichen, `r` und `e`', 'die beiden mittleren Zeichen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Palindrom ist von vorne und von hinten gleich. Darum vergleicht man das erste Zeichen mit dem **letzten**, nicht mit seinem Nachbarn.
      - wert: 2
        meldung: Die Mitte kommt zuletzt dran. Die Rekursion arbeitet sich von außen nach innen vor.
loesung: |
  Die Methode vergleicht `charAt(0)` mit `charAt(length() - 1)`. Bei `"rentner"` sind das `r` und `r`.
  ---
  Sind sie gleich, ruft sie sich mit dem Inneren `"entne"` auf, bis höchstens ein Zeichen übrig ist.
```

Beim Palindrom hast du einen String von **beiden Enden** her bearbeitet. Bei Arrays geht das genauso, nur ohne
`substring`. Statt eines Index gibt es jetzt zwei: `links` zeigt auf das linke Ende des noch offenen Bereichs,
`rechts` auf das rechte Ende. Jeder Aufruf bearbeitet das äußere Paar `a[links]` und `a[rechts]`. Der Selbstaufruf
bekommt den inneren Bereich mit `links + 1` und `rechts - 1`. Die beiden Indizes laufen also aufeinander zu.

:::definition[Ein Bereich zwischen zwei Indizes]
Mit zwei Indizes `links` und `rechts` beschreibt man den **Bereich** `[links, rechts]` eines Arrays. Er umfasst alle
Werte mit einem Index von `links` bis einschließlich `rechts`. Er enthält `rechts - links + 1` Werte. Ist
`links > rechts`, ist der Bereich leer.
:::

**Beispiel:** Für ein Array der Länge 6 beschreibt `[1, 4]` die Werte mit den Indizes 1, 2, 3 und 4, also
`4 - 1 + 1 = 4` Werte. Der Bereich `[3, 3]` enthält genau einen Wert. **Kein Beispiel für einen gültigen, nicht leeren
Bereich:** `[4, 1]`. Hier ist `links > rechts`, der Bereich ist leer. Für das ganze Array startet man mit
`links = 0` und `rechts = a.length - 1`.

:::beispiel[Ein Array in-place umdrehen]
```java
public static void umdrehen(int[] a, int links, int rechts) {
    if (links >= rechts) {
        return;
    }
    int merk = a[links];
    a[links] = a[rechts];
    a[rechts] = merk;
    umdrehen(a, links + 1, rechts - 1);
}
```

- **Basisfall:** `links >= rechts`. Dann enthält der Bereich höchstens einen Wert. Ein einzelner Wert ist schon
  „umgedreht“, ein leerer Bereich ebenso.
- **Beitrag:** Der Aufruf tauscht das äußere Paar mit einem Dreieckstausch.
- **Fortschritt:** Beide Indizes rücken nach innen. Der Bereich wird pro Aufruf um zwei Werte kleiner.

Ablauf für `a = {1, 2, 3, 4, 5}` mit dem Startaufruf `umdrehen(a, 0, 4)`:

1. `(0, 4)`: Tausch von 1 und 5. Das Array ist `{5, 2, 3, 4, 1}`.
2. `(1, 3)`: Tausch von 2 und 4. Das Array ist `{5, 4, 3, 2, 1}`.
3. `(2, 2)`: Es gilt `2 >= 2`, Basisfall. Die 3 in der Mitte bleibt, wo sie ist.

Bei gerader Länge, etwa `{1, 2, 3, 4}`, lauten die Aufrufe `(0, 3)`, `(1, 2)` und `(2, 1)`. Beim letzten gilt
`2 >= 1`, der Bereich ist leer. Die Bedingung `>=` deckt also beide Fälle ab.
:::

```aufgabe
id: ra-ze-gefuehrt
titel: Sechs Werte umdrehen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  `main` ruft `umdrehen(a, 0, 5)` für `a = {10, 20, 30, 40, 50, 60}` auf. Die Methode `umdrehen` ist die aus dem
  Beispiel dieses Abschnitts. Wie oft wird `umdrehen` insgesamt aufgerufen? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Drei Aufrufe tauschen. Der vierte Aufruf mit `(3, 2)` tauscht nicht mehr, ist aber trotzdem ein Aufruf.
      - wert: "6"
        meldung: Jeder Aufruf bearbeitet ein **Paar**, also zwei Werte auf einmal. Bei sechs Werten gibt es drei Paare und einen Basisfall.
gefuehrt:
  - text: Welches Paar tauscht der Aufruf mit `(1, 4)`?
    teil:
      typ: auswahl
      optionen: ['20 und 50', '10 und 60', '20 und 30']
      richtig: [0]
    erklaerung: An Index 1 steht 20, an Index 4 steht 50. Diese beiden tauschen.
  - text: Welchen Wert hat `links` im Aufruf, der als erster den Basisfall erreicht?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Die Aufrufe lauten `(0, 5)`, `(1, 4)`, `(2, 3)` und `(3, 2)`. Erst bei `(3, 2)` gilt `links >= rechts`.
  - text: Wie viele Tausche gibt es insgesamt?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Jeder Aufruf außer dem Basisfall tauscht genau einmal.
  - text: Wie sieht das Array danach aus?
    teil:
      typ: auswahl
      optionen: ['`{60, 50, 40, 30, 20, 10}`', '`{60, 20, 30, 40, 50, 10}`', '`{60, 50, 30, 40, 20, 10}`']
      richtig: [0]
    erklaerung: Alle drei Paare wurden getauscht, das Array ist vollständig umgedreht.
hinweise:
  - Schreib die Paare `(links, rechts)` untereinander, bis `links >= rechts` gilt.
loesung: |
  **Ansatz:** Bei jedem Aufruf rücken beide Indizes um 1 nach innen. Gezählt wird bis einschließlich Basisfall.
  ---
  Aufrufe: `(0, 5)`, `(1, 4)`, `(2, 3)` und `(3, 2)`. Das sind 4 Aufrufe, davon 3 mit Tausch.
```

Mit zwei Indizes kann man auch Fragen beantworten, ohne etwas zu verändern. Das bekannteste Beispiel ist die
Spiegel-Prüfung, das Gegenstück zum Palindrom.

:::beispiel[Ist das Array ein Spiegelbild?]
```java
public static boolean istSpiegel(int[] a, int links, int rechts) {
    if (links >= rechts) {
        return true;
    }
    if (a[links] != a[rechts]) {
        return false;
    }
    return istSpiegel(a, links + 1, rechts - 1);
}
```

Das ist ein „Alle“-Muster wie in [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden).
Alle äußeren Paare müssen gleich sein. Ein Bereich mit höchstens einem Wert ist immer ein Spiegelbild, darum liefert
der Basisfall `true`.

- `istSpiegel({3, 8, 8, 3}, 0, 3)`: 3 gleich 3, weiter mit `(1, 2)`. 8 gleich 8, weiter mit `(2, 1)`. Basisfall, `true`.
- `istSpiegel({3, 8, 3, 8}, 0, 3)`: 3 gegen 8, ungleich. Sofort `false`, ohne das innere Paar anzusehen.
:::

:::achtung[Der Basisfall links == rechts]
Bei ungerader Länge treffen sich die Indizes in der Mitte. Darum schreiben viele als Basisfall `links == rechts`:

```java
if (links == rechts) {        // falsch bei gerader Länge
    return;
}
```

Für `a = {1, 2, 3, 4}` lauten die Aufrufe `(0, 3)`, `(1, 2)` und dann `(2, 1)`. Die Indizes haben sich nicht getroffen,
sondern sind aneinander vorbeigelaufen. Der Aufruf `(2, 1)` tauscht 3 und 2 noch einmal zurück, `(3, 0)` tauscht die
äußeren Werte zurück. Der Aufruf `(4, -1)` greift auf `a[4]` zu und bricht mit
`ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4` ab. Richtig ist `links >= rechts`. Diese Bedingung
kann man nicht überspringen.
:::

```aufgabe
id: ra-ze-ausgabe-spiegel
titel: Spiegelbilder prüfen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Die Methode `istSpiegel` ist die aus dem Beispiel dieses Abschnitts. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Spiegel {
          public static boolean istSpiegel(int[] a, int links, int rechts) {
              if (links >= rechts) {
                  return true;
              }
              if (a[links] != a[rechts]) {
                  return false;
              }
              return istSpiegel(a, links + 1, rechts - 1);
          }

          public static void main(String[] args) {
              int[] p = {6, 1, 9, 1, 6};
              int[] q = {2, 5, 7, 5, 4};
              System.out.println(istSpiegel(p, 0, 4));
              System.out.println(istSpiegel(q, 0, 4));
              System.out.println(istSpiegel(q, 1, 3));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "true\nfalse\nfalse"
        meldung: Der dritte Aufruf prüft nur den Bereich `[1, 3]`, also 5, 7, 5. Die ungleichen Randwerte 2 und 4 liegen außerhalb.
      - wert: "true\ntrue\ntrue"
        meldung: Im zweiten Aufruf ist schon das äußere Paar ungleich, 2 gegen 4. Die Methode liefert sofort `false`.
hinweise:
  - Vergleiche immer das äußere Paar des Bereichs und rücke dann nach innen.
loesung: |
  **Ansatz:** Spiegel-Prüfung im angegebenen Bereich, von außen nach innen.
  ---
  `p` von 0 bis 4: 6 = 6, 1 = 1, Mitte 9, also `true`. `q` von 0 bis 4: 2 gegen 4, also `false`. `q` von 1 bis 3: 5 = 5, Mitte 7, also `true`.
```

```aufgabe
id: ra-ze-auswahl-basis
titel: Der Basisfall für beide Längen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Methode `umdrehen(int[] a, int links, int rechts)` tauscht das äußere Paar und ruft sich mit
  `(a, links + 1, rechts - 1)` auf. Welcher Basisfall funktioniert für Arrays gerader **und** ungerader Länge?
teile:
  - typ: auswahl
    optionen: ['`if (links >= rechts) return;`', '`if (links == rechts) return;`', '`if (rechts == a.length) return;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei gerader Länge treffen sich die Indizes nie auf demselben Wert. Sie laufen von `(1, 2)` direkt zu `(2, 1)` aneinander vorbei.
      - wert: 2
        meldung: '`rechts` startet bei `a.length - 1` und wird nur kleiner. Es erreicht `a.length` nie, die Rekursion endet nicht rechtzeitig.'
hinweise:
  - Probiere beide Kandidaten mit einem Array aus vier Werten aus.
loesung: |
  **Ansatz:** Die Folge der Indexpaare für eine gerade und eine ungerade Länge aufschreiben.
  ---
  Bei Länge 4: `(0, 3)`, `(1, 2)`, `(2, 1)`. Nur `links >= rechts` greift bei `(2, 1)`. Bei Länge 5 greift es bei `(2, 2)`.
```

:::achtung[Der mittlere Wert doppelt gezählt]
Diese Methode soll alle Werte im Bereich addieren, jeweils ein äußeres Paar pro Aufruf:

```java
public static int summe(int[] a, int links, int rechts) {
    if (links > rechts) {
        return 0;
    }
    return a[links] + a[rechts] + summe(a, links + 1, rechts - 1);   // Mitte doppelt
}
```

Für `a = {1, 2, 3}` und den Bereich `[0, 2]` addiert der erste Aufruf `1 + 3`. Der zweite Aufruf hat `(1, 1)`. Dort
sind `a[links]` und `a[rechts]` **derselbe** Wert, und `2 + 2` wird addiert. Ergebnis 8 statt 6. Bei ungerader Länge
braucht man den Fall „genau ein Wert“ extra: `if (links == rechts) return a[links];`, zusätzlich zum leeren Bereich.
:::

```aufgabe
id: ra-ze-trace
titel: Rückgabewerte mit zwei Indizes
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist

  ```java
  public static int f(int[] a, int links, int rechts) {
      if (links >= rechts) {
          return 0;
      }
      return a[links] - a[rechts] + f(a, links + 1, rechts - 1);
  }
  ```

  `main` ruft `f(new int[]{9, 2, 6, 3, 5}, 0, 4)` auf. Trage für jeden Aufruf `links`, `rechts` und den Rückgabewert
  ein. Die erste Zeile ist der Aufruf aus `main`.
teile:
  - typ: trace
    spalten: [links, rechts, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf]
    loesung: [[0, 4, 3], [1, 3, -1], [2, 2, 0]]
    fehler:
      - wert: ["0", "4", "4", "1", "3", "-1", "2", "2", "0"]
        meldung: Der erste Aufruf liefert nicht nur sein eigenes `9 - 5 = 4`, sondern addiert das Ergebnis des Selbstaufrufs, also -1.
      - wert: ["0", "4", "3", "1", "3", "-1", "2", "2", "6"]
        meldung: Beim Aufruf `(2, 2)` gilt `links >= rechts`. Er ist der Basisfall und liefert 0, nicht den mittleren Wert.
hinweise:
  - Die Indizes rücken bei jedem Aufruf beide um 1 nach innen. Wann gilt `links >= rechts`?
  - Rechne die Rückgabewerte von unten nach oben. Jeder Aufruf addiert `a[links] - a[rechts]` zum Wert darunter.
loesung: |
  **Ansatz:** Hinweg mit den Paaren `(0, 4)`, `(1, 3)`, `(2, 2)`. Der dritte Aufruf ist der Basisfall.
  ---
  `(2, 2)` liefert 0. `(1, 3)` liefert `2 - 3 + 0 = -1`. `(0, 4)` liefert `9 - 5 + (-1) = 3`.
  ---
  Die mittlere 6 kommt in keiner Rechnung vor, denn der Basisfall greift schon bei einem einzelnen Wert.
```

```aufgabe
id: ra-ze-ausgabe-paare
titel: Paarsummen auf Hin- und Rückweg
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class PaarSummen {
          public static void paare(int[] a, int links, int rechts) {
              if (links >= rechts) {
                  System.out.println("Mitte " + links);
                  return;
              }
              System.out.println(a[links] + a[rechts]);
              paare(a, links + 1, rechts - 1);
              System.out.println("<" + links);
          }

          public static void main(String[] args) {
              int[] a = {2, 7, 1, 8, 2};
              paare(a, 0, 4);
          }
      }
    loesung: |
      4
      15
      Mitte 2
      <1
      <0
    fehler:
      - wert: "4\n15\nMitte 2\n<0\n<1"
        meldung: Die Zeilen mit `<` stehen hinter dem Selbstaufruf. Der innere Aufruf mit `links = 1` wird zuerst fertig.
      - wert: "4\n15\nMitte 1\n<1\n<0"
        meldung: Ausgegeben wird der Index `links` des Basisfalls, nicht der Wert. Der Basisfall ist der Aufruf mit `(2, 2)`.
hinweise:
  - Erst die Paarsummen auf dem Hinweg, dann der Basisfall, dann die `<`-Zeilen auf dem Rückweg.
  - Im Basisfall wird `links` ausgegeben, also eine Indexnummer.
loesung: |
  **Ansatz:** Aufrufe `(0, 4)`, `(1, 3)` und `(2, 2)`. Der letzte ist der Basisfall.
  ---
  Hinweg: `2 + 2 = 4`, dann `7 + 8 = 15`. Basisfall: `Mitte 2`.
  ---
  Rückweg: zuerst `<1`, dann `<0`, denn der zuletzt begonnene Aufruf wird zuerst fertig.
```

```aufgabe
id: ra-ze-luecken-bereich
titel: Nur einen Bereich umdrehen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Methode soll in-place nur die Werte im Bereich `[von, bis]` umdrehen. Aus `{1, 2, 3, 4, 5, 6}` wird mit
  `dreheBereich(a, 1, 4)` das Array `{1, 5, 4, 3, 2, 6}`. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Bereich {
          public static void dreheBereich(int[] a, int von, int bis) {
              if (___) {
                  return;
              }
              int merk = a[von];
              a[von] = ___;
              a[bis] = merk;
              dreheBereich(a, ___, ___);
          }
      }
    luecken: [["von >= bis", "bis <= von"], ["a[bis]"], ["von + 1", "1 + von"], ["bis - 1"]]
    fehler:
      - wert: ["von == bis", "a[bis]", "von + 1", "bis - 1"]
        meldung: Der Bereich `[1, 4]` hat eine gerade Anzahl von Werten. Die Indizes laufen bei `(2, 3)` zu `(3, 2)` aneinander vorbei und treffen sich nie.
      - wert: ["von >= bis", "a[bis]", "von + 1", "bis"]
        meldung: Beide Indizes müssen nach innen rücken. Bleibt `bis` stehen, wird der rechte Rand immer wieder getauscht.
hinweise:
  - Der Basisfall ist ein Bereich mit höchstens einem Wert.
  - Nach dem Tausch rücken beide Grenzen um 1 nach innen.
loesung: |
  **Ansatz:** Umdreh-Muster mit zwei Indizes, nur mit anderen Startwerten als 0 und `a.length - 1`.
  ---
  Lücken: `von >= bis`, `a[bis]`, `von + 1` und `bis - 1`.
  ---
  Probe mit `(1, 4)`: Tausch 2 und 5, dann `(2, 3)`: Tausch 3 und 4, dann `(3, 2)`: Basisfall. Ergebnis `{1, 5, 4, 3, 2, 6}`.
```

```aufgabe
id: ra-ze-rf-aufrufe
titel: Aussagen zur Rekursion mit zwei Indizes
niveau: 2
lernziel: 4
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Aussagen zu einer rekursiven Methode), Inhalt neu
angabe: |
  Beurteile jede Aussage über `umdrehen(int[] a, int links, int rechts)` mit dem Basisfall `links >= rechts` und dem
  Startaufruf `umdrehen(a, 0, a.length - 1)`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für ein Array der Länge 7 wird `umdrehen` insgesamt 4-mal aufgerufen.
        richtig: true
        erklaerung: 'Die Aufrufe lauten `(0, 6)`, `(1, 5)`, `(2, 4)` und `(3, 3)`. Allgemein sind es `n / 2 + 1` Aufrufe bei Ganzzahldivision.'
      - text: Für ein leeres Array wirft der Startaufruf eine Exception.
        richtig: false
        erklaerung: 'Der Startaufruf lautet `umdrehen(a, 0, -1)`. Wegen `0 >= -1` greift sofort der Basisfall, es gibt keinen Zugriff.'
      - text: Die Methode ist endrekursiv, denn der Selbstaufruf ist die letzte Anweisung.
        richtig: true
        erklaerung: 'Nach dem Selbstaufruf passiert nichts mehr. Eine Methode, deren Selbstaufruf die letzte Aktion ist, heißt endrekursiv (siehe [11.2 Endrekursion: das Ergebnis auf dem Hinweg berechnen](/lernen/ep1/rekursion-vertieft/endrekursion-das-ergebnis-auf-dem-hinweg-berechnen)).'
      - text: Ersetzt man den Fortschritt durch `(a, links + 1, rechts)`, wird das Array immer noch richtig umgedreht.
        richtig: false
        erklaerung: Dann tauscht jeder Aufruf mit demselben rechten Rand. Für `{1, 2, 3}` entsteht `{3, 1, 2}` statt `{3, 2, 1}`.
    fehler:
      - wert: [r, r, r, f]
        meldung: Setze beim leeren Array den Startaufruf ein. Welchen Wert hat `a.length - 1`, und greift dann der Basisfall?
      - wert: [f, f, r, f]
        meldung: Schreib die Indexpaare für Länge 7 auf und zähle auch den Basisfall `(3, 3)` mit.
hinweise:
  - Für Aussage 1 und 2 die Indexpaare aufschreiben.
  - Für Aussage 4 die Methode mit `{1, 2, 3}` von Hand ausführen.
loesung: |
  **Ansatz:** Jede Aussage an einem kleinen Fall prüfen.
  ---
  Aussage 1: Paare `(0, 6)` bis `(3, 3)`, also 4 Aufrufe, richtig. Aussage 2: `(0, -1)` ist sofort Basisfall, falsch.
  ---
  Aussage 3: Nach dem Selbstaufruf folgt nichts, richtig. Aussage 4: Mit festem `rechts` wird `{1, 2, 3}` zu `{3, 1, 2}`, falsch.
```

```aufgabe
id: ra-ze-code-ungleich
titel: Wie viele Paare stören den Spiegel?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int zaehleUngleichePaare(int[] a, int links, int rechts)` **rekursiv** und ohne Schleifen. Die
  Methode zählt, wie viele der Paare `(a[links], a[rechts])`, `(a[links + 1], a[rechts - 1])`, … **verschiedene**
  Werte haben. Ein einzelner Wert in der Mitte bildet kein Paar. Das Ergebnis sagt, wie viele Werte man mindestens
  ändern muss, damit der Bereich ein Spiegelbild wird.

  Vorbedingungen: `a != null`, `links >= 0`, `rechts < a.length`.

  Beispiel: Für `{4, 1, 7, 2, 1, 5}` und den Bereich `[0, 5]` sind die Paare (4, 5), (1, 1) und (7, 2). Zwei davon sind
  ungleich, das Ergebnis ist 2.
teile:
  - typ: code
    vorlage: |
      public class Ungleich {
          public static int zaehleUngleichePaare(int[] a, int links, int rechts) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ungleich {
          public static int zaehleUngleichePaare(int[] a, int links, int rechts) {
              if (links >= rechts) {
                  return 0;
              }
              int rest = zaehleUngleichePaare(a, links + 1, rechts - 1);
              if (a[links] != a[rechts]) {
                  return rest + 1;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "zaehleUngleichePaare(new int[]{4, 1, 7, 2, 1, 5}, 0, 5)", erwartet: "2" }
      - { aufruf: "zaehleUngleichePaare(new int[]{1, 2, 1}, 0, 2)", erwartet: "0", beschreibung: "schon ein Spiegelbild" }
      - { aufruf: "zaehleUngleichePaare(new int[]{1, 2, 3, 4, 5}, 1, 3)", erwartet: "1", beschreibung: "Teilbereich" }
      - { aufruf: "zaehleUngleichePaare(new int[]{}, 0, -1)", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "zaehleUngleichePaare(new int[]{5, 6}, 0, 1)", erwartet: "1", versteckt: true }
    regeln: { keineSchleifenIn: [zaehleUngleichePaare], rekursiv: [zaehleUngleichePaare], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Bei sechs Werten laufen die Indizes von `(2, 3)` direkt zu `(3, 2)` und treffen sich nie. Ein Basisfall `links == rechts` greift dann nicht. Der Basisfall lautet `links >= rechts`." }
      - { wert: 4, meldung: "Beim leeren Array ist `rechts` gleich -1. Mit dem Basisfall `links >= rechts` greift er sofort, ohne Zugriff auf das Array." }
hinweise:
  - Das ist ein Zähl-Muster mit zwei Indizes. Ein Bereich mit höchstens einem Wert enthält kein Paar.
  - Ein ungleiches äußeres Paar zählt 1, sonst 0. Der Rest kommt vom Selbstaufruf mit `links + 1` und `rechts - 1`.
loesung: |
  **Ansatz:** Zähl-Muster wie in [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen), aber mit zwei Indizes, die aufeinander zulaufen.
  ---
  ```java
  if (links >= rechts) {
      return 0;
  }
  int rest = zaehleUngleichePaare(a, links + 1, rechts - 1);
  if (a[links] != a[rechts]) {
      return rest + 1;
  }
  return rest;
  ```
  ---
  Probe mit dem Beispiel: (4, 5) ungleich, (1, 1) gleich, (7, 2) ungleich, dann `(3, 2)` Basisfall. Ergebnis 2.
```

```aufgabe
id: ra-ze-code-gegenueber
titel: Der größte Abstand gegenüberliegender Werte
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 10 (findMaxOppositeSum), mit Abstand statt Summe umformuliert
angabe: |
  Implementiere `int groessterGegenueberAbstand(int[] werte, int start, int end)` **rekursiv**. Die Methode betrachtet
  die gegenüberliegenden Paare im Bereich `[start, end]`: `werte[start]` mit `werte[end]`, `werte[start + 1]` mit
  `werte[end - 1]` und so weiter. Sie liefert den größten **Abstand** eines solchen Paares. Der Abstand ist der Betrag
  der Differenz, berechnet mit `Math.abs`.

  Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine Hilfsmethoden, keine Klassenvariablen,
  Methodenkopf unverändert.

  Vorbedingungen: `werte != null`, `start < end`, beide sind gültige Indizes, und der Bereich `[start, end]` enthält
  eine **gerade** Anzahl von Werten.

  Beispiel: Für `werte = {3, 10, 4, 8, 1, 6}` und den Bereich `[0, 5]` sind die Paare (3, 6), (10, 1) und (4, 8).
  Ihre Abstände sind 3, 9 und 4. Das Ergebnis ist 9.
teile:
  - typ: code
    vorlage: |
      public class Gegenueber {
          public static int groessterGegenueberAbstand(int[] werte, int start, int end) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Gegenueber {
          public static int groessterGegenueberAbstand(int[] werte, int start, int end) {
              int eigener = Math.abs(werte[start] - werte[end]);
              if (start + 1 == end) {
                  return eigener;
              }
              return Math.max(eigener, groessterGegenueberAbstand(werte, start + 1, end - 1));
          }
      }
    tests:
      - { aufruf: "groessterGegenueberAbstand(new int[]{3, 10, 4, 8, 1, 6}, 0, 5)", erwartet: "9" }
      - { aufruf: "groessterGegenueberAbstand(new int[]{3, 10, 4, 8, 1, 6}, 0, 3)", erwartet: "6", beschreibung: "Bereich [0, 3]" }
      - { aufruf: "groessterGegenueberAbstand(new int[]{3, 10, 4, 8, 1, 6}, 2, 5)", erwartet: "7", beschreibung: "Bereich [2, 5]" }
      - { aufruf: "groessterGegenueberAbstand(new int[]{-4, 7}, 0, 1)", erwartet: "11", beschreibung: "ein Paar, negativer Wert" }
      - { aufruf: "groessterGegenueberAbstand(new int[]{5, 5, 5, 5}, 0, 3)", erwartet: "0", versteckt: true }
    regeln: { keineSchleifenIn: [groessterGegenueberAbstand], rekursiv: [groessterGegenueberAbstand], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Werden alle drei Paare verglichen? Der Basisfall ist das innerste Paar mit `start + 1 == end`. Dort gibt es noch einen Abstand zu berechnen." }
      - { wert: 4, meldung: "Der Abstand ist der Betrag der Differenz. `-4 - 7` ist -11, der Abstand ist 11." }
      - { wert: "keineSchleifenIn", meldung: "Statt einer Schleife über die Paare rufst du dich mit `start + 1` und `end - 1` auf." }
hinweise:
  - Weil die Anzahl gerade ist, bleibt am Ende genau ein Paar mit `start + 1 == end` übrig. Das ist der Basisfall.
  - Jeder Aufruf berechnet seinen eigenen Abstand und vergleicht ihn mit `Math.max` mit dem Ergebnis für den inneren Bereich.
loesung: |
  **Ansatz:** Maximum-Muster mit zwei Indizes. Wie beim Maximum gibt es keinen Wert für „gar kein Paar“, darum endet die Rekursion beim innersten Paar.
  ---
  ```java
  int eigener = Math.abs(werte[start] - werte[end]);
  if (start + 1 == end) {
      return eigener;
  }
  return Math.max(eigener, groessterGegenueberAbstand(werte, start + 1, end - 1));
  ```
  ---
  Die gerade Anzahl ist wichtig: Bei ungerader Anzahl gäbe es kein Paar mit `start + 1 == end`, und die Indizes liefen bei `(2, 2)` weiter zu `(3, 1)`.
  ---
  Probe mit `[2, 5]`: Paare (4, 6) mit Abstand 2 und (8, 1) mit Abstand 7. Ergebnis 7.
```

```reflexion
frage: Warum genügt bei der Spiegel-Prüfung der Basisfall links >= rechts, während die Summe aller Werte im Bereich zusätzlich den Fall links == rechts braucht?
antwort: |
  Die Spiegel-Prüfung schaut nur Paare an. Ein einzelner Wert in der Mitte hat keinen Partner und kann den Spiegel
  nicht stören, darum darf er im Basisfall einfach übergangen werden. Bei der Summe muss dagegen jeder Wert genau
  einmal vorkommen, auch der mittlere. Mit `links >= rechts` würde er übergangen, mit nur `links > rechts` würde er als
  Paar mit sich selbst doppelt gezählt. Darum braucht die Summe einen eigenen Fall für genau einen Wert.
```

## Teile und herrsche: das Array halbieren

```aufgabe
id: ra-th-check-mitte
titel: Die Mitte mit Ganzzahldivision
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int start = 0, end = 5;
      System.out.println((start + end) / 2);
      start = 3;
      end = 4;
      System.out.println((start + end) / 2);
    loesung: |
      2
      3
    fehler:
      - wert: "2.5\n3.5"
        meldung: '`start + end` und `2` sind beide `int`. Bei einer Division zweier `int`-Werte fällt der Nachkommaanteil weg.'
      - wert: "3\n4"
        meldung: Die Ganzzahldivision rundet nicht auf, sie schneidet ab. `5 / 2` ist 2 und `7 / 2` ist 3.
hinweise:
  - Bei `int / int` fällt der Nachkommaanteil einfach weg.
loesung: |
  `(0 + 5) / 2` ist `5 / 2`, also 2 mit Rest 1. Der Rest fällt weg, Ergebnis 2.
  ---
  `(3 + 4) / 2` ist `7 / 2`, also 3. Die Mitte liegt bei einer geraden Anzahl von Werten immer etwas links.
```

Bisher hat jeder Aufruf **einen** Wert erledigt und den Rest an **einen** Selbstaufruf weitergegeben. Man kann ein
Array aber auch anders zerlegen: in eine linke und eine rechte Hälfte. Jede Hälfte wird von einem eigenen
Selbstaufruf gelöst, und der aktuelle Aufruf setzt die beiden Teilergebnisse zusammen. Diese Methode hat also **zwei**
Selbstaufrufe.

:::definition[Teile und herrsche]
**Teile und herrsche** (englisch *divide and conquer*) ist ein Lösungsprinzip in drei Schritten:

1. **Teilen:** Zerlege die Aufgabe in zwei (oder mehr) kleinere Aufgaben derselben Art, etwa die beiden Hälften eines
   Bereichs.
2. **Lösen:** Löse jede Teilaufgabe mit einem Selbstaufruf. Sehr kleine Aufgaben löst der Basisfall direkt.
3. **Kombinieren:** Setze die Teilergebnisse zum Ergebnis zusammen, etwa durch `+`, `Math.max` oder `||`.
:::

**Beispiel:** Die Summe des Bereichs `[0, 3]` ist die Summe von `[0, 1]` plus die Summe von `[2, 3]`. **Kein
Beispiel:** `summe(a, index)` aus [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
Sie trennt nur einen einzelnen Wert vom Rest ab und hat einen einzigen Selbstaufruf. Das ist eine gewöhnliche,
**lineare** Rekursion.

Für die Teilung brauchst du die **Mitte** des Bereichs `[start, end]`: `int mitte = (start + end) / 2;`. Die linke
Hälfte ist `[start, mitte]`, die rechte ist `[mitte + 1, end]`. Bei einer ungeraden Anzahl von Werten ist die linke
Hälfte um einen Wert länger.

:::beispiel[Die Summe durch Halbieren]
```java
public static int summe(int[] a, int start, int end) {
    if (start == end) {
        return a[start];
    }
    int mitte = (start + end) / 2;
    int links = summe(a, start, mitte);
    int rechts = summe(a, mitte + 1, end);
    return links + rechts;
}
```

Vorbedingung: `start <= end`, der Bereich ist also nicht leer. Startaufruf für das ganze Array:
`summe(a, 0, a.length - 1)`.

- **Basisfall:** `start == end`. Der Bereich enthält genau einen Wert. Seine Summe ist der Wert selbst.
- **Teilen:** `mitte` trennt den Bereich in `[start, mitte]` und `[mitte + 1, end]`.
- **Lösen:** zwei Selbstaufrufe, einer pro Hälfte.
- **Kombinieren:** `links + rechts`.

Für `a = {6, 1, 8, 3}` entsteht ein **Aufrufbaum**. Jede Zeile ist ein Aufruf. Darunter, eingerückt, stehen die beiden
Aufrufe, die er auslöst:

```
summe(0, 3)                    mitte 1, Ergebnis 7 + 11 = 18
├── summe(0, 1)                mitte 0, Ergebnis 6 + 1 = 7
│   ├── summe(0, 0)            Basisfall, 6
│   └── summe(1, 1)            Basisfall, 1
└── summe(2, 3)                mitte 2, Ergebnis 8 + 3 = 11
    ├── summe(2, 2)            Basisfall, 8
    └── summe(3, 3)            Basisfall, 3
```

Java arbeitet den Baum von oben nach unten und von links nach rechts ab. Der Aufruf `summe(0, 3)` startet
`summe(0, 1)` und wartet, bis dieser **ganz** fertig ist, samt seinen beiden Basisfällen. Erst dann startet er
`summe(2, 3)`. Das Ergebnis ist 18, wie bei der linearen Summe. Es gab 7 Aufrufe.
:::

Wie viele Aufrufe sind es allgemein? Jeder Basisfall erledigt genau einen Wert. Bei n Werten gibt es also n
Basisfälle. Jeder andere Aufruf fügt zwei Teilergebnisse zu einem zusammen. Um n Einzelwerte zu einem einzigen
Ergebnis zusammenzufügen, braucht man n - 1 solche Schritte. Zusammen sind das n + (n - 1) = 2n - 1 Aufrufe. Bei
4 Werten sind das 7, bei 5 Werten 9.

```aufgabe
id: ra-th-gefuehrt
titel: Drei Werte halbieren
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  `main` ruft `summe(a, 0, 2)` für `a = {5, 2, 9}` auf. Die Methode `summe` ist die aus dem Beispiel dieses
  Abschnitts. Wie oft wird `summe` insgesamt aufgerufen? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: Das sind nur die drei Basisfälle. Dazu kommen die Aufrufe, die teilen und kombinieren, nämlich `(0, 2)` und `(0, 1)`.
      - wert: "4"
        meldung: Der Startaufruf `summe(0, 2)` zählt mit. Allgemein sind es bei n Werten 2n - 1 Aufrufe.
gefuehrt:
  - text: Welchen Wert hat `mitte` im Startaufruf `summe(0, 2)`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`(0 + 2) / 2` ist 1.'
  - text: Welche beiden Aufrufe startet `summe(0, 2)`?
    teil:
      typ: auswahl
      optionen: ['`summe(0, 1)` und `summe(2, 2)`', '`summe(0, 0)` und `summe(1, 2)`', '`summe(0, 1)` und `summe(1, 2)`']
      richtig: [0]
    erklaerung: Die linke Hälfte ist `[0, 1]`, die rechte `[2, 2]`. Die linke ist bei ungerader Anzahl länger.
  - text: Wie viele Aufrufe löst `summe(0, 1)` selbst noch aus?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Mit `mitte = 0` startet er `summe(0, 0)` und `summe(1, 1)`. Beide sind Basisfälle.'
  - text: Welches Ergebnis liefert der Startaufruf?
    teil: { typ: zahl, loesung: "5 + 2 + 9" }
    erklaerung: '`summe(0, 1)` liefert 7, `summe(2, 2)` liefert 9, zusammen 16.'
hinweise:
  - Zeichne den Aufrufbaum. Jeder Aufruf mit mehr als einem Wert hat zwei Kinder.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen und alle Knoten zählen.
  ---
  `summe(0, 2)` startet `summe(0, 1)` und `summe(2, 2)`. `summe(0, 1)` startet `summe(0, 0)` und `summe(1, 1)`.
  ---
  Das sind 5 Aufrufe, passend zur Formel `2 · 3 - 1 = 5`. Das Ergebnis ist 16.
```

:::merke[Rezept: Teile und herrsche auf einem Bereich]
1. **Kopf:** Die Methode bekommt den Bereich als `start` und `end`. Startaufruf `(a, 0, a.length - 1)`.
2. **Basisfall:** `start == end`, genau ein Wert. Liefere das Ergebnis für diesen einen Wert.
3. **Teilen:** `int mitte = (start + end) / 2;`, Hälften `[start, mitte]` und `[mitte + 1, end]`.
4. **Lösen:** zwei Selbstaufrufe, je einer pro Hälfte.
5. **Kombinieren:** `+` für Summen und Zähler, `Math.max` oder `Math.min` für Extremwerte, `||` für „irgendeiner“,
   `&&` für „alle“.
6. **Aufrufe:** Bei n Werten ohne vorzeitigen Abbruch genau 2n - 1.
:::

:::achtung[Eine Teilung, die nicht kleiner wird]
Hier wurde die Teilung um eins verschoben:

```java
int mitte = (start + end) / 2;
return summe(a, start, mitte - 1) + summe(a, mitte, end);     // falsch
```

Für den Bereich `[0, 1]` ist `mitte = 0`. Die Hälften sind dann `[0, -1]` und `[0, 1]`. Die rechte Hälfte ist genau
der aktuelle Bereich, sie ist nicht kleiner geworden. Die linke Hälfte ist leer, und dafür gibt es keinen Basisfall.
Wegen `(0 + (-1)) / 2 = 0` ruft sie sich wieder mit `[0, -1]` auf. Beides endet nie, und das Programm bricht mit einem
`StackOverflowError` ab. Weil die Ganzzahldivision abrundet, gehört `mitte` immer zur
**linken** Hälfte: `[start, mitte]` und `[mitte + 1, end]`. Dann ist jede Hälfte echt kleiner als der Bereich.
:::

```aufgabe
id: ra-th-zahl-aufrufe
titel: Aufrufe für sechs Werte
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Methode `summe(int[] a, int start, int end)` aus dem Beispiel dieses Abschnitts wird mit
  `summe(a, 0, 5)` für ein Array mit 6 Werten aufgerufen. Wie oft wird `summe` insgesamt aufgerufen?
teile:
  - typ: zahl
    loesung: "2 * 6 - 1"
    fehler:
      - wert: "6"
        meldung: Das sind nur die Basisfälle, einer pro Wert. Dazu kommen die Aufrufe, die teilen und kombinieren.
      - wert: "7"
        meldung: So viele Aufrufe braucht die lineare Rekursion mit `index + 1`. Beim Halbieren gibt es zusätzlich die teilenden Aufrufe.
      - wert: "12"
        meldung: Zwei Aufrufe pro Wert sind einer zu viel. Um 6 Teilergebnisse zu einem zusammenzufügen, braucht man nur 5 Schritte.
hinweise:
  - Zähle getrennt die Basisfälle und die Aufrufe, die zwei Teilergebnisse kombinieren.
loesung: |
  **Ansatz:** Bei n Werten gibt es n Basisfälle und n - 1 kombinierende Aufrufe.
  ---
  Mit n = 6 sind das `6 + 5 = 11` Aufrufe. Wer den Baum zeichnet, findet `(0, 5)`, `(0, 2)`, `(0, 1)`, `(0, 0)`, `(1, 1)`, `(2, 2)`, `(3, 5)`, `(3, 4)`, `(3, 3)`, `(4, 4)` und `(5, 5)`.
```

Nicht jede Aufgabe braucht alle 2n - 1 Aufrufe. Bei einer Suche kann man aufhören, sobald man den Wert gefunden hat.
Dafür sorgt die **Kurzschlussauswertung** von `||` aus
[3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht): Ist der linke
Teil schon `true`, wertet Java den rechten Teil gar nicht mehr aus.

:::beispiel[Einen Wert durch Halbieren suchen]
```java
public static boolean enthaelt(int[] a, int wert, int start, int end) {
    if (start == end) {
        return a[start] == wert;
    }
    int mitte = (start + end) / 2;
    return enthaelt(a, wert, start, mitte) || enthaelt(a, wert, mitte + 1, end);
}
```

- Der Basisfall prüft den einen Wert und liefert `true` oder `false`.
- Kombiniert wird mit `||`: Der Wert kommt im Bereich vor, wenn er in der linken **oder** in der rechten Hälfte vorkommt.

Ablauf für `a = {4, 9, 2, 7, 5}`, `wert = 7`, Startaufruf `enthaelt(a, 7, 0, 4)`: Die Mitte ist 2. Zuerst wird die
linke Hälfte `[0, 2]` ganz durchsucht. Das sind die Aufrufe `(0, 2)`, `(0, 1)`, `(0, 0)`, `(1, 1)` und `(2, 2)`, alle
ohne Treffer. Dann folgt die rechte Hälfte `(3, 4)`. Sie startet `(3, 3)`, und dort steht die 7. Weil `(3, 3)` schon
`true` liefert, wird `(4, 4)` wegen `||` gar nicht mehr aufgerufen. Insgesamt sind es 8 statt 9 Aufrufe.

Auf Aufgabenblatt 4 vom Wintersemester 2021 durfte diese Suche die beiden Hälften mit `Arrays.copyOfRange` als neue
Arrays bilden. Im Programmiertest ist `copyOfRange` verboten. Mit `start` und `end` brauchst du gar keine Kopie.
:::

:::achtung[Kein Basisfall für einen einzelnen Wert]
Wer nur den leeren Bereich abfängt, bekommt eine Endlosrekursion:

```java
public static int summe(int[] a, int start, int end) {
    if (start > end) {                 // fängt nur den leeren Bereich ab
        return 0;
    }
    int mitte = (start + end) / 2;
    return summe(a, start, mitte) + summe(a, mitte + 1, end);
}
```

Für den Bereich `[2, 2]` ist `mitte = 2`. Der linke Selbstaufruf lautet `summe(a, 2, 2)`, also wieder derselbe Aufruf.
Ein einzelner Wert lässt sich nicht weiter halbieren. Das Programm endet mit einem `StackOverflowError`. Der Basisfall
`start == end` ist bei Teile und herrsche Pflicht.
:::

```aufgabe
id: ra-th-ausgabe-reihenfolge
titel: In welcher Reihenfolge laufen die Aufrufe?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Baum {
          public static void zeige(int start, int end) {
              System.out.println(start + "-" + end);
              if (start == end) {
                  return;
              }
              int mitte = (start + end) / 2;
              zeige(start, mitte);
              zeige(mitte + 1, end);
          }

          public static void main(String[] args) {
              zeige(0, 3);
          }
      }
    loesung: |
      0-3
      0-1
      0-0
      1-1
      2-3
      2-2
      3-3
    fehler:
      - wert: "0-3\n0-1\n2-3\n0-0\n1-1\n2-2\n3-3"
        meldung: Java arbeitet nicht Ebene für Ebene. Der Aufruf `zeige(0, 1)` wird erst ganz fertig, samt seinen beiden Kindern, bevor `zeige(2, 3)` startet.
      - wert: "0-0\n1-1\n0-1\n2-2\n3-3\n2-3\n0-3"
        meldung: Die Ausgabe steht **vor** den Selbstaufrufen. Jeder Aufruf gibt sich also aus, bevor seine Kinder laufen.
hinweise:
  - Zeichne den Aufrufbaum. Jeder Aufruf gibt sich selbst aus und startet danach zuerst die linke, dann die rechte Hälfte.
  - Die rechte Hälfte startet erst, wenn die linke mit allen ihren Aufrufen fertig ist.
loesung: |
  **Ansatz:** Die Ausgabe steht am Anfang jedes Aufrufs. Die Reihenfolge folgt dem Baum: zuerst der Knoten, dann der ganze linke Teilbaum, dann der rechte.
  ---
  `0-3` teilt bei 1. Zuerst `0-1`, das bei 0 teilt und `0-0` und `1-1` ausgibt.
  ---
  Danach `2-3` mit `2-2` und `3-3`. Insgesamt 7 Zeilen, passend zu `2 · 4 - 1 = 7`.
```

```aufgabe
id: ra-th-luecken-enthaelt
titel: Eine Suche mit zwei Selbstaufrufen
niveau: 1
lernziel: 5
kompetenz: anwenden
quelle: nach Aufgabenblatt 4, WS 2021, Aufgabe 4d (containsValue), mit Indizes statt copyOfRange
angabe: |
  Die Methode soll prüfen, ob irgendein Wert im Bereich `[start, end]` **negativ** ist. Sie teilt den Bereich in zwei
  Hälften. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Negativ {
          public static boolean hatNegativ(int[] a, int start, int end) {
              if (start == end) {
                  return ___;
              }
              int mitte = ___;
              return hatNegativ(a, start, mitte) ___ hatNegativ(a, ___, end);
          }
      }
    luecken: [["a[start] < 0", "a[end] < 0", "0 > a[start]"], ["(start + end) / 2"], ["||"], ["mitte + 1", "1 + mitte"]]
    fehler:
      - wert: ["a[start] < 0", "(start + end) / 2", "&&", "mitte + 1"]
        meldung: Mit `&&` müssten **beide** Hälften einen negativen Wert enthalten. Gefragt ist „irgendein Wert“, also `||`.
      - wert: ["a[start] < 0", "(start + end) / 2", "||", "mitte"]
        meldung: Der Wert an `mitte` gehört schon zur linken Hälfte. Die rechte Hälfte beginnt bei `mitte + 1`, sonst wird der Bereich bei zwei Werten nicht kleiner.
hinweise:
  - Im Basisfall ist genau ein Wert übrig. Ist er negativ?
  - Kombiniert wird mit dem Operator für „irgendeiner“.
loesung: |
  **Ansatz:** Teile-und-herrsche-Rezept mit der Kombination `||`.
  ---
  Lücken: `a[start] < 0`, `(start + end) / 2`, `||` und `mitte + 1`.
```

```aufgabe
id: ra-th-trace
titel: Das Maximum im Aufrufbaum
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist

  ```java
  public static int max(int[] a, int start, int end) {
      if (start == end) {
          return a[start];
      }
      int mitte = (start + end) / 2;
      return Math.max(max(a, start, mitte), max(a, mitte + 1, end));
  }
  ```

  `main` ruft `max(new int[]{3, 9, 4}, 0, 2)` auf. Trage die Aufrufe in der Reihenfolge ein, in der sie **beginnen**,
  jeweils mit `start`, `end` und dem Rückgabewert.
teile:
  - typ: trace
    spalten: [start, end, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf, 5. Aufruf]
    vorgabe: 1
    loesung: [[0, 2, 9], [0, 1, 9], [0, 0, 3], [1, 1, 9], [2, 2, 4]]
    fehler:
      - wert: ["0", "2", "9", "0", "1", "9", "2", "2", "4", "0", "0", "3", "1", "1", "9"]
        meldung: Der rechte Teil `(2, 2)` beginnt erst, wenn der linke Teil `(0, 1)` mit seinen beiden Basisfällen fertig ist.
      - wert: ["0", "2", "9", "0", "0", "3", "1", "2", "9", "1", "1", "9", "2", "2", "4"]
        meldung: 'Die Mitte von `[0, 2]` ist 1. Die linke Hälfte ist `[0, 1]`, nicht `[0, 0]`. Bei ungerader Anzahl ist die linke Hälfte länger.'
hinweise:
  - Zeichne den Aufrufbaum. Die Mitte von `[0, 2]` ist 1.
  - Die Rückgabewerte entstehen auf dem Rückweg. Jeder innere Knoten liefert das Größere seiner beiden Kinder.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen und in der Reihenfolge Knoten, linker Teilbaum, rechter Teilbaum ablesen.
  ---
  `(0, 2)` teilt in `(0, 1)` und `(2, 2)`. `(0, 1)` teilt in `(0, 0)` und `(1, 1)`.
  ---
  Basisfälle: `(0, 0)` liefert 3, `(1, 1)` liefert 9, `(2, 2)` liefert 4. Dann `(0, 1)` liefert `max(3, 9) = 9` und `(0, 2)` liefert `max(9, 4) = 9`.
```

```aufgabe
id: ra-th-rf
titel: Aussagen über Teile und herrsche
niveau: 2
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Aussagen zu einer rekursiven Methode), Inhalt neu
angabe: |
  Beurteile jede Aussage über die Methoden `summe(int[] a, int start, int end)` und
  `enthaelt(int[] a, int wert, int start, int end)` aus diesem Abschnitt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`summe` liefert für jedes nicht leere Array dasselbe Ergebnis wie die lineare Summe mit `index + 1`.'
        richtig: true
        erklaerung: Jeder Wert landet in genau einem Basisfall, und alle Teilergebnisse werden addiert. Nur die Reihenfolge der Additionen ist anders.
      - text: '`summe` braucht für 8 Werte genau 8 Aufrufe.'
        richtig: false
        erklaerung: 'Es sind 8 Basisfälle und 7 kombinierende Aufrufe, also 15.'
      - text: '`enthaelt` kann weniger als 2n - 1 Aufrufe brauchen.'
        richtig: true
        erklaerung: 'Ist die linke Hälfte schon `true`, wird die rechte wegen `||` nicht mehr aufgerufen.'
      - text: Ein Aufruf `summe(a, 0, -1)` für ein leeres Array liefert 0.
        richtig: false
        erklaerung: 'Der Basisfall `start == end` greift nicht. Mit `mitte = (0 + (-1)) / 2 = 0` folgt der Aufruf `summe(a, 0, 0)`, und `a[0]` wirft bei einem leeren Array eine Exception. Darum verlangt die Methode `start <= end`.'
    fehler:
      - wert: [r, f, r, r]
        meldung: Setze `start = 0` und `end = -1` wirklich ein. Greift der Basisfall `start == end`?
      - wert: [r, r, r, f]
        meldung: Zähle die Aufrufe für 8 Werte. Neben den 8 Basisfällen gibt es auch die Aufrufe, die zwei Hälften kombinieren.
hinweise:
  - Für die Anzahl der Aufrufe gilt 2n - 1, solange nichts vorzeitig abbricht.
  - 'Für das leere Array: Java rundet `-1 / 2` zur Null hin, das Ergebnis ist 0.'
loesung: |
  **Ansatz:** Jede Aussage mit der Formel 2n - 1, der Kurzschlussauswertung oder einem Randfall prüfen.
  ---
  Aussage 1 ist richtig: Es wird dieselbe Menge von Werten addiert. Aussage 2 ist falsch: `2 · 8 - 1 = 15` Aufrufe.
  ---
  Aussage 3 ist richtig wegen `||`. Aussage 4 ist falsch: Das leere Array führt zum Zugriff `a[0]` und damit zu einer Exception.
```

```aufgabe
id: ra-th-zeilen
titel: Eine fehlerhafte Halbierung
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll zählen, wie viele Werte im Bereich `[start, end]` gleich 0 sind, und dabei den Bereich halbieren.
  Sie enthält zwei Fehler. Einer führt zu einer Endlosrekursion, der andere zu einem falschen Ergebnis. Markiere
  beide Zeilen.
teile:
  - typ: zeilen
    code: |
      public static int nullen(int[] a, int start, int end) {
          if (start == end) {
              if (a[start] == 0) {
                  return 1;
              }
              return 0;
          }
          int mitte = (start + end) / 2;
          int links = nullen(a, start, mitte);
          int rechts = nullen(a, mitte, end);
          return Math.max(links, rechts);
      }
    loesung: [10, 11]
    fehler:
      - wert: [10]
        meldung: Das ist die Endlosrekursion. Wenn du sie behebst, stimmt das Ergebnis noch nicht. Wie werden die beiden Zählergebnisse zusammengesetzt?
      - wert: [8, 11]
        meldung: Die Mitte wird richtig berechnet. Das Problem ist, mit welchem Startindex die rechte Hälfte beginnt.
hinweise:
  - Probiere den Bereich `[0, 1]` aus. Welche beiden Aufrufe entstehen?
  - Zwei Teilzählungen ergeben zusammen die Gesamtzahl. Mit welchem Operator?
loesung: |
  **Ansatz:** Teilung und Kombination einzeln gegen das Rezept prüfen.
  ---
  Zeile 10: Die rechte Hälfte muss bei `mitte + 1` beginnen. Für `[0, 1]` ruft `nullen(a, 0, 1)` sonst sich selbst wieder auf.
  ---
  Zeile 11: Zähler werden addiert, nicht mit `Math.max` verglichen. Richtig ist `return links + rechts;`.
```

```aufgabe
id: ra-th-code-zaehle
titel: Werte unter einer Grenze durch Halbieren zählen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Implementiere `int zaehleUnter(int[] a, int grenze, int start, int end)` **rekursiv** nach dem Prinzip Teile und
  herrsche. Die Methode zählt die Werte im Bereich `[start, end]`, die **echt kleiner** als `grenze` sind. Sie soll
  den Bereich halbieren und sich für jede Hälfte einmal selbst aufrufen. Schleifen sind verboten.

  Vorbedingungen: `a != null`, `0 <= start <= end < a.length`.

  Beispiel: `zaehleUnter(new int[]{8, 2, 5, 11, 3}, 5, 0, 4)` liefert 2, denn nur 2 und 3 sind kleiner als 5.
teile:
  - typ: code
    vorlage: |
      public class Unter {
          public static int zaehleUnter(int[] a, int grenze, int start, int end) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Unter {
          public static int zaehleUnter(int[] a, int grenze, int start, int end) {
              if (start == end) {
                  if (a[start] < grenze) {
                      return 1;
                  }
                  return 0;
              }
              int mitte = (start + end) / 2;
              return zaehleUnter(a, grenze, start, mitte) + zaehleUnter(a, grenze, mitte + 1, end);
          }
      }
    tests:
      - { aufruf: "zaehleUnter(new int[]{8, 2, 5, 11, 3}, 5, 0, 4)", erwartet: "2" }
      - { aufruf: "zaehleUnter(new int[]{8, 2, 5, 11, 3}, 100, 1, 3)", erwartet: "3", beschreibung: "Teilbereich" }
      - { aufruf: "zaehleUnter(new int[]{7}, 7, 0, 0)", erwartet: "0", beschreibung: "ein Wert gleich der Grenze" }
      - { aufruf: "zaehleUnter(new int[]{-1, -2, -3, -4}, 0, 0, 3)", erwartet: "4", beschreibung: "gerade Anzahl" }
      - { aufruf: "zaehleUnter(new int[]{1, 9, 1, 9, 1, 9, 1}, 2, 0, 6)", erwartet: "4", versteckt: true }
    regeln: { keineSchleifenIn: [zaehleUnter], rekursiv: [zaehleUnter], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Endet dein Aufruf nicht? Der Wert an `mitte` gehört nur zur linken Hälfte. Beginnt die rechte Hälfte schon bei `mitte`, ruft sich zum Beispiel der Bereich `[1, 2]` mit `[1, 2]` wieder selbst auf. Die rechte Hälfte beginnt bei `mitte + 1`." }
      - { wert: 3, meldung: "Gezählt wird nur, was **echt kleiner** als die Grenze ist. Ein Wert gleich der Grenze zählt nicht." }
      - { wert: "keineSchleifenIn", meldung: "Statt einer Schleife teilst du den Bereich mit `mitte` und rufst dich für beide Hälften auf." }
hinweise:
  - Basisfall ist ein einzelner Wert mit `start == end`. Er liefert 1 oder 0.
  - Die Teilergebnisse der beiden Hälften werden addiert.
loesung: |
  **Ansatz:** Teile-und-herrsche-Rezept. Der Basisfall zählt einen einzelnen Wert, die Kombination ist `+`.
  ---
  ```java
  if (start == end) {
      if (a[start] < grenze) {
          return 1;
      }
      return 0;
  }
  int mitte = (start + end) / 2;
  return zaehleUnter(a, grenze, start, mitte) + zaehleUnter(a, grenze, mitte + 1, end);
  ```
  ---
  Probe mit dem Beispiel: Die Mitte ist 2. Links `[8, 2, 5]` liefert 1, rechts `[11, 3]` liefert 1. Zusammen 2.
```

```aufgabe
id: ra-th-code-sortiert
titel: Ist der Bereich aufsteigend sortiert?
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Implementiere `boolean istSortiert(int[] a, int start, int end)` **rekursiv** nach dem Prinzip Teile und herrsche,
  mit zwei Selbstaufrufen und ohne Schleifen. Die Methode liefert `true`, wenn im Bereich `[start, end]` jeder Wert
  kleiner oder gleich seinem rechten Nachbarn ist.

  Überlege genau: Wenn beide Hälften sortiert sind, ist dann auch der ganze Bereich sortiert? Welches Paar wird von
  keiner Hälfte geprüft?

  Vorbedingungen: `a != null`, `0 <= start <= end < a.length`.

  Beispiel: Für `{1, 4, 6, 2, 7, 9}` sind die Hälften `[1, 4, 6]` und `[2, 7, 9]` jeweils sortiert. Der ganze Bereich
  `[0, 5]` ist aber nicht sortiert, denn 6 ist größer als 2.
teile:
  - typ: code
    vorlage: |
      public class Sortiert {
          public static boolean istSortiert(int[] a, int start, int end) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Sortiert {
          public static boolean istSortiert(int[] a, int start, int end) {
              if (start == end) {
                  return true;
              }
              int mitte = (start + end) / 2;
              return a[mitte] <= a[mitte + 1]
                      && istSortiert(a, start, mitte)
                      && istSortiert(a, mitte + 1, end);
          }
      }
    tests:
      - { aufruf: "istSortiert(new int[]{1, 4, 6, 2, 7, 9}, 0, 5)", erwartet: "false", beschreibung: "Hälften sortiert, Nahtstelle nicht" }
      - { aufruf: "istSortiert(new int[]{1, 4, 6, 2, 7, 9}, 3, 5)", erwartet: "true", beschreibung: "rechte Hälfte allein" }
      - { aufruf: "istSortiert(new int[]{2, 2, 3, 3}, 0, 3)", erwartet: "true", beschreibung: "gleiche Nachbarn erlaubt" }
      - { aufruf: "istSortiert(new int[]{5}, 0, 0)", erwartet: "true", beschreibung: "ein Wert" }
      - { aufruf: "istSortiert(new int[]{1, 3, 2, 4, 5}, 0, 4)", erwartet: "false", beschreibung: "Fehler in der linken Hälfte" }
      - { aufruf: "istSortiert(new int[]{0, 1, 2, 3, 9, 8, 10}, 0, 6)", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [istSortiert], rekursiv: [istSortiert], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Beide Hälften sind sortiert, und trotzdem ist der Bereich es nicht. Das Paar an der Nahtstelle, `a[mitte]` und `a[mitte + 1]`, gehört zu keiner Hälfte. Prüfe es zusätzlich." }
      - { wert: 3, meldung: "Gleiche Nachbarn sind erlaubt. Verwende `<=` beim Vergleich an der Nahtstelle." }
      - { wert: 5, meldung: "Werden beide Hälften wirklich rekursiv geprüft? Der Fehler 3 > 2 liegt hier in der linken Hälfte." }
hinweise:
  - Ein einzelner Wert ist immer sortiert. Das ist der Basisfall.
  - Kombiniere drei Bedingungen mit `&&`, die linke Hälfte, die rechte Hälfte und das Paar an der Nahtstelle `a[mitte] <= a[mitte + 1]`.
loesung: |
  **Ansatz:** Teile und herrsche mit der Kombination `&&`. Neu ist, dass die Kombination selbst noch etwas prüfen muss: das Paar, das genau an der Teilungsstelle liegt.
  ---
  ```java
  if (start == end) {
      return true;
  }
  int mitte = (start + end) / 2;
  return a[mitte] <= a[mitte + 1]
          && istSortiert(a, start, mitte)
          && istSortiert(a, mitte + 1, end);
  ```
  ---
  Warum die Nahtstelle? Jede Hälfte prüft nur Paare, deren beide Werte in ihr liegen. Das Paar aus `a[mitte]` und `a[mitte + 1]` hat einen Wert links und einen rechts. Ohne die Extra-Prüfung bliebe es ungeprüft.
  ---
  Probe mit `{1, 4, 6, 2, 7, 9}`: Die Mitte ist 2, und `6 <= 2` ist falsch. Wegen `&&` liefert die Methode sofort `false`, ohne die Hälften zu prüfen.
```

```reflexion
frage: Teile und herrsche braucht für die Summe 2n - 1 Aufrufe, die lineare Rekursion nur n + 1. Warum lernt man das Halbieren trotzdem?
antwort: |
  Für die Summe ist das Halbieren tatsächlich kein Gewinn, denn jeder Wert muss ohnehin einmal angesehen werden. Der
  Vorteil zeigt sich bei Aufgaben, bei denen man eine Hälfte gar nicht ansehen muss oder bei denen das Kombinieren
  zweier Hälften leichter ist als das Bearbeiten Wert für Wert. Bei der binären Suche in einem sortierten Array
  genügt eine einzige Hälfte (siehe [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren)).
  Bei Mergesort ist das Zusammenfügen zweier sortierter Hälften schnell. Dieses Verfahren wird in
  [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren) nur kurz
  erwähnt. Außerdem ist die Rekursionstiefe beim Halbieren viel kleiner: Bei 1000 Werten sind höchstens
  etwa 11 Aufrufe gleichzeitig offen, bei der linearen Rekursion 1001.
```

## Gemischte Wiederholung

Diese Aufgaben mischen den Stoff dieses Kapitels mit früheren Kapiteln. Bei einigen geht es nicht ums Rechnen, sondern
um die Frage: **Welches Muster passt zu dieser Aufgabe?** Genau diese Entscheidung musst du im Programmiertest als
Erstes treffen. Die Aufgaben stehen bewusst nicht nach Thema geordnet.

```aufgabe
id: ra-mix-string
titel: Einen String rekursiv umdrehen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Wiederholung aus [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings). Was gibt das Programm
  aus? Der senkrechte Strich zeigt, wo das Ergebnis endet.
teile:
  - typ: ausgabe
    code: |
      public class Umdrehen {
          public static String r(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              return r(s.substring(1)) + s.charAt(0);
          }

          public static void main(String[] args) {
              System.out.println(r("Array") + "|");
          }
      }
    loesung: |
      yarrA|
    fehler:
      - wert: "Array|"
        meldung: Das erste Zeichen wird **hinter** das Ergebnis des Rests gehängt. Dadurch dreht sich die Reihenfolge um.
      - wert: "yarra|"
        meldung: Groß- und Kleinbuchstaben bleiben, wie sie sind. Das große `A` landet am Ende.
hinweise:
  - Das eigene Zeichen steht hinter dem Ergebnis des Selbstaufrufs. Was bedeutet das für die Reihenfolge?
loesung: |
  **Ansatz:** String-Muster mit dem eigenen Zeichen am Ende. Das dreht die Reihenfolge um.
  ---
  Von innen nach außen: `""`, `"y"`, `"ya"`, `"yar"`, `"yarr"`, `"yarrA"`. Ausgabe `yarrA|`.
```

```aufgabe
id: ra-mix-schleife
titel: Welcher Aufruf ersetzt die Schleife?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Wiederholung aus [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings).
  Diese Schleife addiert Werte eines Arrays `a`:

  ```java
  int s = 0;
  for (int i = k; i < a.length; i++) {
      s = s + a[i];
  }
  ```

  Welcher Aufruf der Methode `summe(int[] a, int index)` aus
  [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen)
  liefert denselben Wert wie `s`?
teile:
  - typ: auswahl
    optionen: ['`summe(a, k)`', '`summe(a, 0)`', '`summe(a, k + 1)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Schleife beginnt nicht bei 0, sondern bei `k`. Der Startwert der Laufvariable wird zum Startindex des Aufrufs.
      - wert: 2
        meldung: Die Schleife addiert auch `a[k]`, denn `i` startet bei `k`. Mit `k + 1` fehlte dieser Wert.
hinweise:
  - Der Startwert der Laufvariable `i` entspricht dem Index im Startaufruf.
loesung: |
  **Ansatz:** Die Laufvariable `i` wird zum Parameter `index`. Ihr Startwert `k` wird zum Startindex.
  ---
  Beide addieren `a[k]` bis `a[a.length - 1]`. Also liefert `summe(a, k)` denselben Wert.
```

```aufgabe
id: ra-mix-ziffern
titel: Ziffern mit Trennstrichen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Wiederholung aus [10.3 Rekursion mit ganzen Zahlen](/lernen/ep1/rekursion/rekursion-mit-ganzen-zahlen). Was gibt das
  Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Striche {
          public static void z(int n) {
              if (n < 10) {
                  System.out.print(n);
                  return;
              }
              z(n / 10);
              System.out.print("-" + n % 10);
          }

          public static void main(String[] args) {
              z(4071);
              System.out.println();
          }
      }
    loesung: |
      4-0-7-1
    fehler:
      - wert: "1-7-0-4"
        meldung: Die Ausgabe der letzten Ziffer steht **hinter** dem Selbstaufruf. Zuerst wird also die vorderste Ziffer ausgegeben.
      - wert: "-4-0-7-1"
        meldung: Der Basisfall gibt seine Ziffer ohne Strich aus. Nur die Aufrufe auf dem Rückweg setzen einen Strich davor.
hinweise:
  - Welcher Aufruf landet im Basisfall, und was gibt er aus?
  - Die übrigen Aufrufe geben auf dem Rückweg einen Strich und ihre letzte Ziffer aus.
loesung: |
  **Ansatz:** Ziffern-Rekursion mit der Ausgabe auf dem Rückweg. Die Aufrufe lauten `z(4071)`, `z(407)`, `z(40)` und `z(4)`.
  ---
  Der Basisfall `z(4)` gibt `4` aus. Auf dem Rückweg folgen `-0` von `z(40)`, `-7` von `z(407)` und `-1` von `z(4071)`.
  ---
  Ausgabe `4-0-7-1`. Die Ziffern erscheinen in der Reihenfolge, in der man die Zahl liest.
```

```aufgabe
id: ra-mix-methoden
titel: Parameter neu zuweisen oder Inhalt ändern
niveau: 2
lernziel: 3
kompetenz: begruenden
quelle: nach Aufgabenblatt 4, WS 2023, Aufgabe 1 (Parameter neu zuweisen), umformuliert
angabe: |
  Wiederholung aus [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben) und
  [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert). Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.*;

      public class Neu {
          public static void ersetze(int[] x) {
              x = new int[]{0, 0};
          }

          public static void nulle(int[] x) {
              x[0] = 0;
          }

          public static void main(String[] args) {
              int[] f = {5, 6};
              ersetze(f);
              System.out.println(Arrays.toString(f));
              nulle(f);
              System.out.println(Arrays.toString(f));
          }
      }
    loesung: |
      [5, 6]
      [0, 6]
    fehler:
      - wert: "[0, 0]\n[0, 0]"
        meldung: '`x = new int[]{0, 0};` lässt nur den Parameter `x` auf ein neues Array zeigen. `f` in `main` zeigt weiter auf das alte Array.'
      - wert: "[5, 6]\n[5, 6]"
        meldung: '`x[0] = 0` ändert den **Inhalt** des Arrays, auf das `x` und `f` gemeinsam zeigen. Diese Änderung sieht `main`.'
hinweise:
  - Unterscheide „die Variable zeigt auf ein anderes Array“ von „der Inhalt des gemeinsamen Arrays ändert sich“.
  - Der Parameter ist eine Kopie des Verweises, nicht eine Kopie des Arrays.
loesung: |
  **Ansatz:** Bei jedem Aufruf fragen: Ändert die Methode den Verweis `x` oder den Inhalt des Arrays?
  ---
  `ersetze` ändert nur den eigenen Parameter `x`. Das Array von `f` bleibt `[5, 6]`.
  ---
  `nulle` schreibt in das gemeinsame Array. Danach ist `f` gleich `[0, 6]`.
```

```aufgabe
id: ra-mix-verfahren-umdrehen
titel: Welches Muster passt? Paarweise Summen
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  **Welches Verfahren passt?** Eine Methode soll prüfen, ob in einem Array **jedes** äußere Paar die Summe 10 hat.
  Gemeint sind `a[0] + a[a.length - 1]`, dann `a[1] + a[a.length - 2]` und so weiter. Für `{2, 5, 5, 8}` gilt das. Welches
  Muster wählst du? Du musst nichts programmieren.
teile:
  - typ: auswahl
    optionen:
      - zwei Indizes, die von beiden Enden zur Mitte laufen, mit Basisfall `links >= rechts`
      - ein Index mit `index + 1` und Basisfall `index == a.length`
      - ein neues Array im Basisfall anlegen und auf dem Rückweg befüllen
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mit einem Index allein musst du den Partner jedes Werts jedes Mal neu ausrechnen, und die Paare würden doppelt geprüft. Die Aufgabe spricht ausdrücklich von äußeren Paaren.
      - wert: 2
        meldung: Gefragt ist ein Wahrheitswert, kein neues Array. Ein Ergebnis-Array wäre überflüssig.
hinweise:
  - Die Aufgabe vergleicht Werte von außen nach innen. Welches Muster arbeitet genau so?
  - Wie bei der Spiegel-Prüfung entscheidet ein falsches Paar sofort mit `false`.
loesung: |
  **Ansatz:** Das Stichwort „äußere Paare“ zeigt auf das Muster mit zwei Indizes.
  ---
  Jeder Aufruf prüft `a[links] + a[rechts] == 10` und ruft sich mit `links + 1`, `rechts - 1` auf. Ein Bereich mit höchstens einem Wert liefert `true`.
  ---
  Bei ungerader Länge bleibt der mittlere Wert ohne Partner. Ob er dann zählt, müsste die Angabe festlegen.
```

```aufgabe
id: ra-mix-verfahren-neu
titel: Welches Muster passt? Vorzeichen als neues Array
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  **Welches Verfahren passt?** Gegeben ist der Kopf `int[] vorzeichen(int[] a, int index)`. Die Methode soll ein neues
  Array liefern, das für jeden Wert -1, 0 oder 1 enthält, je nachdem, ob er negativ, null oder positiv ist. Das
  Original bleibt unverändert, und `clone` ist verboten. Wo legst du das neue Array an?
teile:
  - typ: auswahl
    optionen:
      - im Basisfall `index == a.length` mit `new int[a.length]`, dann auf dem Rückweg jeden Platz befüllen
      - am Anfang jedes Aufrufs mit `new int[a.length]`
      - gar nicht, die Methode schreibt die Werte direkt in `a` und gibt `a` zurück
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dann hat jeder Aufruf ein eigenes Array, und jedes enthält nur einen einzigen beschriebenen Platz. Das Ergebnis besteht fast nur aus Nullen.
      - wert: 2
        meldung: Das Original muss unverändert bleiben. Wer in `a` schreibt, zerstört die ursprünglichen Werte.
hinweise:
  - Der Basisfall wird bei jedem Startaufruf genau einmal erreicht.
  - Das Ergebnis des Selbstaufrufs ist dasselbe Array, das alle Aufrufe gemeinsam befüllen.
loesung: |
  **Ansatz:** Der Kopf hat keinen Parameter für das Ergebnis. Das Array muss also aus einem Rückgabewert kommen.
  ---
  Im Basisfall entsteht genau ein neues Array. Jeder Aufruf holt es vom Selbstaufruf, schreibt `-1`, `0` oder `1` an die Stelle `index` und gibt es zurück.
  ---
  Ergebnis: ein neues Array, und `a` wird nur gelesen. So arbeitet auch `differenzen` in [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern).
```

```aufgabe
id: ra-mix-verfahren-rf
titel: Welches Muster passt? Vier Aufgaben
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  **Welches Verfahren passt?** Zu jeder Aufgabe steht ein Vorschlag für den Basisfall einer Rekursion mit
  `index + 1` und Startindex 0. Beurteile, ob der Vorschlag passt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '„Wie oft kommt 0 vor?“: Basisfall `index == a.length`, liefert 0.'
        richtig: true
        erklaerung: Zähl-Muster. Ein leerer Rest enthält keine Null.
      - text: '„Ist jeder Wert größer als sein linker Nachbar?“: Basisfall `index >= a.length - 1`, liefert `true`.'
        richtig: true
        erklaerung: Es werden Paare verglichen. Ohne vollständiges Paar ist nichts verletzt, also `true`.
      - text: '„Was ist der kleinste Wert?“: Basisfall `index == a.length`, liefert 0.'
        richtig: false
        erklaerung: 0 ist ein erfundener Wert und verfälscht das Minimum, wenn alle Werte positiv sind. Der Basisfall ist der letzte Index mit `return a[index];`.
      - text: '„Gibt es irgendeinen negativen Wert?“: Basisfall `index == a.length`, liefert `true`.'
        richtig: false
        erklaerung: Ein leerer Rest enthält keinen negativen Wert. Für „irgendein“ liefert der Basisfall `false`.
    fehler:
      - wert: [r, r, r, r]
        meldung: Probiere den Vorschlag für das Minimum mit `{4, 9}` aus. Was liefert der Vergleich mit dem Startwert 0?
      - wert: [r, f, f, f]
        meldung: Bei Paaren fehlt im letzten Aufruf der rechte Partner. Darum greift der Basisfall schon bei `index >= a.length - 1`.
hinweise:
  - Frage dich bei jedem Basisfall, ob sein Wert die richtige Antwort für den leeren Rest ist.
  - Gibt es für den leeren Rest überhaupt eine sinnvolle Antwort?
loesung: |
  **Ansatz:** Für jede Aufgabe das passende Muster aus [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen) und [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden) bestimmen.
  ---
  Zählen und „alle“ auf Paaren passen. Das Minimum braucht den letzten Index als Basisfall.
  ---
  „Irgendein“ braucht `false` im Basisfall. Die Aussagen 1 und 2 sind richtig, 3 und 4 falsch.
```

```aufgabe
id: ra-mix-exception
titel: Was meldet Java?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Wiederholung aus [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
  Was passiert beim Aufruf `produkt(new int[]{2, 3}, 0)`?

  ```java
  public static int produkt(int[] a, int index) {
      if (index == a.length) {
          return 1;
      }
      return a[index] * produkt(a, index++);
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - Das Programm bricht mit einem `StackOverflowError` ab.
      - Das Programm bricht mit einer `ArrayIndexOutOfBoundsException` ab.
      - Die Methode liefert 6.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Index wird gar nicht zu groß. `index++` übergibt den alten Wert 0, also bleibt jeder Selbstaufruf bei Index 0.
      - wert: 2
        meldung: Für 6 müsste der Selbstaufruf Index 1 bekommen. `index++` liefert aber den Wert **vor** der Erhöhung.
hinweise:
  - Welchen Wert hat der Ausdruck `index++`, wenn `index` gerade 0 ist?
  - Was passiert, wenn jeder Aufruf denselben Aufruf noch einmal startet?
loesung: |
  **Ansatz:** Den Wert des Ausdrucks `index++` bestimmen.
  ---
  `index++` liefert 0 und erhöht erst danach die lokale Variable. Der Selbstaufruf lautet also wieder `produkt(a, 0)`.
  ---
  Die Aufrufe hören nie auf, der Aufrufstapel läuft voll. Java meldet einen `StackOverflowError`. Richtig wäre `index + 1`.
```

```aufgabe
id: ra-mix-code-verbinde
titel: Werte mit Trennzeichen verbinden
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: Trennzeichenlogik aus Aufgabenblatt 1 (WS 2023) mit Rekursion auf Arrays verbunden
angabe: |
  Implementiere `String verbinde(int[] a, int index)` **rekursiv** und ohne Schleifen. Die Methode liefert alle Werte
  ab `index` als Text, getrennt durch einen Bindestrich `-`. Vor dem ersten und nach dem letzten Wert steht **kein**
  Bindestrich. Ein leerer Rest liefert den leeren String. `Arrays.toString` darfst du nicht verwenden. Das ist das
  Zaunpfahlproblem aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).

  Vorbedingungen: `a != null`, `0 <= index <= a.length`.

  Beispiel: `verbinde(new int[]{3, 8, 5}, 0)` liefert `"3-8-5"`.
teile:
  - typ: code
    vorlage: |
      public class Verbinden {
          public static String verbinde(int[] a, int index) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Verbinden {
          public static String verbinde(int[] a, int index) {
              if (index == a.length) {
                  return "";
              }
              if (index == a.length - 1) {
                  return "" + a[index];
              }
              return a[index] + "-" + verbinde(a, index + 1);
          }
      }
    tests:
      - { aufruf: "verbinde(new int[]{3, 8, 5}, 0)", erwartet: "\"3-8-5\"" }
      - { aufruf: "verbinde(new int[]{42}, 0)", erwartet: "\"42\"", beschreibung: "ein Wert ohne Strich" }
      - { aufruf: "verbinde(new int[]{}, 0)", erwartet: "\"\"", beschreibung: "leeres Array" }
      - { aufruf: "verbinde(new int[]{1, 2, 3, 4}, 2)", erwartet: "\"3-4\"", beschreibung: "Start bei Index 2" }
      - { aufruf: "verbinde(new int[]{-1, 0}, 0)", erwartet: "\"-1-0\"", versteckt: true }
    regeln: { keineSchleifenIn: [verbinde], rekursiv: [verbinde], keineHilfsmethoden: true, keineFelder: true, verboteneApi: ["Arrays.toString"] }
    fehler:
      - { wert: 1, meldung: "Steht am Ende ein Bindestrich zu viel? Der letzte Wert braucht einen eigenen Fall ohne Strich: `index == a.length - 1`." }
      - { wert: 2, meldung: "Ein einzelner Wert ist zugleich der erste und der letzte. Er bekommt keinen Bindestrich." }
      - { wert: 3, meldung: "Ein leeres Array hat keinen letzten Wert. Fehlt der Basisfall `index == a.length`, liest deine Methode `a[0]` und bricht mit einer `ArrayIndexOutOfBoundsException` ab." }
hinweise:
  - Es gibt zwei Basisfälle, den leeren Rest und den letzten Wert ohne Strich dahinter.
  - Im rekursiven Fall steht der eigene Wert vorne, dann ein Strich, dann das Ergebnis des Rests. Beginnt der Ausdruck mit einer Zahl, sorgt das `"-"` dafür, dass verkettet statt addiert wird.
loesung: |
  **Ansatz:** Zaunpfahl-Logik als Rekursion. Jeder Wert außer dem letzten bringt seinen Strich mit, der letzte Wert steht allein.
  ---
  ```java
  if (index == a.length) {
      return "";
  }
  if (index == a.length - 1) {
      return "" + a[index];
  }
  return a[index] + "-" + verbinde(a, index + 1);
  ```
  ---
  `"" + a[index]` macht aus der Zahl einen String. Ohne `""` wäre der Rückgabewert ein `int`, und das kompiliert bei `String` als Rückgabetyp nicht.
  ---
  Probe: `verbinde({3, 8, 5}, 0)` ist `3 + "-" + "8-5"`, also `"3-8-5"`.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im Format des
TUWEL-Quiz gestellt: Auswahlfragen mit genau einer richtigen Antwort und Aussagen zum Beurteilen als richtig oder falsch. Danach folgt eine Aufgabe im Stil der dritten Aufgabe des
Programmiertests. Es schließen sich zwei Aufgaben im Stil der Aufgabenblätter an, dann eine Übung zu den Testfällen in
`main` und Fragen für das Feedbackgespräch. Plane
die angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen aufdeckst. Das Format 2026W ist nicht
veröffentlicht. Die Aufgaben folgen den Quiz, Blättern und Programmiertests der Jahre 2020 bis 2023.

```aufgabe
id: ra-pruef-quiz-aufrufe
titel: Drei Quizfragen zu einer Array-Rekursion
niveau: 3
punkte: 3
lernziel: 1
kompetenz: anwenden
quelle: Fragearten nach den Zusatzfragen der Aufgabenblätter („Wie oft wird die Methode aufgerufen?“), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) Gegeben ist

  ```java
  public static int m(int[] a, int i) {
      if (i >= a.length) {
          System.out.println("B");
          return 0;
      }
      System.out.println(a[i]);
      return m(a, i + 2) + a[i];
  }
  ```

  `main` ruft `System.out.println(m(new int[]{4, 1, 6, 3, 2}, 1));` auf.

  **a)** Wie oft wird `m` insgesamt aufgerufen?

  **b)** Welche Zeile gibt `m` als **erste** aus?

  **c)** Welchen Wert druckt `main`?
teile:
  - typ: auswahl
    label: a)
    optionen: ['2', '3', '5']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Aufruf mit `i = 5` landet im Basisfall, zählt aber mit. Die Aufrufe haben `i = 1`, `3` und `5`.
      - wert: 2
        meldung: Der Index springt um 2 und beginnt bei 1. Die Werte an den Indizes 0, 2 und 4 werden nie besucht.
  - typ: auswahl
    label: b)
    optionen: ['`1`', '`4`', '`B`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Startaufruf hat `i = 1`. Er gibt `a[1]` aus, und das ist 1, nicht der erste Wert des Arrays.
      - wert: 2
        meldung: '`B` kommt vom Basisfall, und der ist der letzte Aufruf. Die Ausgaben der anderen Aufrufe stehen vor ihrem Selbstaufruf und kommen zuerst.'
  - typ: auswahl
    label: c)
    optionen: ['4', '16', '3']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die Summe aller Werte. Addiert werden nur die besuchten Werte an den Indizes 1 und 3.
      - wert: 2
        meldung: Auch der Startaufruf addiert seinen Wert `a[1] = 1` auf dem Rückweg.
hinweise:
  - Schreib die Werte von `i` auf, bis `i >= 5` gilt.
  - Die Ausgaben kommen auf dem Hinweg, die Additionen auf dem Rückweg.
loesung: |
  **Ansatz:** Indexfolge bestimmen, dann Ausgaben auf dem Hinweg und den Rückgabewert auf dem Rückweg.
  ---
  a) `i` nimmt die Werte 1, 3 und 5 an. Bei 5 gilt `5 >= 5`. Das sind 3 Aufrufe.
  ---
  b) Ausgaben: `1`, `3`, dann `B`. Die erste ist `1`.
  ---
  c) Der Basisfall liefert 0. Rückweg: `0 + 3 = 3`, dann `3 + 1 = 4`. `main` druckt 4.
```

```aufgabe
id: ra-pruef-quiz-rf
titel: Vier Implementierungen beurteilen
niveau: 3
punkte: 2
lernziel: 6
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (rekursive Implementierungen, Terminierung und Ergebnis), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Vier Varianten von `boolean enthaelt(int[] a, int w, int i)` sollen prüfen, ob `w` im Rest
  ab `i` vorkommt. Gestartet wird mit `i = 0`.

  ```java
  // Variante A
  if (i == a.length) return false;
  if (a[i] == w) return true;
  return enthaelt(a, w, i + 1);

  // Variante B
  if (a[i] == w) return true;
  if (i == a.length) return false;
  return enthaelt(a, w, i + 1);

  // Variante C
  if (i == a.length) return false;
  return a[i] == w || enthaelt(a, w, i++);

  // Variante D
  if (i >= a.length) return false;
  return enthaelt(a, w, i + 1) || a[i] == w;
  ```

  Beurteile jede Aussage. Bei vier richtig beurteilten Aussagen gibt es 2 Punkte, Teilpunkte anteilig.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Variante A liefert für jedes Array das richtige Ergebnis.
        richtig: true
        erklaerung: Leerer Rest liefert `false`, ein Treffer `true`, sonst geht es mit `i + 1` weiter. Das ist das „Irgendein“-Muster.
      - text: 'Variante B endet für `{5, 9}` und `w = 7` ohne Exception.'
        richtig: false
        erklaerung: 'Bei `i = 2` wird zuerst `a[2]` gelesen, bevor der Basisfall geprüft wird. Das wirft eine `ArrayIndexOutOfBoundsException`.'
      - text: 'Variante C liefert für `{5, 9}` und `w = 9` den Wert `true`.'
        richtig: false
        erklaerung: '`i++` übergibt den alten Wert 0. Jeder Selbstaufruf prüft wieder `a[0] = 5`, und die Rekursion endet mit einem `StackOverflowError`.'
      - text: 'Variante D liefert immer dasselbe wie A, macht aber für `{5, 9}` und `w = 5` mehr Aufrufe als A.'
        richtig: true
        erklaerung: D ruft sich zuerst bis zum Ende auf und prüft erst auf dem Rückweg. Das sind 3 Aufrufe. A findet die 5 sofort im ersten Aufruf.
    fehler:
      - wert: [r, r, f, r]
        meldung: Achte bei Variante B auf die Reihenfolge der beiden `if`. Was passiert bei `i == a.length` in der ersten Zeile?
      - wert: [r, f, r, r]
        meldung: Welchen Wert übergibt `i++` an den Selbstaufruf? Den alten oder den neuen?
hinweise:
  - Prüfe bei jeder Variante den Fall „Wert kommt nicht vor“, denn dann muss der leere Rest erreicht werden.
  - Achte auf die Reihenfolge von Basisfall und Zugriff und auf `i++`.
loesung: |
  **Ansatz:** Jede Variante mit einem kleinen Array durchspielen, mit und ohne Treffer.
  ---
  A ist richtig. B greift bei `i == a.length` auf `a[i]` zu, bevor der Basisfall prüft, also falsch.
  ---
  C bleibt wegen `i++` bei Index 0 hängen und endet mit `StackOverflowError`, also falsch. D ist richtig, aber ohne vorzeitigen Abbruch.
```

```aufgabe
id: ra-pruef-m3-paritaet
titel: Wechseln gerade und ungerade Werte ab?
niveau: 3
punkte: 9
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 10.02.2022, Gruppe 10A (isAlternating), mit Parität statt Vorzeichen umformuliert
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `boolean wechseltParitaet(int[] seq, int index)` **rekursiv**. Die Methode
  liefert `true`, wenn in `seq` ab `index` gerade und ungerade Zahlen ständig abwechseln, es also keine zwei direkt
  aufeinanderfolgenden Zahlen gibt, die beide gerade oder beide ungerade sind. Sonst liefert sie `false`. Ob eine Zahl
  gerade oder ungerade ist, nennt man ihre **Parität**.

  Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine Hilfsmethoden, keine Klassenvariablen,
  Methodenkopf unverändert, von der Java-API nur `Math`.

  Vorbedingungen: `seq != null`, `index` ist ein gültiger Index von `seq`. Die Werte dürfen **negativ** sein.

  Beispiele mit `seq = {3, 8, -5, 2, 7, 4}`: `wechseltParitaet(seq, 0)` liefert `true`. Für `{6, 1, 4, 4, 9}` liefert
  der Aufruf mit Index 0 den Wert `false` und mit Index 3 den Wert `true`.

  Bewertung wie im Programmiertest: Ansatz 1 Punkt, Basisfall vorhanden und korrekt je 1 Punkt, Fortschritt
  vorhanden und korrekt je 1 Punkt, richtiger Rückgabewert 4 Punkte.
teile:
  - typ: code
    vorlage: |
      public class Paritaet {
          public static boolean wechseltParitaet(int[] seq, int index) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Paritaet {
          public static boolean wechseltParitaet(int[] seq, int index) {
              if (index >= seq.length - 1) {
                  return true;
              }
              boolean hierGerade = seq[index] % 2 == 0;
              boolean danachGerade = seq[index + 1] % 2 == 0;
              if (hierGerade == danachGerade) {
                  return false;
              }
              return wechseltParitaet(seq, index + 1);
          }
      }
    tests:
      - { aufruf: "wechseltParitaet(new int[]{3, 8, -5, 2, 7, 4}, 0)", erwartet: "true" }
      - { aufruf: "wechseltParitaet(new int[]{6, 1, 4, 4, 9}, 0)", erwartet: "false" }
      - { aufruf: "wechseltParitaet(new int[]{6, 1, 4, 4, 9}, 3)", erwartet: "true", beschreibung: "Start hinter dem Paar 4, 4" }
      - { aufruf: "wechseltParitaet(new int[]{-3, 5}, 0)", erwartet: "false", beschreibung: "zwei ungerade Zahlen, eine negativ" }
      - { aufruf: "wechseltParitaet(new int[]{7}, 0)", erwartet: "true", beschreibung: "ein Wert" }
      - { aufruf: "wechseltParitaet(new int[]{-2, -7, 0, 11}, 0)", erwartet: "true", versteckt: true }
      - { aufruf: "wechseltParitaet(new int[]{1, 2, 3, 5}, 1)", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [wechseltParitaet], rekursiv: [wechseltParitaet], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 4, meldung: "In Java ist `-3 % 2` gleich -1, nicht 1. Ein Vergleich wie `seq[index] % 2 != seq[index + 1] % 2` hält -3 und 5 deshalb für verschieden. Vergleiche stattdessen, ob beide Werte gerade sind: `seq[i] % 2 == 0`." }
      - { wert: 5, meldung: "Bei nur einem Wert gibt es kein Paar und damit keinen Verstoß. Der Basisfall muss bei `index >= seq.length - 1` greifen, bevor `seq[index + 1]` gelesen wird." }
      - { wert: 2, meldung: "Ein einziges Paar mit gleicher Parität macht das Ergebnis `false`. Liefert deine Methode dann sofort `false`?" }
      - { wert: "keineSchleifenIn", meldung: "Eine Schleife kostet im Programmiertest die ganze Aufgabe. Vergleiche nur das Paar bei `index` und rufe dich mit `index + 1` auf." }
hinweise:
  - Das ist ein „Alle“-Muster auf Nachbarpaaren. Ohne vollständiges Paar gibt es keinen Verstoß.
  - Die Parität fragst du mit `x % 2 == 0` ab. Bei negativen ungeraden Zahlen ist `x % 2` gleich -1, darum vergleichst du nicht die Reste selbst.
loesung: |
  **Ansatz:** „Alle“-Muster auf Paaren. Ein Paar mit gleicher Parität entscheidet sofort mit `false`. Ohne vollständiges Paar lautet die Antwort `true`.
  ---
  ```java
  if (index >= seq.length - 1) {
      return true;
  }
  boolean hierGerade = seq[index] % 2 == 0;
  boolean danachGerade = seq[index + 1] % 2 == 0;
  if (hierGerade == danachGerade) {
      return false;
  }
  return wechseltParitaet(seq, index + 1);
  ```
  ---
  Die Falle mit negativen Zahlen: Der Rest `%` hat in Java das Vorzeichen des linken Operanden. `-5 % 2` ist -1. Wer `seq[index] % 2 != seq[index + 1] % 2` schreibt, hält -3 und 5 für verschieden, obwohl beide ungerade sind. Der Vergleich zweier Wahrheitswerte vermeidet das.
  ---
  Bewertung: Basisfall `index >= seq.length - 1` (vorhanden und korrekt), Fortschritt `index + 1` (vorhanden und korrekt), Rückgabewert mit sofortigem `false` und `true` im Basisfall.
  ---
  Probe mit `{6, 1, 4, 4, 9}` ab Index 0: (6, 1) wechselt, (1, 4) wechselt, (4, 4) beide gerade, also `false`.
```

```aufgabe
id: ra-pruef-blatt-restsummen
titel: Restsummen in ein neues Array
niveau: 3
punkte: 6
lernziel: 3
kompetenz: anwenden
quelle: im Stil von Aufgabenblatt 4, WS 2023, Aufgabe 4 (neues Array rekursiv erzeugen), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int[] restSummen(int[] a, int index)` **rekursiv**. Keine Schleifen, keine
  Hilfsmethoden, keine Klassenvariablen, kein `clone`, Methodenkopf unverändert.

  Die Methode liefert ein **neues** Array derselben Länge wie `a`. An jeder Stelle `i` steht die Summe aller Werte von
  `a[i]` bis zum Ende. Das Array `a` bleibt unverändert.

  Vorbedingungen: `a != null`, beim Startaufruf ist `index == 0`.

  Beispiel: `restSummen(new int[]{4, -2, 7, 1}, 0)` liefert `[10, 6, 8, 1]`. Die erste Stelle ist
  `4 - 2 + 7 + 1 = 10`, die zweite `-2 + 7 + 1 = 6`. Die dritte ist `7 + 1 = 8`, die letzte ist 1.

  Zusatzfrage für das Feedbackgespräch: Warum lässt sich mit diesem Aufbau leicht die Summe **ab** einer Stelle
  berechnen, aber nicht die Summe **bis** zu einer Stelle?
teile:
  - typ: code
    vorlage: |
      public class Restsummen {
          public static int[] restSummen(int[] a, int index) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Restsummen {
          public static int[] restSummen(int[] a, int index) {
              if (index == a.length) {
                  return new int[a.length];
              }
              int[] r = restSummen(a, index + 1);
              if (index == a.length - 1) {
                  r[index] = a[index];
              } else {
                  r[index] = a[index] + r[index + 1];
              }
              return r;
          }
      }
    tests:
      - { aufruf: "restSummen(new int[]{4, -2, 7, 1}, 0)", erwartet: "new int[]{10, 6, 8, 1}" }
      - { aufruf: "restSummen(new int[]{5}, 0)", erwartet: "new int[]{5}", beschreibung: "ein Wert" }
      - { aufruf: "restSummen(new int[]{}, 0)", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { vorher: "int[] x = {1, 2, 3};", aufruf: "restSummen(x, 0)", ergebnis: "x[0] + x[1] + x[2] == 6 && x[0] == 1", erwartet: "true", beschreibung: "Original unverändert" }
      - { aufruf: "restSummen(new int[]{1, 1, 1, 1, 1}, 0)", erwartet: "new int[]{5, 4, 3, 2, 1}", versteckt: true }
    regeln: { keineSchleifenIn: [restSummen], rekursiv: [restSummen], keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Auf dem Rückweg ist `r[index + 1]` schon fertig berechnet, denn der Aufruf mit `index + 1` lief vorher zu Ende. Nutze diesen Wert: `r[index] = a[index] + r[index + 1]`." }
      - { wert: 2, meldung: "Beim letzten Wert gibt es kein `r[index + 1]`. Behandle `index == a.length - 1` gesondert." }
      - { wert: 4, meldung: "Schreib nur in das neue Array. Das übergebene Array `a` muss unverändert bleiben." }
hinweise:
  - Lege das neue Array im Basisfall an. Auf dem Rückweg kommen die Aufrufe von hinten nach vorne dran.
  - Wenn der Aufruf mit Index `i` seinen Platz füllt, steht an `i + 1` schon die fertige Restsumme. Der letzte Index braucht einen eigenen Fall.
loesung: |
  **Ansatz:** Neues Array im Basisfall, Befüllen auf dem Rückweg. Weil der Rückweg von hinten nach vorne läuft, kann jeder Aufruf die Restsumme seines rechten Nachbarn weiterverwenden.
  ---
  ```java
  if (index == a.length) {
      return new int[a.length];
  }
  int[] r = restSummen(a, index + 1);
  if (index == a.length - 1) {
      r[index] = a[index];
  } else {
      r[index] = a[index] + r[index + 1];
  }
  return r;
  ```
  ---
  Probe mit `{4, -2, 7, 1}`: Index 3 schreibt 1, Index 2 schreibt `7 + 1 = 8`. Danach schreibt Index 1 `-2 + 8 = 6` und Index 0 `4 + 6 = 10`.
  ---
  Zusatzfrage: Auf dem Rückweg sind nur die Plätze **rechts** vom aktuellen Index schon befüllt. Für die Summe bis zu einer Stelle bräuchte man die Plätze links, und die sind noch leer.
```

```aufgabe
id: ra-pruef-teile-nachbarn
titel: Gleiche Nachbarn durch Halbieren zählen
niveau: 3
punkte: 5
lernziel: 5
kompetenz: anwenden
quelle: im Stil von Aufgabenblatt 4, WS 2021, Aufgabe 4d (zwei rekursive Aufrufe), Inhalt neu
angabe: |
  (Zeitrichtwert: 12 Minuten) Implementiere `int gleicheNachbarn(int[] a, int start, int end)` **rekursiv** mit genau
  zwei Selbstaufrufen pro Aufruf, die die linke und die rechte Hälfte des Bereichs bearbeiten. Schleifen sind verboten.

  Die Methode zählt die Paare direkt benachbarter Werte im Bereich `[start, end]`, die **gleich** sind. Gezählt werden
  also alle `i` mit `start <= i < end` und `a[i] == a[i + 1]`.

  Vorbedingungen: `a != null`, `0 <= start <= end < a.length`.

  Beispiel: Für `{3, 3, 5, 5, 5, 2}` und den Bereich `[0, 5]` sind die gleichen Paare (3, 3), (5, 5) und noch einmal
  (5, 5). Das Ergebnis ist 3.
teile:
  - typ: code
    vorlage: |
      public class Nachbarn {
          public static int gleicheNachbarn(int[] a, int start, int end) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Nachbarn {
          public static int gleicheNachbarn(int[] a, int start, int end) {
              if (start == end) {
                  return 0;
              }
              int mitte = (start + end) / 2;
              int naht = 0;
              if (a[mitte] == a[mitte + 1]) {
                  naht = 1;
              }
              return gleicheNachbarn(a, start, mitte) + naht + gleicheNachbarn(a, mitte + 1, end);
          }
      }
    tests:
      - { aufruf: "gleicheNachbarn(new int[]{3, 3, 5, 5, 5, 2}, 0, 5)", erwartet: "3", beschreibung: "Paar an der Nahtstelle" }
      - { aufruf: "gleicheNachbarn(new int[]{3, 3, 5, 5, 5, 2}, 2, 5)", erwartet: "2", beschreibung: "Teilbereich" }
      - { aufruf: "gleicheNachbarn(new int[]{7, 7}, 0, 1)", erwartet: "1", beschreibung: "zwei Werte" }
      - { aufruf: "gleicheNachbarn(new int[]{4}, 0, 0)", erwartet: "0", beschreibung: "ein Wert" }
      - { aufruf: "gleicheNachbarn(new int[]{1, 2, 3}, 0, 2)", erwartet: "0" }
      - { aufruf: "gleicheNachbarn(new int[]{2, 2, 2, 2, 2, 2, 2}, 0, 6)", erwartet: "6", versteckt: true }
    regeln: { keineSchleifenIn: [gleicheNachbarn], rekursiv: [gleicheNachbarn], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Das Paar aus `a[mitte]` und `a[mitte + 1]` liegt in keiner Hälfte ganz drin. Zähle es beim Kombinieren zusätzlich." }
      - { wert: 3, meldung: "Bei zwei Werten ist `mitte` gleich `start`. Beide Hälften sind einzelne Werte und liefern 0. Das gleiche Paar zählt nur über die Nahtstelle." }
hinweise:
  - Ein einzelner Wert enthält kein Paar. Das ist der Basisfall mit 0.
  - 'Wie bei `istSortiert` in [13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren) gehört das Paar an der Nahtstelle zu keiner Hälfte. Prüfe es beim Kombinieren.'
loesung: |
  **Ansatz:** Teile und herrsche mit der Kombination „links + Nahtstelle + rechts“.
  ---
  ```java
  if (start == end) {
      return 0;
  }
  int mitte = (start + end) / 2;
  int naht = 0;
  if (a[mitte] == a[mitte + 1]) {
      naht = 1;
  }
  return gleicheNachbarn(a, start, mitte) + naht + gleicheNachbarn(a, mitte + 1, end);
  ```
  ---
  Probe mit `[0, 5]`: Die Mitte ist 2. Links `{3, 3, 5}` liefert 1, rechts `{5, 5, 2}` liefert 1, die Nahtstelle 5 und 5 liefert 1. Zusammen 3.
```

```aufgabe
id: ra-pruef-main
titel: Testfälle in main schreiben
niveau: 3
punkte: 3
lernziel: 7
kompetenz: anwenden
quelle: nach den Programmiertests 2021 bis 2023 (Deklarationen und Testfälle in main, 1 + 2 Punkte)
angabe: |
  (Zeitrichtwert: 5 Minuten) Im Programmiertest gibt es Punkte für die Deklarationen und die Testfälle in `main`. Die
  Methode `maximum(int[] a, int index)` ist schon fertig. Schreibe `main` so, dass es

  1. das Array `daten` mit den Werten 12, -4, 30 und 7 deklariert und initialisiert,
  2. `maximum(daten, 0)` ausgibt,
  3. `maximum(daten, 3)` ausgibt,
  4. das Array `daten` mit `Arrays.toString` ausgibt, damit man sieht, dass es unverändert ist.

  Jede Ausgabe steht in einer eigenen Zeile. Die Ausgaben stehen nur in `main`, nicht in der Methode.
teile:
  - typ: code
    vorlage: |
      import java.util.Arrays;

      public class Testfaelle {
          public static int maximum(int[] a, int index) {
              if (index == a.length - 1) {
                  return a[index];
              }
              return Math.max(a[index], maximum(a, index + 1));
          }

          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Arrays;

      public class Testfaelle {
          public static int maximum(int[] a, int index) {
              if (index == a.length - 1) {
                  return a[index];
              }
              return Math.max(a[index], maximum(a, index + 1));
          }

          public static void main(String[] args) {
              int[] daten = {12, -4, 30, 7};
              System.out.println(maximum(daten, 0));
              System.out.println(maximum(daten, 3));
              System.out.println(Arrays.toString(daten));
          }
      }
    tests:
      - { stdout: "30\n7\n[12, -4, 30, 7]\n", beschreibung: "Ausgabe von main" }
    fehler:
      - { wert: 1, meldung: "Vergleiche deine Ausgabe Zeile für Zeile. `maximum(daten, 3)` betrachtet nur den letzten Wert 7. `Arrays.toString` liefert die Werte in eckigen Klammern mit Komma und Leerzeichen." }
hinweise:
  - 'Ein Array deklarierst und initialisierst du in einer Zeile: `int[] daten = {…};`.'
  - Der Startindex 3 ist der letzte Index. Der Rest besteht dann nur aus einem Wert.
loesung: |
  **Ansatz:** Erst die Deklaration, dann je Testfall eine `println`-Zeile in der verlangten Reihenfolge.
  ---
  ```java
  int[] daten = {12, -4, 30, 7};
  System.out.println(maximum(daten, 0));
  System.out.println(maximum(daten, 3));
  System.out.println(Arrays.toString(daten));
  ```
  ---
  `maximum(daten, 0)` ist 30. `maximum(daten, 3)` ist sofort der Basisfall und liefert 7. Danach erscheint `[12, -4, 30, 7]`.
  ---
  Ein Array direkt mit `System.out.println(daten)` auszugeben, zeigt nur eine Speicherkennung wie `[I@1b6d3586`. Darum `Arrays.toString`.
```

```aufgabe
id: ra-pruef-feedback
titel: Fragen im Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 6
kompetenz: begruenden
quelle: nach den Zusatzfragen der Aufgabenblätter 3 und 4 (WS 2021 bis WS 2023), umformuliert
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) Du hast die Methode `preisTrend(int[] alt, int[] neu, int index)`
  aus [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern) abgegeben. Sie legt das
  `char`-Array im Basisfall an und befüllt es auf dem Rückweg. Beantworte die drei Fragen der Tutorin in je ein bis
  zwei Sätzen.

  1. Wozu braucht die Methode den Parameter `index`? Bei Strings kam die Rekursion ohne ihn aus.
  2. Was passiert, wenn man im Selbstaufruf `index++` statt `index + 1` schreibt?
  3. Warum entsteht das neue Array im Basisfall und nicht am Anfang jedes Aufrufs?
teile:
  - typ: text
    muster: |
      1. Ein Array kann man nicht kürzen wie einen String mit substring, und Kopieren ist verboten. Der Index sagt
         jedem Aufruf, welche Stelle er bearbeitet und wo der Rest beginnt.
      2. index++ liefert den alten Wert. Der Selbstaufruf bekommt denselben Index, die Rekursion endet nie und bricht
         mit einem StackOverflowError ab.
      3. Der Basisfall wird pro Startaufruf genau einmal erreicht, also entsteht genau ein Array. Am Anfang jedes
         Aufrufs hätte jeder Aufruf ein eigenes Array mit nur einem befüllten Platz.
hinweise:
  - Denk an die drei Stichworte Fortschritt, Wert von `index++` und Anzahl der `new`-Ausführungen.
  - Für Frage 3 hilft die Frage, wie oft der Basisfall bei einem Startaufruf erreicht wird.
loesung: |
  **Ansatz:** Jede Frage mit einem Begriff aus dem Kapitel beantworten: Rest ab einem Index, Wert von `index++`, Erzeugen im Basisfall.
  ---
  1. Der Index beschreibt den Rest, weil ein Array nicht kürzer werden kann.
  ---
  2. `index++` übergibt den alten Wert. Das ergibt einen `StackOverflowError`.
  ---
  3. Im Basisfall entsteht genau ein Array, das alle Aufrufe gemeinsam befüllen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit der Zusammenfassung direkt darunter.
antwort: |
  Eine mögliche Auswahl: (1) Weil ein Array nicht kürzer werden kann, beschreibt ein Index-Parameter den Rest, der noch
  zu bearbeiten ist. Basisfall ist `index == a.length`, Fortschritt `index + 1`, Startaufruf mit Index 0. (2) Soll ein
  neues Array entstehen, legt man es im Basisfall an und befüllt es auf dem Rückweg. Soll das übergebene Array
  verändert werden, schreibt man direkt hinein, und der Aufrufer sieht die Änderung. (3) Mit zwei Indizes arbeitet man
  von beiden Enden zur Mitte (Basisfall `links >= rechts`), mit Teile und herrsche halbiert man den Bereich und
  kombiniert zwei Teilergebnisse. Ebenso gute Antworten sind die Basisfälle für Maximum und Nachbarpaare oder die
  Formel 2n - 1 für die Anzahl der Aufrufe.
```

:::zusammenfassung
1. **Rest ab einem Index:** Ein Array kann man nicht kürzen, und Kopieren ist im Programmiertest verboten. Darum
   bekommt die Methode einen Parameter `index`. Basisfall `index == a.length` (leerer Rest), Fortschritt `index + 1`,
   Startaufruf mit Index 0. Ein Array der Länge n braucht n + 1 Aufrufe.
2. **Ergebnis des leeren Rests:** 0 bei Summen und Zählern, 1 bei Produkten, `true` bei „alle“, `false` bei
   „irgendein“, -1 bei „Index nicht gefunden“. Für Maximum und Minimum gibt es keinen solchen Wert. Dort endet die
   Rekursion beim letzten Index, und das Array darf nicht leer sein.
3. **Nachbarpaare:** Wer `a[index]` mit `a[index + 1]` vergleicht, braucht den Basisfall `index >= a.length - 1`, sonst
   läuft der Zugriff über das Ende.
4. **In-place oder neu:** Eine `void`-Methode verändert das übergebene Array, und der Aufrufer sieht es. Ein neues Array
   entsteht im Basisfall mit `new` und wird auf dem Rückweg befüllt. Das Original bleibt dann unverändert. Zum Tauschen
   braucht man eine Hilfsvariable.
5. **Zwei Indizes:** Ein Bereich `[links, rechts]` wird von außen nach innen bearbeitet, Fortschritt `links + 1` und
   `rechts - 1`. Der Basisfall `links >= rechts` funktioniert für gerade und ungerade Längen. Soll jeder Wert genau
   einmal zählen, braucht der mittlere Wert einen eigenen Fall.
6. **Teile und herrsche:** Mitte `(start + end) / 2`, Hälften `[start, mitte]` und `[mitte + 1, end]`, Basisfall
   `start == end`, Teilergebnisse kombinieren. Bei n Werten sind es 2n - 1 Aufrufe, mit `||` oder `&&` oft weniger.
   Paare über die Nahtstelle prüft man beim Kombinieren.
7. **Fehlerbilder:** `index++` statt `index + 1` und eine Teilung, die nicht kleiner wird, führen zum
   `StackOverflowError`. Ein fehlender oder zu später Basisfall führt meist zur `ArrayIndexOutOfBoundsException`.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Basisfall `a.length == 0` statt `index == a.length`.** Das Array wird nicht kürzer, darum greift der Basisfall nie.
   Training: „Welche Basisfälle sind richtig?“ in [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
2. **`index++` statt `index + 1`.** Die Rekursion bleibt beim selben Index stehen. Training: „Werte über einer Grenze
   zählen“ in [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen) und „Was meldet Java?“ in
   [13.6 Gemischte Wiederholung](/lernen/ep1/rekursion-arrays/gemischte-wiederholung).
3. **Basisfall mit `==` wird übersprungen**, etwa bei Schrittweite 2. Training: „Jeden zweiten Wert addieren“ in
   [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
4. **Erfundener Startwert 0 beim Maximum.** Training: „Vier Versuche für das Maximum“ in
   [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden).
5. **Nachbarpaar läuft über das Ende**, weil der Basisfall erst bei `index == a.length` greift. Training: „Ist die
   Folge streng steigend?“ und „Genau n Anstiege ab einem Index“ in [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden).
6. **Falscher Wert im Basisfall von „alle“ oder „irgendein“.** Training: „Der richtige Wert für den leeren Rest“ in
   [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden) und „Welches Muster passt? Vier Aufgaben“
   in [13.6 Gemischte Wiederholung](/lernen/ep1/rekursion-arrays/gemischte-wiederholung).
7. **Neues Array in jedem Aufruf** oder Ergebnis des Selbstaufrufs weggeworfen. Training: „Warum bleibt das Ergebnis
   fast leer?“ in [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern).
8. **Original verändert, obwohl ein neues Array verlangt ist.** Training: „Messwerte nach oben begrenzen“ in
   [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern).
9. **Tauschen ohne Hilfsvariable.** Training: „Nachbarn paarweise tauschen“ in
   [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern).
10. **Basisfall `links == rechts` bei gerader Länge.** Training: „Der Basisfall für beide Längen“ und „Nur einen
    Bereich umdrehen“ in [13.4 Zwei Indizes: von beiden Enden zur Mitte](/lernen/ep1/rekursion-arrays/zwei-indizes-von-beiden-enden-zur-mitte).
11. **Teilung `[start, mitte - 1]` und `[mitte, end]` oder fehlender Basisfall `start == end`.** Training: „Eine
    fehlerhafte Halbierung“ in [13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren).
12. **Paar an der Nahtstelle vergessen.** Training: „Ist der Bereich aufsteigend sortiert?“ in
    [13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren) und „Gleiche Nachbarn durch Halbieren
    zählen“ in [13.7 Prüfungsaufgaben](/lernen/ep1/rekursion-arrays/pruefungsaufgaben).
13. **Negative Zahlen und `% 2`.** `-3 % 2` ist -1. Training: „Wechseln gerade und ungerade Werte ab?“ in
    [13.7 Prüfungsaufgaben](/lernen/ep1/rekursion-arrays/pruefungsaufgaben).
14. **Aufrufe falsch gezählt**, vor allem beim Halbieren. Training: „Aufrufe für sechs Werte“ in
    [13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren) und „Drei Quizfragen zu einer
    Array-Rekursion“ in [13.7 Prüfungsaufgaben](/lernen/ep1/rekursion-arrays/pruefungsaufgaben).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Ein Array mit einem Index-Parameter rekursiv durchlaufen und den Startaufruf wählen.
2. Den Ablauf verfolgen, Aufrufe zählen und Ausgaben auf Hin- und Rückweg ordnen.
3. Rekursiv prüfen und suchen, auch das Maximum und Eigenschaften von Nachbarpaaren.
4. Ein neues Array rekursiv erzeugen oder das übergebene Array in-place verändern.
5. Mit zwei Indizes von beiden Enden zur Mitte arbeiten.
6. Ein Array nach Teile und herrsche halbieren und die Aufrufe zählen.
7. Fehler in Array-Rekursionen finden und reparieren.
8. Aufgaben im Stil der Aufgabenblätter und des Programmiertests unter den Einschränkungen lösen und Testfälle in `main` schreiben.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein **Feedbackgespräch**. Dort
erklärst du deinen Code und beantwortest Zusatzfragen. Zu Aufgabe 4 von Aufgabenblatt 4 liegen die Fragen nach dem
Parameter `index` und nach dem Ort, an dem das neue Array entsteht, nahe. Auch Varianten wie „Wie wäre es von
hinten?“ sind denkbar. Welche Fragen wirklich kommen, ist nicht belegt. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und
vergleiche sie mit den Kernpunkten.

```karten
- id: ra-karte-index
  frage: Warum braucht eine rekursive Methode auf einem Array meist einen Parameter index?
  antwort: |
    Bei Strings bekommt der Selbstaufruf mit `substring(1)` einen kürzeren String. Ein Array kann man nicht kürzen,
    und Kopieren ist im Programmiertest verboten. Darum bleibt das Array gleich, und der Index beschreibt den Rest, der
    noch zu bearbeiten ist. Jeder Aufruf bearbeitet `a[index]` und ruft sich mit `index + 1` auf.
  kernpunkte:
    - Array lässt sich nicht kürzen
    - Kopieren verboten
    - Index beschreibt den Rest
- id: ra-karte-basisfall
  frage: Welcher Basisfall passt zu einer Array-Rekursion mit index + 1, und warum nicht a.length == 0?
  antwort: |
    Der Rest ist leer, wenn `index == a.length` gilt. Dann liefert die Methode das Ergebnis für „nichts“, etwa 0 bei
    einer Summe. Die Bedingung `a.length == 0` ist falsch, weil alle Aufrufe dasselbe Array sehen und sich seine Länge
    nie ändert. Bei der Summe liefe die Rekursion weiter, bis `a[a.length]` eine `ArrayIndexOutOfBoundsException` wirft.
  kernpunkte:
    - index == a.length heißt leerer Rest
    - a.length ändert sich nie
    - sonst Exception am Arrayende
- id: ra-karte-startwerte
  frage: Welchen Wert liefert der Basisfall bei Summe, Produkt, „alle“, „irgendein“ und Suche nach einem Index?
  antwort: |
    Der Basisfall liefert die richtige Antwort für den leeren Rest. Bei der Summe ist das 0, beim Produkt 1, denn 1
    verändert ein Produkt nicht. Bei „alle erfüllen die Bedingung“ ist es `true`, weil im leeren Rest kein Wert sie
    verletzt. Bei „irgendeiner erfüllt sie“ ist es `false`. Bei der Suche nach einem Index ist es -1, weil -1 nie ein
    gültiger Index ist.
  kernpunkte:
    - Antwort für den leeren Rest
    - 0, 1, true, false, -1
    - neutraler Wert verändert das Ergebnis nicht
- id: ra-karte-maximum
  frage: Warum endet die Maximum-Rekursion beim letzten Index und nicht beim leeren Rest? Nenne ein Gegenbeispiel.
  antwort: |
    Für den leeren Rest gibt es kein sinnvolles Maximum. Jeder erfundene Wert kann das Ergebnis verfälschen. Liefert
    der Basisfall 0, ergibt sich für `{-5, -2, -9}` das Maximum 0, obwohl 0 gar nicht im Array steht. Darum lautet der
    Basisfall `index == a.length - 1` mit `return a[index];`, und das Array darf nicht leer sein.
  kernpunkte:
    - kein Maximum für den leeren Rest
    - Gegenbeispiel nur negative Werte
    - Vorbedingung Array nicht leer
- id: ra-karte-paare
  frage: Worauf musst du achten, wenn eine Rekursion benachbarte Werte vergleicht?
  antwort: |
    Jeder Aufruf liest `a[index]` und `a[index + 1]`. Das letzte vollständige Paar beginnt beim Index `a.length - 2`.
    Der Basisfall muss deshalb schon bei `index >= a.length - 1` greifen. Mit `index == a.length` läse der vorletzte
    Aufruf hinter das Ende. Das `>=` fängt zusätzlich das leere Array ab.
  kernpunkte:
    - Paar braucht index + 1
    - Basisfall index >= a.length - 1
    - leeres Array mit abgedeckt
- id: ra-karte-neues-array
  frage: Wo legst du bei einem festen Kopf wie int[] f(int[] a, int index) das neue Array an, und warum?
  antwort: |
    Im Basisfall mit `new int[a.length]`. Der Basisfall wird pro Startaufruf genau einmal erreicht, also entsteht genau
    ein Array. Jeder andere Aufruf holt sich dieses Array vom Selbstaufruf, schreibt seinen Platz `index` hinein und
    gibt es zurück. Legt man das Array am Anfang jedes Aufrufs an, hat jeder Aufruf ein eigenes Array, und das Ergebnis
    enthält fast nur Nullen.
  kernpunkte:
    - new nur im Basisfall
    - auf dem Rückweg befüllen
    - sonst ein Array pro Aufruf
- id: ra-karte-inplace
  frage: Was bedeutet in-place, und warum braucht eine solche Methode keinen Rückgabewert?
  antwort: |
    In-place heißt, dass die Methode das übergebene Array direkt verändert. Beim Aufruf wird nur der Verweis kopiert,
    darum zeigen Parameter und Variable des Aufrufers auf dasselbe Array. Jede Änderung wie `a[index] = 0` sieht der
    Aufrufer nach dem Aufruf. Eine Zuweisung wie `a = new int[3]` ändert dagegen nur den Parameter.
  kernpunkte:
    - übergebenes Array direkt ändern
    - Verweis wird kopiert, nicht das Array
    - Zuweisung an den Parameter wirkt nicht nach außen
- id: ra-karte-tausch
  frage: Wie tauschst du zwei Werte in einem Array, und was geht ohne Hilfsvariable schief?
  antwort: |
    Mit einem Dreieckstausch: `int merk = a[i]; a[i] = a[j]; a[j] = merk;`. Ohne Hilfsvariable überschreibt die erste
    Zuweisung `a[i]`, und der alte Wert ist verloren. Aus `{7, 2}` wird dann `{2, 2}`.
  kernpunkte:
    - Hilfsvariable merk
    - drei Zuweisungen
    - sonst geht ein Wert verloren
- id: ra-karte-zwei-indizes
  frage: Wie arbeitet eine Rekursion mit zwei Indizes, und welcher Basisfall ist richtig?
  antwort: |
    Sie bearbeitet den Bereich `[links, rechts]` von außen nach innen. Jeder Aufruf behandelt das äußere Paar und ruft
    sich mit `links + 1` und `rechts - 1` auf. Der Basisfall ist `links >= rechts`. Bei gerader Länge laufen die
    Indizes aneinander vorbei, etwa von `(1, 2)` zu `(2, 1)`. Ein Basisfall `links == rechts` würde dann nie greifen.
  kernpunkte:
    - äußeres Paar, dann nach innen
    - Basisfall links >= rechts
    - gerade Länge läuft vorbei
- id: ra-karte-teile
  frage: Was ist Teile und herrsche, und wie halbierst du einen Bereich richtig?
  antwort: |
    Man teilt die Aufgabe in zwei kleinere derselben Art, löst jede mit einem Selbstaufruf und kombiniert die
    Ergebnisse. Die Mitte ist `(start + end) / 2`, die Hälften sind `[start, mitte]` und `[mitte + 1, end]`. Basisfall ist
    ein einzelner Wert mit `start == end`. Mit `[start, mitte - 1]` und `[mitte, end]` würde der Bereich `[0, 1]` sich
    selbst wieder aufrufen.
  kernpunkte:
    - teilen, lösen, kombinieren
    - mitte gehört zur linken Hälfte
    - Basisfall ein einzelner Wert
- id: ra-karte-aufrufe-halbieren
  frage: Wie viele Aufrufe braucht eine Halbierungs-Rekursion für n Werte, und warum?
  antwort: |
    Ohne vorzeitigen Abbruch sind es 2n - 1. Jeder Basisfall erledigt einen Wert, das sind n Aufrufe. Jeder andere
    Aufruf fügt zwei Teilergebnisse zu einem zusammen. Um n Einzelergebnisse zu einem zu machen, braucht man n - 1
    solche Schritte. Bei 4 Werten sind es 7 Aufrufe. Mit `||` kann eine Suche früher aufhören und weniger brauchen.
  kernpunkte:
    - n Basisfälle
    - n - 1 kombinierende Aufrufe
    - mit || oft weniger
- id: ra-karte-nahtstelle
  frage: Warum genügt es beim Prüfen auf Sortiertheit nicht, beide Hälften rekursiv zu prüfen?
  antwort: |
    Jede Hälfte prüft nur Paare, deren beide Werte in ihr liegen. Das Paar `a[mitte]` und `a[mitte + 1]` hat einen Wert
    links und einen rechts und wird von keiner Hälfte geprüft. `{1, 4, 6, 2, 7, 9}` hat zwei sortierte Hälften und ist
    trotzdem nicht sortiert, weil 6 größer als 2 ist. Die Kombination muss die Nahtstelle zusätzlich prüfen.
  kernpunkte:
    - Hälften prüfen nur innere Paare
    - Nahtstelle gehört zu keiner Hälfte
    - Gegenbeispiel mit sortierten Hälften
- id: ra-karte-einschraenkungen
  frage: Welche Einschränkungen gelten im Programmiertest für die rekursive Methode auf einem Array?
  antwort: |
    In der rekursiven Methode sind keine Schleifen erlaubt, dazu keine Hilfsmethoden und keine globalen Variablen.
    Der Methodenkopf bleibt unverändert, ein zusätzlicher Parameter ist also nicht erlaubt. `clone` und
    `System.arraycopy` sind verboten, und von `Arrays` nur `toString` und `deepToString` erlaubt. Ein neues Array
    entsteht deshalb mit `new` und wird Platz für Platz befüllt.
  kernpunkte:
    - keine Schleifen, Hilfsmethoden, globalen Variablen
    - Kopf unverändert
    - kein clone, kein arraycopy, kein copyOfRange
- id: ra-karte-index-plusplus
  frage: Warum führt index++ im Selbstaufruf zu einem StackOverflowError, und woran erkennst du den Fehler?
  antwort: |
    Der Ausdruck `index++` liefert den alten Wert und erhöht erst danach die lokale Variable. Der Selbstaufruf bekommt
    also denselben Index wie der aktuelle Aufruf. Kein Aufruf kommt dem Basisfall näher, der Aufrufstapel läuft voll.
    Ein `StackOverflowError` bei einer Array-Rekursion deutet deshalb oft auf `index++` oder eine Teilung hin, die nicht
    kleiner wird. Eine `ArrayIndexOutOfBoundsException` deutet dagegen auf einen fehlenden oder zu späten Basisfall.
  kernpunkte:
    - index++ liefert den alten Wert
    - kein Fortschritt, Stapel läuft voll
    - die Art des Abbruchs verrät die Ursache
- id: ra-karte-kapitel10
  frage: Was ist gleich und was ist anders als bei der String-Rekursion mit substring?
  antwort: |
    Die String-Rekursion steht in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings). Gleich
    bleiben die Bausteine Basisfall und Fortschritt, Hin- und Rückweg und die Regel, dass Ausgaben hinter dem
    Selbstaufruf in umgekehrter Reihenfolge erscheinen. Anders ist die Art des Fortschritts: Statt `substring(1)`
    wandert ein Index. Neu ist
    außerdem, dass alle Aufrufe auf dasselbe Array zugreifen. Darum können sie es gemeinsam verändern oder gemeinsam
    ein neues Array befüllen. Ein String lässt sich dagegen nicht verändern.
  kernpunkte:
    - Basisfall, Fortschritt, Hin- und Rückweg wie bisher
    - Index statt substring
    - gemeinsames, veränderbares Array
- id: ra-karte-schleife
  frage: Wie wird aus einer for-Schleife über ein Array eine Rekursion mit Index?
  antwort: |
    Die Laufvariable `i` wird zum Parameter `index`, ihr Startwert zum Startaufruf. Die Schleifenbedingung
    `i < a.length` kehrt man um, das ergibt den Basisfall `index == a.length`. Der Anfangswert der Sammelvariable wird
    das Ergebnis des Basisfalls. Der Schleifenrumpf wird zum Beitrag von `a[index]`, und `i++` wird zum Selbstaufruf
    mit `index + 1`.
  kernpunkte:
    - Laufvariable wird Parameter
    - Bedingung umkehren ergibt Basisfall
    - i++ wird Selbstaufruf mit index + 1
```
