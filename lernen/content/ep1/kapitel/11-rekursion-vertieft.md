---
nummer: 11
titel: "Rekursion II: Arten, Aufrufbäume und Fraktale"
kurz: Rekursion mit zwei und mehr Selbstaufrufen. Lineare, verzweigte, verschachtelte und Endrekursion unterscheiden, Aufrufbäume zeichnen, Aufrufe und Ausgaben zählen, Implementierungen beurteilen und Fraktale mit CodeDraw zeichnen, wie es Blatt 3 und das Quiz verlangen.
teil: rekursion
stunden: 7
pruefungsgewicht: 2
voraussetzungen: [rekursion, methoden, grafik]
lernziele:
  - eine rekursive Methode als linear, verzweigt, verschachtelt oder wechselseitig einordnen und die Einordnung am Code begründen
  - erkennen, ob eine Methode endrekursiv ist, und eine lineare Rekursion mit einem Sammelparameter in eine endrekursive Form bringen
  - zu einer verzweigten Rekursion den Aufrufbaum zeichnen und daraus Rückgabewert, Aufrufreihenfolge und Rekursionstiefe ablesen
  - die Reihenfolge von Ausgaben vor, zwischen und nach zwei Selbstaufrufen exakt angeben
  - die Anzahl der Aufrufe und der Ausgaben einer Rekursion mit einer Tabelle von unten herauf bestimmen
  - für eine rekursive Implementierung begründen, ob sie für alle erlaubten Eingaben endet und das richtige Ergebnis liefert
  - verzweigte rekursive Methoden ohne Schleifen schreiben, zum Beispiel Binomialkoeffizient, Wege zählen und Türme von Hanoi
  - rekursive Grafiken (Fraktale) mit CodeDraw zeichnen, die Zeichenreihenfolge steuern und die Zahl der Formen je Ebene bestimmen
---

**Worum geht es?** In [Kapitel 10](/lernen/ep1/rekursion) hat jede rekursive Methode bei jedem Aufruf höchstens
**einmal** sich selbst aufgerufen. Die Aufrufe bildeten eine einfache Kette: `summe(3)` ruft `summe(2)` auf, das ruft
`summe(1)` auf, und so weiter. In diesem Kapitel ruft sich eine Methode auch **zweimal oder öfter** auf. Aus der Kette
wird dann ein verzweigtes Gebilde, das wie ein umgedrehter Baum aussieht.

Ein Bild aus dem Alltag: Eine Lehrerin will wissen, wie viele Kinder in ihrer Schule sind. Sie fragt die beiden
Klassenvorstände der obersten Stufe. Jeder von ihnen fragt die Klassen darunter, und so weiter. Jede gefragte Person
fragt **mehrere** andere. Am Ende wandern alle Teilantworten zurück nach oben und werden zusammengezählt. Genau so
arbeitet eine verzweigte Rekursion.

**Was kommt in der Prüfung?**

- **Quiz:** Im zweiten TUWEL-Test von 2021 gab es drei Fragentypen zur Rekursion. Ob das Quiz 2026W genauso
  aussieht, ist nicht veröffentlicht. Erstens: Mehrere
  Implementierungen einer Methode sind gegeben. Liefern sie das richtige Ergebnis, und enden sie? Zweitens: Aussagen
  zu einer Methode beurteilen, etwa „endrekursiv“, „linear“ oder „hat zwei Basisfälle“. Drittens: Bei einer verzweigten
  Rekursion die Anzahl der Ausgaben, die erste Ausgabe oder das Ergebnis bestimmen.
- **Aufgabenblatt 3, Aufgabe 5 (WS 2021 und WS 2023):** Ein Muster aus Quadraten rekursiv mit CodeDraw zeichnen.
  Dazu gehörten Zusatzfragen, sinngemäß „Wie oft wird die Methode aufgerufen?“ und „Wie viele Quadrate liegen auf
  der letzten Ebene?“.
- **Feedbackgespräch:** Varianten des Fraktals erklären, etwa „Was musst du ändern, damit die kleinen Quadrate oben
  liegen?“.

**Wozu brauchst du das später?** In [13.5 Teile und herrsche](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren)
teilt eine Methode ein Array in zwei Hälften und ruft sich für jede Hälfte auf. Das ist eine verzweigte Rekursion. In
[17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen) zählst du,
wie viele Schritte ein Algorithmus braucht. Das Zählen von Aufrufen in diesem Kapitel ist die erste Übung dafür.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Rekursion mit einem Selbstaufruf** aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf):
  Basisfall, rekursiver Fall und Fortschritt.
- **Hinweg und Rückweg** aus [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg):
  Ausgaben vor dem Selbstaufruf erscheinen auf dem Hinweg, Ausgaben danach auf dem Rückweg.
- **Rekursion mit Strings** aus [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
- **CodeDraw** aus [1.8 CodeDraw einrichten](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild) und
  [5.4 CodeDraw mit Schleifen](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe): Ursprung links
  oben, `y` wächst nach unten, ein Quadrat wird über seine linke obere Ecke angegeben.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: rv-ein-countdown
titel: Ein Countdown in Dreierschritten
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf))
teile:
  - typ: ausgabe
    code: |
      public class Runter {
          public static void runter(int n) {
              if (n <= 0) {
                  System.out.println("los");
              } else {
                  System.out.println(n);
                  runter(n - 3);
              }
          }

          public static void main(String[] args) {
              runter(7);
          }
      }
    loesung: |
      7
      4
      1
      los
    fehler:
      - wert: "7\n4\n1\n-2\nlos"
        meldung: 'Bei `n = -2` ist `n <= 0` wahr. Dann läuft der Basisfall: Er gibt `los` aus, aber nicht die Zahl.'
      - wert: "7\n4\nlos"
        meldung: 'Bei `n = 1` ist `1 <= 0` falsch. Die 1 wird also noch ausgegeben. Erst der nächste Aufruf landet im Basisfall.'
hinweise:
  - Schreib die Werte von `n` für jeden Aufruf untereinander und prüfe jedes Mal `n <= 0`.
loesung: |
  Die Aufrufe haben `n = 7`, `4`, `1` und `-2`. Die ersten drei geben ihre Zahl aus und rufen sich mit `n - 3` auf.
  ---
  Bei `-2` gilt `n <= 0`. Dieser Aufruf gibt `los` aus und ruft sich nicht mehr auf.
```

```aufgabe
id: rv-ein-vor-nach
titel: Vor und nach dem Selbstaufruf
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: ausgabe
    code: |
      public class Welle {
          public static void w(int n) {
              if (n == 0) {
                  System.out.print("|");
                  return;
              }
              System.out.print(n);
              w(n - 1);
              System.out.print(n);
          }

          public static void main(String[] args) {
              w(3);
              System.out.println();
          }
      }
    loesung: |
      321|123
    fehler:
      - wert: "321|321"
        meldung: Auf dem Rückweg wird zuerst der zuletzt begonnene Aufruf fertig. Das ist `w(1)`, also kommt nach dem Strich zuerst die 1.
      - wert: "123|321"
        meldung: Die Ausgabe vor dem Selbstaufruf läuft auf dem Hinweg. Dort beginnt `w(3)`, also steht die 3 ganz vorne.
hinweise:
  - Was vor dem Selbstaufruf steht, kommt auf dem Hinweg. Was danach steht, kommt auf dem Rückweg in umgekehrter Reihenfolge.
loesung: |
  Hinweg: `w(3)`, `w(2)` und `w(1)` geben 3, 2 und 1 aus. Der Basisfall `w(0)` gibt den Strich aus.
  ---
  Rückweg: Zuerst wird `w(1)` fertig und gibt 1 aus, dann `w(2)` mit 2 und zuletzt `w(3)` mit 3. Zusammen `321|123`.
