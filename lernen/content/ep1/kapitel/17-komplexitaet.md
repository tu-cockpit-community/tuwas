---
nummer: 17
titel: Algorithmen und Komplexität
kurz: Was einen Algorithmus ausmacht, wie man seine Laufzeit durch Zählen statt Messen bestimmt, bester und schlechtester Fall, die O-Notation, von der Schleife zur O-Klasse, typische Komplexitätsklassen und der Vergleich von Laufzeit und Speicher, genau so, wie das Quiz es abfragt.
teil: algorithmen
stunden: 5
pruefungsgewicht: 3
voraussetzungen: [schleifen, methoden, ziffern, rekursion, rekursion-vertieft, arrays]
lernziele:
  - an einem Verfahren prüfen, ob es die Eigenschaften eines Algorithmus erfüllt (endlich, eindeutig, ausführbar, determiniert, terminierend), und Problem und Algorithmus unterscheiden
  - für eine Anweisung in einer Schleife oder in verschachtelten Schleifen die genaue Zahl der Ausführungen als Zahl oder als Term in n angeben
  - für eine Suche oder Prüfung den besten, den durchschnittlichen und den schlechtesten Fall angeben und begründen, warum man meist den schlechtesten Fall betrachtet
  - aus einer Zählfunktion f(n) die O-Klasse ablesen, die Definition mit c und n0 an einem Beispiel nachprüfen und erklären, warum Konstanten wegfallen
  - die kleinste obere O-Schranke von Schleifen und Schleifenschachtelungen bestimmen, auch bei konstanten Grenzen, Schrittweiten wie j += n / 2 oder j *= 2 und while-Schleifen ohne Zurücksetzen
  - die Komplexitätsklassen O(1), O(log n), O(n), O(n log n), O(n²), O(n³) und O(2ⁿ) ordnen, Beispielen zuordnen und die Wirkung einer Verdopplung von n vorhersagen
  - zwei Algorithmen für dasselbe Problem nach Laufzeit und zusätzlichem Speicher vergleichen und eine Methode schreiben, die eine vorgegebene Laufzeitschranke einhält
  - Aussagen zu Laufzeit, Speicherbedarf und Seiteneffekten im Richtig/Falsch-Format des Quiz beurteilen und die Laufzeit der eigenen Lösung im Feedbackgespräch begründen
---

**Worum geht es?** Zwei Programme können für jede Eingabe dasselbe richtige Ergebnis liefern und trotzdem
völlig verschieden schnell sein. In der EP1-Vorlesung (Wintersemester 2021/22) wurde das gemessen. Drei
Methoden berechnen für ein Array von 16 000 Zahlen dasselbe Ergebnis. Die erste braucht rund 160 Sekunden. Die
zweite braucht 0,03 Sekunden. Die dritte ist so schnell, dass die Stoppuhr 0 anzeigt. Bei vier Millionen Zahlen
würde die erste Methode nach einer Hochrechnung der Vorlesung etwa 85 Jahre laufen.

Dieses Kapitel zeigt dir, woran man so etwas **vorher** erkennt, ohne das Programm laufen zu lassen. Die
Werkzeuge dafür sind einfach: Du zählst, wie oft eine Zeile ausgeführt wird. Dann fragst du, wie diese Zahl
wächst, wenn die Eingabe größer wird. Das Ergebnis schreibt man in der **O-Notation**, zum Beispiel $O(n^2)$
(gelesen „O von n Quadrat“). Was das genau bedeutet, erklärt
[17.4 Die O-Notation: nur das Wachstum zählt](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt).

**Was kommt in der Prüfung?**

- **Quiz** (nach den TUWEL-Tests 2021 bis 2023): Eine wiederkehrende Frage zeigt vier Code-Stücke mit je einem
  Kommentar wie `// Die Laufzeit liegt in O(n)`. Du beurteilst jeden Kommentar als richtig oder falsch. Gemeint
  ist immer die **kleinste** obere Schranke. Eine zweite Frage vergleicht zwei Methoden für dieselbe Aufgabe
  nach Laufzeit, Speicherbedarf und Seiteneffekten. In 2026W kommt dieser Stoff vermutlich im vierten Quiz
  (Algorithmen, Suchen, Sortieren). Das Format 2026W ist noch nicht veröffentlicht.
- **Suchen und Sortieren** beurteilen jedes Verfahren mit genau diesen Werkzeugen, zum Beispiel in
  [18.6 Wie viel Arbeit macht eine Suche? Vergleiche zählen](/lernen/ep1/suchen/wie-viel-arbeit-macht-eine-suche-vergleiche-zaehlen)
  und [19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren).
- **Feedbackgespräch:** Eine mögliche Frage zu deiner Lösung wäre „Wie viele Durchläufe braucht deine Schleife
  ungefähr, wenn das Array doppelt so lang ist?“.

**So arbeitest du mit diesem Kapitel.** Fast alles hier ist Zählen. Zähle jede Schleife zuerst für ein kleines,
konkretes `n` von Hand, zum Beispiel `n = 4`, und schreib die Werte der Laufvariable auf. Erst danach
verallgemeinerst du. Wer diesen Schritt überspringt, verrechnet sich bei Schrittweiten wie `j += n / 2` fast
sicher.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Durchläufe einer for-Schleife zählen** aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
- **Verschachtelte Schleifen** aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen): Feste Grenzen ergeben ein Produkt, abhängige Grenzen eine Summe.
- **while-Schleifen verfolgen** aus [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
- **Arrays durchlaufen und durchsuchen** aus [12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen).
- **Rekursive Aufrufe zählen** aus [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg) und [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt. Code-Ausschnitte ohne eigenen Methodenkopf stehen in der Methode `main`.

**Zeichen, die in diesem Kapitel vorkommen:**

- `·` heißt „mal“.
- `≤` heißt „kleiner oder gleich“, `≥` heißt „größer oder gleich“.
- `≠` heißt „ungleich“.
- `…` heißt „und so weiter nach demselben Muster“.
:::

```aufgabe
id: ko-ein-for
titel: Durchläufe einer for-Schleife
niveau: 1
art: check
angabe: |
  Wie oft wird der Rumpf dieser Schleife ausgeführt?
  ```java
  for (int i = 3; i <= 10; i++) {
      System.out.println(i);
  }
  ```
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "10 - 3 + 1"
    toleranz: 0.1
    fehler:
      - wert: "7"
        meldung: 'Mit `<=` gehört der Endwert 10 dazu. `i` läuft 3, 4, …, 10. Das sind 10 − 3 + 1 Werte, nicht 10 − 3.'
      - wert: "10"
        meldung: 'Die Schleife beginnt bei 3, nicht bei 1. Die Werte 1 und 2 kommen nicht vor.'
loesung: |
  `i` nimmt die Werte 3, 4, 5, 6, 7, 8, 9, 10 an.
  ---
  Mit `<=` gehört der Endwert dazu: 10 − 3 + 1 = 8 Durchläufe.
```

```aufgabe
id: ko-ein-verschachtelt
titel: Zwei feste Schleifen
niveau: 1
art: check
angabe: |
  Wie oft wird `x++` ausgeführt?
  ```java
  int x = 0;
  for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 5; j++) {
          x++;
      }
  }
  ```
  (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: zahl
    loesung: "3 * 5"
    toleranz: 0.1
    fehler:
      - wert: "8"
        meldung: 'Die Anzahlen werden nicht addiert. Die innere Schleife läuft für **jeden** der 3 äußeren Durchläufe komplett, also 5 + 5 + 5.'
loesung: |
  Die äußere Schleife läuft 3-mal, die innere bei jedem dieser Durchläufe 5-mal.
  ---
  Zusammen 3 · 5 = 15 Ausführungen von `x++`.
```

```aufgabe
id: ko-ein-abhaengig
titel: Die innere Grenze hängt von i ab
niveau: 1
art: check
angabe: |
  Wie oft wird `x++` ausgeführt?
  ```java
  int x = 0;
  for (int i = 0; i < 4; i++) {
      for (int j = 0; j < i; j++) {
          x++;
      }
  }
  ```
  (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: zahl
    loesung: "0 + 1 + 2 + 3"
    toleranz: 0.1
    fehler:
      - wert: "16"
        meldung: 'Die innere Grenze ist `j < i`, nicht `j < 4`. Bei `i = 0` läuft die innere Schleife gar nicht, bei `i = 1` einmal und so weiter.'
      - wert: "10"
        meldung: 'Bei `i = 0` ist `0 < 0` falsch. Die innere Schleife läuft dann keinmal. Die Zeilen tragen 0, 1, 2 und 3 bei, nicht 1, 2, 3 und 4.'
loesung: |
  Für jedes `i` läuft die innere Schleife `i`-mal: 0, 1, 2 und 3.
  ---
  Zusammen 0 + 1 + 2 + 3 = 6.
```

```aufgabe
id: ko-ein-halbieren
titel: Wie oft wird halbiert?
niveau: 1
art: check
angabe: |
  Welchen Wert hat `schritte` nach der Schleife?
  ```java
  int n = 40;
  int schritte = 0;
  while (n > 1) {
      n = n / 2;
      schritte++;
  }
  ```
  (Wiederholung: [4.1 Die while-Schleife](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: zahl
    loesung: "5"
    toleranz: 0.1
    fehler:
      - wert: "6"
        meldung: 'Die Schleife läuft nur, solange `n > 1` ist. Bei `n = 1` ist Schluss. Es wird nicht bis 0 halbiert.'
      - wert: "20"
        meldung: 'Das wäre die Zahl der Schritte, wenn `n` jedes Mal um 2 kleiner würde. Hier wird `n` aber durch 2 **geteilt**.'
loesung: |
  `n` wird nacheinander 20, 10, 5, 2 und 1. Der Rest fällt bei der Ganzzahldivision weg, zum Beispiel `5 / 2 = 2`.
  ---
  Das sind 5 Durchläufe. Bei `n = 1` ist `1 > 1` falsch, die Schleife endet mit `schritte = 5`.
```

```aufgabe
id: ko-ein-suche
titel: Wo bleibt die Suche stehen?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen))
teile:
  - typ: ausgabe
    code: |
      int[] a = {4, 9, 7, 2};
      int i = 0;
      while (i < a.length && a[i] != 7) {
          i++;
      }
      System.out.println(i);
    loesung: |
      2
    fehler:
      - wert: "3"
        meldung: 'Die 7 ist das dritte Element, steht aber am **Index** 2, weil die Zählung bei 0 beginnt. Ausgegeben wird der Index.'
      - wert: "4"
        meldung: 'Die Schleife bricht ab, sobald `a[i] != 7` falsch ist, also beim ersten Treffer. Sie läuft nicht bis zum Ende.'
loesung: |
  Bei `i = 0` ist `4 != 7`, bei `i = 1` ist `9 != 7`. Beide Male wird `i` erhöht.
  ---
  Bei `i = 2` ist `a[2] != 7` falsch. Die Schleife endet, und `2` wird ausgegeben.
```

```aufgabe
id: ko-ein-aufrufe
titel: Wie viele Aufrufe?
niveau: 1
art: check
angabe: |
  Wie oft wird die Methode `f` insgesamt aufgerufen, wenn `main` den Aufruf `f(4)` macht? Der erste Aufruf zählt mit.
  ```java
  static int f(int n) {
      if (n == 0) {
          return 0;
      }
      return 1 + f(n - 1);
  }
  ```
  (Wiederholung: [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: zahl
    loesung: "5"
    toleranz: 0.1
    fehler:
      - wert: "4"
        meldung: 'Vergiss den Basisfall nicht. Auch `f(0)` ist ein Aufruf, er liefert nur sofort 0 zurück.'
loesung: |
  Die Aufrufe sind `f(4)`, `f(3)`, `f(2)`, `f(1)` und `f(0)`.
  ---
  Das sind 5 Aufrufe. Allgemein macht `f(n)` genau n + 1 Aufrufe.
```


## Was ist ein Algorithmus?

```aufgabe
id: ko-alg-check-euklid
titel: Der Euklidische Algorithmus
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [7.6 Rechnen mit Schleifen: Multiplikation, Wurzel und ggT](/lernen/ep1/ziffern/rechnen-mit-schleifen-multiplikation-wurzel-und-ggt))
teile:
  - typ: ausgabe
    code: |
      int a = 48;
      int b = 18;
      while (b != 0) {
          int r = a % b;
          a = b;
          b = r;
      }
      System.out.println(a);
    loesung: |
      6
    fehler:
      - wert: "0"
        meldung: 'Am Ende ist `b` gleich 0, aber ausgegeben wird `a`. In `a` steht der letzte Rest, der nicht 0 war.'
      - wert: "12"
        meldung: '12 ist der erste Rest (48 − 2 · 18). Die Schleife läuft weiter, solange `b != 0` gilt.'
loesung: |
  `48 % 18 = 12`, dann ist `a = 18`, `b = 12`. Danach `18 % 12 = 6`, also `a = 12`, `b = 6`.
  ---
  `12 % 6 = 0`, also `a = 6`, `b = 0`. Die Schleife endet, ausgegeben wird `6`.
```

Du hast in diesem Kurs schon viele Algorithmen geschrieben, ohne das Wort oft zu benutzen: die Quersumme, die
Suche nach einem Zeichen, das Minimum eines Arrays. Bevor wir Algorithmen nach ihrer Geschwindigkeit
vergleichen, klären wir genau, was ein Algorithmus ist. Das Quiz fragt diese Begriffe gelegentlich direkt ab.

Im Alltag kennst du die Idee als **Rezept** oder **Anleitung**: eine Liste von Schritten, die man der Reihe nach
abarbeitet und die am Ende zum Ziel führt. Das Wort **Algorithmus** geht auf den persischen Gelehrten
al-Chwarizmi zurück, der um das Jahr 800 Rechenverfahren aufschrieb.

:::definition[Algorithmus]
Ein **Algorithmus** ist ein endliches, schrittweises Verfahren, das aus gegebenen Größen (der **Eingabe**) die
gesuchten Größen (die **Ausgabe**) berechnet. Jeder Schritt besteht aus eindeutigen, ausführbaren Operationen und
legt fest, welcher Schritt als Nächstes kommt.

(Nach der Definition von Peter Rechenberg, die auch die EP1-Vorlesung verwendet.)
:::

**Problem und Algorithmus sind zwei verschiedene Dinge.** Das **Problem** sagt, **was** berechnet werden soll.
Ein Beispiel ist die Aufgabe, den größten gemeinsamen Teiler (ggT) zweier positiver ganzer Zahlen zu finden. Ein
**Algorithmus** sagt, **wie** man es berechnet. Für ein Problem gibt es meist mehrere Algorithmen. Die folgenden zwei Beispiele
lösen dasselbe Problem auf zwei Arten.

:::beispiel[ggT durch Probieren]
Die einfachste Idee: Man probiert alle Kandidaten von oben nach unten durch. Der ggT kann nicht größer sein als die
kleinere der beiden Zahlen. Wir nehmen an, dass `b` die kleinere ist.

```java
int a = 84;
int b = 36;
int t = b;
int tests = 1;
while (a % t != 0 || b % t != 0) {
    t--;
    tests++;
}
System.out.println("ggT = " + t + ", Tests: " + tests);
```

- Zeile 3 setzt den ersten Kandidaten `t` auf die kleinere Zahl 36.
- Zeile 4 zählt, wie oft die Bedingung in Zeile 5 geprüft wird. Die erste Prüfung zählt schon mit, darum der Start bei 1.
- Zeile 5 fragt: Ist `t` **kein** gemeinsamer Teiler? `a % t != 0` heißt „`t` teilt `a` nicht“. Das `||` (oder) macht die Bedingung wahr, sobald `t` eine der beiden Zahlen nicht teilt.
- Zeilen 6 und 7: Dann probieren wir den nächstkleineren Kandidaten und zählen die nächste Prüfung.

Die Prüfungen laufen für `t` = 36, 35, 34, … bis 12. Bei `t = 12` gilt `84 % 12 == 0` und `36 % 12 == 0`, die
Bedingung ist falsch. Das sind 36 − 12 + 1 = 25 Prüfungen. Die Ausgabe ist `ggT = 12, Tests: 25`.
:::

:::beispiel[ggT nach Euklid]
Der griechische Mathematiker Euklid fand vor über 2000 Jahren einen schnelleren Weg. Du kennst ihn aus
[7.6 Rechnen mit Schleifen](/lernen/ep1/ziffern/rechnen-mit-schleifen-multiplikation-wurzel-und-ggt):
Man ersetzt das Zahlenpaar `(a, b)` so lange durch `(b, a % b)`, bis `b` gleich 0 ist.

```java
int a = 84;
int b = 36;
int runden = 0;
while (b != 0) {
    int r = a % b;
    a = b;
    b = r;
    runden++;
}
System.out.println("ggT = " + a + ", Runden: " + runden);
```

|Runde|`a` vorher|`b` vorher|`r = a % b`|`a` danach|`b` danach|
|---|---|---|---|---|---|
|1|84|36|12|36|12|
|2|36|12|0|12|0|

Nach zwei Runden ist `b = 0`. Die Ausgabe ist `ggT = 12, Runden: 2`. Beide Programme liefern 12. Das Probieren
brauchte aber 25 Prüfungen, Euklid nur 2 Runden. Bei den Zahlen 1 000 000 und 999 999 wird der Unterschied
riesig: Das Probieren testet 999 999 Kandidaten, bis es bei 1 ankommt. Euklid braucht wieder nur 2 Runden, denn
`1000000 % 999999 = 1` und danach `999999 % 1 = 0`.
:::

```aufgabe
id: ko-alg-probieren-ausgabe
titel: ggT durch Probieren mit anderen Zahlen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 45;
      int b = 27;
      int t = b;
      int tests = 1;
      while (a % t != 0 || b % t != 0) {
          t--;
          tests++;
      }
      System.out.println(t + " " + tests);
    loesung: |
      9 19
    fehler:
      - wert: "9 18"
        meldung: 'Auch die allererste Prüfung mit `t = 27` zählt. Darum beginnt `tests` bei 1. Probiert werden die Kandidaten 27 bis 9, das sind 27 − 9 + 1 Stück.'
      - wert: "3 25"
        meldung: 'Die Schleife hört beim **ersten** gemeinsamen Teiler von oben auf. Das ist der größte, nicht der kleinste gemeinsame Teiler.'
hinweise:
  - Suche von 27 abwärts die erste Zahl, die 45 und 27 teilt. Zähle dann, wie viele Kandidaten bis dahin geprüft wurden.
loesung: |
  **Ansatz:** `t` läuft von 27 abwärts, bis `t` beide Zahlen teilt. `tests` zählt jede Prüfung der Bedingung.
  ---
  27 teilt 45 nicht, ebenso 26 bis 10. Bei `t = 9` gilt `45 % 9 == 0` und `27 % 9 == 0`. Geprüft wurden 27, 26, …, 9, also 27 − 9 + 1 = 19 Kandidaten.
  ---
  Ausgabe `9 19`. Probe: 45 = 9 · 5 und 27 = 9 · 3, und 5 und 3 haben keinen gemeinsamen Teiler mehr.
```

Genau diese Frage stellt das ganze Kapitel: **Wie viel Arbeit macht ein Algorithmus, und wie wächst diese Arbeit,
wenn die Eingabe größer wird?**

### Die Eigenschaften eines Algorithmus

Nicht jede Anleitung ist ein Algorithmus. Die Vorlesung nennt die folgenden Eigenschaften. Lies zu jeder das
Beispiel und das Nicht-Beispiel.

1. **Endlichkeit.** Der Algorithmus lässt sich mit endlich vielen Zeichen aufschreiben (statische Endlichkeit). Er
   braucht während der Ausführung zu jedem Zeitpunkt nur endlich viel Speicher (dynamische Endlichkeit). Jedes
   Java-Programm ist endlich lang. Eine Anleitung „Schreib alle Primzahlen in eine Liste und nimm dann …“ braucht
   dagegen unendlich viel Speicher.
2. **Eindeutigkeit.** Jeder Schritt ist genau festgelegt. Der Computer denkt nicht mit, er führt nur aus.
   „Gib eine Prise Salz dazu“ ist nicht eindeutig, denn niemand weiß, wie viel eine Prise ist.
3. **Ausführbarkeit.** Jeder Schritt kann wirklich ausgeführt werden. „Teile durch die größte Primzahl“ ist nicht
   ausführbar, denn es gibt keine größte Primzahl.
4. **Determiniertheit** (lateinisch *determinare*: festlegen). Gleiche Eingabe ergibt immer das gleiche Ergebnis.
   Euklid ist determiniert. Ein Programm, das eine Zufallszahl zieht und ausgibt, ist es nicht.
5. **Determinismus.** Zu jedem Zeitpunkt gibt es höchstens eine Möglichkeit, wie es weitergeht. Der ganze Ablauf
   ist eindeutig bestimmt. Jedes deterministische Verfahren ist auch determiniert. Umgekehrt gilt das nicht, wie
   der zweite Achtung-Kasten zeigt.
6. **Terminierung** (lateinisch *terminare*: beenden). Der Algorithmus hält für **jede** erlaubte Eingabe nach
   endlich vielen Schritten an und liefert ein Ergebnis. Euklid terminiert, weil der Rest `b` in jeder Runde echt
   kleiner wird und nicht unter 0 fallen kann.

```aufgabe
id: ko-alg-salz
titel: Welche Eigenschaft fehlt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Kochanleitung enthält den Schritt „Rühre, bis die Soße dick genug ist.“ Welche Eigenschaft eines
  Algorithmus verletzt dieser Schritt am deutlichsten?
teile:
  - typ: auswahl
    optionen:
      - 'Eindeutigkeit'
      - 'Statische Endlichkeit'
      - 'Determiniertheit, weil jede Soße anders schmeckt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Statische Endlichkeit heißt nur, dass die Anleitung mit endlich vielen Zeichen aufgeschrieben ist. Dieser Satz ist kurz und endlich.'
      - wert: 2
        meldung: 'Determiniertheit fragt, ob gleiche Eingaben gleiche Ergebnisse liefern. Das Problem hier liegt früher: Man weiß gar nicht, wann der Schritt fertig ist.'
hinweise:
  - Überlege, ob zwei verschiedene Köche denselben Schritt gleich ausführen würden.
loesung: |
  **Ansatz:** Wir prüfen, ob der Schritt genau festlegt, was zu tun ist.
  ---
  „Dick genug“ ist nicht festgelegt. Jeder Koch hört zu einem anderen Zeitpunkt auf. Der Schritt ist **nicht eindeutig**.
  ---
  Ein eindeutiger Schritt wäre zum Beispiel „Rühre 4 Minuten lang“. Antwort: Eindeutigkeit.
```

:::achtung[Getestet ist nicht bewiesen: ein ggT, der nicht terminiert]
Eine ältere Fassung des Euklidischen Algorithmus arbeitet mit Subtraktion statt mit Rest:

```java
while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
```

Für `a = 84` und `b = 36` liefert sie richtig 12. Eine Studentin testet noch drei andere Paare, alles stimmt, und
sie schreibt: „Der Algorithmus terminiert.“ Probiere aber `a = 5` und `b = 0`. Dann ist `5 > 0`, und es wird
`a = 5 - 0 = 5` gerechnet. `a` bleibt 5, `b` bleibt 0, und `a != b` bleibt für immer wahr. Die Schleife läuft
endlos. Terminierung heißt „für **jede** erlaubte Eingabe“. Ein paar erfolgreiche Tests zeigen das nicht. Entweder
man verbietet die 0 in der Vorbedingung (`a > 0` und `b > 0`), oder man nimmt die Fassung mit `%`.
:::

:::achtung[Determiniert ist nicht dasselbe wie deterministisch]
Ein Verfahren lautet „Addiere die Zahlen eines Arrays in **beliebiger** Reihenfolge“. Ein Student meint, es sei
nicht determiniert, weil man von links oder von rechts anfangen kann. Rechne es für `{3, 5, 7}` nach:
3 + 5 + 7 = 15 und 7 + 5 + 3 = 15. Das Ergebnis ist immer dasselbe, das Verfahren ist also **determiniert**. Der
**Ablauf** ist aber nicht eindeutig, denn es gibt mehrere erlaubte Reihenfolgen. Deshalb ist es **nicht
deterministisch**. Merke: Determiniert betrifft das Ergebnis, deterministisch betrifft den Weg dorthin.
:::

```aufgabe
id: ko-alg-eigenschaften-rf
titel: Aussagen über Algorithmen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für ein Problem gibt es oft mehrere verschiedene Algorithmen.'
        richtig: true
        erklaerung: 'Der ggT lässt sich zum Beispiel durch Probieren oder nach Euklid berechnen.'
      - text: 'Ein Algorithmus terminiert, wenn er für drei verschiedene Testeingaben anhält.'
        richtig: false
        erklaerung: 'Terminierung verlangt ein Ende für **jede** erlaubte Eingabe. Die Subtraktions-Fassung des ggT hält für viele Paare an, aber nicht für `a = 5`, `b = 0`.'
      - text: 'Jeder deterministische Algorithmus ist determiniert.'
        richtig: true
        erklaerung: 'Ist der ganze Ablauf eindeutig festgelegt, kommt bei gleicher Eingabe auch dasselbe Ergebnis heraus.'
      - text: 'Ein Java-Programm, das eine Zufallszahl zieht und ausgibt, ist determiniert.'
        richtig: false
        erklaerung: 'Zweimal gestartet mit derselben (leeren) Eingabe kann es verschiedene Zahlen ausgeben. Das widerspricht der Determiniertheit.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Schau dir die zweite Aussage an. Reichen ein paar erfolgreiche Tests, um zu zeigen, dass ein Programm für **jede** Eingabe anhält?'
      - wert: [r, f, f, f]
        meldung: 'Die dritte Aussage stimmt. Wenn der Weg eindeutig ist, ist auch das Ziel eindeutig. Umgekehrt gilt es nicht.'
hinweise:
  - Lies bei jeder Eigenschaft genau, ob sie das Ergebnis, den Ablauf oder alle Eingaben betrifft.
loesung: |
  **Ansatz:** Jede Aussage mit der Definition der Eigenschaft vergleichen.
  ---
  Aussage 1 stimmt (ggT: Probieren und Euklid). Aussage 2 ist falsch, Tests zeigen keine Terminierung für alle Eingaben.
  ---
  Aussage 3 stimmt: deterministisch bedeutet eindeutiger Weg, also auch eindeutiges Ergebnis. Aussage 4 ist falsch, ein Zufallsprogramm ist nicht determiniert.
```

Eine letzte Bemerkung zur Terminierung (Vertiefung): Es gibt kein Programm, das für **jedes** beliebige Programm
und jede Eingabe entscheiden kann, ob es anhält. Dieses Ergebnis heißt **Halteproblem**. Deshalb muss man die
Terminierung für jeden Algorithmus selbst begründen, wie bei Euklid mit dem kleiner werdenden Rest.




```aufgabe
id: ko-alg-euklid-runden
titel: Runden nach Euklid zählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Der Euklidische Algorithmus mit Rest (Code aus dem Beispiel „ggT nach Euklid“) wird für `a = 1071` und
  `b = 462` ausgeführt. Wie viele Runden läuft die Schleife, und welcher ggT kommt heraus?
teile:
  - typ: zahl
    label: Anzahl Runden
    loesung: "3"
    toleranz: 0.1
    fehler:
      - wert: "2"
        meldung: 'Zähle auch die Runde, in der der Rest 0 entsteht. Die Schleife endet erst, wenn `b` danach gleich 0 ist.'
  - typ: zahl
    label: ggT
    loesung: "21"
    toleranz: 0.1
    fehler:
      - wert: "0"
        meldung: 'Der Rest 0 beendet die Schleife. Das Ergebnis steht dann in `a`, also im letzten Rest, der nicht 0 war.'
      - wert: "147"
        meldung: '147 ist der erste Rest. Danach geht es mit dem Paar (462, 147) weiter.'
hinweise:
  - Lege eine Tabelle mit `a`, `b` und `a % b` an.
  - '`1071 % 462`: 462 passt zweimal in 1071, denn 2 · 462 = 924. Der Rest ist 1071 − 924.'
gefuehrt:
  - text: Berechne den Rest der ersten Runde, `1071 % 462`.
    teil: { typ: zahl, loesung: "1071 - 2 * 462", toleranz: 0.1 }
    erklaerung: 2 · 462 = 924 und 1071 − 924 = 147. Das neue Paar ist (462, 147).
  - text: Berechne den Rest der zweiten Runde, `462 % 147`.
    teil: { typ: zahl, loesung: "462 - 3 * 147", toleranz: 0.1 }
    erklaerung: 3 · 147 = 441 und 462 − 441 = 21. Das neue Paar ist (147, 21).
  - text: Berechne den Rest der dritten Runde, `147 % 21`.
    teil: { typ: zahl, loesung: "0", toleranz: 0.1 }
    erklaerung: 7 · 21 = 147, der Rest ist 0. Das neue Paar ist (21, 0), die Schleife endet.
  - text: Die Schleife ist nach drei Runden fertig. Welcher Wert steht am Ende in `a`?
    teil: { typ: zahl, loesung: "21", toleranz: 0.1 }
    erklaerung: Drei Runden, und `a = 21` ist der ggT.
loesung: |
  **Ansatz:** Jede Runde ersetzt `(a, b)` durch `(b, a % b)`. Wir zählen, bis `b = 0` ist.
  ---
  Runde 1: `1071 % 462 = 147`, Paar (462, 147). Runde 2: `462 % 147 = 21`, Paar (147, 21). Runde 3: `147 % 21 = 0`, Paar (21, 0).
  ---
  Drei Runden, ggT 21. Probe: 1071 = 21 · 51 und 462 = 21 · 22. Durch Probieren von 462 abwärts wären es 462 − 21 + 1 = 442 Prüfungen gewesen.
```

```aufgabe
id: ko-alg-terminiert
titel: Terminiert das für jedes n?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  `n` ist eine beliebige ganze Zahl mit `n >= 0`. Beurteile für jedes Stück, ob es für **jede** solche Zahl nach
  endlich vielen Durchläufen endet.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`while (n != 0) { n = n - 2; }` terminiert für jedes `n >= 0`.'
        richtig: false
        erklaerung: 'Für gerade `n` stimmt es. Für `n = 3` entstehen 1, −1, −3, … Die 0 wird übersprungen, die Schleife läuft endlos.'
      - text: '`while (n > 0) { n = n / 2; }` terminiert für jedes `n >= 0`.'
        richtig: true
        erklaerung: '`n` wird bei jedem positiven Wert echt kleiner (Ganzzahldivision) und erreicht nach endlich vielen Schritten 0.'
      - text: '`while (n < 100) { n = n * 2; }` terminiert für jedes `n >= 0`.'
        richtig: false
        erklaerung: 'Für `n = 0` bleibt `n` immer 0, denn 0 · 2 = 0. Die Bedingung `0 < 100` bleibt wahr.'
      - text: '`for (int i = 0; i < n; i++) { n--; }` terminiert für jedes `n >= 0`.'
        richtig: true
        erklaerung: '`i` wächst und `n` schrumpft in jedem Durchlauf um 1. Der Abstand `n − i` wird jedes Mal um 2 kleiner, bis `i < n` falsch ist.'
    fehler:
      - wert: [f, r, r, r]
        meldung: 'Teste die dritte Schleife mit dem kleinsten erlaubten Wert `n = 0`. Was ergibt 0 mal 2?'
      - wert: [r, r, f, r]
        meldung: 'Teste die erste Schleife mit einer ungeraden Zahl, zum Beispiel `n = 3`. Trifft sie die 0?'
hinweise:
  - Probiere für jedes Stück die Randwerte `n = 0` und `n = 1` und eine ungerade Zahl wie `n = 3`.
  - Eine Schleife terminiert sicher, wenn eine ganze Zahl in jedem Durchlauf echt kleiner wird und nicht beliebig tief fallen kann.
loesung: |
  **Ansatz:** Für jede Schleife eine Größe suchen, die sicher kleiner wird, und Gegenbeispiele an den Rändern probieren.
  ---
  Stück 1 springt bei ungeradem `n` über die 0. Stück 3 bleibt bei `n = 0` hängen. Beide terminieren nicht für jedes `n`.
  ---
  Stück 2: `n` halbiert sich und wird bei 0 falsch. Stück 4: Der Abstand `n − i` sinkt um 2 pro Durchlauf. Beide terminieren immer.
```

