---
nummer: 9
titel: Code lesen, Codequalität und Debugging
kurz: Fremden Code lesen und erklären, gute Namen und saubere Form, Spaghetticode in Methoden zerlegen und parametrisieren, Refactoring ohne Verhaltensänderung, systematisches Debuggen, Stacktraces lesen und Fehler in KI-Code finden.
teil: methoden
stunden: 4
pruefungsgewicht: 2
voraussetzungen: [werkzeuge, ausdruecke, verzweigungen, schleifen, methoden]
lernziele:
  - fremden Code ohne Ausführen lesen, seinen Ablauf mit einer Trace-Tabelle verfolgen, die Ausgabe exakt angeben und den Zweck in ein bis zwei Sätzen beschreiben
  - schlecht lesbaren Code mit sprechenden Namen, den Java-Namenskonventionen, Klammern und Einrückung umschreiben, ohne sein Verhalten zu ändern
  - wiederholte Codeblöcke erkennen, in Methoden auslagern und feste Zahlen durch Parameter ersetzen, sodass main dieselbe Ausgabe erzeugt
  - Code vereinfachen (refaktorieren), etwa bei boolean-Rückgaben, verschachtelten Bedingungen und doppeltem Code, und mit Testfällen prüfen, dass sich das Verhalten nicht ändert
  - Fehler als Compiler-, Laufzeit- oder Logikfehler einordnen und systematisch mit Hypothese, kleinster Eingabe, Kontrollausgaben und Debugger eingrenzen
  - einen Stacktrace lesen, daraus Art, Ursache, Methode und Zeile einer Exception bestimmen und die eigentliche Ursache im Code beheben
  - Fehler in fremdem oder KI-erzeugtem Code mit Gegenbeispielen nachweisen, die fehlerhaften Zeilen benennen und den Code so korrigieren, dass alle Beispiele der Angabe stimmen
---

**Worum geht es?** Bisher hast du vor allem eigenen Code geschrieben. In diesem Kapitel geht es um den
umgekehrten Weg: Du bekommst Code, den jemand anderer geschrieben hat, und sollst ihn verstehen,
verbessern oder reparieren. Dieser andere kann eine Kollegin sein, ein Lehrender, der absichtlich
unleserlichen Code vorgibt, oder ein KI-Werkzeug wie ChatGPT. In allen drei Fällen brauchst du dieselben
Fähigkeiten: genau lesen, mitspielen, Fehler eingrenzen und sauber umbauen.

**Was kommt in der Prüfung?**

- **Aufgabenblätter:** Auf Blatt 3 (Wintersemester 2023) bekommst du sogenannten **Spaghetticode**, also unübersichtlich geschriebenen Code. Du beschreibst, was er tut, schlägst Verbesserungen vor, zerlegst ihn in Methoden und machst die Breite eines Musters einstellbar. In einer anderen Aufgabe von Blatt 3 sollst du fehlerhaften Code reparieren, den ChatGPT erzeugt hat. Auf Blatt 4 erklärst du, warum eine Methode eine **Exception** wirft (einen Abbruch zur Laufzeit), und behebst den Fehler.
- **Feedbackgespräch:** Dort musst du deinen Code und fremden Code erklären. Mögliche Fragen sind etwa „Was macht dieser Teil?“, „Warum hast du diese Methode eingeführt?“ und „Wie hast du den Fehler gefunden?“.
- **Quiz:** Viele Quizfragen sind Code-Lesefragen. Du sollst Ausgaben bestimmen, Exceptions erkennen und beurteilen, ob zwei Codestücke dasselbe tun.
- **Test:** Im Programmiertest am Rechner gibt es keine Hilfe außer dir selbst. Wer systematisch debuggen kann, findet einen Fehler in Minuten statt in einer halben Stunde.

**Wozu brauchst du das später?** Programmierer lesen deutlich mehr Code, als sie schreiben. Jede größere
Aufgabe in den Kapiteln über Rekursion und Arrays wirst du mit den Techniken dieses Kapitels debuggen.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Fehlerarten und Fehlermeldungen** aus [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen): Compilerfehler, Laufzeitfehler und logische Fehler.
- **Ausdrücke** aus [Kapitel 2](/lernen/ep1/ausdruecke): Ganzzahldivision, `char` als Zahl und String-Methoden wie `charAt` und `length`.
- **Verzweigungen und Schleifen** aus [Kapitel 3](/lernen/ep1/verzweigungen) und [Kapitel 4](/lernen/ep1/schleifen), dazu Trace-Tabellen.
- **Methoden** aus [Kapitel 6](/lernen/ep1/methoden): Parameter, Rückgabewerte und Vorbedingungen.

Die folgenden sechs Fragen zeigen dir, ob diese Werkzeuge sitzen. Wenn eine Frage nicht klappt, wiederhole
zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: cq-ein-ganzzahl
titel: Durchschnitt mit ganzen Zahlen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int summe = 7 + 8 + 8;
      System.out.println(summe / 3);
      System.out.println(summe / 3.0);
    loesung: |
      7
      7.666666666666667
    fehler:
      - wert: "7.666666666666667\n7.666666666666667"
        meldung: In der ersten Zeile stehen zwei `int`-Werte. Bei `int / int` fällt der Nachkommaanteil weg, das Ergebnis ist `7`.
hinweise:
  - '`summe` ist 23. Teilt man zwei `int`-Werte, fällt der Rest weg. Steht eine Kommazahl dabei, rechnet Java mit `double`.'
loesung: |
  `summe` ist 7 + 8 + 8 = 23. `23 / 3` ist eine Ganzzahldivision: 3 passt siebenmal in 23, der Rest fällt weg. Ausgabe `7`.
  ---
  `23 / 3.0` enthält eine Kommazahl, also rechnet Java mit `double` und gibt `7.666666666666667` aus.
```

```aufgabe
id: cq-ein-bedingung
titel: Eine zusammengesetzte Bedingung
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [3.2 Bedingungen verknüpfen](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: ausgabe
    code: |
      int a = 6, b = 3;
      System.out.println(a > 5 && b > 5);
      System.out.println(a > 5 || b > 5);
      System.out.println(!(a % b == 0));
    loesung: |
      false
      true
      false
    fehler:
      - wert: "true\ntrue\nfalse"
        meldung: Bei `&&` müssen **beide** Seiten wahr sein. `b > 5` ist falsch, weil `b` den Wert 3 hat.
      - wert: "false\ntrue\ntrue"
        meldung: '`6 % 3` ist 0, also ist `a % b == 0` wahr. Das `!` davor macht daraus `false`.'
hinweise:
  - Werte jede Teilbedingung einzeln aus und verknüpfe erst danach.
loesung: |
  `a > 5` ist wahr, `b > 5` ist falsch. Mit `&&` ergibt das `false`, mit `||` ergibt das `true`.
  ---
  `6 % 3` ist 0, also ist `a % b == 0` wahr. `!` kehrt das um: `false`.
```

```aufgabe
id: cq-ein-schleife
titel: Eine while-Schleife verfolgen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: ausgabe
    code: |
      int x = 40;
      int n = 0;
      while (x > 5) {
          x = x / 2;
          n++;
      }
      System.out.println(x + " " + n);
    loesung: |
      5 3
    fehler:
      - wert: "2 4"
        meldung: Nach drei Durchläufen ist `x` gleich 5. Die Bedingung `5 > 5` ist falsch, also endet die Schleife dort.
hinweise:
  - Schreib nach jedem Durchlauf `x` und `n` auf und prüfe danach die Bedingung.
loesung: |
  `x` wird halbiert: 40, 20, 10, 5. Dabei zählt `n` mit: 1, 2, 3.
  ---
  Bei `x = 5` ist `5 > 5` falsch, die Schleife endet. Ausgabe `5 3`.
```

```aufgabe
id: cq-ein-string
titel: Zeichen eines Strings zählen
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      String s = "Bananenbrot";
      int z = 0;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == 'n') {
              z++;
          }
      }
      System.out.println(z);
    loesung: |
      3
    fehler:
      - wert: "2"
        meldung: Geh das Wort Zeichen für Zeichen durch. `Ba-n-a-n-e-n-brot` enthält drei kleine `n`.
hinweise:
  - Die Schleife prüft jedes Zeichen genau einmal, von Position 0 bis `s.length() - 1`.
loesung: |
  Die Schleife geht jedes Zeichen von `"Bananenbrot"` durch und zählt die `'n'`.
  ---
  Die `n` stehen an den Positionen 2, 4 und 6. Ausgabe `3`.
```

```aufgabe
id: cq-ein-methode
titel: Rückgabewert und Ausgabe
niveau: 1
art: check
angabe: |
  Was gibt dieses Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Doppelt {
          public static int verdopple(int n) {
              System.out.println("rechne");
              return 2 * n;
          }

          public static void main(String[] args) {
              int a = verdopple(4);
              System.out.println(a + 1);
          }
      }
    loesung: |
      rechne
      9
    fehler:
      - wert: "9"
        meldung: Die Methode gibt selbst `rechne` aus, bevor sie den Wert zurückgibt. Diese Ausgabe passiert beim Aufruf in der ersten Zeile von `main`.
      - wert: "rechne\n8"
        meldung: '`a` ist 8, und `main` gibt `a + 1` aus.'
hinweise:
  - Ein Aufruf führt zuerst den Rumpf der Methode aus, mit allen Ausgaben darin.
loesung: |
  `verdopple(4)` gibt `rechne` aus und liefert 8. Dieser Wert landet in `a`.
  ---
  Danach gibt `main` den Wert `a + 1 = 9` aus.
```

```aufgabe
id: cq-ein-fehlerart
titel: Welche Art von Fehler?
niveau: 1
art: check
angabe: |
  Ein Programm enthält die Zeile `int teiler = 0;` und später die Zeile `System.out.println(10 / teiler);`.
  Welche Art von Fehler tritt auf? (Wiederholung: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))
teile:
  - typ: auswahl
    optionen:
      - 'Ein Compilerfehler: IntelliJ unterstreicht die Zeile rot, und das Programm startet nicht.'
      - 'Ein Laufzeitfehler: Das Programm startet und bricht bei der Division mit einer Exception ab.'
      - 'Ein logischer Fehler: Das Programm läuft durch und gibt `0` aus.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Compiler prüft Typen und Schreibweise, rechnet aber nicht mit den Werten der Variablen. Die Zeile ist für ihn korrekt.
      - wert: 2
        meldung: Ganzzahlige Division durch 0 liefert kein Ergebnis. Java bricht mit einer `ArithmeticException` ab.
hinweise:
  - Überlege, wann der Wert 0 im Divisor bekannt wird. Beim Übersetzen oder erst beim Ausführen?
loesung: |
  Der Compiler sieht nur Typen: `10 / teiler` ist `int / int` und damit erlaubt.
  ---
  Erst beim Ausführen hat `teiler` den Wert 0. Dann wirft Java eine `ArithmeticException: / by zero`, also ein Laufzeitfehler.
