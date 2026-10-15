---
nummer: 14
titel: Zwei- und mehrdimensionale Arrays
kurz: Tabellen aus Zahlen und Zeichen. Zweidimensionale und unregelmäßige (jagged) Arrays anlegen, durchlaufen, neu erzeugen und an Ort und Stelle verändern, genau so, wie Blatt 4 und 5 und die ersten beiden Aufgaben im Programmiertest es verlangen.
teil: arrays
stunden: 7
pruefungsgewicht: 3
voraussetzungen: [schleifen, methoden, arrays]
lernziele:
  - zweidimensionale Arrays deklarieren, mit new oder einem Initialisierer anlegen und einzelne Elemente über a[i][j], a.length und a[i].length lesen und schreiben
  - zweidimensionale Arrays mit verschachtelten Schleifen zeilenweise, spaltenweise und entlang der Diagonalen durchlaufen und dabei Summen, Zählungen und Extremwerte bestimmen
  - jagged Arrays mit unterschiedlich langen, leeren oder fehlenden Zeilen anlegen und so durchlaufen, dass keine Exception entsteht
  - Zeilen als Referenzen behandeln, also vorhersagen, welche Änderungen über gemeinsame Zeilen sichtbar werden, und Zeilen tauschen oder ersetzen
  - zu einer mehrdimensionalen Deklaration angeben, ob sie übersetzt, wie viele Werte das Array aufnehmen kann und welche Zugriffe direkt danach möglich sind
  - Methoden schreiben, die nach einer Vorgabe ein neues zweidimensionales Array erzeugen und zurückgeben (Muster M1 im Programmiertest)
  - void-Methoden schreiben, die ein zweidimensionales Array an Ort und Stelle verändern, auch indem sie Zeilen tauschen, umdrehen, verlängern oder kürzen (Muster M2)
  - Randfälle (leeres Array, leere Zeile, eine einzige Zeile, vertauschte Indexgrenzen) erkennen, mit Testfällen in main und Arrays.deepToString prüfen und fehlerhafte Lösungen reparieren
---

**Worum geht es?** Ein Array aus [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge) ist eine **Reihe** von Werten, zum Beispiel die
Temperaturen einer Woche. Viele Daten sind aber eine **Tabelle**: ein Stundenplan mit Tagen und Stunden, ein
Sitzplan mit Reihen und Plätzen, ein Spielfeld mit Zeilen und Spalten, ein Bild aus Bildpunkten. Für solche Daten
gibt es in Java **zweidimensionale Arrays**. „Zweidimensional“ heißt: Du brauchst **zwei** Angaben, um einen Wert
zu finden, nämlich die Zeile und die Spalte.

Ein Bild aus dem Alltag: Im Kino steht auf deiner Karte „Reihe 4, Platz 7“. Die Reihe allein reicht nicht, der Platz
allein auch nicht. Erst beide Zahlen zusammen bezeichnen genau einen Sitz. Genau so findest du in einem
zweidimensionalen Array einen Wert mit zwei Indizes.

In Java ist ein zweidimensionales Array ein **Array, dessen Elemente selbst Arrays sind**. Jede Zeile ist ein
gewöhnliches eindimensionales Array. Das klingt zuerst nach einer Spitzfindigkeit. Es erklärt aber fast alles, was in
diesem Kapitel passiert. Zeilen dürfen unterschiedlich lang sein. Man kann Zeilen mit drei Zuweisungen tauschen. Und
eine Methode kann eine Zeile ersetzen, ohne ein neues Array zurückzugeben.

**Was kommt in der Prüfung?** Zweidimensionale Arrays sind der größte Brocken im Programmiertest.

- **Programmiertest** (du schreibst am Rechner drei Methoden nach einer Angabe): In den vorliegenden Angaben aus den
  Wintersemestern 2020/21 und 2021/22 waren zwei der drei Methoden Aufgaben auf zweidimensionalen Arrays. Die erste
  (**M1**) erzeugt ein neues Array und gibt es zurück. Die zweite (**M2**) verändert ein übergebenes Array an Ort und
  Stelle und hat den Rückgabetyp `void`. Zusammen brachten sie 18 von 30 Punkten. 3 Punkte gab es für `main`, 9 für
  die dritte Methode (M3). Sie ist rekursiv, mehr dazu in
  [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen) und
  [20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen).
- **Aufgabenblatt 4, Aufgabe 5** und **Aufgabenblatt 5, Aufgaben 1 und 2** (Stand WS2023): Du befüllst Arrays nach
  einem Zahlenmuster und setzt Arrays aus anderen Arrays zusammen. Außerdem verschiebst und kürzt du Zeilen und legst
  einen Rahmen um ein Zeichenfeld.
- **Quiz** (Theorietest auf der Lernplattform TUWEL mit Richtig/Falsch-Aussagen): Eine typische Frage ist „Wie viele
  Werte fasst `new long[2][2][5]`?“. Andere lauten „Welche Zugriffe sind direkt nach dieser Deklaration möglich?“ und
  „Kann diese Methode mit einer Exception abbrechen?“.
- **Feedbackgespräch:** Passende Fragen sind zum Beispiel, warum eine Methode ohne `return` das Array des Aufrufers
  verändern kann oder warum `b[i] = a[i]` keine Kopie ist.

**Wozu brauchst du das später?** Kapitel 15 baut darauf Anwendungen auf, zum Beispiel
[15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke)
und [15.4 Flood-Fill: zusammenhängende Flächen rekursiv füllen](/lernen/ep1/arrays-anwendungen/flood-fill-zusammenhaengende-flaechen-rekursiv-fuellen).
Kapitel 16 ist ein Spiel auf einem Zeichenfeld vom Typ `char[][]`, siehe
[16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld).

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Eindimensionale Arrays** aus [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge): Index ab 0, `length`, Standardwerte nach `new`,
  `Arrays.toString` und vor allem die **Referenzsemantik**. Eine Array-Variable enthält nicht die Werte selbst, sondern
  einen Verweis auf das Array. Das ist die wichtigste Voraussetzung.
- **for-Schleifen und verschachtelte Schleifen** aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen)
  und [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
- **Methoden mit Parametern und Rückgabewert** aus [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben)
  und [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: zd-ein-index
titel: Index und Länge eines Arrays
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] z = {4, 8, 15, 16};
      System.out.println(z[1]);
      System.out.println(z.length);
      System.out.println(z[z.length - 1]);
    loesung: |
      8
      4
      16
    fehler:
      - wert: "4\n4\n16"
        meldung: Der Index beginnt bei 0. `z[0]` ist 4, `z[1]` ist das **zweite** Element, also 8.
      - wert: "8\n3\n16"
        meldung: '`length` zählt die Elemente, nicht den größten Index. Das Array hat vier Elemente, also ist `z.length` gleich 4.'
hinweise:
  - Der erste Index ist 0, der letzte ist `length - 1`.
loesung: |
  `z[1]` ist das zweite Element, also 8. `z.length` ist die Anzahl der Elemente, also 4.
  ---
  `z[z.length - 1]` ist `z[3]`, das letzte Element 16.
```

```aufgabe
id: zd-ein-standard
titel: Was steht nach new im Array?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] a = new int[3];
      boolean[] b = new boolean[2];
      String[] s = new String[2];
      System.out.println(Arrays.toString(a));
      System.out.println(Arrays.toString(b));
      System.out.println(Arrays.toString(s));
    loesung: |
      [0, 0, 0]
      [false, false]
      [null, null]
    fehler:
      - wert: "[]\n[]\n[]"
        meldung: '`new int[3]` legt ein Array mit **drei** Elementen an. Es ist nicht leer, sondern mit dem Standardwert gefüllt.'
      - wert: "[0, 0, 0]\n[false, false]\n[, ]"
        meldung: 'Der Standardwert für `String` ist `null`, also „kein Objekt“, nicht der leere String `""`.'
hinweise:
  - Nach `new` steht in jedem Element der Standardwert des Typs.
loesung: |
  Zahlen beginnen mit 0, `boolean` mit `false`, Referenztypen wie `String` mit `null`.
  ---
  `Arrays.toString` schreibt die Elemente in eckige Klammern, durch Komma und Leerzeichen getrennt.
```

```aufgabe
id: zd-ein-referenz
titel: Zwei Variablen, ein Array
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[] a = {1, 2, 3};
      int[] b = a;
      b[0] = 9;
      System.out.println(a[0]);
      System.out.println(a == b);
    loesung: |
      9
      true
    fehler:
      - wert: "1\ntrue"
        meldung: '`int[] b = a;` kopiert nur den Verweis. `a` und `b` zeigen auf **dasselbe** Array. Die Änderung über `b` siehst du auch über `a`.'
      - wert: "9\nfalse"
        meldung: '`==` vergleicht bei Arrays die Verweise. Beide Variablen zeigen auf dasselbe Array, also ist das Ergebnis `true`.'
hinweise:
  - Eine Array-Variable enthält einen Verweis auf das Array, nicht die Werte selbst.
loesung: |
  `b = a` kopiert den Verweis. Es gibt weiterhin nur ein Array, auf das beide Variablen zeigen.
  ---
  `b[0] = 9` ändert dieses eine Array. Darum ist `a[0]` jetzt 9, und `a == b` ist `true`.
```

```aufgabe
id: zd-ein-verschachtelt
titel: Wie oft läuft die innere Schleife?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 3; i++) {
          for (int j = 0; j < 4; j++) {
              System.out.print("*");
          }
          System.out.println();
      }
    loesung: |
      ****
      ****
      ****
    fehler:
      - wert: "***\n***\n***\n***"
        meldung: Die äußere Schleife bestimmt die Anzahl der Zeilen (3), die innere die Anzahl der Sterne pro Zeile (4).
      - wert: "************"
        meldung: Nach jeder inneren Schleife steht `System.out.println();`. Es beendet die Zeile, darum entstehen drei Zeilen.
hinweise:
  - Die innere Schleife läuft bei jedem Durchlauf der äußeren Schleife vollständig.
loesung: |
  Die äußere Schleife läuft für `i = 0, 1, 2`, also dreimal. Jedes Mal läuft die innere Schleife für `j = 0, 1, 2, 3` und gibt vier Sterne aus.
  ---
  Danach beendet `println()` die Zeile. Ergebnis: drei Zeilen mit je vier Sternen.
```

```aufgabe
id: zd-ein-grenzen
titel: Die letzte Zahl einer Schleife
niveau: 1
art: check
angabe: |
  Welche Zahlen gibt die Schleife aus? (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: ausgabe
    code: |
      int n = 5;
      for (int i = n - 1; i >= 0; i--) {
          System.out.print(i + " ");
      }
    loesung: "4 3 2 1 0 "
    trim: true
    fehler:
      - wert: "5 4 3 2 1 0 "
        meldung: Die Schleife beginnt bei `n - 1`, also bei 4, nicht bei 5.
      - wert: "4 3 2 1 "
        meldung: Die Bedingung `i >= 0` ist auch für `i = 0` wahr. Die 0 wird also noch ausgegeben.
hinweise:
  - Prüfe den Startwert und die Bedingung für den letzten Durchlauf.
loesung: |
  Startwert `n - 1 = 4`. Die Bedingung `i >= 0` gilt für 4, 3, 2, 1 und 0.
  ---
  Bei `i = -1` endet die Schleife. Das ist genau die Schleife, die ein Array der Länge 5 rückwärts durchläuft.
```

```aufgabe
id: zd-ein-parameter
titel: Eine Methode bekommt ein Array
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben) und [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      public class Param {
          public static void aendere(int x, int[] feld) {
              x = 100;
              feld[0] = 100;
          }

          public static void main(String[] args) {
              int zahl = 1;
              int[] werte = {1, 2};
              aendere(zahl, werte);
              System.out.println(zahl + " " + werte[0]);
          }
      }
    loesung: |
      1 100
    fehler:
      - wert: "100 100"
        meldung: Der Parameter `x` ist eine Kopie des Werts von `zahl`. Die Zuweisung `x = 100` ändert nur die Kopie.
      - wert: "1 1"
        meldung: '`feld` bekommt eine Kopie des **Verweises**. Beide zeigen auf dasselbe Array. `feld[0] = 100` ändert dieses Array, und `main` sieht die Änderung.'
hinweise:
  - Java übergibt immer eine Kopie. Bei `int` ist das eine Kopie der Zahl, bei einem Array eine Kopie des Verweises.
loesung: |
  `x` ist eine eigene Variable mit dem Wert 1. `x = 100` ändert nur sie, `zahl` bleibt 1.
  ---
  `feld` zeigt auf dasselbe Array wie `werte`. `feld[0] = 100` ändert dieses Array. Ausgabe `1 100`.
```

## Zweidimensionale Arrays anlegen und lesen

```aufgabe
id: zd-al-check-tabelle
titel: Wie viele Angaben braucht ein Sitzplatz?
niveau: 1
art: check
angabe: |
  Ein Hörsaal hat 12 Reihen mit je 20 Plätzen. Du willst für jeden Platz speichern, ob er besetzt ist. In
  [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge) hast du eindimensionale Arrays kennengelernt. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - Ein Platz ist erst durch zwei Angaben eindeutig bestimmt, die Reihe und die Platznummer. Es sind 240 Plätze.
      - Ein Platz ist durch eine Angabe bestimmt. Es sind 32 Plätze.
      - Ein Platz ist durch die Platznummer allein bestimmt, denn jede Reihe hat 20 Plätze.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Anzahl der Plätze ist Reihen **mal** Plätze pro Reihe, also 12 · 20 = 240, nicht 12 + 20.'
      - wert: 2
        meldung: Platz 7 gibt es in jeder der 12 Reihen. Ohne die Reihe weißt du nicht, welcher Platz gemeint ist.
loesung: |
  Jede Reihe hat einen Platz 7. Erst „Reihe 4, Platz 7“ bezeichnet genau einen Sitz.
  ---
  Insgesamt gibt es 12 · 20 = 240 Plätze. Daten mit zwei Angaben pro Wert sind eine Tabelle.
```

Bisher konntest du einen Wert mit **einem** Index finden: `temperatur[3]` ist die Temperatur am vierten Tag. Jetzt
willst du Daten speichern, die eine Tabelle bilden. Ein Beispiel sind die Punkte von drei Studierenden in vier
Aufgaben eines Blatts:

```
              Aufgabe 0   Aufgabe 1   Aufgabe 2   Aufgabe 3
Person 0          2           0           1           2
Person 1          1           1           2           0
Person 2          2           2           2           1
```

Jede **Zeile** gehört zu einer Person, jede **Spalte** zu einer Aufgabe. Um einen Wert zu finden, brauchst du die
Nummer der Zeile und die Nummer der Spalte. Wie bei eindimensionalen Arrays beginnen beide Nummern bei 0.

:::definition[Zweidimensionales Array, Zeile, Spalte]
Ein **zweidimensionales Array** speichert Werte desselben Typs in Form einer Tabelle. Jeder Wert heißt
**Element** und hat zwei Indizes: den **Zeilenindex** und den **Spaltenindex**.

- Der Typ wird mit zwei Paaren eckiger Klammern geschrieben, zum Beispiel `int[][]` für eine Tabelle aus ganzen Zahlen.
- `a[i][j]` ist das Element in Zeile `i` und Spalte `j`. Der **erste** Index ist immer die Zeile, der **zweite** die Spalte.
- Technisch ist ein zweidimensionales Array ein **Array von Arrays**. `a[i]` ist die ganze Zeile `i`, ein gewöhnliches eindimensionales Array.
:::

**Beispiel:** Die Punktetabelle ist ein `int[][]` mit 3 Zeilen und 4 Spalten. Das Element `punkte[1][2]` ist 2: Person 1
hat in Aufgabe 2 zwei Punkte.

**Kein Beispiel:** Ein `int[]` mit 12 Elementen kann zwar ebenfalls 12 Zahlen speichern. Es ist aber **kein**
zweidimensionales Array. Es hat nur einen Index, und die Einteilung in Zeilen müsstest du selbst ausrechnen.

### Ein Array mit new anlegen

So legst du die Punktetabelle an:

```java
int[][] punkte = new int[3][4];
```

Wir gehen die Zeile Zeichen für Zeichen durch:

- `int[][]` ist der **Typ** der Variable: ein Array von `int`-Arrays. Die zwei Klammerpaare stehen für die zwei Indizes.
- `punkte` ist der **Name** der Variable. Wie bei jedem Array enthält sie einen **Verweis** auf das Array, nicht die Werte selbst.
- `new int[3][4]` legt das Array an. Die erste Zahl ist die Anzahl der **Zeilen** (3), die zweite die Anzahl der **Spalten** (4).
- Alle 12 Elemente bekommen den **Standardwert** des Typs, hier 0. Für `double` ist es `0.0`, für `boolean` `false`, für `char` das Zeichen mit der Nummer 0 und für `String` der Wert `null`.

Danach liest und schreibst du einzelne Elemente mit zwei Indizes:

```java
punkte[1][2] = 2;                      // Zeile 1, Spalte 2 bekommt den Wert 2
System.out.println(punkte[1][2]);      // gibt 2 aus
```

:::beispiel[Eine Tabelle anlegen, befüllen und ausgeben]
```java
import java.util.Arrays;

public class Punkte {
    public static void main(String[] args) {
        int[][] punkte = new int[3][4];
        punkte[0][0] = 2;
        punkte[0][3] = 2;
        punkte[2][1] = 1;
        System.out.println(punkte[0][3]);
        System.out.println(punkte[1][1]);
        System.out.println(Arrays.deepToString(punkte));
    }
}
```

Zeile für Zeile:

- `import java.util.Arrays;` macht die Klasse `Arrays` mit ihren Hilfsmethoden verfügbar, wie in [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen).
- `new int[3][4]` legt 3 Zeilen mit je 4 Spalten an. Alle Elemente sind zunächst 0.
- Die drei Zuweisungen setzen Zeile 0 Spalte 0 auf 2, Zeile 0 Spalte 3 auf 2 und Zeile 2 Spalte 1 auf 1.
- `punkte[0][3]` ist 2. `punkte[1][1]` wurde nie gesetzt und hat noch den Standardwert 0.
- `Arrays.deepToString(punkte)` schreibt das ganze Array als Text. Jede Zeile steht in eigenen eckigen Klammern, und alle Zeilen stehen in einem äußeren Klammerpaar.

Die Ausgabe ist:

```
2
0
[[2, 0, 0, 2], [0, 0, 0, 0], [0, 1, 0, 0]]
```
:::

```aufgabe
id: zd-al-gefuehrt
titel: Werte in einer Tabelle setzen und lesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      int[][] t = new int[2][3];
      t[1][0] = 5;
      t[0][2] = t[1][0] + 1;
      t[1][2] = t[0][2] * 2;
      System.out.println(t[0][2] + " " + t[1][2] + " " + t[0][0]);
      System.out.println(Arrays.deepToString(t));
    loesung: |
      6 12 0
      [[0, 0, 6], [5, 0, 12]]
    fehler:
      - wert: "6 12 0\n[[5, 0, 12], [0, 0, 6]]"
        meldung: 'Der Index 1 bezeichnet die **zweite** Zeile. `deepToString` zeigt zuerst die Zeile 0, und dort steht nur `t[0][2] = 6`.'
      - wert: "6 12\n[[0, 0, 6], [5, 0, 12]]"
        meldung: '`t[0][0]` wurde nie gesetzt, hat aber den Standardwert 0. Auch dieser Wert wird ausgegeben.'
gefuehrt:
  - text: Wie viele Zeilen und wie viele Spalten hat `t`?
    teil:
      typ: auswahl
      optionen: ['2 Zeilen, 3 Spalten', '3 Zeilen, 2 Spalten', '2 Zeilen, 2 Spalten']
      richtig: [0]
    erklaerung: Die erste Zahl hinter `new int` ist die Anzahl der Zeilen, die zweite die Anzahl der Spalten.
  - text: Welchen Wert hat `t[0][2]` nach der dritten Zeile des Codes?
    teil: { typ: zahl, loesung: "5 + 1" }
    erklaerung: '`t[1][0]` ist 5, also bekommt `t[0][2]` den Wert 6.'
  - text: Welchen Wert hat `t[1][2]`?
    teil: { typ: zahl, loesung: "6 * 2" }
    erklaerung: '`t[0][2]` ist 6, mal 2 ergibt 12.'
  - text: Welchen Wert hat `t[0][0]`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Dieses Element wurde nie gesetzt. Es hat den Standardwert 0.
hinweise:
  - Zeichne eine Tabelle mit 2 Zeilen und 3 Spalten und trage jede Zuweisung ein.
loesung: |
  **Ansatz:** Eine leere Tabelle mit 2 Zeilen und 3 Spalten zeichnen und jede Zuweisung der Reihe nach eintragen.
  ---
  Nach den Zuweisungen gilt `t[1][0] = 5`, `t[0][2] = 6` und `t[1][2] = 12`. Alle anderen Elemente sind 0.
  ---
  Erste Zeile der Ausgabe: `6 12 0`. Zweite Zeile: Zeile 0 ist `[0, 0, 6]`, Zeile 1 ist `[5, 0, 12]`.
```

### Ein Array mit einem Initialisierer anlegen

Wenn du die Werte schon beim Schreiben des Programms kennst, kannst du sie direkt hinschreiben. Das nennt man einen
**Initialisierer**:

```java
int[][] punkte = {
    {2, 0, 1, 2},
    {1, 1, 2, 0},
    {2, 2, 2, 1}
};
```

- Das äußere Paar geschweifter Klammern `{ … }` umschließt das ganze Array.
- Jedes innere Paar `{2, 0, 1, 2}` ist **eine Zeile**. Die Zeilen sind durch Kommas getrennt.
- Java zählt selbst: 3 innere Klammerpaare ergeben 3 Zeilen, je 4 Zahlen ergeben 4 Spalten.

Die Größe liest du mit `length` ab. Weil ein zweidimensionales Array ein Array von Zeilen ist, gibt es zwei Arten:

- `punkte.length` ist die **Anzahl der Zeilen**, hier 3. Das äußere Array hat drei Elemente, und jedes ist eine Zeile.
- `punkte[i].length` ist die **Länge der Zeile** `i`, also die Anzahl ihrer Spalten. Hier ist `punkte[0].length` gleich 4.

:::beispiel[Länge und Zugriff bei einem Initialisierer]
```java
int[][] m = {
    {7, 3, 9},
    {4, 8, 1}
};
System.out.println(m.length);
System.out.println(m[0].length);
System.out.println(m[1][0] + m[0][2]);
System.out.println(m[m.length - 1][m[0].length - 1]);
```

- `m.length` ist 2, denn es gibt zwei innere Klammerpaare, also zwei Zeilen.
- `m[0].length` ist 3, denn die Zeile 0 ist `{7, 3, 9}`.
- `m[1][0]` ist das erste Element der zweiten Zeile, also 4. `m[0][2]` ist das letzte Element der ersten Zeile, also 9. Die Summe ist 13.
- `m[m.length - 1][m[0].length - 1]` ist `m[1][2]`, das Element **rechts unten**, also 1. Diese Schreibweise funktioniert für jede rechteckige Tabelle, egal wie groß.

Die Ausgabe ist:

```
2
3
13
1
```
:::

:::merke[Zeile zuerst, dann Spalte]
- Zugriff: `a[zeile][spalte]`. Der erste Index wählt die Zeile, der zweite das Element in dieser Zeile.
- Anzahl der Zeilen: `a.length`. Länge der Zeile `i`: `a[i].length`.
- Erlaubte Zeilenindizes: `0` bis `a.length - 1`. Erlaubte Spaltenindizes in Zeile `i`: `0` bis `a[i].length - 1`.
- Ausgabe des ganzen Arrays: `Arrays.deepToString(a)`.
:::

```aufgabe
id: zd-al-laengen
titel: Längen und Ecken ablesen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] g = {
          {5, 1, 4, 2},
          {3, 9, 6, 8},
          {0, 7, 2, 5}
      };
      System.out.println(g.length + " " + g[0].length);
      System.out.println(g[2][1]);
      System.out.println(g[0][g[0].length - 1]);
      System.out.println(g[g.length - 1][0]);
    loesung: |
      3 4
      7
      2
      0
    fehler:
      - wert: "4 3\n7\n2\n0"
        meldung: '`g.length` zählt die **Zeilen** (die inneren Klammerpaare), `g[0].length` die Elemente der ersten Zeile.'
      - wert: "3 4\n6\n2\n0"
        meldung: '`g[2][1]` ist Zeile 2, Spalte 1. Zuerst die Zeile wählen: `{0, 7, 2, 5}`, darin das Element mit Index 1.'
hinweise:
  - Der erste Index wählt die Zeile, der zweite das Element darin.
loesung: |
  **Ansatz:** Für jede Ausgabe zuerst die Zeile bestimmen, dann darin das Element.
  ---
  `g` hat 3 Zeilen mit je 4 Elementen. `g[2]` ist `{0, 7, 2, 5}`, darin ist Index 1 die 7.
  ---
  `g[0][3]` ist das letzte Element der ersten Zeile, also 2. `g[2][0]` ist das erste Element der letzten Zeile, also 0.