```aufgabe
id: ko-alg-determiniert
titel: Determiniert oder deterministisch?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ordne jedes Verfahren richtig ein.
teile:
  - typ: auswahl
    label: 'a) Ein Programm würfelt mit `Math.random()` eine Zahl von 1 bis 6 und gibt sie aus.'
    optionen:
      - 'determiniert und deterministisch'
      - 'determiniert, aber nicht deterministisch'
      - 'nicht determiniert'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Starte das Programm zweimal. Kommt sicher dieselbe Zahl heraus? Determiniert verlangt genau das.'
      - wert: 1
        meldung: 'Determiniert hieße: gleiche Eingabe, gleiches Ergebnis. Beim Würfeln ist schon das Ergebnis nicht festgelegt.'
  - typ: auswahl
    label: 'b) Ein Verfahren sucht das Maximum eines Arrays und darf die Elemente in beliebiger Reihenfolge ansehen.'
    optionen:
      - 'determiniert und deterministisch'
      - 'determiniert, aber nicht deterministisch'
      - 'nicht determiniert'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das Ergebnis ist immer dasselbe Maximum. Aber ist der **Ablauf** eindeutig, wenn die Reihenfolge frei wählbar ist?'
      - wert: 2
        meldung: 'Egal in welcher Reihenfolge du schaust, das größte Element bleibt dasselbe. Das Ergebnis ist also festgelegt.'
hinweise:
  - Frage zuerst nach dem Ergebnis (determiniert?) und dann nach dem Weg (deterministisch?).
  - Ein Verfahren, das schon im Ergebnis schwankt, kann nicht deterministisch sein.
loesung: |
  **Ansatz:** Determiniert betrifft das Ergebnis, deterministisch den Ablauf.
  ---
  a) Das Würfelergebnis ist bei jedem Start anders. Das Verfahren ist nicht determiniert und damit auch nicht deterministisch.
  ---
  b) Das Maximum ist eindeutig, also determiniert. Die Reihenfolge ist frei, also gibt es mehrere mögliche Abläufe: nicht deterministisch.
```

```aufgabe
id: ko-alg-code-teiler
titel: Der kleinste Teiler
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Schreibe die Methode `kleinsterTeiler(int n)`. Vorbedingung: `n >= 2`. Sie liefert den kleinsten Teiler von `n`,
  der größer als 1 ist. Für eine Primzahl ist das `n` selbst. Beispiele: `kleinsterTeiler(15)` liefert 3,
  `kleinsterTeiler(13)` liefert 13.

  Überlege danach: Warum terminiert deine Schleife für jedes `n >= 2`?
teile:
  - typ: code
    vorlage: |
      public class Teiler {
          public static int kleinsterTeiler(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Teiler {
          public static int kleinsterTeiler(int n) {
              int t = 2;
              while (n % t != 0) {
                  t++;
              }
              return t;
          }
      }
    tests:
      - { aufruf: "kleinsterTeiler(15)", erwartet: "3" }
      - { aufruf: "kleinsterTeiler(13)", erwartet: "13", beschreibung: "Primzahl: der Teiler ist n selbst" }
      - { aufruf: "kleinsterTeiler(2)", erwartet: "2", beschreibung: "kleinste erlaubte Eingabe" }
      - { aufruf: "kleinsterTeiler(91)", erwartet: "7" }
      - { aufruf: "kleinsterTeiler(1000003)", erwartet: "1000003", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Für eine Primzahl gibt es keinen Teiler zwischen 2 und n − 1. Deine Schleife muss bis n selbst laufen dürfen." }
      - { wert: 3, meldung: "Für n = 2 ist schon der erste Kandidat 2 ein Teiler. Startest du wirklich bei 2?" }
hinweise:
  - Probiere die Kandidaten 2, 3, 4, … der Reihe nach, bis einer `n` teilt.
  - 'Eine `while`-Schleife mit der Bedingung `n % t != 0` passt gut. Sie endet spätestens bei `t = n`, denn `n % n == 0`.'
loesung: |
  **Ansatz:** Kandidaten ab 2 aufwärts durchprobieren. Der erste Treffer ist der kleinste Teiler.
  ---
  ```java
  int t = 2;
  while (n % t != 0) {
      t++;
  }
  return t;
  ```
  ---
  **Terminierung:** `t` wächst in jedem Durchlauf um 1. Spätestens bei `t = n` gilt `n % n == 0`, und die Schleife endet. Für die Primzahl 1 000 003 läuft der Rumpf `t++` genau 1 000 001-mal, denn `t` steigt von 2 bis 1 000 003. Für 15 läuft er nur einmal, von 2 auf 3.
```

```reflexion
frage: Warum reicht es nicht, ein Programm mit vielen Eingaben zu testen, um zu zeigen, dass es für jede erlaubte Eingabe terminiert? Wie begründest du die Terminierung beim Euklidischen Algorithmus stattdessen?
antwort: |
  Es gibt unendlich viele erlaubte Eingaben, und jeder Test prüft nur eine davon. Die Subtraktions-Fassung des ggT
  besteht viele Tests und hängt trotzdem bei `a = 5`, `b = 0`. Man braucht deshalb ein Argument, das für alle Eingaben
  gilt. Beim Euklidischen Algorithmus mit Rest ist das der Wert von `b`: Der neue Wert `a % b` ist immer echt kleiner
  als das alte `b` und nie negativ. Eine ganze Zahl, die bei 0 nicht weiter fallen kann und in jeder Runde kleiner
  wird, erreicht nach endlich vielen Runden die 0. Dann endet die Schleife.
```


## Laufzeit messen und Schritte zählen

```aufgabe
id: ko-zae-check-schritt
titel: Schleife mit Schrittweite 5
niveau: 1
art: check
angabe: |
  Wie oft läuft der Rumpf von `for (int i = 0; i < 20; i += 5) { ... }`?
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))
teile:
  - typ: zahl
    loesung: "4"
    toleranz: 0.1
    fehler:
      - wert: "5"
        meldung: 'Mit `<` ist die 20 nicht mehr dabei. `i` nimmt nur 0, 5, 10 und 15 an.'
      - wert: "20"
        meldung: '`i += 5` erhöht `i` um 5, nicht um 1. Es gibt viel weniger Durchläufe als Zahlen bis 20.'
loesung: |
  `i` nimmt die Werte 0, 5, 10 und 15 an. Bei 20 ist `20 < 20` falsch.
  ---
  Das sind 4 Durchläufe, also 20 geteilt durch die Schrittweite 5.
```

Die Zeit, die ein Programm für eine Eingabe braucht, heißt **Laufzeit**. Wie findet man sie heraus? Die
naheliegende Antwort ist: **Messen.** Man startet es mit einer Eingabe und
stoppt die Zeit. Die EP1-Vorlesung hat das mit einem Verfahren für Arrays gemacht. Bei 1000 Zahlen brauchte es
0,085 Sekunden, bei 2000 Zahlen 0,661 Sekunden, bei 4000 Zahlen 2,5 Sekunden und bei 8000 Zahlen schon 20 Sekunden.
Die Vorlesung fasst das so zusammen: Doppelt so viele Zahlen ergeben ungefähr die achtfache Laufzeit. Einzelne
Messwerte weichen davon ab, von 2000 auf 4000 war es nur knapp das Vierfache. Auch das zeigt, wie unzuverlässig
einzelne Messungen sind.

Messungen haben aber drei Schwächen:

1. Sie gelten nur für **einen Rechner**. Ein anderer Prozessor, eine andere Java-Version oder ein gleichzeitig
   laufendes Programm ändert die Zahlen.
2. Sie gelten nur für die **gemessenen Eingaben**. Ob eine andere Eingabe viel länger dauert, sagt die Messung nicht.
3. Man muss den Algorithmus erst **fertig programmieren**, bevor man ihn messen kann.

Deshalb **zählt** man stattdessen. Man nimmt an, dass jede **einfache Operation** ungefähr gleich lang dauert.
Einfache Operationen sind:

- Eine Zuweisung wie `x = 5`.
- Eine Rechnung wie `a + b`.
- Ein Vergleich wie `i < n`.
- Ein Zugriff `a[i]` auf ein Array-Element.
- Ein Methodenaufruf und die Rückkehr aus einer Methode.

Dann ist die Laufzeit ungefähr proportional zur Anzahl der
ausgeführten Operationen. Proportional heißt: doppelt so viele Operationen, doppelt so viel Zeit.

Die Größe der Eingabe heißt **Eingabegröße** und wird meist **n** genannt. Bei einem Array ist n seine Länge,
bei einem String seine Länge, bei einer Zahl oft die Zahl selbst. Gesucht ist die Zahl der Operationen als
Funktion von n.

:::beispiel[Die Summe eines Arrays: jede Zeile zählen]
Das Array `a` hat die Länge `n = a.length`.

```java
int summe = 0;
for (int i = 0; i < a.length; i++) {
    summe += a[i];
}
```

Wir zählen für jeden Teil, wie oft er ausgeführt wird:

- `int summe = 0` läuft **einmal**.
- `int i = 0` im Schleifenkopf läuft **einmal**.
- Der Vergleich `i < a.length` läuft **n + 1**-mal. Er ist n-mal wahr und beim letzten Prüfen einmal falsch.
- `summe += a[i]` im Rumpf läuft **n**-mal, einmal pro Element.
- `i++` läuft ebenfalls **n**-mal, nach jedem Durchlauf.

Zusammen sind das 1 + 1 + (n + 1) + n + n = 3n + 3 Ausführungen. Für `n = 4` sind es 3 · 4 + 3 = 15. Bei
einem Array mit 1000 Elementen sind es 3003, bei doppelt so vielen Elementen 6003, also etwa doppelt so viele.
:::

Ob man `summe += a[i]` als eine oder als drei Operationen zählt (lesen, addieren, speichern), ändert nur den
Faktor vor dem n. Die Vorlesung sagt dazu: Die genaue Anzahl pro Zeile ist nicht so wichtig. **Wichtig ist, wie
oft eine Zeile ausgeführt wird.** In der Praxis zählt man deshalb oft nur die Ausführungen der innersten Zeile,
also der Zeile, die am häufigsten läuft.

```aufgabe
id: ko-zae-for-zaehlen
titel: Eine Schleife von 12 bis 47
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie oft wird der Rumpf ausgeführt?
  ```java
  for (int k = 12; k <= 47; k++) {
      System.out.print(k);
  }
  ```
teile:
  - typ: zahl
    loesung: "47 - 12 + 1"
    toleranz: 0.1
    fehler:
      - wert: "35"
        meldung: 'Mit `<=` gehört der Endwert 47 dazu. Bei Schrittweite 1 gibt es dann **Ende − Start + 1** Durchläufe.'
      - wert: "47"
        meldung: 'Die Schleife beginnt bei 12. Die Werte 1 bis 11 kommen nicht vor.'
hinweise:
  - 'Zähle die ganzen Zahlen von 12 bis einschließlich 47.'
loesung: |
  **Ansatz:** Bei Schrittweite 1 und `<=` ist die Anzahl Ende − Start + 1.
  ---
  47 − 12 + 1 = 36. Probe an einem kleinen Fall: Von 12 bis 13 sind es 2 Werte, also 13 − 12 + 1.
```

```aufgabe
id: ko-zae-fest-verschachtelt
titel: Feste innere Schleife mit kleiner-gleich
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie oft wird `x++` ausgeführt, wenn `n = 7` ist?
  ```java
  int x = 0;
  for (int i = 0; i < n; i++) {
      for (int j = 0; j <= 3; j++) {
          x++;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "7 * 4"
    toleranz: 0.1
    fehler:
      - wert: "21"
        meldung: '`j <= 3` schließt die 3 ein. `j` läuft 0, 1, 2, 3, das sind 4 Werte, nicht 3.'
      - wert: "11"
        meldung: 'Die Anzahlen werden multipliziert, nicht addiert. Für jeden der 7 äußeren Durchläufe läuft die innere Schleife ganz.'
hinweise:
  - Die innere Grenze hängt nicht von `i` ab. Bestimme beide Anzahlen und multipliziere.
loesung: |
  **Ansatz:** Feste innere Grenze, also äußere Anzahl mal innere Anzahl.
  ---
  Außen: `i` = 0 bis 6, also 7 Durchläufe. Innen: `j` = 0 bis 3, also 4 Durchläufe.
  ---
  7 · 4 = 28. Allgemein sind es 4n Ausführungen.
```

### Verschachtelte Schleifen zählen

Bei verschachtelten Schleifen gilt die Regel aus [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen):
Die innere Schleife läuft bei **jedem** Durchlauf der äußeren komplett. Hängt die innere Grenze nicht von der
äußeren Variable ab, multipliziert man. Hängt sie davon ab, zählt man für jeden äußeren Durchlauf einzeln und
addiert.

:::beispiel[Kommt ein Wert doppelt vor?]
Diese Schleifen vergleichen jedes Element mit jedem späteren Element. So findet man heraus, ob zwei gleiche Werte
im Array stehen. `n` ist die Länge von `a`.

```java
boolean alleVerschieden = true;
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (a[i] == a[j]) {
            alleVerschieden = false;
        }
    }
}
```

- Die äußere Schleife wählt ein Element `a[i]`.
- Die innere beginnt bei `j = i + 1`, also beim nächsten Element. So wird jedes Paar nur einmal verglichen, und kein Element mit sich selbst.
- Wir zählen die Vergleiche `a[i] == a[j]`.

Für `n = 5`:

|`i`|Werte von `j`|Vergleiche|
|---|---|---|
|0|1, 2, 3, 4|4|
|1|2, 3, 4|3|
|2|3, 4|2|
|3|4|1|
|4|keine|0|

Zusammen 4 + 3 + 2 + 1 + 0 = 10 Vergleiche. Allgemein sind es (n − 1) + (n − 2) + … + 1 + 0.
:::

Für diese Summe gibt es eine Formel, die auf den Mathematiker Gauß zurückgeht. Schreib die Summe
1 + 2 + … + m einmal vorwärts und einmal rückwärts untereinander. Jedes Paar übereinanderstehender Zahlen ergibt
m + 1, und es gibt m solche Paare. Das ist die doppelte Summe. Also gilt:

$$1 + 2 + \dots + m = \frac{m \cdot (m+1)}{2}$$

Dabei ist m die größte Zahl der Summe. Beim Doppelt-Vergleich ist die größte Zahl m = n − 1. Eingesetzt ergibt
das $\frac{(n-1) \cdot n}{2}$. Probe mit n = 5: 4 · 5 / 2 = 10, wie in der Tabelle. Für ein Array mit 1000
Elementen sind es 999 · 1000 / 2 = 499 500 Vergleiche.

```aufgabe
id: ko-zae-trace-dreieck
titel: Ein Dreieck in der Tabelle
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Fülle die Tabelle aus. Jede Zeile gehört zu einem Durchlauf der **äußeren** Schleife. Die erste Zeile ist
  vorgegeben.
  ```java
  int x = 0;
  for (int i = 1; i <= 4; i++) {
      for (int j = i; j <= 4; j++) {
          x++;
      }
  }
  ```
teile:
  - typ: trace
    spalten: [i, innere Durchläufe, x danach]
    loesung: [[1, 4, 4], [2, 3, 7], [3, 2, 9], [4, 1, 10]]
    vorgabe: 1
    fehler:
      - wert: ["1", "4", "4", "2", "4", "8", "3", "4", "12", "4", "4", "16"]
        meldung: 'Die innere Schleife beginnt bei `j = i`, nicht bei 1. Mit jedem größeren `i` läuft sie einmal weniger.'
hinweise:
  - Für jedes `i` läuft `j` von `i` bis 4. Das sind 4 − i + 1 Werte.
  - '`x` zählt alle inneren Durchläufe zusammen. Addiere in jeder Zeile die neuen Durchläufe zum alten Wert.'
loesung: |
  **Ansatz:** Für jedes `i` die Werte von `j` zählen: von `i` bis 4.
  ---
  `i = 1`: j = 1 bis 4, 4 Durchläufe, x = 4. `i = 2`: 3 Durchläufe, x = 7.
  ---
  `i = 3`: 2 Durchläufe, x = 9. `i = 4`: 1 Durchlauf, x = 10. Probe: 4 + 3 + 2 + 1 = 4 · 5 / 2 = 10.
```

:::merke[Wie oft läuft eine Schleife?]
1. `for (int i = a; i < b; i++)` läuft b − a Mal. Mit `<=` sind es b − a + 1 Mal.
2. Mit Schrittweite s (`i += s`, Start 0, Bedingung `i < n`) sind es n / s Mal, aufgerundet. Für n = 7 und s = 2 sind es die Werte 0, 2, 4, 6, also 4 Durchläufe.
3. Hintereinander stehende Schleifen: Anzahlen **addieren**.
4. Verschachtelt mit fester innerer Grenze: Anzahlen **multiplizieren**.
5. Verschachtelt mit innerer Grenze, die von `i` abhängt: für jedes `i` einzeln zählen und addieren. Oft hilft die Formel 1 + 2 + … + m = m(m + 1) / 2.
6. Im Zweifel immer zuerst ein kleines n von Hand durchzählen, etwa n = 4 oder n = 5.
:::

:::achtung[Einen Durchlauf zu wenig gezählt]
Ein Student zählt bei `for (int i = 1; i <= n; i++)` nur n − 1 Durchläufe. Seine Begründung: n − 1 sei die
Differenz von Ende und Start. Prüfe es mit n = 10: `i` nimmt die Werte 1, 2, …, 10 an. Das sind **10** Werte, nicht 9. Die Formel
„Ende − Start“ gilt nur bei `<`. Bei `<=` kommt der Endwert dazu, also Ende − Start + 1 = 10 − 1 + 1 = n.
:::

:::achtung[Abhängige Grenze wie eine feste behandelt]
Bei diesen Schleifen rechnet eine Studentin „6 mal 6 = 36 Durchläufe“:

```java
for (int i = 0; i < 6; i++) {
    for (int j = i + 1; j < 6; j++) {
        x++;
    }
}
```

Die innere Schleife beginnt aber bei `i + 1`. Für `i = 0` läuft sie 5-mal, für `i = 1` 4-mal und so weiter, bis
`i = 5` mit 0 Durchläufen. Richtig ist 5 + 4 + 3 + 2 + 1 + 0 = 15, also 5 · 6 / 2. Multiplizieren darf man nur,
wenn die innere Grenze **nicht** von `i` abhängt.
:::

```aufgabe
id: ko-zae-term-hintereinander
titel: Zwei Teile hintereinander
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gib als Term in `n` an, wie oft `x++` insgesamt ausgeführt wird. $n^2$ (gelesen „n Quadrat“) ist eine kurze
  Schreibweise für n · n. Tippe es als `n^2`.
  ```java
  int x = 0;
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          x++;
      }
  }
  for (int k = 0; k < n; k++) {
      x++;
  }
  ```
teile:
  - typ: term
    variable: n
    loesung: "n^2 + n"
    fehler:
      - wert: "n^2"
        meldung: 'Die zweite Schleife mit `k` steht **nach** der Doppelschleife und führt `x++` noch einmal n-mal aus. Hintereinander stehende Teile werden addiert.'
      - wert: "n^3"
        meldung: 'Die Schleife mit `k` steht nicht in der Doppelschleife, sondern dahinter. Hintereinander heißt addieren, nicht multiplizieren.'
hinweise:
  - Zähle die beiden Teile getrennt.
  - 'Die Doppelschleife hat feste Grenzen: n · n. Die einzelne Schleife: n. Was macht man mit Teilen, die hintereinander stehen?'
loesung: |
  **Ansatz:** Teile getrennt zählen und dann addieren, weil sie hintereinander stehen.
  ---
  Doppelschleife mit festen Grenzen: n · n = n² Ausführungen. Die Schleife mit `k`: n Ausführungen.
  ---
  Zusammen n² + n. Probe mit n = 3: 9 + 3 = 12.
```

```aufgabe
id: ko-zae-schrittweite
titel: Schrittweite 3
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie oft läuft der Rumpf für `n = 20`?
  ```java
  for (int i = 0; i < n; i += 3) {
      System.out.println(i);
  }
  ```
teile:
  - typ: zahl
    loesung: "7"
    toleranz: 0.1
    fehler:
      - wert: "6"
        meldung: '20 geteilt durch 3 ergibt 6 Rest 2. Es gibt aber noch den Wert 18, denn `18 < 20`. Hier wird **aufgerundet**: 0, 3, 6, 9, 12, 15, 18.'
      - wert: "20"
        meldung: '`i += 3` springt in Dreierschritten. Es laufen nur die Vielfachen von 3 unter 20 durch.'
hinweise:
  - Schreib die Werte von `i` auf, bis die Bedingung falsch ist.
  - Der erste Wert ist 0, der letzte ist das größte Vielfache von 3, das kleiner als 20 ist.
loesung: |
  **Ansatz:** Werte von `i` aufzählen: Start 0, Schritt 3, solange `i < 20`.
  ---
  0, 3, 6, 9, 12, 15, 18. Der nächste Wert 21 erfüllt `21 < 20` nicht.
  ---
  Das sind 7 Durchläufe. Probe mit der Merke-Regel: 20 / 3 = 6,67, aufgerundet 7.
```


```aufgabe
id: ko-zae-gefuehrt-formel
titel: Die Dreieckszahl als Term
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gib als Term in `n` an, wie oft `x++` ausgeführt wird.
  ```java
  int x = 0;
  for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
          x++;
      }
  }
  ```
teile:
  - typ: term
    variable: n
    loesung: "n*(n+1)/2"
    fehler:
      - wert: "n^2"
        meldung: 'Die innere Grenze `j <= i` hängt von `i` ab. Für `i = 1` läuft die innere Schleife nur einmal, nicht n-mal.'
      - wert: "n*(n-1)/2"
        meldung: 'Bei `i = 1` läuft die innere Schleife einmal, bei `i = n` genau n-mal. Die Summe ist 1 + 2 + … + n, die größte Zahl ist also n, nicht n − 1.'
hinweise:
  - Zähle zuerst für n = 3 und n = 4 von Hand.
  - 'Für jedes `i` läuft die innere Schleife genau `i`-mal. Die Summe 1 + 2 + … + n hat eine Formel.'
gefuehrt:
  - text: Wie oft läuft `x++` für `n = 3`?
    teil: { typ: zahl, loesung: "1 + 2 + 3", toleranz: 0.1 }
    erklaerung: 'Für `i = 1, 2, 3` läuft die innere Schleife 1-, 2- und 3-mal. Zusammen 6.'
  - text: Wie oft läuft `x++` für `n = 4`?
    teil: { typ: zahl, loesung: "1 + 2 + 3 + 4", toleranz: 0.1 }
    erklaerung: Es kommt der Durchlauf mit `i = 4` dazu, also 6 + 4 = 10.
  - text: Welche Summe entsteht allgemein?
    teil:
      typ: auswahl
      optionen: ['1 + 2 + … + n', '0 + 1 + … + (n − 1)', 'n + n + … + n (n-mal)']
      richtig: [0]
    erklaerung: 'Für jedes `i` von 1 bis n läuft die innere Schleife `i`-mal.'
  - text: Gib die Summe 1 + 2 + … + n als Term an.
    teil: { typ: term, variable: n, loesung: "n*(n+1)/2" }
    erklaerung: Mit der Formel von Gauß und m = n. Probe mit n = 4 ergibt 4 · 5 / 2 = 10.
loesung: |
  **Ansatz:** Innere Grenze hängt von `i` ab, also pro `i` zählen und addieren.
  ---
  Für `i = 1, 2, …, n` läuft `x++` 1, 2, …, n Mal. Die Summe ist 1 + 2 + … + n.
  ---
  Nach Gauß ist das n(n + 1) / 2. Probe: n = 3 ergibt 6, n = 4 ergibt 10.
```

```aufgabe
id: ko-zae-zaehler-ausgabe
titel: Zähler in drei Schleifen
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 6;
      int z = 0;
      for (int i = 0; i < n; i++) {
          for (int j = i; j < n; j += 2) {
              z++;
          }
      }
      for (int k = n; k > 0; k /= 2) {
          z++;
      }
      System.out.println(z);
    loesung: |
      15
    fehler:
      - wert: "24"
        meldung: 'Die innere Schleife springt mit `j += 2` in Zweierschritten. Für `i = 0` läuft sie nur für 0, 2 und 4, nicht für 0 bis 5.'
      - wert: "12"
        meldung: 'Die Doppelschleife ergibt 12, aber danach erhöht die Schleife mit `k` den Zähler noch weiter. Sie gehört mit dazu.'
hinweise:
  - Lege für die Doppelschleife eine Tabelle an. Spalten `i`, Werte von `j`, Anzahl.
  - '`k /= 2` ist Ganzzahldivision. `k` läuft 6, 3, 1, danach ist es 0.'
loesung: |
  **Ansatz:** Doppelschleife und dritte Schleife getrennt zählen, dann addieren.
  ---
  Doppelschleife: `i = 0`: j = 0, 2, 4 (3). `i = 1`: 1, 3, 5 (3). `i = 2`: 2, 4 (2). `i = 3`: 3, 5 (2). `i = 4`: 4 (1). `i = 5`: 5 (1). Zusammen 12.
  ---
  Dritte Schleife: `k` = 6, 3, 1, also 3 Durchläufe. Bei `k = 0` ist `0 > 0` falsch.
  ---
  Ausgabe `15`, denn 12 + 3 = 15.
```

```reflexion
frage: Zwei Studierende messen dieselbe Methode und bekommen 2 Sekunden und 5 Sekunden. Warum ist das kein Widerspruch, und warum ist das Zählen der Ausführungen trotzdem für beide gleich?
antwort: |
  Die Zeit hängt vom Rechner ab: vom Prozessor, von der Java-Version und davon, was gleichzeitig läuft. Ein
  langsamerer Rechner braucht für jede einzelne Operation länger. Die Anzahl der ausgeführten Operationen hängt
  dagegen nur vom Code und von der Eingabe ab. Zählen beide die Ausführungen der innersten Zeile, kommen sie auf
  dieselbe Zahl, zum Beispiel n(n − 1)/2 Vergleiche. Deshalb vergleicht man Algorithmen über das Zählen und nicht
  über eine einzelne Messung.
```


## Bester, mittlerer und schlechtester Fall

```aufgabe
id: ko-fall-check-break
titel: Die erste Fundstelle
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.6 Suchen und vorzeitig aufhören](/lernen/ep1/schleifen/suchen-und-vorzeitig-aufhoeren))
teile:
  - typ: ausgabe
    code: |
      String s = "Banane";
      int pos = -1;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == 'n') {
              pos = i;
              break;
          }
      }
      System.out.println(pos);
    loesung: |
      2
    fehler:
      - wert: "4"
        meldung: '`break` beendet die Schleife beim **ersten** Treffer. Das zweite `n` an Index 4 wird gar nicht mehr erreicht.'
      - wert: "3"
        meldung: 'Die Indizes beginnen bei 0. `B` hat Index 0, `a` Index 1, das erste `n` Index 2.'
loesung: |
  Bei `i = 0` steht `B`, bei `i = 1` steht `a`. Beide sind nicht `n`.
  ---
  Bei `i = 2` steht `n`. `pos` wird 2, und `break` beendet die Schleife. Ausgabe `2`.
```

Bisher hing die Zahl der Durchläufe nur von n ab. Bei vielen Algorithmen hängt sie aber auch davon ab, **welche**
Werte in der Eingabe stehen. Das beste Beispiel ist die **lineare Suche** aus
[12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen). Linear heißt
hier: Sie geht das Array der Reihe nach von vorne nach hinten durch. Ausführlich behandelt sie
[18.1 Lineare Suche: den ersten Treffer finden](/lernen/ep1/suchen/lineare-suche-den-ersten-treffer-finden).

```java
static int suche(int[] a, int x) {
    for (int i = 0; i < a.length; i++) {
        if (a[i] == x) {
            return i;
        }
    }
    return -1;
}
```

- Die Methode bekommt ein Array `a` und einen gesuchten Wert `x`.
- Die Schleife vergleicht jedes Element mit `x`.
- Bei einem Treffer beendet `return i` die ganze Methode **sofort** und liefert den Index. Die restlichen Elemente werden nicht mehr angesehen.
- Nur wenn die Schleife ohne Treffer zu Ende läuft, liefert die Methode -1. Die -1 bedeutet „nicht gefunden“, weil kein Array den Index -1 hat.

Wir zählen die Vergleiche `a[i] == x`, denn sie stehen in der Zeile, die am häufigsten läuft.

:::beispiel[Vier Suchen im selben Array]
Das Array ist `int[] a = {8, 3, 5, 9, 1};`, also n = 5.

|Aufruf|verglichen mit|Vergleiche|Ergebnis|
|---|---|---|---|
|`suche(a, 8)`|8|1|0|
|`suche(a, 9)`|8, 3, 5, 9|4|3|
|`suche(a, 1)`|8, 3, 5, 9, 1|5|4|
|`suche(a, 7)`|8, 3, 5, 9, 1|5|-1|

Dasselbe Array, dieselbe Länge, aber zwischen 1 und 5 Vergleichen. Der Wert 8 steht vorne und wird sofort
gefunden. Der Wert 7 fehlt, also muss die Suche alle fünf Elemente ansehen, bevor sie aufgeben darf.
:::

Weil die Arbeit von der Eingabe abhängt, unterscheidet man drei Fälle. Alle drei betrachten Eingaben **derselben
Größe** n.

:::definition[Bester, durchschnittlicher und schlechtester Fall]
- **Bester Fall** (englisch *best case*): die kleinste Laufzeit unter allen Eingaben der Größe n. Bei der linearen Suche steht `x` an der ersten Stelle: **1** Vergleich.
- **Schlechtester Fall** (*worst case*): die größte Laufzeit unter allen Eingaben der Größe n. Bei der linearen Suche steht `x` an der letzten Stelle oder gar nicht im Array: **n** Vergleiche.
- **Durchschnittlicher Fall** (*average case*): die mittlere Laufzeit über alle Eingaben der Größe n. Dafür braucht man eine Annahme, wie oft welche Eingabe vorkommt.
:::

Für den durchschnittlichen Fall der linearen Suche nehmen wir an: `x` kommt im Array vor, und jede der n
Positionen ist gleich wahrscheinlich. Steht `x` an Position 1, braucht die Suche 1 Vergleich, an Position 2 zwei
Vergleiche und so weiter bis n. Der Mittelwert ist die Summe geteilt durch die Anzahl der Fälle:

$$\frac{1 + 2 + \dots + n}{n} = \frac{n \cdot (n+1)}{2 \cdot n} = \frac{n+1}{2}$$

Im ersten Schritt steht oben die Summe aller Fälle, unten ihre Anzahl n. Im zweiten Schritt ersetzen wir die Summe
durch die Formel von Gauß. Im dritten kürzen wir das n. Für n = 5 sind es im Schnitt (5 + 1) / 2 = 3 Vergleiche,
also etwa die Hälfte des Arrays.

```aufgabe
id: ko-fall-vergleiche-zaehlen
titel: Vergleiche bis zum Treffer
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Wie viele Vergleiche `a[i] == x` macht `suche(a, 6)` mit der Methode `suche` aus diesem Abschnitt?
  ```java
  int[] a = {2, 9, 4, 6, 1, 6};
  ```
