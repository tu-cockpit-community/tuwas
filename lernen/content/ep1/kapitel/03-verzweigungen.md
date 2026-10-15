---
nummer: 3
titel: Verzweigungen und Bedingungen
kurz: if und else, Vergleiche, &&, || und !, Kurzschlussauswertung, Mehrfachverzweigungen, switch mit Fallthrough und das Rückwärtsrechnen von Startwerten wie im Quiz.
teil: grundlagen
stunden: 6
pruefungsgewicht: 2
voraussetzungen: [werkzeuge, ausdruecke]
lernziele:
  - die Ausgabe eines Programms mit if und else Zeile für Zeile herleiten, auch wenn geschweifte Klammern fehlen oder die Einrückung täuscht
  - Bedingungen mit Vergleichen und den Operatoren &&, || und ! auswerten, die Kurzschlussauswertung nutzen und eine Bedingung korrekt verneinen
  - Mehrfachverzweigungen mit else if in der richtigen Reihenfolge schreiben und zwischen verschachtelten und hintereinander stehenden if-Anweisungen unterscheiden
  - für eine Stelle im Programm angeben, welche Bedingung dort sicher gilt, und daraus Startwerte bestimmen oder prüfen, die eine vorgegebene Ausgabe erzeugen
  - die Ausgabe einer switch-Anweisung mit und ohne break und mit default herleiten, auch bei Fallthrough
  - eine switch-Anweisung mit zusammengefassten case-Marken schreiben, etwa für die Tage eines Monats mit Schaltjahrregel
  - String-Aufgaben ohne Schleife mit indexOf, lastIndexOf, substring und Verzweigungen lösen
  - die typischen Zusatzfragen des Feedbackgesprächs zu if und switch richtig beantworten und mit einem Codebeispiel begründen
---

**Worum geht es?** Bisher hat jedes Programm alle Zeilen von oben nach unten genau einmal ausgeführt.
Ein echtes Programm muss aber **entscheiden** können: Ist die Eingabe gültig? Ist das Jahr ein
Schaltjahr? Kommt im Text ein Punkt vor? Für solche Entscheidungen gibt es **Verzweigungen**. Eine
Verzweigung führt einen Teil des Programms nur dann aus, wenn eine Bedingung erfüllt ist. In diesem
Kapitel lernst du die beiden Verzweigungen von Java kennen: `if` und `switch`.

**Was kommt in der Prüfung?** Verzweigungen stecken in fast jeder Aufgabe von EP1. Drei Stellen
prüfen sie direkt:

- **Quiz 1:** Eine typische Frage zeigt ein Programm mit verschachtelten `if`-Anweisungen und fragt, welche Startwerte die Ausgabe „AD“ erzeugen. Dafür lernst du in [3.4 Was gilt an dieser Stelle?](/lernen/ep1/verzweigungen/was-gilt-an-dieser-stelle-startwerte-rueckwaerts-finden) ein festes Verfahren.
- **Aufgabenblatt 1:** Hier löst du String-Aufgaben ohne Schleife und baust einen Kalender mit `switch`, der Schaltjahre kennt.
- **Feedbackgespräch:** Die Tutorinnen und Tutoren fragen zum Beispiel: „Darf man das `break` weglassen?“ oder „Muss es einen `default`-Zweig geben?“. Die Antworten übst du mit den Karten am Kapitelende.

**Was du schon können musst:** Du brauchst Variablen, die Datentypen `int`, `boolean`, `char` und
`String` sowie die Operatoren `/` und `%`. Außerdem brauchst du die String-Methoden `length`,
`charAt`, `indexOf` und `substring`. Das alles steht in [Kapitel 2](/lernen/ep1/ausdruecke). Wie man
ein Programm übersetzt und startet, steht in [Kapitel 1](/lernen/ep1/werkzeuge).

:::vorwissen
Die folgenden sechs Fragen zeigen dir, ob du die Werkzeuge aus [Kapitel 2](/lernen/ep1/ausdruecke)
sicher beherrschst. Jede Frage zeigt ein kurzes Programm. Du schreibst genau das hin, was es auf der
Konsole ausgibt. Wenn eine Frage nicht klappt, wiederhole zuerst den verlinkten Stoff. Die Kurzform
für alle Fragen: `System.out.println(...)` gibt den Wert in der Klammer aus und beginnt danach eine
neue Zeile.
:::

```aufgabe
id: vz-ein-modulo
titel: Rest einer Division
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Der Operator `%` liefert den Rest einer Ganzzahldivision.
  (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      System.out.println(17 % 5);
      System.out.println(20 % 4);
    loesung: |
      2
      0
    fehler:
      - wert: "3\n5"
        meldung: |
          Du hast das Ergebnis der Division berechnet, nicht den Rest. `17 / 5` ist `3`, aber `17 % 5`
          fragt: Was bleibt übrig, wenn man so viele Fünfer wie möglich abzieht?
loesung: |
  `17 % 5`: In 17 passen drei Fünfer (15). Es bleiben 2 übrig.
  ---
  `20 % 4`: In 20 passen genau fünf Vierer. Es bleibt 0 übrig. Ein Rest von 0 heißt: 20 ist durch 4 teilbar.
  Genau diesen Test brauchst du in diesem Kapitel oft.
```

```aufgabe
id: vz-ein-modulo-negativ
titel: Rest mit negativer Zahl
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      System.out.println(-7 % 2);
    loesung: |
      -1
    fehler:
      - wert: "1"
        meldung: |
          In Java hat der Rest immer das Vorzeichen der Zahl **vor** dem `%`. `-7 / 2` ergibt `-3`
          (Richtung 0 gerundet), und `-7 - (-3 · 2)` ist `-1`.
loesung: |
  Java rechnet zuerst die Ganzzahldivision: `-7 / 2` ergibt `-3`, weil Java Richtung 0 rundet.
  ---
  Der Rest ist das, was fehlt: `-7 - (-3) · 2 = -7 + 6 = -1`. Der Rest hat das Vorzeichen von `-7`.
  Das wird in [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung) wichtig, wenn du prüfst, ob eine Zahl ungerade ist.
```

```aufgabe
id: vz-ein-boolean
titel: Ein Vergleich als Wert
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Ein Vergleich wie `a > b` ergibt einen Wert vom Typ `boolean`.
  (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      int a = 4;
      int b = 9;
      boolean groesser = a > b;
      System.out.println(groesser);
      System.out.println(a * 2 < b);
    loesung: |
      false
      true
    fehler:
      - wert: "true\ntrue"
        meldung: Ist 4 größer als 9? Lies `a > b` als Frage „Ist a größer als b?“. Die Antwort ist `true` oder `false`.
loesung: |
  `a > b` fragt: Ist 4 größer als 9? Nein, also `false`.
  ---
  `a * 2 < b`: Zuerst wird gerechnet, dann verglichen. `8 < 9` ist wahr, also `true`.
```

```aufgabe
id: vz-ein-indexof
titel: Position eines Zeichens
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? `indexOf` liefert die Position des ersten Vorkommens. Die Zählung beginnt bei 0.
  (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      String wort = "Kakao";
      System.out.println(wort.indexOf('a'));
      System.out.println(wort.indexOf('x'));
    loesung: |
      1
      -1
    fehler:
      - wert: "2\n-1"
        meldung: Die Zählung beginnt bei 0. `K` steht an Position 0, das erste `a` an Position 1.
      - wert: "1\n0"
        meldung: Kommt ein Zeichen nicht vor, liefert `indexOf` den Wert `-1`. Die `0` ist eine gültige Position, nämlich die erste.
loesung: |
  Die Positionen in `"Kakao"` sind `K`=0, `a`=1, `k`=2, `a`=3, `o`=4. Das erste `a` steht an Position 1.
  ---
  `'x'` kommt nicht vor. Dann liefert `indexOf` den Wert `-1`.
```

```aufgabe
id: vz-ein-substring
titel: Teilstring herausschneiden
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? `substring(a, b)` liefert die Zeichen von Position `a` bis **vor** Position `b`.
  (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      String s = "Laptop";
      System.out.println(s.substring(0, 3));
      System.out.println(s.substring(3));
    loesung: |
      Lap
      top
    fehler:
      - wert: "Lapt\ntop"
        meldung: Das Zeichen an Position `b` gehört nicht mehr dazu. `substring(0, 3)` liefert die Positionen 0, 1 und 2.
loesung: |
  `substring(0, 3)` nimmt die Positionen 0, 1, 2: `L`, `a`, `p`. Ergebnis `Lap`.
  ---
  `substring(3)` nimmt alles ab Position 3 bis zum Ende: `top`.
```

```aufgabe
id: vz-ein-equals
titel: Strings vergleichen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      String a = "Wien";
      String b = "wien";
      System.out.println(a.equals(b));
      System.out.println(a.equals("Wien"));
    loesung: |
      false
      true
    fehler:
      - wert: "true\ntrue"
        meldung: '`equals` unterscheidet Groß- und Kleinschreibung. `W` und `w` sind verschiedene Zeichen.'
loesung: |
  `equals` vergleicht Zeichen für Zeichen. `"Wien"` und `"wien"` unterscheiden sich im ersten Zeichen, also `false`.
  ---
  `"Wien"` und `"Wien"` sind Zeichen für Zeichen gleich, also `true`.
```

## Die if-Anweisung

```aufgabe
id: vz-if-check-vergleich
titel: Gerade oder nicht?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung von `%` und `boolean` aus [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      int n = 14;
      System.out.println(n % 2 == 0);
      System.out.println(n % 3 == 0);
    loesung: |
      true
      false
    fehler:
      - wert: "0\n2"
        meldung: Du hast nur den Rest ausgegeben. Der Vergleich `== 0` macht daraus eine Ja-Nein-Frage mit der Antwort `true` oder `false`.
loesung: |
  `14 % 2` ist `0`. Der Vergleich `0 == 0` ist wahr, also `true`.
  ---
  `14 % 3` ist `2`, denn 14 = 4 · 3 + 2. Der Vergleich `2 == 0` ist falsch, also `false`.
```

Stell dir eine Wetter-App vor. Sie soll „Frostgefahr!“ anzeigen, aber nur, wenn die Temperatur
unter 0 Grad liegt. Bei 5 Grad soll die Meldung nicht erscheinen. Das Programm muss also eine
**Bedingung** prüfen und abhängig vom Ergebnis entscheiden, ob es eine Anweisung ausführt. Genau das
macht die `if`-Anweisung. Das englische Wort *if* heißt „wenn“ oder „falls“.

### Bedingungen und Vergleichsoperatoren

Eine **Bedingung** ist ein Ausdruck, dessen Wert `true` (wahr) oder `false` (falsch) ist. Sie hat
also den Typ `boolean`. Die einfachsten Bedingungen sind **Vergleiche**. Java kennt sechs
Vergleichsoperatoren:

|Java|Bedeutung|Beispiel für true|Beispiel für false|
|---|---|---|---|
|`a<b`|kleiner|`2<13`|`2<2`|
|`a>b`|größer|`13>2`|`2>13`|
|`a<=b`|kleiner&nbsp;oder&nbsp;gleich|`2<=2`|`3<=2`|
|`a>=b`|größer&nbsp;oder&nbsp;gleich|`3>=2`|`2>=3`|
|`a==b`|gleich|`2==2`|`2==3`|
|`a!=b`|ungleich|`2!=3`|`2!=2`|

Zwei Zeichen fallen auf. Das **doppelte** Gleichheitszeichen `==` vergleicht. Das einfache `=` kennst
du aus [Kapitel 2](/lernen/ep1/ausdruecke) als Zuweisung: Es speichert einen Wert in einer Variablen.
Das Zeichen `!=` liest man „ungleich“. Das Ausrufezeichen bedeutet in Java „nicht“.

:::definition[Bedingung]
Eine **Bedingung** ist ein Ausdruck vom Typ `boolean`. Sie hat beim Ausführen genau einen der beiden
Werte `true` oder `false`.

- **Beispiel:** `temperatur < 0` ist eine Bedingung. Bei `temperatur = -3` ist ihr Wert `true`, bei `temperatur = 5` ist er `false`.
- **Nichtbeispiel:** `temperatur + 1` ist **keine** Bedingung. Das Ergebnis ist eine Zahl vom Typ `int`, kein Wahrheitswert.
- **Nichtbeispiel:** `temperatur = 0` ist **keine** Bedingung, sondern eine Zuweisung. Sie speichert 0 in der Variablen.
:::

```aufgabe
id: vz-if-check-bedingung
titel: Ist das eine Bedingung?
niveau: 1
art: check
angabe: |
  Es gilt `int alter = 17;`. Welcher Ausdruck ist eine Bedingung, hat also den Typ `boolean`?
teile:
  - typ: auswahl
    optionen: ['`alter >= 18`', '`alter + 18`', '`alter = 18`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`alter + 18` ist eine Rechnung. Das Ergebnis ist die Zahl 35, kein Wahrheitswert.'
      - wert: 2
        meldung: Ein einzelnes `=` ist eine Zuweisung. Sie speichert 18 in `alter` und fragt nichts.
loesung: |
  Nur ein Vergleich liefert `true` oder `false`. `alter >= 18` fragt „Ist alter mindestens 18?“ und ergibt hier `false`.
  ---
  `alter + 18` ergibt die Zahl 35, und `alter = 18` ist eine Zuweisung vom Typ `int`.
```

### Die einfache if-Anweisung

So sieht eine `if`-Anweisung aus:

```java
if (temperatur < 0) {
    System.out.println("Frostgefahr!");
}
```

Wir gehen jedes Zeichen durch:

- `if` ist ein **Schlüsselwort**, also ein Wort mit fester Bedeutung in Java. Es leitet die Verzweigung ein.
- Die runden Klammern `( )` umschließen die Bedingung. Sie sind Pflicht.
- Die geschweiften Klammern `{ }` bilden einen **Block**. Ein Block fasst beliebig viele Anweisungen zu einer Einheit zusammen.
- Die Anweisungen im Block sind um vier Leerzeichen eingerückt. Java braucht die Einrückung nicht, aber Menschen sehen so sofort, was zum `if` gehört.

Hinter der schließenden runden Klammer steht **kein** Strichpunkt. Warum das wichtig ist, zeigt
dir ein Achtung-Kasten weiter in diesem Abschnitt.

:::definition[if-Anweisung]
Die **if-Anweisung** `if (Bedingung) { Block }` wertet zuerst die Bedingung aus.

- Ist der Wert `true`, führt Java den Block aus und macht danach hinter der schließenden `}` weiter.
- Ist der Wert `false`, überspringt Java den ganzen Block und macht sofort hinter der `}` weiter.

**Beispiel:** `if (x > 0) { x = 0; }` setzt `x` nur dann auf 0, wenn `x` positiv war.
**Nichtbeispiel:** `if x > 0 { x = 0; }` ist keine gültige if-Anweisung. Die runden Klammern um die Bedingung fehlen, der Compiler meldet einen Fehler.
:::

:::beispiel[Frostwarnung, Zeile für Zeile]
```java
int temperatur = -3;
if (temperatur < 0) {
    System.out.println("Frostgefahr!");
}
System.out.println("Gemessen: " + temperatur);
```

1. Zeile 1 legt die Variable `temperatur` an und speichert `-3`.
2. Zeile 2 wertet die Bedingung aus: Ist `-3 < 0`? Ja, der Wert ist `true`.
3. Weil die Bedingung `true` ist, führt Java den Block aus. Zeile 3 gibt `Frostgefahr!` aus.
4. Zeile 4 schließt den Block. Java macht in Zeile 5 weiter und gibt `Gemessen: -3` aus.

Die Ausgabe ist also:

```text
Frostgefahr!
Gemessen: -3
```

Mit `int temperatur = 5;` ist die Bedingung `5 < 0` falsch. Java überspringt die Zeilen 3 und 4 und
gibt nur `Gemessen: 5` aus. Zeile 5 läuft in beiden Fällen, weil sie **nach** dem Block steht.
:::

### Zwei Wege: if mit else

Oft willst du nicht nur „etwas tun oder nichts tun“, sondern zwischen **zwei** Möglichkeiten wählen.
Dafür hängst du an die `if`-Anweisung einen `else`-Zweig an. Das englische *else* heißt „sonst“.

```java
if (Bedingung) {
    // Block 1: läuft, wenn die Bedingung true ist
} else {
    // Block 2: läuft, wenn die Bedingung false ist
}
```

Die Zeilen mit `//` sind **Kommentare**. Java ignoriert alles ab `//` bis zum Zeilenende. Von den
beiden Blöcken läuft **immer genau einer**: nie beide und nie keiner. Hinter `else` steht keine
eigene Bedingung, denn `else` fängt einfach alle übrigen Fälle auf.

:::beispiel[Gerade oder ungerade]
```java
int zahl = 7;
if (zahl % 2 == 0) {
    System.out.println(zahl + " ist gerade");
} else {
    System.out.println(zahl + " ist ungerade");
}
System.out.println("fertig");
```

1. Zeile 1 speichert `7` in `zahl`.
2. Zeile 2 rechnet zuerst `7 % 2`. Das ist `1`, denn 7 = 3 · 2 + 1. Dann vergleicht Java `1 == 0`. Das ist `false`.
3. Weil die Bedingung `false` ist, überspringt Java den ersten Block (Zeile 3) und springt in den `else`-Block.
4. Zeile 5 gibt `7 ist ungerade` aus. Hier verbindet `+` die Zahl mit dem Text, wie in [Kapitel 2](/lernen/ep1/ausdruecke).
5. Nach der schließenden `}` in Zeile 6 geht es in Zeile 7 weiter: `fertig`.

```text
7 ist ungerade
fertig
```

Probe mit `zahl = 10`: `10 % 2` ist `0`, der Vergleich `0 == 0` ist `true`. Ausgabe `10 ist gerade` und `fertig`.
:::

Ein `else` gehört immer zu einem `if`. **Nichtbeispiele:** Ein `else` ohne vorheriges `if` übersetzt
der Compiler nicht. Auch `else (zahl > 3) { ... }` ist falsch, weil `else` keine Bedingung bekommt.
Wer eine zweite Bedingung prüfen will, schreibt `else if (...)`. Das lernst du in
[3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).

:::merke[So leitest du die Ausgabe einer if-Anweisung her]
1. Notiere die aktuellen Werte aller Variablen.
2. Setze die Werte in die Bedingung ein und rechne sie bis zu `true` oder `false` aus.
3. Bei `true` läuft der erste Block. Bei `false` läuft der `else`-Block oder, ohne `else`, gar nichts.
4. Danach geht es immer hinter der schließenden `}` der ganzen if-Anweisung weiter.
:::

```aufgabe
id: vz-if-gefuehrt-rabatt
titel: Rabatt an der Kassa
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Geschäft gibt ab einem Einkauf von 50 Euro einen Rabatt von 5 Euro. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int betrag = 48;
      if (betrag >= 50) {
          betrag = betrag - 5;
          System.out.println("Rabatt!");
      } else {
          System.out.println("Noch " + (50 - betrag) + " Euro bis zum Rabatt");
      }
      System.out.println("Zu zahlen: " + betrag);
    loesung: |
      Noch 2 Euro bis zum Rabatt
      Zu zahlen: 48
    fehler:
      - wert: "Rabatt!\nZu zahlen: 43"
        meldung: Ist 48 wirklich größer oder gleich 50? Setze den Wert ein und rechne die Bedingung aus, bevor du einen Block betrittst.
      - wert: "Noch 2 Euro bis zum Rabatt"
        meldung: Die letzte Zeile steht nach dem ganzen `if`-`else`. Sie läuft in jedem Fall.
hinweise:
  - Rechne zuerst die Bedingung `48 >= 50` aus. Danach weißt du, welcher der beiden Blöcke läuft.
gefuehrt:
  - text: Welchen Wert hat die Bedingung `betrag >= 50` bei `betrag = 48`? Gib `true` oder `false` ein.
    teil: { typ: ausgabe, code: "System.out.println(48 >= 50);", loesung: "false" }
    erklaerung: 48 ist kleiner als 50, also ist `48 >= 50` falsch.
  - text: Welcher Block läuft deshalb? Denke kurz nach, bevor du weiterklickst.
    erklaerung: Bei `false` überspringt Java den ersten Block und führt den `else`-Block aus. Die Zeilen 3 und 4 laufen nicht, `betrag` bleibt 48.
  - text: Was gibt die Zeile im `else`-Block aus? Rechne die Klammer zuerst aus.
    teil: { typ: ausgabe, code: "int betrag = 48;\nSystem.out.println(\"Noch \" + (50 - betrag) + \" Euro bis zum Rabatt\");", loesung: "Noch 2 Euro bis zum Rabatt" }
    erklaerung: Die Klammer `(50 - betrag)` wird zuerst gerechnet und ergibt 2. Dann hängt `+` die Texte an.
  - text: Was gibt die letzte Zeile aus?
    teil: { typ: ausgabe, code: "int betrag = 48;\nSystem.out.println(\"Zu zahlen: \" + betrag);", loesung: "Zu zahlen: 48" }
    erklaerung: Die letzte Zeile steht nach der ganzen Verzweigung und läuft immer. `betrag` wurde nicht verändert.
loesung: |
  **Ansatz:** Werte einsetzen, Bedingung ausrechnen, dann genau einen der beiden Blöcke ausführen.
  ---
  `48 >= 50` ist `false`. Der erste Block mit dem Rabatt läuft nicht. Der `else`-Block gibt `Noch 2 Euro bis zum Rabatt` aus, weil `50 - 48 = 2`.
  ---
  Die letzte Zeile steht hinter der Verzweigung und läuft immer: `Zu zahlen: 48`.
  Probe mit `betrag = 60`: Dann wäre die Bedingung `true`, die Ausgabe `Rabatt!` und `Zu zahlen: 55`.
```

### Drei Fallen, die fast jeder einmal erwischt

:::achtung[Ein Gleichheitszeichen statt zwei]
Jemand will prüfen, ob die Arbeit fertig ist, und schreibt:

```java
boolean fertig = false;
if (fertig = true) {
    System.out.println("Abgeben!");
}
```

Das Programm gibt `Abgeben!` aus, obwohl `fertig` am Anfang `false` war. Der Grund: `fertig = true`
ist eine **Zuweisung**. Sie speichert `true` in `fertig`, und der Wert der Zuweisung ist ebenfalls
`true`. Die Bedingung ist damit immer wahr. Richtig ist `if (fertig == true)` oder kürzer
`if (fertig)`. Bei Zahlen fällt der Fehler schneller auf: `if (x = 5)` übersetzt der Compiler nicht.
Er meldet `incompatible types: int cannot be converted to boolean`.
:::

:::achtung[Ein Strichpunkt nach der Bedingung]
```java
int x = 7;
if (x > 10); {
    System.out.println("x ist groß");
}
```

Das Programm gibt `x ist groß` aus, obwohl 7 nicht größer als 10 ist. Der Strichpunkt direkt nach
`(x > 10)` ist eine **leere Anweisung**, also eine Anweisung, die nichts tut. Sie ist der ganze
**Rumpf** des `if`. So heißt der Teil, den das `if` bei `true` ausführt. Der Block danach gehört
gar nicht mehr zum `if` und läuft immer. Korrektur: den Strichpunkt nach der Klammer löschen.
:::

:::achtung[Geschweifte Klammern weggelassen]
Ohne `{ }` gehört zum `if` nur die **eine** nächste Anweisung. Die Einrückung ändert daran nichts:

```java
int x = 15;
if (x < 10)
    System.out.println("klein");
    System.out.println("wirklich klein");
```

Ausgabe: `wirklich klein`. Die erste Ausgabe hängt am `if` und fällt weg. Die zweite steht
außerhalb des `if` und läuft immer, auch wenn die Einrückung etwas anderes behauptet. Setze deshalb
**immer** geschweifte Klammern, auch bei nur einer Anweisung. Die Vorlesung nennt diese Schreibweise
OTBS-Stil, kurz für englisch *One True Brace Style* („der eine wahre Klammerstil“). Dabei gibt es immer
Klammern, und die öffnende `{` steht am Ende der Zeile mit dem `if`.
:::

```aufgabe
id: vz-if-zwei-ifs
titel: Zwei if-Anweisungen hintereinander
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int punkte = 12;
      if (punkte > 10) {
          System.out.println("mehr als 10");
      }
      if (punkte > 20) {
          System.out.println("mehr als 20");
      }
      if (punkte != 15) {
          System.out.println("nicht 15");
      }
    loesung: |
      mehr als 10
      nicht 15
    fehler:
      - wert: "mehr als 10"
        meldung: Die drei `if`-Anweisungen sind voneinander unabhängig. Nach der ersten prüft Java auch die zweite und die dritte.
hinweise:
  - Prüfe jede der drei Bedingungen einzeln mit `punkte = 12`.
loesung: |
  **Ansatz:** Drei getrennte `if`-Anweisungen. Java prüft jede für sich, egal was vorher passiert ist.
  ---
  `12 > 10` ist `true`: Ausgabe `mehr als 10`. `12 > 20` ist `false`: keine Ausgabe. `12 != 15` ist `true`: Ausgabe `nicht 15`.
```

```aufgabe
id: vz-if-vergleiche-rf
titel: Welche Vergleiche sind wahr?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Es gilt `int a = 6;` und `int b = 6;`. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`a <= b` hat den Wert `true`."
        richtig: true
        erklaerung: '`<=` heißt „kleiner oder gleich“. Bei Gleichheit ist der Vergleich wahr.'
      - text: "`a < b` hat den Wert `true`."
        richtig: false
        erklaerung: 6 ist nicht echt kleiner als 6.
      - text: "`a != b` hat den Wert `false`."
        richtig: true
        erklaerung: Die beiden Werte sind gleich, also ist „ungleich“ falsch.
      - text: "`a => b` ist ein gültiger Vergleich in Java."
        richtig: false
        erklaerung: Den Operator gibt es nicht. Richtig ist `>=`, das Gleichheitszeichen steht immer hinten.
    fehler:
      - wert: [r, r, r, f]
        meldung: '`<` heißt „echt kleiner“. Bei zwei gleichen Werten ist `a < b` falsch.'
hinweise:
  - Setze 6 für beide Variablen ein und lies jeden Operator laut vor, zum Beispiel „kleiner oder gleich“.
loesung: |
  **Ansatz:** Beide Werte sind 6. Jeder Operator wird mit diesem Wert ausgewertet.
  ---
  `6 <= 6` ist wahr, `6 < 6` ist falsch, `6 != 6` ist falsch (die Aussage „hat den Wert false“ stimmt also).
  Den Operator `=>` kennt Java nicht. Merkhilfe: Bei `<=`, `>=` und `!=` steht das `=` immer rechts.
```

```aufgabe
id: vz-if-klammern-falle
titel: Was gehört zum if?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Achte genau auf die geschweiften Klammern.
teile:
  - typ: ausgabe
    code: |
      int a = 4;
      int b = 9;
      if (a > b)
          System.out.println("A");
          System.out.println("B");
      if (a < b) {
          System.out.println("C");
          System.out.println("D");
      }
      System.out.println("E");
    loesung: |
      B
      C
      D
      E
    fehler:
      - wert: "C\nD\nE"
        meldung: Ohne geschweifte Klammern gehört zum ersten `if` nur die **eine** nächste Anweisung. Die Ausgabe von `B` steht schon außerhalb und läuft immer.
      - wert: "A\nB\nC\nD\nE"
        meldung: Ist 4 größer als 9? Die erste Bedingung ist falsch, die Ausgabe von `A` fällt also weg.
hinweise:
  - Markiere zuerst, welche Anweisungen wirklich zu jedem `if` gehören. Die Einrückung zählt dabei nicht.
  - Ohne `{ }` gehört genau eine Anweisung zum `if`. Mit `{ }` gehört der ganze Block dazu.
loesung: |
  **Ansatz:** Für jedes `if` bestimmen, welche Anweisungen dazugehören, dann die Bedingungen auswerten.
  ---
  Das erste `if` hat keine Klammern. Zu ihm gehört nur die Ausgabe von `A`. Weil `4 > 9` falsch ist, fällt `A` weg.
  Die Ausgabe von `B` steht außerhalb des `if` und läuft immer, trotz der Einrückung.
  ---
  Das zweite `if` hat einen Block. `4 < 9` ist wahr, also laufen `C` und `D`. Danach läuft `E` in jedem Fall.
  Ergebnis: `B`, `C`, `D`, `E` untereinander.
```

```aufgabe
id: vz-if-semikolon
titel: Der verirrte Strichpunkt
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int kontostand = -20;
      if (kontostand >= 0); {
          System.out.println("Konto im Plus");
      }
      if (kontostand < 0) {
          System.out.println("Konto im Minus");
      }
    loesung: |
      Konto im Plus
      Konto im Minus
    fehler:
      - wert: "Konto im Minus"
        meldung: Schau dir das Ende von Zeile 2 an. Was bedeutet der Strichpunkt direkt nach der Bedingung?
hinweise:
  - Ein Strichpunkt allein ist eine leere Anweisung, die nichts tut.
  - Der Strichpunkt in Zeile 2 ist der ganze Rumpf des ersten `if`, also alles, was dieses `if` bei `true` ausführt. Was passiert dann mit dem Block in den Zeilen 2 bis 4?
loesung: |
  **Ansatz:** Den Strichpunkt nach `(kontostand >= 0)` als leere Anweisung lesen.
  ---
  Das erste `if` endet schon beim Strichpunkt. Der Block mit `Konto im Plus` ist ein gewöhnlicher Block danach und läuft immer.
  ---
  Das zweite `if` ist korrekt. `-20 < 0` ist wahr, also erscheint `Konto im Minus`.
  Die Ausgabe widerspricht sich: Daran erkennst du den Fehler. Korrektur: den Strichpunkt in Zeile 2 löschen.
```