```

```aufgabe
id: rv-ein-anzahl
titel: Wie oft läuft g?
niveau: 1
art: check
angabe: |
  Gegeben ist

  ```java
  public static int g(int n) {
      if (n <= 0) {
          return 0;
      }
      return 2 + g(n - 4);
  }
  ```

  Wie oft wird `g` beim Aufruf `g(17)` insgesamt aufgerufen? Der Aufruf aus `main` zählt mit.
  (Wiederholung: [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: Der letzte Aufruf `g(-3)` landet im Basisfall. Er ist trotzdem ein Aufruf und zählt mit.
      - wert: "4"
        meldung: '`17 / 4` ist zwar 4, aber gezählt werden alle Argumente: 17, 13, 9, 5, 1 und -3.'
hinweise:
  - Schreib die Argumente untereinander, bis eines `n <= 0` erfüllt. Dann zähle die Zeilen.
loesung: |
  Die Argumente sind 17, 13, 9, 5, 1 und -3. Erst bei -3 gilt `n <= 0`.
  ---
  Das sind 6 Aufrufe. Der erste aus `main` und der letzte im Basisfall gehören dazu.
```

```aufgabe
id: rv-ein-terminiert
titel: Welcher Aufruf endet?
niveau: 1
art: check
angabe: |
  Gegeben ist

  ```java
  public static int f(int n) {
      if (n == 1) {
          return 1;
      }
      return n * f(n - 2);
  }
  ```

  Welcher Aufruf endet **ohne** `StackOverflowError`? (Wiederholung: [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf))
teile:
  - typ: auswahl
    optionen: ['`f(7)`', '`f(6)`', '`f(0)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Von 6 aus laufen die Werte 6, 4, 2, 0, -2 … Die 1 wird übersprungen, der Basisfall greift nie.'
      - wert: 2
        meldung: 'Von 0 aus geht es nach -2, -4 … Die Werte werden kleiner und entfernen sich von 1.'
hinweise:
  - Die Rekursion endet nur, wenn die Folge der Argumente **genau** den Wert 1 trifft.
loesung: |
  Der Fortschritt ist `n - 2`. Von einer ungeraden Zahl größer als 1 aus trifft man die 1, von einer geraden nie.
  ---
  `f(7)` läuft über 7, 5, 3 und 1 und endet. `f(6)` und `f(0)` laufen an der 1 vorbei.
```

```aufgabe
id: rv-ein-string
titel: Das erste Zeichen wandert nach hinten
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings))
teile:
  - typ: ausgabe
    code: |
      public class Dreh {
          public static String r(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              return r(s.substring(1)) + s.charAt(0);
          }

          public static void main(String[] args) {
              System.out.println(r("Lampe"));
          }
      }
    loesung: |
      epmaL
    fehler:
      - wert: "Lampe"
        meldung: Das erste Zeichen wird **hinter** das Ergebnis des Rests gehängt. Dadurch dreht sich die Reihenfolge um.
hinweise:
  - Rechne von innen nach außen. `r("e")` liefert `"e"`, `r("pe")` liefert `"e" + 'p'`.
loesung: |
  Der Basisfall ist der leere String. Jeder Aufruf hängt sein erstes Zeichen **hinten** an das Ergebnis des Rests an.
  ---
  Von innen nach außen: `"e"`, `"ep"`, `"epm"`, `"epma"`, `"epmaL"`. Der String erscheint umgedreht.
```

```aufgabe
id: rv-ein-codedraw
titel: Ein Quadrat um seinen Mittelpunkt
niveau: 1
art: check
angabe: |
  Ein ausgefülltes Quadrat mit Seitenlänge 80 soll seinen **Mittelpunkt** bei (200, 150) haben. Welchen x-Wert musst
  du `cd.fillSquare(x, y, 80)` übergeben? (Wiederholung: [5.4 CodeDraw mit Schleifen](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe))
teile:
  - typ: zahl
    loesung: "200 - 80/2"
    fehler:
      - wert: "200"
        meldung: Bei `fillSquare` ist (x, y) die **linke obere Ecke**, nicht der Mittelpunkt. Du musst um die halbe Seite nach links rücken.
      - wert: "120"
        meldung: Vom Mittelpunkt bis zum linken Rand ist es nur die **halbe** Seitenlänge, also 40, nicht 80.
hinweise:
  - Vom Mittelpunkt bis zum linken Rand ist es eine halbe Seitenlänge.
loesung: |
  `fillSquare` erwartet die linke obere Ecke. Der linke Rand liegt eine halbe Seite links vom Mittelpunkt.
  ---
  `200 - 80 / 2 = 160`. Ebenso ist der y-Wert `150 - 40 = 110`.
```

## Arten der Rekursion: linear, verzweigt, verschachtelt

```aufgabe
id: rv-ar-check-selbstaufruf
titel: Wo steht der Selbstaufruf?
niveau: 1
art: check
angabe: |
  In [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) hast du Basisfall,
  Selbstaufruf und Fortschritt kennengelernt. Gegeben ist

  ```java
  public static int f(int n) {
      if (n <= 1) {
          return 1;
      }
      return f(n - 1) + 1;
  }
  ```

  Welcher Teil ist der **Selbstaufruf**?
teile:
  - typ: auswahl
    optionen: ['`f(n - 1)`', '`n <= 1`', '`return 1;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n <= 1` ist die Bedingung des Basisfalls. Dort wird nur geprüft, nicht aufgerufen.'
      - wert: 2
        meldung: '`return 1;` ist das Ergebnis des Basisfalls. Dort ruft sich `f` gerade **nicht** auf.'
loesung: |
  Ein Selbstaufruf ist ein Aufruf der eigenen Methode mit Argumenten. Das ist `f(n - 1)`.
  ---
  `n <= 1` mit `return 1;` bildet den Basisfall. Das `+ 1` wird auf dem Rückweg zum Ergebnis des Selbstaufrufs addiert.
```

In [Kapitel 10](/lernen/ep1/rekursion) hatte jede Methode genau einen Selbstaufruf im rekursiven Fall. Das ist nicht
die einzige Möglichkeit. Eine Methode kann sich in einem Durchlauf auch zweimal aufrufen. Sie kann einen Selbstaufruf
als Argument eines anderen Selbstaufrufs verwenden. Und zwei Methoden können sich gegenseitig aufrufen.

Die Vorlesung ordnet rekursive Methoden deshalb in **Arten** ein. Entscheidend ist eine einzige Frage: **Wie viele
Selbstaufrufe führt ein einzelner Aufruf aus, und wie hängen sie zusammen?** Wichtig ist das Wort „ausführen“. Es
zählt nicht, wie oft der Methodenname im Text steht, sondern wie viele Selbstaufrufe bei **einem** Durchlauf des Rumpfs
tatsächlich passieren. Das erste Beispiel zeigt, warum dieser Unterschied zählt.

:::beispiel[Zwei Selbstaufrufe im Text, aber nur einer läuft]
Die Methode `schritte` zählt, wie viele Schritte man von `n` bis 0 braucht. Eine gerade Zahl wird halbiert, von einer
ungeraden Zahl wird 1 abgezogen.

```java
public class Schritte {
    public static int schritte(int n) {
        if (n == 0) {
            return 0;
        }
        if (n % 2 == 0) {
            return 1 + schritte(n / 2);
        }
        return 1 + schritte(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(schritte(10));
    }
}
```

Zeile für Zeile:

- `if (n == 0) { return 0; }` ist der Basisfall. Bei 0 braucht man keinen Schritt mehr.
- `if (n % 2 == 0)` prüft, ob `n` gerade ist. `n % 2` ist der Rest bei der Division durch 2. Ist er 0, ist `n` gerade.
  Dann folgt ein Schritt (`1 +`) und der Rest des Wegs ab `n / 2`.
- Die letzte Zeile läuft nur für ungerade `n`. Ein Schritt, dann der Rest des Wegs ab `n - 1`.

Im Text stehen zwei Selbstaufrufe. Aber jedes `return` beendet die Methode sofort. Ein Durchlauf nimmt also entweder
den mittleren oder den letzten Weg, nie beide.

Der Ablauf für `schritte(10)`: Die Argumente sind 10, 5, 4, 2, 1 und 0. Jeder Aufruf löst genau einen weiteren aus.
Auf dem Rückweg zählt jeder der fünf wartenden Aufrufe 1 dazu. Die Ausgabe ist `5`.
:::

:::definition[Lineare Rekursion]
Eine rekursive Methode ist **linear rekursiv**, wenn jeder Aufruf **höchstens einen** Selbstaufruf ausführt. Die Aufrufe
bilden dann eine einfache Kette ohne Abzweigungen.
:::

**Beispiel:** `schritte` ist linear. Ebenso alle Methoden aus Kapitel 10, etwa `summe` mit `return n + summe(n - 1);`.

**Kein Beispiel:** Eine Methode mit `return f(n - 1) + f(n - 2);` ist **nicht** linear. Hier führt ein einziger
Durchlauf zwei Selbstaufrufe nacheinander aus.

:::beispiel[Zweimal dieselbe Frage stellen]
```java
public class Zweige {
    public static int zweige(int n) {
        if (n == 0) {
            return 1;
        }
        return zweige(n - 1) + zweige(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(zweige(3));
    }
}
```

Die Zeile `return zweige(n - 1) + zweige(n - 1);` enthält zwei Selbstaufrufe in **einem** Ausdruck. Java rechnet
zuerst den linken Aufruf ganz aus, dann den rechten, und addiert dann die beiden Ergebnisse.

1. `zweige(0)` ist der Basisfall und liefert 1.
2. `zweige(1)` ruft zweimal `zweige(0)` auf und liefert `1 + 1 = 2`.
3. `zweige(2)` ruft zweimal `zweige(1)` auf. Jeder davon ruft wieder zweimal `zweige(0)` auf. Ergebnis `2 + 2 = 4`.
4. `zweige(3)` liefert `4 + 4 = 8`.

Die Ausgabe ist `8`. Jetzt zählen wir die Aufrufe. Es gibt einen Aufruf mit 3, zwei mit 2, vier mit 1 und acht mit 0.
Das sind `1 + 2 + 4 + 8 = 15` Aufrufe. Bei jeder Stufe verdoppelt sich die Zahl.
:::

:::definition[Verzweigte Rekursion]
Eine rekursive Methode ist **verzweigt rekursiv** (auch *baumartig*), wenn mindestens ein Aufruf **zwei oder mehr**
Selbstaufrufe ausführt. Die Aufrufe bilden dann einen **Aufrufbaum**: Jeder Aufruf verzweigt sich in mehrere kleinere.

Die Vorlesungsfolien beschreiben den Normalfall: **Jeder** Aufruf außerhalb des Basisfalls führt zwei oder mehr
Selbstaufrufe aus. Es gibt auch Methoden, bei denen nur manche Aufrufe zwei Selbstaufrufe ausführen. Zu diesem Mischfall
sagen die Folien nichts ausdrücklich. Dieser Kurs ordnet ihn als verzweigt ein, weil auch dabei ein Aufrufbaum entsteht.
:::

**Beispiel:** `zweige` ist verzweigt. Jeder Aufruf mit `n > 0` führt zwei Selbstaufrufe aus.

**Kein Beispiel:** `return 2 * zweige(n - 1);` liefert dasselbe Ergebnis, ist aber **linear**. Hier gibt es pro Aufruf
nur einen Selbstaufruf, und `zweige(3)` braucht nur 4 Aufrufe statt 15.

:::achtung[Zwei Selbstaufrufe im Text heißt noch nicht verzweigt]
Eine typische falsche Einordnung von `schritte` lautet: „Im Rumpf stehen zwei Selbstaufrufe, also ist die Methode
verzweigt.“ Das stimmt nicht. Die beiden Aufrufe stehen in **verschiedenen** Zweigen, und jedes `return` beendet den
Durchlauf. Bei `schritte(10)` führt jeder Aufruf genau einen Selbstaufruf aus. Die Methode ist linear.

Prüfe deshalb immer, ob die Selbstaufrufe **im selben Durchlauf** hintereinander ausgeführt werden können. Nur dann ist
die Rekursion verzweigt.
:::

```aufgabe
id: rv-ar-gefuehrt
titel: Eine Methode Schritt für Schritt einordnen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int t(int n) {
      if (n < 2) {
          return n;
      }
      if (n % 3 == 0) {
          return t(n / 3) + 1;
      }
      return t(n - 1) + t(n - 2);
  }
  ```

  Ist `t` linear oder verzweigt rekursiv? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: auswahl
    optionen: ['linear', 'verzweigt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Für `n = 5` ist `n % 3 == 0` falsch. Dann läuft die letzte Zeile mit zwei Selbstaufrufen. Ein einziger solcher Fall genügt für „verzweigt“.'
gefuehrt:
  - text: Wie viele Selbstaufrufe führt der Aufruf `t(1)` selbst aus?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Bei `n = 1` gilt `n < 2`. Das ist der Basisfall, er liefert `n` ohne Selbstaufruf.
  - text: Wie viele Selbstaufrufe führt der Aufruf `t(9)` selbst aus? Zähle nur die Aufrufe, die direkt in `t(9)` stehen.
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`9 % 3 == 0` ist wahr. Der Durchlauf nimmt den mittleren Zweig mit dem einen Aufruf `t(3)` und endet dort mit `return`.'
  - text: Wie viele Selbstaufrufe führt der Aufruf `t(5)` selbst aus?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`5 % 3` ist 2, also läuft die letzte Zeile. Dort stehen `t(4)` und `t(3)` im selben Ausdruck. Beide werden ausgeführt.'
  - text: Es genügt ein einziger Aufruf mit zwei Selbstaufrufen. Welche Art ist `t` also?
    teil:
      typ: auswahl
      optionen: ['linear', 'verzweigt']
      richtig: [1]
    erklaerung: Weil manche Aufrufe zwei Selbstaufrufe ausführen, entsteht ein Aufrufbaum. `t` ist verzweigt rekursiv.
hinweise:
  - Prüfe für jeden Zweig, wie viele Selbstaufrufe in einem Durchlauf hintereinander ausgeführt werden.
loesung: |
  **Ansatz:** Für jeden Zweig zählen, wie viele Selbstaufrufe ein Durchlauf ausführt.
  ---
  Basisfall `n < 2`: kein Selbstaufruf. Zweig `n % 3 == 0`: ein Selbstaufruf. Letzte Zeile: zwei Selbstaufrufe im selben Ausdruck.
  ---
  Weil die letzte Zeile zwei Aufrufe ausführt, ist `t` verzweigt rekursiv. Probe: `t(5)` ruft `t(4)` und `t(3)` auf.
```

Es gibt noch zwei weitere Arten, die seltener vorkommen, aber im Quiz als Begriffe auftauchen können.

:::beispiel[Ein Selbstaufruf im Argument: die McCarthy-91-Funktion]
Der Informatiker John McCarthy hat diese Methode erfunden:

```java
public class Mc {
    public static int m(int n) {
        if (n > 100) {
            return n - 10;
        }
        return m(m(n + 11));
    }

    public static void main(String[] args) {
        System.out.println(m(99));
    }
}
```

Neu ist `m(m(n + 11))`. Das Argument des äußeren Aufrufs ist selbst ein Aufruf. Java rechnet wie immer von innen nach
außen. Zuerst läuft der innere Aufruf `m(n + 11)`. Erst mit seinem Ergebnis startet der äußere Aufruf.

1. `m(99)`: 99 ist nicht größer als 100. Also braucht Java `m(m(110))` und rechnet zuerst `m(110)`.
2. `m(110)`: 110 ist größer als 100, Ergebnis `110 - 10 = 100`. Jetzt läuft der äußere Aufruf `m(100)`.
3. `m(100)`: nicht größer als 100. Also zuerst `m(111)`, das liefert 101. Dann läuft `m(101)`.
4. `m(101)` liefert `101 - 10 = 91`. Dieser Wert wird durch alle wartenden Aufrufe unverändert zurückgegeben.

Die Ausgabe ist `91`. Insgesamt gab es 5 Aufrufe: mit 99, 110, 100, 111 und 101. Für jedes `n` bis 101 liefert diese
Methode 91. Daher hat sie ihren Namen.
:::

:::definition[Verschachtelte und wechselseitige Rekursion]
Eine Rekursion ist **verschachtelt**, wenn das **Argument** eines Selbstaufrufs selbst einen Selbstaufruf enthält, etwa
`m(m(n + 11))`. Der innere Aufruf muss fertig sein, bevor der äußere beginnen kann.

Eine Rekursion ist **wechselseitig** (auch *indirekt*), wenn sich eine Methode nicht direkt selbst aufruft, sondern über
eine andere: `a` ruft `b` auf, und `b` ruft wieder `a` auf.
:::

```aufgabe
id: rv-ar-zeilen-verschachtelt
titel: Die verschachtelte Stelle finden
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Markiere **alle Zeilen**, in denen ein Selbstaufruf im Argument eines anderen Selbstaufrufs steht.
teile:
  - typ: zeilen
    code: |
      public static int v(int n) {
          if (n <= 0) {
              return 1;
          }
          if (n % 2 == 0) {
              return v(n - 1) + v(n - 2);
          }
          return v(v(n - 2) - 1);
      }
    loesung: [8]
    fehler:
      - wert: [6]
        meldung: In Zeile 6 stehen zwei Selbstaufrufe nebeneinander, verbunden durch `+`. Das ist verzweigt, nicht verschachtelt.
      - wert: [6, 8]
        meldung: Nur in Zeile 8 steckt ein Aufruf im Argument eines anderen. In Zeile 6 stehen die Aufrufe nebeneinander.
hinweise:
  - Suche ein Muster der Form `v(... v(...) ...)`.
loesung: |
  **Ansatz:** Bei jedem Selbstaufruf prüfen, ob sein Argument wieder `v(` enthält.
  ---
  Nur Zeile 8 hat diese Form: `v(v(n - 2) - 1)`. Das innere `v(n - 2)` muss fertig sein, bevor das äußere `v` startet. Zeile 6 ist verzweigt.
```

**Beispiel für wechselseitig:** Ob eine Zahl `n ≥ 0` gerade ist, kann man so beschreiben: 0 ist gerade. Eine Zahl
größer als 0 ist gerade, wenn die Zahl davor ungerade ist.

```java
public static boolean istGerade(int n) {
    if (n == 0) {
        return true;
    }
    return istUngerade(n - 1);
}

public static boolean istUngerade(int n) {
    if (n == 0) {
        return false;
    }
    return istGerade(n - 1);
}
```

`istGerade(3)` ruft `istUngerade(2)` auf, das ruft `istGerade(1)` auf, und das ruft `istUngerade(0)` auf. Dort greift der
Basisfall mit `false`. Dieser Wert wandert unverändert zurück: `istGerade(3)` liefert `false`. Das stimmt, 3 ist
ungerade.

**Kein Beispiel für verschachtelt:** `return f(n - 1) + f(n - 2);` enthält zwei Selbstaufrufe, aber keiner steht im
Argument des anderen. Sie stehen nebeneinander, die Rekursion ist verzweigt.

**Kein Beispiel für wechselseitig:** Wenn `zeigeAlle` die Methode `zeigeEine` aufruft, diese aber nie zurück zu `zeigeAlle` führt, ist
das **keine** Rekursion. Es ist ein gewöhnlicher Aufruf einer anderen Methode.

```aufgabe
id: rv-ar-ausgabe-wechselseitig
titel: Ping und Pong
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class PingPong {
          public static void ping(int n) {
              if (n <= 0) {
                  System.out.println("ende");
                  return;
              }
              System.out.println("ping " + n);
              pong(n - 1);
          }

          public static void pong(int n) {
              if (n <= 0) {
                  System.out.println("ende");
                  return;
              }
              System.out.println("pong " + n);
              ping(n - 2);
          }

          public static void main(String[] args) {
              ping(6);
          }
      }
    loesung: |
      ping 6
      pong 5
      ping 3
      pong 2
      ende
    fehler:
      - wert: "ping 6\npong 5\nping 4\npong 3\nping 2\npong 1\nende"
        meldung: '`pong` ruft `ping(n - 2)` auf, nicht `ping(n - 1)`. Von `pong 5` aus geht es mit 3 weiter.'
      - wert: "ping 6\npong 5\nping 3\npong 2\nping 0\nende"
        meldung: Der Aufruf `ping(0)` landet im Basisfall. Er gibt nur `ende` aus, nicht `ping 0`.
hinweise:
  - Notiere bei jedem Aufruf, welche Methode läuft und welches Argument sie hat.
  - '`ping` verkleinert um 1, `pong` um 2. Beide Methoden haben den Basisfall `n <= 0`.'
loesung: |
  **Ansatz:** Wechselseitige Rekursion. Die Aufrufe wechseln zwischen `ping` und `pong`, jede Methode mit ihrem eigenen Fortschritt.
  ---
  `ping(6)` gibt `ping 6` aus und ruft `pong(5)` auf. Das gibt `pong 5` aus und ruft `ping(3)` auf.
  ---
  `ping(3)` gibt `ping 3` aus und ruft `pong(2)` auf. Das gibt `pong 2` aus und ruft `ping(0)` auf. Dort greift der Basisfall mit `ende`.
```

:::achtung[Gleiches Ergebnis, aber Millionen Aufrufe]
Eine typische Überlegung lautet so. „`zweige(n - 1) + zweige(n - 1)` und `2 * zweige(n - 1)` sind dasselbe. Also ist
es egal, was ich schreibe.“

Das Ergebnis ist tatsächlich gleich. Die Anzahl der Aufrufe aber nicht.

- Mit `2 * zweige(n - 1)` braucht `zweige(20)` genau 21 Aufrufe: mit 20, 19, …, 1 und 0.
- Mit `zweige(n - 1) + zweige(n - 1)` verdoppelt sich die Zahl der Aufrufe auf jeder Stufe. Für `zweige(20)` sind es
  `1 + 2 + 4 + … + 2^20 = 2097151` Aufrufe, also gut zwei Millionen.

Die Reparatur: Rechne einen Wert, den du zweimal brauchst, nur **einmal** aus und speichere ihn, etwa mit
`int h = zweige(n - 1); return h + h;`. Dann ist die Methode wieder linear.
:::

:::merke[Eine rekursive Methode einordnen]
1. **Wie viele Selbstaufrufe führt ein einzelner Durchlauf höchstens aus?** Steht jeder Selbstaufruf in einem eigenen
   Zweig mit `return`, läuft pro Durchlauf nur einer.
2. Höchstens einer: **linear**. In mindestens einem Fall zwei oder mehr: **verzweigt**.
3. Steht ein Selbstaufruf **im Argument** eines anderen: **verschachtelt**.
4. Ruft die Methode sich nur **über eine andere Methode** wieder auf: **wechselseitig**.
:::

```aufgabe
id: rv-ar-auswahl-drei
titel: Drei Methoden einordnen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ordne jede Methode ein. Die Basisfälle sind weggelassen, sie stehen jeweils davor.

  a) `return 1 + a(n / 10);`

  b) `return b(n - 1) + b(n - 3);`

  c) `return c(c(n - 2));`
teile:
  - typ: auswahl
    label: a)
    optionen: ['linear', 'verzweigt', 'verschachtelt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier steht nur ein Selbstaufruf. Das `1 +` ist eine Addition, kein zweiter Aufruf.'
      - wert: 2
        meldung: 'Das Argument `n / 10` ist eine Rechnung, kein Selbstaufruf. Verschachtelt wäre `a(a(...))`.'
  - typ: auswahl
    label: b)
    optionen: ['linear', 'verzweigt', 'verschachtelt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Beide Aufrufe stehen im selben Ausdruck. Java führt erst `b(n - 1)` und dann `b(n - 3)` aus, also zwei pro Durchlauf.'
      - wert: 2
        meldung: Keiner der beiden Aufrufe steht im Argument des anderen. Sie stehen nebeneinander, verbunden durch `+`.
  - typ: auswahl
    label: c)
    optionen: ['linear', 'verzweigt', 'verschachtelt']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Im Argument des äußeren Aufrufs steht ein zweiter Selbstaufruf `c(n - 2)`. Das ist das Kennzeichen der verschachtelten Rekursion.'
      - wert: 1
        meldung: 'Die beiden Aufrufe stehen nicht nebeneinander, sondern ineinander. Dafür gibt es den eigenen Begriff „verschachtelt“.'
hinweise:
  - Zähle die Selbstaufrufe pro Zeile und schau, ob einer im Argument eines anderen steht.
loesung: |
  **Ansatz:** Bei jeder Zeile prüfen, wie viele Selbstaufrufe ein Durchlauf ausführt und wie sie zusammenhängen.
  ---
  a) ein Selbstaufruf: linear. b) zwei Selbstaufrufe nebeneinander: verzweigt.
  ---
  c) ein Selbstaufruf im Argument eines anderen: verschachtelt.
```

```aufgabe
id: rv-ar-rf-begriffe
titel: Aussagen über Arten der Rekursion
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Methode, in deren Rumpf zwei Selbstaufrufe in verschiedenen `if`-Zweigen mit `return` stehen, kann linear sein.
        richtig: true
        erklaerung: Jedes `return` beendet den Durchlauf. Ein Durchlauf führt dann nur einen der beiden Aufrufe aus.
      - text: Bei einer verzweigten Rekursion ist die Anzahl der Aufrufe immer gleich der Rekursionstiefe.
        richtig: false
        erklaerung: 'Gleich sind die beiden Zahlen bei linearer Rekursion, denn dort liegt jeder Aufruf auf einer eigenen Ebene. Bei verzweigter Rekursion gibt es meist viel mehr Aufrufe als Ebenen: `zweige(3)` hat 15 Aufrufe, aber nur 4 Ebenen.'
      - text: Ruft `a` die Methode `b` auf und `b` wieder `a`, spricht man von wechselseitiger Rekursion.
        richtig: true
        erklaerung: Die Rekursion läuft indirekt über eine zweite Methode.
      - text: '`return 2 * f(n - 1);` ist verzweigt, weil das Ergebnis verdoppelt wird.'
        richtig: false
        erklaerung: Es gibt nur einen Selbstaufruf. Die Multiplikation mit 2 ist eine Rechnung mit seinem Ergebnis.
    fehler:
      - wert: [f, f, r, f]
        meldung: Zähle nicht die Selbstaufrufe im Text, sondern die in einem Durchlauf. Zwei Aufrufe in verschiedenen Zweigen mit `return` laufen nie beide.
      - wert: [r, f, r, r]
        meldung: '`2 * f(n - 1)` ruft `f` nur einmal auf. Verzweigt wäre `f(n - 1) + f(n - 1)`.'
hinweise:
  - Denk an `schritte` und `zweige` aus den Beispielen dieses Abschnitts.
loesung: |
  **Ansatz:** Jede Aussage mit den Definitionen vergleichen. Maßgeblich ist die Zahl der Selbstaufrufe pro Durchlauf.
  ---
  Aussage 1 und 3 sind richtig. Zwei Zweige mit `return` ergeben höchstens einen Aufruf pro Durchlauf, und `a`–`b`–`a` ist wechselseitig.
  ---
  Aussage 2 und 4 sind falsch. Bei verzweigter Rekursion gibt es mehr Aufrufe als Ebenen, und `2 * f(n - 1)` ist linear.
```

```aufgabe
id: rv-ar-ausgabe-verschachtelt
titel: Von innen nach außen rechnen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Innen {
          public static int h(int n) {
              if (n >= 10) {
                  return n - 3;
              }
              return h(h(n + 4));
          }

          public static void main(String[] args) {
              System.out.println(h(8));
              System.out.println(h(11));
          }
      }
    loesung: |
      7
      8
    fehler:
      - wert: "9\n8"
        meldung: '`h(12)` liefert 9, aber das ist nur der **innere** Aufruf. Mit diesem Ergebnis startet noch der äußere Aufruf `h(9)`.'
      - wert: "5\n8"
        meldung: '`h(8)` ist nicht der Basisfall, denn 8 ist kleiner als 10. Die Rechnung `8 - 3` gilt erst für Argumente ab 10.'
hinweise:
  - Beginne bei `h(8)` mit dem inneren Aufruf `h(12)`. Setze sein Ergebnis in den äußeren Aufruf ein.
  - Der äußere Aufruf ist wieder ein vollständiger Aufruf. Er kann selbst noch einmal verschachtelt weiterrechnen.
loesung: |
  **Ansatz:** Bei `h(h(n + 4))` zuerst den inneren Aufruf ausrechnen, dann mit seinem Ergebnis den äußeren.
  ---
  `h(8)`: innen `h(12) = 9`, dann außen `h(9)`. Für `h(9)` gilt wieder innen `h(13) = 10` und dann außen `h(10) = 7`.
  ---
  Also liefert `h(8)` den Wert 7. `h(11)` ist sofort der Basisfall mit `11 - 3 = 8`. Ausgabe `7` und `8`.
```

```aufgabe
id: rv-ar-zahl-vergleich
titel: Linear oder verzweigt verdreifachen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Beide Methoden liefern `3` hoch `n`:

  ```java
  public static int drei(int n) {
      if (n == 0) {
          return 1;
      }
      return 3 * drei(n - 1);
  }

  public static int dreiBaum(int n) {
      if (n == 0) {
          return 1;
      }
      return dreiBaum(n - 1) + dreiBaum(n - 1) + dreiBaum(n - 1);
  }
  ```

  Wie oft wird jede Methode beim Aufruf mit `n = 3` insgesamt aufgerufen? Der Aufruf aus `main` zählt mit.
teile:
  - typ: zahl
    label: '`drei(3)`'
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Der Aufruf `drei(0)` landet im Basisfall, zählt aber mit. Die Argumente sind 3, 2, 1 und 0.
  - typ: zahl
    label: '`dreiBaum(3)`'
    loesung: "1 + 3 + 9 + 27"
    fehler:
      - wert: "27"
        meldung: 27 Aufrufe gibt es nur mit dem Argument 0. Dazu kommen die Aufrufe mit 3, 2 und 1.
      - wert: "10"
        meldung: Jeder Aufruf mit `n > 0` ruft sich **dreimal** auf. Auf der Stufe mit Argument 1 gibt es also schon 9 Aufrufe, nicht 3.
hinweise:
  - Bei `drei` ist jedes Argument genau einmal dabei. Schreib die Argumente auf.
  - Bei `dreiBaum` verdreifacht sich die Zahl der Aufrufe von Stufe zu Stufe. Zähle je Argument und addiere.
loesung: |
  **Ansatz:** Für jedes Argument zählen, wie viele Aufrufe es damit gibt, und alles addieren.
  ---
  `drei(3)`: je ein Aufruf mit 3, 2, 1 und 0, also 4 Aufrufe. Die Rekursion ist linear.
  ---
  `dreiBaum(3)`: ein Aufruf mit 3, drei mit 2, neun mit 1 und 27 mit 0. Zusammen `1 + 3 + 9 + 27 = 40` Aufrufe für dasselbe Ergebnis 27.
```

```aufgabe
id: rv-ar-rf-diatomisch
titel: Manchmal einer, manchmal zwei
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Gegeben ist

  ```java
  public static int q(int n) {
      if (n <= 1) {
          return n;
      }
      if (n % 2 == 0) {
          return q(n / 2);
      }
      return q(n / 2) + q(n / 2 + 1);
  }
  ```

  Beurteile jede Aussage. Vorbedingung: `n >= 0`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`q` ist linear rekursiv, weil die beiden Fälle durch `if` getrennt sind.'
        richtig: false
        erklaerung: Die letzte Zeile führt in einem Durchlauf zwei Selbstaufrufe aus. Schon dieser eine Fall macht `q` verzweigt.
      - text: '`q(8)` führt insgesamt genau 4 Aufrufe aus.'
        richtig: true
        erklaerung: 8, 4 und 2 sind gerade und führen je einen Aufruf aus. Die Argumente sind 8, 4, 2 und 1.
      - text: '`q(5)` führt insgesamt genau 7 Aufrufe aus und liefert 3.'
        richtig: true
        erklaerung: '`q(5)` ruft `q(2)` und `q(3)` auf. `q(2)` ruft `q(1)` auf. `q(3)` ruft `q(1)` und `q(2)` auf, und dieses `q(2)` ruft noch einmal `q(1)` auf. Das sind 7 Aufrufe. Wert `1 + (1 + 1) = 3`.'
      - text: '`q` ist verschachtelt, weil im Argument `n / 2 + 1` gerechnet wird.'
        richtig: false
        erklaerung: Verschachtelt heißt, dass im Argument ein **Selbstaufruf** steht. `n / 2 + 1` ist nur eine Rechnung.
    fehler:
      - wert: [r, r, r, f]
        meldung: Die Trennung durch `if` hilft nur, wenn in jedem Zweig höchstens ein Selbstaufruf steht. Wie viele stehen in der letzten Zeile?
      - wert: [f, r, f, f]
        meldung: Zähle bei `q(5)` alle Aufrufe, auch die doppelt vorkommenden. `q(1)` wird dreimal aufgerufen und `q(2)` zweimal.
hinweise:
  - Prüfe jeden Zweig einzeln. Wie viele Selbstaufrufe führt ein Durchlauf für ein gerades und für ein ungerades `n` aus?
  - Schreib für `q(5)` alle Aufrufe in der Reihenfolge auf, in der sie starten.
loesung: |
  **Ansatz:** Für gerade und ungerade `n` getrennt zählen, wie viele Selbstaufrufe ein Durchlauf ausführt. Dann die Aufrufe für 8 und 5 aufschreiben.
  ---
  Gerade `n ≥ 2`: ein Aufruf. Ungerade `n ≥ 3`: zwei Aufrufe. Also ist `q` verzweigt, nicht linear, und auch nicht verschachtelt. Aussagen 1 und 4 sind falsch.
  ---
  `q(8)`: 8, 4, 2, 1, also 4 Aufrufe. `q(5)`: 5, 2, 1, 3, 1, 2, 1, also 7 Aufrufe. Der Wert ist `q(2) + q(3) = 1 + 2 = 3`. Aussagen 2 und 3 sind richtig.
```

```reflexion
frage: Warum ist für die Einordnung als linear oder verzweigt egal, wie oft der Methodenname im Text steht? Erkläre es an `schritte` und `zweige`.
antwort: |
  Entscheidend ist, was bei einem einzelnen Aufruf tatsächlich passiert. In `schritte` stehen zwei Selbstaufrufe im
  Text, aber in getrennten Zweigen mit `return`. Jeder Durchlauf nimmt genau einen davon, also entsteht eine Kette, und
  die Methode ist linear. In `zweige` stehen die zwei Aufrufe im selben Ausdruck. Jeder Durchlauf führt beide aus, also
  verzweigt sich jeder Aufruf in zwei, und es entsteht ein Baum. Die Zahl im Text sagt nur, was passieren **kann**.
  Die Einordnung fragt, was in einem Durchlauf passiert.
```

## Endrekursion: das Ergebnis auf dem Hinweg berechnen

```aufgabe
id: rv-er-check-rueckweg
titel: Wann wird addiert?
niveau: 1
art: check
angabe: |
  In [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg) hast du `summe` mit
  `return n + summe(n - 1);` und dem Basisfall `summe(0) = 0` auf dem Stapel verfolgt. Wann wird bei `summe(3)` die
  **erste** Addition ausgeführt?
teile:
  - typ: auswahl
    optionen:
      - auf dem Rückweg, im Aufruf mit `n = 1`, nachdem `summe(0)` geliefert hat
      - auf dem Hinweg, im Aufruf mit `n = 3`, bevor `summe(2)` startet
      - im Basisfall `summe(0)`
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n + summe(n - 1)` kann erst addieren, wenn der Wert von `summe(n - 1)` feststeht. Auf dem Hinweg ist er noch unbekannt.'
      - wert: 2
        meldung: Der Basisfall liefert nur 0 zurück. Er addiert nichts.
loesung: |
  Jeder Aufruf wartet auf das Ergebnis seines Selbstaufrufs. Auf dem Hinweg wird also nichts addiert.
  ---
  Zuerst liefert `summe(0)` den Wert 0. Dann rechnet der Aufruf mit `n = 1` als erster `1 + 0`.
```

Bei `summe` passiert die ganze Rechnung auf dem Rückweg. Jeder Aufruf hält seine Addition fest, bis der Selbstaufruf
fertig ist. Die Vorlesung nennt den Hinweg auch **Aufrufpfad** und den Rückweg **return-Pfad**. Bei `summe` gilt also:
Die Berechnung erfolgt am return-Pfad.

Es geht auch anders. Man kann die Zwischenergebnisse schon auf dem Hinweg mitnehmen. Dann muss auf dem Rückweg nichts
mehr gerechnet werden. Das erste Beispiel zeigt eine Methode, die von sich aus so arbeitet.

:::beispiel[Der größte gemeinsame Teiler durch Abziehen]
Der **größte gemeinsame Teiler** (ggT) zweier Zahlen ist die größte Zahl, die beide ohne Rest teilt. Aus
[7.6 Rechnen mit Schleifen](/lernen/ep1/ziffern/rechnen-mit-schleifen-multiplikation-wurzel-und-ggt) kennst du die
Idee: Zieht man die kleinere Zahl von der größeren ab, ändert sich der ggT nicht. Das wiederholt man, bis beide Zahlen
gleich sind.

```java
public class Teiler {
    public static int ggt(int a, int b) {   // Vorbedingung: a > 0, b > 0
        if (a == b) {
            return a;
        }
        if (a > b) {
            return ggt(a - b, b);
        }
        return ggt(a, b - a);
    }

    public static void main(String[] args) {
        System.out.println(ggt(30, 12));
    }
}
```

- `if (a == b) { return a; }` ist der Basisfall. Sind beide Zahlen gleich, ist diese Zahl selbst der ggT.
- `return ggt(a - b, b);` zieht die kleinere Zahl `b` von der größeren ab. Das Ergebnis des Selbstaufrufs wird
  **unverändert** zurückgegeben. Nach dem Selbstaufruf passiert nichts mehr.
- Die letzte Zeile macht dasselbe, wenn `b` die größere Zahl ist.

Ablauf für `ggt(30, 12)`: Die Argumentpaare sind (30, 12), (18, 12), (6, 12) und (6, 6). Bei (6, 6) greift der
Basisfall mit 6. Auf dem Rückweg reicht jeder Aufruf diese 6 nur weiter. Die Ausgabe ist `6`. Probe: 30 und 12 sind
beide durch 6 teilbar, und durch keine größere Zahl.
:::

:::definition[Endrekursion]
Eine rekursive Methode ist **endrekursiv** (englisch *tail recursive*), wenn jeder Selbstaufruf die **letzte Aktion**
ihres Durchlaufs ist. Nach der Rückkehr aus dem Selbstaufruf wird nichts mehr gerechnet, ausgegeben oder verändert.
Bei einer Methode mit Rückgabewert steht der Selbstaufruf also in der Form `return f(...);`.
:::

**Beispiel:** `ggt` ist endrekursiv. Beide Selbstaufrufe stehen direkt hinter `return`.

**Kein Beispiel:** `summe` mit `return n + summe(n - 1);` ist **nicht** endrekursiv. Nach der Rückkehr muss noch `n`
addiert werden. Auch `return f(n - 1) + f(n - 2);` ist nicht endrekursiv. Nach dem ersten Aufruf folgt noch der zweite.

Daraus folgt: Eine endrekursive Methode ist immer linear. Pro Durchlauf kann höchstens ein Selbstaufruf die letzte Aktion
sein.

```aufgabe
id: rv-er-auswahl-welche
titel: Welche Methode ist endrekursiv?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der drei Methoden ist **endrekursiv**? Die Basisfälle sind jeweils richtig und weggelassen.

  **A**
  ```java
  public static int a(String s) {
      return 1 + a(s.substring(1));
  }
  ```

  **B**
  ```java
  public static int b(String s, int bisher) {
      return b(s.substring(1), bisher + 1);
  }
  ```

  **C**
  ```java
  public static int c(int n) {
      int r = c(n - 1);
      System.out.println(r);
      return r;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['A', 'B', 'C']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Nach der Rückkehr von `a(...)` muss noch `1 +` gerechnet werden. Der Selbstaufruf ist nicht die letzte Aktion.
      - wert: 2
        meldung: Nach der Rückkehr von `c(n - 1)` folgt noch eine Ausgabe. Auch eine Ausgabe ist eine Aktion nach dem Selbstaufruf.
hinweise:
  - Frag bei jeder Methode, ob nach der Rückkehr aus dem Selbstaufruf noch irgendetwas passiert.
loesung: |
  **Ansatz:** Endrekursiv heißt, dass nach dem Selbstaufruf nichts mehr passiert außer der unveränderten Rückgabe.
  ---
  A rechnet danach noch `1 +`, C gibt danach noch etwas aus. Nur B hat die Form `return b(...);`. Die Zählung steckt im Sammelparameter.
```

:::achtung[„Der Selbstaufruf steht doch in der letzten Zeile“]
Eine typische falsche Begründung lautet: „Diese Methode ist endrekursiv, denn der Selbstaufruf steht in der letzten Zeile.“

```java
public static int laenge(String s) {
    if (s.isEmpty()) {
        return 0;
    }
    return 1 + laenge(s.substring(1));     // NICHT endrekursiv
}
```

Die Zeile ist zwar die letzte, aber der Selbstaufruf ist nicht die letzte **Aktion**. Wenn `laenge(s.substring(1))`
zurückkommt, muss Java noch `1 +` rechnen. Erst danach folgt `return`. Endrekursiv ist nur die Form
`return laenge(...);` ohne jede Rechnung um den Aufruf herum.
:::

Wie macht man aus `summe` eine endrekursive Methode? Man gibt ihr einen zweiten Parameter mit, der die bisherige Summe
**sammelt**. Ein solcher Parameter heißt **Sammelparameter** (in der Literatur auch *Akkumulator*, von lateinisch
*accumulare*, „anhäufen“).

:::beispiel[Die Summe mit einem Sammelparameter]
```java
public class SummeHin {
    public static int summe(int n, int bisher) {
        if (n == 0) {
            return bisher;
        }
        return summe(n - 1, bisher + n);
    }

    public static void main(String[] args) {
        System.out.println(summe(4, 0));
    }
}
```

- `bisher` enthält die Summe der Zahlen, die schon verarbeitet sind. Der Startaufruf übergibt 0, denn am Anfang ist
  noch nichts addiert.
- Im rekursiven Fall wird `n` **sofort** zu `bisher` addiert, noch bevor der Selbstaufruf startet. Der Selbstaufruf
  bekommt die neue Zwischensumme mit.
- Im Basisfall ist alles verarbeitet. `bisher` ist dann schon das Endergebnis und wird zurückgegeben.

Die Argumentpaare für `summe(4, 0)` sind (4, 0), (3, 4), (2, 7), (1, 9) und (0, 10). Auf dem Hinweg wächst `bisher`
mit jedem Aufruf. Der Basisfall liefert 10. Auf dem Rückweg wird diese 10 viermal unverändert weitergereicht. Die
Ausgabe ist `10`. Die Berechnung erfolgt hier am **Aufrufpfad**.
:::

:::merke[Eine lineare Rekursion endrekursiv machen]
1. Einen **Sammelparameter** für das bisherige Ergebnis ergänzen.
2. Den **Startwert** so wählen, dass er nichts verändert: 0 beim Addieren, 1 beim Multiplizieren, `""` beim Verketten.
3. Im **Basisfall** den Sammelparameter zurückgeben.
4. Im rekursiven Fall den eigenen Beitrag **in das Argument** einrechnen: `return f(kleiner, bisher + beitrag);`.
:::

Eine Einschränkung ist für die Prüfung wichtig. In Blatt 3 und im Programmiertest darfst du den Methodenkopf nicht
ändern und keine Hilfsmethoden schreiben. Einen Sammelparameter kannst du dort also nur verwenden, wenn der Kopf ihn
schon vorgibt. Solche Köpfe kennst du aus
[10.5 Zusätzliche Parameter](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string).

```aufgabe
id: rv-er-gefuehrt
titel: Die Fakultät auf dem Hinweg
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int fak(int n, int bisher) {
      if (n == 0) {
          return bisher;
      }
      return fak(n - 1, bisher * n);
  }
  ```

  `main` ruft `fak(4, 1)` auf. Welchen Wert liefert dieser Aufruf? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "4*3*2*1"
    fehler:
      - wert: "0"
        meldung: Der Startwert ist 1, nicht 0. Mit 1 multipliziert ändert sich nichts, mit 0 würde alles 0.
      - wert: "4"
        meldung: Du hast nur den ersten Schritt gerechnet. Der Sammelparameter wird in **jedem** Aufruf mit dem aktuellen `n` multipliziert.
gefuehrt:
  - text: Welchen Wert hat `bisher` im zweiten Aufruf, also bei `n = 3`?
    teil: { typ: zahl, loesung: "1*4" }
    erklaerung: Der erste Aufruf übergibt `bisher * n = 1 * 4 = 4`.
  - text: Welchen Wert hat `bisher` bei `n = 2`?
    teil: { typ: zahl, loesung: "4*3" }
    erklaerung: '`4 * 3 = 12`. Der Sammelparameter wächst auf dem Hinweg.'
  - text: Welchen Wert hat `bisher` bei `n = 0`, also im Basisfall?
    teil: { typ: zahl, loesung: "12*2*1" }
    erklaerung: Bei `n = 1` wird `12 * 2 = 24` übergeben, bei `n = 0` dann `24 * 1 = 24`.
  - text: Was passiert auf dem Rückweg mit diesem Wert?
    teil:
      typ: auswahl
      optionen: ['Er wird unverändert durchgereicht.', 'Jeder Aufruf multipliziert ihn noch einmal mit seinem `n`.']
      richtig: [0]
    erklaerung: Die Methode ist endrekursiv. Nach dem Selbstaufruf passiert nichts mehr, das Ergebnis wandert unverändert nach oben.
hinweise:
  - Verfolge das Paar `(n, bisher)` von Aufruf zu Aufruf.
loesung: |
  **Ansatz:** Bei einer endrekursiven Methode genügt es, die Argumente auf dem Hinweg zu verfolgen. Der Basisfall liefert das Endergebnis.
  ---
  Paare: (4, 1), (3, 4), (2, 12), (1, 24), (0, 24). Der Basisfall liefert 24. Probe: `4 · 3 · 2 · 1 = 24`.
```

:::achtung[Den Sammelparameter falsch gestartet]
Mit der Methode `fak` aus der geführten Aufgabe schreibt jemand in `main`:

```java
System.out.println(fak(4, 0));    // falsch: liefert 0
```

Die Argumentpaare sind (4, 0), (3, 0), (2, 0), (1, 0) und (0, 0). Jede Multiplikation mit 0 ergibt 0, das Ergebnis
ist 0 statt 24. Der Startwert muss das **neutrale Element** der Rechnung sein. Das ist der Wert, der nichts verändert:
1 beim Multiplizieren, 0 beim Addieren und der leere String `""` beim Verketten. Richtig ist `fak(4, 1)`.
:::

Endrekursive Methoden haben einen praktischen Vorteil. Man kann sie fast mechanisch in eine Schleife umbauen. Die
Parameter werden zu Variablen, die Bedingung des rekursiven Falls wird zur Schleifenbedingung, und der Selbstaufruf wird
zu Zuweisungen. Beim ggT durch Abziehen sieht das so aus:

```java
public static int ggtSchleife(int a, int b) {
    while (a != b) {          // solange der Basisfall a == b nicht erreicht ist
        if (a > b) {
            a = a - b;        // statt ggt(a - b, b)
        } else {
            b = b - a;        // statt ggt(a, b - a)
        }
    }
    return a;                 // das Ergebnis des Basisfalls
}
```

Manche Compiler anderer Sprachen machen diesen Umbau selbst. Java macht ihn nicht. Auch eine endrekursive Methode legt
in Java für jeden Aufruf einen Rahmen auf den Aufrufstapel. Bei sehr vielen Aufrufen droht deshalb trotzdem ein
`StackOverflowError`.

```aufgabe
id: rv-er-trace-ziffern
titel: Quersumme mit Sammelparameter
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int qs(int n, int bisher) {
      if (n == 0) {
          return bisher;
      }
      return qs(n / 10, bisher + n % 10);
  }
  ```

  `main` ruft `qs(4093, 0)` auf. Trage für jeden Aufruf die Werte von `n` und `bisher` ein. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [n, bisher]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf, 5. Aufruf]
    vorgabe: 1
    loesung: [[4093, 0], [409, 3], [40, 12], [4, 12], [0, 16]]
    fehler:
      - wert: ["4093", "0", "409", "4", "40", "4", "4", "13", "0", "16"]
        meldung: '`n % 10` ist die **letzte** Ziffer. Von 4093 wird zuerst die 3 abgespalten, nicht die 4.'
      - wert: ["4093", "0", "409.3", "3", "40.9", "12", "4", "12", "0", "16"]
        meldung: '`n / 10` ist eine Ganzzahldivision zweier `int`-Werte. `4093 / 10` ist 409, der Nachkommaanteil fällt weg.'
hinweise:
  - '`n % 10` ist die letzte Ziffer, `n / 10` die Zahl ohne sie. Die letzte Ziffer kommt zu `bisher` dazu.'
loesung: |
  **Ansatz:** Auf dem Hinweg wandert jede letzte Ziffer in den Sammelparameter.
  ---
  (4093, 0), dann (409, 0 + 3), dann (40, 3 + 9), dann (4, 12 + 0), dann (0, 12 + 4). Der Basisfall liefert 16. Probe: `4 + 0 + 9 + 3 = 16`.
```

```aufgabe
id: rv-er-ausgabe-ggt
titel: Der ggT mit Rest
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Diese Fassung des ggT verwendet den Rest statt der Differenz. Sie ist ebenfalls endrekursiv. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Euklid {
          public static int ggt(int n, int m) {
              System.out.println(n + " " + m);
              if (n % m == 0) {
                  return m;
              }
              return ggt(m, n % m);
          }

          public static void main(String[] args) {
              System.out.println(ggt(35, 64));
          }
      }
    loesung: |
      35 64
      64 35
      35 29
      29 6
      6 5
      5 1
      1
    fehler:
      - wert: "35 64\n64"
        meldung: '`35 % 64` ist nicht 0. 64 passt null Mal in 35, der Rest ist also 35 selbst.'
      - wert: "35 64\n64 35\n35 29\n29 6\n6 5\n5 1\n1 0\n1"
        meldung: 'Bei (5, 1) ist `5 % 1 == 0`. Der Basisfall greift und liefert 1, es gibt keinen Aufruf mit 0.'
hinweise:
  - '`n % m` ist der Rest bei der Division von `n` durch `m`. Ist `n` kleiner als `m`, ist der Rest `n` selbst.'
loesung: |
  **Ansatz:** Paare verfolgen. Jeder Aufruf gibt sein Paar aus. Ist `n % m == 0`, liefert er `m`.
  ---
  `35 % 64 = 35`, also (64, 35). Dann `64 % 35 = 29`, `35 % 29 = 6`, `29 % 6 = 5` und `6 % 5 = 1`. Bei (5, 1) ist der Rest 0, Ergebnis 1. `main` gibt zum Schluss 1 aus.
```

```aufgabe
id: rv-er-ausgabe-zwei-wege
titel: Rechnen auf dem Rückweg und auf dem Hinweg
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: Was gibt das Programm aus? Beide Methoden berechnen dieselbe Summe, aber auf verschiedenen Wegen.
teile:
  - typ: ausgabe
    code: |
      public class ZweiWege {
          public static int rueck(int n) {
              if (n == 0) {
                  System.out.println("Basis 0");
                  return 0;
              }
              int r = n + rueck(n - 1);
              System.out.println("zurueck " + r);
              return r;
          }

          public static int hin(int n, int bisher) {
              System.out.println("hin " + bisher);
              if (n == 0) {
                  return bisher;
              }
              return hin(n - 1, bisher + n);
          }

          public static void main(String[] args) {
              System.out.println(rueck(3));
              System.out.println(hin(3, 0));
          }
      }
    loesung: |
      Basis 0
      zurueck 1
      zurueck 3
      zurueck 6
      6
      hin 0
      hin 3
      hin 5
      hin 6
      6
    fehler:
      - wert: "Basis 0\nzurueck 6\nzurueck 3\nzurueck 1\n6\nhin 0\nhin 3\nhin 5\nhin 6\n6"
        meldung: Die `zurueck`-Zeilen stehen hinter dem Selbstaufruf. Zuerst wird der innerste Aufruf mit `n = 1` fertig, und dort ist `r = 1 + 0 = 1`.
      - wert: "Basis 0\nzurueck 1\nzurueck 3\nzurueck 6\n6\nhin 0\nhin 1\nhin 3\nhin 6\n6"
        meldung: '`hin(3, 0)` übergibt `bisher + n = 0 + 3`. Die Zahlen werden von 3 abwärts addiert: erst 3, dann 2, dann 1.'
hinweise:
  - Bei `rueck` stehen die Ausgaben auf dem Rückweg. Bei `hin` steht die Ausgabe ganz am Anfang jedes Aufrufs.
  - Verfolge bei `hin` das Paar `(n, bisher)`. Es beginnt bei (3, 0).
loesung: |
  **Ansatz:** `rueck` rechnet am return-Pfad, `hin` am Aufrufpfad. Die Ausgaben zeigen genau das.
  ---
  `rueck(3)`: Hinweg ohne Ausgabe bis `Basis 0`. Rückweg: `r` ist 1, dann 3, dann 6. Danach druckt `main` die 6.
  ---
  `hin(3, 0)`: Paare (3, 0), (2, 3), (1, 5), (0, 6). Jeder Aufruf gibt zuerst sein `bisher` aus. Der Basisfall liefert 6, und `main` druckt 6.
```

```aufgabe
id: rv-er-lueckentext-potenz
titel: Eine Potenz mit Sammelparameter
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  `potenz(b, e, bisher)` soll `b` hoch `e` **endrekursiv** berechnen. Der Startaufruf für `3` hoch `4` lautet
  `potenz(3, 4, 1)`. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Hoch {
          public static long potenz(long b, int e, long bisher) {
              if (e == 0) {
                  return ___;
              }
              return potenz(b, ___, ___);
          }

          public static void main(String[] args) {
              System.out.println(potenz(3, 4, 1));
          }
      }
    luecken: [["bisher"], ["e - 1", "e-1"], ["bisher * b", "bisher*b", "b * bisher", "b*bisher"]]
    fehler:
      - wert: ["1", "e - 1", "bisher * b"]
        meldung: Im Basisfall steckt das ganze Ergebnis schon im Sammelparameter. Mit `return 1;` ginge alles Gesammelte verloren.
      - wert: ["bisher", "e - 1", "bisher * e"]
        meldung: Multipliziert wird mit der Basis `b`, nicht mit dem Exponenten. `e` zählt nur, wie oft noch multipliziert werden muss.
hinweise:
  - Der Exponent zählt, wie viele Faktoren noch fehlen. Er wird bei jedem Aufruf kleiner.
  - Jeder Aufruf multipliziert den Sammelparameter einmal mit der Basis. Der Basisfall gibt den Sammelparameter zurück.
loesung: |
  **Ansatz:** Rezept für Endrekursion. Basisfall gibt den Sammelparameter zurück, der Beitrag wird ins Argument eingerechnet.
  ---
  Lücken: `bisher`, `e - 1` und `bisher * b`.
  ---
  Probe mit `potenz(3, 4, 1)`: (4, 1), (3, 3), (2, 9), (1, 27), (0, 81). Ergebnis 81, und `3 · 3 · 3 · 3 = 81`.
```

```aufgabe
id: rv-er-lueckentext-schleife
titel: Aus der Endrekursion eine Schleife machen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Die endrekursive Methode

  ```java
  public static int ggt(int n, int m) {
      if (n % m == 0) {
          return m;
      }
      return ggt(m, n % m);
  }
  ```

  soll als Schleife geschrieben werden. Fülle die Lücken so, dass `ggtSchleife` für alle `n > 0`, `m > 0` dasselbe liefert.
teile:
  - typ: lueckentext
    code: |
      public class Umbau {
          public static int ggtSchleife(int n, int m) {
              while (___) {
                  int rest = n % m;
                  n = ___;
                  m = ___;
              }
              return m;
          }

          public static void main(String[] args) {
              System.out.println(ggtSchleife(90, 24));
          }
      }
    luecken: [["n % m != 0", "n%m!=0", "n % m > 0", "n%m>0"], ["m"], ["rest"]]
    fehler:
      - wert: ["n % m == 0", "m", "rest"]
        meldung: Die Schleife soll weiterlaufen, solange der Basisfall **nicht** erreicht ist. Die Bedingung des Basisfalls muss also umgekehrt werden.
      - wert: ["n % m != 0", "rest", "m"]
        meldung: Der Selbstaufruf lautet `ggt(m, n % m)`. Der neue erste Parameter ist das alte `m`, der neue zweite der Rest.
hinweise:
  - Die Schleife läuft, solange der rekursive Fall gilt. Das ist das Gegenteil der Basisfall-Bedingung.
  - Im Selbstaufruf bekommt `n` den alten Wert von `m` und `m` den Rest. Deshalb wird der Rest vorher in `rest` gespeichert.
loesung: |
  **Ansatz:** Parameter werden zu Variablen, der Selbstaufruf wird zu Zuweisungen, der Basisfall zum Schleifenende.
  ---
  Bedingung: `n % m != 0`. Zuweisungen in der Reihenfolge des Selbstaufrufs: `n = m;` und `m = rest;`.
  ---
  Ohne die Hilfsvariable `rest` wäre nach `n = m` der alte Wert von `n` verloren. Probe: `ggtSchleife(90, 24)` läuft über (90, 24), (24, 18) und (18, 6) und liefert 6.
```

```aufgabe
id: rv-er-rf-aussagen
titel: Vier Aussagen zu einer Methode mit Index
niveau: 2
lernziel: 1
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Aussagen zu einer rekursiven Methode), Inhalt neu
angabe: |
  Gegeben ist

  ```java
  public static int z(String s, int i, int bisher) {
      if (i >= s.length()) {
          return bisher;
      }
      if (s.charAt(i) == 'x') {
          return z(s, i + 1, bisher + 1);
      }
      return z(s, i + 1, bisher);
  }
  ```

  Beurteile jede Aussage. Vorbedingung: `s != null`, `i >= 0`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Methode ist endrekursiv.
        richtig: true
        erklaerung: Beide Selbstaufrufe stehen direkt hinter `return`. Danach passiert nichts mehr.
      - text: Die Methode ist linear rekursiv.
        richtig: true
        erklaerung: Jeder Durchlauf nimmt genau einen der beiden Zweige und führt damit höchstens einen Selbstaufruf aus.
      - text: Die Methode hat zwei Basisfälle.
        richtig: false
        erklaerung: Es gibt nur einen Basisfall, `i >= s.length()`. Die anderen beiden Zweige rufen sich selbst auf.
      - text: Der Rückgabewert wird am return-Pfad berechnet.
        richtig: false
        erklaerung: Die Zählung passiert im Argument `bisher + 1`, also auf dem Hinweg. Am return-Pfad wird nur weitergereicht.
    fehler:
      - wert: [r, r, r, f]
        meldung: Ein Basisfall ist ein Fall **ohne** Selbstaufruf. Wie viele Zweige enden ohne Aufruf von `z`?
      - wert: [r, r, f, r]
        meldung: Wo wird `+ 1` gerechnet? Im Argument des Selbstaufrufs, also bevor er startet.
hinweise:
  - Prüfe für jeden Zweig, ob er einen Selbstaufruf enthält und ob danach noch etwas passiert.
  - Suche die Stelle, an der gezählt wird. Steht sie vor oder nach dem Selbstaufruf?
loesung: |
  **Ansatz:** Zweige einzeln untersuchen: Selbstaufruf ja oder nein, und passiert danach noch etwas?
  ---
  Ein Zweig ohne Selbstaufruf, also ein Basisfall. Zwei Zweige mit je einem Selbstaufruf direkt hinter `return`. Die Methode ist linear und endrekursiv.
  ---
  Gezählt wird im Argument `bisher + 1`, also am Aufrufpfad. Aussagen 1 und 2 sind richtig, 3 und 4 falsch.
```

```aufgabe
id: rv-er-code-umkehren
titel: Einen String endrekursiv umdrehen
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Implementiere `String umkehren(String rest, String bisher)` **endrekursiv** und ohne Schleifen. Die Methode hängt die
  Zeichen von `rest` in umgekehrter Reihenfolge vor `bisher` und liefert das Ergebnis. Der Startaufruf zum Umdrehen eines
  Strings `s` ist `umkehren(s, "")`. Vorbedingung: `rest != null`, `bisher != null`.

  Beispiele: `umkehren("abc", "")` liefert `"cba"`, `umkehren("", "xy")` liefert `"xy"` und `umkehren("ab", "Z")` liefert `"baZ"`.
teile:
  - typ: code
    vorlage: |
      public class Umkehren {
          public static String umkehren(String rest, String bisher) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Umkehren {
          public static String umkehren(String rest, String bisher) {
              if (rest.isEmpty()) {
                  return bisher;
              }
              return umkehren(rest.substring(1), rest.charAt(0) + bisher);
          }
      }
    tests:
      - { aufruf: "umkehren(\"abc\", \"\")", erwartet: "\"cba\"" }
      - { aufruf: "umkehren(\"\", \"xy\")", erwartet: "\"xy\"", beschreibung: "rest ist leer" }
      - { aufruf: "umkehren(\"ab\", \"Z\")", erwartet: "\"baZ\"" }
      - { aufruf: "umkehren(\"Rekursion\", \"\")", erwartet: "\"noisrukeR\"", versteckt: true }
      - { aufruf: "umkehren(\"1\", \"23\")", erwartet: "\"123\"", versteckt: true }
    regeln: { keineSchleifenIn: [umkehren], rekursiv: [umkehren], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Kommt bei dir `\"abc\"` heraus? Dann hängst du das Zeichen hinten an `bisher`. Für die Umkehrung muss jedes neue Zeichen **vor** das bisher Gesammelte." }
      - { wert: 2, meldung: "Ist `rest` leer, steckt das ganze Ergebnis schon in `bisher`. Gib im Basisfall `bisher` zurück, nicht den leeren String." }
hinweise:
  - Der Basisfall ist ein leerer `rest`. Dann ist `bisher` schon fertig.
  - Nimm das erste Zeichen von `rest` und setze es **vor** `bisher`. Der Selbstaufruf bekommt den Rest ab Index 1.
loesung: |
  **Ansatz:** Rezept für Endrekursion. `bisher` ist der Sammelparameter, `rest` wird mit jedem Aufruf um ein Zeichen kürzer.
  ---
  Basisfall: `rest` ist leer, Ergebnis `bisher`. Rekursiver Fall: Das erste Zeichen wandert vor `bisher`.
  ---
  ```java
  if (rest.isEmpty()) {
      return bisher;
  }
  return umkehren(rest.substring(1), rest.charAt(0) + bisher);
  ```
  ---
  `rest.charAt(0) + bisher` ist eine Verkettung, weil `bisher` ein String ist. Probe `("abc", "")`: ("bc", "a"), ("c", "ba"), ("", "cba"). Ergebnis `"cba"`.
```

```reflexion
frage: Warum muss eine endrekursive Methode auf dem Rückweg nichts mehr tun, und warum ist das in Java trotzdem kein Schutz vor einem StackOverflowError?
antwort: |
  Bei einer endrekursiven Methode ist der Selbstaufruf die letzte Aktion. Alles, was ein Aufruf beitragen will, steckt
  schon im Argument, meist im Sammelparameter. Der Basisfall hat deshalb das fertige Ergebnis, und alle wartenden
  Aufrufe reichen es nur noch weiter. Trotzdem legt Java für jeden Aufruf einen Rahmen auf den Aufrufstapel und räumt ihn
  erst auf dem Rückweg ab. Die Zahl der gleichzeitig offenen Rahmen ist also genauso groß wie ohne Sammelparameter. Bei
  sehr vielen Aufrufen läuft der Stapel deshalb auch hier über.
```

## Der Aufrufbaum: Reihenfolge bei zwei Selbstaufrufen

```aufgabe
id: rv-ab-check-links-rechts
titel: Welcher Operand zuerst?
niveau: 1
art: check
angabe: |
  In [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return) hast du Methoden in Ausdrücken
  aufgerufen. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Zuerst {
          public static int links() {
              System.out.println("links");
              return 1;
          }

          public static int rechts() {
              System.out.println("rechts");
              return 2;
          }

          public static void main(String[] args) {
              System.out.println(links() + rechts());
          }
      }
    loesung: |
      links
      rechts
      3
    fehler:
      - wert: "3\nlinks\nrechts"
        meldung: Bevor `println` etwas ausgeben kann, muss der Ausdruck `links() + rechts()` ganz ausgerechnet sein. Dabei laufen beide Methoden mit ihren Ausgaben.
      - wert: "rechts\nlinks\n3"
        meldung: Java wertet die Operanden von `+` von links nach rechts aus. `links()` läuft zuerst.
loesung: |
  Java rechnet `links() + rechts()` von links nach rechts. Zuerst läuft `links()` mit der Ausgabe `links` und liefert 1.
  ---
  Dann läuft `rechts()` mit `rechts` und liefert 2. Erst danach gibt `println` die Summe 3 aus.
```

Diese Regel ist der Schlüssel zu diesem Abschnitt. Steht in einer Methode `f(n - 1) + f(n - 2)`, dann läuft zuerst der
linke Aufruf **vollständig** ab, mit allem, was er selbst wieder aufruft. Erst danach beginnt der rechte Aufruf.

Wir nehmen ein Beispiel aus dem Alltag. Du steigst eine Treppe mit `n` Stufen hinauf. Mit jedem Schritt nimmst du
entweder eine oder zwei Stufen. Auf wie viele Arten kommst du oben an? Eine Treppe mit 3 Stufen schaffst du auf 3 Arten:
1 + 1 + 1, 1 + 2 und 2 + 1.

Die rekursive Idee: Dein **erster** Schritt ist entweder eine Stufe oder zwei Stufen. Nach einer Stufe bleiben `n - 1`
Stufen übrig, nach zwei Stufen `n - 2`. Die Anzahl der Wege ist also die Summe der Wege für `n - 1` und für `n - 2`.
Bei 0 oder 1 Stufen gibt es genau einen Weg.

:::beispiel[Der Aufrufbaum von wege(4)]
```java
public class Treppe {
    public static int wege(int n) {
        if (n <= 1) {
            return 1;
        }
        return wege(n - 1) + wege(n - 2);
    }

    public static void main(String[] args) {
        System.out.println(wege(4));
    }
}
```

Jeder Aufruf ist ein **Knoten** im Bild. Unter jedem Knoten stehen die Aufrufe, die er selbst ausführt, links der erste
und rechts der zweite. Ganz oben steht der Aufruf aus `main`.

```
                     wege(4)
                 /            \
            wege(3)            wege(2)
           /       \          /       \
      wege(2)    wege(1)  wege(1)   wege(0)
      /     \
  wege(1)  wege(0)
```

So liest du den Baum:

1. **Werte:** Die Knoten ganz unten ohne eigene Aufrufe sind Basisfälle. Jeder liefert 1. Ein innerer Knoten addiert
   die Werte seiner beiden Kinder. Es gilt `wege(2) = 1 + 1 = 2` und `wege(3) = 2 + 1 = 3`. Damit ist
   `wege(4) = 3 + 2 = 5`. Die Ausgabe ist `5`.
2. **Anzahl der Aufrufe:** Jeder Knoten ist ein Aufruf. Es sind 9 Knoten, also 9 Aufrufe.
3. **Reihenfolge, in der die Aufrufe starten:** Java geht immer zuerst ganz nach links unten, bevor es rechts
   weitermacht. Die Aufrufe starten mit den Argumenten 4, 3, 2, 1, 0, 1, 2, 1, 0.
4. **Tiefe:** Der längste Weg von oben nach unten ist `wege(4)`, `wege(3)`, `wege(2)`, `wege(1)`. In diesem Moment
   liegen 4 Rahmen von `wege` auf dem Stapel. Die Rekursionstiefe ist 4.
:::

:::definition[Aufrufbaum, Blatt, Rekursionstiefe]
Der **Aufrufbaum** einer Rekursion zeigt jeden Aufruf als Knoten. Unter einem Knoten stehen die Selbstaufrufe, die er
ausführt, von links nach rechts in der Reihenfolge, in der sie im Code passieren. Ganz oben steht der erste Aufruf, die
**Wurzel**. Knoten ohne eigene Aufrufe heißen **Blätter**. Das sind die Basisfälle. Ein Knoten zusammen mit allem,
was unter ihm hängt, heißt **Teilbaum**. Der linke Teilbaum von `wege(4)` besteht zum Beispiel aus `wege(3)` und
allen Aufrufen darunter.

Die **Rekursionstiefe** ist die Zahl der Knoten auf dem längsten Weg von der Wurzel zu einem Blatt. So viele Rahmen
liegen höchstens gleichzeitig auf dem Aufrufstapel.
:::

**Beispiel:** Bei `wege(4)` ist die Wurzel `wege(4)`. Es gibt 5 Blätter, nämlich drei Aufrufe mit 1 und zwei mit 0.

**Kein Beispiel:** Der Aufrufbaum ist **keine** Momentaufnahme des Stapels. Während `wege(0)` ganz rechts läuft, ist der
linke Teilbaum unter `wege(3)` längst fertig und vom Stapel entfernt. Auf dem Stapel liegen dann nur `wege(4)`,
`wege(2)` und `wege(0)`.

```aufgabe
id: rv-ab-zahl-tiefe
titel: Wie tief wird es?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  `wege(6)` ruft `wege` insgesamt 25-mal auf (mit `wege` aus dem Beispiel dieses Abschnitts). Wie groß ist die
  **Rekursionstiefe**, also die größte Zahl von Rahmen von `wege`, die gleichzeitig auf dem Stapel liegen?
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "25"
        meldung: 25 ist die Zahl **aller** Aufrufe. Gleichzeitig liegt immer nur ein Weg von der Wurzel nach unten auf dem Stapel.
      - wert: "7"
        meldung: Der längste Weg endet bei `wege(1)`, das ist schon ein Basisfall. Ein Aufruf mit 0 hängt nur unter `wege(2)`, und dieser Weg ist kürzer.
hinweise:
  - Folge immer dem linken Kind mit `n - 1`. Das ist der längste Weg nach unten.
loesung: |
  **Ansatz:** Der längste Weg von der Wurzel zu einem Blatt bestimmt die Tiefe.
  ---
  Links immer `n - 1`: `wege(6)`, `wege(5)`, `wege(4)`, `wege(3)`, `wege(2)`, `wege(1)`. Das sind 6 Rahmen gleichzeitig.
```

:::merke[Einen Aufrufbaum durchlaufen]
1. Beginne bei der Wurzel. Gehe immer zuerst in das **linke** Kind und von dort wieder ganz nach links.
2. Erst wenn ein Knoten mit seinem linken Kind ganz fertig ist, kommt sein rechtes Kind an die Reihe.
3. Ein Knoten ist fertig, wenn alle seine Kinder fertig sind. Dann wandert sein Wert eine Ebene nach oben.
4. Man nennt diese Reihenfolge **Tiefe zuerst**: erst ganz hinunter, dann zur Seite.
:::

:::achtung[Den Baum Ebene für Ebene gelesen]
Eine typische falsche Antwort auf „In welcher Reihenfolge starten die Aufrufe von `wege(4)`?“ ist

```
4, 3, 2, 2, 1, 1, 0, 1, 0       // falsch: Ebene für Ebene
```

Hier wurde der Baum zeilenweise von oben nach unten gelesen, wie ein Text. Java arbeitet aber nicht Ebene für Ebene.
Der Aufruf `wege(3)` muss ganz fertig sein, bevor `wege(2)` auf der zweiten Ebene überhaupt startet. Richtig ist
`4, 3, 2, 1, 0, 1, 2, 1, 0`: erst der ganze linke Teilbaum unter `wege(3)`, dann der rechte unter `wege(2)`.
:::

```aufgabe
id: rv-ab-gefuehrt
titel: Einen Aufrufbaum Schritt für Schritt auswerten
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int g(int n) {
      if (n <= 2) {
          return n;
      }
      return g(n - 1) + g(n - 3);
  }
  ```

  Welchen Wert liefert `g(5)`? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: Das ist `g(4)`, also nur das linke Kind. Dazu kommt noch der Wert des rechten Kinds `g(2)`.
      - wert: "4"
        meldung: Im Basisfall wird `n` zurückgegeben, nicht 1. `g(2)` liefert 2, `g(1)` liefert 1 und `g(0)` liefert 0.
gefuehrt:
  - text: Welche beiden Aufrufe führt `g(5)` selbst aus?
    teil:
      typ: auswahl
      optionen: ['`g(4)` und `g(2)`', '`g(4)` und `g(3)`', '`g(2)` und `g(1)`']
      richtig: [0]
    erklaerung: '`n - 1 = 4` und `n - 3 = 2`. Links steht `g(4)`, rechts `g(2)`.'
  - text: Welchen Wert liefert `g(3)`?
    teil: { typ: zahl, loesung: "2 + 0" }
    erklaerung: '`g(3)` ruft `g(2)` und `g(0)` auf. Beide sind Basisfälle mit den Werten 2 und 0.'
  - text: Welchen Wert liefert `g(4)`?
    teil: { typ: zahl, loesung: "2 + 1" }
    erklaerung: '`g(4)` ruft `g(3)` und `g(1)` auf. Das ergibt `2 + 1 = 3`.'
  - text: Welchen Wert liefert also `g(5)`?
    teil: { typ: zahl, loesung: "3 + 2" }
    erklaerung: '`g(5) = g(4) + g(2) = 3 + 2 = 5`.'
hinweise:
  - Zeichne den Baum und rechne von den Blättern nach oben. Im Basisfall wird `n` selbst zurückgegeben.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen, Blätter mit ihrem Wert beschriften, dann von unten nach oben addieren.
  ---
  `g(3) = g(2) + g(0) = 2`, `g(4) = g(3) + g(1) = 3`, `g(5) = g(4) + g(2) = 3 + 2 = 5`.
```

Bisher haben die Methoden nur gerechnet. Jetzt geben sie etwas aus. Bei einem Selbstaufruf gab es zwei Stellen für eine
Ausgabe: davor und danach. Bei zwei Selbstaufrufen gibt es **drei** Stellen: vor dem ersten Aufruf, zwischen den beiden
Aufrufen und nach dem zweiten.

:::beispiel[Ausgaben vor, zwischen und nach zwei Selbstaufrufen]
```java
public class Drei {
    public static void p(int n) {
        if (n == 0) {
            return;
        }
        System.out.print("v" + n + " ");   // vor
        p(n - 1);
        System.out.print("m" + n + " ");   // zwischen (Mitte)
        p(n - 1);
        System.out.print("n" + n + " ");   // nach
    }

    public static void main(String[] args) {
        p(2);
        System.out.println();
    }
}
```

`return;` beendet eine `void`-Methode sofort. `p(0)` gibt also nichts aus. Der Aufrufbaum von `p(2)` sieht so aus:

```
            p(2)
          /      \
       p(1)       p(1)
      /    \     /    \
   p(0)  p(0)  p(0)  p(0)
```

Wir gehen ihn Tiefe zuerst durch und notieren jede Ausgabe in dem Moment, in dem sie passiert:

1. `p(2)` beginnt: `v2`. Dann startet das linke Kind `p(1)`.
2. Das linke `p(1)` beginnt: `v1`. Sein linkes Kind `p(0)` gibt nichts aus. Dann `m1`. Sein rechtes Kind `p(0)` gibt
   nichts aus. Dann `n1`. Das linke `p(1)` ist fertig.
3. Zurück in `p(2)` zwischen den Aufrufen: `m2`. Dann startet das rechte Kind `p(1)`.
4. Das rechte `p(1)` macht dasselbe wie das linke: `v1`, `m1`, `n1`.
5. Zurück in `p(2)` nach dem zweiten Aufruf: `n2`.

Die Ausgabe ist `v2 v1 m1 n1 m2 v1 m1 n1 n2`.
:::

:::merke[Wann erscheint welche Ausgabe?]
1. Eine Ausgabe **vor** dem ersten Selbstaufruf erscheint, wenn der Knoten **betreten** wird. Die Wurzel kommt damit
   zuerst.
2. Eine Ausgabe **zwischen** den Selbstaufrufen erscheint, wenn der **linke** Teilbaum ganz fertig ist.
3. Eine Ausgabe **nach** dem zweiten Selbstaufruf erscheint, wenn **beide** Teilbäume fertig sind. Die Wurzel kommt
   damit zuletzt.
:::

:::achtung[Rekursionstiefe mit der Anzahl der Aufrufe verwechselt]
Eine Quizfrage kann etwa lauten: „Wie viele Rahmen von `wege` liegen beim Aufruf `wege(5)` höchstens gleichzeitig auf dem Stapel?“

Eine typische falsche Antwort ist 15. Das ist die Anzahl **aller** Aufrufe von `wege(5)`.

Gleichzeitig auf dem Stapel liegt aber immer nur **ein Weg** von der Wurzel nach unten. Die anderen Teilbäume sind
entweder noch nicht begonnen oder schon fertig. Der längste Weg ist `wege(5)`, `wege(4)`, `wege(3)`, `wege(2)`,
`wege(1)`. Die richtige Antwort ist also 5. Bei linearer Rekursion sind Tiefe und Anzahl gleich, bei verzweigter fast
nie.
:::

```aufgabe
id: rv-ab-reihenfolge-start
titel: In welcher Reihenfolge starten die Aufrufe?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int k(int n) {
      if (n <= 1) {
          return n;
      }
      return k(n - 1) + k(n - 2);
  }
  ```

  Bringe die Aufrufe von `k(3)` in die Reihenfolge, in der sie **starten**. Zwei Aufrufe haben dasselbe Argument. In
  Klammern steht, welcher Aufruf sie ausführt.
teile:
  - typ: reihenfolge
    elemente: ["`k(3)`", "`k(2)`", "`k(1)` aus `k(2)`", "`k(0)` aus `k(2)`", "`k(1)` aus `k(3)`"]
    fehler:
      - wert: [0, 1, 4, 2, 3]
        meldung: Das ist Ebene für Ebene gelesen. `k(2)` muss mit seinen beiden Kindern ganz fertig sein, bevor `k(3)` sein rechtes Kind `k(1)` aufruft.
      - wert: [0, 4, 1, 2, 3]
        meldung: '`k(3)` ruft zuerst den linken Teil `k(n - 1)` auf, also `k(2)`. Der rechte Teil `k(n - 2)` kommt danach.'
hinweise:
  - Zeichne den Baum. Gehe Tiefe zuerst durch, also immer erst ganz nach links unten.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen und Tiefe zuerst durchlaufen, links vor rechts.
  ---
  `k(3)` startet `k(2)`. `k(2)` startet `k(1)` und danach `k(0)`. Erst dann ist `k(2)` fertig, und `k(3)` startet sein rechtes Kind `k(1)`.
```

```aufgabe
id: rv-ab-zahl-wert
titel: Den Wert aus dem Baum
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int t(int n) {
      if (n < 2) {
          return 1;
      }
      return t(n - 1) + 2 * t(n - 2);
  }
  ```

  Welchen Wert liefert `t(4)`?
teile:
  - typ: zahl
    loesung: "11"
    fehler:
      - wert: "5"
        meldung: Du hast wie bei `wege` gerechnet. Hier wird der Wert des rechten Kinds aber **verdoppelt**, bevor er addiert wird.
      - wert: "7"
        meldung: Auch in `t(3)` und `t(2)` wird der rechte Teil verdoppelt. Rechne von unten nach oben, Ebene für Ebene.
hinweise:
  - Rechne von unten. `t(0)` und `t(1)` liefern 1. Dann `t(2) = t(1) + 2 · t(0)`.
loesung: |
  **Ansatz:** Werte von den Basisfällen aufwärts berechnen. Jeder Wert braucht die beiden darunter.
  ---
  `t(2) = 1 + 2 · 1 = 3`, `t(3) = 3 + 2 · 1 = 5`, `t(4) = 5 + 2 · 3 = 11`.
```

```aufgabe
id: rv-ab-ausgabe-lineal
titel: Ausgabe zwischen den Aufrufen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Lineal {
          public static void lineal(int n) {
              if (n == 0) {
                  return;
              }
              lineal(n - 1);
              System.out.print(n);
              lineal(n - 1);
          }

          public static void main(String[] args) {
              lineal(3);
              System.out.println();
          }
      }
    loesung: |
      1213121
    fehler:
      - wert: "123"
        meldung: Das wäre richtig, wenn es nur den ersten Selbstaufruf gäbe. Nach der Ausgabe folgt aber noch ein zweiter Teilbaum mit eigenen Ausgaben.
      - wert: "1213"
        meldung: Nach der 3 läuft noch der rechte Teilbaum `lineal(2)`. Er gibt dieselben Zeichen aus wie der linke.
hinweise:
  - Die Ausgabe steht zwischen den beiden Aufrufen. Ein Knoten gibt seine Zahl aus, wenn sein linker Teilbaum fertig ist.
  - Bestimme zuerst die Ausgabe von `lineal(1)` und `lineal(2)`. `lineal(3)` setzt sich daraus zusammen.
loesung: |
  **Ansatz:** Von klein nach groß. Jeder Aufruf gibt aus: linken Teilbaum, eigene Zahl, rechten Teilbaum.
  ---
  `lineal(1)`: nichts, `1`, nichts, also `1`. `lineal(2)`: `1`, `2`, `1`, also `121`.
  ---
  `lineal(3)`: `121`, `3`, `121`, also `1213121`. Die Zahlen sehen aus wie die Striche eines Lineals: der größte in der Mitte.
```

```aufgabe
id: rv-ab-ausgabe-nach
titel: Ausgabe nach beiden Aufrufen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Danach {
          public static void s(int n) {
              if (n <= 0) {
                  System.out.print(".");
                  return;
              }
              s(n - 1);
              s(n - 2);
              System.out.print(n);
          }

          public static void main(String[] args) {
              s(3);
              System.out.println();
          }
      }
    loesung: |
      ..1.2..13
    fehler:
      - wert: "3..1.2..1"
        meldung: Die Zahl steht **nach** beiden Selbstaufrufen. Die 3 erscheint daher erst ganz am Ende, wenn beide Teilbäume fertig sind.
      - wert: "..1..2..13"
        meldung: '`s(2)` ruft `s(1)` und `s(0)` auf. `s(0)` ist ein Basisfall und gibt nur **einen** Punkt aus.'
hinweise:
  - Basisfälle (`n <= 0`) geben einen Punkt aus. Jeder andere Aufruf gibt seine Zahl erst am Ende aus.
  - Bestimme zuerst die Ausgabe von `s(1)` und `s(2)`. Achte darauf, dass auch `s(-1)` ein Basisfall ist.
loesung: |
  **Ansatz:** Von klein nach groß. Jeder Aufruf gibt aus: Teilbaum `n - 1`, Teilbaum `n - 2`, eigene Zahl.
  ---
  `s(0)` und `s(-1)`: je `.`. `s(1)`: `.` und `.` und `1`, also `..1`. `s(2)`: `..1` und `.` und `2`, also `..1.2`.
  ---
  `s(3)`: `..1.2` und `..1` und `3`, also `..1.2..13`.
```

```aufgabe
id: rv-ab-trace-werte
titel: Aufrufe und Rückgabewerte in Startreihenfolge
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int d(int n) {
      if (n < 2) {
          return n + 1;
      }
      return d(n - 1) + d(n - 2);
  }
  ```

  `main` ruft `d(3)` auf. Trage die Aufrufe in der Reihenfolge ein, in der sie **starten**, mit Argument und Rückgabewert.
teile:
  - typ: trace
    spalten: [n, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf, 5. Aufruf]
    loesung: [[3, 5], [2, 3], [1, 2], [0, 1], [1, 2]]
    fehler:
      - wert: ["3", "5", "2", "3", "1", "2", "1", "2", "0", "1"]
        meldung: Das ist Ebene für Ebene gelesen. `d(2)` führt seine Kinder `d(1)` und `d(0)` aus, bevor `d(3)` sein rechtes Kind `d(1)` startet.
      - wert: ["3", "2", "2", "1", "1", "1", "0", "0", "1", "1"]
        meldung: Im Basisfall wird `n + 1` zurückgegeben, nicht `n`. `d(1)` liefert 2 und `d(0)` liefert 1.
hinweise:
  - Zeichne den Baum. Die Spalte `n` füllst du Tiefe zuerst, links vor rechts.
  - Die Rückgabewerte rechnest du von den Blättern aus nach oben.
loesung: |
  **Ansatz:** Startreihenfolge aus dem Baum ablesen, Werte von den Blättern nach oben ausrechnen.
  ---
  Startreihenfolge: `d(3)`, `d(2)`, `d(1)`, `d(0)`, `d(1)`. Das zweite `d(1)` ist das rechte Kind von `d(3)`.
  ---
  Werte: `d(1) = 2`, `d(0) = 1`, `d(2) = 2 + 1 = 3`, `d(3) = 3 + 2 = 5`.
```

```aufgabe
id: rv-ab-code-binom
titel: Der Binomialkoeffizient rekursiv
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Der **Binomialkoeffizient** `binom(n, k)` gibt an, auf wie viele Arten man `k` Dinge aus `n` Dingen auswählen kann.
  Aus 4 Kugeln kann man 2 auf 6 Arten auswählen. Es gilt die Vorschrift:

  - Ist `k == 0` oder `k == n`, ist das Ergebnis 1. Man wählt nichts oder alles aus, dafür gibt es nur eine Art.
  - Sonst ist das Ergebnis `binom(n - 1, k - 1) + binom(n - 1, k)`. Entweder das erste Ding ist dabei, dann fehlen
    noch `k - 1` aus den übrigen `n - 1`. Oder es ist nicht dabei, dann fehlen noch `k` aus den übrigen `n - 1`.

  Implementiere `long binom(int n, int k)` **rekursiv** nach dieser Vorschrift, ohne Schleifen. Vorbedingung: `0 <= k <= n`.
teile:
  - typ: code
    vorlage: |
      public class Binom {
          public static long binom(int n, int k) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Binom {
          public static long binom(int n, int k) {
              if (k == 0 || k == n) {
                  return 1;
              }
              return binom(n - 1, k - 1) + binom(n - 1, k);
          }
      }
    tests:
      - { aufruf: "binom(4, 2)", erwartet: "6" }
      - { aufruf: "binom(5, 0)", erwartet: "1", beschreibung: "k = 0" }
      - { aufruf: "binom(5, 5)", erwartet: "1", beschreibung: "k = n" }
      - { aufruf: "binom(6, 3)", erwartet: "20", versteckt: true }
      - { aufruf: "binom(10, 4)", erwartet: "210", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [binom], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Prüfe zuerst beide Basisfälle: Fehlt `k == 0` oder `k == n`, läuft die Rekursion endlos weiter. Prüfe dann den rekursiven Fall. Beide Aufrufe verkleinern `n` um 1, nur der erste verkleinert auch `k`." }
      - { wert: 2, meldung: "Bei `k == 0` wählst du nichts aus. Dafür gibt es genau eine Art, das Ergebnis ist 1." }
      - { wert: 3, meldung: "Bei `k == n` wählst du alles aus. Dafür gibt es genau eine Art. Fehlt dieser Basisfall, läuft die Rekursion zu `k > n` weiter." }
hinweise:
  - Die Vorschrift hat zwei Basisfälle. Verbinde sie mit `||` in einer Bedingung.
  - Der rekursive Fall ist eine Summe zweier Selbstaufrufe. Die Methode ist also verzweigt.
loesung: |
  **Ansatz:** Die Vorschrift wörtlich übersetzen. Zwei Basisfälle, ein verzweigter rekursiver Fall.
  ---
  ```java
  if (k == 0 || k == n) {
      return 1;
  }
  return binom(n - 1, k - 1) + binom(n - 1, k);
  ```
  ---
  Terminierung: `n` wird in jedem Aufruf kleiner, und `k` bleibt zwischen 0 und `n`. Spätestens bei `n == k` oder `k == 0` greift ein Basisfall.
  ---
  Probe `binom(4, 2) = binom(3, 1) + binom(3, 2) = 3 + 3 = 6`.
```

```aufgabe
id: rv-ab-ausgabe-quiz
titel: Erste Ausgabe, letzte Ausgabe, Ergebnis
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: Was gibt das Programm aus? Alles steht in einer Zeile.
teile:
  - typ: ausgabe
    code: |
      public class Klammer {
          public static int f(int n) {
              System.out.print("<" + n);
              if (n <= 1) {
                  System.out.print(">");
                  return 1;
              }
              int r = f(n - 1) + f(n - 2);
              System.out.print(r + ">");
              return r;
          }

          public static void main(String[] args) {
              System.out.println(" = " + f(3));
          }
      }
    loesung: |
      <3<2<1><0>2><1>3> = 3
    fehler:
      - wert: " = 3<3<2<1><0>2><1>3>"
        meldung: Bevor `println` etwas ausgibt, muss der ganze Ausdruck `" = " + f(3)` ausgerechnet sein. Alle Ausgaben von `f` kommen also zuerst.
      - wert: "<3<2<1><1><0>2>3> = 3"
        meldung: '`f(2)` ruft zuerst `f(1)` und dann `f(0)` auf. Erst wenn `f(2)` ganz fertig ist, startet `f(3)` sein rechtes Kind `f(1)`.'
      - wert: "<3<2<1><0>1><1>2> = 2"
        meldung: Die Basisfälle liefern 1, auch `f(0)`. Damit ist `f(2) = 1 + 1 = 2` und `f(3) = 2 + 1 = 3`.
hinweise:
  - Jeder Aufruf gibt zuerst `<` und sein `n` aus. Ein Basisfall schließt sofort mit `>`, ein anderer Aufruf erst nach beiden Kindern mit seinem Wert.
  - Zeichne den Baum von `f(3)` und gehe ihn Tiefe zuerst durch.
loesung: |
  **Ansatz:** Aufrufbaum Tiefe zuerst durchlaufen. Öffnen beim Betreten, Schließen nach beiden Kindern.
  ---
  `f(3)` öffnet `<3`. Linkes Kind `f(2)` öffnet `<2`. Dessen Kinder sind Basisfälle: `<1>` und `<0>`. Dann schließt `f(2)` mit `2>`.
  ---
  Rechtes Kind von `f(3)` ist `f(1)`: `<1>`. Dann schließt `f(3)` mit `3>`, denn `r = 2 + 1 = 3`.
  ---
  Zum Schluss gibt `println` den Text ` = 3` aus. Erste Ausgabe von `f` ist `<3`, letzte ist `3>`.
```

```reflexion
frage: Warum liegt bei einer verzweigten Rekursion nie der ganze Aufrufbaum gleichzeitig auf dem Aufrufstapel?
antwort: |
  Auf dem Stapel liegen nur Aufrufe, die begonnen haben und noch nicht fertig sind. Wegen der Reihenfolge „Tiefe
  zuerst“ ist ein linker Teilbaum immer schon ganz fertig und abgeräumt, bevor der rechte beginnt. Gleichzeitig offen
  sind deshalb nur die Aufrufe auf dem Weg von der Wurzel zum gerade laufenden Knoten. Das ist höchstens ein Weg, so
  lang wie die Rekursionstiefe. Der Baum zeigt dagegen alle Aufrufe, die im Lauf der Zeit passieren.
```

## Aufrufe und Ausgaben zählen

```aufgabe
id: rv-az-check-linear
titel: Aufrufe einer Kette zählen
niveau: 1
art: check
angabe: |
  In [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg) hast du Aufrufe einer linearen
  Rekursion gezählt. Eine Methode hat den Basisfall `n == 0` und den einzigen Selbstaufruf `f(n - 1)`. Wie oft wird `f`
  beim Aufruf `f(6)` insgesamt aufgerufen?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: Der Aufruf `f(0)` landet im Basisfall, ist aber trotzdem ein Aufruf. Die Argumente sind 6, 5, 4, 3, 2, 1 und 0.
loesung: |
  Die Argumente sind 6, 5, 4, 3, 2, 1 und 0. Jedes kommt genau einmal vor.
  ---
  Das sind 7 Aufrufe, also `n + 1` für `n = 6`.
```

Bei einer linearen Rekursion schreibst du einfach alle Argumente auf und zählst sie. Bei einer verzweigten Rekursion
geht das schnell nicht mehr. `wege(20)` aus [11.3 Der Aufrufbaum](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen)
hat 21891 Aufrufe. Diesen Baum zeichnet niemand.

Der Ausweg ist eine **Tabelle**, die man von unten nach oben füllt. Die Idee: Ein Aufruf mit dem Argument `n` besteht
aus sich selbst und aus seinen Teilbäumen. Wenn du schon weißt, wie viele Aufrufe ein Teilbaum für kleinere Argumente
hat, musst du nur noch addieren. Das ist dasselbe rekursive Denken wie beim Programmieren, nur auf das Zählen angewendet.

:::beispiel[Aufrufe und Sterne in einer Tabelle]
```java
public class Sterne {
    public static void z(int n) {
        if (n == 0) {
            System.out.print("*");
            return;
        }
        z(n - 1);
        z(n - 1);
    }

    public static void main(String[] args) {
        z(4);
        System.out.println();
    }
}
```

Nur der Basisfall gibt etwas aus, einen Stern. Jeder andere Aufruf ruft sich zweimal mit `n - 1` auf. Wir nennen `A(n)`
die Zahl der Aufrufe und `S(n)` die Zahl der Sterne, die `z(n)` insgesamt erzeugt, mit allen Teilbäumen.

1. **Basisfall:** `z(0)` ist ein Aufruf und gibt einen Stern aus. Also `A(0) = 1` und `S(0) = 1`.
2. **Aufrufe:** `z(n)` ist selbst ein Aufruf, dazu kommen zwei Teilbäume `z(n - 1)`. Also `A(n) = 1 + 2 · A(n - 1)`.
3. **Sterne:** `z(n)` gibt selbst nichts aus. Die Sterne kommen nur aus den beiden Teilbäumen. Also `S(n) = 2 · S(n - 1)`.

Jetzt füllen wir die Tabelle Zeile für Zeile. Jede Zeile braucht nur die Zeile darüber:

```
  n  |  A(n) = 1 + 2 · A(n - 1)  |  S(n) = 2 · S(n - 1)
-----+---------------------------+----------------------
  0  |   1   (Basisfall)         |   1   (Basisfall)
  1  |   3   = 1 + 2 · 1         |   2   = 2 · 1
  2  |   7   = 1 + 2 · 3         |   4   = 2 · 2
  3  |  15   = 1 + 2 · 7         |   8   = 2 · 4
  4  |  31   = 1 + 2 · 15        |  16   = 2 · 8
```

`z(4)` braucht also 31 Aufrufe und gibt 16 Sterne aus. Man erkennt ein Muster: `S(n)` ist 2 hoch `n`, und `A(n)` ist
um 1 kleiner als 2 hoch `n + 1`.
:::

:::merke[Aufrufe und Ausgaben mit einer Tabelle zählen]
1. Für jedes Argument, bei dem der **Basisfall** greift, gilt: 1 Aufruf. Die Ausgaben liest du direkt am Code ab.
2. Für den rekursiven Fall gilt: **Aufrufe** = 1 (der Aufruf selbst) plus die Aufrufe aller Teilbäume.
3. **Ausgaben** = die eigenen Ausgaben dieses Aufrufs plus die Ausgaben aller Teilbäume.
4. Fülle die Tabelle von den kleinen Argumenten zu den großen, bis du beim gefragten Argument bist.
:::

```aufgabe
id: rv-az-auswahl-formel
titel: Welche Formel passt?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine Methode hat den Basisfall `n == 0` ohne Selbstaufruf. Für `n > 0` ruft sie sich **zweimal** mit `n - 1` auf.
  Wie viele Aufrufe gibt es beim Aufruf mit `n` insgesamt?
teile:
  - typ: auswahl
    optionen: ['2 hoch `n`', '2 hoch `(n + 1)`, weniger 1', '`n + 1`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 2 hoch `n` ist nur die Zahl der Blätter auf der untersten Ebene. Die Aufrufe auf allen Ebenen darüber kommen noch dazu.
      - wert: 2
        meldung: '`n + 1` gilt für **einen** Selbstaufruf pro Aufruf. Hier verdoppelt sich die Zahl der Aufrufe auf jeder Ebene.'
hinweise:
  - Prüfe die Formeln an `n = 1`. Dann gibt es den Aufruf selbst und zwei Aufrufe mit 0.
loesung: |
  **Ansatz:** Ebene für Ebene zählen: 1, 2, 4, …, 2 hoch `n` Aufrufe.
  ---
  Die Summe `1 + 2 + 4 + … + 2^n` ist 2 hoch `(n + 1)`, weniger 1. Probe für `n = 1`: 3 Aufrufe, und `2^2 - 1 = 3`.
```

:::achtung[Nur die Blätter gezählt]
Es geht um die Methode `z` aus dem Sterne-Beispiel dieses Abschnitts. Eine Quizfrage kann lauten: „Wie oft wird `z`
beim Aufruf `z(3)` aufgerufen?“ Eine typische falsche Antwort ist „2 hoch 3, also 8“.
Gezählt wurden nur die Aufrufe auf der untersten Ebene, die Blätter. Dazu kommen aber alle Aufrufe darüber: einer mit
3, zwei mit 2 und vier mit 1. Richtig ist `1 + 2 + 4 + 8 = 15`. Mit der Tabelle passiert dieser Fehler nicht, weil
jede Zeile die `1 +` für den Aufruf selbst enthält.
:::

:::achtung[Aufrufe gezählt, obwohl Ausgaben gefragt waren]
Die umgekehrte Verwechslung ist genauso häufig. Gefragt ist: „Wie viele Sterne gibt `z(3)` aus?“ Eine typische falsche
Antwort ist 15. Das ist die Zahl der Aufrufe. Sterne gibt aber nur der Basisfall aus, und davon gibt es 8. Lies deshalb
im Code genau nach, **in welchem Fall** die Ausgabe steht. Steht sie nur im Basisfall, zählst du die Blätter. Steht sie
im rekursiven Fall, zählst du die inneren Knoten.
:::

```aufgabe
id: rv-az-gefuehrt
titel: Ausgaben mit einer Tabelle zählen
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static void r(int n) {
      if (n < 1) {
          return;
      }
      System.out.print("x");
      r(n - 1);
      r(n - 2);
  }
  ```

  Wie viele `x` gibt `r(5)` aus? Löse die Aufgabe zuerst geführt. Nenne `X(n)` die Zahl der `x`, die `r(n)` insgesamt ausgibt.
teile:
  - typ: zahl
    loesung: "12"
    fehler:
      - wert: "25"
        meldung: 25 ist die Zahl der Aufrufe. Die Aufrufe mit `n < 1` geben aber kein `x` aus. Zähle nur die Aufrufe, die die Ausgabe erreichen.
      - wert: "5"
        meldung: Das wäre richtig ohne den zweiten Selbstaufruf `r(n - 2)`. Auch er erzeugt einen ganzen Teilbaum mit eigenen Ausgaben.
gefuehrt:
  - text: Wie viele `x` geben `r(0)` und `r(-1)` aus?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Bei `n < 1` endet die Methode mit `return`, bevor etwas ausgegeben wird. Also `X(0) = X(-1) = 0`.
  - text: Ein Aufruf mit `n ≥ 1` gibt ein eigenes `x` aus und ruft `r(n - 1)` und `r(n - 2)` auf. Wie viele `x` gibt `r(2)` aus?
    teil: { typ: zahl, loesung: "1 + 1 + 0" }
    erklaerung: '`X(1) = 1 + X(0) + X(-1) = 1`. Dann `X(2) = 1 + X(1) + X(0) = 1 + 1 + 0 = 2`.'
  - text: Wie viele `x` gibt `r(3)` aus?
    teil: { typ: zahl, loesung: "1 + 2 + 1" }
    erklaerung: '`X(3) = 1 + X(2) + X(1) = 1 + 2 + 1 = 4`.'
  - text: Wie viele `x` gibt `r(4)` aus?
    teil: { typ: zahl, loesung: "1 + 4 + 2" }
    erklaerung: '`X(4) = 1 + X(3) + X(2) = 1 + 4 + 2 = 7`. Damit fehlt nur noch eine Zeile bis `r(5)`.'
hinweise:
  - Stelle eine Regel für `X(n)` auf und fülle die Tabelle von `n = 0` aufwärts.
loesung: |
  **Ansatz:** Ausgaben = eigene Ausgabe plus Ausgaben beider Teilbäume. Für `n ≥ 1` gilt `X(n) = 1 + X(n - 1) + X(n - 2)`. Für `n < 1` gilt `X(n) = 0`.
  ---
  Tabelle: `X(1) = 1`, `X(2) = 2`, `X(3) = 4`, `X(4) = 7`, `X(5) = 1 + 7 + 4 = 12`.
```

Ein berühmtes Rätsel zeigt, wie schnell solche Zahlen wachsen. Bei den **Türmen von Hanoi** liegen `n` Scheiben
verschiedener Größe auf einem Stab, die größte unten. Der ganze Turm soll auf einen anderen Stab. Dabei darf man immer
nur die oberste Scheibe eines Stabs bewegen. Und nie darf eine größere Scheibe auf einer kleineren liegen. Ein dritter
Stab hilft beim Umschichten.

Die rekursive Idee: Um `n` Scheiben von A nach C zu bringen, bringst du zuerst die oberen `n - 1` Scheiben von A auf den
Hilfsstab B. Dann legst du die größte Scheibe von A nach C. Zum Schluss bringst du die `n - 1` Scheiben von B nach C.
Zwei der drei Schritte sind kleinere Aufgaben derselben Art.

:::beispiel[Die Türme von Hanoi]
```java
public class Hanoi {
    public static void hanoi(int n, String von, String hilf, String nach) {
        if (n > 0) {
            hanoi(n - 1, von, nach, hilf);
            System.out.println(von + " -> " + nach);
            hanoi(n - 1, hilf, von, nach);
        }
    }

    public static void main(String[] args) {
        hanoi(2, "A", "B", "C");
    }
}
```

- `if (n > 0)` umschließt den rekursiven Fall. Bei `n == 0` passiert nichts. Das ist ein **impliziter Basisfall**
  (implizit heißt „nicht ausdrücklich hingeschrieben“): Es gibt keine eigene Anweisung dafür, die Methode endet einfach.
- Der erste Selbstaufruf bringt `n - 1` Scheiben von `von` auf `hilf`. Der Stab `nach` dient dabei als Hilfe.
- Die Ausgabe beschreibt einen einzelnen Zug, das Bewegen der größten Scheibe.
- Der zweite Selbstaufruf bringt die `n - 1` Scheiben von `hilf` nach `nach`.

Für `hanoi(2, "A", "B", "C")` lautet die Ausgabe:

```
A -> B
A -> C
B -> C
```

Der erste Selbstaufruf `hanoi(1, "A", "C", "B")` legt die kleine Scheibe von A nach B. Dann wandert die große Scheibe
von A nach C. Der zweite Selbstaufruf `hanoi(1, "B", "A", "C")` legt die kleine Scheibe von B nach C.

**Wie viele Züge sind es?** Jeder Zug ist eine Ausgabe. Nenne `Z(n)` die Zahl der Züge. Es gilt `Z(0) = 0` und
`Z(n) = Z(n - 1) + 1 + Z(n - 1)`. Die Tabelle ergibt 0, 1, 3, 7, 15, 31 für `n` von 0 bis 5. Allgemein sind es 2 hoch
`n` weniger 1 Züge. Für 10 Scheiben sind das schon 1023 Züge.
:::

```aufgabe
id: rv-az-zahl-doppelt
titel: Aufrufe bei Basisfall 1
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static void f(int n) {
      if (n <= 1) {
          return;
      }
      f(n - 1);
      f(n - 1);
  }
  ```

  Wie oft wird `f` beim Aufruf `f(5)` insgesamt aufgerufen?
teile:
  - typ: zahl
    loesung: "1 + 2 + 4 + 8 + 16"
    fehler:
      - wert: "63"
        meldung: Der Basisfall greift schon bei `n <= 1`. Aufrufe mit 0 gibt es nicht, die unterste Ebene hat das Argument 1.
      - wert: "16"
        meldung: 16 sind nur die Blätter mit Argument 1. Dazu kommen die Aufrufe mit 5, 4, 3 und 2.
hinweise:
  - Stelle die Tabelle auf. `A(1) = 1`, und für größere `n` gilt `A(n) = 1 + 2 · A(n - 1)`.
loesung: |
  **Ansatz:** Tabelle von unten. Der Basisfall ist `n <= 1`, also beginnt sie bei `A(1) = 1`.
  ---
  `A(2) = 3`, `A(3) = 7`, `A(4) = 15`, `A(5) = 31`.
  ---
  Kontrolle Ebene für Ebene: 1 Aufruf mit 5, 2 mit 4, 4 mit 3, 8 mit 2 und 16 mit 1. Zusammen 31.
```

```aufgabe
id: rv-az-ausgabe-sterne
titel: Sterne im rekursiven Fall
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Innen {
          public static void s(int n) {
              if (n == 0) {
                  return;
              }
              System.out.print("*");
              s(n - 1);
              s(n - 1);
          }

          public static void main(String[] args) {
              s(3);
              System.out.println();
          }
      }
    loesung: |
      *******
    fehler:
      - wert: "********"
        meldung: Hier steht der Stern im **rekursiven** Fall. Die Aufrufe mit 0 geben keinen Stern aus. Es sind also nur die inneren Knoten, nicht die 8 Blätter.
      - wert: "***"
        meldung: Jeder Aufruf mit `n > 0` ruft sich zweimal auf. Mit Argument 1 gibt es schon 4 Aufrufe, nicht einen.
hinweise:
  - Zähle die Aufrufe mit `n > 0`. Nur sie geben einen Stern aus.
loesung: |
  **Ansatz:** Sterne = Zahl der Aufrufe mit `n > 0`, also der inneren Knoten.
  ---
  Ein Aufruf mit 3, zwei mit 2, vier mit 1. Zusammen `1 + 2 + 4 = 7` Sterne in einer Zeile.
```

```aufgabe
id: rv-az-trace-tabelle
titel: Eine Zähltabelle mit Abstand 3
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int k(int n) {
      if (n < 3) {
          return 1;
      }
      return k(n - 1) + k(n - 3);
  }
  ```

  Fülle die Tabelle: `A(n)` ist die Zahl der Aufrufe, die `k(n)` insgesamt auslöst, sich selbst mitgezählt. Die ersten
  drei Zeilen sind vorgegeben.
teile:
  - typ: trace
    spalten: [n, A(n)]
    zeilen: ['n = 0', 'n = 1', 'n = 2', 'n = 3', 'n = 4', 'n = 5', 'n = 6']
    vorgabe: 3
    loesung: [[0, 1], [1, 1], [2, 1], [3, 3], [4, 5], [5, 7], [6, 11]]
    fehler:
      - wert: ["0", "1", "1", "1", "2", "1", "3", "2", "4", "3", "5", "4", "6", "6"]
        meldung: Du hast die Werte von `k` eingetragen oder die `1 +` für den Aufruf selbst vergessen. `A(3)` ist 1 für `k(3)` plus je einen Aufruf `k(2)` und `k(0)`.
      - wert: ["0", "1", "1", "1", "2", "1", "3", "3", "4", "5", "5", "7", "6", "13"]
        meldung: 'Rechne `A(6)` neu. `k(6)` ruft `k(5)` und `k(3)` auf, nicht `k(5)` und `k(4)`. Also `1 + 7 + 3`.'
hinweise:
  - '`A(n) = 1 + A(n - 1) + A(n - 3)` für `n ≥ 3`.'
  - Für jede neue Zeile brauchst du die Zeile direkt darüber und die Zeile für `n - 3`.
loesung: |
  **Ansatz:** Zähltabelle. Ein Aufruf mit `n ≥ 3` ist er selbst plus zwei Teilbäume mit `n - 1` und `n - 3`.
  ---
  `A(3) = 1 + A(2) + A(0) = 3`, `A(4) = 1 + A(3) + A(1) = 5`.
  ---
  `A(5) = 1 + A(4) + A(2) = 7`, `A(6) = 1 + A(5) + A(3) = 11`.
```

```aufgabe
id: rv-az-hanoi-zahl
titel: Sechs Scheiben umschichten
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Verwende die Methode `hanoi` aus dem Beispiel dieses Abschnitts mit `if (n > 0)`. `main` ruft
  `hanoi(6, "A", "B", "C")` auf.

  a) Wie viele Zeilen gibt das Programm aus?

  b) Wie oft wird `hanoi` insgesamt aufgerufen? Die Aufrufe mit `n = 0` zählen mit.
teile:
  - typ: zahl
    label: a) Züge
    loesung: "2^6 - 1"
    fehler:
      - wert: "64"
        meldung: Jeder Zug ist eine Ausgabe eines Aufrufs mit `n > 0`. Die Formel lautet 2 hoch `n` **weniger 1**.
      - wert: "127"
        meldung: 127 ist die Zahl aller Aufrufe. Die Aufrufe mit `n = 0` geben aber nichts aus.
  - typ: zahl
    label: b) Aufrufe
    loesung: "2^7 - 1"
    fehler:
      - wert: "63"
        meldung: Das sind nur die Aufrufe mit `n > 0`. Jeder Aufruf mit `n = 1` ruft noch zweimal `hanoi(0, …)` auf.
      - wert: "64"
        meldung: Das sind nur die Blätter mit `n = 0`. Dazu kommen alle Aufrufe darüber.
hinweise:
  - Züge `Z(n) = 2 · Z(n - 1) + 1` mit `Z(0) = 0`. Aufrufe `A(n) = 1 + 2 · A(n - 1)` mit `A(0) = 1`.
  - Fülle beide Tabellen bis `n = 6`.
loesung: |
  **Ansatz:** Zwei Zähltabellen, eine für die Ausgaben und eine für die Aufrufe.
  ---
  Züge: 0, 1, 3, 7, 15, 31, 63. Bei 6 Scheiben sind es 63 Ausgaben, also 2 hoch 6 weniger 1.
  ---
  Aufrufe: 1, 3, 7, 15, 31, 63, 127. Bei 6 Scheiben sind es 127 Aufrufe. Davon sind 64 Blätter mit `n = 0`, die nichts ausgeben.
```

```aufgabe
id: rv-az-rf-ausgaben
titel: Vier Aussagen über die Ausgaben
niveau: 2
lernziel: 4
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (verzweigte Rekursion, Anzahl Ausgaben, erste Ausgabe), Inhalt neu
angabe: |
  Gegeben ist

  ```java
  public static void b(int n) {
      if (n == 0) {
          System.out.println(0);
          return;
      }
      b(n - 1);
      System.out.println(n);
      b(n - 1);
  }
  ```

  `main` ruft `b(3)` auf. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`b(3)` gibt genau 15 Zeilen aus.'
        richtig: true
        erklaerung: Jeder Aufruf gibt genau eine Zeile aus, ob Basisfall oder nicht. Es gibt `1 + 2 + 4 + 8 = 15` Aufrufe.
      - text: Die erste ausgegebene Zahl ist 3.
        richtig: false
        erklaerung: Die Ausgabe steht zwischen den Aufrufen. Zuerst läuft der linke Teilbaum bis ganz nach unten, die erste Ausgabe ist 0.
      - text: Die Zahl 1 erscheint genau 4-mal.
        richtig: true
        erklaerung: Es gibt 4 Aufrufe mit `n = 1`, und jeder gibt einmal 1 aus.
      - text: Allgemein gibt `b(n)` genau 2 hoch `n` Zeilen aus.
        richtig: false
        erklaerung: 2 hoch `n` sind nur die Basisfälle. Da auch jeder innere Knoten eine Zeile ausgibt, sind es 2 hoch `(n + 1)` weniger 1.
    fehler:
      - wert: [r, r, r, f]
        meldung: Wo steht die Ausgabe? Zwischen den beiden Selbstaufrufen. Was passiert, bevor `b(3)` dorthin kommt?
      - wert: [f, f, r, r]
        meldung: Zähle mit, ob auch die Basisfälle etwas ausgeben. Hier tun sie das, also zählt jeder Aufruf.
hinweise:
  - Prüfe, ob jeder Aufruf genau eine Zeile ausgibt. Dann ist die Zahl der Zeilen gleich der Zahl der Aufrufe.
  - Für die erste Ausgabe gehst du den Baum Tiefe zuerst bis zur ersten Ausgabe durch.
loesung: |
  **Ansatz:** Ausgaben pro Aufruf bestimmen, dann mit der Zahl der Aufrufe je Argument multiplizieren.
  ---
  Jeder Aufruf gibt eine Zeile aus. Aufrufe: 1 mit 3, 2 mit 2, 4 mit 1, 8 mit 0, zusammen 15. Die 1 erscheint 4-mal.
  ---
  Die erste Ausgabe kommt vom Blatt ganz links, also 0. Die allgemeine Formel ist 2 hoch `(n + 1)` weniger 1, nicht 2 hoch `n`. Aussagen 1 und 3 sind richtig.
```

```aufgabe
id: rv-az-zahl-halbe
titel: Ein Teilbaum mit der Hälfte
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int u(int n) {
      if (n <= 1) {
          return 1;
      }
      return u(n - 1) + u(n / 2);
  }
  ```

  Wie oft wird `u` beim Aufruf `u(8)` insgesamt aufgerufen?
teile:
  - typ: zahl
    loesung: "35"
    fehler:
      - wert: "18"
        meldung: Du hast vermutlich die Werte von `u` statt der Aufrufe gezählt. Für die Aufrufe gilt `A(n) = 1 + A(n - 1) + A(n / 2)`.
      - wert: "25"
        meldung: Das ist `A(7)`. Rechne noch eine Zeile weiter mit `A(8) = 1 + A(7) + A(4)`.
hinweise:
  - Für `n ≥ 2` gilt `A(n) = 1 + A(n - 1) + A(n / 2)` mit Ganzzahldivision. `A(0) = A(1) = 1`.
  - Fülle die Tabelle von 2 bis 8. Für `A(n / 2)` schaust du in einer früheren Zeile nach.
loesung: |
  **Ansatz:** Zähltabelle mit zwei unterschiedlich großen Teilbäumen. `n / 2` ist eine Ganzzahldivision.
  ---
  `A(2) = 1 + A(1) + A(1) = 3`, `A(3) = 1 + A(2) + A(1) = 5`, `A(4) = 1 + A(3) + A(2) = 9`.
  ---
  `A(5) = 1 + 9 + A(2) = 13`, `A(6) = 1 + 13 + A(3) = 19`, `A(7) = 1 + 19 + A(3) = 25`.
  ---
  `A(8) = 1 + A(7) + A(4) = 1 + 25 + 9 = 35`.
```

```aufgabe
id: rv-az-code-hanoi
titel: Die Türme von Hanoi selbst schreiben
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Implementiere `void hanoi(int n, char von, char hilf, char nach)` **rekursiv** und ohne Schleifen. Die Methode gibt
  alle Züge aus, mit denen `n` Scheiben vom Stab `von` auf den Stab `nach` kommen. Jeder Zug steht in einer eigenen
  Zeile im Format `L -> R`, also Startstab, Leerzeichen, Pfeil aus Minus und Größer, Leerzeichen, Zielstab.
  Vorbedingung: `n >= 0`.

  Beispiel: `hanoi(2, 'L', 'M', 'R')` gibt aus:

  ```
  L -> M
  L -> R
  M -> R
  ```
teile:
  - typ: code
    vorlage: |
      public class Tuerme {
          public static void hanoi(int n, char von, char hilf, char nach) {
              // TODO
          }
      }
    musterloesung: |
      public class Tuerme {
          public static void hanoi(int n, char von, char hilf, char nach) {
              if (n == 0) {
                  return;
              }
              hanoi(n - 1, von, nach, hilf);
              System.out.println(von + " -> " + nach);
              hanoi(n - 1, hilf, von, nach);
          }
      }
    tests:
      - { aufruf: "hanoi(1, 'L', 'M', 'R')", stdout: "L -> R\n" }
      - { aufruf: "hanoi(2, 'L', 'M', 'R')", stdout: "L -> M\nL -> R\nM -> R\n" }
      - { aufruf: "hanoi(0, 'L', 'M', 'R')", stdout: "", beschreibung: "keine Scheibe, kein Zug" }
      - { aufruf: "hanoi(3, 'L', 'M', 'R')", stdout: "L -> R\nL -> M\nR -> M\nL -> R\nM -> L\nM -> R\nL -> R\n", versteckt: true }
      - { aufruf: "hanoi(2, 'A', 'B', 'C')", stdout: "A -> B\nA -> C\nB -> C\n", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [hanoi], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Im ersten Teilschritt wandern `n - 1` Scheiben von `von` auf den **Hilfsstab**. Dabei dient `nach` als Hilfe. Prüfe die Reihenfolge der Argumente im ersten Selbstaufruf." }
      - { wert: 1, meldung: "Bei einer Scheibe gibt es genau einen Zug direkt von `von` nach `nach`. Achte auf das Format mit Leerzeichen um den Pfeil." }
hinweise:
  - Basisfall ist `n == 0`. Dann gibt es nichts zu tun.
  - 'Drei Schritte. Erstens `n - 1` Scheiben von `von` nach `hilf`, mit `nach` als Hilfe. Zweitens einen Zug ausgeben. Drittens `n - 1` Scheiben von `hilf` nach `nach`, mit `von` als Hilfe.'
loesung: |
  **Ansatz:** Die drei Schritte aus dem Beispiel: Teilturm wegräumen, größte Scheibe ziehen, Teilturm daraufsetzen.
  ---
  ```java
  if (n == 0) {
      return;
  }
  hanoi(n - 1, von, nach, hilf);
  System.out.println(von + " -> " + nach);
  hanoi(n - 1, hilf, von, nach);
  ```
  ---
  `von + " -> " + nach` ist eine Verkettung, weil in der Mitte ein String steht. Zwei `char` direkt addiert ergäben dagegen eine Zahl.
  ---
  Probe mit `n = 2`: Der erste Selbstaufruf gibt `L -> M` aus, dann folgt `L -> R`, der zweite Selbstaufruf gibt `M -> R` aus. Für `n = 3` entstehen 7 Züge.
```

```reflexion
frage: Warum ist es bei einer verzweigten Rekursion klüger, mit einer Tabelle von unten zu zählen, statt den Aufrufbaum zu zeichnen?
antwort: |
  Der Aufrufbaum wächst bei jeder Ebene um ein Vielfaches. Schon für kleine Argumente hat er Dutzende oder Hunderte
  Knoten, und beim Zeichnen verzählt man sich leicht. Die Tabelle nutzt aus, dass gleiche Teilbäume gleich viele Aufrufe
  haben. Jede Zeile braucht nur die Zeilen darüber und eine Addition. So zählt man auch `u(8)` mit 35 Aufrufen in
  wenigen Zeilen. Das ist dieselbe Idee wie bei der Rekursion selbst: Die große Aufgabe wird aus den Antworten der
  kleineren zusammengesetzt.
```

## Rekursionen beurteilen: Ergebnis und Terminierung

```aufgabe
id: rv-tb-check-vorbedingung
titel: Was verspricht eine Vorbedingung?
niveau: 1
art: check
angabe: |
  In [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen) hast du Vorbedingungen kennengelernt.
  Über einer Methode steht der Kommentar `// Vorbedingung: n >= 0`. Was bedeutet das?
teile:
  - typ: auswahl
    optionen:
      - Die Methode muss nur für `n >= 0` richtig arbeiten. Dafür, dass kein negatives `n` übergeben wird, ist der Aufrufer zuständig.
      - Die Methode muss bei negativem `n` eine Fehlermeldung ausgeben.
      - Java verhindert automatisch, dass die Methode mit negativem `n` aufgerufen wird.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Vorbedingung verlangt keine Prüfung in der Methode. Sie beschreibt, für welche Eingaben die Methode gedacht ist.
      - wert: 2
        meldung: Der Kommentar ist für Menschen. Java liest ihn nicht und verhindert keinen Aufruf.
loesung: |
  Eine Vorbedingung ist eine Vereinbarung. Der Aufrufer sorgt dafür, dass sie gilt.
  ---
  Die Methode muss nur für die erlaubten Eingaben das Richtige tun. Für andere Eingaben ist ihr Verhalten nicht festgelegt.
```

In den TUWEL-Tests der letzten Jahre kam dieser Fragentyp vor, etwa im Test vom Jänner 2023: Eine Methode ist mit
Worten beschrieben, dazu ihre Vorbedingung. Darunter stehen vier verschiedene rekursive Implementierungen. Zu jeder sollst du entscheiden: **Liefert sie für alle erlaubten
Eingaben das richtige Ergebnis, und endet sie dabei?** Nur wenn beides stimmt, ist die Implementierung richtig.

Für die zweite Hälfte der Frage braucht man zwei Begriffe aus der Vorlesung. Sie zerlegen „Endet die Rekursion?“ in
zwei kleinere Fragen.

:::definition[Fundiertheit, Fortschritt, Terminierung]
Eine rekursive Methode ist **fundiert**, wenn sie einen Basisfall hat, der von den erlaubten Eingaben aus erreichbar ist.
Sie macht **Fortschritt**, wenn jeder Selbstaufruf die Argumente um einen Mindestbetrag näher an den Basisfall bringt.

Eine Methode **terminiert** für eine Eingabe, wenn sie nach endlich vielen Schritten regulär endet. Regulär heißt: ohne
`StackOverflowError` und ohne andere Exception. Dafür braucht sie Fundiertheit **und** Fortschritt.
:::

**Beispiel:** `summe` mit Basisfall `n == 0` und Selbstaufruf `summe(n - 1)` ist für `n >= 0` fundiert. Jeder Schritt
verkleinert `n` um 1, also macht sie Fortschritt.

**Kein Beispiel:** `f(x)` mit `if (x <= 0) return 1; return f(x) * x;` ist fundiert, denn es gibt einen Basisfall. Aber
der Selbstaufruf bekommt dasselbe `x`. Es gibt keinen Fortschritt, und für `x > 0` endet die Methode nie.

:::beispiel[Vier Methoden, viermal anders]
Für jede Methode fragen wir: Für welche `x` endet sie? Dabei nehmen wir an, dass der Zahlenbereich von `int` nicht
überschritten wird.

```java
public static int a(int x) {
    if (x < 5) { return 0; }
    return a(x - 4) + 1;
}

public static int b(int x) {
    if (x == 10) { return 0; }
    return b(x + 4) + 1;
}

public static int c(int x) {
    if (x == 1) { return 0; }
    return c(x / 2) + 1;
}

public static int d(int x) {
    if (x <= 1) { return 0; }
    return d(x / 2) + 1;
}
```

1. **`a` endet immer.** Für `x < 5` greift sofort der Basisfall. Für größere `x` wird `x` in Viererschritten kleiner
   und landet sicher unter 5. Die Grenze `x < 5` kann man nicht überspringen, denn sie umfasst alle Zahlen darunter.
2. **`b` endet nur für bestimmte Startwerte.** Der Basisfall verlangt **genau** 10. Von 2 aus geht es über 6 zu 10.
   Von 3 aus geht es über 7 zu 11 und dann weiter nach oben, an der 10 vorbei. Die 10 wird also nur getroffen, wenn
   `x` höchstens 10 ist und der Abstand `10 - x` durch 4 teilbar ist. Von Zahlen über 10 aus wird `x` nur größer.
3. **`c` endet nur für `x >= 1`.** Für positive `x` führt das Halbieren sicher zur 1, etwa 6, 3, 1. Für `x = 0` bleibt
   die Folge hängen, denn `0 / 2` ist wieder 0. Negative Zahlen landen ebenfalls bei 0, etwa -5, -2, -1, 0, denn die
   Ganzzahldivision rundet zur Null hin. Der Basisfall `x == 1` wird dann nie erreicht.
4. **`d` endet immer.** Für `x >= 2` ist `x / 2` echt kleiner als `x`. Irgendwann ist `x` höchstens 1, und dann greift
   `x <= 1`.

`c` und `d` unterscheiden sich nur im Basisfall. Das zeigt, wie genau man hinschauen muss.
:::

:::merke[Eine rekursive Implementierung prüfen]
1. **Fundiertheit:** Gibt es einen Basisfall? Für welche Argumente greift er?
2. **Fortschritt:** Wird das Argument in **jedem** rekursiven Zweig kleiner, also näher am Basisfall?
3. **Überspringen:** Kann ein erlaubtes Argument am Basisfall vorbeilaufen, etwa bei `== 10` und Schrittweite 4?
4. **Exceptions:** Greift die Methode auf etwas zu, das es nicht gibt, etwa `charAt(0)` bei einem leeren String?
5. **Ergebnis:** Teste mit dem kleinsten erlaubten Argument und mit zwei kleinen Beispielen. Vergleiche mit der Angabe.
:::

:::beispiel[Vier Implementierungen einer Beschreibung]
Die Methode `sterne(String s, char c)` soll `s` liefern, wobei jedes Vorkommen von `c` durch einen Stern `*` ersetzt
ist. Vorbedingung: `s != null`. Beispiel: `sterne("abca", 'a')` liefert `"*bc*"`. Wir prüfen vier Implementierungen.
Der Methodenkopf ist jeweils weggelassen.

**I1**
```java
if (s.isEmpty()) { return ""; }
if (s.charAt(0) == c) { return "*" + sterne(s.substring(1), c); }
return s.charAt(0) + sterne(s.substring(1), c);
```

**I2**
```java
if (s.isEmpty()) { return ""; }
if (s.charAt(0) == c) { return "*" + sterne(s.substring(1), c); }
return sterne(s.substring(1), c) + s.charAt(0);
```

**I3**
```java
if (s.isEmpty()) { return s; }
if (s.charAt(0) == c) { return "*" + sterne(s.substring(1), c); }
return s.charAt(0) + sterne(s, c);
```

**I4**
```java
if (s.isEmpty()) { return ""; }
String rest = sterne(s.substring(1), c);
if (s.charAt(0) == c) { return "*" + rest; }
return s.charAt(0) + rest;
```

- **I1 ist richtig.** Basisfall leerer String, Fortschritt `substring(1)` in beiden Zweigen. Das erste Zeichen oder
  sein Stern steht **vor** dem Ergebnis des Rests, die Reihenfolge bleibt. Für `"abca"` kommt `"*bc*"` heraus.
- **I2 endet, ist aber falsch.** Ein behaltenes Zeichen steht **hinter** dem Rest. Dadurch gerät die Reihenfolge
  durcheinander. Für `"abca"` kommt `"**cb"` heraus.
- **I3 endet nicht.** Im letzten Zweig fehlt der Fortschritt: `sterne(s, c)` bekommt denselben String. Bei
  `"abca"` wird das erste `a` noch ersetzt. Bei `"bca"` ruft sich die Methode dann endlos mit `"bca"` auf.
- **I4 ist richtig.** Sie rechnet zuerst den Rest und setzt dann den Stern oder das erste Zeichen davor. Das ist
  dieselbe Logik wie in I1, nur anders aufgeschrieben.
:::

:::achtung[Für die Beispiele richtig, aber nicht für alle erlaubten Eingaben]
Eine Implementierung von `sterne` beginnt so:

```java
if (s.length() == 1) {
    if (s.charAt(0) == c) { return "*"; }
    return s;
}
```

Danach folgt der rekursive Fall wie in I1. Mit `"abca"` und `"xyz"` funktioniert alles. Die typische falsche Folgerung
lautet: „Sie liefert für die Beispiele das Richtige, also ist sie richtig.“ Die Vorbedingung `s != null` erlaubt aber
auch den leeren String. Bei `sterne("", 'a')` ist `s.length() == 1` falsch, und der rekursive Fall ruft
`s.charAt(0)` auf. Das endet mit `StringIndexOutOfBoundsException`. Die Implementierung ist deshalb **falsch**. Prüfe
immer das kleinste erlaubte Argument.
:::

```aufgabe
id: rv-tb-gefuehrt
titel: Eine Implementierung Schritt für Schritt beurteilen
niveau: 1
lernziel: 5
kompetenz: begruenden
angabe: |
  Die Methode soll die Anzahl der Ziffern einer Zahl `n` liefern. Vorbedingung: `n >= 0`. Die Zahl 0 hat eine Ziffer.

  ```java
  public static int ziffern(int n) {
      if (n == 0) {
          return 0;
      }
      return 1 + ziffern(n / 10);
  }
  ```

  Wie lautet dein Urteil? Löse die Aufgabe zuerst geführt.
teile:
  - typ: auswahl
    optionen:
      - endet für alle erlaubten `n`, Ergebnis immer richtig
      - endet für alle erlaubten `n`, Ergebnis für `n = 0` falsch
      - endet nicht für `n = 0`
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Prüfe das kleinste erlaubte Argument. `ziffern(0)` liefert 0, aber die Zahl 0 hat laut Angabe eine Ziffer.'
      - wert: 2
        meldung: Bei `n = 0` greift sofort der Basisfall `n == 0`. Die Methode endet also, nur mit dem falschen Wert.
gefuehrt:
  - text: Wird `n` bei jedem Selbstaufruf kleiner, solange `n > 0` ist?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [0]
    erklaerung: Für `n > 0` ist `n / 10` echt kleiner als `n`. Die Folge erreicht also irgendwann 0.
  - text: Was liefert `ziffern(507)`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Die Argumente sind 507, 50, 5 und 0. Drei Aufrufe zählen je 1, der Basisfall liefert 0. Das passt: 507 hat 3 Ziffern.'
  - text: Was liefert `ziffern(0)`?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Bei 0 greift sofort der Basisfall und liefert 0.
  - text: Stimmt dieser Wert mit der Angabe überein?
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [1]
    erklaerung: Die Angabe sagt, die Zahl 0 hat eine Ziffer. Die Methode liefert aber 0. Für dieses erlaubte Argument ist sie falsch.
hinweise:
  - Prüfe getrennt, ob die Methode endet, und ob sie das Richtige liefert. Teste auch das kleinste erlaubte Argument.
loesung: |
  **Ansatz:** Terminierung und Ergebnis getrennt prüfen, mit einem typischen Beispiel und dem Randfall `n = 0`.
  ---
  Terminierung: Für `n > 0` wird `n / 10` echt kleiner und erreicht 0. Die Methode endet für alle `n >= 0`.
  ---
  Ergebnis: `ziffern(507) = 3` stimmt, aber `ziffern(0) = 0` statt 1. Die Implementierung ist falsch. Eine Reparatur ist der Basisfall `if (n < 10) { return 1; }`.
```

:::achtung[Endet, aber das Ergebnis ist zu groß für int]
Diese Methode für die Fakultät `n! = 1 · 2 · … · n` sieht richtig aus:

```java
public static int fak(int n) {      // Vorbedingung: n >= 0
    if (n <= 0) {
        return 1;
    }
    return n * fak(n - 1);
}
```

Sie ist fundiert und macht Fortschritt. Die typische falsche Folgerung ist: „Sie endet immer, also ist sie richtig.“
`fak(12)` liefert noch richtig 479001600. Aber `fak(13)` liefert 1932053504 statt 6227020800. Der richtige Wert ist
größer als der größte `int`-Wert, und Java schneidet die oberen Stellen ohne Meldung ab. Das heißt **Überlauf**. Mit
`long` statt `int` stimmen die Werte bis `fak(20)`. Danach läuft auch `long` über.
:::

```aufgabe
id: rv-tb-auswahl-endet
titel: Trifft die Folge genau 100?
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int w(int n) {
      if (n == 100) {
          return 0;
      }
      return 1 + w(n + 7);
  }
  ```

  Welcher Aufruf endet ohne `StackOverflowError`?
teile:
  - typ: auswahl
    optionen: ['`w(2)`', '`w(3)`', '`w(107)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Von 3 aus erreicht man 94 und dann 101. Die 100 wird übersprungen, denn `100 - 3 = 97` ist nicht durch 7 teilbar.'
      - wert: 2
        meldung: Von 107 aus wird `n` mit jedem Aufruf größer. Die Folge entfernt sich von 100.
hinweise:
  - Die Rekursion endet nur, wenn `100 - n` ein Vielfaches von 7 ist, das nicht negativ ist.
loesung: |
  **Ansatz:** Der Basisfall verlangt genau 100. Der Fortschritt ist `n + 7`. Also muss `100 - n` ein nicht negatives Vielfaches von 7 sein.
  ---
  Für 2 ist `100 - 2 = 98 = 14 · 7`. Für 3 ist `97` kein Vielfaches von 7. Für 107 ist die Differenz negativ. Nur `w(2)` endet, und zwar mit dem Wert 14.
```

```aufgabe
id: rv-tb-rf-zahlen
titel: Für welche x endet die Methode?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage. Nimm an, dass der Zahlenbereich von `int` nicht überschritten wird.

  ```java
  public static int e(int x) {
      if (x <= 1) { return 0; }
      return e(x - 2) + 1;
  }

  public static int f(int x) {
      if (x == 1) { return 0; }
      return f(x - 2) + 1;
  }

  public static int g(int x) {
      if (x >= 100) { return 0; }
      return g(x + 5) + 1;
  }

  public static int h(int x) {
      if (x > 50) { return x; }
      return h(x * 2);
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`e` endet für jedes `x`.'
        richtig: true
        erklaerung: '`x <= 1` kann man in Zweierschritten nicht überspringen. Kleine `x` landen sofort im Basisfall.'
      - text: '`f` endet für jedes `x >= 1`.'
        richtig: false
        erklaerung: 'Für gerade `x` läuft die Folge an der 1 vorbei, etwa 4, 2, 0, -2 und so fort.'
      - text: '`g` endet für jedes `x`.'
        richtig: true
        erklaerung: 'Für `x >= 100` greift sofort der Basisfall. Kleinere `x` wachsen in Fünferschritten und kommen sicher bei 100 oder darüber an. Die Grenze `x >= 100` kann man nicht überspringen.'
      - text: '`h` endet für jedes `x`.'
        richtig: false
        erklaerung: 'Für `x = 0` ist `0 * 2` wieder 0, die Folge bleibt hängen. Negative Zahlen werden durch Verdoppeln nur kleiner.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Es genügt nicht, dass ein Basisfall existiert. Prüfe, ob er von **jedem** Startwert aus getroffen wird. Probiere `f(4)` und `h(0)`.
      - wert: [r, f, f, f]
        meldung: 'Probiere `g(-3)`: -3, 2, 7, … bis 102. Dort greift `x >= 100`. Welche Grenze kann eine Folge in Fünferschritten überspringen, welche nicht?'
hinweise:
  - Probiere für jede Methode einen positiven, einen negativen Startwert und die 0.
loesung: |
  **Ansatz:** Für jede Methode die Folge der Argumente von einigen Startwerten aus aufschreiben.
  ---
  `e`: Schritte von 2 nach unten, der Basisfall `x <= 1` ist nicht überspringbar. `g`: Schritte von 5 nach oben, der Basisfall `x >= 100` ist ebenfalls nicht überspringbar. Beide enden immer.
  ---
  `f` verfehlt die 1 bei geraden Zahlen. `h` bleibt bei 0 hängen und läuft bei negativen Zahlen nach unten weg. Aussagen 1 und 3 sind richtig.
```

```aufgabe
id: rv-tb-rf-implementierungen
titel: Vier Implementierungen von verdopple
niveau: 2
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Implementierungen auf Rückgabe und Terminierung prüfen), Inhalt neu
angabe: |
  `verdopple(String s)` soll einen String liefern, in dem jedes Zeichen von `s` doppelt steht. Beispiel:
  `verdopple("abc")` liefert `"aabbcc"`. Vorbedingung: `s != null`.

  Beurteile, ob die Implementierung für alle erlaubten Eingaben endet **und** das richtige Ergebnis liefert.

  **I1**
  ```java
  if (s.isEmpty()) { return ""; }
  return "" + s.charAt(0) + s.charAt(0) + verdopple(s.substring(1));
  ```

  **I2**
  ```java
  if (s.isEmpty()) { return ""; }
  return s.charAt(0) + s.charAt(0) + verdopple(s.substring(1));
  ```

  **I3**
  ```java
  if (s.length() <= 1) { return s + s; }
  return verdopple(s.substring(0, 1)) + verdopple(s.substring(1));
  ```

  **I4**
  ```java
  if (s.isEmpty()) { return s; }
  return verdopple(s.substring(1)) + s.charAt(0) + s.charAt(0);
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: I1 ist richtig.
        richtig: true
        erklaerung: '`"" + c + c` verkettet die Zeichen, der Rest steht dahinter. Basisfall und Fortschritt stimmen.'
      - text: I2 ist richtig.
        richtig: false
        erklaerung: '`s.charAt(0) + s.charAt(0)` addiert zwei `char` als Zahlen. Aus `"abc"` wird `"194196198"`.'
      - text: I3 ist richtig.
        richtig: true
        erklaerung: 'Für `""` liefert `s + s` wieder `""`. Für längere Strings sind beide Teile kürzer. Die Teile werden in der richtigen Reihenfolge verbunden.'
      - text: I4 ist richtig.
        richtig: false
        erklaerung: Das verdoppelte erste Zeichen steht hinter dem Rest. Aus `"abc"` wird `"ccbbaa"`.
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Rechne I2 für `"a"` aus. Was ergibt `''a'' + ''a''`, wenn links kein String steht?'
      - wert: [r, f, f, f]
        meldung: 'Prüfe I3 mit `""`, `"a"` und `"ab"`. Der Basisfall `length() <= 1` deckt auch den leeren String ab.'
hinweise:
  - Teste jede Implementierung mit `""`, `"a"` und `"ab"`.
  - Achte auf zwei Fallen aus [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings), nämlich `char + char` und die Stelle des eigenen Stücks.
loesung: |
  **Ansatz:** Jede Implementierung mit kleinen Strings durchrechnen und auf Terminierung prüfen.
  ---
  I1: `""` liefert `""`, `"ab"` liefert `"aabb"`. Richtig. I2: Zwei `char` werden zu einer Zahl addiert, `'a' + 'a' = 194`. Falsch.
  ---
  I3: Basisfall für Länge 0 und 1, sonst zwei kürzere Teile. Das ist eine verzweigte Rekursion mit richtigem Ergebnis. I4 dreht die Reihenfolge um. Falsch.
```

```aufgabe
id: rv-tb-zeilen-fortschritt
titel: Wo fehlt der Fortschritt?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Methode soll die Vokale in `s` zählen. Sie endet aber für jeden nicht leeren String mit einem
  `StackOverflowError`. Markiere die Zeile, die den Fehler verursacht.
teile:
  - typ: zeilen
    code: |
      public static int vokale(String s) {
          if (s.isEmpty()) {
              return 0;
          }
          char c = s.charAt(0);
          int rest = vokale(s.substring(0));
          if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
              return rest + 1;
          }
          return rest;
      }
    loesung: [6]
    fehler:
      - wert: [2]
        meldung: Der Basisfall ist richtig. Ein leerer String hat keine Vokale. Das Problem ist, dass er nie erreicht wird.
      - wert: [7]
        meldung: Die Bedingung prüft nur, ob `c` ein Vokal ist. Sie entscheidet nicht darüber, ob die Rekursion endet.
hinweise:
  - Ein `StackOverflowError` bei vorhandenem Basisfall bedeutet meist, dass das Argument nicht kleiner wird.
  - Was liefert `s.substring(0)`?
loesung: |
  **Ansatz:** Den Basisfall gibt es. Also prüfen, ob der Selbstaufruf Fortschritt macht.
  ---
  `s.substring(0)` liefert den ganzen String ab Index 0, also `s` selbst. Der Selbstaufruf bekommt denselben String.
  ---
  Die Reparatur in Zeile 6 ist `vokale(s.substring(1))`. Dann wird der String bei jedem Aufruf um ein Zeichen kürzer.
```

```aufgabe
id: rv-tb-auswahl-exception
titel: Welcher Aufruf stürzt ab?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static boolean pal(String s) {   // Vorbedingung: s != null, s ist nicht leer
      if (s.length() == 1) {
          return true;
      }
      if (s.charAt(0) != s.charAt(s.length() - 1)) {
          return false;
      }
      return pal(s.substring(1, s.length() - 1));
  }
  ```

  Welcher Aufruf endet mit einer `StringIndexOutOfBoundsException`?
teile:
  - typ: auswahl
    optionen: ['`pal("radar")`', '`pal("anna")`', '`pal("ab")`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Bei `"radar"` geht es über `"ada"` zu `"d"`. Die Länge 1 erfüllt den Basisfall.'
      - wert: 2
        meldung: 'Bei `"ab"` sind `a` und `b` verschieden. Die Methode liefert sofort `false`, ohne Selbstaufruf.'
hinweise:
  - Verfolge die Strings. Bei jedem Selbstaufruf fallen das erste und das letzte Zeichen weg.
  - Was passiert, wenn der String eine gerade Länge hat?
loesung: |
  **Ansatz:** Bei jedem Aufruf wird der String um zwei Zeichen kürzer. Der Basisfall prüft nur die Länge 1.
  ---
  `"anna"` wird zu `"nn"` und dann zum leeren String. Für `""` ist `length() == 1` falsch, und `charAt(0)` greift ins Leere.
  ---
  Bei ungerader Länge wie `"radar"` erreicht man genau die Länge 1. Die Reparatur ist der Basisfall `s.length() <= 1`.
```

```aufgabe
id: rv-tb-text-ggt
titel: Warum endet der ggT durch Abziehen?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist die Methode aus [11.2 Endrekursion](/lernen/ep1/rekursion-vertieft/endrekursion-das-ergebnis-auf-dem-hinweg-berechnen):

  ```java
  public static int ggt(int a, int b) {
      if (a == b) {
          return a;
      }
      if (a > b) {
          return ggt(a - b, b);
      }
      return ggt(a, b - a);
  }
  ```

  a) Begründe, warum die Methode für alle `a > 0` und `b > 0` endet. Nenne eine Größe, die bei jedem Aufruf kleiner wird.

  b) Was passiert bei `ggt(5, 0)`? Erkläre es mit den Begriffen Fundiertheit und Fortschritt.
teile:
  - typ: text
    muster: |
      a) Ich betrachte die Summe a + b. Bei jedem Selbstaufruf wird die größere Zahl durch die Differenz ersetzt, also
      wird a + b um die kleinere Zahl kleiner. Weil beide Zahlen positiv sind und positiv bleiben (die Differenz einer
      größeren und einer kleineren positiven Zahl ist positiv), sinkt a + b bei jedem Aufruf um mindestens 1. Eine
      positive ganze Zahl kann nur endlich oft kleiner werden. Spätestens wenn a == b gilt, greift der Basisfall.
      b) ggt(5, 0): Es ist a > b, also folgt ggt(5 - 0, 0), das ist wieder ggt(5, 0). Die Methode ist fundiert, aber
      sie macht keinen Fortschritt, weil die Differenz mit 0 nichts verändert. Sie ruft sich endlos auf und endet mit
      einem StackOverflowError. Deshalb verlangt die Vorbedingung a > 0 und b > 0.
hinweise:
  - Betrachte die Summe `a + b`. Um wie viel wird sie bei einem Selbstaufruf kleiner?
  - Setze für b) die Werte ein und schreib den nächsten Aufruf hin.
loesung: |
  **Ansatz:** Für die Terminierung eine Größe suchen, die bei jedem Schritt um mindestens 1 sinkt und nicht unter eine Grenze fallen kann.
  ---
  a) Die Summe `a + b` sinkt bei jedem Aufruf um die kleinere der beiden Zahlen, also um mindestens 1. Beide Zahlen bleiben positiv. Darum kann das nur endlich oft passieren.
  ---
  b) `ggt(5, 0)` ruft `ggt(5, 0)` auf. Der Basisfall existiert, wird aber nie erreicht. Es fehlt der Fortschritt, weil das Abziehen von 0 nichts ändert.
  ---
  Ergebnis: Die Vorbedingung `a > 0, b > 0` ist nötig. Mit ihr endet die Methode immer.
```

```aufgabe
id: rv-tb-code-reparieren
titel: Eine Binärdarstellung reparieren
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Methode `binaer(int n)` soll die Binärdarstellung von `n` als String liefern, also die Darstellung nur mit den
  Ziffern 0 und 1. Beispiele: `binaer(6)` liefert `"110"`, `binaer(1)` liefert `"1"` und `binaer(0)` liefert `"0"`.
  Vorbedingung: `n >= 0`.

  Die Vorlage enthält eine Fassung, die für `binaer(0)` mit `StackOverflowError` abbricht. Repariere sie. Die Methode
  muss rekursiv bleiben und darf keine Schleife enthalten.
teile:
  - typ: code
    vorlage: |
      public class Binaer {
          public static String binaer(int n) {
              if (n == 1) {
                  return "1";
              }
              return binaer(n / 2) + n % 2;
          }
      }
    musterloesung: |
      public class Binaer {
          public static String binaer(int n) {
              if (n <= 1) {
                  return "" + n;
              }
              return binaer(n / 2) + n % 2;
          }
      }
    tests:
      - { aufruf: "binaer(6)", erwartet: "\"110\"" }
      - { aufruf: "binaer(1)", erwartet: "\"1\"" }
      - { aufruf: "binaer(0)", erwartet: "\"0\"", beschreibung: "die Zahl 0" }
      - { aufruf: "binaer(13)", erwartet: "\"1101\"", versteckt: true }
      - { aufruf: "binaer(1024)", erwartet: "\"10000000000\"", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [binaer], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 3, meldung: "Für 0 ist `n == 1` falsch, und `0 / 2` ist wieder 0. Der Basisfall muss auch die 0 abdecken und dann `\"0\"` liefern." }
      - { wert: 1, meldung: "Die letzte Binärziffer ist `n % 2`, die übrigen Ziffern liefert `binaer(n / 2)`. Die übrigen gehören nach vorne." }
hinweise:
  - Verfolge `binaer(0)`. Welcher Wert wird übergeben, und greift der Basisfall?
  - Ein Basisfall `n <= 1` deckt 0 und 1 ab. In beiden Fällen ist die Binärdarstellung die Ziffer selbst.
loesung: |
  **Ansatz:** Fundiertheit prüfen. Für `n = 0` muss ein Basisfall greifen, denn `0 / 2` ist wieder 0 und macht keinen Fortschritt.
  ---
  ```java
  if (n <= 1) {
      return "" + n;
  }
  return binaer(n / 2) + n % 2;
  ```
  ---
  `"" + n` macht aus der Zahl einen String. In der letzten Zeile ist `binaer(n / 2)` ein String, darum wird `n % 2` angehängt und nicht addiert.
  ---
  Probe: `binaer(6)` ist `binaer(3) + 0`, und `binaer(3)` ist `binaer(1) + 1 = "11"`. Ergebnis `"110"`. `binaer(0)` liefert jetzt `"0"`.
```

```reflexion
frage: Warum genügt es im Quiz nicht, eine Implementierung mit den Beispielen aus der Angabe zu testen?
antwort: |
  Die Beispiele zeigen nur einige erlaubte Eingaben. Die Frage verlangt aber, dass die Implementierung für **alle**
  erlaubten Eingaben endet und das Richtige liefert. Typische Fehler stecken gerade in den Randfällen, die selten als
  Beispiel dastehen: der leere String, die Zahl 0, eine gerade statt einer ungeraden Länge. Deshalb prüfe ich zusätzlich
  das kleinste erlaubte Argument und überlege mit Fundiertheit und Fortschritt, ob der Basisfall immer erreicht wird.
```

## Rekursive Grafik: Fraktale mit CodeDraw

```aufgabe
id: rv-gr-check-oben
titel: Was liegt oben?
niveau: 1
art: check
angabe: |
  In [1.8 CodeDraw einrichten](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild) hast du die ersten Formen
  gezeichnet. Ein Programm zeichnet zuerst ein großes rotes Quadrat und danach ein kleines blaues Quadrat in dessen Mitte.
  Was siehst du?
teile:
  - typ: auswahl
    optionen:
      - ein rotes Quadrat mit einem blauen Quadrat in der Mitte
      - nur das rote Quadrat, weil es größer ist
      - nur das blaue Quadrat
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Größe entscheidet nicht, was oben liegt. Was später gezeichnet wird, malt über das Frühere.
      - wert: 2
        meldung: Das kleine blaue Quadrat überdeckt nur die Mitte. Rundherum bleibt vom roten Quadrat ein Rahmen sichtbar.
loesung: |
  CodeDraw malt jede Form über das, was schon da ist. Was später gezeichnet wird, liegt oben.
  ---
  Das blaue Quadrat liegt also auf dem roten. Weil es kleiner ist, bleibt außen ein roter Rahmen sichtbar.
```

Ein **Fraktal** ist eine Figur, die aus verkleinerten Kopien ihrer selbst besteht. In der Natur findet man so etwas bei
Farnblättern, bei Romanesco-Kohl oder bei Flussdeltas. Ein Ast eines Farns sieht aus wie ein kleiner Farn. Dessen Äste
sehen wieder aus wie noch kleinere Farne.

Für die Rekursion ist das ideal. Eine Methode zeichnet **eine** Form und ruft sich dann für die kleineren Kopien selbst
auf. Damit das endet, braucht sie einen Basisfall. Meist lautet er: Ist die Form kleiner als eine Grenze, zeichne
nichts mehr. Die Folien der Vorlesung nennen das einen **impliziten Basisfall**, also einen Basisfall, der nicht
ausdrücklich hingeschrieben ist: Es gibt kein eigenes Ergebnis, die Methode hört einfach auf. Du kennst ihn schon von
den Türmen von Hanoi aus [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).

Weil eine Zeichenmethode etwas in ein bestimmtes Fenster malen soll, bekommt sie das `CodeDraw`-Objekt als Parameter.
Ohne diesen Parameter hätte sie keinen Zugriff auf das Fenster. Die Folien nennen als Alternative eine
**Klassenvariable** für das Fenster, also eine Variable außerhalb aller Methoden. Auf Blatt 3 sind solche „globalen
Variablen“ aber verboten.

:::beispiel[Eine Treppe aus Quadraten, linear]
```java
import codedraw.*;

public class Stufen {
    public static void treppe(CodeDraw cd, int x, int y, int s) {
        if (s < 10) {
            return;
        }
        cd.fillSquare(x, y, s);
        treppe(cd, x + s, y + s, s / 2);
    }

    public static void main(String[] args) {
        CodeDraw cd = new CodeDraw(400, 400);
        cd.setColor(Palette.BLUE);
        treppe(cd, 0, 0, 160);
        cd.show();
    }
}
```

- `import codedraw.*;` macht die Klassen `CodeDraw` und `Palette` verfügbar.
- `treppe` bekommt das Fenster `cd`, die linke obere Ecke `(x, y)` und die Seitenlänge `s` des nächsten Quadrats.
- `if (s < 10) { return; }` ist der implizite Basisfall. Ein Quadrat unter 10 Pixeln wird nicht mehr gezeichnet.
- `cd.fillSquare(x, y, s);` zeichnet ein ausgefülltes Quadrat.
- Der Selbstaufruf setzt das nächste Quadrat an die rechte untere Ecke, also nach `(x + s, y + s)`, mit halber Seite.

Die Quadrate haben die Ecken und Seiten (0, 0, 160), (160, 160, 80), (240, 240, 40), (280, 280, 20) und
(300, 300, 10). Danach wäre die Seite 5, und der Basisfall greift. Es entstehen 5 Quadrate bei 6 Aufrufen. Jeder
Aufruf führt höchstens einen Selbstaufruf aus, die Rekursion ist linear.
:::

```aufgabe
id: rv-gr-trace-treppe
titel: Die Quadrate einer Treppe
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Mit der Methode `treppe` aus dem Beispiel ruft `main` den Aufruf `treppe(cd, 20, 20, 120)` auf. Trage für jedes
  **gezeichnete** Quadrat die linke obere Ecke `x`, `y` und die Seite `s` ein, in der Reihenfolge des Zeichnens.
teile:
  - typ: trace
    spalten: [x, y, s]
    zeilen: [1. Quadrat, 2. Quadrat, 3. Quadrat, 4. Quadrat]
    vorgabe: 1
    loesung: [[20, 20, 120], [140, 140, 60], [200, 200, 30], [230, 230, 15]]
    fehler:
      - wert: ["20", "20", "120", "80", "80", "60", "110", "110", "30", "125", "125", "15"]
        meldung: Das nächste Quadrat beginnt an der rechten unteren Ecke des alten. Dazu wird die **alte** Seite `s` addiert, nicht die neue.
      - wert: ["20", "20", "120", "140", "20", "60", "200", "20", "30", "230", "20", "15"]
        meldung: 'Der Selbstaufruf verschiebt auch `y`: Er übergibt `y + s`, nicht `y`. Die Quadrate wandern schräg nach rechts unten.'
hinweise:
  - 'Neue Ecke: alte Ecke plus alte Seite. Neue Seite: alte Seite geteilt durch 2.'
  - Nach dem 4. Quadrat ist die Seite `15 / 2 = 7`. Greift dann der Basisfall?
loesung: |
  **Ansatz:** Den Selbstaufruf `treppe(cd, x + s, y + s, s / 2)` Schritt für Schritt anwenden, bis `s < 10` gilt.
  ---
  (20, 20, 120), dann (140, 140, 60), dann (200, 200, 30), dann (230, 230, 15).
  ---
  Der nächste Aufruf hätte `s = 7`. Der Basisfall greift, es wird nichts mehr gezeichnet. Es entstehen 4 Quadrate.
```

Interessanter wird es, wenn sich die Methode **mehrmals** aufruft. Dann entsteht aus einer Form ein ganzer Baum von
Formen.

:::beispiel[Ein Kreisfraktal, verzweigt]
```java
public static void kreise(CodeDraw cd, double x, double y, double r) {
    if (r < 8) {
        return;
    }
    cd.drawCircle(x, y, r);
    kreise(cd, x - r, y, r / 2);
    kreise(cd, x + r, y, r / 2);
}
```

`main` ruft `kreise(cd, 200, 200, 64)` in einem Fenster mit 400 mal 400 Pixeln auf.

- `drawCircle(x, y, r)` zeichnet den Umriss eines Kreises mit Mittelpunkt `(x, y)` und Radius `r`.
- Der erste Selbstaufruf setzt einen halb so großen Kreis auf den linken Rand des Kreises, der zweite auf den rechten.
- Die Parameter sind `double`. So bleibt `r / 2` auch bei ungeraden Radien genau.

Ebene für Ebene: Ein Kreis mit Radius 64, zwei mit 32, vier mit 16 und acht mit 8. Das sind `1 + 2 + 4 + 8 = 15`
Kreise. Die 16 Aufrufe mit Radius 4 zeichnen nichts mehr. Zusammen gibt es 31 Aufrufe.
:::

```plot
x: [70, 330]
y: [130, 270]
gleich: true
hoehe: 240
achsen: { x: "x in Pixel", y: "y in Pixel" }
kurven:
  - { x: "200 + 64*cos(t)", y: "200 + 64*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "136 + 32*cos(t)", y: "200 + 32*sin(t)", t: [0, "2*pi"], farbe: 1 }
  - { x: "264 + 32*cos(t)", y: "200 + 32*sin(t)", t: [0, "2*pi"], farbe: 1 }
  - { x: "104 + 16*cos(t)", y: "200 + 16*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "168 + 16*cos(t)", y: "200 + 16*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "232 + 16*cos(t)", y: "200 + 16*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "296 + 16*cos(t)", y: "200 + 16*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "88 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "120 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "152 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "184 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "216 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "248 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "280 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "312 + 8*cos(t)", y: "200 + 8*sin(t)", t: [0, "2*pi"], farbe: 3 }
beschriftung: "Das Kreisfraktal von kreise(cd, 200, 200, 64): ein Kreis mit Radius 64 (blau), zwei mit 32 (orange), vier mit 16 (grün) und acht mit 8 (violett), alle mit Mittelpunkt auf der Linie y = 200."
```

```aufgabe
id: rv-gr-gefuehrt
titel: Dreiecke auf jeder Ebene zählen
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Methode `drei(cd, x, y, s)` zeichnet ein Dreieck mit Seitenlänge `s`, wenn `s >= 10` ist. Danach ruft sie sich
  **dreimal** mit der Seitenlänge `s / 2` auf. Bei `s < 10` zeichnet sie nichts und endet. `main` ruft sie mit
  `s = 160` auf. Wie viele Dreiecke werden insgesamt gezeichnet? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "1 + 3 + 9 + 27 + 81"
    fehler:
      - wert: "81"
        meldung: 81 Dreiecke liegen nur auf der untersten Ebene. Dazu kommen alle größeren Dreiecke darüber.
      - wert: "364"
        meldung: 364 ist die Zahl der Aufrufe. Die 243 Aufrufe mit `s = 5` zeichnen aber nichts.
gefuehrt:
  - text: Welche Seitenlängen kommen vor, für die noch gezeichnet wird?
    teil:
      typ: auswahl
      optionen: ['160, 80, 40, 20, 10', '160, 80, 40, 20', '160, 80, 40, 20, 10, 5']
      richtig: [0]
    erklaerung: Bei 10 gilt noch `s >= 10`. Erst bei 5 wird nichts mehr gezeichnet.
  - text: Wie viele Dreiecke haben die Seitenlänge 80?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Der eine Aufruf mit 160 ruft sich dreimal mit 80 auf.
  - text: Wie viele Dreiecke haben die kleinste Seitenlänge 10?
    teil: { typ: zahl, loesung: "3^4" }
    erklaerung: Von Ebene zu Ebene verdreifacht sich die Zahl. Bei 160, 80, 40, 20, 10 sind es 1, 3, 9, 27, 81.
  - text: Wie viele Aufrufe mit `s = 5` gibt es, die nichts zeichnen?
    teil: { typ: zahl, loesung: "3 * 81" }
    erklaerung: Jeder der 81 kleinsten Aufrufe ruft sich noch dreimal auf. Das sind 243 Aufrufe, die sofort enden.
hinweise:
  - Schreib die Seitenlängen Ebene für Ebene auf und daneben die Zahl der Aufrufe auf dieser Ebene.
loesung: |
  **Ansatz:** Ebene für Ebene zählen. Auf jeder Ebene gibt es dreimal so viele Aufrufe wie auf der Ebene darüber.
  ---
  Gezeichnet wird bei 160, 80, 40, 20 und 10: `1 + 3 + 9 + 27 + 81 = 121` Dreiecke. Dazu kommen 243 Aufrufe mit `s = 5`, zusammen also 364 Aufrufe.
```

Bei ausgefüllten Formen kommt eine Frage hinzu, die es bei Umrissen nicht gibt: **Was liegt oben?** Was zuletzt
gezeichnet wird, malt über das Frühere. In einer rekursiven Zeichenmethode bestimmt deshalb die **Stelle** des
Zeichenbefehls, welche Formen oben liegen. Das ist dieselbe Regel wie bei den Ausgaben in
[11.3 Der Aufrufbaum](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen).

:::beispiel[Eine Zielscheibe: zuerst groß, dann klein]
```java
public static void ziel(CodeDraw cd, int x, int y, int s, boolean rot) {
    if (s < 20) {
        return;
    }
    if (rot) {
        cd.setColor(Palette.RED);
    } else {
        cd.setColor(Palette.WHITE);
    }
    cd.fillSquare(x - s / 2, y - s / 2, s);
    ziel(cd, x, y, s - 40, !rot);
}
```

`main` ruft `ziel(cd, 200, 200, 200, true)` auf.

- `(x, y)` ist hier der **Mittelpunkt**. Weil `fillSquare` die linke obere Ecke braucht, zieht man die halbe Seite ab.
- `rot` steuert die Farbe. Der Selbstaufruf übergibt `!rot`, gelesen „nicht rot“. So wechselt die Farbe von Ebene zu
  Ebene: rot, weiß, rot und so weiter.
- Das Quadrat wird **vor** dem Selbstaufruf gezeichnet, also auf dem Hinweg. Zuerst entsteht das größte Quadrat, dann
  die kleineren. Jedes kleinere liegt oben.

Es entstehen 5 Quadrate mit den Seiten 200, 160, 120, 80 und 40, abwechselnd rot und weiß. Man sieht eine Zielscheibe.
Stünde `fillSquare` **hinter** dem Selbstaufruf, käme zuerst das kleinste Quadrat und zuletzt das größte. Das große rote
Quadrat würde dann alle anderen verdecken.
:::

:::merke[Die Zeichenreihenfolge in einer Rekursion]
1. Was **zuletzt** gezeichnet wird, liegt **oben**.
2. Zeichenbefehl **vor** den Selbstaufrufen: Die große Form entsteht zuerst. Die kleineren liegen oben.
3. Zeichenbefehl **nach** den Selbstaufrufen: Die kleinen Formen entstehen zuerst. Die große liegt oben und überdeckt sie.
4. Farbwechsel pro Ebene: einen `boolean`-Parameter mit `!` umgekehrt weitergeben.
:::

```aufgabe
id: rv-gr-auswahl-reihenfolge
titel: Wohin gehört der Zeichenbefehl?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine rekursive Methode zeichnet ein gefülltes Quadrat und ruft sich viermal für kleinere Quadrate auf. Die Angabe
  verlangt: **Die größeren Quadrate sollen die kleineren überdecken.** Wo muss `fillSquare` stehen?
teile:
  - typ: auswahl
    optionen:
      - nach den vier Selbstaufrufen
      - vor den vier Selbstaufrufen
      - Die Stelle ist egal, weil alle Quadrate gezeichnet werden.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dann entsteht das große Quadrat zuerst, und die kleinen werden darüber gemalt. Sie lägen oben.
      - wert: 2
        meldung: Die Stelle entscheidet über die Reihenfolge, und was später kommt, liegt oben. Bei gefüllten Formen sieht man den Unterschied.
hinweise:
  - Was zuletzt gezeichnet wird, liegt oben. Wann wird das große Quadrat gezeichnet, wenn der Befehl hinter den Aufrufen steht?
loesung: |
  **Ansatz:** Was zuletzt gezeichnet wird, liegt oben. Das große Quadrat muss also nach allen kleineren entstehen.
  ---
  Steht `fillSquare` hinter den Selbstaufrufen, sind beim Zeichnen alle kleineren Quadrate schon fertig. Das große malt über sie.
```

:::achtung[Groß soll oben liegen, gezeichnet wird aber zuerst]
Eine Methode `fliese(cd, x, y, s, gelb)` zeichnet um den Mittelpunkt `(x, y)` ein Quadrat mit Seite `s`. Dazu ruft
sie sich viermal für halb so große Quadrate auf. Der `boolean`-Parameter `gelb` steuert die Farbe. Die Angabe
verlangt, dass größere Quadrate die kleineren überdecken. Eine typische falsche Lösung beginnt so:

```java
cd.fillSquare(x - s / 2, y - s / 2, s);      // falsch: auf dem Hinweg
fliese(cd, x - s / 2, y, s / 2, !gelb);
fliese(cd, x + s / 2, y, s / 2, !gelb);
// ... weitere Selbstaufrufe
```

Das große Quadrat entsteht hier zuerst. Die kleinen werden danach darübergemalt und liegen oben. Man sieht das falsche
Muster. Die Reparatur: Der Zeichenbefehl wandert hinter den letzten Selbstaufruf, und mit ihm der `setColor`-Befehl,
der seine Farbe festlegt. Dann ist jedes Quadrat erst dran, wenn alle kleineren in seinem Teilbaum fertig sind.
:::

:::achtung[Die Farbe wechselt nicht]
Im Selbstaufruf steht `rot` statt `!rot`:

```java
ziel(cd, x, y, s - 40, rot);     // falsch: Farbe wird nicht umgedreht
```

Jetzt bekommt jeder Aufruf dieselbe Farbe wie der erste. Alle Quadrate sind rot, die Zielscheibe ist eine einzige rote
Fläche. Die Reparatur ist `!rot`. Dann wechselt die Farbe mit jeder Ebene.
:::

```aufgabe
id: rv-gr-zahl-kreise
titel: Wie viele Kreise?
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode `kreise` aus dem Beispiel wird mit einer anderen Grenze verwendet: Der Basisfall lautet `if (r < 15)`.
  `main` ruft `kreise(cd, 300, 300, 80)` auf. Wie viele Kreise werden gezeichnet?
teile:
  - typ: zahl
    loesung: "1 + 2 + 4"
    fehler:
      - wert: "15"
        meldung: Der Radius 10 ist kleiner als 15. Auf dieser Ebene wird nichts mehr gezeichnet.
      - wert: "3"
        meldung: 3 ist die Zahl der Ebenen. Auf jeder Ebene verdoppelt sich aber die Zahl der Kreise.
hinweise:
  - 'Radien Ebene für Ebene: 80, 40, 20, 10. Für welche gilt noch `r >= 15`?'
loesung: |
  **Ansatz:** Ebenen bestimmen, auf denen gezeichnet wird, und auf jeder Ebene die Zahl der Kreise verdoppeln.
  ---
  Gezeichnet wird bei Radius 80, 40 und 20. Das sind `1 + 2 + 4 = 7` Kreise. Die Aufrufe mit Radius 10 enden sofort.
```

```aufgabe
id: rv-gr-zahl-zusatzfragen
titel: Die Zusatzfragen zum Fraktal
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: Zusatzfragen zu Aufgabenblatt 3, Aufgabe 5 (WS 2021), mit anderen Zahlen
angabe: |
  Eine Methode zeichnet ein Quadrat mit Seite `s`, wenn `s >= 20` ist, und ruft sich dann **viermal** mit `s / 2` auf.
  Bei `s < 20` zeichnet sie nichts und endet. `main` ruft sie einmal mit `s = 200` auf.

  a) Wie oft wird die Methode insgesamt aufgerufen?

  b) Wie viele Quadrate werden auf der letzten Ebene gezeichnet, also mit der kleinsten Seite?
teile:
  - typ: zahl
    label: a) Aufrufe
    loesung: "1 + 4 + 16 + 64 + 256"
    fehler:
      - wert: "85"
        meldung: 85 ist die Zahl der gezeichneten Quadrate. Gefragt sind alle Aufrufe, auch die 256 mit `s = 12`, die nichts zeichnen.
      - wert: "1365"
        meldung: 'Rechne die Seiten nach: 200, 100, 50, 25 und dann 12. Bei 12 endet es, es gibt keine weitere Ebene darunter.'
  - typ: zahl
    label: b) letzte Ebene
    loesung: "4^3"
    fehler:
      - wert: "256"
        meldung: Auf der Ebene mit `s = 12` wird nicht mehr gezeichnet. Die kleinste gezeichnete Seite ist 25.
      - wert: "16"
        meldung: 16 Aufrufe gibt es auf der Ebene mit Seite 50. Gezeichnet wird aber noch eine Ebene tiefer, bei Seite 25.
hinweise:
  - 'Seiten Ebene für Ebene: 200, 100, 50, 25, 12. Bei welcher wird zuletzt gezeichnet?'
  - Auf jeder Ebene gibt es viermal so viele Aufrufe wie auf der Ebene darüber.
loesung: |
  **Ansatz:** Ebenen auflisten. Pro Ebene vervierfacht sich die Zahl der Aufrufe.
  ---
  Ebenen: 200 (1 Aufruf), 100 (4), 50 (16), 25 (64), 12 (256). Gezeichnet wird bis 25.
  ---
  a) Aufrufe: `1 + 4 + 16 + 64 + 256 = 341`. b) Auf der letzten Ebene mit Seite 25 entstehen 64 Quadrate.
```

```aufgabe
id: rv-gr-ausgabe-protokoll
titel: Ein Fraktal als Protokoll
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Statt zu zeichnen, gibt diese Methode die Position und Größe jedes Quadrats aus, in dem Moment, in dem es gezeichnet
  würde. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Protokoll {
          public static void q(int x, int s) {
              if (s < 10) {
                  return;
              }
              q(x - s / 2, s / 2);
              System.out.println(x + " " + s);
              q(x + s / 2, s / 2);
          }

          public static void main(String[] args) {
              q(100, 40);
          }
      }
    loesung: |
      70 10
      80 20
      90 10
      100 40
      110 10
      120 20
      130 10
    fehler:
      - wert: "100 40\n80 20\n70 10\n90 10\n120 20\n110 10\n130 10"
        meldung: Die Ausgabe steht **zwischen** den Selbstaufrufen, nicht davor. Ein Aufruf gibt erst aus, wenn sein linker Teilbaum fertig ist.
      - wert: "70 10\n80 20\n90 10\n100 40"
        meldung: Nach `100 40` folgt noch der rechte Teilbaum `q(120, 20)` mit eigenen Ausgaben.
hinweise:
  - Zeichne den Aufrufbaum mit `(x, s)` in jedem Knoten. Aufrufe mit `s = 5` geben nichts aus.
  - Die Ausgabe steht zwischen den Aufrufen. Jeder Knoten gibt aus, wenn sein linker Teilbaum fertig ist.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen und Tiefe zuerst durchlaufen. Ausgabe zwischen den Aufrufen.
  ---
  Wurzel (100, 40) mit den Kindern (80, 20) und (120, 20). Darunter (70, 10), (90, 10), (110, 10) und (130, 10). Deren Kinder haben `s = 5` und geben nichts aus.
  ---
  Reihenfolge: linker Teilbaum, Knoten, rechter Teilbaum. Das ergibt die Zeilen von `70 10` bis `130 10`. Die x-Werte erscheinen aufsteigend.
```

```aufgabe
id: rv-gr-code-kette
titel: Eine Kette kleiner werdender Kreise
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Implementiere `void kette(CodeDraw cd, int x, int y, int r)` **rekursiv** und ohne Schleifen. Die Methode zeichnet
  einen ausgefüllten Kreis mit Mittelpunkt `(x, y)` und Radius `r`. Rechts daneben folgt ein Kreis mit halbem Radius
  `r / 2`, dessen Mittelpunkt bei `x + r + r / 2` liegt. So berühren sich die beiden Kreise. Das geht weiter, solange
  der Radius mindestens 5 ist. Die Farbe setzt der Aufrufer vorher.

  Beispiel: `kette(cd, 40, 200, 40)` zeichnet Kreise mit Mittelpunkt (40, 200) und Radius 40, (100, 200) und 20,
  (130, 200) und 10 sowie (145, 200) und 5.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Kette {
          public static void kette(CodeDraw cd, int x, int y, int r) {
              // TODO
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setColor(Palette.BLUE);
              kette(cd, 40, 200, 40);
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Kette {
          public static void kette(CodeDraw cd, int x, int y, int r) {
              if (r < 5) {
                  return;
              }
              cd.fillCircle(x, y, r);
              kette(cd, x + r + r / 2, y, r / 2);
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setColor(Palette.BLUE);
              kette(cd, 40, 200, 40);
              cd.show();
          }
      }
    tests:
      - { aufruf: "kette(new CodeDraw(400, 400), 40, 200, 40)", zeichnung: true, beschreibung: "vier Kreise ab (40, 200) mit Radius 40" }
      - { aufruf: "kette(new CodeDraw(400, 400), 100, 100, 6)", zeichnung: true, beschreibung: "nur ein Kreis, denn 6 / 2 = 3 ist zu klein" }
      - { aufruf: "kette(new CodeDraw(400, 400), 60, 300, 64)", zeichnung: true, versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [kette], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Bei Radius 6 wird noch gezeichnet, denn 6 ist mindestens 5. Der nächste Radius ist `6 / 2 = 3`, dort ist Schluss. Prüfe deinen Basisfall." }
      - { wert: 1, meldung: "Vergleiche die Mittelpunkte. Der nächste liegt um den alten Radius plus den neuen Radius weiter rechts, also bei `x + r + r / 2`." }
hinweise:
  - Basisfall ist `r < 5`. Dann wird nichts gezeichnet.
  - Zeichne mit `fillCircle(x, y, r)` und rufe dich dann mit dem neuen Mittelpunkt und `r / 2` auf.
loesung: |
  **Ansatz:** Lineare Grafik-Rekursion wie die Treppe. Ein Kreis pro Aufruf, dann ein Selbstaufruf mit kleinerem Radius.
  ---
  ```java
  if (r < 5) {
      return;
  }
  cd.fillCircle(x, y, r);
  kette(cd, x + r + r / 2, y, r / 2);
  ```
  ---
  Der Abstand zweier berührender Kreise ist die Summe ihrer Radien. Darum liegt der neue Mittelpunkt bei `x + r + r / 2`.
  ---
  Probe für `(40, 200, 40)`: Mittelpunkte 40, 100, 130 und 145 mit den Radien 40, 20, 10 und 5. Danach wäre der Radius 2.
```

```aufgabe
id: rv-gr-code-kreuz
titel: Ein Fliesenmuster aus Quadraten
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 3, Aufgabe 5 (WS 2021, WS 2023), nachgebaut mit anderer Anordnung und anderen Farben
angabe: |
  Implementiere `void fliese(CodeDraw cd, int x, int y, int s, boolean gelb)` **rekursiv**, ohne Schleifen, ohne
  Hilfsmethoden und ohne Klassenvariablen. Der Kopf bleibt unverändert.

  - `(x, y)` ist der **Mittelpunkt** eines ausgefüllten Quadrats mit Seite `s`.
  - Ist `gelb` wahr, ist das Quadrat gelb (`Palette.YELLOW`), sonst lila (`Palette.PURPLE`). Auf jeder Ebene wechselt die Farbe.
  - Jeder Aufruf erzeugt vier Quadrate mit Seite `s / 2`. Ihre Mittelpunkte liegen um `s / 2` nach links, rechts, oben
    und unten verschoben, **in dieser Reihenfolge**.
  - Die Rekursion läuft, solange `s >= 8` ist.
  - **Jedes Quadrat liegt über allen Quadraten, die kleiner sind als es selbst.**
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Fliese {
          public static void fliese(CodeDraw cd, int x, int y, int s, boolean gelb) {
              // TODO
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              fliese(cd, 200, 200, 96, true);
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Fliese {
          public static void fliese(CodeDraw cd, int x, int y, int s, boolean gelb) {
              if (s < 8) {
                  return;
              }
              fliese(cd, x - s / 2, y, s / 2, !gelb);
              fliese(cd, x + s / 2, y, s / 2, !gelb);
              fliese(cd, x, y - s / 2, s / 2, !gelb);
              fliese(cd, x, y + s / 2, s / 2, !gelb);
              if (gelb) {
                  cd.setColor(Palette.YELLOW);
              } else {
                  cd.setColor(Palette.PURPLE);
              }
              cd.fillSquare(x - s / 2, y - s / 2, s);
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              fliese(cd, 200, 200, 96, true);
              cd.show();
          }
      }
    tests:
      - { aufruf: "fliese(new CodeDraw(400, 400), 200, 200, 8, true)", zeichnung: true, reihenfolge: true, beschreibung: "s = 8: ein einzelnes gelbes Quadrat" }
      - { aufruf: "fliese(new CodeDraw(400, 400), 200, 200, 16, false)", zeichnung: true, reihenfolge: true, beschreibung: "s = 16: vier gelbe, dann ein lila Quadrat" }
      - { aufruf: "fliese(new CodeDraw(400, 400), 200, 200, 64, true)", zeichnung: true, reihenfolge: true, beschreibung: "s = 64: vier Ebenen" }
      - { aufruf: "fliese(new CodeDraw(400, 400), 200, 200, 96, true)", zeichnung: true, reihenfolge: true, versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [fliese], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Bei `s = 8` wird noch genau ein Quadrat gezeichnet. Seine linke obere Ecke ist der Mittelpunkt minus die halbe Seite." }
      - { wert: 2, meldung: "Vergleiche die Reihenfolge: Zuerst müssen die vier kleinen Quadrate entstehen, zuletzt das große. Steht dein `fillSquare` vor den Selbstaufrufen? Prüfe auch, ob die Kinder die umgekehrte Farbe `!gelb` bekommen." }
      - { wert: "keineSchleifen", meldung: "Die vier Selbstaufrufe schreibst du einzeln hin. Eine Schleife über die vier Richtungen ist verboten." }
hinweise:
  - Der Basisfall ist `s < 8`. Danach kommen die vier Selbstaufrufe mit `s / 2` und `!gelb`.
  - Größere sollen oben liegen. Also zeichnest du das eigene Quadrat erst **nach** den vier Selbstaufrufen.
  - '`fillSquare` braucht die linke obere Ecke: `(x - s / 2, y - s / 2)`.'
loesung: |
  **Ansatz:** Verzweigte Grafik-Rekursion mit vier Selbstaufrufen. Weil Größere oben liegen sollen, wird auf dem Rückweg gezeichnet.
  ---
  Basisfall: `if (s < 8) { return; }`. Die vier Selbstaufrufe verschieben den Mittelpunkt um `s / 2` und geben `!gelb` weiter.
  ---
  ```java
  fliese(cd, x - s / 2, y, s / 2, !gelb);
  fliese(cd, x + s / 2, y, s / 2, !gelb);
  fliese(cd, x, y - s / 2, s / 2, !gelb);
  fliese(cd, x, y + s / 2, s / 2, !gelb);
  if (gelb) {
      cd.setColor(Palette.YELLOW);
  } else {
      cd.setColor(Palette.PURPLE);
  }
  cd.fillSquare(x - s / 2, y - s / 2, s);
  ```
  ---
  Die Farbe wird direkt vor `fillSquare` gesetzt. Die Selbstaufrufe ändern die Farbe nämlich zwischendurch.
  ---
  Kontrolle für `s = 96`: Seiten 96, 48, 24 und 12. Das sind `1 + 4 + 16 + 64 = 85` Quadrate, davon 64 auf der letzten Ebene. Mit den 256 Aufrufen mit `s = 6` gibt es 341 Aufrufe.
```

```aufgabe
id: rv-gr-text-variante
titel: Kleine Quadrate nach oben
niveau: 3
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfrage zu Aufgabenblatt 3, Aufgabe 5 (WS 2021), auf das Fliesenmuster übertragen
angabe: |
  Im Feedbackgespräch fragt die Tutorin zu deiner Lösung von `fliese` aus der vorigen Aufgabe „Ein Fliesenmuster aus Quadraten“:

  1. Was musst du ändern, damit die **kleineren** Quadrate oben liegen?
  2. Warum musst du die Farbe direkt vor `fillSquare` setzen und nicht am Anfang der Methode?
  3. Wie viele Quadrate werden bei `fliese(cd, 200, 200, 32, true)` gezeichnet, und wie viele Aufrufe gibt es?

  Beantworte jede Frage in ein bis zwei Sätzen.
teile:
  - typ: text
    muster: |
      1. Ich verschiebe setColor und fillSquare vor die vier Selbstaufrufe. Dann wird jedes Quadrat auf dem Hinweg
         gezeichnet, also vor seinen kleineren Kindern, und die Kinder liegen darüber.
      2. Die Selbstaufrufe setzen ihre eigenen Farben. Wenn ich am Anfang die Farbe setze, ist nach den Aufrufen
         noch die Farbe des zuletzt gezeichneten Kinds eingestellt. Mein Quadrat bekäme dann die falsche Farbe.
      3. Seiten 32, 16 und 8 werden gezeichnet: 1 + 4 + 16 = 21 Quadrate. Dazu kommen 64 Aufrufe mit s = 4, die
         sofort enden. Insgesamt sind es 85 Aufrufe.
hinweise:
  - Für Frage 1 überlege, ob auf dem Hinweg oder auf dem Rückweg gezeichnet werden muss.
  - Für Frage 3 liste die Seiten 32, 16, 8, 4 auf und zähle auf jeder Ebene viermal so viele Aufrufe.
loesung: |
  **Ansatz:** Jede Frage mit einem Begriff des Abschnitts beantworten: Zeichenreihenfolge, Zustand des Fensters, Zählen nach Ebenen.
  ---
  1. Zeichnen vor den Selbstaufrufen, also auf dem Hinweg. Dann entstehen die kleinen Quadrate später und liegen oben.
  ---
  2. `setColor` legt die Zeichenfarbe für alle folgenden Formen fest. Die Kinder stellen zwischendurch ihre eigene Farbe ein. Deshalb setzt jeder Aufruf seine Farbe unmittelbar vor seinem eigenen `fillSquare`.
  ---
  3. Gezeichnet wird bei 32, 16 und 8, das sind `1 + 4 + 16 = 21` Quadrate. Mit den 64 Aufrufen bei `s = 4` gibt es `21 + 64 = 85` Aufrufe.
```

```reflexion
frage: Warum bestimmt bei einer rekursiven Zeichnung die Stelle des Zeichenbefehls, welche Formen oben liegen? Verbinde die Antwort mit dem Hinweg und dem Rückweg aus Kapitel 10.
antwort: |
  CodeDraw malt jede Form über das, was schon da ist. Oben liegt also, was zuletzt gezeichnet wird. Ein Zeichenbefehl vor
  den Selbstaufrufen läuft auf dem Hinweg. Ein Aufruf zeichnet dann seine Form, bevor seine Kinder ihre kleineren Formen
  zeichnen, und die kleineren landen oben. Ein Zeichenbefehl nach den Selbstaufrufen läuft auf dem Rückweg. Dann sind
  alle kleineren Formen im Teilbaum schon gezeichnet, und die große Form malt darüber. Es ist dieselbe Regel wie bei
  Ausgaben vor und nach dem Selbstaufruf, nur dass man das Ergebnis sieht, statt es zu lesen.
```

## Gemischte Wiederholung

Hier sind die Aufgaben gemischt, auch mit Stoff aus den Kapiteln 3 bis 7 und aus Kapitel 10. Im Quiz und auf den
Blättern steht nicht dabei, welche Technik gefragt ist. Bei den ersten beiden Aufgaben musst du nichts rechnen. Du
entscheidest nur, welches Vorgehen passt.

```aufgabe
id: rv-mix-verfahren-zaehlen
titel: Welches Zählverfahren passt?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Entscheide für jede Frage, wie du am schnellsten zählst. Du musst die Zahl nicht ausrechnen.

  a) Wie oft wird `g` bei `g(40)` aufgerufen? `g` hat den Basisfall `n <= 0` und den einzigen Selbstaufruf `g(n - 7)`.

  b) Wie oft wird `h` bei `h(9)` aufgerufen? `h` ruft sich mit `h(n - 1)` und `h(n - 3)` auf, Basisfall `n < 3`.

  c) Wie viele Quadrate zeichnet ein Fraktal mit vier Selbstaufrufen und halber Seite, von Seite 64 bis Seite 8?
teile:
  - typ: auswahl
    label: a)
    optionen: ['Argumente aufschreiben und zählen', 'Zähltabelle von unten', 'Ebenen mit festem Faktor']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Tabelle geht auch, ist hier aber unnötig. Bei einem einzigen Selbstaufruf genügt die Liste der Argumente.
      - wert: 2
        meldung: Es gibt nur einen Selbstaufruf. Die Zahl der Aufrufe wächst nicht von Ebene zu Ebene, jede Ebene hat genau einen.
  - typ: auswahl
    label: b)
    optionen: ['Argumente aufschreiben und zählen', 'Zähltabelle von unten', 'Ebenen mit festem Faktor']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Bei zwei Selbstaufrufen kommen viele Argumente mehrfach vor. Eine Liste wird schnell lang und unübersichtlich.
      - wert: 2
        meldung: Die beiden Teilbäume sind verschieden groß (`n - 1` und `n - 3`). Ein fester Faktor pro Ebene passt dann nicht.
  - typ: auswahl
    label: c)
    optionen: ['Argumente aufschreiben und zählen', 'Zähltabelle von unten', 'Ebenen mit festem Faktor']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Es gibt Hunderte von Aufrufen. Alle Argumente einzeln aufzuschreiben, wäre sehr mühsam.
      - wert: 1
        meldung: Eine Tabelle funktioniert, aber hier sind alle Teilbäume gleich groß. Dann genügt es, pro Ebene mit 4 zu multiplizieren.
hinweise:
  - Frage dich zuerst, wie viele Selbstaufrufe es gibt und ob die Teilbäume gleich groß sind.
loesung: |
  **Ansatz:** Das Verfahren hängt von der Zahl der Selbstaufrufe und von der Größe der Teilbäume ab.
  ---
  a) Ein Selbstaufruf: Argumente 40, 33, … aufschreiben. b) Zwei verschieden große Teilbäume: Zähltabelle.
  ---
  c) Vier gleich große Teilbäume: Ebenen 64, 32, 16, 8 mit 1, 4, 16 und 64 Quadraten, also Faktor 4 pro Ebene.