```

### Ein zweidimensionales Array ausgeben

`System.out.println(a)` hilft bei Arrays nicht. Java gibt dann nur eine Kennung wie `[[I@1b6d3586` aus. Sie besteht
aus dem Typ (`[[I` heißt „Array von `int`-Arrays“) und einer Nummer, die bei jedem Lauf anders sein kann. Auch
`Arrays.toString(a)` aus [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen) reicht nicht: Es schreibt zwar das äußere Array, aber für jede Zeile wieder nur so
eine Kennung. Erst **`Arrays.deepToString(a)`** geht in jede Zeile hinein und schreibt ihre Werte. Das „deep“ heißt
„tief“: Die Methode geht eine Ebene tiefer.

:::achtung[Zeile und Spalte vertauscht]
Gegeben ist `int[][] m = {{7, 3, 9}, {4, 8, 1}};` mit 2 Zeilen und 3 Spalten. Jemand will das Element in **Spalte 0
der Zeile 1** ausgeben und schreibt

```java
System.out.println(m[0][1]);     // falsch: gibt 3 aus
```

Das ist Zeile 0, Spalte 1, also die 3. Gemeint war `m[1][0]`, also 4. Noch schlimmer wird es mit dem Element rechts
unten. Wer `m[2][1]` statt `m[1][2]` schreibt, greift auf Zeile 2 zu. Die gibt es nicht, und das Programm bricht mit
`ArrayIndexOutOfBoundsException: Index 2 out of bounds for length 2` ab. Die Meldung sagt dir sogar, welcher Index
(2) bei welcher Länge (2) nicht passt. Merke: **zuerst die Zeile, dann die Spalte.**
:::

:::achtung[Die Spaltenzahl mit a.length bestimmt]
Um die Elemente der Zeile 0 auszugeben, schreibt jemand

```java
int[][] m = {{7, 3, 9}, {4, 8, 1}};
for (int j = 0; j < m.length; j++) {     // falsch: m.length ist 2
    System.out.print(m[0][j] + " ");
}
```

Die Ausgabe ist nur `7 3`. Die 9 fehlt, denn `m.length` ist die Anzahl der **Zeilen** (2), nicht die Länge einer Zeile
(3). Richtig ist `j < m[0].length`. Bei einer Tabelle mit mehr Zeilen als Spalten wäre der Fehler noch auffälliger: Dann
läuft `j` über das Zeilenende hinaus, und es folgt eine `ArrayIndexOutOfBoundsException`.
:::

```aufgabe
id: zd-al-luecke-anlegen
titel: Ein Notenfeld anlegen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze den Code. Er soll ein Feld `noten` vom Typ `double` mit 4 Zeilen und 6 Spalten anlegen. Danach soll er das
  Element **rechts unten** auf `1.5` setzen, ohne die Zahlen 3 oder 5 hinzuschreiben.
teile:
  - typ: lueckentext
    code: |
      double___ noten = new double___;
      noten[noten.length - 1][___] = 1.5;
    luecken: [["[][]"], ["[4][6]"], ["noten[0].length - 1", "noten[noten.length - 1].length - 1"]]
    fehler:
      - wert: ["[][]", "[6][4]", "noten[0].length - 1"]
        meldung: Die erste Zahl hinter `new double` ist die Anzahl der **Zeilen**. Gewünscht sind 4 Zeilen mit je 6 Spalten.
      - wert: ["[][]", "[4][6]", "noten.length - 1"]
        meldung: '`noten.length` ist die Anzahl der Zeilen (4). Der letzte Spaltenindex ist aber `noten[0].length - 1`, also 5.'
hinweise:
  - Der letzte gültige Index einer Zeile ist ihre Länge minus 1.
loesung: |
  **Ansatz:** Typ mit zwei Klammerpaaren, dann `new double[Zeilen][Spalten]`.
  ---
  Lücken: `[][]`, `[4][6]` und `noten[0].length - 1`. Der Ausdruck ergibt 5, den letzten Spaltenindex.
```

```aufgabe
id: zd-al-rf-tabelle
titel: Aussagen zu einer Tabelle
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist `char[][] feld = new char[5][8];`. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`feld.length` ist 5.'
        richtig: true
        erklaerung: Die erste Zahl hinter `new char` ist die Anzahl der Zeilen.
      - text: '`feld[4][8] = ''x'';` ist ein gültiger Zugriff auf das Element rechts unten.'
        richtig: false
        erklaerung: 'Jede Zeile hat 8 Elemente mit den Indizes 0 bis 7. Rechts unten ist `feld[4][7]`. Index 8 führt zu einer `ArrayIndexOutOfBoundsException`.'
      - text: Das Array kann 40 Zeichen aufnehmen.
        richtig: true
        erklaerung: '5 Zeilen mit je 8 Spalten ergeben 5 · 8 = 40 Elemente.'
      - text: '`feld[2]` ist ein Array vom Typ `char[]` mit der Länge 8.'
        richtig: true
        erklaerung: 'Mit nur einem Index bekommst du eine ganze Zeile. Jede Zeile ist ein `char[]` mit 8 Elementen.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Prüfe die letzte Spalte genau. Bei 8 Spalten ist der größte Index 7, nicht 8.'
      - wert: [r, f, f, r]
        meldung: 'Die Anzahl der Elemente ist Zeilen **mal** Spalten. 5 · 8 ergibt 40.'
hinweise:
  - Die erlaubten Indizes reichen von 0 bis Länge minus 1.
  - Mit einem Index erhältst du eine Zeile, mit zwei Indizes ein einzelnes Zeichen.
loesung: |
  **Ansatz:** Zeilen und Spalten aus `new char[5][8]` ablesen und jede Aussage an den erlaubten Indizes prüfen.
  ---
  5 Zeilen mit je 8 Spalten. `feld.length` ist 5, und es gibt 40 Elemente.
  ---
  Rechts unten ist `feld[4][7]`, nicht `feld[4][8]`. `feld[2]` ist eine ganze Zeile vom Typ `char[]` mit der Länge 8. Richtig sind die Aussagen 1, 3 und 4.
```

```aufgabe
id: zd-al-deep
titel: Standardwerte und deepToString
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      String[][] namen = new String[2][3];
      namen[0][1] = "Ida";
      namen[1][2] = "Ben";
      boolean[][] da = new boolean[2][2];
      da[1][0] = true;
      System.out.println(Arrays.deepToString(namen));
      System.out.println(Arrays.deepToString(da));
    loesung: |
      [[null, Ida, null], [null, null, Ben]]
      [[false, false], [true, false]]
    fehler:
      - wert: "[[, Ida, ], [, , Ben]]\n[[false, false], [true, false]]"
        meldung: 'Der Standardwert für `String` ist `null`. `deepToString` schreibt ihn als `null`, nicht als leeren Text.'
      - wert: "[[null, Ida, null], [null, null, Ben]]\n[[false, true], [false, false]]"
        meldung: '`da[1][0]` ist Zeile 1, Spalte 0. In der zweiten Zeile steht also das erste Element auf `true`.'
hinweise:
  - Zeichne beide Tabellen und trage zuerst überall den Standardwert ein.
  - '`deepToString` schreibt Strings ohne Anführungszeichen und `null` als das Wort `null`.'
loesung: |
  **Ansatz:** Tabellen mit Standardwerten füllen, dann die Zuweisungen eintragen.
  ---
  `namen` hat 2 Zeilen mit je 3 Elementen, alle zunächst `null`. Danach steht `Ida` in Zeile 0, Spalte 1 und `Ben` in Zeile 1, Spalte 2.
  ---
  `da` hat 2 Zeilen mit je 2 Elementen, alle zunächst `false`. `da[1][0]` wird `true`. Das ergibt die beiden Zeilen der Ausgabe.
```

```aufgabe
id: zd-al-zeilen-fehler
titel: Welche Zeilen übersetzt der Compiler nicht?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Markiere **alle** Zeilen, die der Compiler ablehnt. Jede Zeile ist für sich zu beurteilen.
teile:
  - typ: zeilen
    code: |
      int[][] a = new int[2][3];
      int[][] b = {{1, 2}, {3, 4}};
      int[] c = new int[2][2];
      int[][] d = {1, 2, 3};
      double[][] e = new double[3][1];
      int f = a[0];
    loesung: [3, 4, 6]
    fehler:
      - wert: [3, 4]
        meldung: '`a[0]` ist eine ganze Zeile vom Typ `int[]`. Sie passt nicht in eine Variable vom Typ `int`.'
      - wert: [4, 6]
        meldung: '`new int[2][2]` ist ein zweidimensionales Array (`int[][]`). Es passt nicht in eine Variable vom Typ `int[]`.'
      - wert: [3, 6]
        meldung: 'Ein `int[][]` braucht innere Klammerpaare. `{1, 2, 3}` enthält Zahlen, keine Zeilen.'
hinweise:
  - Vergleiche in jeder Zeile den Typ links mit dem Typ des Ausdrucks rechts.
  - Ein Index weniger heißt eine Dimension weniger. `a[0]` ist also ein `int[]`.
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob der Typ rechts zum Typ der Variable links passt.
  ---
  Zeile 3: Rechts steht ein `int[][]`, links ein `int[]`. Zeile 4: Der Initialisierer enthält Zahlen statt Zeilen.
  ---
  Zeile 6: `a[0]` ist ein `int[]` und kein `int`. Die Zeilen 1, 2 und 5 sind in Ordnung, auch eine Tabelle mit nur einer Spalte ist erlaubt.
```

```aufgabe
id: zd-al-ausgabe-index
titel: Indizes aus Variablen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] z = {
          {1, 2, 3},
          {4, 5, 6},
          {7, 8, 9}
      };
      int i = 2;
      int j = 0;
      System.out.println(z[i][j] + " " + z[j][i]);
      z[j][i] = z[i][j] * 10;
      System.out.println(z[0][2] + " " + z[2][0]);
      System.out.println(z[i - 1][i - 1] + z[1].length);
    loesung: |
      7 3
      70 7
      8
    fehler:
      - wert: "3 7\n70 7\n8"
        meldung: '`z[i][j]` mit `i = 2` und `j = 0` ist Zeile 2, Spalte 0, also 7. `z[j][i]` ist Zeile 0, Spalte 2, also 3.'
      - wert: "7 3\n70 7\n53"
        meldung: '`z[1][1] + z[1].length` ist eine Addition von zwei `int`-Werten: `5 + 3 = 8`. Verkettet wird erst, wenn links ein String steht.'
hinweise:
  - Setze für `i` und `j` die Zahlen ein, bevor du auf das Array zugreifst.
  - '`z[j][i] = …` ändert genau ein Element, nämlich Zeile 0, Spalte 2.'
loesung: |
  **Ansatz:** Variablen einsetzen, dann Zeile und Spalte ablesen.
  ---
  `z[2][0]` ist 7, `z[0][2]` ist 3. Erste Ausgabe `7 3`.
  ---
  `z[0][2]` wird auf `7 · 10 = 70` gesetzt. `z[2][0]` bleibt 7. Zweite Ausgabe `70 7`.
  ---
  `z[1][1]` ist 5, `z[1].length` ist 3. Beide sind `int`, also wird gerechnet: 8.
```

```aufgabe
id: zd-al-code-ecken
titel: Die Summe der Ecken
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: Eigene Aufgabe zum Zugriff mit length (Randfälle wie im Programmiertest)
angabe: |
  Implementiere `int eckenSumme(int[][] a)`. Die Methode liefert die Summe der Elemente in den vier Ecken des
  rechteckigen Arrays `a`: links oben, rechts oben, links unten und rechts unten.

  Fallen Ecken zusammen, weil `a` nur eine Zeile oder nur eine Spalte hat, zählt jedes Element **nur einmal**.
  Vorbedingung: `a != null`, `a.length > 0`, alle Zeilen sind gleich lang und haben mindestens ein Element.

  ```java
  eckenSumme(new int[][]{{1, 2, 3}, {4, 5, 6}})   // liefert 1 + 3 + 4 + 6 = 14
  eckenSumme(new int[][]{{4, 9, 2}})              // eine Zeile: 4 + 2 = 6
  eckenSumme(new int[][]{{8}})                    // ein einziges Element: 8
  ```
teile:
  - typ: code
    vorlage: |
      public class Ecken {
          public static int eckenSumme(int[][] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ecken {
          public static int eckenSumme(int[][] a) {
              int letzteZeile = a.length - 1;
              int letzteSpalte = a[0].length - 1;
              int summe = a[0][0];
              if (letzteSpalte > 0) {
                  summe += a[0][letzteSpalte];
              }
              if (letzteZeile > 0) {
                  summe += a[letzteZeile][0];
              }
              if (letzteZeile > 0 && letzteSpalte > 0) {
                  summe += a[letzteZeile][letzteSpalte];
              }
              return summe;
          }
      }
    tests:
      - { aufruf: "eckenSumme(new int[][]{{1, 2, 3}, {4, 5, 6}})", erwartet: "14" }
      - { aufruf: "eckenSumme(new int[][]{{4, 9, 2}})", erwartet: "6", beschreibung: "nur eine Zeile" }
      - { aufruf: "eckenSumme(new int[][]{{8}})", erwartet: "8", beschreibung: "ein einziges Element" }
      - { aufruf: "eckenSumme(new int[][]{{3}, {5}, {1}})", erwartet: "4", beschreibung: "nur eine Spalte" }
      - { aufruf: "eckenSumme(new int[][]{{2, 0, 0, 7}, {0, 9, 9, 0}, {1, 0, 0, 5}})", erwartet: "15", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bei nur einer Zeile sind links oben und links unten dasselbe Element. Zählst du es doppelt?" }
      - { wert: 3, meldung: "Bei einem einzigen Element fallen alle vier Ecken zusammen. Das Ergebnis ist das Element selbst." }
hinweise:
  - Bestimme zuerst den letzten Zeilenindex `a.length - 1` und den letzten Spaltenindex `a[0].length - 1`.
  - Eine Ecke kommt nur dazu, wenn sie wirklich ein anderes Element ist, also wenn der letzte Index größer als 0 ist.
loesung: |
  **Ansatz:** Die vier Ecken haben die Indizes `[0][0]`, `[0][s]`, `[z][0]` und `[z][s]`. Dabei ist `z` der letzte Zeilen- und `s` der letzte Spaltenindex.
  ---
  ```java
  int z = a.length - 1;
  int s = a[0].length - 1;
  int summe = a[0][0];
  if (s > 0) summe += a[0][s];
  if (z > 0) summe += a[z][0];
  if (z > 0 && s > 0) summe += a[z][s];
  return summe;
  ```
  ---
  Ist `s = 0`, gibt es nur eine Spalte. Dann ist `[0][s]` dasselbe Element wie `[0][0]` und darf nicht noch einmal dazukommen. Genauso bei `z = 0`.
  ---
  Probe mit `{{3}, {5}, {1}}`: `z = 2`, `s = 0`. Es zählen `a[0][0] = 3` und `a[2][0] = 1`, zusammen 4.
```

```reflexion
frage: Warum ist `a.length` bei einem zweidimensionalen Array die Anzahl der Zeilen und nicht die Anzahl aller Elemente?
antwort: |
  Ein zweidimensionales Array ist in Java ein Array, dessen Elemente Zeilen sind. `a` zeigt auf dieses äußere Array.
  Seine Elemente sind die Zeilen `a[0]`, `a[1]` und so weiter. `length` zählt immer die Elemente des Arrays, auf das
  man es anwendet. Beim äußeren Array sind das die Zeilen. Die Anzahl aller Zahlen ist bei einer rechteckigen Tabelle
  das Produkt `a.length * a[0].length`. Eine eigene Angabe wie `length` gibt es dafür nicht.
```

## Verschachtelte Schleifen über Zeilen und Spalten

```aufgabe
id: zd-vs-check-summe
titel: Eine Summe in einer Schleife
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings))
teile:
  - typ: ausgabe
    code: |
      int[] werte = {6, 2, 9, 4};
      int summe = 0;
      for (int i = 0; i < werte.length; i++) {
          summe += werte[i];
      }
      System.out.println(summe);
    loesung: |
      21
    fehler:
      - wert: "4"
        meldung: '`summe += werte[i]` addiert zum bisherigen Wert. Am Ende steht die Summe aller Elemente, nicht nur das letzte.'
hinweise:
  - Die Sammelvariable beginnt bei 0 und wächst in jedem Durchlauf.
loesung: |
  Die Schleife addiert 6, 2, 9 und 4 nacheinander zu `summe`.
  ---
  Ergebnis: 6 + 2 + 9 + 4 = 21.
```

Eine Schleife über ein eindimensionales Array kennst du aus [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen). Bei einem zweidimensionalen Array gibt es
zwei Indizes, also brauchst du **zwei Schleifen**, eine in der anderen. Die äußere Schleife geht die Zeilen durch, die
innere die Elemente der aktuellen Zeile. Das ist genau das Muster aus
[4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen), nur dass jetzt die Grenzen aus dem
Array kommen.

```java
for (int i = 0; i < a.length; i++) {            // i läuft über alle Zeilen
    for (int j = 0; j < a[i].length; j++) {     // j läuft über alle Elemente der Zeile i
        // hier ist a[i][j] das aktuelle Element
    }
}
```

- Die äußere Bedingung `i < a.length` sorgt dafür, dass `i` jeden gültigen Zeilenindex annimmt, von 0 bis zur letzten Zeile.
- Die innere Bedingung `j < a[i].length` nimmt die Länge **der aktuellen Zeile**. Bei einer rechteckigen Tabelle sind alle Zeilen gleich lang. In der nächsten Lektion lernst du Arrays kennen, deren Zeilen verschieden lang sind. Mit `a[i].length` funktioniert das Gerüst auch dort.
- Die Reihenfolge ist **zeilenweise**: zuerst alle Elemente der Zeile 0 von links nach rechts, dann alle der Zeile 1 und so weiter. So liest du auch ein Buch.

:::beispiel[Eine Tabelle ausgeben und alle Werte addieren]
```java
int[][] m = {
    {3, 1, 4},
    {1, 5, 9}
};
int summe = 0;
for (int i = 0; i < m.length; i++) {
    for (int j = 0; j < m[i].length; j++) {
        System.out.print(m[i][j] + " ");
        summe += m[i][j];
    }
    System.out.println();
}
System.out.println("Summe: " + summe);
```

- `summe` steht **vor** beiden Schleifen. Sie soll über alle Zeilen hinweg weiterzählen.
- In der inneren Schleife gibt `print` das Element mit einem Leerzeichen dahinter aus, ohne die Zeile zu beenden. Danach wird das Element zu `summe` addiert.
- `System.out.println();` steht **nach** der inneren Schleife, aber noch in der äußeren. Es beendet die Ausgabezeile, sobald eine Tabellenzeile fertig ist.
- Die Werte werden in der Reihenfolge 3, 1, 4, 1, 5, 9 besucht. Die Summe ist 23.

Ausgabe (jede Tabellenzeile endet mit einem Leerzeichen, das man nicht sieht):

```
3 1 4 
1 5 9 
Summe: 23
```
:::

```aufgabe
id: zd-vs-gefuehrt
titel: Werte über einer Grenze zählen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Was gibt der Code aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      int[][] w = {
          {4, 7, 2},
          {9, 6, 1},
          {3, 8, 5}
      };
      int anzahl = 0;
      for (int i = 0; i < w.length; i++) {
          for (int j = 0; j < w[i].length; j++) {
              if (w[i][j] > 5) {
                  anzahl++;
              }
          }
      }
      System.out.println(anzahl);
    loesung: |
      4
    fehler:
      - wert: "5"
        meldung: 'Die Bedingung ist `> 5`, nicht `>= 5`. Die 5 selbst zählt nicht mit.'
      - wert: "1"
        meldung: Die äußere Schleife geht durch **alle** Zeilen. Gezählt wird in der ganzen Tabelle, nicht nur in einer Zeile.
gefuehrt:
  - text: Wie oft wird der Rumpf der inneren Schleife insgesamt ausgeführt?
    teil: { typ: zahl, loesung: "3 * 3" }
    erklaerung: Drei Zeilen mit je drei Elementen. Jedes Element wird genau einmal besucht.
  - text: Wie viele Werte größer als 5 stehen in Zeile 0?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: In `{4, 7, 2}` ist nur die 7 größer als 5.
  - text: Und in Zeile 1?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: In `{9, 6, 1}` sind es die 9 und die 6.
  - text: Und in Zeile 2?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: In `{3, 8, 5}` ist es nur die 8. Die 5 ist nicht größer als 5.
hinweise:
  - Gehe die Tabelle Zeile für Zeile durch und zähle in jeder Zeile die Werte über 5.
loesung: |
  **Ansatz:** Das Gerüst besucht jedes Element einmal. Für jedes Element prüft das `if`, ob es größer als 5 ist.
  ---
  Treffer: 7 in Zeile 0, 9 und 6 in Zeile 1, 8 in Zeile 2. Zusammen 1 + 2 + 1 = 4.
```

### Zeilensummen und Spaltensummen

Oft brauchst du nicht eine Summe über alles, sondern **eine Summe pro Zeile** oder **eine pro Spalte**. Das Ergebnis
ist dann ein eindimensionales Array mit einem Platz pro Zeile beziehungsweise pro Spalte.

:::beispiel[Umsätze pro Filiale und pro Quartal]
Eine Firma hat 3 Filialen (Zeilen) und notiert die Umsätze in 4 Quartalen (Spalten), in tausend Euro:

```java
int[][] umsatz = {
    {4, 0, 3, 5},
    {2, 6, 1, 0},
    {7, 2, 2, 4}
};

int[] proFiliale = new int[umsatz.length];          // ein Platz pro Zeile
for (int i = 0; i < umsatz.length; i++) {
    for (int j = 0; j < umsatz[i].length; j++) {
        proFiliale[i] += umsatz[i][j];
    }
}

int[] proQuartal = new int[umsatz[0].length];       // ein Platz pro Spalte
for (int j = 0; j < umsatz[0].length; j++) {
    for (int i = 0; i < umsatz.length; i++) {
        proQuartal[j] += umsatz[i][j];
    }
}
System.out.println(Arrays.toString(proFiliale));
System.out.println(Arrays.toString(proQuartal));
```

**Pro Filiale:** `proFiliale` hat so viele Plätze, wie es Zeilen gibt. Alle beginnen bei 0. In der Zeile `i` wird
jedes Element zu `proFiliale[i]` addiert. Zeile 0 ergibt 4 + 0 + 3 + 5 = 12, Zeile 1 ergibt 9, Zeile 2 ergibt 15.

**Pro Quartal:** Jetzt sind die Schleifen **vertauscht**. Außen läuft `j` über die Spalten, innen `i` über die
Zeilen. So wird eine Spalte von oben nach unten durchlaufen, bevor die nächste drankommt. Das heißt **spaltenweise**.
Spalte 0 ergibt 4 + 2 + 7 = 13, dann folgen 8, 6 und 9. Die Spaltenzahl `umsatz[0].length` stimmt hier, weil alle
Zeilen gleich lang sind.

Ausgabe:

```
[12, 9, 15]
[13, 8, 6, 9]
```

Probe: Beide Arrays müssen zusammen den Gesamtumsatz ergeben. 12 + 9 + 15 = 36 und 13 + 8 + 6 + 9 = 36.
:::

:::achtung[Die Summe in der äußeren Schleife zurückgesetzt]
Jemand will den Gesamtumsatz aller Filialen berechnen und schreibt

```java
int summe = 0;
for (int i = 0; i < umsatz.length; i++) {
    summe = 0;                                  // falsch: löscht die bisherige Summe
    for (int j = 0; j < umsatz[i].length; j++) {
        summe += umsatz[i][j];
    }
}
System.out.println(summe);                      // gibt 15 statt 36 aus
```

Die Zeile `summe = 0;` läuft zu Beginn **jeder** Zeile. Sie löscht, was die Zeilen davor gesammelt haben. Übrig bleibt
nur die Summe der letzten Zeile, also 7 + 2 + 2 + 4 = 15. Die Regel: Setze eine Sammelvariable genau **einmal** auf ihren Anfangswert, und zwar vor der Schleife, die über
alles läuft, was gesammelt werden soll.
:::

:::achtung[Bei spaltenweisem Durchlauf die Grenzen vertauscht]
Für die Spaltensummen der 3 × 4-Tabelle `umsatz` vertauscht jemand nur die Indizes, aber nicht die Grenzen:

```java
for (int j = 0; j < umsatz.length; j++) {          // falsch: 3 ist die Zeilenzahl
    for (int i = 0; i < umsatz[0].length; i++) {   // falsch: 4 ist die Spaltenzahl
        proQuartal[j] += umsatz[i][j];
    }
}
```

Für `j = 0` läuft `i` bis 3. Beim Zugriff `umsatz[3][0]` gibt es keine Zeile 3, und das Programm bricht mit
`ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3` ab. Prüfe darum jede Grenze einzeln: Die Grenze
von `i` muss die **Zeilenzahl** sein, die Grenze von `j` die **Spaltenzahl**, egal welche Schleife außen steht.
:::

```aufgabe
id: zd-vs-trennzeichen
titel: Eine Tabelle mit Kommas ausgeben
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] z = {
          {1, 2, 3},
          {4, 5, 6}
      };
      for (int i = 0; i < z.length; i++) {
          for (int j = 0; j < z[i].length; j++) {
              if (j > 0) {
                  System.out.print(",");
              }
              System.out.print(z[i][j]);
          }
          System.out.println();
      }
    loesung: |
      1,2,3
      4,5,6
    fehler:
      - wert: "1,2,3,\n4,5,6,"
        meldung: Das Komma wird **vor** einem Element ausgegeben, und zwar nur, wenn `j > 0` ist. Nach dem letzten Element folgt also kein Komma.
      - wert: "1,2,3,4,5,6"
        meldung: '`System.out.println();` steht nach der inneren Schleife. Es beendet nach jeder Tabellenzeile die Ausgabezeile.'
hinweise:
  - Für das erste Element einer Zeile ist `j = 0`, dort erscheint kein Komma.
loesung: |
  **Ansatz:** Das ist die Trennzeichenregel aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem). Das Trennzeichen kommt vor jedes Element außer dem ersten.
  ---
  Zeile 0 ergibt `1,2,3`, dann beendet `println` die Zeile. Zeile 1 ergibt `4,5,6`.
```

```aufgabe
id: zd-vs-auswahl-spalte
titel: Welcher Code summiert eine Spalte?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  `a` ist ein rechteckiges `int[][]` mit mindestens 3 Spalten. Welcher Code berechnet die Summe der **Spalte 2**?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 0; i < a.length; i++) { s += a[i][2]; }`'
      - '`for (int j = 0; j < a[2].length; j++) { s += a[2][j]; }`'
      - '`for (int i = 0; i < a.length; i++) { s += a[i][i]; }`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`a[2][j]` hält den **Zeilenindex** 2 fest. Das summiert die Zeile 2, nicht die Spalte 2.'
      - wert: 2
        meldung: '`a[i][i]` ändert beide Indizes gleichzeitig. Das ist die Diagonale, nicht eine Spalte.'
hinweise:
  - In einer Spalte ist der zweite Index fest, und der erste läuft über alle Zeilen.
loesung: |
  **Ansatz:** Eine Spalte besteht aus den Elementen `a[0][2]`, `a[1][2]`, `a[2][2]` und so weiter. Der zweite Index bleibt 2.
  ---
  Nur die erste Schleife lässt den Zeilenindex `i` laufen und hält die Spalte 2 fest.
```

```aufgabe
id: zd-vs-trace-summe
titel: Eine Gesamtsumme Schritt für Schritt
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  int[][] a = {{2, 5, 1}, {4, 0, 3}};
  int summe = 0;
  for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < a[i].length; j++) {
          summe += a[i][j];
      }
  }
  ```

  Trage nach jedem Durchlauf der inneren Schleife die Werte von `i`, `j` und `summe` ein.
teile:
  - typ: trace
    spalten: [i, j, summe]
    zeilen: [1. Durchlauf, 2. Durchlauf, 3. Durchlauf, 4. Durchlauf, 5. Durchlauf, 6. Durchlauf]
    vorgabe: 1
    loesung: [[0, 0, 2], [0, 1, 7], [0, 2, 8], [1, 0, 12], [1, 1, 12], [1, 2, 15]]
    fehler:
      - wert: ["0", "0", "2", "0", "1", "7", "0", "2", "8", "1", "0", "4", "1", "1", "4", "1", "2", "7"]
        meldung: '`summe` wird nur einmal vor beiden Schleifen auf 0 gesetzt. Beim Wechsel in Zeile 1 rechnet sie mit 8 weiter.'
      - wert: ["0", "0", "2", "1", "0", "6", "0", "1", "11", "1", "1", "11", "0", "2", "12", "1", "2", "15"]
        meldung: Die innere Schleife läuft vollständig, bevor `i` wächst. Zuerst kommen alle drei Elemente der Zeile 0, dann die der Zeile 1.
hinweise:
  - Bei jedem Wert von `i` läuft `j` einmal ganz von 0 bis 2.
  - '`summe` wächst bei jedem Durchlauf um das Element `a[i][j]`.'
loesung: |
  **Ansatz:** Zeilenweise durchgehen. Für `i = 0` läuft `j = 0, 1, 2`, danach für `i = 1` wieder `j = 0, 1, 2`.
  ---
  Zeile 0: 0 + 2 = 2, 2 + 5 = 7, 7 + 1 = 8.
  ---
  Zeile 1: 8 + 4 = 12, 12 + 0 = 12, 12 + 3 = 15. Die Gesamtsumme ist 15.
```

```aufgabe
id: zd-vs-luecke-spalten
titel: Spaltensummen ergänzen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ergänze den Code so, dass `s[j]` die Summe der Spalte `j` enthält. Das Array `a` ist rechteckig.
teile:
  - typ: lueckentext
    code: |
      int[][] a = {{1, 2}, {3, 4}, {5, 6}};
      int[] s = new int[a[0].length];
      for (int j = 0; j < ___; j++) {
          for (int i = 0; i < ___; i++) {
              s[j] += a[___][___];
          }
      }
    luecken: [["a[0].length", "s.length"], ["a.length"], ["i"], ["j"]]
    fehler:
      - wert: ["a.length", "a[0].length", "i", "j"]
        meldung: '`j` ist der Spaltenindex. Seine Grenze ist die Spaltenzahl `a[0].length`. Die Grenze von `i` ist die Zeilenzahl `a.length`.'
      - wert: ["a[0].length", "a.length", "j", "i"]
        meldung: Beim Zugriff steht immer zuerst die Zeile. Der Zeilenindex ist hier `i`, also `a[i][j]`.
hinweise:
  - Die äußere Schleife läuft über die Spalten, die innere über die Zeilen.
  - Egal welche Schleife außen steht, der Zugriff lautet immer `a[zeile][spalte]`.
loesung: |
  **Ansatz:** Spaltenweiser Durchlauf. Außen die Spalte `j`, innen die Zeile `i`.
  ---
  Grenzen: `j < a[0].length` (2 Spalten) und `i < a.length` (3 Zeilen).
  ---
  Zugriff `a[i][j]`. Ergebnis für dieses Array: `s = {9, 12}`.
```

```aufgabe
id: zd-vs-diagonalen
titel: Die beiden Diagonalen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Bei einer quadratischen Tabelle mit `n` Zeilen und `n` Spalten läuft die **Hauptdiagonale** von links oben nach
  rechts unten, die **Nebendiagonale** von rechts oben nach links unten. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] q = {
          {1, 0, 2, 3},
          {4, 5, 6, 0},
          {7, 0, 8, 9},
          {2, 1, 0, 6}
      };
      int n = q.length;
      for (int i = 0; i < n; i++) {
          System.out.print(q[i][i] + " ");
      }
      System.out.println();
      for (int i = 0; i < n; i++) {
          System.out.print(q[i][n - 1 - i] + " ");
      }
      System.out.println();
    loesung: |
      1 5 8 6 
      3 6 0 2 
    trim: true
    fehler:
      - wert: "1 5 8 6\n2 0 6 3"
        meldung: 'Für `i = 0` ist `q[0][n - 1 - 0]` das Element rechts oben in **Zeile 0**, also 3. Die Nebendiagonale beginnt oben.'
      - wert: "1 4 7 2\n3 6 0 2"
        meldung: '`q[i][i]` ändert Zeile **und** Spalte. `q[i][0]` wäre die Spalte 0.'
hinweise:
  - Auf der Hauptdiagonalen sind Zeilen- und Spaltenindex gleich.
  - Auf der Nebendiagonalen ergeben Zeilen- und Spaltenindex zusammen `n - 1`.
loesung: |
  **Ansatz:** Für jede Zeile `i` genau ein Element: `q[i][i]` auf der Haupt-, `q[i][n - 1 - i]` auf der Nebendiagonalen.
  ---
  Hauptdiagonale: `q[0][0] = 1`, `q[1][1] = 5`, `q[2][2] = 8`, `q[3][3] = 6`.
  ---
  Nebendiagonale mit `n = 4`: `q[0][3] = 3`, `q[1][2] = 6`, `q[2][1] = 0`, `q[3][0] = 2`. Für eine Diagonale reicht eine einzige Schleife.
```

:::merke[Die drei Durchlaufmuster]
1. **Zeilenweise (alle Elemente):** außen `i < a.length`, innen `j < a[i].length`, Zugriff `a[i][j]`. Funktioniert für jede Tabelle.
2. **Spaltenweise:** außen `j < a[0].length`, innen `i < a.length`, Zugriff weiterhin `a[i][j]`. Nur sicher, wenn alle Zeilen gleich lang sind.
3. **Diagonal** (nur bei quadratischen Tabellen): eine Schleife `i < a.length` mit `a[i][i]` oder `a[i][a.length - 1 - i]`.
:::

```aufgabe
id: zd-vs-code-zeilenmax
titel: Das Maximum jeder Zeile
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: nach dem Muster „Wert pro Zeile bestimmen“ (Aufgabenblatt 4/5, eigene Variante)
angabe: |
  Implementiere `int[] zeilenMaxima(int[][] a)`. Die Methode liefert ein neues Array, das für jede Zeile von `a` deren
  größten Wert enthält. Vorbedingung: `a != null`, `a.length > 0`, jede Zeile hat mindestens ein Element. Die Zeilen
  dürfen verschieden lang sein, und die Werte dürfen negativ sein.

  ```java
  zeilenMaxima(new int[][]{{3, 9, 2}, {5, 1}})     // liefert {9, 5}
  zeilenMaxima(new int[][]{{-4, -1, -7}})          // liefert {-1}
  ```
