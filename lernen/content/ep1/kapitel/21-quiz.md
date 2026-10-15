---
nummer: 21
titel: "Quiz-Werkstatt: Auswahl, Richtig/Falsch und Lückentext"
kurz: Wie die TUWEL-Quiz von EP1 aufgebaut sind, wie du Auswahlfragen durch Ausschließen löst, Richtig/Falsch-Aussagen zerlegst und mit Gegenbeispielen prüfst, und welche Fallen in jedem Fragentyp von Quiz 1 bis Quiz 4 warten.
teil: training
stunden: 4
pruefungsgewicht: 3
voraussetzungen: [ausdruecke, verzweigungen, schleifen, methoden, rekursion, rekursion-vertieft, arrays, arrays-2d]
lernziele:
  - eine Auswahlfrage mit drei Optionen durch Ausschließen der falschen Optionen lösen und für jede verworfene Option den Grund benennen
  - eine Richtig/Falsch-Aussage in Gegenstand, Behauptung und Geltungsbereich zerlegen und sie mit einem Gegenbeispiel oder einem Randfall beurteilen
  - in Code-Fragmenten implizite Typumwandlungen zählen, zulässige Zuweisungen erkennen und Ausdrücke mit Casts, char und String-Verkettung exakt auswerten
  - zu Verzweigungen und Schleifen die Startwerte, Schleifenköpfe und Änderungen bestimmen, die eine vorgegebene Ausgabe oder Summe erzeugen
  - für eine Methode die Aufrufsequenz zu einer Ausgabe, eine ausreichende Vorbedingung und eine korrekte Nachbedingung auswählen
  - Aussagen über Array-Inhalte, die Kapazität mehrdimensionaler Arrays und rekursive Methoden (Ergebnis, Terminierung, Art, Zahl der Aufrufe) beurteilen
  - Aussagen über die O-Schranke von Schleifen, Varianten der linearen Suche sowie Zwischenzustände und Stabilität einfacher Sortierverfahren beurteilen
  - Lücken in Java-Code so füllen, dass er übersetzt und das Verlangte leistet, und die Zeit im Quiz sinnvoll einteilen
---

**Worum geht es?** In EP1 bringen die **Quiz** die meisten Punkte: vier Quiz mit zusammen 40 von 100 Punkten.
Das ist mehr als die Aufgabenblätter (24 Punkte) und mehr als der Test am Rechner (30 Punkte). Ein Quiz ist ein
Test auf **TUWEL**, der Lernplattform der TU Wien. Du beantwortest dort Fragen zu Java-Code, ohne den Code
ausführen zu können. Du darfst die Vorlesungsfolien und die Java-API verwenden. Die **Java-API** ist die offizielle
Beschreibung aller fertigen Klassen und Methoden, etwa von `String` oder `Math`.

Dieses Kapitel bringt dir keinen neuen Java-Stoff bei. Den Stoff kennst du aus den Kapiteln 2 bis 19. Hier lernst
du etwas anderes: **wie man Quizfragen liest und sicher beantwortet.** Viele Punkte gehen im Quiz nicht verloren,
weil jemand den Stoff nicht kann. Sie gehen verloren, weil jemand eine Aussage zu schnell liest, nur den ersten
Durchlauf einer Schleife prüft oder ein Wort wie „immer“ übersieht.

**Was kommt in der Prüfung?** Wie die vier Quiz im Wintersemester 2026/27 genau aussehen, ist noch nicht
veröffentlicht. Dieses Kapitel folgt deshalb den TUWEL-Tests der Jahre 2021 bis 2023. Die Kennzeichnung lautet:
**Format nach TUWEL-Tests 2021–2023, 2026W unbestätigt.** Belegt sind drei Fragetypen.

- **Auswahlfrage** (Test 1, 2021): zehn Fragen mit je drei Antworten, genau eine ist richtig, je 1 Punkt.
- **Richtig/Falsch-Block** (Test 2, 2021 bis 2023): zehn Fragen mit je vier Aussagen, je 2 Punkte. In den überlieferten
  Versuchen gab es 1 Punkt, wenn genau eine Aussage falsch beurteilt war, sonst 0 Punkte.
- **Lückentext** (Sommersemester 2024, laut Studierendenberichten): Code mit Lücken, die du selbst füllst.

Die Fragen folgen über die Jahre festen **Schablonen**. Eine Schablone ist ein Fragemuster, bei dem sich nur
Code und Zahlen ändern. Jede Lektion dieses Kapitels behandelt einige dieser Schablonen. Sie zeigt die typische
Falle und trainiert sie mit eigenen, neu gebauten Fragen im selben Format. Originalfragen findest du hier nicht.
Sie bleiben den Prüfungssimulationen vorbehalten.

:::vorwissen
Du brauchst den Stoff aus den bisherigen Kapiteln, besonders:

- **Ausdrücke, Casts und Strings** aus [Kapitel 2](/lernen/ep1/ausdruecke).
- **Verzweigungen und Schleifen** aus [Kapitel 3](/lernen/ep1/verzweigungen) und [Kapitel 4](/lernen/ep1/schleifen).
- **Methoden mit Vor- und Nachbedingungen** aus [Kapitel 6](/lernen/ep1/methoden).
- **Rekursion** aus [Kapitel 10](/lernen/ep1/rekursion) und [Kapitel 11](/lernen/ep1/rekursion-vertieft).
- **Arrays** aus [Kapitel 12](/lernen/ep1/arrays) und [Kapitel 14](/lernen/ep1/arrays-2d).
- **Laufzeit, Suchen und Sortieren** aus [Kapitel 17](/lernen/ep1/komplexitaet), [Kapitel 18](/lernen/ep1/suchen) und [Kapitel 19](/lernen/ep1/sortieren).

Die folgenden sechs Fragen zeigen dir, ob diese Grundlagen sitzen. Wenn eine Frage nicht klappt, wiederhole
zuerst die verlinkte Lektion. Code-Ausschnitte ohne Methodenkopf stehen in der Methode `main`.
:::

```aufgabe
id: qz-ein-ganzzahl
titel: Ganzzahldivision mitten im Ausdruck
niveau: 1
art: check
angabe: |
  Was gibt diese Zeile aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      System.out.println(7 / 2 * 2.0);
    loesung: |
      6.0
    fehler:
      - wert: "7.0"
        meldung: '`7 / 2` sind zwei `int`-Werte. Java rechnet von links nach rechts, also zuerst `7 / 2 = 3` mit Ganzzahldivision. Erst danach kommt `3 * 2.0`.'
      - wert: "6"
        meldung: 'Der zweite Faktor `2.0` ist ein `double`. Darum ist auch das Ergebnis ein `double` und wird mit `.0` ausgegeben.'
loesung: |
  `7 / 2` steht links und wird zuerst berechnet. Beide Werte sind `int`, also Ganzzahldivision: Ergebnis `3`.
  ---
  `3 * 2.0` mischt `int` und `double`. Die `3` wird zu `3.0`, das Ergebnis ist `6.0`.
```

```aufgabe
id: qz-ein-equals
titel: Den Inhalt zweier Strings vergleichen
niveau: 1
art: check
angabe: |
  `a` und `b` sind zwei Variablen vom Typ `String`. Welcher Ausdruck prüft zuverlässig, ob beide **denselben Text**
  enthalten? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: auswahl
    optionen: ['`a == b`', '`a.equals(b)`', '`a.length() == b.length()`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`==` vergleicht bei Strings, ob beide Variablen auf **dasselbe Objekt** zeigen. Zwei gleiche Texte können verschiedene Objekte sein.'
      - wert: 2
        meldung: 'Gleiche Länge heißt nicht gleicher Text: `"Hut"` und `"Tag"` haben beide die Länge 3.'
loesung: |
  `equals` vergleicht Zeichen für Zeichen den Inhalt.
  ---
  `==` vergleicht nur die Referenzen, also die Speicheradressen. Für den Textvergleich ist es unzuverlässig.
```

```aufgabe
id: qz-ein-for-anzahl
titel: Durchläufe einer for-Schleife
niveau: 1
art: check
angabe: |
  Wie oft läuft der Rumpf von `for (int i = 3; i <= 12; i += 3) { ... }`?
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: 'Die Bedingung ist `i <= 12`. Bei `i = 12` ist sie noch wahr, also läuft auch dieser Durchlauf.'
      - wert: "12"
        meldung: 'Die Schrittweite ist 3, nicht 1. `i` springt von 3 auf 6, 9 und 12.'
loesung: |
  `i` nimmt die Werte 3, 6, 9 und 12 an. Alle erfüllen `i <= 12`.
  ---
  Beim nächsten Wert 15 ist die Bedingung falsch. Also 4 Durchläufe.
```

```aufgabe
id: qz-ein-vorbedingung
titel: Was eine Vorbedingung ist
niveau: 1
art: check
angabe: |
  Welche Beschreibung passt zum Begriff **Vorbedingung** einer Methode?
  (Wiederholung: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))
teile:
  - typ: auswahl
    optionen:
      - 'Was der Aufrufer über die Parameter garantieren muss, damit die Methode richtig arbeitet.'
      - 'Was die Methode über ihr Ergebnis garantiert.'
      - 'Die erste Zeile im Rumpf der Methode.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist die **Nachbedingung**. Sie spricht über das Ergebnis am Ende der Methode.'
      - wert: 2
        meldung: 'Eine Vorbedingung ist keine Anweisung im Code, sondern eine Aussage über die Werte beim Aufruf.'
loesung: |
  Die Vorbedingung ist der Teil des Vertrags, den der **Aufrufer** einhalten muss.
  ---
  Die Nachbedingung ist der Teil, den die **Methode** einhält, sofern die Vorbedingung erfüllt war.
```

```aufgabe
id: qz-ein-array
titel: Letzter Index und Standardwert
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] a = new int[4];
      a[1] = 5;
      System.out.println(a.length + " " + a[a.length - 1]);
    loesung: |
      4 0
    fehler:
      - wert: "3 0"
        meldung: '`a.length` ist die Anzahl der Elemente, also 4. Nur der **letzte Index** ist 3.'
      - wert: "4 5"
        meldung: 'Der Wert 5 steht an Index 1. Der letzte Index ist `a.length - 1 = 3`, und dort steht noch der Standardwert.'
loesung: |
  `new int[4]` legt vier Elemente mit dem Standardwert 0 an. `a.length` ist 4.
  ---
  `a[a.length - 1]` ist `a[3]`. Dort wurde nichts gespeichert, also steht dort 0.
```

```aufgabe
id: qz-ein-rekursion
titel: Eine kleine Rekursion auswerten
niveau: 1
art: check
angabe: |
  Gegeben ist
  ```java
  static int f(int n) {
      if (n <= 0) return 0;
      return n + f(n - 2);
  }
  ```
  Welchen Wert liefert `f(5)`? (Wiederholung: [10.3 Rekursion mit ganzen Zahlen](/lernen/ep1/rekursion/rekursion-mit-ganzen-zahlen))
teile:
  - typ: zahl
    loesung: "5 + 3 + 1 + 0"
    fehler:
      - wert: "15"
        meldung: 'Der Selbstaufruf ist `f(n - 2)`, nicht `f(n - 1)`. Es werden nur 5, 3 und 1 addiert.'
      - wert: "8"
        meldung: 'Nach `f(3)` kommt noch `f(1)`. Erst `f(-1)` erreicht den Basisfall.'
loesung: |
  `f(5) = 5 + f(3)`, `f(3) = 3 + f(1)`, `f(1) = 1 + f(-1)` und `f(-1) = 0`.
  ---
  Auf dem Rückweg: `f(1) = 1`, `f(3) = 4`, `f(5) = 9`.
```

## Das Quizformat und Auswahlfragen

```aufgabe
id: qz-format-check
titel: Wie viele Antworten sind richtig?
niveau: 1
art: check
angabe: |
  In den TUWEL-Tests 2021 stand bei jeder Auswahlfrage „Wählen Sie eine Antwort“. Was folgt daraus?
teile:
  - typ: auswahl
    optionen: ['Genau eine der drei Optionen ist richtig.', 'Mindestens eine Option ist richtig, es können auch mehrere sein.', 'Es kann sein, dass keine Option richtig ist.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mehrere richtige Antworten gibt es nur bei einer **Mehrfachauswahl**. Dort steht „Wählen Sie eine oder mehrere Antworten“.'
      - wert: 2
        meldung: 'Bei einer Einfachauswahl ist immer genau eine Option richtig. Wenn du keine findest, hast du dich irgendwo verrechnet.'
loesung: |
  „Wählen Sie eine Antwort“ kennzeichnet eine **Einfachauswahl**: genau eine Option ist richtig.
  ---
  Das ist eine wertvolle Information. Wenn du zwei Optionen sicher ausgeschlossen hast, ist die dritte richtig.
```

### Wie ein TUWEL-Quiz abläuft

Ein Quiz läuft im Browser. Du siehst eine Frage nach der anderen und kannst über die **Test-Navigation** zwischen
den Fragen springen. Die Test-Navigation ist die Leiste mit den Fragenummern. Am Ende gibst du den ganzen Versuch
ab. Danach zeigt TUWEL die erreichten Punkte und meist auch die richtigen Antworten. Ein überlieferter Versuch vom
Jänner 2023 mit zehn Richtig/Falsch-Fragen dauerte 40 Minuten, also vier Minuten je Frage. Wie viel Zeit die Quiz
2026W erlauben, ist nicht veröffentlicht.

Jedes Quiz darfst du laut Lehrveranstaltungsbeschreibung **einmal wiederholen**, und das bessere Ergebnis zählt.
Ausprobieren kannst du den Code während des Quiz nicht. Du arbeitest mit Papier, Bleistift und den erlaubten
Unterlagen. Genau dafür hast du in den Kapiteln 2 und 4 die **Trace-Tabelle** geübt: eine Tabelle, in der du
nach jedem Schritt den Wert jeder Variable notierst.

### Die Auswahlfrage

:::definition[Einfachauswahl (Single Choice)]
Eine **Einfachauswahl**, englisch *single choice*, ist eine Frage mit mehreren vorgegebenen Antworten, den
**Optionen**. Genau eine Option ist richtig. Die falschen Optionen heißen **Distraktoren**, vom lateinischen
*distrahere*: ablenken. Sie sind absichtlich so gebaut, dass sie auf den ersten Blick richtig aussehen.
:::

**Beispiel:** „Welche Schleife gibt `3,6,9,12,` aus?“ mit drei Schleifen als Optionen ist eine Einfachauswahl.

**Nicht-Beispiel:** „Welche der folgenden Zuweisungen übersetzen? Wählen Sie alle passenden aus.“ ist **keine**
Einfachauswahl, sondern eine **Mehrfachauswahl**. Dort können mehrere Optionen richtig sein.

In den TUWEL-Tests 2021 unterscheiden sich die drei Optionen oft nur in **einer Kleinigkeit**: `<` statt
`<=`, Startwert 0 statt 1, `print` statt `println`, `'#'` statt `"#"`. Die Distraktoren sind keine zufällig
falschen Programme. Jeder Distraktor steht für einen typischen Denkfehler. Daraus folgt die wichtigste Technik
dieser Lektion: **Lies die Optionen nebeneinander und markiere, was sich unterscheidet.** Nur diese Stellen musst
du genau prüfen. Alles, was in allen Optionen gleich ist, entscheidet nichts.

:::beispiel[Welche Schleife erzeugt die Ausgabe?]
Gesucht ist die Schleife, die genau `3,6,9,12,` ausgibt.

```java
// Option A
for (int i = 3; i < 12; i += 3) System.out.print(i + ",");
// Option B
for (int i = 0; i <= 12; i += 3) System.out.print(i + ",");
// Option C
for (int i = 3; i <= 12; i += 3) System.out.print(i + ",");
```

**Schritt 1: Unterschiede markieren.** Alle drei haben den Rumpf `System.out.print(i + ",")` und die
Schrittweite `i += 3`. Unterschiede gibt es nur beim Startwert (3 oder 0) und bei der Bedingung (`<` oder `<=`).

**Schritt 2: Nur die Unterschiede prüfen.** Der Startwert bestimmt die **erste** Zahl, die Bedingung die **letzte**.

- Option A startet bei 3. Der letzte Kandidat 12 erfüllt `12 < 12` nicht. Ausgabe `3,6,9,`. Die 12 fehlt.
- Option B startet bei 0. Ausgabe `0,3,6,9,12,`. Die 0 ist zu viel.
- Option C startet bei 3 und lässt 12 zu, denn `12 <= 12` ist wahr. Ausgabe `3,6,9,12,`.

**Schritt 3: Ergebnis.** Zwei Optionen sind mit Begründung ausgeschlossen, Option C passt. Sie ist richtig.
:::

Beachte, wie wenig du rechnen musstest. Du hast nicht jede Schleife komplett durchgespielt. Du hast für jede
Option nur den ersten und den letzten Wert geprüft, denn nur dort unterscheiden sich die Optionen.

:::beispiel[Ein String rückwärts mit Trennzeichen]
Es gilt `String s = "Kino";`. Gesucht ist das Fragment mit der Ausgabe `o-n-i-K-`.

```java
// Option A
for (int i = s.length() - 1; i >= 0; i--) System.out.print(s.charAt(i) + "-");
// Option B
for (int i = s.length(); i > 0; i--) System.out.print(s.charAt(i) + "-");
// Option C
for (int i = s.length() - 1; i > 0; i--) System.out.print(s.charAt(i) + "-");
```

**Unterschiede:** Startwert (`s.length() - 1` oder `s.length()`) und Bedingung (`i >= 0` oder `i > 0`).

- Option B startet bei `i = 4`. `"Kino"` hat die Indizes 0 bis 3. `s.charAt(4)` gibt es nicht. Das Programm bricht
  sofort mit einer `StringIndexOutOfBoundsException` ab, also einem Fehler wegen eines ungültigen Index.
- Option C hört bei `i > 0` auf. Index 0 kommt nie dran, das `K` fehlt. Ausgabe `o-n-i-`.
- Option A läuft von Index 3 bis Index 0. Ausgabe `o-n-i-K-`. Das ist die richtige Option.

`s.charAt(i) + "-"` ist übrigens ein `char` plus ein **String**. Weil ein String beteiligt ist, wird verkettet.
:::

```aufgabe
id: qz-aw-countdown
titel: Welche Schleife zählt herunter?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Schleife erzeugt genau die Ausgabe `5 4 3 2 1 ` (mit einem Leerzeichen nach jeder Zahl)?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 5; i >= 1; i--) System.out.print(i + " ");`'
      - '`for (int i = 5; i > 1; i--) System.out.print(i + " ");`'
      - '`for (int i = 5; i >= 0; i--) System.out.print(i + " ");`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe den letzten Durchlauf: Bei `i = 1` ist `1 > 1` falsch. Die 1 wird also nicht mehr ausgegeben.'
      - wert: 2
        meldung: 'Bei `i = 0` ist `0 >= 0` noch wahr. Diese Schleife gibt am Ende zusätzlich `0 ` aus.'
hinweise:
  - Alle drei Optionen starten bei 5 und zählen um 1 herunter. Nur die Bedingung ist verschieden.
loesung: |
  **Ansatz:** Unterschiede markieren. Nur die Bedingung unterscheidet sich, sie bestimmt die letzte Zahl.
  ---
  Option 2 endet bei 2, weil `1 > 1` falsch ist. Option 3 gibt auch noch 0 aus, weil `0 >= 0` wahr ist.
  ---
  Option 1 lässt 1 zu (`1 >= 1`) und schließt 0 aus (`0 >= 1` ist falsch). Sie ist richtig.
```

:::achtung[Nur den Anfang der Ausgabe geprüft]
Eine typische falsche Überlegung zur Option C des Kino-Beispiels:

> „Option C beginnt bei `s.length() - 1`, also beim `o`. Die Ausgabe fängt mit `o-n-i-` an. Passt!“

Der Anfang stimmt, aber das Ende nicht: `i > 0` lässt den Index 0 aus, das `K` fehlt. Distraktoren sind genau so
gebaut, dass der Anfang stimmt. **Prüfe immer den ersten und den letzten Durchlauf.** Beim letzten Durchlauf
fragst du: Erfüllt der letzte gewünschte Wert die Bedingung noch? Und erfüllt der nächste Wert sie nicht mehr?
:::

:::achtung[Ein char plus ein char ist eine Zahl]
Eine Option sieht fast genauso aus wie die richtige, nur mit einfachen statt doppelten Anführungszeichen:

```java
for (int i = s.length() - 1; i >= 0; i--) System.out.print(s.charAt(i) + '-');
```

Wer das für richtig hält, übersieht den Typ. `'-'` ist ein `char`, kein String. `char + char` ist eine
**Rechnung mit Zahlen**: `'o'` hat den Code 111 und `'-'` den Code 45. Für das `o` wird also `156` statt `o-`
ausgegeben. Insgesamt erscheint die Zahlenkette `156155150120`, ohne ein einziges `-`. Achte in
jeder Option auf die Art der Anführungszeichen: `'x'` ist ein Zeichen, `"x"` ist ein String.
:::

```aufgabe
id: qz-aw-println
titel: print oder println?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Anweisungsfolge erzeugt genau diese zwei Zeilen?
  ```text
  ab
  c
  ```
teile:
  - typ: auswahl
    optionen:
      - '`System.out.print("a"); System.out.println("b"); System.out.print("c");`'
      - '`System.out.println("a"); System.out.print("b"); System.out.print("c");`'
      - '`System.out.print("a"); System.out.print("b"); System.out.print("c");`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`println("a")` gibt `a` aus und beginnt danach eine neue Zeile. Die Ausgabe wäre `a` und darunter `bc`.'
      - wert: 2
        meldung: 'Ohne `println` gibt es keinen Zeilenumbruch. Die Ausgabe wäre `abc` in einer Zeile.'
hinweise:
  - '`println` setzt den Zeilenumbruch **nach** seinem Text. `print` setzt keinen.'
loesung: |
  **Ansatz:** Der Zeilenumbruch muss nach dem `b` kommen, also muss genau `b` mit `println` ausgegeben werden.
  ---
  Option 1: `a`, dann `b` mit Umbruch, dann `c` in der neuen Zeile. Das ergibt `ab` und `c`.
  ---
  Option 2 bricht nach dem `a` um, Option 3 nie. Richtig ist Option 1.
```

:::merke[Auswahlfragen durch Ausschließen lösen]
1. **Unterschiede markieren:** Lies die Optionen nebeneinander. Unterstreiche, was nicht überall gleich ist.
2. **Gezielt prüfen:** Prüfe nur diese Stellen, bei Schleifen den ersten und den letzten Durchlauf.
3. **Ausschließen mit Grund:** Schreib zu jeder falschen Option in einem Halbsatz, warum sie falsch ist.
4. **Gegenprobe:** Die übrige Option spielst du einmal vollständig durch. Erst dann kreuzt du an.
:::

Warum ist Schritt 3 so wichtig? Wer nur nach der richtigen Option sucht, hört bei der ersten auf, die gut aussieht.
Wer jede falsche Option mit Grund verwirft, merkt sofort, wenn zwei Optionen übrig bleiben. Dann steckt irgendwo
ein Rechenfehler, und du schaust noch einmal hin.

### Die Zeit einteilen

Im überlieferten Versuch von 2023 waren es zehn Fragen in 40 Minuten. Das klingt nach viel Zeit. Aber
Richtig/Falsch-Fragen haben je vier Aussagen, und eine Trace-Tabelle braucht Platz und Ruhe. Ein bewährter Plan in
drei Durchgängen:

1. **Erster Durchgang:** Jede Frage lesen. Was sofort klar ist, beantwortest du. Bei allem anderen notierst du die
   Fragenummer auf deinem Zettel und springst weiter.
2. **Zweiter Durchgang:** Die notierten Fragen mit Trace-Tabelle lösen.
3. **Reserve:** Plane etwa fünf Minuten am Ende ein. Damit prüfst du, ob jede Frage beantwortet ist.

Eine leere Antwort bringt sicher keinen Punkt. Wie TUWEL falsche Antworten bei den Quiz 2026W wertet, ist nicht
veröffentlicht. Lies dazu die Angaben am Anfang des Quiz.

```aufgabe
id: qz-aw-zeitplan
titel: Zeit je Frage
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Angenommen, ein Quiz hat 10 Fragen und dauert 40 Minuten. Du willst am Ende 6 Minuten zum Kontrollieren übrig haben.
  Wie viele Minuten hast du dann **durchschnittlich je Frage**? Gib das Ergebnis als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "(40 - 6) / 10"
    einheit: min
    fehler:
      - wert: "4"
        meldung: 'Das sind 40 Minuten geteilt durch 10 Fragen. Die 6 Minuten Reserve musst du vorher abziehen.'
      - wert: "0.6"
        meldung: 'Du hast die Reserve durch 10 geteilt. Gefragt ist die Zeit, die für die Fragen selbst bleibt, geteilt durch 10.'
hinweise:
  - Zieh zuerst die Reserve von der Gesamtzeit ab.
loesung: |
  **Ansatz:** Für die Fragen bleiben 40 − 6 = 34 Minuten.
  ---
  34 Minuten auf 10 Fragen sind 3,4 Minuten je Frage, also etwa 3 Minuten und 24 Sekunden.
```

```aufgabe
id: qz-aw-gerade
titel: Gerade Zahlen mit Strichpunkt
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Welches Fragment gibt genau `2;4;6;8;10;` aus?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 1; i <= 10; i++) if (i % 2 == 0) System.out.print(i + ";");`'
      - '`for (int i = 2; i < 10; i += 2) System.out.print(i + ";");`'
      - '`for (int i = 0; i <= 10; i += 2) System.out.print(i + ";");`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der letzte Kandidat 10 erfüllt `10 < 10` nicht. Die Ausgabe endet mit `8;`.'
      - wert: 2
        meldung: 'Der Startwert ist 0, und 0 ist gerade. Die Ausgabe beginnt mit `0;`.'
hinweise:
  - Prüfe bei jeder Option die erste und die letzte ausgegebene Zahl.
  - 'Option 1 läuft über alle Zahlen von 1 bis 10. Welche davon lässt der Filter `i % 2 == 0` durch?'
gefuehrt:
  - text: Welche Zahl gibt Option 2 als letzte aus?
    teil: { typ: zahl, loesung: "8", fehler: [{ wert: "10", meldung: "Bei `i = 10` ist `10 < 10` falsch. Dieser Durchlauf findet nicht mehr statt." }] }
    erklaerung: '`i` nimmt 2, 4, 6, 8 an. Bei 10 ist `i < 10` falsch. Option 2 scheidet aus.'
  - text: Welche Zahl gibt Option 3 als erste aus?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Option 3 startet bei 0. Die 0 ist zu viel, also scheidet auch Option 3 aus.
  - text: Spiel zur Gegenprobe Option 1 durch. Welche Zahlen lässt der Filter `i % 2 == 0` durch?
    erklaerung: 'Von 1 bis 10 sind das 2, 4, 6, 8 und 10. Jede bekommt einen Strichpunkt dahinter: `2;4;6;8;10;`.'
loesung: |
  **Ansatz:** Unterschiede markieren: Startwert, Bedingung, Schrittweite und Filter.
  ---
  Option 2 endet bei 8, Option 3 beginnt bei 0. Beide sind ausgeschlossen.
  ---
  Gegenprobe Option 1: Sie prüft alle Zahlen 1 bis 10 und gibt nur die geraden aus, also `2;4;6;8;10;`.
```

```aufgabe
id: qz-aw-gruende
titel: Begründungen beim Ausschließen
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Es gilt `String w = "Rad";`. Gesucht ist ein Fragment mit der Ausgabe `d.a.R.`. Drei Kandidaten:
  ```java
  // Option 1
  for (int i = w.length(); i >= 0; i--) System.out.print(w.charAt(i) + ".");
  // Option 2
  for (int i = w.length() - 1; i >= 0; i--) System.out.print(w.charAt(i) + '.');
  // Option 3
  for (int i = 0; i < w.length(); i++) System.out.print(w.charAt(w.length() - 1 - i) + ".");
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Option 1 bricht mit einer Exception ab, bevor sie irgendetwas ausgibt.
        richtig: true
        erklaerung: 'Der erste Index ist `w.length()`, also 3. `"Rad"` hat nur die Indizes 0 bis 2. Schon der erste Aufruf `charAt(3)` scheitert.'
      - text: Option 2 erzeugt die gesuchte Ausgabe.
        richtig: false
        erklaerung: "`'.'` ist ein `char`. `char + char` wird als Zahl gerechnet, zum Beispiel `'d' + '.'` = 100 + 46 = 146."
      - text: Option 3 erzeugt die gesuchte Ausgabe.
        richtig: true
        erklaerung: '`i` läuft vorwärts, aber der Index `w.length() - 1 - i` läuft rückwärts: 2, 1, 0.'
      - text: Ist schon das erste ausgegebene Zeichen einer Option falsch, kann man die Option ausschließen.
        richtig: true
        erklaerung: 'Gesucht ist die **ganze** Ausgabe. Weicht ein Teil ab, ist die Ausgabe falsch, egal wie der Rest aussieht.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Sieh dir in Option 2 die Anführungszeichen um den Punkt an. Was ergibt ein `char` plus ein `char`?'
      - wert: [r, r, f, r]
        meldung: 'Rechne in Option 3 den Index für `i = 0`, `i = 1` und `i = 2` aus. Welche Zeichen kommen heraus?'
hinweise:
  - Markiere die Unterschiede zwischen den Optionen. Es geht um den Startindex, die Art der Anführungszeichen und die Indexrechnung.
  - 'Bei Option 3 setzt du `w.length() = 3` ein. Der Index ist dann `2 - i`.'
loesung: |
  **Ansatz:** Jede Option an der Stelle prüfen, an der sie sich von den anderen unterscheidet.
  ---
  Option 1 startet bei Index 3 und scheitert sofort. Option 2 verwendet `'.'`, also wird gerechnet statt verkettet.
  ---
  Option 3 greift auf die Indizes 2, 1 und 0 zu und hängt jeweils den String `"."` an: `d.a.R.`. Die vierte Aussage ist die Grundlage des Ausschließens. Eine Abweichung genügt.
```

```aufgabe
id: qz-aw-zaehlen
titel: Welches Fragment zählt richtig?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Es gilt `String s = "Erdbeere"; int z = 0;`. Welches Fragment speichert in `z` die Anzahl der kleinen `e` in `s`?
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 0; i <= s.length(); i++) if (s.charAt(i) == ''e'') z++;`'
      - '`for (int i = 0; i < s.length(); i++) if (s.charAt(i) == "e") z++;`'
      - '`for (int i = 0; i < s.length(); i++) if (s.charAt(i) == ''e'') z++;`'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Mit `i <= s.length()` greift der letzte Durchlauf auf `charAt(8)` zu. Den Index gibt es nicht, das Programm bricht mit einer Exception ab.'
      - wert: 1
        meldung: '`s.charAt(i)` ist ein `char`, `"e"` ist ein `String`. Diese beiden Typen lassen sich nicht mit `==` vergleichen. Der Compiler meldet einen Fehler.'
hinweise:
  - Die Optionen unterscheiden sich in der Bedingung der Schleife und in den Anführungszeichen um das `e`.
  - Der letzte gültige Index eines Strings ist `s.length() - 1`. Und ein Zeichen vergleichst du mit einem Zeichen.
loesung: |
  **Ansatz:** Unterschiede markieren: `<=` oder `<`, und `'e'` oder `"e"`.
  ---
  Option 1 läuft einen Index zu weit und bricht ab. Option 2 übersetzt nicht, weil `char` und `String` nicht mit `==` verglichen werden können.
  ---
  Option 3 prüft die Indizes 0 bis 7 und vergleicht Zeichen mit Zeichen. In `"Erdbeere"` stehen drei kleine `e`, also ist danach `z = 3`. Das große `E` am Anfang zählt nicht, denn `'E'` und `'e'` sind verschiedene Zeichen.
```

