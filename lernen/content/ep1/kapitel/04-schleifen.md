---
nummer: 4
titel: Schleifen auf Zahlen und Strings
kurz: while, for und do-while Schritt für Schritt mit Trace-Tabellen, Intervallgrenzen, Summen und Zähler, Trennzeichen ohne Zaunpfahlfehler, Strings vorwärts und rückwärts, indexOf selbst bauen und verschachtelte Schleifen.
teil: grundlagen
stunden: 5
pruefungsgewicht: 3
voraussetzungen: [werkzeuge, ausdruecke, verzweigungen]
lernziele:
  - die Ausführung einer while-Schleife Durchlauf für Durchlauf in einer Trace-Tabelle verfolgen und ihre Ausgabe exakt angeben
  - eine for-Schleife für ein vorgegebenes offenes oder geschlossenes Intervall mit beliebiger Schrittweite schreiben und die Zahl der Durchläufe bestimmen
  - Summen, Anzahlen, Produkte und Ergebnis-Strings mit einer akkumulierenden Schleife und dem richtigen Startwert berechnen
  - Werte mit Trennzeichen so ausgeben, dass kein Trennzeichen fehlt oder überzählig ist, auch wenn nur gefilterte Werte ausgegeben werden
  - einen String mit length() und charAt() vorwärts, rückwärts und in Schritten durchlaufen sowie Zeichen nach Bereichen filtern und zählen
  - eine Suchschleife mit Abbruchbedingung schreiben, die indexOf ohne diese Methode nachbaut und -1 liefert, wenn nichts gefunden wird
  - while, do-while und for unterscheiden, ineinander umformen und für eine Aufgabe die passende Schleifenart begründet wählen
  - bei verschachtelten Schleifen die Ausgabe und die Zahl der Durchläufe bestimmen und die Wirkung einer geänderten Schleifenbedingung vorhersagen
---

**Worum geht es?** Bisher läuft jedes deiner Programme von oben nach unten durch. Jede Zeile wird
höchstens einmal ausgeführt. Mit einer **Schleife** sagst du dem Computer, dass er Zeilen wiederholen soll,
solange eine Bedingung gilt. Damit gibst du mit drei Zeilen Code tausend Zahlen aus, addierst alle
Vielfachen von 12 bis 96 oder gehst einen Text Zeichen für Zeichen durch. Schleifen sind nach
Variablen und Verzweigungen der dritte Grundbaustein jedes Programms.

**Was kommt in der Prüfung?** Schleifen kommen in allen Prüfungsteilen von EP1 vor:

- **Aufgabenblatt 1** (WS 2023 als Vorlage): Aufgabe 1 verlangt fünf `for`-Schleifen: mit Intervallen, mit Trennzeichen, mit Zeichen aus ihrem Zeichencode und mit einem Satz, in dem Buchstaben gezählt werden. Zeichencodes (ASCII-Tabelle) erklärt [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char). Aufgabe 2 verlangt vier `while`-Schleifen, drei davon auf Strings und eine auf Zahlen. Die Ausgabe muss **zeichengenau** stimmen.
- **Quiz:** Vorbild sind die Online-Tests auf TUWEL, der Lernplattform der TU Wien. In den beiden ersten Tests von 2021 (Vorbereitungstest und Test vom 26.11.2021) drehten sich jeweils vier von zehn Fragen um Schleifen. Du wählst die Schleife, die eine bestimmte Ausgabe erzeugt. Du erkennst das Fragment, das eine Summe richtig berechnet. Du sagst vorher, was eine geänderte Bedingung bewirkt.
- **Test am Rechner:** Bisher bestand der Programmiertest aus zwei Aufgaben mit zweidimensionalen Arrays und einer Rekursionsaufgabe. Die Array-Aufgaben laufen mit Schleifen über die Arrays. Wer Schleifen sicher schreibt, hat dort den Kopf frei für das eigentliche Problem.
- **Feedbackgespräch:** Du musst jede Zeile deiner Schleife erklären können. Mögliche Fragen sind „Warum `<` und nicht `<=`?“ oder „Was passiert bei einem leeren String?“.

**So arbeitest du mit diesem Kapitel.** Schleifen versteht man nicht durch Lesen, sondern durch
**Mitspielen**. Wir verfolgen jede Schleife in einer **Trace-Tabelle** (englisch *trace*: Spur). Darin
steht in jeder Zeile, welchen Wert jede Variable nach einem Durchlauf hat. Mach diese Tabellen auf
Papier mit. Das ist am Anfang langsam, aber genau diese Technik brauchst du im Quiz, wo du keinen
Computer zum Ausprobieren hast.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Variablen, Zuweisungen und Operatoren** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen): `x = x + 1`, `x += 3`, `x++`, Ganzzahldivision `/` und Rest `%`.
- **Strings und Zeichen** aus [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals): `s.length()` liefert die Länge, `s.charAt(i)` das Zeichen an Position `i`. Ein `char` ist intern eine Zahl ([2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)).
- **Vergleiche und logische Operatoren** aus [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht): `<`, `<=`, `==`, `!=`, `&&` (und), `||` (oder), `!` (nicht). Dazu `if` und `else` aus [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge sicher beherrschst. Wenn eine Frage nicht
klappt, wiederhole zuerst den verlinkten Abschnitt. Alle Code-Ausschnitte stehen in der Methode `main`.
:::

```aufgabe
id: sl-ein-zuweisung
titel: Zuweisungen hintereinander
niveau: 1
art: check
angabe: |
  Welchen Wert hat `x` nach diesen drei Zeilen?
  ```java
  int x = 7;
  x += 3;
  x++;
  ```
  (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: zahl
    loesung: "7 + 3 + 1"
    fehler:
      - wert: "10"
        meldung: Du hast `x++` übersehen. `x++` erhöht `x` um genau 1, auch wenn es allein in einer Zeile steht.
      - wert: "4"
        meldung: '`x += 3` heißt „addiere 3 zu x“, also `x = x + 3`. Es setzt `x` nicht auf 3. Danach macht `x++` aus 10 dann 11.'
loesung: |
  `x += 3` ist die Kurzform von `x = x + 3`. Aus 7 wird 10.
  ---
  `x++` ist die Kurzform von `x = x + 1`. Aus 10 wird 11.
```

```aufgabe
id: sl-ein-division
titel: Ganzzahldivision und Rest
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      System.out.println(17 / 5);
      System.out.println(17 % 5);
      System.out.println(20 % 5);
    loesung: |
      3
      2
      0
    fehler:
      - wert: "3.4\n2\n0"
        meldung: Zwei `int`-Werte ergeben bei `/` wieder ein `int`. Der Nachkommaanteil fällt weg, es wird nicht gerundet.
      - wert: "3\n3\n0"
        meldung: '`%` liefert den **Rest** der Division. 17 geteilt durch 5 ist 3 Rest 2, denn 3 · 5 = 15 und 17 − 15 = 2.'
loesung: |
  `17 / 5` ist Ganzzahldivision: 5 passt dreimal in 17, also `3`.
  ---
  `17 % 5` ist der Rest: 17 − 3 · 5 = 2. Und `20 % 5` ist `0`, weil 20 durch 5 teilbar ist. Genau diesen Test `zahl % k == 0` brauchst du für „ist durch k teilbar“.
```

```aufgabe
id: sl-ein-verkettung
titel: Plus mit Strings
niveau: 1
art: check
angabe: |
  Was gibt dieser Code aus? (Wiederholung: [2.6 Strings verketten](/lernen/ep1/ausdruecke/strings-verketten))
teile:
  - typ: ausgabe
    code: |
      int a = 2;
      int b = 3;
      System.out.println("Summe: " + a + b);
      System.out.println(a + b + " ist die Summe");
    loesung: |
      Summe: 23
      5 ist die Summe
    fehler:
      - wert: "Summe: 5\n5 ist die Summe"
        meldung: |
          Java rechnet `+` von links nach rechts. `"Summe: " + a` ist schon ein String. Danach hängt `+ b` die 3 nur noch als Text an.
loesung: |
  Erste Zeile: `"Summe: " + 2` ergibt den String `"Summe: 2"`. Dann `"Summe: 2" + 3` ergibt `"Summe: 23"`.
  ---
  Zweite Zeile: `2 + 3` sind zwei `int`, also `5`. Erst danach kommt der String: `"5 ist die Summe"`.
```

```aufgabe
id: sl-ein-char
titel: Zeichen sind Zahlen
niveau: 1
art: check
angabe: |
  Der Buchstabe `'a'` hat den Zeichencode 97. Was gibt der Code aus? (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char))
teile:
  - typ: ausgabe
    code: |
      char c = 'a';
      System.out.println(c + 1);
      System.out.println((char) (c + 2));
    loesung: |
      98
      c
    fehler:
      - wert: "b\nc"
        meldung: '`c + 1` ist eine Rechnung mit `char` und `int`. Das Ergebnis ist ein `int`, also die Zahl 98. Erst der Cast `(char)` macht wieder ein Zeichen daraus.'
loesung: |
  `c + 1`: Der `char` wird zur Zahl 97 umgewandelt, plus 1 ergibt `98`. Ausgegeben wird die Zahl.
  ---
  `(char) (c + 2)`: 97 + 2 = 99, und der Cast macht daraus das Zeichen mit Code 99, also `c`.
```

```aufgabe
id: sl-ein-bedingung
titel: Bedingungen auswerten
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: ausgabe
    code: |
      int a = 4;
      System.out.println(a > 2 && a % 2 == 1);
      System.out.println(a > 2 || a % 2 == 1);
      System.out.println(!(a <= 4));
    loesung: |
      false
      true
      false
    fehler:
      - wert: "true\ntrue\nfalse"
        meldung: '`&&` ist nur dann `true`, wenn **beide** Seiten stimmen. `a % 2 == 1` ist bei `a = 4` falsch, denn 4 ist gerade.'
loesung: |
  `a > 2` ist `true`, `a % 2 == 1` ist `false` (4 ist gerade). `true && false` ergibt `false`, `true || false` ergibt `true`.
  ---
  `a <= 4` ist `true`, und `!` dreht es um: `false`.
```

```aufgabe
id: sl-ein-string
titel: Länge und Zeichen eines Strings
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: ausgabe
    code: |
      String s = "Hallo";
      System.out.println(s.length());
      System.out.println(s.charAt(1));
      System.out.println(s.charAt(s.length() - 1));
    loesung: |
      5
      a
      o
    fehler:
      - wert: "5\nH\no"
        meldung: Die Positionen in einem String beginnen bei **0**. `charAt(0)` ist `H`, `charAt(1)` ist schon das zweite Zeichen.
loesung: |
  `"Hallo"` hat fünf Zeichen, also liefert `length()` die Zahl `5`.
  ---
  Die Positionen (Indizes) laufen von 0 bis 4. Index 1 ist `a`, der letzte Index `5 - 1 = 4` ist `o`.
```


## Die while-Schleife: wiederholen, solange eine Bedingung gilt

```aufgabe
id: sl-while-check-bedingung
titel: Ist die Bedingung wahr?
niveau: 1
art: check
angabe: |
  Es gilt `int n = 0;`. Welchen Wert hat der Ausdruck `n > 0`?
  (Vergleiche liefern `true` oder `false`, siehe [2.8 Vergleiche, boolean und die Klasse Math](/lernen/ep1/ausdruecke/vergleiche-boolean-und-die-klasse-math).)
teile:
  - typ: auswahl
    optionen: ['`true`', '`false`', '`0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`0 > 0` heißt „0 ist größer als 0“. Das stimmt nicht, denn 0 ist gleich 0.'
      - wert: 2
        meldung: Ein Vergleich liefert in Java nie eine Zahl, sondern immer einen Wahrheitswert vom Typ `boolean`.
loesung: |
  `n > 0` fragt: Ist `n` echt größer als 0?
  ---
  Bei `n = 0` ist das falsch. Der Ausdruck hat den Wert `false`.
```

Stell dir vor, du sollst die Zahlen 3, 2, 1 und danach „Los!“ ausgeben. Mit dem, was du bisher
kennst, schreibst du vier Zeilen `System.out.println(...)`. Bei einem Countdown ab 1000 wären es
1001 Zeilen. Das ist mühsam, und jede Zeile ist eine Gelegenheit für einen Tippfehler.

Die Lösung ist eine **Schleife**. Eine Schleife ist ein Programmteil, der eine Gruppe von Anweisungen
mehrmals ausführt. Die einfachste Schleife in Java heißt `while`. Das englische Wort *while* bedeutet
„solange“. Die Schleife liest sich also: „**Solange** die Bedingung gilt, führe den Block aus.“

:::definition[while-Schleife]
Eine **while-Schleife** hat die Form

```java
while (Bedingung) {
    Anweisungen
}
```

- `while` ist ein **Schlüsselwort**, also ein Wort, das Java selbst reserviert hat.
- In den runden Klammern `( )` steht die **Bedingung**. Sie muss einen Wert vom Typ `boolean` haben, also `true` oder `false`.
- Die geschweiften Klammern `{ }` umschließen den **Schleifenrumpf**: die Anweisungen, die wiederholt werden.
- Ein einzelnes Ausführen des Rumpfs heißt **Durchlauf** oder **Iteration** (lateinisch *iterare*: wiederholen).

Ablauf: (1) Java prüft die Bedingung. (2) Ist sie `true`, wird der Rumpf einmal ausgeführt, danach geht es zurück zu (1). (3) Ist sie `false`, springt Java hinter die schließende Klammer `}` und macht dort weiter.
:::

Wichtig ist die Reihenfolge: Die Bedingung wird **vor** jedem Durchlauf geprüft. Ist sie schon beim
ersten Mal `false`, läuft der Rumpf kein einziges Mal. Man nennt die `while`-Schleife deshalb auch
**kopfgesteuert**: Der Kopf (die Zeile mit `while`) entscheidet, bevor etwas passiert.

**Beispiel:** `while (n > 0) { ... }` ist eine Schleife. Sie wiederholt den Rumpf, solange `n` positiv ist.

**Nicht-Beispiel:** `if (n > 0) { ... }` sieht ähnlich aus, ist aber **keine** Schleife. Ein `if` prüft
die Bedingung genau einmal und führt seinen Block höchstens einmal aus. Erst das Wort `while` sorgt
für den Rücksprung zur Bedingung.

:::beispiel[Countdown von 3]
Wir gehen dieses Programm Zeile für Zeile durch.

```java
int n = 3;
while (n > 0) {
    System.out.println(n);
    n--;
}
System.out.println("Los!");
```

- Zeile 1 legt die Variable `n` an und gibt ihr den Wert 3. Diese Variable steuert die Schleife. Man nennt sie **Schleifenvariable**.
- Zeile 2 prüft `n > 0`, also `3 > 0`. Das ist `true`, also beginnt der erste Durchlauf.
- Zeile 3 gibt `3` aus. Zeile 4 verringert `n` um 1 (`n--` ist kurz für `n = n - 1`). Jetzt ist `n` gleich 2.
- Die Klammer `}` in Zeile 5 schickt Java zurück zu Zeile 2. Die Bedingung wird neu geprüft.

Die **Trace-Tabelle** zeigt alle Durchläufe. Jede Zeile hält fest, was nach diesem Schritt gilt.

|Schritt|Prüfung|Ergebnis|Ausgabe|`n` danach|
|---|---|---|---|---|
|Start|–|–|–|3|
|1|`3>0`|true|3|2|
|2|`2>0`|true|2|1|
|3|`1>0`|true|1|0|
|Ende|`0>0`|false|Los!|0|

Beim vierten Prüfen ist `0 > 0` falsch. Java verlässt die Schleife und führt Zeile 6 aus. Die Ausgabe ist
`3`, `2`, `1`, `Los!`, jeweils in einer eigenen Zeile. Der Rumpf lief genau dreimal.
:::

Beachte: Nach der Schleife ist `n` gleich 0, nicht 1. Die Schleife endet immer in dem Zustand, in dem
die Bedingung zum ersten Mal `false` ist. Diese Beobachtung hilft dir später bei vielen Aufgaben.

:::beispiel[Wie oft kann man halbieren?]
Dieses Programm stammt aus der EP1-Vorlesung. Es zählt, wie oft man 17 ganzzahlig halbieren kann,
bis 0 herauskommt.

```java
int n = 17;
int count = 0;
while (n >= 1) {
    n /= 2;
    count++;
}
System.out.println(count);
```

`n /= 2` ist die Kurzform von `n = n / 2`. Weil `n` ein `int` ist, ist das eine Ganzzahldivision:
`17 / 2` ergibt `8`, der Rest fällt weg. `count++` zählt die Durchläufe mit.

|Durchlauf|Prüfung `n>=1`|`n` danach|`count` danach|
|---|---|---|---|
|Start|–|17|0|
|1|`17>=1`|8|1|
|2|`8>=1`|4|2|
|3|`4>=1`|2|3|
|4|`2>=1`|1|4|
|5|`1>=1`|0|5|
|Ende|`0>=1`→false|0|5|

Das Programm gibt `5` aus. Hier sieht man den typischen Einsatz von `while`: Vorher weiß man nicht, wie
oft die Schleife läuft. Das hängt vom Startwert ab. Bei `n = 1000` wären es 10 Durchläufe.
:::

```aufgabe
id: sl-while-countdown
titel: Countdown in Dreierschritten
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int k = 10;
      while (k >= 4) {
          System.out.println(k);
          k -= 3;
      }
      System.out.println("Ende: " + k);
    loesung: |
      10
      7
      4
      Ende: 1
    fehler:
      - wert: "10\n7\nEnde: 4"
        meldung: Die Bedingung lautet `k >= 4`, also „größer **oder gleich** 4“. Bei `k = 4` ist sie noch `true`, die 4 wird ausgegeben.
      - wert: "10\n7\n4\nEnde: 4"
        meldung: Nach der Ausgabe von 4 läuft noch `k -= 3`. Erst dann wird die Bedingung geprüft. Welchen Wert hat `k` also am Ende?
hinweise:
  - Leg eine Trace-Tabelle mit den Spalten „Prüfung“, „Ausgabe“ und „k danach“ an.
loesung: |
  **Ansatz:** Wir verfolgen `k`. `k -= 3` heißt `k = k - 3`.
  ---
  `10 >= 4`: Ausgabe 10, `k` wird 7. `7 >= 4`: Ausgabe 7, `k` wird 4. `4 >= 4`: Ausgabe 4, `k` wird 1.
  ---
  `1 >= 4` ist `false`, die Schleife endet. Danach wird `Ende: 1` ausgegeben. Der Rumpf lief dreimal.
```

### Endlosschleifen

Eine Schleife endet nur, wenn ihre Bedingung irgendwann `false` wird. Dafür muss der Rumpf etwas
verändern, das in der Bedingung vorkommt. Fehlt diese Veränderung, läuft die Schleife ewig. Man spricht
von einer **Endlosschleife**. Das Programm hängt dann, und in IntelliJ musst du es mit dem roten
Stopp-Knopf beenden.

:::achtung[Die Schleifenvariable wird nicht verändert]
Eine typische falsche Version des Countdowns:

```java
int n = 3;
while (n > 0) {
    System.out.println(n);
}
```

Hier fehlt `n--`. Die Bedingung `3 > 0` bleibt für immer `true`. Das Programm gibt endlos `3` aus.
Prüfe bei jeder Schleife: **Welche Zeile im Rumpf bringt die Bedingung näher an `false`?** Wenn du
keine findest, hast du eine Endlosschleife.
:::

:::achtung[Ein Strichpunkt zu viel]
Diese Version sieht fast richtig aus:

```java
int n = 3;
while (n > 0); {
    System.out.println(n);
    n--;
}
```

Der Strichpunkt `;` direkt nach `while (n > 0)` ist eine **leere Anweisung**. Java liest: „Solange
`n > 0`, tue nichts.“ Der Block in `{ }` gehört gar nicht mehr zur Schleife. Weil sich in der leeren
Anweisung `n` nie ändert, hängt das Programm, ohne etwas auszugeben. Nach `while (...)` steht nie ein
Strichpunkt, sondern direkt die Klammer `{`.
:::

Ein dritter Fehler wird schon vom Compiler gemeldet. Schreibst du `while (n = 0)` statt
`while (n == 0)`, dann ist `n = 0` eine Zuweisung mit dem Ergebnis `0`, also eine Zahl. Der Compiler
meldet `incompatible types: int cannot be converted to boolean`, weil in die Klammern ein Wahrheitswert
gehört.


```aufgabe
id: sl-while-trace-verdoppeln
titel: Verdoppeln bis über 20
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Fülle die Trace-Tabelle aus. Die erste Zeile (Zustand vor der Schleife) ist vorgegeben.
  ```java
  int x = 1;
  int schritte = 0;
  while (x < 20) {
      x = x * 2;
      schritte++;
  }
  ```
teile:
  - typ: trace
    spalten: [x, schritte]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4, nach Durchlauf 5]
    vorgabe: 1
    loesung: [[1, 0], [2, 1], [4, 2], [8, 3], [16, 4], [32, 5]]
    fehler:
      - wert: ["1", "0", "2", "1", "4", "2", "8", "3", "16", "4", "16", "4"]
        meldung: Bei `x = 16` ist `16 < 20` noch `true`. Es gibt also einen fünften Durchlauf, erst danach ist `x` zu groß.
hinweise:
  - Vor jedem Durchlauf wird `x < 20` geprüft. Rechne erst den neuen Wert von `x`, dann zähle `schritte` hoch.
loesung: |
  **Ansatz:** In jedem Durchlauf wird `x` verdoppelt und `schritte` um 1 erhöht.
  ---
  `x` durchläuft 1, 2, 4, 8, 16. Alle diese Werte sind kleiner als 20, also läuft der Rumpf noch einmal.
  ---
  Nach dem fünften Durchlauf ist `x = 32` und `schritte = 5`. Jetzt ist `32 < 20` falsch, und die Schleife endet.
```

```aufgabe
id: sl-while-wie-oft
titel: Wie oft läuft die Schleife?
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Welchen Wert hat `z` nach der Schleife?
  ```java
  int x = 100;
  int z = 0;
  while (x > 1) {
      x = x / 3;
      z++;
  }
  ```
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "5"
        meldung: Nach 4 Durchläufen ist `x = 1`. Die Bedingung `x > 1` ist dann schon `false`. Die Schleife läuft nicht weiter bis 0.
      - wert: "3"
        meldung: Prüfe den Schritt von 3 zu 1. Bei `x = 3` ist `3 > 1` noch `true`, also gibt es diesen Durchlauf noch.
hinweise:
  - '`x / 3` ist Ganzzahldivision. `100 / 3` ergibt 33.'
  - Schreib die Folge der Werte von `x` auf und zähle, wie oft geteilt wurde, bevor `x > 1` falsch wird.
loesung: |
  **Ansatz:** Trace-Tabelle mit `x` und `z`. Geteilt wird nur, solange `x > 1` gilt.
  ---
  100 → 33 → 11 → 3 → 1. Dabei steigt `z` auf 1, 2, 3, 4.
  ---
  Bei `x = 1` ist `1 > 1` falsch. Die Schleife endet mit `z = 4`.
```

```aufgabe
id: sl-while-terminiert
titel: Endet die Schleife?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile für jede Schleife, ob sie **nach endlich vielen Durchläufen endet**.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`int i = 0; while (i < 10) { i += 3; }` endet.'
        richtig: true
        erklaerung: '`i` wird 3, 6, 9, 12. Bei 12 ist `i < 10` falsch.'
      - text: '`int i = 10; while (i != 0) { i -= 3; }` endet.'
        richtig: false
        erklaerung: '`i` wird 7, 4, 1, −2, −5 … und springt über die 0 hinweg. `i != 0` bleibt immer `true`.'
      - text: '`int i = 5; while (i > 0); { i--; }` endet.'
        richtig: false
        erklaerung: 'Der Strichpunkt nach der Bedingung ist eine leere Anweisung. Sie verändert `i` nie.'
      - text: '`int i = 0; while (i < 0) { i--; }` endet.'
        richtig: true
        erklaerung: '`0 < 0` ist schon beim ersten Prüfen `false`. Der Rumpf läuft keinmal, die Schleife endet sofort.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Schau dir die zweite Schleife genau an. Trifft `i` beim Herunterzählen in Dreierschritten jemals genau die 0?'
      - wert: [r, f, r, r]
        meldung: 'Die dritte Schleife hat einen Strichpunkt direkt nach der Bedingung. Was steht dann eigentlich im Rumpf?'
hinweise:
  - Schreib für jede Schleife die ersten Werte der Schleifenvariable auf.
  - Achte auf `!=` als Bedingung und auf einen Strichpunkt direkt nach `while (...)`.
loesung: |
  **Ansatz:** Eine Schleife endet, wenn die Bedingung irgendwann `false` wird.
  ---
  Schleife 1 endet nach 4 Durchläufen. Schleife 4 läuft keinmal und endet sofort.
  ---
  Schleife 2 springt über die 0 hinweg (1, dann −2). Schleife 3 hat nur die leere Anweisung als Rumpf. Beide laufen endlos.
```

```aufgabe
id: sl-while-zeilen
titel: Was meldet der Compiler?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Studentin schreibt diesen Countdown. Welche Zeilen kompilieren nicht?
teile:
  - typ: zeilen
    code: |
      int n = 5
      while (n = 0) {
          System.out.println(n);
          n--;
      }
    loesung: [1, 2]
    fehler:
      - wert: [2]
        meldung: Schau auch auf das Ende von Zeile 1. Jede Anweisung, die keinen Block öffnet, endet mit einem Strichpunkt.
      - wert: [1]
        meldung: In Zeile 2 steht `n = 0`. Das ist eine Zuweisung mit dem Ergebnis 0, kein Vergleich. In die Klammern von `while` gehört ein `boolean`.
hinweise:
  - Prüfe jede Zeile auf zwei Dinge. Fehlt ein Strichpunkt? Hat die Bedingung den Typ `boolean`?
  - '`=` ist eine Zuweisung, `==` ein Vergleich.'
loesung: |
  **Ansatz:** Wir lesen den Code wie der Compiler, Zeile für Zeile.
  ---
  Zeile 1: Nach `int n = 5` fehlt der Strichpunkt. Der Compiler meldet `';' expected`.
  ---
  Zeile 2: `n = 0` ist eine Zuweisung vom Typ `int`. Meldung: `incompatible types: int cannot be converted to boolean`. Gemeint war wohl `n > 0`. Die Zeilen 3 bis 5 sind in Ordnung. Achtung beim Ausprobieren: `javac` meldet zuerst nur den fehlenden Strichpunkt. Die zweite Meldung erscheint erst, wenn du Zeile 1 korrigiert hast und neu kompilierst.
```

```aufgabe
id: sl-while-ungerade-summe
titel: Ungerade Zahlen aufsummieren
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int i = 1;
      int s = 0;
      while (s < 15) {
          s = s + i;
          i = i + 2;
      }
      System.out.println(i + " " + s);
    loesung: |
      9 16
    fehler:
      - wert: "7 9"
        meldung: Bei `s = 9` ist `9 < 15` noch `true`. Es folgt noch ein Durchlauf.
      - wert: "7 16"
        meldung: Im letzten Durchlauf wird nach `s = s + i` auch noch `i = i + 2` ausgeführt. Der Rumpf läuft immer bis zur Klammer `}` zu Ende.
hinweise:
  - Trace-Tabelle mit den Spalten `s` und `i`. Prüfe die Bedingung jeweils vor dem Durchlauf.
  - Die Bedingung prüft nur `s`. Aber auch `i` ändert sich in jedem Durchlauf.
gefuehrt:
  - text: Vor der Schleife ist `i = 1` und `s = 0`. Die Bedingung `0 < 15` ist wahr. Welchen Wert hat `s` nach dem ersten Durchlauf?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`s = 0 + 1 = 1`, danach wird `i` zu 3.'
  - text: Welchen Wert hat `s` nach dem zweiten Durchlauf?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '`s = 1 + 3 = 4`, danach `i = 5`.'
  - text: Nach dem dritten Durchlauf ist `s = 9` und `i = 7`. Wird die Schleife noch einmal ausgeführt?
    erklaerung: Ja, denn `9 < 15` ist wahr. Im vierten Durchlauf wird `s = 9 + 7 = 16` und `i = 9`.
  - text: Was gibt das Programm am Ende aus?
    teil: { typ: ausgabe, code: "int i = 1;\nint s = 0;\nwhile (s < 15) {\n    s = s + i;\n    i = i + 2;\n}\nSystem.out.println(i + \" \" + s);", loesung: "9 16" }
    erklaerung: '`16 < 15` ist falsch, die Schleife endet. Ausgegeben werden `i = 9` und `s = 16`, getrennt durch ein Leerzeichen.'