```

```aufgabe
id: rv-mix-verfahren-art
titel: Welche Art von Rekursion braucht die Aufgabe?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Entscheide für jede Aufgabe, welche Art von Rekursion die natürliche Lösung ist. Du musst nichts programmieren.

  a) „Liefere die Quersumme einer Zahl `n`.“

  b) „Zähle, auf wie viele Arten man von links oben nach rechts unten durch ein Gitter läuft, nur nach rechts und nach unten.“

  c) „Liefere `true`, wenn das Zeichen bei Index `i` in `text` hinter `i` noch einmal vorkommt.“

  Der Kopf lautet `boolean nochmal(String text, int i, int j)`, und `j` wandert mit.
teile:
  - typ: auswahl
    label: a)
    optionen: ['linear', 'verzweigt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Jede Ziffer wird genau einmal betrachtet. Ein Selbstaufruf mit `n / 10` pro Schritt genügt.
  - typ: auswahl
    label: b)
    optionen: ['linear', 'verzweigt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: An jeder Kreuzung gibt es zwei Möglichkeiten, nach rechts oder nach unten. Beide müssen gezählt werden, also braucht man zwei Selbstaufrufe.
  - typ: auswahl
    label: c)
    optionen: ['linear', 'verzweigt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der zweite Index `j` läuft einfach Schritt für Schritt nach hinten. Pro Aufruf gibt es nur einen nächsten Vergleich.
hinweise:
  - Frage dich, ob es bei jedem Schritt **eine** nächste Teilaufgabe gibt oder **mehrere** gleichzeitig.
loesung: |
  **Ansatz:** Linear, wenn jeder Schritt genau eine kleinere Teilaufgabe erzeugt. Verzweigt, wenn ein Schritt mehrere erzeugt, deren Ergebnisse man verbindet.
  ---
  a) Quersumme: linear, ein Selbstaufruf mit `n / 10`. c) Ein wandernder Index: linear.
  ---
  b) Gitterwege: verzweigt, weil man die Wege nach rechts und nach unten addiert.