```

## Code lesen: Was tut dieses Programm?

```aufgabe
id: cq-lesen-check-trace
titel: Zwei Variablen mitschreiben
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? Trace-Tabellen kennst du aus [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
teile:
  - typ: ausgabe
    code: |
      int a = 2, b = 1;
      while (a < 12) {
          b = b + a;
          a = a + 4;
      }
      System.out.println(a + " " + b);
    loesung: |
      14 19
    fehler:
      - wert: "10 9"
        meldung: Nach zwei Durchläufen ist `a` gleich 10, und `10 < 12` ist noch wahr. Die Schleife läuft ein drittes Mal.
      - wert: "14 31"
        meldung: In jedem Durchlauf wird zuerst `b` mit dem **alten** `a` erhöht. Erst danach wächst `a` um 4.
hinweise:
  - Schreib in einer Tabelle nach jedem Durchlauf `a` und `b` auf.
loesung: |
  Start: `a = 2`, `b = 1`. Durchlauf 1: `b = 1 + 2 = 3`, dann `a = 6`. Durchlauf 2: `b = 3 + 6 = 9`, dann `a = 10`.
  ---
  `10 < 12` ist noch wahr. Durchlauf 3: `b = 9 + 10 = 19`, dann `a = 14`. Jetzt ist `14 < 12` falsch. Ausgabe `14 19`.
```

Stell dir vor, du bekommst diesen Code und die Frage „Was macht er?“:

```java
public static int f(String s) {
    int a = 0;
    for (int i = 0; i < s.length(); i++) {
        if (s.charAt(i) == ' ') {
            a++;
        }
    }
    return a + 1;
}
```

Die Namen `f`, `s` und `a` verraten nichts. Einen Kommentar gibt es nicht. Trotzdem kannst du
herausfinden, was der Code tut, ohne ihn auszuführen. Das nennt man **Code lesen** oder **Codeanalyse**:
Du spielst den Computer und verfolgst Zeile für Zeile, was passiert. Genau das verlangt Teil a) der
Spaghetticode-Aufgabe auf Blatt 3: „Beschreiben Sie die Funktionsweise in wenigen Sätzen.“

Code lesen hat zwei Stufen. Auf der ersten Stufe bestimmst du, **was bei einer bestimmten Eingabe
herauskommt**. Das kannst du mechanisch: Trace-Tabelle anlegen, mitrechnen, fertig. Auf der zweiten Stufe
beschreibst du, **wozu der Code da ist**, und zwar für jede Eingabe. Dafür spielst du mehrere Eingaben
durch und suchst das Muster.

:::beispiel[Die Methode f Zeile für Zeile lesen]
Wir spielen den Aufruf `f("Ich lerne Java")` durch.

1. **Kopf lesen.** `public static int f(String s)` nimmt einen String und liefert eine ganze Zahl. Mehr verrät der Kopf nicht.
2. **Variablen sammeln.** `a` startet bei 0 und wird nur in Zeile 5 verändert, und zwar um 1. `a` ist also ein **Zähler**.
3. **Bedingung lesen.** Gezählt wird, wenn `s.charAt(i) == ' '` gilt, also wenn an Position `i` ein Leerzeichen steht. Die Schleife geht alle Positionen von 0 bis `s.length() - 1` durch.
4. **Mitspielen.** `"Ich lerne Java"` hat Leerzeichen an den Positionen 3 und 9. Am Ende ist `a = 2`.
5. **Rückgabe lesen.** Die Methode liefert `a + 1 = 3`.

Drei ist genau die Anzahl der Wörter in „Ich lerne Java“. Das ist kein Zufall: Zwischen drei Wörtern stehen
zwei Leerzeichen, und ein Wort mehr als Lücken gibt es immer. Wir prüfen die Vermutung mit einem zweiten
Beispiel: `f("EP1")` hat kein Leerzeichen und liefert `0 + 1 = 1`. Ein Wort, passt.

**Zweck in einem Satz:** „`f` liefert die Anzahl der Wörter in `s`, wenn die Wörter durch genau ein
Leerzeichen getrennt sind.“
:::

```aufgabe
id: cq-lesen-check-randfall
titel: Ein Randfall für f
niveau: 1
art: check
angabe: |
  Was liefert `f("")`, also die Methode `f` aus dem Beispiel mit dem leeren String?
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: Der leere String enthält zwar kein Wort, aber die Methode zählt nicht Wörter. Sie zählt Leerzeichen und addiert am Ende 1.
loesung: |
  Die Schleife läuft nie, weil `"".length()` gleich 0 ist. `a` bleibt 0.
  ---
  Zurückgegeben wird `a + 1 = 1`. Die Zweckbeschreibung „zählt Wörter“ stimmt hier also nicht.
```

Der Nachsatz „wenn die Wörter durch genau ein Leerzeichen getrennt sind“ ist wichtig. Für
`f("Hallo  Welt")` mit zwei Leerzeichen liefert die Methode 3, obwohl es nur zwei Wörter sind. Für den
leeren String `f("")` liefert sie 1, obwohl er kein Wort enthält. Eine gute Beschreibung nennt solche
Bedingungen. Sie sind die Vorbedingung der Methode (siehe
[6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)).

:::definition[Zweckbeschreibung]
Eine **Zweckbeschreibung** sagt in ein bis zwei Sätzen, **was** ein Codestück für jede erlaubte Eingabe
liefert oder bewirkt. Sie nennt Eingaben, Ergebnis und nötige Bedingungen. Sie beschreibt **nicht**, wie
der Code das Schritt für Schritt erreicht.
:::

**Beispiel:** „Die Methode liefert die Anzahl der Großbuchstaben in `s`.“ Das ist eine Zweckbeschreibung.
Man kann sie überprüfen, ohne den Code zu sehen.

**Kein Beispiel:** „Die Methode hat eine Schleife von 0 bis `s.length()`, und wenn das Zeichen zwischen
`'A'` und `'Z'` liegt, wird `a` erhöht.“ Das ist eine **Nacherzählung**. Sie übersetzt den Code nur in
Worte und sagt nicht, wozu er da ist.

:::achtung[Nacherzählen statt erklären]
Bei einer Aufgabe wie Teil a) von Blatt 3 liegt eine Antwort wie diese nahe:

> „Zuerst wird `a` auf 0 gesetzt. Dann läuft eine for-Schleife über `s`. Wenn ein Leerzeichen kommt,
> wird `a` um eins erhöht. Am Ende wird `a + 1` zurückgegeben.“

Jeder Satz stimmt, aber die Frage ist nicht beantwortet. Die naheliegende Nachfrage im Feedbackgespräch
wäre dann „Und wozu ist das gut?“. Richtig ist: „Die Methode zählt die Wörter in `s`, wenn die Wörter durch genau
ein Leerzeichen getrennt sind.“ Die Nacherzählung ist höchstens ein Zwischenschritt auf dem Weg dorthin.
:::

```aufgabe
id: cq-lesen-check-zweck
titel: Nacherzählung oder Zweck?
niveau: 1
art: check
angabe: |
  Welcher Satz ist eine Zweckbeschreibung und keine Nacherzählung?
teile:
  - typ: auswahl
    optionen:
      - 'Die Methode liefert die größere der beiden Zahlen `a` und `b`.'
      - 'Die Methode vergleicht `a` mit `b` und gibt in einem Zweig `a` und im anderen `b` zurück.'
      - 'Die Methode enthält ein `if` mit der Bedingung `a > b`.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dieser Satz beschreibt den Ablauf, aber nicht das Ergebnis. Welche der beiden Zahlen kommt heraus?
      - wert: 2
        meldung: Das beschreibt nur ein Stück Code. Ein Leser weiß danach immer noch nicht, wozu die Methode da ist.
loesung: |
  Eine Zweckbeschreibung nennt das Ergebnis für jede Eingabe.
  ---
  „liefert die größere der beiden Zahlen“ tut das. Die anderen Sätze erzählen nur nach, was im Code steht.
```

Das zweite Beispiel zeigt, wie eine Trace-Tabelle das Muster sichtbar macht.

:::beispiel[Ein Muster in der Trace-Tabelle entdecken]
```java
public static int g(int n) {
    int r = 0;
    int k = 1;
    while (k <= n) {
        r = r + k;
        k = k + 2;
    }
    return r;
}
```

Wir verfolgen `g(7)`. Jede Zeile der Tabelle zeigt die Werte **nach** einem Durchlauf. Vor jedem Durchlauf
prüfen wir `k <= 7`.

|Durchlauf|Prüfung|Ergebnis|`r` danach|`k` danach|
|---|---|---|---|---|
|Start|–|–|0|1|
|1|`1<=7`|wahr|1|3|
|2|`3<=7`|wahr|4|5|
|3|`5<=7`|wahr|9|7|
|4|`7<=7`|wahr|16|9|
|Ende|`9<=7`|falsch|16|9|

`g(7)` liefert 16. Jetzt suchen wir das Muster. `k` nimmt die Werte 1, 3, 5, 7 an, also die ungeraden
Zahlen. `r` addiert genau diese Werte: 1 + 3 + 5 + 7 = 16.

**Zweck:** „`g` liefert die Summe aller ungeraden Zahlen von 1 bis `n`.“ Zur Kontrolle: `g(8)` addiert
ebenfalls 1, 3, 5 und 7, denn 9 ist größer als 8. Ergebnis 16. Und `g(0)` liefert 0, weil die Schleife
nie läuft.

Eine Beobachtung nebenbei: Die Ergebnisse 1, 4, 9, 16 sind Quadratzahlen. Die Summe der ersten `m`
ungeraden Zahlen ist immer `m · m`. Solche Entdeckungen machst du nur, wenn du die Werte aufschreibst.
:::

:::achtung[Einen Durchlauf zu viel eintragen]
Ein häufiger Fehler in Trace-Tabellen sieht so aus:

|Durchlauf|`r` danach|`k` danach|
|---|---|---|
|4|16|9|
|5|25|11|

Die fünfte Zeile ist falsch. Nach Durchlauf 4 ist `k = 9`. **Vor** Durchlauf 5 prüft Java `9 <= 7`, und
das ist falsch. Die Schleife endet also, und `r` bleibt 16. Wer die Bedingung erst nach dem Rechnen
prüft, trägt einen Durchlauf zu viel ein. Prüfe die Bedingung deshalb immer, **bevor** du die nächste
Zeile ausfüllst.
:::

:::merke[Code lesen in fünf Schritten]
1. **Kopf lesen:** Was geht hinein (Parameter), was kommt heraus (Rückgabetyp)?
2. **Rollen der Variablen bestimmen:** Zähler, Summe, Ergebnis-String, Laufvariable oder Merker für „gefunden“?
3. **Mit einem kleinen Beispiel mitspielen:** Trace-Tabelle anlegen und die Bedingung vor jedem Durchlauf prüfen.
4. **Muster suchen und den Zweck in einem Satz formulieren:** was, nicht wie.
5. **Mit einem zweiten Beispiel prüfen,** am besten mit einem Randfall: leerer String, 0, eine einzige Ziffer, ein einziges Zeichen.
:::

```reflexion
frage: Warum reicht ein einziges durchgespieltes Beispiel nicht, um den Zweck eines Codestücks sicher zu bestimmen? Denk an die Methode f mit den Leerzeichen.
antwort: |
  Ein einziges Beispiel passt oft zu mehreren Erklärungen. Bei `f("Ich lerne Java")` mit Ergebnis 3
  könnte man auch vermuten, die Methode zähle die großen Anfangsbuchstaben plus eins. Erst ein zweites
  Beispiel trennt solche Vermutungen. Randfälle wie der leere String zeigen außerdem, für welche
  Eingaben die Beschreibung gar nicht gilt. Diese Grenzen gehören in die Zweckbeschreibung, denn genau
  dort entstehen später Fehler.
```

```aufgabe
id: cq-lesen-gefuehrt
titel: Eine Methode geführt lesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Was liefert der Aufruf `h(10)`? Löse die Aufgabe zuerst geführt in kleinen Schritten.

  ```java
  public static int h(int n) {
      int z = 0;
      while (n > 0) {
          n = n - 3;
          z++;
      }
      return z;
  }
  ```
teile:
  - typ: zahl
    label: Rückgabewert von h(10)
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Nach drei Durchläufen ist `n = 1`, und `1 > 0` ist noch wahr. Es folgt ein vierter Durchlauf.
      - wert: "-2"
        meldung: Das ist der Endwert von `n`. Zurückgegeben wird aber `z`.
gefuehrt:
  - text: Welche Rolle hat die Variable `z`?
    teil:
      typ: auswahl
      optionen: ['Sie zählt die Durchläufe der Schleife.', 'Sie speichert die Summe aller Werte von `n`.', 'Sie merkt sich, ob `n` gerade ist.']
      richtig: [0]
    erklaerung: '`z` beginnt bei 0 und wird in jedem Durchlauf um genau 1 erhöht. Das ist ein Zähler.'
  - text: Welchen Wert hat `n` nach dem ersten Durchlauf?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: '`n = 10 - 3 = 7`. Gleichzeitig wird `z` zu 1.'
  - text: Welche Werte hat `n` nach dem zweiten, dritten und vierten Durchlauf? Gib den Wert nach dem vierten Durchlauf ein.
    teil: { typ: zahl, loesung: "-2" }
    erklaerung: '`n` wird 4, dann 1, dann -2. Vor dem vierten Durchlauf gilt noch `1 > 0`.'
  - text: Warum endet die Schleife jetzt, und was wird zurückgegeben?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '`-2 > 0` ist falsch. Die Schleife ist viermal gelaufen, also ist `z = 4`.'
hinweise:
  - Lege eine Trace-Tabelle mit den Spalten `n` und `z` an. Prüfe vor jedem Durchlauf `n > 0`.
loesung: |
  **Ansatz:** `z` ist ein Zähler für die Durchläufe. Wir verfolgen `n` in einer Trace-Tabelle.
  ---
  `n`: 10, 7, 4, 1, -2. `z`: 0, 1, 2, 3, 4. Bei `n = -2` ist `n > 0` falsch.
  ---
  `h(10)` liefert 4. Zweck: `h` zählt, wie oft man 3 von `n` abziehen muss, bis höchstens 0 übrig bleibt. Für positive `n` ist das „n durch 3, aufgerundet“. Probe: 10 geteilt durch 3 ist ungefähr 3,33, aufgerundet 4.
```

```aufgabe
id: cq-lesen-ausgabe-gross
titel: Was sammelt die Methode?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Beschreibe danach für dich in einem Satz, was `q` tut.
teile:
  - typ: ausgabe
    code: |
      public class Sammeln {
          public static String q(String s) {
              String r = "";
              for (int i = 0; i < s.length(); i++) {
                  char c = s.charAt(i);
                  if (c >= 'A' && c <= 'Z') {
                      r = r + c;
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(q("Technische Universität Wien"));
              System.out.println(q("ep1") + "|");
              System.out.println(q("EP1 ist OK"));
          }
      }
    loesung: |
      TUW
      |
      EPOK
    fehler:
      - wert: "TUW\nep1|\nEPOK"
        meldung: '`q` behält nur Zeichen zwischen `''A''` und `''Z''`. In `"ep1"` gibt es keines, also liefert `q` den leeren String.'
      - wert: "TUW\n|\nEP1OK"
        meldung: Die Ziffer `1` liegt nicht zwischen `'A'` und `'Z'`. Sie wird nicht übernommen.
hinweise:
  - Die Bedingung `c >= 'A' && c <= 'Z'` ist genau für die Großbuchstaben A bis Z wahr.
loesung: |
  **Ansatz:** `r` ist ein Ergebnis-String, an den nur die Zeichen angehängt werden, die die Bedingung erfüllen.
  ---
  Die Bedingung ist für Großbuchstaben wahr. Aus `"Technische Universität Wien"` bleiben `T`, `U`, `W`. Aus `"ep1"` bleibt nichts, also wird nur `|` ausgegeben. Aus `"EP1 ist OK"` bleiben `E`, `P`, `O`, `K`.
  ---
  Zweck: `q` liefert alle Großbuchstaben von `s` in ihrer Reihenfolge, zum Beispiel die Initialen eines Namens.
```

```aufgabe
id: cq-lesen-trace-mal3
titel: Trace-Tabelle ausfüllen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Fülle die Trace-Tabelle für diesen Code aus. Jede Zeile zeigt die Werte nach einem Durchlauf.

  ```java
  int a = 1, b = 0;
  while (a < 20) {
      b = b + 1;
      a = a * 3;
  }
  ```
teile:
  - typ: trace
    spalten: [a, b]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3]
    vorgabe: 1
    loesung: [[1, 0], [3, 1], [9, 2], [27, 3]]
    fehler:
      - wert: [1, 0, 3, 1, 9, 2, 27, 2]
        meldung: '`b` wird in jedem Durchlauf erhöht, auch im dritten. Nach drei Durchläufen ist `b = 3`.'
hinweise:
  - Prüfe vor jedem Durchlauf `a < 20`. Nach Durchlauf 2 ist `a = 9`, also läuft die Schleife noch einmal.
loesung: |
  **Ansatz:** Vor jedem Durchlauf die Bedingung prüfen, dann beide Anweisungen ausführen.
  ---
  `a`: 1, 3, 9, 27. `b`: 0, 1, 2, 3. Bei `a = 27` ist `27 < 20` falsch, die Schleife endet.
  ---
  Zweck: `b` zählt, wie oft man 1 mit 3 multiplizieren muss, bis das Ergebnis mindestens 20 ist.
```

```aufgabe
id: cq-lesen-zweck-palindrom
titel: Den Zweck einer Methode bestimmen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was ist der Zweck dieser Methode? Spiele zuerst `p("Rentner")` und `p("otto")` durch.

  ```java
  public static boolean p(String s) {
      int i = 0;
      int j = s.length() - 1;
      while (i < j) {
          if (s.charAt(i) != s.charAt(j)) {
              return false;
          }
          i++;
          j--;
      }
      return true;
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - '`p` prüft, ob `s` vorwärts und rückwärts gelesen genau gleich ist.'
      - '`p` prüft, ob das erste und das letzte Zeichen von `s` gleich sind.'
      - '`p` prüft, ob alle Zeichen von `s` gleich sind.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Schleife geht weiter: `i` wächst und `j` sinkt. Probiere `p("abca")`. Erstes und letztes Zeichen sind gleich, trotzdem liefert `p` den Wert `false`.'
      - wert: 2
        meldung: 'Verglichen wird immer ein Zeichen von vorne mit einem Zeichen von hinten. Probiere `p("aba")`: Es liefert `true`, obwohl nicht alle Zeichen gleich sind.'
hinweise:
  - '`i` startet vorne, `j` startet hinten. Welche Paare von Zeichen werden verglichen?'
  - 'Bei `"Rentner"` werden `R` und `r` verglichen. Groß- und Kleinbuchstaben sind verschiedene Zeichen.'
loesung: |
  **Ansatz:** Die Rollen klären: `i` läuft von vorne nach hinten, `j` von hinten nach vorne. Die Schleife läuft, bis sich die beiden treffen.
  ---
  Verglichen werden die Paare (0, letzte), (1, vorletzte) und so weiter. Ein ungleiches Paar beendet die Methode sofort mit `false`.
  ---
  `p("otto")`: `o = o`, `t = t`, dann `i = 2`, `j = 1`, Ende mit `true`. `p("Rentner")`: `R` und `r` sind verschieden, also `false`.
  ---
  Zweck: `p` prüft, ob `s` ein **Palindrom** ist, also vorwärts und rückwärts gleich gelesen wird. Groß- und Kleinschreibung zählt dabei.
```

```aufgabe
id: cq-lesen-nie-ausgefuehrt
titel: Welche Anweisungen laufen nie?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Methode wird mit `f(4)` aufgerufen. Welche Zeilen mit einer **Zuweisung** werden dabei nicht ausgeführt? Markiere sie.
teile:
  - typ: zeilen
    code: |
      public static int f(int n) {
          int ergebnis = 0;
          if (n % 2 == 1) {
              ergebnis = n * 3 + 1;
          } else {
              ergebnis = n / 2;
          }
          if (ergebnis > 10) {
              ergebnis = 10;
          }
          return ergebnis;
      }
    loesung: [4, 9]
    fehler:
      - wert: [4]
        meldung: 'Prüfe auch das zweite `if`. Nach Zeile 6 ist `ergebnis = 2`. Ist `2 > 10`?'
      - wert: [6, 9]
        meldung: '`4 % 2` ist 0, nicht 1. Also läuft der `else`-Zweig in Zeile 6, und Zeile 4 wird übersprungen.'
hinweise:
  - Werte zuerst `4 % 2 == 1` aus. Welcher Zweig läuft dann?
  - Rechne `ergebnis` nach dem ersten `if` aus und prüfe damit die zweite Bedingung.
loesung: |
  **Ansatz:** Den Aufruf durchspielen und jede Bedingung mit dem aktuellen Wert auswerten.
  ---
  Zeile 2 läuft immer. `4 % 2 == 1` ist falsch, also läuft Zeile 6 (`ergebnis = 2`) und Zeile 4 nicht.
  ---
  `2 > 10` ist falsch, also läuft Zeile 9 nicht. Nicht ausgeführt werden die Zeilen 4 und 9. Kontrolle: `f(4)` liefert 2.
```

```aufgabe
id: cq-lesen-rf-wurzel
titel: Aussagen über eine unbekannte Methode
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Beurteile jede Aussage über diese Methode.

  ```java
  public static int t(int n) {
      int s = 0;
      for (int i = 1; i * i <= n; i++) {
          s++;
      }
      return s;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`t(16)` liefert 4.'
        richtig: true
        erklaerung: 'Für `i = 1, 2, 3, 4` gilt `i * i <= 16`. Bei `i = 5` ist `25 <= 16` falsch.'
      - text: '`t(15)` liefert ebenfalls 4.'
        richtig: false
        erklaerung: '`4 * 4 = 16` ist größer als 15. Nur `i = 1, 2, 3` passen, also liefert `t(15)` den Wert 3.'
      - text: '`t(0)` liefert 0, weil die Schleife nicht ein einziges Mal läuft.'
        richtig: true
        erklaerung: 'Schon für `i = 1` ist `1 <= 0` falsch.'
      - text: '`t` zählt die Quadratzahlen 1, 4, 9, …, die höchstens `n` sind. Das ist die ganzzahlige Wurzel von `n`.'
        richtig: true
        erklaerung: 'Jeder Durchlauf gehört zu einer Quadratzahl `i * i <= n`. Ihre Anzahl ist die größte ganze Zahl, deren Quadrat höchstens `n` ist.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Rechne `t(15)` genau nach. Ist `4 * 4 <= 15`?'
hinweise:
  - Spiele `t(16)` und `t(15)` getrennt durch. Notiere jeweils, für welche `i` die Bedingung wahr ist.
  - Überlege, welche Zahlen `i * i` in der Bedingung durchläuft.
loesung: |
  **Ansatz:** Für jede Aussage den passenden Aufruf durchspielen und danach das Muster suchen.
  ---
  `t(16)`: `i` = 1 bis 4 erfüllen `i * i <= 16`, Ergebnis 4. `t(15)`: nur `i` = 1 bis 3, Ergebnis 3.
  ---
  `t(0)`: Die Bedingung ist sofort falsch, Ergebnis 0. Zweck: `t` zählt die Quadratzahlen bis `n`, das ist die ganzzahlige Wurzel. Richtig, falsch, richtig, richtig.
```

```aufgabe
id: cq-lesen-collatz
titel: Eine Schleife mit unbekanntem Ende
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Gegeben ist die Methode `v`. Gib zuerst die Ausgabe von `main` an und wähle danach den Zweck von `v`.

  ```java
  public static int v(int n) {
      int z = 0;
      while (n != 1) {
          if (n % 2 == 0) {
              n = n / 2;
          } else {
              n = 3 * n + 1;
          }
          z++;
      }
      return z;
  }
  ```
teile:
  - typ: ausgabe
    label: Ausgabe von main
    codeAnzeigen: false
    code: |
      public class Folge {
          public static int v(int n) {
              int z = 0;
              while (n != 1) {
                  if (n % 2 == 0) {
                      n = n / 2;
                  } else {
                      n = 3 * n + 1;
                  }
                  z++;
              }
              return z;
          }

          public static void main(String[] args) {
              System.out.println(v(1) + " " + v(8) + " " + v(6));
          }
      }
    loesung: |
      0 3 8
    fehler:
      - wert: "1 3 8"
        meldung: Bei `v(1)` ist die Bedingung `1 != 1` sofort falsch. Die Schleife läuft nie, `z` bleibt 0.
      - wert: "0 3 9"
        meldung: 'Zähle die Schritte bei `v(6)` genau: 6, 3, 10, 5, 16, 8, 4, 2, 1. Das sind 9 Zahlen, aber nur 8 Schritte dazwischen.'
  - typ: auswahl
    label: Zweck von v
    optionen:
      - '`v` zählt, wie viele Schritte „gerade Zahl halbieren, ungerade Zahl mal 3 plus 1“ nötig sind, bis man bei 1 ankommt.'
      - '`v` zählt die geraden Zahlen von 1 bis `n`.'
      - '`v` liefert die Anzahl der Ziffern von `n`.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`v(8)` liefert 3, aber von 1 bis 8 gibt es vier gerade Zahlen.'
      - wert: 2
        meldung: '`v(6)` liefert 8, obwohl 6 nur eine Ziffer hat.'
hinweise:
  - 'Spiele `v(8)` durch: 8 ist gerade, also halbieren. Zähle jeden Schritt.'
  - 'Bei `v(6)` kommt eine ungerade Zahl vor: 3 wird zu `3 * 3 + 1 = 10`. Schreib die ganze Zahlenfolge auf, bevor du zählst.'
loesung: |
  **Ansatz:** `z` zählt die Durchläufe. Wir schreiben für jeden Aufruf die Folge der Werte von `n` auf.
  ---
  `v(1)`: `1 != 1` ist falsch, also 0 Schritte. `v(8)`: 8, 4, 2, 1, also 3 Schritte.
  ---
  `v(6)`: 6, 3, 10, 5, 16, 8, 4, 2, 1. Zwischen 9 Zahlen liegen 8 Schritte. Ausgabe `0 3 8`.
  ---
  Zweck: `v` zählt die Schritte der Regel „halbieren oder mal 3 plus 1“ bis zur 1. Diese Folge heißt Collatz-Folge. Ob sie für jede Startzahl bei 1 endet, ist bis heute unbewiesen.
```

## Gute Namen, Einrückung und Kommentare

```aufgabe
id: cq-namen-check-bezeichner
titel: Erlaubte Variablennamen
niveau: 1
art: check
angabe: |
  Welcher dieser Namen ist als Variablenname in Java **nicht** erlaubt? (Wiederholung: [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale))
teile:
  - typ: auswahl
    optionen: ['`2teZahl`', '`zweiteZahl`', '`zahl_2`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`zweiteZahl` besteht nur aus Buchstaben. Das ist erlaubt und sogar guter Stil.'
      - wert: 2
        meldung: Unterstriche und Ziffern sind erlaubt, solange der Name nicht mit einer Ziffer beginnt.
loesung: |
  Ein Name darf Buchstaben, Ziffern, `_` und `$` enthalten, aber nicht mit einer Ziffer beginnen. Außerdem darf er kein reserviertes Wort von Java sein, etwa `int` oder `for`.
  ---
  `2teZahl` beginnt mit der Ziffer 2. Der Compiler lehnt ihn ab.
```

Den Code aus [9.1 Code lesen](/lernen/ep1/codequalitaet/code-lesen-was-tut-dieses-programm) musstest du
mühsam entschlüsseln, weil die Namen `f`, `a` und `s` nichts verraten. Hätte die Methode
`zaehleWoerter(String satz)` geheißen, wäre die halbe Arbeit schon getan. Ein Programm wird viel öfter
gelesen als geschrieben: von dir selbst eine Woche später, von Tutorinnen im Feedbackgespräch und von
Kollegen. Lesbarer Code spart all diesen Lesern Zeit und verhindert Missverständnisse.

Auf den Aufgabenblättern wird das ausdrücklich verlangt. Blatt 3 fragt beim Spaghetticode nach Teilen des
Codes, die man ändern würde, und nach dem Grund dafür. Ein älteres Blatt 3 (Wintersemester 2021) gibt sechs
Methoden mit den Namen `f0` bis `f5` vor. Man soll ihnen sinnvolle Namen geben. Dieser Abschnitt zeigt dir, worauf es
ankommt.

### Namenskonventionen in Java

Ein **Bezeichner** ist der Name, den du einer Variable, einer Methode oder einer Klasse gibst. Was erlaubt
ist, prüft der Compiler. Was **üblich** ist, legen die **Namenskonventionen** fest. Das sind Regeln, auf
die sich alle Java-Programmierer geeinigt haben. Der Compiler prüft sie nicht. Wer sie verletzt, schreibt
trotzdem schwer lesbaren Code, denn jeder Leser erwartet sie.

:::definition[Namenskonventionen in Java]
- **Variablen und Methoden** beginnen klein. Jedes weitere Wort beginnt groß: `anzahlVokale`, `berechneSumme`. Das heißt **camelCase**.
- **Klassen** beginnen groß: `Aufgabe1`, `Spaghetticode`.
- **Konstanten** stehen ganz in Großbuchstaben, Wörter werden mit `_` getrennt: `MAX_BREITE`.
- **Methodennamen** sind meist Verben, die sagen, was die Methode tut: `druckeZeile`, `zaehleZiffern`. Methoden mit `boolean`-Ergebnis beginnen oft mit `ist`, `hat` oder `enthaelt`: `istGerade`.
- **Variablennamen** sind Nomen, die sagen, was drinsteht: `summe`, `anzahl`, `ergebnis`. Für kurze Schleifenvariablen sind `i` und `j` üblich und erlaubt.
:::

**Beispiel:** `public static boolean istPalindrom(String wort)` hält alle Regeln ein. Der Name beginnt klein,
ist ein `ist`-Name für ein `boolean`-Ergebnis, und der Parameter heißt nach seinem Inhalt.

**Kein Beispiel:** `public static boolean Pal(String X)` kompiliert genauso. Aber `Pal` beginnt groß wie
eine Klasse, ist eine unklare Abkürzung, und `X` sieht wie eine Konstante aus. Jeder Leser stolpert dreimal.

```aufgabe
id: cq-namen-check-konvention
titel: Was für ein Name ist das?
niveau: 1
art: check
angabe: |
  Nach den Konventionen: Wofür steht der Bezeichner `ANZAHL_ZEILEN` vermutlich?
teile:
  - typ: auswahl
    optionen: ['für eine Konstante', 'für eine Klasse', 'für eine Methode']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Klassen beginnen groß, und jedes weitere Wort beginnt ebenfalls groß, ohne Unterstrich und ohne durchgehende Großbuchstaben, zum Beispiel `AnzahlZeilen`.
      - wert: 2
        meldung: Methoden beginnen klein und haben runde Klammern beim Aufruf, zum Beispiel `zaehleZeilen()`.
loesung: |
  Nur Konstanten werden ganz groß und mit Unterstrichen geschrieben.
  ---
  `ANZAHL_ZEILEN` ist also vermutlich eine Konstante, zum Beispiel `final int ANZAHL_ZEILEN = 5;`. Das Wort `final` bedeutet: Der Wert darf sich nach der ersten Zuweisung nicht mehr ändern.
```

Eine **Konstante** ist eine Variable, deren Wert sich nach der ersten Zuweisung nicht mehr ändern darf.
Du kennzeichnest sie mit dem Wort `final` vor dem Typ: `final int MAX_BREITE = 8;`. Versuchst du später
`MAX_BREITE = 10;`, meldet der Compiler `cannot assign a value to final variable MAX_BREITE`. Konstanten
ersetzen **magische Zahlen**: Zahlen mitten im Code, deren Bedeutung man erraten muss. `if (alter >= 18)`
ist verständlich, aber `if (x >= 38)` ist es nicht. Mit `final int FIEBERGRENZE = 38;` und `if (temperatur >= FIEBERGRENZE)` wird die Zahl erklärt.

:::beispiel[Methoden f0 bis f4 sinnvoll umbenennen]
Diese Methoden sind im Stil eines älteren Aufgabenblatts absichtlich schlecht benannt:

```java
private static int f0(String s) {
    int x = 0;
    for (int i = 0; f2(i, f1(s)); i = f3(i)) {
        if (f4(s.charAt(i))) x = f3(x);
    }
    return x;
}
private static int f1(String s) { return s.length(); }
private static boolean f2(int a, int b) { return a < b; }
private static int f3(int a) { return a + 1; }
private static boolean f4(char c) { return c >= '0' && c <= '9'; }
```

Wir lesen zuerst die kleinen Methoden, denn sie sind die Bausteine.

1. `f1` liefert die Länge von `s`. Guter Name: `laenge`.
2. `f2` liefert, ob `a < b` gilt. Guter Name: `istKleiner`.
3. `f3` liefert `a + 1`. Guter Name: `plusEins`.
4. `f4` prüft, ob `c` zwischen `'0'` und `'9'` liegt, also eine Ziffer ist. Guter Name: `istZiffer`.

Jetzt lässt sich `f0` lesen: Die Schleife läuft von `i = 0`, solange `i` kleiner als die Länge ist, und
erhöht `i` um eins. Für jede Ziffer wird `x` um eins erhöht. `f0` zählt also die Ziffern in `s`.
Guter Name: `zaehleZiffern`, und `x` heißt besser `anzahl`.

Im zweiten Schritt fällt auf: `laenge`, `istKleiner` und `plusEins` machen den Code nicht klarer, sondern
länger. `i < s.length()` und `i++` versteht jeder sofort. Nur `istZiffer` ist ein echter Gewinn, denn der
Name erklärt die Bedingung. Die lesbare Fassung lautet:

```java
private static int zaehleZiffern(String text) {
    int anzahl = 0;
    for (int i = 0; i < text.length(); i++) {
        if (istZiffer(text.charAt(i))) {
            anzahl++;
        }
    }
    return anzahl;
}

private static boolean istZiffer(char c) {
    return c >= '0' && c <= '9';
}
```

Probe: `zaehleZiffern("EP1 am 27.01.")` liefert 5, genau wie `f0`. Das Verhalten ist gleich geblieben.
:::

### Einrückung, Klammern und Kommentare

Die **Einrückung** ist der Abstand am Zeilenanfang. Jeder Block in `{ }` rückt um vier Leerzeichen weiter
ein. Dem Compiler ist das egal, aber das Auge erkennt so sofort, was zu welcher Schleife gehört. Dazu kommen
drei weitere Regeln. Erstens: eine Anweisung pro Zeile. Zweitens: geschweifte Klammern auch dann, wenn ein
`if` oder eine Schleife nur eine Anweisung enthält. Drittens: Leerzeichen um Operatoren, also `i <= n`
statt `i<=n`.

In IntelliJ musst du nicht von Hand einrücken. **Code → Reformat Code** (Tastenkürzel Strg+Alt+L unter
Windows und Linux) formatiert die ganze Datei. **Refactor → Rename** (Umschalt+F6) benennt eine Variable
oder Methode an **allen** Stellen gleichzeitig um.

:::beispiel[Unformatierten Code lesbar machen]
Diese Methode steht in einer einzigen Zeile:

```java
public static void m(int n){for(int i=1;i<=n;i++){if(i%3==0)System.out.print("Fizz");else System.out.print(i);System.out.print(" ");}System.out.println();}
```

Wir formatieren sie in drei Schritten.

1. Nach jeder `{` und nach jedem `;` beginnt eine neue Zeile. Jede `}` steht allein in einer Zeile.
2. Jede Ebene rückt vier Leerzeichen weiter ein. Das `if` steht in der Schleife, also eine Ebene tiefer.
3. `if` und `else` bekommen geschweifte Klammern. Der Name `m` wird zu `druckeFizz`, weil die Methode jede dritte Zahl durch `Fizz` ersetzt.

```java
public static void druckeFizz(int n) {
    for (int i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            System.out.print("Fizz");
        } else {
            System.out.print(i);
        }
        System.out.print(" ");
    }
    System.out.println();
}
```

Jetzt sieht man auf einen Blick: Das Leerzeichen gehört nicht zum `else`, es wird nach **jeder** Zahl
ausgegeben. `druckeFizz(6)` gibt `1 2 Fizz 4 5 Fizz ` aus, mit einem Leerzeichen am Ende.
:::

:::achtung[Einrückung ohne Klammern täuscht]
Dieser Code sieht aus, als würde `zaehler` nur bei positiven Zahlen erhöht:

```java
int x = -2;
int zaehler = 0;
if (x > 0)
    System.out.println("positiv");
    zaehler++;
System.out.println(zaehler);
```

Die Ausgabe ist aber `1`. Ohne geschweifte Klammern gehört nur **eine** Anweisung zum `if`, nämlich die
erste. `zaehler++;` läuft immer, egal wie es eingerückt ist. Richtig ist:

```java
if (x > 0) {
    System.out.println("positiv");
    zaehler++;
}
```

Setze deshalb immer Klammern. Dann stimmt das, was du siehst, mit dem überein, was Java tut.
:::

```aufgabe
id: cq-namen-check-kommentar
titel: Welcher Kommentar hilft?
niveau: 1
art: check
angabe: |
  Welcher Kommentar zur Zeile `for (int i = 1; i < text.length(); i++) {` ist am nützlichsten?
teile:
  - typ: auswahl
    optionen:
      - '`// Position 0 enthält die Kategorie, die Werte beginnen bei 1`'
      - '`// for-Schleife von 1 bis text.length()`'
      - '`// i wird jedes Mal um 1 erhöht`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dieser Kommentar wiederholt nur, was im Code steht. Er sagt nicht, warum die Schleife bei 1 beginnt.
      - wert: 2
        meldung: '`i++` versteht jeder Leser. Der Kommentar liefert keine neue Information.'
loesung: |
  Gute Kommentare erklären das Warum. Ungewöhnlich ist hier der Start bei 1 statt bei 0.
  ---
  Nur der erste Kommentar erklärt diese Entscheidung.
```

:::achtung[Von Hand umbenennen und eine Stelle vergessen]
Jemand benennt `x` in `anzahl` um, übersieht aber eine Stelle:

```java
int anzahl = 0;
for (int i = 0; i < text.length(); i++) {
    if (istZiffer(text.charAt(i))) {
        x++;
    }
}
```

Der Compiler meldet `error: cannot find symbol` mit `symbol: variable x`. Noch gefährlicher ist es, wenn
es zufällig eine andere Variable `x` gibt: Dann kompiliert der Code und rechnet falsch. Benenne deshalb mit
**Refactor → Rename** um. IntelliJ ändert dann jede Stelle, an der genau diese Variable vorkommt.
:::

**Kommentare** hast du in [1.5 Kommentare und lesbarer Code](/lernen/ep1/werkzeuge/kommentare-und-lesbarer-code)
kennengelernt. Für gute Kommentare gilt eine Faustregel: Sie erklären das **Warum**, nicht das **Was**.
`i++; // i um eins erhöhen` wiederholt nur den Code. `// Position 0 ist die Überschrift, deshalb ab 1`
erklärt eine Entscheidung. Über einer Methode steht am besten ihr Zweck mit Vorbedingung. Ein Kommentar,
der dem Code widerspricht, ist schlimmer als gar keiner, denn der Leser glaubt ihm.

:::merke[Checkliste für lesbaren Code]
1. Namen sagen, was drinsteht oder was passiert. Methoden heißen nach Verben, `boolean`-Methoden mit `ist` oder `hat`.
2. camelCase für Variablen und Methoden, große Anfangsbuchstaben für Klassen, `GROSS_MIT_UNTERSTRICH` für Konstanten.
3. Vier Leerzeichen Einrückung je Block, eine Anweisung pro Zeile, immer geschweifte Klammern.
4. Magische Zahlen durch `final`-Konstanten oder Parameter ersetzen.
5. Kommentare für das Warum und für Zweck und Vorbedingung einer Methode.
6. Umbenennen und Formatieren mit den IntelliJ-Werkzeugen, nicht von Hand.
:::

```reflexion
frage: Ein Name, der lügt, ist schlimmer als ein nichtssagender Name wie `x`. Warum? Denk an eine Variable `kopie`, die gar keine Kopie enthält.
antwort: |
  Bei `x` weiß jeder Leser, dass er selbst nachsehen muss, was drinsteht. Bei `kopie` glaubt er dem
  Namen und prüft nicht nach. Ändert der Code dann über `kopie` etwas, rechnet der Leser nicht damit,
  dass sich das Original mit ändert. Genau so ein irreführender Name kommt auf einem älteren Blatt 4
  (Wintersemester 2017) vor: Dort heißt ein Array (eine nummerierte Reihe von Werten) `copiedArray`, ist
  aber keine Kopie. Warum das so ist,
  zeigt [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array). Ein falscher Name
  erzeugt also falsches Vertrauen, ein nichtssagender nur Mehrarbeit.
```

```aufgabe
id: cq-namen-gefuehrt-umbenennen
titel: Fünf Methoden umbenennen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Gib den Methoden sprechende Namen. Welcher Name passt am besten zu `g0`?

  ```java
  private static boolean g0(String s) {
      for (int i = 0; g1(i, s.length()); i = g2(i)) {
          if (g3(s.charAt(i))) return true;
      }
      return false;
  }
  private static boolean g1(int a, int b) { return a < b; }
  private static int g2(int a) { return a + 1; }
  private static boolean g3(char c) { return c == ' '; }
  ```
teile:
  - typ: auswahl
    optionen: ['`enthaeltLeerzeichen`', '`zaehleLeerzeichen`', '`entferneLeerzeichen`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`g0` liefert `boolean`, keine Anzahl. Ein Zähl-Name passt nur zu einem `int`-Ergebnis.'
      - wert: 2
        meldung: '`g0` verändert nichts und liefert keinen String. Es beantwortet nur eine Ja-oder-nein-Frage.'
gefuehrt:
  - text: Was liefert `g3`?
    teil:
      typ: auswahl
      optionen: ['ob `c` ein Leerzeichen ist', 'ob `c` ein Buchstabe ist', 'die Position von `c`']
      richtig: [0]
    erklaerung: '`c == '' ''` vergleicht mit dem Leerzeichen. Guter Name: `istLeerzeichen`.'
  - text: Was tun `g1` und `g2` in der Schleife?
    teil:
      typ: auswahl
      optionen: ['Sie ersetzen `i < s.length()` und `i++`.', 'Sie zählen die Leerzeichen.', 'Sie verändern den String.']
      richtig: [0]
    erklaerung: '`g1(i, s.length())` ist `i < s.length()`, und `i = g2(i)` ist `i++`. Diese Hilfsmethoden kann man ersatzlos durch die gewohnte Schreibweise ersetzen.'
  - text: Wann liefert `g0` den Wert `true`?
    teil:
      typ: auswahl
      optionen: ['sobald irgendein Zeichen ein Leerzeichen ist', 'nur wenn alle Zeichen Leerzeichen sind', 'wenn das letzte Zeichen ein Leerzeichen ist']
      richtig: [0]
    erklaerung: Das erste gefundene Leerzeichen beendet die Methode sofort mit `true`. Findet die Schleife keines, folgt `return false;`.
hinweise:
  - Lies zuerst die kleinen Methoden `g1`, `g2`, `g3`. Achte dann auf den Rückgabetyp von `g0`.
loesung: |
  **Ansatz:** Erst die Bausteine benennen, dann die Hauptmethode lesen.
  ---
  `g3` ist `istLeerzeichen`. `g1` und `g2` stehen für `i < s.length()` und `i++`. `g0` liefert `true`, sobald ein Leerzeichen vorkommt.
  ---
  Der beste Name ist `enthaeltLeerzeichen`: `boolean`-Ergebnis, Frage nach dem Vorkommen. Kontrolle: `g0("EP 1")` liefert `true`, `g0("EP1")` liefert `false`.
```

```aufgabe
id: cq-namen-zeilen-konvention
titel: Verstöße gegen die Konventionen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Der folgende Code kompiliert. In welchen Zeilen wird ein Name **festgelegt** (deklariert), der eine Java-**Namenskonvention** verletzt? Markiere alle. Zeilen, die einen Namen nur verwenden, zählen nicht.
teile:
  - typ: zeilen
    code: |
      public class zahlenSpiel {
          public static final int MAX_RUNDEN = 10;

          public static int BerechnePunkte(int treffer) {
              int Punkte = treffer * 3;
              return Punkte;
          }

          public static boolean istGewonnen(int punkte) {
              return punkte >= MAX_RUNDEN * 2;
          }
      }
    loesung: [1, 4, 5]
    fehler:
      - wert: [1, 2, 4, 5]
        meldung: '`MAX_RUNDEN` ist eine Konstante mit `final`. Für Konstanten ist die Schreibweise in Großbuchstaben mit Unterstrich genau richtig.'
      - wert: [4, 5]
        meldung: Schau dir auch den Klassennamen in Zeile 1 an. Womit beginnen Klassennamen?
      - wert: [1, 4, 5, 6]
        meldung: In Zeile 6 wird `Punkte` nur verwendet. Festgelegt wird der Name in Zeile 5, und nur dort zählt der Verstoß.
hinweise:
  - Prüfe für jeden Namen, ob er zu einer Klasse, Methode, Variable oder Konstante gehört.
loesung: |
  **Ansatz:** Jeden Bezeichner seiner Art zuordnen und mit der Regel vergleichen.
  ---
  Zeile 1: Die Klasse `zahlenSpiel` müsste groß beginnen (`ZahlenSpiel`). Zeile 4: Die Methode `BerechnePunkte` müsste klein beginnen. Zeile 5: Die Variable `Punkte` müsste klein beginnen.
  ---
  Zeile 2 (Konstante in Großbuchstaben) und Zeile 9 (`istGewonnen` für ein `boolean`) sind vorbildlich. Ergebnis: Zeilen 1, 4 und 5.
```

```aufgabe
id: cq-namen-lueckentext-final
titel: Eine Konstante festlegen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Ergänze das fehlende Wort so, dass `MAX_ZEICHEN` eine Konstante ist, deren Wert sich später nicht mehr ändern darf.
teile:
  - typ: lueckentext
    code: |
      ___ int MAX_ZEICHEN = 20;
      String text = "Einführung in die Programmierung";
      System.out.println(text.length() > MAX_ZEICHEN);
    luecken: [["final"]]
    fehler:
      - wert: ["const"]
        meldung: '`const` ist in Java zwar ein reserviertes Wort, aber ohne Bedeutung. Konstanten kennzeichnet man mit `final`.'
      - wert: ["static"]
        meldung: '`static` kennst du aus Methodenköpfen wie `public static void main`. Es sagt nichts darüber, ob sich ein Wert ändern darf. Das sagt `final`.'
hinweise:
  - Gesucht ist das Wort, das eine spätere Zuweisung an die Variable verbietet.
loesung: |
  Konstanten erhalten das Schlüsselwort `final` vor dem Typ.
  ---
  `final int MAX_ZEICHEN = 20;` Eine spätere Zuweisung `MAX_ZEICHEN = 30;` meldet der Compiler als Fehler.
```

```aufgabe
id: cq-namen-ausgabe-klammern
titel: Was die Einrückung verspricht
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt dieser Code aus? Achte auf die geschweiften Klammern, nicht auf die Einrückung.
teile:
  - typ: ausgabe
    code: |
      int punkte = 0;
      for (int i = 1; i <= 4; i++)
          if (i % 2 == 0)
              punkte = punkte + 10;
              punkte = punkte + 1;
      System.out.println(punkte);
    loesung: |
      21
    fehler:
      - wert: "22"
        meldung: Du hast `punkte = punkte + 1;` zum `if` gezählt. Ohne Klammern gehört zum `if` nur die erste Anweisung `punkte = punkte + 10;`. Die Zeile mit `+ 1` läuft erst nach der Schleife, also nur einmal.
      - wert: "24"
        meldung: Du hast `punkte = punkte + 1;` in jedem Durchlauf gezählt. Die Einrückung täuscht. Ohne Klammern gehört zur Schleife nur das `if`, die Zeile mit `+ 1` läuft erst danach.
hinweise:
  - Ohne `{ }` gehört zu `for` und zu `if` jeweils genau eine Anweisung.
  - Das `if` mit seiner einen Anweisung ist die eine Anweisung der Schleife. Was bleibt übrig?
loesung: |
  **Ansatz:** Bestimmen, welche Anweisung ohne Klammern wozu gehört. Zum `if` gehört nur `punkte = punkte + 10;`. Zur Schleife gehört nur das `if`.
  ---
  Die Schleife läuft für `i = 1, 2, 3, 4`. Bei `i = 2` und `i = 4` kommen je 10 dazu: `punkte = 20`.
  ---
  Danach läuft `punkte = punkte + 1;` genau einmal. Ausgabe `21`. Mit Klammern hätte man sofort gesehen, wozu die Zeile gehört.
```

```aufgabe
id: cq-namen-rf-stil
titel: Aussagen über lesbaren Code
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Wenn man die Einrückung eines Programms ändert, kann sich seine Ausgabe ändern.
        richtig: false
        erklaerung: Der Compiler richtet sich nur nach `{ }` und `;`. Die Einrückung ist eine reine Lesehilfe.
      - text: 'Der Kommentar `// erhöht i um 1` hinter `i++;` ist ein guter Kommentar.'
        richtig: false
        erklaerung: Er wiederholt nur, was im Code steht. Gute Kommentare erklären, warum etwas passiert.
      - text: '**Refactor → Rename** in IntelliJ ändert alle Stellen, an denen genau diese Variable vorkommt, aber keine gleichnamige Variable in einer anderen Methode.'
        richtig: true
        erklaerung: IntelliJ kennt die Sichtbarkeit von Variablen. Es ändert nur die Variable, die du angeklickt hast.
      - text: Die Namenskonventionen prüft der Compiler. Wer eine Klasse klein schreibt, bekommt einen Fehler.
        richtig: false
        erklaerung: Der Compiler prüft nur, ob ein Name erlaubt ist. Konventionen sind Vereinbarungen zwischen Menschen.
    fehler:
      - wert: [r, f, r, f]
        meldung: Einrückung ändert nie das Verhalten. Nur Klammern und Strichpunkte bestimmen die Struktur.
      - wert: [f, f, r, r]
        meldung: '`class zahlenSpiel` kompiliert ohne Fehler. Konventionen sind keine Compilerregeln.'
hinweise:
  - Unterscheide genau, was der Compiler prüft und was nur für menschliche Leser gilt.
  - Für Kommentare gilt die Faustregel „Warum statt Was“.
loesung: |
  **Ansatz:** Bei jeder Aussage fragen: Ist das eine Regel des Compilers oder eine Lesehilfe für Menschen?
  ---
  Aussage 1 falsch (Einrückung ist nur Lesehilfe). Aussage 2 falsch (wiederholt nur den Code).
  ---
  Aussage 3 richtig (Rename kennt die Sichtbarkeit). Aussage 4 falsch (Konventionen prüft der Compiler nicht). Ergebnis: falsch, falsch, richtig, falsch.
```

```aufgabe
id: cq-namen-text-aendern
titel: Was würdest du ändern und warum?
niveau: 2
lernziel: 1
kompetenz: begruenden
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 1 b (nachgebaut)
angabe: |
  Beschreibe mindestens vier Stellen, die du an diesem Programm ändern würdest. Begründe jede Änderung in einem Satz.

  ```java
  public class x {
  public static void main(String[] args){
  int A=0;for(int i=1;i<=100;i++){if(i%7==0)A=A+i;}
  System.out.println(A);}}
  ```
teile:
  - typ: text
    muster: |
      1. **Klassenname:** `x` sollte groß beginnen und etwas sagen, zum Beispiel `Siebenerreihe`. Klassen beginnen nach Konvention groß.
      2. **Variablenname:** `A` sollte `summe` heißen. Variablen beginnen klein, und der Name soll den Inhalt nennen.
      3. **Formatierung:** eine Anweisung pro Zeile, vier Leerzeichen Einrückung je Block, Leerzeichen um Operatoren. So erkennt man die Struktur.
      4. **Klammern:** Das `if` braucht `{ }`, damit eine später ergänzte zweite Anweisung nicht versehentlich außerhalb landet.
      5. **Magische Zahlen und Methode:** `7` und `100` sollten Parameter einer Methode `summeDerVielfachen(int teiler, int grenze)` werden. Dann kann man sie auch für andere Zahlen verwenden.
hinweise:
  - Geh die Checkliste durch. Namen, Konventionen, Einrückung, Klammern, magische Zahlen.
  - Für jede Stelle brauchst du das Was (welche Änderung) und das Warum (welcher Leser profitiert).
loesung: |
  **Ansatz:** Den Code mit der Checkliste für lesbaren Code vergleichen und jede Abweichung begründen.
  ---
  Namen: Klasse `x` und Variable `A` verletzen die Konventionen und sagen nichts aus. Form: alles in einer Zeile, keine Einrückung, `if` ohne Klammern.
  ---
  Die Zahlen `7` und `100` sind magisch. Als Parameter einer Methode werden sie erklärt und austauschbar. Die Ausgabe des Programms (735) bleibt bei allen Änderungen gleich.
```

```aufgabe
id: cq-namen-code-vokale
titel: Unlesbaren Code lesbar neu schreiben
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 3 WS 2021, Aufgabe 1 c (Idee nachgebaut, neue Methode)
angabe: |
  Diese Methoden sind absichtlich unleserlich:

  ```java
  private static String f0(String s) {
      String t = ""; int n = 0;
      for (int i = 0; f1(i, s.length()); i = f2(i)) {
          char c = s.charAt(i);
          if (f3(c)) { t = t + '*'; n = f2(n); } else t = t + c;
      }
      return t + n;
  }
  private static boolean f1(int a, int b) { return a < b; }
  private static int f2(int a) { return a + 1; }
  private static boolean f3(char c) { return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'; }
  ```

  Schreibe `versteckeVokale` so, dass sie **genau dasselbe** liefert wie `f0`. Verwende sprechende Namen,
  Klammern und saubere Einrückung. Die Hilfsmethoden `f1` und `f2` sollen verschwinden.
teile:
  - typ: code
    vorlage: |
      public class Lesbar {
          public static String versteckeVokale(String text) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Lesbar {
          public static String versteckeVokale(String text) {
              String ergebnis = "";
              int anzahlVokale = 0;
              for (int i = 0; i < text.length(); i++) {
                  char zeichen = text.charAt(i);
                  if (zeichen == 'a' || zeichen == 'e' || zeichen == 'i' || zeichen == 'o' || zeichen == 'u') {
                      ergebnis = ergebnis + '*';
                      anzahlVokale++;
                  } else {
                      ergebnis = ergebnis + zeichen;
                  }
              }
              return ergebnis + anzahlVokale;
          }
      }
    tests:
      - { aufruf: 'versteckeVokale("banane")', erwartet: '"b*n*n*3"' }
      - { aufruf: 'versteckeVokale("")', erwartet: '"0"', beschreibung: 'leerer Text' }
      - { aufruf: 'versteckeVokale("Auto")', erwartet: '"A*t*2"', beschreibung: 'großes A ist kein Vokal im Sinne von f3' }
      - { aufruf: 'versteckeVokale("xyz")', erwartet: '"xyz0"' }
      - { aufruf: 'versteckeVokale("Informatik")', erwartet: '"Inf*rm*t*k3"', versteckt: true }
    fehler:
      - { wert: 2, meldung: "Auch der leere Text bekommt die Anzahl angehängt. `\"\" + 0` ist der String `\"0\"`." }
      - { wert: 3, meldung: "`f3` prüft nur Kleinbuchstaben. Ein großes `A` bleibt unverändert und wird nicht gezählt." }
hinweise:
  - 'Lies zuerst `f1`, `f2` und `f3`: `f1(i, s.length())` ist `i < s.length()`, `f2(x)` ist `x + 1`, `f3` prüft auf einen kleinen Vokal.'
  - '`f0` baut einen neuen String auf. Vokale werden durch `*` ersetzt und gezählt, alle anderen Zeichen bleiben. Am Ende hängt die Anzahl dran.'
loesung: |
  **Ansatz:** Erst verstehen, dann neu schreiben. `f1` und `f2` sind Umwege für `i < s.length()` und `+ 1`. `f3` prüft auf einen kleinen Vokal.
  ---
  `f0` geht jedes Zeichen durch. Ein kleiner Vokal wird zu `*` und erhöht den Zähler, jedes andere Zeichen wird unverändert angehängt.
  ---
  ```java
  String ergebnis = "";
  int anzahlVokale = 0;
  for (int i = 0; i < text.length(); i++) {
      char zeichen = text.charAt(i);
      if (zeichen == 'a' || zeichen == 'e' || zeichen == 'i' || zeichen == 'o' || zeichen == 'u') {
          ergebnis = ergebnis + '*';
          anzahlVokale++;
      } else {
          ergebnis = ergebnis + zeichen;
      }
  }
  return ergebnis + anzahlVokale;
  ```
  ---
  Probe mit `"banane"`: `b`, `*`, `n`, `*`, `n`, `*` und drei Vokale ergeben `"b*n*n*3"`. Das ist dasselbe wie bei `f0`.
```

## Spaghetticode in Methoden zerlegen

```aufgabe
id: cq-spag-check-parameter
titel: Eine Methode mit zwei Parametern
niveau: 1
art: check
angabe: |
  Was gibt dieses Programm aus? (Wiederholung: [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      public class Wiederholen {
          public static void wiederhole(String teil, int anzahl) {
              for (int i = 0; i < anzahl; i++) {
                  System.out.print(teil);
              }
              System.out.println();
          }

          public static void main(String[] args) {
              wiederhole("ab", 3);
              wiederhole("-", 5);
          }
      }
    loesung: |
      ababab
      -----
    fehler:
      - wert: "ab\nab\nab\n-----"
        meldung: Innerhalb der Schleife steht `print`, nicht `println`. Die drei `ab` stehen deshalb in einer Zeile.
hinweise:
  - Beim Aufruf bekommt `teil` den ersten und `anzahl` den zweiten Wert.
loesung: |
  `wiederhole("ab", 3)` gibt dreimal `ab` in einer Zeile aus und beendet dann die Zeile.
  ---
  `wiederhole("-", 5)` gibt fünf Striche aus. Ausgabe `ababab` und `-----`.
```

Das Wort **Spaghetticode** beschreibt Code, dessen Ablauf so verknäuelt ist wie ein Teller Spaghetti.
Meist steht alles in einer einzigen langen `main`-Methode. Dieselben Zeilen kommen mehrfach vor, nur mit
kleinen Abweichungen. Zahlen wie 8 oder 4 stehen mitten im Code, und niemand weiß, warum. Solcher Code
funktioniert oft, aber man kann ihn kaum ändern. Soll das Muster breiter werden, muss man jede Kopie
finden und anpassen, und dabei vergisst man leicht eine.

Blatt 3 enthält genau so eine Aufgabe in vier Teilen. a) Beschreibe, was der Code tut. b) Nenne Stellen,
die du ändern würdest. c) Zerlege den Code in Methoden und mach die Breite des Musters über einen
Parameter einstellbar. d) Die Aufrufe in `main` müssen danach **genau dieselbe Ausgabe** erzeugen wie der
Spaghetticode. Teil a) hast du in [9.1 Code lesen](/lernen/ep1/codequalitaet/code-lesen-was-tut-dieses-programm)
geübt, Teil b) in [9.2 Gute Namen](/lernen/ep1/codequalitaet/gute-namen-einrueckung-und-kommentare). Hier
geht es um die Teile c) und d).

:::definition[Spaghetticode, Methode auslagern, Parametrisieren]
**Spaghetticode** ist unstrukturierter Code ohne sinnvolle Aufteilung, meist mit vielen Kopien ähnlicher
Blöcke.

**Eine Methode auslagern** heißt: Einen Block in eine eigene Methode verschieben und an der alten Stelle
durch einen Aufruf ersetzen.

**Parametrisieren** heißt: Werte, die in einer Methode fest eingebaut sind, durch Parameter ersetzen.
Dann kann der Aufrufer sie bei jedem Aufruf neu wählen.
:::

**Beispiel für Spaghetticode:** dreimal dieselbe Schleife, die acht `#` ausgibt, untereinander in `main`.
**Kein Spaghetticode:** eine Methode `druckeZeile(int breite)`, die dreimal aufgerufen wird. Der Code
steht einmal da, und die Breite ist wählbar.

:::beispiel[Ein Muster mit fester Breite zerlegen]
Dieser Spaghetticode gibt ein Muster mit der festen Breite 8 aus:

```java
public class Muster {
    public static void main(String[] args) {
        for (int i = 0; i < 8; i++) {
            System.out.print("#");
        }
        System.out.println();
        for (int i = 0; i < 4; i++) {
            System.out.print("#-");
        }
        System.out.println();
        for (int i = 0; i < 8; i++) {
            System.out.print("#");
        }
        System.out.println();
        for (int i = 0; i < 4; i++) {
            System.out.print("-#");
        }
        System.out.println();
        for (int i = 0; i < 8; i++) {
            System.out.print("#");
        }
        System.out.println();
    }
}
```

Die Ausgabe ist:

```
########
#-#-#-#-
########
-#-#-#-#
########
```

**Schritt 1: Gleiche Blöcke finden.** Der Block „acht `#`, dann Zeilenende“ kommt dreimal vor. Er wird
die Methode `druckeVolleZeile`.

**Schritt 2: Ähnliche Blöcke vergleichen.** Die Blöcke für Zeile 2 und Zeile 4 unterscheiden sich nur im
String: `"#-"` gegen `"-#"`. Der Unterschied wird ein Parameter. Beide Blöcke werden **eine** Methode
`druckeWechselZeile(String paar)`.

**Schritt 3: Feste Zahlen durch Parameter ersetzen.** Die 8 ist die Breite. Die 4 ist die halbe Breite,
denn jedes Paar ist zwei Zeichen breit. Beide Methoden bekommen den Parameter `breite`. Statt 4 steht dort
jetzt `breite / 2`. Das klappt nur für gerade Breiten. Deshalb verlangt Blatt 3 ausdrücklich, dass die
Breite positiv und gerade ist.

**Schritt 4: Das ganze Muster als Methode.** `druckeMuster(int breite)` ruft die beiden Methoden in der
richtigen Reihenfolge auf.

```java
public class Muster {
    public static void druckeVolleZeile(int breite) {
        for (int i = 0; i < breite; i++) {
            System.out.print("#");
        }
        System.out.println();
    }

    public static void druckeWechselZeile(int breite, String paar) {
        for (int i = 0; i < breite / 2; i++) {
            System.out.print(paar);
        }
        System.out.println();
    }

    // Vorbedingung: breite > 0 und breite gerade
    public static void druckeMuster(int breite) {
        druckeVolleZeile(breite);
        druckeWechselZeile(breite, "#-");
        druckeVolleZeile(breite);
        druckeWechselZeile(breite, "-#");
        druckeVolleZeile(breite);
    }

    public static void main(String[] args) {
        druckeMuster(8);
    }
}
```

**Schritt 5: Ausgabe vergleichen.** `druckeMuster(8)` erzeugt Zeichen für Zeichen dieselben fünf Zeilen
wie der Spaghetticode. Erst jetzt ist der Umbau fertig. Als Bonus geht nun auch `druckeMuster(4)`:
`####`, `#-#-`, `####`, `-#-#`, `####`.
:::

Der Umbau hat das Verhalten für die Breite 8 nicht verändert. Er hat aber zwei Dinge verbessert. Jeder
Block steht nur noch einmal im Code, und die Breite ist einstellbar. Wer später `*` statt `#` will,
ändert eine einzige Zeile.

:::achtung[Den Parameter einführen, aber nicht verwenden]
Eine häufige halbfertige Lösung sieht so aus:

```java
public static void druckeVolleZeile(int breite) {
    for (int i = 0; i < 8; i++) {
        System.out.print("#");
    }
    System.out.println();
}
```

Der Parameter `breite` steht im Kopf, aber in der Schleife steht noch die feste 8. `druckeMuster(8)`
liefert die richtige Ausgabe, also fällt der Fehler beim ersten Test nicht auf. `druckeMuster(4)` gibt
aber trotzdem acht `#` aus. Prüfe nach dem Parametrisieren jede Zahl in der Methode: Hängt sie von der
Breite ab, muss sie aus `breite` berechnet werden. Teste außerdem mit einer **anderen** Breite als der im
Spaghetticode.
:::

```aufgabe
id: cq-spag-check-zahl
titel: Welche Zahl wird zum Parameter?
niveau: 1
art: check
angabe: |
  Ein Block im Spaghetticode lautet `for (int i = 0; i < 6; i++) { System.out.print("ab"); }`. Er gibt eine Zeile mit 12 Zeichen aus. Die Zeile soll für jede gerade Breite `breite` funktionieren und genau `breite` Zeichen lang sein. Was muss statt 6 in der Bedingung stehen?
teile:
  - typ: auswahl
    optionen: ['`breite / 2`', '`breite`', '`breite * 2`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Jeder Durchlauf gibt **zwei** Zeichen aus. Mit `breite` Durchläufen wird die Zeile doppelt so lang.'
      - wert: 2
        meldung: 'Das wären `breite * 2` Durchläufe zu je zwei Zeichen, also viermal so lang wie gewünscht.'
loesung: |
  Jeder Durchlauf gibt zwei Zeichen aus. Für `breite` Zeichen braucht man also halb so viele Durchläufe.
  ---
  Richtig ist `i < breite / 2`. Probe für Breite 12: 6 Durchläufe ergeben 12 Zeichen. Für Breite 12 stand im Spaghetticode die 6.
```

Das zweite Beispiel zeigt einen Fall, in dem zwei Blöcke nicht dieselbe Zahl, sondern denselben
**Ablauf** mit verschiedenen Daten haben.

:::beispiel[Zwei gleiche Abläufe mit verschiedenen Texten]
```java
String gruss = "Servus";
String kurs = "EP1";
for (int i = 0; i < gruss.length() - 1; i++) {
    System.out.print(gruss.charAt(i) + "~");
}
System.out.println(gruss.charAt(gruss.length() - 1));
for (int i = 0; i < kurs.length() - 1; i++) {
    System.out.print(kurs.charAt(i) + "~");
}
System.out.println(kurs.charAt(kurs.length() - 1));
```

Wir lesen den ersten Block. Die Schleife gibt jedes Zeichen außer dem letzten aus, jeweils gefolgt von
einer Tilde `~`. Danach kommt das letzte Zeichen mit Zeilenende. Für `"Servus"` erscheint `S~e~r~v~u~s`.

Der zweite Block ist eine Kopie, in der überall `gruss` durch `kurs` ersetzt ist. Der einzige Unterschied
ist also der Text. Er wird der Parameter:

```java
// Vorbedingung: text != null und text.length() > 0
public static void druckeMitTilden(String text) {
    for (int i = 0; i < text.length() - 1; i++) {
        System.out.print(text.charAt(i) + "~");
    }
    System.out.println(text.charAt(text.length() - 1));
}
```

In `main` stehen nur noch zwei Aufrufe: `druckeMitTilden("Servus");` und `druckeMitTilden("EP1");`.
Die Ausgabe bleibt `S~e~r~v~u~s` und `E~P~1`. Die Vorbedingung `text.length() > 0` ist wichtig: Für den
leeren String wäre `text.length() - 1` gleich `-1`, und `charAt(-1)` bricht mit einer Exception ab. Wie
man solche Abbrüche liest, zeigt [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
:::

:::achtung[Eine Leerzeile zu viel nach dem Umbau]
Nach dem Auslagern steht in `main` oft noch ein Rest der alten Struktur:

```java
druckeVolleZeile(8);
System.out.println();
druckeWechselZeile(8, "#-");
```

`druckeVolleZeile` beendet die Zeile schon selbst mit `println()`. Das zusätzliche `println()` in `main`
erzeugt eine **leere Zeile** zwischen den Zeilen des Musters. Die Ausgabe ist dann nicht mehr dieselbe wie
beim Spaghetticode, und Teil d) der Blattaufgabe ist nicht erfüllt. Entscheide für jedes `println()`, ob
es in die Methode gehört oder nach `main`, aber nie an beide Stellen.
:::

:::merke[Spaghetticode in Methoden zerlegen]
1. Ausgabe des Originals notieren. Sie ist der Maßstab für den Umbau.
2. Gleiche Blöcke suchen: Sie werden eine Methode.
3. Ähnliche Blöcke vergleichen: Jeder Unterschied wird ein Parameter.
4. Feste Zahlen durch Parameter oder durch Rechnungen mit Parametern ersetzen, etwa `breite / 2`.
5. Alte Blöcke durch Aufrufe ersetzen, Vorbedingungen als Kommentar über die Methode schreiben.
6. Ausgabe vergleichen, zuerst mit dem Originalwert, dann mit einem anderen Wert.
:::

```reflexion
frage: Warum ist „dieselbe Ausgabe wie vorher“ das wichtigste Kriterium beim Umbau von Spaghetticode? Man könnte doch einfach ein schöneres Programm schreiben.
antwort: |
  Der Spaghetticode ist das Einzige, was sicher funktioniert. Er ist die Spezifikation: Er zeigt, was
  das Programm tun soll. Ein Umbau soll nur die Struktur verbessern, nicht das Verhalten. Wenn die
  Ausgabe gleich bleibt, kann man sicher sein, dass beim Umbau nichts kaputtgegangen ist. Ein neu
  geschriebenes „schöneres“ Programm könnte dagegen neue Fehler enthalten, die niemand bemerkt. Genau
  deshalb verlangt Blatt 3 in Teil d) die identische Ausgabe.
```

```aufgabe
id: cq-spag-gefuehrt-parameter
titel: Welche Parameter braucht die Methode?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Diese beiden Blöcke sollen durch Aufrufe **einer** Methode ersetzt werden. Welcher Methodenkopf passt?

  ```java
  for (int i = 0; i < 5; i++) {
      System.out.print("*");
  }
  System.out.println();
  for (int i = 0; i < 3; i++) {
      System.out.print("+");
  }
  System.out.println();
  ```
teile:
  - typ: auswahl
    optionen:
      - '`public static void druckeZeile(int anzahl, String zeichen)`'
      - '`public static void druckeZeile(int anzahl)`'
      - '`public static void druckeZeile()`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Blöcke unterscheiden sich auch im ausgegebenen Zeichen. Mit nur einem Parameter bleibt das Zeichen fest.
      - wert: 2
        meldung: Ohne Parameter würde jeder Aufruf genau dasselbe ausgeben. Die beiden Blöcke geben aber Verschiedenes aus.
gefuehrt:
  - text: Worin unterscheiden sich die beiden Blöcke? Wähle alle Unterschiede.
    teil:
      typ: auswahl
      mehrfach: true
      optionen: ['in der Anzahl der Durchläufe (5 und 3)', 'im ausgegebenen Zeichen (`*` und `+`)', 'im Zeilenende mit `println()`']
      richtig: [0, 1]
    erklaerung: Beide Blöcke enden mit `println()`. Verschieden sind nur die Anzahl und das Zeichen.
  - text: Wie viele Parameter braucht die Methode also?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Jeder Unterschied wird ein Parameter. Zwei Unterschiede ergeben zwei Parameter.
  - text: Wie lauten die beiden Aufrufe, die die Blöcke ersetzen?
    teil:
      typ: auswahl
      optionen: ['`druckeZeile(5, "*");` und `druckeZeile(3, "+");`', '`druckeZeile("*", 5);` und `druckeZeile("+", 3);`', '`druckeZeile(8, "*+");`']
      richtig: [0]
    erklaerung: Die Argumente stehen in der Reihenfolge der Parameter im Kopf, also erst die Anzahl, dann das Zeichen.
hinweise:
  - Vergleiche die Blöcke Zeile für Zeile. Jeder Unterschied wird ein Parameter.
loesung: |
  **Ansatz:** Gleiches bleibt im Rumpf der Methode, Unterschiedliches wird Parameter.
  ---
  Unterschiede: Anzahl (5 und 3) und Zeichen (`*` und `+`). Also zwei Parameter: `druckeZeile(int anzahl, String zeichen)`.
  ---
  Die Blöcke werden zu `druckeZeile(5, "*");` und `druckeZeile(3, "+");`. Kontrolle: Die Ausgabe bleibt `*****` und `+++`.
```

```aufgabe
id: cq-spag-ausgabe-kasten
titel: Ein Kasten aus Methoden
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Kasten {
          public static void druckeLinie(int breite, char zeichen) {
              for (int i = 0; i < breite; i++) {
                  System.out.print(zeichen);
              }
              System.out.println();
          }

          public static void druckeKasten(int breite, int hoehe) {
              druckeLinie(breite, '*');
              for (int z = 0; z < hoehe - 2; z++) {
                  System.out.print('*');
                  for (int i = 0; i < breite - 2; i++) {
                      System.out.print(' ');
                  }
                  System.out.println('*');
              }
              druckeLinie(breite, '*');
          }

          public static void main(String[] args) {
              druckeKasten(5, 4);
              druckeKasten(3, 2);
          }
      }
    loesung: |
      *****
      *   *
      *   *
      *****
      ***
      ***
    fehler:
      - wert: "*****\n*   *\n*   *\n*   *\n*   *\n*****\n***\n***"
        meldung: Die Schleife für die Mittelzeilen läuft `hoehe - 2` mal, nicht `hoehe` mal. Oben und unten kommt je eine volle Linie dazu.
      - wert: "*****\n*   *\n*   *\n*****\n***\n* *\n***"
        meldung: 'Bei `druckeKasten(3, 2)` ist `hoehe - 2 = 0`. Die Schleife für die Mittelzeilen läuft gar nicht.'
hinweise:
  - Ein Kasten besteht aus einer vollen Linie, `hoehe - 2` Mittelzeilen und wieder einer vollen Linie.
loesung: |
  **Ansatz:** `druckeKasten` in seine drei Teile zerlegen und für jeden Aufruf getrennt auswerten.
  ---
  `druckeKasten(5, 4)`: volle Linie `*****`, dann `4 - 2 = 2` Mittelzeilen `*   *` mit drei Leerzeichen, dann wieder `*****`.
  ---
  `druckeKasten(3, 2)`: volle Linie `***`, `2 - 2 = 0` Mittelzeilen, volle Linie `***`. Kontrolle: Die Höhe stimmt jeweils, 4 und 2 Zeilen.
```

```aufgabe
id: cq-spag-lueckentext-zeile
titel: Die Methode parametrisieren
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Methode soll `anzahl` Mal das Zeichen `zeichen` ausgeben und danach die Zeile beenden. Fülle die Lücken so, dass keine feste Zahl und kein festes Zeichen mehr in der Methode steht. Der Aufruf in `main` soll die Zeile `==========` mit zehn Gleichheitszeichen ausgeben.
teile:
  - typ: lueckentext
    code: |
      public class Zeile {
          public static void druckeZeile(int anzahl, char zeichen) {
              for (int i = 0; i < ___; i++) {
                  System.out.print(___);
              }
              System.out.println();
          }

          public static void main(String[] args) {
              druckeZeile(___, '=');
          }
      }
    luecken: [["anzahl"], ["zeichen"], ["10"]]
    fehler:
      - wert: ["8", "'#'", "10"]
        meldung: In der Methode dürfen keine festen Werte mehr stehen. Verwende die Parameter `anzahl` und `zeichen`.
      - wert: ["anzahl", "zeichen", "anzahl"]
        meldung: '`anzahl` gibt es nur in der Methode. In `main` übergibst du einen konkreten Wert, etwa `10`.'
hinweise:
  - In der Methode stehen die Namen der Parameter, beim Aufruf stehen konkrete Werte.
  - 'Die dritte Lücke gehört zum Aufruf. Gesucht ist die Anzahl der Gleichheitszeichen für die Zeile `==========`.'
loesung: |
  **Ansatz:** Innerhalb der Methode werden die festen Werte durch die Parameter ersetzt.
  ---
  Die Schleife läuft `i < anzahl` und gibt jedes Mal `zeichen` aus.
  ---
  Der Aufruf `druckeZeile(10, '=');` erzeugt eine Zeile mit zehn Gleichheitszeichen. In `main` steht der Wert, in der Methode der Name.
```

```aufgabe
id: cq-spag-ausgabe-leerzeile
titel: Ist die Ausgabe noch dieselbe?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Jemand hat Spaghetticode in Methoden zerlegt. Was gibt das umgebaute Programm aus? Vergleiche danach mit der Ausgabe `====`, `o.o.`, `====` des Originals.
teile:
  - typ: ausgabe
    code: |
      public class Umbau {
          public static void druckeReihe(int breite, String paar) {
              for (int i = 0; i < breite / 2; i++) {
                  System.out.print(paar);
              }
              System.out.println();
          }

          public static void main(String[] args) {
              druckeReihe(4, "==");
              druckeReihe(4, "o.");
              System.out.println();
              druckeReihe(4, "==");
          }
      }
    loesung: |
      ====
      o.o.

      ====
    fehler:
      - wert: "====\no.o.\n===="
        meldung: Das zusätzliche `System.out.println()` in `main` erzeugt eine leere Zeile. Genau das unterscheidet den Umbau vom Original.
      - wert: "========\no.o.o.o.\n\n========"
        meldung: Die Schleife läuft `breite / 2 = 2` Mal, und jedes Mal kommen zwei Zeichen dazu. Das sind vier Zeichen pro Zeile.
hinweise:
  - '`druckeReihe` beendet jede Zeile selbst. Was macht dann ein weiteres `println()` in `main`?'
  - Jede Reihe hat `breite / 2` Paare zu je zwei Zeichen.
loesung: |
  **Ansatz:** Jeden Aufruf einzeln auswerten und dabei die `println()`-Aufrufe zählen.
  ---
  `druckeReihe(4, "==")` gibt `====` aus, `druckeReihe(4, "o.")` gibt `o.o.` aus. Beide beenden ihre Zeile selbst.
  ---
  Das `println()` in `main` beendet eine Zeile, in der nichts steht: Es entsteht eine Leerzeile. Danach folgt `====`.
  ---
  Die Ausgabe hat vier statt drei Zeilen. Der Umbau ist also nicht verhaltensgleich. Das `println()` in `main` muss weg.
```

```aufgabe
id: cq-spag-rf-umbau
titel: Aussagen zum Zerlegen in Methoden
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Spaghetticode gibt ein Muster der Breite 8 aus. Er wird in Methoden mit dem Parameter `breite` zerlegt. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Wenn `druckeMuster(8)` dieselbe Ausgabe wie der Spaghetticode liefert, ist der Umbau sicher in Ordnung.
        richtig: false
        erklaerung: 'Eine fest gebliebene 8 in einer Methode fällt bei Breite 8 nicht auf. Man muss auch eine andere Breite testen.'
      - text: Zwei Blöcke, die sich nur in einem Zeichen unterscheiden, kann man durch eine Methode mit einem `char`- oder `String`-Parameter ersetzen.
        richtig: true
        erklaerung: Der Unterschied wird zum Parameter, der gleiche Rest bleibt im Rumpf.
      - text: Wird in einer Methode `breite / 2` gerechnet, darf die Vorbedingung „`breite` ist gerade“ nicht fehlen.
        richtig: true
        erklaerung: 'Bei ungerader Breite fällt bei `breite / 2` der Rest weg. Die Zeile wird dann um ein Zeichen zu kurz.'
      - text: Nach dem Umbau ist das Programm schneller, weil Methodenaufrufe weniger Arbeit sind als Schleifen.
        richtig: false
        erklaerung: Der Umbau ändert die Arbeit kaum. Er macht den Code lesbarer und änderbarer, nicht schneller.
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Stell dir eine Methode vor, die zwar `breite` als Parameter hat, aber noch `i < 8` enthält. Was liefert `druckeMuster(8)`?'
hinweise:
  - Denk an den Fehler „Parameter eingeführt, aber nicht verwendet“.
  - Was passiert mit `breite / 2`, wenn `breite` den Wert 7 hat?
loesung: |
  **Ansatz:** Jede Aussage am Beispiel des Musters prüfen.
  ---
  Aussage 1 falsch: Ein Test mit Breite 8 übersieht eine fest gebliebene 8. Aussage 2 richtig: Unterschiede werden Parameter.
  ---
  Aussage 3 richtig: `7 / 2` ist 3, es fehlt ein Zeichen. Aussage 4 falsch: Es geht um Lesbarkeit, nicht um Tempo. Ergebnis: falsch, richtig, richtig, falsch.
```

```aufgabe
id: cq-spag-code-umgedreht
titel: Doppelten Code durch eine Methode ersetzen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Dieser Code dreht zwei Wörter um und gibt jedes Zeichen zwischen senkrechten Strichen aus:

  ```java
  String w1 = "Java";
  for (int i = w1.length() - 1; i >= 0; i--) {
      System.out.print("|" + w1.charAt(i));
  }
  System.out.println("|");
  String w2 = "TU";
  for (int i = w2.length() - 1; i >= 0; i--) {
      System.out.print("|" + w2.charAt(i));
  }
  System.out.println("|");
  ```

  Die Ausgabe ist `|a|v|a|J|` und `|U|T|`. Schreibe die Methode `druckeUmgedreht(String wort)`, die einen Block ersetzt. Rufe sie in `main` so auf, dass dieselbe Ausgabe entsteht.
teile:
  - typ: code
    vorlage: |
      public class Umgedreht {
          public static void druckeUmgedreht(String wort) {
              // TODO
          }

          public static void main(String[] args) {
              // TODO: zwei Aufrufe
          }
      }
    musterloesung: |
      public class Umgedreht {
          public static void druckeUmgedreht(String wort) {
              for (int i = wort.length() - 1; i >= 0; i--) {
                  System.out.print("|" + wort.charAt(i));
              }
              System.out.println("|");
          }

          public static void main(String[] args) {
              druckeUmgedreht("Java");
              druckeUmgedreht("TU");
          }
      }
    tests:
      - { aufruf: 'druckeUmgedreht("Java")', stdout: "|a|v|a|J|\n" }
      - { aufruf: 'druckeUmgedreht("x")', stdout: "|x|\n", beschreibung: 'ein einziges Zeichen' }
      - { aufruf: 'druckeUmgedreht("")', stdout: "|\n", beschreibung: 'leeres Wort' }
      - { stdout: "|a|v|a|J|\n|U|T|\n", beschreibung: 'main erzeugt dieselbe Ausgabe wie das Original' }
    fehler:
      - { wert: 1, meldung: "Die Schleife beginnt beim letzten Zeichen `wort.length() - 1` und läuft bis einschließlich 0." }
      - { wert: 4, meldung: "Die Methode stimmt. Jetzt muss `main` sie mit `\"Java\"` und `\"TU\"` aufrufen, in dieser Reihenfolge." }
hinweise:
  - Kopiere einen Block in die Methode und ersetze `w1` überall durch den Parameter `wort`.
  - In `main` stehen danach nur noch zwei Aufrufe.
loesung: |
  **Ansatz:** Die beiden Blöcke unterscheiden sich nur im Wort. Das Wort wird der Parameter.
  ---
  ```java
  public static void druckeUmgedreht(String wort) {
      for (int i = wort.length() - 1; i >= 0; i--) {
          System.out.print("|" + wort.charAt(i));
      }
      System.out.println("|");
  }
  ```
  ---
  `main` ruft `druckeUmgedreht("Java");` und `druckeUmgedreht("TU");` auf. Kontrolle: Die Ausgabe ist wieder `|a|v|a|J|` und `|U|T|`. Für das leere Wort läuft die Schleife nicht, und es erscheint nur `|`.
```

```aufgabe
id: cq-spag-code-muster
titel: Spaghetticode zerlegen und parametrisieren
niveau: 3
lernziel: 2
kompetenz: modellieren
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 1 c und d (nachgebaut, neues Muster)
angabe: |
  Dieser Spaghetticode gibt ein Muster der festen Breite 6 aus:

  ```java
  for (int i = 0; i < 3; i++) { System.out.print("o."); }
  System.out.println();
  for (int i = 0; i < 3; i++) { System.out.print(".o"); }
  System.out.println();
  for (int i = 0; i < 6; i++) { System.out.print("="); }
  System.out.println();
  for (int i = 0; i < 3; i++) { System.out.print("o."); }
  System.out.println();
  for (int i = 0; i < 3; i++) { System.out.print(".o"); }
  System.out.println();
  ```

  Die Ausgabe ist:

  ```
  o.o.o.
  .o.o.o
  ======
  o.o.o.
  .o.o.o
  ```

  Zerlege den Code in Methoden. `druckeMuster(int breite)` soll das Muster für jede positive gerade Breite
  ausgeben. Der Aufruf `druckeMuster(6)` in `main` muss genau die Ausgabe des Spaghetticodes erzeugen.
  Weitere Methoden darfst du selbst ergänzen.
teile:
  - typ: code
    vorlage: |
      public class Spaghetti {
          // Vorbedingung: breite > 0 und breite gerade
          public static void druckeMuster(int breite) {
              // TODO
          }

          public static void main(String[] args) {
              druckeMuster(6);
          }
      }
    musterloesung: |
      public class Spaghetti {
          public static void druckeReihe(int breite, String paar) {
              for (int i = 0; i < breite / 2; i++) {
                  System.out.print(paar);
              }
              System.out.println();
          }

          public static void druckeTrenner(int breite) {
              for (int i = 0; i < breite; i++) {
                  System.out.print("=");
              }
              System.out.println();
          }

          public static void druckeMuster(int breite) {
              druckeReihe(breite, "o.");
              druckeReihe(breite, ".o");
              druckeTrenner(breite);
              druckeReihe(breite, "o.");
              druckeReihe(breite, ".o");
          }

          public static void main(String[] args) {
              druckeMuster(6);
          }
      }
    tests:
      - { aufruf: "druckeMuster(6)", stdout: "o.o.o.\n.o.o.o\n======\no.o.o.\n.o.o.o\n", beschreibung: "Breite 6 wie im Spaghetticode" }
      - { aufruf: "druckeMuster(2)", stdout: "o.\n.o\n==\no.\n.o\n", beschreibung: "kleinste Breite 2" }
      - { aufruf: "druckeMuster(10)", stdout: "o.o.o.o.o.\n.o.o.o.o.o\n==========\no.o.o.o.o.\n.o.o.o.o.o\n", versteckt: true }
      - { stdout: "o.o.o.\n.o.o.o\n======\no.o.o.\n.o.o.o\n", beschreibung: "main erzeugt die Originalausgabe" }
    fehler:
      - { wert: 2, meldung: "Bei Breite 6 stimmt alles, bei Breite 2 nicht. Steht in einer Methode noch eine feste 3 oder 6?" }
      - { wert: 1, meldung: "Vergleiche Zeile für Zeile mit dem Original. Achte auf die Reihenfolge `o.` und `.o` und auf zusätzliche Leerzeilen." }
hinweise:
  - Zwei Arten von Zeilen kommen vor. Die Paarzeilen `o.` und `.o` unterscheiden sich nur im Paar. Die Trennzeile besteht aus `=`.
  - 'Die 3 ist `breite / 2`, die 6 ist `breite`. Schreib eine Methode für die Paarzeilen mit den Parametern `breite` und `paar` und eine für die Trennzeile.'
loesung: |
  **Ansatz:** Die Ausgabe des Originals ist der Maßstab. Gleiche Blöcke werden eine Methode, Unterschiede werden Parameter, feste Zahlen werden aus `breite` berechnet.
  ---
  Die Paarzeilen unterscheiden sich nur im Paar: `druckeReihe(int breite, String paar)` mit `breite / 2` Durchläufen. Die Trennzeile: `druckeTrenner(int breite)` mit `breite` Gleichheitszeichen.
  ---
  ```java
  public static void druckeMuster(int breite) {
      druckeReihe(breite, "o.");
      druckeReihe(breite, ".o");
      druckeTrenner(breite);
      druckeReihe(breite, "o.");
      druckeReihe(breite, ".o");
  }
  ```
  ---
  Probe: `druckeMuster(6)` liefert dieselben fünf Zeilen wie der Spaghetticode. `druckeMuster(2)` liefert `o.`, `.o`, `==`, `o.`, `.o`. Damit ist auch geprüft, dass keine feste Zahl übrig geblieben ist.
```

## Refactoring: einfacher schreiben, gleiches Verhalten

```aufgabe
id: cq-ref-check-boolean
titel: Ein Vergleich ist schon ein Wahrheitswert
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung))
teile:
  - typ: ausgabe
    code: |
      int n = 14;
      boolean gerade = n % 2 == 0;
      System.out.println(gerade);
      System.out.println(!gerade || n > 20);
    loesung: |
      true
      false
    fehler:
      - wert: "0\nfalse"
        meldung: '`n % 2 == 0` ist ein Vergleich. Sein Ergebnis ist ein Wahrheitswert, hier `true`, und nicht der Rest 0.'
      - wert: "true\ntrue"
        meldung: '`!gerade` ist `false`, und `14 > 20` ist auch `false`. Falsch oder falsch ergibt `false`.'
hinweise:
  - Ein Vergleich wie `n % 2 == 0` liefert `true` oder `false`. Diesen Wert kann man direkt speichern.
loesung: |
  `14 % 2` ist 0, also ist `n % 2 == 0` wahr. `gerade` speichert `true`.
  ---
  `!gerade` ist `false`, `14 > 20` ist `false`. Mit `||` ergibt das `false`.
```

Spaghetticode zerlegen und Variablen umbenennen sind schon zwei Beispiele für **Refactoring**. Das Wort
kommt aus dem Englischen und bedeutet etwa „neu gliedern“. Gemeint ist: Man ändert den Aufbau eines
Programms, damit es einfacher, kürzer oder lesbarer wird, aber man ändert **nicht**, was es tut. Für jede
Eingabe muss nach dem Umbau dasselbe herauskommen wie vorher.

:::definition[Refactoring]
**Refactoring** ist eine Änderung am Code, die seine Struktur verbessert und sein **Verhalten** nicht
ändert. Verhalten heißt hier: Rückgabewerte, Ausgaben und Exceptions für jede erlaubte Eingabe.
:::

**Beispiele für Refactoring:** eine Variable umbenennen, doppelten Code in eine Methode auslagern, ein
verschachteltes `if` zu einer Bedingung mit `&&` zusammenfassen.

**Kein Refactoring:** einen Fehler beheben, die Ausgabe schöner formatieren oder eine neue Funktion
einbauen. Das alles ist sinnvoll, ändert aber das Verhalten. Trenne beides: Erst umbauen und prüfen,
dann gezielt ändern.

Ein älteres Aufgabenblatt (Blatt 3, Wintersemester 2021) verlangte genau das: Eine Methode `f0` sortierte
mit fünf Hilfsmethoden die Zeichen eines Strings. Man sollte alles zu einer einzigen Methode mit derselben
Funktionalität verschmelzen. Das Sortierverfahren dahinter ist eine Variante von Bubble Sort. Bubble Sort
lernst du in [21.7 Komplexität, Suchen und Sortieren beurteilen](/lernen/ep1/quiz/komplexitaet-suchen-und-sortieren-beurteilen) kennen.

```aufgabe
id: cq-ref-check-was
titel: Ist das ein Refactoring?
niveau: 1
art: check
angabe: |
  Welche Änderung ist ein Refactoring?
teile:
  - typ: auswahl
    optionen:
      - 'Die Variable `x` wird überall in `anzahl` umbenannt.'
      - 'Die Ausgabe `Summe: 5` wird zu `Die Summe ist 5` geändert.'
      - 'Ein falsches `<` wird zu `<=` korrigiert, damit das Ergebnis stimmt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Ausgabe gehört zum Verhalten. Wer sie ändert, ändert, was das Programm tut.
      - wert: 2
        meldung: Das ist eine Fehlerkorrektur. Sie ändert das Verhalten, und zwar absichtlich.
loesung: |
  Ein Refactoring ändert den Aufbau, aber nicht das Verhalten.
  ---
  Nur das Umbenennen lässt alle Ergebnisse und Ausgaben gleich.
```

### Typische Vereinfachungen

Die folgenden Muster kommen in Anfängercode und in KI-Code ständig vor.

1. **Wahrheitswert direkt zurückgeben.** `if (b) { return true; } else { return false; }` ist dasselbe wie `return b;`.
2. **Nicht mit `true` vergleichen.** `if (fertig == true)` ist dasselbe wie `if (fertig)`, und `if (fertig == false)` ist `if (!fertig)`.
3. **Verschachtelte `if` ohne `else` zusammenfassen.** `if (a) { if (b) { … } }` ist dasselbe wie `if (a && b) { … }`.
4. **Gleiches aus beiden Zweigen herausziehen.** Steht dieselbe Anweisung am Anfang beider Zweige, gehört sie vor das `if`. Steht sie am Ende beider Zweige, gehört sie danach.
5. **Magische Zahlen benennen** mit `final`-Konstanten oder Parametern, wie in [9.2 Gute Namen](/lernen/ep1/codequalitaet/gute-namen-einrueckung-und-kommentare).

:::beispiel[Ein verschachteltes if vereinfachen und testen]
```java
public static boolean istTeenager(int alter) {
    if (alter >= 13) {
        if (alter <= 19) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
```

**Lesen:** `true` kommt nur heraus, wenn `alter >= 13` **und** `alter <= 19` gilt. In allen anderen Fällen
kommt `false`.

**Umbauen:** Nach Muster 3 fassen wir die beiden Bedingungen mit `&&` zusammen. Nach Muster 1 geben wir den
Wahrheitswert direkt zurück:

```java
public static boolean istTeenager(int alter) {
    return alter >= 13 && alter <= 19;
}
```

**Prüfen:** Wir wählen Testfälle an den **Grenzen** jeder Bedingung, denn dort passieren Fehler wie `<`
statt `<=`. Dazu kommt ein Wert aus der Mitte.

|`alter`|vorher|nachher|
|---|---|---|
|12|false|false|
|13|true|true|
|16|true|true|
|19|true|true|
|20|false|false|

Beide Fassungen liefern für alle fünf Testfälle dasselbe. Damit ist das Refactoring gut abgesichert.
:::

```aufgabe
id: cq-ref-check-grenze
titel: Welche Testfälle sind am wichtigsten?
niveau: 1
art: check
angabe: |
  Eine Methode enthält die Bedingung `n > 0 && n < 100`. Welche Testwerte prüfen die Grenzen am besten?
teile:
  - typ: auswahl
    optionen: ['0, 1, 99, 100', '20, 40, 60, 80', '-1000, 1000']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Diese Werte liegen alle mitten im Bereich. Ein Fehler wie `>=` statt `>` bliebe unentdeckt.
      - wert: 2
        meldung: Diese Werte liegen weit weg von den Grenzen. Ob 0 und 100 richtig behandelt werden, sieht man so nicht.
loesung: |
  Fehler passieren an den Grenzen: `>` gegen `>=`, `<` gegen `<=`.
  ---
  Darum testet man direkt an und neben jeder Grenze: 0 und 1 für `n > 0`, 99 und 100 für `n < 100`.
```

:::beispiel[Gleiches aus beiden Zweigen herausziehen]
```java
if (punkte >= 50) {
    System.out.println("Ergebnis:");
    System.out.println("bestanden");
    anzahlBewertet++;
} else {
    System.out.println("Ergebnis:");
    System.out.println("nicht bestanden");
    anzahlBewertet++;
}
```

Beide Zweige beginnen mit derselben Ausgabe `Ergebnis:` und enden mit `anzahlBewertet++`. Nach Muster 4
ziehen wir die erste Zeile vor das `if` und die letzte Zeile dahinter:

```java
System.out.println("Ergebnis:");
if (punkte >= 50) {
    System.out.println("bestanden");
} else {
    System.out.println("nicht bestanden");
}
anzahlBewertet++;
```

Warum ist das verhaltensgleich? In beiden Fassungen erscheint zuerst `Ergebnis:`, dann die Bewertung, und
danach wird gezählt. Die Reihenfolge der Anweisungen ist für jeden Wert von `punkte` dieselbe. Kontrolle
mit `punkte = 50` und `punkte = 49`: Beide Male erscheinen dieselben zwei Zeilen wie vorher, und
`anzahlBewertet` steigt um 1.
:::

:::achtung[Eine Verneinung falsch umgeformt]
Jemand will `if (!(a > 5 && b > 5))` lesbarer machen und schreibt:

```java
if (a <= 5 && b <= 5)    // falsch
```

Gegenbeispiel: `a = 3`, `b = 8`. Im Original ist `a > 5 && b > 5` falsch, die Verneinung also wahr. In der
neuen Fassung ist `3 <= 5` wahr, aber `8 <= 5` falsch, das Ganze also falsch. Das Verhalten hat sich
geändert. Richtig ist:

```java
if (a <= 5 || b <= 5)
```

Diese Regel heißt **De Morgan**: Wer ein `&&` verneint, muss jeden Teil verneinen **und** `&&` durch `||`
ersetzen. Umgekehrt wird aus verneintem `||` ein `&&`. Prüfe jede solche Umformung mit einem Gegenbeispiel.
:::

:::achtung[Eine Anweisung an die falsche Stelle gezogen]
Original:

```java
if (x > 0) {
    x--;
    System.out.println(x);
} else {
    System.out.println(x);
}
```

Die Ausgabe ist in beiden Zweigen gleich, also zieht jemand sie heraus, aber **vor** das `if`:

```java
System.out.println(x);   // falsch: vor der Änderung
if (x > 0) {
    x--;
}
```

Für `x = 5` gibt das Original `4` aus, die neue Fassung aber `5`. Die Ausgabe stand am **Ende** der Zweige,
also gehört sie **hinter** das `if`. Richtig ist `if (x > 0) { x--; }` gefolgt von `System.out.println(x);`.
:::

:::merke[Sicher refaktorieren]
1. Vor dem Umbau Testfälle aufschreiben und ihre Ergebnisse notieren: Grenzen jeder Bedingung, ein Wert aus der Mitte, Randfälle wie 0 oder der leere String.
2. In kleinen Schritten umbauen: ein Muster nach dem anderen.
3. Nach jedem Schritt alle Testfälle wiederholen. Weicht ein Ergebnis ab, liegt der Fehler im letzten Schritt.
4. Verneinungen nach De Morgan umformen und mit einem Gegenbeispiel prüfen.
5. Anweisungen nur dorthin ziehen, wo sie in beiden Zweigen an derselben Stelle standen: vom Anfang vor das `if`, vom Ende hinter das `if`.
:::

```reflexion
frage: Warum baut man beim Refactoring in kleinen Schritten um und testet nach jedem Schritt, statt alles auf einmal neu zu schreiben?
antwort: |
  Wenn nach einem kleinen Schritt ein Test scheitert, weiß man genau, welche Änderung schuld ist: die
  letzte. Man macht sie rückgängig oder korrigiert sie. Baut man dagegen alles auf einmal um und ein Test
  scheitert, kann der Fehler an jeder Stelle stecken. Dann sucht man lange. Kleine Schritte sind also
  insgesamt schneller, obwohl man öfter testet.
```

```aufgabe
id: cq-ref-gefuehrt-bestanden
titel: Ein if mit zwei returns vereinfachen
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Welche einzeilige Fassung verhält sich genau wie diese Methode?

  ```java
  public static boolean hatBestanden(int punkte) {
      if (punkte >= 50) {
          return true;
      } else {
          return false;
      }
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`return punkte >= 50;`', '`return punkte > 50;`', '`return punkte;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei `punkte = 50` liefert das Original `true`, diese Fassung aber `false`. Die Grenze hat sich verschoben.'
      - wert: 2
        meldung: '`punkte` ist ein `int`. Die Methode muss einen Wahrheitswert liefern, das kompiliert nicht.'
gefuehrt:
  - text: Wann liefert das Original `true`?
    teil:
      typ: auswahl
      optionen: ['genau dann, wenn `punkte >= 50` gilt', 'genau dann, wenn `punkte > 50` gilt', 'immer']
      richtig: [0]
    erklaerung: Der `if`-Zweig mit `return true` läuft genau dann, wenn die Bedingung wahr ist.
  - text: Welchen Wert hat der Ausdruck `punkte >= 50` für `punkte = 50`?
    teil:
      typ: auswahl
      optionen: ['`true`', '`false`']
      richtig: [0]
    erklaerung: '`50 >= 50` ist wahr. Der Vergleich liefert genau das, was das Original zurückgibt.'
  - text: Mit welchem Testwert direkt neben der Grenze prüfst du den Fall `false`?
    teil: { typ: zahl, loesung: "49" }
    erklaerung: '`49 >= 50` ist falsch. Das Original liefert ebenfalls `false`.'
hinweise:
  - Ein Vergleich liefert schon `true` oder `false`. Diesen Wert kann man direkt zurückgeben.
loesung: |
  **Ansatz:** Das Muster „Wahrheitswert direkt zurückgeben“ anwenden.
  ---
  Das Original liefert `true` genau dann, wenn `punkte >= 50` wahr ist. Also liefert es immer den Wert dieses Vergleichs.
  ---
  Einzeilig: `return punkte >= 50;`. Probe an der Grenze: 50 ergibt `true`, 49 ergibt `false`, wie im Original.
```

```aufgabe
id: cq-ref-lueckentext-zweistellig
titel: Verschachtelte if zusammenfassen
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Methode `istZweistellig` lautet im Original:

  ```java
  if (n >= 10) {
      if (n <= 99) {
          return true;
      }
  }
  return false;
  ```

  Ergänze die einzeilige Fassung mit demselben Verhalten.
teile:
  - typ: lueckentext
    code: |
      public class Ziffern {
          public static boolean istZweistellig(int n) {
              return ___;
          }
      }
    luecken: [["n >= 10 && n <= 99", "n >= 10 && n < 100", "n > 9 && n < 100", "n > 9 && n <= 99", "n <= 99 && n >= 10", "(n >= 10) && (n <= 99)"]]
    fehler:
      - wert: ["n >= 10 || n <= 99"]
        meldung: 'Verschachtelte `if` bedeuten „beide Bedingungen“. Mit `||` wäre schon `n = 500` zweistellig.'
hinweise:
  - Das innere `return true` wird nur erreicht, wenn beide Bedingungen wahr sind.
loesung: |
  Das innere `return true;` läuft nur, wenn `n >= 10` **und** `n <= 99` gilt. Sonst kommt `return false;`.
  ---
  Also: `return n >= 10 && n <= 99;`. Probe: 9 ergibt `false`, 10 ergibt `true`, 99 ergibt `true`, 100 ergibt `false`.
```

```aufgabe
id: cq-ref-rf-verhalten
titel: Refactoring oder Verhaltensänderung?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Jede Aussage beschreibt eine Änderung an einer Methode. Beurteile: Ist die Änderung ein Refactoring, also ohne Änderung des Verhaltens?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`if (fertig == true) {` wird zu `if (fertig) {`.'
        richtig: true
        erklaerung: '`fertig == true` hat immer denselben Wert wie `fertig`.'
      - text: '`if (x > 0) { return true; } return false;` wird zu `return x >= 0;`.'
        richtig: false
        erklaerung: 'Für `x = 0` liefert das Original `false`, die neue Fassung `true`. Die Grenze hat sich verschoben.'
      - text: 'Eine Ausgabe, die am Ende beider Zweige eines `if` steht, wird hinter das `if` verschoben.'
        richtig: true
        erklaerung: In beiden Zweigen lief sie als letzte Anweisung. Hinter dem `if` läuft sie wieder als letzte.
      - text: '`System.out.println("Summe: " + s);` wird zu `System.out.println("Summe = " + s);`.'
        richtig: false
        erklaerung: Die Ausgabe ist eine andere. Auch wenn sie schöner ist, ist das eine Verhaltensänderung.
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Prüfe die zweite Änderung mit `x = 0`. Und gehört die Ausgabe zum Verhalten einer Methode?'
hinweise:
  - Zum Verhalten gehören Rückgabewerte **und** Ausgaben.
  - Suche für jede Änderung eine Eingabe, bei der vorher und nachher etwas anderes herauskommt. Findest du keine, ist es ein Refactoring.
loesung: |
  **Ansatz:** Für jede Änderung ein Gegenbeispiel suchen. Gibt es keines, ist sie ein Refactoring.
  ---
  Änderung 1: kein Gegenbeispiel, Refactoring. Änderung 2: `x = 0` liefert vorher `false`, nachher `true`, also kein Refactoring.
  ---
  Änderung 3: dieselbe Reihenfolge, Refactoring. Änderung 4: andere Ausgabe, kein Refactoring. Ergebnis: richtig, falsch, richtig, falsch.
```

```aufgabe
id: cq-ref-ausgabe-vergleich
titel: Vorher und nachher vergleichen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Jemand hat `groesseAlt` zu `groesseNeu` „vereinfacht“. Das Testprogramm vergleicht beide. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      public class Vergleich {
          public static String groesseAlt(int a) {
              if (a > 10) {
                  return "gross";
              } else if (a > 5) {
                  return "mittel";
              } else {
                  return "klein";
              }
          }

          public static String groesseNeu(int a) {
              if (a > 5) {
                  return "mittel";
              } else if (a > 10) {
                  return "gross";
              }
              return "klein";
          }

          public static void main(String[] args) {
              System.out.println(groesseAlt(3) + " " + groesseNeu(3));
              System.out.println(groesseAlt(7) + " " + groesseNeu(7));
              System.out.println(groesseAlt(12) + " " + groesseNeu(12));
          }
      }
    loesung: |
      klein klein
      mittel mittel
      gross mittel
    fehler:
      - wert: "klein klein\nmittel mittel\ngross gross"
        meldung: 'In `groesseNeu` wird zuerst `a > 5` geprüft. Für 12 ist das wahr, also kommt `mittel`, und der Zweig mit `a > 10` wird nie erreicht.'
hinweise:
  - Bei `if – else if` gewinnt die erste wahre Bedingung. Prüfe die Reihenfolge.
  - Werte `groesseNeu(12)` Bedingung für Bedingung aus.
loesung: |
  **Ansatz:** Jede Zeile von `main` ruft beide Fassungen mit demselben Wert auf. Wir werten sie getrennt aus.
  ---
  Für 3 und 7 liefern beide dasselbe: `klein` und `mittel`.
  ---
  Für 12 liefert `groesseAlt` den Wert `gross`. In `groesseNeu` ist schon `12 > 5` wahr, also `mittel`.
  ---
  Ausgabe: `klein klein`, `mittel mittel`, `gross mittel`. Das Vertauschen der Bedingungen hat das Verhalten geändert. Ohne den Testfall 12 wäre es nicht aufgefallen.
```

```aufgabe
id: cq-ref-demorgan
titel: Eine Verneinung auflösen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Welche Bedingung verhält sich für jedes `int x` genau wie `!(x >= 0 && x < 10)`?
teile:
  - typ: auswahl
    optionen: ['`x < 0 || x >= 10`', '`x < 0 && x >= 10`', '`x <= 0 || x > 10`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Keine Zahl ist zugleich kleiner als 0 und mindestens 10. Diese Bedingung ist immer falsch. Bei der Verneinung wird aus `&&` ein `||`.'
      - wert: 2
        meldung: 'Gegenbeispiel `x = 0`: Das Original ist falsch (0 liegt im Bereich), diese Bedingung ist wahr. Die Verneinung von `>=` ist `<`, nicht `<=`.'
hinweise:
  - 'Nach De Morgan wird jeder Teil verneint und `&&` durch `||` ersetzt.'
  - 'Die Verneinung von `x >= 0` ist `x < 0`. Die Verneinung von `x < 10` ist `x >= 10`.'
loesung: |
  **Ansatz:** De Morgan: `!(A && B)` ist dasselbe wie `!A || !B`.
  ---
  `!(x >= 0)` ist `x < 0`, und `!(x < 10)` ist `x >= 10`. Zusammen: `x < 0 || x >= 10`.
  ---
  Probe an den Grenzen: `x = -1` und `x = 10` ergeben `true`, `x = 0` und `x = 9` ergeben `false`. Das ist genau „x liegt nicht zwischen 0 und 9“.
```

```aufgabe
id: cq-ref-code-bewertung
titel: Vier unabhängige if zu einer Kette umbauen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Diese Methode ist korrekt, aber umständlich. Jede Bedingung prüft beide Grenzen noch einmal:

  ```java
  public static String bewerte(int punkte) {
      String r = "";
      if (punkte >= 90) { r = "sehr gut"; }
      if (punkte >= 75 && punkte < 90) { r = "gut"; }
      if (punkte >= 50 && punkte < 75) { r = "bestanden"; }
      if (punkte < 50) { r = "nicht bestanden"; }
      return r;
  }
  ```

  Schreibe sie mit einer Kette aus `if`, `else if` und `else` so um, dass jede Grenze nur **einmal** vorkommt.
  Das Verhalten muss für alle Punktzahlen von 0 bis 100 gleich bleiben.
teile:
  - typ: code
    vorlage: |
      public class Bewertung {
          public static String bewerte(int punkte) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Bewertung {
          public static String bewerte(int punkte) {
              if (punkte >= 90) {
                  return "sehr gut";
              } else if (punkte >= 75) {
                  return "gut";
              } else if (punkte >= 50) {
                  return "bestanden";
              } else {
                  return "nicht bestanden";
              }
          }
      }
    tests:
      - { aufruf: "bewerte(95)", erwartet: '"sehr gut"' }
      - { aufruf: "bewerte(90)", erwartet: '"sehr gut"', beschreibung: "Grenze 90" }
      - { aufruf: "bewerte(89)", erwartet: '"gut"', beschreibung: "knapp unter 90" }
      - { aufruf: "bewerte(75)", erwartet: '"gut"', beschreibung: "Grenze 75" }
      - { aufruf: "bewerte(74)", erwartet: '"bestanden"' }
      - { aufruf: "bewerte(50)", erwartet: '"bestanden"', beschreibung: "Grenze 50" }
      - { aufruf: "bewerte(49)", erwartet: '"nicht bestanden"' }
      - { aufruf: "bewerte(0)", erwartet: '"nicht bestanden"', versteckt: true }
    fehler:
      - { wert: 3, meldung: "Bei 89 kommt `gut` heraus. Prüfe die Reihenfolge: Die höchste Grenze muss zuerst geprüft werden." }
      - { wert: 6, meldung: "Bei genau 50 Punkten ist bestanden. Verwende `>=` und nicht `>`." }
hinweise:
  - Prüfe die Grenzen von oben nach unten. Wer bei `punkte >= 90` schon herausgefallen ist, hat sicher weniger als 90.
  - '`else if (punkte >= 75)` braucht kein `punkte < 90` mehr, weil dieser Zweig nur erreicht wird, wenn `punkte >= 90` falsch war.'
loesung: |
  **Ansatz:** In einer Kette aus `if` und `else if` wird ein Zweig nur erreicht, wenn alle Bedingungen davor falsch waren. Die oberen Grenzen sind damit schon geprüft.
  ---
  Reihenfolge von oben nach unten: `>= 90`, dann `>= 75`, dann `>= 50`, sonst `nicht bestanden`.
  ---
  ```java
  if (punkte >= 90) {
      return "sehr gut";
  } else if (punkte >= 75) {
      return "gut";
  } else if (punkte >= 50) {
      return "bestanden";
  } else {
      return "nicht bestanden";
  }
  ```
  ---
  Probe an allen Grenzen: 90, 89, 75, 74, 50 und 49 liefern dasselbe wie das Original.
```

```aufgabe
id: cq-ref-zeilen-umbau
titel: Wo hat der Umbau das Verhalten geändert?
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Original:

  ```java
  public static int zaehle(String s) {
      int anzahl = 0;
      for (int i = 0; i < s.length(); i++) {
          char c = s.charAt(i);
          if (c >= 'a' && c <= 'z') {
              anzahl = anzahl + 1;
          } else {
              if (c >= 'A' && c <= 'Z') {
                  anzahl = anzahl + 1;
              }
          }
      }
      return anzahl;
  }
  ```

  Die umgebaute Fassung soll dasselbe tun, ist aber an zwei Stellen fehlerhaft.
teile:
  - typ: zeilen
    label: Markiere die Zeilen der umgebauten Fassung, in denen sich das Verhalten geändert hat.
    code: |
      public static int zaehleBuchstaben(String text) {
          int anzahl = 0;
          for (int i = 1; i < text.length(); i++) {
              char c = text.charAt(i);
              if (c >= 'a' && c <= 'z' || c >= 'A' && c < 'Z') {
                  anzahl++;
              }
          }
          return anzahl;
      }
    loesung: [3, 5]
    fehler:
      - wert: [5]
        meldung: 'Vergleiche auch den Startwert der Schleife mit dem Original. Wird das erste Zeichen noch geprüft?'
      - wert: [3]
        meldung: 'Vergleiche die Grenzen für Großbuchstaben genau: Im Original steht `<=`.'
      - wert: [1, 3, 5]
        meldung: 'Ein neuer Name für Methode und Parameter ändert das Verhalten nicht. Das ist erlaubtes Umbenennen.'
  - typ: zahl
    label: Was liefert die umgebaute Fassung für `"AZbZ"`? (Das Original liefert 4.)
    loesung: "1"
    fehler:
      - wert: "2"
        meldung: 'Die Schleife beginnt bei Position 1. Das `A` an Position 0 wird übersprungen, und `Z` erfüllt `c < ''Z''` nicht.'
      - wert: "3"
        meldung: 'Prüfe, ob `''Z'' < ''Z''` wahr ist. Mit `<` wird `Z` nicht mehr gezählt.'
hinweise:
  - Geh die umgebaute Fassung Zeile für Zeile neben dem Original durch. Umbenennungen und `anzahl++` statt `anzahl = anzahl + 1` sind harmlos.
  - 'Prüfe Startwert der Schleife und jede Grenze in der Bedingung. Teste mit einem String, der mit `A` beginnt und ein `Z` enthält.'
loesung: |
  **Ansatz:** Für jede geänderte Zeile fragen: Gibt es eine Eingabe, für die vorher und nachher etwas anderes herauskommt?
  ---
  Zeile 1 (neue Namen), Zeile 6 (`anzahl++`) und die Zusammenfassung der beiden `if` mit `||` sind verhaltensgleich. `&&` bindet stärker als `||` (so wie Punkt- vor Strichrechnung). Darum bilden die beiden `&&`-Teile links und rechts vom `||` jeweils eine Einheit, und es braucht keine zusätzlichen Klammern.
  ---
  Zeile 3: Start bei `i = 1` überspringt das erste Zeichen. Zeile 5: `c < 'Z'` zählt `Z` nicht mehr mit.
  ---
  Für `"AZbZ"`: Position 0 wird übersprungen, `Z` zählt nicht, nur `b` zählt. Ergebnis 1 statt 4. Die Testfälle hätten einen Text mit Buchstaben am Anfang und mit `Z` enthalten müssen.
```

## Debuggen: Fehler systematisch finden

```aufgabe
id: cq-debug-check-logik
titel: Falsches Ergebnis ohne Abbruch
niveau: 1
art: check
angabe: |
  Ein Programm kompiliert, läuft bis zum Ende und gibt `7` aus. Richtig wäre `7.5`. Welche Art von Fehler liegt vor? (Wiederholung: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))
teile:
  - typ: auswahl
    optionen: ['ein logischer Fehler', 'ein Compilerfehler', 'ein Laufzeitfehler']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Programm kompiliert. Ein Compilerfehler hätte das verhindert.
      - wert: 2
        meldung: Das Programm läuft bis zum Ende, ohne Exception. Ein Laufzeitfehler bricht ab.
loesung: |
  Kompiliert und ohne Abbruch, aber mit falschem Ergebnis: Das ist ein logischer Fehler.
  ---
  Hier vermutlich eine Ganzzahldivision, etwa `15 / 2` statt `15 / 2.0`.
```

Jedes Programm enthält am Anfang Fehler. Das ist normal, auch bei Profis. Ein Fehler im Programm heißt
**Bug** (englisch für Käfer), und die Suche danach heißt **Debuggen**. Compilerfehler zeigt dir IntelliJ
mit Zeile und Meldung an. Laufzeitfehler melden sich mit einer Exception und einem Stacktrace, das ist das
Thema von [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
Am schwierigsten sind **logische Fehler**: Das Programm läuft, aber das Ergebnis ist falsch. Niemand sagt
dir, wo der Fehler steckt.

Die Vorlesungsfolien zum Debuggen empfehlen dafür ein Vorgehen wie bei einem Experiment. Du rätst nicht,
sondern sammelst Hinweise, stellst eine Vermutung auf und prüfst sie gezielt.

:::definition[Debuggen, Hypothese, Kontrollausgabe]
**Debuggen** ist das systematische Suchen und Beheben eines Fehlers. Es beginnt mit einem beobachteten
Fehlerbild: Bei Eingabe X kommt Y heraus, erwartet war Z.

Eine **Hypothese** ist eine überprüfbare Vermutung über die Ursache, zum Beispiel „Die Schleife lässt das
letzte Zeichen aus“.

Eine **Kontrollausgabe** ist eine vorübergehende `println`-Anweisung, die Werte von Variablen an einer
bestimmten Stelle zeigt. Sie prüft eine Hypothese und wird danach wieder entfernt.
:::

**Beispiel für eine Hypothese:** „`durchschnitt` rechnet mit Ganzzahldivision.“ Man kann sie mit einer
Kontrollausgabe des Quotienten prüfen. **Keine Hypothese:** „Irgendwas stimmt mit der Methode nicht.“ Das
ist nur das Fehlerbild in anderen Worten. Man kann daraus keinen Test ableiten.

:::beispiel[Ein Durchschnitt, der nicht stimmt]
```java
public static double durchschnitt(int a, int b, int c) {
    return (a + b + c) / 3;
}
```

**Fehlerbild:** `durchschnitt(1, 2, 2)` liefert `1.0`. Erwartet war 5 / 3, also ungefähr `1.67`.

**Kleinste Eingabe:** Schon dieser Aufruf zeigt den Fehler. `durchschnitt(3, 3, 3)` liefert dagegen
richtig `3.0`. Der Fehler tritt also nur auf, wenn die Summe nicht durch 3 teilbar ist.

**Hypothese:** Die Nachkommastellen gehen verloren. Das passiert bei einer Ganzzahldivision.

**Prüfen:** Wir setzen eine Kontrollausgabe vor das `return`:

```java
System.out.println("DEBUG summe=" + (a + b + c) + " quotient=" + (a + b + c) / 3);
```

Sie zeigt `DEBUG summe=5 quotient=1`. Die Summe stimmt, der Quotient nicht: `5 / 3` ist `int / int` und
ergibt 1. Erst bei der Rückgabe wird daraus `1.0`. Die Hypothese ist bestätigt.

**Beheben:** `return (a + b + c) / 3.0;`. Jetzt rechnet Java mit `double` und liefert `1.6666666666666667`.

**Wiederholen:** `durchschnitt(3, 3, 3)` liefert weiter `3.0`. Die Kontrollausgabe wird gelöscht.
:::

Der Rückgabetyp `double` hat den Fehler versteckt. Viele glauben, eine Methode mit Rückgabetyp `double`
rechne automatisch mit Kommazahlen. Java rechnet aber den Ausdruck nach `return` zuerst mit seinen eigenen
Typen aus. Erst das fertige Ergebnis wird umgewandelt.

:::merke[Debuggen in sechs Schritten]
1. **Fehlerbild genau beschreiben:** Eingabe, erwartetes Ergebnis, tatsächliches Ergebnis.
2. **Kleinste Eingabe suchen,** die den Fehler noch zeigt. Je kleiner sie ist, desto kürzer ist die Suche.
3. **Hypothese aufstellen:** Welche Zeile könnte genau dieses Fehlerbild erzeugen?
4. **Hypothese prüfen** mit Kontrollausgaben oder dem Debugger. Bestätigt sich die Vermutung nicht, zurück zu Schritt 3.
5. **Ursache beheben,** nicht nur das Symptom.
6. **Alle Testfälle wiederholen** und die Kontrollausgaben entfernen.
:::

### Kontrollausgaben gezielt setzen

Kontrollausgaben sind das einfachste Werkzeug. Die Folien nennen typische Stellen dafür. Erstens am
Anfang einer Methode mit den Werten der Parameter. Zweitens vor jedem `return` mit dem Rückgabewert.
Drittens direkt vor und nach einer Schleife. Oft hilft zusätzlich eine Ausgabe in der Schleife mit der
Laufvariable. Beginne jede Kontrollausgabe mit `DEBUG`, dann findest du sie später schnell wieder.

In einem großen Programm halbierst du den verdächtigen Bereich: Eine Kontrollausgabe in der Mitte zeigt, ob
der Fehler davor oder danach entsteht. Dann setzt du die nächste Ausgabe in die Mitte der verdächtigen
Hälfte. Diese Technik heißt **binäre Suche**.

:::beispiel[Die kleinste Eingabe findet den Fehler]
```java
public static int zaehleE(String s) {
    int anzahl = 0;
    for (int i = 0; i < s.length() - 1; i++) {
        if (s.charAt(i) == 'e') {
            anzahl++;
        }
    }
    return anzahl;
}
```

**Fehlerbild:** `zaehleE("Gemuese")` liefert 2. Das Wort enthält aber drei `e`, an den Positionen 1, 4 und 6.

**Kleinste Eingabe:** Wir probieren kürzere Wörter. `zaehleE("Tee")` liefert 1 statt 2. `zaehleE("e")`
liefert sogar 0 statt 1. Kürzer geht es nicht.

**Hypothese:** Bei `"e"` wird das einzige Zeichen nicht gezählt. Vielleicht läuft die Schleife gar nicht.

**Prüfen:** Eine Kontrollausgabe als erste Anweisung in der Schleife:

```java
System.out.println("DEBUG i=" + i + " zeichen=" + s.charAt(i));
```

Bei `zaehleE("e")` erscheint keine einzige `DEBUG`-Zeile. Die Schleife läuft also nie. Warum? Die
Bedingung ist `0 < 1 - 1`, also `0 < 0`, und das ist falsch. Bei `"Tee"` erscheinen nur `i=0` und `i=1`.
Das letzte Zeichen wird immer ausgelassen.

**Beheben:** `i < s.length()`. **Wiederholen:** `"Gemuese"` liefert 3, `"Tee"` liefert 2, `"e"` liefert 1,
und der leere String liefert 0.
:::

### Der Debugger in IntelliJ

Statt `println` kannst du auch den **Debugger** benutzen. Er hält das Programm an einer gewählten Stelle an
und zeigt alle Variablen. Du klickst links neben eine Zeilennummer. Dort erscheint ein roter Punkt, ein
**Haltepunkt** (englisch *breakpoint*). Dann startest du das Programm mit dem Käfer-Symbol statt mit dem
grünen Dreieck (Umschalt+F9 in der Standardbelegung unter Windows und Linux).

Das Programm hält **vor** der markierten Zeile an. Im Fenster *Variables* siehst du jetzt den aktuellen
Wert jeder Variable. Mit **Step Over** (F8) führst du die aktuelle Zeile aus und hältst bei der nächsten
an. Mit **Step Into** (F7) springst du in eine Methode hinein, die in der Zeile aufgerufen wird. Mit
**Resume** (F9) läuft das Programm bis zum nächsten Haltepunkt weiter.

Bei `zaehleE("Tee")` setzt du den Haltepunkt auf die Zeile mit `if`. Mit F8 siehst du, wie `i` die Werte
0 und 1 annimmt und das Programm danach direkt zum `return` springt. Das ist dieselbe Erkenntnis wie mit
den Kontrollausgaben, aber ohne den Code zu verändern.

```aufgabe
id: cq-debug-check-step
titel: Hineinspringen oder darüber hinweg?
niveau: 1
art: check
angabe: |
  Der Debugger steht vor der Zeile `int x = berechne(5);`. Du willst sehen, was **in** `berechne` passiert. Welchen Befehl wählst du?
teile:
  - typ: auswahl
    optionen: ['Step Into (F7)', 'Step Over (F8)', 'Resume (F9)']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Step Over führt den ganzen Aufruf auf einmal aus. Du siehst danach nur das Ergebnis in `x`.
      - wert: 2
        meldung: Resume läuft bis zum nächsten Haltepunkt weiter. Liegt in `berechne` keiner, siehst du dort nichts.
loesung: |
  Step Into springt in die aufgerufene Methode und hält bei ihrer ersten Zeile an.
  ---
  Step Over würde `berechne(5)` vollständig ausführen und erst in der nächsten Zeile wieder anhalten.
```

:::achtung[Kontrollausgaben in der Abgabe vergessen]
Die Angabe verlangt, dass `main` genau `3` ausgibt. Die abgegebene Lösung gibt aber aus:

```
DEBUG i=0 zeichen=G
DEBUG i=1 zeichen=e
...
3
```

Das Ergebnis stimmt, trotzdem ist die Ausgabe falsch. Wer Ausgaben vergleicht, etwa ein automatischer
Test wie bei den Code-Aufgaben dieses Kurses, vergleicht die **ganze** Ausgabe. Entferne vor der Abgabe jede Zeile, die mit `DEBUG` beginnt. Mit
**Edit → Find** (Strg+F) findest du sie schnell.
:::

:::achtung[Herumprobieren statt verstehen]
Jemand sieht, dass `zaehleE` ein `e` zu wenig zählt, und ändert auf gut Glück die Bedingung:

```java
for (int i = 0; i <= s.length(); i++) {
```

Jetzt bricht `zaehleE("Gemuese")` mit `StringIndexOutOfBoundsException: Index 7 out of bounds for length 7` ab.
Das ist eine **Exception**, ein Abbruch zur Laufzeit. Wie man solche Meldungen liest, zeigt
[9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
Die nächste Änderung wäre vielleicht `i <= s.length() - 2`, und so weiter. Dieses Vorgehen heißt auf
Englisch *programming by permutation*: Man vertauscht Zeichen, bis die Ausgabe zufällig passt. Es kostet
viel Zeit, und selbst eine passende Ausgabe kann zufällig sein. Überlege stattdessen mit einer
Trace-Tabelle, welche Werte `i` annehmen **soll**, nämlich 0 bis `s.length() - 1`. Dann ist die Bedingung
klar: `i < s.length()`.
:::

Zwei weitere Tipps aus den Folien helfen bei hartnäckigen logischen Fehlern. Erstens: Erkläre den Code
Zeile für Zeile jemand anderem, notfalls einer Quietscheente auf dem Schreibtisch. Beim lauten Erklären
fällt dir oft selbst auf, wo du etwas angenommen hast, das nicht stimmt. Zweitens: Schreibe und teste
Methode für Methode, statt das ganze Programm auf einmal. Dann weißt du bei einem Fehler, in welcher Methode
er steckt.

```reflexion
frage: Warum lohnt es sich, vor dem eigentlichen Suchen die kleinste Eingabe zu finden, die den Fehler noch zeigt?
antwort: |
  Mit einer kleinen Eingabe gibt es nur wenige Durchläufe und wenige Werte. Man kann sie vollständig in
  einer Trace-Tabelle verfolgen oder mit dem Debugger Schritt für Schritt ansehen. Bei `zaehleE("e")`
  sieht man sofort, dass die Schleife gar nicht läuft. Bei einem langen Wort müsste man viele Durchläufe
  prüfen und übersieht den Fehler leicht. Außerdem zeigt die kleinste Eingabe oft schon, welcher Randfall
  falsch behandelt wird, hier das letzte Zeichen.
```

```aufgabe
id: cq-debug-gefuehrt-summe
titel: Eine Summe, die zu klein ist
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  `summeBis(n)` soll die Summe 1 + 2 + … + n liefern. Für `n = 4` kommt aber 6 statt 10 heraus.

  ```java
  public static int summeBis(int n) {
      int summe = 0;
      for (int i = 1; i < n; i++) {
          summe = summe + i;
      }
      return summe;
  }
  ```

  Wie muss die Schleifenbedingung lauten? Gehe dafür die Schritte des Debuggens durch.
teile:
  - typ: auswahl
    optionen: ['`i <= n`', '`i < n + 2`', '`i < n - 1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann läuft die Schleife auch für `i = n + 1`. Für `n = 4` käme 15 heraus.'
      - wert: 2
        meldung: 'Dann fehlen sogar zwei Summanden. Für `n = 4` käme nur 1 + 2 = 3 heraus.'
gefuehrt:
  - text: 'Kleinste Eingabe: Was liefert `summeBis(1)`? Erwartet wäre 1.'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: 'Bei `n = 1` ist die Bedingung `1 < 1` sofort falsch. Die Schleife läuft nie, die Summe bleibt 0.'
  - text: Welche Hypothese passt zu diesem Fehlerbild?
    teil:
      typ: auswahl
      optionen: ['Der letzte Summand `n` wird nicht mehr addiert.', 'Die Summe startet mit dem falschen Wert.', 'Es wird jeder Summand doppelt addiert.']
      richtig: [0]
    erklaerung: 'Für `n = 4` fehlen genau 4, denn 10 − 6 = 4. Für `n = 1` fehlt genau 1. Es fehlt immer der Summand `n`.'
  - text: 'Eine Kontrollausgabe `System.out.println("DEBUG i=" + i);` in der Schleife zeigt bei `summeBis(4)` welche Werte? Gib den größten an.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`i` läuft 1, 2, 3. Bei `i = 4` ist `4 < 4` falsch. Die Hypothese ist bestätigt.'
hinweise:
  - Probiere die kleinste sinnvolle Eingabe `n = 1`. Was müsste herauskommen, was kommt heraus?
  - Welche Werte soll `i` annehmen? Von 1 bis einschließlich `n`.
loesung: |
  **Ansatz:** Fehlerbild, kleinste Eingabe, Hypothese, Prüfung.
  ---
  `summeBis(1)` liefert 0 statt 1, `summeBis(4)` liefert 6 statt 10. Es fehlt jedes Mal genau `n`.
  ---
  Die Kontrollausgabe zeigt `i` = 1, 2, 3. Der Wert `n = 4` kommt nie dran, weil die Bedingung `i < n` lautet.
  ---
  Korrektur: `i <= n`. Probe: `summeBis(1)` = 1, `summeBis(4)` = 10, `summeBis(0)` = 0.
```

```aufgabe
id: cq-debug-ausgabe-kontroll
titel: Was zeigen die Kontrollausgaben?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  In diese Methode wurden Kontrollausgaben eingebaut. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Kontrolle {
          public static int produkt(int a, int b) {
              System.out.println("DEBUG start a=" + a + " b=" + b);
              int p = 0;
              for (int i = 0; i < b; i++) {
                  p = p + a;
                  System.out.println("DEBUG i=" + i + " p=" + p);
              }
              return p;
          }

          public static void main(String[] args) {
              System.out.println(produkt(4, 3));
          }
      }
    loesung: |
      DEBUG start a=4 b=3
      DEBUG i=0 p=4
      DEBUG i=1 p=8
      DEBUG i=2 p=12
      12
    fehler:
      - wert: "12\nDEBUG start a=4 b=3\nDEBUG i=0 p=4\nDEBUG i=1 p=8\nDEBUG i=2 p=12"
        meldung: Die Kontrollausgaben stehen in `produkt`. Sie erscheinen während des Aufrufs, also bevor `main` das Ergebnis ausgibt.
      - wert: "DEBUG start a=4 b=3\nDEBUG i=0 p=0\nDEBUG i=1 p=4\nDEBUG i=2 p=8\n12"
        meldung: Die Kontrollausgabe steht **nach** `p = p + a`. Sie zeigt also schon den erhöhten Wert.
hinweise:
  - Die Schleife läuft für `i = 0, 1, 2`. In jedem Durchlauf wird zuerst addiert und dann ausgegeben.
loesung: |
  **Ansatz:** Die Kontrollausgaben gehören zum Ablauf von `produkt` und erscheinen in der Reihenfolge, in der sie ausgeführt werden.
  ---
  Zuerst `DEBUG start a=4 b=3`. Dann drei Durchläufe, jeweils nach dem Addieren: `p` = 4, 8, 12.
  ---
  Danach gibt `main` den Rückgabewert `12` aus. Vor einer Abgabe müssten die vier `DEBUG`-Zeilen gelöscht werden.
```

```aufgabe
id: cq-debug-fehlerart
titel: Drei Fehler, drei Arten
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ordne jeden Fehler einer Fehlerart zu.

  a) `int x = "5";`

  b) `String s = "abc"; System.out.println(s.charAt(3));`

  c) Eine Methode soll den größeren von zwei Werten liefern, liefert aber den kleineren.
teile:
  - typ: auswahl
    label: a)
    optionen: ['Compilerfehler', 'Laufzeitfehler', 'logischer Fehler']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Einem `int` einen String zuzuweisen, erkennt schon der Compiler an den Typen. Das Programm startet gar nicht.
      - wert: 2
        meldung: Der Code kompiliert nicht einmal. Ein logischer Fehler setzt voraus, dass das Programm läuft.
  - typ: auswahl
    label: b)
    optionen: ['Compilerfehler', 'Laufzeitfehler', 'logischer Fehler']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Compiler kennt den Inhalt von `s` nicht genau. Die Typen stimmen, also kompiliert der Code.
      - wert: 2
        meldung: Das Programm liefert kein falsches Ergebnis, sondern bricht ab. Position 3 gibt es in `"abc"` nicht.
  - typ: auswahl
    label: c)
    optionen: ['Compilerfehler', 'Laufzeitfehler', 'logischer Fehler']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Der Code kompiliert, sonst könnte die Methode gar nichts liefern.
      - wert: 1
        meldung: Es gibt keinen Abbruch. Die Methode liefert ein Ergebnis, nur das falsche.
hinweise:
  - 'Frag dich jeweils: Kompiliert es? Bricht es beim Ausführen ab? Oder läuft es mit falschem Ergebnis?'
loesung: |
  **Ansatz:** Drei Fragen der Reihe nach: Kompiliert der Code? Bricht er ab? Ist das Ergebnis richtig?
  ---
  a) Typfehler, erkennt der Compiler. b) Kompiliert, bricht bei `charAt(3)` mit `StringIndexOutOfBoundsException` ab: Laufzeitfehler.
  ---
  c) Kompiliert und läuft, aber das Ergebnis ist falsch: logischer Fehler.
