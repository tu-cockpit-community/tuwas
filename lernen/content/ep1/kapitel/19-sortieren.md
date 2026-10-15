---
nummer: 19
titel: Sortieren
kurz: Bubblesort, Selectionsort und Insertionsort von Hand ausführen und programmieren, Zwischenzustände erkennen, Stabilität prüfen und veränderten Sortiercode beurteilen, genau wie die Quizfragen zum Sortieren es verlangen.
teil: algorithmen
stunden: 5
pruefungsgewicht: 3
voraussetzungen: [schleifen, methoden, arrays]
lernziele:
  - erklären, wann ein Array aufsteigend sortiert ist, zwei Elemente mit einer Hilfsvariable vertauschen und eine Methode schreiben, die prüft, ob ein Array sortiert ist
  - Bubblesort in der Fassung der Vorlesung und in der Fassung mit vorzeitigem Abbruch von Hand ausführen, das Array nach jedem Durchlauf angeben und den Code schreiben
  - Selectionsort von Hand ausführen, den Index des Minimums in jedem Durchlauf angeben und den Code schreiben
  - Insertionsort von Hand ausführen, das Einfügen eines Elements Schritt für Schritt verfolgen und den Code schreiben
  - für eine Ausgangsbelegung entscheiden, ob eine gegebene Belegung nach einem Durchlauf der inneren Schleife von Bubble-, Selection- oder Insertionsort auftreten kann
  - Stabilität erklären, an Daten mit gleichen Schlüsseln prüfen und begründen, welches der drei Verfahren stabil ist
  - für eine Änderung im Sortiercode beurteilen, ob der Algorithmus noch terminiert, jedes Array aufsteigend sortiert und stabil bleibt
  - Vergleiche und Vertauschungen zählen, besten und schlechtesten Fall mit O-Schranke angeben und ein Verfahren mit Schleifenpaar mit einem Verfahren auf sortierter Kopie vergleichen
---

**Worum geht es?** Sortieren heißt: Werte in eine Reihenfolge bringen, meistens vom kleinsten zum größten. Du
kennst das aus dem Alltag. Eine Klassenliste steht nach Nachnamen geordnet, ein Kartenspiel auf der Hand nach
Farbe und Wert, eine Rangliste nach Punkten. Für einen Menschen ist das bei zehn Dingen leicht. Ein Computer
braucht dafür aber eine genaue Vorschrift, die nur aus einfachen Schritten besteht: zwei Werte vergleichen und
zwei Werte vertauschen.

Eine solche Vorschrift heißt **Algorithmus**. Das ist eine endliche Folge von eindeutigen Schritten, die eine
Aufgabe löst. Ein Algorithmus zum Sortieren heißt **Sortierverfahren** oder Sortieralgorithmus. In diesem Kapitel
lernst du die drei einfachen Verfahren aus der EP1-Vorlesung kennen:

- **Bubblesort** vertauscht immer wieder benachbarte Werte, die falsch herum stehen.
- **Selectionsort** sucht immer wieder den kleinsten Wert und holt ihn nach vorne.
- **Insertionsort** fügt einen Wert nach dem anderen an der richtigen Stelle ein, wie Spielkarten auf der Hand.

Alle drei arbeiten mit zwei verschachtelten Schleifen auf einem Array. Du brauchst also vor allem die Schleifen
aus [Kapitel 4 Schleifen auf Zahlen und Strings](/lernen/ep1/schleifen) und die Arrays aus
[Kapitel 12 Arrays und Referenzen](/lernen/ep1/arrays). Neu ist vor allem eine Fähigkeit: Du musst einen Algorithmus so
genau im Kopf ausführen können, dass du jeden Zwischenstand des Arrays kennst.

**Was kommt in der Prüfung?** Sortieren ist in EP1 vor allem Stoff für das **Quiz**.

- **Zwischenzustände:** Die Angabe zeigt den Code eines Verfahrens, eine Ausgangsbelegung und eine zweite Belegung.
  Du entscheidest, ob die zweite Belegung nach irgendeinem Durchlauf der inneren Schleife auftreten kann. Das übst
  du in [19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen).
- **Veränderter Code:** Eine Zeile im Sortiercode wird geändert. Du beurteilst, ob der Algorithmus noch endet,
  noch richtig sortiert und noch stabil ist. (Stabil heißt grob: Gleiche Werte behalten ihre Reihenfolge. Genau
  erklärt wird das in [19.6 Stabilität: gleiche Schlüssel behalten ihre Reihenfolge](/lernen/ep1/sortieren/stabilitaet-gleiche-schluessel-behalten-ihre-reihenfolge).) Das übst du in
  [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).
- **Laufzeit und Seiteneffekt:** Zwei Lösungen derselben Aufgabe werden verglichen, eine mit zwei Schleifen und eine,
  die eine Kopie sortiert. Gefragt wird nach Laufzeit, Speicher und danach, ob das Original verändert wird. Das
  übst du in [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren).
- **Aufgabenblätter und Feedbackgespräch:** Ein älteres Blatt verlangte, eine Methode umzuschreiben, die die Zeichen
  eines Strings mit Bubblesort sortiert. Im Feedbackgespräch erklärst du deinen Code
  ([Kapitel 22 Das Feedbackgespräch: Zusatzfragen, Variationen und Code erklären](/lernen/ep1/feedbackgespraech)). Eine mögliche Zusatzfrage wäre, warum ein
  Verfahren stabil ist.

Die bisherigen Quiz hießen **TUWEL-Tests**. TUWEL ist die Lernplattform der TU Wien, auf der diese Tests stattfanden.
In den vorliegenden zweiten TUWEL-Tests der Wintersemester 2021/22 und 2022/23 betrafen eine bis drei der zehn Fragen
diesen Stoff. Wie die vier Quiz im Wintersemester 2026 genau aussehen, ist noch nicht veröffentlicht. Die Aufgaben
hier folgen dem Format der bisherigen Tests.

**Wozu brauchst du das später?** Viele Aufgaben werden auf sortierten Daten viel einfacher. Gleiche Werte stehen dann
nebeneinander, und das kleinste Element steht vorne. Die schnelle binäre Suche aus
[18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren)
funktioniert sogar nur auf sortierten Arrays. Wie man die Laufzeit eines Verfahrens allgemein abschätzt, behandelt
[Kapitel 17 Algorithmen und Komplexität](/lernen/ep1/komplexitaet). Was du davon hier brauchst, erklärt dieses Kapitel selbst.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Verschachtelte Schleifen** aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen). Jedes
  Sortierverfahren hier besteht aus einer äußeren und einer inneren Schleife.