```aufgabe
id: vz-if-kompilierfehler
titel: Welche Zeilen übersetzt der Compiler nicht?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Markiere alle Zeilen, die einen Übersetzungsfehler enthalten. Jede Zeile steht für sich.
  Vorher gilt `int x = 3;` und `boolean b = true;`.
teile:
  - typ: zeilen
    code: |
      if (x = 3) { x++; }
      if (x == 3) { x++; }
      if x > 3 { x++; }
      if (b) { x++; }
      if (0 < x < 10) { x++; }
      if (x != 3) { x++; } else (x < 3) { x--; }
      if (b == false) { x--; }
    loesung: [1, 3, 5, 6]
    fehler:
      - wert: [1, 3, 6]
        meldung: '`0 < x < 10` sieht mathematisch richtig aus, ist in Java aber ein Fehler. Java rechnet zuerst `0 < x` aus und erhält `true`. Danach müsste es `true < 10` vergleichen, und das geht nicht.'
      - wert: [1, 3, 4, 5, 6]
        meldung: '`if (b)` ist korrekt. `b` hat schon den Typ `boolean` und ist damit selbst eine Bedingung.'
hinweise:
  - Prüfe für jede Zeile drei Dinge. Stehen runde Klammern um die Bedingung? Ist die Bedingung vom Typ `boolean`? Hat `else` eine eigene Bedingung?
  - Zeile 5 ist knifflig. Rechne `0 < x < 10` so aus, wie Java es tut, nämlich von links nach rechts.
loesung: |
  **Ansatz:** Jede Zeile auf die drei Regeln prüfen: Klammern um die Bedingung, Bedingung vom Typ `boolean`, `else` ohne Bedingung.
  ---
  Zeile 1: `x = 3` ist eine Zuweisung vom Typ `int`, keine Bedingung. Zeile 3: Die runden Klammern fehlen.
  Zeile 5: `0 < x` ergibt `true`, danach wäre `true < 10` zu vergleichen. Richtig wäre `0 < x && x < 10` (siehe [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht)).
  ---
  Zeile 6: `else` bekommt keine Bedingung. Die Zeilen 2, 4 und 7 sind korrekt.
  Antwort: Die Zeilen 1, 3, 5 und 6 übersetzt der Compiler nicht.
```

```aufgabe
id: vz-if-bedingung-luecke
titel: Bestanden oder nicht?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Prüfung ist bestanden, wenn jemand **mindestens** 50 Punkte hat. Ergänze die Lücken so, dass bei
  50 oder mehr Punkten `bestanden` und sonst `nicht bestanden` erscheint.
teile:
  - typ: lueckentext
    code: |
      int punkte = 50;
      if (___) {
          System.out.println("bestanden");
      } ___ {
          System.out.println("nicht bestanden");
      }
    luecken: [["punkte >= 50", "punkte > 49", "50 <= punkte", "49 < punkte"], ["else"]]
    fehler:
      - wert: ["punkte > 50", "else"]
        meldung: Mit `> 50` fällt jemand mit genau 50 Punkten durch. „Mindestens 50“ schließt die 50 ein, also `>=`.
      - wert: ["punkte >= 50", "else if"]
        meldung: Ein `else if` bräuchte eine eigene Bedingung in runden Klammern. Hier soll der zweite Block alle übrigen Fälle auffangen.
hinweise:
  - „Mindestens 50“ heißt 50 oder mehr. Welcher Vergleichsoperator schließt die Grenze ein?
  - Der zweite Block soll laufen, wenn die Bedingung falsch ist. Dafür gibt es ein Schlüsselwort ohne eigene Bedingung.
loesung: |
  **Ansatz:** „Mindestens 50“ als Vergleich mit eingeschlossener Grenze schreiben.
  ---
  Die Bedingung ist `punkte >= 50`. Gleichwertig sind `punkte > 49` oder `50 <= punkte`, weil Punkte ganze Zahlen sind.
  ---
  Der zweite Block bekommt `else`. Probe: Bei 50 ist `50 >= 50` wahr, Ausgabe `bestanden`. Bei 49 ist die Bedingung falsch, Ausgabe `nicht bestanden`.
```

```aufgabe
id: vz-if-ungerade-negativ
titel: Ungerade, aber negativ
niveau: 3
lernziel: 0
kompetenz: begruenden
quelle: Typischer Fehler beim Teilbarkeitstest, vergleiche Folie „if – Hinweise“ (VO EP1 WS2021)
angabe: |
  Jemand prüft so, ob eine Zahl ungerade ist:

  ```java
  if (n % 2 == 1) {
      System.out.println(n + " ist ungerade");
  } else {
      System.out.println(n + " ist gerade");
  }
  ```

  a) Was gibt dieses Programm für `n = -5` aus?
  b) Ergänze die Lücke so, dass die Prüfung für **alle** ganzen Zahlen stimmt.
teile:
  - typ: ausgabe
    label: a) Ausgabe für n = -5
    codeAnzeigen: false
    code: |
      int n = -5;
      if (n % 2 == 1) {
          System.out.println(n + " ist ungerade");
      } else {
          System.out.println(n + " ist gerade");
      }
    loesung: |
      -5 ist gerade
    fehler:
      - wert: "-5 ist ungerade"
        meldung: Rechne `-5 % 2` in Java genau aus. Der Rest hat das Vorzeichen der linken Zahl.
  - typ: lueckentext
    label: b) korrigierte Bedingung
    code: |
      int n = -5;
      if (___) {
          System.out.println(n + " ist ungerade");
      }
    luecken: [["n % 2 != 0", "n % 2 == 1 || n % 2 == -1", "!(n % 2 == 0)"]]
    fehler:
      - wert: ["n % 2 == -1"]
        meldung: Damit sind die positiven ungeraden Zahlen falsch. Bei `n = 3` ist der Rest `1`, nicht `-1`.
hinweise:
  - '`-5 / 2` ergibt in Java `-2`. Welcher Rest bleibt dann übrig?'
  - Gerade heißt Rest 0. Ungerade heißt also „Rest ist nicht 0“, egal mit welchem Vorzeichen.
loesung: |
  **Ansatz:** Den Rest in Java genau ausrechnen. Er hat das Vorzeichen der linken Zahl (siehe [Kapitel 2](/lernen/ep1/ausdruecke)).
  ---
  a) `-5 / 2` ist `-2`, und `-5 - (-2 · 2) = -1`. Also ist `-5 % 2` gleich `-1`. Der Vergleich `-1 == 1` ist falsch, und das Programm meldet fälschlich `-5 ist gerade`.
  ---
  b) Sicher ist der Vergleich mit 0: `n % 2 != 0`. Der Rest ist bei geraden Zahlen immer 0 und bei ungeraden Zahlen `1` oder `-1`.
  Probe: Für `-5` ist `-1 != 0` wahr, für `3` ist `1 != 0` wahr, für `4` ist `0 != 0` falsch.
```

```reflexion
frage: Bei `int x` übersetzt Java `if (x = 5)` nicht, bei `boolean b` aber sehr wohl `if (b = true)`. Erkläre den Unterschied mit dem Typ der Bedingung.
antwort: |
  In den runden Klammern muss ein Ausdruck vom Typ `boolean` stehen. Eine Zuweisung hat als Wert den zugewiesenen Wert
  und dessen Typ. `x = 5` hat den Wert `5` vom Typ `int`. Das ist keine Bedingung, also meldet der Compiler einen Fehler.
  `b = true` hat den Wert `true` vom Typ `boolean`. Das ist formal eine gültige Bedingung, deshalb übersetzt der Compiler
  sie. Sie ist aber immer wahr und verändert nebenbei `b`. Der Fehler fällt deshalb erst beim Ausführen auf. Darum ist
  `if (b)` die beste Schreibweise: Sie ist kürzer und kann nicht versehentlich zur Zuweisung werden.
```

```aufgabe
id: vz-if-max-zwei
titel: Die größere von zwei Zahlen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Das Programm soll die größere von zwei Zahlen in `max` speichern. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      int a = 17;
      int b = 23;
      int max;
      if (___) {
          max = a;
      } else {
          max = ___;
      }
      System.out.println(max);
    luecken: [["a > b", "a >= b", "b < a", "b <= a"], ["b"]]
    fehler:
      - wert: ["a < b", "b"]
        meldung: Im ersten Block wird `a` gespeichert. Das ist nur richtig, wenn `a` die größere Zahl ist.
hinweise:
  - Im ersten Block steht `max = a;`. Wann ist das die richtige Wahl?
  - Der `else`-Block deckt den anderen Fall ab. Welche Zahl ist dann die größere?
loesung: |
  **Ansatz:** Der erste Block speichert `a`. Die Bedingung muss also „a ist größer als b“ sein.
  ---
  Bedingung `a > b`. Bei Gleichheit ist es egal, welche Zahl man nimmt, deshalb ist auch `a >= b` richtig.
  ---
  Im `else`-Block ist `a` nicht größer als `b`, also gehört `max = b;` hinein. Probe mit 17 und 23: `17 > 23` ist falsch, `max` wird 23.
```

## Bedingungen verknüpfen mit UND, ODER und NICHT

```aufgabe
id: vz-log-check-zwei-vergleiche
titel: Zwei Vergleiche
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Vergleiche kennst du aus [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
teile:
  - typ: ausgabe
    code: |
      int x = 12;
      System.out.println(x >= 10);
      System.out.println(x <= 11);
    loesung: |
      true
      false
    fehler:
      - wert: "true\ntrue"
        meldung: '`12 <= 11` fragt, ob 12 kleiner oder gleich 11 ist. Das stimmt nicht.'
loesung: |
  `12 >= 10` ist wahr, also `true`.
  ---
  `12 <= 11` ist falsch, also `false`.
```

Viele Fragen bestehen aus mehreren Teilen. „Liegt die Temperatur zwischen 18 und 24 Grad?“ heißt:
Sie ist mindestens 18 **und** höchstens 24. „Ist heute Wochenende?“ heißt: Es ist Samstag **oder**
Sonntag. Für solche Fragen verknüpft Java mehrere Bedingungen mit **logischen Operatoren**. Ein
logischer Operator nimmt Wahrheitswerte und liefert wieder einen Wahrheitswert.

### Die drei wichtigsten logischen Operatoren

:::definition[UND, ODER, NICHT]
- `a && b` (sprich „a und b“) ist genau dann `true`, wenn **beide** Seiten `true` sind.
- `a || b` (sprich „a oder b“) ist genau dann `true`, wenn **mindestens eine** Seite `true` ist. Auch beide dürfen wahr sein.
- `!a` (sprich „nicht a“) dreht den Wert um: aus `true` wird `false` und umgekehrt.

**Beispiel:** Bei `x = 15` ist `x > 10 && x < 20` wahr, weil beide Vergleiche wahr sind.
**Nichtbeispiel:** `x > 10 && 20` ist **kein** gültiger Ausdruck. Rechts von `&&` steht die Zahl 20, kein Wahrheitswert.
:::

Die senkrechten Striche `|` findest du auf einer deutschen Tastatur mit AltGr und der Taste links
neben dem Y. Die folgende **Wahrheitstabelle** listet alle vier Kombinationen auf. Die letzte Spalte
zeigt den seltenen Operator `^` (sprich „exklusives Oder“). Er ist wahr, wenn **genau eine** Seite
wahr ist.

|a|b|a && b|a \|\| b|a ^ b|
|---|---|---|---|---|
|false|false|false|false|false|
|false|true|false|true|true|
|true|false|false|true|true|
|true|true|true|true|false|

Im Alltag heißt „oder“ oft „entweder oder“. In Java ist `||` aber **einschließend**: Bei zwei wahren
Seiten ist das Ergebnis `true`. Nur `^` schließt den Fall „beide“ aus.

:::beispiel[Liegt ein Wert in einem Bereich?]
Eine Heizung soll melden, ob die Raumtemperatur angenehm ist, also zwischen 18 und 24 Grad liegt,
beide Grenzen eingeschlossen.

```java
int t = 26;
if (t >= 18 && t <= 24) {
    System.out.println("angenehm");
} else {
    System.out.println("zu kalt oder zu warm");
}
```

1. Zeile 1 speichert `26` in `t`.
2. Zeile 2, linke Seite: `26 >= 18` ist `true`.
3. Zeile 2, rechte Seite: `26 <= 24` ist `false`.
4. `true && false` ist laut Tabelle `false`. Also läuft der `else`-Block.

```text
zu kalt oder zu warm
```

Mathematisch würdest du `18 ≤ t ≤ 24` schreiben. In Java geht das **nicht**: `18 <= t <= 24`
übersetzt der Compiler nicht, weil `18 <= t` schon `true` liefert und `true <= 24` sinnlos ist.
Jede Grenze bekommt einen eigenen Vergleich, und `&&` verbindet sie.
:::

### Vorrang: Wer bindet stärker?

Wie bei Punkt- und Strichrechnung hat auch hier jeder Operator einen **Vorrang**, also eine Stufe,
die bestimmt, was zuerst gerechnet wird. Von stark nach schwach:

1. `!` (nicht) und Klammern
2. Rechnen: `*`, `/`, `%`, dann `+`, `-`
3. Größenvergleiche `<`, `>`, `<=`, `>=`
4. Gleichheit `==`, `!=`
5. `&&` (und)
6. `||` (oder)

Merke dir vor allem: **`&&` bindet stärker als `||`**, so wie Mal stärker bindet als Plus. Der
Ausdruck `true || false && false` bedeutet also `true || (false && false)` und ergibt `true`. Wer
etwas anderes meint, setzt Klammern: `(true || false) && false` ergibt `false`. Klammern schaden nie
und machen den Code lesbarer.

:::beispiel[Schaltjahr als ein einziger Ausdruck]
Ein Jahr ist ein **Schaltjahr**, wenn es durch 4 teilbar ist, aber nicht durch 100. Eine Ausnahme
gibt es: Ist das Jahr durch 400 teilbar, ist es doch ein Schaltjahr. In Java:

```java
int j = 1900;
boolean schalt = (j % 4 == 0 && j % 100 != 0) || j % 400 == 0;
System.out.println(j + ": " + schalt);
```

Wir rechnen für `j = 1900`:

1. `1900 % 4` ist `0`, also ist `j % 4 == 0` gleich `true`.
2. `1900 % 100` ist `0`, also ist `j % 100 != 0` gleich `false`.
3. Die Klammer `true && false` ergibt `false`.
4. `1900 % 400` ist `300`, also ist `j % 400 == 0` gleich `false`.
5. `false || false` ergibt `false`. Ausgabe: `1900: false`.

Für `2000` ist Schritt 4 anders: `2000 % 400` ist `0`. Dann ergibt `false || true` den Wert `true`.
Für `2024` ist schon die Klammer wahr: `true && true`. Ausgabe `2024: true`.
:::

```aufgabe
id: vz-log-check-vorrang
titel: Was wird zuerst gerechnet?
niveau: 1
art: check
angabe: |
  Welche Klammerung beschreibt, wie Java den Ausdruck `a || b && c` auswertet?
teile:
  - typ: auswahl
    optionen: ['`a || (b && c)`', '`(a || b) && c`', 'Java wertet streng von links nach rechts aus, Klammern spielen keine Rolle.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`&&` bindet stärker als `||`, so wie Mal stärker bindet als Plus. Die Und-Verknüpfung wird zuerst gebildet.'
      - wert: 2
        meldung: Wie bei Punkt vor Strich gibt es auch hier Vorrangregeln. Sie bestimmen, welche Teile zusammengehören.
loesung: |
  `&&` hat Vorrang vor `||`.
  ---
  Also gehören `b && c` zusammen, und das Ergebnis wird mit `a` per Oder verknüpft: `a || (b && c)`.
```

### Kurzschlussauswertung

Java ist bei `&&` und `||` sparsam. Es wertet zuerst die **linke** Seite aus. Steht das Ergebnis
dann schon fest, rechnet es die rechte Seite **gar nicht mehr** aus. Das heißt
**Kurzschlussauswertung** (englisch *short-circuit evaluation*).

- Bei `a && b`: Ist `a` schon `false`, ist das Ganze sicher `false`. `b` wird übersprungen.
- Bei `a || b`: Ist `a` schon `true`, ist das Ganze sicher `true`. `b` wird übersprungen.

Das ist mehr als eine Sparmaßnahme. Damit kannst du gefährliche Berechnungen absichern. Eine
Division durch 0 bricht ein Java-Programm mit `ArithmeticException: / by zero` ab. Eine
**Exception** ist ein Laufzeitfehler, der das Programm sofort beendet.

```java
int y = 0;
if (y != 0 && 10 / y > 2) {
    System.out.println("Quotient groß");
} else {
    System.out.println("sicher abgefangen");
}
```

Bei `y = 0` ist `y != 0` falsch. Java überspringt `10 / y > 2`, die Division findet nie statt, und
das Programm gibt `sicher abgefangen` aus. Vertauschst du die beiden Seiten zu
`10 / y > 2 && y != 0`, rechnet Java zuerst `10 / 0` und bricht ab. **Die Reihenfolge der Seiten
zählt also.** Die Operatoren `&` und `|` (mit nur einem Zeichen) werten dagegen immer beide Seiten
aus. In EP1 verwendest du für Bedingungen immer `&&` und `||`.

```aufgabe
id: vz-log-check-kurzschluss
titel: Läuft die rechte Seite?
niveau: 1
art: check
angabe: |
  Es gilt `int k = 7;`. In welchem Ausdruck wertet Java die rechte Seite **nicht** aus?
teile:
  - typ: auswahl
    optionen: ['`k > 5 || k / 0 > 1`', '`k > 5 && k < 10`', '`k < 5 || k > 6`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die linke Seite `7 > 5` ist `true`. Bei `&&` steht das Ergebnis damit noch nicht fest, die rechte Seite muss ausgewertet werden.
      - wert: 2
        meldung: Die linke Seite `7 < 5` ist `false`. Bei `||` könnte die rechte Seite das Ergebnis noch wahr machen, also wird sie ausgewertet.
loesung: |
  Bei `||` mit linker Seite `true` steht das Ergebnis fest. In der ersten Option ist `7 > 5` wahr.
  ---
  Die Division durch 0 rechts läuft deshalb nie, und es gibt keine Exception.
```

### Eine Bedingung richtig verneinen

Manchmal brauchst du das Gegenteil einer Bedingung. Das Gegenteil von „zwischen 18 und 24“ ist
„unter 18 **oder** über 24“. Beim Verneinen wird aus UND ein ODER und umgekehrt. Diese Regeln heißen
nach dem Mathematiker Augustus De Morgan **Regeln von De Morgan**:

- `!(a && b)` ist gleichwertig zu `!a || !b`.
- `!(a || b)` ist gleichwertig zu `!a && !b`.

Jeder einzelne Vergleich wird dabei umgedreht: aus `<` wird `>=`, aus `<=` wird `>`, aus `==` wird
`!=`. Das Gegenteil von `t >= 18 && t <= 24` ist also `t < 18 || t > 24`.

:::achtung[Beim Verneinen das UND stehen gelassen]
Eine Studentin will „außerhalb von 18 bis 24“ prüfen und schreibt:

```java
if (t < 18 && t > 24) {
    System.out.println("Heizung regeln");
}
```

Es gibt keine Zahl, die gleichzeitig kleiner als 18 und größer als 24 ist. Die Bedingung ist für
jedes `t` falsch, und die Meldung erscheint nie, auch nicht bei `t = 30`. Richtig ist
`t < 18 || t > 24`. Probe: Bei `t = 30` ist die rechte Seite wahr, also das Ganze wahr.
:::

:::achtung[Einen Vergleich verkürzt]
Gesucht ist „x ist 3 oder 4“. Falsch:

```java
if (x == 3 || 4) { ... }
```

Der Compiler meldet `bad operand types for binary operator '||'`. Rechts von `||` steht die Zahl 4,
kein Wahrheitswert. Jede Seite braucht einen vollständigen Vergleich: `x == 3 || x == 4`.
:::

:::merke[So wertest du eine zusammengesetzte Bedingung aus]
1. Setze die Werte ein und rechne alle Klammern und Rechnungen aus.
2. Werte jeden Vergleich zu `true` oder `false` aus. Lass dabei einen Vergleich aus, den die Kurzschlussauswertung aus Schritt 4 überspringt.
3. Verknüpfe zuerst alle `&&`, danach alle `||`.
4. Achte auf die Kurzschlussauswertung: Steht das Ergebnis nach der linken Seite fest, läuft die rechte Seite nicht.
:::

```aufgabe
id: vz-log-gefuehrt-ticket
titel: Gratis-Eintritt
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Museum lässt Kinder unter 6 Jahren und Mitglieder gratis hinein. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int alter = 34;
      boolean mitglied = true;
      boolean gratis = alter < 6 || mitglied;
      boolean ermaessigt = !gratis && alter >= 65;
      System.out.println(gratis);
      System.out.println(ermaessigt);
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: Bei `||` reicht eine wahre Seite. `mitglied` ist `true`.
      - wert: "true\ntrue"
        meldung: '`!gratis` dreht `true` um. Ist die linke Seite von `&&` falsch, ist das Ganze falsch.'
hinweise:
  - Rechne zuerst `gratis` aus. `ermaessigt` hängt davon ab.
  - Bei `ermaessigt` steht links `!gratis`. Was folgt daraus mit der Kurzschlussauswertung?
gefuehrt:
  - text: Welchen Wert hat `alter < 6` bei `alter = 34`?
    teil: { typ: ausgabe, code: "System.out.println(34 < 6);", loesung: "false" }
    erklaerung: 34 ist nicht kleiner als 6.
  - text: Welchen Wert hat dann `gratis = false || mitglied` mit `mitglied = true`?
    teil: { typ: ausgabe, code: "System.out.println(false || true);", loesung: "true" }
    erklaerung: Bei Oder reicht eine wahre Seite.
  - text: Welchen Wert hat `!gratis`?
    teil: { typ: ausgabe, code: "System.out.println(!true);", loesung: "false" }
    erklaerung: Das Ausrufezeichen dreht `true` zu `false` um.
  - text: Muss Java `alter >= 65` überhaupt noch ausrechnen? Überlege, dann klick weiter.
    erklaerung: Nein. Die linke Seite von `&&` ist `false`, also ist das Ganze `false`. `ermaessigt` ist `false`.
loesung: |
  **Ansatz:** Die beiden Variablen der Reihe nach ausrechnen, `&&` und `||` mit der Wahrheitstabelle.
  ---
  `gratis`: `34 < 6` ist `false`, `mitglied` ist `true`. `false || true` ergibt `true`.
  ---
  `ermaessigt`: `!gratis` ist `false`. Damit ist `false && ...` sicher `false`, die rechte Seite wird nicht mehr ausgewertet.
  Ausgabe `true` und `false`.
```

```aufgabe
id: vz-log-auswerten
titel: Ausdrücke auswerten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 5;
      int b = 8;
      System.out.println(a < b && b < 10);
      System.out.println(a > 6 || b > 6);
      System.out.println(!(a == 5));
      System.out.println(a % 2 == 0 || b % 2 == 0);
    loesung: |
      true
      true
      false
      true
    fehler:
      - wert: "true\nfalse\nfalse\ntrue"
        meldung: Bei `||` genügt eine wahre Seite. `b > 6` ist wahr, auch wenn `a > 6` falsch ist.
      - wert: "true\ntrue\ntrue\ntrue"
        meldung: '`a == 5` ist wahr. Das `!` davor dreht den Wert um.'
hinweise:
  - Werte zuerst jeden einzelnen Vergleich aus und schreib `true` oder `false` darüber.
loesung: |
  **Ansatz:** Jeden Vergleich einzeln auswerten, dann mit der Wahrheitstabelle verknüpfen.
  ---
  Zeile 3: `true && true` ergibt `true`. Zeile 4: `false || true` ergibt `true`. Zeile 5: `!true` ergibt `false`.
  Zeile 6: `5 % 2 == 0` ist `false`, `8 % 2 == 0` ist `true`, zusammen `true`.
```

```aufgabe
id: vz-log-bereich-waehlen
titel: Den richtigen Bereichstest wählen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Note `n` ist gültig, wenn sie zwischen 1 und 5 liegt, beide Grenzen eingeschlossen.
  Welche Bedingung prüft das richtig?
teile:
  - typ: auswahl
    optionen: ['`n >= 1 && n <= 5`', '`n >= 1 || n <= 5`', '`1 <= n <= 5`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mit `||` reicht eine Seite. Dann wäre auch `n = 9` gültig, weil `9 >= 1` wahr ist.
      - wert: 2
        meldung: Diese mathematische Schreibweise übersetzt der Compiler nicht. `1 <= n` ergibt einen Wahrheitswert, und der lässt sich nicht mit 5 vergleichen.
hinweise:
  - Beide Grenzen müssen gleichzeitig gelten. Welcher Operator verlangt „beide“?
loesung: |
  **Ansatz:** „Zwischen“ heißt „mindestens 1 **und** höchstens 5“.
  ---
  Also `n >= 1 && n <= 5`. Probe: `n = 9` ergibt `true && false`, also `false`. `n = 3` ergibt `true && true`, also `true`.
```

```aufgabe
id: vz-log-vorrang-ausgabe
titel: Und vor Oder
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Denke an den Vorrang.
teile:
  - typ: ausgabe
    code: |
      boolean p = true;
      boolean q = false;
      boolean r = false;
      System.out.println(p || q && r);
      System.out.println((p || q) && r);
      System.out.println(!p || q);
      System.out.println(!(p || q));
    loesung: |
      true
      false
      false
      false
    fehler:
      - wert: "false\nfalse\nfalse\nfalse"
        meldung: In Zeile 4 bindet `&&` stärker. Java rechnet `p || (q && r)`, und `p` ist schon `true`.
      - wert: "true\nfalse\ntrue\nfalse"
        meldung: In Zeile 6 bezieht sich `!` nur auf `p`, nicht auf den ganzen Ausdruck. `!p` ist `false`, und `false || false` ist `false`.
hinweise:
  - '`&&` wird vor `||` ausgewertet. `!` bezieht sich nur auf das Nächste rechts davon, außer es folgt eine Klammer.'
  - 'Zeile 4 lautet mit Klammern `p || (q && r)`. Zeile 6 lautet `(!p) || q`.'
loesung: |
  **Ansatz:** Klammern nach den Vorrangregeln setzen, dann auswerten.
  ---
  Zeile 4: `p || (q && r)` ist `true || false`, also `true`. Zeile 5: Die Klammer `p || q` ist `true`, `true && false` ist `false`.
  ---
  Zeile 6: `(!p) || q` ist `false || false`, also `false`. Zeile 7: `p || q` ist `true`, verneint `false`.
  Merke: Die Zeilen 4 und 5 unterscheiden sich nur durch Klammern und liefern verschiedene Ergebnisse.
```

```aufgabe
id: vz-log-kurzschluss-zaehler
titel: Wird die rechte Seite ausgeführt?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  `zaehler++` erhöht `zaehler` um 1, nachdem der alte Wert verwendet wurde (siehe [Kapitel 2](/lernen/ep1/ausdruecke)).
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int zaehler = 0;
      int x = 4;
      boolean e1 = x > 5 && zaehler++ > 0;
      boolean e2 = x > 3 || zaehler++ > 0;
      boolean e3 = x > 3 && zaehler++ >= 0;
      System.out.println(zaehler);
      System.out.println(e1 + " " + e2 + " " + e3);
    loesung: |
      1
      false true true
    fehler:
      - wert: "3\nfalse true true"
        meldung: Bei `&&` und `||` läuft die rechte Seite nicht immer. Prüfe für jede Zeile, ob das Ergebnis schon nach der linken Seite feststeht.
      - wert: "0\nfalse true true"
        meldung: In Zeile 5 ist die linke Seite `true`. Bei `&&` muss Java dann auch die rechte Seite ausrechnen, und dort steht `zaehler++`.
hinweise:
  - Bei `&&` mit linker Seite `false` und bei `||` mit linker Seite `true` steht das Ergebnis fest. Dann läuft die rechte Seite nicht.
  - Gehe die Zeilen 3, 4 und 5 einzeln durch und notiere jedes Mal, ob `zaehler++` ausgeführt wird.
loesung: |
  **Ansatz:** Für jede Zeile prüfen, ob die rechte Seite wegen der Kurzschlussauswertung übersprungen wird.
  ---
  Zeile 3: `4 > 5` ist `false`. Bei `&&` ist das Ergebnis `false`, `zaehler++` läuft nicht. Zeile 4: `4 > 3` ist `true`. Bei `||` steht `true` fest, `zaehler++` läuft nicht.
  ---
  Zeile 5: `4 > 3` ist `true`. Bei `&&` muss Java rechts weiterrechnen: `0 >= 0` ist `true`, danach wird `zaehler` zu 1.
  Ausgabe `1`, dann `false true true`.
```

