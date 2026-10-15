---
nummer: 7
titel: Zahlen zerlegen
kurz: Ziffern mit Rest und Ganzzahldivision abspalten, Ziffern zählen, Quersumme und Umkehrzahl berechnen, Harshad-, fröhliche und narzisstische Zahlen prüfen sowie Multiplikation, Wurzel und ggT mit Schleifen nachbauen.
teil: methoden
stunden: 3
pruefungsgewicht: 2
voraussetzungen: [ausdruecke, verzweigungen, schleifen, methoden]
lernziele:
  - mit `n % 10` die letzte Ziffer und mit `n / 10` den Rest einer Zahl bestimmen, die k-te Ziffer von rechts berechnen und das Ergebnis auch für negative Zahlen angeben
  - eine Ziffernschleife Durchlauf für Durchlauf in einer Tabelle verfolgen und ihre Ausgabe oder ihren Rückgabewert exakt angeben
  - Methoden schreiben, die ohne Strings, Arrays und Math Ziffern zählen, die Quersumme berechnen oder Ziffern mit einer Eigenschaft zählen, einschließlich des Sonderfalls 0
  - eine Zahl ziffernweise umdrehen oder aus Ziffern neu aufbauen, Palindromzahlen erkennen und den int-Überlauf als Grenze dieses Verfahrens begründen
  - Teilbarkeit mit `%` prüfen, Harshad-Zahlen erkennen und aus einer Prüfmethode Methoden zum Zählen, Summieren und Ausgeben über ein Intervall aufbauen
  - fröhliche und narzisstische Zahlen mit verschachtelten Schleifen prüfen, Potenzen ohne Math.pow berechnen und die Abbruchbedingung begründen
  - Multiplikation ohne `*`, die ganzzahlige Wurzel und den ggT nach Euklid mit Schleifen berechnen und ihren Ablauf Schritt für Schritt verfolgen
  - eine Blattaufgabe mit einer ganzen Methodenfamilie unter den Einschränkungen von Aufgabenblatt 2 lösen und die Lösung im Feedbackgespräch erklären
---

**Worum geht es?** Eine Zahl wie 4072 sieht für dich aus wie vier Zeichen hintereinander. Für Java ist
sie aber ein einziger Wert vom Typ `int`, ohne einzelne Zeichen. Trotzdem fragen viele Aufgaben nach den
**Ziffern** einer Zahl: Wie groß ist ihre Summe? Wie viele Ziffern sind gerade? Wie lautet die Zahl
rückwärts? In diesem Kapitel lernst du, eine Zahl rein mit Rechnen in ihre Ziffern zu zerlegen. Dafür
brauchst du nur zwei Werkzeuge aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen): den
Rest `%` und die Ganzzahldivision `/`.

**Was kommt in der Prüfung?**

- **Aufgabenblatt 2:** In allen vorliegenden Blättern 2 seit 2017 gibt es eine Aufgabe mit Ziffernmethoden, meist als Aufgabe 3 (2017 als Aufgabe 1, im Wintersemester 2021 als Aufgabe 4). Im Wintersemester 2023 waren es `calcCrossSum`, `isCrossSumDividable`, `countCrossSumDividable` und `printCrossSumDividable`. Frühere Jahrgänge verlangten Harshad-Zahlen, fröhliche Zahlen oder narzisstische Zahlen.
- **Die Einschränkung dieser Blattaufgabe:** Strings und Arrays sind verboten. In den Blättern von 2023 ist auch die Klasse `Math` verboten, ausdrücklich auch `Math.pow`. Du musst also wirklich mit `%` und `/` rechnen.
- **Feedbackgespräch:** Eine belegte Zusatzfrage ist „Welche Art von Schleife verwenden Sie, und warum?“ (Blatt 2, 2017). Gut vorbereitet bist du auch auf „Was liefert Ihre Methode für die Zahl 0?“. Ob diese Frage gestellt wird, belegen die Unterlagen nicht.
- **Spätere Blätter:** Auf Aufgabenblatt 3 kommen Ziffernmethoden in rekursiver Form wieder, etwa die Summe der quadrierten Ziffern (Kapitel 10, Rekursion). Fragen der Art „Was gibt das Programm aus?“ übst du hier ebenfalls, weil das TUWEL-Quiz solche Fragen zur Ausgabe von Code stellt.