teile:
  - typ: zahl
    loesung: "4"
    toleranz: 0.1
    fehler:
      - wert: "3"
        meldung: '3 ist der **Index** des Treffers. Verglichen wurden aber die Elemente an den Indizes 0, 1, 2 und 3.'
      - wert: "6"
        meldung: 'Beim ersten Treffer beendet `return i` die Methode sofort. Die zweite 6 am Ende wird nicht mehr angesehen.'
hinweise:
  - Geh das Array von vorne durch und zähle jeden Vergleich, auch den, der zum Treffer führt.
loesung: |
  **Ansatz:** Von vorne vergleichen, bis zum ersten Treffer. Jeder Vergleich zählt.
  ---
  2 ≠ 6, 9 ≠ 6, 4 ≠ 6, dann 6 = 6. Das sind 4 Vergleiche, Rückgabe 3.
```

```aufgabe
id: ko-fall-worst-auswahl
titel: Welcher Aufruf ist ein schlechtester Fall?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Das Array ist `int[] a = {5, 2, 8, 1};`. Welcher Aufruf von `suche` braucht die **meisten** Vergleiche?
teile:
  - typ: auswahl
    optionen:
      - '`suche(a, 5)`'
      - '`suche(a, 8)`'
      - '`suche(a, 7)`'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Die 5 steht an erster Stelle. Das ist der beste Fall mit nur einem Vergleich.'
      - wert: 1
        meldung: 'Die 8 steht an Index 2. Die Suche hört nach 3 Vergleichen auf. Gibt es einen Aufruf, bei dem sie alle 4 Elemente ansehen muss?'
hinweise:
  - Zähle für jeden Aufruf die Vergleiche. Was passiert, wenn der Wert gar nicht im Array steht?
loesung: |
  **Ansatz:** Für jeden Aufruf die Vergleiche zählen.
  ---
  `suche(a, 5)`: 1 Vergleich. `suche(a, 8)`: 3 Vergleiche.
  ---
  `suche(a, 7)`: Die 7 fehlt, also werden alle 4 Elemente verglichen. Das ist ein schlechtester Fall, so wie die Suche nach dem letzten Element 1.
```

### Warum meistens der schlechteste Fall?

In der Praxis und im Quiz ist mit „Laufzeit“ fast immer die Laufzeit im **schlechtesten Fall** gemeint. Dafür gibt
es drei Gründe. Die Vorlesung nennt die Gründe 2 und 3 ausdrücklich:

1. **Er ist eine Garantie.** Kein Aufruf mit einem Array der Länge n dauert länger. Wer eine Antwortzeit
   zusichern muss, braucht genau diese Obergrenze.
2. **Er ist meist leichter zu bestimmen.** Man muss nur die ungünstigste Eingabe finden. Für den durchschnittlichen
   Fall braucht man dagegen Annahmen über alle Eingaben und deren Häufigkeit.
3. **Er führt zu besseren Algorithmen.** Ein Verfahren, das im schlechtesten Fall schnell ist, ist für jede Eingabe
   schnell.

Der beste Fall ist dagegen fast nie aussagekräftig. Fast jeder Algorithmus hat irgendeine Glücks-Eingabe.

:::beispiel[Ist das Array aufsteigend sortiert?]
**Aufsteigend sortiert** heißt: Jedes Element ist kleiner oder gleich seinem rechten Nachbarn.

```java
static boolean sortiert(int[] a) {
    for (int i = 0; i + 1 < a.length; i++) {
        if (a[i] > a[i + 1]) {
            return false;
        }
    }
    return true;
}
```

- Die Bedingung `i + 1 < a.length` sorgt dafür, dass `a[i + 1]` immer einen gültigen Index hat. Bei n Elementen gibt es n − 1 Nachbarpaare.
- Sobald ein Paar falsch herum steht, liefert `return false` sofort das Ergebnis.

Wir zählen die Vergleiche `a[i] > a[i + 1]` für n = 5:

- **Bester Fall:** Das erste Paar steht falsch, etwa bei `{6, 1, 3, 4, 8}`. Nach **1** Vergleich steht `false` fest.
- **Schlechtester Fall:** Das Array ist sortiert, etwa `{2, 4, 4, 7, 9}`. Alle **4** Paare müssen geprüft werden, also n − 1. Auch `{2, 4, 7, 9, 3}` braucht 4 Vergleiche, denn erst das letzte Paar ist falsch.
:::

:::achtung[Mit dem besten Fall argumentiert]
Ein Student sagt im Feedbackgespräch, die lineare Suche brauche nur einen Vergleich. Deshalb sei sie auch bei
einer Million Elementen schnell. Das stimmt nur, wenn der gesuchte Wert zufällig ganz vorne steht. Fehlt der Wert,
braucht die Suche bei n = 1 000 000 genau 1 000 000 Vergleiche. Im Schnitt sind es bei vorhandenem Wert
(1 000 000 + 1) / 2, also rund 500 000. Eine Aussage über die Laufzeit stützt man auf den schlechtesten Fall.
:::

:::achtung[Schlechtester Fall heißt nicht größtes Array]
Auf die Frage nach dem schlechtesten Fall der linearen Suche antwortet eine Studentin: „Wenn das Array sehr lang
ist.“ Das verwechselt zwei Dinge. Die Länge n ist fest vorgegeben, und für **dieses** n sucht man die ungünstigste
Belegung. Die richtige Antwort lautet: „Der Wert steht an der letzten Stelle oder fehlt. Dann sind es n Vergleiche.“
Wie diese Zahl mit n wächst, beschreibt danach die O-Notation.
:::

```aufgabe
id: ko-fall-durchschnitt
titel: Im Durchschnitt
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Array hat 9 Elemente, alle verschieden. Der gesuchte Wert kommt sicher vor, und jede Position ist gleich
  wahrscheinlich. Wie viele Vergleiche braucht die lineare Suche im Durchschnitt?
teile:
  - typ: zahl
    loesung: "(1+2+3+4+5+6+7+8+9)/9"
    toleranz: 0.01
    fehler:
      - wert: "4.5"
        meldung: 'n / 2 ist nur ungefähr richtig. Die Fälle reichen von 1 bis 9 Vergleichen, nicht von 0 bis 9. Rechne den Mittelwert genau aus.'
      - wert: "9"
        meldung: 'Das ist der schlechteste Fall. Im Durchschnitt steht der Wert mal weiter vorne, mal weiter hinten.'
hinweise:
  - Steht der Wert an Position k (von 1 gezählt), braucht die Suche k Vergleiche.
  - Addiere die Vergleiche aller 9 Fälle und teile durch die Anzahl der Fälle.
gefuehrt:
  - text: Wie viele Vergleiche braucht die Suche, wenn der Wert an der ersten Position steht?
    teil: { typ: zahl, loesung: "1", toleranz: 0.1 }
    erklaerung: Gleich der erste Vergleich ist ein Treffer.
  - text: Und wenn er an der letzten, also neunten Position steht?
    teil: { typ: zahl, loesung: "9", toleranz: 0.1 }
    erklaerung: Alle neun Elemente werden verglichen, der letzte Vergleich ist der Treffer.
  - text: Wie groß ist die Summe der Vergleiche über alle neun Fälle?
    teil: { typ: zahl, loesung: "9*10/2", toleranz: 0.1 }
    erklaerung: 1 + 2 + … + 9 = 9 · 10 / 2 = 45 nach der Formel von Gauß.
  - text: Teile durch die Anzahl der Fälle. Was ist der Durchschnitt?
    teil: { typ: zahl, loesung: "45/9", toleranz: 0.01 }
    erklaerung: 45 / 9 = 5. Das passt zur Formel (n + 1) / 2 = 10 / 2.
loesung: |
  **Ansatz:** Mittelwert über alle 9 gleich wahrscheinlichen Positionen.
  ---
  Position k kostet k Vergleiche. Summe 1 + 2 + … + 9 = 45.
  ---
  45 / 9 = 5 Vergleiche im Durchschnitt. Probe mit der Formel: (9 + 1) / 2 = 5.
```

```aufgabe
id: ko-fall-sortiert-rf
titel: Aussagen zur Methode sortiert
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Es geht um die Methode `sortiert` aus dem Beispiel „Ist das Array aufsteigend sortiert?“. Gezählt werden die
  Vergleiche `a[i] > a[i + 1]`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für ein Array mit n ≥ 2 Elementen braucht die Methode im besten Fall genau einen Vergleich.'
        richtig: true
        erklaerung: 'Ist schon das erste Paar falsch herum, liefert `return false` nach einem Vergleich das Ergebnis.'
      - text: 'Für `{1, 2, 3, 0}` macht die Methode 3 Vergleiche.'
        richtig: true
        erklaerung: '1 > 2 nein, 2 > 3 nein, 3 > 0 ja. Der dritte Vergleich findet das falsche Paar.'
      - text: 'Der schlechteste Fall tritt nur ein, wenn das Array sortiert ist.'
        richtig: false
        erklaerung: 'Auch wenn erst das letzte Paar falsch steht, wie bei `{1, 2, 3, 0}`, werden alle n − 1 Paare geprüft.'
      - text: 'Für ein leeres Array stürzt die Methode mit einer Exception ab.'
        richtig: false
        erklaerung: 'Bei Länge 0 ist `0 + 1 < 0` sofort falsch. Die Schleife läuft keinmal, und die Methode liefert `true`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Schau dir das Array `{1, 2, 3, 0}` aus der zweiten Aussage noch einmal an. Ist es sortiert, und wie viele Vergleiche braucht es?'
      - wert: [r, r, f, r]
        meldung: 'Prüfe die Schleifenbedingung `i + 1 < a.length` für ein Array der Länge 0. Wird `a[i]` überhaupt aufgerufen?'
hinweise:
  - Zähle für jedes konkrete Array die Vergleiche von Hand.
  - Für die letzte Aussage setze `a.length = 0` in die Schleifenbedingung ein.
loesung: |
  **Ansatz:** Für jede Aussage ein konkretes Array durchgehen und die Vergleiche zählen.
  ---
  Aussage 1 stimmt. Aussage 2 stimmt: Der dritte Vergleich `3 > 0` beendet die Methode.
  ---
  Aussage 3 ist falsch: Ein Array, bei dem nur das letzte Paar falsch steht, braucht ebenfalls n − 1 Vergleiche. Aussage 4 ist falsch: Die Schleife läuft keinmal, Ergebnis `true`.
```

```aufgabe
id: ko-fall-duplikat-best-worst
titel: Doppelte Werte suchen mit frühem Abbruch
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Methode bricht beim ersten gleichen Paar ab. Gezählt werden die Vergleiche `a[i] == a[j]` für ein Array
  mit n = 8 Elementen.
  ```java
  static boolean alleVerschieden(int[] a) {
      for (int i = 0; i < a.length; i++) {
          for (int j = i + 1; j < a.length; j++) {
              if (a[i] == a[j]) {
                  return false;
              }
          }
      }
      return true;
  }
  ```
teile:
  - typ: zahl
    label: a) Vergleiche im besten Fall
    loesung: "1"
    toleranz: 0.1
    fehler:
      - wert: "0"
        meldung: 'Der Vergleich, der das gleiche Paar entdeckt, zählt mit. Mindestens ein Vergleich ist nötig.'
  - typ: zahl
    label: b) Vergleiche im schlechtesten Fall
    loesung: "8*7/2"
    toleranz: 0.1
    fehler:
      - wert: "64"
        meldung: 'Die innere Schleife beginnt bei `i + 1`. Es werden nur die Paare mit `i < j` verglichen, also nicht 8 · 8.'
      - wert: "56"
        meldung: '8 · 7 zählt jedes Paar doppelt, einmal als (i, j) und einmal als (j, i). Hier kommt jedes Paar nur einmal vor.'
hinweise:
  - 'Bester Fall: Wann kann die Methode am frühesten `false` liefern?'
  - 'Schlechtester Fall: Wenn alle Werte verschieden sind, läuft jede Schleife vollständig. Zähle wie im Beispiel „Kommt ein Wert doppelt vor?“ in [17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen).'
loesung: |
  **Ansatz:** Bester Fall ist der früheste Abbruch, schlechtester Fall der vollständige Durchlauf.
  ---
  a) Sind `a[0]` und `a[1]` gleich, liefert schon der erste Vergleich `false`: 1 Vergleich.
  ---
  b) Sind alle Werte verschieden, wird jedes Paar einmal verglichen: 7 + 6 + … + 1 = 8 · 7 / 2 = 28 Vergleiche.
```

```aufgabe
id: ko-fall-code-vergleiche
titel: Vergleiche selbst zählen lassen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe die Methode `vergleiche(int[] a, int x)`. Sie liefert, wie viele Vergleiche die lineare Suche
  `suche(a, x)` aus diesem Abschnitt machen würde. Sie soll die Suche selbst nachspielen und dabei mitzählen.
  Beispiele: `vergleiche(new int[]{4, 7, 1}, 7)` liefert 2, `vergleiche(new int[]{4, 7, 1}, 9)` liefert 3.
teile:
  - typ: code
    vorlage: |
      public class Zaehlen {
          public static int vergleiche(int[] a, int x) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Zaehlen {
          public static int vergleiche(int[] a, int x) {
              int anzahl = 0;
              for (int i = 0; i < a.length; i++) {
                  anzahl++;
                  if (a[i] == x) {
                      return anzahl;
                  }
              }
              return anzahl;
          }
      }
    tests:
      - { aufruf: "vergleiche(new int[]{4, 7, 1}, 7)", erwartet: "2" }
      - { aufruf: "vergleiche(new int[]{4, 7, 1}, 9)", erwartet: "3", beschreibung: "nicht gefunden: alle Elemente" }
      - { aufruf: "vergleiche(new int[]{5, 5, 5}, 5)", erwartet: "1", beschreibung: "Treffer an erster Stelle" }
      - { aufruf: "vergleiche(new int[]{}, 3)", erwartet: "0", beschreibung: "leeres Array" }
      - { aufruf: "vergleiche(new int[]{2, 8, 6, 8}, 8)", erwartet: "2", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Zählst du auch den Vergleich, der den Treffer findet? Bei Index 1 sind es 2 Vergleiche." }
      - { wert: 3, meldung: "Beim ersten Treffer hört die Suche auf. Zählst du danach noch weiter?" }
hinweise:
  - Baue die Schleife von `suche` nach. Statt den Index zurückzugeben, zählst du vor jedem Vergleich einen Zähler hoch.
  - 'Bei einem Treffer gibst du den Zähler sofort zurück. Ohne Treffer ist der Zähler am Ende gleich `a.length`.'
loesung: |
  **Ansatz:** Die Suche nachspielen und jeden Vergleich mitzählen.
  ---
  ```java
  int anzahl = 0;
  for (int i = 0; i < a.length; i++) {
      anzahl++;
      if (a[i] == x) {
          return anzahl;
      }
  }
  return anzahl;
  ```
  ---
  Probe: `{4, 7, 1}` mit 7 zählt 1 (für 4) und 2 (für 7), dann Treffer: 2. Mit 9 läuft die Schleife ganz durch: 3. Beim leeren Array läuft sie keinmal: 0.
```

```aufgabe
id: ko-fall-ohne-abbruch
titel: Eine Suche ohne Abbruch
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: TUWEL-Test 2 WS2021 vom 13.01.2022, Frage zur Variante der linearen Suche (Stil nachgebaut, andere Variante)
angabe: |
  Diese Variante der linearen Suche bricht nie vorzeitig ab. Gezählt werden die Vergleiche `a[i] == x`, `n` ist
  die Länge von `a`.
  ```java
  static int sucheLetzte(int[] a, int x) {
      int pos = -1;
      for (int i = 0; i < a.length; i++) {
          if (a[i] == x) {
              pos = i;
          }
      }
      return pos;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Im besten Fall genügt ein einziger Vergleich.'
        richtig: false
        erklaerung: 'Es gibt kein `return` und kein `break` in der Schleife. Sie macht immer alle n Vergleiche.'
      - text: 'Kommt `x` mehrfach vor, liefert die Methode die Position des letzten Vorkommens.'
        richtig: true
        erklaerung: 'Jeder spätere Treffer überschreibt `pos`. Übrig bleibt der letzte.'
      - text: 'Bester und schlechtester Fall brauchen gleich viele Vergleiche.'
        richtig: true
        erklaerung: 'Beide brauchen genau n Vergleiche, weil die Schleife immer vollständig läuft.'
      - text: 'Verdoppelt man die Länge des Arrays, verdoppelt sich die Zahl der Vergleiche.'
        richtig: true
        erklaerung: 'Es sind immer genau n Vergleiche. Aus n wird 2n.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Gibt es in dieser Schleife eine Anweisung, die sie vorzeitig beendet? Ohne `return` oder `break` hängt die Zahl der Durchläufe nicht von den Werten ab.'
      - wert: [f, f, r, r]
        meldung: 'Verfolge `{3, 7, 3}` mit `x = 3`. Bei `i = 0` wird `pos` zu 0, bei `i = 2` wird es überschrieben. Welcher Wert bleibt?'
hinweise:
  - Suche in der Schleife nach `return` oder `break`. Gibt es eines?
  - Verfolge ein kleines Beispiel wie `{3, 7, 3}` mit `x = 3` in einer Tabelle.
loesung: |
  **Ansatz:** Zuerst klären, ob die Schleife vorzeitig enden kann. Hier nicht: kein `return`, kein `break`.
  ---
  Also macht die Methode für jede Eingabe der Länge n genau n Vergleiche. Bester und schlechtester Fall fallen zusammen, und eine Verdopplung von n verdoppelt die Vergleiche. Aussage 1 ist falsch, 3 und 4 stimmen.
  ---
  Jeder Treffer überschreibt `pos`. Bei `{3, 7, 3}` und `x = 3` bleibt `pos = 2`, die letzte Fundstelle. Aussage 2 stimmt.
```

```reflexion
frage: Eine Methode braucht im besten Fall 1 Schritt und im schlechtesten Fall n² Schritte. Ihre Kollegin sagt, die Methode sei schnell, weil der beste Fall so gut ist. Was antwortest du ihr?
antwort: |
  Der beste Fall sagt nur, was bei einer besonders günstigen Eingabe passiert. Man kann sich nicht darauf verlassen,
  dass genau diese Eingabe kommt. Garantieren kann man nur den schlechtesten Fall: Kein Aufruf mit Größe n braucht
  mehr als n² Schritte, aber manche brauchen so viele. Für n = 1000 sind das eine Million Schritte. Deshalb beurteilt
  man die Laufzeit nach dem schlechtesten Fall, und die Methode ist für große n eher langsam.
```


## Die O-Notation: nur das Wachstum zählt

```aufgabe
id: ko-o-check-einsetzen
titel: Eine Zählfunktion auswerten
niveau: 1
art: check
angabe: |
  Für die Summe eines Arrays mit n Elementen haben wir 3n + 3 ausgeführte Teile gezählt. Wie viele sind es für
  n = 200? (Wiederholung: [17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen))
teile:
  - typ: zahl
    loesung: "3 * 200 + 3"
    toleranz: 0.1
    fehler:
      - wert: "609"
        meldung: 'Punkt vor Strich: Erst wird 3 · 200 = 600 gerechnet, dann kommt die 3 dazu. Es ist nicht 3 · (200 + 3).'
loesung: |
  Wir setzen n = 200 in 3n + 3 ein.
  ---
  3 · 200 + 3 = 603.
```

**Worum geht es in einem Satz?** Wir wollen sagen, **wie schnell** die Zahl der Schritte mit n wächst, und alles
weglassen, was dafür keine Rolle spielt. Diese Stelle ist für fast alle ungewohnt, weil man bewusst ungenau wird.
Lies sie langsam.

**Ein Bild aus dem Alltag.** Bei einem Umzug trägst du Kisten die Treppe hinauf. Ob ein Gang 4 oder 5 Minuten
dauert, hängt von deiner Kondition ab. Eines gilt aber immer: Doppelt so viele Kisten bedeuten doppelt so viele
Gänge. Das Wachstum „doppelt so viel Arbeit bei doppelt so vielen Kisten“ hängt nicht von deiner Kondition ab.
Genau dieses Wachstum hält die O-Notation fest.

:::beispiel[Welcher Teil zählt bei großem n?]
Zwei Zählfunktionen kennst du aus [17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen).
Die Summe eines Arrays braucht f(n) = 3n + 3 Schritte. Der Doppelt-Vergleich braucht g(n) = n(n − 1)/2 Vergleiche.
Wir setzen wachsende Werte für n ein.

|n|f(n) = 3n + 3|g(n) = n(n − 1)/2|
|---|---|---|
|10|33|45|
|100|303|4 950|
|1 000|3 003|499 500|
|1 000 000|3 000 003|499 999 500 000|

Drei Beobachtungen:

1. In f(n) spielt die **+ 3** bei großem n keine Rolle mehr. Bei n = 1 000 000 macht sie einen winzigen Bruchteil aus.
2. Ausmultipliziert ist g(n) = n²/2 − n/2. Bei n = 1000 ist n²/2 = 500 000 und n/2 nur 500. Der **größte Summand** bestimmt das Wachstum.
3. Wird n zehnmal so groß, wird f(n) etwa zehnmal so groß, g(n) aber etwa hundertmal so groß. Der Faktor 3 bei f und der Faktor 1/2 bei g ändern daran nichts.
:::

Daraus entstehen zwei Regeln, mit denen man aus einer Zählfunktion ihre **Größenordnung** gewinnt:

1. **Nur den am schnellsten wachsenden Summanden behalten.** Aus 3n + 3 wird 3n, aus n²/2 − n/2 wird n²/2.
2. **Konstante Faktoren weglassen.** Aus 3n wird n, aus n²/2 wird n².

Warum darf man Faktoren weglassen? Ein Faktor hängt davon ab, was man als eine Operation zählt und wie schnell der
Rechner ist. Beides ändert nichts daran, ob die Arbeit bei doppeltem n doppelt oder viermal so groß wird.

**So schreibt man das Ergebnis.** Aus 3n + 3 wird $O(n)$, gelesen „O von n“, aus n²/2 − n/2 wird $O(n^2)$. Das O
steht für „Ordnung“. Hängt die Zahl der Schritte gar nicht von n ab, schreibt man $O(1)$. $O(n)$ heißt: wächst
**höchstens** so schnell wie n. Darum nennt man es eine **obere Schranke**, und gefragt ist die **kleinste** passende.
Die genaue Definition folgt nach den nächsten zwei Aufgaben.

```aufgabe
id: ko-o-klasse-linear
titel: Die Größenordnung von 7n + 20
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine Methode führt für ein Array der Länge n genau 7n + 20 Operationen aus. Welche kleinste obere Schranke
  hat ihre Laufzeit?
teile:
  - typ: auswahl
    optionen: ['$O(1)$', '$O(n)$', '$O(n^2)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$O(1)$ hieße: Die Arbeit bleibt gleich, egal wie groß n ist. Hier wächst sie aber mit n, denn 7n wird mit n größer.'
      - wert: 2
        meldung: '$O(n^2)$ ist zwar auch eine obere Schranke, aber nicht die kleinste. Es kommt kein n² vor.'
hinweise:
  - Lass den konstanten Summanden 20 und den Faktor 7 weg.
loesung: |
  **Ansatz:** Größten Summanden behalten, Faktor weglassen.
  ---
  Von 7n + 20 bleibt 7n, ohne Faktor n. Die kleinste obere Schranke ist $O(n)$.
```

```aufgabe
id: ko-o-klasse-quadrat
titel: Die Größenordnung von 3n² + 100n + 5
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Welche kleinste obere Schranke hat f(n) = 3n² + 100n + 5?
teile:
  - typ: auswahl
    optionen: ['$O(n)$', '$O(n^2)$', '$O(n^3)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Summand 100n hat den großen Faktor 100, wächst aber langsamer als n². Ab n = 34 ist 3n² schon größer als 100n.'
      - wert: 2
        meldung: '$O(n^3)$ ist eine obere Schranke, aber nicht die kleinste. Die höchste Hochzahl ist 2.'
hinweise:
  - Vergleiche nicht die Faktoren, sondern die Hochzahlen (Exponenten) von n.
loesung: |
  **Ansatz:** Der Summand mit der höchsten Hochzahl (dem höchsten Exponenten) bestimmt das Wachstum.
  ---
  3n² wächst schneller als 100n und 5. Ohne den Faktor 3 bleibt n². Antwort: $O(n^2)$.
```

### Die genaue Definition

Die Regeln kann man präzise fassen. Die Vorlesung verwendet diese Definition.

:::definition[O-Notation]
Eine Funktion f(n) liegt **in O(g(n))**, wenn es zwei feste Zahlen gibt: einen Faktor c > 0 und eine Stelle n₀
(gelesen „n null“).
Für alle n ≥ n₀ muss dann f(n) ≤ c · g(n) gelten.

Man schreibt $f(n) \in O(g(n))$. Das Zeichen $\in$ liest man „ist Element von“. $O(g(n))$ ist nämlich die
**Menge** aller Funktionen, die ab einer Stelle unter c · g(n) bleiben. Gesprochen: „f liegt in Groß-O von g“.
:::

In Worten: **Ab einer gewissen Größe n₀ ist f nie größer als ein festes Vielfaches von g.** Die Zeichen bedeuten:

- f(n) ist die gezählte Laufzeit.
- g(n) ist eine einfache Vergleichsfunktion wie n oder n².
- c ist der erlaubte Faktor. Er darf nicht von n abhängen.
- n₀ ist die Stelle, ab der die Ungleichung gelten muss. Für kleinere n darf f ruhig größer sein.

:::beispiel[6n + 8 liegt in O(n)]
Wir suchen c und n₀ mit 6n + 8 ≤ c · n für alle n ≥ n₀.

1. **c wählen.** Mit c = 6 klappt es nie, denn 6n + 8 ist immer um 8 größer als 6n. Wir nehmen c = 7.
2. **Ungleichung umformen.** 6n + 8 ≤ 7n. Wir ziehen auf beiden Seiten 6n ab und erhalten 8 ≤ n.
3. **n₀ ablesen.** Die Ungleichung gilt genau für n ≥ 8. Also ist n₀ = 8.
4. **Probe mit einer Tabelle.**

|n|6n + 8|7n|gilt 6n + 8 ≤ 7n?|
|---|---|---|---|
|6|44|42|nein|
|7|50|49|nein|
|8|56|56|ja|
|9|62|63|ja|

Ab n = 8 liegt die Gerade 7n über 6n + 8 und bleibt dort, denn 7n wächst pro Schritt um 7, 6n + 8 nur um 6.
Andere Paare gehen auch. Mit c = 14 gilt die Ungleichung schon ab n₀ = 1, denn 6n + 8 ≤ 6n + 8n = 14n für n ≥ 1.
Die Definition verlangt nur, dass **irgendein** Paar existiert.

:::

```plot
x: [0, 14]
y: [0, 110]
achsen: { x: "n", y: "Schritte" }
graphen:
  - { f: "6*x + 8", label: "6n + 8", farbe: 0, von: 0, bis: 14 }
  - { f: "7*x", label: "7n", farbe: 1, von: 0, bis: 14 }
punkte:
  - { x: 8, y: 56, label: "n0 = 8" }
strecken:
  - { von: [8, 0], nach: [8, 56], gestrichelt: true }
beschriftung: Die Gerade 6n + 8 (blau) und die Gerade 7n (orange). Links von n0 = 8 liegt 6n + 8 höher, ab n0 = 8 liegt 7n darüber oder gleich auf.
```

**Was haben wir gezeigt?** Die gezählte Laufzeit 6n + 8 wächst höchstens so schnell wie n, bis auf den Faktor 7.
Für jedes Polynom gilt dasselbe Prinzip. Ein **Polynom** ist eine Summe von Potenzen von n mit festen Faktoren, etwa
4n³ + 2n² + 7. Die Hochzahl einer Potenz heißt **Exponent**. Für n ≥ 1 ist jede kleinere Potenz höchstens so groß wie die größte. Also gilt
4n³ + 2n² + 7 ≤ 4n³ + 2n³ + 7n³ = 13n³. Mit c = 13 und n₀ = 1 liegt das Polynom in O(n³). Allgemein liegt ein
Polynom vom höchsten Exponenten d in O(nᵈ).

**Ein Nicht-Beispiel:** n² liegt **nicht** in O(n). Sonst gäbe es ein c mit n² ≤ c · n für alle großen n. Teilt man
durch n, hieße das n ≤ c für alle großen n. Für n = c + 1 ist das falsch. Kein fester Faktor holt n² ein.

```aufgabe
id: ko-o-n0-finden
titel: Ab wann gilt die Ungleichung?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Für f(n) = 3n + 10 wählen wir c = 4. Was ist die **kleinste** ganze Zahl n₀, sodass 3n + 10 ≤ 4n für alle
  n ≥ n₀ gilt?
teile:
  - typ: zahl
    loesung: "10"
    toleranz: 0.1
    fehler:
      - wert: "9"
        meldung: 'Setze n = 9 ein: 3 · 9 + 10 = 37, aber 4 · 9 = 36. Die Ungleichung gilt bei 9 noch nicht.'
      - wert: "1"
        meldung: 'Bei n = 1 ist 3 + 10 = 13 größer als 4. Mit c = 4 muss man ein größeres n₀ wählen. n₀ = 1 klappt erst mit einem größeren c.'
hinweise:
  - Forme die Ungleichung 3n + 10 ≤ 4n nach n um.
  - Ziehe auf beiden Seiten 3n ab.
gefuehrt:
  - text: Ziehe auf beiden Seiten von 3n + 10 ≤ 4n den Term 3n ab. Welche Zahl steht dann links, wenn rechts nur noch n steht?
    teil: { typ: zahl, loesung: "10", toleranz: 0.1 }
    erklaerung: Aus 3n + 10 ≤ 4n wird 10 ≤ n.
  - text: Prüfe die Grenze. Was ergibt 3n + 10 für n = 10?
    teil: { typ: zahl, loesung: "3 * 10 + 10", toleranz: 0.1 }
    erklaerung: 40, und 4 · 10 = 40. Die Ungleichung gilt mit Gleichheit.
  - text: Was ergibt 3n + 10 für n = 9, und gilt die Ungleichung dort?
    teil: { typ: zahl, loesung: "3 * 9 + 10", toleranz: 0.1 }
    erklaerung: 37 ist größer als 4 · 9 = 36. Bei 9 gilt sie also noch nicht, n₀ = 10 ist die kleinste Stelle.
loesung: |
  **Ansatz:** Die Ungleichung nach n auflösen.
  ---
  3n + 10 ≤ 4n. Wir ziehen 3n ab und erhalten 10 ≤ n.
  ---
  Kleinstes n₀ ist 10. Probe: Bei n = 10 steht 40 ≤ 40, bei n = 9 steht 37 ≤ 36, das ist falsch.
```

```aufgabe
id: ko-o-dominanz
titel: Wann überholt n² den Summanden 40n?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Laufzeit einer Methode ist f(n) = n² + 40n. Ab welchem n ist der Summand n² **mindestens so groß** wie der
  Summand 40n?
teile:
  - typ: zahl
    loesung: "40"
    toleranz: 0.1
    fehler:
      - wert: "20"
        meldung: 'Setze n = 20 ein: n² = 400, aber 40n = 800. Der quadratische Summand ist dort noch kleiner.'
      - wert: "1600"
        meldung: '1600 ist der Wert von n² an der gesuchten Stelle, nicht die Stelle selbst.'
hinweise:
  - Löse die Ungleichung n² ≥ 40n für positive n.
  - Teile beide Seiten durch n. Das darf man, weil n positiv ist.
loesung: |
  **Ansatz:** n² ≥ 40n lösen.
  ---
  Für n > 0 teilen wir durch n und erhalten n ≥ 40.
  ---
  Ab n = 40 ist n² mindestens so groß wie 40n. Probe: 40² = 1600 = 40 · 40. Für noch größere n überwiegt n² immer stärker. Deshalb liegt f in $O(n^2)$, obwohl 40n für kleine n mehr beiträgt.
```

### Kleinste obere Schranke und zwei Rechenregeln

Die Definition erlaubt sehr großzügige Schranken. 3n + 3 liegt in O(n), aber auch in O(n²) und sogar in O(n¹⁰).
Jede dieser Aussagen ist wahr. Die Vorlesung sagt aber: Wähle die **kleinste obere Schranke**. Gemeint ist die am
langsamsten wachsende der üblichen Vergleichsfunktionen 1, n, n², n³ und so weiter, die noch eine obere Schranke ist.
Die vollständige Liste steht in
[17.6 Typische Komplexitätsklassen und ihr Wachstum](/lernen/ep1/komplexitaet/typische-komplexitaetsklassen-und-ihr-wachstum).
Nur die kleinste Schranke hilft bei der Wahl zwischen zwei Algorithmen. Genau so ist auch das Quiz gemeint. Der Kommentar „Die Laufzeit liegt in O(n²)“
zu einer Schleife mit Laufzeit 3n + 3 gilt dort als **falsch**, weil O(n) die kleinste Schranke ist.

Für zusammengesetzte Programme gibt es zwei Regeln:

- **Hintereinander (Addition):** Läuft zuerst ein Teil mit O(f(n)) und danach ein Teil mit O(g(n)), liegt das Ganze in O(f(n) + g(n)). Davon bleibt der größere Summand. Eine Schleife mit n Durchläufen und danach eine mit n · n Durchläufen ergibt O(n + n²) = O(n²).
- **Verschachtelt (Multiplikation):** Läuft ein Teil mit O(g(n)) in jedem der O(f(n)) Durchläufe eines anderen, liegt das Ganze in O(f(n) · g(n)). Zwei verschachtelte Schleifen mit je n Durchläufen ergeben O(n · n) = O(n²).

```aufgabe
id: ko-o-aussagen-rf
titel: Welche Schranken stimmen?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen im Sinn der Definition (nicht nur der kleinsten Schranke).
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$n^2 \in O(n^3)$'
        richtig: true
        erklaerung: 'Für n ≥ 1 gilt n² ≤ n³. Mit c = 1 und n₀ = 1 ist die Definition erfüllt. Es ist eine wahre, aber nicht die kleinste Schranke.'
      - text: '$n^3 \in O(n^2)$'
        richtig: false
        erklaerung: 'Aus n³ ≤ c · n² würde n ≤ c für alle großen n folgen. Für n = c + 1 ist das falsch.'
      - text: '$500n \in O(n)$'
        richtig: true
        erklaerung: 'Mit c = 500 und n₀ = 1 gilt 500n ≤ 500n. Konstante Faktoren ändern die Klasse nicht.'
      - text: '$n^2 + n \in O(n)$'
        richtig: false
        erklaerung: 'Der größte Summand ist n². Er wächst schneller als jedes c · n.'
    fehler:
      - wert: [f, f, r, f]
        meldung: 'Die erste Aussage stimmt. O(g) ist eine **obere** Schranke. Eine langsamer wachsende Funktion liegt immer auch in einer schneller wachsenden Klasse.'
      - wert: [r, f, f, f]
        meldung: 'Die dritte Aussage stimmt. Ein fester Faktor wie 500 ist genau das c aus der Definition.'
hinweise:
  - 'Frage bei jeder Aussage: Gibt es ein festes c, sodass die linke Seite ab einer Stelle höchstens c-mal die Funktion in der Klammer ist?'
  - Eine langsamer wachsende Funktion liegt in jeder schneller wachsenden Klasse. Umgekehrt nie.
loesung: |
  **Ansatz:** Für jede Aussage prüfen, ob ein festes c und ein n₀ existieren.
  ---
  n² ≤ 1 · n³ für n ≥ 1, also stimmt Aussage 1. 500n ≤ 500 · n, also stimmt Aussage 3.
  ---
  n³ und n² + n wachsen schneller als jedes Vielfache der Klammerfunktion. Aussagen 2 und 4 sind falsch.
```

Eine Schreibweise solltest du kennen. Statt $f(n) \in O(g(n))$ schreibt man oft kurz f(n) = O(g(n)). Das ist **keine
Gleichung**. Aus n = O(n²) und n² = O(n²) folgt nicht n = n².

**Vertiefung.** Die Vorlesung nennt noch zwei verwandte Zeichen. **Ω** (Omega) ist eine **untere** Schranke: Ab n₀
gilt f(n) ≥ c · g(n). **Θ** (Theta) ist eine **scharfe** Schranke: f liegt zugleich in O(g) und in Ω(g). In den
bekannten TUWEL-Tests 2021 bis 2023 kam nur die O-Notation vor.

:::achtung[O(n/2) ist nicht besser als O(n)]
Methode A braucht n/2 Vergleiche, Methode B braucht n. Ein Student schreibt: „A liegt in O(n/2), also in einer
kleineren Klasse als B.“ Das ist falsch. Der Faktor 1/2 fällt weg, beide liegen in O(n). A ist zwar etwa doppelt so
schnell, aber beide verhalten sich gleich: Bei doppeltem n brauchen beide doppelt so lange. Die O-Klasse vergleicht
das Wachstum, nicht den konstanten Faktor. Im Quiz ist „O(n)“ für eine Schleife bis `n / 2` deshalb richtig.
:::

:::achtung[Den ersten statt den größten Summanden behalten]
Für f(n) = 5n + n²/100 schreibt eine Studentin „O(n)“, weil der erste Summand 5n ist und der zweite durch 100
geteilt wird. Rechne nach. Bei n = 1000 ist 5n = 5000, aber n²/100 = 10 000. Bei n = 1 000 000 ist 5n = 5 Millionen,
aber n²/100 = 10 Milliarden. Der Faktor 1/100 verzögert das Überholen nur. Richtig ist $O(n^2)$, denn entscheidend
ist der Summand mit dem höchsten Exponenten, egal wo er steht und welchen Faktor er hat.
:::


```aufgabe
id: ko-o-beweis-text
titel: Eine Schranke beweisen
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Zeige mit der Definition, dass f(n) = 5n² + 3n + 2 in O(n²) liegt. Gib c und n₀ ausdrücklich an und begründe jede
  Ungleichung in einem Satz.
teile:
  - typ: text
    muster: |
      Für n ≥ 1 gilt n ≤ n² und 1 ≤ n². Deshalb ist 3n ≤ 3n² und 2 ≤ 2n². Daraus folgt
      5n² + 3n + 2 ≤ 5n² + 3n² + 2n² = 10n². Mit c = 10 und n₀ = 1 gilt also f(n) ≤ c · n² für alle n ≥ n₀. Das ist
      genau die Definition von f(n) ∈ O(n²). Andere Paare sind auch richtig, etwa c = 6 mit n₀ = 4.
hinweise:
  - Schätze jeden Summanden nach oben durch ein Vielfaches von n² ab. Für n ≥ 1 ist n ≤ n².
  - Addiere die Faktoren 5, 3 und 2. Das ergibt ein passendes c, und n₀ = 1 genügt.
loesung: |
  **Ansatz:** Jeden Summanden durch ein Vielfaches von n² nach oben abschätzen, dann die Faktoren addieren.
  ---
  Für n ≥ 1 gilt n ≤ n², also 3n ≤ 3n². Ebenso gilt 1 ≤ n², also 2 ≤ 2n².
  ---
  Zusammen: 5n² + 3n + 2 ≤ 5n² + 3n² + 2n² = 10n² für alle n ≥ 1.
  ---
  Mit c = 10 und n₀ = 1 ist die Definition erfüllt. Probe bei n = 1: f(1) = 10 ≤ 10. Bei n = 4: f(4) = 94 ≤ 160.
```

```aufgabe
id: ko-o-exponential-rf
titel: Schranken für Zweierpotenzen
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Beurteile die Aussagen. $2^n$ ist 2 hoch n, also n-mal die 2 multipliziert.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$2^{n+1} \in O(2^n)$'
        richtig: true
        erklaerung: '$2^{n+1} = 2 \cdot 2^n$. Mit c = 2 und n₀ = 1 ist die Definition erfüllt. Es ist nur ein konstanter Faktor.'
      - text: '$2^{2n} \in O(2^n)$'
        richtig: false
        erklaerung: '$2^{2n} = 2^n \cdot 2^n$. Der Faktor $2^n$ ist nicht konstant, er wächst mit n über jedes feste c hinaus.'
      - text: '$\frac{n(n+1)}{2} \in O(n^2)$'
        richtig: true
        erklaerung: 'Ausmultipliziert ist das n²/2 + n/2. Der größte Summand ist n²/2, ohne Faktor n².'
      - text: 'Eine Methode, die für jedes n genau 1 000 000 Schritte macht, liegt in $O(1)$.'
        richtig: true
        erklaerung: 'Die Zahl hängt nicht von n ab. Mit c = 1 000 000 gilt f(n) ≤ c · 1. Groß ist nicht dasselbe wie wachsend.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Schreib $2^{2n}$ als Produkt zweier Faktoren. Ist der zusätzliche Faktor eine feste Zahl?'
      - wert: [r, f, r, f]
        meldung: 'O(1) heißt „wächst nicht mit n“, nicht „ist klein“. Eine Million ist eine feste Zahl, also ein zulässiges c.'
hinweise:
  - 'Potenzgesetz: $2^{a+b} = 2^a \cdot 2^b$. Prüfe, ob der Unterschied zwischen links und $2^n$ ein fester Faktor ist.'
  - Eine Schranke liegt nur vor, wenn das c nicht von n abhängt.
loesung: |
  **Ansatz:** Jede linke Seite als festes Vielfaches der Klammerfunktion schreiben, wenn das geht.
  ---
  $2^{n+1} = 2 \cdot 2^n$: fester Faktor 2, Aussage 1 stimmt. $2^{2n} = 2^n \cdot 2^n$: Der Faktor wächst mit n, Aussage 2 ist falsch.
  ---
  n(n + 1)/2 = n²/2 + n/2 liegt in O(n²), Aussage 3 stimmt. Eine feste Million Schritte liegt in O(1), Aussage 4 stimmt.
```

```reflexion
frage: Die O-Notation lässt Faktoren weg. Methode A braucht 2n Schritte, Methode B braucht 50n. Beide liegen in O(n). Ist die O-Notation damit nutzlos für die Frage, welche schneller ist?
antwort: |
  Für die Frage „Welche ist bei diesem n schneller?“ reicht sie nicht. Hier ist A immer 25-mal schneller. Die
  O-Notation beantwortet eine andere Frage: Wie wächst die Arbeit, wenn n größer wird? Beide verdoppeln ihre Arbeit bei
  doppeltem n. Gegen eine Methode C mit n² Schritten verlieren beide nur bei kleinen n. Ab n = 50 ist C nicht mehr
  schneller als B, und danach wird der Abstand immer größer. Deshalb vergleicht man zuerst die O-Klasse. Erst bei
  gleicher Klasse lohnt sich ein Blick auf die Faktoren.
```


## Von der Schleife zur O-Klasse

```aufgabe
id: ko-sch-check-sterne
titel: Innen in Zweierschritten
niveau: 1
art: check
angabe: |
  Wie oft wird `x++` ausgeführt?
  ```java
  for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 4; j += 2) {
          x++;
      }
  }
  ```
  (Wiederholung: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen))
teile:
  - typ: zahl
    loesung: "4 * 2"
    toleranz: 0.1
    fehler:
      - wert: "16"
        meldung: 'Die innere Schleife springt mit `j += 2`. Sie läuft nur für `j = 0` und `j = 2`, also zweimal.'
loesung: |
  Außen 4 Durchläufe. Innen nimmt `j` die Werte 0 und 2 an, also 2 Durchläufe.
  ---
  Feste Grenzen, also 4 · 2 = 8.
```