teile:
  - typ: code
    vorlage: |
      public class Maxima {
          public static int[] zeilenMaxima(int[][] a) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Maxima {
          public static int[] zeilenMaxima(int[][] a) {
              int[] ergebnis = new int[a.length];
              for (int i = 0; i < a.length; i++) {
                  int max = a[i][0];
                  for (int j = 1; j < a[i].length; j++) {
                      if (a[i][j] > max) {
                          max = a[i][j];
                      }
                  }
                  ergebnis[i] = max;
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "zeilenMaxima(new int[][]{{3, 9, 2}, {5, 1}})", erwartet: "new int[]{9, 5}" }
      - { aufruf: "zeilenMaxima(new int[][]{{-4, -1, -7}})", erwartet: "new int[]{-1}", beschreibung: "nur negative Werte" }
      - { aufruf: "zeilenMaxima(new int[][]{{8}, {2, 2}, {0, 6, 6, 1}})", erwartet: "new int[]{8, 2, 6}" }
      - { aufruf: "zeilenMaxima(new int[][]{{1, 2, 3, 4, 5}, {-9}, {7, 7}})", erwartet: "new int[]{5, -9, 7}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Liefert deine Methode 0 statt -1? Starte das Maximum nicht mit 0, sondern mit dem ersten Element der Zeile `a[i][0]`." }
hinweise:
  - Das Ergebnis hat so viele Plätze, wie `a` Zeilen hat.
  - Setze das Maximum für jede Zeile neu auf ihr erstes Element und vergleiche dann mit den übrigen.
loesung: |
  **Ansatz:** Ein Ergebnis-Array mit `a.length` Plätzen. Für jede Zeile das Maximum wie in [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen) bestimmen.
  ---
  ```java
  int[] ergebnis = new int[a.length];
  for (int i = 0; i < a.length; i++) {
      int max = a[i][0];
      for (int j = 1; j < a[i].length; j++) {
          if (a[i][j] > max) max = a[i][j];
      }
      ergebnis[i] = max;
  }
  return ergebnis;
  ```
  ---
  `max` wird **in** der äußeren Schleife angelegt, denn jede Zeile hat ihr eigenes Maximum. Der Startwert `a[i][0]` funktioniert auch bei lauter negativen Zahlen. Mit `max = 0` käme bei `{-4, -1, -7}` fälschlich 0 heraus.
  ---
  Probe: `{{3, 9, 2}, {5, 1}}` ergibt `{9, 5}`.
```

```aufgabe
id: zd-vs-rf-reihenfolge
titel: Spielt die Reihenfolge der Schleifen eine Rolle?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  `a` ist eine rechteckige Tabelle mit 3 Zeilen und 5 Spalten. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für die Summe aller Elemente ist es egal, ob man zeilenweise oder spaltenweise durchläuft.
        richtig: true
        erklaerung: Beide Durchläufe besuchen jedes Element genau einmal. Die Reihenfolge der Additionen ändert die Summe nicht.
      - text: Gibt man jedes Element mit `print` aus, liefern beide Durchläufe dieselbe Ausgabe.
        richtig: false
        erklaerung: Bei der Ausgabe zählt die Reihenfolge. Zeilenweise beginnt mit `a[0][0], a[0][1], …`, spaltenweise mit `a[0][0], a[1][0], …`.
      - text: Für die Hauptdiagonale braucht man zwei verschachtelte Schleifen.
        richtig: false
        erklaerung: 'Eine Schleife genügt, denn auf der Diagonalen sind beide Indizes gleich: `a[i][i]`. Außerdem hat `a` gar keine vollständige Diagonale, weil es nicht quadratisch ist.'
      - text: Eine Schleife über die Spalten mit der Grenze `j < a[0].length` ist hier sicher.
        richtig: true
        erklaerung: Alle Zeilen sind gleich lang. Darum ist die Länge der Zeile 0 die Spaltenzahl jeder Zeile.
    fehler:
      - wert: [r, r, f, r]
        meldung: Überlege, in welcher Reihenfolge die Werte bei einem spaltenweisen Durchlauf ausgegeben werden. Ist das die Reihenfolge, in der man die Tabelle liest?
      - wert: [r, f, r, r]
        meldung: Auf der Hauptdiagonalen ist der Spaltenindex immer gleich dem Zeilenindex. Wie viele Indizes müssen dann wirklich laufen?
hinweise:
  - Unterscheide Aufgaben, bei denen nur das Ergebnis zählt, von Aufgaben, bei denen die Reihenfolge zählt.
  - Ein rechteckiges Array hat lauter gleich lange Zeilen.
loesung: |
  **Ansatz:** Für jede Aussage fragen: Hängt das Ergebnis von der Besuchsreihenfolge ab?
  ---
  Die Summe hängt nicht von der Reihenfolge ab, die Ausgabe schon. Die Diagonale braucht nur eine Schleife.
  ---
  Bei gleich langen Zeilen ist `a[0].length` die Spaltenzahl. Richtig sind die Aussagen 1 und 4.
```

### Den größten Wert und seine Position finden

Manchmal genügt der größte Wert allein nicht. Du willst auch wissen, **wo** er steht. Dann merkst du dir neben dem
Wert auch seine beiden Indizes. Wie bei eindimensionalen Arrays startest du mit dem ersten Element `a[0][0]` und
vergleichst jedes weitere Element mit dem bisher besten.

:::beispiel[Die heißeste Messung finden]
Eine Wetterstation misst an 2 Tagen (Zeilen) je 3 Temperaturen (Spalten):

```java
int[][] temp = {
    {12, 17, 14},
    {11, 19, 15}
};
int besteZeile = 0;
int besteSpalte = 0;
for (int i = 0; i < temp.length; i++) {
    for (int j = 0; j < temp[i].length; j++) {
        if (temp[i][j] > temp[besteZeile][besteSpalte]) {
            besteZeile = i;
            besteSpalte = j;
        }
    }
}
System.out.println(temp[besteZeile][besteSpalte] + " an Tag " + besteZeile + ", Messung " + besteSpalte);
```

- Statt den Wert zu speichern, merkt sich das Programm nur die **Position** des bisher größten Werts. Den Wert selbst liest es jedes Mal mit `temp[besteZeile][besteSpalte]` ab.
- Der Vergleich `>` (und nicht `>=`) sorgt dafür, dass bei gleich großen Werten die **erste** Position im zeilenweisen Durchlauf gewinnt.
- Der Durchlauf: 12 ist der Start. 17 ist größer, also wird die Position (0, 1). 14, 11 sind kleiner. 19 ist größer, also (1, 1). 15 ist kleiner.

Ausgabe: `19 an Tag 1, Messung 1`.
:::

```aufgabe
id: zd-vs-code-maxposition
titel: Wo steht der größte Wert?
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Eigene Aufgabe nach dem Muster „Position suchen“ (Programmiertest, zwei Indizes zurückgeben)
angabe: |
  Implementiere `int[] maxPosition(int[][] a)`. Die Methode liefert ein neues Array der Länge 2: an Index 0 den
  Zeilenindex, an Index 1 den Spaltenindex des größten Elements. Kommt der größte Wert mehrfach vor, gilt die
  **erste** Stelle im zeilenweisen Durchlauf. Vorbedingung: `a != null`, `a.length > 0`, jede Zeile hat mindestens ein
  Element.

  ```java
  maxPosition(new int[][]{{1, 8, 3}, {8, 2, 0}})   // liefert {0, 1}
  maxPosition(new int[][]{{-5, -2}, {-9, -3}})     // liefert {0, 1}
  ```
teile:
  - typ: code
    vorlage: |
      public class Position {
          public static int[] maxPosition(int[][] a) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Position {
          public static int[] maxPosition(int[][] a) {
              int zeile = 0;
              int spalte = 0;
              for (int i = 0; i < a.length; i++) {
                  for (int j = 0; j < a[i].length; j++) {
                      if (a[i][j] > a[zeile][spalte]) {
                          zeile = i;
                          spalte = j;
                      }
                  }
              }
              return new int[]{zeile, spalte};
          }
      }
    tests:
      - { aufruf: "maxPosition(new int[][]{{1, 8, 3}, {8, 2, 0}})", erwartet: "new int[]{0, 1}", beschreibung: "Maximum zweimal: die erste Stelle zählt" }
      - { aufruf: "maxPosition(new int[][]{{-5, -2}, {-9, -3}})", erwartet: "new int[]{0, 1}", beschreibung: "nur negative Werte" }
      - { aufruf: "maxPosition(new int[][]{{4}})", erwartet: "new int[]{0, 0}", beschreibung: "ein einziges Element" }
      - { aufruf: "maxPosition(new int[][]{{1, 2}, {7, 7}, {3, 0}})", erwartet: "new int[]{1, 0}" }
      - { aufruf: "maxPosition(new int[][]{{0, 0, 0}, {0, 0, 5}})", erwartet: "new int[]{1, 2}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Liefert deine Methode `{1, 0}`? Dann ersetzt auch ein **gleich** großer Wert die bisherige Position. Vergleiche mit `>` statt `>=`." }
      - { wert: 2, meldung: "Bei lauter negativen Werten darf der Startwert nicht 0 sein. Beginne mit der Position `(0, 0)` und dem Wert `a[0][0]`." }
hinweise:
  - Merke dir zwei Indizes `zeile` und `spalte`, beide beginnen bei 0.
  - Ersetze sie nur, wenn ein Element **echt größer** ist. Am Ende gibst du `new int[]{zeile, spalte}` zurück.
loesung: |
  **Ansatz:** Zeilenweiser Durchlauf. Die Position des bisher größten Werts wird in zwei Variablen gemerkt.
  ---
  ```java
  int zeile = 0, spalte = 0;
  for (int i = 0; i < a.length; i++) {
      for (int j = 0; j < a[i].length; j++) {
          if (a[i][j] > a[zeile][spalte]) {
              zeile = i;
              spalte = j;
          }
      }
  }
  return new int[]{zeile, spalte};
  ```
  ---
  `>` statt `>=`: Bei einem gleich großen Wert bleibt die frühere Position stehen. Darum liefert `{{1, 8, 3}, {8, 2, 0}}` die Position `{0, 1}` und nicht `{1, 0}`.
  ---
  Zwei Rückgabewerte gibt es in Java nicht. Darum verpackt die Methode beide Indizes in ein neues Array der Länge 2.
```

## Jagged Arrays: Zeilen als eigene Arrays

```aufgabe
id: zd-ja-check-leer
titel: Ein leeres Array und der Vergleich mit ==
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[] leer = {};
      int[] a = {1, 2};
      int[] b = {1, 2};
      System.out.println(leer.length);
      System.out.println(a == b);
    loesung: |
      0
      false
    fehler:
      - wert: "0\ntrue"
        meldung: '`a` und `b` sind zwei verschiedene Arrays mit gleichem Inhalt. `==` vergleicht die Verweise, nicht den Inhalt.'
hinweise:
  - Ein Initialisierer legt jedes Mal ein neues Array an.
loesung: |
  `{}` ist ein Array ohne Elemente. Seine Länge ist 0.
  ---
  `a` und `b` zeigen auf zwei verschiedene Arrays. Darum liefert `a == b` den Wert `false`.
```

In der Definition aus [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen) stand: Ein
zweidimensionales Array ist ein **Array von Arrays**. Jetzt nehmen wir diesen Satz wörtlich. Die Variable `punkte`
zeigt auf ein **äußeres Array**. Dessen Elemente sind keine Zahlen, sondern **Verweise auf Zeilen**. Jede Zeile ist
ein eigenes, gewöhnliches `int[]`.

```
punkte ──► [ • , • , • ]             äußeres Array: drei Verweise
             │   │   │
             │   │   └──► [2, 2, 2, 1]     Zeile 2
             │   └──────► [1, 1, 2, 0]     Zeile 1
             └──────────► [2, 0, 1, 2]     Zeile 0
```

Bei `punkte[1][2]` geht Java zwei Schritte. Zuerst holt es aus dem äußeren Array den Verweis `punkte[1]` und
landet bei der Zeile 1. Dann nimmt es aus dieser Zeile das Element mit Index 2. Aus diesem Bild folgen drei Dinge:

1. Die Zeilen müssen **nicht gleich lang** sein. Jede Zeile ist ja ein eigenes Array mit eigener Länge.
2. Ein Element des äußeren Arrays kann auch `null` sein. Dann gibt es diese Zeile gar nicht.
3. Zwei Plätze des äußeren Arrays können auf **dieselbe** Zeile zeigen.

:::definition[Jagged Array]
Ein **jagged Array** (englisch *jagged*, „gezackt, ausgefranst“) ist ein zweidimensionales Array, dessen Zeilen
**verschieden lang** sind. Rechts hat es keinen glatten Rand, sondern einen gezackten. In Java ist das nichts
Besonderes: Jede Zeile ist ein eigenes Array mit eigener Länge.
:::

**Beispiel:** `int[][] dreieck = {{1}, {1, 2}, {1, 2, 3}};` hat Zeilen der Längen 1, 2 und 3.

**Kein Beispiel:** `int[][] r = new int[3][3];` ist **nicht** jagged. Alle drei Zeilen haben die Länge 3. Eine
solche Tabelle heißt **rechteckig**, bei gleich vielen Zeilen und Spalten auch **quadratisch**.

### Zeilen einzeln anlegen

Mit `new int[4][]` legst du nur das äußere Array mit 4 Plätzen an. Die zweite Klammer bleibt leer. Jeder Platz hat
zunächst den Standardwert für Verweise, also `null`. Danach legst du jede Zeile mit eigener Länge an.

:::beispiel[Ein Zahlendreieck aus einzelnen Zeilen]
```java
int[][] d = new int[4][];
for (int i = 0; i < d.length; i++) {
    d[i] = new int[i + 1];
    for (int j = 0; j < d[i].length; j++) {
        d[i][j] = j + 1;
    }
}
System.out.println(Arrays.deepToString(d));
```

- `new int[4][]` legt das äußere Array mit 4 Plätzen an. Alle vier sind `null`, es gibt noch keine Zeile.
- In der äußeren Schleife legt `d[i] = new int[i + 1];` die Zeile `i` mit der Länge `i + 1` an. Zeile 0 hat also 1 Element, Zeile 3 hat 4.
- Die innere Schleife läuft bis `d[i].length`, also genau über die gerade angelegte Zeile. Sie schreibt die Zahlen 1, 2, 3 und so weiter hinein.

Ausgabe:

```
[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
```
:::

```aufgabe
id: zd-ja-gefuehrt
titel: Zeilen mit fallender Länge
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Was gibt der Code aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      int[][] d = new int[3][];
      for (int i = 0; i < d.length; i++) {
          d[i] = new int[3 - i];
          for (int j = 0; j < d[i].length; j++) {
              d[i][j] = i * 10 + j;
          }
      }
      System.out.println(Arrays.deepToString(d));
      System.out.println(d[1].length + " " + d[2][0]);
    loesung: |
      [[0, 1, 2], [10, 11], [20]]
      2 20
    fehler:
      - wert: "[[0, 1, 2], [10, 11, 12], [20, 21, 22]]\n3 20"
        meldung: Jede Zeile wird mit `new int[3 - i]` angelegt. Zeile 1 hat also nur 2 Elemente, Zeile 2 nur 1.
      - wert: "[[0], [10, 11], [20, 21, 22]]\n2 20"
        meldung: Die Länge ist `3 - i`, sie wird also mit jeder Zeile kleiner. Zeile 0 ist die längste.
gefuehrt:
  - text: Welche Länge hat die Zeile 0?
    teil: { typ: zahl, loesung: "3 - 0" }
    erklaerung: '`new int[3 - i]` mit `i = 0` ergibt eine Zeile mit 3 Elementen.'
  - text: Welche Länge hat die Zeile 2?
    teil: { typ: zahl, loesung: "3 - 2" }
    erklaerung: Mit `i = 2` hat die Zeile nur noch 1 Element.
  - text: Welchen Wert bekommt `d[1][1]`?
    teil: { typ: zahl, loesung: "1 * 10 + 1" }
    erklaerung: '`i * 10 + j` mit `i = 1` und `j = 1` ergibt 11.'
hinweise:
  - Bestimme zuerst die Länge jeder Zeile, dann ihren Inhalt.
loesung: |
  **Ansatz:** Für jede Zeile zuerst die Länge `3 - i`, dann die Werte `i * 10 + j` bestimmen.
  ---
  Zeile 0: Länge 3, Werte 0, 1, 2. Zeile 1: Länge 2, Werte 10, 11. Zeile 2: Länge 1, Wert 20.
  ---
  `d[1].length` ist 2 und `d[2][0]` ist 20.
```

### Leere Zeile oder gar keine Zeile?

Zwei Fälle sehen ähnlich aus, verhalten sich aber völlig verschieden:

- Eine **leere Zeile** ist ein Array mit 0 Elementen, etwa durch `{}` oder `new int[0]`. Sie existiert, `a[i].length` ist 0. Eine Schleife bis `a[i].length` läuft dann einfach 0-mal. `deepToString` zeigt sie als `[]`.
- Eine **fehlende Zeile** ist der Wert `null` im äußeren Array. Es gibt dort kein Array. Schon `a[i].length` führt zu einer **NullPointerException**, also dem Abbruch „Zugriff über einen Verweis, der auf nichts zeigt“. `deepToString` zeigt sie als `null`.

Darum steht in den Vorbedingungen der Blätter und Tests oft „`a[i] != null` für alle gültigen `i`“. Dann musst du
fehlende Zeilen nicht behandeln. Leere Zeilen sind dagegen meist erlaubt und müssen funktionieren.

```aufgabe
id: zd-ja-laengen
titel: Ein gezacktes Array vermessen
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] g = {{4, 1}, {}, {7, 7, 7}, {2}};
      int anzahl = 0;
      for (int i = 0; i < g.length; i++) {
          anzahl += g[i].length;
      }
      System.out.println(g.length + " " + g[1].length + " " + anzahl);
      System.out.println(Arrays.deepToString(g));
    loesung: |
      4 0 6
      [[4, 1], [], [7, 7, 7], [2]]
    fehler:
      - wert: "4 0 12\n[[4, 1], [], [7, 7, 7], [2]]"
        meldung: Die Zeilen sind verschieden lang. Darum ist die Anzahl nicht Zeilen mal längste Zeile (4 · 3), sondern die Summe der einzelnen Längen.
      - wert: "3 0 6\n[[4, 1], [7, 7, 7], [2]]"
        meldung: 'Auch `{}` ist eine Zeile, nur eben ohne Elemente. Das äußere Array hat 4 Plätze, und `deepToString` zeigt die leere Zeile als `[]`.'
hinweise:
  - '`g.length` zählt die Zeilen, auch leere. `g[i].length` zählt die Elemente der Zeile `i`.'
loesung: |
  **Ansatz:** Zeilen zählen, dann die Längen der einzelnen Zeilen addieren.
  ---
  4 Zeilen mit den Längen 2, 0, 3 und 1. Insgesamt 6 Elemente. `g[1]` ist die leere Zeile mit Länge 0.
```

```aufgabe
id: zd-ja-auswahl-null
titel: Leere Zeile oder null?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben sind `int[][] p = new int[2][];` und `int[][] q = {{}, {}};`. Was passiert bei
  `System.out.println(p[0].length + q[0].length);`?
teile:
  - typ: auswahl
    optionen:
      - Das Programm bricht mit einer NullPointerException ab, weil `p[0]` den Wert `null` hat.
      - Es wird `0` ausgegeben, weil beide Zeilen leer sind.
      - Der Compiler lehnt `new int[2][]` ab, weil die Spaltenzahl fehlt.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`new int[2][]` legt keine Zeilen an. `p[0]` ist `null`, nicht ein leeres Array. Nur `q` hat zwei leere Zeilen.'
      - wert: 2
        meldung: Die hintere Klammer darf leer bleiben. Dann wird nur das äußere Array angelegt.
hinweise:
  - Was steht nach `new int[2][]` in den beiden Plätzen des äußeren Arrays?
loesung: |
  **Ansatz:** Bei `new int[2][]` bekommt jeder Platz des äußeren Arrays den Standardwert für Verweise, also `null`.
  ---
  `p[0].length` versucht, über `null` auf eine Länge zuzugreifen. Das führt zur NullPointerException. `q[0].length` wäre 0, aber dazu kommt es nicht mehr.
```

:::achtung[Zeilen vergessen anzulegen]
Jemand will ein Dreieck mit drei Zeilen bauen und schreibt

```java
int[][] d = new int[3][];
d[0][0] = 1;                     // falsch: d[0] ist null
```

Das übersetzt der Compiler ohne Fehler. Beim Ausführen bricht das Programm aber mit einer `NullPointerException` ab.
`new int[3][]` legt nur das äußere Array an, jede Zeile ist noch `null`. Vor dem ersten Zugriff auf `d[0][0]` muss die
Zeile existieren: `d[0] = new int[1];`. Merke: Bei einer leeren zweiten Klammer musst du **jede Zeile selbst** mit
`new` anlegen.
:::

### Zeilen sind Verweise

Weil das äußere Array nur Verweise enthält, können zwei Plätze auf **dieselbe** Zeile zeigen. Dann wirkt eine
Änderung über den einen Platz auch beim anderen. Das ist dieselbe Referenzsemantik wie in [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array),
nur eine Ebene tiefer.

:::beispiel[Zwei Plätze, eine Zeile]
```java
int[] gemeinsam = {5, 5};
int[][] m = {gemeinsam, gemeinsam, {1, 2}};
m[0][1] = 9;
System.out.println(Arrays.deepToString(m));
System.out.println(m[0] == m[1]);
m[1] = new int[]{5, 5};
m[1][0] = 0;
System.out.println(Arrays.deepToString(m));
```

- Der Initialisierer schreibt zweimal den Verweis `gemeinsam` in das äußere Array. `m[0]` und `m[1]` zeigen also auf **dasselbe** Array `{5, 5}`.
- `m[0][1] = 9` ändert dieses eine Array. Darum zeigt `deepToString` die 9 in Zeile 0 **und** in Zeile 1. Ausgabe: `[[5, 9], [5, 9], [1, 2]]`.
- `m[0] == m[1]` vergleicht die beiden Verweise. Sie sind gleich, also `true`.
- `m[1] = new int[]{5, 5};` legt ein **neues** Array an und lässt `m[1]` darauf zeigen. Ab jetzt sind die Zeilen getrennt. `m[1][0] = 0` ändert nur die neue Zeile. Ausgabe: `[[5, 9], [0, 5], [1, 2]]`.

Gesamte Ausgabe:

```
[[5, 9], [5, 9], [1, 2]]
true
[[5, 9], [0, 5], [1, 2]]
```
:::

Diese Eigenschaft ist auch nützlich. **Zwei Zeilen tauschen** heißt: zwei Verweise tauschen. Wie beim Tausch zweier
Zahlen brauchst du eine Hilfsvariable, hier vom Typ `int[]`:

```java
int[] tmp = a[0];      // tmp zeigt auf die alte Zeile 0
a[0] = a[2];           // Platz 0 zeigt jetzt auf die alte Zeile 2
a[2] = tmp;            // Platz 2 zeigt auf die alte Zeile 0
```

Dabei wird kein einziges Element kopiert. Darum funktioniert der Tausch auch, wenn die Zeilen verschieden lang sind.

:::achtung[Eine Kopie, die keine ist]
Jemand will eine Sicherheitskopie `b` von `a` anlegen und schreibt

```java
int[][] a = {{1, 2}, {3, 4}};
int[][] b = new int[a.length][];
for (int i = 0; i < a.length; i++) {
    b[i] = a[i];               // falsch: kopiert nur den Verweis auf die Zeile
}
b[0][0] = 99;
System.out.println(a[0][0]);   // gibt 99 aus, nicht 1
```

`b` ist zwar ein neues äußeres Array, aber seine Plätze zeigen auf **dieselben Zeilen** wie die von `a`. Ändert man
ein Element über `b`, ändert sich auch `a`. Eine solche Kopie, bei der nur das äußere Array neu ist, heißt **flache Kopie**. Für eine echte Kopie, eine
**tiefe Kopie**, muss jede Zeile neu angelegt und Element für Element befüllt werden:

```java
b[i] = new int[a[i].length];
for (int j = 0; j < a[i].length; j++) {
    b[i][j] = a[i][j];
}
```

Im Programmiertest musst du genau so kopieren, denn `clone` und `System.arraycopy` (zwei fertige Kopiermethoden von
Java) sind dort laut Angabe verboten.
:::

```aufgabe
id: zd-ja-alias
titel: Wer zeigt auf welche Zeile?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] z = {1, 2, 3};
      int[][] m = new int[3][];
      m[0] = z;
      m[1] = z;
      m[2] = new int[]{1, 2, 3};
      m[1][2] = 8;
      z[0] = 5;
      System.out.println(Arrays.deepToString(m));
      System.out.println((m[0] == m[1]) + " " + (m[0] == m[2]));
    loesung: |
      [[5, 2, 8], [5, 2, 8], [1, 2, 3]]
      true false
    fehler:
      - wert: "[[1, 2, 3], [5, 2, 8], [1, 2, 3]]\ntrue false"
        meldung: '`m[0]`, `m[1]` und `z` zeigen alle auf **dasselbe** Array. Jede Änderung über einen dieser drei Wege ist auch über die anderen zu sehen.'
      - wert: "[[5, 2, 8], [5, 2, 8], [1, 2, 3]]\ntrue true"
        meldung: '`m[2]` ist ein neues Array mit gleichem Inhalt. `==` vergleicht Verweise, also ist `m[0] == m[2]` falsch.'
hinweise:
  - Zeichne das äußere Array mit Pfeilen. Wie viele verschiedene `int[]` gibt es?
  - Es gibt genau zwei Zeilen-Arrays. Eines davon erreichst du über `z`, `m[0]` und `m[1]`.
loesung: |
  **Ansatz:** Zuerst feststellen, welche Plätze auf welches Array zeigen. Dann die Änderungen in dieses Array eintragen.
  ---
  `z`, `m[0]` und `m[1]` zeigen auf dasselbe Array. `m[2]` zeigt auf ein zweites Array mit gleichem Anfangsinhalt.
  ---
  `m[1][2] = 8` und `z[0] = 5` ändern beide das erste Array. Es wird `{5, 2, 8}`. Das zweite Array bleibt `{1, 2, 3}`.
  ---
  `m[0] == m[1]` ist `true` (derselbe Verweis), `m[0] == m[2]` ist `false` (zwei verschiedene Arrays).
```

```aufgabe
id: zd-ja-trace-tausch
titel: Zeilen tauschen und verfolgen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  int[][] a = {{1}, {2, 2}, {3, 3, 3}};
  int[] tmp = a[0];      // Schritt 1
  a[0] = a[2];           // Schritt 2
  a[2] = tmp;            // Schritt 3
  a[1] = a[0];           // Schritt 4
  ```

  Die Zeilen haben verschiedene Längen. Darum erkennst du an der Länge, welche Zeile gerade an welchem Platz steht.
  Trage nach jedem Schritt die Längen `a[0].length`, `a[1].length` und `a[2].length` ein.
teile:
  - typ: trace
    spalten: ['a[0].length', 'a[1].length', 'a[2].length']
    zeilen: [vorher, nach Schritt 1, nach Schritt 2, nach Schritt 3, nach Schritt 4]
    vorgabe: 1
    loesung: [[1, 2, 3], [1, 2, 3], [3, 2, 3], [3, 2, 1], [3, 3, 1]]
    fehler:
      - wert: ["1", "2", "3", "1", "2", "3", "3", "2", "3", "3", "2", "3", "3", "3", "3"]
        meldung: '`tmp` zeigt weiterhin auf die **alte** Zeile 0 mit der Länge 1. Schritt 2 ändert nur den Platz `a[0]`, nicht `tmp`.'
      - wert: ["1", "2", "3", "1", "2", "3", "3", "2", "1", "3", "2", "1", "3", "3", "1"]
        meldung: Schritt 2 ändert nur den Platz 0. Der Platz 2 zeigt bis Schritt 3 noch auf die Zeile der Länge 3.
hinweise:
  - Schritt 1 ändert das Array nicht, er merkt sich nur einen Verweis.
  - In Schritt 4 zeigen danach zwei Plätze auf dieselbe Zeile.
loesung: |
  **Ansatz:** Jede Zuweisung ändert genau einen Platz des äußeren Arrays. Die Länge zeigt, welche Zeile dort steht.
  ---
  Schritt 1: nichts ändert sich, `tmp` zeigt auf die Zeile der Länge 1. Schritt 2: Platz 0 zeigt auf die Zeile der Länge 3. Platz 2 zeigt immer noch auf dieselbe Zeile.
  ---
  Schritt 3: Platz 2 bekommt `tmp`, also die Zeile der Länge 1. Damit sind die Zeilen 0 und 2 getauscht.
  ---
  Schritt 4: Platz 1 zeigt jetzt ebenfalls auf die Zeile der Länge 3. Die Zeile `{2, 2}` ist über `a` nicht mehr erreichbar.
```

```aufgabe
id: zd-ja-zeilen-abbruch
titel: Wo bricht das Programm ab?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Der Code übersetzt ohne Fehler. Beim Ausführen bricht er aber mit einer Exception ab. Markiere die Zeile, in der
  das passiert.
teile:
  - typ: zeilen
    code: |
      int[][] f = new int[3][];
      f[0] = new int[2];
      f[2] = new int[]{4, 5, 6};
      f[0][1] = 7;
      f[2][2] = f[0][1];
      f[1][0] = 1;
      System.out.println(f[2].length);
    loesung: [6]
    fehler:
      - wert: [1]
        meldung: '`new int[3][]` ist erlaubt. Es legt das äußere Array an, die Zeilen sind zunächst `null`.'
      - wert: [5]
        meldung: '`f[2]` hat drei Elemente mit den Indizes 0 bis 2. `f[2][2]` ist also gültig, und `f[0][1]` wurde vorher gesetzt.'
hinweise:
  - Welche Zeilen von `f` wurden mit `new` oder einem Initialisierer angelegt?
  - Eine Zeile, die nie angelegt wurde, ist `null`.
loesung: |
  **Ansatz:** Für jeden Zugriff prüfen, ob die Zeile existiert und der Index in ihr gültig ist.
  ---
  Angelegt werden nur `f[0]` (Länge 2) und `f[2]` (Länge 3). `f[1]` bleibt `null`.
  ---
  Zeile 6 greift auf `f[1][0]` zu. Über `null` gibt es kein Element, darum folgt eine NullPointerException.
```

```aufgabe
id: zd-ja-code-treppe
titel: Eine Treppe aus Zeilen bauen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 2022 (Dreieck aus Zeilen, addTriangle), umformuliert
angabe: |
  Implementiere `int[][] treppe(int n)`. Die Methode liefert ein neues Array mit `n` Zeilen. Zeile `i` hat die Länge
  `n - i` und enthält die Zahlen von 1 bis `n - i` aufsteigend. Vorbedingung: `n >= 0`.

  ```java
  treppe(3)   // liefert {{1, 2, 3}, {1, 2}, {1}}
  treppe(1)   // liefert {{1}}
  treppe(0)   // liefert {} (ein Array ohne Zeilen)
  ```
teile:
  - typ: code
    vorlage: |
      public class Treppe {
          public static int[][] treppe(int n) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Treppe {
          public static int[][] treppe(int n) {
              int[][] t = new int[n][];
              for (int i = 0; i < n; i++) {
                  t[i] = new int[n - i];
                  for (int j = 0; j < t[i].length; j++) {
                      t[i][j] = j + 1;
                  }
              }
              return t;
          }
      }
    tests:
      - { aufruf: "treppe(3)", erwartet: "new int[][]{{1, 2, 3}, {1, 2}, {1}}" }
      - { aufruf: "treppe(1)", erwartet: "new int[][]{{1}}" }
      - { aufruf: "treppe(0)", erwartet: "new int[][]{}", beschreibung: "n = 0: keine Zeilen" }
      - { aufruf: "treppe(5)", erwartet: "new int[][]{{1, 2, 3, 4, 5}, {1, 2, 3, 4}, {1, 2, 3}, {1, 2}, {1}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Bekommst du eine NullPointerException? `new int[n][]` legt nur das äußere Array an. Jede Zeile brauchst du mit `t[i] = new int[n - i];`." }
hinweise:
  - Lege zuerst das äußere Array mit `new int[n][]` an. Die Zeilenlänge hängt von `i` ab.
  - In Zeile `i` schreibt die innere Schleife an Index `j` die Zahl `j + 1`.
loesung: |
  **Ansatz:** Äußeres Array mit `n` Plätzen, dann jede Zeile mit ihrer eigenen Länge `n - i` anlegen und befüllen.
  ---
  ```java
  int[][] t = new int[n][];
  for (int i = 0; i < n; i++) {
      t[i] = new int[n - i];
      for (int j = 0; j < t[i].length; j++) {
          t[i][j] = j + 1;
      }
  }
  return t;
  ```
  ---
  Für `n = 0` läuft die Schleife nie, und es kommt ein Array ohne Zeilen zurück. Das ist kein Sonderfall im Code, er ergibt sich von selbst.
  ---
  Probe mit `n = 3`: Längen 3, 2, 1, also `{{1, 2, 3}, {1, 2}, {1}}`.
```

```aufgabe
id: zd-ja-code-anzahl
titel: Alle Elemente zählen, auch bei fehlenden Zeilen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `int anzahlElemente(int[][] a)`. Die Methode liefert die Anzahl aller Elemente in `a`. Eine Zeile,
  die `null` ist, zählt als 0 Elemente. Vorbedingung: `a != null`.

  ```java
  anzahlElemente(new int[][]{{1, 2}, {}, {3}})     // liefert 3
  anzahlElemente(new int[][]{{1}, null, {2, 3}})   // liefert 3
  ```
teile:
  - typ: code
    vorlage: |
      public class Zaehlen {
          public static int anzahlElemente(int[][] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Zaehlen {
          public static int anzahlElemente(int[][] a) {
              int anzahl = 0;
              for (int i = 0; i < a.length; i++) {
                  if (a[i] != null) {
                      anzahl += a[i].length;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "anzahlElemente(new int[][]{{1, 2}, {}, {3}})", erwartet: "3", beschreibung: "mit leerer Zeile" }
      - { aufruf: "anzahlElemente(new int[][]{{1}, null, {2, 3}})", erwartet: "3", beschreibung: "mit fehlender Zeile (null)" }
      - { aufruf: "anzahlElemente(new int[][]{})", erwartet: "0", beschreibung: "keine Zeilen" }
      - { aufruf: "anzahlElemente(new int[3][])", erwartet: "0", beschreibung: "nur null-Zeilen", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Eine NullPointerException? Prüfe mit `a[i] != null`, ob die Zeile existiert, bevor du `a[i].length` liest." }
hinweise:
  - Du brauchst keine innere Schleife. Die Länge jeder Zeile steht in `a[i].length`.
  - Lies `a[i].length` nur, wenn `a[i] != null` gilt.
loesung: |
  **Ansatz:** Über die Zeilen laufen und ihre Längen addieren. Fehlende Zeilen überspringen.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < a.length; i++) {
      if (a[i] != null) {
          anzahl += a[i].length;
      }
  }
  return anzahl;
  ```
  ---
  Die Prüfung `a[i] != null` steht **vor** dem Zugriff auf `length`. Leere Zeilen brauchen keine Sonderbehandlung, sie tragen 0 bei.
  ---
  Probe: `{{1}, null, {2, 3}}` ergibt 1 + 0 + 2 = 3.
```

```aufgabe
id: zd-ja-rf-kopie
titel: Ist das eine echte Kopie?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Gegeben ist `int[][] a = {{1, 2}, {3}};`. Beurteile jede Aussage über die Variable `b`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Nach `int[][] b = a;` ändert `b[0][0] = 7` auch `a[0][0]`.'
        richtig: true
        erklaerung: '`b = a` kopiert nur den Verweis auf das äußere Array. Es gibt danach weiterhin nur ein Array.'
      - text: 'Nach `b = new int[2][]; b[0] = a[0]; b[1] = a[1];` ändert `b[0][0] = 7` auch `a[0][0]`.'
        richtig: true
        erklaerung: Das äußere Array ist neu, aber seine Plätze zeigen auf dieselben Zeilen wie die von `a`.
      - text: 'Nach `b = new int[2][]; b[0] = a[0]; b[1] = a[1];` ändert `b[1] = new int[]{9};` auch `a[1]`.'
        richtig: false
        erklaerung: Diese Zuweisung ändert einen Platz im neuen äußeren Array `b`. Der Platz `a[1]` zeigt weiterhin auf `{3}`.
      - text: 'Für eine echte Kopie muss jede Zeile mit `new` neu angelegt und elementweise befüllt werden.'
        richtig: true
        erklaerung: Nur dann teilen `a` und `b` keine Zeile mehr. Änderungen an einem Element wirken dann nur auf eine der beiden Tabellen.
    fehler:
      - wert: [r, f, f, r]
        meldung: 'Ein neues äußeres Array allein trennt die Tabellen nicht. Worauf zeigt `b[0]` nach `b[0] = a[0]`?'
      - wert: [r, r, r, r]
        meldung: 'Unterscheide zwei Arten von Änderung. `b[0][0] = …` ändert ein Element einer Zeile. `b[1] = …` ändert einen Platz im äußeren Array von `b`.'
hinweise:
  - Zeichne `a` und `b` mit Pfeilen auf die Zeilen.
  - Frag bei jeder Zuweisung, ob sie ein Element in einer Zeile oder einen Platz im äußeren Array ändert.
loesung: |
  **Ansatz:** Für jede Variante zeichnen, welche Arrays es gibt und welche Pfeile auf welche Zeile zeigen.
  ---
  Aussage 1: ein einziges Array, zwei Variablen. Aussage 2: zwei äußere Arrays, aber gemeinsame Zeilen.
  ---
  Aussage 3: `b[1] = …` lenkt nur einen Pfeil von `b` um, `a` bleibt unberührt. Aussage 4 beschreibt die tiefe Kopie. Richtig sind 1, 2 und 4.
```

```aufgabe
id: zd-ja-code-gleicheform
titel: Haben zwei Arrays dieselbe Form?
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Eigene Aufgabe nach dem Muster „Dimensionen vergleichen“ (TUWEL-Test 2, 2D-Methoden)
angabe: |
  Implementiere `boolean gleicheForm(int[][] a, int[][] b)`. Die Methode liefert `true`, wenn `a` und `b` gleich viele
  Zeilen haben und jede Zeile von `a` genauso lang ist wie die Zeile von `b` mit demselben Index. Die Werte spielen
  keine Rolle. Vorbedingung: `a != null`, `b != null`, keine Zeile ist `null`.

  ```java
  gleicheForm(new int[][]{{1, 2}, {3}}, new int[][]{{0, 0}, {9}})    // true
  gleicheForm(new int[][]{{1}}, new int[][]{{1}, {2}})              // false
  gleicheForm(new int[][]{{}, {1}}, new int[][]{{}, {2}})           // true
  ```
teile:
  - typ: code
    vorlage: |
      public class Form {
          public static boolean gleicheForm(int[][] a, int[][] b) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Form {
          public static boolean gleicheForm(int[][] a, int[][] b) {
              if (a.length != b.length) {
                  return false;
              }
              for (int i = 0; i < a.length; i++) {
                  if (a[i].length != b[i].length) {
                      return false;
                  }
              }
              return true;
          }
      }
    tests:
      - { aufruf: "gleicheForm(new int[][]{{1, 2}, {3}}, new int[][]{{0, 0}, {9}})", erwartet: "true" }
      - { aufruf: "gleicheForm(new int[][]{{1}}, new int[][]{{1}, {2}})", erwartet: "false", beschreibung: "verschieden viele Zeilen" }
      - { aufruf: "gleicheForm(new int[][]{{1, 2}, {3}}, new int[][]{{1}, {2, 3}})", erwartet: "false", beschreibung: "gleich viele Elemente, andere Verteilung" }
      - { aufruf: "gleicheForm(new int[][]{{}, {1}}, new int[][]{{}, {2}})", erwartet: "true", beschreibung: "mit leeren Zeilen" }
      - { aufruf: "gleicheForm(new int[][]{}, new int[][]{})", erwartet: "true", beschreibung: "beide ohne Zeilen" }
      - { aufruf: "gleicheForm(new int[][]{{1, 2, 3}}, new int[][]{{1, 2}})", erwartet: "false", versteckt: true }
      - { aufruf: "gleicheForm(new int[][]{{5}, {6}}, new int[][]{{5}})", erwartet: "false", beschreibung: "b hat weniger Zeilen", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Vergleiche zuerst die Zeilenzahl. Ohne diese Prüfung vergleicht die Schleife nur die Zeilen von `a` und übersieht, dass `b` mehr Zeilen hat. Hat `b` weniger Zeilen, greift sie sogar auf eine Zeile zu, die es in `b` nicht gibt." }
      - { wert: 3, meldung: "Es genügt nicht, alle Elemente zu zählen. Die Form stimmt nur, wenn **jede einzelne Zeile** gleich lang ist." }
hinweise:
  - Prüfe zuerst `a.length != b.length`. In diesem Fall steht das Ergebnis sofort fest.
  - Danach vergleichst du für jedes `i` die Längen `a[i].length` und `b[i].length`. Beim ersten Unterschied lieferst du `false`.
loesung: |
  **Ansatz:** Zwei Bedingungen: gleiche Zeilenzahl und gleiche Länge jeder einzelnen Zeile. Bei der ersten Abweichung steht `false` fest.
  ---
  ```java
  if (a.length != b.length) {
      return false;
  }
  for (int i = 0; i < a.length; i++) {
      if (a[i].length != b[i].length) {
          return false;
      }
  }
  return true;
  ```
  ---
  Die Prüfung der Zeilenzahl muss **zuerst** kommen. Hätte `b` weniger Zeilen, würde `b[i]` sonst eine `ArrayIndexOutOfBoundsException` auslösen.
  ---
  Probe: `{{1, 2}, {3}}` und `{{1}, {2, 3}}` haben beide 3 Elemente. Die Zeilenlängen 2 und 1 passen aber nicht zu 1 und 2, also `false`.
```

```reflexion
frage: Warum kann man zwei Zeilen verschiedener Länge mit drei Zuweisungen tauschen, aber zwei Spalten nicht?
antwort: |
  Eine Zeile ist ein eigenes Array, und das äußere Array enthält nur Verweise auf die Zeilen. Beim Tausch zweier
  Zeilen werden nur zwei Verweise vertauscht. Die Elemente bleiben, wo sie sind, darum spielt die Länge keine Rolle.
  Eine Spalte ist dagegen kein eigenes Array. Ihre Elemente liegen verteilt in vielen verschiedenen Zeilen. Um zwei
  Spalten zu tauschen, musst du in jeder Zeile zwei Elemente einzeln tauschen. Das braucht eine Schleife über alle
  Zeilen und geht nur, wenn jede Zeile beide Spalten auch hat.
```

## Deklaration und Kapazität mehrdimensionaler Arrays

```aufgabe
id: zd-dk-check-drei-schleifen
titel: Drei Schleifen ineinander
niveau: 1
art: check
angabe: |
  Wie oft wird `zaehler++` ausgeführt? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))

  ```java
  int zaehler = 0;
  for (int i = 0; i < 2; i++) {
      for (int j = 0; j < 3; j++) {
          for (int k = 0; k < 4; k++) {
              zaehler++;
          }
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "2 * 3 * 4"
    fehler:
      - wert: "2 + 3 + 4"
        meldung: Die innere Schleife läuft bei **jedem** Durchlauf der mittleren vollständig, und die mittlere bei jedem Durchlauf der äußeren. Die Anzahlen werden multipliziert.
hinweise:
  - Bei jedem der 2 äußeren Durchläufe läuft die mittlere Schleife 3-mal.
loesung: |
  Für jedes `i` (2 Werte) und jedes `j` (3 Werte) läuft `k` über 4 Werte.
  ---
  Insgesamt 2 · 3 · 4 = 24 Ausführungen.
```

Die Idee „Array von Arrays“ lässt sich weiter treiben. Ein **dreidimensionales** Array ist ein Array von
zweidimensionalen Arrays. Ein Bild aus dem Alltag: In einem Gebäude findest du einen Sitzplatz mit drei Angaben,
nämlich Stockwerk, Reihe und Platz.

```java
int[][][] haus = new int[2][3][4];      // 2 Stockwerke, je 3 Reihen, je 4 Plätze
haus[1][2][3] = 7;                      // Stockwerk 1, Reihe 2, Platz 3
```

- `int[][][]` hat drei Klammerpaare, also drei Indizes.
- `haus.length` ist 2 (Stockwerke), `haus[0].length` ist 3 (Reihen im Stockwerk 0), `haus[0][0].length` ist 4 (Plätze in dieser Reihe).
- `haus[1]` ist ein ganzes Stockwerk vom Typ `int[][]`, `haus[1][2]` eine Reihe vom Typ `int[]`, `haus[1][2][3]` ein einzelnes `int`.

In den vorliegenden EP1-Unterlagen kommen drei Dimensionen vor allem im Quiz vor (TUWEL-Test vom Jänner 2023). Dort
wird gefragt, wie viele Werte eine Deklaration aufnehmen kann und was direkt danach erlaubt ist. Genau das übst du in dieser Lektion.

### Die Kapazität: wie viele Werte passen hinein?

:::definition[Kapazität]
Die **Kapazität** eines Arrays ist die Anzahl der einzelnen Werte des Grundtyps (zum Beispiel `int`), die direkt
nach der Deklaration darin gespeichert werden können, ohne weitere Arrays anzulegen. Sind bei `new` **alle**
Größen angegeben, ist die Kapazität das **Produkt** dieser Größen.
:::

Warum das Produkt? Bei `new int[3][4]` gibt es 3 Zeilen, und **jede** davon hat 4 Plätze. Das sind 4 + 4 + 4 = 3 · 4
= 12 Plätze. Bei drei Dimensionen kommt ein weiterer Faktor dazu.

:::beispiel[Kapazität von drei Deklarationen]
1. `long[][][] x = new long[3][2][2];` legt 3 zweidimensionale Arrays an, jedes mit 2 Zeilen der Länge 2. Kapazität: 3 · 2 · 2 = **12** Werte vom Typ `long`.
2. `int[][][] w = new int[2][3][4];` ergibt 2 · 3 · 4 = **24** Werte.
3. `char[][] leer = new char[4][0];` legt 4 Zeilen an, jede mit der Länge 0. Kapazität: 4 · 0 = **0**. Trotzdem ist `leer.length` gleich 4, denn die 4 (leeren) Zeilen existieren.

**Kein Beispiel** für die Produktregel ist `int[][] t = new int[3][];`. Hier fehlt die zweite Größe. Es gibt das
äußere Array mit 3 Plätzen, aber noch keine Zeile. Die Kapazität ist **0**: Direkt danach kannst du keinen einzigen
`int`-Wert speichern, nur Zeilen anlegen.
:::

### Welche Deklarationen übersetzt der Compiler?

Bei `new` musst du die Größen **von links nach rechts** angeben. Sobald eine Klammer leer bleibt, müssen alle
folgenden ebenfalls leer bleiben. Die erste Klammer darf nie leer sein, sonst wüsste Java nicht, wie groß das äußere
Array werden soll.

```java
int[][] a = new int[3][4];       // erlaubt: alle Größen angegeben
int[][] b = new int[3][];        // erlaubt: nur das äußere Array, Zeilen sind null
int[][][] c = new int[2][3][];   // erlaubt: 2 · 3 Plätze für Zeilen, alle null
int[][] d = new int[][4];        // Fehler: die erste Größe fehlt
int[][][] e = new int[2][][5];   // Fehler: nach einer leeren Klammer folgt eine Größe
```

Dazu kommen drei Regeln zur Schreibweise:

- Die Klammern dürfen auch hinter dem Namen stehen. `int[][] a`, `int a[][]` und `int[] a[]` deklarieren alle dieselbe Variable vom Typ `int[][]`. Üblich und empfohlen ist `int[][] a`.
- Ein Initialisierer `{{1, 2}, {3}}` ohne `new` ist **nur in der Deklaration** erlaubt. Später schreibst du `a = new int[][]{{1, 2}, {3}};`.
- Größe und Initialisierer schließen sich aus. `new int[2][2]{{1, 2}, {3, 4}}` lehnt der Compiler ab, denn die Größe ergibt sich schon aus dem Initialisierer.

:::beispiel[Was ist direkt nach der Deklaration möglich?]
Im Quiz steht zu jeder Deklaration ein Kommentar, der behauptet, was **direkt danach** ohne weitere Anweisungen
möglich ist. Wir prüfen vier solche Kommentare.

1. `long[][][] x = new long[3][2][2]; // x kann 12 Werte speichern.` **Richtig**, 3 · 2 · 2 = 12.
2. `int[][] t = new int[3][]; // t[0][0] = 5; ist möglich.` **Falsch.** `t[0]` ist `null`. Der Zugriff übersetzt zwar, bricht aber mit einer NullPointerException ab.
3. `int[][][] w = new int[2][][]; // w[1] = new int[4][2]; ist möglich.` **Richtig.** `w[1]` ist ein Platz vom Typ `int[][]`, und dort darf ein neues zweidimensionales Array hin.
4. `double[][] m = new double[0][5]; // m hat 5 Zeilen.` **Falsch.** Die erste Größe ist die Zeilenzahl, also hat `m` **0** Zeilen. `m.length` ist 0, und es gibt keinen gültigen Zeilenindex.
:::

```aufgabe
id: zd-dk-gefuehrt
titel: Die Kapazität eines dreidimensionalen Arrays
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie viele `double`-Werte kann `double[][][] messung = new double[2][5][3];` direkt nach der Deklaration aufnehmen?
  Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "2 * 5 * 3"
    fehler:
      - wert: "2 + 5 + 3"
        meldung: Jedes der 2 zweidimensionalen Arrays hat 5 Zeilen, und **jede** Zeile hat 3 Plätze. Die Größen werden multipliziert, nicht addiert.
      - wert: "5 * 3"
        meldung: Das ist die Kapazität **eines** der beiden zweidimensionalen Arrays. Die erste Größe 2 sagt, dass es zwei davon gibt.
gefuehrt:
  - text: Wie viele zweidimensionale Arrays enthält `messung`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`messung.length` ist die erste Größe, also 2.'
  - text: Wie viele Werte fasst eines davon, also zum Beispiel `messung[0]`?
    teil: { typ: zahl, loesung: "5 * 3" }
    erklaerung: '`messung[0]` hat 5 Zeilen mit je 3 Plätzen, also 15 Werte.'
  - text: Wie viele Werte sind es insgesamt?
    teil: { typ: zahl, loesung: "2 * 15" }
    erklaerung: Zwei zweidimensionale Arrays mit je 15 Werten ergeben 30.
hinweise:
  - Zerlege das Array in seine zweidimensionalen Teile und zähle zuerst die Werte eines Teils.
loesung: |
  **Ansatz:** Alle Größen sind angegeben, also ist die Kapazität das Produkt.
  ---
  2 Teile mit je 5 Zeilen zu je 3 Plätzen: 2 · 5 · 3 = 30 Werte.
```

:::merke[Kapazität und gültige Deklarationen]
1. Sind alle Größen angegeben, ist die Kapazität das **Produkt** aller Größen. Eine Größe 0 ergibt Kapazität 0.
2. Bleiben hintere Klammern leer, ist die Kapazität 0. Es entstehen nur Plätze für Arrays, die alle `null` sind.
3. Größen von links nach rechts angeben. Die erste Klammer ist nie leer, nach einer leeren Klammer folgt keine Größe mehr.
4. Initialisierer ohne `new` nur in der Deklaration. Nie Größe und Initialisierer zugleich.
:::

:::achtung[Die Kapazität als Summe gerechnet]
Gefragt ist, wie viele Werte `new int[4][6]` aufnehmen kann. Eine typische falsche Rechnung ist

```
4 + 6 = 10          falsch
```

Die 4 ist die Anzahl der Zeilen, die 6 die Länge **jeder** Zeile. Es sind also 4 Zeilen zu je 6 Plätzen, das ergibt
6 + 6 + 6 + 6 = 4 · 6 = **24**. Bei drei Größen wie `new int[2][3][4]` wird entsprechend 2 · 3 · 4 = 24 gerechnet,
nicht 2 + 3 + 4 = 9.
:::

:::achtung[Nach new int[3][] gleich Werte speichern]
Ein häufiger Irrtum im Quiz:

```java
int[][] t = new int[3][];
t[2][0] = 5;            // übersetzt, bricht aber mit NullPointerException ab
```

Wer `new int[3][]` liest, denkt an „3 Zeilen“. Angelegt ist aber nur das **äußere** Array mit drei Plätzen, und jeder
Platz ist `null`. Direkt möglich sind Zugriffe auf diese Plätze, zum Beispiel `t.length` (3) oder
`t[2] = new int[4];`. Ein Wert wie `t[2][0]` geht erst, nachdem die Zeile 2 angelegt ist.
:::

```aufgabe
id: zd-dk-kapazitaet
titel: Wie viele Werte passen hinein?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie viele `boolean`-Werte kann `boolean[][][] b = new boolean[4][1][6];` direkt nach der Deklaration aufnehmen?
teile:
  - typ: zahl
    loesung: "4 * 1 * 6"
    fehler:
      - wert: "4 + 1 + 6"
        meldung: Die Größen werden multipliziert. Es gibt 4 zweidimensionale Teile, jeder mit 1 Zeile zu 6 Plätzen.
      - wert: "4 * 6 + 1"
        meldung: Die mittlere Größe 1 ist ein Faktor wie die anderen. Ein Faktor 1 ändert das Produkt nicht, er wird aber nicht addiert.
hinweise:
  - Alle drei Größen sind angegeben. Die Kapazität ist das Produkt.
loesung: |
  **Ansatz:** Alle Größen sind angegeben, also gilt die Produktregel.
  ---
  4 · 1 · 6 = 24 Werte.
```

```aufgabe
id: zd-dk-zeilen-compiler
titel: Gültige und ungültige Deklarationen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Markiere **alle** Zeilen, die der Compiler ablehnt. Jede Zeile ist für sich zu beurteilen.
teile:
  - typ: zeilen
    code: |
      int[][] a = new int[2][];
      int[][] b = new int[][2];
      int c[][] = new int[1][1];
      int[] d[] = {{1}, {2, 3}};
      int[][] e; e = {{1}};
      int[][] f = new int[2][2]{{1, 2}, {3, 4}};
      int[][] g = new int[][]{{1}, {}};
    loesung: [2, 5, 6]
    fehler:
      - wert: [2, 4, 5, 6]
        meldung: '`int[] d[]` ist eine erlaubte, wenn auch unübliche Schreibweise für eine Variable vom Typ `int[][]`.'
      - wert: [1, 2, 5, 6]
        meldung: '`new int[2][]` ist erlaubt. Hinten leere Klammern sind in Ordnung, vorne nicht.'
      - wert: [2, 6]
        meldung: 'Ein Initialisierer ohne `new` ist nur direkt in der Deklaration erlaubt. In einer späteren Zuweisung braucht es `new int[][]{{1}}`.'
hinweise:
  - Prüfe jede Zeile gegen die Regeln im Merke-Kasten „Kapazität und gültige Deklarationen“ dieser Lektion.
  - Achte auf die Reihenfolge leerer Klammern und auf Initialisierer außerhalb der Deklaration.
loesung: |
  **Ansatz:** Jede Zeile gegen die Regeln prüfen: Größen von links, Initialisierer nur in der Deklaration, nie Größe und Initialisierer zugleich.
  ---
  Zeile 2: Die erste Größe fehlt. Zeile 5: Initialisierer ohne `new` in einer Zuweisung. Zeile 6: Größe und Initialisierer zugleich.
  ---
  Die Zeilen 1, 3, 4 und 7 sind gültig. In Zeile 7 ist auch die leere Zeile `{}` erlaubt.
```

```aufgabe
id: zd-dk-rf-quiz
titel: Kommentare zu Deklarationen beurteilen
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: Format nach TUWEL-Test 2 (2023), Frage zu mehrdimensionalen Deklarationen, Inhalt neu
angabe: |
  Jedes Code-Fragment enthält eine Deklaration und einen Kommentar. Der Kommentar beschreibt, was **direkt danach**
  ohne weitere Anweisungen möglich ist. Beurteile, ob der Kommentar stimmt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`long[][][] x = new long[2][4][1]; // x kann 8 Werte speichern.`'
        richtig: true
        erklaerung: 2 · 4 · 1 = 8.
      - text: '`int[][] y = new int[3][]; // y[2][0] = 1; ist möglich.`'
        richtig: false
        erklaerung: '`y[2]` ist `null`. Der Zugriff übersetzt, endet aber mit einer NullPointerException.'
      - text: '`char[][] z = new char[0][4]; // z.length ist 4.`'
        richtig: false
        erklaerung: Die erste Größe ist die Zeilenzahl. `z` hat 0 Zeilen, also ist `z.length` gleich 0.
      - text: '`int[][][] w = new int[3][][]; // w[2] = new int[2][5]; ist möglich.`'
        richtig: true
        erklaerung: '`w[2]` ist ein Platz vom Typ `int[][]`. Dort kann ein neues zweidimensionales Array gespeichert werden.'
    fehler:
      - wert: [r, r, f, r]
        meldung: '`new int[3][]` legt keine Zeilen an. Welchen Wert hat `y[2]` direkt nach der Deklaration?'
      - wert: [r, f, r, r]
        meldung: 'Bei `new char[0][4]` ist die **erste** Größe die Zeilenzahl. Die 4 wäre die Länge jeder Zeile, aber es gibt keine Zeile.'
hinweise:
  - Bestimme für jede Deklaration, welche Arrays wirklich angelegt werden und welche Plätze `null` sind.
  - '`length` des äußeren Arrays ist immer die erste Größe.'
loesung: |
  **Ansatz:** Für jede Deklaration feststellen, welche Arrays existieren. Dann prüfen, ob der Zugriff im Kommentar ein existierendes Array trifft.
  ---
  Fragment 1: alle Größen gegeben, 2 · 4 · 1 = 8. Fragment 2: Zeilen sind `null`.
  ---
  Fragment 3: 0 Zeilen. Fragment 4: `w[2]` ist ein Platz für ein `int[][]`. Richtig sind 1 und 4.
```

```aufgabe
id: zd-dk-ausgabe-3d
titel: Längen in drei Dimensionen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][][] w = new int[2][3][4];
      w[1][2][3] = 7;
      w[0][1] = new int[]{5, 6};
      System.out.println(w.length + " " + w[0].length + " " + w[0][0].length);
      System.out.println(w[0][1].length + " " + w[1][1].length);
      System.out.println(w[1][2][3] + w[0][1][1]);
    loesung: |
      2 3 4
      2 4
      13
    fehler:
      - wert: "2 3 4\n4 4\n13"
        meldung: '`w[0][1] = new int[]{5, 6};` ersetzt die Reihe `w[0][1]` durch ein neues Array mit **zwei** Elementen. Auch in drei Dimensionen sind die innersten Arrays eigene Arrays.'
      - wert: "4 3 2\n2 4\n13"
        meldung: '`w.length` ist die **erste** Größe, also 2. Danach folgen `w[0].length` (3) und `w[0][0].length` (4).'
hinweise:
  - Jede Ebene hat ihr eigenes `length`. Von außen nach innen sind das die Größen 2, 3 und 4.
  - Eine Zuweisung an `w[0][1]` ersetzt eine ganze Reihe.
loesung: |
  **Ansatz:** Ebene für Ebene lesen: `w` hat 2 Teile, jeder Teil 3 Reihen, jede Reihe 4 Plätze.
  ---
  Erste Zeile: `2 3 4`. Danach wird `w[0][1]` durch `{5, 6}` ersetzt. Diese Reihe hat Länge 2, die Reihe `w[1][1]` weiterhin Länge 4.
  ---
  `w[1][2][3]` ist 7 und `w[0][1][1]` ist 6. Beide sind `int`, also ergibt die Summe 13.
```

```aufgabe
id: zd-dk-auswahl-string
titel: Zeilen da, Strings nicht
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Was passiert bei diesen beiden Zeilen?

  ```java
  String[][] s = new String[2][3];
  System.out.println(s[1][2].length());
  ```
teile:
  - typ: auswahl
    optionen:
      - Das Programm bricht mit einer NullPointerException ab, weil `s[1][2]` den Wert `null` hat.
      - Es wird `0` ausgegeben, weil das Element ein leerer String ist.
      - Es wird `3` ausgegeben, weil die Zeile 1 drei Elemente hat.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Standardwert für `String` ist `null`, nicht der leere String. Auf `null` kann man keine Methode wie `length()` aufrufen.
      - wert: 2
        meldung: '`s[1][2].length()` ist die Länge des **Strings** im Element, nicht die Länge der Zeile. Die Länge der Zeile wäre `s[1].length`.'
hinweise:
  - Bei `new String[2][3]` existieren die Zeilen. Was steht in jedem einzelnen Element?
  - '`String` ist ein Referenztyp wie ein Array. Welchen Standardwert haben Referenztypen nach `new`?'
loesung: |
  **Ansatz:** Beide Größen sind angegeben, also existieren alle Zeilen. Die Elemente haben den Standardwert für `String`.
  ---
  Dieser Standardwert ist `null`. `s[1][2].length()` ruft eine Methode über `null` auf und führt zur NullPointerException.
  ---
  Anders als bei `new int[2][]` liegt das Problem hier nicht an einer fehlenden Zeile, sondern am fehlenden String im Element. Erst nach `s[1][2] = "abc";` wäre `s[1][2].length()` gleich 3.
```

```aufgabe
id: zd-dk-anzahl-arrays
titel: Wie viele Arrays entstehen?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Jedes Array, auch jede einzelne Zeile, ist ein eigenes Objekt. Wie viele Array-Objekte legt
  `int[][][] w = new int[2][3][4];` insgesamt an?
teile:
  - typ: zahl
    loesung: "1 + 2 + 2 * 3"
    fehler:
      - wert: "2 * 3 * 4"
        meldung: 24 ist die Kapazität, also die Anzahl der `int`-Werte. Gefragt ist die Anzahl der **Arrays**, die diese Werte enthalten.
      - wert: "3"
        meldung: Drei ist die Zahl der Dimensionen. Auf jeder Ebene entstehen aber mehrere Arrays, zum Beispiel 6 Reihen auf der innersten Ebene.
      - wert: "2 + 2 * 3"
        meldung: Auch das äußerste Array, auf das `w` zeigt, ist ein Array-Objekt. Es zählt mit.
hinweise:
  - Zähle Ebene für Ebene. Ganz außen gibt es genau ein Array.
  - Dieses äußere Array hat 2 Plätze, und jeder zeigt auf ein `int[][]`. Jedes davon hat 3 Plätze für Reihen.
loesung: |
  **Ansatz:** Von außen nach innen zählen, wie viele Arrays auf jeder Ebene entstehen.
  ---
  Ebene 1: das äußere Array (1). Ebene 2: zwei zweidimensionale Teile (2). Ebene 3: in jedem Teil 3 Reihen, also 2 · 3 = 6.
  ---
  Zusammen 1 + 2 + 6 = 9 Array-Objekte. Sie enthalten zusammen die 24 `int`-Werte.
```

```aufgabe
id: zd-dk-rf-warum
titel: Warum diese Regeln?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Beurteile jede Begründung.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`new int[][4]` ist verboten, weil Java beim Anlegen wissen muss, wie viele Plätze das äußere Array bekommt.'
        richtig: true
        erklaerung: Das äußere Array wird zuerst angelegt. Ohne seine Größe kann Java es nicht anlegen. Die Zeilen können dagegen später folgen.
      - text: '`new int[3][]` ist erlaubt, weil Java die Zeilenlänge automatisch aus der ersten Zuweisung bestimmt.'
        richtig: false
        erklaerung: Java bestimmt dabei keine Länge. Die Zeilen bleiben `null`, bis du jede einzelne mit `new` anlegst. Jede kann eine andere Länge haben.
      - text: '`new int[2][3]` und `{{0, 0, 0}, {0, 0, 0}}` erzeugen Arrays mit gleichem Inhalt und gleicher Form.'
        richtig: true
        erklaerung: Beide haben 2 Zeilen zu je 3 Elementen, und alle Elemente sind 0.
      - text: 'Die Kapazität von `new int[5][0]` ist 5, weil es 5 Zeilen gibt.'
        richtig: false
        erklaerung: Die 5 Zeilen haben die Länge 0. Es gibt also keinen einzigen Platz für einen `int`-Wert, die Kapazität ist 5 · 0 = 0.
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Woher sollte Java nach `new int[3][]` eine Zeilenlänge kennen? Prüfe, welchen Wert `t[0]` direkt danach hat.'
      - wert: [r, f, r, r]
        meldung: Die Kapazität zählt Plätze für Werte, nicht Zeilen. Wie viele Plätze hat eine Zeile der Länge 0?
hinweise:
  - Überlege, in welcher Reihenfolge Java die Arrays anlegt.
  - Zeilen und Plätze für Werte sind zwei verschiedene Dinge.
loesung: |
  **Ansatz:** Für jede Aussage das Speicherbild zeichnen, also eine Skizze mit Kästchen für die Arrays und Pfeilen für die Verweise: zuerst das äußere Array, dann die Zeilen.
  ---
  Aussage 1 stimmt: Das äußere Array braucht seine Größe sofort. Aussage 2 ist falsch: Nach `new int[3][]` sind die Zeilen `null`.
  ---
  Aussage 3 stimmt. Aussage 4 ist falsch: 5 · 0 = 0. Richtig sind 1 und 3.
```

```aufgabe
id: zd-dk-code-werte
titel: Die Kapazität eines beliebigen dreidimensionalen Arrays
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Eigene Aufgabe zur Kapazität (TUWEL-Test 2, 2023), als Methode umgesetzt
angabe: |
  Implementiere `int kapazitaet(int[][][] w)`. Die Methode liefert, wie viele `int`-Werte in `w` gespeichert werden
  können, ohne neue Arrays anzulegen. Dabei darf auf **jeder** Ebene ein Platz `null` sein. Er trägt dann nichts bei.
  Vorbedingung: `w != null`.

  ```java
  kapazitaet(new int[2][3][4])   // liefert 24
  kapazitaet(new int[3][][])     // liefert 0, alle Teile sind null
  kapazitaet(new int[2][2][])    // liefert 0, alle Reihen sind null
  ```
teile:
  - typ: code
    vorlage: |
      public class Kapazitaet {
          public static int kapazitaet(int[][][] w) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Kapazitaet {
          public static int kapazitaet(int[][][] w) {
              int summe = 0;
              for (int i = 0; i < w.length; i++) {
                  if (w[i] != null) {
                      for (int j = 0; j < w[i].length; j++) {
                          if (w[i][j] != null) {
                              summe += w[i][j].length;
                          }
                      }
                  }
              }
              return summe;
          }
      }
    tests:
      - { aufruf: "kapazitaet(new int[2][3][4])", erwartet: "24" }
      - { aufruf: "kapazitaet(new int[3][][])", erwartet: "0", beschreibung: "alle zweidimensionalen Teile sind null" }
      - { aufruf: "kapazitaet(new int[2][2][])", erwartet: "0", beschreibung: "alle Reihen sind null" }
      - { aufruf: "kapazitaet(new int[][][]{{{1, 2}, null, {}}, null, {{3}}})", erwartet: "3", beschreibung: "gemischt mit null und leeren Reihen" }
      - { aufruf: "kapazitaet(new int[][][]{})", erwartet: "0", versteckt: true }
      - { aufruf: "kapazitaet(new int[][][]{{{1, 2, 3}, {4}}, {{5, 6}}})", erwartet: "6", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Eine NullPointerException? Prüfe `w[i] != null`, bevor du `w[i].length` liest." }
      - { wert: 3, meldung: "Auch die Reihen `w[i][j]` können `null` sein. Prüfe sie, bevor du ihre Länge addierst." }
hinweise:
  - Du brauchst zwei Schleifen. Die innerste Ebene zählst du nicht Element für Element, sondern über ihre Länge.
  - Prüfe auf zwei Ebenen auf `null`, nämlich bei `w[i]` und bei `w[i][j]`.
loesung: |
  **Ansatz:** Die Kapazität ist die Summe der Längen aller innersten Arrays. Fehlende Arrays tragen nichts bei.
  ---
  ```java
  int summe = 0;
  for (int i = 0; i < w.length; i++) {
      if (w[i] != null) {
          for (int j = 0; j < w[i].length; j++) {
              if (w[i][j] != null) {
                  summe += w[i][j].length;
              }
          }
      }
  }
  return summe;
  ```
  ---
  Für `new int[2][3][4]` addiert die Methode sechsmal die Länge 4 und liefert 24. Das ist die Produktregel, nur Schritt für Schritt gezählt.
  ---
  Bei `new int[2][2][]` sind alle vier Reihen `null`, also bleibt die Summe 0. Das passt zur Regel „leere hintere Klammer heißt Kapazität 0“.
```

## Neue Arrays erzeugen (Muster M1)

```aufgabe
id: zd-m1-check-rueckgabe
titel: Eine Methode liefert ein Array
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Quadrate {
          public static int[] quadrate(int n) {
              int[] q = new int[n];
              for (int i = 0; i < n; i++) {
                  q[i] = (i + 1) * (i + 1);
              }
              return q;
          }

          public static void main(String[] args) {
              System.out.println(Arrays.toString(quadrate(4)));
          }
      }
    loesung: |
      [1, 4, 9, 16]
    fehler:
      - wert: "[0, 1, 4, 9]"
        meldung: An Index `i` steht `(i + 1) · (i + 1)`. Für `i = 0` ist das 1, nicht 0.
hinweise:
  - Die Methode legt ein neues Array an, befüllt es und gibt den Verweis darauf zurück.
loesung: |
  `quadrate(4)` legt ein Array mit 4 Plätzen an. An Index `i` steht `(i + 1)²`.
  ---
  Das ergibt 1, 4, 9 und 16. `main` gibt das zurückgegebene Array mit `Arrays.toString` aus.
```

In allen vorliegenden Programmiertest-Angaben lautet die erste Methode sinngemäß so: „**liefert ein neues Array zurück**, das …“. Das ist
das **Muster M1**. Die Methode bekommt Zahlen oder ein Array als Eingabe, baut daraus ein **neues**
zweidimensionales Array und gibt es mit `return` zurück. Das Eingabe-Array bleibt dabei unverändert.

Die Schwierigkeit liegt selten in der Schleife selbst. Sie liegt darin, **vorher** zu wissen, wie groß das Ergebnis
wird. Ein Array kann in Java nach dem Anlegen nicht wachsen. Darum gehst du immer in derselben Reihenfolge vor:

:::merke[Das M1-Rezept]
1. **Form bestimmen:** Wie viele Zeilen hat das Ergebnis? Wie lang ist jede Zeile? Manchmal brauchst du dafür einen eigenen Durchlauf, zum Beispiel um die längste Zeile der Eingabe zu finden.
2. **Äußeres Array anlegen:** `int[][] r = new int[zeilen][];` oder, wenn alle Zeilen gleich lang sind, gleich `new int[zeilen][spalten]`.
3. **Jede Zeile anlegen und befüllen:** `r[i] = new int[laenge];`, dann die Werte mit einer inneren Schleife eintragen.
4. **Zurückgeben:** `return r;`. Nichts ausgeben, denn die Ausgabe macht `main`.
:::

### Zahlenmuster: die Formel aus der Tabelle

Viele Aufgaben auf Blatt 4 und 5 geben nur Beispiele vor: „`erzeuge(4)` erzeugt diese Tabelle“. Dann musst du die
**Formel** finden, die aus Zeilenindex `i` und Spaltenindex `j` den Wert macht. Der sicherste Weg ist, die Indizes
neben die Tabelle zu schreiben und zu vergleichen.

:::beispiel[Der Abstand zur Diagonalen]
Gesucht ist `int[][] abstand(int n)`. Für `n = 4` soll entstehen:

```
        j=0  j=1  j=2  j=3
i=0      0    1    2    3
i=1      1    0    1    2
i=2      2    1    0    1
i=3      3    2    1    0
```

**Muster finden:** Auf der Diagonalen (`i == j`) steht 0. In Zeile 0 wächst der Wert mit `j`, in Spalte 0 wächst er
mit `i`. Es sieht aus wie der Unterschied zwischen `i` und `j`. Probe an zwei Stellen: `[1][3]` ist 2, und 3 − 1 = 2.
`[3][1]` ist ebenfalls 2, und 1 − 3 = −2. Der Wert ist also der **Betrag** des Unterschieds, `Math.abs(i - j)`.

```java
public static int[][] abstand(int n) {
    int[][] r = new int[n][n];                  // Form: n Zeilen, n Spalten
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            r[i][j] = Math.abs(i - j);          // Formel aus der Tabelle
        }
    }
    return r;
}
```

- Alle Zeilen sind gleich lang. Darum genügt `new int[n][n]`, und Schritt 3 des Rezepts besteht nur noch aus dem Befüllen.
- `Math.abs` liefert den Betrag einer Zahl, also die Zahl ohne Vorzeichen. Die Klasse `Math` ist im Programmiertest erlaubt.
- `abstand(4)` liefert genau die Tabelle aus der Angabe. Probe an einer weiteren Stelle: `r[0][3] = |0 − 3| = 3`.
:::

```aufgabe
id: zd-m1-gefuehrt
titel: Das kleine Einmaleins als Tabelle
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  `einmaleins(n)` soll eine `n × n`-Tabelle liefern. In Zeile `i`, Spalte `j` steht das Produkt `(i + 1) · (j + 1)`.
  Für `n = 3` entsteht `{{1, 2, 3}, {2, 4, 6}, {3, 6, 9}}`. Ergänze die Lücken. Löse die Aufgabe zuerst geführt.
teile:
  - typ: lueckentext
    code: |
      public class Einmaleins {
          public static int[][] einmaleins(int n) {
              int[][] r = new int___;
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < n; j++) {
                      r[i][j] = ___;
                  }
              }
              return ___;
          }
      }
    luecken: [["[n][n]"], ["(i + 1) * (j + 1)", "(j + 1) * (i + 1)"], ["r"]]
    fehler:
      - wert: ["[n][n]", "i * j", "r"]
        meldung: 'Die Indizes beginnen bei 0, die Faktoren bei 1. Mit `i * j` stünde in der ganzen ersten Zeile 0.'
      - wert: ["[n][]", "(i + 1) * (j + 1)", "r"]
        meldung: 'Mit `new int[n][]` sind alle Zeilen `null`. Hier sind alle Zeilen gleich lang, also kannst du gleich `[n][n]` schreiben.'