```

```aufgabe
id: rv-mix-string-haelften
titel: Einen String in Hälften zerlegen
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Methode verwendet `substring` aus [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings), teilt
  den String aber in zwei Hälften.

  ```java
  public static String m(String s) {
      if (s.length() <= 1) {
          return s;
      }
      int h = s.length() / 2;
      return m(s.substring(h)) + m(s.substring(0, h));
  }
  ```

  a) Was liefert `m("abcde")`?

  b) Wie oft wird `m` dabei insgesamt aufgerufen?
teile:
  - typ: ausgabe
    label: a) Das Programm gibt `System.out.println(m("abcde"));` aus.
    code: |
      public class Haelften {
          public static String m(String s) {
              if (s.length() <= 1) {
                  return s;
              }
              int h = s.length() / 2;
              return m(s.substring(h)) + m(s.substring(0, h));
          }

          public static void main(String[] args) {
              System.out.println(m("abcde"));
          }
      }
    codeAnzeigen: false
    loesung: |
      edcba
    fehler:
      - wert: "cdeab"
        meldung: Die beiden Hälften werden nicht nur vertauscht. Jede Hälfte wird selbst wieder rekursiv mit `m` umgebaut.
      - wert: "abcde"
        meldung: Der rechte Teil `s.substring(h)` steht vorne. Dadurch wandert das Ende nach vorne, und das auf jeder Ebene.
  - typ: zahl
    label: b) Aufrufe
    loesung: "9"
    fehler:
      - wert: "5"
        meldung: Das ist die Zahl der Blätter, also der Aufrufe mit einem einzelnen Zeichen. Dazu kommen die vier Aufrufe mit längeren Strings.
      - wert: "3"
        meldung: Auch die Hälften werden weiter zerlegt, bis nur noch ein Zeichen übrig ist. Zeichne den ganzen Baum.