```

```aufgabe
id: cq-debug-reihenfolge
titel: Die Schritte des Debuggens ordnen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Bring die Schritte beim Suchen eines logischen Fehlers in eine sinnvolle Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - 'Fehlerbild notieren: Eingabe, erwartetes und tatsächliches Ergebnis'
      - 'die kleinste Eingabe suchen, die den Fehler noch zeigt'
      - 'eine Hypothese über die Ursache aufstellen'
      - 'die Hypothese mit Kontrollausgaben oder dem Debugger prüfen'
      - 'die Ursache beheben'
      - 'alle Testfälle wiederholen und Kontrollausgaben entfernen'
    fehler:
      - wert: [2, 0, 1, 3, 4, 5]
        meldung: Eine Hypothese braucht Daten. Erst wenn das Fehlerbild feststeht, kann man sinnvoll vermuten.
      - wert: [0, 1, 2, 4, 3, 5]
        meldung: Wer ohne Prüfung der Hypothese ändert, probiert nur herum. Erst prüfen, dann beheben.
hinweise:
  - Am Anfang stehen die Beobachtungen, am Ende die Kontrolle.
  - Eine Vermutung wird geprüft, bevor man Code ändert.
loesung: |
  **Ansatz:** Debuggen funktioniert wie ein Experiment: beobachten, vermuten, prüfen, handeln, kontrollieren.
  ---
  Zuerst das Fehlerbild und die kleinste Eingabe. Daraus entsteht die Hypothese.
  ---
  Die Hypothese wird geprüft, erst danach wird die Ursache behoben. Zum Schluss laufen alle Tests noch einmal, und die Kontrollausgaben verschwinden.