gefuehrt:
  - text: Wie viele Zeilen und Spalten hat das Ergebnis für `n = 3`?
    teil:
      typ: auswahl
      optionen: ['3 Zeilen und 3 Spalten', '3 Zeilen, Länge der Zeilen unbekannt', '9 Zeilen mit je 1 Spalte']
      richtig: [0]
    erklaerung: Eine `n × n`-Tabelle hat `n` Zeilen und `n` Spalten. Alle Zeilen sind gleich lang.
  - text: Welcher Wert steht in Zeile 2, Spalte 1?
    teil: { typ: zahl, loesung: "(2 + 1) * (1 + 1)" }
    erklaerung: '`(2 + 1) · (1 + 1) = 3 · 2 = 6`. Das passt zur Angabe: Die letzte Zeile ist `{3, 6, 9}`.'
  - text: Was gibt die Methode am Ende zurück?
    teil:
      typ: auswahl
      optionen: ['den Verweis `r` auf das neue Array', 'nichts, weil `void`', 'die Ausgabe von `Arrays.deepToString(r)`']
      richtig: [0]
    erklaerung: Der Rückgabetyp ist `int[][]`. Die Methode liefert den Verweis auf das neu angelegte Array.
hinweise:
  - Arbeite das M1-Rezept ab. Form, Anlegen, Befüllen, Zurückgeben.