loesung: |
  **Ansatz:** Trace-Tabelle. `s` sammelt die ungeraden Zahlen 1, 3, 5, 7 …, `i` ist immer die nächste ungerade Zahl.
  ---
  Nach den Durchläufen: `s` = 1, 4, 9, 16 und `i` = 3, 5, 7, 9.
  ---
  Bei `s = 16` ist `16 < 15` falsch. Ausgabe `9 16`. Probe: 1 + 3 + 5 + 7 = 16.
```

```aufgabe
id: sl-while-collatz
titel: Schritte bis zur 1
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Die **Collatz-Regel** verändert eine positive ganze Zahl `n` so: Ist `n` gerade, wird `n` halbiert.
  Ist `n` ungerade, wird `n` zu `3 * n + 1`. Man wiederholt das, bis `n` gleich 1 ist.

  Beispiel: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1. Das sind **8 Schritte**.

  Ergänze `main` so, dass das Programm die Anzahl der Schritte bis zur 1 ausgibt. Die Startzahl wird
  schon eingelesen; wie das genau funktioniert, lernst du in
  [8.1 Eingabe mit Scanner: das erste Programm](/lernen/ep1/eingabe/eingabe-mit-scanner-das-erste-programm). Für
  `n = 1` sind es 0 Schritte.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Collatz {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO: Schritte bis zur 1 zählen und die Anzahl ausgeben
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Collatz {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              int schritte = 0;
              while (n != 1) {
                  if (n % 2 == 0) {
                      n = n / 2;
                  } else {
                      n = 3 * n + 1;
                  }
                  schritte++;
              }
              System.out.println(schritte);
          }
      }
    tests:
      - { stdin: "6", stdout: "8\n", beschreibung: "Start 6 ergibt 8 Schritte" }
      - { stdin: "1", stdout: "0\n", beschreibung: "Start 1: schon fertig, 0 Schritte" }
      - { stdin: "7", stdout: "16\n", beschreibung: "Start 7" }
      - { stdin: "27", stdout: "111\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bei n = 1 darf die Schleife keinmal laufen. Prüfst du die Bedingung vor dem ersten Schritt?" }
hinweise:
  - Du brauchst eine Zählvariable `schritte`, die vor der Schleife mit 0 beginnt.
  - 'Die Bedingung lautet „solange n nicht 1 ist“, also `n != 1`. Im Rumpf entscheidet ein `if` mit `n % 2 == 0` zwischen den beiden Regeln.'
loesung: |
  **Ansatz:** Wie oft die Regel angewendet wird, weiß man vorher nicht. Das spricht für eine `while`-Schleife mit Zähler.
  ---
  ```java
  int schritte = 0;
  while (n != 1) {
      if (n % 2 == 0) {
          n = n / 2;
      } else {
          n = 3 * n + 1;
      }
      schritte++;
  }
  System.out.println(schritte);
  ```
  ---
  Probe mit 6: Die Folge 6, 3, 10, 5, 16, 8, 4, 2, 1 hat 8 Pfeile, also 8 Durchläufe. Bei `n = 1` ist `1 != 1` sofort falsch, und es wird `0` ausgegeben.
```

```reflexion
frage: Warum muss im Rumpf jeder while-Schleife etwas stehen, das eine Variable aus der Bedingung verändert? Gibt es eine Ausnahme?
antwort: |
  Die Bedingung wird vor jedem Durchlauf neu ausgewertet. Wenn sich keine Variable darin ändert, liefert sie jedes Mal
  denselben Wert. War sie beim ersten Mal `true`, bleibt sie `true`, und die Schleife endet nie. Die Ausnahme ist eine
  Bedingung, die schon beim ersten Prüfen `false` ist. Dann läuft der Rumpf keinmal, und es spielt keine Rolle, was darin
  steht. Später lernst du noch `break` kennen, das eine Schleife von innen beendet. Auch dann muss aber irgendwann eine
  Bedingung erfüllt sein, damit `break` ausgeführt wird.
```


## Die for-Schleife und Intervallgrenzen

```aufgabe
id: sl-for-check-teilbar
titel: Teilbarkeit prüfen
niveau: 1
art: check
angabe: |
  Welcher Ausdruck ist genau dann `true`, wenn `z` durch 6 teilbar ist?
  (Der Rest-Operator `%` stammt aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).)
teile:
  - typ: auswahl
    optionen: ['`z % 6 == 0`', '`z / 6 == 0`', '`z % 6 == 6`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`z / 6 == 0` gilt nur für `z` von 0 bis 5, denn nur dann ergibt die Ganzzahldivision 0. Teilbarkeit erkennt man am **Rest**.'
      - wert: 2
        meldung: Der Rest bei Division durch 6 liegt immer zwischen 0 und 5. Er kann nie 6 sein.
loesung: |
  `z` ist durch 6 teilbar, wenn bei der Division kein Rest bleibt.
  ---
  Der Rest ist `z % 6`. Also lautet der Test `z % 6 == 0`. Beispiel: `42 % 6` ist 0, `40 % 6` ist 4.
```

Schau dir den Countdown aus [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt)
noch einmal an. Er hat drei Teile, die zur Schleifenvariable `n` gehören. Der **Start** `int n = 3;` steht
vor der Schleife. Die **Bedingung** `n > 0` steht im Kopf. Die **Veränderung** `n--;` steht am Ende des Rumpfs.
Diese drei Teile sind über den Code verstreut. Vergisst man einen, entsteht ein Fehler.

Die `for`-Schleife sammelt alle drei Teile in einer einzigen Zeile. Weil sie meist eine Variable
hoch- oder herunterzählt, nennt man sie auch **Zählschleife**. In den Aufgabenblättern brauchst du sie besonders oft.

:::definition[for-Schleife]
Eine **for-Schleife** hat die Form

```java
for (Initialisierung; Bedingung; Aktualisierung) {
    Anweisungen
}
```

In den runden Klammern stehen drei Teile, getrennt durch **Strichpunkte** (nicht durch Beistriche):

1. Die **Initialisierung** (zum Beispiel `int i = 0`) wird genau **einmal** ausgeführt, ganz am Anfang.
2. Die **Bedingung** (zum Beispiel `i < 5`) wird **vor jedem** Durchlauf geprüft. Ist sie `false`, endet die Schleife.
3. Die **Aktualisierung** (zum Beispiel `i++`) wird **nach jedem** Durchlauf ausgeführt, danach wird wieder die Bedingung geprüft.

Die Variable aus der Initialisierung heißt **Laufvariable** oder Zählvariable. Üblich sind die Namen `i`, `j` und `k`.
:::

```aufgabe
id: sl-for-reihenfolge
titel: Was passiert in welcher Reihenfolge?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Bringe die Schritte der Schleife `for (int i = 0; i < 2; i++) { System.out.print(i); }` in die
  Reihenfolge, in der Java sie ausführt.
teile:
  - typ: reihenfolge
    elemente:
      - '`int i = 0` ausführen'
      - '`0 < 2` prüfen: true'
      - '`0` ausgeben'
      - '`i++`: jetzt ist `i` gleich 1'
      - '`1 < 2` prüfen: true'
      - '`1` ausgeben'
      - '`i++`: jetzt ist `i` gleich 2'
      - '`2 < 2` prüfen: false, Schleife endet'
    fehler:
      - wert: [0, 2, 1, 3, 4, 5, 6, 7]
        meldung: Die Bedingung wird **vor** dem Rumpf geprüft, auch beim ersten Durchlauf.
hinweise:
  - Die Initialisierung kommt einmal. Danach wiederholt sich das Muster „prüfen, Rumpf, aktualisieren“.
loesung: |
  **Ansatz:** Initialisierung einmal, dann der Zyklus Bedingung, Rumpf, Aktualisierung.
  ---
  Zyklus für `i = 0` und für `i = 1`. Nach dem zweiten `i++` ist `i = 2`.
  ---
  Die dritte Prüfung `2 < 2` ist falsch. Die Ausgabe ist insgesamt `01`.
```

Die Reihenfolge ist also: Initialisierung, dann immer wieder Bedingung, Rumpf, Aktualisierung. Jede
`for`-Schleife lässt sich deshalb Wort für Wort in eine `while`-Schleife übersetzen:

```java
for (int i = 0; i < 5; i++) {          int i = 0;
    System.out.println(i);             while (i < 5) {
}                                          System.out.println(i);
                                           i++;
                                       }
```

Links steht die `for`-Schleife, rechts die gleichwertige `while`-Schleife. Beide geben 0, 1, 2, 3, 4 aus.
Es gibt einen kleinen Unterschied: Links ist `i` nur **innerhalb** der Schleife bekannt. Der Bereich, in
dem eine Variable benutzt werden kann, heißt ihr **Sichtbarkeitsbereich** (englisch *scope*).

**Beispiel:** Im Rumpf der `for`-Schleife darfst du `i` lesen und verwenden.

**Nicht-Beispiel:** Nach der schließenden Klammer `}` gibt es `i` nicht mehr. Die Zeile
`System.out.println(i);` nach der Schleife kompiliert nicht. Der Compiler meldet
`cannot find symbol ... variable i`. Brauchst du den Endwert, deklariere die Variable vor der Schleife.


:::beispiel[In Viererschritten von 3 bis 15]
```java
for (int i = 3; i <= 15; i += 4) {
    System.out.print(i + " ");
}
```

- `int i = 3` legt die Laufvariable an. Das geschieht genau einmal.
- `i <= 15` ist die Bedingung. Das Zeichen `<=` heißt „kleiner oder gleich“, also darf `i` auch genau 15 sein.
- `i += 4` erhöht `i` nach jedem Durchlauf um 4. Die Schrittweite muss also nicht 1 sein.
- `System.out.print` gibt aus, **ohne** danach eine neue Zeile zu beginnen. Deshalb hängen wir `" "` an, damit die Zahlen nicht zusammenkleben.

|Durchlauf|`i` beim Prüfen|`i<=15`|Ausgabe|
|---|---|---|---|
|1|3|true|`3 `|
|2|7|true|`7 `|
|3|11|true|`11 `|
|4|15|true|`15 `|
|Ende|19|false|–|

Die Ausgabe ist `3 7 11 15 ` (mit einem Leerzeichen am Ende). Die 15 ist dabei, weil `15 <= 15` wahr ist.
Wie man das Leerzeichen am Ende vermeidet, lernst du in [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
:::

```aufgabe
id: sl-for-abwaerts
titel: Abwärts in Fünferschritten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 20; i >= 5; i -= 5) {
          System.out.print(i + ";");
      }
      System.out.println();
    loesung: |
      20;15;10;5;
    fehler:
      - wert: "20;15;10;"
        meldung: Die Bedingung `i >= 5` ist bei `i = 5` noch wahr. Die 5 wird also ausgegeben.
      - wert: "20;15;10;5;0;"
        meldung: Nach der 5 wird `i` zu 0. Dann ist `0 >= 5` falsch, und die Schleife endet vor der Ausgabe.
hinweise:
  - '`i -= 5` verringert `i` nach jedem Durchlauf um 5.'
loesung: |
  **Ansatz:** Werte von `i` beim Prüfen auflisten: 20, 15, 10, 5, 0.
  ---
  Bei 20, 15, 10 und 5 ist `i >= 5` wahr, bei 0 falsch. Ausgegeben wird `20;15;10;5;`, danach beendet `println()` die Zeile.
```

### Intervalle in Schleifengrenzen übersetzen

Die Aufgabenblätter in EP1 beschreiben Zahlenbereiche gern in der **Intervallschreibweise** aus der
Mathematik. Eine eckige Klammer, die zur Zahl hin zeigt, heißt „diese Zahl gehört dazu“. Eine Klammer,
die von der Zahl weg zeigt, heißt „diese Zahl gehört nicht dazu“.

- `[5, 30]` heißt: alle ganzen Zahlen von 5 bis 30, **beide** Grenzen gehören dazu (geschlossenes Intervall).
- `]12, 96]` heißt: von 12 bis 96, aber **ohne** die 12. Die 96 gehört dazu.
- `[5, 30[` heißt: mit 5, aber ohne 30.
- `]20, 60[` heißt: beide Grenzen gehören **nicht** dazu (offenes Intervall).

So übersetzt du ein Intervall von `a` bis `b` in eine `for`-Schleife mit Schrittweite 1:

|Intervall|Startwert|Bedingung|
|---|---|---|
|`[a,b]`|`i = a`|`i <= b`|
|`]a,b]`|`i = a + 1`|`i <= b`|
|`[a,b[`|`i = a`|`i < b`|
|`]a,b[`|`i = a + 1`|`i < b`|

Die linke Grenze bestimmt den Startwert, die rechte Grenze bestimmt das Vergleichszeichen. Daraus folgt
auch die **Zahl der Durchläufe**. Die Schleife `for (int i = a; i < b; i++)` läuft genau `b − a` Mal
(vorausgesetzt, `b` ist nicht kleiner als `a`; sonst läuft sie keinmal).
Mit `i <= b` ist es einmal mehr, also `b − a + 1` Mal. Beispiel: `for (int i = 1; i <= 10; i++)` läuft
`10 − 1 + 1 = 10` Mal.

:::beispiel[Vielfache von 6 zwischen 12 und 42, ohne die Grenzen]
Gesucht sind alle durch 6 teilbaren Zahlen zwischen 12 und 42, ohne die beiden Grenzen. Es gibt zwei Wege.

**Weg A: alle Zahlen prüfen.** Wir laufen jede Zahl im Intervall ab und geben nur die passenden aus.

```java
for (int i = 13; i < 42; i++) {
    if (i % 6 == 0) {
        System.out.print(i + " ");
    }
}
```

Der Startwert ist `13`, weil die 12 nicht dazugehört. Die Bedingung ist `i < 42`, weil die 42 nicht
dazugehört. Das `if` lässt nur Zahlen ohne Rest durch: 18, 24, 30, 36.

**Weg B: direkt in Sechserschritten.** Die erste passende Zahl ist 18. Ab dort springen wir um 6 weiter.

```java
for (int i = 18; i < 42; i += 6) {
    System.out.print(i + " ");
}
```

Beide Wege geben `18 24 30 36 ` aus. Weg B läuft nur viermal statt 29-mal. Dafür musst du die erste passende
Zahl selbst ausrechnen, und dabei passieren leicht Fehler. In Aufgabenblättern ist Weg A meist die sicherere
Wahl, weil er direkt der Angabe folgt.
:::

:::merke[Intervall in eine for-Schleife übersetzen]
1. Linke Grenze: eckige Klammer nach innen (`[a`) heißt Start bei `a`, nach außen (`]a`) heißt Start bei `a + 1`.
2. Rechte Grenze: `b]` heißt Bedingung `i <= b`, `b[` heißt Bedingung `i < b`.
3. Soll nur ein Teil der Zahlen ausgegeben werden (zum Beispiel „teilbar durch 6“), prüfe ihn mit `if` im Rumpf.
4. Kontrolliere den ersten und den letzten Durchlauf von Hand.
:::

```aufgabe
id: sl-for-intervall-luecken
titel: Das Intervall ]15, 40]
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass die Schleife jede ganze Zahl im Intervall `]15, 40]` genau einmal ausgibt.
teile:
  - typ: lueckentext
    code: |
      for (int i = ___; ___; i++) {
          System.out.println(i);
      }
    luecken: [["16", "15 + 1", "15+1"], ["i <= 40", "i < 41", "40 >= i"]]
    fehler:
      - wert: ["15", "i <= 40"]
        meldung: Die Klammer `]` vor der 15 zeigt von der 15 weg. Die 15 gehört **nicht** dazu, die erste Zahl ist 16.
      - wert: ["16", "i < 40"]
        meldung: Die Klammer `]` nach der 40 zeigt zur 40 hin. Die 40 gehört dazu, also braucht die Bedingung `<=`.
hinweise:
  - Lies die beiden Klammern einzeln. Welche zeigt zur Zahl hin, welche von ihr weg?
  - Linke Grenze bestimmt den Startwert, rechte Grenze das Vergleichszeichen.
loesung: |
  **Ansatz:** Linke Grenze `]15`: 15 ausgeschlossen. Rechte Grenze `40]`: 40 eingeschlossen.
  ---
  Start bei `16`. Bedingung `i <= 40` (gleichwertig ist `i < 41`).
  ---
  Probe: Erster Durchlauf mit 16, letzter mit 40. Anzahl 40 − 16 + 1 = 25 Zahlen.
```

:::achtung[Eine Grenze verschoben]
Aufgabe: Addiere alle Vielfachen von 12 aus dem Intervall `]12, 96]`. Eine typische falsche Lösung:

```java
int summe = 0;
for (int i = 12; i < 96; i++) {
    if (i % 12 == 0) {
        summe += i;
    }
}
```

Hier sind **beide** Grenzen falsch herum. Die 12 wird mitgezählt, obwohl `]12` sie ausschließt. Die 96 fehlt,
obwohl `96]` sie einschließt. Das Ergebnis ist 12 + 24 + … + 84 = 336 statt richtig 24 + 36 + … + 96 = 420.
Richtig ist `for (int i = 13; i <= 96; i++)`. Prüfe bei jeder Intervallaufgabe ausdrücklich: Wird der erste
Wert ausgegeben? Wird der letzte Wert ausgegeben?
:::

:::achtung[Strichpunkt nach dem Schleifenkopf]
```java
int summe = 0;
for (int i = 1; i <= 3; i++); {
    summe += 10;
}
System.out.println(summe);
```

Erwartet wird 30, ausgegeben wird `10`. Der Strichpunkt nach `for (...)` ist der ganze Rumpf: eine leere
Anweisung. Die Schleife läuft dreimal und tut nichts. Danach wird der Block `{ summe += 10; }` genau einmal
ausgeführt. Würde der Block `i` verwenden, käme sogar ein Compilerfehler, weil `i` dort nicht mehr sichtbar ist.
:::


```aufgabe
id: sl-for-anzahl
titel: Durchläufe zählen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie oft wird der Rumpf von `for (int i = 7; i <= 31; i++) { ... }` ausgeführt?
teile:
  - typ: zahl
    loesung: "31 - 7 + 1"
    fehler:
      - wert: "24"
        meldung: '`31 − 7 = 24` zählt nur die Abstände. Bei `<=` gehören beide Enden dazu, also kommt 1 dazu. Wie bei einem Zaun: Zwischen 25 Pfählen liegen nur 24 Lücken.'
hinweise:
  - Bei `i <= b` mit Start `a` und Schrittweite 1 läuft die Schleife `b − a + 1` Mal.
loesung: |
  **Ansatz:** Startwert 7, letzter Wert 31, beide gehören dazu, Schrittweite 1.
  ---
  Anzahl = 31 − 7 + 1 = 25. Probe im Kleinen: `for (int i = 7; i <= 8; i++)` läuft für 7 und 8, also zweimal, und 8 − 7 + 1 = 2.
```


```aufgabe
id: sl-for-schrittweite
titel: Wie viele Zahlen in Siebenerschritten?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie viele Zahlen gibt diese Schleife aus, und welche ist die letzte?
  ```java
  for (int i = 4; i < 50; i += 7) {
      System.out.println(i);
  }
  ```
teile:
  - typ: zahl
    label: Anzahl der Ausgaben
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: Zähle die Werte 4, 11, 18, 25, 32, 39, 46 noch einmal. Die 46 ist kleiner als 50, also wird sie noch ausgegeben.
      - wert: "46"
        meldung: Gefragt ist hier die **Anzahl** der Ausgaben, nicht der letzte Wert.
  - typ: zahl
    label: letzte ausgegebene Zahl
    loesung: "46"
    fehler:
      - wert: "53"
        meldung: 53 ist der Wert von `i`, bei dem die Bedingung `i < 50` zum ersten Mal falsch ist. Dieser Wert wird nicht mehr ausgegeben.
      - wert: "49"
        meldung: Die Schleife zählt nicht bis knapp unter 50, sondern springt in Siebenerschritten. 49 kommt in der Folge 4, 11, 18 … nicht vor.
hinweise:
  - Schreib die Werte von `i` auf, bis einer die Bedingung verletzt.
  - 'Alternativ rechnest du: Die größte erlaubte Zahl ist 49, denn `i < 50`. Vom Start 4 bis 49 ist der Abstand 45. Darin passen 45 / 7 = 6 ganze Siebenersprünge (Ganzzahldivision). Mit dem Startwert selbst sind das 7 Werte.'
gefuehrt:
  - text: Welchen Wert hat `i` im ersten Durchlauf?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Die Initialisierung setzt `i = 4`, und `4 < 50` ist wahr.
  - text: Welche Werte folgen, wenn `i` jeweils um 7 wächst?
    erklaerung: 11, 18, 25, 32, 39, 46, 53.
  - text: Welcher dieser Werte ist der erste, bei dem `i < 50` falsch ist?
    teil: { typ: zahl, loesung: "53" }
    erklaerung: 53 ist nicht kleiner als 50. Bei diesem Wert endet die Schleife ohne Ausgabe.
  - text: Wie viele Werte wurden also ausgegeben?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: 4, 11, 18, 25, 32, 39, 46 sind sieben Werte.
loesung: |
  **Ansatz:** Werte von `i` beim Prüfen auflisten: 4, 11, 18, 25, 32, 39, 46, 53.
  ---
  Die ersten sieben sind kleiner als 50 und werden ausgegeben. Bei 53 endet die Schleife.
  ---
  Ergebnis: 7 Ausgaben, die letzte ist 46. Probe: 4 + 6 · 7 = 46 und 46 + 7 = 53 ≥ 50.
```

```aufgabe
id: sl-for-welche-schleife
titel: Welche Schleife passt zur Ausgabe?
niveau: 2
lernziel: 1
kompetenz: verstehen
quelle: TUWEL-Test 1 WS2021, Frage 4 (Stil nachgebaut)
angabe: |
  Welche Schleife erzeugt genau die Ausgabe `5 8 11 14 ` (mit Leerzeichen nach jeder Zahl)?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 5; i <= 14; i += 3) { System.out.print(i + " "); }`'
      - '`for (int i = 5; i < 14; i += 3) { System.out.print(i + " "); }`'
      - '`for (int i = 2; i <= 14; i += 3) { System.out.print((i + 3) + " "); }`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei `i = 14` ist `14 < 14` falsch. Diese Schleife hört nach der 11 auf.
      - wert: 2
        meldung: 'Diese Schleife läuft für `i` = 2, 5, 8, 11, 14 und gibt jeweils `i + 3` aus. Das ergibt fünf Zahlen: 5 8 11 14 17.'
hinweise:
  - Prüfe bei jeder Schleife den ersten und den letzten Durchlauf.
  - Bei der dritten Schleife ist die ausgegebene Zahl nicht `i`, sondern `i + 3`.
loesung: |
  **Ansatz:** Für jede Option die Werte von `i` und die Ausgaben auflisten.
  ---
  Option 1: `i` = 5, 8, 11, 14, dann 17 (Ende). Ausgabe `5 8 11 14 `. Passt.
  ---
  Option 2 endet vor der 14. Option 3 gibt eine Zahl zu viel aus (17). Richtig ist nur Option 1.
```