Im Quiz bekommst du Code-Stücke und sollst die **kleinste obere Schranke** der Laufzeit in Abhängigkeit von n
angeben. Fast immer sind es Schleifen. Das Verfahren ist immer dasselbe: Für jede Schleife bestimmst du, **wie oft
sie in Abhängigkeit von n läuft**. Danach setzt du die Teile mit den Regeln aus
[17.4 Die O-Notation](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt) zusammen: verschachtelt
multiplizieren, hintereinander addieren, Konstanten weglassen.

Die Schwierigkeit liegt in den Details: Eine Grenze ist eine Konstante, eine Schrittweite hängt von n ab, eine
Variable wird nicht zurückgesetzt. Die folgenden Beispiele zeigen jeden dieser Fälle einzeln. In jedem steht
`sum += i + j;` als innerste Anweisung, wie im Quiz. Wir zählen, wie oft sie läuft.

:::beispiel[Grenzen und Schrittweiten, die nicht von n abhängen]
**Fall A: alle Grenzen fest.**

```java
for (int i = 0; i < 25; i++) {
    for (int j = 0; j < 25; j++) {
        sum += i + j;
    }
}
```

Es sind immer 25 · 25 = 625 Ausführungen, egal wie groß n ist. n kommt gar nicht vor. Eine feste Zahl, auch wenn
sie groß ist, liegt in **O(1)**. Das heißt **konstant**: Die Laufzeit hängt nicht von n ab.

**Fall B: innere Grenze fest.**

```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < 8; j++) {
        sum += i + j;
    }
}
```

Außen n Durchläufe, innen immer 8. Zusammen 8n Ausführungen, also **O(n)**. Verschachtelt heißt also nicht
automatisch O(n²). Eine feste Grenze trägt nur einen konstanten Faktor bei.

**Fall C: äußere Grenze n · n.**

```java
for (int i = 0; i < n * n; i++) {
    for (int j = 0; j < 10; j++) {
        sum += i + j;
    }
}
```

Die äußere Schleife läuft n²-mal, die innere 10-mal. Zusammen 10n², also **O(n²)**. Eine einzelne Schleife kann
also quadratisch sein, wenn ihre Grenze quadratisch ist.
:::

```aufgabe
id: ko-sch-schritt-fuenf
titel: Eine Schleife in Fünferschritten
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche kleinste obere Schranke hat die Laufzeit in Abhängigkeit von n?
  ```java
  int sum = 0;
  for (int i = 0; i < n; i += 5) {
      sum += i;
  }
  ```
teile:
  - typ: auswahl
    optionen: ['$O(1)$', '$O(n)$', '$O(n^2)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Schleife läuft etwa n/5-mal. Das wächst mit n. Bei doppeltem n sind es doppelt so viele Durchläufe.'
      - wert: 2
        meldung: 'Es gibt nur eine Schleife, und sie läuft etwa n/5-mal. Für n² bräuchte man n Durchläufe, die jeweils wieder n-mal etwas tun.'
hinweise:
  - Wie viele Durchläufe sind es für n = 100 und für n = 200?
loesung: |
  **Ansatz:** Durchläufe in Abhängigkeit von n zählen.
  ---
  `i` nimmt 0, 5, 10, … an, das sind etwa n/5 Werte. Für n = 100 sind es 20, für n = 200 sind es 40.
  ---
  n/5 ohne den Faktor 1/5 ergibt $O(n)$.
```

```aufgabe
id: ko-sch-innen-fest
titel: Rückwärts mit fester innerer Schleife
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche kleinste obere Schranke hat die Laufzeit in Abhängigkeit von n?
  ```java
  for (int i = n; i > 0; i--) {
      for (int j = 0; j < 7; j++) {
          sum += i + j;
      }
  }
  ```
teile:
  - typ: auswahl
    optionen: ['$O(1)$', '$O(n)$', '$O(n^2)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die äußere Schleife läuft von n abwärts bis 1. Das sind n Durchläufe, also wächst die Arbeit mit n.'
      - wert: 2
        meldung: 'Verschachtelt heißt nicht automatisch n². Die innere Schleife läuft immer genau 7-mal, unabhängig von n.'
hinweise:
  - Zähle beide Schleifen getrennt. Welche hängt von n ab?
loesung: |
  **Ansatz:** Außen n Durchläufe (rückwärts zählt genauso), innen 7.
  ---
  Zusammen 7n Ausführungen.
  ---
  Ohne den Faktor 7 bleibt $O(n)$.
```

### Schrittweiten, die von n abhängen

Jetzt wird es heikel. Im Quiz kommen Schleifen wie `j += n / 2` vor. Hier hängt nicht die Grenze, sondern die
**Schrittweite** von n ab. Ist n groß, macht `j` riesige Sprünge.

:::beispiel[Die Schrittweite n / 3]
Vorbedingung: n ≥ 3.

```java
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j += n / 3) {
        sum += i + j;
    }
}
```

Wir zählen die innere Schleife für einige n. `n / 3` ist Ganzzahldivision.

|n|Schrittweite `n / 3`|Werte von `j`|innere Durchläufe|
|---|---|---|---|
|9|3|0, 3, 6|3|
|10|3|0, 3, 6, 9|4|
|30|10|0, 10, 20|3|
|1000|333|0, 333, 666, 999|4|

Ab n = 6 läuft die innere Schleife immer nur 3- oder 4-mal, egal wie groß n wird. Für kleine n sind es durch die
Rundung bei der Ganzzahldivision bis zu 5 Durchläufe (bei n = 5 ist die Schrittweite 1). Mehr werden es nie. Die innere Schleife
ist also **konstant**, O(1). Zusammen mit den n äußeren Durchläufen ergibt das **O(n)**.
:::

Das Gegenteil passiert, wenn die Schrittweite multipliziert wird. Dann wächst `j` immer schneller.

:::beispiel[Verdreifachen: j *= 3]
```java
for (int i = 0; i < n; i++) {
    int j = 1;
    while (j < n) {
        sum += i + j;
        j *= 3;
    }
}
```

`j *= 3` ist die Kurzform von `j = j * 3`. Die innere Schleife beginnt bei 1 und verdreifacht `j` in jedem Durchlauf.
Für n = 100 nimmt `j` die Werte 1, 3, 9, 27, 81 an. Bei 243 ist `j < 100` falsch. Das sind 5 Durchläufe.

Die Frage lautet also: **Wie oft muss man mit 3 multiplizieren, bis man n erreicht?** Die Antwort heißt
**Logarithmus** zur Basis 3, geschrieben log₃ n. Es gilt log₃ 81 = 4, weil 3 · 3 · 3 · 3 = 81. Allgemein ist
logₐ n die Hochzahl, mit der man a potenzieren muss, um n zu erhalten. Ist n keine Potenz von 3, ist log₃ n keine
ganze Zahl. Die Zahl der Durchläufe ist dann log₃ n aufgerundet: log₃ 100 ≈ 4,2, also 5 Durchläufe.

|n|Werte von `j` unter n|innere Durchläufe|
|---|---|---|
|30|1, 3, 9, 27|4|
|100|1, 3, 9, 27, 81|5|
|1000|1, 3, …, 729|7|

Bei n = 1000 sind es nur 7 Durchläufe. Die innere Schleife liegt in **O(log n)**. Die Basis 3 lässt man weg, warum,
zeigt [17.6 Typische Komplexitätsklassen und ihr Wachstum](/lernen/ep1/komplexitaet/typische-komplexitaetsklassen-und-ihr-wachstum).
Mit den n äußeren Durchläufen ergibt sich n · log n, geschrieben **O(n log n)** und gelesen „n mal log n“. Dasselbe gilt für das Halbieren, etwa `j /= 2` ab `j = n`.
:::

```aufgabe
id: ko-sch-trace-verdoppeln
titel: Wie oft verdoppelt j?
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Fülle die Tabelle für `n = 50` aus. Jede Zeile ist ein Durchlauf des Rumpfs. Gib dann an, wie oft der Rumpf
  läuft.
  ```java
  int j = 1;
  while (j < n) {
      sum += j;
      j *= 2;
  }
  ```
teile:
  - typ: trace
    spalten: [Durchlauf, j zu Beginn des Durchlaufs]
    loesung: [[1, 1], [2, 2], [3, 4], [4, 8], [5, 16], [6, 32]]
    vorgabe: 1
  - typ: zahl
    label: Anzahl der Durchläufe für n = 50
    loesung: "6"
    toleranz: 0.1
    fehler:
      - wert: "7"
        meldung: 'Nach dem sechsten Durchlauf ist `j = 64`. Dann ist `64 < 50` falsch, und es gibt keinen siebten Durchlauf.'
      - wert: "25"
        meldung: 'Das wäre die Zahl bei `j += 2`. Hier wird `j` aber verdoppelt, nicht um 2 erhöht.'
hinweise:
  - Verdopple `j` ab 1 und prüfe jedes Mal `j < 50`.
  - Der Rumpf läuft für jeden Wert von `j`, der kleiner als 50 ist.
loesung: |
  **Ansatz:** `j` verdoppelt sich: 1, 2, 4, 8, 16, 32, 64.
  ---
  Die Werte 1 bis 32 sind kleiner als 50, das sind 6 Durchläufe. Bei 64 endet die Schleife.
  ---
  6 ist log₂ 50 aufgerundet, denn 2⁵ = 32 < 50 ≤ 64 = 2⁶. Die Laufzeit liegt in $O(\log n)$.
```

```aufgabe
id: ko-sch-n-log-n
titel: Außen linear, innen logarithmisch
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie oft wird `sum++` für `n = 16` insgesamt ausgeführt?
  ```java
  for (int i = 0; i < n; i++) {
      int j = 1;
      while (j < n) {
          sum++;
          j *= 2;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "16 * 4"
    toleranz: 0.1
    fehler:
      - wert: "80"
        meldung: 'Bei `j = 16` ist `16 < 16` falsch. Die innere Schleife läuft für 1, 2, 4 und 8, also 4-mal, nicht 5-mal.'
      - wert: "256"
        meldung: 'Die innere Schleife läuft nicht n-mal. `j` wird verdoppelt und erreicht 16 schon nach wenigen Schritten.'
hinweise:
  - Bestimme zuerst, wie oft die innere Schleife für n = 16 läuft. Sie hängt nicht von `i` ab.
  - Danach mit der Zahl der äußeren Durchläufe multiplizieren.
gefuehrt:
  - text: Welche Werte nimmt `j` in der inneren Schleife an, bevor die Bedingung `j < 16` falsch wird? Wie viele sind es?
    teil: { typ: zahl, loesung: "4", toleranz: 0.1 }
    erklaerung: 1, 2, 4 und 8. Bei 16 ist die Bedingung falsch. Also 4 Durchläufe, das ist log₂ 16.
  - text: Hängt die Zahl der inneren Durchläufe von `i` ab?
    teil:
      typ: auswahl
      optionen: ['Nein, sie ist für jedes i gleich.', 'Ja, sie wächst mit i.']
      richtig: [0]
    erklaerung: '`j` beginnt bei jedem äußeren Durchlauf wieder bei 1, und `i` kommt in der inneren Schleife nicht vor.'
  - text: Wie oft läuft `sum++` insgesamt?
    teil: { typ: zahl, loesung: "64", toleranz: 0.1 }
    erklaerung: 16 äußere Durchläufe mal 4 innere ergibt 64.
  - text: Welche O-Klasse hat das Ganze?
    teil:
      typ: auswahl
      optionen: ['$O(n \log n)$', '$O(n^2)$', '$O(\log n)$']
      richtig: [0]
    erklaerung: 'n Durchläufe außen, log₂ n innen. Verschachtelt heißt multiplizieren: $O(n \log n)$.'
loesung: |
  **Ansatz:** Innere Schleife für n = 16 zählen, dann mit den äußeren Durchläufen multiplizieren.
  ---
  Innen: `j` = 1, 2, 4, 8, also 4 Durchläufe (log₂ 16 = 4). Bei jedem äußeren Durchlauf beginnt `j` wieder bei 1.
  ---
  Außen 16 Durchläufe. Zusammen 16 · 4 = 64. Allgemein n · log₂ n, also $O(n \log n)$.
```

:::achtung[Viererschritte sind kein Logarithmus]
Eine Studentin beurteilt diesen Kommentar als richtig:

```java
// Die Laufzeit liegt in O(n log n)
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n / 4; j += 4) {
        sum += i + j;
    }
}
```

Ihre Begründung: Die Grenze wird geteilt und `j` springt, also wird es logarithmisch. Zähle für n = 64 nach. Die
Grenze ist 64 / 4 = 16, und `j` nimmt 0, 4, 8, 12 an. Das sind 4 Durchläufe, also n/16. Für n = 128 sind es 8. Die
innere Schleife wächst **linear**, nur mit dem kleinen Faktor 1/16. Zusammen sind es n · n/16 = n²/16 Ausführungen,
also O(n²). Der Kommentar ist **falsch**. Logarithmisch wird eine Schleife, wenn die Variable **multipliziert**
oder **geteilt** wird. Eine Grenze wie n / 4 oder eine Schrittweite wie 4 ändert nur den Faktor.
:::

:::achtung[Schrittweite 0: die Endlosschleife bei kleinem n]
Im Beispiel „Die Schrittweite n / 3“ steht die Vorbedingung n ≥ 3. Warum? Für n = 2 ist `n / 3` gleich 0, denn die
Ganzzahldivision rundet ab. Dann bewirkt `j += n / 3` gar nichts. `j` bleibt 0, `0 < 2` bleibt wahr, und die Schleife
läuft endlos. Wer im Quiz eine Schleife mit `j += n / 2` sieht, sollte deshalb kurz an n = 1 denken. Für die O-Klasse
zählt aber das Verhalten bei großem n. Dort läuft die innere Schleife konstant oft, und das ganze Stück mit der
äußeren Schleife bis n liegt in O(n).
:::

```aufgabe
id: ko-sch-einfach-rf
titel: Vier kurze Stücke
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Jeder Kommentar soll die kleinste obere Schranke der Laufzeit in Abhängigkeit von n angeben. Beurteile die
  Kommentare.

  **A**
  ```java
  // Die Laufzeit liegt in O(n)
  for (int i = 0; i < n / 2; i++) { sum += i; }
  ```
  **B**
  ```java
  // Die Laufzeit liegt in O(n^2)
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
          for (int k = 0; k < 5; k++) { sum += k; }
      }
  }
  ```
  **C**
  ```java
  // Die Laufzeit liegt in O(n^2)
  int x = n * n;
  ```
  **D**
  ```java
  // Die Laufzeit liegt in O(n^2)
  for (int i = 0; i < n; i++) { sum += i; }
  for (int j = 0; j < n; j++) { sum += j; }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der Kommentar zu A ist richtig.'
        richtig: true
        erklaerung: 'n/2 Durchläufe. Ohne den Faktor 1/2 bleibt O(n).'
      - text: 'Der Kommentar zu B ist richtig.'
        richtig: true
        erklaerung: 'n · n · 5 = 5n². Die innerste Schleife ist konstant, also O(n²).'
      - text: 'Der Kommentar zu C ist richtig.'
        richtig: false
        erklaerung: 'Hier gibt es keine Schleife. Eine Multiplikation ist eine einzige Operation, egal wie groß das Ergebnis ist. O(1).'
      - text: 'Der Kommentar zu D ist richtig.'
        richtig: false
        erklaerung: 'Die Schleifen stehen hintereinander, nicht ineinander. n + n = 2n, also O(n).'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Bei C kommt `n * n` vor, aber das ist nur ein Wert, keine Anzahl von Durchläufen. Und bei D: Stehen die Schleifen ineinander oder hintereinander?'
      - wert: [r, f, f, f]
        meldung: 'Bei B läuft die innerste Schleife immer genau 5-mal. Ein konstanter Faktor ändert die Klasse nicht.'
hinweise:
  - Zähle Durchläufe, nicht die Größe von Werten.
  - Verschachtelt wird multipliziert, hintereinander addiert.
loesung: |
  **Ansatz:** Für jedes Stück die Durchläufe in Abhängigkeit von n zählen und vereinfachen.
  ---
  A: n/2, also O(n), richtig. B: 5n², also O(n²), richtig.
  ---
  C: eine einzige Rechnung, O(1), falsch. D: 2n, O(n), falsch.
```

### while-Schleifen ohne Zurücksetzen

Bei `for`-Schleifen beginnt die innere Laufvariable automatisch bei jedem äußeren Durchlauf neu, denn
`int j = 0` steht im Schleifenkopf. Bei `while`-Schleifen ist das anders. Die Variable steht vor der Schleife, und
**nur wenn eine Zeile sie zurücksetzt**, beginnt sie wieder von vorne. Genau damit spielen die Quizfragen des
Jahres 2023.

:::beispiel[Mit und ohne j = 0]
**Version 1 ohne Zurücksetzen:**

```java
int rest = n;
int j = 0;
while (rest > 0) {
    rest--;
    while (j < n) {
        j++;
        sum += j;
    }
}
```

Die äußere Schleife zählt `rest` von n auf 0 herunter, läuft also n-mal. Im ersten äußeren Durchlauf läuft die innere
Schleife, bis `j = n` ist. Das sind n Durchläufe. Im zweiten äußeren Durchlauf ist `j` immer noch n, also ist `j < n`
sofort falsch. Die innere Schleife läuft kein einziges Mal mehr. Für n = 4 sind es 4 + 0 + 0 + 0 = 4 Ausführungen.
Zusammen n innere plus n äußere Durchläufe, also **O(n)**.

**Version 2 mit Zurücksetzen:** Dieselben Zeilen, aber nach der inneren Schleife steht `j = 0;`. Jetzt läuft die
innere Schleife in jedem äußeren Durchlauf n-mal. Für n = 4 sind es 4 · 4 = 16 Ausführungen, allgemein n², also
**O(n²)**.
:::

:::merke[Von der Schleife zur O-Klasse]
1. Für jede Schleife bestimmen: Wie oft läuft sie **in Abhängigkeit von n**? Mit einem kleinen n konkret nachzählen.
2. Feste Grenze und feste Schrittweite: konstant, O(1). Auch 1 000 000 ist eine Konstante.
3. Grenze n und Schrittweite fest (`i++`, `i += 5`) oder Grenze n / 4: linear, O(n). Grenze n · n: O(n²).
4. Schrittweite, die von n abhängt (`j += n / 3`): konstant viele Durchläufe, O(1).
5. Multiplizieren oder Teilen der Laufvariable (`j *= 2`, `j /= 2`): logarithmisch, O(log n).
6. Verschachtelt multiplizieren, hintereinander addieren, dann nur den größten Teil behalten.
7. Bei `while`: Wird die innere Variable zurückgesetzt? Wenn nicht, läuft die innere Schleife insgesamt nur einmal durch.
:::

```aufgabe
id: ko-sch-reset-zaehlen
titel: Mit und ohne Zurücksetzen zählen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie oft wird `sum++` für `n = 5` ausgeführt?

  **Version 1**
  ```java
  int j = 0;
  for (int i = 0; i < n; i++) {
      while (j < n) {
          j++;
          sum++;
      }
  }
  ```
  **Version 2** ist gleich, aber nach der inneren Schleife (noch im Rumpf der `for`-Schleife) steht zusätzlich `j = 0;`.
teile:
  - typ: zahl
    label: Version 1
    loesung: "5"
    toleranz: 0.1
    fehler:
      - wert: "25"
        meldung: 'In Version 1 wird `j` nie zurückgesetzt. Nach dem ersten äußeren Durchlauf ist `j = 5`, und die innere Schleife läuft nie wieder.'
  - typ: zahl
    label: Version 2
    loesung: "5 * 5"
    toleranz: 0.1
    fehler:
      - wert: "5"
        meldung: 'In Version 2 setzt `j = 0;` die innere Variable nach jedem äußeren Durchlauf zurück. Die innere Schleife läuft also jedes Mal ganz.'
hinweise:
  - Verfolge `j` über alle fünf äußeren Durchläufe. Welchen Wert hat `j` am Beginn des zweiten äußeren Durchlaufs?
  - In Version 2 beginnt die innere Schleife jedes Mal bei 0.
loesung: |
  **Ansatz:** Für jede Version verfolgen, mit welchem Wert von `j` die innere Schleife startet.
  ---
  Version 1: Im ersten äußeren Durchlauf läuft die innere Schleife 5-mal, danach ist `j = 5` und bleibt so. Insgesamt 5.
  ---
  Version 2: Nach jedem äußeren Durchlauf ist `j` wieder 0. Jedes Mal 5 innere Durchläufe, insgesamt 5 · 5 = 25.
```