loesung: |
  **Ansatz:** Alle Zeilen sind gleich lang, also `new int[n][n]`. Der Wert hängt von beiden Indizes ab.
  ---
  Lücken: `[n][n]`, `(i + 1) * (j + 1)` und `r`.
```

```aufgabe
id: zd-m1-auswahl-formel
titel: Welche Formel passt zur Tabelle?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Eine Methode erzeugt für 3 Zeilen und 4 Spalten diese Tabelle:

  ```
  1 2 3 4
  2 3 4 5
  3 4 5 6
  ```

  Welche Zuweisung erzeugt sie, wenn `i` der Zeilen- und `j` der Spaltenindex ist?
teile:
  - typ: auswahl
    optionen: ['`r[i][j] = i + j + 1;`', '`r[i][j] = i * j + 1;`', '`r[i][j] = (i + 1) * (j + 1);`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe Zeile 1, Spalte 3: `1 · 3 + 1 = 4`, in der Tabelle steht aber 5.'
      - wert: 2
        meldung: 'Prüfe Zeile 2, Spalte 3: `3 · 4 = 12`, in der Tabelle steht 6. Die Werte wachsen in jeder Richtung nur um 1.'
hinweise:
  - Prüfe jede Formel an zwei Stellen, am besten an `[0][0]` und rechts unten an `[2][3]`.
loesung: |
  **Ansatz:** Jede Formel an Stichproben prüfen. Eine richtige Formel muss an **jeder** Stelle stimmen.
  ---
  `i + j + 1` liefert `[0][0] = 1`, `[1][3] = 5` und `[2][3] = 6`. Das passt. Die anderen Formeln scheitern spätestens rechts unten.
```

### Ein Array aus einem anderen Array bauen

Wird das neue Array aus einem Eingabe-Array gebaut, kommt eine zweite Schwierigkeit dazu: Die Zeilen der Eingabe
dürfen **nicht** einfach übernommen werden. Die Angaben verlangen dann ausdrücklich eine Kopie, zum Beispiel mit den
Worten „elementweise kopiert“. Das Ergebnis soll also eigene Zeilen haben. In `main` kannst du das selbst prüfen:
`result[0] == input[0]` muss `false` liefern.

:::beispiel[Jede Zeile doppelt]
Gesucht ist `int[][] verdoppeln(int[][] input)`. Jede Zeile der Eingabe soll im Ergebnis **zweimal hintereinander**
stehen, beide Male als eigene Kopie. Aus `{{1, 2}, {3}}` wird `{{1, 2}, {1, 2}, {3}, {3}}`.

```java
public static int[][] verdoppeln(int[][] input) {
    int[][] r = new int[2 * input.length][];              // Form: doppelt so viele Zeilen
    for (int i = 0; i < input.length; i++) {
        for (int k = 0; k < 2; k++) {                     // zwei Kopien
            int[] zeile = new int[input[i].length];       // eigene Zeile anlegen
            for (int j = 0; j < input[i].length; j++) {
                zeile[j] = input[i][j];                   // Element für Element kopieren
            }
            r[2 * i + k] = zeile;                         // an die richtige Stelle setzen
        }
    }
    return r;
}
```

- **Form:** Das Ergebnis hat `2 * input.length` Zeilen. Die Länge jeder Zeile hängt von der Eingabe ab, darum bleibt die zweite Klammer leer.
- **Indexumrechnung:** Die Eingabezeile `i` landet an den Plätzen `2 * i` und `2 * i + 1`. Für `i = 0` sind das 0 und 1, für `i = 1` sind das 2 und 3. Diese Umrechnung ist der Kern der Aufgabe. Probiere sie immer an `i = 0` und `i = 1` aus.
- **Kopie:** Für jede der zwei Kopien wird mit `new int[…]` eine eigene Zeile angelegt und Element für Element befüllt. Danach sind `r[0]`, `r[1]` und `input[0]` drei verschiedene Arrays.
- **Randfall:** Für `{}` (keine Zeilen) entsteht `new int[0][]`, also wieder ein Array ohne Zeilen. Für `{{}}` entstehen zwei leere Zeilen `{{}, {}}`.
:::

:::achtung[Die Indexumrechnung vergessen]
Jemand schreibt im Beispiel „Jede Zeile doppelt“ statt `r[2 * i + k]` einfach

```java
r[i + k] = zeile;                 // falsch
```

Für `{{1, 2}, {3}}` passiert Folgendes. Bei `i = 0` werden die Plätze 0 und 1 mit `{1, 2}` belegt. Bei `i = 1`
überschreibt die erste Kopie von `{3}` den Platz 1, die zweite landet auf Platz 2. Platz 3 bleibt `null`. Ergebnis:

```
[[1, 2], [3], [3], null]          statt   [[1, 2], [1, 2], [3], [3]]
```

Schreib dir für jede Eingabezeile auf, auf welche Plätze im Ergebnis sie gehört, und lies die Formel daraus ab.
:::

:::achtung[Die Zeile der Eingabe übernommen statt kopiert]
Viele schreiben beim Kopieren einer Zeile

```java
r[i] = input[i];                  // falsch, wenn eine Kopie verlangt ist
```

Das Ergebnis sieht in `deepToString` richtig aus. Aber `r[i]` und `input[i]` sind **dieselbe** Zeile. Ein
Testfall in `main` wie `result[0] == test1[0]` deckt das auf. Erwartet ist `false`, und diese Lösung liefert `true`.
Schlimmer noch: Ändert später eine M2-Methode `test1`, ändert sie unbemerkt auch das Ergebnis mit. Richtig ist eine
neue Zeile `new int[input[i].length]` mit einer Kopierschleife.
:::

```aufgabe
id: zd-m1-ausgabe-muster
titel: Was liefert die Methode?
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Muster {
          public static int[][] muster(int n) {
              int[][] r = new int[n][n];
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < n; j++) {
                      r[i][j] = i * n + j + 1;
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(Arrays.deepToString(muster(3)));
              System.out.println(Arrays.deepToString(muster(1)));
          }
      }
    loesung: |
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
      [[1]]
    fehler:
      - wert: "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n[[1]]"
        meldung: 'In Zeile 0 ist `i = 0`, also stehen dort `j + 1`, das heißt 1, 2, 3. Die Zahlen laufen zeilenweise, nicht spaltenweise.'
      - wert: "[[0, 1, 2], [3, 4, 5], [6, 7, 8]]\n[[0]]"
        meldung: Am Ende der Formel steht `+ 1`. Der erste Wert ist also 1, nicht 0.
hinweise:
  - 'Setze für Zeile 1 ein: `1 * 3 + j + 1`.'
loesung: |
  **Ansatz:** Die Formel `i * n + j + 1` zählt die Plätze zeilenweise durch, beginnend bei 1.
  ---
  Für `n = 3`: Zeile 0 ergibt 1, 2, 3. Zeile 1 ergibt 4, 5, 6. Zeile 2 ergibt 7, 8, 9. Für `n = 1` gibt es nur `r[0][0] = 1`.
```

```aufgabe
id: zd-m1-ausgabe-laengen
titel: Zeilen nach vorgegebenen Längen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Laengen {
          public static int[][] baue(int[] laengen) {
              int[][] r = new int[laengen.length][];
              for (int i = 0; i < laengen.length; i++) {
                  r[i] = new int[laengen[i]];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = i;
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              int[][] a = baue(new int[]{3, 0, 2});
              System.out.println(Arrays.deepToString(a));
              System.out.println(a.length + " " + a[1].length);
          }
      }
    loesung: |
      [[0, 0, 0], [], [2, 2]]
      3 0
    fehler:
      - wert: "[[0, 1, 2], [], [0, 1]]\n3 0"
        meldung: In jede Zeile wird `i` geschrieben, also der **Zeilenindex**. Alle Werte einer Zeile sind gleich.
      - wert: "[[0, 0, 0], null, [2, 2]]\n3 0"
        meldung: '`new int[0]` legt eine leere Zeile an, nicht `null`. `deepToString` zeigt sie als `[]`.'
hinweise:
  - '`laengen[i]` bestimmt die Länge der Zeile `i`. Eine Länge 0 ergibt eine leere Zeile.'
  - In jedes Element der Zeile `i` wird der Wert `i` geschrieben.
loesung: |
  **Ansatz:** Für jede Zeile Länge und Inhalt bestimmen.
  ---
  Zeile 0: Länge 3, Werte 0. Zeile 1: Länge 0, also leer. Zeile 2: Länge 2, Werte 2.
  ---
  `a.length` ist 3, und die leere Zeile hat die Länge 0.
```

```aufgabe
id: zd-m1-code-zickzack
titel: Zahlen im Zickzack
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: nach Aufgabenblatt 4 WS2023, Aufgabe 5a (Array nach Zahlenmuster befüllen), anderes Muster
angabe: |
  Implementiere `int[][] zickzack(int zeilen, int spalten)`. Die Methode liefert ein neues Array mit `zeilen` Zeilen
  und `spalten` Spalten. Es enthält die Zahlen von 1 bis `zeilen · spalten`. Zeilen mit **geradem** Index werden von
  links nach rechts befüllt, Zeilen mit **ungeradem** Index von rechts nach links. Vorbedingung: `zeilen > 0`,
  `spalten > 0`.

  ```java
  zickzack(3, 4)  // liefert {{1, 2, 3, 4}, {8, 7, 6, 5}, {9, 10, 11, 12}}
  zickzack(2, 1)  // liefert {{1}, {2}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Zickzack {
          public static int[][] zickzack(int zeilen, int spalten) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Zickzack {
          public static int[][] zickzack(int zeilen, int spalten) {
              int[][] r = new int[zeilen][spalten];
              int zahl = 1;
              for (int i = 0; i < zeilen; i++) {
                  for (int j = 0; j < spalten; j++) {
                      if (i % 2 == 0) {
                          r[i][j] = zahl;
                      } else {
                          r[i][spalten - 1 - j] = zahl;
                      }
                      zahl++;
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "zickzack(3, 4)", erwartet: "new int[][]{{1, 2, 3, 4}, {8, 7, 6, 5}, {9, 10, 11, 12}}" }
      - { aufruf: "zickzack(2, 1)", erwartet: "new int[][]{{1}, {2}}", beschreibung: "nur eine Spalte" }
      - { aufruf: "zickzack(1, 3)", erwartet: "new int[][]{{1, 2, 3}}", beschreibung: "nur eine Zeile" }
      - { aufruf: "zickzack(4, 2)", erwartet: "new int[][]{{1, 2}, {4, 3}, {5, 6}, {8, 7}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Steht in Zeile 1 `{5, 6, 7, 8}`? In Zeilen mit ungeradem Index läuft die Zahl von rechts nach links. Der Spaltenindex ist dann `spalten - 1 - j`." }
hinweise:
  - Zähle eine Variable `zahl` von 1 an hoch. Sie wächst bei jedem Element um 1, egal in welcher Richtung die Zeile läuft.
  - In ungeraden Zeilen gehört die `j`-te Zahl an die Stelle `spalten - 1 - j`.
loesung: |
  **Ansatz:** Alle Zeilen sind gleich lang, also `new int[zeilen][spalten]`. Eine fortlaufende Zahl wird je nach Zeile vorwärts oder rückwärts eingetragen.
  ---
  ```java
  int[][] r = new int[zeilen][spalten];
  int zahl = 1;
  for (int i = 0; i < zeilen; i++) {
      for (int j = 0; j < spalten; j++) {
          if (i % 2 == 0) r[i][j] = zahl;
          else r[i][spalten - 1 - j] = zahl;
          zahl++;
      }
  }
  return r;
  ```
  ---
  Für ungerade `i` wird von rechts befüllt: `j = 0` landet bei `spalten - 1`, `j = 1` bei `spalten - 2` und so weiter. Das ist die Spiegelung aus [12.4 Neue Arrays bauen: kopieren, umdrehen, filtern, einfügen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen).
  ---
  Probe mit `zickzack(3, 4)`: Zeile 1 bekommt 5 bis 8 von rechts, also `{8, 7, 6, 5}`.
```

```aufgabe
id: zd-m1-code-kopie
titel: Eine tiefe Kopie ohne clone
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Einschränkung aller Programmiertests (kein clone, kein System.arraycopy); Test auf gemeinsame Zeilen nach Einstufungstest K3 WS2021
angabe: |
  Implementiere `int[][] tiefeKopie(int[][] a)`. Die Methode liefert ein neues Array mit demselben Inhalt wie `a`.
  Dabei darf **keine** Zeile mit `a` geteilt werden. `clone`, `System.arraycopy` und `Arrays.copyOf` sind verboten.
  Vorbedingung: `a != null`, keine Zeile ist `null`.
teile:
  - typ: code
    vorlage: |
      public class Kopie {
          public static int[][] tiefeKopie(int[][] a) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Kopie {
          public static int[][] tiefeKopie(int[][] a) {
              int[][] r = new int[a.length][];
              for (int i = 0; i < a.length; i++) {
                  r[i] = new int[a[i].length];
                  for (int j = 0; j < a[i].length; j++) {
                      r[i][j] = a[i][j];
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "tiefeKopie(new int[][]{{1, 2}, {3}, {}})", erwartet: "new int[][]{{1, 2}, {3}, {}}", beschreibung: "gleicher Inhalt" }
      - { vorher: "int[][] a = {{1, 2}, {3}}; int[][] r = tiefeKopie(a);", aufruf: "r != a", erwartet: "true", beschreibung: "neues äußeres Array" }
      - { vorher: "int[][] a = {{1, 2}, {3}}; int[][] r = tiefeKopie(a);", aufruf: "r[0] != a[0] && r[1] != a[1]", erwartet: "true", beschreibung: "keine gemeinsame Zeile" }
      - { vorher: "int[][] a = {{1, 2}, {3}}; int[][] r = tiefeKopie(a); r[0][0] = 9;", aufruf: "a[0][0]", erwartet: "1", beschreibung: "Änderung der Kopie lässt das Original unverändert" }
      - { aufruf: "tiefeKopie(new int[][]{})", erwartet: "new int[][]{}", beschreibung: "keine Zeilen", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 3, meldung: "Teilen sich Kopie und Original eine Zeile? `r[i] = a[i]` kopiert nur den Verweis. Lege jede Zeile mit `new int[a[i].length]` neu an." }
      - { wert: "keineArrayKopie", meldung: "`clone` und `System.arraycopy` sind wie im Programmiertest verboten. Kopiere Element für Element mit einer Schleife." }
hinweise:
  - Das äußere Array legst du mit `new int[a.length][]` an.
  - Jede Zeile braucht ein eigenes `new int[a[i].length]` und eine Schleife, die die Elemente überträgt.
loesung: |
  **Ansatz:** M1-Rezept. Die Form ist die von `a`, und jede Zeile wird neu angelegt.
  ---
  ```java
  int[][] r = new int[a.length][];
  for (int i = 0; i < a.length; i++) {
      r[i] = new int[a[i].length];
      for (int j = 0; j < a[i].length; j++) {
          r[i][j] = a[i][j];
      }
  }
  return r;
  ```
  ---
  Danach gilt `r != a` und `r[i] != a[i]` für jede Zeile. Eine Änderung an `r` lässt `a` unverändert.
  ---
  Leere Zeilen und ein Array ohne Zeilen brauchen keinen Sonderfall. Die Schleifen laufen dann 0-mal.
```

```aufgabe
id: zd-m1-code-balken
titel: Ein Balkendiagramm aus Zeichen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: nach Ad-hoc-Aufgabe 18 (Säulendiagramm, 2017W), als char-Array umgesetzt
angabe: |
  Implementiere `char[][] balken(int[] werte)`. Die Methode liefert ein neues Array mit einer Zeile pro Wert. Zeile
  `i` besteht aus genau `werte[i]` Zeichen `'#'`. Ein Wert 0 ergibt eine leere Zeile. Vorbedingung: `werte != null`,
  alle Werte sind `>= 0`.

  ```java
  balken(new int[]{2, 0, 3})   // liefert {{'#', '#'}, {}, {'#', '#', '#'}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Balken {
          public static char[][] balken(int[] werte) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Balken {
          public static char[][] balken(int[] werte) {
              char[][] r = new char[werte.length][];
              for (int i = 0; i < werte.length; i++) {
                  r[i] = new char[werte[i]];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = '#';
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "balken(new int[]{2, 0, 3})", erwartet: "new char[][]{{'#', '#'}, {}, {'#', '#', '#'}}" }
      - { aufruf: "balken(new int[]{1})", erwartet: "new char[][]{{'#'}}" }
      - { aufruf: "balken(new int[]{})", erwartet: "new char[][]{}", beschreibung: "keine Werte" }
      - { aufruf: "balken(new int[]{0, 0})", erwartet: "new char[][]{{}, {}}", beschreibung: "nur leere Zeilen", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Ein `char[]` nach `new` ist mit dem Zeichen der Nummer 0 gefüllt, nicht mit `'#'`. Du musst jedes Element selbst setzen." }
hinweise:
  - Die Länge der Zeile `i` ist `werte[i]`.
  - Ein `char`-Literal steht in einfachen Anführungszeichen, also `'#'`.
loesung: |
  **Ansatz:** M1-Rezept. Die Zeilenzahl ist `werte.length`, die Länge jeder Zeile steht in `werte[i]`.
  ---
  ```java
  char[][] r = new char[werte.length][];
  for (int i = 0; i < werte.length; i++) {
      r[i] = new char[werte[i]];
      for (int j = 0; j < r[i].length; j++) {
          r[i][j] = '#';
      }
  }
  return r;
  ```
  ---
  Ein Wert 0 ergibt `new char[0]`, also eine leere Zeile. Die innere Schleife läuft dann 0-mal.
  ---
  Probe: `{2, 0, 3}` ergibt Zeilen der Längen 2, 0 und 3, alle mit `'#'` gefüllt.
```

```aufgabe
id: zd-m1-zeilen-abbruch
titel: Warum bricht diese M1-Lösung ab?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll eine Kopie liefern, in der jede Zeile so lang ist wie die längste Zeile der Eingabe. Fehlende
  Plätze sollen 0 bleiben. Beim Aufruf mit `{{1, 2}, {3}}` bricht sie mit einer NullPointerException ab. Markiere die
  Zeile, in der die Exception entsteht.
teile:
  - typ: zeilen
    code: |
      public static int[][] rechteck(int[][] a) {
          int max = 0;
          for (int i = 0; i < a.length; i++) {
              if (a[i].length > max) max = a[i].length;
          }
          int[][] r = new int[a.length][];
          for (int i = 0; i < a.length; i++) {
              for (int j = 0; j < a[i].length; j++) {
                  r[i][j] = a[i][j];
              }
          }
          return r;
      }
    loesung: [9]
    fehler:
      - wert: [6]
        meldung: '`new int[a.length][]` ist erlaubt und wirft nichts. Es legt nur die Zeilen nicht an. Die Exception entsteht erst beim ersten Zugriff auf eine Zeile.'
      - wert: [4]
        meldung: '`a[i]` ist in der Eingabe nie `null`. Das Bestimmen des Maximums läuft fehlerfrei.'
hinweise:
  - Welche Zeilen von `r` existieren nach Zeile 6?
  - Eine Exception entsteht dort, wo zum ersten Mal über `null` zugegriffen wird.
loesung: |
  **Ansatz:** Nach Zeile 6 hat `r` zwei Plätze, beide `null`. Gesucht ist der erste Zugriff über einen solchen Platz.
  ---
  Zeile 9 schreibt `r[i][j]`. Für `i = 0` ist `r[0]` noch `null`, also folgt die NullPointerException.
  ---
  Reparatur: Zeile 6 zu `new int[a.length][max]` ändern. Dann haben alle Zeilen die Länge `max` und sind mit 0 gefüllt, genau wie verlangt.
```

```aufgabe
id: zd-m1-rf-testfaelle
titel: Was prüft main im Programmiertest?
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: nach den Testtabellen der Programmiertests 2021/2022 (Aufruf und Ausgabe in main)
angabe: |
  Angenommen, in einer Programmiertest-Angabe steht `int[][] test1 = {{5, 6}, {7}};`, und du sollst eine M1-Methode
  `int[][] erweitere(int[][] input)` testen, die ein neues Array zurückgibt. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`System.out.println(Arrays.deepToString(erweitere(test1)));` ist ein passender Testfall.'
        richtig: true
        erklaerung: '`deepToString` zeigt den Inhalt jeder Zeile. So vergleichst du mit der Ausgabe in der Testtabelle.'
      - text: '`System.out.println(erweitere(test1));` zeigt den Inhalt des Ergebnisses.'
        richtig: false
        erklaerung: '`println` gibt bei einem Array nur eine Kennung wie `[[I@…` aus, nicht den Inhalt.'
      - text: 'Mit `int[][] result1 = erweitere(test1); System.out.println(result1[0] == test1[0]);` prüfst du, ob die Methode eine Zeile mit der Eingabe teilt.'
        richtig: true
        erklaerung: '`==` vergleicht Verweise. `false` heißt: Die Zeile wurde wirklich kopiert.'
      - text: Ausgaben mit `System.out.println` gehören in die Methode `erweitere`, damit man das Ergebnis sieht.
        richtig: false
        erklaerung: Die Angaben verlangen ausdrücklich, dass Ausgaben nur in `main` stehen. Die Methode liefert ihr Ergebnis mit `return`.
    fehler:
      - wert: [r, r, r, f]
        meldung: Was gibt `println` bei einem Array aus? Probiere es gedanklich mit einem `int[]` aus [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen).
      - wert: [r, f, f, f]
        meldung: '`==` zwischen zwei Zeilen ist kein Inhaltsvergleich, sondern genau der Test, ob es dieselbe Zeile ist.'
hinweise:
  - Unterscheide Ausgabe des Inhalts, Ausgabe einer Kennung und Vergleich von Verweisen.
  - Lies noch einmal, wo laut Angabe Ausgaben stehen dürfen.
loesung: |
  **Ansatz:** Für jeden Testfall fragen, was er wirklich ausgibt oder prüft.
  ---
  `deepToString` zeigt den Inhalt, `println` allein nur eine Kennung. `result1[0] == test1[0]` prüft, ob eine Zeile geteilt wird.
  ---
  Ausgaben gehören nur in `main`. Richtig sind die Aussagen 1 und 3.
```

```aufgabe
id: zd-m1-code-rechteck
titel: Auf Rechteckform auffüllen
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: nach Programmiertest 2022-02-10 (getRectangular), Regel für das Auffüllen geändert
angabe: |
  Implementiere `int[][] aufRechteck(int[][] input)`. Die Methode liefert ein neues Array mit so vielen Zeilen wie
  `input`. Jede Zeile ist so lang wie die **längste** Zeile von `input`. Zuerst werden die Werte der Zeile kopiert.
  Die übrigen Plätze bekommen den **letzten Wert** dieser Zeile. Eine leere Zeile wird mit Nullen gefüllt. Das
  Eingabe-Array bleibt unverändert, und keine Zeile wird geteilt. Vorbedingung: `input != null`, `input.length > 0`,
  keine Zeile ist `null`.

  ```java
  aufRechteck(new int[][]{{6}, {2, 8, 3}, {7, 1}, {}})
  // liefert {{6, 6, 6}, {2, 8, 3}, {7, 1, 1}, {0, 0, 0}}
  aufRechteck(new int[][]{{}, {}})   // liefert {{}, {}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Rechteck {
          public static int[][] aufRechteck(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Rechteck {
          public static int[][] aufRechteck(int[][] input) {
              int max = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i].length > max) {
                      max = input[i].length;
                  }
              }
              int[][] r = new int[input.length][max];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  for (int j = 0; j < max; j++) {
                      if (j < n) {
                          r[i][j] = input[i][j];
                      } else if (n > 0) {
                          r[i][j] = input[i][n - 1];
                      }
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "aufRechteck(new int[][]{{6}, {2, 8, 3}, {7, 1}, {}})", erwartet: "new int[][]{{6, 6, 6}, {2, 8, 3}, {7, 1, 1}, {0, 0, 0}}" }
      - { aufruf: "aufRechteck(new int[][]{{}, {}})", erwartet: "new int[][]{{}, {}}", beschreibung: "nur leere Zeilen" }
      - { aufruf: "aufRechteck(new int[][]{{1, 2}, {3, 4}})", erwartet: "new int[][]{{1, 2}, {3, 4}}", beschreibung: "schon rechteckig" }
      - { vorher: "int[][] t = {{1, 2}, {3, 4}}; int[][] r = aufRechteck(t);", aufruf: "r[0] != t[0] && r[1] != t[1]", erwartet: "true", beschreibung: "keine Zeile geteilt, auch wenn sie schon die richtige Länge hat" }
      - { vorher: "int[][] t = {{2}, {6, 1, 0}}; aufRechteck(t);", aufruf: "t", erwartet: "new int[][]{{2}, {6, 1, 0}}", beschreibung: "Eingabe bleibt unverändert" }
      - { aufruf: "aufRechteck(new int[][]{{-1, 3}, {9}, {4, 4, 4, 4}})", erwartet: "new int[][]{{-1, 3, 3, 3}, {9, 9, 9, 9}, {4, 4, 4, 4}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Stimmt die Zeilenlänge? Bestimme zuerst in einem eigenen Durchlauf die längste Zeile. Die Nullen in der leeren Zeile entstehen von selbst, wenn du für leere Zeilen nichts einträgst." }
      - { wert: 2, meldung: "Bei lauter leeren Zeilen ist die längste Länge 0. Greifst du auf `input[i][n - 1]` zu, obwohl `n` 0 ist?" }
      - { wert: 4, meldung: "Eine Zeile, die schon lang genug ist, darf trotzdem nicht übernommen werden. Kopiere sie in eine neue Zeile." }
hinweise:
  - Bestimme im ersten Durchlauf die größte Zeilenlänge `max`. Danach legst du `new int[input.length][max]` an.
  - 'Für jede Zeile mit Länge `n` und jede Spalte `j < max`: Ist `j < n`, wird kopiert. Sonst kommt `input[i][n - 1]`, aber nur wenn `n > 0`.'
loesung: |
  **Ansatz:** M1-Rezept mit zwei Durchläufen. Der erste bestimmt die Form, der zweite befüllt.
  ---
  Form: `max` ist die größte Zeilenlänge. Weil alle Ergebniszeilen gleich lang sind, legt `new int[input.length][max]` alle Zeilen auf einmal an, gefüllt mit 0.
  ---
  ```java
  for (int i = 0; i < input.length; i++) {
      int n = input[i].length;
      for (int j = 0; j < max; j++) {
          if (j < n) {
              r[i][j] = input[i][j];
          } else if (n > 0) {
              r[i][j] = input[i][n - 1];
          }
      }
  }
  ```
  ---
  Bei einer leeren Zeile (`n = 0`) wird nichts eingetragen. Die Nullen stammen vom Standardwert. Der Zugriff `input[i][n - 1]` wäre dort `input[i][-1]` und würde eine Exception auslösen.
  ---
  Probe: `{7, 1}` mit `max = 3` ergibt `7, 1` und dann den letzten Wert 1, also `{7, 1, 1}`.
```

```reflexion
frage: Warum bestimmt man bei M1-Aufgaben zuerst die Form des Ergebnisses, bevor man irgendeinen Wert einträgt?
antwort: |
  Ein Array hat in Java eine feste Länge, die beim Anlegen mit `new` festgelegt wird. Es kann danach nicht mehr
  wachsen. Wer mit dem Eintragen beginnt, bevor er die Länge kennt, legt das Array zu klein an und bekommt eine
  ArrayIndexOutOfBoundsException, oder zu groß und hat Plätze mit falschen Standardwerten. Darum berechnet man zuerst
  die Zeilenzahl und die Länge jeder Zeile. Oft braucht man dafür einen eigenen Durchlauf, etwa um die längste Zeile
  zu finden. Erst danach legt man das Array an und befüllt es.
```

## Arrays an Ort und Stelle verändern (Muster M2)

```aufgabe
id: zd-m2-check-parameter
titel: Den Parameter neu zuweisen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Neu {
          public static void ersetze(int[] feld) {
              feld[0] = 7;
              feld = new int[]{0, 0};
              feld[1] = 9;
          }

          public static void main(String[] args) {
              int[] w = {1, 2};
              ersetze(w);
              System.out.println(Arrays.toString(w));
          }
      }
    loesung: |
      [7, 2]
    fehler:
      - wert: "[0, 9]"
        meldung: '`feld = new int[]{0, 0};` lässt nur den Parameter `feld` auf ein neues Array zeigen. `w` in `main` zeigt weiterhin auf das alte Array.'
      - wert: "[1, 2]"
        meldung: Die erste Zeile `feld[0] = 7` ändert noch das Array, auf das auch `w` zeigt. Diese Änderung bleibt sichtbar.
hinweise:
  - Bis zur Neuzuweisung zeigen `feld` und `w` auf dasselbe Array.
loesung: |
  `feld[0] = 7` ändert das gemeinsame Array. Danach zeigt `feld` auf ein neues Array, und `feld[1] = 9` ändert nur dieses.
  ---
  `w` zeigt weiter auf das erste Array, also `[7, 2]`.
```

Im Programmiertest lautet die zweite Methode meist: „`void …(int[][] input)` **verändert** das Array …“ oder „ändert
das angegebene Array so, dass …“. Das ist das **Muster M2**. Die Methode gibt nichts zurück. Trotzdem soll `main`
nach dem Aufruf das veränderte Array sehen. Wie geht das?

Beim Aufruf bekommt der Parameter eine **Kopie des Verweises**. Der Parameter `a` in der Methode und die Variable
`test` in `main` zeigen also auf **dasselbe äußere Array** und damit auf dieselben Zeilen:

```
main:    test ──┐
                ▼
             [ • , • ]  ──►  die Zeilen
                ▲
methode:    a ──┘
```

Daraus folgen drei Regeln. Sie sind der Kern dieser Lektion.

1. **Ein Element ändern**, also `a[i][j] = …`, ist für `main` sichtbar. Die Zeile gehört beiden.
2. **Eine Zeile ersetzen**, also `a[i] = new int[…]`, ist für `main` ebenfalls sichtbar. Geändert wird ein Platz im äußeren Array, und das gehört beiden. So kann eine `void`-Methode Zeilen verlängern, kürzen, tauschen und umordnen.
3. **Den Parameter neu zuweisen**, also `a = …`, ist für `main` **nicht** sichtbar. Danach zeigt nur noch die Variable `a` der Methode woandershin. `test` in `main` zeigt weiter auf das alte Array.

:::beispiel[Werte ändern und Zeilen kürzen]
```java
public static void verdoppeln(int[][] a) {
    for (int i = 0; i < a.length; i++) {
        for (int j = 0; j < a[i].length; j++) {
            a[i][j] = 2 * a[i][j];                  // Regel 1: Element ändern
        }
    }
}

public static void kuerze(int[][] a, int laenge) {
    for (int i = 0; i < a.length; i++) {
        if (a[i].length > laenge) {
            int[] neu = new int[laenge];            // kürzere Zeile anlegen
            for (int j = 0; j < laenge; j++) {
                neu[j] = a[i][j];                   // vordere Elemente kopieren
            }
            a[i] = neu;                             // Regel 2: Zeile ersetzen
        }
    }
}
```

In `main` steht:

```java
int[][] t = {{1, 2, 3, 4}, {5}, {6, 7, 8}};
verdoppeln(t);
System.out.println(Arrays.deepToString(t));     // [[2, 4, 6, 8], [10], [12, 14, 16]]
kuerze(t, 2);
System.out.println(Arrays.deepToString(t));     // [[2, 4], [10], [12, 14]]
```

- `verdoppeln` schreibt jeden neuen Wert direkt in die vorhandene Zeile. `main` sieht die verdoppelten Werte, obwohl die Methode nichts zurückgibt.
- `kuerze` kann eine Zeile nicht „kürzer machen“, denn die Länge eines Arrays ist fest. Stattdessen legt die Methode eine neue, kürzere Zeile an, kopiert die vorderen Elemente und setzt sie mit `a[i] = neu` an den Platz der alten.
- Die Zeile `{10}` ist nicht länger als 2 und bleibt unverändert. Das `if` verhindert, dass eine kurze Zeile „gekürzt“ und dabei verlängert wird.
:::

```aufgabe
id: zd-m2-gefuehrt
titel: Was sieht main nach dem Aufruf?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt, Zeile für Zeile der Methode.
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Sichtbar {
          public static void aendere(int[][] a) {
              a[0][0] = 9;
              a[1] = new int[]{7, 7, 7};
              a = new int[][]{{0}};
              a[0][0] = 5;
          }

          public static void main(String[] args) {
              int[][] t = {{1, 2}, {3}};
              aendere(t);
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[9, 2], [7, 7, 7]]
    fehler:
      - wert: "[[5]]"
        meldung: '`a = new int[][]{{0}}` lässt nur den Parameter auf ein neues Array zeigen. `t` in `main` zeigt weiterhin auf das alte Array.'
      - wert: "[[9, 2], [3]]"
        meldung: '`a[1] = …` ändert einen Platz im äußeren Array, und dieses Array gehört auch `main`. Die neue Zeile ist darum sichtbar.'
gefuehrt:
  - text: Sieht `main` die Änderung `a[0][0] = 9`?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: Regel 1. Das Element gehört zu einer Zeile, auf die auch `t` zeigt.
  - text: Sieht `main` die Änderung `a[1] = new int[]{7, 7, 7}`?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: Regel 2. Der Platz 1 des gemeinsamen äußeren Arrays zeigt jetzt auf die neue Zeile.
  - text: Sieht `main` die beiden letzten Zeilen der Methode?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [1]
    erklaerung: Regel 3. Nach `a = …` zeigt nur noch `a` auf das neue Array. `a[0][0] = 5` ändert dieses neue Array, nicht `t`.
hinweise:
  - Prüfe für jede Zeile der Methode, ob sie ein Element, einen Platz im äußeren Array oder die Variable `a` selbst ändert.
loesung: |
  **Ansatz:** Jede Anweisung einer der drei Regeln zuordnen.
  ---
  `a[0][0] = 9` und `a[1] = …` ändern das gemeinsame Array. Danach ist `t` gleich `{{9, 2}, {7, 7, 7}}`.
  ---
  `a = …` und alles danach betrifft nur das neue Array der Methode. Ausgabe `[[9, 2], [7, 7, 7]]`.
```

:::achtung[Den Parameter neu zugewiesen]
Eine Studentin soll in `void verdopple(int[][] a)` jeden Wert verdoppeln. Sie baut ein neues Array und schreibt am
Ende

```java
int[][] neu = new int[a.length][];
for (int i = 0; i < a.length; i++) {
    neu[i] = new int[a[i].length];
    for (int j = 0; j < a[i].length; j++) {
        neu[i][j] = 2 * a[i][j];
    }
}
a = neu;                              // falsch: main sieht davon nichts
```

Mit `int[][] t = {{1, 2}, {3}};` und `verdopple(t);` gibt `main` danach `[[1, 2], [3]]` aus, also das unveränderte
Array. Die letzte Zeile ändert nur die Variable `a` der Methode. Richtig ist, direkt in die Zeilen von `a` zu schreiben
(`a[i][j] = 2 * a[i][j];`) oder jede neue Zeile mit `a[i] = neu[i];` an ihren Platz zu setzen.
:::

```aufgabe
id: zd-m2-auswahl-unsichtbar
titel: Welche Änderung bleibt unsichtbar?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  `main` ruft `m(t)` mit `int[][] t = {{4, 4}, {5}};` auf. Welcher Rumpf von `void m(int[][] a)` lässt `t` in `main`
  **unverändert**?
teile:
  - typ: auswahl
    optionen:
      - '`a = new int[][]{{1}};`'
      - '`a[0][0] = 1;`'
      - '`a[1] = new int[]{1};`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`a[0][0]` ist ein Element einer Zeile, auf die auch `t` zeigt. Diese Änderung sieht `main`.'
      - wert: 2
        meldung: '`a[1]` ist ein Platz im äußeren Array. `a` und `t` zeigen auf dasselbe äußere Array, also sieht `main` die neue Zeile.'
hinweise:
  - Nur eine der drei Anweisungen ändert gar nichts am gemeinsamen Array.
loesung: |
  **Ansatz:** Für jeden Rumpf fragen, ob er das gemeinsame Array ändert oder nur die Variable `a`.
  ---
  `a = …` ändert nur die Variable `a` der Methode. Das äußere Array von `main` und seine Zeilen bleiben, wie sie sind.
```

### Zeilen umordnen

Zeilen umordnen heißt **Verweise umordnen**. Du verschiebst keine Elemente, sondern nur die Pfeile im äußeren
Array. Das Werkzeug dafür ist der Tausch mit einer Hilfsvariable vom Typ `int[]` aus
[14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays).

:::beispiel[Die Reihenfolge der Zeilen umdrehen]
```java
public static void spiegeln(int[][] a) {
    for (int i = 0; i < a.length / 2; i++) {
        int[] tmp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = tmp;
    }
}
```

Mit `int[][] t = {{1}, {2, 2}, {3, 3, 3}, {4}};` und `spiegeln(t);` wird `t` zu `[[4], [3, 3, 3], [2, 2], [1]]`.

- In jedem Durchlauf tauscht die Methode die Zeile `i` von vorne mit ihrem Gegenstück `a.length - 1 - i` von hinten. Bei 4 Zeilen sind das die Paare (0, 3) und (1, 2).
- Die Schleife läuft nur bis zur **Mitte**, also `i < a.length / 2`. Bei 4 Zeilen sind das 2 Durchläufe. Bei 5 Zeilen ist `5 / 2` gleich 2 (Ganzzahldivision), und die mittlere Zeile 2 bleibt an ihrem Platz. Genau dort gehört sie hin.
- Die Zeilen haben verschiedene Längen. Das stört nicht, denn getauscht werden nur Verweise.
:::

:::achtung[Bis zum Ende statt bis zur Mitte getauscht]
Jemand schreibt im Beispiel „Die Reihenfolge der Zeilen umdrehen“ als Schleifenkopf

```java
for (int i = 0; i < a.length; i++) {         // falsch: läuft über die Mitte hinaus
```

Bei 4 Zeilen tauscht der Durchlauf `i = 0` die Paare (0, 3), `i = 1` das Paar (1, 2). Dann folgt `i = 2` und tauscht
(2, 1) **zurück**, und `i = 3` tauscht (3, 0) zurück. Am Ende ist das Array genau wie vorher: `[[1], [2, 2], [3, 3, 3],
[4]]`. Jedes Paar wird zweimal getauscht. Die Grenze muss `a.length / 2` sein.
:::

```aufgabe
id: zd-m2-ausgabe-paare
titel: Nachbarzeilen paarweise tauschen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Paare {
          public static void tauschePaare(int[][] a) {
              for (int i = 0; i + 1 < a.length; i += 2) {
                  int[] tmp = a[i];
                  a[i] = a[i + 1];
                  a[i + 1] = tmp;
              }
          }

          public static void main(String[] args) {
              int[][] t = {{1}, {2, 2}, {3}, {4, 4}, {5}};
              tauschePaare(t);
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[2, 2], [1], [4, 4], [3], [5]]
    fehler:
      - wert: "[[2, 2], [3], [4, 4], [5], [1]]"
        meldung: '`i` wächst um 2. Getauscht werden nur die Paare (0, 1) und (2, 3). Die erste Zeile wandert nicht bis ans Ende.'
      - wert: "[[2, 2], [2, 2], [4, 4], [4, 4], [5]]"
        meldung: 'So sähe es aus, wenn man ohne `tmp` tauscht. Hier merkt sich `tmp` die alte Zeile `a[i]`, bevor `a[i] = a[i + 1]` den Platz überschreibt. Die Zuweisung ändert nur den Platz, nicht `tmp`. Darum landet die alte Zeile danach an Platz `i + 1`.'
hinweise:
  - Schreib die Werte von `i` auf. Für welche `i` ist `i + 1 < 5`?
  - Jeder Durchlauf tauscht die Zeile `i` mit der Zeile direkt darunter.
loesung: |
  **Ansatz:** Werte von `i` bestimmen, dann für jedes `i` die Zeilen `i` und `i + 1` tauschen.
  ---
  `i` nimmt 0 und 2 an. Bei `i = 4` ist `4 + 1 < 5` falsch, die Schleife endet.
  ---
  Getauscht werden (0, 1) und (2, 3). Die Zeile `{5}` bleibt am Ende. Ergebnis `[[2, 2], [1], [4, 4], [3], [5]]`.
```

```aufgabe
id: zd-m2-luecke-anhaengen
titel: An jede Zeile einen Wert anhängen
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  `haengeAn(a, wert)` soll an **jede** Zeile von `a` den Wert `wert` hinten anhängen. Aus `{{1, 2}, {}}` wird mit
  `wert = 0` also `{{1, 2, 0}, {0}}`. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Anhaengen {
          public static void haengeAn(int[][] a, int wert) {
              for (int i = 0; i < a.length; i++) {
                  int[] neu = new int[___];
                  for (int j = 0; j < a[i].length; j++) {
                      neu[j] = a[i][j];
                  }
                  neu[___] = wert;
                  a[i] = ___;
              }
          }
      }
    luecken: [["a[i].length + 1"], ["a[i].length", "neu.length - 1"], ["neu"]]
    fehler:
      - wert: ["a[i].length", "a[i].length", "neu"]
        meldung: Die neue Zeile muss **einen Platz mehr** haben als die alte. Sonst ist der Index `a[i].length` außerhalb und es folgt eine Exception.
      - wert: ["a[i].length + 1", "a[i].length + 1", "neu"]
        meldung: 'Der letzte gültige Index der neuen Zeile ist ihre Länge minus 1, also `a[i].length`.'
hinweise:
  - Eine Zeile kann nicht wachsen. Lege eine um 1 längere Zeile an und setze sie an den alten Platz.
loesung: |
  **Ansatz:** Regel 2. Neue, längere Zeile anlegen, alte Werte kopieren, den neuen Wert ans Ende, dann `a[i] = neu`.
  ---
  Lücken: `a[i].length + 1`, `a[i].length` und `neu`. Für eine leere Zeile entsteht `{wert}`.
```

```aufgabe
id: zd-m2-code-zeilen-umdrehen
titel: Jede Zeile umdrehen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: nach den Probetests 2023 (reorder) und dem Muster „jede Zeile umdrehen“
angabe: |
  Implementiere `void jedeZeileUmdrehen(int[][] a)`. Die Methode dreht in jeder Zeile die Reihenfolge der Elemente
  um. Sie legt dafür **keine neuen Zeilen** an, sondern tauscht die Elemente innerhalb der vorhandenen Zeile.
  Vorbedingung: `a != null`, keine Zeile ist `null`.

  ```java
  int[][] t = {{1, 2, 3}, {4, 5}, {}, {6}};
  jedeZeileUmdrehen(t);   // t ist danach {{3, 2, 1}, {5, 4}, {}, {6}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Umdrehen {
          public static void jedeZeileUmdrehen(int[][] a) {
              // TODO
          }
      }
    musterloesung: |
      public class Umdrehen {
          public static void jedeZeileUmdrehen(int[][] a) {
              for (int i = 0; i < a.length; i++) {
                  int n = a[i].length;
                  for (int j = 0; j < n / 2; j++) {
                      int tmp = a[i][j];
                      a[i][j] = a[i][n - 1 - j];
                      a[i][n - 1 - j] = tmp;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] t = {{1, 2, 3}, {4, 5}, {}, {6}};", aufruf: "jedeZeileUmdrehen(t)", ergebnis: "t", erwartet: "new int[][]{{3, 2, 1}, {5, 4}, {}, {6}}" }
      - { vorher: "int[][] t = {{7, 8, 9, 10}};", aufruf: "jedeZeileUmdrehen(t)", ergebnis: "t", erwartet: "new int[][]{{10, 9, 8, 7}}", beschreibung: "gerade Länge" }
      - { vorher: "int[][] t = {{1, 2}}; int[] z = t[0]; jedeZeileUmdrehen(t);", aufruf: "t[0] == z", erwartet: "true", beschreibung: "die Zeile bleibt dasselbe Array" }
      - { vorher: "int[][] t = {};", aufruf: "jedeZeileUmdrehen(t)", ergebnis: "t", erwartet: "new int[][]{}", beschreibung: "keine Zeilen", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Bleibt jede Zeile unverändert? Dann läuft die innere Schleife bis zum Ende und tauscht jedes Paar zweimal. Die Grenze ist die Mitte, `n / 2`." }
      - { wert: 3, meldung: "Die Aufgabe verlangt, die vorhandene Zeile umzubauen. Tausche die Elemente innerhalb von `a[i]`, statt eine neue Zeile anzulegen." }
hinweise:
  - Tausche in Zeile `i` das Element `j` mit dem Element `n - 1 - j`, wobei `n` die Länge der Zeile ist.
  - Die innere Schleife läuft nur bis zur Mitte der Zeile, sonst wird jedes Paar zurückgetauscht.
loesung: |
  **Ansatz:** Für jede Zeile die Spiegelung aus [12.4 Neue Arrays bauen: kopieren, umdrehen, filtern, einfügen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen). Paare von außen nach innen tauschen, bis zur Mitte.
  ---
  ```java
  for (int i = 0; i < a.length; i++) {
      int n = a[i].length;
      for (int j = 0; j < n / 2; j++) {
          int tmp = a[i][j];
          a[i][j] = a[i][n - 1 - j];
          a[i][n - 1 - j] = tmp;
      }
  }
  ```
  ---
  Bei ungerader Länge bleibt das mittlere Element stehen. Leere Zeilen und Zeilen der Länge 1 brauchen keinen Sonderfall, die innere Schleife läuft dann 0-mal.
  ---
  Probe: `{1, 2, 3}` hat `n / 2 = 1` Tausch, nämlich 1 mit 3. Ergebnis `{3, 2, 1}`.
```

```aufgabe
id: zd-m2-code-nach-unten
titel: Alle Zeilen eine Stelle nach unten
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Aufgabenblatt 5 WS2021 (shiftLinesInArray), Richtung umgekehrt
angabe: |
  Implementiere `void nachUnten(int[][] a)`. Jede Zeile rückt um einen Platz nach unten, und die bisher letzte Zeile
  wird die erste. Die Zeilen werden dabei nur verschoben, nicht kopiert. Vorbedingung: `a != null`, `a.length > 0`.

  ```java
  int[][] t = {{1}, {2, 2}, {3, 3, 3}};
  nachUnten(t);   // t ist danach {{3, 3, 3}, {1}, {2, 2}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Verschieben {
          public static void nachUnten(int[][] a) {
              // TODO
          }
      }
    musterloesung: |
      public class Verschieben {
          public static void nachUnten(int[][] a) {
              int[] letzte = a[a.length - 1];
              for (int i = a.length - 1; i > 0; i--) {
                  a[i] = a[i - 1];
              }
              a[0] = letzte;
          }
      }
    tests:
      - { vorher: "int[][] t = {{1}, {2, 2}, {3, 3, 3}};", aufruf: "nachUnten(t)", ergebnis: "t", erwartet: "new int[][]{{3, 3, 3}, {1}, {2, 2}}" }
      - { vorher: "int[][] t = {{5, 6}};", aufruf: "nachUnten(t)", ergebnis: "t", erwartet: "new int[][]{{5, 6}}", beschreibung: "nur eine Zeile" }
      - { vorher: "int[][] t = {{1}, {2}}; int[] z = t[1]; nachUnten(t);", aufruf: "t[0] == z", erwartet: "true", beschreibung: "Zeilen werden verschoben, nicht kopiert" }
      - { vorher: "int[][] t = {{1}, {}, {3}, {4, 4}};", aufruf: "nachUnten(t)", ergebnis: "t", erwartet: "new int[][]{{4, 4}, {1}, {}, {3}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Stehen am Ende lauter gleiche Zeilen? Wenn du von oben nach unten verschiebst, überschreibst du jede Zeile, bevor sie weitergereicht wird. Laufe von unten nach oben und merke dir die letzte Zeile vorher." }
hinweise:
  - Merke dir zuerst die letzte Zeile in einer Variable vom Typ `int[]`. Sie würde sonst überschrieben.
  - Verschiebe dann von **unten nach oben** mit `a[i] = a[i - 1]` und setze zum Schluss die gemerkte Zeile auf Platz 0.
loesung: |
  **Ansatz:** Verweise im Kreis verschieben: Jede Zeile rückt einen Platz weiter, und die letzte kommt nach vorne. Die letzte Zeile wird darum zuerst gesichert.
  ---
  ```java
  int[] letzte = a[a.length - 1];
  for (int i = a.length - 1; i > 0; i--) {
      a[i] = a[i - 1];
  }
  a[0] = letzte;
  ```
  ---
  Die Schleife läuft **rückwärts**. Liefe sie vorwärts, würde `a[1] = a[0]` die alte Zeile 1 verlieren, bevor sie nach Platz 2 kommt.
  ---
  Probe mit drei Zeilen: `letzte` ist `{3, 3, 3}`. Dann `a[2] = a[1]`, `a[1] = a[0]`, zum Schluss `a[0] = letzte`.
```

### Zeilen kürzen: ein Element entfernen

Soll aus einer Zeile ein Element verschwinden, gilt dasselbe wie beim Verlängern: Die Zeile wird durch eine neue,
kürzere ersetzt. Beim Kopieren musst du dann zwei Indizes auseinanderhalten. `j` zählt in der alten Zeile, und ein
zweiter Index `k` zählt in der neuen. An der entfernten Stelle wächst nur `j`.

```aufgabe
id: zd-m2-code-spalte-streichen
titel: Eine Spalte streichen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: nach Programmiertest 2022-02-10 (removeEntry), umformuliert
angabe: |
  Implementiere `void streicheSpalte(int[][] a, int spalte)`. Aus jeder Zeile, die ein Element mit dem Index
  `spalte` hat, wird genau dieses Element entfernt. Die Zeile wird dadurch um 1 kürzer. Zeilen, die zu kurz sind,
  bleiben unverändert. Vorbedingung: `a != null`, keine Zeile ist `null`, `spalte >= 0`.

  ```java
  int[][] t = {{1, 2, 3}, {4}, {5, 6}};
  streicheSpalte(t, 1);   // t ist danach {{1, 3}, {4}, {5}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Streichen {
          public static void streicheSpalte(int[][] a, int spalte) {
              // TODO
          }
      }
    musterloesung: |
      public class Streichen {
          public static void streicheSpalte(int[][] a, int spalte) {
              for (int i = 0; i < a.length; i++) {
                  if (spalte < a[i].length) {
                      int[] neu = new int[a[i].length - 1];
                      int k = 0;
                      for (int j = 0; j < a[i].length; j++) {
                          if (j != spalte) {
                              neu[k] = a[i][j];
                              k++;
                          }
                      }
                      a[i] = neu;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] t = {{1, 2, 3}, {4}, {5, 6}};", aufruf: "streicheSpalte(t, 1)", ergebnis: "t", erwartet: "new int[][]{{1, 3}, {4}, {5}}" }
      - { vorher: "int[][] t = {{}, {7, 8}};", aufruf: "streicheSpalte(t, 0)", ergebnis: "t", erwartet: "new int[][]{{}, {8}}", beschreibung: "mit leerer Zeile" }
      - { vorher: "int[][] t = {{1, 2}, {3}};", aufruf: "streicheSpalte(t, 5)", ergebnis: "t", erwartet: "new int[][]{{1, 2}, {3}}", beschreibung: "Spalte gibt es nirgends" }
      - { vorher: "int[][] t = {{9}, {4, 5, 6, 7}};", aufruf: "streicheSpalte(t, 3)", ergebnis: "t", erwartet: "new int[][]{{9}, {4, 5, 6}}", beschreibung: "letztes Element", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Eine Exception bei der leeren Zeile? Prüfe zuerst `spalte < a[i].length`. Nur dann hat die Zeile das Element, und nur dann wird sie ersetzt." }
      - { wert: 1, meldung: "Ist das Ergebnis verschoben oder steht am Ende eine 0? Du brauchst zwei Indizes: `j` für die alte Zeile und `k` für die neue. `k` wächst nur, wenn ein Element übernommen wird." }
hinweise:
  - Eine Zeile wird nur bearbeitet, wenn `spalte < a[i].length` gilt.
  - Lege eine neue Zeile der Länge `a[i].length - 1` an und kopiere alle Elemente außer dem an der Stelle `spalte`. Setze sie dann mit `a[i] = neu` ein.
loesung: |
  **Ansatz:** Regel 2. Für jede betroffene Zeile eine kürzere Zeile bauen und an den alten Platz setzen.
  ---
  ```java
  for (int i = 0; i < a.length; i++) {
      if (spalte < a[i].length) {
          int[] neu = new int[a[i].length - 1];
          int k = 0;
          for (int j = 0; j < a[i].length; j++) {
              if (j != spalte) {
                  neu[k] = a[i][j];
                  k++;
              }
          }
          a[i] = neu;
      }
  }
  ```
  ---
  `j` läuft über die alte Zeile, `k` über die neue. An der Stelle `spalte` wird nichts kopiert, darum bleibt `k` dort stehen.
  ---
  Probe: `{1, 2, 3}` ohne Index 1 ergibt `{1, 3}`. Die Zeile `{4}` hat keinen Index 1 und bleibt.
```

```aufgabe
id: zd-m2-rf-warum
titel: Warum sieht main die Änderung?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Beurteile jede Begründung zu einer `void`-Methode mit dem Parameter `int[][] a`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Methode kann das Array des Aufrufers verändern, weil `a` eine Kopie des Verweises bekommt, die auf dasselbe Array zeigt.
        richtig: true
        erklaerung: Java übergibt immer eine Kopie. Bei Arrays ist es eine Kopie des Verweises, und beide Verweise zeigen auf dasselbe Array.
      - text: Nach `a[i] = neu;` sieht der Aufrufer die neue Zeile, weil Aufrufer und Methode dasselbe äußere Array benutzen.
        richtig: true
        erklaerung: Der Platz `i` gehört zum gemeinsamen äußeren Array. Beide sehen, worauf er jetzt zeigt.
      - text: Nach `a = neu;` sieht der Aufrufer das neue Array, weil Arrays per Referenz übergeben werden.
        richtig: false
        erklaerung: Nur die Variable `a` der Methode zeigt danach woandershin. Die Variable des Aufrufers ist eine andere Variable und wird nicht verändert.
      - text: Um eine Zeile zu verlängern, kann man `a[i].length = a[i].length + 1;` schreiben.
        richtig: false
        erklaerung: '`length` kann man nur lesen. Der Compiler lehnt die Zuweisung ab. Eine längere Zeile muss neu angelegt werden.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Unterscheide „das Array ändern“ von „die Variable `a` ändern“. Welche Variable ändert `a = neu`?'
      - wert: [r, r, f, r]
        meldung: Die Länge eines Arrays steht beim Anlegen fest. Kann man sie danach durch eine Zuweisung ändern?
hinweise:
  - Zeichne die Variable des Aufrufers und den Parameter `a` mit Pfeilen auf dasselbe äußere Array.
  - Überlege bei jeder Zuweisung, ob sie einen Pfeil im gemeinsamen Array oder nur den Pfeil von `a` umlenkt.
loesung: |
  **Ansatz:** Jede Aussage am Speicherbild mit zwei Pfeilen auf dasselbe äußere Array prüfen.
  ---
  Aussagen 1 und 2 stimmen. Elemente und Plätze des gemeinsamen Arrays sind für beide sichtbar.
  ---
  Aussage 3 ist falsch: `a = neu` lenkt nur den Pfeil der Methode um. Aussage 4 ist falsch: `length` ist nicht änderbar.
```

```aufgabe
id: zd-m2-zeilen-doppelt
titel: Warum ändert sich nichts?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll jede Zeile umdrehen. Sie übersetzt und läuft ohne Exception, aber jede Zeile sieht danach
  **genauso aus wie vorher**. Markiere die Zeile, die man ändern muss.
teile:
  - typ: zeilen
    code: |
      public static void jedeZeileUmdrehen(int[][] a) {
          for (int i = 0; i < a.length; i++) {
              int n = a[i].length;
              for (int j = 0; j < n; j++) {
                  int tmp = a[i][j];
                  a[i][j] = a[i][n - 1 - j];
                  a[i][n - 1 - j] = tmp;
              }
          }
      }
    loesung: [4]
    fehler:
      - wert: [2]
        meldung: Die äußere Schleife geht richtig über alle Zeilen. Das Problem liegt innerhalb einer Zeile.
      - wert: [6, 7]
        meldung: Der Tausch selbst ist richtig. Er wird aber zu oft ausgeführt. Wie weit darf `j` laufen?
hinweise:
  - Verfolge die innere Schleife für eine Zeile `{1, 2}`. Was passiert bei `j = 0` und was bei `j = 1`?
  - Ein Paar darf nur einmal getauscht werden. Bis zu welchem Index muss `j` also laufen?
loesung: |
  **Ansatz:** Den Tausch für eine kurze Zeile von Hand durchspielen.
  ---
  Bei `{1, 2}` tauscht `j = 0` die Elemente zu `{2, 1}`. Danach tauscht `j = 1` dasselbe Paar zurück zu `{1, 2}`.
  ---
  Zeile 4 muss `j < n / 2` lauten. Dann wird jedes Paar genau einmal getauscht.
```

:::achtung[Zeilen elementweise statt per Verweis getauscht]
Um die Zeilen 0 und 1 zu tauschen, schreibt jemand

```java
int[][] a = {{1, 2, 3}, {4}};
for (int j = 0; j < a[0].length; j++) {     // falsch: tauscht Elemente
    int tmp = a[0][j];
    a[0][j] = a[1][j];
    a[1][j] = tmp;
}
```

Bei `j = 0` klappt der Tausch noch. Bei `j = 1` gibt es aber kein `a[1][1]`, denn die Zeile 1 hat nur ein Element.
Das Programm bricht mit `ArrayIndexOutOfBoundsException: Index 1 out of bounds for length 1` ab. Elementweise
tauschen geht nur bei gleich langen Zeilen. Der Tausch der Verweise `int[] tmp = a[0]; a[0] = a[1]; a[1] = tmp;`
funktioniert dagegen immer.
:::

:::merke[Das M2-Rezept]
1. Rückgabetyp `void`: Alles, was `main` sehen soll, muss **im übergebenen Array** passieren. Nie `a = …`.
2. **Werte ändern:** direkt `a[i][j] = …`.
3. **Zeilen umordnen:** Verweise tauschen oder verschieben. Beim Verschieben im Kreis die Zeile, die zuerst überschrieben würde, vorher in einer Hilfsvariable merken.
4. **Zeilen verlängern oder kürzen:** neue Zeile mit passender Länge anlegen, kopieren (bei Lücken mit zweitem Index), dann `a[i] = neu`.
5. **Randfälle prüfen:** leere Zeilen, eine einzige Zeile, Grenzen in vertauschter Reihenfolge, Indizes außerhalb einer Zeile.
:::

```aufgabe
id: zd-m2-code-kehre-um
titel: Zeilen zwischen zwei Indizes umdrehen
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: nach Programmiertest 2022-01-27 (reverseBetween/changeOrder), neue Testdaten
angabe: |
  Implementiere `void kehreUm(int[][] a, int von, int bis)`. Die Methode dreht die Reihenfolge der Zeilen mit den
  Indizes von `von` bis `bis` (jeweils einschließlich) um. Das gilt auch, wenn `von > bis` ist. Dann ist derselbe
  Bereich gemeint. Vorbedingung: `a != null`, `a.length > 0`, `von` und `bis` sind gültige Zeilenindizes.

  ```java
  int[][] t = {{1}, {2, 2}, {3}, {4, 4}, {5}};
  kehreUm(t, 1, 3);   // t ist danach {{1}, {4, 4}, {3}, {2, 2}, {5}}
  kehreUm(t, 3, 1);   // dreht denselben Bereich wieder zurück
  ```
teile:
  - typ: code
    vorlage: |
      public class Bereich {
          public static void kehreUm(int[][] a, int von, int bis) {
              // TODO
          }
      }
    musterloesung: |
      public class Bereich {
          public static void kehreUm(int[][] a, int von, int bis) {
              int links = Math.min(von, bis);
              int rechts = Math.max(von, bis);
              while (links < rechts) {
                  int[] tmp = a[links];
                  a[links] = a[rechts];
                  a[rechts] = tmp;
                  links++;
                  rechts--;
              }
          }
      }
    tests:
      - { vorher: "int[][] t = {{1}, {2, 2}, {3}, {4, 4}, {5}};", aufruf: "kehreUm(t, 1, 3)", ergebnis: "t", erwartet: "new int[][]{{1}, {4, 4}, {3}, {2, 2}, {5}}" }
      - { vorher: "int[][] t = {{1}, {2, 2}, {3}, {4, 4}, {5}};", aufruf: "kehreUm(t, 3, 1)", ergebnis: "t", erwartet: "new int[][]{{1}, {4, 4}, {3}, {2, 2}, {5}}", beschreibung: "von > bis" }
      - { vorher: "int[][] t = {{6, 6}, {7}};", aufruf: "kehreUm(t, 1, 1)", ergebnis: "t", erwartet: "new int[][]{{6, 6}, {7}}", beschreibung: "von == bis" }
      - { vorher: "int[][] t = {{1}, {}, {3, 3}, {4}};", aufruf: "kehreUm(t, 0, 3)", ergebnis: "t", erwartet: "new int[][]{{4}, {3, 3}, {}, {1}}", beschreibung: "ganzes Array" }
      - { vorher: "int[][] t = {{9}, {8}, {7}, {6}, {5}, {4}};", aufruf: "kehreUm(t, 4, 1)", ergebnis: "t", erwartet: "new int[][]{{9}, {5}, {6}, {7}, {8}, {4}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Bei `von > bis` passiert bei dir nichts? Bestimme zuerst die kleinere Grenze `Math.min(von, bis)` und die größere `Math.max(von, bis)`." }
      - { wert: 1, meldung: "Tauschst du über die Mitte des Bereichs hinaus? Dann wird jedes Paar zweimal getauscht. Höre auf, sobald sich die beiden Indizes treffen." }
hinweise:
  - Ordne die Grenzen zuerst, sodass `links <= rechts` gilt. `Math.min` und `Math.max` sind erlaubt.
  - Tausche die Zeilen `links` und `rechts`, dann rücke beide Indizes aufeinander zu, solange `links < rechts` gilt.
loesung: |
  **Ansatz:** Wie beim Spiegeln aller Zeilen, aber nur im Bereich zwischen zwei Indizes. Der Fall `von > bis` wird durch Ordnen der Grenzen auf den Normalfall zurückgeführt.
  ---
  ```java
  int links = Math.min(von, bis);
  int rechts = Math.max(von, bis);
  while (links < rechts) {
      int[] tmp = a[links];
      a[links] = a[rechts];
      a[rechts] = tmp;
      links++;
      rechts--;
  }
  ```
  ---
  Zwei Indizes laufen von außen aufeinander zu. Die Bedingung `links < rechts` stoppt in der Mitte. Bei `von == bis` läuft die Schleife gar nicht.
  ---
  Probe mit `kehreUm(t, 1, 3)`: getauscht wird nur das Paar (1, 3). Die mittlere Zeile 2 bleibt. Ergebnis `{{1}, {4, 4}, {3}, {2, 2}, {5}}`.
```

## Gemischte Wiederholung

Hier sind die Aufgaben bunt gemischt, auch mit Stoff aus früheren Kapiteln: Zeichen, Bedingungen, Muster, Methoden, Ziffern und Rekursion. Jede dieser Aufgaben verlinkt die passende Lektion zum Wiederholen. Im Quiz und im Test steht
nicht dabei, zu welcher Lektion eine Frage gehört. Bei den ersten beiden Aufgaben musst du nichts programmieren. Du
entscheidest nur, welches Vorgehen passt. Diese Entscheidung ist bei jeder Array-Aufgabe der erste Schritt.

```aufgabe
id: zd-mix-welches-muster
titel: M1, M2 oder keines von beiden?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Entscheide für jeden Methodenkopf (die erste Zeile einer Methode mit Rückgabetyp, Name und Parametern), welches
  Vorgehen die Angabe verlangt. Du musst nichts programmieren.

  a) `int[][] spiegelbild(int[][] input)` „liefert ein neues Array, in dem jede Zeile umgedreht ist“.

  b) `void spiegle(int[][] input)` „dreht jede Zeile von `input` um“.

  c) `int zaehle(int[][] input, int x)` „liefert, wie oft `x` in `input` vorkommt“.
teile:
  - typ: auswahl
    label: a)
    optionen: ['neues Array anlegen, befüllen und zurückgeben (M1)', 'das übergebene Array verändern (M2)', 'nur durchlaufen und einen Wert berechnen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Rückgabetyp ist `int[][]`, und die Angabe sagt „liefert ein neues Array“. Die Eingabe soll unverändert bleiben.
      - wert: 2
        meldung: Das Ergebnis ist ein ganzes Array, keine einzelne Zahl. Es muss erst gebaut werden.
  - typ: auswahl
    label: b)
    optionen: ['neues Array anlegen, befüllen und zurückgeben (M1)', 'das übergebene Array verändern (M2)', 'nur durchlaufen und einen Wert berechnen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Mit `void` kann die Methode nichts zurückgeben. Ein neues Array wäre für den Aufrufer unsichtbar.
      - wert: 2
        meldung: Die Methode soll etwas ändern, nicht nur zählen oder suchen.
  - typ: auswahl
    label: c)
    optionen: ['neues Array anlegen, befüllen und zurückgeben (M1)', 'das übergebene Array verändern (M2)', 'nur durchlaufen und einen Wert berechnen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das Ergebnis ist ein `int`, kein Array. Es braucht kein neues Array.
      - wert: 1
        meldung: Zählen verändert nichts. Das übergebene Array soll unberührt bleiben.
hinweise:
  - Schau zuerst auf den Rückgabetyp und dann auf das Verb in der Angabe („liefert“ oder „ändert“).
loesung: |
  **Ansatz:** Rückgabetyp und Verb der Angabe bestimmen das Muster.
  ---
  a) `int[][]` und „liefert ein neues Array“: M1. b) `void` und „dreht um“: M2. c) `int` und „liefert, wie oft“: nur durchlaufen und zählen.
```

```aufgabe
id: zd-mix-welcher-durchlauf
titel: Welcher Durchlauf passt?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  `q` ist eine quadratische Tabelle. Entscheide für jede Aufgabe, welcher Durchlauf am besten passt. Du musst nichts
  programmieren.

  a) Prüfen, ob auf der Hauptdiagonalen nur Einsen stehen.

  b) Für jede Spalte die Summe bilden.

  c) Die Tabelle Zeile für Zeile auf der Konsole ausgeben.
teile:
  - typ: auswahl
    label: a)
    optionen: ['eine Schleife über `i` mit `q[i][i]`', 'zeilenweise mit zwei Schleifen', 'spaltenweise mit zwei Schleifen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Zwei Schleifen besuchen alle Elemente. Auf der Diagonalen sind beide Indizes gleich, also genügt einer.
      - wert: 2
        meldung: Auf der Diagonalen gibt es pro Zeile nur ein Element. Eine Schleife genügt.
  - typ: auswahl
    label: b)
    optionen: ['eine Schleife über `i` mit `q[i][i]`', 'zeilenweise mit zwei Schleifen', 'spaltenweise mit zwei Schleifen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Diagonale ist keine Spalte. Für Spaltensummen brauchst du alle Elemente jeder Spalte.
      - wert: 1
        meldung: Auch zeilenweise geht es mit einem Ergebnis-Array. Natürlicher ist aber der spaltenweise Durchlauf, bei dem eine Spalte ganz fertig wird, bevor die nächste beginnt.
  - typ: auswahl
    label: c)
    optionen: ['eine Schleife über `i` mit `q[i][i]`', 'zeilenweise mit zwei Schleifen', 'spaltenweise mit zwei Schleifen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Dann erschiene nur die Diagonale, nicht die ganze Tabelle.
      - wert: 2
        meldung: Die Konsole schreibt von links nach rechts und Zeile für Zeile. Spaltenweise käme die Tabelle gedreht heraus.
hinweise:
  - Frag dich, welche Elemente gebraucht werden und ob die Reihenfolge zählt.
loesung: |
  **Ansatz:** Für jede Aufgabe bestimmen, welche Elemente nötig sind und in welcher Reihenfolge.
  ---
  a) Nur die Diagonale, eine Schleife. b) Spalte für Spalte, also spaltenweise. c) Ausgabe in Lesereihenfolge, also zeilenweise.