```aufgabe
id: sl-for-jede-achte
titel: Jede achte Zahl
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 1b (Idee nachgebaut, andere Zahlen und Angabe)
angabe: |
  Gib mit einer `for`-Schleife alle Vielfachen von 8 aus, die im Intervall `[8, 60[` liegen. Alle Zahlen
  stehen in einer Zeile, nach jeder Zahl folgt ein Leerzeichen. Das Leerzeichen nach der letzten Zahl ist
  hier erlaubt. So soll die Ausgabe aussehen: `8 16 24 32 40 48 56`
teile:
  - typ: code
    vorlage: |
      public class JedeAchte {
          public static void main(String[] args) {
              // TODO: for-Schleife
          }
      }
    musterloesung: |
      public class JedeAchte {
          public static void main(String[] args) {
              for (int i = 8; i < 60; i += 8) {
                  System.out.print(i + " ");
              }
              System.out.println();
          }
      }
    tests:
      - { stdout: "8 16 24 32 40 48 56\n", whitespace: tolerant, beschreibung: "Ausgabe 8 16 24 32 40 48 56" }
    fehler:
      - { wert: 1, meldung: "Kontrolliere die rechte Grenze: `60[` heißt, 60 gehört nicht dazu. Und gib nur die Vielfachen von 8 aus, nicht jede Zahl." }
hinweise:
  - Die Schrittweite muss nicht 1 sein. Mit `i += 8` springst du direkt zur nächsten passenden Zahl.
  - '`[8` heißt Start bei 8, `60[` heißt Bedingung `i < 60`.'
loesung: |
  **Ansatz:** Startwert 8, Schrittweite 8, rechte Grenze offen.
  ---
  ```java
  for (int i = 8; i < 60; i += 8) {
      System.out.print(i + " ");
  }
  System.out.println();
  ```
  ---
  Probe: Nach 56 wird `i` zu 64, und `64 < 60` ist falsch. Die 60 selbst wäre auch bei `i <= 60` nicht dabei, weil die Folge 8, 16, … 60 überspringt.
```

```aufgabe
id: sl-for-rest-drei
titel: Rest 3 in einem offenen Intervall
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Das Programm liest zwei ganze Zahlen `a` und `b` ein (das Einlesen ist schon fertig). Gib jede Zahl
  aus dem offenen Intervall `]a, b[` in einer eigenen Zeile aus, die bei Division durch 7 den Rest 3
  lässt. Du darfst annehmen, dass `a` und `b` nicht negativ sind.

  Beispiel: Für `a = 0` und `b = 30` lautet die Ausgabe 3, 10, 17 und 24, jeweils in einer eigenen Zeile.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class RestDrei {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int a = eingabe.nextInt();
              int b = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class RestDrei {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int a = eingabe.nextInt();
              int b = eingabe.nextInt();
              for (int i = a + 1; i < b; i++) {
                  if (i % 7 == 3) {
                      System.out.println(i);
                  }
              }
          }
      }
    tests:
      - { stdin: "0 30", stdout: "3\n10\n17\n24\n", beschreibung: "a = 0, b = 30" }
      - { stdin: "10 24", stdout: "17\n", beschreibung: "a = 10, b = 24: die 24 liegt auf dem Rand" }
      - { stdin: "3 4", stdout: "", beschreibung: "a = 3, b = 4: die 3 liegt auf dem Rand, keine Ausgabe" }
      - { stdin: "100 140", stdout: "101\n108\n115\n122\n129\n136\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Die rechte Grenze ist offen. 24 lässt zwar den Rest 3, gehört aber nicht mehr zum Intervall ]10, 24[." }
      - { wert: 3, meldung: "Die linke Grenze ist offen. Die 3 gehört nicht zu ]3, 4[, also darf nichts ausgegeben werden." }
hinweise:
  - 'Übersetze `]a, b[` mit der Tabelle aus diesem Abschnitt: Start bei `a + 1`, Bedingung `i < b`.'
  - 'Der Rest-Test lautet `i % 7 == 3`. Teste vor allem die Ränder: Was passiert, wenn `a` oder `b` selbst den Rest 3 hat?'
loesung: |
  **Ansatz:** Offenes Intervall heißt: Start bei `a + 1`, Bedingung `i < b`. Im Rumpf filtert ein `if` nach dem Rest.
  ---
  ```java
  for (int i = a + 1; i < b; i++) {
      if (i % 7 == 3) {
          System.out.println(i);
      }
  }
  ```
  ---
  Probe am Rand: Für `a = 3`, `b = 4` startet `i` bei 4, und `4 < 4` ist sofort falsch. Es wird nichts ausgegeben, wie verlangt.
```

```reflexion
frage: Warum läuft `for (int i = a; i < b; i++)` genau b − a Mal, wenn b mindestens so groß wie a ist? Erkläre es mit einem kleinen Zahlenbeispiel.
antwort: |
  Die Schleife läuft für die Werte a, a + 1, … bis b − 1. Das sind alle ganzen Zahlen von a bis b − 1. Zieht man vom
  letzten Wert den ersten ab und zählt 1 dazu, erhält man (b − 1) − a + 1 = b − a. Beispiel: `for (int i = 2; i < 5; i++)`
  läuft für 2, 3 und 4, also dreimal, und 5 − 2 = 3. Mit `<=` kommt der Wert b selbst dazu, deshalb sind es dann b − a + 1 Durchläufe.
```


## Akkumulieren: Summen, Zähler und Ergebnis-Strings

```aufgabe
id: sl-akku-check-plus
titel: Eine Variable mit sich selbst verrechnen
niveau: 1
art: check
angabe: |
  Es gilt `int s = 12;`. Welchen Wert hat `s` nach `s = s + 5;`?
  (Zuweisungen werden rechts zuerst ausgerechnet, siehe [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale).)
teile:
  - typ: zahl
    loesung: "12 + 5"
    fehler:
      - wert: "5"
        meldung: Rechts vom `=` steht `s + 5`. Java rechnet zuerst mit dem **alten** Wert 12 und speichert dann das Ergebnis in `s`.
loesung: |
  Zuerst wird die rechte Seite mit dem alten Wert ausgerechnet: 12 + 5 = 17.
  ---
  Danach wird 17 in `s` gespeichert. Der alte Wert 12 ist überschrieben.
```

Viele Aufgaben verlangen nicht, jede Zahl einzeln auszugeben, sondern **ein Ergebnis über alle**
Durchläufe: eine Summe, eine Anzahl, ein Produkt oder einen zusammengesetzten Text. Dafür gibt es ein
festes Muster. Man nennt es **akkumulierende Schleife** (lateinisch *accumulare*: anhäufen). Die
Variable, in der das Ergebnis wächst, heißt **Akkumulator**.

:::merke[Das Akkumulator-Muster]
1. **Vor** der Schleife: Akkumulator anlegen und mit dem neutralen Startwert füllen. Für Summen und Zähler ist das `0`, für Produkte `1`, für Strings der leere String `""`.
2. **In** der Schleife: Akkumulator mit dem aktuellen Wert verändern, zum Beispiel `summe += i;` oder `anzahl++;`.
3. **Nach** der Schleife: Akkumulator ausgeben oder weiterverwenden.
:::

**Neutral** heißt: Der Startwert verändert das Ergebnis nicht. 0 plus irgendetwas bleibt dieses Etwas,
und 1 mal irgendetwas ebenfalls. Ein **Nicht-Beispiel** ist der Startwert 0 für ein Produkt: 0 mal
irgendetwas ist immer 0, das Ergebnis wäre also immer 0.

:::beispiel[Summe der Vielfachen von 4 zwischen 8 (ohne) und 40 (mit)]
```java
int summe = 0;
for (int i = 9; i <= 40; i++) {
    if (i % 4 == 0) {
        summe += i;
    }
}
System.out.println(summe);
```

- Zeile 1 legt den Akkumulator `summe` mit dem neutralen Wert 0 an. Das geschieht **vor** der Schleife.
- Zeile 2 übersetzt das Intervall: Die 8 gehört nicht dazu, also Start bei 9. Die 40 gehört dazu, also `<=`.
- Zeile 3 lässt nur Vielfache von 4 durch. Zeile 4 addiert sie zur bisherigen Summe.
- Zeile 7 gibt das Ergebnis **nach** der Schleife einmal aus.

Wir verfolgen nur die Durchläufe, in denen sich `summe` ändert:

|`i`|`summe` danach|
|---|---|
|12|12|
|16|28|
|20|48|
|24|72|
|28|100|
|32|132|
|36|168|
|40|208|

Ausgabe: `208`. Probe mit einer Abkürzung für gleichmäßige Abstände: Summe = Anzahl mal Mittelwert von
erster und letzter Zahl. Es sind 8 Zahlen, der Mittelwert ist (12 + 40) / 2 = 26, und 8 · 26 = 208.
:::

```aufgabe
id: sl-akku-quadratsumme
titel: Summe von Quadratzahlen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int s = 0;
      for (int i = 1; i <= 5; i++) {
          s += i * i;
      }
      System.out.println(s);
    loesung: |
      55
    fehler:
      - wert: "225"
        meldung: Du hast erst summiert und dann quadriert, also (1 + 2 + 3 + 4 + 5)². Die Schleife quadriert aber jede Zahl einzeln und addiert die Quadrate.
      - wert: "15"
        meldung: Im Rumpf steht `i * i`, nicht `i`. Es werden Quadratzahlen addiert.
hinweise:
  - Schreib für jeden Wert von `i` auf, was zu `s` addiert wird.
gefuehrt:
  - text: Was wird im ersten Durchlauf (`i = 1`) zu `s` addiert?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`1 * 1 = 1`, also ist `s` danach 1.'
  - text: Welchen Wert hat `s` nach dem zweiten Durchlauf (`i = 2`)?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '`2 * 2 = 4`, und 1 + 4 = 5.'
  - text: Welchen Wert hat `s` nach dem dritten Durchlauf?
    teil: { typ: zahl, loesung: "14" }
    erklaerung: 5 + 9 = 14.
  - text: Es folgen noch `i = 4` und `i = 5`. Welcher Wert wird ausgegeben?
    teil: { typ: zahl, loesung: "55" }
    erklaerung: 14 + 16 = 30 und 30 + 25 = 55.
loesung: |
  **Ansatz:** Akkumulator `s` startet bei 0. In jedem Durchlauf kommt `i * i` dazu.
  ---
  Die Summanden sind 1, 4, 9, 16 und 25.
  ---
  1 + 4 + 9 + 16 + 25 = 55. Ausgegeben wird `55`.
```

Ein **Zähler** ist ein Akkumulator, der nicht die Werte selbst addiert, sondern nur mitzählt, wie oft
etwas vorkommt. Statt `summe += i;` steht dann `anzahl++;`. Gezählt wird meist nur unter einer
Bedingung, also innerhalb eines `if`.

:::beispiel[Wie viele Zahlen sind durch 3 oder 5 teilbar?]
Wir zählen die Zahlen von 1 bis 30, die durch 3 **oder** durch 5 teilbar sind.

```java
int anzahl = 0;
for (int i = 1; i <= 30; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        anzahl++;
    }
}
System.out.println(anzahl);
```

Die Bedingung `i % 3 == 0 || i % 5 == 0` ist wahr, wenn mindestens einer der beiden Tests stimmt. Durch 3
teilbar sind 10 Zahlen (3, 6, … 30). Durch 5 teilbar sind 6 Zahlen (5, 10, … 30). Die Zahlen 15 und 30
sind durch beide teilbar. Sie werden aber nur **einmal** gezählt, weil das `if` pro Zahl höchstens einmal
`anzahl++` ausführt. Ausgabe: 10 + 6 − 2 = `14`.
:::

Auch Strings lassen sich akkumulieren. Der Startwert ist der **leere String** `""`, also ein Text ohne
Zeichen. Mit `+` hängst du in jedem Durchlauf etwas an. Dabei kommt es auf die Seite an:

- `ergebnis = ergebnis + x;` hängt `x` **hinten** an. Die Reihenfolge bleibt erhalten.
- `ergebnis = x + ergebnis;` setzt `x` **vorne** davor. Die Reihenfolge dreht sich um.

Mit `"Rad"` und der zweiten Variante entsteht Zeichen für Zeichen `"R"`, dann `"aR"`, dann `"daR"`. Das ist
der Trick, mit dem man einen String umdreht. Mehr dazu folgt in
[4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).

```aufgabe
id: sl-akku-produkt-trace
titel: Ein Produkt verfolgen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Fülle die Trace-Tabelle aus. Sie zeigt `i` und `p` jeweils am Ende eines Durchlaufs.
  ```java
  int p = 1;
  for (int i = 1; i <= 4; i++) {
      p = p * i;
  }
  ```
teile:
  - typ: trace
    spalten: [i, p]
    zeilen: [nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3, nach Durchlauf 4]
    vorgabe: 1
    loesung: [[1, 1], [2, 2], [3, 6], [4, 24]]
    fehler:
      - wert: ["1", "1", "2", "3", "3", "6", "4", "10"]
        meldung: 'Im Rumpf steht `p = p * i`, also eine Multiplikation. Du hast addiert: 1 + 2 + 3 + 4.'
hinweise:
  - Das Produkt 1 · 2 · 3 · 4 heißt **Fakultät** von 4, geschrieben 4!.
loesung: |
  **Ansatz:** `p` startet beim neutralen Wert 1 und wird mit jedem `i` multipliziert.
  ---
  `p`: 1 · 1 = 1, 1 · 2 = 2, 2 · 3 = 6, 6 · 4 = 24.
  ---
  Am Ende ist `p = 24 = 4!`. Die Aktualisierung `i++` macht `i` danach zu 5, aber die Tabelle zeigt den Wert im Durchlauf.
```

:::beispiel[Ein Ergebnis-String mit Trennstrichen]
```java
String u = "";
for (int i = 1; i <= 4; i++) {
    u = u + i + "-";
}
System.out.println(u);
```

Der Akkumulator `u` beginnt leer. In jedem Durchlauf wird erst die Zahl `i` und dann ein Strich angehängt.
Weil links `u` steht, ein String, wird die Zahl als Text angehängt und nicht addiert.

|`i`|`u` danach|
|---|---|
|1|`"1-"`|
|2|`"1-2-"`|
|3|`"1-2-3-"`|
|4|`"1-2-3-4-"`|

Die Ausgabe ist `1-2-3-4-`. Der Strich am Ende ist meist unerwünscht. Wie man ihn vermeidet, zeigt
[4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
:::

:::achtung[Der Akkumulator wird in der Schleife zurückgesetzt]
```java
int s = 0;
for (int i = 1; i <= 4; i++) {
    s = 0;
    s = s + i;
}
System.out.println(s);
```

Erwartet ist 1 + 2 + 3 + 4 = 10, ausgegeben wird `4`. Die Zeile `s = 0;` steht **im** Rumpf. Sie löscht
in jedem Durchlauf alles, was bisher gesammelt wurde. Übrig bleibt nur der letzte Summand. Der Startwert
gehört **vor** die Schleife, und zwar genau einmal.
:::

:::achtung[Falscher Startwert beim Produkt und zu kleiner Typ]
```java
int f = 0;
for (int i = 1; i <= 5; i++) {
    f *= i;
}
```

Hier ist `f` am Ende `0` statt 120, weil 0 mal irgendetwas 0 bleibt. Richtig ist `int f = 1;`.

Ein zweiter Fehler zeigt sich erst bei größeren Zahlen. Mit `int f = 1;` und `i <= 13` liefert die Schleife
`1932053504`. Richtig wäre 13! = 6227020800. Diese Zahl ist größer als der größte `int`-Wert 2147483647.
Java meldet dann keinen Fehler, sondern rechnet still mit einem falschen Wert weiter (ein **Überlauf**).
Für große Produkte nimmst du `long`.
:::

```aufgabe
id: sl-akku-zurueckgesetzt
titel: Was bleibt übrig?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int anzahl = 0;
      for (int i = 1; i <= 12; i++) {
          anzahl = 0;
          if (i % 4 == 0) {
              anzahl++;
          }
      }
      System.out.println(anzahl);
    loesung: |
      1
    fehler:
      - wert: "3"
        meldung: 'So wäre es richtig gezählt (4, 8, 12). Aber `anzahl = 0;` steht im Rumpf und setzt den Zähler in jedem Durchlauf zurück.'
      - wert: "0"
        meldung: Im letzten Durchlauf ist `i = 12`. Nach dem Zurücksetzen auf 0 ist `12 % 4 == 0` wahr, und `anzahl` wird noch 1.
hinweise:
  - Entscheidend ist nur, was im **letzten** Durchlauf passiert.
  - Was passiert im Durchlauf mit `i = 12` nach der Zeile `anzahl = 0;`?
loesung: |
  **Ansatz:** Der Zähler wird in jedem Durchlauf auf 0 gesetzt. Nur der letzte Durchlauf zählt.
  ---
  Im letzten Durchlauf ist `i = 12`. Erst wird `anzahl = 0`, dann ist `12 % 4 == 0` wahr, und `anzahl` wird 1.
  ---
  Ausgabe `1`. Gemeint war vermutlich 3. Dazu muss `anzahl = 0;` vor die Schleife.
```

```aufgabe
id: sl-akku-fragment
titel: Welches Fragment summiert richtig?
niveau: 2
lernziel: 2
kompetenz: verstehen
quelle: TUWEL-Test zur Vorbereitung 1 WS2021, Frage 5 (Idee nachgebaut, ungerade statt gerade Zahlen)
angabe: |
  Nach welchem der drei Fragmente enthält `sum` den Wert 1 + 3 + 5 + … + 19 = 100, also die Summe aller
  **ungeraden** Zahlen von 1 bis 19?
teile:
  - typ: auswahl
    optionen:
      - '`int sum = 0; for (int i = 1; i <= 10; i++) { sum += 2 * i - 1; }`'
      - '`int sum = 0; for (int i = 0; i <= 19; i++) { if (i % 2 == 0) { sum += i; } }`'
      - '`int sum = 0; for (int i = 1; i < 10; i++) { sum += 2 * i + 1; }`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`i % 2 == 0` trifft die **geraden** Zahlen. Dieses Fragment liefert 0 + 2 + … + 18 = 90.'
      - wert: 2
        meldung: Für `i` von 1 bis 9 ergibt `2 * i + 1` die Zahlen 3, 5, … 19. Die 1 fehlt, das Ergebnis ist 99.
hinweise:
  - Setze bei jedem Fragment den ersten und den letzten Wert von `i` ein. Welche Zahl wird dann addiert?
  - '`2 * i - 1` und `2 * i + 1` erzeugen ungerade Zahlen. Wo fangen sie an?'
loesung: |
  **Ansatz:** Für jedes Fragment die addierten Zahlen bestimmen.
  ---
  Fragment 1: `i` = 1 … 10 ergibt 1, 3, … 19. Das sind genau die zehn ungeraden Zahlen, Summe 100.
  ---
  Fragment 2 summiert die geraden Zahlen (90). Fragment 3 beginnt erst bei 3 (99). Richtig ist Fragment 1.
```

```aufgabe
id: sl-akku-intervallsumme
titel: Vielfache von 13 aufsummieren
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 1a (Idee nachgebaut, andere Zahlen und Angabe)
angabe: |
  Berechne mit einer `for`-Schleife die Summe aller Vielfachen von 13, die im Intervall `]26, 143]` liegen,
  und gib sie aus. Zur Kontrolle: Richtig ist `819`.
teile:
  - typ: code
    vorlage: |
      public class Summe13 {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      public class Summe13 {
          public static void main(String[] args) {
              int summe = 0;
              for (int i = 27; i <= 143; i++) {
                  if (i % 13 == 0) {
                      summe += i;
                  }
              }
              System.out.println(summe);
          }
      }
    tests:
      - { stdout: "819\n", beschreibung: "Ausgabe 819" }
    fehler:
      - { wert: 1, meldung: "Kontrolliere die Grenzen. ]26 schließt die 26 aus, 143] schließt die 143 ein. Mit falschen Grenzen kommt 845, 676 oder 702 heraus." }
hinweise:
  - Akkumulator `summe` mit 0 vor der Schleife anlegen, im Rumpf mit `if (i % 13 == 0)` filtern.
  - Start bei 27 (26 ausgeschlossen), Bedingung `i <= 143` (143 eingeschlossen).
loesung: |
  **Ansatz:** Akkumulator-Muster mit Intervall `]26, 143]` und Teilbarkeitsfilter.
  ---
  ```java
  int summe = 0;
  for (int i = 27; i <= 143; i++) {
      if (i % 13 == 0) {
          summe += i;
      }
  }
  System.out.println(summe);
  ```
  ---
  Probe: Die Vielfachen sind 39, 52, …, 143, also 13 · 3 bis 13 · 11. Ihre Summe ist 13 · (3 + 4 + … + 11) = 13 · 63 = 819.
```

```aufgabe
id: sl-akku-zaehle-s
titel: Ein Zeichen in einem Satz zählen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 1e (Idee nachgebaut, anderer Satz und andere Buchstaben)
angabe: |
  Ermittle mit einer `for`-Schleife, wie viele Zeichen im Text der Variable `satz` ein kleines `s` oder ein
  großes `S` sind. Der Text lautet: `Sieben Schwalben suchen sieben saftige Samen im Sand.`
  Gib diese Anzahl aus. Zur Kontrolle: Richtig ist `7`.
teile:
  - typ: code
    vorlage: |
      public class ZaehleS {
          public static void main(String[] args) {
              String satz = "Sieben Schwalben suchen sieben saftige Samen im Sand.";
              // TODO
          }
      }
    musterloesung: |
      public class ZaehleS {
          public static void main(String[] args) {
              String satz = "Sieben Schwalben suchen sieben saftige Samen im Sand.";
              int anzahl = 0;
              for (int i = 0; i < satz.length(); i++) {
                  char c = satz.charAt(i);
                  if (c == 's' || c == 'S') {
                      anzahl++;
                  }
              }
              System.out.println(anzahl);
          }
      }
    tests:
      - { stdout: "7\n", beschreibung: "Ausgabe 7" }
    regeln: { verboteneApi: ["String.indexOf", "String.replace", "String.split", "String.chars"] }
    fehler:
      - { wert: 1, meldung: "Zählst du Groß- und Kleinbuchstaben? Nur 's' allein ergibt 3, nur 'S' ergibt 4." }
hinweise:
  - 'Die Positionen im String laufen von 0 bis `satz.length() - 1`. Mit `satz.charAt(i)` holst du das Zeichen an Position `i`.'
  - 'Zeichen vergleichst du mit `==` und **einfachen** Anführungszeichen: `c == ''s'' || c == ''S''`.'
loesung: |
  **Ansatz:** Zähler-Muster. Die Schleife läuft über alle Positionen des Satzes.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < satz.length(); i++) {
      char c = satz.charAt(i);
      if (c == 's' || c == 'S') {
          anzahl++;
      }
  }
  System.out.println(anzahl);
  ```
  ---
  Probe von Hand: **S**ieben, **S**chwalben, **s**uchen, **s**ieben, **s**aftige, **S**amen, **S**and. Das sind 7.
```

```aufgabe
id: sl-akku-fakultaet
titel: Fakultät ohne Überlauf
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Das Programm liest eine ganze Zahl `n` mit 0 ≤ n ≤ 20 ein. Gib die **Fakultät** n! = 1 · 2 · … · n aus.
  Es gilt 0! = 1. Achte darauf, dass auch 20! = 2432902008176640000 richtig herauskommt.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Fakultaet {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Fakultaet {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              long f = 1;
              for (int i = 2; i <= n; i++) {
                  f *= i;
              }
              System.out.println(f);
          }
      }
    tests:
      - { stdin: "5", stdout: "120\n", beschreibung: "5! = 120" }
      - { stdin: "0", stdout: "1\n", beschreibung: "0! = 1" }
      - { stdin: "13", stdout: "6227020800\n", beschreibung: "13! passt nicht mehr in int" }
      - { stdin: "20", stdout: "2432902008176640000\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Für n = 0 läuft die Schleife keinmal. Dann muss der Startwert selbst das Ergebnis sein. Welcher Startwert ist neutral für die Multiplikation?" }
      - { wert: 3, meldung: "13! ist größer als der größte int-Wert. Nimm für den Akkumulator den Typ long." }
hinweise:
  - Produkt-Akkumulator mit Startwert 1. Die Schleife multipliziert mit 2, 3, … n.
  - Der Typ `int` reicht nur bis 12!. Deklariere den Akkumulator als `long`.
loesung: |
  **Ansatz:** Akkumulator-Muster für ein Produkt. Startwert 1, Typ `long` wegen der Größe.
  ---
  ```java
  long f = 1;
  for (int i = 2; i <= n; i++) {
      f *= i;
  }
  System.out.println(f);
  ```
  ---
  Probe: Für `n = 0` und `n = 1` läuft die Schleife keinmal, ausgegeben wird 1. Für `n = 5`: 1 · 2 · 3 · 4 · 5 = 120.
```

```reflexion
frage: Warum startet eine Summe bei 0, ein Produkt bei 1 und ein Ergebnis-String bei ""? Was ginge schief, wenn der String mit null oder mit " " startete?
antwort: |
  Der Startwert muss **neutral** sein: Er darf das Ergebnis nicht verändern. Für die Addition ist das 0, für die Multiplikation 1,
  für das Aneinanderhängen von Text der leere String. Startet der Ergebnis-String mit `" "`, steht am Anfang des Ergebnisses ein
  überflüssiges Leerzeichen. `null` ist der Wert für „hier ist gar kein String“. Startet der Ergebnis-String mit `null`,
  schreibt Java beim ersten `+` das Wort `null` als Text davor: Aus `null + "a"` wird `"nulla"`. Fehlt der Startwert ganz,
  meldet der Compiler zum Beispiel `variable u might not have been initialized` (`u` ist der Name der Variable).
  Außerdem gilt: Läuft die Schleife keinmal, ist der Startwert das Ergebnis. Auch deshalb muss er für „nichts gesammelt“ stehen.
```


## Trennzeichen und das Zaunpfahlproblem

```aufgabe
id: sl-trenn-check-print
titel: print oder println?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (`print` und `println` kennst du aus [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println).)
teile:
  - typ: ausgabe
    code: |
      System.out.print("A");
      System.out.print("B");
      System.out.println("C");
      System.out.print("D");
    loesung: |
      ABC
      D
    fehler:
      - wert: "A\nB\nC\nD"
        meldung: '`print` beginnt danach **keine** neue Zeile. Nur `println` (print line) schließt die Zeile ab.'
loesung: |
  `print` gibt nur den Text aus. Erst `println("C")` beendet die Zeile nach dem C.
  ---
  Deshalb stehen A, B und C in einer Zeile, D in der nächsten.
```

Sollen Zahlen durch ein **Trennzeichen** getrennt werden, etwa `1, 2, 3, 4, 5`, dann gibt es ein Problem.
Bei fünf Zahlen braucht man nur **vier** Trennzeichen. Man kann also nicht einfach in jedem Durchlauf
„Zahl und Komma“ ausgeben.

Dieses Problem heißt **Zaunpfahlproblem**. Stell dir einen Zaun mit vier Pfählen vor. Zwischen den
Pfählen hängen drei Latten. Wer in jedem Schritt „Pfahl und Latte“ baut, hat am Ende eine Latte zu viel,
die ins Leere ragt. Bei Ausgaben sind die Zahlen die Pfähle und die Trennzeichen die Latten.

Die naive Schleife gibt in jedem Durchlauf `i + ", "` aus. Das Ergebnis ist `1, 2, 3, 4, 5, `
mit einem überzähligen Komma am Ende. Die Variante `System.out.print(", " + i);` erzeugt
`, 1, 2, 3, 4, 5` mit einem überzähligen Komma am Anfang. Beides ist bei einer zeichengenauen Prüfung
falsch.

:::beispiel[Drei Lösungen für 1, 2, 3, 4, 5]
**Variante 1: den ersten Pfahl vor der Schleife setzen.**

```java
System.out.print(1);
for (int i = 2; i <= 5; i++) {
    System.out.print(", " + i);
}
System.out.println();
```

Die 1 wird allein ausgegeben. Jeder weitere Durchlauf gibt „Komma, dann Zahl“ aus. So steht jedes Komma
zwischen zwei Zahlen.

**Variante 2: den letzten Pfahl nach der Schleife setzen.**

```java
for (int i = 1; i <= 4; i++) {
    System.out.print(i + ", ");
}
System.out.println(5);
```

Die Schleife gibt „Zahl, dann Komma“ für 1 bis 4 aus. Die 5 kommt danach ohne Komma.

**Variante 3: das Trennzeichen mit einer Bedingung steuern.**

```java
for (int i = 1; i <= 5; i++) {
    System.out.print(i);
    if (i < 5) {
        System.out.print(", ");
    }
}
System.out.println();
```

Nach jeder Zahl außer der letzten folgt ein Komma. Bei `i = 5` ist `5 < 5` falsch, das Komma entfällt.
Alle drei Varianten geben `1, 2, 3, 4, 5` aus.
:::

```aufgabe
id: sl-trenn-bindestrich
titel: Bindestriche nur zwischen den Zahlen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 3; i <= 6; i++) {
          System.out.print(i);
          if (i < 6) {
              System.out.print("-");
          }
      }
      System.out.println();
    loesung: |
      3-4-5-6
    fehler:
      - wert: "3-4-5-6-"
        meldung: Bei `i = 6` ist `6 < 6` falsch. Nach der letzten Zahl wird kein Strich ausgegeben.
hinweise:
  - Geh die Durchläufe für `i` = 3, 4, 5, 6 einzeln durch. Wann ist `i < 6` falsch?
loesung: |
  **Ansatz:** Variante 3 des Zaunpfahlproblems. Nach jeder Zahl kommt ein Strich, außer nach der letzten.
  ---
  Für 3, 4 und 5 ist `i < 6` wahr, für 6 nicht. Ausgabe `3-4-5-6`.
```

Manchmal verlangt die Angabe auch **vor** der ersten und **nach** der letzten Zahl ein Trennzeichen,
etwa `*12*24*36*`. So eine Angabe gab es zum Beispiel im Aufgabenblatt 1 von 2023. Dann gibt es genau so viele Trennzeichen wie
Zahlen plus eins. Hier hilft Variante 1 in abgewandelter Form: Ein Zeichen kommt vor die Schleife, und in
der Schleife folgt auf jede Zahl ein Zeichen.

:::beispiel[Vielfache von 6 und 8 mit Pluszeichen ringsum]
Gesucht sind alle Zahlen im Intervall `]30, 130]`, die durch 6 **und** durch 8 teilbar sind. Jede Zahl soll
von Pluszeichen umgeben sein.

```java
System.out.print("+");
for (int i = 31; i <= 130; i++) {
    if (i % 6 == 0 && i % 8 == 0) {
        System.out.print(i + "+");
    }
}
System.out.println();
```

- Zeile 1 setzt das erste Plus, bevor überhaupt eine Zahl kommt.
- Zeile 2 übersetzt das Intervall: Start bei 31, weil 30 nicht dazugehört, und `<=`, weil 130 dazugehört.
- Zeile 3 prüft beide Teilbarkeiten mit `&&`. Das trifft genau die Vielfachen von 24, denn 24 ist die kleinste Zahl, die durch 6 und durch 8 teilbar ist.
- Zeile 4 gibt jede gefundene Zahl mit einem Plus dahinter aus.

Ausgabe: `+48+72+96+120+`. Gäbe es im Intervall keine passende Zahl, wäre die Ausgabe nur `+`. Ob das
erwünscht ist, musst du in der Angabe nachlesen.
:::

```aufgabe
id: sl-trenn-welche-schleife
titel: Welche Schleife erzeugt die Ausgabe?
niveau: 1
lernziel: 3
kompetenz: verstehen
quelle: TUWEL-Test zur Vorbereitung 1 WS2021, Frage 4 (Idee nachgebaut, andere Ausgabe und andere Optionen)
angabe: |
  Welche Schleife gibt genau `1+2+3|4+5+6|7+` aus?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 1; i <= 7; i++) { if (i == 3 || i == 6) { System.out.print(i + "|"); } else { System.out.print(i + "+"); } }`'
      - '`for (int i = 1; i <= 7; i++) { System.out.print(i); if (i == 3 || i == 6) { System.out.print("|"); } System.out.print("+"); }`'
      - '`for (int i = 1; i < 7; i++) { if (i == 3 || i == 6) { System.out.print(i + "|"); } else { System.out.print(i + "+"); } }`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier fehlt das `else`. Das `+` wird nach **jeder** Zahl ausgegeben, auch nach 3 und 6. Ergebnis: `1+2+3|+4+5+6|+7+`.'
      - wert: 2
        meldung: Mit `i < 7` läuft die Schleife nur bis 6. Das `7+` am Ende fehlt.
hinweise:
  - Bestimme für jede Schleife, was bei `i = 3` und beim letzten Wert von `i` ausgegeben wird.
loesung: |
  **Ansatz:** In der Zielausgabe folgt auf 3 und 6 ein `|`, auf alle anderen Zahlen ein `+`. Die letzte Zahl ist 7.
  ---
  Option 1: Bei 3 und 6 kommt `i + "|"`, sonst `i + "+"`, und `i` läuft bis 7. Das passt.
  ---
  Option 2 gibt nach 3 und 6 beide Zeichen aus, weil das `else` fehlt. Option 3 endet bei 6. Richtig ist Option 1.
```

### Wenn nur gefilterte Zahlen ausgegeben werden

Schwieriger wird es, wenn nicht jede Zahl ausgegeben wird, sondern nur die, die eine Bedingung erfüllen.
Dann weißt du beim Schleifenlauf nicht, welche Zahl die **letzte ausgegebene** sein wird. Der Test
`if (i < 5)` aus Variante 3 funktioniert nur, wenn die letzte Zahl der Schleife auch ausgegeben wird.

:::achtung[Das Komma hängt an der falschen Zahl]
Aufgabe: Gib die durch 7 teilbaren Zahlen aus `[1, 20]` durch `", "` getrennt aus. Eine typische falsche Lösung:

```java
for (int i = 1; i <= 20; i++) {
    if (i % 7 == 0) {
        System.out.print(i);
        if (i < 20) {
            System.out.print(", ");
        }
    }
}
```

Die Ausgabe ist `7, 14, ` mit einem Komma am Ende. Die letzte **ausgegebene** Zahl ist 14, nicht 20. Für
14 ist `14 < 20` wahr, also folgt ein Komma. Die Bedingung prüft das Ende der **Schleife**, nicht das Ende
der **Ausgabe**.
:::

Die zuverlässige Lösung dreht das Problem um. Statt „Komma nach jeder Zahl außer der letzten“ heißt es
„Komma **vor** jeder Zahl außer der ersten“. Ob eine Zahl die erste Ausgabe ist, weiß man nämlich
sofort. Dafür merkt sich eine Variable vom Typ `boolean`, ob schon etwas ausgegeben wurde. Eine solche
Variable nennt man **Flag** (englisch: Fahne).