```aufgabe
id: vz-log-verneinen
titel: Das Gegenteil hinschreiben
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Passwort ist **gültig**, wenn es mindestens 8 und höchstens 20 Zeichen hat. Ergänze die Bedingung so, dass
  `ungültig` genau dann erscheint, wenn das Passwort **nicht** gültig ist. Verwende kein `!`.
teile:
  - typ: lueckentext
    code: |
      String pw = "geheim";
      int n = pw.length();
      if (n ___ 8 ___ n ___ 20) {
          System.out.println("ungültig");
      }
    luecken: [["<"], ["||"], [">"]]
    fehler:
      - wert: ["<", "&&", ">"]
        meldung: Keine Länge ist gleichzeitig kleiner als 8 und größer als 20. Beim Verneinen wird aus UND ein ODER.
      - wert: ["<=", "||", ">="]
        meldung: 8 und 20 Zeichen sind noch gültig. Das Gegenteil von `>=` ist `<`, nicht `<=`.
hinweise:
  - Schreib zuerst die Bedingung für „gültig“ hin. Sie hat die Form `n >= 8 && n <= 20`.
  - Verneine sie mit De Morgan. Jeder Vergleich wird umgedreht, und aus `&&` wird `||`.
loesung: |
  **Ansatz:** „Gültig“ ist `n >= 8 && n <= 20`. Gesucht ist das Gegenteil davon.
  ---
  Nach De Morgan wird aus `&&` ein `||`. Aus `n >= 8` wird `n < 8`, aus `n <= 20` wird `n > 20`.
  ---
  Ergebnis: `n < 8 || n > 20`. Probe mit `"geheim"`: `n = 6`, und `6 < 8` ist wahr, also erscheint `ungültig`.
```

```aufgabe
id: vz-log-schaltjahr-trace
titel: Schaltjahre in einer Tabelle
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Werte für jedes Jahr die Teilbedingungen von
  `(j % 4 == 0 && j % 100 != 0) || j % 400 == 0` aus. Trage `true` oder `false` ein.
teile:
  - typ: trace
    spalten: ["j % 4 == 0", "j % 100 != 0", "j % 400 == 0", "Schaltjahr"]
    zeilen: ["j = 2100", "j = 2400", "j = 1996", "j = 2026"]
    loesung:
      - ["true", "false", "false", "false"]
      - ["true", "false", "true", "true"]
      - ["true", "true", "false", "true"]
      - ["false", "true", "false", "false"]
    fehler:
      - wert: ["true", "false", "false", "true", "true", "false", "true", "true", "true", "true", "false", "true", "false", "true", "false", "false"]
        meldung: 2100 ist durch 100 teilbar, aber nicht durch 400. Dann gilt die Ausnahme von der Regel, und es ist kein Schaltjahr.
hinweise:
  - Berechne für jedes Jahr die drei Reste `j % 4`, `j % 100` und `j % 400`.
  - Die Klammer verlangt „durch 4, aber nicht durch 100“. Danach entscheidet die Teilbarkeit durch 400.
loesung: |
  **Ansatz:** Für jedes Jahr die drei Reste bestimmen, dann die Formel auswerten.
  ---
  2100: Reste 0, 0, 100. Die Klammer ist `true && false`, also `false`. Durch 400 nicht teilbar, also kein Schaltjahr.
  2400: Reste 0, 0, 0. Die Klammer ist `false`, aber `2400 % 400 == 0` ist `true`, also Schaltjahr.
  ---
  1996: Reste 0, 96, 396. Die Klammer ist `true && true`, also Schaltjahr. 2026: `2026 % 4` ist 2, die Klammer ist `false`, und 2026 ist nicht durch 400 teilbar.
  Kontrolle: 1996 war ein Schaltjahr, und 2400 wird eines sein. 2100 und 2026 sind keine.
```

```aufgabe
id: vz-log-reihenfolge-division
titel: Sicher dividieren
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Es gilt `int a = 0;` und `int b = 12;`. Beurteile die Aussagen über die vier Bedingungen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "`a != 0 && b / a > 1` lässt sich bei `a = 0` ohne Exception auswerten."
        richtig: true
        erklaerung: Die linke Seite ist `false`. Wegen der Kurzschlussauswertung findet die Division nie statt.
      - text: "`b / a > 1 && a != 0` lässt sich bei `a = 0` ohne Exception auswerten."
        richtig: false
        erklaerung: Hier steht die Division links und wird zuerst ausgeführt. `12 / 0` löst eine `ArithmeticException` aus.
      - text: "`a == 0 || b / a > 1` lässt sich bei `a = 0` ohne Exception auswerten."
        richtig: true
        erklaerung: Die linke Seite ist `true`. Bei `||` steht das Ergebnis damit fest, die Division läuft nicht.
      - text: "`a != 0 & b / a > 1` lässt sich bei `a = 0` ohne Exception auswerten."
        richtig: false
        erklaerung: Der einfache Operator `&` wertet immer beide Seiten aus. Die Division durch 0 findet statt.
    fehler:
      - wert: [r, r, r, f]
        meldung: Bei Aussage 2 steht die gefährliche Division auf der linken Seite. Die linke Seite wird immer ausgewertet.
      - wert: [r, f, r, r]
        meldung: '`&` mit nur einem Zeichen kennt keine Kurzschlussauswertung. Es rechnet beide Seiten aus.'
  - typ: text
    label: Begründe in zwei Sätzen, warum die Reihenfolge der beiden Seiten bei `&&` eine Rolle spielt.
    muster: |
      Java wertet bei `&&` zuerst die linke Seite aus und überspringt die rechte, wenn die linke `false` ist. Steht die
      Prüfung `a != 0` links, schützt sie die Division auf der rechten Seite. Steht die Division links, läuft sie immer,
      und bei `a = 0` bricht das Programm ab.
hinweise:
  - Welche Seite wertet Java immer aus? Wann überspringt es die andere?
  - Stelle für jede Aussage fest, ob die Division `b / a` tatsächlich ausgeführt wird.
loesung: |
  **Ansatz:** Für jede Bedingung klären, ob `b / a` wirklich ausgeführt wird. Nur dann kommt es zur Exception.
  ---
  Aussage 1: `a != 0` ist `false`, die Division wird übersprungen. Aussage 2: Die Division steht links und läuft immer.
  ---
  Aussage 3: `a == 0` ist `true`, bei `||` wird übersprungen. Aussage 4: `&` wertet immer beide Seiten aus.
  Richtig sind also die Aussagen 1 und 3. Faustregel: Die Schutzbedingung kommt immer nach links.
```

```reflexion
frage: '„x liegt zwischen 1 und 10“ heißt `x >= 1 && x <= 10`. Warum ist das Gegenteil davon nicht `x < 1 && x > 10`, sondern `x < 1 || x > 10`? Erkläre es mit einem Zahlenstrahl.'
antwort: |
  „Zwischen 1 und 10“ ist auf dem Zahlenstrahl ein zusammenhängendes Stück von 1 bis 10. Das Gegenteil sind alle
  Zahlen, die nicht in diesem Stück liegen. Das sind zwei getrennte Bereiche: links von 1 und rechts von 10. Eine Zahl
  muss nur in **einem** der beiden Bereiche liegen, deshalb verbindet sie ein ODER. Mit UND müsste eine Zahl in beiden
  Bereichen zugleich liegen, also kleiner als 1 und größer als 10 sein. So eine Zahl gibt es nicht. Formal sagt das
  die Regel von De Morgan: Aus `!(x >= 1 && x <= 10)` wird `x < 1 || x > 10`.
```

```aufgabe
id: vz-log-ticket-schreiben
titel: Eine Bedingung aus Text bauen
niveau: 3
lernziel: 1
kompetenz: modellieren
quelle: Logische Operatoren, Folie „Beispiele für logische Operatoren“ (VO EP1 WS2021), umformuliert
angabe: |
  Ein Schwimmbad verlangt den vollen Preis, außer jemand ist jünger als 15 Jahre **oder** mindestens 65 Jahre alt.
  Am Montag (`tag == 1`) zahlen außerdem alle den halben Preis. Ergänze die Lücken so, dass genau dann `voller Preis`
  erscheint, wenn keine Ermäßigung gilt.
teile:
  - typ: lueckentext
    code: |
      int alter = 40;
      int tag = 3;
      if (alter ___ 15 && alter ___ 65 && tag ___ 1) {
          System.out.println("voller Preis");
      } else {
          System.out.println("ermäßigt");
      }
    luecken: [[">="], ["<"], ["!="]]
    fehler:
      - wert: [">", "<=", "!="]
        meldung: Ein 15-Jähriger ist nicht mehr „jünger als 15“ und zahlt voll. Eine 65-Jährige ist schon ermäßigt. Prüfe die Grenzen einzeln.
      - wert: ["<", ">=", "=="]
        meldung: Das ist die Bedingung für die Ermäßigung, nur mit `&&` statt `||` verbunden. Gesucht ist die verneinte Bedingung.
hinweise:
  - 'Schreib zuerst die Ermäßigung als Bedingung: `alter < 15 || alter >= 65 || tag == 1`.'
  - Voller Preis ist das Gegenteil. Verneine jeden Vergleich und mache aus jedem `||` ein `&&`.
loesung: |
  **Ansatz:** Erst die Ermäßigung als Bedingung aufschreiben, dann mit De Morgan verneinen.
  ---
  Ermäßigung: `alter < 15 || alter >= 65 || tag == 1`. Verneint wird jeder Vergleich umgedreht und jedes `||` zu `&&`.
  ---
  Voller Preis: `alter >= 15 && alter < 65 && tag != 1`. Probe mit 40 Jahren am Mittwoch (`tag = 3`): alle drei Teile wahr, Ausgabe `voller Preis`.
```

## Mehrfachverzweigung und Verschachtelung

```aufgabe
id: vz-mehr-check-ifelse
titel: Genau ein Block
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? `if` mit `else` kennst du aus [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
teile:
  - typ: ausgabe
    code: |
      int note = 3;
      if (note <= 4) {
          System.out.println("positiv");
      } else {
          System.out.println("negativ");
      }
    loesung: |
      positiv
    fehler:
      - wert: "positiv\nnegativ"
        meldung: Von `if` und `else` läuft immer genau ein Block, nie beide.
loesung: |
  `3 <= 4` ist `true`, also läuft der erste Block.
  ---
  Der `else`-Block wird übersprungen. Ausgabe `positiv`.
```

Mit `if` und `else` kannst du zwischen **zwei** Möglichkeiten wählen. Oft gibt es aber mehr: Eine
Note hat fünf Stufen, ein Paket fällt in eine von mehreren Größenklassen. Dafür hängst du mehrere
Bedingungen hintereinander. Das Ergebnis heißt **Mehrfachverzweigung** oder *else-if-Kette*.

### Die else-if-Kette

```java
if (Bedingung1) {
    // Block 1
} else if (Bedingung2) {
    // Block 2
} else if (Bedingung3) {
    // Block 3
} else {
    // Block 4: keine Bedingung war wahr
}
```

:::definition[Mehrfachverzweigung]
Bei einer **Mehrfachverzweigung** prüft Java die Bedingungen streng **von oben nach unten**. Beim
**ersten** `true` führt es den zugehörigen Block aus und springt dann hinter das Ende der ganzen
Kette. Alle weiteren Bedingungen prüft es nicht mehr. Ist keine Bedingung wahr, läuft der
`else`-Block am Ende. Fehlt dieser, läuft gar nichts.

**Beispiel:** Bei `x = 5` und der Kette `if (x > 0) {A} else if (x > 3) {B}` läuft nur `A`, obwohl auch `x > 3` wahr wäre.
**Nichtbeispiel:** Drei einzelne `if`-Anweisungen hintereinander sind **keine** Mehrfachverzweigung. Dort prüft Java jede Bedingung, und es können mehrere Blöcke laufen.
:::

:::beispiel[Der Notenschlüssel von EP1]
In EP1 gibt es ab 92 Punkten ein Sehr gut, ab 83 ein Gut, ab 74 ein Befriedigend und ab 65 ein
Genügend. Darunter ist die Note Nicht genügend.

```java
int punkte = 85;
if (punkte >= 92) {
    System.out.println("Sehr gut");
} else if (punkte >= 83) {
    System.out.println("Gut");
} else if (punkte >= 74) {
    System.out.println("Befriedigend");
} else if (punkte >= 65) {
    System.out.println("Genügend");
} else {
    System.out.println("Nicht genügend");
}
```

1. Zeile 2: `85 >= 92` ist `false`. Java geht zum nächsten `else if`.
2. Zeile 4: `85 >= 83` ist `true`. Java führt Zeile 5 aus und gibt `Gut` aus.
3. Damit ist die Kette erledigt. Die Bedingungen `85 >= 74` und `85 >= 65` prüft Java nicht mehr, obwohl sie auch wahr wären.

Ausgabe: `Gut`. Beachte: Die zweite Bedingung muss nicht `punkte >= 83 && punkte < 92` lauten. In
Zeile 4 ist schon sicher, dass `punkte >= 92` falsch war. Die Kette liefert die obere Grenze gratis mit.
:::

:::achtung[Die Grenzen in der falschen Reihenfolge]
```java
int punkte = 95;
if (punkte >= 65) {
    System.out.println("Genügend");
} else if (punkte >= 92) {
    System.out.println("Sehr gut");
}
```

Ausgabe: `Genügend`, obwohl 95 Punkte ein Sehr gut sind. Die erste Bedingung `95 >= 65` ist schon
wahr, die Kette endet sofort. Der Zweig für Sehr gut ist **unerreichbar**: Jede Zahl ab 92 ist auch
mindestens 65. Bei Untergrenzen mit `>=` gehört deshalb die **größte** Grenze nach oben.
:::

### Verschachtelte Verzweigungen

Ein Block darf selbst wieder eine `if`-Anweisung enthalten. Man sagt dann, die Verzweigungen sind
**verschachtelt**. Die innere Bedingung wird nur geprüft, wenn das Programm überhaupt in den äußeren
Block hineinkommt.

:::beispiel[Das Maximum von drei Zahlen]
```java
int a = 4, b = 9, c = 6;
int max;
if (a > b) {
    if (a > c) {
        max = a;
    } else {
        max = c;
    }
} else {
    if (b > c) {
        max = b;
    } else {
        max = c;
    }
}
System.out.println(max);
```

1. Zeile 1 legt drei Variablen auf einmal an. Das Komma trennt die Deklarationen.
2. Zeile 3: `4 > 9` ist `false`. Der ganze äußere erste Block (Zeilen 4 bis 8) wird übersprungen.
3. Java springt in den äußeren `else`-Block. Zeile 10: `9 > 6` ist `true`, also `max = 9`.
4. Zeile 16 gibt `9` aus.

Was weiß das Programm in Zeile 11? Es kommt nur dorthin, wenn `a > b` falsch **und** `b > c` wahr war.
Also ist `b` mindestens so groß wie `a` und größer als `c`. Diese Art zu denken ist der Kern von
[3.4 Was gilt an dieser Stelle?](/lernen/ep1/verzweigungen/was-gilt-an-dieser-stelle-startwerte-rueckwaerts-finden).
:::

Die Vorlesung zeigt dazu eine kürzere Fassung mit zwei **unabhängigen** `if`-Anweisungen. Zuerst
kommt `max = a;`. Dann folgen `if (b > max) { max = b; }` und `if (c > max) { max = c; }`. Hier dürfen beide
`if` laufen, und das ist gewollt. Sie ist leichter zu lesen, braucht aber im Mittel mehr Zuweisungen.

### Wohin gehört das else?

Ohne geschweifte Klammern ist manchmal nicht sofort klar, zu welchem `if` ein `else` gehört. Dieses
Problem heißt **dangling else** („baumelndes else“). Java hat eine feste Regel: **Ein `else` gehört
immer zum letzten noch freien `if` davor.** Ein `if` ist „frei“, wenn es noch kein `else` hat.

:::achtung[Die Einrückung lügt]
```java
int zaehler = 7;
if (zaehler < 5)
    if (zaehler % 2 == 0)
        System.out.println("HIER1");
else
    System.out.println("HIER2");
```

Die Einrückung legt nahe, dass das `else` zum äußeren `if` gehört. Viele erwarten daher `HIER2`. Das
Programm gibt aber **nichts** aus. Das `else` gehört zum inneren `if (zaehler % 2 == 0)`. Weil
`7 < 5` falsch ist, läuft das ganze äußere `if` samt innerem `if` und `else` nicht. Mit Klammern
`{ }` um den äußeren Block entsteht das Problem gar nicht.
:::

```aufgabe
id: vz-mehr-check-muster
titel: Wie viele Blöcke können laufen?
niveau: 1
art: check
angabe: |
  Eine Kette hat die Form `if (...) {A} else if (...) {B} else if (...) {C}`, aber **kein** `else` am Ende.
  Wie viele der Blöcke A, B, C laufen höchstens?
teile:
  - typ: auswahl
    optionen: ['keiner oder genau einer', 'immer genau einer', 'beliebig viele']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ohne `else` am Ende kann es passieren, dass keine Bedingung wahr ist. Dann läuft gar nichts.
      - wert: 2
        meldung: Das gilt für unabhängige `if`-Anweisungen. In einer Kette endet alles beim ersten Treffer.
loesung: |
  In einer Kette läuft höchstens ein Block, nämlich der beim ersten `true`.
  ---
  Ohne abschließendes `else` kann auch keiner laufen. Mit `else` am Ende läuft immer genau einer.
```

Die Vorlesung fasst die drei Bauformen als **Programmiermuster** zusammen:

|Ziel|Bauform|
|---|---|
|beliebig viele Anweisungen ausführen, jede mit eigener Prüfung|unabhängige `if` hintereinander|
|keine oder genau eine Anweisung ausführen|else-if-Kette ohne `else` am Ende|
|genau eine Anweisung ausführen|else-if-Kette mit `else` am Ende|

### Der Bedingungsoperator

Für eine einfache Wahl zwischen zwei **Werten** gibt es eine Kurzform, den **Bedingungsoperator**
`Bedingung ? Wert1 : Wert2`. Ist die Bedingung `true`, ist das Ergebnis `Wert1`, sonst `Wert2`.
Man nennt ihn auch **ternären Operator**, weil er drei Teile hat.

```java
int a = 3, b = 8;
int max = (a > b) ? a : b;   // gleichwertig zu if (a > b) { max = a; } else { max = b; }
```

Hier ist `3 > 8` falsch, also bekommt `max` den Wert `b`, also 8. Verwende den Operator sparsam.
Ineinander geschachtelte Bedingungsoperatoren gelten als schlechter Stil, weil man sie kaum lesen kann.

:::merke[So schreibst du eine Mehrfachverzweigung]
1. Schreib die Fälle als Liste von Bereichen auf, ohne Lücken und ohne Überlappungen.
2. Ordne sie so, dass jede Bedingung nur noch eine Grenze braucht: bei `>=` von der größten Grenze abwärts, bei `<` von der kleinsten aufwärts.
3. Der letzte Fall braucht keine Bedingung mehr: Er kommt in den `else`-Block.
4. Teste jede Grenze selbst und je einen Wert knapp darüber und darunter.
:::

```aufgabe
id: vz-mehr-gefuehrt-wind
titel: Windstärke einordnen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm für `kmh = 50` aus?
teile:
  - typ: ausgabe
    code: |
      int kmh = 50;
      if (kmh < 20) {
          System.out.println("schwach");
      } else if (kmh < 50) {
          System.out.println("mäßig");
      } else if (kmh < 75) {
          System.out.println("stark");
      } else {
          System.out.println("Sturm");
      }
    loesung: |
      stark
    fehler:
      - wert: "mäßig"
        meldung: '`50 < 50` ist falsch, weil 50 nicht echt kleiner als 50 ist. Die Grenze 50 gehört schon zur nächsten Stufe.'
      - wert: "stark\nSturm"
        meldung: In einer Kette läuft höchstens ein Block. Nach dem ersten Treffer ist Schluss.
hinweise:
  - Prüfe die Bedingungen von oben nach unten und hör beim ersten `true` auf.
  - Achte bei `50 < 50` darauf, dass `<` die Grenze nicht einschließt.
gefuehrt:
  - text: Ist die erste Bedingung `50 < 20` wahr?
    teil: { typ: ausgabe, code: "System.out.println(50 < 20);", loesung: "false" }
    erklaerung: Nein. Java geht zum nächsten `else if`.
  - text: Ist die zweite Bedingung `50 < 50` wahr?
    teil: { typ: ausgabe, code: "System.out.println(50 < 50);", loesung: "false" }
    erklaerung: Nein, 50 ist nicht echt kleiner als 50.
  - text: Ist die dritte Bedingung `50 < 75` wahr?
    teil: { typ: ausgabe, code: "System.out.println(50 < 75);", loesung: "true" }
    erklaerung: Ja. Java führt diesen Block aus und gibt `stark` aus.
  - text: Wird der `else`-Block danach auch noch ausgeführt? Überlege kurz.
    erklaerung: Nein. Nach dem ersten Treffer springt Java hinter das Ende der Kette.
loesung: |
  **Ansatz:** Bedingungen von oben nach unten prüfen, beim ersten `true` stoppen.
  ---
  `50 < 20` ist falsch, `50 < 50` ist falsch, `50 < 75` ist wahr.
  ---
  Ausgabe `stark`. Der `else`-Block läuft nicht mehr. Kontrolle: Die Stufe „stark“ umfasst 50 bis 74, also passt 50 hinein.
```

```aufgabe
id: vz-mehr-kette-ausgabe
titel: Eine Kette mit Teilbarkeit
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int n = 30;
      if (n % 7 == 0) {
          System.out.println("durch 7");
      } else if (n % 5 == 0) {
          System.out.println("durch 5");
      } else if (n % 3 == 0) {
          System.out.println("durch 3");
      } else {
          System.out.println("keins davon");
      }
    loesung: |
      durch 5
    fehler:
      - wert: "durch 5\ndurch 3"
        meldung: 30 ist zwar auch durch 3 teilbar, aber die Kette endet beim ersten Treffer.
hinweise:
  - Berechne `30 % 7`, `30 % 5` und `30 % 3` und geh die Kette von oben durch.
loesung: |
  **Ansatz:** Von oben nach unten prüfen und beim ersten `true` stoppen.
  ---
  `30 % 7` ist 2, also falsch. `30 % 5` ist 0, also wahr: Ausgabe `durch 5`. Die Prüfung auf 3 findet nicht mehr statt.
```

```aufgabe
id: vz-mehr-unabhaengig-vs-kette
titel: Kette oder einzelne if?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Die beiden Programme unterscheiden sich nur durch das Wort `else`. Was gibt jedes aus?
teile:
  - typ: ausgabe
    label: Programm 1
    code: |
      int x = 12;
      if (x > 10) {
          System.out.println("A");
      }
      if (x > 5) {
          System.out.println("B");
      }
      if (x % 2 == 0) {
          System.out.println("C");
      }
    loesung: |
      A
      B
      C
    fehler:
      - wert: "A"
        meldung: Hier stehen drei unabhängige `if`-Anweisungen. Java prüft jede einzeln.
  - typ: ausgabe
    label: Programm 2
    code: |
      int x = 12;
      if (x > 10) {
          System.out.println("A");
      } else if (x > 5) {
          System.out.println("B");
      } else if (x % 2 == 0) {
          System.out.println("C");
      }
    loesung: |
      A
    fehler:
      - wert: "A\nB\nC"
        meldung: Das ist eine Kette. Nach dem ersten wahren Zweig ist Schluss.
hinweise:
  - Alle drei Bedingungen sind für `x = 12` wahr. Entscheidend ist nur, ob die Blöcke unabhängig sind oder eine Kette bilden.
  - In Programm 2 endet die Kette beim ersten Treffer.
loesung: |
  **Ansatz:** Für `x = 12` sind alle drei Bedingungen wahr. Der Unterschied liegt nur in der Bauform.
  ---
  Programm 1: drei unabhängige `if`, alle drei Blöcke laufen. Ausgabe `A`, `B`, `C`.
  ---
  Programm 2: Kette. Der erste Treffer `12 > 10` gibt `A` aus, danach ist Schluss.
```

```aufgabe
id: vz-mehr-dangling
titel: Zu welchem if gehört das else?
niveau: 2
lernziel: 0
kompetenz: verstehen
quelle: Folie „Dangling else“ (VO EP1 WS2021), mit anderen Werten
angabe: |
  Was gibt das Programm aus? Die Einrückung ist absichtlich irreführend.
teile:
  - typ: ausgabe
    code: |
      int k = 4;
      if (k > 0)
          if (k > 10)
              System.out.println("groß");
      else
          System.out.println("nicht positiv");
      System.out.println("Ende");
    loesung: |
      nicht positiv
      Ende
    fehler:
      - wert: "Ende"
        meldung: Das `else` gehört nicht zum äußeren `if`, sondern zum letzten freien `if` davor, also zu `if (k > 10)`.
hinweise:
  - Ein `else` gehört immer zum letzten `if` davor, das noch kein `else` hat.
  - Lies das Programm so, als stünde das `else` direkt unter `if (k > 10)`.
loesung: |
  **Ansatz:** Zuerst klären, wozu das `else` gehört: zum letzten freien `if`, also zu `if (k > 10)`.
  ---
  `4 > 0` ist wahr, also betritt Java das äußere `if`. Innen ist `4 > 10` falsch, also läuft das zugehörige `else`.
  ---
  Ausgabe `nicht positiv`, obwohl 4 positiv ist. Die Meldung ist irreführend, weil der Programmierer die Zugehörigkeit falsch eingeschätzt hat. Danach folgt `Ende`.
```

```aufgabe
id: vz-mehr-ternaer
titel: Der Bedingungsoperator
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 7;
      int b = 7;
      String s = (a > b) ? "a" : "b oder gleich";
      int d = (a - b >= 0) ? a - b : b - a;
      System.out.println(s);
      System.out.println(d);
      System.out.println(a % 2 == 1 ? "ungerade" : "gerade");
    loesung: |
      b oder gleich
      0
      ungerade
    fehler:
      - wert: "a\n0\nungerade"
        meldung: '`7 > 7` ist falsch. Bei `false` liefert der Bedingungsoperator den Wert hinter dem Doppelpunkt.'
hinweise:
  - Bei `true` gilt der Wert vor dem Doppelpunkt, bei `false` der Wert danach.
  - Rechne in Zeile 4 zuerst `a - b` aus.
loesung: |
  **Ansatz:** Jede Bedingung auswerten und dann den Wert vor oder nach dem `:` nehmen.
  ---
  Zeile 3: `7 > 7` ist `false`, also `s = "b oder gleich"`. Zeile 4: `0 >= 0` ist `true`, also `d = a - b = 0`.
  ---
  Zeile 7: `7 % 2 == 1` ist `true`, also `ungerade`. Zeile 4 berechnet übrigens den Abstand der beiden Zahlen.
```

```aufgabe
id: vz-mehr-reihenfolge-fehler
titel: Fehler in der Kette finden
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Thermometer soll unter 0 Grad `Eis`, von 0 bis 29 Grad `normal` und ab 30 Grad `heiß` melden.
  Welche Zeilen enthalten einen Fehler, sodass ein Wert falsch eingeordnet wird?
teile:
  - typ: zeilen
    code: |
      int t = 30;
      if (t < 30) {
          System.out.println("normal");
      } else if (t < 0) {
          System.out.println("Eis");
      } else {
          System.out.println("heiß");
      }
    loesung: [2, 4]
    fehler:
      - wert: [4]
        meldung: Zeile 4 ist unerreichbar, aber der Fehler entsteht schon vorher. Zeile 2 fängt auch die negativen Werte als `normal` ab.
hinweise:
  - Teste die Kette mit `t = -5`. Welche Ausgabe entsteht?
  - Bei `<` müssen die Grenzen von der kleinsten aufwärts geprüft werden. Welche zwei Bedingungen stehen in der falschen Reihenfolge?
loesung: |
  **Ansatz:** Mit Testwerten aus jedem Bereich prüfen, zum Beispiel -5, 10 und 30.
  ---
  Bei `t = -5` ist schon `-5 < 30` in Zeile 2 wahr. Ausgabe `normal`, richtig wäre `Eis`. Die Bedingung in Zeile 4 wird nie wahr, wenn Zeile 2 falsch war.
  ---
  Die Zeilen 2 und 4 stehen in der falschen Reihenfolge. Richtig: zuerst `t < 0`, dann `t < 30`, sonst `heiß`.
```