```

```aufgabe
id: zd-mix-char-tabelle
titel: Buchstaben in einer Tabelle
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      char[][] f = new char[2][3];
      for (int i = 0; i < f.length; i++) {
          for (int j = 0; j < f[i].length; j++) {
              f[i][j] = (char) ('a' + i * 3 + j);
          }
      }
      System.out.println(f[1][2]);
      System.out.println(f[0][1] + f[1][0]);
      System.out.println("" + f[0][1] + f[1][0]);
    loesung: |
      f
      198
      bd
    fehler:
      - wert: "f\nbd\nbd"
        meldung: 'Zwei `char` mit `+` werden addiert, nicht verkettet. `''b''` hat den Wert 98, `''d''` den Wert 100, zusammen 198.'
      - wert: "e\n198\nbd"
        meldung: '`f[1][2]` bekommt `''a'' + 1 · 3 + 2`, also das Zeichen 5 Stellen nach `a`. Das ist `f`.'
hinweise:
  - Die Tabelle enthält die Buchstaben `a` bis `f`, zeilenweise.
  - Steht links von `+` ein String, wird verkettet. Stehen dort zwei `char`, wird gerechnet.
loesung: |
  **Ansatz:** Zuerst die Tabelle befüllen, dann jede Ausgabe nach den Regeln aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char) und [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten) auswerten.
  ---
  Zeile 0 ist `a b c`, Zeile 1 ist `d e f`. `f[1][2]` ist `f`.
  ---
  `f[0][1] + f[1][0]` ist `'b' + 'd'`. Mit `char` rechnet Java wie mit Zahlen: 98 + 100 = 198.
  ---
  `"" + 'b' + 'd'` beginnt mit einem String. Jedes weitere `+` verkettet, also `bd`.
