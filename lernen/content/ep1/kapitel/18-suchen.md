---
nummer: 18
titel: Suchen
kurz: Einen Wert in einem Array finden. Die lineare Suche und ihre Varianten Zeile für Zeile, die Suchvarianten aus dem Quiz (Flag, Wächter, zwei Indizes), die binäre Suche mit low, mid und high und die Frage, wie viele Vergleiche jede Suche braucht.
teil: algorithmen
stunden: 4
pruefungsgewicht: 2
voraussetzungen: [schleifen, methoden, rekursion, arrays, rekursion-arrays]
lernziele:
  - eine lineare Suche als Methode schreiben, die den Index des ersten Treffers oder -1 liefert, und ihr Ergebnis für ein gegebenes Array und einen Suchwert exakt angeben
  - die lineare Suche abwandeln, nämlich von hinten suchen, ab einem Startindex suchen, nach einer Bedingung suchen, Treffer zählen und eine Folge von Werten finden
  - Suchvarianten mit Flag-Variable, Wächter oder zwei Indizes Zeile für Zeile verfolgen und Aussagen zu Ergebnis, -1, Terminierung und Laufzeit im Stil des Quiz beurteilen
  - die binäre Suche auf einem sortierten Array mit low, mid und high in einer Trace-Tabelle verfolgen und das Ergebnis und die Zahl der Durchläufe angeben
  - die binäre Suche mit einer Schleife und rekursiv schreiben und die typischen Fehler (mid statt mid + 1, low < high, unsortiertes Array, Überlauf der Mitte) erkennen und beheben
  - die Zahl der Vergleiche im besten und im schlechtesten Fall für lineare und binäre Suche bestimmen, mit O(n) und O(log n) beschreiben und begründet entscheiden, welche Suche passt
  - Suchmethoden im Stil von Aufgabenblatt und Programmiertest unter den dortigen Einschränkungen schreiben und im Feedbackgespräch erklären
---

**Worum geht es?** Ein Programm muss oft herausfinden, **ob** ein bestimmter Wert in einem Array vorkommt und
**wo**. Ist die Matrikelnummer in der Liste der Angemeldeten? An welcher Stelle steht der Preis 30? Gibt es
eine negative Messung? Diese Aufgabe heißt **Suchen**. Sie ist so häufig, dass die Vorlesung ihr eine eigene
Einheit widmet.

Ein Bild aus dem Alltag: Du suchst in einem ungeordneten Stapel Briefe einen bestimmten Brief. Dir bleibt nichts
anderes übrig, als einen Brief nach dem anderen anzuschauen. Suchst du dagegen ein Wort im Wörterbuch, schlägst du
ungefähr in der Mitte auf. Je nachdem, ob das Wort davor oder danach kommt, suchst du nur noch in einer Hälfte
weiter. Genau diese zwei Ideen lernst du in diesem Kapitel: die **lineare Suche** für ungeordnete Daten und die
**binäre Suche** für sortierte Daten.

**Was kommt in der Prüfung?**

- **Quiz:** Es liegen TUWEL-Tests aus den Wintersemestern 2021/22 und 2022/23 vor. Dort war jeweils eine der zehn
  Fragen eine **Variante der linearen Suche**. Du bekommst eine ungewohnte Suchmethode und beurteilst vier Aussagen als richtig
  oder falsch. Die Aussagen fragen zum Beispiel, welcher Treffer bei mehreren Vorkommen geliefert wird oder wie
  lange die Suche im schlechtesten Fall dauert. Eine weitere Frage betraf die Laufzeit von Schleifen, siehe
  [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse). Das Format von 2026
  ist nicht veröffentlicht. Die Aufgaben hier folgen den Tests dieser Jahre.
- **Programmiertest und Aufgabenblätter:** Viele Methoden dort enthalten eine Suche. Man sucht die Figur auf
  einem Spielfeld, eine Folge von Werten in einem Array oder das k-te Vorkommen eines Zeichens. Wer die
  Grundform sicher beherrscht, kann sie in Sekunden abwandeln.
- **Feedbackgespräch:** Mögliche Fragen sind etwa „Warum liefert die Methode -1?“ und „Warum funktioniert die binäre
  Suche nur auf sortierten Arrays?“.