```aufgabe
id: vz-mehr-pakete-code
titel: Pakete in Klassen einteilen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2018, Aufgabe 2A (Gewichtsklassen), mit anderen Klassen nachgebaut
angabe: |
  Ein Versanddienst teilt Sendungen nach dem Gewicht `kg` (ganze Kilogramm) ein:

  |Gewicht|Ausgabe|
  |---|---|
  |unter 1 kg|`Klasse: Päckchen`|
  |1 bis 4 kg|`Klasse: Paket S`|
  |5 bis 14 kg|`Klasse: Paket M`|
  |15 bis 29 kg|`Klasse: Paket L`|
  |ab 30 kg|`Klasse: Sperrgut`|

  Schreib den Rumpf von `druckeKlasse` (den Code zwischen den geschweiften Klammern der Methode) mit **einer else-if-Kette**. Die Methode bekommt das Gewicht im
  Parameter `kg` und gibt genau eine Zeile aus. Wie Methoden genau funktionieren, lernst du in
  [Kapitel 6](/lernen/ep1/methoden). Hier genügt: `kg` ist eine `int`-Variable, die die Tests mit
  verschiedenen Werten belegen.
teile:
  - typ: code
    vorlage: |
      public class Versand {
          public static void druckeKlasse(int kg) {
              // TODO: else-if-Kette
          }
      }
    musterloesung: |
      public class Versand {
          public static void druckeKlasse(int kg) {
              if (kg < 1) {
                  System.out.println("Klasse: Päckchen");
              } else if (kg < 5) {
                  System.out.println("Klasse: Paket S");
              } else if (kg < 15) {
                  System.out.println("Klasse: Paket M");
              } else if (kg < 30) {
                  System.out.println("Klasse: Paket L");
              } else {
                  System.out.println("Klasse: Sperrgut");
              }
          }
      }
    tests:
      - { aufruf: "druckeKlasse(0)", stdout: "Klasse: Päckchen" }
      - { aufruf: "druckeKlasse(3)", stdout: "Klasse: Paket S" }
      - { aufruf: "druckeKlasse(14)", stdout: "Klasse: Paket M" }
      - { aufruf: "druckeKlasse(15)", stdout: "Klasse: Paket L" }
      - { aufruf: "druckeKlasse(30)", stdout: "Klasse: Sperrgut" }
      - { aufruf: "druckeKlasse(1)", stdout: "Klasse: Paket S", versteckt: true }
      - { aufruf: "druckeKlasse(5)", stdout: "Klasse: Paket M", versteckt: true }
      - { aufruf: "druckeKlasse(29)", stdout: "Klasse: Paket L", versteckt: true }
    regeln: { keineSchleifen: true, keineHilfsmethoden: true }
    fehler:
      - { wert: 3, meldung: "14 kg gehören noch zu Paket M. Prüfst du mit `kg < 14` oder `kg <= 13`? Die Obergrenze 14 ist eingeschlossen, also `kg < 15`." }
      - { wert: 5, meldung: "Genau 30 kg sind schon Sperrgut. „Ab 30“ schließt die 30 ein." }
hinweise:
  - 'Schreib die Grenzen als Untergrenzen der nächsten Klasse auf: 1, 5, 15, 30. Dann brauchst du nur Vergleiche mit `<`.'
  - Beginne mit der kleinsten Grenze `kg < 1` und arbeite dich nach oben. Der letzte Fall kommt in den `else`-Block.
loesung: |
  **Ansatz:** Die Bereiche lückenlos von klein nach groß ordnen und mit `<` gegen die Untergrenze der nächsten Klasse prüfen.
  ---
  ```java
  if (kg < 1) {
      System.out.println("Klasse: Päckchen");
  } else if (kg < 5) {
      System.out.println("Klasse: Paket S");
  } else if (kg < 15) {
      System.out.println("Klasse: Paket M");
  } else if (kg < 30) {
      System.out.println("Klasse: Paket L");
  } else {
      System.out.println("Klasse: Sperrgut");
  }
  ```
  ---
  Warum reicht jeweils eine Grenze? Im Zweig `kg < 5` ist schon sicher, dass `kg < 1` falsch war, also `kg >= 1`.
  Probe an den Grenzen: 4 ergibt `Paket S`, 5 ergibt `Paket M`, 29 ergibt `Paket L`, 30 ergibt `Sperrgut`.
```

```reflexion
frage: Warum muss man bei einer else-if-Kette mit `>=` die größte Grenze zuerst prüfen, bei `<` aber die kleinste? Erkläre es am Notenschlüssel.
antwort: |
  Die Kette nimmt den ersten wahren Zweig. Eine Bedingung wie `punkte >= 65` ist für alle Werte ab 65 wahr, also auch
  für 95. Stünde sie oben, würde sie alle guten Noten „verschlucken“. Steht dagegen `punkte >= 92` oben, fängt sie nur
  die besten Werte ab. Alle anderen fallen zur nächsten Bedingung durch, die dann nur noch die nächste Grenze prüfen
  muss. Bei `<` ist es spiegelbildlich: `t < 30` ist auch für alle kleinen Werte wahr, deshalb muss `t < 0` davor stehen.
  Allgemein gilt: Zuerst kommt die Bedingung, die den engsten Bereich am Rand abschneidet.
```

```aufgabe
id: vz-mehr-max3-code
titel: Minimum von drei Zahlen ohne Math.min
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Folie „Beispiel (Maximum dreier Zahlen)“ (VO EP1 WS2021), als Methode umformuliert
angabe: |
  Schreib den Rumpf von `druckeMinimum`. Die Methode gibt die **kleinste** der drei Zahlen `a`, `b`, `c` aus.
  Verwende nur Verzweigungen, keine Methoden der Klasse `Math`.
teile:
  - typ: code
    vorlage: |
      public class Kleinste {
          public static void druckeMinimum(int a, int b, int c) {
              // TODO
          }
      }
    musterloesung: |
      public class Kleinste {
          public static void druckeMinimum(int a, int b, int c) {
              int min = a;
              if (b < min) {
                  min = b;
              }
              if (c < min) {
                  min = c;
              }
              System.out.println(min);
          }
      }
    tests:
      - { aufruf: "druckeMinimum(5, 2, 9)", stdout: "2" }
      - { aufruf: "druckeMinimum(1, 2, 3)", stdout: "1" }
      - { aufruf: "druckeMinimum(8, 7, -4)", stdout: "-4" }
      - { aufruf: "druckeMinimum(3, 3, 3)", stdout: "3", beschreibung: "alle gleich" }
      - { aufruf: "druckeMinimum(6, 4, 4)", stdout: "4", versteckt: true }
      - { aufruf: "druckeMinimum(-2, 0, -2)", stdout: "-2", versteckt: true }
    regeln: { keineSchleifen: true, keineHilfsmethoden: true, verboteneApi: ["Math.min", "Math.max"] }
    fehler:
      - { wert: 3, meldung: "Liegt die kleinste Zahl an der dritten Stelle, muss `c` am Ende noch mit dem bisherigen Minimum verglichen werden." }
      - { wert: 4, meldung: "Bei gleichen Zahlen darf keine Ausgabe fehlen und keine doppelt erscheinen. Gibst du genau einmal etwas aus?" }
      - { wert: "verboteneApi", meldung: "`Math.min` ist hier verboten. Löse den Vergleich mit `if`." }
hinweise:
  - Es gibt zwei Wege. Entweder verschachtelst du wie im Beispiel zum Maximum, oder du merkst dir das bisher Kleinste in einer Variablen.
  - 'Variablen-Weg: Starte mit `int min = a;`. Prüfe danach, ob `b` kleiner ist, und dann, ob `c` kleiner ist.'
loesung: |
  **Ansatz:** Das bisher Kleinste in einer Variablen merken und mit zwei unabhängigen `if` verbessern.
  ---
  ```java
  int min = a;
  if (b < min) {
      min = b;
  }
  if (c < min) {
      min = c;
  }
  System.out.println(min);
  ```
  ---
  Die beiden `if` sind absichtlich keine Kette: Beide Prüfungen müssen laufen. Probe mit `(8, 7, -4)`: `min` wird 8, dann 7, dann -4.
  Bei `(3, 3, 3)` ist keine Bedingung wahr, `min` bleibt 3. Die verschachtelte Fassung aus dem Beispiel zum Maximum ist ebenso richtig, wenn man `>` durch `<` ersetzt.
```

## Was gilt an dieser Stelle? Startwerte rückwärts finden

```aufgabe
id: vz-start-check-verschachtelt
titel: Innen nur, wenn außen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Verschachtelte Verzweigungen kennst du aus
  [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
teile:
  - typ: ausgabe
    code: |
      int x = 2;
      if (x > 5) {
          if (x > 0) {
              System.out.println("innen");
          }
      }
      System.out.println("fertig");
    loesung: |
      fertig
    fehler:
      - wert: "innen\nfertig"
        meldung: Die innere Bedingung wäre zwar wahr, aber Java kommt gar nicht hinein. Die äußere Bedingung `2 > 5` ist falsch.
loesung: |
  `2 > 5` ist `false`. Der ganze äußere Block mit dem inneren `if` wird übersprungen.
  ---
  Nur `fertig` erscheint.
```

Im ersten Quiz von EP1 kam 2021 eine Frage dieser Art vor, im Übungstest und im echten Test. Ein Programm baut aus Buchstaben einen
Text zusammen. Die Startwerte von `x`, `y` und `z` sind durch `/* ? */` ersetzt. Gefragt ist, welche
von drei Startbelegungen die Ausgabe `AD` erzeugt. Mit Raten verlierst du hier viel Zeit. Mit einer
festen Methode löst du solche Fragen in zwei Minuten.

Die Programme in diesem Abschnitt hängen Buchstaben an einen String an. `s += "A";` ist die Kurzform
von `s = s + "A";`. Es hängt also `A` an den bisherigen Inhalt von `s` an. Am Anfang ist `s` leer:
`String s = "";` speichert einen Text ohne Zeichen.

### Zusicherungen: Was weiß das Programm an einer Stelle?

Zu jeder Zeile in einem verzweigten Programm kannst du fragen: Welche Bedingungen müssen wahr gewesen
sein, damit Java überhaupt hierher kommt? Diese Bedingung heißt **Zusicherung** an dieser Stelle.

:::definition[Zusicherung]
Eine **Zusicherung** ist eine Bedingung, die an einer bestimmten Stelle im Programm **immer** wahr
ist, egal mit welchen Startwerten das Programm dort ankommt. Man schreibt sie gern als Kommentar.

- Im Block eines `if (a > b)` gilt die Zusicherung `a > b`.
- Im `else`-Block desselben `if` gilt das Gegenteil, also `a <= b`.
- In einem inneren Block gelten **alle** Bedingungen der umgebenden Blöcke zusammen, verbunden mit `&&`.

**Beispiel:** Im Block von `if (x > 0) { if (x < 10) { ... } }` gilt innen `x > 0 && x < 10`.
**Nichtbeispiel:** `x < 10` allein ist an dieser inneren Stelle zwar wahr, aber **nicht vollständig**. Wer die äußere Bedingung `x > 0` vergisst, hält auch `x = -3` für möglich.
:::

:::beispiel[Ein Programm mit Zusicherungen beschriften]
```java
int x = 9, y = 2, z = 4;
String s = "";
if (x > y) {
    // hier gilt: x > y
    if (x - y > z) {
        s += "A";            // hier gilt: x > y && x - y > z
    } else {
        s += "B";            // hier gilt: x > y && x - y <= z
    }
}
if (z > 2 * x) {
    s += "C";                // hier gilt: z > 2 * x
} else {
    s += "D";                // hier gilt: z <= 2 * x
}
System.out.println(s);
```

Zuerst vorwärts mit den Startwerten 9, 2, 4:

1. `9 > 2` ist wahr. Java betritt den äußeren Block.
2. `9 - 2 > 4` heißt `7 > 4`, wahr. `s` wird `"A"`.
3. Das zweite `if` ist **unabhängig** vom ersten. `4 > 2 · 9` heißt `4 > 18`, falsch. `s` wird `"AD"`.
4. Ausgabe: `AD`.

Jetzt lies die Kommentare. Sie sagen dir für jeden Buchstaben, welche Bedingung die Startwerte
erfüllen müssen. Ein `A` entsteht **nur**, wenn `x > y && x - y > z` gilt. Ein `D` entsteht nur, wenn
`z <= 2 * x` gilt. Genau diese Liste brauchst du für den Rückwärtsweg.
:::

### Das Rückwärtsverfahren

Bei der Quizfrage ist die Ausgabe gegeben, und gesucht sind die Startwerte. Du gehst so vor:

1. **Ausgabe zerlegen:** Welche `if`-Anweisung hat welchen Buchstaben erzeugt? Bei `AD` stammt `A` aus dem ersten und `D` aus dem zweiten `if`.
2. **Zusicherungen aufschreiben:** Für jeden Buchstaben die vollständige Bedingung, inklusive aller äußeren `if`.
3. **Kandidaten prüfen:** Setze jede angebotene Belegung ein. Sobald **eine** Bedingung verletzt ist, streichst du den Kandidaten. Du musst nicht weiterrechnen.
4. **Probe vorwärts:** Rechne den übrig gebliebenen Kandidaten einmal ganz vorwärts durch.

:::beispiel[Eine Quizfrage nach Schema lösen]
Welche Startwerte erzeugen im Programm aus dem vorigen Beispiel die Ausgabe `BC`?

- (a) `x = 5, y = 1, z = 2`.
- (b) `x = 3, y = 1, z = 7`.
- (c) `x = 1, y = 4, z = 9`.

**Schritt 1:** `B` kommt aus dem ersten `if`, `C` aus dem zweiten.

**Schritt 2:** Für `B` gilt `x > y && x - y <= z`. Für `C` gilt `z > 2 * x`.

**Schritt 3:**

- (a) `5 > 1` stimmt, aber `5 - 1 <= 2` heißt `4 <= 2`, falsch. Gestrichen. Dieser Kandidat liefert ein `A`.
- (b) `3 > 1` stimmt, `3 - 1 <= 7` heißt `2 <= 7`, stimmt. Für `C`: `7 > 6` stimmt. Kandidat bleibt.
- (c) `1 > 4` ist falsch. Java betritt den äußeren Block gar nicht, es entsteht weder `A` noch `B`. Gestrichen.

**Schritt 4, Probe für (b):** `3 > 1`, dann `2 > 7` falsch, also `B`. Dann `7 > 6` wahr, also `C`. Ausgabe `BC`.
:::

```aufgabe
id: vz-start-check-zusicherung-d
titel: Die Zusicherung für D
niveau: 1
art: check
angabe: |
  Im Programm des Beispiels steht `s += "D";` im `else`-Zweig von `if (z > 2 * x)`. Welche Zusicherung gilt dort?
teile:
  - typ: auswahl
    optionen: ['`z <= 2 * x`', '`z < 2 * x`', '`x > y && z <= 2 * x`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Gegenteil von `>` ist `<=`, nicht `<`. Bei `z == 2 * x` läuft ebenfalls der `else`-Zweig.
      - wert: 2
        meldung: Das zweite `if` steht nicht im Block von `if (x > y)`. Es ist unabhängig, deshalb gehört `x > y` nicht dazu.
loesung: |
  Im `else`-Zweig ist die Bedingung `z > 2 * x` falsch. Verneint heißt das `z <= 2 * x`.
  ---
  Das zweite `if` steht außerhalb des ersten, also kommt keine weitere Bedingung dazu.
```

:::achtung[Zu welchem if gehört das else?]
In zwei Quiz-Versionen von 2021 sahen die Programme fast gleich aus. Einmal gehörte das `else` zum
**inneren** `if`, einmal zum **äußeren**:

```java
// Version 1                       // Version 2
if (x > y) {                       if (x > y) {
    if (x - y > z) {                   if (x - y > z) {
        s += "A";                          s += "A";
    } else {                           }
        s += "B";                      } else {
    }                                      s += "B";
}                                      }
```

Mit `x = 1, y = 4, z = 9` und dem zweiten `if` von vorhin liefert Version 1 nur `C`, Version 2 aber
`BC`. In Version 2 entsteht `B`, wenn `x > y` **falsch** ist. Wer die Klammern nicht genau zählt,
schreibt für `B` die Zusicherung der falschen Version auf. Folge den geschweiften Klammern, nicht dem
ersten Eindruck.
:::

:::achtung[Die äußere Bedingung vergessen]
Gesucht sind Startwerte für ein `A` in Version 1. Jemand prüft nur die innere Bedingung `x - y > z`
und wählt `x = 2, y = 5, z = -10`. Tatsächlich ist `2 - 5 > -10`, also `-3 > -10`, wahr. Trotzdem
entsteht kein `A`: Die äußere Bedingung `2 > 5` ist falsch, und Java kommt nie zur inneren Prüfung.
Die Zusicherung für `A` lautet vollständig `x > y && x - y > z`.
:::

:::merke[Startwerte zu einer Ausgabe finden]
1. Ordne jeden Buchstaben der Ausgabe seiner `if`-Anweisung zu.
2. Schreib für jeden Buchstaben die vollständige Zusicherung auf: alle umgebenden Bedingungen mit `&&` verbunden, im `else` jeweils verneint.
3. Prüfe die Kandidaten der Reihe nach und streiche beim ersten Widerspruch.
4. Mach mit dem letzten Kandidaten eine Probe vorwärts.
:::

```aufgabe
id: vz-start-gefuehrt-ad
titel: Die Quizfrage „Startwerte für AD“
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: TUWEL-Test zur Vorbereitung (TUWEL-Test 1) WS2021, Frage 3, mit neuen Startwerten
angabe: |
  ```java
  String s = "";
  if (x < y) {
      if (x + y < z) {
          s += "A";
      } else {
          s += "B";
      }
  }
  if (z < 3 * y) {
      s += "C";
  } else {
      s += "D";
  }
  System.out.println(s);
  ```

  Welche Startwerte erzeugen die Ausgabe `AD`?
teile:
  - typ: auswahl
    optionen: ['`int x = -2, y = 5, z = 10;`', '`int x = -4, y = 6, z = 20;`', '`int x = 3, y = 1, z = 0;`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das `A` stimmt: `-2 < 5` und `3 < 10`. Für `D` müsste aber `z < 3 * y` falsch sein. Hier ist `10 < 15` wahr, es entsteht `C`.'
      - wert: 2
        meldung: '`3 < 1` ist falsch. Java betritt den äußeren Block nicht, es entsteht weder `A` noch `B`.'
hinweise:
  - Schreib zuerst die Zusicherungen auf. Für `A` gilt `x < y && x + y < z`, für `D` gilt `z >= 3 * y`.
  - Prüfe jede Belegung gegen diese beiden Bedingungen und streiche beim ersten Widerspruch.
gefuehrt:
  - text: Welche vollständige Bedingung muss für das `A` gelten? Überlege, dann klick weiter.
    erklaerung: '`A` liegt im inneren Block. Also gilt `x < y && x + y < z`.'
  - text: Welche Bedingung muss für das `D` gelten?
    erklaerung: '`D` liegt im `else` des zweiten `if`. Also ist `z < 3 * y` falsch, das heißt `z >= 3 * y`.'
  - text: 'Prüfe Kandidat 1 mit `x = -2, y = 5, z = 10`. Was gibt das Programm wirklich aus?'
    teil: { typ: ausgabe, code: "int x = -2, y = 5, z = 10;\nString s = \"\";\nif (x < y) { if (x + y < z) { s += \"A\"; } else { s += \"B\"; } }\nif (z < 3 * y) { s += \"C\"; } else { s += \"D\"; }\nSystem.out.println(s);", loesung: "AC" }
    erklaerung: '`10 < 15` ist wahr, also entsteht `C` statt `D`. Kandidat 1 fällt weg.'
  - text: 'Prüfe Kandidat 2 mit `x = -4, y = 6, z = 20`. Was gibt das Programm aus?'
    teil: { typ: ausgabe, code: "int x = -4, y = 6, z = 20;\nString s = \"\";\nif (x < y) { if (x + y < z) { s += \"A\"; } else { s += \"B\"; } }\nif (z < 3 * y) { s += \"C\"; } else { s += \"D\"; }\nSystem.out.println(s);", loesung: "AD" }
    erklaerung: '`-4 < 6`, `2 < 20` und `20 >= 18`. Das ist die gesuchte Belegung.'
loesung: |
  **Ansatz:** Zusicherungen aufschreiben. `A`: `x < y && x + y < z`. `D`: `z >= 3 * y`.
  ---
  Kandidat 1: `A` passt, aber `10 >= 15` ist falsch. Es entsteht `AC`. Kandidat 3: `3 < 1` ist falsch, es entsteht nur `C`, denn `0 < 3`.
  ---
  Kandidat 2: `-4 < 6` wahr, `-4 + 6 = 2 < 20` wahr, `20 >= 18` wahr. Probe vorwärts: `A`, dann `20 < 18` falsch, also `D`. Ausgabe `AD`.
```

```aufgabe
id: vz-start-vorwaerts
titel: Erst einmal vorwärts
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int x = 2, y = 7, z = 8;
      String s = "";
      if (x < y) {
          if (x + y < z) {
              s += "A";
          } else {
              s += "B";
          }
      }
      if (z < 3 * y) {
          s += "C";
      } else {
          s += "D";
      }
      System.out.println(s);
    loesung: |
      BC
    fehler:
      - wert: "AC"
        meldung: '`x + y` ist `9`, und `9 < 8` ist falsch. Es läuft der `else`-Zweig des inneren `if`.'
      - wert: "B"
        meldung: Das zweite `if` ist unabhängig vom ersten und liefert immer noch einen Buchstaben.
hinweise:
  - Werte die drei Bedingungen der Reihe nach aus und notiere nach jedem `if` den Inhalt von `s`.
loesung: |
  **Ansatz:** Vorwärts rechnen und nach jedem `if` den Inhalt von `s` notieren.
  ---
  `2 < 7` ist wahr. Innen: `2 + 7 < 8` heißt `9 < 8`, falsch, also `s = "B"`. Dann `8 < 21` wahr, also `s = "BC"`.
```

```aufgabe
id: vz-start-zusicherung-waehlen
titel: Die richtige Zusicherung
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  ```java
  if (a >= 0) {
      if (b > a) {
          System.out.println("P");
      } else {
          System.out.println("Q");   // Stelle X
      }
  }
  ```

  Welche Bedingung gilt an der Stelle X immer?
teile:
  - typ: auswahl
    optionen: ['`a >= 0 && b <= a`', '`b <= a`', '`a >= 0 && b > a`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das stimmt an der Stelle X, ist aber unvollständig. Die äußere Bedingung `a >= 0` gilt dort ebenfalls.
      - wert: 2
        meldung: Stelle X liegt im `else`-Zweig des inneren `if`. Dort ist `b > a` falsch, nicht wahr.
hinweise:
  - Sammle alle Bedingungen auf dem Weg zur Stelle X. Im `else` wird die Bedingung verneint.
loesung: |
  **Ansatz:** Den Weg zur Stelle X verfolgen und jede Bedingung auf dem Weg notieren.
  ---
  Äußeres `if`: `a >= 0` wahr. Inneres `if`: Stelle X ist im `else`, also ist `b > a` falsch, das heißt `b <= a`. Zusammen: `a >= 0 && b <= a`.
```

```aufgabe
id: vz-start-ac-waehlen
titel: Startwerte für AC
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  ```java
  String s = "";
  if (x > y) {
      if (x - y > z) {
          s += "A";
      }
  } else {
      s += "B";
  }
  if (z > 2 * x) {
      s += "C";
  } else {
      s += "D";
  }
  System.out.println(s);
  ```

  Welche Startwerte erzeugen die Ausgabe `AC`? Achte genau darauf, zu welchem `if` das `else` gehört.
teile:
  - typ: auswahl
    optionen: ['`int x = 5, y = 0, z = 3;`', '`int x = -5, y = -20, z = 0;`', '`int x = 2, y = 6, z = 9;`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das `A` entsteht, denn `5 > 0` und `5 > 3`. Für `C` müsste aber `3 > 10` gelten. Es entsteht `AD`.'
      - wert: 2
        meldung: '`2 > 6` ist falsch. Hier gehört das `else` zum äußeren `if`, also entsteht `B` und kein `A`.'
hinweise:
  - Das `else` mit `B` gehört hier zum äußeren `if`. Die Zusicherung für `A` lautet `x > y && x - y > z`.
  - 'Für `C` gilt `z > 2 * x`. Bei negativem `x` ist `2 * x` negativ, und schon `z = 0` ist größer.'
loesung: |
  **Ansatz:** Zusicherungen: `A` braucht `x > y && x - y > z`, `C` braucht `z > 2 * x`.
  ---
  Kandidat 1: `A` passt, aber `3 > 10` ist falsch, also `D`. Kandidat 3: `2 > 6` ist falsch, also `B`.
  ---
  Kandidat 2: `-5 > -20` wahr. `-5 - (-20) = 15`, und `15 > 0` ist wahr. `0 > -10` ist wahr. Probe vorwärts ergibt `AC`.
```

```aufgabe
id: vz-start-trace-zweige
titel: Welcher Zweig läuft?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Nimm das Programm aus der Aufgabe „Die Quizfrage Startwerte für AD“ (Bedingungen `x < y`, `x + y < z` und `z < 3 * y`).
  Trage für jede Belegung ein, welcher Buchstabe im ersten `if` entsteht (`A`, `B` oder `keiner`), welcher im zweiten und
  wie die Ausgabe lautet.
teile:
  - typ: trace
    spalten: ["erstes if", "zweites if", "Ausgabe"]
    zeilen: ["x = 1, y = 4, z = 10", "x = 6, y = 2, z = 1", "x = 0, y = 3, z = 1"]
    loesung:
      - ["A", "C", "AC"]
      - ["keiner", "C", "C"]
      - ["B", "C", "BC"]
    fehler:
      - wert: ["A", "C", "AC", "B", "C", "BC", "B", "C", "BC"]
        meldung: Bei `x = 6, y = 2` ist `x < y` falsch. Das innere `if` mit `A` und `B` wird gar nicht erreicht, es entsteht kein Buchstabe.
hinweise:
  - Prüfe zuerst `x < y`. Nur wenn das wahr ist, entsteht im ersten `if` überhaupt ein Buchstabe.
  - Das zweite `if` liefert immer `C` oder `D`.
loesung: |
  **Ansatz:** Für jede Belegung zuerst das äußere `if`, dann das innere, dann das zweite `if` auswerten.
  ---
  `(1, 4, 10)`: `1 < 4` wahr, `5 < 10` wahr, also `A`. `10 < 12` wahr, also `C`. Ausgabe `AC`.
  `(6, 2, 1)`: `6 < 2` falsch, kein Buchstabe. `1 < 6` wahr, also `C`. Ausgabe `C`.
  ---
  `(0, 3, 1)`: `0 < 3` wahr, `3 < 1` falsch, also `B`. `1 < 9` wahr, also `C`. Ausgabe `BC`.
```

```aufgabe
id: vz-start-kleinstes-z
titel: Das kleinste passende z
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Nimm das Programm aus der Aufgabe „Die Quizfrage Startwerte für AD“. Dort gilt nun `x = 2` und `y = 5`. Welches ist das **kleinste** ganzzahlige `z`, für das die Ausgabe `AD` lautet?
teile:
  - typ: zahl
    loesung: "15"
    fehler:
      - wert: "8"
        meldung: Mit `z = 8` entsteht zwar das `A`, aber das zweite `if` liefert `C`, weil `8 < 15` wahr ist.
      - wert: "16"
        meldung: Fast. Für `D` muss `z < 15` falsch sein. Das ist schon bei `z = 15` der Fall.
hinweise:
  - Schreib beide Zusicherungen mit eingesetzten Werten auf. Für `A` gilt `7 < z`, für `D` gilt `z >= 15`.
  - Gesucht ist die kleinste ganze Zahl, die beide Bedingungen erfüllt.
loesung: |
  **Ansatz:** Beide Zusicherungen mit `x = 2`, `y = 5` aufschreiben. `x < y` ist mit `2 < 5` schon erfüllt.
  ---
  `A` verlangt `2 + 5 < z`, also `z > 7`. `D` verlangt `z >= 3 · 5`, also `z >= 15`.
  ---
  Beide zusammen: `z >= 15`. Das kleinste `z` ist 15. Probe: `7 < 15` gibt `A`, `15 < 15` ist falsch, also `D`. Mit `z = 14` entstünde `AC`.
```

```aufgabe
id: vz-start-moegliche-ausgaben
titel: Welche Ausgaben sind möglich?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Betrachte wieder das Programm mit `x < y`, `x + y < z` und `z < 3 * y`, bei dem das `else` mit `B` zum **inneren**
  `if` gehört. Beurteile die Aussagen für beliebige `int`-Startwerte.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Ausgabe `AB` ist möglich.
        richtig: false
        erklaerung: '`A` und `B` stehen im selben `if`-`else`. Von beiden läuft höchstens einer.'
      - text: Die Ausgabe `D` ganz allein ist möglich.
        richtig: true
        erklaerung: 'Ist `x < y` falsch, entsteht im ersten `if` nichts. Mit `x = 5, y = 1, z = 9` ist auch `9 < 3` falsch, also nur `D`.'
      - text: Die Ausgabe kann ganz leer sein.
        richtig: false
        erklaerung: Das zweite `if` hat einen `else`-Zweig und liefert immer `C` oder `D`.
      - text: Jede Ausgabe endet mit `C` oder `D`.
        richtig: true
        erklaerung: Das zweite `if` steht nach dem ersten und läuft immer, also kommt sein Buchstabe zuletzt.
    fehler:
      - wert: [f, f, f, t]
        meldung: Für ein einzelnes `D` muss nur das erste `if` gar nichts liefern. Das passiert, wenn `x < y` falsch ist.
hinweise:
  - Überlege für jedes `if`, ob es keinen, genau einen oder einen von zwei Buchstaben liefern kann.
  - Das erste `if` hat außen kein `else`. Was passiert, wenn `x < y` falsch ist?
loesung: |
  **Ansatz:** Für jedes `if` die möglichen Beiträge auflisten. Erstes `if`: nichts, `A` oder `B`. Zweites `if`: `C` oder `D`.
  ---
  Möglich sind also `AC`, `AD`, `BC`, `BD`, `C` und `D`. `AB` und eine leere Ausgabe sind unmöglich.
  ---
  Richtig sind die Aussagen 2 und 4. Für Aussage 2 genügt ein Beispiel: `x = 5, y = 1, z = 9` ergibt `D`.
```