```

```aufgabe
id: cq-debug-trace-fakultaet
titel: Wo weicht die Rechnung ab?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  `fakultaet(n)` soll das Produkt 1 · 2 · … · n liefern, also für `n = 4` den Wert 24. Sie liefert aber 6.

  ```java
  public static int fakultaet(int n) {
      int r = 1;
      for (int i = 1; i < n; i++) {
          r = r * i;
      }
      return r;
  }
  ```

  Verfolge `fakultaet(4)` in der Trace-Tabelle und finde danach die Korrektur.
teile:
  - typ: trace
    spalten: [i, r]
    zeilen: [vor der Schleife, nach dem Durchlauf mit i = 1, nach dem Durchlauf mit i = 2, nach dem Durchlauf mit i = 3]
    vorgabe: 1
    loesung: [[1, 1], [2, 1], [3, 2], [4, 6]]
    fehler:
      - wert: [1, 1, 1, 1, 2, 2, 3, 6]
        meldung: 'Die Spalte `i` zeigt den Wert **nach** dem Durchlauf. Am Ende jedes Durchlaufs wird `i` um 1 erhöht.'
  - typ: auswahl
    label: Welche Korrektur behebt die Ursache?
    optionen: ['Die Bedingung wird `i <= n`.', '`r` startet bei 4.', '`return r * 4;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das passt nur zufällig für `n = 4`. Für `n = 3` käme 4 · 1 · 2 = 8 statt 6 heraus.'
      - wert: 2
        meldung: Das behandelt nur das Symptom für `n = 4`. Die Ursache ist, dass die Schleife zu früh endet.
hinweise:
  - Prüfe vor jedem Durchlauf `i < 4`. Nach dem Durchlauf mit `i = 3` wird `i` zu 4.
  - Welcher Faktor fehlt im Ergebnis 6 = 1 · 1 · 2 · 3?
loesung: |
  **Ansatz:** Mit der Trace-Tabelle sehen, welche Faktoren tatsächlich multipliziert werden.
  ---
  `r` wird mit 1, 2 und 3 multipliziert: 1, 1, 2, 6. Danach ist `i = 4`, und `4 < 4` ist falsch.
  ---
  Es fehlt der Faktor 4, also der Wert `n` selbst. Die Ursache ist die Bedingung `i < n`.
  ---
  Korrektur: `i <= n`. Probe: `fakultaet(4)` = 24, `fakultaet(1)` = 1, `fakultaet(3)` = 6.
```

```aufgabe
id: cq-debug-rf-debugger
titel: Aussagen über den Debugger
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Beurteile jede Aussage über den Debugger in IntelliJ.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Haltepunkt hält das Programm an, **bevor** die markierte Zeile ausgeführt wird.
        richtig: true
        erklaerung: Man sieht die Werte direkt vor dieser Zeile. Erst mit Step Over läuft sie.
      - text: Mit Step Over (F8) springt der Debugger in jede Methode hinein, die in der aktuellen Zeile aufgerufen wird.
        richtig: false
        erklaerung: Step Over führt den Aufruf als Ganzes aus. Hineinspringen tut Step Into (F7).
      - text: Haltepunkte wirken nur, wenn das Programm mit Debug gestartet wird, nicht mit dem normalen Run.
        richtig: true
        erklaerung: Beim normalen Start ignoriert IntelliJ alle Haltepunkte.
      - text: Der Debugger zeigt einen logischen Fehler automatisch rot an.
        richtig: false
        erklaerung: Der Debugger zeigt nur Werte. Ob ein Wert falsch ist, musst du selbst mit deiner Erwartung vergleichen.
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Unterscheide Step Over (Aufruf als Ganzes ausführen) und Step Into (in die Methode hineinspringen).'
hinweise:
  - Überlege für jede Aussage, ob der Debugger etwas tut oder ob du selbst etwas tun musst.
  - 'Step Over: über die Zeile hinweg. Step Into: in den Aufruf hinein.'
loesung: |
  **Ansatz:** Die Aufgaben von Haltepunkt, Step Over und Step Into auseinanderhalten.
  ---
  Aussage 1 richtig, Aussage 2 falsch (das macht Step Into).
  ---
  Aussage 3 richtig, Aussage 4 falsch: Der Debugger kennt deine Absicht nicht. Ergebnis: richtig, falsch, richtig, falsch.
```

```aufgabe
id: cq-debug-code-maximum
titel: Ein Maximum, das manchmal falsch ist
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Diese Methode soll die größte von drei Zahlen liefern. Für `maxVonDrei(1, 5, 3)` liefert sie aber 3.

  ```java
  public static int maxVonDrei(int a, int b, int c) {
      int max = a;
      if (b > a) {
          max = b;
      }
      if (c > a) {
          max = c;
      }
      return max;
  }
  ```

  Finde die Ursache und korrigiere die Methode mit möglichst wenig Änderungen.
teile:
  - typ: code
    vorlage: |
      public class Maximum {
          public static int maxVonDrei(int a, int b, int c) {
              int max = a;
              if (b > a) {
                  max = b;
              }
              if (c > a) {
                  max = c;
              }
              return max;
          }
      }
    musterloesung: |
      public class Maximum {
          public static int maxVonDrei(int a, int b, int c) {
              int max = a;
              if (b > max) {
                  max = b;
              }
              if (c > max) {
                  max = c;
              }
              return max;
          }
      }
    tests:
      - { aufruf: "maxVonDrei(1, 5, 3)", erwartet: "5", beschreibung: "das Fehlerbild aus der Angabe" }
      - { aufruf: "maxVonDrei(3, 1, 2)", erwartet: "3" }
      - { aufruf: "maxVonDrei(1, 2, 3)", erwartet: "3" }
      - { aufruf: "maxVonDrei(2, 2, 2)", erwartet: "2", beschreibung: "alle gleich" }
      - { aufruf: "maxVonDrei(-5, -9, -7)", erwartet: "-5", versteckt: true }
      - { aufruf: "maxVonDrei(5, 9, 7)", erwartet: "9", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Spiele `maxVonDrei(1, 5, 3)` durch. Nach dem ersten `if` ist `max = 5`. Womit vergleicht das zweite `if` die Zahl 3?" }
hinweise:
  - Spiele das Fehlerbild durch. Welchen Wert hat `max` nach dem ersten `if`, und womit wird `c` danach verglichen?
  - 'Die Hypothese: `c` wird mit `a` verglichen statt mit dem bisherigen Maximum.'
loesung: |
  **Ansatz:** Das Fehlerbild `maxVonDrei(1, 5, 3)` durchspielen.
  ---
  Nach dem ersten `if` ist `max = 5`. Das zweite `if` prüft `3 > 1`, also `c > a`. Das ist wahr, und `max` wird mit 3 überschrieben.
  ---
  Ursache: `c` muss mit dem bisherigen Maximum verglichen werden, nicht mit `a`. Korrektur: `if (c > max)`, und der Einheitlichkeit halber auch `if (b > max)`.
  ---
  Probe: (1, 5, 3) liefert 5, (1, 2, 3) liefert 3, (3, 1, 2) liefert 3, (2, 2, 2) liefert 2.
```

```aufgabe
id: cq-debug-prim
titel: Die kleinste falsche Eingabe finden
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  `istPrim(n)` soll für `n >= 2` prüfen, ob `n` eine Primzahl ist. Eine Primzahl ist nur durch 1 und durch sich selbst teilbar, zum Beispiel 2, 3, 5, 7, 11.

  ```java
  public static boolean istPrim(int n) {
      for (int t = 2; t < n / 2; t++) {
          if (n % t == 0) {
              return false;
          }
      }
      return true;
  }
  ```

  Die Methode liefert für 2, 3, 5, 6, 7, 8 und 9 das richtige Ergebnis. Trotzdem ist sie falsch.
teile:
  - typ: zahl
    label: Kleinstes `n >= 2`, für das `istPrim` das falsche Ergebnis liefert
    loesung: "4"
    fehler:
      - wert: "9"
        meldung: 'Für `n = 9` läuft `t` über 2 und 3, und `9 % 3 == 0` liefert richtig `false`. Probiere kleinere Zahlen, die keine Primzahlen sind.'
      - wert: "2"
        meldung: '2 ist eine Primzahl, und `istPrim(2)` liefert `true`. Das ist richtig.'
  - typ: zeilen
    label: In welcher Zeile steckt die Ursache?
    code: |
      public static boolean istPrim(int n) {
          for (int t = 2; t < n / 2; t++) {
              if (n % t == 0) {
                  return false;
              }
          }
          return true;
      }
    loesung: [2]
    fehler:
      - wert: [7]
        meldung: '`return true` ist richtig, wenn kein Teiler gefunden wurde. Das Problem ist, dass manche Teiler gar nicht geprüft werden.'
  - typ: auswahl
    label: Welche Bedingung behebt den Fehler?
    optionen: ['`t <= n / 2`', '`t < n / 2 - 1`', '`t > n / 2`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Damit werden noch weniger Teiler geprüft. Für `n = 6` würde `t = 2` nicht mehr drankommen.
      - wert: 2
        meldung: 'Für `n = 9` ist schon `2 > 4` falsch. Die Schleife liefe nie, und jede Zahl wäre „prim“.'
hinweise:
  - Probiere die kleinsten Zahlen, die **keine** Primzahl sind. Für welche Werte von `t` läuft die Schleife bei `n = 4`?
  - 'Bei `n = 4` ist `n / 2 = 2`, und `2 < 2` ist falsch. Der Teiler 2 wird nie geprüft. Muss die Grenze `n / 2` selbst noch dazugehören?'
loesung: |
  **Ansatz:** Die kleinste Nicht-Primzahl ist 4. Sie ist der beste erste Testfall.
  ---
  `istPrim(4)`: `n / 2` ist 2, und `2 < 2` ist falsch. Die Schleife läuft nie, also kommt `true`. Falsch, denn 4 = 2 · 2.
  ---
  Ursache in Zeile 2: Der Teiler `n / 2` selbst wird nie geprüft. Bei 4 ist genau dieser Wert der einzige Teiler.
  ---
  Korrektur: `t <= n / 2`. Probe: 4 liefert `false`, 2 und 3 liefern `true` (die Schleife läuft nicht), 9 liefert `false`, 7 liefert `true`.
```

## Exceptions und Stacktraces lesen

```aufgabe
id: cq-exc-check-abbruch
titel: Was erscheint vor dem Abbruch?
niveau: 1
art: check
angabe: |
  Welche Zeilen gibt dieser Code aus, bevor er mit einer `ArithmeticException` abbricht? (Wiederholung: [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen))

  ```java
  int a = 10, b = 0;
  System.out.println("A");
  System.out.println(a / 5);
  System.out.println(a / b);
  System.out.println("B");
  ```
teile:
  - typ: auswahl
    optionen: ['`A` und `2`', 'nur `A`', '`A`, `2` und `B`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`a / 5` ist `10 / 5 = 2` und funktioniert. Erst `a / b` teilt durch 0.'
      - wert: 2
        meldung: Nach der Exception bricht das Programm ab. Die Zeile mit `B` wird nie erreicht.
loesung: |
  Die Anweisungen vor der Division durch 0 laufen normal: `A` und `2` erscheinen.
  ---
  Bei `a / b` bricht das Programm ab. `B` erscheint nicht mehr.
```

Eine **Exception** (deutsch: Ausnahme) ist ein Laufzeitfehler, bei dem Java die Ausführung abbricht. Das
Programm kompiliert, startet und läuft, bis es auf eine Anweisung trifft, die sich nicht ausführen lässt.
Dann gibt Java eine Fehlermeldung aus und beendet das Programm. Alles, was vorher ausgegeben wurde, bleibt
stehen. Alles danach passiert nicht mehr.

Die Fehlermeldung heißt **Stacktrace**. Sie beschreibt, **was** passiert ist und **wo**: in welcher
Methode, in welcher Zeile und über welche Aufrufe das Programm dorthin gekommen ist. Wer sie lesen kann,
findet den Ort des Fehlers in Sekunden. Blatt 4 fragt genau danach: „Warum kommt es in der Methode zu einem
Fehler (Exception)? Korrigieren Sie den Fehler.“

:::definition[Exception und Stacktrace]
Eine **Exception** ist ein Fehler zur Laufzeit, der die Ausführung abbricht. Sie hat eine **Art** (zum
Beispiel `ArithmeticException`) und meist eine **Meldung** (zum Beispiel `/ by zero`).

Der **Stacktrace** ist die Liste der Methodenaufrufe, die zum Zeitpunkt der Exception offen waren. Die
oberste `at`-Zeile ist die Stelle, an der die Exception entstand. Das kann auch eine Stelle in Javas eigenem
Code sein, etwa in `charAt`. Jede Zeile darunter ist der Aufrufer der Zeile darüber. Ganz unten steht `main`.
:::

**Beispiel:** `10 / 0` mit `int`-Werten löst eine Exception aus, die `ArithmeticException` mit der
Meldung `/ by zero`. **Kein Beispiel:** `10.0 / 0` löst keine Exception aus. Bei `double` liefert die
Division durch 0 den Wert `Infinity` (unendlich), und das Programm läuft weiter. Auch ein Compilerfehler
ist keine Exception, denn dann startet das Programm gar nicht.

:::beispiel[Einen Stacktrace mit drei Methoden lesen]
```java
public class Noten {
    public static int mittelwert(int summe, int anzahl) {
        return summe / anzahl;
    }

    public static void auswerten(int summe, int anzahl) {
        System.out.println("Auswertung startet");
        int m = mittelwert(summe, anzahl);
        System.out.println("Mittelwert: " + m);
    }

    public static void main(String[] args) {
        auswerten(12, 4);
        auswerten(7, 0);
        System.out.println("fertig");
    }
}
```

Die Konsole zeigt:

```
Auswertung startet
Mittelwert: 3
Auswertung startet
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Noten.mittelwert(Noten.java:3)
	at Noten.auswerten(Noten.java:8)
	at Noten.main(Noten.java:14)
```

Wir lesen den Stacktrace von oben nach unten.

1. `Exception in thread "main"` heißt: Während das Hauptprogramm lief, trat eine Ausnahme auf.
2. `java.lang.ArithmeticException` ist die **Art**: ein Rechenfehler. `/ by zero` ist die **Meldung**: Es wurde durch 0 geteilt.
3. `at Noten.mittelwert(Noten.java:3)` ist der **Ort**: Klasse `Noten`, Methode `mittelwert`, Zeile 3. Dort steht `return summe / anzahl;`.
4. `at Noten.auswerten(Noten.java:8)` sagt, **wer** `mittelwert` aufgerufen hat: `auswerten` in Zeile 8.
5. `at Noten.main(Noten.java:14)` sagt, wer `auswerten` aufgerufen hat: `main` in Zeile 14, also der Aufruf `auswerten(7, 0)`.

Damit ist der Weg klar: `main` übergibt `anzahl = 0`, `auswerten` reicht den Wert weiter, und `mittelwert`
teilt dadurch. Der erste Aufruf `auswerten(12, 4)` lief vollständig, deshalb stehen seine Ausgaben da.
`fertig` erscheint nicht mehr.
:::

Die Folge der `at`-Zeilen ist wie ein Stapel von Lesezeichen: Jede offene Methode hat sich gemerkt, wohin sie
zurückkehren muss (siehe [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode)). Daher
kommt der Name: *stack* heißt Stapel, *trace* heißt Spur.

### Die häufigsten Exceptions in EP1

- **`ArithmeticException: / by zero`:** Division oder Rest `%` mit dem `int`-Wert 0 als Teiler.
- **`StringIndexOutOfBoundsException`:** Ein Index liegt außerhalb des Strings, etwa `charAt(4)` bei einem String der Länge 4. Die Meldung lautet dann `Index 4 out of bounds for length 4`. Gültig sind nur die Positionen 0 bis `length() - 1`. Bei `substring` lautet die Meldung zum Beispiel `Range [2, 5) out of bounds for length 3`.
- **`NullPointerException`:** Eine Methode wird auf `null` aufgerufen. `null` ist ein besonderer Wert und heißt „hier ist gar kein String“. Er ist nicht dasselbe wie der leere String `""`.
- **`NumberFormatException`:** `Integer.parseInt(text)` wandelt einen String in einen `int` um, zum Beispiel `"42"` in 42. Enthält der String etwas anderes als eine ganze Zahl, wie `"12a"`, bricht das Programm mit `For input string: "12a"` ab.
- **`ArrayIndexOutOfBoundsException`:** wie beim String, nur für Arrays. Arrays lernst du in [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge) kennen.

:::beispiel[Die Exception aus Blatt 4 als String-Fassung]
Auf Blatt 4 wirft eine Methode `printArray` eine Exception. Hier ist dieselbe Situation mit einem String:

```java
public class Zeichen {
    public static void druckeZeichen(String text) {
        for (int i = 0; i <= text.length(); i++) {
            System.out.print(text.charAt(i) + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        druckeZeichen("Java");
    }
}
```

Die Konsole zeigt zuerst `J a v a ` und danach diesen Stacktrace (die Zeilen mit `java.base/` sind
abgekürzt):

```
Exception in thread "main" java.lang.StringIndexOutOfBoundsException: Index 4 out of bounds for length 4
	at java.base/jdk.internal.util.Preconditions$1.apply(Preconditions.java:55)
	...
	at java.base/java.lang.String.charAt(String.java:1544)
	at Zeichen.druckeZeichen(Zeichen.java:4)
	at Zeichen.main(Zeichen.java:10)
```

1. **Art und Meldung:** Ein Index ist ungültig, nämlich 4 bei einem String der Länge 4.
2. **Ort:** Die oberen Zeilen beginnen mit `java.base/`. Das ist Javas eigener Code, darin liegt der Fehler nicht. Die erste Zeile mit **deiner** Klasse ist `at Zeichen.druckeZeichen(Zeichen.java:4)`. In Zeile 4 steht `text.charAt(i)`.
3. **Ursache:** `i` erreicht den Wert 4, obwohl die letzte gültige Position 3 ist. Schuld ist die Bedingung `i <= text.length()` in Zeile 3. Sie lässt die Schleife einmal zu oft laufen.
4. **Korrektur:** `i < text.length()`. Jetzt gibt die Methode `J a v a ` aus und endet normal.

Beachte: Der Stacktrace nennt Zeile 4, die Ursache steht aber in Zeile 3. Der Stacktrace zeigt, **wo** es
knallt, nicht immer, **warum**.
:::

```aufgabe
id: cq-exc-check-meldung
titel: Was sagt die Meldung?
niveau: 1
art: check
angabe: |
  Die Meldung lautet `StringIndexOutOfBoundsException: Index 6 out of bounds for length 6`. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - 'Der String hat 6 Zeichen, und es wurde auf Position 6 zugegriffen. Gültig wären 0 bis 5.'
      - 'Der String hat 7 Zeichen, und Position 6 ist das letzte Zeichen.'
      - 'Es wurde durch 6 geteilt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`length 6` ist die Länge des Strings. Bei Länge 6 sind die Positionen 0 bis 5 gültig.'
      - wert: 2
        meldung: Eine `StringIndexOutOfBoundsException` hat mit Division nichts zu tun. Sie betrifft einen Zugriff auf eine Position im String.
loesung: |
  `Index 6` ist die Position, auf die zugegriffen wurde. `length 6` ist die Länge des Strings.
  ---
  Bei Länge 6 ist die letzte gültige Position 5. Typische Ursache: `<=` statt `<` in der Schleifenbedingung.
```

:::achtung[In Javas eigenem Code nach dem Fehler suchen]
Beim Stacktrace aus `druckeZeichen` klickt jemand auf die erste blaue Zeile
`at java.base/jdk.internal.util.Preconditions$1.apply(Preconditions.java:55)`. IntelliJ öffnet eine fremde
Datei mit hunderten Zeilen. Dort ist aber alles in Ordnung: Javas Code hat den Fehler nur **gemeldet**.
Suche immer die erste `at`-Zeile, in der **deine** Klasse steht, hier `Zeichen.druckeZeichen(Zeichen.java:4)`.
Alles darüber ist Java-intern.
:::

:::achtung[Die Exception verstecken statt die Ursache beheben]
In der Klasse `Noten` stürzt `mittelwert(7, 0)` ab. Jemand „repariert“ das so:

```java
public static int mittelwert(int summe, int anzahl) {
    if (anzahl == 0) {
        return 0;
    }
    return summe / anzahl;
}
```

Jetzt gibt das Programm `Mittelwert: 0` aus. Das ist aber falsch, denn von null Noten gibt es keinen
Mittelwert. Die Exception war ein Hinweis auf einen Fehler beim Aufrufer, der eine Anzahl von 0 übergibt.
Frage dich deshalb immer: Darf dieser Wert hier überhaupt ankommen? Wenn nicht, ist die Ursache beim
Aufrufer. Dort behebst du sie, oder du schreibst `anzahl > 0` als Vorbedingung über die Methode (siehe
[6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen)).
:::

:::merke[Einen Stacktrace lesen]
1. **Erste Zeile:** Art der Exception und Meldung. Was ist passiert, welcher Wert war falsch?
2. **Erste `at`-Zeile mit deiner Klasse:** Methode und Zeile, an der es knallt. Zeilen mit `java.base/` überspringen.
3. **Darunter:** Wer hat diese Methode mit welchen Werten aufgerufen? Bis `main` hinunter lesen.
4. **Ursache suchen:** Woher kommt der falsche Wert? Oft steht die Ursache eine Zeile darüber (Schleifenbedingung) oder beim Aufrufer.
5. **Korrigieren und erneut ausführen.** Ausgaben vor der Exception zeigen, wie weit das Programm kam.
:::

```reflexion
frage: Warum ist die Zeile, die im Stacktrace ganz oben bei deiner Klasse steht, nicht immer die Zeile, die du ändern musst? Nenne zwei Beispiele aus diesem Abschnitt.
antwort: |
  Der Stacktrace zeigt die Stelle, an der der falsche Wert Schaden anrichtet. Entstanden ist der falsche
  Wert oft woanders. Bei `druckeZeichen` knallt es in Zeile 4 bei `charAt(i)`, aber die falsche
  Schleifenbedingung `i <= text.length()` steht in Zeile 3. Bei `Noten` knallt es in `mittelwert`, aber
  die 0 kommt aus `main`, wo `auswerten(7, 0)` aufgerufen wird. Man muss also vom Ort des Abbruchs
  rückwärts fragen, woher der Wert stammt.
```

```aufgabe
id: cq-exc-gefuehrt-lesen
titel: Einen Stacktrace Schritt für Schritt lesen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Das Programm bricht mit diesem Stacktrace ab:

  ```
  Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "wort" is null
  	at Laenge.zaehleZeichen(Laenge.java:3)
  	at Laenge.main(Laenge.java:9)
  ```

  ```java
  public class Laenge {
      public static int zaehleZeichen(String wort) {
          return wort.length();
      }

      public static void main(String[] args) {
          String eingabe = null;
          System.out.println("Start");
          int n = zaehleZeichen(eingabe);
          System.out.println(n);
      }
  }
  ```

  In welcher Zeile wurde der Wert festgelegt, der den Absturz verursacht?
teile:
  - typ: zahl
    label: Zeilennummer der Ursache
    loesung: "7"
    fehler:
      - wert: "3"
        meldung: In Zeile 3 knallt es. Der Wert `null` kommt aber über den Parameter `wort` von außen. Woher?
      - wert: "9"
        meldung: Zeile 9 reicht den Wert nur weiter. Wo bekommt `eingabe` den Wert `null`?
gefuehrt:
  - text: Welche Art von Exception ist aufgetreten?
    teil:
      typ: auswahl
      optionen: ['`NullPointerException`', '`ArithmeticException`', '`StringIndexOutOfBoundsException`']
      richtig: [0]
    erklaerung: Die erste Zeile nennt die Art. Eine Methode wurde auf `null` aufgerufen, hier `length()`.
  - text: In welcher Zeile deiner Klasse ist es passiert?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`at Laenge.zaehleZeichen(Laenge.java:3)` ist die oberste Zeile. Dort steht `return wort.length();`.'
  - text: Aus welcher Zeile wurde `zaehleZeichen` aufgerufen?
    teil: { typ: zahl, loesung: "9" }
    erklaerung: Die Zeile darunter nennt den Aufrufer, `main` in Zeile 9.
  - text: Wo bekam der übergebene Wert `eingabe` den Wert `null`?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: 'In Zeile 7 steht `String eingabe = null;`. Dort beginnt das Problem.'
hinweise:
  - Lies den Stacktrace von oben nach unten und verfolge den Wert danach rückwärts bis zu seiner Entstehung.
loesung: |
  **Ansatz:** Art, Ort und Aufrufer aus dem Stacktrace ablesen, dann den falschen Wert rückwärts verfolgen.
  ---
  `NullPointerException` in Zeile 3, aufgerufen aus Zeile 9. Die Meldung sagt: `wort` ist `null`.
  ---
  `wort` bekommt den Wert von `eingabe`, und `eingabe` wird in Zeile 7 auf `null` gesetzt. Die Ursache steht in Zeile 7. Vor dem Absturz erscheint noch `Start`.
```

```aufgabe
id: cq-exc-art-bestimmen
titel: Welche Exception tritt auf?
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Welche Exception löst jede Anweisung aus? Es gilt `String s = "Code";` und `int z = 0;`.

  a) `System.out.println(s.charAt(s.length()));`

  b) `System.out.println(s.length() % z);`

  c) `System.out.println(Integer.parseInt(s));`
teile:
  - typ: auswahl
    label: a)
    optionen: ['`StringIndexOutOfBoundsException`', '`ArithmeticException`', 'keine Exception']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: '`s.length()` ist 4. Die Positionen von `"Code"` gehen aber nur von 0 bis 3.'
  - typ: auswahl
    label: b)
    optionen: ['`StringIndexOutOfBoundsException`', '`ArithmeticException`', 'keine Exception']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Auch der Rest `%` teilt. `4 % 0` ist genauso unmöglich wie `4 / 0`.'
  - typ: auswahl
    label: c)
    optionen: ['`NumberFormatException`', '`NullPointerException`', 'keine Exception']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`s` ist nicht `null`, sondern `"Code"`. Das Problem ist der Inhalt: `"Code"` ist keine Zahl.'
      - wert: 2
        meldung: '`Integer.parseInt` kann nur Strings umwandeln, die eine ganze Zahl darstellen, etwa `"42"`.'