hinweise:
  - '`h` ist die halbe Länge, abgerundet. Für `"abcde"` ist `h = 2`, also werden `"cde"` und `"ab"` weiter zerlegt.'
  - Zeichne den Aufrufbaum bis zu Strings der Länge 1 und setze die Ergebnisse von unten zusammen.
loesung: |
  **Ansatz:** Aufrufbaum mit den Teilstrings zeichnen und die Ergebnisse von den Blättern her zusammensetzen.
  ---
  `m("abcde")` ruft `m("cde")` und `m("ab")` auf. `m("cde")` ruft `m("de")` und `m("c")` auf, `m("de")` ruft `m("e")` und `m("d")` auf. `m("ab")` ruft `m("b")` und `m("a")` auf.
  ---
  Von unten: `m("de") = "ed"`, `m("cde") = "edc"` und `m("ab") = "ba"`. Ergebnis `"edc" + "ba" = "edcba"`. Die Methode dreht den String um.
  ---
  Aufrufe: der Startaufruf, `"cde"`, `"de"`, `"e"`, `"d"`, `"c"`, `"ab"`, `"b"`, `"a"`. Das sind 9.
```

```aufgabe
id: rv-mix-ziffern-umdrehen
titel: Eine Zahl endrekursiv umdrehen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In [7.3 Zahlen umdrehen](/lernen/ep1/ziffern/zahlen-umdrehen-und-aus-ziffern-aufbauen) hast du Zahlen mit einer Schleife
  umgedreht. Hier geschieht das endrekursiv. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Umdrehen {
          public static int umdrehen(int n, int bisher) {
              if (n == 0) {
                  return bisher;
              }
              return umdrehen(n / 10, bisher * 10 + n % 10);
          }

          public static void main(String[] args) {
              System.out.println(umdrehen(4071, 0));
              System.out.println(umdrehen(5200, 0));
          }
      }
    loesung: |
      1704
      25
    fehler:
      - wert: "1704\n0025"
        meldung: Das Ergebnis ist eine Zahl vom Typ `int`. Führende Nullen gibt es bei Zahlen nicht. `0025` wird als 25 ausgegeben.
      - wert: "4071\n5200"
        meldung: Die letzte Ziffer wird zuerst in `bisher` übernommen. Damit steht sie am Ende ganz vorne.