```java
boolean erste = true;
for (int i = 1; i <= 20; i++) {
    if (i % 7 == 0) {
        if (!erste) {
            System.out.print(", ");
        }
        System.out.print(i);
        erste = false;
    }
}
System.out.println();
```

Bei der 7 ist `erste` noch `true`, also kein Komma. Danach wird `erste` auf `false` gesetzt. Bei der 14 ist
`!erste` wahr, also kommt zuerst das Komma, dann die Zahl. Ausgabe: `7, 14`.

:::achtung[Trennzeichen als char und Zahl addiert]
```java
for (int i = 1; i <= 3; i++) {
    System.out.print(i + ',');
}
```

Erwartet ist `1,2,3,`, ausgegeben wird `454647`. Das Komma steht in **einfachen** Anführungszeichen. Es ist
also ein `char` mit dem Zeichencode 44. `i + ','` ist dann eine Addition zweier Zahlen: 1 + 44 = 45,
2 + 44 = 46, 3 + 44 = 47. Für Text-Trennzeichen nimmst du doppelte Anführungszeichen: `i + ","`.
:::

:::merke[Trennzeichen richtig setzen]
1. Zähle zuerst: Wie viele Zahlen, wie viele Trennzeichen? Zwischen n Zahlen stehen n − 1 Trennzeichen, mit Rahmen n + 1.
2. Wird jede Zahl der Schleife ausgegeben: Variante 1, 2 oder 3.
3. Wird gefiltert: Flag `erste` und Trennzeichen **vor** jede Zahl außer der ersten.
4. Teste immer auch den Fall „keine Zahl passt“ und „genau eine Zahl passt“.
:::

```aufgabe
id: sl-trenn-komma-falsch
titel: Wo landet das letzte Komma?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Leerzeichen am Zeilenende darfst du weglassen.
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 30; i++) {
          if (i % 9 == 0) {
              System.out.print(i);
              if (i < 30) {
                  System.out.print(",");
              }
          }
      }
      System.out.println();
    trim: true
    loesung: |
      9,18,27,
    fehler:
      - wert: "9,18,27"
        meldung: Die letzte ausgegebene Zahl ist 27. Für sie ist `27 < 30` wahr, also folgt noch ein Komma.
hinweise:
  - Welche Zahlen in `[1, 30]` sind durch 9 teilbar?
  - Prüfe die Bedingung `i < 30` für die letzte dieser Zahlen.
loesung: |
  **Ansatz:** Ausgegeben werden nur Vielfache von 9: 9, 18, 27.
  ---
  Nach jeder dieser Zahlen wird `i < 30` geprüft. Für alle drei ist das wahr.
  ---
  Ausgabe `9,18,27,` mit Komma am Ende. Die Bedingung bezieht sich auf das Schleifenende 30, nicht auf die letzte Ausgabe.
```

```aufgabe
id: sl-trenn-ascii
titel: Buchstaben rückwärts mit Beistrichen
niveau: 2
lernziel: 3
kompetenz: rechnen
quelle: Aufgabenblatt 1 WS2023, Aufgabe 1d (nachgebaut, anderes Intervall)
angabe: |
  Die Zeichencodes von `a` bis `f` sind 97 bis 102. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 102; i > 96; i--) {
          System.out.print((char) i);
          if (i > 97) {
              System.out.print(",");
          }
      }
      System.out.println();
    loesung: |
      f,e,d,c,b,a
    fehler:
      - wert: "f,e,d,c,b,a,"
        meldung: Beim letzten Durchlauf ist `i = 97`. Dann ist `97 > 97` falsch, und es folgt kein Beistrich.
      - wert: "102,101,100,99,98,97"
        meldung: Der Cast `(char) i` macht aus der Zahl das Zeichen mit diesem Code. Ausgegeben werden Buchstaben.
hinweise:
  - Die Schleife zählt abwärts. Welcher Wert von `i` ist der letzte, für den `i > 96` gilt?
  - Bei welchem Wert von `i` ist `i > 97` falsch?
gefuehrt:
  - text: Mit welchem Zeichen beginnt die Ausgabe?
    teil: { typ: auswahl, optionen: ['`f`', '`a`', '`g`'], richtig: [0] }
    erklaerung: Start ist `i = 102`, und Code 102 ist `f`.
  - text: Welcher ist der letzte Wert von `i`, für den der Rumpf läuft?
    teil: { typ: zahl, loesung: "97" }
    erklaerung: '`97 > 96` ist wahr, `96 > 96` nicht. Der letzte Durchlauf hat `i = 97`, das Zeichen `a`.'
  - text: Nach welchen Zeichen kommt ein Beistrich?
    erklaerung: Nach allen außer dem letzten, denn nur bei `i = 97` ist `i > 97` falsch.
  - text: Wie viele Beistriche enthält die Ausgabe?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Sechs Buchstaben, fünf Beistriche dazwischen.
loesung: |
  **Ansatz:** `i` läuft von 102 abwärts bis 97, das sind die Codes von `f` bis `a`.
  ---
  Jeder Durchlauf gibt den Buchstaben aus. Danach folgt ein Beistrich, solange `i > 97` gilt.
  ---
  Ausgabe `f,e,d,c,b,a`. Probe: 6 Buchstaben, 5 Beistriche.
```

```aufgabe
id: sl-trenn-luecken
titel: Den ersten Pfahl vorweg
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass die Zahlen 1 bis `n` durch `", "` getrennt ausgegeben werden, ohne
  Trennzeichen am Anfang oder Ende. Für `n = 4` lautet die Ausgabe `1, 2, 3, 4`. Du darfst `n ≥ 1` annehmen.
teile:
  - typ: lueckentext
    code: |
      int n = 4;
      System.out.print(1);
      for (int i = ___; i <= n; i++) {
          System.out.print(___ + i);
      }
      System.out.println();
    luecken: [["2", "1 + 1"], ['", "']]
    fehler:
      - wert: ["1", '", "']
        meldung: Die 1 wurde schon vor der Schleife ausgegeben. Startet die Schleife bei 1, steht die 1 zweimal da.
hinweise:
  - Welche Zahl gibt die Zeile vor der Schleife schon aus?
  - In der Schleife steht das Trennzeichen **vor** der Zahl.
loesung: |
  **Ansatz:** Variante 1 des Zaunpfahlproblems. Der erste Pfahl steht vor der Schleife.
  ---
  Die Schleife beginnt deshalb bei 2.
  ---
  In jedem Durchlauf kommt zuerst `", "`, dann die Zahl. Ausgabe für `n = 4`: `1, 2, 3, 4`.
```

```aufgabe
id: sl-trenn-sterne
titel: Vielfache mit Schrägstrichen umrahmen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 1c (Idee nachgebaut, andere Zahlen, anderes Zeichen und andere Angabe)
angabe: |
  Gesucht sind die Zahlen aus dem Intervall `[100, 385[`, die sowohl durch 7 als auch durch 11 teilbar sind.
  Gib sie in einer Zeile aus. Vor jeder Zahl steht ein Schrägstrich `/`, und auch nach der letzten Zahl
  folgt einer. So soll die Ausgabe aussehen: `/154/231/308/`
teile:
  - typ: code
    vorlage: |
      public class Schraegstriche {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      public class Schraegstriche {
          public static void main(String[] args) {
              System.out.print("/");
              for (int i = 100; i < 385; i++) {
                  if (i % 7 == 0 && i % 11 == 0) {
                      System.out.print(i + "/");
                  }
              }
              System.out.println();
          }
      }
    tests:
      - { stdout: "/154/231/308/\n", beschreibung: "Ausgabe /154/231/308/" }
    fehler:
      - { wert: 1, meldung: "Vergleiche Anfang und Ende genau. Die 385 ist durch 7 und 11 teilbar, gehört wegen `385[` aber nicht dazu. Steht vor der ersten Zahl ein Schrägstrich?" }
hinweise:
  - Vor der Schleife einen Schrägstrich ausgeben, in der Schleife jede passende Zahl mit einem Schrägstrich dahinter.
  - 'Intervall `[100, 385[`: Start bei 100, Bedingung `i < 385`. Filter: `i % 7 == 0 && i % 11 == 0`.'
loesung: |
  **Ansatz:** Es gibt ein Trennzeichen mehr als Zahlen. Ein Schrägstrich vorweg, dann „Zahl und Schrägstrich“ für jede passende Zahl.
  ---
  ```java
  System.out.print("/");
  for (int i = 100; i < 385; i++) {
      if (i % 7 == 0 && i % 11 == 0) {
          System.out.print(i + "/");
      }
  }
  System.out.println();
  ```
  ---
  Probe: Durch 7 und durch 11 teilbar sind genau die Vielfachen von 77. Im Intervall liegen 154, 231 und 308. Die 385 = 5 · 77 ist wegen `385[` nicht mehr dabei.
```

```aufgabe
id: sl-trenn-plus
titel: Pluszeichen nur dazwischen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 2 (Idee nachgebaut, andere Zahlen)
angabe: |
  Gib alle Zahlen von 1 bis 200 (beide inklusive) aus, die durch 10 und durch 15 teilbar sind. Trenne sie
  durch `+`, aber ohne `+` am Anfang oder Ende. So soll die Ausgabe aussehen: `30+60+90+120+150+180`
teile:
  - typ: code
    vorlage: |
      public class Plus {
          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      public class Plus {
          public static void main(String[] args) {
              boolean erste = true;
              for (int i = 1; i <= 200; i++) {
                  if (i % 10 == 0 && i % 15 == 0) {
                      if (!erste) {
                          System.out.print("+");
                      }
                      System.out.print(i);
                      erste = false;
                  }
              }
              System.out.println();
          }
      }
    tests:
      - { stdout: "30+60+90+120+150+180\n", beschreibung: "Ausgabe 30+60+90+120+150+180" }
    fehler:
      - { wert: 1, meldung: "Steht am Ende ein +? Die letzte ausgegebene Zahl ist 180, nicht 200. Ein Test wie i < 200 hilft deshalb nicht. Setze das + vor jede Zahl außer der ersten." }
hinweise:
  - Hier wird gefiltert. Die letzte ausgegebene Zahl ist nicht der Endwert der Schleife.
  - 'Nimm ein Flag `boolean erste = true;` und gib das `+` **vor** jeder Zahl aus, wenn `erste` schon `false` ist.'
loesung: |
  **Ansatz:** Gefilterte Ausgabe mit Trennzeichen. Darum das Flag `erste` und Trennzeichen vor der Zahl.
  ---
  ```java
  boolean erste = true;
  for (int i = 1; i <= 200; i++) {
      if (i % 10 == 0 && i % 15 == 0) {
          if (!erste) {
              System.out.print("+");
          }
          System.out.print(i);
          erste = false;
      }
  }
  System.out.println();
  ```
  ---
  Probe: Durch 10 und durch 15 teilbar sind die Vielfachen von 30: 30, 60, 90, 120, 150, 180. Die nächste wäre 210 und liegt außerhalb. Vor der 30 steht kein `+`, nach der 180 auch nicht.
```

```aufgabe
id: sl-trenn-flag
titel: Gefilterte Liste für beliebige Grenzen
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Programm liest zwei Zahlen `a` und `b` ein. Gib alle Zahlen im geschlossenen Intervall `[a, b]` aus,
  die durch 3 **oder** durch 5 teilbar sind. Trenne sie durch `", "` (Komma und Leerzeichen). Beende die
  Ausgabe mit einem Zeilenumbruch. Passt keine Zahl, wird nur eine leere Zeile ausgegeben.

  Beispiel: `a = 1`, `b = 11` ergibt `3, 5, 6, 9, 10`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class DreiOderFuenf {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int a = eingabe.nextInt();
              int b = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class DreiOderFuenf {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int a = eingabe.nextInt();
              int b = eingabe.nextInt();
              boolean erste = true;
              for (int i = a; i <= b; i++) {
                  if (i % 3 == 0 || i % 5 == 0) {
                      if (!erste) {
                          System.out.print(", ");
                      }
                      System.out.print(i);
                      erste = false;
                  }
              }
              System.out.println();
          }
      }
    tests:
      - { stdin: "1 11", stdout: "3, 5, 6, 9, 10\n", beschreibung: "a = 1, b = 11" }
      - { stdin: "1 20", stdout: "3, 5, 6, 9, 10, 12, 15, 18, 20\n", beschreibung: "a = 1, b = 20: die letzte Zahl passt" }
      - { stdin: "7 8", stdout: "\n", beschreibung: "a = 7, b = 8: keine Zahl passt, nur eine leere Zeile" }
    fehler:
      - { wert: 1, meldung: "Steht nach der 10 noch ein Komma? Die 11 wird nicht ausgegeben, also darf deine Bedingung nicht vom Schleifenende abhängen." }
hinweise:
  - Das ist die Flag-Technik aus diesem Abschnitt. Das Komma kommt vor jede Zahl außer der ersten.
  - 'Filter: `i % 3 == 0 || i % 5 == 0`. Das `println()` nach der Schleife sorgt für den Zeilenumbruch, auch wenn nichts passt.'
loesung: |
  **Ansatz:** Gefiltert und mit Trennzeichen, also Flag `erste`.
  ---
  ```java
  boolean erste = true;
  for (int i = a; i <= b; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
          if (!erste) {
              System.out.print(", ");
          }
          System.out.print(i);
          erste = false;
      }
  }
  System.out.println();
  ```
  ---
  Probe mit `a = 7`, `b = 8`: Keine Zahl passt, das Flag bleibt `true`, und nur `println()` erzeugt eine leere Zeile.
```

```reflexion
frage: Warum ist „Trennzeichen vor jeder Zahl außer der ersten“ leichter umzusetzen als „Trennzeichen nach jeder Zahl außer der letzten“?
antwort: |
  Ob eine Zahl die erste Ausgabe ist, weiß man in dem Moment, in dem man sie ausgibt: Es wurde vorher noch nichts ausgegeben.
  Das merkt sich ein einziges Flag. Ob eine Zahl die letzte Ausgabe ist, weiß man dagegen erst, wenn die Schleife fertig ist.
  Man müsste in die Zukunft schauen, ob noch eine passende Zahl kommt. Deshalb funktioniert `if (i < b)` nur, wenn jede
  Zahl ausgegeben wird, während das Flag auch bei gefilterten Ausgaben stimmt.
```


## Strings Zeichen für Zeichen durchlaufen

```aufgabe
id: sl-str-check-index
titel: Welches Zeichen steht an Position 3?
niveau: 1
art: check
angabe: |
  Es gilt `String s = "Programm";`. Welches Zeichen liefert `s.charAt(3)`?
  (Indizes von Strings: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).)
teile:
  - typ: auswahl
    optionen: ['`g`', '`o`', '`r`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`o` ist das dritte Zeichen, steht aber an Index 2. Die Zählung beginnt bei 0: P ist Index 0.'
      - wert: 2
        meldung: '`r` steht an Index 1 (und wieder an Index 4). Zähle ab 0: P=0, r=1, o=2, g=3.'
loesung: |
  Die Indizes beginnen bei 0: `P` hat Index 0, `r` Index 1, `o` Index 2.
  ---
  Index 3 ist also `g`, das vierte Zeichen.
```

Ein String ist eine Folge von Zeichen. Jedes Zeichen hat eine Position, den **Index**. Die Zählung
beginnt bei 0. Der letzte Index ist deshalb immer um eins kleiner als die Länge. Für `"Lager"` sieht das so aus:

|Index|0|1|2|3|4|
|---|---|---|---|---|---|
|Zeichen|L|a|g|e|r|

`s.length()` ist 5, gültige Indizes sind 0 bis 4. Mit `s.charAt(i)` holst du das Zeichen an Index `i`.
Das Ergebnis hat den Typ `char`. Damit ergeben sich drei Grundformen, einen String zu durchlaufen:

```java
for (int i = 0; i < s.length(); i++) { ... }       // vorwärts: 0, 1, ..., length - 1
for (int i = s.length() - 1; i >= 0; i--) { ... }  // rückwärts: length - 1, ..., 1, 0
for (int i = 1; i < s.length(); i += 2) { ... }    // jedes zweite Zeichen ab Index 1
```

In allen drei Fällen gilt dieselbe Regel: Der kleinste erlaubte Index ist 0, der größte `s.length() - 1`.
Deshalb steht vorwärts `i < s.length()` (echt kleiner) und rückwärts der Start `s.length() - 1`.

:::beispiel[Ein Wort rückwärts zusammensetzen]
```java
String s = "Lager";
String r = "";
for (int i = s.length() - 1; i >= 0; i--) {
    r = r + s.charAt(i);
}
System.out.println(r);
```

- Zeile 3 startet beim letzten Index `5 - 1 = 4` und zählt abwärts bis einschließlich 0.
- Zeile 4 hängt das Zeichen an Index `i` hinten an `r` an. Weil wir hinten im Wort beginnen, entsteht das Wort rückwärts.

|`i`|`s.charAt(i)`|`r` danach|
|---|---|---|
|4|r|`"r"`|
|3|e|`"re"`|
|2|g|`"reg"`|
|1|a|`"rega"`|
|0|L|`"regaL"`|

Beim nächsten Prüfen ist `i = -1`, und `-1 >= 0` ist falsch. Ausgabe: `regaL`.
:::

Zeichen vergleichst du mit `==` und **einfachen** Anführungszeichen. `s.charAt(i) == 'n'` ist richtig.
Ein **Nicht-Beispiel** ist `s.charAt(i) == "n"`: Rechts steht ein String (doppelte Anführungszeichen),
links ein `char`. Der Compiler meldet `bad operand types for binary operator '=='`.

```aufgabe
id: sl-str-rueckwaerts
titel: Ein Wort rückwärts ausgeben
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String w = "Stern";
      for (int i = w.length() - 1; i >= 0; i--) {
          System.out.print(w.charAt(i));
      }
      System.out.println();
    loesung: |
      nretS
    fehler:
      - wert: "Stern"
        meldung: Die Schleife beginnt beim letzten Index und zählt mit `i--` abwärts. Die Zeichen kommen also von hinten nach vorne.
      - wert: "nret"
        meldung: Die Bedingung lautet `i >= 0`. Auch Index 0, das `S`, wird ausgegeben.
hinweise:
  - '`w.length()` ist 5, der Start ist also Index 4.'
loesung: |
  **Ansatz:** `i` läuft 4, 3, 2, 1, 0.
  ---
  Die Zeichen an diesen Indizes sind n, r, e, t, S. Ausgabe `nretS`.
```

Oft soll nicht jedes Zeichen verarbeitet werden. Dann steht im Rumpf ein `if`, das Zeichen **filtert**.
Für Buchstabenbereiche nutzt du, dass ein `char` intern eine Zahl ist. Die Kleinbuchstaben `a` bis `z`
haben aufeinanderfolgende Codes (97 bis 122), ebenso die Großbuchstaben `A` bis `Z` (65 bis 90). Der Test
„liegt zwischen a und m“ lautet daher `c >= 'a' && c <= 'm'`.

:::beispiel[Jedes zweite Zeichen ohne n]
Die Aufgabe ähnelt Aufgabenblatt 1 von 2023: Beginne bei Index 1, nimm jedes zweite Zeichen und gib es aus,
falls es kein `n` ist. Wir nehmen das Wort `"Sonnenschein"`.

```java
String t = "Sonnenschein";
int i = 1;
String r = "";
while (i < t.length()) {
    if (t.charAt(i) != 'n') {
        r = r + t.charAt(i);
    }
    i += 2;
}
System.out.println(r);
```

Hier steht eine `while`-Schleife, weil die Angabe es so verlangt. Start, Bedingung und Schritt stehen auf
drei Zeilen verteilt: `int i = 1;` vor der Schleife, `i < t.length()` im Kopf, `i += 2;` am Ende des
Rumpfs. Das Wort hat 12 Zeichen, also Indizes 0 bis 11.

|`i`|Zeichen|kein `n`?|`r` danach|
|---|---|---|---|
|1|o|ja|`"o"`|
|3|n|nein|`"o"`|
|5|n|nein|`"o"`|
|7|c|ja|`"oc"`|
|9|e|ja|`"oce"`|
|11|n|nein|`"oce"`|

Danach ist `i = 13`, und `13 < 12` ist falsch. Ausgabe: `oce`. Achte darauf, dass `i += 2` **außerhalb**
des `if` steht. Sonst würde `i` bei einem `n` nicht weiterrücken, und die Schleife hinge fest.
:::

:::beispiel[Buchstaben aus einem Bereich zählen]
Wie viele Buchstaben von `a` bis `m` (klein oder groß) enthält `"Java macht Spass"`?

```java
String t = "Java macht Spass";
int anzahl = 0;
for (int i = 0; i < t.length(); i++) {
    char c = t.charAt(i);
    if ((c >= 'a' && c <= 'm') || (c >= 'A' && c <= 'M')) {
        anzahl++;
    }
}
System.out.println(anzahl);
```

Die Bedingung besteht aus zwei Bereichstests, verbunden mit `||`. Jeder Bereichstest verbindet seine
beiden Grenzen mit `&&`. Die Klammern machen die Gruppierung deutlich. Gezählt werden J, a, a, m, a, c, h
und a. Das `v`, das `t`, die Leerzeichen und `S`, `p`, `s`, `s` liegen außerhalb. Ausgabe: `8`.
:::

:::achtung[Ein Index zu weit]
```java
String s = "Hallo";
for (int i = 0; i <= s.length(); i++) {
    System.out.print(s.charAt(i));
}
```

Das Programm gibt `Hallo` aus und bricht dann ab mit
`java.lang.StringIndexOutOfBoundsException: Index 5 out of bounds for length 5`. Die Bedingung `<=` lässt
`i = 5` noch zu, aber der letzte gültige Index ist 4. Eine **Exception** ist ein Laufzeitfehler: Das
Programm kompiliert, stürzt aber beim Ausführen ab. Richtig ist `i < s.length()`. Rückwärts passiert
derselbe Fehler, wenn du mit `i = s.length()` statt `s.length() - 1` beginnst.
:::

:::achtung[Bereich mit oder statt und]
```java
if (c >= 'a' || c <= 'm') {
    anzahl++;
}
```

Gemeint ist „zwischen a und m“. Diese Bedingung ist aber für **jedes** Zeichen wahr. Jedes Zeichen ist
entweder mindestens `a` oder höchstens `m`, meist sogar beides. Das `z` ist größer als `a`, das Leerzeichen
(Code 32) ist kleiner als `m`. Gezählt wird also alles. Ein Bereich braucht immer `&&`: Das Zeichen muss
über der unteren **und** unter der oberen Grenze liegen.
:::

```aufgabe
id: sl-str-trace-voran
titel: Voranstellen verfolgen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Fülle die Trace-Tabelle aus. Schreib den Inhalt von `r` ohne Anführungszeichen.
  ```java
  String s = "Tor";
  String r = "";
  for (int i = 0; i < s.length(); i++) {
      r = s.charAt(i) + r;
  }
  ```
teile:
  - typ: trace
    spalten: [i, Zeichen, r]
    zeilen: [Durchlauf 1, Durchlauf 2, Durchlauf 3]
    vorgabe: 1
    loesung: [[0, "T", "T"], [1, "o", "oT"], [2, "r", "roT"]]
    fehler:
      - wert: ["0", "T", "T", "1", "o", "To", "2", "r", "Tor"]
        meldung: 'In der Zeile steht `s.charAt(i) + r`. Das neue Zeichen kommt **vor** den bisherigen Inhalt, nicht dahinter.'
hinweise:
  - Bei `x + r` steht `x` vorne. Das neue Zeichen wird also links angefügt.
loesung: |
  **Ansatz:** Die Schleife läuft vorwärts, setzt aber jedes Zeichen **vor** das bisherige Ergebnis.
  ---
  `r` wird nacheinander `T`, `oT`, `roT`. So entsteht das Wort rückwärts, obwohl die Schleife vorwärts läuft.
```

```aufgabe
id: sl-str-oder-falle
titel: Was zählt diese Bedingung?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String t = "Zoo";
      int n = 0;
      for (int i = 0; i < t.length(); i++) {
          char c = t.charAt(i);
          if (c >= 'a' || c <= 'm') {
              n++;
          }
      }
      System.out.println(n);
    loesung: |
      3
    fehler:
      - wert: "0"
        meldung: 'So wäre es mit `&&`: `o` liegt nicht zwischen a und m. Hier steht aber `||`. Für `o` ist `c >= ''a''` wahr, das genügt.'
hinweise:
  - Prüfe beide Teilbedingungen für jedes Zeichen einzeln. Bei `||` reicht eine wahre Seite.
  - '`Z` hat den Code 90, `a` den Code 97, `m` den Code 109.'
loesung: |
  **Ansatz:** Die Bedingung mit `||` für jedes der drei Zeichen auswerten.
  ---
  `Z` (90): `90 >= 97` falsch, aber `90 <= 109` wahr. Also gezählt. `o` (111): `111 >= 97` wahr. Also gezählt, zweimal.
  ---
  Ausgabe `3`. Mit `&&` wäre es 0, denn keines der Zeichen liegt zwischen a und m.
```

```aufgabe
id: sl-str-maske
titel: Eine Galgenmännchen-Maske
niveau: 2
lernziel: 4
kompetenz: rechnen
quelle: Ad-hoc-Sammlung 2017W, Task 4 (nachgebaut)
angabe: |
  Beim Galgenmännchen-Spiel werden alle Buchstaben verdeckt, die noch nicht erraten wurden. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String wort = "Programm";
      char geraten = 'm';
      String maske = "";
      for (int i = 0; i < wort.length(); i++) {
          if (wort.charAt(i) == geraten) {
              maske = maske + geraten;
          } else {
              maske = maske + "#";
          }
      }
      System.out.println(maske);
    loesung: |
      ######mm
    fehler:
      - wert: "#######m"
        meldung: '„Programm“ endet auf **zwei** m. Jedes Zeichen wird einzeln geprüft, beide werden sichtbar.'
      - wert: "mm######"
        meldung: Die Maske hat dieselbe Reihenfolge wie das Wort. Die m stehen am Ende von „Programm“.
hinweise:
  - Das Wort hat 8 Zeichen. Für jedes entsteht genau ein Zeichen in der Maske.
  - An welchen Indizes steht in „Programm“ ein `m`?
gefuehrt:
  - text: Wie viele Zeichen hat die Maske am Ende?
    teil: { typ: zahl, loesung: "8" }
    erklaerung: In jedem der 8 Durchläufe wird genau ein Zeichen angehängt, entweder `m` oder `#`.
  - text: An welchen Indizes steht in „Programm“ ein m? Gib den kleineren an.
    teil: { typ: zahl, loesung: "6" }
    erklaerung: P0 r1 o2 g3 r4 a5 m6 m7. Die m stehen an den Indizes 6 und 7.
  - text: Was steht also an den Indizes 0 bis 5 der Maske?
    erklaerung: Jeweils `#`, weil dort kein m steht.
  - text: Wie lautet die Ausgabe?
    teil: { typ: ausgabe, code: "String wort = \"Programm\";\nchar geraten = 'm';\nString maske = \"\";\nfor (int i = 0; i < wort.length(); i++) {\n    if (wort.charAt(i) == geraten) {\n        maske = maske + geraten;\n    } else {\n        maske = maske + \"#\";\n    }\n}\nSystem.out.println(maske);", loesung: "######mm" }
    erklaerung: Sechs Rauten, dann zwei m.
loesung: |
  **Ansatz:** Jedes Zeichen von „Programm“ wird einzeln mit `'m'` verglichen.
  ---
  Indizes 0 bis 5 (P, r, o, g, r, a) sind kein m und werden zu `#`. Indizes 6 und 7 sind m.
  ---
  Ausgabe `######mm`. Probe: Die Maske ist wie das Wort 8 Zeichen lang.
```

```aufgabe
id: sl-str-spiegeln
titel: Eine Eingabe spiegeln
niveau: 1
lernziel: 4
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 1 (nachgebaut)
angabe: |
  Das Programm liest eine Zeile Text ein. Gib den Text gespiegelt aus, also rückwärts.
  Aus `Hallo` wird `ollaH`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Spiegeln {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Spiegeln {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              String r = "";
              for (int i = text.length() - 1; i >= 0; i--) {
                  r = r + text.charAt(i);
              }
              System.out.println(r);
          }
      }
    tests:
      - { stdin: "Hallo", stdout: "ollaH\n", beschreibung: "Hallo" }
      - { stdin: "a", stdout: "a\n", beschreibung: "ein einziges Zeichen" }
      - { stdin: "Informatik ist schön", stdout: "nöhcs tsi kitamrofnI\n", beschreibung: "mit Leerzeichen" }
    fehler:
      - { wert: 2, meldung: "Bei einem einzigen Zeichen gibt es nur Index 0. Läuft deine Schleife bis einschließlich 0?" }
hinweise:
  - Rückwärts durchlaufen heißt Start bei `text.length() - 1`, Bedingung `i >= 0`, Schritt `i--`.
  - Sammle die Zeichen in einem Ergebnis-String oder gib sie direkt mit `print` aus.
loesung: |
  **Ansatz:** Den String rückwärts durchlaufen und die Zeichen hinten anhängen.
  ---
  ```java
  String r = "";
  for (int i = text.length() - 1; i >= 0; i--) {
      r = r + text.charAt(i);
  }
  System.out.println(r);
  ```
  ---
  Probe mit `a`: Start bei Index 0, ein Durchlauf, Ausgabe `a`. Danach ist `i = -1`, und die Schleife endet.
```

```aufgabe
id: sl-str-jedes-zweite
titel: Jedes zweite Zeichen ohne e
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 2a (Idee nachgebaut, anderes Zeichen, andere Texte und andere Angabe)
angabe: |
  Das Programm liest eine Zeile `text` ein. Betrachte mit einer **while-Schleife** nur die Zeichen an den
  Indizes 1, 3, 5 und so weiter. Gib davon jedes aus, das kein kleines `e` ist. Die ausgegebenen Zeichen
  stehen ohne Abstand hintereinander in einer Zeile.

  `"Ein Esel lernt eben gerne."` liefert `i sllrt n.`, und `"Heute regnet es sehr."` liefert `t nt r`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class JedesZweite {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO: while-Schleife
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class JedesZweite {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              int i = 1;
              while (i < text.length()) {
                  if (text.charAt(i) != 'e') {
                      System.out.print(text.charAt(i));
                  }
                  i += 2;
              }
              System.out.println();
          }
      }
    tests:
      - { stdin: "Ein Esel lernt eben gerne.", stdout: "i sllrt n.\n", beschreibung: "Ein Esel lernt eben gerne." }
      - { stdin: "Heute regnet es sehr.", stdout: "t nt r\n", beschreibung: "Heute regnet es sehr." }
      - { stdin: "x", stdout: "\n", beschreibung: "ein Zeichen: es gibt keinen Index 1" }
    fehler:
      - { wert: 1, meldung: "Beginnst du bei Index 1? Das erste geprüfte Zeichen von „Ein Esel …“ ist das i. Und rückst du mit i += 2 auch dann weiter, wenn das Zeichen ein e ist?" }
hinweise:
  - Start `int i = 1;`, Bedingung `i < text.length()`, am Ende des Rumpfs `i += 2;`.
  - Das `i += 2;` gehört **nicht** ins `if`, sonst bleibt die Schleife bei einem `e` hängen.
loesung: |
  **Ansatz:** Durchlauf in Zweierschritten ab Index 1 mit Filter `!= 'e'`.
  ---
  ```java
  int i = 1;
  while (i < text.length()) {
      if (text.charAt(i) != 'e') {
          System.out.print(text.charAt(i));
      }
      i += 2;
  }
  System.out.println();
  ```
  ---
  Probe mit `"x"`: Die Länge ist 1, also ist `1 < 1` sofort falsch. Es wird nur der Zeilenumbruch ausgegeben.
```

```aufgabe
id: sl-str-bereich-zaehlen
titel: Buchstaben von n bis z zählen
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 2c (Idee nachgebaut, anderer Bereich und andere Angabe)
angabe: |
  Das Programm liest eine Zeile `text` ein. Ermittle mit einer **while-Schleife**, wie viele Zeichen des Textes
  in der zweiten Hälfte des Alphabets liegen, also ein Buchstabe von `n` bis `z` oder von `N` bis `Z` sind. Die
  Buchstaben `n`, `z`, `N` und `Z` zählen mit. Gib die Anzahl aus. `"Heute regnet es sehr."` liefert `8`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class BereichZaehlen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO: while-Schleife
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class BereichZaehlen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              int anzahl = 0;
              int i = 0;
              while (i < text.length()) {
                  char c = text.charAt(i);
                  if ((c >= 'n' && c <= 'z') || (c >= 'N' && c <= 'Z')) {
                      anzahl++;
                  }
                  i++;
              }
              System.out.println(anzahl);
          }
      }
    tests:
      - { stdin: "Heute regnet es sehr.", stdout: "8\n", beschreibung: "Heute regnet es sehr." }
      - { stdin: "Ein Esel lernt eben gerne.", stdout: "8\n", beschreibung: "Ein Esel lernt eben gerne." }
      - { stdin: "NOZ noz AMZ", stdout: "7\n", beschreibung: "Grenzen n, z, N, Z und M" }
    fehler:
      - { wert: 3, meldung: "Prüfe die Grenzen: n und z gehören dazu (also >= und <=), M gehört nicht dazu. Und vergiss die Großbuchstaben nicht." }
hinweise:
  - 'Ein Bereichstest lautet `c >= ''n'' && c <= ''z''`. Für Großbuchstaben brauchst du einen zweiten Bereichstest.'
  - Verbinde die beiden Bereichstests mit `||`. Vergiss `i++` am Ende des Rumpfs nicht.
loesung: |
  **Ansatz:** Zähler-Muster mit `while`. Der Filter besteht aus zwei Bereichen.
  ---
  ```java
  int anzahl = 0;
  int i = 0;
  while (i < text.length()) {
      char c = text.charAt(i);
      if ((c >= 'n' && c <= 'z') || (c >= 'N' && c <= 'Z')) {
          anzahl++;
      }
      i++;
  }
  System.out.println(anzahl);
  ```
  ---
  Probe mit `"NOZ noz AMZ"`: N, O, Z, n, o, z und Z zählen, A und M nicht. Ergebnis 7.
```

```aufgabe
id: sl-str-binaer
titel: Binärzahl in Viererblöcken
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Task 7 (Idee nachgebaut, andere Beispiele)
angabe: |
  Das Programm liest eine **Binärzahl** als String ein, also eine Zahl, die nur aus den Ziffern 0 und 1 besteht, zum Beispiel `110101`. Gib sie in Blöcken zu je vier Ziffern
  aus, **von hinten** gezählt und durch ein Leerzeichen getrennt. Aus `110101` wird `11 0101`, aus `11110000`
  wird `1111 0000`, und `101` bleibt `101`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Bloecke {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String bin = eingabe.nextLine();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Bloecke {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String bin = eingabe.nextLine();
              String r = "";
              int n = bin.length();
              for (int i = 0; i < n; i++) {
                  if (i > 0 && (n - i) % 4 == 0) {
                      r = r + " ";
                  }
                  r = r + bin.charAt(i);
              }
              System.out.println(r);
          }
      }
    tests:
      - { stdin: "110101", stdout: "11 0101\n", beschreibung: "110101" }
      - { stdin: "11110000", stdout: "1111 0000\n", beschreibung: "genau zwei Blöcke, kein Leerzeichen am Anfang" }
      - { stdin: "101", stdout: "101\n", beschreibung: "weniger als vier Ziffern" }
      - { stdin: "100000000", stdout: "1 0000 0000\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Bei 8 Ziffern darf vor der ersten Ziffer kein Leerzeichen stehen. Das Leerzeichen kommt nur zwischen zwei Blöcken." }
hinweise:
  - Ab dem Zeichen an Index `i` bis zum Ende folgen noch `n - i` Zeichen (das Zeichen an Index `i` mitgezählt). Ein neuer Block beginnt, wenn diese Zahl durch 4 teilbar ist.
  - 'Setze das Leerzeichen **vor** das Zeichen, aber nie vor das erste (`i > 0`). Das ist wieder das Zaunpfahlproblem.'
loesung: |
  **Ansatz:** Vorwärts durchlaufen. Vor Index `i` kommt ein Leerzeichen, wenn ab dort noch ein Vielfaches von 4 Zeichen folgt.
  ---
  ```java
  String r = "";
  int n = bin.length();
  for (int i = 0; i < n; i++) {
      if (i > 0 && (n - i) % 4 == 0) {
          r = r + " ";
      }
      r = r + bin.charAt(i);
  }
  System.out.println(r);
  ```
  ---
  Probe mit `110101` (n = 6): Bei `i = 2` folgen noch 4 Zeichen, also ein Leerzeichen davor. Ergebnis `11 0101`. Bei `11110000` wäre bei `i = 0` die Bedingung `(8 - 0) % 4 == 0` wahr, aber `i > 0` verhindert das Leerzeichen am Anfang.
```

```reflexion
frage: Warum steht bei einer Vorwärtsschleife über einen String i < s.length(), bei einer Rückwärtsschleife aber i >= 0 und nicht i > 0?
antwort: |
  Die gültigen Indizes sind 0 bis `s.length() - 1`. Vorwärts darf `i` also höchstens `s.length() - 1` erreichen. Das heißt
  `i < s.length()`, und `<=` würde einen Index zu weit gehen. Rückwärts ist der kleinste gültige Index 0, und das erste
  Zeichen steht genau dort. Mit `i > 0` würde die Schleife vor Index 0 aufhören, und das erste Zeichen fehlte. Beide
  Bedingungen sagen dasselbe: Der Index muss im Bereich von 0 bis Länge minus 1 bleiben.
```


## Suchen und vorzeitig aufhören

```aufgabe
id: sl-such-check-kurzschluss
titel: Wird die rechte Seite noch ausgewertet?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Die Kurzschlussauswertung von `&&` kennst du aus [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).)
teile:
  - typ: ausgabe
    code: |
      int i = 5;
      String s = "abc";
      System.out.println(i < s.length() && s.charAt(i) == 'a');
    loesung: |
      false
    fehler:
      - wert: "true"
        meldung: '`5 < 3` ist falsch. Ein `&&` mit falscher linker Seite ist immer falsch.'
loesung: |
  Links steht `5 < 3`, das ist `false`.
  ---
  Bei `&&` mit falscher linker Seite wertet Java die rechte Seite **gar nicht** aus. Darum gibt es keinen Absturz durch `charAt(5)`, und ausgegeben wird `false`.
```

Viele Aufgaben fragen: **Wo** steht ein Zeichen zum ersten Mal? Java hat dafür die Methode `indexOf`.
`"Programm".indexOf('r')` liefert 1, und `"Programm".indexOf('z')` liefert -1, weil es kein `z` gibt.
Der Wert -1 ist eine Abmachung für „nicht gefunden“, denn -1 ist nie ein gültiger Index.

Im Aufgabenblatt 1 von 2022 war `indexOf` verboten: Man musste die Suche selbst bauen. Genau das üben
wir jetzt. Die Idee: Wir gehen den String von vorne durch und hören **auf**, sobald wir das Zeichen
gefunden haben. Eine Schleife, die abbricht, sobald ein Ziel erreicht ist, heißt **Suchschleife**.

:::beispiel[indexOf selbst gebaut]
```java
String s = "Programm";
char gesucht = 'r';
int i = 0;
while (i < s.length() && s.charAt(i) != gesucht) {
    i++;
}
if (i < s.length()) {
    System.out.println(i);
} else {
    System.out.println(-1);
}
```

- Die Bedingung in Zeile 4 hat **zwei** Teile. Die Schleife läuft weiter, solange `i` noch ein gültiger Index ist **und** das Zeichen dort nicht das gesuchte ist.
- Der Rumpf tut nichts anderes, als `i` weiterzurücken.
- Nach der Schleife gibt es genau zwei Möglichkeiten. Entweder wurde das Zeichen gefunden, dann steht `i` darauf. Oder `i` ist bei `s.length()` angekommen, dann gibt es das Zeichen nicht.

|`i`|`i<8`|`s.charAt(i)`|`!= 'r'`|weiter?|
|---|---|---|---|---|
|0|true|P|true|ja|
|1|true|r|false|nein|

Ausgabe: `1`. Suchen wir stattdessen `'z'`, läuft `i` bis 8. Dann ist `8 < 8` falsch, und die Schleife endet.
Wegen der **Kurzschlussauswertung** wird `charAt(8)` nie aufgerufen: Ist die linke Seite von `&&` schon `false`, wertet Java die rechte Seite gar nicht mehr aus. Ausgabe: `-1`.
:::

```aufgabe
id: sl-such-kakao
titel: Erstes Vorkommen suchen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Kakao";
      int i = 0;
      while (i < s.length() && s.charAt(i) != 'a') {
          i++;
      }
      System.out.println(i);
      int j = 0;
      while (j < s.length() && s.charAt(j) != 'x') {
          j++;
      }
      System.out.println(j);
    loesung: |
      1
      5
    fehler:
      - wert: "3\n5"
        meldung: Die Schleife hört beim **ersten** `a` auf. Das steht an Index 1, gleich nach dem K.
      - wert: "1\n-1"
        meldung: Hier wird `j` direkt ausgegeben, ohne Umrechnung in -1. Nach einer erfolglosen Suche steht `j` auf `s.length()`.
hinweise:
  - Die erste Schleife stoppt, sobald `s.charAt(i)` gleich `'a'` ist.
gefuehrt:
  - text: An welchem Index steht das erste `a` in „Kakao“?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: K hat Index 0, das erste a Index 1. Dort ist `s.charAt(1) != 'a'` falsch, die Schleife endet mit `i = 1`.
  - text: Die zweite Schleife sucht `x`. Bei welchem Wert von `j` wird `j < s.length()` falsch?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: „Kakao“ hat 5 Zeichen. Ohne Treffer läuft `j` bis 5, dann ist `5 < 5` falsch.
  - text: Was wird ausgegeben?
    erklaerung: Erst `1`, dann `5`. Das Programm rechnet den Misserfolg nicht in -1 um.
loesung: |
  **Ansatz:** Beide Schleifen sind Suchschleifen. Sie stoppen beim Treffer oder am Ende des Strings.
  ---
  Erste Suche: Treffer bei Index 1. Zweite Suche: kein Treffer, `j` endet bei der Länge 5.
  ---
  Ausgabe `1` und `5`. Für ein echtes `indexOf` müsste man den zweiten Fall noch in -1 umwandeln.
```

### break und continue

Manchmal ist es bequemer, eine Schleife **mitten im Rumpf** zu verlassen. Dafür gibt es zwei Schlüsselwörter.

:::definition[break und continue]
- `break;` beendet die **ganze** Schleife sofort. Java macht hinter der schließenden Klammer `}` der Schleife weiter.
- `continue;` beendet nur den **aktuellen Durchlauf**. Der Rest des Rumpfs wird übersprungen. Bei `for` folgt danach die Aktualisierung, dann die Bedingung.

Beide wirken auf die **innerste** Schleife, in der sie stehen.
:::

**Beispiel:** Die Suche mit `for` und `break`:

```java
int pos = -1;
for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == gesucht) {
        pos = i;
        break;
    }
}
```

`pos` beginnt mit -1. Beim ersten Treffer wird der Index gespeichert, und `break` beendet die Suche.

**Nicht-Beispiel:** `break` in einem `if` **ohne** umgebende Schleife ist kein Abbruch einer Schleife. Der
Compiler meldet `break outside switch or loop`. Auch `continue` ist **kein** Abbruch: Die Schleife läuft
danach normal weiter. Die EP1-Folien empfehlen, beide sparsam zu verwenden. Eine Bedingung im Kopf, wie im
Beispiel „indexOf selbst gebaut“, ist oft klarer.

:::beispiel[Von hinten sammeln bis zum zweiten n]
Diese Aufgabe ähnelt Aufgabenblatt 1 von 2023. Durchlaufe `"Bananenbrot"` von hinten. Schreibe die Zeichen in
**ursprünglicher** Reihenfolge in einen neuen String, bis das zweite `n` gefunden ist (dieses `n` gehört dazu).

```java
String t = "Bananenbrot";
String r = "";
int anzahlN = 0;
int j = t.length() - 1;
while (j >= 0 && anzahlN < 2) {
    char c = t.charAt(j);
    if (c == 'n') {
        anzahlN++;
    }
    r = c + r;
    j--;
}
System.out.println(r);
```

- Die Schleife läuft rückwärts (`j--`) und hat zwei Abbruchgründe: Anfang erreicht oder zwei `n` gefunden.
- `r = c + r` setzt jedes Zeichen **vor** den bisherigen Inhalt. Weil wir rückwärts lesen, entsteht so wieder die ursprüngliche Reihenfolge.

|`j`|`c`|`anzahlN`|`r` danach|
|---|---|---|---|
|10|t|0|`"t"`|
|9|o|0|`"ot"`|
|8|r|0|`"rot"`|
|7|b|0|`"brot"`|
|6|n|1|`"nbrot"`|
|5|e|1|`"enbrot"`|
|4|n|2|`"nenbrot"`|

Jetzt ist `anzahlN < 2` falsch. Ausgabe: `nenbrot`. Gäbe es weniger als zwei `n`, liefe die Schleife bis
`j = -1` durch, und `r` wäre der ganze Text.
:::

:::achtung[Die Bedingungen in falscher Reihenfolge]
```java
while (s.charAt(i) != gesucht && i < s.length()) {
    i++;
}
```

Solange das Zeichen gefunden wird, fällt der Fehler nicht auf. Fehlt es aber, wird `i` gleich `s.length()`.
Dann wertet Java **zuerst** `s.charAt(i)` aus und stürzt mit `StringIndexOutOfBoundsException` ab. Bei
`"Hallo"` lautet die Meldung `Index 5 out of bounds for length 5`. Die Indexprüfung muss **links** vom
`&&` stehen. Dann schützt die Kurzschlussauswertung den Zugriff.
:::

:::achtung[Das letzte statt des ersten Vorkommens]
```java
int pos = -1;
for (int i = 0; i < s.length(); i++) {
    if (s.charAt(i) == 'a') {
        pos = i;
    }
}
```

Für `"Banane"` erwartet man 1, das Programm liefert `3`. Ohne `break` läuft die Schleife weiter. Jeder spätere
Treffer **überschreibt** `pos`. Am Ende steht der Index des letzten `a` darin. Für das erste Vorkommen brauchst
du `break` oder eine Abbruchbedingung im Kopf.
:::

```aufgabe
id: sl-such-break-continue
titel: break oder continue?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`break` beendet die Schleife, in der es steht, sofort.'
        richtig: true
      - text: '`continue` beendet die Schleife sofort.'
        richtig: false
        erklaerung: '`continue` überspringt nur den Rest des aktuellen Durchlaufs. Die Schleife läuft weiter.'
      - text: 'Nach `continue` wird in einer `for`-Schleife die Aktualisierung (zum Beispiel `i++`) noch ausgeführt.'
        richtig: true
        erklaerung: Bei `for` springt `continue` zur Aktualisierung, dann wird die Bedingung geprüft.
      - text: 'Eine Suchschleife ohne `break`, die bei jedem Treffer `pos = i;` setzt, liefert das erste Vorkommen.'
        richtig: false
        erklaerung: Jeder spätere Treffer überschreibt `pos`. Übrig bleibt das letzte Vorkommen.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`continue` und `break` sind nicht dasselbe. Nur `break` verlässt die Schleife.'