```aufgabe
id: ko-sch-quiz-rf
titel: "Quiz-Stil: vier Kommentare"
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: TUWEL-Test 2 WS2021 vom 20.01.2022 und Vorbereitungstest, Frage 6 (nachgebaut, andere Grenzen und Schrittweiten)
angabe: |
  Über jedem Stück behauptet ein Kommentar, in welcher O-Klasse die Laufzeit liegt (gemeint ist die kleinste obere
  Schranke, abhängig von n). `n^2` im Kommentar bedeutet $n^2$. Bei A gilt n ≥ 4. Stimmt der jeweilige Kommentar?

  **A**
  ```java
  // Die Laufzeit liegt in O(n)
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j += n / 4) { sum += i + j; }
  }
  ```
  **B**
  ```java
  // Die Laufzeit liegt in O(n)
  for (int i = 0; i < n; i++) {
      for (int j = 0; j < n / 3; j += 6) { sum += i + j; }
  }
  ```
  **C**
  ```java
  // Die Laufzeit liegt in O(1)
  for (int i = 0; i < 50; i++) {
      for (int j = 0; j < i; j++) { sum += i + j; }
  }
  ```
  **D**
  ```java
  // Die Laufzeit liegt in O(n^2)
  for (int i = 0; i < n * n * n; i++) {
      for (int j = 0; j < 3; j++) { sum += i + j; }
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der Kommentar zu A ist richtig.'
        richtig: true
        erklaerung: 'Die Schrittweite n/4 lässt die innere Schleife höchstens 7-mal laufen (bei n = 7), für große n 4- oder 5-mal. Innen konstant, außen n: O(n).'
      - text: 'Der Kommentar zu B ist richtig.'
        richtig: false
        erklaerung: 'Innen etwa (n/3)/6 = n/18 Durchläufe. Das wächst mit n. Zusammen n · n/18, also O(n²).'
      - text: 'Der Kommentar zu C ist richtig.'
        richtig: true
        erklaerung: 'n kommt nicht vor. Es sind immer 0 + 1 + … + 49 = 1225 Ausführungen, eine Konstante.'
      - text: 'Der Kommentar zu D ist richtig.'
        richtig: false
        erklaerung: 'Die äußere Schleife läuft n³-mal, die innere 3-mal. Das ergibt 3n³, also O(n³).'
    fehler:
      - wert: [f, f, r, f]
        meldung: 'Zähle bei A die innere Schleife für n = 100: Schrittweite 25, Werte 0, 25, 50, 75. Wächst diese Zahl mit n?'
      - wert: [r, r, r, f]
        meldung: 'Bei B springt `j` zwar in Sechserschritten, aber bis n/3. Das sind n/18 Durchläufe, und die wachsen mit n.'
hinweise:
  - Zähle jede innere Schleife für zwei Werte von n, etwa n = 60 und n = 120. Verdoppelt sich die Zahl, ist sie linear. Bleibt sie gleich, ist sie konstant.
  - Bei C und D zuerst nachsehen, ob und wie n in den Grenzen vorkommt.
loesung: |
  **Ansatz:** Für jedes Stück die Durchläufe beider Schleifen in Abhängigkeit von n bestimmen.
  ---
  A: Schrittweite n/4, also innen höchstens 7 und bei großem n 4 oder 5 Durchläufe (4, wenn n durch 4 teilbar ist). Konstant mal n ergibt O(n): richtig. B: innen n/18, zusammen n²/18, also O(n²): falsch.
  ---
  C: keine Abhängigkeit von n, 1225 Ausführungen, O(1): richtig. D: 3n³, also O(n³): falsch.
```

```aufgabe
id: ko-sch-drei-while-rf
titel: Drei while-Schleifen und zwei Rücksetzungen
niveau: 3
lernziel: 4
kompetenz: begruenden
quelle: TUWEL-Test WS2022/23 vom 13.01.2023, Frage 6 (nachgebaut, andere Grenzen)
angabe: |
  ```java
  int i = 0, j = 0, k = 0;
  while (i < n) {
      i++;
      while (j < n) {
          j++;
          while (k < n) {
              k++;
              sum += 1;
          }
          k = j;
      }
      j = i;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für `n = 2` wird `sum += 1` genau 3-mal ausgeführt.'
        richtig: true
        erklaerung: 'Im ersten äußeren Durchlauf läuft die innerste Schleife zweimal (k = 0 → 2), dann nach `k = 1` noch einmal. Im zweiten äußeren Durchlauf ist `k` schon 2. Zusammen 3.'
      - text: 'Die kleinste obere Schranke ist O(n²), weil es nur zwei Rücksetzungen gibt.'
        richtig: false
        erklaerung: 'Die Rücksetzungen `k = j` und `j = i` setzen nicht auf 0, aber nur ein Stück zurück. Die Werte für n = 16, 32, 64 sind 696, 5488 und 43 744. Bei doppeltem n etwa achtmal so viel: O(n³).'
      - text: 'Ohne die Zeilen `k = j;` und `j = i;` läge die Laufzeit in O(n).'
        richtig: true
        erklaerung: 'Dann erreichen `k` und `j` beim ersten Mal den Wert n und bleiben dort. Jede Schleife läuft insgesamt nur n-mal.'
      - text: 'Die kleinste obere Schranke ist O(n³).'
        richtig: true
        erklaerung: 'Die mittlere Schleife läuft im i-ten äußeren Durchlauf etwa n − i Mal, die innerste danach jeweils etwa n − j Mal. Das summiert sich zu etwa n³/6.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zähle für n = 4 und n = 8 (14 und 92 Ausführungen). Wird es bei doppeltem n etwa vier- oder etwa achtmal so viel?'
      - wert: [r, f, f, r]
        meldung: 'Streiche gedanklich die beiden Rücksetzungen. Dann wird keine Variable je kleiner. Wie oft kann jede Schleife dann insgesamt laufen?'
hinweise:
  - Verfolge zuerst n = 2 vollständig mit einer Tabelle für `i`, `j`, `k` und `sum`.
  - '`k = j` setzt `k` nur auf den aktuellen Wert von `j` zurück, nicht auf 0. Die innerste Schleife läuft danach noch n − j Mal.'
loesung: |
  **Ansatz:** Klären, wie weit jede Rücksetzung zurückspringt, und kleine n nachzählen.
  ---
  n = 2: Erster äußerer Durchlauf: `j` = 1, `k` läuft 0 → 2 (2-mal), `k = 1`. `j` = 2, `k` läuft 1 → 2 (1-mal), `k = 2`. Dann `j = i = 1`. Zweiter Durchlauf: `j` = 2, aber `k = 2`, die innerste Schleife läuft nicht. Zusammen 3: Aussage 1 stimmt.
  ---
  `k = j` lässt die innerste Schleife jeweils n − j Mal laufen, `j = i` die mittlere n − i Mal. Das ergibt eine dreifache Summe der Größenordnung n³/6. Gezählt: n = 16, 32, 64 ergibt 696, 5488, 43 744, also etwa den Faktor 8 bei Verdopplung. O(n³): Aussage 4 stimmt, Aussage 2 nicht.
  ---
  Ohne Rücksetzungen wird keine Variable je kleiner. Jede Schleife läuft insgesamt höchstens n-mal: O(n). Aussage 3 stimmt.
```

```aufgabe
id: ko-sch-verdoppeln-innen
titel: Außen verdoppeln, innen bis i
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Welche kleinste obere Schranke hat die Laufzeit in Abhängigkeit von n?
  ```java
  for (int i = 1; i < n; i *= 2) {
      for (int j = 0; j < i; j++) {
          sum += i + j;
      }
  }
  ```
teile:
  - typ: auswahl
    optionen: ['$O(\log n)$', '$O(n)$', '$O(n \log n)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die äußere Schleife läuft nur log₂ n Mal. Aber die innere läuft jedes Mal `i`-mal, und `i` wird bis knapp n groß. Zähle die inneren Durchläufe zusammen.'
      - wert: 2
        meldung: '„Außen log n, innen bis n“ ergibt eine obere Schranke, aber nicht die kleinste. Die innere Schleife läuft nur beim letzten Mal fast n-mal, davor viel weniger. Addiere 1 + 2 + 4 + …'
hinweise:
  - Zähle für n = 16. Welche Werte nimmt `i` an, und wie oft läuft jeweils die innere Schleife?
  - 'Die Summe 1 + 2 + 4 + … + 2ᵏ ist immer 2ᵏ⁺¹ − 1, also weniger als das Doppelte des letzten Summanden.'
loesung: |
  **Ansatz:** Die innere Grenze hängt von `i` ab, also pro äußerem Durchlauf zählen und addieren.
  ---
  Für n = 16 nimmt `i` die Werte 1, 2, 4, 8 an. Die innere Schleife läuft 1 + 2 + 4 + 8 = 15-mal.
  ---
  Allgemein ist die Summe 1 + 2 + 4 + … kleiner als 2n, denn jeder Summand ist so groß wie alle vorherigen zusammen plus 1. Für n = 1000 sind es 1023 Ausführungen.
  ---
  Höchstens etwa 2n Ausführungen ergeben $O(n)$. Das ist die kleinste Schranke, nicht $O(n \log n)$.
```

```reflexion
frage: Warum macht die Schrittweite j += n / 3 die innere Schleife konstant, die Schrittweite j += 3 aber linear?
antwort: |
  Die innere Schleife läuft von 0 bis n. Mit der Schrittweite 3 braucht sie etwa n/3 Sprünge, und diese Zahl wächst mit
  n. Mit der Schrittweite n/3 wächst die Sprunglänge im selben Maß wie die Strecke. Die Strecke n geteilt durch die
  Sprunglänge n/3 ergibt immer ungefähr 3 Sprünge, egal wie groß n ist. Entscheidend ist also das Verhältnis von
  Strecke zu Schrittweite. Ist es eine Konstante, ist die Schleife konstant. Hängt es von n ab, wächst sie mit n.
```


## Typische Komplexitätsklassen und ihr Wachstum

```aufgabe
id: ko-kl-check-baum
titel: Aufrufe einer verzweigten Rekursion
niveau: 1
art: check
angabe: |
  Wie oft wird `f` insgesamt aufgerufen, wenn `main` den Aufruf `f(3)` macht? Der erste Aufruf zählt mit.
  ```java
  static void f(int n) {
      if (n > 0) {
          f(n - 1);
          f(n - 1);
      }
  }
  ```
  (Wiederholung: [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen))
teile:
  - typ: zahl
    loesung: "1 + 2 + 4 + 8"
    toleranz: 0.1
    fehler:
      - wert: "8"
        meldung: '8 sind nur die Aufrufe auf der untersten Ebene, also `f(0)`. Dazu kommen die Aufrufe darüber: 1 + 2 + 4.'
      - wert: "4"
        meldung: 'Jeder Aufruf mit n > 0 ruft sich **zweimal** auf. Die Zahl der Aufrufe verdoppelt sich mit jeder Ebene.'
loesung: |
  Ebene `f(3)`: 1 Aufruf. Ebene `f(2)`: 2 Aufrufe. Ebene `f(1)`: 4. Ebene `f(0)`: 8.
  ---
  Zusammen 1 + 2 + 4 + 8 = 15 = 2⁴ − 1.
```

Die O-Klassen, die in EP1 vorkommen, haben eigene Namen. Die folgende Tabelle ordnet sie vom langsamsten zum
schnellsten Wachstum. Die drei rechten Spalten zeigen, wie viele Schritte bei n = 10, n = 1000 und n = 1 000 000
ungefähr anfallen. Für log n steht dabei der Logarithmus zur Basis 2, also die Zahl der Halbierungen. Den
Logarithmus erklärt das Beispiel „Verdreifachen: j *= 3“ in
[17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse).

|Klasse|Name|n = 10|n = 1000|n = 1 000 000|
|---|---|---|---|---|
|O(1)|konstant|1|1|1|
|O(log n)|logarithmisch|3,3|10|20|
|O(n)|linear|10|1000|1 000 000|
|O(n log n)|log-linear|33|10 000|20 Millionen|
|O(n²)|quadratisch|100|1 Million|10¹²|
|O(n³)|kubisch|1000|1 Milliarde|10¹⁸|
|O(2ⁿ)|exponentiell|1024|eine Zahl mit 302 Stellen|unvorstellbar|

Ein heutiger Rechner schafft grob eine Milliarde einfacher Operationen pro Sekunde. Bei n = 1 000 000 braucht ein
quadratischer Algorithmus dann 10¹² Operationen, also rund 17 Minuten. Ein kubischer braucht 10¹⁸ Operationen, also
rund 32 Jahre. Ein logarithmischer ist nach 20 Operationen fertig.

```plot
x: [1, 10]
y: [0, 100]
achsen: { x: "n", y: "Schritte" }
graphen:
  - { f: "ld(x)", label: "log n", farbe: 0, von: 1, bis: 10 }
  - { f: "x", label: "n", farbe: 1, von: 1, bis: 10 }
  - { f: "x * ld(x)", label: "n log n", farbe: 2, von: 1, bis: 10 }
  - { f: "x^2", label: "n²", farbe: 3, von: 1, bis: 10 }
  - { f: "2^x", label: "2ⁿ", farbe: 4, von: 1, bis: 6.64 }
beschriftung: Wachstum der Klassen für n von 1 bis 10. log n (blau) bleibt fast flach, n (orange) steigt gleichmäßig, n log n (grün) etwas stärker, n² (violett) biegt nach oben, und 2ⁿ (ocker) verlässt das Bild schon bei n ≈ 6,6 nach oben.
```

### Die Klassen mit Beispielen

:::beispiel[Konstant, linear und quadratisch]
**O(1), konstant.** Die Arbeit hängt nicht von n ab.

```java
int letztes = a[a.length - 1];
```

`a.length` ist in Java im Array gespeichert und muss nicht gezählt werden. Der Zugriff `a[i]` springt direkt an die
Stelle. Beides kostet immer gleich viel, egal ob das Array 10 oder 10 Millionen Elemente hat.

**O(n), linear.** Jedes Element wird einmal angesehen: die Summe, das Minimum, die lineare Suche aus
[12.3 Typische Algorithmen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen). Auch die
rekursive Fakultät ist linear. `fakultaet(n)` ruft `fakultaet(n - 1)` auf, und so weiter bis 0. Das sind n + 1
Aufrufe.

**O(n²), quadratisch.** Jedes Element wird mit jedem anderen verglichen, wie beim Doppelt-Vergleich aus
[17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen). Auch die
einfachen Sortierverfahren liegen hier, siehe
[19.8 Laufzeit und Vergleich der Verfahren](/lernen/ep1/sortieren/laufzeit-und-vergleich-der-verfahren).
:::

**O(log n), logarithmisch.** Diese Klasse entsteht, wenn die Eingabe in jedem Schritt um einen **festen Faktor**
kleiner wird, etwa halbiert oder durch 10 geteilt. Der **Logarithmus** zur Basis 2, geschrieben log₂ n, beantwortet
die Frage: Wie oft muss ich n halbieren, bis 1 übrig bleibt? Gleichwertig: Mit welcher Hochzahl muss ich 2 potenzieren,
um n zu erhalten? Es gilt log₂ 8 = 3, denn 2³ = 8, und log₂ 1024 = 10, denn 2¹⁰ = 1024.

:::beispiel[Ziffern zählen ist logarithmisch]
Aus [7.2 Die Ziffernschleife](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme) kennst du diese
Schleife für `n > 0`:

```java
int stellen = 0;
while (n > 0) {
    n = n / 10;
    stellen++;
}
```

Jeder Durchlauf streicht die letzte Ziffer. Für n = 52 718 läuft sie 5-mal, für n = 1 000 000 genau 7-mal. Die Zahl
der Durchläufe ist die Zahl der Ziffern, und die wächst wie log₁₀ n. Eine zehnmal so große Zahl braucht nur
**einen** Durchlauf mehr.

Warum schreibt man trotzdem nur O(log n) ohne Basis? Logarithmen zu verschiedenen Basen unterscheiden sich nur um
einen festen Faktor. Es gilt log₂ n ≈ 3,32 · log₁₀ n, weil 2 hoch 3,32 ungefähr 10 ist. Für n = 1 000 000 ist
log₁₀ n = 6 und log₂ n ≈ 19,9. Feste Faktoren fallen in der O-Notation weg, also auch die Basis.
:::

Die übrigen Klassen in Kürze:

- **O(n log n), log-linear.** n-mal eine logarithmische Arbeit, wie im Beispiel mit `j *= 3` aus
  [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse). Schnelle
  Sortierverfahren liegen hier, auch `Arrays.sort`.
- **O(n³), kubisch.** Drei verschachtelte Schleifen, die alle bis n laufen. Ein Beispiel ist das Multiplizieren
  zweier n × n-Tabellen (zweidimensionale Arrays aus [14.2 Verschachtelte Schleifen über Zeilen und Spalten](/lernen/ep1/arrays-2d/verschachtelte-schleifen-ueber-zeilen-und-spalten)).
- **O(2ⁿ), exponentiell** (2ⁿ heißt „2 hoch n“, also n-mal die 2 multipliziert). Wird n um 1 größer, verdoppelt
  sich die Arbeit. Typisch ist eine Rekursion mit zwei
  Selbstaufrufen pro Aufruf, etwa bei den **Türmen von Hanoi**. Für n Scheiben braucht man dort 2ⁿ − 1 Züge. Für 10
  Scheiben sind das 1023, für 20 Scheiben schon 1 048 575.

```aufgabe
id: ko-kl-ordnen
titel: Klassen nach Wachstum ordnen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ordne die Klassen vom **langsamsten** zum **schnellsten** Wachstum.
teile:
  - typ: reihenfolge
    elemente: ['$O(1)$', '$O(\log n)$', '$O(n)$', '$O(n \log n)$', '$O(n^2)$', '$O(2^n)$']
hinweise:
  - Setze für alle Klassen n = 1024 ein und vergleiche die Zahlen.
loesung: |
  **Ansatz:** Für ein großes n alle Klassen ausrechnen, hier n = 1024.
  ---
  1, dann log₂ 1024 = 10, dann 1024, dann 1024 · 10 = 10 240, dann 1024² ≈ 1 Million, dann 2¹⁰²⁴ mit über 300 Stellen.
  ---
  Reihenfolge: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ).
```

```aufgabe
id: ko-kl-halbieren-4096
titel: Wie oft halbieren?
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Wie oft kann man 4096 halbieren, bis 1 übrig bleibt? Das ist log₂ 4096.
teile:
  - typ: zahl
    loesung: "12"
    toleranz: 0.1
    fehler:
      - wert: "2048"
        meldung: '2048 ist das Ergebnis nach **einem** Halbieren. Gefragt ist, wie oft man halbieren muss.'
      - wert: "11"
        meldung: 'Zähle die Halbierungen: 4096 → 2048 → 1024 → … → 2 → 1. Es ist eine mehr, als man oft denkt. 2¹¹ ist erst 2048.'
hinweise:
  - Schreib die Folge 4096, 2048, 1024, … bis 1 auf und zähle die Pfeile.
loesung: |
  **Ansatz:** Halbieren, bis 1 übrig bleibt, und die Schritte zählen.
  ---
  4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1. Das sind 12 Halbierungen.
  ---
  Probe: 2¹² = 4096. Also ist log₂ 4096 = 12.
```

```aufgabe
id: ko-kl-konstant
titel: Das letzte Element kopieren
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Laufzeit hat diese Anweisung in Abhängigkeit von der Länge n des Arrays?
  ```java
  a[a.length - 1] = a[0];
  ```
teile:
  - typ: auswahl
    optionen: ['$O(1)$', '$O(\log n)$', '$O(n)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier wird nichts halbiert oder geteilt. Es gibt überhaupt keine Schleife.'
      - wert: 2
        meldung: '`a.length` wird nicht gezählt, sondern ist im Array gespeichert. Der Zugriff auf `a[0]` und auf den letzten Platz kostet immer gleich viel.'
hinweise:
  - Gibt es eine Schleife? Hängt einer der Schritte von der Länge des Arrays ab?
loesung: |
  **Ansatz:** Einzelne Operationen ohne Schleife zählen.
  ---
  `a.length` lesen, eins abziehen, `a[0]` lesen und zuweisen: eine feste Anzahl von Operationen.
  ---
  Das ist unabhängig von n, also $O(1)$.
```

### Das Verdopplungsexperiment

Die Vorlesung hat die Laufzeiten gemessen, während sie n immer wieder verdoppelt hat. Bei einem quadratischen
Verfahren stiegen sie von 2,08 Sekunden (n = 128 000) auf 8,3 Sekunden (n = 256 000), also auf das Vierfache. Bei
einem kubischen Verfahren stiegen sie meist auf etwa das Achtfache. Das ist kein Zufall. Man kann es vorhersagen.

:::merke[Was passiert, wenn n verdoppelt wird?]
1. O(1): Die Laufzeit bleibt gleich.
2. O(log n): Es kommt nur **ein** Schritt dazu, denn log₂(2n) = log₂ n + 1.
3. O(n): Die Laufzeit verdoppelt sich.
4. O(n log n): etwas mehr als das Doppelte.
5. O(n²): das Vierfache, denn (2n)² = 4n².
6. O(n³): das Achtfache, denn (2n)³ = 8n³.
7. O(2ⁿ): Schon n + 1 statt n verdoppelt die Laufzeit. Bei 2n statt n wird aus 2ⁿ der Wert 2ⁿ · 2ⁿ, die Laufzeit wird also **quadriert**.
:::

Allgemein gilt für O(nᵏ): Wird n mit dem Faktor m multipliziert, wird die Laufzeit mit mᵏ multipliziert.

:::achtung[Halbieren ist nicht n / 2]
Ein Student schätzt, die Schleife `while (n > 1) { n = n / 2; }` laufe bei n = 1024 etwa 512-mal. Sie halbiere ja.
Rechne nach: 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1. Das sind **10** Durchläufe, nicht 512. Halbieren heißt, dass
die **verbleibende Zahl** jedes Mal halb so groß wird, nicht, dass die halbe Arbeit anfällt. Darum liegt die Schleife
in O(log n), nicht in O(n).
:::

:::achtung[Exponentiell sieht bei kleinem n harmlos aus]
Eine Studentin vergleicht 2ⁿ und n² bei n = 4 und findet zweimal 16. Sie folgert: „Beide wachsen gleich schnell.“
Rechne weiter. Bei n = 10 ist 2ⁿ = 1024, aber n² = 100. Bei n = 20 ist 2ⁿ = 1 048 576, aber n² = 400. Bei n = 4
treffen sich die Kurven nur zufällig. Für die O-Klasse zählt das Verhalten bei großem n, und dort ist 2ⁿ unvergleichlich
größer.
:::

```aufgabe
id: ko-kl-verdopplung-quadrat
titel: Vorhersage für ein quadratisches Verfahren
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Verfahren mit Laufzeit in O(n²) braucht für n = 20 000 genau 3 Sekunden. Wie viele Sekunden braucht es
  ungefähr für n = 80 000?
teile:
  - typ: zahl
    loesung: "3 * (80000/20000)^2"
    einheit: s
    fehler:
      - wert: "12"
        meldung: 'Das wäre die Zeit bei einem **linearen** Verfahren. Bei O(n²) wird der Faktor 4 der Eingabe quadriert.'
      - wert: "24"
        meldung: 'Du hast den Faktor 4 mit 2 multipliziert statt ihn zu quadrieren. Quadrieren heißt mit sich selbst malnehmen: 4² = 4 · 4, nicht 4 · 2.'
hinweise:
  - Um welchen Faktor wächst n?
  - Bei O(n²) wächst die Laufzeit mit dem Quadrat dieses Faktors.
gefuehrt:
  - text: Um welchen Faktor wird n größer?
    teil: { typ: zahl, loesung: "80000/20000", toleranz: 0.1 }
    erklaerung: 80 000 / 20 000 = 4.
  - text: Um welchen Faktor wächst eine Laufzeit in O(n²)?
    teil: { typ: zahl, loesung: "4^2", toleranz: 0.1 }
    erklaerung: (4n)² = 16n². Die Laufzeit wird 16-mal so groß.
  - text: Wie viele Sekunden sind das?
    teil: { typ: zahl, loesung: "3 * 16", einheit: s }
    erklaerung: 3 s · 16 = 48 s.
loesung: |
  **Ansatz:** Faktor der Eingabe bestimmen und quadrieren.
  ---
  n wächst um den Faktor 80 000 / 20 000 = 4. Bei O(n²) wächst die Laufzeit um 4² = 16.
  ---
  3 s · 16 = 48 s. Probe in zwei Verdopplungen: 3 s → 12 s → 48 s.
```

```aufgabe
id: ko-kl-verdreifachen-kubisch
titel: Vorhersage für ein kubisches Verfahren
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Verfahren mit Laufzeit in O(n³) braucht für n = 500 genau 2 Sekunden. Wie viele Sekunden braucht es
  ungefähr für n = 1500?
teile:
  - typ: zahl
    loesung: "2 * 3^3"
    einheit: s
    fehler:
      - wert: "6"
        meldung: 'Das gilt für ein lineares Verfahren. Bei O(n³) wird der Faktor 3 hoch drei genommen.'
      - wert: "18"
        meldung: 'Das wäre O(n²) mit Faktor 3² = 9. Bei O(n³) ist es 3³.'
hinweise:
  - Bestimme den Faktor, um den n wächst.
  - Bei O(n³) wird dieser Faktor hoch drei genommen.
loesung: |
  **Ansatz:** Faktor der Eingabe hoch drei nehmen.
  ---
  1500 / 500 = 3. Bei O(n³) wächst die Laufzeit um 3³ = 27.
  ---
  2 s · 27 = 54 s, also fast eine Minute statt 2 Sekunden.
```

```aufgabe
id: ko-kl-zuordnen-rf
titel: Beispiele und Klassen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Gemeint ist jeweils die kleinste obere Schranke im schlechtesten Fall. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Die Ziffern einer positiven Zahl n mit `n = n / 10` zu zählen, liegt in O(log n).'
        richtig: true
        erklaerung: 'Die Zahl der Durchläufe ist die Zahl der Ziffern, und die wächst wie log₁₀ n.'
      - text: 'Die Türme von Hanoi mit n Scheiben brauchen O(n²) Züge.'
        richtig: false
        erklaerung: 'Es sind 2ⁿ − 1 Züge. Das ist exponentiell, O(2ⁿ).'
      - text: 'Die rekursive Fakultät `fakultaet(n)` macht O(n) Aufrufe.'
        richtig: true
        erklaerung: 'Die Aufrufe gehen von n bis 0, das sind n + 1 Stück.'
      - text: 'Das Maximum eines unsortierten Arrays lässt sich in O(log n) finden.'
        richtig: false
        erklaerung: 'Jedes Element könnte das Maximum sein. Man muss jedes einzelne ansehen, also mindestens n Schritte.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Rechne bei Hanoi die Züge für 10 Scheiben aus: 1023. Ist das ungefähr 10² = 100?'
      - wert: [r, f, r, r]
        meldung: 'Kann man das Maximum finden, ohne jedes Element anzusehen? Ein übersprungenes Element könnte gerade das größte sein.'
hinweise:
  - Zähle für jedes Beispiel die Schritte für ein konkretes n, etwa n = 10.
  - Logarithmisch wird es, wenn bei jedem Schritt ein fester Anteil der Eingabe wegfällt.
loesung: |
  **Ansatz:** Für jedes Beispiel die Schritte als Funktion von n bestimmen.
  ---
  Ziffern: log₁₀ n Durchläufe, richtig. Fakultät: n + 1 Aufrufe, richtig.
  ---
  Hanoi: 2ⁿ − 1 Züge, also exponentiell, falsch. Maximum: Jedes Element muss angesehen werden, also O(n), falsch.
```

```aufgabe
id: ko-kl-code-halbierungen
titel: Halbierungen zählen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Schreibe die Methode `halbierungen(int n)`. Vorbedingung: `n >= 1`. Sie liefert, wie oft man `n` mit
  Ganzzahldivision halbieren kann, bis 1 übrig bleibt. Das ist log₂ n, abgerundet. Beispiele: `halbierungen(8)`
  liefert 3, `halbierungen(37)` liefert 5 (37 → 18 → 9 → 4 → 2 → 1), `halbierungen(1)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Logarithmus {
          public static int halbierungen(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Logarithmus {
          public static int halbierungen(int n) {
              int schritte = 0;
              while (n > 1) {
                  n = n / 2;
                  schritte++;
              }
              return schritte;
          }
      }
    tests:
      - { aufruf: "halbierungen(8)", erwartet: "3" }
      - { aufruf: "halbierungen(37)", erwartet: "5" }
      - { aufruf: "halbierungen(1)", erwartet: "0", beschreibung: "1 ist schon 1: kein Halbieren" }
      - { aufruf: "halbierungen(1000000)", erwartet: "19" }
      - { aufruf: "halbierungen(2147483647)", erwartet: "30", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Für n = 1 muss 0 herauskommen. Läuft deine Schleife bis n = 0 statt bis n = 1?" }
      - { wert: 1, meldung: "8 → 4 → 2 → 1 sind drei Halbierungen. Zählst du einen Schritt zu viel oder zu wenig?" }
hinweise:
  - Du brauchst einen Zähler und eine `while`-Schleife, die halbiert, solange `n > 1` ist.
  - 'Für n = 1 darf die Schleife gar nicht laufen. Prüfe die Bedingung mit den Werten 1 und 2.'
loesung: |
  **Ansatz:** Halbieren, solange mehr als 1 übrig ist, und mitzählen.
  ---
  ```java
  int schritte = 0;
  while (n > 1) {
      n = n / 2;
      schritte++;
  }
  return schritte;
  ```
  ---
  Probe: 1 000 000 braucht 19 Halbierungen, denn 2¹⁹ = 524 288 ≤ 1 000 000 < 2²⁰. Selbst der größte `int`-Wert braucht nur 30. Die Schleife liegt in O(log n).
```

```aufgabe
id: ko-kl-exponentiell
titel: Zehn Elemente mehr
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Verfahren E liegt in O(2ⁿ) und braucht für n = 30 genau 1 Sekunde. Verfahren Q liegt in O(n²) und braucht für
  n = 30 ebenfalls 1 Sekunde. Nimm an, dass die Laufzeit genau proportional zu 2ⁿ beziehungsweise n² ist.
teile:
  - typ: zahl
    label: a) Sekunden für Verfahren E bei n = 40
    loesung: "2^(40-30)"
    einheit: s
    fehler:
      - wert: "1.3333333"
        meldung: 'Das wäre ein lineares Wachstum mit 40/30. Bei 2ⁿ verdoppelt **jedes** zusätzliche Element die Zeit.'
      - wert: "20"
        meldung: 'Zehn zusätzliche Elemente bedeuten zehn Verdopplungen hintereinander, also mal 2¹⁰, nicht mal 2 · 10.'
  - typ: zahl
    label: b) Welches n schafft Verfahren Q in der Zeit, die du bei a) berechnet hast?
    loesung: "30 * sqrt(2^10)"
    fehler:
      - wert: "40"
        meldung: 'Q ist quadratisch. In 1024-mal so viel Zeit schafft es ein viel größeres n. Gesucht ist das n mit (n/30)² = 1024.'
      - wert: "30720"
        meldung: '30 · 1024 gilt für ein lineares Verfahren. Bei O(n²) muss man aus dem Zeitfaktor die Wurzel ziehen.'
hinweise:
  - 'a) Jedes zusätzliche Element verdoppelt die Zeit von E. Von 30 auf 40 kommen 10 Elemente dazu.'
  - 'b) Bei Q wächst die Zeit mit dem Quadrat des Faktors von n. Welcher Faktor ergibt im Quadrat das Ergebnis aus a?'
loesung: |
  **Ansatz:** Bei 2ⁿ verdoppelt jedes zusätzliche Element die Zeit. Bei n² wächst die Zeit mit dem Quadrat des Faktors.
  ---
  a) Von n = 30 auf n = 40 sind es 10 Verdopplungen: 1 s · 2¹⁰ = 1024 s, also gut 17 Minuten.
  ---
  b) Q bekommt 1024-mal so viel Zeit. Gesucht ist der Faktor m mit m² = 1024, also m = 32. Q schafft in derselben Zeit n = 30 · 32 = 960.
  ---
  Vergleich: In 17 Minuten kommt E von 30 auf 40 Elemente, Q von 30 auf 960. Deshalb gelten exponentielle Verfahren schon bei mittleren n als unbrauchbar.
