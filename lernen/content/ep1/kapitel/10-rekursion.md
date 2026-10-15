---
nummer: 10
titel: "Rekursion I: Zahlen und Strings"
kurz: Methoden, die sich selbst aufrufen. Basisfall und Fortschritt, der Aufrufstapel, rekursive Methoden auf Zahlen und Strings ohne Schleifen, genau so, wie Blatt 3 und die dritte Aufgabe im Programmiertest es verlangen.
teil: rekursion
stunden: 6
pruefungsgewicht: 3
voraussetzungen: [ausdruecke, verzweigungen, schleifen, methoden]
lernziele:
  - zu einer rekursiven Methode den Basisfall und den Fortschritt benennen und begründen, ob jeder erlaubte Aufruf den Basisfall erreicht
  - den Ablauf eines rekursiven Aufrufs mit dem Aufrufstapel verfolgen und den Rückgabewert Schritt für Schritt in einer Tabelle herleiten
  - die Anzahl der Aufrufe einer Rekursion bestimmen und die Reihenfolge von Ausgaben vor und nach dem Selbstaufruf exakt angeben
  - rekursive Methoden auf ganzen Zahlen (Intervalle, Summen, Ziffern mit / 10 und % 10) ohne Schleifen schreiben
  - rekursive Methoden auf Strings mit charAt, substring, length und isEmpty schreiben, die zählen, prüfen oder einen neuen String aufbauen
  - rekursive Methoden mit zusätzlichen Parametern (Index, Zähler, zweiter String) schreiben und den passenden Startaufruf wählen
  - eine Schleifenlösung in eine Rekursion ohne Schleifen, Hilfsmethoden und globale Variablen umwandeln und dabei die Einschränkungen des Programmiertests einhalten
  - fehlerhafte rekursive Methoden analysieren (fehlender oder unerreichbarer Basisfall, kein Fortschritt, verlorener Rückgabewert) und reparieren
---

**Worum geht es?** Eine Methode darf in ihrem Rumpf jede Methode aufrufen, auch sich selbst. Das nennt man
**Rekursion**. Das Wort kommt vom lateinischen *recurrere*, „zurücklaufen“. Mit Rekursion löst du eine Aufgabe,
indem du sie auf eine **kleinere Aufgabe derselben Art** zurückführst. Die kleinere Aufgabe führst du wieder auf
eine noch kleinere zurück. Irgendwann ist die Aufgabe so klein, dass die Antwort ohne weitere Arbeit feststeht.

Ein Bild aus dem Alltag: Du stehst in einer langen Warteschlange und willst wissen, an welcher Stelle du stehst.
Du fragst die Person vor dir: „An welcher Stelle stehst du?“ Sie fragt ihrerseits die Person vor ihr, und so weiter.
Die erste Person in der Schlange muss niemanden fragen. Sie weiß: „Ich bin die Nummer 1.“ Diese Antwort wandert
zurück. Jede Person zählt 1 dazu und gibt ihre Zahl nach hinten weiter. So erfährst du deine Stelle, ohne die
ganze Schlange selbst abzuzählen.

**Was kommt in der Prüfung?** Rekursion ist einer der wichtigsten Stoffe in EP1.

- **Aufgabenblatt 3:** In Aufgabe 3 und 4 schreibst du rekursive Methoden auf Zahlen und Strings, zum Beispiel
  ungerade Zahlen eines Intervalls ausgeben, Ziffern zählen oder einen String umbauen. Dabei sind Schleifen,
  Hilfsmethoden und Klassenvariablen verboten.