```reflexion
frage: Warum genügt beim Prüfen eines Kandidaten die erste verletzte Bedingung, um ihn zu streichen? Und warum macht man am Ende trotzdem eine Probe vorwärts?
antwort: |
  Jede Zusicherung ist eine notwendige Bedingung: Ohne sie kann der Buchstabe gar nicht entstehen. Ist eine davon
  verletzt, kann die gesuchte Ausgabe also nicht entstehen, egal wie die übrigen Bedingungen ausgehen. Das spart Zeit.
  Die Probe vorwärts schützt vor eigenen Fehlern beim Aufschreiben der Zusicherungen, etwa wenn man eine äußere
  Bedingung vergessen oder das `else` dem falschen `if` zugeordnet hat. Erst wenn der Kandidat vorwärts genau die
  gesuchte Ausgabe liefert, ist die Antwort sicher.
```

```aufgabe
id: vz-start-quiz-bd
titel: Quizfrage mit äußerem else
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: TUWEL-Test 1 WS2021 (26.11.2021), Frage 3, mit anderer gesuchter Ausgabe und neuen Startwerten
angabe: |
  ```java
  String s = "";
  if (x < y) {
      if (x + y < z) {
          s += "A";
      }
  } else {
      s += "B";
  }
  if (z < 3 * y) {
      s += "C";
  } else {
      s += "D";
  }
  System.out.print(s);
  ```

  Welche Startwerte führen zur Ausgabe `BD`?
teile:
  - typ: auswahl
    optionen: ['`int x = -3, y = -2, z = -9;`', '`int x = 4, y = 2, z = 5;`', '`int x = 5, y = 5, z = 20;`']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '`-3 < -2` ist wahr. Damit läuft der äußere erste Block, und `B` kann nicht entstehen. Innen ist `-5 < -9` falsch, es entsteht gar kein Buchstabe. Ausgabe `C`.'
      - wert: 1
        meldung: '`B` entsteht, weil `4 < 2` falsch ist. Aber `5 < 6` ist wahr, also folgt `C` und nicht `D`.'
hinweise:
  - Hier gehört das `else` mit `B` zum **äußeren** `if`. Die Zusicherung für `B` ist also `x >= y`.
  - Für `D` gilt `z >= 3 * y`. Prüfe beide Bedingungen für jeden Kandidaten.
loesung: |
  **Ansatz:** Zusicherungen für diese Fassung: `B` braucht `x >= y`, `D` braucht `z >= 3 * y`.
  ---
  Kandidat 1: `-3 >= -2` ist falsch. Gestrichen. Kandidat 2: `4 >= 2` stimmt, aber `5 >= 6` ist falsch. Gestrichen.
  ---
  Kandidat 3: `5 >= 5` stimmt, `20 >= 15` stimmt. Probe vorwärts: `5 < 5` falsch, also `B`. `20 < 15` falsch, also `D`. Ausgabe `BD`.
  Achtung: Bei `x = y` ist `x < y` falsch. Genau diese Grenze testet die Frage gern.
```

```aufgabe
id: vz-start-groesstes-y
titel: Das größte passende y
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  ```java
  String s = "";
  if (x > y) {
      if (x - y > z) {
          s += "A";
      } else {
          s += "B";
      }
  }
  if (z > 2 * x) {
      s += "C";
  } else {
      s += "D";
  }
  System.out.println(s);
  ```

  Es gilt `x = 10` und `z = 3`. Welches ist das **größte** ganzzahlige `y`, für das die Ausgabe `AD` lautet?
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "9"
        meldung: Mit `y = 9` ist zwar `x > y` erfüllt, aber `10 - 9 > 3` ist falsch. Dann entsteht `B` statt `A`.
      - wert: "7"
        meldung: 'Prüfe die Grenze: `10 - 7 > 3` heißt `3 > 3`, und das ist falsch.'
hinweise:
  - Für `A` gilt `x > y && x - y > z`. Setze `x = 10` und `z = 3` ein.
  - 'Prüfe auch das `D`: Gilt `z <= 2 * x` für alle `y`? Dann bleibt nur die Bedingung für `A` übrig.'
loesung: |
  **Ansatz:** Zusicherungen mit `x = 10`, `z = 3` aufschreiben. `A`: `10 > y && 10 - y > 3`. `D`: `3 <= 20`.
  ---
  `D` gilt immer, denn `3 <= 20` hängt nicht von `y` ab. `10 - y > 3` heißt `y < 7`. Zusammen mit `y < 10` bleibt `y < 7`.
  ---
  Das größte ganzzahlige `y` ist 6. Probe: `10 > 6`, `4 > 3`, also `A`; `3 > 20` falsch, also `D`. Mit `y = 7` entstünde `BD`.
```

## Die switch-Anweisung und der Fallthrough

```aufgabe
id: vz-sw-check-gleichheit
titel: Eine Kette aus Gleichheitsprüfungen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Die else-if-Kette kennst du aus
  [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
teile:
  - typ: ausgabe
    code: |
      int farbe = 2;
      if (farbe == 1) {
          System.out.println("rot");
      } else if (farbe == 2) {
          System.out.println("gelb");
      } else {
          System.out.println("grün");
      }
    loesung: |
      gelb
    fehler:
      - wert: "gelb\ngrün"
        meldung: In einer Kette läuft höchstens ein Block. Nach `gelb` ist Schluss.
loesung: |
  `2 == 1` ist falsch, `2 == 2` ist wahr. Ausgabe `gelb`.
  ---
  Der `else`-Block läuft nicht mehr, weil die Kette beim ersten Treffer endet.
```

Die Kette in dieser Frage vergleicht immer **dieselbe** Variable mit verschiedenen festen Werten.
Das kommt sehr oft vor: Monatsnummer, Wochentag, Menüpunkt, Note. Für genau diesen Fall hat Java eine
eigene Verzweigung, die `switch`-Anweisung. Das englische *switch* heißt „Schalter“. Man schaltet je
nach Wert an eine bestimmte Stelle.

### Aufbau der switch-Anweisung

```java
switch (tag) {
    case 1:
        System.out.println("Montag");
        break;
    case 2:
        System.out.println("Dienstag");
        break;
    default:
        System.out.println("anderer Tag");
        break;
}
```

Jedes Teil hat eine feste Aufgabe:

- `switch (tag)` wertet den Ausdruck in den runden Klammern **einmal** aus. Er heißt **Selektor**, also „Auswähler“.
- `case 1:` ist eine **case-Marke**. Hat der Selektor den Wert 1, springt Java genau hierher. Hinter dem Wert steht ein **Doppelpunkt**, kein Strichpunkt.
- `break;` beendet die ganze `switch`-Anweisung sofort. Java macht hinter der schließenden `}` weiter.
- `default:` ist die Marke für alle übrigen Werte. Sie ist wie das `else` am Ende einer Kette.

:::definition[switch-Anweisung]
Eine **switch-Anweisung** vergleicht den Wert des Selektors mit den Werten hinter den `case`-Marken.
Passt ein Wert, springt Java zu dieser Marke und führt **ab dort** alle Anweisungen aus, bis ein
`break` kommt oder die `switch`-Anweisung endet. Passt kein Wert, springt Java zu `default`. Fehlt
`default`, läuft gar nichts.

Regeln:

- Der Selektor darf (für EP1 wichtig) vom Typ `int`, `short`, `byte`, `char` oder `String` sein. Nicht erlaubt sind `long`, `double`, `float` und `boolean`.
- Hinter `case` steht ein **konstanter** Wert, etwa `3`, `'x'` oder `"Mai"`. Eine gewöhnliche Variable wie `grenze` aus `int grenze = 5;` ist dort nicht erlaubt.
- Jeder Wert darf nur bei **einer** `case`-Marke stehen.

**Beispiel:** `switch (monat) { case 12: ... }` mit `int monat` ist gültig.
**Nichtbeispiel:** `switch (preis) { case 9.99: ... }` mit `double preis` übersetzt der Compiler nicht. Er meldet `selector type double is not allowed`.
:::

:::beispiel[Ein Menü mit switch]
```java
char wahl = 'b';
switch (wahl) {
    case 'a':
        System.out.println("Neues Spiel");
        break;
    case 'b':
        System.out.println("Spiel laden");
        break;
    case 'q':
        System.out.println("Beenden");
        break;
    default:
        System.out.println("Unbekannte Taste");
}
System.out.println("Menü verlassen");
```

1. Zeile 1 speichert das Zeichen `'b'`. Einzelne Zeichen stehen in einfachen Anführungszeichen.
2. Zeile 2 wertet den Selektor aus: `'b'`.
3. Java sucht die passende Marke und springt zu `case 'b':` in Zeile 6.
4. Zeile 7 gibt `Spiel laden` aus. Zeile 8 `break;` beendet den `switch`.
5. Java macht in Zeile 15 weiter: `Menü verlassen`.

```text
Spiel laden
Menü verlassen
```

Mit `wahl = 'x'` passt keine Marke. Java springt zu `default` und gibt `Unbekannte Taste` aus.
:::

### Fallthrough: Was passiert ohne break?

Der wichtigste Satz über `switch` lautet: Eine `case`-Marke ist nur ein **Einsprungpunkt**, keine
Grenze. Java springt zur passenden Marke und läuft von dort weiter nach unten, auch über die nächsten
Marken hinweg. Erst ein `break` oder das Ende des `switch` stoppt es. Dieses Weiterlaufen heißt
**Fallthrough** (englisch für „Durchfallen“).

:::beispiel[Fallthrough mit Absicht]
Ein Spiel vergibt Abzeichen. Stufe 3 bekommt Gold, Silber und Bronze, Stufe 2 bekommt Silber und
Bronze, Stufe 1 nur Bronze.

```java
int stufe = 2;
switch (stufe) {
    case 3:
        System.out.println("Gold");
    case 2:
        System.out.println("Silber");
    case 1:
        System.out.println("Bronze");
}
```

1. Der Selektor ist `2`. Java springt zu `case 2:` in Zeile 5.
2. Zeile 6 gibt `Silber` aus. Es folgt kein `break`.
3. Java läuft weiter. Die Marke `case 1:` in Zeile 7 ist nur ein Einsprungpunkt und hält nichts auf.
4. Zeile 8 gibt `Bronze` aus. Danach endet der `switch`.

```text
Silber
Bronze
```

Hier ist der Fallthrough gewollt. Meistens ist er aber ein Fehler, nämlich ein vergessenes `break`.
:::

### Mehrere Werte, ein Ergebnis

Fallthrough hat eine praktische Anwendung. Stehen mehrere `case`-Marken direkt untereinander, ohne
Anweisungen dazwischen, teilen sie sich denselben Code:

```java
switch (monat) {
    case 4:
    case 6:
    case 9:
    case 11:
        System.out.println("30 Tage");
        break;
    // ...
}
```

Bei `monat = 6` springt Java zu `case 6:`, fällt durch `case 9:` und `case 11:` hindurch und gibt
`30 Tage` aus. Seit Java 14 darf man kürzer `case 4, 6, 9, 11:` schreiben. Beide Schreibweisen sind
gleichwertig.

```aufgabe
id: vz-sw-check-einsprung
titel: Einsprung und Ende
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int tag = 6;
      switch (tag) {
          case 6:
          case 7:
              System.out.println("Wochenende");
              break;
          default:
              System.out.println("Werktag");
      }
    loesung: |
      Wochenende
    fehler:
      - wert: "Wochenende\nWerktag"
        meldung: Nach `Wochenende` steht ein `break`. Der `default`-Zweig läuft deshalb nicht mehr.
loesung: |
  Java springt zu `case 6:`. Dort steht keine Anweisung, es fällt zu `case 7:` durch und gibt `Wochenende` aus.
  ---
  Dann beendet `break` den `switch`.
```

:::achtung[Das vergessene break]
```java
int note = 2;
switch (note) {
    case 1:
        System.out.println("Sehr gut");
        break;
    case 2:
        System.out.println("Gut");
    case 3:
        System.out.println("Befriedigend");
        break;
}
```

Gemeint war `Gut`. Ausgegeben wird aber `Gut` **und** `Befriedigend`, weil nach `case 2:` das `break`
fehlt und Java in `case 3:` hineinläuft. Korrektur: hinter `System.out.println("Gut");` ein `break;`
einfügen.
:::

:::achtung[default steht nicht am Ende]
`default` darf irgendwo stehen. Auch dort gilt Fallthrough:

```java
int k = 9;
switch (k) {
    case 1:
        System.out.println("eins");
    default:
        System.out.println("sonst");
    case 2:
        System.out.println("zwei");
        break;
}
```

Für `k = 9` passt keine Marke, also springt Java zu `default`. Es gibt `sonst` aus und läuft ohne
`break` weiter in `case 2:`. Ausgabe: `sonst` und `zwei`. Wer nur `sonst` erwartet hat, hat den
Fallthrough übersehen. Am sichersten steht `default` am Ende und hat ebenfalls ein `break`.
:::

### if oder switch?

Jede `switch`-Anweisung lässt sich als else-if-Kette mit `==` schreiben. Umgekehrt geht das nicht
immer: `switch` vergleicht nur auf **Gleichheit mit Konstanten**. Bereiche wie „ab 30 kg“ oder
zusammengesetzte Bedingungen wie `x > 0 && y > 0` kann `switch` nicht prüfen. Faustregel der
Vorlesung: `switch`, wenn du anhand mehrerer konstanter Werte verzweigst, sonst `if`.

**Vertiefung (nicht prüfungsrelevant):** Seit Java 14 gibt es den **switch-Ausdruck** mit Pfeil:
`String q = switch (m) { case 1, 2, 3 -> "Q1"; default -> "später"; };`. Er liefert einen Wert und
kennt keinen Fallthrough, deshalb braucht er kein `break`. In den Aufgabenblättern ist die klassische
Form mit Doppelpunkt verlangt.

:::merke[So leitest du die Ausgabe einer switch-Anweisung her]
1. Werte den Selektor einmal aus.
2. Suche die passende `case`-Marke. Gibt es keine, springe zu `default`. Gibt es auch das nicht, passiert nichts.
3. Führe ab dieser Marke **alle** Anweisungen der Reihe nach aus. Andere Marken auf dem Weg ignorierst du.
4. Hör erst beim ersten `break` oder bei der schließenden `}` des `switch` auf.
:::

```aufgabe
id: vz-sw-gefuehrt-fallthrough
titel: Punkte sammeln mit Fallthrough
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int level = 2;
      int punkte = 0;
      switch (level) {
          case 1:
              punkte += 10;
          case 2:
              punkte += 20;
          case 3:
              punkte += 30;
              break;
          case 4:
              punkte += 40;
      }
      System.out.println(punkte);
    loesung: |
      50
    fehler:
      - wert: "20"
        meldung: Nach `case 2:` steht kein `break`. Java läuft in `case 3:` weiter.
      - wert: "90"
        meldung: Nach `case 3:` steht ein `break`. Dort endet der `switch`, `case 4:` läuft nicht mehr.
hinweise:
  - Spring zur passenden Marke und lauf von dort nach unten bis zum ersten `break`.
  - Notiere nach jeder Zeile den Wert von `punkte`. Andere `case`-Marken auf dem Weg halten Java nicht auf.
gefuehrt:
  - text: Zu welcher Marke springt Java bei `level = 2`? Überlege, dann klick weiter.
    erklaerung: Zu `case 2:`. `case 1:` wird übersprungen, `punkte += 10` läuft also nicht.
  - text: Welchen Wert hat `punkte` nach `punkte += 20`?
    teil: { typ: ausgabe, code: "int punkte = 0;\npunkte += 20;\nSystem.out.println(punkte);", loesung: "20" }
    erklaerung: '`punkte += 20` ist die Kurzform von `punkte = punkte + 20`.'
  - text: Es folgt kein `break`. Welchen Wert hat `punkte` nach der nächsten Zeile?
    teil: { typ: ausgabe, code: "int punkte = 20;\npunkte += 30;\nSystem.out.println(punkte);", loesung: "50" }
    erklaerung: Java fällt in `case 3:` durch und addiert 30.
  - text: Läuft `case 4:` auch noch? Überlege, dann klick weiter.
    erklaerung: Nein. Nach `punkte += 30` steht `break;`. Der `switch` endet, ausgegeben wird `50`.
loesung: |
  **Ansatz:** Zur Marke `case 2:` springen und bis zum ersten `break` alles ausführen.
  ---
  `punkte += 20` ergibt 20. Ohne `break` folgt `punkte += 30`, das ergibt 50.
  ---
  Dann kommt `break`. `case 4:` läuft nicht. Ausgabe `50`. Zum Vergleich: Mit `level = 1` wären es 60, mit `level = 4` nur 40.
```

```aufgabe
id: vz-sw-break-ausgabe
titel: switch mit break
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String land = "AT";
      switch (land) {
          case "DE":
              System.out.println("Berlin");
              break;
          case "AT":
              System.out.println("Wien");
              break;
          case "CH":
              System.out.println("Bern");
              break;
          default:
              System.out.println("unbekannt");
      }
    loesung: |
      Wien
    fehler:
      - wert: "Wien\nBern\nunbekannt"
        meldung: Nach `Wien` steht ein `break`. Es beendet den `switch` sofort.
hinweise:
  - Ein `switch` darf auch Strings als Selektor haben. Suche die Marke mit dem passenden Text.
loesung: |
  **Ansatz:** Selektor `"AT"` auswerten und die passende Marke suchen.
  ---
  Java springt zu `case "AT":`, gibt `Wien` aus und beendet den `switch` mit `break`.
```

```aufgabe
id: vz-sw-default-ausgabe
titel: Wenn keine Marke passt
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      char c = 'x';
      switch (c) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
              System.out.println("Vokal");
              break;
          default:
              System.out.println("Konsonant oder Zeichen");
      }
      switch (c) {
          case 'y':
              System.out.println("y");
      }
      System.out.println("Ende");
    loesung: |
      Konsonant oder Zeichen
      Ende
    fehler:
      - wert: "Konsonant oder Zeichen\ny\nEnde"
        meldung: Im zweiten `switch` passt `'x'` zu keiner Marke, und es gibt kein `default`. Dann läuft nichts.
hinweise:
  - Prüfe für jeden der beiden `switch` getrennt, ob eine Marke passt und ob es ein `default` gibt.
loesung: |
  **Ansatz:** Beide `switch`-Anweisungen getrennt auswerten.
  ---
  Erster `switch`: `'x'` ist keine der fünf Marken, also `default`. Ausgabe `Konsonant oder Zeichen`.
  ---
  Zweiter `switch`: Keine Marke passt, ein `default` fehlt. Es passiert nichts. Danach `Ende`.
```

```aufgabe
id: vz-sw-fehlende-breaks
titel: Wo fehlt das break?
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int monat = 7;
      String s = "";
      switch (monat) {
          case 6:
              s += "Juni ";
          case 7:
              s += "Juli ";
          case 8:
              s += "August ";
              break;
          case 9:
              s += "September ";
          default:
              s += "kein Sommer ";
      }
      System.out.println(s + "Ende");
    loesung: |
      Juli August Ende
    fehler:
      - wert: "Juli Ende"
        meldung: Nach `case 7:` steht kein `break`. Java fällt in `case 8:` durch.
      - wert: "Juli August September kein Sommer Ende"
        meldung: Nach `August` steht ein `break`. Dort ist der `switch` zu Ende.
hinweise:
  - Spring zu `case 7:` und folge den Anweisungen nach unten bis zum ersten `break`.
  - Notiere nach jeder Zeile den Inhalt von `s`.
loesung: |
  **Ansatz:** Bei `case 7:` einsteigen und bis zum ersten `break` alles ausführen.
  ---
  `s` wird zu `"Juli "`. Ohne `break` folgt `s += "August "`, also `"Juli August "`.
  ---
  Dann kommt `break`. Danach hängt die letzte Zeile `"Ende"` an. Ausgabe `Juli August Ende`.
```

```aufgabe
id: vz-sw-default-mitte
titel: default in der Mitte
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Was gibt das Programm für `n = 5` aus?
teile:
  - typ: ausgabe
    code: |
      int n = 5;
      switch (n % 3) {
          case 0:
              System.out.println("teilbar");
              break;
          default:
              System.out.println("Rest");
          case 1:
              System.out.println("Rest 1");
              break;
      }
    loesung: |
      Rest
      Rest 1
    fehler:
      - wert: "Rest"
        meldung: Nach `default` steht kein `break`. Java fällt in `case 1:` durch, obwohl der Rest gar nicht 1 ist.
      - wert: "Rest 1"
        meldung: '`5 % 3` ist `2`. Die Marke `case 1:` passt nicht, also springt Java zu `default`.'
hinweise:
  - Berechne zuerst den Selektor `5 % 3`.
  - Keine Marke passt. Wo steht `default`, und was kommt danach ohne `break`?
loesung: |
  **Ansatz:** Selektor auswerten, Einsprungpunkt finden, bis zum `break` laufen.
  ---
  `5 % 3` ist `2`. Es gibt keine Marke `case 2:`, also springt Java zu `default` und gibt `Rest` aus.
  ---
  Ohne `break` läuft es in `case 1:` weiter und gibt `Rest 1` aus. Dann beendet `break` den `switch`.
  Die zweite Zeile ist hier inhaltlich falsch. Das zeigt, warum `default` besser am Ende steht.
```

```aufgabe
id: vz-sw-kompilierfehler
titel: Welche switch-Zeilen sind ungültig?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Markiere die Zeilen, die der Compiler nicht übersetzt. Vorher gilt `int k = 2; int grenze = 5; double d = 1.5; String s = "ja";`.
  Jede Zeile steht für sich.
teile:
  - typ: zeilen
    code: |
      switch (k) { case 1: k++; break; case 2: k--; break; }
      switch (d) { case 1.5: k++; }
      switch (k) { case grenze: k++; }
      switch (s) { case "ja": k++; break; default: k--; }
      switch (k) { case 1: k++; case 1: k--; }
      switch (k) { case 1, 2: k++; break; }
    loesung: [2, 3, 5]
    fehler:
      - wert: [2, 3, 5, 6]
        meldung: '`case 1, 2:` ist seit Java 14 erlaubt. Es fasst zwei Werte in einer Marke zusammen.'
      - wert: [2, 5]
        meldung: 'Hinter `case` muss ein konstanter Wert stehen. `grenze` ist eine Variable, der Compiler meldet `constant expression required`.'
hinweise:
  - Prüfe den Typ des Selektors, ob hinter `case` eine Konstante steht und ob ein Wert doppelt vorkommt.
  - Erlaubte Selektortypen sind `int`, `short`, `byte`, `char` und `String`.
loesung: |
  **Ansatz:** Drei Regeln prüfen: erlaubter Selektortyp, konstante case-Werte, keine doppelten Werte.
  ---
  Zeile 2: `double` ist als Selektor verboten. Zeile 3: `grenze` ist eine Variable, keine Konstante. Zeile 5: Der Wert 1 steht doppelt (`duplicate case label`).
  ---
  Die Zeilen 1, 4 und 6 sind gültig. Antwort: 2, 3 und 5.
```

```aufgabe
id: vz-sw-quartal-luecke
titel: Monate zu Quartalen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Programm soll für einen Monat das Quartal ausgeben: Jänner bis März ist `Q1`, April bis Juni `Q2`.
  Ergänze die Lücken so, dass die Monate 1, 2 und 3 denselben Code verwenden.
teile:
  - typ: lueckentext
    code: |
      int monat = 2;
      switch (monat) {
          case 1:
          case 2:
          case ___:
              System.out.println("Q1");
              ___;
          case 4:
          case 5:
          case 6:
              System.out.println("Q2");
              break;
          ___:
              System.out.println("später im Jahr");
      }
    luecken: [["3"], ["break"], ["default"]]
    fehler:
      - wert: ["3", "continue", "default"]
        meldung: '`continue` gehört zu Schleifen. Einen `switch` beendet man mit `break`.'
      - wert: ["3", "break", "else"]
        meldung: Im `switch` heißt die Marke für alle übrigen Werte `default`, nicht `else`.
hinweise:
  - Mehrere Marken direkt untereinander teilen sich denselben Code.
  - Ohne Abbruch nach `Q1` würde Java in den Code für `Q2` weiterlaufen. Welches Schlüsselwort verhindert das?
loesung: |
  **Ansatz:** Die Marken für Jänner bis März zusammenfassen und den Block mit `break` abschließen.
  ---
  Lücke 1: `3`. Lücke 2: `break`, sonst gibt Monat 2 auch `Q2` aus. Lücke 3: `default` für alle übrigen Monate.
  ---
  Probe mit `monat = 2`: Einsprung bei `case 2:`, Durchfall durch `case 3:`, Ausgabe `Q1`, dann `break`.
```

```aufgabe
id: vz-sw-zusatzfragen
titel: Zusatzfragen zu switch
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfragen zu Aufgabenblatt 1 SS2020, Aufgabe 1, und WS2018, Aufgabe 2B
angabe: |
  Diese Fragen standen als Zusatzfragen auf früheren Aufgabenblättern. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Das `break` am Ende eines `case`-Zweigs darf man weglassen. Der Compiler meldet keinen Fehler.
        richtig: true
        erklaerung: Ohne `break` übersetzt der Compiler das Programm. Java fällt dann aber in den nächsten Zweig durch.
      - text: Jede `switch`-Anweisung muss einen `default`-Zweig haben.
        richtig: false
        erklaerung: '`default` ist optional. Fehlt es und passt keine Marke, passiert einfach nichts.'
      - text: Jede `switch`-Anweisung lässt sich durch eine else-if-Kette ersetzen.
        richtig: true
        erklaerung: Jede Marke wird zu einem Vergleich mit `==` (bei Strings mit `equals`). Fallthrough bildet man durch mehrfach geschriebenen Code nach.
      - text: Jede else-if-Kette lässt sich durch eine `switch`-Anweisung ersetzen.
        richtig: false
        erklaerung: '`switch` prüft nur Gleichheit mit Konstanten. Bereiche wie `kg < 5` oder Verknüpfungen wie `a > 0 && b > 0` gehen damit nicht.'
    fehler:
      - wert: [f, f, t, f]
        meldung: Das `break` ist keine Pflicht der Syntax. Ohne `break` ändert sich nur, was das Programm tut.
      - wert: [t, f, t, t]
        meldung: Versuche, die Bedingung `kg < 5` mit `case`-Marken zu schreiben. Dafür bräuchtest du eine Marke für jeden `int`-Wert unter 5, also über zwei Milliarden Marken.
hinweise:
  - Unterscheide zwischen „übersetzt der Compiler“ und „tut, was man will“.
  - Was kann `switch` prüfen, was `if` nicht kann, und umgekehrt?
loesung: |
  **Ansatz:** Für jede Aussage klären, ob sie die Syntax (Compiler) oder das Verhalten betrifft.
  ---
  `break` ist syntaktisch optional, ohne `break` gibt es Fallthrough. `default` ist optional.
  ---
  `switch` lässt sich immer als `if`-Kette schreiben, aber nicht umgekehrt, weil `switch` nur Gleichheit mit Konstanten prüft.
  Im Feedbackgespräch sagst du am besten: „Ja, man darf `break` weglassen, dann fällt die Ausführung in den nächsten Fall durch. Das nutze ich bei den Monaten mit 31 Tagen absichtlich.“
```

```reflexion
frage: Warum hat Java bei switch den Fallthrough überhaupt eingebaut, wenn er so oft zu Fehlern führt? Nenne einen Fall, in dem er nützlich ist, und einen, in dem er schadet.
antwort: |
  Die `case`-Marken sind nur Sprungziele. Dieses Verhalten hat Java von der älteren Sprache C übernommen. Nützlich ist es,
  wenn mehrere Werte denselben Code teilen sollen: Bei den Monaten 4, 6, 9 und 11 stehen vier Marken untereinander
  und nur einmal `30 Tage`. Auch das Abzeichen-Beispiel nutzt ihn, weil höhere Stufen alles der niedrigeren mitbekommen.
  Schädlich ist er bei einem vergessenen `break`: Dann laufen zusätzlich die Anweisungen des nächsten Falls, und das
  Programm gibt zum Beispiel `Gut` und `Befriedigend` aus. Der neuere switch-Ausdruck mit `->` hat deshalb gar keinen
  Fallthrough mehr.
```