**Wozu brauchst du das später?** Fast jede Rekursion über Zahlen in Kapitel 10 zerlegt eine Zahl mit
`% 10` und `/ 10`. Wer die Schleifenform hier sicher beherrscht, muss dort nur noch die Form wechseln.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Ganzzahldivision und Rest** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen). `7 / 2` ist `3`, `7 % 2` ist `1`.
- **while- und for-Schleifen** aus [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt) und [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings).
- **Methoden mit Rückgabewert** aus [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage
nicht klappt, wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: zi-ein-rest
titel: Division und Rest
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      System.out.println(58 / 10);
      System.out.println(58 % 10);
    loesung: |
      5
      8
    fehler:
      - wert: "5.8\n8"
        meldung: '`58 / 10` teilt zwei `int`-Werte. Dabei fällt der Nachkommaanteil weg, es bleibt `5`.'
      - wert: "5\n0.8"
        meldung: '`%` ist der **Rest** der Division, keine Kommastelle. 58 = 5 · 10 + 8, der Rest ist 8.'
hinweise:
  - '`/` zwischen zwei `int`-Werten schneidet ab. `%` liefert den Rest.'
loesung: |
  `58 / 10`: Die 10 passt fünfmal in 58. Bei `int` fällt der Rest weg, also `5`.
  ---
  `58 % 10`: Es bleibt 58 − 50 = 8 übrig, also `8`.
```

```aufgabe
id: zi-ein-negativ
titel: Rest mit negativer Zahl
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      System.out.println(-17 / 5);
      System.out.println(-17 % 5);
    loesung: |
      -3
      -2
    fehler:
      - wert: "-4\n3"
        meldung: 'Java schneidet bei der Ganzzahldivision **zur Null hin** ab, nicht nach unten. `-3,4` wird zu `-3`.'
      - wert: "-3\n2"
        meldung: 'Der Rest hat in Java das Vorzeichen der linken Zahl. Probe: (−3) · 5 + (−2) = −17.'
hinweise:
  - Rechne zuerst mit 17 und 5, dann setze das Minus. Der Rest hat das Vorzeichen der linken Zahl.
loesung: |
  `-17 / 5` ist mathematisch −3,4. Java schneidet zur Null hin ab, also `-3`.
  ---
  Der Rest erfüllt (−3) · 5 + Rest = −17, also Rest = −2. Er hat das Vorzeichen von −17.
```

```aufgabe
id: zi-ein-while
titel: Wie oft läuft die Schleife?
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: ausgabe
    code: |
      int x = 50;
      int z = 0;
      while (x > 0) {
          x = x / 4;
          z++;
      }
      System.out.println(z);
    loesung: |
      3
    fehler:
      - wert: "2"
        meldung: 'Nach zwei Durchläufen ist `x = 3`, und `3 > 0` ist noch wahr. Es gibt einen dritten Durchlauf mit `3 / 4 = 0`.'
hinweise:
  - 'Schreib die Werte von `x` auf: 50, dann 50 / 4, dann wieder durch 4 und so weiter.'
loesung: |
  `x` durchläuft 50, 12, 3 und 0. Jedes Mal, wenn `x` geteilt wird, wächst `z` um 1.
  ---
  Bei `x = 0` ist `0 > 0` falsch, die Schleife endet. Es gab drei Durchläufe, also `z = 3`.
```

```aufgabe
id: zi-ein-summe
titel: Eine Summe in der Schleife
niveau: 1
art: check
angabe: |
  Welchen Wert hat `summe` nach der Schleife? (Wiederholung: [4.3 Akkumulieren: Summen, Zähler und Ergebnis-Strings](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings))
  ```java
  int summe = 0;
  for (int i = 1; i <= 4; i++) {
      summe = summe + i * i;
  }
  ```
teile:
  - typ: zahl
    loesung: "1 + 4 + 9 + 16"
    fehler:
      - wert: "10"
        meldung: 'Im Rumpf steht `i * i`, also das Quadrat. Du hast nur 1 + 2 + 3 + 4 gerechnet.'
      - wert: "14"
        meldung: 'Die Bedingung ist `i <= 4`. Auch `i = 4` läuft noch, 16 kommt dazu.'
hinweise:
  - Addiere die Quadrate der Zahlen 1 bis 4.
loesung: |
  `i` läuft über 1, 2, 3 und 4. Addiert werden die Quadrate 1, 4, 9 und 16.
  ---
  `summe` = 1 + 4 + 9 + 16 = 30.
```

```aufgabe
id: zi-ein-return
titel: Ein Aufruf wird durch seinen Wert ersetzt
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Rueckgabe {
          public static int doppelt(int n) {
              return 2 * n;
          }

          public static void main(String[] args) {
              int a = doppelt(4);
              System.out.println(a + doppelt(a));
          }
      }
    loesung: |
      24
    fehler:
      - wert: "16"
        meldung: 'Zuerst ist `a = doppelt(4) = 8`. Dann wird `a + doppelt(a)` gerechnet, also 8 + 16.'
      - wert: "816"
        meldung: 'Hier stehen nur `int`-Werte. `+` addiert, es wird nichts aneinandergehängt.'
hinweise:
  - Ersetze jeden Aufruf durch den Wert, den `return` liefert.
loesung: |
  `doppelt(4)` liefert 8, also ist `a = 8`.
  ---
  `doppelt(a)` liefert 16. Ausgegeben wird 8 + 16 = 24.
```

```aufgabe
id: zi-ein-teiler
titel: Ist das ein Teiler?
niveau: 1
art: check
angabe: |
  Welcher Ausdruck ist genau dann `true`, wenn `n` durch `t` ohne Rest teilbar ist? (Wiederholung: [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math))
teile:
  - typ: auswahl
    optionen: ['`n % t == 0`', '`n / t == 0`', '`t % n == 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n / t == 0` gilt, wenn `n` kleiner als `t` ist, etwa `3 / 5 == 0`. Mit Teilbarkeit hat das nichts zu tun.'
      - wert: 2
        meldung: 'Die Reihenfolge ist vertauscht. `t % n == 0` prüft, ob `t` durch `n` teilbar ist.'
hinweise:
  - Teilbar heißt, beim Teilen bleibt kein Rest.
loesung: |
  „`n` ist durch `t` teilbar“ heißt: Der Rest von `n` geteilt durch `t` ist 0.
  ---
  In Java ist das `n % t == 0`. Beispiel: `12 % 4 == 0` ist `true`, `13 % 4 == 0` ist `false`.
```

## Ziffern abspalten mit Rest und Division

```aufgabe
id: zi-ab-check-zehner
titel: Volle Zehner und Rest
niveau: 1
art: check
angabe: |
  Ein Automat zahlt 73 Cent nur in 10-Cent-Münzen und 1-Cent-Münzen aus, mit möglichst wenigen Münzen.
  Wie viele 1-Cent-Münzen sind dabei? Diese Zerlegung mit `/` und `%` kennst du aus
  [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
teile:
  - typ: zahl
    loesung: "73 - 7*10"
    fehler:
      - wert: "7"
        meldung: 'Sieben ist die Anzahl der 10-Cent-Münzen, also `73 / 10`. Gefragt ist der Rest.'
hinweise:
  - Zuerst so viele 10-Cent-Münzen wie möglich, der Rest in 1-Cent-Münzen.
loesung: |
  Es passen sieben 10-Cent-Münzen hinein, das ist `73 / 10 = 7`.
  ---
  Übrig bleiben 73 − 70 = 3 Cent, das ist `73 % 10 = 3`.
```

Schau dir die Zahl 4072 an. Sie besteht aus den **Ziffern** 4, 0, 7 und 2. Eine Ziffer ist eines der zehn
Zeichen 0 bis 9, aus denen wir Zahlen schreiben. Jede Ziffer hat einen **Stellenwert**: Die 2 ganz rechts
zählt einfach, die 7 zählt zehnfach, die 0 hundertfach und die 4 tausendfach. Ausgeschrieben heißt das

```
4072 = 4 · 1000 + 0 · 100 + 7 · 10 + 2
```

Dieses Schreiben mit Stellenwerten heißt **Dezimalsystem** (von lateinisch *decem*, zehn), weil jede Stelle
zehnmal so viel wert ist wie die Stelle rechts von ihr. Die Stelle ganz rechts heißt **Einerstelle**, die
nächste **Zehnerstelle**, dann **Hunderterstelle** und so weiter.

In Java ist 4072 aber kein Text aus vier Zeichen. Eine `int`-Variable speichert nur den Zahlenwert. Es gibt
keinen Befehl „gib mir die dritte Ziffer“. Wir müssen die Ziffern also herausrechnen. Das gelingt mit zwei
Operatoren, die du schon kennst.

```aufgabe
id: zi-ab-check-abschneiden
titel: Was bleibt nach dem Teilen?
niveau: 1
art: check
angabe: Welchen Wert hat `3905 / 10` in Java?
teile:
  - typ: auswahl
    optionen: ['`390`', '`390.5`', '`5`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Beide Zahlen sind `int`. Bei der Ganzzahldivision fällt der Nachkommaanteil weg.'
      - wert: 2
        meldung: 'Die 5 ist der Rest, also `3905 % 10`. Die Division liefert die Zahl ohne letzte Ziffer.'
loesung: |
  `3905 / 10` ist 390 Rest 5. Bei `int / int` bleibt nur der ganzzahlige Teil.
  ---
  Ergebnis `390`: Die letzte Ziffer 5 ist abgeschnitten.
```

### Die letzte Ziffer und der Rest der Zahl

Teile 4072 durch 10. Das Ergebnis ist 407 Rest 2. Beide Teile sind nützlich:

- Der **Rest** `4072 % 10` ist `2`. Das ist genau die letzte Ziffer. Alles links davon ist ein Vielfaches von 10 und verschwindet beim Rest.
- Das **Ergebnis** der Ganzzahldivision `4072 / 10` ist `407`. Das ist die Zahl ohne ihre letzte Ziffer. Bei `int` fällt der Nachkommaanteil weg, die 2 wird also einfach abgeschnitten.

Ein Bild dazu: Stell dir die Zahl als Reihe von Ziffernkarten vor. `% 10` liest die Karte ganz rechts ab.
`/ 10` nimmt diese Karte weg und schiebt den Rest nach rechts.

:::definition[Letzte Ziffer und Rest einer Zahl]
Für eine ganze Zahl `n ≥ 0` gilt:

- `n % 10` ist die **letzte Ziffer** (die Einerziffer) von `n`. Sie liegt immer zwischen 0 und 9.
- `n / 10` ist `n` **ohne seine letzte Ziffer**. Hat `n` nur eine Ziffer, ist das Ergebnis 0.

Allgemein liefert `n % 10^k` die letzten `k` Ziffern und `n / 10^k` die Zahl ohne ihre letzten `k` Ziffern.
Dabei steht `10^k` hier für die Zahl 10, 100, 1000 und so weiter. In Java schreibst du diese Zahl direkt hin,
denn `^` ist in Java **keine** Potenz.
:::

**Beispiel:** `305 % 10` ist `5`, und `305 / 10` ist `30`. **Kein Beispiel:** `305 / 10` ist **nicht** die
erste Ziffer 3. Die Division entfernt nur die letzte Ziffer, der Rest der Zahl bleibt stehen. Auch `-305 % 10`
ist keine Ziffer, denn das Ergebnis ist `-5`. Dazu gleich mehr.

:::beispiel[Die Zahl 4072 Schritt für Schritt zerlegen]
```java
int n = 4072;
System.out.println(n % 10);   // Zeile 2
n = n / 10;                   // Zeile 3
System.out.println(n % 10);   // Zeile 4
n = n / 10;                   // Zeile 5
System.out.println(n);        // Zeile 6
```

1. Zeile 1 legt die `int`-Variable `n` mit dem Wert 4072 an.
2. Zeile 2: `4072 % 10` ist der Rest von 4072 geteilt durch 10, also `2`. Es erscheint `2`.
3. Zeile 3: `4072 / 10` ist `407`, die 2 ist abgeschnitten. Dieser Wert wird in `n` gespeichert. Der alte Wert 4072 ist damit weg.
4. Zeile 4: Jetzt ist `n = 407`. Die letzte Ziffer `407 % 10` ist `7`. Es erscheint `7`, die Zehnerziffer der ursprünglichen Zahl.
5. Zeile 5: `407 / 10` ist `40`. Jetzt ist `n = 40`.
6. Zeile 6 gibt `40` aus. Das sind die beiden vorderen Ziffern 4 und 0.

Ausgabe:

```
2
7
40
```

Achte auf das Muster: Erst die letzte Ziffer lesen (`% 10`), dann sie entfernen (`/ 10`). Danach ist die
nächste Ziffer die letzte.
:::

### Eine bestimmte Ziffer herausholen

Oft brauchst du nicht die letzte, sondern eine bestimmte Ziffer, etwa die Hunderterziffer. Dazu schiebst du
zuerst die Ziffern rechts davon weg und liest dann die letzte Ziffer ab.

:::beispiel[Die Hunderterziffer von 58316]
Gesucht ist die Hunderterziffer von 58316, also die 3. Wir zählen die Stellen von rechts ab 0: Stelle 0 ist
die 6, Stelle 1 die 1, Stelle 2 die 3.

```java
int n = 58316;
int hunderter = n / 100 % 10;
System.out.println(hunderter);
```

1. `/` und `%` haben denselben Vorrang und werden von links nach rechts ausgewertet. Zuerst rechnet Java also `n / 100`.
2. `58316 / 100` ist `583`. Die beiden Ziffern rechts der Hunderterstelle (1 und 6) sind abgeschnitten.
3. Danach rechnet Java `583 % 10`. Das ist die letzte Ziffer von 583, also `3`.
4. Ausgegeben wird `3`, die gesuchte Hunderterziffer.

Allgemein: Die Ziffer an Stelle `k` (von rechts gezählt, beginnend bei 0) ist `n / 10^k % 10`. Für die
Zehnerziffer (k = 1) heißt das `n / 10 % 10`, für die Tausenderziffer (k = 3) `n / 1000 % 10`. Probe mit 58316:
`58316 / 1000 = 58`, `58 % 10 = 8`. Die Tausenderziffer ist tatsächlich 8.
:::

```aufgabe
id: zi-ab-zehnerziffer
titel: Der Ausdruck für die Zehnerziffer
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  `n` ist eine ganze Zahl mit `n ≥ 0`. Welcher Ausdruck liefert ihre **Zehnerziffer**, bei 5728 also die 2?
teile:
  - typ: auswahl
    optionen: ['`n / 10 % 10`', '`n % 10 / 10`', '`n % 100`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n % 10` ist nur eine einzige Ziffer (0 bis 9). Geteilt durch 10 ergibt das immer 0.'
      - wert: 2
        meldung: '`n % 100` liefert die letzten **beiden** Ziffern, bei 5728 also 28. Gefragt ist nur die 2.'
hinweise:
  - Schiebe zuerst die Einerziffer weg, dann lies die letzte Ziffer ab.
loesung: |
  **Ansatz:** Ziffer an Stelle 1 (von rechts ab 0 gezählt), also erst durch 10 teilen, dann `% 10`.
  ---
  `5728 / 10 = 572`, und `572 % 10 = 2`. Der Ausdruck `n / 10 % 10` passt.
```

Es gibt einen zweiten Weg zur selben Ziffer: Erst mit `% 1000` die letzten drei Ziffern behalten, dann mit
`/ 100` die beiden rechten wegschneiden. `58316 % 1000 / 100` ist `316 / 100 = 3`. Beide Wege sind richtig.

:::achtung[Division und Rest vertauscht]
Eine typische falsche Zeile für „die letzte Ziffer von 4072“ ist

```java
int letzte = 4072 / 10;   // erwartet: 2   tatsächlich: 407
```

`/ 10` entfernt die letzte Ziffer, es liefert sie nicht. Für die letzte Ziffer brauchst du den Rest:
`4072 % 10` ist `2`. Eine Merkhilfe: **Rest** heißt „was übrig bleibt“, und übrig bleibt die Einerziffer.
:::

:::achtung[Negative Zahlen liefern negative Ziffern]
Erinnere dich an [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen): Der Rest hat in Java das
Vorzeichen der linken Zahl. Darum gilt

```java
System.out.println(-385 % 10);   // -5, nicht 5
System.out.println(-385 / 10);   // -38
```

Wer die Ziffern von −385 addieren will und einfach `% 10` nimmt, bekommt (−5) + (−8) + (−3) = −16 statt 16.
Die Lösung: Mach die Zahl zuerst positiv, zum Beispiel mit `if (n < 0) { n = -n; }`. In den Blattaufgaben
steht meist die **Vorbedingung** `number > 0`. Das ist eine Zusage der Angabe: Die Methode wird nur mit
positiven Zahlen aufgerufen. Dann tritt das Problem gar nicht auf.
:::

:::merke[Ziffern mit / und % herausholen]
1. Letzte Ziffer: `n % 10`.
2. Zahl ohne letzte Ziffer: `n / 10`.
3. Ziffer an Stelle k (von rechts, ab 0): `n / 10^k % 10`, also zum Beispiel `n / 100 % 10` für die Hunderterziffer.
4. Letzte k Ziffern: `n % 10^k`, also zum Beispiel `n % 100` für die letzten beiden.
5. Bei negativen Zahlen sind alle Reste negativ. Mache die Zahl vorher positiv, wenn du echte Ziffern brauchst.
:::

```reflexion
frage: Warum liefert gerade `% 10` die letzte Ziffer und nicht etwa `% 9`? Überlege es dir an 4072, bevor du die Antwort aufdeckst.
antwort: |
  Im Dezimalsystem ist 4072 = 407 · 10 + 2. Alle Ziffern außer der letzten stecken im Teil 407 · 10, und der
  ist durch 10 teilbar. Beim Teilen durch 10 bleibt also genau die letzte Ziffer als Rest übrig. Bei `% 9` ist
  407 · 10 nicht durch 9 teilbar, darum mischen sich die anderen Ziffern in den Rest: `4072 % 9` ist 4. Die
  Zahl 10 ist die Basis unseres Zahlensystems. Im Zweiersystem, mit dem der Computer intern arbeitet, würde
  `% 2` die letzte Binärziffer liefern.
```

```aufgabe
id: zi-ab-ausgabe-vier
titel: Vier Ausdrücke zu einer Zahl
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int n = 9361;
      System.out.println(n % 10);
      System.out.println(n / 10);
      System.out.println(n / 100);
      System.out.println(n % 100);
    loesung: |
      1
      936
      93
      61
    fehler:
      - wert: "1\n6\n3\n61"
        meldung: '`n / 10` ist die ganze Zahl ohne die letzte Ziffer, also 936. Eine einzelne Ziffer liefert erst `n / 10 % 10`.'
      - wert: "1\n936\n93\n9361"
        meldung: '`n % 100` ist der Rest beim Teilen durch 100. Das sind die letzten beiden Ziffern, also 61.'
hinweise:
  - '`% 10^k` behält die letzten k Ziffern, `/ 10^k` schneidet die letzten k Ziffern ab.'
loesung: |
  **Ansatz:** Bei `/` werden Ziffern rechts abgeschnitten, bei `%` bleiben die Ziffern rechts übrig.
  ---
  `9361 % 10 = 1` (letzte Ziffer), `9361 / 10 = 936` (ohne letzte Ziffer).
  ---
  `9361 / 100 = 93` (ohne die letzten zwei Ziffern), `9361 % 100 = 61` (nur die letzten zwei). Probe: 93 · 100 + 61 = 9361.
```

```aufgabe
id: zi-ab-gefuehrt-tausender
titel: Die Tausenderziffer geführt bestimmen
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Welchen Wert gibt `System.out.println(n / 1000 % 10);` für `n = 582913` aus? Löse die Aufgabe zuerst
  geführt in kleinen Schritten.
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "582"
        meldung: 'Das ist nur `n / 1000`. Danach kommt noch `% 10`, das nur die letzte Ziffer von 582 behält.'
      - wert: "9"
        meldung: 'Die 9 ist die Hunderterziffer. Durch 1000 teilen schneidet drei Ziffern ab: 9, 1 und 3.'
gefuehrt:
  - text: Welcher Operator wird zuerst ausgewertet?
    teil:
      typ: auswahl
      optionen: ['`/`, weil er links steht', '`%`, weil er stärker bindet', 'beide gleichzeitig']
      richtig: [0]
    erklaerung: '`/` und `%` haben denselben Vorrang. Dann gilt „von links nach rechts“, also zuerst `n / 1000`.'
  - text: Wie viel ist `582913 / 1000`?
    teil: { typ: zahl, loesung: "582" }
    erklaerung: Durch 1000 teilen schneidet die letzten drei Ziffern 9, 1 und 3 ab.
  - text: Wie viel ist `582 % 10`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Der Rest beim Teilen durch 10 ist die letzte Ziffer von 582.
  - text: Kontrolle. An welcher Stelle (von rechts, ab 0 gezählt) steht die 2 in 582913?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Stelle 0 ist die 3, Stelle 1 die 1, Stelle 2 die 9, Stelle 3 die 2. Stelle 3 ist die Tausenderstelle.'
hinweise:
  - '`/` und `%` werden von links nach rechts ausgewertet.'
  - Durch 1000 teilen schneidet drei Ziffern ab. Danach liefert `% 10` die letzte Ziffer.
loesung: |
  **Ansatz:** Ziffer an Stelle 3 von rechts: erst `/ 1000`, dann `% 10`.
  ---
  `582913 / 1000 = 582`. Die Ziffern 9, 1 und 3 sind weg.
  ---
  `582 % 10 = 2`. Probe: In 582913 steht vor den drei Ziffern 913 die 2. Ausgabe `2`.
```

```aufgabe
id: zi-ab-rf-aussagen
titel: Aussagen über Rest und Division
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: '`n` ist eine `int`-Variable. Beurteile jede Aussage.'
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`n % 10` liegt für jedes `n` zwischen 0 und 9.'
        richtig: false
        erklaerung: 'Für negative `n` ist der Rest negativ oder 0, zum Beispiel `-47 % 10 = -7`.'
      - text: 'Für `n ≥ 0` gilt `n / 10 == 0` genau dann, wenn `n` nur eine Ziffer hat.'
        richtig: true
        erklaerung: 'Für 0 bis 9 ist `n / 10` gleich 0. Ab 10 passt die 10 mindestens einmal hinein.'
      - text: 'Für `n ≥ 0` gilt immer `n == n / 10 * 10 + n % 10`.'
        richtig: true
        erklaerung: 'Das ist die Zerlegung in „Zahl ohne letzte Ziffer mal 10“ plus letzte Ziffer, etwa 407 · 10 + 2 = 4072.'
      - text: '`n / 100 % 10` und `n % 100 / 10` liefern für `n ≥ 0` dieselbe Ziffer.'
        richtig: false
        erklaerung: 'Der erste Ausdruck liefert die Hunderterziffer, der zweite die Zehnerziffer. Bei 4072 sind das 0 und 7.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Probiere Aussage 1 mit einer negativen Zahl wie −47. Der Rest hat in Java das Vorzeichen der linken Zahl.'
      - wert: [f, r, r, r]
        meldung: 'Setze in Aussage 4 eine Zahl ein, zum Beispiel 4072. Welche Stelle schneidet `/ 100` ab, welche `% 100`?'
hinweise:
  - Prüfe jede Aussage mit einer konkreten Zahl, auch mit einer negativen.
  - Bei Aussage 4 rechne beide Ausdrücke für 4072 aus.
loesung: |
  **Ansatz:** Jede Aussage mit Beispielzahlen prüfen, auch mit einem negativen Wert.
  ---
  Aussage 1 ist falsch (Gegenbeispiel −47). Aussage 2 ist richtig: 0 bis 9 liefern 0, ab 10 mindestens 1.
  ---
  Aussage 3 ist richtig, das ist die Zerlegung beim Teilen mit Rest. Aussage 4 ist falsch: Für 4072 ergibt `4072 / 100 % 10 = 0`, aber `4072 % 100 / 10 = 7`.
```

```aufgabe
id: zi-ab-lueckentext-stellen
titel: Einer, Zehner und Hunderter ausgeben
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  `n` ist eine dreistellige Zahl. Ergänze die Lücken so, dass zuerst die Hunderterziffer, dann die
  Zehnerziffer und dann die Einerziffer in je einer eigenen Zeile erscheinen. Für `n = 847` also `8`, `4`, `7`.
teile:
  - typ: lueckentext
    code: |
      int n = 847;
      System.out.println(n ___);
      System.out.println(n ___);
      System.out.println(n ___);
    luecken: [["/ 100"], ["/ 10 % 10", "% 100 / 10"], ["% 10"]]
    fehler:
      - wert: ["/ 100", "/ 10", "% 10"]
        meldung: '`847 / 10` ist 84, also zwei Ziffern. Für die Zehnerziffer allein brauchst du danach noch `% 10`.'
      - wert: ["% 100", "/ 10 % 10", "% 10"]
        meldung: '`847 % 100` sind die letzten **beiden** Ziffern, also 47. Die Hunderterziffer liefert `/ 100`.'
hinweise:
  - Bei einer dreistelligen Zahl bleibt nach `/ 100` genau eine Ziffer übrig.
  - Für die Zehnerziffer erst durch 10 teilen, dann die letzte Ziffer nehmen.
loesung: |
  **Ansatz:** Je Stelle die Ziffern rechts davon abschneiden und dann die letzte Ziffer lesen.
  ---
  Hunderter: `847 / 100 = 8`. Hier ist kein `% 10` nötig, weil nur eine Ziffer übrig bleibt.
  ---
  Zehner: `847 / 10 % 10 = 84 % 10 = 4`. Einer: `847 % 10 = 7`. Ausgabe 8, 4, 7.
```

```aufgabe
id: zi-ab-negativ-ausgabe
titel: Ziffern einer negativen Zahl
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int n = -614;
      System.out.println(n % 10);
      System.out.println(n / 10 % 10);
      if (n < 0) {
          n = -n;
      }
      System.out.println(n % 10 + n / 10 % 10 + n / 100);
    loesung: |
      -4
      -1
      11
    fehler:
      - wert: "4\n1\n11"
        meldung: 'Vor dem `if` ist `n` noch negativ. Der Rest hat das Vorzeichen der linken Zahl: `-614 % 10` ist `-4`.'
      - wert: "-4\n-1\n-11"
        meldung: 'Nach dem `if` ist `n = 614`. Ab dort sind alle Reste positiv: 4 + 1 + 6.'
hinweise:
  - 'Bis zum `if` rechnest du mit −614, danach mit 614.'
  - '`-614 / 10` ist `-61`. Davon ist der Rest bei 10 gleich `-1`.'
loesung: |
  **Ansatz:** Vor und nach dem Vorzeichenwechsel getrennt rechnen.
  ---
  `-614 % 10 = -4`. `-614 / 10 = -61` (Richtung 0 abgeschnitten), dann `-61 % 10 = -1`.
  ---
  Das `if` macht `n = 614`. Jetzt `4 + 1 + 6 = 11`. Das ist die Quersumme von 614.
```

```aufgabe
id: zi-ab-zeilen-fehler
titel: Wo liefert das Programm falsche Ziffern?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Das Programm soll für `jahr = 2026` die Zeilen `Einer: 6`, `Zehner: 2`, `Hunderter: 0` und `Tausender: 2`
  ausgeben. Es kompiliert, liefert aber in manchen Zeilen falsche Werte. Markiere diese Zeilen.
teile:
  - typ: zeilen
    code: |
      int jahr = 2026;
      System.out.println("Einer: " + jahr % 10);
      System.out.println("Zehner: " + jahr % 100);
      System.out.println("Hunderter: " + jahr / 100 % 10);
      System.out.println("Tausender: " + jahr % 1000);
    loesung: [3, 5]
    fehler:
      - wert: [3]
        meldung: 'Prüfe auch Zeile 5. `2026 % 1000` behält die letzten drei Ziffern, also 26.'
      - wert: [3, 4, 5]
        meldung: 'Zeile 4 ist richtig: `2026 / 100 = 20`, und `20 % 10 = 0`.'
hinweise:
  - Rechne jeden Ausdruck mit 2026 aus und vergleiche mit der gewünschten Ziffer.
  - '`% 10^k` behält die letzten k Ziffern, das sind meist mehrere.'
loesung: |
  **Ansatz:** Jeden Ausdruck mit 2026 auswerten.
  ---
  Zeile 2: `2026 % 10 = 6`, richtig. Zeile 3: `2026 % 100 = 26`, falsch (richtig wäre `jahr / 10 % 10`).
  ---
  Zeile 4: `2026 / 100 % 10 = 0`, richtig. Zeile 5: `2026 % 1000 = 26`, falsch (richtig wäre `jahr / 1000 % 10` oder einfach `jahr / 1000`).
```

```aufgabe
id: zi-ab-code-digitat
titel: Die Ziffer an einer Stelle
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: Einstufungstest-Stil (Methodenkopf vorgegeben, ohne Math), Inhalt neu
angabe: |
  Implementiere `int digitAt(int number, int position)`. Die Methode liefert die Ziffer von `number` an der
  Stelle `position`, von rechts gezählt und bei 0 beginnend. Gibt es diese Stelle nicht, liefert sie 0.
  Vorbedingung: `number ≥ 0` und `position ≥ 0`. Verwende kein `Math` und keine Strings.

  Beispiele: `digitAt(58316, 0)` liefert 6, `digitAt(58316, 2)` liefert 3, `digitAt(58316, 7)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Stelle {
          public static int digitAt(int number, int position) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(digitAt(58316, 2));
          }
      }
    musterloesung: |
      public class Stelle {
          public static int digitAt(int number, int position) {
              for (int i = 0; i < position; i++) {
                  number = number / 10;
              }
              return number % 10;
          }

          public static void main(String[] args) {
              System.out.println(digitAt(58316, 2));
          }
      }
    tests:
      - { aufruf: "digitAt(58316, 0)", erwartet: "6" }
      - { aufruf: "digitAt(58316, 2)", erwartet: "3" }
      - { aufruf: "digitAt(58316, 4)", erwartet: "5", beschreibung: "vorderste Ziffer" }
      - { aufruf: "digitAt(58316, 7)", erwartet: "0", beschreibung: "Stelle gibt es nicht" }
      - { aufruf: "digitAt(0, 0)", erwartet: "0" }
      - { aufruf: "digitAt(2147483647, 9)", erwartet: "2", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math", "String", "Integer"] }
    fehler:
      - { wert: 2, meldung: "Prüfe, wie oft du durch 10 teilst. Für Stelle 2 musst du genau zweimal teilen, nicht dreimal." }
      - { wert: 4, meldung: "Teilst du öfter durch 10, als die Zahl Ziffern hat, ist sie 0. Dann liefert `% 10` ebenfalls 0." }
      - { wert: "verboteneApi", meldung: "Kein `Math.pow` und keine Strings. Teile in einer Schleife `position`-mal durch 10." }
hinweise:
  - Schiebe die gesuchte Ziffer zuerst an die letzte Stelle. Wie oft musst du dafür durch 10 teilen?
  - 'Eine `for`-Schleife teilt `position`-mal durch 10, danach liefert `% 10` die Ziffer.'
loesung: |
  **Ansatz:** `n / 10^k % 10`, aber ohne Potenz: Die Division durch `10^k` ist dasselbe wie k-mal durch 10 teilen.
  ---
  ```java
  for (int i = 0; i < position; i++) {
      number = number / 10;
  }
  return number % 10;
  ```
  ---
  Kontrolle mit `digitAt(58316, 2)`: 58316 → 5831 → 583, dann `583 % 10 = 3`. Bei Stelle 7 wird `number` irgendwann 0 und bleibt 0, also Ergebnis 0. Der Parameter darf verändert werden, weil Java eine Kopie übergibt (call-by-value).
```

## Die Ziffernschleife: Ziffern zählen und Quersumme

```aufgabe
id: zi-zs-check-while
titel: Eine Schleife, die teilt
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Die `while`-Schleife kennst du aus
  [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
teile:
  - typ: ausgabe
    code: |
      int n = 7;
      while (n > 0) {
          System.out.println(n);
          n = n / 10;
      }
      System.out.println("Ende " + n);
    loesung: |
      7
      Ende 0
    fehler:
      - wert: "Ende 7"
        meldung: 'Vor dem ersten Durchlauf wird `7 > 0` geprüft. Das ist wahr, also läuft der Rumpf einmal.'
      - wert: "7\n0\nEnde 0"
        meldung: 'Nach dem ersten Durchlauf ist `n = 0`. Dann ist `0 > 0` falsch, und der Rumpf läuft nicht mehr.'
hinweise:
  - '`7 / 10` ist 0, weil bei `int` der Nachkommaanteil wegfällt.'
loesung: |
  Erster Test: `7 > 0` ist wahr. Ausgabe `7`, dann `n = 7 / 10 = 0`.
  ---
  Zweiter Test: `0 > 0` ist falsch. Die Schleife endet, ausgegeben wird `Ende 0`.
```

In [7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division) hast du gesehen: Mit
`% 10` liest du die letzte Ziffer, mit `/ 10` entfernst du sie. Danach ist die nächste Ziffer die letzte. Das
lässt sich wiederholen, bis keine Ziffer mehr übrig ist. Woran erkennst du das? Sobald die Zahl 0 ist, gibt
es nichts mehr abzuspalten.

Wie viele Ziffern eine Zahl hat, weißt du beim Programmieren nicht. Darum passt hier eine `while`-Schleife
besser als eine `for`-Schleife mit fester Anzahl. Die Bedingung lautet einfach `n > 0`: Solange noch etwas
von der Zahl übrig ist, lies die letzte Ziffer und schneide sie ab. Diese Form heißt in diesem Kapitel
**Ziffernschleife**.

### Die Quersumme

:::definition[Quersumme]
Die **Quersumme** einer Zahl ist die Summe aller ihrer Ziffern. Der Name kommt daher, dass man „quer“ über
die Ziffern hinweg addiert. Auf Englisch heißt sie *digit sum* oder *cross sum*, daher der Methodenname
`calcCrossSum` auf Aufgabenblatt 2.
:::

**Beispiel:** Die Quersumme von 4072 ist 4 + 0 + 7 + 2 = 13. **Kein Beispiel:** 4 ist **nicht** die
Quersumme von 4072, sondern die Anzahl seiner Ziffern. Auch 4072 selbst ist keine Quersumme. Eine Quersumme
ist fast immer viel kleiner als die Zahl.

:::beispiel[calcCrossSum(4072) Zeile für Zeile]
```java
public static int calcCrossSum(int number) {   // Zeile 1
    int sum = 0;                                // Zeile 2
    while (number > 0) {                        // Zeile 3
        int digit = number % 10;                // Zeile 4
        sum = sum + digit;                      // Zeile 5
        number = number / 10;                   // Zeile 6
    }
    return sum;                                 // Zeile 8
}
```

Zuerst der Kopf in Zeile 1. Die Methode bekommt eine Zahl `number` vom Typ `int` und liefert ein `int` zurück,
die Quersumme. In Zeile 2 beginnt die Summe bei 0, dem neutralen Wert der Addition: 0 zu einer Zahl zu
addieren, ändert sie nicht. Dann läuft die
Schleife. Wir verfolgen sie für den Aufruf `calcCrossSum(4072)` in einer Tabelle. Jede Zeile der Tabelle
ist ein Durchlauf.

| Durchlauf | `number` beim Test | `digit` | `sum` danach | `number` danach |
|---|---|---|---|---|
| 1. | 4072 | 2 | 2 | 407 |
| 2. | 407 | 7 | 9 | 40 |
| 3. | 40 | 0 | 9 | 4 |
| 4. | 4 | 4 | 13 | 0 |

1. Durchlauf 1: `4072 > 0` ist wahr. Zeile 4 liest die letzte Ziffer 2. Zeile 5 erhöht `sum` auf 2. Zeile 6 schneidet die 2 ab.
2. Durchlauf 2: Die letzte Ziffer von 407 ist 7. `sum` wird 9, `number` wird 40.
3. Durchlauf 3: Die letzte Ziffer von 40 ist 0. `sum` bleibt 9. Auch eine Null ist eine Ziffer und bekommt ihren eigenen Durchlauf.
4. Durchlauf 4: Die letzte Ziffer von 4 ist 4. `sum` wird 13, `number` wird `4 / 10 = 0`.
5. Jetzt ist `0 > 0` falsch. Die Schleife endet, und Zeile 8 liefert 13.

Probe: 4 + 0 + 7 + 2 = 13. Beachte, dass die Ziffern **von rechts nach links** drankommen. Für die Summe ist
die Reihenfolge egal.
:::

Die Methode verändert ihren Parameter `number`. Das ist erlaubt und harmlos: Java übergibt eine Kopie des
Werts (call-by-value, siehe [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben)).
Die Variable des Aufrufers bleibt unverändert.

```aufgabe
id: zi-zs-trace-quersumme
titel: Die Quersumme von 8064 verfolgen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Verfolge `calcCrossSum(8064)` mit der Methode aus dem Beispiel. Trage nach jedem Durchlauf die Werte von
  `number` und `sum` ein.
teile:
  - typ: trace
    spalten: [number, sum]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4]
    vorgabe: 1
    loesung: [[8064, 0], [806, 4], [80, 10], [8, 10], [0, 18]]
    fehler:
      - wert: ["8064", "0", "806", "6", "80", "6", "8", "14", "0", "14"]
        meldung: 'Du hast die Ziffer erst nach dem Teilen gelesen. Im ersten Durchlauf ist die letzte Ziffer von 8064 die 4, nicht die 6.'
      - wert: ["8064", "0", "806", "4", "80", "10", "8", "18", "0", "18"]
        meldung: 'Die Null in 8064 bekommt einen eigenen Durchlauf. Im dritten Durchlauf wird 0 addiert, `sum` bleibt 10.'
hinweise:
  - 'In jedem Durchlauf: zuerst `number % 10` zur Summe addieren, dann `number / 10`.'
loesung: |
  **Ansatz:** Je Durchlauf letzte Ziffer addieren und abschneiden.
  ---
  Ziffern von rechts: 4, 6, 0, 8. `sum` wird 4, 10, 10, 18. `number` wird 806, 80, 8, 0.
  ---
  Probe: 8 + 0 + 6 + 4 = 18. Nach vier Durchläufen ist `number = 0`, die Schleife endet.
```

:::merke[Die Ziffernschleife]
```java
while (n > 0) {
    int ziffer = n % 10;   // 1. letzte Ziffer lesen
    // 2. mit der Ziffer arbeiten (addieren, zählen, vergleichen ...)
    n = n / 10;            // 3. letzte Ziffer abschneiden
}
```

1. Die Bedingung ist `n > 0`. Bei 0 ist keine Ziffer mehr übrig.
2. Im Rumpf steht immer zuerst `% 10`, dann die Arbeit, zuletzt `/ 10`.
3. Die Ziffern kommen von rechts nach links.
4. Brauchst du die ursprüngliche Zahl später noch, rechne auf einer Kopie (`int n = number;`).
:::

### Ziffern zählen und der Sonderfall 0

Mit derselben Schleife zählst du Ziffern. Statt die Ziffer zu addieren, erhöhst du einen Zähler. Du kannst
auch nur Ziffern mit einer bestimmten Eigenschaft zählen, etwa gerade Ziffern mit `if (ziffer % 2 == 0)`.

:::beispiel[Ziffern zählen mit while und mit do-while]
```java
public static int countDigits(int number) {
    int count = 0;
    while (number > 0) {
        count++;
        number = number / 10;
    }
    return count;
}
```

Für `countDigits(507)` läuft die Schleife dreimal: 507 → 50 → 5 → 0. `count` wird 1, 2, 3. Die Methode liefert
3, richtig. Die Ziffer selbst brauchen wir hier gar nicht, darum fehlt `% 10`.

Jetzt der Aufruf `countDigits(0)`. Schon der erste Test `0 > 0` ist falsch. Die Schleife läuft kein einziges
Mal, und die Methode liefert 0. Die Zahl 0 hat aber eine Ziffer, nämlich die 0. Das Ergebnis ist falsch.

Die Lösung ist eine **do-while-Schleife** aus [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife).
Sie prüft die Bedingung erst **nach** dem Rumpf. Der Rumpf läuft also mindestens einmal:

```java
public static int countDigits(int number) {
    int count = 0;
    do {
        count++;
        number = number / 10;
    } while (number > 0);
    return count;
}
```

1. `countDigits(0)`: Der Rumpf läuft einmal, `count = 1`, `number = 0 / 10 = 0`. Dann ist `0 > 0` falsch. Ergebnis 1, richtig.
2. `countDigits(507)`: Nach dem ersten Durchlauf ist `number = 50`, die Bedingung ist wahr. Nach dem zweiten ist `number = 5`, wieder wahr. Nach dem dritten ist `number = 0`. Ergebnis 3, ebenfalls richtig.
:::

```aufgabe
id: zi-zs-bedingung
titel: Die richtige Schleifenbedingung
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Ziffernschleife soll für `n ≥ 1` jede Ziffer von `n` genau einmal verarbeiten. Welche Bedingung ist richtig?
  ```java
  while (___) {
      int ziffer = n % 10;
      // ... mit ziffer arbeiten ...
      n = n / 10;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`n > 0`', '`n >= 0`', '`n > 9`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Sobald `n = 0` ist, ergibt `0 / 10` wieder 0. Mit `n >= 0` bleibt die Bedingung für immer wahr: eine Endlosschleife.'
      - wert: 2
        meldung: 'Mit `n > 9` endet die Schleife, sobald nur noch eine Ziffer übrig ist. Die vorderste Ziffer wird nie verarbeitet.'
hinweise:
  - Probiere jede Bedingung mit `n = 23` aus und zähle die Durchläufe.
loesung: |
  **Ansatz:** Die Schleife muss genau so lange laufen, wie noch Ziffern übrig sind.
  ---
  `n > 0` ist richtig: Bei 23 laufen zwei Durchläufe (23, 2), dann ist `n = 0`. `n >= 0` endet nie, `n > 9` verarbeitet nur die 3.
```

:::achtung[Erst geteilt, dann gelesen]
Vertauscht man die beiden Zeilen im Rumpf, entsteht ein Fehler, der beim Testen leicht übersehen wird:

```java
while (number > 0) {
    number = number / 10;      // zuerst abgeschnitten ...
    sum = sum + number % 10;   // ... dann die nächste Ziffer gelesen
}
```

Für 4072 liest diese Schleife die Ziffern 7, 0, 4 und zuletzt `0 % 10 = 0`. Ergebnis 11 statt 13. Die letzte
Ziffer 2 wird abgeschnitten, bevor jemand sie liest. Richtig ist immer: erst `% 10` lesen, dann `/ 10`.
:::

:::achtung[Den Parameter aufgebraucht und danach ausgegeben]
```java
public static void printCrossSum(int number) {
    int sum = 0;
    while (number > 0) {
        sum = sum + number % 10;
        number = number / 10;
    }
    System.out.println("Quersumme von " + number + ": " + sum);
}
```

Der Aufruf `printCrossSum(4072)` gibt `Quersumme von 0: 13` aus. Nach der Schleife ist `number` immer 0, denn
genau dann endet die Schleife. Wer die ursprüngliche Zahl noch braucht, rechnet auf einer Kopie:
`int n = number;` vor der Schleife und in der Schleife nur mit `n` arbeiten.
:::

```reflexion
frage: Warum endet die Ziffernschleife für jede Zahl `n ≥ 0` nach endlich vielen Durchläufen? Wie viele Durchläufe sind es für eine `int`-Zahl höchstens?
antwort: |
  In jedem Durchlauf wird `n` durch 10 geteilt. Für `n > 0` ist `n / 10` echt kleiner als `n`, denn die letzte
  Ziffer verschwindet. Eine ganze Zahl, die immer kleiner wird und nie unter 0 fällt, muss irgendwann 0
  erreichen. Dann ist `n > 0` falsch. Der größte `int`-Wert ist 2147483647 und hat zehn Ziffern. Mehr als zehn
  Durchläufe gibt es also nie. Bei negativem `n` läuft die Schleife dagegen gar nicht, weil `n > 0` sofort falsch ist.
```

```aufgabe
id: zi-zs-ausgabe-ziffern
titel: Jede Ziffer in einer eigenen Zeile
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int n = 2583;
      while (n > 0) {
          System.out.println(n % 10);
          n = n / 10;
      }
    loesung: |
      3
      8
      5
      2
    fehler:
      - wert: "2\n5\n8\n3"
        meldung: 'Die Ziffernschleife liest immer die **letzte** Ziffer. Die Ziffern erscheinen darum von rechts nach links.'
      - wert: "3\n8\n5"
        meldung: 'Nach dem dritten Durchlauf ist `n = 2`, und `2 > 0` ist noch wahr. Die vorderste Ziffer bekommt einen eigenen Durchlauf.'
hinweise:
  - 'Schreib die Werte von `n` auf: 2583, 258, 25, 2, 0. Von jedem Wert außer 0 wird die letzte Ziffer ausgegeben.'
loesung: |
  **Ansatz:** Jeder Durchlauf gibt die letzte Ziffer aus und schneidet sie dann ab.
  ---
  `n` durchläuft 2583, 258, 25 und 2. Ausgegeben werden 3, 8, 5 und 2.
  ---
  Danach ist `n = 0`, die Schleife endet. Die Ziffern stehen in umgekehrter Reihenfolge.
```

```aufgabe
id: zi-zs-gefuehrt-groesser
titel: Ziffern größer als 4 zählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Welchen Wert liefert `countAbove4(37159)`? Löse die Aufgabe zuerst geführt.
  ```java
  public static int countAbove4(int n) {
      int count = 0;
      while (n > 0) {
          if (n % 10 > 4) {
              count++;
          }
          n = n / 10;
      }
      return count;
  }
  ```
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: 'Du hast eine Ziffer zu viel gezählt. Größer als 4 sind nur 9, 5 und 7. Prüfe die 3 und die 1 noch einmal: Beide sind kleiner als 4.'
      - wert: "2"
        meldung: 'Die vorderste Ziffer 3 ist nicht größer als 4, aber die 9 ganz rechts schon. Hast du einen Durchlauf übersprungen?'
gefuehrt:
  - text: In welcher Reihenfolge werden die Ziffern von 37159 geprüft?
    teil:
      typ: auswahl
      optionen: ['9, 5, 1, 7, 3', '3, 7, 1, 5, 9', 'nur 9, 5, 1, 7']
      richtig: [0]
    erklaerung: Die Ziffernschleife beginnt immer bei der letzten Ziffer und arbeitet sich nach links vor.
  - text: Wie viele der Ziffern 9, 5, 1, 7, 3 sind größer als 4?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 9, 5 und 7 sind größer als 4. Die 1 und die 3 nicht.
  - text: Wie oft läuft die Schleife insgesamt?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Einmal je Ziffer. 37159 hat fünf Ziffern.
  - text: Überlege, was `countAbove4(0)` liefert, und vergleiche mit der Ziffernanzahl von 0.
    erklaerung: 'Die Schleife läuft für 0 gar nicht, das Ergebnis ist 0. Hier ist das trotzdem richtig, denn die Ziffer 0 ist nicht größer als 4.'
hinweise:
  - Gehe die Ziffern von rechts nach links durch und zähle mit.
  - Die Bedingung `n % 10 > 4` prüft die aktuell letzte Ziffer.
loesung: |
  **Ansatz:** Die Schleife prüft jede Ziffer einmal, von rechts nach links.
  ---
  Ziffern 9, 5, 1, 7, 3. Größer als 4 sind 9, 5 und 7.
  ---
  Ergebnis `3`. Probe: Die Ziffern 3 und 1 sind die einzigen, die nicht zählen, 5 − 2 = 3.
```

```aufgabe
id: zi-zs-ausgabe-gerade
titel: Gerade Ziffern zählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Gerade {
          public static int countEvenDigits(int number) {
              int count = 0;
              while (number > 0) {
                  int digit = number % 10;
                  if (digit % 2 == 0) {
                      count++;
                  }
                  number = number / 10;
              }
              return count;
          }

          public static void main(String[] args) {
              int x = 4206813;
              System.out.println(countEvenDigits(x));
              System.out.println(x);
              System.out.println(countEvenDigits(135));
          }
      }
    loesung: |
      5
      4206813
      0
    fehler:
      - wert: "4\n4206813\n0"
        meldung: 'Die Ziffer 0 ist gerade, denn `0 % 2 == 0`. In 4206813 sind 4, 2, 0, 6 und 8 gerade.'
      - wert: "5\n0\n0"
        meldung: 'Die Methode verändert nur ihre Kopie `number`. Das `x` in `main` bleibt 4206813 (call-by-value).'
hinweise:
  - Eine Ziffer ist gerade, wenn sie bei Division durch 2 keinen Rest lässt. Das gilt auch für 0.
  - Die Variable `x` in `main` wird von der Methode nicht verändert.
loesung: |
  **Ansatz:** Jede Ziffer einzeln auf `digit % 2 == 0` prüfen.
  ---
  Ziffern von 4206813: 3, 1, 8, 6, 0, 2, 4. Gerade sind 8, 6, 0, 2 und 4, also 5.
  ---
  `x` bleibt 4206813, weil nur die Kopie im Parameter geteilt wird. In 135 ist keine Ziffer gerade, also 0.
```

```aufgabe
id: zi-zs-code-calccrosssum
titel: calcCrossSum nach Blatt-Vorgabe
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 3 (calcCrossSum, umformuliert)
angabe: |
  Implementiere `int calcCrossSum(int number)`. Die Methode liefert die Quersumme von `number`.
  Vorbedingung: `number > 0`. Wie auf dem Blatt sind Strings, Arrays und die Klasse `Math` verboten.

  Beispiele: `calcCrossSum(7)` liefert 7, `calcCrossSum(305)` liefert 8, `calcCrossSum(90000)` liefert 9.
teile:
  - typ: code
    vorlage: |
      public class CrossSum {
          public static int calcCrossSum(int number) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(calcCrossSum(305));
          }
      }
    musterloesung: |
      public class CrossSum {
          public static int calcCrossSum(int number) {
              int sum = 0;
              while (number > 0) {
                  sum = sum + number % 10;
                  number = number / 10;
              }
              return sum;
          }

          public static void main(String[] args) {
              System.out.println(calcCrossSum(305));
          }
      }
    tests:
      - { aufruf: "calcCrossSum(7)", erwartet: "7" }
      - { aufruf: "calcCrossSum(305)", erwartet: "8" }
      - { aufruf: "calcCrossSum(90000)", erwartet: "9", beschreibung: "Nullen am Ende" }
      - { aufruf: "calcCrossSum(2147483647)", erwartet: "46", beschreibung: "größter int-Wert" }
      - { aufruf: "calcCrossSum(1010101)", erwartet: "4", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer", "Arrays", "StringBuilder"] }
    fehler:
      - { wert: 2, meldung: "Liest du die letzte Ziffer vor dem Abschneiden? Erst `number % 10` addieren, dann `number / 10`." }
      - { wert: 1, meldung: "Bei einer einstelligen Zahl muss die Schleife genau einmal laufen. Prüfe die Bedingung `number > 0`." }
      - { wert: "verboteneApi", meldung: "Wie auf dem Blatt: keine Strings, kein `Integer.toString`, kein `Math`. Rechne mit `% 10` und `/ 10`." }
hinweise:
  - Verwende die Ziffernschleife aus dem Merke-Kasten.
  - 'Im Rumpf zuerst `sum = sum + number % 10;`, danach `number = number / 10;`.'
loesung: |
  **Ansatz:** Ziffernschleife mit einer Summe, die bei 0 beginnt.
  ---
  ```java
  int sum = 0;
  while (number > 0) {
      sum = sum + number % 10;
      number = number / 10;
  }
  return sum;
  ```
  ---
  Kontrolle: Für 305 läuft die Schleife dreimal, Summe 5 + 0 + 3 = 8. Für 2147483647 ist die Summe 46. Das passt, denn 2 + 1 + 4 + 7 + 4 + 8 + 3 + 6 + 4 + 7 = 46.
```

```aufgabe
id: zi-zs-code-countdigits
titel: Ziffern zählen, auch für 0
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `int countDigits(int number)`. Die Methode liefert die Anzahl der Ziffern von `number`.
  Vorbedingung: `number ≥ 0`. Achtung: Die Zahl 0 hat **eine** Ziffer. Keine Strings, kein `Math`.
teile:
  - typ: code
    vorlage: |
      public class Digits {
          public static int countDigits(int number) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(countDigits(507));
              System.out.println(countDigits(0));
          }
      }
    musterloesung: |
      public class Digits {
          public static int countDigits(int number) {
              int count = 0;
              do {
                  count++;
                  number = number / 10;
              } while (number > 0);
              return count;
          }

          public static void main(String[] args) {
              System.out.println(countDigits(507));
              System.out.println(countDigits(0));
          }
      }
    tests:
      - { aufruf: "countDigits(507)", erwartet: "3" }
      - { aufruf: "countDigits(0)", erwartet: "1", beschreibung: "Sonderfall 0" }
      - { aufruf: "countDigits(9)", erwartet: "1" }
      - { aufruf: "countDigits(10)", erwartet: "2" }
      - { aufruf: "countDigits(2147483647)", erwartet: "10", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer"] }
    fehler:
      - { wert: 2, meldung: "Mit `while (number > 0)` läuft die Schleife für 0 gar nicht. Nimm eine do-while-Schleife oder behandle 0 vorher mit einem `if`." }
      - { wert: 4, meldung: "10 hat zwei Ziffern. Prüfe, ob deine Schleife bei `number = 1` noch einmal läuft." }
hinweise:
  - Zähle in jedem Durchlauf um 1 hoch und schneide eine Ziffer ab.
  - Der Rumpf muss für 0 genau einmal laufen. Welche Schleifenart prüft die Bedingung erst am Ende?
loesung: |
  **Ansatz:** Ziffernschleife mit Zähler. Damit 0 eine Ziffer hat, muss der Rumpf mindestens einmal laufen.
  ---
  ```java
  int count = 0;
  do {
      count++;
      number = number / 10;
  } while (number > 0);
  return count;
  ```
  ---
  Kontrolle: 0 ergibt 1, 9 ergibt 1, 10 ergibt 2, 507 ergibt 3. Gleichwertig ist eine `while`-Schleife mit vorangestelltem `if (number == 0) { return 1; }`.
```

```aufgabe
id: zi-zs-zeilen-fehler
titel: Zwei Fehler in einer Ziffernmethode
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Methode soll die Summe der **ungeraden** Ziffern von `number` liefern (Vorbedingung `number ≥ 0`).
  Für 3527 also 3 + 5 + 7 = 15. Sie enthält Fehler. Markiere alle fehlerhaften Zeilen.
teile:
  - typ: zeilen
    code: |
      public static int sumOddDigits(int number) {
          while (number >= 0) {
              int sum = 0;
              int digit = number % 10;
              if (digit % 2 == 1) {
                  sum = sum + digit;
              }
              number = number / 10;
          }
          return sum;
      }
    loesung: [2, 3]
    fehler:
      - wert: [2]
        meldung: '`sum` wird in Zeile 3 innerhalb der Schleife angelegt. Sie beginnt in jedem Durchlauf wieder bei 0 und ist nach der Schleife nicht mehr sichtbar.'
      - wert: [3]
        meldung: 'Prüfe die Bedingung in Zeile 2 mit `number = 0`. Was ist `0 / 10`?'
      - wert: [2, 3, 10]
        meldung: 'Zeile 10 ist richtig, sobald `sum` vor der Schleife deklariert wird. Der Fehler liegt in Zeile 3.'
hinweise:
  - Prüfe, wo `sum` deklariert ist. Bis wohin ist eine Variable sichtbar?
  - Prüfe die Bedingung mit `number = 0`. Endet die Schleife dann?
loesung: |
  **Ansatz:** Bedingung, Ort der Deklaration und Rumpf einzeln prüfen.
  ---
  Zeile 2: `number >= 0` bleibt wahr, weil `0 / 10 = 0`. Endlosschleife. Richtig ist `number > 0`.
  ---
  Zeile 3: `sum` gehört vor die Schleife. Innerhalb der Schleife wird sie jedes Mal neu auf 0 gesetzt, und `return sum;` kompiliert nicht (Sichtbarkeit, siehe [6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen)).
  ---
  Die übrigen Zeilen sind richtig. `digit % 2 == 1` erkennt ungerade Ziffern, weil Ziffern nie negativ sind.
```

```aufgabe
id: zi-zs-lueckentext-groesser
titel: Ziffern über einer Grenze zählen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  `countDigitsAbove(number, limit)` soll zählen, wie viele Ziffern von `number` größer als `limit` sind.
  Vorbedingung: `number ≥ 0`, `0 ≤ limit ≤ 9`. Ergänze die Lücken. Das Programm soll `2` ausgeben.
teile:
  - typ: lueckentext
    code: |
      public class Above {
          public static int countDigitsAbove(int number, int limit) {
              int count = ___;
              while (number ___ 0) {
                  if (number ___ 10 > limit) {
                      count++;
                  }
                  number = number ___ 10;
              }
              return count;
          }

          public static void main(String[] args) {
              System.out.println(countDigitsAbove(4817, 5));
          }
      }
    luecken: [["0"], [">", "!="], ["%"], ["/"]]
    fehler:
      - wert: ["0", ">", "/", "%"]
        meldung: '`%` und `/` sind vertauscht. `number % 10` ist die letzte Ziffer, `number / 10` schneidet sie ab.'
      - wert: ["1", ">", "%", "/"]
        meldung: 'Ein Zähler beginnt bei 0. Mit 1 wäre das Ergebnis immer um eins zu groß.'
hinweise:
  - Ein Zähler beginnt bei 0. Die Schleife läuft, solange noch Ziffern übrig sind.
  - Die letzte Ziffer liefert `%`, das Abschneiden erledigt `/`.
loesung: |
  **Ansatz:** Ziffernschleife mit Zähler und `if`.
  ---
  Lücken: `0`, `>` (oder `!=`, weil `number` nie negativ wird), `%`, `/`.
  ---
  Kontrolle mit 4817 und Grenze 5: Ziffern 7, 1, 8, 4. Größer als 5 sind 7 und 8, also `2`.
```

```aufgabe
id: zi-zs-code-countdigit
titel: Wie oft kommt eine Ziffer vor?
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Einstufungstest-Stil, Inhalt neu (Ad-hoc-Sammlung 2017W, Zifferhistogramm als Anregung)
angabe: |
  Implementiere `int countDigit(int number, int digit)`. Die Methode zählt, wie oft die Ziffer `digit` in
  `number` vorkommt. Vorbedingung: `number ≥ 0` und `0 ≤ digit ≤ 9`. Keine Strings, kein `Math`.

  Beispiele: `countDigit(7077, 7)` liefert 3, `countDigit(100, 0)` liefert 2, `countDigit(0, 0)` liefert 1.
teile:
  - typ: code
    vorlage: |
      public class Count {
          public static int countDigit(int number, int digit) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(countDigit(7077, 7));
          }
      }
    musterloesung: |
      public class Count {
          public static int countDigit(int number, int digit) {
              int count = 0;
              do {
                  if (number % 10 == digit) {
                      count++;
                  }
                  number = number / 10;
              } while (number > 0);
              return count;
          }

          public static void main(String[] args) {
              System.out.println(countDigit(7077, 7));
          }
      }
    tests:
      - { aufruf: "countDigit(7077, 7)", erwartet: "3" }
      - { aufruf: "countDigit(7077, 0)", erwartet: "1", beschreibung: "Null in der Mitte" }
      - { aufruf: "countDigit(100, 0)", erwartet: "2" }
      - { aufruf: "countDigit(0, 0)", erwartet: "1", beschreibung: "die Zahl 0 enthält die Ziffer 0" }
      - { aufruf: "countDigit(0, 5)", erwartet: "0" }
      - { aufruf: "countDigit(123456789, 9)", erwartet: "1", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer"] }
    fehler:
      - { wert: 4, meldung: "Für `number = 0` muss der Rumpf einmal laufen, sonst wird die Ziffer 0 nie gezählt. Verwende do-while." }
      - { wert: 1, meldung: "Vergleiche die **Ziffer** `number % 10` mit `digit`, nicht die ganze Zahl." }
hinweise:
  - Vergleiche in jedem Durchlauf die letzte Ziffer mit `digit`.
  - 'Der Sonderfall `countDigit(0, 0)` braucht einen Durchlauf mit der Ziffer 0. Welche Schleifenart garantiert das?'
loesung: |
  **Ansatz:** Ziffernschleife mit Zähler. Wie beim Ziffernzählen braucht die Zahl 0 einen Durchlauf.
  ---
  ```java
  int count = 0;
  do {
      if (number % 10 == digit) {
          count++;
      }
      number = number / 10;
  } while (number > 0);
  return count;
  ```
  ---
  Kontrolle: 7077 liefert die Ziffern 7, 7, 0, 7, also dreimal 7 und einmal 0. Bei `countDigit(0, 0)` läuft der Rumpf einmal, `0 % 10 == 0`, Ergebnis 1.
```

```aufgabe
id: zi-zs-ausgabe-zwei-methoden
titel: Zwei unbekannte Ziffernmethoden
niveau: 3
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Überlege danach, was `r` und `s` allgemein berechnen.
teile:
  - typ: ausgabe
    code: |
      public class Raetsel {
          public static int r(int n) {
              int m = 0;
              while (n > 0) {
                  int z = n % 10;
                  if (z > m) {
                      m = z;
                  }
                  n = n / 10;
              }
              return m;
          }

          public static int s(int n) {
              int a = 0;
              int vz = 1;
              while (n > 0) {
                  a = a + vz * (n % 10);
                  vz = -vz;
                  n = n / 10;
              }
              return a;
          }

          public static void main(String[] args) {
              System.out.println(r(3917));
              System.out.println(s(3917));
              System.out.println(r(0) + s(0));
          }
      }
    loesung: |
      9
      12
      0
    fehler:
      - wert: "9\n-12\n0"
        meldung: '`s` beginnt mit `vz = 1` bei der **letzten** Ziffer. Die 7 wird addiert, die 1 abgezogen, die 9 addiert, die 3 abgezogen.'
      - wert: "9\n20\n0"
        meldung: '`vz` wechselt in jedem Durchlauf das Vorzeichen. Nur jede zweite Ziffer wird addiert, die anderen werden abgezogen.'
hinweise:
  - '`r` merkt sich in `m` den bisher größten Wert. `s` wechselt bei jeder Ziffer zwischen plus und minus.'
  - 'Ziffern von 3917 von rechts: 7, 1, 9, 3.'
loesung: |
  **Ansatz:** Beide Methoden mit einer Tabelle über die Ziffern 7, 1, 9, 3 verfolgen.
  ---
  `r(3917)`: `m` wird 7, bleibt 7 bei der 1, wird 9, bleibt 9. Ergebnis 9. `r` liefert die **größte Ziffer**.
  ---
  `s(3917)`: +7 − 1 + 9 − 3 = 12. `s` ist die **alternierende Quersumme**, von rechts mit plus beginnend.
  ---
  Für 0 laufen beide Schleifen nicht, beide liefern 0. Ausgabe `9`, `12`, `0`.
```

## Zahlen umdrehen und aus Ziffern aufbauen

```aufgabe
id: zi-um-check-ueberlauf
titel: Größer als der größte int
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Den Überlauf kennst du aus
  [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
teile:
  - typ: ausgabe
    code: |
      int x = 2147483647;
      x = x + 1;
      System.out.println(x);
    loesung: |
      -2147483648
    fehler:
      - wert: "2147483648"
        meldung: '2147483647 ist der größte `int`-Wert. Eine größere Zahl passt nicht hinein. Java meldet keinen Fehler, sondern springt zum kleinsten Wert.'
hinweise:
  - Der Wertebereich von `int` reicht von −2147483648 bis 2147483647.
loesung: |
  `2147483647` ist `Integer.MAX_VALUE`. Plus 1 passt nicht mehr in ein `int`.
  ---
  Die Rechnung läuft über und landet beim kleinsten Wert −2147483648. Java warnt nicht.
```

Bisher haben wir Zahlen zerlegt. Jetzt geht es in die Gegenrichtung: aus einzelnen Ziffern eine Zahl
**aufbauen**. Stell dir einen Taschenrechner vor. Du tippst 3, dann 0, dann 8. Nach jeder Taste rückt die
bisherige Anzeige eine Stelle nach links, und die neue Ziffer erscheint rechts. Aus 3 wird 30, dann 308.
„Eine Stelle nach links rücken“ ist dasselbe wie „mal 10“. Die neue Ziffer kommt dann dazu.

:::beispiel[Die Zahl 308 Ziffer für Ziffer aufbauen]
```java
int r = 0;
r = r * 10 + 3;
r = r * 10 + 0;
r = r * 10 + 8;
System.out.println(r);
```

1. `r` beginnt bei 0. Noch ist keine Ziffer da.
2. `0 * 10 + 3 = 3`. Die 3 steht jetzt allein.
3. `3 * 10 + 0 = 30`. Die 3 rückt nach links, rechts kommt die 0 dazu.
4. `30 * 10 + 8 = 308`. Die 30 rückt nach links, rechts kommt die 8 dazu.
5. Ausgegeben wird `308`.

Merke dir die Zeile `r = r * 10 + ziffer;`. Sie hängt eine Ziffer **rechts** an die bisherige Zahl an.
:::

### Die Umkehrzahl

Jetzt verbinden wir beide Richtungen. Die Ziffernschleife liefert die Ziffern von rechts nach links. Wenn wir
jede gelieferte Ziffer sofort rechts an `r` anhängen, steht am Ende die erste gelieferte Ziffer ganz links. Die
Zahl ist umgedreht.

:::definition[Umkehrzahl und Palindromzahl]
Die **Umkehrzahl** einer Zahl `n ≥ 0` entsteht, wenn man ihre Ziffern in umgekehrter Reihenfolge liest.
Nullen, die dabei vorne landen, fallen weg, weil eine Zahl keine führenden Nullen hat.

Eine **Palindromzahl** ist eine Zahl, die vorwärts und rückwärts gleich lautet. Das Wort *Palindrom* kommt aus
dem Griechischen und heißt „rückwärts laufend“. Eine Zahl ist genau dann eine Palindromzahl, wenn sie gleich
ihrer Umkehrzahl ist.
:::

**Beispiele:** Die Umkehrzahl von 4072 ist 2704. 12321, 4554 und 7 sind Palindromzahlen.
**Kein Beispiel:** 1230 ist keine Palindromzahl. Rückwärts gelesen ergibt sich 0321, also die Zahl 321, und
321 ist nicht 1230. Auch 4072 ist keine, denn 2704 ist nicht 4072.

```aufgabe
id: zi-um-ausgabe-aufbauen
titel: Eine Zahl aufbauen und ausgeben
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int r = 0;
      r = r * 10 + 7;
      r = r * 10 + 0;
      System.out.println(r);
      r = r * 10 + 5;
      System.out.println(r);
      System.out.println(r * 10 + 0);
    loesung: |
      70
      705
      7050
    fehler:
      - wert: "7\n75\n750"
        meldung: 'Auch die Ziffer 0 wird angehängt: `7 * 10 + 0 = 70`. Die 7 rückt eine Stelle nach links.'
      - wert: "70\n705\n705"
        meldung: '`r * 10 + 0` rückt alle Ziffern nach links und hängt eine 0 an. Das ergibt 7050, auch wenn `r` selbst unverändert bleibt.'
hinweise:
  - '`r * 10 + ziffer` hängt die Ziffer rechts an.'
loesung: |
  **Ansatz:** Jede Zeile hängt eine Ziffer rechts an.
  ---
  `0 → 7 → 70`, Ausgabe `70`. Dann `70 * 10 + 5 = 705`, Ausgabe `705`.
  ---
  Die letzte Zeile rechnet `705 * 10 + 0 = 7050`, speichert das aber nicht in `r`. Ausgabe `7050`.
```

:::beispiel[reverse(4072) Zeile für Zeile]
```java
public static int reverse(int number) {
    int result = 0;
    while (number > 0) {
        int digit = number % 10;
        result = result * 10 + digit;
        number = number / 10;
    }
    return result;
}
```

Der Rumpf ist die Ziffernschleife aus [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme).
Neu ist nur die mittlere Zeile: Statt zu addieren, hängen wir die Ziffer an `result` an.

| Durchlauf | `number` beim Test | `digit` | `result` danach | `number` danach |
|---|---|---|---|---|
| 1. | 4072 | 2 | 2 | 407 |
| 2. | 407 | 7 | 27 | 40 |
| 3. | 40 | 0 | 270 | 4 |
| 4. | 4 | 4 | 2704 | 0 |

1. Die 2 wird zuerst gelesen und landet zuerst in `result`. Bei jedem weiteren Durchlauf rückt sie eine Stelle nach links.
2. Die 7 kommt als zweite dazu: `2 * 10 + 7 = 27`.
3. Die 0 ist eine echte Ziffer: `27 * 10 + 0 = 270`.
4. Die 4 kommt zuletzt und steht deshalb ganz rechts: `270 * 10 + 4 = 2704`.

Ergebnis: `reverse(4072)` liefert 2704. Mit dieser Methode ist die Prüfung auf ein Palindrom eine Zeile:
`return reverse(number) == number;`.
:::

```aufgabe
id: zi-um-trace-reverse
titel: reverse(3910) verfolgen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Verfolge `reverse(3910)` mit der Methode aus dem Beispiel. Trage nach jedem Durchlauf `number` und `result` ein.
teile:
  - typ: trace
    spalten: [number, result]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4]
    vorgabe: 1
    loesung: [[3910, 0], [391, 0], [39, 1], [3, 19], [0, 193]]
    fehler:
      - wert: ["3910", "0", "391", "0", "39", "1", "3", "19", "0", "1930"]
        meldung: 'Im letzten Durchlauf wird die 3 angehängt: `19 * 10 + 3 = 193`. Eine Null am Ende entsteht nur, wenn eine 0 angehängt wird.'
      - wert: ["3910", "0", "391", "0", "39", "10", "3", "109", "0", "1093"]
        meldung: 'Im zweiten Durchlauf ist `result` noch 0. `0 * 10 + 1 = 1`, nicht 10. Die führende Null verschwindet.'
hinweise:
  - Im ersten Durchlauf wird die 0 angehängt. `0 * 10 + 0` bleibt 0.
loesung: |
  **Ansatz:** Je Durchlauf `result = result * 10 + number % 10`, dann `number = number / 10`.
  ---
  Ziffern von rechts: 0, 1, 9, 3. `result`: 0, 1, 19, 193.
  ---
  Ergebnis 193. Die Null vom Ende von 3910 stünde vorne und fällt deshalb weg.
```

:::achtung[Führende Nullen gehen verloren]
Wer erwartet, dass zweimaliges Umdrehen die Zahl zurückbringt, irrt sich bei Nullen am Ende:

```java
System.out.println(reverse(1200));            // 21, nicht 0021
System.out.println(reverse(reverse(1200)));   // 12, nicht 1200
```

Eine `int`-Variable speichert nur den Wert. „0021“ und „21“ sind derselbe Wert. Darum ist eine Zahl mit 0 am
Ende nie eine Palindromzahl, außer der 0 selbst. Brauchst du die Nullen, musst du die Ziffernanzahl getrennt
merken.
:::

:::achtung[Die Umkehrzahl passt nicht mehr in int]
Die Zahl 1999999999 passt in ein `int`. Ihre Umkehrzahl 9999999991 passt nicht, sie ist größer als 2147483647.

```java
System.out.println(reverse(1999999999));   // 1410065399
```

Java rechnet ohne Fehlermeldung weiter, und `result * 10` läuft über. Heraus kommt eine sinnlose Zahl. Abhilfe:
`result` als `long` deklarieren und `long` zurückgeben. Bei Palindromzahlen tritt das Problem nicht auf, weil
die Umkehrzahl dort gleich der Zahl ist.
:::

:::achtung[Die Ziffer mal 10 statt die Zahl mal 10]
```java
result = result + digit * 10;   // falsch
```

Hier wird nicht die bisherige Zahl verschoben, sondern jede Ziffer einzeln mal 10 genommen und addiert. Für 4072
ergibt das 20 + 70 + 0 + 40 = 130 statt 2704. Verschoben werden muss `result`, also `result * 10 + digit`.
:::

```aufgabe
id: zi-um-gefuehrt-reverse
titel: reverse(5160) geführt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Welchen Wert liefert `reverse(5160)` mit der Methode aus dem Beispiel? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "615"
    fehler:
      - wert: "6150"
        meldung: 'Die 0 am Ende von 5160 wird zuerst gelesen. Sie landet vorne und fällt als führende Null weg.'
      - wert: "516"
        meldung: 'Das ist die Zahl ohne letzte Ziffer. Gefragt ist die Umkehrzahl.'
gefuehrt:
  - text: Welche Ziffer wird im ersten Durchlauf gelesen?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`5160 % 10` ist 0. Die letzte Ziffer kommt zuerst.'
  - text: Welchen Wert hat `result` nach dem ersten Durchlauf?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`0 * 10 + 0 = 0`. Die führende Null ist schon verschwunden.'
  - text: Welchen Wert hat `result` nach dem zweiten und dritten Durchlauf?
    teil:
      typ: auswahl
      optionen: ['6, dann 61', '60, dann 610', '6, dann 16']
      richtig: [0]
    erklaerung: 'Ziffer 6: `0 * 10 + 6 = 6`. Ziffer 1: `6 * 10 + 1 = 61`.'
  - text: Welchen Wert hat `result` am Ende?
    teil: { typ: zahl, loesung: "615" }
    erklaerung: 'Die 5 wird zuletzt angehängt: `61 * 10 + 5 = 615`.'
hinweise:
  - Die Ziffern kommen in der Reihenfolge 0, 6, 1, 5.
  - Eine 0 am Anfang von `result` zählt nicht.
loesung: |
  **Ansatz:** Ziffern von rechts lesen und rechts an `result` anhängen.
  ---
  Ziffern 0, 6, 1, 5. `result`: 0, 6, 61, 615.
  ---
  Ergebnis 615. Probe: 5160 rückwärts gelesen ist 0615, ohne führende Null 615.
```

### Die Reihenfolge behalten: mit Stellenwert aufbauen

Manchmal soll die neue Zahl die Ziffern in der **ursprünglichen** Reihenfolge enthalten, nur verändert. Ein
Beispiel: Alle Nullen sollen verschwinden, aus 40702 wird 472. Die Ziffernschleife liefert aber die Ziffern von
hinten. Hängt man sie rechts an, dreht man die Zahl um. Der Ausweg: Man setzt jede Ziffer **links** vor das
bisherige Ergebnis. Dazu merkt man sich in einer zweiten Variable `p` den Stellenwert der nächsten freien
Stelle: erst 1, dann 10, dann 100.

:::beispiel[Alle Nullen aus 40702 entfernen]
```java
public static int removeZeros(int number) {
    int result = 0;
    int p = 1;                          // Stellenwert der nächsten Stelle
    while (number > 0) {
        int digit = number % 10;
        if (digit != 0) {
            result = result + digit * p;   // Ziffer links davorsetzen
            p = p * 10;
        }
        number = number / 10;
    }
    return result;
}
```

Verfolgt für `removeZeros(40702)`:

1. Ziffer 2: nicht 0. `result = 0 + 2 · 1 = 2`, `p = 10`.
2. Ziffer 0: wird übersprungen. `result` und `p` bleiben gleich.
3. Ziffer 7: `result = 2 + 7 · 10 = 72`, `p = 100`.
4. Ziffer 0: übersprungen.
5. Ziffer 4: `result = 72 + 4 · 100 = 472`, `p = 1000`.

Ergebnis 472. Die Ziffern 4, 7, 2 stehen in der ursprünglichen Reihenfolge. `p` wächst nur, wenn wirklich eine
Ziffer gesetzt wurde. So entstehen keine Lücken.
:::

:::merke[Zwei Arten, eine Zahl aufzubauen]
1. **Rechts anhängen:** `result = result * 10 + digit;`. Mit der Ziffernschleife kombiniert dreht das die Reihenfolge um.
2. **Links davorsetzen:** `result = result + digit * p; p = p * 10;` mit `p` ab 1. Das behält die Reihenfolge.
3. Bei beiden Arten fallen Nullen ganz vorne im Ergebnis weg.
4. Wird das Ergebnis größer als 2147483647, läuft `int` über. Dann hilft `long`.
:::

```reflexion
frage: Warum steht bei `result = result * 10 + digit` die zuerst gelesene Ziffer am Ende ganz links? Erkläre es mit dem Wort „Stellenwert“.
antwort: |
  Jedes `* 10` rückt alle Ziffern, die schon in `result` stehen, um eine Stelle nach links und erhöht ihren
  Stellenwert. Die zuerst gelesene Ziffer ist am längsten dabei und wird darum am öftesten mit 10
  multipliziert. Bei vier Ziffern dreimal, also landet sie auf der Tausenderstelle. Die zuletzt gelesene Ziffer
  wird gar nicht mehr verschoben und bleibt bei den Einern. Die Ziffernschleife liest aber die letzte Ziffer
  zuerst. Deshalb kehrt sich die Reihenfolge um.
```

```aufgabe
id: zi-um-lueckentext-reverse
titel: Die Umkehrzahl ergänzen
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass der Code die Umkehrzahl von `n` ausgibt. Für `n = 865` also `568`.
teile:
  - typ: lueckentext
    code: |
      int n = 865;
      int r = 0;
      while (n > 0) {
          r = r ___ 10 + n ___ 10;
          n = n / 10;
      }
      System.out.println(r);
    luecken: [["*"], ["%"]]
    fehler:
      - wert: ["+", "%"]
        meldung: '`r + 10` verschiebt nichts. Um Platz für die neue Ziffer zu machen, muss `r` mal 10 genommen werden.'
      - wert: ["*", "/"]
        meldung: '`n / 10` ist die Zahl ohne letzte Ziffer, also mehrere Ziffern. Angehängt wird nur die letzte Ziffer `n % 10`.'
hinweise:
  - 'Zuerst rückt `r` eine Stelle nach links, dann kommt die letzte Ziffer von `n` dazu.'
loesung: |
  **Ansatz:** Rechts anhängen mit `r * 10 + ziffer`, die Ziffer liefert `n % 10`.
  ---
  Lücken: `*` und `%`. Ablauf für 865: `r` wird 5, 56, 568. Ausgabe `568`.
```

```aufgabe
id: zi-um-ausgabe-verdoppeln
titel: Jede Ziffer verdoppeln
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Methode ersetzt jede Ziffer `z` durch die letzte Ziffer von `2 · z`. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Doppelt {
          public static int doubleDigits(int number) {
              int result = 0;
              int p = 1;
              while (number > 0) {
                  int z = number % 10;
                  result = result + (2 * z % 10) * p;
                  p = p * 10;
                  number = number / 10;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(doubleDigits(4092));
              System.out.println(doubleDigits(55));
              System.out.println(doubleDigits(13));
          }
      }
    loesung: |
      8084
      0
      26
    fehler:
      - wert: "4808\n0\n62"
        meldung: 'Mit `* p` wird jede neue Ziffer **links** vor das Ergebnis gesetzt. Die Reihenfolge bleibt erhalten, sie dreht sich nicht um.'
      - wert: "8084\n00\n26"
        meldung: 'Aus 5 wird `10 % 10 = 0`. Das Ergebnis 00 ist als Zahl einfach 0, führende Nullen gibt es nicht.'
hinweise:
  - 'Rechne für jede Ziffer `2 * z % 10`: 4 wird 8, 9 wird 8 (aus 18), 2 wird 4.'
  - 'Die Stellenwert-Variable `p` sorgt dafür, dass die Reihenfolge gleich bleibt.'
loesung: |
  **Ansatz:** Jede Ziffer einzeln umrechnen und mit `p` an ihre ursprüngliche Stelle setzen.
  ---
  4092: 2 → 4, 9 → 8, 0 → 0, 4 → 8. Zusammengesetzt 8084.
  ---
  55: beide Ziffern werden 0, Ergebnis 0. 13: 1 → 2, 3 → 6, Ergebnis 26.
```

```aufgabe
id: zi-um-rf-aussagen
titel: Aussagen über die Umkehrzahl
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  `reverse` ist die Methode aus dem Beispiel mit `int`-Ergebnis. Beurteile jede Aussage für `n ≥ 0`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`reverse(reverse(n)) == n` gilt für jedes `n ≥ 0`.'
        richtig: false
        erklaerung: 'Gegenbeispiel 1200: `reverse(1200) = 21`, und `reverse(21) = 12`.'
      - text: 'Eine Zahl `n > 0` mit `n % 10 == 0` ist nie eine Palindromzahl.'
        richtig: true
        erklaerung: 'Ihre Umkehrzahl hat eine Ziffer weniger, weil die Null vorne wegfällt. Sie ist also kleiner als `n`.'
      - text: 'Für jede einstellige Zahl `n` gilt `reverse(n) == n`.'
        richtig: true
        erklaerung: 'Bei einer Ziffer gibt es nichts umzudrehen. Für `n = 0` läuft die Schleife nicht und liefert ebenfalls 0.'
      - text: 'Liegt `n` im `int`-Bereich, liegt auch `reverse(n)` im `int`-Bereich.'
        richtig: false
        erklaerung: '1999999999 ist ein `int`, die Umkehrzahl 9999999991 nicht. Das Ergebnis läuft über.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Probiere Aussage 1 mit einer Zahl, die auf 0 endet.'
      - wert: [f, r, r, r]
        meldung: 'Probiere Aussage 4 mit einer zehnstelligen Zahl, deren letzte Ziffer groß ist.'
hinweise:
  - Suche zu jeder Aussage ein Gegenbeispiel. Denk an Nullen am Ende und an sehr große Zahlen.
  - Der größte `int`-Wert ist 2147483647.
loesung: |
  **Ansatz:** Für jede Aussage gezielt Randfälle probieren: Nullen am Ende, einstellige Zahlen, sehr große Zahlen.
  ---
  Aussage 1 ist falsch (1200 → 21 → 12). Aussage 2 ist richtig, weil die Umkehrzahl eine Stelle kürzer wird.
  ---
  Aussage 3 ist richtig. Aussage 4 ist falsch: 1999999999 kehrt sich zu 9999999991 um, das ist größer als 2147483647.
```

```aufgabe
id: zi-um-code-reverse
titel: reverse schreiben
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `int reverse(int number)`. Die Methode liefert die Umkehrzahl von `number`.
  Vorbedingung: `number ≥ 0`, und die Umkehrzahl passt in ein `int`. Keine Strings, kein `Math`.

  Beispiele: `reverse(865)` liefert 568, `reverse(3910)` liefert 193, `reverse(0)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Reverse {
          public static int reverse(int number) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(reverse(865));
          }
      }
    musterloesung: |
      public class Reverse {
          public static int reverse(int number) {
              int result = 0;
              while (number > 0) {
                  result = result * 10 + number % 10;
                  number = number / 10;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(reverse(865));
          }
      }
    tests:
      - { aufruf: "reverse(865)", erwartet: "568" }
      - { aufruf: "reverse(3910)", erwartet: "193", beschreibung: "Null am Ende" }
      - { aufruf: "reverse(0)", erwartet: "0" }
      - { aufruf: "reverse(7)", erwartet: "7" }
      - { aufruf: "reverse(1463847412)", erwartet: "2147483641", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Stimmt die Reihenfolge? `result * 10 + number % 10` hängt rechts an und dreht damit um." }
      - { wert: "verboteneApi", meldung: "Kein `StringBuilder.reverse` und keine Strings. Rechne mit `% 10`, `/ 10` und `* 10`." }
hinweise:
  - Kombiniere die Ziffernschleife mit dem Anhängen `result = result * 10 + ziffer`.
  - Für 0 läuft die Schleife nicht. Das Ergebnis 0 ist trotzdem richtig.
loesung: |
  **Ansatz:** Ziffern von rechts lesen und rechts an `result` anhängen.
  ---
  ```java
  int result = 0;
  while (number > 0) {
      result = result * 10 + number % 10;
      number = number / 10;
  }
  return result;
  ```
  ---
  Kontrolle: 865 → 5 → 56 → 568. Für 3910 entsteht 0, 1, 19, 193, die Null fällt vorne weg.
```

```aufgabe
id: zi-um-code-palindrom
titel: Ist die Zahl ein Palindrom?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `boolean isPalindrome(int number)`. Sie liefert `true`, wenn `number` vorwärts und rückwärts
  gleich lautet. Vorbedingung: `number ≥ 0`. Keine Strings, kein `Math`, keine weitere Methode.

  Beispiele: `isPalindrome(4554)` liefert `true`, `isPalindrome(4550)` liefert `false`.
teile:
  - typ: code
    vorlage: |
      public class Palindrom {
          public static boolean isPalindrome(int number) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(isPalindrome(4554));
          }
      }
    musterloesung: |
      public class Palindrom {
          public static boolean isPalindrome(int number) {
              int n = number;
              int reversed = 0;
              while (n > 0) {
                  reversed = reversed * 10 + n % 10;
                  n = n / 10;
              }
              return reversed == number;
          }

          public static void main(String[] args) {
              System.out.println(isPalindrome(4554));
          }
      }
    tests:
      - { aufruf: "isPalindrome(4554)", erwartet: "true" }
      - { aufruf: "isPalindrome(12321)", erwartet: "true" }
      - { aufruf: "isPalindrome(4550)", erwartet: "false", beschreibung: "Null am Ende" }
      - { aufruf: "isPalindrome(0)", erwartet: "true" }
      - { aufruf: "isPalindrome(123)", erwartet: "false" }
      - { aufruf: "isPalindrome(2147447412)", erwartet: "true", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Vergleichst du mit der ursprünglichen Zahl? Nach der Schleife ist der Parameter 0, wenn du ihn selbst geteilt hast. Rechne auf einer Kopie." }
      - { wert: "keineHilfsmethoden", meldung: "Die Umkehrzahl muss hier in derselben Methode berechnet werden. Eine eigene Methode `reverse` ist nicht erlaubt." }
hinweise:
  - Du brauchst die ursprüngliche Zahl am Ende noch. Lege vor der Schleife eine Kopie an.
  - Berechne die Umkehrzahl der Kopie und vergleiche sie mit `number`.
loesung: |
  **Ansatz:** Umkehrzahl auf einer Kopie berechnen und mit dem Original vergleichen.
  ---
  ```java
  int n = number;
  int reversed = 0;
  while (n > 0) {
      reversed = reversed * 10 + n % 10;
      n = n / 10;
  }
  return reversed == number;
  ```
  ---
  Kontrolle: 4554 → 4554, also `true`. 4550 → 554, also `false`. Für 0 ist die Umkehrzahl 0, also `true`. Ohne Kopie wäre `number` am Ende 0, und der Vergleich wäre fast immer falsch.
```

```aufgabe
id: zi-um-code-removedigit
titel: Eine Ziffer überall entfernen
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 2 (removeNumbersInString) als Zahlenvariante, Inhalt neu
angabe: |
  Implementiere `int removeDigit(int number, int digit)`. Die Methode liefert die Zahl, die entsteht, wenn
  man jedes Vorkommen der Ziffer `digit` aus `number` streicht. Die übrigen Ziffern behalten ihre Reihenfolge.
  Bleibt keine Ziffer übrig, ist das Ergebnis 0. Vorbedingung: `number ≥ 0`, `0 ≤ digit ≤ 9`.
  Keine Strings, kein `Math`.

  Beispiele: `removeDigit(37383, 3)` liefert 78, `removeDigit(40702, 0)` liefert 472, `removeDigit(555, 5)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Remove {
          public static int removeDigit(int number, int digit) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(removeDigit(37383, 3));
          }
      }
    musterloesung: |
      public class Remove {
          public static int removeDigit(int number, int digit) {
              int result = 0;
              int p = 1;
              while (number > 0) {
                  int z = number % 10;
                  if (z != digit) {
                      result = result + z * p;
                      p = p * 10;
                  }
                  number = number / 10;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(removeDigit(37383, 3));
          }
      }
    tests:
      - { aufruf: "removeDigit(37383, 3)", erwartet: "78" }
      - { aufruf: "removeDigit(40702, 0)", erwartet: "472" }
      - { aufruf: "removeDigit(555, 5)", erwartet: "0", beschreibung: "nichts bleibt übrig" }
      - { aufruf: "removeDigit(2468, 9)", erwartet: "2468", beschreibung: "Ziffer kommt nicht vor" }
      - { aufruf: "removeDigit(9081, 9)", erwartet: "81", beschreibung: "Null wird führende Null" }
      - { aufruf: "removeDigit(2147483647, 4)", erwartet: "2178367", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Kommt 87 statt 78 heraus? Rechts anhängen dreht die Reihenfolge um. Setze die Ziffern mit einem Stellenwert `p` links davor." }
      - { wert: 2, meldung: "Erhöhe `p` nur, wenn du wirklich eine Ziffer gesetzt hast. Sonst entstehen Nullen als Lücken." }
hinweise:
  - Das Muster ist „links davorsetzen“ mit einer Stellenwert-Variable `p`, die bei 1 beginnt.
  - 'Nur wenn die Ziffer bleibt: `result = result + z * p;` und danach `p = p * 10;`.'
loesung: |
  **Ansatz:** Ziffernschleife, Reihenfolge behalten, also mit Stellenwert `p` aufbauen.
  ---
  ```java
  int result = 0;
  int p = 1;
  while (number > 0) {
      int z = number % 10;
      if (z != digit) {
          result = result + z * p;
          p = p * 10;
      }
      number = number / 10;
  }
  return result;
  ```
  ---
  Kontrolle mit 37383 und Ziffer 3: Die 3 rechts wird übersprungen. Die 8 bekommt den Stellenwert `p = 1`. Die nächste 3 wird übersprungen. Die 7 bekommt den Stellenwert `p = 10`, die letzte 3 wird wieder übersprungen. Ergebnis 7 · 10 + 8 = 78. Bei 9081 ohne 9 bleibt 081, also 81.
```

```aufgabe
id: zi-um-ausgabe-ueberlauf
titel: Umdrehen mit int und mit long
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Die beiden Methoden unterscheiden sich nur im Typ. Was gibt das Programm aus? Zur Kontrolle:
  2³² = 4294967296.
teile:
  - typ: ausgabe
    code: |
      public class Ueberlauf {
          public static int reverseInt(int n) {
              int r = 0;
              while (n > 0) {
                  r = r * 10 + n % 10;
                  n = n / 10;
              }
              return r;
          }

          public static long reverseLong(long n) {
              long r = 0;
              while (n > 0) {
                  r = r * 10 + n % 10;
                  n = n / 10;
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(reverseInt(1000000009));
              System.out.println(reverseLong(1000000009));
              System.out.println(reverseInt(1000000001));
          }
      }
    loesung: |
      410065409
      9000000001
      1000000001
    fehler:
      - wert: "9000000001\n9000000001\n1000000001"
        meldung: '9000000001 ist größer als der größte `int`-Wert 2147483647. In `reverseInt` läuft die letzte Multiplikation über.'
      - wert: "410065409\n410065409\n1000000001"
        meldung: 'In `reverseLong` rechnet alles mit `long`. Der Wertebereich reicht bis etwa 9,2 · 10¹⁸, da passt 9000000001 hinein.'
hinweise:
  - Die Umkehrzahl von 1000000009 ist 9000000001. Passt sie in ein `int`?
  - 'Läuft ein `int` über, ist das Ergebnis der richtige Wert minus ein Vielfaches von 2³².'
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob die Umkehrzahl in den Zieltyp passt.
  ---
  Zeile 1: Die Umkehrzahl 9000000001 ist größer als 2147483647. Im letzten Schritt `900000000 * 10 + 1` läuft `int` über. Ergebnis 9000000001 − 2 · 4294967296 = 410065409.
  ---
  Zeile 2: Mit `long` passt der Wert, Ergebnis 9000000001. Zeile 3: 1000000001 ist eine Palindromzahl, die Umkehrzahl ist die Zahl selbst und passt.
  ---
  Begründung für die Praxis: Wer nicht sicher ist, dass die Umkehrzahl passt, rechnet mit `long`. Java selbst warnt bei einem Überlauf nie.
```

## Teilbarkeit und Harshad-Zahlen

```aufgabe
id: zi-ha-check-intervall
titel: Wie viele Zahlen im Intervall?
niveau: 1
art: check
angabe: |
  Wie oft läuft `for (int i = 5; i <= 12; i++)`? Intervallgrenzen kennst du aus
  [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
teile:
  - typ: zahl
    loesung: "12 - 5 + 1"
    fehler:
      - wert: "7"
        meldung: 'Beide Grenzen gehören dazu, weil die Bedingung `i <= 12` lautet. Gezählt werden 5, 6, 7, 8, 9, 10, 11 und 12.'
hinweise:
  - Im geschlossenen Intervall [a, b] liegen b − a + 1 ganze Zahlen.
loesung: |
  `i` nimmt die Werte 5 bis 12 an, beide Grenzen eingeschlossen.
  ---
  Das sind 12 − 5 + 1 = 8 Durchläufe.
```

Eine Zahl `a` ist **durch `t` teilbar**, wenn beim Teilen kein Rest bleibt. Man sagt dann auch, `t` ist ein
**Teiler** von `a`. In Java prüfst du das mit `a % t == 0`. Beispiel: 12 ist durch 4 teilbar, denn
`12 % 4 == 0`. 12 ist nicht durch 5 teilbar, denn `12 % 5` ist 2.

Mit der Quersumme aus [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme)
lässt sich eine besondere Art von Zahlen beschreiben. Sie kommt auf Aufgabenblatt 2 immer wieder vor, mal
unter ihrem Namen, mal als `isCrossSumDividable`.

:::definition[Harshad-Zahl]
Eine ganze Zahl `n > 0` heißt **Harshad-Zahl**, wenn sie durch ihre eigene Quersumme teilbar ist. In Java:
`n % quersumme(n) == 0`.

Der Name stammt vom indischen Mathematiker D. R. Kaprekar. Er setzte ihn aus den Sanskrit-Wörtern *harṣa*
(Freude) und *da* (geben) zusammen, also „Freudengeber“. Eine andere Bezeichnung ist **Niven-Zahl**.
:::

**Beispiel:** 2025 hat die Quersumme 2 + 0 + 2 + 5 = 9, und 2025 = 9 · 225. Also ist 2025 eine Harshad-Zahl.
**Kein Beispiel:** 2026 hat die Quersumme 10, aber `2026 % 10` ist 6. Also ist 2026 keine Harshad-Zahl.
Jede einstellige Zahl von 1 bis 9 ist eine Harshad-Zahl, weil sie ihre eigene Quersumme ist.

:::beispiel[isHarshadNumber(2025) Zeile für Zeile]
Auf dem Blatt dürfen Methoden einander aufrufen. Darum verwenden wir die Methode `calcCrossSum` aus
[7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme) weiter.

```java
public static boolean isHarshadNumber(int number) {
    int crossSum = calcCrossSum(number);
    return number % crossSum == 0;
}
```

1. Der Rückgabetyp ist `boolean`, denn die Antwort ist ja oder nein.
2. `calcCrossSum(2025)` liefert 9. Das wird in `crossSum` gespeichert.
3. `2025 % 9` ist 0, denn 9 · 225 = 2025. Der Vergleich `0 == 0` ist `true`.
4. Die Methode liefert `true`.

Ein häufiger Anfängerstil ist `if (number % crossSum == 0) { return true; } else { return false; }`. Das ist
richtig, aber umständlich. Der Vergleich selbst ist schon ein `boolean`, den man direkt zurückgeben kann.

Für 2026 liefert `calcCrossSum` den Wert 10, `2026 % 10` ist 6, und `6 == 0` ist `false`.
:::

```aufgabe
id: zi-ha-auswahl-162
titel: Ist 162 eine Harshad-Zahl?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: Ist 162 eine Harshad-Zahl? Wähle die richtige Antwort mit der richtigen Begründung.
teile:
  - typ: auswahl
    optionen:
      - 'Ja, die Quersumme ist 9, und `162 % 9 == 0`.'
      - 'Nein, die Quersumme ist 9, und 162 ist nicht durch 9 teilbar.'
      - 'Nein, die Quersumme ist 8, und `162 % 8` ist 2.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne nach: 9 · 18 = 162. Also bleibt kein Rest.'
      - wert: 2
        meldung: 'Die Quersumme von 162 ist 1 + 6 + 2 = 9, nicht 8.'
hinweise:
  - Zuerst die Quersumme bilden, dann prüfen, ob 162 durch sie ohne Rest teilbar ist.
loesung: |
  **Ansatz:** Quersumme berechnen, dann den Rest prüfen.
  ---
  Quersumme 1 + 6 + 2 = 9. Es gilt 162 = 9 · 18, also `162 % 9 == 0`. 162 ist eine Harshad-Zahl.
```

### Von der Prüfmethode zur Methodenfamilie

Auf den Blättern 2 seit 2020 bleibt es nie bei der Prüfung einer einzelnen Zahl. Zur Prüfmethode kommen
jeweils zwei Methoden über ein **Intervall** `[start, end]`. Gemeint sind alle ganzen Zahlen von `start` bis
`end`, beide Grenzen eingeschlossen. Die eine Methode zählt oder summiert, die andere gibt aus. Alle folgen
demselben Muster. Eine `for`-Schleife läuft über das Intervall und ruft für jede Zahl die Prüfmethode auf.

:::beispiel[Zählen und Summieren von 30 bis 40]
```java
public static int countHarshadNumbers(int start, int end) {
    int count = 0;
    for (int i = start; i <= end; i++) {
        if (isHarshadNumber(i)) {
            count++;
        }
    }
    return count;
}

public static int sumHarshadNumbers(int start, int end) {
    int sum = 0;
    for (int i = start; i <= end; i++) {
        if (isHarshadNumber(i)) {
            sum = sum + i;
        }
    }
    return sum;
}
```

Wir gehen die Zahlen von 30 bis 40 durch und prüfen jede:

1. 30: Quersumme 3, `30 % 3 == 0`. Harshad.
2. 31: Quersumme 4, Rest 3. 32: Quersumme 5, Rest 2. 33: Quersumme 6, Rest 3. 34: Quersumme 7, Rest 6. 35: Quersumme 8, Rest 3. Keine davon.
3. 36: Quersumme 9, `36 % 9 == 0`. Harshad.
4. 37 bis 39: Quersummen 10 bis 12, Reste 7, 5 und 3. Keine der Zahlen ist durch ihre Quersumme teilbar.
5. 40: Quersumme 4, `40 % 4 == 0`. Harshad.

`countHarshadNumbers(30, 40)` liefert also 3 und `sumHarshadNumbers(30, 40)` liefert 30 + 36 + 40 = 106. Die
Bedingung lautet `i <= end`, weil die rechte Grenze 40 dazugehört. Sie ist hier selbst eine Harshad-Zahl.
:::

```aufgabe
id: zi-ha-ausgabe-10-20
titel: Harshad-Zahlen von 10 bis 20
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Harshad {
          public static int calcCrossSum(int number) {
              int sum = 0;
              while (number > 0) {
                  sum = sum + number % 10;
                  number = number / 10;
              }
              return sum;
          }

          public static void main(String[] args) {
              for (int i = 10; i <= 20; i++) {
                  if (i % calcCrossSum(i) == 0) {
                      System.out.print(i + " ");
                  }
              }
              System.out.println();
          }
      }
    loesung: |
      10 12 18 20 
    fehler:
      - wert: "10 12 18 "
        meldung: 'Die Grenze 20 gehört dazu (`i <= 20`). Die Quersumme von 20 ist 2, und `20 % 2 == 0`.'
      - wert: "12 18 20 "
        meldung: 'Die Quersumme von 10 ist 1 + 0 = 1. Jede Zahl ist durch 1 teilbar.'
hinweise:
  - Bilde für jede Zahl von 10 bis 20 die Quersumme und prüfe den Rest.
  - Achte auf Zahlen mit kleiner Quersumme wie 10 und 20.
loesung: |
  **Ansatz:** Für jede Zahl die Quersumme bilden und `i % Quersumme` prüfen.
  ---
  10 (Quersumme 1): ja. 11 (Quersumme 2): nein. 12 (Quersumme 3): ja. 13 bis 17 (Quersummen 4 bis 8): nein.
  ---
  18 (Quersumme 9): ja. 19 (Quersumme 10): nein. 20 (Quersumme 2): ja.
  ---
  Ausgabe `10 12 18 20 ` mit einem Leerzeichen nach jeder Zahl, danach ein Zeilenumbruch.
```

:::achtung[Division durch 0 bei der Zahl 0]
```java
System.out.println(isHarshadNumber(0));
// Exception in thread "main" java.lang.ArithmeticException: / by zero
```

Die Quersumme von 0 ist 0, und `0 % 0` ist eine Ganzzahldivision durch 0. Java bricht das Programm mit einer
**Exception** ab, einem Laufzeitfehler. Deshalb hat die Blattaufgabe die **Vorbedingung** `number > 0` (siehe
[6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)). Du musst sie nicht prüfen.
Aber du darfst die Methode in `main` nicht mit 0 testen. Ein Intervall muss deshalb bei `start > 0` beginnen.
:::

:::achtung[Die rechte Intervallgrenze vergessen]
Mit `for (int i = start; i < end; i++)` fehlt die Zahl `end`. Für das Intervall [10, 30] liefert die Summe
dann 132 statt 162, weil die Harshad-Zahl 30 nicht mitgezählt wird. „Intervall `[start, end]`“ mit eckigen
Klammern heißt immer: beide Grenzen gehören dazu, also `i <= end`.
:::

:::achtung[Ein Trennzeichen zu viel]
Soll die Ausgabe `30, 36, 40` lauten, erzeugt `System.out.print(i + ", ")` am Ende ein überzähliges `, `.
Das ist das Zaunpfahlproblem aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem):
Zwischen drei Zahlen stehen nur zwei Trennzeichen. Die Lösung ist eine Merker-Variable, die sich erinnert, ob
schon eine Zahl ausgegeben wurde. Nur vor jeder **weiteren** Zahl kommt dann ein Trennzeichen.
:::

```aufgabe
id: zi-ha-gefuehrt-1729
titel: Ist 1729 eine Harshad-Zahl?
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Prüfe, ob 1729 eine Harshad-Zahl ist. Gib den Rest von 1729 bei Division durch seine Quersumme an.
  Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    label: Rest
    loesung: "1729 - 19*91"
    fehler:
      - wert: "19"
        meldung: '19 ist die Quersumme. Gefragt ist der Rest von 1729 geteilt durch 19.'
      - wert: "1"
        meldung: 'Prüfe die Quersumme noch einmal: 1 + 7 + 2 + 9 = 19. Und 19 · 91 = 1729.'
gefuehrt:
  - text: Wie groß ist die Quersumme von 1729?
    teil: { typ: zahl, loesung: "19" }
    erklaerung: 1 + 7 + 2 + 9 = 19.
  - text: Wie oft passt 19 ganz in 1729?
    teil: { typ: zahl, loesung: "91" }
    erklaerung: '19 · 90 = 1710, und 1710 + 19 = 1729. Also passt 19 genau 91-mal.'
  - text: Welcher Rest bleibt?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: 1729 − 19 · 91 = 0.
  - text: Ist 1729 also eine Harshad-Zahl?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: Kein Rest heißt teilbar. 1729 ist durch seine Quersumme 19 teilbar.
hinweise:
  - Bilde zuerst die Quersumme.
  - '19 · 90 = 1710. Wie viel fehlt bis 1729?'
loesung: |
  **Ansatz:** Quersumme bilden und den Rest berechnen.
  ---
  Quersumme 1 + 7 + 2 + 9 = 19. 19 · 91 = 1729.
  ---
  Rest 0, also ist 1729 eine Harshad-Zahl.
```

:::merke[Methodenfamilie über ein Intervall]
1. Schreibe zuerst die **Prüfmethode** für eine Zahl (`boolean isX(int number)`) und teste sie an den Beispielen der Angabe.
2. **Zählen:** Zähler bei 0, `for (int i = start; i <= end; i++)`, bei `isX(i)` den Zähler erhöhen.
3. **Summieren:** gleiche Schleife, bei `isX(i)` die Zahl `i` addieren, nicht 1.
4. **Ausgeben:** gleiche Schleife, bei `isX(i)` die Zahl ausgeben, auf Trennzeichen achten.
5. Die Prüfung steht nur in `isX`. Die Intervallmethoden rufen sie auf, statt ihren Code zu kopieren.
:::

### Warum die Quersumme etwas über Teilbarkeit verrät

Vielleicht kennst du die Regel aus der Schule: Eine Zahl ist genau dann durch 3 teilbar, wenn ihre Quersumme
durch 3 teilbar ist. Dasselbe gilt für 9. Der Grund steckt im Stellenwert. 10 = 9 + 1, 100 = 99 + 1 und
1000 = 999 + 1. Jeder Stellenwert ist also ein Vielfaches von 9 plus 1. Damit gilt zum Beispiel

```
4072 = 4 · 1000 + 0 · 100 + 7 · 10 + 2
     = 4 · 999 + 0 · 99 + 7 · 9   +   (4 + 0 + 7 + 2)
```

Der erste Teil ist durch 9 teilbar. Übrig bleibt die Quersumme 13. Darum haben 4072 und 13 beim Teilen durch 9
denselben Rest, nämlich 4. Weil 9 durch 3 teilbar ist, gilt dasselbe für 3. Für eine Harshad-Zahl nützt diese
Regel nur indirekt. Sie ist aber eine gute Übung für „Warum“-Fragen, wie sie im Feedbackgespräch kommen können.

```reflexion
frage: Warum sollen `countHarshadNumbers`, `sumHarshadNumbers` und `printHarshadNumbers` die Methode `isHarshadNumber` aufrufen, statt die Quersumme jeweils selbst zu berechnen?
antwort: |
  Dann steht die Prüfung nur an einer Stelle. Ist sie richtig getestet, sind auch alle drei Intervallmethoden
  richtig. Findet man einen Fehler, korrigiert man eine Methode statt drei. Außerdem lesen sich die
  Intervallmethoden wie die Angabe: „für jede Zahl im Intervall: wenn sie eine Harshad-Zahl ist, dann zähle
  sie“. Das ist dieselbe Idee wie bei den überladenen Methoden in [6.7 Methoden nach Vorgabe schreiben](/lernen/ep1/methoden/methoden-nach-vorgabe-schreiben).
  Im Programmiertest sind Hilfsmethoden zwar verboten, auf dem Blatt aber erlaubt und erwünscht.
```

```aufgabe
id: zi-ha-code-isharshad
titel: isHarshadNumber schreiben
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2021 und SS 2020 (isHarshadNumber, umformuliert)
angabe: |
  Die Methode `calcCrossSum` ist schon fertig. Implementiere `boolean isHarshadNumber(int number)`. Sie
  liefert `true`, wenn `number` durch ihre Quersumme ohne Rest teilbar ist. Vorbedingung: `number > 0`.
  Keine Strings, kein `Math`.
teile:
  - typ: code
    vorlage: |
      public class HarshadCheck {
          public static int calcCrossSum(int number) {
              int sum = 0;
              while (number > 0) {
                  sum = sum + number % 10;
                  number = number / 10;
              }
              return sum;
          }

          public static boolean isHarshadNumber(int number) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(isHarshadNumber(2025));
          }
      }
    musterloesung: |
      public class HarshadCheck {
          public static int calcCrossSum(int number) {
              int sum = 0;
              while (number > 0) {
                  sum = sum + number % 10;
                  number = number / 10;
              }
              return sum;
          }

          public static boolean isHarshadNumber(int number) {
              return number % calcCrossSum(number) == 0;
          }

          public static void main(String[] args) {
              System.out.println(isHarshadNumber(2025));
          }
      }
    tests:
      - { aufruf: "isHarshadNumber(2025)", erwartet: "true" }
      - { aufruf: "isHarshadNumber(2026)", erwartet: "false" }
      - { aufruf: "isHarshadNumber(7)", erwartet: "true", beschreibung: "einstellige Zahl" }
      - { aufruf: "isHarshadNumber(1729)", erwartet: "true" }
      - { aufruf: "isHarshadNumber(19)", erwartet: "false", beschreibung: "Quersumme 10" }
      - { aufruf: "isHarshadNumber(1000000)", erwartet: "true", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Integer"] }
    fehler:
      - { wert: 2, meldung: "Liefert deine Methode immer `true`? Prüfe den Rest `number % calcCrossSum(number)`." }
      - { wert: 5, meldung: "19 hat die Quersumme 10, und `19 % 10` ist 9. Vertauschst du vielleicht Zahl und Quersumme?" }
hinweise:
  - Rufe `calcCrossSum(number)` auf und prüfe, ob der Rest 0 ist.
  - Der Vergleich `... == 0` ist schon ein `boolean`. Du kannst ihn direkt zurückgeben.
loesung: |
  **Ansatz:** Teilbarkeit durch die Quersumme mit `%` prüfen.
  ---
  ```java
  return number % calcCrossSum(number) == 0;
  ```
  ---
  Kontrolle: 2025 hat die Quersumme 9, Rest 0, also `true`. 19 hat die Quersumme 10, Rest 9, also `false`. Die Vorbedingung `number > 0` schützt vor der Division durch 0.
```

```aufgabe
id: zi-ha-code-count
titel: Harshad-Zahlen in einem Intervall zählen
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 2 SS 2020 (countHarshadNumbers, umformuliert)
angabe: |
  `isHarshadNumber` ist schon fertig. Implementiere `int countHarshadNumbers(int start, int end)`. Sie zählt,
  wie viele Harshad-Zahlen im Intervall `[start, end]` liegen. Vorbedingung: `0 < start ≤ end`.

  Beispiele: `countHarshadNumbers(200, 210)` liefert 6, `countHarshadNumbers(1, 30)` liefert 17.
teile:
  - typ: code
    vorlage: |
      public class HarshadCount {
          public static boolean isHarshadNumber(int number) {
              int sum = 0;
              int n = number;
              while (n > 0) {
                  sum = sum + n % 10;
                  n = n / 10;
              }
              return number % sum == 0;
          }

          public static int countHarshadNumbers(int start, int end) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(countHarshadNumbers(200, 210));
          }
      }
    musterloesung: |
      public class HarshadCount {
          public static boolean isHarshadNumber(int number) {
              int sum = 0;
              int n = number;
              while (n > 0) {
                  sum = sum + n % 10;
                  n = n / 10;
              }
              return number % sum == 0;
          }

          public static int countHarshadNumbers(int start, int end) {
              int count = 0;
              for (int i = start; i <= end; i++) {
                  if (isHarshadNumber(i)) {
                      count++;
                  }
              }
              return count;
          }

          public static void main(String[] args) {
              System.out.println(countHarshadNumbers(200, 210));
          }
      }
    tests:
      - { aufruf: "countHarshadNumbers(200, 210)", erwartet: "6" }
      - { aufruf: "countHarshadNumbers(1, 30)", erwartet: "17" }
      - { aufruf: "countHarshadNumbers(11, 11)", erwartet: "0", beschreibung: "Intervall aus einer Zahl, keine Harshad-Zahl" }
      - { aufruf: "countHarshadNumbers(20, 20)", erwartet: "1", beschreibung: "Intervall aus einer Zahl, Harshad-Zahl" }
      - { aufruf: "countHarshadNumbers(100, 200)", erwartet: "27", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Integer"] }
    fehler:
      - { wert: 1, meldung: "Kommt 5 statt 6 heraus? Dann fehlt die rechte Grenze 210. Die Schleifenbedingung muss `i <= end` lauten." }
      - { wert: 4, meldung: "Bei `start == end` muss die Schleife genau einmal laufen. Prüfe die Bedingung `i <= end`." }
hinweise:
  - Eine `for`-Schleife über alle Zahlen von `start` bis einschließlich `end`.
  - 'Für jede Zahl `isHarshadNumber(i)` aufrufen und bei `true` den Zähler erhöhen.'
loesung: |
  **Ansatz:** Muster „Zählen über ein Intervall“: Zähler bei 0, Schleife mit `i <= end`, Prüfmethode aufrufen.
  ---
  ```java
  int count = 0;
  for (int i = start; i <= end; i++) {
      if (isHarshadNumber(i)) {
          count++;
      }
  }
  return count;
  ```
  ---
  Kontrolle: [200, 210] enthält 200, 201, 204, 207, 209 und 210, also 6. In [1, 30] sind es 1 bis 9 sowie 10, 12, 18, 20, 21, 24, 27 und 30, zusammen 17.
```

```aufgabe
id: zi-ha-rf-teilbarkeit
titel: Aussagen über Teilbarkeit und Quersumme
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: Beurteile jede Aussage. Alle Zahlen sind positiv.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Ist die Quersumme einer Zahl durch 3 teilbar, dann ist auch die Zahl durch 3 teilbar.'
        richtig: true
        erklaerung: 'Zahl und Quersumme haben beim Teilen durch 3 denselben Rest, weil jeder Stellenwert ein Vielfaches von 9 plus 1 ist.'
      - text: 'Jede Zahl der Form 10, 100, 1000, … ist eine Harshad-Zahl.'
        richtig: true
        erklaerung: 'Die Quersumme ist 1, und jede Zahl ist durch 1 teilbar.'
      - text: 'Ist die Quersumme einer Zahl durch 4 teilbar, dann ist auch die Zahl durch 4 teilbar.'
        richtig: false
        erklaerung: 'Gegenbeispiel 13: Die Quersumme 4 ist durch 4 teilbar, 13 aber nicht. Die Regel gilt nur für 3 und 9.'
      - text: 'Jede Zahl mit Quersumme 9 ist eine Harshad-Zahl.'
        richtig: true
        erklaerung: 'Ist die Quersumme 9, ist die Zahl nach der Neunerregel durch 9 teilbar, also durch ihre Quersumme.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Probiere Aussage 3 mit 13 oder 22 aus.'
      - wert: [r, r, f, f]
        meldung: 'Aussage 4: Die Neunerregel sagt, dass jede Zahl mit Quersumme 9 durch 9 teilbar ist. Probiere 18, 27, 108.'
hinweise:
  - Suche für jede Aussage ein Beispiel und ein mögliches Gegenbeispiel.
  - Die Quersummenregel funktioniert nur für die Teiler 3 und 9, weil 10 = 9 + 1 ist.
loesung: |
  **Ansatz:** Die Neunerregel begründen und für andere Teiler ein Gegenbeispiel suchen.
  ---
  Aussage 1 ist richtig (Dreierregel). Aussage 2 ist richtig, die Quersumme ist 1.
  ---
  Aussage 3 ist falsch: 13 hat die Quersumme 4, ist aber nicht durch 4 teilbar. Aussage 4 ist richtig: Quersumme 9 heißt durch 9 teilbar, und 9 ist die Quersumme.
```

```aufgabe
id: zi-ha-zeilen-summe
titel: Fehler beim Summieren im Intervall
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  `sumHarshadNumbers(100, 120)` soll 994 liefern, die Summe aller Harshad-Zahlen in [100, 120]. Die Methode
  kompiliert, rechnet aber falsch. `isHarshadNumber` ist korrekt. Markiere die fehlerhaften Zeilen.
teile:
  - typ: zeilen
    code: |
      public static int sumHarshadNumbers(int start, int end) {
          for (int i = start; i < end; i++) {
              int sum = 0;
              if (isHarshadNumber(i)) {
                  sum = sum + 1;
              }
          }
          return 0;
      }
    loesung: [2, 3, 5, 8]
    fehler:
      - wert: [2, 3, 5]
        meldung: 'Zeile 8 liefert immer 0, egal was die Schleife rechnet. Was soll zurückgegeben werden?'
      - wert: [3, 5, 8]
        meldung: 'Prüfe die Schleifenbedingung in Zeile 2. Gehört die Zahl 120 zum Intervall [100, 120]?'
hinweise:
  - Prüfe Grenze, Ort der Deklaration, was addiert wird und was zurückgegeben wird.
  - Vier Zeilen sind fehlerhaft.
loesung: |
  **Ansatz:** Mit dem Merke-Muster für das Summieren vergleichen.
  ---
  Zeile 2: `i < end` lässt die 120 weg, richtig ist `i <= end`. Zeile 3: `sum` muss vor der Schleife stehen, sonst beginnt sie jedes Mal bei 0.
  ---
  Zeile 5: Summiert wird die Zahl `i`, nicht 1 (das wäre Zählen). Zeile 8: Zurückgegeben wird `sum`.
  ---
  Repariert: `int sum = 0;` vor der Schleife, `i <= end`, `sum = sum + i;` und `return sum;`. Dann ergibt sich 994.
```

```aufgabe
id: zi-ha-lueckentext-drei
titel: Teilbar durch 3 über die Quersumme
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Methode soll mit der Dreierregel prüfen, ob `number` durch 3 teilbar ist. Sie verwendet `%` nur für die
  Ziffern und für die Quersumme, nie für `number % 3`. Ergänze die Lücken. Ausgabe: `true` und `false`.
teile:
  - typ: lueckentext
    code: |
      public class Drei {
          public static boolean divisibleBy3(int number) {
              int sum = ___;
              while (number > 0) {
                  sum = sum + number ___ 10;
                  number = number ___ 10;
              }
              return sum % 3 ___ 0;
          }

          public static void main(String[] args) {
              System.out.println(divisibleBy3(4071));
              System.out.println(divisibleBy3(4072));
          }
      }
    luecken: [["0"], ["%"], ["/"], ["=="]]
    fehler:
      - wert: ["0", "%", "/", "!="]
        meldung: 'Teilbar heißt: kein Rest. Die Bedingung lautet `sum % 3 == 0`.'
      - wert: ["1", "%", "/", "=="]
        meldung: 'Eine Summe beginnt bei 0. Mit 1 wäre jede Quersumme um 1 zu groß.'
hinweise:
  - Erst die Quersumme mit der Ziffernschleife, dann prüfen, ob sie durch 3 teilbar ist.
  - 'Die letzte Ziffer liefert `%`, das Abschneiden `/`. Teilbar heißt: Rest gleich 0.'
loesung: |
  **Ansatz:** Quersumme berechnen, dann die Dreierregel anwenden.
  ---
  Lücken: `0`, `%`, `/`, `==`.
  ---
  Kontrolle: 4071 hat die Quersumme 12, durch 3 teilbar, also `true` (4071 = 3 · 1357). 4072 hat 13, also `false`.
```

```aufgabe
id: zi-ha-code-print
titel: Harshad-Zahlen mit Komma ausgeben
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2021 (printHarshadNumbers, mit anderem Trennzeichen)
angabe: |
  `isHarshadNumber` ist fertig. Implementiere `void printHarshadNumbers(int start, int end)`. Sie gibt alle
  Harshad-Zahlen in `[start, end]` in **einer** Zeile aus, getrennt durch Komma und Leerzeichen, ohne
  Trennzeichen am Ende. Danach folgt ein Zeilenumbruch. Gibt es keine, erscheint nur der Zeilenumbruch.
  Vorbedingung: `0 < start ≤ end`.

  Beispiel: `printHarshadNumbers(130, 140)` gibt `132, 133, 135, 140` aus.
teile:
  - typ: code
    vorlage: |
      public class HarshadPrint {
          public static boolean isHarshadNumber(int number) {
              int sum = 0;
              int n = number;
              while (n > 0) {
                  sum = sum + n % 10;
                  n = n / 10;
              }
              return number % sum == 0;
          }

          public static void printHarshadNumbers(int start, int end) {
              // TODO
          }

          public static void main(String[] args) {
              printHarshadNumbers(130, 140);
          }
      }
    musterloesung: |
      public class HarshadPrint {
          public static boolean isHarshadNumber(int number) {
              int sum = 0;
              int n = number;
              while (n > 0) {
                  sum = sum + n % 10;
                  n = n / 10;
              }
              return number % sum == 0;
          }

          public static void printHarshadNumbers(int start, int end) {
              boolean first = true;
              for (int i = start; i <= end; i++) {
                  if (isHarshadNumber(i)) {
                      if (!first) {
                          System.out.print(", ");
                      }
                      System.out.print(i);
                      first = false;
                  }
              }
              System.out.println();
          }

          public static void main(String[] args) {
              printHarshadNumbers(130, 140);
          }
      }
    tests:
      - { aufruf: "printHarshadNumbers(130, 140)", stdout: "132, 133, 135, 140\n" }
      - { aufruf: "printHarshadNumbers(10, 20)", stdout: "10, 12, 18, 20\n" }
      - { aufruf: "printHarshadNumbers(141, 143)", stdout: "\n", beschreibung: "keine Harshad-Zahl im Intervall" }
      - { aufruf: "printHarshadNumbers(7, 7)", stdout: "7\n", beschreibung: "genau eine Zahl" }
      - { aufruf: "printHarshadNumbers(1000, 1012)", stdout: "1000, 1002, 1008, 1010, 1011, 1012\n", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Integer", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Steht am Ende `, `? Gib das Trennzeichen nur **vor** jeder weiteren Zahl aus, nicht nach jeder Zahl." }
      - { wert: 3, meldung: "Auch ohne Treffer muss die Methode einen Zeilenumbruch ausgeben. `System.out.println()` gehört nach die Schleife." }
      - { wert: "verboteneApi", meldung: "Keine Strings und kein `StringBuilder` zum Sammeln. Gib direkt mit `System.out.print` aus." }
hinweise:
  - Lege vor der Schleife eine Variable `boolean first = true;` an.
  - 'Bei jedem Treffer: Wenn `first` falsch ist, zuerst `", "` ausgeben. Dann die Zahl ausgeben und `first = false;` setzen.'
loesung: |
  **Ansatz:** Ausgeben über ein Intervall mit dem Zaunpfahl-Muster: Trennzeichen vor jeder Zahl außer der ersten.
  ---
  Ein Merker `first` sagt, ob schon eine Zahl ausgegeben wurde. Ein Zähler wie `count > 0` ginge ebenso.
  ---
  ```java
  boolean first = true;
  for (int i = start; i <= end; i++) {
      if (isHarshadNumber(i)) {
          if (!first) {
              System.out.print(", ");
          }
          System.out.print(i);
          first = false;
      }
  }
  System.out.println();
  ```
  ---
  Kontrolle: Für [141, 143] gibt es keinen Treffer, es erscheint nur der Zeilenumbruch. Für [7, 7] erscheint `7` ohne Komma.
```

```aufgabe
id: zi-ha-text-neunerregel
titel: Die Neunerregel begründen
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Stell dir vor, im Feedbackgespräch fragt die Tutorin: „Warum hat 5832 beim Teilen durch 9 denselben Rest wie seine
  Quersumme?“ Begründe es in drei bis fünf Sätzen. Rechne dabei mit den Stellenwerten von 5832.
teile:
  - typ: text
    muster: |
      Ich schreibe 5832 mit Stellenwerten: 5 · 1000 + 8 · 100 + 3 · 10 + 2. Jeder Stellenwert ist ein
      Vielfaches von 9 plus 1, also 1000 = 999 + 1, 100 = 99 + 1 und 10 = 9 + 1. Damit ist
      5832 = (5 · 999 + 8 · 99 + 3 · 9) + (5 + 8 + 3 + 2). Die erste Klammer ist durch 9 teilbar. Also
      unterscheiden sich 5832 und die Quersumme 18 um ein Vielfaches von 9 und haben denselben Rest. Hier ist
      der Rest 0, also ist 5832 durch 9 teilbar.
hinweise:
  - Schreib 5832 als Summe von Ziffer mal Stellenwert.
  - 'Zerlege jeden Stellenwert in „Vielfaches von 9 plus 1“.'
loesung: |
  **Ansatz:** Mit Stellenwerten zeigen, dass Zahl und Quersumme sich um ein Vielfaches von 9 unterscheiden.
  ---
  5832 = 5 · 1000 + 8 · 100 + 3 · 10 + 2. Das ist dasselbe wie 5 · 999 + 8 · 99 + 3 · 9 + (5 + 8 + 3 + 2).
  ---
  Der Teil 5 · 999 + 8 · 99 + 3 · 9 ist durch 9 teilbar. Deshalb haben 5832 und 18 beim Teilen durch 9 denselben Rest.
  ---
  Probe: 5832 = 9 · 648, Rest 0. Und 18 = 9 · 2, Rest 0. Unabhängig davon gilt 5832 = 18 · 324. Das folgt nicht aus der Neunerregel, sondern ist eigens nachgerechnet. Also ist 5832 sogar eine Harshad-Zahl.
```

## Fröhliche und narzisstische Zahlen

```aufgabe
id: zi-fn-check-verschachtelt
titel: Eine Schleife in einer Schleife
niveau: 1
art: check
angabe: |
  Wie viele Sterne gibt dieser Code insgesamt aus? Verschachtelte Schleifen kennst du aus
  [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
  ```java
  for (int i = 1; i <= 3; i++) {
      for (int j = 1; j <= i; j++) {
          System.out.print("*");
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "1 + 2 + 3"
    fehler:
      - wert: "9"
        meldung: 'Die innere Schleife läuft nicht immer dreimal. Ihre Grenze ist `i`, also erst 1, dann 2, dann 3.'
hinweise:
  - Zähle für jedes `i` die Durchläufe der inneren Schleife.
loesung: |
  Für `i = 1` läuft die innere Schleife einmal, für `i = 2` zweimal, für `i = 3` dreimal.
  ---
  Zusammen 1 + 2 + 3 = 6 Sterne.
```

Die beiden Zahlenarten in diesem Abschnitt stammen von Aufgabenblatt 2: die fröhlichen Zahlen aus dem
Wintersemester 2022, die narzisstischen Zahlen aus dem Sommersemester 2023.
Beide verwenden die Ziffernschleife zweimal: einmal innen, um aus den Ziffern etwas zu berechnen, und einmal
außen, um das Verfahren zu wiederholen oder um vorher die Ziffern zu zählen. Das ist das Neue an diesem
Abschnitt: **zwei Schleifen, die zusammenarbeiten**.

### Fröhliche Zahlen

:::definition[Fröhliche und traurige Zahl]
Nimm eine Zahl `n > 0`. Quadriere jede ihrer Ziffern und addiere die Quadrate. Mit dem Ergebnis machst du
dasselbe noch einmal, und so weiter. Erreichst du irgendwann die 1, heißt `n` eine **fröhliche Zahl**
(englisch *happy number*). Erreichst du stattdessen die 4, heißt `n` eine **traurige Zahl**.
:::

**Beispiel:** 28 ist fröhlich: 28 → 68 → 100 → 1. Der Schritt von 28 zu 68 rechnet 2² + 8² = 4 + 64.
**Kein Beispiel:** 24 ist traurig: 24 → 20 → 4, denn 2² + 4² = 4 + 16 = 20 und 2² + 0² = 4. Ab der 4 geht es
im Kreis weiter: 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4. Die 1 erreicht 24 nie.

Warum reicht es, auf 1 und 4 zu achten? Die Mathematik dahinter: Ab vier Ziffern ist die Quadratsumme kleiner
als die Zahl selbst, denn 4 · 81 = 324 ist viel kleiner als 1000. Jede Folge landet also bald unter 1000 und
muss sich dort irgendwann wiederholen. Man hat alle Zahlen unter 1000 durchprobiert. Jede Folge endet entweder
bei der 1 (sie bleibt dort, weil 1² = 1) oder im Kreis, der die 4 enthält. Darum terminiert die Prüfung immer.

:::beispiel[isHappyNumber(19) Zeile für Zeile]
```java
public static int squareSum(int number) {      // Quadratsumme der Ziffern
    int sum = 0;
    while (number > 0) {
        int digit = number % 10;
        sum = sum + digit * digit;
        number = number / 10;
    }
    return sum;
}

public static boolean isHappyNumber(int number) {
    int n = number;
    while (n != 1 && n != 4) {
        n = squareSum(n);
    }
    return n == 1;
}
```

`squareSum` ist die Ziffernschleife aus [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme),
nur mit `digit * digit` statt `digit`. `isHappyNumber` wiederholt sie, bis 1 oder 4 erreicht ist.

1. `n = 19`. Die Bedingung `19 != 1 && 19 != 4` ist wahr. `squareSum(19)` rechnet 9² + 1² = 81 + 1 = 82.
2. `n = 82`, Bedingung wahr. 2² + 8² = 4 + 64 = 68.
3. `n = 68`, Bedingung wahr. 8² + 6² = 64 + 36 = 100.
4. `n = 100`, Bedingung wahr. 0² + 0² + 1² = 1.
5. `n = 1`. Jetzt ist `1 != 1` falsch, also ist die ganze Bedingung falsch. Die Schleife endet.
6. `return n == 1;` liefert `true`. 19 ist fröhlich.

Für 4 selbst läuft die Schleife gar nicht, und die Methode liefert sofort `false`.
:::

```aufgabe
id: zi-fn-ausgabe-schritt
titel: Ein Schritt der Quadratsumme
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int n = 86;
      int sum = 0;
      while (n > 0) {
          int z = n % 10;
          sum = sum + z * z;
          n = n / 10;
      }
      System.out.println(sum);
    loesung: |
      100
    fehler:
      - wert: "14"
        meldung: 'Das ist die Quersumme 8 + 6. Hier wird jede Ziffer quadriert: `z * z`.'
      - wert: "196"
        meldung: 'Das ist (8 + 6)². Quadriert wird jede Ziffer einzeln, erst danach wird addiert.'
hinweise:
  - Quadriere 6 und 8 einzeln und addiere die Quadrate.
loesung: |
  **Ansatz:** Ziffernschleife mit `z * z` statt `z`.
  ---
  Ziffern 6 und 8: 36 + 64 = 100. Ausgabe `100`. Ein weiterer Schritt würde 1 ergeben, 86 ist also fröhlich.
```

:::achtung[Die Schleife wartet nur auf die 1]
```java
while (n != 1) {          // falsch
    n = squareSum(n);
}
return true;
```

Für eine fröhliche Zahl funktioniert das. Die traurige Zahl 24 führt aber über 24 → 20 zur 4. Danach läuft
die Folge ewig im Kreis 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4. Die 1 kommt nie, das Programm hängt in einer
**Endlosschleife**. Die Abbruchbedingung muss beide Ziele kennen: `n != 1 && n != 4`.
:::

### Narzisstische Zahlen

:::definition[Narzisstische Zahl]
Eine Zahl `n ≥ 0` mit `k` Ziffern heißt **narzisstisch**, wenn die Summe ihrer Ziffern, jede hoch `k`
genommen, wieder `n` ergibt. Der Name kommt von Narziss, der Figur aus der griechischen Sage, die sich in ihr
eigenes Spiegelbild verliebt. Die Zahl „findet sich selbst wieder“. Eine andere Bezeichnung ist
**Armstrong-Zahl**.
:::

**Beispiel:** 407 hat drei Ziffern, und 4³ + 0³ + 7³ = 64 + 0 + 343 = 407. **Kein Beispiel:** 408 hat ebenfalls
drei Ziffern, aber 4³ + 0³ + 8³ = 64 + 0 + 512 = 576. Das ist nicht 408. Jede einstellige Zahl ist narzisstisch,
denn mit `k = 1` ist die Summe die Ziffer selbst.

Für die Prüfung brauchst du zwei Dinge, die es so noch nicht gab. Erstens musst du **vor** dem Rechnen wissen,
wie viele Ziffern die Zahl hat. Das ist die Ziffernzählung aus [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme).
Zweitens brauchst du Potenzen. `Math.pow` ist auf dem Blatt verboten. Eine Potenz ist aber nur wiederholtes
Multiplizieren, also eine Schleife: `b` hoch `e` heißt `e`-mal mit `b` malnehmen, beginnend bei 1.

```aufgabe
id: zi-fn-auswahl-xor
titel: Was rechnet 5 ^ 2?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Welchen Wert gibt `System.out.println(5 ^ 2);` in Java aus?
teile:
  - typ: auswahl
    optionen: ['`7`', '`25`', '`25.0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`^` ist in Java **keine** Potenz. Es ist das bitweise exklusive Oder (XOR). Für Potenzen brauchst du eine Schleife.'
      - wert: 2
        meldung: '`25.0` würde `Math.pow(5, 2)` liefern. Der Operator `^` rechnet etwas ganz anderes.'
hinweise:
  - Viele Taschenrechner schreiben Potenzen mit `^`. Java nicht.
loesung: |
  **Ansatz:** Den Operator `^` nicht mit der Potenz verwechseln.
  ---
  `^` vergleicht die Binärdarstellungen (die Schreibweise im Zweiersystem, nur mit den Ziffern 0 und 1) 101 und 010 Stelle für Stelle und setzt 1, wo sie sich unterscheiden: 111. Das ist 7. Du musst XOR in EP1 nicht rechnen können, nur wissen, dass `^` keine Potenz ist.
```

:::beispiel[isNarcissisticNumber(9474) Zeile für Zeile]
```java
public static boolean isNarcissisticNumber(int number) {
    // Phase 1: Ziffern zählen (auf einer Kopie)
    int k = 0;
    int n = number;
    do {
        k++;
        n = n / 10;
    } while (n > 0);

    // Phase 2: Ziffern hoch k addieren (auf einer neuen Kopie)
    int sum = 0;
    n = number;
    while (n > 0) {
        int digit = n % 10;
        int power = 1;
        for (int i = 0; i < k; i++) {
            power = power * digit;
        }
        sum = sum + power;
        n = n / 10;
    }
    return sum == number;
}
```

1. Phase 1 zählt die Ziffern von 9474 mit einer do-while-Schleife: `k = 4`. Danach ist `n = 0`. Darum setzt Phase 2 mit `n = number` wieder neu an.
2. Phase 2, Ziffer 4: Die innere `for`-Schleife multipliziert viermal mit 4. `power` wird 4, 16, 64, 256. `sum = 256`.
3. Ziffer 7: 7⁴ = 2401. `sum = 256 + 2401 = 2657`.
4. Ziffer 4: wieder 256. `sum = 2913`.
5. Ziffer 9: 9⁴ = 6561. `sum = 2913 + 6561 = 9474`.
6. `sum == number` ist `9474 == 9474`, also `true`. 9474 ist narzisstisch.

Die innere `for`-Schleife ist die Potenz ohne `Math.pow`. `power` beginnt bei 1, dem neutralen Wert der
Multiplikation. Für `k = 0` bliebe sie 1, so wie `b⁰ = 1` in der Mathematik.
:::

:::achtung[Mit ^ statt mit einer Schleife potenziert]
```java
sum = sum + (digit ^ k);   // falsch: ^ ist XOR
```

Für 407 rechnet das 7 ^ 3 = 4, 0 ^ 3 = 3 und 4 ^ 3 = 7. Die Summe ist 14, und 407 gilt als nicht narzisstisch.
Der Compiler meldet keinen Fehler, weil `^` für `int` erlaubt ist. Und `Math.pow(digit, k)` ist auf dem Blatt
verboten. Außerdem liefert es ein `double`. Bleibt nur die Schleife.
:::

:::achtung[Die Zahl in Phase 1 aufgebraucht]
Wer in Phase 1 direkt mit `number` zählt, hat danach `number = 0`. Phase 2 beginnt dann mit `n = 0` und läuft
gar nicht, `sum` bleibt 0. Der Vergleich `sum == number` ist jetzt `0 == 0`, also `true`. Die Methode meldet
dann **jede** Zahl als narzisstisch, auch 408. Jede Phase braucht ihre eigene Kopie: `int n = number;` vor
Phase 1 und `n = number;` vor Phase 2. Das Original `number` bleibt dabei unverändert.
:::

```aufgabe
id: zi-fn-gefuehrt-370
titel: Ist 370 narzisstisch?
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne für 370 die Summe der Ziffern, jede hoch die Ziffernanzahl genommen. Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    label: Summe
    loesung: "3^3 + 7^3 + 0^3"
    fehler:
      - wert: "10"
        meldung: 'Das ist nur die Quersumme. Jede Ziffer muss zuerst hoch 3 genommen werden.'
      - wert: "58"
        meldung: 'Das sind die Quadrate 9 + 49. 370 hat aber drei Ziffern, also ist der Exponent 3.'
gefuehrt:
  - text: Wie viele Ziffern hat 370?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Die Ziffern sind 3, 7 und 0. Die Null zählt mit.
  - text: Wie viel ist 7³?
    teil: { typ: zahl, loesung: "343" }
    erklaerung: 7 · 7 · 7 = 49 · 7 = 343.
  - text: Wie viel ist 3³ + 0³?
    teil: { typ: zahl, loesung: "27" }
    erklaerung: 3³ = 27 und 0³ = 0.
  - text: Ist 370 narzisstisch?
    teil:
      typ: auswahl
      optionen: ['ja, die Summe ist 370', 'nein, die Summe ist 343']
      richtig: [0]
    erklaerung: 27 + 343 + 0 = 370. Die Summe ergibt die Zahl selbst.
hinweise:
  - Zuerst die Ziffern zählen. Die Anzahl ist der Exponent.
  - 'Die Null zählt als Ziffer mit, ihr Beitrag ist aber 0³ = 0.'
loesung: |
  **Ansatz:** Ziffernanzahl bestimmen, dann jede Ziffer hoch diese Anzahl nehmen und addieren.
  ---
  370 hat drei Ziffern. 3³ = 27, 7³ = 343, 0³ = 0.
  ---
  27 + 343 + 0 = 370. Die Summe ist die Zahl selbst, also ist 370 narzisstisch.
```

:::merke[Prüfen mit zwei Schleifen]
1. **Wiederholen bis zu einem Ziel** (fröhliche Zahl): äußere `while`-Schleife mit allen Abbruchzielen (`n != 1 && n != 4`), innen eine Ziffernschleife.
2. **Erst zählen, dann rechnen** (narzisstische Zahl): erste Schleife zählt die Ziffern, zweite Schleife rechnet mit dieser Anzahl.
3. Jede Schleife, die die Zahl zerlegt, arbeitet auf ihrer eigenen Kopie.
4. Potenz ohne `Math.pow`: `int p = 1;` und `e`-mal `p = p * b;`. Nie `^` verwenden.
5. Werden die Zahlen groß, wechsle zu `long`. Auf dem Blatt aus dem Sommer 2023 hat `isNarcissisticNumber` darum einen `long`-Parameter.
:::

```reflexion
frage: Dass die äußere Schleife in `isHappyNumber` endet, verdankt sie einer mathematischen Tatsache über Quadratsummen. Warum endet die narzisstische Prüfung auch ohne ein solches Zusatzwissen? Vergleiche die beiden Abbruchgründe.
antwort: |
  Die narzisstische Prüfung besteht nur aus Ziffernschleifen und einer `for`-Schleife mit fester Anzahl. Jede
  davon endet, weil die Zahl mit jedem Durchlauf kleiner wird oder der Zähler seine Grenze erreicht. Bei
  `isHappyNumber` wird die Zahl dagegen nicht immer kleiner: 19 wird zu 82, also größer. Dass die Schleife endet,
  folgt erst aus einer mathematischen Tatsache. Jede Folge erreicht die 1 oder den Kreis mit der 4. Ohne dieses
  Wissen könnte man das Ende nicht garantieren. Darum ist die Abbruchbedingung `n != 1 && n != 4` so wichtig.
```

```aufgabe
id: zi-fn-ausgabe-folge
titel: Die Folge einer fröhlichen Zahl
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Folge {
          public static int squareSum(int number) {
              int sum = 0;
              while (number > 0) {
                  int digit = number % 10;
                  sum = sum + digit * digit;
                  number = number / 10;
              }
              return sum;
          }

          public static void main(String[] args) {
              int n = 44;
              System.out.print(n);
              while (n != 1 && n != 4) {
                  n = squareSum(n);
                  System.out.print(" " + n);
              }
              System.out.println();
          }
      }
    loesung: |
      44 32 13 10 1
    fehler:
      - wert: "44 32 13 10"
        meldung: 'Die neue Zahl wird **nach** `squareSum` ausgegeben. Auch die 1 erscheint, bevor die Bedingung geprüft wird.'
      - wert: "32 13 10 1"
        meldung: 'Vor der Schleife wird die Startzahl 44 ausgegeben.'
hinweise:
  - '44: 16 + 16. Dann die Ziffern dieses Ergebnisses quadrieren und so weiter.'
  - 'Die Ausgabe der neuen Zahl steht im Rumpf nach `squareSum`. Auch die letzte Zahl der Folge erscheint also.'
loesung: |
  **Ansatz:** Startzahl ausgeben, dann so lange die Quadratsumme bilden und ausgeben, bis 1 oder 4 erscheint.
  ---
  44 → 16 + 16 = 32 → 9 + 4 = 13 → 1 + 9 = 10 → 1 + 0 = 1.
  ---
  Bei 1 endet die Schleife. Ausgabe `44 32 13 10 1`. 44 ist also fröhlich.
```

```aufgabe
id: zi-fn-trace-1634
titel: Die Potenzsumme von 1634 verfolgen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  1634 hat vier Ziffern. Verfolge Phase 2 aus dem Beispiel zu `isNarcissisticNumber` für 1634 mit `k = 4`.
  Trage nach jeder Ziffer `n` und `sum` ein.
teile:
  - typ: trace
    spalten: [n, sum]
    zeilen: [vor der Schleife, nach Ziffer 4, nach Ziffer 3, nach Ziffer 6, nach Ziffer 1]
    vorgabe: 1
    loesung: [[1634, 0], [163, 256], [16, 337], [1, 1633], [0, 1634]]
    fehler:
      - wert: ["1634", "0", "163", "64", "16", "91", "1", "307", "0", "308"]
        meldung: 'Du hast hoch 3 gerechnet. 1634 hat vier Ziffern, also ist der Exponent 4: 4⁴ = 256.'
      - wert: ["1634", "0", "163", "16", "16", "25", "1", "61", "0", "62"]
        meldung: 'Du hast quadriert. Der Exponent ist die Ziffernanzahl 4.'
hinweise:
  - '4⁴ = 256, 3⁴ = 81, 6⁴ = 1296, 1⁴ = 1.'
  - Addiere die Potenzen in der Reihenfolge, in der die Ziffern von rechts kommen.
loesung: |
  **Ansatz:** Ziffern von rechts: 4, 3, 6, 1. Jede hoch 4 nehmen und aufsummieren.
  ---
  4⁴ = 256, `sum = 256`. 3⁴ = 81, `sum = 337`. 6⁴ = 1296, `sum = 1633`. 1⁴ = 1, `sum = 1634`.
  ---
  Am Ende ist `sum = 1634 = number`. 1634 ist narzisstisch.
```

```aufgabe
id: zi-fn-code-power
titel: Potenz ohne Math.pow
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Implementiere `int power(int base, int exponent)`. Die Methode liefert `base` hoch `exponent`.
  Vorbedingung: `exponent ≥ 0`, und das Ergebnis passt in ein `int`. `Math` ist verboten, `^` rechnet etwas
  anderes.

  Beispiele: `power(3, 4)` liefert 81, `power(7, 0)` liefert 1, `power(-2, 3)` liefert −8.
teile:
  - typ: code
    vorlage: |
      public class Power {
          public static int power(int base, int exponent) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(power(3, 4));
          }
      }
    musterloesung: |
      public class Power {
          public static int power(int base, int exponent) {
              int result = 1;
              for (int i = 0; i < exponent; i++) {
                  result = result * base;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(power(3, 4));
          }
      }
    tests:
      - { aufruf: "power(3, 4)", erwartet: "81" }
      - { aufruf: "power(7, 0)", erwartet: "1", beschreibung: "Exponent 0" }
      - { aufruf: "power(0, 5)", erwartet: "0" }
      - { aufruf: "power(-2, 3)", erwartet: "-8", beschreibung: "negative Basis" }
      - { aufruf: "power(10, 9)", erwartet: "1000000000", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 2, meldung: "Jede Zahl hoch 0 ist 1. Beginnt dein Ergebnis bei 1, und läuft die Schleife für Exponent 0 gar nicht?" }
      - { wert: 1, meldung: "Kommt 7 statt 81 heraus? Dann rechnest du mit `^`. Das ist XOR, keine Potenz." }
      - { wert: "verboteneApi", meldung: "`Math.pow` ist verboten. Multipliziere in einer Schleife `exponent`-mal mit `base`." }
hinweise:
  - Eine Potenz ist wiederholtes Multiplizieren. Wie oft musst du mit `base` malnehmen?
  - Das Ergebnis beginnt bei 1, nicht bei 0. Mit 0 wäre jedes Produkt 0.
loesung: |
  **Ansatz:** `exponent`-mal mit `base` multiplizieren, Startwert 1.
  ---
  ```java
  int result = 1;
  for (int i = 0; i < exponent; i++) {
      result = result * base;
  }
  return result;
  ```
  ---
  Kontrolle: `power(3, 4)`: 1, 3, 9, 27, 81. `power(7, 0)`: Die Schleife läuft nicht, Ergebnis 1. Bei negativer Basis wechselt das Vorzeichen bei jedem Schritt, also −2, 4, −8.
```

```aufgabe
id: zi-fn-code-happy
titel: isHappyNumber nach Blatt-Vorgabe
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2022, Aufgabe 3 (isHappyNumber, umformuliert)
angabe: |
  Implementiere `boolean isHappyNumber(int number)`. Sie liefert `true`, wenn `number` fröhlich ist, und
  `false`, wenn die Folge der Quadratsummen bei 4 ankommt. Vorbedingung: `number > 0`. Keine Strings, keine
  Arrays, kein `Math`. Eine eigene Methode für die Quadratsumme ist erlaubt.

  Beispiele: `isHappyNumber(19)` liefert `true`, `isHappyNumber(24)` liefert `false`.
teile:
  - typ: code
    vorlage: |
      public class Happy {
          public static boolean isHappyNumber(int number) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(isHappyNumber(19));
          }
      }
    musterloesung: |
      public class Happy {
          public static boolean isHappyNumber(int number) {
              int n = number;
              while (n != 1 && n != 4) {
                  int sum = 0;
                  while (n > 0) {
                      int digit = n % 10;
                      sum = sum + digit * digit;
                      n = n / 10;
                  }
                  n = sum;
              }
              return n == 1;
          }

          public static void main(String[] args) {
              System.out.println(isHappyNumber(19));
          }
      }
    tests:
      - { aufruf: "isHappyNumber(19)", erwartet: "true" }
      - { aufruf: "isHappyNumber(24)", erwartet: "false", beschreibung: "traurige Zahl" }
      - { aufruf: "isHappyNumber(1)", erwartet: "true" }
      - { aufruf: "isHappyNumber(4)", erwartet: "false" }
      - { aufruf: "isHappyNumber(2)", erwartet: "false", zeitlimit: 2000 }
      - { aufruf: "isHappyNumber(986543210)", erwartet: "true", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Integer", "Arrays"] }
    fehler:
      - { wert: 2, meldung: "Bei traurigen Zahlen endet eine Schleife mit `while (n != 1)` nie. Breche auch bei 4 ab." }
      - { wert: 1, meldung: "Prüfe die Quadratsumme: Für 19 muss 81 + 1 = 82 herauskommen, nicht die Quersumme 10." }
hinweise:
  - Außen eine Schleife, die bei 1 oder 4 aufhört. Innen die Ziffernschleife mit `digit * digit`.
  - 'Die innere Schleife zerlegt `n` bis 0. Danach setzt du `n = sum;` und prüfst die äußere Bedingung erneut.'
loesung: |
  **Ansatz:** Äußere Schleife bis zum Ziel 1 oder 4, innere Schleife für die Quadratsumme.
  ---
  ```java
  int n = number;
  while (n != 1 && n != 4) {
      int sum = 0;
      while (n > 0) {
          int digit = n % 10;
          sum = sum + digit * digit;
          n = n / 10;
      }
      n = sum;
  }
  return n == 1;
  ```
  ---
  `sum` wird innerhalb der äußeren Schleife angelegt, damit jede neue Quadratsumme bei 0 beginnt. Kontrolle: 19 → 82 → 68 → 100 → 1, also `true`. 2 → 4, also `false`.
```

```aufgabe
id: zi-fn-rf-aussagen
titel: Aussagen über fröhliche und narzisstische Zahlen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Jede Zahl der Form 10, 100, 1000, … ist fröhlich.'
        richtig: true
        erklaerung: 'Die Quadratsumme ihrer Ziffern ist 1² = 1. Nach einem Schritt ist die 1 erreicht.'
      - text: 'Jede einstellige Zahl ist narzisstisch.'
        richtig: true
        erklaerung: 'Bei einer Ziffer ist der Exponent 1, also ist die Summe die Ziffer selbst.'
      - text: 'Ist `n` fröhlich, dann ist auch die Umkehrzahl von `n` fröhlich.'
        richtig: true
        erklaerung: 'Die Quadratsumme hängt nicht von der Reihenfolge der Ziffern ab. Beide Folgen sind ab dem ersten Schritt gleich.'
      - text: '371 und 173 sind beide narzisstisch, weil sie dieselben Ziffern haben.'
        richtig: false
        erklaerung: 'Die Potenzsumme ist für beide 371. Sie ist nur bei 371 gleich der Zahl selbst. 173 ist nicht narzisstisch.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Bei Aussage 4 vergleicht man die Summe mit der Zahl selbst. Die Summe ist für 371 und 173 gleich, die Zahlen aber nicht.'
      - wert: [r, r, f, f]
        meldung: 'Aussage 3: Hängt die Quadratsumme davon ab, in welcher Reihenfolge die Ziffern stehen?'
hinweise:
  - Berechne für jede Aussage ein konkretes Beispiel.
  - Eine Summe hängt nicht von der Reihenfolge der Summanden ab.
loesung: |
  **Ansatz:** Jede Aussage mit einer Rechnung prüfen und auf die Reihenfolge der Ziffern achten.
  ---
  Aussage 1 und 2 sind richtig (Quadratsumme 1, Exponent 1). Aussage 3 ist richtig: 13 und 31 haben beide die Quadratsumme 10.
  ---
  Aussage 4 ist falsch: Für 173 ist die Summe 1 + 343 + 27 = 371, und 371 ist nicht 173.
```

```aufgabe
id: zi-fn-code-narzisstisch
titel: isNarcissisticNumber mit long
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 SS 2023, Aufgabe 3 (isNarcissisticNumber, umformuliert)
angabe: |
  Implementiere `boolean isNarcissisticNumber(long number)`. Sie liefert `true`, wenn die Summe der Ziffern,
  jede hoch die Ziffernanzahl genommen, gleich `number` ist. Vorbedingung: `number ≥ 0`. Keine Strings, keine
  Arrays, kein `Math` (auch kein `Math.pow`).

  Beispiele: `isNarcissisticNumber(407)` und `isNarcissisticNumber(0)` liefern `true`,
  `isNarcissisticNumber(408)` liefert `false`.
teile:
  - typ: code
    vorlage: |
      public class Narcissus {
          public static boolean isNarcissisticNumber(long number) {
              return false; // TODO
          }

          public static void main(String[] args) {
              System.out.println(isNarcissisticNumber(407));
          }
      }
    musterloesung: |
      public class Narcissus {
          public static boolean isNarcissisticNumber(long number) {
              int k = 0;
              long n = number;
              do {
                  k++;
                  n = n / 10;
              } while (n > 0);

              long sum = 0;
              n = number;
              while (n > 0) {
                  long digit = n % 10;
                  long power = 1;
                  for (int i = 0; i < k; i++) {
                      power = power * digit;
                  }
                  sum = sum + power;
                  n = n / 10;
              }
              return sum == number;
          }

          public static void main(String[] args) {
              System.out.println(isNarcissisticNumber(407));
          }
      }
    tests:
      - { aufruf: "isNarcissisticNumber(407)", erwartet: "true" }
      - { aufruf: "isNarcissisticNumber(408)", erwartet: "false" }
      - { aufruf: "isNarcissisticNumber(0)", erwartet: "true", beschreibung: "Sonderfall 0" }
      - { aufruf: "isNarcissisticNumber(9474)", erwartet: "true" }
      - { aufruf: "isNarcissisticNumber(10)", erwartet: "false" }
      - { aufruf: "isNarcissisticNumber(32164049651L)", erwartet: "true", beschreibung: "elfstellig, passt nur in long" }
      - { aufruf: "isNarcissisticNumber(93084)", erwartet: "true", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Long", "Integer", "Arrays"] }
    fehler:
      - { wert: 1, meldung: "Liefert deine Methode für 407 `false`? Prüfe, ob die zweite Schleife überhaupt läuft. Nach dem Zählen ist die Kopie 0, du brauchst eine neue Kopie." }
      - { wert: 3, meldung: "0 hat eine Ziffer, und 0 hoch 1 ist 0. Zähle die Ziffern mit do-while, damit 0 eine Ziffer bekommt." }
      - { wert: 6, meldung: "Rechnest du die Potenz in `int`? 9 hoch 11 passt nicht in ein `int`. Verwende `long` für Potenz und Summe." }
hinweise:
  - Phase 1 zählt die Ziffern auf einer Kopie, Phase 2 summiert die Potenzen auf einer neuen Kopie.
  - Die Potenz rechnest du mit einer `for`-Schleife. Für Zahlen mit zehn oder mehr Ziffern müssen Potenz und Summe `long` sein.
loesung: |
  **Ansatz:** Erst die Ziffern zählen, dann jede Ziffer hoch diese Anzahl nehmen und aufsummieren. Alles in `long`.
  ---
  Phase 1 mit do-while, damit 0 eine Ziffer hat:
  ```java
  int k = 0;
  long n = number;
  do {
      k++;
      n = n / 10;
  } while (n > 0);
  ```
  ---
  Phase 2 mit innerer Potenzschleife:
  ```java
  long sum = 0;
  n = number;
  while (n > 0) {
      long digit = n % 10;
      long power = 1;
      for (int i = 0; i < k; i++) {
          power = power * digit;
      }
      sum = sum + power;
      n = n / 10;
  }
  return sum == number;
  ```
  ---
  Kontrolle: 407 hat drei Ziffern, 64 + 0 + 343 = 407. Für 32164049651 (elf Ziffern) ist 9¹¹ = 31381059609, das passt nur in `long`. Für 0 läuft Phase 2 nicht, `sum = 0` gleich `number`, also `true`.
```

```aufgabe
id: zi-fn-ausgabe-zaehlen
titel: Fröhliche Zahlen von 1 bis 20 zählen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? Rechne die Folgen von Hand, ohne das Programm auszuführen.
teile:
  - typ: ausgabe
    code: |
      public class Zaehlen {
          public static int squareSum(int number) {
              int sum = 0;
              while (number > 0) {
                  int digit = number % 10;
                  sum = sum + digit * digit;
                  number = number / 10;
              }
              return sum;
          }

          public static boolean isHappy(int number) {
              int n = number;
              while (n != 1 && n != 4) {
                  n = squareSum(n);
              }
              return n == 1;
          }

          public static void main(String[] args) {
              int count = 0;
              for (int i = 1; i <= 20; i++) {
                  if (isHappy(i)) {
                      System.out.print(i + " ");
                      count++;
                  }
              }
              System.out.println();
              System.out.println(count);
          }
      }
    loesung: |
      1 7 10 13 19 
      5
    fehler:
      - wert: "1 10 13 19 \n4"
        meldung: '7 ist fröhlich: 7 → 49 → 97 → 130 → 10 → 1. Die Folge ist nur länger.'
      - wert: "7 10 13 19 \n4"
        meldung: 'Für 1 läuft die Schleife nicht, `n == 1` ist sofort wahr. 1 ist fröhlich.'
hinweise:
  - 'Zahlen, die über 10, 13 oder 100 laufen, enden bei 1. Eine Folge, die 4, 16, 37, 58, 89, 145, 42 oder 20 erreicht, ist traurig.'
  - 'Für die einstelligen Zahlen: Nur 1 und 7 sind fröhlich. 2 → 4, 3 → 9 → 81 → 65 → 61 → 37 ist traurig.'
loesung: |
  **Ansatz:** Für jede Zahl von 1 bis 20 die Folge bis 1 oder 4 verfolgen. Bekannte Zwischenwerte abkürzen.
  ---
  Einstellig: 1 und 7 sind fröhlich. 2 → 4 und die 4 selbst sind traurig. 3, 5, 6, 8 und 9 laufen über 9, 25, 36, 64 oder 81 in den Kreis mit der 4.
  ---
  Fröhlich sind 10 → 1, 13 → 10 → 1 und 19 → 82 → 68 → 100 → 1.
  ---
  Traurig sind 11 → 2 und 12 → 5. Ebenso 14 → 17 → 50 → 25 und 15 → 26 → 40 → 16. Auch 16 → 37, 17 → 50, 18 → 65 und 20 → 4 sind traurig.
  ---
  Ausgabe: `1 7 10 13 19 ` und darunter `5`.
```

## Rechnen mit Schleifen: Multiplikation, Wurzel und ggT

```aufgabe
id: zi-re-check-vorbedingung
titel: Welche Vorbedingung braucht die Methode?
niveau: 1
art: check
angabe: |
  Die Methode soll `x · y` liefern. Für welche Argumente stimmt das sicher? Vorbedingungen kennst du aus
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
  ```java
  public static int myMult(int x, int y) {
      int result = 0;
      for (int i = 0; i < y; i++) {
          result = result + x;
      }
      return result;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`y >= 0`', '`x >= 0`', '`x > 0 && y > 0` ist nötig, sonst stimmt nichts']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Negative `x` sind kein Problem: `myMult(-3, 2)` addiert zweimal −3 und liefert −6. Gefährlich ist ein negatives `y`.'
      - wert: 2
        meldung: '`x` darf negativ oder 0 sein, und `y = 0` liefert richtig 0. Nur negatives `y` ist falsch, weil die Schleife dann nie läuft.'
hinweise:
  - Probiere `myMult(3, -2)`. Wie oft läuft die Schleife?
loesung: |
  Für `y < 0` ist `0 < y` sofort falsch. Die Schleife läuft nicht, das Ergebnis ist 0 statt `x · y`.
  ---
  Für jedes `y ≥ 0` wird `x` genau `y`-mal addiert. Die passende Vorbedingung ist `y >= 0`.
```

In diesem Abschnitt baust du Rechenoperationen nach, die Java eigentlich schon kann. Warum? Weil genau das in
Einstufungstests und auf Blättern verlangt wird. Im Einstufungstest 2018 sollte die Methode `myMult` zum
Beispiel `x` mit `y` multiplizieren, ohne den Operator `*` zu benutzen (Annahme dort: `x > 0` und `y > 0`).

Solche Aufgaben prüfen, ob du eine Rechnung in
einfache, wiederholte Schritte zerlegen kannst. Das ist der Kern jedes **Algorithmus**, also jeder genauen
Schritt-für-Schritt-Anleitung zum Lösen einer Aufgabe.

### Multiplikation als wiederholte Addition

5 · 6 bedeutet „sechsmal die 5“, also 5 + 5 + 5 + 5 + 5 + 5 = 30. Eine Schleife, die `y`-mal läuft und
jedes Mal `x` addiert, berechnet also `x · y`.

:::beispiel[myMult(5, 6) und das Ergebnis in einer short-Variable]
```java
public static int myMult(int x, int y) {
    int result = 0;
    for (int i = 0; i < y; i++) {
        result = result + x;
    }
    return result;
}
```

1. `result` beginnt bei 0, dem neutralen Wert der Addition.
2. Die Schleife läuft für `i = 0, 1, …, 5`, also sechsmal. Bei `i = 6` ist `6 < 6` falsch.
3. `result` wächst bei jedem Durchlauf um 5: 5, 10, 15, 20, 25, 30.
4. Die Methode liefert 30.

Im Einstufungstest 2018 sollte das Ergebnis eines solchen Aufrufs in einer Variable vom Typ `short` landen
(`short` ist ein ganzzahliger Typ mit kleinerem Wertebereich, von −32768 bis 32767). Die Zeile
`short result = myMult(5, 6);` kompiliert aber nicht. Der Compiler meldet
`incompatible types: possible lossy conversion from int to short` („unverträgliche Typen: mögliche verlustbehaftete
Umwandlung von int nach short“). Der Compiler kennt den Wert des Aufrufs nicht, er kennt nur den Rückgabetyp
`int`. Und nicht jeder `int`-Wert passt in `short`. Darum ist ein **expliziter Cast** nötig:
`short result = (short) myMult(5, 6);`. Mehr zu Casts steht in [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).
:::

```aufgabe
id: zi-re-ausgabe-mymult
titel: Zwischenergebnisse beim Multiplizieren
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: Was gibt dieser Code aus?
teile:
  - typ: ausgabe
    code: |
      int x = 4;
      int y = 3;
      int result = 0;
      for (int i = 0; i < y; i++) {
          result = result + x;
          System.out.print(result + " ");
      }
      System.out.println();
      System.out.println(result);
    loesung: |
      4 8 12 
      12
    fehler:
      - wert: "0 4 8 \n12"
        meldung: 'Die Ausgabe steht **nach** der Addition. Schon in der ersten Zeile des Rumpfs wird `result` zu 4.'
      - wert: "4 8 12 16 \n16"
        meldung: 'Die Schleife läuft für `i = 0, 1, 2`, also dreimal. Bei `i = 3` ist `3 < 3` falsch.'
hinweise:
  - 'Die Schleife läuft `y`-mal. In jedem Durchlauf wird zuerst addiert und dann ausgegeben.'
loesung: |
  **Ansatz:** `y = 3` Durchläufe, in jedem kommt `x = 4` dazu.
  ---
  `result`: 4, 8, 12. Jeder Wert wird mit einem Leerzeichen dahinter ausgegeben.
  ---
  Nach der Schleife folgen ein Zeilenumbruch und `12`. Probe: 4 · 3 = 12.
```

:::achtung[Ein Durchlauf zu viel]
```java
for (int i = 0; i <= y; i++) {   // falsch
    result = result + x;
}
```

Mit `i <= y` läuft die Schleife für `i = 0` bis `i = y`, also `y + 1`-mal. `myMult(5, 6)` liefert dann 35 statt 30.
Beginnt `i` bei 0, lautet die Bedingung `i < y`. Beginnt `i` bei 1, lautet sie `i <= y`. Beides ergibt genau
`y` Durchläufe.
:::

### Die ganzzahlige Wurzel

Die Methode `getIntegerRoot(k)` aus dem Einstufungstest im Sommer 2020 soll prüfen, ob `k` eine
**Quadratzahl** ist, also das Quadrat einer ganzen Zahl. Dann liefert sie diese Zahl, sonst −1. Die Idee: Probiere
`i = 0, 1, 2, …` der Reihe nach, solange `i · i` noch kleiner als `k` ist. Sobald `i · i` mindestens `k` ist,
hörst du auf und schaust, ob du `k` genau getroffen hast.

:::beispiel[getIntegerRoot(49) und getIntegerRoot(50)]
```java
public static int getIntegerRoot(int k) {
    int i = 0;
    while (i * i < k) {
        i++;
    }
    if (i * i == k) {
        return i;
    }
    return -1;
}
```

Für `k = 49`:

1. `i` läuft 0, 1, 2, … Bei `i = 6` ist `36 < 49` noch wahr, also wird `i` zu 7.
2. Bei `i = 7` ist `49 < 49` falsch. Die Schleife endet.
3. `7 · 7 == 49` ist wahr. Die Methode liefert 7.

Für `k = 50`:

1. Bei `i = 7` ist `49 < 50` noch wahr, also wird `i` zu 8.
2. Bei `i = 8` ist `64 < 50` falsch. Die Schleife endet.
3. `64 == 50` ist falsch. Die Methode liefert −1, denn 50 ist keine Quadratzahl.

Für `k = 0` endet die Schleife sofort, und `0 · 0 == 0` liefert 0. Auch das ist richtig.
:::

:::achtung[Nach der Schleife nicht mehr geprüft]
```java
while (i * i < k) {
    i++;
}
return i;   // falsch: liefert für 50 den Wert 8
```

Die Schleife endet bei der ersten Zahl, deren Quadrat **mindestens** `k` ist. Das ist nicht immer die Wurzel.
Für 50 liefert diese Version 8, obwohl 8 · 8 = 64 ist. Die Prüfung `i * i == k` nach der Schleife ist der
eigentliche Kern der Methode.
:::

```aufgabe
id: zi-re-zeilen-wurzel
titel: Fehler in getIntegerRoot
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll für eine Quadratzahl `k ≥ 0` ihre Wurzel liefern und sonst −1. Sie kompiliert, liefert
  aber zum Beispiel für 25 den Wert −1 und für 26 den Wert 5. Markiere die fehlerhaften Zeilen.
teile:
  - typ: zeilen
    code: |
      public static int getIntegerRoot(int k) {
          int i = 0;
          while (i * i <= k) {
              i++;
          }
          if (i * i != k) {
              return i;
          }
          return -1;
      }
    loesung: [3, 6]
    fehler:
      - wert: [3]
        meldung: 'Schau dir auch den Vergleich in Zeile 6 an. Wann soll `i` zurückgegeben werden, bei Gleichheit oder bei Ungleichheit?'
      - wert: [6]
        meldung: 'Verfolge die Schleife für `k = 25`. Mit `<=` läuft sie auch bei `i = 5` noch einmal. Wo steht `i` danach?'
hinweise:
  - Verfolge die Methode für `k = 25`. Welchen Wert hat `i` nach der Schleife?
  - 'Die Schleife soll bei der ersten Zahl anhalten, deren Quadrat mindestens `k` ist.'
loesung: |
  **Ansatz:** Die Methode mit 25 und 26 verfolgen.
  ---
  Zeile 3: Mit `i * i <= k` läuft die Schleife bei `i = 5` noch einmal, weil `25 <= 25`. Danach ist `i = 6`. Richtig ist `i * i < k`.
  ---
  Zeile 6: Zurückgegeben werden soll `i`, wenn `i * i == k` gilt, nicht bei Ungleichheit.
  ---
  Mit beiden Korrekturen liefert die Methode 5 für 25 und −1 für 26.
```

### Der größte gemeinsame Teiler

:::definition[Größter gemeinsamer Teiler]
Ein **gemeinsamer Teiler** von zwei Zahlen `a` und `b` ist eine Zahl, die beide ohne Rest teilt. Der
**größte gemeinsame Teiler**, kurz **ggT**, ist der größte davon. Man braucht ihn zum Beispiel, um einen Bruch
vollständig zu kürzen.
:::

**Beispiel:** Die Teiler von 12 sind 1, 2, 3, 4, 6, 12. Die Teiler von 18 sind 1, 2, 3, 6, 9, 18. Gemeinsam sind
1, 2, 3 und 6, also ist ggT(12, 18) = 6. **Kein Beispiel:** 3 ist zwar ein gemeinsamer Teiler, aber nicht der
größte. 36 ist durch 12 und 18 teilbar, ist also ein gemeinsames Vielfaches, aber kein Teiler.

Alle Teiler aufzulisten ist mühsam. Schon vor über 2000 Jahren beschrieb der griechische Mathematiker Euklid
ein schnelleres Verfahren. Es beruht auf einer einfachen Beobachtung: Teilt eine Zahl `t` sowohl `a` als auch
`b`, dann teilt sie auch die Differenz `a − b`. Der ggT von `a` und `b` ist also derselbe wie der ggT von
`a − b` und `b`. Man darf die größere Zahl immer durch die Differenz ersetzen, bis beide gleich sind.

:::beispiel[ggT(84, 36) mit Subtraktion und mit Rest]
Die Vorlesungsfolien zu Methoden zeigen zwei Fassungen. Die erste subtrahiert:

```java
public static int gcd(int a, int b) {
    if (a == 0) {
        return b;
    }
    while (b != 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}
```

Verfolgt für `gcd(84, 36)`, jede Zeile ein Durchlauf:

1. 84 > 36, also `a = 84 − 36 = 48`. Jetzt (48, 36).
2. 48 > 36, also `a = 12`. Jetzt (12, 36).
3. 12 < 36, also `b = 36 − 12 = 24`. Jetzt (12, 24).
4. `b = 24 − 12 = 12`. Jetzt (12, 12).
5. Gleich groß, also `else`: `b = 12 − 12 = 0`. Jetzt (12, 0). Die Schleife endet, das Ergebnis ist 12.

Mehrmals hintereinander dieselbe Zahl abziehen ist nichts anderes als den Rest bilden. Die schnellere Fassung
nimmt deshalb gleich `%`:

```java
public static int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
```

1. `84 % 36 = 12`. Neues Paar (36, 12).
2. `36 % 12 = 0`. Neues Paar (12, 0). Die Schleife endet, das Ergebnis ist 12.

Statt fünf Durchläufen genügen zwei. Probe: 84 = 12 · 7 und 36 = 12 · 3, und 7 und 3 haben keinen
gemeinsamen Teiler außer 1.
:::

```aufgabe
id: zi-re-trace-ggt-sub
titel: ggT(40, 15) mit Subtraktion
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Verfolge die subtrahierende Fassung `gcd(40, 15)` aus dem Beispiel. Trage nach jedem Durchlauf `a` und `b` ein.
teile:
  - typ: trace
    spalten: [a, b]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4, nach Durchlauf 5]
    vorgabe: 1
    loesung: [[40, 15], [25, 15], [10, 15], [10, 5], [5, 5], [5, 0]]
    fehler:
      - wert: ["40", "15", "25", "15", "10", "15", "10", "5", "5", "5", "0", "5"]
        meldung: 'Bei Gleichstand (5, 5) ist `a > b` falsch. Dann läuft der `else`-Zweig, und `b` wird 0.'
hinweise:
  - Die größere Zahl wird durch die Differenz ersetzt. Bei Gleichstand ändert sich `b`.
loesung: |
  **Ansatz:** In jedem Durchlauf die größere Zahl um die kleinere verringern.
  ---
  (40, 15) → (25, 15) → (10, 15) → (10, 5) → (5, 5) → (5, 0).
  ---
  Jetzt ist `b = 0`, die Schleife endet. ggT(40, 15) = 5. Probe: 40 = 5 · 8 und 15 = 5 · 3.
```

:::achtung[Ohne den Sonderfall a == 0 hängt das Programm]
Lässt man in der subtrahierenden Fassung das `if (a == 0)` weg, passiert bei `gcd(0, 5)` Folgendes. `b != 0` ist
wahr. `0 > 5` ist falsch, also `b = 5 − 0 = 5`. Nichts hat sich geändert. Der nächste Durchlauf macht genau
dasselbe, und das für immer. Das ist eine **Endlosschleife**. Die Fassung mit `%` hat dieses Problem nicht:
`0 % 5 = 0`, das Paar wird (5, 0), und sie liefert richtig 5.
:::

:::merke[Rechnen mit Schleifen]
1. **Multiplikation** `x · y`: `y`-mal `x` addieren, Start bei 0. Vorbedingung `y ≥ 0`.
2. **Potenz** `b` hoch `e`: `e`-mal mit `b` multiplizieren, Start bei 1.
3. **Ganzzahlige Wurzel**: `i` erhöhen, solange `i * i < k`. Danach mit `i * i == k` prüfen.
4. **ggT nach Euklid**: `r = a % b; a = b; b = r;` bis `b == 0`. Dann ist `a` der ggT.
5. Teste jede dieser Methoden auch mit 0 und mit 1 als Argument.
:::

```reflexion
frage: Warum endet die `%`-Fassung des Euklidischen Algorithmus für alle `a, b ≥ 0` immer? Denk an den Wert von `b`.
antwort: |
  In jedem Durchlauf wird `b` durch `a % b` ersetzt. Ein Rest beim Teilen durch `b` ist immer kleiner als `b`
  und nie negativ, solange beide Zahlen nicht negativ sind. Also wird `b` mit jedem Durchlauf echt kleiner und
  bleibt mindestens 0. Eine solche Folge ganzer Zahlen muss nach endlich vielen Schritten bei 0 ankommen. Dann
  ist `b != 0` falsch, und die Schleife endet. Bei der subtrahierenden Fassung wird nur eine der beiden Zahlen
  kleiner, und bei `a = 0` sogar keine. Darum braucht sie den Sonderfall.
```

```aufgabe
id: zi-re-gefuehrt-ggt-mod
titel: ggT(105, 45) mit Rest
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne `gcd(105, 45)` mit der `%`-Fassung aus dem Beispiel. Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "15"
    fehler:
      - wert: "5"
        meldung: '5 ist ein gemeinsamer Teiler, aber nicht der größte. 105 = 15 · 7 und 45 = 15 · 3.'
      - wert: "0"
        meldung: 'Die Schleife endet, wenn `b` 0 ist. Das Ergebnis steht dann in `a`, nicht in `b`.'
gefuehrt:
  - text: Wie viel ist `105 % 45`?
    teil: { typ: zahl, loesung: "15" }
    erklaerung: 45 passt zweimal in 105 (90), Rest 15.
  - text: Welches Paar `(a, b)` entsteht nach dem ersten Durchlauf?
    teil:
      typ: auswahl
      optionen: ['(45, 15)', '(15, 45)', '(105, 15)']
      richtig: [0]
    erklaerung: '`a` bekommt den alten Wert von `b` (45), `b` bekommt den Rest (15).'
  - text: Wie viel ist `45 % 15`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: 45 = 3 · 15, kein Rest. Das neue Paar ist (15, 0).
  - text: Was liefert die Methode?
    teil: { typ: zahl, loesung: "15" }
    erklaerung: 'Bei `b = 0` endet die Schleife, und `a = 15` wird zurückgegeben.'
hinweise:
  - 'Ein Durchlauf: Rest bilden, dann `a = b` und `b = Rest`.'
  - Die Schleife endet, wenn der Rest 0 wird. Das Ergebnis ist der letzte Wert von `a`.
loesung: |
  **Ansatz:** Paare mit `(a, b) → (b, a % b)` bilden, bis `b = 0` ist.
  ---
  (105, 45) → (45, 15) → (15, 0).
  ---
  Ergebnis 15. Probe: 105 = 15 · 7 und 45 = 15 · 3. Die Faktoren 7 und 3 haben keinen gemeinsamen Teiler mehr.
```

```aufgabe
id: zi-re-lueckentext-short
titel: Das Ergebnis in eine short-Variable
niveau: 2
lernziel: 6
kompetenz: verstehen
quelle: Einstufungstest 2018, Hauptprogramm (short result), nachgebaut
angabe: |
  Ergänze die Lücke so, dass das Programm kompiliert und `32` ausgibt. `myMult` darf nicht verändert werden.
teile:
  - typ: lueckentext
    code: |
      public class Kurz {
          public static int myMult(int x, int y) {
              int result = 0;
              for (int i = 0; i < y; i++) {
                  result = result + x;
              }
              return result;
          }

          public static void main(String[] args) {
              short result = ___ myMult(8, 4);
              System.out.println(result);
          }
      }
    luecken: [["(short)"]]
    fehler:
      - wert: ["(int)"]
        meldung: '`myMult` liefert schon ein `int`. Das Problem ist die Zuweisung an `short`, dafür braucht es einen Cast nach `short`.'
      - wert: [""]
        meldung: 'Ohne Cast meldet der Compiler `possible lossy conversion from int to short`. Ein `int`-Rückgabewert passt nicht immer in `short`.'
hinweise:
  - Der Rückgabetyp ist `int`, die Zielvariable `short`. Welche Richtung braucht einen expliziten Cast?
  - 'Ein expliziter Cast steht in runden Klammern vor dem Ausdruck.'
loesung: |
  **Ansatz:** `int` nach `short` ist eine verengende Umwandlung, also vom größeren in den kleineren Wertebereich. Java verlangt dafür einen expliziten Cast.
  ---
  Lücke: `(short)`. Die Zeile lautet `short result = (short) myMult(8, 4);`.
  ---
  32 passt in den `short`-Bereich von −32768 bis 32767. Ausgabe `32`.
```

```aufgabe
id: zi-re-code-mymult
titel: myMult ohne den Operator *
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Einstufungstest 2018 (myMult, umformuliert und um negative x erweitert)
angabe: |
  Implementiere `int myMult(int x, int y)`. Die Methode liefert `x · y`, **ohne** den Operator `*` zu verwenden.
  Vorbedingung: `y ≥ 0`. `x` darf auch negativ sein. Kein `Math`.

  Beispiele: `myMult(6, 8)` liefert 48, `myMult(-4, 5)` liefert −20, `myMult(9, 0)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Mult {
          public static int myMult(int x, int y) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(myMult(6, 8));
          }
      }
    musterloesung: |
      public class Mult {
          public static int myMult(int x, int y) {
              int result = 0;
              for (int i = 0; i < y; i++) {
                  result = result + x;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(myMult(6, 8));
          }
      }
    tests:
      - { aufruf: "myMult(6, 8)", erwartet: "48" }
      - { aufruf: "myMult(-4, 5)", erwartet: "-20", beschreibung: "negatives x" }
      - { aufruf: "myMult(9, 0)", erwartet: "0", beschreibung: "y = 0" }
      - { aufruf: "myMult(0, 9)", erwartet: "0" }
      - { aufruf: "myMult(1, 1)", erwartet: "1" }
      - { aufruf: "myMult(250, 400)", erwartet: "100000", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 1, meldung: "Kommt 54 statt 48 heraus? Dann läuft die Schleife einmal zu oft. Mit Start bei 0 lautet die Bedingung `i < y`." }
      - { wert: 3, meldung: "Für `y = 0` darf die Schleife gar nicht laufen. Das Ergebnis beginnt bei 0." }
hinweise:
  - Multiplikation ist wiederholte Addition. Wie oft musst du `x` addieren?
  - 'Start `result = 0`, dann `y`-mal `result = result + x;`.'
loesung: |
  **Ansatz:** `x · y` ist `y`-mal die Zahl `x` addiert.
  ---
  ```java
  int result = 0;
  for (int i = 0; i < y; i++) {
      result = result + x;
  }
  return result;
  ```
  ---
  Kontrolle: `myMult(-4, 5)` addiert fünfmal −4, also −20. Für `y = 0` läuft die Schleife nicht, Ergebnis 0. Ob du `*` verwendet hast, prüfen die Tests nicht. Im Einstufungstest gäbe es dafür aber keine Punkte.
```

```aufgabe
id: zi-re-code-wurzel
titel: getIntegerRoot schreiben
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Einstufungstest SS 2020 (getIntegerRoot, umformuliert)
angabe: |
  Implementiere `int getIntegerRoot(int k)`. Ist `k` das Quadrat einer ganzen Zahl `i ≥ 0`, liefert die
  Methode `i`, sonst −1. Vorbedingung: `0 ≤ k ≤ 1000000000`. Kein `Math`, also auch kein `Math.sqrt`.

  Beispiele: `getIntegerRoot(169)` liefert 13, `getIntegerRoot(15)` liefert −1, `getIntegerRoot(0)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Root {
          public static int getIntegerRoot(int k) {
              return -1; // TODO
          }

          public static void main(String[] args) {
              System.out.println(getIntegerRoot(169));
          }
      }
    musterloesung: |
      public class Root {
          public static int getIntegerRoot(int k) {
              int i = 0;
              while (i * i < k) {
                  i++;
              }
              if (i * i == k) {
                  return i;
              }
              return -1;
          }

          public static void main(String[] args) {
              System.out.println(getIntegerRoot(169));
          }
      }
    tests:
      - { aufruf: "getIntegerRoot(169)", erwartet: "13" }
      - { aufruf: "getIntegerRoot(15)", erwartet: "-1" }
      - { aufruf: "getIntegerRoot(0)", erwartet: "0", beschreibung: "Sonderfall 0" }
      - { aufruf: "getIntegerRoot(4)", erwartet: "2" }
      - { aufruf: "getIntegerRoot(50)", erwartet: "-1", beschreibung: "knapp über einer Quadratzahl" }
      - { aufruf: "getIntegerRoot(1000000000)", erwartet: "-1", versteckt: true }
      - { aufruf: "getIntegerRoot(998001)", erwartet: "999", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 5, meldung: "Für 50 kommt 8 heraus? Nach der Schleife musst du noch prüfen, ob `i * i` genau `k` ist." }
      - { wert: 3, meldung: "Für 0 muss 0 herauskommen. Beginnt dein `i` bei 0, und prüfst du `i * i == k` nach der Schleife?" }
      - { wert: "verboteneApi", meldung: "`Math.sqrt` ist verboten. Probiere `i = 0, 1, 2, …`, solange `i * i < k`." }
hinweise:
  - Erhöhe `i` ab 0, solange `i * i` kleiner als `k` ist.
  - 'Nach der Schleife gilt `i * i >= k`. Nur bei Gleichheit ist `i` die Wurzel.'
loesung: |
  **Ansatz:** Kandidaten der Reihe nach probieren und am Ende genau prüfen.
  ---
  ```java
  int i = 0;
  while (i * i < k) {
      i++;
  }
  if (i * i == k) {
      return i;
  }
  return -1;
  ```
  ---
  Kontrolle: 169 endet bei `i = 13`, 13 · 13 = 169, also 13. Für 15 endet sie bei 4, 16 ist nicht 15, also −1.
  ---
  Die Vorbedingung `k ≤ 1000000000` sorgt dafür, dass `i * i` nicht überläuft. Ab 46341 wäre das Quadrat größer als 2147483647. In einer Studierenden-Lösung zum Einstufungstest 2020 lief die Schleife bis `k`. Bei großen Zahlen, die keine Quadratzahlen sind, sind das unnötig viele Durchläufe.
```

```aufgabe
id: zi-re-code-ggt
titel: Den ggT mit Rest berechnen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Vorlesungsfolien Methoden SS 2021 (ggT-Berechnung), als Aufgabe umgesetzt
angabe: |
  Implementiere `int gcd(int a, int b)` mit dem Euklidischen Algorithmus in der `%`-Fassung.
  Vorbedingung: `a ≥ 0`, `b ≥ 0`, nicht beide 0. Kein `Math`.

  Beispiele: `gcd(84, 36)` liefert 12, `gcd(17, 5)` liefert 1, `gcd(0, 7)` liefert 7.
teile:
  - typ: code
    vorlage: |
      public class Euklid {
          public static int gcd(int a, int b) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(gcd(84, 36));
          }
      }
    musterloesung: |
      public class Euklid {
          public static int gcd(int a, int b) {
              while (b != 0) {
                  int r = a % b;
                  a = b;
                  b = r;
              }
              return a;
          }

          public static void main(String[] args) {
              System.out.println(gcd(84, 36));
          }
      }
    tests:
      - { aufruf: "gcd(84, 36)", erwartet: "12" }
      - { aufruf: "gcd(36, 84)", erwartet: "12", beschreibung: "kleinere Zahl zuerst" }
      - { aufruf: "gcd(17, 5)", erwartet: "1" }
      - { aufruf: "gcd(0, 7)", erwartet: "7", beschreibung: "a = 0" }
      - { aufruf: "gcd(7, 0)", erwartet: "7", beschreibung: "b = 0" }
      - { aufruf: "gcd(46368, 28657)", erwartet: "1", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 4, meldung: "Hängt dein Programm bei `gcd(0, 7)`? Die subtrahierende Fassung braucht den Sonderfall `a == 0`. Mit `%` tritt das Problem nicht auf." }
      - { wert: 1, meldung: "Liefert deine Methode 0? Nach der Schleife ist `b` gleich 0. Zurückgegeben wird `a`." }
hinweise:
  - 'Ein Durchlauf: `r = a % b`, dann `a = b`, dann `b = r`.'
  - Die Schleife läuft, solange `b != 0`. Das Ergebnis ist dann `a`.
loesung: |
  **Ansatz:** Euklid mit Rest: `(a, b) → (b, a % b)`, bis `b = 0`.
  ---
  ```java
  while (b != 0) {
      int r = a % b;
      a = b;
      b = r;
  }
  return a;
  ```
  ---
  Kontrolle: `gcd(36, 84)`: `36 % 84 = 36`, also (84, 36). Die Zahlen werden im ersten Durchlauf von selbst getauscht. Danach geht es wie bei (84, 36) weiter, Ergebnis 12.
  ---
  Die Hilfsvariable `r` ist nötig, weil `a = b` den alten Wert von `a` überschreibt, der für den Rest noch gebraucht wird.
```

```aufgabe
id: zi-re-code-divide
titel: Ganzzahldivision ohne / und %
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Einstufungstest-Stil (myMult als Umkehrung), Inhalt neu
angabe: |
  Implementiere `int myDivide(int x, int y)`. Die Methode liefert `x / y` als Ganzzahldivision, **ohne** die
  Operatoren `/` und `%` zu verwenden. Vorbedingung: `x ≥ 0`, `y > 0`. Kein `Math`.

  Beispiele: `myDivide(17, 5)` liefert 3, `myDivide(4, 9)` liefert 0, `myDivide(20, 4)` liefert 5.
teile:
  - typ: code
    vorlage: |
      public class Divide {
          public static int myDivide(int x, int y) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(myDivide(17, 5));
          }
      }
    musterloesung: |
      public class Divide {
          public static int myDivide(int x, int y) {
              int count = 0;
              while (x >= y) {
                  x = x - y;
                  count++;
              }
              return count;
          }

          public static void main(String[] args) {
              System.out.println(myDivide(17, 5));
          }
      }
    tests:
      - { aufruf: "myDivide(17, 5)", erwartet: "3" }
      - { aufruf: "myDivide(20, 4)", erwartet: "5", beschreibung: "geht genau auf" }
      - { aufruf: "myDivide(4, 9)", erwartet: "0", beschreibung: "x kleiner als y" }
      - { aufruf: "myDivide(0, 3)", erwartet: "0" }
      - { aufruf: "myDivide(7, 1)", erwartet: "7" }
      - { aufruf: "myDivide(1000000, 7)", erwartet: "142857", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 2, meldung: "Kommt 4 statt 5 heraus? Bei `x == y` passt `y` noch einmal hinein. Die Bedingung lautet `x >= y`." }
      - { wert: 3, meldung: "Passt `y` gar nicht in `x`, ist das Ergebnis 0. Die Schleife darf dann nicht laufen." }
hinweise:
  - Wie oft kannst du `y` von `x` abziehen, bevor der Rest kleiner als `y` ist?
  - 'Solange `x >= y`: `x = x - y;` und einen Zähler erhöhen.'
loesung: |
  **Ansatz:** Division ist wiederholtes Abziehen. Gezählt wird, wie oft `y` in `x` passt.
  ---
  ```java
  int count = 0;
  while (x >= y) {
      x = x - y;
      count++;
  }
  return count;
  ```
  ---
  Kontrolle: 17 → 12 → 7 → 2, dreimal abgezogen, Ergebnis 3. Der Wert, der in `x` übrig bleibt, ist der Rest 2. Mit `return x;` hätte man also `17 % 5` nachgebaut.
  ---
  Bei `x == y` muss noch einmal abgezogen werden, darum `>=`. Mit `>` käme für 20 und 4 nur 4 heraus.
```

```aufgabe
id: zi-re-rf-ggt-varianten
titel: Vier Aussagen zu einer ggT-Variante
niveau: 3
lernziel: 6
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  Gegeben ist diese Variante der subtrahierenden Fassung **ohne** den Sonderfall `a == 0`:
  ```java
  public static int g(int a, int b) {
      while (a != b) {
          if (a > b) {
              a = a - b;
          } else {
              b = b - a;
          }
      }
      return a;
  }
  ```
  Beurteile jede Aussage. Beachte, dass die Bedingung hier `a != b` lautet.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`g(12, 18)` liefert 6.'
        richtig: true
        erklaerung: '(12, 18) → (12, 6) → (6, 6). Jetzt ist `a == b`, die Schleife endet mit 6.'
      - text: '`g(7, 7)` liefert 7, ohne dass die Schleife läuft.'
        richtig: true
        erklaerung: 'Die Bedingung `7 != 7` ist sofort falsch. Zurückgegeben wird `a = 7`.'
      - text: '`g(0, 5)` liefert 5.'
        richtig: false
        erklaerung: '0 > 5 ist falsch, also `b = 5 − 0 = 5`. Das Paar bleibt (0, 5), die Schleife endet nie.'
      - text: 'Für alle `a, b > 0` terminiert `g` und liefert den ggT.'
        richtig: true
        erklaerung: 'Bei positiven Zahlen wird die größere echt kleiner und bleibt positiv. Irgendwann sind beide gleich, und das ist der ggT.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Verfolge `g(0, 5)` zwei Durchläufe lang. Ändert sich das Paar?'
      - wert: [r, r, f, f]
        meldung: 'Aussage 4 spricht nur von `a, b > 0`. Kann dort eine der Zahlen 0 werden, solange beide verschieden sind?'
hinweise:
  - Verfolge jeden Aufruf ein paar Durchläufe lang auf Papier.
  - 'Wird eine positive Zahl `a > b > 0` zu `a − b`, bleibt sie positiv.'
loesung: |
  **Ansatz:** Jede Aussage mit einem Trace prüfen. Bei der allgemeinen Aussage begründen, warum die Werte kleiner werden.
  ---
  Aussagen 1 und 2 sind richtig: (12, 18) → (12, 6) → (6, 6) liefert 6, und (7, 7) liefert sofort 7.
  ---
  Aussage 3 ist falsch: Bei (0, 5) wird `b = 5 − 0` gesetzt, nichts ändert sich, die Schleife läuft ewig.
  ---
  Aussage 4 ist richtig: Sind beide positiv und verschieden, wird die größere um die kleinere verringert und bleibt positiv. Die Summe `a + b` sinkt in jedem Schritt. Das geht nur endlich oft, bis `a == b` ist.
```

## Gemischte Wiederholung

Hier sind die Aufgaben gemischt, auch mit Stoff aus den Kapiteln 2, 3, 4 und 6. Im Quiz und auf dem Blatt
steht nicht dabei, welches Verfahren gemeint ist. Bei den ersten beiden Aufgaben musst du nichts rechnen. Du
entscheidest nur, welches Verfahren oder welche Schleife passt. Genau diese Entscheidung steht am Anfang jeder
Blattaufgabe.

```aufgabe
id: zi-mix-verfahren
titel: Welches Verfahren passt?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe das passende Verfahren zu. Du musst nichts programmieren.

  a) „Finde die größte Ziffer einer Zahl.“

  b) „Kürze den Bruch 84/36 vollständig.“

  c) „Prüfe, ob eine Zahl vorwärts und rückwärts gleich lautet.“
teile:
  - typ: auswahl
    label: a)
    optionen: ['Ziffernschleife mit einer Variable für das bisherige Maximum', 'Euklidischer Algorithmus', 'Zahl mit `r * 10 + ziffer` aufbauen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der ggT verbindet zwei Zahlen. Hier geht es um die Ziffern einer einzigen Zahl.'
      - wert: 2
        meldung: 'Eine neue Zahl wird nicht gebraucht. Es genügt, jede Ziffer einmal anzusehen und das Maximum zu merken.'
  - typ: auswahl
    label: b)
    optionen: ['Ziffernschleife mit Summe', 'Euklidischer Algorithmus', 'Potenz mit einer for-Schleife']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Kürzen heißt durch den größten gemeinsamen Teiler teilen. Die Ziffern spielen keine Rolle.'
      - wert: 2
        meldung: 'Zum Kürzen braucht man den ggT von Zähler und Nenner, keine Potenz.'
  - typ: auswahl
    label: c)
    optionen: ['Quersumme bilden und durch 9 teilen', 'Umkehrzahl auf einer Kopie bilden und mit dem Original vergleichen', 'Ziffern zählen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Quersumme ignoriert die Reihenfolge. 12 und 21 haben dieselbe Quersumme, sind aber verschieden.'
      - wert: 2
        meldung: 'Die Anzahl der Ziffern sagt nichts über ihre Reihenfolge.'
hinweise:
  - Überlege bei jeder Aufgabe, ob es um Ziffern einer Zahl, um zwei Zahlen oder um die Reihenfolge geht.
loesung: |
  **Ansatz:** Für jede Aufgabe fragen: Welche Information brauche ich, und welches Verfahren liefert sie?
  ---
  a) Maximum über alle Ziffern: Ziffernschleife mit `if (z > max) max = z;`.
  ---
  b) Kürzen mit dem ggT: ggT(84, 36) = 12, also 84/36 = 7/3. c) Palindrom: Umkehrzahl der Kopie mit dem Original vergleichen.
```

```aufgabe
id: zi-mix-schleifenwahl
titel: Welche Schleife für die Ziffernanzahl?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Methode soll die Ziffern einer Zahl `n ≥ 0` zählen, und `0` soll eine Ziffer haben. Welche Schleife
  passt am besten? Die Schleifenarten kennst du aus [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife).
teile:
  - typ: auswahl
    optionen:
      - 'do-while, weil der Rumpf auch für 0 mindestens einmal laufen muss'
      - 'for, weil man die Anzahl der Durchläufe vorher kennt'
      - 'while, weil sie die Bedingung schon vor dem ersten Durchlauf prüft'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Anzahl der Durchläufe ist ja gerade die gesuchte Ziffernanzahl. Man kennt sie vorher nicht.'
      - wert: 2
        meldung: 'Genau das ist das Problem: Für 0 ist `0 > 0` falsch, und die while-Schleife läuft gar nicht. Ergebnis 0 statt 1.'
hinweise:
  - Was passiert bei `n = 0` mit jeder der drei Schleifen?
  - Eine Schleifenart prüft ihre Bedingung erst nach dem Rumpf.
loesung: |
  **Ansatz:** Den Sonderfall 0 durchspielen.
  ---
  Bei 0 ist `n > 0` sofort falsch. Eine while-Schleife läuft dann nie und zählt 0 Ziffern.
  ---
  Die do-while-Schleife führt den Rumpf zuerst aus: `count = 1`, `n = 0`, dann endet sie. Das ist richtig. Eine while-Schleife mit vorangestelltem `if (n == 0)` wäre die Alternative.
```

```aufgabe
id: zi-mix-char-ziffer
titel: Ziffern als Zeichen und als Zahl
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Was gibt dieser Code aus? Zeichen als Zahlen kennst du aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
teile:
  - typ: ausgabe
    code: |
      char c = '7';
      int w = c - '0';
      System.out.println(w * 2);
      System.out.println((char) ('0' + 4052 % 10));
      System.out.println('0' + 3);
    loesung: |
      14
      2
      51
    fehler:
      - wert: "110\n2\n51"
        meldung: '`c - ''0''` ist 55 − 48 = 7, der Ziffernwert. Erst danach wird mit 2 multipliziert.'
      - wert: "14\n2\n3"
        meldung: '`''0'' + 3` ist `char` plus `int`, also ein `int`: 48 + 3 = 51. Ohne Cast erscheint die Zahl.'
hinweise:
  - "`'0'` hat den Zahlenwert 48. Die Ziffernzeichen folgen lückenlos."
  - Ein `char` plus ein `int` ergibt ein `int`. Erst ein Cast `(char)` macht wieder ein Zeichen daraus.
loesung: |
  **Ansatz:** Zeichen und Ziffernwert unterscheiden: Wert = Zeichen − `'0'`, Zeichen = `(char) ('0' + Wert)`.
  ---
  `w = '7' - '0' = 7`, also `14`. `4052 % 10 = 2`, und `(char) ('0' + 2)` ist das Zeichen `2`.
  ---
  `'0' + 3` ist 48 + 3 = 51, ohne Cast eine Zahl. Ausgabe `14`, `2`, `51`.
```

```aufgabe
id: zi-mix-string-vs-zahl
titel: Rückwärts als Text und als Zahl
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Strings rückwärts durchlaufen kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      public class Rueckwaerts {
          public static String reverseText(String s) {
              String r = "";
              for (int i = s.length() - 1; i >= 0; i--) {
                  r = r + s.charAt(i);
              }
              return r;
          }

          public static int reverseNumber(int n) {
              int r = 0;
              while (n > 0) {
                  r = r * 10 + n % 10;
                  n = n / 10;
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(reverseText("1200"));
              System.out.println(reverseNumber(1200));
              System.out.println(reverseText("1200").equals("" + reverseNumber(1200)));
          }
      }
    loesung: |
      0021
      21
      false
    fehler:
      - wert: "21\n21\ntrue"
        meldung: 'Ein String behält jedes Zeichen, auch die Nullen vorne. Nur die Zahl verliert ihre führenden Nullen.'
      - wert: "0021\n0021\ntrue"
        meldung: 'Eine `int`-Zahl hat keine führenden Nullen. `reverseNumber(1200)` liefert 21.'
hinweise:
  - Der String wird Zeichen für Zeichen umgedreht. Die Zahl wird mit `r * 10 + ziffer` aufgebaut.
  - '`"0021"` und `"21"` sind verschiedene Strings.'
loesung: |
  **Ansatz:** Text und Zahl getrennt umdrehen und dann vergleichen.
  ---
  `reverseText("1200")` hängt die Zeichen 0, 0, 2, 1 an: `"0021"`.
  ---
  `reverseNumber(1200)`: `r` wird 0, 0, 2, 21. Die beiden Nullen vorne zählen nicht.
  ---
  `"0021".equals("21")` ist `false`. Ausgabe `0021`, `21`, `false`.
```

```aufgabe
id: zi-mix-verzweigung
titel: Drei Fälle je Zahl
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? `if` – `else if` – `else` kennst du aus [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
teile:
  - typ: ausgabe
    code: |
      public class Faelle {
          public static int crossSum(int n) {
              int s = 0;
              while (n > 0) {
                  s = s + n % 10;
                  n = n / 10;
              }
              return s;
          }

          public static void main(String[] args) {
              for (int i = 20; i <= 25; i++) {
                  if (crossSum(i) % 3 == 0) {
                      System.out.print("D");
                  } else if (i % crossSum(i) == 0) {
                      System.out.print("H");
                  } else {
                      System.out.print(i % 10);
                  }
              }
              System.out.println();
          }
      }
    loesung: |
      HD23D5
    fehler:
      - wert: "HD23H5"
        meldung: '24 ist zwar eine Harshad-Zahl, aber ihre Quersumme 6 ist durch 3 teilbar. Der erste Zweig ist wahr, also erscheint `D`. Die übrigen Zweige werden nicht mehr geprüft.'
      - wert: "2D23D5"
        meldung: '20 hat die Quersumme 2, und `20 % 2 == 0`. Die zweite Bedingung ist wahr, also erscheint `H`.'
hinweise:
  - 'Bilde für 20 bis 25 die Quersummen: 2, 3, 4, 5, 6, 7.'
  - Von `if` – `else if` – `else` läuft nur der erste Zweig, dessen Bedingung wahr ist.
loesung: |
  **Ansatz:** Für jede Zahl die Quersumme bilden und die Zweige von oben nach unten prüfen.
  ---
  20: Quersumme 2, nicht durch 3 teilbar. `20 % 2 == 0`, also `H`. 21: Quersumme 3, also `D`.
  ---
  22: Quersumme 4, `22 % 4 = 2`, also `22 % 10 = 2`. 23: Quersumme 5, `23 % 5 = 3`, also `3`.
  ---
  24: Quersumme 6, durch 3 teilbar, also `D`. 25: Quersumme 7, `25 % 7 = 4`, also `5`. Ausgabe `HD23D5`.
```

```aufgabe
id: zi-mix-seiteneffekt
titel: Ausgabe in der Methode, Rückgabe danach
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Seiteneffekt und Rückgabe kennst du aus
  [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
teile:
  - typ: ausgabe
    code: |
      public class Seiteneffekt {
          public static int crossSumLoud(int n) {
              int s = 0;
              while (n > 0) {
                  System.out.print(n % 10 + "+");
                  s = s + n % 10;
                  n = n / 10;
              }
              System.out.print("=");
              return s;
          }

          public static void main(String[] args) {
              System.out.println(crossSumLoud(305));
              crossSumLoud(42);
              System.out.println();
          }
      }
    loesung: |
      5+0+3+=8
      2+4+=
    fehler:
      - wert: "8\n2+4+="
        meldung: 'Bevor `println` den Rückgabewert 8 ausgeben kann, muss die Methode laufen. Ihre eigenen Ausgaben erscheinen dabei zuerst, in derselben Zeile.'
      - wert: "5+0+3+=8\n2+4+=6"
        meldung: '`crossSumLoud(42);` steht allein. Der Rückgabewert 6 wird nicht ausgegeben, er geht verloren.'
hinweise:
  - Bei `println(f(...))` erscheinen zuerst die Ausgaben von `f`, dann der Rückgabewert.
  - 'Ein Aufruf, der allein steht, verwirft seinen Rückgabewert.'
loesung: |
  **Ansatz:** Jeden Aufruf in Seiteneffekt (Ausgaben) und Rückgabewert zerlegen.
  ---
  `crossSumLoud(305)` gibt `5+`, `0+`, `3+` und `=` aus und liefert 8. Danach druckt `println` die 8 und den Zeilenumbruch: `5+0+3+=8`.
  ---
  `crossSumLoud(42);` gibt `2+4+=` aus. Der Wert 6 wird verworfen. Das letzte `println()` beendet die Zeile.
```

```aufgabe
id: zi-mix-callbyvalue
titel: Die Methode teilt, das Original bleibt
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Was gibt das Programm aus? Call-by-value kennst du aus
  [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).
teile:
  - typ: ausgabe
    code: |
      public class Kopie {
          public static int countDigits(int n) {
              int c = 0;
              do {
                  c++;
                  n = n / 10;
              } while (n > 0);
              System.out.println("innen " + n);
              return c;
          }

          public static void main(String[] args) {
              int n = 8051;
              int d = countDigits(n);
              System.out.println(n + " hat " + d + " Ziffern");
          }
      }
    loesung: |
      innen 0
      8051 hat 4 Ziffern
    fehler:
      - wert: "innen 0\n0 hat 4 Ziffern"
        meldung: 'Das `n` in `main` und der Parameter `n` sind zwei verschiedene Variablen. Die Methode teilt nur ihre Kopie.'
      - wert: "innen 8051\n8051 hat 4 Ziffern"
        meldung: 'Innerhalb der Methode wird der Parameter bis 0 geteilt. Erst danach kommt die Ausgabe `innen`.'
hinweise:
  - Gleiche Namen in verschiedenen Methoden sind verschiedene Variablen.
  - Java übergibt den Wert 8051 als Kopie an den Parameter.
loesung: |
  **Ansatz:** Parameter und Variable des Aufrufers getrennt verfolgen.
  ---
  In der Methode wird die Kopie 8051 → 805 → 80 → 8 → 0 geteilt, `c = 4`. Ausgabe `innen 0`.
  ---
  Das `n` in `main` ist unverändert 8051. Ausgabe `8051 hat 4 Ziffern`. Begründung: call-by-value, die Methode bekommt nur den Wert.
```

```aufgabe
id: zi-mix-ueberlauf-potenz
titel: Zehn hoch zehn
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Was gibt das Programm aus? Den Überlauf kennst du aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
  Zur Kontrolle: 2³² = 4294967296.
teile:
  - typ: ausgabe
    code: |
      public class Potenz {
          public static int powerInt(int b, int e) {
              int p = 1;
              for (int i = 0; i < e; i++) {
                  p = p * b;
              }
              return p;
          }

          public static long powerLong(long b, int e) {
              long p = 1;
              for (int i = 0; i < e; i++) {
                  p = p * b;
              }
              return p;
          }

          public static void main(String[] args) {
              System.out.println(powerInt(10, 9));
              System.out.println(powerInt(10, 10));
              System.out.println(powerLong(10, 10));
          }
      }
    loesung: |
      1000000000
      1410065408
      10000000000
    fehler:
      - wert: "1000000000\n10000000000\n10000000000"
        meldung: '10¹⁰ ist größer als 2147483647. In `powerInt` läuft die letzte Multiplikation über, ohne Fehlermeldung.'
      - wert: "1000000000\n-2147483648\n10000000000"
        meldung: 'Ein Überlauf landet nicht immer beim kleinsten Wert. Vom richtigen Ergebnis wird ein Vielfaches von 2³² abgezogen.'
hinweise:
  - Passt 10¹⁰ = 10000000000 in ein `int`?
  - 'Bei einem Überlauf wird so oft 4294967296 abgezogen, bis der Wert im `int`-Bereich liegt.'
loesung: |
  **Ansatz:** Für jedes Ergebnis prüfen, ob es in den Rückgabetyp passt.
  ---
  10⁹ = 1000000000 passt in `int`. 10¹⁰ = 10000000000 passt nicht.
  ---
  10000000000 − 2 · 4294967296 = 1410065408. Das gibt `powerInt(10, 10)` aus.
  ---
  `powerLong` rechnet mit `long` und liefert 10000000000. Darum braucht `isNarcissisticNumber` für Zahlen mit zehn oder mehr Ziffern `long`.
```

```aufgabe
id: zi-mix-code-maxdigit
titel: Die größte Ziffer
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Implementiere `int maxDigit(int number)`. Die Methode liefert die größte Ziffer von `number`.
  Vorbedingung: `number ≥ 0`. Keine Strings, kein `Math`.

  Beispiele: `maxDigit(3917)` liefert 9, `maxDigit(500)` liefert 5, `maxDigit(0)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class MaxDigit {
          public static int maxDigit(int number) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(maxDigit(3917));
          }
      }
    musterloesung: |
      public class MaxDigit {
          public static int maxDigit(int number) {
              int max = 0;
              while (number > 0) {
                  int digit = number % 10;
                  if (digit > max) {
                      max = digit;
                  }
                  number = number / 10;
              }
              return max;
          }

          public static void main(String[] args) {
              System.out.println(maxDigit(3917));
          }
      }
    tests:
      - { aufruf: "maxDigit(3917)", erwartet: "9" }
      - { aufruf: "maxDigit(500)", erwartet: "5", beschreibung: "größte Ziffer vorne" }
      - { aufruf: "maxDigit(0)", erwartet: "0" }
      - { aufruf: "maxDigit(1111)", erwartet: "1" }
      - { aufruf: "maxDigit(2147483647)", erwartet: "8", versteckt: true }
    regeln: { keineHilfsmethoden: true, verboteneApi: ["String", "Math", "Integer"] }
    fehler:
      - { wert: 2, meldung: "Wird die vorderste Ziffer geprüft? Die Schleife muss laufen, solange `number > 0` ist, nicht `number > 9`." }
      - { wert: 1, meldung: "Vergleichst du die Ziffer `number % 10` mit dem bisherigen Maximum, nicht die ganze Zahl?" }
hinweise:
  - Ziffernschleife mit einer Variable für das bisherige Maximum.
  - 'Weil keine Ziffer kleiner als 0 ist, darf das Maximum bei 0 beginnen.'
loesung: |
  **Ansatz:** Jede Ziffer einmal ansehen und das bisher größte merken.
  ---
  ```java
  int max = 0;
  while (number > 0) {
      int digit = number % 10;
      if (digit > max) {
          max = digit;
      }
      number = number / 10;
  }
  return max;
  ```
  ---
  Kontrolle: 500 liefert die Ziffern 0, 0, 5, Maximum 5. Für 0 läuft die Schleife nicht, und der Startwert 0 ist richtig.
```

```aufgabe
id: zi-mix-ziffern-im-string
titel: Ziffern in einem Text
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Hier stehen die Ziffern in einem String. Was gibt das Programm aus? Strings durchlaufen kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      String text = "Test am 27.01.2027";
      int count = 0;
      int sum = 0;
      for (int i = 0; i < text.length(); i++) {
          char c = text.charAt(i);
          if (c >= '0' && c <= '9') {
              count++;
              sum = sum + (c - '0');
          }
      }
      System.out.println(count + " " + sum);
    loesung: |
      8 21
    fehler:
      - wert: "8 405"
        meldung: 'Ohne `- ''0''` addierst du die Zeichencodes (48 bis 57) statt der Ziffernwerte.'
      - wert: "10 21"
        meldung: 'Die Punkte sind keine Ziffern. Gezählt werden nur Zeichen von `''0''` bis `''9''`.'
hinweise:
  - Die Ziffern im Text sind 2, 7, 0, 1, 2, 0, 2, 7.
  - "`c - '0'` macht aus dem Zeichen den Ziffernwert."
loesung: |
  **Ansatz:** Bei einem String braucht man `/` und `%` nicht. Man prüft jedes Zeichen und rechnet mit `c - '0'`.
  ---
  Ziffern: 2, 7, 0, 1, 2, 0, 2, 7. Das sind 8 Stück.
  ---
  Summe 2 + 7 + 0 + 1 + 2 + 0 + 2 + 7 = 21. Ausgabe `8 21`.
```

```aufgabe
id: zi-mix-zahl-oder-string
titel: Wann Zahl, wann String?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Auf Aufgabenblatt 2 waren bei der Quersummen-Aufgabe Strings verboten. Bei `removeNumbersInString` auf
  demselben Blatt arbeitet man dagegen mit einem String. Erkläre in drei bis vier Sätzen, woran du erkennst,
  ob eine Aufgabe mit `% 10` oder mit `charAt` gelöst wird. Nenne je ein Beispiel.
teile:
  - typ: text
    muster: |
      Entscheidend ist der Typ der Eingabe. Ist sie ein `int` oder `long`, gibt es keine Zeichen. Dann zerlege
      ich die Zahl mit `% 10` und `/ 10`, zum Beispiel bei `calcCrossSum(int number)`. Ist die Eingabe ein
      `String`, stehen die Ziffern schon als Zeichen da. Dann laufe ich mit `charAt` darüber und rechne bei
      Bedarf mit `c - '0'`, zum Beispiel bei `removeNumbersInString(String text)`. Eine Zahl in einen String
      umzuwandeln, nur um `charAt` zu nutzen, ist auf dem Blatt ausdrücklich verboten.
hinweise:
  - Schau auf den Parametertyp im Methodenkopf.
  - Welche Operationen gibt es für `int`, welche für `String`?
loesung: |
  **Ansatz:** Der Parametertyp im Methodenkopf entscheidet über das Werkzeug.
  ---
  `int` oder `long`: Ziffernschleife mit `% 10` und `/ 10`. Beispiel `calcCrossSum(int number)`.
  ---
  `String`: Schleife über die Zeichen mit `charAt`, Ziffernwert mit `c - '0'`. Beispiel `removeNumbersInString(String text)`.
  ---
  Die Umwandlung `"" + number` würde die Einschränkung „keine Strings“ verletzen.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Aufgabenblatt, Quiz und Einstufungstest. Die erste ist eine ganze
Blattaufgabe im Stil von Aufgabenblatt 2, Aufgabe 3, mit einer neuen Zahlenart. Danach folgen Quizfragen,
eine Methode im Format des Programmiertests, ein Lückentext, eine Ausgabe und Fragen aus dem
Feedbackgespräch. Plane die angegebene Zeit ein und arbeite zuerst ohne Hinweise. Das Quizformat 2026W ist
nicht veröffentlicht. Die Quizaufgaben folgen den TUWEL-Tests 2021 bis 2023.

```aufgabe
id: zi-pruef-ziffernprodukt
titel: Blattaufgabe Ziffernprodukt
niveau: 3
punkte: 6
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 2 WS 2023, Aufgabe 3 (Methodenfamilie nachgebaut, Quersumme durch Ziffernprodukt ersetzt)
angabe: |
  (Zeitrichtwert: 30 Minuten) Für diese Aufgabe sind Strings, Arrays und die Klasse `Math` verboten. Das
  **Ziffernprodukt** einer Zahl ist das Produkt aller ihrer Ziffern, für 234 also 2 · 3 · 4 = 24.

  - `int calcDigitProduct(int number)` liefert das Ziffernprodukt. Vorbedingung: `number > 0`.
  - `boolean isDigitProductDividable(int number, int digitProduct)` liefert `true`, wenn `number` durch `digitProduct` teilbar ist. Ist `digitProduct` gleich 0, liefert sie `false`. Vorbedingung: `number > 0`, `digitProduct` ist das Ziffernprodukt von `number`.
  - `int countDigitProductDividable(int start, int end)` zählt die Zahlen in `[start, end]`, die durch ihr Ziffernprodukt teilbar sind. Vorbedingung: `0 < start ≤ end`.
  - `void printDigitProductDividable(int start, int end)` gibt jede solche Zahl in einer eigenen Zeile aus. Format: `Die Zahl 36 ist durch das Ziffernprodukt 18 teilbar.` Vorbedingung: `0 < start ≤ end`.

  Beispiele: `calcDigitProduct(105)` liefert 0, `isDigitProductDividable(36, 18)` liefert `true`,
  `countDigitProductDividable(1, 30)` liefert 13.
teile:
  - typ: code
    vorlage: |
      public class DigitProduct {
          public static int calcDigitProduct(int number) {
              return 0; // TODO
          }

          public static boolean isDigitProductDividable(int number, int digitProduct) {
              return false; // TODO
          }

          public static int countDigitProductDividable(int start, int end) {
              return 0; // TODO
          }

          public static void printDigitProductDividable(int start, int end) {
              // TODO
          }

          public static void main(String[] args) {
              System.out.println(calcDigitProduct(234));
              System.out.println(countDigitProductDividable(1, 30));
              printDigitProductDividable(10, 15);
          }
      }
    musterloesung: |
      public class DigitProduct {
          public static int calcDigitProduct(int number) {
              int product = 1;
              while (number > 0) {
                  product = product * (number % 10);
                  number = number / 10;
              }
              return product;
          }

          public static boolean isDigitProductDividable(int number, int digitProduct) {
              return digitProduct != 0 && number % digitProduct == 0;
          }

          public static int countDigitProductDividable(int start, int end) {
              int count = 0;
              for (int i = start; i <= end; i++) {
                  if (isDigitProductDividable(i, calcDigitProduct(i))) {
                      count++;
                  }
              }
              return count;
          }

          public static void printDigitProductDividable(int start, int end) {
              for (int i = start; i <= end; i++) {
                  int p = calcDigitProduct(i);
                  if (isDigitProductDividable(i, p)) {
                      System.out.println("Die Zahl " + i + " ist durch das Ziffernprodukt " + p + " teilbar.");
                  }
              }
          }

          public static void main(String[] args) {
              System.out.println(calcDigitProduct(234));
              System.out.println(countDigitProductDividable(1, 30));
              printDigitProductDividable(10, 15);
          }
      }
    tests:
      - { aufruf: "calcDigitProduct(234)", erwartet: "24" }
      - { aufruf: "calcDigitProduct(105)", erwartet: "0", beschreibung: "eine Null macht das Produkt 0" }
      - { aufruf: "calcDigitProduct(7)", erwartet: "7" }
      - { aufruf: "isDigitProductDividable(36, 18)", erwartet: "true" }
      - { aufruf: "isDigitProductDividable(25, 10)", erwartet: "false" }
      - { aufruf: "isDigitProductDividable(10, 0)", erwartet: "false", beschreibung: "Produkt 0 ohne Division durch 0" }
      - { aufruf: "countDigitProductDividable(1, 30)", erwartet: "13" }
      - { aufruf: "printDigitProductDividable(10, 15)", stdout: "Die Zahl 11 ist durch das Ziffernprodukt 1 teilbar.\nDie Zahl 12 ist durch das Ziffernprodukt 2 teilbar.\nDie Zahl 15 ist durch das Ziffernprodukt 5 teilbar.\n" }
      - { aufruf: "countDigitProductDividable(100, 200)", erwartet: "8", versteckt: true }
      - { aufruf: "printDigitProductDividable(120, 140)", stdout: "Die Zahl 128 ist durch das Ziffernprodukt 16 teilbar.\nDie Zahl 132 ist durch das Ziffernprodukt 6 teilbar.\nDie Zahl 135 ist durch das Ziffernprodukt 15 teilbar.\n", versteckt: true }
    regeln: { verboteneApi: ["String", "Math", "Integer", "Arrays", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Ein Produkt beginnt bei 1, nicht bei 0. Mit 0 wäre jedes Produkt 0." }
      - { wert: 6, meldung: "Eine Exception `/ by zero`? Prüfe zuerst `digitProduct != 0`. Wegen der Kurzschlussauswertung von `&&` wird `%` dann gar nicht mehr gerechnet." }
      - { wert: 7, meldung: "Läuft die Schleife bis einschließlich `end`? Und werden Zahlen mit einer 0 als Ziffer ausgelassen?" }
      - { wert: 8, meldung: "Vergleiche das Ausgabeformat Zeichen für Zeichen, auch den Punkt am Ende." }
      - { wert: "verboteneApi", meldung: "Wie auf dem Blatt: keine Strings zum Zerlegen und kein `Math`. Nur die Ausgabe darf Text enthalten." }
hinweise:
  - Beginne mit `calcDigitProduct` und teste sie an 234 und 105, bevor du weitermachst.
  - 'Die Prüfmethode braucht den Sonderfall `digitProduct == 0`. Die beiden Intervallmethoden rufen beide Methoden auf.'
loesung: |
  **Ansatz:** Dieselbe Familie wie bei der Quersumme: zuerst die Berechnung, dann die Prüfung, dann Zählen und Ausgeben über das Intervall.
  ---
  Ziffernprodukt mit Startwert 1, dem neutralen Wert der Multiplikation:
  ```java
  int product = 1;
  while (number > 0) {
      product = product * (number % 10);
      number = number / 10;
  }
  return product;
  ```
  ---
  Prüfung mit Schutz vor der Division durch 0: `return digitProduct != 0 && number % digitProduct == 0;`. Ist das Produkt 0, ist der linke Teil falsch, und Java wertet den rechten gar nicht mehr aus.
  ---
  Zählen und Ausgeben: `for (int i = start; i <= end; i++)`, für jedes `i` einmal `calcDigitProduct(i)` berechnen und `isDigitProductDividable` aufrufen. Beim Ausgeben das Produkt in eine Variable speichern, damit es im Text erscheint.
  ---
  Kontrolle: In [1, 30] sind es 1 bis 9 sowie 11, 12, 15 und 24, zusammen 13. Die Zahlen 10, 20 und 30 fallen wegen des Produkts 0 heraus.
```

```aufgabe
id: zi-pruef-quiz
titel: Drei Quizfragen zu Ziffernschleifen
niveau: 3
punkte: 3
lernziel: 1
kompetenz: anwenden
quelle: Format nach TUWEL-Test 1 (Single Choice, je drei Optionen), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt)

  **a)** Was gibt dieser Code aus?

  ```java
  int n = 6020;
  int c = 0;
  while (n > 0) {
      if (n % 10 == 0) {
          c++;
      }
      n = n / 10;
  }
  System.out.println(c);
  ```

  **b)** Welches Fragment speichert für **jedes** `n ≥ 0` die Anzahl der Ziffern von `n` in `c`?

  **c)** Welche Vorbedingung schließt bei der folgenden Methode eine Exception aus?

  ```java
  static boolean h(int x) {
      int s = 0;
      int m = x;
      while (m > 0) {
          s = s + m % 10;
          m = m / 10;
      }
      return x % s == 0;
  }
  ```
teile:
  - typ: auswahl
    label: a)
    optionen: ['`2`', '`3`', '`1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Schleife endet, wenn `n` 0 wird. Die „Null danach“ wird nicht mehr geprüft. 6020 enthält genau zwei Nullen.'
      - wert: 2
        meldung: 'Auch die Null in der Mitte wird geprüft: Nach `6020 / 10 = 602` und `602 / 10 = 60` ist die letzte Ziffer 0.'
  - typ: auswahl
    label: b)
    optionen:
      - '`int c = 0; do { c++; n = n / 10; } while (n > 0);`'
      - '`int c = 0; while (n > 0) { c++; n = n / 10; }`'
      - '`int c = 1; while (n > 0) { c++; n = n / 10; }`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Für `n = 0` läuft diese Schleife gar nicht, und `c` bleibt 0. Die Zahl 0 hat aber eine Ziffer.'
      - wert: 2
        meldung: 'Für 0 stimmt das Ergebnis 1, aber für 7 kommt 2 heraus. Der Startwert 1 zählt eine Ziffer doppelt.'
  - typ: auswahl
    label: c)
    optionen: ['`x > 0`', '`x != 0`', '`x >= 0`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel `x = -12`: Die Schleife läuft nicht, weil `m > 0` falsch ist. Also ist `s = 0`, und `x % 0` wirft eine Exception.'
      - wert: 2
        meldung: 'Gegenbeispiel `x = 0`: Die Quersumme ist 0, und `0 % 0` wirft eine Exception.'
hinweise:
  - 'a) Ziffern von rechts: 0, 2, 0, 6. b) Probiere jedes Fragment mit 0 und mit 7.'
  - 'c) Wann ist `s` gleich 0? Denk auch an negative Zahlen.'
loesung: |
  **Ansatz:** a) Ziffern einzeln prüfen. b) und c) mit Randfällen und Gegenbeispielen arbeiten.
  ---
  a) Die Ziffern 0, 2, 0, 6 enthalten zwei Nullen. Ausgabe `2`.
  ---
  b) Nur die do-while-Fassung zählt für 0 eine Ziffer und für 7 ebenfalls eine. Die zweite liefert für 0 den Wert 0, die dritte für 7 den Wert 2.
  ---
  c) `s` ist 0 für `x = 0` und für jedes negative `x`, weil die Schleife dann nicht läuft. Nur `x > 0` schließt beides aus.
```

```aufgabe
id: zi-pruef-rf-methode
titel: Vier Aussagen zu einer Ziffernmethode
niveau: 3
punkte: 2
lernziel: 1
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist die Methode
  ```java
  public static int f(int n) {
      int r = 0;
      while (n > 9) {
          r = r + n % 10;
          n = n / 10;
      }
      return r + n;
  }
  ```
  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f(4072)` liefert 13.'
        richtig: true
        erklaerung: 'Die Schleife addiert 2, 7 und 0 und endet bei `n = 4`. Dann wird `9 + 4 = 13` zurückgegeben.'
      - text: '`f(0)` liefert 0.'
        richtig: true
        erklaerung: '`0 > 9` ist falsch, die Schleife läuft nicht. Zurückgegeben wird `0 + 0 = 0`.'
      - text: 'Für jedes `n ≥ 0` liefert `f(n)` die Quersumme von `n`.'
        richtig: true
        erklaerung: 'Die Schleife addiert alle Ziffern außer der vordersten. Die vorderste bleibt in `n` stehen und wird bei `return` addiert.'
      - text: '`f(-25)` liefert 7.'
        richtig: false
        erklaerung: '`-25 > 9` ist falsch. Die Schleife läuft nicht, und `f` liefert `0 + (-25) = -25`.'
    fehler:
      - wert: [r, r, f, f]
        meldung: 'Aussage 3: Was passiert mit der vordersten Ziffer? Sie wird nicht in der Schleife, aber im `return` addiert.'
      - wert: [r, r, r, r]
        meldung: 'Verfolge `f(-25)` genau. Ist `-25 > 9` wahr?'
hinweise:
  - Die Bedingung ist `n > 9`, nicht `n > 0`. Welche Ziffer bleibt nach der Schleife in `n` übrig?
  - Prüfe die negative Zahl mit der Bedingung `n > 9`.
loesung: |
  **Ansatz:** Die Methode an Beispielen verfolgen und den Unterschied zur üblichen Ziffernschleife finden.
  ---
  Die Schleife endet, sobald nur noch eine Ziffer übrig ist. Diese wird im `return` addiert. Für `n ≥ 0` ist das die Quersumme: Aussagen 1, 2 und 3 sind richtig.
  ---
  Aussage 4 ist falsch: Für negative Zahlen läuft die Schleife nicht, `f(-25)` liefert −25.
```

```aufgabe
id: zi-pruef-increase
titel: Jede Ziffer um eins erhöhen
niveau: 3
punkte: 5
lernziel: 3
kompetenz: anwenden
quelle: Format nach Programmiertest (Methodenkopf vorgegeben, eingeschränkte API), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int increaseDigits(int number)`. Die Methode liefert eine Zahl,
  in der jede Ziffer von `number` um 1 erhöht ist. Aus einer 9 wird eine 0. Die Reihenfolge der Ziffern bleibt
  gleich. Nullen, die dabei vorne entstehen, fallen weg. Vorbedingung: `0 ≤ number ≤ 999999999`.

  Einschränkungen wie im Test: Methodenkopf nicht ändern, keine Hilfsmethoden, keine Klassenvariablen, keine
  Strings, kein `Math`.

  Beispiele: `increaseDigits(4092)` liefert 5103, `increaseDigits(909)` liefert 10, `increaseDigits(0)` liefert 1.
teile:
  - typ: code
    vorlage: |
      public class Increase {
          public static int increaseDigits(int number) {
              return number; // TODO
          }

          public static void main(String[] args) {
              System.out.println(increaseDigits(4092));
          }
      }
    musterloesung: |
      public class Increase {
          public static int increaseDigits(int number) {
              int result = 0;
              int p = 1;
              do {
                  int digit = (number % 10 + 1) % 10;
                  result = result + digit * p;
                  p = p * 10;
                  number = number / 10;
              } while (number > 0);
              return result;
          }

          public static void main(String[] args) {
              System.out.println(increaseDigits(4092));
          }
      }
    tests:
      - { aufruf: "increaseDigits(4092)", erwartet: "5103" }
      - { aufruf: "increaseDigits(2581)", erwartet: "3692" }
      - { aufruf: "increaseDigits(909)", erwartet: "10", beschreibung: "aus 9 wird 0, führende Null fällt weg" }
      - { aufruf: "increaseDigits(0)", erwartet: "1", beschreibung: "Sonderfall 0" }
      - { aufruf: "increaseDigits(99)", erwartet: "0" }
      - { aufruf: "increaseDigits(123456789)", erwartet: "234567890", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, verboteneApi: ["String", "Math", "Integer", "StringBuilder"] }
    fehler:
      - { wert: 1, meldung: "Kommt 3015 statt 5103 heraus? Rechts anhängen dreht die Reihenfolge um. Setze die Ziffern mit einem Stellenwert `p` an ihre ursprüngliche Stelle." }
      - { wert: 3, meldung: "Aus 9 wird 0, nicht 10. Rechne `(ziffer + 1) % 10`." }
      - { wert: 4, meldung: "Die Zahl 0 hat eine Ziffer, die zu 1 wird. Mit `while (number > 0)` läuft die Schleife für 0 gar nicht. Verwende do-while." }
      - { wert: "keineHilfsmethoden", meldung: "Wie im Test sind Hilfsmethoden verboten. Alles muss in `increaseDigits` stehen." }
hinweise:
  - Die Reihenfolge soll gleich bleiben. Welches der beiden Aufbau-Muster passt?
  - 'Neue Ziffer: `(number % 10 + 1) % 10`. Für 0 muss der Rumpf einmal laufen.'
loesung: |
  **Ansatz:** Ziffernschleife, die neue Zahl mit Stellenwert `p` aufbauen (Reihenfolge bleibt). do-while wegen des Sonderfalls 0.
  ---
  Die neue Ziffer ist `(z + 1) % 10`: Für 0 bis 8 ist das `z + 1`, für 9 ergibt `10 % 10` die 0.
  ---
  ```java
  int result = 0;
  int p = 1;
  do {
      int digit = (number % 10 + 1) % 10;
      result = result + digit * p;
      p = p * 10;
      number = number / 10;
  } while (number > 0);
  return result;
  ```
  ---
  Kontrolle: 4092 wird Ziffer für Ziffer zu 3, 0, 1, 5 von rechts, also 5103. Für 909 entsteht 0, 1, 0, also 010 = 10. Die Vorbedingung verhindert einen Überlauf von `p`.
```

```aufgabe
id: zi-pruef-lueckentext-kgv
titel: ggT und kgV im Lückentext
niveau: 3
punkte: 3
lernziel: 6
kompetenz: anwenden
quelle: Lückentext-Format, Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Das **kleinste gemeinsame Vielfache** (kgV) zweier positiver Zahlen ist
  `a / ggT(a, b) * b`. Ergänze die Lücken so, dass das Programm `42` ausgibt.
teile:
  - typ: lueckentext
    code: |
      public class Vielfaches {
          public static int gcd(int a, int b) {
              while (b ___ 0) {
                  int r = a ___ b;
                  a = ___;
                  b = ___;
              }
              return a;
          }

          public static int lcm(int a, int b) {
              return a / ___ * b;
          }

          public static void main(String[] args) {
              System.out.println(lcm(21, 6));
          }
      }
    luecken: [["!=", ">"], ["%"], ["b"], ["r"], ["gcd(a, b)", "gcd(b, a)"]]
    fehler:
      - wert: ["!=", "%", "r", "b", "gcd(a, b)"]
        meldung: '`a = r; b = b;` verliert den alten Wert von `b`. Richtig ist: Zuerst bekommt `a` den alten Wert von `b`, dann bekommt `b` den Rest.'
      - wert: ["!=", "/", "b", "r", "gcd(a, b)"]
        meldung: 'Euklid arbeitet mit dem **Rest**. `a / b` ist der Quotient.'
hinweise:
  - 'Ein Euklid-Schritt: `(a, b)` wird zu `(b, a % b)`.'
  - Die Schleife läuft, solange `b` nicht 0 ist. Für das kgV wird durch den ggT geteilt.
loesung: |
  **Ansatz:** Euklid mit Rest, danach die kgV-Formel.
  ---
  Lücken: `!=`, `%`, `b`, `r`, `gcd(a, b)`.
  ---
  ggT(21, 6): (21, 6) → (6, 3) → (3, 0), also 3. kgV = 21 / 3 · 6 = 7 · 6 = 42.
  ---
  Erst teilen, dann multiplizieren hält die Zwischenergebnisse klein. `a * b / gcd(a, b)` wäre mathematisch gleich, läuft aber bei großen Zahlen früher über.
```

```aufgabe
id: zi-pruef-ausgabe
titel: Umkehrzahl, Quersumme und Teilbarkeit
niveau: 3
punkte: 3
lernziel: 4
kompetenz: anwenden
quelle: Format nach TUWEL-Quiz „Was gibt das Programm aus?“, Inhalt neu
angabe: (Zeitrichtwert 8 Minuten) Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Kombi {
          public static int reverse(int n) {
              int r = 0;
              while (n > 0) {
                  r = r * 10 + n % 10;
                  n = n / 10;
              }
              return r;
          }

          public static int crossSum(int n) {
              int s = 0;
              while (n > 0) {
                  s = s + n % 10;
                  n = n / 10;
              }
              return s;
          }

          public static void show(int n) {
              int r = reverse(n);
              System.out.println(n + " -> " + r + " (" + crossSum(r) + ") " + (r % crossSum(r) == 0));
          }

          public static void main(String[] args) {
              show(19);
              show(48);
              show(1200);
          }
      }
    loesung: |
      19 -> 91 (10) false
      48 -> 84 (12) true
      1200 -> 21 (3) true
    fehler:
      - wert: "19 -> 91 (10) false\n48 -> 84 (12) true\n1200 -> 0021 (3) true"
        meldung: 'Eine `int`-Zahl hat keine führenden Nullen. `reverse(1200)` liefert 21.'
      - wert: "19 -> 91 (10) false\n48 -> 84 (12) false\n1200 -> 21 (3) true"
        meldung: '84 = 12 · 7. Der Rest ist 0, also `true`.'
hinweise:
  - Bilde für jede Zahl die Umkehrzahl, dann deren Quersumme, dann den Rest.
  - '`reverse(1200)` hängt 0, 0, 2, 1 an. Was bleibt von den Nullen?'
loesung: |
  **Ansatz:** Für jeden Aufruf von `show` drei Werte bestimmen: Umkehrzahl, Quersumme, Teilbarkeit.
  ---
  19: Umkehrzahl 91, Quersumme 10, `91 % 10 = 1`, also `false`.
  ---
  48: Umkehrzahl 84, Quersumme 12, `84 % 12 = 0`, also `true`.
  ---
  1200: Umkehrzahl 21 (die Nullen fallen vorne weg), Quersumme 3, `21 % 3 = 0`, also `true`.
```

```aufgabe
id: zi-pruef-power-add
titel: Potenz nur mit Addition
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: Einstufungstest 2018 (myMult) erweitert, Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `int myPower(int base, int exponent)`. Die Methode liefert `base`
  hoch `exponent` und verwendet dabei **nur Addition**: kein `*`, kein `/`, kein `Math`, keine Hilfsmethoden.
  Vorbedingung: `base ≥ 0`, `exponent ≥ 0`, das Ergebnis passt in ein `int`.

  Beispiele: `myPower(3, 4)` liefert 81, `myPower(5, 0)` liefert 1, `myPower(0, 3)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class PowerAdd {
          public static int myPower(int base, int exponent) {
              return 0; // TODO
          }

          public static void main(String[] args) {
              System.out.println(myPower(3, 4));
          }
      }
    musterloesung: |
      public class PowerAdd {
          public static int myPower(int base, int exponent) {
              int result = 1;
              for (int i = 0; i < exponent; i++) {
                  int product = 0;
                  for (int j = 0; j < base; j++) {
                      product = product + result;
                  }
                  result = product;
              }
              return result;
          }

          public static void main(String[] args) {
              System.out.println(myPower(3, 4));
          }
      }
    tests:
      - { aufruf: "myPower(3, 4)", erwartet: "81" }
      - { aufruf: "myPower(2, 10)", erwartet: "1024" }
      - { aufruf: "myPower(5, 0)", erwartet: "1", beschreibung: "Exponent 0" }
      - { aufruf: "myPower(0, 3)", erwartet: "0" }
      - { aufruf: "myPower(1, 50)", erwartet: "1" }
      - { aufruf: "myPower(7, 5)", erwartet: "16807", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, verboteneApi: ["Math"] }
    fehler:
      - { wert: 3, meldung: "Jede Zahl hoch 0 ist 1. Beginnt dein Ergebnis bei 1?" }
      - { wert: 4, meldung: "0 hoch 3 ist 0. Die innere Schleife läuft dann nie, das Produkt bleibt 0. Prüfe, ob du `product` vor der inneren Schleife auf 0 setzt." }
      - { wert: "keineHilfsmethoden", meldung: "`myMult` als eigene Methode ist hier nicht erlaubt. Schreibe die Multiplikation als innere Schleife." }
hinweise:
  - Potenz heißt `exponent`-mal multiplizieren. Jede Multiplikation ist selbst wiederholtes Addieren.
  - 'Außen `exponent` Durchläufe. Innen `result` genau `base`-mal zu einem neuen `product` (Start 0) addieren, danach `result = product;`.'
loesung: |
  **Ansatz:** Zwei Ebenen. Außen die Potenz als wiederholte Multiplikation, innen jede Multiplikation als wiederholte Addition.
  ---
  ```java
  int result = 1;
  for (int i = 0; i < exponent; i++) {
      int product = 0;
      for (int j = 0; j < base; j++) {
          product = product + result;
      }
      result = product;
  }
  return result;
  ```
  ---
  Kontrolle mit `myPower(3, 4)`: `result` wird 3, 9, 27, 81. Jeder Schritt addiert den alten Wert dreimal.
  ---
  Für `exponent = 0` läuft die äußere Schleife nicht, Ergebnis 1. Für `base = 0` ist jedes `product` 0, also 0. Die Tests prüfen nicht, ob du `*` verwendet hast. Im Einstufungstest gäbe es dafür aber keine Punkte.
```

```aufgabe
id: zi-pruef-gespraech
titel: Fragen aus dem Feedbackgespräch
niveau: 3
punkte: 3
lernziel: 7
kompetenz: begruenden
quelle: angelehnt an die Zusatzfragen der Aufgabenblätter 2 (Schleifenwahl WS 2017; Parameter und Sichtbarkeit WS 2021 und SS 2020), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Du hast `calcCrossSum` und `countCrossSumDividable` abgegeben. Beantworte die
  vier Fragen in ganzen Sätzen, so wie im Feedbackgespräch.

  1. Welche Schleife haben Sie in `calcCrossSum` verwendet, und warum?
  2. Was liefert Ihre Methode für 0, und wäre das richtig?
  3. Ihre Methode teilt `number` in der Schleife. Ändert das die Variable in `main`?
  4. Ändern Sie `countCrossSumDividable` so, dass sie die Zahlen summiert statt zählt. Was müssen Sie ändern?
teile:
  - typ: text
    muster: |
      1. Eine `while`-Schleife mit der Bedingung `number > 0`. Ich weiß vorher nicht, wie viele Ziffern die
         Zahl hat, also passt keine `for`-Schleife mit fester Anzahl. Die Schleife endet, wenn keine Ziffer
         mehr übrig ist.
      2. Für 0 läuft die Schleife nicht, und die Methode liefert 0. Die Quersumme von 0 ist tatsächlich 0, das
         Ergebnis stimmt also. Laut Vorbedingung `number > 0` kommt 0 ohnehin nicht vor. Beim Ziffernzählen
         wäre 0 dagegen falsch, dort bräuchte ich do-while.
      3. Nein. Java übergibt `int`-Werte als Kopie (call-by-value). Die Methode teilt nur ihren Parameter,
         die Variable in `main` bleibt gleich.
      4. Ich ersetze `count++` durch `sum = sum + i;`, benenne die Variable um und gebe die Summe zurück. Die
         Schleife über `[start, end]` und der Aufruf der Prüfmethode bleiben gleich.
hinweise:
  - Denk bei Frage 1 daran, was du vor Beginn der Schleife über die Zahl weißt.
  - 'Frage 3 betrifft call-by-value aus Kapitel 6. Frage 4 ist die Variante „summieren statt zählen“.'
loesung: |
  **Ansatz:** Jede Antwort mit dem passenden Fachbegriff begründen: Abbruchbedingung, Sonderfall, call-by-value, Muster der Methodenfamilie.
  ---
  1: `while (number > 0)`, weil die Ziffernanzahl vorher unbekannt ist. 2: Ergebnis 0, das ist die richtige Quersumme von 0.
  ---
  3: Nein, call-by-value. Der Parameter ist eine Kopie.
  ---
  4: `count++` wird zu `sum = sum + i;`, Rückgabe der Summe. Der Rest bleibt gleich.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit der Zusammenfassung in diesem Abschnitt.
antwort: |
  Eine mögliche Auswahl: (1) `n % 10` liefert die letzte Ziffer, `n / 10` schneidet sie ab. In einer
  Schleife mit `while (n > 0)` kommen so alle Ziffern von rechts nach links dran. (2) Mit
  `r = r * 10 + ziffer` hängt man eine Ziffer rechts an und dreht damit die Zahl um. Mit einem Stellenwert `p`
  bleibt die Reihenfolge erhalten. (3) Aufgaben wie Harshad-, fröhliche oder narzisstische Zahlen bestehen aus
  einer Prüfmethode für eine Zahl und Methoden, die sie über ein Intervall aufrufen. Ebenso gute Antworten sind
  der Sonderfall 0, der Überlauf bei großen Zahlen oder Euklids Algorithmus für den ggT.
```

:::zusammenfassung
1. **Ziffern abspalten:** `n % 10` ist die letzte Ziffer, `n / 10` die Zahl ohne sie. Die Ziffer an Stelle `k` von rechts ist `n / 10^k % 10`. Bei negativen Zahlen sind die Reste negativ.
2. **Ziffernschleife:** `while (n > 0) { ziffer = n % 10; … ; n = n / 10; }`. Erst lesen, dann abschneiden. Die Ziffern kommen von rechts nach links, höchstens zehn bei `int`.
3. **Sonderfall 0:** Die while-Schleife läuft für 0 gar nicht. Für Quersumme und Maximum ist das richtig, beim Zählen von Ziffern braucht es do-while. Wird die ursprüngliche Zahl später noch gebraucht, rechnet die Schleife auf einer Kopie.
4. **Zahlen aufbauen:** `r = r * 10 + ziffer` hängt rechts an und dreht mit der Ziffernschleife um. `r = r + ziffer * p; p = p * 10;` setzt links davor und behält die Reihenfolge. Führende Nullen fallen weg, große Ergebnisse laufen in `int` über.
5. **Teilbarkeit und Harshad-Zahlen:** `a % t == 0` heißt teilbar. Eine Harshad-Zahl ist durch ihre Quersumme teilbar. Zahl und Quersumme haben beim Teilen durch 9 und durch 3 denselben Rest.
6. **Methodenfamilie:** Eine Prüfmethode für eine Zahl, dazu Zählen, Summieren und Ausgeben über `[start, end]` mit `i <= end`. Die Intervallmethoden rufen die Prüfmethode auf.
7. **Zwei Schleifen:** Fröhliche Zahlen wiederholen die Quadratsumme bis 1 oder 4. Narzisstische Zahlen zählen zuerst die Ziffern und potenzieren dann mit einer Schleife, nie mit `^` oder `Math.pow`.
8. **Rechnen mit Schleifen:** Multiplikation ist wiederholte Addition, Division wiederholte Subtraktion. Die ganzzahlige Wurzel prüft nach der Schleife `i * i == k`. Der ggT entsteht mit `(a, b) → (b, a % b)` bis `b == 0`.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt,
löse die genannte Aufgabe noch einmal.

1. **`/ 10` und `% 10` vertauscht**, etwa `4072 / 10` für die letzte Ziffer gehalten. Training: „Vier Ausdrücke zu einer Zahl“ und „Wo liefert das Programm falsche Ziffern?“. Zu finden in [7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division).
2. **Negative Zahlen nicht bedacht**, sodass Reste wie `-385 % 10 = -5` als Ziffern verwendet werden. Training: „Ziffern einer negativen Zahl“. Zu finden in [7.1 Ziffern abspalten mit Rest und Division](/lernen/ep1/ziffern/ziffern-abspalten-mit-rest-und-division).
3. **Im Rumpf erst geteilt, dann gelesen**, wodurch die letzte Ziffer verloren geht. Training: „Die Quersumme von 8064 verfolgen“. Zu finden in [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme).
4. **Falsche Schleifenbedingung** wie `n >= 0` (Endlosschleife) oder `n > 9` (vorderste Ziffer fehlt). Training: „Die richtige Schleifenbedingung“ und „Zwei Fehler in einer Ziffernmethode“. Zu finden in [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme).
5. **Sonderfall 0 vergessen**, zum Beispiel `countDigits(0)` liefert 0 statt 1. Training: „Ziffern zählen, auch für 0“ und „Wie oft kommt eine Ziffer vor?“. Zu finden in [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme).
6. **Den Parameter aufgebraucht und danach noch gebraucht**, etwa beim Vergleich mit der Umkehrzahl oder in Phase 2 der narzisstischen Prüfung. Training: „Ist die Zahl ein Palindrom?“ und „isNarcissisticNumber mit long“. Zu finden in [7.3 Zahlen umdrehen und aus Ziffern aufbauen](/lernen/ep1/ziffern/zahlen-umdrehen-und-aus-ziffern-aufbauen).
7. **Beim Aufbauen die Reihenfolge verwechselt** (rechts anhängen statt mit `p` davorsetzen) oder `result + digit * 10` statt `result * 10 + digit`. Training: „Eine Ziffer überall entfernen“ und „Jede Ziffer verdoppeln“. Zu finden in [7.3 Zahlen umdrehen und aus Ziffern aufbauen](/lernen/ep1/ziffern/zahlen-umdrehen-und-aus-ziffern-aufbauen).
8. **Den int-Überlauf übersehen** bei Umkehrzahlen oder Potenzen. Training: „Umdrehen mit int und mit long“ und „Zehn hoch zehn“. Zu finden in [7.3 Zahlen umdrehen und aus Ziffern aufbauen](/lernen/ep1/ziffern/zahlen-umdrehen-und-aus-ziffern-aufbauen).
9. **Die rechte Intervallgrenze vergessen** (`i < end`) oder beim Summieren 1 statt `i` addiert. Training: „Fehler beim Summieren im Intervall“ und „Harshad-Zahlen in einem Intervall zählen“. Zu finden in [7.4 Teilbarkeit und Harshad-Zahlen](/lernen/ep1/ziffern/teilbarkeit-und-harshad-zahlen).
10. **Division durch 0** bei Quersumme oder Ziffernprodukt 0. Training: „Blattaufgabe Ziffernprodukt“ und „Drei Quizfragen zu Ziffernschleifen“. Zu finden in [7.4 Teilbarkeit und Harshad-Zahlen](/lernen/ep1/ziffern/teilbarkeit-und-harshad-zahlen).
11. **`^` für eine Potenz gehalten** oder `Math.pow` trotz Verbot benutzt. Training: „Was rechnet 5 ^ 2?“ und „Potenz ohne Math.pow“. Zu finden in [7.5 Fröhliche und narzisstische Zahlen](/lernen/ep1/ziffern/froehliche-und-narzisstische-zahlen).
12. **Bei fröhlichen Zahlen nur auf die 1 gewartet**, wodurch traurige Zahlen eine Endlosschleife erzeugen. Training: „isHappyNumber nach Blatt-Vorgabe“. Zu finden in [7.5 Fröhliche und narzisstische Zahlen](/lernen/ep1/ziffern/froehliche-und-narzisstische-zahlen).
13. **Ein Durchlauf zu viel oder keine Prüfung nach der Schleife** bei `myMult` und `getIntegerRoot`. Training: „myMult ohne den Operator *“ und „Fehler in getIntegerRoot“. Zu finden in [7.6 Rechnen mit Schleifen: Multiplikation, Wurzel und ggT](/lernen/ep1/ziffern/rechnen-mit-schleifen-multiplikation-wurzel-und-ggt).
14. **Beim ggT den alten Wert überschrieben** (`a = b; b = a % b;` ohne Hilfsvariable) oder den Sonderfall 0 in der subtrahierenden Fassung vergessen. Training: „Den ggT mit Rest berechnen“ und „Vier Aussagen zu einer ggT-Variante“. Zu finden in [7.6 Rechnen mit Schleifen: Multiplikation, Wurzel und ggT](/lernen/ep1/ziffern/rechnen-mit-schleifen-multiplikation-wurzel-und-ggt).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig,
**3** = sicher, auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich
bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Mit `% 10` und `/ 10` Ziffern abspalten, auch an einer bestimmten Stelle und bei negativen Zahlen.
2. Ziffernschleifen in einer Tabelle verfolgen und ihre Ausgabe angeben.
3. Methoden zum Zählen, Summieren und Prüfen von Ziffern schreiben, mit dem Sonderfall 0.
4. Zahlen umdrehen oder neu aufbauen und den Überlauf erkennen.
5. Harshad-Zahlen prüfen und Intervallmethoden aus einer Prüfmethode bauen.
6. Fröhliche und narzisstische Zahlen mit zwei Schleifen prüfen.
7. Multiplikation, Wurzel und ggT mit Schleifen berechnen.
8. Eine ganze Blattaufgabe lösen und im Feedbackgespräch erklären.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber zu den Aufgabenblättern ein
**Feedbackgespräch**. Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen mögliche
Fragen zur Ziffernaufgabe von Blatt 2. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst
dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: zi-karte-prozent
  frage: Warum liefert `n % 10` die letzte Ziffer und `n / 10` die Zahl ohne sie?
  antwort: |
    Im Dezimalsystem ist jede Zahl gleich „Zahl ohne letzte Ziffer mal 10 plus letzte Ziffer“, zum Beispiel
    4072 = 407 · 10 + 2. Teilt man durch 10, ist 407 das ganzzahlige Ergebnis und 2 der Rest. Weil `/` bei
    `int` abschneidet, liefert `4072 / 10` genau 407, und `%` liefert den Rest 2. Das gilt für `n ≥ 0`. Bei
    negativen Zahlen hat der Rest in Java das Vorzeichen der Zahl.
  kernpunkte:
    - Zerlegung n = (n / 10) · 10 + n % 10
    - Ganzzahldivision schneidet ab, Rest ist die Einerziffer
    - bei negativen Zahlen negative Reste
- id: zi-karte-kte-ziffer
  frage: Wie bekommen Sie die Hunderterziffer einer Zahl, und wie die Ziffer an einer beliebigen Stelle ohne Math.pow?
  antwort: |
    Die Hunderterziffer ist `n / 100 % 10`. Das Teilen durch 100 schneidet die beiden Ziffern rechts davon ab,
    danach liefert `% 10` die letzte Ziffer. Allgemein teile ich `k`-mal durch 10, um die Ziffer an Stelle `k`
    nach hinten zu schieben. Das geht mit einer `for`-Schleife, also ohne `Math.pow`. Bei 58316 und Stelle 2
    ergibt das 583, und `583 % 10` ist 3.
  kernpunkte:
    - erst abschneiden mit / 100, dann % 10
    - k-mal durch 10 teilen statt Potenz
    - Zahlenbeispiel
- id: zi-karte-schleifenwahl
  frage: Welche Schleife verwenden Sie für eine Ziffernschleife, und warum?
  antwort: |
    Eine `while`-Schleife mit `n > 0`. Die Anzahl der Durchläufe ist die Ziffernanzahl, und die kenne ich
    vorher nicht. Darum passt keine `for`-Schleife mit fester Anzahl. Die Bedingung `n > 0` heißt: Solange
    noch eine Ziffer übrig ist, mache weiter. Wenn der Rumpf auch für 0 einmal laufen muss, etwa beim
    Ziffernzählen, nehme ich eine do-while-Schleife.
  kernpunkte:
    - Anzahl der Durchläufe vorher unbekannt
    - Bedingung n > 0
    - do-while, wenn 0 eine Ziffer haben muss
- id: zi-karte-terminierung
  frage: Warum endet Ihre Ziffernschleife sicher?
  antwort: |
    In jedem Durchlauf wird `n` durch 10 geteilt. Für `n > 0` ist `n / 10` echt kleiner als `n`, und es wird
    nie negativ. Eine ganze Zahl, die immer kleiner wird und nicht unter 0 fällt, erreicht nach endlich vielen
    Schritten 0. Dann ist `n > 0` falsch. Bei `int` sind es höchstens zehn Durchläufe. Mit `n >= 0` wäre es
    eine Endlosschleife, weil `0 / 10` wieder 0 ist.
  kernpunkte:
    - n wird echt kleiner und bleibt ≥ 0
    - höchstens zehn Durchläufe bei int
    - Gegenbeispiel n >= 0
- id: zi-karte-null
  frage: Was liefert Ihre Methode für die Zahl 0, und ist das richtig?
  antwort: |
    Das hängt von der Methode ab. Mit `while (n > 0)` läuft die Schleife für 0 gar nicht. Bei der Quersumme
    ist das Ergebnis 0 richtig, ebenso beim Maximum der Ziffern. Beim Zählen der Ziffern wäre 0 aber falsch,
    denn die Zahl 0 hat eine Ziffer. Dort verwende ich do-while oder behandle 0 vorher mit einem `if`. Auf dem
    Blatt schließt die Vorbedingung `number > 0` den Fall oft aus, ich prüfe ihn trotzdem gedanklich.
  kernpunkte:
    - while läuft für 0 nicht
    - Quersumme 0 richtig, Ziffernanzahl 0 falsch
    - do-while oder if als Lösung
- id: zi-karte-kopie
  frage: Ihre Methode verändert den Parameter `number`. Ist das ein Problem?
  antwort: |
    Für den Aufrufer nicht, weil Java `int`-Werte als Kopie übergibt (call-by-value). Die Variable in `main`
    bleibt unverändert. Innerhalb der Methode ist die ursprüngliche Zahl danach aber verloren, denn nach der
    Schleife ist `number` 0. Brauche ich sie noch, etwa für den Vergleich mit der Umkehrzahl oder für eine
    zweite Schleife, lege ich vorher eine Kopie an: `int n = number;`.
  kernpunkte:
    - call-by-value, Aufrufer unverändert
    - nach der Schleife ist der Parameter 0
    - Kopie, wenn die Zahl noch gebraucht wird
- id: zi-karte-umdrehen
  frage: Erklären Sie, warum `r = r * 10 + ziffer` in einer Ziffernschleife die Zahl umdreht.
  antwort: |
    `r * 10` rückt alle Ziffern, die schon in `r` stehen, eine Stelle nach links, und die neue Ziffer kommt
    rechts dazu. Die Ziffernschleife liefert zuerst die letzte Ziffer. Diese wird am öftesten nach links
    verschoben und steht am Ende ganz vorne. So wird aus 4072 die Zahl 2704. Nullen, die dabei vorne landen,
    fallen weg, darum ist die Umkehrzahl von 1200 die 21.
  kernpunkte:
    - mal 10 verschiebt nach links, Ziffer kommt rechts dazu
    - zuerst gelesene Ziffer landet vorne
    - führende Nullen fallen weg
- id: zi-karte-ueberlauf
  frage: Warum kann die Umkehrzahl falsch sein, obwohl der Algorithmus stimmt?
  antwort: |
    Weil sie größer als der größte `int`-Wert 2147483647 sein kann. 1999999999 ist ein gültiges `int`, die
    Umkehrzahl 9999999991 aber nicht. Java meldet keinen Fehler, die Multiplikation läuft über, und es
    entsteht eine sinnlose Zahl. Abhilfe ist `long` für das Ergebnis. Dasselbe gilt für Potenzen bei
    narzisstischen Zahlen, deshalb hatte die Blattmethode einen `long`-Parameter.
  kernpunkte:
    - int-Grenze 2147483647
    - Überlauf ohne Fehlermeldung
    - long als Abhilfe
- id: zi-karte-harshad
  frage: Was ist eine Harshad-Zahl, und wie ist Ihre Methodenfamilie aufgebaut?
  antwort: |
    Eine Harshad-Zahl ist durch ihre eigene Quersumme teilbar, zum Beispiel 2025 mit Quersumme 9. Kein Beispiel
    ist 2026 mit Quersumme 10 und Rest 6. Ich habe zuerst `calcCrossSum` geschrieben, dann
    `isHarshadNumber` mit `number % calcCrossSum(number) == 0`. Zählen, Summieren und Ausgeben laufen mit
    `for (int i = start; i <= end; i++)` über das Intervall und rufen nur die Prüfmethode auf.
  kernpunkte:
    - Definition mit Beispiel und Gegenbeispiel
    - Prüfmethode mit %
    - Intervallmethoden rufen die Prüfmethode auf
- id: zi-karte-neunerregel
  frage: Warum ist eine Zahl genau dann durch 9 teilbar, wenn ihre Quersumme durch 9 teilbar ist?
  antwort: |
    Jeder Stellenwert ist ein Vielfaches von 9 plus 1: 10 = 9 + 1, 100 = 99 + 1, 1000 = 999 + 1. Schreibe ich
    die Zahl mit Stellenwerten, kann ich sie in einen Teil zerlegen, der durch 9 teilbar ist, plus die
    Quersumme. Bei 4072 ist das 4 · 999 + 7 · 9 plus 13. Darum haben Zahl und Quersumme beim Teilen durch 9
    denselben Rest. Weil 9 durch 3 teilbar ist, gilt dasselbe für 3, aber zum Beispiel nicht für 4.
  kernpunkte:
    - Stellenwert gleich Vielfaches von 9 plus 1
    - Zahl minus Quersumme durch 9 teilbar
    - gilt für 3 und 9, nicht für 4
- id: zi-karte-froehlich
  frage: Warum prüft `isHappyNumber` sowohl auf 1 als auch auf 4?
  antwort: |
    Weil die Folge der Quadratsummen für traurige Zahlen nie zur 1 kommt, sondern im Kreis 4, 16, 37, 58, 89,
    145, 42, 20, 4 läuft. Würde die Schleife nur auf 1 warten, wäre sie für traurige Zahlen endlos. Dass jede
    Folge entweder die 1 oder diesen Kreis erreicht, ist eine mathematische Tatsache. Ab vier Ziffern wird die
    Quadratsumme kleiner als die Zahl, und unter 1000 hat man alle Fälle durchprobiert.
  kernpunkte:
    - traurige Zahlen laufen im Kreis mit der 4
    - nur auf 1 warten gibt Endlosschleife
    - jede Folge erreicht 1 oder den Kreis
- id: zi-karte-narzisstisch
  frage: Wie prüfen Sie, ob eine Zahl narzisstisch ist, ohne Math.pow?
  antwort: |
    In zwei Phasen auf je einer Kopie der Zahl. Zuerst zähle ich die Ziffern, das ist der Exponent `k`. Dann
    gehe ich die Ziffern noch einmal durch und berechne jede Potenz mit einer `for`-Schleife, die `k`-mal
    multipliziert, Startwert 1. Die Potenzen addiere ich und vergleiche die Summe mit der Zahl. `^` geht nicht,
    weil es in Java XOR bedeutet. Für große Zahlen rechne ich mit `long`.
  kernpunkte:
    - erst Ziffern zählen, dann Potenzen summieren
    - Potenz als Schleife mit Startwert 1
    - ^ ist XOR, long für große Zahlen
- id: zi-karte-mymult
  frage: Wie multiplizieren Sie ohne den Operator `*`, und welche Vorbedingung braucht Ihre Lösung?
  antwort: |
    Multiplikation ist wiederholte Addition: `x · y` heißt `y`-mal `x` addieren. Ich beginne bei 0 und
    addiere in einer `for`-Schleife mit `i < y` jedes Mal `x`. Für negative `y` würde die Schleife nicht
    laufen und 0 liefern, darum lautet die Vorbedingung `y ≥ 0`. `x` darf negativ sein. Soll das Ergebnis in
    eine `short`-Variable, brauche ich einen Cast `(short)`.
  kernpunkte:
    - y-mal x addieren, Start 0
    - Vorbedingung y ≥ 0
    - Cast nach short nötig
- id: zi-karte-ggt
  frage: Erklären Sie den Euklidischen Algorithmus und warum er den ggT liefert.
  antwort: |
    Ein gemeinsamer Teiler von `a` und `b` teilt auch `a − b` und damit auch den Rest `a % b`. Darum haben
    `(a, b)` und `(b, a % b)` denselben ggT. Ich ersetze das Paar so lange, bis `b` gleich 0 ist. Dann ist `a`
    der ggT, denn ggT(a, 0) = a. Die Schleife endet, weil der Rest immer kleiner als `b` ist. Beispiel:
    (84, 36) → (36, 12) → (12, 0), der ggT ist 12.
  kernpunkte:
    - gemeinsame Teiler bleiben beim Rest erhalten
    - (a, b) → (b, a % b) bis b = 0
    - Terminierung, weil b kleiner wird
- id: zi-karte-rekursion
  frage: Was ändert sich, wenn die Quersumme rekursiv statt mit einer Schleife berechnet werden soll?
  antwort: |
    Die Idee bleibt gleich: letzte Ziffer `n % 10` plus Quersumme des Rests `n / 10`. Statt einer Schleife ruft
    die Methode sich selbst mit `n / 10` auf. Der Basisfall, also der Fall, der ohne erneuten Aufruf direkt
    beantwortet wird, ist eine einstellige Zahl. Ihre Quersumme ist sie selbst. Der Fortschritt ist das Teilen durch 10, genau wie in der Schleife. Das kommt in Kapitel 10
    (Rekursion) und auf Aufgabenblatt 3 vor, etwa als rekursive Summe der quadrierten Ziffern.
  kernpunkte:
    - n % 10 plus Quersumme von n / 10
    - Basisfall einstellige Zahl
    - Fortschritt durch Teilen wie in der Schleife
- id: zi-karte-string-oder-zahl
  frage: Warum durften Sie auf dem Blatt die Zahl nicht einfach in einen String umwandeln?
  antwort: |
    Die Aufgabe soll üben, eine Zahl mit Rechnen zu zerlegen. Mit `"" + number` und `charAt` würde man das
    umgehen, darum sind Strings ausdrücklich verboten. Arbeitet eine Methode dagegen schon mit einem String,
    wie `removeNumbersInString`, ist `charAt` richtig, und den Ziffernwert bekommt man mit `c - '0'`. Der
    Parametertyp im Methodenkopf entscheidet also über das Werkzeug.
  kernpunkte:
    - Ziel ist Zerlegen mit % und /
    - charAt nur bei String-Eingabe
    - Parametertyp entscheidet
```