- **Programmiertest:** In den vorliegenden Tests von 2020 bis 2022 war meist die letzte von drei Aufgaben eine
  rekursive Methode ohne Schleifen. Im Test vom Jänner 2022 brachte sie 9 von 30 Punkten. Bewertet wurden Ansatz,
  Basisfall, Fortschritt und Rückgabewert. Was Basisfall und Fortschritt sind, lernst du in
  [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
- **Quiz (TUWEL-Test):** Du beurteilst gegebene rekursive Methoden. Eine typische Frage ist „Terminiert diese
  Implementierung, liefert sie das richtige Ergebnis?“. Terminieren heißt: nach endlich vielen Schritten fertig
  werden. Eine andere Frage ist etwa „Entsteht der Rückgabewert auf dem Rückweg?“. Fragen wie „Wie oft wird die Methode aufgerufen?“ stehen als Zusatzfragen auf den
  Aufgabenblättern.
- **Feedbackgespräch:** Die Zusatzfragen der Blätter lauten etwa „Warum braucht eine Rekursion eine
  Abbruchbedingung?“ oder „Gibt es eine Grenze für die Rekursionstiefe?“.

**Wozu brauchst du das später?** Kapitel 11 vertieft die Rekursion (Methoden mit zwei Selbstaufrufen, Aufrufbäume,
rekursive Grafik). Kapitel 13 wendet sie auf Arrays an. Beide bauen direkt auf diesem Kapitel auf.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Methoden** aus [Kapitel 6](/lernen/ep1/methoden): Aufruf, Parameter, Rückgabewert mit `return` und den Ablauf
  mehrerer Aufrufe ([6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode)). Das ist die
  wichtigste Voraussetzung.
- **Strings** aus [Kapitel 2](/lernen/ep1/ausdruecke): `length()`, `charAt(i)`, `substring(a)` und `substring(a, b)`
  ([2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals)).
- **Ganzzahldivision und Rest** aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
- **Verzweigungen** aus [Kapitel 3](/lernen/ep1/verzweigungen) und **Schleifen** aus [Kapitel 4](/lernen/ep1/schleifen).

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht
klappt, wiederhole zuerst das verlinkte Kapitel.
:::

```aufgabe
id: rk-ein-ablauf
titel: Methoden rufen Methoden auf
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode))
teile:
  - typ: ausgabe
    code: |
      public class Ablauf {
          public static void innen() {
              System.out.println("innen");
          }

          public static void aussen() {
              System.out.println("aussen an");
              innen();
              System.out.println("aussen aus");
          }

          public static void main(String[] args) {
              aussen();
              innen();
          }
      }
    loesung: |
      aussen an
      innen
      aussen aus
      innen
    fehler:
      - wert: "aussen an\naussen aus\ninnen\ninnen"
        meldung: Der Aufruf `innen();` in `aussen` läuft sofort an seiner Stelle, also zwischen den beiden Ausgaben von `aussen`. Erst danach geht es in `aussen` weiter.
hinweise:
  - Bei jedem Aufruf springt Java in die Methode, arbeitet sie ganz ab und macht direkt hinter dem Aufruf weiter.
loesung: |
  `main` ruft `aussen()` auf. Dort erscheint `aussen an`, dann läuft `innen()` mit `innen`, dann `aussen aus`.
  ---
  Zurück in `main` folgt der zweite Aufruf `innen()`. Er gibt noch einmal `innen` aus.
```

```aufgabe
id: rk-ein-rueckgabe
titel: Ein Aufruf im Aufruf
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Doppelt {
          public static int plusDrei(int x) {
              return x + 3;
          }

          public static void main(String[] args) {
              System.out.println(plusDrei(plusDrei(4)) * 2);
          }
      }
    loesung: |
      20
    fehler:
      - wert: "14"
        meldung: Der innere Aufruf `plusDrei(4)` liefert 7. Dieser Wert wird an den äußeren Aufruf übergeben, der daraus 10 macht. Erst dann wird mit 2 multipliziert.
      - wert: "17"
        meldung: Das `* 2` gehört nicht zum Argument. Es wird erst auf das Ergebnis des äußeren Aufrufs angewendet. Rechne zuerst `plusDrei(4)`, dann `plusDrei` mit diesem Ergebnis, dann `* 2`.
hinweise:
  - Werte verschachtelte Aufrufe von innen nach außen aus. Jeder Aufruf wird durch seinen Rückgabewert ersetzt.
loesung: |
  Der innere Aufruf `plusDrei(4)` liefert `4 + 3 = 7`. Der Ausdruck wird zu `plusDrei(7) * 2`.
  ---
  `plusDrei(7)` liefert 10. Zum Schluss `10 * 2 = 20`.
```

```aufgabe
id: rk-ein-kopie
titel: Der Parameter ist eine Kopie
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      public class Kopie {
          public static int halbiere(int n) {
              n = n / 2;
              return n;
          }

          public static void main(String[] args) {
              int n = 9;
              int h = halbiere(n);
              System.out.println(n + " " + h);
          }
      }
    loesung: |
      9 4
    fehler:
      - wert: "4 4"
        meldung: Der Parameter `n` in `halbiere` ist eine eigene Variable mit einer Kopie des Werts. Die Zuweisung ändert nur diese Kopie. Das `n` in `main` bleibt 9.
      - wert: "9 4.5"
        meldung: '`9 / 2` ist eine Division zweier `int`-Werte. Der Nachkommaanteil fällt weg, das Ergebnis ist 4.'
hinweise:
  - Java übergibt beim Aufruf nur den Wert (call-by-value). Die Variable in `main` ist eine andere Variable als der Parameter.
loesung: |
  `halbiere(9)` legt einen neuen Parameter `n = 9` an und rechnet `9 / 2 = 4` (Ganzzahldivision).
  ---
  Zurück in `main` ist `h = 4`. Das `n` in `main` wurde nie verändert und ist weiterhin 9. Ausgabe `9 4`.
```

```aufgabe
id: rk-ein-substring
titel: Erstes Zeichen und Rest
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: ausgabe
    code: |
      String s = "Tasse";
      System.out.println(s.charAt(0));
      System.out.println(s.substring(1));
      System.out.println(s.substring(1).length());
      System.out.println(s.substring(0, s.length() - 1));
    loesung: |
      T
      asse
      4
      Tass
    fehler:
      - wert: "T\nTasse\n5\nTass"
        meldung: '`substring(1)` beginnt bei Index 1, also beim zweiten Zeichen. Das erste Zeichen `T` fällt weg.'
      - wert: "T\nasse\n4\nTasse"
        meldung: Der zweite Index von `substring(a, b)` ist exklusiv. `substring(0, 4)` nimmt nur die Indizes 0 bis 3.
hinweise:
  - Indizes beginnen bei 0. `substring(a)` liefert alles ab Index `a`, `substring(a, b)` endet vor Index `b`.
loesung: |
  `charAt(0)` ist `T`. `substring(1)` ist der Rest ab Index 1, also `asse` mit Länge 4.
  ---
  `s.length() - 1` ist 4. `substring(0, 4)` nimmt die Indizes 0 bis 3, also `Tass`. Das letzte Zeichen fehlt.
```

```aufgabe
id: rk-ein-ziffern
titel: Letzte Ziffer und Rest einer Zahl
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen))
teile:
  - typ: ausgabe
    code: |
      int z = 4827;
      System.out.println(z % 10);
      System.out.println(z / 10);
      System.out.println(7 / 10);
    loesung: |
      7
      482
      0
    fehler:
      - wert: "7\n482.7\n0"
        meldung: '`4827 / 10` teilt zwei `int`-Werte. Der Nachkommaanteil fällt weg, es bleibt 482.'
      - wert: "7\n482\n0.7"
        meldung: Auch `7 / 10` ist eine Ganzzahldivision. 10 passt null Mal in 7, das Ergebnis ist 0.
hinweise:
  - '`% 10` liefert den Rest bei der Division durch 10, das ist die letzte Ziffer. `/ 10` streicht die letzte Ziffer.'
loesung: |
  `4827 % 10` ist der Rest von 4827 geteilt durch 10, also 7, die letzte Ziffer.
  ---
  `4827 / 10` ist 482, die letzte Ziffer fällt weg. `7 / 10` ist 0, denn eine einstellige Zahl hat nach dem Streichen keine Ziffer mehr.
```

```aufgabe
id: rk-ein-while
titel: Ziffern mit einer Schleife zählen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt))
teile:
  - typ: ausgabe
    code: |
      int n = 30517;
      int anzahl = 0;
      while (n > 0) {
          if (n % 10 > 4) {
              anzahl++;
          }
          n = n / 10;
      }
      System.out.println(anzahl);
    loesung: |
      2
    fehler:
      - wert: "5"
        meldung: Die Schleife zählt nicht alle Ziffern, sondern nur die, für die `n % 10 > 4` gilt.
      - wert: "3"
        meldung: Prüfe jede Ziffer einzeln gegen `> 4`. Die Ziffern 3, 0 und 1 sind nicht größer als 4 und zählen nicht.
hinweise:
  - Schreib die Ziffern von hinten nach vorne auf (7, 1, 5, 0, 3) und prüfe jede einzeln.
loesung: |
  Die Schleife nimmt mit `n % 10` immer die letzte Ziffer und streicht sie danach mit `n / 10`. Die Ziffern kommen in der Reihenfolge 7, 1, 5, 0, 3.
  ---
  Größer als 4 sind 7 und 5. Also ist `anzahl = 2`. Bei `n = 0` endet die Schleife.
```

## Eine Methode ruft sich selbst auf

```aufgabe
id: rk-sa-check-lesezeichen
titel: Was merkt sich Java bei einem Aufruf?
niveau: 1
art: check
angabe: |
  In [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode) hast du gesehen, was bei einem
  Methodenaufruf passiert. `a` ruft `b` auf, und `b` ruft `c` auf. Gerade läuft `c`. Was passiert, wenn `c` fertig ist?
teile:
  - typ: auswahl
    optionen:
      - Java macht in `b` direkt hinter dem Aufruf von `c` weiter.
      - Java macht in `a` direkt hinter dem Aufruf von `b` weiter.
      - Das Programm endet, weil die zuletzt aufgerufene Methode fertig ist.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`b` ist noch nicht fertig. Es hat nur auf `c` gewartet. Java kehrt immer zur zuletzt gemerkten Stelle zurück, das ist die Stelle in `b`.'
      - wert: 2
        meldung: Das Programm endet erst, wenn `main` fertig ist. Nach `c` geht es in der Methode weiter, die `c` aufgerufen hat.
loesung: |
  Bei jedem Aufruf merkt sich Java die Rücksprungstelle, wie ein Lesezeichen. Die Lesezeichen liegen übereinander.
  ---
  Das oberste Lesezeichen gehört zum letzten Aufruf, also zum Aufruf von `c` in `b`. Dorthin kehrt Java zurück.
```

In Kapitel 6 haben Methoden immer **andere** Methoden aufgerufen. Java verbietet aber nicht, dass eine Methode
**sich selbst** aufruft. Der Aufruf funktioniert dann genau wie jeder andere Aufruf: Java merkt sich die
Rücksprungstelle, legt neue Parameter an und führt den Rumpf aus. Neu ist nur, dass es derselbe Rumpf ist.

Wir beginnen mit einer Aufgabe, die du mit einer Schleife schon lösen kannst: einen Countdown ausgeben. Aus
[4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen) kennst du diese Lösung:

```java
for (int i = 3; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("Start!");
```

Jetzt denken wir anders über die Aufgabe nach. „Zähle von 3 herunter“ heißt: Gib 3 aus, und zähle danach von 2
herunter. „Zähle von 2 herunter“ heißt: Gib 2 aus, und zähle von 1 herunter. Die Aufgabe enthält eine kleinere
Aufgabe derselben Art. Nur „Zähle von 0 herunter“ ist anders: Da gibt es nichts mehr zu zählen, es folgt nur
noch `Start!`.

:::beispiel[Ein Countdown ohne Schleife]
```java
public class Countdown {
    public static void countdown(int n) {
        if (n == 0) {
            System.out.println("Start!");
        } else {
            System.out.println(n);
            countdown(n - 1);
        }
    }

    public static void main(String[] args) {
        countdown(3);
    }
}
```

Zuerst die Zeilen der Methode `countdown`:

- `public static void countdown(int n)` ist ein gewöhnlicher Methodenkopf. Die Methode bekommt eine ganze Zahl `n` und liefert nichts zurück (`void`).
- `if (n == 0)` fragt: Ist nichts mehr zu zählen? Dann gibt die Methode `Start!` aus und ist fertig. Sie ruft sich **nicht** mehr selbst auf.
- Im `else`-Zweig gibt sie `n` aus und ruft dann `countdown(n - 1)` auf. Das ist der **Selbstaufruf**. Er bekommt eine um 1 kleinere Zahl.

Jetzt der Ablauf, Schritt für Schritt:

1. `main` ruft `countdown(3)` auf. `n` ist 3, also nicht 0. Ausgabe `3`. Dann folgt der Aufruf `countdown(2)`.
2. In `countdown(2)` ist `n = 2`. Ausgabe `2`, dann der Aufruf `countdown(1)`.
3. In `countdown(1)` ist `n = 1`. Ausgabe `1`, dann der Aufruf `countdown(0)`.
4. In `countdown(0)` ist `n == 0` wahr. Ausgabe `Start!`. Kein weiterer Aufruf, diese Methode ist fertig.
5. Jetzt kehrt Java zurück: in `countdown(1)` hinter den Selbstaufruf. Dort steht nichts mehr, also ist auch dieser Aufruf fertig. Genauso enden `countdown(2)` und `countdown(3)`. Dann ist `main` fertig.

Die Ausgabe ist:

```
3
2
1
Start!
```
:::

Wichtig ist Schritt 2: `countdown(2)` hat **sein eigenes** `n` mit dem Wert 2. Das `n` von `countdown(3)` bleibt
unberührt 3. Jeder Aufruf hat eigene Parameter, genau wie in [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben).
Es gibt also nicht „die“ Variable `n`, sondern für jeden laufenden Aufruf eine eigene.

```aufgabe
id: rk-sa-gefuehrt
titel: Ein Countdown in Zweierschritten
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Was gibt das Programm aus? Löse die Aufgabe zuerst geführt in kleinen Schritten.
teile:
  - typ: ausgabe
    code: |
      public class Zweier {
          public static void zweier(int n) {
              if (n < 1) {
                  System.out.println("fertig");
              } else {
                  System.out.println(n);
                  zweier(n - 2);
              }
          }

          public static void main(String[] args) {
              zweier(7);
          }
      }
    loesung: |
      7
      5
      3
      1
      fertig
    fehler:
      - wert: "7\n5\n3\n1\n-1\nfertig"
        meldung: 'Bei `n = -1` ist `n < 1` wahr. Dann läuft der `if`-Zweig: Er gibt `fertig` aus, aber nicht die Zahl.'
      - wert: "7\n5\n3\nfertig"
        meldung: 'Bei `n = 1` ist `1 < 1` falsch. Die 1 wird also noch ausgegeben, erst der Aufruf mit `-1` landet im `if`-Zweig mit `fertig`.'
gefuehrt:
  - text: Unter welcher Bedingung ruft sich `zweier` **nicht** mehr selbst auf?
    teil:
      typ: auswahl
      optionen: ['`n < 1`', '`n == 0`', '`n > 1`']
      richtig: [0]
    erklaerung: Im `if`-Zweig mit `n < 1` steht kein Selbstaufruf. Das ist der Fall, in dem die Rekursion endet.
  - text: Mit welchem Wert ruft `zweier(7)` sich selbst auf?
    teil: { typ: zahl, loesung: "7 - 2" }
    erklaerung: Der Selbstaufruf lautet `zweier(n - 2)`, also `zweier(5)`.
  - text: Welcher Aufruf landet als erster im `if`-Zweig?
    teil:
      typ: auswahl
      optionen: ['`zweier(1)`', '`zweier(-1)`', '`zweier(0)`']
      richtig: [1]
    erklaerung: Die Werte sind 7, 5, 3, 1, -1. Erst bei -1 ist `n < 1` wahr. Den Wert 0 erreicht die Folge nie.
  - text: Wie viele Zeilen gibt das Programm insgesamt aus?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Vier Zahlen (7, 5, 3, 1) und die Zeile `fertig`.
hinweise:
  - Schreib die Werte von `n` für jeden Aufruf untereinander. Prüfe bei jedem, ob `n < 1` gilt.
loesung: |
  **Ansatz:** Jeden Aufruf einzeln durchgehen. Ist `n < 1`, erscheint `fertig`, sonst die Zahl und ein neuer Aufruf mit `n - 2`.
  ---
  Die Aufrufe sind `zweier(7)`, `zweier(5)`, `zweier(3)`, `zweier(1)` und `zweier(-1)`. Die ersten vier geben ihre Zahl aus.
  ---
  `zweier(-1)` erfüllt `n < 1` und gibt `fertig` aus. Kontrolle: fünf Zeilen, die letzte ist `fertig`.
```

:::definition[Rekursion, Basisfall, rekursiver Fall, Fortschritt]
Eine Methode heißt **rekursiv**, wenn sie sich in ihrem Rumpf selbst aufruft. Dieser Aufruf heißt **Selbstaufruf**
oder **rekursiver Aufruf**.

Eine rekursive Methode besteht aus zwei Arten von Fällen:

- Der **Basisfall** (auch **Abbruchbedingung** oder Rekursionsanker) ist ein Fall, in dem die Methode ihr Ergebnis
  **ohne** Selbstaufruf kennt. Hier endet die Rekursion.
- Der **rekursive Fall** führt die Aufgabe auf eine kleinere Aufgabe derselben Art zurück und ruft sich dafür selbst auf.

Der **Fortschritt** ist die Änderung der Argumente beim Selbstaufruf, zum Beispiel `n - 1` statt `n`. Er muss
dafür sorgen, dass jeder erlaubte Aufruf nach endlich vielen Schritten den Basisfall erreicht.
:::

**Beispiel:** `countdown` ist rekursiv. Der Basisfall ist `n == 0`, der Fortschritt ist `n - 1`. Für jedes
`n ≥ 0` erreicht die Folge `n, n - 1, n - 2, …` irgendwann die 0.

**Kein Beispiel:** Eine Methode `zeigeAlle()`, die `zeigeEins()` aufruft, ist **nicht** rekursiv. Sie ruft eine
andere Methode auf, nicht sich selbst. Auch `countdown` ohne den `if`-Zweig wäre keine brauchbare Rekursion. Sie
hätte keinen Basisfall und würde sich immer weiter selbst aufrufen, bis das Programm abbricht.

```aufgabe
id: rk-sa-zeilen-teile
titel: Basisfall und Selbstaufruf markieren
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Methode `sterne` gibt `n` Sterne in einer Zeile aus. Markiere **alle Zeilen, in denen ein Selbstaufruf steht**.
teile:
  - typ: zeilen
    code: |
      public static void sterne(int n) {
          if (n == 0) {
              System.out.println();
          } else {
              System.out.print("*");
              sterne(n - 1);
          }
      }
    loesung: [6]
    fehler:
      - wert: [1]
        meldung: Zeile 1 ist der Methodenkopf. Dort wird die Methode beschrieben, aber nicht aufgerufen.
      - wert: [3]
        meldung: Zeile 3 gehört zum Basisfall. `System.out.println()` ruft eine andere Methode auf, nicht `sterne`.
      - wert: [1, 6]
        meldung: Der Kopf in Zeile 1 ist kein Aufruf. Ein Aufruf steht im Rumpf und hat Argumente in Klammern.
hinweise:
  - Ein Selbstaufruf ist eine Anweisung im Rumpf, die den Namen der eigenen Methode mit Argumenten enthält.
loesung: |
  **Ansatz:** Im Rumpf nach dem Namen `sterne(` suchen. Der Methodenkopf selbst zählt nicht.
  ---
  Nur Zeile 6 enthält `sterne(n - 1);`. Die Zeilen 2 und 3 bilden den Basisfall (`n == 0`), die Zeilen 5 und 6 den rekursiven Fall.
```

Eine Methode mit `void` gibt nur etwas aus. Viel häufiger liefert eine rekursive Methode einen **Wert** zurück.
Dann setzt sich das Ergebnis aus dem Ergebnis des Selbstaufrufs und einem kleinen eigenen Beitrag zusammen.

Ein Beispiel ist die Summe `1 + 2 + … + n`. Wer die Summe bis 4 sucht, kann so denken: Das ist 4 plus die Summe bis 3.
Die Summe bis 3 ist 3 plus die Summe bis 2, und so weiter. Die Summe bis 0 ist 0, denn da wird nichts addiert.

:::beispiel[Die Summe 1 + 2 + … + n rekursiv]
```java
public class Summe {
    public static int summe(int n) {
        if (n == 0) {
            return 0;
        }
        return n + summe(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(summe(4));
    }
}
```

- `if (n == 0) { return 0; }` ist der Basisfall. Die Summe bis 0 ist 0, ganz ohne Selbstaufruf.
- `return n + summe(n - 1);` ist der rekursive Fall. Java muss zuerst `summe(n - 1)` ausrechnen. Erst wenn dieser Aufruf seinen Wert geliefert hat, kann es `n` dazuzählen und das Ergebnis zurückgeben.

Wir rechnen `summe(4)` aus, indem wir jeden Aufruf durch seine Definition ersetzen:

1. `summe(4)` ist `4 + summe(3)`. Dieser Aufruf muss warten, bis `summe(3)` fertig ist.
2. `summe(3)` ist `3 + summe(2)`. Er wartet auf `summe(2)`.
3. `summe(2)` ist `2 + summe(1)`, und `summe(1)` ist `1 + summe(0)`.
4. `summe(0)` ist der Basisfall und liefert sofort 0.
5. Jetzt werden die wartenden Additionen von innen nach außen fertig. Es gilt `summe(1) = 1 + 0 = 1` und `summe(2) = 2 + 1 = 3`. Danach folgen `summe(3) = 3 + 3 = 6` und `summe(4) = 4 + 6 = 10`.

Die Ausgabe ist `10`. Probe: 1 + 2 + 3 + 4 = 10.
:::

Man kann eine rekursive Methode also auf zwei Arten lesen. **Mechanisch:** Java führt Aufruf für Aufruf aus, wie in
Schritt 1 bis 5. **Inhaltlich:** „Wenn `summe(n - 1)` die Summe bis `n - 1` richtig liefert, dann liefert
`n + summe(n - 1)` die Summe bis `n`.“ Beim Schreiben hilft die inhaltliche Sicht. Du vertraust darauf, dass der
Selbstaufruf die kleinere Aufgabe richtig löst, und kümmerst dich nur um den einen Schritt. Beim Nachprüfen hilft
die mechanische Sicht.

:::merke[Die drei Fragen an jede rekursive Methode]
1. **Basisfall:** Für welche Eingabe kennt die Methode das Ergebnis ohne Selbstaufruf? Was liefert sie dort?
2. **Fortschritt:** Wie verändern sich die Argumente beim Selbstaufruf? Wird die Aufgabe dabei kleiner?
3. **Erreichbarkeit:** Erreicht **jeder** erlaubte Aufruf den Basisfall nach endlich vielen Schritten?

Dazu kommt beim Schreiben eine vierte Frage: Wie baue ich aus dem Ergebnis des Selbstaufrufs mein eigenes Ergebnis?
:::

```aufgabe
id: rk-sa-ausgabe-produkt
titel: Ein Produkt rekursiv
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Produkt {
          public static int p(int n) {
              if (n <= 1) {
                  return 1;
              }
              return n * p(n - 2);
          }

          public static void main(String[] args) {
              System.out.println(p(5));
              System.out.println(p(6));
              System.out.println(p(1) + p(0));
          }
      }
    loesung: |
      15
      48
      2
    fehler:
      - wert: "120\n720\n2"
        meldung: 'Der Selbstaufruf ist `p(n - 2)`, nicht `p(n - 1)`. Es wird nur jede zweite Zahl multipliziert: 5 · 3 · 1.'
      - wert: "15\n48\n1"
        meldung: 'Auch `p(0)` landet im Basisfall, denn `0 <= 1` ist wahr. Beide Aufrufe liefern 1, zusammen 2.'
hinweise:
  - Ersetze jeden Aufruf durch seine Definition, bis du beim Basisfall `n <= 1` ankommst.
  - '`p(6)` läuft über 6, 4, 2 und 0. Was liefert `p(0)`?'
loesung: |
  **Ansatz:** Aufrufe einsetzen, bis der Basisfall erreicht ist, dann von innen nach außen rechnen.
  ---
  `p(5) = 5 · p(3) = 5 · 3 · p(1) = 5 · 3 · 1 = 15`.
  ---
  `p(6) = 6 · p(4) = 6 · 4 · p(2) = 6 · 4 · 2 · p(0) = 6 · 4 · 2 · 1 = 48`.
  ---
  `p(1)` und `p(0)` sind beide Basisfälle mit Ergebnis 1. Ausgabe `2`.
```

:::achtung[Kein Basisfall: die Methode endet nie]
Eine typische falsche Fassung der Summe ist

```java
public static int summe(int n) {
    return n + summe(n - 1);     // falsch: kein Basisfall
}
```

Der Compiler meldet keinen Fehler. Beim Ausführen ruft sich `summe` aber immer weiter auf, bei `summe(3)` mit 3, 2,
1, 0, -1, -2 und so fort. Jeder offene Aufruf belegt etwas Speicher im **Aufrufstapel** (mehr dazu in
[10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg)). Nach vielen tausend Aufrufen ist
dieser Speicher voll, und das Programm bricht mit `java.lang.StackOverflowError` ab. Die Reparatur ist der fehlende
Basisfall `if (n == 0) { return 0; }` vor dem Selbstaufruf.
:::

:::achtung[Den Basisfall übersprungen]
Diese Fassung hat einen Basisfall, erreicht ihn aber nicht immer:

```java
public static int summeGerade(int n) {   // soll n + (n - 2) + ... + 2 rechnen
    if (n == 0) {
        return 0;
    }
    return n + summeGerade(n - 2);
}
```

`summeGerade(6)` läuft über 6, 4, 2, 0 und liefert 12. `summeGerade(5)` läuft aber über 5, 3, 1, -1, -3 … und trifft
die 0 nie. Wieder folgt ein `StackOverflowError`. Die Reparatur ist eine Bedingung, die keinen Wert überspringen
kann: `if (n <= 0) { return 0; }`. Prüfe deshalb immer, ob der Fortschritt den Basisfall **treffen muss** oder nur
**treffen kann**.
:::

```aufgabe
id: rk-sa-rf-grundlagen
titel: Aussagen über rekursive Methoden
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Bei jedem Selbstaufruf bekommt die Methode neue, eigene Parameter.
        richtig: true
        erklaerung: Ein Selbstaufruf ist ein gewöhnlicher Aufruf. Jeder Aufruf hat eigene Parameter und lokale Variablen.
      - text: Der Basisfall ist der Fall, in dem sich die Methode selbst aufruft.
        richtig: false
        erklaerung: Im Basisfall ruft sich die Methode gerade **nicht** auf. Dort steht das Ergebnis direkt fest.
      - text: Eine rekursive Methode ohne Basisfall wird vom Compiler abgelehnt.
        richtig: false
        erklaerung: Der Compiler prüft das nicht. Der Fehler zeigt sich erst beim Ausführen als `StackOverflowError`.
      - text: Eine rekursive Methode darf mehr als einen Basisfall haben.
        richtig: true
        erklaerung: Das ist häufig, zum Beispiel „String ist leer“ und „Zeichen gefunden“.
    fehler:
      - wert: [r, r, f, r]
        meldung: Im Basisfall ruft sich die Methode nicht selbst auf. Der Selbstaufruf gehört zum rekursiven Fall.
      - wert: [r, f, r, r]
        meldung: Der Compiler prüft nur, ob der Code formal korrekt ist. Ob die Rekursion endet, merkt er nicht.
hinweise:
  - Denk an `countdown`. Wo steht der Selbstaufruf, wo steht `Start!`?
loesung: |
  **Ansatz:** Jede Aussage mit der Definition vergleichen: Basisfall ohne Selbstaufruf, rekursiver Fall mit Selbstaufruf.
  ---
  Aussage 1 und 4 sind richtig. Jeder Aufruf hat eigene Parameter, und mehrere Basisfälle sind erlaubt.
  ---
  Aussage 2 und 3 sind falsch. Im Basisfall gibt es keinen Selbstaufruf, und ein fehlender Basisfall fällt erst zur Laufzeit auf.
```


```aufgabe
id: rk-sa-rf-terminiert
titel: Welche Aufrufe enden?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Gegeben ist die Methode

  ```java
  public static int f(int n) {
      if (n == 10) {
          return 0;
      }
      return 1 + f(n + 3);
  }
  ```

  Beurteile für jeden Aufruf, ob er ohne `StackOverflowError` endet.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f(4)` endet.'
        richtig: true
        erklaerung: Die Werte sind 4, 7, 10. Bei 10 greift der Basisfall.
      - text: '`f(5)` endet.'
        richtig: false
        erklaerung: Die Werte sind 5, 8, 11, 14 … Die 10 wird übersprungen, die Rekursion endet nie.
      - text: '`f(13)` endet.'
        richtig: false
        erklaerung: Der Fortschritt `n + 3` führt von 13 weg. Die Werte werden nur größer und erreichen 10 nie.
      - text: '`f(-2)` endet und liefert 4.'
        richtig: true
        erklaerung: 'Die Werte sind -2, 1, 4, 7, 10. Das sind 4 Selbstaufrufe, also 1 + 1 + 1 + 1 + 0 = 4.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Es genügt nicht, dass ein Basisfall existiert. Er muss auch getroffen werden. Prüfe, ob die Folge der Werte genau 10 erreicht.
      - wert: [r, f, r, r]
        meldung: Von 13 aus wird `n` mit jedem Aufruf größer. Kann die Folge dann noch auf 10 treffen?
hinweise:
  - Schreib für jeden Aufruf die Folge der Werte von `n` auf. Sie steigt in Dreierschritten.
  - Die Rekursion endet nur, wenn die Folge **genau** den Wert 10 trifft.
loesung: |
  **Ansatz:** Der Basisfall ist `n == 10`, der Fortschritt `n + 3`. Die Rekursion endet genau dann, wenn 10 in der Folge `n, n + 3, n + 6, …` vorkommt.
  ---
  Das gilt, wenn `n ≤ 10` ist und `10 - n` durch 3 teilbar ist. Für 4 und -2 trifft das zu, für 5 und 13 nicht.
  ---
  `f(-2)` läuft über -2, 1, 4, 7 bis 10. Das sind vier rekursive Fälle mit je `1 +`, also Ergebnis 4. Aussagen 1 und 4 sind richtig.
```

```aufgabe
id: rk-sa-code-fakultaet
titel: Die Fakultät rekursiv
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die **Fakultät** von `n` ist das Produkt `1 · 2 · … · n`. Man schreibt sie `n!`. Es gilt `4! = 1 · 2 · 3 · 4 = 24`,
  und nach Vereinbarung ist `0! = 1`.

  Implementiere `long fakultaet(int n)` für `n ≥ 0` **rekursiv** und ohne Schleifen. Der Rückgabetyp ist `long`,
  weil die Werte schnell groß werden (`13!` passt nicht mehr in ein `int`).
teile:
  - typ: code
    vorlage: |
      public class Fakultaet {
          public static long fakultaet(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Fakultaet {
          public static long fakultaet(int n) {
              if (n == 0) {
                  return 1;
              }
              return n * fakultaet(n - 1);
          }
      }
    tests:
      - { aufruf: "fakultaet(4)", erwartet: "24L" }
      - { aufruf: "fakultaet(0)", erwartet: "1L", beschreibung: "Basisfall 0! = 1" }
      - { aufruf: "fakultaet(1)", erwartet: "1L" }
      - { aufruf: "fakultaet(15)", erwartet: "1307674368000L", versteckt: true }
    regeln: { keineSchleifenIn: [fakultaet], rekursiv: [fakultaet], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Was ist `0!`? Nach Vereinbarung 1, nicht 0. Ein Basisfall mit `return 0` macht jedes Produkt zu 0." }
      - { wert: "keineSchleifenIn", meldung: "Die Aufgabe verlangt Rekursion. Ersetze die Schleife durch einen Selbstaufruf mit `n - 1`." }
hinweise:
  - Die Fakultät enthält eine kleinere Fakultät. Es gilt `n! = n · (n - 1)!`.
  - Basisfall ist `n == 0` mit Ergebnis 1. Im rekursiven Fall multiplizierst du `n` mit dem Ergebnis des Selbstaufrufs.
loesung: |
  **Ansatz:** Die Gleichung `n! = n · (n - 1)!` ist schon eine Rekursion. Es fehlt nur der Basisfall `0! = 1`.
  ---
  ```java
  if (n == 0) {
      return 1;
  }
  return n * fakultaet(n - 1);
  ```
  ---
  Fortschritt: `n - 1` wird bei jedem Aufruf kleiner und trifft für jedes `n ≥ 0` die 0.
  ---
  Probe: `fakultaet(4) = 4 · 3 · 2 · 1 · 1 = 24`. Bei `int` statt `long` wäre `15!` übergelaufen.
```

```aufgabe
id: rk-sa-text-abbruch
titel: Warum eine Abbruchbedingung?
niveau: 2
lernziel: 0
kompetenz: begruenden
quelle: Zusatzfrage aus Aufgabenblatt 5, WS 2018 (umformuliert)
angabe: |
  Eine Zusatzfrage im Feedbackgespräch lautet: „Warum benötigen Sie bei einer Rekursion eine Abbruchbedingung,
  und gibt es eine Grenze für die Rekursionstiefe?“ Beantworte beide Teile in drei bis fünf Sätzen.
teile:
  - typ: text
    muster: |
      Ohne Abbruchbedingung (Basisfall) ruft sich die Methode bei jedem Aufruf wieder selbst auf und hört nie von selbst auf.
      Jeder noch nicht beendete Aufruf belegt Speicher im Aufrufstapel, weil Java sich seine Parameter und die
      Rücksprungstelle merken muss. Dieser Speicher ist begrenzt. Darum gibt es eine Grenze für die Rekursionstiefe:
      Sind zu viele Aufrufe gleichzeitig offen, bricht das Programm mit einem StackOverflowError ab. Auch eine
      korrekte Rekursion mit sehr großer Tiefe, etwa summe(1000000), kann daran scheitern.
hinweise:
  - Was muss sich Java für jeden noch nicht beendeten Aufruf merken?
  - Wie heißt der Fehler, wenn zu viele Aufrufe gleichzeitig offen sind?
loesung: |
  **Ansatz:** Zwei Teile beantworten: Was passiert ohne Basisfall, und warum ist die Tiefe begrenzt?
  ---
  Ohne Basisfall folgt auf jeden Aufruf ein weiterer. Die Rekursion endet nie von selbst.
  ---
  Jeder offene Aufruf belegt Platz im Aufrufstapel. Ist er voll, bricht Java mit `StackOverflowError` ab. Diese Grenze gilt auch für korrekte, aber sehr tiefe Rekursionen.
```

```aufgabe
id: rk-sa-code-ungerade
titel: Summe der ungeraden Zahlen bis n
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Implementiere `int summeUngerade(int n)` **rekursiv** und ohne Schleifen. Die Methode liefert die Summe aller
  ungeraden Zahlen von 1 bis `n` (inklusive). Vorbedingung: `n ≥ 0`.

  Beispiele: `summeUngerade(7)` liefert `1 + 3 + 5 + 7 = 16`, `summeUngerade(8)` liefert ebenfalls 16,
  `summeUngerade(0)` liefert 0.

  Achte darauf, dass **jeder** erlaubte Aufruf den Basisfall erreicht, auch gerade Zahlen.
teile:
  - typ: code
    vorlage: |
      public class Ungerade {
          public static int summeUngerade(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ungerade {
          public static int summeUngerade(int n) {
              if (n <= 0) {
                  return 0;
              }
              if (n % 2 == 0) {
                  return summeUngerade(n - 1);
              }
              return n + summeUngerade(n - 2);
          }
      }
    tests:
      - { aufruf: "summeUngerade(7)", erwartet: "16" }
      - { aufruf: "summeUngerade(8)", erwartet: "16", beschreibung: "gerades n" }
      - { aufruf: "summeUngerade(0)", erwartet: "0", beschreibung: "Basisfall" }
      - { aufruf: "summeUngerade(1)", erwartet: "1" }
      - { aufruf: "summeUngerade(100)", erwartet: "2500", versteckt: true }
    regeln: { keineSchleifenIn: [summeUngerade], rekursiv: [summeUngerade], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Bei geraden `n` darf `n` selbst nicht dazugezählt werden. Geh in diesem Fall nur einen Schritt zurück zur nächsten ungeraden Zahl." }
      - { wert: 3, meldung: "Was liefert `summeUngerade(0)`? Bis 0 gibt es keine ungerade Zahl, das Ergebnis ist 0. Prüfe, ob dein Basisfall die 0 abdeckt." }
hinweise:
  - Es gibt drei Fälle. `n` ist höchstens 0, `n` ist gerade, oder `n` ist ungerade.
  - Bei geradem `n` ist das Ergebnis dasselbe wie für `n - 1`. Bei ungeradem `n` zählst du `n` dazu und machst mit `n - 2` weiter.
loesung: |
  **Ansatz:** Basisfall `n <= 0` mit Ergebnis 0. Er fängt auch -1 ab, falls ein Schritt die 0 überspringt.
  ---
  Ist `n` gerade, gehört es nicht zur Summe: `return summeUngerade(n - 1);`. Ist `n` ungerade, gehört es dazu: `return n + summeUngerade(n - 2);`.
  ---
  ```java
  if (n <= 0) {
      return 0;
  }
  if (n % 2 == 0) {
      return summeUngerade(n - 1);
  }
  return n + summeUngerade(n - 2);
  ```
  ---
  Probe: `summeUngerade(8)` geht zu `summeUngerade(7) = 7 + 5 + 3 + 1 + summeUngerade(-1) = 16 + 0 = 16`.
```

```reflexion
frage: Warum ist es beim Schreiben einer Rekursion erlaubt, dem Selbstaufruf einfach zu „vertrauen“? Was muss dafür gelten?
antwort: |
  Der Selbstaufruf löst dieselbe Aufgabe für eine kleinere Eingabe. Wenn die Methode für den Basisfall stimmt und
  jeder rekursive Fall aus einem richtigen kleineren Ergebnis ein richtiges größeres macht, dann stimmt sie für
  alle Eingaben: erst für den Basisfall, dann für den nächstgrößeren Fall, dann für den nächsten und so weiter.
  Dafür müssen zwei Dinge gelten. Der Basisfall muss richtig sein, und jeder Aufruf muss ihn über den Fortschritt
  tatsächlich erreichen. Fehlt eines davon, ist das Vertrauen nicht gerechtfertigt.
```

## Der Aufrufstapel: Hinweg und Rückweg

```aufgabe
id: rk-st-check-lokal
titel: Eine lokale Variable beginnt immer neu
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? Lokale Variablen kennst du aus
  [6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen).
teile:
  - typ: ausgabe
    code: |
      public class Neu {
          public static void zaehle() {
              int z = 0;
              z++;
              System.out.println(z);
          }

          public static void main(String[] args) {
              zaehle();
              zaehle();
          }
      }
    loesung: |
      1
      1
    fehler:
      - wert: "1\n2"
        meldung: '`z` ist eine lokale Variable. Sie wird bei jedem Aufruf neu angelegt und mit 0 belegt. Am Ende des Aufrufs verschwindet sie wieder.'
loesung: |
  Jeder Aufruf von `zaehle` legt ein neues `z` mit dem Wert 0 an und erhöht es auf 1.
  ---
  Der zweite Aufruf weiß nichts vom ersten. Beide geben `1` aus.
```

Diese Eigenschaft ist für Rekursion entscheidend: Jeder Aufruf hat **seine eigenen** Parameter und lokalen
Variablen. Bei `summe(3)` gibt es irgendwann gleichzeitig ein `n` mit Wert 3, eines mit Wert 2, eines mit Wert 1 und
eines mit Wert 0. Wie behält Java da den Überblick?

Java verwaltet alle laufenden Aufrufe in einem **Stapel**. Stell dir einen Stapel Teller vor. Ein neuer Teller kommt
immer oben drauf, und weggenommen wird immer der oberste. Bei jedem Methodenaufruf legt Java einen neuen „Teller“
oben auf. Darauf steht, welche Methode läuft, welche Werte ihre Parameter und lokalen Variablen haben und wohin
nach dem Ende zurückgesprungen wird. Ist die Methode fertig, nimmt Java diesen Teller wieder weg. Darunter liegt der
Aufruf, der gewartet hat, und der macht weiter.

:::definition[Aufrufstapel, Rahmen, Rekursionstiefe]
Der **Aufrufstapel** (englisch *call stack*) enthält für jeden Aufruf, der begonnen hat und noch nicht beendet ist,
einen **Rahmen** (englisch *frame*). Ein Rahmen speichert die Parameter, die lokalen Variablen und die
Rücksprungstelle dieses Aufrufs. Nur der oberste Rahmen läuft gerade, alle darunter warten.

Die **Rekursionstiefe** einer Rekursion ist die größte Anzahl von Rahmen derselben Methode, die gleichzeitig auf dem
Stapel liegen.
:::

**Beispiel:** Während `summe(0)` läuft, liegen die Rahmen von `main`, `summe(3)`, `summe(2)`, `summe(1)` und
`summe(0)` auf dem Stapel. Die Rekursionstiefe von `summe(3)` ist 4.

**Kein Beispiel:** Der Stapel ist **kein Protokoll** aller bisherigen Aufrufe. Wenn `main` zweimal hintereinander
`summe(3)` aufruft, liegen nie acht Rahmen von `summe` gleichzeitig auf dem Stapel. Der erste Aufruf ist komplett
fertig und abgeräumt, bevor der zweite beginnt.

:::beispiel[Der Stapel von summe(3) Schritt für Schritt]
Wir verwenden die Methode aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf):

```java
public static int summe(int n) {
    if (n == 0) {
        return 0;
    }
    return n + summe(n - 1);
}
```

`main` ruft `System.out.println(summe(3));` auf. So sieht der Stapel im tiefsten Moment aus, also während `summe(0)`
läuft. Oben liegt der neueste Rahmen:

```
   +------------------------+
   | summe   n = 0          |  <- läuft gerade: Basisfall, liefert 0
   +------------------------+
   | summe   n = 1          |  wartet auf summe(0), will 1 + ... rechnen
   +------------------------+
   | summe   n = 2          |  wartet auf summe(1), will 2 + ... rechnen
   +------------------------+
   | summe   n = 3          |  wartet auf summe(2), will 3 + ... rechnen
   +------------------------+
   | main                   |  wartet auf summe(3), will das Ergebnis ausgeben
   +------------------------+
```

Der ganze Ablauf in zwei Phasen:

1. **Hinweg:** `summe(3)` ruft `summe(2)` auf, `summe(2)` ruft `summe(1)` auf, `summe(1)` ruft `summe(0)` auf. Mit jedem Aufruf kommt ein Rahmen dazu. Noch ist keine einzige Addition ausgeführt.
2. `summe(0)` ist der Basisfall. Er liefert 0, und sein Rahmen wird entfernt.
3. **Rückweg:** Der Rahmen mit `n = 1` ist wieder oben. Er rechnet `1 + 0 = 1`, liefert 1 und wird entfernt.
4. Der Rahmen mit `n = 2` rechnet `2 + 1 = 3`. Danach rechnet der Rahmen mit `n = 3` den Wert `3 + 3 = 6`.
5. `main` bekommt 6 und gibt es aus.

Es gab vier Aufrufe von `summe` (mit 3, 2, 1 und 0). Die Rekursionstiefe ist ebenfalls 4.
:::

Bei Methoden mit genau einem Selbstaufruf wie `summe` ist die Rekursionstiefe gleich der Anzahl der Aufrufe. Jeder
Aufruf wartet auf genau einen weiteren. In Kapitel 11 kommen Methoden mit zwei Selbstaufrufen vor. Dort ist die
Anzahl der Aufrufe viel größer als die Tiefe.

```aufgabe
id: rk-st-gefuehrt
titel: Zweierpotenzen auf dem Stapel
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int zweiHoch(int n) {
      if (n == 0) {
          return 1;
      }
      return 2 * zweiHoch(n - 1);
  }
  ```

  Welchen Wert liefert `zweiHoch(3)`? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "2^3"
    fehler:
      - wert: "6"
        meldung: Im rekursiven Fall steht `2 * zweiHoch(n - 1)`, also eine Multiplikation mit dem Ergebnis des Selbstaufrufs, nicht `2 * n`.
      - wert: "4"
        meldung: Du hast einen Aufruf zu wenig gerechnet. `zweiHoch(3)` ruft `zweiHoch(2)`, `zweiHoch(1)` und `zweiHoch(0)` auf.
gefuehrt:
  - text: Wie viele Rahmen von `zweiHoch` liegen im tiefsten Moment gleichzeitig auf dem Stapel?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Die Aufrufe mit 3, 2, 1 und 0 warten alle gleichzeitig, bis `zweiHoch(0)` fertig ist.
  - text: Welchen Wert liefert der oberste Rahmen, also `zweiHoch(0)`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Das ist der Basisfall. Er liefert 1 ohne Selbstaufruf.
  - text: Welchen Wert liefert `zweiHoch(1)` auf dem Rückweg?
    teil: { typ: zahl, loesung: "2*1" }
    erklaerung: '`2 * zweiHoch(0) = 2 * 1 = 2`.'
  - text: Und `zweiHoch(2)`?
    teil: { typ: zahl, loesung: "2*2" }
    erklaerung: '`2 * zweiHoch(1) = 2 * 2 = 4`. Der letzte Schritt verdoppelt noch einmal.'
hinweise:
  - Auf dem Hinweg wird nichts gerechnet. Rechne auf dem Rückweg, beginnend beim Basisfall.
loesung: |
  **Ansatz:** Hinweg bis zum Basisfall, dann auf dem Rückweg jeden wartenden Rahmen fertig rechnen.
  ---
  Rückweg: `zweiHoch(0) = 1`, `zweiHoch(1) = 2`, `zweiHoch(2) = 4`, `zweiHoch(3) = 2 · 4 = 8`. Probe: `2³ = 8`.
```

Nun zur Ausgabe. Eine Anweisung **vor** dem Selbstaufruf läuft auf dem Hinweg. Eine Anweisung **nach** dem
Selbstaufruf läuft erst, wenn der Selbstaufruf ganz fertig ist, also auf dem Rückweg. Daraus folgt eine Regel, die
du für fast jede Ausgabe-Frage zu Rekursion brauchst.

:::beispiel[Ausgaben vor und nach dem Selbstaufruf]
```java
public class VorNach {
    public static void f(int n) {
        if (n == 0) {
            System.out.println("Basis");
            return;
        }
        System.out.println("vor " + n);
        f(n - 1);
        System.out.println("nach " + n);
    }

    public static void main(String[] args) {
        f(3);
    }
}
```

`return;` ohne Wert beendet eine `void`-Methode sofort. Der Rest des Rumpfs wird dann übersprungen.

1. Hinweg: `f(3)` gibt `vor 3` aus und ruft `f(2)` auf. Die Zeile `nach 3` muss warten.
2. `f(2)` gibt `vor 2` aus, `f(1)` gibt `vor 1` aus. Beide warten mit ihrem `nach`.
3. `f(0)` ist der Basisfall und gibt `Basis` aus.
4. Rückweg: Zuerst wird der zuletzt begonnene Aufruf fertig, also `f(1)`. Er gibt `nach 1` aus.
5. Dann `f(2)` mit `nach 2` und zuletzt `f(3)` mit `nach 3`.

Die Ausgabe ist:

```
vor 3
vor 2
vor 1
Basis
nach 1
nach 2
nach 3
```
:::

:::merke[Die Reihenfolge von Ausgaben in einer Rekursion]
1. Ausgaben **vor** dem Selbstaufruf erscheinen in der Reihenfolge der Aufrufe, also auf dem Hinweg (bei `f(3)` mit Selbstaufruf `f(n - 1)`: 3, 2, 1).
2. Ausgaben **nach** dem Selbstaufruf erscheinen in umgekehrter Reihenfolge, also auf dem Rückweg (bei `f(3)`: 1, 2, 3).
3. Die Ausgabe des Basisfalls steht genau dazwischen.
4. Anzahl der Aufrufe bei einem Selbstaufruf mit `n - 1` von `n` bis zum Basisfall 0: genau `n + 1`. Der Aufruf des Basisfalls zählt mit.
:::

```aufgabe
id: rk-st-reihenfolge
titel: Klammern auf dem Hin- und Rückweg
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static void k(int n) {
      if (n == 0) {
          System.out.println("Mitte");
          return;
      }
      System.out.println("auf " + n);
      k(n - 1);
      System.out.println("zu " + n);
  }
  ```

  Bringe die Ausgaben von `k(2)` in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente: ["`auf 2`", "`auf 1`", "`Mitte`", "`zu 1`", "`zu 2`"]
    fehler:
      - wert: [0, 1, 2, 4, 3]
        meldung: Auf dem Rückweg wird zuerst der zuletzt begonnene Aufruf fertig. Das ist `k(1)`, also kommt `zu 1` vor `zu 2`.
      - wert: [0, 4, 1, 3, 2]
        meldung: Die Zeile `zu 2` kommt erst, wenn der Selbstaufruf `k(1)` ganz fertig ist, mit allem, was er selbst ausgibt.
hinweise:
  - Was vor dem Selbstaufruf steht, kommt auf dem Hinweg. Was danach steht, kommt auf dem Rückweg in umgekehrter Reihenfolge.
loesung: |
  **Ansatz:** Hinweg mit den `auf`-Zeilen, dann der Basisfall, dann der Rückweg mit den `zu`-Zeilen.
  ---
  Hinweg: `auf 2`, `auf 1`. Basisfall `k(0)`: `Mitte`. Rückweg: `zu 1`, dann `zu 2`.
```

```aufgabe
id: rk-st-ausgabe-aufsteigend
titel: Die Ausgabe steht hinter dem Aufruf
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Hoch {
          public static void hoch(int n) {
              if (n == 0) {
                  return;
              }
              hoch(n - 1);
              System.out.println(n);
          }

          public static void main(String[] args) {
              hoch(4);
          }
      }
    loesung: |
      1
      2
      3
      4
    fehler:
      - wert: "4\n3\n2\n1"
        meldung: Die Ausgabe steht **hinter** dem Selbstaufruf. Sie läuft erst auf dem Rückweg, und dort wird zuerst `hoch(1)` fertig.
      - wert: "0\n1\n2\n3\n4"
        meldung: Der Basisfall `n == 0` beendet die Methode mit `return;`, bevor eine Ausgabe kommt. Die 0 erscheint nicht.
hinweise:
  - Welcher Aufruf von `hoch` wird als erster fertig und erreicht damit als erster das `println`?
loesung: |
  **Ansatz:** Das `println` steht nach dem Selbstaufruf. Es läuft also erst auf dem Rückweg.
  ---
  Hinweg: `hoch(4)`, `hoch(3)`, `hoch(2)`, `hoch(1)`, `hoch(0)`. Der Basisfall gibt nichts aus.
  ---
  Rückweg: `hoch(1)` gibt 1 aus, dann `hoch(2)` die 2 und so weiter bis 4. Ohne Schleife entsteht eine aufsteigende Folge.
```

:::achtung[Das Ergebnis des Selbstaufrufs weggeworfen]
Eine typische falsche Fassung der Summe aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) ist

```java
public static int summe(int n) {
    if (n == 0) {
        return 0;
    }
    summe(n - 1);        // falsch: das Ergebnis wird nicht verwendet
    return n;
}
```

Der Selbstaufruf läuft zwar, aber sein Rückgabewert verschwindet. `summe(4)` liefert deshalb 4 statt 10. Der
Rückgabewert eines Aufrufs geht verloren, wenn man ihn weder speichert noch weiterrechnet. Richtig ist
`return n + summe(n - 1);` oder in zwei Schritten `int rest = summe(n - 1); return n + rest;`.
:::

:::achtung[Den Aufruf des Basisfalls nicht mitgezählt]
Eine typische Frage lautet: „Wie oft wird `summe` bei `summe(4)` aufgerufen?“ Eine typische falsche Rechnung ist
„4 bis 1, also 4 Aufrufe“. Gezählt werden aber **alle** Aufrufe, auch der erste aus `main` und der Aufruf, der im
Basisfall landet. Die Aufrufe sind `summe(4)`, `summe(3)`, `summe(2)`, `summe(1)` und `summe(0)`, also 5. Schreib die
Argumente am besten der Reihe nach auf und zähle dann, statt im Kopf zu rechnen.
:::

```aufgabe
id: rk-st-trace-binaer
titel: Rückgabewerte in einer Tabelle
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int q(int n) {
      if (n == 0) {
          return 0;
      }
      return q(n / 2) + n % 2;
  }
  ```

  `main` ruft `q(13)` auf. Trage für jeden Aufruf das Argument `n` und den Rückgabewert ein. Die erste Zeile ist der
  Aufruf aus `main`, die letzte der Basisfall.
teile:
  - typ: trace
    spalten: [n, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf, 5. Aufruf]
    loesung: [[13, 3], [6, 2], [3, 2], [1, 1], [0, 0]]
    fehler:
      - wert: ["13", "1", "6", "0", "3", "1", "1", "1", "0", "0"]
        meldung: Das ist nur der eigene Beitrag `n % 2` jedes Aufrufs. Der Rückgabewert ist dieser Beitrag **plus** der Rückgabewert des Selbstaufrufs darunter.
      - wert: ["13", "3", "6.5", "2", "3.25", "2", "1.625", "1", "0", "0"]
        meldung: '`n / 2` ist eine Ganzzahldivision. `13 / 2` ist 6, nicht 6,5.'
hinweise:
  - Fülle zuerst die Spalte `n` von oben nach unten aus. `n / 2` rundet zur Null hin ab.
  - Fülle die Spalte Rückgabewert von unten nach oben. Jede Zeile ist der Wert der Zeile darunter plus `n % 2`.
loesung: |
  **Ansatz:** Hinweg: Argumente bestimmen. Rückweg: Rückgabewerte von unten nach oben ausrechnen.
  ---
  Argumente: 13, `13 / 2 = 6`, `6 / 2 = 3`, `3 / 2 = 1`, `1 / 2 = 0`.
  ---
  Rückgabewerte von unten nach oben: `q(0) = 0`, `q(1) = 0 + 1 = 1` und `q(3) = 1 + 1 = 2`. Danach folgen `q(6) = 2 + 0 = 2` und `q(13) = 2 + 1 = 3`.
  ---
  Deutung: `q` zählt die Einsen in der Binärdarstellung, also in der Schreibweise mit nur den Ziffern 0 und 1 (Zweiersystem). Wegen `13 = 8 + 4 + 1` ist 13 binär `1101` und hat drei Einsen.
```

```aufgabe
id: rk-st-anzahl-aufrufe
titel: Wie oft wird g aufgerufen?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int g(int n) {
      if (n <= 1) {
          return n;
      }
      return g(n - 3) + 1;
  }
  ```

  Wie oft wird `g` beim Aufruf `g(20)` insgesamt aufgerufen? Der Aufruf aus `main` zählt mit.
teile:
  - typ: zahl
    loesung: "8"
    fehler:
      - wert: "7"
        meldung: Der letzte Aufruf `g(-1)` landet im Basisfall. Er ist trotzdem ein Aufruf und zählt mit.
      - wert: "6"
        meldung: Schreib alle Argumente auf. Es sind 20, 17, 14, 11, 8, 5, 2 und -1.
      - wert: "20"
        meldung: Der Fortschritt ist `n - 3`, nicht `n - 1`. Es wird in Dreierschritten gezählt.
hinweise:
  - Schreib die Argumente untereinander, bis eines `n <= 1` erfüllt.
  - Zähle danach die Zeilen. Der erste und der letzte Aufruf gehören dazu.
loesung: |
  **Ansatz:** Argumentfolge aufschreiben, bis der Basisfall greift, und dann zählen.
  ---
  Argumente: 20, 17, 14, 11, 8, 5, 2, -1. Erst bei -1 gilt `n <= 1`. Die 2 erfüllt die Bedingung noch nicht.
  ---
  Das sind 8 Aufrufe. Probe: Von 20 bis 2 sind es `(20 - 2) / 3 + 1 = 7` Werte, dazu kommt der Basisfall mit -1.
```

```aufgabe
id: rk-st-ausgabe-klammern
titel: Ein Muster aus Hin- und Rückweg
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Klammern {
          public static void m(int n) {
              if (n == 0) {
                  System.out.print("|");
                  return;
              }
              System.out.print("<" + n);
              m(n - 1);
              System.out.print(n + ">");
          }

          public static void main(String[] args) {
              m(3);
              System.out.println();
          }
      }
    loesung: |
      <3<2<1|1>2>3>
    fehler:
      - wert: "<3<2<1|3>2>1>"
        meldung: Auf dem Rückweg wird zuerst der zuletzt begonnene Aufruf fertig. Das ist `m(1)`, also kommt `1>` zuerst.
      - wert: "<3|3><2|2><1|1>"
        meldung: Der Rest des Rumpfs von `m(3)` läuft erst, wenn `m(2)` vollständig fertig ist, mit allen seinen eigenen Ausgaben.
hinweise:
  - Alles steht in einer Zeile, denn `print` setzt keinen Zeilenumbruch.
  - Hinweg mit `<n`, Basisfall mit `|`, Rückweg mit `n>` in umgekehrter Reihenfolge.
loesung: |
  **Ansatz:** Ausgaben vor dem Selbstaufruf kommen auf dem Hinweg, Ausgaben danach auf dem Rückweg.
  ---
  Hinweg: `<3`, `<2`, `<1`. Basisfall `m(0)`: `|`.
  ---
  Rückweg: `1>`, `2>`, `3>`. Zusammen `<3<2<1|1>2>3>`. Das `println()` in `main` beendet die Zeile.
```

```aufgabe
id: rk-st-lueckentext-auf
titel: Aufsteigend ausgeben ohne zweiten Parameter
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Methode soll die Zahlen von 1 bis `n` **aufsteigend**, je eine pro Zeile, ausgeben. Sie hat nur den einen
  Parameter `n`. Fülle die beiden Lücken. Jede Lücke ist eine ganze Anweisung.
teile:
  - typ: lueckentext
    code: |
      public static void zeigeAuf(int n) {
          if (n < 1) {
              return;
          }
          ___
          ___
      }
    luecken: [["zeigeAuf(n - 1);", "zeigeAuf(n-1);"], ["System.out.println(n);"]]
    kompilieren: false
    fehler:
      - wert: ["System.out.println(n);", "zeigeAuf(n - 1);"]
        meldung: So läuft die Ausgabe auf dem Hinweg, und die Zahlen erscheinen absteigend. Für aufsteigend muss die Ausgabe auf dem Rückweg stehen.
      - wert: ["zeigeAuf(n);", "System.out.println(n);"]
        meldung: '`zeigeAuf(n)` hat keinen Fortschritt. Die Methode ruft sich mit demselben Wert immer wieder auf.'
hinweise:
  - Bei `n = 3` soll zuerst 1 erscheinen. Welcher Aufruf gibt die 1 aus, und wann ist er fertig?
  - Die Ausgabe muss auf dem Rückweg passieren, also hinter dem Selbstaufruf stehen.
loesung: |
  **Ansatz:** Nur der Ort der Ausgabe bestimmt die Reihenfolge. Hinter dem Selbstaufruf kommt sie auf dem Rückweg.
  ---
  ```java
  zeigeAuf(n - 1);
  System.out.println(n);
  ```
  ---
  Probe mit `n = 3`: Hinweg 3, 2, 1, 0 ohne Ausgabe. Rückweg gibt 1, 2, 3 aus.
```

```aufgabe
id: rk-st-rf-stapel
titel: Aussagen zum Aufrufstapel
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist die Methode `summe` mit Basisfall `n == 0` und Selbstaufruf `n + summe(n - 1)`. `main` ruft
  `summe(5)` auf. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Während `summe(0)` läuft, liegen sechs Rahmen von `summe` auf dem Stapel.
        richtig: true
        erklaerung: Die Rahmen für 5, 4, 3, 2, 1 und 0 liegen gleichzeitig dort.
      - text: Die erste Addition wird im Rahmen mit `n = 5` ausgeführt.
        richtig: false
        erklaerung: Der Rahmen mit `n = 5` wartet am längsten. Die erste Addition rechnet der Rahmen mit `n = 1`, nachdem `summe(0)` geliefert hat.
      - text: Alle sechs Rahmen haben eine gemeinsame Variable `n`, die bei jedem Aufruf um 1 kleiner wird.
        richtig: false
        erklaerung: Jeder Rahmen hat ein eigenes `n`. Der Rahmen mit `n = 5` behält seine 5 bis zum Ende.
      - text: Nach dem Ende von `summe(5)` liegt kein Rahmen von `summe` mehr auf dem Stapel.
        richtig: true
        erklaerung: Jeder beendete Aufruf wird entfernt. Übrig ist nur `main`.
    fehler:
      - wert: [r, r, f, r]
        meldung: Auf dem Hinweg wird noch nichts addiert. Jeder Rahmen wartet auf seinen Selbstaufruf. Wer wird zuerst fertig?
      - wert: [r, f, r, r]
        meldung: Wäre `n` gemeinsam, wüsste der Rahmen von `summe(5)` am Ende nicht mehr, dass er 5 addieren muss.
hinweise:
  - Zeichne den Stapel im tiefsten Moment. Wie viele Rahmen sind es, und welcher wird zuerst fertig?
  - Jeder Aufruf hat eigene Parameter.
loesung: |
  **Ansatz:** Den Stapel im tiefsten Moment zeichnen und den Rückweg verfolgen.
  ---
  Im tiefsten Moment liegen die Rahmen für 5, 4, 3, 2, 1 und 0 übereinander. Aussage 1 stimmt.
  ---
  Die erste Addition passiert auf dem Rückweg im Rahmen mit `n = 1`. Jeder Rahmen hat sein eigenes `n`. Aussage 2 und 3 sind falsch.
  ---
  Am Ende ist jeder Rahmen von `summe` entfernt. Aussage 4 stimmt.
```

```aufgabe
id: rk-st-ausgabe-mitrueckgabe
titel: Ausgaben und Rückgabewert gemischt
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: Was gibt das Programm aus? Achte auf jede einzelne Zeile.
teile:
  - typ: ausgabe
    code: |
      public class Gemischt {
          public static int f(int n) {
              if (n == 0) {
                  System.out.println("B");
                  return 0;
              }
              System.out.println("a" + n);
              int r = f(n - 1) + n;
              System.out.println("z" + r);
              return r;
          }

          public static void main(String[] args) {
              System.out.println(f(3));
          }
      }
    loesung: |
      a3
      a2
      a1
      B
      z1
      z3
      z6
      6
    fehler:
      - wert: "6\na3\na2\na1\nB\nz1\nz3\nz6"
        meldung: '`println(f(3))` muss zuerst `f(3)` vollständig ausführen. Alle Ausgaben in `f` erscheinen vor dem Rückgabewert.'
      - wert: "a3\na2\na1\nB\nz6\nz3\nz1\n6"
        meldung: Die `z`-Zeilen stehen nach dem Selbstaufruf. Zuerst wird der innerste Aufruf `f(1)` fertig, und er hat `r = 0 + 1 = 1`.
      - wert: "a3\na2\na1\nB\nz1\nz2\nz3\n6"
        meldung: '`r` ist nicht `n`, sondern `f(n - 1) + n`. Bei `n = 2` ist `r = 1 + 2 = 3`.'
hinweise:
  - Die Zeilen mit `a` kommen auf dem Hinweg, die Zeilen mit `z` auf dem Rückweg.
  - '`r` ist der Rückgabewert des Selbstaufrufs plus `n`. Rechne ihn für `n = 1`, dann für 2, dann für 3.'
loesung: |
  **Ansatz:** Hinweg, Basisfall und Rückweg trennen. Auf dem Rückweg zusätzlich die Werte von `r` ausrechnen.
  ---
  Hinweg: `a3`, `a2`, `a1`. Basisfall `f(0)`: `B`, Rückgabe 0.
  ---
  Rückweg: In `f(1)` ist `r = 0 + 1 = 1`, Ausgabe `z1`. In `f(2)` ist `r = 1 + 2 = 3`, Ausgabe `z3`. In `f(3)` ist `r = 3 + 3 = 6`, Ausgabe `z6`.
  ---
  Erst danach druckt `main` den Rückgabewert 6. Kontrolle: acht Zeilen, die letzte ist die Summe `1 + 2 + 3`.
```

```reflexion
frage: Warum erscheinen Ausgaben, die hinter dem Selbstaufruf stehen, in umgekehrter Reihenfolge? Erkläre es mit dem Bild des Tellerstapels.
antwort: |
  Jeder Aufruf legt einen Teller auf den Stapel und wartet beim Selbstaufruf. Der zuletzt aufgelegte Teller gehört
  zum zuletzt begonnenen Aufruf, und nur der oberste Teller kann weitermachen. Also wird der zuletzt begonnene Aufruf
  als erster fertig und erreicht als erster die Anweisung hinter dem Selbstaufruf. Danach ist der Teller darunter dran.
  Die Aufrufe werden in umgekehrter Reihenfolge fertig, wie sie begonnen haben. Darum erscheinen auch ihre späten
  Ausgaben umgekehrt.
```

## Rekursion mit ganzen Zahlen

```aufgabe
id: rk-za-check-intervall
titel: Ein Intervall mit einer Schleife
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? Intervallgrenzen kennst du aus
  [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
teile:
  - typ: ausgabe
    code: |
      for (int i = 4; i <= 11; i++) {
          if (i % 3 == 0) {
              System.out.println(i);
          }
      }
    loesung: |
      6
      9
    fehler:
      - wert: "6\n9\n12"
        meldung: Die Schleife läuft nur bis `i = 11`, denn bei `i = 12` ist `12 <= 11` falsch.
      - wert: "3\n6\n9"
        meldung: Die Schleife beginnt bei 4. Die 3 liegt außerhalb des Intervalls.
loesung: |
  `i` läuft von 4 bis 11. Durch 3 teilbar sind darin nur 6 und 9.
  ---
  Ausgabe: `6` und `9`, je in einer eigenen Zeile.
```

Auf den Aufgabenblättern kommen zwei Arten von Zahlen-Rekursion immer wieder vor. Bei der ersten Art läuft die
Rekursion über ein **Intervall** von Zahlen, etwa „gib alle ungeraden Zahlen von `start` bis `end` aus“. Bei der
zweiten Art läuft sie über die **Ziffern** einer Zahl, etwa „zähle alle Ziffern größer als 5“. Beide folgen festen
Mustern. Wenn du die Muster kennst, sind diese Aufgaben Routine.

### Rekursion über ein Intervall

Eine Schleife über ein Intervall hat eine Laufvariable, die bei `start` beginnt und bei jedem Durchlauf um 1 wächst.
Bei der Rekursion übernimmt der **Parameter** diese Rolle. Statt `i++` ruft sich die Methode mit `start + 1` auf.
Die Schleifenbedingung `i <= end` wird zum Gegenteil im Basisfall: Ist `start > end`, ist das Intervall leer und es
gibt nichts mehr zu tun.

:::beispiel[Alle Zahlen eines Intervalls aufsteigend und absteigend]
```java
public class Intervall {
    public static void aufsteigend(int start, int end) {
        if (start > end) {
            return;
        }
        System.out.println(start);
        aufsteigend(start + 1, end);
    }

    public static void absteigend(int start, int end) {
        if (start > end) {
            return;
        }
        System.out.println(end);
        absteigend(start, end - 1);
    }

    public static void main(String[] args) {
        aufsteigend(3, 5);
        absteigend(3, 5);
    }
}
```

- In `aufsteigend` ist `start > end` der Basisfall: Das Intervall `[start, end]` ist leer. `return;` beendet den Aufruf ohne Ausgabe.
- Sonst gibt die Methode die **kleinste** Zahl `start` aus. Danach kümmert sich der Selbstaufruf um den Rest `[start + 1, end]`.
- `absteigend` gibt zuerst die **größte** Zahl `end` aus. Der Rest `[start, end - 1]` folgt im Selbstaufruf.

Ablauf von `aufsteigend(3, 5)`: Ausgabe 3, Aufruf mit (4, 5), Ausgabe 4, Aufruf mit (5, 5), Ausgabe 5, Aufruf mit
(6, 5). Dort ist `6 > 5`, also Basisfall. Ablauf von `absteigend(3, 5)`: Ausgabe 5, 4, 3, dann der Aufruf mit (3, 2)
als Basisfall. Die Ausgabe ist `3 4 5 5 4 3`, je eine Zahl pro Zeile.
:::

Eine dritte Möglichkeit kennst du aus [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg).
Man lässt `aufsteigend` unverändert laufen, setzt aber das `println` **hinter** den Selbstaufruf. Dann erscheinen
die Zahlen auf dem Rückweg, also absteigend. Alle drei Varianten liefern die richtige Ausgabe.

Soll nur ein Teil der Zahlen erscheinen, etwa die ungeraden, kommt eine Bedingung um die Ausgabe. Der Selbstaufruf
steht dann **außerhalb** dieser Bedingung, denn auch nach einer geraden Zahl muss es weitergehen.

```aufgabe
id: rk-za-ausgabe-teiler
titel: Nur die Vielfachen ausgeben
niveau: 1
lernziel: 3
kompetenz: verstehen
quelle: Aufgabenblatt 3, WS 2021, Aufgabe 3 (printNumbersAscending, nachgebaut)
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Vielfache {
          public static void vielfache(int start, int end, int teiler) {
              if (start > end) {
                  return;
              }
              if (start % teiler == 0) {
                  System.out.println(start);
              }
              vielfache(start + 1, end, teiler);
          }

          public static void main(String[] args) {
              vielfache(5, 20, 4);
          }
      }
    loesung: |
      8
      12
      16
      20
    fehler:
      - wert: "8\n12\n16"
        meldung: Das Intervall ist geschlossen. Bei `start = 20` ist `20 > 20` falsch, also wird die 20 noch geprüft und ausgegeben.
      - wert: "4\n8\n12\n16\n20"
        meldung: Das Intervall beginnt bei 5. Die 4 liegt nicht darin.
hinweise:
  - Der Selbstaufruf steht außerhalb des `if`. Er passiert also für jede Zahl von 5 bis 20.
loesung: |
  **Ansatz:** `start` läuft von 5 bis 20. Ausgegeben werden nur Zahlen mit `start % 4 == 0`.
  ---
  Durch 4 teilbar sind 8, 12, 16 und 20. Bei `start = 21` greift der Basisfall.
```

:::achtung[Die letzte Zahl des Intervalls fehlt]
Diese Fassung soll das Intervall `[start, end]` ausgeben:

```java
public static void zeige(int start, int end) {
    if (start == end) {      // falsch: end gehört noch dazu
        return;
    }
    System.out.println(start);
    zeige(start + 1, end);
}
```

`zeige(3, 6)` gibt nur 3, 4 und 5 aus. Beim Aufruf mit (6, 6) endet die Methode, bevor sie 6 ausgibt. Außerdem
endet `zeige(7, 6)` nie, weil `start` an `end` vorbeiläuft. Richtig ist der Basisfall `start > end`. Er bedeutet
„Intervall leer“ und fängt beides ab.
:::

```aufgabe
id: rk-za-code-gerade
titel: Gerade Zahlen aufsteigend
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2023, Aufgabe 3 (printOddNumbersAscending, umformuliert)
angabe: |
  Implementiere `void druckeGeradeAufsteigend(int start, int end)` **rekursiv** und ohne Schleifen. Die Methode gibt
  alle **geraden** Zahlen im Intervall `[start, end]` aufsteigend aus, jede in einer eigenen Zeile.
  Vorbedingung: `start ≤ end`, beide Zahlen sind nicht negativ.

  Beispiel: `druckeGeradeAufsteigend(3, 10)` gibt `4`, `6`, `8` und `10` aus, je in einer Zeile.
teile:
  - typ: code
    vorlage: |
      public class GeradeZahlen {
          public static void druckeGeradeAufsteigend(int start, int end) {
              // TODO
          }
      }
    musterloesung: |
      public class GeradeZahlen {
          public static void druckeGeradeAufsteigend(int start, int end) {
              if (start > end) {
                  return;
              }
              if (start % 2 == 0) {
                  System.out.println(start);
              }
              druckeGeradeAufsteigend(start + 1, end);
          }
      }
    tests:
      - { aufruf: "druckeGeradeAufsteigend(3, 10)", stdout: "4\n6\n8\n10\n" }
      - { aufruf: "druckeGeradeAufsteigend(4, 4)", stdout: "4\n", beschreibung: "Intervall mit einer geraden Zahl" }
      - { aufruf: "druckeGeradeAufsteigend(7, 7)", stdout: "", beschreibung: "Intervall ohne gerade Zahl" }
      - { aufruf: "druckeGeradeAufsteigend(0, 5)", stdout: "0\n2\n4\n", versteckt: true }
    regeln: { keineSchleifenIn: [druckeGeradeAufsteigend], rekursiv: [druckeGeradeAufsteigend], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Kommt die 10 vor? Das Intervall ist geschlossen. Dein Basisfall muss `start > end` lauten, nicht `start == end`." }
      - { wert: 3, meldung: "Bei `[7, 7]` gibt es keine gerade Zahl. Prüfe, ob du jede Zahl vor der Ausgabe auf `% 2 == 0` testest." }
      - { wert: "keineSchleifenIn", meldung: "Die Laufvariable der Schleife wird zum Parameter `start`. Statt `start++` rufst du dich mit `start + 1` auf." }
hinweise:
  - Basisfall ist das leere Intervall, also `start > end`.
  - Gib `start` nur aus, wenn es gerade ist. Der Selbstaufruf mit `start + 1` kommt in jedem Fall.
loesung: |
  **Ansatz:** Das Intervallmuster mit einer Bedingung um die Ausgabe. Fortschritt ist `start + 1`.
  ---
  ```java
  if (start > end) {
      return;
  }
  if (start % 2 == 0) {
      System.out.println(start);
  }
  druckeGeradeAufsteigend(start + 1, end);
  ```
  ---
  Variante: Ist `start` gerade, kann man mit `start + 2` weitermachen. Dann muss man aber den ungeraden Fall getrennt behandeln.
  ---
  Probe mit `(3, 10)`: 3 nein, 4 ja, 5 nein, 6 ja, …, 10 ja, dann `11 > 10`. Ausgabe 4, 6, 8, 10.
```

```aufgabe
id: rk-za-ausgabe-absteigend
titel: Absteigend und ohne Vielfache
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Aufgabenblatt 3, SS 2020, Aufgabe 3 (printNumbersDescending, nachgebaut)
angabe: |
  Diese Methode soll alle Zahlen aus `[start, end]` ausgeben, die **nicht** durch `teiler` teilbar sind. Was gibt das
  Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class OhneVielfache {
          public static void ohne(int start, int end, int teiler) {
              if (start > end) {
                  return;
              }
              ohne(start + 1, end, teiler);
              if (start % teiler != 0) {
                  System.out.print(start + " ");
              }
          }

          public static void main(String[] args) {
              ohne(10, 16, 3);
              System.out.println();
          }
      }
    loesung: |
      16 14 13 11 10 
    trim: true
    fehler:
      - wert: "10 11 13 14 16"
        meldung: Die Ausgabe steht hinter dem Selbstaufruf. Sie läuft auf dem Rückweg, und dort wird der Aufruf mit 16 zuerst fertig.
      - wert: "15 12"
        meldung: Ausgegeben werden die Zahlen, die **nicht** durch 3 teilbar sind. 12 und 15 werden gerade übersprungen.
hinweise:
  - Der Selbstaufruf kommt zuerst, die Ausgabe danach. In welcher Reihenfolge werden die Aufrufe fertig?
  - Durch 3 teilbar sind im Intervall nur 12 und 15.
loesung: |
  **Ansatz:** Die Aufrufe laufen von 10 bis 17. Die Ausgaben stehen hinter dem Selbstaufruf und erscheinen deshalb auf dem Rückweg.
  ---
  Auf dem Rückweg wird zuerst der Aufruf mit 16 fertig, dann 15, 14 und so weiter bis 10.
  ---
  12 und 15 sind durch 3 teilbar und werden ausgelassen. Ausgabe: `16 14 13 11 10`.
```

### Rekursion über die Ziffern

Für Ziffern brauchst du zwei Rechnungen aus [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
`n % 10` ist die letzte Ziffer von `n`, und `n / 10` ist die Zahl ohne ihre letzte Ziffer. Für 4827 ist
`4827 % 10 = 7` und `4827 / 10 = 482`. Damit zerlegst du eine Zahl in „letzte Ziffer“ und „kleinere Zahl“. Die
kleinere Zahl hat eine Ziffer weniger. Das ist ein natürlicher Fortschritt für eine Rekursion. Mit Schleifen hast du
Ziffern so schon in [7.2 Die Ziffernschleife: Ziffern zählen und Quersumme](/lernen/ep1/ziffern/die-ziffernschleife-ziffern-zaehlen-und-quersumme) zerlegt. Hier übernimmt der Selbstaufruf die Rolle der Schleife.

:::beispiel[Die Quersumme rekursiv]
Die **Quersumme** ist die Summe aller Ziffern. Die Quersumme von 4827 ist `4 + 8 + 2 + 7 = 21`.

```java
public class Quersumme {
    public static int quersumme(int n) {
        if (n < 10) {
            return n;
        }
        return n % 10 + quersumme(n / 10);
    }

    public static void main(String[] args) {
        System.out.println(quersumme(4827));
    }
}
```

- `if (n < 10)` ist der Basisfall. Eine einstellige Zahl besteht nur aus einer Ziffer, und die ist ihre Quersumme.
- `n % 10` ist die letzte Ziffer, `quersumme(n / 10)` ist die Quersumme aller übrigen Ziffern.

Der Ablauf als Tabelle. Die Spalte „Rückgabe“ füllt man von unten nach oben:

```
Aufruf             n % 10      Selbstaufruf       Rückgabe
quersumme(4827)    7           quersumme(482)     7 + 14 = 21
quersumme(482)     2           quersumme(48)      2 + 12 = 14
quersumme(48)      8           quersumme(4)       8 + 4 = 12
quersumme(4)       Basisfall   keiner             4
```

Die Ausgabe ist `21`.
:::

:::merke[Das Muster für Ziffern-Rekursion]
1. **Basisfall:** eine einstellige Zahl (`n < 10`). Das Ergebnis hängt nur von dieser einen Ziffer ab.
2. **Beitrag dieses Aufrufs:** die letzte Ziffer `n % 10`, eventuell mit einer Bedingung (gerade, größer als 5 …).
3. **Fortschritt:** `n / 10`. Die Zahl verliert ihre letzte Ziffer.
4. **Zusammensetzen:** Beitrag und Ergebnis des Selbstaufrufs verknüpfen, meist mit `+`.
:::

```aufgabe
id: rk-za-gefuehrt-gerade-ziffern
titel: Gerade Ziffern zählen
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static int geradeZiffern(int n) {
      if (n < 10) {
          if (n % 2 == 0) {
              return 1;
          }
          return 0;
      }
      int beitrag = 0;
      if (n % 10 % 2 == 0) {
          beitrag = 1;
      }
      return beitrag + geradeZiffern(n / 10);
  }
  ```

  Was liefert `geradeZiffern(40213)`? Löse die Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: Die 0 ist eine gerade Zahl, denn `0 % 2` ist 0. Sie zählt mit.
      - wert: "5"
        meldung: Gezählt werden nur die geraden Ziffern, nicht alle Ziffern.
gefuehrt:
  - text: Welche Ziffer betrachtet der erste Aufruf, also welchen Wert hat `40213 % 10`?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`% 10` liefert die letzte Ziffer, hier 3. Sie ist ungerade, `beitrag` bleibt 0.'
  - text: Mit welchem Argument ruft sich die Methode selbst auf?
    teil: { typ: zahl, loesung: "4021" }
    erklaerung: '`40213 / 10` streicht die letzte Ziffer.'
  - text: Welcher Aufruf landet im Basisfall?
    teil:
      typ: auswahl
      optionen: ['`geradeZiffern(4)`', '`geradeZiffern(0)`', '`geradeZiffern(40)`']
      richtig: [0]
    erklaerung: Die Argumente sind 40213, 4021, 402, 40 und 4. Erst 4 ist kleiner als 10.
  - text: Welche Ziffern zählen insgesamt als gerade?
    teil:
      typ: auswahl
      optionen: ['4, 0 und 2', '4 und 2', 'nur 4']
      richtig: [0]
    erklaerung: 0 ist gerade, denn `0 % 2 == 0`. Gezählt werden 4, 0 und 2.
hinweise:
  - Zerlege die Zahl Aufruf für Aufruf mit `% 10` und `/ 10`.
loesung: |
  **Ansatz:** Für jeden Aufruf die letzte Ziffer prüfen und das Argument mit `/ 10` verkürzen.
  ---
  Ziffern von hinten: 3 (ungerade), 1 (ungerade), 2 (gerade), 0 (gerade), dann der Basisfall 4 (gerade).
  ---
  Rückweg: `geradeZiffern(4)` liefert 1, `geradeZiffern(40)` liefert `1 + 1 = 2` und `geradeZiffern(402)` liefert `1 + 2 = 3`.
  ---
  Die Aufrufe mit 4021 und 40213 haben den Beitrag 0. Sie geben die 3 unverändert weiter. Ergebnis: 3.
```

```aufgabe
id: rk-za-auswahl-fortschritt
titel: Der richtige Fortschritt für Ziffern
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Methode soll die Ziffern von `n` der Reihe nach verarbeiten. Gerade hat sie die letzte Ziffer erledigt.
  Mit welchem Argument muss sie sich selbst aufrufen?
teile:
  - typ: auswahl
    optionen: ['`n / 10`', '`n % 10`', '`n - 1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`n % 10` ist die letzte Ziffer selbst, eine einstellige Zahl. Danach wären alle anderen Ziffern verloren.'
      - wert: 2
        meldung: '`n - 1` verkleinert die Zahl um 1, nicht um eine Ziffer. Aus 4827 würde 4826, das ist eine ganz andere Zahl.'
hinweise:
  - Gesucht ist die Zahl ohne ihre letzte Ziffer.
loesung: |
  **Ansatz:** Der Selbstaufruf soll dieselbe Aufgabe für die übrigen Ziffern lösen.
  ---
  `n / 10` streicht die letzte Ziffer, etwa 4827 zu 482. Also ist `n / 10` der richtige Fortschritt.
```

:::achtung[Der Basisfall n == 0 bei Ziffern]
Eine typische falsche Methode zum Zählen der Ziffern:

```java
public static int anzahlZiffern(int n) {
    if (n == 0) {
        return 0;
    }
    return 1 + anzahlZiffern(n / 10);
}
```

Für 4827 stimmt das Ergebnis 4. Aber `anzahlZiffern(0)` liefert 0, obwohl die Zahl 0 eine Ziffer hat. Bei Aufgaben
mit „Vorbedingung `number > 0`“ fällt das nicht auf. Ist 0 erlaubt, ist die Methode falsch. Sicher ist der Basisfall
`if (n < 10) { return 1; }`. Er behandelt die letzte verbleibende Ziffer, auch wenn sie 0 ist.
:::

```aufgabe
id: rk-za-code-kleiner-drei
titel: Ziffern kleiner als 3 zählen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2023, Aufgabe 3 (countDigitsAboveFive, umformuliert)
angabe: |
  Implementiere `int zaehleKleinerDrei(int number)` **rekursiv** und ohne Schleifen. Die Methode zählt, wie viele
  Ziffern von `number` kleiner als 3 sind (also 0, 1 oder 2), und gibt diese Anzahl zurück. Strings sind nicht
  erlaubt. Vorbedingung: `number > 0`.

  Beispiele: `zaehleKleinerDrei(2)` liefert 1, `zaehleKleinerDrei(7)` liefert 0, `zaehleKleinerDrei(30519)` liefert 2,
  `zaehleKleinerDrei(1002)` liefert 4.
teile:
  - typ: code
    vorlage: |
      public class Ziffern {
          public static int zaehleKleinerDrei(int number) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ziffern {
          public static int zaehleKleinerDrei(int number) {
              int beitrag = 0;
              if (number % 10 < 3) {
                  beitrag = 1;
              }
              if (number < 10) {
                  return beitrag;
              }
              return beitrag + zaehleKleinerDrei(number / 10);
          }
      }
    tests:
      - { aufruf: "zaehleKleinerDrei(30519)", erwartet: "2" }
      - { aufruf: "zaehleKleinerDrei(2)", erwartet: "1", beschreibung: "einstellig, zählt" }
      - { aufruf: "zaehleKleinerDrei(7)", erwartet: "0", beschreibung: "einstellig, zählt nicht" }
      - { aufruf: "zaehleKleinerDrei(1002)", erwartet: "4", beschreibung: "Nullen in der Mitte" }
      - { aufruf: "zaehleKleinerDrei(987654321)", erwartet: "2", versteckt: true }
    regeln: { keineSchleifenIn: [zaehleKleinerDrei], rekursiv: [zaehleKleinerDrei], keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "Auch die erste Ziffer muss geprüft werden. Bei einer einstelligen Zahl ist das Ergebnis 1, wenn die Ziffer kleiner als 3 ist, sonst 0." }
      - { wert: 4, meldung: "Die Nullen in 1002 sind Ziffern kleiner als 3. Endet deine Rekursion vielleicht schon, wenn `number % 10 == 0` ist?" }
      - { wert: "erlaubteApi", meldung: "Strings sind hier nicht erlaubt. Zerlege die Zahl mit `% 10` und `/ 10`." }
hinweise:
  - Die letzte Ziffer ist `number % 10`. Ihr Beitrag ist 1, wenn sie kleiner als 3 ist, sonst 0.
  - Basisfall ist eine einstellige Zahl. Sonst Beitrag plus `zaehleKleinerDrei(number / 10)`.
loesung: |
  **Ansatz:** Ziffern-Muster. Beitrag der letzten Ziffer bestimmen, dann mit `number / 10` weitermachen.
  ---
  Den Beitrag rechnet man für jeden Aufruf aus, auch im Basisfall. Darum steht er vor der Abfrage `number < 10`.
  ---
  ```java
  int beitrag = 0;
  if (number % 10 < 3) {
      beitrag = 1;
  }
  if (number < 10) {
      return beitrag;
  }
  return beitrag + zaehleKleinerDrei(number / 10);
  ```
  ---
  Probe `30519`: Ziffern 9, 1, 5, 0, 3. Kleiner als 3 sind 1 und 0, Ergebnis 2.
```

```aufgabe
id: rk-za-code-quadrate
titel: Summe der Ziffernquadrate
niveau: 1
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021, Aufgabe 3 (sumSquaredDigits, umformuliert)
angabe: |
  Implementiere `int quadratQuersumme(int number)` **rekursiv** und ohne Schleifen. Die Methode quadriert jede
  Ziffer von `number` und liefert die Summe dieser Quadrate. Vorbedingung: `number > 0`.

  Beispiele: `quadratQuersumme(3)` liefert 9, `quadratQuersumme(205)` liefert `4 + 0 + 25 = 29`,
  `quadratQuersumme(1111)` liefert 4.
teile:
  - typ: code
    vorlage: |
      public class Quadrate {
          public static int quadratQuersumme(int number) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Quadrate {
          public static int quadratQuersumme(int number) {
              int ziffer = number % 10;
              if (number < 10) {
                  return ziffer * ziffer;
              }
              return ziffer * ziffer + quadratQuersumme(number / 10);
          }
      }
    tests:
      - { aufruf: "quadratQuersumme(205)", erwartet: "29" }
      - { aufruf: "quadratQuersumme(3)", erwartet: "9", beschreibung: "einstellige Zahl" }
      - { aufruf: "quadratQuersumme(1111)", erwartet: "4" }
      - { aufruf: "quadratQuersumme(90000)", erwartet: "81", versteckt: true }
      - { aufruf: "quadratQuersumme(123456789)", erwartet: "285", versteckt: true }
    regeln: { keineSchleifenIn: [quadratQuersumme], rekursiv: [quadratQuersumme], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Auch im Basisfall muss die Ziffer quadriert werden. `quadratQuersumme(3)` ist 9, nicht 3." }
      - { wert: 1, meldung: "Quadriere jede Ziffer einzeln und addiere erst dann. `(2 + 0 + 5)²` wäre 49, gesucht ist `2² + 0² + 5² = 29`." }
hinweise:
  - Die letzte Ziffer ist `number % 10`, ihr Quadrat ist `ziffer * ziffer`.
  - Basisfall `number < 10` liefert das Quadrat dieser einen Ziffer. Sonst Quadrat plus Selbstaufruf mit `number / 10`.
loesung: |
  **Ansatz:** Ziffern-Muster mit dem Beitrag „Quadrat der letzten Ziffer“.
  ---
  ```java
  int ziffer = number % 10;
  if (number < 10) {
      return ziffer * ziffer;
  }
  return ziffer * ziffer + quadratQuersumme(number / 10);
  ```
  ---
  Ein Aufruf von `Math.pow` ist nicht nötig. `Math.pow` liefert außerdem ein `double`, das man wieder umwandeln müsste.
  ---
  Probe `205`: `25 + quadratQuersumme(20) = 25 + (0 + quadratQuersumme(2)) = 25 + 0 + 4 = 29`.
```

```aufgabe
id: rk-za-code-potenz
titel: Potenz durch wiederholtes Multiplizieren
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Implementiere `long potenz(int basis, int exponent)` **rekursiv** und ohne Schleifen und ohne `Math.pow`. Die
  Methode liefert `basis` hoch `exponent`. Vorbedingung: `exponent ≥ 0`.

  Beispiele: `potenz(3, 4)` liefert 81, `potenz(-2, 3)` liefert -8, `potenz(7, 0)` liefert 1.
teile:
  - typ: code
    vorlage: |
      public class Potenz {
          public static long potenz(int basis, int exponent) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Potenz {
          public static long potenz(int basis, int exponent) {
              if (exponent == 0) {
                  return 1;
              }
              return basis * potenz(basis, exponent - 1);
          }
      }
    tests:
      - { aufruf: "potenz(3, 4)", erwartet: "81" }
      - { aufruf: "potenz(7, 0)", erwartet: "1", beschreibung: "Exponent 0" }
      - { aufruf: "potenz(-2, 3)", erwartet: "-8", beschreibung: "negative Basis" }
      - { aufruf: "potenz(2, 40)", erwartet: "1099511627776L", versteckt: true }
    regeln: { keineSchleifenIn: [potenz], rekursiv: [potenz], keineHilfsmethoden: true, keineFelder: true, verboteneApi: ["Math.pow"] }
    fehler:
      - { wert: 2, meldung: "Jede Zahl hoch 0 ist 1. Dein Basisfall muss für `exponent == 0` den Wert 1 liefern." }
      - { wert: 4, meldung: "2 hoch 40 passt nicht in ein `int`. Rechnet dein Selbstaufruf mit `long`? Der Rückgabetyp `long` muss erhalten bleiben. (Achtung: `^` bedeutet in Java nicht „hoch“.)" }
      - { wert: "verboteneApi", meldung: "`Math.pow` ist hier verboten. Die Rekursion soll das Multiplizieren selbst erledigen." }
hinweise:
  - '`basis` hoch `exponent` ist `basis` mal (`basis` hoch `exponent - 1`).'
  - Nur der Exponent wird kleiner. Die Basis bleibt bei jedem Selbstaufruf gleich.
loesung: |
  **Ansatz:** Es gilt „b hoch e = b · (b hoch (e - 1))“ und „b hoch 0 = 1“. Der Fortschritt betrifft nur den Exponenten.
  ---
  ```java
  if (exponent == 0) {
      return 1;
  }
  return basis * potenz(basis, exponent - 1);
  ```
  ---
  Der Selbstaufruf liefert ein `long`. `basis * long` wird darum in `long` gerechnet und läuft bei 2 hoch 40 nicht über.
  ---
  Probe: `potenz(3, 4) = 3 · 3 · 3 · 3 · 1 = 81`.
```

```aufgabe
id: rk-za-zeilen-fehler
titel: Drei Fehler in einer Ziffern-Methode
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll die größte Ziffer von `n` liefern (`n ≥ 0`), etwa 8 für 3807. Markiere alle Zeilen mit einem
  Fehler. Gemeint sind Zeilen, die nicht kompilieren oder ein falsches Ergebnis oder eine Endlosrekursion bewirken.
teile:
  - typ: zeilen
    code: |
      public static int maxZiffer(int n) {
          if (n < 10) {
              return 0;
          }
          int rest = maxZiffer(n % 10);
          int letzte = n % 10;
          if (letzte > rest) {
              return letzte;
          }
          return rest
      }
    loesung: [3, 5, 10]
    fehler:
      - wert: [5, 10]
        meldung: Was ist die größte Ziffer einer einstelligen Zahl? Sie ist die Zahl selbst, nicht 0.
      - wert: [3, 10]
        meldung: Prüfe den Fortschritt in Zeile 5. Mit `n % 10` bleibt nur die letzte Ziffer übrig, alle anderen gehen verloren.
      - wert: [3, 5]
        meldung: Schau dir das Zeilenende von Zeile 10 genau an.
hinweise:
  - Prüfe Basisfall, Fortschritt und Syntax getrennt.
  - Der Rest ohne letzte Ziffer ist `n / 10`, nicht `n % 10`.
loesung: |
  **Ansatz:** Die drei Fragen aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) stellen (Basisfall, Fortschritt, Erreichbarkeit) und zusätzlich die Syntax prüfen.
  ---
  Zeile 3: Der Basisfall muss `return n;` lauten. Eine einstellige Zahl ist ihre eigene größte Ziffer.
  ---
  Zeile 5: Der Fortschritt muss `maxZiffer(n / 10)` sein. Mit `n % 10` wäre das Ergebnis immer nur die letzte Ziffer.
  ---
  Zeile 10: Es fehlt der Strichpunkt. Der Compiler meldet `';' expected`.
```

Manchmal soll eine Methode zwei Dinge gleichzeitig tun: etwas **ausgeben** und einen Wert **zurückgeben**. Das ist
in einer Rekursion kein Problem. Die Ausgabe ist ein Seiteneffekt wie in
[6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return), der Rückgabewert läuft über `return`
zurück. Wichtig ist nur, die Ausgabe an die richtige Stelle zu setzen.

```aufgabe
id: rk-za-code-druck-summe
titel: Ausgeben und aufsummieren
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 5, WS 2018, Aufgabe 1 (printAndCountNumbers, umformuliert)
angabe: |
  Implementiere `int druckeUndSumme(int von, int bis)` **rekursiv** und ohne Schleifen. Die Methode gibt alle Zahlen von
  `von` bis `bis` (beide inklusive) **aufsteigend** aus, jede in einer eigenen Zeile. Zusätzlich liefert sie die Summe
  aller ausgegebenen Zahlen zurück. Vorbedingung: `von ≤ bis`.

  Beispiel: `druckeUndSumme(2, 5)` gibt `2`, `3`, `4`, `5` aus und liefert 14.
teile:
  - typ: code
    vorlage: |
      public class DruckSumme {
          public static int druckeUndSumme(int von, int bis) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class DruckSumme {
          public static int druckeUndSumme(int von, int bis) {
              System.out.println(von);
              if (von == bis) {
                  return von;
              }
              return von + druckeUndSumme(von + 1, bis);
          }
      }
    tests:
      - { aufruf: "druckeUndSumme(2, 5)", erwartet: "14" }
      - { aufruf: "druckeUndSumme(2, 5)", stdout: "2\n3\n4\n5\n", beschreibung: "Ausgabe aufsteigend" }
      - { aufruf: "druckeUndSumme(7, 7)", erwartet: "7", beschreibung: "Intervall mit einer Zahl" }
      - { aufruf: "druckeUndSumme(-2, 1)", erwartet: "-2", versteckt: true }
      - { aufruf: "druckeUndSumme(-2, 1)", stdout: "-2\n-1\n0\n1\n", versteckt: true }
    regeln: { keineSchleifenIn: [druckeUndSumme], rekursiv: [druckeUndSumme], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Die Ausgabe muss aufsteigend sein. Steht dein `println` vor dem Selbstaufruf? Dahinter läuft es auf dem Rückweg und dreht die Reihenfolge um." }
      - { wert: 3, meldung: "Bei `von == bis` wird genau eine Zahl ausgegeben und zurückgeliefert. Wird `bis` bei dir doppelt gezählt oder gar nicht?" }
hinweise:
  - Die Ausgabe von `von` muss vor dem Selbstaufruf stehen, damit die Zahlen aufsteigend erscheinen.
  - Basisfall `von == bis` gibt `von` aus und liefert `von`. Sonst `von` plus das Ergebnis für `[von + 1, bis]`.
loesung: |
  **Ansatz:** Intervallmuster mit Fortschritt `von + 1`. Die Ausgabe auf dem Hinweg, die Summe auf dem Rückweg.
  ---
  Die Ausgabe von `von` passiert in jedem Aufruf, auch im Basisfall. Darum steht sie ganz vorne.
  ---
  ```java
  System.out.println(von);
  if (von == bis) {
      return von;
  }
  return von + druckeUndSumme(von + 1, bis);
  ```
  ---
  Probe `(2, 5)`: Ausgaben 2, 3, 4, 5. Rückgabe `2 + (3 + (4 + 5)) = 14`. Der Basisfall `von == bis` ist sicher, weil die Vorbedingung `von ≤ bis` garantiert.
```

:::achtung[Führende Nullen beim Zerlegen verloren]
Eine Aufgabe aus der Ad-hoc-Sammlung (kurze Aufgaben, die in der Übung spontan gelöst werden): Gib eine Zahl mit
Tausendertrennzeichen aus, etwa 31004 als `31,004`. Ein häufiger falscher Ansatz
gibt den Rest `n % 1000` einfach als Zahl aus:

```java
System.out.print(n / 1000 + "," + n % 1000);   // falsch für 31004
```

`31004 % 1000` ist 4, und die Ausgabe lautet `31,4`. Die zwei Nullen vor der 4 gehören aber zur Zahl. Eine Zahl wie
`4` hat keine führenden Nullen, die gehen beim Rechnen verloren. Du musst sie selbst ergänzen: zwei Nullen, wenn der
Rest kleiner als 10 ist, eine Null, wenn er zwischen 10 und 99 liegt.
:::

```aufgabe
id: rk-za-code-tausender
titel: Tausendertrennzeichen rekursiv
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Ad-hoc-Sammlung 2017W, Aufgabe 24 (umformuliert)
angabe: |
  Implementiere `void tausender(int n)` **rekursiv** und ohne Schleifen. Die Methode gibt `n` mit Beistrichen als
  Tausendertrennzeichen aus, ohne Zeilenumbruch. Strings dürfen nur zum Verketten mit `+` benutzt werden.
  Vorbedingung: `n ≥ 0`.

  Beispiele: `tausender(587)` gibt `587` aus, `tausender(31004)` gibt `31,004` aus, `tausender(1000000)` gibt
  `1,000,000` aus.
teile:
  - typ: code
    vorlage: |
      public class Tausender {
          public static void tausender(int n) {
              // TODO
          }
      }
    musterloesung: |
      public class Tausender {
          public static void tausender(int n) {
              if (n < 1000) {
                  System.out.print(n);
                  return;
              }
              tausender(n / 1000);
              int rest = n % 1000;
              String nullen = "";
              if (rest < 100) {
                  nullen = "0";
              }
              if (rest < 10) {
                  nullen = "00";
              }
              System.out.print("," + nullen + rest);
          }
      }
    tests:
      - { aufruf: "tausender(31004)", stdout: "31,004" }
      - { aufruf: "tausender(587)", stdout: "587", beschreibung: "keine Trennung nötig" }
      - { aufruf: "tausender(1000000)", stdout: "1,000,000" }
      - { aufruf: "tausender(1234567)", stdout: "1,234,567" }
      - { aufruf: "tausender(70080)", stdout: "70,080", versteckt: true }
      - { aufruf: "tausender(0)", stdout: "0", versteckt: true }
    regeln: { keineSchleifenIn: [tausender], rekursiv: [tausender], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Erscheint `31,4`? Der Rest 4 braucht zwei führende Nullen. Ergänze sie, bevor du ihn ausgibst." }
      - { wert: 4, meldung: "Kommen die Blöcke in der falschen Reihenfolge? Die vorderen Ziffern müssen zuerst erscheinen. Der Selbstaufruf mit `n / 1000` gehört vor die Ausgabe des Rests." }
hinweise:
  - Zerlege in Dreierblöcke. `n / 1000` sind die vorderen Ziffern, `n % 1000` ist der letzte Block.
  - Die vorderen Ziffern müssen zuerst erscheinen. Der Selbstaufruf kommt also vor der Ausgabe des letzten Blocks.
  - Basisfall `n < 1000` gibt `n` ohne Beistrich aus. Den letzten Block füllst du mit Nullen auf drei Stellen auf.
loesung: |
  **Ansatz:** Ziffern-Rekursion mit Dreierblöcken: Fortschritt `n / 1000`, Beitrag `n % 1000`.
  ---
  Der vordere Teil muss vor dem letzten Block erscheinen. Darum steht der Selbstaufruf vor der Ausgabe, und der Block erscheint auf dem Rückweg.
  ---
  ```java
  if (n < 1000) {
      System.out.print(n);
      return;
  }
  tausender(n / 1000);
  int rest = n % 1000;
  String nullen = "";
  if (rest < 100) {
      nullen = "0";
  }
  if (rest < 10) {
      nullen = "00";
  }
  System.out.print("," + nullen + rest);
  ```
  ---
  Probe `31004`: Der Selbstaufruf gibt `31` aus. Danach ist `rest = 4`, also `nullen = "00"`, und es erscheint `,004`.
```

```reflexion
frage: Bei `aufsteigend(start, end)` wird `start` größer, bei `quersumme(n)` wird `n` kleiner. Was haben beide Fortschritte gemeinsam, das die Rekursion beenden lässt?
antwort: |
  Beide machen die verbleibende Aufgabe kleiner. Bei `aufsteigend` wird das Intervall `[start, end]` um eine Zahl
  kürzer, bei `quersumme` verliert die Zahl eine Ziffer. Man kann also eine Größe angeben, die bei jedem Aufruf
  sinkt: die Länge `end - start + 1` des Intervalls oder die Anzahl der Ziffern. Diese Größe ist eine ganze Zahl und
  kann nicht unendlich oft sinken, ohne den Basisfall zu erreichen. Ob der Parameter dabei größer oder kleiner wird,
  ist egal. Entscheidend ist, dass die Aufgabe schrumpft.
```

## Rekursion mit Strings

```aufgabe
id: rk-str-check-schleife
titel: Ein String rückwärts mit einer Schleife
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? Strings Zeichen für Zeichen kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      String s = "Lager";
      String r = "";
      for (int i = 0; i < s.length(); i++) {
          r = s.charAt(i) + r;
      }
      System.out.println(r);
    loesung: |
      regaL
    fehler:
      - wert: "Lager"
        meldung: 'In `r = s.charAt(i) + r` kommt das neue Zeichen **vor** den bisherigen Inhalt. Dadurch dreht sich die Reihenfolge um.'
loesung: |
  Jedes Zeichen wird vorne angefügt: `L`, dann `aL`, dann `gaL`, `egaL`, `regaL`.
  ---
  Ausgabe: `regaL`.
```

Ein String lässt sich so zerlegen wie eine Zahl in letzte Ziffer und Rest. Hier nimmt man meist das **erste Zeichen**
`s.charAt(0)` und den **Rest** `s.substring(1)`. Der Rest ist um genau ein Zeichen kürzer. Das ist der Fortschritt.
Irgendwann ist der String leer, und mit dem leeren String `""` kann die Methode nichts mehr tun. Das ist der Basisfall.
Ob ein String leer ist, prüfst du mit `s.isEmpty()` oder `s.length() == 0`. Beide Methoden sind im Programmiertest
erlaubt.

:::beispiel[Ein Zeichen zählen]
```java
public class Zaehlen {
    public static int zaehle(String s, char c) {
        if (s.isEmpty()) {
            return 0;
        }
        int rest = zaehle(s.substring(1), c);
        if (s.charAt(0) == c) {
            return 1 + rest;
        }
        return rest;
    }

    public static void main(String[] args) {
        System.out.println(zaehle("Kakao", 'a'));
    }
}
```

- `s.isEmpty()` ist der Basisfall. Ein leerer String enthält kein Zeichen, also auch kein `c`.
- `zaehle(s.substring(1), c)` zählt im Rest. Den Wert speichern wir in `rest`.
- Ist das erste Zeichen gleich `c`, zählt es mit: `1 + rest`. Sonst bleibt es bei `rest`. Zeichen vergleicht man mit `==`, denn `char` ist ein primitiver Typ.

Die Aufrufe für `"Kakao"` und ihre Rückgabewerte, von unten nach oben gerechnet:

```
Aufruf              erstes Zeichen   Rückgabe
zaehle("Kakao")     K                0 + 2 = 2
zaehle("akao")      a                1 + 1 = 2
zaehle("kao")       k                0 + 1 = 1
zaehle("ao")        a                1 + 0 = 1
zaehle("o")         o                0 + 0 = 0
zaehle("")          (Basisfall)      0
```

Die Ausgabe ist `2`. Großes `K` und kleines `k` sind verschiedene Zeichen, beide zählen nicht als `a`.
:::

Strings in Java sind unveränderlich. Eine rekursive String-Methode **baut darum einen neuen String auf** und gibt ihn
zurück. Das Muster ist dasselbe: Der Selbstaufruf liefert das Ergebnis für den Rest, und der aktuelle Aufruf setzt
sein eigenes Stück mit `+` davor oder dahinter.

:::beispiel[Einen String umdrehen]
```java
public class Umdrehen {
    public static String umdrehen(String s) {
        if (s.isEmpty()) {
            return "";
        }
        return umdrehen(s.substring(1)) + s.charAt(0);
    }

    public static void main(String[] args) {
        System.out.println(umdrehen("ABC"));
    }
}
```

Inhaltlich gelesen: Der umgedrehte String ist „der umgedrehte Rest, und das erste Zeichen ganz hinten“. Mechanisch:

1. `umdrehen("ABC")` braucht `umdrehen("BC")` und hängt danach `A` an.
2. `umdrehen("BC")` braucht `umdrehen("C")` und hängt danach `B` an.
3. `umdrehen("C")` braucht `umdrehen("")` und hängt danach `C` an.
4. `umdrehen("")` ist der Basisfall und liefert `""`.
5. Rückweg: `"" + 'C'` ist `"C"`. Dann `"C" + 'B'` ist `"CB"`. Dann `"CB" + 'A'` ist `"CBA"`.

Die Ausgabe ist `CBA`. Steht das erste Zeichen **vor** dem Selbstaufruf, also `s.charAt(0) + umdrehen(…)`, entsteht
wieder der ursprüngliche String. Die Stelle des eigenen Stücks bestimmt die Reihenfolge.
:::

```aufgabe
id: rk-str-gefuehrt
titel: Ein Zeichen durch einen Stern ersetzen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static String stern(String s, char c) {
      if (s.isEmpty()) {
          return "";
      }
      String rest = stern(s.substring(1), c);
      if (s.charAt(0) == c) {
          return "*" + rest;
      }
      return s.charAt(0) + rest;
  }
  ```

  Was liefert `stern("Banane", 'n')`? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Stern {
          public static String stern(String s, char c) {
              if (s.isEmpty()) {
                  return "";
              }
              String rest = stern(s.substring(1), c);
              if (s.charAt(0) == c) {
                  return "*" + rest;
              }
              return s.charAt(0) + rest;
          }

          public static void main(String[] args) {
              System.out.println(stern("Banane", 'n'));
          }
      }
    codeAnzeigen: false
    loesung: |
      Ba*a*e
    fehler:
      - wert: "e*a*aB"
        meldung: Das eigene Zeichen steht **vor** dem Ergebnis des Rests (`s.charAt(0) + rest`). Die Reihenfolge bleibt also erhalten.
      - wert: "Banane"
        meldung: Für jedes `n` liefert der Aufruf `"*" + rest`. Die beiden `n` werden ersetzt.
gefuehrt:
  - text: Was liefert der Basisfall `stern("", 'n')`?
    teil:
      typ: auswahl
      optionen: ['den leeren String `""`', 'den String `"*"`', 'das Zeichen `n`']
      richtig: [0]
    erklaerung: Im leeren String gibt es nichts zu ersetzen. Das Ergebnis ist leer.
  - text: Was liefert `stern("e", 'n')`?
    teil:
      typ: auswahl
      optionen: ['`"e"`', '`"*"`', '`""`']
      richtig: [0]
    erklaerung: '`e` ist nicht `n`. Ergebnis `"e" + ""`, also `"e"`.'
  - text: Was liefert `stern("ne", 'n')`?
    teil:
      typ: auswahl
      optionen: ['`"*e"`', '`"ne"`', '`"e*"`']
      richtig: [0]
    erklaerung: Das erste Zeichen ist `n`, also `"*" + stern("e", 'n')`, das ist `"*e"`.
  - text: Wie viele Aufrufe von `stern` gibt es bei `stern("Banane", 'n')` insgesamt?
    teil: { typ: zahl, loesung: "7" }
    erklaerung: Ein Aufruf für jede Länge von 6 bis 0, also 7 Aufrufe.
hinweise:
  - Arbeite von hinten nach vorne. Beginne mit dem leeren String und füge ein Zeichen nach dem anderen vorne an.
loesung: |
  **Ansatz:** Vom Basisfall aus auf dem Rückweg den String von hinten nach vorne aufbauen.
  ---
  `stern("")` ist `""`, `stern("e")` ist `"e"`, `stern("ne")` ist `"*e"`, `stern("ane")` ist `"a*e"`.
  ---
  `stern("nane")` ist `"*a*e"`, `stern("anane")` ist `"a*a*e"`, `stern("Banane")` ist `"Ba*a*e"`.
```

:::merke[Das Muster für String-Rekursion]
1. **Basisfall:** der leere String (`s.isEmpty()`). Manchmal zusätzlich ein String der Länge 1.
2. **Zerlegen:** erstes Zeichen `s.charAt(0)` und Rest `s.substring(1)`.
3. **Selbstaufruf** mit dem Rest. Das Ergebnis am besten in einer Variable speichern.
4. **Zusammensetzen** je nach Rückgabetyp:
   - `int` (zählen): Beitrag `1` oder `0` plus Ergebnis des Rests.
   - `boolean` (prüfen): Bedingung für das erste Zeichen mit `&&` oder `||` und dem Ergebnis des Rests verknüpfen.
   - `String` (umbauen): eigenes Stück vor (Reihenfolge bleibt) oder hinter (Reihenfolge dreht sich um) das Ergebnis.
:::

```aufgabe
id: rk-str-auswahl-basisfall
titel: Der passende Basisfall
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Methode `f(String s)` beginnt mit `char erstes = s.charAt(0);` und ruft sich mit `s.substring(1)` auf. Vor dieser
  Zeile fehlt noch der Basisfall. Welcher Basisfall verhindert sicher eine Exception?
teile:
  - typ: auswahl
    optionen: ['`if (s.isEmpty()) { return ...; }`', '`if (s.length() == 1) { return ...; }`', 'Kein Basisfall nötig, `substring(1)` liefert irgendwann `null`.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel: `f("")`. Die Länge ist 0, nicht 1. Dann läuft `s.charAt(0)` und wirft eine `StringIndexOutOfBoundsException`.'
      - wert: 2
        meldung: '`"A".substring(1)` liefert den leeren String `""`, nicht `null`. Ein weiterer Aufruf von `charAt(0)` darauf wirft eine Exception.'
hinweise:
  - Für welchen String ist `s.charAt(0)` nicht erlaubt?
loesung: |
  **Ansatz:** `charAt(0)` ist nur erlaubt, wenn der String mindestens ein Zeichen hat.
  ---
  Der leere String muss also vorher abgefangen werden. Nur `s.isEmpty()` deckt ihn ab, auch wenn `f("")` direkt aus `main` kommt.
```

:::achtung[Der leere String fehlt im Basisfall]
Ein häufiger Versuch, alle `#` ans Ende zu schieben, lautet

```java
public static String rauteAnsEnde(String text) {
    if (text.length() == 1) {          // falsch: "" ist nicht abgedeckt
        return text;
    }
    if (text.charAt(0) == '#') {
        return rauteAnsEnde(text.substring(1)) + '#';
    }
    return text.charAt(0) + rauteAnsEnde(text.substring(1));
}
```

`rauteAnsEnde("#q#r#")` liefert richtig `qr###`. Aber `rauteAnsEnde("")` wirft
`StringIndexOutOfBoundsException: Index 0 out of bounds for length 0`. Bei der Länge 0 ist `text.length() == 1` falsch,
und `charAt(0)` greift auf ein Zeichen zu, das es nicht gibt. Richtig ist `if (text.isEmpty())` oder
`if (text.length() <= 1)`.
:::

:::achtung[Zwei Zeichen addiert statt verkettet]
Diese Methode soll jede Ziffer verdoppeln, aus `"a3"` soll `"a33"` werden:

```java
String rest = verdopple(s.substring(1));
char c = s.charAt(0);
if (c >= '0' && c <= '9') {
    return c + c + rest;          // falsch
}
return c + rest;
```

`verdopple("3")` liefert `"102"` statt `"33"`. Java rechnet `c + c` von links nach rechts. Zwei `char`-Werte werden
dabei als Zahlen addiert: `'3'` hat den Wert 51, und `51 + 51 = 102` (siehe
[2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)). Erst dann wird `rest`
angehängt. Richtig ist `"" + c + c + rest` oder `c + "" + c + rest`. Sobald links ein String steht, wird verkettet.
:::

```aufgabe
id: rk-str-ausgabe-gross
titel: Nur die Großbuchstaben
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Gross {
          public static String gross(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              char c = s.charAt(0);
              String rest = gross(s.substring(1));
              if (c >= 'A' && c <= 'Z') {
                  return c + rest;
              }
              return rest;
          }

          public static void main(String[] args) {
              System.out.println(gross("TU Wien EP1"));
              System.out.println(gross("ohne") + "|");
          }
      }
    loesung: |
      TUWEP
      |
    fehler:
      - wert: "TUWEP1\n|"
        meldung: Die Ziffer `1` liegt nicht zwischen `'A'` und `'Z'`. Sie wird weggelassen.
      - wert: "TU W EP\n|"
        meldung: Das Leerzeichen ist kein Großbuchstabe. Es wird genauso weggelassen wie die Kleinbuchstaben.
hinweise:
  - Behalten werden nur Zeichen von `'A'` bis `'Z'`. Die Reihenfolge bleibt, weil `c` vor `rest` steht.
loesung: |
  **Ansatz:** Jedes Zeichen einzeln prüfen. Großbuchstaben bleiben in ihrer Reihenfolge, alles andere fällt weg.
  ---
  In `"TU Wien EP1"` sind die Großbuchstaben `T`, `U`, `W`, `E` und `P`. Ergebnis `TUWEP`.
  ---
  `"ohne"` enthält keinen Großbuchstaben. Das Ergebnis ist leer, und es erscheint nur `|`.
```

```aufgabe
id: rk-str-lueckentext-ziffern
titel: Nur die Ziffern behalten
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  `nurZiffern` soll einen String liefern, der nur die Ziffern von `s` enthält, in derselben Reihenfolge.
  Aus `"A1b22c"` wird `"122"`. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Nur {
          public static String nurZiffern(String s) {
              if (s.isEmpty()) {
                  return ___;
              }
              char c = s.charAt(0);
              String rest = nurZiffern(___);
              if (c >= '0' && c <= '9') {
                  return ___;
              }
              return rest;
          }
      }
    luecken: [['""'], ["s.substring(1)"], ["c + rest", "\"\" + c + rest"]]
    fehler:
      - wert: ['""', "s.substring(1)", "rest + c"]
        meldung: Mit `rest + c` kommt die Ziffer hinter die späteren Ziffern. Aus `"A1b22c"` würde `"221"`.
      - wert: ['""', "s", "c + rest"]
        meldung: '`nurZiffern(s)` hat keinen Fortschritt. Der Rest muss um ein Zeichen kürzer sein.'
hinweise:
  - Der Basisfall liefert den leeren String. Der Rest ohne erstes Zeichen ist `s.substring(1)`.
loesung: |
  **Ansatz:** String-Muster. Basisfall `""`, Fortschritt `s.substring(1)`, Ziffer vor den Rest setzen.
  ---
  Lücken: `""`, `s.substring(1)` und `c + rest`. `c + rest` ist eine Verkettung, weil `rest` ein String ist.
```

```aufgabe
id: rk-str-code-ziffern-doppelt
titel: Ziffern verdoppeln
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, SS 2020, Aufgabe 3 (duplicateNumbersInString, umformuliert)
angabe: |
  Implementiere `String ziffernDoppelt(String text)` **rekursiv** und ohne Schleifen. Die Methode liefert einen neuen
  String, in dem jede Ziffer `0` bis `9` von `text` zweimal steht. Alle anderen Zeichen bleiben unverändert.
  Erlaubt sind von `String` nur `charAt`, `length`, `substring` und `isEmpty`. Vorbedingung: `text != null`.

  Beispiele: `ziffernDoppelt("Raum 7")` liefert `"Raum 77"`, `ziffernDoppelt("a12b")` liefert `"a1122b"`,
  `ziffernDoppelt("")` liefert `""`.
teile:
  - typ: code
    vorlage: |
      public class Doppelt {
          public static String ziffernDoppelt(String text) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Doppelt {
          public static String ziffernDoppelt(String text) {
              if (text.isEmpty()) {
                  return "";
              }
              char c = text.charAt(0);
              String rest = ziffernDoppelt(text.substring(1));
              if (c >= '0' && c <= '9') {
                  return "" + c + c + rest;
              }
              return c + rest;
          }
      }
    tests:
      - { aufruf: "ziffernDoppelt(\"Raum 7\")", erwartet: "\"Raum 77\"" }
      - { aufruf: "ziffernDoppelt(\"a12b\")", erwartet: "\"a1122b\"" }
      - { aufruf: "ziffernDoppelt(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "ziffernDoppelt(\"90\")", erwartet: "\"9900\"", versteckt: true }
    regeln: { keineSchleifenIn: [ziffernDoppelt], rekursiv: [ziffernDoppelt], keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["String.charAt", "String.length", "String.substring", "String.isEmpty"] }
    fehler:
      - { wert: 1, meldung: "Erscheint eine dreistellige Zahl statt der doppelten Ziffer? `c + c` addiert zwei Zeichen als Zahlen. Beginne den Ausdruck mit `\"\" + c + c`." }
      - { wert: 3, meldung: "Für den leeren String darf `charAt(0)` nicht aufgerufen werden. Prüfe zuerst `text.isEmpty()`." }
      - { wert: "erlaubteApi", meldung: "Erlaubt sind nur `charAt`, `length`, `substring` und `isEmpty`. Ob ein Zeichen eine Ziffer ist, prüfst du mit `c >= '0' && c <= '9'`." }
hinweise:
  - Ein Zeichen `c` ist eine Ziffer, wenn `c >= '0' && c <= '9'` gilt.
  - Ziffer verdoppeln mit `"" + c + c + rest`. Das `""` am Anfang erzwingt das Verketten.
loesung: |
  **Ansatz:** String-Muster mit Rückgabetyp `String`. Das eigene Stück steht vor dem Rest, damit die Reihenfolge bleibt.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  char c = text.charAt(0);
  String rest = ziffernDoppelt(text.substring(1));
  if (c >= '0' && c <= '9') {
      return "" + c + c + rest;
  }
  return c + rest;
  ```
  ---
  In der letzten Zeile ist `c + rest` eine Verkettung, weil `rest` ein String ist. Nur `c + c` allein wäre eine Addition.
  ---
  Probe: `"a12b"` wird zu `a`, `11`, `22`, `b`, also `"a1122b"`.
```

```aufgabe
id: rk-str-code-umgedreht-ohne
titel: Umdrehen und ein Zeichen weglassen
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, SS 2020, Aufgabe 3 (reverseStringFilterLetter, umformuliert)
angabe: |
  Implementiere `String umgedrehtOhne(String text, char weg)` **rekursiv** und ohne Schleifen. Die Methode liefert
  die Zeichen von `text` in umgekehrter Reihenfolge, lässt dabei aber jedes Zeichen weg, das gleich `weg` ist.
  Vorbedingung: `text != null`.

  Beispiele: `umgedrehtOhne("Mappe", 'p')` liefert `"eaM"`, `umgedrehtOhne("xyx", 'x')` liefert `"y"`,
  `umgedrehtOhne("Java", 'q')` liefert `"avaJ"`.
teile:
  - typ: code
    vorlage: |
      public class Filter {
          public static String umgedrehtOhne(String text, char weg) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Filter {
          public static String umgedrehtOhne(String text, char weg) {
              if (text.isEmpty()) {
                  return "";
              }
              String rest = umgedrehtOhne(text.substring(1), weg);
              if (text.charAt(0) == weg) {
                  return rest;
              }
              return rest + text.charAt(0);
          }
      }
    tests:
      - { aufruf: "umgedrehtOhne(\"Mappe\", 'p')", erwartet: "\"eaM\"" }
      - { aufruf: "umgedrehtOhne(\"Java\", 'q')", erwartet: "\"avaJ\"", beschreibung: "nichts wegzulassen" }
      - { aufruf: "umgedrehtOhne(\"xyx\", 'x')", erwartet: "\"y\"" }
      - { aufruf: "umgedrehtOhne(\"\", 'a')", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "umgedrehtOhne(\"AAAA\", 'A')", erwartet: "\"\"", versteckt: true }
    regeln: { keineSchleifenIn: [umgedrehtOhne], rekursiv: [umgedrehtOhne], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true }
    fehler:
      - { wert: 2, meldung: "Kommt `Java` unverändert zurück? Das eigene Zeichen muss **hinter** das Ergebnis des Rests, damit sich die Reihenfolge umdreht." }
      - { wert: 1, meldung: "Erscheint ein `p` im Ergebnis? Ist das erste Zeichen gleich `weg`, gibst du nur das Ergebnis des Rests zurück." }
hinweise:
  - Für die umgekehrte Reihenfolge steht das eigene Zeichen hinter dem Ergebnis des Rests.
  - Ist das erste Zeichen gleich `weg`, liefert der Aufruf nur das Ergebnis des Rests.
loesung: |
  **Ansatz:** Muster „umdrehen“ aus dem Beispiel, ergänzt um eine Bedingung, die das Zeichen weglässt.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  String rest = umgedrehtOhne(text.substring(1), weg);
  if (text.charAt(0) == weg) {
      return rest;
  }
  return rest + text.charAt(0);
  ```
  ---
  Probe `"Mappe"`, `'p'`: Rückweg `e`, dann zwei `p` übersprungen, dann `ea`, dann `eaM`.
```

```aufgabe
id: rk-str-code-ziffer-dabei
titel: Kommt eine Ziffer vor?
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Implementiere `boolean hatZiffer(String s)` **rekursiv** und ohne Schleifen. Die Methode liefert `true`, wenn in `s`
  mindestens eine Ziffer `0` bis `9` vorkommt, sonst `false`. Vorbedingung: `s != null`.

  Beispiele: `hatZiffer("EP1")` liefert `true`, `hatZiffer("Java")` liefert `false`, `hatZiffer("")` liefert `false`.
teile:
  - typ: code
    vorlage: |
      public class Ziffer {
          public static boolean hatZiffer(String s) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Ziffer {
          public static boolean hatZiffer(String s) {
              if (s.isEmpty()) {
                  return false;
              }
              char c = s.charAt(0);
              if (c >= '0' && c <= '9') {
                  return true;
              }
              return hatZiffer(s.substring(1));
          }
      }
    tests:
      - { aufruf: "hatZiffer(\"EP1\")", erwartet: "true" }
      - { aufruf: "hatZiffer(\"Java\")", erwartet: "false" }
      - { aufruf: "hatZiffer(\"\")", erwartet: "false", beschreibung: "leerer String" }
      - { aufruf: "hatZiffer(\"7abc\")", erwartet: "true", beschreibung: "Ziffer ganz vorne" }
      - { aufruf: "hatZiffer(\"a b c\")", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [hatZiffer], rekursiv: [hatZiffer], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Wird die `1` am Ende von `\"EP1\"` gefunden? Gibst du das Ergebnis des Selbstaufrufs mit `return hatZiffer(s.substring(1));` zurück? Ein Aufruf ohne `return` wirft sein Ergebnis weg." }
      - { wert: 2, meldung: "Liefert dein Basisfall `true`? Im leeren String kommt keine Ziffer vor. Er muss `false` liefern." }
hinweise:
  - Es gibt zwei Basisfälle. Der leere String liefert `false`, eine Ziffer an erster Stelle liefert sofort `true`.
  - Sonst entscheidet der Rest. Gib das Ergebnis von `hatZiffer(s.substring(1))` unverändert zurück.
loesung: |
  **Ansatz:** Prüf-Muster mit zwei Basisfällen. Sobald eine Ziffer gefunden ist, steht das Ergebnis fest.
  ---
  ```java
  if (s.isEmpty()) {
      return false;
  }
  char c = s.charAt(0);
  if (c >= '0' && c <= '9') {
      return true;
  }
  return hatZiffer(s.substring(1));
  ```
  ---
  Kürzer geht es mit `||`: `return (c >= '0' && c <= '9') || hatZiffer(s.substring(1));`. Wegen der Kurzschlussauswertung endet die Rekursion dann ebenfalls beim ersten Treffer.
  ---
  Probe `"EP1"`: `E` nein, `P` nein, `1` ja. Ergebnis `true` nach drei Aufrufen.
```

```aufgabe
id: rk-str-code-sterne-vorne
titel: Alle Sterne nach vorne
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021, Aufgabe 4 (shiftTs, umformuliert)
angabe: |
  Implementiere `String sterneNachVorne(String text)` **rekursiv** und ohne Schleifen. Die Methode liefert einen neuen
  String, in dem alle `*` am Anfang stehen. Die übrigen Zeichen folgen **in ihrer ursprünglichen Reihenfolge**.
  Vorbedingung: `text != null`.

  Beispiele: `sterneNachVorne("a*b*")` liefert `"**ab"`, `sterneNachVorne("*")` liefert `"*"`,
  `sterneNachVorne("xy")` liefert `"xy"`, `sterneNachVorne("ab**c*d")` liefert `"***abcd"`.
teile:
  - typ: code
    vorlage: |
      public class Sterne {
          public static String sterneNachVorne(String text) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Sterne {
          public static String sterneNachVorne(String text) {
              if (text.isEmpty()) {
                  return "";
              }
              int n = text.length();
              char letztes = text.charAt(n - 1);
              String vorne = sterneNachVorne(text.substring(0, n - 1));
              if (letztes == '*') {
                  return "*" + vorne;
              }
              return vorne + letztes;
          }
      }
    tests:
      - { aufruf: "sterneNachVorne(\"a*b*\")", erwartet: "\"**ab\"" }
      - { aufruf: "sterneNachVorne(\"xy\")", erwartet: "\"xy\"", beschreibung: "ohne Sterne" }
      - { aufruf: "sterneNachVorne(\"*\")", erwartet: "\"*\"" }
      - { aufruf: "sterneNachVorne(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "sterneNachVorne(\"ab**c*d\")", erwartet: "\"***abcd\"" }
      - { aufruf: "sterneNachVorne(\"*xy*z**\")", erwartet: "\"****xyz\"", versteckt: true }
    regeln: { keineSchleifenIn: [sterneNachVorne], rekursiv: [sterneNachVorne], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Kommt `**ba` heraus? Wer das **erste** Zeichen abspaltet und einen Nicht-Stern hinten anhängt, dreht die Reihenfolge der übrigen Zeichen um. Spalte stattdessen das **letzte** Zeichen ab." }
      - { wert: 2, meldung: "Kommt `yx` heraus? Die Reihenfolge der Nicht-Sterne muss erhalten bleiben. Arbeite den String von hinten ab." }
hinweise:
  - 'Versuche es zuerst mit dem ersten Zeichen und prüfe `"a*b*"` von Hand. Wo landet das `a`?'
  - Spalte das **letzte** Zeichen ab, mit `text.charAt(n - 1)` und `text.substring(0, n - 1)`. Das Ergebnis für den vorderen Teil hat schon die Form „Sterne, dann andere Zeichen“.
  - Ein Stern kommt ganz nach vorne. Ein anderes Zeichen kommt ganz nach hinten, denn es war das letzte.
loesung: |
  **Ansatz:** Das Ergebnis eines Selbstaufrufs hat immer die Form „alle Sterne, dann die anderen Zeichen in alter Reihenfolge“. Das neue Zeichen muss so eingefügt werden, dass diese Form erhalten bleibt.
  ---
  Spaltet man das **erste** Zeichen ab, müsste ein Nicht-Stern zwischen die Sterne und die übrigen Zeichen des Rests. Hängt man ihn hinten an, entsteht für `"a*b*"` das falsche `"**ba"`.
  ---
  Spaltet man das **letzte** Zeichen ab, ist es einfach. Ein Stern kommt vor das Ergebnis, ein anderes Zeichen dahinter. Es war ja das letzte und bleibt das letzte.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  int n = text.length();
  char letztes = text.charAt(n - 1);
  String vorne = sterneNachVorne(text.substring(0, n - 1));
  if (letztes == '*') {
      return "*" + vorne;
  }
  return vorne + letztes;
  ```
  ---
  Probe `"a*b*"`: `sterneNachVorne("a*b")` ist `"*ab"`. Das letzte Zeichen ist ein Stern, also `"**ab"`.
```

Nicht jede String-Rekursion schneidet nur vorne ab. Bei einem **Palindrom** vergleicht man das erste mit dem letzten
Zeichen. Ein Palindrom ist ein Wort, das vorwärts und rückwärts gleich gelesen wird, etwa `anna` oder `kajak`. Sind
die beiden äußeren Zeichen gleich, entscheidet der innere Teil `s.substring(1, s.length() - 1)`. Er ist um **zwei**
Zeichen kürzer. Darum braucht man zwei Basisfälle: die Länge 0 und die Länge 1. Ein Wort mit höchstens einem Zeichen
ist immer ein Palindrom.

```aufgabe
id: rk-str-code-palindrom
titel: Ist das Wort ein Palindrom?
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021, Aufgabe 4 (isStringPalindrome, umformuliert)
angabe: |
  Implementiere `boolean istPalindrom(String text)` **rekursiv** und ohne Schleifen. Die Methode liefert `true`,
  wenn `text` von vorne und von hinten gelesen gleich ist. Groß- und Kleinbuchstaben gelten als verschieden.
  Vorbedingung: `text != null`.

  Beispiele: `istPalindrom("neben")` und `istPalindrom("abba")` liefern `true`, `istPalindrom("radio")` liefert
  `false`, `istPalindrom("")` und `istPalindrom("x")` liefern `true`.
teile:
  - typ: code
    vorlage: |
      public class Palindrom {
          public static boolean istPalindrom(String text) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Palindrom {
          public static boolean istPalindrom(String text) {
              if (text.length() <= 1) {
                  return true;
              }
              if (text.charAt(0) != text.charAt(text.length() - 1)) {
                  return false;
              }
              return istPalindrom(text.substring(1, text.length() - 1));
          }
      }
    tests:
      - { aufruf: "istPalindrom(\"neben\")", erwartet: "true", beschreibung: "ungerade Länge" }
      - { aufruf: "istPalindrom(\"abba\")", erwartet: "true", beschreibung: "gerade Länge" }
      - { aufruf: "istPalindrom(\"radio\")", erwartet: "false" }
      - { aufruf: "istPalindrom(\"\")", erwartet: "true", beschreibung: "leerer String" }
      - { aufruf: "istPalindrom(\"x\")", erwartet: "true" }
      - { aufruf: "istPalindrom(\"abca\")", erwartet: "false", versteckt: true }
      - { aufruf: "istPalindrom(\"Anna\")", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [istPalindrom], rekursiv: [istPalindrom], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true }
    fehler:
      - { wert: 2, meldung: "Bei gerader Länge bleibt am Ende der leere String übrig. Fängt dein Basisfall auch die Länge 0 ab?" }
      - { wert: 4, meldung: "Der leere String ist ein Palindrom. `charAt(0)` darfst du für ihn nicht aufrufen." }
      - { wert: "keinStringGleichOperator", meldung: "Strings vergleicht man nicht mit `==`. Vergleiche einzelne Zeichen mit `charAt`, die sind primitive `char`-Werte." }
hinweise:
  - Vergleiche das erste Zeichen `text.charAt(0)` mit dem letzten `text.charAt(text.length() - 1)`.
  - Sind sie verschieden, ist das Ergebnis sofort `false`. Sonst entscheidet `text.substring(1, text.length() - 1)`.
  - Basisfall `text.length() <= 1` deckt die Längen 0 und 1 auf einmal ab.
loesung: |
  **Ansatz:** Von beiden Enden zur Mitte. Jeder Aufruf vergleicht das äußere Paar und gibt den inneren Teil weiter.
  ---
  ```java
  if (text.length() <= 1) {
      return true;
  }
  if (text.charAt(0) != text.charAt(text.length() - 1)) {
      return false;
  }
  return istPalindrom(text.substring(1, text.length() - 1));
  ```
  ---
  Der Fortschritt verkürzt um zwei Zeichen. Bei gerader Länge endet die Rekursion bei 0, bei ungerader bei 1.
  ---
  Probe `"neben"`: `n` gleich `n`, `e` gleich `e`, übrig `"b"` mit Länge 1, also `true`.
```

```aufgabe
id: rk-str-code-zahlwert
titel: Großbuchstaben durch ihren Zahlenwert ersetzen
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, SS 2020, Aufgabe 4 (printCharsGreater100, umformuliert)
angabe: |
  Implementiere `String zahlwertGross(String text)` **rekursiv** und ohne Schleifen. Die Methode ersetzt jeden
  Großbuchstaben `A` bis `Z` durch seinen Zahlenwert in runden Klammern. Der Zahlenwert ist die Nummer, unter der Java
  das Zeichen speichert, zum Beispiel 65 für `A` (siehe [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char)).
  Alle anderen Zeichen bleiben stehen.
  Vorbedingung: `text != null`.

  Beispiele: `zahlwertGross("aBc")` liefert `"a(66)c"`, `zahlwertGross("EP1")` liefert `"(69)(80)1"`,
  `zahlwertGross("ok")` liefert `"ok"`.
teile:
  - typ: code
    vorlage: |
      public class Zahlwert {
          public static String zahlwertGross(String text) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Zahlwert {
          public static String zahlwertGross(String text) {
              if (text.isEmpty()) {
                  return "";
              }
              char c = text.charAt(0);
              String rest = zahlwertGross(text.substring(1));
              if (c >= 'A' && c <= 'Z') {
                  return "(" + (int) c + ")" + rest;
              }
              return c + rest;
          }
      }
    tests:
      - { aufruf: "zahlwertGross(\"aBc\")", erwartet: "\"a(66)c\"" }
      - { aufruf: "zahlwertGross(\"EP1\")", erwartet: "\"(69)(80)1\"" }
      - { aufruf: "zahlwertGross(\"ok\")", erwartet: "\"ok\"", beschreibung: "keine Großbuchstaben" }
      - { aufruf: "zahlwertGross(\"\")", erwartet: "\"\"", beschreibung: "leerer String", versteckt: true }
    regeln: { keineSchleifenIn: [zahlwertGross], rekursiv: [zahlwertGross], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Erscheint `(B)` statt `(66)`? `\"(\" + c` hängt das Zeichen an. Für die Zahl brauchst du den Cast `(int) c`." }
hinweise:
  - Der Zahlenwert eines Zeichens ist `(int) c`. In `"(" + (int) c + ")"` wird diese Zahl als Text angehängt.
  - Basisfall ist der leere String. Das eigene Stück steht vor dem Ergebnis des Rests.
loesung: |
  **Ansatz:** String-Muster. Für einen Großbuchstaben ist das eigene Stück `"(" + (int) c + ")"`, sonst das Zeichen selbst.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  char c = text.charAt(0);
  String rest = zahlwertGross(text.substring(1));
  if (c >= 'A' && c <= 'Z') {
      return "(" + (int) c + ")" + rest;
  }
  return c + rest;
  ```
  ---
  `'B'` hat den Wert 66, `'E'` 69 und `'P'` 80. Ohne den Cast würde `"(" + c` das Zeichen anhängen, nicht die Zahl.
```

```aufgabe
id: rk-str-code-ohne-wiederholung
titel: Wiederholte Zeichen zusammenfassen
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021, Aufgabe 3 (removeMultipleChars, umformuliert)
angabe: |
  Implementiere `String ohneWiederholung(String text)` **rekursiv** und ohne Schleifen. Folgen mehrere gleiche Zeichen
  direkt aufeinander, bleibt davon nur eines übrig. Das kann an mehreren Stellen passieren. Vorbedingung: `text != null`.

  Beispiele: `ohneWiederholung("Kaffee")` liefert `"Kafe"`, `ohneWiederholung("aaabaa")` liefert `"aba"`,
  `ohneWiederholung("1 22  3")` liefert `"1 2 3"`.
teile:
  - typ: code
    vorlage: |
      public class Wiederholung {
          public static String ohneWiederholung(String text) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Wiederholung {
          public static String ohneWiederholung(String text) {
              if (text.length() <= 1) {
                  return text;
              }
              String rest = ohneWiederholung(text.substring(1));
              if (text.charAt(0) == text.charAt(1)) {
                  return rest;
              }
              return text.charAt(0) + rest;
          }
      }
    tests:
      - { aufruf: "ohneWiederholung(\"Kaffee\")", erwartet: "\"Kafe\"" }
      - { aufruf: "ohneWiederholung(\"aaabaa\")", erwartet: "\"aba\"" }
      - { aufruf: "ohneWiederholung(\"1 22  3\")", erwartet: "\"1 2 3\"" }
      - { aufruf: "ohneWiederholung(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "ohneWiederholung(\"x\")", erwartet: "\"x\"", versteckt: true }
      - { aufruf: "ohneWiederholung(\"zzzz\")", erwartet: "\"z\"", versteckt: true }
    regeln: { keineSchleifenIn: [ohneWiederholung], rekursiv: [ohneWiederholung], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche das erste mit dem **zweiten** Zeichen. Sind sie gleich, fällt das erste weg, denn das gleiche Zeichen kommt im Rest noch vor." }
      - { wert: 4, meldung: "Für den leeren String und für einen String mit einem Zeichen gibt es kein zweites Zeichen. Beide gehören in den Basisfall." }
hinweise:
  - Vergleiche `text.charAt(0)` mit `text.charAt(1)`. Dafür muss der String mindestens zwei Zeichen haben.
  - Sind die beiden gleich, lass das erste weg und liefere nur das Ergebnis des Rests. Der Rest beginnt ja mit demselben Zeichen.
loesung: |
  **Ansatz:** Ein Zeichen ist überflüssig, wenn direkt danach dasselbe Zeichen kommt. Dann vertreten die späteren Zeichen es.
  ---
  Basisfall: Länge 0 oder 1. Da gibt es nichts zusammenzufassen, der String bleibt, wie er ist.
  ---
  ```java
  if (text.length() <= 1) {
      return text;
  }
  String rest = ohneWiederholung(text.substring(1));
  if (text.charAt(0) == text.charAt(1)) {
      return rest;
  }
  return text.charAt(0) + rest;
  ```
  ---
  Probe `"aaabaa"`: Die ersten beiden `a` fallen weg, das dritte bleibt. Dann `b`, dann von `aa` nur das letzte. Ergebnis `"aba"`.
```

```aufgabe
id: rk-str-rf-implementierungen
titel: Vier Versuche, einen String umzudrehen
niveau: 3
lernziel: 7
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (rekursive Implementierungen beurteilen), Inhalt neu
angabe: |
  Jede Methode soll `s` umgedreht zurückgeben, etwa `"cba"` für `"abc"`. Vorbedingung: `s != null`.

  ```java
  // A
  static String a(String s) {
      if (s.isEmpty()) return s;
      return a(s.substring(1)) + s.charAt(0);
  }
  // B
  static String b(String s) {
      if (s.length() <= 1) return s;
      return s.charAt(s.length() - 1) + b(s.substring(0, s.length() - 1));
  }
  // C
  static String c(String s) {
      if (s.length() == 1) return s;
      return c(s.substring(1)) + s.charAt(0);
  }
  // D
  static String d(String s) {
      if (s.isEmpty()) return s;
      return s.charAt(0) + d(s.substring(1));
  }
  ```

  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: A liefert für jeden erlaubten String das richtige Ergebnis.
        richtig: true
        erklaerung: Umgedrehter Rest plus erstes Zeichen hinten. Der leere String ist abgedeckt.
      - text: B liefert für jeden erlaubten String das richtige Ergebnis.
        richtig: true
        erklaerung: Das letzte Zeichen kommt nach vorne, dahinter folgt der umgedrehte vordere Teil. Der Basisfall deckt die Längen 0 und 1 ab.
      - text: C liefert für jeden erlaubten String das richtige Ergebnis.
        richtig: false
        erklaerung: '`c("")` wirft eine Exception, weil der Basisfall nur die Länge 1 abfängt und dann `charAt(0)` auf `""` läuft.'
      - text: D terminiert für jeden erlaubten String, liefert aber nicht das gewünschte Ergebnis.
        richtig: true
        erklaerung: D setzt das erste Zeichen vor den Rest und liefert den String unverändert zurück.
    fehler:
      - wert: [r, r, r, r]
        meldung: Prüfe C mit dem leeren String. Was passiert bei `c("")`?
      - wert: [r, f, f, r]
        meldung: Probiere B mit `"abc"` aus. Das letzte Zeichen `c` kommt nach vorne, dahinter `b("ab")`.
hinweise:
  - Probiere jede Methode mit `""`, `"x"` und `"abc"` aus.
  - Achte bei jedem Basisfall darauf, welche Längen er abdeckt.
loesung: |
  **Ansatz:** Jede Fassung mit den Randfällen `""` und einem Zeichen sowie mit `"abc"` testen.
  ---
  A: `a("abc") = a("bc") + 'a' = "cb" + 'a' = "cba"`. Mit `""` stimmt der Basisfall. Richtig.
  ---
  B: `b("abc") = 'c' + b("ab") = 'c' + ('b' + "a") = "cba"`. Die Längen 0 und 1 liefern `s`. Richtig.
  ---
  C: `c("")` landet nicht im Basisfall und ruft `charAt(0)` auf. Es folgt eine `StringIndexOutOfBoundsException`. D liefert `"abc"` unverändert, endet aber immer. Aussagen 1, 2 und 4 sind richtig.
```

```reflexion
frage: Beim Umdrehen steht das eigene Zeichen hinter dem Ergebnis des Rests, bei `nurZiffern` davor. Woran erkennst du an einer Angabe, welche der beiden Stellen richtig ist?
antwort: |
  Ich frage mich, wo das erste Zeichen im fertigen Ergebnis stehen soll. Soll die Reihenfolge erhalten bleiben, steht
  das erste Zeichen auch im Ergebnis vor allen späteren Zeichen. Dann kommt das eigene Stück vor das Ergebnis des
  Rests. Soll sich die Reihenfolge umdrehen, gehört das erste Zeichen ganz ans Ende, also hinter das Ergebnis des
  Rests. Am schnellsten prüfe ich das mit einem Beispiel aus zwei Zeichen, etwa `"ab"`.
```

## Zusätzliche Parameter: Index, Zähler und zweiter String

```aufgabe
id: rk-zp-check-paare
titel: Nachbarn vergleichen mit einer Schleife
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? Schleifen über die Positionen eines Strings kennst du aus
  [4.5 Strings Zeichen für Zeichen durchlaufen](/lernen/ep1/schleifen/strings-zeichen-fuer-zeichen-durchlaufen).
teile:
  - typ: ausgabe
    code: |
      String s = "aabccca";
      int paare = 0;
      for (int i = 2; i < s.length() - 1; i++) {
          if (s.charAt(i) == s.charAt(i + 1)) {
              paare++;
          }
      }
      System.out.println(paare);
    loesung: |
      2
    fehler:
      - wert: "3"
        meldung: Die Schleife beginnt bei Index 2. Das Paar `aa` an den Indizes 0 und 1 wird nicht mehr betrachtet.
loesung: |
  `i` läuft von 2 bis 5. Verglichen werden die Paare `bc`, `cc`, `cc` und `ca`.
  ---
  Gleich sind die beiden `cc`-Paare. Ausgabe `2`.
```

Bisher hatte jede Methode genau die Parameter, die die Aufgabe beschreibt, und der String oder die Zahl wurde mit
jedem Aufruf kleiner. Oft gibt die Angabe aber einen **zusätzlichen Parameter** vor, der den Fortschritt trägt. Die
drei häufigsten Arten sind:

- Ein **Index** gibt an, ab welcher Position noch gearbeitet wird. Der String selbst bleibt unverändert.
- Ein **Zähler** wird bei jedem Treffer kleiner.
- Ein **zweiter String** wird im Gleichschritt mit dem ersten kürzer.

### Ein Index statt eines kürzeren Strings

Ein Index-Parameter ist wie die Laufvariable `i` einer Schleife. Statt `s.substring(1)` übergibt der Selbstaufruf
denselben String und `index + 1`. Der Vorteil: Die Methode weiß jederzeit, an welcher **Position** sie gerade ist.
Der Basisfall ist erreicht, wenn der Index am Ende des Strings angekommen ist.

:::beispiel[Gleiche Nachbarn ab einer Position zählen]
```java
public class Paare {
    public static int gleichePaare(String s, int index) {
        if (index >= s.length() - 1) {
            return 0;
        }
        int rest = gleichePaare(s, index + 1);
        if (s.charAt(index) == s.charAt(index + 1)) {
            return 1 + rest;
        }
        return rest;
    }

    public static void main(String[] args) {
        System.out.println(gleichePaare("aabccca", 0));
        System.out.println(gleichePaare("aabccca", 2));
    }
}
```

- Gezählt werden Paare an den Positionen `index` und `index + 1`. Das letzte Paar beginnt beim Index `s.length() - 2`.
- Der Basisfall `index >= s.length() - 1` greift, sobald kein vollständiges Paar mehr übrig ist. Dann wäre `index + 1` kein gültiger Index mehr.
- Der Fortschritt ist `index + 1`. Der String `s` wird unverändert weitergegeben.

`gleichePaare("aabccca", 0)` prüft die Paare an den Positionen 0 bis 5: `aa` ja, `ab` nein, `bc` nein, `cc` ja, `cc`
ja, `ca` nein. Ergebnis 3. Der Aufruf mit Index 6 ist der Basisfall. Mit Startindex 2 entfällt das Paar `aa`, das
Ergebnis ist 2, wie bei der Schleife aus der Vorwissen-Frage.
:::

Wer die Methode aufruft, legt mit dem Startwert fest, ab wo gezählt wird. Für den ganzen String ist das der Index 0.
Diesen ersten Aufruf nennt man den **Startaufruf**. Im Programmiertest steht der Startaufruf meist in den Testfällen,
etwa `gleichePaare(text, 0)`.

```aufgabe
id: rk-zp-gefuehrt
titel: Jedes zweite Zeichen mit Index
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben ist

  ```java
  public static String jedesZweite(String s, int i) {
      if (i >= s.length()) {
          return "";
      }
      return s.charAt(i) + jedesZweite(s, i + 2);
  }
  ```

  Was liefert `jedesZweite("Rekursion", 0)`? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Zweite {
          public static String jedesZweite(String s, int i) {
              if (i >= s.length()) {
                  return "";
              }
              return s.charAt(i) + jedesZweite(s, i + 2);
          }

          public static void main(String[] args) {
              System.out.println(jedesZweite("Rekursion", 0));
          }
      }
    codeAnzeigen: false
    loesung: |
      Rkrin
    fehler:
      - wert: "euso"
        meldung: Der Startindex ist 0, also beginnt das Ergebnis mit dem Zeichen an Position 0, dem `R`. Gelesen werden die Positionen 0, 2, 4, 6 und 8.
      - wert: "nirkR"
        meldung: Das Zeichen `s.charAt(i)` steht **vor** dem Ergebnis des Selbstaufrufs. Die Reihenfolge bleibt also erhalten und dreht sich nicht um.
gefuehrt:
  - text: Wie lang ist `"Rekursion"`, also bis zu welchem Index gibt es Zeichen?
    teil: { typ: zahl, label: Länge, loesung: "9" }
    erklaerung: Neun Zeichen, gültige Indizes 0 bis 8.
  - text: Welche Werte nimmt `i` in den Aufrufen an, bis der Basisfall greift? Gib den Wert im Basisfall an.
    teil: { typ: zahl, loesung: "10" }
    erklaerung: '`i` läuft 0, 2, 4, 6, 8, 10. Erst bei 10 gilt `i >= 9`.'
  - text: Welches Zeichen steht an Index 8?
    teil:
      typ: auswahl
      optionen: ['`n`', '`o`', '`i`']
      richtig: [0]
    erklaerung: 'R0 e1 k2 u3 r4 s5 i6 o7 n8. An Index 8 steht `n`.'
hinweise:
  - Schreib die Indizes unter die Buchstaben. Gelesen wird jede zweite Position ab 0.
loesung: |
  **Ansatz:** Der String bleibt gleich, nur `i` wandert in Zweierschritten weiter.
  ---
  Gelesen werden die Indizes 0, 2, 4, 6 und 8: `R`, `k`, `r`, `i`, `n`. Bei `i = 10` liefert der Basisfall `""`.
  ---
  Weil das Zeichen vor dem Ergebnis des Selbstaufrufs steht, bleibt die Reihenfolge erhalten: `Rkrin`.
```

:::achtung[Das Paar am Ende läuft aus dem String hinaus]
Eine typische falsche Fassung von `gleichePaare`:

```java
if (index >= s.length()) {      // falsch: eine Position zu spät
    return 0;
}
int rest = gleichePaare(s, index + 1);
if (s.charAt(index) == s.charAt(index + 1)) { ... }
```

Bei `"aab"` kommt irgendwann der Aufruf mit `index = 2`. Der Basisfall greift noch nicht, denn `2 >= 3` ist falsch.
Dann greift `s.charAt(3)` auf eine Position hinter dem String zu, und Java wirft eine
`StringIndexOutOfBoundsException`. Wer auf `index + 1` zugreift, muss schon bei `index >= s.length() - 1` aufhören.
:::

:::achtung[index++ als Argument]
Statt `index + 1` schreibt man aus Gewohnheit von Schleifen:

```java
return gleichePaare(s, index++);     // falsch
```

`index++` liefert den **alten** Wert von `index` und erhöht erst danach die eigene Variable. Der Selbstaufruf bekommt
also denselben Index wie der aktuelle Aufruf. Es gibt keinen Fortschritt, und nach vielen tausend Aufrufen folgt ein
`StackOverflowError`. Im Selbstaufruf schreibt man immer `index + 1`. Das ändert keine Variable, sondern berechnet nur
den neuen Wert.
:::

```aufgabe
id: rk-zp-auswahl-start
titel: Der richtige Startaufruf
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Methode `int zaehleAb(String s, char c, int index)` zählt, wie oft `c` in `s` an den Positionen `index` bis
  zum Ende vorkommt. Mit welchem Aufruf zählst du die `e` im **ganzen** String `w`?
teile:
  - typ: auswahl
    optionen: ["`zaehleAb(w, 'e', 0)`", "`zaehleAb(w, 'e', 1)`", "`zaehleAb(w, 'e', w.length())`"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mit Startindex 1 wird das Zeichen an Position 0 nicht mehr betrachtet. Ein `e` ganz vorne ginge verloren.
      - wert: 2
        meldung: '`w.length()` ist schon hinter dem letzten Zeichen. Dieser Aufruf landet sofort im Basisfall und liefert 0.'
hinweise:
  - Die erste Position eines Strings hat den Index 0.
loesung: |
  **Ansatz:** Der Startwert des Index legt fest, ab welcher Position gezählt wird.
  ---
  Für den ganzen String beginnt man bei der ersten Position, also Index 0: `zaehleAb(w, 'e', 0)`.
```

```aufgabe
id: rk-zp-code-ziffernpaare
titel: Aufsteigende Ziffernpaare ab einem Index
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2023, Aufgabe 4 (countNOrderedLetters, umformuliert)
angabe: |
  Implementiere `int aufsteigendePaare(String text, int index)` **rekursiv** und ohne Schleifen. Die Methode zählt
  alle Paare direkt benachbarter Zeichen, die **beide Ziffern** sind und bei denen die zweite Ziffer **größer** als die
  erste ist. Gezählt werden nur Paare, deren erstes Zeichen an Position `index` oder später steht. Paare dürfen sich
  überlappen. Vorbedingung: `text != null`, `text.length() > 0`, `index` ist ein gültiger Index von `text`.

  Beispiel: In `"1293a45"` sind die Paare `12`, `29` und `45` aufsteigend. `aufsteigendePaare("1293a45", 0)` liefert 3,
  `aufsteigendePaare("1293a45", 1)` liefert 2, `aufsteigendePaare("1293a45", 6)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Ziffernpaare {
          public static int aufsteigendePaare(String text, int index) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ziffernpaare {
          public static int aufsteigendePaare(String text, int index) {
              if (index >= text.length() - 1) {
                  return 0;
              }
              char a = text.charAt(index);
              char b = text.charAt(index + 1);
              int rest = aufsteigendePaare(text, index + 1);
              if (a >= '0' && a <= '9' && b >= '0' && b <= '9' && b > a) {
                  return 1 + rest;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "aufsteigendePaare(\"1293a45\", 0)", erwartet: "3" }
      - { aufruf: "aufsteigendePaare(\"1293a45\", 1)", erwartet: "2" }
      - { aufruf: "aufsteigendePaare(\"1293a45\", 6)", erwartet: "0", beschreibung: "letzte Position" }
      - { aufruf: "aufsteigendePaare(\"x\", 0)", erwartet: "0", beschreibung: "nur ein Zeichen" }
      - { aufruf: "aufsteigendePaare(\"a9b8\", 0)", erwartet: "0", beschreibung: "Buchstaben zählen nicht", versteckt: true }
      - { aufruf: "aufsteigendePaare(\"0123456789\", 2)", erwartet: "7", versteckt: true }
    regeln: { keineSchleifenIn: [aufsteigendePaare], rekursiv: [aufsteigendePaare], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 3, meldung: "Beim letzten Index gibt es kein Paar mehr. Dein Basisfall muss schon bei `index >= text.length() - 1` greifen, sonst greift `charAt(index + 1)` ins Leere." }
      - { wert: 5, meldung: "Beide Zeichen des Paars müssen Ziffern sein. `'9' > 'a'` ist zum Beispiel falsch, aber `'b' > '9'` ist wahr." }
hinweise:
  - Das Paar an `index` besteht aus `text.charAt(index)` und `text.charAt(index + 1)`.
  - Basisfall, wenn kein vollständiges Paar mehr da ist. Sonst Beitrag 1 oder 0 plus Selbstaufruf mit `index + 1`.
  - Ziffern als Zeichen vergleicht man direkt, `'2' < '9'` gilt, weil die Zeichencodes der Ziffern aufsteigend sind.
loesung: |
  **Ansatz:** Index-Muster wie bei `gleichePaare`. Der Beitrag ist 1, wenn beide Zeichen Ziffern sind und die zweite größer ist.
  ---
  ```java
  if (index >= text.length() - 1) {
      return 0;
  }
  char a = text.charAt(index);
  char b = text.charAt(index + 1);
  int rest = aufsteigendePaare(text, index + 1);
  if (a >= '0' && a <= '9' && b >= '0' && b <= '9' && b > a) {
      return 1 + rest;
  }
  return rest;
  ```
  ---
  Probe ab Index 0: `12` ja, `29` ja, `93` nein, `3a` nein, `a4` nein, `45` ja. Ergebnis 3.
```

### Ein Zähler als Parameter

Manche Methoden bekommen eine **Anzahl** mit, die beim Selbstaufruf angepasst wird. Ein Beispiel aus einem
Beispiel-Programmiertest (2020) und den Rekursionsübungen im VoWi, dem Wiki der Studierenden der TU Wien: Kommt ein Zeichen
**genau** `count`-mal vor? Bei jedem Treffer wird der Zähler um 1 kleiner. Am Ende
des Strings muss er genau 0 sein.

```aufgabe
id: rk-zp-ausgabe-genau
titel: Genau so oft?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Genau {
          public static boolean genau(String s, char c, int count) {
              if (s.isEmpty()) {
                  return count == 0;
              }
              if (s.charAt(0) == c) {
                  return genau(s.substring(1), c, count - 1);
              }
              return genau(s.substring(1), c, count);
          }

          public static void main(String[] args) {
              System.out.println(genau("Mississippi", 's', 4));
              System.out.println(genau("Mississippi", 'p', 1));
              System.out.println(genau("", 'x', 0));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "true\ntrue\ntrue"
        meldung: '`p` kommt zweimal vor. Der Zähler sinkt von 1 auf -1, und am Ende ist `-1 == 0` falsch.'
      - wert: "true\nfalse\nfalse"
        meldung: Im leeren String kommt `x` genau 0-mal vor. Der Basisfall liefert `0 == 0`, also `true`.
hinweise:
  - Zähle die Treffer und vergleiche am Ende mit der verlangten Anzahl. Der Zähler darf dabei auch negativ werden.
loesung: |
  **Ansatz:** Bei jedem Treffer sinkt `count` um 1. Im Basisfall wird geprüft, ob genau 0 übrig ist.
  ---
  `Mississippi` enthält vier `s`. Der Zähler sinkt von 4 auf 0, also `true`. Es enthält zwei `p`, der Zähler sinkt von 1 auf -1, also `false`.
  ---
  Der leere String erreicht sofort den Basisfall mit `count = 0`, also `true`.
```

```aufgabe
id: rk-zp-code-genau
titel: Genau n Vorkommen eines Zeichens
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: VoWi, Übungen zur Rekursion (isPresentNTimes, umformuliert)
angabe: |
  Implementiere `boolean genauNMal(String s, char c, int n)` **rekursiv** und ohne Schleifen. Die Methode liefert
  `true`, wenn `c` in `s` genau `n`-mal vorkommt. Die Rekursion soll **sofort** `false` liefern, sobald mehr als `n`
  Treffer gefunden wurden. Vorbedingung: `s != null`, `n ≥ 0`.

  Beispiele: `genauNMal("Banane", 'n', 2)` liefert `true`, `genauNMal("Banane", 'a', 1)` liefert `false`,
  `genauNMal("Java", 'x', 0)` liefert `true`.
teile:
  - typ: code
    vorlage: |
      public class GenauN {
          public static boolean genauNMal(String s, char c, int n) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class GenauN {
          public static boolean genauNMal(String s, char c, int n) {
              if (n < 0) {
                  return false;
              }
              if (s.isEmpty()) {
                  return n == 0;
              }
              if (s.charAt(0) == c) {
                  return genauNMal(s.substring(1), c, n - 1);
              }
              return genauNMal(s.substring(1), c, n);
          }
      }
    tests:
      - { aufruf: "genauNMal(\"Banane\", 'n', 2)", erwartet: "true" }
      - { aufruf: "genauNMal(\"Banane\", 'a', 1)", erwartet: "false", beschreibung: "zu viele Treffer" }
      - { aufruf: "genauNMal(\"Java\", 'x', 0)", erwartet: "true", beschreibung: "kein Treffer verlangt" }
      - { aufruf: "genauNMal(\"Banane\", 'e', 2)", erwartet: "false", beschreibung: "zu wenige Treffer" }
      - { aufruf: "genauNMal(\"\", 'a', 0)", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [genauNMal], rekursiv: [genauNMal], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 2, meldung: "Bei drei `a` und `n = 1` sinkt der Zähler unter 0. Spätestens dann steht `false` fest." }
      - { wert: 4, meldung: "Am Ende des Strings ist nur dann alles richtig, wenn der Zähler genau 0 ist. Ein Rest von 1 heißt: ein Treffer fehlt." }
hinweise:
  - Der Zähler `n` sagt, wie viele Treffer noch fehlen. Bei jedem Treffer ruft man sich mit `n - 1` auf.
  - Ist `n` negativ, gab es zu viele Treffer. Am Ende des Strings muss `n == 0` gelten.
loesung: |
  **Ansatz:** Ein Zähler-Parameter merkt sich, wie viele Treffer noch erlaubt sind.
  ---
  Zwei Basisfälle: `n < 0` (schon zu viele Treffer) liefert `false`. Der leere String liefert `n == 0`.
  ---
  ```java
  if (n < 0) {
      return false;
  }
  if (s.isEmpty()) {
      return n == 0;
  }
  if (s.charAt(0) == c) {
      return genauNMal(s.substring(1), c, n - 1);
  }
  return genauNMal(s.substring(1), c, n);
  ```
  ---
  Probe `("Banane", 'a', 1)`: Nach dem ersten `a` ist `n = 0`, nach dem zweiten `n = -1`. Der nächste Aufruf liefert sofort `false`.
```

### Zwei Strings im Gleichschritt

Bekommt eine Methode zwei Strings, kann der Selbstaufruf **beide** um ein Zeichen kürzen. So gehören in jedem
Aufruf die jeweils ersten Zeichen zusammen. Der Basisfall muss dann bedenken, dass einer der beiden Strings früher
leer sein kann.

:::beispiel[Zwei Strings im Reißverschluss]
```java
public class Reissverschluss {
    public static String zipp(String a, String b) {
        if (a.isEmpty()) {
            return b;
        }
        if (b.isEmpty()) {
            return a;
        }
        return "" + a.charAt(0) + b.charAt(0) + zipp(a.substring(1), b.substring(1));
    }

    public static void main(String[] args) {
        System.out.println(zipp("EP1", "ab"));
    }
}
```

- Ist `a` leer, bleibt nur noch der Rest von `b` übrig, und umgekehrt. Das sind zwei Basisfälle.
- Sonst kommen das erste Zeichen von `a` und das erste Zeichen von `b`, danach der Reißverschluss der beiden Reste. Das `""` vorne sorgt dafür, dass die zwei `char` verkettet und nicht addiert werden.

Ablauf: `zipp("EP1", "ab")` ergibt `"Ea" + zipp("P1", "b")`. Das ist `"Ea" + "Pb" + zipp("1", "")`. Im letzten
Aufruf ist `b` leer, also liefert er `"1"`. Ergebnis `EaPb1`.
:::

```aufgabe
id: rk-zp-lueckentext-gleich
titel: Zwei Strings zeichenweise vergleichen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: VoWi, Übungen zur Rekursion (equalStrings, umformuliert)
angabe: |
  `gleich(a, b)` soll `true` liefern, wenn beide Strings dieselben Zeichen in derselben Reihenfolge haben, ohne
  `equals` zu verwenden. Fülle die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Gleich {
          public static boolean gleich(String a, String b) {
              if (a.length() != b.length()) {
                  return ___;
              }
              if (a.isEmpty()) {
                  return ___;
              }
              return a.charAt(0) == b.charAt(0) && gleich(___, ___);
          }
      }
    luecken: [["false"], ["true"], ["a.substring(1)"], ["b.substring(1)"]]
    fehler:
      - wert: ["false", "false", "a.substring(1)", "b.substring(1)"]
        meldung: Zwei leere Strings sind gleich. Wenn die Rekursion so weit kommt, waren alle Zeichen gleich, also `true`.
      - wert: ["false", "true", "a.substring(1)", "b"]
        meldung: Beide Strings müssen im Gleichschritt kürzer werden. Sonst vergleicht der nächste Aufruf das zweite Zeichen von `a` mit dem ersten von `b`.
hinweise:
  - Verschiedene Längen bedeuten sofort „nicht gleich“. Sind beide leer, sind sie gleich.
  - Im Selbstaufruf werden beide Strings um ihr erstes Zeichen gekürzt.
loesung: |
  **Ansatz:** Zwei Strings im Gleichschritt. Nach der Längenprüfung reicht es, auf `a.isEmpty()` zu prüfen, denn dann ist auch `b` leer.
  ---
  Lücken: `false`, `true`, `a.substring(1)`, `b.substring(1)`.
  ---
  Wegen der Kurzschlussauswertung von `&&` (ist der linke Teil falsch, wird der rechte nicht mehr ausgewertet) endet die Rekursion beim ersten Unterschied. Bei `gleich("axyz", "abyz")` gibt es nur zwei Aufrufe: Im zweiten sind `x` und `b` verschieden, und der Selbstaufruf rechts von `&&` läuft nicht mehr.
```

:::merke[Einen Zusatzparameter richtig einsetzen]
1. **Index:** Basisfall, sobald der Index das Ende erreicht (bei Paaren schon eine Position früher). Fortschritt `index + 1`, nie `index++`.
2. **Zähler:** bei jedem Treffer `count - 1`. Im Basisfall prüfen, ob der Zähler den gewünschten Wert hat.
3. **Zwei Strings:** beide gleichzeitig kürzen. Für jeden der beiden einen Basisfall „leer“ vorsehen.
4. **Startaufruf:** Der Aufrufer wählt den Anfangswert, meist 0 oder die volle Anzahl. Den Methodenkopf änderst du nie.
:::

```aufgabe
id: rk-zp-code-ep1
titel: Kommt EP1 im Text vor?
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2023, Aufgabe 3 (checkIfStopAvailable, umformuliert)
angabe: |
  Implementiere `boolean enthaeltEp1(String text)` **rekursiv** und ohne Schleifen. Die Methode liefert `true`, wenn
  die Zeichenfolge `ep1` in `text` vorkommt, egal ob die Buchstaben groß oder klein geschrieben sind. Ist `text`
  kürzer als drei Zeichen, liefert sie `false`. Erlaubt sind von `String` nur `length`, `charAt`, `substring`,
  `toLowerCase` und `equals`. Vorbedingung: `text != null`.

  Beispiele: `enthaeltEp1("Ich mag EP1!")` liefert `true`, `enthaeltEp1("ep")` liefert `false`,
  `enthaeltEp1("Ep 1")` liefert `false`, `enthaeltEp1("xeP1")` liefert `true`.
teile:
  - typ: code
    vorlage: |
      public class Ep1Suche {
          public static boolean enthaeltEp1(String text) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Ep1Suche {
          public static boolean enthaeltEp1(String text) {
              if (text.length() < 3) {
                  return false;
              }
              if (text.substring(0, 3).toLowerCase().equals("ep1")) {
                  return true;
              }
              return enthaeltEp1(text.substring(1));
          }
      }
    tests:
      - { aufruf: "enthaeltEp1(\"Ich mag EP1!\")", erwartet: "true" }
      - { aufruf: "enthaeltEp1(\"ep\")", erwartet: "false", beschreibung: "zu kurz" }
      - { aufruf: "enthaeltEp1(\"Ep 1\")", erwartet: "false", beschreibung: "Leerzeichen dazwischen" }
      - { aufruf: "enthaeltEp1(\"xeP1\")", erwartet: "true", beschreibung: "gemischte Schreibung am Ende" }
      - { aufruf: "enthaeltEp1(\"\")", erwartet: "false", versteckt: true }
      - { aufruf: "enthaeltEp1(\"eep1\")", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [enthaeltEp1], rekursiv: [enthaeltEp1], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.length", "String.charAt", "String.substring", "String.toLowerCase", "String.equals"] }
    fehler:
      - { wert: 4, meldung: "Wird ein Treffer ganz am Ende gefunden? Der Basisfall darf erst greifen, wenn weniger als drei Zeichen übrig sind." }
      - { wert: "keinStringGleichOperator", meldung: "`==` vergleicht bei Strings nur, ob es dasselbe Objekt ist. Für den Inhalt brauchst du `equals`." }
      - { wert: "erlaubteApi", meldung: "Nur `length`, `charAt`, `substring`, `toLowerCase` und `equals` sind erlaubt. `contains` und `indexOf` würden die Aufgabe ohne Rekursion lösen." }
hinweise:
  - Prüfe immer nur die ersten drei Zeichen. `text.substring(0, 3)` sind genau diese drei.
  - '`toLowerCase()` macht aus `"Ep1"` den String `"ep1"`. Vergleiche mit `equals`.'
  - Passt der Anfang nicht, suche im Rest `text.substring(1)` weiter. Weniger als drei Zeichen ist der Basisfall.
loesung: |
  **Ansatz:** Suchen wie bei `hatZiffer`, nur mit einem Muster aus drei Zeichen. Jeder Aufruf prüft den Anfang und schiebt dann um ein Zeichen weiter.
  ---
  ```java
  if (text.length() < 3) {
      return false;
  }
  if (text.substring(0, 3).toLowerCase().equals("ep1")) {
      return true;
  }
  return enthaeltEp1(text.substring(1));
  ```
  ---
  Der Fortschritt ist `substring(1)`, nicht `substring(3)`. Sonst würde `"eep1"` übersehen, weil das Muster bei Index 1 beginnt.
  ---
  Probe `"xeP1"`: Anfang `"xeP"` passt nicht. Im Rest `"eP1"` ergibt `toLowerCase()` den String `"ep1"`, also `true`.
```

```aufgabe
id: rk-zp-code-mischen
titel: Mischen mit zyklischem zweiten String
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 5, WS 2018, Aufgabe 2 (mixStrings, umformuliert)
angabe: |
  Implementiere `String mischen(String s1, String s2)` **rekursiv** und ohne Schleifen. Auf jedes Zeichen von `s1`
  folgt ein Zeichen von `s2`: auf das erste das erste, auf das zweite das zweite und so weiter. Ist `s2` kürzer als
  `s1`, beginnt `s2` wieder von vorne. Das Ergebnis ist also immer doppelt so lang wie `s1`.
  Vorbedingung: `s1 != null`, `s2 != null`, `s2.length() > 0`.

  Beispiele: `mischen("ABC", "xy")` liefert `"AxByCx"`, `mischen("EP", "123")` liefert `"E1P2"`,
  `mischen("", "q")` liefert `""`.
teile:
  - typ: code
    vorlage: |
      public class Mischen {
          public static String mischen(String s1, String s2) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Mischen {
          public static String mischen(String s1, String s2) {
              if (s1.isEmpty()) {
                  return "";
              }
              String gedreht = s2.substring(1) + s2.charAt(0);
              return "" + s1.charAt(0) + s2.charAt(0) + mischen(s1.substring(1), gedreht);
          }
      }
    tests:
      - { aufruf: "mischen(\"ABC\", \"xy\")", erwartet: "\"AxByCx\"" }
      - { aufruf: "mischen(\"EP\", \"123\")", erwartet: "\"E1P2\"", beschreibung: "s2 länger" }
      - { aufruf: "mischen(\"\", \"q\")", erwartet: "\"\"", beschreibung: "s1 leer" }
      - { aufruf: "mischen(\"abcd\", \"-\")", erwartet: "\"a-b-c-d-\"", beschreibung: "s2 mit einem Zeichen" }
      - { aufruf: "mischen(\"BLAU\", \"rot\")", erwartet: "\"BrLoAtUr\"", versteckt: true }
    regeln: { keineSchleifenIn: [mischen], rekursiv: [mischen], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Was passiert, wenn `s2` aufgebraucht ist? Statt `s2` zu kürzen, kannst du sein erstes Zeichen nach hinten schieben. Dann beginnt es von selbst wieder von vorne." }
      - { wert: 4, meldung: "Mit `s2.substring(1)` wird ein String der Länge 1 sofort leer. Schiebe das erste Zeichen ans Ende, dann bleibt `s2` immer gleich lang." }
hinweise:
  - Nur `s1` bestimmt das Ende. Basisfall ist `s1.isEmpty()`.
  - '`s2` darf nicht kürzer werden, sonst ist es irgendwann leer. Drehe es stattdessen: `s2.substring(1) + s2.charAt(0)`.'
  - Das eigene Stück ist `"" + s1.charAt(0) + s2.charAt(0)`.
loesung: |
  **Ansatz:** Zwei Strings im Gleichschritt, aber `s2` wird nicht gekürzt, sondern **gedreht**. Sein erstes Zeichen wandert ans Ende.
  ---
  Gedreht wird `"xy"` zu `"yx"` und wieder zu `"xy"`. So steht vorne immer das Zeichen, das als nächstes dran ist.
  ---
  ```java
  if (s1.isEmpty()) {
      return "";
  }
  String gedreht = s2.substring(1) + s2.charAt(0);
  return "" + s1.charAt(0) + s2.charAt(0) + mischen(s1.substring(1), gedreht);
  ```
  ---
  Probe `("ABC", "xy")`: `Ax` und weiter mit `("BC", "yx")`, dann `By` und `("C", "xy")`, dann `Cx`. Ergebnis `"AxByCx"`.
```

Was tun, wenn eine Methode die Position braucht, der Kopf aber keinen Index vorsieht? Einen Parameter darfst du im
Test nicht ergänzen, und eine Hilfsmethode ist verboten. Ein Ausweg: Arbeite **von hinten**. Spaltest du das letzte
Zeichen ab, ist sein Index gleich der Länge des vorderen Teils. Diese Länge kennt die Methode jederzeit.

```aufgabe
id: rk-zp-code-index-dahinter
titel: Jedem Zeichen seinen Index anhängen
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 5, WS 2018, Aufgabe 2 (insertIndex, umformuliert)
angabe: |
  Implementiere `String mitIndex(String s)` **rekursiv** und ohne Schleifen. Hinter jedes Zeichen von `s` wird
  sein Index im String geschrieben. Der Methodenkopf darf nicht verändert werden, ein zusätzlicher Parameter ist
  also nicht erlaubt. Vorbedingung: `s != null`.

  Beispiele: `mitIndex("Kanne")` liefert `"K0a1n2n3e4"`, `mitIndex("")` liefert `""`,
  `mitIndex("Tischlampe!")` liefert `"T0i1s2c3h4l5a6m7p8e9!10"`.
teile:
  - typ: code
    vorlage: |
      public class MitIndex {
          public static String mitIndex(String s) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class MitIndex {
          public static String mitIndex(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              int letzter = s.length() - 1;
              return mitIndex(s.substring(0, letzter)) + s.charAt(letzter) + letzter;
          }
      }
    tests:
      - { aufruf: "mitIndex(\"Kanne\")", erwartet: "\"K0a1n2n3e4\"" }
      - { aufruf: "mitIndex(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "mitIndex(\"Tischlampe!\")", erwartet: "\"T0i1s2c3h4l5a6m7p8e9!10\"", beschreibung: "zweistelliger Index" }
      - { aufruf: "mitIndex(\"x\")", erwartet: "\"x0\"", versteckt: true }
    regeln: { keineSchleifenIn: [mitIndex], rekursiv: [mitIndex], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Steht hinter jedem Zeichen `0`? Wer vorne abschneidet, verliert die Position: Im Rest ist jedes Zeichen wieder das erste. Arbeite vom Ende her." }
      - { wert: 3, meldung: "Bei Index 10 muss `10` erscheinen, nicht `1` und `0` getrennt oder eine Summe. Hänge die Zahl mit `+` an einen String an." }
hinweise:
  - Schneidest du vorne ab, ist im Rest jedes Zeichen wieder an Position 0. Dann geht die Information verloren.
  - Spalte das **letzte** Zeichen ab. Sein Index ist `s.length() - 1`, und das ist zugleich die Länge des vorderen Teils.
loesung: |
  **Ansatz:** Von hinten arbeiten. Der Index des letzten Zeichens ist `s.length() - 1`. Den vorderen Teil erledigt der Selbstaufruf.
  ---
  ```java
  if (s.isEmpty()) {
      return "";
  }
  int letzter = s.length() - 1;
  return mitIndex(s.substring(0, letzter)) + s.charAt(letzter) + letzter;
  ```
  ---
  Der Ausdruck wird von links nach rechts ausgewertet. Links steht ein String, also werden das Zeichen und die Zahl angehängt, nicht addiert.
  ---
  Probe `"Kanne"`: `mitIndex("Kann")` ist `"K0a1n2n3"`, dazu `e` und `4`. Ergebnis `"K0a1n2n3e4"`.
```

```aufgabe
id: rk-zp-code-doppel-anzahl
titel: Einen Buchstaben verdoppeln und die Treffer zählen
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2023, Aufgabe 4 (duplicateSelectedChar, umformuliert)
angabe: |
  Implementiere `String doppelUndAnzahl(String text, char zeichen)` **rekursiv** und ohne Schleifen. Jeder Buchstabe
  von `text`, der `zeichen` entspricht, wird verdoppelt. Groß- und Kleinschreibung spielt beim Vergleich keine Rolle,
  der verdoppelte Buchstabe behält aber seine eigene Schreibweise. Kommt mindestens ein Treffer vor, wird ganz am Ende
  die Anzahl der Treffer als Ziffer angehängt.

  Erlaubt sind von `String` nur `charAt`, `length`, `substring`, `isEmpty`, `toLowerCase` und `equals`.
  Vorbedingungen: `text != null`, `text` enthält keine Ziffer, `zeichen` ist ein Buchstabe und kommt höchstens 9-mal vor.

  Beispiele: `doppelUndAnzahl("Kiosk", 'k')` liefert `"KKioskk2"`, `doppelUndAnzahl("Tee", 'E')` liefert `"Teeee2"`,
  `doppelUndAnzahl("abc", 'x')` liefert `"abc"`, `doppelUndAnzahl("", 'a')` liefert `""`.
teile:
  - typ: code
    vorlage: |
      public class DoppelAnzahl {
          public static String doppelUndAnzahl(String text, char zeichen) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class DoppelAnzahl {
          public static String doppelUndAnzahl(String text, char zeichen) {
              if (text.isEmpty()) {
                  return "";
              }
              char c = text.charAt(0);
              String rest = doppelUndAnzahl(text.substring(1), zeichen);
              boolean treffer = ("" + c).toLowerCase().equals(("" + zeichen).toLowerCase());
              if (!treffer) {
                  return c + rest;
              }
              if (!rest.isEmpty()) {
                  char letztes = rest.charAt(rest.length() - 1);
                  if (letztes >= '0' && letztes <= '9') {
                      int bisher = letztes - '0';
                      return "" + c + c + rest.substring(0, rest.length() - 1) + (bisher + 1);
                  }
              }
              return "" + c + c + rest + 1;
          }
      }
    tests:
      - { aufruf: "doppelUndAnzahl(\"Kiosk\", 'k')", erwartet: "\"KKioskk2\"" }
      - { aufruf: "doppelUndAnzahl(\"Tee\", 'E')", erwartet: "\"Teeee2\"" }
      - { aufruf: "doppelUndAnzahl(\"abc\", 'x')", erwartet: "\"abc\"", beschreibung: "kein Treffer" }
      - { aufruf: "doppelUndAnzahl(\"\", 'a')", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "doppelUndAnzahl(\"a\", 'A')", erwartet: "\"aa1\"", beschreibung: "ein Treffer" }
      - { aufruf: "doppelUndAnzahl(\"RoboterRad\", 'r')", erwartet: "\"RRoboterrRRad3\"", versteckt: true }
    regeln: { keineSchleifenIn: [doppelUndAnzahl], rekursiv: [doppelUndAnzahl], keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["String.charAt", "String.length", "String.substring", "String.isEmpty", "String.toLowerCase", "String.equals"] }
    fehler:
      - { wert: 1, meldung: "Stimmt die Zahl am Ende? Das Ergebnis des Rests endet schon mit der Anzahl seiner Treffer. Ersetze diese Ziffer durch die um 1 größere, statt eine neue anzuhängen." }
      - { wert: 2, meldung: "Groß und klein sollen beim Vergleich gleich sein. Vergleiche beide Zeichen in Kleinschreibung, zum Beispiel über `(\"\" + c).toLowerCase()`." }
      - { wert: 5, meldung: "Bei genau einem Treffer muss `1` angehängt werden. Hat das Ergebnis des Rests noch keine Ziffer am Ende, beginnt die Zählung bei 1." }
hinweise:
  - Woher weiß ein Aufruf, wie viele Treffer im Rest waren? Schau dir das Ende des Ergebnisses des Rests an.
  - Endet das Ergebnis des Rests mit einer Ziffer `d`, ersetze sie durch `d + 1`. Sonst hänge `1` an. Die Vorbedingung garantiert, dass sonst keine Ziffern vorkommen.
  - Für den Vergleich ohne Groß- und Kleinschreibung wandelst du beide Zeichen in einen String um und rufst `toLowerCase()` auf.
loesung: |
  **Ansatz:** Ein Zusatzparameter für den Zähler fehlt im Kopf. Die Anzahl steht aber am Ende des Ergebnisses des Rests. Diese Ziffer liest jeder Aufruf aus und erhöht sie.
  ---
  Kein Treffer: `c + rest`, das Ende mit der Zahl bleibt unverändert. Treffer: `c` verdoppeln und die Zahl am Ende um 1 erhöhen oder `1` neu anhängen.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  char c = text.charAt(0);
  String rest = doppelUndAnzahl(text.substring(1), zeichen);
  boolean treffer = ("" + c).toLowerCase().equals(("" + zeichen).toLowerCase());
  if (!treffer) {
      return c + rest;
  }
  if (!rest.isEmpty()) {
      char letztes = rest.charAt(rest.length() - 1);
      if (letztes >= '0' && letztes <= '9') {
          int bisher = letztes - '0';
          return "" + c + c + rest.substring(0, rest.length() - 1) + (bisher + 1);
      }
  }
  return "" + c + c + rest + 1;
  ```
  ---
  `letztes - '0'` macht aus dem Zeichen `'2'` die Zahl 2. Die Klammern in `(bisher + 1)` sorgen dafür, dass erst gerechnet und dann angehängt wird.
  ---
  Probe `"Kiosk"`: Der letzte Aufruf mit Treffer liefert `"kk1"`. Davor `"skk1"`, `"oskk1"`, `"ioskk1"`. Das `K` ist ein Treffer, also `"KK"` und `1` wird zu `2`: `"KKioskk2"`.
```

```aufgabe
id: rk-zp-text-kein-index
titel: Warum nicht einfach einen Parameter ergänzen?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Kollegin sagt: „Für `mitIndex(String s)` füge ich einfach einen zweiten Parameter `int i` hinzu. Das ist viel
  leichter.“ Erkläre in drei bis vier Sätzen, warum das im Programmiertest Punkte kostet. Sag auch, wie man das
  Problem trotzdem löst.
teile:
  - typ: text
    muster: |
      Die Einschränkungen des Tests verbieten, die vorgegebenen Methodenköpfe zu erweitern oder zu ändern. Die
      Testfälle rufen genau `mitIndex(s)` mit einem Argument auf, eine Methode mit zwei Parametern passt dazu nicht.
      Eine Hilfsmethode mit dem Zusatzparameter ist ebenfalls verboten. Man löst das Problem, indem man die
      fehlende Information anders gewinnt: Arbeitet man von hinten, ist der Index des letzten Zeichens gleich
      s.length() - 1.
hinweise:
  - Welche Einschränkung des Programmiertests betrifft die Methodenköpfe?
  - Welche Information liefert `s.length()`, wenn man das letzte Zeichen abspaltet?
loesung: |
  **Ansatz:** Regel des Tests nennen und dann die Alternative zeigen.
  ---
  Methodenköpfe dürfen nicht erweitert werden, und Hilfsmethoden sind verboten. Die Testfälle rufen genau die vorgegebene Signatur auf.
  ---
  Die Position bekommt man ohne Zusatzparameter, wenn man von hinten arbeitet. Der Index des letzten Zeichens ist `s.length() - 1`.
```

## Rekursiv nach Vorgabe: Schleifenverbot und Bewertung

```aufgabe
id: rk-pt-check-klassenvariable
titel: Was ist eine globale Variable?
niveau: 1
art: check
angabe: |
  Im Programmiertest sind „globale Variablen“ verboten. Welche Variable ist damit gemeint? Wiederhole bei Bedarf
  [6.4 Sichtbarkeit und Lebensdauer von Variablen](/lernen/ep1/methoden/sichtbarkeit-und-lebensdauer-von-variablen).
teile:
  - typ: auswahl
    optionen:
      - 'eine Klassenvariable wie `static int zaehler = 0;`, die außerhalb jeder Methode steht'
      - eine lokale Variable, die am Anfang einer Methode deklariert wird
      - ein Parameter der Methode
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine lokale Variable lebt nur während eines Aufrufs und ist nur in ihrem Block sichtbar. Sie ist erlaubt.
      - wert: 2
        meldung: Parameter gehören zum Methodenkopf. Sie sind genau das Mittel, mit dem eine Rekursion Information weitergibt.
loesung: |
  „Global“ heißt: in allen Methoden sichtbar und über alle Aufrufe hinweg lebendig. Das trifft auf Klassenvariablen zu.
  ---
  Lokale Variablen und Parameter sind erlaubt. Sie werden bei jedem Aufruf neu angelegt.
```

In den vorliegenden Programmiertests von 2020 bis 2022 war meist die letzte Aufgabe eine rekursive Methode. Über den
Aufgaben steht ein Kasten mit **Einschränkungen**. Er war in diesen Jahren fast wortgleich. Hier sind sie in eigenen Worten, jeweils mit dem Grund:

- **Keine Hilfsmethoden und keine globalen Variablen.** Du sollst die Aufgabe mit genau der vorgegebenen Methode lösen.
  Eine Hilfsmethode mit zusätzlichem Parameter würde die eigentliche Schwierigkeit umgehen.
- **Methodenköpfe unverändert.** Name, Parameter und Rückgabetyp bleiben genau so. Die Testfälle rufen genau diese Köpfe auf.
- **Keine Schleifen in der rekursiven Methode.** Jede Wiederholung muss durch Selbstaufrufe entstehen. Eine einzige
  `for`-, `while`- oder `do`-Schleife in dieser Methode kann alle Punkte dieser Aufgabe kosten.
- **Strings nicht mit `==` vergleichen**, sondern mit `equals` (siehe [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals)).
- **Von `String` nur `charAt`, `equals`, `length`, `substring` und `isEmpty`.** Methoden wie `indexOf`, `contains`
  oder `replace` würden die Rekursion ersetzen. Außer `Math` ist keine weitere Klasse der Java-API erlaubt.

Auf den Aufgabenblättern gilt dasselbe in leicht abgewandelter Form. Manchmal erlaubt eine Angabe ausdrücklich
weitere Methoden, etwa `toLowerCase`. Lies den Kasten jeder Aufgabe genau.

:::definition[Schleifenverbot]
Das **Schleifenverbot** bedeutet: Im Rumpf der rekursiven Methode steht kein `for`, kein `while` und kein `do`.
Wiederholung entsteht nur durch Selbstaufrufe. In `main` und in anderen, nicht rekursiven Methoden derselben
Aufgabe sind Schleifen erlaubt.
:::

**Beispiel:** Eine Methode `zaehle(String s, char c)`, die sich mit `s.substring(1)` selbst aufruft und sonst nur
`if` verwendet, hält das Schleifenverbot ein. **Kein Beispiel:** Eine Methode, die sich zwar selbst aufruft, aber
darin zusätzlich `for (int i = 0; i < s.length(); i++)` enthält, verstößt dagegen. Der Selbstaufruf allein macht sie
noch nicht zu einer erlaubten Lösung.

So gehst du an eine rekursive Blattaufgabe heran. Wir lösen eine Variante von Blatt 3 einmal ganz durch.

:::beispiel[Eine Blattaufgabe von der Angabe bis zum Test]
**Angabe:** Implementiere `void druckeUngeradeAbsteigend(int end)` rekursiv und ohne Schleifen. Die Methode gibt alle
ungeraden Zahlen von `end` abwärts bis 1 aus, je eine pro Zeile. Vorbedingung: `end > 0`.

1. **Kopf abschreiben**, genau wie vorgegeben: `public static void druckeUngeradeAbsteigend(int end)`. Kein zusätzlicher Parameter.
2. **Basisfall suchen:** Wann ist nichts mehr zu tun? Wenn `end` kleiner als 1 ist. Dann endet der Aufruf mit `return;`.
3. **Beitrag dieses Aufrufs:** Ist `end` ungerade, wird `end` ausgegeben. Absteigend heißt: die Ausgabe kommt **vor** dem Selbstaufruf.
4. **Fortschritt:** Selbstaufruf mit `end - 1`. Damit wird jede Zahl einmal geprüft, und die Folge erreicht sicher die 0.
5. **Testen** mit `druckeUngeradeAbsteigend(7)` (erwartet 7, 5, 3, 1) und mit dem Randfall `druckeUngeradeAbsteigend(1)` (erwartet nur 1).

```java
public static void druckeUngeradeAbsteigend(int end) {
    if (end < 1) {
        return;
    }
    if (end % 2 == 1) {
        System.out.println(end);
    }
    druckeUngeradeAbsteigend(end - 1);
}
```

Ablauf für `end = 4`: 4 ist gerade, keine Ausgabe, Aufruf mit 3. Ausgabe 3, Aufruf mit 2. Keine Ausgabe, Aufruf mit 1.
Ausgabe 1, Aufruf mit 0. Basisfall. Die Ausgabe ist `3` und `1`.
:::

### Wie die rekursive Aufgabe bewertet wird

Im Programmiertest vom 27. Jänner 2022 brachte die rekursive Methode `clean` 9 von 30 Punkten. Die
Bewertungsgrundlage war:

```
Korrekter Methodenansatz (Rückgabe vorhanden)   1 Punkt
Basisfall/Basisfälle vorhanden                  1 Punkt
Basisfall/Basisfälle korrekt                    1 Punkt
Fortschritt der Rekursion vorhanden             1 Punkt
Fortschritt der Rekursion korrekt               1 Punkt
Korrekter Rückgabewert                          4 Punkte
```

Daraus folgen zwei Ratschläge. Erstens: Auch eine unvollständige Lösung mit sauberem Basisfall und sauberem
Fortschritt bringt Punkte. Schreib diese beiden Teile also immer hin. Zweitens: Ein Verstoß gegen die
Einschränkungen, etwa eine Schleife, gefährdet die ganze Aufgabe. Ob 2026W genauso bewertet wird, ist nicht
veröffentlicht.

### Eine Schleife in eine Rekursion umbauen

Oft fällt dir zuerst eine Lösung mit Schleife ein. Dann kannst du sie Schritt für Schritt umbauen.

:::beispiel[Vokale zählen: von der Schleife zur Rekursion]
Ausgangspunkt ist eine Schleife, die die Vokale `a e i o u` in einem kleingeschriebenen Wort zählt:

```java
public static int vokale(String s) {
    int anzahl = 0;
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            anzahl++;
        }
    }
    return anzahl;
}
```

Wir bauen sie in fünf Schritten um.

1. **Was wird pro Durchlauf bearbeitet?** Ein Zeichen. In der Rekursion ist das immer das erste Zeichen `s.charAt(0)`.
2. **Die Schleifenbedingung `i < s.length()`** sagt, wann es noch etwas zu tun gibt. Ihr Gegenteil wird der Basisfall: Es gibt kein Zeichen mehr, also `s.isEmpty()`.
3. **Der Anfangswert der Sammelvariable** (`anzahl = 0`) ist das Ergebnis des Basisfalls: `return 0;`.
4. **Der Rumpf** wird zum Beitrag dieses Aufrufs: 1, wenn `c` ein Vokal ist, sonst 0.
5. **Das Weiterzählen `i++`** wird zum Selbstaufruf mit dem Rest `s.substring(1)`. Statt `anzahl++` addiert man den Beitrag zum Ergebnis des Selbstaufrufs.

```java
public static int vokale(String s) {
    if (s.isEmpty()) {
        return 0;
    }
    char c = s.charAt(0);
    int rest = vokale(s.substring(1));
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        return 1 + rest;
    }
    return rest;
}
```

Probe mit `"rekursion"`: Vokale sind `e`, `u`, `i`, `o`. Beide Fassungen liefern 4. Die Variable `anzahl` gibt es in
der rekursiven Fassung nicht mehr. Ihre Aufgabe übernimmt der Rückgabewert.
:::

:::merke[Von der Schleife zur Rekursion]
1. Laufvariable `i` wird zum Fortschritt: kürzerer String (`substring(1)`), kleinere Zahl (`n / 10`, `n - 1`) oder Index-Parameter (`index + 1`).
2. Schleifenbedingung umkehren: Das ist der Basisfall.
3. Anfangswert der Sammelvariable: Das ist das Ergebnis des Basisfalls (0 beim Zählen, `""` bei Strings, `true` bei „alle“, `false` bei „irgendein“).
4. Schleifenrumpf: Das ist der Beitrag des aktuellen Aufrufs.
5. Sammeln (`anzahl++`, `r = r + …`) wird zum Zusammensetzen mit dem Ergebnis des Selbstaufrufs.
:::

```aufgabe
id: rk-pt-gefuehrt
titel: Leerzeichen zählen, umgebaut
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Diese Schleife zählt die Leerzeichen in `s`:

  ```java
  int anzahl = 0;
  for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == ' ') {
          anzahl++;
      }
  }
  return anzahl;
  ```

  Baue sie in eine rekursive Methode ohne Schleife um. Fülle die Lücken. Löse die Aufgabe zuerst geführt.
teile:
  - typ: lueckentext
    code: |
      public class Leer {
          public static int leerzeichen(String s) {
              if (___) {
                  return ___;
              }
              int rest = leerzeichen(___);
              if (s.charAt(0) == ' ') {
                  return ___;
              }
              return rest;
          }
      }
    luecken: [["s.isEmpty()", "s.length() == 0"], ["0"], ["s.substring(1)"], ["1 + rest", "rest + 1"]]
    fehler:
      - wert: ["s.isEmpty()", "0", "s.substring(1)", "rest"]
        meldung: Ein Leerzeichen an erster Stelle muss mitgezählt werden. Dann ist das Ergebnis eins mehr als im Rest.
      - wert: ["s.length() == 1", "0", "s.substring(1)", "1 + rest"]
        meldung: 'Mit `s.length() == 1` wird der leere String nicht abgefangen, und bei `" "` geht das Leerzeichen verloren.'
gefuehrt:
  - text: Die Schleife läuft, solange `i < s.length()` gilt. Welcher Basisfall entspricht dem Ende der Schleife?
    teil:
      typ: auswahl
      optionen: ['`s.isEmpty()`', '`s.length() == 1`', '`s.charAt(0) == '' ''`']
      richtig: [0]
    erklaerung: Die Schleife endet, wenn kein Zeichen mehr übrig ist. In der Rekursion ist das der leere String.
  - text: Der Anfangswert von `anzahl` ist 0. Was liefert also der Basisfall?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Ein leerer String enthält kein Leerzeichen.
  - text: Was tritt in der Rekursion an die Stelle von `i++`?
    teil:
      typ: auswahl
      optionen: ['der Selbstaufruf mit `s.substring(1)`', 'der Selbstaufruf mit `s`', 'eine Variable `i`, die um 1 erhöht wird']
      richtig: [0]
    erklaerung: Der Rest ohne das erste Zeichen wird an den Selbstaufruf übergeben.
hinweise:
  - Arbeite die fünf Schritte des Merke-Kastens der Reihe nach ab.
loesung: |
  **Ansatz:** Schleifenbedingung umkehren, Anfangswert als Basisfall, Rumpf als Beitrag, `i++` als Selbstaufruf.
  ---
  Lücken: `s.isEmpty()`, `0`, `s.substring(1)` und `1 + rest`.
  ---
  Probe mit `"a b c"`: zwei Leerzeichen. Die Aufrufe liefern von hinten 0, 0, 1, 1, 2, 2. Ergebnis 2.
```

:::achtung[Eine Klassenvariable als Zähler]
Ein häufiger Versuch, um den Zähler `anzahl` der Schleife zu behalten:

```java
static int anzahl = 0;                        // verboten: globale Variable

public static int zaehleA(String s) {       // soll die a in s zählen
    if (s.isEmpty()) {
        return anzahl;
    }
    if (s.charAt(0) == 'a') {
        anzahl++;
    }
    return zaehleA(s.substring(1));
}
```

Der erste Aufruf `zaehleA("ab")` liefert 1. Ein zweiter Aufruf `zaehleA("ab")` liefert aber 2, denn `anzahl` wurde
nie zurückgesetzt. Die Methode liefert also für dieselbe Eingabe verschiedene Ergebnisse. Darum sind globale
Variablen verboten. Alles, was ein Aufruf wissen muss, kommt über Parameter herein und geht über `return` hinaus.
:::

:::achtung[Den Selbstaufruf nicht zurückgegeben]
Diese Methode soll prüfen, ob ein `x` vorkommt:

```java
public static boolean hatX(String s) {
    if (s.isEmpty()) {
        return false;
    }
    if (s.charAt(0) == 'x') {
        return true;
    }
    hatX(s.substring(1));          // falsch: Ergebnis wird weggeworfen
}
```

Der Compiler meldet `error: missing return statement`. Wer das mit einem `return false;` am Ende „repariert“,
bekommt eine Methode, die nur ein `x` ganz vorne findet. Richtig ist `return hatX(s.substring(1));`. Das Ergebnis des
Selbstaufrufs ist die Antwort für den Rest, und genau diese Antwort muss zurückgegeben werden.
:::

```aufgabe
id: rk-pt-rf-erlaubt
titel: Was ist im Programmiertest erlaubt?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Die rekursive Methode im Programmiertest hat die üblichen Einschränkungen. Beurteile für jede Idee, ob sie erlaubt ist.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: In `main` eine `for`-Schleife verwenden, um mehrere Testfälle auszugeben.
        richtig: true
        erklaerung: Das Schleifenverbot gilt nur für die rekursive Methode.
      - text: In der rekursiven Methode `s.indexOf('x')` verwenden, um die Position eines Zeichens zu finden.
        richtig: false
        erklaerung: Von `String` sind nur `charAt`, `equals`, `length`, `substring` und `isEmpty` erlaubt.
      - text: In der rekursiven Methode eine lokale Variable `int rest = …;` anlegen.
        richtig: true
        erklaerung: Lokale Variablen sind erlaubt. Verboten sind nur globale Variablen, also Klassenvariablen.
      - text: Dem Methodenkopf einen Parameter `int index` hinzufügen, damit die Rekursion leichter wird.
        richtig: false
        erklaerung: Die vorgegebenen Methodenköpfe dürfen nicht erweitert oder geändert werden.
    fehler:
      - wert: [f, f, r, f]
        meldung: Das Schleifenverbot gilt nur in der rekursiven Methode. In `main` sind Schleifen erlaubt.
      - wert: [r, r, r, f]
        meldung: '`indexOf` steht nicht auf der Liste der erlaubten String-Methoden.'
hinweise:
  - Für welche Methode gilt das Schleifenverbot? Und welche fünf String-Methoden sind erlaubt?
loesung: |
  **Ansatz:** Jede Idee gegen den Einschränkungskasten prüfen.
  ---
  Erlaubt sind die Schleife in `main` und lokale Variablen. Verboten sind `indexOf` und ein veränderter Methodenkopf.
```

```aufgabe
id: rk-pt-zeilen-verstoesse
titel: Verstöße gegen die Einschränkungen finden
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode soll alle `a` aus `text` entfernen und gilt als rekursive Testaufgabe mit den üblichen Einschränkungen.
  Markiere alle Zeilen, die gegen die Einschränkungen verstoßen. Ob die Methode richtig rechnet, spielt hier keine Rolle.
teile:
  - typ: zeilen
    code: |
      public class Ohne {
          static String ergebnis = "";

          public static String ohneA(String text) {
              if (text == "") {
                  return "";
              }
              String rest = ohneA(text.substring(1));
              for (int i = 0; i < 1; i++) {
                  rest = rest + "";
              }
              if (text.charAt(0) == 'a') {
                  return rest;
              }
              return text.charAt(0) + rest;
          }
      }
    loesung: [2, 5, 9]
    fehler:
      - wert: [2, 9]
        meldung: 'Zeile 5 vergleicht zwei Strings mit `==`. Das ist ein Vergleich der Referenzen und verboten. Richtig wäre `text.isEmpty()`.'
      - wert: [5, 9]
        meldung: Zeile 2 deklariert eine Klassenvariable. Auch wenn sie nicht benutzt wird, ist sie eine globale Variable.
      - wert: [2, 5, 9, 12]
        meldung: '`text.charAt(0) == ''a''` vergleicht zwei `char`. Das ist ein primitiver Vergleich und erlaubt.'
hinweise:
  - Suche nach Klassenvariablen, Schleifen in der rekursiven Methode und `==` zwischen Strings.
  - Ein Vergleich von zwei `char` mit `==` ist erlaubt. Nur bei Strings ist `==` verboten.
loesung: |
  **Ansatz:** Den Einschränkungskasten Punkt für Punkt durchgehen.
  ---
  Zeile 2: Klassenvariable, also globale Variable. Zeile 5: `==` zwischen Strings. Zeile 9: `for`-Schleife in der rekursiven Methode, auch wenn sie nur einmal läuft.
  ---
  Zeile 12 ist erlaubt, denn `char` ist ein primitiver Typ. Alle übrigen Zeilen halten die Regeln ein.
```

```aufgabe
id: rk-pt-code-umbauen
titel: Eine Ersetzung ohne Schleife
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Diese Methode ersetzt jedes Zeichen `alt` durch `neu`:

  ```java
  public static String ersetze(String s, char alt, char neu) {
      String r = "";
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == alt) {
              r = r + neu;
          } else {
              r = r + s.charAt(i);
          }
      }
      return r;
  }
  ```

  Schreibe sie **rekursiv** und ohne Schleifen. Der Methodenkopf bleibt gleich. Erlaubt sind von `String` nur
  `charAt`, `equals`, `length`, `substring` und `isEmpty`.
teile:
  - typ: code
    vorlage: |
      public class Ersetzen {
          public static String ersetze(String s, char alt, char neu) {
              String r = "";
              for (int i = 0; i < s.length(); i++) {
                  if (s.charAt(i) == alt) {
                      r = r + neu;
                  } else {
                      r = r + s.charAt(i);
                  }
              }
              return r;
          }
      }
    musterloesung: |
      public class Ersetzen {
          public static String ersetze(String s, char alt, char neu) {
              if (s.isEmpty()) {
                  return "";
              }
              String rest = ersetze(s.substring(1), alt, neu);
              if (s.charAt(0) == alt) {
                  return neu + rest;
              }
              return s.charAt(0) + rest;
          }
      }
    tests:
      - { aufruf: "ersetze(\"Banane\", 'a', 'o')", erwartet: "\"Bonone\"" }
      - { aufruf: "ersetze(\"\", 'a', 'o')", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "ersetze(\"xyz\", 'q', 'r')", erwartet: "\"xyz\"", beschreibung: "nichts zu ersetzen" }
      - { aufruf: "ersetze(\"a-a-a\", '-', ' ')", erwartet: "\"a a a\"", versteckt: true }
    regeln: { keineSchleifenIn: [ersetze], rekursiv: [ersetze], keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty"] }
    fehler:
      - { wert: "keineSchleifenIn", meldung: "Die Vorlage enthält noch die Schleife. Ersetze sie vollständig: Basisfall leerer String, Selbstaufruf mit `s.substring(1)`." }
      - { wert: 1, meldung: "Kommt `enanoB` heraus? Das eigene Zeichen muss **vor** das Ergebnis des Rests, sonst dreht sich die Reihenfolge um." }
hinweise:
  - Anfangswert `r = ""` wird zum Ergebnis des Basisfalls. Die Bedingung `i < s.length()` wird umgekehrt zu `s.isEmpty()`.
  - Der Rumpf entscheidet zwischen `neu` und `s.charAt(0)`. Dieses Zeichen kommt vor das Ergebnis des Rests.
loesung: |
  **Ansatz:** Die fünf Schritte aus dem Merke-Kasten. Die Sammelvariable `r` verschwindet, ihre Rolle übernimmt der Rückgabewert.
  ---
  ```java
  if (s.isEmpty()) {
      return "";
  }
  String rest = ersetze(s.substring(1), alt, neu);
  if (s.charAt(0) == alt) {
      return neu + rest;
  }
  return s.charAt(0) + rest;
  ```
  ---
  `neu + rest` ist eine Verkettung, weil `rest` ein String ist. Die Schleife hängte hinten an, die Rekursion setzt vorne an. Beides erhält die Reihenfolge, weil der Rest später verarbeitet wird.
  ---
  Probe: `ersetze("Banane", 'a', 'o')` ergibt `"Bonone"`.
```

```aufgabe
id: rk-pt-rf-raster
titel: Eine Lösung nach dem Raster beurteilen
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Gesucht war `int zaehleX(String s)`, das die Anzahl der `x` in `s` liefert. Ein Student gibt ab:

  ```java
  public static int zaehleX(String s) {
      if (s.length() == 0) {
          return 0;
      }
      if (s.charAt(0) == 'x') {
          return 1 + zaehleX(s.substring(1));
      }
      return zaehleX(s.substring(2));
  }
  ```

  Beurteile jede Aussage nach dem Bewertungsraster.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Basisfall ist vorhanden und für den leeren String korrekt.
        richtig: true
        erklaerung: Der leere String liefert 0 ohne Selbstaufruf.
      - text: Der Fortschritt ist in jedem Fall korrekt.
        richtig: false
        erklaerung: Bei einem Nicht-`x` wird mit `substring(2)` ein Zeichen übersprungen. Ein `x` an dieser Stelle wird nie gezählt.
      - text: Die Methode kann eine Exception werfen.
        richtig: true
        erklaerung: 'Für `"a"` ruft sie `"a".substring(2)` auf. Index 2 liegt hinter dem String (Länge 1), es folgt eine `StringIndexOutOfBoundsException`.'
      - text: '`zaehleX("xax")` liefert das richtige Ergebnis 2.'
        richtig: false
        erklaerung: '`x` zählt, dann `zaehleX("ax")`. Das `a` ist kein `x`, also `substring(2)` von `"ax"`, das ist `""`. Das letzte `x` wird übersprungen, Ergebnis 1.'
    fehler:
      - wert: [r, r, f, f]
        meldung: Vergleiche die beiden Selbstaufrufe. Wird in beiden Fällen um genau ein Zeichen gekürzt?
      - wert: [r, f, f, f]
        meldung: '`substring(2)` ist nur erlaubt, wenn der String mindestens zwei Zeichen hat. Probiere `zaehleX("a")`.'
hinweise:
  - Prüfe jeden Selbstaufruf einzeln. Wie viele Zeichen werden jeweils abgeschnitten?
  - Probiere die Methode mit `"a"` und mit `"xax"` aus.
loesung: |
  **Ansatz:** Basisfall, Fortschritt und Rückgabe getrennt prüfen, wie im Raster.
  ---
  Der Basisfall ist vorhanden und korrekt. Der Fortschritt ist vorhanden, aber im zweiten Selbstaufruf falsch: `substring(2)` überspringt ein Zeichen.
  ---
  Folgen: `zaehleX("a")` wirft eine Exception, `zaehleX("xax")` liefert 1 statt 2. Aussagen 1 und 3 sind richtig.
```

```aufgabe
id: rk-pt-code-main-tests
titel: Testfälle in main schreiben
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Im Programmiertest gibt es Punkte für die Testfälle in `main`. Die Methode `quersumme` ist schon fertig. Schreibe
  `main` so, dass genau diese drei Zeilen erscheinen, jeweils mit einem Aufruf von `quersumme`:

  ```
  quersumme(4827) = 21
  quersumme(7) = 7
  quersumme(1000) = 1
  ```
teile:
  - typ: code
    vorlage: |
      public class Test {
          public static int quersumme(int n) {
              if (n < 10) {
                  return n;
              }
              return n % 10 + quersumme(n / 10);
          }

          public static void main(String[] args) {
              // TODO: drei Testfälle ausgeben
          }
      }
    musterloesung: |
      public class Test {
          public static int quersumme(int n) {
              if (n < 10) {
                  return n;
              }
              return n % 10 + quersumme(n / 10);
          }

          public static void main(String[] args) {
              System.out.println("quersumme(4827) = " + quersumme(4827));
              System.out.println("quersumme(7) = " + quersumme(7));
              System.out.println("quersumme(1000) = " + quersumme(1000));
          }
      }
    tests:
      - { stdout: "quersumme(4827) = 21\nquersumme(7) = 7\nquersumme(1000) = 1\n", beschreibung: "main gibt die drei Testfälle aus" }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeichen für Zeichen, auch die Leerzeichen um das `=`. Der Text in Anführungszeichen wird mit `+` und dem Aufruf verkettet." }
hinweise:
  - Eine Zeile entsteht mit `System.out.println("quersumme(4827) = " + quersumme(4827));`.
  - Der Text in Anführungszeichen ist nur Beschriftung. Die Zahl liefert der Aufruf.
loesung: |
  **Ansatz:** Für jeden Testfall eine Ausgabe aus Beschriftung und Rückgabewert.
  ---
  ```java
  System.out.println("quersumme(4827) = " + quersumme(4827));
  System.out.println("quersumme(7) = " + quersumme(7));
  System.out.println("quersumme(1000) = " + quersumme(1000));
  ```
  ---
  Gute Testfälle decken den Normalfall (4827), den Basisfall (7) und einen Randfall mit Nullen (1000) ab. Genau so wählt man sie im Test.
```

```aufgabe
id: rk-pt-code-klammern
titel: Den Inhalt der äußersten Klammern
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Programmiertest 27.01.2022, Gruppe A (clean, umformuliert)
angabe: |
  Implementiere `String innen(String seq)` **rekursiv**, ohne Schleifen und mit den Einschränkungen des
  Programmiertests (von `String` nur `charAt`, `equals`, `length`, `substring`, `isEmpty`). Die Methode liefert den
  Text zwischen der **ersten** `[` und der **letzten** `]` von `seq`, ohne diese beiden Klammern. Gibt es keine `[`,
  die vor einer `]` steht, liefert sie den leeren String. Vorbedingung: `seq != null`.

  Beispiele: `innen("ab[cd]e")` liefert `"cd"`, `innen("q[r]s]t")` liefert `"r]s"`, `innen("a]b[c")` liefert `""`,
  `innen("[]")` liefert `""`.
teile:
  - typ: code
    vorlage: |
      public class Klammern {
          public static String innen(String seq) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Klammern {
          public static String innen(String seq) {
              if (seq.length() < 2) {
                  return "";
              }
              if (seq.charAt(0) != '[') {
                  return innen(seq.substring(1));
              }
              if (seq.charAt(seq.length() - 1) != ']') {
                  return innen(seq.substring(0, seq.length() - 1));
              }
              return seq.substring(1, seq.length() - 1);
          }
      }
    tests:
      - { aufruf: "innen(\"ab[cd]e\")", erwartet: "\"cd\"" }
      - { aufruf: "innen(\"q[r]s]t\")", erwartet: "\"r]s\"", beschreibung: "letzte schließende Klammer" }
      - { aufruf: "innen(\"a]b[c\")", erwartet: "\"\"", beschreibung: "falsche Reihenfolge" }
      - { aufruf: "innen(\"[]\")", erwartet: "\"\"", beschreibung: "leere Klammern" }
      - { aufruf: "innen(\"\")", erwartet: "\"\"", versteckt: true }
      - { aufruf: "innen(\"[[a]]\")", erwartet: "\"[a]\"", versteckt: true }
      - { aufruf: "innen(\"[abc\")", erwartet: "\"\"", versteckt: true }
    regeln: { keineSchleifenIn: [innen], rekursiv: [innen], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty"] }
    fehler:
      - { wert: 2, meldung: "Gesucht ist die **letzte** `]`, nicht die erste. Schneide hinten so lange ab, bis das letzte Zeichen eine `]` ist." }
      - { wert: 3, meldung: "Bei `\"a]b[c\"` gibt es keine `[` vor einer `]`. Wenn vorne und hinten abgeschnitten wird, bleibt irgendwann weniger als zwei Zeichen übrig. Das muss der Basisfall abfangen." }
      - { wert: "erlaubteApi", meldung: "`indexOf` und `lastIndexOf` sind im Test nicht erlaubt. Schneide stattdessen Zeichen für Zeichen vorne und hinten ab." }
hinweise:
  - Steht vorne keine `[`, schneide das erste Zeichen ab und rufe dich mit dem Rest auf.
  - Steht hinten keine `]`, schneide das letzte Zeichen ab. Steht vorne `[` und hinten `]`, ist das Ergebnis der Teil dazwischen.
  - Basisfall ist ein String mit weniger als zwei Zeichen. Er kann kein Klammerpaar mehr enthalten.
loesung: |
  **Ansatz:** Von beiden Seiten abschneiden, bis vorne `[` und hinten `]` steht. Zwei verschiedene Selbstaufrufe, je nachdem, welche Seite noch nicht passt.
  ---
  Basisfall: Länge kleiner als 2. Dann kann kein Paar `[` … `]` mehr übrig sein, das Ergebnis ist `""`.
  ---
  ```java
  if (seq.length() < 2) {
      return "";
  }
  if (seq.charAt(0) != '[') {
      return innen(seq.substring(1));
  }
  if (seq.charAt(seq.length() - 1) != ']') {
      return innen(seq.substring(0, seq.length() - 1));
  }
  return seq.substring(1, seq.length() - 1);
  ```
  ---
  Fortschritt: Jeder Selbstaufruf ist um ein Zeichen kürzer. Der letzte `return` ist ein zweiter Basisfall ohne Selbstaufruf.
  ---
  Probe `"a]b[c"`: vorne fallen `a`, `]` und `b` weg, dann bleibt `"[c"`. Hinten fällt `c` weg, übrig ist `"["` mit Länge 1, also `""`.
```

```aufgabe
id: rk-pt-code-reparieren
titel: Eine fehlerhafte Rekursion reparieren
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode `ohneVokale` soll alle Kleinbuchstaben-Vokale `a e i o u` aus `s` entfernen. So wie sie in der Vorlage
  steht, kompiliert sie zwar, rechnet aber falsch. Finde und behebe alle Fehler. Die Struktur
  (erstes Zeichen und Rest) soll erhalten bleiben. Vorbedingung: `s != null`.

  Beispiele: `ohneVokale("rekursion")` liefert `"rkrsn"`, `ohneVokale("")` liefert `""`, `ohneVokale("aua")` liefert `""`.
teile:
  - typ: code
    vorlage: |
      public class Vokale {
          public static String ohneVokale(String s) {
              if (s.length() == 1) {
                  return s;
              }
              char c = s.charAt(0);
              String rest = ohneVokale(s.substring(0));
              if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                  return c + rest;
              }
              return rest;
          }
      }
    musterloesung: |
      public class Vokale {
          public static String ohneVokale(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              char c = s.charAt(0);
              String rest = ohneVokale(s.substring(1));
              if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                  return rest;
              }
              return c + rest;
          }
      }
    tests:
      - { aufruf: "ohneVokale(\"rekursion\")", erwartet: "\"rkrsn\"" }
      - { aufruf: "ohneVokale(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "ohneVokale(\"aua\")", erwartet: "\"\"", beschreibung: "nur Vokale" }
      - { aufruf: "ohneVokale(\"o\")", erwartet: "\"\"", versteckt: true }
    regeln: { keineSchleifenIn: [ohneVokale], rekursiv: [ohneVokale], keineHilfsmethoden: true, keineFelder: true }
    fehler:
      - { wert: 1, meldung: "Läuft es in einen `StackOverflowError`? `s.substring(0)` ist der ganze String, also kein Fortschritt. Der Rest beginnt bei Index 1. Bleiben die Vokale statt der Konsonanten übrig, sind die beiden Rückgaben vertauscht." }
      - { wert: 2, meldung: "Für `\"\"` wirft `charAt(0)` eine Exception. Der Basisfall muss den leeren String abfangen." }
      - { wert: 4, meldung: "Ein einzelner Vokal wird im Basisfall `length() == 1` unverändert zurückgegeben. Mit dem leeren String als Basisfall durchläuft auch das letzte Zeichen die Prüfung." }
hinweise:
  - Es gibt drei Fehler. Einer betrifft den Basisfall, einer den Fortschritt und einer die beiden Rückgaben.
  - Was soll mit einem Vokal passieren, was mit einem anderen Zeichen? Vergleiche mit den beiden `return`-Zeilen.
  - '`substring(0)` liefert den ganzen String. Ist `"o"` mit dem Basisfall `length() == 1` richtig behandelt?'
loesung: |
  **Ansatz:** Rückgaben, Fortschritt und Basisfall getrennt prüfen, wie bei den drei Fragen aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
  ---
  Rückgaben: Ein Vokal soll wegfallen, also `return rest;`. Jedes andere Zeichen bleibt, also `return c + rest;`. In der Vorlage sind die beiden vertauscht.
  ---
  Fortschritt: `s.substring(0)` ist der ganze String, die Rekursion endet nie. Richtig ist `s.substring(1)`.
  ---
  Basisfall: `s.length() == 1` fängt `""` nicht ab, und ein einzelner Vokal würde unverändert zurückgegeben. Richtig ist `if (s.isEmpty()) { return ""; }`.
  ---
  Probe: `ohneVokale("aua")` entfernt alle drei Vokale und liefert `""`. `ohneVokale("rekursion")` liefert `"rkrsn"`.
```

```reflexion
frage: Warum verlangen die Blätter und der Test Rekursion ganz ohne Schleifen, obwohl viele dieser Aufgaben mit einer Schleife kürzer wären?
antwort: |
  Die Aufgaben prüfen, ob man rekursiv denken kann: eine Aufgabe auf eine kleinere derselben Art zurückführen, einen
  Basisfall festlegen und das Ergebnis über Rückgabewerte zusammensetzen. Mit einer Schleife in der Methode könnte
  man die Rekursion umgehen und hätte genau das nicht gezeigt. Außerdem gibt es Aufgaben, die rekursiv viel natürlicher
  sind, etwa Fraktale in Kapitel 11 oder Verfahren auf Arrays, die ein Array in zwei Hälften teilen und jede Hälfte
  wieder genauso behandeln. Dafür braucht man diese Denkweise sicher.
  Das Schleifenverbot ist also eine Übungsregel, keine Aussage, dass Rekursion immer besser ist.
```

## Gemischte Wiederholung

Hier sind die Aufgaben bunt gemischt, auch mit Stoff aus den Kapiteln 2, 3, 4 und 6. Im Quiz und im Test steht nicht
dabei, zu welchem Abschnitt eine Frage gehört. Bei den ersten beiden Aufgaben musst du nichts programmieren. Du
entscheidest nur, welches Muster passt. Diese Entscheidung ist bei jeder Rekursionsaufgabe der erste Schritt.

```aufgabe
id: rk-mix-muster-waehlen
titel: Welche Zerlegung passt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Entscheide für jede Angabe, wie die Rekursion die Aufgabe am besten verkleinert. Du musst nichts programmieren.

  a) „Zähle, wie oft die Ziffer 7 in der Zahl `n` vorkommt. Strings sind nicht erlaubt.“

  b) „Liefere `true`, wenn in `text` zwei gleiche Zeichen direkt nebeneinander stehen.“ Der Kopf lautet
  `boolean doppelt(String text, int index)`.

  c) „Gib alle Zahlen von `a` bis `b` aus.“
teile:
  - typ: auswahl
    label: a)
    optionen: ['letzte Ziffer `n % 10`, Rest `n / 10`', 'erstes Zeichen `charAt(0)`, Rest `substring(1)`', 'Selbstaufruf mit `n - 1`']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Strings sind verboten, und `n` ist eine Zahl. Ziffern zerlegt man mit `% 10` und `/ 10`.
      - wert: 2
        meldung: '`n - 1` ändert die Zahl, nicht ihre Ziffern. Aus 77 würde 76, die zweite 7 ginge verloren.'
  - typ: auswahl
    label: b)
    optionen: ['denselben String mit `index + 1` weitergeben', 'den String mit `substring(1)` kürzen und `index` gleich lassen', 'den String mit `substring(2)` kürzen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Kopf gibt einen Index vor. Der trägt den Fortschritt, der String bleibt unverändert.
      - wert: 2
        meldung: Mit zwei Zeichen pro Schritt würden Paare an ungeraden Positionen übersehen.
  - typ: auswahl
    label: c)
    optionen: ['Intervall `[a, b]` mit Selbstaufruf `(a + 1, b)`', 'Ziffern von `a` mit `a / 10`', 'Selbstaufruf mit `(a, b)` und Ausgabe davor']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Gesucht sind alle Zahlen des Intervalls, nicht die Ziffern einer Zahl.
      - wert: 2
        meldung: Ohne veränderte Argumente gibt es keinen Fortschritt. Die Rekursion würde nie enden.
hinweise:
  - Frag dich zuerst, was kleiner werden soll. Eine Zahl, ein String, ein Index oder ein Intervall?
loesung: |
  **Ansatz:** Für jede Angabe bestimmen, welche Größe bei jedem Schritt schrumpft.
  ---
  a) Die Ziffern einer Zahl: `% 10` und `/ 10`. b) Der vorgegebene Index: `index + 1`.
  ---
  c) Das Intervall: Es wird mit `a + 1` von links her kürzer, bis `a > b` gilt.
```

```aufgabe
id: rk-mix-wo-ausgabe
titel: Vor oder nach dem Selbstaufruf?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Methode `zeige(String s)` hat den Basisfall `s.isEmpty()` und ruft sich mit `s.substring(1)` auf. Sie soll die
  Zeichen von `s` einzeln ausgeben, je eines pro Zeile. Entscheide für jede Anforderung, wo das
  `System.out.println(s.charAt(0));` stehen muss. Du musst nichts programmieren.

  a) Die Zeichen sollen in der ursprünglichen Reihenfolge erscheinen.

  b) Die Zeichen sollen rückwärts erscheinen.
teile:
  - typ: auswahl
    label: a)
    optionen: ['vor dem Selbstaufruf', 'nach dem Selbstaufruf', 'im Basisfall']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach dem Selbstaufruf läuft die Ausgabe auf dem Rückweg. Dann erscheint das letzte Zeichen zuerst.
      - wert: 2
        meldung: Im Basisfall ist der String leer. Dort gibt es kein Zeichen mehr auszugeben.
  - typ: auswahl
    label: b)
    optionen: ['vor dem Selbstaufruf', 'nach dem Selbstaufruf', 'im Basisfall']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Vor dem Selbstaufruf läuft die Ausgabe auf dem Hinweg, also in der ursprünglichen Reihenfolge.
      - wert: 2
        meldung: Der Basisfall läuft nur einmal, mit dem leeren String.
hinweise:
  - Hinweg in Aufrufreihenfolge, Rückweg umgekehrt.
loesung: |
  **Ansatz:** Die Stelle der Ausgabe entscheidet, ob sie auf dem Hinweg oder auf dem Rückweg passiert.
  ---
  a) Vor dem Selbstaufruf: Das erste Zeichen erscheint zuerst.
  ---
  b) Nach dem Selbstaufruf: Der innerste Aufruf mit dem letzten Zeichen ist zuerst fertig.
```

```aufgabe
id: rk-mix-ueberlauf
titel: Die Fakultät läuft über
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Diesmal ist der Rückgabetyp `int` statt `long`. Was gibt das Programm aus? Den Wertebereich von `int` kennst du aus
  [2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen).
teile:
  - typ: ausgabe
    code: |
      public class Ueberlauf {
          public static int fak(int n) {
              if (n == 0) {
                  return 1;
              }
              return n * fak(n - 1);
          }

          public static void main(String[] args) {
              System.out.println(fak(12));
              System.out.println(fak(13));
              System.out.println(fak(13) / 13 == fak(12));
          }
      }
    loesung: |
      479001600
      1932053504
      false
    fehler:
      - wert: "479001600\n6227020800\ntrue"
        meldung: '`6227020800` ist größer als der größte `int`-Wert 2147483647. Java meldet keinen Fehler, sondern rechnet mit einem übergelaufenen Wert weiter.'
hinweise:
  - Der größte `int`-Wert ist 2147483647. `13!` ist größer.
  - Beim Überlauf rechnet Java ohne Fehlermeldung weiter. Das Ergebnis ist dann ein falscher, aber gültiger `int`.
loesung: |
  **Ansatz:** `12! = 479001600` passt noch in ein `int`. `13!` wäre 6227020800 und ist zu groß.
  ---
  Bei `13 * 479001600` läuft `int` über. Ein `int` kann genau 4294967296 verschiedene Werte darstellen. Java zieht vom echten Ergebnis so oft 4294967296 ab, bis der Wert in den `int`-Bereich passt: `6227020800 - 4294967296 = 1932053504`.
  ---
  `1932053504 / 13` ist 148619500, nicht 479001600. Die letzte Zeile ist `false`. Deshalb verlangt die Fakultätsaufgabe in [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) den Typ `long`.
```

```aufgabe
id: rk-mix-kurzschluss
titel: Ein Basisfall dank Kurzschluss
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Die Kurzschlussauswertung kennst du aus
  [3.2 Bedingungen verknüpfen mit UND, ODER und NICHT](/lernen/ep1/verzweigungen/bedingungen-verknuepfen-mit-und-oder-und-nicht).
teile:
  - typ: ausgabe
    code: |
      public class Kurz {
          public static boolean beginntMitX(String s) {
              return s.length() > 0 && s.charAt(0) == 'x';
          }

          public static void main(String[] args) {
              System.out.println(beginntMitX("xy"));
              System.out.println(beginntMitX(""));
              System.out.println(beginntMitX("Xy"));
          }
      }
    loesung: |
      true
      false
      false
    fehler:
      - wert: "true\nfalse\ntrue"
        meldung: Groß- und Kleinbuchstaben sind verschiedene Zeichen. `'X' == 'x'` ist falsch.
hinweise:
  - Ist der linke Teil von `&&` falsch, wertet Java den rechten Teil gar nicht mehr aus.
loesung: |
  `"xy"`: Länge 2 und erstes Zeichen `x`, also `true`.
  ---
  `""`: `s.length() > 0` ist falsch. Wegen der Kurzschlussauswertung läuft `charAt(0)` gar nicht, es gibt keine Exception. Ergebnis `false`. `"Xy"` beginnt mit großem `X`, also `false`.
```

```aufgabe
id: rk-mix-schleife-umdrehen
titel: Eine Zahl mit einer Schleife umdrehen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? Die `while`-Schleife kennst du aus
  [4.1 Die while-Schleife: wiederholen, solange eine Bedingung gilt](/lernen/ep1/schleifen/die-while-schleife-wiederholen-solange-eine-bedingung-gilt).
teile:
  - typ: ausgabe
    code: |
      int n = 1230;
      int r = 0;
      while (n > 0) {
          r = r * 10 + n % 10;
          n = n / 10;
      }
      System.out.println(r);
    loesung: |
      321
    fehler:
      - wert: "0321"
        meldung: '`r` ist ein `int`. Eine führende Null wird nie ausgegeben. Nach dem ersten Durchlauf ist `r = 0`.'
      - wert: "1230"
        meldung: Jede Ziffer wird hinten an `r` angefügt, beginnend mit der letzten Ziffer von `n`. Die Reihenfolge dreht sich um.
hinweise:
  - Verfolge `n` und `r` in einer Tabelle. Die Ziffern von `n` werden von hinten abgebaut und hinten an `r` angefügt.
loesung: |
  **Ansatz:** Jeder Durchlauf nimmt die letzte Ziffer von `n` und hängt sie mit `r * 10 + Ziffer` an `r` an.
  ---
  `r` wird 0, dann `0 * 10 + 3 = 3`, dann 32, dann 321. `n` wird 123, 12, 1, 0.
  ---
  Die Null von 1230 kam zuerst und steht in `r` vorne, wo sie als führende Null verschwindet. Ausgabe `321`.
```

```aufgabe
id: rk-mix-seiteneffekt
titel: Zwei rekursive Aufrufe in einem Ausdruck
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? Seiteneffekte und Rückgabewerte kennst du aus
  [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
teile:
  - typ: ausgabe
    code: |
      public class Ausdruck {
          public static int t(int n) {
              System.out.print(n + " ");
              if (n <= 1) {
                  return 1;
              }
              return n + t(n - 2);
          }

          public static void main(String[] args) {
              int x = t(5) + t(2);
              System.out.println();
              System.out.println(x);
          }
      }
    loesung: |
      5 3 1 2 0 
      12
    trim: true
    fehler:
      - wert: "5 3 1 2 0\n11"
        meldung: Der Basisfall liefert 1, auch bei `n = 0`. `t(2) = 2 + t(0) = 2 + 1 = 3`.
      - wert: "2 0 5 3 1\n12"
        meldung: Java wertet die Operanden von `+` von links nach rechts aus. `t(5)` läuft vollständig, bevor `t(2)` beginnt.
hinweise:
  - Jeder Aufruf gibt zuerst sein `n` aus, auch der Aufruf im Basisfall.
  - '`t(5)` läuft über 5, 3 und 1, `t(2)` über 2 und 0.'
loesung: |
  **Ansatz:** Erst `t(5)` vollständig auswerten, dann `t(2)`. Jeder Aufruf gibt sein `n` gleich am Anfang aus.
  ---
  `t(5)` gibt `5 3 1 ` aus und liefert `5 + 3 + 1 = 9`. `t(2)` gibt `2 0 ` aus und liefert `2 + 1 = 3`.
  ---
  `x = 9 + 3 = 12`. Nach der Zeile mit den Aufrufen folgt `12`.
```

```aufgabe
id: rk-mix-code-iterativ
titel: Rekursiv und iterativ im Vergleich
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021 und WS 2023 (Vergleich rekursiv und iterativ, Idee übernommen)
angabe: |
  Die Blätter verlangen manchmal zu einer rekursiven Methode auch eine iterative Fassung, also eine mit Schleife.
  Gegeben ist die rekursive Methode

  ```java
  public static int produktZiffern(int n) {
      if (n < 10) {
          return n;
      }
      return n % 10 * produktZiffern(n / 10);
  }
  ```

  Schreibe `int produktZiffernIterativ(int n)` mit einer `while`-Schleife und **ohne** Selbstaufruf. Sie soll für
  jedes `n > 0` dasselbe liefern. Beispiel: `produktZiffernIterativ(234)` liefert `2 · 3 · 4 = 24`.
teile:
  - typ: code
    vorlage: |
      public class Iterativ {
          public static int produktZiffernIterativ(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Iterativ {
          public static int produktZiffernIterativ(int n) {
              int produkt = 1;
              while (n > 0) {
                  produkt = produkt * (n % 10);
                  n = n / 10;
              }
              return produkt;
          }
      }
    tests:
      - { aufruf: "produktZiffernIterativ(234)", erwartet: "24" }
      - { aufruf: "produktZiffernIterativ(7)", erwartet: "7", beschreibung: "einstellig" }
      - { aufruf: "produktZiffernIterativ(105)", erwartet: "0", beschreibung: "mit einer Null" }
      - { aufruf: "produktZiffernIterativ(99999)", erwartet: "59049", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Beginnt dein Produkt bei 0? Dann bleibt es immer 0. Der Anfangswert eines Produkts ist 1." }
      - { wert: 3, meldung: "Läuft deine Schleife, solange `n % 10 != 0` ist? Dann endet sie zu früh bei der Null. Die Bedingung lautet `n > 0`." }
hinweise:
  - Die Sammelvariable eines Produkts beginnt bei 1.
  - In jedem Durchlauf mit `n % 10` multiplizieren und dann `n = n / 10`. Die Schleife läuft, solange `n > 0` gilt.
loesung: |
  **Ansatz:** Den Merke-Kasten „Von der Schleife zur Rekursion“ aus [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung) rückwärts lesen: Der Selbstaufruf wird zur Schleife, das Zusammensetzen zur Sammelvariable.
  ---
  ```java
  int produkt = 1;
  while (n > 0) {
      produkt = produkt * (n % 10);
      n = n / 10;
  }
  return produkt;
  ```
  ---
  Unterschied zur rekursiven Fassung: Die Schleife braucht eine Sammelvariable und verändert `n`. Die Rekursion setzt das Ergebnis auf dem Rückweg zusammen und braucht keine veränderbare Variable.
  ---
  Probe `105`: `1 · 5 = 5`, dann `5 · 0 = 0`, dann `0 · 1 = 0`. Beide Fassungen liefern 0.
```

```aufgabe
id: rk-mix-trace-komplement
titel: Ziffern ergänzen, in einer Tabelle verfolgt
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist

  ```java
  public static int g(int n) {
      if (n < 10) {
          return n;
      }
      return g(n / 10) * 10 + (9 - n % 10);
  }
  ```

  `main` ruft `g(4827)` auf. Trage für jeden Aufruf das Argument und den Rückgabewert ein. Die erste Zeile ist der
  Aufruf aus `main`.
teile:
  - typ: trace
    spalten: [n, Rückgabewert]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf]
    loesung: [[4827, 4172], [482, 417], [48, 41], [4, 4]]
    fehler:
      - wert: ["4827", "5172", "482", "517", "48", "51", "4", "5"]
        meldung: Der Basisfall liefert `n` unverändert, nicht `9 - n`. Die erste Ziffer bleibt also 4.
      - wert: ["4827", "2714", "482", "714", "48", "14", "4", "4"]
        meldung: '`g(n / 10) * 10` schiebt das Ergebnis des Rests um eine Stelle nach links. Die neue Ziffer kommt hinten dazu, die Reihenfolge bleibt.'
hinweise:
  - Fülle die Spalte `n` von oben nach unten, die Spalte Rückgabewert von unten nach oben.
  - Jede Zeile ist der Rückgabewert der Zeile darunter mal 10 plus `9 - n % 10`.
loesung: |
  **Ansatz:** Hinweg: Argumente mit `/ 10`. Rückweg: Ergebnis des Selbstaufrufs um eine Stelle verschieben und die ergänzte letzte Ziffer anhängen.
  ---
  Argumente: 4827, 482, 48 und 4. Erst 4 ist kleiner als 10.
  ---
  Rückweg: `g(4) = 4`. `g(48) = 4 · 10 + (9 - 8) = 41`. `g(482) = 41 · 10 + (9 - 2) = 417`.
  ---
  `g(4827) = 417 · 10 + (9 - 7) = 4172`. Jede Ziffer außer der ersten wird zu `9 - Ziffer` ergänzt.
```

```aufgabe
id: rk-mix-rf-zaehlen
titel: Aufrufe und Ausgaben zählen
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: Format nach TUWEL-Test 2 (Aussagen zu einer rekursiven Methode), Inhalt neu
angabe: |
  Gegeben ist

  ```java
  public static void r(int n) {
      if (n <= 0) {
          System.out.println("Ende");
          return;
      }
      System.out.println(n);
      r(n - 3);
      System.out.println(n);
  }
  ```

  `main` ruft `r(10)` auf. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`r` wird insgesamt 5-mal aufgerufen.'
        richtig: true
        erklaerung: Die Argumente sind 10, 7, 4, 1 und -2. Das sind 5 Aufrufe, der letzte ist der Basisfall.
      - text: Das Programm gibt 8 Zeilen aus.
        richtig: false
        erklaerung: Vier Aufrufe geben je zwei Zahlen aus, dazu kommt `Ende`. Das sind 9 Zeilen.
      - text: Die erste Zahl nach `Ende` ist 1.
        richtig: true
        erklaerung: Auf dem Rückweg wird zuerst der Aufruf `r(1)` fertig.
      - text: Die Zahl 10 erscheint als erste und als letzte Zeile.
        richtig: true
        erklaerung: '`r(10)` gibt 10 auf dem Hinweg als Erstes aus und auf dem Rückweg als Letztes.'
    fehler:
      - wert: [f, f, r, r]
        meldung: Schreib die Argumente auf, bis eines `n <= 0` erfüllt. Auch der Aufruf mit -2 zählt.
      - wert: [r, r, r, r]
        meldung: Zähle die Ausgaben genau. Jeder der vier Aufrufe mit positivem `n` gibt zwei Zeilen aus, der Basisfall eine.
hinweise:
  - Argumentfolge aufschreiben. Dann für jeden Aufruf notieren, was er auf dem Hin- und auf dem Rückweg ausgibt.
loesung: |
  **Ansatz:** Argumente bestimmen und die Ausgaben in Hinweg, Basisfall und Rückweg ordnen.
  ---
  Argumente: 10, 7, 4, 1, -2. Das sind 5 Aufrufe. Ausgabe: `10 7 4 1 Ende 1 4 7 10`, je in einer Zeile.
  ---
  Das sind 9 Zeilen. Nach `Ende` kommt die 1, und die 10 steht ganz vorne und ganz hinten. Nur Aussage 2 ist falsch.
```

```aufgabe
id: rk-mix-zeichen-verschieben
titel: Zeichen um eine Stelle im Alphabet verschieben
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Was gibt das Programm aus? Mit Zeichen rechnen kennst du aus
  [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
teile:
  - typ: ausgabe
    code: |
      public class Verschieben {
          public static String weiter(String s) {
              if (s.isEmpty()) {
                  return "";
              }
              char c = (char) (s.charAt(0) + 1);
              return c + weiter(s.substring(1));
          }

          public static void main(String[] args) {
              System.out.println(weiter("HAL"));
              System.out.println('H' + 1);
          }
      }
    loesung: |
      IBM
      73
    fehler:
      - wert: "IBM\nI"
        meldung: '`''H'' + 1` ist eine Rechnung mit `char` und `int`. Das Ergebnis ist ein `int`, und `println` gibt die Zahl 73 aus.'
      - wert: "GZK\n73"
        meldung: '`+ 1` geht im Alphabet einen Schritt **weiter**, nicht zurück. Aus `H` wird `I`.'
hinweise:
  - Der Cast `(char)` macht aus der Zahl wieder ein Zeichen. Ohne Cast bleibt das Ergebnis eine Zahl.
loesung: |
  **Ansatz:** Jedes Zeichen wird um 1 erhöht und mit dem Cast wieder zum Zeichen gemacht.
  ---
  `H` wird `I`, `A` wird `B`, `L` wird `M`. Das Zeichen steht vor dem Rest, also bleibt die Reihenfolge: `IBM`.
  ---
  `'H' + 1` ohne Cast ist `72 + 1 = 73`, ein `int`. Es erscheint die Zahl 73.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Niveau von Quiz, Aufgabenblatt und Programmiertest. Die ersten beiden sind im Format des
TUWEL-Quiz gestellt (Single Choice und Richtig/Falsch). Danach folgen zwei Aufgaben im Stil der dritten Aufgabe des
Programmiertests, eine Blattaufgabe mit zwei Methoden und Fragen für das Feedbackgespräch. Plane die angegebene Zeit
ein und arbeite ohne Hinweise, bevor du einen aufdeckst. Das Format 2026W ist nicht veröffentlicht. Die Aufgaben
folgen den Quiz, Blättern und Programmiertests der Jahre 2020 bis 2023.

```aufgabe
id: rk-pruef-quiz-aufrufe
titel: Drei Quizfragen zu einer Rekursion
niveau: 3
punkte: 3
lernziel: 2
kompetenz: anwenden
quelle: Fragetypen nach den Zusatzfragen der Aufgabenblätter (Aufrufanzahl) und dem TUWEL-Test (Rückgabewert), Inhalt neu
angabe: |
  (Zeitrichtwert: 6 Minuten, je Frage 1 Punkt) Gegeben ist

  ```java
  public static int m(int a, int b) {
      if (a >= b) {
          System.out.println(a + b);
          return a;
      }
      System.out.println(a);
      return m(a + 2, b - 1) + 1;
  }
  ```

  `main` ruft `System.out.println(m(1, 10));` auf.

  **a)** Wie oft wird `m` insgesamt aufgerufen?

  **b)** Welche Zahl gibt `m` selbst als **letzte** aus, bevor `main` das Ergebnis druckt?

  **c)** Welchen Wert druckt `main`?
teile:
  - typ: auswahl
    label: a)
    optionen: ['3', '4', '5']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Aufruf, der im Basisfall landet, zählt mit. Die Argumente sind (1, 10), (3, 9), (5, 8) und (7, 7).
      - wert: 2
        meldung: 'Bei (7, 7) gilt schon `a >= b`. Danach folgt kein weiterer Aufruf.'
  - typ: auswahl
    label: b)
    optionen: ['14', '5', '7']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die 5 erscheint auf dem Hinweg. Danach kommt noch der Basisfall mit seiner eigenen Ausgabe.
      - wert: 2
        meldung: Der Basisfall gibt `a + b` aus, also `7 + 7`. Zurückgegeben wird dagegen nur `a`.
  - typ: auswahl
    label: c)
    optionen: ['7', '10', '13']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist der Rückgabewert des Basisfalls. Jeder der drei wartenden Aufrufe addiert noch 1 dazu.
      - wert: 2
        meldung: Es warten drei Aufrufe mit `+ 1`, nicht sechs. Der Basisfall selbst addiert nichts.
hinweise:
  - Schreib die Argumentpaare auf, bis `a >= b` gilt. Beide Argumente ändern sich in jedem Schritt.
  - Ausgaben vor dem Selbstaufruf kommen auf dem Hinweg. Das `+ 1` wird auf dem Rückweg gerechnet.
loesung: |
  **Ansatz:** Argumentpaare bestimmen, dann Ausgaben auf dem Hinweg und den Rückgabewert auf dem Rückweg.
  ---
  a) Paare: (1, 10), (3, 9), (5, 8), (7, 7). Bei (7, 7) gilt `7 >= 7`. Das sind 4 Aufrufe.
  ---
  b) Hinweg: 1, 3, 5. Dann der Basisfall mit `7 + 7 = 14`. Die 14 ist die letzte Ausgabe von `m`.
  ---
  c) Der Basisfall liefert 7. Drei wartende Aufrufe addieren je 1: `7 + 3 = 10`.
```

```aufgabe
id: rk-pruef-rf-sortiert
titel: Vier Aussagen zu einer rekursiven Methode
niveau: 3
punkte: 2
lernziel: 0
kompetenz: begruenden
quelle: Format nach TUWEL-Test 2 (vier Aussagen, Teilpunkte), Inhalt neu
angabe: |
  (Zeitrichtwert: 5 Minuten) Gegeben ist

  ```java
  public static boolean f(String s) {
      if (s.length() < 2) {
          return true;
      }
      if (s.charAt(0) > s.charAt(1)) {
          return false;
      }
      return f(s.substring(1));
  }
  ```

  Beurteile jede Aussage. Vorbedingung: `s != null`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`f("")` wirft eine Exception.'
        richtig: false
        erklaerung: Die Länge 0 ist kleiner als 2. Der erste Basisfall greift, bevor `charAt` aufgerufen wird.
      - text: '`f("abcd")` ruft `f` insgesamt genau 4-mal auf.'
        richtig: true
        erklaerung: Die Aufrufe haben die Längen 4, 3, 2 und 1. Bei Länge 1 greift der Basisfall.
      - text: '`f` hat zwei Basisfälle.'
        richtig: true
        erklaerung: Länge kleiner als 2 liefert `true`, ein absteigendes Paar liefert `false`. Beide enden ohne Selbstaufruf.
      - text: '`f` liefert genau dann `true`, wenn die Zeichen von `s` absteigend sortiert sind.'
        richtig: false
        erklaerung: '`f` liefert `false`, sobald ein Zeichen größer ist als sein Nachfolger. Es prüft also, ob `s` **aufsteigend** sortiert ist (gleiche Nachbarn erlaubt).'
    fehler:
      - wert: [r, r, r, f]
        meldung: Prüfe `f("")` genau. Welche Bedingung steht vor dem ersten `charAt`?
      - wert: [f, r, r, r]
        meldung: Probiere `f("ba")`. Das erste Zeichen ist größer als das zweite. Was liefert `f` dann?
hinweise:
  - Probiere `f("")`, `f("abcd")` und `f("ba")` von Hand aus.
loesung: |
  **Ansatz:** Basisfälle, Fortschritt und Bedeutung der Methode an kleinen Beispielen prüfen.
  ---
  `f("")` endet im ersten Basisfall ohne Exception. `f("abcd")` läuft über `"abcd"`, `"bcd"`, `"cd"` und `"d"`, also 4 Aufrufe.
  ---
  Es gibt zwei Basisfälle. `f("ba")` liefert `false`, `f("ab")` liefert `true`. Die Methode prüft also auf aufsteigende Ordnung. Aussagen 2 und 3 sind richtig.
```

```aufgabe
id: rk-pruef-pt-gerade-oft
titel: Kommt das Zeichen gerade oft vor?
niveau: 3
punkte: 9
lernziel: 4
kompetenz: anwenden
quelle: Programmiertest, Muster „Zeichen zählen mit Parität“ (evenOccurrences, nachgebaut)
angabe: |
  (Zeitrichtwert: 15 Minuten) Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine
  Hilfsmethoden, keine globalen Variablen, Methodenkopf unverändert, von `String` nur `charAt`, `equals`, `length`,
  `substring` und `isEmpty`.

  Implementiere `boolean geradeOft(String seq, char c)` **rekursiv**. Die Methode liefert `true`, wenn `c` in `seq`
  eine **gerade** Anzahl von Malen vorkommt (0 zählt als gerade), sonst `false`. Vorbedingung: `seq != null`.

  | Aufruf | Ergebnis |
  |---|---|
  | `geradeOft("KLLK", 'L')` | `true` |
  | `geradeOft("KLK", 'L')` | `false` |
  | `geradeOft("", 'q')` | `true` |
  | `geradeOft("xxx", 'x')` | `false` |
teile:
  - typ: code
    vorlage: |
      public class Paritaet {
          public static boolean geradeOft(String seq, char c) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Paritaet {
          public static boolean geradeOft(String seq, char c) {
              if (seq.isEmpty()) {
                  return true;
              }
              boolean rest = geradeOft(seq.substring(1), c);
              if (seq.charAt(0) == c) {
                  return !rest;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "geradeOft(\"KLLK\", 'L')", erwartet: "true" }
      - { aufruf: "geradeOft(\"KLK\", 'L')", erwartet: "false" }
      - { aufruf: "geradeOft(\"\", 'q')", erwartet: "true", beschreibung: "leerer String" }
      - { aufruf: "geradeOft(\"xxx\", 'x')", erwartet: "false" }
      - { aufruf: "geradeOft(\"abcabc\", 'c')", erwartet: "true", versteckt: true }
      - { aufruf: "geradeOft(\"Banane\", 'n')", erwartet: "true", versteckt: true }
      - { aufruf: "geradeOft(\"Banane\", 'B')", erwartet: "false", versteckt: true }
    regeln: { keineSchleifenIn: [geradeOft], rekursiv: [geradeOft], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 3, meldung: "Kommt `c` gar nicht vor, ist die Anzahl 0, und 0 ist gerade. Der Basisfall für den leeren String liefert `true`." }
      - { wert: 4, meldung: "Bei jedem Treffer wechselt die Antwort von gerade zu ungerade und zurück. Kehre das Ergebnis des Rests mit `!` um, wenn das erste Zeichen `c` ist." }
      - { wert: "keineFelder", meldung: "Ein Zähler als Klassenvariable ist verboten. Die Information „gerade oder ungerade“ steckt schon im Rückgabewert des Rests." }
hinweise:
  - Du brauchst keinen Zähler. Weißt du, ob `c` im Rest gerade oft vorkommt, kannst du die Antwort für den ganzen String ableiten.
  - Ist das erste Zeichen `c`, dreht sich die Antwort um. Sonst bleibt sie gleich.
loesung: |
  **Ansatz:** Statt zu zählen, die Parität (gerade oder ungerade) weiterreichen. Ein zusätzlicher Treffer macht aus gerade ungerade und umgekehrt.
  ---
  Basisfall: Im leeren String kommt `c` 0-mal vor, und 0 ist gerade. Ergebnis `true`.
  ---
  ```java
  if (seq.isEmpty()) {
      return true;
  }
  boolean rest = geradeOft(seq.substring(1), c);
  if (seq.charAt(0) == c) {
      return !rest;
  }
  return rest;
  ```
  ---
  Raster: Ansatz mit Rückgabe, Basisfall vorhanden und korrekt, Fortschritt `substring(1)` vorhanden und korrekt, Rückgabewert über `!rest`.
  ---
  Probe `"KLLK"`, `'L'`: von hinten `true` (leerer String), `true` (`K`), `false` (erstes `L` von hinten), `true` (zweites `L`), `true` (`K`). Ergebnis `true`.
```

```aufgabe
id: rk-pruef-pt-vervielfache
titel: Zeichen nach Vorgabe vervielfachen
niveau: 3
punkte: 9
lernziel: 5
kompetenz: anwenden
quelle: Programmiertest, Muster „zeichenweise transformieren“ (replicateCharacters, nachgebaut)
angabe: |
  (Zeitrichtwert: 20 Minuten) Es gelten die Einschränkungen des Programmiertests: keine Schleifen, keine
  Hilfsmethoden, keine globalen Variablen, Methodenkopf unverändert, von `String` nur `charAt`, `equals`, `length`,
  `substring` und `isEmpty`.

  Implementiere `String vervielfache(String text, String anzahl)` **rekursiv**. `anzahl` besteht aus Ziffern und ist
  genauso lang wie `text`. Das Zeichen an Position `i` von `text` erscheint im Ergebnis so oft, wie die Ziffer an
  Position `i` von `anzahl` angibt. Vorbedingung: `text != null`, `anzahl != null`,
  `text.length() == anzahl.length()`, `anzahl` enthält nur die Ziffern `0` bis `9`.

  | Aufruf | Ergebnis |
  |---|---|
  | `vervielfache("abc", "203")` | `"aaccc"` |
  | `vervielfache("xy", "11")` | `"xy"` |
  | `vervielfache("q", "0")` | `""` |
  | `vervielfache("", "")` | `""` |
teile:
  - typ: code
    vorlage: |
      public class Vervielfachen {
          public static String vervielfache(String text, String anzahl) {
              return ""; // TODO
          }
      }
    musterloesung: |
      public class Vervielfachen {
          public static String vervielfache(String text, String anzahl) {
              if (text.isEmpty()) {
                  return "";
              }
              char k = anzahl.charAt(0);
              if (k == '0') {
                  return vervielfache(text.substring(1), anzahl.substring(1));
              }
              String weniger = "" + (char) (k - 1) + anzahl.substring(1);
              return text.charAt(0) + vervielfache(text, weniger);
          }
      }
    tests:
      - { aufruf: "vervielfache(\"abc\", \"203\")", erwartet: "\"aaccc\"" }
      - { aufruf: "vervielfache(\"xy\", \"11\")", erwartet: "\"xy\"" }
      - { aufruf: "vervielfache(\"q\", \"0\")", erwartet: "\"\"", beschreibung: "Anzahl 0" }
      - { aufruf: "vervielfache(\"\", \"\")", erwartet: "\"\"", beschreibung: "leere Strings" }
      - { aufruf: "vervielfache(\"EP1\", \"912\")", erwartet: "\"EEEEEEEEEP11\"", versteckt: true }
      - { aufruf: "vervielfache(\"ab\", \"00\")", erwartet: "\"\"", versteckt: true }
    regeln: { keineSchleifenIn: [vervielfache], rekursiv: [vervielfache], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 1, meldung: "Wie oft erscheint ein Zeichen bei dir? Ohne Schleife musst du die Wiederholung durch Selbstaufrufe erzeugen. Verringere dazu die erste Ziffer von `anzahl` um 1 und rufe dich mit demselben `text` auf." }
      - { wert: 3, meldung: "Bei der Ziffer 0 erscheint das Zeichen gar nicht. Dann geht es mit dem Rest beider Strings weiter." }
      - { wert: "keineSchleifenIn", meldung: "Auch das Wiederholen eines Zeichens darf keine Schleife verwenden. Nutze die Ziffer selbst als Zähler und verringere sie im Selbstaufruf." }
hinweise:
  - Beide Strings laufen im Gleichschritt. Basisfall ist der leere `text`.
  - 'Ist die erste Ziffer `0`, geh zum nächsten Zeichen: `substring(1)` von beiden Strings.'
  - Sonst gib das erste Zeichen einmal aus und rufe dich mit demselben `text` auf. In `anzahl` steht dabei vorne eine um 1 kleinere Ziffer, zum Beispiel `(char) (k - 1)`.
loesung: |
  **Ansatz:** Zwei Arten von Fortschritt. Entweder wird die erste Ziffer kleiner (das Zeichen wird noch einmal ausgegeben), oder beide Strings werden kürzer (Ziffer 0, nächstes Zeichen).
  ---
  Die Ziffer als Zähler: Aus `'3'` wird mit `(char) (k - 1)` das Zeichen `'2'`, denn die Ziffern haben aufeinanderfolgende Zeichencodes.
  ---
  ```java
  if (text.isEmpty()) {
      return "";
  }
  char k = anzahl.charAt(0);
  if (k == '0') {
      return vervielfache(text.substring(1), anzahl.substring(1));
  }
  String weniger = "" + (char) (k - 1) + anzahl.substring(1);
  return text.charAt(0) + vervielfache(text, weniger);
  ```
  ---
  Terminierung: Jeder Selbstaufruf verkleinert entweder die erste Ziffer oder die Länge. Beides geht nur endlich oft.
  ---
  Probe `("abc", "203")`: `a` und weiter mit `"103"`, `a` und weiter mit `"003"`, dann `b` übersprungen, dann dreimal `c`. Ergebnis `"aaccc"`.
```

```aufgabe
id: rk-pruef-blatt-zahlen
titel: Zwei Methoden wie auf Blatt 3
niveau: 3
punkte: 4
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 3, WS 2021 und SS 2020, Aufgabe 3 (umformuliert)
angabe: |
  (Zeitrichtwert: 15 Minuten) Für beide Methoden gilt: rekursiv, keine Schleifen, keine Hilfsmethoden, keine
  Klassenvariablen, Methodenköpfe unverändert.

  **a)** `void teilbarAbsteigend(int start, int end, int teiler)` gibt alle Zahlen aus `[start, end]`, die durch
  `teiler` teilbar sind, **absteigend** aus, je eine pro Zeile. Vorbedingung: `start ≤ end`, `teiler > 0`.
  Beispiel: `teilbarAbsteigend(4, 20, 6)` gibt `18`, `12` und `6` aus.

  **b)** `int zaehleZiffer(int n, int ziffer)` liefert, wie oft `ziffer` in `n` vorkommt. Strings sind nicht erlaubt.
  Vorbedingung: `n ≥ 0`, `0 ≤ ziffer ≤ 9`. Beispiele: `zaehleZiffer(70070, 0)` liefert 3, `zaehleZiffer(0, 0)`
  liefert 1, `zaehleZiffer(123, 4)` liefert 0.
teile:
  - typ: code
    vorlage: |
      public class Blatt3 {
          public static void teilbarAbsteigend(int start, int end, int teiler) {
              // TODO a)
          }

          public static int zaehleZiffer(int n, int ziffer) {
              return 0; // TODO b)
          }
      }
    musterloesung: |
      public class Blatt3 {
          public static void teilbarAbsteigend(int start, int end, int teiler) {
              if (start > end) {
                  return;
              }
              if (end % teiler == 0) {
                  System.out.println(end);
              }
              teilbarAbsteigend(start, end - 1, teiler);
          }

          public static int zaehleZiffer(int n, int ziffer) {
              int beitrag = 0;
              if (n % 10 == ziffer) {
                  beitrag = 1;
              }
              if (n < 10) {
                  return beitrag;
              }
              return beitrag + zaehleZiffer(n / 10, ziffer);
          }
      }
    tests:
      - { aufruf: "teilbarAbsteigend(4, 20, 6)", stdout: "18\n12\n6\n" }
      - { aufruf: "teilbarAbsteigend(5, 5, 5)", stdout: "5\n", beschreibung: "a) Intervall mit einer Zahl" }
      - { aufruf: "zaehleZiffer(70070, 0)", erwartet: "3" }
      - { aufruf: "zaehleZiffer(0, 0)", erwartet: "1", beschreibung: "b) die Zahl 0" }
      - { aufruf: "zaehleZiffer(123, 4)", erwartet: "0" }
      - { aufruf: "teilbarAbsteigend(1, 3, 7)", stdout: "", versteckt: true }
      - { aufruf: "zaehleZiffer(999999, 9)", erwartet: "6", versteckt: true }
    regeln: { keineSchleifenIn: [teilbarAbsteigend, zaehleZiffer], rekursiv: [teilbarAbsteigend, zaehleZiffer], keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Absteigend heißt: zuerst die größte Zahl. Arbeite von `end` aus abwärts oder setze die Ausgabe hinter den Selbstaufruf mit `start + 1`." }
      - { wert: 4, meldung: "Die Zahl 0 hat eine Ziffer, die 0. Ein Basisfall `n == 0` mit Ergebnis 0 übersieht sie. Behandle die letzte Ziffer auch im Basisfall `n < 10`." }
      - { wert: "erlaubteApi", meldung: "Strings sind in b) nicht erlaubt. Zerlege `n` mit `% 10` und `/ 10`." }
hinweise:
  - a) Basisfall `start > end`. Für absteigend prüfst und gibst du `end` aus und rufst dich dann mit `end - 1` auf.
  - b) Ziffern-Muster. Beitrag 1, wenn `n % 10 == ziffer`. Basisfall `n < 10`, damit auch die Zahl 0 richtig gezählt wird.
loesung: |
  **Ansatz:** a) Intervall-Muster von oben her. b) Ziffern-Muster mit Beitrag 1 oder 0.
  ---
  a)
  ```java
  if (start > end) {
      return;
  }
  if (end % teiler == 0) {
      System.out.println(end);
  }
  teilbarAbsteigend(start, end - 1, teiler);
  ```
  ---
  b)
  ```java
  int beitrag = 0;
  if (n % 10 == ziffer) {
      beitrag = 1;
  }
  if (n < 10) {
      return beitrag;
  }
  return beitrag + zaehleZiffer(n / 10, ziffer);
  ```
  ---
  Probe: `teilbarAbsteigend(4, 20, 6)` prüft 20, 19, …, 4 und gibt 18, 12, 6 aus. `zaehleZiffer(70070, 0)` findet die Nullen an drei Stellen.
```

```aufgabe
id: rk-pruef-feedback
titel: Fragen im Feedbackgespräch zu deiner Lösung
niveau: 3
punkte: 3
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfragen der Aufgabenblätter 3 (WS 2021, SS 2020) und 5 (WS 2018), auf Zahlen-Rekursion übertragen
angabe: |
  (Zeitrichtwert: 5 Minuten) Du hast für Blatt 3 diese Lösung abgegeben:

  ```java
  public static void druckeGeradeAufsteigend(int start, int end) {
      if (start > end) {
          return;
      }
      if (start % 2 == 0) {
          System.out.println(start);
      }
      druckeGeradeAufsteigend(start + 1, end);
  }
  ```

  Beantworte die drei Fragen der Tutorin in je ein bis zwei Sätzen.

  1. Wie oft wird die Methode beim Aufruf `druckeGeradeAufsteigend(3, 10)` insgesamt aufgerufen?
  2. Was musst du ändern, damit die geraden Zahlen absteigend erscheinen? Nenne zwei Möglichkeiten.
  3. Warum lautet dein Basisfall `start > end` und nicht `start == end`?
teile:
  - typ: text
    muster: |
      1. Die Aufrufe haben start = 3, 4, …, 10 und zuletzt 11. Das sind 9 Aufrufe, der letzte ist der Basisfall.
      2. Entweder setze ich das if mit der Ausgabe hinter den Selbstaufruf, dann erscheinen die Zahlen auf dem
         Rückweg. Oder ich arbeite von oben: Ich prüfe und gebe end aus und rufe mich mit (start, end - 1) auf.
      3. Mit start == end würde die Methode beim letzten Wert aufhören, bevor sie ihn prüft. Die 10 fehlte dann.
         start > end bedeutet „Intervall leer“ und behandelt auch den Fall start == end noch normal.
hinweise:
  - Zähle die Werte von `start` bis zu dem, bei dem `start > end` gilt.
  - Für die Reihenfolge entscheidet die Stelle der Ausgabe oder die Richtung des Fortschritts.
loesung: |
  **Ansatz:** Jede Frage mit einem Begriff aus dem Kapitel beantworten: Aufrufanzahl, Hin- und Rückweg, Basisfall.
  ---
  1. Neun Aufrufe: `start` von 3 bis 11, der letzte ist der Basisfall.
  ---
  2. Ausgabe hinter den Selbstaufruf setzen oder mit `end - 1` von oben her arbeiten.
  ---
  3. `start == end` würde die letzte Zahl des Intervalls nicht mehr prüfen. `start > end` heißt „nichts mehr übrig“.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Eine rekursive Methode braucht einen Basisfall ohne Selbstaufruf und einen Fortschritt,
  der jeden erlaubten Aufruf sicher zum Basisfall führt. Fehlt eines davon, endet sie mit einem StackOverflowError.
  (2) Jeder Aufruf hat einen eigenen Rahmen auf dem Aufrufstapel. Ausgaben vor dem Selbstaufruf erscheinen auf dem
  Hinweg, Ausgaben danach in umgekehrter Reihenfolge auf dem Rückweg. (3) Zahlen zerlegt man mit `% 10` und `/ 10`,
  Strings mit `charAt(0)` und `substring(1)`, und das Ergebnis entsteht aus dem eigenen Beitrag und dem Ergebnis des
  Selbstaufrufs. Ebenso gute Antworten sind die Einschränkungen des Programmiertests oder der Umbau einer Schleife.
```

:::zusammenfassung
1. **Rekursion** heißt: Eine Methode ruft sich selbst auf und führt so eine Aufgabe auf eine kleinere derselben Art zurück. Jeder Selbstaufruf ist ein gewöhnlicher Aufruf mit eigenen Parametern und lokalen Variablen.
2. **Basisfall und Fortschritt:** Im Basisfall steht das Ergebnis ohne Selbstaufruf fest. Der Fortschritt verändert die Argumente so, dass jeder erlaubte Aufruf den Basisfall nach endlich vielen Schritten erreicht. Bedingungen wie `n <= 0` oder `start > end` können nicht übersprungen werden.
3. **Aufrufstapel:** Jeder laufende Aufruf hat einen Rahmen. Auf dem Hinweg kommen Rahmen dazu, auf dem Rückweg werden sie in umgekehrter Reihenfolge fertig. Ausgaben vor dem Selbstaufruf erscheinen in Aufrufreihenfolge, Ausgaben danach umgekehrt. Bei einem Selbstaufruf pro Aufruf zählt man die Aufrufe, indem man die Argumente bis einschließlich Basisfall aufschreibt.
4. **Zahlen:** Bei Intervallen wird `start + 1` oder `end - 1` zum Fortschritt, Basisfall `start > end`. Bei Ziffern ist `n % 10` die letzte Ziffer und `n / 10` der Rest, Basisfall `n < 10`.
5. **Strings:** erstes Zeichen `charAt(0)`, Rest `substring(1)`, Basisfall `isEmpty()`. Das eigene Stück vor dem Ergebnis des Rests erhält die Reihenfolge, dahinter dreht es sie um. Zwei `char` verkettet man mit `"" + c + c`.
6. **Zusatzparameter:** Ein Index wandert mit `index + 1` (nie `index++`), ein Zähler wird angepasst, zwei Strings werden im Gleichschritt gekürzt. Den Startwert wählt der Aufrufer. Fehlt ein Index im Kopf, hilft oft das Arbeiten von hinten.
7. **Programmiertest:** keine Schleifen in der rekursiven Methode, keine Hilfsmethoden, keine globalen Variablen, Kopf unverändert, von `String` nur `charAt`, `equals`, `length`, `substring`, `isEmpty`. Punkte gibt es für Basisfall, Fortschritt und vor allem den richtigen Rückgabewert.
8. **Schleife umbauen:** Schleifenbedingung umkehren ergibt den Basisfall, der Anfangswert der Sammelvariable das Ergebnis des Basisfalls, der Rumpf den Beitrag, `i++` den Selbstaufruf.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Kein Basisfall**, die Methode endet mit `StackOverflowError`. Training: „Welche Aufrufe enden?“ und „Warum eine Abbruchbedingung?“ in [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
2. **Basisfall übersprungen**, etwa `n == 0` bei Schrittweite 2. Training: „Summe der ungeraden Zahlen bis n“ in [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
3. **Aufruf des Basisfalls nicht mitgezählt.** Training: „Wie oft wird g aufgerufen?“ in [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg) und „Drei Quizfragen zu einer Rekursion“ in [10.8 Prüfungsaufgaben](/lernen/ep1/rekursion/pruefungsaufgaben).
4. **Reihenfolge von Ausgaben vor und nach dem Selbstaufruf verwechselt.** Training: „Klammern auf dem Hin- und Rückweg“ und „Ein Muster aus Hin- und Rückweg“ in [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg).
5. **Ergebnis des Selbstaufrufs weggeworfen oder nicht zurückgegeben.** Training: „Kommt eine Ziffer vor?“ in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings) und „Eine fehlerhafte Rekursion reparieren“ in [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung).
6. **Letzte Zahl des Intervalls vergessen** (`start == end` statt `start > end`). Training: „Gerade Zahlen aufsteigend“ in [10.3 Rekursion mit ganzen Zahlen](/lernen/ep1/rekursion/rekursion-mit-ganzen-zahlen).
7. **Die Zahl 0 bei Ziffern falsch behandelt** (Basisfall `n == 0`). Training: „Zwei Methoden wie auf Blatt 3“ in [10.8 Prüfungsaufgaben](/lernen/ep1/rekursion/pruefungsaufgaben).
8. **Führende Nullen verloren**, etwa `31,4` statt `31,004`. Training: „Tausendertrennzeichen rekursiv“ in [10.3 Rekursion mit ganzen Zahlen](/lernen/ep1/rekursion/rekursion-mit-ganzen-zahlen).
9. **Leerer String nicht abgefangen** (`length() == 1` als einziger Basisfall). Training: „Der passende Basisfall“ und „Vier Versuche, einen String umzudrehen“ in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
10. **Zwei `char` addiert statt verkettet** (`c + c` ergibt eine Zahl). Training: „Ziffern verdoppeln“ in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
11. **Eigenes Stück an der falschen Stelle**, sodass sich die Reihenfolge ungewollt umdreht. Training: „Umdrehen und ein Zeichen weglassen“ und „Alle Sterne nach vorne“ in [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
12. **`index++` statt `index + 1` oder ein Paar, das aus dem String hinausläuft.** Training: „Aufsteigende Ziffernpaare ab einem Index“ in [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string).
13. **Methodenkopf erweitert oder Klassenvariable als Zähler.** Training: „Warum nicht einfach einen Parameter ergänzen?“ in [10.5 Zusätzliche Parameter: Index, Zähler und zweiter String](/lernen/ep1/rekursion/zusaetzliche-parameter-index-zaehler-und-zweiter-string). Außerdem: „Kommt das Zeichen gerade oft vor?“ in [10.8 Prüfungsaufgaben](/lernen/ep1/rekursion/pruefungsaufgaben).
14. **Schleife, `==` bei Strings oder verbotene String-Methode in der rekursiven Methode.** Training: „Verstöße gegen die Einschränkungen finden“ in [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung).
15. **`int`-Überlauf bei schnell wachsenden Ergebnissen.** Training: „Die Fakultät läuft über“ in [10.7 Gemischte Wiederholung](/lernen/ep1/rekursion/gemischte-wiederholung).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Basisfall und Fortschritt benennen und begründen, ob eine Rekursion endet.
2. Den Aufrufstapel verfolgen und Rückgabewerte in einer Tabelle herleiten.
3. Aufrufe zählen und die Reihenfolge von Ausgaben vor und nach dem Selbstaufruf angeben.
4. Rekursive Methoden für Intervalle und Ziffern schreiben.
5. Rekursive Methoden auf Strings schreiben, die zählen, prüfen oder umbauen.
6. Rekursive Methoden mit Index, Zähler oder zweitem String schreiben.
7. Eine Schleife in eine Rekursion umbauen und die Einschränkungen des Tests einhalten.
8. Fehlerhafte Rekursionen finden und reparieren.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn, aber nach jedem Aufgabenblatt ein **Feedbackgespräch**.
Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Zusatzfragen zu den Rekursionsaufgaben der Blätter
fragen etwa nach der Abbruchbedingung, nach der Anzahl der Aufrufe und nach Varianten der Aufgabe.
Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die Musterantwort auf und vergleiche sie
mit den Kernpunkten.

```karten
- id: rk-karte-rekursion
  frage: Was ist eine rekursive Methode, und aus welchen Teilen besteht sie?
  antwort: |
    Eine rekursive Methode ruft sich in ihrem Rumpf selbst auf. Sie führt eine Aufgabe auf eine kleinere Aufgabe
    derselben Art zurück. Sie besteht aus mindestens einem Basisfall, in dem das Ergebnis ohne Selbstaufruf feststeht,
    und dem rekursiven Fall mit dem Selbstaufruf. Beim Selbstaufruf ändern sich die Argumente so, dass die Aufgabe
    kleiner wird. Das nennt man den Fortschritt.
  kernpunkte:
    - Methode ruft sich selbst auf
    - Basisfall ohne Selbstaufruf
    - rekursiver Fall mit Fortschritt
- id: rk-karte-abbruch
  frage: Warum braucht eine Rekursion eine Abbruchbedingung, und gibt es eine Grenze für die Rekursionstiefe?
  antwort: |
    Ohne Abbruchbedingung folgt auf jeden Aufruf ein weiterer, die Rekursion endet nie. Jeder offene Aufruf belegt
    einen Rahmen auf dem Aufrufstapel mit seinen Parametern und der Rücksprungstelle. Dieser Speicher ist begrenzt.
    Sind zu viele Aufrufe gleichzeitig offen, bricht Java mit einem StackOverflowError ab. Das kann auch einer
    korrekten Rekursion passieren, wenn sie sehr tief wird.
  kernpunkte:
    - ohne Basisfall kein Ende
    - jeder offene Aufruf belegt Platz im Stapel
    - StackOverflowError als Grenze
- id: rk-karte-terminierung
  frage: Wie prüfst du, ob eine Rekursion für alle erlaubten Eingaben endet? Nenne ein Gegenbeispiel.
  antwort: |
    Ich schreibe die Folge der Argumente auf, die der Fortschritt erzeugt, und prüfe, ob sie den Basisfall sicher
    trifft. Gegenbeispiel: Basisfall `n == 0` und Selbstaufruf mit `n - 2`. Für gerade `n` endet das, für `n = 5` läuft
    die Folge 5, 3, 1, -1 an der 0 vorbei. Sicherer ist eine Bedingung wie `n <= 0`, die man nicht überspringen kann.
  kernpunkte:
    - Argumentfolge aufschreiben
    - Basisfall muss getroffen werden
    - Bedingung mit kleiner-gleich statt gleich
- id: rk-karte-stapel
  frage: Was passiert auf dem Aufrufstapel bei `summe(3)` mit `return n + summe(n - 1)`?
  antwort: |
    Auf dem Hinweg kommt für jeden Aufruf ein Rahmen dazu: `summe(3)`, `summe(2)`, `summe(1)` und `summe(0)`. Jeder
    Rahmen hat sein eigenes `n` und wartet auf das Ergebnis des nächsten. Gerechnet wird noch nichts. `summe(0)` ist
    der Basisfall und liefert 0. Auf dem Rückweg werden die Rahmen von oben nach unten fertig und rechnen 1, dann 3,
    dann 6.
  kernpunkte:
    - ein Rahmen pro Aufruf mit eigenem n
    - Hinweg ohne Rechnung
    - Rückweg rechnet von innen nach außen
- id: rk-karte-eigene-variablen
  frage: Warum stört es nicht, dass alle Aufrufe von `summe` einen Parameter namens `n` haben?
  antwort: |
    Wie in Kapitel 6 bekommt jeder Aufruf eigene Parameter, die mit Kopien der Argumente belegt werden
    (call-by-value), und eigene lokale Variablen. Ein Selbstaufruf ist ein ganz gewöhnlicher Aufruf. Das `n` von `summe(3)` bleibt 3, auch
    während `summe(2)` mit seinem eigenen `n = 2` läuft. Darum kann jeder Rahmen nach dem Selbstaufruf mit seinem
    eigenen Wert weiterrechnen.
  kernpunkte:
    - jeder Aufruf eigene Parameter
    - call-by-value wie in Kapitel 6
    - Wert bleibt bis zum Rückweg erhalten
- id: rk-karte-anzahl
  frage: Wie bestimmst du im Quiz, wie oft eine Methode aufgerufen wird?
  antwort: |
    Ich schreibe die Argumente aller Aufrufe der Reihe nach auf, beginnend mit dem Aufruf aus `main`, bis eines den
    Basisfall erfüllt. Dann zähle ich die Zeilen. Der erste Aufruf und der Aufruf, der im Basisfall landet, zählen
    beide mit. Bei `summe(4)` mit `n - 1` und Basisfall `n == 0` sind das 5 Aufrufe, nicht 4.
  kernpunkte:
    - Argumente aufschreiben
    - erster und letzter Aufruf zählen mit
    - Beispiel n plus 1 Aufrufe
- id: rk-karte-reihenfolge
  frage: Warum erscheinen Ausgaben hinter dem Selbstaufruf in umgekehrter Reihenfolge?
  antwort: |
    Eine Anweisung hinter dem Selbstaufruf läuft erst, wenn der Selbstaufruf ganz fertig ist. Fertig werden die
    Aufrufe aber in umgekehrter Reihenfolge, wie sie begonnen haben, denn auf dem Stapel kann nur der oberste Rahmen
    weitermachen. Also gibt der zuletzt begonnene Aufruf zuerst aus. Ausgaben vor dem Selbstaufruf erscheinen dagegen
    auf dem Hinweg in Aufrufreihenfolge.
  kernpunkte:
    - Anweisung danach läuft auf dem Rückweg
    - zuletzt begonnen wird zuerst fertig
    - davor in Aufrufreihenfolge
- id: rk-karte-ziffern
  frage: Wie zerlegst du eine Zahl in einer Rekursion, und was ist der passende Basisfall?
  antwort: |
    Ich nutze die Ganzzahldivision aus Kapitel 2. `n % 10` ist die letzte Ziffer, `n / 10` ist die Zahl ohne sie.
    Der Selbstaufruf bekommt `n / 10`, der aktuelle Aufruf verarbeitet `n % 10`. Basisfall ist eine einstellige Zahl,
    also `n < 10`. Mit `n == 0` als Basisfall würde die Zahl 0 selbst falsch behandelt, obwohl sie eine Ziffer hat.
  kernpunkte:
    - n % 10 letzte Ziffer, n / 10 Rest
    - Basisfall n < 10
    - Zahl 0 als Randfall
- id: rk-karte-strings
  frage: Wie zerlegst du einen String rekursiv, und wie entscheidest du, wo das eigene Zeichen hinkommt?
  antwort: |
    Ich nehme das erste Zeichen `s.charAt(0)` und den Rest `s.substring(1)`. Basisfall ist der leere String. Der
    Selbstaufruf liefert das Ergebnis für den Rest. Soll die Reihenfolge erhalten bleiben, setze ich mein Stück davor,
    soll sie sich umdrehen, dahinter. Ich prüfe das kurz mit einem Beispiel aus zwei Zeichen.
  kernpunkte:
    - charAt(0) und substring(1)
    - Basisfall leerer String
    - davor erhält, dahinter dreht um
- id: rk-karte-char-plus
  frage: Warum liefert `c + c + rest` bei `char c = '3'` nicht `"33..."`?
  antwort: |
    Java wertet `+` von links nach rechts aus. `c + c` sind zwei `char`, und mit `char` rechnet Java wie mit Zahlen,
    wie in Kapitel 2. `'3'` hat den Wert 51, also ergibt `c + c` die Zahl 102. Erst dann wird `rest` angehängt. Richtig
    ist `"" + c + c + rest`. Sobald links ein String steht, bedeutet jedes weitere `+` verketten.
  kernpunkte:
    - Auswertung von links nach rechts
    - char plus char ist eine Zahl
    - mit leerem String beginnen
- id: rk-karte-index
  frage: Wozu dient ein zusätzlicher Index-Parameter, und was ist der Startaufruf?
  antwort: |
    Der Index übernimmt die Rolle der Laufvariable einer Schleife. Der String bleibt unverändert, und der Selbstaufruf
    bekommt `index + 1`. So kennt jeder Aufruf seine Position. Der Basisfall greift, wenn der Index das Ende erreicht.
    Der Startaufruf ist der erste Aufruf von außen. Er legt den Anfangswert fest, für den ganzen String meist 0.
  kernpunkte:
    - Index statt Laufvariable
    - Fortschritt index plus 1
    - Startaufruf legt Anfangswert fest
- id: rk-karte-von-hinten
  frage: Wie kommst du an die Position eines Zeichens, wenn der Methodenkopf keinen Index vorsieht?
  antwort: |
    Einen Parameter darf ich nicht ergänzen, und eine Hilfsmethode ist verboten. Ich arbeite deshalb von hinten. Ich
    spalte das letzte Zeichen mit `s.charAt(s.length() - 1)` ab und rufe mich mit `s.substring(0, s.length() - 1)`
    auf. Der Index des letzten Zeichens ist `s.length() - 1`, also kennt jeder Aufruf ihn ohne Zusatzparameter.
  kernpunkte:
    - Kopf nicht ändern, keine Hilfsmethode
    - letztes Zeichen abspalten
    - Index ist Länge minus 1
- id: rk-karte-einschraenkungen
  frage: Warum verbieten Blätter und Test in der rekursiven Methode Schleifen, Hilfsmethoden und globale Variablen?
  antwort: |
    Die Aufgaben prüfen, ob man rekursiv denken kann. Mit einer Schleife oder einer Hilfsmethode mit zusätzlichem
    Parameter könnte man die eigentliche Schwierigkeit umgehen. Globale Variablen sind verboten, weil ihr Wert über
    Aufrufe hinweg erhalten bleibt. Dann liefert dieselbe Eingabe beim zweiten Aufruf ein anderes Ergebnis. Alle
    Information soll über Parameter hinein und über `return` hinaus fließen.
  kernpunkte:
    - rekursives Denken wird geprüft
    - globale Variablen machen Ergebnisse abhängig von früheren Aufrufen
    - Information über Parameter und return
- id: rk-karte-umbauen
  frage: Wie baust du eine Schleife aus Kapitel 4 in eine Rekursion um?
  antwort: |
    Die Schleifenbedingung kehre ich um, das ergibt den Basisfall. Der Anfangswert der Sammelvariable wird das
    Ergebnis des Basisfalls, etwa 0 beim Zählen oder der leere String. Der Schleifenrumpf wird zum Beitrag des
    aktuellen Aufrufs. Das Weiterzählen `i++` wird zum Selbstaufruf mit dem kleineren Rest, und statt in eine Variable
    zu sammeln, verknüpfe ich den Beitrag mit dem Ergebnis des Selbstaufrufs.
  kernpunkte:
    - Bedingung umkehren ergibt Basisfall
    - Anfangswert ist Ergebnis des Basisfalls
    - Rumpf wird Beitrag, i++ wird Selbstaufruf
- id: rk-karte-raster
  frage: Wofür gibt es im Programmiertest bei der rekursiven Methode Punkte?
  antwort: |
    Im Test vom Jänner 2022 gab es 9 Punkte: je einen für einen Ansatz mit Rückgabe, für einen vorhandenen und einen
    korrekten Basisfall, für einen vorhandenen und einen korrekten Fortschritt und 4 für den richtigen Rückgabewert.
    Darum schreibe ich Basisfall und Fortschritt immer sauber hin, auch wenn ich beim Rest unsicher bin. Ein Verstoß
    gegen die Einschränkungen, etwa eine Schleife, gefährdet dagegen die ganze Aufgabe.
  kernpunkte:
    - Basisfall und Fortschritt je vorhanden und korrekt
    - Rückgabewert bringt die meisten Punkte
    - Verstoß gegen Einschränkungen gefährdet alles
- id: rk-karte-fehler
  frage: Deine Rekursion wirft einen StackOverflowError. Wie suchst du den Fehler?
  antwort: |
    Ich prüfe drei Dinge. Erstens, ob es überhaupt einen Basisfall gibt. Zweitens, ob der Selbstaufruf wirklich
    kleinere Argumente bekommt, also etwa `substring(1)` statt `substring(0)` oder `index + 1` statt `index++`.
    Drittens, ob der Fortschritt den Basisfall überspringen kann, zum Beispiel `n == 0` bei Schrittweite 2. Dazu
    schreibe ich für einen kleinen Aufruf die Argumentfolge von Hand auf.
  kernpunkte:
    - Basisfall vorhanden
    - Argumente werden wirklich kleiner
    - Basisfall nicht überspringbar
```