hinweise:
  - 'Merkhilfe: *break* heißt „abbrechen“, *continue* heißt „weitermachen“.'
loesung: |
  **Ansatz:** Die Wirkung beider Schlüsselwörter genau unterscheiden.
  ---
  Aussage 1 und 3 sind richtig. Aussage 2 verwechselt `continue` mit `break`. Aussage 4 übersieht, dass spätere Treffer `pos` überschreiben.
```

```aufgabe
id: sl-such-continue
titel: Überspringen und abbrechen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: Was gibt das Programm aus? Leerzeichen am Zeilenende darfst du weglassen.
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 10; i++) {
          if (i % 3 == 0) {
              continue;
          }
          if (i == 8) {
              break;
          }
          System.out.print(i + " ");
      }
      System.out.println();
    trim: true
    loesung: "1 2 4 5 7 \n"
    fehler:
      - wert: "1 2"
        meldung: '`continue` bei `i = 3` beendet nicht die Schleife, sondern nur diesen Durchlauf. Danach geht es mit `i = 4` weiter.'
      - wert: "1 2 4 5 7 10"
        meldung: Bei `i = 8` greift `break`. Die Schleife ist damit ganz vorbei, 10 kommt nicht mehr.
hinweise:
  - Geh `i` von 1 bis 10 durch. Prüfe für jeden Wert zuerst das `continue`, dann das `break`.
  - '`continue` überspringt die Ausgabe, `break` beendet alles.'
loesung: |
  **Ansatz:** Für jedes `i` entscheiden: übersprungen (Vielfaches von 3), Abbruch (8) oder Ausgabe.
  ---
  1, 2 ausgegeben. 3 übersprungen. 4, 5 ausgegeben. 6 übersprungen. 7 ausgegeben.
  ---
  Bei 8 ist `8 % 3` gleich 2, kein `continue`. Dann greift `break`. Ausgabe `1 2 4 5 7`.
```

```aufgabe
id: sl-such-letztes
titel: Welcher Index bleibt stehen?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Tomate";
      int pos = -1;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == 't' || s.charAt(i) == 'T') {
              pos = i;
          }
      }
      System.out.println(pos);
    loesung: |
      4
    fehler:
      - wert: "0"
        meldung: Das erste T steht an Index 0. Aber die Schleife hat kein `break` und läuft weiter. Ein späterer Treffer überschreibt `pos`.
hinweise:
  - Gibt es ein `break`? Wenn nicht, zählt der letzte Treffer.
  - T0 o1 m2 a3 t4 e5.
loesung: |
  **Ansatz:** Ohne `break` überschreibt jeder Treffer `pos`.
  ---
  Treffer bei Index 0 (T) und Index 4 (t).
  ---
  Der letzte Treffer bleibt stehen: Ausgabe `4`.
```

```aufgabe
id: sl-such-indexof
titel: indexOf selbst bauen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2022, Aufgabe 2b (Idee nachgebaut, anderer Buchstabe, andere Texte und andere Angabe)
angabe: |
  Das Programm liest eine Zeile `text` ein. An welchem Index steht das erste kleine `t`? Finde es mit einer
  **while-Schleife**, die vorne beginnt, und gib den Index aus. Kommt kein kleines `t` vor, gib `-1` aus.
  Die fertigen Methoden `indexOf` und `lastIndexOf` darfst du nicht benutzen.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class SucheT {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO: while-Schleife
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class SucheT {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              int i = 0;
              while (i < text.length() && text.charAt(i) != 't') {
                  i++;
              }
              if (i < text.length()) {
                  System.out.println(i);
              } else {
                  System.out.println(-1);
              }
          }
      }
    tests:
      - { stdin: "Das ist ein Satz.", stdout: "6\n", beschreibung: "Das ist ein Satz." }
      - { stdin: "Kein Treffer hier.", stdout: "-1\n", beschreibung: "nur ein großes T, kein kleines t" }
      - { stdin: "tief", stdout: "0\n", beschreibung: "Treffer an Index 0" }
      - { stdin: "Tante", stdout: "3\n", versteckt: true }
    regeln: { verboteneApi: ["String.indexOf", "String.lastIndexOf", "String.contains"] }
    fehler:
      - { wert: 2, meldung: "Wenn kein kleines t vorkommt, muss -1 erscheinen. Stürzt dein Programm ab? Dann steht die Indexprüfung nicht links vom &&. Zählst du das große T mit? Gesucht ist nur das kleine t." }
      - { wert: 3, meldung: "Ein Treffer an Index 0 muss als 0 ausgegeben werden. Startet deine Suche wirklich bei 0?" }
hinweise:
  - Die Schleife rückt `i` weiter, solange `i` gültig ist und dort kein `t` steht.
  - Nach der Schleife entscheidet `i < text.length()`, ob gefunden wurde.
loesung: |
  **Ansatz:** Suchschleife mit zwei Bedingungen. Die Indexprüfung steht links vom `&&`.
  ---
  ```java
  int i = 0;
  while (i < text.length() && text.charAt(i) != 't') {
      i++;
  }
  if (i < text.length()) {
      System.out.println(i);
  } else {
      System.out.println(-1);
  }
  ```
  ---
  Probe mit „Das ist ein Satz.“: D0 a1 s2, Leerzeichen 3, i4 s5 t6. Ausgabe 6. Bei „Kein Treffer hier.“ zählt das große T nicht, weil `'T' != 't'`. Ausgabe -1.
```

```aufgabe
id: sl-such-von-hinten
titel: Von hinten bis zum dritten e
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 2b (Idee nachgebaut, anderes Zeichen, andere Anzahl und andere Angabe)
angabe: |
  Das Programm liest eine Zeile `text` ein. Lies den Text mit einer **while-Schleife** vom letzten Zeichen
  zum ersten. Baue dabei einen neuen String, der das Ende des Textes in der normalen Lesereihenfolge enthält.
  Hör auf, sobald du das dritte kleine `e` (von hinten gezählt) aufgenommen hast. Enthält der Text weniger
  als drei kleine `e`, besteht der neue String aus dem ganzen Text. Gib den neuen String aus.

  `"Sehen ist leicht."` liefert `ehen ist leicht.`
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class DrittesE {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO: while-Schleife
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class DrittesE {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              String neu = "";
              int anzahl = 0;
              int j = text.length() - 1;
              while (j >= 0 && anzahl < 3) {
                  char c = text.charAt(j);
                  if (c == 'e') {
                      anzahl++;
                  }
                  neu = c + neu;
                  j--;
              }
              System.out.println(neu);
          }
      }
    tests:
      - { stdin: "Sehen ist leicht.", stdout: "ehen ist leicht.\n", beschreibung: "Sehen ist leicht." }
      - { stdin: "Wer weiss, wie weit es geht?", stdout: "eit es geht?\n", beschreibung: "Wer weiss, wie weit es geht?" }
      - { stdin: "Kein e", stdout: "Kein e\n", beschreibung: "nur zwei e: der ganze Text" }
    fehler:
      - { wert: 3, meldung: "Bei weniger als drei e muss die Schleife am Anfang des Textes enden. Prüft deine Bedingung auch j >= 0?" }
      - { wert: 1, meldung: "Kommen die Zeichen in der richtigen Reihenfolge? Beim Rückwärtslesen musst du jedes Zeichen vorne anfügen: neu = c + neu." }
hinweise:
  - Zwei Abbruchgründe gehören in die Bedingung, verbunden mit `&&`.
  - 'Setze jedes gelesene Zeichen **vor** den neuen String: `neu = c + neu;`'
loesung: |
  **Ansatz:** Rückwärts lesen, vorne anfügen, `e` zählen. Abbruch, wenn der Anfang erreicht ist oder drei `e` gezählt sind.
  ---
  ```java
  String neu = "";
  int anzahl = 0;
  int j = text.length() - 1;
  while (j >= 0 && anzahl < 3) {
      char c = text.charAt(j);
      if (c == 'e') {
          anzahl++;
      }
      neu = c + neu;
      j--;
  }
  System.out.println(neu);
  ```
  ---
  Probe mit „Sehen ist leicht.“: Von hinten kommen die e aus „leicht“ und die beiden aus „Sehen“. Beim dritten stoppt die Schleife, das S bleibt draußen.
```

```aufgabe
id: sl-such-kte
titel: Das k-te Vorkommen finden
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Programm liest zuerst eine Zeile `text` und danach eine Zahl `k ≥ 1` ein. Gib den Index des `k`-ten
  Vorkommens des Kleinbuchstabens `'a'` aus. Gibt es weniger als `k` Vorkommen, gib `-1` aus.

  Für `Abrakadabra` und `k = 3` lautet die Ausgabe `7` (das große `A` zählt nicht).
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class KtesA {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              int k = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class KtesA {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              int k = eingabe.nextInt();
              int gefunden = 0;
              int i = 0;
              while (i < text.length() && gefunden < k) {
                  if (text.charAt(i) == 'a') {
                      gefunden++;
                  }
                  i++;
              }
              if (gefunden == k) {
                  System.out.println(i - 1);
              } else {
                  System.out.println(-1);
              }
          }
      }
    tests:
      - { stdin: "Abrakadabra\n3", stdout: "7\n", beschreibung: "Abrakadabra, k = 3" }
      - { stdin: "Abrakadabra\n1", stdout: "3\n", beschreibung: "Abrakadabra, k = 1" }
      - { stdin: "Abrakadabra\n5", stdout: "-1\n", beschreibung: "nur vier kleine a" }
      - { stdin: "Kakao\n2", stdout: "3\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zählt dein Programm das große A mit? Gesucht ist nur der Kleinbuchstabe a." }
      - { wert: 3, meldung: "Wenn es weniger als k Vorkommen gibt, muss -1 erscheinen. Woran erkennst du nach der Schleife, dass nicht genug gefunden wurden?" }
hinweise:
  - Zähle die Treffer mit. Die Schleife darf aufhören, sobald `k` Treffer gezählt sind.
  - 'Achtung: Wenn `i++` nach dem Treffer noch ausgeführt wird, steht `i` danach eins zu weit. Entweder `i - 1` ausgeben oder mit `break` abbrechen, bevor `i` wächst.'