```

```aufgabe
id: zd-mix-ziffern-zeilen
titel: Ziffern in Zeilen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? (Wiederholung: [7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division))
teile:
  - typ: ausgabe
    code: |
      int[] zahlen = {407, 5, 90};
      int[][] z = new int[zahlen.length][];
      for (int i = 0; i < zahlen.length; i++) {
          int n = zahlen[i];
          int stellen = 0;
          int k = n;
          do {
              stellen++;
              k = k / 10;
          } while (k > 0);
          z[i] = new int[stellen];
          for (int j = 0; j < stellen; j++) {
              z[i][j] = n % 10;
              n = n / 10;
          }
      }
      System.out.println(Arrays.deepToString(z));
    loesung: |
      [[7, 0, 4], [5], [0, 9]]
    fehler:
      - wert: "[[4, 0, 7], [5], [9, 0]]"
        meldung: '`n % 10` liefert die **letzte** Ziffer zuerst. Die Ziffern stehen also von hinten nach vorne in der Zeile.'
      - wert: "[[7, 4], [5], [9]]"
        meldung: Die Null ist eine echte Ziffer. 407 hat drei Stellen, und auch die 0 wird gespeichert.
hinweise:
  - Die `do-while`-Schleife zählt die Stellen der Zahl. Sie bestimmt die Länge der Zeile.
  - Danach wird mit `% 10` und `/ 10` Ziffer für Ziffer von hinten abgespalten.
loesung: |
  **Ansatz:** Für jede Zahl zuerst die Länge der Zeile (Anzahl Stellen), dann den Inhalt bestimmen.
  ---
  407 hat 3 Stellen, 5 hat 1, 90 hat 2. Die `do-while`-Schleife zählt auch bei einstelligen Zahlen mindestens eine Stelle.
  ---
  Die Ziffern kommen von hinten: 407 ergibt 7, 0, 4. 90 ergibt 0, 9. Ergebnis `[[7, 0, 4], [5], [0, 9]]`.
```

```aufgabe
id: zd-mix-rekursion-zeile
titel: Eine Zeile rekursiv addieren
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string))
teile:
  - typ: ausgabe
    code: |
      public class Rek {
          public static int summe(int[] z, int i) {
              if (i == z.length) {
                  return 0;
              }
              return z[i] + summe(z, i + 1);
          }

          public static void main(String[] args) {
              int[][] a = {{3, 4}, {}, {5, 1, 1}};
              int s = 0;
              for (int i = 0; i < a.length; i++) {
                  s += summe(a[i], 0);
              }
              System.out.println(s);
              System.out.println(summe(a[2], 1));
          }
      }
    loesung: |
      14
      2
    fehler:
      - wert: "14\n7"
        meldung: 'Der Startindex ist 1. Das erste Element 5 wird übersprungen, es bleiben 1 + 1 = 2.'
      - wert: "7\n2"
        meldung: Die Schleife in `main` addiert die Summen **aller** Zeilen. Die leere Zeile trägt 0 bei, die anderen 7 und 7.
hinweise:
  - Für die leere Zeile gilt sofort `i == z.length`, also liefert `summe` dort 0.
  - '`summe(z, 1)` addiert die Elemente ab Index 1.'
loesung: |
  **Ansatz:** `summe(z, i)` addiert die Elemente der Zeile `z` ab Index `i`. Der Basisfall ist das Ende der Zeile.
  ---
  Zeile 0 ergibt 7, die leere Zeile 0, Zeile 2 ergibt 7. Zusammen `s = 14`.
  ---
  `summe(a[2], 1)` beginnt bei Index 1 und addiert 1 + 1 = 2.
```

```aufgabe
id: zd-mix-nachbarn
titel: Nachbarn zählen ohne Exception
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Der Code zählt, wie viele der vier direkten Nachbarn einer Zelle (oben, unten, links, rechts) den Wert 1 haben.
  Was gibt er aus? (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht), Kurzschlussauswertung)
teile:
  - typ: ausgabe
    code: |
      int[][] f = {{1, 0, 1}, {0, 1, 1}};
      int[][] zellen = {{0, 2}, {1, 2}};
      for (int k = 0; k < zellen.length; k++) {
          int i = zellen[k][0];
          int j = zellen[k][1];
          int n = 0;
          if (i > 0 && f[i - 1][j] == 1) n++;
          if (i < f.length - 1 && f[i + 1][j] == 1) n++;
          if (j > 0 && f[i][j - 1] == 1) n++;
          if (j < f[i].length - 1 && f[i][j + 1] == 1) n++;
          System.out.println(n);
      }
    loesung: |
      1
      2
    fehler:
      - wert: "2\n3"
        meldung: Gezählt werden nur die vier Nachbarn, nicht die Zelle selbst. Beide Zellen haben selbst den Wert 1, der aber nicht mitzählt.
hinweise:
  - Bei `&&` wird der rechte Teil nur ausgewertet, wenn der linke wahr ist. So entsteht am Rand keine Exception.
  - Prüfe für jede der beiden Zellen alle vier Richtungen einzeln.
loesung: |
  **Ansatz:** Für jede Zelle die vier Bedingungen einzeln prüfen. Die linke Hälfte jeder Bedingung schützt vor einem Zugriff außerhalb.
  ---
  Zelle (0, 2): oben gibt es nicht. Unten ist `f[1][2] = 1`, links `f[0][1] = 0`, rechts gibt es nicht. Ergebnis 1.
  ---
  Zelle (1, 2): oben `f[0][2] = 1`, unten gibt es nicht, links `f[1][1] = 1`, rechts gibt es nicht. Ergebnis 2.
```

```aufgabe
id: zd-mix-methode-zeile
titel: Eine Methode liefert eine Zeile
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Zeile {
          public static int[] erste(int[][] a) {
              a[0][0]++;
              return a[0];
          }

          public static void main(String[] args) {
              int[][] t = {{1, 2}, {3}};
              int[] z = erste(t);
              z[1] = 9;
              System.out.println(Arrays.deepToString(t));
              System.out.println(erste(t)[0]);
          }
      }
    loesung: |
      [[2, 9], [3]]
      3
    fehler:
      - wert: "[[2, 2], [3]]\n3"
        meldung: '`erste` gibt den Verweis auf die Zeile 0 zurück, keine Kopie. `z[1] = 9` ändert also die Zeile in `t`.'
      - wert: "[[2, 9], [3]]\n2"
        meldung: Der zweite Aufruf von `erste` erhöht `t[0][0]` noch einmal, bevor die Zeile zurückgegeben wird. Aus 2 wird 3.
hinweise:
  - '`return a[0];` gibt einen Verweis zurück. Worauf zeigt danach `z`?'
  - Auch der zweite Aufruf hat die Seiteneffekte der Methode.
loesung: |
  **Ansatz:** Seiteneffekt (die Änderung, die die Methode nebenbei am Array vornimmt) und Rückgabewert getrennt betrachten wie in [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return). Der Rückgabewert ist hier ein Verweis.
  ---
  Erster Aufruf: `t[0][0]` wird 2, und `z` zeigt auf die Zeile 0. `z[1] = 9` ändert diese Zeile, also ist `t` gleich `[[2, 9], [3]]`.
  ---
  Zweiter Aufruf: `t[0][0]` wird 3, dann liefert `erste(t)[0]` den Wert 3.
```

```aufgabe
id: zd-mix-schachbrett
titel: Ein Schachbrett aus boolean
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? (Wiederholung: [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett))
teile:
  - typ: ausgabe
    code: |
      boolean[][] b = new boolean[3][4];
      for (int i = 0; i < b.length; i++) {
          for (int j = 0; j < b[i].length; j++) {
              b[i][j] = (i + j) % 2 == 0;
          }
      }
      for (int i = 0; i < b.length; i++) {
          for (int j = 0; j < b[i].length; j++) {
              if (b[i][j]) {
                  System.out.print("#");
              } else {
                  System.out.print(".");
              }
          }
          System.out.println();
      }
    loesung: |
      #.#.
      .#.#
      #.#.
    fehler:
      - wert: "#.#.\n#.#.\n#.#."
        meldung: Die Bedingung hängt von `i + j` ab, nicht nur von `j`. In Zeile 1 ist die Summe für `j = 0` ungerade, also beginnt die Zeile mit `.`.
      - wert: "#.#\n.#.\n#.#\n.#."
        meldung: '`new boolean[3][4]` hat 3 Zeilen mit je 4 Spalten. Es entstehen 3 Ausgabezeilen mit je 4 Zeichen.'
hinweise:
  - '`b[i][j]` ist `true`, wenn `i + j` gerade ist.'
loesung: |
  **Ansatz:** Erst die Tabelle befüllen, dann zeilenweise ausgeben. Das ist das Schachbrettmuster aus [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett), nur in einem Array gespeichert.
  ---
  In Zeile 0 sind die geraden Spalten `true`, in Zeile 1 die ungeraden, in Zeile 2 wieder die geraden. Ausgabe `#.#.`, `.#.#` und `#.#.`.
```

```aufgabe
id: zd-mix-code-reparieren
titel: Eine M2-Methode mit drei Fehlern reparieren
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: nach Aufgabenblatt 3 WS2023, Aufgabe 5, zweiter Teil (fehlerhaften Code von ChatGPT reparieren), auf 2D-Arrays übertragen
angabe: |
  `void ohneErstes(int[][] a)` soll aus jeder **nichtleeren** Zeile das erste Element entfernen. Leere Zeilen bleiben
  leer. Ein Kollege hat die Vorlage geschrieben. Sie übersetzt, enthält aber drei Fehler. Repariere sie.
  Vorbedingung: `a != null`, keine Zeile ist `null`.

  ```java
  int[][] t = {{1, 2, 3}, {4}, {}, {5, 6}};
  ohneErstes(t);   // t ist danach {{2, 3}, {}, {}, {6}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Reparatur {
          public static void ohneErstes(int[][] a) {
              for (int i = 0; i < a.length; i++) {
                  int[] neu = new int[a[i].length - 1];
                  for (int j = 0; j < neu.length; j++) {
                      neu[j] = a[i][j];
                  }
              }
          }
      }
    musterloesung: |
      public class Reparatur {
          public static void ohneErstes(int[][] a) {
              for (int i = 0; i < a.length; i++) {
                  if (a[i].length > 0) {
                      int[] neu = new int[a[i].length - 1];
                      for (int j = 0; j < neu.length; j++) {
                          neu[j] = a[i][j + 1];
                      }
                      a[i] = neu;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] t = {{1, 2, 3}, {4}, {5, 6}};", aufruf: "ohneErstes(t)", ergebnis: "t", erwartet: "new int[][]{{2, 3}, {}, {6}}", beschreibung: "ohne leere Zeilen" }
      - { vorher: "int[][] t = {{1, 2, 3}, {4}, {}, {5, 6}};", aufruf: "ohneErstes(t)", ergebnis: "t", erwartet: "new int[][]{{2, 3}, {}, {}, {6}}", beschreibung: "mit leerer Zeile" }
      - { vorher: "int[][] t = {};", aufruf: "ohneErstes(t)", ergebnis: "t", erwartet: "new int[][]{}", beschreibung: "keine Zeilen" }
      - { vorher: "int[][] t = {{}, {7, 8, 9, 10}};", aufruf: "ohneErstes(t)", ergebnis: "t", erwartet: "new int[][]{{}, {8, 9, 10}}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Bleibt das Array unverändert? Die neue Zeile wird zwar gebaut, aber nie an ihren Platz gesetzt. Es fehlt `a[i] = neu;`." }
      - { wert: 2, meldung: "Eine NegativeArraySizeException? Für eine leere Zeile ist `a[i].length - 1` gleich -1. Bearbeite nur Zeilen mit `a[i].length > 0`." }
hinweise:
  - Probiere die Vorlage gedanklich mit `{1, 2, 3}` aus. Welche Elemente landen in `neu`, und wo landet `neu` am Ende?
  - 'Die drei Fehler: der Randfall leere Zeile, der falsche Index beim Kopieren und eine fehlende Zuweisung.'
loesung: |
  **Ansatz:** Die Vorlage an einer kurzen Zeile, an einer leeren Zeile und am Ergebnis prüfen.
  ---
  Fehler 1: Für eine leere Zeile ist die Länge `-1`. `new int[-1]` bricht mit einer `NegativeArraySizeException` ab. Abhilfe: `if (a[i].length > 0)`.
  ---
  Fehler 2: `neu[j] = a[i][j]` kopiert die **ersten** Elemente und lässt das letzte weg. Richtig ist `a[i][j + 1]`, denn das Element an Index 0 soll fehlen.
  ---
  Fehler 3: Ohne `a[i] = neu;` bleibt die neue Zeile eine lokale Variable, und `main` sieht nichts. Mit allen drei Korrekturen ergibt `{1, 2, 3}` die Zeile `{2, 3}`.
```

```aufgabe
id: zd-mix-code-rahmen
titel: Ein Zeichenfeld einrahmen
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: nach Aufgabenblatt 5 WS2023, Aufgabe 2 (Zeichenfeld umranden), mit wählbarem Randzeichen, Rand nach der längsten Zeile und neuen Testdaten
angabe: |
  Implementiere `char[][] einrahmen(char[][] bild, char rand)`. Die Methode liefert ein neues Array mit zwei Zeilen
  mehr als `bild`.

  - Die erste und die letzte Zeile bestehen nur aus dem Zeichen `rand`. Sie sind um 2 länger als die **längste** Zeile von `bild`.
  - Dazwischen steht jede Zeile von `bild`, mit je einem `rand` davor und dahinter. Eine leere Zeile wird also zu zwei Randzeichen.

  Vorbedingung: `bild != null`, keine Zeile ist `null`.

  ```java
  einrahmen(new char[][]{{'G', 'u'}, {'t'}}, '~')
  // liefert {{'~','~','~','~'}, {'~','G','u','~'}, {'~','t','~'}, {'~','~','~','~'}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Rahmen {
          public static char[][] einrahmen(char[][] bild, char rand) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Rahmen {
          public static char[][] einrahmen(char[][] bild, char rand) {
              int max = 0;
              for (int i = 0; i < bild.length; i++) {
                  if (bild[i].length > max) {
                      max = bild[i].length;
                  }
              }
              char[][] r = new char[bild.length + 2][];
              r[0] = new char[max + 2];
              r[r.length - 1] = new char[max + 2];
              for (int j = 0; j < max + 2; j++) {
                  r[0][j] = rand;
                  r[r.length - 1][j] = rand;
              }
              for (int i = 0; i < bild.length; i++) {
                  char[] zeile = new char[bild[i].length + 2];
                  zeile[0] = rand;
                  for (int j = 0; j < bild[i].length; j++) {
                      zeile[j + 1] = bild[i][j];
                  }
                  zeile[zeile.length - 1] = rand;
                  r[i + 1] = zeile;
              }
              return r;
          }
      }
    tests:
      - { aufruf: "einrahmen(new char[][]{{'G', 'u'}, {'t'}}, '~')", erwartet: "new char[][]{{'~','~','~','~'}, {'~','G','u','~'}, {'~','t','~'}, {'~','~','~','~'}}" }
      - { aufruf: "einrahmen(new char[][]{{'z'}}, '#')", erwartet: "new char[][]{{'#','#','#'}, {'#','z','#'}, {'#','#','#'}}", beschreibung: "ein einziges Zeichen" }
      - { aufruf: "einrahmen(new char[][]{{}, {'a', 'b', 'c'}}, '+')", erwartet: "new char[][]{{'+','+','+','+','+'}, {'+','+'}, {'+','a','b','c','+'}, {'+','+','+','+','+'}}", beschreibung: "mit leerer Zeile, längste Zeile nicht oben" }
      - { aufruf: "einrahmen(new char[][]{}, '=')", erwartet: "new char[][]{{'=','='}, {'=','='}}", beschreibung: "Bild ohne Zeilen" }
      - { vorher: "char[][] b = {{'x'}}; char[][] r = einrahmen(b, '-');", aufruf: "b", erwartet: "new char[][]{{'x'}}", beschreibung: "Eingabe bleibt unverändert", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 3, meldung: "Richtet sich dein Rand nach der ersten Zeile? Er muss so lang sein wie die **längste** Zeile plus 2. Bestimme die längste Zeile in einem eigenen Durchlauf." }
      - { wert: 4, meldung: "Auch ohne Zeilen gibt es oben und unten eine Randzeile. Die längste Länge ist dann 0, die Randzeilen haben also die Länge 2." }
hinweise:
  - Bestimme zuerst die größte Zeilenlänge `max`. Das Ergebnis hat `bild.length + 2` Zeilen, und die Randzeilen haben die Länge `max + 2`.
  - Die Zeile `i` von `bild` landet im Ergebnis an Platz `i + 1`. Ihr Zeichen `j` steht dort an Index `j + 1`.
loesung: |
  **Ansatz:** M1-Rezept. Form bestimmen (längste Zeile), Randzeilen anlegen, dann jede Bildzeile mit Rand kopieren.
  ---
  ```java
  int max = 0;
  for (int i = 0; i < bild.length; i++) {
      if (bild[i].length > max) max = bild[i].length;
  }
  char[][] r = new char[bild.length + 2][];
  r[0] = new char[max + 2];
  r[r.length - 1] = new char[max + 2];
  for (int j = 0; j < max + 2; j++) {
      r[0][j] = rand;
      r[r.length - 1][j] = rand;
  }
  ```
  ---
  ```java
  for (int i = 0; i < bild.length; i++) {
      char[] zeile = new char[bild[i].length + 2];
      zeile[0] = rand;
      for (int j = 0; j < bild[i].length; j++) {
          zeile[j + 1] = bild[i][j];
      }
      zeile[zeile.length - 1] = rand;
      r[i + 1] = zeile;
  }
  return r;
  ```
  ---
  Indexumrechnung: Bildzeile `i` geht an Platz `i + 1`, weil oben die Randzeile steht. Zeichen `j` geht an `j + 1`, weil vorne ein Randzeichen steht.
  ---
  Randfall ohne Zeilen: `max` bleibt 0, das Ergebnis hat zwei Randzeilen der Länge 2. Probe mit `{{'G', 'u'}, {'t'}}`: `max = 2`, Randzeilen der Länge 4.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im Format des
TUWEL-Quiz gestellt (je vier Aussagen Richtig/Falsch mit Teilpunkten). Danach folgen die beiden Methoden M1 und M2 im
Stil des Programmiertests, eine Aufgabe zu den Testfällen in `main`, eine Blattaufgabe mit einem Zahlenmuster und
Zusatzfragen für das Feedbackgespräch. Plane die angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen
aufdeckst. Das Format 2026W ist nicht veröffentlicht. Die Aufgaben folgen den Quiz, Blättern und Programmiertests der
Jahre 2020 bis 2023.

Für die Programmieraufgaben gelten die Einschränkungen des Programmiertests:

- Keine zusätzlichen Hilfsmethoden und keine globalen Variablen (Variablen außerhalb der Methoden). Die Methodenköpfe bleiben unverändert.
- Kein `clone`, kein `System.arraycopy`, von `Arrays` nur `toString` und `deepToString`.
- Außer `Math` keine weiteren Klassen der Java-Bibliothek.

```aufgabe
id: zd-pruef-quiz-deklarationen
titel: Vier Deklarationen mit Kommentar
niveau: 3
punkte: 2
lernziel: 4
kompetenz: verstehen
quelle: Format nach TUWEL-Test 2 (13.01.2023), Frage zu mehrdimensionalen Deklarationen, Inhalt neu
angabe: |
  (Zeitrichtwert: 4 Minuten) Jedes Fragment enthält eine Deklaration und einen Kommentar. Der Kommentar beschreibt,
  was **direkt danach** ohne weitere Anweisungen möglich ist. Beurteile die Kommentare.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`int[][][] a = new int[3][2][2]; // a kann 12 Werte speichern.`'
        richtig: true
        erklaerung: 3 · 2 · 2 = 12.
      - text: '`double[][] d = new double[2][]; // d[1] = new double[7]; ist möglich.`'
        richtig: true
        erklaerung: '`d[1]` ist ein Platz für eine Zeile vom Typ `double[]`. Eine neue Zeile beliebiger Länge darf dort hin.'
      - text: '`boolean[][] b = new boolean[2][3]; // b[2][1] = true; ist möglich.`'
        richtig: false
        erklaerung: '`b` hat 2 Zeilen mit den Indizes 0 und 1. `b[2]` gibt es nicht, es folgt eine `ArrayIndexOutOfBoundsException`.'
      - text: '`String[][] s = new String[1][1]; // s[0][0].length() liefert 0.`'
        richtig: false
        erklaerung: '`s[0][0]` ist `null`. Der Aufruf `length()` führt zu einer NullPointerException.'
    fehler:
      - wert: [r, f, f, f]
        meldung: '`new double[2][]` legt zwei Plätze für Zeilen an. Darf man dort direkt eine neue Zeile speichern?'
      - wert: [r, r, f, r]
        meldung: Welchen Standardwert hat ein `String`-Element nach `new`? Ist das der leere String?
hinweise:
  - Bestimme für jedes Fragment, welche Arrays existieren und welche Indizes gültig sind.
  - Achte auf den Unterschied zwischen einer fehlenden Zeile und einem fehlenden String.
loesung: |
  **Ansatz:** Für jedes Fragment das Speicherbild bestimmen und den Zugriff im Kommentar daran prüfen.
  ---
  Fragment 1: alle Größen gegeben, 12 Werte. Fragment 2: Platz für eine Zeile, Zuweisung erlaubt.
  ---
  Fragment 3: Zeilenindex 2 existiert nicht. Fragment 4: Das Element ist `null`. Richtig sind 1 und 2.
```

```aufgabe
id: zd-pruef-quiz-methode
titel: Vier Aussagen zu einer erzeugenden Methode
niveau: 3
punkte: 2
lernziel: 2
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (2D-Methode, Aussagen zu Zeilenzahl und Wertebereich), Code und Aussagen neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist

  ```java
  public static int[][] erzeuge(int n) {
      int[][] r = new int[n][];
      for (int i = 0; i < n; i++) {
          r[i] = new int[n - i];
          for (int j = 0; j < r[i].length; j++) {
              r[i][j] = i * j;
          }
      }
      return r;
  }
  ```

  Vorbedingung: `n` liegt zwischen 1 und 50. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für jedes erlaubte `n` liefert `erzeuge(n).length` den Wert `n`.
        richtig: true
        erklaerung: Das äußere Array wird mit `new int[n][]` angelegt.
      - text: Die letzte Zeile hat genau ein Element.
        richtig: true
        erklaerung: 'Die letzte Zeile hat den Index `n - 1` und die Länge `n - (n - 1) = 1`.'
      - text: 'Das größte Element hat den Wert `(n - 1) · (n - 1)`.'
        richtig: false
        erklaerung: 'In Zeile `i` läuft `j` nur bis `n - 1 - i`. Für `n = 3` entsteht `{{0, 0, 0}, {0, 1}, {0}}`, der größte Wert ist 1 und nicht 4.'
      - text: Kein Element des Ergebnisses ist kleiner als 0.
        richtig: true
        erklaerung: '`i` und `j` sind nie negativ, also ist auch `i * j` nie negativ.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Probiere `n = 3` von Hand aus. Welche Zeile enthält das Element mit dem größten `i * j`?'
      - wert: [r, f, f, r]
        meldung: 'Setze in `n - i` den letzten Zeilenindex `i = n - 1` ein.'
hinweise:
  - Schreib das Ergebnis für `n = 3` vollständig auf.
  - Je größer `i`, desto kürzer die Zeile. Das begrenzt `j`.
loesung: |
  **Ansatz:** Zeilenzahl und Zeilenlängen aus dem Code ablesen und die Aussagen an einem kleinen `n` prüfen.
  ---
  `n` Zeilen, Zeile `i` hat die Länge `n - i`. Die letzte Zeile hat also Länge 1.
  ---
  Für `n = 3` ist das Ergebnis `{{0, 0, 0}, {0, 1}, {0}}`. Der größte Wert ist 1, nicht `2 · 2 = 4`. Negative Werte gibt es nie. Richtig sind 1, 2 und 4.