```

```reflexion
frage: Ein Verfahren in O(log n) braucht für n = 1000 genau 10 Schritte. Wie viele Schritte erwartest du für n = 1 000 000, und warum ist das so wenig?
antwort: |
  Etwa 20 Schritte. Von 1000 auf 1 000 000 wird n tausendmal so groß. Das sind ungefähr zehn Verdopplungen, denn
  2¹⁰ = 1024. Bei einem logarithmischen Verfahren kostet jede Verdopplung nur einen zusätzlichen Schritt. Der Grund:
  Jeder Schritt halbiert den Rest der Arbeit. Doppelt so viel Eingabe ist nach einem einzigen Schritt wieder auf die
  alte Größe geschrumpft. Deshalb sind logarithmische Verfahren selbst für riesige Eingaben schnell.
```


## Algorithmen vergleichen: Laufzeit und Speicher

```aufgabe
id: ko-vgl-check-umdrehen
titel: Ein Array umgedreht kopieren
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen))
teile:
  - typ: ausgabe
    code: |
      int[] a = {3, 8, 5};
      int[] r = new int[a.length];
      for (int i = 0; i < a.length; i++) {
          r[a.length - 1 - i] = a[i];
      }
      System.out.println(Arrays.toString(r));
      System.out.println(Arrays.toString(a));
    loesung: |
      [5, 8, 3]
      [3, 8, 5]
    fehler:
      - wert: "[5, 8, 3]\n[5, 8, 3]"
        meldung: 'Die Schleife schreibt nur in das neue Array `r`. Das Array `a` wird nur gelesen und bleibt unverändert.'
      - wert: "[3, 8, 5]\n[3, 8, 5]"
        meldung: '`a[0] = 3` landet in `r[2]`, also hinten. Das neue Array ist umgedreht.'
loesung: |
  `i = 0`: `r[2] = 3`. `i = 1`: `r[1] = 8`. `i = 2`: `r[0] = 5`.
  ---
  Also ist `r` gleich `[5, 8, 3]`. `a` wurde nicht verändert und bleibt `[3, 8, 5]`.
```

Jetzt hast du alle Werkzeuge, um zwei Algorithmen für dasselbe Problem fair zu vergleichen. Wir nehmen das Beispiel
aus der Vorlesung, mit dem dieses Kapitel begonnen hat: die **maximale Abschnittssumme**.

**Das Problem:** Gegeben ist ein Array mit positiven und negativen ganzen Zahlen, mindestens ein Element. Ein
**Abschnitt** ist eine Folge von Elementen, die im Array direkt nebeneinander stehen. Gesucht ist die größte Summe,
die ein Abschnitt haben kann.

:::beispiel[Die maximale Abschnittssumme von Hand]
Das Array ist `{3, -5, 4, -1, 2, -6, 2}`.

- Der Abschnitt `4, -1, 2` hat die Summe 4 − 1 + 2 = 5.
- Nimmt man die 3 vorne dazu, kommt auch die −5 mit: 3 − 5 + 4 − 1 + 2 = 3. Das ist schlechter.
- Nimmt man hinten `-6, 2` dazu, sinkt die Summe auf 5 − 6 + 2 = 1.
- Einzelne Elemente sind höchstens 4.

Kein Abschnitt hat eine größere Summe als 5. Die maximale Abschnittssumme ist **5**.
:::

Die Vorlesung zeigt drei Algorithmen für dieses Problem. Alle drei liefern dasselbe Ergebnis.

**Variante 1: alle Abschnitte einzeln aufsummieren.** Für jeden linken Rand `links` und jeden rechten Rand `rechts`
summiert eine dritte Schleife die Elemente dazwischen. Drei verschachtelte Schleifen, die alle mit n wachsen:
**O(n³)**.

**Variante 2: die Summe weiterführen.** Wenn man den rechten Rand um eins verschiebt, kommt nur ein Element dazu. Die
alte Summe muss man nicht neu berechnen.

```java
static int maxSumme2(int[] a) {
    int max = a[0];
    for (int links = 0; links < a.length; links++) {
        int summe = 0;
        for (int rechts = links; rechts < a.length; rechts++) {
            summe += a[rechts];
            if (summe > max) {
                max = summe;
            }
        }
    }
    return max;
}
```

- `max` beginnt mit dem ersten Element. Mit 0 zu beginnen wäre falsch, wenn alle Zahlen negativ sind.
- Für jeden linken Rand wächst der Abschnitt nach rechts. `summe += a[rechts]` ergänzt nur das neue Element.
- Nach jedem neuen Element wird geprüft, ob die Summe den bisherigen Rekord schlägt.

Die innere Schleife läuft n + (n − 1) + … + 1 = n(n + 1)/2 Mal. Das liegt in **O(n²)**.

:::beispiel[Variante 3: ein einziger Durchlauf]
Die schnellste Variante geht das Array nur einmal von links nach rechts durch. Sie merkt sich zwei Zahlen:

- `bisEnde` ist die größte Summe eines Abschnitts, der **genau an der aktuellen Stelle endet**.
- `max` ist die größte Abschnittssumme, die bisher irgendwo gefunden wurde.

```java
static int maxSumme3(int[] a) {
    int max = a[0];
    int bisEnde = a[0];
    for (int pos = 1; pos < a.length; pos++) {
        bisEnde = Math.max(bisEnde + a[pos], a[pos]);
        max = Math.max(max, bisEnde);
    }
    return max;
}
```

`Math.max(x, y)` liefert die größere der beiden Zahlen. Die entscheidende Zeile ist Zeile 5. Ein Abschnitt, der an
der Stelle `pos` endet, hat zwei Möglichkeiten. Entweder er verlängert den besten Abschnitt, der eine Stelle vorher
endete (`bisEnde + a[pos]`). Oder er beginnt neu und besteht nur aus `a[pos]`. Wir nehmen das Bessere.

Für `{3, -5, 4, -1, 2, -6, 2}`:

|`pos`|`a[pos]`|`bisEnde`|`max`|
|---|---|---|---|
|Start|3|3|3|
|1|−5|max(−2, −5) = −2|3|
|2|4|max(2, 4) = 4|4|
|3|−1|3|4|
|4|2|5|5|
|5|−6|−1|5|
|6|2|max(1, 2) = 2|5|

Ergebnis 5, wie von Hand gefunden. An der Stelle `pos = 2` lohnt der Neubeginn: Mit der 4 allein ist man besser dran
als mit −2 + 4. Eine Schleife über n Elemente, `Math.max` kostet O(1): **O(n)**.
:::

Die Messung der Vorlesung bestätigt die Rechnung. Bei n = 16 000 brauchte Variante 1 rund 160 Sekunden, Variante 2
rund 0,03 Sekunden, und bei Variante 3 zeigte die Stoppuhr 0. Für n = 10 führt die innerste Zeile von Variante 1
genau 220-mal ihre Addition aus, die von Variante 2 nur 55-mal.

```aufgabe
id: ko-vgl-abschnitt-hand
titel: Die größte Abschnittssumme finden
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Wie groß ist die maximale Abschnittssumme von `{-2, 6, -3, 4, -9, 5}`?
teile:
  - typ: zahl
    loesung: "6 - 3 + 4"
    toleranz: 0.1
    fehler:
      - wert: "6"
        meldung: 'Die −3 lohnt sich mitzunehmen, weil danach die 4 kommt. 6 − 3 + 4 ist größer als 6.'
      - wert: "1"
        meldung: 'Das ist die Summe aller Elemente. Ein Abschnitt darf aber auch nur einen Teil des Arrays umfassen.'
hinweise:
  - Probiere Abschnitte, die bei der 6 beginnen. Wie weit lohnt es sich, nach rechts zu gehen?
loesung: |
  **Ansatz:** Abschnitte um die großen positiven Werte probieren.
  ---
  `6` allein ergibt 6. `6, -3, 4` ergibt 7. Mit der −9 sinkt es auf −2, auch die 5 danach hilft nicht. `5` allein ergibt nur 5.
  ---
  Die maximale Abschnittssumme ist 7.
```

```aufgabe
id: ko-vgl-trace-variante3
titel: Variante 3 Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Verfolge `maxSumme3` für das Array `{2, -4, 3, 1, -2, 4}`. Die erste Zeile (vor der Schleife) ist vorgegeben.
teile:
  - typ: trace
    spalten: [pos, "a[pos]", bisEnde, max]
    zeilen: [Start, pos = 1, pos = 2, pos = 3, pos = 4, pos = 5]
    loesung: [["–", 2, 2, 2], [1, -4, -2, 2], [2, 3, 3, 3], [3, 1, 4, 4], [4, -2, 2, 4], [5, 4, 6, 6]]
    vorgabe: 1
    fehler:
      - wert: ["–", "2", "2", "2", "1", "-4", "-2", "2", "2", "3", "1", "2", "3", "1", "2", "2", "4", "-2", "0", "2", "5", "4", "4", "4"]
        meldung: 'Bei `pos = 2` gibt es zwei Möglichkeiten: weiterführen (−2 + 3 = 1) oder neu beginnen (3). `Math.max` nimmt das Größere, also 3.'
hinweise:
  - 'In jeder Zeile zuerst `bisEnde = Math.max(bisEnde + a[pos], a[pos])` rechnen, dann `max = Math.max(max, bisEnde)`.'
  - Ein Neubeginn lohnt sich immer dann, wenn das bisherige `bisEnde` negativ ist.
loesung: |
  **Ansatz:** Je Zeile erst `bisEnde`, dann `max` aktualisieren.
  ---
  pos 1: max(2 − 4, −4) = −2, `max` bleibt 2. pos 2: max(−2 + 3, 3) = 3, `max` = 3. pos 3: max(4, 1) = 4, `max` = 4.
  ---
  pos 4: max(2, −2) = 2, `max` bleibt 4. pos 5: max(6, 4) = 6, `max` = 6.
  ---
  Ergebnis 6, der Abschnitt `3, 1, -2, 4`. Probe: 3 + 1 − 2 + 4 = 6.
```

```aufgabe
id: ko-vgl-zaehlen-varianten
titel: Additionen in Variante 1 und 2
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Wie oft wird die innerste Addition für ein Array mit n = 6 Elementen ausgeführt? In Variante 2 ist das
  `summe += a[rechts]`. In Variante 1 summiert die dritte Schleife für jedes Paar `links ≤ rechts` alle Elemente von
  `links` bis `rechts`. Die Zahl für Variante 1 ist n(n + 1)(n + 2)/6.
teile:
  - typ: zahl
    label: Variante 2
    loesung: "6 + 5 + 4 + 3 + 2 + 1"
    toleranz: 0.1
    fehler:
      - wert: "36"
        meldung: 'Die innere Schleife beginnt bei `rechts = links`. Für `links = 5` läuft sie nur noch einmal. Es ist kein volles 6 · 6.'
      - wert: "15"
        meldung: '15 = 5 + 4 + 3 + 2 + 1. Für `links = 0` läuft `rechts` von 0 bis 5, das sind 6 Durchläufe, nicht 5.'
  - typ: zahl
    label: Variante 1
    loesung: "6 * 7 * 8 / 6"
    toleranz: 0.1
    fehler:
      - wert: "216"
        meldung: 'Das wäre 6³. Die Schleifen hängen voneinander ab, darum ist es viel weniger. Setze n = 6 in die angegebene Formel ein.'
hinweise:
  - 'Variante 2: Für `links = 0` läuft die innere Schleife 6-mal, für `links = 1` 5-mal und so weiter.'
  - 'Variante 1: Setze n = 6 in n(n + 1)(n + 2)/6 ein.'
gefuehrt:
  - text: Wie oft läuft die innere Schleife von Variante 2 für `links = 0`?
    teil: { typ: zahl, loesung: "6", toleranz: 0.1 }
    erklaerung: '`rechts` läuft von 0 bis 5.'
  - text: Und für `links = 5`?
    teil: { typ: zahl, loesung: "1", toleranz: 0.1 }
    erklaerung: '`rechts` läuft nur für den Wert 5.'
  - text: Wie viele Additionen sind es in Variante 2 zusammen?
    teil: { typ: zahl, loesung: "21", toleranz: 0.1 }
    erklaerung: 6 + 5 + 4 + 3 + 2 + 1 = 6 · 7 / 2 = 21.
  - text: Und in Variante 1?
    teil: { typ: zahl, loesung: "56", toleranz: 0.1 }
    erklaerung: 6 · 7 · 8 / 6 = 56. Schon bei 6 Elementen fast dreimal so viel.
loesung: |
  **Ansatz:** Variante 2 mit der Dreieckssumme zählen, Variante 1 mit der angegebenen Formel.
  ---
  Variante 2: 6 + 5 + 4 + 3 + 2 + 1 = 21 = n(n + 1)/2.
  ---
  Variante 1: 6 · 7 · 8 / 6 = 56. Für n = 10 wären es 55 und 220. Der Abstand wächst mit n, weil n³ schneller wächst als n².
```

### Zusätzlicher Speicher

Neben der Laufzeit kostet ein Algorithmus auch **Speicher**. Gemeint ist der **zusätzliche** Speicher, also alles,
was der Algorithmus über die Eingabe hinaus anlegt. Auch dafür verwendet man die O-Notation. Alle drei Varianten der
Abschnittssumme brauchen nur ein paar einzelne Variablen, also O(1) zusätzlichen Speicher.

:::beispiel[Umdrehen mit neuem Array oder an Ort und Stelle]
**Mit neuem Array** (wie in [12.4 Neue Arrays bauen](/lernen/ep1/arrays/neue-arrays-bauen-kopieren-umdrehen-filtern-einfuegen)):

```java
static int[] umgedreht(int[] a) {
    int[] r = new int[a.length];
    for (int i = 0; i < a.length; i++) {
        r[a.length - 1 - i] = a[i];
    }
    return r;
}
```

Laufzeit O(n), denn die Schleife läuft n-mal. Zusätzlicher Speicher **O(n)**, denn `r` hat genauso viele Plätze wie
`a`. Das Original bleibt unverändert.

**An Ort und Stelle** (englisch *in place*): Man tauscht das erste mit dem letzten Element, das zweite mit dem
vorletzten und so weiter, bis man in der Mitte ankommt.

```java
static void umdrehen(int[] a) {
    for (int i = 0; i < a.length / 2; i++) {
        int tmp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = tmp;
    }
}
```

Laufzeit O(n), denn es sind n/2 Tauschvorgänge. Zusätzlicher Speicher **O(1)**, nur `i` und `tmp`. Dafür verändert
die Methode das Array des Aufrufers. Das ist ein **Seiteneffekt**, wie in
[12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
:::

```aufgabe
id: ko-vgl-speicher-auswahl
titel: Speicher beim Umdrehen mit neuem Array
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Wie viel **zusätzlichen** Speicher braucht die Methode `umgedreht`, die ein neues, umgedrehtes Array liefert?
  n ist die Länge von `a`.