hinweise:
  - Verfolge das Paar `(n, bisher)`. `bisher * 10 + n % 10` hängt die letzte Ziffer von `n` hinten an `bisher` an.
  - Bei 5200 sind die ersten beiden abgespaltenen Ziffern Nullen. Was ist `0 * 10 + 0`?
loesung: |
  **Ansatz:** Endrekursion mit Sammelparameter. Jede abgespaltene Ziffer wird hinten an `bisher` angehängt.
  ---
  `(4071, 0)`, `(407, 1)`, `(40, 17)`, `(4, 170)`, `(0, 1704)`. Ergebnis 1704.
  ---
  `(5200, 0)`, `(520, 0)`, `(52, 0)`, `(5, 2)`, `(0, 25)`. Die Nullen am Ende von 5200 werden zu führenden Nullen, und die verschwinden. Ergebnis 25.
```

```aufgabe
id: rv-mix-schleifen-sterne
titel: Doppelschleife gegen Rekursion
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Doppelschleife stammt aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen):

  ```java
  for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 8; j++) {
          System.out.print("*");
      }
  }
  ```

  Die Rekursion lautet:

  ```java
  public static void f(int n) {
      if (n == 0) {
          System.out.print("*");
          return;
      }
      f(n - 1);
      f(n - 1);
  }
  ```

  Wie viele Sterne gibt die Doppelschleife aus, und wie viele `f(6)`?