hinweise:
  - Bestimme zuerst die Werte der Ausdrücke in den Klammern, zum Beispiel `s.length()`.
loesung: |
  **Ansatz:** Für jede Anweisung prüfen, welcher Wert ungültig ist.
  ---
  a) `s.charAt(4)` bei Länge 4: `StringIndexOutOfBoundsException`. b) `4 % 0`: `ArithmeticException`.
  ---
  c) `"Code"` ist keine ganze Zahl: `NumberFormatException`.
```

```aufgabe
id: cq-exc-zahl-zeilen-vorher
titel: Wie weit kommt das Programm?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Wie viele Zeilen gibt dieses Programm aus, bevor es abbricht?

  ```java
  public class Teilen {
      public static int teile(int a, int b) {
          System.out.println("teile " + a + " durch " + b);
          return a / b;
      }

      public static void main(String[] args) {
          for (int b = 3; b >= 0; b--) {
              System.out.println(teile(12, b));
          }
          System.out.println("Ende");
      }
  }
  ```
teile:
  - typ: zahl
    label: Anzahl der ausgegebenen Zeilen vor dem Abbruch
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: 'Auch beim Aufruf mit `b = 0` läuft die erste Zeile von `teile` noch. Erst `a / b` bricht ab.'
      - wert: "8"
        meldung: 'Bei `b = 0` gibt es kein Ergebnis mehr, und `Ende` erscheint auch nicht.'
hinweise:
  - '`b` nimmt die Werte 3, 2, 1, 0 an. Jeder Aufruf gibt zuerst eine Zeile in `teile` aus, dann eine Zeile in `main`.'
  - Bei welchem Aufruf bricht das Programm ab, und welche Ausgabe dieses Aufrufs passiert noch?
loesung: |
  **Ansatz:** Für jeden Wert von `b` die Ausgaben zählen, bis die Division durch 0 kommt.
  ---
  `b = 3, 2, 1`: je zwei Zeilen (`teile 12 durch b` und das Ergebnis 4, 6, 12). Das sind 6 Zeilen.
  ---
  `b = 0`: Die Zeile `teile 12 durch 0` erscheint noch, dann bricht `12 / 0` ab. Zusammen 7 Zeilen, `Ende` fehlt.