```aufgabe
id: vz-sw-kalender-code
titel: Tage im Monat
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2021, Aufgabe 1c, und SS2020, Aufgabe 1c (Kalenderrechner), umformuliert
angabe: |
  Schreib den Rumpf von `druckeTage`. Die Methode bekommt einen Monat `month` (1 bis 12) und ein Jahr `year`.
  Sie gibt die Anzahl der Tage dieses Monats aus. Bei einem Monat außerhalb von 1 bis 12 gibt sie
  `Ungültiges Datum!` aus.

  Verwende eine **switch-Anweisung**. Innerhalb einer `case`-Marke darfst du `if` verwenden. Der Februar hat in
  einem Schaltjahr 29 Tage, sonst 28. Nach dem heutigen (gregorianischen) Kalender gilt:

  1. Ein Jahr, das nicht durch 4 teilbar ist, ist nie ein Schaltjahr.
  2. Ein durch 4 teilbares Jahr ist ein Schaltjahr. Ausgenommen sind Jahre, die auch durch 100 teilbar sind.
  3. Von dieser Ausnahme gibt es wieder eine Ausnahme: Ist das Jahr durch 400 teilbar, ist es doch ein Schaltjahr.

  Beispiele: 1600 und 2024 sind Schaltjahre, 1700 und 2023 nicht.
teile:
  - typ: code
    vorlage: |
      public class Kalender {
          public static void druckeTage(int month, int year) {
              // TODO: switch-Anweisung
          }
      }
    musterloesung: |
      public class Kalender {
          public static void druckeTage(int month, int year) {
              switch (month) {
                  case 1:
                  case 3:
                  case 5:
                  case 7:
                  case 8:
                  case 10:
                  case 12:
                      System.out.println(31);
                      break;
                  case 4:
                  case 6:
                  case 9:
                  case 11:
                      System.out.println(30);
                      break;
                  case 2:
                      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                          System.out.println(29);
                      } else {
                          System.out.println(28);
                      }
                      break;
                  default:
                      System.out.println("Ungültiges Datum!");
              }
          }
      }
    tests:
      - { aufruf: "druckeTage(1, 2023)", stdout: "31" }
      - { aufruf: "druckeTage(4, 2023)", stdout: "30" }
      - { aufruf: "druckeTage(2, 2024)", stdout: "29", beschreibung: "Februar 2024 (Schaltjahr)" }
      - { aufruf: "druckeTage(2, 2023)", stdout: "28", beschreibung: "Februar 2023 (nicht durch 4 teilbar)" }
      - { aufruf: "druckeTage(2, 1900)", stdout: "28", beschreibung: "Februar 1900 (durch 100, nicht durch 400)" }
      - { aufruf: "druckeTage(2, 2000)", stdout: "29", beschreibung: "Februar 2000 (durch 400)" }
      - { aufruf: "druckeTage(13, 2023)", stdout: "Ungültiges Datum!" }
      - { aufruf: "druckeTage(0, 2023)", stdout: "Ungültiges Datum!", versteckt: true }
      - { aufruf: "druckeTage(12, 2100)", stdout: "31", versteckt: true }
      - { aufruf: "druckeTage(11, 2024)", stdout: "30", versteckt: true }
      - { aufruf: "druckeTage(2, 2100)", stdout: "28", versteckt: true }
    regeln: { keineSchleifen: true, keineHilfsmethoden: true }
    fehler:
      - { wert: 4, meldung: "Für Jahre, die nicht durch 4 teilbar sind, muss 28 erscheinen. Fehlt bei dir ein `else`, sodass im Februar 2023 gar nichts ausgegeben wird?" }
      - { wert: 5, meldung: "1900 ist durch 4 teilbar, aber auch durch 100 und nicht durch 400. Das ist kein Schaltjahr." }
      - { wert: 2, meldung: "Bei April kommt mehr als eine Zahl heraus? Dann fehlt ein `break` und Java fällt in den nächsten Fall durch." }
hinweise:
  - Fasse die Monate mit 31 Tagen und die Monate mit 30 Tagen jeweils mit mehreren `case`-Marken untereinander zusammen.
  - 'Für `case 2:` brauchst du ein `if`. Die Bedingung für ein Schaltjahr lautet `(year % 4 == 0 && year % 100 != 0) || year % 400 == 0`.'
loesung: |
  **Ansatz:** Ein `switch` über `month` mit drei Gruppen (31 Tage, 30 Tage, Februar) und `default` für ungültige Monate.
  ---
  ```java
  switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          System.out.println(31);
          break;
      case 4: case 6: case 9: case 11:
          System.out.println(30);
          break;
      case 2:
          if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
              System.out.println(29);
          } else {
              System.out.println(28);
          }
          break;
      default:
          System.out.println("Ungültiges Datum!");
  }
  ```
  ---
  Die Marken einer Gruppe dürfen auch in einer Zeile stehen. Wichtig sind die drei `break`, sonst fällt etwa der April in den Februar durch.
  ---
  Probe mit den Grenzfällen der Schaltjahrregel: 2024 ergibt 29, 2023 ergibt 28, 1900 ergibt 28, 2000 ergibt 29. Ein häufiger Fehler: Fehlt das `else` zur Teilbarkeit durch 4, gibt das Programm für 2023 gar nichts aus.
```

```aufgabe
id: vz-sw-string-sammeln
titel: Durchfallen mit Text
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Achtung: Der `switch` steht zweimal hintereinander mit verschiedenen Selektoren.
teile:
  - typ: ausgabe
    code: |
      String s = "";
      int a = 3;
      switch (a) {
          case 1:
              s += "x";
          case 3:
              s += "y";
          case 5:
              s += "z";
          default:
              s += "!";
      }
      switch (a * 2) {
          case 6:
              s += "6";
              break;
          case 2:
              s += "2";
          default:
              s += "?";
      }
      System.out.println(s);
    loesung: |
      yz!6
    fehler:
      - wert: "y6"
        meldung: Im ersten `switch` gibt es kein einziges `break`. Ab `case 3:` läuft alles bis zum Ende, auch `default`.
      - wert: "yz!6?"
        meldung: Im zweiten `switch` steht nach `s += "6"` ein `break`.
hinweise:
  - 'Erster `switch`: Einsprung bei `case 3:`. Gibt es danach irgendwo ein `break`?'
  - 'Zweiter `switch`: Der Selektor ist `a * 2`, also 6.'
loesung: |
  **Ansatz:** Beide `switch` nacheinander, jeweils Einsprungpunkt suchen und bis zum ersten `break` laufen.
  ---
  Erster `switch`: Einsprung bei `case 3:`. Kein `break` folgt, also laufen `y`, `z` und `!`. `s` ist `"yz!"`.
  ---
  Zweiter `switch`: Selektor `6`, Einsprung bei `case 6:`, dann `break`. `s` ist `"yz!6"`.
  Beachte: `default` läuft im ersten `switch` mit, obwohl eine Marke gepasst hat. Fallthrough fragt nicht nach Marken.
```

## Strings ohne Schleife untersuchen

```aufgabe
id: vz-str-check-methoden
titel: indexOf und substring
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung der String-Methoden aus [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      String t = "Tomate";
      System.out.println(t.indexOf('a'));
      System.out.println(t.substring(2, 5));
    loesung: |
      3
      mat
    fehler:
      - wert: "4\nmat"
        meldung: Die Zählung beginnt bei 0. `T` ist Position 0, `o` 1, `m` 2, `a` 3.
      - wert: "3\nmate"
        meldung: Das Zeichen an der Endposition 5 gehört nicht mehr dazu.
loesung: |
  Positionen: `T`=0, `o`=1, `m`=2, `a`=3, `t`=4, `e`=5. Das erste `a` steht an Position 3.
  ---
  `substring(2, 5)` liefert die Positionen 2, 3, 4, also `mat`.
```

Auf dem ersten Aufgabenblatt kommen String-Aufgaben vor, bei denen **Schleifen verboten** sind.
Schleifen lernst du erst in [Kapitel 4](/lernen/ep1/schleifen). Ohne Schleife kannst du einen Text nicht
Zeichen für Zeichen durchgehen. Du kannst aber die fertigen String-Methoden geschickt mit Verzweigungen
kombinieren. Dazu brauchst du eine neue Methode: `lastIndexOf`.

### Vom Anfang und vom Ende suchen

:::definition[indexOf und lastIndexOf]
Für einen String `s` und ein Zeichen `c` gilt:

- `s.indexOf(c)` liefert die Position des **ersten** Vorkommens von `c`, gezählt ab 0.
- `s.lastIndexOf(c)` liefert die Position des **letzten** Vorkommens von `c`.
- Kommt `c` gar nicht vor, liefern **beide** den Wert `-1`.

**Beispiel:** Für `"Mississippi"` liefert `indexOf('s')` den Wert 2 und `lastIndexOf('s')` den Wert 6.
**Nichtbeispiel:** `lastIndexOf` zählt **nicht** vom Ende aus. `"Mississippi".lastIndexOf('i')` ist 10, die Position von vorne gezählt, nicht 0.
:::

Aus diesen zwei Zahlen lässt sich schon viel ablesen, ohne den Text durchzugehen:

- Beide sind `-1`: Das Zeichen kommt **nicht** vor.
- Beide sind gleich, aber nicht `-1`: Das erste und das letzte Vorkommen sind dieselbe Stelle. Das Zeichen kommt **genau einmal** vor.
- Sie sind verschieden: Es gibt ein erstes und ein anderes letztes Vorkommen. Das Zeichen kommt **mindestens zweimal** vor.

:::beispiel[Wie oft kommt ein Zeichen vor?]
```java
String w = "Mississippi";
char c = 'M';
int erst = w.indexOf(c);
int letzt = w.lastIndexOf(c);
if (erst == -1) {
    System.out.println("kommt nicht vor");
} else if (erst == letzt) {
    System.out.println("kommt genau einmal vor");
} else {
    System.out.println("kommt mehrmals vor");
}
```

1. Zeile 3: Das erste `M` steht an Position 0, also `erst = 0`.
2. Zeile 4: Das letzte `M` steht ebenfalls an Position 0, also `letzt = 0`.
3. Zeile 5: `0 == -1` ist falsch.
4. Zeile 7: `0 == 0` ist wahr. Ausgabe `kommt genau einmal vor`.

Mit `c = 's'` ist `erst = 2` und `letzt = 6`. Beide Prüfungen sind falsch, es erscheint
`kommt mehrmals vor`. Mit `c = 'x'` ist `erst = -1`, schon die erste Prüfung greift.
:::

:::achtung[Die Prüfungen in der falschen Reihenfolge]
```java
if (erst == letzt) {
    System.out.println("kommt genau einmal vor");
} else if (erst == -1) {
    System.out.println("kommt nicht vor");
}
```

Für `c = 'x'` ist `erst = -1` und `letzt = -1`. Die erste Bedingung `-1 == -1` ist wahr, und das
Programm behauptet `kommt genau einmal vor`. Der Zweig `kommt nicht vor` ist unerreichbar. Prüfe den
Sonderfall `-1` immer **zuerst**.
:::

### Teile eines Strings ausschneiden und neu zusammensetzen

Mit `substring` schneidest du Stücke heraus, und mit `+` setzt du sie neu zusammen. Die Positionen
dafür liefern `indexOf` und `lastIndexOf`. Zur Erinnerung: `s.substring(a, b)` liefert die Zeichen
von Position `a` bis **vor** Position `b`. `s.substring(a)` liefert alles ab Position `a`.

:::beispiel[Den Anfang ans Ende stellen]
Aufgabenblatt 1 (WS2021) verlangt: Alles **vor** dem ersten Punkt wird entfernt und ersetzt alles
**nach** dem letzten Punkt. Die Punkte bleiben stehen. Gibt es höchstens einen Punkt, bleibt der Text
unverändert.

```java
String s = "Teil eins. Teil zwei. Rest";
int erster = s.indexOf('.');
int letzter = s.lastIndexOf('.');
if (erster == letzter) {
    System.out.println(s);
} else {
    String vorne = s.substring(0, erster);
    String mitte = s.substring(erster, letzter + 1);
    System.out.println(mitte + vorne);
}
```

1. Zeile 2: Der erste Punkt steht an Position 9, also `erster = 9`.
2. Zeile 3: Der letzte Punkt steht an Position 20, also `letzter = 20`.
3. Zeile 4: `9 == 20` ist falsch. Es gibt also mindestens zwei Punkte, und der `else`-Block läuft.
4. Zeile 7: `vorne` sind die Positionen 0 bis 8, also `"Teil eins"`.
5. Zeile 8: `mitte` geht vom ersten Punkt bis **einschließlich** zum letzten Punkt. Deshalb steht dort `letzter + 1`. Das ergibt `". Teil zwei."`.
6. Zeile 9: Der Rest `" Rest"` nach dem letzten Punkt fällt weg. Ausgabe `. Teil zwei.Teil eins`.

Der Trick in Zeile 4: `erster == letzter` deckt **beide** Sonderfälle ab. Ohne Punkt sind beide `-1`,
mit genau einem Punkt sind beide gleich. In beiden Fällen bleibt der Text unverändert.
:::

:::achtung[substring mit -1]
Wer den Sonderfall „kein Punkt“ nicht abfängt, bekommt einen Absturz:

```java
String t = "Hallo";
System.out.println(t.substring(0, t.indexOf('.')));
```

`t.indexOf('.')` ist `-1`. `substring(0, -1)` ist unmöglich, und Java bricht mit
`StringIndexOutOfBoundsException: Range [0, -1) out of bounds for length 5` ab. Prüfe deshalb mit
`if`, ob das Zeichen überhaupt vorkommt, bevor du mit seiner Position rechnest.
:::

:::achtung[Den Punkt abgeschnitten]
Schreibt man in Zeile 8 des Beispiels `s.substring(erster, letzter)` statt `letzter + 1`, fehlt der
letzte Punkt. Aus `"Teil eins. Teil zwei. Rest"` wird dann `. Teil zweiTeil eins`. Die Endposition
von `substring` ist **ausgeschlossen**. Wer ein Zeichen noch mitnehmen will, muss eins dazuzählen.
:::

:::merke[String-Aufgaben ohne Schleife]
1. Bestimme die nötigen Positionen mit `indexOf` und `lastIndexOf`.
2. Fange zuerst die Sonderfälle ab: Zeichen fehlt (`-1`), Zeichen kommt genau einmal vor (erste gleich letzte Position).
3. Schneide die Teile mit `substring` heraus. Denk daran, dass die Endposition nicht mehr dazugehört.
4. Setze die Teile mit `+` zusammen und prüfe das Ergebnis mit einem Text ohne, mit einem und mit mehreren Vorkommen.
:::

```aufgabe
id: vz-str-gefuehrt-anzahl
titel: Wie oft kommt das e vor?
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String w = "Erdbeere";
      char c = 'e';
      int erst = w.indexOf(c);
      int letzt = w.lastIndexOf(c);
      if (erst == -1) {
          System.out.println("nicht vorhanden");
      } else if (erst == letzt) {
          System.out.println("einmal an Position " + erst);
      } else {
          System.out.println("von " + erst + " bis " + letzt);
      }
    loesung: |
      von 4 bis 7
    fehler:
      - wert: "von 0 bis 7"
        meldung: Das große `E` am Anfang ist ein anderes Zeichen als das kleine `e`. Java unterscheidet Groß- und Kleinschreibung.
hinweise:
  - Schreib die Positionen von `"Erdbeere"` von 0 bis 7 unter die Buchstaben.
  - Das große `E` am Anfang ist ein anderes Zeichen als das kleine `e`.
gefuehrt:
  - text: An welcher Position steht das erste kleine `e` in `"Erdbeere"`?
    teil: { typ: ausgabe, code: "System.out.println(\"Erdbeere\".indexOf('e'));", loesung: "4" }
    erklaerung: 'Positionen: `E`=0, `r`=1, `d`=2, `b`=3, `e`=4. Das große `E` zählt nicht.'
  - text: An welcher Position steht das letzte `e`?
    teil: { typ: ausgabe, code: "System.out.println(\"Erdbeere\".lastIndexOf('e'));", loesung: "7" }
    erklaerung: Die Positionen 5 und 7 sind `e`, 6 ist `r`. Das letzte `e` steht an Position 7.
  - text: Welcher Zweig läuft also? Überlege, dann klick weiter.
    erklaerung: '`4 == -1` ist falsch, `4 == 7` ist falsch. Es läuft der `else`-Zweig mit `von 4 bis 7`.'
loesung: |
  **Ansatz:** Erste und letzte Position bestimmen, dann die Kette auswerten.
  ---
  `indexOf('e')` ist 4, weil das große `E` an Position 0 ein anderes Zeichen ist. `lastIndexOf('e')` ist 7.
  ---
  `4 == -1` falsch, `4 == 7` falsch, also `else`. Ausgabe `von 4 bis 7`.
```

```aufgabe
id: vz-str-positionen
titel: Erste und letzte Position
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String s = "Banane";
      System.out.println(s.indexOf('n'));
      System.out.println(s.lastIndexOf('n'));
      System.out.println(s.lastIndexOf('B'));
      System.out.println(s.lastIndexOf('z'));
    loesung: |
      2
      4
      0
      -1
    fehler:
      - wert: "2\n1\n0\n-1"
        meldung: '`lastIndexOf` zählt nicht vom Ende aus. Es liefert die gewöhnliche Position des letzten Vorkommens, von vorne gezählt.'
hinweise:
  - Nummeriere die Buchstaben von 0 an und suche jeweils das erste oder das letzte Vorkommen.
loesung: |
  **Ansatz:** Positionen nummerieren: `B`=0, `a`=1, `n`=2, `a`=3, `n`=4, `e`=5.
  ---
  Erstes `n` an 2, letztes an 4. `B` kommt nur an Position 0 vor, also ist auch das letzte Vorkommen 0. `z` fehlt, also `-1`.
```

```aufgabe
id: vz-str-einmal-oder-mehr
titel: Einmal oder mehrmals?
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      String w = "Kaffeetasse";
      int a = w.indexOf('t');
      int b = w.lastIndexOf('t');
      int c = w.indexOf('s');
      int d = w.lastIndexOf('s');
      System.out.println(a == b);
      System.out.println(c == d);
    loesung: |
      true
      false
    fehler:
      - wert: "false\nfalse"
        meldung: Das `t` kommt nur einmal vor. Dann sind erste und letzte Position gleich.
hinweise:
  - Zähle, wie oft `t` und wie oft `s` in `"Kaffeetasse"` vorkommen.
loesung: |
  **Ansatz:** Gleiche erste und letzte Position heißt: genau ein Vorkommen (oder keines, dann beide `-1`).
  ---
  `t` kommt einmal vor (Position 6), also `true`. `s` kommt zweimal vor (Positionen 8 und 9), also `false`.
```

```aufgabe
id: vz-str-anzahl-code
titel: Kein, ein oder mehrere Zeichen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2021, Aufgabe 1b, und SS2020, Aufgabe 1b, umformuliert
angabe: |
  Schreib den Rumpf von `druckeAnzahl`. Die Methode prüft, wie oft das Zeichen `c` im Text `s` vorkommt, und gibt
  genau eine dieser Zeilen aus:

  - `Kein Zeichen gefunden`, wenn `c` nicht vorkommt,
  - `Genau ein Zeichen gefunden`, wenn `c` einmal vorkommt,
  - `Zwei oder mehr Zeichen gefunden`, wenn `c` öfter vorkommt.

  Schleifen sind verboten. Von `String` darfst du `indexOf`, `lastIndexOf`, `charAt`, `length` und `substring` verwenden.
teile:
  - typ: code
    vorlage: |
      public class Zeichen {
          public static void druckeAnzahl(String s, char c) {
              // TODO
          }
      }
    musterloesung: |
      public class Zeichen {
          public static void druckeAnzahl(String s, char c) {
              int erst = s.indexOf(c);
              int letzt = s.lastIndexOf(c);
              if (erst == -1) {
                  System.out.println("Kein Zeichen gefunden");
              } else if (erst == letzt) {
                  System.out.println("Genau ein Zeichen gefunden");
              } else {
                  System.out.println("Zwei oder mehr Zeichen gefunden");
              }
          }
      }
    tests:
      - aufruf: 'druckeAnzahl("Marillenknödel", ''x'')'
        stdout: "Kein Zeichen gefunden"
      - aufruf: 'druckeAnzahl("Marillenknödel", ''k'')'
        stdout: "Genau ein Zeichen gefunden"
      - aufruf: 'druckeAnzahl("Marillenknödel", ''l'')'
        stdout: "Zwei oder mehr Zeichen gefunden"
      - aufruf: 'druckeAnzahl("Torte", ''T'')'
        stdout: "Genau ein Zeichen gefunden"
        beschreibung: "Zeichen ganz am Anfang"
      - aufruf: 'druckeAnzahl("Haselnuss", ''s'')'
        stdout: "Zwei oder mehr Zeichen gefunden"
        versteckt: true
      - aufruf: 'druckeAnzahl("Kakao", ''o'')'
        stdout: "Genau ein Zeichen gefunden"
        versteckt: true
      - aufruf: 'druckeAnzahl("", ''a'')'
        stdout: "Kein Zeichen gefunden"
        versteckt: true
    regeln:
      keineSchleifen: true
      keineHilfsmethoden: true
      erlaubteApi: ["String.indexOf", "String.lastIndexOf", "String.charAt", "String.length", "String.substring"]
    fehler:
      - { wert: 1, meldung: "Kommt das Zeichen nicht vor, sind erste und letzte Position beide `-1`, also gleich. Prüfe den Fall `-1` vor dem Fall „gleich“." }
      - { wert: 3, meldung: "Bei mehreren Vorkommen unterscheiden sich erste und letzte Position. Vergleichst du die richtigen Werte?" }
      - { wert: "erlaubteApi", meldung: "Du verwendest eine Methode, die hier nicht erlaubt ist, etwa `split` oder `contains`. Es geht mit `indexOf` und `lastIndexOf`." }
hinweise:
  - Bestimme zuerst die erste und die letzte Position von `c` in `s`.
  - Eine else-if-Kette mit drei Fällen genügt. Der Fall „kommt nicht vor“ muss zuerst geprüft werden.
loesung: |
  **Ansatz:** Mit `indexOf` und `lastIndexOf` die erste und letzte Position bestimmen und daraus die Anzahl ablesen.
  ---
  ```java
  int erst = s.indexOf(c);
  int letzt = s.lastIndexOf(c);
  if (erst == -1) {
      System.out.println("Kein Zeichen gefunden");
  } else if (erst == letzt) {
      System.out.println("Genau ein Zeichen gefunden");
  } else {
      System.out.println("Zwei oder mehr Zeichen gefunden");
  }
  ```
  ---
  Probe: In `"Marillenknödel"` fehlt `x` (Kein), `k` steht nur an Position 8 (Genau ein), `l` steht an 4, 5 und 13 (Zwei oder mehr).
  Manche Lösungen verwenden die Methode `split`, die einen Text an einem Zeichen in Stücke zerlegt. Sie ist hier nicht erlaubt und hat eine Falle: `split` lässt leere Stücke am Ende weg, ein Zeichen ganz am Ende wird dann nicht gezählt.
```

```aufgabe
id: vz-str-ein-punkt
titel: Punkt-Text mit nur einem Punkt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Das Programm stammt aus dem Beispiel „Den Anfang ans Ende stellen“. Was gibt es für diese beiden Texte aus?
teile:
  - typ: ausgabe
    code: |
      String s1 = "Nur ein Punkt. Sonst nichts";
      String s2 = "A.B.C.D";
      int e1 = s1.indexOf('.');
      int l1 = s1.lastIndexOf('.');
      if (e1 == l1) {
          System.out.println(s1);
      } else {
          System.out.println(s1.substring(e1, l1 + 1) + s1.substring(0, e1));
      }
      int e2 = s2.indexOf('.');
      int l2 = s2.lastIndexOf('.');
      if (e2 == l2) {
          System.out.println(s2);
      } else {
          System.out.println(s2.substring(e2, l2 + 1) + s2.substring(0, e2));
      }
    loesung: |
      Nur ein Punkt. Sonst nichts
      .B.C.A
    fehler:
      - wert: "Nur ein Punkt. Sonst nichts\n.B.C.DA"
        meldung: Das `D` steht nach dem letzten Punkt und wird ersetzt. Es fällt weg.
      - wert: ". Sonst nichtsNur ein Punkt\n.B.C.A"
        meldung: Im ersten Text gibt es nur einen Punkt. Dann sind erste und letzte Position gleich, und der Text bleibt unverändert.
hinweise:
  - Bestimme für jeden Text die erste und die letzte Punktposition.
  - 'Für `"A.B.C.D"`: Die Punkte stehen an den Positionen 1, 3 und 5.'
loesung: |
  **Ansatz:** Für jeden Text `indexOf` und `lastIndexOf` des Punkts bestimmen und den passenden Zweig ausführen.
  ---
  Text 1: Es gibt nur einen Punkt (Position 13). Erste gleich letzte Position, der Text bleibt unverändert.
  ---
  Text 2: Erster Punkt an 1, letzter an 5. `substring(1, 6)` ist `".B.C."`, `substring(0, 1)` ist `"A"`. Ausgabe `.B.C.A`.
```

```aufgabe
id: vz-str-mitte-luecke
titel: Einen Punkt in die Mitte setzen
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 1 SS2020, Aufgabe 1a (zweiter Teil), umformuliert
angabe: |
  Enthält ein Text keinen Punkt, soll in seiner Mitte ein Punkt eingefügt werden. Bei ungerader Länge kommt er an den
  kleineren Index, also an die Position `Länge / 2` (Ganzzahldivision). Aus `"Haustür"` (7 Zeichen) wird `"Hau.stür"`.
  Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      String s = "Haustür";
      if (s.indexOf('.') == ___) {
          int m = s.length() / 2;
          System.out.println(s.substring(0, ___) + "." + s.substring(m));
      } else {
          System.out.println(s);
      }
    luecken: [["-1"], ["m"]]
    fehler:
      - wert: ["0", "m"]
        meldung: '`indexOf` liefert `0`, wenn der Punkt an der ersten Stelle steht. „Kein Punkt“ erkennst du am Wert `-1`.'
      - wert: ["-1", "m + 1"]
        meldung: 'Mit `m + 1` steht der Punkt eine Stelle zu weit rechts, und ein Zeichen erscheint doppelt. `substring(0, m)` endet schon direkt vor Position `m`.'
hinweise:
  - Woran erkennt man am Rückgabewert von `indexOf`, dass ein Zeichen fehlt?
  - 'Der Text wird an Position `m` geteilt: `substring(0, m)` ist der linke Teil, `substring(m)` der rechte.'
loesung: |
  **Ansatz:** Zuerst prüfen, ob kein Punkt vorkommt, dann den Text an der Mitte teilen.
  ---
  Lücke 1: `-1`, denn das liefert `indexOf` bei fehlendem Zeichen. Lücke 2: `m`, denn der linke Teil endet direkt vor der Mitte.
  ---
  Probe mit `"Haustür"`: `m = 7 / 2 = 3`. `substring(0, 3)` ist `"Hau"`, `substring(3)` ist `"stür"`. Ausgabe `Hau.stür`.
```

```aufgabe
id: vz-str-bug-finden
titel: Fehler in der Punkt-Umstellung
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Dieses Programm soll wie im Beispiel „Den Anfang ans Ende stellen“ arbeiten. Für `"Eins. Zwei. Drei"` gibt es aber
  `. ZweiEins` aus statt `. Zwei.Eins`, und für `"Ohne Punkt"` stürzt es ab. Markiere die beiden fehlerhaften Zeilen.
teile:
  - typ: zeilen
    code: |
      String s = "Eins. Zwei. Drei";
      int erster = s.indexOf('.');
      int letzter = s.lastIndexOf('.');
      if (erster != letzter || erster == -1) {
          System.out.println(s.substring(erster, letzter) + s.substring(0, erster));
      } else {
          System.out.println(s);
      }
    loesung: [4, 5]
    fehler:
      - wert: [5]
        meldung: Zeile 5 erklärt den fehlenden Punkt. Der Absturz bei `"Ohne Punkt"` kommt aber aus Zeile 4. Bei `erster == -1` läuft der falsche Zweig.
      - wert: [4]
        meldung: Zeile 4 erklärt den Absturz. Warum fehlt aber der zweite Punkt in der Ausgabe? Schau dir die Endposition von `substring` an.
hinweise:
  - Teste Zeile 4 im Kopf mit `"Ohne Punkt"`. Welcher Zweig läuft, und was macht `substring(-1, -1)`?
  - Die Endposition von `substring` gehört nicht mehr zum Ergebnis.
loesung: |
  **Ansatz:** Die beiden Symptome getrennt erklären: fehlender Punkt und Absturz.
  ---
  Zeile 5: `substring(erster, letzter)` schneidet den letzten Punkt ab. Richtig ist `letzter + 1`.
  ---
  Zeile 4: Bei `"Ohne Punkt"` ist `erster == -1` wahr, also läuft der Umstell-Zweig mit `substring(-1, -1)`, und Java bricht ab. Richtig ist `if (erster != letzter)` allein.
  Mit beiden Korrekturen liefert das Programm `. Zwei.Eins` und lässt `"Ohne Punkt"` unverändert.
```

```reflexion
frage: Warum deckt die eine Bedingung `erster == letzter` sowohl „kein Punkt“ als auch „genau ein Punkt“ ab? Gilt das auch umgekehrt, folgt also aus „kein oder ein Punkt“ immer `erster == letzter`?
antwort: |
  Ohne Punkt liefern `indexOf` und `lastIndexOf` beide `-1`, also sind sie gleich. Mit genau einem Punkt ist das erste
  Vorkommen zugleich das letzte, beide liefern dieselbe Position. Umgekehrt gilt es auch: Sind die Positionen gleich,
  gibt es entweder keinen Punkt (beide `-1`) oder einen Punkt, der zugleich der erste und der letzte ist. Zwei
  verschiedene Punkte hätten zwei verschiedene Positionen. Die Bedingung ist also genau dann wahr, wenn höchstens ein
  Punkt vorkommt. Darum genügt ein einziges `if`.
```