teile:
  - typ: zahl
    label: Doppelschleife
    loesung: "8 * 8"
    fehler:
      - wert: "16"
        meldung: Die innere Schleife läuft bei **jedem** Durchlauf der äußeren vollständig. Die Anzahlen werden multipliziert, nicht addiert.
  - typ: zahl
    label: '`f(6)`'
    loesung: "2^6"
    fehler:
      - wert: "127"
        meldung: 127 ist die Zahl der Aufrufe. Sterne gibt aber nur der Basisfall aus, also nur die Blätter.
      - wert: "12"
        meldung: Auf jeder Ebene **verdoppelt** sich die Zahl der Aufrufe. Von Ebene zu Ebene musst du also mit 2 multiplizieren, nicht 2 addieren.
hinweise:
  - Bei der Doppelschleife multiplizierst du die Durchläufe der beiden Schleifen.
  - Bei `f(6)` zählst du die Blätter. Ihre Zahl verdoppelt sich mit jeder Ebene.
loesung: |
  **Ansatz:** Doppelschleife: Durchläufe multiplizieren. Rekursion: Sterne im Basisfall, also Blätter zählen.
  ---
  Doppelschleife: 8 mal 8 = 64 Sterne.
  ---
  `f(6)`: Blätter 2, 4, 8, … bis 2 hoch 6 = 64. Beide geben also gleich viele Sterne aus, obwohl `f(6)` dafür 127 Aufrufe braucht.
```

```aufgabe
id: rv-mix-methoden-einzug
titel: Ein Baum mit Einrückung
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Hier ruft eine Methode ihre **überladene** Schwester auf. Überladen kennst du aus
  [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden). Was gibt das Programm aus? Achte genau auf
  die Leerzeichen am Zeilenanfang.
teile:
  - typ: ausgabe
    code: |
      public class Einzug {
          public static void zeige(int n) {
              zeige(n, "");
          }

          public static void zeige(int n, String einzug) {
              if (n == 0) {
                  return;
              }
              System.out.println(einzug + n);
              zeige(n - 1, einzug + "  ");
              zeige(n - 1, einzug + "  ");
          }

          public static void main(String[] args) {
              zeige(3);
          }
      }
    loesung: |
      3
        2
          1
          1
        2
          1
          1
    fehler:
      - wert: "3\n  2\n  2\n    1\n    1\n    1\n    1"
        meldung: Das ist Ebene für Ebene gelesen. Der erste Aufruf mit 2 gibt erst seinen ganzen Teilbaum aus, bevor der zweite Aufruf mit 2 beginnt.
      - wert: "3\n2\n1\n1\n2\n1\n1"
        meldung: Jeder Selbstaufruf bekommt `einzug + "  "`, also zwei Leerzeichen mehr als der Aufrufer. Die Zeilen sind deshalb eingerückt.
hinweise:
  - '`zeige(3)` ruft `zeige(3, "")` auf. Die Ausgabe steht vor den Selbstaufrufen.'
  - Jede Ebene ist um zwei Leerzeichen weiter eingerückt als die darüber.
loesung: |
  **Ansatz:** Ausgabe vor den Selbstaufrufen, also beim Betreten jedes Knotens. Tiefe zuerst.
  ---
  `zeige(3, "")` gibt `3` aus. Dann folgt der erste Teilbaum `zeige(2, "  ")` mit `  2` und zweimal `    1`.
  ---
  Danach folgt der zweite Teilbaum, der genauso aussieht. Insgesamt sind es 7 Zeilen. Die Einrückung zeigt die Ebene im Aufrufbaum.
```

```aufgabe
id: rv-mix-kurzschluss
titel: Rekursion mit Kurzschluss
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Die Methode verwendet die Kurzschlussauswertung von `&&` und `||` aus
  [3.2 Bedingungen verknüpfen](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht). Wenn der linke
  Teil das Ergebnis schon festlegt, wird der rechte Teil nicht mehr ausgewertet.

  ```java
  public static boolean doppel(String s) {
      return s.length() >= 2 && (s.charAt(0) == s.charAt(1) || doppel(s.substring(1)));
  }
  ```

  Beurteile jede Aussage. Vorbedingung: `s != null`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`doppel("")` wirft eine Exception.'
        richtig: false
        erklaerung: '`s.length() >= 2` ist falsch. Wegen des Kurzschlusses wird der Rest nicht ausgewertet, und das Ergebnis ist `false`.'
      - text: '`doppel("abba")` ruft `doppel` insgesamt genau zweimal auf.'
        richtig: true
        erklaerung: 'Bei `"abba"` ist `a == b` falsch, also folgt `doppel("bba")`. Dort ist `b == b` wahr, und `||` bricht ab.'
      - text: '`doppel("abcd")` ruft `doppel` insgesamt genau dreimal auf.'
        richtig: false
        erklaerung: 'Die Aufrufe haben `"abcd"`, `"bcd"`, `"cd"` und `"d"`. Erst bei `"d"` ist die Länge kleiner als 2. Das sind 4 Aufrufe.'
      - text: Die Methode ist linear rekursiv.
        richtig: true
        erklaerung: Im Ausdruck steht nur ein Selbstaufruf. Jeder Durchlauf führt ihn höchstens einmal aus.
    fehler:
      - wert: [r, r, f, r]
        meldung: Prüfe die Reihenfolge der Auswertung bei `""`. Was steht links von `&&`, und was passiert, wenn es falsch ist?
      - wert: [f, r, r, r]
        meldung: 'Zähle bei `"abcd"` genau. Auch der Aufruf mit `"d"` zählt, er liefert sofort `false`.'
hinweise:
  - Werte den Ausdruck von links nach rechts aus. Bei `&&` mit falscher linker Seite und bei `||` mit wahrer linker Seite endet die Auswertung sofort.
  - Schreib für jeden Aufruf den String auf und entscheide, welcher Teil des Ausdrucks noch ausgewertet wird.
loesung: |
  **Ansatz:** Den Ausdruck für jeden Aufruf von links nach rechts auswerten und den Kurzschluss beachten.
  ---
  `""`: Die Länge ist zu klein, Ergebnis `false` ohne `charAt`. `"abba"`: zwei Aufrufe, der zweite findet `bb`.
  ---
  `"abcd"`: vier Aufrufe bis `"d"`. Pro Durchlauf gibt es höchstens einen Selbstaufruf, die Methode ist also linear. Aussagen 2 und 4 sind richtig.
```

```aufgabe
id: rv-mix-code-stufen
titel: Treppen mit Schritten bis zu drei Stufen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Du steigst eine Treppe mit `n` Stufen hinauf und nimmst mit jedem Schritt **eine, zwei oder drei** Stufen. Implementiere
  `long wege3(int n)` **rekursiv** und ohne Schleifen. Die Methode liefert die Zahl der verschiedenen Arten, oben
  anzukommen. Vorbedingung: `n >= 0`.

  Beispiele: `wege3(0)` liefert 1 (man ist schon oben), `wege3(1)` liefert 1, `wege3(3)` liefert 4 und `wege3(4)` liefert 7.