teile:
  - typ: auswahl
    optionen: ['$O(1)$', '$O(n)$', '$O(n^2)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Variable `r` ist zwar nur eine Variable, aber sie zeigt auf ein neues Array mit n Plätzen. Diese Plätze zählen mit.'
      - wert: 2
        meldung: 'Es wird nur ein einziges neues Array der Länge n angelegt, nicht n Arrays.'
hinweise:
  - Was legt die Methode mit `new` an, und wie groß ist es?
loesung: |
  **Ansatz:** Alles zählen, was über die Eingabe hinaus angelegt wird.
  ---
  `new int[a.length]` legt n Plätze an. Dazu kommen die einzelnen Variablen `r` und `i`.
  ---
  Zusätzlicher Speicher n + 2 Plätze, also $O(n)$. Die zwei einzelnen Variablen fallen als konstanter Summand weg.
```

Auch Rekursion kostet Speicher. Jeder Aufruf belegt einen eigenen Rahmen auf dem Aufrufstapel, bis er zurückkehrt
(siehe [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg)). Die rekursive
Fakultät `fakultaet(n)` hat in der tiefsten Stelle n + 1 Aufrufe gleichzeitig offen. Ihr zusätzlicher Speicher
liegt deshalb in O(n), obwohl sie keine einzige Array-Kopie anlegt. Die Schleifenfassung braucht nur O(1).

:::achtung[Die versteckte Schleife im Methodenaufruf]
Ein Student prüft auf doppelte Werte so:

```java
for (int i = 0; i < a.length; i++) {
    if (zaehle(a, a[i]) > 1) {
        return true;
    }
}
return false;
```

Er schreibt dazu: „Nur eine Schleife, also O(n).“ Aber `zaehle(a, x)` geht selbst das ganze Array durch, um `x` zu
zählen. Jeder Aufruf kostet n Schritte. Bei n = 1000 Elementen ohne doppelte Werte sind es 1000 Aufrufe mal 1000
Schritte, also eine Million. Die Laufzeit liegt in O(n²). Ein Methodenaufruf zählt nur dann als eine einfache
Operation, wenn die Methode selbst eine feste Anzahl von Schritten macht, wie `Math.max`.
:::

:::achtung[Bis zum Ende getauscht ist zweimal getauscht]
Eine Studentin schreibt die Tausch-Schleife mit `i < a.length` statt `i < a.length / 2`. Für `{1, 2, 3, 4}`:

- `i = 0` tauscht 1 und 4: `{4, 2, 3, 1}`.
- `i = 1` tauscht 2 und 3: `{4, 3, 2, 1}`. Das Array ist umgedreht.
- `i = 2` tauscht die Plätze 2 und 1 zurück: `{4, 2, 3, 1}`.
- `i = 3` tauscht die Plätze 3 und 0 zurück: `{1, 2, 3, 4}`.

Jedes Paar wird zweimal getauscht, und am Ende steht das Original da. Die Laufzeit wäre zwar immer noch O(n), aber das
Ergebnis ist falsch. Die Schleife darf nur bis zur Mitte laufen.
:::


```aufgabe
id: ko-vgl-umdrehen-rf
titel: "Quiz-Stil: zwei Arten umzudrehen"
niveau: 2
lernziel: 7
kompetenz: verstehen
quelle: TUWEL-Test WS2022/23 vom 13.01.2023, Frage zum Umdrehen eines Arrays (Stil nachgebaut, andere Methoden und Aussagen)
angabe: |
  ```java
  static int[] umdrehenNeu(int[] a) {
      int[] r = new int[a.length];
      for (int i = 0; i < a.length; i++) {
          r[i] = a[a.length - 1 - i];
      }
      return r;
  }

  static void umdrehenTausch(int[] a) {
      int links = 0;
      int rechts = a.length - 1;
      while (links < rechts) {
          int h = a[links];
          a[links] = a[rechts];
          a[rechts] = h;
          links++;
          rechts--;
      }
  }
  ```
  Vorbedingung für beide: `a != null`. n ist die Länge von `a`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der zusätzliche Speicherbedarf von `umdrehenNeu` liegt in O(n).'
        richtig: true
        erklaerung: 'Die Methode legt mit `new int[a.length]` ein neues Array mit n Plätzen an.'
      - text: 'Die Laufzeit von `umdrehenNeu` liegt in O(n²).'
        richtig: false
        erklaerung: 'Eine einzige Schleife mit n Durchläufen. Das Anlegen des neuen Arrays kostet ebenfalls O(n). Zusammen O(n).'
      - text: '`umdrehenNeu` verändert das übergebene Array.'
        richtig: false
        erklaerung: 'Aus `a` wird nur gelesen. Geschrieben wird ausschließlich in das neue Array `r`.'
      - text: 'Für ein Array der Länge 5 tauscht `umdrehenTausch` genau zweimal. Das mittlere Element bleibt an seinem Platz.'
        richtig: true
        erklaerung: 'Getauscht werden die Indizes 0 und 4, dann 1 und 3. Danach ist `links = rechts = 2`, und `2 < 2` ist falsch.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Zähle bei `umdrehenNeu` die Schleifen. Gibt es zwei verschachtelte Schleifen?'
      - wert: [f, f, f, r]
        meldung: 'Legt `umdrehenNeu` ein neues Array an? Wie viele Plätze hat es? Diese Plätze zählen zum zusätzlichen Speicher.'
hinweise:
  - Prüfe für jede Methode, ob sie ein neues Array anlegt und ob sie in `a` schreibt.
  - Verfolge `links` und `rechts` für ein Array der Länge 5. Die Schleife läuft, solange `links < rechts` gilt.
loesung: |
  **Ansatz:** Für jede Methode Schleifen zählen, neue Arrays suchen und Schreibzugriffe auf `a` suchen.
  ---
  `umdrehenNeu`: O(n) Laufzeit, O(n) zusätzlicher Speicher für `r`, liest `a` nur. Aussage 1 stimmt, Aussagen 2 und 3 sind falsch.
  ---
  `umdrehenTausch` bei Länge 5: Tausch der Indizes 0 und 4, dann 1 und 3. Bei `links = rechts = 2` endet die Schleife, das mittlere Element bleibt stehen. Aussage 4 stimmt. Die Methode braucht O(n) Laufzeit und nur O(1) zusätzlichen Speicher.
```

```aufgabe
id: ko-vgl-code-maxsumme
titel: Maximale Abschnittssumme in linearer Zeit
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Vorlesungsfolien WS2021/22 „Algorithmen“, maximale Abschnittssumme (als Aufgabe umgesetzt)
angabe: |
  Schreibe `maxAbschnittssumme(int[] a)`. Vorbedingung: `a` hat mindestens ein Element. Die Methode liefert die
  größte Summe eines Abschnitts aus direkt benachbarten Elementen. Beispiele: `{3, -5, 4, -1, 2, -6, 2}` ergibt 5,
  `{-4, -2, -7}` ergibt −2.

  **Laufzeit:** Ein versteckter Test verwendet ein Array mit 300 000 Elementen und das Zeitlimit von 2 Sekunden. Eine
  Lösung in O(n²) braucht dafür rund 45 Milliarden Additionen und auf üblichen Rechnern mehr als eine Minute. Ziel
  ist eine Lösung in O(n).
teile:
  - typ: code
    vorlage: |
      public class Abschnitt {
          public static int maxAbschnittssumme(int[] a) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Abschnitt {
          public static int maxAbschnittssumme(int[] a) {
              int max = a[0];
              int bisEnde = a[0];
              for (int pos = 1; pos < a.length; pos++) {
                  bisEnde = Math.max(bisEnde + a[pos], a[pos]);
                  max = Math.max(max, bisEnde);
              }
              return max;
          }
      }
    tests:
      - { aufruf: "maxAbschnittssumme(new int[]{3, -5, 4, -1, 2, -6, 2})", erwartet: "5" }
      - { aufruf: "maxAbschnittssumme(new int[]{-4, -2, -7})", erwartet: "-2", beschreibung: "alle Werte negativ" }
      - { aufruf: "maxAbschnittssumme(new int[]{7})", erwartet: "7", beschreibung: "ein einziges Element" }
      - { aufruf: "maxAbschnittssumme(new int[]{1, 2, 3})", erwartet: "6", beschreibung: "alle Werte positiv: das ganze Array" }
      - { aufruf: "maxAbschnittssumme(java.util.stream.IntStream.range(0, 300000).map(i -> i % 7 - 3).toArray())", erwartet: "6", beschreibung: "300 000 Elemente", versteckt: true }
    fehler:
      - { wert: 2, meldung: "Wenn alle Werte negativ sind, ist das Ergebnis der größte einzelne Wert. Startest du mit 0 statt mit a[0]?" }
      - { wert: 5, meldung: "Bei 300 000 Elementen ist eine Doppelschleife zu langsam: rund 45 Milliarden Additionen. Merke dir, wie in Variante 3, nur die beste Summe, die an der aktuellen Stelle endet." }
hinweise:
  - 'Lauf einmal von links nach rechts. Merke dir zwei Zahlen: die beste Summe, die genau an der aktuellen Stelle endet, und den bisherigen Rekord.'
  - 'An jeder Stelle: Entweder du verlängerst den Abschnitt von links, oder du beginnst neu mit `a[pos]`. `Math.max` wählt das Bessere. Beide Startwerte sind `a[0]`.'
loesung: |
  **Ansatz:** Variante 3 der Vorlesung: ein Durchlauf, zwei Merkvariablen. Damit ist die Laufzeit O(n).
  ---
  ```java
  int max = a[0];
  int bisEnde = a[0];
  for (int pos = 1; pos < a.length; pos++) {
      bisEnde = Math.max(bisEnde + a[pos], a[pos]);
      max = Math.max(max, bisEnde);
  }
  return max;
  ```
  ---
  Warum `a[0]` als Start? Bei `{-4, -2, -7}` ist jede Summe negativ, und die richtige Antwort ist −2. Ein Start mit 0 würde 0 liefern, obwohl kein Abschnitt diese Summe hat.
  ---
  Laufzeit: eine Schleife mit n − 1 Durchläufen, je zwei Aufrufe von `Math.max` mit O(1). Für 300 000 Elemente sind das knapp 300 000 Durchläufe mit je einer Handvoll Operationen. Variante 2 bräuchte rund 45 Milliarden Additionen. Auf einem Testrechner dauerte Variante 2 für dieses Array etwa 75 Sekunden, Variante 3 nur Millisekunden. Die genauen Zeiten hängen vom Rechner ab.
```

```aufgabe
id: ko-vgl-code-doppelte
titel: Doppelte Werte mit einem Hilfsarray finden
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Schreibe `enthaeltDoppelte(int[] a)`. Vorbedingung: Alle Werte liegen zwischen 0 und 999, beide Grenzen
  eingeschlossen. Die Methode liefert
  `true`, wenn ein Wert mindestens zweimal vorkommt, sonst `false`.

  Verwende **keine** Doppelschleife, sondern ein Hilfsarray `boolean[] gesehen = new boolean[1000];`. Darin merkst
  du dir, welche Werte schon vorgekommen sind. So brauchst du nur einen Durchlauf über `a`.
teile:
  - typ: code
    vorlage: |
      public class Doppelte {
          public static boolean enthaeltDoppelte(int[] a) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Doppelte {
          public static boolean enthaeltDoppelte(int[] a) {
              boolean[] gesehen = new boolean[1000];
              for (int i = 0; i < a.length; i++) {
                  if (gesehen[a[i]]) {
                      return true;
                  }
                  gesehen[a[i]] = true;
              }
              return false;
          }
      }
    tests:
      - { aufruf: "enthaeltDoppelte(new int[]{4, 17, 9, 17})", erwartet: "true" }
      - { aufruf: "enthaeltDoppelte(new int[]{4, 17, 9, 0})", erwartet: "false" }
      - { aufruf: "enthaeltDoppelte(new int[]{})", erwartet: "false", beschreibung: "leeres Array" }
      - { aufruf: "enthaeltDoppelte(new int[]{0, 999, 0})", erwartet: "true", beschreibung: "Randwerte 0 und 999" }
      - { aufruf: "enthaeltDoppelte(new int[]{5, 6, 7, 8, 9, 5})", erwartet: "true", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Merkst du dir jeden Wert mit `gesehen[a[i]] = true`, nachdem du ihn geprüft hast? Sonst erkennst du die zweite 17 nicht." }
      - { wert: 2, meldung: "Prüfst du zuerst, ob der Wert schon gesehen wurde, und merkst ihn dir erst danach? In umgekehrter Reihenfolge findest du jeden Wert sofort selbst und meldest auch ohne Doppelte `true`." }
      - { wert: 4, meldung: "Der Wert 0 ist ein gültiger Index. Das Hilfsarray braucht 1000 Plätze, damit auch 999 hineinpasst." }
hinweise:
  - '`gesehen[w]` ist `true`, wenn der Wert `w` schon einmal vorkam. Am Anfang ist alles `false`, denn das ist der Standardwert von `boolean`.'
  - 'Für jedes Element: zuerst nachsehen, ob `gesehen[a[i]]` schon `true` ist. Wenn ja, `return true`. Sonst den Platz auf `true` setzen.'
loesung: |
  **Ansatz:** Laufzeit gegen Speicher tauschen. Ein Hilfsarray mit einem Platz pro möglichem Wert ersetzt die innere Schleife.
  ---
  ```java
  boolean[] gesehen = new boolean[1000];
  for (int i = 0; i < a.length; i++) {
      if (gesehen[a[i]]) {
          return true;
      }
      gesehen[a[i]] = true;
  }
  return false;
  ```
  ---
  Laufzeit O(n) statt O(n²) mit der Doppelschleife. Dafür kostet das Hilfsarray 1000 zusätzliche Plätze, eine feste Zahl. Der Trick funktioniert nur, weil der Wertebereich bekannt und klein ist.
```

```aufgabe
id: ko-vgl-sortieren-rf
titel: "Quiz-Stil: kopieren, sortieren, vergleichen"
niveau: 3
lernziel: 7
kompetenz: begruenden
quelle: TUWEL-Test 2 WS2021 vom 13.01.2022, Frage 10 zu find1/find2 (nachgebaut, anderes Problem)
angabe: |
  Beide Methoden prüfen, ob in `a` ein Wert mehrfach vorkommt. Vorbedingung: `a != null`. n ist die Länge von `a`.
  `a.clone()` erzeugt eine Kopie des Arrays (Laufzeit und Speicher O(n)). `Arrays.sort(h)` sortiert `h` aufsteigend,
  die Laufzeit liegt im schlechtesten Fall in O(n log n).
  ```java
  static boolean doppelt1(int[] a) {
      for (int i = 0; i < a.length; i++) {
          for (int j = i + 1; j < a.length; j++) {
              if (a[i] == a[j]) {
                  return true;
              }
          }
      }
      return false;
  }

  static boolean doppelt2(int[] a) {
      int[] h = a.clone();
      Arrays.sort(h);
      for (int i = 0; i + 1 < h.length; i++) {
          if (h[i] == h[i + 1]) {
              return true;
          }
      }
      return false;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Für große Arrays ohne doppelte Werte ist `doppelt2` schneller als `doppelt1`.'
        richtig: true
        erklaerung: 'Ohne doppelte Werte läuft `doppelt1` ganz durch: O(n²). `doppelt2` braucht Kopieren O(n), Sortieren O(n log n) und Nachbarn vergleichen O(n), zusammen O(n log n). Das wächst langsamer als n².'
      - text: '`doppelt1` braucht O(n) zusätzlichen Speicher.'
        richtig: false
        erklaerung: 'Nur die Variablen `i` und `j`, also O(1).'
      - text: 'Sortiert man in `doppelt2` direkt `a` statt der Kopie, ändert sich das Array des Aufrufers.'
        richtig: true
        erklaerung: '`a` ist eine Referenz auf das Array des Aufrufers. `Arrays.sort(a)` sortiert genau dieses Array um.'
      - text: 'Für ein leeres Array wirft `doppelt2` eine Exception.'
        richtig: false
        erklaerung: 'Die Kopie eines leeren Arrays ist leer, und die Schleifenbedingung `0 + 1 < 0` ist sofort falsch. Ergebnis `false`.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Legt `doppelt1` irgendein Array an? Zusätzlicher Speicher entsteht hier nur durch neue Arrays.'
      - wert: [f, f, r, f]
        meldung: 'Bestimme die Klasse beider Methoden. Bei Teilen hintereinander bestimmt der größte Teil die Klasse. Welcher der drei Schritte in `doppelt2` ist der teuerste, und wächst er langsamer als n²?'
hinweise:
  - Zerlege `doppelt2` in drei Schritte, die hintereinander stehen, und bestimme für jeden die Laufzeit.
  - Ein sortiertes Array hat gleiche Werte immer direkt nebeneinander. Darum genügt danach ein Durchlauf.
loesung: |
  **Ansatz:** Für beide Methoden Laufzeit, zusätzlichen Speicher und Seiteneffekte bestimmen.
  ---
  `doppelt1`: O(n²) Laufzeit, O(1) zusätzlicher Speicher, kein Seiteneffekt. Aussage 2 ist falsch.
  ---
  `doppelt2`: O(n) + O(n log n) + O(n) = O(n log n) Laufzeit, O(n) Speicher für die Kopie. Für große n schlägt O(n log n) die O(n²) von `doppelt1`. Ohne Kopie würde `a` selbst sortiert, ein Seiteneffekt. Aussagen 1 und 3 stimmen.
  ---
  Leeres Array: Kopie leer, Schleife läuft nicht, Ergebnis `false`. Aussage 4 ist falsch.
```

```reflexion
frage: Variante 3 der Abschnittssumme ist schneller als Variante 2 und braucht nicht mehr Speicher. Warum lohnt es sich trotzdem, Variante 2 zu verstehen?
antwort: |
  Variante 2 ist der natürliche erste Gedanke: alle Abschnitte ansehen, aber die Summe klug weiterführen. Sie ist
  leicht als richtig zu erkennen und taugt deshalb als Probe für die schnelle Variante. Man kann beide mit kleinen
  Arrays vergleichen und so Fehler in Variante 3 finden. Außerdem zeigt der Schritt von Variante 1 zu Variante 2 das
  wichtigste Muster beim Beschleunigen: keine Arbeit doppelt machen. Variante 3 treibt diesen Gedanken weiter, bis
  nur noch ein Durchlauf übrig bleibt.
```


## Gemischte Wiederholung

Die Aufgaben dieses Abschnitts mischen die Komplexität mit Stoff aus früheren Kapiteln. Dazu gehören Schleifen
([Kapitel 4](/lernen/ep1/schleifen)) und Ziffern ([Kapitel 7](/lernen/ep1/ziffern)). Dazu gehören auch Rekursion
([Kapitel 10](/lernen/ep1/rekursion) und [Kapitel 11](/lernen/ep1/rekursion-vertieft)) und Arrays
([Kapitel 12](/lernen/ep1/arrays) und [Kapitel 13](/lernen/ep1/rekursion-arrays)). Im Quiz steht nicht dabei, aus
welchem Kapitel eine Frage kommt. Bei den drei Aufgaben „Welches Verfahren passt?“ musst du nichts ausrechnen. Du
entscheidest nur, welches Werkzeug passt. Diese Entscheidung ist oft der schwerste Schritt.

```aufgabe
id: ko-mix-dreieck-ausgabe
titel: Ein kleiner werdendes Dreieck
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Überlege danach, wie viele Sterne es allgemein für ein beliebiges n wären. Der
  Lösungsweg zeigt die Antwort.
teile:
  - typ: ausgabe
    code: |
      int n = 4;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n - i; j++) {
              System.out.print("*");
          }
          System.out.println();
      }
    loesung: |
      ****
      ***
      **
      *
    fehler:
      - wert: "****\n****\n****\n****"
        meldung: 'Die innere Grenze ist `n - i`. Mit jeder Zeile wird `i` größer, also wird die Zeile kürzer.'
      - wert: "*\n**\n***\n****"
        meldung: 'In der ersten Zeile ist `i = 0`, also läuft `j` bis `n - 0 = 4`. Die längste Zeile kommt zuerst.'
hinweise:
  - Für jedes `i` läuft die innere Schleife `n - i`-mal.
loesung: |
  **Ansatz:** Die innere Schleife läuft für `i = 0, 1, 2, 3` jeweils 4, 3, 2 und 1 Mal.
  ---
  Ausgabe: vier Zeilen mit 4, 3, 2 und 1 Stern. Zusammen 10 = 4 · 5 / 2 Sterne.
  ---
  Allgemein n + (n − 1) + … + 1 = n(n + 1)/2 Sterne, also $O(n^2)$.
```

```aufgabe
id: ko-mix-array-laufend
titel: Laufende Summen im Array
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  a) Was gibt das Programm aus? b) Welche Laufzeit hat die Schleife in Abhängigkeit von der Länge n des Arrays?
teile:
  - typ: ausgabe
    label: a) Ausgabe
    code: |
      int[] a = new int[6];
      for (int i = 1; i < a.length; i++) {
          a[i] = a[i - 1] + i;
      }
      System.out.println(Arrays.toString(a));
    loesung: |
      [0, 1, 3, 6, 10, 15]
    fehler:
      - wert: "[1, 3, 6, 10, 15, 21]"
        meldung: 'Die Schleife beginnt bei `i = 1`. `a[0]` wird nie beschrieben und behält den Standardwert 0.'
      - wert: "[0, 1, 2, 3, 4, 5]"
        meldung: 'Es wird nicht `i` gespeichert, sondern der vorige Wert `a[i - 1]` plus `i`. Die Werte wachsen immer schneller.'
  - typ: auswahl
    label: b) Laufzeit
    optionen: ['$O(1)$', '$O(n)$', '$O(n^2)$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'In jedem Durchlauf wird nur auf den vorigen Wert zugegriffen, nicht auf alle vorherigen. Das kostet O(1), die Schleife läuft n − 1 Mal.'
      - wert: 0
        meldung: 'Die Schleife läuft bis `a.length`. Die Zahl der Durchläufe wächst mit der Länge des Arrays.'
hinweise:
  - Lege eine Tabelle mit `i` und `a[i]` an. `a[0]` ist 0, weil neue `int`-Arrays mit 0 gefüllt sind (siehe [12.1 Was ist ein Array?](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge)).
  - Für die Laufzeit zählst du die Durchläufe. Jeder Durchlauf macht eine feste Zahl von Operationen.
loesung: |
  **Ansatz:** Jedes Element ist das vorige plus der Index.
  ---
  `a[1] = 0 + 1 = 1`, `a[2] = 1 + 2 = 3`, `a[3] = 6`, `a[4] = 10`, `a[5] = 15`. Ausgabe `[0, 1, 3, 6, 10, 15]`.
  ---
  n − 1 Durchläufe mit je konstanter Arbeit: $O(n)$. Die Werte selbst sind Dreieckszahlen, aber das ändert die Laufzeit nicht.
```

```aufgabe
id: ko-mix-baum-ausgaben
titel: Ausgaben einer verzweigten Rekursion
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  ```java
  static void g(int n) {
      if (n == 0) {
          return;
      }
      System.out.println(n);
      g(n - 1);
      g(n - 1);
  }
  ```
  a) Wie viele Zeilen gibt `g(4)` aus? b) In welcher Klasse liegt die Zahl der Ausgaben in Abhängigkeit von n?
teile:
  - typ: zahl
    label: a) Anzahl Zeilen
    loesung: "1 + 2 + 4 + 8"
    toleranz: 0.1
    fehler:
      - wert: "16"
        meldung: 'Die 16 Aufrufe `g(0)` geben nichts aus, sie kehren sofort zurück. Ausgaben machen nur die Aufrufe mit n > 0.'
      - wert: "4"
        meldung: 'Jeder Aufruf mit n > 0 ruft sich zweimal auf. Auf jeder Ebene gibt es doppelt so viele Aufrufe wie darüber.'
  - typ: auswahl
    label: b) Klasse
    optionen: ['$O(n)$', '$O(n^2)$', '$O(2^n)$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Das gilt für eine Rekursion mit einem Selbstaufruf. Hier sind es zwei, die Zahl verdoppelt sich mit jeder Ebene.'
      - wert: 1
        meldung: 'Rechne für n = 10: 2¹⁰ − 1 = 1023 Ausgaben, aber nur 100 bei n². Die Zahl wächst exponentiell.'
hinweise:
  - Zähle die Aufrufe je Ebene, wie in [11.4 Aufrufe und Ausgaben zählen](/lernen/ep1/rekursion-vertieft/aufrufe-und-ausgaben-zaehlen).
  - Ausgaben machen nur die Ebenen n = 4, 3, 2 und 1.
loesung: |
  **Ansatz:** Aufrufe je Ebene zählen: Jeder Aufruf mit n > 0 erzeugt zwei weitere.
  ---
  Ebene 4: 1 Ausgabe, Ebene 3: 2, Ebene 2: 4, Ebene 1: 8. Zusammen 15 = 2⁴ − 1.
  ---
  Allgemein 2ⁿ − 1 Ausgaben, also $O(2^n)$. Das ist dieselbe Zahl wie bei den Türmen von Hanoi.
```

```aufgabe
id: ko-mix-rekursion-speicher
titel: Rekursive Summe und der Aufrufstapel
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  ```java
  static int summe(int n) {
      if (n == 0) {
          return 0;
      }
      return n + summe(n - 1);
  }
  ```
  Vorbedingung: `n >= 0`. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`summe(5)` macht insgesamt 6 Aufrufe.'
        richtig: true
        erklaerung: '`summe(5)`, `summe(4)`, …, `summe(0)`: sechs Aufrufe.'
      - text: 'Die Laufzeit liegt in O(n).'
        richtig: true
        erklaerung: 'n + 1 Aufrufe mit je konstanter Arbeit.'
      - text: 'Der zusätzliche Speicher liegt in O(1), weil die Methode kein Array anlegt.'
        richtig: false
        erklaerung: 'Beim tiefsten Aufruf sind n + 1 Aufrufe gleichzeitig offen. Jeder belegt einen Rahmen auf dem Aufrufstapel: O(n).'
      - text: 'Eine Fassung mit einer Schleife und einer Summenvariable braucht nur O(1) zusätzlichen Speicher.'
        richtig: true
        erklaerung: 'Die Schleife braucht nur zwei Variablen, egal wie groß n ist.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Wo merkt sich Java, dass nach dem Selbstaufruf noch `n +` gerechnet werden muss? Jeder offene Aufruf braucht dafür Platz.'
      - wert: [f, r, f, r]
        meldung: 'Zähle die Aufrufe einzeln auf. Auch `summe(0)` ist ein Aufruf.'
hinweise:
  - Erinnere dich an den Aufrufstapel aus [10.2 Der Aufrufstapel](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg). Wie viele Aufrufe sind beim Basisfall gleichzeitig offen?
  - Zusätzlicher Speicher entsteht nicht nur durch Arrays, sondern auch durch offene Aufrufe.
loesung: |
  **Ansatz:** Aufrufe zählen und fragen, wie viele gleichzeitig offen sind.
  ---
  Aufrufe von 5 bis 0: sechs, also n + 1. Laufzeit O(n). Aussagen 1 und 2 stimmen.
  ---
  Beim Basisfall warten alle n + 1 Aufrufe auf ihr Ergebnis. Der Stapel braucht O(n) Platz, Aussage 3 ist falsch. Die Schleifenfassung braucht O(1), Aussage 4 stimmt.
```

```aufgabe
id: ko-mix-ziffern
titel: Quersumme einer großen Zahl
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Quersummen-Schleife aus [7.2 Die Ziffernschleife](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme)
  wird mit `n = 9000000` aufgerufen.
  ```java
  int summe = 0;
  while (n > 0) {
      summe += n % 10;
      n = n / 10;
  }
  ```
teile:
  - typ: zahl
    label: a) Wie oft läuft die Schleife?
    loesung: "7"
    toleranz: 0.1
    fehler:
      - wert: "9000000"
        meldung: 'Die Schleife zählt nicht n herunter, sondern streicht in jedem Durchlauf eine ganze Ziffer.'
      - wert: "6"
        meldung: 'Zähle die Ziffern von 9 000 000: eine 9 und sechs Nullen. Auch die Nullen werden einzeln abgespalten.'
  - typ: auswahl
    label: b) Laufzeit in Abhängigkeit vom Wert n
    optionen: ['$O(1)$', '$O(\log n)$', '$O(n)$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Eine zehnmal so große Zahl braucht nur einen Durchlauf mehr. Das ist viel langsamer als linear.'
      - wert: 0
        meldung: 'Größere Zahlen haben mehr Ziffern und brauchen mehr Durchläufe. Die Zahl der Durchläufe ist also nicht fest.'
hinweise:
  - Jeder Durchlauf entfernt die letzte Ziffer. Zähle die Ziffern.
  - Wie oft kann man eine Zahl durch 10 teilen, bis 0 herauskommt?
loesung: |
  **Ansatz:** Die Schleife läuft einmal pro Ziffer.
  ---
  9 000 000 hat 7 Ziffern: 9 000 000 → 900 000 → 90 000 → 9000 → 900 → 90 → 9 → 0. Sieben Durchläufe.
  ---
  Die Zahl der Ziffern wächst wie log₁₀ n. Laufzeit $O(\log n)$.
```

```aufgabe
id: ko-mix-teile-herrsche
titel: Das Maximum durch Halbieren
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Diese Methode sucht das Maximum nach dem Prinzip „Teile und herrsche“ aus
  [13.5 Teile und herrsche](/lernen/ep1/rekursion-arrays/teile-und-herrsche-das-array-halbieren). `bis` ist exklusiv.
  ```java
  static int maxTH(int[] a, int von, int bis) {
      if (bis - von == 1) {
          return a[von];
      }
      int mitte = (von + bis) / 2;
      return Math.max(maxTH(a, von, mitte), maxTH(a, mitte, bis));
  }
  ```
  Der Startaufruf ist `maxTH(a, 0, a.length)` mit `a.length = 8`.
teile:
  - typ: zahl
    label: a) Wie viele Aufrufe gibt es insgesamt, den Startaufruf eingeschlossen?
    loesung: "1 + 2 + 4 + 8"
    toleranz: 0.1
    fehler:
      - wert: "4"
        meldung: 'log₂ 8 + 1 = 4 ist die Zahl der **Ebenen**, nicht die Zahl der Aufrufe. Auf jeder Ebene gibt es doppelt so viele Aufrufe.'
      - wert: "8"
        meldung: '8 Aufrufe gibt es nur auf der untersten Ebene mit Abschnitten der Länge 1. Dazu kommen die Aufrufe darüber.'
  - typ: auswahl
    label: b) Laufzeit in Abhängigkeit von n = a.length
    optionen: ['$O(\log n)$', '$O(n)$', '$O(n \log n)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Halbieren führt zu log n, wenn man nur in **eine** Hälfte weitergeht, wie bei der binären Suche in [18.4 Binäre Suche: halbieren statt durchprobieren](/lernen/ep1/suchen/binaere-suche-halbieren-statt-durchprobieren). Hier geht es in beide Hälften weiter.'
      - wert: 2
        meldung: 'Jeder Aufruf macht nur konstant viel Arbeit (ein Vergleich, eine Rechnung). Es gibt etwa 2n Aufrufe, nicht n log n.'
hinweise:
  - Zeichne den Aufrufbaum. Die Abschnittslängen sind 8, dann 4 und 4, dann viermal 2, dann achtmal 1.
  - Jeder Aufruf macht ohne seine Selbstaufrufe nur eine feste Zahl von Schritten. Also zählt die Zahl der Aufrufe.
loesung: |
  **Ansatz:** Aufrufbaum zeichnen und Aufrufe je Ebene zählen.
  ---
  Ebenen mit Länge 8, 4, 2, 1: 1 + 2 + 4 + 8 = 15 Aufrufe, allgemein 2n − 1.
  ---
  Jeder Aufruf kostet O(1) ohne seine Selbstaufrufe. 2n − 1 Aufrufe ergeben $O(n)$. Das passt: Jedes Element muss für das Maximum ohnehin angesehen werden.
  ---
  Zusatz: Gleichzeitig offen sind höchstens 4 Aufrufe, einer pro Ebene. Der Stapel braucht also nur O(log n) Platz.
```

```aufgabe
id: ko-mix-verfahren-zaehlen
titel: "Welches Verfahren passt? Durchläufe zählen"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Du sollst die Laufzeit dieses Stücks bestimmen. Welches Vorgehen passt? Rechne nichts aus.
  ```java
  for (int i = 1; i < n; i *= 2) {
      for (int j = 0; j < n; j++) {
          sum += i + j;
      }
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - 'Äußere Anzahl mal innere Anzahl, weil die innere Grenze nicht von `i` abhängt.'
      - 'Für jedes `i` einzeln zählen und die Werte addieren, weil `i` in der äußeren Schleife verdoppelt wird.'
      - 'Nur die äußere Schleife zählen, weil die innere eine feste Grenze hat.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Einzeln zählen und addieren braucht man, wenn die **innere** Grenze von `i` abhängt. Hier lautet sie `j < n`, unabhängig von `i`.'
      - wert: 2
        meldung: 'Die innere Grenze ist `n`, nicht fest. Sie wächst mit n und muss mitgezählt werden.'
hinweise:
  - Prüfe, ob `i` in der inneren Schleife vorkommt.
loesung: |
  **Ansatz:** Hängt die innere Grenze von `i` ab? Nein, sie ist immer `n`.
  ---
  Also multiplizieren: außen log₂ n Durchläufe (Verdoppeln), innen n. Zusammen n log n, also $O(n \log n)$.
```

```aufgabe
id: ko-mix-verfahren-maximum
titel: "Welches Verfahren passt? Das Maximum von Messwerten"
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Wetterstation hat 10 Millionen Temperaturen in einem unsortierten Array gespeichert. Gesucht ist einmalig die
  höchste Temperatur. Welches Vorgehen ist das beste? Rechne nichts aus.
teile:
  - typ: auswahl
    optionen:
      - 'Jede Temperatur mit jeder anderen vergleichen und die nehmen, die nie kleiner ist.'
      - 'Das Array einmal durchlaufen und den bisher größten Wert merken.'
      - 'Das Array zuerst sortieren und dann das letzte Element nehmen.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Alle Paare zu vergleichen kostet O(n²). Bei 10 Millionen Werten sind das rund 5 · 10¹³ Vergleiche.'
      - wert: 2
        meldung: 'Auch ein schnelles Sortierverfahren braucht O(n log n), also mehr als ein Durchlauf. Außerdem verändert es das Array oder braucht eine Kopie. Für ein einziges Maximum ist das unnötig viel.'
hinweise:
  - Welche Klasse hat jedes Vorgehen? Mehr als einmal muss man kein Element ansehen.
loesung: |
  **Ansatz:** Die O-Klassen der drei Vorgehen vergleichen.
  ---
  Alle Paare: O(n²). Sortieren: O(n log n) plus Kopie oder Seiteneffekt. Einmal durchlaufen: O(n) ohne zusätzlichen Speicher.
  ---
  Das Maximum muss jedes Element mindestens einmal ansehen. Ein Durchlauf ist also optimal.
```

```aufgabe
id: ko-mix-verfahren-schranke
titel: "Welches Verfahren passt? Eine Schranke nachweisen"
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Du sollst nachweisen, dass f(n) = 4n + 9 in O(n) liegt. Welches Vorgehen ist ein Nachweis? Rechne nichts aus.
teile:
  - typ: auswahl
    optionen:
      - 'Das Programm für n = 1000 und n = 2000 laufen lassen und die Zeiten vergleichen.'
      - 'Ein c und ein n₀ angeben und zeigen, dass 4n + 9 ≤ c · n für alle n ≥ n₀ gilt.'
      - 'f(10) ausrechnen und mit 10 vergleichen.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Eine Messung zeigt nur, wie es auf einem Rechner für zwei Eingaben aussieht. Ein Nachweis muss für **alle** großen n gelten.'
      - wert: 2
        meldung: 'Ein einzelner Wert sagt nichts über das Wachstum. Die Definition verlangt eine Ungleichung für alle n ab n₀.'
hinweise:
  - Erinnere dich an die Definition der O-Notation aus [17.4 Die O-Notation](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt).
loesung: |
  **Ansatz:** Ein Nachweis muss die Definition erfüllen.
  ---
  Die Definition verlangt feste Zahlen c und n₀ mit f(n) ≤ c · n für alle n ≥ n₀. Messungen und Einzelwerte reichen nicht.
  ---
  Zum Beispiel c = 5 und n₀ = 9, denn 4n + 9 ≤ 5n gilt genau für n ≥ 9.
```

```aufgabe
id: ko-mix-luecke-log
titel: Eine Schleife logarithmisch machen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ergänze den Schleifenkopf so, dass die Schleife in O(log n) liegt. `j` soll dabei immer größer werden.
teile:
  - typ: lueckentext
    code: |
      int n = 100;
      int z = 0;
      for (int j = 1; j < n; ___) {
          z++;
      }
    luecken: [["j *= 2", "j = j * 2", "j = 2 * j", "j *= 3", "j = j * 3", "j = 3 * j", "j *= 10", "j = j * 10"]]
    fehler:
      - wert: ["j += 2"]
        meldung: '`j += 2` addiert immer dieselbe Zahl. Dann läuft die Schleife etwa n/2-mal, das ist O(n). Logarithmisch wird es erst durch Multiplizieren.'
      - wert: ["j++"]
        meldung: '`j++` ergibt n − 1 Durchläufe, also O(n). Die Variable muss in jedem Schritt um einen **Faktor** wachsen.'
hinweise:
  - Logarithmisch heißt, die Zahl der verbleibenden Schritte schrumpft um einen festen Faktor.
  - Multipliziere `j` in jedem Durchlauf mit einer festen Zahl größer als 1. Mit `j = 0` ginge das nicht, darum beginnt `j` bei 1.
loesung: |
  **Ansatz:** Statt eine feste Zahl zu addieren, wird mit einer festen Zahl multipliziert.
  ---
  Zum Beispiel `j *= 2`: `j` läuft 1, 2, 4, …, 64. Für n = 100 sind das 7 Durchläufe, etwa log₂ 100.
  ---
  Jeder Faktor größer als 1 ist richtig, etwa 3 oder 10. Die Basis des Logarithmus ändert die O-Klasse nicht.
```


## Prüfungsaufgaben

Diese Aufgaben folgen dem Stil der Prüfungsteile. Die Quizfragen sind den TUWEL-Tests 2021 bis 2023 nachgebaut
(vier Richtig/Falsch-Aussagen mit Teilpunkten, Single Choice mit drei Optionen), der Lückentext dem TUWEL-Test im
Sommersemester 2024. Das Format der Quiz 2026W ist noch nicht veröffentlicht. Im Quiz kannst du den Code nicht
ausführen, erlaubt sind laut TISS nur die Vorlesungsfolien und die Java-API. Arbeite deshalb mit Papier: Zähle jede
Schleife für ein konkretes n, zum Beispiel n = 8 und n = 16, und vergleiche, wie die Zahl wächst. Als eigener
Richtwert (nicht offiziell): etwa drei Minuten pro Richtig/Falsch-Frage.

```aufgabe
id: ko-pa-quiz-fragmente
titel: "Quiz: kleinste obere Schranken"
niveau: 3
lernziel: 4
kompetenz: verstehen
punkte: 2
quelle: TUWEL-Tests 2 WS2021 (13.01.2022, 20.01.2022, Vorbereitung), Frage 6 (Stil nachgebaut, neue Code-Stücke)
angabe: |
  Jeder Kommentar nennt eine O-Klasse für die Laufzeit des Stücks darunter. Er gilt nur dann als richtig, wenn er
  die kleinste obere Schranke in Abhängigkeit von n angibt. `n^2` steht für $n^2$, `n^3` für $n^3$. Bei A gilt n ≥ 5.
  Entscheide für jeden Kommentar. Zeitrichtwert: 4 Minuten.

  **A**
  ```java
  // Die Laufzeit liegt in O(n)
  for (int i = 0; i < n; i++) {
      for (int j = n; j > 0; j -= n / 5) { sum += i + j; }
  }
  ```
  **B**
  ```java
  // Die Laufzeit liegt in O(n^2)
  for (int i = 0; i < n; i += 2) {
      for (int j = 0; j < i; j++) { sum += i + j; }
  }
  ```
  **C**
  ```java
  // Die Laufzeit liegt in O(n)
  for (int i = n; i > 1; i /= 2) {
      for (int j = 0; j < n; j++) { sum += i + j; }
  }
  ```
  **D**
  ```java
  // Die Laufzeit liegt in O(n^3)
  int k = 0;
  for (int i = 0; i < n; i++) {
      while (k < n * n) { k++; sum += i + k; }
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der Kommentar zu A ist richtig.'
        richtig: true
        erklaerung: 'Die Schrittweite n/5 wächst mit n. Die innere Schleife läuft höchstens 9-mal (bei n = 9), bei großem n 5- oder 6-mal. Konstant mal n: O(n).'
      - text: 'Der Kommentar zu B ist richtig.'
        richtig: true
        erklaerung: '`i` nimmt 0, 2, 4, … an, die innere Schleife läuft jeweils `i`-mal. 0 + 2 + 4 + … ist etwa n²/4, also O(n²).'
      - text: 'Der Kommentar zu C ist richtig.'
        richtig: false
        erklaerung: 'Die äußere Schleife halbiert `i` und läuft etwa log₂ n Mal, die innere jedes Mal n-mal. Zusammen O(n log n), nicht O(n).'
      - text: 'Der Kommentar zu D ist richtig.'
        richtig: false
        erklaerung: '`k` wird nie zurückgesetzt. Die while-Schleife läuft insgesamt nur n²-mal, alle im ersten äußeren Durchlauf. Zusammen n² + n, also O(n²).'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Bei C läuft die innere Schleife jedes Mal ganz bis n. Wie oft läuft die äußere? Und bei D: Wird `k` jemals wieder kleiner?'
      - wert: [f, r, f, f]
        meldung: 'Zähle bei A die innere Schleife für n = 100: Schrittweite 20, Werte 100, 80, 60, 40, 20. Wird das bei n = 1000 mehr?'
hinweise:
  - Bestimme für jede Schleife, ob sie konstant, logarithmisch, linear oder quadratisch oft läuft. Achte auf Schrittweiten, die von n abhängen.
  - Bei D verfolge `k` über zwei äußere Durchläufe.
loesung: |
  **Ansatz:** Je Stück die Durchläufe beider Schleifen bestimmen und nach den Regeln zusammensetzen.
  ---
  A: innen konstant (höchstens 9), außen n: O(n), richtig. B: Summe der geraden Zahlen unter n, etwa n²/4: O(n²), richtig.
  ---
  C: außen log₂ n, innen n: O(n log n), der Kommentar O(n) ist falsch. D: `k` läuft insgesamt bis n², danach nie wieder: O(n²), der Kommentar O(n³) ist falsch.
```

```aufgabe
id: ko-pa-quiz-while
titel: "Quiz: while-Schleifen mit und ohne Neustart"
niveau: 3
lernziel: 4
kompetenz: verstehen
punkte: 2
quelle: TUWEL-Test WS2022/23 vom 13.01.2023, Frage 6 (Stil nachgebaut, neue Code-Stücke)
angabe: |
  Jeder Kommentar nennt eine O-Klasse für die Laufzeit des Stücks darunter. Richtig ist er nur, wenn es die kleinste
  obere Schranke in Abhängigkeit von n ist. In allen Stücken steht vorher `int i = 0, j = 0;`. Entscheide für jeden
  Kommentar. Zeitrichtwert: 4 Minuten.

  **A**
  ```java
  // Die Laufzeit liegt in O(n)
  while (i < n) {
      i++;
      while (j < i) { j++; sum += i + j; }
  }
  ```
  **B**
  ```java
  // Die Laufzeit liegt in O(n)
  while (i < n) {
      i++;
      j = 0;
      while (j < i) { j++; sum += i + j; }
  }
  ```
  **C**
  ```java
  // Die Laufzeit liegt in O(n log n)
  while (i < n) {
      i++;
      j = n;
      while (j > 1) { j = j / 2; sum += i + j; }
  }
  ```
  **D**
  ```java
  // Die Laufzeit liegt in O(n^2)
  while (i < n * n) {
      i += n;
      sum += i;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der Kommentar zu A ist richtig.'
        richtig: true
        erklaerung: '`j` läuft immer nur bis zum aktuellen `i` nach und wird nie zurückgesetzt. Insgesamt läuft die innere Schleife n-mal, je einmal pro äußerem Durchlauf. O(n).'
      - text: 'Der Kommentar zu B ist richtig.'
        richtig: false
        erklaerung: 'Durch `j = 0` läuft die innere Schleife im i-ten Durchlauf i-mal. 1 + 2 + … + n = n(n + 1)/2, also O(n²).'
      - text: 'Der Kommentar zu C ist richtig.'
        richtig: true
        erklaerung: 'Die innere Schleife halbiert `j` ab n, das sind etwa log₂ n Durchläufe, und sie beginnt jedes Mal neu. n · log n.'
      - text: 'Der Kommentar zu D ist richtig.'
        richtig: false
        erklaerung: '`i` springt in Schritten von n bis n². Das sind nur n Durchläufe, also O(n).'
    fehler:
      - wert: [f, f, r, f]
        meldung: 'Verfolge A für n = 4. Wie oft läuft die innere Schleife im ersten, zweiten, dritten und vierten äußeren Durchlauf?'
      - wert: [r, r, r, r]
        meldung: 'Bei B steht `j = 0;` vor der inneren Schleife. Damit beginnt sie jedes Mal von vorne. Bei D: Wie groß ist die Schrittweite?'
hinweise:
  - Suche in jedem Stück die Zeile, die `j` verändert, bevor die innere Schleife startet. Gibt es keine, läuft `j` nur weiter.
  - Bei D teile die Grenze n² durch die Schrittweite n.
loesung: |
  **Ansatz:** Für jedes Stück klären, ob die innere Variable neu startet, und dann zählen.
  ---
  A: kein Neustart, `j` folgt `i`. Innen insgesamt n Durchläufe: O(n), richtig. B: Neustart mit 0, innen i-mal: n(n + 1)/2, O(n²), falsch.
  ---
  C: Neustart bei n, innen log₂ n: O(n log n), richtig. D: n² / n = n Durchläufe: O(n), falsch.
```

```aufgabe
id: ko-pa-quiz-praefix
titel: "Quiz: zwei Methoden für laufende Summen"
niveau: 3
lernziel: 7
kompetenz: verstehen
punkte: 2
quelle: TUWEL-Test 2 WS2021, Frage 10 (Stil nachgebaut, neues Problem)
angabe: |
  Beide Methoden liefern ein neues Array `s`, in dem `s[k]` die Summe `a[0] + a[1] + … + a[k]` ist. Vorbedingung:
  `a != null`. n ist die Länge von `a`. Zeitrichtwert: 3 Minuten.
  ```java
  static int[] summen1(int[] a) {
      int[] s = new int[a.length];
      for (int k = 0; k < a.length; k++) {
          for (int i = 0; i <= k; i++) {
              s[k] += a[i];
          }
      }
      return s;
  }

  static int[] summen2(int[] a) {
      int[] s = new int[a.length];
      int laufend = 0;
      for (int k = 0; k < a.length; k++) {
          laufend += a[k];
          s[k] = laufend;
      }
      return s;
  }
  ```
  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Die Laufzeit von `summen1` liegt in O(n²).'
        richtig: true
        erklaerung: 'Die innere Schleife läuft k + 1 Mal. 1 + 2 + … + n = n(n + 1)/2, also O(n²).'
      - text: 'Der zusätzliche Speicher von `summen2` liegt in O(1).'
        richtig: false
        erklaerung: 'Die Methode legt das Ergebnis-Array `s` mit n Plätzen an. Das ist O(n).'
      - text: 'Beide Methoden liefern für jedes Array dasselbe Ergebnis.'
        richtig: true
        erklaerung: '`summen1` rechnet jede Summe neu aus, `summen2` führt sie weiter. Das Ergebnis ist gleich.'
      - text: 'Verdoppelt man n, braucht `summen1` etwa doppelt so lange.'
        richtig: false
        erklaerung: 'Bei O(n²) bedeutet doppeltes n etwa die vierfache Laufzeit.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Zählt das Ergebnis-Array zum zusätzlichen Speicher? Es wird mit `new` neu angelegt und hat n Plätze.'
      - wert: [r, f, r, r]
        meldung: 'Rechne für n = 1000 und n = 2000: etwa 500 000 und 2 000 000 innere Durchläufe. Ist das doppelt so viel?'
hinweise:
  - Zähle die inneren Durchläufe von `summen1` für k = 0, 1, 2, … und addiere.
  - Zusätzlicher Speicher ist alles, was mit `new` angelegt wird, auch wenn es zurückgegeben wird.
loesung: |
  **Ansatz:** Laufzeit durch Zählen, Speicher durch neue Arrays, Ergebnis durch einen kleinen Test bestimmen.
  ---
  `summen1`: n(n + 1)/2 Additionen, O(n²). Bei doppeltem n etwa viermal so lange. Aussage 1 stimmt, Aussage 4 nicht.
  ---
  `summen2`: O(n) Laufzeit, aber O(n) Speicher für `s`. Aussage 2 ist falsch. Beide liefern dieselben Summen, zum Beispiel für `{2, 5, 1}` jeweils `[2, 7, 8]`. Aussage 3 stimmt.
```

```aufgabe
id: ko-pa-quiz-lueckentext
titel: "Quiz: Lückentext zu den Klassen"
niveau: 3
lernziel: 5
kompetenz: verstehen
punkte: 2
quelle: TUWEL-Test Sommersemester 2024 (Format Lückentext, Inhalt neu)
angabe: |
  Ergänze die Lücken mit einer O-Klasse in der Schreibweise `O(...)`, zum Beispiel `O(n)` oder `O(n^2)`. Schreib den
  Logarithmus als `log n`. Zeitrichtwert: 3 Minuten.
teile:
  - typ: lueckentext
    text: |
      Eine Schleife, die eine Zahl n so lange halbiert, bis 1 übrig bleibt, liegt in ___.
      Die lineare Suche liegt im schlechtesten Fall in ___.
      Zwei verschachtelte Schleifen, die beide unabhängig voneinander bis n laufen, liegen in ___.
      Eine Rekursion, bei der jeder Aufruf mit n > 0 sich zweimal mit n − 1 aufruft, macht ___ Aufrufe.
      Eine Methode, die nur auf `a[0]` und `a.length` zugreift, liegt in ___.
    luecken:
      - ["O(log n)", "O(logn)", "O(log(n))"]
      - ["O(n)"]
      - ["O(n^2)", "O(n*n)", "O(n²)"]
      - ["O(2^n)", "O(2ⁿ)"]
      - ["O(1)"]
    fehler:
      - wert: ["O(n)", "O(n)", "O(n^2)", "O(2^n)", "O(1)"]
        meldung: 'Halbieren bis 1 braucht nur log₂ n Schritte, nicht n/2. Bei n = 1024 sind es 10.'
      - wert: ["O(log n)", "O(n)", "O(n^2)", "O(n^2)", "O(1)"]
        meldung: 'Zwei Selbstaufrufe verdoppeln die Zahl der Aufrufe mit jeder Ebene. Das ergibt 2ⁿ⁺¹ − 1, also exponentiell.'
hinweise:
  - Zähle für jede Beschreibung die Schritte für n = 8 und n = 16 und vergleiche.
  - 'Logarithmisch heißt: Ein fester Anteil fällt in jedem Schritt weg. Exponentiell heißt: Jeder Schritt verdoppelt.'
loesung: |
  **Ansatz:** Jede Beschreibung einer Klasse zuordnen.
  ---
  Halbieren: O(log n). Lineare Suche im schlechtesten Fall: O(n). Zwei unabhängige Schleifen bis n: O(n^2).
  ---
  Zwei Selbstaufrufe: 2ⁿ⁺¹ − 1 Aufrufe, O(2^n). Nur `a[0]` und `a.length`: O(1).
```

```aufgabe
id: ko-pa-verdopplung-sc
titel: "Quiz: Messwerte deuten"
niveau: 3
lernziel: 5
kompetenz: anwenden
punkte: 1
angabe: |
  Ein Programm wurde gemessen: n = 1000 braucht 2 Sekunden, n = 2000 braucht 8 Sekunden, n = 4000 braucht
  32 Sekunden. Welche Klasse passt am besten zu diesen Messwerten? Zeitrichtwert: 2 Minuten.
teile:
  - typ: auswahl
    optionen: ['$O(n)$', '$O(n^2)$', '$O(n^3)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Bei O(n) würde doppeltes n die Zeit nur verdoppeln: 2 s, 4 s, 8 s. Hier vervierfacht sie sich.'
      - wert: 2
        meldung: 'Bei O(n³) würde doppeltes n die Zeit verachtfachen: 2 s, 16 s, 128 s. Die Messung zeigt nur den Faktor 4.'
hinweise:
  - Teile jede Zeit durch die vorige. Welcher Faktor entsteht bei doppeltem n?
  - Für O(nᵏ) ist der Faktor bei Verdopplung 2ᵏ.
loesung: |
  **Ansatz:** Den Faktor bei Verdopplung von n bestimmen.
  ---
  8 / 2 = 4 und 32 / 8 = 4. Bei jeder Verdopplung von n vervierfacht sich die Zeit.
  ---
  2ᵏ = 4 ergibt k = 2. Am besten passt $O(n^2)$.
```

```aufgabe
id: ko-pa-code-paarsumme
titel: "Programmieren: ein Paar mit vorgegebener Summe"
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 4
angabe: |
  Schreibe `hatPaarMitSumme(int[] a, int ziel)`. Vorbedingung: `a` ist **aufsteigend sortiert**. Die Methode liefert
  `true`, wenn es zwei Elemente an **verschiedenen** Indizes gibt, deren Summe `ziel` ist, sonst `false`.
  Beispiele: `{1, 3, 4, 6, 9}` mit `ziel = 10` ergibt `true` (1 + 9), mit `ziel = 8` ergibt `false`.

  **Laufzeit:** Ein versteckter Test verwendet 300 000 Elemente ohne passendes Paar und das Zeitlimit von 2 Sekunden.
  Alle Paare zu probieren, ist zu langsam. Nutze die Sortierung aus und arbeite mit zwei Indizes von beiden Enden, wie in
  [13.4 Zwei Indizes](/lernen/ep1/rekursion-arrays/zwei-indizes-von-beiden-enden-zur-mitte). Zeitrichtwert: 15 Minuten.
teile:
  - typ: code
    vorlage: |
      public class Paarsumme {
          public static boolean hatPaarMitSumme(int[] a, int ziel) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Paarsumme {
          public static boolean hatPaarMitSumme(int[] a, int ziel) {
              int links = 0;
              int rechts = a.length - 1;
              while (links < rechts) {
                  int summe = a[links] + a[rechts];
                  if (summe == ziel) {
                      return true;
                  }
                  if (summe < ziel) {
                      links++;
                  } else {
                      rechts--;
                  }
              }
              return false;
          }
      }
    tests:
      - { aufruf: "hatPaarMitSumme(new int[]{1, 3, 4, 6, 9}, 10)", erwartet: "true" }
      - { aufruf: "hatPaarMitSumme(new int[]{1, 3, 4, 6, 9}, 8)", erwartet: "false" }
      - { aufruf: "hatPaarMitSumme(new int[]{5}, 10)", erwartet: "false", beschreibung: "ein Element darf nicht mit sich selbst kombiniert werden" }
      - { aufruf: "hatPaarMitSumme(new int[]{2, 2}, 4)", erwartet: "true", beschreibung: "gleiche Werte an verschiedenen Indizes" }
      - { aufruf: "hatPaarMitSumme(new int[]{}, 0)", erwartet: "false", beschreibung: "leeres Array" }
      - { aufruf: "hatPaarMitSumme(java.util.stream.IntStream.range(0, 300000).map(i -> 2 * i).toArray(), 1199997)", erwartet: "false", beschreibung: "300 000 Elemente", versteckt: true }
    fehler:
      - { wert: 3, meldung: "Für {5} und ziel 10 darfst du die 5 nicht mit sich selbst addieren. Die beiden Indizes müssen verschieden sein, also links < rechts." }
      - { wert: 6, meldung: "Bei 300 000 Elementen sind alle Paare rund 45 Milliarden Versuche. Mit zwei Indizes von beiden Enden bewegt sich in jedem Schritt einer davon, das sind höchstens n Schritte." }
hinweise:
  - 'Starte mit `links = 0` und `rechts = a.length - 1`. Ist die Summe zu klein, hilft nur ein größerer linker Wert. Ist sie zu groß, hilft nur ein kleinerer rechter Wert.'
  - 'Die Schleife läuft, solange `links < rechts`. In jedem Durchlauf rückt genau ein Index um eins zur Mitte. Das ergibt höchstens n − 1 Durchläufe.'
loesung: |
  **Ansatz:** Zwei Indizes von beiden Enden. Die Sortierung sagt, in welche Richtung man gehen muss. Laufzeit O(n), zusätzlicher Speicher O(1).
  ---
  ```java
  int links = 0;
  int rechts = a.length - 1;
  while (links < rechts) {
      int summe = a[links] + a[rechts];
      if (summe == ziel) {
          return true;
      }
      if (summe < ziel) {
          links++;
      } else {
          rechts--;
      }
  }
  return false;
  ```
  ---
  **Warum geht dabei kein Paar verloren?** Angenommen, `a[links] + a[rechts] < ziel`. Weil das Array sortiert ist, ist dann auch jede Summe `a[links] + a[x]` mit `x < rechts` zu klein. Der Wert `a[links]` kann also in keinem Paar vorkommen und wird verworfen. Bei einer zu großen Summe gilt dasselbe für `a[rechts]`.
  ---
  Probe mit `{1, 3, 4, 6, 9}` und 8. Zuerst ist 1 + 9 = 10 zu groß, dann 1 + 6 = 7 zu klein. Danach ist 3 + 6 = 9 zu groß und 3 + 4 = 7 zu klein. Jetzt ist `links = rechts`, Ergebnis `false`. Die Doppelschleife wäre O(n²).
```

```aufgabe
id: ko-pa-gespraech
titel: "Feedbackgespräch: die Laufzeit deiner Lösung"
niveau: 3
lernziel: 7
kompetenz: begruenden
punkte: 2
angabe: |
  Im Feedbackgespräch zeigt dir die Tutorin deine Lösung zu „Doppelte Werte mit einem Hilfsarray finden“ aus
  [17.7 Algorithmen vergleichen](/lernen/ep1/komplexitaet/algorithmen-vergleichen-laufzeit-und-speicher). Sie fragt:
  a) Welche Laufzeit und welchen zusätzlichen Speicher hat deine Lösung, und wie ist es bei der Doppelschleife?
  b) Was würdest du ändern, wenn die Werte bis zu einer Milliarde groß sein dürften? Antworte in ganzen Sätzen.
  Zeitrichtwert: 5 Minuten.
teile:
  - typ: text
    muster: |
      a) Meine Lösung läuft einmal durch das Array und macht pro Element eine feste Zahl von Schritten. Die Laufzeit
      liegt deshalb in O(n). Dafür brauche ich ein Hilfsarray mit 1000 Plätzen. Das ist eine feste Größe, also O(1)
      zusätzlicher Speicher in Bezug auf n. Die Doppelschleife vergleicht jedes Paar und braucht O(n²) Zeit, aber nur
      O(1) Speicher. Ich habe also Speicher gegen Laufzeit getauscht.
      b) Ein Hilfsarray mit einer Milliarde Plätzen wäre viel zu groß. Ich würde dann das Array kopieren, die Kopie
      sortieren und benachbarte Werte vergleichen. Das kostet O(n log n) Zeit und O(n) Speicher für die Kopie, und das
      Original bleibt unverändert.
hinweise:
  - Nenne für beide Lösungen Laufzeit und zusätzlichen Speicher getrennt.
  - 'Für b): Welche Idee aus „Kopieren, sortieren, vergleichen“ braucht keinen bekannten Wertebereich?'
loesung: |
  **Ansatz:** Für jede Lösung Laufzeit und Speicher einzeln begründen, dann die Grenze des Tricks benennen.
  ---
  a) Ein Durchlauf mit konstanter Arbeit pro Element: O(n). Das Hilfsarray hat eine feste Größe, unabhängig von n. Die Doppelschleife braucht O(n²) Zeit und O(1) Speicher.
  ---
  b) Der Trick braucht einen Platz pro möglichem Wert. Bei einer Milliarde möglicher Werte wären das rund eine Milliarde `boolean`-Plätze, also etwa ein Gigabyte. Besser: Kopie sortieren und Nachbarn vergleichen, O(n log n) Zeit und O(n) Speicher.
```


## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Die Laufzeit eines Algorithmus bestimmt man durch Zählen, nicht durch Messen. Man zählt, wie
  oft die innerste Zeile in Abhängigkeit von n läuft, und zwar im schlechtesten Fall. (2) Die O-Notation behält nur den
  am schnellsten wachsenden Summanden und lässt konstante Faktoren weg. Gemeint ist immer die kleinste obere Schranke.
  (3) Bei Schleifen gilt: verschachtelt multiplizieren, hintereinander addieren. Feste Grenzen und Schrittweiten wie
  n / 3 ergeben konstante, Multiplizieren und Halbieren logarithmische Schleifen. Gute Antworten sind auch die
  Reihenfolge der Klassen oder der Unterschied zwischen Laufzeit und zusätzlichem Speicher.
```

:::zusammenfassung
1. Ein **Algorithmus** ist ein endliches, eindeutiges, ausführbares Verfahren, das für jede erlaubte Eingabe terminiert. Determiniert betrifft das Ergebnis, deterministisch den Ablauf. Ein Problem kann viele Algorithmen haben.
2. Laufzeiten werden **gezählt**, nicht gemessen: Wie oft läuft die innerste Zeile in Abhängigkeit von der Eingabegröße n? Feste Grenzen ergeben ein Produkt, abhängige Grenzen eine Summe wie 1 + 2 + … + m = m(m + 1)/2.
3. Bei gleicher Eingabegröße unterscheidet man **besten, durchschnittlichen und schlechtesten Fall**. Aussagen zur Laufzeit beziehen sich meist auf den schlechtesten Fall, denn er ist eine Garantie.
4. f(n) liegt in **O(g(n))**, wenn ab einer Stelle n₀ gilt: f(n) ≤ c · g(n) für ein festes c > 0. Man behält den am schnellsten wachsenden Summanden und lässt Faktoren weg. Gefragt ist die **kleinste** obere Schranke.
5. **Von der Schleife zur Klasse:** feste Grenze O(1), Grenze n mit fester Schrittweite O(n), Schrittweite n / k nur konstant viele Durchläufe, also O(1), Multiplizieren oder Halbieren O(log n). Verschachtelt multiplizieren, hintereinander addieren. Bei `while` prüfen, ob die innere Variable zurückgesetzt wird.
6. Die Klassen wachsen in der Reihenfolge O(1), O(log n), O(n), O(n log n), O(n²), O(n³), O(2ⁿ). Bei doppeltem n vervierfacht sich O(n²), verachtfacht sich O(n³), und O(log n) braucht nur einen Schritt mehr.
7. Neben der Laufzeit zählt der **zusätzliche Speicher**: neue Arrays und offene rekursive Aufrufe. Man kann Speicher gegen Laufzeit tauschen, etwa mit einem Hilfsarray. Methoden, die selbst Schleifen enthalten, sind keine einfachen Operationen.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Terminierung durch Tests „bewiesen“**, obwohl eine Eingabe wie `b = 0` endlos läuft. Training: „Terminiert das für jedes n?“ in [17.1 Was ist ein Algorithmus?](/lernen/ep1/komplexitaet/was-ist-ein-algorithmus).
2. **Durchläufe um eins verzählt**, etwa bei `<=` nur Ende − Start. Training: „Eine Schleife von 12 bis 47“ und „Schrittweite 3“ in [17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen).
3. **Abhängige innere Grenze wie eine feste behandelt** und n · n statt n(n + 1)/2 gezählt. Training: „Die Dreieckszahl als Term“ in [17.2 Laufzeit messen und Schritte zählen](/lernen/ep1/komplexitaet/laufzeit-messen-und-schritte-zaehlen).
4. **Mit dem besten Fall argumentiert** oder schlechtesten Fall mit großem n verwechselt. Training: „Welcher Aufruf ist ein schlechtester Fall?“ und „Eine Suche ohne Abbruch“ in [17.3 Bester, mittlerer und schlechtester Fall](/lernen/ep1/komplexitaet/bester-mittlerer-und-schlechtester-fall).
5. **Konstante Faktoren als eigene Klasse** gesehen, etwa O(n/2) für besser als O(n) gehalten. Training: „Die Größenordnung von 7n + 20“ in [17.4 Die O-Notation](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt).
6. **Den ersten statt den größten Summanden** behalten. Training: „Die Größenordnung von 3n² + 100n + 5“ und „Wann überholt n² den Summanden 40n?“ in [17.4 Die O-Notation](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt).
7. **Eine wahre, aber nicht die kleinste Schranke** als richtig beurteilt. Training: „Welche Schranken stimmen?“ in [17.4 Die O-Notation](/lernen/ep1/komplexitaet/die-o-notation-nur-das-wachstum-zaehlt) und „Quiz: kleinste obere Schranken“ in den Prüfungsaufgaben.
8. **Verschachtelt automatisch als O(n²)** eingestuft, obwohl eine Grenze fest ist. Training: „Rückwärts mit fester innerer Schleife“ in [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse).
9. **Schrittweite oder Grenze n / 4 für logarithmisch** gehalten. Training: „Quiz-Stil: vier Kommentare“ in [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse).
10. **Fehlendes Zurücksetzen in while-Schleifen** übersehen. Training: „Mit und ohne Zurücksetzen zählen“ und „Drei while-Schleifen und zwei Rücksetzungen“ in [17.5 Von der Schleife zur O-Klasse](/lernen/ep1/komplexitaet/von-der-schleife-zur-o-klasse).
11. **Halbieren als n / 2 Schritte** gezählt. Training: „Wie oft halbieren?“ und „Halbierungen zählen“ in [17.6 Typische Komplexitätsklassen](/lernen/ep1/komplexitaet/typische-komplexitaetsklassen-und-ihr-wachstum).
12. **Verdopplung falsch hochgerechnet**, etwa bei O(n²) mal 2 statt mal 4. Training: „Vorhersage für ein quadratisches Verfahren“ in [17.6 Typische Komplexitätsklassen](/lernen/ep1/komplexitaet/typische-komplexitaetsklassen-und-ihr-wachstum).
13. **Speicher des Aufrufstapels oder eines Ergebnis-Arrays vergessen.** Training: „Rekursive Summe und der Aufrufstapel“ in der Gemischten Wiederholung und „Quiz-Stil: zwei Arten umzudrehen“ in [17.7 Algorithmen vergleichen](/lernen/ep1/komplexitaet/algorithmen-vergleichen-laufzeit-und-speicher).
14. **Die versteckte Schleife in einem Methodenaufruf** übersehen. Training: „Quiz-Stil: kopieren, sortieren, vergleichen“ in [17.7 Algorithmen vergleichen](/lernen/ep1/komplexitaet/algorithmen-vergleichen-laufzeit-und-speicher).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher, auch
ohne Computer. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich mit 3 einschätzt, aber Fehler
machst, liegt deine wichtigste Baustelle.

1. Die Eigenschaften eines Algorithmus an einem Verfahren prüfen.
2. Ausführungen in Schleifen exakt zählen, auch als Term in n.
3. Besten, durchschnittlichen und schlechtesten Fall angeben.
4. Aus einer Zählfunktion die O-Klasse ablesen und c und n₀ angeben.
5. Die kleinste obere Schranke von Schleifen bestimmen, auch bei besonderen Schrittweiten und while-Schleifen.
6. Die Klassen ordnen und Verdopplungen vorhersagen.
7. Algorithmen nach Laufzeit und Speicher vergleichen und eine Methode mit Laufzeitschranke schreiben.
8. Quizaussagen zu Laufzeit, Speicher und Seiteneffekten beurteilen und die eigene Lösung begründen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber zu den Aufgabenblättern ein **Feedbackgespräch** (siehe
[22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab)). Dort kann
auch die Frage kommen, wie viel Arbeit deine Lösung macht und warum. Die Karten zeigen mögliche Fragen dazu. Formuliere zuerst
laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie mit den
Kernpunkten.

```karten
- id: ko-karte-algorithmus
  frage: Was ist ein Algorithmus, und welche Eigenschaften muss er haben?
  antwort: |
    Ein Algorithmus ist ein endliches, schrittweises Verfahren, das aus einer Eingabe eine Ausgabe berechnet. Jeder
    Schritt ist eindeutig und ausführbar, und es ist klar, welcher Schritt als Nächstes kommt. Außerdem muss er für jede
    erlaubte Eingabe nach endlich vielen Schritten anhalten. Ein Beispiel ist der Euklidische Algorithmus für den ggT.
  kernpunkte:
    - endlich, eindeutig, ausführbar
    - terminiert für jede erlaubte Eingabe
    - Beispiel nennen
- id: ko-karte-determiniert
  frage: Was ist der Unterschied zwischen determiniert und deterministisch? Nenne ein Verfahren, das nur eines davon ist.
  antwort: |
    Determiniert heißt: Gleiche Eingabe liefert immer das gleiche Ergebnis. Deterministisch heißt: Auch der Ablauf ist
    eindeutig, zu jedem Zeitpunkt gibt es höchstens eine Fortsetzung. Jedes deterministische Verfahren ist determiniert.
    Umgekehrt nicht: Die Summe eines Arrays in beliebiger Reihenfolge zu bilden, liefert immer dasselbe Ergebnis, aber
    der Weg ist nicht festgelegt.
  kernpunkte:
    - determiniert betrifft das Ergebnis
    - deterministisch betrifft den Ablauf
    - Gegenbeispiel Summe in beliebiger Reihenfolge
- id: ko-karte-terminierung
  frage: Warum reicht Testen nicht, um zu zeigen, dass dein Algorithmus terminiert? Wie begründest du es stattdessen?
  antwort: |
    Tests prüfen nur einzelne Eingaben, es gibt aber unendlich viele. Die Subtraktions-Fassung des ggT besteht viele Tests
    und hängt trotzdem bei b = 0. Ich suche deshalb eine ganze Zahl, die in jedem Durchlauf echt kleiner wird und nicht
    unter eine Grenze fallen kann. Beim Euklidischen Algorithmus mit Rest ist das b, denn a % b ist immer kleiner als b
    und nie negativ.
  kernpunkte:
    - unendlich viele Eingaben
    - Gegenbeispiel mit b = 0
    - schrumpfende ganze Zahl als Argument
- id: ko-karte-zaehlen
  frage: Warum zählt man Operationen, statt die Laufzeit mit der Stoppuhr zu messen?
  antwort: |
    Messungen hängen vom Rechner, von der Java-Version und von der gerade laufenden Last ab. Sie gelten nur für die
    gemessenen Eingaben, und man muss den Algorithmus erst fertig programmieren. Die Zahl der Ausführungen hängt dagegen
    nur vom Code und von n ab. Wichtig ist vor allem, wie oft die innerste Zeile läuft.
  kernpunkte:
    - Messung hängt vom Rechner ab
    - Messung nur für einzelne Eingaben
    - Zählen der innersten Zeile in Abhängigkeit von n
- id: ko-karte-faelle
  frage: Was sind bester, durchschnittlicher und schlechtester Fall bei der linearen Suche, und warum interessiert meist der schlechteste?
  antwort: |
    Alle drei Fälle beziehen sich auf Arrays derselben Länge n. Im besten Fall steht der gesuchte Wert vorne, dann reicht
    ein Vergleich. Im schlechtesten Fall steht er hinten oder fehlt, dann sind es n Vergleiche. Im Durchschnitt sind es bei
    vorhandenem Wert (n + 1)/2. Der schlechteste Fall ist eine Garantie für jede Eingabe und meist leichter zu bestimmen.
  kernpunkte:
    - 1, (n + 1)/2 und n Vergleiche
    - alle Fälle bei gleichem n
    - schlechtester Fall als Garantie
- id: ko-karte-o-definition
  frage: Was bedeutet f(n) liegt in O(g(n))? Erkläre es an 6n + 8.
  antwort: |
    Es gibt einen festen Faktor c und eine Stelle n₀, sodass f(n) für alle n ab n₀ höchstens c · g(n) ist. Für 6n + 8 und
    g(n) = n wähle ich c = 7. Dann gilt 6n + 8 ≤ 7n genau für n ≥ 8, also ist n₀ = 8. Damit liegt 6n + 8 in O(n). Für
    kleine n darf f größer sein, es zählt nur das Verhalten ab n₀.
  kernpunkte:
    - festes c und Stelle n₀
    - Ungleichung für alle n ab n₀
    - Beispiel mit c = 7 und n₀ = 8
- id: ko-karte-faktoren
  frage: Warum darf man in der O-Notation konstante Faktoren und kleinere Summanden weglassen?
  antwort: |
    Faktoren hängen davon ab, was man als eine Operation zählt und wie schnell der Rechner ist. Sie ändern nicht, wie die
    Arbeit wächst: Bei 3n und bei 50n verdoppelt doppeltes n die Arbeit. Kleinere Summanden werden für große n
    bedeutungslos. Bei n²/2 − n/2 macht der zweite Summand bei n = 1000 nur 500 von 500 000 aus.
  kernpunkte:
    - Faktor hängt von Zählweise und Rechner ab
    - Wachstum bleibt gleich
    - kleinere Summanden verschwinden bei großem n
- id: ko-karte-kleinste-schranke
  frage: Ist der Kommentar „Die Laufzeit liegt in O(n²)“ für eine einfache Schleife bis n richtig?
  antwort: |
    Mathematisch ist n auch in O(n²), denn O ist nur eine obere Schranke. Im Quiz und in der Vorlesung ist aber die
    kleinste obere Schranke gemeint, und die ist O(n). Deshalb gilt der Kommentar dort als falsch. Eine zu große Schranke
    hilft nicht bei der Wahl zwischen zwei Algorithmen.
  kernpunkte:
    - O ist eine obere Schranke
    - gefragt ist die kleinste
    - im Quiz also falsch
- id: ko-karte-schrittweite
  frage: Warum liegt eine Schleife mit j += n / 2 in O(1), eine mit j *= 2 in O(log n) und eine mit j += 2 in O(n)?
  antwort: |
    Entscheidend ist, wie oft die Schrittweite in die Strecke bis n passt. Bei n / 2 wächst die Schrittweite mit n, also
    passt sie immer etwa zweimal hinein: konstant. Bei j *= 2 verdoppelt sich j, und man braucht log₂ n Verdopplungen bis n.
    Bei j += 2 ist die Schrittweite fest, also braucht man etwa n / 2 Schritte, das ist linear. Bei n / 2 muss n ≥ 2 sein,
    sonst ist die Schrittweite 0.
  kernpunkte:
    - Verhältnis von Strecke zu Schrittweite
    - Multiplizieren ergibt Logarithmus
    - Schrittweite 0 bei kleinem n
- id: ko-karte-while-reset
  frage: Zwei verschachtelte while-Schleifen laufen beide bis n. Warum ist das nicht immer O(n²)?
  antwort: |
    Bei while steht die innere Variable vor den Schleifen. Wird sie nach dem inneren Durchlauf nicht zurückgesetzt, steht
    sie danach schon bei n, und die innere Schleife läuft nie wieder. Dann läuft sie insgesamt nur n-mal, und das Ganze
    liegt in O(n). Erst eine Zeile wie j = 0 vor jedem inneren Durchlauf macht daraus O(n²). Eine Rücksetzung auf einen
    Zwischenwert wie j = i kann wieder etwas anderes ergeben.
  kernpunkte:
    - innere Variable steht vor der Schleife
    - ohne Zurücksetzen nur einmal n
    - mit j = 0 dann n²
- id: ko-karte-logarithmus
  frage: Was bedeutet O(log n), und woran erkennst du es im Code? Hängt es von der Basis ab?
  antwort: |
    log₂ n ist die Zahl, wie oft man n halbieren kann, bis 1 übrig bleibt. Im Code erkennt man es an einer Variable, die
    in jedem Schritt mit einem festen Faktor multipliziert oder durch ihn geteilt wird, etwa beim Ziffernzählen mit n / 10
    aus [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme). Die Basis spielt keine Rolle, weil Logarithmen zu verschiedenen Basen sich nur um einen festen Faktor
    unterscheiden, etwa log₂ n ≈ 3,32 · log₁₀ n.
  kernpunkte:
    - wie oft halbieren bis 1
    - Multiplizieren oder Teilen im Code
    - Basis ist nur ein Faktor
- id: ko-karte-verdopplung
  frage: Dein Programm braucht für 10 000 Elemente eine Sekunde. Wie lange braucht es für 20 000, wenn es in O(n), O(n²) oder O(2ⁿ) liegt?
  antwort: |
    Bei O(n) etwa zwei Sekunden, bei O(n²) etwa vier, denn (2n)² = 4n². Bei O(2ⁿ) verdoppelt schon jedes zusätzliche
    Element die Zeit. Zehntausend Elemente mehr bedeuten zehntausend Verdopplungen, das wäre praktisch endlos. Darum gelten
    exponentielle Verfahren schon bei mittleren n als unbrauchbar.
  kernpunkte:
    - linear verdoppelt
    - quadratisch vervierfacht
    - exponentiell verdoppelt pro Element
- id: ko-karte-speicher-rekursion
  frage: Deine rekursive Methode legt kein Array an. Warum kann ihr zusätzlicher Speicher trotzdem mit n wachsen?
  antwort: |
    Jeder Aufruf belegt einen Rahmen auf dem Aufrufstapel aus
    [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg), bis er zurückkehrt. Bei einer linearen
    Rekursion wie der Fakultät sind beim Basisfall n + 1 Aufrufe gleichzeitig offen. Der Speicher liegt also in O(n),
    während eine Schleife mit O(1) auskommt. Bei sehr großem n kann der Stapel sogar überlaufen.
  kernpunkte:
    - ein Rahmen pro offenem Aufruf
    - n + 1 offene Aufrufe beim Basisfall
    - Schleife braucht O(1)
- id: ko-karte-abschnittssumme
  frage: Wie kommt man bei der maximalen Abschnittssumme von O(n³) über O(n²) zu O(n)?
  antwort: |
    Die erste Variante summiert jeden Abschnitt neu, das sind drei Schleifen. Die zweite führt die Summe beim Verschieben
    des rechten Randes weiter, so fällt die innerste Schleife weg. Die dritte merkt sich nur die beste Summe, die an der
    aktuellen Stelle endet. An jeder Stelle verlängert sie diesen Abschnitt oder beginnt neu. Das braucht einen einzigen
    Durchlauf. Die Idee dahinter ist immer, keine Arbeit doppelt zu machen.
  kernpunkte:
    - Summe weiterführen statt neu berechnen
    - beste Summe bis zur aktuellen Stelle
    - keine Arbeit doppelt machen
- id: ko-karte-speicher-zeit
  frage: Wie kann man Speicher gegen Laufzeit tauschen? Gib ein Beispiel und nenne die Grenze dieses Tricks.
  antwort: |
    Beim Suchen doppelter Werte vergleicht die Doppelschleife alle Paare in O(n²) mit O(1) Speicher. Liegen die Werte
    zwischen 0 und 999, merke ich mir in einem boolean-Array mit 1000 Plätzen, welche Werte schon vorkamen. Dann reicht ein
    Durchlauf in O(n). Der Trick braucht einen Platz pro möglichem Wert und funktioniert deshalb nur bei einem kleinen,
    bekannten Wertebereich.
  kernpunkte:
    - Hilfsarray mit einem Platz pro Wert
    - O(n) statt O(n²)
    - nur bei kleinem Wertebereich
```