```

```aufgabe
id: cq-exc-code-druckezeichen
titel: Die Exception aus druckeZeichen beheben
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 4 WS 2023, Aufgabe 1 a (als String-Fassung nachgebaut)
angabe: |
  Die Methode `druckeAlle` soll jedes Zeichen von `text` gefolgt von einem Strichpunkt in einer Zeile ausgeben. Für `"EP1"` erwartet man `E;P;1;`. Stattdessen bricht sie mit `StringIndexOutOfBoundsException: Index 3 out of bounds for length 3` ab. Korrigiere sie, ohne ihre Funktion zu ändern.
teile:
  - typ: code
    vorlage: |
      public class Alle {
          public static void druckeAlle(String text) {
              for (int i = 0; i <= text.length(); i++) {
                  System.out.print(text.charAt(i) + ";");
              }
              System.out.println();
          }
      }
    musterloesung: |
      public class Alle {
          public static void druckeAlle(String text) {
              for (int i = 0; i < text.length(); i++) {
                  System.out.print(text.charAt(i) + ";");
              }
              System.out.println();
          }
      }
    tests:
      - { aufruf: 'druckeAlle("EP1")', stdout: "E;P;1;\n" }
      - { aufruf: 'druckeAlle("x")', stdout: "x;\n", beschreibung: "ein Zeichen" }
      - { aufruf: 'druckeAlle("")', stdout: "\n", beschreibung: "leerer Text: nur das Zeilenende" }
      - { aufruf: 'druckeAlle("Wien 2026")', stdout: "W;i;e;n; ;2;0;2;6;\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Die Meldung `Index 3 out of bounds for length 3` zeigt: `i` wird 3, obwohl die letzte gültige Position 2 ist. Prüfe die Schleifenbedingung." }
      - { wert: 3, meldung: "Beim leeren Text darf die Schleife gar nicht laufen. Mit `i < text.length()` ist das automatisch so." }
hinweise:
  - Lies die Meldung genau. Welcher Index ist ungültig, und welche Länge hat der String?
  - Die Positionen eines Strings der Länge `n` gehen von 0 bis `n - 1`. Welche Bedingung lässt `i` genau diese Werte annehmen?
loesung: |
  **Ansatz:** Aus der Meldung den ungültigen Index ablesen und rückwärts zur Ursache gehen.
  ---
  `Index 3 out of bounds for length 3`: Bei `"EP1"` sind nur 0, 1, 2 gültig. Die Bedingung `i <= text.length()` lässt aber auch `i = 3` zu.
  ---
  Korrektur: `i < text.length()`. Sonst bleibt alles gleich, denn die Funktion soll sich nicht ändern.
  ---
  Probe: `"EP1"` ergibt `E;P;1;`, der leere Text ergibt eine leere Zeile, und es gibt keine Exception mehr.
```

```aufgabe
id: cq-exc-zeilen-gefahr
titel: Welche Zeilen können abstürzen?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Methode wird mit `pruefe("", 0)` aufgerufen. In welchen Zeilen würde eine Exception entstehen, wenn das Programm sie erreichen würde? Beurteile jede Zeile für sich, auch wenn eine frühere Zeile schon abbrechen würde.
teile:
  - typ: zeilen
    code: |
      public static void pruefe(String s, int k) {
          System.out.println("Länge: " + s.length());
          System.out.println("erstes Zeichen: " + s.charAt(0));
          System.out.println("Anteil: " + 100 / (k + 1));
          System.out.println("Rest: " + s.length() % k);
          System.out.println("Teil: " + s.substring(0, k));
      }
    loesung: [3, 5]
    fehler:
      - wert: [2, 3, 5]
        meldung: '`"".length()` ist 0. Die Länge eines leeren Strings abzufragen ist erlaubt.'
      - wert: [3, 5, 6]
        meldung: '`s.substring(0, 0)` liefert den leeren String. Anfang und Ende 0 sind bei Länge 0 gültig.'
      - wert: [3, 4, 5]
        meldung: '`k + 1` ist 1. Durch 1 darf man teilen.'
hinweise:
  - Setze `s = ""` und `k = 0` in jede Zeile ein und prüfe jeden Zugriff und jede Division.
  - 'Bei `substring(a, b)` muss `0 <= a <= b <= s.length()` gelten.'
loesung: |
  **Ansatz:** Jede Zeile mit `s = ""` und `k = 0` auswerten.
  ---
  Zeile 2: Länge 0, kein Problem. Zeile 3: `charAt(0)` bei Länge 0 ist ungültig. Zeile 4: `100 / 1` ist erlaubt.
  ---
  Zeile 5: `0 % 0` teilt durch 0. Zeile 6: `substring(0, 0)` liefert `""` und ist erlaubt. Ergebnis: Zeilen 3 und 5.
```

```aufgabe
id: cq-exc-rf-stacktrace
titel: Aussagen über Stacktraces
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die unterste `at`-Zeile eines Stacktraces gehört in einem EP1-Programm meist zu `main`.
        richtig: true
        erklaerung: '`main` hat alle anderen Methoden aufgerufen. Darum steht es ganz unten im Stapel.'
      - text: Die Zeile, die der Stacktrace nennt, enthält immer die Ursache des Fehlers.
        richtig: false
        erklaerung: Sie zeigt, wo der Fehler auftritt. Die Ursache kann eine Schleifenbedingung darüber oder ein Wert beim Aufrufer sein.
      - text: '`5.0 / 0` löst eine `ArithmeticException` aus.'
        richtig: false
        erklaerung: 'Bei `double` liefert die Division durch 0 den Wert `Infinity`. Nur die Ganzzahldivision wirft.'
      - text: Ausgaben, die vor der Exception gemacht wurden, bleiben auf der Konsole stehen.
        richtig: true
        erklaerung: Das Programm bricht erst bei der fehlerhaften Anweisung ab. Alles davor ist schon passiert.
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Probiere `System.out.println(5.0 / 0);` aus. Bei Kommazahlen gibt es eine eigene Regel.'
      - wert: [r, r, f, r]
        meldung: 'Denk an `druckeZeichen`: Der Stacktrace nannte Zeile 4, die Ursache stand in Zeile 3.'
hinweise:
  - Unterscheide den Ort des Abbruchs von der Ursache.
  - 'Bei `double` gibt es Werte wie `Infinity`. Bei `int` gibt es sie nicht.'
loesung: |
  **Ansatz:** Jede Aussage mit einem Beispiel aus diesem Abschnitt prüfen.
  ---
  Aussage 1 richtig (`main` ganz unten). Aussage 2 falsch (Beispiel `druckeZeichen`).
  ---
  Aussage 3 falsch (`Infinity` bei `double`). Aussage 4 richtig. Ergebnis: richtig, falsch, falsch, richtig.
```

```aufgabe
id: cq-exc-vorbedingung
titel: Eine Vorbedingung, die jede Exception ausschließt
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Welche Vorbedingung schließt für diese Methode **jede** Exception aus?

  ```java
  public static int f(String s, int k) {
      return s.length() / k + s.charAt(k);
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - '`s != null && k > 0 && k < s.length()`'
      - '`s != null && k >= 0 && k < s.length()`'
      - '`s != null && k != 0`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel: `s = "ab"`, `k = 0`. Die Bedingung ist erfüllt, aber `s.length() / 0` teilt durch 0.'
      - wert: 2
        meldung: 'Gegenbeispiel: `s = "ab"`, `k = 5`. Die Bedingung ist erfüllt, aber `s.charAt(5)` gibt es nicht. Auch `k = -1` wäre erlaubt und würde abstürzen.'
hinweise:
  - Sammle alle Stellen, die abstürzen können. Es sind drei Gefahren, eine davon ist `null`.
  - '`k` darf nicht 0 sein (Division) und muss eine gültige Position von `s` sein (`charAt`). Beides muss gleichzeitig gelten.'
loesung: |
  **Ansatz:** Jede gefährliche Stelle einzeln betrachten und für jede die nötige Bedingung aufschreiben.
  ---
  `s.length()` braucht `s != null`. `/ k` braucht `k != 0`. `s.charAt(k)` braucht `0 <= k < s.length()`.
  ---
  Zusammen: `s != null`, `k` zwischen 1 und `s.length() - 1`. Das ist Option 1.
  ---
  Kontrolle mit Gegenbeispielen: Option 2 erlaubt `k = 0` (Division durch 0), Option 3 erlaubt `k = 5` (ungültiger Index). Option 1 schließt beides aus.
```

## Fehler in fremdem und KI-Code finden

```aufgabe
id: cq-ki-check-gegenbeispiel
titel: Reicht ein einziges Gegenbeispiel?
niveau: 1
art: check
angabe: |
  Eine Methode soll für jedes `n >= 1` die Summe 1 + 2 + … + n liefern. Sie liefert für `n = 1, 2, 3` richtig 1, 3 und 6, für `n = 4` aber 8. Was folgt daraus? (Wiederholung: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))
teile:
  - typ: auswahl
    optionen:
      - 'Die Methode ist falsch. Ein einziges Gegenbeispiel genügt.'
      - 'Die Methode ist meistens richtig und damit in Ordnung.'
      - 'Man muss erst alle Zahlen bis 100 testen, bevor man etwas sagen kann.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Angabe verlangt das richtige Ergebnis für **jedes** `n >= 1`. Schon ein falscher Wert verletzt sie.
      - wert: 2
        meldung: 'Um zu zeigen, dass etwas falsch ist, reicht ein Gegenbeispiel. Viele Tests braucht man nur, um Vertrauen in richtigen Code zu gewinnen.'
loesung: |
  1 + 2 + 3 + 4 = 10, die Methode liefert 8. Das ist ein Gegenbeispiel.
  ---
  Ein Gegenbeispiel genügt, um zu zeigen, dass die Methode die Angabe nicht erfüllt.
```

KI-Werkzeuge wie ChatGPT schreiben in Sekunden Code, der ordentlich aussieht. Er ist sauber eingerückt,
hat sprechende Namen und oft sogar Kommentare. Trotzdem kann er falsch sein, und zwar auf eine
unauffällige Art: Er stimmt für das naheliegende Beispiel, aber nicht für Randfälle. Wer solchen Code
abgibt, ist selbst dafür verantwortlich. Im Feedbackgespräch musst du jede Zeile erklären können.

Blatt 3 macht daraus eine eigene Aufgabe. Zuerst schreibt man eine Methode, die ein Muster aus
überlappenden Quadraten **rekursiv** zeichnet, also mit einer Methode, die sich selbst aufruft. Das lernst
du ab [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf). Dann bekommt man
eine Fassung **ohne** Rekursion, die ChatGPT erzeugt hat. Sie zeichnet ein falsches Bild. Die Frage lautet:
„Wie muss der Code umgebaut werden, dass das richtige Ergebnis herauskommt?“ Dieser Abschnitt zeigt dir,
wie du solche Fehler systematisch findest.

:::definition[Spezifikation und Gegenbeispiel]
Die **Spezifikation** ist alles, was festlegt, was der Code tun soll. Dazu gehören die Beschreibung in
der Angabe, die Beispiele, die Vorbedingungen und die Einschränkungen, etwa „keine Schleifen“ oder „nur
`charAt` und `length`“.

Ein **Gegenbeispiel** ist eine erlaubte Eingabe, für die der Code etwas anderes liefert, als die
Spezifikation verlangt. Ein einziges Gegenbeispiel beweist, dass der Code falsch ist.
:::

**Beispiel:** Eine Methode soll prüfen, ob eine Zahl gerade ist, und lautet `return n % 2 == 0 && n > 0;`.
Die Eingabe `n = -4` ist ein Gegenbeispiel: -4 ist gerade, die Methode liefert aber `false`.

**Kein Gegenbeispiel:** Eine Methode mit der Vorbedingung `text != null` stürzt bei `null` ab. Das ist
kein Fehler, denn `null` ist keine erlaubte Eingabe. Gegenbeispiele müssen die Vorbedingung erfüllen.

:::beispiel[KI-Code mit Randfällen prüfen]
Die Angabe lautet: „`druckeGerade(int von, int bis)` gibt alle geraden Zahlen von `von` bis `bis`
(beide eingeschlossen) in einer Zeile aus, getrennt durch Komma und Leerzeichen. Beispiel:
`druckeGerade(2, 8)` gibt `2, 4, 6, 8` aus. Vorbedingung: `von <= bis`.“ Ein KI-Werkzeug liefert:

```java
public static void druckeGerade(int von, int bis) {
    for (int i = von; i <= bis; i += 2) {
        System.out.print(i);
        if (i < bis) {
            System.out.print(", ");
        }
    }
    System.out.println();
}
```

**Schritt 1: Beispiel der Angabe.** `druckeGerade(2, 8)` gibt `2, 4, 6, 8` aus. Das stimmt.

**Schritt 2: Randfälle ausdenken.** Was ändert sich, wenn `von` ungerade ist? Oder `bis`? Wir probieren
`druckeGerade(3, 8)`. Die Schleife beginnt bei 3 und gibt `3, 5, 7, ` aus. Das ist doppelt falsch: Es
erscheinen ungerade Zahlen, und am Ende steht ein Komma. Dann `druckeGerade(2, 9)`: Ausgabe `2, 4, 6, 8, `.
Wieder ein Komma zu viel.

**Schritt 3: Ursachen benennen.** Erstens beginnt die Schleife bei `von`, auch wenn `von` ungerade ist.
Zweitens fragt die Bedingung `i < bis`, ob noch eine Zahl **bis zur Grenze** folgt. Sie müsste fragen, ob
noch eine **gerade Zahl** folgt. Ist `bis` ungerade, stimmt das nicht.

**Schritt 4: Gezielt korrigieren.** Wir starten bei der ersten geraden Zahl ab `von` und setzen das
Trennzeichen **vor** jede Zahl außer der ersten, wie in
[4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem):

```java
public static void druckeGerade(int von, int bis) {
    int start = von;
    if (start % 2 != 0) {
        start++;
    }
    for (int i = start; i <= bis; i += 2) {
        if (i > start) {
            System.out.print(", ");
        }
        System.out.print(i);
    }
    System.out.println();
}
```

**Schritt 5: Alle Fälle wiederholen.** `(2, 8)` gibt `2, 4, 6, 8` aus, `(3, 8)` gibt `4, 6, 8` aus,
`(2, 9)` gibt `2, 4, 6, 8` aus. Auch `(5, 5)` funktioniert: Es gibt keine gerade Zahl, und es erscheint eine
leere Zeile. Bei negativen Zahlen wie `(-3, 2)` liefert `-3 % 2` den Wert -1, also beginnt die Schleife
richtig bei -2.
:::

```aufgabe
id: cq-ki-check-druckegerade
titel: Noch ein Randfall für den KI-Code
niveau: 1
art: check
angabe: |
  Was gibt die **ursprüngliche** KI-Fassung von `druckeGerade` für den Aufruf `druckeGerade(1, 4)` aus? Leerzeichen am Zeilenende musst du nicht eintippen.
teile:
  - typ: ausgabe
    trim: true
    code: |
      public class Gerade {
          public static void druckeGerade(int von, int bis) {
              for (int i = von; i <= bis; i += 2) {
                  System.out.print(i);
                  if (i < bis) {
                      System.out.print(", ");
                  }
              }
              System.out.println();
          }

          public static void main(String[] args) {
              druckeGerade(1, 4);
          }
      }
    loesung: "1, 3, \n"
    fehler:
      - wert: "2, 4"
        meldung: Das verlangt die Spezifikation. Der KI-Code beginnt aber bei `von`, also bei 1, und zählt in Zweierschritten.
loesung: |
  `i` nimmt die Werte 1 und 3 an. Nach beiden gilt `i < 4`, also folgt jeweils ein Komma.
  ---
  Ausgabe `1, 3, `. Verlangt wären `2, 4`. Schon dieser kleine Randfall zeigt beide Fehler.
```

:::achtung[Es kompiliert und das Beispiel stimmt, also ist es richtig]
Die häufigste Falle bei KI-Code ist diese Schlussfolgerung:

> „Ich habe `druckeGerade(2, 8)` ausgeführt, die Ausgabe war `2, 4, 6, 8`. Passt.“

Das Beispiel der Angabe ist genau der Fall, für den der Code geschrieben wurde. Fehler stecken in den
Fällen, an die niemand gedacht hat: ungerade Grenzen, leere Strings, ein einziges Zeichen, 0, negative
Zahlen, Groß- und Kleinbuchstaben. Hier hätte schon `druckeGerade(3, 8)` den Fehler gezeigt. Suche deshalb
zu jedem Teil der Spezifikation einen Randfall und probiere ihn aus, bevor du Code übernimmst.
:::

:::achtung[KI-Code mit verbotenen oder erfundenen Methoden]
Für eine Aufgabe, in der von `String` nur `length`, `charAt`, `substring`, `toLowerCase` und `equals`
erlaubt sind, liefert ein KI-Werkzeug:

```java
return text.toLowerCase().contains("halt");
```

Das Ergebnis stimmt sogar. Trotzdem erfüllt die Lösung die Angabe nicht, denn `contains` ist nicht erlaubt.
Auch die Angaben der Programmiertests listen genau auf, welche Methoden erlaubt sind. Wer andere verwendet,
riskiert Punkte. Noch schlimmer sind **erfundene** Methoden.
KI-Werkzeuge schreiben manchmal `wort.reverse()`. Diese Methode gibt es für `String` nicht, und der
Compiler meldet `cannot find symbol`. Prüfe bei fremdem Code jede Methode gegen die Liste der erlaubten
Methoden in der Angabe.
:::

Das zweite Beispiel folgt der ChatGPT-Aufgabe von Blatt 3. Damit es ohne Rekursion verständlich bleibt,
wächst das Muster nur in eine Richtung statt in vier.

:::beispiel[Ein KI-Quadratmuster reparieren]
Die Spezifikation lautet: Das erste gefüllte Quadrat hat den Mittelpunkt `(x, y)` und die Seitenlänge `s`.
Jedes weitere Quadrat ist halb so groß. Sein Mittelpunkt liegt um die halbe Seitenlänge des vorigen weiter
rechts und tiefer. Gezeichnet wird, solange die Seitenlänge mindestens 20 ist. Das größte Quadrat ist
blau, dann wechseln sich Orange und Blau ab. **Größere Quadrate überdecken die kleineren.** Die KI liefert:

```java
public static void zeichneQuadrate(CodeDraw cd, int x, int y, int s) {
    boolean blau = true;
    while (s >= 20) {
        if (blau) {
            cd.setColor(Palette.BLUE);
        } else {
            cd.setColor(Palette.ORANGE);
        }
        cd.fillSquare(x - s / 2, y - s / 2, s);
        x = x + s / 2;
        y = y + s / 2;
        s = s / 2;
        blau = !blau;
    }
}
```

`fillSquare` erwartet die linke obere Ecke, deshalb steht dort `x - s / 2`. Für `(160, 160, 160)`
zeichnet der Code der Reihe nach diese Quadrate:

|Nr|Farbe|Ecke|Seite|
|---|---|---|---|
|1|blau|(80,80)|160|
|2|orange|(200,200)|80|
|3|blau|(260,260)|40|
|4|orange|(290,290)|20|

**Fehler finden:** Größen, Positionen und Farben stimmen. Falsch ist nur die **Reihenfolge**. Was später
gezeichnet wird, liegt oben. Hier liegt also jedes kleinere Quadrat über dem größeren. Die Spezifikation
verlangt das Gegenteil.

**Korrektur:** Wir zeichnen vom kleinsten zum größten. Dafür rechnen wir zuerst ohne zu zeichnen bis zum
kleinsten Quadrat vor und merken uns dabei seine Farbe. Danach gehen wir rückwärts: Die Seitenlänge
verdoppelt sich, und der Mittelpunkt wandert um die halbe **neue** Seitenlänge zurück.

```java
public static void zeichneQuadrate(CodeDraw cd, int x, int y, int s) {
    int start = s;
    boolean blau = true;
    while (s / 2 >= 20) {          // 1. bis zum kleinsten Quadrat vorrechnen
        x = x + s / 2;
        y = y + s / 2;
        s = s / 2;
        blau = !blau;
    }
    while (s <= start) {           // 2. vom kleinsten zum größten zeichnen
        if (blau) {
            cd.setColor(Palette.BLUE);
        } else {
            cd.setColor(Palette.ORANGE);
        }
        cd.fillSquare(x - s / 2, y - s / 2, s);
        s = s * 2;
        x = x - s / 2;
        y = y - s / 2;
        blau = !blau;
    }
}
```

**Prüfen:** Nach der ersten Schleife ist `s = 20` beim Mittelpunkt `(300, 300)`, und `blau` ist `false`.
Gezeichnet wird jetzt in der Reihenfolge Nr. 4, 3, 2, 1 der Tabelle, mit denselben Farben. Das größte blaue
Quadrat kommt zuletzt und liegt oben. Die Vorbedingung ist, dass jede Halbierung ohne Rest aufgeht, etwa
für `s = 160` oder `s = 64`. Sonst landet das Rückwärtsrechnen nicht wieder genau beim Start.
:::

```aufgabe
id: cq-ki-check-reihenfolge
titel: Was liegt oben?
niveau: 1
art: check
angabe: |
  Ein Programm ruft zuerst `cd.fillSquare(0, 0, 100);` in Blau und danach `cd.fillSquare(50, 50, 20);` in Orange auf. Was sieht man an der Stelle, an der sich die Quadrate überlappen?
teile:
  - typ: auswahl
    optionen: ['das kleine orangefarbene Quadrat', 'das große blaue Quadrat', 'eine Mischfarbe']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: CodeDraw malt wie mit deckender Farbe auf Papier. Was später gemalt wird, deckt das Frühere zu.
      - wert: 2
        meldung: Gefüllte Formen sind deckend. Es entsteht keine Mischfarbe.
loesung: |
  Später gezeichnete Formen liegen oben.
  ---
  Das orangefarbene Quadrat kommt zuletzt und ist deshalb vollständig sichtbar. Soll das große oben liegen, muss es zuletzt gezeichnet werden.
```

:::merke[Fremden Code prüfen und reparieren]
1. **Spezifikation sammeln:** Beschreibung, Beispiele, Vorbedingungen, Einschränkungen.
2. **Beispiele der Angabe** durchspielen oder ausführen.
3. **Randfälle ergänzen:** leer, ein Element, Grenzen, gerade und ungerade, groß und klein, Reihenfolge.
4. **Kleinstes Gegenbeispiel suchen** und mit Trace-Tabelle oder Kontrollausgaben die fehlerhafte Zeile finden.
5. **Minimal korrigieren** und alle Beispiele und Randfälle wiederholen.
6. **Einschränkungen prüfen:** nur erlaubte Methoden, keine Hilfsmethoden oder Schleifen, wo sie verboten sind.
:::

```reflexion
frage: Warum muss man KI-Code oft gründlicher prüfen als eigenen Code, obwohl er ordentlicher aussieht?
antwort: |
  Beim eigenen Code weiß man, was man sich bei jeder Zeile gedacht hat, und kennt die heiklen Stellen.
  KI-Code entsteht ohne dieses Verständnis. Er ist darauf ausgelegt, plausibel auszusehen, nicht darauf,
  jede Bedingung der Angabe einzuhalten. Die saubere Form verleitet dazu, ihm zu vertrauen. Fehler stecken
  dann gerade in Randfällen oder in Details der Angabe wie „größere überdecken kleinere“ oder „nur
  `charAt` erlaubt“. Außerdem muss man im Feedbackgespräch jede Zeile selbst erklären können.
```

```aufgabe
id: cq-ki-gefuehrt-kuerze
titel: Ein Text wird zu früh gekürzt
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Spezifikation: `kuerze(String text, int max)` liefert `text` unverändert, wenn er höchstens `max` Zeichen hat. Sonst liefert sie die ersten `max - 3` Zeichen und danach `"..."`. Vorbedingung: `text != null` und `max >= 3`. Beispiel: `kuerze("Programmieren", 8)` liefert `"Progr..."`.

  Die KI liefert:

  ```java
  public static String kuerze(String text, int max) {
      if (text.length() < max) {
          return text;
      }
      return text.substring(0, max - 3) + "...";
  }
  ```

  Wie muss die Bedingung lauten?
teile:
  - typ: auswahl
    optionen: ['`text.length() <= max`', '`text.length() < max - 3`', '`text.length() > max`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann würde `kuerze("Hallo", 6)` gekürzt, obwohl 5 Zeichen in 6 passen.'
      - wert: 2
        meldung: Dann wären die Zweige vertauscht. Lange Texte kämen unverändert zurück.
gefuehrt:
  - text: Stimmt das Beispiel der Angabe, `kuerze("Programmieren", 8)`?
    teil:
      typ: auswahl
      optionen: ['ja, Ergebnis `"Progr..."`', 'nein']
      richtig: [0]
    erklaerung: '13 < 8 ist falsch, also wird gekürzt: die ersten 5 Zeichen `Progr` und `...`. Das Beispiel allein zeigt keinen Fehler.'
  - text: 'Randfall genau an der Grenze: Was liefert der KI-Code für `kuerze("Hallo", 5)`?'
    teil:
      typ: auswahl
      optionen: ['`"He..."`', '`"Hallo"`', '`"Hallo..."`']
      richtig: [0]
    erklaerung: '`5 < 5` ist falsch, also wird gekürzt: `substring(0, 2)` ist `"He"`, dazu `"..."`.'
  - text: Was verlangt die Spezifikation für `kuerze("Hallo", 5)`?
    teil:
      typ: auswahl
      optionen: ['`"Hallo"`', '`"He..."`']
      richtig: [0]
    erklaerung: „Höchstens `max` Zeichen“ schließt genau 5 Zeichen ein. Der Text bleibt unverändert. Damit ist `("Hallo", 5)` ein Gegenbeispiel.
hinweise:
  - Teste den Fall, in dem der Text **genau** `max` Zeichen hat.
loesung: |
  **Ansatz:** Das Beispiel der Angabe stimmt, also suchen wir Randfälle an der Grenze `text.length() == max`.
  ---
  `kuerze("Hallo", 5)` liefert `"He..."`, verlangt ist `"Hallo"`. „Höchstens `max`“ heißt `<=`, im Code steht `<`.
  ---
  Korrektur: `if (text.length() <= max)`. Probe: `("Hallo", 5)` liefert `"Hallo"`, `("Programmieren", 8)` weiterhin `"Progr..."`, `("Hallo!", 5)` liefert `"He..."`.
```

```aufgabe
id: cq-ki-schaltjahr
titel: Das passende Gegenbeispiel
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Spezifikation: Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist. Ausnahme: Jahre, die durch 100 teilbar sind, sind keine Schaltjahre, außer sie sind auch durch 400 teilbar. Die KI liefert:

  ```java
  public static boolean istSchaltjahr(int jahr) {
      return jahr % 4 == 0;
  }
  ```

  Welche Eingabe ist ein Gegenbeispiel?
teile:
  - typ: auswahl
    optionen: ['`1900`', '`2024`', '`2023`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '2024 ist durch 4 teilbar und kein Jahrhundertjahr. Es ist ein Schaltjahr, und die KI liefert richtig `true`.'
      - wert: 2
        meldung: '2023 ist nicht durch 4 teilbar. Die KI liefert richtig `false`.'
hinweise:
  - Welcher Teil der Spezifikation fehlt im Code? Suche ein Jahr, für das genau dieser Teil entscheidet.
loesung: |
  **Ansatz:** Der Code setzt nur die erste Regel um. Ein Gegenbeispiel muss die Ausnahme betreffen.
  ---
  1900 ist durch 4 und durch 100 teilbar, aber nicht durch 400. Also kein Schaltjahr. Der Code liefert `true`.
  ---
  Gegenbeispiel: 1900. Die Schaltjahrregel kennst du aus [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
```

```aufgabe
id: cq-ki-zeilen-leerzeichen
titel: Das erste oder das letzte Leerzeichen?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Spezifikation: `erstesLeerzeichen(String s)` liefert die Position des **ersten** Leerzeichens in `s` oder -1, wenn es keines gibt.
teile:
  - typ: zeilen
    label: In welcher Zeile steckt der Fehler?
    code: |
      public static int erstesLeerzeichen(String s) {
          int pos = -1;
          for (int i = 0; i < s.length(); i++) {
              if (s.charAt(i) == ' ') {
                  pos = i;
              }
          }
          return pos;
      }
    loesung: [5]
    fehler:
      - wert: [3]
        meldung: Die Schleife durchläuft alle Positionen von 0 bis `s.length() - 1`. Das ist richtig. Was passiert, wenn ein zweites Leerzeichen gefunden wird?
      - wert: [8]
        meldung: '`return pos` ist richtig, wenn `pos` das erste Leerzeichen enthält. Wird `pos` später noch überschrieben?'
  - typ: zahl
    label: Was liefert die Methode für `"EP1 ist toll"`? (Richtig wäre 3.)
    loesung: "7"
    fehler:
      - wert: "3"
        meldung: 'Die Schleife läuft nach dem ersten Fund weiter. Beim zweiten Leerzeichen wird `pos` überschrieben.'
hinweise:
  - Teste mit einem String, der **zwei** Leerzeichen enthält.
  - 'Nach dem ersten Fund müsste die Methode aufhören. Was tut Zeile 5 stattdessen?'
loesung: |
  **Ansatz:** Mit einem Randfall testen, den das einfachste Beispiel nicht abdeckt: zwei Leerzeichen.
  ---
  Bei `"EP1 ist toll"` stehen Leerzeichen an den Positionen 3 und 7. Zeile 5 setzt `pos` erst auf 3, dann auf 7. Ergebnis 7.
  ---
  Die Methode findet das **letzte** Leerzeichen. Korrektur in Zeile 5: `return i;` statt `pos = i;`. Wird kein Leerzeichen gefunden, liefert `return pos;` am Ende weiterhin -1.
```

```aufgabe
id: cq-ki-ausgabe-wiederhole
titel: Randfälle für wiederhole
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Spezifikation: `wiederhole(s, n)` liefert `s` genau `n`-mal, getrennt durch `-`. Beispiel: `wiederhole("ab", 3)` liefert `"ab-ab-ab"`. Vorbedingung: `n >= 0`. Was gibt das Testprogramm mit dem KI-Code aus?
teile:
  - typ: ausgabe
    code: |
      public class Wiederholen {
          public static String wiederhole(String s, int n) {
              String r = "";
              for (int i = 0; i <= n; i++) {
                  r = r + s + "-";
              }
              return r;
          }

          public static void main(String[] args) {
              System.out.println(wiederhole("ab", 2));
              System.out.println(wiederhole("x", 0) + "|");
          }
      }
    loesung: |
      ab-ab-ab-
      x-|
    fehler:
      - wert: "ab-ab\n|"
        meldung: Das wäre die richtige Ausgabe laut Spezifikation. Gefragt ist, was der KI-Code tatsächlich ausgibt.
      - wert: "ab-ab-\n|"
        meldung: 'Die Bedingung ist `i <= n`. Für `n = 2` läuft die Schleife mit `i = 0, 1, 2`, also dreimal.'
hinweise:
  - Zähle die Durchläufe bei `i <= n` genau. Für `n = 0` läuft die Schleife einmal.
  - In jedem Durchlauf wird `s` **und** ein Strich angehängt.
loesung: |
  **Ansatz:** Die Schleife mit den Testwerten durchspielen.
  ---
  `wiederhole("ab", 2)`: `i = 0, 1, 2`, also dreimal `ab-`. Ergebnis `ab-ab-ab-`.
  ---
  `wiederhole("x", 0)`: `i = 0` erfüllt `0 <= 0`, also einmal `x-`. Ausgabe `x-|`.
  ---
  Zwei Fehler: eine Wiederholung zu viel (`i <= n` statt `i < n`) und ein Strich am Ende (Zaunpfahlproblem). Richtig wäre `ab-ab` und eine leere Ausgabe vor `|`.
```

```aufgabe
id: cq-ki-rf-pruefen
titel: Aussagen zum Prüfen von KI-Code
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Wenn KI-Code kompiliert und alle Beispiele der Angabe richtig ausgibt, ist er korrekt.
        richtig: false
        erklaerung: Die Beispiele decken selten alle Randfälle ab. `druckeGerade(2, 8)` stimmte, `druckeGerade(3, 8)` nicht.
      - text: Eine Eingabe, die die Vorbedingung verletzt, ist kein gültiges Gegenbeispiel.
        richtig: true
        erklaerung: Die Methode muss nur für erlaubte Eingaben funktionieren.
      - text: Liefert KI-Code das richtige Ergebnis, verwendet aber eine in der Angabe verbotene Methode, erfüllt die Lösung die Angabe trotzdem nicht.
        richtig: true
        erklaerung: Die Einschränkungen gehören zur Spezifikation. Wer eine verbotene Methode verwendet, hat die Aufgabe nicht so gelöst, wie sie gestellt war.
      - text: Beim Reparieren von KI-Code schreibt man am besten alles neu, auch die Teile, die stimmen.
        richtig: false
        erklaerung: Man korrigiert gezielt die fehlerhafte Stelle. Wer alles neu schreibt, baut leicht neue Fehler ein.
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Denk an `druckeGerade`: Das Beispiel der Angabe stimmte, trotzdem war der Code falsch.'
hinweise:
  - Was zeigt ein Beispiel, und was kann es nicht zeigen?
  - Zur Spezifikation gehören auch Vorbedingungen und Einschränkungen.
loesung: |
  **Ansatz:** Jede Aussage mit den Begriffen Spezifikation, Gegenbeispiel und Einschränkung prüfen.
  ---
  Aussage 1 falsch (Randfälle fehlen). Aussage 2 richtig (Gegenbeispiele müssen erlaubt sein).
  ---
  Aussage 3 richtig (Einschränkungen gehören zur Spezifikation). Aussage 4 falsch (gezielt korrigieren). Ergebnis: falsch, richtig, richtig, falsch.
```