```

```aufgabe
id: zd-pruef-pt-summenzeile
titel: "M1: Eine Zeile mit Spaltensummen anhängen"
niveau: 3
punkte: 10
lernziel: 5
kompetenz: anwenden
quelle: Programmiertest, Muster M1 (neues Array aus Eingabe bauen, Kopie der Zeilen, nach addTriangle/getRectangular), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int[][] mitSummenzeile(int[][] input)`. Die Methode liefert ein neues
  Array. Es enthält zuerst eine **Kopie** jeder Zeile von `input` und darunter eine zusätzliche letzte Zeile. Diese
  ist so lang wie die längste Zeile von `input`. An Index `j` steht die Summe aller Elemente `input[i][j]`, die es gibt.
  Kürzere Zeilen tragen zu den hinteren Spalten nichts bei. Vorbedingung: `input != null`, `input.length > 0`, keine
  Zeile ist `null`.

  ```java
  mitSummenzeile(new int[][]{{1, 2, 3}, {4}, {5, 6}})
  // liefert {{1, 2, 3}, {4}, {5, 6}, {10, 8, 3}}
  mitSummenzeile(new int[][]{{}, {2}})   // liefert {{}, {2}, {2}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Summenzeile {
          public static int[][] mitSummenzeile(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Summenzeile {
          public static int[][] mitSummenzeile(int[][] input) {
              int max = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i].length > max) {
                      max = input[i].length;
                  }
              }
              int[][] r = new int[input.length + 1][];
              int[] summen = new int[max];
              for (int i = 0; i < input.length; i++) {
                  r[i] = new int[input[i].length];
                  for (int j = 0; j < input[i].length; j++) {
                      r[i][j] = input[i][j];
                      summen[j] += input[i][j];
                  }
              }
              r[input.length] = summen;
              return r;
          }
      }
    tests:
      - { aufruf: "mitSummenzeile(new int[][]{{1, 2, 3}, {4}, {5, 6}})", erwartet: "new int[][]{{1, 2, 3}, {4}, {5, 6}, {10, 8, 3}}" }
      - { aufruf: "mitSummenzeile(new int[][]{{}, {2}})", erwartet: "new int[][]{{}, {2}, {2}}", beschreibung: "mit leerer Zeile" }
      - { aufruf: "mitSummenzeile(new int[][]{{}})", erwartet: "new int[][]{{}, {}}", beschreibung: "nur eine leere Zeile" }
      - { vorher: "int[][] t = {{1, 2}, {3}}; int[][] r = mitSummenzeile(t);", aufruf: "r[0] != t[0] && r[1] != t[1]", erwartet: "true", beschreibung: "Zeilen sind Kopien" }
      - { vorher: "int[][] t = {{1, 2}, {3}}; mitSummenzeile(t);", aufruf: "t", erwartet: "new int[][]{{1, 2}, {3}}", beschreibung: "Eingabe bleibt unverändert" }
      - { aufruf: "mitSummenzeile(new int[][]{{-1}, {2, 2, 2, 2}, {0, -5}})", erwartet: "new int[][]{{-1}, {2, 2, 2, 2}, {0, -5}, {1, -3, 2, 2}}", versteckt: true }
    regeln: { keineArrayKopie: true, keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Stimmt die Länge der Summenzeile? Sie richtet sich nach der **längsten** Zeile, nicht nach der ersten. Bestimme sie in einem eigenen Durchlauf." }
      - { wert: 4, meldung: "`r[i] = input[i]` übernimmt die Zeile, statt sie zu kopieren. Lege jede Zeile mit `new int[input[i].length]` neu an." }
      - { wert: 5, meldung: "Die Eingabe hat sich verändert. Rechne die Summen in einem eigenen Array, nicht in einer Zeile von `input`." }
hinweise:
  - Bestimme im ersten Durchlauf die längste Zeilenlänge `max`. Das Ergebnis hat `input.length + 1` Zeilen, die letzte hat die Länge `max`.
  - Beim Kopieren jeder Zeile kannst du im selben Schritt `summen[j] += input[i][j]` rechnen.
loesung: |
  **Ansatz:** M1-Rezept. Form bestimmen (eine Zeile mehr, Summenzeile so lang wie die längste Zeile), dann kopieren und dabei summieren.
  ---
  ```java
  int max = 0;
  for (int i = 0; i < input.length; i++) {
      if (input[i].length > max) max = input[i].length;
  }
  int[][] r = new int[input.length + 1][];
  int[] summen = new int[max];
  ```
  ---
  ```java
  for (int i = 0; i < input.length; i++) {
      r[i] = new int[input[i].length];
      for (int j = 0; j < input[i].length; j++) {
          r[i][j] = input[i][j];
          summen[j] += input[i][j];
      }
  }
  r[input.length] = summen;
  return r;
  ```
  ---
  Die innere Schleife läuft nur bis `input[i].length`. Kürzere Zeilen tragen darum zu hinteren Spalten nichts bei, und es gibt keine Exception. `summen` beginnt mit lauter Nullen.
  ---
  Probe: Spalte 0 ergibt 1 + 4 + 5 = 10, Spalte 1 ergibt 2 + 6 = 8, Spalte 2 nur 3. Eine Bewertung im Stil des Programmiertests könnte so aussehen (geschätzt, nicht offiziell): Zeilenzahl 2 P, Länge der Summenzeile 2 P, Kopieren der Zeilen 3 P, richtige Summen 3 P.
```

```aufgabe
id: zd-pruef-pt-entferne
titel: "M2: Einen Wert aus allen Zeilen entfernen"
niveau: 3
punkte: 10
lernziel: 6
kompetenz: anwenden
quelle: Programmiertest, Muster M2 (Zeilen kürzen, nach removeEntry/Probetests 2023), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `void entferneAlle(int[][] a, int wert)`. Die Methode entfernt aus jeder
  Zeile von `a` alle Vorkommen von `wert`. Die übrigen Elemente behalten ihre Reihenfolge. Eine Zeile, in der `wert`
  vorkommt, wird durch eine entsprechend kürzere Zeile ersetzt. Vorbedingung: `a != null`, keine Zeile ist `null`.

  ```java
  int[][] t = {{1, 0, 2, 0}, {0}, {3}};
  entferneAlle(t, 0);   // t ist danach {{1, 2}, {}, {3}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Entfernen {
          public static void entferneAlle(int[][] a, int wert) {
              // TODO
          }
      }
    musterloesung: |
      public class Entfernen {
          public static void entferneAlle(int[][] a, int wert) {
              for (int i = 0; i < a.length; i++) {
                  int anzahl = 0;
                  for (int j = 0; j < a[i].length; j++) {
                      if (a[i][j] != wert) {
                          anzahl++;
                      }
                  }
                  int[] neu = new int[anzahl];
                  int k = 0;
                  for (int j = 0; j < a[i].length; j++) {
                      if (a[i][j] != wert) {
                          neu[k] = a[i][j];
                          k++;
                      }
                  }
                  a[i] = neu;
              }
          }
      }
    tests:
      - { vorher: "int[][] t = {{1, 0, 2, 0}, {0}, {3}};", aufruf: "entferneAlle(t, 0)", ergebnis: "t", erwartet: "new int[][]{{1, 2}, {}, {3}}" }
      - { vorher: "int[][] t = {{}, {5, 5}};", aufruf: "entferneAlle(t, 5)", ergebnis: "t", erwartet: "new int[][]{{}, {}}", beschreibung: "leere Zeile und Zeile aus lauter Treffern" }
      - { vorher: "int[][] t = {{1, 2}, {3}};", aufruf: "entferneAlle(t, 9)", ergebnis: "t", erwartet: "new int[][]{{1, 2}, {3}}", beschreibung: "Wert kommt nicht vor" }
      - { vorher: "int[][] t = {{-2, 4, -2, -2, 7}};", aufruf: "entferneAlle(t, -2)", ergebnis: "t", erwartet: "new int[][]{{4, 7}}", versteckt: true }
    regeln: { keineArrayKopie: true, keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Steht am Ende einer Zeile noch eine 0 oder fehlt ein Element? Zähle zuerst die verbleibenden Elemente, lege dann eine Zeile genau dieser Länge an und kopiere mit einem zweiten Index `k`." }
      - { wert: 2, meldung: "Eine Zeile aus lauter Treffern wird zur leeren Zeile, und eine leere Zeile bleibt leer. Funktioniert deine Lösung mit `new int[0]`?" }
hinweise:
  - Für jede Zeile zwei Durchläufe. Der erste zählt die Elemente, die bleiben, der zweite kopiert sie in eine neue Zeile.
  - Beim Kopieren läuft `j` über die alte Zeile und `k` über die neue. Am Ende setzt `a[i] = neu;` die Zeile an ihren Platz.
loesung: |
  **Ansatz:** M2-Rezept, Fall „Zeile kürzen“. Die Länge der neuen Zeile steht erst nach dem Zählen fest.
  ---
  ```java
  for (int i = 0; i < a.length; i++) {
      int anzahl = 0;
      for (int j = 0; j < a[i].length; j++) {
          if (a[i][j] != wert) anzahl++;
      }
      int[] neu = new int[anzahl];
  ```
  ---
  ```java
      int k = 0;
      for (int j = 0; j < a[i].length; j++) {
          if (a[i][j] != wert) {
              neu[k] = a[i][j];
              k++;
          }
      }
      a[i] = neu;
  }
  ```
  ---
  Randfälle: Eine leere Zeile ergibt `anzahl = 0` und bleibt leer. Eine Zeile aus lauter Treffern wird leer. Kein `return`, denn `a[i] = neu` ist für `main` sichtbar.
  ---
  Probe: `{1, 0, 2, 0}` hat 2 Elemente ungleich 0. Die neue Zeile ist `{1, 2}`.
```

```aufgabe
id: zd-pruef-main-ausgaben
titel: Die Testausgaben in main vorhersagen
niveau: 3
punkte: 3
lernziel: 7
kompetenz: anwenden
quelle: nach den Testtabellen der Programmiertests 2021/2022 („Aufruf / Ausgabe in main“), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Im Programmiertest gibt es Punkte für Deklarationen und Testfälle in `main`. Hier sind
  beide Methoden schon richtig implementiert. Was gibt `main` aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Test {
          public static int[][] ohneLeere(int[][] input) {
              int anzahl = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i].length > 0) {
                      anzahl++;
                  }
              }
              int[][] r = new int[anzahl][];
              int k = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i].length > 0) {
                      r[k] = new int[input[i].length];
                      for (int j = 0; j < input[i].length; j++) {
                          r[k][j] = input[i][j];
                      }
                      k++;
                  }
              }
              return r;
          }

          public static void tauscheAussen(int[][] a) {
              int[] tmp = a[0];
              a[0] = a[a.length - 1];
              a[a.length - 1] = tmp;
          }

          public static void main(String[] args) {
              int[][] test1 = {{4, 2}, {}, {7}, {1, 1, 1}};
              int[][] result1 = ohneLeere(test1);
              System.out.println(Arrays.deepToString(result1));
              System.out.println(result1[0] == test1[0]);
              tauscheAussen(test1);
              System.out.println(Arrays.deepToString(test1));
              System.out.println(Arrays.deepToString(result1));
              System.out.println(Arrays.deepToString(ohneLeere(new int[][]{{}})));
          }
      }
    loesung: |
      [[4, 2], [7], [1, 1, 1]]
      false
      [[1, 1, 1], [], [7], [4, 2]]
      [[4, 2], [7], [1, 1, 1]]
      []
    fehler:
      - wert: "[[4, 2], [7], [1, 1, 1]]\nfalse\n[[1, 1, 1], [], [7], [4, 2]]\n[[1, 1, 1], [7], [4, 2]]\n[]"
        meldung: '`result1` ist ein eigenes Array mit kopierten Zeilen. Der Tausch in `test1` ändert nur Plätze im äußeren Array von `test1`.'
      - wert: "[[4, 2], [7], [1, 1, 1]]\ntrue\n[[1, 1, 1], [], [7], [4, 2]]\n[[4, 2], [7], [1, 1, 1]]\n[]"
        meldung: '`ohneLeere` legt jede Zeile mit `new` neu an. `result1[0]` und `test1[0]` haben gleichen Inhalt, sind aber verschiedene Arrays.'
      - wert: "[[4, 2], [7], [1, 1, 1]]\nfalse\n[[1, 1, 1], [], [7], [4, 2]]\n[[4, 2], [7], [1, 1, 1]]\n[[]]"
        meldung: '`ohneLeere` entfernt auch die einzige Zeile, wenn sie leer ist. Das Ergebnis hat 0 Zeilen, und `deepToString` zeigt `[]`.'
hinweise:
  - Prüfe bei jeder Methode, ob sie neue Zeilen anlegt oder nur Verweise verschiebt.
  - Ein Array ohne Zeilen erscheint in `deepToString` als `[]`, ein Array mit einer leeren Zeile als `[[]]`.
loesung: |
  **Ansatz:** Jede Ausgabezeile einzeln bestimmen. Dabei immer fragen, welche Arrays gemeinsam benutzt werden.
  ---
  `ohneLeere(test1)` kopiert die drei nichtleeren Zeilen in neue Arrays: `[[4, 2], [7], [1, 1, 1]]`. Weil kopiert wurde, ist `result1[0] == test1[0]` falsch.
  ---
  `tauscheAussen(test1)` tauscht in `test1` die erste und die letzte Zeile: `[[1, 1, 1], [], [7], [4, 2]]`. `result1` hat ein eigenes äußeres Array und bleibt gleich.
  ---
  `ohneLeere(new int[][]{{}})` zählt 0 nichtleere Zeilen und liefert ein Array ohne Zeilen, also `[]`.
```

```aufgabe
id: zd-pruef-blatt-zwiebel
titel: Ringe wie bei einer Zwiebel
niveau: 3
punkte: 6
lernziel: 5
kompetenz: modellieren
quelle: nach Aufgabenblatt 4 WS2023, Aufgabe 5a, und Blatt 5 WS2021, Aufgabe 1 (n × n nach Muster befüllen), anderes Muster
angabe: |
  (Zeitrichtwert: 12 Minuten) Implementiere `int[][] zwiebel(int n)`. Die Methode liefert ein `n × n`-Array, in dem
  der äußerste Ring aus Einsen besteht, der nächste Ring nach innen aus Zweien und so weiter. Vorbedingung: `n > 0`.

  ```
  zwiebel(4)          zwiebel(5)
  1 1 1 1             1 1 1 1 1
  1 2 2 1             1 2 2 2 1
  1 2 2 1             1 2 3 2 1
  1 1 1 1             1 2 2 2 1
                      1 1 1 1 1
  ```
teile:
  - typ: code
    vorlage: |
      public class Zwiebel {
          public static int[][] zwiebel(int n) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Zwiebel {
          public static int[][] zwiebel(int n) {
              int[][] r = new int[n][n];
              for (int i = 0; i < n; i++) {
                  for (int j = 0; j < n; j++) {
                      int abstand = Math.min(Math.min(i, j), Math.min(n - 1 - i, n - 1 - j));
                      r[i][j] = abstand + 1;
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "zwiebel(4)", erwartet: "new int[][]{{1, 1, 1, 1}, {1, 2, 2, 1}, {1, 2, 2, 1}, {1, 1, 1, 1}}" }
      - { aufruf: "zwiebel(5)", erwartet: "new int[][]{{1, 1, 1, 1, 1}, {1, 2, 2, 2, 1}, {1, 2, 3, 2, 1}, {1, 2, 2, 2, 1}, {1, 1, 1, 1, 1}}" }
      - { aufruf: "zwiebel(1)", erwartet: "new int[][]{{1}}", beschreibung: "n = 1" }
      - { aufruf: "zwiebel(2)", erwartet: "new int[][]{{1, 1}, {1, 1}}", versteckt: true }
      - { aufruf: "zwiebel(6)[2]", erwartet: "new int[]{1, 2, 3, 3, 2, 1}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Stimmen nur die oberen und linken Ränder? Der Ring hängt vom Abstand zum **nächsten** der vier Ränder ab, also auch von `n - 1 - i` und `n - 1 - j`." }
hinweise:
  - Der Wert an der Stelle `[i][j]` ist 1 plus der Abstand zum nächstgelegenen Rand.
  - Die Abstände zu den vier Rändern sind `i`, `j`, `n - 1 - i` und `n - 1 - j`. Das kleinste davon bestimmt den Ring.
loesung: |
  **Ansatz:** Die Formel aus der Tabelle ablesen. Jede Stelle gehört zu dem Ring, dessen Rand ihr am nächsten liegt.
  ---
  Abstand nach oben: `i`. Nach links: `j`. Nach unten: `n - 1 - i`. Nach rechts: `n - 1 - j`. Der Ring ist das Minimum dieser vier Werte plus 1.
  ---
  ```java
  int[][] r = new int[n][n];
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          int abstand = Math.min(Math.min(i, j), Math.min(n - 1 - i, n - 1 - j));
          r[i][j] = abstand + 1;
      }
  }
  return r;
  ```
  ---
  Probe für `n = 5`, Stelle `[1][2]`: Abstände 1, 2, 3, 2. Das Minimum ist 1, also steht dort 2. In der Mitte `[2][2]` sind alle Abstände 2, dort steht 3.
```

```aufgabe
id: zd-pruef-feedback
titel: Zusatzfragen im Feedbackgespräch
niveau: 3
punkte: 4
lernziel: 3
kompetenz: begruenden
quelle: nach den Zusatzfragen von Aufgabenblatt 4 WS2023 (Referenzen, Kopie, Länge ändern), auf 2D-Arrays übertragen
angabe: |
  (Zeitrichtwert: 8 Minuten) Beantworte die Fragen so, wie du sie im Feedbackgespräch sagen würdest, in ganzen Sätzen.

  a) Deine Methode `void nachUnten(int[][] a)` hat kein `return`. Warum sieht `main` trotzdem die verschobenen Zeilen?

  b) Jemand kopiert ein Array mit `b[i] = a[i]` für jede Zeile. Warum ist das keine echte Kopie, und wie zeigst du das in `main` mit einer einzigen Ausgabe?

  c) Wie viele `int`-Werte kann `new int[4][][]` direkt nach der Deklaration aufnehmen, und warum?

  d) Warum kann man eine Zeile nicht verlängern, und was macht man stattdessen?
teile:
  - typ: text
    muster: |
      a) Der Parameter `a` bekommt eine Kopie des Verweises auf das äußere Array von `main`. Beide zeigen auf dasselbe
      äußere Array. Die Methode ändert die Plätze dieses Arrays, also worauf die Plätze zeigen. Darum sieht `main` die
      neue Reihenfolge. Nur eine Zuweisung `a = …` wäre für `main` unsichtbar.

      b) `b[i] = a[i]` kopiert nur den Verweis auf die Zeile. Beide Arrays teilen sich danach dieselben Zeilen, und eine
      Änderung über `b` ändert auch `a`. Zeigen kann man das mit `System.out.println(b[0] == a[0]);`. Die Ausgabe `true`
      heißt, dass es dieselbe Zeile ist. Für eine echte Kopie muss man jede Zeile mit `new` anlegen und elementweise
      befüllen.

      c) Null Werte. `new int[4][][]` legt nur das äußere Array mit vier Plätzen an, und jeder Platz ist `null`. Es gibt
      noch keine Zeile und damit keinen Platz für einen `int`-Wert.

      d) Die Länge eines Arrays wird beim Anlegen festgelegt und kann danach nicht mehr geändert werden. Man legt eine
      neue, längere Zeile an, kopiert die alten Werte hinein, ergänzt die neuen und setzt sie mit `a[i] = neu` an den
      Platz der alten Zeile.
hinweise:
  - Zeichne für a) und b) die Variablen mit Pfeilen auf das äußere Array und die Zeilen.
  - Für c) überlege, welche Arrays `new` bei leeren Klammern wirklich anlegt.
loesung: |
  **Ansatz:** Jede Antwort auf das Speicherbild zurückführen. Variablen enthalten Verweise, das äußere Array enthält Verweise auf Zeilen.
  ---
  a) Gemeinsames äußeres Array, die Methode ändert seine Plätze. b) Gemeinsame Zeilen, Nachweis mit `==`.
  ---
  c) Kapazität 0, weil die Plätze `null` sind. d) Feste Länge, darum neue Zeile anlegen und einsetzen.
  ---
  Im Gespräch zählt, dass du die Begriffe **Verweis**, **gemeinsames Array** und **feste Länge** von dir aus verwendest und mit einem Beispiel belegst.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Ein zweidimensionales Array ist ein Array von Zeilen. `a.length` ist die Zeilenzahl,
  `a[i].length` die Länge der Zeile `i`, und der Zugriff lautet immer `a[zeile][spalte]`. (2) Weil Zeilen eigene Arrays
  und die Plätze des äußeren Arrays Verweise sind, dürfen Zeilen verschieden lang oder `null` sein, man kann sie mit drei
  Zuweisungen tauschen, und `b[i] = a[i]` ist keine Kopie. (3) M1-Methoden bestimmen zuerst die Form, legen dann ein
  neues Array an und befüllen es. M2-Methoden ändern Elemente oder ersetzen Zeilen mit `a[i] = neu`, aber nie den
  Parameter selbst. Ebenso gute Antworten sind die Kapazitätsregel oder die drei Durchlaufmuster.
```

:::zusammenfassung
1. **Zweidimensionales Array:** ein Array, dessen Elemente Zeilen sind. Typ `int[][]`, Zugriff `a[zeile][spalte]`, Zeilenzahl `a.length`, Länge der Zeile `i` `a[i].length`. Ausgabe mit `Arrays.deepToString(a)`.
2. **Anlegen:** `new int[z][s]` legt `z` Zeilen mit je `s` Elementen an, gefüllt mit Standardwerten. Ein Initialisierer `{{…}, {…}}` geht nur in der Deklaration. `new int[z][]` legt nur das äußere Array an, alle Zeilen sind `null`.
3. **Durchlaufen:** zeilenweise mit `i < a.length` und `j < a[i].length` (funktioniert immer), spaltenweise nur bei gleich langen Zeilen, Diagonalen mit einer Schleife über `a[i][i]` oder `a[i][a.length - 1 - i]`. Sammelvariablen stehen vor der Schleife, über die gesammelt wird.
4. **Jagged Arrays:** Zeilen dürfen verschieden lang sein. Eine leere Zeile hat die Länge 0, eine fehlende Zeile ist `null` und führt beim Zugriff zur NullPointerException.
5. **Zeilen sind Verweise:** Zwei Plätze können auf dieselbe Zeile zeigen. `b[i] = a[i]` teilt die Zeile, eine echte Kopie braucht `new` und eine Kopierschleife. Zeilen tauscht man über eine Hilfsvariable vom Typ `int[]`, auch bei verschiedenen Längen.
6. **Kapazität:** Sind alle Größen angegeben, ist sie das Produkt der Größen, sonst 0. Größen von links nach rechts, die erste nie leer, nach einer leeren Klammer keine Größe mehr.
7. **M1 (neues Array):** Form bestimmen, äußeres Array anlegen, jede Zeile anlegen und befüllen, zurückgeben. Zeilen der Eingabe immer kopieren, nie übernehmen. Bei Zahlenmustern die Formel aus Zeilen- und Spaltenindex ablesen und an mehreren Stellen prüfen.
8. **M2 (an Ort und Stelle):** `void`, Elemente direkt ändern oder Zeilen mit `a[i] = neu` ersetzen. Zum Umordnen Verweise tauschen, beim Umdrehen nur bis zur Mitte. Nie `a = …`, denn das sieht der Aufrufer nicht. Randfälle immer mitdenken: leere Zeilen, eine Zeile, vertauschte Grenzen.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Zeile und Spalte vertauscht** (`a[j][i]` statt `a[i][j]`). Training: „Indizes aus Variablen“ in [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen).
2. **Spaltenzahl mit `a.length` statt `a[0].length` bestimmt.** Training: „Ein Notenfeld anlegen“ in [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen) und „Spaltensummen ergänzen“ in [14.2 Verschachtelte Schleifen über Zeilen und Spalten](/lernen/ep1/arrays-2d/verschachtelte-schleifen-ueber-zeilen-und-spalten).
3. **Sammelvariable in der äußeren Schleife zurückgesetzt** oder Maximum mit 0 statt mit dem ersten Element begonnen. Training: „Eine Gesamtsumme Schritt für Schritt“ und „Das Maximum jeder Zeile“ in [14.2 Verschachtelte Schleifen über Zeilen und Spalten](/lernen/ep1/arrays-2d/verschachtelte-schleifen-ueber-zeilen-und-spalten).
4. **`System.out.println(a)` oder `Arrays.toString(a)` statt `Arrays.deepToString(a)`.** Training: „Was prüft main im Programmiertest?“ in [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1).
5. **Zeilen nach `new int[n][]` nicht angelegt** (NullPointerException). Training: „Wo bricht das Programm ab?“ in [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays) und „Warum bricht diese M1-Lösung ab?“ in [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1).
6. **Leere Zeile und `null` verwechselt.** Training: „Leere Zeile oder null?“ und „Alle Elemente zählen, auch bei fehlenden Zeilen“ in [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays).
7. **`b[i] = a[i]` für eine Kopie gehalten.** Training: „Ist das eine echte Kopie?“ in [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays). Dazu „Eine tiefe Kopie ohne clone“ in [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1).
8. **Kapazität als Summe statt als Produkt** oder nach `new int[3][]` gleich Werte gespeichert. Training: „Wie viele Werte passen hinein?“ und „Kommentare zu Deklarationen beurteilen“ in [14.4 Deklaration und Kapazität mehrdimensionaler Arrays](/lernen/ep1/arrays-2d/deklaration-und-kapazitaet-mehrdimensionaler-arrays).
9. **Form des Ergebnisses nicht vorher bestimmt**, etwa die Länge nach der ersten statt der längsten Zeile. Training: „Auf Rechteckform auffüllen“ in [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1) und „M1: Eine Zeile mit Spaltensummen anhängen“ in [14.8 Prüfungsaufgaben](/lernen/ep1/arrays-2d/pruefungsaufgaben).
10. **Indexumrechnung zwischen Eingabe und Ergebnis falsch** (`r[i + k]` statt `r[2 * i + k]`, Rand vergessen). Training: „Ein Zeichenfeld einrahmen“ in [14.7 Gemischte Wiederholung](/lernen/ep1/arrays-2d/gemischte-wiederholung).
11. **In einer M2-Methode den Parameter neu zugewiesen** (`a = neu`). Training: „Was sieht main nach dem Aufruf?“ und „Welche Änderung bleibt unsichtbar?“ in [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2).
12. **Beim Umdrehen bis zum Ende statt bis zur Mitte getauscht.** Training: „Warum ändert sich nichts?“ und „Jede Zeile umdrehen“ in [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2).
13. **Zeilen im Kreis in der falschen Richtung verschoben**, sodass Zeilen überschrieben werden. Training: „Alle Zeilen eine Stelle nach unten“ in [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2).
14. **Randfälle vergessen:** leere Zeile, `von > bis`, Spalte außerhalb der Zeile. Training: „Zeilen zwischen zwei Indizes umdrehen“ und „Eine Spalte streichen“ in [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2). Dazu „Eine M2-Methode mit drei Fehlern reparieren“ in [14.7 Gemischte Wiederholung](/lernen/ep1/arrays-2d/gemischte-wiederholung).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Zweidimensionale Arrays anlegen und Elemente mit `a[i][j]`, `a.length` und `a[i].length` lesen und schreiben.
2. Zeilenweise, spaltenweise und diagonal durchlaufen und Summen, Zählungen und Extremwerte bestimmen.
3. Jagged Arrays mit leeren und fehlenden Zeilen sicher anlegen und durchlaufen.
4. Vorhersagen, welche Änderungen über gemeinsame Zeilen sichtbar werden, und Zeilen tauschen oder ersetzen.
5. Kapazität und Gültigkeit mehrdimensionaler Deklarationen bestimmen.
6. M1-Methoden schreiben, die ein neues Array erzeugen.
7. M2-Methoden schreiben, die ein Array an Ort und Stelle verändern.
8. Randfälle erkennen, Testfälle in `main` formulieren und fehlerhafte Lösungen reparieren.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber zu den Aufgabenblättern ein **Feedbackgespräch**.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Welche Fragen genau kommen, ist nicht veröffentlicht. Die
Zusatzfragen von Blatt 4 (WS2023) drehen sich um Referenzen, Kopien und die Länge von Arrays. Zu zweidimensionalen
Arrays passen darum Fragen wie „Warum ändert das das Original?“ oder „Wie wäre es, wenn die Zeilen verschieden lang
wären?“. Formuliere zuerst laut eine eigene Antwort in
ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: zd-karte-was-ist
  frage: Was ist ein zweidimensionales Array in Java, und was bedeuten a.length und a[i].length?
  antwort: |
    Ein zweidimensionales Array ist ein Array, dessen Elemente selbst Arrays sind, nämlich die Zeilen. Die Variable
    zeigt auf ein äußeres Array mit Verweisen auf diese Zeilen. `a.length` ist darum die Anzahl der Zeilen, und
    `a[i].length` ist die Länge der Zeile `i`. Ein Element erreicht man mit `a[i][j]`, zuerst die Zeile, dann die Spalte.
  kernpunkte:
    - Array von Zeilen
    - a.length gleich Zeilenzahl
    - a[i].length gleich Länge der Zeile i
- id: zd-karte-zugriff
  frage: Wie greifst du auf das Element rechts unten einer rechteckigen Tabelle zu, ohne ihre Größe zu kennen?
  antwort: |
    Mit `a[a.length - 1][a[0].length - 1]`. Der letzte Zeilenindex ist die Zeilenzahl minus 1, der letzte
    Spaltenindex die Länge einer Zeile minus 1. Bei einer rechteckigen Tabelle haben alle Zeilen dieselbe Länge, darum
    darf ich die Länge der Zeile 0 nehmen. Bei verschieden langen Zeilen bräuchte ich die Länge der letzten Zeile.
  kernpunkte:
    - letzter Index ist Länge minus 1
    - zuerst Zeile, dann Spalte
    - a[0].length nur bei rechteckig
- id: zd-karte-durchlauf
  frage: Wie durchläufst du alle Elemente eines zweidimensionalen Arrays, und warum steht innen a[i].length?
  antwort: |
    Mit zwei verschachtelten Schleifen. Die äußere läuft mit `i` von 0 bis `a.length - 1` über die Zeilen, die innere
    mit `j` von 0 bis `a[i].length - 1` über die Elemente der aktuellen Zeile. `a[i].length` nehme ich, weil die Zeilen
    verschieden lang sein können. Mit `a[0].length` würde ich bei längeren Zeilen Elemente übersehen und bei kürzeren
    eine ArrayIndexOutOfBoundsException bekommen.
  kernpunkte:
    - äußere Schleife über Zeilen
    - innere Schleife bis a[i].length
    - funktioniert auch bei jagged Arrays
- id: zd-karte-spaltenweise
  frage: Wann ist ein spaltenweiser Durchlauf sicher, und wie sieht er aus?
  antwort: |
    Spaltenweise heißt: außen läuft der Spaltenindex `j`, innen der Zeilenindex `i`, und der Zugriff bleibt `a[i][j]`.
    Die Grenze für `j` nehme ich aus `a[0].length`. Das ist nur sicher, wenn alle Zeilen gleich lang sind, also bei
    einer rechteckigen Tabelle. Sonst gibt es Spalten, die nicht in jeder Zeile vorkommen. Gebraucht wird es zum
    Beispiel für Spaltensummen.
  kernpunkte:
    - außen Spalte, innen Zeile
    - Zugriff bleibt a[i][j]
    - nur bei gleich langen Zeilen
- id: zd-karte-jagged
  frage: Was ist ein jagged Array, und wie legst du eines an?
  antwort: |
    Ein jagged Array ist ein zweidimensionales Array mit verschieden langen Zeilen. Das geht in Java, weil jede Zeile ein
    eigenes Array ist. Ich lege es mit einem Initialisierer wie `{{1}, {2, 3}, {}}` an oder mit `new int[3][]` und lege
    danach jede Zeile einzeln mit `a[i] = new int[laenge]` an. Ein Beispiel ist ein Zahlendreieck.
  kernpunkte:
    - Zeilen verschieden lang
    - jede Zeile ein eigenes Array
    - new int[n][] und dann jede Zeile anlegen
- id: zd-karte-null-leer
  frage: Was ist der Unterschied zwischen einer leeren Zeile und einer Zeile, die null ist?
  antwort: |
    Eine leere Zeile ist ein Array mit 0 Elementen. Sie existiert, `a[i].length` ist 0, und eine Schleife über sie läuft
    einfach nicht. Eine Zeile, die `null` ist, gibt es nicht. Schon `a[i].length` führt zu einer NullPointerException.
    `deepToString` zeigt die leere Zeile als `[]` und die fehlende als `null`. Nach `new int[3][]` sind alle Zeilen `null`.
  kernpunkte:
    - leer heißt Länge 0
    - null heißt kein Array
    - NullPointerException beim Zugriff
- id: zd-karte-kopie
  frage: Warum ist b[i] = a[i] für jede Zeile keine Kopie, und wie kopierst du richtig?
  antwort: |
    Die Plätze des äußeren Arrays enthalten Verweise. `b[i] = a[i]` kopiert nur den Verweis, beide Arrays teilen danach
    dieselben Zeilen. Eine Änderung über `b[i][j]` ändert auch `a`. Für eine echte, tiefe Kopie lege ich jede Zeile mit
    `new int[a[i].length]` neu an und kopiere Element für Element. Im Programmiertest geht es nicht anders, weil `clone`
    und `System.arraycopy` verboten sind.
  kernpunkte:
    - nur Verweis kopiert
    - gemeinsame Zeilen
    - jede Zeile neu anlegen und elementweise kopieren
- id: zd-karte-tauschen
  frage: Wie tauschst du zwei Zeilen, und warum geht das auch bei verschiedenen Längen?
  antwort: |
    Ich tausche die Verweise mit einer Hilfsvariable vom Typ `int[]`: `int[] tmp = a[0]; a[0] = a[2]; a[2] = tmp;`.
    Dabei wird kein Element bewegt, nur die Plätze im äußeren Array zeigen danach auf die jeweils andere Zeile. Darum
    spielt die Länge keine Rolle. Ein elementweiser Tausch würde bei verschieden langen Zeilen eine Exception auslösen.
  kernpunkte:
    - Hilfsvariable vom Typ int[]
    - nur Verweise werden getauscht
    - Länge spielt keine Rolle
- id: zd-karte-kapazitaet
  frage: Wie viele Werte kann new long[2][2][5] aufnehmen, und wie viele new int[4][]?
  antwort: |
    Sind alle Größen angegeben, ist die Kapazität das Produkt. `new long[2][2][5]` kann also 2 · 2 · 5 = 20 Werte
    aufnehmen. Bei `new int[4][]` fehlt die zweite Größe. Es entsteht nur das äußere Array mit vier Plätzen, die alle
    `null` sind. Direkt danach kann ich darin keinen einzigen `int`-Wert speichern, die Kapazität ist 0.
  kernpunkte:
    - Produkt der Größen
    - leere Klammer heißt Kapazität 0
    - Plätze sind null
- id: zd-karte-deklaration
  frage: Welche Deklarationen mehrdimensionaler Arrays lehnt der Compiler ab? Nenne Beispiele.
  antwort: |
    Die Größen müssen von links nach rechts angegeben werden. `new int[][3]` ist falsch, weil die erste Größe fehlt.
    `new int[2][][5]` ist falsch, weil nach einer leeren Klammer eine Größe folgt. Ein Initialisierer ohne `new` geht nur
    direkt in der Deklaration, später braucht es `new int[][]{…}`. Und Größe und Initialisierer zugleich, wie
    `new int[2][2]{{1, 2}, {3, 4}}`, sind nicht erlaubt.
  kernpunkte:
    - erste Größe nie leer
    - nach leerer Klammer keine Größe
    - Initialisierer ohne new nur in der Deklaration
- id: zd-karte-m1
  frage: Wie gehst du im Programmiertest bei einer M1-Methode vor, die ein neues Array liefert?
  antwort: |
    Zuerst bestimme ich die Form: wie viele Zeilen und wie lang jede Zeile wird. Oft brauche ich dafür einen eigenen
    Durchlauf, etwa für die längste Zeile. Dann lege ich das äußere Array an, danach jede Zeile, und befülle sie. Zeilen
    der Eingabe kopiere ich immer in neue Arrays, weil die Angabe eine Kopie verlangt. In `main` prüfe ich mit `==`, ob
    eine Zeile geteilt wird. Am Ende gebe
    ich das Array mit `return` zurück und gebe nichts aus.
  kernpunkte:
    - zuerst Form bestimmen
    - äußeres Array, dann jede Zeile
    - Eingabezeilen kopieren
- id: zd-karte-m2
  frage: Warum kann eine void-Methode das Array des Aufrufers verändern, und was darf sie dabei nicht tun?
  antwort: |
    Der Parameter bekommt eine Kopie des Verweises, wie jeder Parameter in Java. Beide Verweise zeigen auf dasselbe
    äußere Array. Wenn die Methode Elemente ändert oder mit `a[i] = neu` eine Zeile ersetzt, ändert sie dieses gemeinsame
    Array, und der Aufrufer sieht es. Sie darf aber nicht `a = …` schreiben. Das ändert nur ihre eigene Variable, und
    der Aufrufer sieht davon nichts.
  kernpunkte:
    - Kopie des Verweises
    - gemeinsames äußeres Array
    - a gleich neu bleibt unsichtbar
- id: zd-karte-laenge
  frage: Wie verlängerst oder kürzt du eine Zeile in einer M2-Methode?
  antwort: |
    Die Länge eines Arrays steht beim Anlegen fest und lässt sich nicht ändern, `length` kann man nur lesen. Ich lege
    darum eine neue Zeile mit der passenden Länge an und kopiere die Elemente hinein. Beim Entfernen brauche ich einen
    zweiten Index für die neue Zeile. Am Ende setze ich die neue Zeile mit `a[i] = neu` an den Platz der alten.
  kernpunkte:
    - Länge ist fest
    - neue Zeile anlegen und kopieren
    - mit a[i] gleich neu einsetzen
- id: zd-karte-umdrehen
  frage: Warum läuft die Schleife beim Umdrehen nur bis zur Mitte?
  antwort: |
    Jeder Tausch bringt zwei Elemente oder zwei Zeilen gleichzeitig an ihren Platz, eines von vorne und eines von
    hinten. Nach der Hälfte sind alle Paare getauscht. Liefe die Schleife weiter, würde sie jedes Paar ein zweites Mal
    tauschen und damit zurücktauschen. Am Ende sähe alles aus wie vorher. Die Grenze ist darum `länge / 2`, bei
    ungerader Länge bleibt das mittlere Element stehen.
  kernpunkte:
    - jeder Tausch erledigt ein Paar
    - über die Mitte hinaus wird zurückgetauscht
    - Grenze länge durch 2
- id: zd-karte-randfaelle
  frage: Welche Randfälle prüfst du bei einer Methode auf zweidimensionalen Arrays, bevor du sie abgibst?
  antwort: |
    Ich prüfe ein Array ohne Zeilen, eine einzige Zeile, leere Zeilen und verschieden lange Zeilen. Dazu kommen die
    Parameter. Grenzen können vertauscht sein, wie `von > bis`, oder gleich, und ein Index kann außerhalb einer Zeile
    liegen. In `main` schreibe ich für jeden Randfall einen Testfall mit `Arrays.deepToString` und, wo es um Kopien
    geht, einen Vergleich mit `==`.
  kernpunkte:
    - leeres Array, leere Zeile, eine Zeile
    - vertauschte oder gleiche Grenzen
    - Testfälle mit deepToString und ==
- id: zd-karte-verbindung
  frage: Was haben zweidimensionale Arrays mit Konsolenmustern und mit der Referenzsemantik eindimensionaler Arrays zu tun?
  antwort: |
    Die verschachtelten Schleifen sind dieselben wie bei den Konsolenmustern aus
    [5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen): außen die Zeilen, innen die Spalten, am
    Zeilenende ein Zeilenumbruch. Statt ein Zeichen auszugeben, liest oder schreibt man jetzt `a[i][j]`. Die
    Referenzsemantik aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array) gilt eine Ebene tiefer weiter. Die Plätze des äußeren Arrays sind Verweise. Darum
    teilen sich Arrays Zeilen, und darum kann eine Methode ohne Rückgabe Zeilen ersetzen.
  kernpunkte:
    - gleiche Schleifenstruktur wie Konsolenmuster
    - Referenzsemantik eine Ebene tiefer
    - Zeilen teilen und ersetzen
```