- **Arrays, Index und Länge** aus [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
- **Das Minimum suchen** aus [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen).
- **Arrays als Parameter** aus [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
  Eine Sortiermethode verändert das Array des Aufrufers.
- **Zwei Werte tauschen** aus [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern).
- **Kurzschlussauswertung von `&&`** aus [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht
klappt, wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: so-ein-verschachtelt
titel: Wie oft läuft die innere Schleife?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: ausgabe
    code: |
      int z = 0;
      for (int i = 0; i < 4; i++) {
          for (int j = 0; j < 4 - i - 1; j++) {
              z++;
          }
      }
      System.out.println(z);
    loesung: |
      6
    fehler:
      - wert: "10"
        meldung: 'Die innere Grenze ist `4 - i - 1`, nicht `4 - i`. Bei `i = 0` läuft die innere Schleife also nur für `j = 0, 1, 2`, das sind 3 Durchläufe.'
      - wert: "16"
        meldung: Die innere Grenze hängt von `i` ab. Mit jedem Durchlauf der äußeren Schleife läuft die innere einmal weniger.
hinweise:
  - Schreib für jedes `i` von 0 bis 3 auf, bis wohin `j` läuft, und zähle die Durchläufe.
loesung: |
  Bei `i = 0` ist die Grenze `4 - 0 - 1 = 3`, also läuft `j` von 0 bis 2: drei Durchläufe. Bei `i = 1` sind es zwei, bei `i = 2` einer, bei `i = 3` keiner.
  ---
  Zusammen: `3 + 2 + 1 + 0 = 6`. Ausgegeben wird `6`.
```

```aufgabe
id: so-ein-letzter-index
titel: Das letzte Element eines Arrays
niveau: 1
art: check
angabe: |
  Gegeben ist `int[] a = {4, 7, 1};`. Welcher Ausdruck liefert das letzte Element, also die 1?
  (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: auswahl
    optionen: ['`a[a.length - 1]`', '`a[a.length]`', '`a[3]`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`a.length` ist 3, und der Index 3 gibt es nicht. Die Indizes laufen von 0 bis 2. Dieser Zugriff wirft eine `ArrayIndexOutOfBoundsException`.'
      - wert: 2
        meldung: Der Index 3 ist eine Stelle hinter dem letzten Element. Gezählt wird ab 0, der letzte Index ist 2.
loesung: |
  Das Array hat die Länge 3. Die erlaubten Indizes sind 0, 1 und 2.
  ---
  Der letzte Index ist immer `a.length - 1`, hier 2. Dort steht die 1.
```

```aufgabe
id: so-ein-tausch
titel: Zwei Werte tauschen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: der Tausch mit einer Hilfsvariable in
  [13.3 Ein neues Array füllen oder das Array verändern](/lernen/ep1/rekursion-arrays/ein-neues-array-fuellen-oder-das-array-veraendern))
teile:
  - typ: ausgabe
    code: |
      int[] a = {8, 3, 5};
      int merk = a[0];
      a[0] = a[2];
      a[2] = merk;
      System.out.println(Arrays.toString(a));
    loesung: |
      [5, 3, 8]
    fehler:
      - wert: "[5, 3, 5]"
        meldung: 'Die Variable `merk` hat den alten Wert von `a[0]` gerettet, bevor er überschrieben wurde. In der letzten Zeile kommt diese 8 nach `a[2]`.'
      - wert: "[8, 3, 5]"
        meldung: Die Zuweisungen verändern das Array wirklich. Nach dem Tausch stehen die Werte von Index 0 und Index 2 vertauscht.
hinweise:
  - Verfolge Zeile für Zeile, welcher Wert in `merk`, `a[0]` und `a[2]` steht.
loesung: |
  `merk` bekommt 8. Dann wird `a[0]` mit dem Wert von `a[2]` überschrieben, also mit 5. Das Array ist jetzt `[5, 3, 5]`.
  ---
  Zuletzt bekommt `a[2]` den gemerkten Wert 8. Ergebnis: `[5, 3, 8]`.
```

```aufgabe
id: so-ein-minimum
titel: Wo steht das Minimum?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen))
teile:
  - typ: ausgabe
    code: |
      int[] a = {7, 4, 9, 4, 6};
      int m = 0;
      for (int i = 1; i < a.length; i++) {
          if (a[i] < a[m]) {
              m = i;
          }
      }
      System.out.println(m + " " + a[m]);
    loesung: |
      1 4
    fehler:
      - wert: "3 4"
        meldung: 'Die Bedingung ist `a[i] < a[m]`, also „echt kleiner“. Bei `i = 3` ist `4 < 4` falsch. `m` bleibt beim **ersten** Vorkommen der 4.'
      - wert: "0 7"
        meldung: Schon bei `i = 1` ist `4 < 7` wahr. Dann wird `m` zu 1.
hinweise:
  - '`m` merkt sich den Index des bisher kleinsten Werts. Prüfe für jedes `i`, ob `a[i]` echt kleiner ist als `a[m]`.'
loesung: |
  Start `m = 0` mit dem Wert 7. Bei `i = 1` ist `4 < 7`, also `m = 1`. Bei `i = 2` ist `9 < 4` falsch.
  ---
  Bei `i = 3` ist `4 < 4` falsch, `m` bleibt 1. Bei `i = 4` ist `6 < 4` falsch. Ausgabe: `1 4`.
```

```aufgabe
id: so-ein-void
titel: Sieht der Aufrufer die Änderung?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      public class Test {
          public static void setzeNull(int[] a) {
              a[0] = 0;
          }

          public static void main(String[] args) {
              int[] z = {5, 6};
              setzeNull(z);
              System.out.println(z[0] + " " + z[1]);
          }
      }
    loesung: |
      0 6
    fehler:
      - wert: "5 6"
        meldung: 'Beim Aufruf wird die **Referenz** auf das Array kopiert, nicht das Array selbst. `a` und `z` zeigen auf dasselbe Array. Die Änderung über `a` sieht man auch über `z`.'
hinweise:
  - Eine Array-Variable enthält nur einen Verweis auf das Array. Wohin zeigen `a` und `z`?
loesung: |
  `setzeNull(z)` kopiert den Verweis aus `z` in den Parameter `a`. Beide zeigen auf dasselbe Array `{5, 6}`.
  ---
  `a[0] = 0` ändert dieses eine Array. Zurück in `main` liest `z[0]` deshalb 0. Ausgabe: `0 6`.
```

```aufgabe
id: so-ein-kurzschluss
titel: Zuerst die Grenze prüfen
niveau: 1
art: check
angabe: |
  Gegeben sind `int[] a = {3, 1};` und `int j = 0;`. Was passiert bei der Auswertung von
  `j > 0 && a[j - 1] > a[j]`? (Wiederholung: [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: auswahl
    optionen: ['Der Ausdruck hat den Wert `false`, und es gibt keine Exception.', 'Es gibt eine `ArrayIndexOutOfBoundsException`, weil `a[-1]` gelesen wird.', 'Der Ausdruck hat den Wert `true`.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`&&` wertet **von links nach rechts** aus und hört auf, sobald das Ergebnis feststeht. `j > 0` ist schon `false`, also wird `a[j - 1]` gar nicht mehr gelesen.'
      - wert: 2
        meldung: '`j > 0` ist für `j = 0` falsch. Eine UND-Verknüpfung mit einem falschen Teil ist immer falsch.'
loesung: |
  `j > 0` ist `0 > 0`, also `false`. Damit steht fest, dass die ganze UND-Verknüpfung `false` ist.
  ---
  Java wertet den rechten Teil deshalb nicht mehr aus. Man nennt das **Kurzschlussauswertung**. Der unerlaubte Zugriff `a[-1]` findet nie statt.
```

## Was heißt sortieren? Vertauschen und prüfen

```aufgabe
id: so-gr-check-nachbarn
titel: Ein Nachbarpaar vergleichen
niveau: 1
art: check
angabe: |
  Gegeben ist `int[] a = {1, 5, 9, 3};` und `int i = 2;`. Welchen Wert hat der Ausdruck `a[i] > a[i + 1]`?
  (Wiederholung: Indizes ab 0 in [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: auswahl
    optionen: ['`true`', '`false`', 'Es gibt eine `ArrayIndexOutOfBoundsException`.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`a[2]` ist das **dritte** Element, also 9, und `a[3]` ist 3. Ist 9 größer als 3?'
      - wert: 2
        meldung: Das Array hat die Länge 4, die Indizes 0 bis 3 sind erlaubt. `a[i + 1]` ist `a[3]`, das gibt es.
loesung: |
  `a[2]` ist 9, `a[3]` ist 3. Beide Indizes liegen im erlaubten Bereich 0 bis 3.
  ---
  `9 > 3` ist wahr. Der Ausdruck hat den Wert `true`: Dieses Nachbarpaar steht „falsch herum“.
```

Bevor wir ein Verfahren programmieren, klären wir genau, was das Ziel ist. Wann ist ein Array „sortiert“?
Umgangssprachlich: wenn die Werte von links nach rechts nicht kleiner werden. Diese Idee machen wir jetzt
genau.

:::definition[Aufsteigend sortiert]
Ein Array `a` heißt **aufsteigend sortiert**, wenn jedes Element höchstens so groß ist wie sein rechter Nachbar.
In Java-Schreibweise: Für jeden Index `i` von 0 bis `a.length - 2` gilt `a[i] <= a[i + 1]`.

**Absteigend sortiert** heißt entsprechend: Für jeden solchen Index gilt `a[i] >= a[i + 1]`.
:::

Drei Dinge an dieser Definition sind wichtig.

1. **Gleiche Werte sind erlaubt.** Die Bedingung lautet `<=`, also „kleiner oder gleich“. Das Array `{2, 5, 5, 8}`
   ist aufsteigend sortiert, obwohl die 5 zweimal vorkommt.
2. **Verglichen werden nur Nachbarn.** Der letzte Index, für den man vergleicht, ist `a.length - 2`. Sein rechter
   Nachbar ist `a.length - 1`, das letzte Element. Für `i = a.length - 1` gäbe es keinen rechten Nachbarn mehr.
3. **Kurze Arrays sind immer sortiert.** Ein Array mit einem Element oder ganz ohne Element hat kein Nachbarpaar.
   Es gibt also nichts, was die Bedingung verletzen könnte.

**Beispiel:** `{-3, 0, 0, 7}` ist aufsteigend sortiert. Alle drei Nachbarpaare erfüllen `<=`.

**Nicht-Beispiel:** `{1, 4, 2, 9}` ist **nicht** aufsteigend sortiert. Das Paar an den Indizes 1 und 2 verletzt die
Bedingung, denn `4 <= 2` ist falsch. Ein einziges falsches Paar genügt.

:::beispiel[Sortiert oder nicht? Paar für Paar prüfen]
Wir prüfen das Array `{3, 6, 6, 2, 8}`. Es hat die Länge 5, also gibt es die Nachbarpaare mit `i = 0` bis
`i = 5 - 2 = 3`.

|`i`|Paar `a[i]`, `a[i+1]`|`a[i] <= a[i+1]`?|
|---|---|---|
|0|3, 6|ja|
|1|6, 6|ja, gleich ist erlaubt|
|2|6, 2|**nein**|
|3|2, 8|ja|

Beim Paar mit `i = 2` ist die Bedingung verletzt. Das Array ist also nicht aufsteigend sortiert. Ab dieser Stelle
müssten wir eigentlich gar nicht mehr weiterprüfen, denn das Urteil steht schon fest.
:::

```aufgabe
id: so-gr-sortiert-rf
titel: Sortiert oder nicht?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`{3, 3, 8}` ist aufsteigend sortiert.'
        richtig: true
        erklaerung: 'Beide Paare erfüllen `<=`: `3 <= 3` und `3 <= 8`. Gleiche Werte sind erlaubt.'
      - text: '`{-1, -4, 6}` ist aufsteigend sortiert.'
        richtig: false
        erklaerung: '-4 ist kleiner als -1. Das erste Paar verletzt also `a[0] <= a[1]`.'
      - text: Ein Array mit genau einem Element ist aufsteigend sortiert.
        richtig: true
        erklaerung: Es gibt kein Nachbarpaar, also auch keines, das die Bedingung verletzt.
      - text: '`{9, 7, 7, 2}` ist absteigend sortiert.'
        richtig: true
        erklaerung: 'Für jedes Paar gilt `>=`: `9 >= 7`, `7 >= 7` und `7 >= 2`.'
    fehler:
      - wert: [f, r, r, r]
        meldung: 'Gleiche Nachbarn verletzen „aufsteigend sortiert“ nicht. Die Bedingung lautet `<=`, nicht `<`.'
      - wert: [r, r, r, r]
        meldung: 'Bei negativen Zahlen genau hinschauen: -4 liegt auf dem Zahlenstrahl **links** von -1, ist also kleiner.'
hinweise:
  - Prüfe jedes Nachbarpaar einzeln. Bei „aufsteigend“ muss `a[i] <= a[i + 1]` gelten, bei „absteigend“ `a[i] >= a[i + 1]`.
loesung: |
  **Ansatz:** Für jedes Array alle Nachbarpaare mit der passenden Bedingung prüfen.
  ---
  `{3, 3, 8}`: richtig. `{-1, -4, 6}`: falsch, weil -1 größer als -4 ist. Ein einzelnes Element: richtig, es gibt nichts zu vergleichen.
  ---
  `{9, 7, 7, 2}`: Jeder Wert ist mindestens so groß wie sein rechter Nachbar, also absteigend sortiert. Richtig.
```

### Sortieren heißt: im Array selbst umordnen

Die Sortierverfahren der Vorlesung legen **kein neues Array** an. Sie ordnen die Werte im übergebenen Array selbst
um. Man sagt dazu **in-place** (englisch: an Ort und Stelle). Die Methode hat deshalb den Rückgabetyp `void`, also
„gibt nichts zurück“:

```java
private static void bubbleSort(int[] data) { ... }
```

Wie kann eine Methode ohne Rückgabe etwas bewirken? Beim Aufruf wird nur die **Referenz** kopiert, also der
Verweis auf das Array. Der Parameter `data` zeigt deshalb auf dasselbe Array wie die Variable des Aufrufers. Jede
Änderung an `data[i]` ist eine Änderung an genau diesem Array. Das hast du in
[12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert) gesehen.

Das Wort `private` vor `static` heißt: Nur Code in derselben Klasse darf die Methode aufrufen. Für unsere Zwecke
verhält sich `private static` genau wie `public static`.

Alle drei Verfahren bauen auf einem einzigen Werkzeug auf: Zwei Plätze des Arrays tauschen ihre Werte. Die
Vorlesung schreibt dafür eine kleine Hilfsmethode `exchange` (englisch: austauschen).

:::beispiel[Die Hilfsmethode exchange Zeile für Zeile]
```java
private static void exchange(int[] a, int i, int j) {
    int swap = a[i];
    a[i] = a[j];
    a[j] = swap;
}
```

- Zeile 1: Die Methode bekommt das Array `a` und zwei Indizes `i` und `j`. Sie gibt nichts zurück (`void`).
- Zeile 2: Die Hilfsvariable `swap` (englisch: Tausch) rettet den Wert von `a[i]`. Ohne sie ginge er in der
  nächsten Zeile verloren.
- Zeile 3: `a[i]` bekommt den Wert von `a[j]`. Jetzt steht dieser Wert zweimal im Array.
- Zeile 4: `a[j]` bekommt den geretteten alten Wert von `a[i]`.

Wir verfolgen den Aufruf `exchange(a, 1, 3)` für `a = {4, 9, 2, 6}`:

|nach Zeile|`swap`|`a`|
|---|---|---|
|2|9|`{4,9,2,6}`|
|3|9|`{4,6,2,6}`|
|4|9|`{4,6,2,9}`|

Die Werte an den Indizes 1 und 3 haben die Plätze getauscht. Das nennt man auch **Dreieckstausch**: Der Wert
wandert über die Hilfsvariable wie über die dritte Ecke eines Dreiecks. Ist `i` gleich `j`, ändert sich nichts.
:::

:::achtung[Tauschen ohne Hilfsvariable]
Ein häufiger Versuch, `a[0]` und `a[1]` in `a = {5, 1}` zu tauschen:

```java
a[0] = a[1];   // a ist jetzt {1, 1}
a[1] = a[0];   // a bleibt {1, 1}
```

Die erste Zeile überschreibt die 5. Danach gibt es sie nirgends mehr, und die zweite Zeile kopiert nur die 1
zurück. Ergebnis `{1, 1}` statt `{1, 5}`. Ein Tausch braucht immer eine Hilfsvariable, die den ersten Wert rettet,
bevor er überschrieben wird.
:::

:::achtung[Werte statt Array übergeben]
Diese Methode sieht aus wie ein Tausch, bewirkt aber nichts:

```java
private static void tausche(int x, int y) {
    int merk = x;
    x = y;
    y = merk;
}
```

Der Aufruf `tausche(a[0], a[1])` übergibt nur die **Werte** von `a[0]` und `a[1]`. Die Parameter `x` und `y` sind
eigene Variablen mit Kopien dieser Werte. Die Methode tauscht diese Kopien, das Array bleibt unverändert. Darum
bekommt `exchange` das Array und die beiden **Indizes**.
:::

```aufgabe
id: so-gr-tausch-ausgabe
titel: Zweimal tauschen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Tausch {
          private static void exchange(int[] a, int i, int j) {
              int swap = a[i];
              a[i] = a[j];
              a[j] = swap;
          }

          public static void main(String[] args) {
              int[] d = {4, 9, 1, 7};
              exchange(d, 0, 2);
              exchange(d, 1, 3);
              System.out.println(Arrays.toString(d));
              exchange(d, 2, 2);
              System.out.println(Arrays.toString(d));
          }
      }
    loesung: |
      [1, 7, 4, 9]
      [1, 7, 4, 9]
    fehler:
      - wert: "[4, 9, 1, 7]\n[4, 9, 1, 7]"
        meldung: '`exchange` bekommt die Referenz auf das Array `d`. Die Änderungen in der Methode treffen genau dieses Array.'
      - wert: "[1, 9, 4, 7]\n[1, 9, 4, 7]"
        meldung: Es gibt zwei Aufrufe vor der ersten Ausgabe. Nach dem Tausch von Index 0 und 2 folgt noch der Tausch von Index 1 und 3.
hinweise:
  - Schreib nach jedem Aufruf das ganze Array auf. `exchange(d, i, j)` vertauscht die Werte an den Indizes `i` und `j`.
loesung: |
  **Ansatz:** Aufruf für Aufruf das Array mitschreiben.
  ---
  `exchange(d, 0, 2)` tauscht 4 und 1: `[1, 9, 4, 7]`. `exchange(d, 1, 3)` tauscht 9 und 7: `[1, 7, 4, 9]`. Das ist die erste Ausgabe.
  ---
  `exchange(d, 2, 2)` tauscht einen Platz mit sich selbst. `swap` merkt sich 4, `d[2]` bekommt 4, und `d[2]` bekommt wieder 4. Nichts ändert sich, die zweite Ausgabe ist gleich.
```

```aufgabe
id: so-gr-tausch-ohne-merk
titel: Ein Tausch ohne Hilfsvariable
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Jemand will die Werte an den Indizes 0 und 2 tauschen und schreibt dafür zwei Zeilen. Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] a = {6, 2, 8};
      a[0] = a[2];
      a[2] = a[0];
      System.out.println(Arrays.toString(a));
    loesung: |
      [8, 2, 8]
    fehler:
      - wert: "[8, 2, 6]"
        meldung: 'So sähe ein richtiger Tausch aus. Aber nach der ersten Zeile ist die 6 überschrieben. Welcher Wert steht in `a[0]`, wenn die zweite Zeile ausgeführt wird?'
      - wert: "[6, 2, 6]"
        meldung: Die Zeilen laufen von oben nach unten. Zuerst bekommt `a[0]` den Wert von `a[2]`, erst danach umgekehrt.
hinweise:
  - Führe die Zeilen nacheinander aus und schreib nach jeder Zeile das ganze Array auf.
loesung: |
  **Ansatz:** Zeile für Zeile verfolgen, ohne an das Ziel „Tausch“ zu denken.
  ---
  `a[0] = a[2]` setzt `a[0]` auf 8. Das Array ist `[8, 2, 8]`. Die 6 ist verloren.
  ---
  `a[2] = a[0]` kopiert die 8 nach `a[2]`. Es bleibt `[8, 2, 8]`. Ein Tausch braucht eine Hilfsvariable.
```

```aufgabe
id: so-gr-exchange-luecke
titel: exchange vervollständigen
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Fülle die Lücken so, dass `exchange` die Werte an den Indizes `i` und `j` vertauscht.
teile:
  - typ: lueckentext
    code: |
      public class Hilfe {
          private static void exchange(int[] a, int i, int j) {
              int swap = ___;
              a[i] = ___;
              a[j] = ___;
          }
      }
    luecken: [["a[i]"], ["a[j]"], ["swap"]]
    fehler:
      - wert: ["a[i]", "a[j]", "a[i]"]
        meldung: 'In der letzten Zeile steht in `a[i]` schon der neue Wert. Der alte Wert von `a[i]` steckt nur noch in `swap`.'
      - wert: ["a[j]", "a[i]", "swap"]
        meldung: 'Wenn `swap` den Wert von `a[j]` rettet, muss zuerst `a[j]` überschrieben werden, nicht `a[i]`. So geht der Wert von `a[i]` verloren.'
hinweise:
  - Rette zuerst den Wert, den die nächste Zeile überschreibt.
loesung: |
  **Ansatz:** Dreieckstausch. Erst retten, dann überschreiben, dann den geretteten Wert einsetzen.
  ---
  `int swap = a[i];` rettet den Wert von `a[i]`. `a[i] = a[j];` überschreibt ihn. `a[j] = swap;` setzt den alten Wert von `a[i]` an die Stelle `j`.
```

### Prüfen, ob ein Array sortiert ist

Bevor wir sortieren, schreiben wir eine Methode, die nur **prüft**, ob ein Array aufsteigend sortiert ist. Sie ist
nützlich, um Sortiercode zu testen. Außerdem übt sie genau die Schleifengrenzen, die gleich in jedem Verfahren
wiederkommen.

:::beispiel[Die Methode istSortiert Schritt für Schritt]
```java
public static boolean istSortiert(int[] a) {
    for (int i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
```

- Zeile 1: Der Rückgabetyp `boolean` heißt: Die Methode liefert `true` (wahr) oder `false` (falsch).
- Zeile 2: `i` läuft von 0 bis `a.length - 2`. Die Bedingung `i < a.length - 1` hört genau vor dem letzten Index
  auf, weil das letzte Element keinen rechten Nachbarn hat.
- Zeile 3: Steht ein Paar falsch herum, also ist der linke Wert **größer** als der rechte?
- Zeile 4: Dann steht das Ergebnis fest, und die Methode endet sofort mit `false`.
- Zeile 7: Hierher kommt man nur, wenn kein Paar falsch herum stand. Erst jetzt ist sicher: Das Array ist sortiert.

Aufruf mit `{2, 5, 5, 3}`: Bei `i = 0` ist `2 > 5` falsch, bei `i = 1` ist `5 > 5` falsch. Bei `i = 2` ist `5 > 3`
wahr, die Methode liefert `false`. Mit `{4}` ist die Bedingung `0 < 0` sofort falsch. Die Schleife läuft keinmal,
und die Methode liefert `true`.
:::

:::merke[So prüfst du „sortiert“]
1. Schleife über die Nachbarpaare: `for (int i = 0; i < a.length - 1; i++)`.
2. Im Rumpf nur den **Fehlerfall** abfragen: `if (a[i] > a[i + 1]) return false;`.
3. `return true;` steht **hinter** der Schleife. Erst wenn alle Paare geprüft sind, steht „sortiert“ fest.
:::

```aufgabe
id: so-gr-istsortiert-ausgabe
titel: Drei Aufrufe von istSortiert
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Pruefen {
          public static boolean istSortiert(int[] a) {
              for (int i = 0; i < a.length - 1; i++) {
                  if (a[i] > a[i + 1]) {
                      return false;
                  }
              }
              return true;
          }

          public static void main(String[] args) {
              System.out.println(istSortiert(new int[]{2, 4, 4, 9}));
              System.out.println(istSortiert(new int[]{2, 4, 1, 9}));
              System.out.println(istSortiert(new int[]{}));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "true\nfalse\nfalse"
        meldung: 'Beim leeren Array ist `0 < -1` sofort falsch. Die Schleife läuft keinmal, und die Methode erreicht `return true;`.'
      - wert: "false\nfalse\ntrue"
        meldung: 'Im ersten Array ist kein Paar falsch herum. `4 > 4` ist falsch, gleiche Werte sind erlaubt.'
hinweise:
  - '`new int[]{2, 4, 4, 9}` legt ein Array mit genau diesen Werten an, ohne ihm einen Namen zu geben.'
  - Prüfe für jedes Array die Nachbarpaare der Reihe nach, bis eines falsch herum steht oder alle geprüft sind.
gefuehrt:
  - text: 'Erster Aufruf mit `{2, 4, 4, 9}`. Wie viele Nachbarpaare vergleicht die Schleife, bevor sie endet?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Länge 4, also `i = 0, 1, 2`. Kein Paar steht falsch herum, `4 > 4` ist falsch. Ergebnis `true`.'
  - text: 'Zweiter Aufruf mit `{2, 4, 1, 9}`. Bei welchem `i` endet die Methode mit `false`?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Bei `i = 1` ist `4 > 1` wahr. Das Paar mit 9 wird gar nicht mehr angeschaut.'
  - text: 'Dritter Aufruf mit dem leeren Array. Wie oft läuft der Schleifenrumpf?'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`a.length - 1` ist -1, und `0 < -1` ist falsch. Die Methode liefert `true`.'
  - text: Was gibt das Programm insgesamt aus?
    teil: { typ: ausgabe, code: "System.out.println(true);\nSystem.out.println(false);\nSystem.out.println(true);", loesung: "true\nfalse\ntrue", codeAnzeigen: false }
    erklaerung: Jede Ausgabe steht in einer eigenen Zeile, weil `println` nach dem Wert eine neue Zeile beginnt.
loesung: |
  **Ansatz:** Für jedes Array die Nachbarpaare der Reihe nach prüfen.
  ---
  `{2, 4, 4, 9}`: Kein Paar steht falsch herum, Ergebnis `true`. `{2, 4, 1, 9}`: Bei `i = 1` ist `4 > 1`, Ergebnis `false`.
  ---
  Leeres Array: Die Schleife läuft keinmal, Ergebnis `true`. Ausgabe: `true`, `false`, `true` in drei Zeilen.
```

```aufgabe
id: so-gr-istsortiert-zeilen
titel: Zwei Fehler in istSortiert
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Diese Fassung von `istSortiert` hat zwei fehlerhafte Zeilen. Die eine liefert oft zu früh ein Ergebnis. Die
  andere würde, sobald die erste repariert ist, bei jedem sortierten Array mit mindestens einem Element eine
  Exception auslösen. Markiere beide.
teile:
  - typ: zeilen
    code: |
      public static boolean istSortiert(int[] a) {
          for (int i = 0; i < a.length; i++) {
              if (a[i] > a[i + 1]) {
                  return false;
              }
              return true;
          }
          return true;
      }
    loesung: [2, 6]
    fehler:
      - wert: [2]
        meldung: 'Zeile 2 ist ein Fehler, aber nicht der einzige. Was passiert in Zeile 6, wenn das erste Paar richtig herum steht?'
      - wert: [6]
        meldung: 'Zeile 6 ist ein Fehler. Prüfe auch die Grenze in Zeile 2: Welchen Index liest `a[i + 1]` im letzten Durchlauf?'
      - wert: [8]
        meldung: '`return true;` hinter der Schleife ist richtig. Dort steht fest, dass kein Paar falsch herum war.'
hinweise:
  - Setze das Array `{1, 5, 2}` ein. Nach welchem Vergleich endet die Methode?
  - Stell dir die zu frühe Rückgabe gelöscht vor und setze `{1, 2, 3}` ein. Welchen Index liest `a[i + 1]` im letzten Durchlauf?
loesung: |
  **Ansatz:** Mit zwei kleinen Arrays durchspielen und schauen, wo es schiefgeht.
  ---
  Zeile 6: `return true;` steht **in** der Schleife. Bei `{1, 5, 2}` ist das erste Paar in Ordnung, und die Methode liefert sofort `true`. Das Paar `5, 2` wird nie geprüft.
  ---
  Zeile 2: Mit `i < a.length` läuft `i` bis zum letzten Index. Dann liest `a[i + 1]` eine Stelle hinter dem Array, es gibt eine `ArrayIndexOutOfBoundsException`. Diese Stelle erreicht man erst, wenn Zeile 6 nicht mehr vorher abbricht. Richtig ist `i < a.length - 1`.
```

```aufgabe
id: so-gr-istsortiert-code
titel: istAufsteigend schreiben
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreib die Methode `istAufsteigend(int[] a)`. Sie liefert `true`, wenn `a` aufsteigend sortiert ist, sonst
  `false`. Gleiche Nachbarn sind erlaubt. Vorbedingung: `a != null`. Das Array darf leer sein.
teile:
  - typ: code
    vorlage: |
      public class Sortiert {
          public static boolean istAufsteigend(int[] a) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Sortiert {
          public static boolean istAufsteigend(int[] a) {
              for (int i = 0; i < a.length - 1; i++) {
                  if (a[i] > a[i + 1]) {
                      return false;
                  }
              }
              return true;
          }
      }
    tests:
      - { aufruf: "istAufsteigend(new int[]{1, 2, 2, 5})", erwartet: "true" }
      - { aufruf: "istAufsteigend(new int[]{3, 1})", erwartet: "false" }
      - { aufruf: "istAufsteigend(new int[]{})", erwartet: "true", beschreibung: "leeres Array" }
      - { aufruf: "istAufsteigend(new int[]{7})", erwartet: "true", beschreibung: "ein Element" }
      - { aufruf: "istAufsteigend(new int[]{1, 2, 3, 0})", erwartet: "false", beschreibung: "Fehler im letzten Paar" }
      - { aufruf: "istAufsteigend(new int[]{5, 4, 6, 8})", erwartet: "false", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 3, meldung: "Bei einem leeren Array darf die Schleife keinmal laufen. Prüfe die Grenze `i < a.length - 1` und ob `return true;` hinter der Schleife steht." }
      - { wert: 5, meldung: "Das letzte Paar muss auch geprüft werden. Steht `return true;` vielleicht in der Schleife?" }
hinweise:
  - Die Schleife läuft über alle Nachbarpaare, also bis `a.length - 2`.
  - 'Im Rumpf fragst du nur den Fehlerfall ab: Ist `a[i]` größer als `a[i + 1]`? Das `return true;` gehört hinter die Schleife.'
loesung: |
  **Ansatz:** Ein Array ist sortiert, wenn kein Nachbarpaar falsch herum steht. Wir suchen also nach einem falschen Paar.
  ---
  ```java
  for (int i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
          return false;
      }
  }
  return true;
  ```
  ---
  Probe: `{1, 2, 3, 0}` liefert bei `i = 2` den Wert `false`. Beim leeren Array läuft die Schleife keinmal, Ergebnis `true`.
```

```aufgabe
id: so-gr-fehlstelle-code
titel: Die erste Stelle, an der es nicht passt
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreib die Methode `ersteFehlstelle(int[] a)`. Sie liefert den **kleinsten** Index `i`, für den
  `a[i] > a[i + 1]` gilt. Ist `a` aufsteigend sortiert, liefert sie `-1`.

  Beispiele: `ersteFehlstelle(new int[]{1, 4, 2, 9, 3})` liefert 1. `ersteFehlstelle(new int[]{2, 2, 6})` liefert -1.
  Vorbedingung: `a != null`.
teile:
  - typ: code
    vorlage: |
      public class Fehlstelle {
          public static int ersteFehlstelle(int[] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Fehlstelle {
          public static int ersteFehlstelle(int[] a) {
              for (int i = 0; i < a.length - 1; i++) {
                  if (a[i] > a[i + 1]) {
                      return i;
                  }
              }
              return -1;
          }
      }
    tests:
      - { aufruf: "ersteFehlstelle(new int[]{1, 4, 2, 9, 3})", erwartet: "1" }
      - { aufruf: "ersteFehlstelle(new int[]{2, 2, 6})", erwartet: "-1" }
      - { aufruf: "ersteFehlstelle(new int[]{5, 1})", erwartet: "0", beschreibung: "gleich das erste Paar" }
      - { aufruf: "ersteFehlstelle(new int[]{})", erwartet: "-1", beschreibung: "leeres Array" }
      - { aufruf: "ersteFehlstelle(new int[]{1, 2, 3, 4, 0})", erwartet: "3", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 1, meldung: "Gesucht ist der Index des **linken** Werts im ersten falschen Paar, nicht der des rechten." }
      - { wert: 4, meldung: "Beim leeren Array darf die Schleife keinmal laufen. Mit `i < a.length - 1` ist das so." }
hinweise:
  - Das Gerüst ist dasselbe wie bei `istAufsteigend`. Nur die beiden Rückgabewerte ändern sich.
  - Gib beim ersten falschen Paar sofort `i` zurück. Hinter der Schleife steht der Rückgabewert für „kein falsches Paar gefunden“.
loesung: |
  **Ansatz:** Wie beim Prüfen auf „sortiert“ laufen wir die Nachbarpaare von links ab. Statt `false` liefern wir beim ersten Fehler den Index.
  ---
  ```java
  for (int i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
          return i;
      }
  }
  return -1;
  ```
  ---
  Probe mit `{1, 4, 2, 9, 3}`: Bei `i = 0` ist `1 > 4` falsch, bei `i = 1` ist `4 > 2` wahr. Ergebnis 1. Das spätere falsche Paar `9, 3` spielt keine Rolle, weil wir den **kleinsten** Index suchen.
```

```reflexion
frage: Die Methode istSortiert vergleicht nur Nachbarn, nie etwa a[0] mit a[3]. Warum reicht das trotzdem aus, um sicher zu sein, dass das ganze Array sortiert ist?
antwort: |
  Wenn jedes Nachbarpaar stimmt, gilt eine Kette: `a[0] <= a[1]`, `a[1] <= a[2]` und `a[2] <= a[3]`. Aus
  „kleiner oder gleich“ hintereinander folgt wieder „kleiner oder gleich“. Also gilt auch `a[0] <= a[3]`, und
  genauso für jedes andere Paar weiter auseinander. Umgekehrt muss in einem unsortierten Array mindestens ein
  Nachbarpaar falsch herum stehen. Sonst würde die Kette ja gelten. Darum genügen die Nachbarvergleiche, und
  es sind nur `a.length - 1` Vergleiche nötig.
```

## Bubblesort: benachbarte Werte vertauschen

```aufgabe
id: so-bu-check-paare
titel: Welche Paare vergleicht die Schleife?
niveau: 1
art: check
angabe: |
  Ein Array hat die Länge 6. Eine Schleife `for (int j = 0; j < 6 - 1; j++)` vergleicht in jedem Durchlauf
  `data[j]` mit `data[j + 1]`. Welches Paar vergleicht sie zuletzt?
  (Wiederholung: Intervallgrenzen in [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: auswahl
    optionen: ['`data[4]` und `data[5]`', '`data[5]` und `data[6]`', '`data[3]` und `data[4]`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`j < 5` heißt: Der letzte Wert von `j` ist 4. Den Index 6 gibt es bei Länge 6 gar nicht.'
      - wert: 2
        meldung: '`j < 5` schließt `j = 4` noch ein, denn `4 < 5` ist wahr.'
loesung: |
  `j` läuft von 0 bis 4, denn bei `j = 5` ist `5 < 5` falsch.
  ---
  Im letzten Durchlauf ist `j = 4`. Verglichen werden `data[4]` und `data[5]`, das letzte Paar des Arrays.
```

Bubblesort ist das einfachste der drei Verfahren. Die Idee passt in einen Satz: Geh von links nach rechts durch
das Array und **tausche zwei Nachbarn, wenn sie falsch herum stehen**. Einen solchen Gang von links nach rechts
nennen wir einen **Durchlauf**.

Was bewirkt ein Durchlauf? Stell dir den größten Wert vor. Sobald der Durchlauf ihn erreicht, ist er größer als
sein rechter Nachbar und wird getauscht. Eine Stelle weiter ist er wieder größer als sein neuer Nachbar und wird
wieder getauscht. Er wandert also bis ganz nach rechts, wie eine Luftblase im Wasser nach oben steigt. Daher kommt
der Name: *bubble* ist das englische Wort für Blase.

Nach dem ersten Durchlauf steht also der größte Wert ganz rechts, an seinem endgültigen Platz. Der zweite
Durchlauf bringt den zweitgrößten Wert an den vorletzten Platz, und so weiter. Den rechten, schon fertigen Teil
muss man dabei nicht mehr anschauen.

:::definition[Bubblesort]
**Bubblesort** sortiert ein Array in mehreren Durchläufen. In jedem Durchlauf werden die Nachbarpaare von links
nach rechts verglichen. Ist der linke Wert eines Paars größer als der rechte, tauschen die beiden die Plätze. Nach
dem Durchlauf mit der Nummer `i` (gezählt ab 0) stehen die `i + 1` größten Werte an ihren endgültigen Plätzen am
rechten Ende.
:::

```aufgabe
id: so-bu-check-vorhersage
titel: Vorhersage für einen Durchlauf
niveau: 1
art: check
angabe: |
  Sag voraus, bevor du den Code siehst: Ein Durchlauf von Bubblesort läuft über `{4, 9, 2, 7}`. Welcher Wert
  steht danach ganz rechts?
teile:
  - typ: auswahl
    optionen: ['9', '7', '2']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die 9 ist bei jedem Vergleich ab ihrer Position der größere Wert. Sie wird also bis ans Ende weitergetauscht und überholt die 7.
      - wert: 2
        meldung: Ein Durchlauf bringt nicht den kleinsten, sondern den größten Wert ans rechte Ende.
loesung: |
  4 und 9 bleiben. 9 und 2 tauschen: `{4, 2, 9, 7}`. 9 und 7 tauschen: `{4, 2, 7, 9}`.
  ---
  Ganz rechts steht die 9, der größte Wert. Genau das garantiert ein Durchlauf von Bubblesort.
```

So steht Bubblesort in den Folien der Vorlesung. Die Methode `exchange` kennst du aus
[19.1 Was heißt sortieren? Vertauschen und prüfen](/lernen/ep1/sortieren/was-heisst-sortieren-vertauschen-und-pruefen).

```java
private static void bubbleSort(int[] data) {
    for (int i = 0; i < data.length - 1; i++) {
        for (int j = 0; j < data.length - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                exchange(data, j, j + 1);
            }
        }
    }
}
```

- **Zeile 2, die äußere Schleife:** `i` zählt die Durchläufe, von 0 bis `data.length - 2`. Das sind
  `data.length - 1` Durchläufe. Mehr braucht es nicht: Stehen alle Werte außer einem an ihrem Platz, bleibt für den
  letzten Wert nur noch der erste Platz übrig.
- **Zeile 3, die innere Schleife:** `j` ist der linke Index des Paars, das gerade verglichen wird. Die Grenze
  `data.length - i - 1` hat zwei Teile. Das `- i` lässt die `i` Plätze am Ende weg, die schon fertig sind. Das `- 1`
  sorgt dafür, dass `j + 1` noch ein gültiger Index ist.
- **Zeile 4:** Ist der linke Wert **echt** größer als der rechte? Nur dann wird getauscht. Gleiche Werte bleiben, wie
  sie sind.
- **Zeile 5:** Tausch der beiden Nachbarn.

:::beispiel[Ein Durchlauf, Schritt für Schritt]
Wir sortieren `data = {6, 2, 9, 4, 1}`, also Länge 5. Im ersten Durchlauf ist `i = 0`. Die innere Grenze ist
`5 - 0 - 1 = 4`, also läuft `j` von 0 bis 3.

|`j`|Paar|Tausch?|`data` danach|
|---|---|---|---|
|0|6, 2|ja (6>2)|`{2,6,9,4,1}`|
|1|6, 9|nein|`{2,6,9,4,1}`|
|2|9, 4|ja (9>4)|`{2,6,4,9,1}`|
|3|9, 1|ja (9>1)|`{2,6,4,1,9}`|

Die 9 ist ab `j = 2` bei jedem Vergleich der größere Wert und wandert bis ganz nach rechts. Dort bleibt sie für
immer. Die 1 ist dagegen nur um **eine** Stelle nach links gerückt.
:::

:::beispiel[Alle Durchläufe]
Wir setzen das Sortieren von `{6, 2, 9, 4, 1}` fort. Die Tabelle zeigt das Array nach jedem Durchlauf der inneren
Schleife. Der fertige Teil am rechten Ende wächst jedes Mal um einen Platz.

|Durchlauf|`i`|Paare (`j`)|`data` danach|fertig am Ende|
|---|---|---|---|---|
|1|0|0 bis 3|`{2,6,4,1,9}`|9|
|2|1|0 bis 2|`{2,4,1,6,9}`|6, 9|
|3|2|0 bis 1|`{2,1,4,6,9}`|4, 6, 9|
|4|3|nur 0|`{1,2,4,6,9}`|alle|

Im zweiten Durchlauf passiert Folgendes: 2 und 6 bleiben, 6 und 4 tauschen, 6 und 1 tauschen. Das Paar `6, 9` wird
gar nicht mehr verglichen, weil `j` nur bis 2 läuft.

Gezählt: Die Bedingung in Zeile 4 wurde `4 + 3 + 2 + 1 = 10`-mal geprüft, und es gab 7 Tausche. Die 1 brauchte
alle vier Durchläufe, weil sie pro Durchlauf nur einen Platz nach links rückt.
:::

```aufgabe
id: so-bu-durchlauf1
titel: Der erste Durchlauf
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Der Code führt nur den ersten Durchlauf von Bubblesort aus, also die innere Schleife für `i = 0`. Was gibt er aus?
teile:
  - typ: ausgabe
    code: |
      int[] data = {7, 3, 8, 5, 2};
      for (int j = 0; j < data.length - 1; j++) {
          if (data[j] > data[j + 1]) {
              int swap = data[j];
              data[j] = data[j + 1];
              data[j + 1] = swap;
          }
      }
      System.out.println(Arrays.toString(data));
    loesung: |
      [3, 7, 5, 2, 8]
    fehler:
      - wert: "[2, 3, 5, 7, 8]"
        meldung: Ein einziger Durchlauf sortiert das Array nicht fertig. Er bringt nur den größten Wert ans rechte Ende.
      - wert: "[3, 7, 5, 8, 2]"
        meldung: 'Auch das letzte Paar wird verglichen: `j` läuft bis `data.length - 2 = 3`. Bei `j = 3` stehen 8 und 2 falsch herum.'
      - wert: "[3, 7, 8, 2, 5]"
        meldung: 'Bei `j = 2` stehen 8 und 5 falsch herum, denn `8 > 5`. Hier wird getauscht, und danach wird die 8 mit der 2 verglichen.'
hinweise:
  - Leg eine Tabelle mit den Spalten `j`, Paar, Tausch? und Array danach an.
gefuehrt:
  - text: '`j = 0`: Verglichen werden 7 und 3. Welcher Wert steht nach diesem Schritt an Index 0?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '7 > 3, also wird getauscht. Das Array ist jetzt `{3, 7, 8, 5, 2}`.'
  - text: '`j = 1`: Verglichen werden 7 und 8. Wird getauscht?'
    teil: { typ: auswahl, optionen: [ja, nein], richtig: [1] }
    erklaerung: '7 > 8 ist falsch. Das Array bleibt `{3, 7, 8, 5, 2}`.'
  - text: '`j = 2`: Verglichen werden 8 und 5. Welcher Wert steht danach an Index 3?'
    teil: { typ: zahl, loesung: "8" }
    erklaerung: '8 > 5, Tausch. Das Array ist `{3, 7, 5, 8, 2}`.'
  - text: '`j = 3`: Verglichen werden die Werte an Index 3 und 4. Welcher Wert steht danach ganz rechts?'
    teil: { typ: zahl, loesung: "8" }
    erklaerung: '8 > 2, Tausch. Ergebnis `{3, 7, 5, 2, 8}`. Der größte Wert ist am rechten Ende angekommen.'
loesung: |
  **Ansatz:** Paar für Paar von links nach rechts, nach jedem Tausch mit dem neuen Nachbarn weiter.
  ---
  `j = 0`: 7 und 3 tauschen. `j = 1`: 7 und 8 bleiben. `j = 2`: 8 und 5 tauschen, das Array ist `{3, 7, 5, 8, 2}`.
  ---
  `j = 3`: 8 und 2 tauschen. Ausgabe `[3, 7, 5, 2, 8]`. Probe: Die 8 als größter Wert steht ganz rechts.
```

:::merke[Bubblesort von Hand]
1. Ein Durchlauf vergleicht die Paare von links nach rechts und tauscht jedes Paar, dessen linker Wert **echt
   größer** ist.
2. Tausche sofort und vergleiche dann mit dem **neuen** Nachbarn weiter. Der gerade getauschte große Wert ist im
   nächsten Paar wieder dabei.
3. Nach jedem Durchlauf ist der fertige Teil rechts um einen Platz länger. Große Werte wandern schnell nach rechts,
   kleine Werte rücken nur einen Platz pro Durchlauf nach links.
:::

:::achtung[Die innere Grenze ohne -1]
Jemand schreibt die innere Schleife als `for (int j = 0; j < data.length - i; j++)`. Für `data = {6, 2, 9, 4, 1}`
und `i = 0` läuft `j` dann bis 4. Im letzten Durchlauf vergleicht Zeile 4 `data[4]` mit `data[5]`. Den Index 5
gibt es bei Länge 5 nicht, und das Programm bricht mit einer `ArrayIndexOutOfBoundsException` ab. Weil die
Schleife `data[j + 1]` liest, muss `j` eine Stelle vor dem letzten Index aufhören.
:::

:::achtung[Das Vergleichszeichen umgedreht]
Mit `if (data[j] < data[j + 1])` tauscht Bubblesort genau dann, wenn der linke Wert **kleiner** ist. Dann wandert
der **kleinste** Wert nach rechts. Aus `{3, 1, 2}` wird `{3, 2, 1}`. Das Verfahren sortiert also absteigend, nicht
aufsteigend. Merke dir die Zeile so: Getauscht wird, wenn das Paar falsch herum steht. Für „aufsteigend“ heißt
falsch herum: links größer als rechts.
:::

```aufgabe
id: so-bu-trace
titel: Das Array nach jedem Durchlauf
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  `bubbleSort` aus der Vorlesung sortiert `data = {5, 3, 4, 1}`. Trag das Array nach jedem Durchlauf der inneren
  Schleife ein. Die erste Zeile zeigt den Zustand vor dem Sortieren.
teile:
  - typ: trace
    spalten: ['data[0]', 'data[1]', 'data[2]', 'data[3]']
    zeilen: [vor dem Sortieren, nach i = 0, nach i = 1, nach i = 2]
    vorgabe: 1
    loesung: [[5, 3, 4, 1], [3, 4, 1, 5], [3, 1, 4, 5], [1, 3, 4, 5]]
    fehler:
      - wert: ["5", "3", "4", "1", "3", "5", "4", "1", "3", "4", "5", "1", "1", "3", "4", "5"]
        meldung: 'Ein Durchlauf ist die ganze innere Schleife, nicht ein einzelner Vergleich. Nach `i = 0` muss die 5 schon ganz rechts stehen.'
      - wert: ["5", "3", "4", "1", "3", "4", "1", "5", "1", "3", "4", "5", "1", "3", "4", "5"]
        meldung: 'Im zweiten Durchlauf rückt die 1 nur **einen** Platz nach links. Das Paar `3, 4` wird vor dem Tausch `4, 1` verglichen. Danach kommt die 1 in diesem Durchlauf nicht mehr neben die 3.'
hinweise:
  - 'Im Durchlauf `i` läuft `j` von 0 bis `4 - i - 2`. Bei `i = 0` also 0 bis 2.'
loesung: |
  **Ansatz:** Jeden Durchlauf Paar für Paar ausführen und das Array danach notieren.
  ---
  `i = 0`: 5 und 3 tauschen, 5 und 4 tauschen, 5 und 1 tauschen. Ergebnis `{3, 4, 1, 5}`.
  ---
  `i = 1`: 3 und 4 bleiben, 4 und 1 tauschen: `{3, 1, 4, 5}`. `i = 2`: 3 und 1 tauschen: `{1, 3, 4, 5}`. Probe: sortiert, nach `4 - 1 = 3` Durchläufen.
```

```aufgabe
id: so-bu-aussagen
titel: Was Bubblesort garantiert
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über `bubbleSort` aus der Vorlesung für ein Array der Länge `n ≥ 2`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach dem ersten Durchlauf der inneren Schleife steht der größte Wert ganz rechts.
        richtig: true
        erklaerung: Sobald der Durchlauf den größten Wert erreicht, wird er bei jedem weiteren Vergleich nach rechts getauscht.
      - text: Nach dem ersten Durchlauf der inneren Schleife steht der kleinste Wert ganz links.
        richtig: false
        erklaerung: 'Der kleinste Wert rückt pro Durchlauf höchstens einen Platz nach links. Beispiel: `{2, 3, 1}` wird nach dem ersten Durchlauf zu `{2, 1, 3}`.'
      - text: Bubblesort vertauscht nur Werte, die direkt nebeneinander stehen.
        richtig: true
        erklaerung: '`exchange` wird nur mit den Indizes `j` und `j + 1` aufgerufen.'
      - text: Ist `n ≥ 4`, dann vergleicht die innere Schleife im Durchlauf mit `i = 2` genau `n - 3` Paare.
        richtig: true
        erklaerung: 'Die Grenze ist `n - 2 - 1 = n - 3`. `j` läuft also von 0 bis `n - 4`, das sind `n - 3` Werte.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Probier die zweite Aussage mit `{2, 3, 1}` aus. Wo steht die 1 nach dem ersten Durchlauf?'
      - wert: [r, f, r, f]
        meldung: 'Zähle die Werte von `j` bei `i = 2` genau. Die Bedingung lautet `j < n - 2 - 1`.'
hinweise:
  - Spiel jede Aussage mit einem kleinen Array durch, etwa mit `{2, 3, 1}` oder `{4, 3, 2, 1}`.
  - 'Für die letzte Aussage: Die innere Grenze ist `n - i - 1`. Wie viele ganze Zahlen `j` gibt es mit `0 <= j < n - 3`?'
loesung: |
  **Ansatz:** Jede Aussage an der Code-Zeile prüfen, die sie betrifft, und mit einem kleinen Beispiel gegentesten.
  ---
  Aussagen 1 und 3 folgen direkt aus dem Code: Der größte Wert wird immer weiter getauscht, und getauscht wird nur `j` mit `j + 1`.
  ---
  Aussage 2 ist falsch, Gegenbeispiel `{2, 3, 1}` wird zu `{2, 1, 3}`. Aussage 4: Bei `i = 2` ist die Grenze `n - 3`, also `j = 0, 1, …, n - 4`. Das sind `n - 3` Paare, richtig.
```

```aufgabe
id: so-bu-vergleiche
titel: Wie oft wird verglichen?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  `bubbleSort` aus der Vorlesung sortiert ein Array der Länge 7. Wie oft wird die Bedingung
  `data[j] > data[j + 1]` insgesamt ausgewertet?
teile:
  - typ: zahl
    loesung: "6 + 5 + 4 + 3 + 2 + 1"
    fehler:
      - wert: "36"
        meldung: 'Das wäre richtig, wenn jede innere Schleife 6 Paare vergleichen würde. Durch das `- i` wird sie aber mit jedem Durchlauf kürzer.'
      - wert: "28"
        meldung: 'Der erste Durchlauf vergleicht 6 Paare, nicht 7. Eine Länge von 7 ergibt nur 6 Nachbarpaare.'
      - wert: "42"
        meldung: Es gibt 6 Durchläufe, aber nicht jeder vergleicht 7 Paare. Zähle für jedes `i` einzeln.
hinweise:
  - 'Die äußere Schleife läuft für `i = 0` bis 5. Bei `i` vergleicht die innere Schleife `7 - i - 1` Paare.'
  - Zähle die Paare pro Durchlauf auf und addiere.
loesung: |
  **Ansatz:** Für jeden Durchlauf die Anzahl der Vergleiche bestimmen und addieren.
  ---
  `i = 0`: 6 Paare, `i = 1`: 5, `i = 2`: 4, `i = 3`: 3, `i = 4`: 2, `i = 5`: 1.
  ---
  Summe: `6 + 5 + 4 + 3 + 2 + 1 = 21`. Das gilt für **jedes** Array der Länge 7, egal wie es anfangs aussieht, denn die Schleifen haben feste Grenzen.
```

```aufgabe
id: so-bu-tausche
titel: Tausche mitzählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: Das Programm zählt die Tausche von Bubblesort mit. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      int[] data = {4, 2, 5, 1, 3};
      int tausche = 0;
      for (int i = 0; i < data.length - 1; i++) {
          for (int j = 0; j < data.length - i - 1; j++) {
              if (data[j] > data[j + 1]) {
                  int swap = data[j];
                  data[j] = data[j + 1];
                  data[j + 1] = swap;
                  tausche++;
              }
          }
      }
      System.out.println(Arrays.toString(data) + " " + tausche);
    loesung: |
      [1, 2, 3, 4, 5] 6
    fehler:
      - wert: "[1, 2, 3, 4, 5] 10"
        meldung: '10 ist die Zahl der **Vergleiche** bei Länge 5. Getauscht wird nur, wenn das Paar falsch herum steht.'
      - wert: "[1, 2, 3, 4, 5] 4"
        meldung: '4 ist die Zahl der Durchläufe. Gezählt wird aber jeder einzelne Tausch, auch mehrere pro Durchlauf.'
hinweise:
  - Führe Durchlauf für Durchlauf aus und mach bei jedem Tausch einen Strich.
  - 'Die Durchläufe ergeben `{2, 4, 1, 3, 5}`, dann `{2, 1, 3, 4, 5}`, dann `{1, 2, 3, 4, 5}`. Wie viele Tausche stecken in jedem?'
loesung: |
  **Ansatz:** Jeden Durchlauf ausführen und die Tausche zählen.
  ---
  `i = 0`: 4/2 tauschen, 4/5 nicht, 5/1 tauschen, 5/3 tauschen. 3 Tausche, `{2, 4, 1, 3, 5}`. `i = 1`: 2/4 nicht, 4/1 tauschen, 4/3 tauschen. 2 Tausche, `{2, 1, 3, 4, 5}`.
  ---
  `i = 2`: 2/1 tauschen, 1 Tausch. `i = 3`: 1/2 nicht. Zusammen `3 + 2 + 1 = 6`. Ausgabe `[1, 2, 3, 4, 5] 6`.
```

### Früher aufhören: Bubblesort mit Abbruch

Die Fassung der Vorlesung macht immer alle `data.length - 1` Durchläufe, auch wenn das Array längst sortiert ist.
Die Folien zeigen deshalb eine verbesserte Fassung. Sie merkt sich in einer `boolean`-Variable, ob im Durchlauf
getauscht wurde. Gab es keinen einzigen Tausch, ist das Array sortiert, und das Verfahren hört auf.

```java
private static void bubbleSort2(int[] data) {
    boolean notSorted = true;
    while (notSorted) {
        notSorted = false;
        for (int i = 0; i < data.length - 1; i++) {
            if (data[i] > data[i + 1]) {
                exchange(data, i, i + 1);
                notSorted = true;
            }
        }
    }
}
```

- Zeile 2: `notSorted` (englisch: nicht sortiert) beginnt mit `true`, damit die `while`-Schleife mindestens
  einmal läuft.
- Zeile 4: Zu Beginn jedes Durchlaufs nehmen wir an, dass alles passt.
- Zeile 5: Diesmal heißt der Index der inneren Schleife `i`, und die Grenze schrumpft **nicht**. Jeder Durchlauf
  vergleicht alle `data.length - 1` Paare.
- Zeile 8: Jeder Tausch beweist, dass das Array noch nicht sortiert war. Dann folgt noch ein Durchlauf.

:::beispiel[Ein fast sortiertes Array]
`bubbleSort2` sortiert `{5, 1, 2, 3, 4}`.

- **Durchlauf 1:** Die 5 wird viermal getauscht und wandert ans Ende. Ergebnis `{1, 2, 3, 4, 5}`. Es gab Tausche,
  also ist `notSorted` am Ende `true`.
- **Durchlauf 2:** Kein Paar steht falsch herum, `notSorted` bleibt `false`. Die `while`-Schleife endet.

Zwei Durchläufe mit je 4 Vergleichen, also 8 Vergleiche. Die Fassung ohne Abbruch hätte 4 Durchläufe mit
`4 + 3 + 2 + 1 = 10` Vergleichen gemacht. Beachte: Der zweite Durchlauf ändert nichts, er ist trotzdem nötig. Erst
ein Durchlauf **ohne** Tausch beweist, dass das Array sortiert ist.
:::

```aufgabe
id: so-bu-bubble2
titel: Wie viele Durchläufe mit Abbruch?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Das Programm zählt, wie oft die `while`-Schleife von `bubbleSort2` läuft. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      int[] data = {2, 3, 4, 1, 5};
      int durchlaeufe = 0;
      boolean notSorted = true;
      while (notSorted) {
          notSorted = false;
          durchlaeufe++;
          for (int i = 0; i < data.length - 1; i++) {
              if (data[i] > data[i + 1]) {
                  int swap = data[i];
                  data[i] = data[i + 1];
                  data[i + 1] = swap;
                  notSorted = true;
              }
          }
      }
      System.out.println(durchlaeufe);
    loesung: |
      4
    fehler:
      - wert: "3"
        meldung: 'Nach drei Durchläufen ist das Array sortiert, aber im dritten wurde noch getauscht. Erst ein vierter Durchlauf ohne Tausch beendet die Schleife.'
      - wert: "1"
        meldung: 'Die 1 rückt pro Durchlauf nur einen Platz nach links. Ein einziger Durchlauf genügt hier nicht.'
hinweise:
  - Schreib das Array nach jedem Durchlauf auf und notiere, ob getauscht wurde.
  - Die Schleife endet erst nach dem ersten Durchlauf, in dem **kein** Tausch passiert.
loesung: |
  **Ansatz:** Durchlauf für Durchlauf ausführen und auf Tausche achten.
  ---
  Durchlauf 1: `{2, 3, 1, 4, 5}`, getauscht. Durchlauf 2: `{2, 1, 3, 4, 5}`, getauscht. Durchlauf 3: `{1, 2, 3, 4, 5}`, getauscht.
  ---
  Durchlauf 4: kein Tausch, `notSorted` bleibt `false`. Ausgabe `4`. Die kleine 1 am Ende braucht drei Durchläufe, um nach vorne zu rücken.
```

```aufgabe
id: so-bu-absteigend-code
titel: Bubblesort absteigend
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Schreib `bubbleSortAbsteigend(int[] data)`. Die Methode sortiert `data` mit Bubblesort **absteigend**, also
  vom größten zum kleinsten Wert. Sie arbeitet im Array selbst und gibt nichts zurück. `Arrays.sort` ist
  verboten. Vorbedingung: `data != null`.

  Beispiel: Aus `{3, 8, 1, 8, 5}` wird `{8, 8, 5, 3, 1}`.
teile:
  - typ: code
    vorlage: |
      public class Absteigend {
          public static void bubbleSortAbsteigend(int[] data) {
              // TODO
          }
      }
    musterloesung: |
      public class Absteigend {
          public static void bubbleSortAbsteigend(int[] data) {
              for (int i = 0; i < data.length - 1; i++) {
                  for (int j = 0; j < data.length - i - 1; j++) {
                      if (data[j] < data[j + 1]) {
                          int swap = data[j];
                          data[j] = data[j + 1];
                          data[j + 1] = swap;
                      }
                  }
              }
          }
      }
    tests:
      - { vorher: "int[] a = {3, 8, 1, 8, 5};", aufruf: "bubbleSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{8, 8, 5, 3, 1}" }
      - { vorher: "int[] a = {1, 2};", aufruf: "bubbleSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{2, 1}" }
      - { vorher: "int[] a = {};", aufruf: "bubbleSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { vorher: "int[] a = {-2, 0, -7, 4};", aufruf: "bubbleSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{4, 0, -2, -7}" }
      - { vorher: "int[] a = {1, 2, 3, 4, 5, 6};", aufruf: "bubbleSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{6, 5, 4, 3, 2, 1}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 1, meldung: "Prüfe das Vergleichszeichen. Für „absteigend“ steht ein Paar falsch herum, wenn der linke Wert **kleiner** ist als der rechte." }
      - { wert: 3, meldung: "Bei einem leeren Array darf keine Schleife laufen. Mit `i < data.length - 1` ist das schon so, weil `0 < -1` falsch ist." }
hinweise:
  - Übernimm das Gerüst von `bubbleSort` mit beiden Schleifen. Nur eine Zeile muss sich ändern.
  - 'Getauscht wird, wenn ein Paar für die gewünschte Reihenfolge falsch herum steht. Bei „absteigend“ ist das `data[j] < data[j + 1]`.'
loesung: |
  **Ansatz:** Bubblesort bleibt Bubblesort. Nur die Frage „Steht das Paar falsch herum?“ bekommt eine neue Antwort.
  ---
  ```java
  for (int i = 0; i < data.length - 1; i++) {
      for (int j = 0; j < data.length - i - 1; j++) {
          if (data[j] < data[j + 1]) {
              int swap = data[j];
              data[j] = data[j + 1];
              data[j + 1] = swap;
          }
      }
  }
  ```
  ---
  Nach jedem Durchlauf steht jetzt der **kleinste** Wert ganz rechts. Probe mit `{1, 2}`: 1 < 2, Tausch, Ergebnis `{2, 1}`. Den Tausch kannst du auch in eine eigene Methode `exchange` auslagern, wenn die Aufgabe Hilfsmethoden erlaubt.
```

```reflexion
frage: Warum darf die innere Schleife von bubbleSort im Durchlauf i schon bei data.length - i - 1 aufhören? Was würde passieren, wenn sie trotzdem bis data.length - 1 liefe?
antwort: |
  Nach dem Durchlauf mit der Nummer `i` stehen die `i + 1` größten Werte an ihren endgültigen Plätzen am rechten Ende.
  Vor dem Durchlauf `i` sind also schon `i` Plätze rechts fertig. Jedes Paar dort steht richtig herum, denn rechts
  stehen die größten Werte in sortierter Reihenfolge. Die Vergleiche dort würden nie zu einem Tausch führen. Liefe die
  Schleife trotzdem bis `data.length - 1`, wäre das Ergebnis also genauso richtig. Das Verfahren würde nur unnötige
  Vergleiche machen. Gefährlich wäre dagegen eine Grenze **ohne** das `- 1`, weil dann `data[j + 1]` über das Array
  hinaus liest.
```

## Selectionsort: das Minimum nach vorne holen

```aufgabe
id: so-se-check-minindex
titel: Das Minimum ab einer Stelle
niveau: 1
art: check
angabe: |
  Gegeben ist `int[] a = {2, 8, 6, 9, 7};`. Gesucht ist der **Index** des kleinsten Werts unter `a[1]` bis `a[4]`,
  also ohne `a[0]`. (Wiederholung: Minimum suchen in
  [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen))
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: '`a[0]` gehört nicht zum Suchbereich. Gesucht wird erst ab Index 1.'
      - wert: "6"
        meldung: Gesucht ist der Index, nicht der Wert. Der Wert 6 steht an welchem Index?
loesung: |
  Die Werte ab Index 1 sind 8, 6, 9 und 7. Der kleinste davon ist 6.
  ---
  Die 6 steht an Index 2. Gesucht war der Index, also 2.
```

Stell dir vor, eine Sportlehrerin will ihre Klasse der Größe nach aufstellen. Sie sucht das kleinste Kind und
schickt es auf den ersten Platz. Dann sucht sie unter den übrigen das kleinste und schickt es auf den zweiten
Platz. So geht es weiter, bis alle stehen. Genau so arbeitet **Selectionsort**. Das englische Wort *selection*
heißt Auswahl: In jedem Schritt wird das kleinste Element ausgewählt.

Im Array sieht das so aus. Links wächst ein **sortierter Teil**, rechts schrumpft ein **unsortierter Teil**. Am
Anfang ist der sortierte Teil leer. In jedem Durchlauf sucht das Verfahren den kleinsten Wert im unsortierten Teil.
Diesen tauscht es mit dem ersten Wert des unsortierten Teils. Damit ist der sortierte Teil um einen Platz länger.

:::definition[Selectionsort]
**Selectionsort** sortiert ein Array in Durchläufen `i = 0, 1, …, data.length - 2`. Im Durchlauf `i` bestimmt es
den Index `min` des kleinsten Werts unter `data[i]` bis `data[data.length - 1]`. Danach tauscht es `data[i]` mit
`data[min]`. Nach dem Durchlauf `i` stehen an den Indizes 0 bis `i` die `i + 1` kleinsten Werte in sortierter
Reihenfolge.
:::

Der Code aus den Folien:

```java
private static void selectionSort(int[] data) {
    for (int i = 0; i < data.length - 1; i++) {
        int min = i;
        for (int j = i + 1; j < data.length; j++) {
            if (data[j] < data[min]) {
                min = j;
            }
        }
        exchange(data, i, min);
    }
}
```

- **Zeile 2:** `i` ist der Platz, der in diesem Durchlauf seinen endgültigen Wert bekommt. Für den letzten Platz
  braucht es keinen eigenen Durchlauf mehr, darum endet `i` bei `data.length - 2`.
- **Zeile 3:** Die Suche beginnt mit dem ersten Wert des unsortierten Teils als bisherigem Minimum. `min` ist ein
  **Index**, kein Wert.
- **Zeilen 4 bis 6:** `j` geht den Rest des unsortierten Teils durch. Findet sich ein **echt** kleinerer Wert, merkt
  sich `min` dessen Index. Das ist die Minimumsuche aus
  [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen),
  nur ab `i` statt ab 0.
- **Zeile 8:** Erst **nach** der Suche wird getauscht, genau einmal pro Durchlauf. Ist `min` gleich `i`, tauscht
  `exchange` den Platz mit sich selbst, und nichts ändert sich.

:::beispiel[Ein Durchlauf: das Minimum suchen und tauschen]
Wir sortieren `data = {6, 2, 9, 4, 1}`. Im ersten Durchlauf ist `i = 0`, also beginnt `min` bei 0 mit dem Wert 6.

|`j`|`data[j]`|`data[j] < data[min]`?|`min` danach|
|---|---|---|---|
|1|2|ja (2<6)|1|
|2|9|nein (9<2)|1|
|3|4|nein (4<2)|1|
|4|1|ja (1<2)|4|

Nach der Schleife ist `min = 4`. `exchange(data, 0, 4)` tauscht die 6 und die 1. Ergebnis: `{1, 2, 9, 4, 6}`.
Beachte: Die 6 ist dabei ganz nach hinten gesprungen, über die 2, die 9 und die 4 hinweg. Bubblesort tauscht nur
Nachbarn. Selectionsort tauscht über beliebige Entfernung.
:::

:::beispiel[Alle Durchläufe]
Weiter mit demselben Array. Die Tabelle zeigt den gefundenen Index `min` und das Array nach dem Tausch.

|`i`|Suchbereich|kleinster Wert|`min`|`data` danach|
|---|---|---|---|---|
|0|Index 0 bis 4|1|4|`{1,2,9,4,6}`|
|1|Index 1 bis 4|2|1|`{1,2,9,4,6}`|
|2|Index 2 bis 4|4|3|`{1,2,4,9,6}`|
|3|Index 3 bis 4|6|4|`{1,2,4,6,9}`|

Im Durchlauf `i = 1` steht das Minimum schon an der richtigen Stelle. `exchange(data, 1, 1)` ändert nichts, das
Array sieht nach diesem Durchlauf genauso aus wie davor. Das ist für die Quizfragen in
[19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen) wichtig.

Gezählt: Die Bedingung in Zeile 5 wurde `4 + 3 + 2 + 1 = 10`-mal geprüft, und `exchange` wurde genau 4-mal
aufgerufen, einmal pro Durchlauf.
:::

```aufgabe
id: so-se-minindex
titel: Die Suche nach min mitschreiben
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  `selectionSort` sortiert `data = {8, 5, 7, 3, 6}`. Verfolge den ersten Durchlauf (`i = 0`). Trag nach jedem
  Schritt der inneren Schleife den Wert von `min` ein. Die erste Zeile zeigt den Start.
teile:
  - typ: trace
    spalten: ['j', 'min']
    zeilen: [Start, nach j = 1, nach j = 2, nach j = 3, nach j = 4]
    vorgabe: 1
    loesung: [['–', 0], [1, 1], [2, 1], [3, 3], [4, 3]]
    fehler:
      - wert: ["–", "0", "1", "5", "2", "5", "3", "3", "4", "3"]
        meldung: '`min` speichert den **Index** des bisher kleinsten Werts, nicht den Wert selbst. Bei `j = 1` ist das der Index 1.'
      - wert: ["–", "0", "1", "1", "2", "2", "3", "3", "4", "4"]
        meldung: '`min` ändert sich nur, wenn `data[j]` echt kleiner ist als `data[min]`. Ist 7 kleiner als 5?'
hinweise:
  - 'Vergleiche in jedem Schritt `data[j]` mit dem Wert an der Stelle `min`, nicht mit `data[0]`.'
loesung: |
  **Ansatz:** `min` startet bei `i = 0` mit dem Wert 8. Bei jedem `j` wird geprüft, ob `data[j]` echt kleiner ist als `data[min]`.
  ---
  `j = 1`: 5 < 8, also `min = 1`. `j = 2`: 7 < 5 falsch. `j = 3`: 3 < 5, also `min = 3`. `j = 4`: 6 < 3 falsch.
  ---
  Am Ende ist `min = 3`. `exchange(data, 0, 3)` macht daraus `{3, 5, 7, 8, 6}`.
```

:::merke[Selectionsort von Hand]
1. Suchbereich ist der unsortierte Teil, also Index `i` bis zum Ende.
2. Suche darin das **erste** Vorkommen des kleinsten Werts. Bei Gleichstand gewinnt der weiter links stehende
   Wert, weil nur bei **echt** kleiner `min` umgesetzt wird.
3. Tausche ihn mit `data[i]`. Alles andere im Array bleibt, wo es ist.
:::

:::achtung[min beginnt bei 0 statt bei i]
Mit `int min = 0;` in Zeile 3 sucht das Verfahren das Minimum ab Index 0, also auch im schon sortierten Teil.
Für `{3, 1, 2}` geschieht Folgendes. Durchlauf `i = 0` findet die 1 und tauscht: `{1, 3, 2}`. Durchlauf `i = 1`
beginnt mit `min = 0`, also mit der 1. Kein Wert ist kleiner, `min` bleibt 0. Dann tauscht `exchange(data, 1, 0)`
die 3 wieder nach vorne: `{3, 1, 2}`. Das Ergebnis ist unsortiert. Der Suchbereich muss bei `i` beginnen.
:::

:::achtung[Den Wert statt des Index merken]
Jemand schreibt in Zeile 6 `min = data[j];`. Dann steht in `min` ein **Wert**, wird aber als **Index** benutzt. Für
`{7, 2, 9}` wird bei `j = 1` die Zahl 2 in `min` gespeichert. Danach vergleicht Zeile 5 mit `data[2]`, also mit der
9. Am Ende tauscht `exchange(data, 0, 2)` die 7 und die 9: `{9, 2, 7}`, völlig falsch. Für `{7, 20, 5}` wird
`min = 5`, und `exchange(data, 0, 5)` bricht mit einer `ArrayIndexOutOfBoundsException` ab.
:::

```aufgabe
id: so-se-zwei-durchlaeufe
titel: Zwei Durchläufe Selectionsort
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Der Code führt die ersten beiden Durchläufe von Selectionsort aus und gibt das Array nach jedem Durchlauf aus.
  Was erscheint auf dem Bildschirm?
teile:
  - typ: ausgabe
    code: |
      int[] data = {9, 4, 7, 2, 5};
      for (int i = 0; i < 2; i++) {
          int min = i;
          for (int j = i + 1; j < data.length; j++) {
              if (data[j] < data[min]) {
                  min = j;
              }
          }
          int swap = data[i];
          data[i] = data[min];
          data[min] = swap;
          System.out.println(Arrays.toString(data));
      }
    loesung: |
      [2, 4, 7, 9, 5]
      [2, 4, 7, 9, 5]
    fehler:
      - wert: "[2, 4, 7, 9, 5]\n[2, 4, 5, 9, 7]"
        meldung: 'Im zweiten Durchlauf beginnt die Suche bei Index 1. Die 4 dort ist schon der kleinste Wert ab Index 1, also ändert sich nichts.'
      - wert: "[4, 9, 7, 2, 5]\n[4, 7, 9, 2, 5]"
        meldung: Selectionsort tauscht keine Nachbarn. Es sucht den kleinsten Wert im ganzen unsortierten Teil und holt ihn nach vorne.
      - wert: "[2, 9, 4, 7, 5]\n[2, 4, 9, 7, 5]"
        meldung: Beim Tausch wechseln nur zwei Werte die Plätze. Die übrigen Werte rücken nicht nach, die 9 springt direkt an die alte Stelle der 2.
hinweise:
  - Suche in jedem Durchlauf den kleinsten Wert ab Index `i` und tausche ihn mit `data[i]`.
loesung: |
  **Ansatz:** Pro Durchlauf: Minimum ab `i` suchen, mit `data[i]` tauschen, ausgeben.
  ---
  `i = 0`: Das Minimum von `{9, 4, 7, 2, 5}` ist die 2 an Index 3. Tausch mit der 9: `[2, 4, 7, 9, 5]`.
  ---
  `i = 1`: Das Minimum ab Index 1 ist die 4 an Index 1 selbst. Der Tausch mit sich selbst ändert nichts. Die zweite Zeile ist gleich der ersten.
```

```aufgabe
id: so-se-trace-alle
titel: Selectionsort komplett
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  `selectionSort` sortiert `data = {4, 6, 3, 5, 1}`. Trag für jeden Durchlauf den gefundenen Index `min` und das
  Array nach dem Tausch ein.
teile:
  - typ: trace
    spalten: ['min', 'data[0]', 'data[1]', 'data[2]', 'data[3]', 'data[4]']
    zeilen: [vor dem Sortieren, nach i = 0, nach i = 1, nach i = 2, nach i = 3]
    vorgabe: 1
    loesung: [['–', 4, 6, 3, 5, 1], [4, 1, 6, 3, 5, 4], [2, 1, 3, 6, 5, 4], [4, 1, 3, 4, 5, 6], [3, 1, 3, 4, 5, 6]]
    fehler:
      - wert: ["–", "4", "6", "3", "5", "1", "4", "1", "4", "6", "3", "5", "3", "1", "3", "4", "6", "5", "2", "1", "3", "4", "6", "5", "4", "1", "3", "4", "5", "6"]
        meldung: 'Beim Tausch wechseln nur zwei Werte die Plätze. Die übrigen Werte rücken **nicht** nach. Nach `i = 0` steht die 4 dort, wo vorher die 1 stand.'
hinweise:
  - Der Suchbereich im Durchlauf `i` reicht von Index `i` bis 4. Gesucht ist der Index des kleinsten Werts darin.
  - Nach dem Tausch stehen nur `data[i]` und `data[min]` anders als vorher.
gefuehrt:
  - text: 'Durchlauf `i = 0`: An welchem Index steht der kleinste Wert von `{4, 6, 3, 5, 1}`?'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 'Die 1 an Index 4. Tausch mit `data[0]`: `{1, 6, 3, 5, 4}`.'
  - text: 'Durchlauf `i = 1`: Gesucht wird ab Index 1 in `{1, 6, 3, 5, 4}`. Welcher Index ist `min`?'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Die 3 an Index 2. Tausch mit der 6: `{1, 3, 6, 5, 4}`.'
  - text: 'Durchlauf `i = 2`: Gesucht wird ab Index 2 in `{1, 3, 6, 5, 4}`. Welcher Index ist `min`?'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 'Die 4 an Index 4. Tausch mit der 6: `{1, 3, 4, 5, 6}`.'
  - text: 'Durchlauf `i = 3`: Gesucht wird unter `data[3] = 5` und `data[4] = 6`. Welcher Index ist `min`, und ändert der Tausch etwas?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Die 5 an Index 3 ist schon das Minimum. `exchange(data, 3, 3)` ändert nichts. Das Array ist sortiert.'
loesung: |
  **Ansatz:** Pro Durchlauf das Minimum im Bereich ab `i` suchen und nur zwei Werte tauschen.
  ---
  `i = 0`: `min = 4`, `{1, 6, 3, 5, 4}`. `i = 1`: `min = 2`, `{1, 3, 6, 5, 4}`.
  ---
  `i = 2`: `min = 4`, `{1, 3, 4, 5, 6}`. `i = 3`: `min = 3`, kein sichtbarer Tausch. Probe: Nach 4 Durchläufen ist `{1, 3, 4, 5, 6}` sortiert.
```

```aufgabe
id: so-se-exchanges
titel: Wie oft wird exchange aufgerufen?
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  `selectionSort` aus der Vorlesung sortiert ein Array der Länge 9. Wie oft wird `exchange` aufgerufen?
  Zähle jeden Aufruf, auch einen Tausch eines Platzes mit sich selbst.
teile:
  - typ: zahl
    loesung: "9 - 1"
    fehler:
      - wert: "36"
        meldung: '36 ist die Zahl der **Vergleiche** in Zeile 5, also `8 + 7 + … + 1`. `exchange` steht aber außerhalb der inneren Schleife.'
      - wert: "9"
        meldung: 'Die äußere Schleife läuft nur bis `i < data.length - 1`, also für `i = 0` bis 7.'
hinweise:
  - Wo steht der Aufruf von `exchange`? In der inneren oder in der äußeren Schleife?
  - Wie oft läuft die äußere Schleife bei Länge 9?
loesung: |
  **Ansatz:** `exchange` steht in der äußeren Schleife, nach der inneren. Er läuft also genau einmal pro Durchlauf.
  ---
  Die äußere Schleife läuft für `i = 0` bis `9 - 2 = 7`, das sind 8 Durchläufe.
  ---
  Also 8 Aufrufe von `exchange`, egal wie das Array aussieht. Das ist eine Besonderheit von Selectionsort: Die Zahl der Tausche wächst nur so schnell wie die Länge.
```

```aufgabe
id: so-se-aussagen
titel: Was Selectionsort garantiert
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über `selectionSort` aus der Vorlesung.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach dem Durchlauf mit `i = 1` stehen die zwei kleinsten Werte des Arrays sortiert an den Indizes 0 und 1.
        richtig: true
        erklaerung: Jeder Durchlauf holt das Minimum des Rests an die Stelle `i`. Nach zwei Durchläufen sind das die zwei kleinsten Werte.
      - text: Ein Durchlauf verändert höchstens zwei Plätze des Arrays.
        richtig: true
        erklaerung: Pro Durchlauf gibt es genau einen Aufruf von `exchange`, und der betrifft die Plätze `i` und `min`.
      - text: Ist das Array schon sortiert, endet `selectionSort` nach dem ersten Durchlauf.
        richtig: false
        erklaerung: Die Schleifen haben feste Grenzen. Alle Durchläufe und alle Vergleiche finden statt, nur die Tausche ändern nichts.
      - text: Selectionsort tauscht nur benachbarte Werte.
        richtig: false
        erklaerung: '`data[i]` wird mit `data[min]` getauscht, und `min` kann weit rechts liegen. Aus `{6, 2, 9, 4, 1}` wird im ersten Durchlauf `{1, 2, 9, 4, 6}`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Selectionsort hat keine Abbruchbedingung wie `bubbleSort2`. Beide `for`-Schleifen laufen immer bis zu ihrer Grenze.'
      - wert: [r, r, f, r]
        meldung: '`min` ist der Index des Minimums im ganzen restlichen Array. Er liegt nicht unbedingt neben `i`.'
hinweise:
  - Schau dir für jede Aussage an, welche Zeile des Codes sie betrifft.
  - Selectionsort hat zwei `for`-Schleifen mit festen Grenzen und kein `break`.
loesung: |
  **Ansatz:** Jede Aussage am Code prüfen.
  ---
  Aussagen 1 und 2 sind richtig: Durchlauf `i` setzt das Minimum des Rests an die Stelle `i`, mit genau einem Tausch.
  ---
  Aussage 3 ist falsch, es gibt keinen vorzeitigen Abbruch. Aussage 4 ist falsch, der Tausch geht über beliebige Entfernung.
```

```aufgabe
id: so-se-zeilen
titel: Welche Zeile ist falsch?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Diese Fassung von Selectionsort liefert für `{2, 1, 3}` nicht `{1, 2, 3}`, sondern wieder `{2, 1, 3}`. Genau eine Zeile weicht von der
  Fassung der Vorlesung ab. Markiere sie.
teile:
  - typ: zeilen
    code: |
      private static void selectionSort(int[] data) {
          for (int i = 0; i < data.length - 1; i++) {
              int min = i;
              for (int j = i + 1; j < data.length; j++) {
                  if (data[j] < data[min]) {
                      min = j;
                  }
                  exchange(data, i, min);
              }
          }
      }
    loesung: [8]
    fehler:
      - wert: [4]
        meldung: 'Die innere Schleife beginnt richtig bei `i + 1`. Achte auf die Klammern: Wo steht der Aufruf von `exchange`?'
      - wert: [3]
        meldung: '`int min = i;` ist richtig. Die Suche beginnt beim ersten Platz des unsortierten Teils.'
hinweise:
  - Vergleiche Zeile für Zeile mit dem Code der Vorlesung, besonders die Position der geschweiften Klammern.
  - 'In der Vorlesung wird nach der Suche **einmal** getauscht. Wie oft wird hier getauscht?'
loesung: |
  **Ansatz:** Mit der Vorlesungsfassung vergleichen und dann an einem kleinen Beispiel prüfen.
  ---
  Zeile 8: `exchange` steht **in** der inneren Schleife, vor deren schließender Klammer. Es wird also nach jedem Vergleich getauscht, schon bevor das Minimum feststeht.
  ---
  Bei `{2, 1, 3}` findet `j = 1` die 1, `min` wird 1, und sofort wird getauscht: `{1, 2, 3}`. Jetzt zeigt `min` auf die 2. Bei `j = 2` ist `3 < 2` falsch, aber Zeile 8 läuft trotzdem und tauscht die 2 wieder nach vorne: `{2, 1, 3}`. Richtig ist der Tausch genau einmal, nach der schließenden Klammer der inneren Schleife.
```

```aufgabe
id: so-se-max-code
titel: Selectionsort mit dem Maximum
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Man kann Selectionsort auch von hinten aufziehen: In jedem Durchlauf wird der **größte** Wert des unsortierten
  Teils gesucht und ans **Ende** dieses Teils getauscht. Der sortierte Teil wächst dann von rechts.

  Schreib `selectionSortMax(int[] data)`, die `data` so aufsteigend sortiert. Im Durchlauf mit dem Zähler `i`
  (ab 0) ist der unsortierte Teil `data[0]` bis `data[ende]` mit `ende = data.length - 1 - i`. `Arrays.sort` ist
  verboten. Vorbedingung: `data != null`.
teile:
  - typ: code
    vorlage: |
      public class AuswahlMax {
          public static void selectionSortMax(int[] data) {
              // TODO
          }
      }
    musterloesung: |
      public class AuswahlMax {
          public static void selectionSortMax(int[] data) {
              for (int i = 0; i < data.length - 1; i++) {
                  int ende = data.length - 1 - i;
                  int max = 0;
                  for (int j = 1; j <= ende; j++) {
                      if (data[j] > data[max]) {
                          max = j;
                      }
                  }
                  int swap = data[ende];
                  data[ende] = data[max];
                  data[max] = swap;
              }
          }
      }
    tests:
      - { vorher: "int[] a = {6, 2, 9, 4, 1};", aufruf: "selectionSortMax(a)", ergebnis: "a", erwartet: "new int[]{1, 2, 4, 6, 9}" }
      - { vorher: "int[] a = {2, 1};", aufruf: "selectionSortMax(a)", ergebnis: "a", erwartet: "new int[]{1, 2}" }
      - { vorher: "int[] a = {};", aufruf: "selectionSortMax(a)", ergebnis: "a", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { vorher: "int[] a = {5, 5, 1, 5};", aufruf: "selectionSortMax(a)", ergebnis: "a", erwartet: "new int[]{1, 5, 5, 5}" }
      - { vorher: "int[] a = {9, 8, 7, 6, 5, 4};", aufruf: "selectionSortMax(a)", ergebnis: "a", erwartet: "new int[]{4, 5, 6, 7, 8, 9}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 2, meldung: "Bei zwei Werten muss der größere ans Ende. Läuft deine Suche wirklich bis einschließlich `ende`, also mit `j <= ende`?" }
      - { wert: 1, meldung: "Prüfe, ob die Suche bei Index 0 beginnt und erst **nach** der inneren Schleife getauscht wird." }
hinweise:
  - 'Die äußere Schleife bleibt wie in der Vorlesung. Neu ist: Der Suchbereich ist `data[0]` bis `data[ende]`, und getauscht wird mit `data[ende]`.'
  - 'Für das Maximum: Start mit `max = 0`, dann `j` von 1 bis `ende` einschließlich, umsetzen bei `data[j] > data[max]`.'
loesung: |
  **Ansatz:** Spiegelbild von Selectionsort. Statt des Minimums vorne suchen wir das Maximum und setzen es ans Ende des unsortierten Teils.
  ---
  ```java
  for (int i = 0; i < data.length - 1; i++) {
      int ende = data.length - 1 - i;
      int max = 0;
      for (int j = 1; j <= ende; j++) {
          if (data[j] > data[max]) {
              max = j;
          }
      }
      int swap = data[ende];
      data[ende] = data[max];
      data[max] = swap;
  }
  ```
  ---
  Probe mit `{6, 2, 9, 4, 1}`: `i = 0` holt die 9 ans Ende, `{6, 2, 1, 4, 9}`. `i = 1` holt die 6 auf Index 3, `{4, 2, 1, 6, 9}`. Dann die 4 auf Index 2 und die 2 auf Index 1. Ergebnis `{1, 2, 4, 6, 9}`.
```

```reflexion
frage: Selectionsort ruft exchange bei jedem nicht leeren Array genau data.length - 1 Mal auf, Bubblesort dagegen je nach Array gar nicht oder sehr oft. Wann könnte das ein Vorteil von Selectionsort sein?
antwort: |
  Wenn ein Tausch teuer ist. Bei `int`-Werten kostet ein Tausch kaum etwas. Man kann aber auch große Datensätze
  sortieren, etwa ganze Zeilen einer Tabelle mit vielen Einträgen. Dann ist das Umkopieren aufwändiger als ein
  Vergleich. Selectionsort kommt immer mit `n - 1` Tauschen aus, während Bubblesort im schlechtesten Fall rund
  `n · n / 2` Tausche braucht. Die Zahl der Vergleiche ist bei beiden gleich, rund `n · n / 2`. Genau diesen Vorteil
  nennen auch die Folien: Selectionsort ist besser, falls Vertauschungen sehr aufwändig sind.
```

## Insertionsort: einfügen wie bei Spielkarten

```aufgabe
id: so-in-check-kurzschluss
titel: Wann wird der rechte Teil ausgewertet?
niveau: 1
art: check
angabe: |
  Gegeben sind `int[] d = {4, 9};` und `int j = 1;`. Wie viele Arrayzugriffe der Form `d[...]` führt Java bei der
  Auswertung von `j > 0 && d[j] < d[j - 1]` aus? (Wiederholung:
  [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht))
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: '`j > 0` ist bei `j = 1` wahr. Dann muss Java auch den rechten Teil auswerten, um das Ergebnis zu kennen.'
      - wert: "1"
        meldung: 'Der rechte Teil `d[j] < d[j - 1]` liest zwei Werte: `d[1]` und `d[0]`.'
loesung: |
  `j > 0` ist `1 > 0`, also wahr. Das Ergebnis von `&&` hängt jetzt vom rechten Teil ab, also wertet Java ihn aus.
  ---
  Dabei liest es `d[1] = 9` und `d[0] = 4`, das sind zwei Zugriffe. `9 < 4` ist falsch, der ganze Ausdruck ist `false`.
```

Wie ordnest du Spielkarten, die du einzeln vom Tisch aufnimmst? Die Karten in deiner Hand sind schon geordnet.
Jede neue Karte schiebst du von rechts so weit nach links, bis die Karte links von ihr nicht größer ist. Dann ist
die Hand wieder geordnet, und du nimmst die nächste Karte. Das ist **Insertionsort**. Das englische Wort
*insertion* heißt Einfügen.

Im Array bilden die Werte ab Index 0 die „Hand“, also den **sortierten Teil**. Am Anfang besteht er nur aus
`data[0]`. Ein einzelner Wert ist immer sortiert. Der Wert `data[i]` ist die neue Karte. Sie wandert durch
Nachbartausche nach links, bis ihr linker Nachbar nicht mehr größer ist oder sie ganz vorne angekommen ist.

:::definition[Insertionsort]
**Insertionsort** sortiert ein Array in Durchläufen `i = 1, 2, …, data.length - 1`. Im Durchlauf `i` sind
`data[0]` bis `data[i - 1]` schon sortiert. Der Wert `data[i]` wird durch Tausche mit dem linken Nachbarn so weit
nach links geschoben, bis er am Anfang steht oder sein linker Nachbar nicht größer ist. Danach sind `data[0]`
bis `data[i]` sortiert.
:::

Der Code aus den Folien ist sehr kurz:

```java
private static void insertionSort(int[] data) {
    for (int i = 1; i < data.length; i++) {
        for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
            exchange(data, j, j - 1);
        }
    }
}
```

- **Zeile 2:** `i` beginnt bei **1**, nicht bei 0. Der Wert `data[0]` allein ist schon ein sortierter Teil. `i`
  läuft bis zum letzten Index `data.length - 1`, denn auch der letzte Wert muss eingefügt werden.
- **Zeile 3, Start:** `j` ist die aktuelle Position der neuen Karte. Sie beginnt bei `i`.
- **Zeile 3, Bedingung:** Die Schleife läuft, solange zwei Dinge gelten. Erstens `j > 0`: Es gibt noch einen
  linken Nachbarn. Zweitens `data[j] < data[j - 1]`: Der linke Nachbar ist echt größer. Wegen der
  Kurzschlussauswertung von `&&` wird `data[j - 1]` nur gelesen, wenn `j > 0` gilt.
- **Zeile 3, Schritt:** `j--` folgt der Karte, die gerade eine Stelle nach links gerückt ist.
- **Zeile 4:** Der Tausch mit dem linken Nachbarn.

Der wichtigste Unterschied zu Bubblesort und Selectionsort: Die innere Schleife hat **keine feste Länge**. Sie hört
auf, sobald die Karte ihren Platz gefunden hat. Steht die neue Karte schon richtig, läuft sie keinmal.

:::beispiel[Eine Karte einfügen]
Wir sortieren `data = {6, 2, 9, 4, 1}`. Die ersten Durchläufe haben `{2, 6, 9, 4, 1}` ergeben. Die Werte an den
Indizes 0 bis 2 sind sortiert. Jetzt kommt der Durchlauf `i = 3`, die neue Karte ist die 4.

|`j`|`j > 0`?|`data[j] < data[j-1]`?|Aktion|`data` danach|
|---|---|---|---|---|
|3|ja|ja (4<9)|tauschen|`{2,6,4,9,1}`|
|2|ja|ja (4<6)|tauschen|`{2,4,6,9,1}`|
|1|ja|nein (4<2)|Schleife endet|`{2,4,6,9,1}`|

Die 4 ist zwischen 2 und 6 angekommen. Die 1 am Ende wurde nicht angerührt, sie kommt erst im nächsten Durchlauf
an die Reihe.
:::

:::beispiel[Alle Durchläufe]
Das ganze Sortieren von `{6, 2, 9, 4, 1}`. Gezeigt ist das Array nach jedem Durchlauf der inneren Schleife.

|`i`|neue Karte|Tausche|`data` danach|sortierter Teil|
|---|---|---|---|---|
|1|2|1|`{2,6,9,4,1}`|Index 0 bis 1|
|2|9|0|`{2,6,9,4,1}`|Index 0 bis 2|
|3|4|2|`{2,4,6,9,1}`|Index 0 bis 3|
|4|1|4|`{1,2,4,6,9}`|alles|

Im Durchlauf `i = 2` steht die 9 schon richtig. Die Bedingung `9 < 6` ist sofort falsch, und das Array ändert sich
nicht. Im Durchlauf `i = 4` wandert die 1 bis ganz nach vorne. Dort beendet `j > 0` die Schleife.

Gezählt: Die Bedingung `data[j] < data[j - 1]` wurde `1 + 1 + 3 + 4 = 9`-mal ausgewertet, es gab 7 Tausche.
:::

```aufgabe
id: so-in-einfuegen
titel: Eine Karte einfügen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Der Code führt nur den Durchlauf `i = 4` von Insertionsort aus. Die Werte an den Indizes 0 bis 3 sind schon
  sortiert. Was gibt er aus?
teile:
  - typ: ausgabe
    code: |
      int[] data = {3, 5, 8, 9, 4, 7};
      int i = 4;
      for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
          int swap = data[j];
          data[j] = data[j - 1];
          data[j - 1] = swap;
      }
      System.out.println(Arrays.toString(data));
    loesung: |
      [3, 4, 5, 8, 9, 7]
    fehler:
      - wert: "[3, 5, 8, 4, 9, 7]"
        meldung: Die Schleife tauscht nicht nur einmal. Sie läuft weiter, solange der linke Nachbar der 4 größer ist.
      - wert: "[3, 4, 5, 7, 8, 9]"
        meldung: Es läuft nur ein Durchlauf, also wird nur die 4 eingefügt. Die 7 an Index 5 bleibt unberührt.
      - wert: "[4, 3, 5, 8, 9, 7]"
        meldung: 'Bei `j = 1` wird 4 mit 3 verglichen. `4 < 3` ist falsch, also endet die Schleife dort. Die 4 bleibt rechts von der 3.'
hinweise:
  - Die neue Karte ist `data[4] = 4`. Schiebe sie nach links, solange ihr linker Nachbar echt größer ist.
loesung: |
  **Ansatz:** Die 4 wandert nach links, bis ihr linker Nachbar nicht mehr größer ist.
  ---
  `j = 4`: 4 < 9, tauschen. `j = 3`: 4 < 8, tauschen. `j = 2`: 4 < 5, tauschen. `j = 1`: 4 < 3 ist falsch, Ende.
  ---
  Ausgabe `[3, 4, 5, 8, 9, 7]`. Die Indizes 0 bis 4 sind sortiert, die 7 wartet auf den nächsten Durchlauf.
```

:::merke[Insertionsort von Hand]
1. Links von `i` ist alles sortiert. Rechts von `i` ist noch **alles unverändert**, genau wie am Anfang.
2. Die neue Karte `data[i]` rückt mit Nachbartauschen nach links, solange ihr linker Nachbar **echt größer** ist.
3. Sie bleibt stehen bei einem gleich großen oder kleineren Nachbarn oder ganz vorne bei Index 0.
:::

:::achtung[Die Bedingungen in falscher Reihenfolge]
Jemand schreibt `for (int j = i; data[j] < data[j - 1] && j > 0; j--)`. Für `{4, 2}` passiert Folgendes: Bei
`i = 1` und `j = 1` ist `2 < 4`, also wird getauscht: `{2, 4}`. Dann ist `j = 0`, und die Bedingung liest zuerst
`data[0] < data[-1]`. Den Index -1 gibt es nicht, und das Programm bricht mit einer
`ArrayIndexOutOfBoundsException` ab. Die Grenzprüfung `j > 0` muss **links** von `&&` stehen. Nur dann schützt die
Kurzschlussauswertung vor dem unerlaubten Zugriff.
:::

:::achtung[Ein if statt der Schleifenbedingung]
Diese Fassung sortiert zwar richtig, verliert aber den Vorteil von Insertionsort:

```java
for (int j = i; j > 0; j--) {
    if (data[j] < data[j - 1]) {
        exchange(data, j, j - 1);
    }
}
```

Die Schleife hört nicht auf, wenn die Karte ihren Platz gefunden hat, sondern läuft immer bis `j = 1`. Bei
`{1, 2, 3, 4}` vergleicht sie `1 + 2 + 3 = 6`-mal statt 3-mal. Bei 1000 schon sortierten Werten wären es
499.500 statt 999 Vergleiche. Gerade das frühe Aufhören macht Insertionsort bei fast sortierten Daten schnell.
:::

```aufgabe
id: so-in-tausch-zahl
titel: Wie oft wird für eine Karte getauscht?
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Insertionsort ist bei `data = {1, 4, 6, 8, 2, 5}` angekommen, die Indizes 0 bis 3 sind sortiert. Wie oft wird im
  Durchlauf `i = 4` die Methode `exchange` aufgerufen?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: 'Die 2 wandert an 8, 6 und 4 vorbei. Bei der 1 ist `2 < 1` falsch, dort wird nicht mehr getauscht.'
      - wert: "1"
        meldung: Die innere Schleife tauscht so lange, bis der linke Nachbar nicht mehr größer ist, nicht nur einmal.
hinweise:
  - Die neue Karte ist die 2. Zähle, an wie vielen größeren Werten sie vorbeiwandert.
loesung: |
  **Ansatz:** Jeder Tausch schiebt die 2 an einem größeren Wert vorbei.
  ---
  Links von der 2 stehen 1, 4, 6 und 8. Größer als 2 sind 4, 6 und 8. Also 3 Tausche, danach steht die 2 rechts neben der 1: `{1, 2, 4, 6, 8, 5}`.
```

```aufgabe
id: so-in-trace
titel: Insertionsort komplett
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  `insertionSort` sortiert `data = {7, 3, 5, 8, 2, 6}`. Trag das Array nach jedem Durchlauf der inneren Schleife ein.
teile:
  - typ: trace
    spalten: ['data[0]', 'data[1]', 'data[2]', 'data[3]', 'data[4]', 'data[5]']
    zeilen: [vor dem Sortieren, nach i = 1, nach i = 2, nach i = 3, nach i = 4, nach i = 5]
    vorgabe: 1
    loesung: [[7, 3, 5, 8, 2, 6], [3, 7, 5, 8, 2, 6], [3, 5, 7, 8, 2, 6], [3, 5, 7, 8, 2, 6], [2, 3, 5, 7, 8, 6], [2, 3, 5, 6, 7, 8]]
    fehler:
      - wert: ["7", "3", "5", "8", "2", "6", "3", "7", "5", "8", "2", "6", "3", "5", "7", "8", "2", "6", "2", "3", "5", "7", "8", "6", "2", "3", "5", "7", "8", "6", "2", "3", "5", "6", "7", "8"]
        meldung: 'Im Durchlauf `i = 3` ist die neue Karte die 8. Ihr linker Nachbar 7 ist kleiner, also bleibt alles, wie es ist. Die 2 kommt erst bei `i = 4` an die Reihe.'
      - wert: ["7", "3", "5", "8", "2", "6", "3", "7", "5", "8", "2", "6", "3", "5", "7", "8", "2", "6", "2", "3", "5", "7", "8", "6", "2", "3", "5", "6", "7", "8", "2", "3", "5", "6", "7", "8"]
        meldung: 'Jeder Durchlauf fügt genau eine Karte ein, nämlich `data[i]`. Wenn eine Zeile unverändert bleibt, gehört sie trotzdem in die Tabelle.'
hinweise:
  - Im Durchlauf `i` ist `data[i]` die neue Karte. Alles rechts davon bleibt unverändert.
  - Schiebe die neue Karte nach links, bis ihr linker Nachbar nicht mehr größer ist.
gefuehrt:
  - text: 'Durchlauf `i = 1`: Die neue Karte ist die 3. Welcher Wert steht danach an Index 0?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '3 < 7, tauschen. Dann ist `j = 0`, Ende. Das Array ist `{3, 7, 5, 8, 2, 6}`.'
  - text: 'Durchlauf `i = 2`: Die neue Karte ist die 5. An welchem Index steht sie danach?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '5 < 7, tauschen. 5 < 3 ist falsch, Ende. Das Array ist `{3, 5, 7, 8, 2, 6}`.'
  - text: 'Durchlauf `i = 3`: Die neue Karte ist die 8. Wie oft wird getauscht?'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '8 < 7 ist sofort falsch. Das Array bleibt `{3, 5, 7, 8, 2, 6}`.'
  - text: 'Durchlauf `i = 4`: Die neue Karte ist die 2. Wie oft wird getauscht?'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 'Die 2 ist kleiner als 8, 7, 5 und 3 und wandert bis Index 0. Das Array ist `{2, 3, 5, 7, 8, 6}`.'
  - text: 'Durchlauf `i = 5`: Die 6 wandert an 8 und 7 vorbei und bleibt rechts von der 5 stehen. Wie sieht das Ergebnis aus?'
    erklaerung: '`{2, 3, 5, 6, 7, 8}`, das Array ist sortiert.'
loesung: |
  **Ansatz:** In jedem Durchlauf genau eine neue Karte einfügen und den Rest unverändert lassen.
  ---
  `i = 1`: `{3, 7, 5, 8, 2, 6}`. `i = 2`: `{3, 5, 7, 8, 2, 6}`. `i = 3`: Die 8 bleibt, `{3, 5, 7, 8, 2, 6}`.
  ---
  `i = 4`: Die 2 wandert nach vorne, `{2, 3, 5, 7, 8, 6}`. `i = 5`: Die 6 rückt zwei Plätze nach links, `{2, 3, 5, 6, 7, 8}`. Probe: sortiert.
```

```aufgabe
id: so-in-aussagen
titel: Was Insertionsort garantiert
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über `insertionSort` aus der Vorlesung.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Nach dem Durchlauf `i` enthalten `data[0]` bis `data[i]` genau die Werte, die am Anfang an den Indizes 0 bis `i` standen, nur sortiert.
        richtig: true
        erklaerung: Der Durchlauf `i` tauscht nur innerhalb der Indizes 0 bis `i`. Werte von weiter rechts kommen nicht hinein.
      - text: Nach dem ersten Durchlauf steht der kleinste Wert des ganzen Arrays an Index 0.
        richtig: false
        erklaerung: 'Der erste Durchlauf sortiert nur `data[0]` und `data[1]`. Bei `{5, 4, 1}` steht danach die 4 vorne, die 1 kommt erst im nächsten Durchlauf.'
      - text: Die Werte rechts von `data[i]` sind nach dem Durchlauf `i` noch genau so angeordnet wie am Anfang.
        richtig: true
        erklaerung: Bis zum Durchlauf `i` hat das Verfahren keinen Wert rechts von `i` angefasst.
      - text: Ist das Array schon aufsteigend sortiert, wird `exchange` kein einziges Mal aufgerufen.
        richtig: true
        erklaerung: 'Für jede neue Karte ist `data[j] < data[j - 1]` sofort falsch. Die innere Schleife läuft nie.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Probier die zweite Aussage mit `{5, 4, 1}`. Der erste Durchlauf schaut nur die ersten zwei Werte an.'
      - wert: [f, f, r, r]
        meldung: 'Verwechsle Insertionsort nicht mit Selectionsort. Insertionsort holt keine Werte von rechts, es sortiert nur die ersten `i + 1` Werte unter sich.'
hinweise:
  - Welche Indizes kann der Durchlauf `i` überhaupt verändern? `j` beginnt bei `i` und wird kleiner.
  - Unterscheide genau zwischen „die kleinsten Werte“ und „die ersten Werte, sortiert“.
loesung: |
  **Ansatz:** Der Durchlauf `i` arbeitet nur auf den Indizes 0 bis `i`, denn `j` startet bei `i` und läuft nach links.
  ---
  Daraus folgen Aussage 1 (die ersten `i + 1` Werte, sortiert) und Aussage 3 (rechts davon unverändert). Aussage 4 stimmt, weil bei sortierten Daten jede Bedingung sofort falsch ist.
  ---
  Aussage 2 ist falsch. Gegenbeispiel: `{5, 4, 1}` wird nach dem ersten Durchlauf zu `{4, 5, 1}`, der kleinste Wert steht noch hinten.
```

```aufgabe
id: so-in-zaehlen
titel: Tausche bei Insertionsort zählen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: Das Programm zählt die Tausche von Insertionsort. Was gibt es aus?
teile:
  - typ: ausgabe
    code: |
      int[] data = {3, 7, 1, 5, 2};
      int tausche = 0;
      for (int i = 1; i < data.length; i++) {
          for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
              int swap = data[j];
              data[j] = data[j - 1];
              data[j - 1] = swap;
              tausche++;
          }
      }
      System.out.println(tausche);
    loesung: |
      6
    fehler:
      - wert: "4"
        meldung: '4 ist die Zahl der Durchläufe. In einem Durchlauf kann die neue Karte an mehreren Werten vorbeiwandern.'
      - wert: "10"
        meldung: '10 wäre die Zahl der Tausche bei einem absteigend sortierten Array der Länge 5. Hier bleiben manche Karten früher stehen.'
hinweise:
  - Zähle für jede neue Karte, an wie vielen größeren Werten im sortierten Teil sie vorbeiwandert.
  - 'Die Durchläufe ergeben `{3, 7, 1, 5, 2}`, `{1, 3, 7, 5, 2}`, `{1, 3, 5, 7, 2}` und `{1, 2, 3, 5, 7}`.'
loesung: |
  **Ansatz:** Pro Durchlauf zählen, an wie vielen größeren Werten die neue Karte vorbeirückt.
  ---
  `i = 1`: Die 7 bleibt, 0 Tausche. `i = 2`: Die 1 wandert an 7 und 3 vorbei, 2 Tausche. `i = 3`: Die 5 an der 7 vorbei, 1 Tausch.
  ---
  `i = 4`: Die 2 an 7, 5 und 3 vorbei, 3 Tausche. Zusammen `0 + 2 + 1 + 3 = 6`.
```

```aufgabe
id: so-in-vergleiche-sortiert
titel: Insertionsort auf sortierten Daten
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  `insertionSort` bekommt ein Array der Länge 10, das schon aufsteigend sortiert ist, ohne gleiche Werte. Wie oft
  wird der Vergleich `data[j] < data[j - 1]` ausgewertet?
teile:
  - typ: zahl
    loesung: "10 - 1"
    fehler:
      - wert: "45"
        meldung: '45 wären die Vergleiche, wenn jede innere Schleife bis ganz nach vorne liefe. Bei sortierten Daten ist der erste Vergleich jedes Durchlaufs schon falsch.'
      - wert: "0"
        meldung: 'Die Bedingung wird in jedem Durchlauf einmal ausgewertet. Erst dadurch steht fest, dass die Karte schon richtig liegt.'
      - wert: "10"
        meldung: Die äußere Schleife beginnt bei `i = 1`, nicht bei 0. Es gibt also einen Durchlauf weniger als Werte.
hinweise:
  - Wie viele Durchläufe hat die äußere Schleife bei Länge 10?
  - Wie oft wird in einem Durchlauf verglichen, wenn die neue Karte schon größer ist als ihr linker Nachbar?
loesung: |
  **Ansatz:** Durchläufe zählen und pro Durchlauf die Vergleiche bestimmen.
  ---
  Die äußere Schleife läuft für `i = 1` bis 9, das sind 9 Durchläufe. In jedem gilt `j = i > 0`, also wird `data[j] < data[j - 1]` ausgewertet.
  ---
  Der Vergleich ist jedes Mal falsch, die innere Schleife endet sofort. Also genau 1 Vergleich pro Durchlauf, zusammen 9. Insertionsort braucht bei sortierten Daten nur so viele Vergleiche, wie das Array Werte hat, minus eins.
```

```aufgabe
id: so-in-absteigend-code
titel: Insertionsort absteigend
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Schreib `insertionSortAbsteigend(int[] data)`. Die Methode sortiert `data` mit Insertionsort **absteigend**, also
  vom größten zum kleinsten Wert, im Array selbst. `Arrays.sort` ist verboten. Vorbedingung: `data != null`.

  Beispiel: Aus `{2, 9, 4, 9, 1}` wird `{9, 9, 4, 2, 1}`.
teile:
  - typ: code
    vorlage: |
      public class EinfuegenAb {
          public static void insertionSortAbsteigend(int[] data) {
              // TODO
          }
      }
    musterloesung: |
      public class EinfuegenAb {
          public static void insertionSortAbsteigend(int[] data) {
              for (int i = 1; i < data.length; i++) {
                  for (int j = i; j > 0 && data[j] > data[j - 1]; j--) {
                      int swap = data[j];
                      data[j] = data[j - 1];
                      data[j - 1] = swap;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[] a = {2, 9, 4, 9, 1};", aufruf: "insertionSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{9, 9, 4, 2, 1}" }
      - { vorher: "int[] a = {1, 5};", aufruf: "insertionSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{5, 1}" }
      - { vorher: "int[] a = {};", aufruf: "insertionSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { vorher: "int[] a = {1, 2, 3, 4};", aufruf: "insertionSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{4, 3, 2, 1}", beschreibung: "neue Karte wandert jedes Mal ganz nach vorne" }
      - { vorher: "int[] a = {-3, 8, 0, -3, 5};", aufruf: "insertionSortAbsteigend(a)", ergebnis: "a", erwartet: "new int[]{8, 5, 0, -3, -3}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 4, meldung: "Wandert die neue Karte bis Index 0? Steht `j > 0` links vom `&&`, damit `data[j - 1]` bei `j = 0` nicht gelesen wird?" }
      - { wert: 1, meldung: "Für „absteigend“ rückt die neue Karte nach links, solange sie **größer** als ihr linker Nachbar ist." }
hinweise:
  - Übernimm das Gerüst von `insertionSort`. Nur das Vergleichszeichen in der Schleifenbedingung ändert sich.
  - 'Die Bedingung der inneren Schleife lautet dann `j > 0 && data[j] > data[j - 1]`.'
loesung: |
  **Ansatz:** Die neue Karte soll nach links rücken, solange ihr linker Nachbar **kleiner** ist. Dann stehen die großen Werte vorne.
  ---
  ```java
  for (int i = 1; i < data.length; i++) {
      for (int j = i; j > 0 && data[j] > data[j - 1]; j--) {
          int swap = data[j];
          data[j] = data[j - 1];
          data[j - 1] = swap;
      }
  }
  ```
  ---
  Probe mit `{1, 5}`: `i = 1`, `j = 1`, 5 > 1, Tausch, `{5, 1}`. Dann `j = 0`, Ende. Die zweite 9 in `{2, 9, 4, 9, 1}` bleibt hinter der ersten stehen, weil `9 > 9` falsch ist.
```

```aufgabe
id: so-in-einfuegen-code
titel: Einen Wert in einen sortierten Anfang einfügen
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Schreib `einfuegen(int[] a, int k)`. Vorbedingung: `a[0]` bis `a[k - 1]` sind aufsteigend sortiert, und
  `0 <= k < a.length`. Die Methode soll `a[k]` an die richtige Stelle in diesem Anfang bringen, sodass danach
  `a[0]` bis `a[k]` sortiert sind. Werte rechts von `k` bleiben unverändert.

  **Diesmal ohne Tausche:** Merke dir `a[k]` in einer Variable. Schiebe dann jeden größeren Wert links davon um
  einen Platz nach rechts und schreib den gemerkten Wert in die frei gewordene Lücke. So arbeitet man auch beim
  Einordnen von Karten: Man schiebt die größeren Karten zur Seite.

  Beispiel: Für `a = {2, 5, 8, 3, 1}` und `k = 3` ist danach `a = {2, 3, 5, 8, 1}`.
teile:
  - typ: code
    vorlage: |
      public class Einfuegen {
          public static void einfuegen(int[] a, int k) {
              // TODO
          }
      }
    musterloesung: |
      public class Einfuegen {
          public static void einfuegen(int[] a, int k) {
              int karte = a[k];
              int j = k;
              while (j > 0 && a[j - 1] > karte) {
                  a[j] = a[j - 1];
                  j--;
              }
              a[j] = karte;
          }
      }
    tests:
      - { vorher: "int[] a = {2, 5, 8, 3, 1};", aufruf: "einfuegen(a, 3)", ergebnis: "a", erwartet: "new int[]{2, 3, 5, 8, 1}" }
      - { vorher: "int[] a = {4, 6, 1};", aufruf: "einfuegen(a, 2)", ergebnis: "a", erwartet: "new int[]{1, 4, 6}", beschreibung: "neuer Wert ganz nach vorne" }
      - { vorher: "int[] a = {1, 3, 9, 2};", aufruf: "einfuegen(a, 2)", ergebnis: "a", erwartet: "new int[]{1, 3, 9, 2}", beschreibung: "Wert steht schon richtig, rechts bleibt alles" }
      - { vorher: "int[] a = {7};", aufruf: "einfuegen(a, 0)", ergebnis: "a", erwartet: "new int[]{7}", beschreibung: "k = 0" }
      - { vorher: "int[] a = {2, 4, 4, 6, 4};", aufruf: "einfuegen(a, 4)", ergebnis: "a", erwartet: "new int[]{2, 4, 4, 4, 6}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 2, meldung: "Der Wert muss bis Index 0 wandern können. Prüft deine Schleife `j > 0` vor dem Zugriff auf `a[j - 1]`?" }
      - { wert: 1, meldung: "Merke dir `a[k]` am Anfang. Beim Verschieben wird `a[k]` überschrieben, danach ist der Wert sonst verloren." }
hinweise:
  - 'Lege `int karte = a[k];` und `int j = k;` an. `j` ist die aktuelle Lücke.'
  - 'Solange `j > 0` und der Wert links der Lücke größer als `karte` ist: `a[j] = a[j - 1];` und `j--;`. Danach `a[j] = karte;`.'
loesung: |
  **Ansatz:** Statt die Karte mit jedem Nachbarn zu tauschen, schieben wir die größeren Werte um eins nach rechts. Am Ende setzen wir die Karte in die Lücke. Das spart pro Schritt zwei der drei Zuweisungen eines Tauschs.
  ---
  ```java
  int karte = a[k];
  int j = k;
  while (j > 0 && a[j - 1] > karte) {
      a[j] = a[j - 1];
      j--;
  }
  a[j] = karte;
  ```
  ---
  Probe mit `{2, 5, 8, 3, 1}` und `k = 3`: `karte = 3`. Die 8 rückt nach Index 3, die 5 nach Index 2, dann ist `2 > 3` falsch. Die 3 kommt an Index 1: `{2, 3, 5, 8, 1}`. Mit `einfuegen(a, i)` für `i = 1` bis `a.length - 1` entsteht ein vollständiger Insertionsort.
```

```reflexion
frage: Bubblesort und Selectionsort machen bei Länge n immer gleich viele Vergleiche. Bei Insertionsort hängt die Zahl vom Array ab. Woran liegt das, und welches Array ist für Insertionsort am günstigsten?
antwort: |
  Die inneren Schleifen von Bubblesort und Selectionsort haben feste Grenzen, die nur von `i` und der Länge abhängen.
  Bei Insertionsort steht in der Bedingung der inneren Schleife auch ein Vergleich der Werte. Die Schleife endet,
  sobald die neue Karte nicht mehr kleiner ist als ihr linker Nachbar. Am günstigsten ist ein schon sortiertes Array.
  Dann endet jede innere Schleife nach einem einzigen Vergleich, insgesamt sind es nur `n - 1` Vergleiche und kein
  Tausch. Am ungünstigsten ist ein absteigend sortiertes Array, bei dem jede Karte bis ganz nach vorne wandern muss.
```

## Zwischenzustände erkennen

```aufgabe
id: so-zw-check-durchlauf
titel: Ein Durchlauf zum Aufwärmen
niveau: 1
art: check
angabe: |
  Selectionsort bearbeitet `{5, 3, 1, 4}`. Wie sieht das Array nach dem ersten Durchlauf der inneren Schleife
  aus, also nach dem Tausch für `i = 0`? (Wiederholung:
  [19.3 Selectionsort: das Minimum nach vorne holen](/lernen/ep1/sortieren/selectionsort-das-minimum-nach-vorne-holen))
teile:
  - typ: auswahl
    optionen: ['`{1, 3, 5, 4}`', '`{3, 1, 4, 5}`', '`{3, 5, 1, 4}`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist der Zustand nach einem Durchlauf von **Bubblesort**. Selectionsort sucht das Minimum und tauscht es nach vorne.
      - wert: 2
        meldung: Das ist der Zustand nach dem ersten Durchlauf von **Insertionsort**. Selectionsort holt das Minimum, hier die 1, an den Index 0.
loesung: |
  Das Minimum von `{5, 3, 1, 4}` ist die 1 an Index 2. Sie tauscht mit der 5 an Index 0.
  ---
  Ergebnis `{1, 3, 5, 4}`. Nur die Plätze 0 und 2 haben sich geändert.
```

In allen drei vorliegenden zweiten TUWEL-Tests aus dem Wintersemester 2021/22 kam eine Frage in dieser Form vor.
Gegeben sind der Code eines Verfahrens aus
der Vorlesung und eine Markierung „Zeile A“ direkt nach der inneren Schleife. Dazu gibt es eine
**Ausgangsbelegung**, also das Array vor dem Sortieren. Zu jeder von vier weiteren Belegungen sollst du entscheiden:
Kann diese Belegung an Zeile A auftreten, also nach irgendeinem Durchlauf der inneren Schleife?

Eine Belegung ist **möglich**, wenn sie nach dem ersten, zweiten oder einem späteren Durchlauf genau so im Array
steht. Sie ist **unmöglich**, wenn sie nach keinem einzigen Durchlauf so aussieht. Weil die Verfahren keinen Zufall
enthalten, gibt es für eine Ausgangsbelegung genau eine Folge von Zwischenzuständen. Du musst diese Folge also nur
ausrechnen und vergleichen.

:::merke[Das sichere Vorgehen]
1. Schreib die Ausgangsbelegung auf.
2. Führe das Verfahren Durchlauf für Durchlauf aus und notiere das Array nach **jedem** Durchlauf der inneren
   Schleife. Bei Länge 6 sind das 5 Zeilen.
3. Eine Belegung ist genau dann möglich, wenn sie in dieser Liste vorkommt.
:::

Damit du nicht jedes Mal alles ausrechnen musst, helfen **Fingerabdrücke**. Das sind Eigenschaften, die jeder
Zwischenzustand eines Verfahrens haben muss. Fehlt eine solche Eigenschaft, ist die Belegung sofort unmöglich.

|Verfahren|Fingerabdruck nach `k` Durchläufen|
|---|---|
|Bubblesort|Die `k` größten Werte stehen sortiert ganz rechts. |
|Selectionsort|Die `k` kleinsten Werte stehen sortiert ganz links. |
|Insertionsort|Links stehen die ersten `k + 1` Werte der Ausgangsbelegung, sortiert. Rechts davon ist alles unverändert. |

Ein Fingerabdruck **schließt aus**, er **beweist** aber nicht. Bei Bubblesort und Selectionsort kann eine Belegung
den Fingerabdruck haben und trotzdem unmöglich sein. Dann hilft nur das Ausrechnen. Bei Insertionsort ist der
Fingerabdruck dagegen vollständig: Er legt den Zustand nach `k` Durchläufen genau fest.

:::beispiel[Bubblesort: vier Belegungen prüfen]
Ausgangsbelegung `{4, 8, 1, 6, 3, 7}`. Wir rechnen die Durchläufe aus:

|Durchlauf|Array danach|
|---|---|
|1|`{4,1,6,3,7,8}`|
|2|`{1,4,3,6,7,8}`|
|3|`{1,3,4,6,7,8}`|
|4|`{1,3,4,6,7,8}`|
|5|`{1,3,4,6,7,8}`|

Jetzt die vier Belegungen:

1. `{1, 4, 3, 6, 7, 8}`: steht nach Durchlauf 2 in der Liste. **Möglich.**
2. `{4, 1, 3, 6, 7, 8}`: Der Fingerabdruck passt, denn 7 und 8 stehen rechts. Trotzdem steht die Belegung nirgends
   in der Liste. Nach Durchlauf 1 steht die 6 noch vor der 3, nach Durchlauf 2 steht die 1 schon vorne. **Unmöglich.**
3. `{4, 1, 6, 3, 8, 7}`: Die 8 steht nicht ganz rechts. Schon nach dem ersten Durchlauf muss sie dort stehen.
   **Unmöglich**, das zeigt der Fingerabdruck ohne Rechnung.
4. `{1, 3, 4, 6, 7, 8}`: das fertige Array, nach Durchlauf 3, 4 und 5. **Möglich.**
:::

:::beispiel[Insertionsort: der Fingerabdruck genügt]
Ausgangsbelegung `{8, 3, 7, 2, 6, 4}`. Bei Insertionsort prüfst du für jede Belegung: Gibt es ein `k`, sodass links
die ersten `k + 1` Werte der Ausgangsbelegung sortiert stehen und rechts alles unverändert ist?

1. `{3, 7, 8, 2, 6, 4}`: Die ersten drei Werte der Ausgangsbelegung sind 8, 3, 7. Sortiert ergibt das 3, 7, 8.
   Rechts steht 2, 6, 4, genau wie am Anfang. Das passt für `k = 2`. **Möglich.**
2. `{2, 3, 7, 8, 4, 6}`: Links passt es mit den ersten vier Werten 8, 3, 7, 2, sortiert 2, 3, 7, 8. Rechts müsste
   aber 6, 4 stehen wie am Anfang, nicht 4, 6. **Unmöglich.**
3. `{2, 3, 4, 8, 6, 7}`: Vorne stehen die drei kleinsten Werte. Das ist der Fingerabdruck von Selectionsort, nicht
   von Insertionsort. Die ersten drei Werte der Ausgangsbelegung sind 8, 3, 7, und die 2 und die 4 waren nicht dabei.
   Für kein `k` passt es. **Unmöglich.**
4. `{3, 8, 7, 2, 6, 4}`: Die ersten zwei Werte 8, 3 sortiert, der Rest unverändert, `k = 1`. **Möglich.**
:::

```aufgabe
id: so-zw-verfahren
titel: Welches Verfahren war das?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Verfahren sortiert `{8, 3, 5, 1, 6, 2}`. Nach den ersten drei Durchläufen der inneren Schleife steht im Array:

  - nach Durchlauf 1: `{1, 3, 5, 8, 6, 2}`
  - nach Durchlauf 2: `{1, 2, 5, 8, 6, 3}`
  - nach Durchlauf 3: `{1, 2, 3, 8, 6, 5}`

  Welches Verfahren aus der Vorlesung war das?
teile:
  - typ: auswahl
    optionen: [Bubblesort, Selectionsort, Insertionsort]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Nach dem ersten Durchlauf von Bubblesort müsste der größte Wert, die 8, ganz rechts stehen.
      - wert: 2
        meldung: 'Insertionsort sortiert im ersten Durchlauf nur die ersten zwei Werte 8 und 3. Danach stünde `{3, 8, 5, 1, 6, 2}` im Array.'
hinweise:
  - Schau, was nach jedem Durchlauf vorne und hinten steht.
loesung: |
  **Ansatz:** Mit den Fingerabdrücken vergleichen.
  ---
  Nach jedem Durchlauf kommt vorne der nächstkleinere Wert dazu: 1, dann 1 und 2, dann 1, 2 und 3. Die 8 bleibt in der Mitte stehen.
  ---
  Das passt nur zu Selectionsort. Probe: Im ersten Durchlauf tauscht die 1 mit der 8, im zweiten die 2 mit der 3, im dritten die 3 mit der 5.
```

:::achtung[Insertionsort mit Selectionsort verwechselt]
Ausgangsbelegung `{3, 6, 2, 7, 5, 1}`. Viele halten `{2, 3, 6, 7, 5, 1}` für unmöglich, weil die 1 noch ganz hinten
steht. Bei **Insertionsort** ist genau das aber richtig: Nach dem Durchlauf `i = 2` sind die ersten drei Werte
3, 6, 2 sortiert, und die 1 wartet noch auf ihren Durchlauf. Bei **Selectionsort** wäre die Belegung dagegen
unmöglich, denn dort steht schon nach dem ersten Durchlauf die 1 vorne. Frag dich immer zuerst: Holt das
Verfahren die kleinsten Werte nach vorne, oder sortiert es nur den Anfang?
:::

:::achtung[Ein Durchlauf, der nichts ändert]
Ausgangsbelegung `{3, 6, 2, 7, 5, 1}` bei Insertionsort. Im ersten Durchlauf ist die 6 die neue Karte, und `6 < 3` ist
falsch. Nach diesem Durchlauf steht im Array also wieder `{3, 6, 2, 7, 5, 1}`. Die **Ausgangsbelegung selbst** ist
hier eine mögliche Belegung an Zeile A. Wer sie automatisch als „unmöglich, das ist ja der Anfang“ ankreuzt,
verliert den Punkt. Dasselbe passiert bei Selectionsort, wenn das Minimum schon vorne steht, und bei Bubblesort,
wenn ein Durchlauf nichts tauscht.
:::

```aufgabe
id: so-zw-insertion-einfach
titel: Insertionsort, vier Belegungen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  `insertionSort` aus der Vorlesung bekommt die Ausgangsbelegung `{5, 1, 4, 2, 7, 3}`. Kann die jeweilige Belegung
  nach irgendeinem Durchlauf der inneren Schleife auftreten?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`{1, 4, 5, 2, 7, 3}`'
        richtig: true
        erklaerung: 'Die ersten drei Werte 5, 1, 4 sortiert, der Rest 2, 7, 3 unverändert. Das ist der Zustand nach `i = 2`.'
      - text: '`{1, 2, 4, 5, 7, 3}`'
        richtig: true
        erklaerung: 'Die ersten vier Werte sortiert, der Rest 7, 3 unverändert: nach `i = 3`. Auch nach `i = 4`, weil die 7 dort stehen bleibt.'
      - text: '`{1, 2, 4, 5, 3, 7}`'
        richtig: false
        erklaerung: 'Links stimmen die ersten vier Werte, aber rechts müsste 7, 3 stehen. Insertionsort hat die Werte rechts davon noch nicht angefasst.'
      - text: '`{1, 5, 2, 4, 7, 3}`'
        richtig: false
        erklaerung: 'Für `k = 1` müsste rechts 4, 2, 7, 3 stehen, nicht 2, 4, 7, 3. Für größere `k` ist der Anfang nicht sortiert.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Prüfe bei Insertionsort immer auch den rechten Teil. Er muss genau so aussehen wie in der Ausgangsbelegung.'
      - wert: [r, f, f, f]
        meldung: 'Eine Belegung kann nach mehreren Durchläufen gleich aussehen. Was passiert im Durchlauf `i = 4` mit der 7?'
hinweise:
  - 'Suche für jede Belegung ein `k`: Links die ersten `k + 1` Werte der Ausgangsbelegung sortiert, rechts alles wie am Anfang.'
loesung: |
  **Ansatz:** Fingerabdruck von Insertionsort. Er ist hier vollständig, das Prüfen genügt.
  ---
  Die ersten Zustände sind `{1, 5, 4, 2, 7, 3}` und `{1, 4, 5, 2, 7, 3}`. Danach folgt zweimal `{1, 2, 4, 5, 7, 3}` und zuletzt `{1, 2, 3, 4, 5, 7}`.
  ---
  Belegungen 1 und 2 stehen in der Liste, richtig. Belegungen 3 und 4 haben rechts eine veränderte Reihenfolge, falsch.
```

```aufgabe
id: so-zw-bubble-rf
titel: Bubblesort im Quizformat
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: nach TUWEL-Test zur Vorbereitung (WS 2021), Frage 8 (abgewandelt)
angabe: |
  Gegeben ist `bubbleSort` aus der Vorlesung. Die Markierung „Zeile A“ steht direkt nach der inneren Schleife.
  Ausgangsbelegung: `data = {7, 2, 6, 1, 5, 3}`. Kann die jeweilige Belegung von `data` an Zeile A auftreten?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`{2, 6, 1, 5, 3, 7}`'
        richtig: true
        erklaerung: Das ist der Zustand nach dem ersten Durchlauf.
      - text: '`{2, 1, 5, 3, 6, 7}`'
        richtig: true
        erklaerung: Das ist der Zustand nach dem zweiten Durchlauf.
      - text: '`{2, 1, 3, 5, 6, 7}`'
        richtig: false
        erklaerung: 'Der Fingerabdruck passt, aber im dritten Durchlauf tauscht schon das erste Paar 2 und 1. Danach steht `{1, 2, 3, 5, 6, 7}` im Array.'
      - text: '`{1, 2, 6, 5, 3, 7}`'
        richtig: false
        erklaerung: 'Nach dem zweiten Durchlauf müssten 6 und 7 rechts stehen. Und nach dem ersten Durchlauf kann die 1 nicht schon vorne sein, sie rückt pro Durchlauf nur einen Platz.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Bei der dritten Belegung passt der Fingerabdruck, aber ein Fingerabdruck beweist nichts. Rechne den dritten Durchlauf aus.'
      - wert: [r, f, f, f]
        meldung: 'Rechne den zweiten Durchlauf ab `{2, 6, 1, 5, 3, 7}` noch einmal Paar für Paar.'
hinweise:
  - Rechne die Durchläufe aus und schreib jeden Zwischenzustand auf.
  - Vergleiche dann jede Belegung Wert für Wert mit deiner Liste.
gefuehrt:
  - text: 'Durchlauf 1 auf `{7, 2, 6, 1, 5, 3}`: Die 7 wandert ganz nach rechts. Welcher Wert steht danach an Index 2?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Ergebnis `{2, 6, 1, 5, 3, 7}`. An Index 2 steht die 1.'
  - text: 'Durchlauf 2: Die 6 wandert bis vor die 7. Welcher Wert steht danach an Index 1?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '2 und 6 bleiben, dann tauscht die 6 mit 1, 5 und 3. Ergebnis `{2, 1, 5, 3, 6, 7}`.'
  - text: 'Durchlauf 3: Welcher Wert steht danach an Index 0?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Gleich das erste Paar 2 und 1 tauscht. Danach tauschen 5 und 3. Ergebnis `{1, 2, 3, 5, 6, 7}`, sortiert.'
  - text: Welche der vier Belegungen stehen in der Liste der Zwischenzustände?
    erklaerung: 'Die ersten beiden. `{2, 1, 3, 5, 6, 7}` kommt nicht vor, weil die 2 und die 1 im selben Durchlauf getauscht werden wie die 5 und die 3.'
loesung: |
  **Ansatz:** Alle Zwischenzustände ausrechnen und vergleichen.
  ---
  Durchlauf 1: `{2, 6, 1, 5, 3, 7}`. Durchlauf 2: `{2, 1, 5, 3, 6, 7}`. Ab Durchlauf 3: `{1, 2, 3, 5, 6, 7}`.
  ---
  Richtig, richtig, falsch, falsch. Die dritte Belegung ist die Falle: Sie hat den Fingerabdruck, kommt aber nie vor.
```

```aufgabe
id: so-zw-selection-rf
titel: Selectionsort im Quizformat
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: nach TUWEL-Test 2 (WS 2021, 20.01.2022), Frage 8 (abgewandelt)
angabe: |
  Gegeben ist `selectionSort` aus der Vorlesung. Die Markierung „Zeile A“ steht direkt nach dem Aufruf von
  `exchange`. Ausgangsbelegung: `data = {3, 6, 2, 7, 5, 1}`. Kann die jeweilige Belegung an Zeile A auftreten?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`{1, 6, 2, 7, 5, 3}`'
        richtig: true
        erklaerung: Durchlauf 1 tauscht die 3 an Index 0 mit dem Minimum 1 an Index 5.
      - text: '`{1, 2, 6, 7, 3, 5}`'
        richtig: false
        erklaerung: 'Nach Durchlauf 2 steht `{1, 2, 6, 7, 5, 3}` im Array. Selectionsort ändert pro Durchlauf nur zwei Plätze, die 3 und die 5 bleiben dabei unberührt.'
      - text: '`{2, 3, 6, 7, 5, 1}`'
        richtig: false
        erklaerung: 'Das ist ein Zustand von Insertionsort. Bei Selectionsort steht nach dem ersten Durchlauf die 1 vorne und bleibt dort.'
      - text: '`{1, 2, 3, 5, 7, 6}`'
        richtig: true
        erklaerung: 'Das ist der Zustand nach Durchlauf 4. Erst der letzte Durchlauf tauscht 7 und 6.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Bei Selectionsort stehen die Werte rechts vom sortierten Teil nicht in beliebiger Reihenfolge. Jeder Durchlauf tauscht genau zwei Plätze.'
      - wert: [r, f, r, r]
        meldung: 'Die dritte Belegung hat die 1 noch hinten. Was holt Selectionsort im ersten Durchlauf nach vorne?'
hinweise:
  - Rechne alle fünf Durchläufe aus. In jedem Durchlauf ändern sich höchstens zwei Plätze.
  - 'Die Zustände beginnen mit `{1, 6, 2, 7, 5, 3}` und `{1, 2, 6, 7, 5, 3}`.'
loesung: |
  **Ansatz:** Zwischenzustände ausrechnen: Minimum ab `i` suchen, mit `data[i]` tauschen.
  ---
  Durchlauf 1: `{1, 6, 2, 7, 5, 3}`. Durchlauf 2: `{1, 2, 6, 7, 5, 3}`. Durchlauf 3: `{1, 2, 3, 7, 5, 6}`. Durchlauf 4: `{1, 2, 3, 5, 7, 6}`. Durchlauf 5: `{1, 2, 3, 5, 6, 7}`.
  ---
  Belegungen 1 und 4 kommen vor, 2 und 3 nicht. Antwort: richtig, falsch, falsch, richtig.
```

```aufgabe
id: so-zw-wann
titel: Wann tritt die Belegung auf?
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  `selectionSort` aus der Vorlesung sortiert `{2, 7, 4, 9, 1, 5}`. Betrachte die Belegung `{1, 2, 4, 9, 7, 5}`.
teile:
  - typ: zahl
    label: Nach dem wievielten Durchlauf der inneren Schleife tritt sie zum ersten Mal auf?
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: 'Nach Durchlauf 1 steht `{1, 7, 4, 9, 2, 5}` im Array. Im zweiten Durchlauf tauscht die 2 mit der 7, und schon ist die Belegung erreicht.'
  - typ: zahl
    label: 'Nach wie vielen verschiedenen Durchläufen steht genau diese Belegung im Array? Zähle jeden Durchlauf, nach dem sie dort steht.'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Schau dir den Durchlauf `i = 2` an. Die 4 ist dort schon das Minimum des Rests. Was ändert der Tausch?'
      - wert: "3"
        meldung: '3 ist die Nummer des letzten Durchlaufs, nach dem die Belegung dasteht. Gefragt ist, nach wie vielen Durchläufen sie dasteht: nach Durchlauf 2 und nach Durchlauf 3.'
hinweise:
  - Rechne die Durchläufe aus und schreib jeden Zustand auf.
  - Achte auf einen Durchlauf, in dem das Minimum schon an der Stelle `i` steht.
loesung: |
  **Ansatz:** Alle Durchläufe ausrechnen und die Belegung in der Liste suchen.
  ---
  Durchlauf 1 (`i = 0`): Die 1 kommt nach vorne, `{1, 7, 4, 9, 2, 5}`. Durchlauf 2 (`i = 1`): Die 2 tauscht mit der 7, `{1, 2, 4, 9, 7, 5}`.
  ---
  Durchlauf 3 (`i = 2`): Das Minimum ab Index 2 ist die 4 an Index 2, der Tausch ändert nichts. Die Belegung steht also nach Durchlauf 2 **und** 3 im Array. Erste Antwort 2, zweite Antwort 2.
```

```aufgabe
id: so-zw-gemischt
titel: Drei Verfahren, eine Ausgangsbelegung
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Die Ausgangsbelegung ist jedes Mal `{2, 7, 4, 9, 1, 5}`. Beurteile, ob die Belegung nach irgendeinem Durchlauf der
  inneren Schleife des genannten Verfahrens auftreten kann.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Bubblesort: `{2, 4, 7, 1, 5, 9}`'
        richtig: true
        erklaerung: 'Erster Durchlauf: 2/7 bleiben, 7/4 tauschen, 7/9 bleiben, 9/1 und 9/5 tauschen.'
      - text: 'Selectionsort: `{2, 7, 4, 9, 1, 5}`'
        richtig: false
        erklaerung: 'Schon der erste Durchlauf holt die 1 an Index 0, und dort bleibt sie. Die Ausgangsbelegung kehrt nie zurück.'
      - text: 'Insertionsort: `{2, 7, 4, 9, 1, 5}`'
        richtig: true
        erklaerung: 'Im ersten Durchlauf ist die 7 die neue Karte, und `7 < 2` ist falsch. Das Array bleibt unverändert.'
      - text: 'Bubblesort: `{2, 4, 1, 7, 5, 9}`'
        richtig: false
        erklaerung: 'Nach dem zweiten Durchlauf steht `{2, 4, 1, 5, 7, 9}` im Array, die 7 ist an der 5 vorbei. Die Belegung passt zu keinem Durchlauf.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Bei Selectionsort ist die Ausgangsbelegung nur dann noch einmal möglich, wenn das Minimum schon vorne steht. Steht die 1 hier vorne?'
      - wert: [r, f, f, f]
        meldung: 'Ein Durchlauf kann das Array unverändert lassen. Welche Karte fügt Insertionsort im ersten Durchlauf ein?'
      - wert: [r, f, r, r]
        meldung: 'Die vierte Belegung hat den Fingerabdruck von Bubblesort, denn die 9 steht rechts. Rechne den zweiten Durchlauf trotzdem aus.'
hinweise:
  - Prüfe zuerst den Fingerabdruck des genannten Verfahrens. Wo er passt, rechne nach.
  - 'Denk an Durchläufe, die nichts ändern: Steht die neue Karte schon richtig, oder steht das Minimum schon vorne?'
loesung: |
  **Ansatz:** Für jedes Verfahren die Zwischenzustände bestimmen, nur so weit wie nötig.
  ---
  Bubblesort: `{2, 4, 7, 1, 5, 9}`, dann `{2, 4, 1, 5, 7, 9}`, dann `{2, 1, 4, 5, 7, 9}` und `{1, 2, 4, 5, 7, 9}`. Aussage 1 richtig, Aussage 4 falsch.
  ---
  Selectionsort: Der erste Durchlauf ergibt `{1, 7, 4, 9, 2, 5}`, und die 1 bleibt vorne. Aussage 2 falsch. Insertionsort: Der erste Durchlauf ändert nichts, Aussage 3 richtig.
```

```aufgabe
id: so-zw-code
titel: Den Zustand nach k Durchläufen berechnen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Schreib `bubbleZustand(int[] data, int k)`. Die Methode liefert ein **neues** Array mit der Belegung, die
  `bubbleSort` aus der Vorlesung nach `k` Durchläufen der inneren Schleife hätte. `data` selbst darf sich nicht
  verändern. Kopiere dazu `data` mit einer eigenen Schleife und führe auf der Kopie die ersten `k` Durchläufe aus.
  `clone`, `System.arraycopy` und `Arrays.copyOf` sind wie im Programmiertest verboten.

  Vorbedingung: `data != null` und `0 <= k <= data.length - 1`.

  Beispiel: `bubbleZustand(new int[]{5, 1, 4, 2, 6, 3}, 2)` liefert `{1, 2, 4, 3, 5, 6}`.
teile:
  - typ: code
    vorlage: |
      public class Zustand {
          public static int[] bubbleZustand(int[] data, int k) {
              return data; // TODO
          }
      }
    musterloesung: |
      public class Zustand {
          public static int[] bubbleZustand(int[] data, int k) {
              int[] kopie = new int[data.length];
              for (int i = 0; i < data.length; i++) {
                  kopie[i] = data[i];
              }
              for (int i = 0; i < k; i++) {
                  for (int j = 0; j < kopie.length - i - 1; j++) {
                      if (kopie[j] > kopie[j + 1]) {
                          int swap = kopie[j];
                          kopie[j] = kopie[j + 1];
                          kopie[j + 1] = swap;
                      }
                  }
              }
              return kopie;
          }
      }
    tests:
      - { aufruf: "bubbleZustand(new int[]{5, 1, 4, 2, 6, 3}, 2)", erwartet: "new int[]{1, 2, 4, 3, 5, 6}" }
      - { aufruf: "bubbleZustand(new int[]{3, 2, 1}, 1)", erwartet: "new int[]{2, 1, 3}" }
      - { aufruf: "bubbleZustand(new int[]{9, 4, 7}, 0)", erwartet: "new int[]{9, 4, 7}", beschreibung: "k = 0: unverändert" }
      - { vorher: "int[] a = {6, 1, 5};", aufruf: "bubbleZustand(a, 2)", ergebnis: "a", erwartet: "new int[]{6, 1, 5}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "bubbleZustand(new int[]{8, 3, 5, 1, 6, 2}, 3)", erwartet: "new int[]{1, 3, 2, 5, 6, 8}", versteckt: true }
    regeln: { keineArrayKopie: true, verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 4, meldung: "Das Original hat sich verändert. Sortierst du vielleicht direkt in `data` statt in einer Kopie? Eine Zuweisung `int[] kopie = data;` kopiert nur die Referenz." }
      - { wert: 1, meldung: "Führe genau `k` Durchläufe aus: Die äußere Schleife läuft für `i = 0` bis `k - 1`, die innere wie in `bubbleSort`." }
hinweise:
  - 'Zuerst `int[] kopie = new int[data.length];` und eine Schleife, die jeden Wert einzeln überträgt.'
  - 'Dann das Gerüst von `bubbleSort` auf `kopie`, aber mit der äußeren Bedingung `i < k`.'
loesung: |
  **Ansatz:** Zwei Schritte. Erst eine echte Kopie anlegen, dann auf ihr `k` Durchläufe von Bubblesort ausführen.
  ---
  ```java
  int[] kopie = new int[data.length];
  for (int i = 0; i < data.length; i++) {
      kopie[i] = data[i];
  }
  for (int i = 0; i < k; i++) {
      for (int j = 0; j < kopie.length - i - 1; j++) {
          if (kopie[j] > kopie[j + 1]) {
              int swap = kopie[j];
              kopie[j] = kopie[j + 1];
              kopie[j + 1] = swap;
          }
      }
  }
  return kopie;
  ```
  ---
  Probe mit `{3, 2, 1}` und `k = 1`: Der eine Durchlauf ergibt `{2, 1, 3}`. Mit dieser Methode kannst du jede Quizfrage zu Bubblesort selbst nachprüfen: Rufe sie für `k = 1` bis `n - 1` auf und vergleiche.
```

```reflexion
frage: Warum genügt bei Insertionsort der Fingerabdruck, um eine Belegung als möglich zu erkennen, bei Bubblesort aber nicht?
antwort: |
  Bei Insertionsort steht nach dem Durchlauf `i` genau fest, was im Array steht: links die ersten `i + 1` Werte der
  Ausgangsbelegung in sortierter Reihenfolge, rechts alles unverändert. Mehr Spielraum gibt es nicht. Wer das prüft,
  hat den ganzen Zustand geprüft. Bei Bubblesort sagt der Fingerabdruck nur etwas über den rechten Teil, die größten
  Werte. Wie die übrigen Werte links davon angeordnet sind, hängt davon ab, welche Paare in den bisherigen Durchläufen
  getauscht wurden. Dafür gibt es keine einfache Regel, und man muss die Durchläufe nachrechnen.
```

## Stabilität: gleiche Schlüssel behalten ihre Reihenfolge

```aufgabe
id: so-st-check-gleich
titel: Wird bei Gleichstand getauscht?
niveau: 1
art: check
angabe: |
  In `bubbleSort` lautet die Bedingung `data[j] > data[j + 1]`. Gerade gilt `data[j] = 4` und `data[j + 1] = 4`.
  Wird getauscht? (Wiederholung: [19.2 Bubblesort: benachbarte Werte vertauschen](/lernen/ep1/sortieren/bubblesort-benachbarte-werte-vertauschen))
teile:
  - typ: auswahl
    optionen: ['nein', 'ja']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`4 > 4` heißt „4 ist echt größer als 4“. Das ist falsch, also wird nicht getauscht.'
loesung: |
  `4 > 4` ist falsch, denn gleich ist nicht größer.
  ---
  Gleiche Nachbarn werden also nicht getauscht. Diese Kleinigkeit entscheidet gleich über die Stabilität.
```

Bisher haben wir nur Zahlen sortiert. Zwei gleiche Zahlen sind ununterscheidbar, es ist egal, welche 4 vorne steht.
In der Praxis sortiert man aber meist **Datensätze**: zusammengehörige Angaben wie Name und Gruppennummer einer
Person. Sortiert wird nach einer Angabe, dem **Schlüssel**. Die übrigen Angaben wandern mit.

Ein Beispiel: Eine Liste von Kursteilnehmern soll nach Übungsgruppe geordnet werden. Der Schlüssel ist die
Gruppennummer. Lea und Ben sind beide in Gruppe 2. Ihre Schlüssel sind gleich, aber es sind verschiedene Menschen.
Jetzt ist es nicht mehr egal, wer nach dem Sortieren vorne steht.

:::definition[Stabiles Sortierverfahren]
Ein Sortierverfahren heißt **stabil**, wenn Datensätze mit **gleichem Schlüssel** nach dem Sortieren in derselben
Reihenfolge stehen wie vorher. Stand Lea vor Ben und haben beide den Schlüssel 2, dann steht nach dem Sortieren mit
einem stabilen Verfahren Lea weiterhin vor Ben.

Ein Verfahren heißt **nicht stabil** (oder instabil), wenn es mindestens eine Eingabe gibt, bei der zwei
Datensätze mit gleichem Schlüssel ihre Reihenfolge tauschen.
:::

**Beispiel:** Die Liste (Gruppe, Name) lautet: (2, Lea), (1, Omar), (2, Ben), (3, Mia), (1, Ida). Stabil nach Gruppe
sortiert ergibt das (1, Omar), (1, Ida), (2, Lea), (2, Ben), (3, Mia). Omar stand vor Ida und Lea vor Ben, das
bleibt so.

**Nicht-Beispiel:** Das Ergebnis (1, Omar), (1, Ida), (2, Ben), (2, Lea), (3, Mia) ist auch nach Gruppen sortiert.
Es kann aber **nicht** von einem stabilen Verfahren stammen, denn Ben steht jetzt vor Lea.

**Wozu braucht man das?** Für das Sortieren nach zwei Merkmalen. Soll die Liste nach Gruppe sortiert sein und
innerhalb jeder Gruppe alphabetisch, dann sortiert man zuerst nach Namen und danach **stabil** nach Gruppe. Die
alphabetische Reihenfolge innerhalb einer Gruppe überlebt den zweiten Schritt nur, wenn das Verfahren stabil ist.

```aufgabe
id: so-st-definition
titel: Was heißt stabil?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Welche Aussage beschreibt ein **stabiles** Sortierverfahren?
teile:
  - typ: auswahl
    optionen:
      - Datensätze mit gleichem Schlüssel stehen nach dem Sortieren in derselben Reihenfolge wie vorher.
      - Das Verfahren sortiert jedes Array richtig, ohne abzustürzen.
      - Das Verfahren braucht für jedes Array gleich viele Vergleiche.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist einfach „korrekt“. Auch ein instabiles Verfahren wie Selectionsort sortiert jedes Array richtig. Stabilität betrifft nur gleiche Schlüssel.'
      - wert: 2
        meldung: 'Das betrifft die Laufzeit. Selectionsort macht immer gleich viele Vergleiche und ist trotzdem nicht stabil.'
hinweise:
  - Stabilität ist nur dann eine Frage, wenn zwei Datensätze den gleichen Schlüssel haben.
loesung: |
  **Ansatz:** Stabilität betrifft gleiche Schlüssel.
  ---
  Stabil heißt: Gleiche Schlüssel behalten ihre relative Reihenfolge. Korrektheit und Laufzeit sind andere Eigenschaften, die mit Stabilität nichts zu tun haben.
```

### Datensätze ohne eigene Klassen: parallele Arrays

Wie man in Java eigene Datentypen für Datensätze baut, gehört zur Objektorientierung. Die Folien zum Sortieren
verweisen dafür auf später. Wir behelfen uns mit **parallelen
Arrays**: zwei Arrays gleicher Länge, deren Plätze mit gleichem Index zusammengehören. `gruppe[2]` und `name[2]`
gehören zur selben Person. Beim Sortieren nach `gruppe` müssen wir dann **jeden Tausch in beiden Arrays**
ausführen, sonst würden die Namen ihren Gruppen davonlaufen.

Um Stabilität von Hand zu prüfen, geht es auch einfacher: Du **markierst** gleiche Werte mit Buchstaben in der
Reihenfolge, in der sie anfangs stehen, also `3a` vor `3b`. Danach führst du das Verfahren aus und schaust, ob am
Ende `3a` noch vor `3b` steht. Die Buchstaben spielen beim Vergleichen keine Rolle, verglichen wird nur die Zahl.

:::beispiel[Selectionsort ist nicht stabil]
Wir sortieren `{3a, 1, 3b, 2}` mit Selectionsort.

- Durchlauf `i = 0`: Das Minimum ist die 1 an Index 1. Sie tauscht mit `3a`: `{1, 3a, 3b, 2}`.
- Durchlauf `i = 1`: Das Minimum ab Index 1 ist die 2 an Index 3. Sie tauscht mit `3a` an Index 1:
  `{1, 2, 3b, 3a}`.
- Durchlauf `i = 2`: Das Minimum ab Index 2 ist `3b` an Index 2, denn `3a < 3b` ist falsch, beide sind 3. Kein
  sichtbarer Tausch. Ergebnis `{1, 2, 3b, 3a}`.

Die Zahlen sind richtig sortiert. Aber `3a` stand am Anfang vor `3b` und steht jetzt dahinter. Der Grund: Ein Tausch
über große Entfernung hat `3a` an `3b` vorbei nach hinten geworfen. Ein einziges solches Gegenbeispiel beweist:
Selectionsort ist **nicht stabil**.
:::

Warum sind Bubblesort und Insertionsort dagegen stabil? Beide tauschen nur **Nachbarn**. Zwei gleiche Werte können
also nur dann die Reihenfolge wechseln, wenn sie irgendwann direkt nebeneinander stehen und miteinander getauscht
werden. Genau das verhindern die echten Vergleiche: Bubblesort tauscht nur bei `data[j] > data[j + 1]`, Insertionsort
schiebt nur bei `data[j] < data[j - 1]`. Bei Gleichstand ist beides falsch. Gleiche Werte überholen sich also nie.

:::beispiel[Insertionsort auf parallelen Arrays]
Wir sortieren die Kursliste stabil nach Gruppe. Jeder Tausch passiert in beiden Arrays.

```java
int[] gruppe = {2, 1, 2, 3, 1};
String[] name = {"Lea", "Omar", "Ben", "Mia", "Ida"};
for (int i = 1; i < gruppe.length; i++) {
    for (int j = i; j > 0 && gruppe[j] < gruppe[j - 1]; j--) {
        int g = gruppe[j];
        gruppe[j] = gruppe[j - 1];
        gruppe[j - 1] = g;
        String n = name[j];
        name[j] = name[j - 1];
        name[j - 1] = n;
    }
}
```

- `i = 1`: Omar (1) wandert vor Lea (2): Omar, Lea, Ben, Mia, Ida.
- `i = 2`: Ben (2) trifft auf Lea (2). `2 < 2` ist falsch, Ben bleibt hinter Lea.
- `i = 3`: Mia (3) bleibt stehen.
- `i = 4`: Ida (1) wandert an Mia, Ben und Lea vorbei. Bei Omar (1) ist `1 < 1` falsch, sie bleibt hinter ihm.

Ergebnis: Omar, Ida, Lea, Ben, Mia mit den Gruppen 1, 1, 2, 2, 3. Beide Gleichstände haben ihre alte Reihenfolge
behalten. Selectionsort hätte hier Omar, Ida, **Ben, Lea**, Mia geliefert.
:::

:::merke[Stabilität prüfen]
1. Gleiche Schlüssel mit Buchstaben in Anfangsreihenfolge markieren: `2a`, `2b`, `2c`.
2. **Nicht stabil** zeigst du mit **einem** Gegenbeispiel, bei dem am Ende `b` vor `a` steht.
3. **Stabil** begründest du allgemein: Das Verfahren tauscht nur Nachbarn, und bei gleichen Schlüsseln nie.
4. Von den drei Verfahren der Vorlesung sind Bubblesort und Insertionsort stabil, Selectionsort ist es nicht.
:::

:::achtung[Mit >= wird Bubblesort instabil]
Jemand ändert die Bedingung in `if (data[j] >= data[j + 1])`. Das Array wird weiterhin richtig sortiert. Aber jetzt
tauschen auch gleiche Nachbarn. Aus `{2a, 2b}` wird nach dem ersten Vergleich `{2b, 2a}`. Bei mehreren gleichen
Werten wandert jedes Mal der vordere nach hinten. Das Verfahren ist **nicht mehr stabil**. Ein einzelnes
Gleichheitszeichen entscheidet also über die Stabilität.
:::

:::achtung[Am Zahlenarray sieht man Instabilität nicht]
Selectionsort macht aus `{2, 2, 1}` das Array `{1, 2, 2}`. Das sieht vollkommen richtig aus, und jemand schließt
daraus: „Selectionsort ist stabil.“ Markiert man aber `{2a, 2b, 1}`, sieht man das Ergebnis `{1, 2b, 2a}`. Die erste
2 ist bei dem Tausch mit der 1 nach hinten gesprungen. Prüfe Stabilität deshalb immer mit Marken oder mit
Datensätzen, nie nur mit nackten Zahlen.
:::

```aufgabe
id: so-st-welche
titel: Welche Verfahren sind stabil?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Beurteile die Aussagen über die Verfahren in der Fassung der Vorlesung.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Bubblesort ist stabil.
        richtig: true
        erklaerung: 'Es tauscht nur Nachbarn und nur bei `data[j] > data[j + 1]`, also nie zwei gleiche Werte.'
      - text: Selectionsort ist stabil.
        richtig: false
        erklaerung: 'Gegenbeispiel `{2a, 2b, 1}`: Der Tausch der 1 mit `2a` ergibt `{1, 2b, 2a}`.'
      - text: Insertionsort ist stabil.
        richtig: true
        erklaerung: 'Die neue Karte rückt nur an echt größeren Werten vorbei und bleibt bei einem gleichen Wert stehen.'
      - text: Ein stabiles Verfahren ist immer schneller als ein instabiles.
        richtig: false
        erklaerung: 'Stabilität sagt nichts über die Laufzeit. Bubblesort ist stabil und trotzdem meist langsamer als Selectionsort.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Probier Selectionsort mit `{2a, 2b, 1}` aus. Wo steht `2a` am Ende?'
hinweise:
  - Ein Verfahren ist nicht stabil, sobald es ein einziges Gegenbeispiel gibt.
loesung: |
  **Ansatz:** Für jedes Verfahren fragen: Kann ein gleicher Wert an einem anderen gleichen Wert vorbeispringen?
  ---
  Bubblesort und Insertionsort tauschen nur Nachbarn und nie bei Gleichstand, also stabil. Selectionsort tauscht über Entfernungen, Gegenbeispiel `{2a, 2b, 1}`, also nicht stabil.
  ---
  Laufzeit und Stabilität sind unabhängig voneinander. Die letzte Aussage ist falsch.
```

```aufgabe
id: so-st-selection-namen
titel: Selectionsort auf parallelen Arrays
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Selectionsort sortiert nach `gruppe`, jeder Tausch passiert in beiden Arrays. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int[] gruppe = {3, 2, 3, 1};
      String[] name = {"Eva", "Tom", "Max", "Ali"};
      for (int i = 0; i < gruppe.length - 1; i++) {
          int min = i;
          for (int j = i + 1; j < gruppe.length; j++) {
              if (gruppe[j] < gruppe[min]) {
                  min = j;
              }
          }
          int g = gruppe[i];
          gruppe[i] = gruppe[min];
          gruppe[min] = g;
          String n = name[i];
          name[i] = name[min];
          name[min] = n;
      }
      System.out.println(String.join(" ", name));
    loesung: |
      Ali Tom Max Eva
    fehler:
      - wert: "Ali Tom Eva Max"
        meldung: 'So sähe ein stabiles Ergebnis aus. Verfolge den ersten Tausch: Ali (1) tauscht mit Eva (3). Wohin kommt Eva dabei?'
      - wert: "Eva Tom Max Ali"
        meldung: 'Die Namen werden zusammen mit den Gruppen getauscht. Die kleinste Gruppe 1 gehört zu Ali, er kommt nach vorne.'
hinweise:
  - '`String.join(" ", name)` setzt die Namen mit je einem Leerzeichen dazwischen zusammen.'
  - Führe Selectionsort auf `gruppe` aus und tausche bei jedem Tausch die Namen mit.
loesung: |
  **Ansatz:** Selectionsort auf `gruppe`, die Namen wandern mit.
  ---
  `i = 0`: Minimum ist Gruppe 1 an Index 3 (Ali). Tausch mit Index 0 (Eva): Ali, Tom, Max, Eva mit den Gruppen 1, 2, 3, 3.
  ---
  `i = 1` und `i = 2` finden das Minimum jeweils an der Stelle `i` selbst und ändern nichts. Ausgabe `Ali Tom Max Eva`. Eva stand anfangs vor Max, beide sind in Gruppe 3. Jetzt steht Max vor Eva: Das Ergebnis ist nicht stabil.
```

```aufgabe
id: so-st-reihenfolge
titel: Stabil nach Gruppe sortieren
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Liste (Gruppe, Name) lautet: (3, Rosa), (1, Jan), (2, Lia), (1, Timo), (3, Nora), (2, Emil). Sie wird mit einem
  **stabilen** Verfahren aufsteigend nach Gruppe sortiert. Bring die Einträge in die Reihenfolge des Ergebnisses.
teile:
  - typ: reihenfolge
    elemente: ['(1, Jan)', '(1, Timo)', '(2, Lia)', '(2, Emil)', '(3, Rosa)', '(3, Nora)']
hinweise:
  - Ordne zuerst nach Gruppe. Innerhalb einer Gruppe gilt die Reihenfolge der ursprünglichen Liste.
  - 'In der ursprünglichen Liste steht Jan vor Timo, Lia vor Emil und Rosa vor Nora.'
loesung: |
  **Ansatz:** Stabil heißt: Bei gleicher Gruppe entscheidet die Reihenfolge der Ausgangsliste.
  ---
  Gruppe 1: Jan kommt vor Timo. Gruppe 2: Lia vor Emil. Gruppe 3: Rosa vor Nora.
  ---
  Ergebnis: (1, Jan), (1, Timo), (2, Lia), (2, Emil), (3, Rosa), (3, Nora). Ein instabiles Verfahren dürfte etwa auch Nora vor Rosa stellen.
```

```aufgabe
id: so-st-bubble-ge
titel: Bubblesort mit Gleichheitszeichen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Diese Fassung von Bubblesort vergleicht mit `>=` statt mit `>`. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int[] gruppe = {2, 1, 2};
      String[] name = {"Ana", "Kim", "Udo"};
      for (int i = 0; i < gruppe.length - 1; i++) {
          for (int j = 0; j < gruppe.length - i - 1; j++) {
              if (gruppe[j] >= gruppe[j + 1]) {
                  int g = gruppe[j];
                  gruppe[j] = gruppe[j + 1];
                  gruppe[j + 1] = g;
                  String n = name[j];
                  name[j] = name[j + 1];
                  name[j + 1] = n;
              }
          }
      }
      System.out.println(String.join(" ", name));
    loesung: |
      Kim Udo Ana
    fehler:
      - wert: "Kim Ana Udo"
        meldung: 'Das wäre das Ergebnis mit `>`. Hier steht `>=`: Bei `j = 1` sind beide Gruppen 2, und `2 >= 2` ist wahr. Es wird getauscht.'
      - wert: "Ana Kim Udo"
        meldung: 'Im ersten Vergleich ist `2 >= 1` wahr. Kim aus Gruppe 1 wandert nach vorne.'
hinweise:
  - Führe Vergleich für Vergleich aus. Bei `>=` wird auch bei Gleichstand getauscht.
  - 'Im ersten Durchlauf gibt es zwei Vergleiche: Gruppe 2 mit Gruppe 1, danach die gerade nach rechts gerückte Gruppe 2 mit der Gruppe 2 von Udo.'
gefuehrt:
  - text: '`i = 0`, `j = 0`: Verglichen werden Ana (2) und Kim (1). Wer steht danach vorne?'
    teil: { typ: auswahl, optionen: [Kim, Ana], richtig: [0] }
    erklaerung: '`2 >= 1` ist wahr, also wird getauscht: Kim, Ana, Udo.'
  - text: '`i = 0`, `j = 1`: Verglichen werden Ana (2) und Udo (2). Wird getauscht?'
    teil: { typ: auswahl, optionen: [ja, nein], richtig: [0] }
    erklaerung: '`2 >= 2` ist wahr. Mit `>=` tauschen auch gleiche Gruppen: Kim, Udo, Ana.'
  - text: '`i = 1`, `j = 0`: Verglichen werden Kim (1) und Udo (2). Wird getauscht?'
    teil: { typ: auswahl, optionen: [ja, nein], richtig: [1] }
    erklaerung: '`1 >= 2` ist falsch. Das Ergebnis bleibt Kim, Udo, Ana.'
  - text: Ist das Ergebnis stabil?
    erklaerung: Nein. Ana stand vor Udo, beide in Gruppe 2, jetzt steht Udo vorne. Das Gleichheitszeichen hat die Stabilität zerstört.
loesung: |
  **Ansatz:** Bubblesort ausführen, aber auch bei gleichen Gruppen tauschen.
  ---
  `i = 0`, `j = 0`: `2 >= 1`, tauschen: Kim, Ana, Udo. `j = 1`: `2 >= 2`, tauschen: Kim, Udo, Ana.
  ---
  `i = 1`, `j = 0`: `1 >= 2` falsch. Ausgabe `Kim Udo Ana`. Ana stand vor Udo, jetzt dahinter: Mit `>=` ist Bubblesort nicht stabil.
```

```aufgabe
id: so-st-zweistufig
titel: Erst nach Namen, dann nach Gruppe
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Die Liste ist schon alphabetisch nach Namen sortiert: (2, Anna), (1, Ben), (2, Clara), (1, David), (3, Emma).
  Jetzt wird sie aufsteigend nach Gruppe sortiert, einmal mit Insertionsort, einmal mit Selectionsort.
teile:
  - typ: auswahl
    label: Welche Reihenfolge der Namen liefert Insertionsort?
    optionen: ['Ben, David, Anna, Clara, Emma', 'Ben, David, Clara, Anna, Emma', 'David, Ben, Anna, Clara, Emma']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Insertionsort ist stabil. Anna stand vor Clara, beide sind in Gruppe 2. Diese Reihenfolge bleibt.'
      - wert: 2
        meldung: 'Ben stand vor David, beide in Gruppe 1. Ein stabiles Verfahren lässt Ben vorne.'
  - typ: auswahl
    label: Welche Reihenfolge der Namen liefert Selectionsort?
    optionen: ['Ben, David, Anna, Clara, Emma', 'Ben, David, Clara, Anna, Emma', 'Ben, Anna, David, Clara, Emma']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Rechne Selectionsort durch. Im zweiten Durchlauf tauscht David (1) mit Anna an Index 1. Wohin springt Anna?'
      - wert: 2
        meldung: Die Gruppen müssen nach dem Sortieren aufsteigend sein. Anna gehört zu Gruppe 2 und kann nicht zwischen Ben und David stehen.
hinweise:
  - Für Insertionsort genügt die Stabilität. Innerhalb jeder Gruppe bleibt die alphabetische Reihenfolge.
  - 'Für Selectionsort rechne die Durchläufe aus: Die Gruppen sind `{2, 1, 2, 1, 3}`.'
loesung: |
  **Ansatz:** Insertionsort ist stabil, also bleibt innerhalb jeder Gruppe die alphabetische Reihenfolge. Selectionsort rechnen wir aus.
  ---
  Insertionsort: Gruppe 1 Ben, David. Gruppe 2 Anna, Clara. Gruppe 3 Emma. Ergebnis Ben, David, Anna, Clara, Emma.
  ---
  Selectionsort: `i = 0` tauscht Ben mit Anna: Ben, Anna, Clara, David, Emma. `i = 1` tauscht David mit Anna: Ben, David, Clara, Anna, Emma. Die weiteren Durchläufe ändern nichts.
  ---
  Bei Selectionsort ist Anna hinter Clara gesprungen, die alphabetische Ordnung in Gruppe 2 ist zerstört. Darum braucht das Sortieren nach zwei Merkmalen ein stabiles Verfahren.
```

```aufgabe
id: so-st-code
titel: Rangliste stabil sortieren
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Rangliste steht in zwei parallelen Arrays: `punkte[i]` gehört zu `name[i]`. Schreib
  `sortiereRangliste(int[] punkte, String[] name)`. Die Methode sortiert beide Arrays **absteigend nach Punkten**,
  also die meisten Punkte vorne. Bei gleichen Punkten bleibt die bisherige Reihenfolge erhalten (stabil). Jeder
  Tausch muss in beiden Arrays passieren. `Arrays.sort` ist verboten.

  Vorbedingung: Beide Arrays sind nicht `null` und gleich lang.

  Beispiel: `punkte = {12, 30, 12, 25}`, `name = {"Ada", "Ben", "Cem", "Dora"}` ergibt
  `punkte = {30, 25, 12, 12}` und `name = {"Ben", "Dora", "Ada", "Cem"}`.
teile:
  - typ: code
    vorlage: |
      public class Rangliste {
          public static void sortiereRangliste(int[] punkte, String[] name) {
              // TODO
          }
      }
    musterloesung: |
      public class Rangliste {
          public static void sortiereRangliste(int[] punkte, String[] name) {
              for (int i = 1; i < punkte.length; i++) {
                  for (int j = i; j > 0 && punkte[j] > punkte[j - 1]; j--) {
                      int p = punkte[j];
                      punkte[j] = punkte[j - 1];
                      punkte[j - 1] = p;
                      String n = name[j];
                      name[j] = name[j - 1];
                      name[j - 1] = n;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[] p = {12, 30, 12, 25}; String[] n = {\"Ada\", \"Ben\", \"Cem\", \"Dora\"};", aufruf: "sortiereRangliste(p, n)", ergebnis: "n", erwartet: "new String[]{\"Ben\", \"Dora\", \"Ada\", \"Cem\"}" }
      - { vorher: "int[] p = {12, 30, 12, 25}; String[] n = {\"Ada\", \"Ben\", \"Cem\", \"Dora\"};", aufruf: "sortiereRangliste(p, n)", ergebnis: "p", erwartet: "new int[]{30, 25, 12, 12}", beschreibung: "die Punkte selbst" }
      - { vorher: "int[] p = {5, 5, 5}; String[] n = {\"X\", \"Y\", \"Z\"};", aufruf: "sortiereRangliste(p, n)", ergebnis: "n", erwartet: "new String[]{\"X\", \"Y\", \"Z\"}", beschreibung: "alle gleich: nichts darf sich bewegen" }
      - { vorher: "int[] p = {}; String[] n = {};", aufruf: "sortiereRangliste(p, n)", ergebnis: "n", erwartet: "new String[]{}", beschreibung: "leere Liste" }
      - { vorher: "int[] p = {7, 9, 7, 9, 8}; String[] n = {\"a\", \"b\", \"c\", \"d\", \"e\"};", aufruf: "sortiereRangliste(p, n)", ergebnis: "n", erwartet: "new String[]{\"b\", \"d\", \"e\", \"a\", \"c\"}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 3, meldung: "Bei gleichen Punkten darf nicht getauscht werden. Vergleichst du mit `>=` statt mit `>`, oder verwendest du Selectionsort? Beides ist nicht stabil." }
      - { wert: 1, meldung: "Tauscht du die Namen bei jedem Tausch der Punkte mit? Und steht die größte Punktzahl vorne?" }
hinweise:
  - 'Nimm Insertionsort oder Bubblesort, denn beide sind stabil. Für „absteigend“ dreht sich das Vergleichszeichen um.'
  - 'Der Tausch braucht zwei Hilfsvariablen: eine `int` für die Punkte und eine `String` für den Namen. Vergleiche mit `>`, nicht mit `>=`.'
loesung: |
  **Ansatz:** Ein stabiles Verfahren wählen, das Vergleichszeichen für „absteigend“ umdrehen und jeden Tausch in beiden Arrays ausführen.
  ---
  ```java
  for (int i = 1; i < punkte.length; i++) {
      for (int j = i; j > 0 && punkte[j] > punkte[j - 1]; j--) {
          int p = punkte[j];
          punkte[j] = punkte[j - 1];
          punkte[j - 1] = p;
          String n = name[j];
          name[j] = name[j - 1];
          name[j - 1] = n;
      }
  }
  ```
  ---
  Probe mit `{12, 30, 12, 25}`: Ben (30) wandert vor Ada. Cem (12) bleibt hinter Ada, weil `12 > 12` falsch ist. Dora (25) wandert an Cem und Ada vorbei bis hinter Ben. Ergebnis Ben, Dora, Ada, Cem.
```

```reflexion
frage: Selectionsort wird nicht stabil, weil es über große Entfernungen tauscht. Warum genügt es nicht, das Vergleichszeichen zu ändern, um es stabil zu machen?
antwort: |
  Das Vergleichszeichen bestimmt nur, welches der gleichen Minima ausgewählt wird. Bei `<` ist es das erste, bei `<=`
  das letzte. Das Problem liegt aber im Tausch selbst. Der Wert, der an der Stelle `i` stand, springt an die Stelle
  des Minimums, also womöglich weit nach rechts. Dabei kann er über einen gleichen Wert hinwegspringen, der vorher
  hinter ihm stand. Bei `{2a, 2b, 1}` springt `2a` hinter `2b`, egal wie das Minimum gesucht wird. Um Selectionsort
  stabil zu machen, müsste man das Minimum einfügen und die Werte dazwischen um eins nach rechts schieben, wie bei
  Insertionsort. Dann wäre es aber ein anderes Verfahren mit vielen Verschiebungen.
```

## Veränderten Sortiercode beurteilen

```aufgabe
id: so-ve-check-grenze
titel: Welche Indizes liest die Schleife?
niveau: 1
art: check
angabe: |
  Ein Array hat die Länge 5. Eine Schleife lautet `for (int j = 0; j < 5; j++)` und liest im Rumpf `data[j + 1]`.
  Welchen Index liest sie im letzten Durchlauf? (Wiederholung:
  [12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen))
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: Im letzten Durchlauf ist `j = 4`. Gelesen wird aber `data[j + 1]`, also eine Stelle weiter.
loesung: |
  Der letzte Wert von `j` ist 4, denn `5 < 5` ist falsch. Gelesen wird `data[4 + 1] = data[5]`.
  ---
  Bei Länge 5 gibt es den Index 5 nicht. Diese Schleife wirft also eine `ArrayIndexOutOfBoundsException`.
```

Die zweite typische Quizfrage zum Sortieren sieht so aus: Der Code eines Verfahrens aus der Vorlesung ist gegeben,
und die Zeilen sind markiert. Dann wird jeweils **eine** Zeile geändert. Zu jeder Änderung sollst du beurteilen, ob
eine Aussage noch stimmt. In den bisherigen Tests lautete sie etwa so:

> Der Algorithmus terminiert nach der Veränderung noch immer korrekt, sortiert alle möglichen Arrays mit einer
> Länge größer 0 noch immer aufsteigend und ist für beliebige Belegungen stabil.

**Terminieren** heißt: Das Programm kommt zu einem Ende. „Korrekt terminieren“ heißt zusätzlich: ohne Exception.
Die Aussage ist nur dann richtig, wenn **alle drei Teile** stimmen. Manchmal fragt der Test nur nach den ersten
beiden Teilen. Lies die Aussage deshalb genau. Bei Selectionsort kann der Teil „stabil“ nie stimmen, weil schon das
Original nicht stabil ist.

:::merke[Prüfliste für eine Änderung]
1. **Exception?** Setze den kleinsten und den größten Wert jeder Schleifenvariable ein. Werden dabei nur gültige
   Indizes gelesen?
2. **Endet jede Schleife?** Bewegt sich die Schleifenvariable auf ihre Grenze zu?
3. **Wird genug gearbeitet?** Fehlt ein Durchlauf oder ein Vergleich, den das Original braucht? Teste mit kleinen
   Gegenbeispielen wie `{2, 1}`, `{3, 2, 1}` und `{3, 1, 2}`. Zusätzliche Durchläufe schaden dagegen nicht.
4. **Stabil?** Werden nur Nachbarn getauscht, und nie bei Gleichstand? Teste mit markierten Werten wie `{2a, 2b}`.
:::

Für „richtig“ musst du alle Arrays im Blick haben, ein Beispiel genügt nicht. Für „falsch“ genügt dagegen ein
einziges Gegenbeispiel. Das ist dieselbe Denkweise wie bei den Kommentaren zum Inhalt eines Arrays in
[12.2 Arrays mit Schleifen durchlaufen](/lernen/ep1/arrays/arrays-mit-schleifen-durchlaufen).

:::beispiel[Zwei Änderungen an Bubblesort]
Zur Erinnerung das Original:

```java
for (int i = 0; i < data.length - 1; i++) {                 // Zeile A
    for (int j = 0; j < data.length - i - 1; j++) {         // Zeile B
        if (data[j] > data[j + 1]) {                        // Zeile C
            exchange(data, j, j + 1);                       // Zeile D
        }
    }
}
```

**Änderung 1, Zeile A:** `for (int i = 0; i < 2 * data.length; i++)`.

- Exception? Für große `i` wird die innere Grenze `data.length - i - 1` negativ. Dann läuft die innere Schleife
  einfach keinmal. Es wird kein ungültiger Index gelesen.
- Endet alles? Ja, `i` wächst bis zur festen Grenze.
- Genug Arbeit? Die ersten `data.length - 1` Durchläufe sind genau die des Originals. Danach ist das Array
  sortiert, und weitere Durchläufe ändern nichts.
- Stabil? Die Zeilen C und D sind unverändert.

Die Aussage ist **richtig**. Mehr Durchläufe kosten nur Zeit.

**Änderung 2, Zeile B:** `for (int j = data.length - i - 2; j >= 0; j--)`, die innere Schleife läuft also von rechts
nach links.

- Exception? `j` liegt zwischen 0 und `data.length - i - 2`, also ist `j + 1` höchstens `data.length - i - 1`. Kein
  ungültiger Index.
- Genug Arbeit? Jetzt wird es interessant. Ein Durchlauf von rechts nach links trägt den **kleinsten** Wert nach
  links. Die Grenze lässt aber rechts Plätze weg, als stünde dort schon der größte Wert. Test mit `{3, 1, 2}`:
  Durchlauf `i = 0` vergleicht erst 1 und 2 (kein Tausch), dann 3 und 1 (Tausch): `{1, 3, 2}`. Durchlauf `i = 1`
  vergleicht nur noch 1 und 3. Ergebnis `{1, 3, 2}`, unsortiert.

Die Aussage ist **falsch**. Das Gegenbeispiel `{3, 1, 2}` genügt.
:::

```aufgabe
id: so-ve-exception
titel: Welche Änderung bricht ab?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Im Original von `bubbleSort` lautet die innere Schleife `for (int j = 0; j < data.length - i - 1; j++)`.
  Welche der folgenden Fassungen wirft für jedes Array mit mindestens zwei Elementen eine
  `ArrayIndexOutOfBoundsException`?
teile:
  - typ: auswahl
    optionen: ['`for (int j = 0; j < data.length - i; j++)`', '`for (int j = 0; j < data.length - 1; j++)`', '`for (int j = 0; j <= data.length - i - 2; j++)`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier ist der größte Wert von `j` immer `data.length - 2`. Dann ist `j + 1` höchstens der letzte Index. Diese Fassung vergleicht nur mehr Paare als nötig.'
      - wert: 2
        meldung: '`j <= data.length - i - 2` erlaubt genau dieselben Werte wie `j < data.length - i - 1`. Das ist nur anders geschrieben.'
hinweise:
  - Setze `i = 0` und den größten erlaubten Wert von `j` ein. Welcher Index steckt dann in `data[j + 1]`?
loesung: |
  **Ansatz:** Für `i = 0` den letzten Wert von `j` bestimmen und `j + 1` prüfen.
  ---
  Bei `j < data.length - i` ist der letzte Wert `j = data.length - 1`. Dann liest Zeile C `data[data.length]`, einen Index hinter dem Array. Das passiert schon im ersten Durchlauf, also bei jedem Array mit mindestens zwei Elementen.
  ---
  Die beiden anderen Fassungen lesen höchstens `data[data.length - 1]`, den letzten gültigen Index.
```

```aufgabe
id: so-ve-einfach
titel: Vier Änderungen an Bubblesort
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Beurteile für jede Änderung an `bubbleSort` die Aussage: „Der Algorithmus terminiert noch immer ohne Exception
  und sortiert jedes Array aufsteigend.“ (Hier ist nach Stabilität nicht gefragt.)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Innere Schleife: `for (int j = 0; j < data.length - 1; j++)`'
        richtig: true
        erklaerung: 'Ohne `- i` vergleicht jeder Durchlauf auch die schon fertigen Paare rechts. Das ist unnötig, aber harmlos. Der größte Index bleibt gültig.'
      - text: '`if (data[j] < data[j + 1])`'
        richtig: false
        erklaerung: 'Jetzt wird getauscht, wenn der linke Wert kleiner ist. Das Verfahren sortiert absteigend. Gegenbeispiel `{1, 2}` wird zu `{2, 1}`.'
      - text: 'Äußere Schleife: `for (int i = 0; i < 2 * data.length; i++)`'
        richtig: true
        erklaerung: 'Die zusätzlichen Durchläufe haben eine negative innere Grenze oder ändern am sortierten Array nichts.'
      - text: 'Innere Schleife: `for (int j = 0; j < data.length - i; j++)`'
        richtig: false
        erklaerung: 'Im ersten Durchlauf erreicht `j` den Wert `data.length - 1`, und `data[j + 1]` liegt hinter dem Array.'
    fehler:
      - wert: [f, f, r, f]
        meldung: 'Mehr Vergleiche als nötig machen einen Algorithmus nicht falsch. Prüfe bei der ersten Änderung nur: Bleibt jeder Index gültig?'
      - wert: [r, f, f, f]
        meldung: 'Zusätzliche Durchläufe schaden nicht. Was passiert in der inneren Schleife, wenn `data.length - i - 1` negativ ist?'
hinweise:
  - 'Arbeite die Prüfliste ab: Exception? Endet es? Wird genug gearbeitet?'
  - Zusätzliche Vergleiche und Durchläufe sind harmlos, fehlende oder umgedrehte sind es nicht.
loesung: |
  **Ansatz:** Jede Änderung mit der Prüfliste untersuchen.
  ---
  Änderungen 1 und 3 machen nur mehr Arbeit, die Indizes bleiben gültig: richtig.
  ---
  Änderung 2 sortiert absteigend, Gegenbeispiel `{1, 2}`: falsch. Änderung 4 liest `data[data.length]`: falsch.
```

```aufgabe
id: so-ve-bubble
titel: Bubblesort im Quizformat
niveau: 2
lernziel: 6
kompetenz: begruenden
quelle: nach TUWEL-Test 2 (WS 2022, 13.01.2023), Frage 9 (abgewandelt)
angabe: |
  Gegeben ist `bubbleSort` aus der Vorlesung:

  ```java
  for (int i = 0; i < data.length - 1; i++) {                 // Zeile A
      for (int j = 0; j < data.length - i - 1; j++) {         // Zeile B
          if (data[j] > data[j + 1]) {                        // Zeile C
              exchange(data, j, j + 1);                       // Zeile D
          }
      }
  }
  ```

  Beurteile für jede Änderung die Aussage: „Mit der Änderung endet der Algorithmus ohne Exception, sortiert jedes
  nicht leere Array aufsteigend und bleibt bei jeder Belegung stabil.“
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Zeile B und C: `for (int j = 1; j < data.length - i; j++)` mit `if (data[j - 1] > data[j])` und `exchange(data, j - 1, j)`'
        richtig: true
        erklaerung: '`j` ist jetzt der **rechte** Index des Paars. Verglichen werden genau dieselben Paare wie im Original, nur anders benannt.'
      - text: 'Zeile C: `if (data[j] >= data[j + 1])`'
        richtig: false
        erklaerung: 'Das Array wird weiter sortiert, aber gleiche Nachbarn werden getauscht. Aus `{2a, 2b}` wird `{2b, 2a}`, also nicht mehr stabil.'
      - text: 'Zeile A: `for (int i = 0; i < data.length - 2; i++)`'
        richtig: false
        erklaerung: 'Es fehlt der letzte Durchlauf. Für `{2, 1}` läuft gar kein Durchlauf, das Array bleibt unsortiert.'
      - text: 'Zeile A und B: `for (int i = data.length - 1; i > 0; i--)` mit `for (int j = 0; j < i; j++)`'
        richtig: true
        erklaerung: 'Jetzt ist `i` direkt die Grenze der inneren Schleife: zuerst `data.length - 1`, dann eins weniger. Das sind genau die Paare des Originals.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Die Aussage verlangt auch Stabilität. Was passiert bei `>=` mit zwei gleichen Nachbarn?'
      - wert: [f, f, f, r]
        meldung: 'Schreib bei der ersten Änderung die verglichenen Paare für `i = 0` auf. Sind es andere als im Original?'
      - wert: [r, f, r, r]
        meldung: 'Setze bei der dritten Änderung `{2, 1}` ein. Wie oft läuft die äußere Schleife?'
hinweise:
  - 'Bei umbenannten Schleifen hilft es, für `i = 0` die verglichenen Paare aufzuschreiben und mit dem Original zu vergleichen.'
  - Prüfe jede Änderung auf alle drei Teile der Aussage, auch auf Stabilität.
gefuehrt:
  - text: 'Änderung 1: Für `i = 0` läuft `j` von 1 bis `data.length - 1`. Welche Paare `(j - 1, j)` werden bei Länge 4 verglichen?'
    teil: { typ: auswahl, optionen: ['(0,1), (1,2), (2,3)', '(1,2), (2,3), (3,4)', '(0,1), (1,2)'], richtig: [0] }
    erklaerung: Dieselben drei Paare wie im Original. Auch die Tauschbedingung ist dieselbe, nur mit anderen Namen. Richtig.
  - text: 'Änderung 2: Werden zwei gleiche Nachbarn getauscht?'
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [0] }
    erklaerung: '`2 >= 2` ist wahr. Sortiert wird noch, stabil ist es nicht mehr. Die Aussage ist falsch.'
  - text: 'Änderung 3: Wie viele Durchläufe macht die äußere Schleife bei Länge 2?'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '`0 < 2 - 2` ist falsch. `{2, 1}` bleibt unsortiert. Falsch.'
  - text: 'Änderung 4: Welche Werte hat die innere Grenze `i` nacheinander bei Länge 5?'
    teil: { typ: auswahl, optionen: ['4, 3, 2, 1', '5, 4, 3, 2, 1', '3, 2, 1'], richtig: [0] }
    erklaerung: 'Im Original sind die inneren Grenzen `5 - 0 - 1 = 4`, dann 3, 2, 1. Genau dieselben. Richtig.'
loesung: |
  **Ansatz:** Jede Änderung mit der Prüfliste: Exception, Ende, genug Arbeit, Stabilität.
  ---
  Änderung 1: dieselben Paare mit verschobenem Index, richtig. Änderung 4: dieselben inneren Grenzen, nur rückwärts gezählt, richtig.
  ---
  Änderung 2: sortiert, aber instabil, falsch. Änderung 3: ein Durchlauf fehlt, Gegenbeispiel `{2, 1}`, falsch.
```

:::beispiel[Zwei Änderungen an Insertionsort]
Das Original:

```java
for (int i = 1; i < data.length; i++) {                         // Zeile A
    for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {      // Zeile B
        exchange(data, j, j - 1);                               // Zeile C
    }
}
```

**Änderung 1, Zeile B:** `for (int j = i; j >= 0 && data[j] < data[j - 1]; j--)`.

Wandert eine neue Karte bis ganz nach vorne, wird `j` zu 0. Dann ist `j >= 0` noch wahr, und Java wertet
`data[0] < data[-1]` aus. Das ist eine `ArrayIndexOutOfBoundsException`. Gegenbeispiel `{2, 1}`: Die 1 tauscht mit
der 2, dann ist `j = 0`, und das Programm bricht ab. Die Aussage ist **falsch**.

**Änderung 2, Zeile B und C:** Die innere Schleife lautet `for (int j = i; j > 0; j--)`. In ihrem Rumpf steht
`if (data[j] < data[j - 1]) exchange(data, j, j - 1);`.

Jetzt endet die innere Schleife nicht mehr beim ersten Wert, der nicht größer ist, sondern läuft immer bis
`j = 1`. Ist der linke Teil sortiert, finden die späteren Vergleiche aber nichts mehr zu tauschen. Das Ergebnis ist
also gleich, nur langsamer. Getauscht wird weiter nur bei echt kleiner und nur mit Nachbarn: stabil. Die Aussage ist
**richtig**. Über die Laufzeit sagt sie nichts.
:::

:::achtung[Mehr Arbeit für falsch gehalten]
Die Änderung `for (int j = 0; j < data.length - 1; j++)` an Bubblesort halten viele für falsch. Der Grund: Die
Optimierung `- i` fehlt. Aber die Aussage fragt nur nach Ende, Korrektheit und Stabilität. Die zusätzlichen
Vergleiche treffen Paare im fertigen rechten Teil, die schon richtig herum stehen. Sie tauschen nie etwas. Die
Aussage ist **richtig**. Merke: Was das Original überspringt, darf eine Änderung zusätzlich prüfen. Gefährlich ist nur,
was das Original braucht und die Änderung weglässt.
:::

:::achtung[Mit einem einzigen Testarray geprüft]
Jemand prüft die Änderung `for (int i = 0; i < data.length - 2; i++)` an Bubblesort mit `{3, 1, 2}`. Der eine
Durchlauf ergibt `{1, 2, 3}`, also urteilt er: „richtig“. Mit `{3, 2, 1}` ergibt derselbe eine Durchlauf aber
`{2, 1, 3}`, unsortiert. Ein Beispiel, bei dem es zufällig klappt, beweist nichts. Teste immer auch die schwierigen
Fälle: absteigend sortiert, kleinster Wert ganz hinten, nur zwei Elemente.
:::

```aufgabe
id: so-ve-selection
titel: Selectionsort im Quizformat
niveau: 2
lernziel: 6
kompetenz: begruenden
quelle: nach TUWEL-Test zur Vorbereitung (WS 2021), Frage 9 (abgewandelt)
angabe: |
  Gegeben ist `selectionSort` aus der Vorlesung:

  ```java
  for (int i = 0; i < data.length - 1; i++) {        // Zeile A
      int min = i;                                    // Zeile B
      for (int j = i + 1; j < data.length; j++) {     // Zeile C
          if (data[j] < data[min]) {                  // Zeile D
              min = j;
          }
      }
      exchange(data, i, min);
  }
  ```

  Beurteile für jede Änderung: „Der Algorithmus terminiert noch immer korrekt und sortiert alle Arrays mit einer
  Länge größer 0 aufsteigend.“ (Nach Stabilität ist hier nicht gefragt.)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Zeile D: `if (data[min] > data[j])`'
        richtig: true
        erklaerung: '„`data[min]` ist größer als `data[j]`“ bedeutet dasselbe wie „`data[j]` ist kleiner als `data[min]`“.'
      - text: 'Zeile B: `int min = data.length - 1;`'
        richtig: false
        erklaerung: 'Jetzt wird `data[i]` selbst nie mit dem Minimum verglichen. Gegenbeispiel `{1, 2}`: `min` bleibt 1, und der Tausch macht daraus `{2, 1}`.'
      - text: 'Zeile C: `for (int j = i + 1; j <= data.length - 1; j++)`'
        richtig: true
        erklaerung: '`j <= data.length - 1` erlaubt genau dieselben Werte wie `j < data.length`.'
      - text: 'Zeile B: `int min = 0;`'
        richtig: false
        erklaerung: 'Die Suche schließt den fertigen Teil ein. Ab `i = 1` steht dort das kleinste Element, und es wird wieder nach hinten getauscht. Gegenbeispiel `{3, 1, 2}`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Setze in der zweiten Änderung `{1, 2}` ein. Mit welchem Wert vergleicht die Suche `data[1]`, und wird `data[0]` überhaupt angeschaut?'
      - wert: [f, f, r, f]
        meldung: 'Lies die erste Bedingung von rechts nach links. `a > b` und `b < a` sind dieselbe Aussage.'
hinweise:
  - Prüfe bei Änderungen an `min`, ob jeder Wert des unsortierten Teils, auch `data[i]`, in die Suche einbezogen wird.
  - 'Gute Gegenbeispiele: `{1, 2}`, `{2, 1}` und `{3, 1, 2}`.'
loesung: |
  **Ansatz:** Bei Selectionsort ist die Kernfrage: Findet die Suche wirklich das Minimum von `data[i]` bis zum Ende?
  ---
  Änderung 1 und 3 sind nur andere Schreibweisen derselben Bedingung: richtig.
  ---
  Änderung 2 lässt `data[i]` aus der Suche heraus: falsch, Gegenbeispiel `{1, 2}`. Änderung 4 sucht im fertigen Teil mit: falsch, Gegenbeispiel `{3, 1, 2}` ergibt wieder `{3, 1, 2}`.
```

```aufgabe
id: so-ve-insertion
titel: Insertionsort im Quizformat
niveau: 2
lernziel: 6
kompetenz: begruenden
quelle: nach TUWEL-Test 2 (WS 2021, 20.01.2022), Frage 9 (abgewandelt)
angabe: |
  Gegeben ist `insertionSort` aus der Vorlesung:

  ```java
  for (int i = 1; i < data.length; i++) {                         // Zeile A
      for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {      // Zeile B
          exchange(data, j, j - 1);                               // Zeile C
      }
  }
  ```

  Beurteile für jede Änderung: „Der Algorithmus terminiert noch immer korrekt, sortiert alle Arrays mit einer Länge
  größer 0 aufsteigend und ist stabil.“
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Zeile B: `for (int j = i - 1; j >= 0 && data[j + 1] < data[j]; j--)` und Zeile C: `exchange(data, j + 1, j);`'
        richtig: true
        erklaerung: 'Jetzt ist `j` der Index des **linken** Nachbarn der Karte. Es werden genau dieselben Paare verglichen und getauscht wie im Original.'
      - text: 'Zeile B: `for (int j = i; j > 0 && data[j] <= data[j - 1]; j--)`'
        richtig: false
        erklaerung: 'Bei Gleichstand rückt die Karte weiter nach links, also an einem gleichen Wert vorbei. Sortiert wird noch, stabil ist es nicht mehr.'
      - text: 'Zeile B: `for (int j = i; j > 1 && data[j] < data[j - 1]; j--)`'
        richtig: false
        erklaerung: 'Die Karte kann nie an Index 0 gelangen. Gegenbeispiel `{2, 1}` bleibt unsortiert.'
      - text: 'Zeile C: `exchange(data, j - 1, j);`'
        richtig: true
        erklaerung: '`exchange` tauscht zwei Plätze. Ob man sie als (j, j - 1) oder als (j - 1, j) angibt, ist egal.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Die Aussage verlangt Stabilität. Was passiert in der zweiten Änderung mit zwei gleichen Werten?'
      - wert: [f, f, f, r]
        meldung: 'Schreib bei der ersten Änderung auf, welches Paar für `i = 2` zuerst verglichen wird. Ist es dasselbe wie im Original?'
hinweise:
  - Umbenennungen von Indizes erkennst du daran, dass genau dieselben Paare verglichen und getauscht werden.
  - Prüfe jede Änderung auf alle drei Teile der Aussage.
loesung: |
  **Ansatz:** Für jede Änderung: Welche Paare werden verglichen? Bis wohin kann die Karte wandern? Was passiert bei Gleichstand?
  ---
  Änderung 1 benennt nur den Index um, Änderung 4 vertauscht nur die Argumente von `exchange`: beide richtig.
  ---
  Änderung 2 ist nicht mehr stabil, Änderung 3 erreicht Index 0 nie: beide falsch.
```

```aufgabe
id: so-ve-tricky
titel: Vier knifflige Änderungen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Beurteile für jede Änderung die Aussage „Der Algorithmus terminiert noch immer ohne Exception, sortiert jedes
  Array mit einer Länge größer 0 aufsteigend und ist stabil“. Die Originale sind die Fassungen der Vorlesung. Du
  findest sie in
  [19.2 Bubblesort: benachbarte Werte vertauschen](/lernen/ep1/sortieren/bubblesort-benachbarte-werte-vertauschen),
  [19.3 Selectionsort: das Minimum nach vorne holen](/lernen/ep1/sortieren/selectionsort-das-minimum-nach-vorne-holen) und
  [19.4 Insertionsort: einfügen wie bei Spielkarten](/lernen/ep1/sortieren/insertionsort-einfuegen-wie-bei-spielkarten). Zeile A ist jeweils die
  äußere, Zeile B die innere Schleife.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Bubblesort, Zeile B: `for (int j = data.length - i - 2; j >= 0; j--)`'
        richtig: false
        erklaerung: 'Ein Durchlauf von rechts nach links bringt den kleinsten Wert nach vorne, nicht den größten nach hinten. Die Grenze lässt rechts trotzdem Plätze weg. Gegenbeispiel `{3, 1, 2}` ergibt `{1, 3, 2}`.'
      - text: 'Insertionsort, Zeile B: `for (int j = i; j > 0 && data[j] < data[j - 1]; j++)`'
        richtig: false
        erklaerung: 'Nach einem Tausch zeigt `j` nicht mehr auf die Karte, sondern rückt nach rechts. Für `{2, 1}` liest die Bedingung nach dem ersten Tausch `data[2]`, eine Exception.'
      - text: 'Bubblesort, Zeile A: `for (int i = 0; i < 2 * data.length; i++)`'
        richtig: true
        erklaerung: 'Die ersten Durchläufe sind die des Originals. Die übrigen haben eine negative innere Grenze und laufen keinmal.'
      - text: 'Selectionsort, Zeile A: `for (int i = 0; i < data.length - 1; i++)`, sonst unverändert'
        richtig: false
        erklaerung: 'Das ist das Original. Es terminiert und sortiert, aber Selectionsort ist nicht stabil. Die Aussage verlangt Stabilität.'
    fehler:
      - wert: [r, f, r, f]
        meldung: 'Teste die erste Änderung mit `{3, 1, 2}`. Wo steht die 3 nach dem ersten Durchlauf?'
      - wert: [f, f, r, r]
        meldung: 'Die letzte Änderung ist gar keine. Aber was gilt beim Original von Selectionsort für die Stabilität?'
hinweise:
  - Bei Änderung 1 hilft das Gegenbeispiel `{3, 1, 2}`.
  - 'Bei Änderung 2: Wohin zeigt `j` nach einem Tausch, wenn es danach erhöht statt verringert wird?'
loesung: |
  **Ansatz:** Prüfliste anwenden und für „falsch“ jeweils ein konkretes Gegenbeispiel suchen.
  ---
  Änderung 1: falsch, `{3, 1, 2}` ergibt `{1, 3, 2}`. Änderung 2: falsch, `{2, 1}` führt zu einer Exception, weil `j` nach dem Tausch auf 2 springt.
  ---
  Änderung 3: richtig, zusätzliche Durchläufe sind harmlos. Änderung 4: falsch, Selectionsort war nie stabil. Wer diese Falle kennt, spart im Quiz Zeit.
```

```aufgabe
id: so-ve-reparieren
titel: Einen fehlerhaften Insertionsort reparieren
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Sprachmodell hat diese Fassung von Insertionsort erzeugt. Sie kompiliert, ist aber falsch: Bei manchen
  Arrays bricht sie mit einer Exception ab, bei anderen bleibt das Array unsortiert. Finde die beiden Fehler und
  repariere sie, ohne das Verfahren zu wechseln. Das Ergebnis soll aufsteigend sortieren und stabil sein.
teile:
  - typ: code
    vorlage: |
      public class Reparatur {
          public static void insertionSort(int[] data) {
              for (int i = 2; i < data.length; i++) {
                  for (int j = i; j >= 0 && data[j] < data[j - 1]; j--) {
                      int swap = data[j];
                      data[j] = data[j - 1];
                      data[j - 1] = swap;
                  }
              }
          }
      }
    musterloesung: |
      public class Reparatur {
          public static void insertionSort(int[] data) {
              for (int i = 1; i < data.length; i++) {
                  for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
                      int swap = data[j];
                      data[j] = data[j - 1];
                      data[j - 1] = swap;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[] a = {2, 1};", aufruf: "insertionSort(a)", ergebnis: "a", erwartet: "new int[]{1, 2}", beschreibung: "nur zwei Werte" }
      - { vorher: "int[] a = {5, 9, 1, 7};", aufruf: "insertionSort(a)", ergebnis: "a", erwartet: "new int[]{1, 5, 7, 9}", beschreibung: "neuer Wert wandert bis ganz nach vorne" }
      - { vorher: "int[] a = {4, 6, 5};", aufruf: "insertionSort(a)", ergebnis: "a", erwartet: "new int[]{4, 5, 6}" }
      - { vorher: "int[] a = {8};", aufruf: "insertionSort(a)", ergebnis: "a", erwartet: "new int[]{8}" }
      - { vorher: "int[] a = {3, 2, 1, 0};", aufruf: "insertionSort(a)", ergebnis: "a", erwartet: "new int[]{0, 1, 2, 3}", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 1, meldung: "Bei `{2, 1}` muss die 1 eingefügt werden. Bei welchem `i` beginnt die äußere Schleife, und welchen Index hat die 1?" }
      - { wert: 2, meldung: "Wenn ein Wert bis Index 0 wandert, darf die Bedingung `data[j - 1]` nicht mehr lesen. Welcher Teil der Bedingung muss das verhindern?" }
hinweise:
  - Vergleiche die Vorlage Zeile für Zeile mit `insertionSort` aus der Vorlesung. Zwei Zahlen oder Zeichen weichen ab.
  - Ein Fehler steckt im Startwert der äußeren Schleife, der andere in der Grenzprüfung der inneren Schleife.
loesung: |
  **Ansatz:** Mit dem Original vergleichen und jeden Unterschied mit einem Gegenbeispiel prüfen.
  ---
  Fehler 1: `int i = 2` überspringt das Einfügen von `data[1]`. Bei `{2, 1}` läuft die äußere Schleife gar nicht. Richtig ist `int i = 1`.
  ---
  Fehler 2: `j >= 0` lässt `j = 0` zu, dann wird `data[-1]` gelesen. Richtig ist `j > 0`. Die anderen Zeilen stimmen: Getauscht wird nur bei echt kleiner, also bleibt das Verfahren stabil.
```

```reflexion
frage: Warum genügt für „falsch“ ein einziges Gegenbeispiel, während du für „richtig“ ein Argument für alle Arrays brauchst?
antwort: |
  Die Aussage im Quiz behauptet etwas für **alle** Arrays: Jedes wird sortiert, bei jedem endet der Algorithmus. Eine
  solche Allaussage ist schon falsch, wenn sie für ein einziges Array nicht stimmt. Umgekehrt beweisen auch viele
  gelungene Beispiele nicht, dass es kein misslungenes gibt. Darum argumentiert man für „richtig“ über den Code: Die
  geänderte Fassung vergleicht dieselben Paare, oder sie macht nur zusätzliche Durchläufe, die nichts ändern können.
  Im Quiz ist das eine gute Arbeitsteilung: Erst kurz nach einem Gegenbeispiel suchen, und wenn keines auftaucht,
  begründen, warum die Änderung harmlos ist.
```

## Laufzeit und Vergleich der Verfahren

```aufgabe
id: so-lz-check-summe
titel: Eine Summe aus verschachtelten Schleifen
niveau: 1
art: check
angabe: |
  Wie oft wird `z++` ausgeführt? (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))

  ```java
  int z = 0;
  for (int i = 0; i < 5; i++) {
      for (int j = i + 1; j < 5; j++) {
          z++;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "4 + 3 + 2 + 1"
    fehler:
      - wert: "25"
        meldung: Die innere Schleife beginnt bei `i + 1`. Sie wird also mit jedem `i` kürzer und läuft nicht jedes Mal 5-mal.
      - wert: "15"
        meldung: 'Bei `i = 0` läuft `j` von 1 bis 4, das sind 4 Durchläufe, nicht 5.'
loesung: |
  Bei `i = 0` läuft `j` von 1 bis 4: 4-mal. Bei `i = 1`: 3-mal, bei `i = 2`: 2-mal, bei `i = 3`: einmal, bei `i = 4`: keinmal.
  ---
  Zusammen `4 + 3 + 2 + 1 = 10`.
```

Alle drei Verfahren sortieren richtig. Aber wie schnell? Eine Messung mit der Stoppuhr hilft nur begrenzt.
Sie hängt vom Rechner, von anderen laufenden Programmen und von der Java-Version ab. Deshalb **zählt** man lieber,
wie oft die wichtigsten Schritte ausgeführt werden. Beim Sortieren sind das die **Vergleiche** zweier Werte und die
**Vertauschungen**, also die Aufrufe von `exchange`. Sie stehen in der innersten Schleife.

### Die Summe 1 + 2 + … + (n − 1)

Bubblesort und Selectionsort vergleichen bei einem Array der Länge `n` im ersten Durchlauf `n - 1`-mal, im zweiten
`n - 2`-mal und so weiter bis 1. Für die Summe gibt es eine Abkürzung. Schreib die Summe vorwärts und rückwärts
untereinander, hier für `n = 5`:

```text
  1 + 2 + 3 + 4
  4 + 3 + 2 + 1
  -------------
  5 + 5 + 5 + 5   = 4 · 5 = 20
```

Jede Spalte ergibt `n = 5`, und es gibt `n - 1 = 4` Spalten. Die doppelte Summe ist also `(n - 1) · n`, die
einfache Summe die Hälfte davon:

$$1 + 2 + \dots + (n-1) = \frac{n \cdot (n-1)}{2}$$

Dabei ist $n$ die Länge des Arrays. Für $n = 5$ ergibt das $\frac{5 \cdot 4}{2} = 10$, für $n = 1000$ schon
$\frac{1000 \cdot 999}{2} = 499\,500$. Für große $n$ ist das ungefähr $\frac{n^2}{2}$, also etwa die Hälfte von „$n$ mal $n$“.

### Fehlstände zählen die Tausche

Auch für die Tausche gibt es eine Abkürzung. Ein **Fehlstand** ist ein Paar von Positionen, bei dem der
größere Wert links steht. Genauer: zwei Indizes `i < j` mit `a[i] > a[j]`. Die beiden Werte müssen nicht nebeneinander
stehen. Ein sortiertes Array hat keinen Fehlstand.

**Beispiel:** `{6, 2, 9, 4, 1}` hat 7 Fehlstände: (6, 2), (6, 4), (6, 1), (2, 1), (9, 4), (9, 1) und (4, 1).

Bubblesort und Insertionsort tauschen nur **Nachbarn**, und nur wenn der linke Wert echt größer ist. Ein solcher
Tausch beseitigt genau einen Fehlstand, nämlich den der beiden getauschten Werte. Alle anderen Paare behalten ihre
Reihenfolge. Am Ende gibt es keinen Fehlstand mehr. Darum gilt: **Bubblesort und Insertionsort tauschen genau so oft,
wie das Array Fehlstände hat**. Für `{6, 2, 9, 4, 1}` waren es in [19.2 Bubblesort: benachbarte Werte vertauschen](/lernen/ep1/sortieren/bubblesort-benachbarte-werte-vertauschen) und
[19.4 Insertionsort: einfügen wie bei Spielkarten](/lernen/ep1/sortieren/insertionsort-einfuegen-wie-bei-spielkarten) tatsächlich beide Male 7 Tausche.

:::beispiel[Drei Verfahren, ein Array, gezählt]
Für `{6, 2, 9, 4, 1}` mit `n = 5` haben wir in den letzten Lektionen mitgezählt:

|Verfahren|Vergleiche|Aufrufe von `exchange`|
|---|---|---|
|Bubblesort|10|7|
|Selectionsort|10|4|
|Insertionsort|9|7|

- **Bubblesort:** Die Vergleiche sind `4 + 3 + 2 + 1 = 10`, fest durch die Schleifengrenzen. Die Tausche sind die
  7 Fehlstände.
- **Selectionsort:** Ebenfalls `4 + 3 + 2 + 1 = 10` Vergleiche, aber nur `n - 1 = 4` Tausche, einer pro Durchlauf.
- **Insertionsort:** Die Vergleiche hängen davon ab, wie weit jede Karte wandert, hier `1 + 1 + 3 + 4 = 9`. Die
  Tausche sind wieder die 7 Fehlstände.

Kein Verfahren ist in allem besser. Selectionsort tauscht am wenigsten. Insertionsort vergleicht hier am
wenigsten, und auf fast sortierten Daten sogar viel weniger.
:::

```aufgabe
id: so-lz-fehlstaende
titel: Fehlstände zählen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Wie viele Fehlstände hat das Array `{5, 1, 4, 2}`? Ein Fehlstand ist ein Paar von Indizes `i < j` mit
  `a[i] > a[j]`.
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Ein Fehlstand muss nicht aus Nachbarn bestehen. Auch die 5 und die 2 bilden einen, obwohl Werte dazwischen stehen.'
      - wert: "6"
        meldung: 'Gezählt werden nur Paare, bei denen der **linke** Wert größer ist. Das Paar (1, 4) steht richtig herum.'
hinweise:
  - Nimm jeden Wert und zähle, wie viele kleinere Werte rechts von ihm stehen. Addiere diese Zahlen.
loesung: |
  **Ansatz:** Für jeden Wert die kleineren Werte rechts von ihm zählen.
  ---
  Rechts von der 5 sind 1, 4 und 2 kleiner: 3 Fehlstände. Rechts von der 1 ist nichts kleiner. Rechts von der 4 ist die 2 kleiner: 1 Fehlstand.
  ---
  Zusammen `3 + 0 + 1 = 4`. Bubblesort und Insertionsort würden für dieses Array also je 4-mal tauschen.
```

```aufgabe
id: so-lz-vergleiche-sel
titel: Vergleiche bei Selectionsort
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  `selectionSort` aus der Vorlesung sortiert ein Array der Länge 8. Wie oft wird `data[j] < data[min]` ausgewertet?
teile:
  - typ: zahl
    loesung: "8 * 7 / 2"
    fehler:
      - wert: "64"
        meldung: 'Die innere Schleife läuft nicht jedes Mal 8-mal. Sie beginnt bei `i + 1` und wird mit jedem Durchlauf kürzer.'
      - wert: "56"
        meldung: Du hast `n · (n - 1)` gerechnet. Die Summe `7 + 6 + … + 1` ist nur die Hälfte davon.
      - wert: "7"
        meldung: 7 ist die Zahl der Durchläufe der äußeren Schleife. Jeder Durchlauf vergleicht mehrmals.
hinweise:
  - 'Im Durchlauf `i` läuft `j` von `i + 1` bis 7. Das sind `7 - i` Vergleiche.'
  - Addiere `7 + 6 + … + 1` oder verwende die Formel `n · (n - 1) / 2`.
loesung: |
  **Ansatz:** Vergleiche pro Durchlauf bestimmen und addieren.
  ---
  `i = 0`: 7 Vergleiche, `i = 1`: 6, und so weiter bis `i = 6`: 1 Vergleich.
  ---
  Summe `7 + 6 + 5 + 4 + 3 + 2 + 1 = 8 · 7 / 2 = 28`. Das gilt für jedes Array der Länge 8, auch für ein schon sortiertes.
```

### Bester und schlechtester Fall

Bei Bubblesort in der Fassung der Vorlesung und bei Selectionsort hängt die Zahl der Vergleiche nur von `n` ab. Bei
Insertionsort und bei Bubblesort mit Abbruch hängt sie auch von den Daten ab. Man unterscheidet deshalb den
**besten Fall**, also die günstigste Eingabe einer Länge, und den **schlechtesten Fall**, die ungünstigste.

|Verfahren|bester Fall|schlechtester Fall|
|---|---|---|
|Bubblesort (Vorlesung)|`n(n-1)/2` Vergleiche|`n(n-1)/2` Vergleiche|
|Bubblesort mit Abbruch|`n - 1` (sortiert, ein Durchlauf)|etwa `n · n` (absteigend)|
|Selectionsort|`n(n-1)/2` Vergleiche|`n(n-1)/2` Vergleiche|
|Insertionsort|`n - 1` (sortiert)|`n(n-1)/2` (absteigend)|

Für einen groben Vergleich gibt es die **O-Notation**, gesprochen „Groß-O“. $O(n^2)$ heißt: Die Arbeit wächst
höchstens wie $n^2$, bis auf einen festen Faktor. $O(n)$ heißt: Sie wächst höchstens so schnell wie $n$ selbst.
[17.4 Die O-Notation: nur das Wachstum zählt](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt)
erklärt die genaue Definition. Für dieses Kapitel genügt die Faustregel:
Bei $O(n^2)$ führt die **doppelte** Länge zu etwa der **vierfachen** Arbeit, denn $(2n)^2 = 4n^2$. Bei $O(n)$
verdoppelt sich die Arbeit nur.

:::beispiel[Gemessene Laufzeiten aus der Vorlesung]
Die Folien der EP1-Vorlesung (Wintersemester 2021/22) zeigen gemessene Zeiten für Arrays mit Zufallszahlen,
gemittelt über zehn Messungen auf einem Intel Core i7 mit Java 14:

|n|Bubblesort|Insertionsort|Selectionsort|
|---|---|---|---|
|20000|0,43 s|0,05 s|0,09 s|
|40000|1,80 s|0,19 s|0,36 s|
|80000|7,28 s|0,79 s|1,42 s|

Von 20000 auf 40000 wächst die Zeit von Bubblesort um den Faktor `1,80 / 0,43 ≈ 4,2`, von 40000 auf 80000 um
`7,28 / 1,80 ≈ 4,0`. Genau das sagt $O(n^2)$ voraus: doppelte Länge, etwa vierfache Zeit. Alle drei Verfahren liegen
im schlechtesten und im durchschnittlichen Fall in $O(n^2)$. Trotzdem ist Insertionsort hier rund neunmal schneller
als Bubblesort. Die O-Notation vergleicht nur das Wachstum, nicht die festen Faktoren.
:::

:::achtung[Selectionsort profitiert nicht von Vorsortierung]
„Das Array ist schon fast sortiert, also ist Selectionsort schnell fertig.“ Das stimmt nicht. Selectionsort sucht in
jedem Durchlauf das Minimum im ganzen Rest und muss dafür jeden Wert ansehen. Bei `{1, 2, 3, 4, 5}` sind es genau wie
bei `{5, 4, 3, 2, 1}` `4 + 3 + 2 + 1 = 10` Vergleiche. Nur die Tausche ändern nichts mehr. Von Vorsortierung
profitieren Insertionsort und Bubblesort mit Abbruch. Dort sinkt die Arbeit auf `n - 1` Vergleiche.
:::

```aufgabe
id: so-lz-insertion-worst
titel: Insertionsort im schlechtesten Fall
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  `insertionSort` aus der Vorlesung sortiert `{6, 5, 4, 3, 2, 1}`.
teile:
  - typ: zahl
    label: Wie oft wird `exchange` aufgerufen?
    loesung: "6 * 5 / 2"
    fehler:
      - wert: "5"
        meldung: 'Jede neue Karte wandert bis ganz nach vorne. Die Karte im Durchlauf `i` wird also `i`-mal getauscht, nicht nur einmal.'
      - wert: "21"
        meldung: 'Die erste Karte `data[0]` wird nicht eingefügt. Die Summe ist `1 + 2 + 3 + 4 + 5`.'
  - typ: zahl
    label: Wie oft wird der Vergleich `data[j] < data[j - 1]` ausgewertet?
    loesung: "15"
    fehler:
      - wert: "20"
        meldung: 'Erreicht die Karte Index 0, ist `j > 0` falsch. Wegen der Kurzschlussauswertung wird der Vergleich dann gar nicht mehr ausgeführt.'
hinweise:
  - Jede neue Karte ist kleiner als alle Werte links von ihr. Wie weit wandert sie?
  - 'Endet die innere Schleife wegen `j > 0`, wird `data[j] < data[j - 1]` nicht mehr ausgewertet.'
gefuehrt:
  - text: 'Durchlauf `i = 1`: Die 5 wandert vor die 6. Wie oft wird getauscht?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Ein Tausch, dann ist `j = 0`, und die Schleife endet über `j > 0`.'
  - text: 'Durchlauf `i = 3`: Die 3 steht hinter `{4, 5, 6}`. Wie oft wird getauscht?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Sie ist kleiner als alle drei Werte links von ihr und wandert bis Index 0.
  - text: 'Wie viele Tausche gibt es insgesamt für `i = 1` bis 5?'
    teil: { typ: zahl, loesung: "15" }
    erklaerung: '`1 + 2 + 3 + 4 + 5 = 15`. Das ist auch die Zahl der Fehlstände: Jedes der 15 Paare steht falsch herum.'
  - text: Warum ist die Zahl der Vergleiche hier genauso groß?
    erklaerung: Jeder Vergleich führt zu einem Tausch. Die Schleife endet nie über einen falschen Vergleich, sondern immer über `j > 0`, und dann wird nicht mehr verglichen.
loesung: |
  **Ansatz:** Absteigend sortiert ist der schlechteste Fall. Jede neue Karte wandert bis ganz nach vorne.
  ---
  Im Durchlauf `i` gibt es `i` Tausche. Summe `1 + 2 + 3 + 4 + 5 = 6 · 5 / 2 = 15`.
  ---
  Jeder Vergleich ist wahr und führt zu einem Tausch. Danach endet die Schleife über `j > 0`, ohne weiteren Vergleich. Also auch 15 Vergleiche.
```

```aufgabe
id: so-lz-aussagen
titel: Bester Fall, schlechtester Fall
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über die Verfahren in der Fassung der Vorlesung. `n` ist die Länge des Arrays.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Auf einem schon sortierten Array liegt die Laufzeit von Insertionsort in $O(n)$.
        richtig: true
        erklaerung: 'Jede neue Karte braucht nur einen Vergleich, insgesamt `n - 1`.'
      - text: Selectionsort braucht auf einem schon sortierten Array weniger Vergleiche als auf einem zufälligen Array derselben Länge.
        richtig: false
        erklaerung: 'Die Schleifengrenzen hängen nur von `n` ab. Es sind immer `n(n-1)/2` Vergleiche.'
      - text: Bubblesort in der Fassung der Vorlesung ruft auf einem sortierten Array `exchange` kein einziges Mal auf.
        richtig: true
        erklaerung: Ein sortiertes Array hat keinen Fehlstand. Kein Vergleich ist wahr, also wird nie getauscht.
      - text: Bubblesort in der Fassung der Vorlesung liegt auf einem sortierten Array in $O(n)$.
        richtig: false
        erklaerung: 'Ohne Abbruch laufen trotzdem alle `n - 1` Durchläufe mit zusammen `n(n-1)/2` Vergleichen, also $O(n^2)$. Erst `bubbleSort2` mit Abbruch schafft $O(n)$.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Die Fassung der Vorlesung hat keine Abbruchbedingung. Wie viele Vergleiche macht sie auf einem sortierten Array?'
      - wert: [r, r, r, f]
        meldung: 'Selectionsort muss in jedem Durchlauf den ganzen Rest ansehen, um sicher zu sein, dass es das Minimum hat.'
hinweise:
  - Unterscheide zwischen Vergleichen und Tauschen. Ein sortiertes Array spart Tausche, aber nicht bei jedem Verfahren Vergleiche.
  - Nur Verfahren mit einer Bedingung, die von den Werten abhängt, können früher aufhören.
loesung: |
  **Ansatz:** Für jedes Verfahren fragen: Hängt das Ende der Schleifen von den Werten ab oder nur von `n`?
  ---
  Insertionsort hört bei sortierten Daten nach einem Vergleich pro Karte auf: $O(n)$, richtig. Bubblesort tauscht dort nie: richtig.
  ---
  Selectionsort und die Vorlesungsfassung von Bubblesort haben feste Grenzen. Sie vergleichen immer `n(n-1)/2`-mal: beide Aussagen falsch.
```

```aufgabe
id: so-lz-verdopplung
titel: Doppelte Länge, wie viel Zeit?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Insertionsort braucht auf deinem Rechner für ein Array mit 30000 Zufallszahlen 2 Sekunden. Wie viele Sekunden
  erwartest du ungefähr für 60000 Zufallszahlen?
teile:
  - typ: zahl
    loesung: "2 * 4"
    einheit: s
    fehler:
      - wert: "4"
        meldung: 'Doppelte Länge heißt bei $O(n^2)$ nicht doppelte Zeit. Die Arbeit wächst mit dem Quadrat der Länge.'
      - wert: "32"
        meldung: 'Der Faktor ist `2 · 2 = 4`, nicht `4 · 4 = 16`. Die Länge wird ja nur verdoppelt, und quadriert wird der Faktor 2.'
hinweise:
  - Insertionsort liegt bei Zufallsdaten in $O(n^2)$.
  - 'Wenn `n` doppelt so groß wird, wird `n · n` viermal so groß.'
loesung: |
  **Ansatz:** Insertionsort liegt im durchschnittlichen Fall in $O(n^2)$. Die Zeit wächst also etwa mit dem Quadrat der Länge.
  ---
  Die Länge verdoppelt sich. $(2n)^2 = 4n^2$, also wächst die Zeit etwa um den Faktor 4.
  ---
  Erwartung: `2 s · 4 = 8 s`. Probe mit den Messwerten der Vorlesung: Bei Insertionsort stieg die Zeit von 40000 auf 80000 Werte von 0,19 s auf 0,79 s, also um gut das Vierfache.
```

### Schneller sortieren und der Vergleich im Quiz

Es gibt Verfahren, die viel schneller sind als $O(n^2)$. Die Vorlesung zeigt zum Abschluss **Mergesort** und
**Quicksort**. Beide zerlegen das Array in zwei Teile und sortieren die Teile rekursiv, nach dem Prinzip
„Teile und herrsche“ aus
[13.5 Teile und herrsche: das Array halbieren](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren).
Mergesort liegt immer in $O(n \log n)$. Dabei ist $\log n$ ungefähr die Zahl, wie oft man $n$ halbieren kann, bis 1
übrig bleibt. Für $n = 1\,000\,000$ ist das nur etwa 20. Einzelheiten behandelt dieses Kapitel nicht.

Java selbst bietet `Arrays.sort(a)`, das ein `int`-Array schnell sortiert. **Im Programmiertest ist `Arrays.sort`
verboten**, dort schreibst du jede Sortierung selbst. Im Quiz taucht dagegen eine Methode `sort` auf, von der die
Angabe sagt, dass sie im schlechtesten Fall in $O(n \log n)$ liegt. Dazu kommt oft `data.clone()`. Diese Methode legt
ein **neues** Array mit demselben Inhalt an, also eine echte Kopie. Auch `clone` ist im Programmiertest verboten, im
Quiz musst du es lesen können.

:::beispiel[Zwei Lösungen derselben Aufgabe vergleichen]
Aufgabe: Wie viele **verschiedene** Werte enthält `data`? Vorbedingung: `data != null`.

```java
private static int anzahlVerschieden1(int[] data) {
    int anzahl = 0;
    for (int i = 0; i < data.length; i++) {
        boolean neu = true;
        for (int j = 0; j < i; j++) {
            if (data[j] == data[i]) {
                neu = false;
            }
        }
        if (neu) {
            anzahl++;
        }
    }
    return anzahl;
}

private static int anzahlVerschieden2(int[] data) {
    int[] help = data.clone();
    sort(help);
    int anzahl = 1;
    for (int i = 1; i < help.length; i++) {
        if (help[i] != help[i - 1]) {
            anzahl++;
        }
    }
    return anzahl;
}
```

Die erste Fassung zählt `data[i]` nur, wenn der Wert nicht schon weiter links vorkam. Die zweite sortiert eine
Kopie. Dann stehen gleiche Werte nebeneinander, und jeder Wechsel zwischen Nachbarn ist ein neuer Wert.

- **Laufzeit:** Fassung 1 hat zwei verschachtelte Schleifen mit `0 + 1 + … + (n - 1)` inneren Durchläufen, also
  $O(n^2)$. Fassung 2 kopiert ($O(n)$), sortiert ($O(n \log n)$) und läuft einmal durch ($O(n)$). Hintereinander
  ausgeführte Teile addieren sich, und der größte Teil bestimmt die Schranke: $O(n \log n)$.
- **Zusätzlicher Speicher:** Fassung 1 braucht nur ein paar Variablen, also $O(1)$, eine feste Menge unabhängig von
  `n`. Fassung 2 legt mit `clone` ein zweites Array der Länge `n` an: $O(n)$.
- **Seiteneffekt:** Keine der beiden verändert `data`. Fassung 2 sortiert nur die Kopie `help`.
- **Leeres Array:** Fassung 1 liefert 0, richtig. Fassung 2 liefert 1, denn `anzahl` beginnt bei 1 und die Schleife
  läuft keinmal. Das ist ein Fehler im Randfall.
:::

:::achtung[Den Parameter selbst sortieren]
Jemand braucht den mittleren Wert eines Arrays und schreibt:

```java
private static int mitte(int[] data) {
    insertionSort(data);
    return data[data.length / 2];
}
```

Für `int[] messwerte = {9, 2, 7};` liefert `mitte(messwerte)` richtig 7. Aber danach ist `messwerte` selbst
`{2, 7, 9}`. Der Aufrufer wollte nur einen Wert wissen, und plötzlich ist seine Messreihe umsortiert. Das ist ein
**Seiteneffekt**: Die Methode verändert etwas außerhalb ihrer selbst, weil sie über die Referenz das Array des
Aufrufers sortiert (siehe [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert)).
Wer das nicht will, sortiert eine Kopie.
:::

```aufgabe
id: so-lz-slot10
titel: Zwei Lösungen im Quizformat
niveau: 3
lernziel: 7
kompetenz: begruenden
quelle: nach TUWEL-Test 2 (WS 2021), Frage 10 (abgewandelt, eigene Aufgabe)
angabe: |
  Gesucht ist der **kleinste Abstand** zweier Werte in `data`, also das Minimum von `|data[i] - data[j]|` über alle
  `i != j`. Vorbedingung: `data != null` und `data.length >= 2`. `Math.abs(x)` liefert den Betrag von `x`, und
  `Integer.MAX_VALUE` ist der größte Wert, den ein `int` haben kann.

  ```java
  private static int minAbstand1(int[] data) {
      int min = Integer.MAX_VALUE;
      for (int i = 0; i < data.length; i++) {
          for (int j = i + 1; j < data.length; j++) {
              int d = Math.abs(data[i] - data[j]);
              if (d < min) {
                  min = d;
              }
          }
      }
      return min;
  }

  private static int minAbstand2(int[] data) {
      int[] help = data.clone();
      sort(help);
      int min = Integer.MAX_VALUE;
      for (int i = 1; i < help.length; i++) {
          if (help[i] - help[i - 1] < min) {
              min = help[i] - help[i - 1];
          }
      }
      return min;
  }
  ```

  `sort` sortiert aufsteigend und liegt im schlechtesten Fall in $O(n \log n)$. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Laufzeit von `minAbstand1` liegt im schlechtesten Fall in $O(n^2)$.
        richtig: true
        erklaerung: 'Die innere Schleife läuft insgesamt `(n - 1) + (n - 2) + … + 1 = n(n-1)/2`-mal.'
      - text: Der zusätzliche Speicherbedarf von `minAbstand2` liegt in $O(1)$.
        richtig: false
        erklaerung: '`data.clone()` legt ein zweites Array der Länge `n` an. Das ist zusätzlicher Speicher in $O(n)$.'
      - text: Nach einem Aufruf von `minAbstand2(werte)` ist das Array `werte` aufsteigend sortiert.
        richtig: false
        erklaerung: Sortiert wird nur die Kopie `help`. Das Array des Aufrufers bleibt, wie es war.
      - text: 'Stünde in `minAbstand2` statt `data.clone()` nur `data`, wäre danach das Array des Aufrufers sortiert.'
        richtig: true
        erklaerung: '`int[] help = data;` kopiert nur die Referenz. `sort(help)` sortiert dann das Array des Aufrufers.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Was macht `clone` genau? Es legt ein neues Array an. Wie groß ist dieses Array?'
      - wert: [r, f, r, f]
        meldung: '`clone` erzeugt eine echte Kopie. Welches Array sortiert `sort(help)` also?'
hinweise:
  - 'Untersuche jede Methode auf drei Dinge: Schleifenschachtelung, neu angelegte Arrays und Änderungen am Parameter.'
  - '`data.clone()` legt ein neues Array an, `help = data` dagegen nicht.'
loesung: |
  **Ansatz:** Laufzeit aus den Schleifen, Speicher aus neu angelegten Arrays, Seiteneffekt aus Änderungen über Referenzen.
  ---
  `minAbstand1` hat zwei verschachtelte Schleifen über alle Paare: $O(n^2)$, richtig. `minAbstand2` braucht für `help` Speicher in $O(n)$: Aussage 2 falsch.
  ---
  Mit `clone` bleibt `data` unverändert: Aussage 3 falsch. Ohne `clone` zeigen `help` und `data` auf dasselbe Array: Aussage 4 richtig. Beide Methoden liefern übrigens dasselbe Ergebnis, weil der kleinste Abstand immer zwischen zwei Nachbarn im sortierten Array liegt.
```

```aufgabe
id: so-lz-code
titel: Fehlstände zählen, ohne zu sortieren
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Schreib `zaehleFehlstaende(int[] a)`. Die Methode liefert die Zahl der Paare `i < j` mit `a[i] > a[j]`. Das ist
  genau die Zahl der Tausche, die Bubblesort oder Insertionsort für dieses Array bräuchten. Das Array `a` darf dabei
  **nicht** verändert werden. Vorbedingung: `a != null`.

  Beispiel: `zaehleFehlstaende(new int[]{3, 1, 2})` liefert 2, nämlich (3, 1) und (3, 2).
teile:
  - typ: code
    vorlage: |
      public class Fehlstaende {
          public static int zaehleFehlstaende(int[] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Fehlstaende {
          public static int zaehleFehlstaende(int[] a) {
              int anzahl = 0;
              for (int i = 0; i < a.length; i++) {
                  for (int j = i + 1; j < a.length; j++) {
                      if (a[i] > a[j]) {
                          anzahl++;
                      }
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "zaehleFehlstaende(new int[]{3, 1, 2})", erwartet: "2" }
      - { aufruf: "zaehleFehlstaende(new int[]{1, 2, 3, 4})", erwartet: "0", beschreibung: "sortiert: kein Fehlstand" }
      - { aufruf: "zaehleFehlstaende(new int[]{4, 3, 2, 1})", erwartet: "6", beschreibung: "absteigend: jedes Paar" }
      - { aufruf: "zaehleFehlstaende(new int[]{2, 2, 1})", erwartet: "2", beschreibung: "gleiche Werte bilden keinen Fehlstand" }
      - { vorher: "int[] a = {5, 1, 4};", aufruf: "zaehleFehlstaende(a)", ergebnis: "a", erwartet: "new int[]{5, 1, 4}", beschreibung: "das Array bleibt unverändert" }
      - { aufruf: "zaehleFehlstaende(new int[]{6, 2, 9, 4, 1})", erwartet: "7", versteckt: true }
    regeln: { verboteneApi: ["Arrays.sort"], keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Ein Fehlstand muss nicht aus Nachbarn bestehen. Vergleiche jedes Paar `i < j`, nicht nur `i` mit `i + 1`." }
      - { wert: 4, meldung: "Gleiche Werte bilden keinen Fehlstand. Vergleichst du mit `>` und nicht mit `>=`?" }
      - { wert: 5, meldung: "Das Array darf sich nicht ändern. Zähle nur, statt wirklich zu sortieren." }
hinweise:
  - Zwei verschachtelte Schleifen wie bei `minAbstand1`, mit `j` ab `i + 1`.
  - 'Zähle hoch, wenn `a[i] > a[j]`. Tausche dabei nichts.'
loesung: |
  **Ansatz:** Alle Paare `i < j` durchgehen und die falsch herum stehenden zählen. Weil nichts getauscht wird, bleibt `a` unverändert.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < a.length; i++) {
      for (int j = i + 1; j < a.length; j++) {
          if (a[i] > a[j]) {
              anzahl++;
          }
      }
  }
  return anzahl;
  ```
  ---
  Probe mit `{6, 2, 9, 4, 1}`: Die Methode liefert 7, genau die Tausche von Bubblesort und Insertionsort für dieses Array. Die Laufzeit liegt in $O(n^2)$.
```

```reflexion
frage: Insertionsort und Selectionsort liegen beide in O(n²). Warum ist es trotzdem sinnvoll zu wissen, welches Verfahren bei welchen Daten wie viel arbeitet?
antwort: |
  Die gemeinsame Schranke $O(n^2)$ beschreibt hier nur das Wachstum im schlechtesten Fall. In der Praxis zählen aber auch die konkreten
  Daten und die Art der Arbeit. Bei fast sortierten Daten macht Insertionsort nur etwa `n` Vergleiche, Selectionsort
  dagegen immer rund `n · n / 2`. Ist dagegen ein Tausch sehr teuer, etwa weil große Datensätze kopiert werden,
  gewinnt Selectionsort mit nur `n - 1` Tauschen. Und wenn gleiche Schlüssel ihre Reihenfolge behalten müssen, kommt
  Selectionsort gar nicht in Frage, weil es nicht stabil ist. Die richtige Wahl hängt also von den Daten und den
  Anforderungen ab, nicht nur von der O-Klasse.
```

## Gemischte Wiederholung

Hier mischen sich die Verfahren dieses Kapitels mit Stoff aus früheren Kapiteln: Referenzen, Zeichen als Zahlen,
Rekursion und Nachbedingungen. Drei Aufgaben fragen nur, welches Verfahren zu einer Situation passt. Dort musst du
nichts ausrechnen, sondern abwägen.

```aufgabe
id: so-mw-alias
titel: Zwei Namen, ein Array
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Alias {
          private static void sortiere(int[] data) {
              for (int i = 1; i < data.length; i++) {
                  for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
                      int swap = data[j];
                      data[j] = data[j - 1];
                      data[j - 1] = swap;
                  }
              }
          }

          public static void main(String[] args) {
              int[] a = {4, 1, 3};
              int[] b = a;
              sortiere(b);
              System.out.println(Arrays.toString(a));
              System.out.println(a == b);
          }
      }
    loesung: |
      [1, 3, 4]
      true
    fehler:
      - wert: "[4, 1, 3]\ntrue"
        meldung: '`int[] b = a;` kopiert nur die Referenz. `a` und `b` zeigen auf dasselbe Array, und genau dieses wird sortiert.'
      - wert: "[1, 3, 4]\nfalse"
        meldung: '`==` vergleicht bei Arrays die Referenzen. `a` und `b` zeigen auf dasselbe Array, also ist das Ergebnis `true`.'
hinweise:
  - Wie viele Arrays gibt es in diesem Programm? Zähle die Stellen, an denen ein Array erzeugt wird.
loesung: |
  **Ansatz:** Es gibt nur ein Array, erzeugt durch `{4, 1, 3}`. `b = a` gibt ihm einen zweiten Namen.
  ---
  `sortiere(b)` sortiert dieses eine Array, also gibt `a` danach `[1, 3, 4]` aus. `a == b` vergleicht die Referenzen und liefert `true`.
```

```aufgabe
id: so-mw-kopie
titel: Eine echte Kopie sortieren
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (Wiederholung: Kopieren in
  [12.4 Neue Arrays bauen: kopieren, umdrehen, filtern, einfügen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Kopie {
          private static void sortiere(int[] data) {
              for (int i = 0; i < data.length - 1; i++) {
                  int min = i;
                  for (int j = i + 1; j < data.length; j++) {
                      if (data[j] < data[min]) {
                          min = j;
                      }
                  }
                  int swap = data[i];
                  data[i] = data[min];
                  data[min] = swap;
              }
          }

          public static void main(String[] args) {
              int[] a = {7, 3, 5};
              int[] b = new int[a.length];
              for (int i = 0; i < a.length; i++) {
                  b[i] = a[i];
              }
              sortiere(b);
              System.out.println(Arrays.toString(a));
              System.out.println(Arrays.toString(b));
          }
      }
    loesung: |
      [7, 3, 5]
      [3, 5, 7]
    fehler:
      - wert: "[3, 5, 7]\n[3, 5, 7]"
        meldung: '`b` ist hier ein eigenes Array, angelegt mit `new`. Die Schleife überträgt nur die Werte. Sortiert wird nur `b`.'
hinweise:
  - Wie viele Arrays werden mit `new` oder mit einer Liste in geschweiften Klammern erzeugt?
loesung: |
  **Ansatz:** `new int[a.length]` erzeugt ein zweites Array, die Schleife kopiert die Werte hinein.
  ---
  `sortiere(b)` verändert nur das zweite Array. `a` bleibt `[7, 3, 5]`, `b` wird `[3, 5, 7]`.
  ---
  So vermeidest du einen Seiteneffekt: Wer das Original behalten will, sortiert eine Kopie.
```

```aufgabe
id: so-mw-zeichen
titel: Buchstaben sortieren
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Insertionsort sortiert die Zeichen eines Wortes. Zeichen werden dabei über ihren Zahlenwert verglichen
  (Wiederholung: [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)).
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      char[] z = {'T', 'o', 'r', 'a'};
      for (int i = 1; i < z.length; i++) {
          for (int j = i; j > 0 && z[j] < z[j - 1]; j--) {
              char swap = z[j];
              z[j] = z[j - 1];
              z[j - 1] = swap;
          }
      }
      System.out.println(new String(z));
    loesung: |
      Taor
    fehler:
      - wert: "aorT"
        meldung: 'Großbuchstaben haben kleinere Zahlenwerte als Kleinbuchstaben: `T` ist 84, `a` ist 97. Darum steht das `T` vorne.'
      - wert: "Tora"
        meldung: 'Insertionsort ordnet die Zeichen wirklich um. Vergleiche ihre Zahlenwerte: Ist `o` kleiner als `r`, ist `a` kleiner als `r`?'
hinweise:
  - 'Die Zahlenwerte sind `T` = 84, `a` = 97, `o` = 111, `r` = 114.'
  - '`new String(z)` macht aus dem `char`-Array wieder einen String.'
loesung: |
  **Ansatz:** Zeichen werden wie Zahlen verglichen: `T` = 84, `o` = 111, `r` = 114, `a` = 97.
  ---
  Aufsteigend nach diesen Zahlen: 84, 97, 111, 114, also `T`, `a`, `o`, `r`.
  ---
  Ausgabe `Taor`. Wer „alphabetisch ohne Groß und Klein“ sortieren will, muss vorher alles in Kleinbuchstaben umwandeln.
```

```aufgabe
id: so-mw-rekursiv
titel: Sortiert? Rekursiv geprüft
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreib `istSortiertAb(int[] a, int index)` **rekursiv und ohne Schleifen**. Die Methode liefert `true`, wenn
  `a[index]` bis `a[a.length - 1]` aufsteigend sortiert sind, sonst `false`. Der Aufruf `istSortiertAb(a, 0)` prüft
  also das ganze Array. (Wiederholung: [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen))

  Vorbedingung: `a != null` und `0 <= index`. `index` darf auch `a.length` oder größer sein, dann gibt es nichts
  mehr zu prüfen.
teile:
  - typ: code
    vorlage: |
      public class SortiertRekursiv {
          public static boolean istSortiertAb(int[] a, int index) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class SortiertRekursiv {
          public static boolean istSortiertAb(int[] a, int index) {
              if (index >= a.length - 1) {
                  return true;
              }
              if (a[index] > a[index + 1]) {
                  return false;
              }
              return istSortiertAb(a, index + 1);
          }
      }
    tests:
      - { aufruf: "istSortiertAb(new int[]{1, 2, 2, 5}, 0)", erwartet: "true" }
      - { aufruf: "istSortiertAb(new int[]{3, 1}, 0)", erwartet: "false" }
      - { aufruf: "istSortiertAb(new int[]{}, 0)", erwartet: "true", beschreibung: "leeres Array" }
      - { aufruf: "istSortiertAb(new int[]{4, 1, 2, 3}, 1)", erwartet: "true", beschreibung: "ab Index 1 sortiert" }
      - { aufruf: "istSortiertAb(new int[]{1, 2, 3, 0}, 0)", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [istSortiertAb], rekursiv: [istSortiertAb], keineHilfsmethoden: true }
    fehler:
      - { wert: 3, meldung: "Beim leeren Array ist `a.length - 1` gleich -1. Dein Basisfall muss schon greifen, bevor auf `a[index]` zugegriffen wird." }
      - { wert: 4, meldung: "Die Prüfung beginnt bei `index`, nicht bei 0. Werte links davon spielen keine Rolle." }
      - { wert: keineSchleifenIn, meldung: "In der Rekursion sind Schleifen verboten. Der rekursive Aufruf mit `index + 1` ersetzt die Schleife." }
hinweise:
  - 'Basisfall: Ab `index` gibt es kein Nachbarpaar mehr. Das ist so, wenn `index >= a.length - 1`.'
  - 'Sonst: Steht das Paar `a[index]`, `a[index + 1]` falsch herum, liefere `false`. Andernfalls frag den Rest mit `index + 1`.'
loesung: |
  **Ansatz:** Dieselbe Idee wie `istSortiert` mit Schleife. Der Index wandert als Parameter mit, und der rekursive Aufruf ersetzt die Schleife.
  ---
  ```java
  if (index >= a.length - 1) {
      return true;
  }
  if (a[index] > a[index + 1]) {
      return false;
  }
  return istSortiertAb(a, index + 1);
  ```
  ---
  Basisfall: kein Paar mehr übrig, also sortiert. Fortschritt: `index + 1`. Probe mit `{3, 1}`: `0 >= 1` ist falsch, `3 > 1` ist wahr, Ergebnis `false`.
```

```aufgabe
id: so-mw-nachbedingung
titel: Die richtige Nachbedingung
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Methode `void sortiere(int[] data)` soll `data` aufsteigend sortieren. Welche **Nachbedingung** beschreibt
  vollständig, was nach dem Aufruf gelten muss? (Wiederholung:
  [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))
teile:
  - typ: auswahl
    optionen:
      - '`data` ist aufsteigend sortiert und enthält dieselben Werte, jeden genauso oft wie vorher.'
      - '`data` ist aufsteigend sortiert.'
      - '`data[0]` ist der kleinste Wert des Arrays.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Diese Bedingung erfüllt auch eine Methode, die jedes Element auf 0 setzt. Das Array ist dann „sortiert“, aber die Werte sind weg.'
      - wert: 2
        meldung: 'Das gilt schon nach dem ersten Durchlauf von Selectionsort, obwohl der Rest noch unsortiert sein kann.'
hinweise:
  - Suche für jede Option eine falsche Methode, die sie trotzdem erfüllt.
  - Eine Nachbedingung muss alles festhalten, worauf sich der Aufrufer verlassen will.
loesung: |
  **Ansatz:** Eine Nachbedingung ist zu schwach, wenn auch eine eindeutig falsche Methode sie erfüllt.
  ---
  „Aufsteigend sortiert“ allein erfüllt auch `for (...) data[i] = 0;`. „`data[0]` ist das Minimum“ erfüllt schon ein einzelner Durchlauf.
  ---
  Vollständig ist erst die erste Option: sortiert **und** mit denselben Werten in derselben Anzahl. Man sagt auch: Das Ergebnis ist eine sortierte Umordnung der Eingabe.
```

```aufgabe
id: so-mw-passt-fast
titel: 'Welches Verfahren passt? Fast sortierte Daten'
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Wetterstation speichert jede Minute einen Messwert mit Uhrzeit. Die Werte kommen fast immer in der richtigen
  zeitlichen Reihenfolge an. Nur selten ist ein Wert um ein, zwei Plätze vertauscht. Das Array soll nach der Uhrzeit
  sortiert werden. Welches der drei Verfahren der Vorlesung passt am besten?
teile:
  - typ: auswahl
    optionen: [Insertionsort, Selectionsort, Bubblesort in der Fassung der Vorlesung]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Selectionsort macht immer `n(n-1)/2` Vergleiche, auch bei fast sortierten Daten. Es nutzt die Vorsortierung nicht.
      - wert: 2
        meldung: Die Fassung der Vorlesung läuft immer alle Durchläufe mit allen Vergleichen, auch wenn nichts mehr zu tun ist.
hinweise:
  - Welches Verfahren hört in der inneren Schleife auf, sobald ein Wert an seinem Platz ist?
loesung: |
  **Ansatz:** Gesucht ist ein Verfahren, das von Vorsortierung profitiert.
  ---
  Bei Insertionsort wandert jede Karte nur so weit, wie sie falsch steht. Bei fast sortierten Daten sind das kaum Schritte, die Arbeit liegt nahe bei `n`. Insertionsort ist die beste Wahl.
```

```aufgabe
id: so-mw-passt-teuer
titel: 'Welches Verfahren passt? Teure Tausche'
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Sortiert werden sollen 200 große Datensätze, etwa ganze Bilder mit einem Zahlenschlüssel. Ein Vergleich zweier
  Schlüssel geht schnell, aber jeder Tausch kopiert zwei Bilder und dauert lange. Gleiche Schlüssel kommen nicht vor.
  Welches Verfahren der Vorlesung passt am besten?
teile:
  - typ: auswahl
    optionen: [Selectionsort, Insertionsort, Bubblesort]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Insertionsort tauscht so oft, wie es Fehlstände gibt. Bei Zufallsdaten sind das im Mittel etwa `n · n / 4` Tausche.
      - wert: 2
        meldung: Bubblesort tauscht genauso oft wie Insertionsort, nämlich für jeden Fehlstand einmal.
hinweise:
  - Vergleiche, wie viele Tausche jedes Verfahren höchstens braucht.
  - Stabilität spielt hier keine Rolle, weil es keine gleichen Schlüssel gibt.
loesung: |
  **Ansatz:** Teuer sind hier die Tausche, nicht die Vergleiche.
  ---
  Selectionsort tauscht genau einmal pro Durchlauf, also höchstens 199-mal. Bubblesort und Insertionsort tauschen einmal pro Fehlstand, im schlechtesten Fall `200 · 199 / 2 = 19 900`-mal.
  ---
  Die Schwäche von Selectionsort, die fehlende Stabilität, stört nicht, weil alle Schlüssel verschieden sind. Selectionsort passt am besten.
```

```aufgabe
id: so-mw-passt-stabil
titel: 'Welches Verfahren passt? Zwei Merkmale'
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Teilnehmerliste ist bereits alphabetisch nach Namen sortiert. Jetzt soll sie nach dem Geburtsjahr sortiert
  werden. Innerhalb eines Jahrgangs sollen die Namen alphabetisch bleiben. Zur Auswahl stehen Selectionsort und
  Insertionsort. Welches nimmst du, und warum?
teile:
  - typ: auswahl
    optionen: ['Insertionsort, weil es stabil ist.', 'Selectionsort, weil es weniger tauscht.', 'Beide, weil beide richtig sortieren.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Weniger Tausche helfen nicht, wenn das Ergebnis die Reihenfolge innerhalb eines Jahrgangs zerstört. Selectionsort ist nicht stabil.'
      - wert: 2
        meldung: 'Beide sortieren nach Jahrgang richtig. Aber nur ein stabiles Verfahren bewahrt die alphabetische Reihenfolge innerhalb eines Jahrgangs.'
hinweise:
  - Was passiert mit zwei Personen desselben Jahrgangs? Welche Eigenschaft sorgt dafür, dass ihre Reihenfolge bleibt?
loesung: |
  **Ansatz:** Die alphabetische Ordnung innerhalb eines Jahrgangs bleibt nur erhalten, wenn gleiche Schlüssel ihre Reihenfolge behalten.
  ---
  Das ist genau die Stabilität. Insertionsort ist stabil, Selectionsort nicht.
  ---
  Also Insertionsort. Selectionsort könnte zwei Personen desselben Jahrgangs bei einem weiten Tausch vertauschen.
```

```aufgabe
id: so-mw-zwischenstand
titel: Welches Verfahren, wie weit?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Ausgangsbelegung `{5, 9, 2, 6, 1, 4}`. Ordne jeder Belegung das Verfahren zu, das sie nach genau zwei Durchläufen
  der inneren Schleife erzeugt.
teile:
  - typ: auswahl
    label: '`{2, 5, 1, 4, 6, 9}`'
    optionen: [Bubblesort, Selectionsort, Insertionsort]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach zwei Durchläufen von Selectionsort stünden die zwei kleinsten Werte 1 und 2 vorne.
      - wert: 2
        meldung: Nach zwei Durchläufen von Insertionsort wären nur die ersten drei Werte umgeordnet, die 1 und 4 stünden noch hinten.
  - typ: auswahl
    label: '`{1, 2, 9, 6, 5, 4}`'
    optionen: [Bubblesort, Selectionsort, Insertionsort]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Nach zwei Durchläufen von Bubblesort müssten 6 und 9 rechts stehen.
      - wert: 2
        meldung: Insertionsort holt keine Werte von rechts. Die 1 steht an Index 4 und käme erst im vierten Durchlauf (`i = 4`) nach vorne.
  - typ: auswahl
    label: '`{2, 5, 9, 6, 1, 4}`'
    optionen: [Bubblesort, Selectionsort, Insertionsort]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Bei Bubblesort stünde die 9 nach dem ersten Durchlauf schon ganz rechts.
      - wert: 1
        meldung: Bei Selectionsort stünde nach dem ersten Durchlauf die 1 vorne.
hinweise:
  - 'Nutze die Fingerabdrücke aus [19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen). Wo stehen die größten Werte, wo die kleinsten, was ist unverändert?'
loesung: |
  **Ansatz:** Fingerabdrücke prüfen und zur Sicherheit nachrechnen.
  ---
  `{2, 5, 1, 4, 6, 9}`: rechts die zwei größten Werte sortiert, Bubblesort. `{1, 2, 9, 6, 5, 4}`: links die zwei kleinsten Werte, Selectionsort.
  ---
  `{2, 5, 9, 6, 1, 4}`: die ersten drei Werte 5, 9, 2 sortiert, der Rest unverändert, Insertionsort.
```

## Prüfungsaufgaben

Die ersten drei Aufgaben sind im Format der bisherigen TUWEL-Tests gebaut: vier Aussagen, je richtig oder falsch,
zusammen 2 Punkte mit Teilpunkten. Rechne pro Frage mit etwa 4 bis 5 Minuten. Die Programmieraufgaben folgen den
Regeln der Aufgabenblätter und des Programmiertests: Methodenkopf nicht ändern, keine Hilfsmethoden, kein
`Arrays.sort`. Die Zeitangaben sind Richtwerte für die Prüfungssituation.

```aufgabe
id: so-pa-zwischen
titel: Quizfrage zu Insertionsort
niveau: 3
punkte: 2
lernziel: 4
kompetenz: verstehen
quelle: nach TUWEL-Test 2 (WS 2021, 13.01.2022), Frage 8 (abgewandelt)
angabe: |
  **Zeitrichtwert: 4 Minuten.** Gegeben ist `insertionSort` aus der Vorlesung:

  ```java
  for (int i = 1; i < data.length; i++) {
      for (int j = i; j > 0 && data[j] < data[j - 1]; j--) {
          exchange(data, j, j - 1);
      }
      // Zeile A
  }
  ```

  Ausgangsbelegung: `data = {6, 3, 8, 2, 7, 4}`. Kann die jeweilige Belegung an Zeile A auftreten, also nach
  irgendeinem Durchlauf der inneren Schleife?
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`{3, 6, 8, 2, 7, 4}`'
        richtig: true
        erklaerung: 'Nach `i = 1` (3 vor 6) und unverändert nach `i = 2` (8 bleibt stehen).'
      - text: '`{3, 6, 2, 8, 7, 4}`'
        richtig: false
        erklaerung: 'Das ist ein Zwischenstand **innerhalb** der inneren Schleife bei `i = 3`. Die 2 wandert danach noch weiter bis Index 0. An Zeile A steht `{2, 3, 6, 8, 7, 4}`.'
      - text: '`{2, 3, 6, 7, 8, 4}`'
        richtig: true
        erklaerung: 'Nach `i = 4`: Die 7 ist an der 8 vorbei gewandert. Die 4 am Ende ist noch unverändert.'
      - text: '`{2, 3, 6, 8, 4, 7}`'
        richtig: false
        erklaerung: 'Links stimmen die ersten vier Werte, aber rechts müsste 7, 4 stehen wie in der Ausgangsbelegung.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zeile A steht **nach** der inneren Schleife. Ein Zustand, in dem die neue Karte noch auf halbem Weg ist, zählt nicht.'
      - wert: [r, f, r, r]
        meldung: 'Bei Insertionsort ist der Teil rechts der neuen Karte immer unverändert. Vergleiche ihn mit der Ausgangsbelegung.'
hinweise:
  - 'Fingerabdruck: Links die ersten `k + 1` Werte der Ausgangsbelegung sortiert, rechts alles unverändert.'
  - Achte darauf, dass Zeile A erst nach dem kompletten Einfügen einer Karte erreicht wird.
loesung: |
  **Ansatz:** Die Zustände an Zeile A ausrechnen, das geht bei Insertionsort mit dem Fingerabdruck schnell.
  ---
  `i = 1`: `{3, 6, 8, 2, 7, 4}`. `i = 2`: unverändert. `i = 3`: `{2, 3, 6, 8, 7, 4}`. `i = 4`: `{2, 3, 6, 7, 8, 4}`. `i = 5`: `{2, 3, 4, 6, 7, 8}`.
  ---
  Belegungen 1 und 3 kommen vor. Belegung 2 ist ein Zustand mitten im Einfügen, Belegung 4 hat einen veränderten rechten Teil. Antwort: richtig, falsch, richtig, falsch.
```

```aufgabe
id: so-pa-mutation
titel: Quizfrage zu Bubblesort mit Abbruch
niveau: 3
punkte: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  **Zeitrichtwert: 5 Minuten.** Gegeben ist `bubbleSort2` aus der Vorlesung:

  ```java
  boolean notSorted = true;                           // Zeile A
  while (notSorted) {
      notSorted = false;
      for (int i = 0; i < data.length - 1; i++) {     // Zeile B
          if (data[i] > data[i + 1]) {                // Zeile C
              exchange(data, i, i + 1);               // Zeile D
              notSorted = true;                       // Zeile E
          }
      }
  }
  ```

  Beurteile für jede Änderung: „Der Algorithmus terminiert noch immer korrekt, sortiert alle Arrays mit einer
  Länge größer 0 aufsteigend und ist stabil.“
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Zeile A: `boolean notSorted = false;`'
        richtig: false
        erklaerung: 'Die `while`-Schleife läuft dann keinmal. Gegenbeispiel `{2, 1}` bleibt unsortiert.'
      - text: 'Zeile B: `for (int i = data.length - 2; i >= 0; i--)`'
        richtig: true
        erklaerung: 'Jeder Durchlauf vergleicht dieselben Paare, nur von rechts nach links. Die `while`-Schleife wiederholt so lange, bis ein Durchlauf ohne Tausch bleibt. Dann ist das Array sortiert.'
      - text: 'Zeile C: `if (data[i] >= data[i + 1])`'
        richtig: false
        erklaerung: 'Bei zwei gleichen Nachbarn wird in jedem Durchlauf getauscht und `notSorted` auf `true` gesetzt. Für `{1, 1}` endet die Schleife nie.'
      - text: 'Zeile D und E vertauscht: erst `notSorted = true;`, dann `exchange(data, i, i + 1);`'
        richtig: true
        erklaerung: Beide Anweisungen stehen im selben `if`-Block und beeinflussen sich nicht. Die Reihenfolge ist egal.
    fehler:
      - wert: [f, f, r, r]
        meldung: 'Was passiert bei `>=` mit `{1, 1}`? Gibt es jemals einen Durchlauf ohne Tausch?'
      - wert: [f, f, f, r]
        meldung: 'Bei der zweiten Änderung entscheidet die `while`-Schleife über das Ende. Wann bricht sie ab, egal in welcher Richtung verglichen wird?'
hinweise:
  - Bei `bubbleSort2` entscheidet die Variable `notSorted` über das Ende. Prüfe für jede Änderung, ob irgendwann ein Durchlauf ohne Tausch möglich ist.
  - 'Gute Testarrays: `{2, 1}` und `{1, 1}`.'
loesung: |
  **Ansatz:** Prüfliste, mit besonderem Blick auf die Abbruchbedingung `notSorted`.
  ---
  Änderung 1: kein einziger Durchlauf, `{2, 1}` bleibt: falsch. Änderung 3: Gleiche Nachbarn werden endlos getauscht: falsch.
  ---
  Änderung 2: Die Schleife endet erst nach einem tauschfreien Durchlauf, und dann ist das Array sortiert. Getauscht werden nur Nachbarn bei echt größer, also stabil: richtig. Änderung 4: richtig.
```

```aufgabe
id: so-pa-vergleich
titel: Quizfrage zu zwei Lösungen
niveau: 3
punkte: 2
lernziel: 7
kompetenz: begruenden
quelle: nach TUWEL-Test 2 (WS 2021, 13.01.2022), Frage 10 (abgewandelt, eigene Aufgabe)
angabe: |
  **Zeitrichtwert: 5 Minuten.** Geprüft werden soll, ob das Array `b` eine **Umordnung** von `a` ist, also dieselben
  Werte gleich oft enthält. Vorbedingung: `a != null` und `b != null`. `sort` sortiert aufsteigend in
  $O(n \log n)$, `clone` erzeugt eine Kopie. `n` ist die Länge von `a`.

  ```java
  private static boolean istUmordnung1(int[] a, int[] b) {
      if (a.length != b.length) {
          return false;
      }
      for (int i = 0; i < a.length; i++) {
          int inA = 0;
          int inB = 0;
          for (int j = 0; j < a.length; j++) {
              if (a[j] == a[i]) {
                  inA++;
              }
              if (b[j] == a[i]) {
                  inB++;
              }
          }
          if (inA != inB) {
              return false;
          }
      }
      return true;
  }

  private static boolean istUmordnung2(int[] a, int[] b) {
      if (a.length != b.length) {
          return false;
      }
      int[] x = a.clone();
      int[] y = b.clone();
      sort(x);
      sort(y);
      for (int i = 0; i < x.length; i++) {
          if (x[i] != y[i]) {
              return false;
          }
      }
      return true;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Laufzeit von `istUmordnung1` liegt im schlechtesten Fall in $O(n^2)$.
        richtig: true
        erklaerung: 'Für jedes `i` läuft die innere Schleife `n`-mal, zusammen `n · n` Durchläufe.'
      - text: Der zusätzliche Speicherbedarf von `istUmordnung2` liegt in $O(1)$.
        richtig: false
        erklaerung: 'Die beiden Kopien `x` und `y` haben je die Länge `n`. Das ist $O(n)$.'
      - text: Nach einem Aufruf von `istUmordnung2(a, b)` sind `a` und `b` aufsteigend sortiert.
        richtig: false
        erklaerung: Sortiert werden nur die Kopien. `a` und `b` bleiben unverändert.
      - text: Für zwei leere Arrays liefern beide Methoden `true`.
        richtig: true
        erklaerung: 'Die Längen sind gleich, und keine Schleife läuft. Beide erreichen `return true;`.'
    fehler:
      - wert: [r, r, f, r]
        meldung: '`clone` legt ein neues Array derselben Länge an. Wie viel Speicher braucht das bei Länge `n`?'
      - wert: [r, f, r, r]
        meldung: 'Welche Arrays werden in `istUmordnung2` sortiert: `a` und `b` oder ihre Kopien?'
hinweise:
  - 'Prüfe je Methode: Schleifenschachtelung, neue Arrays, Änderungen an den Parametern, Verhalten bei leeren Arrays.'
  - Setze für die letzte Aussage `a = {}` und `b = {}` in beide Methoden ein.
loesung: |
  **Ansatz:** Laufzeit, Speicher, Seiteneffekt und Randfall der Reihe nach.
  ---
  `istUmordnung1` hat zwei volle Schleifen über `n`: $O(n^2)$, richtig. `istUmordnung2` legt zwei Kopien an: Speicher $O(n)$, Aussage 2 falsch.
  ---
  Sortiert werden nur `x` und `y`: Aussage 3 falsch. Bei zwei leeren Arrays laufen keine Schleifen, beide liefern `true`: richtig.
```

```aufgabe
id: so-pa-trace
titel: Drei Verfahren, zwei Durchläufe
niveau: 3
punkte: 4
lernziel: 1
kompetenz: rechnen
angabe: |
  **Zeitrichtwert: 8 Minuten.** Die Ausgangsbelegung ist `{7, 4, 8, 3, 9, 1}`. Trag für jedes Verfahren der
  Vorlesung die Belegung nach genau **zwei** Durchläufen der inneren Schleife ein.
teile:
  - typ: trace
    spalten: ['data[0]', 'data[1]', 'data[2]', 'data[3]', 'data[4]', 'data[5]']
    zeilen: [Ausgangsbelegung, Bubblesort, Selectionsort, Insertionsort]
    vorgabe: 1
    loesung: [[7, 4, 8, 3, 9, 1], [4, 3, 7, 1, 8, 9], [1, 3, 8, 4, 9, 7], [4, 7, 8, 3, 9, 1]]
    fehler:
      - wert: ["7", "4", "8", "3", "9", "1", "4", "7", "3", "8", "1", "9", "1", "3", "8", "4", "9", "7", "4", "7", "8", "3", "9", "1"]
        meldung: 'Die Zeile für Bubblesort zeigt erst den Stand nach **einem** Durchlauf. Im zweiten wandert auch die 8 noch nach rechts.'
      - wert: ["7", "4", "8", "3", "9", "1", "4", "3", "7", "1", "8", "9", "1", "3", "4", "7", "8", "9", "4", "7", "8", "3", "9", "1"]
        meldung: 'Selectionsort tauscht pro Durchlauf genau zwei Plätze. Nach zwei Durchläufen sind nur die Indizes 0 und 1 fertig, der Rest ist nicht sortiert.'
hinweise:
  - Rechne jedes Verfahren getrennt. Bubblesort bringt große Werte nach rechts, Selectionsort kleine nach links, Insertionsort sortiert nur den Anfang.
  - 'Insertionsort: Im zweiten Durchlauf ist die 8 die neue Karte. Muss sie wandern?'
loesung: |
  **Ansatz:** Jedes Verfahren zwei Durchläufe weit ausführen.
  ---
  Bubblesort: Durchlauf 1 ergibt `{4, 7, 3, 8, 1, 9}`, Durchlauf 2 ergibt `{4, 3, 7, 1, 8, 9}`.
  ---
  Selectionsort: Die 1 tauscht mit der 7, `{1, 4, 8, 3, 9, 7}`. Dann tauscht die 3 mit der 4, `{1, 3, 8, 4, 9, 7}`.
  ---
  Insertionsort: Die 4 wandert vor die 7, `{4, 7, 8, 3, 9, 1}`. Die 8 bleibt stehen. Probe über die Fingerabdrücke: rechts 8 und 9, links 1 und 3, vorne die ersten drei Werte sortiert.
```

```aufgabe
id: so-pa-zeichen
titel: Die Zeichen eines Strings sortieren
niveau: 3
punkte: 6
lernziel: 1
kompetenz: anwenden
quelle: nach einem älteren Aufgabenblatt 3 (Methode, die die Zeichen eines Strings mit Bubblesort sortiert), umformuliert
angabe: |
  **Zeitrichtwert: 15 Minuten.** Schreib `sortiereZeichen(String s)`. Die Methode liefert einen neuen String mit
  denselben Zeichen wie `s`, aufsteigend nach ihrem Zahlenwert sortiert. Verwende **Bubblesort** auf einem
  `char`-Array. Von der Klasse `String` darfst du nur `charAt` und `length` verwenden. Den Ergebnis-String baust du
  mit `+` zusammen. Vorbedingung: `s != null`.

  Beispiele: `sortiereZeichen("tram")` liefert `"amrt"`. `sortiereZeichen("Baum")` liefert `"Bamu"`, weil
  Großbuchstaben kleinere Zahlenwerte haben als Kleinbuchstaben.
teile:
  - typ: code
    vorlage: |
      public class Zeichen {
          public static String sortiereZeichen(String s) {
              return s; // TODO
          }
      }
    musterloesung: |
      public class Zeichen {
          public static String sortiereZeichen(String s) {
              char[] z = new char[s.length()];
              for (int i = 0; i < z.length; i++) {
                  z[i] = s.charAt(i);
              }
              for (int i = 0; i < z.length - 1; i++) {
                  for (int j = 0; j < z.length - i - 1; j++) {
                      if (z[j] > z[j + 1]) {
                          char swap = z[j];
                          z[j] = z[j + 1];
                          z[j + 1] = swap;
                      }
                  }
              }
              String ergebnis = "";
              for (int i = 0; i < z.length; i++) {
                  ergebnis = ergebnis + z[i];
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "sortiereZeichen(\"tram\")", erwartet: "\"amrt\"" }
      - { aufruf: "sortiereZeichen(\"Baum\")", erwartet: "\"Bamu\"" }
      - { aufruf: "sortiereZeichen(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "sortiereZeichen(\"aabba\")", erwartet: "\"aaabb\"", beschreibung: "gleiche Zeichen" }
      - { aufruf: "sortiereZeichen(\"zebra\")", erwartet: "\"aberz\"", versteckt: true }
    regeln: { erlaubteApi: ["String.charAt", "String.length"], keineHilfsmethoden: true }
    fehler:
      - { wert: 1, meldung: "Prüfe die drei Schritte einzeln: Zeichen ins Array kopieren, Bubblesort auf dem Array, Ergebnis-String zusammensetzen." }
      - { wert: 3, meldung: "Beim leeren String hat das Array die Länge 0. Laufen deine Schleifen dann keinmal, und gibst du `\"\"` zurück?" }
      - { wert: erlaubteApi, meldung: "Erlaubt sind von `String` nur `charAt` und `length`. Methoden wie `toCharArray` oder `Arrays.sort` sind hier nicht zulässig." }
hinweise:
  - 'Lege `char[] z = new char[s.length()];` an und fülle es mit `s.charAt(i)`.'
  - 'Sortiere `z` mit den beiden Schleifen von Bubblesort. `char`-Werte vergleichst du direkt mit `>`. Baue zum Schluss mit `ergebnis = ergebnis + z[i];` den String auf.'
loesung: |
  **Ansatz:** Ein String lässt sich nicht verändern. Darum kopieren wir die Zeichen in ein `char`-Array, sortieren dort und bauen einen neuen String.
  ---
  ```java
  char[] z = new char[s.length()];
  for (int i = 0; i < z.length; i++) {
      z[i] = s.charAt(i);
  }
  ```
  ---
  ```java
  for (int i = 0; i < z.length - 1; i++) {
      for (int j = 0; j < z.length - i - 1; j++) {
          if (z[j] > z[j + 1]) {
              char swap = z[j];
              z[j] = z[j + 1];
              z[j + 1] = swap;
          }
      }
  }
  ```
  ---
  ```java
  String ergebnis = "";
  for (int i = 0; i < z.length; i++) {
      ergebnis = ergebnis + z[i];
  }
  return ergebnis;
  ```
  Probe mit `"tram"`: Die Zahlenwerte sind 116, 114, 97, 109. Sortiert: `a` (97), `m` (109), `r` (114), `t` (116), also `"amrt"`.
```

```aufgabe
id: so-pa-zeilen
titel: Jede Zeile eines 2D-Arrays sortieren
niveau: 3
punkte: 10
lernziel: 3
kompetenz: anwenden
angabe: |
  **Zeitrichtwert: 20 Minuten.** Diese Aufgabe hat das Format einer Methode M2 im Programmiertest: ein Array an Ort
  und Stelle verändern (siehe [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2)).

  Schreib `sortiereZeilen(int[][] data)`. Die Methode sortiert **jede Zeile** von `data` aufsteigend. Die Zeilen
  dürfen verschieden lang sein, auch leer. Die Reihenfolge der Zeilen bleibt gleich. Einschränkungen wie im
  Programmiertest: keine Hilfsmethoden, kein `Arrays.sort`, kein `clone` und kein `System.arraycopy`.

  Vorbedingung: `data != null`, und keine Zeile ist `null`.

  Beispiel: Aus `{{3, 1, 2}, {}, {9, 4}}` wird `{{1, 2, 3}, {}, {4, 9}}`.
teile:
  - typ: code
    vorlage: |
      public class Zeilen {
          public static void sortiereZeilen(int[][] data) {
              // TODO
          }
      }
    musterloesung: |
      public class Zeilen {
          public static void sortiereZeilen(int[][] data) {
              for (int z = 0; z < data.length; z++) {
                  for (int i = 1; i < data[z].length; i++) {
                      for (int j = i; j > 0 && data[z][j] < data[z][j - 1]; j--) {
                          int swap = data[z][j];
                          data[z][j] = data[z][j - 1];
                          data[z][j - 1] = swap;
                      }
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{3, 1, 2}, {}, {9, 4}};", aufruf: "sortiereZeilen(a)", ergebnis: "a", erwartet: "new int[][]{{1, 2, 3}, {}, {4, 9}}" }
      - { vorher: "int[][] a = {{5}, {2, 2, 1}};", aufruf: "sortiereZeilen(a)", ergebnis: "a", erwartet: "new int[][]{{5}, {1, 2, 2}}", beschreibung: "Zeile mit einem Element und gleiche Werte" }
      - { vorher: "int[][] a = {};", aufruf: "sortiereZeilen(a)", ergebnis: "a", erwartet: "new int[][]{}", beschreibung: "keine Zeilen" }
      - { vorher: "int[][] a = {{4, 3, 2, 1}, {1, 2, 3}};", aufruf: "sortiereZeilen(a)", ergebnis: "a", erwartet: "new int[][]{{1, 2, 3, 4}, {1, 2, 3}}" }
      - { vorher: "int[][] a = {{-1, 7, -5, 0}, {8, 6}, {}, {2}};", aufruf: "sortiereZeilen(a)", ergebnis: "a", erwartet: "new int[][]{{-5, -1, 0, 7}, {6, 8}, {}, {2}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineArrayKopie: true, verboteneApi: ["Arrays.sort"] }
    fehler:
      - { wert: 1, meldung: "Verwendest du für jede Zeile ihre eigene Länge `data[z].length`? Bei verschieden langen Zeilen reicht `data[0].length` nicht." }
      - { wert: 3, meldung: "Bei einem Array ohne Zeilen darf die äußere Schleife keinmal laufen. Greifst du vielleicht vorher auf `data[0]` zu?" }
      - { wert: keineHilfsmethoden, meldung: "Hilfsmethoden sind im Programmiertest verboten. Schreib das Sortieren direkt in die Methode, als dritte Schleife um die Zeilen herum." }
hinweise:
  - 'Eine äußere Schleife über die Zeilen `z`. Darin steht ein ganz normaler Insertionsort, nur dass überall `data[z][...]` statt `data[...]` steht.'
  - 'Die Grenze der mittleren Schleife ist `data[z].length`, die Länge der aktuellen Zeile. Eine leere Zeile oder eine mit einem Element braucht dann keinen eigenen Sonderfall.'
loesung: |
  **Ansatz:** Jede Zeile ist ein eigenes `int`-Array. Wir sortieren sie nacheinander mit Insertionsort. Eine dritte Schleife läuft über die Zeilen.
  ---
  ```java
  for (int z = 0; z < data.length; z++) {
      for (int i = 1; i < data[z].length; i++) {
          for (int j = i; j > 0 && data[z][j] < data[z][j - 1]; j--) {
              int swap = data[z][j];
              data[z][j] = data[z][j - 1];
              data[z][j - 1] = swap;
          }
      }
  }
  ```
  ---
  Die Methode ist `void`. Die Änderungen über `data[z][j]` treffen die Zeilen-Arrays des Aufrufers, er sieht das Ergebnis.
  ---
  Randfälle: Eine leere Zeile hat die Länge 0, dann ist `1 < 0` falsch und nichts passiert. Ein Array ohne Zeilen lässt die äußere Schleife keinmal laufen. Probe mit `{9, 4}`: Die 4 wandert vor die 9.
```

```aufgabe
id: so-pa-gespraech
titel: Im Feedbackgespräch erklären
niveau: 3
punkte: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  **Zeitrichtwert: 6 Minuten.** Im Feedbackgespräch fragt die Tutorin: „Sie haben für Ihre Rangliste Insertionsort
  verwendet. Warum nicht Selectionsort? Das braucht doch weniger Tausche.“

  Formuliere eine Antwort in ganzen Sätzen, so wie du sie mündlich geben würdest. Erkläre dabei, was Stabilität ist,
  und zeige an einem kleinen Beispiel, warum Selectionsort nicht stabil ist.
teile:
  - typ: text
    muster: |
      Selectionsort braucht tatsächlich nur `n - 1` Tausche, Insertionsort dagegen einen pro Fehlstand. Für die Rangliste
      war mir aber Stabilität wichtig. Stabil heißt: Einträge mit gleicher Punktzahl stehen nach dem Sortieren in
      derselben Reihenfolge wie vorher. Meine Liste war vorher nach Anmeldezeit geordnet, und bei Gleichstand sollte
      die frühere Anmeldung vorne bleiben.

      Selectionsort ist nicht stabil, weil es über große Entfernungen tauscht. Beispiel: `{2a, 2b, 1}`, wobei a und b
      zwei Einträge mit 2 Punkten markieren. Im ersten Durchlauf tauscht die 1 mit `2a`, und es entsteht
      `{1, 2b, 2a}`. Die beiden Zweier haben die Reihenfolge gewechselt. Insertionsort tauscht nur Nachbarn und nur bei
      echt kleiner, darum überholen sich gleiche Werte nie.
hinweise:
  - Beginne damit, das Argument der Tutorin ernst zu nehmen. Dann nenne die Eigenschaft, die für die Rangliste wichtiger ist.
  - 'Ein gutes Gegenbeispiel hat drei Werte: zwei gleiche vorne und einen kleineren hinten.'
loesung: |
  **Ansatz:** Eine gute Antwort hat drei Teile: das Gegenargument anerkennen, Stabilität erklären, ein Gegenbeispiel zeigen.
  ---
  Anerkennen: Selectionsort tauscht nur `n - 1`-mal und ist bei teuren Tauschen im Vorteil.
  ---
  Erklären: Stabil heißt, gleiche Schlüssel behalten ihre Reihenfolge. Das braucht man, wenn bei Gleichstand eine frühere Ordnung gelten soll.
  ---
  Beispiel: `{2a, 2b, 1}` wird bei Selectionsort zu `{1, 2b, 2a}`. Insertionsort tauscht nur Nachbarn bei echt kleiner, darum ist es stabil. Vergleiche deine Antwort mit dem Muster: Kommen alle drei Teile vor?
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Bubblesort tauscht benachbarte Werte, bis der größte rechts steht. Selectionsort holt
  das Minimum des Rests nach vorne. Insertionsort fügt jede neue Karte in den sortierten Anfang ein. (2) Bubblesort
  und Insertionsort sind stabil, weil sie nur Nachbarn und nur bei echt größer tauschen. Selectionsort ist nicht
  stabil. (3) Alle drei liegen im schlechtesten Fall in $O(n^2)$. Insertionsort braucht auf sortierten Daten nur
  `n - 1` Vergleiche. Ebenso gute Antworten sind die Fingerabdrücke der Zwischenzustände oder die Prüfliste für
  veränderten Code.
```

:::zusammenfassung
1. **Sortiert:** Ein Array ist aufsteigend sortiert, wenn `a[i] <= a[i + 1]` für jedes Nachbarpaar gilt. Geprüft wird mit einer Schleife bis `a.length - 2` und `return true;` hinter der Schleife. Getauscht wird immer mit einer Hilfsvariable, die Sortiermethoden arbeiten in-place über die Referenz.
2. **Bubblesort:** Durchläufe von links nach rechts, Nachbarn tauschen bei `data[j] > data[j + 1]`. Nach dem Durchlauf `i` stehen die `i + 1` größten Werte sortiert rechts. Die Fassung mit `notSorted` hört nach einem Durchlauf ohne Tausch auf.
3. **Selectionsort:** Im Durchlauf `i` den Index `min` des kleinsten Werts ab `i` suchen und mit `data[i]` tauschen. Immer `n(n-1)/2` Vergleiche und genau `n - 1` Aufrufe von `exchange`.
4. **Insertionsort:** Die neue Karte `data[i]` wandert mit `j > 0 && data[j] < data[j - 1]` nach links. Links von `i` ist sortiert, rechts unverändert. Bester Fall `n - 1` Vergleiche, schlechtester Fall `n(n-1)/2`.
5. **Zwischenzustände:** Durchlauf für Durchlauf ausrechnen und vergleichen. Fingerabdrücke schließen schnell aus: rechts die größten (Bubble), links die kleinsten (Selection), links der sortierte Anfang und rechts unverändert (Insertion). Ein Durchlauf kann das Array unverändert lassen.
6. **Stabilität:** Gleiche Schlüssel behalten ihre Reihenfolge. Bubblesort und Insertionsort sind stabil, Selectionsort nicht. Mit `>=` statt `>` wird auch Bubblesort instabil. Prüfen mit markierten Werten wie `2a`, `2b`.
7. **Veränderter Code:** Exception, Ende, genug Arbeit, Stabilität prüfen. Zusätzliche Durchläufe schaden nicht, fehlende schon. Für „falsch“ genügt ein Gegenbeispiel wie `{2, 1}` oder `{3, 1, 2}`.
8. **Laufzeit:** Bubblesort und Insertionsort tauschen so oft, wie es Fehlstände gibt. Alle drei liegen in $O(n^2)$, doppelte Länge heißt etwa vierfache Zeit. Eine Lösung mit sortierter Kopie liegt in $O(n \log n)$, braucht aber $O(n)$ zusätzlichen Speicher.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Tausch ohne Hilfsvariable**, sodass ein Wert verloren geht. Training: „Ein Tausch ohne Hilfsvariable“ in [19.1 Was heißt sortieren? Vertauschen und prüfen](/lernen/ep1/sortieren/was-heisst-sortieren-vertauschen-und-pruefen).
2. **`return true;` in der Schleife** statt dahinter. Training: „Zwei Fehler in istSortiert“ in [19.1 Was heißt sortieren? Vertauschen und prüfen](/lernen/ep1/sortieren/was-heisst-sortieren-vertauschen-und-pruefen).
3. **Innere Grenze ohne `- 1`**, sodass `data[j + 1]` hinter das Array greift. Training: „Welche Änderung bricht ab?“ in [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).
4. **Ein Durchlauf von Bubblesort mit einem einzelnen Vergleich verwechselt** oder nicht mit dem neuen Nachbarn weiterverglichen. Training: „Der erste Durchlauf“ und „Das Array nach jedem Durchlauf“ in [19.2 Bubblesort: benachbarte Werte vertauschen](/lernen/ep1/sortieren/bubblesort-benachbarte-werte-vertauschen).
5. **Bei Selectionsort den Wert statt des Index in `min` gespeichert** oder bei jedem Vergleich getauscht. Training: „Die Suche nach min mitschreiben“ und „Welche Zeile ist falsch?“ in [19.3 Selectionsort: das Minimum nach vorne holen](/lernen/ep1/sortieren/selectionsort-das-minimum-nach-vorne-holen).
6. **Bei Selectionsort die übrigen Werte nachrücken lassen** statt nur zwei Plätze zu tauschen. Training: „Selectionsort komplett“ in [19.3 Selectionsort: das Minimum nach vorne holen](/lernen/ep1/sortieren/selectionsort-das-minimum-nach-vorne-holen).
7. **`j > 0` rechts vom `&&`** in Insertionsort, sodass `data[-1]` gelesen wird. Training: „Insertionsort absteigend“ in [19.4 Insertionsort: einfügen wie bei Spielkarten](/lernen/ep1/sortieren/insertionsort-einfuegen-wie-bei-spielkarten) und „Einen fehlerhaften Insertionsort reparieren“ in [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).
8. **Fingerabdruck von Selectionsort bei Insertionsort angewendet.** Training: „Insertionsort, vier Belegungen“ und „Drei Verfahren, eine Ausgangsbelegung“ in [19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen).
9. **Die Ausgangsbelegung automatisch als unmöglich angekreuzt**, obwohl ein Durchlauf nichts ändern kann. Training: „Wann tritt die Belegung auf?“ in [19.5 Zwischenzustände erkennen](/lernen/ep1/sortieren/zwischenzustaende-erkennen).
10. **Einen Zustand mitten in der inneren Schleife für einen Zustand an Zeile A gehalten.** Training: „Quizfrage zu Insertionsort“ in [19.10 Prüfungsaufgaben](/lernen/ep1/sortieren/pruefungsaufgaben).
11. **Stabilität an nackten Zahlen beurteilt** oder `>=` für harmlos gehalten. Training: „Bubblesort mit Gleichheitszeichen“ und „Selectionsort auf parallelen Arrays“ in [19.6 Stabilität: gleiche Schlüssel behalten ihre Reihenfolge](/lernen/ep1/sortieren/stabilitaet-gleiche-schluessel-behalten-ihre-reihenfolge).
12. **Zusätzliche Durchläufe für falsch gehalten.** Training: „Vier Änderungen an Bubblesort“ in [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).
13. **Mit einem einzigen günstigen Testarray „richtig“ geurteilt.** Training: „Bubblesort im Quizformat“ und „Vier knifflige Änderungen“ in [19.7 Veränderten Sortiercode beurteilen](/lernen/ep1/sortieren/veraenderten-sortiercode-beurteilen).
14. **Geglaubt, Selectionsort werde bei sortierten Daten schneller.** Training: „Bester Fall, schlechtester Fall“ in [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren).
15. **`clone` übersehen** und daraus einen Seiteneffekt oder Speicher $O(1)$ gefolgert. Training: „Zwei Lösungen im Quizformat“ in [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren) und „Quizfrage zu zwei Lösungen“ in [19.10 Prüfungsaufgaben](/lernen/ep1/sortieren/pruefungsaufgaben).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Erklären, wann ein Array sortiert ist, mit Hilfsvariable tauschen und auf „sortiert“ prüfen.
2. Bubblesort von Hand ausführen und programmieren, auch mit Abbruch.
3. Selectionsort von Hand ausführen und programmieren.
4. Insertionsort von Hand ausführen und programmieren.
5. Mögliche Zwischenzustände der drei Verfahren erkennen.
6. Stabilität erklären und an Beispielen prüfen.
7. Veränderten Sortiercode auf Ende, Korrektheit und Stabilität beurteilen.
8. Vergleiche und Tausche zählen, O-Schranken angeben und zwei Lösungen vergleichen.

## Mündliche Prüfung: Feedbackgespräch

Eine mündliche Prüfung im engeren Sinn gibt es in EP1 nicht, aber Feedbackgespräche zu den Aufgabenblättern
([Kapitel 22 Das Feedbackgespräch: Zusatzfragen, Variationen und Code erklären](/lernen/ep1/feedbackgespraech)). Dort erklärst du deinen Code und beantwortest
Zusatzfragen dazu. Zum Sortieren könnte eine solche Frage lauten: „Warum ist das stabil?“ Außerdem helfen die Karten beim Quiz:
Wer ein Verfahren in Worten erklären kann, beurteilt Aussagen darüber schneller. Formuliere zuerst laut eine eigene
Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: so-karte-sortiert
  frage: Wann ist ein Array aufsteigend sortiert, und wie prüfst du das in Java?
  antwort: |
    Ein Array ist aufsteigend sortiert, wenn jedes Element höchstens so groß ist wie sein rechter Nachbar, also
    `a[i] <= a[i + 1]` für alle `i` von 0 bis `a.length - 2`. Ich laufe mit einer Schleife über die Nachbarpaare und
    liefere `false`, sobald ein Paar falsch herum steht. Erst hinter der Schleife steht `return true;`. Arrays mit
    keinem oder einem Element sind immer sortiert.
  kernpunkte:
    - Nachbarpaare mit <=
    - Schleife bis length minus 2
    - return true erst nach der Schleife
- id: so-karte-tausch
  frage: Warum braucht ein Tausch eine Hilfsvariable, und warum bekommt exchange das Array und zwei Indizes?
  antwort: |
    Die erste Zuweisung überschreibt einen der beiden Werte. Ohne Hilfsvariable wäre er verloren, und am Ende stünde
    zweimal derselbe Wert im Array. Die Methode bekommt das Array und die Indizes, weil Java Parameter als Kopie
    übergibt. Bekäme sie nur die zwei Werte, würde sie Kopien tauschen. Mit der Referenz auf das Array ändert sie
    das Array des Aufrufers.
  kernpunkte:
    - erst retten, dann überschreiben
    - Werte als Parameter wären nur Kopien
    - Referenz und Indizes übergeben
- id: so-karte-bubble
  frage: Wie funktioniert Bubblesort, und warum wird die innere Schleife jedes Mal kürzer?
  antwort: |
    Bubblesort geht von links nach rechts durch das Array und tauscht zwei Nachbarn, wenn der linke Wert größer ist.
    Dadurch wandert in jedem Durchlauf der größte noch unsortierte Wert ganz nach rechts an seinen endgültigen Platz.
    Nach dem Durchlauf `i` sind `i + 1` Plätze rechts fertig. Diese Paare muss man nicht mehr vergleichen, darum ist
    die Grenze `data.length - i - 1`. Das `- 1` braucht es, weil `data[j + 1]` gelesen wird.
  kernpunkte:
    - Nachbarn tauschen bei größer
    - größter Wert wandert nach rechts
    - fertiger Teil rechts wächst
- id: so-karte-bubble2
  frage: Was verbessert die Fassung von Bubblesort mit notSorted, und wann hilft sie?
  antwort: |
    Sie merkt sich, ob in einem Durchlauf getauscht wurde. Gab es keinen Tausch, ist das Array sortiert, und die
    `while`-Schleife endet. Auf einem schon sortierten Array genügt dann ein einziger Durchlauf mit `n - 1`
    Vergleichen, also $O(n)$. Im schlechtesten Fall, bei absteigenden Daten, bleibt es bei $O(n^2)$.
  kernpunkte:
    - Abbruch nach Durchlauf ohne Tausch
    - bester Fall O(n)
    - schlechtester Fall weiter O(n²)
- id: so-karte-selection
  frage: Wie funktioniert Selectionsort, und wie viele Tausche braucht es?
  antwort: |
    Selectionsort teilt das Array in einen sortierten Teil links und einen unsortierten rechts. Im Durchlauf `i`
    sucht es den Index des kleinsten Werts ab `i` und tauscht diesen Wert mit `data[i]`. Pro Durchlauf gibt es genau
    einen Aufruf von `exchange`, insgesamt also `n - 1`, egal wie das Array aussieht. Die Vergleiche sind immer
    `n(n-1)/2`.
  kernpunkte:
    - Minimum des Rests suchen
    - mit data[i] tauschen
    - genau n minus 1 Tausche
- id: so-karte-insertion
  frage: Wie funktioniert Insertionsort, und warum steht j > 0 links vom &&?
  antwort: |
    Insertionsort fügt jeden Wert in den schon sortierten Anfang ein, wie eine Spielkarte in die Hand. Die neue Karte
    `data[i]` wandert durch Tausche nach links, solange ihr linker Nachbar echt größer ist. `j > 0` muss links
    stehen, weil `&&` von links nach rechts auswertet und bei `false` aufhört. So wird `data[j - 1]` bei `j = 0` nie
    gelesen, und es gibt keine Exception.
  kernpunkte:
    - Karte in sortierten Anfang einfügen
    - wandert solange Nachbar größer
    - Kurzschluss schützt vor data[-1]
- id: so-karte-vergleich
  frage: Wodurch unterscheiden sich die drei Verfahren, wenn das Array schon fast sortiert ist?
  antwort: |
    Insertionsort profitiert am meisten. Jede Karte wandert nur so weit, wie sie falsch steht, die Arbeit liegt dann
    nahe bei `n`. Bubblesort mit Abbruch braucht wenige Durchläufe, wenn kein Wert weit nach links muss. Selectionsort
    und Bubblesort in der Fassung der Vorlesung machen dagegen immer alle `n(n-1)/2` Vergleiche, weil ihre
    Schleifengrenzen nur von `n` abhängen.
  kernpunkte:
    - Insertionsort nahe n
    - Selectionsort immer n(n-1)/2
    - feste Grenzen nutzen Vorsortierung nicht
- id: so-karte-zwischen
  frage: Wie entscheidest du im Quiz, ob eine Belegung nach einem Durchlauf der inneren Schleife auftreten kann?
  antwort: |
    Am sichersten rechne ich alle Durchläufe aus und vergleiche die Belegung mit jedem Zwischenzustand. Zum schnellen
    Ausschließen nutze ich Fingerabdrücke: Bei Bubblesort stehen rechts die größten Werte sortiert, bei Selectionsort
    links die kleinsten. Bei Insertionsort ist links der sortierte Anfang der Ausgangsbelegung, rechts ist alles
    unverändert. Dabei denke ich daran, dass ein Durchlauf das Array unverändert lassen kann.
  kernpunkte:
    - alle Durchläufe ausrechnen
    - Fingerabdrücke schließen aus
    - unveränderter Durchlauf möglich
- id: so-karte-stabil
  frage: Was heißt stabil, und warum ist Selectionsort nicht stabil?
  antwort: |
    Ein Verfahren ist stabil, wenn Datensätze mit gleichem Schlüssel nach dem Sortieren in derselben Reihenfolge
    stehen wie vorher. Selectionsort tauscht das Minimum mit `data[i]` über beliebige Entfernung. Dabei kann der Wert
    von `data[i]` an einem gleichen Wert vorbeispringen. Beispiel: `{2a, 2b, 1}` wird zu `{1, 2b, 2a}`. Ein einziges
    solches Gegenbeispiel genügt.
  kernpunkte:
    - gleiche Schlüssel behalten Reihenfolge
    - weiter Tausch überspringt gleiche Werte
    - Gegenbeispiel 2a 2b 1
- id: so-karte-stabil-warum
  frage: Warum braucht man Stabilität überhaupt?
  antwort: |
    Für das Sortieren nach zwei Merkmalen. Soll eine Liste nach Gruppe und innerhalb jeder Gruppe nach Namen geordnet
    sein, sortiere ich zuerst nach Namen und danach stabil nach Gruppe. Das stabile Verfahren lässt Personen derselben
    Gruppe in alphabetischer Reihenfolge. Mit einem instabilen Verfahren wie Selectionsort wäre diese Ordnung
    teilweise zerstört.
  kernpunkte:
    - Sortieren nach zwei Merkmalen
    - erst Nebenmerkmal, dann stabil Hauptmerkmal
    - instabil zerstört die Vorordnung
- id: so-karte-mutation
  frage: Wie gehst du vor, wenn im Quiz eine Zeile eines Sortierverfahrens verändert wird?
  antwort: |
    Ich prüfe vier Dinge. Erstens: Kann ein ungültiger Index gelesen werden? Dazu setze ich den kleinsten und größten
    Wert der Schleifenvariablen ein. Zweitens: Endet jede Schleife? Drittens: Fehlt Arbeit, die das Original braucht?
    Das teste ich mit Gegenbeispielen wie `{2, 1}` oder `{3, 1, 2}`. Zusätzliche Durchläufe schaden nicht. Viertens:
    Ist das Verfahren noch stabil, also wird nie bei Gleichstand getauscht?
  kernpunkte:
    - Exception an den Grenzen
    - Terminierung
    - fehlende Arbeit mit Gegenbeispiel
    - Stabilität bei Gleichstand
- id: so-karte-gegenbeispiel
  frage: Warum genügt ein Gegenbeispiel für „falsch“, aber nicht ein Beispiel für „richtig“?
  antwort: |
    Die Aussage im Quiz gilt für alle Arrays. Eine solche Allaussage ist widerlegt, sobald ein einziges Array sie
    verletzt. Viele Arrays, bei denen es klappt, beweisen dagegen nicht, dass es kein schlechtes gibt. Für „richtig“
    argumentiere ich deshalb am Code, zum Beispiel: Die Änderung vergleicht genau dieselben Paare wie das Original.
  kernpunkte:
    - Allaussage über alle Arrays
    - ein Gegenbeispiel widerlegt
    - richtig nur mit Argument am Code
- id: so-karte-fehlstand
  frage: Was ist ein Fehlstand, und was hat er mit der Zahl der Tausche zu tun?
  antwort: |
    Ein Fehlstand ist ein Paar von Positionen `i < j` mit `a[i] > a[j]`, also ein Paar, bei dem der größere Wert
    links steht. Bubblesort und Insertionsort tauschen nur Nachbarn, die falsch herum stehen. Jeder solche Tausch
    beseitigt genau einen Fehlstand. Darum ist die Zahl ihrer Tausche gleich der Zahl der Fehlstände, zwischen 0 bei
    sortierten und `n(n-1)/2` bei absteigenden Daten.
  kernpunkte:
    - Paar mit größerem Wert links
    - ein Nachbartausch beseitigt einen
    - Tausche gleich Fehlstände
- id: so-karte-on2
  frage: Was bedeutet es, dass die drei Verfahren in O(n²) liegen, und was heißt das bei doppelter Datenmenge?
  antwort: |
    Die Zahl der Schritte wächst höchstens wie `n` mal `n`, bis auf einen festen Faktor. Das kommt von den zwei
    verschachtelten Schleifen mit rund `n · n / 2` Vergleichen. Verdopple ich die Länge, wächst die Arbeit etwa auf
    das Vierfache. Die Messungen der Vorlesung zeigen genau das. Die genaue Definition der O-Notation steht in
    [17.4 Die O-Notation: nur das Wachstum zählt](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt).
  kernpunkte:
    - zwei verschachtelte Schleifen
    - rund n mal n halbe Vergleiche
    - doppelte Länge vierfache Zeit
- id: so-karte-seiteneffekt
  frage: Eine Methode soll nur ein Ergebnis berechnen und sortiert dafür ihren Array-Parameter. Was ist das Problem, und wie löst du es?
  antwort: |
    Der Parameter enthält eine Referenz auf das Array des Aufrufers. Sortiert die Methode `data`, ist danach auch das
    Array des Aufrufers umsortiert. Das ist ein Seiteneffekt, den der Aufrufer nicht erwartet. Ich sortiere deshalb
    eine Kopie, die ich mit `new` und einer Schleife anlege. Im Quiz steht dafür oft `clone`, das kostet aber
    zusätzlichen Speicher in $O(n)$. Das ist dieselbe Referenzsemantik wie in
    [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
  kernpunkte:
    - Parameter zeigt auf Array des Aufrufers
    - Seiteneffekt durch Sortieren
    - Kopie sortieren, Speicher O(n)
```