teile:
  - typ: code
    vorlage: |
      public class Stufen {
          public static long wege3(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Stufen {
          public static long wege3(int n) {
              if (n < 0) {
                  return 0;
              }
              if (n == 0) {
                  return 1;
              }
              return wege3(n - 1) + wege3(n - 2) + wege3(n - 3);
          }
      }
    tests:
      - { aufruf: "wege3(3)", erwartet: "4" }
      - { aufruf: "wege3(4)", erwartet: "7" }
      - { aufruf: "wege3(0)", erwartet: "1", beschreibung: "keine Stufe" }
      - { aufruf: "wege3(1)", erwartet: "1" }
      - { aufruf: "wege3(10)", erwartet: "274", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [wege3], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Für 3 Stufen gibt es 4 Wege: 1+1+1, 1+2, 2+1 und 3. Fehlt dir der Weg „3“? Dann rufst du dich nur mit `n - 1` und `n - 2` auf." }
      - { wert: 3, meldung: "Bei 0 Stufen bist du schon oben. Das zählt als genau ein Weg, nicht als keiner." }
hinweise:
  - Der erste Schritt nimmt 1, 2 oder 3 Stufen. Danach bleiben `n - 1`, `n - 2` oder `n - 3` Stufen.
  - Wird `n` negativ, bist du über die Treppe hinausgestiegen. Das zählt als 0 Wege. Bei genau 0 gibt es einen Weg.
loesung: |
  **Ansatz:** Verzweigte Rekursion wie bei `wege` aus [11.3 Der Aufrufbaum](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen), aber mit drei Möglichkeiten für den ersten Schritt.
  ---
  Basisfälle: `n < 0` liefert 0, `n == 0` liefert 1. Rekursiver Fall: Summe der drei Teilaufgaben.
  ---
  ```java
  if (n < 0) {
      return 0;
  }
  if (n == 0) {
      return 1;
  }
  return wege3(n - 1) + wege3(n - 2) + wege3(n - 3);
  ```
  ---
  Probe: `wege3(1) = 1 + 0 + 0 = 1` und `wege3(2) = 1 + 1 + 0 = 2`. Damit folgen `wege3(3) = 2 + 1 + 1 = 4` und `wege3(4) = 4 + 2 + 1 = 7`.
```

```aufgabe
id: rv-mix-grafik-schleife
titel: Die Treppe als Schleife
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode `treppe` aus [11.6 Rekursive Grafik](/lernen/ep1/rekursion-vertieft/rekursive-grafik-fraktale-mit-codedraw)
  zeichnet bei `treppe(cd, 0, 0, 160)` fünf Quadrate. Ihre Ecken und Seiten sind (0, 0, 160), (160, 160, 80),
  (240, 240, 40), (280, 280, 20) und (300, 300, 10). Welche Schleife zeichnet genau dieselben Quadrate? Schleifen kennst du aus
  [5.4 CodeDraw mit Schleifen](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe).

  **A**
  ```java
  int x = 0;
  int s = 160;
  while (s >= 10) {
      cd.fillSquare(x, x, s);
      x = x + s;
      s = s / 2;
  }
  ```

  **B**
  ```java
  int x = 0;
  int s = 160;
  while (s >= 10) {
      cd.fillSquare(x, x, s);
      s = s / 2;
      x = x + s;
  }
  ```

  **C**
  ```java
  int x = 0;
  int s = 160;
  while (s > 10) {
      cd.fillSquare(x, x, s);
      x = x + s;
      s = s / 2;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['A', 'B', 'C']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In B wird zuerst die Seite halbiert und dann die halbe Seite addiert. Das zweite Quadrat beginnt dann bei 80 statt bei 160.
      - wert: 2
        meldung: In C fehlt das letzte Quadrat mit Seite 10, denn `10 > 10` ist falsch. Der Basisfall der Rekursion war `s < 10`.
hinweise:
  - Die Schleifenbedingung ist das Gegenteil des Basisfalls `s < 10`.
  - Im Selbstaufruf wird die neue Ecke mit der **alten** Seite berechnet. Welche Zeile muss also zuerst kommen?
loesung: |
  **Ansatz:** Eine lineare, endrekursive Methode wird zur Schleife. Die Bedingung kehrt den Basisfall um, die Zuweisungen ersetzen den Selbstaufruf.
  ---
  Die Bedingung muss `s >= 10` sein, das schließt C aus. Die Ecke muss mit der alten Seite weiterrücken, das schließt B aus.
  ---
  A zeichnet (0, 0, 160), (160, 160, 80) und so weiter bis (300, 300, 10). Danach ist `s = 5`, und die Schleife endet.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Feedbackgespräch. Die ersten drei sind im Format der
TUWEL-Tests gestellt: vier Aussagen mit Richtig oder Falsch, mit Teilpunkten. Danach folgen eine Programmieraufgabe mit
den Einschränkungen des Programmiertests, eine Fraktalaufgabe wie auf Blatt 3 und Fragen für das Feedbackgespräch.
Plane die angegebene Zeit ein und arbeite ohne Hinweise, bevor du einen aufdeckst. Das Format 2026W ist nicht
veröffentlicht. Die Aufgaben folgen den Quiz, Blättern und Programmiertests der Jahre 2020 bis 2023.

```aufgabe
id: rv-pruef-quiz-arten
titel: Aussagen zu einer Methode mit zwei Parametern
niveau: 3
punkte: 2
lernziel: 1
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Aussagen zu einer rekursiven Methode, endrekursiv, linear, Basisfälle), Inhalt neu
angabe: |
  (Zeitrichtwert: 4 Minuten) Gegeben ist

  ```java
  public static int f(int a, int b) {
      if (b == 0) {
          return a;
      }
      if (b < 0) {
          return f(a - 1, b + 1);
      }
      return f(a + 1, b - 1);
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f` ist endrekursiv.'
        richtig: true
        erklaerung: Beide Selbstaufrufe stehen direkt hinter `return`. Nach der Rückkehr passiert nichts mehr.
      - text: '`f` ist verzweigt rekursiv, weil zwei Selbstaufrufe im Rumpf stehen.'
        richtig: false
        erklaerung: Die beiden Aufrufe stehen in verschiedenen Zweigen mit `return`. Jeder Durchlauf führt höchstens einen aus. `f` ist linear.
      - text: '`f` hat zwei Basisfälle.'
        richtig: false
        erklaerung: Nur der Fall `b == 0` endet ohne Selbstaufruf. Der Fall `b < 0` ruft sich selbst auf.
      - text: '`f(3, -2)` liefert 1.'
        richtig: true
        erklaerung: 'Die Paare sind (3, -2), (2, -1) und (1, 0). Bei `b == 0` wird 1 geliefert. `f` rechnet `a + b`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: Zwei Selbstaufrufe im Text machen eine Methode noch nicht verzweigt. Wie viele führt ein einzelner Durchlauf aus?
      - wert: [r, f, r, r]
        meldung: Ein Basisfall ist ein Fall **ohne** Selbstaufruf. Was steht im Zweig `b < 0`?
hinweise:
  - Prüfe für jeden Zweig, ob er einen Selbstaufruf enthält und ob danach noch etwas passiert.
  - Für die letzte Aussage verfolge die Paare `(a, b)`, bis `b == 0` gilt.
loesung: |
  **Ansatz:** Zweige einzeln untersuchen und eine kleine Probe rechnen.
  ---
  Ein Basisfall (`b == 0`), zwei rekursive Zweige mit je einem Selbstaufruf direkt hinter `return`. Also linear und endrekursiv. Aussagen 2 und 3 sind falsch.
  ---
  `f(3, -2)`: (3, -2), (2, -1), (1, 0), Ergebnis 1. Die Methode verschiebt Einheiten von `b` nach `a` und liefert `a + b`. Aussagen 1 und 4 sind richtig.
```

```aufgabe
id: rv-pruef-quiz-klammern
titel: Ausgaben einer verzweigten Rekursion
niveau: 3
punkte: 2
lernziel: 3
kompetenz: anwenden
quelle: Format nach TUWEL-Test 2 (verzweigte Rekursion, Anzahl Ausgaben, erste Ausgabe, Ergebnis), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Gegeben ist

  ```java
  public static int g(int n) {
      if (n <= 1) {
          System.out.print(n);
          return 1;
      }
      System.out.print("(");
      int r = g(n - 1) + g(n - 2);
      System.out.print(")");
      return r;
  }
  ```

  `main` ruft `g(4)` auf. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die erste Ausgabe ist eine öffnende Klammer.
        richtig: true
        erklaerung: '`g(4)` ist kein Basisfall und gibt zuerst `(` aus, bevor es sich selbst aufruft.'
      - text: '`g(4)` gibt genau 5 Ziffern aus.'
        richtig: true
        erklaerung: Ziffern geben nur die Basisfälle aus. Der Baum von `g(4)` hat 5 Blätter, die Ausgabe ist `(((10)1)(10))`.
      - text: '`g` wird insgesamt 9-mal aufgerufen.'
        richtig: true
        erklaerung: 'Zähltabelle: `A(0) = A(1) = 1`, `A(2) = 3`, `A(3) = 5`, `A(4) = 1 + 5 + 3 = 9`.'
      - text: '`g(4)` liefert 8.'
        richtig: false
        erklaerung: 'Jeder Basisfall liefert 1, und ein innerer Knoten addiert. Der Wert ist die Zahl der Blätter, also 5.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Rechne den Rückgabewert von unten: `g(2) = 1 + 1`, `g(3) = g(2) + g(1)`, `g(4) = g(3) + g(2)`.'
      - wert: [r, f, f, f]
        meldung: Zeichne den Aufrufbaum von `g(4)` und zähle Knoten und Blätter.
hinweise:
  - Zeichne den Aufrufbaum. Innere Knoten geben Klammern aus, Blätter geben ihre Zahl aus.
  - Zähle Aufrufe und Blätter mit einer Tabelle, oder direkt im Baum.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen, Tiefe zuerst durchlaufen und die Ausgaben mitschreiben.
  ---
  Ausgabe: `(((10)1)(10))`. Sie beginnt mit `(` und enthält die 5 Ziffern 1, 0, 1, 1, 0.
  ---
  Aufrufe: 9. Rückgabewert: `g(2) = 2`, `g(3) = 3`, `g(4) = 5`. Aussagen 1 bis 3 sind richtig, Aussage 4 ist falsch.
```

```aufgabe
id: rv-pruef-quiz-implementierungen
titel: Vier Implementierungen von zaehlePaare
niveau: 3
punkte: 2
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (Implementierungen auf Rückgabe und Terminierung prüfen), Inhalt neu
angabe: |
  (Zeitrichtwert: 8 Minuten) `zaehlePaare(String s)` soll liefern, an wie vielen Stellen zwei gleiche Zeichen direkt
  nebeneinander stehen. Paare dürfen sich überlappen. Beispiele: `zaehlePaare("aaa")` liefert 2, `zaehlePaare("abba")`
  liefert 1 und `zaehlePaare("")` liefert 0. Vorbedingung: `s != null`.

  Beurteile, ob die Implementierung für alle erlaubten Eingaben endet **und** das richtige Ergebnis liefert. Der
  Methodenkopf ist jeweils weggelassen.

  **I1**
  ```java
  if (s.length() < 2) { return 0; }
  int rest = zaehlePaare(s.substring(1));
  if (s.charAt(0) == s.charAt(1)) { return rest + 1; }
  return rest;
  ```

  **I2**
  ```java
  if (s.isEmpty()) { return 0; }
  int rest = zaehlePaare(s.substring(1));
  if (s.charAt(0) == s.charAt(1)) { return rest + 1; }
  return rest;
  ```

  **I3**
  ```java
  if (s.length() < 2) { return 0; }
  if (s.charAt(0) == s.charAt(1)) { return 1 + zaehlePaare(s.substring(2)); }
  return zaehlePaare(s.substring(1));
  ```

  **I4**
  ```java
  if (s.length() <= 2) {
      if (s.length() == 2 && s.charAt(0) == s.charAt(1)) { return 1; }
      return 0;
  }
  int h = s.length() / 2;
  return zaehlePaare(s.substring(0, h + 1)) + zaehlePaare(s.substring(h));
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: I1 ist richtig.
        richtig: true
        erklaerung: Basisfall für Länge 0 und 1, Fortschritt `substring(1)`. Jede Position wird genau einmal als Paaranfang geprüft.
      - text: I2 ist richtig.
        richtig: false
        erklaerung: 'Bei einem String der Länge 1 ist `s.charAt(1)` außerhalb des Strings. `zaehlePaare("x")` endet mit einer Exception.'
      - text: I3 ist richtig.
        richtig: false
        erklaerung: 'Nach einem Treffer springt I3 zwei Zeichen weiter. Überlappende Paare gehen verloren: `"aaa"` liefert 1 statt 2.'
      - text: I4 ist richtig.
        richtig: true
        erklaerung: 'Die beiden Teile überlappen genau im Zeichen mit Index `h`. Jedes Paar liegt in genau einem Teil, und beide Teile sind kürzer als `s`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Prüfe I2 mit dem kleinsten Fall, der nicht leer ist: `"x"`. Welcher Index wird bei `charAt(1)` verlangt?'
      - wert: [r, f, f, f]
        meldung: 'Rechne I4 mit `"aaa"` nach. `h` ist 1, die Teile sind `"aa"` und `"aa"`. Und bei `"abba"`?'
hinweise:
  - Teste jede Implementierung mit `""`, `"x"`, `"aaa"` und `"abba"`.
  - Bei I4 hilft die Frage, ob ein Paar über die Teilungsstelle hinweg verloren gehen oder doppelt gezählt werden kann.
loesung: |
  **Ansatz:** Jede Implementierung mit kleinen Strings prüfen, besonders mit den Randfällen `""` und `"x"`.
  ---
  I1 liefert für `""` und `"x"` jeweils 0, für `"aaa"` 2 und für `"abba"` 1. Richtig. I2 stürzt bei `"x"` ab. Falsch.
  ---
  I3 überspringt nach einem Treffer ein Zeichen. Für `"aaa"` kommt 1 heraus. Falsch.
  ---
  I4 teilt `s` in `s.substring(0, h + 1)` und `s.substring(h)`. Das Zeichen bei `h` gehört zu beiden Teilen. So landet das Paar über die Mitte in genau einem Teil. Beispiel `"abba"`: `h = 2`, Teile `"abb"` und `"ba"`, Ergebnis `1 + 0 = 1`. Richtig.
```

```aufgabe
id: rv-pruef-pt-gitterwege
titel: Wege durch ein Gitter
niveau: 3
punkte: 9
lernziel: 6
kompetenz: anwenden
quelle: Einschränkungen und Bewertung wie in der dritten Aufgabe des Programmiertests, Inhalt neu (verzweigte Rekursion)
angabe: |
  (Zeitrichtwert: 15 Minuten) Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine
  Hilfsmethoden, keine globalen Variablen, Methodenkopf unverändert.

  Ein Stadtplan ist ein Gitter aus Straßen. Du stehst an der Kreuzung links oben. Dein Ziel ist die Kreuzung, die `b`
  Häuserblöcke nach rechts und `h` Häuserblöcke nach unten entfernt liegt. Du gehst nur nach rechts oder nach unten.
  Implementiere `long gitterwege(int b, int h)` **rekursiv**. Die Methode liefert die Zahl der verschiedenen Wege.
  Vorbedingung: `b >= 0`, `h >= 0`.

  Beispiele: `gitterwege(2, 2)` liefert 6, `gitterwege(0, 5)` liefert 1 und `gitterwege(3, 1)` liefert 4.
teile:
  - typ: code
    vorlage: |
      public class Gitter {
          public static long gitterwege(int b, int h) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Gitter {
          public static long gitterwege(int b, int h) {
              if (b == 0 || h == 0) {
                  return 1;
              }
              return gitterwege(b - 1, h) + gitterwege(b, h - 1);
          }
      }
    tests:
      - { aufruf: "gitterwege(2, 2)", erwartet: "6" }
      - { aufruf: "gitterwege(0, 5)", erwartet: "1", beschreibung: "nur nach unten" }
      - { aufruf: "gitterwege(3, 1)", erwartet: "4" }
      - { aufruf: "gitterwege(0, 0)", erwartet: "1", beschreibung: "schon am Ziel" }
      - { aufruf: "gitterwege(3, 3)", erwartet: "20", versteckt: true }
      - { aufruf: "gitterwege(4, 6)", erwartet: "210", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [gitterwege], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Ist `b` gleich 0, kannst du nur noch geradeaus nach unten gehen. Das ist genau ein Weg, nicht null Wege. Dasselbe gilt für `h == 0`." }
      - { wert: 1, meldung: "Der erste Schritt geht entweder nach rechts (dann bleiben `b - 1` und `h`) oder nach unten (dann bleiben `b` und `h - 1`). Addiere die Wege beider Möglichkeiten." }
      - { wert: "keineFelder", meldung: "Ein Zähler als Klassenvariable ist verboten. Die Zahl der Wege kommt über die Rückgabewerte zurück." }
hinweise:
  - Überlege, was nach dem ersten Schritt übrig bleibt. Es gibt genau zwei Möglichkeiten für diesen Schritt.
  - Liegt das Ziel in derselben Zeile oder Spalte (`b == 0` oder `h == 0`), gibt es nur noch einen Weg.
loesung: |
  **Ansatz:** Verzweigte Rekursion. Jeder Weg beginnt mit einem Schritt nach rechts oder nach unten. Die Wege beider Fälle werden addiert.
  ---
  Basisfall: Ist `b == 0` oder `h == 0`, gibt es genau einen Weg, geradeaus.
  ---
  ```java
  if (b == 0 || h == 0) {
      return 1;
  }
  return gitterwege(b - 1, h) + gitterwege(b, h - 1);
  ```
  ---
  Raster wie im Programmiertest: Ansatz mit Rückgabe, Basisfall vorhanden und korrekt, Fortschritt vorhanden und korrekt, Rückgabewert über die Summe. Jeder Aufruf verkleinert `b + h` um 1, also endet die Rekursion.
  ---
  Probe `gitterwege(2, 2) = gitterwege(1, 2) + gitterwege(2, 1) = 3 + 3 = 6`. Dabei ist `gitterwege(1, 2) = gitterwege(0, 2) + gitterwege(1, 1) = 1 + 2 = 3`.
```

```aufgabe
id: rv-pruef-blatt-blume
titel: Ein Kleeblatt aus Kreisen
niveau: 3
punkte: 4
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 3, Aufgabe 5 (rekursives Muster mit Farbwechsel), umformuliert mit Kreisen und drei Richtungen
angabe: |
  (Zeitrichtwert: 15 Minuten) Implementiere `void klee(CodeDraw cd, int x, int y, int r, boolean gruen)` **rekursiv**,
  ohne Schleifen, ohne Hilfsmethoden und ohne Klassenvariablen.

  - Die Methode zeichnet einen ausgefüllten Kreis mit Mittelpunkt `(x, y)` und Radius `r`, in Grün (`Palette.GREEN`),
    wenn `gruen` wahr ist, sonst in Magenta (`Palette.MAGENTA`).
  - Danach folgen drei halb so große Kreise mit Radius `r / 2` und umgekehrter Farbe. Ihre Mittelpunkte liegen auf dem
    linken, dem rechten und dem oberen Rand des Kreises, **in dieser Reihenfolge**: `(x - r, y)`, `(x + r, y)`, `(x, y - r)`.
  - **Kleinere Kreise liegen über den größeren.**
  - Gezeichnet wird, solange `r >= 6` ist.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Klee {
          public static void klee(CodeDraw cd, int x, int y, int r, boolean gruen) {
              // TODO
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              klee(cd, 200, 260, 64, true);
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Klee {
          public static void klee(CodeDraw cd, int x, int y, int r, boolean gruen) {
              if (r < 6) {
                  return;
              }
              if (gruen) {
                  cd.setColor(Palette.GREEN);
              } else {
                  cd.setColor(Palette.MAGENTA);
              }
              cd.fillCircle(x, y, r);
              klee(cd, x - r, y, r / 2, !gruen);
              klee(cd, x + r, y, r / 2, !gruen);
              klee(cd, x, y - r, r / 2, !gruen);
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              klee(cd, 200, 260, 64, true);
              cd.show();
          }
      }
    tests:
      - { aufruf: "klee(new CodeDraw(400, 400), 200, 200, 6, true)", zeichnung: true, reihenfolge: true, beschreibung: "r = 6: ein einzelner grüner Kreis" }
      - { aufruf: "klee(new CodeDraw(400, 400), 200, 200, 12, false)", zeichnung: true, reihenfolge: true, beschreibung: "r = 12: ein magentafarbener und drei grüne Kreise" }
      - { aufruf: "klee(new CodeDraw(400, 400), 200, 260, 48, true)", zeichnung: true, reihenfolge: true, versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [klee], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Kleinere Kreise sollen oben liegen. Dann muss der große Kreis **zuerst** entstehen, also vor den Selbstaufrufen. Prüfe auch die Farbe der Kinder: `!gruen`." }
      - { wert: 1, meldung: "Bei `r = 6` wird noch genau ein Kreis gezeichnet. Der Basisfall ist `r < 6`." }
hinweise:
  - Basisfall `r < 6`. Danach Farbe setzen, Kreis zeichnen, dann die drei Selbstaufrufe.
  - Kleinere oben heißt zeichnen auf dem Hinweg, also vor den Selbstaufrufen. Die Kinder bekommen `r / 2` und `!gruen`.
loesung: |
  **Ansatz:** Verzweigte Grafik-Rekursion mit drei Selbstaufrufen. Kleinere liegen oben, also wird auf dem Hinweg gezeichnet.
  ---
  ```java
  if (r < 6) {
      return;
  }
  if (gruen) {
      cd.setColor(Palette.GREEN);
  } else {
      cd.setColor(Palette.MAGENTA);
  }
  cd.fillCircle(x, y, r);
  klee(cd, x - r, y, r / 2, !gruen);
  klee(cd, x + r, y, r / 2, !gruen);
  klee(cd, x, y - r, r / 2, !gruen);
  ```
  ---
  Hier darf `setColor` direkt vor `fillCircle` am Anfang stehen, denn gezeichnet wird vor den Selbstaufrufen.
  ---
  Kontrolle für `r = 48`: Radien 48, 24, 12 und 6, also `1 + 3 + 9 + 27 = 40` Kreise.
```

```aufgabe
id: rv-pruef-feedback-binom
titel: Fragen im Feedbackgespräch zum Binomialkoeffizienten
niveau: 3
punkte: 3
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfragen der Aufgabenblätter 3 (Anzahl der Aufrufe, Grenzen der Rekursion), auf den Binomialkoeffizienten übertragen
angabe: |
  (Zeitrichtwert: 6 Minuten) Du hast `binom` aus
  [11.3 Der Aufrufbaum](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen) so abgegeben:

  ```java
  public static long binom(int n, int k) {
      if (k == 0 || k == n) {
          return 1;
      }
      return binom(n - 1, k - 1) + binom(n - 1, k);
  }
  ```

  Beantworte die Fragen der Tutorin in je ein bis zwei Sätzen.

  1. Wie oft wird `binom` beim Aufruf `binom(5, 2)` insgesamt aufgerufen? Wie kommst du darauf?
  2. Wie groß ist die Rekursionstiefe bei `binom(5, 2)`?
  3. `binom(30, 15)` braucht über 300 Millionen Aufrufe. Warum ist diese Methode so langsam?
teile:
  - typ: text
    muster: |
      1. Ich zähle mit einer Tabelle: Aufrufe(n, k) = 1 + Aufrufe(n - 1, k - 1) + Aufrufe(n - 1, k), Basisfälle zählen 1.
         Für (4, 1) sind es 7 und für (4, 2) sind es 11. Also hat binom(5, 2) genau 1 + 7 + 11 = 19 Aufrufe.
      2. Jeder Selbstaufruf verkleinert n um 1. Der längste Weg ist etwa (5, 2), (4, 1), (3, 1), (2, 1), (1, 0).
         Höchstens 5 Rahmen liegen gleichzeitig auf dem Stapel.
      3. Die Methode ist verzweigt und berechnet dieselben Teilaufgaben immer wieder neu, zum Beispiel binom(3, 1)
         mehrmals. Jedes Blatt liefert 1, also hat der Baum so viele Blätter, wie das Ergebnis groß ist. Für
         binom(30, 15) sind das 155117520 Blätter und insgesamt doppelt so viele Aufrufe, weniger 1.
hinweise:
  - Für Frage 1 hilft eine Zähltabelle. Rechne zuerst die Aufrufe für `(4, 1)` und `(4, 2)` aus.
  - Für Frage 2 folge einem Weg, auf dem man möglichst spät einen Basisfall erreicht.
loesung: |
  **Ansatz:** Die Begriffe des Kapitels verwenden: Zähltabelle, Rekursionstiefe, verzweigte Rekursion mit wiederholten Teilaufgaben.
  ---
  1. Aufrufe für `(4, 1)`: 7, für `(4, 2)`: 11. Zusammen mit dem Startaufruf `1 + 7 + 11 = 19`.
  ---
  2. `n` sinkt bei jedem Aufruf um 1. Der längste Weg hat 5 Aufrufe, etwa bis `(1, 0)`. Die Rekursionstiefe ist 5.
  ---
  3. Gleiche Teilaufgaben werden in verschiedenen Zweigen des Baums neu berechnet. Jedes Blatt liefert 1, also gibt es für `binom(30, 15) = 155117520` genauso viele Blätter. Mit den inneren Knoten sind es 310235039 Aufrufe.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten darunter.
antwort: |
  Eine mögliche Auswahl: (1) Ob eine Rekursion linear oder verzweigt ist, hängt davon ab, wie viele Selbstaufrufe ein
  einzelner Durchlauf ausführt, nicht davon, wie oft der Name im Text steht. (2) Eine verzweigte Rekursion bildet einen
  Aufrufbaum. Java durchläuft ihn Tiefe zuerst, links vor rechts. Ausgaben vor, zwischen und nach den Selbstaufrufen
  erscheinen beim Betreten, nach dem linken Teilbaum und am Ende. (3) Aufrufe und Ausgaben zählt man mit einer Tabelle
  von unten, und bei Grafiken bestimmt die Stelle des Zeichenbefehls, was oben liegt. Ebenso gute Antworten sind die
  Endrekursion mit Sammelparameter oder das Prüfen von Implementierungen mit Fundiertheit und Fortschritt.
```

:::zusammenfassung
1. **Arten:** Eine Rekursion ist **linear**, wenn jeder Durchlauf höchstens einen Selbstaufruf ausführt, und **verzweigt**, wenn mindestens ein Durchlauf zwei oder mehr ausführt. Steht ein Selbstaufruf im Argument eines anderen, ist sie **verschachtelt**. Rufen sich zwei Methoden gegenseitig auf, ist sie **wechselseitig**.
2. **Endrekursion:** Jeder Selbstaufruf ist die letzte Aktion, in der Form `return f(...);`. Die Rechnung passiert dann am Aufrufpfad, oft in einem **Sammelparameter** mit neutralem Startwert. Endrekursive Methoden lassen sich leicht in Schleifen umbauen. Java spart dabei aber keinen Stapelplatz.
3. **Aufrufbaum:** Jeder Aufruf ist ein Knoten, seine Selbstaufrufe stehen darunter, von links nach rechts. Java durchläuft den Baum **Tiefe zuerst**. Die **Rekursionstiefe** ist die Zahl der Knoten auf dem längsten Weg von der Wurzel zu einem Blatt, nicht die Zahl der Aufrufe.
4. **Ausgaben:** Vor dem ersten Selbstaufruf erscheint eine Ausgabe beim Betreten des Knotens, zwischen den Aufrufen nach dem linken Teilbaum, nach dem letzten Aufruf am Ende des Knotens.
5. **Zählen:** Aufrufe = 1 plus die Aufrufe aller Teilbäume. Ausgaben = eigene Ausgaben plus die Ausgaben aller Teilbäume. Die Tabelle wird von den Basisfällen aufwärts gefüllt. Bei gleich großen Teilbäumen genügt ein fester Faktor pro Ebene, etwa 2 hoch `n` Blätter.
6. **Beurteilen:** Eine Implementierung ist nur richtig, wenn sie für **alle** erlaubten Eingaben endet und das richtige Ergebnis liefert. Dafür braucht sie Fundiertheit und Fortschritt. Prüfe immer das kleinste erlaubte Argument.
7. **Fraktale:** Eine Zeichenmethode bekommt das `CodeDraw`-Objekt als Parameter, zeichnet eine Form und ruft sich für kleinere Kopien auf, bis eine Größengrenze unterschritten ist. Zeichnen vor den Selbstaufrufen legt die kleinen Formen nach oben, Zeichnen danach die großen. Die Farbe wechselt mit einem `boolean`-Parameter und `!`.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Zwei Selbstaufrufe im Text als „verzweigt“ eingeordnet**, obwohl sie in getrennten Zweigen mit `return` stehen. Training: „Drei Methoden einordnen“ und „Manchmal einer, manchmal zwei“ in [11.1 Arten der Rekursion](/lernen/ep1/rekursion-vertieft/arten-der-rekursion-linear-verzweigt-verschachtelt).
2. **Denselben Selbstaufruf zweimal ausgeführt** statt das Ergebnis zu speichern, mit explodierender Zahl der Aufrufe. Training: „Linear oder verzweigt verdreifachen“ in [11.1](/lernen/ep1/rekursion-vertieft/arten-der-rekursion-linear-verzweigt-verschachtelt).
3. **`return 1 + f(...)` für endrekursiv gehalten.** Training: „Welche Methode ist endrekursiv?“ und „Vier Aussagen zu einer Methode mit Index“ in [11.2 Endrekursion](/lernen/ep1/rekursion-vertieft/endrekursion-das-ergebnis-auf-dem-hinweg-berechnen).
4. **Sammelparameter falsch gestartet oder im Basisfall nicht zurückgegeben.** Training: „Die Fakultät auf dem Hinweg“ und „Eine Potenz mit Sammelparameter“ in [11.2](/lernen/ep1/rekursion-vertieft/endrekursion-das-ergebnis-auf-dem-hinweg-berechnen).
5. **Aufrufbaum Ebene für Ebene gelesen** statt Tiefe zuerst. Training: „In welcher Reihenfolge starten die Aufrufe?“ und „Aufrufe und Rückgabewerte in Startreihenfolge“ in [11.3 Der Aufrufbaum](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen).
6. **Rekursionstiefe mit der Anzahl der Aufrufe verwechselt.** Training: „Wie tief wird es?“ in [11.3](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen).
7. **Ausgabe zwischen den Selbstaufrufen falsch eingeordnet.** Training: „Ausgabe zwischen den Aufrufen“ und „Ein Fraktal als Protokoll“ in [11.3](/lernen/ep1/rekursion-vertieft/der-aufrufbaum-reihenfolge-bei-zwei-selbstaufrufen) und [11.6](/lernen/ep1/rekursion-vertieft/rekursive-grafik-fraktale-mit-codedraw).
8. **Nur die Blätter gezählt** oder die `1 +` für den Aufruf selbst vergessen. Training: „Aufrufe bei Basisfall 1“ und „Sechs Scheiben umschichten“ in [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).
9. **Aufrufe gezählt, obwohl Ausgaben gefragt waren.** Training: „Sterne im rekursiven Fall“ in [11.4](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen) und „Doppelschleife gegen Rekursion“ in der [Gemischten Wiederholung](/lernen/ep1/rekursion-vertieft/gemischte-wiederholung).
10. **Nur mit den Beispielen getestet** und den kleinsten Randfall übersehen. Training: „Welcher Aufruf stürzt ab?“ und „Eine Implementierung Schritt für Schritt beurteilen“ in [11.5 Rekursionen beurteilen](/lernen/ep1/rekursion-vertieft/rekursionen-beurteilen-ergebnis-und-terminierung).
11. **Fortschritt fehlt**, etwa `substring(0)` oder `0 / 2`. Training: „Wo fehlt der Fortschritt?“ und „Eine Binärdarstellung reparieren“ in [11.5](/lernen/ep1/rekursion-vertieft/rekursionen-beurteilen-ergebnis-und-terminierung).
12. **Zwei `char` addiert statt verkettet.** Training: „Vier Implementierungen von verdopple“ in [11.5](/lernen/ep1/rekursion-vertieft/rekursionen-beurteilen-ergebnis-und-terminierung).
13. **Zeichenbefehl an der falschen Stelle**, sodass die falschen Formen oben liegen. Training: „Ein Fliesenmuster aus Quadraten“ in [11.6 Rekursive Grafik](/lernen/ep1/rekursion-vertieft/rekursive-grafik-fraktale-mit-codedraw) und „Ein Kleeblatt aus Kreisen“ in den [Prüfungsaufgaben](/lernen/ep1/rekursion-vertieft/pruefungsaufgaben).
14. **Farbe nicht pro Ebene gewechselt oder zu früh gesetzt.** Training: „Kleine Quadrate nach oben“ in [11.6](/lernen/ep1/rekursion-vertieft/rekursive-grafik-fraktale-mit-codedraw).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Eine Rekursion als linear, verzweigt, verschachtelt oder wechselseitig einordnen.
2. Endrekursion erkennen und mit einem Sammelparameter herstellen.
3. Einen Aufrufbaum zeichnen und Wert, Reihenfolge und Tiefe ablesen.
4. Ausgaben vor, zwischen und nach zwei Selbstaufrufen ordnen.
5. Aufrufe und Ausgaben mit einer Tabelle zählen.
6. Implementierungen auf Ergebnis und Terminierung prüfen.
7. Verzweigte rekursive Methoden schreiben.
8. Fraktale mit CodeDraw zeichnen und ihre Formen zählen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn. Zu den Aufgabenblättern gibt es aber ein **Feedbackgespräch**
mit einer Tutorin oder einem Tutor, in dem du deine Abgabe erklärst. Zur Fraktalaufgabe von Blatt 3 (WS 2021) standen
drei Zusatzfragen auf dem Blatt, die man in der Übung beantworten können musste. Sinngemäß: Wie oft wird die Methode
aufgerufen? Wie viele Quadrate liegen auf der letzten Ebene? Was muss man ändern, damit ein anderes Muster entsteht?
Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie
mit den Kernpunkten.

```karten
- id: rv-karte-arten
  frage: Welche Arten von Rekursion unterscheidet man, und woran erkennst du sie?
  antwort: |
    Ich frage, wie viele Selbstaufrufe ein einzelner Durchlauf ausführt und wie sie zusammenhängen. Höchstens einer:
    lineare Rekursion. In mindestens einem Fall zwei oder mehr: verzweigte Rekursion, es entsteht ein Aufrufbaum. Steht
    ein Selbstaufruf im Argument eines anderen, etwa `m(m(n + 11))`, ist sie verschachtelt. Rufen sich zwei Methoden
    gegenseitig auf, ist sie wechselseitig.
  kernpunkte:
    - Selbstaufrufe pro Durchlauf zählen
    - linear höchstens einer, verzweigt mehrere
    - verschachtelt im Argument, wechselseitig über andere Methode
- id: rv-karte-zwei-im-text
  frage: Warum kann eine Methode mit zwei Selbstaufrufen im Rumpf trotzdem linear sein?
  antwort: |
    Wenn die beiden Aufrufe in verschiedenen Zweigen stehen und jeder Zweig mit `return` endet, nimmt ein Durchlauf nur
    einen der beiden Wege. Dann führt jeder Aufruf höchstens einen Selbstaufruf aus, und die Aufrufe bilden eine Kette.
    Beispiel: `schritte` halbiert gerade Zahlen und zieht von ungeraden 1 ab. Verzweigt ist eine Methode erst, wenn
    zwei Aufrufe im selben Durchlauf passieren, etwa in `f(n - 1) + f(n - 2)`.
  kernpunkte:
    - getrennte Zweige mit return
    - pro Durchlauf nur ein Aufruf
    - verzweigt erst bei zwei Aufrufen im selben Durchlauf
- id: rv-karte-endrekursiv
  frage: Was bedeutet endrekursiv? Nenne ein Beispiel und ein Gegenbeispiel.
  antwort: |
    Eine Methode ist endrekursiv, wenn jeder Selbstaufruf ihre letzte Aktion ist. Nach der Rückkehr wird nichts mehr
    gerechnet, also steht der Aufruf in der Form `return f(...);`. Beispiel: der ggT durch Abziehen mit
    `return ggt(a - b, b);`. Gegenbeispiel: `return n + summe(n - 1);`, denn nach dem Aufruf muss noch `n` addiert werden,
    auch wenn der Aufruf in der letzten Zeile steht.
  kernpunkte:
    - Selbstaufruf ist letzte Aktion
    - Form return f(...)
    - n + summe(n - 1) ist nicht endrekursiv
- id: rv-karte-sammelparameter
  frage: Wie machst du `summe(n)` endrekursiv, und warum geht das im Programmiertest oft nicht?
  antwort: |
    Ich ergänze einen Sammelparameter `bisher`, der die Summe der schon verarbeiteten Zahlen trägt. Der Startwert ist 0,
    der Basisfall gibt `bisher` zurück, und der rekursive Fall ruft `summe(n - 1, bisher + n)` auf. Im Programmiertest
    und auf Blatt 3 darf ich aber den Methodenkopf nicht ändern und keine Hilfsmethode schreiben. Das geht also nur, wenn
    der Kopf so einen Parameter schon vorgibt, wie die Index- und Zählerparameter aus Kapitel 10.
  kernpunkte:
    - Sammelparameter mit neutralem Startwert
    - Basisfall gibt Sammelparameter zurück
    - Kopf darf im Test nicht geändert werden
- id: rv-karte-java-stapel
  frage: Schützt Endrekursion in Java vor einem StackOverflowError?
  antwort: |
    Nein. Manche Compiler anderer Sprachen wandeln Endrekursion in eine Schleife um, Java tut das nicht. Auch eine
    endrekursive Methode legt für jeden Aufruf einen Rahmen auf den Aufrufstapel. Der Rahmen wird erst auf dem Rückweg
    entfernt, auch wenn dort nichts mehr gerechnet wird. Bei sehr vielen Aufrufen läuft der Stapel deshalb genauso
    über. Für sehr große Eingaben ist eine Schleife die bessere Wahl.
  kernpunkte:
    - Java optimiert Endrekursion nicht
    - jeder Aufruf belegt einen Rahmen
    - bei großen Eingaben Schleife
- id: rv-karte-aufrufbaum
  frage: Was ist ein Aufrufbaum, und in welcher Reihenfolge arbeitet Java ihn ab?
  antwort: |
    Jeder Aufruf ist ein Knoten. Darunter stehen die Selbstaufrufe, die er ausführt, von links nach rechts in der
    Reihenfolge im Code. Ganz oben steht der Aufruf aus `main`, die Blätter sind die Basisfälle. Java arbeitet Tiefe
    zuerst: Ein Aufruf startet sein linkes Kind, und dieses Kind ist mit allen eigenen Aufrufen ganz fertig, bevor das
    rechte Kind beginnt. Werte wandern von den Blättern nach oben.
  kernpunkte:
    - Knoten pro Aufruf, Kinder von links nach rechts
    - Tiefe zuerst, linker Teilbaum ganz fertig
    - Werte von den Blättern nach oben
- id: rv-karte-tiefe
  frage: Warum ist die Rekursionstiefe bei einer verzweigten Rekursion viel kleiner als die Zahl der Aufrufe?
  antwort: |
    Auf dem Aufrufstapel aus Kapitel 10 liegen nur Aufrufe, die begonnen und noch nicht beendet sind. Wegen „Tiefe
    zuerst“ ist das immer nur der Weg von der Wurzel zum gerade laufenden Knoten. Die übrigen Teilbäume sind entweder
    schon fertig oder noch nicht begonnen. Bei `wege(5)` gibt es 15 Aufrufe, aber höchstens 5 Rahmen gleichzeitig.
  kernpunkte:
    - Stapel enthält nur offene Aufrufe
    - nur ein Weg von der Wurzel nach unten
    - wege(5) mit 15 Aufrufen und Tiefe 5
- id: rv-karte-vor-zwischen-nach
  frage: Wann erscheinen Ausgaben vor, zwischen und nach zwei Selbstaufrufen?
  antwort: |
    Eine Ausgabe vor dem ersten Selbstaufruf erscheint, wenn der Knoten betreten wird, die Wurzel also zuerst. Eine
    Ausgabe zwischen den Aufrufen erscheint, wenn der linke Teilbaum ganz fertig ist. Eine Ausgabe nach dem zweiten
    Aufruf erscheint, wenn beide Teilbäume fertig sind, die Wurzel also zuletzt. Bei `lineal(3)` mit der Ausgabe in der
    Mitte entsteht so `1213121`.
  kernpunkte:
    - vor beim Betreten
    - zwischen nach dem linken Teilbaum
    - nach am Ende des Knotens
- id: rv-karte-zaehlen
  frage: Wie bestimmst du im Quiz, wie oft eine verzweigte Rekursion aufgerufen wird?
  antwort: |
    Ich stelle eine Zähltabelle auf. Für jedes Argument, bei dem der Basisfall greift, ist es ein Aufruf. Für die
    anderen gilt: ein Aufruf für sich selbst plus die Aufrufe aller Teilbäume. Die Tabelle fülle ich von unten bis zum
    gefragten Argument. Bei `wege` mit `n - 1` und `n - 2` ergibt das 1, 1, 3, 5, 9, 15. Sind alle Teilbäume gleich
    groß, multipliziere ich pro Ebene mit der Zahl der Selbstaufrufe.
  kernpunkte:
    - Basisfall zählt 1
    - 1 plus Aufrufe der Teilbäume
    - Tabelle von unten füllen
- id: rv-karte-ausgaben-aufrufe
  frage: Worauf achtest du, wenn nach der Zahl der Ausgaben statt nach der Zahl der Aufrufe gefragt ist?
  antwort: |
    Ich schaue nach, in welchem Fall die Ausgabe steht. Steht sie nur im Basisfall, zähle ich die Blätter, bei zwei
    Selbstaufrufen mit `n - 1` also 2 hoch `n`. Steht sie im rekursiven Fall, zähle ich die inneren Knoten. Steht sie in
    beiden, zählt jeder Aufruf. Die typische Verwechslung ist, 15 Aufrufe zu nennen, wenn nur die 8 Blätter etwas
    ausgeben.
  kernpunkte:
    - Ort der Ausgabe bestimmen
    - Basisfall heißt Blätter zählen
    - nicht Aufrufe mit Ausgaben verwechseln
- id: rv-karte-terminierung
  frage: Was bedeuten Fundiertheit und Fortschritt, und wie prüfst du damit, ob eine Rekursion endet?
  antwort: |
    Fundiert ist eine Rekursion, wenn sie einen Basisfall hat, den die erlaubten Eingaben erreichen können. Fortschritt
    heißt, dass jeder Selbstaufruf die Argumente um einen Mindestbetrag näher an diesen Basisfall bringt. Ich prüfe
    beides und zusätzlich, ob man den Basisfall überspringen kann. Gegenbeispiel: Der Basisfall `x == 1` mit dem
    Selbstaufruf `x / 2` ist für `x <= 0` nicht erreichbar, denn die Folge landet bei 0, und `0 / 2` bleibt 0.
  kernpunkte:
    - Basisfall erreichbar
    - jeder Schritt bringt näher
    - Überspringen und Stillstand prüfen
- id: rv-karte-quiz-implementierungen
  frage: Im Quiz stehen vier Implementierungen einer Methode. Wie gehst du vor?
  antwort: |
    Ich lese zuerst die Beschreibung und die Vorbedingung, denn nur erlaubte Eingaben zählen. Dann prüfe ich jede
    Implementierung auf Terminierung, also Basisfall, Fortschritt und mögliche Exceptions. Danach rechne ich das kleinste
    erlaubte Argument und zwei kleine Beispiele durch. Typische Fallen sind ein fehlender leerer String, `char + char`,
    das eigene Zeichen an der falschen Stelle und überlappende Paare, die übersprungen werden.
  kernpunkte:
    - Vorbedingung beachten
    - Terminierung und Exceptions prüfen
    - kleinsten Fall und kleine Beispiele rechnen
- id: rv-karte-hanoi
  frage: Erkläre die rekursive Lösung der Türme von Hanoi und wie viele Züge sie braucht.
  antwort: |
    Um `n` Scheiben von A nach C zu bringen, bringe ich die oberen `n - 1` Scheiben von A nach B, lege die größte
    Scheibe von A nach C und bringe die `n - 1` Scheiben von B nach C. Zwei der drei Schritte sind kleinere Aufgaben
    derselben Art, die Methode ist also verzweigt. Für die Züge gilt `Z(n) = 2 · Z(n - 1) + 1` mit `Z(0) = 0`. Das ergibt
    2 hoch `n` weniger 1 Züge, für 10 Scheiben 1023.
  kernpunkte:
    - Teilturm weg, größte Scheibe, Teilturm drauf
    - zwei Selbstaufrufe, verzweigt
    - 2 hoch n weniger 1 Züge
- id: rv-karte-binom
  frage: Warum ist der rekursive Binomialkoeffizient für große Zahlen so langsam?
  antwort: |
    Die Methode ruft sich mit `binom(n - 1, k - 1)` und `binom(n - 1, k)` zweimal auf. Dabei landen viele Zweige bei
    denselben Teilaufgaben, und jede wird jedes Mal neu berechnet. Jedes Blatt liefert 1, also hat der Baum so viele
    Blätter, wie das Ergebnis groß ist. Für `binom(30, 15)` mit dem Wert 155117520 sind das über 310 Millionen Aufrufe.
  kernpunkte:
    - zwei Selbstaufrufe pro Durchlauf
    - gleiche Teilaufgaben mehrfach berechnet
    - so viele Blätter wie das Ergebnis groß ist
- id: rv-karte-fraktal
  frage: Wie zeichnest du ein Fraktal rekursiv mit CodeDraw, und wo ist der Basisfall?
  antwort: |
    Die Methode bekommt wie in Kapitel 5 das `CodeDraw`-Objekt als Parameter, dazu Position und Größe. Sie zeichnet eine
    Form und ruft sich für kleinere Kopien mit veränderter Position auf. Der Basisfall ist meist implizit: Ist die Form
    kleiner als eine Grenze, zeichnet die Methode nichts und endet. Eine Klassenvariable für das Fenster wäre zwar
    möglich, ist aber auf Blatt 3 als globale Variable verboten.
  kernpunkte:
    - CodeDraw-Objekt als Parameter
    - Form zeichnen, dann kleinere Kopien
    - impliziter Basisfall über eine Größengrenze
- id: rv-karte-ueberdecken
  frage: Was musst du ändern, damit in deinem Fraktal die größeren Formen die kleineren überdecken?
  antwort: |
    Was zuletzt gezeichnet wird, liegt oben. Der Zeichenbefehl muss deshalb hinter alle Selbstaufrufe, also auf den
    Rückweg. Dann sind alle kleineren Formen im Teilbaum schon gezeichnet, wenn die große darübergemalt wird. Die Farbe
    setze ich direkt vor dem Zeichenbefehl, denn die Selbstaufrufe verändern sie zwischendurch.
  kernpunkte:
    - zuletzt gezeichnet liegt oben
    - Zeichnen nach den Selbstaufrufen
    - Farbe direkt davor setzen
- id: rv-karte-zusatzfragen
  frage: Wie beantwortest du die Zusatzfragen „Wie oft wird die Methode aufgerufen?“ und „Wie viele Quadrate liegen auf der letzten Ebene?“
  antwort: |
    Ich liste die Größen Ebene für Ebene auf, bis die Grenze unterschritten ist. Bei vier Selbstaufrufen vervierfacht
    sich die Zahl der Aufrufe pro Ebene. Bei Seite 200 und Grenze 20 sind die Ebenen 200, 100, 50, 25 und 12. Gezeichnet
    wird bis 25, auf der letzten Ebene also 4 hoch 3 gleich 64 Quadrate. Aufrufe gibt es `1 + 4 + 16 + 64 + 256 = 341`,
    weil die Aufrufe mit 12 auch zählen.
  kernpunkte:
    - Ebenen auflisten
    - Faktor pro Ebene
    - Aufrufe unter der Grenze zählen mit
```