```aufgabe
id: qz-aw-muster
titel: Ein Muster mit zwei Trennzeichen
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 4 (Schablone, eigene Zahlen)
angabe: |
  Welches Fragment erzeugt genau die Ausgabe `1,2,3|4,5,6|7,`?
  ```java
  // Option 1
  for (int i = 1; i <= 7; i++) {
      System.out.print(i);
      if (i % 3 == 0) System.out.print("|"); else System.out.print(",");
  }
  // Option 2
  for (int i = 1; i <= 7; i++) {
      System.out.print(i);
      if (i % 3 == 1) System.out.print("|"); else System.out.print(",");
  }
  // Option 3
  for (int i = 1; i < 7; i++) {
      System.out.print(i);
      if (i % 3 == 0) System.out.print("|"); else System.out.print(",");
  }
  ```
teile:
  - typ: auswahl
    optionen: ['Option 1', 'Option 2', 'Option 3']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne `1 % 3` aus: Das ist 1. Option 2 setzt also schon nach der 1 einen Strich. Ihre Ausgabe beginnt mit `1|`.'
      - wert: 2
        meldung: 'Option 3 läuft nur bis `i = 6`, weil `7 < 7` falsch ist. Am Ende fehlt `7,`.'
hinweise:
  - 'Der Strich `|` kommt nach 3 und 6. Welche Bedingung mit `%` ist genau für 3 und 6 wahr?'
  - 'Option 1 und Option 3 unterscheiden sich nur in der Bedingung der Schleife. Prüfe dort den letzten Durchlauf.'
loesung: |
  **Ansatz:** Die Ausgabe hat zwei Merkmale: Nach jeder dritten Zahl steht `|`, sonst ein Komma, und die letzte Zahl ist 7.
  ---
  Ein Strich nach 3 und 6 heißt: Die Bedingung muss für Vielfache von 3 wahr sein, also `i % 3 == 0`. Option 2 setzt den Strich nach 1, 4 und 7 und scheidet aus.
  ---
  Option 3 endet bei 6. Option 1 läuft bis 7 und gibt `1,2,3|4,5,6|7,` aus. Richtig ist Option 1.
```

```reflexion
frage: Warum ist es sicherer, zwei Optionen mit Begründung auszuschließen, als die richtige Option direkt zu suchen?
antwort: |
  Wer direkt sucht, kreuzt die erste Option an, die gut aussieht. Distraktoren sind aber genau so gebaut, dass sie
  gut aussehen: Der Anfang der Ausgabe stimmt, nur der letzte Durchlauf oder ein Anführungszeichen ist anders. Wer jede
  falsche Option mit einem konkreten Grund verwirft, prüft jede Option an ihrer kritischen Stelle. Bleiben am Ende zwei
  Optionen übrig oder keine, weiß man sofort, dass man sich verrechnet hat, und kann gezielt nachprüfen.
```

## Richtig oder falsch: Aussagen zerlegen und prüfen

```aufgabe
id: qz-rf-check
titel: Ist jede ungerade Zahl am Rest 1 erkennbar?
niveau: 1
art: check
angabe: |
  Stimmt die Aussage „Für jede ungerade `int`-Zahl `x` ist `x % 2 == 1` wahr“?
  (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: auswahl
    optionen: ['richtig', 'falsch']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probier eine negative ungerade Zahl. In Java hat der Rest das Vorzeichen der linken Zahl: `-3 % 2` ist `-1`.'
loesung: |
  Für positive ungerade Zahlen stimmt es: `7 % 2` ist 1.
  ---
  Für `x = -3` ist `x % 2` aber `-1`. Ein einziges Gegenbeispiel macht die Aussage „für jede“ falsch. Sicher ist `x % 2 != 0`.
```

### Wie ein Richtig/Falsch-Block aufgebaut ist

In den TUWEL-Tests 2 der Jahre 2021 bis 2023 bestand jede Frage aus einem **Stamm** und vier **Aussagen**. Der
Stamm ist der gemeinsame Teil: meist eine Methode, dazu ihre Vorbedingung, manchmal ein Beispiel für richtiges
Verhalten. Zu jeder der vier Aussagen kreuzt du „Richtig“ oder „Falsch“ an. Eine Frage brachte 2 Punkte, drei richtige
Aussagen brachten 1 Punkt, weniger brachten 0 Punkte. Die Wertung der Quiz 2026W ist nicht veröffentlicht.

Die vier Aussagen sind voneinander **unabhängig**. Es können alle vier richtig sein, alle vier falsch, oder jede
Mischung. Schließe also nie aus „drei sind schon richtig“, dass die vierte falsch sein muss.

### Die drei Teile einer Aussage

Jede Aussage über Code lässt sich in drei Teile zerlegen.

1. **Gegenstand:** Worüber spricht die Aussage? Über den Rückgabewert, eine Ausgabe, den Inhalt eines Arrays nach
   der Ausführung, die Terminierung? **Terminieren** heißt: Das Programm kommt nach endlich vielen Schritten zum Ende.
2. **Behauptung:** Was genau wird behauptet? Ein bestimmter Wert, eine Exception, „ist sortiert“, „ist endrekursiv“?
3. **Geltungsbereich:** Für welche Eingaben soll das gelten? Für alle, für manche, für eine bestimmte?

Der dritte Teil entscheidet am häufigsten über die Punkte. Er steckt in kleinen **Signalwörtern**.

:::definition[Allaussage und Existenzaussage]
Eine **Allaussage** behauptet etwas für **alle** erlaubten Eingaben. Signalwörter sind „immer“, „nie“, „für jedes“,
„für beliebige“, „für jeden gültigen Wert“. Eine Allaussage ist **falsch**, sobald es **ein einziges Gegenbeispiel**
gibt. Ein **Gegenbeispiel** ist eine erlaubte Eingabe, für die die Behauptung nicht stimmt.

Eine **Existenzaussage** behauptet, dass es **mindestens eine** passende Eingabe gibt. Signalwörter sind „kann“,
„es gibt“, „für bestimmte Werte“, „manchmal“. Eine Existenzaussage ist **richtig**, sobald du **ein einziges
Beispiel** findest.
:::

**Beispiel:** „Die Methode liefert für jedes `n` eine gerade Zahl“ ist eine Allaussage. Findest du ein `n` mit
ungeradem Ergebnis, ist sie falsch. „Die Methode kann 9 liefern“ ist eine Existenzaussage. Findest du ein `n` mit
Ergebnis 9, ist sie richtig.

**Nicht-Beispiel:** „Der Aufruf `f(4)` liefert 4“ ist weder Allaussage noch Existenzaussage. Sie spricht über
genau einen Aufruf. Hier rechnest du einfach diesen einen Aufruf aus.

```aufgabe
id: qz-rf-signalwort
titel: Signalwörter erkennen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Formulierung macht aus „Die Methode liefert `true`“ eine **Allaussage**?
teile:
  - typ: auswahl
    optionen: ['„Die Methode liefert **immer** `true`.“', '„Die Methode **kann** `true` liefern.“', '„Die Methode liefert **für bestimmte Werte** `true`.“']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '„kann“ heißt „für mindestens eine Eingabe“. Das ist eine Existenzaussage.'
      - wert: 2
        meldung: '„für bestimmte Werte“ heißt „es gibt Werte, für die …“. Das ist eine Existenzaussage.'
hinweise:
  - Eine Allaussage spricht über **jede** erlaubte Eingabe.
loesung: |
  **Ansatz:** Signalwörter für alle Eingaben sind „immer“, „nie“, „für jedes“.
  ---
  „kann“ und „für bestimmte Werte“ sind Existenzaussagen. Nur „immer“ macht eine Allaussage.
```

**Die Vorbedingung begrenzt die erlaubten Eingaben.** Steht im Stamm „Vorbedingung: `n > 0`“, dann zählt `n = 0`
nicht als Gegenbeispiel. Die Methode verspricht für `n = 0` nichts, also kann sie dort auch nichts falsch machen.

:::beispiel[Vier Aussagen zu einer Summenmethode]
```java
// Vorbedingung: 0 <= n <= 1000
public static int f(int n) {
    int s = 0;
    for (int i = 1; i < n; i += 2) {
        s += i;
    }
    return s;
}
```
Die Methode addiert die ungeraden Zahlen 1, 3, 5, … , solange sie kleiner als `n` sind. Die Obergrenze 1000 in der
Vorbedingung sorgt dafür, dass `s` nie zu groß für einen `int` wird. Ohne sie gäbe es ab `n = 92682` einen
**Überlauf**: Die Summe passt nicht mehr in einen `int` und wird negativ (siehe
[2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen)). Eine kleine Wertetabelle
hilft. Sie ist schnell gemacht und deckt die Randfälle 0 und 1 mit ab.

| `n` | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| `f(n)` | 0 | 0 | 1 | 1 |

| `n` | 4 | 5 | 6 |
|---|---|---|---|
| `f(n)` | 4 | 4 | 9 |

- **„`f` liefert immer eine gerade Zahl.“** Allaussage. Gegenbeispiel `n = 2` mit `f(2) = 1`. **Falsch.**
- **„Für bestimmte `n` liefert `f` den Wert 9.“** Existenzaussage. Beispiel `n = 6`, denn 1 + 3 + 5 = 9. **Richtig.**
- **„`f(n)` ist nie negativ.“** Allaussage. Addiert werden nur positive Zahlen, `s` beginnt bei 0, und dank der
  Vorbedingung gibt es keinen Überlauf. **Richtig.**
- **„Für jedes gerade `n` mit `n < 1000` gilt `f(n) == f(n + 1)`.“** Allaussage. Für gerades `n` ist `n` selbst nicht ungerade. Der
  Schritt von `i < n` zu `i < n + 1` lässt also keine neue ungerade Zahl zu. Die Tabelle bestätigt es. **Richtig.**
:::

Beachte den Unterschied: Für „falsch“ bei einer Allaussage genügt ein Gegenbeispiel. Für „richtig“ bei einer
Allaussage brauchst du eine **Begründung**, die für alle Eingaben gilt. Ein paar passende Beispiele reichen dafür
nicht. Die Tabelle stützt die Begründung, ersetzt sie aber nicht.

### „nur dann, wenn“ und „genau“

Zwei weitere Signalwörter verlangen besondere Sorgfalt.

- **„nur dann true, wenn X“** heißt: Immer wenn `true` herauskommt, gilt X. Du suchst eine Eingabe, die `true`
  liefert, obwohl X nicht gilt. Findest du eine, ist die Aussage falsch. Steht dahinter „ansonsten false“, prüfst du
  auch die andere Richtung: Gibt es eine Eingabe, bei der X gilt, die aber `false` liefert?
- **„genau“** verlangt einen exakten Wert. „Die Schleife läuft genau n-mal“ ist falsch, wenn sie n − 1 oder n + 1
  Mal läuft.

:::beispiel[Eine Palindrom-Prüfung beurteilen]
Ein **Palindrom** ist ein Wort, das vorwärts und rückwärts gleich gelesen wird, etwa `"otto"`.

```java
// Vorbedingung: s != null
public static boolean g(String s) {
    for (int i = 0; i < s.length() / 2; i++) {
        if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {
            return false;
        }
    }
    return true;
}
```
Die Methode vergleicht das erste mit dem letzten Zeichen, das zweite mit dem vorletzten und so weiter. Sobald
ein Paar verschieden ist, liefert sie `false`.

- **„`g` liefert nur dann `true`, wenn `s` ein Palindrom ist, ansonsten `false`.“** Erste Richtung: `true` kommt nur,
  wenn kein Paar verschieden war. Dann ist `s` ein Palindrom. Zweite Richtung: Bei einem Palindrom sind alle Paare
  gleich, also liefert `g` `true`. **Richtig.**
- **„Für den leeren String wirft `g` eine Exception.“** `"".length() / 2` ist 0. Die Schleife läuft keinmal, und `g`
  liefert `true`. Der leere String ist ein Randfall, der hier harmlos ist. **Falsch.**
- **„Ersetzt man `s.length() / 2` durch `s.length()`, ändert sich kein Rückgabewert.“** Dann wird jedes Paar zweimal
  verglichen, einmal von vorn und einmal von hinten. Der Index `s.length() - 1 - i` bleibt zwischen 0 und
  `s.length() - 1`. Es gibt also keine Exception und kein anderes Ergebnis. **Richtig.**
:::

:::achtung[Ein Beispiel beweist keine Allaussage]
Bei der Summenmethode `f` überlegt jemand so:

> „Für `n = 0` kommt 0 heraus, für `n = 1` auch 0. Beides gerade. Also liefert `f` immer eine gerade Zahl.“

Zwei passende Beispiele sagen nichts über alle anderen Eingaben. Schon `n = 2` liefert 1. Bei einer Allaussage
suchst du **gezielt ein Gegenbeispiel**, besonders bei den Randfällen. Randfälle sind die Grenzen der erlaubten
Eingaben: 0, 1, negative Zahlen, der leere String, ein Array der Länge 1, gleiche Werte, gerade und ungerade Länge.
:::

```aufgabe
id: qz-rf-gegenbeispiel
titel: Das kleinste Gegenbeispiel
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Aussage: „Für jede `int`-Zahl `n >= 0` gilt `n * n > n`.“ Die Aussage ist falsch. Gib das **kleinste**
  Gegenbeispiel an.
teile:
  - typ: zahl
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: '`1 * 1 > 1` ist zwar auch falsch, also ist 1 ein Gegenbeispiel. Gefragt ist aber das kleinste. Prüfe zuerst den Randfall ganz am Anfang des Bereichs.'
      - wert: "2"
        meldung: '`2 * 2 = 4` und `4 > 2` ist wahr. Für 2 stimmt die Aussage, 2 ist also kein Gegenbeispiel.'
hinweise:
  - Fang beim kleinsten erlaubten Wert an.
loesung: |
  **Ansatz:** Bei einer Allaussage die Randfälle zuerst prüfen. Der kleinste erlaubte Wert ist 0.
  ---
  `0 * 0 = 0`, und `0 > 0` ist falsch. Also ist 0 ein Gegenbeispiel, und kleiner geht es nicht.
```

:::achtung[Ein Gegenbeispiel außerhalb der Vorbedingung]
```java
// Vorbedingung: n > 0
public static int h(int n) {
    return 100 / n;
}
```
Aussage: „Für jeden gültigen Wert von `n` liefert `h` ein Ergebnis ohne Exception.“ Jemand kreuzt „falsch“ an:

> „Für `n = 0` gibt es eine Division durch 0, also eine `ArithmeticException`.“

Das ist kein Gegenbeispiel. `n = 0` verletzt die Vorbedingung `n > 0` und ist darum kein gültiger Wert. Für alle
`n > 0` ist die Division erlaubt. Die Aussage ist **richtig**. Lies vor jeder Aussage die Vorbedingung im Stamm.
:::

:::merke[Lesetechnik für Richtig/Falsch-Aussagen]
1. **Stamm lesen:** Was tut der Code? Was sagt die Vorbedingung über erlaubte Eingaben?
2. **Zerlegen:** Gegenstand, Behauptung, Geltungsbereich. Unterstreiche Signalwörter wie „immer“, „kann“, „nur dann“, „genau“.
3. **Prüfen:** Bei einer Allaussage gezielt ein Gegenbeispiel suchen, zuerst bei den Randfällen. Bei einer Existenzaussage ein Beispiel suchen.
4. **Entscheiden mit Grund:** Notiere das Gegenbeispiel oder die Begründung in Stichworten. Dann erst ankreuzen.
:::

```aufgabe
id: qz-rf-logik
titel: Wann ist eine Aussage falsch?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über Richtig/Falsch-Fragen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Allaussage ist falsch, sobald es ein einziges Gegenbeispiel gibt, das die Vorbedingung erfüllt.
        richtig: true
        erklaerung: '„immer“ verträgt keine einzige Ausnahme.'
      - text: Eine Existenzaussage ist richtig, wenn du drei Eingaben findest, für die sie nicht stimmt.
        richtig: false
        erklaerung: 'Für „es gibt“ brauchst du ein **passendes** Beispiel. Eingaben, für die es nicht stimmt, sagen nichts.'
      - text: Wenn drei Aussagen eines Blocks richtig sind, muss die vierte falsch sein.
        richtig: false
        erklaerung: Die vier Aussagen sind unabhängig. Auch vier richtige Aussagen sind möglich.
      - text: Eine Eingabe, die die Vorbedingung verletzt, ist kein gültiges Gegenbeispiel.
        richtig: true
        erklaerung: Für solche Eingaben verspricht die Methode nichts.
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Die Aussagen eines Blocks hängen nicht voneinander ab. Jede wird für sich am Code geprüft.'
hinweise:
  - Erinnere dich an die Definition von Allaussage und Existenzaussage.
loesung: |
  **Ansatz:** Jede Aussage an der Definition prüfen.
  ---
  Allaussage: ein Gegenbeispiel genügt für „falsch“. Existenzaussage: ein Beispiel genügt für „richtig“.
  ---
  Die Aussagen sind unabhängig, und Eingaben außerhalb der Vorbedingung zählen nicht.
```