loesung: |
  **Ansatz:** Suchschleife mit Zähler. Abbruch bei `k` Treffern oder am Ende des Textes.
  ---
  ```java
  int gefunden = 0;
  int i = 0;
  while (i < text.length() && gefunden < k) {
      if (text.charAt(i) == 'a') {
          gefunden++;
      }
      i++;
  }
  if (gefunden == k) {
      System.out.println(i - 1);
  } else {
      System.out.println(-1);
  }
  ```
  ---
  Probe mit `Abrakadabra`, `k = 3`: Treffer bei 3, 5 und 7. Nach dem dritten Treffer wird `i` noch zu 8, dann endet die Schleife. Ausgegeben wird `8 - 1 = 7`.
```

```reflexion
frage: In der Suchschleife steht i < s.length() links und s.charAt(i) != gesucht rechts vom &&. Warum ist diese Reihenfolge nicht egal, obwohl „und“ in der Mathematik vertauschbar ist?
antwort: |
  In Java wertet `&&` von links nach rechts aus und hört auf, sobald die linke Seite `false` ist (Kurzschlussauswertung).
  Steht die Indexprüfung links, wird `charAt(i)` nur aufgerufen, wenn `i` ein gültiger Index ist. Steht sie rechts, wird
  `charAt(i)` zuerst aufgerufen, auch mit `i = s.length()`, und das Programm stürzt ab. Der Wahrheitswert wäre in beiden
  Fällen gleich, aber die Nebenwirkung, also der mögliche Absturz, hängt von der Reihenfolge ab.
```


## do-while und die Wahl der passenden Schleife

```aufgabe
id: sl-do-check-keinmal
titel: Keinmal oder einmal?
niveau: 1
art: check
angabe: |
  Wie oft wird der Rumpf von `int n = 0; while (n > 0) { n--; }` ausgeführt?
  (Den Ablauf der while-Schleife zeigt [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).)
teile:
  - typ: zahl
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: Die `while`-Schleife prüft die Bedingung **vor** dem ersten Durchlauf. `0 > 0` ist sofort falsch.
loesung: |
  Zuerst wird `0 > 0` geprüft. Das ist `false`.
  ---
  Also läuft der Rumpf kein einziges Mal.
```

Die `while`-Schleife prüft ihre Bedingung **vor** jedem Durchlauf. Manchmal soll der Rumpf aber in jedem
Fall mindestens einmal laufen. Ein Beispiel ist eine Eingabe, die so lange wiederholt wird, bis sie gültig
ist: Man muss mindestens einmal fragen. Dafür gibt es die dritte Schleifenart.

:::definition[do-while-Schleife]
Eine **do-while-Schleife** hat die Form

```java
do {
    Anweisungen
} while (Bedingung);
```

Zuerst wird der Rumpf ausgeführt. **Danach** wird die Bedingung geprüft. Ist sie `true`, folgt der nächste
Durchlauf. Der Rumpf läuft also **mindestens einmal**. Man nennt sie **fußgesteuert**, weil die Prüfung am
Fuß der Schleife steht. Nach `while (Bedingung)` steht hier ein **Strichpunkt**, weil die ganze Konstruktion
eine Anweisung ist.
:::

**Beispiel:** `do { x++; } while (x < 3);` erhöht `x` mindestens einmal, auch wenn `x` schon 10 ist.

**Nicht-Beispiel:** `while (x < 3) { x++; }` ist **keine** do-while-Schleife, auch wenn das Wort `while`
vorkommt. Hier steht die Bedingung vorne. Bei `x = 10` läuft der Rumpf keinmal.

:::beispiel[Ziffern rückwärts ausgeben, auch für 0]
Dieses Beispiel stammt aus den EP1-Folien. Die Ziffern einer Zahl `i ≥ 0` sollen von hinten nach vorne
ausgegeben werden, jede in einer eigenen Zeile. `i % 10` ist die letzte Ziffer, `i / 10` schneidet sie ab.

```java
int i = 0;
while (i > 0) {
    System.out.println(i % 10);
    i = i / 10;
}
```

Für `i = 0` gibt diese Version **nichts** aus, denn `0 > 0` ist schon beim ersten Prüfen falsch. Die Zahl 0
hat aber eine Ziffer, die 0. Mit `do-while` stimmt es:

```java
int i = 0;
do {
    System.out.println(i % 10);
    i = i / 10;
} while (i > 0);
```

Der Rumpf läuft einmal: Er gibt `0 % 10 = 0` aus, dann wird `i = 0 / 10 = 0`. Jetzt ist `0 > 0` falsch, die
Schleife endet. Ausgabe: `0`. Für `i = 352` laufen beide Versionen gleich: 2, 5, 3. Die Folien weisen auch
darauf hin, dass `i >= 0` als Bedingung in der `while`-Version **nicht** hilft: Dann würde `i` bei 0 bleiben
und die Schleife nie enden.
:::

```aufgabe
id: sl-do-einmal
titel: Mindestens einmal
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int x = 10;
      do {
          System.out.println(x);
          x += 4;
      } while (x < 10);
      System.out.println("x = " + x);
    loesung: |
      10
      x = 14
    fehler:
      - wert: "x = 10"
        meldung: Bei `do-while` läuft der Rumpf zuerst. Die Bedingung wird erst danach geprüft.
      - wert: "10\nx = 10"
        meldung: Im ersten Durchlauf wird nach der Ausgabe auch `x += 4` ausgeführt. Danach ist `x` gleich 14.
hinweise:
  - Erst Rumpf, dann Prüfung. Was ist `x` nach dem ersten Durchlauf?
loesung: |
  **Ansatz:** Der Rumpf läuft einmal ohne Prüfung. Er gibt 10 aus und setzt `x` auf 14.
  ---
  Dann wird `14 < 10` geprüft. Das ist falsch, die Schleife endet. Ausgabe `10` und `x = 14`.
```

Wie entscheidest du, welche Schleife passt? Alle drei sind gleich mächtig: Jede lässt sich in jede andere
umbauen. Es geht um **Lesbarkeit**. Die EP1-Folien nennen die Regeln für `for` und `while`. Die Regel für
`do-while` folgt direkt aus ihrer Definition.

|Schleife|passt, wenn …|
|---|---|
|`for`|Start, Ende und Schrittweite vorher feststehen|
|`while`|nur das Endkriterium feststeht|
|`do-while`|der Rumpf mindestens einmal laufen muss|

Über ein Intervall `[1, 100]` läuft man mit `for`. Halbieren, bis 0 herauskommt, oder Suchen, bis das
Zeichen gefunden ist, schreibt man mit `while`. Wie man Eingaben auf Gültigkeit prüft, lernst du in
[8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).

:::beispiel[Ziffern zählen mit do-while]
Wie viele Ziffern hat eine Zahl `n ≥ 0`?

```java
int n = 4096;
int ziffern = 0;
do {
    n = n / 10;
    ziffern++;
} while (n > 0);
System.out.println(ziffern);
```

|Durchlauf|`n` danach|`ziffern` danach|`n>0`|
|---|---|---|---|
|1|409|1|true|
|2|40|2|true|
|3|4|3|true|
|4|0|4|false|

Ausgabe: `4`. Für `n = 0` läuft der Rumpf einmal, und die Ausgabe ist `1`. Das ist richtig, denn die Zahl 0
hat eine Ziffer. Eine `while`-Schleife mit derselben Bedingung hätte 0 geliefert.
:::

:::achtung[Der fehlende Strichpunkt]
```java
int x = 0;
do {
    x++;
} while (x < 3)
System.out.println(x);
```

Der Compiler meldet `';' expected` in der Zeile mit `while`. Bei `do-while` ist der Strichpunkt nach der
Bedingung Pflicht. Bei `while` und `for` dagegen darf dort **kein** Strichpunkt stehen. Merke dir: Nach
`while (...)` steht genau dann ein Strichpunkt, wenn direkt davor die schließende Klammer `}` eines `do`-Blocks steht.
:::

:::achtung[Eine Ausgabe zu viel]
```java
int x = 5;
do {
    System.out.println(x);
    x++;
} while (x < 0);
```

Wer „solange `x < 0` ist, gib `x` aus“ meint, erwartet keine Ausgabe, denn 5 ist nicht negativ. Ausgegeben
wird trotzdem `5`. Die Prüfung kommt erst nach dem ersten Durchlauf. Wenn der Rumpf auch keinmal laufen
können soll, nimm `while`.
:::

```aufgabe
id: sl-do-welche-schleife
titel: Welche Schleifenart passt?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Wähle für jede Aufgabe die Schleifenart, die am besten passt.
teile:
  - typ: auswahl
    label: a) Alle Zahlen im Intervall [10, 90] in Fünferschritten ausgeben.
    optionen: ['`for`', '`while`', '`do-while`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das geht auch mit `while`, aber Start, Ende und Schrittweite stehen fest. Dafür ist `for` am klarsten.
      - wert: 2
        meldung: Hier gibt es keinen Grund, den Rumpf zwingend einmal auszuführen. Start, Ende und Schrittweite stehen fest.
  - typ: auswahl
    label: b) Eine Zahl so oft durch 3 teilen, bis sie kleiner als 1 ist, und dabei mitzählen.
    optionen: ['`for`', '`while`', '`do-while`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Wie oft geteilt wird, steht vorher nicht fest. Es gibt nur ein Endkriterium.
      - wert: 2
        meldung: Ist die Zahl von Anfang an kleiner als 1, soll gar nicht geteilt werden. Der Rumpf darf also auch keinmal laufen.
  - typ: auswahl
    label: c) Eine Zahl würfeln und so lange wiederholen, bis eine 6 kommt.
    optionen: ['`for`', '`while`', '`do-while`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Zahl der Würfe steht vorher nicht fest.
      - wert: 1
        meldung: Mit `while` müsstest du schon vor der Schleife einmal würfeln. Gewürfelt wird aber mindestens einmal, das ist der typische Fall für `do-while`.
hinweise:
  - Frag dich jeweils, ob die Anzahl vorher feststeht und ob der Rumpf mindestens einmal laufen muss.
loesung: |
  **Ansatz:** Faustregeln: feste Grenzen `for`, nur Endkriterium `while`, mindestens einmal `do-while`.
  ---
  a) feste Grenzen und Schrittweite: `for`. b) nur Endkriterium, eventuell keinmal: `while`. c) mindestens ein Wurf: `do-while`.
```

```aufgabe
id: sl-do-vergleich
titel: while und do-while nebeneinander
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 3;
      while (a < 3) {
          System.out.print("W");
          a++;
      }
      int b = 3;
      do {
          System.out.print("D");
          b++;
      } while (b < 3);
      System.out.println();
      System.out.println(a + " " + b);
    loesung: |
      D
      3 4
    fehler:
      - wert: "WD\n4 4"
        meldung: Die `while`-Schleife prüft vor dem ersten Durchlauf. `3 < 3` ist falsch, also kein W und `a` bleibt 3.
      - wert: "\n3 3"
        meldung: Die `do-while`-Schleife führt den Rumpf zuerst aus. Ein D wird ausgegeben, und `b` wird 4.
hinweise:
  - Beide Bedingungen lauten `< 3`, und beide Variablen starten bei 3.
  - Entscheidend ist, **wann** geprüft wird.
gefuehrt:
  - text: Läuft der Rumpf der `while`-Schleife mindestens einmal?
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [1] }
    erklaerung: '`3 < 3` ist falsch, und die Prüfung kommt zuerst. Kein W, `a` bleibt 3.'
  - text: Wie oft läuft der Rumpf der `do-while`-Schleife?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Einmal ohne Prüfung. Danach ist `b = 4`, und `4 < 3` ist falsch.
  - text: Welchen Wert hat `b` am Ende?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Im einzigen Durchlauf wurde `b++` ausgeführt.
  - text: Wie sieht die Ausgabe also aus?
    erklaerung: Erste Zeile `D`, zweite Zeile `3 4`.
loesung: |
  **Ansatz:** Gleiche Bedingung, gleicher Start, aber unterschiedlicher Prüfzeitpunkt.
  ---
  `while`: `3 < 3` ist falsch, der Rumpf läuft keinmal. `do-while`: Der Rumpf läuft einmal, gibt D aus und erhöht `b` auf 4.
  ---
  Danach beendet `println()` die erste Zeile. Ausgabe: `D` und `3 4`.
```

```aufgabe
id: sl-do-umformen
titel: Eine for-Schleife als while-Schleife
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ergänze die Lücken so, dass die `while`-Schleife genau dasselbe ausgibt wie
  `for (int i = 10; i > 0; i -= 3) { System.out.println(i); }`.
teile:
  - typ: lueckentext
    code: |
      int i = ___;
      while (___) {
          System.out.println(i);
          ___;
      }
    luecken: [["10"], ["i > 0", "0 < i", "i >= 1"], ["i -= 3", "i = i - 3"]]
    fehler:
      - wert: ["10", "i > 0", "i--"]
        meldung: Die Aktualisierung der `for`-Schleife lautet `i -= 3`. Sie wird unverändert ans Ende des Rumpfs übernommen.
hinweise:
  - Die drei Teile des `for`-Kopfes wandern an drei Stellen. Welcher kommt vor die Schleife, welcher in die Klammer, welcher ans Ende?
  - Initialisierung vor die Schleife, Bedingung in den Kopf, Aktualisierung als letzte Anweisung in den Rumpf.
loesung: |
  **Ansatz:** `for (A; B; C) { R }` wird zu `A; while (B) { R C; }`.
  ---
  A ist `int i = 10`, B ist `i > 0`, C ist `i -= 3`.
  ---
  Beide Schleifen geben 10, 7, 4, 1 aus. Danach ist `i = -2`, und `-2 > 0` ist falsch.
```

```aufgabe
id: sl-do-aussagen
titel: Aussagen über Schleifen
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Jede `for`-Schleife lässt sich in eine gleichwertige `while`-Schleife umformen.
        richtig: true
        erklaerung: 'Initialisierung vor die Schleife, Bedingung in den Kopf, Aktualisierung ans Ende des Rumpfs.'
      - text: Der Rumpf einer `do-while`-Schleife wird mindestens einmal ausgeführt.
        richtig: true
      - text: Der Rumpf einer `while`-Schleife wird mindestens einmal ausgeführt.
        richtig: false
        erklaerung: Ist die Bedingung schon beim ersten Prüfen falsch, läuft er keinmal.
      - text: 'Nach `do { ... } while (x < 5)` darf der Strichpunkt fehlen.'
        richtig: false
        erklaerung: 'Bei `do-while` ist der Strichpunkt Pflicht. Der Compiler meldet sonst `'';'' expected`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: Denk an eine `while`-Schleife, deren Bedingung schon am Anfang falsch ist.
hinweise:
  - Überlege für jede Aussage ein Gegenbeispiel. Findest du keines, ist sie wahr.
  - Kopfgesteuert heißt Prüfung vorher, fußgesteuert heißt Prüfung nachher.
loesung: |
  **Ansatz:** Für jede Aussage nach einem Gegenbeispiel suchen.
  ---
  Aussagen 1 und 2 sind wahr. Gegenbeispiel zu Aussage 3: eine Bedingung, die schon beim ersten Prüfen falsch ist, etwa `n > 0` mit `n = 0`.
  ---
  Aussage 4 ist falsch, der Strichpunkt ist bei `do-while` Pflicht.
```

```aufgabe
id: sl-do-ziffern
titel: Ziffern von hinten ausgeben
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Das Programm liest eine ganze Zahl `n ≥ 0` ein. Gib ihre Ziffern von hinten nach vorne aus, jede in einer
  eigenen Zeile. Für `n = 0` wird `0` ausgegeben. Für `1000` sind es die Zeilen 0, 0, 0 und 1.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class ZiffernRueckwaerts {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class ZiffernRueckwaerts {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              int n = eingabe.nextInt();
              do {
                  System.out.println(n % 10);
                  n = n / 10;
              } while (n > 0);
          }
      }
    tests:
      - { stdin: "352", stdout: "2\n5\n3\n", beschreibung: "352" }
      - { stdin: "0", stdout: "0\n", beschreibung: "0 hat eine Ziffer" }
      - { stdin: "1000", stdout: "0\n0\n0\n1\n", beschreibung: "Nullen am Ende" }
      - { stdin: "7", stdout: "7\n", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Für 0 erscheint nichts? Eine while-Schleife mit n > 0 läuft dann keinmal. Der Rumpf muss mindestens einmal laufen." }
hinweise:
  - Die letzte Ziffer ist `n % 10`, und `n / 10` schneidet sie ab.
  - Weil auch 0 eine Ziffer ausgeben soll, muss der Rumpf mindestens einmal laufen. Welche Schleifenart garantiert das?
loesung: |
  **Ansatz:** Letzte Ziffer ausgeben, abschneiden, wiederholen. Mindestens einmal, also `do-while`.
  ---
  ```java
  do {
      System.out.println(n % 10);
      n = n / 10;
  } while (n > 0);
  ```
  ---
  Probe mit 1000: Ausgaben 0, 0, 0, 1, danach ist `n = 0` und die Schleife endet. Probe mit 0: eine Ausgabe `0`.
```

```reflexion
frage: Man kann jede do-while-Schleife auch mit while schreiben. Wie geht das, und warum ist do-while trotzdem manchmal besser?
antwort: |
  Man schreibt den Rumpf einmal vor die Schleife und danach eine while-Schleife mit demselben Rumpf:
  `R; while (B) { R }`. Das ist gleichwertig, verdoppelt aber den Code. Ändert man später den Rumpf, muss man beide
  Kopien ändern, und vergisst man eine, entsteht ein Fehler. Eine andere Möglichkeit ist eine Hilfsvariable wie
  `boolean erstes = true;` in der Bedingung. Das macht den Code länger. `do-while` drückt „mindestens einmal“ direkt aus.
```


## Verschachtelte Schleifen

```aufgabe
id: sl-nest-check-durchlaeufe
titel: Durchläufe einer einfachen Schleife
niveau: 1
art: check
angabe: |
  Wie oft läuft der Rumpf von `for (int j = 0; j < 6; j++) { ... }`?
  (Durchläufe zählen: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).)
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "7"
        meldung: Mit `<` ist der Endwert 6 selbst nicht dabei. `j` läuft 0, 1, 2, 3, 4, 5.
      - wert: "5"
        meldung: Der Start ist 0, nicht 1. Zähle die Werte 0 bis 5.
loesung: |
  `j` nimmt die Werte 0 bis 5 an.
  ---
  Das sind 6 − 0 = 6 Durchläufe.
```

Eine Schleife ist selbst eine Anweisung. Deshalb darf sie im Rumpf einer anderen Schleife stehen. Man
spricht von **verschachtelten Schleifen** mit einer **äußeren** und einer **inneren** Schleife. Die wichtigste
Regel lautet so. Für jeden einzelnen Durchlauf der äußeren Schleife läuft die innere Schleife **komplett
von vorne bis hinten**. Wie bei einer Uhr: Der Minutenzeiger macht eine ganze Runde, bevor der Stundenzeiger einen
Schritt weiterrückt.

:::beispiel[Ein Rechteck aus Sternen]
```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

- Die äußere Schleife mit `i` zählt die **Zeilen**: 0, 1, 2.
- Die innere Schleife mit `j` zählt die **Sterne in einer Zeile**: 0, 1, 2, 3. Sie gibt mit `print` aus, also ohne Zeilenumbruch.
- `System.out.println();` steht nach der inneren, aber noch in der äußeren Schleife. Es beendet jede Zeile genau einmal.

So entwickeln sich die beiden Laufvariablen für die erste Zeile und den Beginn der zweiten:

|Schritt|`i`|`j`|Ausgabe|
|---|---|---|---|
|1|0|0|`*`|
|2|0|1|`*`|
|3|0|2|`*`|
|4|0|3|`*`|
|5|0|–|Zeilenumbruch|
|6|1|0|`*`|

Bei `i = 0` läuft `j` einmal ganz durch, dann kommt der Zeilenumbruch. Erst danach wird `i` zu 1, und `j`
beginnt **wieder bei 0**. Das Ergebnis sind drei Zeilen mit je vier Sternen, also 3 · 4 = 12 Sterne.
:::

Hängt die Grenze der inneren Schleife von der äußeren Laufvariable ab, entstehen Dreiecke. Das ist die
Grundidee hinter den Konsolenmustern aus
[5.1 Konsolenmuster Zeile für Zeile planen](/lernen/ep1/grafik/konsolenmuster-zeile-fuer-zeile-planen).

:::beispiel[Ein Dreieck: die innere Grenze wächst]
```java
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Die innere Bedingung lautet `j <= i`. Bei `i = 1` läuft die innere Schleife einmal, bei `i = 2` zweimal und so
weiter.

|`i`|innere Durchläufe|Zeile|
|---|---|---|
|1|1|`*`|
|2|2|`**`|
|3|3|`***`|
|4|4|`****`|

Insgesamt sind es 1 + 2 + 3 + 4 = 10 Sterne. Allgemein ergibt 1 + 2 + … + n den Wert n · (n + 1) / 2. Für n = 4
ist das 4 · 5 / 2 = 10.
:::

:::merke[Durchläufe verschachtelter Schleifen zählen]
1. Hängt die innere Grenze nicht von der äußeren Variable ab: äußere Anzahl mal innere Anzahl.
2. Hängt sie davon ab: Für jeden Wert der äußeren Variable die inneren Durchläufe einzeln bestimmen und addieren.
3. Kleine Tabelle mit einer Zeile je äußerem Durchlauf anlegen. Sie verhindert Zählfehler.
:::

```aufgabe
id: sl-nest-muster
titel: Ein Zahlendreieck
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 3; i++) {
          for (int j = 1; j <= i; j++) {
              System.out.print(j);
          }
          System.out.println();
      }
    loesung: |
      1
      12
      123
    fehler:
      - wert: "1\n22\n333"
        meldung: Ausgegeben wird `j`, nicht `i`. Die innere Schleife zählt in jeder Zeile wieder ab 1.
      - wert: "123\n123\n123"
        meldung: Die innere Grenze ist `j <= i`, nicht eine feste Zahl. In Zeile 1 läuft sie nur einmal.
hinweise:
  - Für jedes `i` läuft `j` von 1 bis `i`. Ausgegeben wird `j`.
loesung: |
  **Ansatz:** Für jede Zeile (Wert von `i`) die Werte von `j` aufschreiben.
  ---
  `i = 1`: j = 1. `i = 2`: j = 1, 2. `i = 3`: j = 1, 2, 3. Nach jeder Zeile folgt ein Zeilenumbruch.
  ---
  Ausgabe `1`, `12`, `123` in drei Zeilen.
```

```aufgabe
id: sl-nest-anzahl
titel: Wie viele Sterne?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Wie viele Sterne gibt dieses Programm insgesamt aus?
  ```java
  for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 6; j++) {
          System.out.print("*");
      }
      System.out.println();
  }
  ```
teile:
  - typ: zahl
    loesung: "4 * 6"
    fehler:
      - wert: "10"
        meldung: Die Anzahlen werden nicht addiert. Die innere Schleife läuft für **jeden** der 4 äußeren Durchläufe ganz durch.
      - wert: "35"
        meldung: Mit `<` zählt der Endwert nicht mit. Außen sind es 4, innen 6 Durchläufe, nicht 5 und 7.
hinweise:
  - Die innere Grenze hängt nicht von `i` ab. Multipliziere.
loesung: |
  **Ansatz:** Feste innere Grenze, also äußere mal innere Anzahl.
  ---
  Außen 4 Durchläufe (0 bis 3), innen 6 (0 bis 5). Insgesamt 4 · 6 = 24 Sterne in 4 Zeilen.
```

:::achtung[Der Zeilenumbruch in der falschen Schleife]
```java
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.print("*");
        System.out.println();
    }
}
```

Gewünscht sind zwei Zeilen mit je drei Sternen. Ausgegeben werden **sechs** Zeilen mit je einem Stern. Das
`println()` steht in der **inneren** Schleife und läuft deshalb nach jedem einzelnen Stern. Es gehört zwischen die
beiden schließenden Klammern: nach der inneren Schleife, aber noch in der äußeren.
:::

:::achtung[Dieselbe Laufvariable innen und außen]
```java
for (int i = 0; i < 3; i++) {
    for (int i = 0; i < 2; i++) {
        System.out.print("*");
    }
}
```

Der Compiler meldet `variable i is already defined in method main(String[])`. Die äußere Variable `i` ist im
ganzen Rumpf der äußeren Schleife sichtbar, also auch innen. Eine zweite Variable mit demselben Namen ist dort
verboten. Nimm für die innere Schleife einen anderen Namen, üblich ist `j`.
:::

```aufgabe
id: sl-nest-trace
titel: Zwei Laufvariablen verfolgen
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Fülle die Trace-Tabelle aus. Jede Zeile gehört zu einem Durchlauf der **inneren** Schleife.
  ```java
  for (int i = 0; i < 2; i++) {
      for (int j = 0; j < 3; j++) {
          System.out.print(i + j);
      }
  }
  ```
teile:
  - typ: trace
    spalten: [i, j, Ausgabe]
    vorgabe: 1
    loesung: [[0, 0, 0], [0, 1, 1], [0, 2, 2], [1, 0, 1], [1, 1, 2], [1, 2, 3]]
    fehler:
      - wert: ["0", "0", "0", "0", "1", "1", "0", "2", "2", "1", "3", "4", "1", "4", "5", "1", "5", "6"]
        meldung: Die innere Schleife beginnt bei jedem neuen äußeren Durchlauf wieder bei `j = 0`. Sie zählt nicht weiter.
hinweise:
  - Für `i = 0` läuft `j` ganz durch, dann für `i = 1` noch einmal von vorne.
  - '`i + j` sind zwei `int`-Werte und werden addiert. Ausgegeben wird die Summe.'
loesung: |
  **Ansatz:** Für jedes `i` alle Werte von `j` auflisten.
  ---
  `i = 0`: j = 0, 1, 2 mit Ausgaben 0, 1, 2. `i = 1`: j beginnt wieder bei 0, Ausgaben 1, 2, 3.
  ---
  Gesamtausgabe in einer Zeile: `012123`. Es gibt 2 · 3 = 6 innere Durchläufe.
```

```aufgabe
id: sl-nest-tabelle
titel: Eine kleine Malreihe
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: Was gibt das Programm aus? Leerzeichen am Zeilenende darfst du weglassen.
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 3; i++) {
          for (int j = 1; j <= 4; j++) {
              System.out.print(i * j + " ");
          }
          System.out.println();
      }
    trim: true
    loesung: "1 2 3 4 \n2 4 6 8 \n3 6 9 12 \n"
    fehler:
      - wert: "1 2 3\n2 4 6\n3 6 9\n4 8 12"
        meldung: Die äußere Schleife bestimmt die Zeilen. `i` läuft bis 3, also gibt es 3 Zeilen mit je 4 Zahlen.
hinweise:
  - Jede Zeile gehört zu einem Wert von `i`. In der Zeile stehen `i * 1` bis `i * 4`.
  - '`i * j + " "`: Punkt vor Strich, erst wird multipliziert, dann wird das Leerzeichen angehängt.'
loesung: |
  **Ansatz:** Zeile `i` enthält die Vielfachen von `i` von 1 · i bis 4 · i.
  ---
  Zeile 1: 1 2 3 4. Zeile 2: 2 4 6 8. Zeile 3: 3 6 9 12.
  ---
  Weil `*` vor `+` ausgewertet wird, wird erst gerechnet und dann ein Leerzeichen angehängt.
```

```aufgabe
id: sl-nest-zeile-mehr
titel: Eine Zeile mehr
niveau: 2
lernziel: 7
kompetenz: verstehen
quelle: TUWEL-Test zur Vorbereitung 1 WS2021, Frage 6 (Idee nachgebaut, anderes Programm und andere Optionen)
angabe: |
  ```java
  int n = 3;
  for (int z = 1; z <= n; z++) {          // Zeile A
      for (int s = 0; s < z + 2; s++) {   // Zeile B
          System.out.print("o");
      }
      System.out.println();
  }
  ```
  Nach welcher Änderung gibt das Programm genau **eine Zeile mehr** aus als jetzt?
teile:
  - typ: auswahl
    optionen:
      - 'In Zeile A den Startwert `z = 1` durch `z = 0` ersetzen'
      - 'In Zeile A die Bedingung `z <= n` durch `z < n` ersetzen'
      - 'In Zeile B die Bedingung `s < z + 2` durch `s <= z + 2` ersetzen'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit `z < n` läuft `z` nur noch von 1 bis 2. Die äußere Schleife läuft dann einmal **weniger**.'
      - wert: 2
        meldung: Zeile B gehört zur inneren Schleife. Sie bestimmt, wie viele Zeichen in einer Zeile stehen. Jede Zeile wird länger, aber es gibt nicht mehr Zeilen.
hinweise:
  - Welche der beiden Schleifen bestimmt die Anzahl der Zeilen? Wo steht das `println()`?
  - Zähle die Werte von `z` jetzt und nach jeder Änderung.