```aufgabe
id: cq-ki-code-stop
titel: KI-Code ohne verbotene Methode
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Idee nach Aufgabenblatt 3 WS 2023, Aufgabe 3 (Suche nach einem Wort ohne Rücksicht auf Groß- und Kleinschreibung), mit anderem Wort, ohne Rekursion
angabe: |
  Spezifikation: `enthaeltHalt(String text)` liefert `true`, wenn die Zeichenfolge `halt` irgendwo in `text` vorkommt, egal in welcher Groß- und Kleinschreibung. Sonst liefert sie `false`. Von `String` sind **nur** `length`, `charAt`, `substring`, `toLowerCase` und `equals` erlaubt. Vorbedingung: `text != null`.

  Die KI liefert diese Lösung:

  ```java
  public static boolean enthaeltHalt(String text) {
      if (text.length() < 4) {
          return false;
      }
      return text.toLowerCase().contains("halt");
  }
  ```

  Sie liefert richtige Ergebnisse, verwendet aber die verbotene Methode `contains`. Schreibe eine Fassung, die nur erlaubte Methoden verwendet.
teile:
  - typ: code
    vorlage: |
      public class Halt {
          public static boolean enthaeltHalt(String text) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Halt {
          public static boolean enthaeltHalt(String text) {
              String klein = text.toLowerCase();
              for (int i = 0; i + 4 <= klein.length(); i++) {
                  if (klein.substring(i, i + 4).equals("halt")) {
                      return true;
                  }
              }
              return false;
          }
      }
    tests:
      - { aufruf: 'enthaeltHalt("BusHALTestelle")', erwartet: "true" }
      - { aufruf: 'enthaeltHalt("x")', erwartet: "false", beschreibung: "nur ein Zeichen" }
      - { aufruf: 'enthaeltHalt("hal")', erwartet: "false", beschreibung: "zu kurz" }
      - { aufruf: 'enthaeltHalt("hALt")', erwartet: "true", beschreibung: "genau vier Zeichen" }
      - { aufruf: 'enthaeltHalt("ha lt")', erwartet: "false" }
      - { aufruf: 'enthaeltHalt("anhalT")', erwartet: "true", beschreibung: "am Ende" }
      - { aufruf: 'enthaeltHalt("thal lath")', erwartet: "false", versteckt: true }
    regeln: { erlaubteApi: ["String.length", "String.charAt", "String.substring", "String.toLowerCase", "String.equals"] }
    fehler:
      - { wert: erlaubteApi, meldung: "Du verwendest eine Methode, die nicht in der Liste steht. Erlaubt sind nur `length`, `charAt`, `substring`, `toLowerCase` und `equals`." }
      - { wert: 4, meldung: "Bei genau vier Zeichen muss die Schleife einmal laufen, mit `i = 0`. Prüfe die Bedingung `i + 4 <= text.length()`." }
      - { wert: 6, meldung: "`halt` ganz am Ende wird übersehen. Läuft deine Schleife bis zur letzten möglichen Startposition `length() - 4`?" }
hinweise:
  - Wandle den Text einmal mit `toLowerCase()` in Kleinbuchstaben um. Dann musst du nur noch `halt` suchen.
  - 'Prüfe jede Startposition `i`, an der noch vier Zeichen Platz haben: `i + 4 <= länge`. Vergleiche `substring(i, i + 4)` mit `equals("halt")`.'
loesung: |
  **Ansatz:** Das Verhalten der KI-Lösung ist richtig. Nur `contains` muss durch erlaubte Methoden ersetzt werden.
  ---
  `contains` prüft jede mögliche Startposition. Das bauen wir mit einer Schleife nach: Für jedes `i` mit `i + 4 <= länge` vergleichen wir die vier Zeichen ab `i` mit `"halt"`.
  ---
  ```java
  String klein = text.toLowerCase();
  for (int i = 0; i + 4 <= klein.length(); i++) {
      if (klein.substring(i, i + 4).equals("halt")) {
          return true;
      }
  }
  return false;
  ```
  ---
  Probe: `"hALt"` prüft nur `i = 0` und findet `halt`. `"hal"` lässt die Schleife gar nicht laufen und liefert `false`. Die Abfrage `length() < 4` der KI ist überflüssig, die Schleifenbedingung erledigt das.
```

```aufgabe
id: cq-ki-code-quadrate
titel: Das KI-Quadratmuster in der richtigen Reihenfolge
niveau: 3
lernziel: 6
kompetenz: modellieren
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 5 (ChatGPT-Code reparieren, vereinfachte Variante ohne Rekursion)
angabe: |
  Spezifikation: Das erste gefüllte Quadrat hat den Mittelpunkt `(x, y)` und die Seitenlänge `s`. Jedes weitere Quadrat ist halb so groß, sein Mittelpunkt liegt um die halbe Seitenlänge des vorigen weiter **links und oben**. Gezeichnet wird, solange die Seitenlänge mindestens 20 ist. Das größte Quadrat ist rot (`Palette.RED`), dann wechseln sich Gelb (`Palette.YELLOW`) und Rot ab. **Größere Quadrate überdecken die kleineren.** Vorbedingung: Jede Halbierung bis unter 20 geht ohne Rest auf, zum Beispiel `s = 160` oder `s = 64`.

  Die KI liefert:

  ```java
  public static void zeichneQuadrate(CodeDraw cd, int x, int y, int s) {
      boolean rot = true;
      while (s >= 20) {
          if (rot) {
              cd.setColor(Palette.RED);
          } else {
              cd.setColor(Palette.YELLOW);
          }
          cd.fillSquare(x - s / 2, y - s / 2, s);
          x = x - s / 2;
          y = y - s / 2;
          s = s / 2;
          rot = !rot;
      }
  }
  ```

  Größen, Positionen und Farben stimmen, aber die kleineren Quadrate liegen oben. Repariere die Methode so,
  dass dieselben Quadrate vom kleinsten zum größten gezeichnet werden.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class KiQuadrate {
          public static void zeichneQuadrate(CodeDraw cd, int x, int y, int s) {
              boolean rot = true;
              while (s >= 20) {
                  if (rot) {
                      cd.setColor(Palette.RED);
                  } else {
                      cd.setColor(Palette.YELLOW);
                  }
                  cd.fillSquare(x - s / 2, y - s / 2, s);
                  x = x - s / 2;
                  y = y - s / 2;
                  s = s / 2;
                  rot = !rot;
              }
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              zeichneQuadrate(cd, 240, 240, 160);
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class KiQuadrate {
          public static void zeichneQuadrate(CodeDraw cd, int x, int y, int s) {
              int start = s;
              boolean rot = true;
              while (s / 2 >= 20) {
                  x = x - s / 2;
                  y = y - s / 2;
                  s = s / 2;
                  rot = !rot;
              }
              while (s <= start) {
                  if (rot) {
                      cd.setColor(Palette.RED);
                  } else {
                      cd.setColor(Palette.YELLOW);
                  }
                  cd.fillSquare(x - s / 2, y - s / 2, s);
                  s = s * 2;
                  x = x + s / 2;
                  y = y + s / 2;
                  rot = !rot;
              }
          }

          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              zeichneQuadrate(cd, 240, 240, 160);
              cd.show();
          }
      }
    tests:
      - { aufruf: "zeichneQuadrate(new CodeDraw(400, 400), 240, 240, 160)", zeichnung: true, reihenfolge: true, beschreibung: "vier Quadrate ab (240, 240) mit Seite 160" }
      - { aufruf: "zeichneQuadrate(new CodeDraw(400, 400), 300, 300, 64)", zeichnung: true, reihenfolge: true, beschreibung: "zwei Quadrate ab (300, 300) mit Seite 64", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche die Reihenfolge: Das kleinste gelbe Quadrat mit Seite 20 muss zuerst gezeichnet werden, das große rote zuletzt. Achte auch auf die Farbe des kleinsten Quadrats." }
hinweise:
  - Rechne zuerst ohne zu zeichnen bis zum kleinsten Quadrat vor und merke dir dabei, welche Farbe es hat. Die Schleifenbedingung dafür lautet `s / 2 >= 20`.
  - 'Gehe danach rückwärts: Seite verdoppeln, Mittelpunkt um die halbe **neue** Seite nach rechts unten verschieben, Farbe wechseln. Wiederhole das, solange `s` höchstens die Startgröße ist.'
loesung: |
  **Ansatz:** Was später gezeichnet wird, liegt oben. Die Quadrate müssen also vom kleinsten zum größten gezeichnet werden. Dafür muss man das kleinste zuerst kennen.
  ---
  Phase 1, nur rechnen: Solange `s / 2 >= 20`, Mittelpunkt um `s / 2` nach links oben, `s` halbieren, Farbe wechseln. Für `(240, 240, 160)` endet das bei `s = 20`, Mittelpunkt `(100, 100)`, Farbe gelb.
  ---
  Phase 2, zeichnen: Quadrat zeichnen, dann `s` verdoppeln, Mittelpunkt um die halbe neue Seite nach rechts unten, Farbe wechseln. Solange `s <= start`.
  ---
  Probe für `(240, 240, 160)`. Angegeben sind jeweils die linke obere Ecke und die Seitenlänge. Zuerst kommt gelb mit Ecke `(90, 90)` und Seite 20, dann rot mit `(100, 100)` und 40. Danach folgen gelb mit `(120, 120)` und 80 sowie rot mit `(160, 160)` und 160. Das sind dieselben Quadrate wie bei der KI, nur in umgekehrter Reihenfolge. Das große rote Quadrat liegt oben.
```

## Gemischte Wiederholung

Hier sind die Aufgaben gemischt, auch mit Stoff aus den Kapiteln 2 bis 6. In der Prüfung steht nicht
dabei, welche Technik gefragt ist. Bei den ersten beiden Aufgaben entscheidest du nur, welches Vorgehen passt.

```aufgabe
id: cq-mix-verfahren-abbruch
titel: Welches Vorgehen passt? Ein Abbruch
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Dein Programm bricht mit `StringIndexOutOfBoundsException: Index 5 out of bounds for length 5` ab. Darunter stehen zehn `at`-Zeilen. Was tust du **zuerst**? Du musst nichts programmieren.
teile:
  - typ: auswahl
    optionen:
      - 'die erste `at`-Zeile mit meiner eigenen Klasse suchen und dort die Zeile ansehen'
      - 'die oberste `at`-Zeile öffnen, auch wenn sie mit `java.base/` beginnt'
      - 'nacheinander `<` und `<=` in allen Schleifen vertauschen, bis der Fehler weg ist'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Zeilen mit `java.base/` gehören zu Javas eigenem Code. Dort wird der Fehler nur gemeldet, nicht verursacht.
      - wert: 2
        meldung: Das ist Herumprobieren. Die Meldung sagt dir schon, welcher Index falsch ist, und der Stacktrace sagt, wo.
hinweise:
  - Ein Stacktrace nennt Art, Meldung und Ort. Welcher Ort gehört zu deinem Code?
loesung: |
  **Ansatz:** Bei einer Exception ist der Stacktrace die wichtigste Informationsquelle.
  ---
  Zuerst die erste `at`-Zeile mit der eigenen Klasse suchen. Dort steht der Zugriff mit Index 5. Danach rückwärts die Ursache suchen, meist die Schleifenbedingung.
```

```aufgabe
id: cq-mix-verfahren-situationen
titel: Welches Vorgehen passt? Drei Situationen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Wähle für jede Situation das passende Vorgehen. Du musst nichts programmieren.

  a) In `main` steht dreimal fast derselbe Block mit zwei Schleifen. Nur ein Zeichen und eine Zahl sind verschieden.

  b) Eine Methode läuft ohne Abbruch, liefert aber für manche Eingaben ein falsches Ergebnis.

  c) Ein KI-Werkzeug hat eine Methode geschrieben. Das Beispiel aus der Angabe stimmt.
teile:
  - typ: auswahl
    label: a)
    optionen: ['eine Methode mit zwei Parametern auslagern', 'einen Stacktrace lesen', 'Kontrollausgaben einbauen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Es gibt keinen Abbruch, also auch keinen Stacktrace. Das Problem ist die Wiederholung im Code.
      - wert: 2
        meldung: Der Code liefert vielleicht das Richtige. Das Problem ist die Struktur, nicht ein falsches Ergebnis.
  - typ: auswahl
    label: b)
    optionen: ['eine Methode auslagern', 'kleinste fehlerhafte Eingabe suchen, Hypothese aufstellen, mit Kontrollausgaben prüfen', 'den Code mit Strg+Alt+L formatieren']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein Umbau ändert das Verhalten nicht, also auch nicht den Fehler.
      - wert: 2
        meldung: Formatieren verbessert die Lesbarkeit, ändert aber kein Ergebnis.
  - typ: auswahl
    label: c)
    optionen: ['übernehmen, weil das Beispiel stimmt', 'Randfälle ausdenken und testen und die erlaubten Methoden prüfen', 'alles von Grund auf neu schreiben']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das Beispiel der Angabe ist genau der Fall, für den die KI den Code gebaut hat. Fehler stecken in den Randfällen.
      - wert: 2
        meldung: Neu schreiben ist erst nötig, wenn der Code grundsätzlich falsch ist. Zuerst prüft man ihn.
hinweise:
  - 'Frage jeweils: Ist das Problem die Struktur, ein falsches Ergebnis oder fehlendes Vertrauen?'
loesung: |
  **Ansatz:** Jede Situation einem Problemtyp zuordnen: Struktur, logischer Fehler, ungeprüfter fremder Code.
  ---
  a) Wiederholte Blöcke: Methode auslagern, Unterschiede werden Parameter. b) Logischer Fehler: systematisch debuggen.
  ---
  c) Fremder Code: mit Randfällen und gegen die Einschränkungen prüfen, bevor man ihn übernimmt.
```

```aufgabe
id: cq-mix-char-summe
titel: Zeichen addieren
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Das Rechnen mit `char` kennst du aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
teile:
  - typ: ausgabe
    code: |
      public class Zeichen {
          public static char f(char c) {
              return (char) (c + 1);
          }

          public static void main(String[] args) {
              System.out.println(f('a') + f('y'));
              System.out.println("" + f('a') + f('y'));
          }
      }
    loesung: |
      220
      bz
    fehler:
      - wert: "bz\nbz"
        meldung: '`f` liefert zwar Zeichen, aber `char + char` ist eine Zahlenrechnung. `''b''` hat den Wert 98 und `''z''` den Wert 122.'
      - wert: "220\n220"
        meldung: 'Steht links ein String, bedeutet `+` „anhängen“. Dann werden die Zeichen aneinandergehängt.'
hinweise:
  - '`f(''a'')` liefert `''b''`, `f(''y'')` liefert `''z''`. Was ergibt `+` zwischen zwei `char`-Werten?'
loesung: |
  **Ansatz:** `f` liefert das nächste Zeichen. Danach entscheidet der Typ links vom `+`, ob gerechnet oder angehängt wird.
  ---
  Zeile 1: `'b' + 'z'` sind zwei `char`, Java rechnet mit den Zahlenwerten: 98 + 122 = 220.
  ---
  Zeile 2: `"" + 'b'` ist ein String, danach wird `'z'` angehängt. Ausgabe `bz`.
```

```aufgabe
id: cq-mix-trenner
titel: Ein Trennzeichen zu viel?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt dieser Code aus? Trennzeichen in Schleifen kennst du aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
teile:
  - typ: ausgabe
    code: |
      for (int i = 5; i >= 1; i--) {
          System.out.print(i);
          if (i > 1) {
              System.out.print("<");
          }
      }
      System.out.println();
    loesung: |
      5<4<3<2<1
    fehler:
      - wert: "5<4<3<2<1<"
        meldung: Bei `i = 1` ist `1 > 1` falsch. Nach der letzten Zahl kommt kein Zeichen mehr.
      - wert: "1<2<3<4<5"
        meldung: Die Schleife zählt rückwärts, von 5 bis 1.
hinweise:
  - Das Trennzeichen erscheint nur, wenn noch eine Zahl folgt, also für `i > 1`.
loesung: |
  `i` läuft von 5 bis 1. Nach jeder Zahl außer der 1 folgt `<`.
  ---
  Ausgabe `5<4<3<2<1`. Das ist die richtige Lösung des Zaunpfahlproblems: vier Trennzeichen für fünf Zahlen.
```

```aufgabe
id: cq-mix-switch
titel: Ein switch ohne break lesen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt dieser Code aus? Den Fallthrough kennst du aus [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).
teile:
  - typ: ausgabe
    code: |
      int tag = 2;
      switch (tag) {
          case 1:
              System.out.print("A");
          case 2:
              System.out.print("B");
          case 3:
              System.out.print("C");
              break;
          default:
              System.out.print("D");
      }
      System.out.println();
    loesung: |
      BC
    fehler:
      - wert: "B"
        meldung: Nach `case 2` steht kein `break`. Java läuft in `case 3` weiter, bis zum nächsten `break`.
      - wert: "BCD"
        meldung: Nach `C` steht ein `break`. Es beendet den `switch`, `default` läuft nicht mehr.
hinweise:
  - Java springt zum passenden `case` und läuft dann weiter, bis ein `break` kommt.
loesung: |
  **Ansatz:** Einsprungstelle bestimmen und dann bis zum ersten `break` lesen.
  ---
  `tag` ist 2, Einstieg bei `case 2`: `B`. Kein `break`, also weiter in `case 3`: `C`, dann `break`.
  ---
  Ausgabe `BC`. Ein vergessenes `break` ist ein typischer logischer Fehler, den man nur durch genaues Lesen findet.
```

```aufgabe
id: cq-mix-tausche
titel: Ein Tausch, der nichts tauscht
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein KI-Werkzeug liefert diese Methode, um zwei Zahlen zu tauschen:

  ```java
  public static void tausche(int a, int b) {
      int hilf = a;
      a = b;
      b = hilf;
  }
  ```

  In `main` stehen `int x = 1, y = 2; tausche(x, y); System.out.println(x + " " + y);`. Was erscheint, und warum?
teile:
  - typ: auswahl
    optionen:
      - '`1 2`, weil die Methode nur Kopien von `x` und `y` vertauscht'
      - '`2 1`, weil die Methode `x` und `y` vertauscht'
      - 'Ein Compilerfehler, weil `a` und `b` nicht verändert werden dürfen'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Java übergibt Werte als Kopie (call-by-value). `a` und `b` sind eigene Variablen der Methode.'
      - wert: 2
        meldung: Parameter sind lokale Variablen. Man darf ihnen neue Werte zuweisen, das kompiliert.
hinweise:
  - 'Denk an call-by-value aus [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).'
  - Was passiert mit `a` und `b`, wenn die Methode endet?
loesung: |
  **Ansatz:** Die Parameter `a` und `b` bekommen beim Aufruf Kopien der Werte 1 und 2.
  ---
  In der Methode werden die Kopien vertauscht. Am Ende verschwinden sie, `x` und `y` in `main` sind unberührt.
  ---
  Ausgabe `1 2`. Der KI-Code ist ein Beispiel für plausibel aussehenden, aber wirkungslosen Code. Mit einer Methode, die nur einen `int` zurückgeben kann, lässt sich ein Tausch zweier Variablen nicht schreiben.
```

```aufgabe
id: cq-mix-zeilen-equals
titel: Ein Stringvergleich, der nie klappt
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll `true` liefern, wenn `wort` mit `"Ja"` beginnt. Für `beginntMitJa("Java")` liefert sie aber `false`. In welcher Zeile steckt der Fehler? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: zeilen
    code: |
      public static boolean beginntMitJa(String wort) {
          if (wort.length() < 2) {
              return false;
          }
          String anfang = wort.substring(0, 2);
          return anfang == "Ja";
      }
    loesung: [6]
    fehler:
      - wert: [5]
        meldung: '`substring(0, 2)` liefert die ersten zwei Zeichen, hier `"Ja"`. Das ist richtig. Wie werden die beiden Strings danach verglichen?'
      - wert: [2]
        meldung: 'Die Prüfung der Länge verhindert eine Exception bei kurzen Wörtern. Sie ist richtig.'
hinweise:
  - Wie vergleicht man den **Inhalt** zweier Strings in Java?
loesung: |
  **Ansatz:** Jede Zeile mit `"Java"` durchspielen.
  ---
  Zeile 5 liefert `anfang = "Ja"`. Zeile 6 vergleicht mit `==`. Das prüft, ob es dasselbe String-Objekt ist, nicht ob der Inhalt gleich ist.
  ---
  `substring` erzeugt ein neues Objekt, also liefert `==` hier `false`. Korrektur: `return anfang.equals("Ja");`.
```

```aufgabe
id: cq-mix-rf-for-while
titel: Eine while-Schleife zur for-Schleife umbauen
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Das Original lautet:

  ```java
  int i = 0;
  while (i < s.length()) {
      System.out.print(s.charAt(i));
      i = i + 2;
  }
  ```

  Beurteile jede Aussage über eine mögliche Umformung. Die `for`-Schleife kennst du aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`for (int i = 0; i < s.length(); i += 2) { System.out.print(s.charAt(i)); }` verhält sich gleich.'
        richtig: true
        erklaerung: 'Startwert, Bedingung und Schritt sind dieselben, nur an anderer Stelle notiert.'
      - text: '`for (int i = 0; i <= s.length(); i += 2) { … }` verhält sich gleich.'
        richtig: false
        erklaerung: 'Bei gerader Länge erreicht `i` den Wert `s.length()`, und `charAt` wirft eine Exception.'
      - text: '`for (int i = 1; i < s.length(); i += 2) { … }` verhält sich gleich.'
        richtig: false
        erklaerung: Dann werden die Zeichen an den ungeraden Positionen ausgegeben, nicht an den geraden.
      - text: Nach der `for`-Fassung ist `i` außerhalb der Schleife nicht mehr verwendbar. Das ist nur dann ein Problem, wenn danach jemand `i` braucht.
        richtig: true
        erklaerung: Eine im `for`-Kopf deklarierte Variable gilt nur in der Schleife. Für die Ausgabe spielt das keine Rolle.
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Probiere die zweite Fassung mit `s = "ab"`. Welche Werte nimmt `i` an?'
hinweise:
  - Vergleiche Startwert, Bedingung und Schritt.
  - Teste die zweifelhaften Fassungen mit einem kurzen String gerader Länge, etwa `"ab"`.
loesung: |
  **Ansatz:** Eine Umformung ist verhaltensgleich, wenn Startwert, Bedingung und Schritt übereinstimmen.
  ---
  Fassung 1: alles gleich, also richtig. Fassung 2: `<=` lässt bei `"ab"` den Wert `i = 2` zu, Exception, also falsch.
  ---
  Fassung 3: Start bei 1 gibt andere Zeichen aus, falsch. Aussage 4 richtig. Ergebnis: richtig, falsch, falsch, richtig.
```

```aufgabe
id: cq-mix-rueckwaerts
titel: Rückwärts ohne Absturz
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Schleife soll `text` rückwärts ausgeben. Sie bricht aber sofort mit `StringIndexOutOfBoundsException: Index 4 out of bounds for length 4` ab, wenn `text = "Code"` ist. Ergänze den richtigen Startwert.
teile:
  - typ: lueckentext
    code: |
      String text = "Code";
      for (int i = ___; i >= 0; i--) {
          System.out.print(text.charAt(i));
      }
      System.out.println();
    luecken: [["text.length() - 1", "text.length()-1", "3"]]
    fehler:
      - wert: ["text.length()"]
        meldung: '`text.length()` ist 4. Genau dieser Index ist laut Meldung ungültig. Die letzte Position ist eins weniger.'
hinweise:
  - Die Meldung nennt den ungültigen Index 4 bei Länge 4. Welche Position hat das letzte Zeichen?
loesung: |
  **Ansatz:** Die Meldung verrät den falschen Startwert: Index 4 bei Länge 4.
  ---
  Das letzte Zeichen steht an Position `text.length() - 1`, hier 3. Damit gibt die Schleife `edoC` aus. Allgemein `text.length() - 1`, damit es für jedes Wort stimmt.
```

```aufgabe
id: cq-mix-ueberladen
titel: Welche Methode antwortet?
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? Überladen kennst du aus [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden). Die Methodennamen verraten absichtlich nichts.
teile:
  - typ: ausgabe
    code: |
      public class Welche {
          public static String g(int n) {
              return "int";
          }

          public static String g(double d) {
              return "double";
          }

          public static String g(String s) {
              return "String";
          }

          public static void main(String[] args) {
              System.out.println(g('x') + " " + g(5 / 2) + " " + g(5 / 2.0) + " " + g("" + 5));
          }
      }
    loesung: |
      int int double String
    fehler:
      - wert: "String int double String"
        meldung: '`''x''` ist ein `char`, kein String. Ein `char` wird auf `int` erweitert, also passt `g(int)`.'
      - wert: "int double double String"
        meldung: '`5 / 2` ist eine Ganzzahldivision mit dem Ergebnis `2` vom Typ `int`.'
hinweise:
  - Bestimme für jedes Argument zuerst seinen Typ. Ein `char` passt nicht zu `String`, wohl aber zu `int`.
  - '`5 / 2` und `5 / 2.0` haben verschiedene Typen. `"" + 5` ist ein String.'
loesung: |
  **Ansatz:** Für jeden Aufruf den Typ des Arguments bestimmen und die passende Variante wählen.
  ---
  `'x'` ist `char` und wird zu `int` erweitert: `int`. `5 / 2` ist `int`: `int`.
  ---
  `5 / 2.0` ist `double`: `double`. `"" + 5` ist der String `"5"`: `String`.
  ---
  Ausgabe `int int double String`. Wer Code mit nichtssagenden Namen liest, muss genau solche Typfragen selbst klären.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Aufgabenblatt, Quiz und Programmiertest. Plane die angegebene Zeit ein
und arbeite zuerst ohne Hinweise. Das Quizformat 2026W ist nicht veröffentlicht. Die Quizaufgaben folgen den
TUWEL-Tests 2021 bis 2023.

```aufgabe
id: cq-pruef-spaghetti
titel: Spaghetticode analysieren, zerlegen und parametrisieren
niveau: 3
punkte: 6
lernziel: 2
kompetenz: modellieren
quelle: Aufgabenblatt 3 WS 2023, Aufgabe 1 a bis d (nachgebaut, neues Muster)
angabe: |
  (Zeitrichtwert: 20 Minuten) Gegeben ist dieser Spaghetticode:

  ```java
  public class rahmen {
  public static void main(String[] args) {
  System.out.print("+"); for(int i=0;i<6;i++) System.out.print("-"); System.out.println("+");
  System.out.print("|"); for(int i=0;i<3;i++) System.out.print("><"); System.out.println("|");
  System.out.print("|"); for(int i=0;i<3;i++) System.out.print("<>"); System.out.println("|");
  System.out.print("+"); for(int i=0;i<6;i++) System.out.print("-"); System.out.println("+");
  }}
  ```

  **a)** (1 Punkt) Beschreibe in wenigen Sätzen, was der Code ausgibt.

  **b)** (1 Punkt) Nenne Stellen, die du an Gliederung und Formatierung ändern würdest, und begründe sie.

  **c) und d)** (4 Punkte) Zerlege den Code in Methoden. `druckeRahmen(int breite)` soll das Muster für jede
  gerade Breite `breite >= 4` ausgeben. Die Breite zählt die beiden Ecken mit, im Original ist sie 8. Der
  Aufruf in `main` muss genau die Ausgabe des Spaghetticodes erzeugen. Weitere Methoden darfst du ergänzen.
teile:
  - typ: text
    label: a) Funktionsweise
    muster: |
      Der Code gibt einen Rahmen aus vier Zeilen und acht Zeichen Breite aus. Oben und unten steht eine
      Randzeile `+------+`. Dazwischen stehen zwei Zeilen mit senkrechten Strichen am Rand. Innen steht
      dreimal das Paar `><` und in der nächsten Zeile dreimal `<>`. Die Ausgabe ist `+------+`,
      `|><><><|`, `|<><><>|`, `+------+`.
  - typ: text
    label: b) Änderungen mit Begründung
    muster: |
      1. Der Klassenname `rahmen` sollte groß beginnen (`Rahmen`), wie es die Konvention für Klassen verlangt.
      2. Eine Anweisung pro Zeile und Einrückung je Block, damit man erkennt, was zur Schleife gehört.
      3. Geschweifte Klammern auch bei den einzeiligen `for`-Schleifen, damit spätere Änderungen nicht danebengehen.
      4. Die Randzeile steht zweimal fast gleich da, die Innenzeilen unterscheiden sich nur im Paar. Das gehört in Methoden.
      5. Die Zahlen 6 und 3 hängen von der Breite ab. Sie sollten aus einem Parameter berechnet werden.
  - typ: code
    label: c) und d) Methoden
    vorlage: |
      public class Rahmen {
          // Vorbedingung: breite >= 4 und breite gerade
          public static void druckeRahmen(int breite) {
              // TODO
          }

          public static void main(String[] args) {
              druckeRahmen(8);
          }
      }
    musterloesung: |
      public class Rahmen {
          public static void druckeRand(int breite) {
              System.out.print("+");
              for (int i = 0; i < breite - 2; i++) {
                  System.out.print("-");
              }
              System.out.println("+");
          }

          public static void druckeInnen(int breite, String paar) {
              System.out.print("|");
              for (int i = 0; i < (breite - 2) / 2; i++) {
                  System.out.print(paar);
              }
              System.out.println("|");
          }

          public static void druckeRahmen(int breite) {
              druckeRand(breite);
              druckeInnen(breite, "><");
              druckeInnen(breite, "<>");
              druckeRand(breite);
          }

          public static void main(String[] args) {
              druckeRahmen(8);
          }
      }
    tests:
      - { aufruf: "druckeRahmen(8)", stdout: "+------+\n|><><><|\n|<><><>|\n+------+\n", beschreibung: "Breite 8 wie im Original" }
      - { aufruf: "druckeRahmen(4)", stdout: "+--+\n|><|\n|<>|\n+--+\n", beschreibung: "kleinste Breite 4" }
      - { aufruf: "druckeRahmen(12)", stdout: "+----------+\n|><><><><><|\n|<><><><><>|\n+----------+\n", versteckt: true }
      - { stdout: "+------+\n|><><><|\n|<><><>|\n+------+\n", beschreibung: "main erzeugt die Originalausgabe" }
    fehler:
      - { wert: 2, meldung: "Bei Breite 8 stimmt es, bei Breite 4 nicht. Hängt jede Zahl in deinen Methoden von `breite` ab? Innen stehen `breite - 2` Zeichen, also `(breite - 2) / 2` Paare." }
hinweise:
  - Notiere zuerst die Ausgabe des Originals. Sie ist der Maßstab für Teil d).
  - 'Zwei Arten von Zeilen: Randzeile mit `breite - 2` Strichen zwischen `+` und `+`, Innenzeile mit `(breite - 2) / 2` Paaren zwischen `|` und `|`. Das Paar wird ein Parameter.'
loesung: |
  **Ansatz:** a) Ausgabe bestimmen, b) mit der Checkliste für lesbaren Code vergleichen, c) gleiche Blöcke zu Methoden, Unterschiede zu Parametern, Zahlen aus `breite` berechnen.
  ---
  a) Ausgabe: `+------+`, `|><><><|`, `|<><><>|`, `+------+`. b) Klassenname, Formatierung, Klammern, doppelte Blöcke, magische Zahlen 6 und 3.
  ---
  c) Die 6 ist `breite - 2`, die 3 ist `(breite - 2) / 2`. Randzeile: `druckeRand(int breite)`. Innenzeile: `druckeInnen(int breite, String paar)`.
  ---
  ```java
  public static void druckeRahmen(int breite) {
      druckeRand(breite);
      druckeInnen(breite, "><");
      druckeInnen(breite, "<>");
      druckeRand(breite);
  }
  ```
  ---
  d) Probe: `druckeRahmen(8)` liefert genau die vier Zeilen des Originals. `druckeRahmen(4)` liefert `+--+`, `|><|`, `|<>|`, `+--+`. Damit ist auch geprüft, dass keine feste Zahl übrig ist.
```

```aufgabe
id: cq-pruef-quiz-sc
titel: Drei Quizfragen zum Code lesen
niveau: 3
punkte: 3
lernziel: 0
kompetenz: anwenden
quelle: Format nach TUWEL-Test 1 (Single Choice mit drei Optionen), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt)

  **a)** Was liefert `m("Banane", 'n')`?

  ```java
  public static int m(String s, char c) {
      int r = -1;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == c) {
              r = i;
          }
      }
      return r;
  }
  ```

  **b)** Was passiert bei `String t = "abc"; System.out.println(t.substring(1, 4));`?

  **c)** Welche Fassung verhält sich für alle `int`-Werte genau wie dieser Code?

  ```java
  if (x > 0) {
      if (y > 0) {
          return true;
      }
  }
  return false;
  ```
teile:
  - typ: auswahl
    label: a)
    optionen: ['`4`', '`2`', '`-1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '2 ist die Position des **ersten** `n`. Die Schleife läuft aber weiter und überschreibt `r` beim zweiten `n`.'
      - wert: 2
        meldung: '-1 kommt nur, wenn `c` gar nicht vorkommt. `"Banane"` enthält zwei `n`.'
  - typ: auswahl
    label: b)
    optionen: ['Eine `StringIndexOutOfBoundsException`', 'Es wird `bc` ausgegeben.', 'Ein Compilerfehler']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`substring(1, 4)` verlangt ein Ende von höchstens `length()`, also 3. Das Ende 4 ist ungültig.'
      - wert: 2
        meldung: Der Compiler prüft nur Typen. Die ungültige Grenze fällt erst beim Ausführen auf.
  - typ: auswahl
    label: c)
    optionen: ['`return x > 0 && y > 0;`', '`return x > 0 || y > 0;`', '`return !(x <= 0 && y <= 0);`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel `x = 1`, `y = -1`: Das Original liefert `false`, diese Fassung `true`.'
      - wert: 2
        meldung: 'Nach De Morgan ist das dasselbe wie `x > 0 || y > 0`. Gegenbeispiel `x = 1`, `y = -1`.'
hinweise:
  - 'a) Die Methode merkt sich jede Fundstelle, die letzte gewinnt. b) Gültig ist `substring(a, b)` nur für `b <= length()`.'
  - 'c) Verschachtelte `if` ohne `else` bedeuten „beide Bedingungen“. Prüfe die Optionen mit `x = 1`, `y = -1`.'
loesung: |
  **Ansatz:** a) durchspielen, b) Grenzen von `substring` prüfen, c) mit einem Gegenbeispiel arbeiten.
  ---
  a) `n` steht an den Positionen 2 und 4. `r` wird zuerst 2, dann 4. Antwort `4`: Die Methode liefert die letzte Position.
  ---
  b) `"abc"` hat Länge 3, das Ende 4 ist ungültig: `StringIndexOutOfBoundsException` mit `Range [1, 4) out of bounds for length 3`.
  ---
  c) Das Original liefert `true` nur, wenn beide Bedingungen gelten: `return x > 0 && y > 0;`. Die beiden anderen Fassungen sind `||` und scheitern an `x = 1`, `y = -1`.
```

```aufgabe
id: cq-pruef-quiz-rf
titel: Vier Aussagen zu Exceptions und Stacktraces
niveau: 3
punkte: 2
lernziel: 5
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen mit Teilpunkten), Inhalt neu
angabe: (Zeitrichtwert 4 Minuten) Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Ruft man auf dem leeren String `""` die Methode `length()` auf, entsteht eine `NullPointerException`.'
        richtig: false
        erklaerung: 'Der leere String ist ein echter String mit Länge 0. Eine `NullPointerException` entsteht nur bei `null`.'
      - text: '`Integer.parseInt("007")` liefert die Zahl 7.'
        richtig: true
        erklaerung: Führende Nullen sind erlaubt. Der String stellt eine ganze Zahl dar.
      - text: 'Steht im Stacktrace `at A.f(A.java:12)` direkt über `at A.main(A.java:30)`, dann hat `main` in Zeile 30 die Methode `f` aufgerufen.'
        richtig: true
        erklaerung: Jede Zeile ist der Aufrufer der Zeile darüber.
      - text: Eine Exception kann nur in `main` entstehen, weil nur `main` vom Programmstart ausgeführt wird.
        richtig: false
        erklaerung: Jede Methode kann eine Exception auslösen. Der Stacktrace zeigt dann, über welche Aufrufe sie erreicht wurde.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`""` und `null` sind verschiedene Dinge. Der leere String existiert, er hat nur keine Zeichen.'
hinweise:
  - Unterscheide `""` (ein String ohne Zeichen) und `null` (gar kein String).
  - Im Stacktrace steht der Aufrufer immer unter der aufgerufenen Methode.