```aufgabe
id: qz-rf-zaehlen
titel: Aussagen zu einer Zählmethode
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  ```java
  // Vorbedingung: s != null
  public static int z(String s, char c) {
      int k = 0;
      for (int i = 1; i < s.length(); i++) {
          if (s.charAt(i) == c) {
              k++;
          }
      }
      return k;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`z` liefert immer die Anzahl der Vorkommen von `c` in `s`.'
        richtig: false
        erklaerung: "Die Schleife beginnt bei Index 1. Das erste Zeichen wird nie geprüft. Gegenbeispiel: `z(\"aa\", 'a')` liefert 1 statt 2."
      - text: "`z(\"\", 'x')` wirft eine Exception."
        richtig: false
        erklaerung: 'Bei Länge 0 ist `1 < 0` falsch. Die Schleife läuft keinmal, und `z` liefert 0.'
      - text: 'Es gibt Strings `s`, für die `z(s, c)` die Anzahl der Vorkommen richtig liefert.'
        richtig: true
        erklaerung: "Zum Beispiel `z(\"ba\", 'a')` liefert 1. Das stimmt, weil das `a` nicht an Index 0 steht."
      - text: '`z(s, c)` ist nie größer als `s.length() - 1`.'
        richtig: false
        erklaerung: 'Für den leeren String ist `s.length() - 1` gleich −1, aber `z` liefert 0. Und 0 ist größer als −1.'
    fehler:
      - wert: [f, f, r, r]
        meldung: 'Prüfe die vierte Aussage mit dem kleinsten möglichen String. Was ist `s.length() - 1` für `""`?'
      - wert: [r, f, r, r]
        meldung: 'Wo beginnt die Schleife? Wird das Zeichen an Index 0 jemals geprüft?'
hinweise:
  - Achte auf den Startwert der Schleife.
  - Prüfe jede Allaussage mit den Randfällen `""` und einem String der Länge 1 oder 2.
gefuehrt:
  - text: Welchen Index prüft die Schleife zuerst?
    teil: { typ: zahl, loesung: "1", fehler: [{ wert: "0", meldung: "Schau auf `int i = 1` im Schleifenkopf." }] }
    erklaerung: Index 0 wird nie geprüft. Das ist der Fehler der Methode.
  - text: "Was liefert `z(\"aa\", 'a')`?"
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Nur das `a` an Index 1 wird gezählt. Richtig wäre 2, also ist die erste Aussage falsch.
  - text: Was liefert `z` für den leeren String, und was ist dort `s.length() - 1`?
    teil: { typ: zahl, label: "z(\"\", c)", loesung: "0" }
    erklaerung: 'Die Schleife läuft keinmal, Ergebnis 0. Aber `s.length() - 1 = -1`. Weil 0 > −1 ist, ist die vierte Aussage falsch.'
loesung: |
  **Ansatz:** Den Code zuerst verstehen: Die Schleife beginnt bei Index 1 und zählt die Treffer.
  ---
  Aussage 1 und 4 sind Allaussagen. Gegenbeispiele: `"aa"` für Aussage 1 und `""` für Aussage 4. Beide falsch.
  ---
  Aussage 2 ist falsch, weil die Schleife für `""` keinmal läuft. Aussage 3 ist eine Existenzaussage, `"ba"` ist ein Beispiel. Sie ist richtig.
```

```aufgabe
id: qz-rf-maximum
titel: Aussagen zu einer Maximumsuche
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  ```java
  // Vorbedingung: a != null, a.length > 0
  public static int m(int[] a) {
      int max = 0;
      for (int i = 0; i < a.length; i++) {
          if (a[i] > max) {
              max = a[i];
          }
      }
      return max;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`m` liefert immer das größte Element von `a`.'
        richtig: false
        erklaerung: 'Gegenbeispiel `{-3, -5}`: Kein Element ist größer als 0, also bleibt `max = 0`. Das größte Element wäre −3.'
      - text: '`m` liefert für jedes Array, das mindestens einen Wert `>= 0` enthält, das größte Element.'
        richtig: true
        erklaerung: 'Ist das größte Element mindestens 0, wird es beim Durchlauf in `max` übernommen oder ist selbst 0.'
      - text: '`m` kann einen Wert liefern, der in `a` gar nicht vorkommt.'
        richtig: true
        erklaerung: 'Bei `{-3, -5}` liefert `m` den Wert 0, der im Array nicht vorkommt.'
      - text: '`m` wirft für ein Array der Länge 1 eine Exception.'
        richtig: false
        erklaerung: 'Die Schleife läuft einmal mit `i = 0`. Das ist ein gültiger Index.'
    fehler:
      - wert: [r, r, f, f]
        meldung: 'Probier ein Array, in dem alle Werte negativ sind. Was steht dann am Ende in `max`?'
hinweise:
  - Der Startwert `max = 0` ist verdächtig. Für welche Arrays wird er nie überschrieben?
  - Prüfe die Randfälle Länge 1 und „alle Werte negativ“.
loesung: |
  **Ansatz:** Den Startwert prüfen. Richtig wäre `max = a[0]`. Mit 0 als Startwert bleibt `max` bei lauter negativen Werten 0.
  ---
  Aussage 1 ist eine Allaussage mit Gegenbeispiel `{-3, -5}`, also falsch. Aussage 3 ist eine Existenzaussage mit genau diesem Beispiel, also richtig.
  ---
  Aussage 2 begrenzt die Eingaben so, dass das Problem nicht auftritt: richtig. Aussage 4 ist falsch, Index 0 gibt es bei Länge 1.
```

```aufgabe
id: qz-rf-nurdann
titel: „nur dann“ und „genau dann“
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  ```java
  // Vorbedingung: n > 0
  public static boolean t(int n) {
      return n % 4 == 0 || n % 6 == 0;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`t` liefert nur dann `true`, wenn `n` gerade ist.'
        richtig: true
        erklaerung: 'Liefert `t` `true`, ist `n` durch 4 oder durch 6 teilbar. Beides sind gerade Zahlen.'
      - text: '`t` liefert für jede gerade Zahl `n` den Wert `true`.'
        richtig: false
        erklaerung: 'Gegenbeispiel `n = 2`: weder durch 4 noch durch 6 teilbar.'
      - text: '`t` liefert genau dann `true`, wenn `n` durch 12 teilbar ist.'
        richtig: false
        erklaerung: '`t(4)` ist `true`, aber 4 ist nicht durch 12 teilbar.'
      - text: '`t(n)` und `t(2 * n)` können verschiedene Werte haben.'
        richtig: true
        erklaerung: '`t(2)` ist `false`, `t(4)` ist `true`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: '„nur dann, wenn gerade“ und „für jede gerade Zahl“ sind verschiedene Richtungen. Probier `n = 2`.'
      - wert: [f, f, f, r]
        meldung: 'Zur ersten Aussage: Gibt es eine ungerade Zahl, die durch 4 oder durch 6 teilbar ist?'
hinweise:
  - 'Bei „nur dann true, wenn X“ suchst du ein `n` mit `true`, für das X nicht gilt.'
  - 'Bei „genau dann“ prüfst du beide Richtungen. Bei „können“ genügt ein Beispiel.'
loesung: |
  **Ansatz:** Für jede Aussage die Richtung klären, die geprüft werden muss.
  ---
  Aussage 1: Jedes `n` mit `true` ist ein Vielfaches von 4 oder 6 und damit gerade. Richtig. Aussage 2 ist die Umkehrung, `n = 2` widerlegt sie.
  ---
  Aussage 3 scheitert an `n = 4`. Aussage 4 ist eine Existenzaussage mit dem Beispiel `n = 2`. Richtig.
```

```aufgabe
id: qz-rf-potenz
titel: Aussagen zu einer while-Schleife
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  ```java
  // Vorbedingung: 1 <= n <= 1000
  public static int p(int n) {
      int r = 1;
      while (r < n) {
          r = r * 3;
      }
      return r;
  }
  ```
  Die Obergrenze 1000 schließt einen Überlauf von `r` aus. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für jedes gültige `n` gilt `p(n) >= n`.'
        richtig: true
        erklaerung: 'Die Schleife endet erst, wenn `r < n` falsch ist, also wenn `r >= n` gilt.'
      - text: '`p` liefert immer eine Potenz von 3, also 1, 3, 9, 27 und so weiter.'
        richtig: true
        erklaerung: '`r` beginnt bei 1 und wird nur mit 3 multipliziert.'
      - text: '`p(n) == n` gilt nur für `n = 1`.'
        richtig: false
        erklaerung: 'Auch `p(3)` ist 3 und `p(9)` ist 9. Es gilt für jede Potenz von 3.'
      - text: Für bestimmte gültige `n` terminiert die Schleife nicht.
        richtig: false
        erklaerung: '`r` verdreifacht sich in jedem Durchlauf, ist also nach höchstens 7 Schritten mindestens `n`, denn 3⁷ = 2187 > 1000.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Rechne `p(3)` aus. Welcher Wert kommt heraus, und ist 3 gleich 1?'
      - wert: [f, r, f, f]
        meldung: 'Wann endet die Schleife? Was gilt in diesem Moment für `r` und `n`?'
hinweise:
  - 'Überlege, was beim Verlassen der Schleife gilt: Die Bedingung `r < n` ist dann falsch.'
  - Mach eine kleine Tabelle für `n` = 1, 2, 3, 4, 9, 10.
loesung: |
  **Ansatz:** Der Wert nach einer while-Schleife erfüllt die **verneinte** Bedingung, hier `r >= n`. Daraus folgt Aussage 1.
  ---
  `r` durchläuft 1, 3, 9, 27, … Also ist das Ergebnis immer eine Potenz von 3 (Aussage 2 richtig), und die Schleife endet immer (Aussage 4 falsch).
  ---
  Aussage 3 ist eine „nur“-Aussage. Gegenbeispiel: `p(3) = 3`. Falsch. Kontrolle mit der Tabelle: `p(1)=1`, `p(2)=3`, `p(3)=3`, `p(4)=9`, `p(9)=9`, `p(10)=27`.
```

```reflexion
frage: Warum genügt für „falsch“ bei einer Allaussage ein Gegenbeispiel, während für „richtig“ eine Begründung nötig ist?
antwort: |
  Eine Allaussage behauptet etwas für jede erlaubte Eingabe. Eine einzige Eingabe, für die es nicht stimmt, widerlegt
  das bereits. Für „richtig“ müsste man aber jede erlaubte Eingabe prüfen, und das sind meist unendlich viele oder
  zumindest viel zu viele. Darum braucht man ein Argument, das für alle gleichzeitig gilt, etwa „die Schleife endet
  erst, wenn `r >= n` ist“. Beispiele helfen beim Finden der Begründung, können sie aber nicht ersetzen.
```

## Quiz 1: Typen, Casts und Strings

```aufgabe
id: qz-typ-check
titel: char in einer int-Variable
niveau: 1
art: check
angabe: |
  Übersetzt die Zeile `int i = 'A';` ohne Fehler?
  (Wiederholung: [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast))
teile:
  - typ: auswahl
    optionen: ['Ja, `i` bekommt den Zeichencode 65.', 'Nein, ein Zeichen passt nicht in eine Zahlvariable.', 'Ja, `i` bekommt den Text `"A"`.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`char` → `int` ist eine Erweiterung. Jedes Zeichen hat eine Nummer, und die passt in einen `int`.'
      - wert: 2
        meldung: 'Eine `int`-Variable speichert nie Text. Gespeichert wird die Nummer des Zeichens.'
loesung: |
  `char` steht in der Kette der Erweiterungen links von `int`. Die Umwandlung geschieht von selbst.
  ---
  `'A'` hat den Zeichencode 65. Also gilt danach `i == 65`.
```

Die ersten Fragen von Quiz 1 drehen sich in den TUWEL-Tests 2021 um **Datentypen**. Drei Schablonen kehren wieder:

- **Slot 1:** Wie viele implizite Typumwandlungen finden in diesen Zeilen statt? Oder: Welchen Wert hat ein Ausdruck
  mit Cast?
- **Slot 2:** Welche Zuweisung ist direkt nach diesen Deklarationen zulässig, übersetzt also ohne Fehler?
- **Slot 7:** Ein String wird in einer Schleife zusammengebaut. Welche Änderung einer Zeile liefert eine andere,
  vorgegebene Ausgabe?

Das Wort **Slot** (englisch: Steckplatz) meint hier den Platz einer Frage im Test. In jedem Versuch kommt an diesen
Platz eine Frage desselben Musters, nur mit anderem Code. Den Stoff dazu erklärt
[Kapitel 2](/lernen/ep1/ausdruecke). Hier geht es um die Technik und die Fallen.

### Implizite Typumwandlungen zählen

Eine **implizite Typumwandlung** macht Java von selbst, ohne dass im Code etwas dafür steht. Sie geschieht nur in
Richtung größerer Typen: `byte` → `short` → `int` → `long` → `float` → `double`, und `char` → `int`. Ein **Cast**
wie `(int) x` ist dagegen eine **ausdrückliche** Umwandlung. Er zählt nicht als implizit. Die genaue Zählregel
steht im Merke-Kasten von [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast):

1. **Zuweisung:** Hat der Wert rechts einen anderen Typ als die Variable links, zählt das als eine Umwandlung.
2. **Rechnung:** Haben die beiden Operanden einer Operation verschiedene Typen, wird der kleinere umgewandelt. Das
   zählt als eine weitere.

Ein **Operand** ist ein Wert, mit dem ein Operator rechnet. In `b * 2` sind `b` und `2` die Operanden von `*`.

:::beispiel[Umwandlungen Zeile für Zeile zählen]
```java
int a = 7;
long b = a;
double c = b * 2;
float d = (float) c;
c = a / 2;
```
- Zeile 1: `7` ist ein `int`-Literal, `a` ist `int`. Keine Umwandlung.
- Zeile 2: Rechts steht `int`, links `long`. **Eine** Umwandlung (`int` → `long`). Stand: 1.
- Zeile 3: In `b * 2` trifft `long` auf `int`. Die `2` wird zu `long`, das ist die zweite. Das Ergebnis ist `long`
  und wird einem `double` zugewiesen, das ist die dritte. Stand: 3.
- Zeile 4: `(float) c` ist ein Cast. Danach steht rechts schon `float`, links auch. Keine implizite Umwandlung.
- Zeile 5: `a / 2` sind zwei `int`, Ergebnis `int` (nämlich 3). Die Zuweisung an `double` ist die vierte.

Antwort: **4** implizite Typumwandlungen. Der Wert von `c` am Ende ist übrigens `3.0`, nicht `3.5`.
:::

### Zulässige Zuweisungen erkennen

Bei Slot 2 stehen zuerst einige Deklarationen, danach drei Zuweisungen. Genau eine übersetzt. Du prüfst für jede
Zuweisung zwei Fragen. Welchen Typ hat die rechte Seite? Darf dieser Typ ohne Cast in die Variable links? Die
wichtigsten Typen rechts sind:

- `s.charAt(i)` hat den Typ `char`, nicht `String`.
- `s.length()` und `s.indexOf(...)` haben den Typ `int`.
- `s.substring(...)` hat den Typ `String`.
- Eine Rechnung mit `char` und `int` hat den Typ `int`.

:::beispiel[Welche Zuweisung ist zulässig?]
Gegeben sind `String s = "Wien"; char c = 'x'; int n = 3; double d = 2.5;`. Welche Zuweisung übersetzt?

```java
// Option A
char k = s.charAt(n);
// Option B
int m = d;
// Option C
String t = c;
```
- Option A: `s.charAt(n)` hat den Typ `char`. `char` in `char` passt. Zulässig. Der Wert ist `'n'`.
- Option B: `double` → `int` ginge in der Kette nach links. Dafür braucht man einen Cast. Fehler.
- Option C: Ein `char` wird nie von selbst zum `String`. Fehler. Erlaubt wäre `String t = "" + c;`.

Richtig ist Option A.
:::

### Strings in einer Schleife zusammenbauen

Bei Slot 7 wächst ein String in einer Schleife. Entscheidend ist, auf welcher Seite das neue Zeichen angehängt wird.
Steht der bisherige String **links**, wächst das Ergebnis nach rechts, die Reihenfolge bleibt. Steht er **rechts**,
kommt jedes neue Zeichen nach vorn, die Reihenfolge dreht sich um.

:::beispiel[Ein Wort rückwärts mit Schrägstrichen]
```java
String s = "Bus";
String r = "";
for (int i = 0; i < s.length(); i++) {
    r = s.charAt(i) + "/" + r;   // Zeile A
}
System.out.println(r);
```

| `i` | Zeichen | `r` danach |
|---|---|---|
| 0 | `B` | `B/` |
| 1 | `u` | `u/B/` |
| 2 | `s` | `s/u/B/` |

Ausgabe: `s/u/B/`. Weil `r` rechts steht, landet jedes neue Zeichen vorn. Ein Ausdruck wie `s.charAt(i) + "/"`
ist `char` plus `String`, also wird verkettet. Stünde in Zeile A `r = r + "/" + s.charAt(i);`, käme `/B/u/s` heraus:
gleiche Reihenfolge wie im Wort, Trennzeichen jeweils **vor** dem Zeichen.
:::

:::achtung[Cast auf die Summe oder auf jeden Summanden]
Die Frage lautet: „Welchen Wert hat `(int) 2.6f + (int) 3.7f`?“ Jemand rechnet:

> „2,6 + 3,7 = 6,3, abgeschnitten 6.“

Das wäre `(int) (2.6f + 3.7f)`. Ohne Klammer um die Summe wirkt jeder Cast nur auf die Zahl direkt dahinter:
`(int) 2.6f` ist 2, `(int) 3.7f` ist 3, zusammen **5**. Achte bei jedem Cast darauf, wie weit er reicht. Ein Cast
wirkt auf den nächsten Wert oder auf die nächste Klammer, nicht auf den ganzen Ausdruck.
:::

:::achtung[String-Verkettung von links nach rechts]
`System.out.println(1 + 2 + "x" + 1 + 2);` Jemand erwartet `3x3`, weil „die Zahlen addiert werden“.

Java wertet `+` von links nach rechts aus. `1 + 2` sind zwei `int`, also 3. Dann `3 + "x"` ist ein String: `"3x"`.
Ab jetzt ist links immer ein String, und jedes weitere `+` hängt an: `"3x1"`, dann `"3x12"`. Ausgabe: **`3x12`**.
Sobald links ein String steht, wird nicht mehr gerechnet.
:::

```aufgabe
id: qz-typ-cast-summe
titel: Wie weit reicht der Cast?
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println((int) (4.6 + 2.7));
      System.out.println((int) 4.6 + (int) 2.7);
    loesung: |
      7
      6
    fehler:
      - wert: "8\n6"
        meldung: 'Ein Cast nach `int` **schneidet ab**, er rundet nicht. Aus 7,3 wird 7.'
      - wert: "7\n7"
        meldung: 'In der zweiten Zeile wirkt jeder Cast nur auf seine eigene Zahl: `(int) 4.6` ist 4 und `(int) 2.7` ist 2.'
hinweise:
  - Prüfe für jeden Cast, ob eine Klammer dahinter steht oder nur eine Zahl.
loesung: |
  **Ansatz:** Zuerst klären, worauf sich jeder Cast bezieht.
  ---
  Zeile 1: Die Klammer `(4.6 + 2.7)` wird zuerst berechnet, ergibt 7,3. Der Cast schneidet ab: `7`.
  ---
  Zeile 2: `(int) 4.6` ist 4, `(int) 2.7` ist 2. Summe `6`.
```

```aufgabe
id: qz-typ-zaehlen-klein
titel: Drei Zeilen, wie viele Umwandlungen?
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Wie viele **implizite** Typumwandlungen finden statt? Zähle nach der Regel aus [2.4 Typumwandlung: implizit und mit Cast](/lernen/ep1/ausdruecke/typumwandlung-implizit-und-mit-cast).
  ```java
  int i = 4;
  double x = i;
  long y = i + 1;
  char c = 'k';
  int z = c;
  ```
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: 'Schau dir `long y = i + 1;` an. `i + 1` hat den Typ `int`, die Variable links ist `long`. Auch das ist eine Umwandlung.'
      - wert: "4"
        meldung: 'In `i + 1` haben beide Operanden den Typ `int`. Dort wird nichts umgewandelt, erst bei der Zuweisung.'
hinweise:
  - Prüfe jede Zeile einzeln. Vergleiche den Typ rechts mit dem Typ der Variable links.
loesung: |
  **Ansatz:** Zeile für Zeile den Typ rechts mit dem Typ links vergleichen.
  ---
  `double x = i;` (`int` → `double`), `long y = i + 1;` (`int` → `long`) und `int z = c;` (`char` → `int`).
  ---
  Die Zeilen mit `int i = 4;` und `char c = 'k';` haben passende Literale. Ergebnis: 3.
```

```aufgabe
id: qz-typ-zulaessig
titel: Eine zulässige Zuweisung finden
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben sind die Deklarationen `String w = "Lampe"; int k = 2; char ch = 'q';`.
  Welche Zuweisung ist direkt danach zulässig?
teile:
  - typ: auswahl
    optionen: ['`char e = w.charAt(k);`', '`String v = w.charAt(k);`', '`int p = w;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`charAt` liefert einen `char`. Ein `char` wird nicht von selbst zum `String`.'
      - wert: 2
        meldung: 'Ein `String` wird nie von selbst zu einem `int`, und auch ein Cast wie `(int) w` übersetzt nicht.'
hinweise:
  - Bestimme zuerst den Typ der rechten Seite jeder Zuweisung.
loesung: |
  **Ansatz:** Typ rechts gegen Typ links prüfen.
  ---
  `w.charAt(k)` hat den Typ `char`. In eine `char`-Variable passt das, in eine `String`-Variable nicht.
  ---
  `int p = w;` scheitert, weil `String` kein Zahltyp ist. Richtig ist Option 1, der Wert ist `'m'`.
```

```aufgabe
id: qz-typ-zaehlen-mix
titel: Umwandlungen mit Cast dazwischen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Wie viele **implizite** Typumwandlungen finden statt?
  ```java
  int a = 3;
  double d = a * 1.5;
  long l = a;
  float f = l + a;
  d = (int) d;
  ```
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: 'Sieh dir die letzte Zeile genau an. Der Cast macht aus `d` einen `int`. Dieser `int` wird dann einer `double`-Variable zugewiesen.'
      - wert: "3"
        meldung: 'In `float f = l + a;` passiert zweimal etwas: Erst wird `a` für die Rechnung mit `l` zu `long`, dann wird das `long`-Ergebnis zu `float`.'
hinweise:
  - Zähle in jeder Zeile zuerst die Rechnung, dann die Zuweisung.
  - Ein Cast selbst zählt nie. Aber nach dem Cast kann bei der Zuweisung noch eine implizite Umwandlung folgen.
gefuehrt:
  - text: 'Wie viele implizite Umwandlungen stecken in `double d = a * 1.5;`?'
    teil: { typ: zahl, loesung: "1", fehler: [{ wert: "2", meldung: "`a * 1.5` hat schon den Typ `double`. Die Zuweisung an `double` braucht keine weitere Umwandlung." }] }
    erklaerung: '`a` wird für die Multiplikation mit `1.5` zu `double`. Das Ergebnis ist `double`, passend zu `d`.'
  - text: 'Und in `float f = l + a;`?'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`a` wird zu `long` (Rechnung), das Ergebnis `long` wird zu `float` (Zuweisung).'
  - text: 'Und in `d = (int) d;`?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Der Cast zählt nicht. Aber `(int) d` hat den Typ `int`, und die Zuweisung an `double` wandelt ihn um.'
  - text: Zähle alles zusammen. Vergiss `long l = a;` nicht.
    teil: { typ: zahl, loesung: "5" }
    erklaerung: 1 + 1 + 2 + 1 = 5.
loesung: |
  **Ansatz:** Jede Zeile in Rechnung und Zuweisung zerlegen und beides einzeln prüfen.
  ---
  Zeile 2: eine (`a` → `double`). Zeile 3: eine (`int` → `long`). Zeile 4: zwei (`a` → `long`, dann `long` → `float`).
  ---
  Zeile 5: Der Cast zählt nicht, die Zuweisung `int` → `double` schon. Summe: 1 + 1 + 2 + 1 = 5.
```

```aufgabe
id: qz-typ-verkettung
titel: Zahlen, Zeichen und Strings mit Plus
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 4, b = 5;
      char c = 'A';
      System.out.println(a + b + "|" + a + b);
      System.out.println("" + c + 1);
      System.out.println(c + 1 + "");
    loesung: |
      9|45
      A1
      66
    fehler:
      - wert: "9|9\nA1\n66"
        meldung: 'Rechts vom `"|"` steht links schon ein String. Ab da wird angehängt, nicht addiert: erst `4`, dann `5`.'
      - wert: "9|45\nB\n66"
        meldung: 'In `"" + c + 1` ist nach `"" + c` schon ein String da. Die `1` wird angehängt, nicht zum Zeichen addiert.'
      - wert: "9|45\nA1\nB"
        meldung: 'In `c + 1 + ""` rechnet Java zuerst `c + 1`. Das ist `char` plus `int`, also die Zahl 66. Erst danach kommt der String.'
hinweise:
  - Werte jedes `+` von links nach rechts aus. Frag dich jedes Mal, ob links schon ein String steht.
  - '`''A''` hat den Zeichencode 65.'
loesung: |
  **Ansatz:** Von links nach rechts auswerten. Solange beide Seiten Zahlen sind, wird gerechnet. Sobald eine Seite ein String ist, wird verkettet.
  ---
  Zeile 1: `4 + 5 = 9`, dann `"9|"`, dann `"9|4"`, dann `"9|45"`. Zeile 2: `"" + 'A'` ist `"A"`, dann `"A1"`.
  ---
  Zeile 3: `'A' + 1` ist `65 + 1 = 66` (Zahl), dann `66 + ""` ist `"66"`.
```

```aufgabe
id: qz-typ-akku
titel: Ein String wächst nach vorn
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Mond";
      String r = "";
      for (int i = 0; i < s.length(); i++) {
          r = "-" + s.charAt(i) + r;
      }
      System.out.println(r);
    loesung: |
      -d-n-o-M
    fehler:
      - wert: "-M-o-n-d"
        meldung: '`r` steht rechts in der Zuweisung. Das neue Stück kommt also **vor** den bisherigen String, die Reihenfolge dreht sich um.'
      - wert: "d-n-o-M-"
        meldung: 'Das Trennzeichen steht im neuen Stück **vor** dem Zeichen: `"-" + s.charAt(i)`. Jedes Stück hat die Form `-x`.'
hinweise:
  - Leg eine Tabelle mit den Spalten `i` und `r` an.
  - Das neue Stück ist jeweils `"-"` plus das Zeichen. Es kommt vor das alte `r`.
loesung: |
  **Ansatz:** Tabelle mit `r` nach jedem Durchlauf. Neues Stück: `"-" + Zeichen`, davor gesetzt.
  ---
  `r` wird `-M`, dann `-o-M`, dann `-n-o-M`, dann `-d-n-o-M`.
  ---
  Ausgabe: `-d-n-o-M`. Das Wort steht rückwärts, jedes Zeichen mit einem Strich davor.
```

```aufgabe
id: qz-typ-charat-aussagen
titel: Aussagen zu charAt
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Es gilt `String s = "Java"; char c = s.charAt(1);`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "Danach gilt `c == 'a'`."
        richtig: true
        erklaerung: 'Index 1 ist das zweite Zeichen von `"Java"`, also `a`.'
      - text: '`boolean b = s.charAt(1) == "a";` übersetzt.'
        richtig: false
        erklaerung: '`char` und `String` lassen sich nicht mit `==` vergleichen. Der Compiler meldet einen Fehler.'
      - text: '`int n = c;` übersetzt.'
        richtig: true
        erklaerung: '`char` → `int` ist eine Erweiterung. `n` bekommt den Code 97.'
      - text: 'Der Ausdruck `c + 1` hat den Typ `char`.'
        richtig: false
        erklaerung: '`char` plus `int` ergibt `int`. Für ein Zeichen bräuchte man `(char) (c + 1)`.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Welchen Typ hat eine Rechnung mit `char` und `int`? Probier `System.out.println(c + 1)` im Kopf.'
      - wert: [f, f, r, f]
        meldung: 'Die Indizes eines Strings beginnen bei 0. Welches Zeichen steht in `"Java"` an Index 1?'
hinweise:
  - '`charAt` liefert einen `char`. Ein `char` wird in Rechnungen zur Zahl.'
  - Vergleiche Zeichen mit Zeichen in einfachen Anführungszeichen.
loesung: |
  **Ansatz:** Für jede Aussage den Typ der beteiligten Ausdrücke bestimmen.
  ---
  `s.charAt(1)` ist `'a'`. Der Vergleich mit `"a"` (String) übersetzt nicht. Die Zuweisung an `int` ist eine Erweiterung.
  ---
  `c + 1` ist `int` (98). Aussagen 1 und 3 sind richtig, 2 und 4 falsch.
```

```aufgabe
id: qz-typ-zeile-a
titel: Welche Änderung dreht die Ausgabe um?
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 7 (Schablone, eigener String)
angabe: |
  ```java
  String s = "Katze";
  String r = "";
  for (int i = 0; i < s.length(); i++) {
      r = r + s.charAt(i) + "*";   // Zeile A
  }
  System.out.println(r);
  ```
  So ausgeführt, erscheint `K*a*t*z*e*`. Du willst stattdessen `*e*z*t*a*K` sehen. Durch welche Zeile musst du Zeile A
  ersetzen?
teile:
  - typ: auswahl
    optionen:
      - '`r = "*" + s.charAt(i) + r;`'
      - '`r = s.charAt(i) + "*" + r;`'
      - '`r = r + "*" + s.charAt(i);`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier steht der Stern **hinter** dem Zeichen. Das Ergebnis wäre `e*z*t*a*K*`: der Stern am Ende statt am Anfang.'
      - wert: 2
        meldung: '`r` steht links, also bleibt die Reihenfolge des Wortes erhalten. Ergebnis `*K*a*t*z*e`.'
hinweise:
  - Die Reihenfolge dreht sich nur um, wenn das neue Stück **vor** das alte `r` kommt.
  - 'Jedes Stück der gesuchten Ausgabe hat die Form „Stern, dann Zeichen“.'
loesung: |
  **Ansatz:** Zwei Dinge prüfen: Kommt das neue Stück vor oder hinter `r`? Und wie sieht ein Stück aus?
  ---
  Gesucht ist umgekehrte Reihenfolge, also muss `r` rechts stehen. Das schließt Option 3 aus. Ein Stück muss `*x` sein, nicht `x*`. Das schließt Option 2 aus.
  ---
  Option 1 baut `*K`, dann `*a*K`, dann `*t*a*K` und so weiter. Am Ende `*e*z*t*a*K`.
```

```reflexion
frage: Warum ergibt `'a' + 'b'` eine Zahl, `"" + 'a' + 'b'` aber den Text `ab`?
antwort: |
  Java wertet `+` von links nach rechts aus und entscheidet bei jedem `+` neu anhand der beiden Seiten. Bei `'a' + 'b'`
  sind beide Seiten `char`. Mit Zeichen rechnet Java wie mit Zahlen: 97 + 98 = 195. Bei `"" + 'a'` ist links ein
  String, also wird verkettet, und es entsteht `"a"`. Beim nächsten `+` steht links wieder ein String, also wird auch
  `'b'` angehängt. Der leere String am Anfang dient genau dazu, die Verkettung zu erzwingen.
```

## Quiz 1: Verzweigungen und Schleifen

```aufgabe
id: qz-vs-check
titel: Welcher Zweig läuft?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung))
teile:
  - typ: ausgabe
    code: |
      int x = 5;
      if (x > 5) {
          System.out.println("hoch");
      } else if (x > 2) {
          System.out.println("mittel");
      } else {
          System.out.println("tief");
      }
    loesung: |
      mittel
    fehler:
      - wert: "hoch"
        meldung: '`5 > 5` ist falsch, denn 5 ist nicht **größer** als 5. Der erste Zweig fällt weg.'
loesung: |
  `5 > 5` ist falsch, also wird die nächste Bedingung geprüft.
  ---
  `5 > 2` ist wahr. Ausgabe `mittel`. Der `else`-Zweig wird danach nicht mehr betrachtet.
```

Die Fragen 3 bis 6 von Quiz 1 betrafen 2021 Verzweigungen und Schleifen. Den Stoff erklären
[Kapitel 3](/lernen/ep1/verzweigungen) und [Kapitel 4](/lernen/ep1/schleifen). Die vier Schablonen lauten:

- **Slot 3:** Ein Programm mit verschachtelten `if`-Anweisungen. Welche Startwerte für `x`, `y` und `z` erzeugen
  eine bestimmte Ausgabe?
- **Slot 4:** Welche Schleife erzeugt eine vorgegebene Ausgabe mit Trennzeichen?
- **Slot 5:** Welches Programmfragment berechnet eine bestimmte Summe?
- **Slot 6:** Eine Doppelschleife zeichnet Sterne. Durch welche Änderung entsteht eine Zeile mehr oder halb so viele
  Sterne?

Slot 4 hast du in [21.1 Das Quizformat und Auswahlfragen](/lernen/ep1/quiz/das-quizformat-und-auswahlfragen) schon
geübt. In dieser Lektion geht es um die anderen drei.

### Startwerte für eine Ausgabe finden

Bei Slot 3 musst du nicht rückwärts rechnen. Die drei Optionen geben dir je ein Tripel von Startwerten. Ein
**Tripel** ist eine Gruppe aus drei Werten. Du spielst das Programm für jedes Tripel durch und vergleichst die
Ausgabe mit der gesuchten. Das ist eine reine Rechenaufgabe, aber mit einer Falle: Die Ausgabe entsteht oft aus
**mehreren** `if`-Anweisungen hintereinander.

:::beispiel[Welche Startwerte erzeugen „AC“?]
```java
if (x > y) {
    System.out.print("A");
    if (z < x) {
        System.out.print("B");
    } else {
        System.out.print("C");
    }
} else {
    System.out.print("D");
}
if (x + y > z) {
    System.out.print("E");
}
```
Zur Auswahl stehen drei Tripel. Option (a) ist `x = 5, y = 2, z = 9`. Option (b) ist `x = 5, y = 2, z = 6`. Option (c) ist `x = 2, y = 5, z = 1`.

| Tripel | `x > y` | `z < x` | `x + y > z` | Ausgabe |
|---|---|---|---|---|
| (a) | 5 > 2 wahr. | 9 < 5 falsch. | 7 > 9 falsch. | `AC` |
| (b) | 5 > 2 wahr. | 6 < 5 falsch. | 7 > 6 wahr. | `ACE` |
| (c) | 2 > 5 falsch. | nicht geprüft. | 7 > 1 wahr. | `DE` |

Nur (a) erzeugt genau `AC`. Die Tabelle hat eine Spalte je Bedingung. So vergisst du kein `if`.
:::

:::achtung[Nur die erste if-Anweisung geprüft]
Bei Tripel (b) denkt jemand:

> „5 > 2, also A. 6 < 5 ist falsch, also C. Das ergibt AC. Fertig.“

Das zweite `if (x + y > z)` steht **nach** dem ersten Block und wird immer geprüft. Für (b) ist `7 > 6` wahr, und
es kommt noch ein `E` dazu. Die Ausgabe ist `ACE`, nicht `AC`. Spiel das Programm immer bis zur letzten Zeile durch.
Die gesuchte Ausgabe muss **genau** stimmen, ohne zusätzliche Zeichen.
:::

```aufgabe
id: qz-vs-zwei-if
titel: Zwei if-Anweisungen hintereinander
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int x = 3, y = 8;
      if (x * 2 > y) {
          System.out.print("P");
      } else {
          System.out.print("Q");
      }
      if (y % x == 2) {
          System.out.print("R");
      }
      System.out.println();
    loesung: |
      QR
    fehler:
      - wert: "Q"
        meldung: 'Das zweite `if` wird unabhängig vom ersten geprüft. `8 % 3` ist 2, die Bedingung ist wahr.'
      - wert: "PR"
        meldung: '`x * 2` ist 6, und `6 > 8` ist falsch. Also läuft der `else`-Zweig.'
hinweise:
  - Prüfe beide Bedingungen nacheinander. Die zweite hängt nicht vom Ergebnis der ersten ab.
loesung: |
  **Ansatz:** Beide `if`-Anweisungen der Reihe nach auswerten.
  ---
  `3 * 2 = 6`, `6 > 8` ist falsch: Ausgabe `Q`. Dann `8 % 3 = 2`, die zweite Bedingung ist wahr: Ausgabe `R`.
  ---
  Zusammen `QR`, danach der Zeilenumbruch.
```

### Summen-Fragmente vergleichen

Bei Slot 5 berechnen drei Fragmente eine Summe, aber nur eines die verlangte. Die Unterschiede liegen in den
Intervallgrenzen und im Filter. Ein **Filter** ist eine Bedingung wie `if (i % 2 == 0)`, die nur bestimmte Werte
durchlässt. Prüfe auch hier zuerst die Unterschiede: Startwert, Bedingung, Schrittweite, Filter. Dann rechne nur die
Summen aus, die du dafür brauchst.

:::achtung[Die Grenze des Intervalls verschoben]
Gesucht ist die Summe der Vielfachen von 3 im Intervall `]0, 30[`, also 3 + 6 + … + 27 = 135. Jemand wählt:

```java
int s = 0;
for (int i = 3; i <= 30; i += 3) s += i;
```

Das sieht richtig aus, aber `<=` lässt die 30 zu. Die Klammer `30[` zeigt von der Zahl weg und schließt die 30
**aus**. Das Fragment liefert 165 statt 135. Übersetze jede Intervallklammer einzeln. Die linke bestimmt den
Startwert, die rechte entscheidet zwischen `<` und `<=`.
:::

### Doppelschleifen verändern

Bei Slot 6 zeichnet eine **Doppelschleife** ein Muster. Eine Doppelschleife ist eine Schleife, in deren Rumpf eine
zweite Schleife steht. Die äußere Schleife bestimmt die **Zeilen**, die innere die **Zeichen pro Zeile**. Daraus
folgt die Regel für die Antwort:

- Eine Zeile mehr oder weniger: Die **äußere** Schleife muss sich ändern.
- Mehr oder weniger Zeichen pro Zeile: Die **innere** Schleife muss sich ändern.

:::beispiel[Eine Zeile mehr]
```java
for (int i = 1; i <= 4; i++) {          // Zeile A
    for (int j = 1; j <= i; j++) {      // Zeile B
        System.out.print("*");
    }
    System.out.println();
}
```
Das Fragment gibt vier Zeilen mit 1, 2, 3 und 4 Sternen aus, zusammen 10 Sterne. Wodurch entsteht eine Zeile mehr?

- Zeile A wird zu `i <= 5`: Die äußere Schleife läuft fünfmal, die fünfte Zeile hat 5 Sterne. **Eine Zeile mehr.**
- Zeile B wird zu `j <= i + 1`: Es bleibt bei vier Zeilen, nur jede hat einen Stern mehr. Keine Zeile mehr.
- Zeile A wird zu `int i = 0`: Die äußere Schleife läuft auch fünfmal. Für `i = 0` ist `1 <= 0` falsch, die innere
  Schleife läuft keinmal. Es entsteht trotzdem eine Zeile, nämlich eine **leere**, denn `println()` steht in der
  äußeren Schleife.

Auch die dritte Änderung erzeugt also eine Zeile mehr. Im Quiz ist dann entscheidend, ob „Zeile“ auch eine leere
Zeile meint. Lies die Frage genau.
:::

:::merke[Schleifenfragen in Quiz 1]
- **Startwerte:** Tabelle mit einer Spalte je Bedingung, jede Option bis zur letzten Zeile durchspielen.
- **Summen:** Intervallklammern einzeln übersetzen, ersten und letzten Summanden prüfen.
- **Doppelschleifen:** äußere Schleife für Zeilen, innere für Zeichen je Zeile. Gesamtzahl der Zeichen bei festen
  Grenzen: Zeilen mal Zeichen je Zeile.
:::

```aufgabe
id: qz-vs-summe-wert
titel: Was berechnet das Fragment?
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Welchen Wert hat `s` nach diesem Fragment?
  ```java
  int s = 0;
  for (int i = 5; i < 20; i += 5) {
      s += i;
  }
  ```
teile:
  - typ: zahl
    loesung: "5 + 10 + 15"
    fehler:
      - wert: "50"
        meldung: 'Die Bedingung ist `i < 20`. Bei `i = 20` ist sie falsch, die 20 wird nicht addiert.'
      - wert: "45"
        meldung: 'Die Schrittweite ist 5. `i` nimmt nur die Werte 5, 10 und 15 an, nicht alle Zahlen dazwischen.'
hinweise:
  - Schreib die Werte von `i` auf, bis die Bedingung falsch wird.
loesung: |
  **Ansatz:** Werte von `i`: 5, 10, 15. Bei 20 ist `20 < 20` falsch.
  ---
  `s = 5 + 10 + 15 = 30`.
```

```aufgabe
id: qz-vs-fragment-summe
titel: Welches Fragment berechnet die Summe?
niveau: 2
lernziel: 3
kompetenz: verstehen
quelle: nach TUWEL-Test 1 WS2021, Frage 5 (Schablone, eigenes Intervall)
angabe: |
  Welches Fragment berechnet in `s` die Summe 64 der ungeraden Zahlen im Intervall `[1, 15]`? Vor jedem Fragment
  steht `int s = 0;`.
teile:
  - typ: auswahl
    optionen:
      - '`for (int i = 1; i < 15; i += 2) s += i;`'
      - '`for (int i = 0; i <= 15; i++) if (i % 2 == 1) s += i;`'
      - '`for (int i = 1; i <= 15; i++) if (i % 2 == 0) s += i;`'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die 15 gehört zum Intervall `[1, 15]`, aber `15 < 15` ist falsch. Das Fragment liefert 1 + 3 + … + 13 = 49.'
      - wert: 2
        meldung: '`i % 2 == 0` lässt die **geraden** Zahlen durch. Das Fragment liefert 2 + 4 + … + 14 = 56.'
hinweise:
  - Markiere die Unterschiede. Es geht um die rechte Grenze und um den Filter.
  - Option 2 beginnt bei 0. Prüfe, ob das stört.
loesung: |
  **Ansatz:** Für jede Option ersten und letzten Summanden bestimmen.
  ---
  Option 1 endet bei 13 (Summe 49), Option 3 addiert gerade Zahlen (Summe 56).
  ---
  Option 2 läuft von 0 bis 15. Die 0 fällt durch den Filter, denn `0 % 2` ist 0. Addiert werden 1, 3, … , 15. Das sind 8 Zahlen mit Summe 64.
```

```aufgabe
id: qz-vs-startwerte
titel: Startwerte für „BD“
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 3 (Schablone, eigenes Programm)
angabe: |
  ```java
  if (a < b && b < c) {
      System.out.print("A");
  } else if (a < c) {
      System.out.print("B");
  } else {
      System.out.print("C");
  }
  if (a % 2 == 0 || c < 0) {
      System.out.print("D");
  }
  ```
  Mit welchem Tripel von Startwerten gibt das Fragment genau `BD` aus?
teile:
  - typ: auswahl
    optionen: ['`int a = 4, b = 1, c = 7;`', '`int a = 4, b = 5, c = 7;`', '`int a = 3, b = 1, c = 7;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei 4 < 5 und 5 < 7 sind beide Teile von `&&` wahr. Dann läuft schon der erste Zweig, und es wird `A` ausgegeben.'
      - wert: 2
        meldung: 'Der erste Teil passt: `B`. Aber 3 ist ungerade und `c = 7` nicht negativ. Das `D` fehlt.'
hinweise:
  - Leg eine Tabelle mit den Spalten `a < b && b < c`, `a < c` und `a % 2 == 0 || c < 0` an.
  - 'Für `B` muss die erste Bedingung falsch und die zweite wahr sein. Für `D` genügt einer der beiden Teile.'
gefuehrt:
  - text: 'Welcher Buchstabe kommt beim Tripel `a = 4, b = 5, c = 7` aus der ersten Verzweigung?'
    teil: { typ: auswahl, optionen: ['A', 'B', 'C'], richtig: [0], fehler: [{ wert: 1, meldung: "Prüfe zuerst `a < b && b < c`. Sind 4 < 5 und 5 < 7 beide wahr?" }] }
    erklaerung: 'Beide Teile sind wahr, also `A`. Das Tripel scheidet aus.'
  - text: 'Welche Ausgabe erzeugt das Tripel `a = 3, b = 1, c = 7` insgesamt?'
    teil: { typ: auswahl, optionen: ['B', 'BD', 'CD'], richtig: [0] }
    erklaerung: '`3 < 1` ist falsch, also ist die `&&`-Bedingung falsch. `3 < 7` ist wahr: `B`. Dann ist 3 ungerade und 7 nicht negativ: kein `D`.'
  - text: Spiel zur Gegenprobe `a = 4, b = 1, c = 7` durch.
    erklaerung: '`4 < 1` ist falsch, also `else if`: `4 < 7` wahr, `B`. Dann ist 4 gerade: `D`. Ausgabe `BD`.'
loesung: |
  **Ansatz:** Jedes Tripel bis zum Ende durchspielen und die Ausgabe vergleichen.
  ---
  Tripel 2 erfüllt die `&&`-Bedingung und gibt `AD` aus. Tripel 3 gibt nur `B` aus, weil das `D` fehlt.
  ---
  Tripel 1: `4 < 1` ist falsch, `4 < 7` ist wahr, also `B`. Weil 4 gerade ist, folgt `D`. Ergebnis `BD`.
```

```aufgabe
id: qz-vs-halb
titel: Halb so viele Zeichen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 6 (Schablone, eigene Schleife)
angabe: |
  ```java
  for (int i = 0; i < 3; i++) {          // Zeile A
      for (int j = 0; j < 4; j++) {      // Zeile B
          System.out.print("#");
      }
      System.out.println();
  }
  ```
  Welche Änderung halbiert die Gesamtzahl der ausgegebenen `#`?
teile:
  - typ: auswahl
    optionen: ['Zeile B: `j < 2` statt `j < 4`', 'Zeile A: `i < 6` statt `i < 3`', 'Zeile B: `j <= 2` statt `j < 4`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Damit läuft die äußere Schleife doppelt so oft. Es gibt dann **doppelt** so viele Zeichen, nämlich 24.'
      - wert: 2
        meldung: '`j <= 2` lässt `j = 0, 1, 2` zu, also 3 Zeichen je Zeile. Zusammen 9, nicht 6.'
hinweise:
  - Zähle zuerst die Zeichen des Originals. Bei festen Grenzen sind das Zeilen mal Zeichen je Zeile.
  - Prüfe bei `<=` genau, wie viele Werte `j` annimmt.
loesung: |
  **Ansatz:** Original: 3 Zeilen mit je 4 Zeichen, also 12. Gesucht sind 6.
  ---
  Option 2 ergibt 6 · 4 = 24. Option 3 ergibt 3 · 3 = 9.
  ---
  Option 1 ergibt 3 · 2 = 6. Das ist die Hälfte.
```

```aufgabe
id: qz-vs-trace
titel: Zwei Variablen laufen aufeinander zu
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Fülle die Trace-Tabelle aus. Die erste Zeile ist vorgegeben.
  ```java
  int a = 1, b = 10;
  while (a < b) {
      a = a * 2;
      b = b - 1;
  }
  ```
teile:
  - typ: trace
    spalten: [a, b]
    zeilen: [vor der Schleife, nach Durchlauf 1, nach Durchlauf 2, nach Durchlauf 3]
    vorgabe: 1
    loesung: [[1, 10], [2, 9], [4, 8], [8, 7]]
    fehler:
      - wert: ["1", "10", "2", "9", "4", "8", "8", "8"]
        meldung: 'Im dritten Durchlauf ändert sich auch `b`: von 8 auf 7. Jeder Durchlauf führt beide Zeilen des Rumpfs aus.'
hinweise:
  - Prüfe vor jedem Durchlauf `a < b`. Im Rumpf ändert sich zuerst `a`, dann `b`.
  - Nach dem dritten Durchlauf ist `a` größer als `b`. Dann endet die Schleife.
loesung: |
  **Ansatz:** In jedem Durchlauf wird `a` verdoppelt und `b` um 1 verringert.
  ---
  `1 < 10`: `a = 2`, `b = 9`. `2 < 9`: `a = 4`, `b = 8`. `4 < 8`: `a = 8`, `b = 7`.
  ---
  `8 < 7` ist falsch, die Schleife endet nach drei Durchläufen.
```

```aufgabe
id: qz-vs-modulo-muster
titel: Ein Muster mit Rest und Trennstrich
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Fragment aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 9; i++) {
          System.out.print(i % 4);
          if (i % 4 == 3) {
              System.out.print("|");
          }
      }
      System.out.println();
    loesung: |
      0123|0123|0
    fehler:
      - wert: "0123|0123|0|"
        meldung: 'Der Strich kommt nur nach einer 3. Der letzte Durchlauf ist `i = 8`, und `8 % 4` ist 0.'
      - wert: "0123|4567|8"
        meldung: 'Ausgegeben wird `i % 4`, nicht `i`. Der Rest bei Division durch 4 läuft 0, 1, 2, 3 und beginnt dann wieder bei 0.'
hinweise:
  - Schreib für `i = 0` bis `i = 8` den Wert von `i % 4` auf.
  - Der Strich folgt genau den Durchläufen, in denen `i % 4` gleich 3 ist.
loesung: |
  **Ansatz:** `i % 4` läuft für `i = 0` bis `8` durch 0, 1, 2, 3, 0, 1, 2, 3, 0.
  ---
  Nach jeder 3 (bei `i = 3` und `i = 7`) kommt ein Strich.
  ---
  Ausgabe: `0123|0123|0`. Nach der letzten 0 kommt kein Strich.
```

```aufgabe
id: qz-vs-doppelschleife-rf
titel: Aussagen zu einer Dreiecksschleife
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  ```java
  // Vorbedingung: n >= 1
  int z = 0;
  for (int i = 1; i <= n; i++) {
      for (int j = i; j <= n; j++) {
          z++;
      }
  }
  ```
  Beurteile die Aussagen über den Wert von `z` nach den Schleifen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für `n = 4` ist `z` am Ende 10.
        richtig: true
        erklaerung: 'Für `i` = 1, 2, 3, 4 läuft die innere Schleife 4, 3, 2, 1 Mal. Zusammen 10.'
      - text: '`z` ist am Ende immer gleich `n * n`.'
        richtig: false
        erklaerung: 'Gegenbeispiel `n = 2`: `z = 2 + 1 = 3`, aber `n * n = 4`.'
      - text: 'Ersetzt man `j = i` durch `j = 1`, ist `z` am Ende gleich `n * n`.'
        richtig: true
        erklaerung: Dann läuft die innere Schleife in jedem der `n` äußeren Durchläufe `n` Mal.
      - text: 'Ersetzt man `i <= n` durch `i < n`, wird `z` um genau 1 kleiner.'
        richtig: true
        erklaerung: 'Es fällt nur der letzte äußere Durchlauf mit `i = n` weg. In ihm lief die innere Schleife genau einmal (`j = n`).'
    fehler:
      - wert: [r, f, r, f]
        meldung: 'Wie oft läuft die innere Schleife im letzten äußeren Durchlauf, also für `i = n`?'
      - wert: [r, r, r, r]
        meldung: 'Probier die zweite Aussage für `n = 2` aus. Zähle die inneren Durchläufe einzeln.'
hinweise:
  - Zähle für ein kleines `n` die inneren Durchläufe für jedes `i` einzeln.
  - Die innere Schleife läuft von `i` bis `n`, also `n - i + 1` Mal.
loesung: |
  **Ansatz:** Die innere Schleife läuft `n - i + 1` Mal. Für `i = 1` sind das `n` Mal, für `i = n` genau einmal.
  ---
  Zusammen `n + (n − 1) + … + 1`. Für `n = 4` ist das 10. Das ist nicht `n * n`, Gegenbeispiel `n = 2` mit 3 statt 4.
  ---
  Mit `j = 1` läuft die innere Schleife immer `n` Mal: `n * n`. Ohne den Durchlauf `i = n` fehlt genau 1. Aussagen 1, 3 und 4 sind richtig.
```

```reflexion
frage: Warum erzeugt `int i = 0` statt `int i = 1` in Zeile A des Sternmusters eine zusätzliche, aber leere Zeile?
antwort: |
  Die äußere Schleife läuft dann für `i = 0, 1, 2, 3, 4`, also fünfmal statt viermal. In jedem äußeren Durchlauf
  wird am Ende `println()` ausgeführt, also entsteht in jedem Durchlauf eine Zeile. Die innere Schleife läuft aber nur,
  solange `j <= i` gilt. Für `i = 0` ist schon `1 <= 0` falsch, sie läuft keinmal. Darum besteht die erste Zeile nur
  aus dem Zeilenumbruch. Die Zahl der Zeilen hängt an der äußeren Schleife, der Inhalt an der inneren.
```

## Quiz 1: Methoden, Vor- und Nachbedingungen

```aufgabe
id: qz-me-check
titel: Ein Aufruf als Argument
niveau: 1
art: check
angabe: |
  Gegeben ist `static int d(int x) { return 2 * x; }`. Welchen Wert hat `d(d(3))`?
  (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: zahl
    loesung: "2 * (2 * 3)"
    fehler:
      - wert: "6"
        meldung: 'Das ist nur der innere Aufruf `d(3)`. Sein Ergebnis 6 wird an den äußeren Aufruf übergeben.'
loesung: |
  Zuerst wird das Argument berechnet: `d(3)` liefert 6.
  ---
  Dann `d(6)`, das liefert 12.
```

Die letzten drei Fragen von Quiz 1 drehten sich 2021 um **Methoden**. Eine Methode ist ein benannter Programmteil,
den man mit Argumenten aufruft und der einen Wert zurückgeben kann. Die Schablonen:

- **Slot 8:** Eine Methode gibt etwas aus **und** liefert einen Wert zurück. Welche Folge von Aufrufen erzeugt eine
  vorgegebene Ausgabe?
- **Slot 9:** Welche Vorbedingung genügt, damit kein Aufruf mit einer **Exception** endet? Eine
  Exception ist ein Fehler zur Laufzeit, der das Programm abbricht, etwa eine Division durch 0.
- **Slot 10:** Welche Nachbedingung ist für eine Methode korrekt?

Die Begriffe kennst du aus [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen). Kurz zur
Erinnerung: Die **Vorbedingung** sagt, was der Aufrufer über die Argumente garantieren muss. Die **Nachbedingung**
sagt, was die Methode über ihr Ergebnis garantiert, wenn die Vorbedingung erfüllt war.

### Aufrufe mit Ausgabe und Rückgabe

Hat eine Methode eine Ausgabe im Rumpf, nennt man das einen **Seiteneffekt**: Sie bewirkt etwas außer ihrem
Rückgabewert. Bei verschachtelten Aufrufen wie `k(k(3))` gilt eine feste Reihenfolge. Zuerst werden die Argumente
berechnet, und zwar von links nach rechts. Erst danach läuft die äußere Methode. Die innerste Ausgabe erscheint also
zuerst.

:::beispiel[Welche Aufrufe erzeugen „3 5 9 “?]
```java
static int k(int x) {
    System.out.print(x + " ");
    return x * 2 - 1;
}
```
Gesucht ist die Aufruffolge mit der Ausgabe `3 5 9 `. Optionen:
(A) `k(k(3) + 1);` (B) `k(k(k(3)));` (C) `k(3); k(k(4));`

Übersicht aus Aufruf, Ausgabe und Rückgabe:

- `k(3)` gibt `3 ` aus und liefert 5.
- `k(4)` gibt `4 ` aus und liefert 7.
- `k(5)` gibt `5 ` aus und liefert 9.
- `k(6)` gibt `6 ` aus und liefert 11.

- (A): `k(3)` gibt `3 ` aus und liefert 5. Plus 1 ergibt 6. `k(6)` gibt `6 ` aus. Ausgabe `3 6 `.
- (B): `k(3)` gibt `3 ` aus und liefert 5. `k(5)` gibt `5 ` aus und liefert 9. `k(9)` gibt `9 ` aus. Ausgabe `3 5 9 `.
- (C): `3 `, dann `k(4)` mit `4 ` und Ergebnis 7, dann `k(7)` mit `7 `. Ausgabe `3 4 7 `.

Richtig ist (B). Die kleine Übersicht aus Aufruf, Ausgabe und Rückgabe spart Zeit, weil jeder Aufruf nur einmal
ausgerechnet wird.
:::

:::achtung[Den Seiteneffekt doppelt ausgelöst]
Mit derselben Methode `k` schreibt jemand:

```java
if (k(3) > 4) {
    System.out.print(k(3));
}
```

und erwartet die Ausgabe `3 5`. Tatsächlich ruft das Programm `k(3)` **zweimal** auf. Der erste Aufruf in der
Bedingung gibt `3 ` aus. Der zweite Aufruf in der Klammer von `print` gibt noch einmal `3 ` aus und liefert 5, das
dann ausgegeben wird. Ergebnis: `3 3 5`. Jeder Aufruf löst den Seiteneffekt neu aus. Wer das vermeiden will,
speichert das Ergebnis zuerst in einer Variable: `int r = k(3);`.
:::

### Eine Vorbedingung gegen eine Exception

Bei Slot 9 suchst du eine Vorbedingung, die **ausreicht**. Sie muss jede Eingabe ausschließen, die zu einer
Exception führt. Dafür gehst du so vor:

1. **Gefahrenstelle finden:** Wo im Code kann eine Exception entstehen? Bei EP1 meist `/` oder `%` mit einer ganzen
   Zahl 0, ein Index außerhalb des Strings oder Arrays oder ein Zugriff auf `null`.
2. **Bedingung für die Gefahr aufschreiben:** Wann genau ist der Nenner 0?
3. **Jede Option prüfen:** Gibt es Werte, die die Option erfüllen und trotzdem die Gefahr auslösen? Dann reicht die
   Option nicht.

:::beispiel[Welche Vorbedingung reicht aus?]
```java
static int anteil(int a, int b) {
    return 100 * a / (b - a);
}
```
**Gefahrenstelle:** Die Division durch `b - a`. Sie wirft eine `ArithmeticException`, wenn `b - a` gleich 0 ist,
also wenn `a == b`.

Optionen: (A) `a != 0` (B) `b > a` (C) `a > 0 && b > 0`.

- (A): `a = 3, b = 3` erfüllt `a != 0`, aber `b - a = 0`. Reicht nicht.
- (C): `a = 3, b = 3` erfüllt auch `a > 0 && b > 0`. Reicht nicht.
- (B): Aus `b > a` folgt `b - a > 0`, also nie 0. Reicht aus.

Richtig ist (B). Sie ist nicht die einzige mögliche Vorbedingung, `a != b` würde auch reichen. Gefragt ist aber
nur, welche der drei Optionen ausreicht.
:::

:::achtung[Eine Vorbedingung, die nur harmlos klingt]
Im Beispiel `anteil` kreuzt jemand (C) an:

> „Wenn beide Zahlen positiv sind, kann nichts schiefgehen.“

„Positiv“ schützt aber nicht vor **gleichen** Werten. Mit `a = 3` und `b = 3` ist `b - a = 0`, und das Programm
bricht mit `/ by zero` ab. Prüfe jede Vorbedingung mit dem Wert, der die Gefahrenstelle auslöst, hier mit `a == b`.
Eine Vorbedingung reicht nur aus, wenn **keine** erlaubte Eingabe den Fehler erzeugt.
:::

### Eine korrekte Nachbedingung

Bei Slot 10 prüfst du jede angebotene Nachbedingung wie eine Allaussage über das Ergebnis. Sie muss für **jede**
Eingabe stimmen, die die Vorbedingung erfüllt. Schon ein Gegenbeispiel schließt eine Option aus.

:::beispiel[Die ganzzahlige Wurzel]
```java
// Vorbedingung: 0 <= n <= 10000
static int q(int n) {
    int r = 0;
    while ((r + 1) * (r + 1) <= n) {
        r++;
    }
    return r;
}
```
Die Schleife erhöht `r`, solange auch `r + 1` im Quadrat noch höchstens `n` ist. Für `n = 10` endet sie bei `r = 3`,
denn 3 · 3 = 9 ≤ 10 und 4 · 4 = 16 > 10. Die Methode liefert die **ganzzahlige Wurzel**, also die größte ganze Zahl,
deren Quadrat höchstens `n` ist. Die Obergrenze 10000 in der Vorbedingung verhindert, dass `(r + 1) * (r + 1)` über
den Wertebereich von `int` hinauswächst. Welche Nachbedingung für das Ergebnis `r` ist korrekt?

- (A) `r * r == n`. Gegenbeispiel `n = 10`: `r = 3`, aber 9 ist nicht 10. Falsch.
- (B) `r * r <= n && (r + 1) * (r + 1) > n`. Das gilt genau beim Verlassen der Schleife: Die erste Hälfte, weil `r`
  nur erhöht wurde, solange das erlaubt war. Die zweite Hälfte ist die verneinte Schleifenbedingung. Korrekt.
- (C) `r * r < n && (r + 1) * (r + 1) >= n`. Gegenbeispiel `n = 4`: `r = 2`, aber `4 < 4` ist falsch.

Richtig ist (B). Achte bei solchen Optionen auf `<` und `<=`. Ein Gegenbeispiel findest du dann oft bei einer
Quadratzahl wie 4 oder 9 oder beim Randfall `n = 0`.
:::

:::merke[Methodenfragen in Quiz 1]
- **Aufrufsequenz:** Tabelle „Aufruf, Ausgabe, Rückgabe“. Innere Aufrufe zuerst, Argumente von links nach rechts.
- **Vorbedingung:** Gefahrenstelle suchen, kritischen Wert bestimmen, jede Option mit diesem Wert prüfen.
- **Nachbedingung:** Wie eine Allaussage behandeln. Gegenbeispiele bei Randfällen und genauen Grenzen suchen.
:::

```aufgabe
id: qz-me-rueckgabe
titel: Ausgabe und Rückgabe verschachtelt
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Main {
          static int m(int x) {
              System.out.print("[" + x + "]");
              return x + 3;
          }

          public static void main(String[] args) {
              int y = m(m(1));
              System.out.println(y);
          }
      }
    loesung: |
      [1][4]7
    fehler:
      - wert: "[4][1]7"
        meldung: 'Der innere Aufruf `m(1)` läuft zuerst, denn sein Ergebnis wird als Argument gebraucht. Also erscheint `[1]` vor `[4]`.'
      - wert: "[1][4]4"
        meldung: '`y` ist das Ergebnis des **äußeren** Aufrufs `m(4)`, also 4 + 3.'
hinweise:
  - Leg eine Tabelle mit Aufruf, Ausgabe und Rückgabe an.
loesung: |
  **Ansatz:** Der innere Aufruf zuerst, dann der äußere, dann die Ausgabe von `y`.
  ---
  `m(1)` gibt `[1]` aus und liefert 4. `m(4)` gibt `[4]` aus und liefert 7.
  ---
  Danach gibt `println(y)` die 7 aus. Zusammen `[1][4]7`.
```

```aufgabe
id: qz-me-vor-erkennen
titel: Was ist hier eine Vorbedingung?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine Methode `static double schnitt(int summe, int anzahl)` liefert `(double) summe / anzahl`. Welche Aussage ist
  eine sinnvolle **Vorbedingung**?
teile:
  - typ: auswahl
    optionen: ['`anzahl > 0`', 'Das Ergebnis ist nicht negativ.', '`summe` wird durch die Methode nicht verändert.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Diese Aussage spricht über das Ergebnis. Das ist eine Nachbedingung, keine Vorbedingung.'
      - wert: 2
        meldung: 'Das ist eine Aussage über die Wirkung der Methode, also eher Teil der Nachbedingung. Eine Vorbedingung spricht über die Argumente beim Aufruf.'
hinweise:
  - Eine Vorbedingung spricht über die Argumente vor dem Aufruf, nicht über das Ergebnis.
loesung: |
  **Ansatz:** Vorbedingung heißt: Was muss für die Argumente gelten?
  ---
  Eine Anzahl von 0 ergäbe keinen sinnvollen Durchschnitt. `anzahl > 0` ist darum die passende Vorbedingung. Die anderen Optionen sprechen über das Ergebnis oder die Wirkung der Methode.
```

```aufgabe
id: qz-me-welcher-aufruf
titel: Welcher Aufruf wirft eine Exception?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist `static int r(int a, int b) { return a % (b - 2); }`. Bei welchem Aufruf bricht das Programm mit einer
  `ArithmeticException` ab?
teile:
  - typ: auswahl
    optionen: ['`r(2, 4)`', '`r(0, 2)`', '`r(5, 3)`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`b - 2` ist hier 2. `2 % 2` ist erlaubt und ergibt 0.'
      - wert: 2
        meldung: '`b - 2` ist hier 1. `5 % 1` ist erlaubt und ergibt 0.'
hinweise:
  - '`%` mit einer ganzen Zahl 0 rechts wirft wie `/` eine Exception. Wann ist `b - 2` gleich 0?'
loesung: |
  **Ansatz:** Gefahrenstelle ist `% (b - 2)`. Sie schlägt zu, wenn `b == 2`.
  ---
  Nur `r(0, 2)` hat `b = 2`. Dass `a` dort 0 ist, spielt keine Rolle: Entscheidend ist die rechte Seite von `%`.
```

```aufgabe
id: qz-me-sequenz
titel: Die Aufrufsequenz zu „4321“
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 8 (Schablone, eigene Methode)
angabe: |
  ```java
  static int h(int x) {
      System.out.print(x % 10);
      return x / 10;
  }
  ```
  Welche Aufrufsequenz erzeugt genau die Ausgabe `4321`?
teile:
  - typ: auswahl
    optionen: ['`h(h(h(h(1234))));`', '`h(1234); h(123); h(12);`', '`h(h(1234) + h(12));`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das sind drei Aufrufe mit den Ausgaben 4, 3 und 2. Die 1 fehlt.'
      - wert: 2
        meldung: 'Zuerst werden beide Argumente von links nach rechts berechnet: Ausgaben 4 und 2. Dann läuft `h(123 + 1)` und gibt 4 aus. Ergebnis `424`.'
hinweise:
  - '`x % 10` ist die letzte Ziffer, `x / 10` ist die Zahl ohne die letzte Ziffer.'
  - 'Leg eine Tabelle an: Aufruf, Ausgabe, Rückgabe.'
gefuehrt:
  - text: Was gibt `h(1234)` aus, und was liefert es zurück? Gib den Rückgabewert ein.
    teil: { typ: zahl, loesung: "123", fehler: [{ wert: "4", meldung: "4 ist die **Ausgabe** (`1234 % 10`). Zurückgegeben wird `1234 / 10`." }] }
    erklaerung: 'Ausgabe `4`, Rückgabe 123.'
  - text: In Option 1 wird dieses Ergebnis sofort wieder an `h` übergeben. Welche Ziffer gibt `h(123)` aus?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Ausgabe `3`, Rückgabe 12. Danach `h(12)` mit Ausgabe `2` und Rückgabe 1, dann `h(1)` mit Ausgabe `1`.'
  - text: Welche Ausgabe erzeugt Option 3? Achte auf die Reihenfolge, in der die Argumente berechnet werden.
    teil: { typ: auswahl, optionen: ['`424`', '`4321`', '`24`'], richtig: [0] }
    erklaerung: '`h(1234)` gibt 4 aus (liefert 123), `h(12)` gibt 2 aus (liefert 1). Dann `h(124)` gibt 4 aus.'
loesung: |
  **Ansatz:** Jeder Aufruf gibt die letzte Ziffer aus und liefert die Zahl ohne sie.
  ---
  Option 1: `h(1234)` → Ausgabe 4, Rückgabe 123. Dann 3 → 12, dann 2 → 1, dann 1 → 0. Ausgabe `4321`.
  ---
  Option 2 gibt `432` aus, Option 3 gibt `424` aus. Richtig ist Option 1.
```

```aufgabe
id: qz-me-vorbedingung
titel: Eine ausreichende Vorbedingung
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach TUWEL-Test 1 WS2021, Frage 9 (Schablone, eigene Methode)
angabe: |
  ```java
  static int teile(int a, int b) {
      return a / (a - 2 * b);
  }
  ```
  Bei welcher Vorbedingung kann kein Aufruf von `teile` mit einer Exception abbrechen?
teile:
  - typ: auswahl
    optionen: ['`a > 0 && b > 0`', '`a > 2 * b`', '`b != 0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probier `a = 2, b = 1`. Beide sind positiv, aber `a - 2 * b` ist 0.'
      - wert: 2
        meldung: 'Probier `a = 4, b = 2`. Dann ist `b != 0` erfüllt, aber `a - 2 * b = 0`.'
hinweise:
  - Bestimme, für welche Werte der Nenner `a - 2 * b` gleich 0 ist.
  - Prüfe jede Option mit einem Wertepaar, bei dem `a == 2 * b` gilt.
loesung: |
  **Ansatz:** Die Gefahr ist eine Division durch 0. Der Nenner ist 0, wenn `a == 2 * b`.
  ---
  Option 1 und Option 3 lassen solche Paare zu: `(2, 1)` und `(4, 2)`.
  ---
  Aus `a > 2 * b` folgt `a - 2 * b > 0`. Der Nenner ist nie 0. Option 2 reicht aus.
```

```aufgabe
id: qz-me-nachbedingung
titel: Eine korrekte Nachbedingung
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: nach TUWEL-Test 1 WS2021, Frage 10 (Schablone, eigene Methode)
angabe: |
  ```java
  // Vorbedingung: 1 <= n <= 1000
  static int g(int n) {
      int p = 1;
      while (p * 2 <= n) {
          p = p * 2;
      }
      return p;
  }
  ```
  Welche der drei Aussagen über das Ergebnis `p` gilt für jedes erlaubte `n` und taugt damit als Nachbedingung? Eine
  **Zweierpotenz** ist eine der Zahlen 1, 2, 4, 8, 16 und so weiter.
teile:
  - typ: auswahl
    optionen:
      - '`p` ist eine Zweierpotenz, `p <= n` und `2 * p > n`.'
      - '`p` ist eine Zweierpotenz und `p < n`.'
      - '`p == n`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Probier `n = 8`. Dann ist `p = 8`, und `8 < 8` ist falsch. Die Nachbedingung muss auch für Zweierpotenzen als `n` stimmen.'
      - wert: 2
        meldung: 'Probier `n = 9`. Dann ist `p = 8`, nicht 9.'
hinweise:
  - Was gilt beim Verlassen der Schleife? Die Bedingung `p * 2 <= n` ist dann falsch.
  - Prüfe die Optionen mit `n = 1`, `n = 8` und `n = 9`.
loesung: |
  **Ansatz:** `p` beginnt bei 1 und wird nur verdoppelt, ist also immer eine Zweierpotenz.
  ---
  Verdoppelt wird nur, solange `2 * p <= n`. Also gilt immer `p <= n`. Beim Verlassen ist `2 * p > n`.
  ---
  Option 1 beschreibt genau das. Option 2 scheitert an `n = 8`, Option 3 an `n = 9`.
```

```aufgabe
id: qz-me-seiteneffekt
titel: Aussagen zu einer Methode mit Ausgabe
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  ```java
  static int zaehle(String s) {
      System.out.print(s.length());
      return s.length() * 2;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`zaehle(\"ab\");` übersetzt als eigene Anweisung, obwohl der Rückgabewert nicht verwendet wird."
        richtig: true
        erklaerung: 'Ein Rückgabewert darf ungenutzt bleiben. Die Ausgabe `2` erscheint trotzdem.'
      - text: "`System.out.print(zaehle(\"ab\"));` gibt `24` aus."
        richtig: true
        erklaerung: 'Erst gibt die Methode `2` aus, dann `print` den Rückgabewert `4`.'
      - text: "`int x = zaehle(\"\") + zaehle(\"x\");` gibt nichts aus, weil nur gerechnet wird."
        richtig: false
        erklaerung: 'Beide Aufrufe laufen und geben ihre Länge aus: zuerst `0`, dann `1`.'
      - text: '`zaehle(null)` liefert 0.'
        richtig: false
        erklaerung: '`null.length()` gibt es nicht. Das Programm bricht mit einer `NullPointerException` ab.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Auch innerhalb einer Rechnung wird jede Methode wirklich aufgerufen. Was gibt `zaehle` dabei aus?'
      - wert: [r, f, f, f]
        meldung: 'Bei `print(zaehle("ab"))` läuft zuerst `zaehle`. Was gibt die Methode selbst aus, bevor `print` den Rückgabewert ausgibt?'
hinweise:
  - Jeder Aufruf führt die Ausgabezeile im Rumpf aus, egal wo der Aufruf steht.
  - '`null` bedeutet „kein String vorhanden“. Was passiert, wenn man darauf eine Methode aufruft?'
loesung: |
  **Ansatz:** Jeder Aufruf hat zwei Wirkungen: eine Ausgabe und einen Rückgabewert.
  ---
  Aussage 1 und 2 sind richtig: Der Rückgabewert darf ungenutzt bleiben, und bei `print(zaehle("ab"))` kommt zuerst `2`, dann `4`.
  ---
  Aussage 3 ist falsch, weil beide Aufrufe ausgeben (`01`). Aussage 4 ist falsch, weil `null` zu einer `NullPointerException` führt.
```

```aufgabe
id: qz-me-vertrag
titel: Vertrag einer String-Methode
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  ```java
  // Vorbedingung: s != null, 0 <= i < s.length()
  static String drehe(String s, int i) {
      return s.substring(i + 1) + s.charAt(i) + s.substring(0, i);
  }
  ```
  `s.substring(a)` liefert den Teil ab Index `a` bis zum Ende, `s.substring(a, b)` den Teil von Index `a` bis vor
  Index `b`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`drehe(\"Hund\", 1)` liefert `\"nduH\"`."
        richtig: true
        erklaerung: '`substring(2)` ist `"nd"`, `charAt(1)` ist `u`, `substring(0, 1)` ist `"H"`. Zusammen `"nduH"`.'
      - text: 'Das Ergebnis hat für jede gültige Eingabe dieselbe Länge wie `s`.'
        richtig: true
        erklaerung: 'Die drei Teile decken die Indizes `i + 1` bis Ende, `i` und 0 bis `i − 1` ab, also jedes Zeichen genau einmal.'
      - text: 'Für `i = 0` ist das Ergebnis gleich `s`.'
        richtig: false
        erklaerung: '`drehe("Hund", 0)` ist `"und" + "H" + ""`, also `"undH"`. Das erste Zeichen wandert ans Ende.'
      - text: 'Lässt man in der Vorbedingung `i < s.length()` weg, kann eine Exception auftreten.'
        richtig: true
        erklaerung: 'Mit `i = s.length()` wird zuerst `s.substring(i + 1)` ausgewertet. Der Startindex ist dann größer als die Länge, und es gibt eine `StringIndexOutOfBoundsException`. Auch `charAt(i)` würde scheitern.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Setz in der dritten Aussage `i = 0` ein. Was ergibt `s.substring(1)` und was `s.substring(0, 0)`?'
      - wert: [r, f, f, r]
        meldung: 'Zur zweiten Aussage: Welche Indizes decken die drei Teile ab? Fehlt eines oder kommt eines doppelt vor?'
hinweise:
  - Rechne die drei Teile für ein kurzes Wort einzeln aus.
  - Für die letzte Aussage setze den kleinsten unerlaubten Wert ein, also `i = s.length()`.
loesung: |
  **Ansatz:** Die drei Teile getrennt bestimmen: der Rest ab `i + 1`, das Zeichen an `i`, der Anfang bis vor `i`.
  ---
  Für `"Hund"` und `i = 1`: `"nd"`, `u`, `"H"`. Ergebnis `"nduH"`. Die drei Teile zusammen enthalten jedes Zeichen genau einmal, die Länge bleibt.
  ---
  Für `i = 0` entsteht `"undH"`, nicht `s`. Ohne `i < s.length()` wäre `i = s.length()` erlaubt, und schon `s.substring(i + 1)` würde scheitern. Aussagen 1, 2 und 4 sind richtig.
```

```reflexion
frage: Warum ist bei Slot 9 eine Vorbedingung wie `a > 0 && b > 0` gefährlich, obwohl sie „vernünftig“ aussieht?
antwort: |
  Die Frage verlangt eine Vorbedingung, die jede Exception ausschließt. Ob eine Vorbedingung das leistet, hängt nur
  von der Gefahrenstelle im Code ab, nicht davon, ob sie vernünftig klingt. Bei `100 * a / (b - a)` entsteht die
  Exception genau dann, wenn `a` und `b` gleich sind. „Beide positiv“ erlaubt gleiche Werte wie 3 und 3 und
  schließt die Gefahr deshalb nicht aus. Man muss jede Option mit dem kritischen Wert prüfen.
```

## Arrays und Rekursion beurteilen

```aufgabe
id: qz-ar-check
titel: Ein Index zu weit
niveau: 1
art: check
angabe: |
  Was passiert bei `int[] a = new int[3]; a[3] = 1;`?
  (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: auswahl
    optionen: ['Das Programm bricht mit einer `ArrayIndexOutOfBoundsException` ab.', 'Das Array wird automatisch auf Länge 4 vergrößert.', 'Der Wert 1 landet im letzten Element.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Länge eines Arrays ist nach dem Anlegen fest. Java vergrößert ein Array nie von selbst.'
      - wert: 2
        meldung: 'Das letzte Element hat den Index 2. Index 3 gibt es nicht, und Java korrigiert das nicht still.'
loesung: |
  Ein Array der Länge 3 hat die Indizes 0, 1 und 2.
  ---
  Ein Zugriff auf Index 3 wirft zur Laufzeit eine `ArrayIndexOutOfBoundsException`.
```

Der zweite Teil der TUWEL-Tests behandelte in den Jahren 2021 bis 2023 Arrays, Rekursion und Algorithmen, und zwar
im Richtig/Falsch-Format. Wie sich dieser Stoff 2026 auf die Quiz 2 bis 4 verteilt, ist eine Annahme. Die Schablonen
zu Arrays und Rekursion lauten:

- **Slot 0 (2023):** Deklarationen mehrdimensionaler Arrays. Wie viele Werte kann ein Array wie `new long[2][2][4]` speichern?
- **Slot 1:** Ein Array wird in einer Schleife gefüllt. Stimmt der Kommentar über seinen Inhalt für jedes `n`?
- **Slot 2:** Eine Methode erzeugt ein zweidimensionales Array. Aussagen zu Zeilen, Spalten und Werten.
- **Slot 3:** Mehrere rekursive Implementierungen. Liefern sie das richtige Ergebnis, und terminieren sie?
- **Slot 4:** Aussagen über eine rekursive Methode: endrekursiv, linear, Zahl der Basisfälle, Ergebnis.
- **Slot 5:** Verzweigte Rekursion: Wie viele Ausgaben, welche zuerst?

Den Stoff erklären [Kapitel 11](/lernen/ep1/rekursion-vertieft), [Kapitel 12](/lernen/ep1/arrays) und
[Kapitel 14](/lernen/ep1/arrays-2d). Hier kommt die Prüftechnik dazu.

### Kapazität und Array-Inhalt

Die **Kapazität** eines Arrays ist die Zahl der Werte, die es aufnehmen kann. Bei einem rechteckigen
mehrdimensionalen Array **multiplizierst** du die Längen: `new long[2][2][4]` speichert 2 · 2 · 4 = 16 Werte. Wie
man darauf kommt, zeigt [14.4 Deklaration und Kapazität mehrdimensionaler Arrays](/lernen/ep1/arrays-2d/deklaration-und-kapazitaet-mehrdimensionaler-arrays).

Bei Slot 1 steht der Geltungsbereich meist im Stamm, etwa als „für beliebige Werte von `n`“ zwischen zwei Grenzen.
Jeder Kommentar ist also eine **Allaussage** über alle `n` in diesem Bereich. Du suchst gezielt ein Gegenbeispiel. Die kleinen Werte
`n = 2`, `3`, `4` und gerade gegen ungerade `n` sind die besten Kandidaten.

:::beispiel[Ein Kommentar über einen Array-Inhalt]
```java
int[] data = new int[n];
for (int i = 0; i < data.length; i++) {
    data[i] = (i * 3) % n;
}
// Kommentar: Jeder Wert aus [0, n - 1] kommt in data genau einmal vor.
```
Wir probieren kleine `n` aus. Für jedes Element rechnen wir `i * 3` und nehmen den Rest bei Division durch `n`.

- `n = 2`: `data` ist `[0, 1]`. Jeder Wert aus [0, 1] genau einmal. Passt.
- `n = 3`: `data` ist `[0, 0, 0]`, denn 0, 3 und 6 haben bei Division durch 3 den Rest 0. Die Werte 1 und 2 fehlen.

`n = 3` ist ein Gegenbeispiel. Der Kommentar ist **falsch**. Für `n = 4` (`[0, 3, 2, 1]`) und `n = 5`
(`[0, 3, 1, 4, 2]`) hätte er gestimmt. Er stimmt genau dann, wenn `n` nicht durch 3 teilbar ist. Wer nur `n = 5`
probiert, kreuzt deshalb „richtig“ an.
:::

### Rekursive Implementierungen beurteilen

Bei Slot 3 stehen zu einer Aufgabe mehrere rekursive Methoden. Für jede beurteilst du zwei Dinge: Liefert sie für
jede erlaubte Eingabe das richtige **Ergebnis**? Und **terminiert** sie, kommt sie also nach endlich vielen Aufrufen
zum Ende? Eine Methode, die für eine Eingabe nicht terminiert oder eine Exception wirft, ist für diese Eingabe falsch.
Die Prüfung erfolgt in drei Schritten.

1. **Basisfall prüfen:** Deckt er den kleinsten erlaubten Wert ab, etwa den leeren String?
2. **Fortschritt prüfen:** Wird der Aufruf in jedem Schritt kleiner, etwa `s.substring(1)` statt `s.substring(0)`?
3. **Ein kleines Beispiel ausrechnen:** Zwei Zeichen oder die Zahl 2 genügen meist, um Typfehler zu entdecken.

Wie man Ergebnis und Terminierung im Detail begründet, zeigt
[11.5 Rekursionen beurteilen: Ergebnis und Terminierung](/lernen/ep1/rekursion-vertieft/rekursionen-beurteilen-ergebnis-und-terminierung).

:::beispiel[Jedes Zeichen verdoppeln]
Gesucht ist eine Methode, die jedes Zeichen verdoppelt: aus `"ab"` wird `"aabb"`. Vorbedingung: `s != null`. Drei
Implementierungen:

```java
static String d1(String s) {
    if (s.isEmpty()) return "";
    return s.charAt(0) + s.charAt(0) + d1(s.substring(1));
}
static String d2(String s) {
    if (s.length() == 0) return s;
    return "" + s.charAt(0) + s.charAt(0) + d2(s.substring(1));
}
static String d3(String s) {
    if (s.length() == 1) return s + s;
    return d3(s.substring(0, 1)) + d3(s.substring(1));
}
```
- **`d1`:** Basisfall und Fortschritt stimmen. Aber `s.charAt(0) + s.charAt(0)` ist `char` plus `char`, also eine
  Zahl. Für `"ab"` entsteht `"194196"`, denn `'a' + 'a'` ist 97 + 97 = 194. **Falsches Ergebnis.**
- **`d2`:** Der leere String am Anfang erzwingt die Verkettung. Basisfall `""`, Fortschritt `substring(1)`. Für
  `"ab"` entsteht `"aabb"`. **Richtig.**
- **`d3`:** Für Strings mit mindestens einem Zeichen richtig, etwa `"abc"` zu `"aabbcc"`. Der leere String ist aber
  erlaubt. Für ihn greift der Basisfall nicht, und `s.substring(0, 1)` wirft eine Exception. **Falsch** für `""`.
:::

:::achtung[Der leere String fehlt im Basisfall]
Bei `d3` überlegt jemand:

> „Für `"a"`, `"ab"` und `"abc"` kommt das Richtige heraus. Also ist `d3` korrekt.“

Die Vorbedingung `s != null` erlaubt aber auch `""`. Der Basisfall prüft `s.length() == 1` und erkennt den leeren
String nicht. Prüfe bei jeder String-Rekursion zuerst den kleinsten erlaubten Wert. Bei Strings ist das fast immer
`""`, bei Arrays das leere Array, bei Zahlen 0.
:::

:::achtung[Kapazität addiert statt multipliziert]
Frage: „Wie viele `int`-Werte kann `new int[4][2][3]` speichern?“ Jemand rechnet 4 + 2 + 3 = 9.

Ein `int[4][2][3]` hat 4 Teile, jeder davon 2 Zeilen, jede Zeile 3 Werte. Das sind 4 · 2 · 3 = **24** Werte. Stell
dir die Zahlen als verschachtelte Schachteln vor: In jeder der 4 großen Schachteln liegen 2 mittlere, in jeder
mittleren liegen 3 Werte.
:::

### Verzweigte Rekursion: Aufrufe und Ausgaben zählen

Eine Methode, die sich in einem Aufruf **zweimal** selbst aufruft, heißt **verzweigt rekursiv**. Die Zahl der
Aufrufe wächst dann schnell. Bei Slot 5 zählst du die Ausgaben mit einer kleinen Tabelle von unten nach oben. Mehr
dazu steht in [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).

:::beispiel[Ausgaben einer verzweigten Rekursion]
```java
static void p(int n) {
    if (n == 0) return;
    p(n - 1);
    System.out.print(n);
    p(n - 1);
}
```
Sei `A(n)` die Zahl der Ausgaben von `p(n)`. Für `n = 0` gibt es keine Ausgabe: `A(0) = 0`. Sonst gibt es die
Ausgaben beider Selbstaufrufe und eine eigene: `A(n) = 2 · A(n − 1) + 1`.

| `n` | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| `A(n)` | 0 | 1 | 3 | 7 |

`p(3)` gibt 7 Zeichen aus, nämlich `1213121`. Die **erste** Ausgabe ist `1`, denn vor jeder Ausgabe läuft zuerst
der linke Selbstaufruf bis ganz nach unten.
:::

:::merke[Arrays und Rekursion im Richtig/Falsch-Block]
- **Kapazität:** Längen multiplizieren.
- **Array-Kommentare:** Allaussage über alle `n`. Gegenbeispiel bei kleinem `n`, gerade und ungerade getrennt.
- **Rekursive Implementierungen:** Basisfall mit dem kleinsten erlaubten Wert, Fortschritt, ein Beispiel mit zwei Zeichen.
- **Ausgaben zählen:** Formel `A(n)` aus dem Code ablesen, Tabelle von klein nach groß.
:::

```aufgabe
id: qz-ar-kapazitaet
titel: Kapazität eines dreidimensionalen Arrays
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Wie viele `double`-Werte kann das Array `new double[2][5][3]` speichern?
teile:
  - typ: zahl
    loesung: "2 * 5 * 3"
    fehler:
      - wert: "10"
        meldung: 'Du hast die Längen addiert. Jede der 2 Ebenen hat 5 Zeilen, jede Zeile 3 Werte. Die Längen werden multipliziert.'
hinweise:
  - Bei rechteckigen mehrdimensionalen Arrays multiplizierst du die Längen.
loesung: |
  **Ansatz:** 2 Ebenen, jede mit 5 Zeilen, jede Zeile mit 3 Werten.
  ---
  2 · 5 · 3 = 30 Werte.
```

```aufgabe
id: qz-ar-inhalt
titel: Array-Inhalt nach einer Schleife
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int[] a = new int[6];
      for (int i = 1; i < a.length; i++) {
          a[i] = a[i - 1] + i;
      }
      System.out.println(Arrays.toString(a));
    loesung: |
      [0, 1, 3, 6, 10, 15]
    fehler:
      - wert: "[0, 1, 2, 3, 4, 5]"
        meldung: 'Jedes Element ist der **vorige Wert plus** `i`, nicht nur `i`. Die Werte wachsen also immer schneller.'
      - wert: "[1, 3, 6, 10, 15, 21]"
        meldung: 'Die Schleife beginnt bei `i = 1`. `a[0]` wird nie verändert und behält den Standardwert 0.'
hinweise:
  - '`a[0]` bleibt 0. Rechne dann `a[1]`, `a[2]` und so weiter der Reihe nach aus.'
loesung: |
  **Ansatz:** `a[0]` ist 0 (Standardwert). Danach gilt `a[i] = a[i − 1] + i`.
  ---
  `a[1] = 0 + 1 = 1`, `a[2] = 1 + 2 = 3`, `a[3] = 6`, `a[4] = 10`, `a[5] = 15`.
  ---
  `Arrays.toString` gibt das Array in eckigen Klammern mit Kommas aus: `[0, 1, 3, 6, 10, 15]`.
```

```aufgabe
id: qz-ar-linear
titel: Ausgaben einer linearen Rekursion
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  ```java
  static void r(int n) {
      if (n < 1) return;
      System.out.print(n);
      r(n - 3);
  }
  ```
  Wie viele Zahlen gibt der Aufruf `r(10)` aus?
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: 'Prüfe den letzten Aufruf genau: Bei `n = 1` ist `1 < 1` falsch. Die 1 wird also noch ausgegeben.'
      - wert: "10"
        meldung: 'Der Selbstaufruf verringert `n` um 3, nicht um 1.'
hinweise:
  - Schreib die Werte von `n` in den aufeinanderfolgenden Aufrufen auf.
loesung: |
  **Ansatz:** Die Aufrufe haben `n` = 10, 7, 4, 1, −2.
  ---
  Ausgegeben wird bei 10, 7, 4 und 1. Bei −2 greift der Basisfall. Ergebnis 4, die Ausgabe ist `10741`.
```

```aufgabe
id: qz-ar-verzweigt
titel: Ausgaben einer verzweigten Rekursion zählen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  ```java
  static void q(int n) {
      if (n <= 0) return;
      System.out.print(n);
      q(n - 2);
      q(n - 2);
  }
  ```
  Wie viele Zahlen gibt der Aufruf `q(5)` aus?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "3"
        meldung: 'Das wäre die Zahl bei **einem** Selbstaufruf (5, 3, 1). Hier ruft sich `q` aber zweimal auf, jeder Aufruf gibt selbst wieder aus.'
      - wert: "31"
        meldung: 'Das wäre richtig, wenn `n` um 1 kleiner würde. Hier sinkt `n` in jedem Aufruf um 2.'
hinweise:
  - 'Stelle eine Formel auf: Ein Aufruf gibt eine Zahl aus und enthält zwei Aufrufe mit `n - 2`.'
  - Berechne die Zahl der Ausgaben für `n = 1`, dann `n = 3`, dann `n = 5`.
gefuehrt:
  - text: Wie viele Zahlen gibt `q(1)` aus?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '`q(1)` gibt `1` aus. Die beiden Aufrufe `q(-1)` geben nichts aus.'
  - text: Wie viele Zahlen gibt `q(3)` aus?
    teil: { typ: zahl, loesung: "3", fehler: [{ wert: "2", meldung: "Vergiss die eigene Ausgabe von `q(3)` nicht: eine eigene plus zweimal die von `q(1)`." }] }
    erklaerung: 'Eine eigene Ausgabe plus 2 · 1 = 3.'
  - text: Wie viele Zahlen gibt also `q(5)` aus?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: 'Eine eigene Ausgabe plus 2 · 3 = 7.'
loesung: |
  **Ansatz:** Sei `A(n)` die Zahl der Ausgaben. Für `n <= 0` ist `A(n) = 0`. Sonst `A(n) = 1 + 2 · A(n − 2)`.
  ---
  `A(1) = 1 + 0 = 1`, `A(3) = 1 + 2 · 1 = 3`, `A(5) = 1 + 2 · 3 = 7`.
  ---
  Ergebnis 7. Kontrolle: Die Ausgabe ist `5311311`, das sind 7 Ziffern.
```

```aufgabe
id: qz-ar-kommentare
titel: Kommentare über Array-Inhalte
niveau: 2
lernziel: 5
kompetenz: verstehen
quelle: nach TUWEL-Test 2 WS2022, Frage 2 (Schablone, eigene Fragmente)
angabe: |
  Jedes Fragment beginnt mit `int[] d = new int[n];`. Beurteile, ob der Kommentar für **beliebige** Werte
  `2 <= n <= 500` stimmt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`for (int i = 0; i < n; i++) d[i] = n - i;`, Kommentar: `d` enthält die Werte von `n` bis 1 absteigend.'
        richtig: true
        erklaerung: '`d[0] = n`, `d[n − 1] = 1`, dazwischen jeweils um 1 weniger.'
      - text: '`for (int i = 0; i < n; i++) d[i] = i % 2;`, Kommentar: In `d` kommen genau `n / 2` Einsen vor (Ganzzahldivision).'
        richtig: true
        erklaerung: 'Einsen stehen an den ungeraden Indizes. Bei geradem `n` sind das `n / 2`, bei ungeradem `(n − 1) / 2`. Beides ist `n / 2` mit Ganzzahldivision.'
      - text: '`for (int i = 1; i < n; i++) d[i] = d[i - 1] + 2;`, Kommentar: Danach gilt `d[n - 1] == 2 * n`.'
        richtig: false
        erklaerung: '`d[i]` ist `2 * i`. Also ist `d[n − 1] = 2 * (n − 1)`, nicht `2 * n`. Gegenbeispiel `n = 2`: `d[1] = 2`.'
      - text: '`for (int i = 0; i <= n; i++) d[i] = i;`, Kommentar: `d` enthält die Werte 0 bis `n`.'
        richtig: false
        erklaerung: 'Der letzte Durchlauf greift auf `d[n]` zu. Den Index gibt es nicht, also bricht das Fragment mit einer Exception ab.'
    fehler:
      - wert: [r, f, f, f]
        meldung: 'Zur zweiten Aussage: Probier `n = 5`. Das Array ist `[0, 1, 0, 1, 0]`. Wie viele Einsen sind das, und was ist `5 / 2` in Java?'
      - wert: [r, r, r, f]
        meldung: 'Zur dritten Aussage: Rechne für `n = 2` aus, was in `d[1]` steht.'
hinweise:
  - Probier für jede Aussage `n = 2` und `n = 3` aus.
  - Achte auf Ganzzahldivision und auf die Grenze `<=` in der letzten Schleife.
loesung: |
  **Ansatz:** Jeder Kommentar ist eine Allaussage über alle `n` von 2 bis 500. Kleine `n` und gerade gegen ungerade prüfen.
  ---
  Aussage 1 stimmt immer. Aussage 2 stimmt dank Ganzzahldivision für gerade und ungerade `n`, etwa `n = 5`: zwei Einsen, `5 / 2 = 2`.
  ---
  Aussage 3 ist um 2 daneben: `d[n − 1] = 2(n − 1)`. Aussage 4 greift auf `d[n]` zu und bricht ab.
```

```aufgabe
id: qz-ar-endrekursiv
titel: Aussagen zu einer Rekursion mit Akkumulator
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  ```java
  // Vorbedingung: a != null, 0 <= i <= a.length
  static int s(int[] a, int i, int acc) {
      if (i == a.length) return acc;
      return s(a, i + 1, acc + a[i]);
  }
  ```
  Ein **Akkumulator** ist ein Parameter, der ein Zwischenergebnis von Aufruf zu Aufruf weiterreicht, hier `acc`.
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`s` ist endrekursiv.'
        richtig: true
        erklaerung: 'Der Selbstaufruf ist die letzte Aktion: Sein Ergebnis wird unverändert zurückgegeben.'
      - text: '`s` hat zwei Basisfälle.'
        richtig: false
        erklaerung: 'Es gibt nur einen Basisfall: `i == a.length`.'
      - text: 'Der Aufruf `s(new int[]{2, 4, 6}, 0, 0)` liefert 12.'
        richtig: true
        erklaerung: '`acc` wird 2, dann 6, dann 12. Bei `i = 3` greift der Basisfall.'
      - text: Der Rückgabewert wird erst auf dem Rückweg berechnet.
        richtig: false
        erklaerung: 'Die Summe entsteht auf dem **Hinweg** in `acc`. Auf dem Rückweg wird sie nur noch durchgereicht.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Wo wird hier addiert: vor dem Selbstaufruf, als Argument, oder nach seiner Rückkehr?'
      - wert: [f, f, r, f]
        meldung: 'Was passiert nach dem Selbstaufruf noch? Wenn nichts mehr gerechnet wird, ist die Methode endrekursiv.'
hinweise:
  - '**Endrekursiv** heißt: Nach dem Selbstaufruf wird nichts mehr gerechnet.'
  - Verfolge `acc` für das Beispiel `{2, 4, 6}`.
loesung: |
  **Ansatz:** Prüfen, was vor und was nach dem Selbstaufruf passiert. Siehe [11.2 Endrekursion: das Ergebnis auf dem Hinweg berechnen](/lernen/ep1/rekursion-vertieft/endrekursion-das-ergebnis-auf-dem-hinweg-berechnen).
  ---
  Die Addition steckt im Argument `acc + a[i]`, also vor dem Aufruf. Danach wird nichts mehr gerechnet: endrekursiv, Ergebnis auf dem Hinweg.
  ---
  Ein Basisfall, linearer Ablauf. Für `{2, 4, 6}`: `acc` = 0, 2, 6, 12. Aussagen 1 und 3 sind richtig.
```

```aufgabe
id: qz-ar-implementierungen
titel: Vier Implementierungen beurteilen
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: nach TUWEL-Test 2 WS2022, Frage 4 (Schablone, eigene Aufgabe)
angabe: |
  Gesucht ist eine Methode, die zählt, wie oft das Zeichen `'a'` in `s` vorkommt. Vorbedingung: `s != null`.
  ```java
  static int z1(String s) {
      if (s.isEmpty()) return 0;
      int r = z1(s.substring(1));
      if (s.charAt(0) == 'a') r++;
      return r;
  }
  static int z2(String s) {
      if (s.length() == 1) {
          if (s.charAt(0) == 'a') return 1;
          return 0;
      }
      return z2(s.substring(0, 1)) + z2(s.substring(1));
  }
  static int z3(String s) {
      if (s.isEmpty()) return 0;
      int r = z3(s.substring(0, s.length() - 1));
      if (s.charAt(s.length() - 1) == 'a') r++;
      return r;
  }
  static int z4(String s) {
      if (s.isEmpty()) return 0;
      int r = z4(s.substring(0));
      if (s.charAt(0) == 'a') r++;
      return r;
  }
  ```
  Beurteile für jede Implementierung: Sie liefert für jedes erlaubte `s` das richtige Ergebnis und terminiert.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`z1`'
        richtig: true
        erklaerung: 'Basisfall `""`, Fortschritt `substring(1)`, das erste Zeichen wird gezählt.'
      - text: '`z2`'
        richtig: false
        erklaerung: 'Für `""` greift der Basisfall nicht. `s.substring(0, 1)` wirft dann eine Exception.'
      - text: '`z3`'
        richtig: true
        erklaerung: 'Gleiche Idee wie `z1`, nur von hinten: Der Aufruf bekommt alles außer dem letzten Zeichen.'
      - text: '`z4`'
        richtig: false
        erklaerung: '`s.substring(0)` ist wieder ganz `s`. Der Aufruf wird nie kleiner, es entsteht ein `StackOverflowError`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Prüfe `z2` mit dem leeren String. Welcher Zweig läuft dann?'
      - wert: [r, f, r, r]
        meldung: 'Prüfe bei `z4` den Fortschritt. Was liefert `s.substring(0)`?'
hinweise:
  - 'Prüfe jede Implementierung in drei Schritten: Basisfall mit `""`, Fortschritt, ein Beispiel wie `"ab"`.'
  - '`s.substring(k)` ist der Rest ab Index `k`. Für `k = 0` ist das der ganze String.'
loesung: |
  **Ansatz:** Für jede Implementierung Basisfall, Fortschritt und ein kleines Beispiel prüfen.
  ---
  `z1` und `z3` haben den Basisfall `""` und verkürzen den String in jedem Aufruf um ein Zeichen. Sie zählen das abgetrennte Zeichen. Beide richtig.
  ---
  `z2` scheitert am leeren String, weil der Basisfall erst bei Länge 1 greift. `z4` macht keinen Fortschritt und terminiert nie. Richtig sind also nur `z1` und `z3`.
```

```reflexion
frage: Warum ist der kleinste erlaubte Wert bei Rekursions- und Array-Fragen der wichtigste Testfall?
antwort: |
  An den Rändern der erlaubten Eingaben passieren die meisten Fehler: Ein Basisfall deckt den leeren String nicht ab,
  eine Schleife greift einen Index zu weit, eine Formel stimmt erst ab `n = 2`. Die Distraktoren in Richtig/Falsch-
  Fragen sind oft genau so gebaut, dass sie für „normale“ Eingaben funktionieren und nur am Rand versagen. Wer den
  kleinsten erlaubten Wert zuerst prüft, findet solche Gegenbeispiele mit der wenigsten Rechenarbeit.
```

## Komplexität, Suchen und Sortieren beurteilen

```aufgabe
id: qz-al-check
titel: Wie oft läuft die innere Schleife?
niveau: 1
art: check
angabe: |
  Wie oft wird `z++` ausgeführt? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
  ```java
  int z = 0;
  for (int i = 0; i < 5; i++) {
      for (int j = 0; j < 4; j++) {
          z++;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "5 * 4"
    fehler:
      - wert: "9"
        meldung: 'Die innere Schleife läuft in **jedem** der 5 äußeren Durchläufe komplett, also 4-mal. Die Zahlen werden multipliziert.'
loesung: |
  Die äußere Schleife läuft 5-mal. In jedem Durchlauf läuft die innere 4-mal.
  ---
  Zusammen 5 · 4 = 20 Ausführungen von `z++`.
```

Die letzten Fragen der TUWEL-Tests 2 betrafen **Algorithmen**: Laufzeit, Suchen und Sortieren. Ausführlich behandeln
das die Kapitel 17 bis 19. Jeder Teil dieser Lektion verlinkt die passende Lektion dort. Diese Lektion fasst nur zusammen, was du für die vier Schablonen brauchst:

- **Slot 6:** Mehrere Schleifen-Fragmente mit einem Kommentar zur Laufzeit. Stimmt die angegebene O-Schranke?
- **Slot 7:** Eine Variante der linearen Suche. Welchen Index liefert sie, und findet sie jeden Wert?
- **Slot 8:** Kann eine bestimmte Belegung nach irgendeinem Durchlauf von Bubble Sort, Selection Sort oder Insertion Sort
  entstehen, also nicht nur nach dem ersten?
- **Slot 9:** Ein Sortierverfahren wird an einer Zeile verändert. Terminiert es noch, sortiert es noch, ist es noch stabil?

### Laufzeit in O-Notation

Die **Laufzeit** eines Programms misst man in Schritten, nicht in Sekunden. Man zählt, wie oft die innerste
Anweisung ausgeführt wird, abhängig von der Eingabegröße `n`. Die **O-Notation** beschreibt nur, **wie schnell diese
Zahl wächst**. Konstante Faktoren und kleinere Summanden lässt man weg. Aus `3n² + 5n` wird `O(n²)`, gelesen „O von
n Quadrat“. Die Frage nach der **kleinsten oberen Schranke** verlangt die engste Klasse, die noch passt. Die
üblichen Klassen, von langsam zu schnell wachsend:

`O(1)` (konstant), `O(log n)` (logarithmisch), `O(n)` (linear), `O(n log n)`, `O(n²)` (quadratisch), `O(n³)`.

Dabei ist `log n` der Logarithmus zur Basis 2. Er sagt, wie oft man `n` halbieren kann, bis 1 übrig bleibt. Für
`n = 8` ist `log n = 3`, für `n = 1024` ist `log n = 10`.

Bei verschachtelten Schleifen bestimmst du für **jede** Schleife, wie oft sie läuft, und multiplizierst. Wie oft eine
Schleife läuft, hängt an ihrem Schritt:

- `j++` oder `j += 2` bis `n`: etwa `n` beziehungsweise `n / 2` Durchläufe, also `O(n)`.
- `j *= 2` bis `n`: etwa `log n` Durchläufe, denn `j` verdoppelt sich jedes Mal.
- `j += n / 2` bis `n`: für `n >= 2` höchstens 3 Durchläufe, also konstant, `O(1)`. (Für `n = 1` wäre der Schritt 0, und die Schleife endete nie.)
- Start bei 0, `j < 100` und `j++`: genau 100 Durchläufe, also `O(1)`.

:::beispiel[Eine Doppelschleife mit Verdopplung]
```java
for (int i = 0; i < n; i++) {
    for (int j = 1; j < n; j *= 2) {
        z++;
    }
}
```
Die äußere Schleife läuft `n`-mal. Die innere verdoppelt `j`: 1, 2, 4, 8, … , solange `j < n`. Für `n = 8` sind das
die Werte 1, 2 und 4, also 3 Durchläufe, genau `log 8`. Zusammen etwa `n · log n` Ausführungen von `z++`. Für `n = 8`
sind es 8 · 3 = 24.

Kleinste obere Schranke: **`O(n log n)`**. Ein Kommentar „`O(n²)`“ wäre zwar eine obere Schranke, aber nicht die
kleinste. Im Quiz ist er deshalb als falsch zu werten.
:::

Ausführlich: [17.4 Die O-Notation: nur das Wachstum zählt](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt)
und [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse).

:::achtung[Zwei Schleifen heißt nicht automatisch n²]
```java
// Vorbedingung: n >= 3
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j += n / 3)
        z++;
```
Jemand sieht zwei verschachtelte Schleifen bis `n` und schreibt `O(n²)`. Aber die innere Schleife springt in
Schritten von `n / 3`. Für `n = 99` nimmt `j` nur die Werte 0, 33 und 66 an, für `n = 100` die Werte 0, 33, 66 und 99.
Die innere Schleife läuft also für jedes `n >= 3` höchstens fünfmal (fünfmal nur bei `n = 5`, sonst drei- oder
viermal). Zusammen höchstens `5n` Ausführungen, also
**`O(n)`**. Schau bei jeder Schleife auf den Schritt, nicht nur auf die Grenze. (Für `n` unter 3 wäre `n / 3` gleich 0,
und die innere Schleife endete nie. Darum die Vorbedingung.)
:::

### Varianten der linearen Suche

Die **lineare Suche** geht ein Array Element für Element durch, bis sie den gesuchten Wert `key` findet. Bei
Slot 7 bekommst du eine Variante und prüfst: In welcher Richtung wird gesucht? Wird beim ersten Treffer aufgehört?
Was kommt zurück, wenn `key` fehlt? Stürzt sie bei einem leeren Array ab? Ausführlich:
[18.2 Varianten der linearen Suche](/lernen/ep1/suchen/varianten-der-linearen-suche) und
[18.3 Suchvarianten im Quiz: Flag, Wächter und zwei Indizes](/lernen/ep1/suchen/suchvarianten-im-quiz-flag-waechter-und-zwei-indizes).

:::beispiel[Eine Suche ohne Abbruch]
```java
// Vorbedingung: data != null
static int find(int[] data, int key) {
    int pos = -1;
    for (int i = 0; i < data.length; i++) {
        if (data[i] == key) {
            pos = i;
        }
    }
    return pos;
}
```
Die Schleife hört beim Treffer **nicht** auf. Jeder spätere Treffer überschreibt `pos`. Für `{4, 7, 4}` und `key = 4`
liefert `find` daher 2, den **größten** Index. Aussagen zu dieser Variante:

- „`find` durchläuft das Array von vorn nach hinten.“ Richtig, `i` läuft von 0 aufwärts.
- „Steht `key` an mehreren Stellen, liefert `find` die Position des ersten Vorkommens.“ Falsch, es ist die des letzten.
- „Fehlt `key`, wird −1 geliefert.“ Richtig, `pos` wird dann nie überschrieben.
- „Für ein leeres Array gibt es eine Exception.“ Falsch, die Schleife läuft keinmal.
:::

### Drei einfache Sortierverfahren

Alle drei Verfahren sortieren ein Array aufsteigend und bestehen aus einer äußeren und einer inneren Schleife. Ein
**Durchlauf** meint einen Durchlauf der äußeren Schleife.

- **Bubble Sort:** Die innere Schleife vergleicht benachbarte Elemente und tauscht sie, wenn das linke größer ist.
  Nach dem ersten Durchlauf steht das **größte** Element ganz rechts.
- **Selection Sort:** Ein Durchlauf sucht das **kleinste** Element im unsortierten Teil und tauscht es an dessen
  Anfang. Nach dem ersten Durchlauf steht das kleinste Element ganz links. Sonst ändert sich nur die Stelle, von der
  es kam.
- **Insertion Sort:** Der linke Teil ist sortiert. Ein Durchlauf nimmt das nächste Element und **fügt es an der
  richtigen Stelle** im linken Teil ein. Rechts davon ändert sich nichts.

Ein Verfahren heißt **stabil**, wenn gleiche Werte ihre Reihenfolge behalten. Steht von zwei gleichen Werten vor dem
Sortieren einer links, steht er auch danach links. Bubble Sort mit `>` ist stabil, weil gleiche Nachbarn nicht
getauscht werden.

:::beispiel[Ein Durchlauf Bubble Sort]
Das Array `[5, 1, 4, 2, 8, 3]` nach dem ersten Durchlauf von Bubble Sort:

1. 5 > 1, tauschen: `[1, 5, 4, 2, 8, 3]`.
2. 5 > 4, tauschen: `[1, 4, 5, 2, 8, 3]`.
3. 5 > 2, tauschen: `[1, 4, 2, 5, 8, 3]`.
4. 5 > 8 ist falsch, nicht tauschen.
5. 8 > 3, tauschen: `[1, 4, 2, 5, 3, 8]`.

Ergebnis `[1, 4, 2, 5, 3, 8]`. Die 8 ist ganz rechts angekommen. Eine Belegung, bei der nach einem Durchlauf das
größte Element **nicht** rechts steht, kann bei Bubble Sort nicht entstehen. Das ist die schnellste Prüfung für Slot 8.
:::

:::achtung[Mit >= wird Bubble Sort instabil]
Jemand ändert die Vergleichszeile zu `if (data[j] >= data[j + 1])` und meint: „Sortiert ist trotzdem alles, also
ändert sich nichts.“

Sortiert wird tatsächlich noch. Aber jetzt werden auch **gleiche** Nachbarn getauscht. Bei zwei gleichen Werten,
etwa `2` (der linke) und `2` (der rechte), wandert der linke nach rechts. Die Reihenfolge gleicher Werte ändert sich,
das Verfahren ist **nicht mehr stabil**. In Slot 9 lautet die Aussage oft „terminiert, sortiert **und** ist stabil“.
Dann macht schon der Verlust der Stabilität die ganze Aussage falsch.
:::

Ausführlich: [19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen),
[19.6 Stabilität: gleiche Schlüssel behalten ihre Reihenfolge](/lernen/ep1/sortieren/stabilitaet-gleiche-schluessel-behalten-ihre-reihenfolge)
und [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).

:::merke[Algorithmen im Richtig/Falsch-Block]
- **O-Schranke:** Für jede Schleife den Schritt ansehen, Durchläufe multiplizieren, Konstanten weglassen, die kleinste passende Klasse wählen.
- **Suche:** Richtung, Abbruch beim ersten Treffer, Rückgabe bei Fehlschlag, leeres Array.
- **Sortieren:** Nach einem Durchlauf steht bei Bubble Sort das Größte rechts, bei Selection Sort das Kleinste links, bei Insertion Sort ist der linke Teil sortiert und der Rest unverändert.
- **Nach `k` Durchläufen:** Die Originalfragen fragen oft nach irgendeinem Durchlauf. Bubble Sort hat dann rechts die `k` größten Werte sortiert. Selection Sort hat links die `k` kleinsten sortiert. Insertion Sort hat die ersten `k + 1` Elemente sortiert und den Rest unverändert.
- **Stabilität:** Werden gleiche Werte getauscht? Dann nicht stabil.
:::

```aufgabe
id: qz-al-zaehlen
titel: Eine Schleife mit fester innerer Grenze
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Wie oft wird `z++` für `n = 10` ausgeführt?
  ```java
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < 3; j++) {
          z++;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "10 * 3"
    fehler:
      - wert: "100"
        meldung: 'Die innere Schleife läuft bis 3, nicht bis `n`. Sie läuft in jedem äußeren Durchlauf genau 3-mal.'
      - wert: "13"
        meldung: 'Die innere Schleife läuft in **jedem** äußeren Durchlauf. Die Zahlen werden multipliziert, nicht addiert.'
hinweise:
  - Bestimme für jede Schleife einzeln die Zahl der Durchläufe und multipliziere.
loesung: |
  **Ansatz:** Außen 10 Durchläufe, innen jeweils 3.
  ---
  10 · 3 = 30. Allgemein `3n`, also `O(n)`, denn der Faktor 3 fällt in der O-Notation weg.
```

```aufgabe
id: qz-al-bubble
titel: Ein Durchlauf Bubble Sort
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: Was gibt das Programm aus? Es führt genau einen Durchlauf der äußeren Schleife von Bubble Sort aus.
teile:
  - typ: ausgabe
    code: |
      int[] a = {4, 2, 7, 1, 5};
      for (int j = 0; j < a.length - 1; j++) {
          if (a[j] > a[j + 1]) {
              int t = a[j];
              a[j] = a[j + 1];
              a[j + 1] = t;
          }
      }
      System.out.println(Arrays.toString(a));
    loesung: |
      [2, 4, 1, 5, 7]
    fehler:
      - wert: "[1, 2, 4, 5, 7]"
        meldung: 'Das wäre das fertig sortierte Array. Ein einziger Durchlauf bringt nur das größte Element ans Ende.'
      - wert: "[2, 4, 7, 1, 5]"
        meldung: 'Nach dem Tausch von 4 und 2 geht die Schleife weiter. Auch 7 und 1 sowie danach 7 und 5 werden verglichen.'
hinweise:
  - Vergleiche nacheinander die Paare an den Indizes (0, 1), (1, 2), (2, 3), (3, 4) und tausche, wenn links größer ist.
loesung: |
  **Ansatz:** Benachbarte Paare von links nach rechts vergleichen, bei Bedarf tauschen.
  ---
  4 > 2: `[2, 4, 7, 1, 5]`. 4 > 7 nein. 7 > 1: `[2, 4, 1, 7, 5]`. 7 > 5: `[2, 4, 1, 5, 7]`.
  ---
  Ausgabe `[2, 4, 1, 5, 7]`. Kontrolle: Das größte Element 7 steht rechts.
```

```aufgabe
id: qz-al-o-dreieck
titel: Kleinste obere Schranke einer Dreiecksschleife
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche kleinste obere Schranke hat die Laufzeit dieses Fragments in Abhängigkeit von `n`?
  ```java
  for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
          z++;
      }
  }
  ```
teile:
  - typ: auswahl
    optionen: ['`O(n)`', '`O(n log n)`', '`O(n²)`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Die innere Schleife wird zwar kürzer, läuft aber im Durchschnitt etwa `n / 2`-mal. Zusammen sind das etwa `n² / 2` Schritte.'
      - wert: 1
        meldung: '`log n` entsteht, wenn sich eine Laufvariable verdoppelt oder halbiert. Hier wächst `j` nur um 1.'
hinweise:
  - Zähle, wie oft die innere Schleife für `i = 0`, `i = 1` und `i = n − 1` läuft.
  - 'Die Summe `n + (n − 1) + … + 1` ist `n(n + 1) / 2`.'
loesung: |
  **Ansatz:** Die innere Schleife läuft `n − i`-mal.
  ---
  Zusammen `n + (n − 1) + … + 1 = n(n + 1) / 2 = n²/2 + n/2`.
  ---
  Den Faktor 1/2 und den kleineren Summanden lässt man weg: `O(n²)`.
```

```aufgabe
id: qz-al-welches-verfahren
titel: Nach welchem Verfahren kann diese Belegung entstehen?
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: nach den TUWEL-Tests 2 (Schablone „Belegung nach einem Durchlauf“, eigene Zahlen)
angabe: |
  Das Array `[5, 7, 3, 9, 1]` wird aufsteigend sortiert. Nach **einem** Durchlauf der äußeren Schleife lautet es
  `[1, 7, 3, 9, 5]`. Welches Verfahren wurde verwendet?
teile:
  - typ: auswahl
    optionen: ['Bubble Sort', 'Selection Sort', 'Insertion Sort']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Nach einem Durchlauf Bubble Sort stünde das größte Element 9 ganz rechts. Hier steht dort 5.'
      - wert: 2
        meldung: 'Insertion Sort fügt im ersten Durchlauf nur die 7 in den Teil `[5]` ein. Das Array bliebe `[5, 7, 3, 9, 1]`.'
hinweise:
  - Prüfe für jedes Verfahren, was nach einem Durchlauf feststeht.
  - 'Hier haben nur zwei Elemente ihre Plätze getauscht. Welches Verfahren macht genau einen Tausch je Durchlauf?'
gefuehrt:
  - text: Welches Element steht nach einem Durchlauf Bubble Sort ganz rechts?
    teil: { typ: zahl, loesung: "9", fehler: [{ wert: "1", meldung: "Bubble Sort schiebt das **größte** Element nach rechts." }] }
    erklaerung: 'Die 9 müsste ganz rechts stehen. In `[1, 7, 3, 9, 5]` steht dort 5, also scheidet Bubble Sort aus.'
  - text: Welche zwei Elemente haben ihre Plätze getauscht?
    erklaerung: 'Die 5 (vorher Index 0) und die 1 (vorher Index 4). Alle anderen stehen am alten Platz.'
  - text: Welches Verfahren tauscht im ersten Durchlauf das kleinste Element an den Anfang?
    teil: { typ: auswahl, optionen: ['Selection Sort', 'Insertion Sort'], richtig: [0] }
    erklaerung: Selection Sort sucht das Minimum 1 und tauscht es mit dem ersten Element 5.
loesung: |
  **Ansatz:** Für jedes Verfahren bestimmen, wie das Array nach einem Durchlauf aussieht.
  ---
  Bubble Sort ergäbe `[5, 3, 7, 1, 9]`. Insertion Sort ließe das Array unverändert, weil 7 schon hinter 5 passt.
  ---
  Selection Sort tauscht das Minimum 1 mit dem ersten Element: `[1, 7, 3, 9, 5]`. Richtig ist Selection Sort.
```

```aufgabe
id: qz-al-suche-rueckwaerts
titel: Aussagen zu einer Suche von hinten
niveau: 2
lernziel: 6
kompetenz: verstehen
quelle: nach TUWEL-Test 2 WS2022, Frage 8 (Schablone, eigene Variante)
angabe: |
  ```java
  // Vorbedingung: data != null
  static int s(int[] data, int key) {
      int i = data.length - 1;
      while (i >= 0 && data[i] != key) {
          i--;
      }
      return i;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Steht `key` an mehreren Stellen in `data`, liefert `s` die Position des letzten Vorkommens.'
        richtig: true
        erklaerung: 'Die Suche beginnt hinten und hört beim ersten Treffer auf. Das ist der größte Index.'
      - text: 'Kommt `key` nicht vor, liefert `s` den Wert −1.'
        richtig: true
        erklaerung: '`i` wird bis −1 verringert. Dann ist `i >= 0` falsch, und −1 wird zurückgegeben.'
      - text: Für ein leeres Array wirft `s` eine Exception.
        richtig: false
        erklaerung: '`i` beginnt bei −1. `i >= 0` ist falsch, und wegen `&&` wird `data[i]` gar nicht mehr ausgewertet.'
      - text: 'Vertauscht man die beiden Teilbedingungen im `while`, ändert sich am Verhalten nichts.'
        richtig: false
        erklaerung: 'Dann wird zuerst `data[i]` ausgewertet. Fehlt `key`, kommt `i` bei −1 an, und `data[-1]` wirft eine Exception.'
    fehler:
      - wert: [r, r, r, f]
        meldung: '`&&` wertet die rechte Seite nur aus, wenn die linke wahr ist. Was ist `i >= 0` beim leeren Array?'
      - wert: [r, r, f, r]
        meldung: 'Stell dir die Bedingung vertauscht vor und lass `key` fehlen. Welcher Index wird zuletzt in `data[i]` eingesetzt?'
hinweise:
  - 'Erinnere dich an die **Kurzschlussauswertung**: Ist bei `&&` die linke Seite falsch, wird die rechte nicht mehr ausgewertet.'
  - Prüfe die Randfälle „leeres Array“ und „`key` fehlt“.
loesung: |
  **Ansatz:** Richtung (von hinten), Abbruch (beim ersten Treffer) und Randfälle prüfen. Die Kurzschlussauswertung erklärt [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
  ---
  Aussage 1 und 2 sind richtig: größter Index beim Treffer, sonst −1.
  ---
  Beim leeren Array schützt die Indexprüfung links vom `&&`. Vertauscht man die Seiten, fehlt dieser Schutz. Aussagen 3 und 4 sind falsch.
```

```aufgabe
id: qz-al-insertion
titel: Zwei Durchläufe Insertion Sort
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: Was gibt das Programm aus? Es führt die ersten zwei Durchläufe von Insertion Sort aus.
teile:
  - typ: ausgabe
    code: |
      int[] a = {6, 3, 8, 2, 7};
      for (int i = 1; i <= 2; i++) {
          int x = a[i];
          int j = i - 1;
          while (j >= 0 && a[j] > x) {
              a[j + 1] = a[j];
              j--;
          }
          a[j + 1] = x;
      }
      System.out.println(Arrays.toString(a));
    loesung: |
      [3, 6, 8, 2, 7]
    fehler:
      - wert: "[2, 3, 6, 8, 7]"
        meldung: 'Das wäre der Stand nach drei Durchläufen. Die Schleife läuft nur für `i = 1` und `i = 2`. Die 2 an Index 3 ist noch nicht dran.'
      - wert: "[6, 3, 8, 2, 7]"
        meldung: 'Das ist das unveränderte Array. Schon im ersten Durchlauf ist die 3 kleiner als die 6 und wird vor ihr eingefügt.'
hinweise:
  - 'Durchlauf `i = 1`: Die 3 wird in den sortierten Teil `[6]` eingefügt.'
  - 'Durchlauf `i = 2`: Die 8 wird in `[3, 6]` eingefügt. Muss sie wandern?'
loesung: |
  **Ansatz:** Der linke Teil bis Index `i − 1` ist sortiert. Das Element an Index `i` wird dort eingefügt.
  ---
  `i = 1`: `x = 3`. Die 6 ist größer und rückt nach rechts, die 3 kommt an Index 0: `[3, 6, 8, 2, 7]`.
  ---
  `i = 2`: `x = 8`. Die 6 ist nicht größer, die 8 bleibt. Ausgabe `[3, 6, 8, 2, 7]`.
```

```aufgabe
id: qz-al-mutation
titel: Bubble Sort an einer Zeile verändert
niveau: 3
lernziel: 6
kompetenz: begruenden
quelle: nach TUWEL-Test 2 WS2022, Frage 9 (Schablone, eigene Veränderungen)
angabe: |
  ```java
  static void bubbleSort(int[] data) {
      for (int i = 0; i < data.length - 1; i++) {             // Zeile A
          for (int j = 0; j < data.length - i - 1; j++) {     // Zeile B
              if (data[j] > data[j + 1]) {                    // Zeile C
                  int t = data[j];
                  data[j] = data[j + 1];
                  data[j + 1] = t;
              }
          }
      }
  }
  ```
  Beurteile für jede Veränderung die Aussage: „Der Algorithmus terminiert, sortiert jedes Array der Länge größer 0
  aufsteigend **und** ist stabil.“
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Zeile C: `if (data[j] >= data[j + 1])`'
        richtig: false
        erklaerung: 'Gleiche Nachbarn werden jetzt getauscht. Sortiert wird noch, aber die Reihenfolge gleicher Werte ändert sich. Nicht stabil.'
      - text: 'Zeile A: `for (int i = 0; i < 2 * data.length; i++)`'
        richtig: true
        erklaerung: 'Es gibt zusätzliche Durchläufe. Ab `i = data.length - 1` ist die Grenze `data.length - i - 1` höchstens 0, die innere Schleife läuft also keinmal. Harmlos.'
      - text: 'Zeile B: `for (int j = 0; j < data.length - 1; j++)`'
        richtig: true
        erklaerung: 'Die innere Schleife vergleicht auch den schon sortierten rechten Teil. Das kostet Zeit, tauscht dort aber nichts.'
      - text: 'Zeile B: `for (int j = 1; j < data.length - i - 1; j++)`'
        richtig: false
        erklaerung: 'Das Paar an den Indizes 0 und 1 wird nie verglichen. Gegenbeispiel `[2, 1]`: Es bleibt unverändert.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zur ersten Veränderung: Die Aussage verlangt auch Stabilität. Was passiert mit zwei gleichen Nachbarn bei `>=`?'
      - wert: [f, f, r, f]
        meldung: 'Zur zweiten Veränderung: Wie oft läuft die innere Schleife in den zusätzlichen Durchläufen, also ab `i = data.length - 1`?'
hinweise:
  - Prüfe jede Veränderung auf drei Dinge getrennt. Endet die Schleife? Wird alles sortiert? Bleiben gleiche Werte in ihrer Reihenfolge?
  - Für die Sortierung reicht ein Gegenbeispiel mit zwei Elementen, für die Stabilität eines mit zwei gleichen Werten.
loesung: |
  **Ansatz:** Die Aussage ist eine Und-Verknüpfung aus drei Teilen. Fällt ein Teil, ist sie falsch.
  ---
  Veränderung 1 sortiert noch, ist aber nicht stabil. Veränderung 4 vergleicht Index 0 nie mit Index 1 und sortiert `[2, 1]` nicht.
  ---
  Veränderung 2 fügt nur leere Durchläufe hinzu, Veränderung 3 nur überflüssige Vergleiche. Beide terminieren, sortieren und tauschen gleiche Werte nie. Richtig sind also die Aussagen zu Veränderung 2 und 3.
```

```reflexion
frage: Warum ist im Quiz eine Aussage wie „Die Laufzeit liegt in O(n²)“ für eine Schleife mit n · log n Schritten als falsch zu werten, obwohl n · log n kleiner ist als n²?
antwort: |
  Mathematisch ist `O(n²)` eine obere Schranke für `n · log n`, denn `n · log n` wächst nicht schneller als `n²`. Die
  Fragen in den TUWEL-Tests verlangen aber ausdrücklich die **kleinste** obere Schranke. Das ist die engste Klasse,
  die noch passt. Für `n · log n` ist das `O(n log n)`. Eine größere Klasse beschreibt die Laufzeit zu grob und
  beantwortet die Frage nicht. Lies deshalb im Stamm genau, ob „kleinste obere Schranke“ verlangt ist.
```

## Lückentext: Code ergänzen

```aufgabe
id: qz-lt-check
titel: Die richtige Schleifenbedingung
niveau: 1
art: check
angabe: |
  Welches Zeichen gehört in die Lücke, damit die Schleife jeden Index von `s` genau einmal besucht?
  `for (int i = 0; i ___ s.length(); i++)`
  (Wiederholung: [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen))
teile:
  - typ: auswahl
    optionen: ['`<`', '`<=`', '`>`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit `<=` würde auch `i = s.length()` besucht. Diesen Index gibt es nicht, der letzte ist `s.length() - 1`.'
      - wert: 2
        meldung: 'Mit `>` ist die Bedingung schon für `i = 0` falsch, denn `0 > s.length()` gilt nie: Eine Länge ist nie negativ. Die Schleife liefe keinmal.'
loesung: |
  Die Indizes laufen von 0 bis `s.length() - 1`.
  ---
  `i < s.length()` lässt genau diese Werte zu.
```

Im Sommersemester 2024 war der TUWEL-Test laut Studierendenberichten ein **Lückentext**. Das ist ein Stück Code, in
dem einzelne Teile fehlen. An jeder Lücke tippst du selbst etwas ein: einen Ausdruck, einen Operator, einen Typ.
Für die Quiz 2026W ist das Format nicht bestätigt. Lückentexte trainieren aber genau das, was auch der Test am
Rechner verlangt: Code, der übersetzt und das Richtige tut.

Anders als bei der Auswahlfrage gibt es keine Optionen zum Ausschließen. Dafür liefert der Code um die Lücke herum
viele Hinweise. Wie TUWEL deine Eingabe vergleicht, etwa ob Leerzeichen zählen, ist für 2026 nicht bekannt. Schreib
deshalb so, wie es im Java-Code stehen müsste, ohne überflüssige Zeichen.

### Die Umgebung der Lücke lesen

Bevor du etwas einsetzt, beantworte drei Fragen:

1. **Was für ein Ding gehört hinein?** Ein Typ (`int`, `char`), ein Operator (`<`, `&&`, `+=`), ein Ausdruck
   (`s.length() - 1`) oder eine ganze Anweisung? Steht der Strichpunkt schon hinter der Lücke, gehört er nicht hinein.
2. **Welchen Typ muss es haben?** Eine Lücke in `if ( ___ )` braucht einen `boolean`. Eine Lücke in `int z = ___;`
   braucht einen Wert, der in einen `int` passt.
3. **Wozu dient es?** Was soll der Code insgesamt leisten? Ein Startwert für eine Summe ist 0, für ein Produkt 1, für
   ein Maximum das erste Element.

Danach setzt du ein und machst die **Probe**: Spiel den Code mit einem kleinen Beispiel durch, auch mit einem
Randfall wie dem leeren String.

:::beispiel[Lücken in einer Zählmethode]
Die Methode soll zählen, wie viele Großbuchstaben von `A` bis `Z` in `s` stehen.

```java
static int zaehleGross(String s) {
    int z = ___;
    for (int i = 0; i < ___; i++) {
        char c = s.charAt(i);
        if (c >= 'A' ___ c <= 'Z') {
            z++;
        }
    }
    return z;
}
```
- **Lücke 1:** Eine Zahl für den Zähler, der Strichpunkt steht schon da. Ein Zähler beginnt bei `0`.
- **Lücke 2:** Die obere Grenze der Indizes, also ein `int`. Für einen String ist das `s.length()`, mit Klammern.
- **Lücke 3:** Ein Operator zwischen zwei Vergleichen. `c` soll zugleich mindestens `A` **und** höchstens `Z` sein,
  also `&&`.

Probe mit `"HeLLo"`: `H`, `L`, `L` liegen im Bereich, `e` und `o` nicht. Ergebnis 3. Probe mit `""`: Die Schleife läuft
keinmal, Ergebnis 0.
:::

:::achtung[length oder length() verwechselt]
In Lücke 2 der Zählmethode `zaehleGross` tippt jemand `s.length`, ohne Klammern. Der Compiler meldet
`cannot find symbol` mit dem Zusatz `symbol: variable length`.

Bei **Strings** ist `length()` eine **Methode** und braucht Klammern. Bei **Arrays** ist `length` ein **Feld**, also
ein gespeicherter Wert, und steht **ohne** Klammern: `a.length`. Eine Merkhilfe: Ein String muss seine Länge
„ausrechnen“ (Methode), ein Array „kennt“ sie (Feld).
:::

:::beispiel[Lücken in einer Rekursion]
Die Methode soll die Summe `1 + 2 + … + n` rekursiv berechnen. Vorbedingung: `n >= 0`.

```java
static int summe(int n) {
    if (n ___ 0) return 0;
    return n + summe(___);
}
```
- **Lücke 1:** Ein Vergleichsoperator für den **Basisfall**. Für `n = 0` ist die Summe 0. Passend sind `==` oder `<=`.
  `<=` ist robuster, weil es auch negative Werte auffängt.
- **Lücke 2:** Das Argument des Selbstaufrufs. Es muss **kleiner** werden, damit der Basisfall erreicht wird:
  `n - 1`.

Probe mit `n = 3`: `3 + summe(2)` = `3 + 2 + summe(1)` = `3 + 2 + 1 + summe(0)` = 6.
:::

:::achtung[Zuweisung statt Vergleich in der Lücke]
In Lücke 1 der Summenmethode tippt jemand `=`. Daraus wird `if (n = 0)`. Das ist eine **Zuweisung** mit dem Ergebnis
0, also ein `int`. In die Klammern von `if` gehört aber ein `boolean`. Der Compiler meldet
`incompatible types: int cannot be converted to boolean`. Für einen Vergleich steht in Java immer `==`.
:::

### Zeit und Reihenfolge im Quiz

Für einen Lückentext gilt derselbe Zeitplan wie für die anderen Formate. Fülle zuerst alle Lücken, die du sofort
weißt. Die Lücken einer Aufgabe hängen oft zusammen: Wer die Bedingung der Schleife kennt, weiß oft auch den
Startwert. Bei einer schwierigen Lücke hilft es, die anderen zuerst zu füllen und dann den ganzen Code zu lesen.

:::merke[Lückentext lösen]
1. Art der Lücke bestimmen: Typ, Operator, Ausdruck oder Anweisung. Strichpunkte und Klammern um die Lücke beachten.
2. Typ bestimmen: `boolean` in Bedingungen, passender Zahltyp bei Zuweisungen.
3. Zweck bestimmen: Startwert, Grenze, Fortschritt.
4. Probe mit einem kleinen Beispiel und einem Randfall.
:::

```aufgabe
id: qz-lt-summe
titel: Summe von 1 bis 10
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: Fülle die Lücken so, dass das Programm die Summe 1 + 2 + … + 10 = 55 ausgibt.
teile:
  - typ: lueckentext
    code: |
      int summe = 0;
      for (int i = 1; i ___ 10; i++) {
          summe ___ i;
      }
      System.out.println(summe);
    luecken: [["<="], ["+=", "= summe +"]]
    fehler:
      - wert: ["<", "+="]
        meldung: 'Mit `i < 10` fehlt die 10. Die Summe wäre nur 45.'
      - wert: ["<=", "="]
        meldung: '`summe = i` überschreibt den Zähler in jedem Durchlauf. Am Ende stünde dort nur 10.'
hinweise:
  - Die 10 soll noch addiert werden. Und `summe` soll bei jedem Durchlauf wachsen.
loesung: |
  **Ansatz:** Lücke 1 ist ein Vergleich, Lücke 2 ein Zuweisungsoperator.
  ---
  `i <= 10` lässt die 10 zu. `summe += i` addiert `i` zur bisherigen Summe. Ausgabe 55.
```

```aufgabe
id: qz-lt-laenge
titel: Länge von String und Array
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: Fülle die Lücken so, dass das Programm `13` ausgibt (Länge des Strings plus Länge des Arrays).
teile:
  - typ: lueckentext
    code: |
      String s = "Programm";
      int[] a = new int[5];
      System.out.println(s.___ + a.___);
    luecken: [["length()"], ["length"]]
    fehler:
      - wert: ["length", "length"]
        meldung: 'Bei einem String ist `length()` eine Methode und braucht Klammern. Ohne Klammern übersetzt der Code nicht.'
      - wert: ["length()", "length()"]
        meldung: 'Bei einem Array ist `length` ein Feld, also ohne Klammern. `a.length()` übersetzt nicht.'
hinweise:
  - String und Array schreiben die Länge verschieden. Eines braucht Klammern, das andere nicht.
loesung: |
  **Ansatz:** Für jede Lücke klären: String oder Array?
  ---
  `s.length()` ist 8, `a.length` ist 5. Zusammen 13.
```

```aufgabe
id: qz-lt-cast-char
titel: Kleinbuchstabe zu Großbuchstabe
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Kleinbuchstaben haben einen um 32 größeren Zeichencode als die passenden Großbuchstaben. Fülle die Lücke so, dass
  das Programm `D` ausgibt.
teile:
  - typ: lueckentext
    code: |
      char c = 'd';
      char gross = (___) (c - 32);
      System.out.println(gross);
    luecken: [["char"]]
    fehler:
      - wert: ["int"]
        meldung: '`(int)` ändert nichts, denn `c - 32` ist schon ein `int`. Ein `int` passt aber nicht ohne Cast in eine `char`-Variable.'
hinweise:
  - '`c - 32` hat den Typ `int`. Welcher Cast macht daraus ein Zeichen?'
loesung: |
  **Ansatz:** `c - 32` ist ein `int` mit dem Wert 100 − 32 = 68.
  ---
  `(char) 68` ist das Zeichen `D`. Ohne Cast übersetzt die Zuweisung an `char` nicht.
```

```aufgabe
id: qz-lt-rueckwaerts
titel: Einen String umdrehen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: Fülle die Lücken so, dass das Programm `negeR` ausgibt.
teile:
  - typ: lueckentext
    code: |
      String s = "Regen";
      String r = "";
      for (int i = ___; i >= 0; i--) {
          r = r + s.charAt(___);
      }
      System.out.println(r);
    luecken: [["s.length() - 1", "s.length()-1", "4"], ["i"]]
    fehler:
      - wert: ["s.length()", "i"]
        meldung: 'Der erste Durchlauf greift auf `s.charAt(5)` zu. Den Index gibt es nicht, der letzte ist `s.length() - 1`.'
      - wert: ["s.length() - 1", "s.length() - 1 - i"]
        meldung: '`i` läuft schon rückwärts. Mit `s.length() - 1 - i` würdest du die Richtung ein zweites Mal umdrehen und `Regen` erhalten.'
hinweise:
  - Die Schleife läuft rückwärts bis 0. Bei welchem Index muss sie beginnen?
  - Welches Zeichen soll in jedem Durchlauf angehängt werden?
gefuehrt:
  - text: Welchen Index hat das letzte Zeichen von `"Regen"`?
    teil: { typ: zahl, loesung: "4", fehler: [{ wert: "5", meldung: "5 ist die Länge. Die Indizes beginnen bei 0, der letzte ist Länge minus 1." }] }
    erklaerung: 'Allgemein `s.length() - 1`. So funktioniert der Code für jedes Wort.'
  - text: '`i` läuft von 4 bis 0 und `r` steht links. Welches Zeichen soll im Durchlauf mit `i` angehängt werden?'
    teil: { typ: auswahl, optionen: ['`s.charAt(i)`', '`s.charAt(s.length() - 1 - i)`'], richtig: [0] }
    erklaerung: 'Das Zeichen an der aktuellen Stelle `i`. Weil `i` rückwärts läuft und `r` nach rechts wächst, entsteht das Wort rückwärts.'
loesung: |
  **Ansatz:** Rückwärts laufen vom letzten Index bis 0 und jedes Zeichen rechts anhängen.
  ---
  Lücke 1: `s.length() - 1`, also 4. Lücke 2: `i`.
  ---
  Probe: `r` wird `n`, `ne`, `neg`, `nege`, `negeR`.
```

```aufgabe
id: qz-lt-maximum
titel: Das Maximum eines Arrays
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Fülle die Lücken so, dass `max` für **jedes** nicht leere Array das größte Element enthält, also auch für Arrays mit
  lauter negativen Werten.
teile:
  - typ: lueckentext
    code: |
      int[] a = {4, 9, 2, 9, 1};
      int max = ___;
      for (int i = 1; i < a.length; i++) {
          if (a[i] ___ max) {
              max = a[i];
          }
      }
      System.out.println(max);
    luecken: [["a[0]"], [">", ">="]]
    fehler:
      - wert: ["0", ">"]
        meldung: 'Für dieses Array ginge das gut. Bei `{-3, -5}` bliebe `max` aber 0, ein Wert, der gar nicht im Array steht. Starte mit einem echten Element.'
      - wert: ["a[0]", "<"]
        meldung: 'Mit `<` merkst du dir jeden **kleineren** Wert. Am Ende stünde das Minimum in `max`.'
hinweise:
  - Die Schleife beginnt bei Index 1. Welches Element ist dann schon „verarbeitet“?
  - '`max` soll überschrieben werden, wenn ein Element größer ist.'
loesung: |
  **Ansatz:** Startwert ist das erste Element, denn es ist sicher ein Wert aus dem Array.
  ---
  Lücke 1: `a[0]`. Lücke 2: `>` (auch `>=` liefert dasselbe Maximum).
  ---
  Probe mit `{4, 9, 2, 9, 1}`: `max` wird 4, dann 9. Ausgabe 9. Mit `{-3, -5}` bleibt `max = -3`.
```

```aufgabe
id: qz-lt-ziffern
titel: Ziffern rekursiv zählen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll die Anzahl der Ziffern von `n` liefern, etwa 3 für 507 und 1 für 0. Vorbedingung: `n >= 0`.
  Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Main {
          static int ziffern(int n) {
              if (n < ___) return 1;
              return 1 + ziffern(___);
          }
      }
    luecken: [["10"], ["n / 10", "n/10"]]
    fehler:
      - wert: ["10", "n % 10"]
        meldung: '`n % 10` ist die **letzte Ziffer**, nicht die Zahl ohne sie. Für 507 riefe sich die Methode mit 7 auf und lieferte 2.'
      - wert: ["0", "n / 10"]
        meldung: '`n < 0` ist für erlaubte Werte nie wahr. Der Basisfall würde nie erreicht, und `ziffern(0)` riefe sich endlos selbst auf.'
hinweise:
  - Welche Zahlen haben genau eine Ziffer? Das ist der Basisfall.
  - 'Der Fortschritt muss die letzte Ziffer abschneiden: Wie geht das mit ganzzahliger Division?'
loesung: |
  **Ansatz:** Basisfall: einstellige Zahlen, also `n < 10`. Fortschritt: letzte Ziffer abschneiden.
  ---
  Lücke 1: `10`. Lücke 2: `n / 10`.
  ---
  Probe: `ziffern(507) = 1 + ziffern(50) = 1 + 1 + ziffern(5) = 3`. Und `ziffern(0) = 1`.
```

```aufgabe
id: qz-lt-zeilen-dreieck
titel: Ein Dreieck als jagged Array
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  `dreieck(3)` soll das Array `[[1], [1, 2], [1, 2, 3]]` liefern. Allgemein hat Zeile `i` die Länge `i + 1` und
  enthält die Zahlen ab 1 aufsteigend. Fülle die Lücken. (Wiederholung: [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays))
teile:
  - typ: lueckentext
    code: |
      public class Main {
          static int[][] dreieck(int n) {
              int[][] d = new int[n][];
              for (int i = 0; i < n; i++) {
                  d[i] = new int[___];
                  for (int j = 0; j < d[i].length; j++) {
                      d[i][j] = ___;
                  }
              }
              return d;
          }
      }
    luecken: [["i + 1", "1 + i", "i+1", "1+i"], ["j + 1", "1 + j", "j+1", "1+j"]]
    fehler:
      - wert: ["i", "j + 1"]
        meldung: 'Zeile 0 hätte dann die Länge 0. Die erste Zeile soll aber ein Element haben.'
      - wert: ["i + 1", "j"]
        meldung: 'Die Werte sollen bei 1 beginnen, `j` beginnt aber bei 0. Die erste Zeile wäre `[0]`.'
hinweise:
  - Zeile 0 hat Länge 1, Zeile 1 hat Länge 2. Wie hängt die Länge von `i` ab?
  - Der Index `j` beginnt bei 0, der Wert soll bei 1 beginnen.
loesung: |
  **Ansatz:** Jede Zeile wird mit ihrer eigenen Länge angelegt, dann gefüllt.
  ---
  Lücke 1: `i + 1`. Lücke 2: `j + 1`.
  ---
  Probe für `n = 3`: `[1]`, `[1, 2]`, `[1, 2, 3]`.
```

```aufgabe
id: qz-lt-suche
titel: Eine lineare Suche ergänzen
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll den **ersten** Index liefern, an dem `key` in `a` steht, und −1, wenn `key` fehlt. Sie soll auch
  für ein leeres Array funktionieren. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Main {
          static int finde(int[] a, int key) {
              int i = 0;
              while (i < a.length ___ a[i] != key) {
                  i++;
              }
              if (i == ___) {
                  return -1;
              }
              return i;
          }
      }
    luecken: [["&&"], ["a.length"]]
    fehler:
      - wert: ["||", "a.length"]
        meldung: 'Mit `||` läuft die Schleife weiter, solange **eine** Bedingung gilt. Fehlt `key`, wird `i` zu `a.length`, und `a[i]` wirft eine Exception.'
      - wert: ["&&", "a.length - 1"]
        meldung: 'Steht `key` an der letzten Stelle, ist `i == a.length - 1`, und die Methode meldet fälschlich −1. Nicht gefunden heißt: `i` ist über das Ende hinausgelaufen.'
hinweise:
  - Die Schleife soll weiterlaufen, solange noch Elemente da sind **und** das aktuelle nicht `key` ist.
  - Woran erkennst du nach der Schleife, dass die Suche bis zum Ende ergebnislos war?
  - Die Indexprüfung steht links vom Operator. Bei `&&` schützt sie den Zugriff `a[i]`.
loesung: |
  **Ansatz:** Die Schleife hört auf, sobald das Ende erreicht ist oder `key` gefunden wurde.
  ---
  Lücke 1: `&&`. Wegen der Kurzschlussauswertung wird `a[i]` nur gelesen, wenn `i < a.length` gilt.
  ---
  Lücke 2: `a.length`. Probe: `finde({5, 8, 5}, 5)` liefert 0, `finde({5, 8}, 3)` liefert −1, `finde({}, 1)` liefert −1.
```

```reflexion
frage: Warum ist ein Lückentext oft schwerer als eine Auswahlfrage zum selben Code?
antwort: |
  Bei einer Auswahlfrage stehen die möglichen Antworten schon da. Man kann sie vergleichen, ausschließen und die
  übrige prüfen. Beim Lückentext muss man die Antwort selbst erzeugen und dabei auch die Schreibweise genau treffen:
  `length()` oder `length`, `==` oder `=`, `&&` oder `||`. Dafür muss man den Zweck jeder Stelle verstanden haben,
  nicht nur den Unterschied zwischen drei Varianten. Gerade deshalb ist der Lückentext eine gute Vorbereitung auf den
  Test am Rechner, wo es auch keine Optionen gibt.
```

## Gemischte Wiederholung

Im Quiz steht nicht dabei, zu welchem Kapitel eine Frage gehört. Deshalb sind die Aufgaben hier gemischt, mit Stoff
aus [Kapitel 2](/lernen/ep1/ausdruecke), [Kapitel 4](/lernen/ep1/schleifen), [Kapitel 6](/lernen/ep1/methoden),
[Kapitel 10](/lernen/ep1/rekursion), [Kapitel 12](/lernen/ep1/arrays) und [Kapitel 14](/lernen/ep1/arrays-2d). Bei
den ersten beiden Aufgaben musst du nichts ausrechnen. Du entscheidest nur, welches Vorgehen passt. Genau diese
Entscheidung kostet im Quiz oft die meiste Zeit.

```aufgabe
id: qz-mix-pruefart
titel: Welche Prüftechnik passt?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: Ordne jeder Aussage aus einem Richtig/Falsch-Block die passende Prüftechnik zu. Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: a) „Die Methode liefert für bestimmte Werte `false`.“
    optionen: ['ein passendes Beispiel suchen', 'gezielt ein Gegenbeispiel suchen, zuerst bei Randfällen', 'genau diesen einen Aufruf ausrechnen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '„für bestimmte Werte“ ist eine Existenzaussage. Ein einziges passendes Beispiel macht sie richtig.'
      - wert: 2
        meldung: 'Die Aussage nennt keinen bestimmten Aufruf. Sie fragt, ob es irgendeinen gibt.'
  - typ: auswahl
    label: b) „Die Methode liefert für jedes gültige `n` einen positiven Wert.“
    optionen: ['ein passendes Beispiel suchen', 'gezielt ein Gegenbeispiel suchen, zuerst bei Randfällen', 'genau diesen einen Aufruf ausrechnen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '„für jedes“ ist eine Allaussage. Ein passendes Beispiel beweist sie nicht.'
      - wert: 2
        meldung: 'Ein einzelner Aufruf reicht für eine Allaussage nicht. Er kann sie höchstens widerlegen.'
  - typ: auswahl
    label: c) „Der Aufruf `f(3)` liefert 7.“
    optionen: ['ein passendes Beispiel suchen', 'gezielt ein Gegenbeispiel suchen, zuerst bei Randfällen', 'genau diesen einen Aufruf ausrechnen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Hier ist das Beispiel schon vorgegeben. Du musst nur ausrechnen, ob es stimmt.'
      - wert: 1
        meldung: 'Die Aussage spricht nur über `f(3)`. Andere Eingaben spielen keine Rolle.'
hinweise:
  - Suche in jeder Aussage das Signalwort für den Geltungsbereich.
  - '„für bestimmte“ heißt „es gibt“, „für jedes“ heißt „für alle“, und ohne Signalwort geht es um genau einen Fall.'
loesung: |
  **Ansatz:** Den Geltungsbereich jeder Aussage bestimmen.
  ---
  a) Existenzaussage: ein Beispiel genügt. b) Allaussage: Gegenbeispiel suchen.
  ---
  c) Einzelfall: genau diesen Aufruf ausrechnen.
```

```aufgabe
id: qz-mix-werkzeug
titel: Welches Werkzeug passt?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: Welches Vorgehen beantwortet die Frage am schnellsten? Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: a) Wie viele Werte fasst `new char[4][6]`?
    optionen: ['Längen multiplizieren', 'Durchläufe jeder Schleife bestimmen und multiplizieren', 'Formel für die Zahl der Aufrufe aufstellen und Tabelle von klein nach groß']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier gibt es keine Schleife. Gefragt ist die Kapazität eines Arrays.'
      - wert: 2
        meldung: 'Hier gibt es keine Rekursion. Gefragt ist die Kapazität eines Arrays.'
  - typ: auswahl
    label: b) Welche kleinste O-Schranke hat eine Doppelschleife, deren innere Schleife `j *= 2` verwendet?
    optionen: ['Längen multiplizieren', 'Durchläufe jeder Schleife bestimmen und multiplizieren', 'Formel für die Zahl der Aufrufe aufstellen und Tabelle von klein nach groß']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Es gibt kein Array. Gefragt ist, wie oft die innerste Anweisung läuft.'
      - wert: 2
        meldung: 'Es gibt keine Rekursion. Die Durchläufe der Schleifen bestimmen die Laufzeit.'
  - typ: auswahl
    label: c) Wie viele Zeichen gibt eine Methode aus, die sich in jedem Aufruf zweimal selbst aufruft?
    optionen: ['Längen multiplizieren', 'Durchläufe jeder Schleife bestimmen und multiplizieren', 'Formel für die Zahl der Aufrufe aufstellen und Tabelle von klein nach groß']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Es gibt kein Array. Die Ausgaben entstehen in den Aufrufen.'
      - wert: 1
        meldung: 'Es gibt keine Schleife. Die Wiederholung entsteht durch Selbstaufrufe.'
hinweise:
  - Frag zuerst, woher die Wiederholung kommt. Aus der Größe eines Arrays, aus Schleifen oder aus Selbstaufrufen?
loesung: |
  **Ansatz:** Die Quelle der Wiederholung bestimmt das Werkzeug.
  ---
  a) Array-Kapazität: 4 · 6. b) Schleifen: Durchläufe multiplizieren. Läuft die äußere Schleife bis `n`, ergibt das mit `j *= 2` innen `n log n`.
  ---
  c) Verzweigte Rekursion: Formel wie `A(n) = 2 · A(n − 1) + 1` und eine Tabelle.
```

```aufgabe
id: qz-mix-cast
titel: Zeichen und Zahlen in einer Zeile
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Stoff aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).)'
teile:
  - typ: ausgabe
    code: |
      System.out.println((char) ('a' + 3) + "" + (int) 'b');
    loesung: |
      d98
    fehler:
      - wert: "100b"
        meldung: 'Der erste Cast macht aus der Zahl 100 wieder ein Zeichen, also `d`. Der zweite Cast macht aus `b` die Zahl 98.'
      - wert: "db"
        meldung: '`(int) ''b''` ist der Zeichencode von `b`, also 98. Mit dem Cast wird die Zahl ausgegeben, nicht das Zeichen.'
hinweise:
  - '`''a''` hat den Code 97. Rechne zuerst die Klammer aus, dann den Cast.'
loesung: |
  **Ansatz:** Beide Casts einzeln auswerten, dann von links nach rechts verketten.
  ---
  `'a' + 3` ist 100, `(char) 100` ist `d`. `"d" + ""` bleibt `"d"`. `(int) 'b'` ist 98. Ergebnis `d98`.
```

```aufgabe
id: qz-mix-trennzeichen
titel: Quadratzahlen mit Komma
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: Was gibt das Programm aus? (Stoff aus [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem).)
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 5; i++) {
          System.out.print(i * i);
          if (i < 5) {
              System.out.print(",");
          }
      }
      System.out.println();
    loesung: |
      1,4,9,16,25
    fehler:
      - wert: "1,4,9,16,25,"
        meldung: 'Im letzten Durchlauf ist `i = 5`, und `5 < 5` ist falsch. Nach der 25 kommt kein Komma.'
hinweise:
  - Prüfe die Bedingung `i < 5` im letzten Durchlauf.
loesung: |
  **Ansatz:** In jedem Durchlauf wird `i * i` ausgegeben, danach ein Komma, außer im letzten.
  ---
  Ausgabe `1,4,9,16,25`. Fünf Zahlen, vier Kommas.
```

```aufgabe
id: qz-mix-ueberladen
titel: Welche Methode wird aufgerufen?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus? (Stoff aus [6.5 Überladen von Methoden](/lernen/ep1/methoden/ueberladen-von-methoden).)
teile:
  - typ: ausgabe
    code: |
      public class Main {
          static void f(int x) {
              System.out.println("int");
          }

          static void f(double x) {
              System.out.println("double");
          }

          public static void main(String[] args) {
              f(5 / 2);
              f(5 / 2.0);
              f('a');
          }
      }
    loesung: |
      int
      double
      int
    fehler:
      - wert: "double\ndouble\nint"
        meldung: '`5 / 2` sind zwei `int`. Das Ergebnis 2 ist ein `int`, also passt `f(int)` genau.'
      - wert: "int\ndouble\ndouble"
        meldung: 'Ein `char` wird zuerst zu `int` erweitert. `f(int)` passt besser als `f(double)`, weil der Weg kürzer ist.'
hinweise:
  - Bestimme den Typ jedes Arguments. Java wählt die Methode, deren Parametertyp am besten passt.
  - '`char` kann zu `int` und zu `double` erweitert werden. Gewählt wird der nähere Typ.'
loesung: |
  **Ansatz:** Für jeden Aufruf den Typ des Arguments bestimmen.
  ---
  `5 / 2` ist `int` (Wert 2): `f(int)`. `5 / 2.0` ist `double`: `f(double)`.
  ---
  `'a'` ist ein `char`. Beide Methoden kämen in Frage, aber `int` liegt in der Kette näher als `double`. Ausgabe: drei Zeilen `int`, `double`, `int`.
```

```aufgabe
id: qz-mix-alias
titel: Zwei Namen für ein Array
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Stoff aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array).)'
teile:
  - typ: ausgabe
    code: |
      int[] a = {1, 2, 3};
      int[] b = a;
      b[0] = 9;
      b = new int[]{7, 7, 7};
      b[1] = 0;
      System.out.println(a[0] + " " + a[1]);
    loesung: |
      9 2
    fehler:
      - wert: "1 2"
        meldung: '`int[] b = a;` kopiert kein Array. `b` zeigt danach auf **dasselbe** Array wie `a`. `b[0] = 9` ändert also auch `a[0]`.'
      - wert: "9 0"
        meldung: 'Nach `b = new int[]{7, 7, 7};` zeigt `b` auf ein neues Array. `b[1] = 0` ändert nur dieses, nicht `a`.'
hinweise:
  - Zeichne für jede Zeile, auf welches Array `a` und `b` zeigen.
  - Eine Zuweisung an `b` selbst ändert nur, wohin `b` zeigt. Eine Zuweisung an `b[i]` ändert das Array, auf das `b` gerade zeigt.
loesung: |
  **Ansatz:** Verfolgen, worauf `a` und `b` nach jeder Zeile zeigen.
  ---
  Nach `b = a` zeigen beide auf `{1, 2, 3}`. `b[0] = 9` macht daraus `{9, 2, 3}`.
  ---
  Dann zeigt `b` auf ein neues Array, und `b[1] = 0` betrifft nur dieses. `a` ist weiter `{9, 2, 3}`. Ausgabe `9 2`.
```

```aufgabe
id: qz-mix-rekursion
titel: Ausgabe vor und nach dem Selbstaufruf
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: 'Was gibt das Programm aus? (Stoff aus [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg).)'
teile:
  - typ: ausgabe
    code: |
      public class Main {
          static void t(int n) {
              if (n == 0) {
                  return;
              }
              System.out.print(n);
              t(n - 1);
              System.out.print(n);
          }

          public static void main(String[] args) {
              t(3);
              System.out.println();
          }
      }
    loesung: |
      321123
    fehler:
      - wert: "321"
        meldung: 'Nach dem Selbstaufruf steht noch eine Ausgabe. Sie läuft auf dem **Rückweg**, wenn der innere Aufruf fertig ist.'
      - wert: "123321"
        meldung: 'Die erste Ausgabe steht **vor** dem Selbstaufruf. Sie erscheint auf dem Hinweg, also zuerst mit dem größten `n`.'
hinweise:
  - Die erste Ausgabe läuft auf dem Hinweg, die zweite auf dem Rückweg.
  - Der innerste Aufruf `t(0)` gibt nichts aus.
loesung: |
  **Ansatz:** Hinweg: `t(3)`, `t(2)`, `t(1)`, `t(0)`. Jede Ebene gibt vor dem Abstieg ihr `n` aus: `321`.
  ---
  Rückweg: `t(1)` ist zuerst fertig und gibt `1` aus, dann `t(2)` mit `2`, dann `t(3)` mit `3`: `123`.
  ---
  Zusammen `321123`.
```

```aufgabe
id: qz-mix-2d
titel: Aussagen zu einer erzeugenden 2D-Methode
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: nach TUWEL-Test 2 WS2022, Frage 3 (Schablone, eigene Methode)
angabe: |
  ```java
  // Vorbedingung: 1 <= n <= 50
  static int[][] erzeuge(int n) {
      int[][] r = new int[n][];
      for (int i = 0; i < n; i++) {
          r[i] = new int[n - i];
          for (int j = 0; j < r[i].length; j++) {
              r[i][j] = i - j;
          }
      }
      return r;
  }
  ```
  Beurteile die Aussagen über das Array `r`, das `erzeuge(n)` liefert. (Wiederholung: [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays))
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für jedes gültige `n` gilt `r.length == n`.'
        richtig: true
        erklaerung: '`new int[n][]` legt `n` Zeilen an, und jede bekommt in der Schleife ein eigenes Array.'
      - text: Alle Zeilen von `r` sind gleich lang.
        richtig: false
        erklaerung: 'Zeile `i` hat die Länge `n − i`. Gegenbeispiel `n = 2`: Zeile 0 hat Länge 2, Zeile 1 hat Länge 1.'
      - text: Für bestimmte gültige `n` enthält `r` einen Wert kleiner als 0.
        richtig: true
        erklaerung: 'Existenzaussage. Beispiel `n = 2`: `r[0][1] = 0 − 1 = −1`.'
      - text: 'Die Summe der Werte in Zeile 0 ist für jedes gültige `n` gleich 0.'
        richtig: false
        erklaerung: 'Für `n = 1` stimmt es: Zeile 0 ist `[0]`. Aber für `n = 2` ist Zeile 0 `[0, -1]` mit Summe −1.'
    fehler:
      - wert: [r, f, f, f]
        meldung: 'Zur dritten Aussage: Sie ist eine Existenzaussage, ein einziges `n` genügt. Was steht für `n = 2` in `r[0][1]`?'
      - wert: [r, f, r, r]
        meldung: 'Zur vierten Aussage: Prüfe nicht nur den Randfall `n = 1`. Welche Werte stehen für `n = 2` in Zeile 0?'
      - wert: [r, r, r, f]
        meldung: 'Zur zweiten Aussage: Die Zeilen werden mit `new int[n - i]` angelegt. Welche Länge hat Zeile 1 für `n = 2`?'
hinweise:
  - Schreib das Array für `n = 1`, `n = 2` und `n = 3` vollständig auf.
  - '`n = 1` ist ein Randfall, an dem manche Allaussagen zufällig stimmen. Ein Gegenbeispiel kann erst bei `n = 2` auftreten.'
loesung: |
  **Ansatz:** Das Array für kleine `n` aufschreiben. Für `n = 3`: `[[0, -1, -2], [1, 0], [2]]`.
  ---
  Drei Zeilen mit den Längen 3, 2, 1: Aussage 1 richtig, Aussage 2 falsch. Negative Werte gibt es ab `n = 2`, also ist die Existenzaussage 3 richtig.
  ---
  Zeile 0 ist `[0, -1, … , -(n - 1)]`. Ihre Summe ist nur für `n = 1` gleich 0. Aussage 4 ist falsch. Richtig sind die Aussagen 1 und 3.
```

## Prüfungsaufgaben

Diese Aufgaben sind im Format der TUWEL-Tests 2021 bis 2023 gebaut: Auswahlfragen mit drei Optionen zu 1 Punkt,
Richtig/Falsch-Blöcke mit vier Aussagen zu 2 Punkten und ein Lückentext. Das Format der Quiz 2026W ist noch nicht
veröffentlicht. Zu jeder Aufgabe steht ein **Zeitrichtwert**, also die Zeit, die du dir im Quiz ungefähr nehmen
kannst. Löse die Aufgaben ohne Computer, mit Papier und Trace-Tabelle, und miss deine Zeit. Bei den
Richtig/Falsch-Blöcken bekommst du hier Teilpunkte für jede richtig beurteilte Aussage. In den überlieferten
TUWEL-Versuchen war die Wertung strenger: 1 Punkt bei genau einer falschen Aussage, sonst 0.

```aufgabe
id: qz-pa-startwerte
titel: "Quiz: Startwerte für „LN“"
niveau: 3
lernziel: 3
kompetenz: anwenden
punkte: 1
quelle: nach TUWEL-Test 1 WS2021, Frage 3 (Schablone, eigenes Programm)
angabe: |
  Zeitrichtwert: 3 Minuten.
  ```java
  if (x % 2 == 0) {
      if (y > x) {
          System.out.print("K");
      } else {
          System.out.print("L");
      }
  } else {
      System.out.print("M");
  }
  if (z > x + y) {
      System.out.print("N");
  }
  ```
  Mit welchem Tripel von Startwerten gibt das Fragment genau `LN` aus?
teile:
  - typ: auswahl
    optionen: ['`int x = 6, y = 2, z = 9;`', '`int x = 6, y = 7, z = 20;`', '`int x = 5, y = 1, z = 9;`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '6 ist gerade, aber `7 > 6` ist wahr. Ausgegeben wird `K`, nicht `L`. Die Ausgabe wäre `KN`.'
      - wert: 2
        meldung: '5 ist ungerade. Der äußere `else`-Zweig gibt `M` aus. Die Ausgabe wäre `MN`.'
hinweise:
  - 'Für `L` muss `x` gerade sein und `y > x` falsch.'
  - 'Für `N` muss `z` größer als `x + y` sein. Prüfe jedes Tripel bis zur letzten Zeile.'
loesung: |
  **Ansatz:** Bedingungen für `LN` aufschreiben: `x` gerade, `y <= x`, `z > x + y`.
  ---
  Tripel 2 verletzt `y <= x` (Ausgabe `KN`). Tripel 3 verletzt „`x` gerade“ (Ausgabe `MN`).
  ---
  Tripel 1: 6 ist gerade, `2 > 6` ist falsch, also `L`. `9 > 8` ist wahr, also `N`. Ausgabe `LN`.
```

```aufgabe
id: qz-pa-vorbedingung
titel: "Quiz: Zwei Gefahrenstellen"
niveau: 3
lernziel: 4
kompetenz: anwenden
punkte: 1
quelle: nach TUWEL-Test 1 WS2021, Frage 9 (Schablone, eigene Methode)
angabe: |
  Zeitrichtwert: 3 Minuten.
  ```java
  static int f(int a, int b) {
      return a % b + 10 / (a + b);
  }
  ```
  Welche Vorbedingung garantiert, dass `f` für alle erlaubten `a` und `b` ohne Exception ein Ergebnis liefert?
teile:
  - typ: auswahl
    optionen: ['`b > 0`', '`a > 0 && b > 0`', '`a + b != 0`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probier `a = -3, b = 3`. Dann ist `b > 0`, aber `a + b = 0`, und `10 / 0` wirft eine Exception.'
      - wert: 2
        meldung: 'Probier `a = 3, b = 0`. Dann ist `a + b != 0`, aber `a % 0` wirft eine Exception.'
hinweise:
  - Im Code gibt es **zwei** Stellen, an denen durch eine ganze Zahl geteilt wird.
  - 'Prüfe jede Option einmal mit `b = 0` und einmal mit `a + b = 0`.'
loesung: |
  **Ansatz:** Gefahrenstellen: `a % b` (Gefahr bei `b == 0`) und `10 / (a + b)` (Gefahr bei `a + b == 0`).
  ---
  Option 1 schützt nur vor der ersten, Option 3 nur vor der zweiten.
  ---
  Aus `a > 0 && b > 0` folgt `b != 0` und `a + b > 0`. Beide Gefahren sind ausgeschlossen. Richtig ist Option 2.
```

```aufgabe
id: qz-pa-array-kommentare
titel: "Quiz: Kommentare zu Array-Inhalten"
niveau: 3
lernziel: 5
kompetenz: begruenden
punkte: 2
quelle: nach TUWEL-Test 2 WS2022, Frage 2 (Schablone, eigene Fragmente)
angabe: |
  Zeitrichtwert: 5 Minuten. Jedes Fragment beginnt mit `int[] d = new int[n];`. Beurteile, ob der Kommentar für
  **jedes** `n` mit `3 <= n <= 400` stimmt. `[0, n - 1]` meint alle ganzen Zahlen von 0 bis `n - 1`, beide Grenzen eingeschlossen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`for (int i = 0; i < n; i++) d[i] = i / 2;`, Kommentar: Der größte Wert in `d` ist `n / 2`.'
        richtig: false
        erklaerung: 'Der größte Wert ist `(n − 1) / 2`. Für gerades `n` ist das um 1 kleiner als `n / 2`. Gegenbeispiel `n = 4`: `[0, 0, 1, 1]`, größter Wert 1, aber `4 / 2 = 2`.'
      - text: '`for (int i = 0; i < n; i++) d[i] = (i + 1) % n;`, Kommentar: Jeder Wert aus `[0, n - 1]` kommt genau einmal vor.'
        richtig: true
        erklaerung: '`d` ist `[1, 2, … , n − 1, 0]`. Jeder Wert genau einmal.'
      - text: '`for (int i = n - 1; i > 1; i -= 2) d[i] = 5;`, Kommentar: Danach gilt `d[0] == 0`.'
        richtig: true
        erklaerung: 'Die Schleife läuft nur, solange `i > 1` gilt. Index 0 wird also nie beschrieben und behält den Standardwert 0.'
      - text: '`for (int i = 0; i < n; i += 2) d[i] = 1;`, Kommentar: Die Summe aller Werte in `d` ist `n / 2`.'
        richtig: false
        erklaerung: 'Einsen stehen an allen geraden Indizes. Bei ungeradem `n` sind das `(n + 1) / 2`. Gegenbeispiel `n = 3`: `[1, 0, 1]`, Summe 2, aber `3 / 2 = 1`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zur ersten Aussage: Probier ein gerades `n` wie 4. Welche Werte stehen dann in `d`?'
      - wert: [f, r, r, r]
        meldung: 'Zur vierten Aussage: Probier ein ungerades `n` wie 3. Wie viele gerade Indizes gibt es?'
hinweise:
  - Jeder Kommentar ist eine Allaussage. Probier `n = 3`, `4` und `5` aus.
  - Achte auf Ganzzahldivision und darauf, ob gerade und ungerade `n` verschieden ausgehen.
loesung: |
  **Ansatz:** Für jedes Fragment das Array für `n = 3` und `n = 4` aufschreiben.
  ---
  Fragment 1: `n = 4` liefert `[0, 0, 1, 1]`, Maximum 1 statt 2. Falsch. Fragment 4: `n = 3` liefert `[1, 0, 1]`, Summe 2 statt 1. Falsch.
  ---
  Fragment 2 verschiebt die Werte 0 bis `n − 1` nur um eins: richtig. Fragment 3 hört vor Index 1 auf und lässt `d[0]` unberührt: richtig.
```

```aufgabe
id: qz-pa-rekursion
titel: "Quiz: Aussagen zu einer rekursiven Prüfmethode"
niveau: 3
lernziel: 5
kompetenz: begruenden
punkte: 2
quelle: nach TUWEL-Test 2 WS2022, Frage 5 (Schablone, eigene Methode)
angabe: |
  Zeitrichtwert: 4 Minuten.
  ```java
  // Vorbedingung: s != null
  static boolean geordnet(String s) {
      if (s.length() <= 1) return true;
      if (s.charAt(0) > s.charAt(1)) return false;
      return geordnet(s.substring(1));
  }
  ```
  Die Methode prüft, ob die Zeichen von `s` von links nach rechts nie kleiner werden, wie in `"abbd"`. Beurteile die
  Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`geordnet` ist endrekursiv.'
        richtig: true
        erklaerung: 'Das Ergebnis des Selbstaufrufs wird unverändert zurückgegeben. Danach wird nichts mehr gerechnet.'
      - text: '`geordnet` hat zwei Fälle, in denen ohne Selbstaufruf ein Ergebnis zurückgegeben wird.'
        richtig: true
        erklaerung: '`return true` für Strings mit höchstens einem Zeichen und `return false`, wenn das erste Zeichen größer ist als das zweite.'
      - text: "`geordnet(\"\")` liefert `false`."
        richtig: false
        erklaerung: 'Der leere String hat die Länge 0, also greift die erste Zeile: `true`.'
      - text: "Ersetzt man in der ersten Zeile `s.length() <= 1` durch `s.length() == 1`, ändert sich für kein erlaubtes `s` etwas."
        richtig: false
        erklaerung: 'Für den leeren String greift diese Zeile dann nicht. Die zweite Zeile ruft `s.charAt(0)` auf und wirft eine `StringIndexOutOfBoundsException`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Zur vierten Aussage: Welche Zeile läuft für den leeren String, wenn der Basisfall erst bei Länge 1 greift?'
      - wert: [f, r, f, f]
        meldung: 'Zur ersten Aussage: Wird nach dem Selbstaufruf noch etwas mit seinem Ergebnis gemacht?'
hinweise:
  - Prüfe jede Aussage zuerst mit dem leeren String.
  - '**Endrekursiv** heißt: Der Selbstaufruf ist die letzte Aktion, sein Ergebnis wird direkt zurückgegeben.'
loesung: |
  **Ansatz:** Die Methode vergleicht die ersten beiden Zeichen und prüft dann den Rest ab Index 1. Strings mit höchstens einem Zeichen sind immer geordnet.
  ---
  Der Selbstaufruf steht direkt im `return`: endrekursiv. Es gibt zwei Ausgänge ohne Selbstaufruf.
  ---
  `geordnet("")` ist `true`. Mit dem Basisfall „Länge gleich 1“ würde der leere String zu `charAt(0)` führen und scheitern. Aussagen 1 und 2 sind richtig.
```

```aufgabe
id: qz-pa-o-schranken
titel: "Quiz: Kleinste obere Schranken"
niveau: 3
lernziel: 6
kompetenz: begruenden
punkte: 2
quelle: nach TUWEL-Test 2 WS2022, Frage 7 (Schablone, eigene Fragmente)
angabe: |
  Zeitrichtwert: 4 Minuten. Jeder Kommentar soll die **kleinste obere Schranke** für die Laufzeit in Abhängigkeit
  von `n` angeben. Dabei steht `n^2` für $n^2$. Beurteile die Kommentare.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) for (int k = 0; k < 10; k++) z++;`: `O(n^2)`'
        richtig: true
        erklaerung: '`n · n · 10` Schritte. Der Faktor 10 fällt weg: `O(n²)`.'
      - text: '`for (int i = 1; i < n; i *= 2) z++;`: `O(n)`'
        richtig: false
        erklaerung: '`i` verdoppelt sich. Die Schleife läuft etwa `log n`-mal. Kleinste obere Schranke `O(log n)`.'
      - text: '`for (int i = 0; i < n * n; i++) z++;`: `O(n)`'
        richtig: false
        erklaerung: 'Eine einzige Schleife, aber bis `n * n`. Das sind `n²` Schritte.'
      - text: '`for (int i = 0; i < n; i++) z++;  for (int j = 0; j < n; j++) z++;`: `O(n)`'
        richtig: true
        erklaerung: 'Zwei Schleifen **nacheinander**, nicht verschachtelt: `n + n = 2n` Schritte, also `O(n)`.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Zur dritten Aussage: Wie oft läuft eine Schleife bis `n * n`? Nicht die Zahl der Schleifen zählt, sondern die Zahl der Durchläufe.'
      - wert: [r, f, f, f]
        meldung: 'Zur vierten Aussage: Die beiden Schleifen stehen hintereinander. Werden ihre Durchläufe addiert oder multipliziert?'
hinweise:
  - Bestimme für jede Schleife die Zahl der Durchläufe. Verschachtelt wird multipliziert, hintereinander addiert.
  - 'Konstante Faktoren wie 10 oder 2 fallen weg. `i *= 2` ergibt `log n` Durchläufe.'
loesung: |
  **Ansatz:** Schrittzahl als Formel in `n` aufschreiben, dann Konstanten weglassen.
  ---
  Fragment 1: `10n²`, also `O(n²)`: richtig. Fragment 2: `log n`, also nicht `O(n)` als kleinste Schranke: falsch.
  ---
  Fragment 3: `n²` Schritte: falsch. Fragment 4: `2n`, also `O(n)`: richtig.
```

```aufgabe
id: qz-pa-sortieren
titel: "Quiz: Belegungen nach einem Durchlauf"
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 2
quelle: nach den TUWEL-Tests 2 (Schablone „Belegung nach einem Durchlauf“, eigene Zahlen)
angabe: |
  Zeitrichtwert: 5 Minuten. Das Array `[4, 9, 1, 7, 3]` soll aufsteigend sortiert werden. Beurteile, ob die
  genannte Belegung nach **genau einem** Durchlauf der äußeren Schleife des genannten Verfahrens entstehen kann.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Bubble Sort: `[4, 1, 7, 3, 9]`'
        richtig: true
        erklaerung: '4 < 9 bleibt, dann 9 wandert durch Tauschen mit 1, 7 und 3 nach rechts.'
      - text: 'Selection Sort: `[1, 9, 4, 7, 3]`'
        richtig: true
        erklaerung: 'Das Minimum 1 (Index 2) wird mit dem ersten Element 4 getauscht.'
      - text: 'Insertion Sort: `[1, 4, 9, 7, 3]`'
        richtig: false
        erklaerung: 'Der erste Durchlauf fügt nur die 9 in `[4]` ein, und dort passt sie schon. Das Array bleibt unverändert. `[1, 4, 9, 7, 3]` entsteht erst nach dem zweiten Durchlauf.'
      - text: 'Selection Sort: `[3, 9, 1, 7, 4]`'
        richtig: false
        erklaerung: 'Selection Sort bringt im ersten Durchlauf das **kleinste** Element nach vorn, also die 1, nicht die 3.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zur dritten Aussage: Welches Element wird im **ersten** Durchlauf von Insertion Sort eingefügt? Es ist das Element an Index 1.'
      - wert: [f, r, f, f]
        meldung: 'Zur ersten Aussage: Spiel einen Durchlauf Bubble Sort Paar für Paar durch.'
hinweise:
  - 'Merkmale nach einem Durchlauf: Bubble Sort hat das Größte rechts, Selection Sort das Kleinste links, Insertion Sort hat nur die ersten zwei Elemente sortiert.'
  - Spiel bei Bubble Sort jeden Vergleich einzeln durch.
loesung: |
  **Ansatz:** Für jedes Verfahren den Stand nach einem Durchlauf bestimmen und vergleichen.
  ---
  Bubble Sort: `[4, 1, 9, 7, 3]`, dann `[4, 1, 7, 9, 3]`, dann `[4, 1, 7, 3, 9]`. Aussage 1 richtig. Selection Sort: 1 und 4 tauschen, also `[1, 9, 4, 7, 3]`. Aussage 2 richtig, Aussage 4 falsch.
  ---
  Insertion Sort nach einem Durchlauf: `[4, 9, 1, 7, 3]` unverändert. Aussage 3 falsch.
```

```aufgabe
id: qz-pa-lueckentext
titel: "Lückentext: Positive Werte in einem 2D-Array zählen"
niveau: 3
lernziel: 7
kompetenz: anwenden
punkte: 4
angabe: |
  Zeitrichtwert: 5 Minuten. Die Methode soll zählen, wie viele Werte in `m` **größer als 0** sind. `m` darf ein
  jagged Array sein, die Zeilen können also verschieden lang sein. Vorbedingung: `m != null`, keine Zeile ist `null`.
  Fülle die vier Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Main {
          static int positive(int[][] m) {
              int z = ___;
              for (int i = 0; i < ___; i++) {
                  for (int j = 0; j < ___; j++) {
                      if (m[i][j] ___ 0) {
                          z++;
                      }
                  }
              }
              return z;
          }
      }
    luecken: [["0"], ["m.length"], ["m[i].length"], [">"]]
    fehler:
      - wert: ["0", "m.length", "m[0].length", ">"]
        meldung: '`m[0].length` ist die Länge der **ersten** Zeile. Bei einem jagged Array kann eine spätere Zeile kürzer sein (Exception) oder länger (Werte werden übersehen).'
      - wert: ["0", "m.length", "m[i].length", ">="]
        meldung: 'Gefragt sind Werte **größer als** 0. Mit `>=` würden auch die Nullen gezählt.'
      - wert: ["0", "m.length()", "m[i].length()", ">"]
        meldung: 'Bei Arrays ist `length` ein Feld und steht ohne Klammern.'
hinweise:
  - Die äußere Schleife läuft über die Zeilen, die innere über die Spalten **der aktuellen Zeile**.
  - Bei einem jagged Array hat jede Zeile ihre eigene Länge. Wie schreibt man die Länge der Zeile `i`?
  - Der Vergleich muss Nullen ausschließen.
loesung: |
  **Ansatz:** Zähler mit 0 starten, alle Zeilen und in jeder Zeile alle Spalten durchlaufen.
  ---
  Lücke 1: `0`. Lücke 2: `m.length` (Zahl der Zeilen). Lücke 3: `m[i].length` (Länge der aktuellen Zeile). Lücke 4: `>`.
  ---
  Probe mit `{{1, 0}, {-2}, {3, 4, 0}}`: positiv sind 1, 3 und 4, also 3. Mit `m[0].length` würde Zeile 1 (Länge 1) bei `j = 1` scheitern.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Regeln dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Bei Auswahlfragen markiere ich die Unterschiede zwischen den Optionen und schließe jede
  falsche Option mit einem konkreten Grund aus. Bei Schleifen prüfe ich dafür den ersten und den letzten Durchlauf.
  (2) Bei Richtig/Falsch-Aussagen bestimme ich den Geltungsbereich. Eine Allaussage widerlegt ein einziges
  Gegenbeispiel, eine Existenzaussage belegt ein einziges Beispiel. Gegenbeispiele suche ich zuerst bei Randfällen
  wie 0, dem leeren String oder `n = 2`, aber nur innerhalb der Vorbedingung. (3) Jede Aussage wird unabhängig von den
  anderen beurteilt. Gute Antworten sind auch die Tabelle „Aufruf, Ausgabe, Rückgabe“ oder die Regel „verschachtelt
  multiplizieren, hintereinander addieren“.
```

:::zusammenfassung
1. **Quizformat** (nach TUWEL-Tests 2021–2023, 2026W unbestätigt): Auswahlfragen mit drei Optionen zu 1 Punkt, Richtig/Falsch-Blöcke mit vier Aussagen zu 2 Punkten (1 Punkt bei genau einer falschen Aussage), Lückentext. Erlaubt sind Folien und Java-API.
2. **Auswahlfragen:** Unterschiede zwischen den Optionen markieren, nur diese prüfen, jede falsche Option mit Grund ausschließen, die übrige vollständig gegenprüfen.
3. **Richtig/Falsch:** Jede Aussage in Gegenstand, Behauptung und Geltungsbereich zerlegen. „immer, nie, für jedes“: Gegenbeispiel suchen. „kann, für bestimmte“: Beispiel suchen. Die Vorbedingung begrenzt die erlaubten Eingaben.
4. **Quiz 1, Typen:** Implizite Umwandlungen bei jeder Zuweisung mit anderem Typ und bei jeder Rechnung mit gemischten Typen zählen, Casts nicht. `charAt` liefert `char`. `+` wird von links nach rechts ausgewertet.
5. **Quiz 1, Kontrollfluss:** Startwerte bis zur letzten Zeile durchspielen. Intervallklammern einzeln übersetzen. Äußere Schleife bestimmt die Zeilen, innere die Zeichen je Zeile.
6. **Quiz 1, Methoden:** Tabelle „Aufruf, Ausgabe, Rückgabe“. Vorbedingung mit dem kritischen Wert der Gefahrenstelle prüfen. Nachbedingung wie eine Allaussage behandeln.
7. **Arrays und Rekursion:** Kapazität durch Multiplizieren. Rekursive Implementierungen auf Basisfall mit dem kleinsten Wert, Fortschritt und ein kleines Beispiel prüfen. Ausgaben verzweigter Rekursion mit einer Formel und einer Tabelle zählen.
8. **Algorithmen:** O-Schranke aus den Durchläufen jeder Schleife, Konstanten weglassen, die kleinste Klasse wählen. Nach einem Durchlauf: Bubble Sort hat das Größte rechts, Selection Sort das Kleinste links, Insertion Sort nur die ersten zwei Elemente sortiert.
:::

### Die häufigsten Fehler

Zu jedem Fehler ist eine Aufgabe genannt, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
Aufgabe noch einmal.

1. **Nur den Anfang der Ausgabe geprüft**, der letzte Durchlauf fehlt oder ist zu viel. Training: „Welche Schleife zählt herunter?“ und „Ein Muster mit zwei Trennzeichen“ in [21.1 Das Quizformat und Auswahlfragen](/lernen/ep1/quiz/das-quizformat-und-auswahlfragen).
2. **`'x'` und `"x"` verwechselt**, sodass `char + char` als Zahl gerechnet wird. Training: „Begründungen beim Ausschließen“ in [21.1 Das Quizformat und Auswahlfragen](/lernen/ep1/quiz/das-quizformat-und-auswahlfragen).
3. **Eine Allaussage mit Beispielen „bewiesen“** statt ein Gegenbeispiel zu suchen. Training: „Aussagen zu einer Zählmethode“ und „Aussagen zu einer Maximumsuche“ in [21.2 Richtig oder falsch: Aussagen zerlegen und prüfen](/lernen/ep1/quiz/richtig-oder-falsch-aussagen-zerlegen-und-pruefen).
4. **Ein Gegenbeispiel außerhalb der Vorbedingung** gewählt oder „nur dann“ mit „für jedes“ verwechselt. Training: „nur dann und genau dann“ in [21.2 Richtig oder falsch: Aussagen zerlegen und prüfen](/lernen/ep1/quiz/richtig-oder-falsch-aussagen-zerlegen-und-pruefen).
5. **Einen Cast auf den ganzen Ausdruck bezogen** oder die Zuweisung nach einem Cast nicht als Umwandlung gezählt. Training: „Wie weit reicht der Cast?“ und „Umwandlungen mit Cast dazwischen“ in [21.3 Quiz 1: Typen, Casts und Strings](/lernen/ep1/quiz/quiz-1-typen-casts-und-strings).
6. **Nur die erste if-Anweisung durchgespielt**, ein späteres `if` übersehen. Training: „Startwerte für BD“ in [21.4 Quiz 1: Verzweigungen und Schleifen](/lernen/ep1/quiz/quiz-1-verzweigungen-und-schleifen).
7. **Einen Seiteneffekt übersehen** oder die Reihenfolge verschachtelter Aufrufe vertauscht. Training: „Die Aufrufsequenz zu 4321“ und „Aussagen zu einer Methode mit Ausgabe“ in [21.5 Quiz 1: Methoden, Vor- und Nachbedingungen](/lernen/ep1/quiz/quiz-1-methoden-vor-und-nachbedingungen).
8. **Eine Vorbedingung gewählt, die nur vernünftig klingt**, aber den kritischen Wert zulässt. Training: „Eine ausreichende Vorbedingung“ in [21.5 Quiz 1: Methoden, Vor- und Nachbedingungen](/lernen/ep1/quiz/quiz-1-methoden-vor-und-nachbedingungen).
9. **Den leeren String als Randfall vergessen** oder eine Rekursion ohne Fortschritt übersehen. Training: „Vier Implementierungen beurteilen“ in [21.6 Arrays und Rekursion beurteilen](/lernen/ep1/quiz/arrays-und-rekursion-beurteilen).
10. **Kapazität addiert** oder Aufrufe verzweigter Rekursion wie bei linearer gezählt. Training: „Kapazität eines dreidimensionalen Arrays“ und „Ausgaben einer verzweigten Rekursion zählen“ in [21.6 Arrays und Rekursion beurteilen](/lernen/ep1/quiz/arrays-und-rekursion-beurteilen).
11. **Zwei verschachtelte Schleifen automatisch als O(n²) gewertet**, ohne den Schritt anzusehen. Training: „Kleinste obere Schranke einer Dreiecksschleife“ in [21.7 Komplexität, Suchen und Sortieren beurteilen](/lernen/ep1/quiz/komplexitaet-suchen-und-sortieren-beurteilen).
12. **Stabilität übersehen**, wenn eine Aussage „sortiert und stabil“ verlangt. Training: „Bubble Sort an einer Zeile verändert“ in [21.7 Komplexität, Suchen und Sortieren beurteilen](/lernen/ep1/quiz/komplexitaet-suchen-und-sortieren-beurteilen).
13. **`length` und `length()` verwechselt** oder `=` statt `==` in eine Lücke geschrieben. Training: „Länge von String und Array“ in [21.8 Lückentext: Code ergänzen](/lernen/ep1/quiz/lueckentext-code-ergaenzen).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen. Wo du dich mit 3 einschätzt, aber Fehler machst,
liegt deine wichtigste Baustelle.

1. Auswahlfragen durch begründetes Ausschließen lösen.
2. Richtig/Falsch-Aussagen zerlegen und mit Gegenbeispiel oder Beispiel prüfen.
3. Typumwandlungen zählen, zulässige Zuweisungen erkennen, Casts und Verkettung auswerten.
4. Startwerte, Schleifenköpfe und Änderungen zu einer Ausgabe oder Summe bestimmen.
5. Aufrufsequenz, Vorbedingung und Nachbedingung einer Methode beurteilen.
6. Aussagen über Arrays und Rekursion beurteilen.
7. Aussagen über O-Schranken, Suchvarianten und Sortierzwischenstände beurteilen.
8. Lückentexte füllen und die Zeit im Quiz einteilen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung, aber nach den Aufgabenblättern ein **Feedbackgespräch**. Die Karten hier
fragen nach der Technik dieses Kapitels: Wie gehst du an eine Quizfrage heran, und warum? Wer das in eigenen Worten
erklären kann, wendet es auch unter Zeitdruck an. Formuliere zuerst laut eine eigene Antwort, decke dann die
Musterantwort auf und vergleiche mit den Kernpunkten.

```karten
- id: qz-karte-ausschliessen
  frage: Wie gehst du bei einer Auswahlfrage mit drei ähnlichen Schleifen vor?
  antwort: |
    Ich lege die drei Optionen nebeneinander und markiere, was sich unterscheidet, meist Startwert, Bedingung oder
    Schrittweite. Nur diese Stellen prüfe ich, bei Schleifen den ersten und den letzten Durchlauf. Jede falsche Option
    schließe ich mit einem konkreten Grund aus. Die übrige spiele ich zur Gegenprobe einmal vollständig durch.
  kernpunkte:
    - Unterschiede markieren
    - erster und letzter Durchlauf
    - Ausschließen mit Grund und Gegenprobe
- id: qz-karte-allaussage
  frage: Wie beurteilst du eine Aussage, die mit „immer“ oder „für jedes“ formuliert ist?
  antwort: |
    Das ist eine Allaussage. Sie ist falsch, sobald es eine einzige erlaubte Eingabe gibt, für die sie nicht stimmt.
    Ich suche also gezielt ein Gegenbeispiel, zuerst bei Randfällen wie 0, 1, dem leeren String oder einem Array der
    Länge 1. Finde ich keines, brauche ich eine Begründung, die für alle Eingaben gilt. Ein paar passende Beispiele
    reichen nicht.
  kernpunkte:
    - ein Gegenbeispiel genügt für falsch
    - Randfälle zuerst
    - für richtig eine allgemeine Begründung
- id: qz-karte-existenz
  frage: Was ändert sich, wenn die Aussage „kann“ oder „für bestimmte Werte“ enthält?
  antwort: |
    Dann ist es eine Existenzaussage. Sie ist richtig, sobald ich eine einzige erlaubte Eingabe finde, für die sie
    stimmt. Eingaben, für die sie nicht stimmt, sagen nichts. Ich suche also ein passendes Beispiel und schreibe es auf.
  kernpunkte:
    - ein Beispiel genügt für richtig
    - Gegenbeispiele sind hier wertlos
- id: qz-karte-vorbedingung-gegenbeispiel
  frage: Warum ist eine Eingabe, die die Vorbedingung verletzt, kein Gegenbeispiel?
  antwort: |
    Die Vorbedingung ist der Teil des Vertrags, den der Aufrufer einhalten muss. Für Eingaben außerhalb verspricht die
    Methode nichts, also kann sie dort auch kein Versprechen brechen. Steht im Stamm „n > 0“, dann zählt `n = 0` nicht.
    Ich lese deshalb vor jeder Aussage die Vorbedingung.
  kernpunkte:
    - Vertrag zwischen Aufrufer und Methode
    - außerhalb keine Zusage
    - Vorbedingung zuerst lesen
- id: qz-karte-nur-dann
  frage: Was ist der Unterschied zwischen „liefert nur dann true, wenn n gerade ist“ und „liefert für jedes gerade n true“?
  antwort: |
    Die erste Aussage sagt: Immer wenn true herauskommt, ist n gerade. Ich widerlege sie mit einem ungeraden n, das true
    liefert. Die zweite sagt die umgekehrte Richtung: Jedes gerade n liefert true. Sie widerlege ich mit einem geraden
    n, das false liefert. Eine Methode wie „durch 4 oder durch 6 teilbar“ erfüllt die erste, aber nicht die zweite.
  kernpunkte:
    - zwei verschiedene Richtungen
    - Gegenbeispiel je Richtung
    - Beispiel durch 4 oder 6 teilbar
- id: qz-karte-umwandlungen
  frage: Wie zählst du implizite Typumwandlungen in einem Code-Stück?
  antwort: |
    Ich gehe Zeile für Zeile vor. In jeder Rechnung prüfe ich, ob die beiden Operanden verschiedene Typen haben. Dann
    wird der kleinere umgewandelt, das ist eine Umwandlung. Bei jeder Zuweisung prüfe ich, ob der Wert rechts einen
    anderen Typ hat als die Variable links. Casts zählen nicht, aber die Zuweisung nach einem Cast kann trotzdem eine
    Umwandlung sein, etwa `double d = (int) x;`.
  kernpunkte:
    - Rechnung und Zuweisung getrennt
    - Casts zählen nicht
    - Zuweisung nach Cast prüfen
- id: qz-karte-verkettung
  frage: Warum gibt `System.out.println(1 + 2 + "x" + 1 + 2)` den Text 3x12 aus?
  antwort: |
    Java wertet `+` von links nach rechts aus und entscheidet bei jedem Plus neu. `1 + 2` sind zwei Zahlen, also 3.
    Dann steht links eine Zahl und rechts ein String, also wird verkettet: "3x". Ab jetzt steht links immer ein String,
    und die 1 und die 2 werden nur noch angehängt.
  kernpunkte:
    - von links nach rechts
    - Zahl plus Zahl wird gerechnet
    - ab dem ersten String wird verkettet
- id: qz-karte-aufrufsequenz
  frage: In welcher Reihenfolge erscheinen die Ausgaben bei einem verschachtelten Aufruf wie k(k(3) + 1)?
  antwort: |
    Bevor eine Methode läuft, werden ihre Argumente berechnet, und zwar von links nach rechts. Darum läuft der innere
    Aufruf `k(3)` zuerst und gibt als Erster aus. Sein Ergebnis plus 1 wird dann an den äußeren Aufruf übergeben, der
    danach ausgibt. Ich notiere mir für jeden Aufruf Ausgabe und Rückgabe in einer Tabelle.
  kernpunkte:
    - Argumente zuerst
    - innere Ausgabe erscheint zuerst
    - Tabelle Aufruf, Ausgabe, Rückgabe
- id: qz-karte-vorbedingung-reicht
  frage: Wie prüfst du, ob eine Vorbedingung eine Exception sicher ausschließt?
  antwort: |
    Ich suche die Gefahrenstelle im Code, etwa eine Division durch einen Ausdruck. Dann bestimme ich, für welche Werte
    sie zuschlägt, zum Beispiel wenn `b - a` gleich 0 ist. Jede angebotene Vorbedingung prüfe ich mit genau so einem
    Wertepaar. Lässt sie es zu, reicht sie nicht, auch wenn sie vernünftig klingt.
  kernpunkte:
    - Gefahrenstelle finden
    - kritischen Wert bestimmen
    - jede Option mit diesem Wert prüfen
- id: qz-karte-rekursion-beurteilen
  frage: Wie prüfst du schnell, ob eine rekursive Implementierung für jede erlaubte Eingabe richtig ist und terminiert?
  antwort: |
    In drei Schritten. Erstens den Basisfall mit dem kleinsten erlaubten Wert prüfen, bei Strings meist der leere
    String. Zweitens den Fortschritt prüfen: Wird der Aufruf in jedem Schritt kleiner, etwa `substring(1)` statt
    `substring(0)`? Drittens ein kleines Beispiel mit zwei Zeichen ausrechnen. Das deckt Typfehler wie `char + char` auf.
    Die Grundlagen dazu stehen in [11.5 Rekursionen beurteilen: Ergebnis und Terminierung](/lernen/ep1/rekursion-vertieft/rekursionen-beurteilen-ergebnis-und-terminierung).
  kernpunkte:
    - Basisfall mit kleinstem Wert
    - Fortschritt
    - kleines Beispiel gegen Typfehler
- id: qz-karte-kapazitaet
  frage: Wie viele Werte fasst new long[3][4][2], und warum?
  antwort: |
    24. Das Array hat 3 Teile, jeder Teil hat 4 Zeilen, jede Zeile hat 2 Werte. Die Längen werden multipliziert:
    3 · 4 · 2 = 24. Addieren wäre falsch, denn jede Ebene enthält die nächste vollständig. Das gilt für rechteckige
    Arrays, die mit allen Längen auf einmal angelegt werden. Mehr dazu steht in
    [14.4 Deklaration und Kapazität mehrdimensionaler Arrays](/lernen/ep1/arrays-2d/deklaration-und-kapazitaet-mehrdimensionaler-arrays).
  kernpunkte:
    - Längen multiplizieren
    - verschachtelte Ebenen
    - gilt für rechteckige Arrays
- id: qz-karte-o-schranke
  frage: Wie bestimmst du die kleinste obere Schranke einer Doppelschleife?
  antwort: |
    Ich bestimme für jede Schleife, wie oft sie läuft. Dabei achte ich auf den Schritt: `j++` bis `n` sind etwa n
    Durchläufe, `j *= 2` bis `n` etwa log n, `j += n / 2` höchstens drei. Bei verschachtelten Schleifen multipliziere
    ich, bei Schleifen hintereinander addiere ich. Konstante Faktoren und kleinere Summanden lasse ich weg und wähle die
    engste Klasse.
  kernpunkte:
    - Durchläufe je Schleife, Schritt beachten
    - verschachtelt multiplizieren, hintereinander addieren
    - Konstanten weglassen, engste Klasse
- id: qz-karte-sortier-durchlauf
  frage: Woran erkennst du, ob eine Belegung nach einem Durchlauf von Bubble Sort, Selection Sort oder Insertion Sort entstehen kann?
  antwort: |
    Jedes Verfahren hinterlässt nach einem Durchlauf ein Merkmal. Bei Bubble Sort steht das größte Element ganz rechts.
    Bei Selection Sort steht das kleinste ganz links, und sonst hat sich nur die Stelle geändert, von der es kam. Bei
    Insertion Sort sind nur die ersten zwei Elemente sortiert, der Rest ist unverändert. Fehlt das Merkmal, kann die
    Belegung nicht entstehen.
  kernpunkte:
    - Bubble Sort, Größtes rechts
    - Selection Sort, Kleinstes links mit einem Tausch
    - Insertion Sort, nur der Anfang sortiert
- id: qz-karte-stabil
  frage: Was heißt stabil, und warum ist Bubble Sort mit >= nicht stabil?
  antwort: |
    Ein Sortierverfahren ist stabil, wenn gleiche Werte nach dem Sortieren in derselben Reihenfolge stehen wie vorher.
    Bubble Sort tauscht mit `>` nur, wenn das linke Element echt größer ist. Gleiche Nachbarn bleiben also stehen. Mit
    `>=` werden auch gleiche Nachbarn getauscht, und von zwei gleichen Werten wandert der linke nach rechts. Sortiert
    ist das Ergebnis trotzdem, aber nicht mehr stabil.
  kernpunkte:
    - Reihenfolge gleicher Werte bleibt
    - mit > kein Tausch gleicher Nachbarn
    - mit >= sortiert, aber instabil
- id: qz-karte-lueckentext
  frage: Wie gehst du an eine Lücke in einem Java-Code heran?
  antwort: |
    Ich bestimme zuerst, was für ein Ding in die Lücke gehört: ein Typ, ein Operator, ein Ausdruck oder eine Anweisung.
    Ich achte darauf, ob Strichpunkt und Klammern schon da sind. Dann bestimme ich den nötigen Typ, etwa `boolean` in
    einer Bedingung, und den Zweck, etwa Startwert oder Grenze. Zum Schluss mache ich die Probe mit einem kleinen
    Beispiel und einem Randfall.
  kernpunkte:
    - Art der Lücke und Umgebung
    - Typ und Zweck
    - Probe mit Randfall
```