**So arbeitest du mit diesem Kapitel.** Die Suchen sind kurz, aber jede Zeile zählt. Verfolge jede Suche in einer
**Trace-Tabelle** (englisch *trace*: Spur), so wie in [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
In jeder Zeile der Tabelle steht, welche Werte die Variablen nach einem Durchlauf haben. Im Quiz hast du keinen
Computer zum Ausprobieren, dort hilft nur diese Technik.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Arrays, Index und Länge** aus [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
  Die Indizes eines Arrays `a` laufen von 0 bis `a.length - 1`.
- **Schleifen über Arrays** aus [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen).
- **Suchschleifen mit Abbruchbedingung** aus [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren).
  Dort hast du `indexOf` für Strings selbst gebaut.
- **Ganzzahldivision** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
- **return beendet eine Methode** aus [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
- **Rekursion mit einem Index** aus [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: su-ein-durchlaeufe
titel: Wie oft läuft die Schleife über das Array?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      int[] a = {7, 3, 9, 4};
      int zaehler = 0;
      for (int i = 0; i < a.length; i++) {
          zaehler++;
      }
      System.out.println(zaehler);
      System.out.println(a[a.length - 1]);
    loesung: |
      4
      4
    fehler:
      - wert: "5\n4"
        meldung: Die Schleife läuft für `i = 0, 1, 2, 3`. Bei `i = 4` ist `4 < 4` falsch, dieser Durchlauf findet nicht statt.
      - wert: "4\n9"
        meldung: '`a.length - 1` ist 3. Auf Index 3 steht das **vierte** Element, die 4. Gezählt wird ab 0.'
hinweise:
  - Schreib die Werte von `i` auf, für die `i < a.length` noch wahr ist.
loesung: |
  Das Array hat die Länge 4. Die Schleife läuft für `i = 0, 1, 2, 3`, also viermal. `zaehler` wird 4.
  ---
  Der letzte Index ist `4 - 1 = 3`. Dort steht die 4.
```

```aufgabe
id: su-ein-kurzschluss
titel: Schützt das && vor dem Absturz?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren))
teile:
  - typ: ausgabe
    code: |
      int[] a = {2, 4, 6};
      int i = 0;
      while (i < a.length && a[i] != 5) {
          i++;
      }
      System.out.println(i);
    loesung: |
      3
    fehler:
      - wert: "-1"
        meldung: Der Code rechnet das Ergebnis nicht in -1 um. Er gibt einfach den Wert von `i` nach der Schleife aus.
      - wert: "2"
        meldung: Bei `i = 2` ist `a[2] = 6` und damit `6 != 5` noch wahr. Die Schleife erhöht `i` noch einmal auf 3.
hinweise:
  - Die Schleife endet, sobald `i < a.length` falsch ist oder `a[i]` gleich 5 ist.
loesung: |
  Die 5 kommt nicht vor. `i` läuft über 0, 1 und 2 bis 3.
  ---
  Bei `i = 3` ist `3 < 3` falsch. Ist die linke Seite von `&&` falsch, wertet Java die rechte Seite gar nicht mehr aus. Das heißt **Kurzschlussauswertung**. Darum wird `a[3]` nie gelesen, und es gibt keinen Absturz. Ausgabe: `3`.
```

```aufgabe
id: su-ein-return
titel: return mitten in der Schleife
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Erster {
          public static int ersterGerader(int[] a) {
              for (int i = 0; i < a.length; i++) {
                  if (a[i] % 2 == 0) {
                      return a[i];
                  }
              }
              return 0;
          }

          public static void main(String[] args) {
              System.out.println(ersterGerader(new int[]{5, 8, 3, 6}));
              System.out.println(ersterGerader(new int[]{1, 7}));
          }
      }
    loesung: |
      8
      0
    fehler:
      - wert: "6\n0"
        meldung: '`return` beendet die Methode sofort. Nach der 8 wird kein weiteres Element mehr angesehen, die 6 wird nie erreicht.'
      - wert: "1\n0"
        meldung: Die Methode gibt mit `return a[i]` den **Wert** zurück, nicht den Index. Der Wert ist 8.
hinweise:
  - Sobald `return` ausgeführt wird, ist die Methode zu Ende, auch mitten in einer Schleife.
loesung: |
  Im ersten Aufruf ist 5 ungerade, 8 gerade. `return a[i]` liefert 8 und beendet die Methode.
  ---
  Im zweiten Aufruf ist kein Wert gerade. Die Schleife läuft ganz durch, danach liefert `return 0;` die 0.
```

```aufgabe
id: su-ein-mitte
titel: Die Mitte zweier Indizes
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int low = 3;
      int high = 8;
      System.out.println((low + high) / 2);
      System.out.println(low + (high - low) / 2);
    loesung: |
      5
      5
    fehler:
      - wert: "5.5\n5.5"
        meldung: Alle Zahlen sind `int`. Bei der Division zweier `int`-Werte fällt der Nachkommaanteil weg.
      - wert: "6\n6"
        meldung: Die Ganzzahldivision rundet nicht auf, sie schneidet ab. `11 / 2` ist 5.
hinweise:
  - '`int / int` ergibt wieder einen `int`, der Nachkommaanteil fällt weg.'
loesung: |
  `(3 + 8) / 2` ist `11 / 2`, also 5 mit Rest 1. Der Rest fällt weg.
  ---
  `3 + (8 - 3) / 2` ist `3 + 5 / 2`, also `3 + 2 = 5`. Beide Formeln liefern dieselbe Mitte.
```

```aufgabe
id: su-ein-letzter-index
titel: Der größte erlaubte Index
niveau: 1
art: check
angabe: |
  Ein `int`-Array hat die Länge 9. Welcher ist der größte Index, mit dem man darauf zugreifen darf?
  (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: zahl
    loesung: "9 - 1"
    fehler:
      - wert: "9"
        meldung: Die Indizes beginnen bei 0. Bei Länge 9 sind das 0, 1, …, 8. Ein Zugriff mit 9 bricht das Programm mit einer `ArrayIndexOutOfBoundsException` ab, dem Fehler „Index außerhalb des Arrays“.
loesung: |
  Die erlaubten Indizes sind 0 bis `length - 1`.
  ---
  Bei Länge 9 ist der größte Index `9 - 1 = 8`.
```

```aufgabe
id: su-ein-rekursion
titel: Ein Index wandert durch die Rekursion
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      public class Zaehlen {
          public static int zaehleNullen(int[] a, int index) {
              if (index == a.length) {
                  return 0;
              }
              int rest = zaehleNullen(a, index + 1);
              if (a[index] == 0) {
                  return rest + 1;
              }
              return rest;
          }

          public static void main(String[] args) {
              System.out.println(zaehleNullen(new int[]{0, 4, 0, 0, 7}, 0));
              System.out.println(zaehleNullen(new int[]{0, 4, 0, 0, 7}, 3));
          }
      }
    loesung: |
      3
      1
    fehler:
      - wert: "3\n3"
        meldung: Der zweite Aufruf beginnt bei Index 3. Die Nullen auf den Indizes 0 und 2 werden gar nicht angesehen.
      - wert: "3\n2"
        meldung: Ab Index 3 stehen nur noch die Werte `0` und `7`. Das ist genau eine Null.
hinweise:
  - Der Parameter `index` sagt, ab welcher Stelle gezählt wird. Der Basisfall ist `index == a.length`.
loesung: |
  Im ersten Aufruf zählt die Methode alle Nullen ab Index 0. Das sind drei, auf den Indizes 0, 2 und 3.
  ---
  Im zweiten Aufruf beginnt sie bei Index 3. Dort stehen `0` und `7`, also eine Null.
```

## Lineare Suche: den ersten Treffer finden

```aufgabe
id: su-lin-check-index
titel: Wo steht der Wert?
niveau: 1
art: check
angabe: |
  Gegeben ist `int[] a = {6, 2, 9, 2};`. Auf welchem Index steht die 9? Indizes beginnen bei 0, siehe
  [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: Die 9 ist das **dritte** Element. Weil die Zählung bei 0 beginnt, hat das dritte Element den Index 2.
loesung: |
  Die Indizes sind 0, 1, 2 und 3. Darüber stehen die Werte 6, 2, 9 und 2.
  ---
  Die 9 steht auf Index 2.
```

Stell dir eine Liste der Matrikelnummern aller Angemeldeten vor, gespeichert in einem `int`-Array. Du willst
wissen, ob die Nummer 1234567 darin vorkommt und an welcher Stelle. Die Liste ist nicht geordnet. Also bleibt nur
ein Weg: Du schaust dir das erste Element an, dann das zweite, dann das dritte, bis du die Nummer findest oder am
Ende angekommen bist.

Für dieses Vorgehen gibt es feste Begriffe:

- Der Wert, den du suchst, heißt **Suchwert** oder **Schlüssel** (englisch *key*). In den Folien und im Quiz heißt
  der Parameter deshalb meistens `key`.
- Ein Element, das gleich dem Suchwert ist, heißt **Treffer**.
- Das Ergebnis der Suche ist der **Index** des Treffers, nicht der Wert. Den Wert kennst du ja schon, du hast
  danach gesucht.

Was liefert die Suche, wenn es keinen Treffer gibt? Es muss eine Zahl sein, denn die Methode gibt einen `int`
zurück. Man vereinbart dafür **-1**. Diese Zahl kann nie ein gültiger Index sein, denn Indizes beginnen bei 0.
Wer das Ergebnis bekommt, erkennt an der -1 also eindeutig: „nicht gefunden“.

:::definition[Lineare Suche]
Die **lineare Suche** prüft die Elemente eines Arrays der Reihe nach, beginnend bei Index 0. Beim ersten Treffer
liefert sie dessen Index. Hat sie alle Elemente geprüft, ohne einen Treffer zu finden, liefert sie -1.

Das Wort „linear“ heißt hier „der Reihe nach, wie auf einer Linie“. Die lineare Suche braucht **keine Ordnung**
im Array. Sie funktioniert auf jedem Array.
:::

```aufgabe
id: su-lin-check-null
titel: Was bedeutet das Ergebnis 0?
niveau: 1
art: check
angabe: |
  Eine lineare Suche liefert für einen Suchwert das Ergebnis 0. Was bedeutet das?
teile:
  - typ: auswahl
    optionen: ['Der Suchwert steht auf Index 0, also ganz vorne.', 'Der Suchwert kommt nicht vor.', 'Der Suchwert ist die Zahl 0.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: „Nicht gefunden“ wird mit -1 gemeldet. Die 0 ist ein gültiger Index, nämlich der des ersten Elements.
      - wert: 2
        meldung: Die Suche liefert die **Stelle** des Treffers, nicht seinen Wert. Welcher Wert gesucht war, steht im Ergebnis nicht.
loesung: |
  Das Ergebnis einer Suche ist ein Index. 0 ist der Index des ersten Elements.
  ---
  Der Suchwert steht also ganz vorne im Array. Für „nicht gefunden“ ist die -1 reserviert.
```

So sieht die lineare Suche als Java-Methode aus. Die Fassung folgt den Vorlesungsfolien, nur die Namen sind deutsch:

```java
public class LineareSuche {
    private static final int NOT_FOUND = -1;

    public static int suche(int[] daten, int schluessel) {
        for (int i = 0; i < daten.length; i++) {
            if (daten[i] == schluessel) {
                return i;
            }
        }
        return NOT_FOUND;
    }
}
```

Wir gehen den Code Zeile für Zeile durch.

- Zeile 2 legt eine **Konstante** an. Das ist eine Variable, deren Wert sich nie mehr ändern darf. Dafür sorgt das
  Schlüsselwort `final` („endgültig“), das du aus [9.2 Gute Namen, Einrückung und Kommentare](/lernen/ep1/codequalitaet/gute-namen-einrueckung-und-kommentare)
  kennst. `static` heißt, dass die Konstante zur Klasse gehört, genau wie die Methoden. `private` heißt, dass nur
  diese Klasse sie benutzen darf. Der Name `NOT_FOUND` ist englisch für „nicht gefunden“. Konstanten schreibt man in
  Großbuchstaben.
- Zeile 4 ist der Methodenkopf. Die Methode bekommt das Array `daten` und den Suchwert `schluessel` und liefert einen
  `int`.
- Zeile 5 ist eine gewöhnliche `for`-Schleife über alle Indizes von 0 bis `daten.length - 1`.
- Zeile 6 vergleicht das Element auf Index `i` mit dem Suchwert.
- Zeile 7 liefert beim ersten Treffer den Index `i`. `return` beendet die **ganze Methode** sofort, auch die
  Schleife. Spätere Treffer werden nie angesehen.
- Zeile 10 wird nur erreicht, wenn die Schleife ganz durchgelaufen ist. Erst dann steht fest, dass es keinen
  Treffer gibt. Die Methode liefert `NOT_FOUND`, also -1.

In deinen eigenen Lösungen kannst du statt der Konstante auch direkt `return -1;` schreiben. Die Konstante macht den
Code nur lesbarer. Im Quiz begegnet sie dir aber fast immer, darum solltest du sie lesen können.

:::beispiel[Eine Suche mit Treffer und eine ohne]
Gegeben ist `int[] preise = {12, 5, 9, 5, 30};`. Wir rufen `suche(preise, 5)` und `suche(preise, 7)` auf und zählen
mit, wie oft die Bedingung `daten[i] == schluessel` geprüft wird. Jede solche Prüfung heißt **Vergleich**.

Suche nach 5:

|`i`|`daten[i]`|`daten[i] == 5`|Folge|
|---|---|---|---|
|0|12|false|weiter|
|1|5|true|`return 1`|

Die Methode liefert **1**. Sie hat 2 Vergleiche gebraucht. Die zweite 5 auf Index 3 wird nie angesehen, weil
`return` die Methode beim ersten Treffer beendet.

Suche nach 7:

|`i`|`daten[i]`|`daten[i] == 7`|Folge|
|---|---|---|---|
|0|12|false|weiter|
|1|5|false|weiter|
|2|9|false|weiter|
|3|5|false|weiter|
|4|30|false|weiter|
|5|–|`5 < 5` ist false|Schleife endet|

Kein Vergleich war wahr. Nach der Schleife liefert `return NOT_FOUND;` das Ergebnis **-1**. Die Suche hat alle
5 Elemente verglichen.
:::

```aufgabe
id: su-lin-aufrufe
titel: Vier Aufrufe der linearen Suche
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Methode `suche` ist die lineare Suche aus dieser Lektion. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Vier {
          private static final int NOT_FOUND = -1;

          public static int suche(int[] daten, int schluessel) {
              for (int i = 0; i < daten.length; i++) {
                  if (daten[i] == schluessel) {
                      return i;
                  }
              }
              return NOT_FOUND;
          }

          public static void main(String[] args) {
              int[] d = {21, 13, 8, 13, 5};
              System.out.println(suche(d, 13));
              System.out.println(suche(d, 5));
              System.out.println(suche(d, 21));
              System.out.println(suche(d, 6));
          }
      }
    loesung: |
      1
      4
      0
      -1
    fehler:
      - wert: "2\n5\n1\n-1"
        meldung: Du hast ab 1 gezählt. Der erste Index eines Arrays ist 0, die 21 steht also auf Index 0.
      - wert: "3\n4\n0\n-1"
        meldung: Die 13 kommt zweimal vor. `return i` beendet die Methode beim **ersten** Treffer, also bei Index 1.
hinweise:
  - Schreib die Indizes 0 bis 4 über die Werte des Arrays. Die Suche stoppt beim ersten passenden Index.
loesung: |
  **Ansatz:** Indizes notieren: 0 → 21, 1 → 13, 2 → 8, 3 → 13, 4 → 5. Die Suche liefert den kleinsten passenden Index.
  ---
  13 steht zuerst auf Index 1. Die 5 steht auf Index 4, die 21 auf Index 0. Die 6 kommt nicht vor, also -1. Ausgabe: `1`, `4`, `0`, `-1`.
```

:::beispiel[Die Suche benutzen: enthaelt und ein leeres Array]
Oft will man gar nicht wissen, **wo** ein Wert steht, sondern nur, **ob** er vorkommt. Dafür baut man eine zweite
Methode, die die Suche aufruft und das Ergebnis mit -1 vergleicht.

```java
public class Regal {
    private static final int NOT_FOUND = -1;

    public static int suche(int[] daten, int schluessel) {
        for (int i = 0; i < daten.length; i++) {
            if (daten[i] == schluessel) {
                return i;
            }
        }
        return NOT_FOUND;
    }

    public static boolean enthaelt(int[] daten, int schluessel) {
        return suche(daten, schluessel) != NOT_FOUND;
    }

    public static void main(String[] args) {
        int[] nummern = {40, 17, 23, 17};
        System.out.println(suche(nummern, 17));
        System.out.println(enthaelt(nummern, 23));
        System.out.println(enthaelt(nummern, 5));
        System.out.println(suche(new int[0], 17));
    }
}
```

1. `suche(nummern, 17)` findet die erste 17 auf Index 1 und gibt `1` aus.
2. `enthaelt(nummern, 23)` ruft `suche` auf. Das liefert 2. Der Vergleich `2 != -1` ist wahr, also wird `true`
   ausgegeben.
3. `enthaelt(nummern, 5)`: Die Suche liefert -1, und `-1 != -1` ist falsch. Ausgabe `false`.
4. `new int[0]` ist ein **leeres Array** mit der Länge 0. Die Schleife prüft `0 < 0`, das ist sofort falsch. Sie
   läuft kein einziges Mal. Die Methode liefert -1, ohne abzustürzen.

Die Ausgabe ist:

```
1
true
false
-1
```
:::

:::merke[Grundform der linearen Suche]
1. Schleife über alle Indizes von 0 bis `daten.length - 1`.
2. In der Schleife: Ist `daten[i]` gleich dem Suchwert, dann sofort `return i;`.
3. **Nach** der Schleife: `return -1;` (oder `return NOT_FOUND;`).

Kein `else` in der Schleife. Ein einzelnes Element, das nicht passt, sagt nichts über die übrigen Elemente.
:::

:::achtung[Den Wert statt des Index zurückgeben]
Eine häufige falsche Fassung:

```java
for (int i = 0; i < daten.length; i++) {
    if (daten[i] == schluessel) {
        return daten[i];          // falsch: liefert den Wert
    }
}
return -1;
```

Für `{12, 5, 9}` und den Suchwert 9 liefert sie 9 statt 2. Noch schlimmer ist es bei negativen Werten. Für
`{4, -1}` und den Suchwert -1 liefert sie -1, denn das ist der gefundene Wert. Der Aufrufer liest daraus „nicht
gefunden“, obwohl der Wert auf Index 1 steht. Richtig ist `return i;`.
:::

:::achtung[Mit <= über das Ende hinaus]
```java
for (int i = 0; i <= daten.length; i++) {   // falsch: <= statt <
    if (daten[i] == schluessel) {
        return i;
    }
}
return -1;
```

Solange der Wert vorkommt, fällt der Fehler nicht auf, denn `return` beendet die Schleife vorher. Fehlt der Wert,
erreicht `i` die Länge. Bei `{12, 5, 9}` und dem Suchwert 7 greift die Schleife auf `daten[3]` zu. Java bricht ab mit
`ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3`, auf Deutsch: Index 3 liegt außerhalb der
Grenzen eines Arrays der Länge 3. Teste eine Suche darum immer auch mit einem
Wert, der **nicht** vorkommt.
:::

```aufgabe
id: su-lin-vergleiche
titel: Vergleiche mitzählen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die lineare Suche `suche` aus dieser Lektion wird mit dem Array `{9, 4, 7, 1, 7, 3}` aufgerufen. Wie oft wird die
  Bedingung `daten[i] == schluessel` ausgewertet?
teile:
  - typ: zahl
    label: beim Aufruf `suche(daten, 7)`
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: Das ist der Index des Treffers. Gezählt sind aber die Vergleiche. Für Index 2 werden die Indizes 0, 1 und 2 geprüft.
      - wert: "6"
        meldung: Die Suche hört beim ersten Treffer auf. Die Elemente danach werden nicht mehr verglichen.
  - typ: zahl
    label: beim Aufruf `suche(daten, 8)`
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: Das ist der letzte Index. Verglichen werden aber alle 6 Elemente, von Index 0 bis Index 5.
      - wert: "7"
        meldung: 'Bei `i = 6` ist `6 < 6` falsch. Die Schleifenbedingung wird geprüft, der Vergleich `daten[6] == 8` aber nicht mehr.'
hinweise:
  - Jeder Durchlauf der Schleife enthält genau einen Vergleich. Zähle die Durchläufe bis zum Treffer.
loesung: |
  **Ansatz:** Pro Durchlauf gibt es einen Vergleich. Die Suche endet beim ersten Treffer oder nach dem letzten Element.
  ---
  Die erste 7 steht auf Index 2. Verglichen werden die Indizes 0, 1 und 2, also 3 Vergleiche. Die 8 kommt nicht vor. Dann werden alle 6 Elemente verglichen.
```

```aufgabe
id: su-lin-luecke
titel: Die Suche vervollständigen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass `suche` den Index des ersten Treffers liefert und -1, wenn es keinen gibt.
teile:
  - typ: lueckentext
    code: |
      public class Luecken {
          public static int suche(int[] daten, int schluessel) {
              for (int i = 0; ___; i++) {
                  if (___) {
                      return ___;
                  }
              }
              return ___;
          }
      }
    luecken:
      - ["i < daten.length", "i <= daten.length - 1", "daten.length > i"]
      - ["daten[i] == schluessel", "schluessel == daten[i]"]
      - ["i"]
      - ["-1"]
    fehler:
      - wert: ["i <= daten.length", "daten[i] == schluessel", "i", "-1"]
        meldung: 'Mit `<=` erreicht `i` den Wert `daten.length`. Fehlt der Suchwert, greift die Schleife auf einen Index hinter dem Ende zu.'
      - wert: ["i < daten.length", "daten[i] == schluessel", "daten[i]", "-1"]
        meldung: Gesucht ist die **Stelle**, also der Index `i`. `daten[i]` ist der Wert, und den kennt der Aufrufer schon.
hinweise:
  - Die Schleife läuft über alle erlaubten Indizes. Was liefert man beim Treffer, was nach der Schleife?
loesung: |
  **Ansatz:** Grundform der linearen Suche aus dem Merke-Kasten.
  ---
  Bedingung `i < daten.length`, Vergleich `daten[i] == schluessel`, beim Treffer `return i;`, nach der Schleife `return -1;`.
```

```aufgabe
id: su-lin-gefuehrt
titel: Negative Werte und doppelte Werte
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Negativ {
          private static final int NOT_FOUND = -1;

          public static int suche(int[] daten, int schluessel) {
              for (int i = 0; i < daten.length; i++) {
                  if (daten[i] == schluessel) {
                      return i;
                  }
              }
              return NOT_FOUND;
          }

          public static void main(String[] args) {
              int[] t = {-3, 0, 8, -3, 0};
              System.out.println(suche(t, 0));
              System.out.println(suche(t, -3));
              System.out.println(suche(t, 3));
              if (suche(t, 8) != NOT_FOUND) {
                  System.out.println("8 an Stelle " + suche(t, 8));
              }
          }
      }
    loesung: |
      1
      0
      -1
      8 an Stelle 2
    fehler:
      - wert: "1\n-1\n-1\n8 an Stelle 2"
        meldung: Der Wert -3 steht im Array und wird ganz normal gefunden, auf Index 0. Nur der **Rückgabewert** -1 bedeutet „nicht gefunden“, nicht der Suchwert -3.
      - wert: "4\n3\n-1\n8 an Stelle 2"
        meldung: Die Suche liefert den **ersten** Treffer. Die 0 steht zuerst auf Index 1, die -3 zuerst auf Index 0.
hinweise:
  - 'Indizes notieren: 0 → -3, 1 → 0, 2 → 8, 3 → -3, 4 → 0.'
  - Ein negativer Suchwert ist kein Sonderfall. Verglichen wird nur mit `==`.
gefuehrt:
  - text: Welchen Index liefert `suche(t, 0)`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Index 0 enthält -3, Index 1 enthält 0. Das ist der erste Treffer.
  - text: Welchen Index liefert `suche(t, -3)`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Schon das erste Element ist -3. Die Suche endet nach einem einzigen Vergleich.
  - text: Welchen Wert liefert `suche(t, 3)`?
    teil: { typ: zahl, loesung: "-1" }
    erklaerung: Die 3 kommt nicht vor, nur die -3. Die Schleife läuft ganz durch, danach kommt `return NOT_FOUND;`.
  - text: Die 8 steht auf Index 2. Was gibt die letzte Zeile aus?
    erklaerung: '`suche(t, 8)` liefert 2, und `2 != -1` ist wahr. Ausgegeben wird `8 an Stelle 2`.'
loesung: |
  **Ansatz:** Für jeden Aufruf den ersten passenden Index bestimmen.
  ---
  `suche(t, 0)` liefert 1, `suche(t, -3)` liefert 0, denn negative Werte werden genauso verglichen wie alle anderen.
  ---
  `suche(t, 3)` liefert -1. Die 8 steht auf Index 2, also erscheint `8 an Stelle 2`.
```

```aufgabe
id: su-lin-zeilen
titel: Drei Fehler in einer Suche
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Kollege hat die lineare Suche so geschrieben. Sie soll den Index des ersten Treffers liefern und -1, wenn es
  keinen gibt. Markiere jede Zeile, die geändert oder gelöscht werden muss.
teile:
  - typ: zeilen
    code: |
      public static int suche(int[] daten, int schluessel) {
          for (int i = 1; i <= daten.length; i++) {
              if (daten[i] == schluessel) {
                  return daten[i];
              }
              else return -1;
          }
          return -1;
      }
    loesung: [2, 4, 6]
    fehler:
      - wert: [2, 4]
        meldung: 'Schau dir Zeile 6 an. Das `else` beendet die Methode schon nach dem ersten Element, das nicht passt.'
      - wert: [4, 6]
        meldung: 'Zeile 2 enthält zwei Fehler: Der Start bei 1 überspringt `daten[0]`, und `<=` führt hinter das Ende des Arrays.'
      - wert: [2, 4, 6, 8]
        meldung: Zeile 8 ist richtig. Nach der Schleife steht fest, dass es keinen Treffer gibt, und -1 ist das richtige Ergebnis.
hinweise:
  - Prüfe den Schleifenkopf, den Rückgabewert beim Treffer und alles, was die Schleife zu früh beendet.
  - Es sind drei Zeilen. Teste in Gedanken mit `{4, 8}` und dem Suchwert 4 und danach mit dem Suchwert 5.
loesung: |
  **Ansatz:** Die Methode mit der Grundform vergleichen: Start 0, Bedingung `<`, `return i` beim Treffer, kein `else`.
  ---
  Zeile 2: Start bei 1 und `<=`. Richtig ist `for (int i = 0; i < daten.length; i++)`. Zeile 4: liefert den Wert statt des Index.
  ---
  Zeile 6: Das `else` bricht nach dem ersten Fehlversuch ab. Diese Zeile wird gelöscht. Zeile 8 bleibt.
```

```aufgabe
id: su-lin-aussagen
titel: Was stimmt über die lineare Suche?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Beurteile die Aussagen über die Methode `suche` aus dieser Lektion.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Methode findet den Suchwert auch dann, wenn das Array nicht sortiert ist.
        richtig: true
        erklaerung: Sie prüft jedes Element einzeln und nutzt keine Ordnung. Darum braucht sie auch keine.
      - text: Der Aufruf `suche(new int[]{2, 7, 7, 7}, 7)` liefert 3.
        richtig: false
        erklaerung: '`return i` beendet die Methode beim ersten Treffer, also bei Index 1. Geliefert wird 1.'
      - text: Bei einem leeren Array bricht die Methode mit einer Exception ab.
        richtig: false
        erklaerung: 'Die Schleife prüft `0 < 0`, das ist falsch. Sie läuft keinmal, und die Methode liefert -1.'
      - text: Der Aufruf `suche(new int[]{3, -1, 8}, -1)` liefert -1.
        richtig: false
        erklaerung: '-1 ist nur als **Rückgabewert** für „nicht gefunden“ reserviert. Als Suchwert wird -1 wie jede andere Zahl mit `==` verglichen. Sie steht auf Index 1, also liefert die Methode 1.'
    fehler:
      - wert: [r, f, r, f]
        meldung: Spiele das leere Array durch. Wie oft läuft eine Schleife mit der Bedingung `i < 0`?
      - wert: [r, f, f, r]
        meldung: Unterscheide den Suchwert vom Rückgabewert. Steht -1 im Array, ist es ein ganz normales Element.
hinweise:
  - Überlege für jede Aussage ein kleines Array, an dem du sie prüfen kannst.
  - Ein einziges Gegenbeispiel reicht, um eine Aussage als falsch zu erkennen.
loesung: |
  **Ansatz:** Jede Aussage an einem kleinen Beispiel prüfen.
  ---
  Aussage 1 stimmt, die Suche nutzt keine Ordnung. Aussage 2 ist falsch: Die erste 7 steht auf Index 1, dort hört die Suche auf.
  ---
  Aussage 3 ist falsch, das leere Array liefert -1 ohne Absturz. Aussage 4 ist falsch: Die -1 wird auf Index 1 gefunden, das Ergebnis ist 1.
```

```aufgabe
id: su-lin-zweites
titel: Das zweite Vorkommen eines Worts
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Implementiere `int sucheZweites(String[] woerter, String gesucht)`. Die Methode liefert den Index, an dem
  `gesucht` zum **zweiten** Mal im Array vorkommt. Kommt das Wort höchstens einmal vor, liefert sie -1.

  Vorbedingung: `woerter != null`, kein Element ist `null`, und `gesucht != null`. Eine **Vorbedingung** sagt, was
  beim Aufruf garantiert gilt, siehe [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
  `null` bedeutet „kein Objekt“, hier also: Es gibt immer ein Array und lauter echte Wörter. Strings vergleichst du mit
  `equals`, nicht mit `==` (siehe [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals)).

  Beispiel: Für `{"rot", "blau", "rot", "gelb", "rot"}` und `"rot"` liefert die Methode 2.
teile:
  - typ: code
    vorlage: |
      public class Zweites {
          public static int sucheZweites(String[] woerter, String gesucht) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Zweites {
          public static int sucheZweites(String[] woerter, String gesucht) {
              int gefunden = 0;
              for (int i = 0; i < woerter.length; i++) {
                  if (woerter[i].equals(gesucht)) {
                      gefunden++;
                      if (gefunden == 2) {
                          return i;
                      }
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: 'sucheZweites(new String[]{"rot", "blau", "rot", "gelb", "rot"}, "rot")', erwartet: "2", beschreibung: "Beispiel aus der Angabe" }
      - { aufruf: 'sucheZweites(new String[]{"rot", "blau"}, "blau")', erwartet: "-1", beschreibung: "nur ein Vorkommen" }
      - { aufruf: 'sucheZweites(new String[0], "rot")', erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: 'sucheZweites(new String[]{"a", "b", "c", "b"}, new String("b"))', erwartet: "3", beschreibung: "Suchwert zur Laufzeit erzeugt" }
      - { aufruf: 'sucheZweites(new String[]{"x", "x"}, "x")', erwartet: "1", versteckt: true }
      - { aufruf: 'sucheZweites(new String[]{"x", "y"}, "z")', erwartet: "-1", versteckt: true }
    regeln: { keinStringGleichOperator: true, keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Gesucht ist das **zweite** Vorkommen. Zähle die Treffer mit und gib den Index zurück, sobald der Zähler 2 erreicht." }
      - { wert: 2, meldung: "Bei nur einem Vorkommen gibt es kein zweites. Steht `return -1;` erst hinter der Schleife?" }
      - { wert: 4, meldung: "Ein Suchwert, der zur Laufzeit entsteht, ist ein eigenes Objekt. Mit `==` vergleichst du Referenzen, mit `equals` den Inhalt." }
      - { wert: "keinStringGleichOperator", meldung: "Strings werden mit `equals` verglichen, nicht mit `==`." }
hinweise:
  - Du brauchst einen Zähler, der bei 0 beginnt und bei jedem Treffer um 1 wächst.
  - Prüfe direkt nach dem Hochzählen, ob der Zähler 2 ist. Dann ist `i` die gesuchte Stelle.
loesung: |
  **Ansatz:** Lineare Suche mit Trefferzähler. Die Methode endet nicht beim ersten, sondern beim zweiten Treffer.
  ---
  ```java
  int gefunden = 0;
  for (int i = 0; i < woerter.length; i++) {
      if (woerter[i].equals(gesucht)) {
          gefunden++;
          if (gefunden == 2) {
              return i;
          }
      }
  }
  return -1;
  ```
  ---
  Probe mit dem Beispiel: Treffer auf Index 0 (Zähler 1), dann auf Index 2 (Zähler 2). Die Methode liefert 2, das dritte `"rot"` auf Index 4 wird nicht mehr angesehen.
```

```reflexion
frage: Warum steht return -1 erst hinter der Schleife? Und warum vereinbart man -1 als Ergebnis für „nicht gefunden“ und nicht 0?
antwort: |
  Ein einzelnes Element, das nicht passt, sagt nichts über die anderen Elemente. Dass der Wert fehlt, steht erst
  fest, wenn **alle** Elemente geprüft sind, also nach der Schleife. Stünde das `return -1;` in der Schleife, würde
  die Suche schon nach dem ersten Fehlversuch aufgeben. Die -1 eignet sich als Ergebnis, weil sie nie ein gültiger
  Index ist. Die 0 dagegen ist der Index des ersten Elements. Der Aufrufer könnte „nicht gefunden“ und „gefunden auf
  Index 0“ dann nicht unterscheiden.
```

## Varianten der linearen Suche

```aufgabe
id: su-var-check-rueckwaerts
titel: Rückwärts durch ein Array
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      int[] a = {10, 20, 30};
      for (int i = a.length - 1; i >= 0; i--) {
          System.out.print(i + ":" + a[i] + " ");
      }
      System.out.println();
    loesung: |
      2:30 1:20 0:10 
    trim: true
    fehler:
      - wert: "3:30 2:20 1:10"
        meldung: Der Start ist `a.length - 1`, also 2. Ein Index 3 existiert bei Länge 3 nicht.
      - wert: "2:30 1:20"
        meldung: 'Die Bedingung lautet `i >= 0`. Auch Index 0 kommt noch dran.'
hinweise:
  - Der letzte Index ist `a.length - 1`. Die Schleife zählt herunter, solange `i >= 0` gilt.
loesung: |
  `i` läuft über 2, 1 und 0. Bei `i = -1` ist `-1 >= 0` falsch.
  ---
  Ausgegeben werden Index und Wert: `2:30 1:20 0:10`.
```

Die Grundform aus [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) ist eine
Schablone. Aufgabenblätter, Quiz und Programmiertest verlangen fast nie genau diese Form, sondern eine kleine
Abwandlung. Fünf Abwandlungen kommen immer wieder vor:

1. das **letzte** Vorkommen statt des ersten finden,
2. erst **ab einer bestimmten Stelle** suchen und so alle Treffer nacheinander finden,
3. nicht nach einem festen Wert, sondern nach einer **Bedingung** suchen, etwa „die erste negative Zahl“,
4. die Treffer **zählen** statt nur den ersten zu melden,
5. eine **Folge** von mehreren Werten finden, die direkt hintereinander stehen.

Bei jeder Variante stellst du dir dieselben zwei Fragen. Erstens: In welcher Richtung läuft die Schleife, und wo
beginnt sie? Zweitens: Darf die Methode beim ersten Treffer aufhören, oder muss sie alle Elemente ansehen?

### Das letzte Vorkommen

Kommt ein Wert mehrmals vor, liefert die Grundform den kleinsten Index. Für den größten Index gibt es zwei Wege. Den
ersten kennst du aus [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen):
von vorne suchen, jeden Treffer in einer Variable merken und erst am Ende zurückgeben. Diese Fassung sieht aber
**immer** alle Elemente an. Der zweite Weg ist schneller: Man sucht von hinten und hört beim ersten Treffer auf.

:::beispiel[Von hinten suchen]
```java
public static int sucheLetzte(int[] daten, int schluessel) {
    for (int i = daten.length - 1; i >= 0; i--) {
        if (daten[i] == schluessel) {
            return i;
        }
    }
    return -1;
}
```

Nur der Schleifenkopf ist anders als bei der Grundform. Er beginnt beim letzten Index `daten.length - 1`, läuft
mit `i--` nach vorne und hört erst auf, wenn auch Index 0 geprüft ist. Darum lautet die Bedingung `i >= 0`.

Aufruf mit `{7, 2, 7, 4}` und dem Suchwert 7:

|`i`|`daten[i]`|`daten[i] == 7`|Folge|
|---|---|---|---|
|3|4|false|weiter|
|2|7|true|`return 2`|

Die Methode liefert **2** nach nur 2 Vergleichen. Die Indizes bleiben dieselben wie beim Lesen von vorne. Nur die
Reihenfolge, in der sie geprüft werden, ist umgekehrt. Index 2 ist also nicht „die zweite Stelle von hinten“,
sondern ganz normal der dritte Platz des Arrays.
:::

:::achtung[Index 0 vergessen]
```java
for (int i = daten.length - 1; i > 0; i--) {   // falsch: > statt >=
```

Mit `i > 0` endet die Schleife, bevor Index 0 geprüft wird. Für `{7, 2, 3}` und den Suchwert 7 prüft sie nur die
Indizes 2 und 1 und liefert -1, obwohl die 7 ganz vorne steht. Rückwärts heißt die Bedingung immer `i >= 0`.
:::

```aufgabe
id: su-var-erste-letzte
titel: Erstes und letztes Vorkommen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  `suche` ist die Grundform (erstes Vorkommen), `sucheLetzte` die Suche von hinten aus dem Beispiel. Was gibt das
  Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Beide {
          public static int suche(int[] daten, int schluessel) {
              for (int i = 0; i < daten.length; i++) {
                  if (daten[i] == schluessel) {
                      return i;
                  }
              }
              return -1;
          }

          public static int sucheLetzte(int[] daten, int schluessel) {
              for (int i = daten.length - 1; i >= 0; i--) {
                  if (daten[i] == schluessel) {
                      return i;
                  }
              }
              return -1;
          }

          public static void main(String[] args) {
              int[] d = {6, 3, 6, 1, 3, 6};
              System.out.println(suche(d, 6) + " " + sucheLetzte(d, 6));
              System.out.println(suche(d, 3) + " " + sucheLetzte(d, 3));
              System.out.println(sucheLetzte(d, 1));
              System.out.println(sucheLetzte(d, 9));
          }
      }
    loesung: |
      0 5
      1 4
      3
      -1
    fehler:
      - wert: "0 0\n1 1\n2\n-1"
        meldung: Die Schleife läuft rückwärts, aber die Indizes ändern sich dadurch nicht. Der letzte Platz hat weiterhin den Index 5, nicht 0.
      - wert: "5 0\n4 1\n3\n-1"
        meldung: Du hast die beiden Methoden vertauscht. `suche` beginnt vorne und liefert den kleinsten Index.
hinweise:
  - Notiere die Indizes 0 bis 5 über den Werten. `sucheLetzte` beginnt bei Index 5.
loesung: |
  **Ansatz:** Für jeden Suchwert alle Stellen notieren. `suche` nimmt die kleinste, `sucheLetzte` die größte.
  ---
  Die 6 steht auf 0, 2 und 5, also `0 5`. Die 3 steht auf 1 und 4, also `1 4`. Die 1 steht nur auf 3. Die 9 fehlt, also -1.
```

### Ab einer Startposition suchen

Manchmal soll die Suche nicht bei Index 0 beginnen. Dafür bekommt die Methode einen dritten Parameter `start`. Die
Schleife beginnt dann einfach bei `start` statt bei 0:

```java
public static int sucheAb(int[] daten, int schluessel, int start) {
    for (int i = start; i < daten.length; i++) {
        if (daten[i] == schluessel) {
            return i;
        }
    }
    return -1;
}
```

Mit dieser Methode findet man **alle** Treffer nacheinander. Man sucht zuerst ab 0. Bei einem Treffer auf Index
`pos` sucht man danach ab `pos + 1` weiter, also direkt hinter dem letzten Treffer.

:::beispiel[Alle Stellen eines Werts ausgeben]
```java
int[] d = {4, 1, 4, 4, 9};
int pos = sucheAb(d, 4, 0);
while (pos != -1) {
    System.out.print(pos + " ");
    pos = sucheAb(d, 4, pos + 1);
}
System.out.println();
```

|Aufruf|Ergebnis `pos`|Ausgabe|
|---|---|---|
|`sucheAb(d, 4, 0)`|0|`0 `|
|`sucheAb(d, 4, 1)`|2|`2 `|
|`sucheAb(d, 4, 3)`|3|`3 `|
|`sucheAb(d, 4, 4)`|-1|Schleife endet|

Die Ausgabe ist `0 2 3`. Beim letzten Aufruf beginnt die Suche bei Index 4, dort steht 9. Danach endet die
Schleife in `sucheAb`, und die Methode liefert -1. Damit ist auch die `while`-Schleife in `main` zu Ende.

Was passiert, wenn der letzte Treffer ganz am Ende steht, etwa auf Index 4? Dann ruft man `sucheAb(d, 4, 5)` auf.
Die Schleife prüft `5 < 5`, das ist sofort falsch. Es gibt keinen Zugriff auf `d[5]` und keinen Absturz, die
Methode liefert einfach -1.
:::

:::achtung[Ab pos statt ab pos + 1 weitersuchen]
```java
pos = sucheAb(d, 4, pos);        // falsch: findet immer wieder denselben Treffer
```

Die Suche beginnt genau auf dem Treffer, den sie gerade gefunden hat. Sie liefert also wieder `pos`. Für
`{4, 1, 4, 4, 9}` gibt das Programm endlos `0 0 0 …` aus. Die Weitersuche muss **hinter** dem letzten Treffer
beginnen, also bei `pos + 1`.
:::

```aufgabe
id: su-var-ab-trace
titel: Treffer nacheinander zählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  `sucheAb` ist die Methode aus dieser Lektion. Fülle die Trace-Tabelle für diesen Code aus. Die erste Zeile ist
  vorgegeben.

  ```java
  int[] d = {5, 2, 5, 5, 8, 5};
  int pos = sucheAb(d, 5, 0);
  int anzahl = 0;
  while (pos != -1) {
      anzahl++;
      pos = sucheAb(d, 5, pos + 1);
  }
  ```
teile:
  - typ: trace
    spalten: [pos, anzahl]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4]
    vorgabe: 1
    loesung: [[0, 0], [2, 1], [3, 2], [5, 3], [-1, 4]]
    fehler:
      - wert: ["0", "0", "0", "1", "0", "2", "0", "3", "0", "4"]
        meldung: Die Weitersuche beginnt bei `pos + 1`, also hinter dem letzten Treffer. Sie findet darum jedes Mal die nächste 5, nicht wieder dieselbe.
      - wert: ["0", "0", "2", "1", "3", "2", "5", "3", "-1", "3"]
        meldung: Im vierten Durchlauf wird zuerst `anzahl++` ausgeführt und erst danach gesucht. Der Treffer auf Index 5 wird also noch gezählt.
hinweise:
  - Die 5 steht auf den Indizes 0, 2, 3 und 5. Jeder Aufruf liefert den nächsten dieser Indizes ab dem Start.
  - In jedem Durchlauf wird erst gezählt, dann ab `pos + 1` weitergesucht.
gefuehrt:
  - text: Vor der Schleife wird `sucheAb(d, 5, 0)` aufgerufen. Welchen Wert hat `pos`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Schon `d[0]` ist 5. Die Suche liefert 0.
  - text: Im ersten Durchlauf wird `anzahl` zu 1 und dann `sucheAb(d, 5, 1)` aufgerufen. Welchen Wert hat `pos` danach?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Ab Index 1 ist die nächste 5 auf Index 2.
  - text: Nach dem dritten Durchlauf ist `pos = 5`. Im vierten Durchlauf wird ab Index 6 gesucht. Warum liefert diese Suche -1?
    erklaerung: Das Array hat die Länge 6. Die Schleife in `sucheAb` prüft `6 < 6`, das ist falsch. Sie läuft keinmal, die Methode liefert -1.
  - text: Welchen Wert hat `anzahl` am Ende?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Jeder der vier Treffer wurde einmal gezählt.
loesung: |
  **Ansatz:** Die Stellen der 5 sind 0, 2, 3 und 5. Jeder Aufruf von `sucheAb` springt zur nächsten dieser Stellen.
  ---
  Durchläufe: `anzahl` wird 1, 2, 3, 4. `pos` wird danach 2, 3, 5 und zuletzt -1.
  ---
  Bei `pos = -1` endet die `while`-Schleife. Probe: Die 5 kommt viermal vor, `anzahl` ist 4.
```

### Nach einer Bedingung suchen und zählen

Die Grundform vergleicht mit `daten[i] == schluessel`. An dieser Stelle darf aber **jede Bedingung** stehen. Die
erste negative Zahl findet `if (daten[i] < 0)`, die erste gerade Zahl findet `if (daten[i] % 2 == 0)`. Der Rest
der Methode bleibt gleich: Beim ersten Treffer `return i;`, nach der Schleife `return -1;`.

Beim **Zählen** ändert sich mehr. Hier darf die Methode beim ersten Treffer nicht aufhören, denn spätere Treffer
müssen auch gezählt werden. Statt `return i;` steht in der Schleife `anzahl++;`, und erst nach der Schleife kommt
`return anzahl;`. Gibt es keinen Treffer, ist das Ergebnis 0, nicht -1. Eine Anzahl von 0 ist ja ein sinnvolles
Ergebnis.

```aufgabe
id: su-var-bedingung
titel: Der erste Wert über einer Grenze
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Methode liefert den Index des ersten Elements, das **größer** als `grenze` ist, sonst -1:

  ```java
  public static int ersteUeber(int[] daten, int grenze) {
      for (int i = 0; i < daten.length; i++) {
          if (daten[i] > grenze) {
              return i;
          }
      }
      return -1;
  }
  ```

  Was liefert der Aufruf `ersteUeber(new int[]{8, 10, 3, 15, 21}, 10)`?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: '`>` heißt „echt größer“. Die 10 auf Index 1 ist gleich der Grenze, nicht größer. Sie zählt nicht.'
      - wert: "15"
        meldung: Gefragt ist der Index, nicht der Wert. Die Methode liefert `i`.
hinweise:
  - Prüfe für jedes Element der Reihe nach, ob es echt größer als 10 ist.
loesung: |
  **Ansatz:** Die Bedingung `daten[i] > 10` der Reihe nach prüfen.
  ---
  8 nein, 10 nein (gleich, nicht größer), 3 nein, 15 ja. Die 15 steht auf Index 3, also liefert die Methode 3.
```

```aufgabe
id: su-var-welche-alle
titel: Wer muss alles ansehen?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Alle vier Methoden bekommen das Array `{3, 9, 3, 9}` und den Suchwert 9. Welche Methode muss dabei **alle vier**
  Elemente ansehen?
teile:
  - typ: auswahl
    optionen:
      - 'die Grundform `suche` (erstes Vorkommen von vorne)'
      - '`sucheLetzte` (letztes Vorkommen, von hinten mit `return`)'
      - 'das letzte Vorkommen von vorne mit einer Variable `pos`, die jeden Treffer überschreibt'
      - '`enthaelt`, die `suche` aufruft und mit -1 vergleicht'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Grundform findet die erste 9 auf Index 1 und beendet die Methode mit `return`. Die Indizes 2 und 3 sieht sie nie an.
      - wert: 1
        meldung: Die Suche von hinten prüft zuerst Index 3. Dort steht schon eine 9, also endet sie nach einem einzigen Vergleich.
      - wert: 3
        meldung: '`enthaelt` ruft die Grundform auf. Diese endet bei Index 1.'
hinweise:
  - Überlege für jede Methode, wann sie aufhört. Hat sie ein `return` in der Schleife?
  - Eine Methode, die nur eine Variable überschreibt, weiß nie, ob noch ein späterer Treffer kommt.
loesung: |
  **Ansatz:** Für jede Methode prüfen, ob sie beim ersten Treffer endet.
  ---
  Die Grundform und `enthaelt` enden bei Index 1, die Suche von hinten bei Index 3. Alle drei haben ein `return` in der Schleife.
  ---
  Die Fassung mit `pos` hat kein `return` in der Schleife. Sie kann nicht wissen, ob noch ein späterer Treffer kommt, und muss bis zum Ende laufen. Sie sieht alle vier Elemente an.
```

### Eine Folge von Werten suchen

In Programmiertests kam eine **Teilfolgensuche** vor, etwa im Wintersemester 2020/21 und im Probetest vom
Jänner 2023. Gesucht ist nicht ein einzelner Wert, sondern
mehrere Werte, die direkt hintereinander stehen. Zum Beispiel: Wo steht in `{2, 3, 4, 3, 1, 5}` zum ersten Mal die
Folge `3, 1`? Die gesuchte Folge steht in einem zweiten Array, dem **Muster**.

Die Idee: Für jede mögliche Startstelle `i` prüft eine innere Schleife, ob alle Werte des Musters ab `i` passen.

:::beispiel[Die erste Stelle einer Folge]
```java
public static int findeFolge(int[] daten, int[] muster) {
    for (int i = 0; i <= daten.length - muster.length; i++) {
        boolean passt = true;
        for (int j = 0; j < muster.length; j++) {
            if (daten[i + j] != muster[j]) {
                passt = false;
            }
        }
        if (passt) {
            return i;
        }
    }
    return -1;
}
```

- Die äußere Schleife probiert jede Startstelle `i`. Die letzte sinnvolle Startstelle ist
  `daten.length - muster.length`. Weiter hinten passt das Muster nicht mehr ganz ins Array.
- `passt` ist eine Variable vom Typ `boolean`. Sie beginnt bei jeder Startstelle mit `true`. Sobald ein Wert nicht
  übereinstimmt, wird sie `false`.
- Die innere Schleife vergleicht `daten[i + j]` mit `muster[j]`. `j` zählt die Stellen im Muster, `i + j` ist die
  passende Stelle im Array.
- Ist nach der inneren Schleife `passt` noch `true`, haben alle Werte gestimmt. Dann ist `i` die gesuchte Stelle.

Für `daten = {2, 3, 4, 3, 1, 5}` und `muster = {3, 1}` ist die letzte Startstelle `6 - 2 = 4`.

|`i`|verglichen|passt|
|---|---|---|
|0|`2` mit `3`|false|
|1|`3` mit `3`, `4` mit `1`|false|
|2|`4` mit `3`|false|
|3|`3` mit `3`, `1` mit `1`|true|

Die Methode liefert **3**. Die Tabelle nennt die Vergleiche bis zur ersten Abweichung. Die innere Schleife läuft
zwar immer bis zum Ende des Musters weiter, am Wert von `passt` ändert das aber nichts mehr.
:::

:::achtung[Die Startstelle läuft bis zum Ende]
```java
for (int i = 0; i < daten.length; i++) {        // falsch
```

Suche mit dieser Grenze in `{2, 3, 4, 3, 1, 5}` nach dem Muster `{1, 7}`. Es gibt keinen Treffer, also probiert die
äußere Schleife auch die Startstelle 5. Dort vergleicht die innere Schleife für `j = 1` den Wert `daten[5 + 1]`,
also `daten[6]`. Das Array hat nur die Indizes 0 bis 5. Java bricht ab mit
`ArrayIndexOutOfBoundsException: Index 6 out of bounds for length 6`. Die letzte Startstelle ist
`daten.length - muster.length`, darum steht in der Bedingung `<=`.
:::

```aufgabe
id: su-var-folge-ausgabe
titel: Folgen suchen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  `findeFolge` ist die Methode aus dem Beispiel. Was gibt der Code aus?

  ```java
  int[] d = {1, 2, 1, 2, 3};
  System.out.println(findeFolge(d, new int[]{1, 2, 3}));
  System.out.println(findeFolge(d, new int[]{2, 1}));
  System.out.println(findeFolge(d, new int[]{3, 1}));
  System.out.println(findeFolge(d, new int[]{1, 2, 1, 2, 3, 4}));
  ```
teile:
  - typ: ausgabe
    codeAnzeigen: false
    code: |
      public class Folgen {
          public static int findeFolge(int[] daten, int[] muster) {
              for (int i = 0; i <= daten.length - muster.length; i++) {
                  boolean passt = true;
                  for (int j = 0; j < muster.length; j++) {
                      if (daten[i + j] != muster[j]) {
                          passt = false;
                      }
                  }
                  if (passt) {
                      return i;
                  }
              }
              return -1;
          }

          public static void main(String[] args) {
              int[] d = {1, 2, 1, 2, 3};
              System.out.println(findeFolge(d, new int[]{1, 2, 3}));
              System.out.println(findeFolge(d, new int[]{2, 1}));
              System.out.println(findeFolge(d, new int[]{3, 1}));
              System.out.println(findeFolge(d, new int[]{1, 2, 1, 2, 3, 4}));
          }
      }
    loesung: |
      2
      1
      -1
      -1
    fehler:
      - wert: "0\n1\n-1\n-1"
        meldung: Ab Index 0 stimmen nur die ersten zwei Werte (1 und 2), der dritte ist 1 statt 3. Eine Startstelle zählt erst, wenn **alle** Werte des Musters passen.
      - wert: "2\n1\n-1"
        meldung: 'Ist das Muster länger als das Array, ist `daten.length - muster.length` negativ, hier `5 - 6 = -1`. Die äußere Schleife läuft dann keinmal, es gibt keinen Absturz. Die Methode liefert -1.'
hinweise:
  - Schreib die Indizes über `d`. Prüfe jede Startstelle, bis alle Werte des Musters passen.
  - Die letzte Startstelle ist `d.length - muster.length`. Was passiert, wenn diese Zahl negativ ist?
loesung: |
  **Ansatz:** Für jedes Muster die Startstellen von 0 bis `5 - muster.length` probieren.
  ---
  `{1, 2, 3}`: Ab 0 steht `1, 2, 1`, ab 1 steht `2, 1, 2`, ab 2 steht `1, 2, 3`. Treffer bei 2. `{2, 1}`: Schon ab 1 steht `2, 1`. Treffer bei 1.
  ---
  `{3, 1}`: Die 3 steht nur auf Index 4, danach kommt nichts mehr. Ergebnis -1. Das letzte Muster ist länger als `d`. Die Schleife läuft keinmal, Ergebnis -1.
```

```aufgabe
id: su-var-letzte-code
titel: Das letzte Vorkommen programmieren
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Implementiere `int sucheLetzte(int[] daten, int schluessel)`. Die Methode liefert den **größten** Index, an dem
  `schluessel` steht, und -1, wenn der Wert nicht vorkommt. Sie soll von hinten suchen und beim ersten Treffer
  aufhören.

  Vorbedingung: `daten != null`. Leere Arrays sind erlaubt.
teile:
  - typ: code
    vorlage: |
      public class Letzte {
          public static int sucheLetzte(int[] daten, int schluessel) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Letzte {
          public static int sucheLetzte(int[] daten, int schluessel) {
              for (int i = daten.length - 1; i >= 0; i--) {
                  if (daten[i] == schluessel) {
                      return i;
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: "sucheLetzte(new int[]{4, 9, 4, 2}, 4)", erwartet: "2", beschreibung: "zwei Vorkommen" }
      - { aufruf: "sucheLetzte(new int[]{8, 1, 3}, 8)", erwartet: "0", beschreibung: "Treffer auf Index 0" }
      - { aufruf: "sucheLetzte(new int[]{8, 1, 3}, 5)", erwartet: "-1", beschreibung: "kein Treffer" }
      - { aufruf: "sucheLetzte(new int[0], 5)", erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: "sucheLetzte(new int[]{-1, -1}, -1)", erwartet: "1", versteckt: true }
    regeln: { keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Gesucht ist der **größte** Index. Beginnt deine Schleife beim letzten Index `daten.length - 1`?" }
      - { wert: 2, meldung: "Index 0 muss auch geprüft werden. Rückwärts lautet die Bedingung `i >= 0`, nicht `i > 0`." }
      - { wert: 3, meldung: "Wenn der Wert fehlt, darf kein Zugriff außerhalb des Arrays passieren. Startet deine Schleife bei `daten.length` statt bei `daten.length - 1`?" }
hinweise:
  - Der Schleifenkopf beginnt beim letzten Index und zählt mit `i--` herunter.
  - Die Bedingung muss auch Index 0 noch zulassen. Das `return -1;` steht nach der Schleife.
loesung: |
  **Ansatz:** Grundform mit umgedrehtem Schleifenkopf. Der erste Treffer von hinten ist der größte Index.
  ---
  ```java
  for (int i = daten.length - 1; i >= 0; i--) {
      if (daten[i] == schluessel) {
          return i;
      }
  }
  return -1;
  ```
  ---
  Probe: Für `{4, 9, 4, 2}` und 4 prüft die Schleife zuerst Index 3 (2), dann Index 2 (4). Sie liefert 2. Beim leeren Array ist `-1 >= 0` sofort falsch, das Ergebnis ist -1.
```

```aufgabe
id: su-var-folge-zaehlen
titel: Wie oft kommt die Folge vor?
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Idee nach der Teilfolgensuche (findMatches) im Programmiertest PT16 WS 2020/21 und im Probetest vom 26.01.2023, eindimensional umformuliert
angabe: |
  Implementiere `int zaehleFolge(int[] daten, int[] muster)`. Die Methode zählt, an wie vielen Startstellen das
  ganze Muster in `daten` steht. Vorkommen dürfen sich überlappen.

  Vorbedingung: `daten != null`, `muster != null` und `muster.length >= 1`.

  Beispiele:

  - `zaehleFolge({1, 1, 1}, {1, 1})` liefert 2, denn das Muster steht ab Index 0 und ab Index 1.
  - `zaehleFolge({4, 7, 4, 7}, {4, 7})` liefert 2.
  - `zaehleFolge({5}, {5, 6})` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Folge {
          public static int zaehleFolge(int[] daten, int[] muster) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Folge {
          public static int zaehleFolge(int[] daten, int[] muster) {
              int anzahl = 0;
              for (int i = 0; i <= daten.length - muster.length; i++) {
                  boolean passt = true;
                  for (int j = 0; j < muster.length; j++) {
                      if (daten[i + j] != muster[j]) {
                          passt = false;
                      }
                  }
                  if (passt) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "zaehleFolge(new int[]{1, 1, 1}, new int[]{1, 1})", erwartet: "2", beschreibung: "überlappende Vorkommen" }
      - { aufruf: "zaehleFolge(new int[]{4, 7, 4, 7}, new int[]{4, 7})", erwartet: "2", beschreibung: "zwei getrennte Vorkommen" }
      - { aufruf: "zaehleFolge(new int[]{5}, new int[]{5, 6})", erwartet: "0", beschreibung: "Muster länger als das Array" }
      - { aufruf: "zaehleFolge(new int[]{2, 3, 2, 3, 2}, new int[]{2, 3, 2})", erwartet: "2", beschreibung: "Überlappung in der Mitte" }
      - { aufruf: "zaehleFolge(new int[]{9, 8, 9}, new int[]{9})", erwartet: "2", versteckt: true }
      - { aufruf: "zaehleFolge(new int[0], new int[]{1})", erwartet: "0", versteckt: true }
      - { aufruf: "zaehleFolge(new int[]{1, 2, 3}, new int[]{2, 3})", erwartet: "1", versteckt: true }
    regeln: { keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Vorkommen dürfen sich überlappen. Springst du nach einem Treffer um die Musterlänge weiter? Jede Startstelle muss einzeln geprüft werden." }
      - { wert: 3, meldung: "Ist das Muster länger als das Array, darf kein Zugriff außerhalb passieren. Die letzte Startstelle ist `daten.length - muster.length`." }
      - { wert: 4, meldung: "Startet `passt` bei jeder Startstelle neu mit `true`? Sonst wirkt eine frühere Abweichung weiter." }
hinweise:
  - Nimm `findeFolge` aus dem Beispiel als Vorlage. Statt beim ersten Treffer `return i;` zählst du mit `anzahl++` weiter.
  - Die äußere Schleife läuft von 0 bis einschließlich `daten.length - muster.length`. `passt` wird in jedem äußeren Durchlauf neu auf `true` gesetzt.
loesung: |
  **Ansatz:** Teilfolgensuche wie im Beispiel, aber zählen statt beim ersten Treffer aufzuhören.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i <= daten.length - muster.length; i++) {
      boolean passt = true;
      for (int j = 0; j < muster.length; j++) {
          if (daten[i + j] != muster[j]) {
              passt = false;
          }
      }
      if (passt) {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Probe mit `{2, 3, 2, 3, 2}` und `{2, 3, 2}`: Die Startstellen sind 0, 1 und 2. Ab 0 steht `2, 3, 2` (Treffer), ab 1 steht `3, 2, 3`, ab 2 steht `2, 3, 2` (Treffer). Ergebnis 2.
```

```aufgabe
id: su-var-kte-von-hinten
titel: Das k-te Vorkommen von hinten
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: nach Aufgabenblatt 1, WS 2023, Aufgabe 2 (k-tes Vorkommen von hinten), als Methode umgebaut
angabe: |
  Implementiere `int kteVonHinten(String text, char zeichen, int k)`. Die Methode liefert den Index des `k`-ten
  Vorkommens von `zeichen` in `text`, gezählt **vom Ende her**. Kommt das Zeichen seltener als `k`-mal vor, liefert
  sie -1. Groß- und Kleinbuchstaben sind verschiedene Zeichen.

  Vorbedingung: `text != null` und `k >= 1`. Von der Klasse `String` darfst du nur `charAt` und `length` verwenden.

  Beispiel: In `"Rhabarberkuchen"` steht das kleine `r` auf den Indizes 5 und 8. Darum liefert
  `kteVonHinten("Rhabarberkuchen", 'r', 1)` den Index 8 und `kteVonHinten("Rhabarberkuchen", 'r', 2)` den Index 5.
  Für `k = 3` ist das Ergebnis -1, denn das große `R` zählt nicht.
teile:
  - typ: code
    vorlage: |
      public class Hinten {
          public static int kteVonHinten(String text, char zeichen, int k) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Hinten {
          public static int kteVonHinten(String text, char zeichen, int k) {
              int gefunden = 0;
              for (int i = text.length() - 1; i >= 0; i--) {
                  if (text.charAt(i) == zeichen) {
                      gefunden++;
                      if (gefunden == k) {
                          return i;
                      }
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: 'kteVonHinten("Rhabarberkuchen", ''r'', 1)', erwartet: "8", beschreibung: "erstes von hinten" }
      - { aufruf: 'kteVonHinten("Rhabarberkuchen", ''r'', 2)', erwartet: "5", beschreibung: "zweites von hinten" }
      - { aufruf: 'kteVonHinten("Rhabarberkuchen", ''r'', 3)', erwartet: "-1", beschreibung: "großes R zählt nicht" }
      - { aufruf: 'kteVonHinten("", ''a'', 1)', erwartet: "-1", beschreibung: "leerer Text" }
      - { aufruf: 'kteVonHinten("aaaa", ''a'', 4)', erwartet: "0", versteckt: true }
      - { aufruf: 'kteVonHinten("xyz", ''x'', 2)', erwartet: "-1", versteckt: true }
    regeln: { keineHilfsmethoden: true, erlaubteApi: ["String.charAt", "String.length"] }
    fehler:
      - { wert: 1, meldung: "Gezählt wird vom Ende her. Läuft deine Schleife von `text.length() - 1` nach unten?" }
      - { wert: 2, meldung: "Du brauchst einen Zähler für die Treffer. Erst wenn er `k` erreicht, ist die aktuelle Stelle das Ergebnis." }
      - { wert: 3, meldung: "`'R'` und `'r'` sind verschiedene Zeichen mit verschiedenen Codes. Vergleiche mit `==` ohne Umwandlung." }
      - { wert: "erlaubteApi", meldung: "Nur `charAt` und `length` sind erlaubt. `lastIndexOf` oder `toLowerCase` sind in dieser Aufgabe verboten." }
hinweise:
  - 'Kombiniere die Suche von hinten mit dem Trefferzähler aus der Aufgabe „Das zweite Vorkommen eines Worts“ in [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).'
  - Schleife von `text.length() - 1` bis 0. Bei jedem Treffer `gefunden++`, und wenn `gefunden == k` ist, `return i;`.
loesung: |
  **Ansatz:** Suche von hinten mit einem Zähler. Die Methode endet beim `k`-ten Treffer.
  ---
  ```java
  int gefunden = 0;
  for (int i = text.length() - 1; i >= 0; i--) {
      if (text.charAt(i) == zeichen) {
          gefunden++;
          if (gefunden == k) {
              return i;
          }
      }
  }
  return -1;
  ```
  ---
  Probe mit `"Rhabarberkuchen"` und `'r'`: Von hinten trifft die Schleife zuerst Index 8 (Zähler 1), dann Index 5 (Zähler 2). Index 0 enthält `'R'` und zählt nicht. Für `k = 3` läuft die Schleife durch und liefert -1.
```

## Suchvarianten im Quiz: Flag, Wächter und zwei Indizes

```aufgabe
id: su-quiz-check-bedingung
titel: Eine Bedingung mit NICHT und UND
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: ausgabe
    code: |
      boolean gefunden = true;
      int i = 1;
      System.out.println(!gefunden && i < 3);
      gefunden = false;
      System.out.println(!gefunden && i < 3);
    loesung: |
      false
      true
    fehler:
      - wert: "true\ntrue"
        meldung: '`!gefunden` dreht den Wert um. Bei `gefunden = true` ist `!gefunden` falsch, und ein `&&` mit falscher linker Seite ist immer falsch.'
hinweise:
  - Werte zuerst `!gefunden` aus, dann `i < 3`, dann das `&&`.
loesung: |
  Erste Zeile: `!true` ist `false`. Damit ist das ganze `&&` falsch.
  ---
  Zweite Zeile: `!false` ist `true`, und `1 < 3` ist `true`. Ergebnis `true`.
```

Im Quiz bekommst du eine **fertige, ungewohnte Suchmethode** und vier Aussagen, die du als richtig oder falsch
beurteilst. Es gibt Teilpunkte, aber Fehler kosten viel: Im TUWEL-Test vom 20.01.2022 brachten drei richtige und
eine falsche Antwort nur 1 von 2 Punkten. In den vorliegenden Tests kamen unter anderem drei Bauarten vor: Suchen
mit einer **Flag-Variable**, mit einem **Wächter** und mit **zwei Indizes**. Die Aussagen drehten sich meist um
vier Fragen.

1. **Welcher Treffer wird geliefert?** Kommt der Suchwert mehrmals vor, ist es dann der kleinste Index, der größte
   oder je nach Array mal der eine, mal der andere?
2. **Was passiert ohne Treffer?** Wird wirklich -1 geliefert, oder ein falscher Index, oder stürzt die Methode ab?
3. **Endet die Methode immer?** Das Fachwort dafür ist **Terminierung**: Eine Methode **terminiert**, wenn sie
   nach endlich vielen Schritten fertig ist. Prüfe besonders das leere Array und Arrays der Länge 1.
4. **Wie lange dauert es?** Im Quiz steht dann etwa „Die Laufzeit im schlechtesten Fall liegt in O(n)“.

Zur vierten Frage vorab das Nötigste. `n` ist die Länge des Arrays. „Die Laufzeit liegt in O(n)“ (gelesen „O von n“)
heißt: Im schlechtesten Fall wächst die Zahl der Schritte höchstens im gleichen Verhältnis wie `n`. Doppelt so viele
Elemente bedeuten also höchstens etwa doppelt so viele Schritte. Jede Suche, die jedes Element höchstens einmal
ansieht, liegt in O(n). Genauer lernst du das in [18.6 Wie viel Arbeit macht eine Suche? Vergleiche zählen](/lernen/ep1/suchen/wie-viel-arbeit-macht-eine-suche-vergleiche-zaehlen).

:::merke[Fünf Testfälle für jede Suchvariante]
Spiele jede unbekannte Suche mit diesen Arrays durch, am besten mit drei oder vier Elementen:

1. Der Suchwert steht **ganz vorne**, auf Index 0.
2. Der Suchwert steht **ganz hinten**, auf dem letzten Index.
3. Der Suchwert kommt **zweimal** vor.
4. Der Suchwert kommt **nicht** vor.
5. Das Array ist **leer** (Länge 0), sofern die Vorbedingung das erlaubt.

Eine Aussage ist falsch, sobald **ein einziges** dieser Arrays ihr widerspricht. Für „richtig“ musst du dagegen
begründen, warum sie für **jedes** erlaubte Array stimmt.
:::

```aufgabe
id: su-quiz-check-gegenbeispiel
titel: Richtig oder falsch?
niveau: 1
art: check
angabe: |
  Eine Quiz-Aussage behauptet, die Methode liefere immer den kleinsten Index des Suchwerts. Du findest ein Array, für
  das die Aussage stimmt, und ein anderes, für das sie nicht stimmt. Wie beurteilst du die Aussage?
teile:
  - typ: auswahl
    optionen: ['falsch', 'richtig', 'teilweise richtig, das Quiz gibt dafür halbe Punkte']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '„Immer“ heißt: für jedes erlaubte Array. Ein einziges Array, für das es nicht stimmt, macht die Aussage falsch.'
      - wert: 2
        meldung: Jede einzelne Aussage ist entweder richtig oder falsch. Teilpunkte gibt es nur für die ganze Frage mit ihren vier Aussagen, nie für eine halb richtige Aussage.
loesung: |
  Die Aussage behauptet etwas für jedes Array. Ein Gegenbeispiel widerlegt sie.
  ---
  Dass sie für ein anderes Array stimmt, ändert daran nichts. Die Aussage ist falsch.
```

### Suche mit einer Flag-Variable

Eine **Flag-Variable** (englisch *flag*: Fahne, Signal) ist eine Variable vom Typ `boolean`, die sich etwas merkt.
Sie beginnt mit `false` und wird auf `true` gesetzt, sobald das Ereignis eintritt. Bei der Suche merkt sie sich:
„Ich habe den Wert schon gefunden.“ Die Schleife fragt die Flag in ihrer Bedingung ab und hört auf, sobald sie
`true` ist. So kommt die Suche ohne `return` in der Schleife aus.

:::beispiel[Eine Suche mit Flag]
`NOT_FOUND` ist wie in [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden)
die Konstante mit dem Wert -1.

```java
public static int sucheMitFlag(int[] daten, int schluessel) {
    boolean gefunden = false;
    int i = 0;
    while (i < daten.length && !gefunden) {
        if (daten[i] == schluessel) {
            gefunden = true;
        }
        i++;
    }
    int ergebnis = NOT_FOUND;
    if (gefunden) {
        ergebnis = i - 1;
    }
    return ergebnis;
}
```

- Die Schleife läuft, solange `i` ein gültiger Index ist **und noch nichts gefunden** ist. `!gefunden` liest man
  „nicht gefunden“.
- Beim Treffer wird `gefunden` auf `true` gesetzt. Danach läuft der Rumpf aber noch zu Ende, und `i++` erhöht `i`
  ein letztes Mal. Erst dann prüft die Schleife ihre Bedingung und hört auf.
- Darum steht `i` nach der Schleife **eins hinter** dem Treffer. Die Methode liefert `i - 1`. Ohne Treffer bleibt
  `ergebnis` auf `NOT_FOUND`.

Aufruf mit `{8, 3, 5}` und dem Suchwert 3:

|`i` vorher|`daten[i]`|Treffer?|`gefunden` danach|`i` danach|
|---|---|---|---|---|
|0|8|nein|false|1|
|1|3|ja|true|2|

Jetzt ist `!gefunden` falsch, und die Schleife endet. `gefunden` ist `true`, also wird `ergebnis = 2 - 1 = 1`.
Das ist der Index der 3. Weil die Schleife beim ersten Treffer endet, liefert diese Variante wie die Grundform den
**kleinsten** Index. Fehlt der Suchwert, läuft `i` bis `daten.length`, `gefunden` bleibt `false`, und die Methode
liefert -1.
:::

:::achtung[i statt i - 1 zurückgeben]
Wer in der Suche mit Flag `ergebnis = i;` statt `ergebnis = i - 1;` schreibt, liefert bei jedem Treffer einen Index
zu viel. Für `{8, 3, 5}` und
den Suchwert 3 käme 2 heraus statt 1. Steht der Suchwert auf dem letzten Platz, etwa die 5, käme sogar 3 heraus.
Das ist die Länge des Arrays und kein gültiger Index. Frage dich bei jeder Suche mit Flag: Wird `i` nach dem Treffer
noch einmal erhöht?
:::

```aufgabe
id: su-quiz-flag-ausgabe
titel: Die Suche mit Flag ausführen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  `sucheMitFlag` ist die Methode aus dem Beispiel. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Flagge {
          private static final int NOT_FOUND = -1;

          public static int sucheMitFlag(int[] daten, int schluessel) {
              boolean gefunden = false;
              int i = 0;
              while (i < daten.length && !gefunden) {
                  if (daten[i] == schluessel) {
                      gefunden = true;
                  }
                  i++;
              }
              int ergebnis = NOT_FOUND;
              if (gefunden) {
                  ergebnis = i - 1;
              }
              return ergebnis;
          }

          public static void main(String[] args) {
              int[] d = {7, 0, 7};
              System.out.println(sucheMitFlag(d, 7));
              System.out.println(sucheMitFlag(d, 0));
              System.out.println(sucheMitFlag(d, 4));
              System.out.println(sucheMitFlag(new int[0], 4));
          }
      }
    loesung: |
      0
      1
      -1
      -1
    fehler:
      - wert: "1\n2\n-1\n-1"
        meldung: Nach dem Treffer wird `i` noch einmal erhöht. Darum wird `ergebnis = i - 1` gesetzt und nicht `i`.
      - wert: "2\n1\n-1\n-1"
        meldung: Die Schleife hört auf, sobald `gefunden` wahr ist. Die zweite 7 auf Index 2 wird nie erreicht.
hinweise:
  - Verfolge `i` und `gefunden`. Nach der Schleife ist das Ergebnis `i - 1`, falls `gefunden` wahr ist.
loesung: |
  **Ansatz:** Die Flag-Suche endet beim ersten Treffer, `i` steht danach eins dahinter.
  ---
  Suchwert 7: Treffer bei `i = 0`, danach `i = 1`, Ergebnis 0. Suchwert 0: Treffer bei 1, Ergebnis 1. Suchwert 4: kein Treffer, Ergebnis -1.
  ---
  Leeres Array: `0 < 0` ist falsch, die Schleife läuft keinmal, `gefunden` bleibt falsch. Ergebnis -1.
```

```aufgabe
id: su-quiz-flag-aussagen
titel: Vier Aussagen zu einer Flag-Suche
niveau: 2
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 W2021 vom 13.01.2022 (Suche mit Flag-Variable), Code und Aussagen neu
angabe: |
  Gegeben ist diese Variante der linearen Suche. Vorbedingung: `daten != null`. `NOT_FOUND` ist die Konstante -1.

  ```java
  public static int variante(int[] daten, int schluessel) {
      int pos = 0;
      boolean gefunden = false;
      while (pos < daten.length && !gefunden) {
          gefunden = daten[pos] == schluessel;
          pos++;
      }
      if (gefunden) {
          return pos - 1;
      }
      return NOT_FOUND;
  }
  ```

  Die Zeile `gefunden = daten[pos] == schluessel;` speichert das Ergebnis des Vergleichs, also `true` oder `false`,
  direkt in `gefunden`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Aufruf `variante(new int[]{6, 1, 6}, 6)` liefert 0.
        richtig: true
        erklaerung: Schon `daten[0]` ist 6. `gefunden` wird wahr, `pos` wird 1, und die Schleife endet. Ergebnis `1 - 1 = 0`.
      - text: Hat `daten` die Länge n, wird der Vergleich `daten[pos] == schluessel` höchstens n-mal ausgeführt.
        richtig: true
        erklaerung: Jeder Durchlauf vergleicht genau ein Element und erhöht `pos` um 1. Nach höchstens n Durchläufen ist `pos < daten.length` falsch.
      - text: Für ein leeres Array endet die Methode mit einer Exception.
        richtig: false
        erklaerung: '`0 < 0` ist sofort falsch. Die Schleife läuft keinmal, also wird `daten[0]` nie gelesen. Die Methode liefert -1.'
      - text: Steht der Suchwert nur auf dem letzten Platz, liefert die Methode `daten.length`.
        richtig: false
        erklaerung: '`pos` steht nach dem Treffer auf `daten.length`. Zurückgegeben wird aber `pos - 1`, also der letzte gültige Index.'
    fehler:
      - wert: [r, r, r, f]
        meldung: Spiele das leere Array durch. Wie oft läuft die Schleife, wenn `pos < daten.length` gleich zu Beginn falsch ist?
      - wert: [r, r, f, r]
        meldung: Schau dir die `return`-Zeile genau an. Es wird nicht `pos` zurückgegeben.
      - wert: [r, f, f, f]
        meldung: Wie oft wird jedes Element höchstens angesehen? Jeder Durchlauf erhöht `pos` um 1.
hinweise:
  - Nimm die fünf Testfälle aus dem Merke-Kasten „Fünf Testfälle für jede Suchvariante“ in dieser Lektion. Besonders wichtig sind hier das leere Array und der Treffer auf dem letzten Platz.
  - '`pos` wird nach jedem Vergleich erhöht, auch nach dem Treffer.'
loesung: |
  **Ansatz:** Jede Aussage mit einem kleinen Testarray prüfen.
  ---
  Für `{6, 1, 6}` und 6: Treffer bei `pos = 0`, danach `pos = 1`, Ergebnis 0. Aussage 1 stimmt. Jedes Element wird höchstens einmal verglichen, Aussage 2 stimmt.
  ---
  Leeres Array: Die Bedingung `0 < 0` ist falsch, die Methode liefert -1 ohne Exception. Aussage 3 ist falsch.
  ---
  Für `{2, 7}` und 7: Treffer bei `pos = 1`, danach `pos = 2`, Ergebnis `2 - 1 = 1`. Aussage 4 ist falsch.
```

### Suche mit einem Wächter

Die Grundform prüft in jedem Durchlauf **zwei** Dinge: Ist `i` noch ein gültiger Index? Und ist `daten[i]` der
Suchwert? Ein Trick spart die erste Prüfung. Man schreibt den Suchwert vor der Suche auf den **letzten Platz** des
Arrays. Dann ist sicher, dass die Schleife spätestens dort einen Treffer findet und nie über das Ende hinausläuft.
Dieser künstliche Treffer heißt **Wächter** (englisch *sentinel*). Nach der Suche stellt man den alten Wert wieder
her und prüft, ob der Treffer echt war.

:::beispiel[Eine Suche mit Wächter]
Vorbedingung: `daten != null` und `daten.length >= 1`.

```java
public static int sucheMitWaechter(int[] daten, int schluessel) {
    int letzter = daten[daten.length - 1];
    daten[daten.length - 1] = schluessel;
    int i = 0;
    while (daten[i] != schluessel) {
        i++;
    }
    daten[daten.length - 1] = letzter;
    if (i < daten.length - 1 || letzter == schluessel) {
        return i;
    }
    return NOT_FOUND;
}
```

1. `letzter` merkt sich den alten Wert des letzten Platzes. Danach wird dort der Suchwert eingetragen.
2. Die Schleife hat nur noch die Bedingung `daten[i] != schluessel`. Sie hält spätestens auf dem letzten Platz.
3. Danach bekommt der letzte Platz seinen alten Wert zurück. Das Array ist wieder wie vorher.
4. Hat die Schleife **vor** dem letzten Platz gehalten (`i < daten.length - 1`), war der Treffer echt. Hat sie auf
   dem letzten Platz gehalten, war er nur echt, wenn dort schon vorher der Suchwert stand (`letzter == schluessel`).

Aufruf mit `{6, 9, 2}` und dem Suchwert 4: `letzter` wird 2, das Array wird zu `{6, 9, 4}`. Die Schleife hält bei
`i = 2`, auf dem Wächter. Das Array wird wieder `{6, 9, 2}`. Weder ist `2 < 2`, noch ist `letzter == 4`. Ergebnis
**-1**.

Aufruf mit demselben Array und dem Suchwert 2: Auch jetzt hält die Schleife bei `i = 2`. Diesmal ist aber
`letzter == 2` wahr, die 2 stand wirklich dort. Ergebnis **2**.

Ein leeres Array ist durch die Vorbedingung ausgeschlossen, und das aus gutem Grund: Schon die erste Zeile würde
`daten[-1]` lesen und mit einer `ArrayIndexOutOfBoundsException` abbrechen.
:::

:::achtung[Den echten Treffer auf dem letzten Platz übersehen]
```java
if (i < daten.length - 1) {        // falsch: letzter == schluessel fehlt
    return i;
}
return NOT_FOUND;
```

Mit dieser Prüfung gilt jeder Halt auf dem letzten Platz als „nicht gefunden“. Für `{6, 9, 2}` und den Suchwert 2
liefert die Methode -1, obwohl die 2 auf Index 2 steht. Die Schleife kann nicht unterscheiden, ob sie auf dem echten
Wert oder auf dem Wächter gehalten hat. Diese Unterscheidung muss die Prüfung nach der Schleife leisten.
:::

```aufgabe
id: su-quiz-waechter-trace
titel: Wo hält der Wächter?
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  `sucheMitWaechter` aus dem Beispiel wird dreimal mit dem Array `{4, 7, 1, 3}` aufgerufen. Trage für jeden Suchwert
  ein, welchen Wert `i` direkt nach der `while`-Schleife hat und was die Methode liefert. Die erste Zeile ist
  vorgegeben.
teile:
  - typ: trace
    spalten: [i nach der Schleife, Ergebnis]
    zeilen: [Suchwert 7, Suchwert 9, Suchwert 3]
    vorgabe: 1
    loesung: [[1, 1], [3, -1], [3, 3]]
    fehler:
      - wert: ["1", "1", "3", "-1", "3", "-1"]
        meldung: Beim Suchwert 3 hält die Schleife auf dem letzten Platz. Dort stand aber schon vorher eine 3, also ist `letzter == schluessel` wahr. Der Treffer ist echt.
      - wert: ["1", "1", "4", "-1", "3", "3"]
        meldung: Die Schleife kann nie über den letzten Index 3 hinauslaufen, denn dort steht der Wächter. Sie hält bei `i = 3`.
hinweise:
  - Schreib zuerst auf, wie das Array mit dem Wächter aussieht. Beim Suchwert 9 ist das `{4, 7, 1, 9}`.
  - Nach der Schleife entscheidet `i < 3 || letzter == schluessel`, ob `i` oder -1 geliefert wird. `letzter` ist bei allen Aufrufen 3.
loesung: |
  **Ansatz:** Wächter eintragen, Haltestelle bestimmen, dann die Prüfung nach der Schleife auswerten.
  ---
  Suchwert 9: Das Array wird `{4, 7, 1, 9}`, die Schleife hält bei `i = 3`. `3 < 3` ist falsch, `3 == 9` ist falsch. Ergebnis -1.
  ---
  Suchwert 3: Das Array bleibt `{4, 7, 1, 3}`, die Schleife hält bei `i = 3`. `letzter == 3` ist wahr. Ergebnis 3.
```

```aufgabe
id: su-quiz-waechter-aussagen
titel: Ein Wächter am Anfang
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Format nach dem TUWEL-Test zur Vorbereitung W2021, Frage 7 (Suche mit Wächter), Code gespiegelt und Aussagen neu
angabe: |
  Diese Variante setzt den Wächter auf den **ersten** Platz und sucht von hinten:

  ```java
  public static int variante(int[] daten, int schluessel) {
      int erster = daten[0];
      daten[0] = schluessel;
      int i = daten.length - 1;
      while (daten[i] != schluessel) {
          i--;
      }
      daten[0] = erster;
      if (i > 0 || erster == schluessel) {
          return i;
      }
      return NOT_FOUND;
  }
  ```

  Vorbedingung: `daten != null`. `NOT_FOUND` ist die Konstante -1. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Kommt der Suchwert mehrmals vor, liefert die Methode den größten Index, an dem er steht.
        richtig: true
        erklaerung: Die Suche beginnt beim letzten Index und hält beim ersten Treffer von hinten.
      - text: Für ein leeres Array liefert die Methode -1.
        richtig: false
        erklaerung: 'Schon `daten[0]` in der ersten Zeile wirft bei Länge 0 eine `ArrayIndexOutOfBoundsException`. Die Vorbedingung schließt das leere Array hier nicht aus.'
      - text: Nach dem Aufruf enthält `daten` wieder genau dieselben Werte wie vorher.
        richtig: true
        erklaerung: Nur `daten[0]` wird verändert, und die Zeile `daten[0] = erster;` stellt den alten Wert wieder her.
      - text: Der Aufruf `variante(new int[]{5, 1, 2}, 5)` meldet „nicht gefunden“, weil die Schleife auf dem Wächter hält.
        richtig: false
        erklaerung: Die Schleife hält bei `i = 0`. `0 > 0` ist falsch, aber `erster == schluessel` ist wahr, denn dort stand die 5 schon vorher. Die Methode liefert 0.
    fehler:
      - wert: [r, r, r, f]
        meldung: Prüfe das leere Array. Welche Zeile wird zuerst ausgeführt, und welchen Index liest sie?
      - wert: [r, f, r, r]
        meldung: Spiele `{5, 1, 2}` mit dem Suchwert 5 durch. Was ist `erster`, und was prüft die Bedingung nach der Schleife?
      - wert: [f, f, r, f]
        meldung: In welcher Richtung läuft `i`? Beim ersten Treffer von hinten hält die Schleife.
hinweise:
  - Das ist das Spiegelbild der Wächter-Suche aus dem Beispiel. Der Wächter steht vorne, die Schleife läuft rückwärts.
  - Prüfe die Vorbedingung. Schließt sie ein leeres Array aus?
loesung: |
  **Ansatz:** Die fünf Testfälle aus dem Merke-Kasten durchspielen.
  ---
  `{3, 8, 3}` mit 3: Die Schleife beginnt bei Index 2, dort steht 3. Ergebnis 2, der größte Index. Aussage 1 stimmt.
  ---
  Leeres Array: `daten[0]` gibt es nicht, die Methode bricht ab. Aussage 2 ist falsch. Der Wächter wird nach der Schleife entfernt, Aussage 3 stimmt.
  ---
  `{5, 1, 2}` mit 5: Die Schleife hält bei `i = 0`, und `erster == 5` ist wahr. Ergebnis 0. Aussage 4 ist falsch.
```

### Suche mit zwei Indizes

Die dritte Bauart sucht **von beiden Seiten gleichzeitig**. Ein Index `links` startet vorne, ein Index `rechts`
hinten. In jedem Durchlauf werden beide Plätze geprüft, danach rücken beide Indizes einen Schritt zur Mitte.

:::beispiel[Von beiden Seiten zur Mitte]
```java
public static int sucheVonBeidenSeiten(int[] daten, int schluessel) {
    int links = 0;
    int rechts = daten.length - 1;
    while (links <= rechts) {
        if (daten[links] == schluessel) {
            return links;
        }
        if (daten[rechts] == schluessel) {
            return rechts;
        }
        links++;
        rechts--;
    }
    return NOT_FOUND;
}
```

Aufruf mit `{1, 3, 4, 3}` und dem Suchwert 3:

|`links`|`rechts`|`daten[links]`|`daten[rechts]`|Folge|
|---|---|---|---|---|
|0|3|1|3|`return 3`|

Die Methode liefert **3**, obwohl die 3 auch auf Index 1 steht. Diese Variante liefert bei mehreren Vorkommen also
nicht immer den kleinsten Index. Welcher Treffer gewinnt, hängt davon ab, welcher näher am jeweiligen Rand liegt.

Ist das Array leer, ist `rechts = -1`. Die Bedingung `0 <= -1` ist falsch, die Methode liefert sofort -1. Bei
ungerader Länge treffen sich die Indizes in der Mitte: Dann ist `links == rechts`, und das mittlere Element wird
zweimal geprüft. Das ist harmlos.

Die Schleife läuft höchstens etwa halb so oft wie bei der Grundform. In jedem Durchlauf stehen aber zwei Vergleiche.
Im schlechtesten Fall werden also wieder alle n Elemente verglichen, die Laufzeit liegt weiter in O(n).
:::

:::achtung[links < rechts lässt die Mitte aus]
```java
while (links < rechts) {           // falsch: < statt <=
```

Bei ungerader Länge treffen sich die Indizes auf dem mittleren Platz. Mit `<` endet die Schleife genau dann, bevor
dieser Platz geprüft wird. Für `{4, 5, 6}` und den Suchwert 5 prüft die Schleife nur 4 und 6. Danach ist
`links = rechts = 1`, und `1 < 1` ist falsch. Die Methode liefert -1, obwohl die 5 auf Index 1 steht.
:::

```aufgabe
id: su-quiz-zwei-ausgabe
titel: Von beiden Seiten suchen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  `sucheVonBeidenSeiten` ist die Methode aus dem Beispiel. Was gibt das Programm aus? Löse die Aufgabe zuerst
  geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Beidseitig {
          private static final int NOT_FOUND = -1;

          public static int sucheVonBeidenSeiten(int[] daten, int schluessel) {
              int links = 0;
              int rechts = daten.length - 1;
              while (links <= rechts) {
                  if (daten[links] == schluessel) {
                      return links;
                  }
                  if (daten[rechts] == schluessel) {
                      return rechts;
                  }
                  links++;
                  rechts--;
              }
              return NOT_FOUND;
          }

          public static void main(String[] args) {
              int[] d = {2, 8, 6, 8, 5};
              System.out.println(sucheVonBeidenSeiten(d, 8));
              System.out.println(sucheVonBeidenSeiten(d, 5));
              System.out.println(sucheVonBeidenSeiten(d, 6));
              System.out.println(sucheVonBeidenSeiten(d, 9));
          }
      }
    loesung: |
      1
      4
      2
      -1
    fehler:
      - wert: "3\n4\n2\n-1"
        meldung: Im zweiten Durchlauf ist `links = 1` und `rechts = 3`. Geprüft wird zuerst `daten[links]`, und dort steht schon eine 8.
      - wert: "1\n4\n-1\n-1"
        meldung: Die 6 steht in der Mitte. Dort treffen sich `links` und `rechts` bei 2, und `2 <= 2` ist wahr. Die Mitte wird geprüft.
hinweise:
  - Notiere in jedem Durchlauf `links` und `rechts`. Geprüft wird immer zuerst links, dann rechts.
gefuehrt:
  - text: Suchwert 8. Im ersten Durchlauf ist `links = 0` (Wert 2) und `rechts = 4` (Wert 5). Kein Treffer. Welchen Wert hat `links` im zweiten Durchlauf?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Nach dem ersten Durchlauf wird `links` zu 1 und `rechts` zu 3.
  - text: Im zweiten Durchlauf steht auf beiden Seiten eine 8. Welcher Index wird geliefert?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Zuerst wird `daten[links]` geprüft. Schon das ist ein Treffer, also `return 1`.
  - text: Suchwert 5. Was liefert die Methode?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Gleich im ersten Durchlauf ist `daten[rechts]` die 5. Ergebnis 4.
  - text: Suchwert 6 steht auf Index 2, genau in der Mitte. Was liefert die Methode?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Im dritten Durchlauf ist `links = rechts = 2`. Die Bedingung `2 <= 2` ist wahr, und `daten[2]` ist die 6.
loesung: |
  **Ansatz:** Für jeden Suchwert die Paare `(links, rechts)` = (0, 4), (1, 3), (2, 2) der Reihe nach prüfen.
  ---
  8: Bei (1, 3) ist links schon ein Treffer, Ergebnis 1. 5: Bei (0, 4) ist rechts ein Treffer, Ergebnis 4.
  ---
  6: Bei (2, 2) ist links ein Treffer, Ergebnis 2. 9: Danach ist `links = 3` und `rechts = 1`, die Schleife endet, Ergebnis -1.
```

```aufgabe
id: su-quiz-gegenbeispiel
titel: Ein Gegenbeispiel finden
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Im Quiz steht eine Aussage über `sucheVonBeidenSeiten` aus dem Beispiel. Sie lautet: „Kommt der Suchwert mehrmals
  vor, liefert die Methode immer den kleinsten Index, an dem er steht.“ Welches Array **widerlegt** diese Aussage,
  wenn der Suchwert 3 ist?
teile:
  - typ: auswahl
    optionen: ['`{3, 1, 3, 1}`', '`{1, 3, 3, 1}`', '`{1, 3, 1, 3}`', '`{3, 3}`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Hier ist schon `daten[0]` eine 3. Die Methode liefert 0, und das ist der kleinste Index. Kein Widerspruch.
      - wert: 1
        meldung: 'Im ersten Durchlauf stehen außen zwei Einsen. Im zweiten Durchlauf ist `links = 1` ein Treffer. Ergebnis 1, der kleinste Index.'
      - wert: 3
        meldung: '`daten[links]` mit `links = 0` ist sofort ein Treffer. Ergebnis 0, der kleinste Index.'
hinweise:
  - Für jedes Array den ersten Durchlauf ansehen. Wird dort `links` oder `rechts` zuerst getroffen?
  - Die Aussage ist widerlegt, wenn die Methode einen größeren Index liefert als den kleinsten, an dem eine 3 steht.
loesung: |
  **Ansatz:** Für jedes Array die Methode durchspielen und mit dem kleinsten Index der 3 vergleichen.
  ---
  `{3, 1, 3, 1}` liefert 0, `{1, 3, 3, 1}` liefert 1 und `{3, 3}` liefert 0. In allen drei Fällen ist das der kleinste Index.
  ---
  `{1, 3, 1, 3}`: Im ersten Durchlauf ist `daten[0] = 1`, aber `daten[3] = 3`. Die Methode liefert 3, obwohl die 3 schon auf Index 1 steht. Dieses Array widerlegt die Aussage. Ein einziges Gegenbeispiel genügt.
```

```aufgabe
id: su-quiz-zwei-aussagen
titel: Vier Aussagen zur Suche von beiden Seiten
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 W2021 vom 20.01.2022, Frage 7 (Suche mit zwei Indizes), Aussagen neu
angabe: |
  Beurteile die Aussagen über `sucheVonBeidenSeiten` aus dem Beispiel. Vorbedingung: `daten != null`. Ein
  **Vergleich** ist hier jede Prüfung `daten[...] == schluessel`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Aufruf `sucheVonBeidenSeiten(new int[]{5, 2, 5}, 5)` liefert 0.
        richtig: true
        erklaerung: 'Im ersten Durchlauf wird zuerst `daten[links] = daten[0]` geprüft. Dort steht schon die 5, also `return 0`.'
      - text: Der Aufruf `sucheVonBeidenSeiten(new int[]{8, 6, 4}, 6)` liefert -1, weil die 6 weder ganz links noch ganz rechts steht.
        richtig: false
        erklaerung: 'Im zweiten Durchlauf ist `links = rechts = 1`, und `1 <= 1` ist wahr. Dort steht die 6, die Methode liefert 1.'
      - text: Bei einem Array der Länge 1 ohne Treffer wird dasselbe Element zweimal mit dem Suchwert verglichen.
        richtig: true
        erklaerung: 'Bei Länge 1 ist `links = rechts = 0`. Beide `if`-Prüfungen sehen `daten[0]` an, das sind zwei Vergleiche.'
      - text: Fehlt der Suchwert in einem Array mit 6 Elementen, braucht die Methode nur 3 Vergleiche, weil die Schleife nur dreimal läuft.
        richtig: false
        erklaerung: 'Die Schleife läuft dreimal, mit den Paaren (0, 5), (1, 4) und (2, 3). In jedem Durchlauf stehen aber zwei Vergleiche, zusammen also 6.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Zähle die Vergleiche, nicht die Durchläufe. Jeder Durchlauf ohne Treffer prüft `daten[links]` und `daten[rechts]`.'
      - wert: [f, f, r, f]
        meldung: In jedem Durchlauf wird zuerst `daten[links]` geprüft. Was steht bei `{5, 2, 5}` auf Index 0?
      - wert: [r, r, r, f]
        meldung: Was ist die Bedingung der Schleife? Bei ungerader Länge wird `links == rechts` erreicht, und `<=` lässt diesen Durchlauf noch zu.
hinweise:
  - Notiere für jedes Array die Paare `(links, rechts)` von außen nach innen. Geprüft wird jeweils zuerst links, dann rechts.
  - Für die Aussagen 3 und 4 zählst du jede Prüfung `daten[...] == schluessel` einzeln.
loesung: |
  **Ansatz:** Jede Aussage mit den Paaren `(links, rechts)` durchspielen und die Vergleiche einzeln zählen.
  ---
  Aussage 1 stimmt: `daten[0] = 5` ist schon im ersten Durchlauf ein Treffer. Aussage 2 ist falsch: Bei `(1, 1)` wird die 6 in der Mitte gefunden, Ergebnis 1.
  ---
  Aussage 3 stimmt: Bei Länge 1 prüfen beide `if` dasselbe Element. Aussage 4 ist falsch: 3 Durchläufe mit je 2 Vergleichen sind 6 Vergleiche. Darum liegt auch diese Suche in O(n).
```

```aufgabe
id: su-quiz-abbruch-aussagen
titel: Eine Suche, die ihren Index umsetzt
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Format nach dem TUWEL-Test vom 13.01.2023 (Schleifenende über eine Variable erzwingen), Code und Aussagen neu
angabe: |
  Diese Variante beendet die Schleife nicht mit `return`, sondern indem sie `i` auf -1 setzt:

  ```java
  public static int variante(int[] daten, int schluessel) {
      int pos = NOT_FOUND;
      int i = daten.length - 1;
      while (i >= 0) {
          if (daten[i] == schluessel) {
              pos = i;
              i = -1;
          } else {
              i--;
          }
      }
      return pos;
  }
  ```

  Vorbedingung: `daten != null`. `NOT_FOUND` ist die Konstante -1. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Kommt der Suchwert mehrmals vor, liefert die Methode den kleinsten Index, an dem er steht.
        richtig: false
        erklaerung: '`i` beginnt beim letzten Index und läuft nach vorne. Der erste Treffer von hinten ist der größte Index.'
      - text: Wird nach dem Wert -1 gesucht, kann der Aufrufer einen Treffer nicht von „nicht gefunden“ unterscheiden.
        richtig: false
        erklaerung: Die Methode liefert die Stelle `pos`, nicht den Wert. Für `{4, -1}` und den Suchwert -1 liefert sie 1.
      - text: Die Methode terminiert für jedes Array, auch für das leere.
        richtig: true
        erklaerung: Ohne Treffer sinkt `i` in jedem Durchlauf um 1 bis -1. Bei einem Treffer wird `i` sofort -1. Beim leeren Array ist `i` von Anfang an -1.
      - text: Steht der Suchwert nur auf Index 0, vergleicht die Methode jedes Element genau einmal.
        richtig: true
        erklaerung: Die Suche beginnt hinten. Bis sie Index 0 erreicht, hat sie alle anderen Elemente ohne Treffer verglichen.
    fehler:
      - wert: [r, f, r, r]
        meldung: In welcher Richtung läuft `i`? Probiere `{3, 3}` mit dem Suchwert 3.
      - wert: [f, r, r, r]
        meldung: Unterscheide Suchwert und Rückgabewert. Zurückgegeben wird `pos`, und das ist ein Index.
      - wert: [f, f, f, r]
        meldung: 'Verfolge `i` beim Treffer: Die Zuweisung `i = -1` macht die Bedingung `i >= 0` sofort falsch.'
hinweise:
  - Die Zeile `i = -1;` ersetzt hier das `return`. Danach ist die Bedingung `i >= 0` falsch.
  - Prüfe, in welcher Richtung die Suche läuft und was zurückgegeben wird.
loesung: |
  **Ansatz:** Die vier Fragen an jede Suchvariante stellen: Richtung, kein Treffer, Terminierung, Aufwand.
  ---
  Die Suche läuft von hinten. Bei `{3, 3}` und 3 liefert sie 1, nicht 0. Aussage 1 ist falsch. Sie liefert immer einen Index oder -1, nie den Wert. Aussage 2 ist falsch.
  ---
  `i` sinkt in jedem Durchlauf oder springt auf -1. Nach höchstens n Durchläufen ist `i >= 0` falsch. Aussage 3 stimmt.
  ---
  Steht der Wert nur auf Index 0, werden die Indizes n - 1 bis 1 ohne Treffer verglichen und zuletzt Index 0. Das ist jedes Element genau einmal. Aussage 4 stimmt.
```

```reflexion
frage: Warum genügt im Quiz ein einziges Gegenbeispiel, um eine Aussage als falsch zu erkennen, während ein passendes Beispiel nicht reicht, um sie als richtig zu erkennen?
antwort: |
  Die Aussagen im Quiz behaupten etwas für **jedes** erlaubte Array, etwa „liefert immer den kleinsten Index“. Ein
  einziges Array, bei dem das nicht stimmt, zeigt, dass „immer“ falsch ist. Ein Beispiel, bei dem es stimmt, zeigt
  dagegen nur, dass es **manchmal** stimmt. Bei der Suche von beiden Seiten liefert `{3, 1, 3, 1}` den kleinsten
  Index, `{1, 3, 1, 3}` aber nicht. Für „richtig“ brauchst du darum eine Begründung, die für jedes Array gilt, zum
  Beispiel: „Die Schleife beginnt bei Index 0 und endet beim ersten Treffer, also ist es der kleinste Index.“
```

## Binäre Suche: halbieren statt durchprobieren

```aufgabe
id: su-bin-check-sortiert
titel: Welches Array ist sortiert?
niveau: 1
art: check
angabe: |
  Ein Array heißt **aufsteigend sortiert**, wenn jedes Element kleiner oder gleich seinem rechten Nachbarn ist.
  Welches Array ist aufsteigend sortiert?
teile:
  - typ: auswahl
    optionen: ['`{2, 5, 5, 9, 14}`', '`{2, 5, 9, 14, 11}`', '`{14, 9, 5, 5, 2}`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Am Ende steht 14 vor 11. Weil 14 größer als 11 ist, ist dieses Array nicht sortiert.
      - wert: 2
        meldung: Dieses Array ist **absteigend** sortiert. Jedes Element ist größer oder gleich seinem rechten Nachbarn.
loesung: |
  Prüfe jedes Paar von Nachbarn. Das Zeichen ≤ heißt „kleiner oder gleich“, in Java `<=`. Bei `{2, 5, 5, 9, 14}` gilt 2 ≤ 5, 5 ≤ 5, 5 ≤ 9 und 9 ≤ 14.
  ---
  Gleiche Werte nebeneinander sind erlaubt. Das erste Array ist aufsteigend sortiert.
```

Die lineare Suche ist einfach und funktioniert immer. Sie hat aber einen Preis: Fehlt der Wert, muss sie **jedes**
Element ansehen. Bei einer Million Elementen sind das eine Million Vergleiche, für eine einzige Suche.

Ist das Array **sortiert**, geht es viel schneller. Du kennst die Idee vom Zahlenraten aus
[8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel). Wer klug rät, tippt
immer auf die Mitte des noch möglichen Bereichs. Die Antwort „zu groß“ oder „zu klein“ schließt dann auf einen
Schlag die halbe Menge aus. Im Wörterbuch machst du es genauso.

Im Array funktioniert das so. Du vergleichst den Suchwert mit dem Element **in der Mitte**. Dann gibt es drei Fälle:

1. Das mittlere Element **ist** der Suchwert. Fertig.
2. Das mittlere Element ist **kleiner** als der Suchwert. Weil das Array sortiert ist, sind dann auch alle Elemente
   links davon kleiner. Der Suchwert kann nur **rechts** von der Mitte stehen.
3. Das mittlere Element ist **größer** als der Suchwert. Dann sind auch alle Elemente rechts davon größer. Der
   Suchwert kann nur **links** von der Mitte stehen.

```aufgabe
id: su-bin-check-haelfte
titel: Links oder rechts?
niveau: 1
art: check
angabe: |
  Ein Array ist aufsteigend sortiert. Das Element in der Mitte ist 40. Gesucht ist 25. Wo kann die 25 nur stehen?
teile:
  - typ: auswahl
    optionen: ['links von der Mitte', 'rechts von der Mitte', 'überall, man muss alle Elemente prüfen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rechts von der Mitte stehen nur Werte, die mindestens 40 sind. Die 25 ist kleiner als 40.
      - wert: 2
        meldung: Das gilt nur für ein unsortiertes Array. Im sortierten Array verrät die Mitte, in welcher Hälfte der Wert stehen muss.
loesung: |
  Im aufsteigend sortierten Array sind alle Werte rechts von der Mitte mindestens 40.
  ---
  Die 25 ist kleiner als 40, also kann sie nur links stehen.
```

In der verbleibenden Hälfte machst du dasselbe noch einmal, und so weiter. Der Bereich, in dem der Suchwert noch
stehen kann, heißt **Suchbereich**. Er halbiert sich mit jedem Schritt. Weil der Suchbereich in jedem Schritt in
zwei Teile zerfällt, heißt das Verfahren **binäre Suche** (lateinisch *bini*: je zwei).

:::definition[Binäre Suche]
Die **binäre Suche** sucht in einem **aufsteigend sortierten** Array. Drei Variablen beschreiben den Suchbereich:

- `low` ist der kleinste Index des Suchbereichs (englisch *low*: niedrig). Zu Beginn ist `low = 0`.
- `high` ist der größte Index des Suchbereichs (englisch *high*: hoch). Zu Beginn ist `high = a.length - 1`.
- `mid` ist der Index in der Mitte (englisch *middle*: Mitte). Er wird in jedem Schritt neu berechnet:
  `mid = low + (high - low) / 2`. Die Division ist eine Ganzzahldivision.

In jedem Schritt wird `a[mid]` mit dem Suchwert verglichen:

- Gleich: Die Suche liefert `mid`.
- `a[mid]` ist kleiner: `low = mid + 1`. Die linke Hälfte und `mid` selbst fallen weg.
- `a[mid]` ist größer: `high = mid - 1`. Die rechte Hälfte und `mid` selbst fallen weg.

Ist `low > high`, ist der Suchbereich leer. Dann gibt es den Wert nicht, und die Suche liefert -1.
:::

```aufgabe
id: su-bin-mitte
titel: Die Mitte berechnen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Der Suchbereich einer binären Suche reicht von `low = 4` bis `high = 11`. Welchen Wert hat
  `mid = low + (high - low) / 2`?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "7.5"
        meldung: '`(high - low) / 2` ist eine Ganzzahldivision. `7 / 2` ergibt 3, der Rest fällt weg. Ein Index ist immer eine ganze Zahl.'
      - wert: "3"
        meldung: '`(11 - 4) / 2 = 3` ist nur der Abstand von `low` bis zur Mitte. Die Mitte selbst ist `low + 3`.'
      - wert: "8"
        meldung: Die Ganzzahldivision rundet nicht auf. `7 / 2` ergibt 3, also ist die Mitte `4 + 3 = 7`.
hinweise:
  - Rechne zuerst `high - low`, teile ganzzahlig durch 2 und addiere dann `low`.
loesung: |
  **Ansatz:** Formel einsetzen und die Ganzzahldivision beachten.
  ---
  `11 - 4 = 7`, `7 / 2 = 3` (Rest fällt weg), `4 + 3 = 7`. Probe: `(4 + 11) / 2 = 15 / 2 = 7`, dasselbe Ergebnis.
```

Die Formel `low + (high - low) / 2` sieht umständlich aus. Für alle Arrays in diesem Kapitel liefert sie dasselbe wie
`(low + high) / 2`. Warum die Folien trotzdem die längere Form verwenden, erfährst du in
[18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden).

**Nicht-Beispiel:** In `{9, 2, 7, 4, 1}` darf man nicht binär suchen. Das Array ist nicht sortiert. Ein kleines
mittleres Element sagt dann nichts darüber, wo größere Werte stehen.

:::beispiel[Eine erfolgreiche binäre Suche]
Gesucht ist 23 in diesem sortierten Array mit 9 Elementen:

```text
Index:   0   1   2   3   4   5   6   7   8
Wert:    3   8  11  15  19  23  27  31  40
```

**Durchlauf 1:** `low = 0`, `high = 8`. Die Mitte ist `0 + (8 - 0) / 2 = 4`. `a[4] = 19` ist kleiner als 23. Die 23
kann nur rechts stehen, also `low = 4 + 1 = 5`.

```text
Index:   0   1   2   3   4   5   6   7   8
Wert:    3   8  11  15  19  23  27  31  40
         low             mid             high
```

**Durchlauf 2:** `low = 5`, `high = 8`. Die Mitte ist `5 + (8 - 5) / 2 = 5 + 1 = 6`. `a[6] = 27` ist größer als 23.
Die 23 kann nur links davon stehen, also `high = 6 - 1 = 5`.

**Durchlauf 3:** `low = 5`, `high = 5`. Der Suchbereich besteht nur noch aus Index 5. Die Mitte ist
`5 + 0 / 2 = 5`. `a[5] = 23` ist der Suchwert. Die Suche liefert **5**.

|Durchlauf|`low`|`high`|`mid`|`a[mid]`|Vergleich mit 23|Folge|
|---|---|---|---|---|---|---|
|1|0|8|4|19|kleiner|`low = 5`|
|2|5|8|6|27|größer|`high = 5`|
|3|5|5|5|23|gleich|`return 5`|

Drei Vergleiche statt sechs bei der linearen Suche, denn die lineare Suche hätte die Indizes 0 bis 5 prüfen müssen.
:::


```aufgabe
id: su-bin-erster-vergleich
titel: Welches Element wird zuerst verglichen?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine binäre Suche sucht in `{2, 5, 9, 14, 20, 26, 33}` nach der Zahl 30. Mit welchem Element wird der Suchwert
  **zuerst** verglichen?
teile:
  - typ: auswahl
    optionen: ['mit `14`', 'mit `2`', 'mit `33`', 'mit `20`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mit dem ersten Element beginnt die lineare Suche. Die binäre Suche beginnt in der Mitte.
      - wert: 2
        meldung: 'Die binäre Suche beginnt nicht am Ende, auch wenn 30 eher groß ist. Sie vergleicht zuerst mit `a[mid]`.'
      - wert: 3
        meldung: Die Mitte ist `0 + (6 - 0) / 2 = 3`. Auf Index 3 steht die 14, nicht die 20.
hinweise:
  - Bei 7 Elementen ist `low = 0` und `high = 6`. Berechne `mid`.
loesung: |
  **Ansatz:** Der erste Vergleich ist immer mit dem Element auf `mid` des ganzen Arrays.
  ---
  `mid = 0 + (6 - 0) / 2 = 3`. Auf Index 3 steht 14. Weil 14 kleiner als 30 ist, geht es danach rechts weiter.
```

:::beispiel[Eine erfolglose binäre Suche]
Gesucht ist 12 im Array aus dem ersten Beispiel, also in `{3, 8, 11, 15, 19, 23, 27, 31, 40}`.

|Durchlauf|`low`|`high`|`mid`|`a[mid]`|Vergleich mit 12|Folge|
|---|---|---|---|---|---|---|
|1|0|8|4|19|größer|`high = 3`|
|2|0|3|1|8|kleiner|`low = 2`|
|3|2|3|2|11|kleiner|`low = 3`|
|4|3|3|3|15|größer|`high = 2`|

Nach dem vierten Durchlauf ist `low = 3` und `high = 2`. Der Suchbereich von 3 bis 2 ist **leer**, denn er enthält
keinen einzigen Index. Die Suche endet und liefert **-1**.

Eine schöne Nebenwirkung: `low` zeigt jetzt genau auf die Stelle, an der die 12 stehen müsste, nämlich zwischen der
11 auf Index 2 und der 15 auf Index 3. Würde man 12 einfügen, käme es auf Index 3. Diese Eigenschaft nutzt eine
Aufgabe in [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden).
:::

:::achtung[Binär suchen in einem unsortierten Array]
Suche im Array `{9, 2, 7, 4, 1}` binär nach der 9. Die erste Mitte ist `mid = 2`. `a[2] = 7` ist kleiner als 9, also
wird `low = 3`. Dann ist `mid = 3`, und `a[3] = 4` ist kleiner, also `low = 4`. Dann ist `mid = 4`, und `a[4] = 1` ist
kleiner, also `low = 5`. Jetzt ist `low > high`, Ergebnis -1. Die 9 steht aber auf Index 0. Die Schlussfolgerung „kleiner, also
steht der Suchwert rechts“ gilt nur in einem sortierten Array. Die binäre Suche stürzt in einem unsortierten Array
nicht ab, sie liefert einfach falsche Ergebnisse.
:::

:::achtung[Die Hälften vertauscht]
Wer bei `a[mid] < schluessel` den Wert `high = mid - 1` setzt, sucht in der falschen Hälfte. Für das Array aus dem
ersten Beispiel und den Suchwert 23 ist `a[4] = 19` kleiner als 23. Mit vertauschten Hälften würde die Suche
danach nur noch zwischen Index 0 und 3 suchen, also unter den Werten 3, 8, 11 und 15. Die 23 wird nie gefunden.
Merke dir: **Ist die Mitte zu klein, geht es rechts weiter**, also wird `low` größer.
:::

```aufgabe
id: su-bin-trace
titel: low, high und mid verfolgen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine binäre Suche sucht 47 in `{4, 9, 13, 18, 22, 30, 35, 41, 47, 52}`. Fülle für jeden Durchlauf `low`, `high`,
  `mid` und `a[mid]` aus. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [low, high, mid, "a[mid]"]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3]
    vorgabe: 1
    loesung: [[0, 9, 4, 22], [5, 9, 7, 41], [8, 9, 8, 47]]
    fehler:
      - wert: ["0", "9", "4", "22", "4", "9", "6", "35", "6", "9", "7", "41"]
        meldung: Nach einem zu kleinen Wert wird `low` auf `mid + 1` gesetzt, nicht auf `mid`. Das Element auf `mid` ist schon geprüft und fällt weg.
      - wert: ["0", "9", "4", "22", "5", "9", "7", "41", "8", "9", "9", "52"]
        meldung: '`8 + (9 - 8) / 2` ist `8 + 0 = 8`. Die Ganzzahldivision `1 / 2` ergibt 0, nicht 1.'
  - typ: zahl
    label: Welchen Index liefert die Suche?
    loesung: "8"
    fehler:
      - wert: "9"
        meldung: Die 47 ist das neunte Element. Gezählt wird ab 0, also steht sie auf Index 8.
hinweise:
  - Das Array hat 10 Elemente, also `high = 9`. Nach jedem Vergleich ändert sich entweder `low` oder `high`.
  - Im zweiten Durchlauf ist `low = 5`. Rechne `mid = 5 + (9 - 5) / 2`.
gefuehrt:
  - text: Durchlauf 1 ist vorgegeben. `a[4] = 22` ist kleiner als 47. Welchen Wert bekommt `low`?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Die Mitte und alles links davon fällt weg, also `low = mid + 1 = 5`.
  - text: Welchen Wert hat `mid` im zweiten Durchlauf?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: '`5 + (9 - 5) / 2 = 5 + 2 = 7`. Dort steht 41.'
  - text: 41 ist kleiner als 47. Welchen Wert hat `mid` im dritten Durchlauf?
    teil: { typ: zahl, loesung: "8" }
    erklaerung: '`low` wird `7 + 1 = 8`. Dann ist `mid = 8 + (9 - 8) / 2 = 8 + 0 = 8`.'
  - text: Welches Ergebnis liefert die Suche?
    erklaerung: '`a[8] = 47` ist der Suchwert. Die Suche liefert 8.'
loesung: |
  **Ansatz:** In jedem Durchlauf `mid` berechnen, `a[mid]` mit 47 vergleichen und `low` oder `high` anpassen.
  ---
  Durchlauf 1: `mid = 4`, 22 < 47, also `low = 5`. Durchlauf 2: `mid = 5 + 2 = 7`, 41 < 47, also `low = 8`.
  ---
  Durchlauf 3: `mid = 8 + 0 = 8`, `a[8] = 47`. Die Suche liefert 8 nach drei Vergleichen.
```

```aufgabe
id: su-bin-erfolglos
titel: Eine Suche ohne Treffer
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine binäre Suche sucht 20 in `{5, 12, 17, 23, 31, 38, 44}`. Trage `low` und `high` **vor** jedem Durchlauf und
  nach dem Ende der Schleife ein. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [low, high]
    zeilen: [vor Durchlauf 1, vor Durchlauf 2, vor Durchlauf 3, nach der Schleife]
    vorgabe: 1
    loesung: [[0, 6], [0, 2], [2, 2], [3, 2]]
    fehler:
      - wert: ["0", "6", "0", "3", "2", "3", "3", "3"]
        meldung: Ist `a[mid]` zu groß, wird `high` auf `mid - 1` gesetzt. `a[3] = 23` ist zu groß, also `high = 2`, nicht 3.
      - wert: ["0", "6", "0", "2", "2", "2", "2", "2"]
        meldung: Nach dem dritten Durchlauf ist `a[2] = 17` zu klein. Dann wird `low = 2 + 1 = 3`. Erst dadurch wird `low > high`.
  - typ: zahl
    label: Was liefert die Suche?
    loesung: "-1"
    fehler:
      - wert: "3"
        meldung: Am Ende ist `low = 3`. Das ist die Stelle, an der die 20 eingefügt werden müsste. Die Suche selbst meldet aber -1, denn die 20 kommt nicht vor.
hinweise:
  - Vor Durchlauf 1 ist `mid = 3` mit `a[3] = 23`. Ist das größer oder kleiner als 20?
  - Die Suche endet, sobald `low > high` ist.
loesung: |
  **Ansatz:** Durchlauf für Durchlauf `mid` berechnen und eine der beiden Grenzen verschieben.
  ---
  Durchlauf 1: `mid = 3`, 23 > 20, also `high = 2`. Durchlauf 2: `mid = 0 + 2 / 2 = 1`, 12 < 20, also `low = 2`.
  ---
  Durchlauf 3: `mid = 2`, 17 < 20, also `low = 3`. Jetzt ist `low = 3 > high = 2`, die Suche endet mit -1. Die 20 gehört zwischen 17 und 23, also auf Index 3.
```

```aufgabe
id: su-bin-anzahl
titel: Ganz vorne, aber nicht sofort gefunden
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Wie oft wird `a[mid]` mit dem Suchwert verglichen, wenn eine binäre Suche in `{2, 6, 10, 14, 18, 22, 26, 30}`
  nach der 2 sucht?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: Die 2 steht zwar auf Index 0, aber die binäre Suche beginnt in der Mitte. Nur die lineare Suche fände sie mit einem Vergleich.
      - wert: "4"
        meldung: Im dritten Durchlauf ist `low = high = 0`, und `a[0] = 2` ist der Treffer. Danach gibt es keinen weiteren Vergleich.
hinweise:
  - Bei 8 Elementen ist die erste Mitte `0 + 7 / 2 = 3`.
  - Die 2 ist kleiner als jede Mitte, also wird jedes Mal `high` verkleinert.
loesung: |
  **Ansatz:** Durchläufe zählen, bis `a[mid]` gleich 2 ist.
  ---
  Durchlauf 1: `mid = 3`, 14 > 2, also `high = 2`. Durchlauf 2: `mid = 1`, 6 > 2, also `high = 0`.
  ---
  Durchlauf 3: `mid = 0`, `a[0] = 2`. Treffer nach 3 Vergleichen. Die lineare Suche wäre hier schneller gewesen, im Durchschnitt aber nicht.
```

```aufgabe
id: su-bin-reihenfolge
titel: Die Reihenfolge der Vergleiche
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine binäre Suche sucht 26 in `{2, 6, 10, 14, 18, 22, 26, 30}`. Bring die Elemente in die Reihenfolge, in der sie
  mit 26 verglichen werden.
teile:
  - typ: reihenfolge
    elemente: ['`14` auf Index 3', '`22` auf Index 5', '`26` auf Index 6']
hinweise:
  - Die erste Mitte ist Index 3. Danach geht es rechts weiter.
  - Im zweiten Durchlauf ist `low = 4` und `high = 7`.
loesung: |
  **Ansatz:** `mid` in jedem Durchlauf berechnen.
  ---
  `mid = 3` (14 < 26, also `low = 4`), dann `mid = 4 + 3 / 2 = 5` (22 < 26, also `low = 6`).
  ---
  Dann `mid = 6 + 1 / 2 = 6`, dort steht 26. Reihenfolge: 14, 22, 26.
```

```aufgabe
id: su-bin-unsortiert
titel: Binäre Suche im falschen Array
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Die Methode `binaereSuche` setzt die Regeln aus der Definition genau um. Sie wird hier mit einem **unsortierten**
  Array aufgerufen. Was gibt das Programm aus? Erkläre danach, warum.
teile:
  - typ: ausgabe
    code: |
      public class Falsch {
          public static int binaereSuche(int[] a, int schluessel) {
              int low = 0;
              int high = a.length - 1;
              while (low <= high) {
                  int mid = low + (high - low) / 2;
                  if (a[mid] < schluessel) {
                      low = mid + 1;
                  } else if (a[mid] > schluessel) {
                      high = mid - 1;
                  } else {
                      return mid;
                  }
              }
              return -1;
          }

          public static void main(String[] args) {
              int[] a = {30, 5, 18, 2, 11, 40, 7};
              System.out.println(binaereSuche(a, 30));
              System.out.println(binaereSuche(a, 2));
              System.out.println(binaereSuche(a, 18));
          }
      }
    loesung: |
      -1
      3
      -1
    fehler:
      - wert: "0\n3\n2"
        meldung: So würde die lineare Suche antworten. Die binäre Suche geht davon aus, dass das Array sortiert ist, und schließt deshalb Hälften aus, in denen die Werte doch stehen.
      - wert: "-1\n-1\n-1"
        meldung: Die 2 steht zufällig genau auf der ersten Mitte, Index 3. Dieser Vergleich trifft sofort.
  - typ: text
    label: Warum findet die Suche die 30 nicht, obwohl sie im Array steht?
    muster: |
      Die erste Mitte ist Index 3 mit dem Wert 2. Weil 2 kleiner als 30 ist, schließt die Suche die linke Hälfte aus
      und sucht nur noch rechts weiter. Das wäre nur richtig, wenn das Array sortiert wäre. Die 30 steht aber links,
      auf Index 0. Die binäre Suche setzt ein sortiertes Array voraus, sonst liefert sie falsche Ergebnisse.
hinweise:
  - Spiele jede Suche mit `low`, `high` und `mid` durch, auch wenn das Ergebnis seltsam wirkt.
  - Die erste Mitte ist bei allen drei Aufrufen Index 3 mit dem Wert 2.
loesung: |
  **Ansatz:** Die binäre Suche stur nach ihren Regeln durchspielen.
  ---
  Suchwert 30: `mid = 3`, 2 < 30, also `low = 4`. `mid = 5`, 40 > 30, also `high = 4`. `mid = 4`, 11 < 30, also `low = 5`. Jetzt ist `low > high`, Ergebnis -1.
  ---
  Suchwert 2: `a[3] = 2` gleich im ersten Durchlauf, Ergebnis 3. Das ist reines Glück, die 2 steht zufällig auf der ersten Mitte.
  ---
  Suchwert 18: `mid = 3` (2 < 18, also `low = 4`). Dann `mid = 5` (40 > 18, also `high = 4`). Dann `mid = 4` (11 < 18, also `low = 5`). Ergebnis -1, obwohl die 18 auf Index 2 steht. Die Suche schließt Hälften aus, weil sie eine Ordnung annimmt, die es nicht gibt.
```

```aufgabe
id: su-bin-doppelt
titel: Doppelte Werte im sortierten Array
niveau: 3
lernziel: 3
kompetenz: verstehen
angabe: |
  `binaereSuche` setzt die Regeln aus der Definition um, `suche` ist die lineare Suche. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Doppelt {
          public static int binaereSuche(int[] a, int schluessel) {
              int low = 0;
              int high = a.length - 1;
              while (low <= high) {
                  int mid = low + (high - low) / 2;
                  if (a[mid] < schluessel) {
                      low = mid + 1;
                  } else if (a[mid] > schluessel) {
                      high = mid - 1;
                  } else {
                      return mid;
                  }
              }
              return -1;
          }

          public static int suche(int[] a, int schluessel) {
              for (int i = 0; i < a.length; i++) {
                  if (a[i] == schluessel) {
                      return i;
                  }
              }
              return -1;
          }

          public static void main(String[] args) {
              int[] x = {1, 3, 3, 3, 3, 8, 9};
              System.out.println(binaereSuche(x, 3) + " " + suche(x, 3));
              int[] y = {3, 3, 3, 5, 7, 9, 11};
              System.out.println(binaereSuche(y, 3) + " " + suche(y, 3));
          }
      }
    loesung: |
      3 1
      1 0
    fehler:
      - wert: "1 1\n0 0"
        meldung: Die binäre Suche liefert nicht automatisch das erste Vorkommen. Sie liefert die erste **Mitte**, auf der sie den Wert trifft.
      - wert: "3 1\n3 0"
        meldung: Im zweiten Array steht auf der ersten Mitte (Index 3) die 5. Die ist größer als 3, also geht es links weiter.
hinweise:
  - Die erste Mitte bei 7 Elementen ist Index 3.
  - Im zweiten Array ist `a[3] = 5`. Danach ist der Suchbereich 0 bis 2, die neue Mitte ist 1.
loesung: |
  **Ansatz:** Beide Suchen getrennt durchspielen und die Ergebnisse vergleichen.
  ---
  Array `x`: Die erste Mitte ist Index 3, dort steht 3. Die binäre Suche liefert sofort 3. Die lineare Suche liefert den kleinsten Index 1.
  ---
  Array `y`: `a[3] = 5` ist zu groß, also `high = 2`. Neue Mitte `0 + 2 / 2 = 1`, dort steht 3. Ergebnis 1. Die lineare Suche liefert 0.
  ---
  Folgerung: Bei mehreren gleichen Werten liefert die binäre Suche **irgendeine** Stelle des Werts, nicht unbedingt die erste.
```

## Binäre Suche programmieren und Fehler vermeiden

```aufgabe
id: su-prog-check-grenzen
titel: Läuft die Schleife noch?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: ausgabe
    code: |
      int low = 3;
      int high = 3;
      System.out.println(low <= high);
      low = 4;
      System.out.println(low <= high);
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: '`<=` heißt „kleiner oder gleich“. 3 ist gleich 3, also ist `3 <= 3` wahr.'
loesung: |
  `3 <= 3` ist wahr, weil beide Seiten gleich sind. Ein Suchbereich von 3 bis 3 enthält genau einen Index.
  ---
  `4 <= 3` ist falsch. Ein Suchbereich von 4 bis 3 enthält keinen Index, er ist leer.
```

Die Regeln aus [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren)
werden jetzt zu einer Java-Methode. Die Fassung entspricht den Vorlesungsfolien. Die Variablen heißen wie dort `low`,
`high` und `mid`. `NOT_FOUND` ist die Konstante -1 aus
[18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).

```java
public static int binaereSuche(int[] daten, int schluessel) {
    int low = 0;
    int high = daten.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (daten[mid] < schluessel) {
            low = mid + 1;
        } else if (daten[mid] > schluessel) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return NOT_FOUND;
}
```

Zeile für Zeile:

- Zeilen 2 und 3: Der Suchbereich ist am Anfang das ganze Array, von Index 0 bis `daten.length - 1`.
- Zeile 4: Die Schleife läuft, solange der Suchbereich **mindestens einen** Index enthält. Bei `low == high` ist das
  genau einer, darum `<=` und nicht `<`.
- Zeile 5: `mid` ist eine lokale Variable der Schleife. Sie wird in jedem Durchlauf neu angelegt und berechnet.
- Zeilen 6 und 7: Die Mitte ist zu klein. Der Suchwert steht, wenn überhaupt, rechts von `mid`.
- Zeilen 8 und 9: Die Mitte ist zu groß. Der Suchwert steht, wenn überhaupt, links von `mid`.
- Zeilen 10 und 11: Sonst ist `daten[mid]` weder kleiner noch größer, also gleich. Treffer.
- Zeile 14: Der Suchbereich ist leer geworden, ohne dass ein Treffer kam. Ergebnis -1.

**Warum endet die Schleife immer?** `mid` liegt immer zwischen `low` und `high`. Danach wird entweder `low` auf
`mid + 1` gesetzt oder `high` auf `mid - 1`. In beiden Fällen schrumpft der Suchbereich um **mindestens einen**
Index. Irgendwann ist er leer, und dann ist `low > high`. Beim leeren Array ist `high = -1` schon am Anfang, die
Schleife läuft keinmal.

:::beispiel[Die Methode testen]
Teste eine binäre Suche immer mit sechs Fällen. Drei davon sind Treffer: ganz vorne, ganz hinten und in der Mitte.
Dazu kommen ein Suchwert kleiner als alle Elemente, einer größer als alle Elemente und das leere Array.

```java
int[] d = {4, 10, 16, 21, 29, 35};
System.out.println(binaereSuche(d, 4));
System.out.println(binaereSuche(d, 35));
System.out.println(binaereSuche(d, 21));
System.out.println(binaereSuche(d, 1));
System.out.println(binaereSuche(d, 40));
System.out.println(binaereSuche(new int[0], 4));
```

|Suchwert|Mitten (Indizes)|Werte dort|Ergebnis|
|---|---|---|---|
|4|2→0|16→4|0|
|35|2→4→5|16→29→35|5|
|21|2→4→3|16→29→21|3|
|1|2→0|16→4|-1|
|40|2→4→5|16→29→35|-1|
|leer|–|–|-1|

Die Ausgabe ist `0`, `5`, `3`, `-1`, `-1` und `-1`, jeweils in einer eigenen Zeile. Beim Suchwert 1 ist nach der
Mitte 0 der Wert `high = -1`. Beim Suchwert 40 ist nach der Mitte 5 der Wert `low = 6`. In beiden Fällen ist der
Suchbereich leer.
:::

```aufgabe
id: su-prog-luecke
titel: Die Schleife der binären Suche
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Ergänze die Lücken der binären Suche.
teile:
  - typ: lueckentext
    code: |
      public class Binaer {
          public static int binaereSuche(int[] daten, int schluessel) {
              int low = 0;
              int high = daten.length - 1;
              while (___) {
                  int mid = low + (high - low) / 2;
                  if (daten[mid] < schluessel) {
                      low = ___;
                  } else if (daten[mid] > schluessel) {
                      high = ___;
                  } else {
                      return mid;
                  }
              }
              return -1;
          }
      }
    luecken:
      - ["low <= high", "high >= low"]
      - ["mid + 1", "1 + mid"]
      - ["mid - 1"]
    fehler:
      - wert: ["low < high", "mid + 1", "mid - 1"]
        meldung: 'Mit `<` wird ein Suchbereich aus genau einem Index nicht mehr geprüft. Bei `low == high` muss die Schleife noch einmal laufen.'
      - wert: ["low <= high", "mid", "mid"]
        meldung: '`daten[mid]` ist schon geprüft. Bleibt `mid` im Suchbereich, kann er aufhören zu schrumpfen, und die Schleife läuft endlos.'
hinweise:
  - Der Suchbereich enthält Indizes, solange `low` nicht größer als `high` ist. Das geprüfte `mid` fällt jeweils weg.
loesung: |
  **Ansatz:** Bedingung: Der Suchbereich ist nicht leer. Grenzen: `mid` selbst fällt immer weg.
  ---
  `while (low <= high)`, bei zu kleiner Mitte `low = mid + 1`, bei zu großer Mitte `high = mid - 1`.
```

### Rekursiv suchen

Die binäre Suche lässt sich auch **rekursiv** schreiben, also mit einer Methode, die sich selbst aufruft (siehe
[10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf)). Statt `low` und
`high` in einer Schleife zu ändern, übergibt man den neuen Suchbereich als Parameter an den nächsten Aufruf. Das ist
dieselbe Technik wie bei „Teile und herrsche“ in
[13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren), nur dass hier immer
nur **eine** Hälfte weiterbearbeitet wird.

:::beispiel[Binäre Suche rekursiv]
```java
public static int binaereSucheRek(int[] daten, int schluessel) {
    return binaereSucheRek(daten, schluessel, 0, daten.length - 1);
}

public static int binaereSucheRek(int[] daten, int schluessel, int low, int high) {
    if (low > high) {
        return NOT_FOUND;
    }
    int mid = low + (high - low) / 2;
    if (daten[mid] < schluessel) {
        return binaereSucheRek(daten, schluessel, mid + 1, high);
    } else if (daten[mid] > schluessel) {
        return binaereSucheRek(daten, schluessel, low, mid - 1);
    } else {
        return mid;
    }
}
```

- Es gibt zwei Methoden mit demselben Namen und verschiedenen Parametern. Das ist **Überladen** aus
  [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden). Die erste Methode ist bequem für den
  Aufrufer. Sie startet die zweite mit dem ganzen Array als Suchbereich.
- **Basisfälle** (die Fälle ohne Selbstaufruf): `low > high` liefert -1, und der Treffer liefert `mid`.
- **Fortschritt:** Jeder Selbstaufruf bekommt einen kleineren Suchbereich, entweder ab `mid + 1` oder bis `mid - 1`.
- Vor jedem Selbstaufruf steht `return`. Das Ergebnis des innersten Aufrufs wird unverändert nach außen
  durchgereicht.

Aufruf `binaereSucheRek({4, 10, 16, 21, 29, 35}, 29)`:

|Aufruf|`low`|`high`|`mid`|`daten[mid]`|Folge|
|---|---|---|---|---|---|
|1|0|5|2|16|Selbstaufruf mit 3 bis 5|
|2|3|5|4|29|`return 4`|

Aufruf 2 liefert 4 an Aufruf 1, und Aufruf 1 gibt diese 4 mit `return` weiter. Das Ergebnis ist **4**.
:::

```aufgabe
id: su-prog-rek-ausgabe
titel: Die rekursive Suche mit Kontrollausgabe
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  In die rekursive Suche aus dem Beispiel wurde eine Kontrollausgabe eingebaut. Was gibt das Programm aus? Löse
  die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Rekursiv {
          public static int binaereSucheRek(int[] daten, int schluessel, int low, int high) {
              System.out.println(low + " " + high);
              if (low > high) {
                  return -1;
              }
              int mid = low + (high - low) / 2;
              if (daten[mid] < schluessel) {
                  return binaereSucheRek(daten, schluessel, mid + 1, high);
              } else if (daten[mid] > schluessel) {
                  return binaereSucheRek(daten, schluessel, low, mid - 1);
              } else {
                  return mid;
              }
          }

          public static void main(String[] args) {
              int[] a = {1, 4, 6, 10, 15, 21, 30, 33};
              System.out.println(binaereSucheRek(a, 21, 0, a.length - 1));
              System.out.println(binaereSucheRek(a, 2, 0, a.length - 1));
          }
      }
    loesung: |
      0 7
      4 7
      5
      0 7
      0 2
      0 0
      1 0
      -1
    fehler:
      - wert: "0 7\n4 7\n5\n0 7\n0 2\n0 0\n-1"
        meldung: Auch der letzte Aufruf mit dem leeren Suchbereich gibt zuerst `low` und `high` aus. Die Ausgabe steht vor der Prüfung `low > high`.
      - wert: "5\n0 7\n4 7\n-1\n0 7\n0 2\n0 0\n1 0"
        meldung: Das Ergebnis eines Aufrufs gibt `main` erst aus, wenn alle Selbstaufrufe fertig sind. Die Kontrollausgaben kommen also zuerst.
hinweise:
  - Jeder Aufruf gibt zuerst seinen Suchbereich aus. Erst wenn der äußerste Aufruf fertig ist, druckt `main` das Ergebnis.
  - Bei 8 Elementen ist die erste Mitte `0 + 7 / 2 = 3`, dort steht 10.
gefuehrt:
  - text: Suche nach 21. Der erste Aufruf gibt `0 7` aus, die Mitte ist 3 mit dem Wert 10. Mit welchem Suchbereich wird der nächste Aufruf gestartet? Gib `low` an.
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 10 ist kleiner als 21. Der Suchbereich wird `mid + 1 = 4` bis 7. Der zweite Aufruf gibt `4 7` aus.
  - text: Im zweiten Aufruf ist `mid = 4 + 3 / 2 = 5`. Was liefert die Suche nach 21?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '`a[5] = 21`, also Treffer. Die 5 wird bis `main` durchgereicht und ausgegeben.'
  - text: Suche nach 2. Nach `0 7` (Wert in der Mitte 10) und `0 2` (Wert in der Mitte 4) kommt `0 0` (Wert in der Mitte 1). Welchen Wert hat `low` im nächsten Aufruf?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`a[0] = 1` ist kleiner als 2, also `low = 0 + 1 = 1`. Der Aufruf gibt `1 0` aus und liefert -1.'
loesung: |
  **Ansatz:** Jeder Aufruf druckt zuerst seinen Suchbereich. Das Ergebnis druckt `main` danach.
  ---
  Suche nach 21: Bereiche `0 7` (Mitte 3, 10 < 21) und `4 7` (Mitte 5, Treffer). Danach druckt `main` die `5`.
  ---
  Suche nach 2: `0 7` (Mitte 3, 10 > 2), `0 2` (Mitte 1, 4 > 2), `0 0` (Mitte 0, 1 < 2) und `1 0`. Der letzte Bereich ist leer, das Ergebnis -1 druckt `main` zum Schluss.
```

### Drei typische Fehler

Die Vorlesungsfolien nennen drei Fehler, die beim Programmieren der binären Suche immer wieder passieren. Jeder
davon ist auch eine beliebte Quiz-Aussage.

:::achtung[mid statt mid + 1: die Endlosschleife]
```java
if (daten[mid] < schluessel) {
    low = mid;                 // falsch: mid + 1
}
```

Für `{4, 10}` und den Suchwert 10 ist `low = 0`, `high = 1` und `mid = 0 + 1 / 2 = 0`. `daten[0] = 4` ist kleiner als
10, also wird `low = mid = 0`. Am Suchbereich hat sich nichts geändert. Im nächsten Durchlauf ist wieder `mid = 0`,
wieder ist 4 zu klein, und so weiter für immer. Das Programm hängt. Die Grenze muss **hinter** die geprüfte Mitte
springen, sonst schrumpft der Suchbereich nicht.
:::

:::achtung[low < high: der letzte Index wird nicht geprüft]
```java
while (low < high) {           // falsch: <=
```

Für `{4, 10, 16}` und den Suchwert 16 ist die erste Mitte 1. `daten[1] = 10` ist zu klein, also `low = 2`. Jetzt ist
`low = high = 2`, der Suchbereich enthält genau den Index 2. Die Bedingung `2 < 2` ist aber falsch. Die Schleife
endet, und die Methode liefert -1, obwohl die 16 auf Index 2 steht. Bei einem Array mit nur einem Element läuft
diese Schleife überhaupt nie. Die Folien sagen dazu: Es werden dann nicht alle Einträge gefunden.
:::

:::achtung[(low + high) / 2 kann überlaufen]
Ein `int` kann höchstens den Wert 2147483647 speichern, also gut 2 Milliarden. Wird eine Rechnung größer, beginnt
Java wieder bei den negativen Zahlen. Das heißt **Überlauf**. Bei einem Array mit sehr vielen Elementen kann das
bei der Mitte passieren:

```java
int low = 1500000000;
int high = 2000000000;
int mid = (low + high) / 2;            // -397483648
int mid2 = low + (high - low) / 2;     // 1750000000
```

`low + high` wäre 3,5 Milliarden. Das passt nicht in einen `int`, und Java rechnet mit -794967296 weiter. Die Hälfte
davon ist ein negativer Index, und der Zugriff `daten[mid]` bricht ab. Die Form `low + (high - low) / 2` rechnet nur
mit dem Abstand `high - low`, und der bleibt immer klein genug. Laut den Vorlesungsfolien steckte dieser Fehler
einige Jahre lang sogar in der Java-Bibliothek. In deinen Aufgaben mit kleinen Arrays liefern beide Formeln dasselbe.
:::

```aufgabe
id: su-prog-ueberlauf
titel: Wenn die Summe zu groß wird
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt der Code aus? Der größte Wert, den ein `int` speichern kann, ist 2147483647. Darüber beginnt die Zählung
  wieder bei -2147483648.
teile:
  - typ: ausgabe
    code: |
      int low = 1200000000;
      int high = 1800000000;
      System.out.println(low + high);
      System.out.println((low + high) / 2);
      System.out.println(low + (high - low) / 2);
    loesung: |
      -1294967296
      -647483648
      1500000000
    fehler:
      - wert: "3000000000\n1500000000\n1500000000"
        meldung: 3 Milliarden passen nicht in einen `int`. Java zieht 2 hoch 32, also 4294967296, ab und rechnet mit -1294967296 weiter.
      - wert: "-1294967296\n-647483648\n-647483648"
        meldung: '`high - low` ist nur 600000000. Das passt problemlos in einen `int`, die Hälfte ist 300000000, plus `low` ergibt 1500000000.'
hinweise:
  - '`1200000000 + 1800000000` ist 3000000000. Das ist größer als 2147483647.'
  - Ein `int` hat 2 hoch 32 = 4294967296 mögliche Werte. Bei einem Überlauf wird diese Zahl abgezogen.
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob ein Zwischenergebnis größer als 2147483647 wird.
  ---
  `low + high` wäre 3000000000. Nach dem Überlauf steht `3000000000 - 4294967296 = -1294967296` da. Die Hälfte davon ist -647483648, ein unbrauchbarer Index.
  ---
  `high - low = 600000000`, die Hälfte 300000000, plus 1200000000 ergibt 1500000000. Kein Zwischenergebnis ist zu groß.
```

```aufgabe
id: su-prog-zeilen
titel: Zwei Fehler in der binären Suche
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Diese binäre Suche soll den Index des Suchwerts in einem aufsteigend sortierten Array liefern, sonst -1. Markiere
  die Zeilen, die falsch sind.
teile:
  - typ: zeilen
    code: |
      public static int binaereSuche(int[] daten, int schluessel) {
          int low = 0;
          int high = daten.length;
          while (low <= high) {
              int mid = low + (high - low) / 2;
              if (daten[mid] < schluessel) {
                  low = mid;
              } else if (daten[mid] > schluessel) {
                  high = mid - 1;
              } else {
                  return mid;
              }
          }
          return -1;
      }
    loesung: [3, 7]
    fehler:
      - wert: [7]
        meldung: 'Prüfe auch den Startwert von `high`. Kann `mid` dadurch gleich `daten.length` werden?'
      - wert: [3]
        meldung: 'Prüfe, wohin `low` nach einer zu kleinen Mitte springt. Schrumpft der Suchbereich dann noch?'
      - wert: [3, 7, 9]
        meldung: Zeile 9 ist richtig. Ist die Mitte zu groß, fällt sie mit allen Werten rechts davon weg, also `high = mid - 1`.
hinweise:
  - Prüfe jede verdächtige Zeile für sich und nimm dabei an, alle anderen Zeilen seien richtig.
  - Der größte gültige Index ist `daten.length - 1`. Nach jedem Vergleich muss `mid` aus dem Suchbereich fallen.
loesung: |
  **Ansatz:** Startwerte, Bedingung und beide Grenzänderungen mit der Fassung aus dieser Lektion vergleichen.
  ---
  Zeile 3: `high` muss `daten.length - 1` sein. Sonst kann `mid` den Wert `daten.length` annehmen. Beispiel mit korrigierter Zeile 7: Für `{4}` und den Suchwert 50 wird `low = 1 = high` und `mid = 1`, und der Zugriff `daten[1]` bricht ab.
  ---
  Zeile 7: `low = mid` lässt den Suchbereich nicht schrumpfen. Beispiel mit korrigierter Zeile 3: Für `{4, 10}` und den Suchwert 10 bleibt `mid` immer 0, die Schleife läuft endlos. Richtig ist `low = mid + 1`.
```

```aufgabe
id: su-prog-aenderungen
titel: Was bewirkt die Änderung?
niveau: 2
lernziel: 4
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen zu Codeänderungen), Inhalt nach den Folien „Typische Implementierungsfehler“
angabe: |
  Ausgangspunkt ist die korrekte Methode `binaereSuche` aus dieser Lektion. Beurteile, was jede einzelne Änderung
  bewirkt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ersetzt man `low + (high - low) / 2` durch `(low + high) / 2`, liefert die Methode für Arrays mit höchstens einer Million Elementen genau dieselben Ergebnisse.
        richtig: true
        erklaerung: Bei so kleinen Indizes ist `low + high` höchstens etwa 2 Millionen. Das läuft nicht über, und beide Formeln ergeben dieselbe Mitte.
      - text: Ersetzt man `low = mid + 1` durch `low = mid`, kann die Methode in eine Endlosschleife geraten.
        richtig: true
        erklaerung: 'Bei `{4, 10}` und dem Suchwert 10 bleibt `low` immer 0 und `mid` immer 0.'
      - text: Ersetzt man `low <= high` durch `low < high`, wird in einem Array der Länge 1 nie ein Wert gefunden.
        richtig: true
        erklaerung: 'Bei Länge 1 ist `low = high = 0`, und `0 < 0` ist falsch. Die Schleife läuft keinmal.'
      - text: Setzt man bei `daten[mid] < schluessel` irrtümlich `high = mid - 1` (und umgekehrt), findet die Methode überhaupt keinen Wert mehr.
        richtig: false
        erklaerung: 'Der Wert auf der ersten Mitte wird trotzdem gefunden, denn der Vergleich auf Gleichheit ist unverändert. Für `{4, 10, 16}` und 10 liefert auch die falsche Fassung 1.'
    fehler:
      - wert: [r, r, r, r]
        meldung: '„Überhaupt keinen“ ist sehr stark. Gibt es einen Suchwert, den auch die vertauschte Fassung findet? Denk an die erste Mitte.'
      - wert: [f, r, r, f]
        meldung: Ein Überlauf braucht eine Summe über 2147483647. Kann `low + high` bei einer Million Elementen so groß werden?
      - wert: [r, r, f, f]
        meldung: 'Spiele ein Array mit einem Element durch: `low` und `high` sind dann beide 0.'
hinweise:
  - Spiele jede Änderung mit einem Array aus zwei oder drei Elementen durch.
  - Eine Aussage mit „überhaupt keinen“ ist schon falsch, wenn ein einziger Wert doch gefunden wird.
loesung: |
  **Ansatz:** Jede Änderung einzeln an einem kleinen Beispiel prüfen.
  ---
  Aussage 1: Indizes bis eine Million ergeben Summen bis etwa 2 Millionen, weit unter 2147483647. Kein Überlauf, gleiche Mitte. Richtig.
  ---
  Aussage 2: Siehe Achtung-Kasten, `{4, 10}` und 10 hängt. Richtig. Aussage 3: Bei Länge 1 läuft die Schleife keinmal. Richtig.
  ---
  Aussage 4: Die erste Mitte wird mit `==`-Logik geprüft, bevor eine Grenze verschoben wird. Ein Wert genau dort wird gefunden. Falsch.
```

```aufgabe
id: su-prog-code-schleife
titel: Die binäre Suche schreiben
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int binaereSuche(int[] daten, int schluessel)` mit einer Schleife. Die Methode liefert einen Index,
  an dem `schluessel` steht, und -1, wenn der Wert nicht vorkommt.

  Vorbedingung: `daten != null`, und `daten` ist aufsteigend sortiert. Die Methode `Arrays.binarySearch` ist verboten.
  Ein Test durchsucht ein Array mit 5 Millionen Elementen 5000-mal. Eine lineare Suche ist dafür zu langsam.
teile:
  - typ: code
    vorlage: |
      public class Binaer {
          public static int binaereSuche(int[] daten, int schluessel) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Binaer {
          public static int binaereSuche(int[] daten, int schluessel) {
              int low = 0;
              int high = daten.length - 1;
              while (low <= high) {
                  int mid = low + (high - low) / 2;
                  if (daten[mid] < schluessel) {
                      low = mid + 1;
                  } else if (daten[mid] > schluessel) {
                      high = mid - 1;
                  } else {
                      return mid;
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: "binaereSuche(new int[]{3, 7, 12, 18, 25}, 18)", erwartet: "3", beschreibung: "Treffer" }
      - { aufruf: "binaereSuche(new int[]{3, 7, 12, 18, 25}, 3)", erwartet: "0", beschreibung: "Treffer ganz vorne" }
      - { aufruf: "binaereSuche(new int[]{3, 7, 12, 18, 25}, 25)", erwartet: "4", beschreibung: "Treffer ganz hinten" }
      - { aufruf: "binaereSuche(new int[]{3, 7, 12, 18, 25}, 13)", erwartet: "-1", beschreibung: "kein Treffer" }
      - { aufruf: "binaereSuche(new int[0], 5)", erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: "binaereSuche(new int[]{8}, 8)", erwartet: "0", versteckt: true }
      - { aufruf: "binaereSuche(new int[]{3, 7, 12, 18, 25}, 99)", erwartet: "-1", versteckt: true }
      - vorher: "int[] g = new int[5000000]; for (int i = 0; i < g.length; i++) { g[i] = 2 * i; } int s = 0; for (int k = 0; k < 5000; k++) { s += binaereSuche(g, 2 * k + 1); }"
        aufruf: "s"
        erwartet: "-5000"
        beschreibung: "5000 erfolglose Suchen in 5 Millionen Elementen"
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Arrays.binarySearch"] }
    fehler:
      - { wert: 3, meldung: "Der letzte Index muss erreichbar sein. Beginnt `high` bei `daten.length - 1`, und lautet die Bedingung `low <= high`?" }
      - { wert: 4, meldung: "Wenn der Wert fehlt, muss die Schleife enden. Springen `low` und `high` über die Mitte hinaus (`mid + 1` und `mid - 1`)?" }
      - { wert: 8, meldung: "Zu langsam: Das sieht nach einer linearen Suche aus. Halbiere den Suchbereich in jedem Durchlauf." }
hinweise:
  - Du brauchst `low`, `high` und in der Schleife `mid`. Die Schleife läuft, solange `low <= high` gilt.
  - Ist `daten[mid]` zu klein, setze `low = mid + 1`, ist es zu groß, setze `high = mid - 1`, sonst liefere `mid`.
loesung: |
  **Ansatz:** Die Regeln aus der Definition in eine `while`-Schleife übersetzen.
  ---
  ```java
  int low = 0;
  int high = daten.length - 1;
  while (low <= high) {
      int mid = low + (high - low) / 2;
      if (daten[mid] < schluessel) {
          low = mid + 1;
      } else if (daten[mid] > schluessel) {
          high = mid - 1;
      } else {
          return mid;
      }
  }
  return -1;
  ```
  ---
  Probe mit `{3, 7, 12, 18, 25}` und 13: Mitte 2 (12 < 13, `low = 3`), Mitte 3 (18 > 13, `high = 2`). Der Suchbereich ist leer, Ergebnis -1.
```

```aufgabe
id: su-prog-code-rekursiv
titel: Die binäre Suche rekursiv
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere die rekursive Methode `int sucheRek(int[] daten, int schluessel, int low, int high)`. Sie sucht
  `schluessel` im Bereich von Index `low` bis Index `high` eines aufsteigend sortierten Arrays und liefert einen
  passenden Index oder -1. Die Methode `suche` mit zwei Parametern ist schon fertig und startet die Rekursion.

  Es gelten Regeln wie bei rekursiven Aufgaben im Programmiertest. In `sucheRek` sind Schleifen, weitere
  Hilfsmethoden und Klassenvariablen verboten. Mehr dazu steht in
  [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung).
teile:
  - typ: code
    vorlage: |
      public class Rek {
          public static int suche(int[] daten, int schluessel) {
              return sucheRek(daten, schluessel, 0, daten.length - 1);
          }

          public static int sucheRek(int[] daten, int schluessel, int low, int high) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Rek {
          public static int suche(int[] daten, int schluessel) {
              return sucheRek(daten, schluessel, 0, daten.length - 1);
          }

          public static int sucheRek(int[] daten, int schluessel, int low, int high) {
              if (low > high) {
                  return -1;
              }
              int mid = low + (high - low) / 2;
              if (daten[mid] < schluessel) {
                  return sucheRek(daten, schluessel, mid + 1, high);
              } else if (daten[mid] > schluessel) {
                  return sucheRek(daten, schluessel, low, mid - 1);
              }
              return mid;
          }
      }
    tests:
      - { aufruf: "suche(new int[]{2, 9, 14, 20, 31, 47}, 31)", erwartet: "4", beschreibung: "Treffer rechts der Mitte" }
      - { aufruf: "suche(new int[]{2, 9, 14, 20, 31, 47}, 2)", erwartet: "0", beschreibung: "Treffer ganz vorne" }
      - { aufruf: "suche(new int[]{2, 9, 14, 20, 31, 47}, 15)", erwartet: "-1", beschreibung: "kein Treffer" }
      - { aufruf: "suche(new int[0], 15)", erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: "sucheRek(new int[]{2, 9, 14, 20, 31, 47}, 9, 2, 5)", erwartet: "-1", beschreibung: "nur im Bereich 2 bis 5 suchen" }
      - { aufruf: "suche(new int[]{5}, 5)", erwartet: "0", versteckt: true }
      - { aufruf: "suche(new int[]{2, 9, 14, 20, 31, 47}, 50)", erwartet: "-1", versteckt: true }
    regeln: { keineSchleifenIn: [sucheRek], rekursiv: [sucheRek], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 3, meldung: "Ohne Treffer muss die Rekursion enden. Dein Basisfall ist `low > high`, also ein leerer Suchbereich." }
      - { wert: 4, meldung: "Beim leeren Array ist `high = -1`. Prüfst du `low > high`, bevor du auf `daten[mid]` zugreifst?" }
      - { wert: 5, meldung: "Die Suche darf nur zwischen `low` und `high` suchen, nicht im ganzen Array. Berechnest du `mid` aus den Parametern?" }
      - { wert: "keineSchleifenIn", meldung: "In der rekursiven Methode sind Schleifen verboten. Den neuen Suchbereich gibst du an den Selbstaufruf weiter." }
hinweise:
  - 'Basisfall 1: `low > high`, dann -1. Danach `mid` berechnen. Basisfall 2: `daten[mid]` ist der Suchwert.'
  - Ist die Mitte zu klein, rufst du `sucheRek(daten, schluessel, mid + 1, high)` auf und gibst dessen Ergebnis mit `return` weiter.
loesung: |
  **Ansatz:** Die Schleife der binären Suche wird zur Rekursion. Der neue Suchbereich steckt in den Parametern des Selbstaufrufs.
  ---
  ```java
  if (low > high) {
      return -1;
  }
  int mid = low + (high - low) / 2;
  if (daten[mid] < schluessel) {
      return sucheRek(daten, schluessel, mid + 1, high);
  } else if (daten[mid] > schluessel) {
      return sucheRek(daten, schluessel, low, mid - 1);
  }
  return mid;
  ```
  ---
  Basisfälle: leerer Bereich und Treffer. Fortschritt: Jeder Selbstaufruf bekommt einen um mindestens einen Index kleineren Bereich. Probe mit 31: Bereich 0 bis 5, Mitte 2 (14 < 31), dann Bereich 3 bis 5, Mitte 4, Treffer.
```

```aufgabe
id: su-prog-einfuegen
titel: Wo gehört der Wert hin?
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int einfuegePosition(int[] daten, int x)` für ein aufsteigend sortiertes Array. Die Methode liefert
  den **kleinsten Index `i`, für den `daten[i] >= x` gilt**. Gibt es keinen solchen Index, liefert sie
  `daten.length`. An dieser Stelle müsste man `x` einfügen, damit das Array sortiert bleibt.

  Beispiele für `{2, 4, 4, 4, 9}`: `x = 4` liefert 1, das ist die erste 4. `x = 5` liefert 4. `x = 1` liefert 0, und
  `x = 10` liefert 5.

  Verwende eine binäre Suche. Ein Test ruft die Methode 5000-mal auf einem Array mit 5 Millionen Elementen auf.
teile:
  - typ: code
    vorlage: |
      public class Einfuegen {
          public static int einfuegePosition(int[] daten, int x) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Einfuegen {
          public static int einfuegePosition(int[] daten, int x) {
              int low = 0;
              int high = daten.length - 1;
              while (low <= high) {
                  int mid = low + (high - low) / 2;
                  if (daten[mid] < x) {
                      low = mid + 1;
                  } else {
                      high = mid - 1;
                  }
              }
              return low;
          }
      }
    tests:
      - { aufruf: "einfuegePosition(new int[]{2, 4, 4, 4, 9}, 4)", erwartet: "1", beschreibung: "erste von mehreren 4" }
      - { aufruf: "einfuegePosition(new int[]{2, 4, 4, 4, 9}, 5)", erwartet: "4", beschreibung: "zwischen 4 und 9" }
      - { aufruf: "einfuegePosition(new int[]{2, 4, 4, 4, 9}, 1)", erwartet: "0", beschreibung: "kleiner als alle" }
      - { aufruf: "einfuegePosition(new int[]{2, 4, 4, 4, 9}, 10)", erwartet: "5", beschreibung: "größer als alle" }
      - { aufruf: "einfuegePosition(new int[0], 7)", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "einfuegePosition(new int[]{6, 6, 6}, 6)", erwartet: "0", versteckt: true }
      - vorher: "int[] g = new int[5000000]; for (int i = 0; i < g.length; i++) { g[i] = 2 * i; } int s = 0; for (int k = 0; k < 5000; k++) { if (einfuegePosition(g, 9999999 - 2 * k) == 5000000 - k) { s++; } }"
        aufruf: "s"
        erwartet: "5000"
        beschreibung: "5000 Aufrufe auf 5 Millionen Elementen"
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Arrays.binarySearch"] }
    fehler:
      - { wert: 1, meldung: "Bei mehreren gleichen Werten ist die **erste** Stelle gesucht. Brich bei Gleichheit nicht ab, sondern suche links weiter (`high = mid - 1`)." }
      - { wert: 4, meldung: "Ist `x` größer als alle Elemente, ist das Ergebnis `daten.length`. Nach der Schleife steht genau dieser Wert in `low`." }
      - { wert: 7, meldung: "Zu langsam: Halbiere den Suchbereich in jedem Durchlauf, statt alle Elemente anzusehen." }
hinweise:
  - 'Nach einer erfolglosen binären Suche steht `low` genau auf der Einfügestelle (siehe das Beispiel „Eine erfolglose binäre Suche“ in [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren)).'
  - 'Behandle Gleichheit wie „zu groß“: Ist `daten[mid] >= x`, setze `high = mid - 1`. Sonst `low = mid + 1`. Am Ende liefere `low`.'
loesung: |
  **Ansatz:** Binäre Suche ohne vorzeitiges `return`. Die Schleife läuft, bis der Suchbereich leer ist, und `low` zeigt dann auf die gesuchte Stelle.
  ---
  ```java
  int low = 0;
  int high = daten.length - 1;
  while (low <= high) {
      int mid = low + (high - low) / 2;
      if (daten[mid] < x) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return low;
  ```
  ---
  Warum stimmt das? Links von `low` stehen immer nur Werte, die kleiner als `x` sind, denn `low` springt nur über zu kleine Werte. Rechts von `high` stehen nur Werte, die mindestens `x` sind. Am Ende ist `low = high + 1`, also ist `low` die erste Stelle mit `daten[low] >= x`.
  ---
  Probe mit `{2, 4, 4, 4, 9}` und 4: Mitte 2 (4, nicht kleiner, `high = 1`). Dann Mitte 0 (2 < 4, `low = 1`). Dann Mitte 1 (4, `high = 0`). Ende mit `low = 1`. Die Java-Methode `Arrays.binarySearch` liefert bei einem Fehlschlag übrigens `-(low + 1)`, damit man diese Stelle aus dem negativen Ergebnis zurückrechnen kann.
```

```reflexion
frage: Die binäre Suche hat zwei Abbruchgründe, die lineare Suche auch. Welche sind es jeweils, und warum muss bei der binären Suche nach einem Fehlvergleich mid + 1 oder mid - 1 stehen?
antwort: |
  Die lineare Suche endet beim ersten Treffer oder wenn der Index das Ende des Arrays erreicht. Die binäre Suche endet
  bei einem Treffer auf der Mitte oder wenn der Suchbereich leer ist, also `low > high`. Damit der Suchbereich
  irgendwann leer wird, muss er in jedem Durchlauf schrumpfen. Das geprüfte Element auf `mid` ist erledigt, also
  darf es nicht im Suchbereich bleiben. Darum springt `low` auf `mid + 1` oder `high` auf `mid - 1`. Bleibt `mid`
  drin, kann bei zwei verbleibenden Elementen immer wieder dieselbe Mitte herauskommen, und die Schleife endet nie.
```

## Wie viel Arbeit macht eine Suche? Vergleiche zählen

```aufgabe
id: su-auf-check-halbieren
titel: Wie oft kann man halbieren?
niveau: 1
art: check
angabe: |
  Wie oft muss man 16 halbieren, bis 1 herauskommt? (Ein ähnliches Programm steht in
  [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).)
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: 8 ist die Hälfte von 16, nicht die Zahl der Halbierungen. Zähle die Pfeile in 16 → 8 → 4 → 2 → 1.
      - wert: "5"
        meldung: Du hast die Zahlen gezählt statt der Schritte dazwischen. Von 16 bis 1 sind es vier Halbierungen.
loesung: |
  16 → 8 → 4 → 2 → 1. Das sind vier Pfeile, also vier Halbierungen.
  ---
  Anders gesagt: `2 · 2 · 2 · 2 = 16`, also 2 hoch 4 ist 16.
```

Wie gut ist eine Suche? Die Zeit in Sekunden hilft wenig, denn sie hängt vom Rechner ab. Man zählt darum die
**Vergleiche** des Suchwerts mit einem Element. Jede Suche besteht im Kern aus solchen Vergleichen, und alles andere
in der Schleife (Index erhöhen, Mitte berechnen) kommt pro Vergleich nur einmal dazu.

Die Zahl der Vergleiche hängt vom Array und vom Suchwert ab. Darum unterscheidet man drei Fälle (ausführlich in
[17.3 Bester, mittlerer und schlechtester Fall](/lernen/ep1/komplexitaet/bester-mittlerer-und-schlechtester-fall)):

- Der **beste Fall** (englisch *best case*): die günstigste mögliche Lage des Suchwerts.
- Der **schlechteste Fall** (englisch *worst case*): die ungünstigste Lage, oder der Suchwert fehlt.
- Der **durchschnittliche Fall** (englisch *average case*): der Mittelwert über alle möglichen Lagen.

In der Praxis und im Quiz zählt vor allem der schlechteste Fall. Die Folien begründen das so: Suchen nach Werten,
die gar nicht vorkommen, sind häufig, und genau das ist der schlechteste Fall.

:::beispiel[Die lineare Suche in einem Array mit 8 Elementen]
- **Bester Fall:** Der Suchwert steht auf Index 0. Ein einziger Vergleich genügt.
- **Schlechtester Fall:** Der Suchwert steht auf Index 7 oder fehlt ganz. Dann werden alle 8 Elemente verglichen.
- **Durchschnittlicher Fall:** Der Suchwert kommt genau einmal vor, und jede der 8 Stellen ist gleich
  wahrscheinlich. Steht er auf Index 0, braucht die Suche 1 Vergleich, auf Index 1 braucht sie 2 und so weiter bis
  8. Der Mittelwert ist `(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) / 8 = 36 / 8 = 4,5`.

Allgemein braucht die lineare Suche bei `n` Elementen im besten Fall 1 Vergleich und im schlechtesten Fall `n`.
Im durchschnittlichen Fall mit Treffer sind es `(n + 1) / 2`, also ungefähr die Hälfte. Die Folien schreiben dafür
„ca. n/2“.
:::

```aufgabe
id: su-auf-linear
titel: Bester und schlechtester Fall der linearen Suche
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein unsortiertes Array hat 250 Elemente. Die lineare Suche aus
  [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) sucht
  darin einen Wert.
teile:
  - typ: zahl
    label: Vergleiche im schlechtesten Fall
    loesung: "250"
    toleranz: 0.1
    fehler:
      - wert: "249"
        meldung: 249 ist der letzte Index. Verglichen werden aber alle 250 Elemente, von Index 0 bis Index 249.
      - wert: "125"
        meldung: Das ist ungefähr der Durchschnitt. Im schlechtesten Fall fehlt der Wert, und jedes Element wird verglichen.
  - typ: zahl
    label: Vergleiche im besten Fall
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: Auch wenn der Wert ganz vorne steht, muss die Suche ihn einmal vergleichen, um ihn zu erkennen.
hinweise:
  - Der schlechteste Fall ist ein fehlender Suchwert, der beste ein Treffer auf Index 0.
loesung: |
  **Ansatz:** Bester Fall Treffer auf Index 0, schlechtester Fall kein Treffer.
  ---
  Schlechtester Fall: alle 250 Elemente, also 250 Vergleiche. Bester Fall: 1 Vergleich.
```

### Wie oft halbiert die binäre Suche?

Bei der binären Suche schrumpft der Suchbereich nach jedem Vergleich ohne Treffer auf höchstens die Hälfte. Im
schlechtesten Fall läuft die Schleife, bis der Suchbereich nur noch ein Element hat, und prüft dann auch dieses. Die
Frage „Wie viele Durchläufe?“ ist also die Frage „Wie oft kann man `n` halbieren, bis 1 übrig bleibt, plus der
letzte Vergleich?“.

Für diese Frage gibt es in der Mathematik ein eigenes Wort. Der **Logarithmus zur Basis 2**, geschrieben
$\log_2 n$, beantwortet die Frage: „2 hoch wie viel ergibt `n`?“. Dabei heißt $2^4$ „2 hoch 4“, also
$2 \cdot 2 \cdot 2 \cdot 2$. Zum Beispiel ist $\log_2 16 = 4$, denn $2^4 = 16$. Und $\log_2 1024 = 10$, denn zehnmal Verdoppeln führt von 1 zu 1024. Für Zahlen, die keine
Zweierpotenz sind, liegt $\log_2 n$ zwischen zwei ganzen Zahlen. Etwa liegt $\log_2 1000$ zwischen 9 und 10, denn
$2^9 = 512$ und $2^{10} = 1024$.

:::merke[Durchläufe der binären Suche im schlechtesten Fall]
Bei `n` Elementen (mindestens eines) läuft die binäre Suche im schlechtesten Fall so oft:

$$\lfloor \log_2 n \rfloor + 1$$

Die Klammern $\lfloor\ \rfloor$ heißen „abrunden“: Man nimmt den ganzzahligen Teil. In der Praxis rechnest du so:
Suche die größte Zweierpotenz, die höchstens `n` ist. Ihr Exponent plus 1 ist das Ergebnis.

- `n = 1000`: Die größte Zweierpotenz bis 1000 ist $2^9 = 512$. Ergebnis $9 + 1 = 10$.
- `n = 1024`: $2^{10} = 1024$ passt genau. Ergebnis $10 + 1 = 11$.
- `n = 7`: $2^2 = 4$ ist die größte Zweierpotenz bis 7. Ergebnis $2 + 1 = 3$.
:::

:::beispiel[Eine Million Elemente]
Die Folien zeigen, wie langsam die Zahl der Durchläufe wächst:

|Elemente `n`|Durchläufe im schlechtesten Fall|
|---|---|
|10|4|
|100|7|
|1 000|10|
|1 000 000|20|
|1 000 000 000|30|

Warum 10 bei 1000 Elementen? Im schlechtesten Fall bleibt nach jedem Durchlauf die größere Hälfte übrig. Die Größe
des Suchbereichs vor jedem Durchlauf ist dann 1000, 500, 250, 125, 62, 31, 15, 7, 3 und 1. Das sind 10 Durchläufe.
Danach ist der Bereich leer.

Für eine Million Elemente rechnest du mit der Regel: $2^{19} = 524288$ ist die größte Zweierpotenz bis eine
Million, also $19 + 1 = 20$. Die lineare Suche bräuchte im schlechtesten Fall eine Million Vergleiche, die binäre
Suche 20.
:::

```aufgabe
id: su-auf-binaer
titel: Durchläufe bei 60 Elementen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein sortiertes Array hat 60 Elemente. Wie oft läuft die Schleife der binären Suche im schlechtesten Fall?
teile:
  - typ: zahl
    loesung: "floor(log(60, 2)) + 1"
    anzeige: "6"
    fehler:
      - wert: "5"
        meldung: 'Die größte Zweierpotenz bis 60 ist 2 hoch 5 = 32. Dazu kommt noch der letzte Durchlauf mit einem einzigen Element: 5 + 1.'
      - wert: "30"
        meldung: 30 ist die Hälfte von 60. Die binäre Suche halbiert aber in **jedem** Durchlauf, nicht nur einmal.
      - wert: "60"
        meldung: So viele Vergleiche braucht die lineare Suche im schlechtesten Fall. Die binäre Suche halbiert den Suchbereich jedes Mal.
hinweise:
  - Suche die größte Zweierpotenz, die höchstens 60 ist. Ihr Exponent plus 1 ist das Ergebnis.
loesung: |
  **Ansatz:** Regel aus dem Merke-Kasten: abgerundeter Logarithmus zur Basis 2 plus 1.
  ---
  $2^5 = 32 \le 60 < 64 = 2^6$. Also ist $\lfloor \log_2 60 \rfloor = 5$, und die Schleife läuft höchstens $5 + 1 = 6$-mal. Probe mit den Größen: 60, 30, 15, 7, 3, 1, das sind 6 Durchläufe.
```

:::achtung[Den letzten Durchlauf vergessen]
Wer für 1000 Elemente rechnet „$2^9 = 512$, also 9 Durchläufe“, liegt um eins daneben. Die 9 zählt nur die
Halbierungen von 1000 bis zum Suchbereich mit einem Element. Auch dieses letzte Element muss aber noch verglichen
werden. Das ist der zehnte Durchlauf. Prüfe das Ergebnis immer an einem winzigen Fall: Bei `n = 1` gibt es 0
Halbierungen, aber 1 Durchlauf.
:::

```aufgabe
id: su-auf-gefuehrt
titel: Durchläufe bei 5000 Elementen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein sortiertes Array hat 5000 Elemente. Wie oft läuft die Schleife der binären Suche im schlechtesten Fall? Löse
  die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "floor(log(5000, 2)) + 1"
    anzeige: "13"
    fehler:
      - wert: "12"
        meldung: '2 hoch 12 = 4096 ist die größte Zweierpotenz bis 5000. Das zählt die Halbierungen. Der letzte Vergleich mit einem einzigen Element kommt noch dazu.'
      - wert: "14"
        meldung: 2 hoch 13 = 8192 ist schon größer als 5000. Der Exponent der größten Zweierpotenz **bis** 5000 ist 12.
hinweise:
  - Verdopple ab 1024 = 2 hoch 10, bis du über 5000 kommst.
  - Der Exponent der größten Zweierpotenz bis 5000 plus 1 ist das Ergebnis.
gefuehrt:
  - text: 2 hoch 10 ist 1024. Was ist 2 hoch 12?
    teil: { typ: zahl, loesung: "2^12" }
    erklaerung: 1024 · 2 = 2048, · 2 = 4096.
  - text: Ist 2 hoch 13 noch höchstens 5000?
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [1] }
    erklaerung: 2 hoch 13 ist 8192, und das ist größer als 5000. Die größte Zweierpotenz bis 5000 ist also 2 hoch 12.
  - text: Wie viele Durchläufe sind es im schlechtesten Fall?
    teil: { typ: zahl, loesung: "13" }
    erklaerung: Exponent 12 plus der letzte Durchlauf, also 13.
loesung: |
  **Ansatz:** Größte Zweierpotenz bis 5000 suchen, Exponent plus 1.
  ---
  $2^{12} = 4096 \le 5000 < 8192 = 2^{13}$, also ist $\lfloor \log_2 5000 \rfloor = 12$.
  ---
  Die Schleife läuft höchstens 13-mal. Zum Vergleich: Die lineare Suche braucht im schlechtesten Fall 5000 Vergleiche.
```

### O(n) und O(log n)

Im Quiz werden diese Zahlen in der **O-Notation** zusammengefasst. Sie beschreibt, wie die Zahl der Schritte im
schlechtesten Fall mit der Länge `n` wächst. Feste Faktoren und kleine Zusätze fallen dabei weg.

- Die lineare Suche liegt in **O(n)** (gelesen „O von n“). Doppelt so viele Elemente bedeuten im schlechtesten Fall
  doppelt so viele Vergleiche. Auch die Varianten aus
  [18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes)
  liegen in O(n), auch die Suche von beiden Seiten mit ihren etwa n/2 Durchläufen.
- Die binäre Suche liegt in **O(log n)** (gelesen „O von log n“). Doppelt so viele Elemente bedeuten nur **einen**
  Durchlauf mehr, denn ein einziger zusätzlicher Halbierungsschritt gleicht die Verdoppelung aus.

Wie man die O-Klasse für beliebige Schleifen bestimmt, zeigen
[17.4 Die O-Notation: nur das Wachstum zählt](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt) und
[17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse). Für das Suchen genügen
diese zwei Klassen.

:::achtung[Mit dem besten Fall argumentieren]
„Die binäre Suche liegt in O(log n), weil sie im besten Fall nur einen Vergleich braucht.“ Diese Begründung ist
falsch, auch wenn die Behauptung stimmt. Die lineare Suche braucht im besten Fall ebenfalls nur einen Vergleich und
liegt trotzdem in O(n). Die O-Notation in den Quizaussagen bezieht sich auf den **schlechtesten** Fall. Bei der
binären Suche sind das bei 1000 Elementen 10 Durchläufe, bei der linearen 1000 Vergleiche.
:::

```aufgabe
id: su-auf-mittel
titel: Der durchschnittliche Fall
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein unsortiertes Array hat 9 Elemente. Der Suchwert kommt genau einmal vor, und jede der 9 Stellen ist gleich
  wahrscheinlich. Wie viele Vergleiche braucht die lineare Suche aus
  [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) im
  Durchschnitt?
teile:
  - typ: zahl
    loesung: "(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9) / 9"
    anzeige: "5"
    fehler:
      - wert: "4.5"
        meldung: '„ca. n/2“ ist nur eine Faustregel. Genau ist der Mittelwert von 1, 2, …, 9 Vergleichen, also (9 + 1) / 2.'
      - wert: "9"
        meldung: Das ist der schlechteste Fall. Im Durchschnitt steht der Suchwert in der Mitte, nicht am Ende.
hinweise:
  - Steht der Suchwert auf Index `i`, braucht die Suche `i + 1` Vergleiche.
  - Bilde den Mittelwert der Vergleichszahlen 1 bis 9.
loesung: |
  **Ansatz:** Mittelwert über alle 9 gleich wahrscheinlichen Stellen.
  ---
  Auf Index 0 braucht die Suche 1 Vergleich, auf Index 8 braucht sie 9. Summe `1 + 2 + … + 9 = 45`.
  ---
  `45 / 9 = 5`. Das passt zur Formel `(n + 1) / 2 = 10 / 2 = 5` und zur Faustregel „etwa die Hälfte“.
```


```aufgabe
id: su-auf-verdoppeln
titel: Was passiert bei doppelt so vielen Elementen?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein sortiertes Array wächst von 4000 auf 8000 Elemente. Wie ändert sich die Zahl der Schritte im schlechtesten
  Fall?
teile:
  - typ: auswahl
    label: bei der linearen Suche (Vergleiche)
    optionen: ['Sie verdoppelt sich.', 'Sie wird um 1 größer.', 'Sie bleibt gleich.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Um 1 wächst die binäre Suche. Die lineare Suche vergleicht im schlechtesten Fall jedes Element, also jetzt 8000 statt 4000.
      - wert: 2
        meldung: Mehr Elemente bedeuten im schlechtesten Fall auch mehr Vergleiche, denn jedes Element wird angesehen.
  - typ: auswahl
    label: bei der binären Suche (Durchläufe)
    optionen: ['Sie verdoppelt sich.', 'Sie wird um 1 größer.', 'Sie bleibt gleich.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Ein einziger zusätzlicher Halbierungsschritt macht aus 8000 Elementen 4000. Rechne nach: 12 Durchläufe bei 4000, 13 bei 8000.'
      - wert: 2
        meldung: 'Die größte Zweierpotenz bis 4000 ist 2 hoch 11, bis 8000 aber 2 hoch 12. Daher ein Durchlauf mehr.'
hinweise:
  - Lineare Suche im schlechtesten Fall heißt n Vergleiche.
  - 'Binäre Suche: Exponent der größten Zweierpotenz plus 1. Vergleiche 4000 und 8000.'
loesung: |
  **Ansatz:** Für beide Längen die Formeln aus dieser Lektion einsetzen.
  ---
  Linear: 4000 und dann 8000 Vergleiche, also doppelt so viele. Das ist das Kennzeichen von O(n).
  ---
  Binär: $2^{11} = 2048 \le 4000$, also 12 Durchläufe. $2^{12} = 4096 \le 8000$, also 13 Durchläufe. Einer mehr, das ist das Kennzeichen von O(log n).
```

### Welche Suche passt?

Die binäre Suche ist viel schneller, aber sie hat eine Voraussetzung: Das Array muss sortiert sein. Sortieren kostet
selbst Arbeit, und zwar mehr als eine einzelne lineare Suche. Wie viel Arbeit einfache
Sortierverfahren machen, zeigt [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren).
Sie brauchen bei `n` Elementen im schlechtesten Fall etwa $n \cdot (n - 1) / 2$ Vergleiche.
Schnellere Verfahren, wie sie die Java-Bibliothek verwendet, kommen im Durchschnitt mit grob $n \cdot \log_2 n$
Vergleichen aus.

Die Entscheidung folgt daraus:

1. **Das Array ist schon sortiert:** binäre Suche.
2. **Das Array ist unsortiert, und du suchst nur einmal oder selten:** lineare Suche. Sortieren würde mehr kosten, als
   es spart.
3. **Das Array ist unsortiert, aber du suchst sehr oft darin:** einmal sortieren, danach immer binär suchen. Die
   Kosten des Sortierens fallen nur einmal an, die Ersparnis bei jeder Suche. Die Folien schreiben dafür
   „SORT + k · O(log n) < k · O(n)“. Dabei ist `k` die Zahl der Suchen und SORT der Aufwand des Sortierens.

:::achtung[„Binär ist immer besser“]
Ein unsortiertes Array hat 8 Elemente, und du suchst einmal darin. Die lineare Suche braucht höchstens 8 Vergleiche.
Wer zuerst mit einem einfachen Verfahren sortiert, um danach binär suchen zu dürfen, zahlt $8 \cdot 7 / 2 = 28$
Vergleiche fürs Sortieren und dann noch bis zu 4 für die Suche. Das sind 32 statt 8. Die binäre Suche lohnt sich nur,
wenn die Daten schon sortiert sind oder sehr oft durchsucht werden.
:::

```aufgabe
id: su-auf-verfahren
titel: Welches Verfahren passt?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Wähle für jede Situation das passende Suchverfahren.
teile:
  - typ: auswahl
    label: a) Ein Programm misst 50 Temperaturen in zufälliger Reihenfolge und prüft danach ein einziges Mal, ob ein Wert unter 0 dabei war.
    optionen: ['lineare Suche', 'erst sortieren, dann binäre Suche', 'binäre Suche ohne Sortieren']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Für eine einzige Suche lohnt sich das Sortieren nicht. Es kostet mehr Vergleiche als die ganze lineare Suche.
      - wert: 2
        meldung: Die Werte sind nicht sortiert. Die binäre Suche würde dann falsche Ergebnisse liefern.
  - typ: auswahl
    label: b) Eine App speichert 2 Millionen Kundennummern aufsteigend sortiert und beantwortet jeden Tag Tausende Anfragen „Gibt es diese Nummer?“.
    optionen: ['lineare Suche', 'binäre Suche']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Daten sind schon sortiert. Die binäre Suche braucht hier höchstens 21 Durchläufe statt bis zu 2 Millionen Vergleichen.
  - typ: auswahl
    label: c) Ein Programm sucht in einem unsortierten Array mit 1000 Werten den **ersten** Index, an dem die 7 steht.
    optionen: ['lineare Suche von vorne', 'erst sortieren, dann binäre Suche']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach dem Sortieren stehen die Werte an anderen Stellen. Der gefundene Index hätte mit dem ursprünglichen Array nichts mehr zu tun.
hinweise:
  - Frage dich jeweils, ob die Daten sortiert sind und wie oft gesucht wird.
  - Bei c) zählt, was der Index nach dem Sortieren noch bedeutet.
loesung: |
  **Ansatz:** Für jede Situation zwei Fragen beantworten: Sind die Daten sortiert? Wie oft wird gesucht?
  ---
  a) Unsortiert, eine Suche: lineare Suche. b) Sortiert und viele Anfragen: binäre Suche, denn $2^{20} \le 2\,000\,000 < 2^{21}$, also höchstens 21 Durchläufe.
  ---
  c) Gefragt ist eine Stelle im **ursprünglichen** Array. Sortieren würde die Werte umstellen. Also lineare Suche von vorne.
```

```aufgabe
id: su-auf-aussagen
titel: Vier Aussagen zum Aufwand
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt nach den Folien „Suchalgorithmen“, Analyse und Vergleich
angabe: |
  Beurteile die Aussagen. `n` ist jeweils die Länge des Arrays, „binäre Suche“ meint die Fassung aus
  [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden).
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die lineare Suche braucht im besten Fall genau einen Vergleich.
        richtig: true
        erklaerung: Steht der Suchwert auf Index 0, endet sie nach dem ersten Vergleich.
      - text: In einem sortierten Array mit 1000 Elementen läuft die Schleife der binären Suche im schlechtesten Fall 10-mal.
        richtig: true
        erklaerung: '2 hoch 9 = 512 ist die größte Zweierpotenz bis 1000, also 9 + 1 = 10.'
      - text: Die binäre Suche liegt in O(log n), weil sie im besten Fall nur einen Vergleich braucht.
        richtig: false
        erklaerung: Die Begründung trägt nicht. Auch die lineare Suche braucht im besten Fall nur einen Vergleich. O(log n) folgt aus dem schlechtesten Fall mit etwa log₂ n Halbierungen.
      - text: Verdoppelt man n, verdoppelt sich auch die Zahl der Durchläufe der binären Suche im schlechtesten Fall.
        richtig: false
        erklaerung: Es kommt nur ein Durchlauf dazu, etwa 10 bei 1000 und 11 bei 2000.
    fehler:
      - wert: [r, r, r, f]
        meldung: Lies die dritte Aussage genau. Stimmt die **Begründung** mit „weil“? Was braucht die lineare Suche im besten Fall?
      - wert: [r, f, f, f]
        meldung: 'Rechne Aussage 2 nach: Die Halbierungen von 1000 bis 1 sind 9, dazu kommt der letzte Vergleich.'
      - wert: [r, r, f, r]
        meldung: 'Rechne Aussage 4 nach: 1000 Elemente brauchen 10 Durchläufe, 2000 Elemente brauchen 11.'
hinweise:
  - Eine Aussage mit „weil“ ist nur richtig, wenn auch die Begründung stimmt.
  - Für die Durchläufe der binären Suche gilt die Regel „Exponent der größten Zweierpotenz bis n, plus 1“.
loesung: |
  **Ansatz:** Jede Aussage mit den Formeln dieser Lektion prüfen, bei „weil“ auch die Begründung.
  ---
  Aussage 1 stimmt. Aussage 2 stimmt: $2^9 = 512 \le 1000 < 1024$, also 10 Durchläufe.
  ---
  Aussage 3 ist falsch. Der beste Fall sagt nichts über die O-Klasse, sonst läge auch die lineare Suche in O(1).
  ---
  Aussage 4 ist falsch. Bei 2000 Elementen ist $2^{10} = 1024$ die größte Zweierpotenz, also 11 Durchläufe statt 10.
```

```aufgabe
id: su-auf-lohnt
titel: Ab wann lohnt sich das Sortieren?
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein unsortiertes Array hat 1024 Elemente. Es soll `k`-mal nach Werten durchsucht werden, die meist nicht vorkommen.
  Wir rechnen mit dem schlechtesten Fall:

  - Lineare Suche: 1024 Vergleiche pro Suche.
  - Sortieren mit einem schnellen Verfahren: einmalig $1024 \cdot \log_2 1024 = 10240$ Vergleiche.
  - Binäre Suche danach: $\log_2 1024 + 1 = 11$ Vergleiche pro Suche.

  Ab welcher Zahl `k` von Suchen ist „einmal sortieren, dann `k`-mal binär suchen“ **echt billiger** als `k`-mal
  linear suchen? Gib das kleinste solche `k` an.
teile:
  - typ: zahl
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: 'Bei `k = 10` kostet linear 10240 Vergleiche, sortieren und binär suchen aber 10240 + 110 = 10350. Das ist noch teurer.'
      - wert: "10.1"
        meldung: Die Zahl der Suchen ist eine ganze Zahl. Gesucht ist das kleinste ganze `k`, für das die Ungleichung gilt.
      - wert: "1"
        meldung: Für eine einzige Suche ist das Sortieren viel teurer. Es lohnt sich erst, wenn die Ersparnis vieler Suchen die Sortierkosten übersteigt.
hinweise:
  - Stelle die Ungleichung `k · 1024 > 10240 + k · 11` auf.
  - Bring alle Terme mit `k` auf eine Seite und teile durch die Zahl vor `k`.
loesung: |
  **Ansatz:** Kosten beider Strategien als Ausdruck in `k` aufstellen und vergleichen.
  ---
  Linear kostet `1024 · k`, Sortieren plus binär kostet `10240 + 11 · k`. Gesucht ist `1024 · k > 10240 + 11 · k`.
  ---
  Wir ziehen auf beiden Seiten `11 · k` ab und erhalten `1013 · k > 10240`. Teilen durch 1013 ergibt `k > 10,108…`.
  ---
  Das kleinste ganze `k` ist 11. Probe: Bei `k = 11` kostet linear 11264, die andere Strategie 10240 + 121 = 10361. Ab 11 Suchen lohnt sich das Sortieren.
```

```reflexion
frage: Die Suche von beiden Seiten braucht nur etwa halb so viele Durchläufe wie die Grundform. Warum liegt sie trotzdem in O(n) und nicht in einer besseren Klasse?
antwort: |
  Die O-Notation fragt, wie die Arbeit **wächst**, wenn `n` wächst. Bei der Suche von beiden Seiten macht jeder
  Durchlauf zwei Vergleiche, im schlechtesten Fall sind es zusammen wieder etwa `n`. Selbst wenn es wirklich nur
  `n / 2` Vergleiche wären: Verdoppelt man `n`, verdoppelt sich auch `n / 2`. Ein fester Faktor wie ein Halb ändert
  nichts am Wachstum, darum fällt er in der O-Notation weg. Erst die binäre Suche ist grundsätzlich besser, weil eine
  Verdoppelung von `n` dort nur einen einzigen Durchlauf mehr kostet.
```

## Gemischte Wiederholung

Diese Aufgaben mischen das Suchen mit Stoff aus früheren Kapiteln. So übst du, im richtigen Moment das richtige
Werkzeug zu erkennen. Zwei Aufgaben fragen nur, welches Verfahren passt, ohne dass du rechnen musst. Bei jeder
Aufgabe steht, aus welchem Kapitel der zweite Stoff stammt.

```aufgabe
id: su-mix-equals
titel: Namen suchen mit == und mit equals
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Stoff aus [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
  `new String("Max")` erzeugt zur Laufzeit ein **neues** String-Objekt mit dem Inhalt `Max`. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      String[] namen = {"Ida", "Max", "Lea"};
      String gesucht = new String("Max");
      int a = -1;
      int b = -1;
      for (int i = 0; i < namen.length; i++) {
          if (namen[i] == gesucht && a == -1) {
              a = i;
          }
          if (namen[i].equals(gesucht) && b == -1) {
              b = i;
          }
      }
      System.out.println(a + " " + b);
    loesung: |
      -1 1
    fehler:
      - wert: "1 1"
        meldung: '`==` vergleicht bei Strings die Referenzen, also ob es **dasselbe Objekt** ist. `gesucht` ist ein neues Objekt, darum ist `==` nie wahr. Den Inhalt vergleicht `equals`.'
      - wert: "-1 -1"
        meldung: '`equals` vergleicht den Inhalt. `namen[1]` und `gesucht` enthalten beide `Max`, also findet `equals` den Treffer auf Index 1.'
hinweise:
  - '`a` merkt sich den ersten Treffer mit `==`, `b` den ersten Treffer mit `equals`.'
loesung: |
  **Ansatz:** Für beide Vergleiche getrennt prüfen, ob sie bei `"Max"` wahr werden.
  ---
  `namen[1] == gesucht` ist falsch, denn es sind zwei verschiedene Objekte. `a` bleibt -1. `namen[1].equals(gesucht)` ist wahr, `b` wird 1. Ausgabe `-1 1`.
```

```aufgabe
id: su-mix-zweites-o
titel: Das zweite o mit einer Flag-Logik
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Stoff aus [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren). Was gibt der
  Code aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Kokosnuss";
      int treffer = 0;
      int i = 0;
      while (i < s.length() && treffer < 2) {
          if (s.charAt(i) == 'o') {
              treffer++;
          }
          i++;
      }
      System.out.println(i - 1);
      System.out.println(treffer);
    loesung: |
      3
      2
    fehler:
      - wert: "4\n2"
        meldung: Ausgegeben wird `i - 1`. Nach dem zweiten Treffer wird `i` noch einmal erhöht, genau wie bei der Suche mit Flag.
      - wert: "1\n2"
        meldung: Die Schleife hört erst auf, wenn `treffer` den Wert 2 hat. Das erste `o` auf Index 1 ist erst der erste Treffer.
hinweise:
  - 'Indizes von „Kokosnuss“: K 0, o 1, k 2, o 3, s 4 und so weiter.'
  - Wann wird `treffer < 2` falsch, und welchen Wert hat `i` in diesem Moment?
loesung: |
  **Ansatz:** Wie bei der Suche mit Flag: Die Bedingung prüft einen Zähler, und `i` wird nach dem Treffer noch erhöht.
  ---
  Das erste `o` steht auf Index 1, das zweite auf Index 3. Nach dem zweiten Treffer wird `i` zu 4, dann ist `treffer < 2` falsch.
  ---
  Ausgabe `4 - 1 = 3` und `2`. Das ist die Stelle des zweiten `o`.
```

```aufgabe
id: su-mix-verfahren-zaehlen
titel: Welches Verfahren passt? (1)
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Array enthält die Noten aller 180 Teilnehmenden einer Prüfung, in der Reihenfolge der Anmeldung. Du sollst
  herausfinden, **wie viele** eine 5 haben. Welches Vorgehen passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - alle Elemente durchlaufen und jeden Treffer zählen, ohne vorzeitiges `return`
      - die Grundform der linearen Suche, sie liefert die Anzahl als Ergebnis
      - die binäre Suche, weil sie schneller ist
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Grundform liefert die **Stelle** des ersten Treffers und hört dort auf. Spätere Fünfer würden nicht gezählt.
      - wert: 2
        meldung: Die Noten stehen in der Reihenfolge der Anmeldung, also unsortiert. Außerdem sucht die binäre Suche nur eine Stelle und zählt nicht.
hinweise:
  - Gefragt ist eine Anzahl, nicht eine Stelle. Darf das Verfahren beim ersten Treffer aufhören?
loesung: |
  **Ansatz:** Zählen heißt: Jeder Treffer muss gefunden werden, also müssen alle Elemente angesehen werden.
  ---
  Richtig ist eine Schleife über alle Elemente mit `anzahl++` bei jedem Treffer. Die Grundform hört zu früh auf, die binäre Suche braucht sortierte Daten und zählt nicht.
```

```aufgabe
id: su-mix-ziffer
titel: Eine Ziffer in einer Zahl suchen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Stoff aus [7.2 Die Ziffernschleife](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme). Die
  Methode sucht die Ziffer `d` in der Zahl `n`, indem sie die Ziffern von hinten abspaltet. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Ziffer {
          public static boolean enthaeltZiffer(int n, int d) {
              while (n > 0) {
                  if (n % 10 == d) {
                      return true;
                  }
                  n = n / 10;
              }
              return false;
          }

          public static void main(String[] args) {
              System.out.println(enthaeltZiffer(4072, 7));
              System.out.println(enthaeltZiffer(4072, 1));
              System.out.println(enthaeltZiffer(0, 0));
          }
      }
    loesung: |
      true
      false
      false
    fehler:
      - wert: "true\nfalse\ntrue"
        meldung: Bei `n = 0` ist `0 > 0` falsch. Die Schleife läuft keinmal, und die Methode liefert `false`, obwohl die Zahl 0 die Ziffer 0 enthält. Ein typischer Randfall.
      - wert: "false\nfalse\nfalse"
        meldung: '`4072 % 10` ist 2, dann `407 % 10` ist 7. Die 7 wird im zweiten Durchlauf gefunden.'
hinweise:
  - '`n % 10` ist die letzte Ziffer, `n / 10` streicht sie weg.'
  - Prüfe den dritten Aufruf besonders genau. Wie oft läuft die Schleife bei `n = 0`?
loesung: |
  **Ansatz:** Eine lineare Suche über die Ziffern, von der letzten zur ersten.
  ---
  4072: Ziffern 2, 7 (Treffer), also `true`. Bei der Suche nach 1: 2, 7, 0, 4, dann ist `n = 0`, also `false`.
  ---
  Bei `n = 0` läuft die Schleife keinmal. Die Methode liefert `false`. Das ist ein Fehler im Randfall: Die Zahl 0 besteht aus der Ziffer 0. Eine `do`-`while`-Schleife, die ihren Rumpf mindestens einmal ausführt, würde ihn beheben (siehe [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife)).
```

```aufgabe
id: su-mix-rek-index
titel: Lineare Suche rekursiv mit Startindex
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Stoff aus [13.2 Prüfen, suchen und das Größte finden](/lernen/ep1/rekursion-arrays/pruefen-suchen-und-das-groesste-finden).
  So ähnlich steht die rekursive lineare Suche in den Vorlesungsfolien. Hier sind die Namen deutsch, und der Index
  steht als letzter Parameter. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class RekSuche {
          public static int sucheRek(int[] daten, int schluessel, int index) {
              if (index == daten.length) {
                  return -1;
              } else if (daten[index] == schluessel) {
                  return index;
              } else {
                  return sucheRek(daten, schluessel, index + 1);
              }
          }

          public static void main(String[] args) {
              int[] d = {3, 6, 9, 6};
              System.out.println(sucheRek(d, 6, 0));
              System.out.println(sucheRek(d, 6, 2));
              System.out.println(sucheRek(d, 4, 0));
          }
      }
    loesung: |
      1
      3
      -1
    fehler:
      - wert: "1\n1\n-1"
        meldung: Der zweite Aufruf beginnt bei Index 2. Die 6 auf Index 1 liegt davor und wird nie angesehen.
      - wert: "1\n3\n3"
        meldung: Die 4 kommt nicht vor. Beim Aufruf mit `index == 4` greift der erste Basisfall und liefert -1.
hinweise:
  - Der Parameter `index` sagt, ab welcher Stelle gesucht wird. Ein Basisfall meldet „nicht gefunden“, einer den Treffer.
loesung: |
  **Ansatz:** Die Rekursion ersetzt die Schleife. Jeder Aufruf prüft eine Stelle und gibt den Rest an den nächsten weiter.
  ---
  Ab 0 nach 6: Index 0 (3), Index 1 (6), Ergebnis 1. Ab 2 nach 6: Index 2 (9), Index 3 (6), Ergebnis 3.
  ---
  Nach 4: Indizes 0 bis 3 ohne Treffer, dann `index == 4 == daten.length`, Ergebnis -1.
```

```aufgabe
id: su-mix-waechter-alias
titel: Ein Wächter, der nicht weggeräumt wird
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Stoff aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array).
  Diese Suche mit Wächter vergisst, den letzten Platz zurückzusetzen. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Vergessen {
          public static int sucheOhneZuruecksetzen(int[] daten, int schluessel) {
              daten[daten.length - 1] = schluessel;
              int i = 0;
              while (daten[i] != schluessel) {
                  i++;
              }
              return i;
          }

          public static void main(String[] args) {
              int[] werte = {5, 8, 2};
              int[] kopie = werte;
              System.out.println(sucheOhneZuruecksetzen(werte, 9));
              System.out.println(Arrays.toString(kopie));
          }
      }
    loesung: |
      2
      [5, 8, 9]
    fehler:
      - wert: "2\n[5, 8, 2]"
        meldung: Die Methode bekommt eine Kopie der **Referenz**, nicht des Arrays. Sie schreibt in das Array von `werte`. Und `kopie` ist nur ein zweiter Name für genau dieses Array.
      - wert: "-1\n[5, 8, 9]"
        meldung: Diese Fassung kennt kein -1. Sie liefert einfach die Stelle, an der die Schleife hält, und das ist der Wächter auf Index 2.
hinweise:
  - Wie viele Arrays gibt es in diesem Programm? Auf welches zeigen `werte`, `kopie` und `daten`?
  - Die Schleife hält spätestens auf dem Wächter.
loesung: |
  **Ansatz:** Referenzen verfolgen. `werte`, `kopie` und der Parameter `daten` zeigen alle auf dasselbe Array.
  ---
  Die Methode schreibt die 9 auf den letzten Platz. Die Schleife hält dort, bei `i = 2`. Die 9 kam nur durch den Wächter dorthin, das Ergebnis 2 ist also falsch.
  ---
  Das Array hat jetzt den Inhalt `{5, 8, 9}`. `kopie` zeigt auf dasselbe Array, also erscheint `[5, 8, 9]`. Darum muss eine Suche mit Wächter den alten Wert zurückschreiben und danach prüfen, ob der Treffer echt war.
```

```aufgabe
id: su-mix-feld
titel: Die erste Stelle in einem Spielfeld
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Stoff aus [14.2 Verschachtelte Schleifen über Zeilen und Spalten](/lernen/ep1/arrays-2d/verschachtelte-schleifen-ueber-zeilen-und-spalten).
  So ähnlich sucht die Methode `figurePosition` im Sokoban-Projekt aus Aufgabenblatt 6 (WS 2023) nach der Figur. Dort
  steht im Ergebnis allerdings zuerst die Spalte, dann die Zeile. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Feld {
          public static int[] finde(int[][] feld, int x) {
              for (int i = 0; i < feld.length; i++) {
                  for (int j = 0; j < feld[i].length; j++) {
                      if (feld[i][j] == x) {
                          return new int[]{i, j};
                      }
                  }
              }
              return new int[]{-1, -1};
          }

          public static void main(String[] args) {
              int[][] feld = {{4, 0, 7}, {1, 7}, {}, {7, 2, 9}};
              System.out.println(Arrays.toString(finde(feld, 7)));
              System.out.println(Arrays.toString(finde(feld, 2)));
              System.out.println(Arrays.toString(finde(feld, 5)));
          }
      }
    loesung: |
      [0, 2]
      [3, 1]
      [-1, -1]
    fehler:
      - wert: "[1, 3]\n[4, 2]\n[-1, -1]"
        meldung: Zeilen und Spalten zählen beide ab 0. Die erste 7 steht in Zeile 0, Spalte 2.
      - wert: "[3, 0]\n[3, 1]\n[-1, -1]"
        meldung: Die äußere Schleife läuft über die Zeilen. Zeile 0 wird zuerst ganz durchsucht, und dort steht schon eine 7.
hinweise:
  - Die Suche geht Zeile für Zeile, in jeder Zeile von links nach rechts. Die leere Zeile 2 wird einfach übersprungen.
loesung: |
  **Ansatz:** Lineare Suche in zwei Dimensionen. Das erste `return` beendet beide Schleifen.
  ---
  Suchwert 7: In Zeile 0 steht er auf Spalte 2. Ergebnis `[0, 2]`. Suchwert 2: Zeilen 0 bis 2 ohne Treffer, in Zeile 3 auf Spalte 1. Ergebnis `[3, 1]`.
  ---
  Die 5 kommt nicht vor. Beide Schleifen laufen ganz durch, das Ergebnis ist `[-1, -1]`. Die leere Zeile `{}` verursacht keinen Fehler, ihre innere Schleife läuft keinmal.
```

```aufgabe
id: su-mix-verfahren-situationen
titel: Welches Verfahren passt? (2)
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Wähle für jede Situation die passende Suche. Du musst nichts rechnen.
teile:
  - typ: auswahl
    label: a) Ein Array speichert alle Bestellungen in zeitlicher Reihenfolge. Gesucht ist die **neueste** Bestellung des Kunden mit der Nummer 815.
    optionen: ['lineare Suche von hinten', 'lineare Suche von vorne', 'binäre Suche']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Von vorne findest du die **älteste** Bestellung. Für die neueste müsstest du jeden Treffer merken und bis zum Ende laufen.
      - wert: 2
        meldung: Das Array ist nach der Zeit geordnet, nicht nach der Kundennummer. Für die Kundennummer ist es unsortiert.
  - typ: auswahl
    label: b) Gesucht ist, ab welcher Stelle die drei Messwerte 0, 0, 0 direkt hintereinander stehen.
    optionen: ['Teilfolgensuche mit zwei Schleifen', 'binäre Suche nach 0', 'Grundform der linearen Suche nach 0']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Messwerte sind nicht sortiert, und die binäre Suche findet nur einzelne Werte, keine Folgen.
      - wert: 2
        meldung: Die Grundform findet die erste einzelne 0. Ob danach noch zwei weitere Nullen folgen, prüft sie nicht.
  - typ: auswahl
    label: c) Ein Wörterbuch-Programm hat 80000 alphabetisch sortierte Einträge und muss bei jedem Tastendruck nachsehen.
    optionen: ['binäre Suche', 'lineare Suche']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Einträge sind sortiert, und es wird sehr oft gesucht. Die binäre Suche braucht hier höchstens 17 Durchläufe statt bis zu 80000 Vergleichen.
hinweise:
  - Prüfe jeweils, ob die Daten nach dem gesuchten Merkmal sortiert sind und ob ein einzelner Wert oder eine Folge gesucht ist.
loesung: |
  **Ansatz:** Für jede Situation fragen: Sortiert nach dem Suchmerkmal? Erster oder letzter Treffer? Ein Wert oder eine Folge?
  ---
  a) Unsortiert nach Kundennummer, gesucht der letzte Treffer: lineare Suche von hinten. b) Eine Folge: Teilfolgensuche.
  ---
  c) Sortiert und sehr viele Suchen: binäre Suche. $2^{16} = 65536 \le 80000 < 2^{17}$, also höchstens 17 Durchläufe.
```

```aufgabe
id: su-mix-aufrufe
titel: Wie viele Aufrufe macht die rekursive binäre Suche?
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Stoff aus [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).
  `binaereSucheRek` ist die rekursive Fassung mit vier Parametern aus
  [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden). Wie oft wird sie insgesamt aufgerufen, wenn
  man `binaereSucheRek(a, 14, 0, 6)` mit `a = {1, 3, 5, 7, 9, 11, 13}` startet? Der erste Aufruf zählt mit.
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Nach der Mitte 6 (Wert 13) wird noch einmal aufgerufen, mit `low = 7` und `high = 6`. Erst dieser Aufruf erkennt den leeren Bereich und liefert -1.
      - wert: "7"
        meldung: Die binäre Suche halbiert. Sie ruft nicht für jedes Element einen eigenen Aufruf auf.
hinweise:
  - Notiere für jeden Aufruf `low` und `high`. Auch der Aufruf mit leerem Suchbereich zählt.
  - '14 ist größer als alle Elemente. Die Grenze `low` wandert also jedes Mal nach rechts.'
loesung: |
  **Ansatz:** Aufrufkette mit den Suchbereichen aufschreiben, bis ein Basisfall greift.
  ---
  Aufruf 1: Bereich 0 bis 6, Mitte 3 (7 < 14). Aufruf 2: Bereich 4 bis 6, Mitte 5 (11 < 14). Aufruf 3: Bereich 6 bis 6, Mitte 6 (13 < 14).
  ---
  Aufruf 4: Bereich 7 bis 6, also leer. Basisfall, Ergebnis -1. Insgesamt 4 Aufrufe, einer mehr als die Schleife Durchläufe hätte.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im Format des
TUWEL-Quiz gestellt, also vier Aussagen, die du als richtig oder falsch beurteilst. Die dritte ist eine
Trace-Tabelle wie im Folienbeispiel zur binären Suche. Danach folgen eine Aufgabe im Stil
eines Aufgabenblatts, zwei Aufgaben im Stil des Programmiertests und Fragen für das Feedbackgespräch. Plane die
angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen aufdeckst. Das Format 2026 ist nicht veröffentlicht.
Die Aufgaben folgen den Quiz, Blättern und Programmiertests der Jahre 2020 bis 2023.

Im Quiz heißen Array und Suchwert meist `data` und `key`, und die Konstante für „nicht gefunden“ heißt `NOT_FOUND`
mit dem Wert -1. Die ersten beiden Aufgaben verwenden darum dieselben Namen.

```aufgabe
id: su-pruef-quiz-zweierschritte
titel: Erst die geraden, dann die ungeraden Indizes
niveau: 3
punkte: 2
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2, Frage 7 (Variante der linearen Suche, vier Aussagen), Code und Aussagen neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist die folgende Variante der linearen Suche. Vorbedingung: `data != null`.

  ```java
  private static final int NOT_FOUND = -1;

  private static int search(int[] data, int key) {
      for (int start = 0; start <= 1; start++) {
          for (int i = start; i < data.length; i += 2) {
              if (data[i] == key) {
                  return i;
              }
          }
      }
      return NOT_FOUND;
  }
  ```

  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Jeder Wert, der in `data` vorkommt, wird gefunden.
        richtig: true
        erklaerung: Der erste Durchlauf der äußeren Schleife prüft alle geraden Indizes, der zweite alle ungeraden. Zusammen ist das jeder Index.
      - text: Gibt es mehrere Treffer, gewinnt immer der Treffer ganz links im Array.
        richtig: false
        erklaerung: 'Für `{1, 5, 5}` und 5 werden zuerst die Indizes 0 und 2 geprüft. Die Methode liefert 2, obwohl die 5 schon auf Index 1 steht.'
      - text: Für ein Array der Länge 1 wird auch auf `data[1]` zugegriffen.
        richtig: false
        erklaerung: 'Beim zweiten Durchlauf ist `i = 1`, und `1 < 1` ist falsch. Die innere Schleife läuft keinmal.'
      - text: Hat `data` die Länge n, wird `data[i] == key` höchstens n-mal ausgewertet. Die Methode liegt also in O(n).
        richtig: true
        erklaerung: Jeder Index wird höchstens einmal geprüft, zusammen höchstens n Vergleiche.
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Spiele `{1, 5, 5}` mit dem Suchwert 5 durch. Welche Indizes kommen zuerst dran?'
      - wert: [r, f, r, r]
        meldung: 'Prüfe die innere Schleife bei `start = 1` und Länge 1. Ist `1 < 1` wahr?'
      - wert: [f, f, f, r]
        meldung: Gehe alle Werte durch, die `i` in beiden Durchläufen der äußeren Schleife annimmt. Fehlt ein Index?
hinweise:
  - Schreib für ein Array der Länge 5 auf, in welcher Reihenfolge die Indizes geprüft werden.
  - Für Aussage 2 brauchst du ein Gegenbeispiel mit einem Treffer auf einem ungeraden und einem geraden Index.
loesung: |
  **Ansatz:** Die Reihenfolge der geprüften Indizes bestimmen: zuerst 0, 2, 4, …, dann 1, 3, 5, …
  ---
  Aussage 1 stimmt, jeder Index kommt genau einmal dran. Aussage 2 ist falsch: Ein Treffer auf einem geraden Index gewinnt gegen einen kleineren ungeraden Index.
  ---
  Aussage 3 ist falsch, bei Länge 1 läuft die innere Schleife für `start = 1` keinmal. Aussage 4 stimmt, höchstens n Vergleiche.
```

```aufgabe
id: su-pruef-quiz-binaer
titel: Eine veränderte binäre Suche
niveau: 3
punkte: 2
lernziel: 4
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen zu verändertem Code), Inhalt nach den Folien „Binäre Suche“
angabe: |
  (Zeitrichtwert: 6 Minuten) Diese Fassung der binären Suche wurde verändert. Vorbedingung: `data != null`, und `data`
  ist aufsteigend sortiert.

  ```java
  private static int binarySearch(int[] data, int key) {
      int low = 0;
      int high = data.length - 1;
      while (low < high) {
          int mid = low + (high - low) / 2;
          if (data[mid] < key) {
              low = mid + 1;
          } else {
              high = mid;
          }
      }
      if (data.length > 0 && data[low] == key) {
          return low;
      }
      return NOT_FOUND;
  }
  ```

  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Methode terminiert für jedes erlaubte Array.
        richtig: true
        erklaerung: 'Solange `low < high` gilt, ist `mid < high`. Also wird entweder `low` größer oder `high` kleiner. Der Bereich schrumpft, bis `low == high` ist.'
      - text: Kommt `key` mehrmals vor, liefert die Methode den kleinsten Index, an dem `key` steht.
        richtig: true
        erklaerung: 'Bei Gleichheit wird `high = mid` gesetzt, die Suche geht also links weiter. Für `{2, 4, 4, 4, 9}` und 4 endet sie bei Index 1.'
      - text: Für ein leeres Array wirft die Methode eine `ArrayIndexOutOfBoundsException`.
        richtig: false
        erklaerung: '`high` ist -1, die Schleife läuft keinmal. In der `if`-Bedingung ist `data.length > 0` falsch, wegen der Kurzschlussauswertung wird `data[0]` nie gelesen.'
      - text: Weil die Schleife erst bei `low == high` endet, liegt die Laufzeit im schlechtesten Fall in O(n).
        richtig: false
        erklaerung: Der Suchbereich halbiert sich trotzdem in jedem Durchlauf. Die Laufzeit liegt in O(log n).
    fehler:
      - wert: [f, r, f, f]
        meldung: '`high = mid` ohne `- 1` ist hier kein Fehler, weil die Bedingung `low < high` lautet. Prüfe, ob der Bereich trotzdem in jedem Durchlauf schrumpft.'
      - wert: [r, f, f, f]
        meldung: 'Spiele `{2, 4, 4, 4, 9}` mit dem Suchwert 4 durch. Was passiert, wenn die Mitte gleich dem Suchwert ist?'
      - wert: [r, r, r, f]
        meldung: Schau dir die Bedingung nach der Schleife an. Welcher Teil wird zuerst geprüft?
hinweise:
  - Diese Fassung bricht bei einem Treffer nicht ab. Sie schiebt `high` auf die Mitte und sucht links weiter.
  - Prüfe das leere Array, ein Array mit einem Element und ein Array mit drei gleichen Werten.
loesung: |
  **Ansatz:** Die vier Fragen an jede Suche stellen und mit kleinen Arrays prüfen.
  ---
  Terminierung: Bei `low < high` ist `mid` kleiner als `high`. `low = mid + 1` oder `high = mid` verkleinern den Bereich. Aussage 1 stimmt.
  ---
  `{2, 4, 4, 4, 9}` und 4: Mitte 2 (4, also `high = 2`). Dann Mitte 1 (4, also `high = 1`). Dann Mitte 0 (2 < 4, also `low = 1`). Ergebnis 1, der kleinste Index. Aussage 2 stimmt.
  ---
  Leeres Array: keine Exception, Ergebnis -1. Aussage 3 ist falsch. Der Bereich halbiert sich weiterhin, also O(log n). Aussage 4 ist falsch.
```

```aufgabe
id: su-pruef-trace
titel: Eine binäre Suche mit zwölf Elementen
niveau: 3
punkte: 3
lernziel: 3
kompetenz: rechnen
quelle: Stil der Folien „Beispiel mit Variablen“ (Suchalgorithmen), Daten neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Die binäre Suche aus
  [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden)
  sucht 39 in

  ```text
  Index:  0   1   2   3   4   5   6   7   8   9  10  11
  Wert:   3   6   8  12  17  21  26  30  34  39  45  50
  ```

  **a)** Trage für jeden Durchlauf `low`, `high` und `mid` ein. **b)** Welchen Index liefert die Suche? **c)** Wie
  viele Vergleiche hätte die lineare Suche aus
  [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden) für
  denselben Suchwert gebraucht?
teile:
  - typ: trace
    label: a)
    spalten: [low, high, mid]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3, Durchlauf 4]
    loesung: [[0, 11, 5], [6, 11, 8], [9, 11, 10], [9, 9, 9]]
    fehler:
      - wert: ["0", "11", "5", "6", "11", "8", "9", "11", "10", "10", "11", "10"]
        meldung: '`a[10] = 45` ist größer als 39. Dann wird `high = mid - 1 = 9`, und `low` bleibt 9.'
  - typ: zahl
    label: b)
    loesung: "9"
    fehler:
      - wert: "10"
        meldung: Die 39 ist das zehnte Element, steht aber auf Index 9.
  - typ: zahl
    label: c)
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: Die lineare Suche vergleicht die Indizes 0 bis 9. Das sind 10 Vergleiche, nicht 9.
      - wert: "4"
        meldung: 4 Vergleiche braucht die binäre Suche. Die lineare Suche geht von vorne Element für Element.
hinweise:
  - Bei 12 Elementen ist `high = 11` und die erste Mitte `0 + 11 / 2 = 5`.
  - Nach jedem Vergleich ändert sich genau eine Grenze. Ist `a[mid]` zu groß, wird `high = mid - 1`.
loesung: |
  **Ansatz:** Durchlauf für Durchlauf `mid` berechnen, vergleichen, eine Grenze verschieben.
  ---
  Durchlauf 1: `mid = 5`, 21 < 39, `low = 6`. Durchlauf 2: `mid = 6 + 5 / 2 = 8`, 34 < 39, `low = 9`.
  ---
  Durchlauf 3: `mid = 9 + 2 / 2 = 10`, 45 > 39, `high = 9`. Durchlauf 4: `mid = 9`, `a[9] = 39`. Ergebnis 9.
  ---
  Die lineare Suche hätte die Indizes 0 bis 9 verglichen, also 10 Vergleiche statt 4.
```

```aufgabe
id: su-pruef-blatt-protokoll
titel: Eine binäre Suche mit Protokoll
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: Stil eines Aufgabenblatts (Methode mit vorgegebener Ausgabe), Idee nach den Folien „Beispiel mit Variablen“ und den Kontrollausgaben aus 9.5 (Debuggen, Fehler systematisch finden)
angabe: |
  (Zeitrichtwert: 12 Minuten) Implementiere `int sucheMitProtokoll(int[] daten, int schluessel)`. Die Methode ist eine
  binäre Suche wie in
  [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden)
  und liefert einen Index des Suchwerts oder -1. Zusätzlich gibt sie in jedem Durchlauf eine
  Zeile mit `low`, `mid` und `high` aus, getrennt durch je ein Leerzeichen. Die Zeile kommt direkt nach der Berechnung
  von `mid`. Endet die Suche ohne Treffer, gibt sie zum Schluss die Zeile `nicht gefunden` aus.

  Vorbedingung: `daten != null`, und `daten` ist aufsteigend sortiert.

  Beispiel: `sucheMitProtokoll({2, 5, 8, 13, 21, 34, 55}, 34)` gibt aus

  ```
  0 3 6
  4 5 6
  ```

  und liefert 5.
teile:
  - typ: code
    vorlage: |
      public class Protokoll {
          public static int sucheMitProtokoll(int[] daten, int schluessel) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Protokoll {
          public static int sucheMitProtokoll(int[] daten, int schluessel) {
              int low = 0;
              int high = daten.length - 1;
              while (low <= high) {
                  int mid = low + (high - low) / 2;
                  System.out.println(low + " " + mid + " " + high);
                  if (daten[mid] < schluessel) {
                      low = mid + 1;
                  } else if (daten[mid] > schluessel) {
                      high = mid - 1;
                  } else {
                      return mid;
                  }
              }
              System.out.println("nicht gefunden");
              return -1;
          }
      }
    tests:
      - { aufruf: "sucheMitProtokoll(new int[]{2, 5, 8, 13, 21, 34, 55}, 34)", stdout: "0 3 6\n4 5 6\n", beschreibung: "Ausgabe für das Beispiel" }
      - { aufruf: "sucheMitProtokoll(new int[]{2, 5, 8, 13, 21, 34, 55}, 34)", erwartet: "5", beschreibung: "Rückgabewert für das Beispiel" }
      - { aufruf: "sucheMitProtokoll(new int[]{2, 5, 8, 13, 21, 34, 55}, 4)", stdout: "0 3 6\n0 1 2\n0 0 0\nnicht gefunden\n", beschreibung: "Ausgabe ohne Treffer" }
      - { aufruf: "sucheMitProtokoll(new int[]{2, 5, 8, 13, 21, 34, 55}, 4)", erwartet: "-1", beschreibung: "Rückgabewert ohne Treffer" }
      - { aufruf: "sucheMitProtokoll(new int[0], 4)", stdout: "nicht gefunden\n", beschreibung: "leeres Array" }
      - { aufruf: "sucheMitProtokoll(new int[]{10, 20, 30, 40}, 40)", stdout: "0 1 3\n2 2 3\n3 3 3\n", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Arrays.binarySearch"] }
    fehler:
      - { wert: 1, meldung: "Die Reihenfolge in jeder Zeile ist `low`, `mid`, `high`. Die Zeile kommt direkt nach der Berechnung von `mid` und vor dem Vergleich." }
      - { wert: 3, meldung: "Ohne Treffer endet die Schleife, wenn `low > high` ist. Erst danach kommt die Zeile `nicht gefunden`." }
      - { wert: 5, meldung: "Beim leeren Array läuft die Schleife keinmal. Es erscheint nur `nicht gefunden`." }
hinweise:
  - Nimm die binäre Suche aus [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden) und füge nach `int mid = …` eine Ausgabezeile ein.
  - '`System.out.println(low + " " + mid + " " + high);` und nach der Schleife `System.out.println("nicht gefunden");`.'
loesung: |
  **Ansatz:** Binäre Suche wie in [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden), dazu zwei Ausgaben: eine in jedem Durchlauf, eine nach erfolgloser Schleife.
  ---
  ```java
  int low = 0;
  int high = daten.length - 1;
  while (low <= high) {
      int mid = low + (high - low) / 2;
      System.out.println(low + " " + mid + " " + high);
      if (daten[mid] < schluessel) {
          low = mid + 1;
      } else if (daten[mid] > schluessel) {
          high = mid - 1;
      } else {
          return mid;
      }
  }
  System.out.println("nicht gefunden");
  return -1;
  ```
  ---
  Probe mit dem Suchwert 4: Mitte 3 (13 > 4), Mitte 1 (5 > 4), Mitte 0 (2 < 4). Dann ist `low = 1 > high = 0`, es folgt `nicht gefunden`. Das sind genau die erwarteten vier Zeilen.
```

```aufgabe
id: su-pruef-pt-positionen
titel: Alle Startstellen einer Folge
niveau: 3
punkte: 6
lernziel: 6
kompetenz: anwenden
quelle: Stil der ersten Aufgabe im Programmiertest (neues Array erzeugen), Idee nach der Teilfolgensuche (findMatches) im Programmiertest PT16 WS 2020/21 und im Probetest vom 26.01.2023
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int[] allePositionen(int[] daten, int[] muster)`. Die Methode erzeugt ein
  **neues** Array, das alle Startstellen enthält, an denen das ganze Muster in `daten` steht, aufsteigend geordnet.
  Vorkommen dürfen sich überlappen. Gibt es keines, ist das Ergebnis ein leeres Array. `daten` und `muster` bleiben
  unverändert.

  Vorbedingung: `daten != null`, `muster != null` und `muster.length >= 1`.

  Es gelten die Einschränkungen des Programmiertests: keine Hilfsmethoden, keine Klassenvariablen, kein `clone`, kein
  `System.arraycopy`. Im Test sind aus der Klasse `Arrays` nur `toString` und `deepToString` für Ausgaben erlaubt, in
  dieser Methode brauchst du keine davon.

  Beispiele:

  - `allePositionen({1, 2, 1, 2, 1}, {1, 2, 1})` liefert `{0, 2}`.
  - `allePositionen({7, 7, 7}, {7})` liefert `{0, 1, 2}`.
  - `allePositionen({3, 4}, {5})` liefert `{}`.
teile:
  - typ: code
    vorlage: |
      public class Positionen {
          public static int[] allePositionen(int[] daten, int[] muster) {
              return new int[0]; // TODO
          }
      }
    musterloesung: |
      public class Positionen {
          public static int[] allePositionen(int[] daten, int[] muster) {
              int anzahl = 0;
              for (int i = 0; i <= daten.length - muster.length; i++) {
                  boolean passt = true;
                  for (int j = 0; j < muster.length; j++) {
                      if (daten[i + j] != muster[j]) {
                          passt = false;
                      }
                  }
                  if (passt) {
                      anzahl++;
                  }
              }
              int[] ergebnis = new int[anzahl];
              int k = 0;
              for (int i = 0; i <= daten.length - muster.length; i++) {
                  boolean passt = true;
                  for (int j = 0; j < muster.length; j++) {
                      if (daten[i + j] != muster[j]) {
                          passt = false;
                      }
                  }
                  if (passt) {
                      ergebnis[k] = i;
                      k++;
                  }
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "allePositionen(new int[]{1, 2, 1, 2, 1}, new int[]{1, 2, 1})", erwartet: "new int[]{0, 2}", beschreibung: "überlappende Vorkommen" }
      - { aufruf: "allePositionen(new int[]{7, 7, 7}, new int[]{7})", erwartet: "new int[]{0, 1, 2}", beschreibung: "Muster mit einem Element" }
      - { aufruf: "allePositionen(new int[]{3, 4}, new int[]{5})", erwartet: "new int[0]", beschreibung: "kein Vorkommen" }
      - { aufruf: "allePositionen(new int[]{1}, new int[]{1, 1})", erwartet: "new int[0]", beschreibung: "Muster länger als das Array" }
      - { aufruf: "allePositionen(new int[0], new int[]{2})", erwartet: "new int[0]", versteckt: true }
      - { aufruf: "allePositionen(new int[]{5, 6, 9, 5, 6}, new int[]{5, 6})", erwartet: "new int[]{0, 3}", versteckt: true }
      - { vorher: "int[] d = {2, 2, 2}; int[] m = {2, 2};", aufruf: "allePositionen(d, m)", ergebnis: "d", erwartet: "new int[]{2, 2, 2}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, verboteneApi: ["Arrays"] }
    fehler:
      - { wert: 1, meldung: "Vorkommen dürfen sich überlappen. Prüfe jede Startstelle einzeln, statt nach einem Treffer um die Musterlänge weiterzuspringen." }
      - { wert: 3, meldung: "Ohne Vorkommen ist das Ergebnis ein Array der Länge 0. Bestimmst du die Länge vorher durch Zählen?" }
      - { wert: 4, meldung: "Ist das Muster länger als das Array, darf kein Zugriff außerhalb passieren. Die letzte Startstelle ist `daten.length - muster.length`." }
hinweise:
  - 'Zwei Durchgänge wie beim Filtern in [12.4 Neue Arrays bauen: kopieren, umdrehen, filtern, einfügen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen). Der erste zählt die Treffer, dann legst du ein Array dieser Länge an.'
  - Der zweite Durchgang wiederholt die Teilfolgensuche und schreibt jede Startstelle mit einem eigenen Schreibindex `k` ins neue Array.
loesung: |
  **Ansatz:** Muster „neues Array erzeugen“: erst zählen, dann anlegen, dann füllen. Für jede Startstelle prüft die Teilfolgensuche aus [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche), ob das Muster passt.
  ---
  Erster Durchgang: Für jede Startstelle `i` von 0 bis `daten.length - muster.length` setzt die innere Schleife `passt`. Bei jedem Treffer `anzahl++`.
  ---
  Zweiter Durchgang: dieselbe Prüfung, bei jedem Treffer `ergebnis[k] = i; k++;`. Am Ende ist `k` gleich `anzahl`.
  ---
  Probe mit `{1, 2, 1, 2, 1}` und `{1, 2, 1}`: Startstellen 0, 1, 2. Ab 0 steht `1, 2, 1` (Treffer), ab 1 steht `2, 1, 2`, ab 2 steht `1, 2, 1` (Treffer). Ergebnis `{0, 2}`.
```

```aufgabe
id: su-pruef-pt-rekursiv
titel: Die letzte Stelle rekursiv
niveau: 3
punkte: 5
lernziel: 6
kompetenz: anwenden
quelle: Stil der rekursiven Aufgabe im Programmiertest (Array mit Index, ohne Schleifen), Inhalt neu
angabe: |
  (Zeitrichtwert: 12 Minuten) Implementiere die rekursive Methode `int letzteStelle(int[] daten, int schluessel, int index)`.
  Sie liefert den **größten** Index `i` mit `i <= index` und `daten[i] == schluessel`. Gibt es keinen, liefert sie -1.
  Der typische erste Aufruf ist `letzteStelle(daten, schluessel, daten.length - 1)`.

  Vorbedingung: `daten != null` und `-1 <= index < daten.length`.

  Einschränkungen wie im Programmiertest: keine Schleifen, keine Hilfsmethoden, keine Klassenvariablen, Methodenkopf
  unverändert.

  Beispiele mit `daten = {4, 9, 4, 1}`: `letzteStelle(daten, 4, 3)` liefert 2, `letzteStelle(daten, 4, 1)` liefert 0
  und `letzteStelle(daten, 7, 3)` liefert -1.
teile:
  - typ: code
    vorlage: |
      public class Letzte {
          public static int letzteStelle(int[] daten, int schluessel, int index) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Letzte {
          public static int letzteStelle(int[] daten, int schluessel, int index) {
              if (index < 0) {
                  return -1;
              }
              if (daten[index] == schluessel) {
                  return index;
              }
              return letzteStelle(daten, schluessel, index - 1);
          }
      }
    tests:
      - { aufruf: "letzteStelle(new int[]{4, 9, 4, 1}, 4, 3)", erwartet: "2", beschreibung: "ab dem letzten Index" }
      - { aufruf: "letzteStelle(new int[]{4, 9, 4, 1}, 4, 1)", erwartet: "0", beschreibung: "nur bis Index 1" }
      - { aufruf: "letzteStelle(new int[]{4, 9, 4, 1}, 7, 3)", erwartet: "-1", beschreibung: "kein Treffer" }
      - { aufruf: "letzteStelle(new int[0], 3, -1)", erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: "letzteStelle(new int[]{5}, 5, 0)", erwartet: "0", versteckt: true }
      - { aufruf: "letzteStelle(new int[]{1, 2, 3}, 3, 1)", erwartet: "-1", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [letzteStelle], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Gesucht ist der **größte** passende Index. Prüfe zuerst `daten[index]` und gehe dann mit `index - 1` nach vorne." }
      - { wert: 3, meldung: "Ohne Treffer muss die Rekursion enden. Dein Basisfall ist `index < 0`." }
      - { wert: 4, meldung: "Beim leeren Array ist `index = -1`. Prüfe `index < 0`, bevor du auf `daten[index]` zugreifst." }
      - { wert: "keineSchleifen", meldung: "Schleifen sind verboten. Den nächsten Index gibst du an den Selbstaufruf weiter." }
hinweise:
  - 'Zwei Basisfälle: `index < 0` (nichts mehr zu prüfen) und `daten[index] == schluessel` (Treffer).'
  - Im übrigen Fall gibst du das Ergebnis von `letzteStelle(daten, schluessel, index - 1)` mit `return` weiter.
loesung: |
  **Ansatz:** Die Suche von hinten aus [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche), mit dem Index als Parameter statt als Schleifenvariable.
  ---
  ```java
  if (index < 0) {
      return -1;
  }
  if (daten[index] == schluessel) {
      return index;
  }
  return letzteStelle(daten, schluessel, index - 1);
  ```
  ---
  Bewertung wie im Programmiertest: Basisfall vorhanden und richtig (`index < 0`, Treffer), Fortschritt vorhanden und richtig (`index - 1` nähert sich dem Basisfall), Rückgabe richtig durchgereicht.
  ---
  Probe mit `{4, 9, 4, 1}`, 4 und 3: Index 3 (1), Index 2 (4, Treffer). Ergebnis 2.
```

```aufgabe
id: su-pruef-gespraech
titel: Drei Fragen im Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 6
kompetenz: begruenden
quelle: Format nach den Zusatzfragen der Aufgabenblätter (umformuliert), Inhalt nach den Folien „Suchalgorithmen“
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) Beantworte jede Frage in zwei bis vier Sätzen, so wie du sie im
  Gespräch sagen würdest.

  **a)** Warum liefert eine Suchmethode -1, wenn sie nichts findet, und nicht 0?

  **b)** Warum darf man die binäre Suche nur auf ein sortiertes Array anwenden?

  **c)** Was ist der Vorteil der binären Suche, und wann nimmst du trotzdem die lineare?
teile:
  - typ: text
    label: a)
    muster: |
      Das Ergebnis einer Suche ist ein Index. Die 0 ist ein gültiger Index, nämlich der des ersten Elements. Der
      Aufrufer könnte dann „nicht gefunden“ nicht von „gefunden auf Index 0“ unterscheiden. Die -1 ist nie ein
      gültiger Index und deshalb eindeutig.
  - typ: text
    label: b)
    muster: |
      Die binäre Suche schließt nach jedem Vergleich eine Hälfte aus. Ist die Mitte kleiner als der Suchwert, sucht
      sie nur rechts weiter. Das ist nur richtig, wenn alle Werte links von der Mitte auch kleiner sind, also wenn das
      Array sortiert ist. Sonst findet sie Werte nicht, die vorhanden sind.
  - typ: text
    label: c)
    muster: |
      Die binäre Suche braucht im schlechtesten Fall nur etwa log₂ n Vergleiche, bei einer Million Elementen 20 statt
      einer Million. Die lineare Suche nehme ich, wenn das Array unsortiert ist und ich nur selten suche, denn
      Sortieren kostet mehr als eine lineare Suche. Auch wenn ich den ersten Index im ursprünglichen Array brauche,
      nehme ich die lineare Suche.
hinweise:
  - Für a) überlege, welche Zahlen gültige Indizes sind.
  - Für b) und c) denk an das Ausschließen einer Hälfte und an die Kosten des Sortierens.
loesung: |
  **Ansatz:** Jede Antwort nennt den Grund und ein kurzes Beispiel.
  ---
  a) 0 ist ein gültiger Index, -1 nie. Darum ist -1 als Signal „nicht gefunden“ eindeutig.
  ---
  b) Der Schluss „Mitte zu klein, also rechts weiter“ gilt nur bei sortierten Daten. Beispiel: In `{30, 5, 18, 2, 11, 40, 7}` findet die binäre Suche die 30 nicht.
  ---
  c) Vorteil: O(log n) statt O(n). Lineare Suche bei unsortierten Daten und seltenen Suchen, oder wenn der Index im ursprünglichen Array gebraucht wird.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Die lineare Suche prüft die Elemente der Reihe nach, liefert beim ersten Treffer den
  Index und erst nach der Schleife -1. Sie funktioniert auf jedem Array und liegt in O(n). (2) Die binäre Suche
  vergleicht mit der Mitte und schließt jedes Mal eine Hälfte aus. Sie braucht ein sortiertes Array und liegt in
  O(log n), weil nach jedem Vergleich `mid + 1` oder `mid - 1` den Suchbereich halbiert. (3) Eine unbekannte
  Suchvariante beurteilst du mit vier Fragen: Welcher Treffer, was ohne Treffer, endet sie immer, wie viele
  Vergleiche? Ebenso gute Antworten sind die fünf Testfälle oder die Regel „Exponent der größten Zweierpotenz plus 1“.
```

:::zusammenfassung
1. **Lineare Suche:** Schleife über alle Indizes, beim ersten Treffer `return i;`, nach der Schleife `return -1;`. Sie liefert den kleinsten passenden Index, braucht keine Ordnung und liefert für ein leeres Array -1. Die -1 bedeutet „nicht gefunden“, weil sie nie ein gültiger Index ist.
2. **Varianten:** Von hinten (`i = length - 1`, `i >= 0`) liefert den größten Index. Ab `start` sucht man weiter, ab `pos + 1` findet man alle Treffer. Statt `==` darf jede Bedingung stehen. Zählen läuft immer bis zum Ende und liefert 0 statt -1. Eine Folge sucht man mit zwei Schleifen, die letzte Startstelle ist `length - muster.length`.
3. **Quiz-Varianten:** Bei einer Flag-Suche steht `i` nach der Schleife eins hinter dem Treffer, darum `i - 1`. Ein Wächter erspart die Indexprüfung, verlangt aber ein nicht leeres Array und die Prüfung, ob der Treffer auf dem letzten Platz echt war. Die Suche von beiden Seiten kann bei Doppelten auch den größten Index liefern.
4. **Vier Fragen und fünf Testfälle:** Welcher Treffer? Was ohne Treffer? Terminiert sie? Wie viele Vergleiche? Teste mit Treffer vorne, hinten, doppelt, ohne Treffer und leerem Array. Ein Gegenbeispiel macht eine Aussage falsch.
5. **Binäre Suche:** nur auf aufsteigend sortierten Arrays. `low = 0`, `high = length - 1`, Schleife `while (low <= high)`, `mid = low + (high - low) / 2`. Mitte zu klein heißt `low = mid + 1`, Mitte zu groß heißt `high = mid - 1`, sonst Treffer. Leerer Suchbereich (`low > high`) heißt -1, und `low` zeigt dann auf die Einfügestelle.
6. **Typische Fehler der binären Suche:** Mit `mid` statt `mid + 1` oder `mid - 1` kann sie endlos laufen. `low < high` übersieht den letzten Index, und `(low + high) / 2` kann bei riesigen Arrays überlaufen. Bei Doppelten liefert sie irgendeinen passenden Index.
7. **Aufwand:** Lineare Suche im besten Fall 1, im schlechtesten Fall n Vergleiche, im Durchschnitt `(n + 1) / 2`: O(n). Binäre Suche im schlechtesten Fall $\lfloor \log_2 n \rfloor + 1$ Durchläufe, bei 1000 Elementen 10: O(log n). Doppeltes n heißt linear doppelt so viel, binär einen Durchlauf mehr.
8. **Auswahl:** Sortierte Daten binär durchsuchen. Unsortierte Daten bei seltenen Suchen linear durchsuchen, bei sehr vielen Suchen einmal sortieren und dann binär suchen.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **`return -1` im `else`-Zweig der Schleife**, sodass die Suche nach dem ersten Fehlversuch aufgibt. Training: „Drei Fehler in einer Suche“ in [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).
2. **Den Wert statt des Index zurückgeben**. Training: „Die Suche vervollständigen“ und „Drei Fehler in einer Suche“ in [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).
3. **Negative Suchwerte mit dem Ergebnis -1 verwechseln**. Training: „Negative Werte und doppelte Werte“ und „Was stimmt über die lineare Suche?“ in [18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).
4. **`i > 0` statt `i >= 0` beim Suchen von hinten**, sodass Index 0 fehlt. Training: „Das letzte Vorkommen programmieren“ in [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche).
5. **Ab `pos` statt ab `pos + 1` weitersuchen**, eine Endlosschleife. Training: „Treffer nacheinander zählen“ in [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche).
6. **Startstelle der Teilfolgensuche bis `daten.length`**. Training: „Folgen suchen“ und „Wie oft kommt die Folge vor?“ in [18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche) und „Alle Startstellen einer Folge“ in den [18.8 Prüfungsaufgaben](/lernen/ep1/suchen/pruefungsaufgaben).
7. **`i` statt `i - 1` nach einer Flag-Suche**. Training: „Die Suche mit Flag ausführen“ und „Vier Aussagen zu einer Flag-Suche“ in [18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes).
8. **Beim Wächter den echten Treffer auf dem letzten Platz übersehen** oder das leere Array vergessen. Training: „Wo hält der Wächter?“ und „Ein Wächter am Anfang“ in [18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes).
9. **Annehmen, jede Suche liefere den kleinsten Index**. Training: „Ein Gegenbeispiel finden“ in [18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes) und „Doppelte Werte im sortierten Array“ in [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren).
10. **Binär suchen in einem unsortierten Array**. Training: „Binäre Suche im falschen Array“ in [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren).
11. **Die Mitte falsch berechnet**, aufgerundet oder ohne `low`. Training: „Die Mitte berechnen“ und „low, high und mid verfolgen“ in [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren).
12. **`low = mid` oder `low < high` in der binären Suche**. Training: „Zwei Fehler in der binären Suche“ und „Was bewirkt die Änderung?“ in [18.5 Binäre Suche programmieren und Fehler vermeiden](/lernen/ep1/suchen/binaere-suche-programmieren-und-fehler-vermeiden).
13. **Beim Zählen der Durchläufe den letzten vergessen** (9 statt 10 bei 1000 Elementen). Training: „Durchläufe bei 60 Elementen“ und „Durchläufe bei 5000 Elementen“ in [18.6 Wie viel Arbeit macht eine Suche? Vergleiche zählen](/lernen/ep1/suchen/wie-viel-arbeit-macht-eine-suche-vergleiche-zaehlen).
14. **O-Klasse mit dem besten Fall begründen** oder die Suche von beiden Seiten für O(log n) halten. Training: „Vier Aussagen zum Aufwand“ in [18.6 Wie viel Arbeit macht eine Suche? Vergleiche zählen](/lernen/ep1/suchen/wie-viel-arbeit-macht-eine-suche-vergleiche-zaehlen) und „Vier Aussagen zur Suche von beiden Seiten“ in [18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Die lineare Suche schreiben und ihr Ergebnis für jedes Array angeben.
2. Die lineare Suche abwandeln: von hinten, ab einem Startindex, mit Bedingung, zählend und für Folgen.
3. Suchvarianten mit Flag, Wächter und zwei Indizes beurteilen.
4. Die binäre Suche mit `low`, `mid` und `high` in einer Tabelle verfolgen.
5. Die binäre Suche mit Schleife und rekursiv schreiben und ihre typischen Fehler erkennen.
6. Vergleiche im besten und schlechtesten Fall bestimmen und die passende Suche wählen.
7. Suchmethoden unter den Regeln von Blatt und Test schreiben und im Gespräch erklären.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn. Zu deinen Aufgabenblättern führst du aber ein
**Feedbackgespräch** mit einer Tutorin oder einem Tutor. So beschreibt es das VoWi für die Jahre ab etwa 2024.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Suchen steckt in vielen Blattaufgaben, etwa wenn du
die Figur im Sokoban-Feld findest. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die
Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: su-karte-linear
  frage: Wie funktioniert die lineare Suche, und was liefert sie?
  antwort: |
    Die lineare Suche geht die Elemente des Arrays der Reihe nach durch, beginnend bei Index 0. Beim ersten Element,
    das gleich dem Suchwert ist, liefert sie dessen Index und hört auf. Hat sie alle Elemente geprüft, ohne einen
    Treffer zu finden, liefert sie -1. Sie braucht keine Ordnung im Array.
  kernpunkte:
    - der Reihe nach ab Index 0
    - Index des ersten Treffers
    - -1 nach der Schleife
- id: su-karte-minus-eins
  frage: Warum liefert eine Suche -1, wenn sie nichts findet, und warum steht return -1 hinter der Schleife?
  antwort: |
    Das Ergebnis ist ein Index, und -1 ist nie ein gültiger Index. Die 0 wäre ungeeignet, denn sie ist der Index des
    ersten Elements. Das `return -1;` steht hinter der Schleife, weil erst nach der Prüfung aller Elemente feststeht,
    dass keines passt. Ein einzelnes Element, das nicht passt, sagt nichts über die anderen.
  kernpunkte:
    - -1 ist kein gültiger Index
    - 0 wäre mehrdeutig
    - erst nach allen Elementen steht „nicht gefunden“ fest
- id: su-karte-letzte
  frage: Wie findest du das letzte Vorkommen eines Werts, und welche Fassung ist schneller?
  antwort: |
    Entweder ich suche von vorne und merke mir jeden Treffer in einer Variable, die ich am Ende zurückgebe. Oder ich
    suche von hinten, mit `i = daten.length - 1` und der Bedingung `i >= 0`, und gebe beim ersten Treffer `i` zurück.
    Die Suche von hinten ist schneller, weil sie beim ersten Treffer aufhört. Die Fassung von vorne sieht immer alle
    Elemente an.
  kernpunkte:
    - von vorne merken oder von hinten suchen
    - Bedingung i >= 0
    - von hinten hört früher auf
- id: su-karte-vier-fragen
  frage: Im Quiz steht eine unbekannte Suchvariante. Wie gehst du vor?
  antwort: |
    Ich stelle vier Fragen: Welcher Treffer wird bei mehreren Vorkommen geliefert? Was passiert ohne Treffer?
    Terminiert die Methode immer, auch beim leeren Array? Wie viele Vergleiche braucht sie im schlechtesten Fall? Dazu
    spiele ich fünf Testfälle durch: Treffer vorne, hinten, doppelt, kein Treffer und das leere Array. Ein einziges
    Gegenbeispiel macht eine Aussage falsch.
  kernpunkte:
    - vier Fragen
    - fünf Testfälle
    - ein Gegenbeispiel genügt
- id: su-karte-flag
  frage: Warum liefert die Suche mit Flag-Variable i - 1 und nicht i?
  antwort: |
    Beim Treffer wird die Flag auf `true` gesetzt, aber der Rumpf läuft noch zu Ende. Dabei wird `i` noch einmal
    erhöht. Erst danach prüft die Schleife die Bedingung und hört auf. Nach der Schleife steht `i` also eins hinter dem
    Treffer, darum ist `i - 1` der richtige Index.
  kernpunkte:
    - Rumpf läuft nach dem Treffer zu Ende
    - i wird noch einmal erhöht
    - Treffer liegt bei i - 1
- id: su-karte-waechter
  frage: Was ist ein Wächter bei der Suche, und worauf muss man dabei achten?
  antwort: |
    Ein Wächter ist der Suchwert, den man vor der Suche auf den letzten Platz schreibt. Dann findet die Schleife
    sicher einen Treffer und braucht keine Indexprüfung mehr. Danach muss man den alten Wert zurückschreiben, sonst ist
    das Array des Aufrufers verändert. Und man muss prüfen, ob ein Halt auf dem letzten Platz ein echter Treffer war.
    Für ein leeres Array funktioniert die Methode nicht.
  kernpunkte:
    - Suchwert auf den letzten Platz
    - alten Wert zurückschreiben
    - Halt am Ende prüfen, Array nicht leer
- id: su-karte-binaer
  frage: Wie funktioniert die binäre Suche?
  antwort: |
    Sie sucht in einem aufsteigend sortierten Array. Sie vergleicht den Suchwert mit dem mittleren Element des
    Suchbereichs. Ist die Mitte gleich, ist sie fertig. Ist die Mitte kleiner, sucht sie rechts davon weiter, also
    `low = mid + 1`. Ist sie größer, sucht sie links weiter, also `high = mid - 1`. Wird der Suchbereich leer, also
    `low > high`, liefert sie -1.
  kernpunkte:
    - nur auf sortiertem Array
    - Vergleich mit der Mitte
    - mid + 1 und mid - 1, Ende bei low > high
- id: su-karte-sortiert
  frage: Warum funktioniert die binäre Suche nur auf sortierten Arrays?
  antwort: |
    Sie schließt nach jedem Vergleich eine Hälfte aus. Ist die Mitte kleiner als der Suchwert, nimmt sie an, dass auch
    alle Werte links davon kleiner sind. Das stimmt nur in einem sortierten Array. In einem unsortierten Array kann
    der Suchwert gerade in der ausgeschlossenen Hälfte stehen, und die Suche liefert -1, obwohl er vorkommt.
  kernpunkte:
    - Hälfte wird ausgeschlossen
    - Schluss gilt nur bei Ordnung
    - sonst falsches -1
- id: su-karte-mid-plus-eins
  frage: Warum heißt es low = mid + 1 und nicht low = mid?
  antwort: |
    Das Element auf `mid` ist schon geprüft und kein Treffer. Es muss aus dem Suchbereich verschwinden. Bleibt `mid`
    drin, kann der Suchbereich aufhören zu schrumpfen. Bei zwei verbleibenden Elementen ist die Mitte dann immer
    wieder dieselbe, und die Schleife läuft endlos. Mit `mid + 1` und `mid - 1` schrumpft der Bereich in jedem
    Durchlauf, und die Suche terminiert.
  kernpunkte:
    - mid ist schon geprüft
    - sonst kein Schrumpfen
    - Endlosschleife bei zwei Elementen
- id: su-karte-ueberlauf
  frage: Warum berechnen die Folien die Mitte als low + (high - low) / 2?
  antwort: |
    Weil `(low + high) / 2` überlaufen kann. Ein `int` reicht nur bis 2147483647. Bei sehr großen Arrays kann die Summe
    `low + high` größer werden, dann rechnet Java mit einer negativen Zahl weiter, und der Index ist ungültig. Die Form
    `low + (high - low) / 2` rechnet nur mit dem Abstand und bleibt immer im gültigen Bereich. Für kleine Arrays
    liefern beide Formeln dasselbe.
  kernpunkte:
    - int-Grenze 2147483647
    - Summe kann negativ werden
    - Abstand bleibt klein
- id: su-karte-aufwand
  frage: Wie viele Vergleiche brauchen lineare und binäre Suche im schlechtesten Fall?
  antwort: |
    Die lineare Suche braucht bei n Elementen im schlechtesten Fall n Vergleiche, sie liegt in O(n). Die binäre Suche
    braucht im schlechtesten Fall den abgerundeten Logarithmus zur Basis 2 von n plus 1 Durchläufe. Bei 1000 Elementen
    sind das 10, bei einer Million 20. Sie liegt in O(log n). Verdoppelt man n, verdoppelt sich die Arbeit der
    linearen Suche, die binäre Suche braucht nur einen Durchlauf mehr.
  kernpunkte:
    - linear n, also O(n)
    - binär log₂ n plus 1, also O(log n)
    - Verdoppeln heißt doppelt oder einer mehr
- id: su-karte-wahl
  frage: Wann nimmst du die lineare und wann die binäre Suche?
  antwort: |
    Ist das Array schon sortiert, nehme ich die binäre Suche. Ist es unsortiert und suche ich nur selten, nehme ich die
    lineare Suche, denn Sortieren kostet mehr als eine einzelne Suche. Suche ich sehr oft in denselben Daten, lohnt es
    sich, einmal zu sortieren und dann binär zu suchen. Brauche ich den Index im ursprünglichen, unsortierten Array,
    bleibt nur die lineare Suche.
  kernpunkte:
    - sortiert ergibt binär
    - unsortiert und selten ergibt linear
    - viele Suchen rechtfertigen Sortieren
- id: su-karte-doppelte
  frage: Welche Stelle liefern lineare und binäre Suche, wenn der Wert mehrmals vorkommt?
  antwort: |
    Die lineare Suche von vorne liefert den kleinsten Index, denn sie hört beim ersten Treffer auf. Die binäre Suche
    liefert irgendeine der Stellen, nämlich die, auf der zuerst eine Mitte landet. Das muss nicht die erste sein. Wer
    bei der binären Suche die erste Stelle braucht, bricht bei Gleichheit nicht ab, sondern sucht mit `high = mid - 1`
    links weiter und liefert am Ende `low`.
  kernpunkte:
    - linear den kleinsten Index
    - binär irgendeinen
    - erste Stelle über Weitersuchen links
- id: su-karte-rekursiv
  frage: Wie schreibst du die binäre Suche rekursiv, und was hat das mit Rekursion über Arrays zu tun?
  antwort: |
    Ich übergebe `low` und `high` als Parameter. Basisfälle sind der leere Bereich mit `low > high`, der -1 liefert,
    und der Treffer auf `mid`. Sonst rufe ich die Methode mit `mid + 1` bis `high` oder mit `low` bis `mid - 1` auf und
    gebe ihr Ergebnis mit `return` weiter. Das ist Rekursion mit Indizes wie in
    [13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren).
    Basisfall und Fortschritt erkläre ich wie in
    [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung).
    Eine überladene Methode mit zwei Parametern startet die Suche mit dem ganzen Array.
  kernpunkte:
    - low und high als Parameter
    - zwei Basisfälle
    - Selbstaufruf mit kleinerem Bereich und return
```