loesung: |
  **Ansatz:** Jede Aussage mit den Regeln zu Exceptions und Stacktraces vergleichen.
  ---
  Aussage 1 falsch (`""` hat Länge 0, kein `null`). Aussage 2 richtig (`"007"` ist 7).
  ---
  Aussage 3 richtig (Aufrufer steht darunter). Aussage 4 falsch (jede Methode kann abbrechen). Ergebnis: falsch, richtig, richtig, falsch.
```

```aufgabe
id: cq-pruef-exception
titel: Warum stürzt zaehleDoppelte ab?
niveau: 3
punkte: 3
lernziel: 5
kompetenz: begruenden
quelle: Aufgabenblatt 4 WS 2023, Aufgabe 1 a (Fragetyp nachgebaut, String statt Array)
angabe: |
  (Zeitrichtwert: 10 Minuten) `zaehleDoppelte(s)` soll zählen, an wie vielen Stellen zwei gleiche Zeichen direkt hintereinander stehen. Für `"Kaffee"` erwartet man 2 (`ff` und `ee`). Das Programm bricht aber ab:

  ```java
  public class Doppelt {
      public static int zaehleDoppelte(String s) {
          int anzahl = 0;
          for (int i = 0; i < s.length(); i++) {
              if (s.charAt(i) == s.charAt(i + 1)) {
                  anzahl++;
              }
          }
          return anzahl;
      }

      public static void main(String[] args) {
          System.out.println(zaehleDoppelte("Kaffee"));
      }
  }
  ```

  ```
  Exception in thread "main" java.lang.StringIndexOutOfBoundsException: Index 6 out of bounds for length 6
  	...
  	at Doppelt.zaehleDoppelte(Doppelt.java:5)
  	at Doppelt.main(Doppelt.java:13)
  ```

  **a)** (1 Punkt) Erkläre, warum es zu der Exception kommt.

  **b)** (2 Punkte) Korrigiere die Methode, sodass sie keine Exception mehr wirft und richtig zählt.
teile:
  - typ: text
    label: a) Erklärung
    muster: |
      In Zeile 5 wird `s.charAt(i + 1)` gelesen. Die Schleife läuft bis `i = s.length() - 1`, also bei
      `"Kaffee"` bis `i = 5`. Dann ist `i + 1 = 6`, und Position 6 gibt es bei Länge 6 nicht. Genau das sagt
      die Meldung `Index 6 out of bounds for length 6`. Die Ursache steht in Zeile 4: Weil jedes Zeichen mit
      seinem Nachfolger verglichen wird, darf `i` nur bis `s.length() - 2` laufen.
  - typ: code
    label: b) Korrektur
    vorlage: |
      public class Doppelt {
          public static int zaehleDoppelte(String s) {
              int anzahl = 0;
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) == s.charAt(i + 1)) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    musterloesung: |
      public class Doppelt {
          public static int zaehleDoppelte(String s) {
              int anzahl = 0;
              for (int i = 0; i < s.length() - 1; i++) {
                  if (s.charAt(i) == s.charAt(i + 1)) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: 'zaehleDoppelte("Kaffee")', erwartet: "2" }
      - { aufruf: 'zaehleDoppelte("Mississippi")', erwartet: "3" }
      - { aufruf: 'zaehleDoppelte("a")', erwartet: "0", beschreibung: "ein Zeichen" }
      - { aufruf: 'zaehleDoppelte("")', erwartet: "0", beschreibung: "leerer String" }
      - { aufruf: 'zaehleDoppelte("aaa")', erwartet: "2", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Läuft die Schleife noch bis `i = s.length() - 1`? Dann greift `charAt(i + 1)` hinter das Ende." }
      - { wert: 4, meldung: "Beim leeren String ist `s.length() - 1` gleich -1. Mit `i < s.length() - 1` läuft die Schleife dann gar nicht, das ist richtig so." }
hinweise:
  - Die Meldung nennt Index 6 bei Länge 6. Welcher Ausdruck in Zeile 5 erreicht diesen Wert?
  - Jedes Zeichen wird mit seinem Nachfolger verglichen. Das letzte Zeichen hat keinen Nachfolger.
loesung: |
  **Ansatz:** Aus dem Stacktrace den Ort (Zeile 5) und den ungültigen Index (6) ablesen, dann rückwärts zur Ursache gehen.
  ---
  a) In Zeile 5 steht `s.charAt(i + 1)`. Für `i = 5` ist `i + 1 = 6`, bei Länge 6 ungültig. Die Ursache ist die Schleifengrenze in Zeile 4.
  ---
  b) Korrektur: `for (int i = 0; i < s.length() - 1; i++)`. Dann ist `i + 1` höchstens `s.length() - 1`.
  ---
  Probe: `"Kaffee"` liefert 2, `"Mississippi"` liefert 3 (`ss`, `ss`, `pp`), `"a"` und `""` liefern 0 ohne Exception.
```

```aufgabe
id: cq-pruef-ki-woerter
titel: KI-Code zum Wörterzählen reparieren
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: Format nach Aufgabenblatt 3 WS 2023, Aufgabe 5 (fehlerhaften KI-Code reparieren), Inhalt neu
angabe: |
  (Zeitrichtwert: 15 Minuten) Spezifikation: `zaehleWoerter(String text)` liefert die Anzahl der Wörter. Ein Wort ist eine Folge von Zeichen ohne Leerzeichen. Zwischen den Wörtern und am Anfang oder Ende dürfen beliebig viele Leerzeichen stehen. Von `String` sind nur `length` und `charAt` erlaubt. Vorbedingung: `text != null`.

  Die KI liefert:

  ```java
  public static int zaehleWoerter(String text) {
      int anzahl = 1;
      for (int i = 0; i < text.length(); i++) {
          if (text.charAt(i) == ' ') {
              anzahl++;
          }
      }
      return anzahl;
  }
  ```

  **a)** (1 Punkt) Was liefert der KI-Code für `"  EP1  ist  "` (je zwei Leerzeichen am Anfang, in der Mitte und am Ende)?

  **b)** (3 Punkte) Schreibe eine korrekte Fassung.
teile:
  - typ: zahl
    label: a) Ergebnis des KI-Codes
    loesung: "7"
    fehler:
      - wert: "2"
        meldung: Das wäre das richtige Ergebnis. Gefragt ist, was der KI-Code liefert. Er zählt die Leerzeichen und addiert 1.
      - wert: "6"
        meldung: '`anzahl` startet bei 1, nicht bei 0. Sechs Leerzeichen ergeben 7.'
  - typ: code
    label: b) Korrekte Fassung
    vorlage: |
      public class Woerter {
          public static int zaehleWoerter(String text) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Woerter {
          public static int zaehleWoerter(String text) {
              int anzahl = 0;
              for (int i = 0; i < text.length(); i++) {
                  boolean beginntHier = text.charAt(i) != ' ' && (i == 0 || text.charAt(i - 1) == ' ');
                  if (beginntHier) {
                      anzahl++;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: 'zaehleWoerter("Code lesen lohnt sich")', erwartet: "4" }
      - { aufruf: 'zaehleWoerter("")', erwartet: "0", beschreibung: "leerer Text" }
      - { aufruf: 'zaehleWoerter("   ")', erwartet: "0", beschreibung: "nur Leerzeichen" }
      - { aufruf: 'zaehleWoerter("  EP1  ist  ")', erwartet: "2", beschreibung: "Leerzeichen am Rand und doppelt" }
      - { aufruf: 'zaehleWoerter("Wort")', erwartet: "1" }
      - { aufruf: 'zaehleWoerter("a b  c   d")', erwartet: "4", versteckt: true }
    regeln: { erlaubteApi: ["String.length", "String.charAt"] }
    fehler:
      - { wert: 2, meldung: "Der leere Text enthält kein Wort. Startet dein Zähler bei 1?" }
      - { wert: 4, meldung: "Zähle nicht die Leerzeichen, sondern die Stellen, an denen ein Wort **beginnt**: ein Zeichen ohne Leerzeichen, vor dem ein Leerzeichen oder der Textanfang steht." }
      - { wert: erlaubteApi, meldung: "Erlaubt sind nur `length` und `charAt`. Methoden wie `split` oder `trim` sind verboten." }
hinweise:
  - Teste den KI-Code zuerst mit `""` und mit doppelten Leerzeichen. Was zählt er eigentlich?
  - 'Ein Wort beginnt an Position `i`, wenn dort kein Leerzeichen steht und entweder `i == 0` ist oder an Position `i - 1` ein Leerzeichen steht. Zähle diese Anfänge.'
loesung: |
  **Ansatz:** Den KI-Code mit Randfällen prüfen und dann eine Idee wählen, die für jede Anordnung von Leerzeichen funktioniert.
  ---
  a) Der Text enthält sechs Leerzeichen. Der KI-Code zählt sie und addiert 1: Ergebnis 7, richtig wäre 2. Auch `""` liefert 1 statt 0.
  ---
  Die KI zählt Leerzeichen. Das klappt nur bei genau einem Leerzeichen zwischen Wörtern. Besser: Wortanfänge zählen. Ein Wortanfang ist ein Zeichen ohne Leerzeichen, vor dem der Textanfang oder ein Leerzeichen steht.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < text.length(); i++) {
      boolean beginntHier = text.charAt(i) != ' ' && (i == 0 || text.charAt(i - 1) == ' ');
      if (beginntHier) {
          anzahl++;
      }
  }
  return anzahl;
  ```
  ---
  Probe: `"  EP1  ist  "` hat Wortanfänge bei `E` und `i`, Ergebnis 2. `""` und `"   "` liefern 0. Die Kurzschlussauswertung von `||` sorgt dafür, dass bei `i == 0` nie `charAt(-1)` gelesen wird. Ist der linke Teil `i == 0` schon wahr, wertet Java den rechten Teil gar nicht mehr aus.
```

```aufgabe
id: cq-pruef-median
titel: Den mittleren Wert debuggen
niveau: 3
punkte: 4
lernziel: 4
kompetenz: anwenden
quelle: Format nach Programmiertest (Methode mit vorgegebenem Kopf), Inhalt neu
angabe: |
  (Zeitrichtwert: 12 Minuten) `mitte(a, b, c)` soll den mittleren der drei Werte liefern, also den Wert, der nach dem Sortieren in der Mitte steht. Beispiele: `mitte(1, 2, 3)` liefert 2, `mitte(3, 1, 2)` liefert 2, `mitte(2, 2, 5)` liefert 2. Die vorhandene Fassung besteht die ersten beiden Beispiele, ist aber trotzdem falsch:

  ```java
  public static int mitte(int a, int b, int c) {
      if (a > b && a < c) {
          return a;
      }
      if (b > a && b < c) {
          return b;
      }
      return c;
  }
  ```

  Finde Gegenbeispiele und korrigiere die Methode. Der Methodenkopf bleibt unverändert, Hilfsmethoden sind nicht erlaubt.
teile:
  - typ: code
    vorlage: |
      public class Mitte {
          public static int mitte(int a, int b, int c) {
              if (a > b && a < c) {
                  return a;
              }
              if (b > a && b < c) {
                  return b;
              }
              return c;
          }
      }
    musterloesung: |
      public class Mitte {
          public static int mitte(int a, int b, int c) {
              if ((a >= b && a <= c) || (a <= b && a >= c)) {
                  return a;
              }
              if ((b >= a && b <= c) || (b <= a && b >= c)) {
                  return b;
              }
              return c;
          }
      }
    tests:
      - { aufruf: "mitte(1, 2, 3)", erwartet: "2" }
      - { aufruf: "mitte(3, 2, 1)", erwartet: "2", beschreibung: "absteigend" }
      - { aufruf: "mitte(3, 1, 2)", erwartet: "2" }
      - { aufruf: "mitte(2, 2, 5)", erwartet: "2", beschreibung: "zwei gleiche Werte" }
      - { aufruf: "mitte(5, 5, 5)", erwartet: "5", beschreibung: "alle gleich" }
      - { aufruf: "mitte(2, 9, 4)", erwartet: "4", versteckt: true }
      - { aufruf: "mitte(-1, -7, -3)", erwartet: "-3", versteckt: true }
    regeln: { keineHilfsmethoden: true }
    fehler:
      - { wert: 2, meldung: "Bei absteigender Reihenfolge `3, 2, 1` liegt `b` zwischen `c` und `a`. Prüfst du auch den Fall `b < a && b > c`?" }
      - { wert: 4, meldung: "Bei gleichen Werten helfen echte Vergleiche `>` und `<` nicht weiter. Verwende `>=` und `<=`." }
hinweise:
  - 'Spiele `mitte(3, 2, 1)` durch: Welche Bedingung müsste für `b = 2` wahr sein, und welche ist es?'
  - '`a` ist die Mitte, wenn `a` zwischen `b` und `c` liegt, in **einer der beiden** Richtungen und mit `>=` und `<=` für gleiche Werte.'
loesung: |
  **Ansatz:** Mit Randfällen Gegenbeispiele suchen: absteigende Reihenfolge und gleiche Werte.
  ---
  `mitte(3, 2, 1)`: Keine Bedingung trifft zu, also `return c`, Ergebnis 1 statt 2. `mitte(2, 2, 5)`: `2 > 2` ist falsch, also wieder `c`, Ergebnis 5 statt 2.
  ---
  Zwei Ursachen: Die Bedingungen prüfen nur die aufsteigende Richtung, und echte Vergleiche schließen gleiche Werte aus.
  ---
  Korrektur: `a` liegt zwischen `b` und `c`, wenn `(a >= b && a <= c) || (a <= b && a >= c)` gilt. Dasselbe für `b`. Sonst ist `c` die Mitte.
  ---
  Probe: `(3, 2, 1)` liefert 2, `(2, 2, 5)` liefert 2, `(5, 5, 5)` liefert 5, `(2, 9, 4)` liefert 4.
```

```aufgabe
id: cq-pruef-feedback
titel: Zusatzfragen im Feedbackgespräch
niveau: 3
punkte: 2
lernziel: 3
kompetenz: begruenden
quelle: Format nach den Zusatzfragen der Aufgabenblätter (Feedbackgespräch), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Du hast die Spaghetticode-Aufgabe abgegeben. Die Tutorin fragt:

  1. Was ist der Unterschied zwischen einem Refactoring und einer Fehlerkorrektur?
  2. Woran erkennst du, dass dein Umbau nichts kaputt gemacht hat?
  3. Warum ist eine Methode mit Parameter besser als zwei fast gleiche Methoden?
  4. Wie bist du vorgegangen, als dein Muster bei Breite 4 falsch war?

  Formuliere die Antworten so, wie du sie im Gespräch sagen würdest.
teile:
  - typ: text
    muster: |
      1. Ein Refactoring ändert den Aufbau des Codes, aber nicht sein Verhalten. Rückgabewerte, Ausgaben und
         Exceptions bleiben für jede Eingabe gleich. Eine Fehlerkorrektur ändert das Verhalten absichtlich,
         weil es vorher falsch war.
      2. Ich habe die Ausgabe des Originals notiert und mit der Ausgabe nach dem Umbau verglichen. Zusätzlich
         habe ich eine andere Breite getestet, damit keine feste Zahl übrig bleibt.
      3. Der Code steht nur einmal da. Eine Änderung mache ich an einer Stelle, und ich kann keine Kopie
         vergessen. Außerdem lässt sich die Methode mit jedem Wert aufrufen.
      4. Ich habe das Fehlerbild notiert, dann eine Hypothese aufgestellt, etwa „in der Schleife steht noch
         die feste 6“. Mit einer Kontrollausgabe oder dem Debugger habe ich sie geprüft und danach die Zahl
         durch eine Rechnung mit `breite` ersetzt. Am Ende habe ich alle Breiten noch einmal getestet.
hinweise:
  - Antworte in ganzen Sätzen und nenne bei jeder Frage den Fachbegriff, etwa Refactoring, Verhalten, Parameter, Hypothese.
  - Bei Frage 4 helfen die sechs Schritte des Debuggens.
loesung: |
  **Ansatz:** Jede Frage mit dem passenden Begriff aus diesem Kapitel beantworten und ein konkretes Beispiel nennen.
  ---
  1 und 2: Refactoring heißt gleiches Verhalten, geprüft durch den Vergleich der Ausgaben mit dem Original und mit einem weiteren Wert.
  ---
  3: Ein Parameter vermeidet doppelten Code. 4: Fehlerbild, Hypothese, Prüfung mit Kontrollausgabe, Korrektur, alle Tests wiederholen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Fremden Code liest man, indem man ihn mit kleinen Beispielen in einer
  Trace-Tabelle durchspielt und dann seinen Zweck in einem Satz beschreibt, mit allen nötigen Bedingungen.
  (2) Beim Umbau von Code, also beim Umbenennen, Auslagern in Methoden und Vereinfachen, muss das
  Verhalten gleich bleiben. Das prüft man mit Testfällen an den Grenzen und mit einem zweiten Wert. (3)
  Fehler sucht man systematisch: Fehlerbild, kleinste Eingabe, Hypothese, Prüfung mit Kontrollausgaben,
  Debugger oder Stacktrace, Korrektur der Ursache, alle Tests wiederholen. Ebenso gute Antworten sind das
  Lesen eines Stacktraces oder das Prüfen von KI-Code mit Gegenbeispielen.
```

:::zusammenfassung
1. **Code lesen** heißt: Kopf lesen, Rollen der Variablen bestimmen, mit einem kleinen Beispiel in einer Trace-Tabelle mitspielen, den Zweck in einem Satz formulieren und mit einem Randfall prüfen. Eine Zweckbeschreibung sagt, was herauskommt, nicht wie.
2. **Lesbarer Code** hat sprechende Namen nach den Konventionen (camelCase, Klassen groß, Konstanten mit `final` in Großbuchstaben), vier Leerzeichen Einrückung je Block, immer geschweifte Klammern und Kommentare für das Warum.
3. **Spaghetticode zerlegen:** Gleiche Blöcke werden Methoden, Unterschiede werden Parameter, feste Zahlen werden aus Parametern berechnet. Die Ausgabe muss danach genau dieselbe sein, getestet mit dem Originalwert und einem anderen Wert.
4. **Refactoring** ändert die Struktur, nicht das Verhalten. Typische Vereinfachungen sind `return bedingung;`, `&&` statt verschachtelter `if` und Gleiches aus beiden Zweigen herausziehen. Verneinungen formt man nach De Morgan um.
5. **Debuggen** ist ein Experiment: Fehlerbild, kleinste Eingabe, Hypothese, Prüfung mit Kontrollausgaben oder dem Debugger, Korrektur der Ursache, alle Tests wiederholen. Kontrollausgaben werden danach entfernt.
6. **Ein Stacktrace** nennt Art, Meldung und Ort einer Exception. Die erste `at`-Zeile mit der eigenen Klasse zeigt, wo es knallt. Die Ursache liegt oft eine Zeile darüber oder beim Aufrufer.
7. **Fremder und KI-Code** wird gegen die ganze Spezifikation geprüft: Beispiele, Randfälle, Vorbedingungen und erlaubte Methoden. Ein einziges Gegenbeispiel beweist einen Fehler. Korrigiert wird gezielt, nicht durch Herumprobieren.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse
die genannte Aufgabe noch einmal.

1. **Code nacherzählen statt seinen Zweck nennen.** Training: „Den Zweck einer Methode bestimmen“ und „Eine Schleife mit unbekanntem Ende“. Zu finden in [9.1 Code lesen](/lernen/ep1/codequalitaet/code-lesen-was-tut-dieses-programm).
2. **In der Trace-Tabelle einen Durchlauf zu viel eintragen,** weil die Bedingung erst nach dem Rechnen geprüft wird. Training: „Trace-Tabelle ausfüllen“. Zu finden in [9.1 Code lesen](/lernen/ep1/codequalitaet/code-lesen-was-tut-dieses-programm).
3. **Der Einrückung glauben statt den Klammern.** Training: „Was die Einrückung verspricht“. Zu finden in [9.2 Gute Namen, Einrückung und Kommentare](/lernen/ep1/codequalitaet/gute-namen-einrueckung-und-kommentare).
4. **Einen Parameter einführen, aber die feste Zahl in der Methode stehen lassen,** und nur mit dem Originalwert testen. Training: „Spaghetticode zerlegen und parametrisieren“. Zu finden in [9.3 Spaghetticode in Methoden zerlegen](/lernen/ep1/codequalitaet/spaghetticode-in-methoden-zerlegen).
5. **Nach dem Umbau eine zusätzliche Leerzeile ausgeben.** Training: „Ist die Ausgabe noch dieselbe?“. Zu finden in [9.3 Spaghetticode in Methoden zerlegen](/lernen/ep1/codequalitaet/spaghetticode-in-methoden-zerlegen).
6. **Beim Vereinfachen eine Grenze verschieben oder De Morgan falsch anwenden.** Training: „Eine Verneinung auflösen“ und „Wo hat der Umbau das Verhalten geändert?“. Zu finden in [9.4 Refactoring](/lernen/ep1/codequalitaet/refactoring-einfacher-schreiben-gleiches-verhalten).
7. **Die Reihenfolge von `if` und `else if` beim Umbau vertauschen.** Training: „Vorher und nachher vergleichen“. Zu finden in [9.4 Refactoring](/lernen/ep1/codequalitaet/refactoring-einfacher-schreiben-gleiches-verhalten).
8. **Herumprobieren statt eine Hypothese prüfen,** etwa `<` und `<=` blind vertauschen. Training: „Eine Summe, die zu klein ist“ und „Die kleinste falsche Eingabe finden“. Zu finden in [9.5 Debuggen](/lernen/ep1/codequalitaet/debuggen-fehler-systematisch-finden).
9. **Kontrollausgaben in der Abgabe vergessen.** Training: „Was zeigen die Kontrollausgaben?“. Zu finden in [9.5 Debuggen](/lernen/ep1/codequalitaet/debuggen-fehler-systematisch-finden).
10. **Im Stacktrace die `java.base/`-Zeilen lesen statt der eigenen Klasse, oder die gemeldete Zeile für die Ursache halten.** Training: „Einen Stacktrace Schritt für Schritt lesen“ und „Die Exception aus druckeZeichen beheben“. Zu finden in [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
11. **Eine Exception verstecken, statt die Ursache zu beheben.** Training: „Eine Vorbedingung, die jede Exception ausschließt“. Zu finden in [9.6 Exceptions und Stacktraces lesen](/lernen/ep1/codequalitaet/exceptions-und-stacktraces-lesen).
12. **KI-Code übernehmen, weil das Beispiel der Angabe stimmt, oder verbotene Methoden übersehen.** Training: „Ein Text wird zu früh gekürzt“ und „KI-Code ohne verbotene Methode“. Zu finden in [9.7 Fehler in fremdem und KI-Code finden](/lernen/ep1/codequalitaet/fehler-in-fremdem-und-ki-code-finden).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig,
**3** = sicher, auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich
bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Fremden Code lesen, mit einer Trace-Tabelle verfolgen und seinen Zweck beschreiben.
2. Code mit guten Namen, Klammern und Einrückung lesbar umschreiben.
3. Spaghetticode in Methoden zerlegen und parametrisieren, ohne die Ausgabe zu ändern.
4. Code vereinfachen und mit Grenzfällen prüfen, dass das Verhalten gleich bleibt.
5. Fehler einordnen und systematisch mit Hypothese, Kontrollausgaben und Debugger eingrenzen.
6. Stacktraces lesen und die Ursache einer Exception beheben.
7. Fehler in KI-Code mit Gegenbeispielen nachweisen und gezielt korrigieren.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber zu den Aufgabenblättern ein
**Feedbackgespräch**. Dort erklärst du deinen Code und beantwortest Zusatzfragen. Zu diesem Kapitel passen
Fragen wie „Wie hast du den Fehler gefunden?“ oder „Warum hast du diese Methode eingeführt?“. Formuliere zuerst
laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den
Kernpunkten.

```karten
- id: cq-karte-code-lesen
  frage: Wie gehst du vor, wenn du ein fremdes Codestück erklären sollst?
  antwort: |
    Ich lese zuerst den Methodenkopf: Was geht hinein, was kommt heraus? Dann bestimme ich die Rollen der
    Variablen, etwa Zähler, Summe oder Ergebnis-String. Danach spiele ich ein kleines Beispiel in einer
    Trace-Tabelle durch und prüfe die Bedingung vor jedem Durchlauf. Aus dem Muster formuliere ich den Zweck
    in einem Satz und prüfe ihn mit einem zweiten Beispiel, am besten einem Randfall.
  kernpunkte:
    - Kopf und Rollen der Variablen
    - Trace-Tabelle mit kleinem Beispiel
    - Zweck in einem Satz, mit Randfall prüfen
- id: cq-karte-zweck
  frage: Warum ist eine Nacherzählung des Codes keine gute Erklärung?
  antwort: |
    Eine Nacherzählung übersetzt nur jede Zeile in Worte, etwa „die Schleife läuft von 0 bis zur Länge“.
    Sie sagt nicht, wozu der Code da ist. Eine Zweckbeschreibung nennt das Ergebnis für jede erlaubte
    Eingabe, zum Beispiel „liefert die Anzahl der Wörter, wenn sie durch genau ein Leerzeichen getrennt
    sind“. Nur so kann jemand den Code verwenden, ohne ihn selbst zu lesen.
  kernpunkte:
    - Nacherzählung beschreibt das Wie
    - Zweck beschreibt das Was für jede Eingabe
    - Bedingungen gehören dazu
- id: cq-karte-namen
  frage: Welche Namenskonventionen gelten in Java, und prüft sie der Compiler?
  antwort: |
    Variablen und Methoden beginnen klein, jedes weitere Wort groß, das heißt camelCase. Klassen beginnen
    groß. Konstanten mit `final` schreibt man ganz groß mit Unterstrichen, etwa `MAX_BREITE`. Methoden heißen
    nach Verben, `boolean`-Methoden oft mit `ist` oder `hat`. Der Compiler prüft das nicht. Es sind
    Vereinbarungen, damit jeder Leser sofort erkennt, worum es sich handelt.
  kernpunkte:
    - camelCase für Variablen und Methoden
    - Klassen groß, Konstanten GROSS_MIT_UNTERSTRICH
    - Konventionen prüft der Compiler nicht
- id: cq-karte-klammern
  frage: Warum soll man auch bei nur einer Anweisung geschweifte Klammern setzen? Nenne ein Gegenbeispiel.
  antwort: |
    Ohne Klammern gehört nur die erste Anweisung zum `if` oder zur Schleife, egal wie eingerückt ist. Schreibt
    man unter `if (x > 0)` zwei eingerückte Zeilen, läuft die zweite trotzdem immer. Das sieht richtig aus und
    ist falsch. Mit Klammern stimmt das, was man sieht, mit dem überein, was Java ausführt.
  kernpunkte:
    - ohne Klammern nur eine Anweisung
    - Einrückung täuscht
    - Gegenbeispiel mit zweiter eingerückter Zeile
- id: cq-karte-spaghetti
  frage: Wie zerlegst du Spaghetticode in Methoden?
  antwort: |
    Zuerst notiere ich die Ausgabe des Originals, denn sie ist der Maßstab. Dann suche ich gleiche Blöcke,
    die werden eine Methode. Bei ähnlichen Blöcken wird jeder Unterschied ein Parameter. Feste Zahlen, die von
    der Größe abhängen, ersetze ich durch Rechnungen mit dem Parameter, etwa `breite / 2`. Danach ersetze ich
    die Blöcke durch Aufrufe und vergleiche die Ausgabe mit dem Original.
  kernpunkte:
    - Originalausgabe als Maßstab
    - gleiche Blöcke zu Methoden, Unterschiede zu Parametern
    - feste Zahlen aus Parametern berechnen
- id: cq-karte-andere-breite
  frage: Warum reicht es nicht, den parametrisierten Code nur mit der Breite des Originals zu testen?
  antwort: |
    Wenn in einer Methode noch die feste Zahl des Originals steht, liefert sie für genau diese Breite das
    richtige Ergebnis. Der Fehler fällt dann nicht auf. Erst ein Test mit einer anderen Breite zeigt, ob
    wirklich jede Zahl vom Parameter abhängt. Darum teste ich zusätzlich mit einem kleinen und einem großen Wert.
  kernpunkte:
    - feste Zahl fällt beim Originalwert nicht auf
    - zweiten Wert testen
    - jede Zahl muss vom Parameter abhängen
- id: cq-karte-refactoring
  frage: Was ist ein Refactoring, und wie unterscheidet es sich von einer Fehlerkorrektur?
  antwort: |
    Ein Refactoring verbessert die Struktur des Codes, etwa durch Umbenennen, Auslagern in Methoden oder
    Vereinfachen von Bedingungen. Das Verhalten bleibt gleich: dieselben Rückgabewerte, Ausgaben und
    Exceptions für jede Eingabe. Eine Fehlerkorrektur ändert das Verhalten absichtlich. Man trennt beides
    und prüft ein Refactoring mit Testfällen an den Grenzen jeder Bedingung.
  kernpunkte:
    - Struktur besser, Verhalten gleich
    - Fehlerkorrektur ändert Verhalten
    - mit Grenzfällen prüfen
- id: cq-karte-demorgan
  frage: Wie verneint man eine Bedingung `a > 5 && b > 5` richtig? Welchen Zusammenhang gibt es zu Kapitel 3?
  antwort: |
    Nach De Morgan verneint man jeden Teil und macht aus `&&` ein `||`. Aus `!(a > 5 && b > 5)` wird also
    `a <= 5 || b <= 5`. Wer nur die Vergleiche umdreht und `&&` stehen lässt, ändert das Verhalten, zum
    Beispiel für `a = 3` und `b = 8`. Die Operatoren `&&`, `||` und `!` stammen aus Kapitel 3. Beim
    Refactoring braucht man genau diese Regeln, um Bedingungen umzuformen.
  kernpunkte:
    - jeden Teil verneinen
    - && wird zu ||
    - Gegenbeispiel prüfen
- id: cq-karte-debuggen
  frage: Wie gehst du vor, wenn ein Programm ein falsches Ergebnis liefert?
  antwort: |
    Ich beschreibe zuerst das Fehlerbild mit Eingabe, erwartetem und tatsächlichem Ergebnis. Dann suche ich
    die kleinste Eingabe, die den Fehler noch zeigt. Daraus leite ich eine Hypothese ab, welche Zeile schuld
    sein könnte, und prüfe sie mit Kontrollausgaben oder dem Debugger. Ist sie bestätigt, behebe ich die
    Ursache und wiederhole alle Testfälle. Zum Schluss lösche ich die Kontrollausgaben.
  kernpunkte:
    - Fehlerbild und kleinste Eingabe
    - Hypothese gezielt prüfen
    - Ursache beheben, alle Tests wiederholen
- id: cq-karte-debugger
  frage: Was machen Haltepunkt, Step Over und Step Into im Debugger?
  antwort: |
    Ein Haltepunkt hält das Programm vor der markierten Zeile an, wenn man es im Debug-Modus startet. Dann
    sieht man die aktuellen Werte aller Variablen. Step Over führt die aktuelle Zeile aus, auch einen
    Methodenaufruf darin als Ganzes. Step Into springt in die aufgerufene Methode hinein. Resume läuft bis
    zum nächsten Haltepunkt weiter.
  kernpunkte:
    - Haltepunkt hält vor der Zeile an
    - Step Over führt die Zeile aus
    - Step Into springt in die Methode
- id: cq-karte-stacktrace
  frage: Wie liest du einen Stacktrace?
  antwort: |
    Die erste Zeile nennt die Art der Exception und die Meldung, etwa `StringIndexOutOfBoundsException:
    Index 4 out of bounds for length 4`. Darunter stehen `at`-Zeilen. Ich suche die erste Zeile mit meiner
    eigenen Klasse, dort stehen Methode und Zeilennummer. Die Zeilen darunter zeigen, wer diese Methode
    aufgerufen hat, bis hinunter zu `main`. Zeilen mit `java.base/` gehören zu Java selbst.
  kernpunkte:
    - erste Zeile Art und Meldung
    - erste at-Zeile der eigenen Klasse
    - darunter die Aufrufer bis main
- id: cq-karte-ursache
  frage: Warum ist die Zeile im Stacktrace nicht immer die Zeile, die du ändern musst? Was hat das mit Vorbedingungen aus Kapitel 6 zu tun?
  antwort: |
    Der Stacktrace zeigt, wo der falsche Wert Schaden anrichtet. Entstanden ist er oft woanders, zum
    Beispiel in einer Schleifenbedingung darüber oder beim Aufrufer, der eine 0 übergibt. Vorbedingungen aus
    Kapitel 6 legen fest, welche Werte eine Methode bekommen darf. Verletzt der Aufrufer sie, liegt die
    Ursache beim Aufrufer, und man repariert dort, statt die Exception in der Methode zu verstecken.
  kernpunkte:
    - Ort des Abbruchs ist nicht immer die Ursache
    - Vorbedingung legt erlaubte Werte fest
    - beim Verursacher korrigieren
- id: cq-karte-ki
  frage: Ein KI-Werkzeug hat deine Methode geschrieben. Wie prüfst du sie?
  antwort: |
    Ich sammle die ganze Spezifikation: Beschreibung, Beispiele, Vorbedingungen und Einschränkungen. Dann
    teste ich die Beispiele und ergänze Randfälle wie leere Strings, ein einziges Zeichen, Grenzen und
    ungerade Werte. Ich prüfe jede verwendete Methode gegen die Liste der erlaubten Methoden. Finde ich ein
    Gegenbeispiel, suche ich die fehlerhafte Zeile und korrigiere sie gezielt.
  kernpunkte:
    - ganze Spezifikation sammeln
    - Randfälle testen
    - erlaubte Methoden prüfen
- id: cq-karte-gegenbeispiel
  frage: Was ist ein Gegenbeispiel, und warum genügt ein einziges? Wo hast du das schon in Kapitel 6 gebraucht?
  antwort: |
    Ein Gegenbeispiel ist eine erlaubte Eingabe, für die der Code nicht das liefert, was die Spezifikation
    verlangt. Weil die Spezifikation für jede erlaubte Eingabe gilt, beweist schon eine Ausnahme, dass der
    Code falsch ist. Umgekehrt beweisen viele richtige Beispiele nicht, dass er richtig ist. In Kapitel 6
    habe ich so geprüft, ob eine Vorbedingung jede Exception ausschließt oder eine Nachbedingung immer stimmt.
  kernpunkte:
    - erlaubte Eingabe mit falschem Ergebnis
    - eines genügt für falsch
    - viele Beispiele beweisen nicht richtig
- id: cq-karte-null
  frage: Was ist der Unterschied zwischen dem leeren String `""` und `null`?
  antwort: |
    Der leere String `""` ist ein echter String ohne Zeichen. `"".length()` liefert 0, und man kann jede
    String-Methode aufrufen. `null` heißt dagegen, dass gar kein String da ist. Ruft man eine Methode auf
    `null` auf, bricht das Programm mit einer `NullPointerException` ab. Deshalb steht in den Angaben oft die
    Vorbedingung `text != null`.
  kernpunkte:
    - leerer String hat Länge 0
    - null ist gar kein String
    - Methode auf null wirft NullPointerException
```