loesung: |
  **Ansatz:** Die Zeilenzahl hängt nur an der äußeren Schleife, denn `println()` steht dort.
  ---
  Jetzt läuft `z` von 1 bis 3, das sind 3 Zeilen. Mit Start bei 0 läuft `z` von 0 bis 3, das sind 4 Zeilen. Dazu kommt oben eine Zeile mit zwei `o`.
  ---
  `z < n` ergibt nur 2 Zeilen. `s <= z + 2` verlängert jede Zeile um ein Zeichen. Richtig ist Option 1.
```

```aufgabe
id: sl-nest-halb
titel: Wenn die innere Grenze von i abhängt
niveau: 3
lernziel: 7
kompetenz: rechnen
quelle: TUWEL-Test 1 WS2021 vom 26.11.2021, Frage 6 (Idee nachgebaut, anderes Programm und andere Änderung)
angabe: |
  ```java
  int n = 5;
  for (int i = 1; i <= n; i++) {
      for (int j = 0; j < 4; j++) {      // Zeile C
          System.out.print("o");
      }
      System.out.println();
  }
  ```
  a) Wie oft wird `o` ausgegeben?
  b) Zeile C wird durch `for (int j = 0; j < i / 2; j++) {` ersetzt. Wie oft wird `o` jetzt ausgegeben?
teile:
  - typ: zahl
    label: a) ursprünglich
    loesung: "5 * 4"
    fehler:
      - wert: "25"
        meldung: Die innere Bedingung lautet `j < 4`. `j` läuft also 0, 1, 2, 3, das sind 4 Werte, nicht 5.
      - wert: "16"
        meldung: Die äußere Bedingung lautet `i <= n`. `i` läuft also 1, 2, 3, 4, 5, das sind 5 Werte.
  - typ: zahl
    label: b) mit `j < i / 2`
    loesung: "0 + 1 + 1 + 2 + 2"
    fehler:
      - wert: "7.5"
        meldung: '`i / 2` ist Ganzzahldivision, denn `i` und 2 sind `int`. Also ist `1 / 2 = 0`, `3 / 2 = 1` und `5 / 2 = 2`.'
      - wert: "11"
        meldung: 'Mit `<` zählt der Wert `i / 2` selbst nicht mit. Bei `i = 1` ist `i / 2 = 0`, und `0 < 0` ist falsch: Die innere Schleife läuft keinmal.'
      - wert: "15"
        meldung: Die neue Grenze ist `i / 2`, nicht `i`. Bestimme `i / 2` für jedes `i` von 1 bis 5.
hinweise:
  - 'Für a): Die äußere Schleife läuft 5-mal, die innere hat feste Grenzen.'
  - 'Für b): Lege eine Tabelle mit `i` und `i / 2` an. Die innere Schleife läuft dann genau `i / 2` Mal.'
gefuehrt:
  - text: Wie oft läuft die äußere Schleife?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '`i` läuft von 1 bis 5, weil `<=` den Endwert einschließt.'
  - text: Wie oft läuft die innere Schleife ursprünglich je äußerem Durchlauf?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '`j` = 0, 1, 2, 3 erfüllen `j < 4`.'
  - text: Welche Werte hat `i / 2` für `i` = 1 bis 5?
    erklaerung: 0, 1, 1, 2, 2, denn bei der Ganzzahldivision fällt der Rest weg. Mit `j < i / 2` läuft die innere Schleife also 0, 1, 1, 2 und 2 Mal.
  - text: Wie oft wird `o` mit der geänderten Zeile C ausgegeben?
    teil: { typ: zahl, loesung: "6" }
    erklaerung: 0 + 1 + 1 + 2 + 2 = 6.
loesung: |
  **Ansatz:** a) feste Grenzen, also multiplizieren. b) Grenze hängt von `i` ab, also je Zeile zählen und addieren.
  ---
  a) 5 äußere mal 4 innere Durchläufe: 20-mal `o`.
  ---
  b) `i / 2` ist 0, 1, 1, 2, 2. Die innere Schleife läuft jeweils so oft: 0 + 1 + 1 + 2 + 2 = 6. Die erste Zeile bleibt dabei leer, denn bei `i = 1` läuft die innere Schleife keinmal.
```

```aufgabe
id: sl-nest-teilwort
titel: Ein Teilwort zählen
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Programm liest zwei Zeilen ein: einen Text und ein Suchwort. Gib aus, an wie vielen Stellen das Suchwort im
  Text beginnt. Überlappende Treffer zählen mit: In `banana` kommt `ana` zweimal vor. Groß- und Kleinschreibung
  wird unterschieden. Verwende nur `length()` und `charAt()`, keine weiteren String-Methoden.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Teilwort {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              String wort = eingabe.nextLine();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Teilwort {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              String wort = eingabe.nextLine();
              int treffer = 0;
              for (int i = 0; i + wort.length() <= text.length(); i++) {
                  int j = 0;
                  while (j < wort.length() && text.charAt(i + j) == wort.charAt(j)) {
                      j++;
                  }
                  if (j == wort.length()) {
                      treffer++;
                  }
              }
              System.out.println(treffer);
          }
      }
    tests:
      - { stdin: "banana\nana", stdout: "2\n", beschreibung: "banana, ana: überlappend" }
      - { stdin: "Ein Bein, kein Schwein\nein", stdout: "3\n", beschreibung: "Groß- und Kleinschreibung" }
      - { stdin: "abc\nabcd", stdout: "0\n", beschreibung: "Suchwort länger als Text" }
      - { stdin: "aaa\naa", stdout: "2\n", versteckt: true }
    regeln: { erlaubteApi: ["String.length", "String.charAt", "Scanner"] }
    fehler:
      - { wert: 3, meldung: "Wenn das Suchwort länger als der Text ist, darf kein charAt hinter das Ende greifen. Die äußere Schleife darf nur Startpositionen probieren, an denen das ganze Wort noch Platz hat." }
      - { wert: 1, meldung: "Zählst du überlappende Treffer? Nach einem Treffer bei Index 1 muss die Suche bei Index 2 weitergehen, nicht hinter dem Treffer." }
hinweise:
  - Die äußere Schleife probiert jede Startposition `i` im Text. Die innere vergleicht das Suchwort Zeichen für Zeichen ab dieser Position.
  - 'Die innere Schleife ist eine Suchschleife: Sie läuft, solange `j < wort.length()` und die Zeichen übereinstimmen. Ein Treffer liegt vor, wenn danach `j == wort.length()` ist. Die äußere Bedingung `i + wort.length() <= text.length()` verhindert, dass du über das Textende hinaus liest.'
loesung: |
  **Ansatz:** Verschachtelte Schleifen. Außen alle möglichen Startpositionen, innen ein zeichenweiser Vergleich mit Abbruch beim ersten Unterschied.
  ---
  ```java
  int treffer = 0;
  for (int i = 0; i + wort.length() <= text.length(); i++) {
      int j = 0;
      while (j < wort.length() && text.charAt(i + j) == wort.charAt(j)) {
          j++;
      }
      if (j == wort.length()) {
          treffer++;
      }
  }
  System.out.println(treffer);
  ```
  ---
  Probe mit `banana` und `ana`: Startpositionen 0 bis 3. Bei 1 und 3 stimmen alle drei Zeichen überein. Ergebnis 2. Für `abc` und `abcd` gilt schon bei `i = 0`, dass `0 + 4 <= 3` falsch ist. Ergebnis 0.
```

```reflexion
frage: Warum ist die Gesamtzahl der inneren Durchläufe bei festen Grenzen ein Produkt und keine Summe? Was ändert sich, wenn die innere Grenze von i abhängt?
antwort: |
  Die innere Schleife läuft bei jedem äußeren Durchlauf vollständig. Bei 4 äußeren und 6 inneren Durchläufen kommt der
  Block „6 innere Durchläufe“ viermal vor, also 6 + 6 + 6 + 6 = 4 · 6. Ein Produkt ist eine wiederholte Summe gleicher
  Summanden. Hängt die innere Grenze von `i` ab, sind die Summanden verschieden, zum Beispiel 1 + 2 + 3 + 4. Dann muss man
  sie einzeln bestimmen und addieren. Mit genau dieser Rechnung schätzt man später auch ab, wie lange ein Programm läuft.
```


## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben gemischt, auch mit Stoff aus [Kapitel 2 (Ausdrücke, Datentypen, Casts und Strings)](/lernen/ep1/ausdruecke) und
[Kapitel 3 (Verzweigungen und Bedingungen)](/lernen/ep1/verzweigungen). Das ist Absicht. Im Quiz steht nicht dabei, welches Kapitel gemeint
ist, und gerade die Verbindung von Schleifen mit Casts, `switch` oder String-Verkettung ist eine häufige
Fehlerquelle. Bei den beiden Aufgaben „Welches Muster passt?“ und „Welches Werkzeug passt?“ musst du nichts
ausrechnen. Du entscheidest nur, welches Verfahren passt. Diese Entscheidung ist oft der schwerste Schritt.

```aufgabe
id: sl-mix-muster
titel: Welches Muster passt?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe das Schleifenmuster zu, das am besten passt. Du musst nichts programmieren.
teile:
  - typ: auswahl
    label: a) Wie viele Wörter in einem Satz beginnen mit einem Großbuchstaben?
    optionen: ['Akkumulator (Zähler)', 'Suchschleife mit Abbruch', 'Flag für Trennzeichen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier muss der ganze Satz durchlaufen werden. Es gibt keinen Grund, beim ersten Treffer aufzuhören.
      - wert: 2
        meldung: Es wird nichts mit Trennzeichen ausgegeben, sondern eine Anzahl berechnet.
  - typ: auswahl
    label: b) An welcher Position steht die erste Ziffer in einem Passwort?
    optionen: ['Akkumulator (Zähler)', 'Suchschleife mit Abbruch', 'Flag für Trennzeichen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Gefragt ist keine Anzahl, sondern eine Position. Sobald die erste Ziffer gefunden ist, ist die Antwort klar.
      - wert: 2
        meldung: Es wird eine einzelne Position gesucht, keine Liste ausgegeben.
  - typ: auswahl
    label: c) Alle Primzahlen bis 50 durch Beistriche getrennt ausgeben.
    optionen: ['Akkumulator (Zähler)', 'Suchschleife mit Abbruch', 'Flag für Trennzeichen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Es wird nicht gezählt oder summiert, sondern eine Liste ausgegeben.
      - wert: 1
        meldung: Die Schleife soll nicht beim ersten Treffer aufhören. Und weil nur Primzahlen ausgegeben werden, ist die letzte Ausgabe nicht das Schleifenende.
hinweise:
  - Frag dich jeweils, ob ein einzelnes Ergebnis über alle Durchläufe, eine Position oder eine Liste gesucht ist.
  - Gefilterte Listen mit Trennzeichen brauchen ein Flag, weil man das letzte ausgegebene Element vorher nicht kennt.
loesung: |
  **Ansatz:** Für jede Aufgabe klären, was am Ende herauskommen soll.
  ---
  a) Eine Anzahl über den ganzen Satz: Zähler. b) Die erste Position, danach ist Schluss: Suchschleife.
  ---
  c) Eine gefilterte Liste mit Trennzeichen: Flag `erste`, Trennzeichen vor jeder Zahl außer der ersten.
```

```aufgabe
id: sl-mix-werkzeug
titel: Welches Werkzeug passt?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: Welcher Ausdruck löst jeweils die Teilaufgabe im Rumpf einer Schleife? Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: a) Ist `i` eine gerade Zahl?
    optionen: ['`i % 2 == 0`', '`i / 2 == 0`', '`(char) i`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`i / 2 == 0` gilt nur für 0 und 1. Gerade heißt: Rest 0 bei Division durch 2.'
      - wert: 2
        meldung: Ein Cast zu `char` macht aus einer Zahl ein Zeichen. Das hat mit gerade oder ungerade nichts zu tun.
  - typ: auswahl
    label: b) Das Zeichen mit dem Code `i` ausgeben.
    optionen: ['`i % 2 == 0`', '`i / 2 == 0`', '`(char) i`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das ist ein Teilbarkeitstest, er liefert `true` oder `false`.
      - wert: 1
        meldung: Das ist ein Vergleich mit einer Ganzzahldivision, kein Zeichen.
hinweise:
  - Rest-Operator für Teilbarkeit, Cast für die Umwandlung zwischen Zahl und Zeichen.
loesung: |
  **Ansatz:** Für jede Teilaufgabe das passende Werkzeug aus Kapitel 2 wählen.
  ---
  a) Teilbarkeit prüft man mit dem Rest: `i % 2 == 0`.
  ---
  b) Zahl zu Zeichen: Cast `(char) i`, wie in der Aufgabe „Buchstaben rückwärts mit Beistrichen“ aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
```

```aufgabe
id: sl-mix-cast
titel: Casts und Division
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Stoff aus [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).)'
teile:
  - typ: ausgabe
    code: |
      double d = 7 / 2;
      System.out.println(d);
      System.out.println(7 / 2.0);
      System.out.println((int) 3.99);
    loesung: |
      3.0
      3.5
      3
    fehler:
      - wert: "3.5\n3.5\n3"
        meldung: '`7 / 2` sind zwei `int`, also Ganzzahldivision mit Ergebnis 3. Erst danach wird 3 in `double` umgewandelt: 3.0.'
      - wert: "3.0\n3.5\n4"
        meldung: Der Cast `(int)` schneidet die Nachkommastellen ab. Er rundet nicht.
hinweise:
  - Entscheidend ist der Typ der Operanden **vor** der Zuweisung.
loesung: |
  **Ansatz:** Bei jeder Division zuerst die Typen der beiden Operanden ansehen.
  ---
  `7 / 2` ist `int / int`, also 3, gespeichert als 3.0. `7 / 2.0` enthält einen `double`, also 3.5. `(int) 3.99` schneidet ab: 3.
```

```aufgabe
id: sl-mix-mittelwert
titel: Durchschnitt nach der Schleife
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int summe = 0;
      int anzahl = 0;
      for (int i = 1; i <= 4; i++) {
          summe += i;
          anzahl++;
      }
      System.out.println(summe / anzahl);
      System.out.println((double) summe / anzahl);
    loesung: |
      2
      2.5
    fehler:
      - wert: "2.5\n2.5"
        meldung: '`summe / anzahl` sind zwei `int`. 10 / 4 ergibt bei Ganzzahldivision 2.'
      - wert: "2\n2.0"
        meldung: 'Der Cast `(double)` bindet stärker als `/`. Erst wird `summe` zu 10.0, dann wird geteilt, also 10.0 / 4 = 2.5.'
hinweise:
  - Nach der Schleife ist `summe = 10` und `anzahl = 4`.
  - Ein Cast wirkt auf den Wert direkt rechts von ihm, nicht auf den ganzen Ausdruck.
loesung: |
  **Ansatz:** Zuerst die Akkumulatoren bestimmen, dann die Divisionen auswerten.
  ---
  Summe 1 + 2 + 3 + 4 = 10, Anzahl 4.
  ---
  `10 / 4` ist Ganzzahldivision: 2. `(double) 10 / 4` ist `10.0 / 4`: 2.5.
```

```aufgabe
id: sl-mix-switch
titel: switch in einer Schleife
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (`switch` und Fallthrough: [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).)'
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 3; i++) {
          switch (i) {
              case 1:
                  System.out.print("a");
              case 2:
                  System.out.print("b");
                  break;
              default:
                  System.out.print("c");
          }
      }
      System.out.println();
    loesung: |
      abbc
    fehler:
      - wert: "abc"
        meldung: Bei `case 1` fehlt ein `break`. Java fällt in `case 2` durch und gibt zusätzlich `b` aus.
      - wert: "ab"
        meldung: Das `break` in `case 2` beendet nur das `switch`, nicht die Schleife. Danach kommt noch `i = 3`.
hinweise:
  - Ein `break` in einem `switch` verlässt nur das `switch`.
  - Ohne `break` läuft ein `case` in den nächsten weiter (Fallthrough).
loesung: |
  **Ansatz:** Für jedes `i` das `switch` einzeln auswerten.
  ---
  `i = 1`: `a`, dann Fallthrough in `case 2`: `b`, dann `break`. `i = 2`: `b`, `break`.
  ---
  `i = 3`: kein passender `case`, also `default`: `c`. Ausgabe `abbc`.
```

```aufgabe
id: sl-mix-verzweigung
titel: Verzweigung in jedem Durchlauf
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      for (int x = 1; x <= 6; x++) {
          if (x % 2 == 0 && x > 3) {
              System.out.print("A");
          } else if (x % 3 == 0) {
              System.out.print("B");
          } else {
              System.out.print("-");
          }
      }
      System.out.println();
    loesung: |
      --BA-A
    fehler:
      - wert: "--BA-B"
        meldung: Bei `x = 6` ist schon die erste Bedingung wahr (6 ist gerade und größer als 3). Ein `else if` wird dann nicht mehr geprüft.
      - wert: "-ABA-A"
        meldung: Bei `x = 2` ist `x > 3` falsch. Die erste Bedingung braucht beide Teile.
hinweise:
  - Prüfe die Bedingungen von oben nach unten. Die erste wahre gewinnt.
  - Nur gerade Zahlen über 3 bekommen ein A.
loesung: |
  **Ansatz:** Für `x` = 1 bis 6 die Kette `if`, `else if`, `else` von oben auswerten.
  ---
  1: `-`. 2: gerade, aber nicht größer als 3, und nicht durch 3 teilbar: `-`. 3: `B`. 4: `A`. 5: `-`.
  ---
  6: Die erste Bedingung ist wahr, also `A`. Ausgabe `--BA-A`.
```

```aufgabe
id: sl-mix-char-schritt
titel: Mit Zeichen zählen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (`char` als Zahl: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).)'
teile:
  - typ: ausgabe
    code: |
      for (char c = 'a'; c <= 'e'; c += 2) {
          System.out.print(c);
      }
      System.out.println();
    loesung: |
      ace
    fehler:
      - wert: "9799101"
        meldung: Die Laufvariable ist vom Typ `char`. `print(c)` gibt deshalb das Zeichen aus, nicht seinen Code.
      - wert: "abcde"
        meldung: Die Schrittweite ist `c += 2`. Jeder zweite Buchstabe wird übersprungen.
hinweise:
  - Eine Laufvariable darf auch ein `char` sein. `c += 2` rückt um zwei Buchstaben weiter.
loesung: |
  **Ansatz:** `c` läuft über die Codes 97, 99, 101, also `a`, `c`, `e`.
  ---
  Danach wäre `c = 'g'`, und `'g' <= 'e'` ist falsch. Ausgabe `ace`.
```

```aufgabe
id: sl-mix-strings-vergleichen
titel: Strings in Schleifen vergleichen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist `String t = "Hallo"; String u = "Hal"; u = u + "lo";`. Beurteile die Aussagen.
  (`==` und `equals` bei Strings: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`t.equals(u)` ist `true`.'
        richtig: true
        erklaerung: '`equals` vergleicht den Inhalt, und beide enthalten „Hallo“.'
      - text: '`t == u` ist hier `true`.'
        richtig: false
        erklaerung: '`u` wurde erst beim Ausführen des Programms neu zusammengesetzt und ist deshalb ein anderes Objekt als `t`. `==` vergleicht bei Strings, ob es dasselbe Objekt ist. Hier liefert es `false`.'
      - text: '`t.charAt(0) == ''H''` ist ein korrekter Vergleich.'
        richtig: true
        erklaerung: '`charAt` liefert einen `char`, also einen primitiven Wert. Den vergleicht man mit `==`.'
      - text: '`t.charAt(0) == "H"` kompiliert.'
        richtig: false
        erklaerung: 'Links `char`, rechts `String`. Der Compiler meldet `bad operand types for binary operator ''==''`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: '`==` vergleicht bei Strings nicht den Inhalt. Für den Inhalt braucht man `equals`.'
hinweise:
  - Strings sind Objekte, `char` ist ein primitiver Typ.
  - Doppelte Anführungszeichen bilden einen String, einfache einen `char`.
loesung: |
  **Ansatz:** Für jeden Vergleich die Typen der beiden Seiten bestimmen.
  ---
  Strings vergleicht man mit `equals` (Aussage 1 wahr, Aussage 2 falsch).
  ---
  Zeichen vergleicht man mit `==` und einfachen Anführungszeichen (Aussage 3 wahr, Aussage 4 kompiliert nicht).
```

```aufgabe
id: sl-mix-verkettung
titel: Von beiden Seiten anfügen
niveau: 3
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "";
      for (int i = 1; i <= 3; i++) {
          s = i + s + i;
      }
      System.out.println(s);
      System.out.println(s + 1 + 2);
    loesung: |
      321123
      32112312
    fehler:
      - wert: "123321\n12332112"
        meldung: '`i + s + i` setzt die neue Zahl vorne **und** hinten an. Die größte Zahl landet deshalb außen, nicht innen.'
      - wert: "321123\n3211233"
        meldung: '`s + 1 + 2` wird von links ausgewertet. `s + 1` ist schon ein String, also wird 2 als Text angehängt, nicht 1 + 2 gerechnet.'
hinweise:
  - Verfolge `s` nach jedem Durchlauf in einer Tabelle.
  - '`i + s` mit einem String `s` ist eine Verkettung, auch wenn `s` leer ist.'
loesung: |
  **Ansatz:** Trace-Tabelle für `s`. In jedem Durchlauf kommt `i` links und rechts dazu.
  ---
  `i = 1`: Aus `""` wird `"11"`. `i = 2`: `"2112"`. `i = 3`: `"321123"`.
  ---
  `s + 1 + 2`: Links steht ein String, also wird angehängt: `"32112312"`.
```


## Prüfungsaufgaben

Diese Aufgaben sind im Stil der Prüfungsteile gebaut. Die Quizfragen folgen den bisherigen TUWEL-Tests:
Single Choice mit drei Optionen (TUWEL-Tests 2021), Richtig/Falsch mit vier Aussagen und laut Studierendenberichten
seit 2024 auch Lückentext. Das Format der Quiz 2026W ist noch nicht veröffentlicht. Die Programmieraufgaben entsprechen dem Aufgabenblatt 1: Du erweiterst `main`,
und die Ausgabe muss zeichengenau stimmen. Im Quiz hast du keinen Computer. Löse die Quizfragen deshalb
mit Papier und Trace-Tabelle, und gib dir pro Frage höchstens drei Minuten.

```aufgabe
id: sl-pa-quiz-schleife
titel: "Quiz: Welche Schleife?"
niveau: 3
lernziel: 1
kompetenz: verstehen
punkte: 1
quelle: TUWEL-Test 1 WS2021, Frage 4 (Stil nachgebaut)
angabe: |
  Welche der folgenden Schleifen erzeugt die Ausgabe `10 8 6 4 2 ` (mit Leerzeichen nach jeder Zahl)?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 10; i >= 0; i -= 2) { System.out.print(i + " "); }`'
      - '`for (int i = 10; i > 0; i -= 2) { System.out.print(i + " "); }`'
      - '`for (int i = 10; i > 1; i--) { if (i % 2 == 1) { System.out.print(i + " "); } }`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Mit `i >= 0` wird auch die 0 noch ausgegeben. Die Ausgabe endet dann mit `2 0 `.
      - wert: 2
        meldung: '`i % 2 == 1` lässt die **ungeraden** Zahlen durch: 9 7 5 3.'
hinweise:
  - Prüfe bei jeder Option den letzten ausgegebenen Wert.
  - Bei der dritten Option entscheidet der Rest-Test, welche Zahlen durchkommen.
loesung: |
  **Ansatz:** Für jede Option Start, letzten Wert und Filter prüfen.
  ---
  Option 1 gibt zusätzlich 0 aus. Option 3 gibt die ungeraden Zahlen 9, 7, 5, 3 aus.
  ---
  Option 2 läuft für 10, 8, 6, 4, 2 und endet bei 0, weil `0 > 0` falsch ist. Richtig ist Option 2.
```

```aufgabe
id: sl-pa-quiz-aussagen
titel: "Quiz: Aussagen zu einer while-Schleife"
niveau: 3
lernziel: 0
kompetenz: verstehen
punkte: 2
angabe: |
  ```java
  int a = 1;
  int b = 0;
  while (a < 50) {
      a = a * 3;
      b = b + a;
  }
  System.out.println(a + " " + b);
  ```
  Beurteile die Aussagen. (Teilpunkte je richtig beurteilter Aussage.)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Rumpf wird genau viermal ausgeführt.
        richtig: true
        erklaerung: '`a` wird 3, 9, 27, 81. Erst bei 81 ist `a < 50` falsch.'
      - text: 'Die Ausgabe ist `81 120`.'
        richtig: true
        erklaerung: '`b` = 3 + 9 + 27 + 81 = 120.'
      - text: Ersetzt man `a < 50` durch `a <= 81`, läuft der Rumpf genau einmal mehr.
        richtig: true
        erklaerung: 'Bei `a = 81` ist `81 <= 81` wahr. Es folgt ein fünfter Durchlauf mit `a = 243`.'
      - text: Startet man mit `int a = 0;`, endet die Schleife nach einem Durchlauf.
        richtig: false
        erklaerung: '0 · 3 = 0. `a` bleibt 0, und `0 < 50` bleibt wahr. Das ist eine Endlosschleife.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Was ergibt 0 mal 3? Kann `a` dann jemals 50 erreichen?
hinweise:
  - Trace-Tabelle mit `a` und `b` anlegen.
  - Für die letzte Aussage den ersten Durchlauf mit `a = 0` nachrechnen.
loesung: |
  **Ansatz:** Trace-Tabelle. In jedem Durchlauf wird `a` verdreifacht und der neue Wert zu `b` addiert.
  ---
  `a`: 3, 9, 27, 81. `b`: 3, 12, 39, 120. Vier Durchläufe, Ausgabe `81 120`.
  ---
  Mit `a <= 81` gibt es einen fünften Durchlauf. Mit Start 0 bleibt `a` immer 0: Endlosschleife. Aussagen 1 bis 3 richtig, 4 falsch.
```

```aufgabe
id: sl-pa-quiz-luecke
titel: "Quiz: Umkehrung mit Klammern"
niveau: 3
lernziel: 4
kompetenz: anwenden
punkte: 2
quelle: TUWEL-Test zur Vorbereitung 1 WS2021, Frage 7 (Idee nachgebaut, anderes Wort, andere Variablen und anderes Format)
angabe: |
  Das Programm soll für `wort = "Rose"` die Ausgabe `[e][s][o][R]` erzeugen: die Buchstaben rückwärts, jeder in
  eckigen Klammern. Ergänze die Zeile im Rumpf. Verwende dabei `wort.charAt(i)`, `"["`, `"]"` und `umgedreht`.
teile:
  - typ: lueckentext
    code: |
      String wort = "Rose";
      String umgedreht = "";
      for (int i = 0; i < wort.length(); i++) {
          umgedreht = ___;
      }
      System.out.println(umgedreht);
    luecken: [['"[" + wort.charAt(i) + "]" + umgedreht']]
    fehler:
      - wert: ['umgedreht + "[" + wort.charAt(i) + "]"']
        meldung: 'Das hängt hinten an und ergibt `[R][o][s][e]`. Für die Umkehrung muss das neue Stück **vor** `umgedreht` stehen.'
      - wert: ['"]" + wort.charAt(i) + "[" + umgedreht']
        meldung: 'Das ergibt `]e[]s[]o[]R[`. Die Reihenfolge der Buchstaben dreht sich um, aber jedes einzelne Stück soll weiterhin mit `[` beginnen und mit `]` enden.'
hinweise:
  - Die Schleife läuft vorwärts, die Ausgabe ist rückwärts. Wo muss das neue Stück hin?
  - Jedes neue Stück besteht aus `[`, dem Buchstaben und `]`.
loesung: |
  **Ansatz:** Vorwärts lesen und vorne anfügen dreht die Reihenfolge um.
  ---
  Jedes neue Stück ist `"[" + wort.charAt(i) + "]"` und kommt vor das bisherige Ergebnis.
  ---
  `umgedreht` wird `[R]`, dann `[o][R]`, dann `[s][o][R]`, dann `[e][s][o][R]`.
```

```aufgabe
id: sl-pa-quiz-sterne
titel: "Quiz: Sterne zählen"
niveau: 3
lernziel: 7
kompetenz: rechnen
punkte: 1
angabe: |
  ```java
  int n = 5;
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
          System.out.print("*");
      }
      System.out.println();
  }
  ```
  Wie viele Sterne werden insgesamt ausgegeben?
teile:
  - typ: zahl
    loesung: "5 + 4 + 3 + 2 + 1"
    fehler:
      - wert: "25"
        meldung: Die innere Schleife beginnt bei `j = i`, nicht bei 0. Mit jeder Zeile läuft sie einmal weniger.
      - wert: "10"
        meldung: In der ersten Zeile (`i = 0`) läuft `j` von 0 bis 4, das sind 5 Sterne. Zähle die Zeilen 5, 4, 3, 2, 1.
hinweise:
  - Bestimme für jedes `i` von 0 bis 4, wie oft die innere Schleife läuft.
  - Die innere Schleife läuft `n - i` Mal.
loesung: |
  **Ansatz:** Innere Grenze hängt von `i` ab, also zeilenweise zählen und addieren.
  ---
  `i = 0`: 5 Sterne, `i = 1`: 4, `i = 2`: 3, `i = 3`: 2, `i = 4`: 1.
  ---
  5 + 4 + 3 + 2 + 1 = 15. Es entsteht ein Dreieck, dessen Zeilen kürzer werden.
```