```aufgabe
id: vz-str-umstellen-code
titel: Text vor dem ersten Punkt ans Ende stellen
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2021, Aufgabe 1a, umformuliert und mit neuen Testtexten
angabe: |
  Schreib den Rumpf von `druckeUmgestellt`. Alle Zeichen **vor** dem ersten Punkt werden entfernt und ersetzen alle
  Zeichen **nach** dem letzten Punkt. Die Punkte selbst bleiben stehen, Punkte dazwischen werden nicht beachtet.
  Hat der Text keinen oder nur einen Punkt, wird er unverändert ausgegeben. Schleifen sind verboten.

  Beispiele: `"Ab. Cd. Ef"` ergibt `. Cd.Ab`, `".Start. Mitte!"` ergibt `.Start.`, `"Nur ein Satz."` bleibt `Nur ein Satz.`
teile:
  - typ: code
    vorlage: |
      public class Punkte {
          public static void druckeUmgestellt(String s) {
              // TODO
          }
      }
    musterloesung: |
      public class Punkte {
          public static void druckeUmgestellt(String s) {
              int erster = s.indexOf('.');
              int letzter = s.lastIndexOf('.');
              if (erster == letzter) {
                  System.out.println(s);
              } else {
                  System.out.println(s.substring(erster, letzter + 1) + s.substring(0, erster));
              }
          }
      }
    tests:
      - aufruf: 'druckeUmgestellt("Ab. Cd. Ef")'
        stdout: ". Cd.Ab"
      - aufruf: 'druckeUmgestellt(".Start. Mitte!")'
        stdout: ".Start."
        beschreibung: "Punkt ganz am Anfang"
      - aufruf: 'druckeUmgestellt("Nur ein Satz.")'
        stdout: "Nur ein Satz."
      - aufruf: 'druckeUmgestellt("Hier fehlt er!")'
        stdout: "Hier fehlt er!"
      - aufruf: 'druckeUmgestellt("Viel. zu. viele. Punkte hier")'
        stdout: ". zu. viele.Viel"
      - aufruf: 'druckeUmgestellt("Kurz. Lang am Ende.")'
        stdout: ". Lang am Ende.Kurz"
        versteckt: true
      - aufruf: 'druckeUmgestellt("..")'
        stdout: ".."
        versteckt: true
    regeln:
      keineSchleifen: true
      keineHilfsmethoden: true
      erlaubteApi: ["String.indexOf", "String.lastIndexOf", "String.substring", "String.length", "String.charAt"]
    fehler:
      - { wert: 1, meldung: "Fehlt im Ergebnis der letzte Punkt? Die Endposition von `substring` ist ausgeschlossen, du brauchst `letzter + 1`." }
      - { wert: 4, meldung: "Ohne Punkt sind `indexOf` und `lastIndexOf` beide `-1`. Fängst du diesen Fall ab, bevor du `substring` aufrufst?" }
      - { wert: 3, meldung: "Bei genau einem Punkt soll der Text unverändert bleiben. Erste und letzte Position sind dann gleich." }
hinweise:
  - Bestimme die Position des ersten und des letzten Punkts. Welche Beziehung zwischen beiden bedeutet „höchstens ein Punkt“?
  - 'Im anderen Fall besteht das Ergebnis aus zwei Teilen: vom ersten bis einschließlich zum letzten Punkt, danach der Anfang bis vor den ersten Punkt.'
loesung: |
  **Ansatz:** Erste und letzte Punktposition bestimmen. Sind sie gleich, gibt es höchstens einen Punkt.
  ---
  ```java
  int erster = s.indexOf('.');
  int letzter = s.lastIndexOf('.');
  if (erster == letzter) {
      System.out.println(s);
  } else {
      System.out.println(s.substring(erster, letzter + 1) + s.substring(0, erster));
  }
  ```
  ---
  Probe mit `".Start. Mitte!"`: erster = 0, letzter = 6. Der Anfang `substring(0, 0)` ist leer, die Mitte ist `".Start."`. Ergebnis `.Start.`.
  ---
  Probe mit `".."`: erster = 0, letzter = 1, Mitte `".."`, Anfang leer. Ergebnis `..`. Methoden wie `split` (zerlegt einen Text in Stücke) sind hier nicht erlaubt und auch nicht nötig.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben bunt gemischt. Einige brauchen Werkzeuge aus
[Kapitel 1](/lernen/ep1/werkzeuge) und [Kapitel 2](/lernen/ep1/ausdruecke): Ganzzahldivision, Casts,
`char` als Zahl, `==` gegen `equals` und das Lesen von Fehlermeldungen. Das ist Absicht. Im Quiz steht
nicht dabei, aus welchem Kapitel eine Frage stammt. Bei den ersten beiden Aufgaben musst du nichts
ausrechnen. Du entscheidest nur, welche Bauform passt.

```aufgabe
id: vz-mix-verfahren-bauform
titel: Welche Bauform passt?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Wähle für jede Situation die passende Bauform. Du musst keinen Code schreiben.

  a) Je nach Menüpunkt `1`, `2`, `3` oder `4` soll eine andere Aktion laufen.
  b) Ein Messwert soll in „niedrig“ (unter 10), „mittel“ (10 bis 99) oder „hoch“ (ab 100) eingeteilt werden.
  c) Ein Formular prüft drei Felder unabhängig voneinander und meldet **jeden** gefundenen Fehler.
teile:
  - typ: auswahl
    label: a)
    optionen: ['switch-Anweisung', 'else-if-Kette mit Bereichen', 'unabhängige if-Anweisungen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Kette ginge auch, aber hier wird eine Variable mit festen Werten verglichen. Genau dafür ist `switch` gemacht.
      - wert: 2
        meldung: Es soll genau eine Aktion laufen, nicht mehrere.
  - typ: auswahl
    label: b)
    optionen: ['switch-Anweisung', 'else-if-Kette mit Bereichen', 'unabhängige if-Anweisungen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '`switch` vergleicht nur auf Gleichheit mit Konstanten. Bereiche wie „unter 10“ kann es nicht prüfen.'
      - wert: 2
        meldung: Der Wert soll in genau eine Stufe fallen. Unabhängige `if` könnten mehrere Stufen melden, wenn die Bedingungen überlappen.
  - typ: auswahl
    label: c)
    optionen: ['switch-Anweisung', 'else-if-Kette mit Bereichen', 'unabhängige if-Anweisungen']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Eine Kette bricht nach dem ersten Treffer ab. Dann würde nur der erste Fehler gemeldet.
      - wert: 0
        meldung: Hier gibt es keinen einzelnen Selektor mit festen Werten, sondern drei getrennte Prüfungen.
hinweise:
  - 'Frage dich jeweils: Gleichheit mit festen Werten? Bereiche mit genau einem Treffer? Mehrere Treffer erlaubt?'
loesung: |
  **Ansatz:** Für jede Situation klären, ob genau ein Fall oder mehrere zutreffen dürfen und ob Bereiche oder feste Werte geprüft werden.
  ---
  a) Feste Werte einer Variablen: `switch`. b) Bereiche, genau eine Stufe: else-if-Kette.
  ---
  c) Jeder Fehler soll erscheinen: unabhängige `if`. Das entspricht den drei Programmiermustern aus [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
```

```aufgabe
id: vz-mix-verfahren-werkzeug
titel: Welches Werkzeug löst die Aufgabe?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Ordne jeder Teilaufgabe das Werkzeug zu, mit dem du sie am direktesten löst. Rechne nichts aus.

  a) Ohne Schleife feststellen, ob ein Zeichen in einem Text mindestens zweimal vorkommt.
  b) Verhindern, dass bei `a == 0` eine Division `b / a` in einer Bedingung ausgeführt wird.
  c) Für die Monate 1 bis 12 die Zahl der Tage ausgeben.
teile:
  - typ: auswahl
    label: a)
    optionen: ['`indexOf` mit `lastIndexOf` vergleichen', 'Kurzschlussauswertung mit `&&`', '`switch` mit zusammengefassten Marken']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Kurzschlussauswertung sichert eine Bedingung ab, sie zählt keine Zeichen.
      - wert: 2
        meldung: Ein `switch` vergleicht einen Wert mit Konstanten. Er weiß nichts über die Anzahl von Zeichen in einem Text.
  - typ: auswahl
    label: b)
    optionen: ['`indexOf` mit `lastIndexOf` vergleichen', 'Kurzschlussauswertung mit `&&`', '`switch` mit zusammengefassten Marken']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Hier geht es nicht um Texte, sondern darum, eine gefährliche Rechnung zu überspringen.
      - wert: 2
        meldung: '`a != 0 && b / a > 1` erledigt das in einer Bedingung. Ein `switch` ist dafür unnötig umständlich.'
  - typ: auswahl
    label: c)
    optionen: ['`indexOf` mit `lastIndexOf` vergleichen', 'Kurzschlussauswertung mit `&&`', '`switch` mit zusammengefassten Marken']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Es gibt nichts abzusichern. Gesucht ist eine Fallunterscheidung über 12 feste Werte.
      - wert: 0
        meldung: Monate sind Zahlen, keine Texte, in denen etwas gesucht wird.
hinweise:
  - Lies jede Teilaufgabe und frage dich, welches Problem gelöst werden soll. Zählen, absichern oder nach festen Werten verzweigen?
loesung: |
  **Ansatz:** Jedes Werkzeug löst eine bestimmte Art von Problem: zählen ohne Schleife, eine Rechnung absichern, nach festen Werten verzweigen.
  ---
  a) Erste und letzte Position vergleichen. b) Kurzschluss: `a != 0 && b / a > 1`.
  ---
  c) `switch` mit Gruppen für 31 und 30 Tage und einem eigenen Fall für Februar.
```

```aufgabe
id: vz-mix-ganzzahldivision
titel: Gleich 3,5?
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? Hier brauchst du die Ganzzahldivision aus [Kapitel 2](/lernen/ep1/ausdruecke).
teile:
  - typ: ausgabe
    code: |
      int q = 7 / 2;
      if (q == 3.5) {
          System.out.println("halb");
      } else {
          System.out.println("ganz " + q);
      }
    loesung: |
      ganz 3
    fehler:
      - wert: "halb"
        meldung: '`7 / 2` mit zwei `int`-Werten ist eine Ganzzahldivision. Der Nachkommaanteil fällt weg, `q` ist 3.'
hinweise:
  - Welchen Typ haben `7` und `2`? Was passiert dann bei `/`?
loesung: |
  **Ansatz:** Zuerst den Wert von `q` bestimmen, dann die Bedingung auswerten.
  ---
  `7 / 2` ist eine Ganzzahldivision und ergibt 3. `3 == 3.5` ist falsch, also läuft `else` und gibt `ganz 3` aus.
```

```aufgabe
id: vz-mix-char-bereich
titel: Großbuchstabe oder nicht?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Zeichen vom Typ `char` sind in Java Zahlen (ihr Unicode-Wert, siehe [Kapitel 2](/lernen/ep1/ausdruecke)). Deshalb kann man
  sie mit `<` und `>` vergleichen. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      char c = 'G';
      if (c >= 'a' && c <= 'z') {
          System.out.println("klein");
      } else if (c >= 'A' && c <= 'Z') {
          System.out.println("groß");
      } else {
          System.out.println("kein Buchstabe");
      }
      System.out.println(c + 1);
    loesung: |
      groß
      72
    fehler:
      - wert: "groß\nH"
        meldung: '`c + 1` ist eine Rechnung mit einem `char` und einem `int`. Das Ergebnis ist ein `int`, nämlich der Zahlenwert 71 plus 1.'
      - wert: "klein\n72"
        meldung: Großbuchstaben haben kleinere Zahlenwerte als Kleinbuchstaben. `'G'` liegt nicht zwischen `'a'` und `'z'`.
hinweise:
  - Die Großbuchstaben haben die Werte 65 (`A`) bis 90 (`Z`), die Kleinbuchstaben 97 (`a`) bis 122 (`z`).
  - In der letzten Zeile wird gerechnet, nicht verkettet. Welchen Typ hat `c + 1`?
loesung: |
  **Ansatz:** Den Zahlenwert von `'G'` bestimmen und mit den Bereichen vergleichen.
  ---
  `'G'` hat den Wert 71. `71 >= 97` ist falsch, die erste Bedingung scheitert. `71 >= 65 && 71 <= 90` ist wahr: Ausgabe `groß`.
  ---
  `c + 1` ist `71 + 1 = 72` vom Typ `int`, also wird die Zahl `72` ausgegeben, nicht der Buchstabe `H`.
