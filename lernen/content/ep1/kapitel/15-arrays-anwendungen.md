---
nummer: 15
titel: "2D-Anwendungen: Sudoku, Bilder, Flood-Fill"
kurz: Zweidimensionale Arrays in echten Aufgaben. Nachbarn im Raster, ein Sudoku-Prüfer, Bildfilter, das rekursive Füllen von Flächen und die Simulation von Feuer und Fluss, so wie Aufgabenblatt 5 sie verlangt.
teil: arrays
stunden: 5
pruefungsgewicht: 1
voraussetzungen: [schleifen, methoden, rekursion, arrays, arrays-2d]
lernziele:
  - eine Zelle eines zweidimensionalen Rasters über Zeile und Spalte ansprechen, ihre Nachbarn bestimmen und mit einer Randprüfung ohne ArrayIndexOutOfBoundsException durchlaufen
  - für ein 9×9-Sudoku prüfen, ob eine Zahl in einer Zeile, einer Spalte oder einem 3×3-Block vorkommt, und die Startzeile und Startspalte eines Blocks berechnen
  - eine vollständig ausgefüllte Sudoku-Lösung mit Zeilen-, Spalten- und Blockprüfung auf Gültigkeit testen
  - Bildfilter (Invertieren, Schwellwert, Mittelwert, Faltung mit einer Filtermaske) auf Graubilder anwenden und dabei ein neues Ergebnis-Array und die richtige Randbehandlung verwenden
  - den Flood-Fill-Algorithmus rekursiv mit den drei Basisfällen „außerhalb“, „schon gefüllt“ und „passt nicht“ schreiben und seinen Ablauf verfolgen
  - Flood-Fill mit einem Schwellwert auf Graubilder anwenden und die Größe und Anzahl zusammenhängender Flächen bestimmen
  - Simulationen auf einer Landkarte (Feuer, Fluss) rekursiv umsetzen und ihr Ergebnis für eine gegebene Karte vorhersagen
  - Fehler in 2D-Anwendungen erkennen und reparieren, etwa vertauschte Zeile und Spalte, eine fehlende Randprüfung, einen Filter, der sein eigenes Ergebnis liest, oder eine fehlende Markierung
---

**Worum geht es?** Ein zweidimensionales Array ist eine Tabelle aus Zeilen und Spalten, in der jede Zelle einen
Wert hat. Das kennst du aus
[14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen). In diesem Kapitel benutzt du solche Tabellen für Dinge, die
man sich vorstellen kann. Ein **Sudoku** ist eine 9×9-Tabelle mit Zahlen. Ein **Graubild** ist eine Tabelle, in der
jede Zelle die Helligkeit eines Bildpunkts speichert. Eine **Landkarte** ist eine Tabelle aus Wiese, Fels und Wasser.

Für alle drei Anwendungen brauchst du dieselben wenigen Werkzeuge:

- Du sprichst eine Zelle über ihre **Zeile** und ihre **Spalte** an.
- Du findest die **Nachbarn** einer Zelle, also die Zellen darüber, darunter, links und rechts davon.
- Du passt am **Rand** der Tabelle auf, damit du nicht auf eine Zelle zugreifst, die es nicht gibt.
- Für das Füllen von Flächen brauchst du die **Rekursion** aus
  [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).

Ein Bild aus dem Alltag: Im Malprogramm klickst du mit dem Farbeimer in eine weiße Fläche, und die ganze Fläche
wird rot. Das Programm färbt dabei nicht das ganze Bild, sondern nur die Punkte, die mit dem angeklickten Punkt
**zusammenhängen**. Wie das in wenigen Zeilen Java geht, lernst du in diesem Kapitel. Der Algorithmus heißt
**Flood-Fill**, auf Deutsch etwa „Flutfüllung“.

**Was kommt in der Prüfung?**

- **Aufgabenblatt 5:** In Aufgabe 3 schreibst du einen **Sudoku-Prüfer** mit Hilfsmethoden für Zeile, Spalte und
  3×3-Block. In Aufgabe 4 schreibst du **Flood-Fill** auf einem Graubild einer Weltkarte, rekursiv und mit einem
  Schwellwert. Frühere Jahrgänge hatten auf diesem Blatt Bildfilter (Mittelwertfilter, Faltung, Suche nach einem
  Bildausschnitt) und die Simulation von Feuer und Fluss auf einer Landkarte.
- **Feedbackgespräch:** Dort zeigst du, dass du deine eigene Abgabe verstehst. Mögliche Fragen sind etwa, warum
  Flood-Fill endet, warum ein Filter ein neues Array braucht oder wie man den Block einer Sudoku-Zelle findet.
- **Programmiertest und Quiz:** In den Tests der Vorjahre, die uns vorliegen, kommt kein ganzes Sudoku vor. Die
  Werkzeuge dieses Kapitels (Randprüfung,
  Nachbarn, neues Ergebnis-Array, Rekursion mit Zeile und Spalte) brauchst du aber für jede Aufgabe mit
  zweidimensionalen Arrays.

Dieses Kapitel hat das Prüfungsgewicht 1. Es bringt keinen neuen Java-Befehl. Es übt das Zusammenspiel der Dinge,
die du schon kennst, an größeren Aufgaben. Genau das verlangt Blatt 5. Das Abschlussprojekt baut darauf auf, etwa
mit [16.3 Richtungen und Nachbarfelder](/lernen/ep1/projekt/richtungen-und-nachbarfelder) im Spiel Sokoban.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Zweidimensionale Arrays** aus
  [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen):
  `feld[z][s]` ist die Zelle in Zeile `z` und Spalte `s`. `feld.length` ist die Anzahl der Zeilen, `feld[z].length`
  die Länge der Zeile `z`.
- **Arrays als Referenzen** aus
  [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert): Eine
  Methode, die ein Array als Parameter bekommt, kann seinen Inhalt verändern.
- **Verschachtelte Schleifen** aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
- **Rekursion** aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf):
  Basisfall, Fortschritt und der `StackOverflowError`.
- **Ganzzahldivision** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen) und die
  **Kurzschlussauswertung** von `&&` aus
  [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).

Die folgenden Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: aw-ein-laengen
titel: Zeilen und Spalten zählen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen))
teile:
  - typ: ausgabe
    code: |
      int[][] feld = {
          {4, 0, 7},
          {1, 9, 2},
          {8, 3, 5},
          {6, 6, 0}
      };
      System.out.println(feld.length);
      System.out.println(feld[0].length);
      System.out.println(feld[2][1]);
      System.out.println(feld[1][2]);
    loesung: |
      4
      3
      3
      2
    fehler:
      - wert: "3\n4\n3\n2"
        meldung: '`feld.length` zählt die **Zeilen**, also die inneren Arrays. Davon gibt es vier. `feld[0].length` ist die Länge der ersten Zeile, also 3.'
      - wert: "4\n3\n2\n3"
        meldung: 'Der erste Index ist die Zeile, der zweite die Spalte. `feld[2][1]` ist Zeile 2 (die dritte Zeile `{8, 3, 5}`), dort Spalte 1, also 3.'
hinweise:
  - Zähle Zeilen und Spalten ab 0. Der erste Index wählt die Zeile, der zweite die Stelle in dieser Zeile.
loesung: |
  `feld` hat vier innere Arrays, also 4 Zeilen. Die erste Zeile `{4, 0, 7}` hat 3 Einträge.
  ---
  `feld[2]` ist die dritte Zeile `{8, 3, 5}`, davon Index 1: `3`. `feld[1]` ist `{1, 9, 2}`, davon Index 2: `2`.
```

```aufgabe
id: aw-ein-doppelschleife
titel: Eine Tabelle zeilenweise durchlaufen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: ausgabe
    code: |
      int[][] feld = {
          {1, 2, 3},
          {4, 5, 6}
      };
      int summe = 0;
      for (int z = 0; z < feld.length; z++) {
          for (int s = 0; s < feld[z].length; s++) {
              if (s == z) {
                  summe = summe + feld[z][s];
              }
          }
      }
      System.out.println(summe);
    loesung: |
      6
    fehler:
      - wert: "21"
        meldung: Die Summe enthält nicht alle Einträge. Das `if` lässt nur Zellen durch, bei denen Zeile und Spalte gleich sind.
      - wert: "10"
        meldung: 'Die Bedingung ist `s == z`, nicht `s <= z`. Die Zelle `(1, 0)` mit dem Wert 4 zählt nicht mit, nur `(0, 0)` und `(1, 1)`.'
hinweise:
  - Schreib alle Paare (z, s) auf, die die Schleifen erzeugen, und markiere die mit `s == z`.
loesung: |
  Die äußere Schleife läuft über die Zeilen 0 und 1, die innere über die Spalten 0, 1, 2.
  ---
  Nur (0, 0) und (1, 1) erfüllen `s == z`. Die Werte sind 1 und 5, die Summe ist 6.
```

```aufgabe
id: aw-ein-kurzschluss
titel: Wann wird der zweite Teil ausgewertet?
niveau: 1
art: check
angabe: |
  Welche Aussage über `if (i < a.length && a[i] > 0)` stimmt, wenn `a` drei Einträge hat und `i` den Wert 3 hat?
  (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: auswahl
    optionen:
      - Die Bedingung ist falsch, und `a[3]` wird nie gelesen.
      - Java wirft eine `ArrayIndexOutOfBoundsException`, weil `a[3]` nicht existiert.
      - Die Bedingung ist wahr, weil `a[3]` den Standardwert 0 hat.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`&&` wertet den rechten Teil nur aus, wenn der linke wahr ist. `3 < 3` ist falsch, also wird `a[3]` gar nicht angefasst.'
      - wert: 2
        meldung: Ein Array mit drei Einträgen hat nur die Indizes 0, 1 und 2. Einen Eintrag `a[3]` gibt es nicht, auch nicht mit Standardwert.
hinweise:
  - Bei `&&` steht das Ergebnis fest, sobald der linke Teil falsch ist.
loesung: |
  `i < a.length` ist `3 < 3`, also falsch. Damit ist die ganze Bedingung falsch.
  ---
  Wegen der Kurzschlussauswertung prüft Java den rechten Teil `a[i] > 0` nicht mehr. Es gibt keine Exception.
```

```aufgabe
id: aw-ein-rekursion
titel: Eine kleine Rekursion
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: ausgabe
    code: |
      public class Zaehle {
          public static int z(int n) {
              if (n <= 0) {
                  return 0;
              }
              System.out.println(n);
              return 1 + z(n - 3);
          }

          public static void main(String[] args) {
              System.out.println("Ergebnis " + z(7));
          }
      }
    loesung: |
      7
      4
      1
      Ergebnis 3
    fehler:
      - wert: "7\n4\n1\nErgebnis 12"
        meldung: '`z` zählt die Aufrufe, die eine Zahl ausgeben. Jeder davon addiert 1, nicht `n`.'
      - wert: "7\n4\n1\n-2\nErgebnis 3"
        meldung: 'Bei `n = -2` greift der Basisfall `n <= 0`. Er gibt nichts aus, sondern liefert sofort 0.'
hinweise:
  - Schreib die Werte von `n` für jeden Aufruf auf, bis `n <= 0` gilt.
loesung: |
  Die Aufrufe haben `n = 7, 4, 1, -2`. Die ersten drei geben ihre Zahl aus, der vierte ist der Basisfall.
  ---
  Rückgabe: `1 + 1 + 1 + 0 = 3`. Erst danach druckt `main` die Zeile `Ergebnis 3`.
```

```aufgabe
id: aw-ein-referenz
titel: Eine Methode verändert ein Array
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      public class Ref {
          public static void markiere(int[][] f) {
              f[0][1] = -1;
          }

          public static void main(String[] args) {
              int[][] bild = {{5, 5}, {5, 5}};
              markiere(bild);
              System.out.println(bild[0][1]);
          }
      }
    loesung: |
      -1
    fehler:
      - wert: "5"
        meldung: Die Methode bekommt eine Kopie der **Referenz**, nicht eine Kopie des Arrays. `f` und `bild` zeigen auf dasselbe Array, also sieht `main` die Änderung.
hinweise:
  - Ein Array-Parameter zeigt auf dasselbe Array wie die Variable des Aufrufers.
loesung: |
  `markiere(bild)` übergibt die Referenz auf das Array. `f` zeigt also auf dasselbe Array wie `bild`.
  ---
  Die Zuweisung `f[0][1] = -1` ändert dieses eine Array. `main` gibt `-1` aus.
```

```aufgabe
id: aw-ein-division
titel: Ein Durchschnitt mit ganzen Zahlen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int summe = 10 + 20 + 25;
      System.out.println(summe / 3);
      System.out.println(17 / 3 * 3);
      System.out.println(8 / 3 * 3);
    loesung: |
      18
      15
      6
    fehler:
      - wert: "18.333333333333332\n15\n6"
        meldung: '`summe / 3` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg, es bleibt 18.'
      - wert: "18\n17\n8"
        meldung: 'Java rechnet von links nach rechts: zuerst `17 / 3 = 5` (ganzzahlig), dann `5 * 3 = 15`. Die Division schneidet den Rest ab, die Multiplikation bringt ihn nicht zurück.'
hinweise:
  - Bei `int / int` fällt der Nachkommaanteil weg. `/` und `*` werden von links nach rechts ausgewertet.
loesung: |
  `55 / 3` ist 18, denn 3 passt 18-mal in 55, der Rest 1 fällt weg.
  ---
  `17 / 3 * 3` ist `5 * 3 = 15`, und `8 / 3 * 3` ist `2 * 3 = 6`. So rundet man auf ein Vielfaches von 3 ab. Das brauchst du gleich beim Sudoku.
```

## Nachbarn im Raster: Richtungen und Randprüfung

```aufgabe
id: aw-nb-check-zeile
titel: Welcher Index ist die Zeile?
niveau: 1
art: check
angabe: |
  In [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen) hast du zweidimensionale Arrays kennengelernt. Gegeben ist
  `int[][] feld = new int[3][5];`. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - '`feld` hat 3 Zeilen mit je 5 Einträgen. `feld[2][4]` ist die Zelle rechts unten.'
      - '`feld` hat 5 Zeilen mit je 3 Einträgen. `feld[4][2]` ist die Zelle rechts unten.'
      - '`feld` hat 3 Zeilen mit je 5 Einträgen. `feld[3][5]` ist die Zelle rechts unten.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die erste Zahl in `new int[3][5]` ist die Anzahl der Zeilen, die zweite die Anzahl der Einträge pro Zeile.
      - wert: 2
        meldung: Indizes beginnen bei 0. Bei 3 Zeilen ist der größte Zeilenindex 2, bei 5 Spalten der größte Spaltenindex 4.
loesung: |
  `new int[3][5]` legt 3 Zeilen an, jede mit 5 Einträgen.
  ---
  Der letzte Zeilenindex ist `3 - 1 = 2`, der letzte Spaltenindex `5 - 1 = 4`. Rechts unten liegt also `feld[2][4]`.
```

Alle Anwendungen dieses Kapitels arbeiten auf einem **Raster**. So nennen wir ein zweidimensionales Array, bei dem
wir uns die Einträge als Kästchen auf kariertem Papier vorstellen. Ein Sudoku, ein Bild und eine Landkarte sind
solche Raster. Jedes Kästchen heißt **Zelle**. Eine Zelle hat zwei Koordinaten:

- die **Zeile** `z`. Sie zählt von oben nach unten, die oberste Zeile hat die Nummer 0.
- die **Spalte** `s`. Sie zählt von links nach rechts, die linke Spalte hat die Nummer 0.

In Java schreibst du die Zelle als `feld[z][s]`. Zuerst kommt immer die Zeile, dann die Spalte. Für ein Raster mit
3 Zeilen und 4 Spalten sehen die Koordinaten so aus:

```
           Spalte 0   Spalte 1   Spalte 2   Spalte 3
Zeile 0    (0, 0)     (0, 1)     (0, 2)     (0, 3)
Zeile 1    (1, 0)     (1, 1)     (1, 2)     (1, 3)
Zeile 2    (2, 0)     (2, 1)     (2, 2)     (2, 3)
```

Wichtig ist die Richtung. Wenn `z` größer wird, gehst du **nach unten**. Wenn `s` größer wird, gehst du **nach
rechts**. Das ist anders als in der Mathematik, wo die y-Achse nach oben zeigt.

Viele Aufgaben fragen nach den **Nachbarn** einer Zelle. Das sind die Zellen, die direkt an sie angrenzen. Die
Nachbarn der Zelle `(z, s)` findest du, indem du 1 zur Zeile oder Spalte addierst oder 1 abziehst:

- **oben:** `(z - 1, s)`, eine Zeile höher, gleiche Spalte.
- **unten:** `(z + 1, s)`, eine Zeile tiefer.
- **links:** `(z, s - 1)`, gleiche Zeile, eine Spalte nach links.
- **rechts:** `(z, s + 1)`, eine Spalte nach rechts.

:::beispiel[Die vier Nachbarn einer Zelle ausgeben]
```java
int[][] feld = {
    {3, 8, 1, 6},
    {7, 2, 9, 4},
    {5, 0, 6, 2}
};
int z = 1;
int s = 2;
System.out.println("oben:   " + feld[z - 1][s]);
System.out.println("unten:  " + feld[z + 1][s]);
System.out.println("links:  " + feld[z][s - 1]);
System.out.println("rechts: " + feld[z][s + 1]);
```

- Die Zelle `(1, 2)` liegt in der mittleren Zeile, dritte Spalte. Ihr Wert ist `9`.
- `feld[z - 1][s]` ist `feld[0][2]`, also die Zelle direkt über der 9. Dort steht `1`.
- `feld[z + 1][s]` ist `feld[2][2]`, die Zelle darunter, mit dem Wert `6`.
- `feld[z][s - 1]` ist `feld[1][1]` mit `2`, und `feld[z][s + 1]` ist `feld[1][3]` mit `4`.

Die Ausgabe ist

```
oben:   1
unten:  6
links:  2
rechts: 4
```
:::

```aufgabe
id: aw-nb-ausgabe-nachbarn
titel: Die Nachbarn einer Zelle ablesen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] feld = {
          {2, 7, 4},
          {9, 1, 8},
          {6, 3, 5},
          {0, 4, 2}
      };
      int z = 2;
      int s = 1;
      System.out.println(feld[z - 1][s] + " " + feld[z + 1][s] + " " + feld[z][s - 1] + " " + feld[z][s + 1]);
    loesung: |
      1 4 6 5
    fehler:
      - wert: "4 1 6 5"
        meldung: 'Oben und unten sind vertauscht. Im Array wächst die Zeilennummer **nach unten**. `z - 1` ist also die Zeile darüber, hier Zeile 1 mit dem Wert 1.'
      - wert: "1 4 5 6"
        meldung: 'Links und rechts sind vertauscht. `s - 1` ist die Spalte links, hier Spalte 0 mit dem Wert 6.'
hinweise:
  - Die Zelle `(2, 1)` hat den Wert 3. Suche die Zellen direkt darüber, darunter, links und rechts.
loesung: |
  **Ansatz:** Jede der vier Koordinaten ausrechnen und im Feld nachschlagen.
  ---
  Oben ist `feld[1][1] = 1`, unten `feld[3][1] = 4`, links `feld[2][0] = 6`, rechts `feld[2][2] = 5`.
  ---
  Die Werte werden mit Leerzeichen verkettet. Ausgabe `1 4 6 5`.
```

### Das Problem am Rand

Die Zelle `(1, 2)` im Beispiel liegt mitten im Raster. Was passiert bei einer Zelle am Rand? Die Zelle `(0, 0)`
links oben hat keine Zelle darüber. Der Ausdruck `feld[z - 1][s]` wird zu `feld[-1][0]`. Einen Index `-1` gibt es
nicht. Java bricht mit einer **`ArrayIndexOutOfBoundsException`** ab, einer Ausnahme, die „Index außerhalb der
Grenzen“ bedeutet.

Darum prüfst du vor jedem Zugriff auf einen Nachbarn, ob er überhaupt im Raster liegt. Diese Prüfung heißt
**Randprüfung**. Eine Zelle `(z, s)` liegt im Raster, wenn vier Dinge gelten:

1. `z >= 0`: Die Zeile ist nicht über der obersten Zeile.
2. `z < feld.length`: Die Zeile ist nicht unter der untersten Zeile. Die größte gültige Zeile ist `feld.length - 1`.
3. `s >= 0`: Die Spalte ist nicht links vom Rand.
4. `s < feld[z].length`: Die Spalte ist nicht rechts vom Rand.

In Java fasst man das in eine kleine Methode, die `true` oder `false` liefert:

```java
public static boolean istImFeld(int[][] feld, int z, int s) {
    return z >= 0 && z < feld.length && s >= 0 && s < feld[z].length;
}
```

Die **Reihenfolge** in dieser Bedingung ist kein Zufall. Der Teil `feld[z].length` liest die Zeile `z`. Das geht nur,
wenn `z` schon als gültig geprüft ist. Bei `&&` wertet Java von links nach rechts aus und hört beim ersten falschen
Teil auf. Das ist die **Kurzschlussauswertung**. Ist `z` ungültig, kommt Java gar nicht bis `feld[z].length`.

:::achtung[Nachbarn ohne Randprüfung]
Eine Mitschülerin will die Summe der vier Nachbarn bilden und schreibt

```java
int summe = feld[z - 1][s] + feld[z + 1][s] + feld[z][s - 1] + feld[z][s + 1];
```

Für die Zelle `(1, 2)` im Beispiel funktioniert das: `1 + 6 + 2 + 4 = 13`. Für `(0, 0)` bricht das Programm aber
ab mit

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 3
```

Darunter folgen noch Zeilen, die mit `at` beginnen und zeigen, wo der Fehler passiert ist. Die Meldung heißt: Der Index `-1` liegt außerhalb eines Arrays der Länge 3 (das äußere Array hat 3 Zeilen). Die
Reparatur: jeden Nachbarn einzeln mit `istImFeld` prüfen und nur dann addieren.
:::

```aufgabe
id: aw-nb-rf-begriffe
titel: Aussagen über Raster und Nachbarn
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage. Das Feld ist `int[][] feld = new int[3][5];`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`feld[z - 1][s]` ist der Nachbar **oberhalb** der Zelle `(z, s)`.'
        richtig: true
        erklaerung: Die Zeilennummer wächst nach unten. Eine Zeile weniger ist eine Zeile höher.
      - text: Von den vier Nachbarn oben, unten, links und rechts liegen bei der Zelle `(0, 0)` alle vier im Feld.
        richtig: false
        erklaerung: Links und oben gibt es keine Zellen. Nur `(0, 1)` und `(1, 0)` liegen im Feld.
      - text: '`feld[4][2]` ist eine gültige Zelle.'
        richtig: false
        erklaerung: Das Feld hat nur die Zeilen 0 bis 2. Zeile 4 gibt es nicht, nur Spalte 4.
      - text: '`istImFeld(feld, 2, 4)` liefert `true`.'
        richtig: true
        erklaerung: Zeile 2 ist die letzte Zeile, Spalte 4 die letzte Spalte. Beide sind gültig.
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Bei `feld[4][2]` ist der erste Index die Zeile. Das Feld hat aber nur 3 Zeilen.'
      - wert: [f, f, f, r]
        meldung: Im Array zeigt die Zeilennummer nach unten. `z - 1` ist darum die Zeile **über** der Zelle.
hinweise:
  - Zeichne das Feld mit 3 Zeilen und 5 Spalten auf und trage die Zellen ein.
loesung: |
  **Ansatz:** Gültig sind die Zeilen 0 bis 2 und die Spalten 0 bis 4. Die Zeilennummer wächst nach unten.
  ---
  Aussage 1 und 4 sind richtig. Aussage 2 ist falsch (die Ecke hat nur 2 Nachbarn), Aussage 3 auch (Zeile 4 fehlt).
```


:::definition[Vierer- und Achter-Nachbarschaft]
Die **Vierer-Nachbarschaft** einer Zelle besteht aus den Zellen oben, unten, links und rechts. Diese Zellen teilen
eine ganze Kante mit ihr.

Die **Achter-Nachbarschaft** enthält zusätzlich die vier Zellen schräg daneben. Das sind `(z - 1, s - 1)`,
`(z - 1, s + 1)`, `(z + 1, s - 1)` und `(z + 1, s + 1)`. Diese Zellen berühren die Zelle nur an einer Ecke.

Die Zelle selbst gehört **nicht** zu ihrer Nachbarschaft.
:::

**Beispiel:** Im Feld mit 3 Zeilen und 4 Spalten hat die Zelle `(1, 1)` vier Nachbarn in der Vierer-Nachbarschaft und
acht in der Achter-Nachbarschaft. Alle liegen im Feld.

**Kein Beispiel:** Die Zelle `(2, 3)` ist **kein** Nachbar von `(1, 1)`, auch nicht in der Achter-Nachbarschaft. Sie
liegt eine Zeile tiefer, aber zwei Spalten weiter rechts.

```aufgabe
id: aw-nb-zahl-anzahl
titel: Wie viele Nachbarn liegen im Feld?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Raster hat 5 Zeilen und 7 Spalten. Wie viele Nachbarn der angegebenen Zelle liegen **im Feld**?
teile:
  - typ: zahl
    label: a) Vierer-Nachbarschaft der Ecke (0, 0)
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: Die Ecke hat keinen Nachbarn oben und keinen links. Nur rechts `(0, 1)` und unten `(1, 0)` liegen im Feld.
  - typ: zahl
    label: b) Vierer-Nachbarschaft der Randzelle (0, 3)
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: Die Zelle liegt in der obersten Zeile. Der Nachbar oben `(-1, 3)` existiert nicht.
  - typ: zahl
    label: c) Achter-Nachbarschaft der Ecke (4, 6)
    loesung: "3"
    fehler:
      - wert: "8"
        meldung: Rechts unten fehlen alle Nachbarn mit Zeile 5 oder Spalte 7. Übrig bleiben `(3, 5)`, `(3, 6)` und `(4, 5)`.
      - wert: "2"
        meldung: In der Achter-Nachbarschaft zählt auch die schräge Zelle `(3, 5)` mit.
  - typ: zahl
    label: d) Achter-Nachbarschaft der Randzelle (2, 0)
    loesung: "5"
    fehler:
      - wert: "8"
        meldung: Die Zelle liegt in Spalte 0. Alle drei Nachbarn mit Spalte -1 fehlen.
      - wert: "3"
        meldung: Das ist die Vierer-Nachbarschaft. In der Achter-Nachbarschaft kommen die schrägen Zellen `(1, 1)` und `(3, 1)` dazu.
hinweise:
  - Schreib alle Nachbarkoordinaten auf und streiche die, bei denen eine Koordinate -1 ist, die Zeile 5 erreicht oder die Spalte 7 erreicht.
loesung: |
  **Ansatz:** Die gültigen Zeilen sind 0 bis 4, die gültigen Spalten 0 bis 6. Alle Nachbarn aufschreiben und die ungültigen streichen.
  ---
  a) `(0, 1)` und `(1, 0)`: 2. b) `(1, 3)`, `(0, 2)` und `(0, 4)`: 3.
  ---
  c) `(3, 5)`, `(3, 6)` und `(4, 5)`: 3. d) `(1, 0)`, `(3, 0)`, `(2, 1)`, `(1, 1)` und `(3, 1)`: 5.
  ---
  Merke: Eine Ecke hat 2 beziehungsweise 3 Nachbarn, eine Randzelle (keine Ecke) 3 beziehungsweise 5, eine innere Zelle 4 beziehungsweise 8.
```

### Nachbarn mit einer Schleife durchgehen

Vier oder acht fast gleiche `if`-Blöcke sind mühsam und fehleranfällig. Eleganter sind zwei kleine Arrays, die für
jede Richtung angeben, wie sich Zeile und Spalte ändern. Man nennt sie **Richtungs-Arrays**. Für die Vierer-
Nachbarschaft lauten sie

```java
int[] dz = {-1, 1, 0, 0};   // Änderung der Zeile: oben, unten, links, rechts
int[] ds = {0, 0, -1, 1};   // Änderung der Spalte
```

Der Name `dz` steht für „Differenz der Zeile“. Für Richtung `k` ist der Nachbar `(z + dz[k], s + ds[k])`. Bei `k = 0`
ist das `(z - 1, s)`, also oben. Bei `k = 3` ist es `(z, s + 1)`, also rechts. Eine einzige Schleife über `k` geht
damit alle Richtungen durch.

:::beispiel[Minen in der Umgebung zählen]
Im Spiel Minesweeper zeigt ein Feld an, wie viele Minen in den acht umliegenden Feldern liegen. Ein `'*'` ist eine
Mine, ein `'.'` ein freies Feld.

```java
public class Minen {
    public static boolean istImFeld(char[][] feld, int z, int s) {
        return z >= 0 && z < feld.length && s >= 0 && s < feld[z].length;
    }

    public static int zaehleMinen(char[][] feld, int z, int s) {
        int[] dz = {-1, -1, -1, 0, 0, 1, 1, 1};
        int[] ds = {-1, 0, 1, -1, 1, -1, 0, 1};
        int anzahl = 0;
        for (int k = 0; k < 8; k++) {
            int nz = z + dz[k];
            int ns = s + ds[k];
            if (istImFeld(feld, nz, ns) && feld[nz][ns] == '*') {
                anzahl++;
            }
        }
        return anzahl;
    }

    public static void main(String[] args) {
        char[][] feld = {
            {'*', '.', '.', '.'},
            {'.', '.', '*', '.'},
            {'*', '.', '.', '*'}
        };
        System.out.println(zaehleMinen(feld, 1, 1));
        System.out.println(zaehleMinen(feld, 0, 3));
    }
}
```

- `dz` und `ds` beschreiben die acht Richtungen. Das Paar `(-1, -1)` ist links oben, `(1, 1)` rechts unten. Das Paar `(0, 0)` fehlt, denn die Zelle selbst ist kein Nachbar.
- `nz` und `ns` sind die Koordinaten des Nachbarn in Richtung `k`.
- Die Bedingung prüft zuerst mit `istImFeld`, ob der Nachbar existiert. Nur dann liest sie `feld[nz][ns]`.

Für `(1, 1)` liegen alle acht Nachbarn im Feld. Minen stehen bei `(0, 0)`, `(1, 2)` und `(2, 0)`. Die erste Ausgabe
ist `3`. Für die Ecke `(0, 3)` liegen nur `(0, 2)`, `(1, 2)` und `(1, 3)` im Feld, davon ist `(1, 2)` eine Mine. Die
zweite Ausgabe ist `1`.
:::

```aufgabe
id: aw-nb-gefuehrt-minen
titel: Minen zählen in einem anderen Feld
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Methoden `istImFeld` und `zaehleMinen` sind dieselben wie im Beispiel „Minen in der Umgebung zählen“. Sie
  zählen die Minen `'*'` in der **Achter-Nachbarschaft**. Was gibt dieses `main` aus?

  ```java
  char[][] feld = {
      {'.', '*', '*'},
      {'.', '.', '.'},
      {'*', '.', '*'},
      {'.', '*', '.'}
  };
  System.out.println(zaehleMinen(feld, 1, 1));
  System.out.println(zaehleMinen(feld, 0, 0));
  System.out.println(zaehleMinen(feld, 3, 2));
  ```
teile:
  - typ: ausgabe
    codeAnzeigen: false
    code: |
      public class Minen2 {
          public static boolean istImFeld(char[][] feld, int z, int s) {
              return z >= 0 && z < feld.length && s >= 0 && s < feld[z].length;
          }

          public static int zaehleMinen(char[][] feld, int z, int s) {
              int[] dz = {-1, -1, -1, 0, 0, 1, 1, 1};
              int[] ds = {-1, 0, 1, -1, 1, -1, 0, 1};
              int anzahl = 0;
              for (int k = 0; k < 8; k++) {
                  int nz = z + dz[k];
                  int ns = s + ds[k];
                  if (istImFeld(feld, nz, ns) && feld[nz][ns] == '*') {
                      anzahl++;
                  }
              }
              return anzahl;
          }

          public static void main(String[] args) {
              char[][] feld = {
                  {'.', '*', '*'},
                  {'.', '.', '.'},
                  {'*', '.', '*'},
                  {'.', '*', '.'}
              };
              System.out.println(zaehleMinen(feld, 1, 1));
              System.out.println(zaehleMinen(feld, 0, 0));
              System.out.println(zaehleMinen(feld, 3, 2));
          }
      }
    loesung: |
      4
      1
      2
    fehler:
      - wert: "1\n1\n2"
        meldung: Du hast nur oben, unten, links und rechts gezählt. Die Richtungs-Arrays enthalten auch die vier schrägen Nachbarn.
gefuehrt:
  - text: Die Zelle `(1, 1)` liegt mitten im Feld. Wie viele ihrer acht Nachbarn liegen im Feld?
    teil: { typ: zahl, loesung: "8" }
    erklaerung: Die Nachbarn haben die Zeilen 0 bis 2 und die Spalten 0 bis 2. Alle existieren.
  - text: Wie viele dieser acht Nachbarn sind Minen?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Minen stehen bei `(0, 1)`, `(0, 2)`, `(2, 0)` und `(2, 2)`.
  - text: Die Ecke `(0, 0)` hat nur drei Nachbarn im Feld. Wie viele davon sind Minen?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Die Nachbarn sind `(0, 1)`, `(1, 0)` und `(1, 1)`. Nur `(0, 1)` ist eine Mine.
  - text: Die Ecke `(3, 2)` hat die Nachbarn `(2, 1)`, `(2, 2)` und `(3, 1)`. Wie viele Minen sind darunter?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`(2, 2)` und `(3, 1)` sind Minen, `(2, 1)` ist frei.'
hinweise:
  - Schreib für jede Zelle die Nachbarn auf, die im Feld liegen, und zähle die Sterne darunter.
  - Ecken haben in der Achter-Nachbarschaft drei Nachbarn, innere Zellen acht.
loesung: |
  **Ansatz:** Für jede abgefragte Zelle die Nachbarn im Feld bestimmen und die `'*'` darunter zählen.
  ---
  `(1, 1)`: alle acht Nachbarn liegen im Feld. Minen bei `(0, 1)`, `(0, 2)`, `(2, 0)`, `(2, 2)`, also 4.
  ---
  `(0, 0)`: Nachbarn `(0, 1)`, `(1, 0)`, `(1, 1)`, eine Mine. `(3, 2)`: Nachbarn `(2, 1)`, `(2, 2)`, `(3, 1)`, zwei Minen. Ausgabe `4`, `1`, `2`.
```

:::achtung[Zeile und Spalte vertauscht]
In Aufgabenblättern heißen die Koordinaten eines Mausklicks oft `x` und `y`. Dabei ist `x` die Spalte (nach rechts)
und `y` die Zeile (nach unten). Ein häufiger Fehler ist dieser Zugriff:

```java
int wert = bild[x][y];   // falsch: zuerst kommt die Zeile
```

Richtig ist `bild[y][x]`. Bei einem quadratischen Bild fällt der Fehler oft nicht auf, weil beide Zugriffe gültig sind.
Das Programm liest dann einfach eine falsche Zelle. Bei einem Bild mit 200 Zeilen und 300 Spalten liefert ein Klick
bei `x = 250, y = 10` aber `bild[250][10]`. Zeile 250 gibt es nicht, und Java wirft eine
`ArrayIndexOutOfBoundsException`.
:::

:::achtung[Die Randprüfung in der falschen Reihenfolge]
Diese Fassung prüft dieselben vier Bedingungen, aber in anderer Reihenfolge:

```java
return s < feld[z].length && s >= 0 && z >= 0 && z < feld.length;   // falsch
```

Für `z = -1` liest Java zuerst `feld[-1].length`. Das wirft eine `ArrayIndexOutOfBoundsException`, bevor die Prüfung
`z >= 0` überhaupt drankommt. Prüfe deshalb die Zeile immer zuerst und greife erst danach mit `feld[z]` auf sie zu.
:::

```aufgabe
id: aw-nb-zeilen-rand
titel: Welche Bedingung lässt den Zugriff aus dem Feld laufen?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Die Methode soll die Summe der Vierer-Nachbarn bilden und dabei nur Nachbarn im Feld lesen. Für die unterste Zeile
  stürzt sie aber mit einer `ArrayIndexOutOfBoundsException` ab. Das Feld ist rechteckig.
teile:
  - typ: zeilen
    label: In welcher Zeile steht die fehlerhafte Bedingung?
    code: |
      public static int summeNachbarn(int[][] f, int z, int s) {
          int summe = 0;
          if (z > 0) {
              summe += f[z - 1][s];
          }
          if (z < f.length) {
              summe += f[z + 1][s];
          }
          if (s > 0) {
              summe += f[z][s - 1];
          }
          if (s + 1 < f[z].length) {
              summe += f[z][s + 1];
          }
          return summe;
      }
    loesung: [6]
    fehler:
      - wert: [7]
        meldung: In Zeile 7 passiert der Absturz, aber dort steht nur der Zugriff. Gesucht ist die Bedingung, die den Zugriff zu Unrecht erlaubt.
      - wert: [12]
        meldung: '`s + 1 < f[z].length` ist richtig. Es prüft, ob der rechte Nachbar `s + 1` noch ein gültiger Index ist.'
      - wert: [3]
        meldung: '`z > 0` ist richtig. Nur dann gibt es eine Zeile `z - 1 >= 0`.'
hinweise:
  - Setze für `z` die letzte Zeile ein, also `f.length - 1`. Welche Bedingung ist dann wahr, obwohl sie falsch sein müsste?
  - Geprüft werden muss der Index, auf den zugegriffen wird. In Zeile 7 ist das `z + 1`.
loesung: |
  **Ansatz:** Jede Bedingung muss genau den Index prüfen, der im Zugriff darunter vorkommt.
  ---
  Zeile 6 prüft `z < f.length`. Für die letzte Zeile `z = f.length - 1` ist das wahr. Zeile 7 greift dann auf `f[f.length]` zu, eine Zeile, die es nicht gibt.
  ---
  Richtig ist `if (z + 1 < f.length)`. Die anderen drei Bedingungen prüfen genau ihren Index und sind korrekt.
```

```aufgabe
id: aw-nb-lueckentext-imfeld
titel: Die Randprüfung ergänzen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ergänze die Methode so, dass sie genau dann `true` liefert, wenn `(z, s)` eine gültige Zelle ist. Das Feld darf
  verschieden lange Zeilen haben (ein sogenanntes **jagged Array**, ein „ausgefranstes“ Feld, siehe
  [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays)).
teile:
  - typ: lueckentext
    code: |
      public class Rand {
          public static boolean istImFeld(int[][] f, int z, int s) {
              return z >= 0 && z ___ f.length && s >= 0 && s < ___;
          }
      }
    luecken: [["<"], ["f[z].length"]]
    fehler:
      - wert: ["<=", "f[z].length"]
        meldung: 'Der größte gültige Zeilenindex ist `f.length - 1`. Mit `<=` wäre auch `z = f.length` erlaubt, und `f[z]` würde abstürzen.'
      - wert: ["<", "f[0].length"]
        meldung: Bei verschieden langen Zeilen gilt für jede Zeile ihre eigene Länge. `f[0].length` passt nur, wenn alle Zeilen gleich lang sind.
hinweise:
  - Der letzte gültige Index eines Arrays der Länge `n` ist `n - 1`.
  - Die Länge der Zeile `z` ist `f[z].length`. Diesen Ausdruck darfst du hier benutzen, weil `z` links davon schon geprüft ist.
loesung: |
  **Ansatz:** Für die Zeile gilt `0 <= z < f.length`, für die Spalte `0 <= s < f[z].length`.
  ---
  Lücke 1 ist `<`. Lücke 2 ist `f[z].length`, die Länge genau dieser Zeile.
  ---
  Wegen der Kurzschlussauswertung wird `f[z].length` nur gelesen, wenn `z` gültig ist.
```

```aufgabe
id: aw-nb-trace-richtungen
titel: Richtungs-Arrays Schritt für Schritt
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Der Code zählt, wie viele Vierer-Nachbarn der Zelle `(0, 1)` den Wert 5 haben.

  ```java
  int[][] f = {
      {5, 2, 5},
      {5, 5, 1},
      {0, 5, 5}
  };
  int[] dz = {-1, 1, 0, 0};
  int[] ds = {0, 0, -1, 1};
  int z = 0, s = 1, anzahl = 0;
  for (int k = 0; k < 4; k++) {
      int nz = z + dz[k];
      int ns = s + ds[k];
      if (nz >= 0 && nz < f.length && ns >= 0 && ns < f[nz].length && f[nz][ns] == 5) {
          anzahl++;
      }
  }
  ```

  Trage für jeden Schleifendurchlauf `nz`, `ns`, ob der Nachbar im Feld liegt (`ja` oder `nein`), und den Wert von
  `anzahl` **nach** dem Durchlauf ein.
teile:
  - typ: trace
    spalten: [k, nz, ns, im Feld, anzahl]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3, Durchlauf 4]
    loesung:
      - [0, -1, 1, nein, 0]
      - [1, 1, 1, ja, 1]
      - [2, 0, 0, ja, 2]
      - [3, 0, 2, ja, 3]
    fehler:
      - wert: [0, -1, 1, ja, 1, 1, 1, 1, ja, 2, 2, 0, 0, ja, 3, 3, 0, 2, ja, 4]
        meldung: 'Die Zeile `-1` gibt es nicht. Bei `k = 0` scheitert schon `nz >= 0`, also wird nichts gezählt.'
      - wert: [0, 1, 1, ja, 1, 1, -1, 1, nein, 1, 2, 0, 0, ja, 2, 3, 0, 2, ja, 3]
        meldung: '`dz[0]` ist `-1`, also ist der erste Nachbar `(z - 1, s)` oben. Unten kommt erst bei `k = 1`.'
hinweise:
  - Berechne für jedes `k` zuerst `nz = 0 + dz[k]` und `ns = 1 + ds[k]`.
  - Prüfe dann, ob `(nz, ns)` im Feld liegt, und nur dann, ob dort eine 5 steht.
loesung: |
  **Ansatz:** Die Richtungen sind oben, unten, links, rechts. Für jede Richtung Nachbar bestimmen, Randprüfung, Wertprüfung.
  ---
  `k = 0`: `(-1, 1)` liegt außerhalb, `anzahl` bleibt 0. `k = 1`: `(1, 1)` hat den Wert 5, `anzahl` wird 1.
  ---
  `k = 2`: `(0, 0)` hat 5, `anzahl` wird 2. `k = 3`: `(0, 2)` hat 5, `anzahl` wird 3.
  ---
  Ergebnis: Drei der Vierer-Nachbarn haben den Wert 5. Der vierte liegt außerhalb des Felds.
```

```aufgabe
id: aw-nb-code-gleiche
titel: Gleiche Nachbarn zählen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Implementiere `int zaehleGleiche(int[][] feld, int z, int s)`. Die Methode liefert, wie viele der **Vierer-Nachbarn**
  von `(z, s)` denselben Wert haben wie die Zelle `(z, s)` selbst. Nachbarn außerhalb des Felds zählen nicht.

  Vorbedingungen: `feld` ist rechteckig und nicht leer, `(z, s)` ist eine gültige Zelle.

  Beispiel: Für `feld = {{3, 3, 1}, {3, 2, 3}, {1, 3, 3}}` liefert `zaehleGleiche(feld, 0, 0)` den Wert 2, weil
  rechts und unten eine 3 steht.
teile:
  - typ: code
    vorlage: |
      public class Gleiche {
          public static int zaehleGleiche(int[][] feld, int z, int s) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Gleiche {
          public static int zaehleGleiche(int[][] feld, int z, int s) {
              int[] dz = {-1, 1, 0, 0};
              int[] ds = {0, 0, -1, 1};
              int anzahl = 0;
              for (int k = 0; k < 4; k++) {
                  int nz = z + dz[k];
                  int ns = s + ds[k];
                  if (nz >= 0 && nz < feld.length && ns >= 0 && ns < feld[nz].length
                          && feld[nz][ns] == feld[z][s]) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "zaehleGleiche(new int[][]{{3, 3, 1}, {3, 2, 3}, {1, 3, 3}}, 0, 0)", erwartet: "2", beschreibung: "Ecke links oben" }
      - { aufruf: "zaehleGleiche(new int[][]{{3, 3, 1}, {3, 2, 3}, {1, 3, 3}}, 1, 1)", erwartet: "0", beschreibung: "Mitte, kein gleicher Nachbar" }
      - { aufruf: "zaehleGleiche(new int[][]{{3, 3, 1}, {3, 2, 3}, {1, 3, 3}}, 2, 2)", erwartet: "2", beschreibung: "Ecke rechts unten" }
      - { aufruf: "zaehleGleiche(new int[][]{{7}}, 0, 0)", erwartet: "0", beschreibung: "Feld mit einer Zelle" }
      - { aufruf: "zaehleGleiche(new int[][]{{4, 4, 4, 4}, {4, 4, 4, 4}}, 0, 2)", erwartet: "3", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Rechts unten fehlen die Nachbarn unten und rechts. Prüfe vor jedem Zugriff, ob der Nachbar im Feld liegt, sonst wirft Java eine `ArrayIndexOutOfBoundsException`." }
      - { wert: 4, meldung: "Bei einem Feld mit einer Zelle liegt kein Nachbar im Feld. Das Ergebnis ist 0, und es darf keine Exception geben." }
hinweise:
  - Verwende Richtungs-Arrays `dz = {-1, 1, 0, 0}` und `ds = {0, 0, -1, 1}` und eine Schleife über die vier Richtungen.
  - Prüfe in einer einzigen Bedingung zuerst, ob der Nachbar im Feld liegt, und erst danach, ob sein Wert gleich `feld[z][s]` ist.
loesung: |
  **Ansatz:** Vier Richtungen mit Richtungs-Arrays durchgehen. Für jede Richtung Randprüfung, dann Wertvergleich.
  ---
  ```java
  int[] dz = {-1, 1, 0, 0};
  int[] ds = {0, 0, -1, 1};
  int anzahl = 0;
  for (int k = 0; k < 4; k++) {
      int nz = z + dz[k];
      int ns = s + ds[k];
      if (nz >= 0 && nz < feld.length && ns >= 0 && ns < feld[nz].length
              && feld[nz][ns] == feld[z][s]) {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Die Randprüfung steht vor dem Wertvergleich. Wegen `&&` liest Java `feld[nz][ns]` nur bei gültigen Koordinaten.
  ---
  Probe mit `(0, 0)` im Beispiel: oben und links außerhalb, unten `(1, 0)` und rechts `(0, 1)` haben beide 3. Ergebnis 2.
```

```aufgabe
id: aw-nb-code-hinweise
titel: Das Hinweisfeld von Minesweeper
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: nach Minesweeper aus Aufgabenblatt 3 K2 WS 2017, Aufgabe 5 (dort war die Nachbarschaftszählung vorgegeben; nachgebaut, vereinfacht)
angabe: |
  Implementiere `int[][] hinweise(char[][] feld)`. `feld` enthält Minen `'*'` und freie Felder `'.'`. Die Methode
  liefert ein **neues** Array mit denselben Maßen. Für eine Mine steht dort `-1`. Für ein freies Feld steht dort die
  Anzahl der Minen in seiner **Achter-Nachbarschaft**. `feld` selbst bleibt unverändert.

  Vorbedingungen: `feld` ist rechteckig, hat mindestens eine Zeile und jede Zeile mindestens einen Eintrag.

  Beispiel: Aus `{{'*', '.', '.'}, {'.', '.', '*'}}` wird `{{-1, 2, 1}, {1, 2, -1}}`.
teile:
  - typ: code
    vorlage: |
      public class Hinweise {
          public static int[][] hinweise(char[][] feld) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Hinweise {
          public static int[][] hinweise(char[][] feld) {
              int[][] erg = new int[feld.length][feld[0].length];
              for (int z = 0; z < feld.length; z++) {
                  for (int s = 0; s < feld[z].length; s++) {
                      if (feld[z][s] == '*') {
                          erg[z][s] = -1;
                      } else {
                          int anzahl = 0;
                          for (int nz = z - 1; nz <= z + 1; nz++) {
                              for (int ns = s - 1; ns <= s + 1; ns++) {
                                  if (nz >= 0 && nz < feld.length && ns >= 0 && ns < feld[nz].length
                                          && feld[nz][ns] == '*') {
                                      anzahl++;
                                  }
                              }
                          }
                          erg[z][s] = anzahl;
                      }
                  }
              }
              return erg;
          }
      }
    tests:
      - { aufruf: "hinweise(new char[][]{{'*', '.', '.'}, {'.', '.', '*'}})", erwartet: "new int[][]{{-1, 2, 1}, {1, 2, -1}}" }
      - { aufruf: "hinweise(new char[][]{{'.'}})", erwartet: "new int[][]{{0}}", beschreibung: "ein freies Feld" }
      - { aufruf: "hinweise(new char[][]{{'*'}})", erwartet: "new int[][]{{-1}}", beschreibung: "eine Mine" }
      - { aufruf: "hinweise(new char[][]{{'.', '*', '.', '.', '*'}, {'*', '.', '.', '.', '.'}, {'.', '.', '*', '*', '.'}, {'.', '.', '.', '.', '.'}})", erwartet: "new int[][]{{2, -1, 1, 1, -1}, {-1, 3, 3, 3, 2}, {1, 2, -1, -1, 1}, {0, 1, 2, 2, 1}}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche Feld für Feld. Steht bei dir an einer Mine ein Zähler statt `-1`? Oder zählst du nur oben, unten, links und rechts statt aller acht Nachbarn?" }
      - { wert: 2, meldung: "Ein einzelnes Feld hat keine Nachbarn im Feld. Prüfe den Rand, bevor du zugreifst." }
hinweise:
  - Lege zuerst `int[][] erg = new int[feld.length][feld[0].length];` an und durchlaufe alle Zellen mit zwei Schleifen.
  - Für ein freies Feld gehst du mit zwei weiteren Schleifen über `nz` von `z - 1` bis `z + 1` und `ns` von `s - 1` bis `s + 1`. Die Zelle selbst ist frei, also stört sie beim Zählen nicht.
loesung: |
  **Ansatz:** Neues Ergebnis-Array anlegen. Für jede Zelle entweder `-1` eintragen oder die Minen im 3×3-Ausschnitt um sie zählen.
  ---
  Der 3×3-Ausschnitt um `(z, s)` umfasst die Zeilen `z - 1` bis `z + 1` und die Spalten `s - 1` bis `s + 1`. Die Mitte ist die Zelle selbst. Sie ist frei (sonst stünde dort `-1`), darum zählt sie nie als Mine.
  ---
  ```java
  int[][] erg = new int[feld.length][feld[0].length];
  for (int z = 0; z < feld.length; z++) {
      for (int s = 0; s < feld[z].length; s++) {
          if (feld[z][s] == '*') {
              erg[z][s] = -1;
          } else {
              int anzahl = 0;
              for (int nz = z - 1; nz <= z + 1; nz++) {
                  for (int ns = s - 1; ns <= s + 1; ns++) {
                      if (nz >= 0 && nz < feld.length && ns >= 0 && ns < feld[nz].length
                              && feld[nz][ns] == '*') {
                          anzahl++;
                      }
                  }
              }
              erg[z][s] = anzahl;
          }
      }
  }
  return erg;
  ```
  ---
  Probe mit dem Beispiel: Das Feld `(0, 1)` hat die Minen `(0, 0)` und `(1, 2)` in seiner Umgebung, also 2. Das Feld `(1, 0)` sieht nur die Mine `(0, 0)`, also 1.
```

```reflexion
frage: Warum muss die Randprüfung im selben Ausdruck **vor** dem Zugriff `feld[nz][ns]` stehen? Was würde passieren, wenn du zuerst den Wert liest und danach prüfst, ob die Zelle im Feld liegt?
antwort: |
  Der Zugriff `feld[nz][ns]` ist nur erlaubt, wenn beide Indizes gültig sind. Ist ein Index ungültig, wirft Java
  sofort eine ArrayIndexOutOfBoundsException, und eine spätere Prüfung kommt nie zum Zug. Bei `&&` wertet Java von
  links nach rechts aus und hört beim ersten falschen Teil auf. Steht die Randprüfung links, schützt sie den Zugriff
  rechts davon. Steht sie rechts, ist es zu spät. Aus demselben Grund prüft man in der Randprüfung zuerst die Zeile
  und liest erst danach `feld[z].length`.
```

## Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke

```aufgabe
id: aw-sd-check-suche
titel: Suchen und vorzeitig aufhören
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren))
teile:
  - typ: ausgabe
    code: |
      public class Suche {
          public static boolean enthaelt(int[] a, int x) {
              for (int i = 0; i < a.length; i++) {
                  if (a[i] == x) {
                      return true;
                  }
              }
              return false;
          }

          public static void main(String[] args) {
              int[] a = {4, 0, 7, 2};
              System.out.println(enthaelt(a, 7));
              System.out.println(enthaelt(a, 5));
          }
      }
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: Das `return true` beendet die Methode sofort, sobald die 7 gefunden ist. Das `return false` nach der Schleife wird dann gar nicht mehr erreicht.
hinweise:
  - '`return` beendet die Methode sofort, auch mitten in einer Schleife.'
loesung: |
  `enthaelt(a, 7)` findet die 7 bei Index 2 und liefert sofort `true`.
  ---
  `enthaelt(a, 5)` prüft alle vier Einträge ohne Treffer. Erst nach der Schleife kommt `return false`.
```

Ein **Sudoku** ist ein Rätsel auf einem Raster mit 9 Zeilen und 9 Spalten. Das Raster ist zusätzlich in neun
**Blöcke** mit je 3×3 Zellen eingeteilt. In jede Zelle gehört eine Zahl von 1 bis 9. Eine fertige Lösung ist
**gültig**, wenn drei Regeln gelten:

1. In jeder **Zeile** kommt jede Zahl von 1 bis 9 genau einmal vor.
2. In jeder **Spalte** kommt jede Zahl von 1 bis 9 genau einmal vor.
3. In jedem **3×3-Block** kommt jede Zahl von 1 bis 9 genau einmal vor.

In Java speichern wir das Spielfeld als `int[][] feld = new int[9][9]`. Ein noch leeres Feld bekommt den Wert `0`.

In Aufgabenblatt 5 sollst du ein Programm vervollständigen, das ein Sudoku löst. Dafür schreibst du unter anderem drei kleine
Methoden. Jede beantwortet eine Ja-Nein-Frage: „Kommt die Zahl `zahl` schon in dieser Zeile vor?“, dasselbe für eine
Spalte und für einen Block. Eine Methode, die `true` oder `false` liefert, nennt man auch **Prüfmethode**. Wir
beginnen mit Zeile und Spalte.

:::beispiel[Kommt eine Zahl in einer Zeile oder Spalte vor?]
```java
public static boolean inZeile(int[][] feld, int zahl, int z) {
    for (int s = 0; s < 9; s++) {
        if (feld[z][s] == zahl) {
            return true;
        }
    }
    return false;
}

public static boolean inSpalte(int[][] feld, int zahl, int s) {
    for (int z = 0; z < 9; z++) {
        if (feld[z][s] == zahl) {
            return true;
        }
    }
    return false;
}
```

- `inZeile` hält die Zeile `z` fest und lässt die Spalte `s` von 0 bis 8 laufen. So besucht es alle neun Zellen der Zeile.
- `inSpalte` macht es umgekehrt. Die Spalte `s` bleibt fest, die Zeile `z` läuft von 0 bis 8.
- Beide Methoden sind eine **Suche**. Beim ersten Treffer liefern sie sofort `true`. Erst wenn die Schleife ohne Treffer zu Ende ist, liefern sie `false`.

Im folgenden Spielfeld ist die Zeile 5 die Zeile `{0, 0, 2, 0, 6, 0, 0, 9, 0}`. Darum liefert `inZeile(feld, 6, 5)`
den Wert `true` und `inZeile(feld, 3, 5)` den Wert `false`. Die Spalte 2 enthält von oben nach unten
3, 0, 9, 0, 4, 2, 7, 1, 0. Darum ist `inSpalte(feld, 7, 2)` wahr.

```java
int[][] feld = {
    {4, 7, 3, 5, 9, 2, 0, 0, 8},
    {6, 1, 0, 0, 0, 4, 2, 0, 0},
    {0, 5, 9, 0, 8, 0, 4, 0, 0},
    {1, 0, 0, 9, 4, 0, 5, 8, 2},
    {0, 9, 4, 8, 2, 0, 0, 0, 0},
    {0, 0, 2, 0, 6, 0, 0, 9, 0},
    {0, 0, 7, 0, 5, 0, 3, 4, 0},
    {3, 0, 1, 0, 0, 0, 8, 0, 5},
    {8, 6, 0, 0, 1, 3, 0, 2, 7}
};
```
:::

```aufgabe
id: aw-sd-ausgabe-zeile-spalte
titel: Zeilen und Spalten eines anderen Sudokus prüfen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Methoden `inZeile` und `inSpalte` sind dieselben wie im Beispiel. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Pruefen {
          public static boolean inZeile(int[][] feld, int zahl, int z) {
              for (int s = 0; s < 9; s++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean inSpalte(int[][] feld, int zahl, int s) {
              for (int z = 0; z < 9; z++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static void main(String[] args) {
              int[][] feld = {
                  {0, 0, 7, 0, 5, 0, 0, 9, 0},
                  {0, 0, 0, 0, 9, 0, 0, 2, 3},
                  {1, 0, 4, 0, 2, 0, 0, 0, 0},
                  {6, 0, 5, 4, 0, 9, 0, 0, 0},
                  {4, 0, 0, 7, 0, 0, 5, 1, 0},
                  {7, 8, 2, 6, 0, 5, 0, 0, 4},
                  {0, 0, 0, 2, 6, 8, 1, 0, 5},
                  {5, 4, 0, 9, 7, 0, 8, 0, 2},
                  {2, 6, 8, 0, 0, 1, 0, 0, 0}
              };
              System.out.println(inZeile(feld, 5, 0));
              System.out.println(inZeile(feld, 3, 3));
              System.out.println(inSpalte(feld, 8, 0));
              System.out.println(inSpalte(feld, 8, 1));
          }
      }
    loesung: |
      true
      false
      false
      true
    fehler:
      - wert: "true\nfalse\nfalse\nfalse"
        meldung: 'Bei `inSpalte(feld, 8, 1)` ist die **Spalte** 1 gemeint, also die zweite Zahl jeder Zeile: 0, 0, 0, 0, 0, 8, 0, 4, 6. Dort steht eine 8. Du hast vermutlich die Zeile 1 gelesen.'
hinweise:
  - Zeilen und Spalten zählen ab 0. Eine Spalte liest du von oben nach unten, an derselben Stelle jeder Zeile.
loesung: |
  **Ansatz:** Für jeden Aufruf die passende Zeile oder Spalte heraussuchen und nach der Zahl suchen.
  ---
  Zeile 0 ist `{0, 0, 7, 0, 5, 0, 0, 9, 0}` und enthält die 5: `true`. Zeile 3 ist `{6, 0, 5, 4, 0, 9, 0, 0, 0}` ohne 3: `false`.
  ---
  Spalte 0 enthält 0, 0, 1, 6, 4, 7, 0, 5, 2, keine 8: `false`. Spalte 1 enthält 0, 0, 0, 0, 0, 8, 0, 4, 6, also eine 8: `true`.
```

### Der Block einer Zelle

Für die dritte Regel brauchst du den Block, in dem eine Zelle liegt. Die neun Blöcke beginnen in den Zeilen 0, 3
und 6 und in den Spalten 0, 3 und 6. Die Zelle **links oben** in einem Block nennen wir seine **Startzelle**
`(z0, s0)`. Der Block umfasst dann die Zeilen `z0` bis `z0 + 2` und die Spalten `s0` bis `s0 + 2`.

Wie findest du zur Zelle `(z, s)` die Startzelle ihres Blocks? Mit der Ganzzahldivision aus
[2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen):

```java
int z0 = z / 3 * 3;
int s0 = s / 3 * 3;
```

Warum stimmt das? `z / 3` ist die **Nummer** des Blocks von oben gezählt (0, 1 oder 2), weil der Rest wegfällt. Mal
3 genommen wird daraus die erste Zeile dieses Blocks. Für die Zeilen gilt also:

```
z       0  1  2  3  4  5  6  7  8
z / 3   0  0  0  1  1  1  2  2  2
z0      0  0  0  3  3  3  6  6  6
```

Für die Spalten gilt dasselbe. Die Zelle `(7, 4)` liegt also im Block mit der Startzelle `(6, 3)`.

:::beispiel[Kommt eine Zahl in einem Block vor?]
```java
public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
    for (int z = z0; z < z0 + 3; z++) {
        for (int s = s0; s < s0 + 3; s++) {
            if (feld[z][s] == zahl) {
                return true;
            }
        }
    }
    return false;
}
```

- Die Parameter `z0` und `s0` sind die Startzelle des Blocks, nicht irgendeine Zelle darin. So ist es auch auf Blatt 5 vorgegeben.
- Die äußere Schleife läuft über die drei Zeilen `z0`, `z0 + 1`, `z0 + 2`. Die Bedingung `z < z0 + 3` hört davor auf.
- Die innere Schleife läuft genauso über die drei Spalten des Blocks.

Wir nehmen wieder das Spielfeld aus dem Beispiel „Kommt eine Zahl in einer Zeile oder Spalte vor?“. Dort hat der
Block mit Startzelle `(3, 0)` die Zeilen `{1, 0, 0}`, `{0, 9, 4}` und `{0, 0, 2}`. Darum liefert `imBlock(feld, 9, 3, 0)` den Wert `true`
und `imBlock(feld, 3, 3, 0)` den Wert `false`.

Damit beantwortest du auch die Frage des Lösers, ob die 3 in die leere Zelle `(5, 1)` darf. Das ist erlaubt,
wenn die 3 weder in Zeile 5 noch in Spalte 1 vorkommt. Außerdem darf sie nicht im Block mit Startzelle `(3, 0)`
stehen. Alle drei Prüfungen liefern `false`, also ist die 3 dort erlaubt.
:::

:::achtung[Die Blockschleife läuft bis 3 statt bis z0 + 3]
Eine häufige falsche Fassung ist

```java
for (int z = z0; z < 3; z++) {          // falsch
    for (int s = s0; s < 3; s++) {      // falsch
```

Für den Block links oben mit `z0 = 0` und `s0 = 0` stimmt das zufällig. Für `z0 = 3` ist aber schon die erste
Bedingung `3 < 3` falsch. Die Schleife läuft kein einziges Mal, und `imBlock` liefert immer `false`, auch wenn die
Zahl im Block steht. Die Grenze muss mit dem Start mitwandern: `z < z0 + 3` und `s < s0 + 3`.
:::

:::achtung[Rest statt Ganzzahldivision]
Für die Startzeile schreiben manche `z % 3`. Für `z = 4` ergibt das `1`, für `z = 8` ergibt es `2`. Das ist die
**Position innerhalb** des Blocks, nicht seine erste Zeile. Richtig ist `4 / 3 * 3 = 3` und `8 / 3 * 3 = 6`. Prüfe
deine Formel immer an einer Zelle aus dem mittleren oder unteren Block, denn beim oberen Block liefern beide Formeln
oft dasselbe.
:::

```aufgabe
id: aw-sd-zahl-blockstart
titel: Startzellen von Blöcken berechnen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Gib für die Zelle die Startzeile `z0` und die Startspalte `s0` ihres 3×3-Blocks an.
teile:
  - typ: zahl
    label: a) Zelle (5, 2), Startzeile z0
    loesung: "floor(5/3)*3"
    fehler:
      - wert: "2"
        meldung: 'Das ist `5 % 3`, die Position innerhalb des Blocks. Die Startzeile ist `5 / 3 * 3`.'
      - wert: "1"
        meldung: '`5 / 3 = 1` ist die Blocknummer. Mal 3 wird daraus die erste Zeile des Blocks.'
  - typ: zahl
    label: b) Zelle (5, 2), Startspalte s0
    loesung: "floor(2/3)*3"
    fehler:
      - wert: "2"
        meldung: Spalte 2 gehört noch zum linken Block, der bei Spalte 0 beginnt.
  - typ: zahl
    label: c) Zelle (8, 7), Startzeile z0
    loesung: "floor(8/3)*3"
    fehler:
      - wert: "2"
        meldung: 'Das ist `8 % 3`. Die Startzeile des unteren Blocks ist 6.'
  - typ: zahl
    label: d) Zelle (8, 7), Startspalte s0
    loesung: "floor(7/3)*3"
    fehler:
      - wert: "1"
        meldung: 'Das ist `7 % 3`. Spalte 7 liegt im rechten Block mit den Spalten 6, 7, 8.'
      - wert: "7"
        meldung: Die Startspalte ist die linke Spalte des Blocks, nicht die Spalte der Zelle selbst.
hinweise:
  - Rechne `z / 3 * 3` mit Ganzzahldivision. Zuerst teilen und den Rest weglassen, dann mal 3.
loesung: |
  **Ansatz:** `z0 = z / 3 * 3` und `s0 = s / 3 * 3` mit Ganzzahldivision.
  ---
  a) `5 / 3 = 1`, mal 3 ergibt 3. b) `2 / 3 = 0`, mal 3 ergibt 0. Die Zelle `(5, 2)` liegt im Block mit Startzelle `(3, 0)`.
  ---
  c) `8 / 3 = 2`, mal 3 ergibt 6. d) `7 / 3 = 2`, mal 3 ergibt 6. Die Zelle `(8, 7)` liegt im Block rechts unten mit Startzelle `(6, 6)`.
```

```aufgabe
id: aw-sd-auswahl-block
titel: Welche Zellen bilden den Block?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: Welche Zellen gehören zum selben 3×3-Block wie die Zelle `(7, 1)`?
teile:
  - typ: auswahl
    optionen:
      - die Zeilen 6 bis 8 und die Spalten 0 bis 2
      - die Zeilen 7 bis 9 und die Spalten 1 bis 3
      - die Zeilen 6 bis 8 und die Spalten 1 bis 3
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Block beginnt nicht bei der Zelle selbst, sondern bei seiner Startzelle. Außerdem gibt es keine Zeile 9.
      - wert: 2
        meldung: Die Zeilen stimmen. Spalte 1 gehört aber zum linken Block, der bei Spalte `1 / 3 * 3 = 0` beginnt.
hinweise:
  - Berechne zuerst die Startzelle mit `7 / 3 * 3` und `1 / 3 * 3`.
loesung: |
  **Ansatz:** Startzelle berechnen, dann drei Zeilen und drei Spalten ab dort nehmen.
  ---
  `7 / 3 * 3 = 6` und `1 / 3 * 3 = 0`. Der Block umfasst die Zeilen 6, 7, 8 und die Spalten 0, 1, 2.
```

```aufgabe
id: aw-sd-gefuehrt-darf
titel: Darf die Zahl hier stehen?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Methode `darfSetzen` fragt, ob man eine Zahl in eine Zelle schreiben darf, ohne gegen eine Regel zu verstoßen.
  Die Zelle muss dafür leer sein (`0`). Die drei Hilfsmethoden sind dieselben wie in den Beispielen. Was gibt das
  Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Darf {
          public static boolean inZeile(int[][] feld, int zahl, int z) {
              for (int s = 0; s < 9; s++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean inSpalte(int[][] feld, int zahl, int s) {
              for (int z = 0; z < 9; z++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
              for (int z = z0; z < z0 + 3; z++) {
                  for (int s = s0; s < s0 + 3; s++) {
                      if (feld[z][s] == zahl) {
                          return true;
                      }
                  }
              }
              return false;
          }

          public static boolean darfSetzen(int[][] feld, int z, int s, int zahl) {
              return feld[z][s] == 0
                      && !inZeile(feld, zahl, z)
                      && !inSpalte(feld, zahl, s)
                      && !imBlock(feld, zahl, z / 3 * 3, s / 3 * 3);
          }

          public static void main(String[] args) {
              int[][] feld = {
                  {0, 0, 7, 0, 5, 0, 0, 9, 0},
                  {0, 0, 0, 0, 9, 0, 0, 2, 3},
                  {1, 0, 4, 0, 2, 0, 0, 0, 0},
                  {6, 0, 5, 4, 0, 9, 0, 0, 0},
                  {4, 0, 0, 7, 0, 0, 5, 1, 0},
                  {7, 8, 2, 6, 0, 5, 0, 0, 4},
                  {0, 0, 0, 2, 6, 8, 1, 0, 5},
                  {5, 4, 0, 9, 7, 0, 8, 0, 2},
                  {2, 6, 8, 0, 0, 1, 0, 0, 0}
              };
              System.out.println(darfSetzen(feld, 4, 4, 3));
              System.out.println(darfSetzen(feld, 4, 4, 2));
              System.out.println(darfSetzen(feld, 4, 4, 1));
              System.out.println(darfSetzen(feld, 4, 0, 3));
          }
      }
    loesung: |
      true
      false
      false
      false
    fehler:
      - wert: "true\nfalse\nfalse\ntrue"
        meldung: 'Die Zelle `(4, 0)` ist schon belegt, dort steht eine 4. Die erste Bedingung `feld[z][s] == 0` ist falsch, also darf dort nichts mehr hinein.'
      - wert: "true\ntrue\nfalse\nfalse"
        meldung: Die 2 steht zwar nicht in Zeile 4 und nicht im Block, aber in Spalte 4. Eine einzige Regel genügt, um die Zahl zu verbieten.
gefuehrt:
  - text: Ist die Zelle `(4, 4)` leer?
    teil:
      typ: auswahl
      optionen: ['ja, dort steht 0', 'nein, dort steht 7']
      richtig: [0]
    erklaerung: Zeile 4 ist `{4, 0, 0, 7, 0, 0, 5, 1, 0}`. An Index 4 steht 0.
  - text: Welche Startzeile hat der Block der Zelle `(4, 4)`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`4 / 3 * 3 = 1 * 3 = 3`. Die Startspalte ist ebenso 3, der Block ist der mittlere.'
  - text: Wo steht eine 2, die die 2 in `(4, 4)` verbietet?
    teil:
      typ: auswahl
      optionen: ['in Zeile 4', 'in Spalte 4', 'im mittleren Block', 'nirgends']
      richtig: [1]
    erklaerung: Spalte 4 enthält von oben nach unten 5, 9, 2, 0, 0, 0, 6, 7, 0. Die 2 steht in Zeile 2.
  - text: Wie viele der vier Aufrufe liefern `true`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Nur die 3 in `(4, 4)` ist erlaubt. Die 1 steht schon in Zeile 4, und `(4, 0)` ist belegt.
hinweise:
  - Prüfe für jeden Aufruf zuerst, ob die Zelle leer ist. Dann Zeile, Spalte und Block der Reihe nach.
  - Wegen `&&` liefert `darfSetzen` `false`, sobald eine einzige Prüfung scheitert.
loesung: |
  **Ansatz:** `darfSetzen` ist nur dann wahr, wenn die Zelle leer ist und die Zahl weder in der Zeile noch in der Spalte noch im Block vorkommt.
  ---
  `(4, 4)` ist leer. Die 3 fehlt in Zeile 4, in Spalte 4 und im mittleren Block (Startzelle `(3, 3)`), also `true`. Die 2 steht in Spalte 4, also `false`.
  ---
  Die 1 steht in Zeile 4 (Index 7), also `false`. In `(4, 0)` steht eine 4, die Zelle ist belegt, also `false`.
```

### Eine ganze Lösung prüfen

Eine weitere Methode auf Blatt 5 soll sinngemäß prüfen, ob ein **vollständig ausgefülltes** Spielfeld eine gültige
Lösung ist. Die naheliegende Idee: Für jede Zeile, jede Spalte und jeden Block prüfst du, dass keine Zahl doppelt
vorkommt.

Wie stellst du fest, ob in neun Zahlen eine doppelt ist? Ein bewährter Trick ist ein **Merk-Array**:
`boolean[] gesehen = new boolean[10]`. Der Eintrag `gesehen[w]` merkt sich, ob die Zahl `w` schon vorkam. Der Index
ist also die Zahl selbst. Darum hat das Array 10 Einträge, damit die Indizes 1 bis 9 gültig sind. Der Eintrag
`gesehen[0]` bleibt ungenutzt. Am Anfang sind alle Einträge `false`, das ist der Standardwert für `boolean`.

:::beispiel[Alle Zeilen mit einem Merk-Array prüfen]
```java
public static boolean zeilenOk(int[][] feld) {
    for (int z = 0; z < 9; z++) {
        boolean[] gesehen = new boolean[10];
        for (int s = 0; s < 9; s++) {
            int w = feld[z][s];
            if (gesehen[w]) {
                return false;
            }
            gesehen[w] = true;
        }
    }
    return true;
}
```

- Für **jede** Zeile legt die Methode ein neues, leeres Merk-Array an. Die Zahlen der vorigen Zeile spielen keine Rolle.
- Für jede Zelle liest sie den Wert `w`. Ist `gesehen[w]` schon `true`, kam `w` in dieser Zeile schon vor. Dann ist die Lösung ungültig.
- Sonst merkt sie sich `w` mit `gesehen[w] = true`.

Wir verfolgen die Zeile `{2, 7, 5, 7, …}`. Bei der 2 wird `gesehen[2]` wahr, bei der 7 `gesehen[7]`, bei der 5
`gesehen[5]`. Bei der zweiten 7 ist `gesehen[7]` schon wahr, und die Methode liefert `false`.

Für Spalten und Blöcke schreibst du dieselbe Prüfung mit vertauschten Schleifen beziehungsweise mit den
Blockschleifen aus `imBlock`. Die Lösung ist gültig, wenn alle drei Prüfungen `true` liefern.
:::

```reflexion
frage: Die Regel sagt „jede Zahl von 1 bis 9 **genau einmal**“. Die Methode `zeilenOk` prüft aber nur, dass **keine Zahl doppelt** vorkommt. Warum reicht das bei einem vollständig ausgefüllten Feld mit Zahlen von 1 bis 9?
antwort: |
  Eine Zeile hat genau neun Zellen, und in jeder steht eine der neun Zahlen 1 bis 9. Kommt keine Zahl doppelt vor,
  dann stehen neun verschiedene Zahlen in der Zeile. Es gibt aber nur neun mögliche Zahlen, also kommt jede genau
  einmal vor. Fehlte eine Zahl, müsste eine andere ihren Platz einnehmen und doppelt vorkommen. Dieses Argument heißt
  Schubfachprinzip: Neun Zahlen auf neun Fächer verteilt, ohne Doppelbelegung, füllen jedes Fach genau einmal. Bei
  einem Feld mit leeren Zellen (0) gilt das nicht mehr.
```

:::achtung[Das Merk-Array nur einmal angelegt]
Eine Mitschülerin legt das Merk-Array vor der äußeren Schleife an:

```java
boolean[] gesehen = new boolean[10];      // falsch: gilt für alle Zeilen zusammen
for (int z = 0; z < 9; z++) {
    for (int s = 0; s < 9; s++) {
```

In Zeile 0 werden alle Zahlen 1 bis 9 gemerkt. In Zeile 1 kommt dann schon die erste Zahl als „schon gesehen“ an.
Die Methode liefert für **jede** gültige Lösung `false`. Das Merk-Array muss pro Zeile neu angelegt werden, also
innerhalb der äußeren Schleife.
:::

```aufgabe
id: aw-sd-rf-regeln
titel: Aussagen über den Sudoku-Prüfer
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Beurteile jede Aussage. `feld` ist ein 9×9-Sudoku.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Lösung kann in allen Zeilen und allen Spalten gültig sein und trotzdem in einem Block eine Zahl doppelt enthalten.
        richtig: true
        erklaerung: Vertauscht man in einer gültigen Lösung die Spalten 2 und 3, bleiben alle Zeilen und Spalten gültig. Die Blöcke bekommen aber Zahlen aus dem Nachbarblock, und in der Regel kommen dann einige Zahlen doppelt vor.
      - text: '`boolean[] gesehen = new boolean[9]` genügt als Merk-Array für die Zahlen 1 bis 9.'
        richtig: false
        erklaerung: 'Der Index ist die Zahl selbst. `gesehen[9]` braucht ein Array mit 10 Einträgen, sonst gibt es eine `ArrayIndexOutOfBoundsException`.'
      - text: '`imBlock(feld, 5, 4, 4)` prüft den mittleren Block.'
        richtig: false
        erklaerung: '`imBlock` erwartet die Startzelle des Blocks. Mit `(4, 4)` liest es die Zeilen und Spalten 4 bis 6 und damit Zellen aus vier verschiedenen Blöcken.'
      - text: 'Die Startzelle des Blocks von `(z, s)` ist `(z / 3 * 3, s / 3 * 3)`.'
        richtig: true
        erklaerung: '`z / 3` ist die Blocknummer, mal 3 ergibt die erste Zeile des Blocks. Für die Spalte gilt dasselbe.'
    fehler:
      - wert: [f, f, f, r]
        meldung: Zeilen und Spalten allein reichen nicht. Vertausche in Gedanken zwei Spalten aus verschiedenen Blöcken. Was passiert mit den Zeilen, den Spalten und den Blöcken?
      - wert: [r, r, f, r]
        meldung: Mit `new boolean[9]` sind nur die Indizes 0 bis 8 gültig. Wohin schreibt das Programm dann bei der Zahl 9?
hinweise:
  - Denk bei Aussage 1 an das Vertauschen zweier Spalten, die in verschiedenen Blöcken liegen.
loesung: |
  **Ansatz:** Jede Aussage an einem kleinen Beispiel oder an der Definition prüfen.
  ---
  Aussage 1 und 4 sind richtig. Aussage 2 ist falsch, weil der Index 9 ein Array der Länge 10 braucht.
  ---
  Aussage 3 ist falsch, weil `imBlock` die Startzelle `(3, 3)` erwartet und nicht eine beliebige Zelle.
```

```aufgabe
id: aw-sd-lueckentext-spalte
titel: Die Spaltenprüfung ergänzen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: Ergänze `inSpalte` so, dass die Methode genau dann `true` liefert, wenn `zahl` in der Spalte `s` vorkommt.
teile:
  - typ: lueckentext
    code: |
      public class Spalte {
          public static boolean inSpalte(int[][] feld, int zahl, int s) {
              for (int z = 0; z < ___; z++) {
                  if (feld[___][___] == zahl) {
                      return true;
                  }
              }
              return ___;
          }
      }
    luecken: [["9", "feld.length"], ["z"], ["s"], ["false"]]
    fehler:
      - wert: ["9", "s", "z", "false"]
        meldung: 'Der erste Index ist immer die Zeile. In einer Spalte wechselt die Zeile `z`, die Spalte `s` bleibt fest: `feld[z][s]`.'
      - wert: ["9", "z", "s", "true"]
        meldung: Nach der Schleife wurde die Zahl in keiner Zeile gefunden. Das Ergebnis ist dann `false`.
hinweise:
  - In einer Spalte bleibt `s` gleich, und die Zeile `z` läuft von oben nach unten.
  - '`return true` steht im Treffer. Was gilt, wenn die Schleife ohne Treffer endet?'
loesung: |
  **Ansatz:** Suche über alle Zeilen. Die Spalte ist fest.
  ---
  Die Schleife läuft bis `z < 9` (oder `z < feld.length`). Gelesen wird `feld[z][s]`.
  ---
  Nach der Schleife ohne Treffer: `return false;`.
```

```aufgabe
id: aw-sd-trace-gesehen
titel: Das Merk-Array verfolgen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  `zeilenOk` aus dem Beispiel „Alle Zeilen mit einem Merk-Array prüfen“ bearbeitet die Zeile
  `{6, 1, 9, 4, 1, 3, 8, 2, 5}`. Trage nach jedem Schritt ein, welche Einträge von `gesehen` den Wert `true` haben
  (als Zahlen, aufsteigend mit Leerzeichen getrennt) und ob die Methode schon `false` geliefert hat (`ja` oder `nein`).
teile:
  - typ: trace
    spalten: [w, gesehen ist true für, schon false?]
    zeilen: [nach s = 0, nach s = 1, nach s = 2, nach s = 3, bei s = 4]
    loesung:
      - [6, "6", nein]
      - [1, "1 6", nein]
      - [9, "1 6 9", nein]
      - [4, "1 4 6 9", nein]
      - [1, "1 4 6 9", ja]
    fehler:
      - wert: [6, "6", nein, 1, "1 6", nein, 9, "1 6 9", nein, 4, "1 4 6 9", nein, 1, "1 4 6 9", nein]
        meldung: 'Bei `s = 4` ist `w = 1`, und `gesehen[1]` ist seit `s = 1` wahr. Die Bedingung `if (gesehen[w])` schlägt an, und die Methode liefert sofort `false`.'
hinweise:
  - Bei jedem Schritt wird zuerst geprüft, ob `gesehen[w]` schon wahr ist. Nur wenn nicht, wird `gesehen[w] = true` gesetzt.
  - Die 1 kommt in der Zeile zweimal vor.
loesung: |
  **Ansatz:** Für jede Zelle den Wert `w` lesen, `gesehen[w]` prüfen und dann setzen.
  ---
  Die Werte 6, 1, 9, 4 sind neu. Nach `s = 3` sind `gesehen[1]`, `gesehen[4]`, `gesehen[6]` und `gesehen[9]` wahr.
  ---
  Bei `s = 4` kommt wieder die 1. `gesehen[1]` ist schon wahr, die Methode liefert `false`. Die restlichen Zellen werden nicht mehr gelesen.
```

```aufgabe
id: aw-sd-zeilen-merk
titel: Warum ist jede Lösung ungültig?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Diese Methode soll prüfen, ob alle **Spalten** eines vollständig ausgefüllten Sudokus gültig sind. Sie liefert aber
  selbst für eine gültige Lösung `false`. Markiere die Zeile, die man verschieben oder ändern muss.
teile:
  - typ: zeilen
    code: |
      public static boolean spaltenOk(int[][] feld) {
          boolean[] gesehen = new boolean[10];
          for (int s = 0; s < 9; s++) {
              for (int z = 0; z < 9; z++) {
                  int w = feld[z][s];
                  if (gesehen[w]) {
                      return false;
                  }
                  gesehen[w] = true;
              }
          }
          return true;
      }
    loesung: [2]
    fehler:
      - wert: [5]
        meldung: '`feld[z][s]` ist richtig. In einer Spalte wechselt die Zeile `z`, und der erste Index ist die Zeile.'
      - wert: [6]
        meldung: Die Prüfung `if (gesehen[w])` stimmt. Sie schlägt aber schon in Spalte 1 an. Warum ist dort `gesehen[w]` schon wahr?
hinweise:
  - Was steht in `gesehen`, wenn die erste Spalte fertig ist und die zweite beginnt?
  - Das Merk-Array muss für jede Spalte leer beginnen.
loesung: |
  **Ansatz:** Das Merk-Array muss für jede Spalte neu beginnen. Prüfe, wo es angelegt wird.
  ---
  Zeile 2 legt `gesehen` einmal vor allen Spalten an. Nach Spalte 0 sind alle Zahlen 1 bis 9 als gesehen markiert.
  ---
  In Spalte 1 meldet schon die erste Zelle „doppelt“. Die Reparatur: Zeile 2 in die äußere Schleife verschieben, direkt nach `for (int s = 0; s < 9; s++) {`.
```

```aufgabe
id: aw-sd-code-block
titel: Die Blockprüfung schreiben
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 3 (isNumUsedInBox, nachgebaut und umbenannt)
angabe: |
  Implementiere `boolean imBlock(int[][] feld, int zahl, int z0, int s0)`. Die Methode liefert `true`, wenn `zahl` in
  dem 3×3-Block mit der Startzelle `(z0, s0)` vorkommt, sonst `false`.

  Vorbedingungen: `feld` ist 9×9, `zahl` liegt zwischen 1 und 9, `z0` und `s0` sind jeweils 0, 3 oder 6.
teile:
  - typ: code
    vorlage: |
      public class Block {
          public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Block {
          public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
              for (int z = z0; z < z0 + 3; z++) {
                  for (int s = s0; s < s0 + 3; s++) {
                      if (feld[z][s] == zahl) {
                          return true;
                      }
                  }
              }
              return false;
          }
      }
    tests:
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "imBlock(f, 7, 0, 0)"
        erwartet: "true"
        beschreibung: "7 im Block links oben"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "imBlock(f, 6, 3, 3)"
        erwartet: "true"
        beschreibung: "6 im mittleren Block"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "imBlock(f, 3, 3, 3)"
        erwartet: "false"
        beschreibung: "3 fehlt im mittleren Block"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "imBlock(f, 2, 6, 6)"
        erwartet: "true"
        versteckt: true
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "imBlock(f, 9, 6, 0)"
        erwartet: "false"
        versteckt: true
    fehler:
      - { wert: 2, meldung: "Im mittleren Block wird nichts gefunden. Läuft deine Schleife bis `z < 3` statt bis `z < z0 + 3`? Dann wird sie für `z0 = 3` gar nicht betreten." }
      - { wert: 3, meldung: "Du findest eine 3, die nicht im Block steht. Liest du vielleicht ganze Zeilen statt nur der drei Spalten ab `s0`?" }
hinweise:
  - Zwei verschachtelte Schleifen. Die äußere läuft über die Zeilen `z0` bis `z0 + 2`, die innere über die Spalten `s0` bis `s0 + 2`.
  - Beim ersten Treffer `return true;`, nach beiden Schleifen `return false;`.
loesung: |
  **Ansatz:** Eine Suche über die neun Zellen des Blocks. Der Block beginnt bei `(z0, s0)` und ist drei Zeilen hoch und drei Spalten breit.
  ---
  ```java
  for (int z = z0; z < z0 + 3; z++) {
      for (int s = s0; s < s0 + 3; s++) {
          if (feld[z][s] == zahl) {
              return true;
          }
      }
  }
  return false;
  ```
  ---
  Die Grenzen `z0 + 3` und `s0 + 3` wandern mit dem Block mit. Darum funktioniert die Methode für alle neun Blöcke.
  ---
  Probe: Im mittleren Block (Startzelle `(3, 3)`) stehen 4, 9, 7, 6, 5. Die 6 wird gefunden, die 3 nicht.
```

```aufgabe
id: aw-sd-code-kandidaten
titel: Wie viele Zahlen passen in die Zelle?
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 3 (Hilfsmethoden des Sudoku-Lösers, neu kombiniert)
angabe: |
  Ein Sudoku-Löser fängt oft bei der leeren Zelle an, in die die wenigsten Zahlen passen. Implementiere
  `int anzahlKandidaten(int[][] feld, int z, int s)`. Ist die Zelle `(z, s)` belegt (nicht 0), liefert die Methode 0.
  Sonst liefert sie, wie viele der Zahlen 1 bis 9 man dort eintragen darf, ohne gegen eine der drei Regeln zu
  verstoßen.

  Die Hilfsmethoden `inZeile`, `inSpalte` und `imBlock` sind in der Vorlage schon fertig. Verwende sie.

  Vorbedingungen: `feld` ist 9×9 mit Werten 0 bis 9, `(z, s)` ist eine gültige Zelle.
teile:
  - typ: code
    vorlage: |
      public class Kandidaten {
          public static boolean inZeile(int[][] feld, int zahl, int z) {
              for (int s = 0; s < 9; s++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean inSpalte(int[][] feld, int zahl, int s) {
              for (int z = 0; z < 9; z++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
              for (int z = z0; z < z0 + 3; z++) {
                  for (int s = s0; s < s0 + 3; s++) {
                      if (feld[z][s] == zahl) {
                          return true;
                      }
                  }
              }
              return false;
          }

          public static int anzahlKandidaten(int[][] feld, int z, int s) {
              return -1; // TODO
          }
      }
    musterloesung: |
      public class Kandidaten {
          public static boolean inZeile(int[][] feld, int zahl, int z) {
              for (int s = 0; s < 9; s++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean inSpalte(int[][] feld, int zahl, int s) {
              for (int z = 0; z < 9; z++) {
                  if (feld[z][s] == zahl) {
                      return true;
                  }
              }
              return false;
          }

          public static boolean imBlock(int[][] feld, int zahl, int z0, int s0) {
              for (int z = z0; z < z0 + 3; z++) {
                  for (int s = s0; s < s0 + 3; s++) {
                      if (feld[z][s] == zahl) {
                          return true;
                      }
                  }
              }
              return false;
          }

          public static int anzahlKandidaten(int[][] feld, int z, int s) {
              if (feld[z][s] != 0) {
                  return 0;
              }
              int anzahl = 0;
              for (int zahl = 1; zahl <= 9; zahl++) {
                  if (!inZeile(feld, zahl, z) && !inSpalte(feld, zahl, s)
                          && !imBlock(feld, zahl, z / 3 * 3, s / 3 * 3)) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "anzahlKandidaten(f, 4, 4)"
        erwartet: "2"
        beschreibung: "(4, 4): 3 und 8 passen"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "anzahlKandidaten(f, 1, 0)"
        erwartet: "1"
        beschreibung: "(1, 0): nur die 8 passt"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "anzahlKandidaten(f, 0, 2)"
        erwartet: "0"
        beschreibung: "belegte Zelle"
      - vorher: "int[][] f = {{0, 0, 7, 0, 5, 0, 0, 9, 0}, {0, 0, 0, 0, 9, 0, 0, 2, 3}, {1, 0, 4, 0, 2, 0, 0, 0, 0}, {6, 0, 5, 4, 0, 9, 0, 0, 0}, {4, 0, 0, 7, 0, 0, 5, 1, 0}, {7, 8, 2, 6, 0, 5, 0, 0, 4}, {0, 0, 0, 2, 6, 8, 1, 0, 5}, {5, 4, 0, 9, 7, 0, 8, 0, 2}, {2, 6, 8, 0, 0, 1, 0, 0, 0}};"
        aufruf: "anzahlKandidaten(f, 6, 1)"
        erwartet: "3"
        versteckt: true
      - vorher: "int[][] f = new int[9][9];"
        aufruf: "anzahlKandidaten(f, 8, 8)"
        erwartet: "9"
        versteckt: true
    fehler:
      - { wert: 3, meldung: "In einer belegten Zelle darf nichts mehr eingetragen werden. Prüfe zuerst `feld[z][s] != 0` und liefere dann 0." }
      - { wert: 1, meldung: "Bei `(4, 4)` passen genau die 3 und die 8. Übergibst du `imBlock` die Startzelle `z / 3 * 3, s / 3 * 3` statt `z, s`?" }
hinweise:
  - Zuerst der Sonderfall belegte Zelle. Dann eine Schleife über `zahl` von 1 bis 9 mit einem Zähler.
  - Eine Zahl passt, wenn alle drei Hilfsmethoden `false` liefern. Für `imBlock` brauchst du die Startzelle `z / 3 * 3` und `s / 3 * 3`.
loesung: |
  **Ansatz:** Die drei Regeln sind schon als Prüfmethoden da. Für jede der neun Zahlen fragst du alle drei und zählst die Zahlen, bei denen keine Regel verletzt ist.
  ---
  ```java
  if (feld[z][s] != 0) {
      return 0;
  }
  int anzahl = 0;
  for (int zahl = 1; zahl <= 9; zahl++) {
      if (!inZeile(feld, zahl, z) && !inSpalte(feld, zahl, s)
              && !imBlock(feld, zahl, z / 3 * 3, s / 3 * 3)) {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Der häufigste Fehler ist `imBlock(feld, zahl, z, s)`. Dann prüft die Methode einen verschobenen Ausschnitt, der über Blockgrenzen reicht.
  ---
  Probe für `(4, 4)`: Zeile 4 enthält 4, 7, 5, 1, Spalte 4 enthält 5, 9, 2, 6, 7, der mittlere Block 4, 9, 7, 6, 5. Übrig bleiben 3 und 8, also 2 Kandidaten.
```

```aufgabe
id: aw-sd-code-gueltig
titel: Eine vollständige Lösung prüfen
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 3 (isValidSudokuSolution), und Aufgabenblatt 5 WS 2017, Aufgabe 1 (nachgebaut)
angabe: |
  Implementiere `boolean istGueltigeLoesung(int[][] feld)`. `feld` ist ein **vollständig** ausgefülltes 9×9-Sudoku mit
  Zahlen von 1 bis 9. Die Methode liefert `true`, wenn in jeder Zeile, jeder Spalte und jedem 3×3-Block keine Zahl
  doppelt vorkommt, sonst `false`.

  Verwende keine Methoden der Klasse `Arrays`. Hilfsmethoden darfst du schreiben.
teile:
  - typ: code
    vorlage: |
      public class Loesung {
          public static boolean istGueltigeLoesung(int[][] feld) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Loesung {
          public static boolean istGueltigeLoesung(int[][] feld) {
              for (int i = 0; i < 9; i++) {
                  boolean[] zeile = new boolean[10];
                  boolean[] spalte = new boolean[10];
                  boolean[] block = new boolean[10];
                  int z0 = i / 3 * 3;
                  int s0 = i % 3 * 3;
                  for (int j = 0; j < 9; j++) {
                      int a = feld[i][j];
                      int b = feld[j][i];
                      int c = feld[z0 + j / 3][s0 + j % 3];
                      if (zeile[a] || spalte[b] || block[c]) {
                          return false;
                      }
                      zeile[a] = true;
                      spalte[b] = true;
                      block[c] = true;
                  }
              }
              return true;
          }
      }
    tests:
      - vorher: "int[][] f = {{3, 2, 7, 8, 5, 6, 4, 9, 1}, {8, 5, 6, 1, 9, 4, 7, 2, 3}, {1, 9, 4, 3, 2, 7, 6, 5, 8}, {6, 1, 5, 4, 3, 9, 2, 8, 7}, {4, 3, 9, 7, 8, 2, 5, 1, 6}, {7, 8, 2, 6, 1, 5, 9, 3, 4}, {9, 7, 3, 2, 6, 8, 1, 4, 5}, {5, 4, 1, 9, 7, 3, 8, 6, 2}, {2, 6, 8, 5, 4, 1, 3, 7, 9}};"
        aufruf: "istGueltigeLoesung(f)"
        erwartet: "true"
        beschreibung: "gültige Lösung"
      - vorher: "int[][] f = {{3, 2, 7, 8, 5, 6, 4, 9, 1}, {8, 5, 6, 1, 9, 4, 7, 2, 3}, {1, 9, 4, 3, 2, 7, 6, 5, 8}, {6, 1, 5, 4, 3, 9, 2, 8, 7}, {4, 3, 9, 7, 8, 2, 5, 1, 6}, {7, 8, 2, 6, 1, 5, 9, 3, 4}, {9, 7, 3, 2, 6, 8, 1, 4, 5}, {5, 4, 1, 9, 7, 3, 8, 6, 2}, {2, 6, 8, 5, 4, 1, 3, 7, 9}}; f[4][4] = 7;"
        aufruf: "istGueltigeLoesung(f)"
        erwartet: "false"
        beschreibung: "eine Zahl doppelt in Zeile 4"
      - vorher: "int[][] f = {{3, 2, 7, 8, 5, 6, 4, 9, 1}, {8, 5, 6, 1, 9, 4, 7, 2, 3}, {1, 9, 4, 3, 2, 7, 6, 5, 8}, {6, 1, 5, 4, 3, 9, 2, 8, 7}, {4, 3, 9, 7, 8, 2, 5, 1, 6}, {7, 8, 2, 6, 1, 5, 9, 3, 4}, {9, 7, 3, 2, 6, 8, 1, 4, 5}, {5, 4, 1, 9, 7, 3, 8, 6, 2}, {2, 6, 8, 5, 4, 1, 3, 7, 9}}; int t = f[0][0]; f[0][0] = f[0][1]; f[0][1] = t;"
        aufruf: "istGueltigeLoesung(f)"
        erwartet: "false"
        beschreibung: "zwei Zellen in Zeile 0 vertauscht: Zeilen gültig, Spalten nicht"
      - vorher: "int[][] f = {{3, 2, 7, 8, 5, 6, 4, 9, 1}, {8, 5, 6, 1, 9, 4, 7, 2, 3}, {1, 9, 4, 3, 2, 7, 6, 5, 8}, {6, 1, 5, 4, 3, 9, 2, 8, 7}, {4, 3, 9, 7, 8, 2, 5, 1, 6}, {7, 8, 2, 6, 1, 5, 9, 3, 4}, {9, 7, 3, 2, 6, 8, 1, 4, 5}, {5, 4, 1, 9, 7, 3, 8, 6, 2}, {2, 6, 8, 5, 4, 1, 3, 7, 9}}; for (int z = 0; z < 9; z++) { int t = f[z][2]; f[z][2] = f[z][3]; f[z][3] = t; }"
        aufruf: "istGueltigeLoesung(f)"
        erwartet: "false"
        beschreibung: "Spalten 2 und 3 vertauscht: nur die Blöcke sind ungültig"
      - vorher: "int[][] f = {{3, 2, 7, 8, 5, 6, 4, 9, 1}, {8, 5, 6, 1, 9, 4, 7, 2, 3}, {1, 9, 4, 3, 2, 7, 6, 5, 8}, {6, 1, 5, 4, 3, 9, 2, 8, 7}, {4, 3, 9, 7, 8, 2, 5, 1, 6}, {7, 8, 2, 6, 1, 5, 9, 3, 4}, {9, 7, 3, 2, 6, 8, 1, 4, 5}, {5, 4, 1, 9, 7, 3, 8, 6, 2}, {2, 6, 8, 5, 4, 1, 3, 7, 9}}; int[] t = f[0]; f[0] = f[1]; f[1] = t;"
        aufruf: "istGueltigeLoesung(f)"
        erwartet: "true"
        versteckt: true
    fehler:
      - { wert: 1, meldung: "Eine gültige Lösung wird abgelehnt. Legst du das Merk-Array vor der äußeren Schleife an? Es muss für jede Zeile, Spalte und jeden Block neu beginnen." }
      - { wert: 4, meldung: "Zeilen und Spalten sind hier gültig, nur die Blöcke nicht. Prüfst du auch die neun 3×3-Blöcke?" }
      - { wert: 3, meldung: "Die Zeilen sind hier gültig, aber zwei Spalten nicht. Prüfst du auch alle Spalten?" }
hinweise:
  - Schreib dir drei Prüfungen, eine für Zeilen, eine für Spalten, eine für Blöcke. Jede benutzt pro Zeile, Spalte oder Block ein neues `boolean[] gesehen = new boolean[10]`.
  - Für die Blöcke laufen zwei äußere Schleifen über die Startzellen `z0` und `s0` in Dreierschritten (0, 3, 6) und zwei innere über die neun Zellen des Blocks.
loesung: |
  **Ansatz:** Bei einem vollständig ausgefüllten Feld genügt es, Doppelte zu finden (Schubfachprinzip). Zeilen, Spalten und Blöcke werden je mit einem frischen Merk-Array geprüft.
  ---
  Gut lesbar ist die Fassung mit drei Teilen. Für die Zeilen:
  ```java
  for (int z = 0; z < 9; z++) {
      boolean[] gesehen = new boolean[10];
      for (int s = 0; s < 9; s++) {
          if (gesehen[feld[z][s]]) {
              return false;
          }
          gesehen[feld[z][s]] = true;
      }
  }
  ```
  Für die Spalten tauschst du die Rollen von `z` und `s`. Für die Blöcke laufen `z0` und `s0` über 0, 3, 6, und innen `z` von `z0` bis `z0 + 2` und `s` von `s0` bis `s0 + 2`. Am Ende steht `return true;`.
  ---
  Die Musterlösung macht alles in einer Doppelschleife. Im Durchlauf `i` prüft sie Zeile `i`, Spalte `i` und Block `i`. Block `i` hat die Startzelle `(i / 3 * 3, i % 3 * 3)`. Seine `j`-te Zelle ist `(z0 + j / 3, s0 + j % 3)`. Beide Fassungen sind richtig.
  ---
  Probe mit den Tests: Vertauschte Spalten 2 und 3 lassen alle Zeilen und Spalten gültig. Erst die Blockprüfung findet den Fehler. Vertauschte Zeilen 0 und 1 bleiben im selben Block und bleiben gültig.
```

## Bilder als Zahlenfelder: Filter und Faltung

```aufgabe
id: aw-bf-check-neu
titel: Neues Array oder dasselbe Array?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[] a = {1, 2, 3};
      int[] b = a;
      int[] c = new int[3];
      for (int i = 0; i < 3; i++) {
          c[i] = a[i];
      }
      b[0] = 9;
      c[1] = 7;
      System.out.println(a[0] + " " + a[1]);
    loesung: |
      9 2
    fehler:
      - wert: "1 2"
        meldung: '`b = a` kopiert nur die Referenz. `a` und `b` sind dasselbe Array, also ändert `b[0] = 9` auch `a[0]`.'
      - wert: "9 7"
        meldung: '`c` ist ein **neues** Array, in das die Werte kopiert wurden. Eine Änderung an `c` berührt `a` nicht.'
hinweise:
  - Zeichne, auf welches Array jede Variable zeigt.
loesung: |
  `b` zeigt auf dasselbe Array wie `a`. `c` ist ein eigenes, neues Array mit denselben Werten.
  ---
  `b[0] = 9` ändert das gemeinsame Array, `c[1] = 7` nur die Kopie. Ausgabe `9 2`.
```

Ein digitales Bild besteht aus vielen kleinen Quadraten, den **Bildpunkten** oder **Pixeln**. Bei einem
**Graubild** hat jeder Pixel nur eine Helligkeit. Man speichert sie als ganze Zahl von 0 bis 255. Dabei ist 0
schwarz, 255 weiß, und die Werte dazwischen sind Grautöne. Die Zahl 255 kommt daher, dass man einen Grauwert
traditionell in einem **Byte** speichert. Das ist eine kleine Speichereinheit aus 8 Bit (ein Bit ist eine einzelne
0 oder 1). Mit 8 Bit gibt es genau 2⁸ = 256 verschiedene Werte, also 0 bis 255.

Ein Graubild mit 200 Zeilen und 300 Spalten ist also nichts anderes als ein `int[][] bild = new int[200][300]`. Der
Pixel in Zeile `z` und Spalte `s` ist `bild[z][s]`. Ein **Bildfilter** ist eine Methode, die aus einem Bild ein neues
Bild berechnet. Es gibt zwei Arten:

- Bei einer **Punktoperation** hängt der neue Wert eines Pixels nur von seinem eigenen alten Wert ab.
- Bei einer **Nachbarschaftsoperation** hängt er auch von den Nachbarn ab.

Zwei einfache Punktoperationen sind das **Invertieren** und der **Schwellwert**. Invertieren macht aus Hell
Dunkel und umgekehrt. Der neue Wert ist `255 - w`, aus 0 wird 255 und aus 200 wird 55. Beim Schwellwert wählst du
eine Grenze, die **Schwelle**. Jeder Pixel mit `w >= schwelle` wird weiß (255), jeder andere schwarz (0). Danach hat
das Bild nur noch zwei Farben. Man nennt das auch **Binarisieren**.

:::beispiel[Invertieren und Schwellwert]
```java
int[][] bild = {
    {0, 100, 200},
    {255, 130, 60}
};
for (int z = 0; z < bild.length; z++) {
    for (int s = 0; s < bild[z].length; s++) {
        bild[z][s] = 255 - bild[z][s];
    }
}
System.out.println(Arrays.toString(bild[0]));
System.out.println(Arrays.toString(bild[1]));
```

- Die zwei Schleifen besuchen jeden Pixel genau einmal.
- `bild[z][s] = 255 - bild[z][s]` liest den alten Wert und schreibt den neuen an dieselbe Stelle. Das ist hier erlaubt, weil kein anderer Pixel den alten Wert noch braucht.
- `Arrays.toString` macht aus einer Zeile einen lesbaren Text wie `[255, 155, 55]`.

Die Ausgabe ist `[255, 155, 55]` und `[0, 125, 195]`. Mit der Schwelle 128 auf das **ursprüngliche** Bild würde
aus der ersten Zeile `[0, 0, 255]`, denn nur 200 ist mindestens 128. Aus der zweiten Zeile würde `[255, 255, 0]`.
:::

```aufgabe
id: aw-bf-ausgabe-schwelle
titel: Ein Bild binarisieren
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] bild = {
          {30, 128, 220},
          {127, 0, 255}
      };
      int schwelle = 128;
      for (int z = 0; z < bild.length; z++) {
          for (int s = 0; s < bild[z].length; s++) {
              if (bild[z][s] >= schwelle) {
                  bild[z][s] = 255;
              } else {
                  bild[z][s] = 0;
              }
          }
      }
      System.out.println(Arrays.toString(bild[0]));
      System.out.println(Arrays.toString(bild[1]));
    loesung: |
      [0, 255, 255]
      [0, 0, 255]
    fehler:
      - wert: "[0, 0, 255]\n[0, 0, 255]"
        meldung: 'Die Bedingung ist `>=`. Der Wert 128 ist genau die Schwelle und wird darum weiß, also 255.'
      - wert: "[225, 127, 35]\n[128, 255, 0]"
        meldung: Das wäre das Invertieren mit `255 - w`. Hier wird aber mit einer Schwelle verglichen, und es entstehen nur die Werte 0 und 255.
hinweise:
  - Vergleiche jeden Wert mit 128. Achte besonders auf 127 und 128.
loesung: |
  **Ansatz:** Jeder Pixel wird einzeln mit `>= 128` geprüft. Ja ergibt 255, nein ergibt 0.
  ---
  Erste Zeile: 30 nein, 128 ja, 220 ja. Ergebnis `[0, 255, 255]`.
  ---
  Zweite Zeile: 127 nein, 0 nein, 255 ja. Ergebnis `[0, 0, 255]`.
```

### Der Mittelwertfilter

Ein Bild mit Bildrauschen sieht aus, als wäre es mit feinen hellen und dunklen Körnern übersät. Ein
**Mittelwertfilter** glättet solche Körner. Er ersetzt jeden Pixel durch den **Durchschnitt** aus ihm selbst und
seinen Nachbarn in der Achter-Nachbarschaft. Ein einzelner sehr heller Pixel zwischen dunklen Nachbarn wird dadurch
dunkler.

Am Rand hat ein Pixel weniger als acht Nachbarn. Für ihn nimmst du den Durchschnitt nur über die Pixel, die es
gibt. Die Ecke links oben mittelt also über 4 Pixel, ein Randpixel über 6 und ein innerer Pixel über 9.

Der wichtigste Punkt ist, **wohin** du die Ergebnisse schreibst. Der neue Wert von `(0, 1)` braucht den **alten**
Wert von `(0, 0)`. Würdest du `(0, 0)` schon überschrieben haben, rechnet `(0, 1)` mit einem falschen Wert. Darum
schreibt ein Nachbarschaftsfilter immer in ein **neues** Array `erg` und liest nur aus dem alten `bild`.

:::beispiel[Ein Mittelwertfilter mit Randbehandlung]
```java
public static int[][] mittelwert(int[][] bild) {
    int[][] erg = new int[bild.length][bild[0].length];
    for (int z = 0; z < bild.length; z++) {
        for (int s = 0; s < bild[z].length; s++) {
            int summe = 0;
            int anzahl = 0;
            for (int nz = z - 1; nz <= z + 1; nz++) {
                for (int ns = s - 1; ns <= s + 1; ns++) {
                    if (nz >= 0 && nz < bild.length && ns >= 0 && ns < bild[nz].length) {
                        summe += bild[nz][ns];
                        anzahl++;
                    }
                }
            }
            erg[z][s] = summe / anzahl;
        }
    }
    return erg;
}
```

- `erg` hat dieselben Maße wie `bild`. Gelesen wird nur aus `bild`, geschrieben nur in `erg`.
- Die beiden inneren Schleifen laufen über das 3×3-Quadrat um `(z, s)`, die Mitte eingeschlossen.
- Die Randprüfung lässt Pixel außerhalb des Bilds weg. `anzahl` zählt, wie viele Pixel wirklich addiert wurden.
- `summe / anzahl` ist eine Ganzzahldivision. Der Nachkommaanteil fällt weg.

Für das Bild `{{10, 20, 30, 40}, {50, 60, 70, 80}, {90, 100, 110, 120}}` ergibt sich:

- Ecke `(0, 0)`: Es gibt 4 Pixel mit `10 + 20 + 50 + 60 = 140`. Der Durchschnitt ist `140 / 4 = 35`.
- Innen `(1, 1)`: Es gibt 9 Pixel mit der Summe 540. Der Durchschnitt ist `540 / 9 = 60`.
- Rand `(1, 3)`: Es gibt 6 Pixel mit `30 + 40 + 70 + 80 + 110 + 120 = 450`. Der Durchschnitt ist `450 / 6 = 75`.
:::

```aufgabe
id: aw-bf-zahl-mittel
titel: Mittelwerte von Hand
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne für das Bild

  ```java
  int[][] bild = {
      {12, 18, 30},
      {24, 36, 6},
      {9, 15, 21}
  };
  ```

  den neuen Wert, den die Methode `mittelwert` aus dem Beispiel „Ein Mittelwertfilter mit Randbehandlung“ für den
  angegebenen Pixel liefert. Beachte, dass Java ganzzahlig teilt.
teile:
  - typ: zahl
    label: a) Pixel (0, 2)
    loesung: "floor((18 + 30 + 36 + 6) / 4)"
    fehler:
      - wert: "22.5"
        meldung: '`summe / anzahl` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg.'
      - wert: "10"
        meldung: Die Ecke hat nur vier Pixel im Bild. Geteilt wird durch die Anzahl der wirklich addierten Pixel, nicht durch 9.
  - typ: zahl
    label: b) Pixel (1, 1)
    loesung: "floor((12 + 18 + 30 + 24 + 36 + 6 + 9 + 15 + 21) / 9)"
    fehler:
      - wert: "16"
        meldung: Der Pixel selbst gehört zum Durchschnitt. Ohne die 36 hättest du nur 8 Werte mit der Summe 135.
  - typ: zahl
    label: c) Pixel (2, 0)
    loesung: "floor((24 + 36 + 9 + 15) / 4)"
    fehler:
      - wert: "9"
        meldung: Das wäre der Durchschnitt über 9 Pixel. Die Ecke links unten hat aber nur vier Pixel im Bild.
hinweise:
  - Nimm das 3×3-Quadrat um den Pixel und streiche alles, was außerhalb des Bilds liegt.
  - Teile die Summe durch die Anzahl der verbleibenden Pixel und lass den Nachkommaanteil weg.
loesung: |
  **Ansatz:** Für jeden Pixel die Pixel im 3×3-Quadrat bestimmen, die im Bild liegen, und ganzzahlig mitteln.
  ---
  a) Die Ecke `(0, 2)` hat die Pixel 18, 30, 36, 6. Summe 90, geteilt durch 4 ist 22,5, ganzzahlig 22.
  ---
  b) Alle 9 Pixel, Summe 171, geteilt durch 9 ist 19. c) Die Ecke `(2, 0)` hat 24, 36, 9, 15. Summe 84, geteilt durch 4 ist 21.
```

:::achtung[Der Filter liest sein eigenes Ergebnis]
Ein Mitschüler spart sich das neue Array und schreibt das Ergebnis direkt zurück:

```java
bild[z][s] = summe / anzahl;      // falsch: bild wird während des Filterns verändert
```

Für das Bild aus dem Beispiel „Ein Mittelwertfilter mit Randbehandlung“ wird zuerst `(0, 0)` zu 35. Danach rechnet
`(0, 1)` mit `35 + 20 + 30 + 50 + 60 + 70 = 265` und erhält `265 / 6 = 44`. Richtig wäre
`(10 + 20 + 30 + 50 + 60 + 70) / 6 = 240 / 6 = 40`. Jeder spätere Pixel rechnet mit schon geglätteten Werten, und
der Fehler wandert durch das ganze Bild. Die Reparatur: in ein neues Array `erg` schreiben und `erg` zurückgeben.
:::

:::achtung[Am Rand durch 9 geteilt]
Eine andere falsche Fassung teilt immer durch 9:

```java
erg[z][s] = summe / 9;     // falsch am Rand
```

Für die Ecke `(0, 0)` mit der Summe 140 ergibt das `140 / 9 = 15` statt 35. Die Ecke wird viel zu dunkel, und das
gefilterte Bild bekommt einen dunklen Rahmen. Teile durch die Anzahl der Pixel, die du wirklich addiert hast.
:::

```aufgabe
id: aw-bf-ausgabe-inplace
titel: Glätten im selben Array und in einem neuen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Beide Teile glätten dieselbe Zeile: Jeder Wert wird zum Durchschnitt aus sich selbst und seinen vorhandenen
  Nachbarn links und rechts. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int[] a = {0, 30, 60, 90};
      int[] neu = new int[4];
      for (int i = 0; i < 4; i++) {
          int summe = 0, anzahl = 0;
          for (int j = i - 1; j <= i + 1; j++) {
              if (j >= 0 && j < 4) {
                  summe += a[j];
                  anzahl++;
              }
          }
          neu[i] = summe / anzahl;
      }
      System.out.println(Arrays.toString(neu));
      for (int i = 0; i < 4; i++) {
          int summe = 0, anzahl = 0;
          for (int j = i - 1; j <= i + 1; j++) {
              if (j >= 0 && j < 4) {
                  summe += a[j];
                  anzahl++;
              }
          }
          a[i] = summe / anzahl;
      }
      System.out.println(Arrays.toString(a));
    loesung: |
      [15, 30, 60, 75]
      [15, 35, 61, 75]
    fehler:
      - wert: "[15, 30, 60, 75]\n[15, 30, 60, 75]"
        meldung: Im zweiten Teil wird `a[i]` sofort überschrieben. Der nächste Durchlauf liest dann den schon geglätteten linken Nachbarn, zum Beispiel 15 statt 0.
      - wert: "[15, 30, 60, 75]\n[15, 35, 61, 76]"
        meldung: 'Beim letzten Wert ist `(61 + 90) / 2 = 151 / 2`. Die Ganzzahldivision ergibt 75, nicht 76.'
hinweise:
  - Der erste Teil liest immer aus `a` und schreibt in `neu`. Der zweite liest und schreibt in `a`.
  - Rechne den zweiten Teil Schritt für Schritt und trage nach jedem Durchlauf den neuen Wert in `a` ein, bevor du weiterrechnest.
loesung: |
  **Ansatz:** Den ersten Teil mit den alten Werten rechnen, den zweiten Schritt für Schritt mit den schon veränderten Werten.
  ---
  Neues Array: `(0 + 30) / 2 = 15` und `(0 + 30 + 60) / 3 = 30`. Danach `(30 + 60 + 90) / 3 = 60` und `(60 + 90) / 2 = 75`.
  ---
  Im selben Array: `a[0]` wird 15. Dann `(15 + 30 + 60) / 3 = 35`. Dann `(35 + 60 + 90) / 3 = 185 / 3 = 61`. Dann `(61 + 90) / 2 = 75`.
  ---
  Die beiden Ergebnisse unterscheiden sich in der Mitte. Nur das neue Array liefert den richtigen Mittelwertfilter.
```

### Faltung mit einer Filtermaske

Der Mittelwertfilter behandelt alle Nachbarn gleich. Allgemeiner ist eine **Filtermaske**, auch **Faltungsmatrix**
genannt. Das ist ein kleines zweidimensionales Array mit **Gewichten**, zum Beispiel 3×3. Man legt die Maske mit
ihrer Mitte auf einen Pixel. Dann multipliziert man jedes Gewicht mit dem Pixel darunter und addiert alle Produkte.
Diese Rechnung heißt auf Aufgabenblatt 5 des Jahrgangs 2021 **Faltung**, und so nennen wir sie hier auch. (In der
Mathematik dreht man bei einer Faltung die Maske vorher um eine halbe Drehung. Bei Masken, die danach gleich aussehen, ändert
das nichts.) Pixel, die
außerhalb des Bilds liegen würden, lässt man weg. Auch das gibt das Blatt so vor.

Bei einer 3×3-Maske liegt das Gewicht `maske[i][j]` über dem Pixel `bild[z + i - 1][s + j - 1]`. Das `- 1`
verschiebt den Index so, dass die Mitte `maske[1][1]` genau über `bild[z][s]` liegt. Für `i = 0, j = 1` ist das
`bild[z - 1][s]`, der Pixel darüber.

:::beispiel[Eine Faltung von Hand]
Gegeben sind

```java
int[][] bild = {
    {4, 2, 0},
    {6, 8, 2},
    {0, 4, 6}
};
int[][] maske = {
    {0, 1, 0},
    {1, 2, 1},
    {0, 1, 0}
};
```

Wir berechnen den neuen Wert für die Mitte `(1, 1)`. Die Maske hat nur fünf Gewichte, die nicht 0 sind:

- `maske[0][1] = 1` liegt über `bild[0][1] = 2`, Produkt 2.
- `maske[1][0] = 1` liegt über `bild[1][0] = 6`, Produkt 6.
- `maske[1][1] = 2` liegt über `bild[1][1] = 8`, Produkt 16.
- `maske[1][2] = 1` liegt über `bild[1][2] = 2`, Produkt 2.
- `maske[2][1] = 1` liegt über `bild[2][1] = 4`, Produkt 4.

Die Summe ist `2 + 6 + 16 + 2 + 4 = 30`. Für die Ecke `(0, 0)` liegen die Gewichte oben und links außerhalb. Übrig
bleiben `2 · 4 = 8` (Mitte), `1 · 2 = 2` (rechts) und `1 · 6 = 6` (unten), zusammen 16.
:::

```aufgabe
id: aw-bf-gefuehrt-faltung
titel: Eine Kantenmaske anwenden
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Maske `{{1, 0, -1}, {2, 0, -2}, {1, 0, -1}}` hebt Stellen hervor, an denen das Bild von links nach rechts heller
  oder dunkler wird. Berechne die Faltung für den Pixel `(1, 1)` des Bilds

  ```java
  int[][] bild = {
      {1, 2, 5, 9},
      {2, 3, 6, 8},
      {1, 2, 7, 9}
  };
  ```
teile:
  - typ: zahl
    label: Wert der Faltung bei (1, 1)
    loesung: "1*1 - 1*5 + 2*2 - 2*6 + 1*1 - 1*7"
    fehler:
      - wert: "18"
        meldung: Das Vorzeichen stimmt nicht. Die negativen Gewichte liegen in der rechten Spalte der Maske, also über den helleren Pixeln rechts.
      - wert: "-20"
        meldung: Das mittlere Gewicht der linken Spalte ist 2, nicht 1. Der Pixel `bild[1][0] = 2` zählt doppelt.
gefuehrt:
  - text: Über welchem Pixel liegt `maske[0][0]`, wenn die Mitte auf `(1, 1)` liegt? Gib seinen Wert an.
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`maske[0][0]` liegt über `bild[1 + 0 - 1][1 + 0 - 1] = bild[0][0] = 1`.'
  - text: Welche Summe ergeben die Produkte der **linken** Maskenspalte (Gewichte 1, 2, 1)?
    teil: { typ: zahl, loesung: "1*1 + 2*2 + 1*1" }
    erklaerung: 'Die linke Spalte liegt über `bild[0][0] = 1`, `bild[1][0] = 2`, `bild[2][0] = 1`. Also `1 + 4 + 1 = 6`.'
  - text: Welche Summe ergeben die Produkte der **rechten** Maskenspalte (Gewichte -1, -2, -1)?
    teil: { typ: zahl, loesung: "-1*5 - 2*6 - 1*7" }
    erklaerung: 'Die rechte Spalte liegt über 5, 6, 7. Also `-5 - 12 - 7 = -24`.'
  - text: Die mittlere Maskenspalte hat nur Nullen. Wie lautet das Gesamtergebnis?
    teil: { typ: zahl, loesung: "6 - 24" }
    erklaerung: '`6 + 0 + (-24) = -18`. Der negative Wert sagt: Nach rechts wird das Bild heller.'
hinweise:
  - Lege die Mitte der Maske auf `bild[1][1]`. Dann liegt die Maske über den Zeilen 0 bis 2 und den Spalten 0 bis 2.
  - Multipliziere jedes Gewicht mit dem Pixel darunter und addiere die neun Produkte. Nullgewichte kannst du weglassen.
loesung: |
  **Ansatz:** Maske mit der Mitte auf `(1, 1)` legen. Sie überdeckt die Zeilen 0 bis 2 und die Spalten 0 bis 2.
  ---
  Linke Spalte: `1 · 1 + 2 · 2 + 1 · 1 = 6`. Mittlere Spalte: alle Gewichte 0, Beitrag 0.
  ---
  Rechte Spalte: `-1 · 5 - 2 · 6 - 1 · 7 = -24`. Summe `6 - 24 = -18`.
  ---
  Plausibilität: Rechts von `(1, 1)` sind die Pixel heller als links. Die Maske zieht rechts ab und addiert links, darum ist das Ergebnis negativ.
```

```aufgabe
id: aw-bf-rf-filter
titel: Aussagen über Bildfilter
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: Beurteile jede Aussage über Filter auf einem Graubild `int[][] bild`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Das Invertieren darf direkt in `bild` schreiben, ohne ein neues Array.
        richtig: true
        erklaerung: Jeder neue Wert hängt nur vom alten Wert desselben Pixels ab. Kein anderer Pixel braucht ihn danach noch.
      - text: Ein Mittelwertfilter darf direkt in `bild` schreiben, wenn man die Pixel von links oben nach rechts unten besucht.
        richtig: false
        erklaerung: Der rechte und der untere Nachbar lesen dann schon geglättete Werte. Die Reihenfolge rettet das nicht.
      - text: Bei einer Faltung mit der 3×3-Maske liegt `maske[2][2]` über `bild[z + 1][s + 1]`.
        richtig: true
        erklaerung: '`maske[i][j]` liegt über `bild[z + i - 1][s + j - 1]`. Für `i = j = 2` ist das `bild[z + 1][s + 1]`.'
      - text: Nach einem Schwellwertfilter mit Schwelle 128 kann ein Pixel den Wert 128 haben.
        richtig: false
        erklaerung: Ein Schwellwertfilter liefert nur 0 oder 255. Der Wert 128 wird zu 255.
    fehler:
      - wert: [r, r, r, f]
        meldung: Beim Mittelwertfilter in `bild` liest der Pixel `(0, 1)` den schon veränderten Wert von `(0, 0)`. Die Besuchsreihenfolge ändert daran nichts.
      - wert: [r, f, f, f]
        meldung: 'Setze in `bild[z + i - 1][s + j - 1]` die Werte `i = 2` und `j = 2` ein.'
hinweise:
  - Frage dich bei jedem Filter, ob ein Pixel den alten Wert eines anderen Pixels braucht.
loesung: |
  **Ansatz:** Punktoperationen brauchen nur den eigenen Pixel, Nachbarschaftsoperationen auch die alten Nachbarwerte.
  ---
  Aussage 1 und 3 sind richtig. Aussage 2 ist falsch, weil spätere Pixel schon geglättete Nachbarn lesen.
  ---
  Aussage 4 ist falsch, weil ein Schwellwertfilter nur 0 und 255 erzeugt.
```

```aufgabe
id: aw-bf-lueckentext-mittel
titel: Den Mittelwertfilter vervollständigen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ergänze den Mittelwertfilter so, dass er ein **neues** Bild liefert und am Rand nur über die vorhandenen Pixel mittelt.
teile:
  - typ: lueckentext
    code: |
      public class Glatt {
          public static int[][] mittelwert(int[][] bild) {
              int[][] erg = new int[bild.length][bild[0].length];
              for (int z = 0; z < bild.length; z++) {
                  for (int s = 0; s < bild[z].length; s++) {
                      int summe = 0;
                      int anzahl = 0;
                      for (int nz = z - 1; nz <= ___; nz++) {
                          for (int ns = s - 1; ns <= s + 1; ns++) {
                              if (nz >= 0 && nz < bild.length && ns >= 0 && ns < bild[nz].length) {
                                  summe += ___;
                                  anzahl++;
                              }
                          }
                      }
                      ___ = summe / anzahl;
                  }
              }
              return erg;
          }
      }
    luecken: [["z + 1", "z+1"], ["bild[nz][ns]"], ["erg[z][s]"]]
    fehler:
      - wert: ["z + 1", "bild[nz][ns]", "bild[z][s]"]
        meldung: Das Ergebnis gehört in das neue Array `erg`. Schreibst du in `bild`, lesen die späteren Pixel schon geglättete Werte.
      - wert: ["z + 1", "bild[z][s]", "erg[z][s]"]
        meldung: Addiert werden die Pixel des 3×3-Quadrats, also `bild[nz][ns]`. Mit `bild[z][s]` addierst du neunmal den mittleren Pixel.
hinweise:
  - Die Zeilenschleife läuft wie die Spaltenschleife von eins davor bis eins danach.
  - Gelesen wird aus `bild` an der Nachbarposition, geschrieben in `erg` an der eigenen Position.
loesung: |
  **Ansatz:** Das 3×3-Quadrat reicht von `z - 1` bis `z + 1`. Addiert wird der Pixel an `(nz, ns)`.
  ---
  Lücke 1 ist `z + 1`, Lücke 2 ist `bild[nz][ns]`.
  ---
  Lücke 3 ist `erg[z][s]`. So bleibt `bild` unverändert, und jeder Pixel rechnet mit den alten Werten.
```

```aufgabe
id: aw-bf-zeilen-faltung
titel: Eine verrutschte Maske
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Die Methode soll den Wert der Faltung für einen Pixel `(z, s)` mit einer 3×3-Maske berechnen. Sie liefert aber
  für fast alle Pixel falsche Werte. Markiere die fehlerhafte Zeile.
teile:
  - typ: zeilen
    code: |
      public static int falteBei(int[][] bild, int[][] maske, int z, int s) {
          int summe = 0;
          for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                  int bz = z + i;
                  int bs = s + j - 1;
                  if (bz >= 0 && bz < bild.length && bs >= 0 && bs < bild[bz].length) {
                      summe += maske[i][j] * bild[bz][bs];
                  }
              }
          }
          return summe;
      }
    loesung: [5]
    fehler:
      - wert: [6]
        meldung: '`s + j - 1` ist richtig. Für `j = 1` ergibt es `s`, die Mitte der Maske liegt also über der Spalte des Pixels.'
      - wert: [8]
        meldung: Die Multiplikation ist richtig. Der Fehler liegt darin, welcher Pixel gelesen wird.
hinweise:
  - Setze `i = 1` ein. Über welcher Zeile liegt dann die mittlere Maskenzeile?
  - Die Mitte `maske[1][1]` muss über `bild[z][s]` liegen.
loesung: |
  **Ansatz:** Prüfe für `i = 1` und `j = 1`, ob die Mitte der Maske über `(z, s)` liegt.
  ---
  In Zeile 6 ergibt `j = 1` die Spalte `s`, richtig. In Zeile 5 ergibt `i = 1` aber die Zeile `z + 1`. Die Maske ist um eine Zeile nach unten verrutscht.
  ---
  Richtig ist `int bz = z + i - 1;`. Dann liegt die mittlere Maskenzeile über Zeile `z`.
```

```aufgabe
id: aw-bf-code-binarisiere
titel: Binarisieren in ein neues Bild
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `int[][] binarisiere(int[][] bild, int schwelle)`. Die Methode liefert ein **neues** Bild mit denselben
  Maßen. Ein Pixel mit `bild[z][s] >= schwelle` wird 255, jeder andere 0. Das übergebene `bild` darf **nicht**
  verändert werden.

  Vorbedingungen: `bild` ist rechteckig, hat mindestens eine Zeile, und jede Zeile hat mindestens einen Eintrag.
teile:
  - typ: code
    vorlage: |
      public class Binaer {
          public static int[][] binarisiere(int[][] bild, int schwelle) {
              return bild; // TODO
          }
      }
    musterloesung: |
      public class Binaer {
          public static int[][] binarisiere(int[][] bild, int schwelle) {
              int[][] erg = new int[bild.length][bild[0].length];
              for (int z = 0; z < bild.length; z++) {
                  for (int s = 0; s < bild[z].length; s++) {
                      if (bild[z][s] >= schwelle) {
                          erg[z][s] = 255;
                      } else {
                          erg[z][s] = 0;
                      }
                  }
              }
              return erg;
          }
      }
    tests:
      - { aufruf: "binarisiere(new int[][]{{10, 200}, {99, 100}}, 100)", erwartet: "new int[][]{{0, 255}, {0, 255}}", beschreibung: "Wert genau auf der Schwelle wird weiß" }
      - { aufruf: "binarisiere(new int[][]{{0, 255, 128}}, 129)", erwartet: "new int[][]{{0, 255, 0}}" }
      - { vorher: "int[][] b = {{50, 150}, {250, 5}};", aufruf: "binarisiere(b, 100)", ergebnis: "b", erwartet: "new int[][]{{50, 150}, {250, 5}}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "binarisiere(new int[][]{{7}, {8}, {9}}, 8)", erwartet: "new int[][]{{0}, {255}, {255}}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Ein Pixel, der genau gleich der Schwelle ist, wird weiß. Verwende `>=`, nicht `>`." }
      - { wert: 3, meldung: "Das Original wurde verändert. Lege mit `new int[bild.length][bild[0].length]` ein neues Array an und schreibe nur dort hinein." }
hinweise:
  - Lege zuerst ein neues Array mit denselben Maßen an. Schreibe alle Ergebnisse dort hinein.
  - Durchlaufe alle Pixel mit zwei Schleifen und vergleiche mit `>=`.
loesung: |
  **Ansatz:** Die Aufgabe verlangt ein neues Bild. Also neues Array anlegen, aus `bild` lesen, in `erg` schreiben.
  ---
  ```java
  int[][] erg = new int[bild.length][bild[0].length];
  for (int z = 0; z < bild.length; z++) {
      for (int s = 0; s < bild[z].length; s++) {
          if (bild[z][s] >= schwelle) {
              erg[z][s] = 255;
          } else {
              erg[z][s] = 0;
          }
      }
  }
  return erg;
  ```
  ---
  Der `else`-Zweig ist streng genommen unnötig, weil ein neues `int`-Array schon mit 0 gefüllt ist. Er macht die Absicht aber deutlich.
  ---
  Probe: Bei Schwelle 100 werden 10 und 99 zu 0, 100 und 200 zu 255. Das übergebene Array behält seine Werte.
```

```aufgabe
id: aw-bf-code-mittelwert
titel: Der Mittelwertfilter
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 2 (Mittelwertfilter und applyFilter, nachgebaut und vereinfacht)
angabe: |
  Implementiere `int[][] glaette(int[][] bild)`. Die Methode liefert ein **neues** Bild. Jeder Pixel wird zum
  ganzzahligen Durchschnitt aus sich selbst und seinen Nachbarn in der Achter-Nachbarschaft, soweit sie im Bild liegen.
  `bild` bleibt unverändert.

  Vorbedingungen: `bild` ist rechteckig, hat mindestens eine Zeile, und jede Zeile hat mindestens einen Eintrag.

  Beispiel: Aus `{{12, 18, 30}, {24, 36, 6}, {9, 15, 21}}` wird `{{22, 21, 22}, {19, 19, 21}, {21, 18, 19}}`.
teile:
  - typ: code
    vorlage: |
      public class Glaetten {
          public static int[][] glaette(int[][] bild) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Glaetten {
          public static int[][] glaette(int[][] bild) {
              int[][] erg = new int[bild.length][bild[0].length];
              for (int z = 0; z < bild.length; z++) {
                  for (int s = 0; s < bild[z].length; s++) {
                      int summe = 0;
                      int anzahl = 0;
                      for (int nz = z - 1; nz <= z + 1; nz++) {
                          for (int ns = s - 1; ns <= s + 1; ns++) {
                              if (nz >= 0 && nz < bild.length && ns >= 0 && ns < bild[nz].length) {
                                  summe += bild[nz][ns];
                                  anzahl++;
                              }
                          }
                      }
                      erg[z][s] = summe / anzahl;
                  }
              }
              return erg;
          }
      }
    tests:
      - { aufruf: "glaette(new int[][]{{12, 18, 30}, {24, 36, 6}, {9, 15, 21}})", erwartet: "new int[][]{{22, 21, 22}, {19, 19, 21}, {21, 18, 19}}" }
      - { aufruf: "glaette(new int[][]{{100}})", erwartet: "new int[][]{{100}}", beschreibung: "ein einziger Pixel" }
      - { aufruf: "glaette(new int[][]{{0, 30, 60, 90}})", erwartet: "new int[][]{{15, 30, 60, 75}}", beschreibung: "eine einzige Zeile" }
      - { vorher: "int[][] b = {{0, 255}, {255, 0}};", aufruf: "glaette(b)", ergebnis: "b", erwartet: "new int[][]{{0, 255}, {255, 0}}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "glaette(new int[][]{{0, 90, 30}, {60, 120, 0}})", erwartet: "new int[][]{{67, 50, 60}, {67, 50, 60}}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche die Ecken. Teilst du dort durch 9 statt durch die Anzahl der Pixel im Bild? Oder schreibst du in `bild` statt in ein neues Array, sodass spätere Pixel schon geglättete Werte lesen?" }
      - { wert: 3, meldung: "Bei einer einzigen Zeile gibt es keine Zeilen darüber und darunter. Prüfst du `nz` gegen `bild.length`, bevor du `bild[nz]` liest?" }
      - { wert: 4, meldung: "Das Original wurde verändert. Schreibe alle Ergebnisse in ein neues Array." }
hinweise:
  - Vier Schleifen. Die äußeren zwei laufen über alle Pixel, die inneren zwei über das 3×3-Quadrat um den Pixel.
  - Zähle in `anzahl` mit, wie viele Pixel du addierst. Teile am Ende ganzzahlig durch `anzahl`.
loesung: |
  **Ansatz:** Neues Array anlegen. Für jeden Pixel die Pixel im 3×3-Quadrat addieren, die im Bild liegen, und durch ihre Anzahl teilen.
  ---
  ```java
  int[][] erg = new int[bild.length][bild[0].length];
  for (int z = 0; z < bild.length; z++) {
      for (int s = 0; s < bild[z].length; s++) {
          int summe = 0;
          int anzahl = 0;
          for (int nz = z - 1; nz <= z + 1; nz++) {
              for (int ns = s - 1; ns <= s + 1; ns++) {
                  if (nz >= 0 && nz < bild.length && ns >= 0 && ns < bild[nz].length) {
                      summe += bild[nz][ns];
                      anzahl++;
                  }
              }
          }
          erg[z][s] = summe / anzahl;
      }
  }
  return erg;
  ```
  ---
  `anzahl` ist nie 0, denn der Pixel selbst liegt immer im Bild. Darum ist die Division sicher.
  ---
  Probe mit dem Beispiel: Die Ecke `(0, 0)` mittelt 12, 18, 24, 36. Das sind 90, geteilt durch 4 ergibt 22.
```

```reflexion
frage: Warum braucht ein Mittelwertfilter ein neues Ergebnis-Array, das Invertieren aber nicht? Formuliere eine allgemeine Regel, wann ein Filter direkt in das Bild schreiben darf.
antwort: |
  Beim Invertieren hängt der neue Wert eines Pixels nur von seinem eigenen alten Wert ab. Sobald er überschrieben ist,
  braucht ihn niemand mehr. Beim Mittelwertfilter brauchen aber die Nachbarn den alten Wert noch. Wird er vorher
  überschrieben, rechnen sie mit einem schon geglätteten Wert. Die Regel lautet: Ein Filter darf direkt ins Bild
  schreiben, wenn jeder neue Wert nur vom alten Wert desselben Pixels abhängt (Punktoperation). Sobald Nachbarn
  beteiligt sind (Nachbarschaftsoperation), braucht er ein neues Array.
```

## Flood-Fill: zusammenhängende Flächen rekursiv füllen

```aufgabe
id: aw-ff-check-rueckweg
titel: Ausgaben vor und nach dem Selbstaufruf
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: ausgabe
    code: |
      public class HinRueck {
          public static void f(int n) {
              if (n == 0) {
                  return;
              }
              System.out.println("hin " + n);
              f(n - 1);
              System.out.println("rueck " + n);
          }

          public static void main(String[] args) {
              f(2);
          }
      }
    loesung: |
      hin 2
      hin 1
      rueck 1
      rueck 2
    fehler:
      - wert: "hin 2\nrueck 2\nhin 1\nrueck 1"
        meldung: '`f(2)` wartet beim Selbstaufruf, bis `f(1)` **ganz** fertig ist. Erst danach kommt `rueck 2`.'
hinweise:
  - Ein Aufruf macht erst hinter dem Selbstaufruf weiter, wenn der Selbstaufruf vollständig abgearbeitet ist.
loesung: |
  `f(2)` gibt `hin 2` aus und ruft `f(1)` auf. `f(1)` gibt `hin 1` aus und ruft `f(0)` auf, das sofort endet.
  ---
  Zurück in `f(1)` folgt `rueck 1`. Danach ist `f(2)` wieder dran und gibt `rueck 2` aus.
```

Im Malprogramm färbt der Farbeimer eine ganze Fläche mit einem Klick. Welche Pixel gehören zu dieser Fläche? Alle,
die du vom angeklickten Pixel aus erreichst, wenn du nur auf Pixel **derselben Farbe** trittst und dich nur nach
oben, unten, links oder rechts bewegst. Man sagt, diese Pixel **hängen zusammen**.

:::definition[Zusammenhängende Fläche]
Zwei Zellen gleicher Farbe hängen zusammen, wenn es einen Weg von der einen zur anderen gibt. Dieser Weg darf nur
über Zellen derselben Farbe führen, und jeder Schritt geht zu einem Nachbarn in der Vierer-Nachbarschaft. Die
**zusammenhängende Fläche** einer Zelle besteht aus allen Zellen, die mit ihr zusammenhängen.
:::

**Beispiel:** In der Zeile `. . # . .` hängen die beiden linken Punkte zusammen. Sie sind direkte Nachbarn.

**Kein Beispiel:** Die Punkte links und rechts vom `#` hängen in dieser Zeile **nicht** zusammen, denn der Weg müsste
über das `#` führen. Auch zwei Punkte, die sich nur an einer Ecke berühren (schräg), hängen in der
Vierer-Nachbarschaft nicht zusammen.

Der **Flood-Fill-Algorithmus** füllt eine solche Fläche. Er ist rekursiv und lässt sich in einem Satz beschreiben:
„Färbe diese Zelle und dann die Flächen ab allen vier Nachbarn.“ Damit das endet, braucht er Basisfälle. Ein Aufruf
`fuelle(z, s)` tut **nichts**, wenn eine der folgenden Situationen vorliegt:

1. `(z, s)` liegt **außerhalb** des Rasters.
2. Die Zelle hat **nicht die alte Farbe**. Das deckt zwei Basisfälle auf einmal ab: Die Zelle ist **schon gefüllt**, oder sie **passt nicht**, weil sie zu einer anderen Fläche gehört, zum Beispiel zu einer Wand.

Sonst färbt er die Zelle mit der **neuen Farbe** und ruft sich für die vier Nachbarn auf.

:::beispiel[Flood-Fill auf einem Zeichen-Raster]
```java
public class Fuellen {
    public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
        if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
            return;                       // Basisfall 1: außerhalb
        }
        if (bild[z][s] != alt) {
            return;                       // Basisfall 2: schon gefüllt oder andere Farbe
        }
        bild[z][s] = neu;                 // zuerst färben
        fuelle(bild, z - 1, s, alt, neu); // oben
        fuelle(bild, z + 1, s, alt, neu); // unten
        fuelle(bild, z, s - 1, alt, neu); // links
        fuelle(bild, z, s + 1, alt, neu); // rechts
    }

    public static void main(String[] args) {
        char[][] bild = {
            {'.', '.', '.', '#', '.'},
            {'#', '#', '.', '#', '.'},
            {'.', '.', '.', '.', '#'},
            {'.', '#', '#', '.', '.'}
        };
        fuelle(bild, 0, 0, '.', 'o');
        for (int z = 0; z < bild.length; z++) {
            for (int s = 0; s < bild[z].length; s++) {
                System.out.print(bild[z][s]);
            }
            System.out.println();
        }
    }
}
```

- Die erste Bedingung ist die Randprüfung mit `||` („oder“): Schon eine verletzte Grenze reicht, um aufzuhören. Wegen der Kurzschlussauswertung liest Java `bild[z].length` nur, wenn `z` gültig ist.
- Die zweite Bedingung fängt Wände (`#`), schon gefüllte Zellen (`o`) und alle anderen Farben ab.
- Erst danach wird gefärbt, und erst danach kommen die vier Selbstaufrufe.

Die Ausgabe ist

```
ooo#.
##o#.
oooo#
o##oo
```

Gefüllt wurden 11 Zellen. Die zwei Punkte rechts oben bleiben, denn sie sind durch `#` vom Rest getrennt.
:::

Warum endet dieser Algorithmus? Schau dir an, was ein Aufruf tun kann. Entweder er endet sofort in einem
Basisfall, oder er färbt **eine** Zelle von `alt` auf `neu` um. Danach hat diese Zelle nie wieder die alte Farbe und
kann kein zweites Mal gefärbt werden. Es gibt nur endlich viele Zellen mit der alten Farbe. Jede färbt ein Aufruf
höchstens einmal, und jede gefärbte Zelle löst genau vier weitere Aufrufe aus. Darum gibt es insgesamt nur endlich
viele Aufrufe. Der **Fortschritt** dieser Rekursion ist also nicht ein kleiner werdendes `n`, sondern die
schrumpfende Zahl der Zellen mit der alten Farbe.

```aufgabe
id: aw-ff-ausgabe-ergebnis
titel: Was wird gefüllt?
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Methode `fuelle` ist dieselbe wie im Beispiel „Flood-Fill auf einem Zeichen-Raster“. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Fuellen2 {
          public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
              if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
                  return;
              }
              if (bild[z][s] != alt) {
                  return;
              }
              bild[z][s] = neu;
              fuelle(bild, z - 1, s, alt, neu);
              fuelle(bild, z + 1, s, alt, neu);
              fuelle(bild, z, s - 1, alt, neu);
              fuelle(bild, z, s + 1, alt, neu);
          }

          public static void main(String[] args) {
              char[][] bild = {
                  {'.', '#', '.', '.', '.'},
                  {'.', '#', '.', '#', '.'},
                  {'#', '.', '.', '#', '.'},
                  {'.', '#', '.', '#', '.'}
              };
              fuelle(bild, 0, 2, '.', '+');
              for (int z = 0; z < bild.length; z++) {
                  for (int s = 0; s < bild[z].length; s++) {
                      System.out.print(bild[z][s]);
                  }
                  System.out.println();
              }
          }
      }
    loesung: |
      .#+++
      .#+#+
      #++#+
      .#+#+
    fehler:
      - wert: "+#+++\n+#+#+\n#++#+\n+#+#+"
        meldung: Die Punkte ganz links berühren die gefüllte Fläche nur schräg, an einer Ecke. `fuelle` geht aber nur nach oben, unten, links und rechts. Diese Punkte hängen darum nicht mit `(0, 2)` zusammen.
hinweise:
  - Beginne bei `(0, 2)` und male in Gedanken jede Zelle an, die du über Punkte erreichst, ohne schräg zu gehen.
loesung: |
  **Ansatz:** Die Fläche von `(0, 2)` sind alle Punkte, die über Vierer-Schritte auf Punkten erreichbar sind.
  ---
  Von `(0, 2)` erreichst du die ganze rechte Spalte, die Spalte 2 bis nach unten und über `(2, 2)` auch `(2, 1)`.
  ---
  Die Punkte `(0, 0)`, `(1, 0)` und `(3, 0)` sind durch `#` abgetrennt. `(2, 1)` berührt sie nur schräg. Sie bleiben `.`.
```

:::achtung[Erst aufrufen, dann färben]
Ein Student stellt die Färbung ans Ende:

```java
fuelle(bild, z - 1, s, alt, neu);
fuelle(bild, z + 1, s, alt, neu);
fuelle(bild, z, s - 1, alt, neu);
fuelle(bild, z, s + 1, alt, neu);
bild[z][s] = neu;                    // falsch: zu spät
```

Starte bei `(0, 0)` in einem Feld aus lauter Punkten. Der Aufruf für `(0, 0)` ruft zuerst „unten“ auf, also `(1, 0)`.
Der Aufruf für `(1, 0)` ruft „oben“ auf, also wieder `(0, 0)`. Diese Zelle hat noch die alte Farbe, denn sie wird erst
am Ende gefärbt. So rufen sich `(0, 0)` und `(1, 0)` immer abwechselnd auf, und das Programm bricht mit einem
`StackOverflowError` ab. Die Reparatur: zuerst färben, dann die Nachbarn aufrufen. Die Farbe ist die **Markierung**
„hier war ich schon“.
:::

:::achtung[Alte und neue Farbe gleich]
Der Aufruf `fuelle(bild, 0, 0, '.', '.')` soll eine Fläche „mit Punkten füllen“. Die Zelle `(0, 0)` hat die alte
Farbe `.`, wird mit `.` gefärbt und hat danach **immer noch** die alte Farbe. Die Markierung wirkt nicht. Wieder rufen
sich zwei Nachbarn endlos gegenseitig auf. Darum steht bei Flood-Fill fast immer die Vorbedingung `alt != neu`. Ist
die Farbe schon gleich, ist ohnehin nichts zu tun.
:::

```aufgabe
id: aw-ff-zahl-groesse
titel: Wie groß ist die Fläche?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist das Raster (Zeilen von oben nach unten 0 bis 3, Spalten von links nach rechts 0 bis 4)

  ```
  ..#..
  .#...
  #..#.
  ..#..
  ```

  Wie viele Zellen färbt `fuelle(bild, z, s, '.', 'o')` aus dem Beispiel „Flood-Fill auf einem Zeichen-Raster“?
teile:
  - typ: zahl
    label: a) Start bei (0, 0)
    loesung: "3"
    fehler:
      - wert: "15"
        meldung: Du bist schräg gegangen. Von `(1, 0)` nach `(2, 1)` geht es nur über eine Ecke. In der Vierer-Nachbarschaft ist die linke obere Ecke ein eigenes, kleines Gebiet.
  - typ: zahl
    label: b) Start bei (0, 3)
    loesung: "12"
    fehler:
      - wert: "9"
        meldung: Von `(1, 2)` geht es nach unten zu `(2, 2)` und weiter nach links zu `(2, 1)`. Von dort erreichst du auch `(3, 1)` und `(3, 0)`.
hinweise:
  - Markiere die Startzelle und färbe Schritt für Schritt jeden Punkt, der neben einem schon gefärbten Punkt liegt (nicht schräg).
  - Zähle am Ende die gefärbten Punkte.
loesung: |
  **Ansatz:** Von der Startzelle aus alle Punkte färben, die über Vierer-Schritte erreichbar sind, und zählen.
  ---
  a) `(0, 0)`, `(0, 1)` und `(1, 0)`. Rechts liegt `#` bei `(0, 2)`, darunter `#` bei `(1, 1)` und `(2, 0)`. Die Fläche hat 3 Zellen.
  ---
  b) Die Fläche umfasst `(0, 3)`, `(0, 4)`, `(1, 2)`, `(1, 3)` und `(1, 4)`. Dazu kommen `(2, 4)`, `(3, 4)` und `(3, 3)` sowie über `(2, 2)` auch `(2, 1)`, `(3, 1)` und `(3, 0)`. Das sind 12 Zellen.
  ---
  Kontrolle: Das Raster hat 20 Zellen, davon 5 `#`. Zusammen mit den 3 Zellen aus a) sind alle 15 Punkte verteilt.
```

### In welcher Reihenfolge wird gefüllt?

Flood-Fill ruft sich bis zu viermal selbst auf. Das ist eine **verzweigte Rekursion** wie in
[11.3 Der Aufrufbaum: Reihenfolge bei zwei Selbstaufrufen](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen). Für das
Endergebnis ist die Reihenfolge der vier Selbstaufrufe egal. Die Fläche wird immer vollständig gefüllt. Die
Reihenfolge, in der die Zellen gefärbt werden, hängt aber davon ab. Um sie zu bestimmen, musst du den Aufrufstapel
genau verfolgen. Das ist eine gute Übung für jede Frage nach dem Ablauf einer Rekursion.

:::beispiel[Die Färbereihenfolge in einem 2×3-Feld]
Wir füllen ein Feld mit 2 Zeilen und 3 Spalten voller Punkte ab `(0, 0)`. Die Reihenfolge der Aufrufe ist oben, unten,
links, rechts.

1. `(0, 0)` wird gefärbt (Nummer 1). Oben liegt außerhalb. Der Aufruf **unten** geht zu `(1, 0)`.
2. `(1, 0)` wird gefärbt (Nummer 2). Oben ist `(0, 0)` schon gefärbt, unten und links liegen außerhalb. Rechts geht es zu `(1, 1)`.
3. `(1, 1)` wird gefärbt (Nummer 3). Oben geht es zu `(0, 1)`.
4. `(0, 1)` wird gefärbt (Nummer 4). Oben außerhalb, unten und links schon gefärbt, rechts geht es zu `(0, 2)`.
5. `(0, 2)` wird gefärbt (Nummer 5). Unten geht es zu `(1, 2)`.
6. `(1, 2)` wird gefärbt (Nummer 6). Alle seine Nachbarn sind gefärbt oder liegen außerhalb.

Danach kehren alle offenen Aufrufe der Reihe nach zurück. Ihre restlichen Selbstaufrufe enden sofort in einem
Basisfall. Die Reihenfolge der Färbung ist `(0, 0)`, `(1, 0)`, `(1, 1)`, `(0, 1)`, `(0, 2)`, `(1, 2)`, eine
Schlangenlinie. Beim Färben von `(1, 2)` waren sechs Aufrufe gleichzeitig offen.
:::

```aufgabe
id: aw-ff-gefuehrt-reihenfolge
titel: Färbereihenfolge mit anderer Richtungsfolge
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Feld mit 3 Zeilen und 2 Spalten besteht nur aus Punkten. `fuelle` startet bei `(0, 0)`. Diesmal stehen die vier
  Selbstaufrufe in der Reihenfolge **rechts, unten, links, oben**. In welcher Reihenfolge werden die Zellen gefärbt?
teile:
  - typ: reihenfolge
    elemente: ["`(0, 0)`", "`(0, 1)`", "`(1, 1)`", "`(2, 1)`", "`(2, 0)`", "`(1, 0)`"]
    fehler:
      - wert: [0, 5, 4, 3, 2, 1]
        meldung: 'Der erste Selbstaufruf ist jetzt **rechts**. Von `(0, 0)` geht es darum zuerst nach `(0, 1)`, nicht nach unten.'
gefuehrt:
  - text: Welche Zelle wird als zweite gefärbt?
    teil:
      typ: auswahl
      optionen: ['`(0, 1)`', '`(1, 0)`']
      richtig: [0]
    erklaerung: Der erste Selbstaufruf von `(0, 0)` ist rechts, also `(0, 1)`. Diese Zelle ist noch ein Punkt.
  - text: Von `(0, 1)` aus liegt rechts nichts mehr. Wohin geht der nächste Aufruf, der etwas färbt?
    teil:
      typ: auswahl
      optionen: ['`(1, 1)`, unten', '`(0, 0)`, links']
      richtig: [0]
    erklaerung: Rechts liegt außerhalb, also folgt unten. `(1, 1)` ist noch ein Punkt und wird als dritte Zelle gefärbt.
  - text: Welche Zelle wird als **letzte** gefärbt?
    teil:
      typ: auswahl
      optionen: ['`(1, 0)`', '`(2, 0)`', '`(2, 1)`']
      richtig: [0]
    erklaerung: 'Von `(1, 1)` geht es nach unten zu `(2, 1)`, dann links zu `(2, 0)`, dann oben zu `(1, 0)`.'
hinweise:
  - Prüfe bei jeder gefärbten Zelle die Richtungen in der Reihenfolge rechts, unten, links, oben. Der erste Nachbar, der noch ein Punkt ist, kommt als Nächstes dran.
  - Erst wenn alle vier Richtungen einer Zelle erledigt sind, geht es im Aufruf davor weiter.
loesung: |
  **Ansatz:** Den Aufrufstapel verfolgen. Jede Zelle probiert rechts, unten, links, oben.
  ---
  `(0, 0)` färbt sich, geht rechts zu `(0, 1)`. Dort ist rechts außerhalb, unten `(1, 1)`. Von `(1, 1)` ist rechts außerhalb, unten `(2, 1)`.
  ---
  Von `(2, 1)` sind rechts und unten außerhalb, links `(2, 0)`. Von `(2, 0)` ist rechts gefärbt, unten und links außerhalb, oben `(1, 0)`.
  ---
  Reihenfolge: `(0, 0)`, `(0, 1)`, `(1, 1)`, `(2, 1)`, `(2, 0)`, `(1, 0)`. Wieder eine Schlangenlinie, diesmal andersherum.
```

```aufgabe
id: aw-ff-rf-aussagen
titel: Aussagen über Flood-Fill
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: Beurteile jede Aussage über `fuelle` aus dem Beispiel „Flood-Fill auf einem Zeichen-Raster“.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Vertauscht man die Reihenfolge der vier Selbstaufrufe, ändert sich das Endergebnis.
        richtig: false
        erklaerung: Es wird immer die ganze zusammenhängende Fläche gefüllt. Nur die Reihenfolge des Färbens ändert sich.
      - text: Startet man auf einer Zelle mit `#`, färbt `fuelle(bild, z, s, '.', 'o')` nichts.
        richtig: true
        erklaerung: Die Startzelle hat nicht die alte Farbe `.`. Der zweite Basisfall greift sofort.
      - text: Jede Zelle wird höchstens einmal gefärbt.
        richtig: true
        erklaerung: Nach dem Färben hat sie die neue Farbe. Jeder spätere Aufruf für sie endet im zweiten Basisfall.
      - text: Jede Zelle wird höchstens einmal **aufgerufen**.
        richtig: false
        erklaerung: Eine Zelle kann von mehreren Nachbarn aus aufgerufen werden. Nur der erste dieser Aufrufe färbt, die anderen enden sofort.
    fehler:
      - wert: [f, r, r, r]
        meldung: Unterscheide „aufgerufen“ und „gefärbt“. Die Zelle `(0, 0)` wird im 2×3-Beispiel später noch einmal von `(1, 0)` aus aufgerufen.
      - wert: [r, r, r, f]
        meldung: Die Reihenfolge der Selbstaufrufe beeinflusst nur, **wann** eine Zelle gefärbt wird, nicht **ob**.
hinweise:
  - Denk an das 2×3-Beispiel. Welche Aufrufe treffen dort auf schon gefärbte Zellen?
loesung: |
  **Ansatz:** Unterscheide zwischen Aufruf, Färben und Endergebnis.
  ---
  Aussage 2 und 3 sind richtig. Aussage 1 ist falsch, das Endergebnis ist immer die ganze Fläche.
  ---
  Aussage 4 ist falsch. Eine Zelle wird von jedem ihrer gefärbten Nachbarn einmal aufgerufen, aber nur einmal gefärbt.
```

### Wie viele Aufrufe gibt es, und wie tief wird der Stapel?

Jede gefärbte Zelle ruft `fuelle` genau viermal auf. Dazu kommt der erste Aufruf aus `main`. Wenn insgesamt `k`
Zellen gefärbt werden, gibt es also genau `1 + 4 · k` Aufrufe. Die meisten davon enden sofort in einem Basisfall.

Wichtiger ist die **Tiefe**, also die Anzahl der Aufrufe, die gleichzeitig offen sind. Im 2×3-Beispiel war sie 6. In
einem Bild mit 1000 × 1000 Pixeln kann sie bis zu einer Million werden, wenn die Füllung eine lange Schlangenlinie
zieht. Jeder offene Aufruf belegt Platz auf dem Aufrufstapel (siehe
[10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg)). Der Standardstapel von Java
reicht dafür nicht, und es kommt zum `StackOverflowError`, obwohl der Algorithmus richtig ist. Darum steht auf
Aufgabenblatt 5 der Hinweis, dass die Stapelgröße mit der Option `-Xss16m` auf 16 Megabyte erhöht wurde.

```aufgabe
id: aw-ff-zahl-aufrufe
titel: Aufrufe zählen
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Wie oft wird `fuelle` aus dem Beispiel „Flood-Fill auf einem Zeichen-Raster“ insgesamt aufgerufen, den Aufruf aus
  `main` mitgezählt? Gefüllt wird jeweils ab `(0, 0)` mit `alt = '.'` und `neu = 'o'`.
teile:
  - typ: zahl
    label: a) Feld mit einer Zeile `...`
    loesung: "1 + 4*3"
    fehler:
      - wert: "3"
        meldung: Das ist die Zahl der gefärbten Zellen. Jede gefärbte Zelle ruft `fuelle` aber viermal auf, auch für Nachbarn außerhalb.
      - wert: "12"
        meldung: Der erste Aufruf aus `main` zählt mit. Er ist der Aufruf, der die Startzelle färbt.
  - typ: zahl
    label: b) Feld mit einer Zeile `..#`
    loesung: "1 + 4*2"
    fehler:
      - wert: "13"
        meldung: Das `#` wird zwar aufgerufen, aber nicht gefärbt. Es löst keine weiteren Aufrufe aus.
hinweise:
  - Zähle zuerst, wie viele Zellen gefärbt werden. Jede davon macht genau vier Selbstaufrufe.
  - Zu den Selbstaufrufen kommt der Startaufruf aus `main`.
loesung: |
  **Ansatz:** Jeder Aufruf entsteht entweder aus `main` oder als einer der vier Selbstaufrufe einer gefärbten Zelle. Also gilt Aufrufe = 1 + 4 · (gefärbte Zellen).
  ---
  a) Drei Zellen werden gefärbt, also `1 + 4 · 3 = 13` Aufrufe.
  ---
  b) Zwei Zellen werden gefärbt, das `#` nicht. Also `1 + 4 · 2 = 9` Aufrufe. Probe: Die Zelle `(0, 1)` ruft rechts das `#` auf, und dieser Aufruf endet sofort.
```

```aufgabe
id: aw-ff-zeilen-fehler
titel: Zwei Fehler in einem Flood-Fill
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Diese Fassung endet für fast jede Eingabe mit einem `StackOverflowError` oder einer
  `ArrayIndexOutOfBoundsException`. Markiere die **zwei** Zeilen, die falsch sind.
teile:
  - typ: zeilen
    code: |
      public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
          if (z < 0 || z > bild.length || s < 0 || s >= bild[z].length) {
              return;
          }
          if (bild[z][s] != alt) {
              return;
          }
          fuelle(bild, z - 1, s, alt, neu);
          fuelle(bild, z + 1, s, alt, neu);
          fuelle(bild, z, s - 1, alt, neu);
          fuelle(bild, z, s + 1, alt, neu);
          bild[z][s] = neu;
      }
    loesung: [2, 12]
    fehler:
      - wert: [12]
        meldung: Die späte Färbung ist ein Fehler. Es gibt aber noch einen zweiten in der Randprüfung. Was passiert für `z = bild.length`?
      - wert: [2]
        meldung: Die Randprüfung hat einen Fehler. Es gibt aber noch einen zweiten. Wann wird die Zelle als „besucht“ markiert?
      - wert: [5, 12]
        meldung: '`bild[z][s] != alt` ist richtig. Schau dir in Zeile 2 genau den Vergleich mit `bild.length` an.'
hinweise:
  - Prüfe die Randbedingung mit `z = bild.length`. Ist das eine gültige Zeile?
  - Wann wird eine Zelle gefärbt, und was passiert, wenn ein Nachbar sie vorher wieder aufruft?
loesung: |
  **Ansatz:** Die Randprüfung muss jeden ungültigen Index abfangen, und die Färbung muss vor den Selbstaufrufen stehen.
  ---
  Zeile 2: `z > bild.length` lässt `z = bild.length` durch. Dann wirft `bild[z]` eine `ArrayIndexOutOfBoundsException`. Richtig ist `z >= bild.length`.
  ---
  Zeile 12: Die Färbung kommt zu spät. Zwei Nachbarn rufen sich gegenseitig auf, bevor einer gefärbt ist. Die Zeile gehört vor den ersten Selbstaufruf.
```

```aufgabe
id: aw-ff-lueckentext
titel: Flood-Fill ergänzen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: Ergänze die vier Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Flut {
          public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
              if (z < 0 || z >= bild.length || s < 0 || s >= ___) {
                  return;
              }
              if (bild[z][s] ___ alt) {
                  return;
              }
              ___ = neu;
              fuelle(bild, z - 1, s, alt, neu);
              fuelle(bild, z + 1, s, alt, neu);
              fuelle(bild, z, s - 1, alt, neu);
              fuelle(bild, ___, alt, neu);
          }
      }
    luecken: [["bild[z].length"], ["!="], ["bild[z][s]"], ["z, s + 1", "z,s+1"]]
    fehler:
      - wert: ["bild[z].length", "==", "bild[z][s]", "z, s + 1"]
        meldung: Der Basisfall greift, wenn die Zelle **nicht** die alte Farbe hat. Dann gibt es nichts zu füllen. Der Vergleich ist `!=`.
      - wert: ["bild[z].length", "!=", "bild[z][s]", "z + 1, s"]
        meldung: '`z + 1, s` ist schon der Aufruf nach unten. Es fehlt der Nachbar rechts, `z, s + 1`.'
hinweise:
  - Die Randprüfung vergleicht die Spalte mit der Länge der Zeile `z`.
  - Die vier Selbstaufrufe gehen nach oben, unten, links und rechts.
loesung: |
  **Ansatz:** Randprüfung, dann Farbprüfung, dann färben, dann vier Nachbarn.
  ---
  Lücke 1: `bild[z].length`. Lücke 2: `!=`, denn bei einer anderen Farbe ist nichts zu tun.
  ---
  Lücke 3: `bild[z][s]`, die Zelle wird gefärbt. Lücke 4: `z, s + 1`, der rechte Nachbar.
```

```aufgabe
id: aw-ff-code-fuelle
titel: Flood-Fill schreiben
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 6 WS 2017, Aufgabe 3 und Aufgabenblatt 5 WS 2023, Aufgabe 4 (floodFill, auf ein Zeichen-Raster vereinfacht)
angabe: |
  Implementiere `void fuelle(char[][] bild, int z, int s, char alt, char neu)` **rekursiv** und ohne Schleifen. Die
  Methode färbt die zusammenhängende Fläche (Vierer-Nachbarschaft) der Farbe `alt`, in der `(z, s)` liegt, mit `neu`.
  Hat `(z, s)` nicht die Farbe `alt` oder liegt außerhalb, passiert nichts.

  Vorbedingungen: `bild != null`, `alt != neu`.
teile:
  - typ: code
    vorlage: |
      public class Flut {
          public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
              // TODO
          }
      }
    musterloesung: |
      public class Flut {
          public static void fuelle(char[][] bild, int z, int s, char alt, char neu) {
              if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
                  return;
              }
              if (bild[z][s] != alt) {
                  return;
              }
              bild[z][s] = neu;
              fuelle(bild, z - 1, s, alt, neu);
              fuelle(bild, z + 1, s, alt, neu);
              fuelle(bild, z, s - 1, alt, neu);
              fuelle(bild, z, s + 1, alt, neu);
          }
      }
    tests:
      - { vorher: "char[][] b = {{'.', '.', '#'}, {'#', '.', '.'}, {'.', '.', '#'}};", aufruf: "fuelle(b, 0, 0, '.', 'x')", ergebnis: "b", erwartet: "new char[][]{{'x', 'x', '#'}, {'#', 'x', 'x'}, {'x', 'x', '#'}}" }
      - { vorher: "char[][] b = {{'a', 'b'}, {'b', 'a'}};", aufruf: "fuelle(b, 0, 0, 'a', 'c')", ergebnis: "b", erwartet: "new char[][]{{'c', 'b'}, {'b', 'a'}}", beschreibung: "schräg ist nicht zusammenhängend" }
      - { vorher: "char[][] b = {{'.', '.'}, {'.', '.'}};", aufruf: "fuelle(b, 0, 5, '.', 'x')", ergebnis: "b", erwartet: "new char[][]{{'.', '.'}, {'.', '.'}}", beschreibung: "Start außerhalb" }
      - { vorher: "char[][] b = {{'.', '.', '.', '.'}, {'#', '#', '#', '#'}, {'.', '.', '.', '.'}};", aufruf: "fuelle(b, 2, 3, '.', '=')", ergebnis: "b", erwartet: "new char[][]{{'.', '.', '.', '.'}, {'#', '#', '#', '#'}, {'=', '=', '=', '='}}", versteckt: true }
    regeln: { keineSchleifenIn: [fuelle], rekursiv: [fuelle], keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche dein Ergebnis Zeile für Zeile. Gehst du in alle vier Richtungen? Und färbst du die Zelle, bevor du die Nachbarn aufrufst?" }
      - { wert: 2, meldung: "Die Zelle `(1, 1)` berührt `(0, 0)` nur an einer Ecke. Flood-Fill geht nur nach oben, unten, links und rechts." }
      - { wert: 3, meldung: "Bei einem Start außerhalb darf nichts passieren, auch keine Exception. Prüfe zuerst den Rand." }
hinweise:
  - Zwei Basisfälle am Anfang. Der erste prüft den Rand, der zweite die Farbe.
  - Danach `bild[z][s] = neu;` und vier Selbstaufrufe für oben, unten, links und rechts.
loesung: |
  **Ansatz:** Drei Fälle. Außerhalb: nichts tun. Falsche Farbe: nichts tun. Sonst färben und die vier Nachbarn füllen.
  ---
  ```java
  if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
      return;
  }
  if (bild[z][s] != alt) {
      return;
  }
  bild[z][s] = neu;
  fuelle(bild, z - 1, s, alt, neu);
  fuelle(bild, z + 1, s, alt, neu);
  fuelle(bild, z, s - 1, alt, neu);
  fuelle(bild, z, s + 1, alt, neu);
  ```
  ---
  Die Farbe `neu` dient zugleich als Markierung. Weil `alt != neu`, endet jeder spätere Aufruf für diese Zelle im zweiten Basisfall.
  ---
  Probe mit Test 2: `(0, 0)` wird `c`. Die Nachbarn `(0, 1)` und `(1, 0)` sind `b`, also endet die Füllung. `(1, 1)` bleibt `a`.
```

```aufgabe
id: aw-ff-code-flaeche
titel: Die Größe einer Fläche
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `int flaeche(char[][] bild, int z, int s)` **rekursiv** und ohne Schleifen. Die Methode liefert die
  Anzahl der Zellen der zusammenhängenden Fläche aus Punkten `'.'` (Vierer-Nachbarschaft), in der `(z, s)` liegt.
  Liegt `(z, s)` außerhalb oder ist dort kein Punkt, liefert sie 0. Gezählte Zellen darf die Methode mit `'+'`
  markieren, das Bild darf sich also verändern.

  Vorbedingung: `bild != null`.

  Beispiel: Im Raster `{"..#..", ".##..", "#...#", "...#."}` (als `char[][]`) liefert `flaeche(bild, 0, 0)` den Wert 3.
teile:
  - typ: code
    vorlage: |
      public class Flaeche {
          public static int flaeche(char[][] bild, int z, int s) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Flaeche {
          public static int flaeche(char[][] bild, int z, int s) {
              if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
                  return 0;
              }
              if (bild[z][s] != '.') {
                  return 0;
              }
              bild[z][s] = '+';
              return 1 + flaeche(bild, z - 1, s) + flaeche(bild, z + 1, s)
                      + flaeche(bild, z, s - 1) + flaeche(bild, z, s + 1);
          }
      }
    tests:
      - { vorher: "char[][] b = {{'.', '.', '#', '.', '.'}, {'.', '#', '#', '.', '.'}, {'#', '.', '.', '.', '#'}, {'.', '.', '.', '#', '.'}};", aufruf: "flaeche(b, 0, 0)", erwartet: "3" }
      - { vorher: "char[][] b = {{'.', '.', '#', '.', '.'}, {'.', '#', '#', '.', '.'}, {'#', '.', '.', '.', '#'}, {'.', '.', '.', '#', '.'}};", aufruf: "flaeche(b, 0, 3)", erwartet: "10" }
      - { vorher: "char[][] b = {{'.', '.', '#', '.', '.'}, {'.', '#', '#', '.', '.'}, {'#', '.', '.', '.', '#'}, {'.', '.', '.', '#', '.'}};", aufruf: "flaeche(b, 1, 1)", erwartet: "0", beschreibung: "Start auf einer Wand" }
      - { vorher: "char[][] b = {{'.'}};", aufruf: "flaeche(b, 0, 0)", erwartet: "1", beschreibung: "ein einziger Punkt" }
      - { vorher: "char[][] b = {{'.', '.', '.'}, {'.', '.', '.'}};", aufruf: "flaeche(b, 1, 2)", erwartet: "6", versteckt: true }
    regeln: { keineSchleifenIn: [flaeche], rekursiv: [flaeche], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Zählst du eine Zelle doppelt? Markiere sie mit `'+'`, **bevor** du die Nachbarn aufrufst. Sonst zählt ein Nachbar sie noch einmal." }
      - { wert: 3, meldung: "Auf einer Wand beginnt keine Fläche aus Punkten. Der Basisfall „kein Punkt“ liefert 0." }
      - { wert: "keineFelder", meldung: "Ein Zähler als Klassenvariable ist verboten. Lass jeden Aufruf seine Anzahl zurückgeben: 1 für die eigene Zelle plus die Ergebnisse der vier Nachbarn." }
hinweise:
  - Die Basisfälle liefern 0. Eine Zelle, die zur Fläche gehört, trägt 1 bei.
  - Nach dem Markieren ist das Ergebnis `1 + flaeche(oben) + flaeche(unten) + flaeche(links) + flaeche(rechts)`.
loesung: |
  **Ansatz:** Wie Flood-Fill, aber jeder Aufruf liefert eine Zahl. Basisfälle liefern 0, eine gefüllte Zelle liefert 1 plus die Flächen ab ihren Nachbarn.
  ---
  ```java
  if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
      return 0;
  }
  if (bild[z][s] != '.') {
      return 0;
  }
  bild[z][s] = '+';
  return 1 + flaeche(bild, z - 1, s) + flaeche(bild, z + 1, s)
          + flaeche(bild, z, s - 1) + flaeche(bild, z, s + 1);
  ```
  ---
  Warum wird keine Zelle doppelt gezählt? Jede Zelle wird beim ersten Besuch markiert. Jeder weitere Aufruf für sie trifft auf `'+'` und liefert 0.
  ---
  Probe mit Test 1: `(0, 0)`, `(0, 1)` und `(1, 0)` sind die einzigen Punkte, die zusammenhängen. Ergebnis 3.
```

```reflexion
frage: Bei der Rekursion in [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) wurde ein Argument wie `n` bei jedem Aufruf kleiner. Bei Flood-Fill werden `z` und `s` mal größer, mal kleiner. Warum endet Flood-Fill trotzdem sicher? Was genau ist hier der Fortschritt?
antwort: |
  Der Fortschritt steckt nicht in den Argumenten, sondern im Bild. Jeder Aufruf, der nicht sofort in einem Basisfall
  endet, färbt genau eine Zelle von der alten in die neue Farbe um. Danach hat diese Zelle nie wieder die alte Farbe,
  weil `alt != neu` gilt. Die Zahl der Zellen mit der alten Farbe wird also mit jedem färbenden Aufruf um 1 kleiner.
  Sie kann nicht unter 0 fallen. Darum gibt es nur endlich viele färbende Aufrufe, und jeder löst nur vier weitere aus.
  Fehlt die Markierung (zu spätes Färben oder `alt == neu`), schrumpft diese Zahl nicht, und die Rekursion endet nie.
```

## Flood-Fill mit Schwellwert und Inseln zählen

```aufgabe
id: aw-gs-check-abs
titel: Abstand zweier Zahlen mit Math.abs
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math))
teile:
  - typ: ausgabe
    code: |
      int g = 100;
      System.out.println(Math.abs(93 - g));
      System.out.println(Math.abs(110 - g) <= 10);
      System.out.println(Math.abs(89 - g) <= 10);
    loesung: |
      7
      true
      false
    fehler:
      - wert: "-7\ntrue\nfalse"
        meldung: '`Math.abs` liefert den Betrag, also den Wert ohne Vorzeichen. Aus -7 wird 7.'
      - wert: "7\nfalse\nfalse"
        meldung: 'Der Abstand von 110 zu 100 ist genau 10. Der Vergleich `<=` schließt die Grenze ein.'
hinweise:
  - '`Math.abs(x)` ist der Abstand von `x` zur 0, also immer nicht negativ.'
loesung: |
  `93 - 100 = -7`, der Betrag ist 7.
  ---
  `|110 - 100| = 10 <= 10` ist wahr. `|89 - 100| = 11 <= 10` ist falsch.
```

Auf einem echten Foto haben benachbarte Pixel fast nie **genau** denselben Grauwert. Ein Kontinent auf einer
eingescannten Weltkarte besteht aus Werten wie 100, 104, 97 und 109. Ein Flood-Fill, der nur gleiche Werte füllt,
bliebe nach wenigen Pixeln stecken. Aufgabenblatt 5 verwendet darum einen **Schwellwert**: Ein Pixel gehört zur
Fläche, wenn sein Grauwert vom Grauwert des **angeklickten** Pixels um höchstens eine **Toleranz** abweicht. Die
Toleranz ist eine fest gewählte, erlaubte Abweichung.

In Java heißt das: Ist `gVal` der Grauwert des Startpixels und `tol` die Toleranz, dann gehört `bild[z][s]` dazu,
wenn `Math.abs(bild[z][s] - gVal) <= tol` gilt. `Math.abs` liefert den **Betrag**, also den Abstand ohne Vorzeichen.
Damit sind Abweichungen nach oben und nach unten gleich erlaubt.

Auf dem Blatt gibt man die Toleranz in **Prozent** ein (erlaubt sind 1 bis 50 %). Dort steht nur, um wie viel
Prozent der Grauwert abweichen darf. **Worauf** sich die Prozent beziehen, sagt das Blatt nicht ausdrücklich. Zwei
Deutungen sind möglich:

- Prozent des ganzen Grauwertbereichs 0 bis 255. Diese Deutung verwenden wir in diesem Kapitel. Die Toleranz in
  Grauwerten ist dann `int tol = prozent * 255 / 100;`. Für 12 % ergibt das `3060 / 100 = 30`.
- Prozent des Grauwerts am Klickpunkt. Dann rechnet man `int tol = gVal * prozent / 100;`.

Wir multiplizieren zuerst und teilen dann. In der Reihenfolge `prozent / 100 * 255` ergäbe die Ganzzahldivision
`12 / 100 = 0`, und die Toleranz wäre 0. Schreib in einem Kommentar, welche Deutung du gewählt hast, und begründe sie
im Feedbackgespräch.

Wie markieren wir einen gefüllten Pixel? Beim Zeichen-Raster haben wir die Farbe geändert. Hier ändern wir den Wert
auf `-1`. Ein Grauwert ist nie negativ, also kann `-1` kein echter Pixel sein. So steht es auch auf dem Blatt. Im
Original wird der Pixel zusätzlich im CodeDraw-Fenster grün gezeichnet. Diesen Teil lassen wir hier weg.

:::beispiel[Flood-Fill auf einem Graubild]
```java
public static void flut(int[][] bild, int z, int s, int gVal, int tol) {
    if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
        return;                                  // außerhalb
    }
    if (bild[z][s] == -1) {
        return;                                  // schon gefüllt
    }
    if (Math.abs(bild[z][s] - gVal) > tol) {
        return;                                  // weicht zu stark ab
    }
    bild[z][s] = -1;                             // markieren
    flut(bild, z - 1, s, gVal, tol);
    flut(bild, z + 1, s, gVal, tol);
    flut(bild, z, s - 1, gVal, tol);
    flut(bild, z, s + 1, gVal, tol);
}
```

- `gVal` bleibt bei allen Selbstaufrufen gleich. Verglichen wird immer mit dem Startpixel, nicht mit dem Nachbarn.
- Die drei Basisfälle entsprechen denen aus [15.4 Flood-Fill: zusammenhängende Flächen rekursiv füllen](/lernen/ep1/arrays-anwendungen/flood-fill-zusammenhaengende-flaechen-rekursiv-fuellen). „Schon gefüllt“ und „passt nicht“ sind hier zwei getrennte Prüfungen.

Wir rufen `flut(bild, 0, 0, 100, 10)` für dieses Bild auf. Erlaubt sind die Werte 90 bis 110.

```
100  104  150  152   98
 95  109  160   97  101
120   92  103   99  140
 88  111   90  145  100
```

Gefüllt werden 11 Pixel: die vier links oben, dann über 92, 103 und 99 hinüber zu 97, 101 und 98, und von 103
nach unten zu 90. Nicht gefüllt werden 120, 88 und 111 (zu weit weg vom Startwert). Auch die 100 rechts unten bleibt
stehen. Ihr Wert passt zwar, aber sie ist nur von 140 und 145 umgeben. Sie hängt nicht mit dem Startpixel zusammen.
:::

```aufgabe
id: aw-gs-zahl-toleranz
titel: Von Prozent zu Grauwerten
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Toleranz wird mit `int tol = prozent * 255 / 100;` aus einer Prozentangabe berechnet. Gib `tol` an.
teile:
  - typ: zahl
    label: a) prozent = 30
    loesung: "floor(30 * 255 / 100)"
    fehler:
      - wert: "30"
        meldung: Die 30 sind Prozent des Bereichs 0 bis 255, nicht Grauwerte. Rechne `30 * 255 / 100`.
      - wert: "76.5"
        meldung: '`7650 / 100` ist eine Ganzzahldivision. Der Nachkommaanteil fällt weg.'
  - typ: zahl
    label: b) prozent = 12
    loesung: "floor(12 * 255 / 100)"
    fehler:
      - wert: "30.6"
        meldung: '`3060 / 100` ist eine Ganzzahldivision. Der Nachkommaanteil fällt weg.'
  - typ: zahl
    label: c) Welchen Wert hätte tol bei prozent = 12 mit der Formel prozent / 100 * 255?
    loesung: "0"
    fehler:
      - wert: "30"
        meldung: 'Java rechnet von links nach rechts. Zuerst `12 / 100`, und das ist bei ganzen Zahlen 0.'
hinweise:
  - Rechne genau in der Reihenfolge, in der Java es tut. `*` und `/` werden von links nach rechts ausgewertet.
loesung: |
  **Ansatz:** Zuerst multiplizieren, dann ganzzahlig teilen.
  ---
  a) `30 * 255 = 7650`, geteilt durch 100 ergibt 76, der Rest 50 fällt weg. b) `12 * 255 = 3060`, geteilt durch 100 ergibt 30, der Rest 60 fällt weg.
  ---
  c) `12 / 100 = 0` (Ganzzahldivision), dann `0 * 255 = 0`. Die Toleranz 0 würde nur Pixel mit genau dem Startwert füllen.
```

:::achtung[Die Markierung -1 liegt selbst im Toleranzbereich]
Eine Mitschülerin lässt die Prüfung `bild[z][s] == -1` weg. Sie meint, die Toleranzprüfung fange markierte Pixel
schon ab. Für dunkle Startpixel stimmt das nicht. Nimm das Bild `{{3, 5}}` mit `gVal = 3` und `tol = 10`.

- `(0, 0)` hat 3, der Abstand ist 0. Der Pixel wird zu -1, und der Aufruf geht nach rechts zu `(0, 1)`.
- `(0, 1)` hat 5, der Abstand ist 2. Der Pixel wird zu -1, und der Aufruf geht nach links zu `(0, 0)`.
- `(0, 0)` hat jetzt -1. Der Abstand `|-1 - 3| = 4` ist kleiner als 10. Der Pixel gilt wieder als passend.

So rufen sich die beiden Pixel endlos auf, bis ein `StackOverflowError` kommt. Die Markierung braucht darum eine
eigene Prüfung, und zwar vor der Toleranzprüfung.
:::

```aufgabe
id: aw-gs-auswahl-gehoert
titel: Gehört der Pixel zur Fläche?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Der Startpixel hat den Grauwert `gVal = 60`, die Toleranz ist `tol = 8`. Welche der Grauwerte erfüllen die Bedingung
  `Math.abs(w - gVal) <= tol`? Wähle alle passenden.
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['52', '51', '68', '69', '60']
    richtig: [0, 2, 4]
    fehler:
      - wert: [4]
        meldung: Nicht nur gleiche Werte gehören dazu. Alles mit einem Abstand von höchstens 8 zum Startwert zählt.
      - wert: [0, 2]
        meldung: Der Startwert selbst hat den Abstand 0 und gehört natürlich dazu.
      - wert: [2, 4]
        meldung: Die Abweichung darf auch nach unten gehen. Der Betrag macht beide Richtungen gleich.
hinweise:
  - Erlaubt ist der Bereich von `60 - 8` bis `60 + 8`, beide Grenzen eingeschlossen.
loesung: |
  **Ansatz:** Der erlaubte Bereich ist 52 bis 68, mit beiden Grenzen.
  ---
  52, 68 und 60 liegen darin. 51 hat den Abstand 9, 69 auch. Beide liegen außerhalb.
```

```aufgabe
id: aw-gs-gefuehrt-flut
titel: Ein Graubild mit Toleranz füllen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Methode `flut` ist dieselbe wie im Beispiel „Flood-Fill auf einem Graubild“. Das Bild ist

  ```
  60  64  90  58
  55  70  61  59
  80  66  95  52
  57  62  63  49
  ```

  Wie viele Pixel werden bei `flut(bild, 0, 0, 60, 8)` auf -1 gesetzt?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "11"
        meldung: Du hast alle passenden Werte im Bild gezählt. Gefüllt werden aber nur die, die mit dem Startpixel zusammenhängen. 70 und 80 versperren den Weg.
      - wert: "4"
        meldung: Die 58 rechts oben passt zwar, liegt aber hinter der 90. Von `(0, 1)` geht es nicht weiter nach rechts.
gefuehrt:
  - text: Welcher Bereich von Grauwerten ist erlaubt? Gib die **obere** Grenze an.
    teil: { typ: zahl, loesung: "60 + 8" }
    erklaerung: Erlaubt ist 52 bis 68.
  - text: Der Startpixel `(0, 0)` wird gefüllt. Welche seiner Nachbarn passen?
    teil:
      typ: auswahl
      optionen: ['nur `(0, 1)` mit 64', 'nur `(1, 0)` mit 55', '`(0, 1)` mit 64 und `(1, 0)` mit 55']
      richtig: [2]
    erklaerung: Oben und links liegt nichts. 64 und 55 liegen beide zwischen 52 und 68.
  - text: Geht es von `(0, 1)` oder `(1, 0)` aus weiter?
    teil:
      typ: auswahl
      optionen: ['ja, über `(1, 1)`', 'ja, über `(2, 0)`', 'nein']
      richtig: [2]
    erklaerung: Von `(0, 1)` aus liegen 90 und 70 außerhalb, von `(1, 0)` aus 70 und 80. Die Füllung ist zu Ende.
hinweise:
  - Bestimme zuerst den erlaubten Bereich. Färbe dann vom Start aus nur Nachbarn, die darin liegen.
  - Ein passender Wert, den du nur über einen unpassenden Pixel erreichst, wird nicht gefüllt.
loesung: |
  **Ansatz:** Erlaubt sind 52 bis 68. Vom Start aus nur über passende Nachbarn weitergehen.
  ---
  `(0, 0)` mit 60 passt. Seine Nachbarn 64 und 55 passen ebenfalls.
  ---
  Rund um diese drei Pixel liegen 90, 70 und 80, alle außerhalb des Bereichs. Es werden 3 Pixel gefüllt.
  ---
  Viele andere Werte (58, 61, 59, 66, 57, 62, 63, 52) passen auch, sind aber vom Startpixel abgeschnitten.
```

:::achtung[Mit dem Nachbarn statt mit dem Startwert vergleichen]
Ein Student übergibt bei jedem Selbstaufruf den Wert des **aktuellen** Pixels als neuen Vergleichswert. Er vergleicht
also jeden Pixel mit seinem Vorgänger. Nimm die Zeile `{100, 108, 116, 124, 132}`, den Start bei `(0, 0)` und die
Toleranz 10.

- Mit dem Startwert 100 werden 100 und 108 gefüllt. 116 weicht um 16 ab, dort ist Schluss. Das sind 2 Pixel.
- Mit dem Vorgänger weicht jeder Pixel nur um 8 ab. Alle 5 Pixel werden gefüllt, auch 132, das vom Startwert um 32 abweicht.

Die Füllung „driftet“ über einen weichen Verlauf in Bereiche, die mit dem angeklickten Gebiet nichts zu tun haben.
Das Blatt verlangt den Vergleich mit dem **angeklickten** Pixel. Darum bleibt `gVal` bei jedem Aufruf gleich.
:::

```aufgabe
id: aw-gs-ausgabe-drift
titel: Startwert oder Vorgänger?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  `a` vergleicht mit dem Startwert, `b` mit dem Vorgänger. Beide füllen nur nach rechts und zählen die gefüllten
  Pixel. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Drift {
          public static int a(int[] z, int i, int gVal, int tol) {
              if (i >= z.length || Math.abs(z[i] - gVal) > tol) {
                  return 0;
              }
              return 1 + a(z, i + 1, gVal, tol);
          }

          public static int b(int[] z, int i, int vorher, int tol) {
              if (i >= z.length || Math.abs(z[i] - vorher) > tol) {
                  return 0;
              }
              return 1 + b(z, i + 1, z[i], tol);
          }

          public static void main(String[] args) {
              int[] zeile = {40, 46, 52, 58, 64, 90};
              System.out.println(a(zeile, 0, 40, 6));
              System.out.println(b(zeile, 0, 40, 6));
          }
      }
    loesung: |
      2
      5
    fehler:
      - wert: "2\n6"
        meldung: 'Bei `b` ist der Sprung von 64 auf 90 größer als 6. Dort hört auch `b` auf.'
      - wert: "1\n5"
        meldung: '46 weicht von 40 um genau 6 ab. Das ist erlaubt, denn verglichen wird mit `> tol`.'
hinweise:
  - Bei `a` ist der Vergleichswert immer 40. Bei `b` ist er der Wert des vorigen Pixels.
  - Geh die Zeile von links nach rechts durch und hör bei der ersten Abweichung über 6 auf. Zähle die Pixel davor.
loesung: |
  **Ansatz:** Für jede Methode die Werte von links nach rechts durchgehen, bis eine Abweichung größer als 6 ist.
  ---
  `a`: 40 (Abstand 0) und 46 (Abstand 6) passen. 52 hat den Abstand 12 zu 40. Ergebnis 2.
  ---
  `b`: 40, 46, 52, 58 und 64 weichen jeweils um 6 vom Vorgänger ab. 90 weicht um 26 ab. Ergebnis 5.
```

### Wie viele Inseln hat die Karte?

Flood-Fill beantwortet auch eine zweite häufige Frage: **Wie viele** zusammenhängende Flächen gibt es? Stell dir eine
Karte vor, auf der `#` Land und `.` Wasser ist. Eine **Insel** ist eine zusammenhängende Fläche aus Land.

Die Idee ist einfach. Du gehst mit zwei Schleifen über alle Zellen. Findest du ein `#`, hast du eine **neue** Insel
entdeckt. Du zählst sie und „versenkst“ sie danach sofort mit Flood-Fill, indem du ihr ganzes Land zu Wasser machst.
Die übrigen Zellen dieser Insel triffst du später in der Schleife noch einmal. Dann sind sie aber schon Wasser und
werden nicht noch einmal gezählt.

:::beispiel[Inseln zählen]
```java
public static void versenke(char[][] karte, int z, int s) {
    if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
        return;
    }
    if (karte[z][s] != '#') {
        return;
    }
    karte[z][s] = '.';
    versenke(karte, z - 1, s);
    versenke(karte, z + 1, s);
    versenke(karte, z, s - 1);
    versenke(karte, z, s + 1);
}

public static int zaehleInseln(char[][] karte) {
    int anzahl = 0;
    for (int z = 0; z < karte.length; z++) {
        for (int s = 0; s < karte[z].length; s++) {
            if (karte[z][s] == '#') {
                anzahl++;
                versenke(karte, z, s);
            }
        }
    }
    return anzahl;
}
```

Für die Karte

```
##..#
#...#
..#..
....#
```

findet die Schleife zuerst `(0, 0)`. Die erste Insel ist gezählt, und `versenke` löscht `(0, 0)`, `(0, 1)` und
`(1, 0)`. Das nächste `#` ist `(0, 4)`. Das ist Insel 2, sie umfasst auch `(1, 4)`. Dann folgen `(2, 2)` als Insel 3
und `(3, 4)` als Insel 4. Ergebnis: 4 Inseln. `(3, 4)` gehört nicht zu Insel 2, denn dazwischen liegt bei `(2, 4)`
Wasser.

Achtung: `zaehleInseln` verändert die Karte. Danach ist sie ganz Wasser. Wer die Karte noch braucht, gibt der Methode
eine Kopie.
:::

```aufgabe
id: aw-gs-ausgabe-inseln
titel: Inseln auf einer anderen Karte
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  `versenke` und `zaehleInseln` sind dieselben wie im Beispiel „Inseln zählen“. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Inseln {
          public static void versenke(char[][] karte, int z, int s) {
              if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
                  return;
              }
              if (karte[z][s] != '#') {
                  return;
              }
              karte[z][s] = '.';
              versenke(karte, z - 1, s);
              versenke(karte, z + 1, s);
              versenke(karte, z, s - 1);
              versenke(karte, z, s + 1);
          }

          public static int zaehleInseln(char[][] karte) {
              int anzahl = 0;
              for (int z = 0; z < karte.length; z++) {
                  for (int s = 0; s < karte[z].length; s++) {
                      if (karte[z][s] == '#') {
                          anzahl++;
                          versenke(karte, z, s);
                      }
                  }
              }
              return anzahl;
          }

          public static void main(String[] args) {
              char[][] k1 = {
                  {'#', '.', '#', '.'},
                  {'.', '.', '.', '.'},
                  {'#', '.', '.', '#'},
                  {'#', '#', '.', '#'}
              };
              char[][] k2 = {
                  {'.', '#', '.'},
                  {'#', '.', '#'},
                  {'.', '#', '.'}
              };
              System.out.println(zaehleInseln(k1));
              System.out.println(zaehleInseln(k2));
          }
      }
    loesung: |
      4
      4
    fehler:
      - wert: "4\n1"
        meldung: In `k2` berühren sich die vier Landzellen nur an den Ecken. `versenke` geht aber nur nach oben, unten, links und rechts. Jede Landzelle ist eine eigene Insel.
      - wert: "7\n4"
        meldung: Du hast Landzellen gezählt, nicht Inseln. `(2, 0)`, `(3, 0)` und `(3, 1)` hängen zusammen und bilden eine einzige Insel.
hinweise:
  - Kreise in jeder Karte die zusammenhängenden Landflächen ein (nicht schräg) und zähle die Kreise.
loesung: |
  **Ansatz:** Jede zusammenhängende Landfläche ist eine Insel. Schräge Berührung zählt nicht.
  ---
  `k1`: `(0, 0)` allein, `(0, 2)` allein, `(2, 0)` mit `(3, 0)` und `(3, 1)`, sowie `(2, 3)` mit `(3, 3)`. Das sind 4 Inseln.
  ---
  `k2`: Die vier Landzellen berühren sich nur schräg. Jede ist eine eigene Insel, also 4.
```

```aufgabe
id: aw-gs-rf-inseln
titel: Aussagen zum Füllen mit Schwellwert und zum Inselzählen
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Bei `flut` mit Toleranz 0 werden genau die zusammenhängenden Pixel mit dem Startwert gefüllt.
        richtig: true
        erklaerung: Mit `tol = 0` passt nur ein Abstand von 0, also genau der Startwert. Das ist dann der gewöhnliche Flood-Fill.
      - text: Ein größerer Schwellwert kann nie weniger Pixel füllen als ein kleinerer.
        richtig: true
        erklaerung: Jeder Pixel, der bei der kleineren Toleranz passt, passt auch bei der größeren. Darum wird die Fläche nur größer oder bleibt gleich.
      - text: '`zaehleInseln` liefert dasselbe, wenn man in der Schleife statt `versenke` gar nichts aufruft.'
        richtig: false
        erklaerung: Dann würde jede Landzelle als eigene Insel gezählt. Das Versenken sorgt dafür, dass jede Insel nur einmal zählt.
      - text: Ruft man `zaehleInseln` zweimal mit derselben Karte auf, liefert der zweite Aufruf dasselbe Ergebnis.
        richtig: false
        erklaerung: Der erste Aufruf versenkt alle Inseln. Die Karte ist danach ganz Wasser, der zweite Aufruf liefert 0.
    fehler:
      - wert: [r, r, f, r]
        meldung: '`zaehleInseln` verändert die übergebene Karte. Was steht nach dem ersten Aufruf noch darin?'
      - wert: [r, f, f, f]
        meldung: Bei größerer Toleranz bleiben alle bisherigen Wege erlaubt, es kommen höchstens neue dazu.
hinweise:
  - Bei Aussage 2 hilft die Frage, ob ein Weg, der bei kleiner Toleranz erlaubt ist, bei großer verboten sein kann.
  - Bei Aussage 4 denk an Referenzen. Die Methode arbeitet auf demselben Array wie der Aufrufer.
loesung: |
  **Ansatz:** Jede Aussage mit der Funktionsweise der Methoden abgleichen.
  ---
  Aussage 1 stimmt, Toleranz 0 heißt „gleicher Wert“. Aussage 2 stimmt, eine größere Toleranz erlaubt jeden bisherigen Weg weiterhin.
  ---
  Aussage 3 ist falsch, ohne Versenken zählt jede Landzelle. Aussage 4 ist falsch, weil die Karte nach dem ersten Aufruf leer ist.
```

```aufgabe
id: aw-gs-zeilen-null
titel: Schwarze Pixel bleiben übrig
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Diese Fassung markiert gefüllte Pixel mit 0 statt mit -1. Klickt man in ein sehr dunkles Gebiet (etwa `gVal = 5`,
  `tol = 10`), bleiben ausgerechnet die ganz schwarzen Pixel mit dem Wert 0 ungefüllt. Markiere die **zwei** Zeilen,
  die man ändern muss.
teile:
  - typ: zeilen
    code: |
      public static void flut(int[][] bild, int z, int s, int gVal, int tol) {
          if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
              return;
          }
          if (bild[z][s] == 0) {
              return;
          }
          if (Math.abs(bild[z][s] - gVal) > tol) {
              return;
          }
          bild[z][s] = 0;
          flut(bild, z - 1, s, gVal, tol);
          flut(bild, z + 1, s, gVal, tol);
          flut(bild, z, s - 1, gVal, tol);
          flut(bild, z, s + 1, gVal, tol);
      }
    loesung: [5, 11]
    fehler:
      - wert: [8]
        meldung: Die Toleranzprüfung ist richtig. Ein schwarzer Pixel mit 0 hat zu `gVal = 5` den Abstand 5 und würde passen. Er wird aber schon vorher abgewiesen.
      - wert: [5]
        meldung: Die Prüfung in Zeile 5 ist ein Teil des Problems. Die Markierung wird aber auch noch an einer zweiten Stelle festgelegt.
hinweise:
  - Welche Zeilen haben mit der Markierung „schon gefüllt“ zu tun?
  - Die Markierung muss ein Wert sein, den kein echter Pixel haben kann.
loesung: |
  **Ansatz:** Die Markierung darf kein gültiger Grauwert sein. 0 ist aber ein gültiger Grauwert (schwarz).
  ---
  Zeile 5 hält jeden schwarzen Pixel für „schon gefüllt“. Zeile 11 setzt diese falsche Markierung.
  ---
  Die Reparatur: In beiden Zeilen `-1` statt `0`. Kein echter Grauwert ist negativ, also verwechselt die Methode dann nichts mehr.
```

```aufgabe
id: aw-gs-code-flut
titel: Flood-Fill mit Schwellwert schreiben
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 4 (floodFill mit Graustufenschwellwert, ohne CodeDraw nachgebaut)
angabe: |
  Implementiere `void flut(int[][] bild, int z, int s, int gVal, int tol)` **rekursiv** und ohne Schleifen. Die Methode
  setzt jeden Pixel auf -1, der mit `(z, s)` zusammenhängt (Vierer-Nachbarschaft) und dessen Grauwert um höchstens
  `tol` von `gVal` abweicht. Auch der Weg dorthin darf nur über solche Pixel führen.

  Vorbedingungen: `bild != null`, alle Werte in `bild` liegen zwischen 0 und 255, `tol >= 0`, `gVal` liegt zwischen
  0 und 255.
teile:
  - typ: code
    vorlage: |
      public class Grau {
          public static void flut(int[][] bild, int z, int s, int gVal, int tol) {
              // TODO
          }
      }
    musterloesung: |
      public class Grau {
          public static void flut(int[][] bild, int z, int s, int gVal, int tol) {
              if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
                  return;
              }
              if (bild[z][s] == -1) {
                  return;
              }
              if (Math.abs(bild[z][s] - gVal) > tol) {
                  return;
              }
              bild[z][s] = -1;
              flut(bild, z - 1, s, gVal, tol);
              flut(bild, z + 1, s, gVal, tol);
              flut(bild, z, s - 1, gVal, tol);
              flut(bild, z, s + 1, gVal, tol);
          }
      }
    tests:
      - { vorher: "int[][] b = {{60, 64, 90, 58}, {55, 70, 61, 59}, {80, 66, 95, 52}, {57, 62, 63, 49}};", aufruf: "flut(b, 0, 0, 60, 8)", ergebnis: "b", erwartet: "new int[][]{{-1, -1, 90, 58}, {-1, 70, 61, 59}, {80, 66, 95, 52}, {57, 62, 63, 49}}" }
      - { vorher: "int[][] b = {{60, 64, 90, 58}, {55, 70, 61, 59}, {80, 66, 95, 52}, {57, 62, 63, 49}};", aufruf: "flut(b, 0, 0, 60, 12)", ergebnis: "b", erwartet: "new int[][]{{-1, -1, 90, -1}, {-1, -1, -1, -1}, {80, -1, 95, -1}, {-1, -1, -1, -1}}", beschreibung: "größere Toleranz" }
      - { vorher: "int[][] b = {{3, 5}};", aufruf: "flut(b, 0, 0, 3, 10)", ergebnis: "b", erwartet: "new int[][]{{-1, -1}}", beschreibung: "dunkler Startwert: -1 liegt im Toleranzbereich" }
      - { vorher: "int[][] b = {{100, 108, 116, 124, 132}};", aufruf: "flut(b, 0, 0, 100, 10)", ergebnis: "b", erwartet: "new int[][]{{-1, -1, 116, 124, 132}}", beschreibung: "Vergleich mit dem Startwert, nicht mit dem Nachbarn" }
      - { vorher: "int[][] b = {{60, 64, 90, 58}, {55, 70, 61, 59}, {80, 66, 95, 52}, {57, 62, 63, 49}};", aufruf: "flut(b, 1, 2, 61, 5)", ergebnis: "b", erwartet: "new int[][]{{60, 64, 90, -1}, {55, 70, -1, -1}, {80, 66, 95, 52}, {57, 62, 63, 49}}", versteckt: true }
    regeln: { keineSchleifenIn: [flut], rekursiv: [flut], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 3, meldung: "Bei dunklem Startwert liegt die Markierung -1 selbst im Toleranzbereich. Prüfe `bild[z][s] == -1` in einem eigenen Basisfall, bevor du die Toleranz prüfst." }
      - { wert: 4, meldung: "Vergleichst du mit dem Nachbarn statt mit `gVal`? Übergib bei jedem Selbstaufruf denselben `gVal`." }
      - { wert: 1, meldung: "Vergleiche das Ergebnis Pixel für Pixel. Gehst du in alle vier Richtungen, und übergibst du bei jedem Selbstaufruf dieselben Werte `gVal` und `tol`?" }
hinweise:
  - Drei Basisfälle in dieser Reihenfolge. Außerhalb, schon markiert (`-1`), Abweichung größer als `tol`.
  - Danach markieren und viermal mit demselben `gVal` und `tol` aufrufen.
loesung: |
  **Ansatz:** Flood-Fill mit drei Basisfällen. Die Markierung -1 bekommt eine eigene Prüfung, weil sie bei dunklen Startwerten sonst als passend gälte.
  ---
  ```java
  if (z < 0 || z >= bild.length || s < 0 || s >= bild[z].length) {
      return;
  }
  if (bild[z][s] == -1) {
      return;
  }
  if (Math.abs(bild[z][s] - gVal) > tol) {
      return;
  }
  bild[z][s] = -1;
  flut(bild, z - 1, s, gVal, tol);
  flut(bild, z + 1, s, gVal, tol);
  flut(bild, z, s - 1, gVal, tol);
  flut(bild, z, s + 1, gVal, tol);
  ```
  ---
  `gVal` und `tol` wandern unverändert durch alle Aufrufe. Nur `z` und `s` ändern sich.
  ---
  Probe mit Test 3: `(0, 0)` wird -1, dann `(0, 1)`. Der Rückruf auf `(0, 0)` endet im zweiten Basisfall statt endlos weiterzulaufen.
```

```aufgabe
id: aw-gs-code-inseln
titel: Inseln zählen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Implementiere `int zaehleInseln(char[][] karte)`. `karte` enthält Land `'#'` und Wasser `'.'`. Die Methode liefert
  die Anzahl der Inseln, also der zusammenhängenden Landflächen in der Vierer-Nachbarschaft. Die Karte darf dabei
  verändert werden. Du darfst eine rekursive Hilfsmethode schreiben.

  Vorbedingung: `karte != null`, jede Zeile ist nicht `null`.
teile:
  - typ: code
    vorlage: |
      public class Karte {
          public static int zaehleInseln(char[][] karte) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Karte {
          public static void versenke(char[][] karte, int z, int s) {
              if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
                  return;
              }
              if (karte[z][s] != '#') {
                  return;
              }
              karte[z][s] = '.';
              versenke(karte, z - 1, s);
              versenke(karte, z + 1, s);
              versenke(karte, z, s - 1);
              versenke(karte, z, s + 1);
          }

          public static int zaehleInseln(char[][] karte) {
              int anzahl = 0;
              for (int z = 0; z < karte.length; z++) {
                  for (int s = 0; s < karte[z].length; s++) {
                      if (karte[z][s] == '#') {
                          anzahl++;
                          versenke(karte, z, s);
                      }
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "zaehleInseln(new char[][]{{'#', '.', '#', '.'}, {'.', '.', '.', '.'}, {'#', '.', '.', '#'}, {'#', '#', '.', '#'}})", erwartet: "4" }
      - { aufruf: "zaehleInseln(new char[][]{{'#', '#', '#'}, {'#', '.', '#'}, {'#', '#', '#'}})", erwartet: "1", beschreibung: "ein Ring ist eine einzige Insel" }
      - { aufruf: "zaehleInseln(new char[][]{{'.', '.', '.', '.', '.'}})", erwartet: "0", beschreibung: "nur Wasser" }
      - { aufruf: "zaehleInseln(new char[][]{{'.', '#', '.'}, {'#', '.', '#'}, {'.', '#', '.'}})", erwartet: "4", beschreibung: "schräge Berührung verbindet nicht" }
      - { aufruf: "zaehleInseln(new char[][]{{'#', '.'}, {'#'}, {'.', '.', '#'}})", erwartet: "2", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zählst du Landzellen statt Inseln? Nach dem Zählen musst du die ganze Insel versenken, damit ihre anderen Zellen nicht noch einmal zählen." }
      - { wert: 2, meldung: "Ein Ring ist eine einzige zusammenhängende Fläche. Geht dein Versenken in alle vier Richtungen?" }
      - { wert: 4, meldung: "Schräg berührende Zellen hängen in der Vierer-Nachbarschaft nicht zusammen. Gehst du auch diagonal?" }
hinweise:
  - Schreib zuerst eine rekursive Hilfsmethode `versenke`, die eine ganze Insel ab `(z, s)` zu Wasser macht. Sie ist ein Flood-Fill von `'#'` nach `'.'`.
  - In `zaehleInseln` laufen zwei Schleifen über alle Zellen. Bei jedem `'#'` zählst du eins hoch und rufst `versenke` auf.
loesung: |
  **Ansatz:** Jede Insel wird beim ersten Treffer gezählt und sofort ganz versenkt. So zählt keine Insel doppelt.
  ---
  Die Hilfsmethode ist ein Flood-Fill:
  ```java
  public static void versenke(char[][] karte, int z, int s) {
      if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
          return;
      }
      if (karte[z][s] != '#') {
          return;
      }
      karte[z][s] = '.';
      versenke(karte, z - 1, s);
      versenke(karte, z + 1, s);
      versenke(karte, z, s - 1);
      versenke(karte, z, s + 1);
  }
  ```
  ---
  Die Zählmethode:
  ```java
  int anzahl = 0;
  for (int z = 0; z < karte.length; z++) {
      for (int s = 0; s < karte[z].length; s++) {
          if (karte[z][s] == '#') {
              anzahl++;
              versenke(karte, z, s);
          }
      }
  }
  return anzahl;
  ```
  ---
  Die Randprüfung mit `karte[z].length` macht die Methode auch für Zeilen verschiedener Länge sicher (verdeckter Test).
  ---
  Probe mit dem Ring: Das erste `#` bei `(0, 0)` zählt, und `versenke` läuft einmal ganz um das Loch herum. Danach findet die Schleife kein Land mehr. Ergebnis 1.
```

```reflexion
frage: Auf Aufgabenblatt 5 wird der Startwert `gVal` als eigener Parameter übergeben, obwohl man ihn auch aus `bild[z][s]` lesen könnte. Warum wäre es falsch, in jedem Aufruf `gVal = bild[z][s]` zu setzen?
antwort: |
  In jedem Aufruf steht an `(z, s)` ein anderer Pixel. Setzt man dort `gVal = bild[z][s]`, vergleicht jeder Pixel nur
  noch mit sich selbst. Der Abstand ist immer 0, also passt jeder Pixel, und die Füllung läuft über das ganze
  zusammenhängende Bild. Reicht man stattdessen den eigenen Wert an den nächsten Aufruf weiter, vergleicht jeder Pixel
  mit seinem Vorgänger, und die Füllung driftet über weiche Verläufe weit in fremde Gebiete. Der Parameter `gVal` hält den Wert des angeklickten Pixels fest. So vergleicht jeder
  Aufruf mit demselben Bezugswert, und die Toleranz bedeutet wirklich „höchstens so weit weg vom Klickpunkt“.
```

## Feuer und Fluss: Simulationen auf der Landkarte

```aufgabe
id: aw-sim-check-zufall
titel: Was liefert nextDouble?
niveau: 1
art: check
angabe: |
  Beurteile jede Aussage über `Random zufall = new Random(7);` und `zufall.nextDouble()`.
  (Wiederholung: [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel))
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`zufall.nextDouble()` liefert eine Zahl, die mindestens 0,0 und kleiner als 1,0 ist.'
        richtig: true
        erklaerung: Der Wert liegt im Bereich von 0,0 einschließlich bis 1,0 ausschließlich.
      - text: Die Bedingung `zufall.nextDouble() < 0.25` ist ungefähr in 25 von 100 Fällen wahr.
        richtig: true
        erklaerung: Die Zahlen sind gleichmäßig verteilt. Ein Viertel des Bereichs liegt unter 0,25.
      - text: Zwei Programme, die beide `new Random(7)` verwenden, liefern verschiedene Zahlenfolgen.
        richtig: false
        erklaerung: Mit demselben Startwert (Seed) liefert der Generator jedes Mal dieselbe Folge. Das macht Simulationen wiederholbar.
    fehler:
      - wert: [r, r, r]
        meldung: Der Seed 7 legt die ganze Folge fest. Gleicher Seed heißt gleiche Folge.
loesung: |
  `nextDouble()` liefert Werte von 0,0 bis unter 1,0, gleichmäßig verteilt. Darum ist `< 0.25` in etwa 25 % der Fälle wahr.
  ---
  Mit einem festen Seed wie 7 ist die Folge bei jedem Start gleich. Aussage 3 ist falsch.
```

Auf Aufgabenblatt 5 aus dem Jahr 2021 und in den Ad-hoc-Aufgaben 16 und 17 von 2017 wird eine **Landschaft** auf
einem Raster simuliert. **Simulieren** heißt: Ein Programm spielt einen Vorgang aus der Wirklichkeit Schritt für
Schritt nach. Hier breitet sich ein Feuer über eine Wiese aus, und ein Fluss fließt den Hang hinunter.

Im Original speichert das Array Farben vom Typ `Color` und zeichnet sie mit CodeDraw. Wir verwenden ein `char[][]`,
denn Zeichen kann man leicht ausgeben und vergleichen. Die Bedeutung der Zeichen:

- `'W'` ist Wiese.
- `'#'` ist ein Fels.
- `'~'` ist Wasser.
- `'F'` ist ein brennendes Feld.
- `'X'` ist ein Fels, den das Wasser schon getroffen hat. Im Original wird er dunkelgrau.

### Das Feuer

Ein Feuer beginnt auf einer Wiese. Es breitet sich in die vier Himmelsrichtungen aus, also nach Norden (oben),
Osten (rechts), Süden (unten) und Westen (links). Es brennt nur auf Wiese. Felsen und Wasser halten es auf. Das kennst
du schon. Das ist **Flood-Fill** mit der alten Farbe `'W'` und der neuen Farbe `'F'`.

:::beispiel[Ein Feuer, das sich überall ausbreitet]
```java
public static int brenne(char[][] land, int z, int s) {
    if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
        return 0;
    }
    if (land[z][s] != 'W') {
        return 0;                      // Fels, Wasser oder brennt schon
    }
    land[z][s] = 'F';
    return 1 + brenne(land, z - 1, s)  // Norden
             + brenne(land, z, s + 1)  // Osten
             + brenne(land, z + 1, s)  // Süden
             + brenne(land, z, s - 1); // Westen
}
```

- Die Methode liefert die Anzahl der Felder, die in diesem Aufruf und allen von ihm ausgelösten Aufrufen anfangen zu brennen.
- Die Bedingung `land[z][s] != 'W'` hält das Feuer an Fels, Wasser und schon brennenden Feldern auf.
- Die Reihenfolge Norden, Osten, Süden, Westen stammt aus dem Blatt. Für das Endergebnis spielt sie keine Rolle.

Für die Landschaft

```
WW~WW
W#~WW
WW~#W
WWW~W
```

liefert `brenne(land, 0, 0)` den Wert 8. Es brennen die acht Wiesenfelder links vom Fluss. Der Fluss in Spalte 2
und der Fels bei `(1, 1)` halten das Feuer auf, und die rechte Seite bleibt verschont.

```
FF~WW
F#~WW
FF~#W
FFF~W
```
:::

Im Original breitet sich das Feuer nicht sicher aus, sondern **mit einer Wahrscheinlichkeit** von 70 % je Richtung.
Das erledigt ein Zufallsgenerator aus [8.6 Zufallszahlen und das Ratespiel](/lernen/ep1/eingabe/zufallszahlen-und-das-ratespiel):

```java
if (zufall.nextDouble() >= 0.3) {
    brenne(land, z - 1, s, zufall);   // Norden, nur in 70 % der Fälle
}
```

Die Struktur bleibt dieselbe. Die Methode bekommt nur den Zufallsgenerator `zufall` als zusätzlichen Parameter, und
vor jedem der vier Selbstaufrufe steht eine Zufallsabfrage. Das Ergebnis ist dann
nicht mehr vorhersagbar. Eines gilt aber sicher: Es brennen höchstens die Felder, die auch beim sicheren Feuer
brennen würden.

```aufgabe
id: aw-sim-ausgabe-feuer
titel: Wohin brennt das Feuer?
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  `brenne` ist dieselbe Methode wie im Beispiel „Ein Feuer, das sich überall ausbreitet“. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Feuer {
          public static int brenne(char[][] land, int z, int s) {
              if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
                  return 0;
              }
              if (land[z][s] != 'W') {
                  return 0;
              }
              land[z][s] = 'F';
              return 1 + brenne(land, z - 1, s) + brenne(land, z, s + 1)
                       + brenne(land, z + 1, s) + brenne(land, z, s - 1);
          }

          public static void main(String[] args) {
              char[][] land = {
                  {'W', '#', 'W', 'W', 'W'},
                  {'W', '#', 'W', '~', 'W'},
                  {'W', 'W', '#', '~', 'W'},
                  {'#', 'W', 'W', '~', 'W'}
              };
              System.out.println(brenne(land, 0, 0));
              for (int z = 0; z < land.length; z++) {
                  for (int s = 0; s < land[z].length; s++) {
                      System.out.print(land[z][s]);
                  }
                  System.out.println();
              }
          }
      }
    loesung: |
      6
      F#WWW
      F#W~W
      FF#~W
      #FF~W
    fehler:
      - wert: "13\nF#FFF\nF#F~F\nFF#~F\n#FF~F"
        meldung: Das Feuer springt nicht schräg. Von `(2, 1)` nach `(1, 2)` geht es nur über eine Ecke. Von `(3, 2)` aus liegen im Norden der Fels und im Osten das Wasser.
hinweise:
  - Färbe von `(0, 0)` aus jede Wiese, die du ohne Schritt über `#` oder `~` erreichst. Schräge Schritte gibt es nicht.
loesung: |
  **Ansatz:** Das sichere Feuer ist ein Flood-Fill auf `'W'`. Es erreicht genau die Wiesen, die mit `(0, 0)` zusammenhängen.
  ---
  Von `(0, 0)` geht es nach unten über `(1, 0)` zu `(2, 0)`, dann nach rechts zu `(2, 1)`, nach unten zu `(3, 1)` und weiter zu `(3, 2)`.
  ---
  Von `(3, 2)` aus liegen oben der Fels und rechts das Wasser. Es brennen 6 Felder. Die Wiesen rechts oben bleiben verschont.
```

```aufgabe
id: aw-sim-zahl-feuer
titel: Wie viel Wiese bleibt übrig?
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Dieselbe Landschaft wie in der Aufgabe „Wohin brennt das Feuer?“, aber diesmal beginnt das Feuer bei `(0, 2)`:

  ```
  W#WWW
  W#W~W
  WW#~W
  #WW~W
  ```
teile:
  - typ: zahl
    label: a) Wie viele Felder brennen?
    loesung: "7"
    fehler:
      - wert: "13"
        meldung: Das sind alle Wiesen der Karte. Der Fels in Spalte 1 trennt aber die linke Seite ab.
      - wert: "4"
        meldung: Das Feuer erreicht über `(0, 4)` auch die ganze rechte Spalte bis `(3, 4)`.
  - typ: zahl
    label: b) Wie viele Felder sind danach noch Wiese?
    loesung: "13 - 7"
    fehler:
      - wert: "7"
        meldung: Gefragt ist die verbleibende Wiese. Zähle alle `W` vorher und ziehe die brennenden ab.
hinweise:
  - Zähle zuerst alle `W` der Karte.
  - Bestimme dann die Fläche aus Wiese, die mit `(0, 2)` zusammenhängt.
loesung: |
  **Ansatz:** Das Feuer füllt die zusammenhängende Wiese ab `(0, 2)`. Der Rest bleibt Wiese.
  ---
  a) Von `(0, 2)` geht es nach unten zu `(1, 2)` und nach rechts zu `(0, 3)` und `(0, 4)`. Von dort läuft es die rechte Spalte hinunter bis `(3, 4)`. Das sind `(0, 2)`, `(1, 2)`, `(0, 3)`, `(0, 4)`, `(1, 4)`, `(2, 4)`, `(3, 4)`, also 7 Felder.
  ---
  b) Die Karte hat 13 Wiesenfelder. Es bleiben `13 - 7 = 6`, nämlich die sechs Wiesen links vom Felsen und unten in der Mitte.
```

:::achtung[Das Feuer prüft nur auf Fels]
Ein Student schreibt die Abbruchbedingung als

```java
if (land[z][s] == '#') {      // falsch: nur Fels hält auf
    return 0;
}
land[z][s] = 'F';
```

Dann brennt das Feuer auch auf Wasser, das ist schon inhaltlich falsch. Schlimmer ist ein brennendes Feld `'F'`. Es
gilt nicht als Hindernis. Schon die Karte `WW` mit nur einer Zeile genügt. Der Aufruf für `(0, 0)` ruft Osten
`(0, 1)` auf. Dort liegen Norden, Osten und Süden außerhalb, also ruft `(0, 1)` im Westen wieder `(0, 0)` auf. Beide stehen
schon auf `'F'`, aber das hält niemanden auf. Die zwei Felder rufen sich endlos gegenseitig auf, und
das Programm endet mit einem `StackOverflowError`. Die richtige Bedingung fragt nach dem, was brennen **darf**:
`land[z][s] != 'W'`.
:::

### Der Fluss

Der Fluss beginnt an einer Stelle `(z, s)` und fließt nach **unten**, also in Richtung größerer Zeilennummern. Jedes
Feld, über das er fließt, wird zu Wasser `'~'`. Trifft er auf einen Fels `'#'`, teilt er sich: Direkt links und direkt
rechts neben dem Fels entsteht je ein neuer Wasserlauf, und beide fließen für sich weiter nach unten. Der Fels selbst
wird zu `'X'`. So steht es auch auf dem Blatt von 2021, dort mit dunkelgrauer Farbe statt `'X'`. Trifft das Wasser auf
ein `'X'`, passiert nichts mehr.

Im Original fließt das Wasser zufällig nach links unten oder rechts unten. Wir lassen es gerade nach unten fließen,
damit man das Ergebnis vorhersagen kann.

:::beispiel[Ein Fluss, der sich an Felsen teilt]
```java
public static void fliesse(char[][] land, int z, int s) {
    if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
        return;                         // außerhalb: das Wasser verlässt die Karte
    }
    if (land[z][s] == 'X') {
        return;                         // schon getroffener Fels
    }
    if (land[z][s] == '#') {
        land[z][s] = 'X';               // Fels markieren
        fliesse(land, z, s - 1);        // links daneben weiter
        fliesse(land, z, s + 1);        // rechts daneben weiter
        return;
    }
    land[z][s] = '~';
    fliesse(land, z + 1, s);            // nach unten
}
```

Für die Karte

```
WWWWW
WW#WW
WWWWW
W#WWW
WWWWW
```

und den Aufruf `fliesse(land, 0, 2)` passiert Folgendes:

1. `(0, 2)` wird Wasser. Darunter liegt bei `(1, 2)` ein Fels. Er wird zu `'X'`, und das Wasser teilt sich nach `(1, 1)` und `(1, 3)`.
2. Der linke Lauf beginnt bei `(1, 1)` und fließt über `(2, 1)` nach unten. Bei `(3, 1)` trifft er wieder auf einen Fels. Der wird `'X'`, und es entstehen Läufe ab `(3, 0)` und `(3, 2)`. Beide fließen bis zum unteren Rand.
3. Erst danach kommt der rechte Lauf ab `(1, 3)` dran und fließt gerade nach unten bis zum Rand.

Ergebnis:

```
WW~WW
W~X~W
W~W~W
~X~~W
~W~~W
```
:::

Warum endet `fliesse`? Ein Aufruf auf Wiese oder Wasser geht eine Zeile nach unten. Das geht nur so oft, wie die
Karte Zeilen hat. Seitwärts geht es nur an einem Fels, und der wird dabei zu `'X'`. Jeder Fels kann also höchstens
einmal eine Teilung auslösen. Darum gibt es nur endlich viele Aufrufe.

:::achtung[Den getroffenen Fels nicht markiert]
Eine Fassung ohne `'X'` lässt den Fels einfach stehen:

```java
if (land[z][s] == '#') {
    fliesse(land, z, s - 1);   // falsch: Fels bleibt '#'
    fliesse(land, z, s + 1);
    return;
}
```

Bei einem einzelnen Fels geht das gut. Liegen aber zwei Felsen nebeneinander, etwa in der Zeile `W##W`, passiert
Folgendes. Das Wasser trifft den linken Fels und teilt sich, der rechte Lauf trifft den rechten Fels. Der teilt sich
wieder, und sein linker Lauf trifft den linken Fels. Der ist immer noch `'#'` und teilt sich erneut. Die beiden
Felsen schicken das Wasser endlos hin und her, bis ein `StackOverflowError` kommt. Das `'X'` ist dieselbe Idee wie
die Farbe bei Flood-Fill: eine **Markierung**, die eine zweite Bearbeitung verhindert.
:::

```aufgabe
id: aw-sim-gefuehrt-fluss
titel: Einen Fluss verfolgen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  `fliesse` ist dieselbe Methode wie im Beispiel „Ein Fluss, der sich an Felsen teilt“. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Fluss {
          public static void fliesse(char[][] land, int z, int s) {
              if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
                  return;
              }
              if (land[z][s] == 'X') {
                  return;
              }
              if (land[z][s] == '#') {
                  land[z][s] = 'X';
                  fliesse(land, z, s - 1);
                  fliesse(land, z, s + 1);
                  return;
              }
              land[z][s] = '~';
              fliesse(land, z + 1, s);
          }

          public static void main(String[] args) {
              char[][] land = {
                  {'W', 'W', 'W', 'W', 'W', 'W'},
                  {'W', 'W', 'W', '#', 'W', 'W'},
                  {'W', '#', 'W', 'W', 'W', 'W'},
                  {'W', 'W', 'W', 'W', '#', 'W'},
                  {'W', 'W', 'W', 'W', 'W', 'W'}
              };
              fliesse(land, 0, 3);
              for (int z = 0; z < land.length; z++) {
                  for (int s = 0; s < land[z].length; s++) {
                      System.out.print(land[z][s]);
                  }
                  System.out.println();
              }
          }
      }
    loesung: |
      WWW~WW
      WW~X~W
      W#~W~W
      WW~~X~
      WW~~W~
    fehler:
      - wert: "WWW~WW\nWW~X~W\nWX~W~W\nWW~~X~\nWW~~W~"
        meldung: Der Fels bei `(2, 1)` wird nie getroffen. Der linke Lauf beginnt bei `(1, 2)` und fließt in Spalte 2 nach unten, nicht in Spalte 1.
      - wert: "WWW~WW\nWW~X~W\nW#~W~W\nWW~~#~\nWW~~W~"
        meldung: Ein getroffener Fels wird zu `X`. Der Fels bei `(3, 4)` liegt im rechten Lauf und wird getroffen.
gefuehrt:
  - text: Wo teilt sich das Wasser zum ersten Mal?
    teil:
      typ: auswahl
      optionen: ['am Fels `(1, 3)`', 'am Fels `(2, 1)`', 'am Fels `(3, 4)`']
      richtig: [0]
    erklaerung: Das Wasser startet bei `(0, 3)` und trifft darunter sofort den Fels `(1, 3)`.
  - text: In welcher Spalte fließt der linke Lauf nach unten?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Er beginnt direkt links vom Fels, bei `(1, 2)`, und fließt in Spalte 2 bis zum Rand.
  - text: Der rechte Lauf beginnt bei `(1, 4)`. Welchen Fels trifft er?
    teil:
      typ: auswahl
      optionen: ['`(3, 4)`', '`(2, 1)`', 'keinen']
      richtig: [0]
    erklaerung: Er fließt über `(2, 4)` nach unten und trifft `(3, 4)`. Dort teilt er sich nach `(3, 3)` und `(3, 5)`.
  - text: Wie viele Felder sind am Ende Wasser `~`?
    teil: { typ: zahl, loesung: "1 + 4 + 2 + 4" }
    erklaerung: 'Das Startfeld `(0, 3)` (1), Spalte 2 von Zeile 1 bis 4 (4), `(1, 4)` und `(2, 4)` (2), dann `(3, 3)`, `(4, 3)`, `(3, 5)` und `(4, 5)` (4). Zusammen 11.'
hinweise:
  - Verfolge zuerst den linken Lauf ganz bis zum Rand, erst danach den rechten. So arbeitet auch der Aufrufstapel.
  - Ein Fels, den kein Wasser trifft, bleibt `#`.
loesung: |
  **Ansatz:** Den Weg des Wassers Aufruf für Aufruf verfolgen. Bei jedem Fels zuerst den linken Lauf vollständig, dann den rechten.
  ---
  `(0, 3)` wird `~`. Der Fels `(1, 3)` wird `X`. Der linke Lauf fließt ab `(1, 2)` in Spalte 2 bis zur letzten Zeile.
  ---
  Der rechte Lauf fließt ab `(1, 4)` über `(2, 4)` und trifft `(3, 4)`. Der Fels wird `X`, und neue Läufe entstehen ab `(3, 3)` und `(3, 5)`.
  ---
  Der Fels `(2, 1)` liegt abseits und bleibt `#`. Zur Kontrolle zählst du 11 Wasserfelder in der Ausgabe.
```

```aufgabe
id: aw-sim-rf-zufall
titel: Das Feuer mit Zufall
niveau: 1
lernziel: 6
kompetenz: begruenden
angabe: |
  `brenneZufall` arbeitet wie `brenne`, ruft aber jede der vier Richtungen nur auf, wenn `zufall.nextDouble() >= 0.35`
  ist. Beurteile jede Aussage. Die Landschaft ist dieselbe, das Feuer startet am selben Feld.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`brenneZufall` kann nie mehr Felder anzünden als `brenne`.'
        richtig: true
        erklaerung: Es lässt nur Aufrufe weg. Jedes Feld, das es anzündet, ist mit dem Startfeld über Wiese verbunden und würde auch bei `brenne` brennen.
      - text: '`brenneZufall` kann ein Feld hinter einem Fluss anzünden, wenn der Zufall es will.'
        richtig: false
        erklaerung: Wasser hält das Feuer immer auf. Der Zufall entscheidet nur, ob eine erlaubte Richtung versucht wird.
      - text: Das Startfeld brennt immer, sofern es eine Wiese ist.
        richtig: true
        erklaerung: Das Startfeld wird vor jeder Zufallsabfrage gefärbt.
      - text: Mit `new Random(42)` brennen bei jedem Programmstart dieselben Felder.
        richtig: true
        erklaerung: Ein fester Seed erzeugt jedes Mal dieselbe Folge von Zufallszahlen. Die Simulation ist dadurch wiederholbar.
    fehler:
      - wert: [r, r, r, r]
        meldung: Der Zufall kann Aufrufe weglassen, aber keine Hindernisse überspringen. Wasser stoppt das Feuer immer.
      - wert: [r, f, r, f]
        meldung: Ein fester Seed liefert bei jedem Start dieselbe Zahlenfolge. Darum ist auch das Ergebnis jedes Mal gleich.
hinweise:
  - Der Zufall steht nur vor den Selbstaufrufen. Die Basisfälle sind dieselben wie bei `brenne`.
loesung: |
  **Ansatz:** `brenneZufall` ist `brenne` mit möglicherweise weggelassenen Aufrufen.
  ---
  Aussage 1 stimmt, weggelassene Aufrufe können nur weniger Felder anzünden. Aussage 2 ist falsch, Wasser bleibt ein Basisfall.
  ---
  Aussage 3 stimmt, gefärbt wird vor dem Zufall. Aussage 4 stimmt, ein fester Seed macht die Folge wiederholbar.
```

```aufgabe
id: aw-sim-lueckentext-feuer
titel: Die Feuer-Methode ergänzen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ergänze `brenne` so, dass das Feuer nur auf Wiese `'W'` brennt und die Anzahl der angezündeten Felder liefert.
teile:
  - typ: lueckentext
    code: |
      public class Brand {
          public static int brenne(char[][] land, int z, int s) {
              if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
                  return ___;
              }
              if (land[z][s] ___ 'W') {
                  return 0;
              }
              land[z][s] = 'F';
              return ___ + brenne(land, z - 1, s) + brenne(land, z, s + 1)
                       + brenne(land, z + 1, s) + brenne(land, z, s - 1);
          }
      }
    luecken: [["0"], ["!="], ["1"]]
    fehler:
      - wert: ["0", "==", "1"]
        meldung: Mit `==` würde das Feuer genau auf Wiese **nicht** brennen. Der Basisfall greift, wenn das Feld keine Wiese ist.
      - wert: ["0", "!=", "0"]
        meldung: Das eigene Feld brennt und muss mitgezählt werden. Sonst liefert die Methode immer 0.
hinweise:
  - Ein Feld außerhalb der Karte zündet nichts an.
  - Ein angezündetes Feld zählt 1, dazu kommen die Ergebnisse der vier Nachbarn.
loesung: |
  **Ansatz:** Das ist Flood-Fill mit Zähler, wie `flaeche` in [15.4 Flood-Fill: zusammenhängende Flächen rekursiv füllen](/lernen/ep1/arrays-anwendungen/flood-fill-zusammenhaengende-flaechen-rekursiv-fuellen).
  ---
  Lücke 1: `0`. Lücke 2: `!=`, denn alles außer Wiese hält das Feuer auf.
  ---
  Lücke 3: `1`, das eigene Feld.
```

```aufgabe
id: aw-sim-zeilen-fels
titel: Zwei Felsen nebeneinander
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Diese Fassung von `fliesse` funktioniert bei einzelnen Felsen. Bei zwei Felsen nebeneinander endet sie mit einem
  `StackOverflowError`. Markiere die Zeile, die an die falsche Stelle geraten ist.
teile:
  - typ: zeilen
    code: |
      public static void fliesse(char[][] land, int z, int s) {
          if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
              return;
          }
          if (land[z][s] == 'X') {
              return;
          }
          if (land[z][s] == '#') {
              fliesse(land, z, s - 1);
              fliesse(land, z, s + 1);
              land[z][s] = 'X';
              return;
          }
          land[z][s] = '~';
          fliesse(land, z + 1, s);
      }
    loesung: [11]
    fehler:
      - wert: [5]
        meldung: Die Prüfung auf `X` ist richtig und nötig. Sie hilft aber nur, wenn der Fels **rechtzeitig** zu `X` wird.
      - wert: [14]
        meldung: Wasser auf Wiese zu markieren ist richtig. Der Abwärtsschritt endet sicher am unteren Rand.
hinweise:
  - Verfolge die Zeile `W##W`. Der linke Fels ruft den rechten auf. Was steht im linken Fels, wenn der rechte ihn zurückruft?
  - Eine Markierung schützt nur, wenn sie gesetzt ist, bevor weitere Aufrufe starten.
loesung: |
  **Ansatz:** Die Markierung `X` muss gesetzt sein, bevor die Teilung weitere Aufrufe auslöst. Sonst ist sie wirkungslos.
  ---
  Zeile 11 setzt `X` erst nach den beiden Selbstaufrufen. Der rechte Nachbarfels ruft den linken zurück, und der ist noch `#`.
  ---
  Die Reparatur: Zeile 11 vor Zeile 9 verschieben. Das ist derselbe Fehler wie „erst aufrufen, dann färben“ bei Flood-Fill.
```

```aufgabe
id: aw-sim-code-brenne
titel: Das sichere Feuer schreiben
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 4 (simSpreadingFire) und Ad-hoc-Aufgabe 16 (2017W), ohne Zufall nachgebaut
angabe: |
  Implementiere `int brenne(char[][] land, int z, int s)` **rekursiv** und ohne Schleifen. Das Feuer beginnt bei
  `(z, s)`, brennt nur auf Wiese `'W'` und breitet sich nach Norden, Osten, Süden und Westen aus. Jedes angezündete
  Feld wird zu `'F'`. Die Methode liefert die Anzahl der angezündeten Felder. Ist das Startfeld keine Wiese oder liegt
  außerhalb, passiert nichts, und sie liefert 0.

  Vorbedingung: `land != null`.
teile:
  - typ: code
    vorlage: |
      public class Brand {
          public static int brenne(char[][] land, int z, int s) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Brand {
          public static int brenne(char[][] land, int z, int s) {
              if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
                  return 0;
              }
              if (land[z][s] != 'W') {
                  return 0;
              }
              land[z][s] = 'F';
              return 1 + brenne(land, z - 1, s) + brenne(land, z, s + 1)
                       + brenne(land, z + 1, s) + brenne(land, z, s - 1);
          }
      }
    tests:
      - { vorher: "char[][] l = {{'W', '#', 'W', 'W', 'W'}, {'W', '#', 'W', '~', 'W'}, {'W', 'W', '#', '~', 'W'}, {'#', 'W', 'W', '~', 'W'}};", aufruf: "brenne(l, 0, 2)", erwartet: "7" }
      - { vorher: "char[][] l = {{'W', '#', 'W', 'W', 'W'}, {'W', '#', 'W', '~', 'W'}, {'W', 'W', '#', '~', 'W'}, {'#', 'W', 'W', '~', 'W'}};", aufruf: "brenne(l, 0, 2)", ergebnis: "l", erwartet: "new char[][]{{'W', '#', 'F', 'F', 'F'}, {'W', '#', 'F', '~', 'F'}, {'W', 'W', '#', '~', 'F'}, {'#', 'W', 'W', '~', 'F'}}", beschreibung: "die Karte nach dem Brand" }
      - { vorher: "char[][] l = {{'~', 'W'}};", aufruf: "brenne(l, 0, 0)", erwartet: "0", beschreibung: "Start auf Wasser" }
      - { vorher: "char[][] l = {{'W', 'W'}, {'W', 'W'}};", aufruf: "brenne(l, 1, 1)", erwartet: "4", versteckt: true }
    regeln: { keineSchleifenIn: [brenne], rekursiv: [brenne], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Die Zahl stimmt nicht. Zählst du jedes angezündete Feld genau einmal (1 plus die Ergebnisse der vier Richtungen)? Und hältst du an allem an, was nicht `'W'` ist?" }
      - { wert: 3, meldung: "Auf Wasser beginnt kein Feuer. Der Basisfall „keine Wiese“ liefert 0." }
hinweise:
  - Zwei Basisfälle mit Ergebnis 0. Außerhalb, oder das Feld ist keine Wiese.
  - Sonst `'F'` setzen und `1 +` die Ergebnisse der vier Richtungen zurückgeben.
loesung: |
  **Ansatz:** Das sichere Feuer ist Flood-Fill von `'W'` nach `'F'` mit Zähler.
  ---
  ```java
  if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
      return 0;
  }
  if (land[z][s] != 'W') {
      return 0;
  }
  land[z][s] = 'F';
  return 1 + brenne(land, z - 1, s) + brenne(land, z, s + 1)
           + brenne(land, z + 1, s) + brenne(land, z, s - 1);
  ```
  ---
  Ein brennendes Feld ist kein `'W'` mehr. Darum endet jeder spätere Aufruf für dieses Feld sofort.
  ---
  Probe mit Test 1: Das Feuer ab `(0, 2)` erreicht `(1, 2)`, die Felder `(0, 3)` und `(0, 4)` sowie die rechte Spalte. Das sind 7 Felder.
```

```aufgabe
id: aw-sim-code-zeichnen
titel: Die Landschaft zeichnen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 4 (drawLandscape, nachgebaut)
angabe: |
  Implementiere `void zeichne(CodeDraw cd, char[][] land, int g)`. Jedes Feld `(z, s)` wird als gefülltes Quadrat mit
  Seitenlänge `g` gezeichnet. Seine linke obere Ecke liegt bei `x = s * g` und `y = z * g`. Die Farben sind
  `Palette.GREEN` für `'W'`, `Palette.GRAY` für `'#'`, `Palette.BLUE` für `'~'` und `Palette.RED` für `'F'`.

  In CodeDraw zeigt `x` nach rechts und `y` nach unten, genau wie Spalte und Zeile
  (siehe [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe)).
  Rufe `cd.show()` **nicht** auf, das erledigt der Aufrufer.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Landschaft {
          public static void zeichne(CodeDraw cd, char[][] land, int g) {
              // TODO
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Landschaft {
          public static void zeichne(CodeDraw cd, char[][] land, int g) {
              for (int z = 0; z < land.length; z++) {
                  for (int s = 0; s < land[z].length; s++) {
                      if (land[z][s] == 'W') {
                          cd.setColor(Palette.GREEN);
                      } else if (land[z][s] == '#') {
                          cd.setColor(Palette.GRAY);
                      } else if (land[z][s] == '~') {
                          cd.setColor(Palette.BLUE);
                      } else {
                          cd.setColor(Palette.RED);
                      }
                      cd.fillSquare(s * g, z * g, g);
                  }
              }
          }
      }
    tests:
      - { aufruf: "zeichne(new CodeDraw(200, 100), new char[][]{{'W', '#', '~', 'F'}, {'W', 'W', '~', 'F'}}, 50)", zeichnung: true, beschreibung: "2 Zeilen, 4 Spalten" }
      - { aufruf: "zeichne(new CodeDraw(90, 60), new char[][]{{'#', '~', 'W'}, {'F', 'F', '#'}}, 30)", zeichnung: true, beschreibung: "nicht quadratisch: Zeile und Spalte nicht vertauschen" }
      - { aufruf: "zeichne(new CodeDraw(40, 120), new char[][]{{'W'}, {'~'}, {'#'}}, 40)", zeichnung: true, versteckt: true }
    fehler:
      - { wert: 2, meldung: "Die Quadrate liegen falsch. Die Spalte `s` bestimmt `x`, die Zeile `z` bestimmt `y`. Also `cd.fillSquare(s * g, z * g, g)`." }
      - { wert: 1, meldung: "Vergleiche die beiden Zeichnungen. Stimmen die Farben, und zeichnest du für jedes Feld genau ein gefülltes Quadrat?" }
hinweise:
  - Zwei Schleifen über Zeilen und Spalten. Für jedes Feld zuerst die Farbe setzen, dann das Quadrat zeichnen.
  - Die Farbe wählst du mit `if`/`else if` nach dem Zeichen.
loesung: |
  **Ansatz:** Jedes Feld wird zu einem Quadrat. Spalte und Zeile werden mit `g` multipliziert und ergeben `x` und `y` der linken oberen Ecke.
  ---
  ```java
  for (int z = 0; z < land.length; z++) {
      for (int s = 0; s < land[z].length; s++) {
          if (land[z][s] == 'W') {
              cd.setColor(Palette.GREEN);
          } else if (land[z][s] == '#') {
              cd.setColor(Palette.GRAY);
          } else if (land[z][s] == '~') {
              cd.setColor(Palette.BLUE);
          } else {
              cd.setColor(Palette.RED);
          }
          cd.fillSquare(s * g, z * g, g);
      }
  }
  ```
  ---
  Der häufigste Fehler ist `cd.fillSquare(z * g, s * g, g)`. Bei einer quadratischen Karte sieht das Bild dann an der Diagonale von links oben nach rechts unten gespiegelt aus, bei einer rechteckigen ragt es aus dem Fenster.
  ---
  Probe mit Test 1: Das Feld `(1, 3)` ist `'F'` und wird als rotes Quadrat bei `x = 150`, `y = 50` gezeichnet.
```

```aufgabe
id: aw-sim-code-fliesse
titel: Den Fluss schreiben
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 4 (simWaterFlow) und Ad-hoc-Aufgabe 17 (2017W), ohne Zufall nachgebaut
angabe: |
  Implementiere `void fliesse(char[][] land, int z, int s)` **rekursiv** und ohne Schleifen nach diesen Regeln:

  - Liegt `(z, s)` außerhalb der Karte oder ist dort ein schon getroffener Fels `'X'`, passiert nichts.
  - Ist dort ein Fels `'#'`, wird er zu `'X'`. Dann fließt das Wasser ab `(z, s - 1)` und danach ab `(z, s + 1)` weiter.
  - Sonst wird das Feld zu Wasser `'~'`, und das Wasser fließt ab `(z + 1, s)` weiter.

  Vorbedingung: `land != null`.
teile:
  - typ: code
    vorlage: |
      public class Wasser {
          public static void fliesse(char[][] land, int z, int s) {
              // TODO
          }
      }
    musterloesung: |
      public class Wasser {
          public static void fliesse(char[][] land, int z, int s) {
              if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
                  return;
              }
              if (land[z][s] == 'X') {
                  return;
              }
              if (land[z][s] == '#') {
                  land[z][s] = 'X';
                  fliesse(land, z, s - 1);
                  fliesse(land, z, s + 1);
                  return;
              }
              land[z][s] = '~';
              fliesse(land, z + 1, s);
          }
      }
    tests:
      - { vorher: "char[][] l = {{'W', 'W', 'W'}, {'W', 'W', '#'}, {'W', 'W', 'W'}};", aufruf: "fliesse(l, 0, 2)", ergebnis: "l", erwartet: "new char[][]{{'W', 'W', '~'}, {'W', '~', 'X'}, {'W', '~', 'W'}}", beschreibung: "Fels am rechten Rand" }
      - { vorher: "char[][] l = {{'W', 'W', 'W', 'W'}, {'W', '#', '#', 'W'}, {'W', 'W', 'W', 'W'}};", aufruf: "fliesse(l, 0, 1)", ergebnis: "l", erwartet: "new char[][]{{'W', '~', 'W', 'W'}, {'~', 'X', 'X', '~'}, {'~', 'W', 'W', '~'}}", beschreibung: "zwei Felsen nebeneinander" }
      - { vorher: "char[][] l = {{'W', 'W', 'W', 'W', 'W'}, {'W', '#', 'W', 'W', 'W'}, {'W', 'W', 'W', '#', 'W'}, {'#', 'W', 'W', 'W', 'W'}};", aufruf: "fliesse(l, 0, 1)", ergebnis: "l", erwartet: "new char[][]{{'W', '~', 'W', 'W', 'W'}, {'~', 'X', '~', 'W', 'W'}, {'~', 'W', '~', '#', 'W'}, {'X', '~', '~', 'W', 'W'}}", beschreibung: "Fels am linken Rand, ein Fels bleibt unberührt" }
      - { vorher: "char[][] l = {{'W', 'W', 'W', 'W', 'W', 'W'}, {'W', 'W', 'W', '#', 'W', 'W'}, {'W', '#', 'W', 'W', 'W', 'W'}, {'W', 'W', 'W', 'W', '#', 'W'}, {'W', 'W', 'W', 'W', 'W', 'W'}};", aufruf: "fliesse(l, 0, 3)", ergebnis: "l", erwartet: "new char[][]{{'W', 'W', 'W', '~', 'W', 'W'}, {'W', 'W', '~', 'X', '~', 'W'}, {'W', '#', '~', 'W', '~', 'W'}, {'W', 'W', '~', '~', 'X', '~'}, {'W', 'W', '~', '~', 'W', '~'}}", versteckt: true }
    regeln: { keineSchleifenIn: [fliesse], rekursiv: [fliesse], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Am rechten Rand gibt es kein `(z, s + 1)`. Prüfst du am Anfang jedes Aufrufs, ob das Feld in der Karte liegt?" }
      - { wert: 2, meldung: "Bei zwei Felsen nebeneinander muss der getroffene Fels sofort zu `'X'` werden, **bevor** sich das Wasser teilt. Sonst schicken sich die Felsen das Wasser endlos hin und her." }
hinweise:
  - Drei Fälle nach der Randprüfung. `'X'` beendet, `'#'` teilt, alles andere wird Wasser und fließt nach unten.
  - Beim Fels zuerst `land[z][s] = 'X';`, dann die zwei seitlichen Aufrufe, dann `return;`.
loesung: |
  **Ansatz:** Eine Rekursion mit zwei Basisfällen (außerhalb, `'X'`) und zwei rekursiven Fällen (Fels teilt, sonst nach unten).
  ---
  ```java
  if (z < 0 || z >= land.length || s < 0 || s >= land[z].length) {
      return;
  }
  if (land[z][s] == 'X') {
      return;
  }
  if (land[z][s] == '#') {
      land[z][s] = 'X';
      fliesse(land, z, s - 1);
      fliesse(land, z, s + 1);
      return;
  }
  land[z][s] = '~';
  fliesse(land, z + 1, s);
  ```
  ---
  Das `return` nach der Teilung ist wichtig. Ohne es würde der Fels danach zu `'~'` überschrieben, und das Wasser flösse durch den Fels nach unten.
  ---
  Probe mit Test 2: Der Fels `(1, 1)` wird `X` und schickt Wasser nach `(1, 0)` und `(1, 2)`. `(1, 2)` ist ein Fels, wird `X` und schickt Wasser nach `(1, 1)` (schon `X`, Ende) und `(1, 3)`. Beide äußeren Läufe fließen nach unten.
```

```reflexion
frage: Feuer, Inseln zählen und Flood-Fill auf dem Graubild sehen verschieden aus. Was haben die drei Methoden gemeinsam, und woran erkennst du in einer neuen Aufgabe, dass sie dieses Muster braucht?
antwort: |
  Alle drei sind Flood-Fill: Von einem Startfeld aus wird jedes Feld bearbeitet, das über eine Kette von Nachbarn mit
  einer bestimmten Eigenschaft erreichbar ist. Jede Methode hat dieselben Basisfälle: außerhalb der Karte, schon
  bearbeitet, Eigenschaft nicht erfüllt. Im rekursiven Fall markiert sie das Feld, bevor sie die Nachbarn aufruft.
  Verschieden sind nur die Eigenschaft (gleiche Farbe, Wiese, Grauwert in der Toleranz) und die Markierung (neue Farbe,
  `'F'`, -1). Eine Aufgabe braucht dieses Muster, wenn nach „allem, was zusammenhängt“ gefragt wird: eine Fläche füllen,
  ihre Größe bestimmen, sie zählen oder sich auf ihr ausbreiten.
```

## Gemischte Wiederholung

Hier mischen sich Aufgaben aus diesem Kapitel mit Stoff aus früheren Kapiteln, den du für Blatt 5 brauchst. Bei den
Fragen „Welches Verfahren passt?“ musst du nichts rechnen. Du sollst nur erkennen, welches Werkzeug eine Aufgabe
verlangt. Das ist bei neuen Aufgaben oft der schwierigste Schritt.

```aufgabe
id: aw-mix-verfahren-seen
titel: "Welches Verfahren passt? Seen zählen"
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Landkarte ist als `char[][]` gespeichert, `'~'` ist Wasser und `'W'` Wiese. Gesucht ist die Anzahl der
  getrennten Seen, also der zusammenhängenden Wasserflächen. Welches Vorgehen passt?
teile:
  - typ: auswahl
    optionen:
      - Zwei Schleifen über alle Zellen. Bei jedem `'~'` zählen und den ganzen See mit Flood-Fill markieren.
      - Zwei Schleifen über alle Zellen und jedes `'~'` zählen.
      - Für jede Zelle den Durchschnitt der Nachbarn in ein neues Array schreiben.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: So zählst du Wasserzellen, nicht Seen. Ein See aus zehn Zellen würde zehnmal gezählt.
      - wert: 2
        meldung: Das ist ein Mittelwertfilter für Bilder. Er glättet Werte, er zählt keine Flächen.
hinweise:
  - Eine Fläche zählt einmal, egal wie viele Zellen sie hat.
  - Erinnere dich an das Zählen von Inseln.
loesung: |
  **Ansatz:** Gefragt ist die Anzahl zusammenhängender Flächen. Das ist dieselbe Aufgabe wie „Inseln zählen“, nur mit Wasser statt Land.
  ---
  Jeder neue See wird beim ersten Treffer gezählt und sofort ganz markiert. So zählt er nur einmal.
  ---
  Antwort: Doppelschleife plus Flood-Fill, wie in [15.5 Flood-Fill mit Schwellwert und Inseln zählen](/lernen/ep1/arrays-anwendungen/flood-fill-mit-schwellwert-und-inseln-zaehlen).
```

```aufgabe
id: aw-mix-verfahren-weich
titel: "Welches Verfahren passt? Ein Foto weichzeichnen"
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Graubild soll weicher werden, sodass einzelne helle Störpunkte verschwinden. Welches Vorgehen passt?
teile:
  - typ: auswahl
    optionen:
      - Jeden Pixel direkt in `bild` durch den Durchschnitt seiner Umgebung ersetzen.
      - Ein neues Array anlegen und für jeden Pixel den Durchschnitt seiner Umgebung aus dem alten Bild eintragen.
      - Jeden Pixel mit einer Schwelle auf 0 oder 255 setzen.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Durchschnitt braucht die alten Werte der Nachbarn. Wer direkt in `bild` schreibt, rechnet bei späteren Pixeln mit schon geglätteten Werten.
      - wert: 2
        meldung: Ein Schwellwert macht das Bild schwarz-weiß, er glättet nicht. Ein heller Störpunkt bliebe weiß.
hinweise:
  - Weichzeichnen heißt, jeder Pixel wird seinen Nachbarn ähnlicher.
  - Überlege, ob der Filter alte Werte der Nachbarn braucht.
loesung: |
  **Ansatz:** Weichzeichnen ist ein Mittelwertfilter, also eine Nachbarschaftsoperation.
  ---
  Nachbarschaftsoperationen lesen alte Nachbarwerte und brauchen deshalb ein neues Array.
  ---
  Antwort: neues Array mit Durchschnittswerten, wie in [15.3 Bilder als Zahlenfelder: Filter und Faltung](/lernen/ep1/arrays-anwendungen/bilder-als-zahlenfelder-filter-und-faltung).
```

```aufgabe
id: aw-mix-verfahren-bingo
titel: "Welches Verfahren passt? Doppelte Zahlen auf einer Bingo-Karte"
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine Bingo-Karte ist ein `int[][]` mit 5 Zeilen und 5 Spalten. In jeder Spalte stehen Zahlen von 1 bis 75. Zu prüfen
  ist, ob in irgendeiner Spalte eine Zahl doppelt vorkommt. Welches Vorgehen passt?
teile:
  - typ: auswahl
    optionen:
      - Für jede Spalte ein neues `boolean[] gesehen = new boolean[76]` und jede Zahl beim Durchlaufen markieren.
      - Ein einziges `boolean[] gesehen = new boolean[76]` für die ganze Karte.
      - Ein Flood-Fill ab der Zelle links oben.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dann gälte eine Zahl schon als gesehen, wenn sie in einer anderen Spalte vorkam. Gesucht sind aber Doppelte innerhalb einer Spalte.
      - wert: 2
        meldung: Flood-Fill sucht zusammenhängende Flächen. Hier geht es um Doppelte in einer Spalte, nicht um Nachbarschaft.
hinweise:
  - Das ist dieselbe Frage wie beim Sudoku, nur mit Zahlen bis 75.
  - Der Index des Merk-Arrays ist die Zahl selbst. Wie groß muss es sein?
loesung: |
  **Ansatz:** „Kommt in einer Gruppe etwas doppelt vor?“ beantwortet ein Merk-Array, wie beim Sudoku-Prüfer.
  ---
  Für jede Spalte beginnt das Merk-Array neu. Es braucht 76 Einträge, damit der Index 75 gültig ist.
  ---
  Antwort: Merk-Array je Spalte, wie in [15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke).
```

```aufgabe
id: aw-mix-scanner
titel: Einen Wert zwischen 1 und 40 einlesen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2023, Aufgabe 4 (readIntValue, mit anderem Bereich nachgebaut)
angabe: |
  Für einen Flood-Fill mit Schwellwert gibt man einen Prozentwert ein. Implementiere `int leseProzent(Scanner sc)`.
  Die Methode liest so lange, bis eine ganze Zahl von 1 bis 40 eingegeben wurde, und liefert sie zurück. Ist eine
  Eingabe keine ganze Zahl, gibt sie `Keine ganze Zahl!` aus und überspringt das Wort. Ist es eine ganze Zahl außerhalb
  des Bereichs, gibt sie `Nur 1 bis 40!` aus.

  Vorbedingung: Die Eingabe enthält irgendwann eine passende Zahl. (Wiederholung:
  [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint))
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Eingabe {
          public static int leseProzent(Scanner sc) {
              return 0; // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Eingabe {
          public static int leseProzent(Scanner sc) {
              while (true) {
                  if (sc.hasNextInt()) {
                      int wert = sc.nextInt();
                      if (wert >= 1 && wert <= 40) {
                          return wert;
                      }
                      System.out.println("Nur 1 bis 40!");
                  } else {
                      System.out.println("Keine ganze Zahl!");
                      sc.next();
                  }
              }
          }
      }
    tests:
      - { aufruf: "leseProzent(new Scanner(\"17\"))", erwartet: "17", beschreibung: "gleich passend" }
      - { aufruf: "leseProzent(new Scanner(\"abc 70 25\"))", erwartet: "25", beschreibung: "Wort und zu große Zahl überspringen" }
      - { aufruf: "leseProzent(new Scanner(\"0 x 40\"))", stdout: "Nur 1 bis 40!\nKeine ganze Zahl!\n", beschreibung: "Meldungen" }
      - { aufruf: "leseProzent(new Scanner(\"12,5 -3 1\"))", erwartet: "1", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bei einem Wort wie `abc` liefert `hasNextInt()` false. Du musst es mit `sc.next()` aus der Eingabe nehmen, sonst prüfst du es endlos wieder." }
      - { wert: 3, meldung: "Prüfe die genauen Meldungen: `Nur 1 bis 40!` bei einer Zahl außerhalb, `Keine ganze Zahl!` bei einem Wort." }
hinweise:
  - Eine Endlosschleife `while (true)`, die mit `return` verlassen wird, sobald ein passender Wert da ist.
  - Mit `sc.hasNextInt()` prüfst du vor dem Lesen, ob eine ganze Zahl kommt. Sonst entfernst du das Wort mit `sc.next()`.
loesung: |
  **Ansatz:** Wiederholen, bis ein passender Wert kommt. Erst den Typ prüfen, dann den Bereich.
  ---
  ```java
  while (true) {
      if (sc.hasNextInt()) {
          int wert = sc.nextInt();
          if (wert >= 1 && wert <= 40) {
              return wert;
          }
          System.out.println("Nur 1 bis 40!");
      } else {
          System.out.println("Keine ganze Zahl!");
          sc.next();
      }
  }
  ```
  ---
  `sc.next()` im `else`-Zweig ist entscheidend. Ohne ihn bliebe das falsche Wort in der Eingabe, und die Schleife liefe ewig.
  ---
  Probe mit `abc 70 25`: `abc` ergibt die erste Meldung, 70 die zweite, 25 wird zurückgegeben.
```

```aufgabe
id: aw-mix-schachbrett
titel: Ein Schachbrettmuster in ein Raster schreiben
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? (Wiederholung: [5.3 Muster mit Bedingungen: Rahmen, Diagonalen und Schachbrett](/lernen/ep1/grafik/muster-mit-bedingungen-rahmen-diagonalen-und-schachbrett))
teile:
  - typ: ausgabe
    code: |
      char[][] f = new char[3][4];
      for (int z = 0; z < f.length; z++) {
          for (int s = 0; s < f[z].length; s++) {
              if ((z + s) % 2 == 0) {
                  f[z][s] = '#';
              } else {
                  f[z][s] = '.';
              }
          }
      }
      for (int z = 0; z < f.length; z++) {
          for (int s = 0; s < f[z].length; s++) {
              System.out.print(f[z][s]);
          }
          System.out.println();
      }
    loesung: |
      #.#.
      .#.#
      #.#.
    fehler:
      - wert: "#.#.\n#.#.\n#.#."
        meldung: Die Bedingung hängt von `z + s` ab, nicht nur von `s`. In der nächsten Zeile verschiebt sich das Muster um eins.
      - wert: "#.#\n.#.\n#.#\n.#."
        meldung: '`new char[3][4]` hat 3 Zeilen mit je 4 Zeichen, nicht 4 Zeilen mit je 3.'
hinweise:
  - Ein `#` steht genau dort, wo Zeile plus Spalte gerade ist.
loesung: |
  **Ansatz:** Für jede Zelle `(z + s) % 2` ausrechnen. Gerade ergibt `#`, ungerade `.`.
  ---
  Zeile 0: Summen 0, 1, 2, 3, also `#.#.`. Zeile 1 beginnt mit Summe 1, also `.#.#`. Zeile 2 wieder `#.#.`.
```

```aufgabe
id: aw-mix-char
titel: Eine Sudoku-Zeile als Text
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      int[] zeile = {5, 0, 7};
      String text = "";
      for (int i = 0; i < zeile.length; i++) {
          if (zeile[i] == 0) {
              text = text + '.';
          } else {
              text = text + (char) ('0' + zeile[i]);
          }
      }
      System.out.println(text);
      System.out.println('0' + zeile[0]);
    loesung: |
      5.7
      53
    fehler:
      - wert: "5.7\n5"
        meldung: '`''0'' + zeile[0]` ist `char + int`. Das Ergebnis ist eine Zahl: der Code von `''0''` (48) plus 5, also 53. Erst der Cast `(char)` macht daraus das Zeichen `5`.'
      - wert: "5.7\n05"
        meldung: Hier steht kein String im Ausdruck. `'0' + 5` ist eine Addition von Zahlen, keine Verkettung.
hinweise:
  - Das Zeichen `'0'` hat den Code 48, `'5'` den Code 53.
loesung: |
  **Ansatz:** Die Zeichen `'0'` bis `'9'` haben aufeinanderfolgende Codes ab 48. `(char) ('0' + 5)` ist darum das Zeichen `'5'`.
  ---
  Die erste Zeile wird `5`, `.`, `7`, also `5.7`. Die zweite Zeile addiert `48 + 5 = 53` und gibt die Zahl aus.
```

```aufgabe
id: aw-mix-rekursion-index
titel: Eine Zeile rekursiv aufsummieren
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string))
teile:
  - typ: ausgabe
    code: |
      public class Zeile {
          public static int summe(int[][] f, int z, int s) {
              if (s >= f[z].length) {
                  return 0;
              }
              return f[z][s] + summe(f, z, s + 1);
          }

          public static void main(String[] args) {
              int[][] f = {{4, 1, 6}, {2, 9}};
              System.out.println(summe(f, 0, 0));
              System.out.println(summe(f, 1, 1));
          }
      }
    loesung: |
      11
      9
    fehler:
      - wert: "11\n11"
        meldung: Der zweite Aufruf beginnt in Zeile 1 bei Spalte 1. Er addiert nur die 9.
      - wert: "7\n9"
        meldung: 'Die Summe beginnt bei `s = 0` und läuft bis zum Ende der Zeile. Das sind alle drei Werte 4, 1 und 6.'
hinweise:
  - Der Index `s` wandert mit jedem Aufruf um eins nach rechts, bis er die Länge der Zeile erreicht.
loesung: |
  **Ansatz:** `summe(f, z, s)` addiert alle Werte der Zeile `z` ab Spalte `s`.
  ---
  `summe(f, 0, 0)` ist `4 + 1 + 6 + 0 = 11`. `summe(f, 1, 1)` ist `9 + 0 = 9`, denn die Zeile 1 hat nur die Spalten 0 und 1.
```

```aufgabe
id: aw-mix-vorbedingung
titel: Welche Vorbedingung schützt imBlock?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Die Methode `imBlock(int[][] feld, int zahl, int z0, int s0)` stammt aus
  [15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke). Sie liest die Zellen
  `feld[z][s]` für `z` von `z0` bis `z0 + 2` und `s` von `s0` bis `s0 + 2`. Welche Vorbedingung
  garantiert, dass dabei keine `ArrayIndexOutOfBoundsException` entsteht? `feld` ist 9×9.
  (Wiederholung: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))
teile:
  - typ: auswahl
    optionen:
      - '`0 <= z0 <= 6` und `0 <= s0 <= 6`'
      - '`0 <= z0 <= 8` und `0 <= s0 <= 8`'
      - '`1 <= zahl <= 9`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit `z0 = 8` liest die Methode die Zeilen 8, 9 und 10. Zeilen 9 und 10 gibt es nicht.'
      - wert: 2
        meldung: '`zahl` wird nur verglichen, nie als Index benutzt. Diese Bedingung schützt vor keiner Exception.'
hinweise:
  - Die größte gelesene Zeile ist `z0 + 2`. Sie muss höchstens 8 sein.
  - Eine Vorbedingung beschreibt, was beim Aufruf gelten muss, damit die Methode korrekt arbeiten kann.
loesung: |
  **Ansatz:** Bestimme, welche Indizes die Methode höchstens und mindestens liest.
  ---
  Gelesen wird von `z0` bis `z0 + 2`. Gültig sind 0 bis 8, also braucht es `z0 >= 0` und `z0 + 2 <= 8`, das heißt `z0 <= 6`. Für `s0` gilt dasselbe.
  ---
  Schärfer wäre „`z0` und `s0` sind 0, 3 oder 6“. Das braucht man für das richtige Ergebnis, aber nicht gegen die Exception.
```

```aufgabe
id: aw-mix-stacktrace
titel: Ein Stacktrace voller fuelle
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Programm bricht so ab (gekürzt):

  ```
  Exception in thread "main" java.lang.StackOverflowError
      at Fuellen.fuelle(Fuellen.java:9)
      at Fuellen.fuelle(Fuellen.java:11)
      at Fuellen.fuelle(Fuellen.java:9)
      at Fuellen.fuelle(Fuellen.java:11)
      ...
  ```

  In Zeile 9 steht der Aufruf nach oben, in Zeile 11 der Aufruf nach unten. Was ist die wahrscheinlichste Ursache?
  (Wiederholung: [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen))
teile:
  - typ: auswahl
    optionen:
      - Die Zelle wird erst nach den Selbstaufrufen gefärbt, oder alte und neue Farbe sind gleich. Zwei übereinanderliegende Zellen rufen sich darum immer abwechselnd auf.
      - Die Randprüfung fehlt, und das Programm läuft über den Rand des Arrays hinaus.
      - Das Bild ist zu groß. Mit `-Xss16m` wäre alles in Ordnung.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine fehlende Randprüfung führt zu einer `ArrayIndexOutOfBoundsException`, nicht zu einem `StackOverflowError`.
      - wert: 2
        meldung: Ein großes Bild erzeugt einen tiefen, aber abwechslungsreichen Stapel. Hier wechseln sich aber endlos dieselben zwei Aufrufe ab. Das deutet auf eine fehlende Markierung.
hinweise:
  - Ein Stacktrace listet die offenen Aufrufe, der neueste steht oben. Was bedeutet das ständige Wechseln von Zeile 9 und Zeile 11?
  - Wann ruft „oben“ von unten aus wieder die Zelle auf, aus der man kam, ohne sofort zu enden?
loesung: |
  **Ansatz:** Ein `StackOverflowError` heißt: zu viele offene Aufrufe. Das Muster im Stacktrace verrät, welche.
  ---
  Abwechselnd „oben“ und „unten“ heißt: Eine Zelle ruft die darunter auf, und die ruft wieder die darüber auf. Das passiert, wenn die erste Zelle noch nicht als gefüllt erkennbar ist.
  ---
  Ursache ist also eine wirkungslose Markierung: zu spätes Färben oder `alt == neu`. Mehr Stapel würde das Problem nur hinauszögern.
```

```aufgabe
id: aw-mix-kopie
titel: Ein Bild tief kopieren
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Manche Methoden verändern ihr Bild, etwa `zaehleInseln`. Wer das Original behalten will, übergibt eine Kopie.
  Implementiere `int[][] kopiere(int[][] bild)`. Die Methode liefert ein neues Array mit denselben Werten. Auch
  **jede Zeile** muss ein neues Array sein. Die Zeilen dürfen verschieden lang sein. `clone`, `System.arraycopy` und
  `Arrays.copyOf` sind verboten. (Wiederholung: [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays))

  Vorbedingung: `bild != null`, keine Zeile ist `null`.
teile:
  - typ: code
    vorlage: |
      public class Kopie {
          public static int[][] kopiere(int[][] bild) {
              return bild; // TODO
          }
      }
    musterloesung: |
      public class Kopie {
          public static int[][] kopiere(int[][] bild) {
              int[][] neu = new int[bild.length][];
              for (int z = 0; z < bild.length; z++) {
                  neu[z] = new int[bild[z].length];
                  for (int s = 0; s < bild[z].length; s++) {
                      neu[z][s] = bild[z][s];
                  }
              }
              return neu;
          }
      }
    tests:
      - { aufruf: "kopiere(new int[][]{{1, 2}, {3, 4}})", erwartet: "new int[][]{{1, 2}, {3, 4}}" }
      - { aufruf: "kopiere(new int[][]{{5}, {6, 7, 8}, {}})", erwartet: "new int[][]{{5}, {6, 7, 8}, {}}", beschreibung: "verschieden lange Zeilen" }
      - { vorher: "int[][] b = {{1, 2}, {3, 4}}; int[][] k = kopiere(b); k[1][0] = 99;", aufruf: "b[1][0]", erwartet: "3", beschreibung: "eine Änderung an der Kopie ändert das Original nicht" }
      - { vorher: "int[][] b = {{9}}; int[][] k = kopiere(b);", aufruf: "k[0] == b[0]", erwartet: "false", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 3, meldung: "Die Kopie teilt sich Zeilen mit dem Original. `neu[z] = bild[z]` kopiert nur die Referenz. Lege jede Zeile mit `new int[bild[z].length]` neu an." }
      - { wert: 2, meldung: "Die Zeilen sind verschieden lang. Lege das äußere Array mit `new int[bild.length][]` an und jede Zeile mit ihrer eigenen Länge." }
hinweise:
  - Lege zuerst nur das äußere Array an, `new int[bild.length][]`. Die Zeilen fehlen dann noch.
  - Für jede Zeile `neu[z] = new int[bild[z].length];` und danach die Werte einzeln kopieren.
loesung: |
  **Ansatz:** Eine **tiefe Kopie** braucht ein neues äußeres Array und für jede Zeile ein neues inneres Array.
  ---
  ```java
  int[][] neu = new int[bild.length][];
  for (int z = 0; z < bild.length; z++) {
      neu[z] = new int[bild[z].length];
      for (int s = 0; s < bild[z].length; s++) {
          neu[z][s] = bild[z][s];
      }
  }
  return neu;
  ```
  ---
  Eine **flache Kopie** mit `neu[z] = bild[z]` sähe gleich aus. Beide Arrays teilten sich aber die Zeilen, und eine Änderung an der Kopie träfe auch das Original.
  ---
  Probe mit Test 3: `k[1][0] = 99` ändert nur die neue Zeile. `b[1][0]` bleibt 3.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Aufgabenblatt 5, Quiz und Feedbackgespräch. Die Punkte entsprechen dem Gewicht
auf dem Blatt (2 Punkte für eine große Aufgabe) beziehungsweise im Quiz. Plane die angegebene Zeit ein und arbeite
ohne Hinweise, bevor du einen aufdeckst. Das Format 2026W ist nicht veröffentlicht. Die Aufgaben folgen den Blättern
und Tests der Jahre 2017 bis 2023.

```aufgabe
id: aw-pruef-sudoku4
titel: Ein Mini-Sudoku prüfen
niveau: 3
punkte: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Aufgabenblatt 5 WS 2023, Aufgabe 3 (isValidSudokuSolution), auf 4×4 verkleinert
angabe: |
  (Zeitrichtwert: 20 Minuten) Ein **Mini-Sudoku** hat 4 Zeilen und 4 Spalten mit den Zahlen 1 bis 4. Es ist in vier
  2×2-Blöcke eingeteilt. Implementiere `boolean istGueltig4(int[][] feld)`. Die Methode liefert `true`, wenn in jeder
  Zeile, jeder Spalte und jedem 2×2-Block jede Zahl von 1 bis 4 genau einmal vorkommt.

  Vorbedingungen: `feld` ist 4×4, alle Werte liegen zwischen 1 und 4. Erlaubt sind nur Schleifen, Verzweigungen und
  Arrays, keine Methoden der Klasse `Arrays`.

  Beispiele:

  ```java
  istGueltig4(new int[][]{{1, 2, 3, 4}, {3, 4, 1, 2}, {2, 1, 4, 3}, {4, 3, 2, 1}})   // true
  istGueltig4(new int[][]{{2, 1, 3, 4}, {3, 4, 1, 2}, {2, 1, 4, 3}, {4, 3, 2, 1}})   // false
  ```
teile:
  - typ: code
    vorlage: |
      public class Mini {
          public static boolean istGueltig4(int[][] feld) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Mini {
          public static boolean istGueltig4(int[][] feld) {
              for (int i = 0; i < 4; i++) {
                  boolean[] zeile = new boolean[5];
                  boolean[] spalte = new boolean[5];
                  boolean[] block = new boolean[5];
                  int z0 = i / 2 * 2;
                  int s0 = i % 2 * 2;
                  for (int j = 0; j < 4; j++) {
                      int a = feld[i][j];
                      int b = feld[j][i];
                      int c = feld[z0 + j / 2][s0 + j % 2];
                      if (zeile[a] || spalte[b] || block[c]) {
                          return false;
                      }
                      zeile[a] = true;
                      spalte[b] = true;
                      block[c] = true;
                  }
              }
              return true;
          }
      }
    tests:
      - { aufruf: "istGueltig4(new int[][]{{1, 2, 3, 4}, {3, 4, 1, 2}, {2, 1, 4, 3}, {4, 3, 2, 1}})", erwartet: "true" }
      - { aufruf: "istGueltig4(new int[][]{{2, 1, 3, 4}, {3, 4, 1, 2}, {2, 1, 4, 3}, {4, 3, 2, 1}})", erwartet: "false", beschreibung: "Zeilen gültig, Spalten nicht" }
      - { aufruf: "istGueltig4(new int[][]{{1, 3, 2, 4}, {3, 1, 4, 2}, {2, 4, 1, 3}, {4, 2, 3, 1}})", erwartet: "false", beschreibung: "Zeilen und Spalten gültig, Blöcke nicht" }
      - { aufruf: "istGueltig4(new int[][]{{2, 1, 4, 3}, {4, 3, 2, 1}, {1, 2, 3, 4}, {3, 4, 1, 2}})", erwartet: "true", versteckt: true }
      - { aufruf: "istGueltig4(new int[][]{{1, 1, 1, 1}, {2, 2, 2, 2}, {3, 3, 3, 3}, {4, 4, 4, 4}})", erwartet: "false", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Zeilen und Spalten sind hier gültig, nur die 2×2-Blöcke nicht. Prüfst du die Blöcke? Ihre Startzellen sind (0, 0), (0, 2), (2, 0) und (2, 2)." }
      - { wert: 2, meldung: "Die Zeilen sind gültig, aber Spalte 0 enthält zweimal die 2. Prüfst du auch die Spalten?" }
      - { wert: 1, meldung: "Eine gültige Lösung wird abgelehnt. Beginnt dein Merk-Array für jede Zeile, Spalte und jeden Block neu? Hat es 5 Einträge, damit der Index 4 gültig ist?" }
hinweise:
  - Es ist dieselbe Aufgabe wie beim 9×9-Sudoku. Die Blöcke sind 2×2, ihre Startzellen findest du mit `z / 2 * 2` und `s / 2 * 2`.
  - Ein Merk-Array `new boolean[5]` je Zeile, Spalte und Block genügt. Bei einem vollständig ausgefüllten Feld reicht es, Doppelte zu finden.
loesung: |
  **Ansatz:** Für jede Zeile, jede Spalte und jeden Block mit einem frischen Merk-Array prüfen, ob eine Zahl doppelt vorkommt (Schubfachprinzip).
  ---
  Lesbare Fassung in drei Teilen. Zeilen: `for z` mit neuem `boolean[5]`, innen `for s`. Spalten: dasselbe mit vertauschten Rollen. Blöcke: `z0` und `s0` laufen über 0 und 2, innen zwei Schleifen über je zwei Zellen.
  ---
  Die Musterlösung macht alles in einer Doppelschleife. Im Durchlauf `i` prüft sie Zeile `i`, Spalte `i` und Block `i`. Block `i` hat die Startzelle `(i / 2 * 2, i % 2 * 2)` und die Zellen `(z0 + j / 2, s0 + j % 2)`.
  ---
  Hinweis zum Testen: Wer nur Zeilen und Spalten prüft, besteht die ersten beiden Beispiele, scheitert aber am dritten Test. Darum gehört ein Block-Test in jede eigene `main`.
```

```aufgabe
id: aw-pruef-muster
titel: Einen Bildausschnitt wiederfinden
niveau: 3
punkte: 2
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 3 (blackenSimilarRegions, Abweichungsquadratsumme, nachgebaut und vereinfacht)
angabe: |
  (Zeitrichtwert: 25 Minuten) Ein Muster `muster` (ein kleines Graubild) soll im Bild `bild` gesucht werden. Für eine
  Position `(z, s)` legt man die linke obere Ecke des Musters auf `bild[z][s]`. Dort berechnet man die
  **Abweichungsquadratsumme**: Für jede Zelle `(i, j)` des Musters wird `bild[z + i][s + j] - muster[i][j]` quadriert,
  und alle Quadrate werden addiert. Je kleiner diese Summe, desto ähnlicher ist die Stelle dem Muster.

  Implementiere `int zaehleTreffer(int[][] bild, int[][] muster, int schwelle)`. Die Methode liefert, an wie vielen
  Positionen das Muster **ganz** ins Bild passt und die Abweichungsquadratsumme höchstens `schwelle` ist. Das Bild wird
  nicht verändert.

  Vorbedingungen: `bild` und `muster` sind rechteckig und nicht leer, das Muster ist höchstens so groß wie das Bild,
  `schwelle >= 0`.
teile:
  - typ: code
    vorlage: |
      public class Suche {
          public static int zaehleTreffer(int[][] bild, int[][] muster, int schwelle) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Suche {
          public static int zaehleTreffer(int[][] bild, int[][] muster, int schwelle) {
              int treffer = 0;
              for (int z = 0; z + muster.length <= bild.length; z++) {
                  for (int s = 0; s + muster[0].length <= bild[0].length; s++) {
                      int summe = 0;
                      for (int i = 0; i < muster.length; i++) {
                          for (int j = 0; j < muster[i].length; j++) {
                              int d = bild[z + i][s + j] - muster[i][j];
                              summe += d * d;
                          }
                      }
                      if (summe <= schwelle) {
                          treffer++;
                      }
                  }
              }
              return treffer;
          }
      }
    tests:
      - { aufruf: "zaehleTreffer(new int[][]{{10, 200, 12, 90, 11}, {205, 8, 198, 13, 201}, {9, 95, 11, 199, 10}, {200, 12, 202, 9, 96}}, new int[][]{{10, 200}, {200, 10}}, 100)", erwartet: "3" }
      - { aufruf: "zaehleTreffer(new int[][]{{10, 200, 12, 90, 11}, {205, 8, 198, 13, 201}, {9, 95, 11, 199, 10}, {200, 12, 202, 9, 96}}, new int[][]{{10, 200}, {200, 10}}, 20)", erwartet: "2", beschreibung: "kleinere Schwelle" }
      - { aufruf: "zaehleTreffer(new int[][]{{5, 5}, {5, 5}}, new int[][]{{5, 5}, {5, 5}}, 0)", erwartet: "1", beschreibung: "Muster so groß wie das Bild" }
      - { aufruf: "zaehleTreffer(new int[][]{{1, 2, 3}}, new int[][]{{2}}, 1)", erwartet: "3", beschreibung: "Muster aus einem Pixel" }
      - { aufruf: "zaehleTreffer(new int[][]{{10, 200, 12, 90, 11}, {205, 8, 198, 13, 201}, {9, 95, 11, 199, 10}, {200, 12, 202, 9, 96}}, new int[][]{{10, 200}, {200, 10}}, 0)", erwartet: "0", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Passt das Muster genau einmal hinein, wenn es so groß ist wie das Bild? Die Schleifenbedingung muss `z + muster.length <= bild.length` lauten, mit `<=`." }
      - { wert: 1, meldung: "Vergleiche deine Summe mit der Schwelle. Gezählt wird bei `summe <= schwelle`. Und hast du jede Differenz quadriert, statt nur Beträge zu addieren?" }
hinweise:
  - Zwei äußere Schleifen über alle Positionen, an denen das Muster ganz hineinpasst. Die letzte erlaubte Startzeile ist `bild.length - muster.length`.
  - Zwei innere Schleifen über die Zellen des Musters berechnen die Summe der quadrierten Differenzen.
loesung: |
  **Ansatz:** Das Muster „wandert“ über das Bild wie eine Filtermaske. Nur Positionen, an denen es ganz hineinpasst, werden ausgewertet. An jeder Position wird die Abweichungsquadratsumme berechnet und mit der Schwelle verglichen.
  ---
  ```java
  int treffer = 0;
  for (int z = 0; z + muster.length <= bild.length; z++) {
      for (int s = 0; s + muster[0].length <= bild[0].length; s++) {
          int summe = 0;
          for (int i = 0; i < muster.length; i++) {
              for (int j = 0; j < muster[i].length; j++) {
                  int d = bild[z + i][s + j] - muster[i][j];
                  summe += d * d;
              }
          }
          if (summe <= schwelle) {
              treffer++;
          }
      }
  }
  return treffer;
  ```
  ---
  Die Bedingung `z + muster.length <= bild.length` heißt: Die unterste Musterzeile `z + muster.length - 1` liegt noch im Bild. So braucht es keine Randprüfung im Inneren.
  ---
  Probe mit Test 1: An `(0, 0)` ist die Summe `0 + 0 + 25 + 4 = 29`. An `(1, 3)` ist sie 11, an `(2, 2)` ist sie 7. Alle anderen Positionen liegen weit über 100. Ergebnis 3.
```

```aufgabe
id: aw-pruef-ki-flut
titel: KI-Code für Flood-Fill reparieren
niveau: 3
punkte: 2
lernziel: 7
kompetenz: begruenden
quelle: nach Aufgabenblatt 3 WS 2023, Aufgabe 5 (fehlerhaften ChatGPT-Code reparieren), angewendet auf floodFill von Blatt 5
angabe: |
  (Zeitrichtwert: 15 Minuten) Ein KI-Werkzeug hat für Blatt 5 die Methode in der Vorlage erzeugt. Wie bei einem
  Mausklick heißen die Koordinaten `x` (Spalte, nach rechts) und `y` (Zeile, nach unten). Die Methode soll alle mit `(x, y)`
  zusammenhängenden Pixel (Vierer-Nachbarschaft), deren Grauwert um höchstens `tol` von `gVal` abweicht, auf -1 setzen.

  Der Code kompiliert, enthält aber **zwei** Fehler. Finde und repariere sie. Ändere den Methodenkopf nicht.

  Vorbedingungen: `img` ist rechteckig und nicht leer, alle Werte liegen zwischen 0 und 255, `tol >= 0`.
teile:
  - typ: code
    vorlage: |
      public class KiFlut {
          public static void floodFill(int[][] img, int x, int y, int gVal, int tol) {
              if (x < 0 || x >= img.length || y < 0 || y >= img[0].length) {
                  return;
              }
              if (Math.abs(img[x][y] - gVal) > tol) {
                  return;
              }
              img[x][y] = -1;
              floodFill(img, x + 1, y, gVal, tol);
              floodFill(img, x - 1, y, gVal, tol);
              floodFill(img, x, y + 1, gVal, tol);
              floodFill(img, x, y - 1, gVal, tol);
          }
      }
    musterloesung: |
      public class KiFlut {
          public static void floodFill(int[][] img, int x, int y, int gVal, int tol) {
              if (y < 0 || y >= img.length || x < 0 || x >= img[y].length) {
                  return;
              }
              if (img[y][x] == -1) {
                  return;
              }
              if (Math.abs(img[y][x] - gVal) > tol) {
                  return;
              }
              img[y][x] = -1;
              floodFill(img, x + 1, y, gVal, tol);
              floodFill(img, x - 1, y, gVal, tol);
              floodFill(img, x, y + 1, gVal, tol);
              floodFill(img, x, y - 1, gVal, tol);
          }
      }
    tests:
      - { vorher: "int[][] b = {{10, 12, 50}, {11, 90, 13}};", aufruf: "floodFill(b, 0, 0, 10, 5)", ergebnis: "b", erwartet: "new int[][]{{-1, -1, 50}, {-1, 90, 13}}" }
      - { vorher: "int[][] b = {{10, 12, 50}, {11, 90, 13}};", aufruf: "floodFill(b, 2, 0, 50, 5)", ergebnis: "b", erwartet: "new int[][]{{10, 12, -1}, {11, 90, 13}}", beschreibung: "Klick in Spalte 2, Zeile 0" }
      - { vorher: "int[][] b = {{10, 12, 50}, {11, 90, 13}};", aufruf: "floodFill(b, 2, 1, 13, 2)", ergebnis: "b", erwartet: "new int[][]{{10, 12, 50}, {11, 90, -1}}", beschreibung: "Klick in Spalte 2, Zeile 1" }
      - { vorher: "int[][] b = {{7, 9, 30, 8}, {6, 40, 7, 9}, {8, 8, 9, 50}};", aufruf: "floodFill(b, 3, 2, 50, 3)", ergebnis: "b", erwartet: "new int[][]{{7, 9, 30, 8}, {6, 40, 7, 9}, {8, 8, 9, -1}}", versteckt: true }
      - { vorher: "int[][] b = {{3, 5}};", aufruf: "floodFill(b, 0, 0, 3, 10)", ergebnis: "b", erwartet: "new int[][]{{-1, -1}}", beschreibung: "dunkler Startwert" }
    regeln: { keineSchleifenIn: [floodFill], rekursiv: [floodFill], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Der Klick in Spalte 2 bewirkt nichts. `x` ist die Spalte, also der **zweite** Index. Der Zugriff muss `img[y][x]` lauten, und die Randprüfung vergleicht `y` mit `img.length` und `x` mit `img[y].length`." }
      - { wert: 5, meldung: "Bei dunklem Startwert liegt die Markierung -1 im Toleranzbereich, und zwei Pixel rufen sich endlos auf. Es fehlt ein eigener Basisfall `img[y][x] == -1`." }
hinweise:
  - Teste in Gedanken einen Klick in der rechten Spalte eines Bilds, das breiter als hoch ist. Was prüft `x >= img.length`?
  - Teste dann `{{3, 5}}` mit `gVal = 3` und `tol = 10`. Was passiert, wenn der Rückruf auf einen schon markierten Pixel trifft?
loesung: |
  **Ansatz:** Zwei Fehlerklassen aus diesem Kapitel prüfen. Erstens, ob Zeile und Spalte vertauscht sind. Zweitens, ob die Markierung sicher erkannt wird.
  ---
  **Fehler 1:** `img[x][y]` behandelt die Spalte `x` als Zeile. Bei einem breiten Bild gilt `x = 2 >= img.length = 2`, und der Klick wird ignoriert. Richtig: `img[y][x]` überall und die Randprüfung `y < img.length` und `x < img[y].length`.
  ---
  **Fehler 2:** Es fehlt die Prüfung auf -1. Für `gVal = 3` und `tol = 10` gilt `|-1 - 3| = 4 <= 10`, ein markierter Pixel gilt wieder als passend. Die Folge ist ein `StackOverflowError`. Richtig: `if (img[y][x] == -1) return;` vor der Toleranzprüfung.
  ---
  Im Feedbackgespräch erklärst du beide Fehler mit einem konkreten Gegenbeispiel. Das ist überzeugender als „die KI hat x und y vertauscht“.
```

```aufgabe
id: aw-pruef-quiz-rf
titel: Vier Aussagen zu einer Methode auf 2D-Arrays
niveau: 3
punkte: 2
lernziel: 0
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 WS 2021 (Richtig-Falsch-Aussagen zu gegebenem Code), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist

  ```java
  public static int f(int[][] a) {
      int c = 0;
      for (int i = 0; i < a.length; i++) {
          for (int j = 0; j < a[i].length; j++) {
              if (i + 1 < a.length && j < a[i + 1].length && a[i][j] == a[i + 1][j]) {
                  c++;
              }
          }
      }
      return c;
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f(new int[][]{{1, 2}, {1}})` wirft eine `ArrayIndexOutOfBoundsException`.'
        richtig: false
        erklaerung: 'Für `i = 0, j = 1` ist `j < a[1].length`, also `1 < 1`, falsch. Wegen `&&` wird `a[1][1]` nie gelesen. Ergebnis 1.'
      - text: '`f(new int[][]{{3}, {3}, {3}})` liefert 2.'
        richtig: true
        erklaerung: Verglichen werden Zeile 0 mit 1 und Zeile 1 mit 2. Beide Paare sind gleich.
      - text: '`f(new int[0][])` liefert 0.'
        richtig: true
        erklaerung: Die äußere Schleife läuft kein einziges Mal. `c` bleibt 0.
      - text: '`f(new int[][]{{5, 5}, {5, 5}})` liefert 4.'
        richtig: false
        erklaerung: 'Gezählt werden nur Paare **übereinander**: `(0, 0)` mit `(1, 0)` und `(0, 1)` mit `(1, 1)`. Ergebnis 2.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Prüfe Aussage 1 mit der Kurzschlussauswertung. Wird `a[1][1]` überhaupt gelesen, wenn `j < a[1].length` schon falsch ist?'
      - wert: [f, r, r, r]
        meldung: '`f` vergleicht jede Zelle nur mit der Zelle **darunter**, nicht mit allen Nachbarn. Wie viele solche Paare hat ein 2×2-Feld?'
hinweise:
  - Was zählt `f` in Worten? Welche zwei Zellen werden in der Bedingung verglichen?
  - Prüfe bei jeder Aussage, welche Teile der `&&`-Kette wirklich ausgewertet werden.
loesung: |
  **Ansatz:** `f` zählt Paare gleicher Werte, die direkt übereinander stehen. Die ersten beiden Teile der Bedingung sind eine Randprüfung für die Zelle darunter.
  ---
  Aussage 1 ist falsch, die Randprüfung schützt den Zugriff, und das Ergebnis ist 1. Aussage 2 ist richtig, es gibt zwei gleiche Paare.
  ---
  Aussage 3 ist richtig, bei 0 Zeilen läuft keine Schleife. Aussage 4 ist falsch, das 2×2-Feld hat nur zwei senkrechte Paare.
```

```aufgabe
id: aw-pruef-groesste-insel
titel: Die größte Insel
niveau: 3
punkte: 2
lernziel: 5
kompetenz: anwenden
quelle: nach Aufgabenblatt 5 WS 2023, Aufgabe 4 (Flood-Fill), kombiniert mit Inseln zählen
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere `int groessteInsel(char[][] karte)`. `karte` enthält Land `'#'` und Wasser
  `'.'`. Die Methode liefert die Anzahl der Zellen der **größten** Insel (zusammenhängende Landfläche in der
  Vierer-Nachbarschaft). Gibt es kein Land, liefert sie 0. Die Karte darf verändert werden, und du darfst eine
  rekursive Hilfsmethode schreiben.

  Vorbedingung: `karte != null`, keine Zeile ist `null`.

  | Karte | Ergebnis |
  |---|---|
  | `{"#..##", "##..#", "..#.#", "....."}` | 4 |
  | `{"#.##", "#..#", "####"}` | 9 |
teile:
  - typ: code
    vorlage: |
      public class Groesste {
          public static int groessteInsel(char[][] karte) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Groesste {
          public static int groesse(char[][] karte, int z, int s) {
              if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
                  return 0;
              }
              if (karte[z][s] != '#') {
                  return 0;
              }
              karte[z][s] = '.';
              return 1 + groesse(karte, z - 1, s) + groesse(karte, z + 1, s)
                      + groesse(karte, z, s - 1) + groesse(karte, z, s + 1);
          }

          public static int groessteInsel(char[][] karte) {
              int max = 0;
              for (int z = 0; z < karte.length; z++) {
                  for (int s = 0; s < karte[z].length; s++) {
                      if (karte[z][s] == '#') {
                          int g = groesse(karte, z, s);
                          if (g > max) {
                              max = g;
                          }
                      }
                  }
              }
              return max;
          }
      }
    tests:
      - { aufruf: "groessteInsel(new char[][]{{'#', '.', '.', '#', '#'}, {'#', '#', '.', '.', '#'}, {'.', '.', '#', '.', '#'}, {'.', '.', '.', '.', '.'}})", erwartet: "4" }
      - { aufruf: "groessteInsel(new char[][]{{'#', '.', '#', '#'}, {'#', '.', '.', '#'}, {'#', '#', '#', '#'}})", erwartet: "9", beschreibung: "eine einzige, gewundene Insel" }
      - { aufruf: "groessteInsel(new char[][]{{'.', '.', '.', '.'}})", erwartet: "0", beschreibung: "kein Land" }
      - { aufruf: "groessteInsel(new char[][]{{'#', '.', '#'}, {'.', '.', '.'}, {'#', '#', '.'}})", erwartet: "2" }
      - { aufruf: "groessteInsel(new char[][]{{'.', '#', '.', '.', '#'}, {'#', '#', '.', '#', '#'}, {'.', '.', '.', '#', '.'}, {'#', '.', '.', '.', '.'}})", erwartet: "4", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Liefert deine Methode die Anzahl der Inseln statt der Größe der größten? Gesucht ist die Zellenzahl der größten Insel." }
      - { wert: 2, meldung: "Die Insel windet sich um das Wasser herum. Geht deine Größenberechnung in alle vier Richtungen, und markierst du jede Zelle, bevor du weitergehst?" }
hinweise:
  - Schreib eine rekursive Hilfsmethode, die die Größe einer Insel ab `(z, s)` liefert und ihre Zellen dabei zu Wasser macht.
  - In der Hauptmethode durchläufst du alle Zellen. Bei jedem `'#'` berechnest du die Größe und merkst dir das Maximum.
loesung: |
  **Ansatz:** Inseln zählen und Fläche berechnen kombinieren. Jede Insel wird beim ersten Treffer vermessen und dabei versenkt. Über alle Inseln merkt man sich das Maximum.
  ---
  Die Hilfsmethode ist ein Flood-Fill mit Zähler:
  ```java
  public static int groesse(char[][] karte, int z, int s) {
      if (z < 0 || z >= karte.length || s < 0 || s >= karte[z].length) {
          return 0;
      }
      if (karte[z][s] != '#') {
          return 0;
      }
      karte[z][s] = '.';
      return 1 + groesse(karte, z - 1, s) + groesse(karte, z + 1, s)
              + groesse(karte, z, s - 1) + groesse(karte, z, s + 1);
  }
  ```
  ---
  Die Hauptmethode:
  ```java
  int max = 0;
  for (int z = 0; z < karte.length; z++) {
      for (int s = 0; s < karte[z].length; s++) {
          if (karte[z][s] == '#') {
              int g = groesse(karte, z, s);
              if (g > max) {
                  max = g;
              }
          }
      }
  }
  return max;
  ```
  ---
  Probe mit der ersten Karte: Die Inseln haben der Reihe nach die Größen 3, 4 und 1. Das Maximum ist 4. Ohne Land bleibt `max` bei 0.
```

```aufgabe
id: aw-pruef-faltung
titel: Faltung mit beliebiger Maske
niveau: 3
punkte: 2
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 5 WS 2021, Aufgabe 2 (applyFilter, mit int statt double nachgebaut)
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere `int[][] falte(int[][] bild, int[][] maske)`. Die Maske hat eine
  **ungerade** Zahl von Zeilen und Spalten, zum Beispiel 3×3, 1×3 oder 3×1. Ihre Mitte ist die Zelle
  `(maske.length / 2, maske[0].length / 2)`. Das Ergebnis ist ein neues Bild gleicher Größe. Für jeden Pixel liegt die
  Mitte der Maske auf ihm, und der neue Wert ist die Summe der Produkte aus Gewicht und Pixel darunter. Pixel außerhalb
  des Bilds werden weggelassen.

  Vorbedingungen: `bild` ist rechteckig und nicht leer, `maske` ist rechteckig mit ungerader Zeilen- und Spaltenzahl.

  Beispiel: Mit der Maske `{{0, 0, 1}}` wird aus `{{1, 2, 3}, {4, 5, 6}}` das Bild `{{2, 3, 0}, {5, 6, 0}}`. Jeder Pixel
  bekommt den Wert seines rechten Nachbarn.
teile:
  - typ: code
    vorlage: |
      public class Faltung {
          public static int[][] falte(int[][] bild, int[][] maske) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Faltung {
          public static int[][] falte(int[][] bild, int[][] maske) {
              int mz = maske.length / 2;
              int ms = maske[0].length / 2;
              int[][] erg = new int[bild.length][bild[0].length];
              for (int z = 0; z < bild.length; z++) {
                  for (int s = 0; s < bild[0].length; s++) {
                      int summe = 0;
                      for (int i = 0; i < maske.length; i++) {
                          for (int j = 0; j < maske[i].length; j++) {
                              int bz = z + i - mz;
                              int bs = s + j - ms;
                              if (bz >= 0 && bz < bild.length && bs >= 0 && bs < bild[bz].length) {
                                  summe += maske[i][j] * bild[bz][bs];
                              }
                          }
                      }
                      erg[z][s] = summe;
                  }
              }
              return erg;
          }
      }
    tests:
      - { aufruf: "falte(new int[][]{{1, 2, 3}, {4, 5, 6}}, new int[][]{{0, 0, 1}})", erwartet: "new int[][]{{2, 3, 0}, {5, 6, 0}}", beschreibung: "1×3-Maske" }
      - { aufruf: "falte(new int[][]{{1, 2, 3}, {4, 5, 6}}, new int[][]{{1}, {0}, {0}})", erwartet: "new int[][]{{0, 0, 0}, {1, 2, 3}}", beschreibung: "3×1-Maske" }
      - { aufruf: "falte(new int[][]{{1, 2, 5, 9}, {2, 3, 6, 8}, {1, 2, 7, 9}}, new int[][]{{1, 0, -1}, {2, 0, -2}, {1, 0, -1}})", erwartet: "new int[][]{{-7, -12, -19, 16}, {-10, -18, -24, 24}, {-7, -16, -19, 20}}", beschreibung: "3×3-Kantenmaske" }
      - { vorher: "int[][] b = {{1, 1}, {1, 1}};", aufruf: "falte(b, new int[][]{{1, 1, 1}, {1, 1, 1}, {1, 1, 1}})", ergebnis: "b", erwartet: "new int[][]{{1, 1}, {1, 1}}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "falte(new int[][]{{2, 0, 1}, {3, 1, 0}, {0, 4, 2}, {1, 1, 1}}, new int[][]{{1, 1, 1}, {1, 1, 1}, {1, 1, 1}})", erwartet: "new int[][]{{6, 7, 2}, {10, 13, 8}, {10, 13, 9}, {6, 9, 8}}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Bei einer 1×3-Maske ist die Mitte `(0, 1)`. Verschiebst du die Indizes um `maske.length / 2` und `maske[0].length / 2` statt fest um 1?" }
      - { wert: 3, meldung: "Vergleiche die Ränder. Lässt du Pixel außerhalb des Bilds weg, statt das Programm abstürzen zu lassen? Und liegt `maske[1][1]` genau über `bild[z][s]`?" }
      - { wert: 4, meldung: "Das Original wurde verändert. Schreibe die Ergebnisse in ein neues Array." }
hinweise:
  - Berechne zuerst die Verschiebung der Mitte, `mz = maske.length / 2` und `ms = maske[0].length / 2`. Das Gewicht `maske[i][j]` liegt dann über `bild[z + i - mz][s + j - ms]`.
  - Vier Schleifen. Außen über alle Pixel, innen über alle Gewichte, mit Randprüfung vor jedem Zugriff auf `bild`.
loesung: |
  **Ansatz:** Wie die 3×3-Faltung aus [15.3 Bilder als Zahlenfelder: Filter und Faltung](/lernen/ep1/arrays-anwendungen/bilder-als-zahlenfelder-filter-und-faltung), nur mit einer Verschiebung, die aus der Maskengröße berechnet wird.
  ---
  ```java
  int mz = maske.length / 2;
  int ms = maske[0].length / 2;
  int[][] erg = new int[bild.length][bild[0].length];
  for (int z = 0; z < bild.length; z++) {
      for (int s = 0; s < bild[0].length; s++) {
          int summe = 0;
          for (int i = 0; i < maske.length; i++) {
              for (int j = 0; j < maske[i].length; j++) {
                  int bz = z + i - mz;
                  int bs = s + j - ms;
                  if (bz >= 0 && bz < bild.length && bs >= 0 && bs < bild[bz].length) {
                      summe += maske[i][j] * bild[bz][bs];
                  }
              }
          }
          erg[z][s] = summe;
      }
  }
  return erg;
  ```
  ---
  Für eine 1×3-Maske ist `mz = 0` und `ms = 1`. Das Gewicht `maske[0][2]` liegt also über `bild[z][s + 1]`, dem rechten Nachbarn. Darum verschiebt `{{0, 0, 1}}` das Bild nach links.
  ---
  Probe mit Test 3: Bei `(1, 1)` ergibt sich `-18`, wie in der Aufgabe „Eine Kantenmaske anwenden“.
```

```aufgabe
id: aw-pruef-feedback
titel: Zusatzfragen im Feedbackgespräch zu Flood-Fill
niveau: 3
punkte: 3
lernziel: 4
kompetenz: begruenden
quelle: Zusatzfragen im Stil der Aufgabenblätter 3 und 4 (WS 2023), Inhalt neu
angabe: |
  (Zeitrichtwert: 10 Minuten, je Frage 1 Punkt) Beantworte jede Frage in zwei bis vier Sätzen, so wie du sie im
  Feedbackgespräch sagen würdest.

  **a)** Warum endet dein `floodFill`, obwohl `z` und `s` bei den Selbstaufrufen mal größer, mal kleiner werden?

  **b)** Warum wurde im Projekt die Stapelgröße mit `-Xss16m` erhöht? Ist der Algorithmus ohne diese Option falsch?

  **c)** Was würde passieren, wenn du den Pixel erst **nach** den vier Selbstaufrufen auf -1 setzt?
teile:
  - typ: text
    label: a)
    muster: |
      Jeder Aufruf, der nicht sofort in einem Basisfall endet, markiert genau einen Pixel mit -1. Ein markierter Pixel
      wird nie wieder bearbeitet, weil der Basisfall „schon markiert“ greift. Es gibt nur endlich viele Pixel, also nur
      endlich viele markierende Aufrufe, und jeder löst nur vier weitere aus. Darum endet die Rekursion.
  - typ: text
    label: b)
    muster: |
      Bei einer großen zusammenhängenden Fläche können sehr viele Aufrufe gleichzeitig offen sein, bei einem Bild mit
      vielen tausend Pixeln entsprechend viele. Jeder offene Aufruf belegt Platz auf dem Aufrufstapel. Der Standardstapel
      reicht dafür nicht, und es käme zu einem StackOverflowError. Der Algorithmus ist trotzdem richtig, er braucht nur
      mehr Stapelspeicher.
  - typ: text
    label: c)
    muster: |
      Dann wäre der Pixel während der Selbstaufrufe noch nicht als bearbeitet erkennbar. Der Nachbar rechts würde nach
      links zurückrufen, dieser Aufruf fände einen passenden, unmarkierten Pixel und riefe wieder nach rechts. Die beiden
      Pixel würden sich endlos gegenseitig aufrufen, bis ein StackOverflowError kommt.
hinweise:
  - Bei a) geht es um den Fortschritt. Was wird mit jedem färbenden Aufruf weniger?
  - Bei b) und c) unterscheide zwischen „zu tief, aber endlich“ und „endlos“.
loesung: |
  **Ansatz:** Alle drei Fragen drehen sich um Markierung und Aufrufstapel.
  ---
  a) Der Fortschritt ist die Zahl der noch unmarkierten passenden Pixel. Sie sinkt mit jedem markierenden Aufruf um 1 und kann nicht unter 0 fallen.
  ---
  b) Die Rekursion ist endlich, aber sehr tief. Die Option `-Xss16m` vergrößert nur den Platz für offene Aufrufe. Am Algorithmus ändert sie nichts.
  ---
  c) Ohne rechtzeitige Markierung rufen sich zwei Nachbarn endlos auf. Diese Rekursion ist wirklich unendlich, kein größerer Stapel hilft.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Vor jedem Zugriff auf einen Nachbarn prüft man, ob er im Raster liegt, und zwar mit der
  Zeile zuerst. Die Zeile ist immer der erste Index, auch wenn eine Aufgabe von x und y spricht. (2) Ein Filter, der
  Nachbarn liest, schreibt in ein neues Array. Nur Punktoperationen dürfen direkt ins Bild schreiben. (3) Flood-Fill
  hat drei Basisfälle (außerhalb, schon markiert, passt nicht) und markiert eine Zelle, bevor er die vier Nachbarn
  aufruft. Ebenso gute Antworten sind der Blockstart `z / 3 * 3` beim Sudoku oder das Merk-Array.
```

:::zusammenfassung
1. **Raster:** Die Zelle in Zeile `z` und Spalte `s` ist `feld[z][s]`. Die Zeile wächst nach unten, die Spalte nach rechts. Heißen die Koordinaten `x` und `y`, ist `x` die Spalte und `y` die Zeile, also `bild[y][x]`.
2. **Nachbarn und Rand:** Die Vierer-Nachbarschaft sind oben, unten, links und rechts, die Achter-Nachbarschaft zusätzlich die vier schrägen Zellen. Vor jedem Zugriff prüft man `z >= 0 && z < feld.length && s >= 0 && s < feld[z].length`. Die Kurzschlussauswertung schützt den Zugriff rechts davon.
3. **Sudoku:** Prüfmethoden für Zeile, Spalte und Block suchen eine Zahl und liefern beim ersten Treffer `true`. Der Block von `(z, s)` beginnt bei `(z / 3 * 3, s / 3 * 3)` und reicht drei Zeilen und Spalten weit.
4. **Gültige Lösung:** Bei einem vollständig ausgefüllten Feld genügt es, Doppelte zu finden. Ein Merk-Array `boolean[10]` mit der Zahl als Index beginnt für jede Zeile, Spalte und jeden Block neu. Erst die Blockprüfung findet vertauschte Spalten aus verschiedenen Blöcken.
5. **Bildfilter:** Ein Graubild speichert Helligkeiten von 0 bis 255. Punktoperationen (Invertieren, Schwellwert) dürfen direkt ins Bild schreiben. Nachbarschaftsoperationen (Mittelwert, Faltung) schreiben in ein neues Array. Am Rand mittelt man nur über die vorhandenen Pixel. Bei einer Faltung liegt `maske[i][j]` über `bild[z + i - mz][s + j - ms]`.
6. **Flood-Fill:** Drei Basisfälle (außerhalb, schon markiert, passt nicht), dann markieren, dann die vier Nachbarn. Die Markierung vor den Selbstaufrufen sorgt dafür, dass die Rekursion endet. Der Fortschritt ist die schrumpfende Zahl unmarkierter Zellen.
7. **Schwellwert und Zählen:** Mit Toleranz gehört ein Pixel dazu, wenn `Math.abs(w - gVal) <= tol`. Verglichen wird immer mit dem Startwert. Die Markierung -1 braucht einen eigenen Basisfall. Flächen zählt man mit einer Doppelschleife, die jede neu gefundene Fläche zählt und sofort ganz markiert.
8. **Simulationen:** Das sichere Feuer ist Flood-Fill auf Wiese. Der Fluss geht nach unten und teilt sich an Felsen, die dabei sofort markiert werden. Mit Zufall bleibt die Struktur gleich, nur einzelne Aufrufe fallen weg.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Zugriff auf einen Nachbarn ohne Randprüfung**, was eine `ArrayIndexOutOfBoundsException` am Rand auslöst. Training: „Welche Bedingung lässt den Zugriff aus dem Feld laufen?“ in [15.1 Nachbarn im Raster: Richtungen und Randprüfung](/lernen/ep1/arrays-anwendungen/nachbarn-im-raster-richtungen-und-randpruefung).
2. **Randprüfung in falscher Reihenfolge** (`feld[z].length` vor `z >= 0`). Training: „Die Randprüfung ergänzen“ in [15.1 Nachbarn im Raster: Richtungen und Randprüfung](/lernen/ep1/arrays-anwendungen/nachbarn-im-raster-richtungen-und-randpruefung).
3. **Zeile und Spalte vertauscht** (`bild[x][y]` statt `bild[y][x]`). Training: „Die Landschaft zeichnen“ in [15.6 Feuer und Fluss: Simulationen auf der Landkarte](/lernen/ep1/arrays-anwendungen/feuer-und-fluss-simulationen-auf-der-landkarte) und „KI-Code für Flood-Fill reparieren“ in den [15.8 Prüfungsaufgaben](/lernen/ep1/arrays-anwendungen/pruefungsaufgaben).
4. **Blockstart mit `z % 3` statt `z / 3 * 3`** oder eine Blockschleife bis `3` statt bis `z0 + 3`. Training: „Startzellen von Blöcken berechnen“ und „Die Blockprüfung schreiben“ in [15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke).
5. **Merk-Array nur einmal für alle Zeilen angelegt.** Training: „Warum ist jede Lösung ungültig?“ in [15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke).
6. **Blockprüfung vergessen**, sodass vertauschte Spalten nicht auffallen. Training: „Eine vollständige Lösung prüfen“ in [15.2 Der Sudoku-Prüfer: Zeilen, Spalten und Blöcke](/lernen/ep1/arrays-anwendungen/der-sudoku-pruefer-zeilen-spalten-und-bloecke) und „Ein Mini-Sudoku prüfen“ in den [15.8 Prüfungsaufgaben](/lernen/ep1/arrays-anwendungen/pruefungsaufgaben).
7. **Filter schreibt ins eigene Bild** und liest dann schon gefilterte Werte. Training: „Glätten im selben Array und in einem neuen“ in [15.3 Bilder als Zahlenfelder: Filter und Faltung](/lernen/ep1/arrays-anwendungen/bilder-als-zahlenfelder-filter-und-faltung).
8. **Am Rand durch 9 geteilt** oder ohne Ganzzahldivision gerechnet. Training: „Mittelwerte von Hand“ in [15.3 Bilder als Zahlenfelder: Filter und Faltung](/lernen/ep1/arrays-anwendungen/bilder-als-zahlenfelder-filter-und-faltung).
9. **Maske um eine Zeile verrutscht** (`z + i` statt `z + i - 1`). Training: „Eine verrutschte Maske“ in [15.3 Bilder als Zahlenfelder: Filter und Faltung](/lernen/ep1/arrays-anwendungen/bilder-als-zahlenfelder-filter-und-faltung).
10. **Erst aufrufen, dann färben**, was in einem `StackOverflowError` endet. Training: „Zwei Fehler in einem Flood-Fill“ in [15.4 Flood-Fill: zusammenhängende Flächen rekursiv füllen](/lernen/ep1/arrays-anwendungen/flood-fill-zusammenhaengende-flaechen-rekursiv-fuellen) und „Zwei Felsen nebeneinander“ in [15.6 Feuer und Fluss: Simulationen auf der Landkarte](/lernen/ep1/arrays-anwendungen/feuer-und-fluss-simulationen-auf-der-landkarte).
11. **Schräge Nachbarn mitgefüllt**, obwohl nur die Vierer-Nachbarschaft gilt. Training: „Was wird gefüllt?“ in [15.4 Flood-Fill: zusammenhängende Flächen rekursiv füllen](/lernen/ep1/arrays-anwendungen/flood-fill-zusammenhaengende-flaechen-rekursiv-fuellen) und „Inseln auf einer anderen Karte“ in [15.5 Flood-Fill mit Schwellwert und Inseln zählen](/lernen/ep1/arrays-anwendungen/flood-fill-mit-schwellwert-und-inseln-zaehlen).
12. **Markierung -1 ohne eigenen Basisfall** oder eine Markierung, die ein echter Grauwert sein kann. Training: „Schwarze Pixel bleiben übrig“ und „Flood-Fill mit Schwellwert schreiben“ in [15.5 Flood-Fill mit Schwellwert und Inseln zählen](/lernen/ep1/arrays-anwendungen/flood-fill-mit-schwellwert-und-inseln-zaehlen).
13. **Mit dem Nachbarn statt mit dem Startwert verglichen.** Training: „Startwert oder Vorgänger?“ in [15.5 Flood-Fill mit Schwellwert und Inseln zählen](/lernen/ep1/arrays-anwendungen/flood-fill-mit-schwellwert-und-inseln-zaehlen).
14. **Toleranz aus Prozent falsch gerechnet** (`prozent / 100 * 255` ergibt 0). Training: „Von Prozent zu Grauwerten“ in [15.5 Flood-Fill mit Schwellwert und Inseln zählen](/lernen/ep1/arrays-anwendungen/flood-fill-mit-schwellwert-und-inseln-zaehlen).
15. **Feuer hält nur an Fels an** und läuft endlos über brennende Felder. Training: „Die Feuer-Methode ergänzen“ in [15.6 Feuer und Fluss: Simulationen auf der Landkarte](/lernen/ep1/arrays-anwendungen/feuer-und-fluss-simulationen-auf-der-landkarte).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Nachbarn einer Zelle bestimmen und mit Randprüfung durchlaufen.
2. Beim Sudoku Zeile, Spalte und Block prüfen und den Blockstart berechnen.
3. Eine vollständige Sudoku-Lösung auf Gültigkeit prüfen.
4. Bildfilter mit neuem Ergebnis-Array und richtiger Randbehandlung anwenden.
5. Flood-Fill rekursiv schreiben und seinen Ablauf verfolgen.
6. Flood-Fill mit Schwellwert anwenden und Flächen zählen oder vermessen.
7. Feuer und Fluss auf einer Karte simulieren und das Ergebnis vorhersagen.
8. Typische Fehler in 2D-Anwendungen finden und reparieren.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber zu den Aufgabenblättern ein **Feedbackgespräch**.
Dort erklärst du deinen Code und zeigst, dass du deine Abgabe verstehst. Zu Blatt 5 passen zum Beispiel Fragen nach
dem Block einer Sudoku-Zelle, nach dem Ende der Rekursion bei Flood-Fill oder Varianten wie „Wie wäre es mit acht
Nachbarn?“. Welche Fragen wirklich kommen, entscheidet die Tutorin oder der Tutor. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort
auf und vergleiche sie mit den Kernpunkten.

```karten
- id: aw-karte-zeile-spalte
  frage: In welcher Reihenfolge stehen Zeile und Spalte in `bild[...][...]`, und wie hängt das mit x und y zusammen?
  antwort: |
    Der erste Index ist immer die Zeile, der zweite die Spalte. Die Zeile wächst nach unten, die Spalte nach rechts.
    Spricht eine Aufgabe von Mauskoordinaten x und y, dann ist x die Spalte und y die Zeile. Der Zugriff lautet also
    `bild[y][x]`. Bei einem quadratischen Bild fällt ein Vertauschen oft nicht auf, bei einem rechteckigen kommt es zu
    falschen Werten oder einer ArrayIndexOutOfBoundsException.
  kernpunkte:
    - erster Index Zeile, zweiter Spalte
    - x ist Spalte, y ist Zeile
    - Vertauschen fällt bei rechteckigen Bildern auf
- id: aw-karte-randpruefung
  frage: Wie prüfst du, ob ein Nachbar im Feld liegt, und warum ist die Reihenfolge der Bedingungen wichtig?
  antwort: |
    Ich prüfe `z >= 0 && z < feld.length && s >= 0 && s < feld[z].length`. Die Bedingung `s < feld[z].length` liest
    die Zeile `z`. Das ist nur erlaubt, wenn `z` schon als gültig geprüft ist. Weil `&&` von links nach rechts
    auswertet und beim ersten falschen Teil aufhört, schützt die Zeilenprüfung links den Zugriff rechts. Stünde
    `feld[z].length` vorne, gäbe es für `z = -1` eine Exception.
  kernpunkte:
    - vier Bedingungen
    - Zeile vor feld[z].length prüfen
    - Kurzschlussauswertung schützt den Zugriff
- id: aw-karte-nachbarschaft
  frage: Was ist der Unterschied zwischen Vierer- und Achter-Nachbarschaft? Nenne ein Beispiel, bei dem er das Ergebnis ändert.
  antwort: |
    Die Vierer-Nachbarschaft sind die Zellen oben, unten, links und rechts. Die Achter-Nachbarschaft enthält zusätzlich
    die vier schrägen Zellen. Bei einem Muster wie einem Schachbrett ändert das alles: In der Vierer-Nachbarschaft ist
    jedes schwarze Feld eine eigene Fläche, in der Achter-Nachbarschaft hängen alle schwarzen Felder zusammen. Auch die
    Minenzahl bei Minesweeper zählt die Achter-Nachbarschaft.
  kernpunkte:
    - vier Kantennachbarn
    - acht inklusive Ecken
    - Schachbrett als Gegenbeispiel
- id: aw-karte-blockstart
  frage: Wie findest du zur Sudoku-Zelle `(z, s)` die linke obere Zelle ihres 3×3-Blocks, und warum funktioniert die Formel?
  antwort: |
    Die Startzelle ist `(z / 3 * 3, s / 3 * 3)`. Wegen der Ganzzahldivision ist `z / 3` die Nummer des Blocks von oben,
    also 0, 1 oder 2. Mal 3 genommen ergibt das die erste Zeile dieses Blocks, also 0, 3 oder 6. Für `z = 7` ist das
    `7 / 3 * 3 = 2 * 3 = 6`. Die Formel `z % 3` wäre falsch, sie liefert die Position innerhalb des Blocks.
  kernpunkte:
    - z / 3 ist die Blocknummer
    - mal 3 ergibt die Startzeile
    - z % 3 ist die Position im Block
- id: aw-karte-merkarray
  frage: Wie prüfst du mit einem Merk-Array, ob in einer Sudoku-Zeile eine Zahl doppelt vorkommt, und warum hat es 10 Einträge?
  antwort: |
    Ich lege für die Zeile `boolean[] gesehen = new boolean[10]` an. Für jede Zelle lese ich den Wert `w`. Ist
    `gesehen[w]` schon wahr, kam `w` doppelt vor, und die Zeile ist ungültig. Sonst setze ich `gesehen[w] = true`. Der
    Index ist die Zahl selbst. Für die Zahl 9 brauche ich den Index 9, also ein Array der Länge 10. Für jede neue Zeile
    beginnt das Merk-Array leer.
  kernpunkte:
    - Zahl als Index
    - Länge 10 für Index 9
    - je Zeile neu anlegen
- id: aw-karte-schubfach
  frage: Warum reicht es bei einer vollständig ausgefüllten Sudoku-Zeile, nach Doppelten zu suchen, statt zu prüfen, dass jede Zahl vorkommt?
  antwort: |
    Die Zeile hat neun Zellen, und jede enthält eine der neun Zahlen 1 bis 9. Kommt keine Zahl doppelt vor, stehen dort
    neun verschiedene Zahlen. Mehr als neun verschiedene gibt es nicht, also kommt jede genau einmal vor. Das ist das
    Schubfachprinzip. Bei leeren Zellen mit 0 gilt das nicht mehr.
  kernpunkte:
    - neun Zellen, neun mögliche Zahlen
    - keine Doppelten heißt alle verschieden
    - gilt nur ohne leere Zellen
- id: aw-karte-bloecke
  frage: Warum genügt es nicht, nur Zeilen und Spalten eines Sudokus zu prüfen? Nenne ein Gegenbeispiel.
  antwort: |
    Vertauscht man in einer gültigen Lösung zwei Spalten, die in verschiedenen Blöcken liegen, etwa die Spalten 2 und 3,
    bleibt jede Zeile eine Anordnung der Zahlen 1 bis 9. Auch jede Spalte bleibt gültig, sie steht nur an einer anderen
    Stelle. Die Blöcke bekommen aber eine Spalte aus dem Nachbarblock, und dort kommen in der Regel Zahlen doppelt
    vor. Nur die
    Blockprüfung findet diesen Fehler.
  kernpunkte:
    - Spalten aus verschiedenen Blöcken vertauschen
    - Zeilen und Spalten bleiben gültig
    - Blöcke werden ungültig
- id: aw-karte-neues-array
  frage: Warum braucht ein Mittelwertfilter ein neues Ergebnis-Array, das Invertieren aber nicht?
  antwort: |
    Beim Invertieren hängt der neue Wert nur vom alten Wert desselben Pixels ab. Beim Mittelwertfilter brauchen die
    Nachbarn den alten Wert noch. Schreibt man direkt ins Bild, rechnen spätere Pixel mit schon geglätteten Werten.
    Beginnt ein Bild mit den Zeilen 10, 20, 30, 40 und 50, 60, 70, 80, dann bekommt `(0, 1)` so 44 statt richtig 40,
    weil `(0, 0)` schon von 10 auf 35 geglättet ist. Darum schreibt eine Nachbarschaftsoperation
    in ein neues Array und liest nur aus dem alten.
  kernpunkte:
    - Punktoperation braucht nur den eigenen Pixel
    - Nachbarn brauchen alte Werte
    - neues Array für Nachbarschaftsoperationen
- id: aw-karte-rand-mittel
  frage: Wie behandelst du beim Mittelwertfilter den Rand des Bilds?
  antwort: |
    Ich nehme nur die Pixel des 3×3-Quadrats, die im Bild liegen, und zähle mit, wie viele das sind. Geteilt wird durch
    diese Anzahl, nicht immer durch 9. Eine Ecke mittelt so über 4 Pixel, ein Randpixel über 6, ein innerer über 9.
    Würde man immer durch 9 teilen, wären die Ränder viel zu dunkel.
  kernpunkte:
    - nur vorhandene Pixel addieren
    - durch deren Anzahl teilen
    - Ecke 4, Rand 6, innen 9
- id: aw-karte-floodfill
  frage: Erkläre den Flood-Fill-Algorithmus mit seinen Basisfällen.
  antwort: |
    Flood-Fill füllt die zusammenhängende Fläche, in der ein Startpunkt liegt. Ein Aufruf tut nichts, wenn die Zelle
    außerhalb liegt, schon markiert ist oder nicht zur Fläche passt. Sonst markiert er die Zelle, zum Beispiel mit einer
    neuen Farbe oder mit -1, und ruft sich für die vier Nachbarn oben, unten, links und rechts auf. Die Reihenfolge der
    vier Aufrufe ändert nur die Reihenfolge des Färbens, nicht das Ergebnis.
  kernpunkte:
    - drei Basisfälle
    - zuerst markieren
    - vier Selbstaufrufe
- id: aw-karte-ende
  frage: Warum endet Flood-Fill, obwohl die Koordinaten mal größer und mal kleiner werden? Was ist hier der Fortschritt?
  antwort: |
    Der Fortschritt steckt im Bild, nicht in den Argumenten. Jeder Aufruf, der nicht sofort endet, markiert genau eine
    Zelle. Eine markierte Zelle wird nie wieder bearbeitet. Die Zahl der unmarkierten passenden Zellen sinkt also mit
    jedem solchen Aufruf um eins und ist endlich. Darum gibt es nur endlich viele Aufrufe. In
    [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) war der
    Fortschritt ein kleiner werdendes `n`, hier ist es diese schrumpfende Zahl.
  kernpunkte:
    - jeder Aufruf markiert eine Zelle
    - markierte Zellen nie wieder
    - Zahl unmarkierter Zellen sinkt
- id: aw-karte-markierung
  frage: Was passiert, wenn die Markierung erst nach den Selbstaufrufen gesetzt wird oder wenn alte und neue Farbe gleich sind?
  antwort: |
    In beiden Fällen ist eine bearbeitete Zelle während der Selbstaufrufe nicht als bearbeitet erkennbar. Die Zelle ruft
    ihren Nachbarn auf, der Nachbar ruft sie zurück, und sie passt immer noch. So rufen sich zwei Zellen endlos auf, bis
    ein StackOverflowError kommt. Im Stacktrace sieht man dann immer abwechselnd dieselben zwei Zeilen.
  kernpunkte:
    - Markierung wirkt nicht
    - zwei Nachbarn rufen sich endlos auf
    - StackOverflowError
- id: aw-karte-xss
  frage: Warum wurde auf Blatt 5 die Stapelgröße mit `-Xss16m` erhöht, und ist der Algorithmus ohne sie falsch?
  antwort: |
    Bei einem großen Bild kann Flood-Fill sehr viele Aufrufe gleichzeitig offen haben, etwa wenn die Füllung eine
    lange Schlangenlinie zieht. Jeder offene Aufruf belegt Platz auf dem Aufrufstapel aus
    [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg). Der Standardstapel
    reicht dafür nicht, und es käme zu einem StackOverflowError. Der Algorithmus ist trotzdem richtig. Die Rekursion ist
    endlich, nur sehr tief.
  kernpunkte:
    - viele gleichzeitig offene Aufrufe
    - Standardstapel zu klein
    - Algorithmus bleibt korrekt
- id: aw-karte-schwellwert
  frage: Warum vergleicht der Flood-Fill auf Blatt 5 jeden Pixel mit dem angeklickten Grauwert und nicht mit seinem Nachbarn?
  antwort: |
    Würde man mit dem Nachbarn vergleichen, könnte die Füllung über einen weichen Helligkeitsverlauf immer weiter
    wandern. In der Zeile 100, 108, 116, 124, 132 mit Toleranz 10 würde dann alles gefüllt, obwohl 132 um 32 vom Klickpunkt
    abweicht. Mit dem festen Bezugswert füllt sie nur 100 und 108. So bedeutet die Toleranz wirklich „höchstens so weit
    vom angeklickten Grauwert entfernt“.
  kernpunkte:
    - fester Bezugswert gVal
    - Vergleich mit Nachbar driftet
    - Zahlenbeispiel mit Verlauf
- id: aw-karte-minus-eins
  frage: Warum markiert man gefüllte Pixel mit -1, und warum braucht diese Markierung eine eigene Prüfung?
  antwort: |
    Grauwerte liegen zwischen 0 und 255. Der Wert -1 kann also kein echter Pixel sein und eignet sich als Markierung.
    Bei einem dunklen Startwert liegt -1 aber im Toleranzbereich, zum Beispiel ist bei `gVal = 3` und Toleranz 10 der
    Abstand nur 4. Dann gälte ein markierter Pixel wieder als passend, und zwei Pixel riefen sich endlos auf. Darum
    prüfe ich `bild[z][s] == -1` vor der Toleranz.
  kernpunkte:
    - -1 ist kein Grauwert
    - kann im Toleranzbereich liegen
    - eigener Basisfall vor der Toleranz
- id: aw-karte-inseln
  frage: Wie zählst du die Inseln auf einer Karte, und warum wird keine Insel doppelt gezählt?
  antwort: |
    Ich gehe mit zwei Schleifen über alle Zellen. Finde ich Land, zähle ich eine Insel und versenke sie sofort ganz mit
    Flood-Fill. Die übrigen Zellen dieser Insel sind danach Wasser. Wenn die Schleife später zu ihnen kommt, zählen sie
    nicht mehr. Die Methode verändert dabei die Karte. Wer sie behalten will, übergibt eine tiefe Kopie, bei der auch
    jede Zeile ein neues Array ist.
  kernpunkte:
    - Doppelschleife plus Flood-Fill
    - Insel sofort versenken
    - Karte wird verändert, sonst Kopie
- id: aw-karte-fluss
  frage: Warum muss beim Fluss ein getroffener Fels sofort markiert werden?
  antwort: |
    Am Fels teilt sich das Wasser nach links und rechts. Liegen zwei Felsen nebeneinander, trifft der rechte Lauf den
    zweiten Fels, und dessen linker Lauf trifft wieder den ersten. Ist der erste noch ein normaler Fels, teilt er sich
    erneut, und die beiden Felsen schicken das Wasser endlos hin und her. Markiert man den Fels vor der Teilung als
    getroffen, endet der zweite Besuch sofort. Das ist dieselbe Idee wie die Farbe bei Flood-Fill.
  kernpunkte:
    - Teilung nach links und rechts
    - zwei Felsen nebeneinander
    - Markierung vor der Teilung
```