```aufgabe
id: sl-pa-blatt-while
titel: "Aufgabenblatt: ungerade Vielfache mit while"
niveau: 3
lernziel: 3
kompetenz: anwenden
punkte: 3
quelle: Aufgabenblatt 1 WS2023, Aufgabe 2d (Idee nachgebaut, ungerade statt gerade, andere Zahlen, strengere Trennzeichen)
angabe: |
  Gesucht sind alle **ungeraden** Vielfachen von 9 aus dem Intervall `]27, 140[`. Gib sie mit einer
  **while-Schleife** in einer Zeile aus. Zwischen zwei Zahlen steht genau ein Leerzeichen, nach der letzten
  Zahl steht **keines**. So soll die Ausgabe aussehen: `45 63 81 99 117 135`
teile:
  - typ: code
    vorlage: |
      public class UngeradeVielfache {
          public static void main(String[] args) {
              // TODO: while-Schleife
          }
      }
    musterloesung: |
      public class UngeradeVielfache {
          public static void main(String[] args) {
              int i = 28;
              boolean erste = true;
              while (i < 140) {
                  if (i % 2 == 1 && i % 9 == 0) {
                      if (!erste) {
                          System.out.print(" ");
                      }
                      System.out.print(i);
                      erste = false;
                  }
                  i++;
              }
              System.out.println();
          }
      }
    tests:
      - { stdout: "45 63 81 99 117 135\n", beschreibung: "Ausgabe ohne Leerzeichen am Ende" }
    fehler:
      - { wert: 1, meldung: "Stimmen die Grenzen (27 und 140 gehören nicht dazu)? Und steht nach der 135 noch ein Leerzeichen? Die letzte Ausgabe ist nicht das Schleifenende." }
hinweise:
  - 'Bei `while` brauchst du drei Zeilen: Start vor der Schleife, Bedingung im Kopf, Schritt am Ende des Rumpfs.'
  - 'Ungerade heißt `i % 2 == 1`. Gefiltert und mit Trennzeichen: Flag `erste` und Leerzeichen vor jeder Zahl außer der ersten. Alternativ startest du bei 45 und springst mit `i += 18`.'
loesung: |
  **Ansatz:** Offenes Intervall `]27, 140[` mit `while`, Filter auf ungerade Vielfache von 9, Trennzeichen mit Flag.
  ---
  ```java
  int i = 28;
  boolean erste = true;
  while (i < 140) {
      if (i % 2 == 1 && i % 9 == 0) {
          if (!erste) {
              System.out.print(" ");
          }
          System.out.print(i);
          erste = false;
      }
      i++;
  }
  System.out.println();
  ```
  ---
  Probe: Die ungeraden Vielfachen von 9 sind 9, 27, 45, 63, …, sie liegen 18 auseinander. Die 27 ist ausgeschlossen, also beginnt die Ausgabe bei 45. Die letzte ist 135, die nächste wäre 153 und liegt über 140.
```

```aufgabe
id: sl-pa-blatt-expandieren
titel: "Aufgabenblatt: Buchstaben vervielfachen"
niveau: 3
lernziel: 4
kompetenz: anwenden
punkte: 3
quelle: Ad-hoc-Sammlung 2017W, Task 9 (Idee nachgebaut, anderer Beispielsatz)
angabe: |
  Das Programm liest eine Zeile Text ein. Steht im Text eine Ziffer `2`, `3` oder `4` und folgt danach noch ein
  Zeichen, so wird dieses Zeichen so oft ausgegeben, wie die Ziffer angibt. Die Ziffer selbst erscheint nicht.
  Alle anderen Zeichen werden unverändert übernommen. Eine Ziffer ganz am Ende bleibt stehen.

  Aus `Ka2fee und K3uchen sind to4l` wird `Kaffee und Kuuuchen sind tollll`.
teile:
  - typ: code
    vorlage: |
      import java.util.Scanner;

      public class Vervielfachen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              // TODO
          }
      }
    musterloesung: |
      import java.util.Scanner;

      public class Vervielfachen {
          public static void main(String[] args) {
              Scanner eingabe = new Scanner(System.in);
              String text = eingabe.nextLine();
              String r = "";
              int i = 0;
              while (i < text.length()) {
                  char c = text.charAt(i);
                  if (c >= '2' && c <= '4' && i + 1 < text.length()) {
                      int anzahl = c - '0';
                      char naechstes = text.charAt(i + 1);
                      for (int k = 0; k < anzahl; k++) {
                          r = r + naechstes;
                      }
                      i += 2;
                  } else {
                      r = r + c;
                      i++;
                  }
              }
              System.out.println(r);
          }
      }
    tests:
      - { stdin: "Ka2fee und K3uchen sind to4l", stdout: "Kaffee und Kuuuchen sind tollll\n", beschreibung: "Beispiel aus der Angabe" }
      - { stdin: "ohne Ziffern", stdout: "ohne Ziffern\n", beschreibung: "nichts zu tun" }
      - { stdin: "A4", stdout: "A4\n", beschreibung: "Ziffer am Ende bleibt stehen" }
      - { stdin: "1x5y4z", stdout: "1x5yzzzz\n", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Bei einer Ziffer ganz am Ende gibt es kein nächstes Zeichen. Prüfst du i + 1 < text.length(), bevor du charAt(i + 1) aufrufst?" }
      - { wert: 1, meldung: "Erscheint die Ziffer selbst in der Ausgabe, oder wird das vervielfachte Zeichen danach noch einmal kopiert? Nach einer Ziffer musst du um zwei Positionen weiterrücken." }
hinweise:
  - 'Die Zahl hinter einem Ziffernzeichen bekommst du mit `c - ''0''`. Für `''3''` ist das 51 − 48 = 3.'
  - 'Verwende eine `while`-Schleife, weil der Schritt mal 1, mal 2 Positionen beträgt. Für das Vervielfachen brauchst du eine innere `for`-Schleife.'
loesung: |
  **Ansatz:** Zeichenweise durchlaufen. Bei einer Ziffer 2 bis 4 mit Nachfolger das nächste Zeichen vervielfachen und zwei Positionen weiterrücken, sonst das Zeichen übernehmen.
  ---
  ```java
  String r = "";
  int i = 0;
  while (i < text.length()) {
      char c = text.charAt(i);
      if (c >= '2' && c <= '4' && i + 1 < text.length()) {
          int anzahl = c - '0';
          char naechstes = text.charAt(i + 1);
          for (int k = 0; k < anzahl; k++) {
              r = r + naechstes;
          }
          i += 2;
      } else {
          r = r + c;
          i++;
      }
  }
  System.out.println(r);
  ```
  ---
  Probe mit `K3uchen`: K übernommen. Bei `3` wird `u` dreimal angehängt, `i` springt über das `u`. Dann `chen`. Ergebnis `Kuuuchen`. Die Ziffern 1 und 5 gehören nicht zum Bereich und bleiben stehen.
```

```aufgabe
id: sl-pa-gespraech
titel: "Feedbackgespräch: Erkläre deine Schleife"
niveau: 3
lernziel: 6
kompetenz: begruenden
punkte: 2
angabe: |
  Im Feedbackgespräch zeigt dir die Tutorin deine Lösung der Aufgabe „Vielfache mit Schrägstrichen umrahmen“ aus
  [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
  Gesucht waren die Zahlen aus `[100, 385[`, die durch 7 und durch 11 teilbar sind:
  ```java
  System.out.print("/");
  for (int i = 100; i < 385; i++) {
      if (i % 7 == 0 && i % 11 == 0) {
          System.out.print(i + "/");
      }
  }
  ```
  Sie fragt: a) Warum steht in der Bedingung `i < 385` und nicht `i <= 385`? b) Wie würdest du die Schleife ändern,
  damit sie nur dreimal statt 285-mal durchläuft? Antworte in ganzen Sätzen.
teile:
  - typ: text
    muster: |
      a) Das Intervall ist `[100, 385[`. Die eckige Klammer nach der 385 zeigt von der Zahl weg, die 385 gehört also nicht
      dazu. Deshalb steht `<` und nicht `<=`. Das ist wichtig, denn 385 ist durch 7 und durch 11 teilbar und würde
      sonst ausgegeben.
      b) Durch 7 und 11 teilbar sind genau die Vielfachen von 77. Ich starte bei der ersten passenden Zahl im Intervall,
      154, und springe mit `i += 77` weiter: `for (int i = 154; i < 385; i += 77)`. Dann fällt das `if` weg, und die
      Schleife läuft nur für 154, 231 und 308. Die Ausgabe bleibt gleich.
hinweise:
  - Erkläre die Intervallklammern in Worten und nenne das Vergleichszeichen.
  - Für b) überlege, welche Zahlen durch 7 und durch 11 teilbar sind und wo die erste davon im Intervall liegt.
loesung: |
  **Ansatz:** a) Intervallschreibweise in Schleifengrenzen übersetzen. b) Statt filtern direkt in passenden Schritten springen.
  ---
  a) `385[` schließt 385 aus, also `i < 385`. Die Schleife läuft für 100 bis 384, das sind 384 − 100 + 1 = 285 Durchläufe.
  ---
  b) Gemeinsame Vielfache von 7 und 11 sind die Vielfachen von 77. Start bei 154 (2 · 77, denn 77 liegt unter 100), Schritt 77: drei Durchläufe statt 285, gleiche Ausgabe.
```


## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Eine Schleife wiederholt ihren Rumpf, solange die Bedingung wahr ist. Man versteht sie am
  sichersten mit einer Trace-Tabelle, die nach jedem Durchlauf alle Variablen festhält. (2) Bei Intervallen entscheidet die
  linke Klammer über den Startwert und die rechte über `<` oder `<=`. Den ersten und den letzten Durchlauf prüft man immer von
  Hand. (3) Zwischen n Werten stehen n − 1 Trennzeichen. Bei gefilterter Ausgabe setzt man das Trennzeichen mit einem Flag vor
  jede Zahl außer der ersten. Gute Antworten sind auch das Akkumulator-Muster oder die Suchschleife mit der Indexprüfung links vom `&&`.
```

:::zusammenfassung
1. **while** prüft vor jedem Durchlauf, **do-while** nach jedem Durchlauf (mindestens ein Durchlauf), **for** fasst Initialisierung, Bedingung und Aktualisierung in einer Zeile zusammen. Jede Form lässt sich in jede andere umbauen.
2. Eine Schleife endet nur, wenn der Rumpf etwas an der Bedingung ändert. Ein Strichpunkt direkt nach `while (...)` oder `for (...)` ist eine leere Anweisung und meist ein Fehler.
3. **Intervalle:** `[a` heißt Start bei `a`, `]a` heißt Start bei `a + 1`, `b]` heißt `<= b`, `b[` heißt `< b`. `for (int i = a; i < b; i++)` läuft `b − a` Mal.
4. **Akkumulator:** vor der Schleife mit dem neutralen Wert anlegen (0, 1 oder `""`), in der Schleife verändern, danach verwenden. Für große Produkte `long`.
5. **Trennzeichen:** n Werte, n − 1 Trennzeichen. Erstes Element vorweg, letztes nachher oder `if` im Rumpf. Bei gefilterten Werten ein Flag `erste`.
6. **Strings:** Indizes von 0 bis `length() - 1`. Vorwärts `i < s.length()`, rückwärts ab `s.length() - 1` bis `i >= 0`. Zeichen mit `==` und einfachen Anführungszeichen vergleichen, Bereiche mit `&&`.
7. **Suchen:** `while (i < s.length() && s.charAt(i) != x) i++;` und danach -1, wenn `i == s.length()`. Die Indexprüfung steht links. `break` beendet die Schleife, `continue` nur den Durchlauf.
8. **Verschachtelt:** Die innere Schleife läuft für jeden äußeren Durchlauf komplett. Feste Grenzen ergeben ein Produkt, abhängige Grenzen eine Summe wie 1 + 2 + … + n.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Die Schleifenvariable wird im Rumpf nicht verändert**, die Schleife läuft endlos. Training: „Endet die Schleife?“ in [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
2. **Strichpunkt nach `while (...)` oder `for (...)`**, sodass der Block nicht mehr zur Schleife gehört. Training: „Endet die Schleife?“ in [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
3. **Intervallgrenze verschoben**, etwa `]12, 96]` als `i = 12; i < 96` übersetzt. Training: „Das Intervall ]15, 40]“ und „Rest 3 in einem offenen Intervall“ in [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
4. **Durchläufe falsch gezählt** (b − a statt b − a + 1). Training: „Durchläufe zählen“ und „Wie viele Zahlen in Siebenerschritten?“ in [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
5. **Akkumulator im Rumpf zurückgesetzt** oder Produkt mit 0 gestartet. Training: „Was bleibt übrig?“ und „Fakultät ohne Überlauf“ in [4.3 Akkumulieren](/lernen/ep1/schleifen/akkumulieren-summen-zaehler-und-ergebnis-strings).
6. **Trennzeichen am Ende**, besonders bei gefilterter Ausgabe mit `if (i < b)`. Training: „Wo landet das letzte Komma?“ und „Pluszeichen nur dazwischen“ in [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).
7. **Trennzeichen als `char` addiert** (`i + ','` ergibt eine Zahl, weil ein `char` intern eine Zahl ist). Training: die Eingangsfrage „Zeichen sind Zahlen“ am [Kapitelanfang](/lernen/ep1/schleifen) (`c + 1` ergibt 98) und „Mit Zeichen zählen“ in [4.9 Gemischte Wiederholung](/lernen/ep1/schleifen/gemischte-wiederholung).
8. **Index zu weit:** `i <= s.length()` oder Start bei `s.length()` führt zur `StringIndexOutOfBoundsException`. Training: „Eine Eingabe spiegeln“ in [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
9. **Bereich mit `||` statt `&&`** geprüft, sodass alles gezählt wird. Training: „Was zählt diese Bedingung?“ und „Buchstaben von n bis z zählen“ in [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
10. **Bedingungen der Suchschleife vertauscht** oder ohne `break` das letzte statt des ersten Vorkommens gefunden. Training: „indexOf selbst bauen“ und „Welcher Index bleibt stehen?“ in [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren).
11. **`while` statt `do-while`**, wenn der Rumpf mindestens einmal laufen muss (Zahl 0). Training: „Ziffern von hinten ausgeben“ in [4.7 do-while und die Wahl der passenden Schleife](/lernen/ep1/schleifen/do-while-und-die-wahl-der-passenden-schleife).
12. **`println` in der inneren statt der äußeren Schleife** oder innere und äußere Schleife verwechselt. Training: „Eine Zeile mehr“ und „Wenn die innere Grenze von i abhängt“ in [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch ohne Computer. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich mit 3 einschätzt, aber Fehler
machst, liegt deine wichtigste Baustelle.

1. Eine while-Schleife mit einer Trace-Tabelle verfolgen und die Ausgabe exakt angeben.
2. Intervalle in Startwert und Bedingung einer for-Schleife übersetzen und Durchläufe zählen.
3. Summen, Zähler, Produkte und Strings mit einem Akkumulator berechnen.
4. Trennzeichen ohne überzähliges Zeichen ausgeben, auch bei gefilterten Werten.
5. Strings vorwärts, rückwärts und in Schritten durchlaufen, Zeichen filtern und zählen.
6. Eine Suchschleife schreiben, die `indexOf` nachbaut und -1 liefert.
7. while, do-while und for unterscheiden, umformen und begründet wählen.
8. Bei verschachtelten Schleifen Ausgabe und Durchläufe bestimmen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein **Feedbackgespräch**.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen typische Fragen zu Schleifen.
Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche
sie mit den Kernpunkten.

```karten
- id: sl-karte-while-ablauf
  frage: Erkläre den Ablauf einer while-Schleife. Wann wird die Bedingung geprüft, und was passiert, wenn sie gleich am Anfang falsch ist?
  antwort: |
    Vor jedem Durchlauf wird die Bedingung geprüft. Ist sie wahr, läuft der Rumpf einmal, danach wird wieder geprüft. Ist sie
    falsch, geht es nach der schließenden Klammer weiter. Ist sie schon beim ersten Prüfen falsch, läuft der Rumpf kein
    einziges Mal. Deshalb heißt die while-Schleife kopfgesteuert.
  kernpunkte:
    - Prüfung vor jedem Durchlauf
    - Rücksprung zur Bedingung nach dem Rumpf
    - eventuell keinmal
- id: sl-karte-endlos
  frage: Wodurch entsteht eine Endlosschleife? Nenne zwei verschiedene Ursachen.
  antwort: |
    Eine Schleife endet nur, wenn die Bedingung irgendwann falsch wird. Erstens kann im Rumpf die Veränderung fehlen, etwa
    das `n--` beim Countdown. Zweitens kann ein Strichpunkt direkt nach `while (n > 0)` stehen. Dann ist die leere Anweisung
    der Rumpf, und der Block danach gehört nicht mehr zur Schleife. Eine dritte Ursache ist eine Bedingung wie `i != 0`, über
    die die Variable hinwegspringt, etwa beim Herunterzählen in Dreierschritten von 10.
  kernpunkte:
    - fehlende Veränderung im Rumpf
    - Strichpunkt nach dem Schleifenkopf
    - Bedingung, die übersprungen wird
- id: sl-karte-for-teile
  frage: Welche drei Teile hat der Kopf einer for-Schleife, und wann wird jeder ausgeführt? Wie sieht dieselbe Schleife mit while aus?
  antwort: |
    Initialisierung, Bedingung und Aktualisierung, getrennt durch Strichpunkte. Die Initialisierung läuft genau einmal am
    Anfang. Die Bedingung wird vor jedem Durchlauf geprüft. Die Aktualisierung läuft nach jedem Durchlauf. Mit while schreibt
    man die Initialisierung vor die Schleife, die Bedingung in den Kopf und die Aktualisierung als letzte Zeile in den Rumpf.
    Ein Unterschied bleibt: Die Laufvariable der for-Schleife ist nach der Schleife nicht mehr sichtbar.
  kernpunkte:
    - Initialisierung einmal
    - Bedingung vor, Aktualisierung nach jedem Durchlauf
    - Umformung in while und Sichtbarkeit
- id: sl-karte-intervall
  frage: Warum steht in deiner Lösung für das Intervall ]26, 143] der Startwert 27 und das Zeichen <=?
  antwort: |
    Die eckige Klammer vor der 26 zeigt von der Zahl weg, die 26 gehört also nicht dazu. Die erste mögliche Zahl ist 27. Die
    Klammer nach der 143 zeigt zur Zahl hin, die 143 gehört dazu. Deshalb muss die Bedingung `i <= 143` lauten. Ich prüfe so
    etwas immer, indem ich den ersten und den letzten Durchlauf von Hand durchgehe.
  kernpunkte:
    - linke Klammer bestimmt den Start
    - rechte Klammer bestimmt kleiner oder kleiner-gleich
    - Kontrolle von erstem und letztem Durchlauf
- id: sl-karte-akkumulator
  frage: Warum steht der Akkumulator vor der Schleife, und warum hat eine Summe den Startwert 0, ein Produkt aber 1?
  antwort: |
    Der Akkumulator sammelt das Ergebnis über alle Durchläufe. Stünde die Zuweisung des Startwerts im Rumpf, würde er in
    jedem Durchlauf zurückgesetzt, und es bliebe nur der letzte Wert. Der Startwert muss neutral sein: Er darf das Ergebnis
    nicht verändern. Für die Addition ist das 0, für die Multiplikation 1, denn mit 0 wäre jedes Produkt 0. Läuft die Schleife
    keinmal, ist der Startwert zugleich das Ergebnis, zum Beispiel 0! = 1.
  kernpunkte:
    - Startwert vor der Schleife, sonst Zurücksetzen
    - neutrales Element der Operation
    - Ergebnis bei null Durchläufen
- id: sl-karte-ueberlauf
  frage: Deine Fakultätsschleife liefert für 13 eine falsche Zahl, aber keine Fehlermeldung. Was ist passiert?
  antwort: |
    13! ist 6227020800 und damit größer als der größte int-Wert 2147483647. Java meldet dabei keinen Fehler, sondern rechnet
    mit einem übergelaufenen Wert weiter, hier 1932053504. Das nennt man Überlauf. Mit dem Typ long passt das Ergebnis bis 20!.
    Die Datentypen und ihre Grenzen gehören zu Kapitel 2.
  kernpunkte:
    - Wertebereich von int überschritten
    - Überlauf ohne Fehlermeldung
    - long als Lösung
- id: sl-karte-zaunpfahl
  frage: Was ist das Zaunpfahlproblem, und welche Lösungen kennst du?
  antwort: |
    Zwischen n Werten stehen n − 1 Trennzeichen, so wie zwischen vier Zaunpfählen drei Latten hängen. Gibt man in jedem
    Durchlauf Wert und Trennzeichen aus, ist eines zu viel. Lösungen: den ersten Wert vor der Schleife ausgeben und in der
    Schleife Trennzeichen vor den Wert setzen, den letzten Wert nach der Schleife ausgeben, oder im Rumpf mit einem if das
    Trennzeichen beim letzten Durchlauf weglassen.
  kernpunkte:
    - n Werte, n − 1 Trennzeichen
    - erster Wert vorweg oder letzter nachher
    - Bedingung im Rumpf
- id: sl-karte-flag
  frage: Warum funktioniert if (i < b) nicht, wenn nur ein Teil der Zahlen ausgegeben wird? Wie löst du das?
  antwort: |
    Die Bedingung prüft, ob die Schleife noch weiterläuft, nicht ob noch eine Ausgabe kommt. Wird die letzte Zahl der
    Schleife herausgefiltert, folgt auf die letzte ausgegebene Zahl trotzdem ein Trennzeichen. Ich drehe es um und setze
    das Trennzeichen vor jede Zahl außer der ersten. Ob schon etwas ausgegeben wurde, merkt sich eine boolean-Variable
    `erste`, ein Flag.
  kernpunkte:
    - Schleifenende ist nicht Ausgabeende
    - Trennzeichen vor statt nach der Zahl
    - Flag merkt sich die erste Ausgabe
- id: sl-karte-string-index
  frage: Warum lautet die Bedingung beim Durchlaufen eines Strings i < s.length() und nicht i <= s.length()? Was passiert sonst?
  antwort: |
    Die Indizes beginnen bei 0, der letzte gültige Index ist deshalb `s.length() - 1`. Mit `<=` würde `charAt` auch mit dem
    Index `s.length()` aufgerufen. Das Programm kompiliert, stürzt aber zur Laufzeit mit einer StringIndexOutOfBoundsException
    ab, bei "Hallo" mit der Meldung Index 5 out of bounds for length 5. Rückwärts startet man deshalb bei `s.length() - 1`.
  kernpunkte:
    - Indizes von 0 bis Länge minus 1
    - Laufzeitfehler statt Compilerfehler
    - rückwärts bei Länge minus 1 starten
- id: sl-karte-char-vergleich
  frage: Warum vergleichst du Zeichen mit ==, Strings aber mit equals? Was ist der Unterschied zwischen 'n' und "n"?
  antwort: |
    `charAt` liefert einen char, einen primitiven Typ. Primitive Werte vergleicht man mit `==`. `'n'` in einfachen
    Anführungszeichen ist ein char, `"n"` in doppelten Anführungszeichen ist ein String, also ein Objekt. Bei Objekten prüft
    `==` nur, ob es dasselbe Objekt ist. Für den Inhalt braucht man equals. `charAt(i) == "n"` kompiliert gar nicht, weil
    char und String nicht mit `==` vergleichbar sind. Das hängt mit dem String-Teil von Kapitel 2 zusammen.
  kernpunkte:
    - char ist primitiv, String ist ein Objekt
    - einfache und doppelte Anführungszeichen
    - == bei Strings vergleicht Objekte
- id: sl-karte-suche
  frage: Erkläre deine Suchschleife, die indexOf nachbaut. Warum steht die Indexprüfung links vom &&?
  antwort: |
    Die Schleife rückt den Index weiter, solange er gültig ist und das Zeichen dort nicht das gesuchte ist. Danach steht der
    Index entweder auf dem ersten Treffer, oder er ist gleich der Länge, dann gebe ich -1 aus. Java wertet `&&` von links aus
    und bricht ab, wenn links false steht. So wird `charAt` nie mit einem ungültigen Index aufgerufen. In umgekehrter
    Reihenfolge stürzt das Programm ab, wenn das Zeichen fehlt.
  kernpunkte:
    - zwei Abbruchgründe in der Bedingung
    - Auswertung nach der Schleife, -1 bei Misserfolg
    - Kurzschlussauswertung schützt charAt
- id: sl-karte-break-continue
  frage: Was ist der Unterschied zwischen break und continue? Wann würdest du break verwenden?
  antwort: |
    `break` beendet die ganze innerste Schleife sofort. `continue` beendet nur den aktuellen Durchlauf, bei einer for-Schleife
    folgen danach Aktualisierung und Bedingung. Ich verwende break zum Beispiel bei einer Suche, wenn der erste Treffer
    gefunden ist. Ohne break würde ein späterer Treffer die gespeicherte Position überschreiben. Oft ist aber eine
    zusätzliche Bedingung im Schleifenkopf klarer.
  kernpunkte:
    - break verlässt die Schleife
    - continue überspringt den Rest des Durchlaufs
    - Einsatz bei der Suche nach dem ersten Treffer
- id: sl-karte-do-while
  frage: Wann ist do-while besser als while? Nenne ein Beispiel, bei dem while ein falsches Ergebnis liefert.
  antwort: |
    Wenn der Rumpf mindestens einmal laufen muss. Beispiel: die Ziffern einer Zahl von hinten ausgeben. Mit
    `while (n > 0)` erscheint für n = 0 gar nichts, obwohl 0 eine Ziffer hat. Mit do-while wird die 0 einmal ausgegeben.
    Ein zweites Beispiel ist eine Eingabe, die man wiederholt, bis sie gültig ist, denn gefragt wird mindestens einmal.
  kernpunkte:
    - mindestens ein Durchlauf
    - Gegenbeispiel Zahl 0
    - Eingabe wiederholen
- id: sl-karte-wahl
  frage: Woran erkennst du, ob du for, while oder do-while verwenden solltest? Sind die Schleifen gleich mächtig?
  antwort: |
    Alle drei sind gleich mächtig, jede lässt sich in jede andere umformen. Es geht um Lesbarkeit. for passt, wenn Start,
    Ende und Schrittweite feststehen, zum Beispiel bei einem Intervall. while passt, wenn nur ein Endkriterium bekannt ist,
    etwa beim Halbieren oder Suchen. do-while passt, wenn der Rumpf mindestens einmal laufen muss.
  kernpunkte:
    - gleich mächtig, ineinander umformbar
    - feste Grenzen für for, Endkriterium für while
    - mindestens einmal für do-while
- id: sl-karte-verschachtelt
  frage: Wie oft läuft der Rumpf der inneren Schleife bei verschachtelten Schleifen? Was ändert sich, wenn die innere Grenze von i abhängt?
  antwort: |
    Die innere Schleife läuft für jeden Durchlauf der äußeren vollständig. Bei festen Grenzen multipliziert man: 4 äußere
    und 6 innere Durchläufe ergeben 24. Hängt die innere Grenze von i ab, etwa `j <= i`, bestimmt man die inneren Durchläufe
    je Zeile und addiert, zum Beispiel 1 + 2 + 3 + 4 = 10. Mit dieser Zählweise schätzt man auch ab, wie lange ein
    Programm läuft.
  kernpunkte:
    - innere Schleife läuft je äußerem Durchlauf ganz
    - feste Grenzen ergeben ein Produkt
    - abhängige Grenzen ergeben eine Summe
- id: sl-karte-zeile-mehr
  frage: Welche Schleife musst du ändern, damit eine Zeile mehr ausgegeben wird, und welche, damit jede Zeile länger wird?
  antwort: |
    Die Zeilen entstehen durch das println, das in der äußeren Schleife nach der inneren steht. Mehr Zeilen bekommt man
    also über die äußere Schleife, etwa `i <= n` statt `i < n`. Die innere Schleife bestimmt die Zeichen pro Zeile. Ändert
    man dort `j < n` zu `j <= n`, wird jede Zeile um ein Zeichen länger, aber die Zeilenzahl bleibt gleich.
  kernpunkte:
    - println in der äußeren Schleife erzeugt die Zeilen
    - äußere Schleife bestimmt die Zeilenzahl
    - innere Schleife bestimmt die Zeilenlänge
```