```

```aufgabe
id: vz-mix-string-vergleich
titel: Gleicher Text, anderes Ergebnis
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Was gibt das Programm aus? (`==` und `equals` bei Strings: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      String endung = "en";
      String a = "Wien";
      String b = "Wi" + endung;
      if (a == b) {
          System.out.println("gleich mit ==");
      } else {
          System.out.println("verschieden mit ==");
      }
      if (a.equals(b)) {
          System.out.println("gleich mit equals");
      }
    loesung: |
      verschieden mit ==
      gleich mit equals
    fehler:
      - wert: "gleich mit ==\ngleich mit equals"
        meldung: '`==` prüft bei Strings, ob beide Variablen auf **dasselbe Objekt** zeigen. `b` wird beim Ausführen neu zusammengebaut und ist ein anderes Objekt mit gleichem Inhalt.'
hinweise:
  - '`equals` vergleicht den Inhalt Zeichen für Zeichen. `==` vergleicht bei Strings etwas anderes.'
  - '`"Wi" + endung` erzeugt beim Ausführen einen neuen String.'
loesung: |
  **Ansatz:** Bei Strings prüft `==`, ob es dasselbe Objekt ist. `equals` prüft den Inhalt.
  ---
  `b` entsteht erst beim Ausführen aus `"Wi"` und `endung`. Das ist ein neues Objekt, also ist `a == b` falsch. Ausgabe `verschieden mit ==`.
  ---
  Der Inhalt ist in beiden Fällen `Wien`, also ist `a.equals(b)` wahr. Merke: In Bedingungen vergleichst du Strings immer mit `equals`. Im Programmiertest ist `==` bei Strings sogar ausdrücklich verboten.
```

```aufgabe
id: vz-mix-cast
titel: Ein Cast in der Bedingung
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? (Casts: [Kapitel 2](/lernen/ep1/ausdruecke))
teile:
  - typ: ausgabe
    code: |
      double preis = 2.9;
      int euro = (int) preis;
      if (euro == 3) {
          System.out.println("gerundet");
      } else if (euro == 2) {
          System.out.println("abgeschnitten");
      }
      if (preis > euro) {
          System.out.println("Cent-Anteil vorhanden");
      }
    loesung: |
      abgeschnitten
      Cent-Anteil vorhanden
    fehler:
      - wert: "gerundet\nCent-Anteil vorhanden"
        meldung: Der Cast `(int)` rundet nicht, er schneidet die Nachkommastellen ab.
hinweise:
  - Was macht `(int) 2.9` mit den Nachkommastellen?
  - Im zweiten `if` wird ein `double` mit einem `int` verglichen. Java wandelt dafür den `int` in einen `double` um.
loesung: |
  **Ansatz:** Den Wert nach dem Cast bestimmen, dann beide Verzweigungen auswerten.
  ---
  `(int) 2.9` schneidet ab und ergibt 2. Die Kette gibt `abgeschnitten` aus.
  ---
  `2.9 > 2.0` ist wahr, also erscheint auch `Cent-Anteil vorhanden`. Die beiden `if` sind unabhängig.
```

```aufgabe
id: vz-mix-compilerfehler
titel: Wo meldet der Compiler den Fehler?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Beim Übersetzen meldet der Compiler für dieses Programm Fehler in zwei Zeilen. Markiere diese zwei Zeilen.
  Wie man Fehlermeldungen liest, steht in [Kapitel 1](/lernen/ep1/werkzeuge).
teile:
  - typ: zeilen
    code: |
      public class Ampel {
          public static void main(String[] args) {
              String farbe = "rot";
              if (farbe.equals("rot")) {
                  System.out.println("Stehen")
              } else if (farbe.equals("grün")) {
                  System.out.println("Gehen");
              } else {
                  System.out.println("Warten");
              }
              if farbe.equals("gelb") {
                  System.out.println("Achtung");
              }
          }
      }
    loesung: [5, 11]
    fehler:
      - wert: [5]
        meldung: Das ist einer der beiden Fehler. Prüfe auch alle Bedingungen auf ihre runden Klammern.
      - wert: [6, 11]
        meldung: Ein fehlender Strichpunkt wird oft erst in der nächsten Zeile bemerkt, gehört aber an das Ende der Anweisung davor.
hinweise:
  - Jede Anweisung endet mit einem Strichpunkt. Jede Bedingung steht in runden Klammern.
loesung: |
  **Ansatz:** Die Zeilen auf die beiden häufigsten Syntaxfehler prüfen: fehlender Strichpunkt, fehlende Klammern um die Bedingung.
  ---
  Zeile 5: Nach `println("Stehen")` fehlt der Strichpunkt. Der Compiler meldet `';' expected`.
  ---
  Zeile 11: Um die Bedingung `farbe.equals("gelb")` fehlen die runden Klammern. Der Compiler meldet hier gleich zweimal einen Fehler, `'(' expected` und `')' expected`. Richtig ist `if (farbe.equals("gelb")) {`.
```

```aufgabe
id: vz-mix-print-switch
titel: print oder println?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Was gibt das Programm aus? `print` gibt aus, ohne eine neue Zeile zu beginnen. `println` beginnt danach eine neue Zeile
  (siehe [Kapitel 1](/lernen/ep1/werkzeuge)).
teile:
  - typ: ausgabe
    code: |
      int stufe = 1;
      switch (stufe) {
          case 1:
              System.out.print("eins-");
          case 2:
              System.out.print("zwei-");
              break;
          case 3:
              System.out.print("drei-");
      }
      System.out.println("fertig");
    loesung: |
      eins-zwei-fertig
    fehler:
      - wert: "eins-\nzwei-\nfertig"
        meldung: '`print` beginnt keine neue Zeile. Alles steht hintereinander, bis ein `println` kommt.'
      - wert: "eins-fertig"
        meldung: Nach `case 1:` fehlt das `break`. Java fällt in `case 2:` durch.
hinweise:
  - Bestimme zuerst, welche Anweisungen im `switch` laufen. Achte dann darauf, wo eine neue Zeile beginnt.
loesung: |
  **Ansatz:** Einsprung bei `case 1:`, bis zum ersten `break` laufen, dann die Ausgaben aneinanderhängen.
  ---
  Es laufen `print("eins-")` und, wegen des fehlenden `break`, `print("zwei-")`. Dann endet der `switch`.
  `println("fertig")` hängt `fertig` in derselben Zeile an. Ausgabe `eins-zwei-fertig`.
```

```aufgabe
id: vz-mix-schaltjahr-luecke
titel: Schaltjahr im Februar-Fall
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ergänze die Bedingung für ein Schaltjahr im Februar-Fall eines Kalenders. Die Regel: durch 4 teilbar, aber nicht durch
  100, außer es ist durch 400 teilbar.
teile:
  - typ: lueckentext
    code: |
      int month = 2;
      int year = 2024;
      switch (month) {
          case 2:
              if ((year % 4 == 0 ___ year % 100 != 0) ___ year % 400 == 0) {
                  System.out.println(29);
              } else {
                  System.out.println(28);
              }
              break;
          default:
              System.out.println("anderer Monat");
      }
    luecken: [["&&"], ["||"]]
    fehler:
      - wert: ["||", "&&"]
        meldung: 'Dann lautet die Bedingung `(year % 4 == 0 || year % 100 != 0) && year % 400 == 0`. Sie ist nur noch für durch 400 teilbare Jahre wahr, und 2024 ergäbe 28. In der Klammer müssen beide Teile gelten (UND), die 400-Regel kommt mit ODER dazu.'
      - wert: ["&&", "&&"]
        meldung: Dann wäre 2000 kein Schaltjahr. Die Teilbarkeit durch 400 ist eine Ausnahme, die allein genügt. Sie wird mit ODER angehängt.
hinweise:
  - '„Durch 4, aber nicht durch 100“: Beide Teile müssen gelten.'
  - Die 400-Regel ist eine zweite, eigenständige Möglichkeit für ein Schaltjahr.
loesung: |
  **Ansatz:** Die Regel in zwei Fälle zerlegen: (durch 4 und nicht durch 100) oder (durch 400).
  ---
  Lücke 1: `&&`, weil beide Bedingungen in der Klammer gelten müssen. Lücke 2: `||`, weil die 400-Regel allein reicht.
  ---
  Probe: 2024 gibt 29, 1900 gibt 28 (Klammer falsch, nicht durch 400), 2000 gibt 29 (durch 400).
```

```aufgabe
id: vz-mix-kalender-pruefen
titel: Eine fremde Kalender-Lösung prüfen
niveau: 3
lernziel: 5
kompetenz: begruenden
quelle: Typische Fehler in Lösungen von Studierenden zu Aufgabenblatt 1 WS2021, Aufgabe 1c
angabe: |
  Diese Lösung für die Tage eines gültigen Monats (1 bis 12) hat zwei Fehler. Bei beiden **fehlt** etwas. Markiere
  für jeden Fehler die Zeile, die ihn verursacht: die Anweisung, nach der etwas fehlt, und das `if`, dem ein Zweig fehlt.
teile:
  - typ: zeilen
    code: |
      switch (month) {
          case 4: case 6: case 9: case 11:
              System.out.println(30);
          case 2:
              if (year % 4 == 0) {
                  if (year % 100 != 0 || year % 400 == 0) {
                      System.out.println(29);
                  } else {
                      System.out.println(28);
                  }
              }
              break;
          default:
              System.out.println(31);
      }
    loesung: [3, 5]
    fehler:
      - wert: [3]
        meldung: Das fehlende `break` nach den 30-Tage-Monaten ist ein Fehler. Was gibt das Programm aber für Februar 2023 aus?
      - wert: [6]
        meldung: Die Bedingung in Zeile 6 ist richtig. Innerhalb von `year % 4 == 0` ergibt sie genau die Schaltjahrregel.
hinweise:
  - Teste im Kopf `month = 4` und `month = 2, year = 2023`.
  - Bei `month = 4` fehlt ein `break`. Bei 2023 ist die Bedingung in Zeile 5 falsch. Welcher Zweig läuft dann?
loesung: |
  **Ansatz:** Mit Testfällen aus jeder Gruppe durchspielen: April, Februar in einem Schaltjahr, Februar in einem Nicht-Schaltjahr.
  ---
  Zeile 3: Nach `println(30)` fehlt `break;`. Für April erscheint dann `30` und, durch den Fallthrough in `case 2:`, in einem durch 4 teilbaren Jahr zusätzlich `29` oder `28`.
  ---
  Zeile 5: Das äußere `if (year % 4 == 0)` hat keinen `else`-Zweig. Für Februar 2023 gibt das Programm deshalb gar nichts aus. Nach seiner schließenden Klammer (Zeile 11) gehört `else { System.out.println(28); }`.
  ---
  Ungültige Monate behandelt diese Lösung übrigens als 31 Tage. Für die Blattaufgabe müsste `default` `Ungültiges Datum!` ausgeben und die 31-Tage-Monate eigene Marken bekommen. Die Frage nach den zwei Zeilen zielt aber auf die beiden Fehler, die gültige Daten falsch behandeln.
```

## Prüfungsaufgaben

Die folgenden Aufgaben sind im Stil der Prüfungsteile von EP1 gebaut. Die ersten drei entsprechen
Quizfragen (Format nach den TUWEL-Tests 2021, Format 2026W unbestätigt). Plane dafür je zwei bis drei
Minuten ein. Die beiden Programmieraufgaben entsprechen Aufgaben von Aufgabenblatt 1. Für sie solltest
du je 15 bis 20 Minuten brauchen und deine Lösung danach im Feedbackgespräch erklären können.

```aufgabe
id: vz-pr-quiz-startwerte
titel: Quiz – Startwerte für QS
niveau: 3
punkte: 1
lernziel: 3
kompetenz: anwenden
quelle: Nach dem Muster von TUWEL-Test 1 WS2021, Frage 3 (neues Programm)
angabe: |
  Sie haben folgendes Programmfragment gegeben:

  ```java
  String s = "";
  if (a >= b) {
      if (a % b == 0) {
          s += "P";
      } else {
          s += "Q";
      }
  } else {
      s += "R";
  }
  if (a + b > 10) {
      s += "S";
  } else {
      s += "T";
  }
  System.out.print(s);
  ```

  Welche dieser Startwerte erzeugen die Ausgabe `QS`?
teile:
  - typ: auswahl
    optionen: ['`int a = 7, b = 2;`', '`int a = 9, b = 4;`', '`int a = 12, b = 6;`']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das `Q` stimmt, denn `7 % 2` ist 1. Aber `7 + 2 > 10` ist falsch, also folgt `T`.'
      - wert: 2
        meldung: '`12 % 6` ist 0. Dann entsteht `P`, nicht `Q`.'
hinweise:
  - 'Zusicherung für `Q`: `a >= b && a % b != 0`. Zusicherung für `S`: `a + b > 10`.'
  - Prüfe jeden Kandidaten gegen beide Zusicherungen und streiche beim ersten Widerspruch.
loesung: |
  **Ansatz:** Zusicherungen aufstellen: `Q` braucht `a >= b && a % b != 0`, `S` braucht `a + b > 10`.
  ---
  Kandidat 1: `7 >= 2`, `7 % 2 = 1`, also `Q`. Aber `9 > 10` ist falsch. Gestrichen.
  Kandidat 3: `12 % 6 = 0`, also `P`. Gestrichen.
  ---
  Kandidat 2: `9 >= 4`, `9 % 4 = 1`, also `Q`. `13 > 10`, also `S`. Probe vorwärts ergibt `QS`.
```

```aufgabe
id: vz-pr-quiz-rf
titel: Quiz – Aussagen zu if
niveau: 3
punkte: 2
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfragen zu Aufgabenblatt 1 SS2020, Aufgabe 1, als Richtig-Falsch-Block
angabe: |
  Beurteilen Sie die folgenden Aussagen über die `if`-Anweisung in Java.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine `if`-Anweisung darf ohne `else`-Zweig verwendet werden.
        richtig: true
        erklaerung: '`else` ist optional. Ohne `else` passiert bei falscher Bedingung einfach nichts.'
      - text: Zu einem `if` kann man beliebig viele `else`-Zweige schreiben.
        richtig: false
        erklaerung: Zu einem `if` gehört höchstens ein `else`. Bei `else if` ist das zweite `if` eine neue Anweisung im `else`-Zweig des ersten.
      - text: In einem `if`-Zweig darf `break;` stehen, auch wenn die `if`-Anweisung in keinem `switch` und keiner Schleife steht.
        richtig: false
        erklaerung: 'Der Compiler meldet `break outside switch or loop`. `break` verlässt nur einen `switch` oder eine Schleife.'
      - text: '`if (x > 0);` ist eine gültige Anweisung.'
        richtig: true
        erklaerung: Der Strichpunkt ist eine leere Anweisung als Rumpf. Das übersetzt der Compiler, es ist aber fast immer ein Fehler.
    fehler:
      - wert: [r, r, f, t]
        meldung: '`else if` sieht aus wie mehrere `else`-Zweige. Tatsächlich ist jedes weitere `if` eine eigene Anweisung im `else` des vorigen.'
      - wert: [r, f, r, t]
        meldung: '`break` gibt es nur in `switch` und Schleifen. In einem `if` außerhalb davon ist es ein Übersetzungsfehler.'
hinweise:
  - Unterscheide jeweils, ob der Compiler die Konstruktion übersetzt und ob sie das tut, was man meint.
  - 'Denk an den Fehler `break outside switch or loop` und an die leere Anweisung `;`.'
loesung: |
  **Ansatz:** Jede Aussage gegen die Syntaxregeln prüfen, nicht gegen „guten Stil“.
  ---
  1 richtig: `else` ist optional. 2 falsch: höchstens ein `else`. Eine else-if-Kette besteht aus verschachtelten `if`-`else`.
  ---
  3 falsch: `break` außerhalb von `switch` und Schleifen übersetzt der Compiler nicht. 4 richtig: leere Anweisung, syntaktisch erlaubt.
  Teilpunkte wie im Quiz: je Aussage ein Viertel der Punkte.
```

```aufgabe
id: vz-pr-quiz-luecke
titel: Quiz – Parkgebühr als Lückentext
niveau: 3
punkte: 2
lernziel: 2
kompetenz: anwenden
quelle: Lückentext-Format nach TUWEL-Test SS2024 (Annahme); Inhalt neu
angabe: |
  Ein Parkhaus verlangt: bis einschließlich 30 Minuten 0 Euro, bis einschließlich 120 Minuten 2 Euro, darüber 5 Euro.
  Ergänzen Sie die Lücken so, dass die Kette für jede Parkdauer `min` (ganze Minuten, `min >= 0`) die richtige Gebühr ausgibt.
  Jede Bedingung soll nur **einen** Vergleich enthalten.
teile:
  - typ: lueckentext
    code: |
      int min = 45;
      if (___) {
          System.out.println(0);
      } else if (___) {
          System.out.println(2);
      } ___ {
          System.out.println(5);
      }
    luecken: [["min <= 30", "min < 31", "30 >= min"], ["min <= 120", "min < 121", "120 >= min"], ["else"]]
    fehler:
      - wert: ["min <= 120", "min <= 30", "else"]
        meldung: Die Reihenfolge ist vertauscht. Bei `min = 20` wäre schon `min <= 120` wahr, und es würden 2 Euro verlangt.
      - wert: ["min < 30", "min < 120", "else"]
        meldung: '„Bis einschließlich 30“ schließt die 30 ein. Mit `< 30` kosten genau 30 Minuten schon 2 Euro.'
hinweise:
  - Bei Obergrenzen mit `<=` kommt die kleinste Grenze zuerst.
  - Im zweiten Zweig ist schon sicher, dass `min > 30` gilt. Du brauchst dort nur noch die obere Grenze.
loesung: |
  **Ansatz:** Kette mit Obergrenzen, von der kleinsten aufwärts.
  ---
  Lücke 1: `min <= 30`. Lücke 2: `min <= 120`. In diesem Zweig ist `min > 30` durch die Kette schon gesichert.
  ---
  Lücke 3: `else` für alles über 120. Probe: 30 ergibt 0, 31 ergibt 2, 120 ergibt 2, 121 ergibt 5. Mit `min = 45` erscheint `2`.
```

```aufgabe
id: vz-pr-quiz-ausgabe
titel: Quiz – Ausgabe mit switch und if
niveau: 3
punkte: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Welche Ausgabe erzeugt das folgende Programmfragment?
teile:
  - typ: ausgabe
    code: |
      String code = "B7";
      char typ = code.charAt(0);
      int nr = code.charAt(1) - '0';
      String s = "";
      switch (typ) {
          case 'A':
              s += "Alpha";
              break;
          case 'B':
              s += "Beta";
          case 'C':
              s += "Gamma";
              break;
          default:
              s += "?";
      }
      if (nr > 5 && nr % 2 == 1 || typ == 'A') {
          s += "+";
      }
      System.out.println(s + nr);
    loesung: |
      BetaGamma+7
    fehler:
      - wert: "Beta+7"
        meldung: Nach `case 'B':` fehlt das `break`. Java fällt in `case 'C':` durch.
      - wert: "BetaGamma+55"
        meldung: '`code.charAt(1) - ''0''` rechnet mit den Zahlenwerten der Zeichen. `''7'' - ''0''` ist 55 minus 48, also 7.'
      - wert: "BetaGamma7"
        meldung: 'Die Bedingung ist wahr. `&&` bindet stärker als `||`, also zählt zuerst `7 > 5 && 7 % 2 == 1`, und beide Vergleiche sind wahr. Dass `typ == ''A''` falsch ist, ändert bei `||` nichts mehr.'
hinweise:
  - Bestimme zuerst `typ` und `nr`. Die Ziffer `'7'` minus `'0'` ergibt den Zahlenwert 7, weil die Ziffernzeichen fortlaufende Werte haben.
  - Im `switch` fehlt ein `break`. In der Bedingung bindet `&&` stärker als `||`.
loesung: |
  **Ansatz:** Zuerst die Variablen bestimmen, dann den `switch` mit Fallthrough, dann die zusammengesetzte Bedingung.
  ---
  `typ` ist `'B'`. `nr` ist `'7' - '0'`, also 55 minus 48, also 7. Die Ziffern `'0'` bis `'9'` haben die Werte 48 bis 57.
  ---
  `switch`: Einsprung bei `case 'B':`, `s = "Beta"`, kein `break`, also auch `"Gamma"`, dann `break`.
  ---
  Bedingung: `(7 > 5 && 7 % 2 == 1) || typ == 'A'` ist `(true && true) || false`, also wahr. `s` wird `"BetaGamma+"`. Ausgabe `BetaGamma+7`.
```

```aufgabe
id: vz-pr-hex-code
titel: Blatt-Aufgabe – Hexadezimalziffer in Binär
niveau: 3
punkte: 4
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2018, Aufgabe 2B (Zahlenumrechner mit switch), umformuliert
angabe: |
  Eine **Hexadezimalziffer** ist eine Ziffer im Sechzehnersystem. Sie hat einen Wert von 0 bis 15. Die Werte 10 bis 15
  schreibt man als `A` bis `F`. Jede Hexadezimalziffer lässt sich mit genau vier Binärstellen schreiben, etwa
  `0x5` als `0101` und `0xA` als `1010`. Binärstellen sind Stellen im Zweiersystem, hier mit den Stellenwerten
  8, 4, 2 und 1. Die Vorsilbe `0x` vor einer Zahl kennzeichnet in Java eine Hexadezimalzahl, so wie `0b` eine
  Binärzahl (beides aus [Kapitel 2](/lernen/ep1/ausdruecke)).

  Schreib den Rumpf von `druckeBinaer` mit einer **switch-Anweisung**. Für einen Wert `h` von 0 bis 15 gibt die Methode
  eine Zeile wie `0xA entspricht 1010` aus. Für jeden anderen Wert gibt sie `Keine gültige Hexadezimalziffer` aus.
teile:
  - typ: code
    vorlage: |
      public class Hex {
          public static void druckeBinaer(int h) {
              // TODO: switch-Anweisung
          }
      }
    musterloesung: |
      public class Hex {
          public static void druckeBinaer(int h) {
              switch (h) {
                  case 0: System.out.println("0x0 entspricht 0000"); break;
                  case 1: System.out.println("0x1 entspricht 0001"); break;
                  case 2: System.out.println("0x2 entspricht 0010"); break;
                  case 3: System.out.println("0x3 entspricht 0011"); break;
                  case 4: System.out.println("0x4 entspricht 0100"); break;
                  case 5: System.out.println("0x5 entspricht 0101"); break;
                  case 6: System.out.println("0x6 entspricht 0110"); break;
                  case 7: System.out.println("0x7 entspricht 0111"); break;
                  case 8: System.out.println("0x8 entspricht 1000"); break;
                  case 9: System.out.println("0x9 entspricht 1001"); break;
                  case 10: System.out.println("0xA entspricht 1010"); break;
                  case 11: System.out.println("0xB entspricht 1011"); break;
                  case 12: System.out.println("0xC entspricht 1100"); break;
                  case 13: System.out.println("0xD entspricht 1101"); break;
                  case 14: System.out.println("0xE entspricht 1110"); break;
                  case 15: System.out.println("0xF entspricht 1111"); break;
                  default: System.out.println("Keine gültige Hexadezimalziffer");
              }
          }
      }
    tests:
      - { aufruf: "druckeBinaer(10)", stdout: "0xA entspricht 1010" }
      - { aufruf: "druckeBinaer(5)", stdout: "0x5 entspricht 0101" }
      - { aufruf: "druckeBinaer(0)", stdout: "0x0 entspricht 0000" }
      - { aufruf: "druckeBinaer(15)", stdout: "0xF entspricht 1111" }
      - { aufruf: "druckeBinaer(16)", stdout: "Keine gültige Hexadezimalziffer" }
      - { aufruf: "druckeBinaer(12)", stdout: "0xC entspricht 1100", versteckt: true }
      - { aufruf: "druckeBinaer(7)", stdout: "0x7 entspricht 0111", versteckt: true }
      - { aufruf: "druckeBinaer(-1)", stdout: "Keine gültige Hexadezimalziffer", versteckt: true }
    regeln: { keineSchleifen: true, keineHilfsmethoden: true, verboteneApi: ["Integer.toBinaryString", "Integer.toHexString", "String.format"] }
    fehler:
      - { wert: 1, meldung: "Kommen bei dir mehrere Zeilen heraus? Dann fehlt ein `break` und Java fällt in den nächsten Fall durch." }
      - { wert: 5, meldung: "Für Werte außerhalb von 0 bis 15 brauchst du einen `default`-Zweig." }
      - { wert: "verboteneApi", meldung: "Die Umrechnung soll hier mit `switch` erfolgen, nicht mit fertigen Methoden der Java-API." }
hinweise:
  - Du brauchst 16 `case`-Marken und einen `default`-Zweig. Jede Marke gibt eine fertige Zeile aus.
  - 'Vergiss nach jeder Ausgabe das `break` nicht. Mehrere Anweisungen dürfen in einer Zeile stehen, etwa `case 0: System.out.println("..."); break;`.'
loesung: |
  **Ansatz:** Ein `switch` über `h` mit je einer Marke für 0 bis 15 und `default` für ungültige Werte.
  ---
  Die Binärdarstellung findest du, indem du die Stellenwerte 8, 4, 2, 1 zerlegst: 10 = 8 + 2, also `1010`. 5 = 4 + 1, also `0101`.
  ---
  ```java
  switch (h) {
      case 0: System.out.println("0x0 entspricht 0000"); break;
      case 1: System.out.println("0x1 entspricht 0001"); break;
      // ... je eine Zeile für 2 bis 14 ...
      case 15: System.out.println("0xF entspricht 1111"); break;
      default: System.out.println("Keine gültige Hexadezimalziffer");
  }
  ```
  ---
  Im Feedbackgespräch kommt hier oft die Frage, ob `if` und `switch` austauschbar sind. Antwort: Diesen `switch` kann man als else-if-Kette mit `h == 0`, `h == 1` und so weiter schreiben. Der `switch` ist hier lesbarer, weil nur Gleichheit mit festen Werten geprüft wird.
```

```aufgabe
id: vz-pr-punkt-teilen-code
titel: Blatt-Aufgabe – Am ersten Punkt teilen
niveau: 3
punkte: 4
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 1 SS2020, Aufgabe 1a, umformuliert und mit neuen Testtexten
angabe: |
  Schreib den Rumpf von `druckeGeteilt` ohne Schleife:

  - Enthält `s` einen Punkt, gib zuerst alles **nach** dem ersten Punkt und dann alles **vor** dem ersten Punkt aus, in einer Zeile. Der erste Punkt selbst verschwindet. Weitere Punkte bleiben erhalten.
  - Enthält `s` keinen Punkt, füge in der Mitte einen Punkt ein, an der Position `s.length() / 2`.

  Beispiele: `"Vorne. Hinten."` ergibt ` Hinten.Vorne`, `"Ende."` ergibt `Ende`, `"Torte"` ergibt `To.rte`.
teile:
  - typ: code
    vorlage: |
      public class Teilen {
          public static void druckeGeteilt(String s) {
              // TODO
          }
      }
    musterloesung: |
      public class Teilen {
          public static void druckeGeteilt(String s) {
              int p = s.indexOf('.');
              if (p == -1) {
                  int m = s.length() / 2;
                  System.out.println(s.substring(0, m) + "." + s.substring(m));
              } else {
                  System.out.println(s.substring(p + 1) + s.substring(0, p));
              }
          }
      }
    tests:
      - aufruf: 'druckeGeteilt("Vorne. Hinten.")'
        stdout: " Hinten.Vorne"
      - aufruf: 'druckeGeteilt("Ende.")'
        stdout: "Ende"
        beschreibung: "Punkt am Ende"
      - aufruf: 'druckeGeteilt(".Anfang")'
        stdout: "Anfang"
        beschreibung: "Punkt am Anfang"
      - aufruf: 'druckeGeteilt("Torte")'
        stdout: "To.rte"
        beschreibung: "kein Punkt, ungerade Länge"
      - aufruf: 'druckeGeteilt("Kuchen")'
        stdout: "Kuc.hen"
        beschreibung: "kein Punkt, gerade Länge"
      - aufruf: 'druckeGeteilt("a.b.c")'
        stdout: "b.ca"
        versteckt: true
      - aufruf: 'druckeGeteilt("")'
        stdout: "."
        versteckt: true
    regeln:
      keineSchleifen: true
      keineHilfsmethoden: true
      erlaubteApi: ["String.indexOf", "String.substring", "String.length", "String.charAt"]
    fehler:
      - { wert: 1, meldung: "Erscheint der erste Punkt noch in der Ausgabe? Der Teil nach dem Punkt beginnt bei `p + 1`." }
      - { wert: 4, meldung: "Ohne Punkt liefert `indexOf` den Wert `-1`. Prüfst du diesen Fall, bevor du mit der Position rechnest?" }
      - { wert: 6, meldung: "Bei mehreren Punkten zählt nur der erste. Verwendest du `lastIndexOf`? Hier ist `indexOf` richtig, und `lastIndexOf` ist gar nicht erlaubt." }
hinweise:
  - Bestimme die Position `p` des ersten Punkts. Unterscheide mit `if` die Fälle `p == -1` und „Punkt vorhanden“.
  - 'Mit Punkt: `s.substring(p + 1)` ist der Teil danach, `s.substring(0, p)` der Teil davor. Ohne Punkt: an `m = s.length() / 2` teilen.'
loesung: |
  **Ansatz:** Position `p` des ersten Punkts bestimmen. Ohne Punkt in der Mitte teilen, sonst die beiden Teile vertauschen.
  ---
  ```java
  int p = s.indexOf('.');
  if (p == -1) {
      int m = s.length() / 2;
      System.out.println(s.substring(0, m) + "." + s.substring(m));
  } else {
      System.out.println(s.substring(p + 1) + s.substring(0, p));
  }
  ```
  ---
  Probe: `"Vorne. Hinten."` hat `p = 5`. Danach kommt `" Hinten."`, davor `"Vorne"`. `"Torte"` hat 5 Zeichen, `m = 2`, Ergebnis `To.rte`.
  ---
  Grenzfälle: `".Anfang"` hat `p = 0`, der Teil davor ist leer. Beim leeren Text ist `m = 0`, das Ergebnis ist nur der Punkt.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Eine Verzweigung führt Code nur aus, wenn eine Bedingung vom Typ `boolean` wahr ist. Von `if`
  und `else` läuft immer genau ein Block, und in einer else-if-Kette nur der erste wahre Zweig. (2) Bei `&&` und `||`
  wertet Java zuerst links aus und überspringt die rechte Seite, wenn das Ergebnis schon feststeht. (3) Ein `switch`
  springt zur passenden Marke und läuft bis zum nächsten `break` weiter. Andere gute Antworten sind das
  Rückwärtsverfahren mit Zusicherungen oder der Trick mit `indexOf` und `lastIndexOf`.
```

:::zusammenfassung
1. **Bedingungen** sind Ausdrücke vom Typ `boolean`. Vergleiche schreibst du mit `<`, `>`, `<=`, `>=`, `==` und `!=`. Ein einzelnes `=` ist eine Zuweisung.
2. **if und else:** Bei `true` läuft der erste Block, sonst der `else`-Block. Ohne `{ }` gehört nur die eine nächste Anweisung zum `if`, und ein `else` gehört immer zum letzten freien `if`.
3. **Logische Operatoren:** `&&` (beide), `||` (mindestens eine), `!` (Gegenteil). `&&` bindet stärker als `||`. Die Kurzschlussauswertung überspringt die rechte Seite, sobald das Ergebnis feststeht.
4. **Verneinen** nach De Morgan: Aus `&&` wird `||` und umgekehrt, und jeder Vergleich dreht sich um. Das Gegenteil von `x >= 1 && x <= 10` ist `x < 1 || x > 10`.
5. **Mehrfachverzweigung:** Eine else-if-Kette prüft von oben nach unten und nimmt nur den ersten wahren Zweig. Die Reihenfolge der Grenzen entscheidet über die Richtigkeit.
6. **Zusicherungen:** An jeder Stelle gelten alle umgebenden Bedingungen zusammen, im `else` verneint. Damit findest du Startwerte zu einer Ausgabe: zerlegen, Zusicherungen aufschreiben, Kandidaten streichen, Probe.
7. **switch:** Java springt zur passenden `case`-Marke und läuft bis zum `break` oder zum Ende. Ohne `break` fällt es in die nächsten Fälle durch. `default` fängt alle übrigen Werte und ist optional.
8. **Strings ohne Schleife:** `indexOf` und `lastIndexOf` liefern erste und letzte Position oder `-1`. Gleiche Positionen bedeuten höchstens ein Vorkommen. Mit `substring` und `+` setzt du Teile neu zusammen.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt,
löse die genannte Aufgabe noch einmal.

1. **`=` statt `==` in der Bedingung**, etwa `if (fertig = true)`. Die Bedingung ist dann immer wahr. Training: „Welche Zeilen übersetzt der Compiler nicht?“ in [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
2. **Strichpunkt direkt nach `if (...)`**, sodass der Block immer läuft. Training: „Der verirrte Strichpunkt“ in [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
3. **Klammern weggelassen und der Einrückung geglaubt**, auch beim dangling else. Training: „Was gehört zum if?“ und „Zu welchem if gehört das else?“ in [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung) und [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
4. **Ungerade Zahlen mit `n % 2 == 1` geprüft.** Bei negativen Zahlen ist der Rest `-1`. Training: „Ungerade, aber negativ“ in [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung).
5. **Bereiche wie in der Mathematik geschrieben**, also `0 < x < 10`, oder Vergleiche verkürzt wie `x == 3 || 4`. Training: „Den richtigen Bereichstest wählen“ in [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
6. **Beim Verneinen das `&&` stehen gelassen**, sodass die Bedingung nie wahr wird. Training: „Das Gegenteil hinschreiben“ und „Eine Bedingung aus Text bauen“ in [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
7. **Die Schutzbedingung rechts statt links**, etwa `b / a > 1 && a != 0`. Training: „Sicher dividieren“ in [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
8. **Grenzen einer else-if-Kette in der falschen Reihenfolge**, sodass ein Zweig unerreichbar wird. Training: „Fehler in der Kette finden“ und „Pakete in Klassen einteilen“ in [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung).
9. **Bei Startwert-Fragen die äußere Bedingung vergessen** oder das `else` dem falschen `if` zugeordnet. Training: „Startwerte für AC“ und „Quizfrage mit äußerem else“ in [3.4 Was gilt an dieser Stelle?](/lernen/ep1/verzweigungen/was-gilt-an-dieser-stelle-startwerte-rueckwaerts-finden).
10. **Ein vergessenes `break`** oder ein `default` in der Mitte übersehen. Training: „Wo fehlt das break?“ und „default in der Mitte“ in [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).
11. **Im Februar den Fall „nicht durch 4 teilbar“ vergessen**, sodass gar nichts ausgegeben wird. Training: „Tage im Monat“ und „Eine fremde Kalender-Lösung prüfen“ in [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough) und in der [Gemischten Wiederholung](/lernen/ep1/verzweigungen/gemischte-wiederholung).
12. **Mit der Position `-1` weitergerechnet** oder bei `substring` die ausgeschlossene Endposition vergessen. Training: „Fehler in der Punkt-Umstellung“ in [3.6 Strings ohne Schleife untersuchen](/lernen/ep1/verzweigungen/strings-ohne-schleife-untersuchen).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig,
**3** = sicher, auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du
dich bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Die Ausgabe von `if`-`else`-Programmen herleiten, auch ohne Klammern.
2. Bedingungen mit `&&`, `||` und `!` auswerten und verneinen, Kurzschlussauswertung nutzen.
3. Mehrfachverzweigungen in der richtigen Reihenfolge schreiben.
4. Zusicherungen angeben und Startwerte zu einer Ausgabe finden.
5. Die Ausgabe von `switch` mit und ohne `break` herleiten.
6. Einen `switch` mit zusammengefassten Marken schreiben, etwa den Kalender.
7. String-Aufgaben ohne Schleife mit `indexOf`, `lastIndexOf` und `substring` lösen.
8. Die Zusatzfragen zu `if` und `switch` im Feedbackgespräch begründet beantworten.

## Mündliche Prüfung: Feedbackgespräch

Im Feedbackgespräch zu Aufgabenblatt 1 erklärst du deinen Code und beantwortest Zusatzfragen. Die
Karten zeigen typische Fragen. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst
dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: vz-karte-bedingung
  frage: Was ist eine Bedingung, und warum übersetzt Java `if (x = 5)` nicht?
  antwort: |
    Eine Bedingung ist ein Ausdruck vom Typ `boolean`, also mit dem Wert `true` oder `false`. In den runden Klammern
    eines `if` muss genau so ein Ausdruck stehen. `x = 5` ist eine Zuweisung. Ihr Wert ist 5 vom Typ `int`, und eine
    Zahl ist kein Wahrheitswert. Deshalb meldet der Compiler einen Fehler. Gemeint war `x == 5`.
  kernpunkte:
    - Bedingung hat den Typ boolean
    - "= ist Zuweisung, == ist Vergleich"
    - Wert der Zuweisung ist ein int
- id: vz-karte-else-optional
  frage: Darf eine if-Anweisung ohne else stehen, und wie viele else-Zweige kann ein if haben?
  antwort: |
    Ja, `else` ist optional. Ohne `else` passiert bei falscher Bedingung einfach nichts, das Programm macht nach dem
    Block weiter. Zu einem `if` gehört höchstens ein `else`. Bei einer else-if-Kette steht im `else` ein neues `if`.
    Deshalb sieht es nur so aus, als hätte ein `if` mehrere `else`-Zweige.
  kernpunkte:
    - else ist optional
    - höchstens ein else je if
    - else if ist ein neues if im else
- id: vz-karte-klammern
  frage: Warum setzt man auch bei nur einer Anweisung geschweifte Klammern um den Block?
  antwort: |
    Ohne Klammern gehört nur die eine nächste Anweisung zum `if`. Fügt jemand später eine zweite eingerückte Zeile
    hinzu, läuft diese immer, obwohl sie wie ein Teil des `if` aussieht. Außerdem ordnet Java ein `else` immer dem
    letzten freien `if` zu, was ohne Klammern leicht falsch gelesen wird. Mit Klammern sieht man die Struktur sofort.
  kernpunkte:
    - ohne Klammern nur eine Anweisung
    - Einrückung hat keine Bedeutung für Java
    - dangling else wird vermieden
- id: vz-karte-kurzschluss
  frage: Was ist Kurzschlussauswertung, und wofür nutzt man sie?
  antwort: |
    Bei `&&` und `||` wertet Java zuerst die linke Seite aus. Ist bei `&&` die linke Seite falsch oder bei `||` wahr,
    steht das Ergebnis fest, und die rechte Seite wird nicht mehr ausgewertet. Damit kann man eine gefährliche
    Rechnung absichern: In `y != 0 && x / y > 2` findet die Division bei `y = 0` nie statt. Die Schutzbedingung muss
    deshalb links stehen.
  kernpunkte:
    - linke Seite zuerst
    - rechte Seite wird übersprungen, wenn das Ergebnis feststeht
    - Schutzbedingung gegen Division durch 0 links
- id: vz-karte-de-morgan
  frage: Wie verneinst du die Bedingung `alter >= 15 && alter < 65` korrekt?
  antwort: |
    Nach den Regeln von De Morgan wird aus `&&` ein `||`, und jeder Vergleich wird umgedreht. Aus `alter >= 15` wird
    `alter < 15`, aus `alter < 65` wird `alter >= 65`. Das Gegenteil ist also `alter < 15 || alter >= 65`. Ließe man
    das `&&` stehen, gäbe es kein Alter, das beide Teile erfüllt.
  kernpunkte:
    - aus && wird ||
    - jeder Vergleich wird umgedreht
    - Probe mit einem Wert
- id: vz-karte-vorrang
  frage: Was ergibt `true || false && false`, und warum?
  antwort: |
    Das Ergebnis ist `true`. `&&` bindet stärker als `||`, so wie Mal stärker bindet als Plus. Java rechnet also
    `true || (false && false)`. Die Klammer ist `false`, und `true || false` ist `true`. Wer es anders meint, muss
    Klammern setzen: `(true || false) && false` ist `false`.
  kernpunkte:
    - "&& vor ||"
    - Klammerung zeigen
    - Klammern setzen, wenn anders gemeint
- id: vz-karte-kette-reihenfolge
  frage: Warum spielt in einer else-if-Kette die Reihenfolge der Bedingungen eine Rolle? Gib ein Beispiel.
  antwort: |
    Java nimmt nur den ersten wahren Zweig und prüft danach nichts mehr. Steht beim Notenschlüssel `punkte >= 65` vor
    `punkte >= 92`, bekommt auch jemand mit 95 Punkten ein Genügend. Der Zweig für Sehr gut ist dann unerreichbar.
    Bei Untergrenzen mit `>=` gehört die größte Grenze nach oben. Dafür braucht jede Bedingung nur noch eine Grenze.
  kernpunkte:
    - nur der erste wahre Zweig läuft
    - falsche Reihenfolge macht Zweige unerreichbar
    - größte Untergrenze zuerst
- id: vz-karte-zusicherung
  frage: Wie findest du bei einer Quizfrage die Startwerte, die eine bestimmte Ausgabe wie AD erzeugen?
  antwort: |
    Ich ordne jeden Buchstaben seiner `if`-Anweisung zu. Für jeden Buchstaben schreibe ich die Zusicherung auf: alle
    Bedingungen auf dem Weg dorthin, mit `&&` verbunden, im `else` verneint. Dann prüfe ich die angebotenen Startwerte
    und streiche jeden beim ersten Widerspruch. Den letzten Kandidaten rechne ich zur Probe einmal vorwärts durch.
  kernpunkte:
    - Ausgabe zerlegen
    - vollständige Zusicherung inklusive äußerer Bedingungen
    - Ausschluss und Probe vorwärts
- id: vz-karte-break-weglassen
  frage: Darf man das break in einem case-Zweig weglassen? Was passiert dann?
  antwort: |
    Ja, der Compiler übersetzt das. Dann läuft Java aber nach dem Ende des Zweigs in den nächsten `case` weiter,
    ohne dessen Wert zu prüfen. Das heißt Fallthrough. Er ist nützlich, wenn mehrere Werte denselben Code teilen,
    etwa die Monate mit 31 Tagen. Vergisst man das `break` unabsichtlich, laufen zusätzliche Anweisungen, und das
    Programm gibt zum Beispiel zwei Noten aus.
  kernpunkte:
    - syntaktisch erlaubt
    - Fallthrough in den nächsten case
    - absichtlich für gemeinsame Fälle
- id: vz-karte-default
  frage: Muss eine switch-Anweisung einen default-Zweig haben?
  antwort: |
    Nein, `default` ist optional. Fehlt es und passt keine Marke, wird im `switch` gar nichts ausgeführt. Bei Eingaben,
    die ungültig sein können, ist ein `default` aber sinnvoll, etwa für „Ungültiges Datum!“ beim Kalender. `default`
    darf überall stehen. Steht es nicht am Ende, gilt auch dort der Fallthrough, deshalb setzt man es ans Ende.
  kernpunkte:
    - default ist optional
    - ohne default und ohne Treffer passiert nichts
    - sinnvoll für ungültige Werte
- id: vz-karte-if-switch
  frage: Sind if- und switch-Anweisungen gegeneinander austauschbar?
  antwort: |
    Nur in eine Richtung. Jede `switch`-Anweisung lässt sich als else-if-Kette mit `==` schreiben, bei Strings mit
    `equals`. Umgekehrt geht das nicht immer, denn `switch` vergleicht nur auf Gleichheit mit konstanten Werten.
    Bereiche wie „ab 30 kg“ oder Verknüpfungen mit `&&` kann `switch` nicht ausdrücken. Außerdem erlaubt `switch`
    nur bestimmte Typen: kein `double`, kein `long`, kein `boolean`.
  kernpunkte:
    - switch immer als if-Kette schreibbar
    - if nicht immer als switch
    - switch nur Gleichheit mit Konstanten und bestimmte Typen
- id: vz-karte-kalender
  frage: Erkläre deinen Kalender aus Aufgabenblatt 1. Wie hast du die Schaltjahrregel umgesetzt?
  antwort: |
    Ich verwende einen `switch` über den Monat. Die Monate mit 31 Tagen und die mit 30 Tagen stehen jeweils als
    mehrere `case`-Marken untereinander und teilen sich eine Ausgabe mit anschließendem `break`. Im Fall Februar prüft
    ein `if` die Bedingung `(year % 4 == 0 && year % 100 != 0) || year % 400 == 0`. Dann gibt es 29 Tage, sonst 28.
    Alle anderen Monatszahlen landen im `default` und erzeugen „Ungültiges Datum!“.
  kernpunkte:
    - Gruppen durch Fallthrough zusammengefasst
    - Schaltjahrbedingung mit && und ||
    - default für ungültige Monate
- id: vz-karte-indexof-trick
  frage: Wie stellst du ohne Schleife fest, ob ein Zeichen keinmal, einmal oder öfter in einem Text vorkommt?
  antwort: |
    Ich bestimme mit `indexOf` die erste und mit `lastIndexOf` die letzte Position. Ist die erste Position `-1`,
    kommt das Zeichen nicht vor. Sind beide gleich, ist das erste Vorkommen auch das letzte, es kommt genau einmal vor.
    Sonst kommt es mindestens zweimal vor. Den Fall `-1` muss ich zuerst prüfen, weil sonst `-1 == -1` als „genau
    einmal“ durchgeht.
  kernpunkte:
    - erste und letzte Position vergleichen
    - "-1 zuerst prüfen"
    - gleich heißt höchstens einmal
- id: vz-karte-ausblick-schleife
  frage: Was können Verzweigungen nicht, wofür du im nächsten Kapitel Schleifen brauchst? Verbinde mit einem Beispiel.
  antwort: |
    Eine Verzweigung führt Code höchstens einmal aus. Um jedes Zeichen eines Textes zu zählen, müsste man aber eine
    Prüfung so oft wiederholen, wie der Text lang ist. Das geht mit einer Schleife aus
    [Kapitel 4](/lernen/ep1/schleifen). Ohne Schleife helfen nur fertige Methoden wie `indexOf`, die intern selbst
    suchen. Deshalb kann man mit `indexOf` und `lastIndexOf` zwar „keinmal, einmal, öfter“ unterscheiden, aber nicht
    genau zählen, wie oft ein Zeichen vorkommt.
  kernpunkte:
    - Verzweigung läuft höchstens einmal
    - Wiederholung braucht Schleifen (Kapitel 4)
    - indexOf sucht intern
- id: vz-karte-modulo
  frage: Warum prüft man „ungerade“ besser mit `n % 2 != 0` als mit `n % 2 == 1`? Verbinde mit Kapitel 2.
  antwort: |
    In Java hat der Rest das Vorzeichen der linken Zahl, das kennst du aus [Kapitel 2](/lernen/ep1/ausdruecke). Für `n = -5` ist `n % 2` gleich
    `-1`, nicht `1`. Die Prüfung `n % 2 == 1` hält also jede negative ungerade Zahl für gerade. Der Rest ist aber bei
    jeder geraden Zahl 0. Deshalb ist `n % 2 != 0` für alle ganzen Zahlen richtig.
  kernpunkte:
    - Rest hat das Vorzeichen der linken Zahl
    - "-5 % 2 ist -1"
    - Vergleich mit 0 ist sicher
```
